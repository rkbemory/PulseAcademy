/* Pulse for Nurses — "Ask Pulse" AI study tutor (chat UI).
   Talks to /api/ask (Gemini, server-side key). Multi-turn, sign-in gated when
   accounts are enabled, dormant-safe when the API key is absent. */
(function () {
  "use strict";

  var LS_THREAD = "pulse:ask:thread";
  var API = "/api/ask";
  var STARTERS = [
    "Explain the difference between Type 1 and Type 2 diabetes.",
    "What are the 5 rights of medication administration?",
    "Why do we monitor potassium with furosemide?",
    "Summarise the stages of wound healing.",
    "What causes pre-eclampsia and what are the danger signs?"
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }

  /* Tiny, safe markdown: escape first, then bold / bullets / numbered / paragraphs. */
  function mdLite(text) {
    var lines = esc(text).replace(/\r/g, "").split("\n");
    var html = "", list = null;
    function closeList() { if (list) { html += "</" + list + ">"; list = null; } }
    lines.forEach(function (raw) {
      var line = raw.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
      var bullet = line.match(/^\s*[-*]\s+(.*)$/);
      var num = line.match(/^\s*\d+\.\s+(.*)$/);
      if (bullet) { if (list !== "ul") { closeList(); html += "<ul>"; list = "ul"; } html += "<li>" + bullet[1] + "</li>"; return; }
      if (num) { if (list !== "ol") { closeList(); html += "<ol>"; list = "ol"; } html += "<li>" + num[1] + "</li>"; return; }
      closeList();
      if (line.trim() === "") return;
      html += "<p>" + line + "</p>";
    });
    closeList();
    return html;
  }

  function loadThread() { try { var t = JSON.parse(localStorage.getItem(LS_THREAD) || "[]"); return Array.isArray(t) ? t : []; } catch (e) { return []; } }
  function saveThread(t) { try { localStorage.setItem(LS_THREAD, JSON.stringify(t.slice(-20))); } catch (e) {} }

  function boot() {
    var root = document.getElementById("ask-root");
    if (!root) return;

    var thread = loadThread();      // [{role:'user'|'model', text}]
    var busy = false;

    root.innerHTML =
      '<div class="ask-wrap">' +
        '<div class="ask-stream" id="ask-stream"></div>' +
        '<form class="ask-form" id="ask-form">' +
          '<textarea class="ask-input" id="ask-input" rows="1" placeholder="Ask about any nursing or health-science topic…" maxlength="2000"></textarea>' +
          '<button type="submit" class="ask-send" id="ask-send" aria-label="Send">➤</button>' +
        "</form>" +
        '<p class="ask-disc">💡 Pulse is an AI <strong>study aid</strong> — great for understanding concepts and exam questions, but not a substitute for professional medical advice. Always verify clinical details against current guidelines.</p>' +
      "</div>";

    var stream = root.querySelector("#ask-stream");
    var form = root.querySelector("#ask-form");
    var input = root.querySelector("#ask-input");
    var sendBtn = root.querySelector("#ask-send");

    function bubble(role, html, cls) {
      var b = document.createElement("div");
      b.className = "ask-msg ask-" + role + (cls ? " " + cls : "");
      b.innerHTML = (role === "model" ? '<span class="ask-ava">🩺</span>' : "") + '<div class="ask-bubble">' + html + "</div>";
      stream.appendChild(b);
      stream.scrollTop = stream.scrollHeight;
      return b;
    }

    function renderWelcome() {
      stream.innerHTML =
        '<div class="ask-welcome">' +
          '<div class="ask-welcome-ic">🩺</div>' +
          "<h2>Ask Pulse anything</h2>" +
          "<p>Your AI nursing tutor — explanations, exam-answer rationales, quick concept checks. Try one of these:</p>" +
          '<div class="ask-starters">' + STARTERS.map(function (s) {
            return '<button type="button" class="ask-starter">' + esc(s) + "</button>";
          }).join("") + "</div>" +
        "</div>";
      stream.querySelectorAll(".ask-starter").forEach(function (b) {
        b.addEventListener("click", function () { input.value = b.textContent; ask(); });
      });
    }

    function renderThread() {
      if (!thread.length) { renderWelcome(); return; }
      stream.innerHTML = "";
      thread.forEach(function (m) { bubble(m.role, m.role === "model" ? mdLite(m.text) : esc(m.text)); });
    }

    function signInPrompt() {
      var b = bubble("model", "🔒 <strong>Sign in (free) to chat with Pulse</strong><br>Your questions and answers stay with your account. It only takes a moment.<br><button type=\"button\" class=\"btn btn-primary ask-signin\" style=\"margin-top:10px\">Sign in / Create account</button>", "ask-gate");
      b.querySelector(".ask-signin").addEventListener("click", function () {
        if (window.PulseAuth && window.PulseAuth.openModal) window.PulseAuth.openModal("signin", { stay: true });
      });
    }

    var pending = null;
    function ask() {
      if (busy) return;
      var q = input.value.trim();
      if (!q) return;

      // Sign-in gate (only when accounts are live)
      if (window.PulseAuth && window.PulseAuth.enabled && !window.PulseAuth.user) {
        if (!thread.length) stream.innerHTML = "";
        bubble("user", esc(q));
        pending = q; input.value = "";
        signInPrompt();
        return;
      }

      if (!thread.length) stream.innerHTML = "";
      input.value = ""; autoGrow();
      thread.push({ role: "user", text: q });
      bubble("user", esc(q));
      saveThread(thread);

      busy = true; sendBtn.disabled = true;
      var typing = bubble("model", '<span class="ask-typing"><span></span><span></span><span></span></span>', "is-typing");

      fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: thread.slice(-10) })
      }).then(function (r) { return r.json().then(function (d) { return { st: r.status, d: d }; }); })
        .then(function (x) {
          typing.remove(); busy = false; sendBtn.disabled = false;
          var d = x.d || {};
          if (x.st === 429) {
            bubble("model", d.error === "site-limit"
              ? "⏳ Pulse has answered a lot of questions today across the site — please try again tomorrow."
              : "⏳ You've reached today's free question limit (" + (d.perDay || 20) + "). Come back tomorrow to keep learning!", "ask-note");
            return;
          }
          if (!d.ok || !d.answer) {
            bubble("model", "😕 Sorry, I couldn't answer that one just now. Please try rephrasing, or ask again in a moment.", "ask-note");
            return;
          }
          thread.push({ role: "model", text: d.answer });
          bubble("model", mdLite(d.answer));
          saveThread(thread);
        })
        .catch(function () {
          typing.remove(); busy = false; sendBtn.disabled = false;
          bubble("model", "📶 I couldn't reach the server — check your connection and try again.", "ask-note");
        });
    }

    // Resume a pending question once the user signs in
    if (window.PulseAuth && window.PulseAuth.onChange) {
      window.PulseAuth.onChange(function (u) {
        if (u && pending) {
          var q = pending; pending = null;
          // remove the gate bubble(s) and re-ask cleanly
          renderThread();
          input.value = q; ask();
        }
      });
    }

    function autoGrow() { input.style.height = "auto"; input.style.height = Math.min(140, input.scrollHeight) + "px"; }
    input.addEventListener("input", autoGrow);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); }
    });
    form.addEventListener("submit", function (e) { e.preventDefault(); ask(); });

    renderThread();

    // Probe status; if the tutor isn't configured, show a gentle notice.
    fetch(API + "?action=status").then(function (r) { return r.json(); }).then(function (s) {
      if (!s || !s.enabled) {
        stream.innerHTML = '<div class="ask-welcome"><div class="ask-welcome-ic">🩺</div><h2>Ask Pulse is coming soon</h2><p>Your AI nursing tutor is being switched on. Please check back shortly.</p></div>';
        input.disabled = true; sendBtn.disabled = true;
      }
    }).catch(function () { /* offline / local preview — leave UI as-is */ });

    // expose a "new chat" hook for the header button
    window.PulseAskReset = function () { thread = []; saveThread(thread); renderThread(); input.focus(); };
  }

  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
