/* NCLEX-RN hub — compact chip-tab + accordion navigation for nclex.html.
   Mirrors the IELTS hub so the flagship page is easy to scan: one short info
   panel at a time, and collapsed accordion cards you expand only when needed.
   Reads window.PulsePrograms.nclex and reuses the shared .ielts-hub-* /
   .ielts-mod-* / .why-* styles — no new CSS required. */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }

  /* 30 topics grouped into 7 NCLEX-blueprint categories (by topic id). */
  var CATS = [
    { icon: "🛡️", color: "#14387A", name: "Foundations & Safe Care", ids: ["ncx-t-safety", "ncx-t-priority", "ncx-t-legal", "ncx-t-communication", "ncx-t-iv"] },
    { icon: "💊", color: "#6D28D9", name: "Pharmacology", ids: ["ncx-t-medsafety", "ncx-t-pharmclasses"] },
    { icon: "🫀", color: "#B3123E", name: "Med-Surg I · Cardio, Resp, Fluids & Endocrine", ids: ["ncx-t-fluid", "ncx-t-cardiac", "ncx-t-respiratory", "ncx-t-endocrine"] },
    { icon: "🩺", color: "#0E7490", name: "Med-Surg II · Neuro, GI, Renal, MSK, Blood & Immune", ids: ["ncx-t-neuro", "ncx-t-gi", "ncx-t-renal", "ncx-t-musculo", "ncx-t-hematology", "ncx-t-immune"] },
    { icon: "🚑", color: "#C2410C", name: "Acute & Complex Care", ids: ["ncx-t-emergency", "ncx-t-periop", "ncx-t-oncology", "ncx-t-pain", "ncx-t-sensory", "ncx-t-geriatric", "ncx-t-labs"] },
    { icon: "🤰", color: "#BE185D", name: "Maternal, Newborn & Child", ids: ["ncx-t-maternal", "ncx-t-womens", "ncx-t-pediatric", "ncx-t-growth"] },
    { icon: "🧠", color: "#7C3AED", name: "Mental Health & Nutrition", ids: ["ncx-t-psych", "ncx-t-nutrition"] }
  ];

  function topicLink(t) {
    return '<a class="ielts-test-link" href="topic.html?program=nclex&topic=' + encodeURIComponent(t.id) + '">' +
      "<span>" + esc(t.title) + "</span>" +
      '<span class="ielts-best">' + (t.readMinutes || 8) + " min</span>" +
      '<span class="ielts-arrow">→</span></a>';
  }
  function testLink(t) {
    return '<a class="ielts-test-link" href="quiz.html?program=nclex&test=' + encodeURIComponent(t.id) + '">' +
      "<span>" + esc(t.title) + "</span><span class='ielts-arrow'>→</span></a>";
  }

  /* IELTS-style card: two items shown as a preview, the rest revealed by
     "Show all N" (or tapping the header). Cards with ≤2 items just show both. */
  function accCard(icon, color, name, meta, links) {
    var n = links.length, preview, rest = "", moreBtn = "", chev = "";
    if (n <= 2) {
      preview = links.join("");
    } else {
      preview = links.slice(0, 2).join("");
      rest = links.slice(2).join("");
      moreBtn = '<button type="button" class="ielts-more" data-more="Show all ' + n + '">Show all ' + n + " ▾</button>";
      chev = '<span class="ielts-chev" aria-hidden="true">▾</span>';
    }
    return '<div class="ielts-mod-card is-collapsed" style="--mc:' + color + '">' +
      '<div class="ielts-mod-top" role="button" tabindex="0" aria-expanded="false">' +
      '<span class="ielts-mod-ic">' + icon + "</span>" +
      '<div class="ielts-mod-h"><h3>' + esc(name) + '</h3><span class="ielts-mod-meta">' + esc(meta) + "</span></div>" +
      chev + "</div>" +
      '<div class="ielts-test-list">' +
        '<div class="ielts-test-preview">' + preview + "</div>" +
        '<div class="ielts-test-rest">' + rest + "</div>" +
        moreBtn +
      "</div></div>";
  }

  function chip(key, label, on) {
    return '<button type="button" class="ielts-hub-chip' + (on ? " is-on" : "") + '" data-panel="' + key + '" role="tab" aria-selected="' + (on ? "true" : "false") + '">' + label + "</button>";
  }
  function pane(key, html, on) {
    return '<div class="ielts-hub-panel' + (on ? " is-on" : "") + '" data-panel="' + key + '" role="tabpanel">' + html + "</div>";
  }

  function init() {
    var root = document.getElementById("nclex-hub");
    var prog = window.PulsePrograms && window.PulsePrograms.nclex;
    if (!root || !prog) return;

    var byId = {};
    (prog.topics || []).forEach(function (t) { byId[t.id] = t; });
    var tests = prog.tests || [];
    var adaptive = tests.filter(function (t) { return t.type === "adaptive"; });
    var model = tests.filter(function (t) { return t.type === "model"; });

    /* ---- info panels ---- */
    var aboutHTML =
      '<p class="section-lead">The NCLEX-RN® is the licensing exam a nurse must pass to practise as a Registered Nurse in the <strong>USA and Canada</strong>. It tests safe, effective clinical judgement — not memorised facts.</p>' +
      '<div class="why-card-grid">' +
      '<div class="why-card"><span class="why-num">🌎</span><span class="why-label">US &amp; Canada RN</span></div>' +
      '<div class="why-card"><span class="why-num">CAT</span><span class="why-label">Adaptive format</span></div>' +
      '<div class="why-card"><span class="why-num">30</span><span class="why-label">Topic discussions</span></div>' +
      '<div class="why-card"><span class="why-num">Free</span><span class="why-label">Always free</span></div>' +
      "</div>" +
      '<ul class="why-list">' +
      "<li><strong>Computer-adaptive (CAT).</strong> Answer well and questions get harder; the test stops once it is confident whether you pass — most candidates answer about 75 to 150 questions.</li>" +
      "<li><strong>Next-Gen NCLEX.</strong> Newer items add case studies that test clinical judgement — recognising cues, prioritising, and deciding actions.</li>" +
      "<li><strong>Organised by Client Needs.</strong> Safe &amp; effective care, health promotion, psychosocial integrity, and physiological integrity.</li></ul>";

    var prepareHTML =
      '<p class="section-lead">A simple loop that works — repeat it, always circling back to your weakest area.</p>' +
      '<ul class="why-list">' +
      "<li><strong>1 · Read a topic discussion</strong> in a weak area — open a category under “Study topics by area”.</li>" +
      "<li><strong>2 · Take its check-in</strong> — 10 questions with instant rationale to lock in the concept.</li>" +
      "<li><strong>3 · Build stamina</strong> with the 20-question model sets under “Practise”.</li>" +
      "<li><strong>4 · Sit an adaptive exam</strong> to gauge your pass probability, then repeat where you scored lowest.</li></ul>";

    var blueprintHTML =
      '<p class="section-lead">Every NCLEX item maps to one of four <strong>Client Needs</strong> categories — your study topics cover all four.</p>' +
      '<ul class="why-list">' +
      "<li><strong>Safe &amp; Effective Care Environment.</strong> Management of care, safety, and infection control — the largest share of the exam.</li>" +
      "<li><strong>Health Promotion &amp; Maintenance.</strong> Prevention, screening, growth and development, and maternal-newborn care.</li>" +
      "<li><strong>Psychosocial Integrity.</strong> Mental health, coping, therapeutic communication, and crisis care.</li>" +
      "<li><strong>Physiological Integrity.</strong> Basic care, pharmacology, reduction of risk, and physiological adaptation — the medical-surgical core.</li></ul>";

    var premiumHTML =
      '<p class="section-lead">When you are ready to go all-in on the US &amp; Canada pathway.</p>' +
      '<div class="premium-grid">' +
      "<div class='premium-card'><h3>🧩 Next-Gen Case Studies</h3><p>Unfolding clinical-judgement scenarios.</p></div>" +
      "<div class='premium-card'><h3>🧠 Unlimited Adaptive Exams</h3><p>Full-length CAT simulations.</p></div>" +
      "<div class='premium-card'><h3>👩‍🏫 Live Review Classes</h3><p>By US-licensed nurse faculty.</p></div>" +
      "<div class='premium-card'><h3>🗂️ Credential Guidance</h3><p>WES, CGFNS/TruMerit, and licensure support.</p></div>" +
      "</div>";

    /* ---- practise cards ---- */
    var adaptiveCard = accCard("🧠", "#7C6FD9", "Adaptive Exams",
      adaptive.length + " CAT-style exams · adapt to your level", adaptive.map(testLink));
    var modelCard = accCard("📝", "#0E7490", "Question Sets",
      model.length + " mixed sets · 20 questions each", model.map(testLink));

    /* ---- topic category cards ---- */
    var catCards = CATS.map(function (c) {
      var ts = c.ids.map(function (id) { return byId[id]; }).filter(Boolean);
      return accCard(c.icon, c.color, c.name,
        ts.length + " topic" + (ts.length === 1 ? "" : "s") + " · read + check-in",
        ts.map(topicLink));
    }).join("");

    root.innerHTML =
      '<div class="ielts-hub-chips" role="tablist" aria-label="About NCLEX">' +
      chip("about", "ℹ️ What is NCLEX?", true) + chip("prepare", "🧭 How to prepare") +
      chip("blueprint", "🗂️ Exam blueprint") + chip("premium", "⭐ Premium") +
      "</div>" +
      '<div class="ielts-hub-panels">' +
      pane("about", aboutHTML, true) + pane("prepare", prepareHTML) +
      pane("blueprint", blueprintHTML) + pane("premium", premiumHTML) +
      "</div>" +
      '<h2 class="ielts-h2">🧠 Practise &amp; simulate</h2>' +
      '<div class="ielts-mod-grid ielts-mod-2x2">' + adaptiveCard + modelCard + "</div>" +
      '<h2 class="ielts-h2">📚 Study topics by area <span style="font-weight:500;color:var(--text-soft);font-size:0.9rem;">— 30 topics, tap a category</span></h2>' +
      '<div class="ielts-mod-grid ielts-mod-2x2">' + catCards + "</div>";

    /* chip tabs */
    root.querySelectorAll(".ielts-hub-chip").forEach(function (c) {
      c.addEventListener("click", function () {
        var p = c.getAttribute("data-panel");
        root.querySelectorAll(".ielts-hub-chip").forEach(function (x) { x.classList.toggle("is-on", x === c); x.setAttribute("aria-selected", x === c ? "true" : "false"); });
        root.querySelectorAll(".ielts-hub-panel").forEach(function (pn) { pn.classList.toggle("is-on", pn.getAttribute("data-panel") === p); });
      });
    });

    /* accordion cards — two shown, "Show all N" (or the header) reveals the rest */
    function setCard(cd, collapsed) {
      cd.classList.toggle("is-collapsed", collapsed);
      var head = cd.querySelector(".ielts-mod-top");
      if (head) head.setAttribute("aria-expanded", collapsed ? "false" : "true");
      var more = cd.querySelector(".ielts-more");
      if (more) more.textContent = collapsed ? (more.getAttribute("data-more") + " ▾") : "Show fewer ▴";
    }
    root.querySelectorAll(".ielts-mod-card").forEach(function (cd) {
      var more = cd.querySelector(".ielts-more");
      if (!more) return;   // ≤2 items → nothing to expand
      function toggle() { setCard(cd, !cd.classList.contains("is-collapsed")); }
      var head = cd.querySelector(".ielts-mod-top");
      if (head) {
        head.addEventListener("click", toggle);
        head.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); toggle(); }
        });
      }
      more.addEventListener("click", function (e) { e.stopPropagation(); toggle(); });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
