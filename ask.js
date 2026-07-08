/* Pulse for Nurses — "Ask Pulse" AI study tutor.
   - Full-page chat when #ask-root is present (ask.html).
   - A floating robot launcher on every other page that pops a compact chat.
   Talks to /api/ask (Gemini, server-side key). Multi-turn, sign-in gated when
   accounts are enabled, dormant-safe when the API key is absent. */
(function () {
  "use strict";
  if (window.__pulseAskInit) return;          // guard against double-load
  window.__pulseAskInit = true;

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

  /* ============================================================
     Reusable chat — wires a full chat into `root`. Returns { reset }.
     ============================================================ */
  function createChat(root, opts) {
    opts = opts || {};
    var thread = loadThread();
    var busy = false, pending = null;

    root.innerHTML =
      '<div class="ask-wrap">' +
        '<div class="ask-stream" id="ask-stream"></div>' +
        '<form class="ask-form" id="ask-form">' +
          '<textarea class="ask-input" id="ask-input" rows="1" placeholder="Ask about any nursing topic…" maxlength="2000"></textarea>' +
          '<button type="submit" class="ask-send" id="ask-send" aria-label="Send">➤</button>' +
        "</form>" +
        '<p class="ask-disc">💡 A study aid, not medical advice. Verify clinical details against current guidelines.</p>' +
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
          "<p>Your AI nursing tutor — explanations, exam rationales, quick concept checks. Try one:</p>" +
          '<div class="ask-starters">' + STARTERS.map(function (s) { return '<button type="button" class="ask-starter">' + esc(s) + "</button>"; }).join("") + "</div>" +
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
      var b = bubble("model", "🔒 <strong>Sign in (free) to chat with Pulse</strong><br>Your questions stay with your account.<br><button type=\"button\" class=\"btn btn-primary ask-signin\" style=\"margin-top:10px\">Sign in / Create account</button>", "ask-gate");
      b.querySelector(".ask-signin").addEventListener("click", function () {
        if (window.PulseAuth && window.PulseAuth.openModal) window.PulseAuth.openModal("signin", { stay: true });
      });
    }
    function autoGrow() { input.style.height = "auto"; input.style.height = Math.min(120, input.scrollHeight) + "px"; }

    function ask() {
      if (busy) return;
      var q = input.value.trim();
      if (!q) return;
      if (window.PulseAuth && window.PulseAuth.enabled && !window.PulseAuth.user) {
        if (!thread.length) stream.innerHTML = "";
        bubble("user", esc(q));
        pending = q; input.value = ""; autoGrow();
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
      fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: thread.slice(-10) }) })
        .then(function (r) { return r.json().then(function (d) { return { st: r.status, d: d }; }); })
        .then(function (x) {
          typing.remove(); busy = false; sendBtn.disabled = false;
          var d = x.d || {};
          if (x.st === 429) {
            bubble("model", d.error === "site-limit"
              ? "⏳ Pulse has answered a lot of questions today — please try again tomorrow."
              : "⏳ You've reached today's free question limit (" + (d.perDay || 20) + "). Come back tomorrow!", "ask-note");
            return;
          }
          if (!d.ok || !d.answer) { bubble("model", "😕 Sorry, I couldn't answer that just now. Please try rephrasing or ask again in a moment.", "ask-note"); return; }
          thread.push({ role: "model", text: d.answer });
          bubble("model", mdLite(d.answer));
          saveThread(thread);
        })
        .catch(function () { typing.remove(); busy = false; sendBtn.disabled = false; bubble("model", "📶 I couldn't reach the server — check your connection and try again.", "ask-note"); });
    }

    if (window.PulseAuth && window.PulseAuth.onChange) {
      window.PulseAuth.onChange(function (u) {
        if (u && pending) { var q = pending; pending = null; renderThread(); input.value = q; ask(); }
      });
    }
    input.addEventListener("input", autoGrow);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(); } });
    form.addEventListener("submit", function (e) { e.preventDefault(); ask(); });
    renderThread();

    fetch(API + "?action=status").then(function (r) { return r.json(); }).then(function (s) {
      if (!s || !s.enabled) {
        stream.innerHTML = '<div class="ask-welcome"><div class="ask-welcome-ic">🩺</div><h2>Ask Pulse is coming soon</h2><p>Your AI nursing tutor is being switched on. Please check back shortly.</p></div>';
        input.disabled = true; sendBtn.disabled = true;
      }
    }).catch(function () { /* offline / local preview */ });

    return {
      reset: function () { thread = []; saveThread(thread); renderThread(); input.focus(); },
      focus: function () { try { input.focus(); } catch (e) {} }
    };
  }

  /* ============================================================
     Full-page mount (ask.html)
     ============================================================ */
  function initFullPage() {
    var root = document.getElementById("ask-root");
    if (!root) return false;
    var chat = createChat(root, {});
    window.PulseAskReset = function () { chat.reset(); };
    return true;
  }

  /* ============================================================
     Floating launcher — a bobbing robot that pops a compact chat
     ============================================================ */
  var ROBOT =
    '<svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">' +
      '<rect x="6" y="11" width="20" height="15" rx="6" fill="#fff"/>' +
      '<circle cx="12.5" cy="18.5" r="2.3" fill="#14387A"/>' +
      '<circle cx="19.5" cy="18.5" r="2.3" fill="#14387A"/>' +
      '<rect x="12" y="22.5" width="8" height="2" rx="1" fill="#9DB4D8"/>' +
      '<line x1="16" y1="5" x2="16" y2="10" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>' +
      '<circle cx="16" cy="4" r="2.2" fill="#F4B83C"/>' +
    "</svg>";

  function initFab() {
    if (/(^|\/)ask\.html$/i.test(location.pathname)) return;   // full page already has the chat
    if (document.querySelector(".pulse-askbot")) return;

    var wrap = document.createElement("div");
    wrap.className = "pulse-askbot";
    wrap.id = "pulse-askbot";
    wrap.innerHTML =
      '<div class="askbot-panel" hidden role="dialog" aria-label="Ask Pulse AI tutor">' +
        '<div class="askbot-head">' +
          '<span class="askbot-title">' + ROBOT + " Ask Pulse</span>" +
          '<span class="askbot-head-actions">' +
            '<a class="askbot-icon-btn" href="ask.html" title="Open full page" aria-label="Open full page">⤢</a>' +
            '<button type="button" class="askbot-icon-btn askbot-close" aria-label="Close chat">&times;</button>' +
          "</span>" +
        "</div>" +
        '<div class="askbot-mount"></div>' +
      "</div>" +
      '<button type="button" class="askbot-fab" aria-label="Ask Pulse — free AI nursing tutor">' +
        '<span class="askbot-fab-face">' + ROBOT + "</span>" +
        '<span class="askbot-fab-text">Ask Pulse</span>' +
      "</button>" +
      '<div class="askbot-greet" hidden>👋 Need study help? Ask me!</div>';
    document.body.appendChild(wrap);

    var fab = wrap.querySelector(".askbot-fab");
    var panel = wrap.querySelector(".askbot-panel");
    var mount = wrap.querySelector(".askbot-mount");
    var greet = wrap.querySelector(".askbot-greet");
    var chat = null;

    function open() {
      panel.hidden = false;
      wrap.classList.add("is-open");
      greet.hidden = true;
      try { localStorage.setItem("pulse:askbot:greeted", "1"); } catch (e) {}
      if (!chat) chat = createChat(mount, { compact: true });
      chat.focus();
    }
    function close() { panel.hidden = true; wrap.classList.remove("is-open"); }
    fab.addEventListener("click", function () { if (panel.hidden) open(); else close(); });
    wrap.querySelector(".askbot-close").addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !panel.hidden) close(); });

    // One-time greeting nudge a few seconds after load
    var greeted = false;
    try { greeted = localStorage.getItem("pulse:askbot:greeted") === "1"; } catch (e) {}
    if (!greeted) {
      setTimeout(function () { if (panel.hidden) { greet.hidden = false; } }, 4000);
      greet.addEventListener("click", function () { greet.hidden = true; open(); });
    }
  }

  function boot() { if (!initFullPage()) { /* still add the fab on the ask page? no */ } initFab(); }
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
