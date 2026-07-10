/* Pulse for Nurses — IELTS renderer & engine (verification build, no API).
   Pages: ielts.html (hub) and ielts-test.html?module=&test= (player).
   Reading/Listening are auto-scored; Listening audio uses the browser's built-in
   speech synthesis (no API key). Writing shows tasks + a live word counter;
   Speaking shows the examiner's questions. AI band-scoring = Pro (later). */
(function () {
  "use strict";
  var LS = "pulse:ielts:progress";
  var LS_WRITING = "pulse:ielts:writing";   // best AI Writing bands /9, kept separate from the raw /40 auto-scores
  function qs(n) { return new URLSearchParams(location.search).get(n); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }
  function readJSON(k, d) { try { var v = JSON.parse(localStorage.getItem(k) || d); return (v && typeof v === "object") ? v : JSON.parse(d); } catch (e) { return JSON.parse(d); } }
  function save(mid, tid, score) {
    try {
      var p = readJSON(LS, "{}"), k = mid + "/" + tid;
      var improved = !p[k] || score > p[k];
      if (improved) p[k] = score;
      localStorage.setItem(LS, JSON.stringify(p));
      // Signed in → mirror the new best to the account (cross-device).
      if (improved && window.PulseAuth && window.PulseAuth.user && window.PulseAuth.saveProgress) {
        window.PulseAuth.saveProgress("ielts", k, score);
      }
    } catch (e) {}
  }

  /* Keep the best AI Writing band (/9) per "<module>/<test>/<task>" so the
     dashboard can surface it; mirror to the account (kind "ielts-writing"). */
  function saveWritingBand(key, band) {
    if (typeof band !== "number") return;
    try {
      var p = readJSON(LS_WRITING, "{}");
      var improved = typeof p[key] !== "number" || band > p[key];
      if (improved) { p[key] = band; localStorage.setItem(LS_WRITING, JSON.stringify(p)); }
      if (improved && window.PulseAuth && window.PulseAuth.user && window.PulseAuth.saveProgress) {
        window.PulseAuth.saveProgress("ielts-writing", key, band);
      }
    } catch (e) {}
  }

  /* Approx Academic band from raw /40 (Reading & Listening differ slightly; close enough for practice). */
  function band(raw) {
    var t = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3]];
    for (var i = 0; i < t.length; i++) if (raw >= t[i][0]) return t[i][1];
    return 2.5;
  }

  function loadModule(mid, cb) {
    if (window.IELTS.data && window.IELTS.data[mid]) return cb(window.IELTS.data[mid]);
    var sc = document.createElement("script");
    sc.src = "data/ielts/" + mid + ".js";
    sc.onload = function () { cb((window.IELTS.data && window.IELTS.data[mid]) || null); };
    sc.onerror = function () { cb(null); };
    document.head.appendChild(sc);
  }

  /* ---------------- HUB ---------------- */
  function initHub() {
    var root = document.getElementById("ielts-root");
    if (!root || !window.IELTS) return;
    var M = window.IELTS.modules, meta = window.IELTS.meta;
    var prog = readJSON(LS, "{}");
    var cards = Object.keys(M).map(function (mid) {
      var m = M[mid];
      var links = m.tests.map(function (t) {
        var best = prog[mid + "/" + t.id];
        var badge = (typeof best === "number") ? '<span class="ielts-best">Best ' + best + "/40</span>" : "";
        return '<a class="ielts-test-link" href="ielts-test.html?module=' + mid + "&test=" + t.id + '">' +
          "<span>" + esc(t.title) + "</span>" + badge + "<span class='ielts-arrow'>→</span></a>";
      });
      var extra = (mid === "writing")
        ? '<a class="ielts-test-link ielts-samples-inline" href="ielts-samples.html"><span>📝 Band 6–9 sample answers</span><span class="ielts-arrow">→</span></a>'
        : "";
      var count = m.tests.length;
      var noun = (mid === "speaking") ? "sets" : "exams";
      var moreLabel = "Show all " + count + " " + noun;
      var preview = extra + links.slice(0, 2).join("");
      var rest = links.slice(2).join("");
      var moreBtn = rest ? '<button type="button" class="ielts-more" data-more="' + moreLabel + '">' + moreLabel + " ▾</button>" : "";
      return '<div class="ielts-mod-card is-collapsed" style="--mc:' + moduleColor(mid) + '">' +
        '<div class="ielts-mod-top" role="button" tabindex="0" aria-expanded="false">' +
        '<span class="ielts-mod-ic">' + m.icon + "</span>" +
        "<div class='ielts-mod-h'><h3>" + esc(m.name) + "</h3><span class='ielts-mod-meta'>" + esc(m.blurb) + "</span></div>" +
        '<span class="ielts-chev" aria-hidden="true">▾</span></div>' +
        '<p class="ielts-mod-count">🎓 <strong>' + count + " full practice " + noun + "</strong> inside — two shown here; open the module to see all " + count + ".</p>" +
        '<div class="ielts-test-list">' +
          '<div class="ielts-test-preview">' + preview + "</div>" +
          '<div class="ielts-test-rest">' + rest + "</div>" +
          moreBtn +
        "</div></div>";
    }).join("");

    var aboutHTML =
      '<p>The International English Language Testing System is the world\'s most popular English test for study, work and migration. It reports a score from <strong>band 1 to band 9</strong> for each of four skills, plus an overall band. There are three versions:</p>' +
      '<div class="ielts-type-grid">' +
        typeCard("Academic", "For university study and professional registration — including nursing councils such as the UK NMC.") +
        typeCard("General Training", "For work experience, training programmes and migration to English-speaking countries.") +
        typeCard("UKVI", "IELTS for UK Visas & Immigration — the same test, taken at a UKVI-approved centre for UK visa purposes.") +
      "</div>";
    var structureHTML =
      '<div class="ielts-struct">' +
        structRow("🎧 Listening", "~30 min", "4 sections · 40 questions") +
        structRow("📖 Reading", "60 min", "3 passages · 40 questions") +
        structRow("✍️ Writing", "60 min", "2 tasks · 150 + 250 words") +
        structRow("🎤 Speaking", "11–14 min", "3 parts · face-to-face") +
      "</div>" +
      '<p class="ielts-modline">The whole test takes about <strong>2 hours 45 minutes</strong>. Listening, Reading and Writing are sat together; Speaking may be the same day or within a few days.</p>';
    var bandsHTML =
      '<p>Each skill is marked 1–9. Your <strong>overall band</strong> is the average of the four skill scores, rounded to the nearest whole or half band (for example 6.25 → 6.5 and 6.1 → 6.0).</p>' +
      '<div class="ielts-bands">' +
        bandRow("9", "Expert", "Full operational command — accurate, fluent and complete.") +
        bandRow("8", "Very good", "Fully operational command; only occasional slips.") +
        bandRow("7", "Good", "Operational command; occasional inaccuracies.") +
        bandRow("6", "Competent", "Effective command despite some errors.") +
        bandRow("5", "Modest", "Partial command; copes with overall meaning.") +
        bandRow("4", "Limited", "Basic competence in familiar situations only.") +
      "</div>" +
      '<p class="ielts-official"><a href="https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail" target="_blank" rel="noopener noreferrer">IELTS scoring in detail ↗</a><a href="https://ieltsliz.com/ielts-band-scores/" target="_blank" rel="noopener noreferrer">IELTS Liz — band scores ↗</a></p>';
    var resourcesHTML =
      '<div class="ielts-res-groups">' +
        resGroup("Official test sites", [["IDP IELTS", "https://ielts.idp.com"], ["British Council — Take IELTS", "https://takeielts.britishcouncil.org"], ["IELTS.org", "https://ielts.org"]]) +
        resGroup("Scores & free preparation", [["IELTS scoring in detail", "https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail"], ["IELTS Liz", "https://ieltsliz.com"], ["IELTS Buddy", "https://www.ielts-buddy.com"], ["Road to IELTS (British Council)", "https://www.roadtoielts.com"]]) +
      "</div>";

    root.innerHTML =
      '<div class="ielts-hub-chips" role="tablist" aria-label="About IELTS">' +
        hubChip("about", "ℹ️ About IELTS", true) +
        hubChip("structure", "🗂️ Exam structure") +
        hubChip("bands", "🎯 Band scores") +
        hubChip("resources", "🔗 Resources") +
      "</div>" +
      '<div class="ielts-hub-panels">' +
        hubPanel("about", aboutHTML, true) +
        hubPanel("structure", structureHTML) +
        hubPanel("bands", bandsHTML) +
        hubPanel("resources", resourcesHTML) +
      "</div>" +
      '<h2 class="ielts-h2">Practise each module</h2>' +
      '<div class="ielts-mod-grid ielts-mod-2x2">' + cards + "</div>" +
      '<p class="ielts-disclaimer">' + esc(meta.note) + " AI evaluation of Writing &amp; Speaking is coming in the Pro version.</p>";

    root.querySelectorAll(".ielts-hub-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        var p = chip.getAttribute("data-panel");
        root.querySelectorAll(".ielts-hub-chip").forEach(function (c) { c.classList.toggle("is-on", c === chip); });
        root.querySelectorAll(".ielts-hub-panel").forEach(function (pn) { pn.classList.toggle("is-on", pn.getAttribute("data-panel") === p); });
      });
    });

    // Module cards act as accordions: two tests previewed, open to reveal the rest.
    function setCard(card, collapsed) {
      card.classList.toggle("is-collapsed", collapsed);
      var head = card.querySelector(".ielts-mod-top");
      if (head) head.setAttribute("aria-expanded", collapsed ? "false" : "true");
      var more = card.querySelector(".ielts-more");
      if (more) more.textContent = collapsed ? (more.getAttribute("data-more") + " ▾") : "Show fewer ▴";
    }
    root.querySelectorAll(".ielts-mod-card").forEach(function (card) {
      function toggle() { setCard(card, !card.classList.contains("is-collapsed")); }
      var head = card.querySelector(".ielts-mod-top");
      if (head) {
        head.addEventListener("click", toggle);
        head.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") { e.preventDefault(); toggle(); }
        });
      }
      var more = card.querySelector(".ielts-more");
      if (more) more.addEventListener("click", function (e) { e.stopPropagation(); toggle(); });
    });
  }
  function hubChip(id, label, on) { return '<button type="button" class="ielts-hub-chip' + (on ? " is-on" : "") + '" data-panel="' + id + '">' + label + "</button>"; }
  function hubPanel(id, html, on) { return '<div class="ielts-hub-panel' + (on ? " is-on" : "") + '" data-panel="' + id + '">' + html + "</div>"; }
  function typeCard(name, desc) { return '<div class="ielts-type"><h4>' + esc(name) + "</h4><p>" + esc(desc) + "</p></div>"; }
  function structRow(name, time, detail) { return '<div class="ielts-struct-row"><span class="ielts-struct-name">' + name + '</span><span class="ielts-struct-time">' + time + '</span><span class="ielts-struct-detail">' + detail + "</span></div>"; }
  function bandRow(n, name, desc) { return '<div class="ielts-band-row"><span class="ielts-band-n">' + n + '</span><span class="ielts-band-name">' + esc(name) + '</span><span class="ielts-band-desc">' + esc(desc) + "</span></div>"; }
  function resGroup(title, links) { return '<div class="ielts-res-group"><h4>' + esc(title) + "</h4>" + links.map(function (l) { return '<a href="' + l[1] + '" target="_blank" rel="noopener noreferrer">' + esc(l[0]) + " ↗</a>"; }).join("") + "</div>"; }
  function moduleColor(mid) { return ({ reading: "#1E5F9C", listening: "#0E7490", writing: "#B4541E", speaking: "#6D28D9" })[mid] || "#14387A"; }

  /* ---------------- TEST PLAYER ---------------- */
  function initTest() {
    var root = document.getElementById("ielts-root");
    if (!root || !window.IELTS) return;
    var mid = qs("module"), tid = qs("test");
    var m = window.IELTS.findModule(mid), t = window.IELTS.findTest(mid, tid);
    if (!m || !t) { root.innerHTML = notFound(); return; }
    loadModule(mid, function (data) {
      var test = data && data[tid];
      if (!test) { root.innerHTML = notFound("This practice test is being finalised."); return; }
      var head = '<nav class="ielts-crumb"><a href="ielts.html">IELTS</a> › <span>' + esc(m.name) + "</span> › " + esc(t.title) + "</nav>" +
        '<h1 class="section-title ielts-test-title">' + m.icon + " " + esc(t.title) + "</h1>";
      if (mid === "reading") renderQA(root, head, m, t, test, "reading");
      else if (mid === "listening") renderQA(root, head, m, t, test, "listening");
      else if (mid === "writing") renderWriting(root, head, test);
      else if (mid === "speaking") renderSpeaking(root, head, test);
    });
  }
  function notFound(msg) { return '<div class="ielts-empty">🔎 ' + esc(msg || "Test not found.") + ' <a href="ielts.html">← Back to IELTS</a></div>'; }

  /* ---- Reading & Listening (objective, auto-scored) ---- */
  function renderQA(root, head, m, t, test, kind) {
    var n = 0; // global question number
    var blocks = (kind === "reading" ? test.passages : test.sections) || [];
    var html = head + moduleIntro(kind);
    html += '<form id="ielts-form">';
    blocks.forEach(function (b, bi) {
      var cc = "ielts-c" + ((bi % 4) + 1);   // per-passage / per-section colour
      var startN = n + 1;
      if (kind === "reading") {
        // count this passage's questions first so we can label the range
        var qhtml = "";
        (b.questions || []).forEach(function (q) { n++; qhtml += renderQ(q, n); });
        var tag = "Passage " + (bi + 1) + " · Questions " + startN + "–" + n;
        var passage = '<div class="ielts-passage ielts-split-pane">' +
          '<span class="ielts-block-tag">' + tag + "</span>" +
          (b.title ? "<h3>" + esc(b.title) + "</h3>" : "") +
          (b.paragraphs || []).map(function (p, i) { return "<p><strong>" + String.fromCharCode(65 + i) + "</strong>  " + esc(p) + "</p>"; }).join("") + "</div>";
        html += '<section class="ielts-block ielts-split ' + cc + '">' + passage +
          '<div class="ielts-qs-pane"><div class="ielts-qs">' + qhtml + "</div></div></section>";
      } else {
        var qh = "";
        (b.questions || []).forEach(function (q) { n++; qh += renderQ(q, n); });
        var stag = "Section " + (bi + 1) + " · Questions " + startN + "–" + n;
        html += '<section class="ielts-block ' + cc + '">';
        html += '<div class="ielts-section-head"><span class="ielts-block-tag">' + stag + "</span>" +
          (b.title ? '<h3>' + esc(b.title) + "</h3>" : "") +
          '<button type="button" class="ielts-audio-btn" data-audio="' + bi + '">▶ Play audio</button>' +
          '<button type="button" class="ielts-audio-btn ielts-stop" data-stop="1">⏹ Stop</button>' +
          '<button type="button" class="ielts-transcript-btn" data-tr="' + bi + '">Show transcript</button></div>' +
          '<div class="ielts-transcript" id="tr-' + bi + '" hidden>' + (b.script || []).map(function (l) { return "<p>" + (l.speaker ? "<strong>" + esc(l.speaker) + ":</strong> " : "") + esc(l.text || l) + "</p>"; }).join("") + "</div>";
        html += '<div class="ielts-qs">' + qh + "</div></section>";
      }
    });
    html += '<div class="ielts-submit-row"><button type="submit" class="btn btn-primary">Submit &amp; see score</button></div>';
    html += "</form><div id=\"ielts-result\"></div>";
    root.innerHTML = html;

    wireAudio(root, blocks);
    if (kind === "reading") wireTimerControl(root);
    else wireListening(root, blocks);
    var form = root.querySelector("#ielts-form");
    form.addEventListener("submit", function (e) { e.preventDefault(); grade(root, blocks, kind, m, t); });
  }

  function renderQ(q, n) {
    var body = "";
    if (q.type === "gap") {
      body = '<span class="ielts-q-text">' + esc(q.q).replace("____", '<input class="ielts-gap" data-n="' + n + '" type="text" autocomplete="off">') + "</span>";
      if (q.q.indexOf("____") < 0) body = '<span class="ielts-q-text">' + esc(q.q) + ' <input class="ielts-gap" data-n="' + n + '" type="text" autocomplete="off"></span>';
    } else {
      var opts = q.options || (q.type === "tfng" ? ["True", "False", "Not Given"] : q.type === "ynng" ? ["Yes", "No", "Not Given"] : []);
      body = '<span class="ielts-q-text">' + esc(q.q) + "</span>" +
        '<div class="ielts-opts">' + opts.map(function (o, i) {
          return '<label class="ielts-opt"><input type="radio" name="q' + n + '" value="' + i + '"><span>' + (q.options ? String.fromCharCode(65 + i) + ". " : "") + esc(o) + "</span></label>";
        }).join("") + "</div>";
    }
    return '<div class="ielts-q" data-n="' + n + '"><span class="ielts-q-num">' + n + "</span><div class='ielts-q-body'>" + body + "</div></div>";
  }

  function grade(root, blocks, kind, m, t) {
    var n = 0, correct = 0, review = [];
    blocks.forEach(function (b) {
      (b.questions || []).forEach(function (q) {
        n++;
        var ok = false, given = "";
        if (q.type === "gap") {
          var inp = root.querySelector('.ielts-gap[data-n="' + n + '"]');
          given = inp ? inp.value.trim() : "";
          var acc = (q.accept || []).map(function (a) { return String(a).trim().toLowerCase(); });
          ok = acc.indexOf(given.toLowerCase()) >= 0;
          markGap(inp, ok);
          review.push({ n: n, ok: ok, given: given || "—", want: (q.accept || []).join(" / ") });
        } else {
          var sel = root.querySelector('input[name="q' + n + '"]:checked');
          var gi = sel ? parseInt(sel.value, 10) : -1;
          ok = gi === q.answer;
          var opts = q.options || (q.type === "tfng" ? ["True", "False", "Not Given"] : ["Yes", "No", "Not Given"]);
          given = gi >= 0 ? opts[gi] : "—";
          markChoice(root, n, gi, q.answer);
          review.push({ n: n, ok: ok, given: given, want: opts[q.answer] });
        }
        if (ok) correct++;
      });
    });
    save(m.id, t.id, correct);
    var bnd = band(correct);
    var timer = root.querySelector("#ielts-timer"); if (timer) timer.classList.add("is-done");
    var res = root.querySelector("#ielts-result");
    res.innerHTML =
      '<div class="ielts-score"><div class="ielts-score-num">' + correct + '<span>/40</span></div>' +
      '<div class="ielts-score-band">Estimated band<strong>' + bnd + "</strong></div></div>" +
      '<p class="ielts-score-note">Estimated band from the standard raw-score conversion (approximate). Answers are marked above in green/red.</p>' +
      '<details class="ielts-review"><summary>See the answer key</summary><div class="ielts-review-grid">' +
      review.map(function (r) { return '<div class="ielts-rev ' + (r.ok ? "ok" : "no") + '"><b>Q' + r.n + "</b> " + (r.ok ? "✓" : "✗ you: " + esc(r.given) + " · answer: " + esc(r.want)) + "</div>"; }).join("") +
      "</div></details>";
    res.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function markGap(inp, ok) { if (inp) { inp.classList.add(ok ? "is-ok" : "is-no"); inp.readOnly = true; } }
  function markChoice(root, n, gi, ans) {
    root.querySelectorAll('input[name="q' + n + '"]').forEach(function (r) {
      var i = parseInt(r.value, 10), lab = r.closest(".ielts-opt");
      if (!lab) return;
      if (i === ans) lab.classList.add("is-ok");
      else if (i === gi) lab.classList.add("is-no");
      r.disabled = true;
    });
  }

  /* ---- Listening audio via the browser's speech synthesis (no API) ---- */
  function wireAudio(root, blocks) {
    if (!("speechSynthesis" in window)) {
      root.querySelectorAll(".ielts-audio-btn").forEach(function (b) { if (!b.dataset.stop) { b.textContent = "Audio unavailable — use transcript"; b.disabled = true; } });
    }
    root.querySelectorAll(".ielts-audio-btn[data-audio]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        try {
          window.speechSynthesis.cancel();
          var bi = parseInt(btn.getAttribute("data-audio"), 10);
          var lines = (blocks[bi] && blocks[bi].script) || [];
          lines.forEach(function (l) {
            var u = new SpeechSynthesisUtterance(l.text || l);
            u.rate = 0.95; u.lang = "en-GB";
            window.speechSynthesis.speak(u);
          });
        } catch (e) {}
      });
    });
    root.querySelectorAll(".ielts-audio-btn[data-stop]").forEach(function (btn) {
      btn.addEventListener("click", function () { try { window.speechSynthesis.cancel(); } catch (e) {} });
    });
    root.querySelectorAll(".ielts-transcript-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var tr = root.querySelector("#tr-" + btn.getAttribute("data-tr"));
        if (tr) { tr.hidden = !tr.hidden; btn.textContent = tr.hidden ? "Show transcript" : "Hide transcript"; }
      });
    });
  }

  /* ---- Per-module instruction + start-gated timer / listening control ---- */
  function fmtSecs(s) { var m = Math.floor(s / 60), r = s % 60; return m + ":" + (r < 10 ? "0" : "") + r; }

  function timerControl(min) {
    return '<div class="ielts-timer-wrap">' +
      '<button type="button" class="ielts-timer-start" data-min="' + min + '">▶ Start the ' + min + '-minute timer</button>' +
      '<span class="ielts-timer" hidden>⏱️ <span class="ielts-clock">' + min + ':00</span></span>' +
      '<span class="ielts-timeup" hidden>⏰ Time is up — stop writing.</span></div>';
  }

  function moduleIntro(kind) {
    if (kind === "reading") {
      return '<div class="ielts-instr">📖 <strong>Academic Reading.</strong> Read the 3 passages and answer all 40 questions in <strong>60 minutes</strong>. Press start to run the clock — when it reaches zero you\'ll be told to stop. Then submit to see your score and estimated band.</div>' + timerControl(60);
    }
    return '<div class="ielts-instr">🎧 <strong>Listening.</strong> You will hear <strong>4 sections</strong>, once. Press start and the audio plays straight through (your browser reads it aloud) — answer as you listen. When the audio ends you get about 2 minutes to check your answers. You can also replay a section or show its transcript to practise.</div>' +
      '<div class="ielts-listen-wrap"><button type="button" id="ielts-listen-start" class="ielts-timer-start">▶ Start listening test</button> <span class="ielts-listen-status" id="ielts-listen-status" hidden></span></div>';
  }

  function wireTimerControl(root) {
    root.querySelectorAll(".ielts-timer-start[data-min]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wrap = btn.closest(".ielts-timer-wrap");
        var timer = wrap.querySelector(".ielts-timer"), clock = wrap.querySelector(".ielts-clock"), up = wrap.querySelector(".ielts-timeup");
        btn.hidden = true; timer.hidden = false;
        var left = (parseInt(btn.getAttribute("data-min"), 10) || 60) * 60;
        var iv = setInterval(function () {
          left--;
          if (left <= 0) { clearInterval(iv); timer.hidden = true; up.hidden = false; return; }
          clock.textContent = fmtSecs(left);
        }, 1000);
      });
    });
  }

  /* Listening: play all sections straight through, then a review countdown */
  function wireListening(root, blocks) {
    var startBtn = root.querySelector("#ielts-listen-start"), status = root.querySelector("#ielts-listen-status");
    if (!startBtn) return;
    if (!("speechSynthesis" in window)) { startBtn.textContent = "Audio unavailable — use the transcripts"; startBtn.disabled = true; return; }
    startBtn.addEventListener("click", function () {
      startBtn.disabled = true; startBtn.hidden = true; status.hidden = false;
      try { window.speechSynthesis.cancel(); } catch (e) {}
      var total = blocks.length, utters = [];
      blocks.forEach(function (b, bi) {
        var h = new SpeechSynthesisUtterance("Section " + (bi + 1) + ".");
        h.rate = 0.95; h.lang = "en-GB";
        h.onstart = function () { status.textContent = "🔊 Playing Section " + (bi + 1) + " of " + total + "…"; };
        try { window.speechSynthesis.speak(h); } catch (e) {}
        (b.script || []).forEach(function (l) {
          var u = new SpeechSynthesisUtterance(l.text || l); u.rate = 0.95; u.lang = "en-GB";
          try { window.speechSynthesis.speak(u); } catch (e) {}
          utters.push(u);
        });
      });
      var last = utters[utters.length - 1];
      if (last) last.onend = function () { reviewCountdown(status, 120); };
      else reviewCountdown(status, 120);
    });
  }
  function reviewCountdown(status, secs) {
    var left = secs;
    status.textContent = "✅ Audio finished — " + fmtSecs(left) + " to check your answers.";
    var iv = setInterval(function () {
      left--;
      if (left <= 0) { clearInterval(iv); status.textContent = "⏰ Time is up — please submit your answers."; status.classList.add("is-up"); return; }
      status.textContent = "✅ Audio finished — " + fmtSecs(left) + " to check your answers.";
    }, 1000);
  }

  /* ---- Writing (live word counter + free AI band estimate) ---- */
  function draftKey(taskKey) { return "pulse:ielts:draft:" + qs("module") + "/" + qs("test") + "/" + taskKey; }
  function renderWriting(root, head, test) {
    function task(t, key, label) {
      var box = '<div class="ielts-wbox-wrap"><textarea class="ielts-wbox" data-min="' + t.minWords + '" data-task="' + key + '" placeholder="Type your answer here…"></textarea>' +
        '<div class="ielts-wfoot"><span class="ielts-wc" data-key="' + key + '">0 words</span>' +
        '<div class="ielts-wactions">' +
          '<button type="button" class="ielts-save-btn" data-task="' + key + '">💾 Save</button>' +
          '<button type="button" class="ielts-retry-btn" data-task="' + key + '" hidden>🔄 Try again</button>' +
          '<button type="button" class="btn btn-primary ielts-eval-btn" data-task="' + key + '">✨ Get AI band estimate</button>' +
        "</div></div>" +
        '<div class="ielts-eval-out" data-task="' + key + '" hidden></div></div>';
      var head2 = '<div class="ielts-wtask-head"><h3>' + label + '</h3><span class="ielts-wtask-min">Write at least ' + t.minWords + " words · " + t.timeSuggest + "</span></div>";
      var prompt = '<p class="ielts-wtask-prompt">' + esc(t.prompt) + "</p>";
      if (t.figure) {
        // Task 1: figure beside the answer box, both equal height and aligned
        return '<section class="ielts-wtask">' + head2 + prompt +
          '<div class="ielts-wsplit"><figure class="ielts-fig">' + t.figure + "</figure>" + box + "</div></section>";
      }
      return '<section class="ielts-wtask">' + head2 + prompt + box + "</section>";
    }
    root.innerHTML = head +
      '<div class="ielts-instr">✍️ <strong>Academic Writing.</strong> Complete <strong>both</strong> tasks in <strong>60 minutes</strong> — about 20 min on Task 1 (150+ words) and 40 min on Task 2 (250+ words). Press start to run the clock. <span class="ielts-eval-note">✨ <strong>Free AI band estimate</strong> — write your answer, then get examiner-style feedback against the official IELTS band descriptors.</span></div>' +
      timerControl(60) +
      task(test.task1, "t1", "Task 1") + task(test.task2, "t2", "Task 2");
    root.querySelectorAll(".ielts-wbox").forEach(function (box) {
      var out = box.closest(".ielts-wbox-wrap").querySelector(".ielts-wc");
      function count() {
        var w = (box.value.trim().match(/\S+/g) || []).length;
        out.textContent = w + " words";
        out.classList.toggle("is-ok", w >= parseInt(box.getAttribute("data-min"), 10));
      }
      // restore any saved draft for this task
      try { var saved = localStorage.getItem(draftKey(box.getAttribute("data-task"))); if (saved) box.value = saved; } catch (e) {}
      count();
      box.addEventListener("input", count);
    });
    wireTimerControl(root);
    wireEval(root, test);
  }

  /* ---- Free AI band estimate — sign-in gated, saves drafts, band-descriptor feedback ---- */
  function wireEval(root, test) {
    var enabled = false, perDay = 8, pendingBtn = null;
    // After the writer signs in from the gate, resume the evaluation they wanted.
    if (window.PulseAuth && window.PulseAuth.onChange) {
      window.PulseAuth.onChange(function (user) {
        if (user && pendingBtn) { var b = pendingBtn; pendingBtn = null; evaluate(b); }
      });
    }
    fetch("/api/ielts-eval?action=status").then(function (r) { return r.json(); }).then(function (s) {
      enabled = !!(s && s.enabled); perDay = (s && s.perDay) || 8;
      if (!enabled) {
        root.querySelectorAll(".ielts-eval-btn").forEach(function (b) { b.disabled = true; b.textContent = "✨ AI band estimate — coming soon"; b.title = "Being set up"; });
        var note = root.querySelector(".ielts-eval-note"); if (note) note.textContent = "Detailed AI band feedback is coming very soon.";
      }
    }).catch(function () { /* offline / local preview — leave button, click will message */ });

    function signInPrompt(out) {
      out.hidden = false;
      out.innerHTML = '<div class="ielts-eval-signin"><p>🔒 <strong>Sign in to get your free AI band estimate</strong><br>' +
        "<span>It's free — sign in to unlock your AI band estimate and detailed examiner feedback.</span></p>" +
        '<button type="button" class="btn btn-primary ielts-eval-signin-btn">Sign in / Create free account</button></div>';
      var b = out.querySelector(".ielts-eval-signin-btn");
      if (b) b.addEventListener("click", function () { if (window.PulseAuth && window.PulseAuth.openModal) window.PulseAuth.openModal("signin", { stay: true }); });
    }

    function evaluate(btn) {
      var tk = btn.getAttribute("data-task");
      var t = tk === "t2" ? test.task2 : test.task1;
      var wrap = btn.closest(".ielts-wbox-wrap");
      var box = wrap.querySelector(".ielts-wbox");
      var essay = box.value;
      var out = wrap.querySelector(".ielts-eval-out");
      var retry = wrap.querySelector(".ielts-retry-btn");
      var wc = (essay.trim().match(/\S+/g) || []).length;
      out.hidden = false;
      // Ask the writer to sign in first (so the result saves to their account); resume automatically after.
      if (window.PulseAuth && window.PulseAuth.enabled && !window.PulseAuth.user) { pendingBtn = btn; signInPrompt(out); return; }
      if (wc < 40) { out.innerHTML = '<p class="ielts-eval-msg">✍️ Write at least 40 words first — the examiner needs something to mark!</p>'; return; }
      try { localStorage.setItem(draftKey(tk), essay); } catch (e) {}   // save the draft with every check
      var old = btn.textContent; btn.disabled = true; btn.textContent = "Evaluating… ⏳";
      out.innerHTML = '<p class="ielts-eval-msg">🤖 The AI examiner is marking your answer against the IELTS band descriptors…</p>';
      fetch("/api/ielts-eval", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: tk, prompt: t.prompt, essay: essay })
      }).then(function (r) { return r.json().then(function (d) { return { st: r.status, d: d }; }); })
        .then(function (x) {
          btn.disabled = false; btn.textContent = old;
          var d = x.d || {};
          if (x.st === 429) {
            out.innerHTML = '<p class="ielts-eval-msg">⏳ ' + (d.error === "site-limit"
              ? "Today's free evaluations are all used up site-wide — please try again tomorrow."
              : "You have used all " + (d.perDay || perDay) + " free checks for today — come back tomorrow!") + "</p>";
            return;
          }
          if (x.st === 503 || d.error === "not-configured") { out.innerHTML = '<p class="ielts-eval-msg">✨ The AI examiner is being set up — please check back soon.</p>'; return; }
          if (!d.ok) { out.innerHTML = '<p class="ielts-eval-msg">😕 The evaluator could not score this attempt. Please try again in a minute.</p>'; return; }
          out.innerHTML = renderEvalCard(d);
          retry.hidden = false;
          try { localStorage.setItem(draftKey(tk) + ":result", JSON.stringify(d)); } catch (e) {}
          saveWritingBand(qs("module") + "/" + qs("test") + "/" + tk, d.overall);   // → dashboard
        })
        .catch(function () {
          btn.disabled = false; btn.textContent = old;
          out.innerHTML = '<p class="ielts-eval-msg">📶 Could not reach the evaluator — check your connection and try again.</p>';
        });
    }

    root.querySelectorAll(".ielts-eval-btn").forEach(function (btn) { btn.addEventListener("click", function () { evaluate(btn); }); });
    root.querySelectorAll(".ielts-retry-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { evaluate(btn.closest(".ielts-wbox-wrap").querySelector(".ielts-eval-btn")); });
    });
    // Save button — persist the draft to this device (and account when signed in)
    root.querySelectorAll(".ielts-save-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var wrap = btn.closest(".ielts-wbox-wrap");
        var essay = wrap.querySelector(".ielts-wbox").value;
        try { localStorage.setItem(draftKey(btn.getAttribute("data-task")), essay); } catch (e) {}
        var old = btn.textContent; btn.textContent = "Saved ✓"; btn.classList.add("is-saved");
        setTimeout(function () { btn.textContent = old; btn.classList.remove("is-saved"); }, 1600);
      });
    });
    // restore the last saved result for each task
    root.querySelectorAll(".ielts-wbox-wrap").forEach(function (wrap) {
      var tk = (wrap.querySelector(".ielts-wbox") || {}).getAttribute ? wrap.querySelector(".ielts-wbox").getAttribute("data-task") : null;
      if (!tk) return;
      try {
        var saved = localStorage.getItem(draftKey(tk) + ":result");
        if (saved) {
          var d = JSON.parse(saved), out = wrap.querySelector(".ielts-eval-out"), retry = wrap.querySelector(".ielts-retry-btn");
          if (d && d.ok) { out.hidden = false; out.innerHTML = '<p class="ielts-eval-prev">Your last saved estimate:</p>' + renderEvalCard(d); if (retry) retry.hidden = false; }
        }
      } catch (e) {}
    });
  }

  function renderEvalCard(d) {
    var rows = d.criteria.map(function (c) {
      return '<div class="ielts-eval-row"><span class="ielts-eval-crit">' + esc(c.name) + '</span>' +
        '<span class="ielts-eval-band">' + c.band.toFixed(1) + "</span>" +
        '<span class="ielts-eval-note2">' + esc(c.note) + "</span></div>";
    }).join("");
    var list = function (title, items, ic) {
      if (!items || !items.length) return "";
      return '<p class="ielts-eval-sub">' + ic + " " + title + "</p><ul class='ielts-eval-list'>" +
        items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
    };
    return '<div class="ielts-eval-head"><span class="ielts-eval-overall">' + d.overall.toFixed(1) + '</span>' +
      '<div><strong>Estimated overall band</strong><br><span class="ielts-eval-meta">' + d.words + " words" +
      (typeof d.left === "number" ? " · " + d.left + " free check" + (d.left === 1 ? "" : "s") + " left today" : "") + "</span></div></div>" +
      '<p class="ielts-eval-sub">📋 Band for each criterion — and the main issue</p>' + rows +
      list("What works well", d.strengths, "✅") +
      list("What to improve to move up a band", d.improvements, "📈") +
      '<p class="ielts-eval-disc">AI estimate for practice, based on the official IELTS band descriptors — not an official IELTS score.</p>';
  }

  /* ---- Speaking (show examiner's questions; AI eval = Pro) ---- */
  function renderSpeaking(root, head, test) {
    var p1 = test.part1, p2 = test.part2, p3 = test.part3;
    root.innerHTML = head +
      '<p class="ielts-instr">The Speaking test is an 11–14 minute face-to-face interview in three parts. Read the examiner\'s questions below and practise aloud. Recording + AI band feedback arrives in the Pro version.</p>' +
      '<section class="ielts-spart"><h3>Part 1 — Introduction &amp; interview <span>(4–5 min)</span></h3>' +
        '<p class="ielts-sp-topic">' + esc(p1.topic) + "</p><ul>" + p1.questions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></section>" +
      '<section class="ielts-spart ielts-cue"><h3>Part 2 — Long turn <span>(3–4 min)</span></h3>' +
        '<div class="ielts-cuecard"><p class="ielts-cue-task">' + esc(p2.cueCard) + "</p><p class='ielts-cue-lead'>You should say:</p><ul>" +
        p2.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>" +
        '<p class="ielts-cue-note">You have 1 minute to prepare, then speak for 1–2 minutes.</p></div>' +
        '<button type="button" class="btn btn-secondary ielts-pro-btn" disabled title="Coming in the Pro version">🔒 Record &amp; get AI band score (Pro)</button></section>' +
      '<section class="ielts-spart"><h3>Part 3 — Discussion <span>(4–5 min)</span></h3>' +
        '<p class="ielts-sp-topic">' + esc(p3.topic) + "</p><ul>" + p3.questions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ul></section>";
  }

  /* ---- Writing sample answers (band 6/7/8/9) ---- */
  /* Build a clean SVG chart for a Task-1 sample figure. */
  function rnd(x) { return Math.round(x * 10) / 10; }
  function buildSampleFigure(f) {
    if (f.type === "line") return figLine(f);
    if (f.type === "pie-table") return figPieTable(f);
    return "";
  }
  function figLine(f) {
    var W = 560, H = 300, padL = 46, padR = 16, padT = 18, padB = 46;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var yMax = f.yMax || 20, n = f.xLabels.length, ticks = 5;
    function xx(i) { return padL + (n === 1 ? 0 : plotW * i / (n - 1)); }
    function yy(v) { return padT + plotH * (1 - v / yMax); }
    var svg = '<svg viewBox="0 0 ' + W + " " + H + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line graph of the data">';
    for (var g = 0; g <= ticks; g++) {
      var v = yMax * g / ticks, y = yy(v);
      svg += '<line x1="' + padL + '" y1="' + rnd(y) + '" x2="' + (W - padR) + '" y2="' + rnd(y) + '" stroke="#E5E7EB" stroke-width="1"/>' +
        '<text x="' + (padL - 8) + '" y="' + rnd(y + 4) + '" text-anchor="end" font-size="12" fill="#6B7280">' + Math.round(v) + "</text>";
    }
    f.xLabels.forEach(function (lb, i) {
      svg += '<text x="' + rnd(xx(i)) + '" y="' + (H - padB + 22) + '" text-anchor="middle" font-size="12" fill="#374151">' + esc(lb) + "</text>";
    });
    if (f.yLabel) {
      var my = padT + plotH / 2;
      svg += '<text x="14" y="' + rnd(my) + '" transform="rotate(-90 14 ' + rnd(my) + ')" text-anchor="middle" font-size="12" fill="#6B7280">' + esc(f.yLabel) + "</text>";
    }
    f.series.forEach(function (s) {
      var d = s.values.map(function (v, i) { return (i ? "L" : "M") + rnd(xx(i)) + " " + rnd(yy(v)); }).join(" ");
      svg += '<path d="' + d + '" fill="none" stroke="' + s.color + '" stroke-width="2.5" stroke-linejoin="round"/>';
      s.values.forEach(function (v, i) { svg += '<circle cx="' + rnd(xx(i)) + '" cy="' + rnd(yy(v)) + '" r="3.4" fill="' + s.color + '"/>'; });
    });
    svg += "</svg>";
    var legend = '<ul class="ielts-fig-legend">' + f.series.map(function (s) {
      return '<li><span class="ielts-fig-swatch" style="background:' + s.color + '"></span>' + esc(s.name) + "</li>";
    }).join("") + "</ul>";
    return svg + legend;
  }
  function figPieTable(f) {
    var cx = 92, cy = 96, r = 82, total = f.slices.reduce(function (a, s) { return a + s.value; }, 0), ang = -Math.PI / 2;
    var svg = '<svg viewBox="0 0 190 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pie chart of user categories">';
    f.slices.forEach(function (s) {
      var a2 = ang + 2 * Math.PI * s.value / total;
      var x1 = cx + r * Math.cos(ang), y1 = cy + r * Math.sin(ang), x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
      var large = (a2 - ang) > Math.PI ? 1 : 0;
      svg += '<path d="M' + cx + " " + cy + " L" + rnd(x1) + " " + rnd(y1) + " A" + r + " " + r + " 0 " + large + " 1 " + rnd(x2) + " " + rnd(y2) + ' Z" fill="' + s.color + '" stroke="#fff" stroke-width="1.5"/>';
      if (s.value >= 6) {
        var mid = (ang + a2) / 2, lr = r * 0.62, lx = cx + lr * Math.cos(mid), ly = cy + lr * Math.sin(mid);
        svg += '<text x="' + rnd(lx) + '" y="' + rnd(ly + 4) + '" text-anchor="middle" font-size="11" font-weight="600" fill="#fff">' + s.value + "%</text>";
      }
      ang = a2;
    });
    svg += "</svg>";
    var legend = '<ul class="ielts-fig-legend">' + f.slices.map(function (s) {
      return '<li><span class="ielts-fig-swatch" style="background:' + s.color + '"></span>' + esc(s.label) + " (" + s.value + "%)</li>";
    }).join("") + "</ul>";
    var thead = "<tr><th>" + esc(f.tableTitle || "") + "</th>" + f.tableCols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr>";
    var tbody = f.tableRows.map(function (row) {
      return "<tr><td>" + esc(row[0]) + "</td>" + row.slice(1).map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>";
    }).join("");
    return '<div class="ielts-fig-pierow">' + svg + legend + "</div>" +
      '<table class="ielts-fig-table">' + thead + tbody + "</table>";
  }

  function initSamples() {
    var root = document.getElementById("ielts-root");
    if (!root) return;
    var list = (window.IELTS.data && window.IELTS.data.samples) || [];
    if (!list.length) { root.innerHTML = '<p class="ielts-empty">Sample answers are being finalised.</p>'; return; }
    var html = '<nav class="ielts-crumb"><a href="ielts.html">IELTS</a> › <span>Writing sample answers</span></nav>' +
      '<h1 class="section-title ielts-test-title">✍️ Writing — band 6–9 sample answers</h1>' +
      '<p class="ielts-instr">Compare four model answers — <strong>Band 6, 7, 8 and 9</strong> — for the <em>same</em> task. Watch how range, accuracy, organisation and precision improve as the band rises. Each answer has an examiner note on what earns that band. (Original teaching samples.)</p>';
    list.forEach(function (s, si) {
      var cc = "ielts-c" + ((si % 4) + 1);
      var tabs = s.bands.map(function (b, i) { return '<button type="button" class="ielts-sb-tab' + (i === 0 ? " is-on" : "") + '" data-s="' + si + '" data-b="' + b.band + '">Band ' + b.band + "</button>"; }).join("");
      var panels = s.bands.map(function (b, i) {
        return '<div class="ielts-sb-panel' + (i === 0 ? " is-on" : "") + '" data-s="' + si + '" data-b="' + b.band + '">' +
          '<p class="ielts-sb-note">📝 <strong>Band ' + b.band + '</strong> — ' + esc(b.note) + ' <span class="ielts-sb-wc">' + b.words + " words</span></p>" +
          '<div class="ielts-sb-answer">' + esc(b.answer).replace(/\n/g, "<br>") + "</div></div>";
      }).join("");
      var figBlock = s.figure
        ? '<figure class="ielts-sample-fig">' + buildSampleFigure(s.figure) +
            (s.figureData ? '<figcaption>' + esc(s.figureData) + "</figcaption>" : "") + "</figure>"
        : (s.figureData ? '<p class="ielts-sample-data"><strong>Data:</strong> ' + esc(s.figureData) + "</p>" : "");
      html += '<section class="ielts-sample ' + cc + '"><span class="ielts-block-tag">' + esc(s.task) + (s.chart ? " · " + esc(s.chart) : "") + "</span>" +
        '<p class="ielts-sample-prompt">' + esc(s.prompt) + "</p>" +
        figBlock +
        '<div class="ielts-sb-tabs">' + tabs + "</div>" + panels + "</section>";
    });
    root.innerHTML = html;
    root.querySelectorAll(".ielts-sb-tab").forEach(function (tab) {
      tab.addEventListener("click", function () {
        var si = tab.getAttribute("data-s"), b = tab.getAttribute("data-b");
        root.querySelectorAll('.ielts-sb-tab[data-s="' + si + '"]').forEach(function (t) { t.classList.toggle("is-on", t === tab); });
        root.querySelectorAll('.ielts-sb-panel[data-s="' + si + '"]').forEach(function (p) { p.classList.toggle("is-on", p.getAttribute("data-b") === b); });
      });
    });
  }

  /* ---------------- boot ---------------- */
  function boot() {
    if (document.getElementById("ielts-hub")) initHub();
    else if (document.getElementById("ielts-samples")) initSamples();
    else if (document.getElementById("ielts-player")) initTest();
  }
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
