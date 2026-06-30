/* ============================================================
   Pulse for Nurses — Academic Programs renderer.
   Drives academic.html (section landing), academic-program.html
   (year/subject explorer), academic-subject.html (topic list)
   and academic-topic.html (topic viewer). Reads data from
   window.Academic; reuses site styles, Web3Forms and PulseAuth.
   ============================================================ */
(function () {
  "use strict";

  var DATA = window.Academic;
  var WEB3FORMS_KEY = "9a9d33e7-bd31-42a5-b5e3-3f8b29a320a4";
  var LS_PROGRESS = "pulse:academic:progress";

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function qs(name) { return new URLSearchParams(location.search).get(name); }
  function isLocal() { return /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/.test(location.hostname); }
  function key(p, s, t) { return p + "/" + s + "/" + t; }

  function getProgress() {
    try { return JSON.parse(localStorage.getItem(LS_PROGRESS) || "{}"); }
    catch (e) { return {}; }
  }
  function isStudied(p, s, t) { return !!getProgress()[key(p, s, t)]; }
  function setStudied(p, s, t, score) {
    var pr = getProgress();
    pr[key(p, s, t)] = { studied: true, score: (score == null ? null : score), ts: Date.now() };
    try { localStorage.setItem(LS_PROGRESS, JSON.stringify(pr)); } catch (e) {}
  }
  function studiedCount(p, s) {
    var pr = getProgress(), n = 0, prefix = p + "/" + s + "/";
    for (var k in pr) { if (pr.hasOwnProperty(k) && k.indexOf(prefix) === 0) n++; }
    return n;
  }

  /* Lazy-load a subject's topic file. */
  function loadSubject(programId, subjectId, cb) {
    var k = programId + "/" + subjectId;
    if (DATA.topics && DATA.topics[k]) return cb(DATA.topics[k]);
    var subj = DATA.findSubject(programId, subjectId);
    if (!subj || !subj.available) return cb(null);
    var sc = document.createElement("script");
    sc.src = "data/academic/" + programId + "/" + subjectId + ".js";
    sc.onload = function () { cb((DATA.topics && DATA.topics[k]) || null); };
    sc.onerror = function () { cb(null); };
    document.head.appendChild(sc);
  }

  function breadcrumb(parts) {
    var html = parts.map(function (p, i) {
      var last = i === parts.length - 1;
      return last ? '<span aria-current="page">' + esc(p.label) + "</span>"
                  : '<a href="' + esc(p.href) + '">' + esc(p.label) + "</a>";
    }).join('<span class="dip-crumb-sep">›</span>');
    return '<nav class="dip-crumb" aria-label="Breadcrumb">' + html + "</nav>";
  }

  /* ============ SECTION LANDING (academic.html) ============ */
  function initSection() {
    var root = document.getElementById("academic-root");
    if (!root || !DATA) return;
    var html = '<div class="section-eyebrow">📚 Academic Programs</div>';
    html += '<h1 class="section-title">' + esc(DATA.section.name) + "</h1>";
    html += '<p class="section-lead">' + esc(DATA.section.tagline) + "</p>";
    html += '<div class="dip-program-grid">';
    Object.keys(DATA.programs).forEach(function (id) {
      var p = DATA.programs[id];
      var band = "linear-gradient(90deg," + p.color + "," + p.accent + ")";
      var meta = p.available
        ? (p.durationYears + " years · " + (p.totalMarks ? p.totalMarks.toLocaleString() + " marks" : ""))
        : "Curriculum being added";
      var inner =
        '<div class="dip-prog-band" style="background:' + band + '"></div>' +
        '<div class="dip-prog-icon">' + (p.icon || "🎓") + "</div>" +
        '<span class="dip-prog-auth">' + esc(p.authority) + "</span>" +
        "<h3>" + esc(p.name) + "</h3>" +
        '<p class="dip-prog-meta">' + esc(meta) + "</p>" +
        '<span class="dip-arrow">' + (p.available ? "Open program →" : "Coming soon") + "</span>";
      if (p.available) {
        html += '<a class="dip-prog-card is-open" href="academic-program.html?program=' + encodeURIComponent(id) + '">' + inner + "</a>";
      } else {
        html += '<div class="dip-prog-card is-soon" aria-disabled="true">' + inner + "</div>";
      }
    });
    html += "</div>";
    root.innerHTML = html;
  }

  /* ============ PROGRAM EXPLORER (academic-program.html) ============ */
  function initProgram() {
    var root = document.getElementById("academic-program-root");
    if (!root || !DATA) return;
    var programId = qs("program");
    var prog = DATA.findProgram(programId);
    if (!prog) { root.innerHTML = notFound("Program not found."); return; }

    var html = breadcrumb([
      { label: "Academic Programs", href: "academic.html" },
      { label: prog.short || prog.name }
    ]);
    html += '<div class="section-eyebrow">📂 Academic Program</div>';
    html += '<h1 class="section-title">' + esc(prog.name) + "</h1>";

    if (!prog.available || !prog.years || !Object.keys(prog.years).length) {
      html += '<p class="section-lead">' + esc(prog.authority) + "</p>";
      html += comingSoonPanel(prog.name, prog.note);
      root.innerHTML = html;
      return;
    }

    html += '<p class="section-lead">' + esc(prog.authority) + " · " + prog.durationYears + " years" +
            (prog.internshipMonths ? " + " + prog.internshipMonths + "-month internship" : "") +
            (prog.totalMarks ? " · " + prog.totalMarks.toLocaleString() + " marks" : "") +
            ". Pick a year, then a subject.</p>";

    Object.keys(prog.years).forEach(function (y) {
      var yr = prog.years[y];
      html += '<section class="dip-year"><div class="dip-year-head"><span class="dip-folder">📂</span>' +
        "<h2>" + esc(yr.name) + "</h2>" +
        '<span class="dip-year-meta">' + yr.subjects.length + ' subjects · ' + yr.totalMarks.toLocaleString() + ' marks</span></div>';
      html += '<div class="dip-subject-grid">';
      yr.subjects.forEach(function (s) {
        var avail = !!s.available;
        var done = studiedCount(programId, s.id);
        var total = s.topicCount || null;
        var badge = avail
          ? '<span class="dip-badge dip-badge-on">' + (total ? done + "/" + total + " studied" : "Available") + "</span>"
          : '<span class="dip-badge dip-badge-soon">Coming soon</span>';
        var inner =
          '<div class="dip-subj-top"><span class="dip-code">' + esc(s.code) + "</span>" + badge + "</div>" +
          "<h3>" + esc(s.name) + "</h3>" +
          '<p class="dip-subj-meta">' + s.marks + " marks · " + s.hours + " hrs · " + esc(s.type) + "</p>" +
          '<span class="dip-arrow">' + (avail ? "Open subject →" : "In development") + "</span>";
        if (avail) {
          html += '<a class="dip-subj-card is-open" href="academic-subject.html?program=' + encodeURIComponent(programId) +
            "&year=" + y + "&subject=" + encodeURIComponent(s.id) + '">' + inner + "</a>";
        } else {
          html += '<div class="dip-subj-card is-soon" aria-disabled="true">' + inner + "</div>";
        }
      });
      html += "</div></section>";
    });
    root.innerHTML = html;
  }

  /* ============ SUBJECT (academic-subject.html) ============ */
  function initSubject() {
    var root = document.getElementById("academic-subject-root");
    if (!root || !DATA) return;
    var programId = qs("program"), subjectId = qs("subject");
    var prog = DATA.findProgram(programId);
    var subj = DATA.findSubject(programId, subjectId);
    if (!prog || !subj) { root.innerHTML = notFound("Subject not found."); return; }

    loadSubject(programId, subjectId, function (topics) {
      var html = breadcrumb([
        { label: "Academic Programs", href: "academic.html" },
        { label: prog.short || prog.name, href: "academic-program.html?program=" + encodeURIComponent(programId) },
        { label: subj.name }
      ]);
      html += '<div class="section-eyebrow">' + esc(subj.code) + " · " + esc(subj.yearName) + "</div>";
      html += '<h1 class="section-title">' + esc(subj.name) + "</h1>";
      html += '<p class="section-lead">' + subj.marks + " marks · " + subj.hours + " teaching hours" +
              (topics ? " · " + topics.length + " topics" : "") + ".</p>";

      if (!topics) { html += comingSoonPanel(subj.name); root.innerHTML = html; return; }

      var done = studiedCount(programId, subjectId), total = topics.length;
      html += '<div class="dip-progress-bar"><div class="dip-progress-fill" style="width:' +
              Math.round(done / total * 100) + '%"></div></div>';
      html += '<p class="dip-progress-label">' + done + " of " + total + " topics studied</p>";

      var curUnit = null;
      html += '<div class="dip-topic-list">';
      topics.forEach(function (t, i) {
        if (t.unit && t.unit !== curUnit) { curUnit = t.unit; html += '<div class="dip-unit-head">' + esc(curUnit) + "</div>"; }
        var num = '<span class="dip-topic-num">' + (i + 1) + "</span>";
        var studied = isStudied(programId, subjectId, t.id);
        var meta = t.placeholder
          ? '<span class="dip-pill dip-pill-soon">Coming soon</span>'
          : '<span class="dip-pill">' + (t.readMinutes || 8) + " min read</span>" +
            (studied ? '<span class="dip-pill dip-pill-done">✓ Studied</span>' : "");
        var body = num + '<div class="dip-topic-text"><h3>' + esc(t.title) + "</h3>" +
          (t.summary ? "<p>" + esc(t.summary) + "</p>" : "") + "</div>" +
          '<div class="dip-topic-meta">' + meta + "</div>";
        if (t.placeholder) {
          html += '<div class="dip-topic-row is-soon" aria-disabled="true">' + body + "</div>";
        } else {
          html += '<a class="dip-topic-row" href="academic-topic.html?program=' + encodeURIComponent(programId) +
            "&subject=" + encodeURIComponent(subjectId) + "&topic=" + encodeURIComponent(t.id) + '">' + body + "</a>";
        }
      });
      html += "</div>";
      root.innerHTML = html;
    });
  }

  /* ============ TOPIC VIEWER (academic-topic.html) ============ */
  function initTopic() {
    var root = document.getElementById("academic-topic-root");
    if (!root || !DATA) return;
    var programId = qs("program"), subjectId = qs("subject"), topicId = qs("topic");
    var prog = DATA.findProgram(programId);
    var subj = DATA.findSubject(programId, subjectId);
    if (!prog || !subj) { root.innerHTML = notFound("Subject not found."); return; }

    loadSubject(programId, subjectId, function (topics) {
      if (!topics) { root.innerHTML = notFound("Content not available yet."); return; }
      var idx = -1;
      for (var i = 0; i < topics.length; i++) { if (topics[i].id === topicId) { idx = i; break; } }
      var topic = idx >= 0 ? topics[idx] : null;
      if (!topic) { root.innerHTML = notFound("Topic not found."); return; }

      var head = breadcrumb([
        { label: "Academic Programs", href: "academic.html" },
        { label: prog.short || prog.name, href: "academic-program.html?program=" + encodeURIComponent(programId) },
        { label: subj.name, href: "academic-subject.html?program=" + encodeURIComponent(programId) + "&subject=" + encodeURIComponent(subjectId) },
        { label: topic.title }
      ]);
      head += '<div class="section-eyebrow">' + esc(subj.name) + " · " + esc(subj.code) + "</div>";
      head += '<h1 class="section-title dip-topic-title">' + esc(topic.title) + "</h1>";
      if (topic.summary) head += '<p class="section-lead">' + esc(topic.summary) + "</p>";

      if (topic.placeholder) { root.innerHTML = head + comingSoonPanel(topic.title); return; }

      var tabs = '<div class="dip-tabs" role="tablist">' +
        tabBtn("notes", "📖 Notes", true) + tabBtn("video", "📺 Video") +
        tabBtn("quiz", "✍️ Self-Check") + tabBtn("exam", "❓ Exam Prep") +
        tabBtn("feedback", "💬 Feedback") + "</div>";

      var panels =
        panel("notes", renderNotes(topic) + renderRefs(topic), true) +
        panel("video", renderVideo(topic)) +
        panel("quiz", renderQuiz(topic)) +
        panel("exam", renderExam(topic)) +
        panel("feedback", renderFeedback(topic));

      root.innerHTML = head + tabs + '<div class="dip-stage">' + panels + "</div>" +
        renderPrevNext(topics, idx, programId, subjectId);

      wireTabs(root);
      wireQuiz(root, programId, subjectId, topic);
      wireVideo(root);
      wireFeedback(root, programId, subjectId, topic);
    });
  }

  /* ---------- sub-renderers ---------- */
  function renderFigure(fig) {
    if (!fig) return "";
    var cap = fig.caption ? '<figcaption class="dip-figcap">' + esc(fig.caption) + "</figcaption>" : "";
    var body;
    if (fig.svg) body = '<div class="dip-fig-svg">' + fig.svg + "</div>";          // trusted authored SVG
    else if (fig.src) body = '<img class="dip-fig-img" loading="lazy" src="' + esc(fig.src) + '" alt="' + esc(fig.caption || "") + '">';
    else body = '<div class="dip-fig-slot"><span>🖼️ Figure to be added</span>' + (fig.hint ? "<small>" + esc(fig.hint) + "</small>" : "") + "</div>";
    return '<figure class="dip-figure">' + body + cap + "</figure>";
  }
  function renderNotes(t) {
    if (!t.notes || !t.notes.length) return '<p class="dip-muted">Notes coming soon.</p>';
    return '<article class="dip-notes">' + t.notes.map(function (sec) {
      var out = "";
      if (sec.h) out += "<h3>" + esc(sec.h) + "</h3>";
      if (sec.p) out += "<p>" + esc(sec.p) + "</p>";
      if (sec.list && sec.list.length) out += "<ul>" + sec.list.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ul>";
      if (sec.figure) out += renderFigure(sec.figure);
      return out;
    }).join("") + "</article>";
  }
  function renderRefs(t) {
    if (!t.references || !t.references.length) return "";
    return '<div class="dip-refs"><h4>References</h4><ol>' +
      t.references.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol></div>";
  }
  function renderVideo(t) {
    if (t.youtubeId) {
      var tutor = t.tutor ? '<p class="dip-video-tutor">Lecture by ' + esc(t.tutor) + "</p>" : "";
      return '<div class="dip-video" data-id="' + esc(t.youtubeId) + '">' +
        '<button class="dip-video-play" type="button" aria-label="Play video lecture">' +
        '<img loading="lazy" src="https://i.ytimg.com/vi/' + esc(t.youtubeId) + '/hqdefault.jpg" alt="">' +
        '<span class="dip-play">▶</span></button></div>' + tutor;
    }
    return '<div class="dip-video-soon"><span class="dip-video-soon-icon">🎬</span>' +
      "<h3>Video lecture coming soon</h3>" +
      "<p>A tutor video for this topic is being recorded. Meanwhile, study the <strong>Notes</strong> tab and try the <strong>Self-Check</strong>.</p></div>";
  }
  function renderQuiz(t) {
    if (!t.assessment || !t.assessment.length) return '<p class="dip-muted">Self-check coming soon.</p>';
    var items = t.assessment.map(function (item, i) {
      var headq = '<p class="dip-q-stem"><span class="dip-q-num">Q' + (i + 1) + "</span>" + esc(item.q) + "</p>";
      var bodyq;
      if (item.type === "fill") {
        bodyq = '<div class="dip-fill"><input type="text" class="dip-fill-input" placeholder="Type your answer…" autocomplete="off">' +
          '<button type="button" class="btn btn-secondary dip-fill-btn">Check</button></div>';
      } else {
        bodyq = '<div class="dip-options">' + item.options.map(function (opt, oi) {
          return '<button type="button" class="dip-option" data-i="' + oi + '"><span class="dip-opt-letter">' +
            String.fromCharCode(65 + oi) + '</span><span class="dip-opt-text">' + esc(opt) + "</span></button>";
        }).join("") + "</div>";
      }
      var rat = '<div class="dip-rationale" hidden><strong>Rationale:</strong> ' + esc(item.rationale || "") + "</div>";
      return '<div class="dip-q" data-type="' + esc(item.type) + '" data-i="' + i + '">' + headq + bodyq + rat + "</div>";
    }).join("");
    return '<div class="dip-quiz">' + items + '<div class="dip-quiz-foot"><span class="dip-score" hidden></span></div></div>';
  }
  function renderExam(t) {
    if (!t.examQuestions || !t.examQuestions.length) return '<p class="dip-muted">Exam questions coming soon.</p>';
    return '<div class="dip-exam"><p class="dip-exam-lead">Likely exam-style questions to practise writing full answers:</p><ol>' +
      t.examQuestions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") + "</ol></div>";
  }
  function renderFeedback(t) {
    return '<form class="dip-feedback" novalidate>' +
      "<p>Spotted an error, or have a question about <strong>" + esc(t.title) + "</strong>? Tell us — it goes straight to the Pulse team.</p>" +
      '<div class="dip-fb-rate" role="group" aria-label="Was this helpful?">' +
      '<button type="button" class="dip-fb-face" data-v="Helpful 👍">👍 Helpful</button>' +
      '<button type="button" class="dip-fb-face" data-v="Confusing 😕">😕 Confusing</button>' +
      '<button type="button" class="dip-fb-face" data-v="Error 🐞">🐞 Found an error</button></div>' +
      '<textarea class="dip-fb-msg" rows="3" placeholder="Your message (optional)…"></textarea>' +
      '<input type="text" class="dip-fb-contact" placeholder="Name or email (optional)" autocomplete="off">' +
      '<button type="submit" class="btn btn-primary dip-fb-send">Send feedback →</button>' +
      '<p class="dip-fb-done" hidden>✅ Thank you! Your feedback was recorded.</p></form>';
  }
  function renderPrevNext(topics, idx, programId, subjectId) {
    function link(i, label, cls) {
      if (i < 0 || i >= topics.length) return '<span class="dip-nav-btn is-disabled">' + label + "</span>";
      var t = topics[i];
      return '<a class="dip-nav-btn ' + cls + '" href="academic-topic.html?program=' + encodeURIComponent(programId) +
        "&subject=" + encodeURIComponent(subjectId) + "&topic=" + encodeURIComponent(t.id) + '">' +
        '<span class="dip-nav-dir">' + (cls === "prev" ? "← Previous" : "Next →") + "</span>" +
        '<span class="dip-nav-title">' + esc(t.title) + "</span></a>";
    }
    return '<div class="dip-prevnext">' + link(idx - 1, "← Previous", "prev") + link(idx + 1, "Next →", "next") + "</div>";
  }

  /* ---------- wiring (shared) ---------- */
  function wireTabs(root) {
    var btns = [].slice.call(root.querySelectorAll(".dip-tab"));
    var panels = [].slice.call(root.querySelectorAll(".dip-panel"));
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.getAttribute("data-tab");
        btns.forEach(function (x) { var on = x === b; x.classList.toggle("is-active", on); x.setAttribute("aria-selected", on ? "true" : "false"); });
        panels.forEach(function (p) { p.classList.toggle("is-active", p.getAttribute("data-panel") === id); });
      });
    });
  }
  function normalize(s) { return String(s || "").trim().toLowerCase().replace(/\s+/g, " "); }
  function wireQuiz(root, programId, subjectId, topic) {
    var total = (topic.assessment || []).length; if (!total) return;
    var answered = {}, correctN = 0;
    function maybeComplete() {
      if (Object.keys(answered).length < total) return;
      var scoreEl = root.querySelector(".dip-score");
      var pct = Math.round(correctN / total * 100);
      if (scoreEl) { scoreEl.hidden = false; scoreEl.textContent = "Score: " + correctN + "/" + total + " (" + pct + "%) · ✓ topic marked studied"; }
      setStudied(programId, subjectId, topic.id, pct);
    }
    function mark(qEl, i, ok) {
      if (answered[i]) return;
      answered[i] = true; if (ok) correctN++;
      var rat = qEl.querySelector(".dip-rationale"); if (rat) rat.hidden = false;
      qEl.classList.add(ok ? "is-correct" : "is-wrong");
      maybeComplete();
    }
    root.querySelectorAll(".dip-q").forEach(function (qEl) {
      var i = parseInt(qEl.getAttribute("data-i"), 10), item = topic.assessment[i];
      if (item.type === "fill") {
        var input = qEl.querySelector(".dip-fill-input"), btn = qEl.querySelector(".dip-fill-btn");
        var check = function () {
          if (answered[i]) return;
          var val = normalize(input.value); if (!val) return;
          var ok = (item.accept || []).some(function (a) { return normalize(a) === val; });
          input.classList.add(ok ? "is-correct" : "is-wrong"); input.disabled = true; btn.disabled = true;
          if (!ok) { var note = document.createElement("span"); note.className = "dip-fill-ans"; note.textContent = "Answer: " + ((item.accept && item.accept[0]) || ""); btn.parentNode.appendChild(note); }
          mark(qEl, i, ok);
        };
        btn.addEventListener("click", check);
        input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); check(); } });
      } else {
        qEl.querySelectorAll(".dip-option").forEach(function (opt) {
          opt.addEventListener("click", function () {
            if (answered[i]) return;
            var chosen = parseInt(opt.getAttribute("data-i"), 10), ok = chosen === item.answer;
            qEl.querySelectorAll(".dip-option").forEach(function (o) {
              var oi = parseInt(o.getAttribute("data-i"), 10); o.disabled = true;
              if (oi === item.answer) o.classList.add("is-correct");
              if (oi === chosen && !ok) o.classList.add("is-wrong");
            });
            mark(qEl, i, ok);
          });
        });
      }
    });
  }
  function wireVideo(root) {
    var box = root.querySelector(".dip-video[data-id]"); if (!box) return;
    var btn = box.querySelector(".dip-video-play"); if (!btn) return;
    btn.addEventListener("click", function () {
      var id = box.getAttribute("data-id");
      var ifr = document.createElement("iframe");
      ifr.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      ifr.title = "Video lecture"; ifr.setAttribute("frameborder", "0");
      ifr.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      ifr.allowFullscreen = true; box.innerHTML = ""; box.appendChild(ifr);
    });
  }
  function wireFeedback(root, programId, subjectId, topic) {
    var form = root.querySelector(".dip-feedback"); if (!form) return;
    var chosen = "";
    form.querySelectorAll(".dip-fb-face").forEach(function (b) {
      b.addEventListener("click", function () { chosen = b.getAttribute("data-v"); form.querySelectorAll(".dip-fb-face").forEach(function (x) { x.classList.toggle("is-on", x === b); }); });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = (form.querySelector(".dip-fb-msg").value || "").trim();
      var contact = (form.querySelector(".dip-fb-contact").value || "").trim();
      if (!chosen && !msg) { form.querySelector(".dip-fb-msg").focus(); return; }
      try {
        var lk = "pulse:academic:feedback";
        var arr = JSON.parse(localStorage.getItem(lk) || "[]");
        arr.push({ program: programId, subject: subjectId, topic: topic.id, title: topic.title, rating: chosen, message: msg, contact: contact, ts: Date.now() });
        localStorage.setItem(lk, JSON.stringify(arr.slice(-100)));
      } catch (e2) {}
      var done = function () { form.querySelector(".dip-fb-done").hidden = false; form.querySelector(".dip-fb-send").disabled = true; };
      if (isLocal()) { done(); return; }
      var fd = new FormData();
      fd.append("access_key", WEB3FORMS_KEY);
      fd.append("subject", "Academic feedback: " + topic.title);
      fd.append("from_name", "Pulse for Nurses — Academic");
      fd.append("topic", programId + " / " + subjectId + " / " + topic.id);
      fd.append("rating", chosen || "—");
      fd.append("message", msg || "(no message)");
      fd.append("contact", contact || "(none)");
      fd.append("botcheck", "");
      fetch("https://api.web3forms.com/submit", { method: "POST", body: fd }).then(function () { done(); }).catch(function () { done(); });
    });
  }

  /* ---------- shared bits ---------- */
  function tabBtn(id, label, active) {
    return '<button type="button" class="dip-tab' + (active ? " is-active" : "") + '" role="tab" data-tab="' + id + '" aria-selected="' + (active ? "true" : "false") + '">' + label + "</button>";
  }
  function panel(id, inner, active) {
    return '<section class="dip-panel' + (active ? " is-active" : "") + '" data-panel="' + id + '">' + inner + "</section>";
  }
  function comingSoonPanel(name, note) {
    return '<div class="dip-soon-panel"><span class="dip-soon-emoji">🛠️</span><h2>Curriculum in development</h2>' +
      "<p>" + esc(note || ("Content for " + name + " is being written and will appear here soon.")) + "</p>" +
      '<a class="btn btn-secondary" href="academic.html">← All academic programs</a></div>';
  }
  function notFound(msg) {
    return '<div class="dip-soon-panel"><span class="dip-soon-emoji">🔍</span><h2>' + esc(msg) + "</h2>" +
      '<a class="btn btn-secondary" href="academic.html">← Academic Programs</a></div>';
  }

  window.AcademicUI = { initSection: initSection, initProgram: initProgram, initSubject: initSubject, initTopic: initTopic };
})();
