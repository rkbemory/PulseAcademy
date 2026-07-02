/* Pulse for Nurses — IELTS renderer & engine (verification build, no API).
   Pages: ielts.html (hub) and ielts-test.html?module=&test= (player).
   Reading/Listening are auto-scored; Listening audio uses the browser's built-in
   speech synthesis (no API key). Writing shows tasks + a live word counter;
   Speaking shows the examiner's questions. AI band-scoring = Pro (later). */
(function () {
  "use strict";
  var LS = "pulse:ielts:progress";
  function qs(n) { return new URLSearchParams(location.search).get(n); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }
  function readJSON(k, d) { try { var v = JSON.parse(localStorage.getItem(k) || d); return (v && typeof v === "object") ? v : JSON.parse(d); } catch (e) { return JSON.parse(d); } }
  function save(mid, tid, score) { try { var p = readJSON(LS, "{}"); var k = mid + "/" + tid; if (!p[k] || score > p[k]) p[k] = score; localStorage.setItem(LS, JSON.stringify(p)); } catch (e) {} }

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
      var tests = m.tests.map(function (t) {
        var best = prog[mid + "/" + t.id];
        var badge = (typeof best === "number") ? '<span class="ielts-best">Best ' + best + "/40</span>" : "";
        return '<a class="ielts-test-link" href="ielts-test.html?module=' + mid + "&test=" + t.id + '">' +
          "<span>" + esc(t.title) + "</span>" + badge + "<span class='ielts-arrow'>→</span></a>";
      }).join("");
      return '<div class="ielts-mod-card" style="--mc:' + moduleColor(mid) + '">' +
        '<div class="ielts-mod-top"><span class="ielts-mod-ic">' + m.icon + "</span>" +
        "<div><h3>" + esc(m.name) + "</h3><span class='ielts-mod-meta'>" + esc(m.blurb) + "</span></div></div>" +
        '<div class="ielts-test-list">' + tests + "</div></div>";
    }).join("");

    var official = (meta.official || []).map(function (o) {
      return '<a href="' + esc(o.url) + '" target="_blank" rel="noopener noreferrer">' + esc(o.name) + " ↗</a>";
    }).join("");

    root.innerHTML =
      '<div class="ielts-about">' +
        '<h2 class="ielts-h2">What is IELTS?</h2>' +
        '<p>The International English Language Testing System measures English for study, work and migration. It is scored in <strong>bands 1–9</strong>. There are three versions:</p>' +
        '<div class="ielts-type-grid">' +
          typeCard("Academic", "For university and professional registration (including nursing councils like the NMC).") +
          typeCard("General Training", "For work experience, training programmes and migration to English-speaking countries.") +
          typeCard("UKVI", "IELTS for UK Visas & Immigration — the same test, taken at a UKVI-approved centre for UK visa purposes.") +
        "</div>" +
        '<p class="ielts-modline">Every version tests the same four modules: <strong>Listening</strong>, <strong>Reading</strong>, <strong>Writing</strong> and <strong>Speaking</strong>.</p>' +
      "</div>" +
      '<div class="ielts-mod-grid">' + cards + "</div>" +
      '<div class="ielts-official">Official test sites: ' + official + "</div>" +
      '<p class="ielts-disclaimer">' + esc(meta.note) + " AI evaluation of Writing &amp; Speaking is coming in the Pro version.</p>";
  }
  function typeCard(name, desc) { return '<div class="ielts-type"><h4>' + esc(name) + "</h4><p>" + esc(desc) + "</p></div>"; }
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

  /* ---- Writing (show tasks + live word counter; AI score = Pro) ---- */
  function renderWriting(root, head, test) {
    function task(t, key, label) {
      var box = '<div class="ielts-wbox-wrap"><textarea class="ielts-wbox" data-min="' + t.minWords + '" placeholder="Type your answer here…"></textarea>' +
        '<div class="ielts-wfoot"><span class="ielts-wc" data-key="' + key + '">0 words</span>' +
        '<button type="button" class="btn btn-secondary ielts-pro-btn" disabled title="Coming in the Pro version">🔒 Get AI band score (Pro)</button></div></div>';
      var head2 = '<div class="ielts-wtask-head"><h3>' + label + '</h3><span class="ielts-wtask-min">Write at least ' + t.minWords + " words · " + t.timeSuggest + "</span></div>";
      var prompt = '<p class="ielts-wtask-prompt">' + esc(t.prompt) + "</p>";
      if (t.figure) {
        // Task 1: figure (smaller) beside the answer box so both stay in view
        return '<section class="ielts-wtask">' + head2 + prompt +
          '<div class="ielts-wsplit"><figure class="ielts-fig">' + t.figure + "</figure>" + box + "</div></section>";
      }
      return '<section class="ielts-wtask">' + head2 + prompt + box + "</section>";
    }
    root.innerHTML = head +
      '<div class="ielts-instr">✍️ <strong>Academic Writing.</strong> Complete <strong>both</strong> tasks in <strong>60 minutes</strong> — about 20 min on Task 1 (150+ words) and 40 min on Task 2 (250+ words). Press start to run the clock; the live word counter tracks your length. Detailed AI band feedback arrives in the Pro version.</div>' +
      timerControl(60) +
      task(test.task1, "t1", "Task 1") + task(test.task2, "t2", "Task 2");
    root.querySelectorAll(".ielts-wbox").forEach(function (box) {
      var out = box.closest(".ielts-wbox-wrap").querySelector(".ielts-wc");
      box.addEventListener("input", function () {
        var w = (box.value.trim().match(/\S+/g) || []).length;
        var min = parseInt(box.getAttribute("data-min"), 10);
        out.textContent = w + " words";
        out.classList.toggle("is-ok", w >= min);
      });
    });
    wireTimerControl(root);
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

  /* ---------------- boot ---------------- */
  function boot() {
    if (document.getElementById("ielts-hub")) initHub();
    else if (document.getElementById("ielts-player")) initTest();
  }
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
