/* Pulse for Nurses — generalized quiz engine.
   Drives tests.html (catalog), quiz.html (runner), and results.html.
   Reads `window.Pulse.data` populated by data/pulse-*.js.
   All routing is program-aware via the ?program= query param. */
(function () {
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }
  function el(tag, cls, html) { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c])); }
  function pct(n, d) { return d === 0 ? 0 : Math.round((n / d) * 100); }
  function fmtTime(seconds) { const m = Math.floor(seconds / 60); const s = seconds % 60; return m + ":" + (s < 10 ? "0" : "") + s; }
  function qs() { return new URLSearchParams(window.location.search); }
  function getProgramId() {
    const p = qs().get("program");
    return (p && window.Pulse.data.programs[p]) ? p : "msn";
  }

  /* ============================================================
     CATALOG — used on tests.html (unified catalog)
     and embedded blocks inside msn.html / post-basic.html / rn.html
     ============================================================ */
  function renderCatalog(targetSelector, programId) {
    const root = $(targetSelector || "#tests-catalog");
    if (!root) return;
    programId = programId || getProgramId();
    const prog = window.Pulse.getProgram(programId);
    if (!prog) { root.innerHTML = "<p>Program not found.</p>"; return; }

    /* Three sections: Topic check-ins, Model tests (30Q), Full model tests (100Q) */
    const topicCheckins = prog.tests.filter(function (t) { return t.type === "topic-checkin"; });
    const modelTests    = prog.tests.filter(function (t) { return t.type === "model"; });
    const fullTests     = prog.tests.filter(function (t) { return t.type === "full-model"; });

    let html = "";

    /* Topic check-ins */
    if (topicCheckins.length) {
      html += '<section class="catalog-section">' +
        '<h2 class="section-title">Topic Check-ins</h2>' +
        '<p class="section-lead">Short, concept-based quizzes (5–10 questions) tied to a topic discussion.</p>' +
        '<div class="test-grid">' +
          topicCheckins.map(function (t) {
            const topic = prog.topics.find(function (x) { return x.id === t.topicId; });
            const sub = window.Pulse.getSubject((topic && topic.subject) || "fundamental-nursing");
            const live = t.status === "live";
            const href = live
              ? "quiz.html?program=" + encodeURIComponent(programId) + "&test=" + encodeURIComponent(t.id)
              : "#";
            return '<a class="test-card ' + (live ? "is-live" : "is-locked") + '" href="' + href + '" style="--accent:' + sub.color + '">' +
              '<div class="test-card-badge" style="background:' + sub.color + '">' + escapeHtml(sub.icon) + '</div>' +
              '<div class="test-card-body">' +
                '<div class="test-card-eyebrow">' + escapeHtml(sub.name) + ' · Topic Check-in</div>' +
                '<h3 class="test-card-title">' + escapeHtml(t.title.replace(" — Check-in", "")) + '</h3>' +
                '<div class="test-card-meta">' +
                  '<span>' + t.intendedCount + ' questions</span>' +
                  '<span>~' + t.duration + ' min</span>' +
                '</div>' +
                (live ? '<span class="test-card-cta">Start →</span>' : '<span class="test-card-cta is-locked">Coming soon</span>') +
              '</div>' +
            '</a>';
          }).join("") +
        '</div>' +
      '</section>';
    }

    /* Model tests */
    if (modelTests.length) {
      html += '<section class="catalog-section">' +
        '<h2 class="section-title">' + prog.modelTestCount + ' Model Tests · ' + prog.modelTestQuestions + ' Questions Each</h2>' +
        '<p class="section-lead">Combined mixed-subject practice tests. Each test gives a subject-wise strength & weakness graph at the end.</p>' +
        '<div class="model-grid">' +
          modelTests.map(function (t) {
            const live = t.status === "live";
            const href = live
              ? "quiz.html?program=" + encodeURIComponent(programId) + "&test=" + encodeURIComponent(t.id)
              : "#";
            const num = t.id.match(/(\d+)$/);
            return '<a class="model-card ' + (live ? "is-live" : "is-locked") + '" href="' + href + '">' +
              '<div class="model-card-num">' + (num ? num[1] : "?") + '</div>' +
              '<div class="model-card-body">' +
                '<h3 class="model-card-title">' + escapeHtml(t.title) + '</h3>' +
                '<div class="model-card-meta">' + t.intendedCount + ' Qs · ' + t.duration + ' min · mixed subjects</div>' +
              '</div>' +
              (live ? '<span class="model-card-cta">Start →</span>' : '<span class="model-card-cta is-locked">Coming soon</span>') +
            '</a>';
          }).join("") +
        '</div>' +
      '</section>';
    }

    /* Adaptive exams (NCLEX) */
    const adaptiveTests = prog.tests.filter(function (t) { return t.type === "adaptive"; });
    if (adaptiveTests.length) {
      html += '<section class="catalog-section">' +
        '<h2 class="section-title">NCLEX-Style Adaptive Exams</h2>' +
        '<p class="section-lead">Questions adjust to your level as you go — get one right and the next gets harder. Ends with an estimated pass probability. One question at a time, no going back, just like the real test.</p>' +
        '<div class="model-grid">' +
          adaptiveTests.map(function (t) {
            const live = t.status === "live";
            const href = live
              ? "quiz.html?program=" + encodeURIComponent(programId) + "&test=" + encodeURIComponent(t.id)
              : "#";
            const num = t.id.match(/(\d+)$/);
            return '<a class="model-card model-card-full ' + (live ? "is-live" : "is-locked") + '" href="' + href + '">' +
              '<div class="model-card-num" style="background:linear-gradient(135deg,#7C6FD9,#2AA7C7)">' + (num ? num[1] : "?") + '</div>' +
              '<div class="model-card-body">' +
                '<h3 class="model-card-title">' + escapeHtml(t.title) + '</h3>' +
                '<div class="model-card-meta">' + t.minQ + '–' + t.maxQ + ' Qs · adaptive · pass estimate</div>' +
              '</div>' +
              (live ? '<span class="model-card-cta">Start →</span>' : '<span class="model-card-cta is-locked">Coming soon</span>') +
            '</a>';
          }).join("") +
        '</div>' +
      '</section>';
    }

    /* Full model tests (MSN only) */
    if (fullTests.length) {
      html += '<section class="catalog-section">' +
        '<h2 class="section-title">Full Model Tests · 100 Questions</h2>' +
        '<p class="section-lead">Exam-day rehearsal. Same length as the actual admission paper.</p>' +
        '<div class="model-grid">' +
          fullTests.map(function (t) {
            const live = t.status === "live";
            const href = live
              ? "quiz.html?program=" + encodeURIComponent(programId) + "&test=" + encodeURIComponent(t.id)
              : "#";
            const num = t.id.match(/(\d+)$/);
            return '<a class="model-card model-card-full ' + (live ? "is-live" : "is-locked") + '" href="' + href + '">' +
              '<div class="model-card-num" style="background:linear-gradient(135deg,#E89B2C,#C77E10)">' + (num ? num[1] : "?") + '</div>' +
              '<div class="model-card-body">' +
                '<h3 class="model-card-title">' + escapeHtml(t.title) + '</h3>' +
                '<div class="model-card-meta">' + t.intendedCount + ' Qs · ' + t.duration + ' min · full simulation</div>' +
              '</div>' +
              (live ? '<span class="model-card-cta">Start →</span>' : '<span class="model-card-cta is-locked">Coming soon</span>') +
            '</a>';
          }).join("") +
        '</div>' +
      '</section>';
    }

    root.innerHTML = html;
  }

  /* ============================================================
     TOPIC LIST — used on each program page to surface topic discussions
     ============================================================ */
  function renderTopicList(targetSelector, programId) {
    const root = $(targetSelector || "#topics-list");
    if (!root) return;
    programId = programId || getProgramId();
    const prog = window.Pulse.getProgram(programId);
    if (!prog || !prog.topics.length) { root.innerHTML = "<p>No topics yet.</p>"; return; }

    root.innerHTML = prog.topics.map(function (t) {
      const sub = window.Pulse.getSubject(t.subject);
      return '<a class="topic-card" href="topic.html?program=' + encodeURIComponent(programId) + '&topic=' + encodeURIComponent(t.id) + '">' +
        '<div class="topic-card-icon" style="background:' + sub.color + '">' + escapeHtml(sub.icon) + '</div>' +
        '<div class="topic-card-body">' +
          '<div class="topic-card-eyebrow">' + escapeHtml(sub.name) + ' · ' + t.readMinutes + ' min read · ' + t.checkIn.length + ' check-in Qs</div>' +
          '<h3 class="topic-card-title">' + escapeHtml(t.title) + '</h3>' +
          '<p class="topic-card-summary">' + escapeHtml(t.summary) + '</p>' +
          '<span class="topic-card-cta">Read & quiz yourself →</span>' +
        '</div>' +
      '</a>';
    }).join("");
  }

  /* ============================================================
     TOPIC DISCUSSION PAGE — content + check-in launcher
     ============================================================ */
  function renderTopicPage(targetSelector) {
    const root = $(targetSelector || "#topic-root");
    if (!root) return;
    const programId = getProgramId();
    const topicId = qs().get("topic");
    const prog = window.Pulse.getProgram(programId);
    const topic = window.Pulse.findTopic(programId, topicId);
    if (!topic) {
      root.innerHTML = '<div class="quiz-error"><h2>Topic not found</h2><a class="btn-primary" href="' + programId + '.html">Back to program</a></div>';
      return;
    }
    const sub = window.Pulse.getSubject(topic.subject);
    const checkInTestId = (prog.tests.find(function (t) { return t.type === "topic-checkin" && t.topicId === topic.id; }) || {}).id;

    root.innerHTML =
      '<div class="topic-hero" style="background:linear-gradient(135deg,' + sub.color + ' 0%, #1F1F1F 110%);">' +
        '<div class="topic-hero-inner">' +
          '<div class="breadcrumb"><a href="' + programId + '.html">' + escapeHtml(prog.name) + '</a> › <span>' + escapeHtml(topic.title) + '</span></div>' +
          '<span class="pill-tag" style="background:rgba(255,255,255,0.2)">' + escapeHtml(sub.name) + ' · ' + topic.readMinutes + ' min read</span>' +
          '<h1>' + escapeHtml(topic.title) + '</h1>' +
          '<p class="topic-hero-summary">' + escapeHtml(topic.summary) + '</p>' +
        '</div>' +
      '</div>' +

      '<article class="topic-article">' +
        topic.content.map(function (s) {
          return '<section class="topic-section">' +
            '<h2>' + escapeHtml(s.h) + '</h2>' +
            '<p>' + escapeHtml(s.p) + '</p>' +
          '</section>';
        }).join("") +

        '<section class="topic-cta">' +
          '<div class="topic-cta-card">' +
            '<div class="topic-cta-eyebrow">Lock it in</div>' +
            '<h2>' + topic.checkIn.length + '-question check-in</h2>' +
            '<p>Quick MCQs to make sure the concept stuck. Instant rationale on every question.</p>' +
            (checkInTestId
              ? '<a class="btn btn-primary" href="quiz.html?program=' + encodeURIComponent(programId) + '&test=' + encodeURIComponent(checkInTestId) + '">Start check-in →</a>'
              : '<span class="muted">Check-in not yet available.</span>') +
          '</div>' +
        '</section>' +
      '</article>';
  }

  /* ============================================================
     QUIZ RUNNER
     ============================================================ */
  let runner = null;

  function runQuiz() {
    const root = $("#quiz-root");
    if (!root) return;
    const programId = getProgramId();
    const testId = qs().get("test");
    const test = window.Pulse.findTest(programId, testId);
    if (!test) {
      root.innerHTML = '<div class="quiz-error"><h2>Test not found</h2><p>No quiz exists with that ID.</p><a class="btn-primary" href="' + programId + '.html">Back to ' + escapeHtml(window.Pulse.getProgram(programId).name) + '</a></div>';
      return;
    }
    if (test.adaptive) { runAdaptive(root, programId, test); return; }
    const questions = (test.questionIds || [])
      .map(function (qid) { return window.Pulse.findQuestion(programId, qid); })
      .filter(Boolean);
    if (!questions.length) {
      root.innerHTML = '<div class="quiz-error"><h2>This test isn\'t ready yet</h2><p>Questions will be added soon.</p><a class="btn-primary" href="tests.html?program=' + encodeURIComponent(programId) + '">Browse other tests</a></div>';
      return;
    }
    runner = {
      programId: programId,
      test: test,
      questions: questions,
      answers: new Array(questions.length).fill(null),
      flagged: new Array(questions.length).fill(false),
      currentIdx: 0,
      startedAt: Date.now()
    };
    renderQuizShell(root);
    renderQuestion();
    startTimer();
  }

  function renderQuizShell(root) {
    root.innerHTML =
      '<div class="quiz-topbar">' +
        '<div class="quiz-title">' + escapeHtml(runner.test.title) + '</div>' +
        '<div class="quiz-timer" id="quiz-timer">0:00</div>' +
        '<button class="quiz-submit-top" id="quiz-submit-top">Submit Test</button>' +
      '</div>' +
      '<div class="quiz-shell">' +
        '<aside class="quiz-palette" id="quiz-palette"></aside>' +
        '<main class="quiz-main">' +
          '<div id="quiz-question"></div>' +
          '<div class="quiz-nav">' +
            '<button class="btn-secondary" id="quiz-prev">← Previous</button>' +
            '<button class="btn-secondary" id="quiz-flag">⚑ Mark for review</button>' +
            '<button class="btn-primary" id="quiz-next">Next →</button>' +
          '</div>' +
        '</main>' +
      '</div>';

    $("#quiz-prev").addEventListener("click", function () { goTo(runner.currentIdx - 1); });
    $("#quiz-next").addEventListener("click", function () {
      if (runner.currentIdx === runner.questions.length - 1) submitQuiz();
      else goTo(runner.currentIdx + 1);
    });
    $("#quiz-flag").addEventListener("click", toggleFlag);
    $("#quiz-submit-top").addEventListener("click", function () {
      if (confirm("Submit your test now? You won't be able to change answers after submitting.")) submitQuiz();
    });
    renderPalette();
  }

  function renderPalette() {
    const pal = $("#quiz-palette");
    pal.innerHTML = '<h4>Questions</h4><div class="palette-grid" id="palette-grid"></div>' +
      '<div class="palette-legend">' +
        '<span><i class="dot dot-answered"></i>Answered</span>' +
        '<span><i class="dot dot-flagged"></i>Flagged</span>' +
        '<span><i class="dot dot-current"></i>Current</span>' +
      '</div>';
    const grid = $("#palette-grid");
    runner.questions.forEach(function (q, i) {
      const b = el("button", "pal-btn");
      b.textContent = (i + 1);
      b.addEventListener("click", function () { goTo(i); });
      grid.appendChild(b);
    });
    refreshPalette();
  }

  function refreshPalette() {
    $$("#palette-grid .pal-btn").forEach(function (b, i) {
      b.classList.toggle("is-answered", runner.answers[i] != null);
      b.classList.toggle("is-flagged", runner.flagged[i]);
      b.classList.toggle("is-current", i === runner.currentIdx);
    });
  }

  function renderQuestion() {
    const q = runner.questions[runner.currentIdx];
    const idx = runner.currentIdx;
    const total = runner.questions.length;
    const sub = window.Pulse.getSubject(q.subject);
    const selected = runner.answers[idx];

    const opts = q.options.map(function (opt, i) {
      return '<label class="quiz-option' + (selected === i ? " is-selected" : "") + '">' +
        '<input type="radio" name="q-' + escapeHtml(q.id) + '" value="' + i + '"' + (selected === i ? " checked" : "") + '>' +
        '<span class="opt-letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="opt-text">' + escapeHtml(opt) + '</span>' +
      '</label>';
    }).join("");

    $("#quiz-question").innerHTML =
      '<div class="quiz-q-header">' +
        '<span class="quiz-q-counter">Question ' + (idx + 1) + ' / ' + total + '</span>' +
        '<span class="quiz-q-subject" style="background:' + sub.color + '">' + escapeHtml(sub.name) + '</span>' +
      '</div>' +
      '<h2 class="quiz-q-stem">' + escapeHtml(q.stem) + '</h2>' +
      '<div class="quiz-options">' + opts + '</div>';

    $$("input[type=radio]", $("#quiz-question")).forEach(function (input) {
      input.addEventListener("change", function (e) {
        runner.answers[idx] = parseInt(e.target.value, 10);
        $$("#quiz-question .quiz-option").forEach(function (o) { o.classList.remove("is-selected"); });
        e.target.closest(".quiz-option").classList.add("is-selected");
        refreshPalette();
      });
    });

    $("#quiz-prev").disabled = idx === 0;
    $("#quiz-next").textContent = (idx === total - 1) ? "Submit Test ✓" : "Next →";
    $("#quiz-flag").classList.toggle("is-flagged", runner.flagged[idx]);
    refreshPalette();
  }

  function goTo(i) { if (i < 0 || i >= runner.questions.length) return; runner.currentIdx = i; renderQuestion(); }
  function toggleFlag() { runner.flagged[runner.currentIdx] = !runner.flagged[runner.currentIdx]; $("#quiz-flag").classList.toggle("is-flagged", runner.flagged[runner.currentIdx]); refreshPalette(); }
  function startTimer() {
    const timerEl = $("#quiz-timer"); if (!timerEl) return;
    setInterval(function () {
      const elapsed = Math.floor((Date.now() - runner.startedAt) / 1000);
      timerEl.textContent = fmtTime(elapsed);
    }, 1000);
  }

  function submitQuiz() {
    const perSubject = {};
    let correct = 0, attempted = 0;
    const detail = runner.questions.map(function (q, i) {
      const userAns = runner.answers[i];
      const isCorrect = userAns === q.answer;
      const wasAttempted = userAns != null;
      if (wasAttempted) attempted++;
      if (isCorrect) correct++;
      const subj = perSubject[q.subject] = perSubject[q.subject] || { correct: 0, total: 0, attempted: 0 };
      subj.total++;
      if (wasAttempted) subj.attempted++;
      if (isCorrect) subj.correct++;
      return { qid: q.id, subject: q.subject, userAns: userAns, correctIdx: q.answer, isCorrect: isCorrect, attempted: wasAttempted };
    });
    const elapsed = Math.floor((Date.now() - runner.startedAt) / 1000);
    const result = {
      programId: runner.programId,
      testId: runner.test.id,
      testTitle: runner.test.title,
      testType: runner.test.type || "model",
      total: runner.questions.length,
      correct: correct,
      attempted: attempted,
      score: pct(correct, runner.questions.length),
      timeSeconds: elapsed,
      perSubject: perSubject,
      detail: detail,
      submittedAt: Date.now()
    };
    try {
      localStorage.setItem(window.Pulse.LS_LAST, JSON.stringify(result));
      const hist = JSON.parse(localStorage.getItem(window.Pulse.LS_HISTORY) || "[]");
      hist.unshift({ programId: result.programId, testId: result.testId, testTitle: result.testTitle, score: result.score, correct: result.correct, total: result.total, submittedAt: result.submittedAt, synced: !!(window.PulseAuth && window.PulseAuth.user) });
      localStorage.setItem(window.Pulse.LS_HISTORY, JSON.stringify(hist.slice(0, 50)));
    } catch (e) {}
    if (window.PulseAuth && window.PulseAuth.enabled) {
      try { window.PulseAuth.saveResult(result); window.PulseAuth.noteQuizFinished(); } catch (e) {}
    }
    if (window.PulseReview) { try { window.PulseReview.addMissed(runner.questions, runner.answers, result.testTitle); } catch (e) {} }
    window.location.href = "results.html";
  }

  /* ============================================================
     ADAPTIVE EXAM RUNNER (NCLEX-style approximation)
     Sequential, one question at a time, no going back.
     Difficulty rises after a correct answer and falls after a wrong
     one; the exam ends once the result is clear (min/max question
     bounds) and reports an estimated pass probability.
     ============================================================ */
  let arun = null;

  function runAdaptive(root, programId, test) {
    const pool = (test.pool || [])
      .map(function (qid) { return window.Pulse.findQuestion(programId, qid); })
      .filter(Boolean);
    if (pool.length < (test.minQ || 30)) {
      root.innerHTML = '<div class="quiz-error"><h2>This exam isn\'t ready yet</h2><a class="btn-primary" href="tests.html?program=' + encodeURIComponent(programId) + '">Browse other tests</a></div>';
      return;
    }
    const byDiff = { 1: [], 2: [], 3: [] };
    pool.forEach(function (q) { (byDiff[q.diff] || byDiff[2]).push(q); });

    arun = {
      programId: programId,
      test: test,
      byDiff: byDiff,
      usedIds: {},
      targetDiff: 2,     /* start at medium */
      ability: 0,        /* running ability estimate */
      asked: [],         /* questions shown, in order */
      answers: [],       /* selected option index per asked */
      correct: [],       /* boolean per asked */
      minQ: test.minQ || 30,
      maxQ: test.maxQ || 60,
      startedAt: Date.now()
    };
    renderAdaptiveShell(root);
    nextAdaptiveQuestion();
  }

  function renderAdaptiveShell(root) {
    root.innerHTML =
      '<div class="quiz-topbar">' +
        '<div class="quiz-title">' + escapeHtml(arun.test.title) + '</div>' +
        '<div class="quiz-timer" id="quiz-timer">0:00</div>' +
        '<button class="quiz-submit-top" id="quiz-end">End Exam</button>' +
      '</div>' +
      '<div class="quiz-shell quiz-shell-adaptive">' +
        '<main class="quiz-main quiz-main-wide">' +
          '<div class="adaptive-status" id="adaptive-status"></div>' +
          '<div id="quiz-question"></div>' +
          '<div class="quiz-nav">' +
            '<span class="adaptive-note">Adaptive · you can\'t return to a previous question</span>' +
            '<button class="btn-primary" id="quiz-next" disabled>Next →</button>' +
          '</div>' +
        '</main>' +
      '</div>';
    $("#quiz-next").addEventListener("click", submitAdaptiveAnswer);
    $("#quiz-end").addEventListener("click", function () {
      if (arun.asked.length >= arun.minQ) {
        if (confirm("End the exam now and see your estimated result?")) finishAdaptive();
      } else {
        alert("Answer at least " + arun.minQ + " questions for a reliable estimate. You're at " + arun.asked.length + ".");
      }
    });
    startAdaptiveTimer();
  }

  function pickAdaptiveQuestion() {
    /* Prefer the target difficulty, then step outward to find an unused item. */
    const order = arun.targetDiff === 1 ? [1, 2, 3] : arun.targetDiff === 3 ? [3, 2, 1] : [2, 1, 3];
    for (let d = 0; d < order.length; d++) {
      const bucket = arun.byDiff[order[d]] || [];
      for (let j = 0; j < bucket.length; j++) {
        if (!arun.usedIds[bucket[j].id]) return bucket[j];
      }
    }
    return null;
  }

  function nextAdaptiveQuestion() {
    const q = pickAdaptiveQuestion();
    if (!q) { finishAdaptive(); return; }
    arun.usedIds[q.id] = true;
    arun.asked.push(q);
    arun.answers.push(null);
    arun.correct.push(null);
    renderAdaptiveQuestion();
  }

  function renderAdaptiveQuestion() {
    const idx = arun.asked.length - 1;
    const q = arun.asked[idx];
    const sub = window.Pulse.getSubject(q.subject);
    const diffLabel = q.diff === 1 ? "Foundational" : q.diff === 3 ? "Advanced" : "Intermediate";

    $("#adaptive-status").innerHTML =
      '<span class="adaptive-count">Question ' + arun.asked.length + '</span>' +
      '<span class="adaptive-diff adaptive-diff-' + q.diff + '">' + diffLabel + '</span>' +
      '<div class="adaptive-progress"><div class="adaptive-progress-fill" style="width:' +
        Math.min(100, Math.round((arun.asked.length / arun.maxQ) * 100)) + '%"></div></div>';

    const opts = q.options.map(function (opt, i) {
      return '<label class="quiz-option">' +
        '<input type="radio" name="aq-' + escapeHtml(q.id) + '" value="' + i + '">' +
        '<span class="opt-letter">' + String.fromCharCode(65 + i) + '</span>' +
        '<span class="opt-text">' + escapeHtml(opt) + '</span>' +
      '</label>';
    }).join("");

    $("#quiz-question").innerHTML =
      '<div class="quiz-q-header">' +
        '<span class="quiz-q-subject" style="background:' + sub.color + '">' + escapeHtml(sub.name) + '</span>' +
      '</div>' +
      '<h2 class="quiz-q-stem">' + escapeHtml(q.stem) + '</h2>' +
      '<div class="quiz-options">' + opts + '</div>';

    $("#quiz-next").disabled = true;
    $$("input[type=radio]", $("#quiz-question")).forEach(function (input) {
      input.addEventListener("change", function (e) {
        arun.answers[idx] = parseInt(e.target.value, 10);
        $$("#quiz-question .quiz-option").forEach(function (o) { o.classList.remove("is-selected"); });
        e.target.closest(".quiz-option").classList.add("is-selected");
        $("#quiz-next").disabled = false;
      });
    });
  }

  function submitAdaptiveAnswer() {
    const idx = arun.asked.length - 1;
    if (arun.answers[idx] == null) return;
    const q = arun.asked[idx];
    const isCorrect = arun.answers[idx] === q.answer;
    arun.correct[idx] = isCorrect;

    /* Adjust ability and target difficulty. Harder items move ability more. */
    const weight = q.diff === 3 ? 1.4 : q.diff === 1 ? 0.7 : 1.0;
    arun.ability += (isCorrect ? weight : -weight);
    arun.targetDiff = arun.ability >= 1 ? 3 : arun.ability <= -1 ? 1 : 2;

    /* Stop rule: after the minimum, end when the result is clearly decided. */
    const answered = arun.asked.length;
    if (answered >= arun.maxQ) { finishAdaptive(); return; }
    if (answered >= arun.minQ && Math.abs(arun.ability) >= 3) { finishAdaptive(); return; }
    nextAdaptiveQuestion();
  }

  function finishAdaptive() {
    const perSubject = {};
    let correct = 0, attempted = 0;
    let weightedGot = 0, weightedTotal = 0;
    const detail = arun.asked.map(function (q, i) {
      const userAns = arun.answers[i];
      const wasAttempted = userAns != null;
      const isCorrect = userAns === q.answer;
      if (wasAttempted) attempted++;
      if (isCorrect) correct++;
      const w = q.diff || 2;
      weightedTotal += w;
      if (isCorrect) weightedGot += w;
      const subj = perSubject[q.subject] = perSubject[q.subject] || { correct: 0, total: 0, attempted: 0 };
      subj.total++;
      if (wasAttempted) subj.attempted++;
      if (isCorrect) subj.correct++;
      return { qid: q.id, subject: q.subject, userAns: userAns, correctIdx: q.answer, isCorrect: isCorrect, attempted: wasAttempted };
    });
    const passProbability = weightedTotal ? Math.max(1, Math.min(99, Math.round((weightedGot / weightedTotal) * 100))) : 0;
    const elapsed = Math.floor((Date.now() - arun.startedAt) / 1000);
    const result = {
      programId: arun.programId,
      testId: arun.test.id,
      testTitle: arun.test.title,
      testType: "adaptive",
      adaptive: true,
      passProbability: passProbability,
      total: arun.asked.length,
      correct: correct,
      attempted: attempted,
      score: pct(correct, arun.asked.length),
      timeSeconds: elapsed,
      perSubject: perSubject,
      detail: detail,
      submittedAt: Date.now()
    };
    try {
      localStorage.setItem(window.Pulse.LS_LAST, JSON.stringify(result));
      const hist = JSON.parse(localStorage.getItem(window.Pulse.LS_HISTORY) || "[]");
      hist.unshift({ programId: result.programId, testId: result.testId, testTitle: result.testTitle, score: result.score, correct: result.correct, total: result.total, submittedAt: result.submittedAt, synced: !!(window.PulseAuth && window.PulseAuth.user) });
      localStorage.setItem(window.Pulse.LS_HISTORY, JSON.stringify(hist.slice(0, 50)));
    } catch (e) {}
    if (window.PulseAuth && window.PulseAuth.enabled) {
      try { window.PulseAuth.saveResult(result); window.PulseAuth.noteQuizFinished(); } catch (e) {}
    }
    if (window.PulseReview) { try { window.PulseReview.addMissed(arun.asked, arun.answers, result.testTitle); } catch (e) {} }
    window.location.href = "results.html";
  }

  function startAdaptiveTimer() {
    const timerEl = $("#quiz-timer"); if (!timerEl) return;
    setInterval(function () {
      const elapsed = Math.floor((Date.now() - arun.startedAt) / 1000);
      timerEl.textContent = fmtTime(elapsed);
    }, 1000);
  }

  /* ============================================================
     RESULTS PAGE
     ============================================================ */
  function renderResults() {
    const root = $("#results-root");
    if (!root) return;
    let result;
    try { result = JSON.parse(localStorage.getItem(window.Pulse.LS_LAST) || "null"); }
    catch (e) { result = null; }
    if (!result) {
      root.innerHTML = '<div class="quiz-error"><h2>No recent result</h2><p>Take a test first to see your performance breakdown.</p><a class="btn-primary" href="index.html">Browse programs</a></div>';
      return;
    }

    const prog = window.Pulse.getProgram(result.programId) || { name: "Pulse" };
    const subjectRows = Object.keys(result.perSubject)
      .filter(function (k) { return result.perSubject[k].total > 0; })
      .map(function (k) {
        const s = result.perSubject[k];
        const meta = window.Pulse.getSubject(k);
        const p = pct(s.correct, s.total);
        const band = p >= 75 ? "strong" : p >= 50 ? "medium" : "weak";
        return { key: k, name: meta.name, color: meta.color, correct: s.correct, total: s.total, pct: p, band: band };
      })
      .sort(function (a, b) { return b.pct - a.pct; });

    const strengths = subjectRows.filter(function (r) { return r.band === "strong"; });
    const weaknesses = subjectRows.filter(function (r) { return r.band === "weak"; });

    const overallBand = result.score >= 75 ? "strong" : result.score >= 50 ? "medium" : "weak";
    const adaptiveBanner = (result.adaptive && typeof result.passProbability === "number")
      ? '<div class="adaptive-result-banner adaptive-band-' + (result.passProbability >= 65 ? "pass" : result.passProbability >= 50 ? "borderline" : "fail") + '">' +
          '<div class="adaptive-result-prob">' + result.passProbability + '%</div>' +
          '<div class="adaptive-result-label">Estimated pass probability<br><span>across ' + result.total + ' adaptive questions</span></div>' +
          '<p class="adaptive-result-note">' +
            (result.passProbability >= 65
              ? "You're tracking like a likely pass. Keep practicing harder items to build a safety margin."
              : result.passProbability >= 50
              ? "You're on the borderline. Focus on your weak subjects below and retake to push above 65%."
              : "Below the comfort zone. Work through the topic discussions for the weak subjects, then retake.") +
          ' This is a practice estimate, not an official NCLEX prediction.</p>' +
        '</div>'
      : '';
    const verdict = result.score >= 75 ? "Excellent — you're tracking well above the cutoff."
                  : result.score >= 60 ? "Solid — sharpen your weak areas to push into the top band."
                  : result.score >= 40 ? "Improving — focus revision on the weak subjects below."
                                       : "Foundational gaps — read the topic discussions and retake at the same level before moving on.";

    const subjectBars = subjectRows.map(function (r) {
      return '<div class="subj-row">' +
        '<div class="subj-row-head">' +
          '<span class="subj-name"><i class="subj-dot" style="background:' + r.color + '"></i>' + escapeHtml(r.name) + '</span>' +
          '<span class="subj-score">' + r.correct + ' / ' + r.total + ' · ' + r.pct + '%</span>' +
        '</div>' +
        '<div class="subj-bar"><div class="subj-fill subj-fill-' + r.band + '" style="width:' + r.pct + '%;background:' + r.color + '"></div></div>' +
      '</div>';
    }).join("");

    const reviewItems = result.detail.map(function (d, i) {
      const q = window.Pulse.findQuestion(result.programId, d.qid);
      if (!q) return "";
      const meta = window.Pulse.getSubject(q.subject);
      const userText = d.userAns != null ? q.options[d.userAns] : "<em>Not answered</em>";
      const status = d.isCorrect ? "is-correct" : (d.attempted ? "is-wrong" : "is-skipped");
      const statusLabel = d.isCorrect ? "✓ Correct" : (d.attempted ? "✗ Wrong" : "— Skipped");
      return '<details class="review-item ' + status + '">' +
        '<summary>' +
          '<span class="review-num">Q' + (i + 1) + '</span>' +
          '<span class="review-subject" style="background:' + meta.color + '">' + escapeHtml(meta.name) + '</span>' +
          '<span class="review-status">' + statusLabel + '</span>' +
        '</summary>' +
        '<div class="review-body">' +
          '<p class="review-stem"><strong>Q.</strong> ' + escapeHtml(q.stem) + '</p>' +
          '<p class="review-your">Your answer: ' + (typeof userText === "string" ? escapeHtml(userText) : userText) + '</p>' +
          '<p class="review-correct">Correct answer: ' + escapeHtml(q.options[q.answer]) + '</p>' +
          (q.explanation ? '<p class="review-expl"><strong>Explanation.</strong> ' + escapeHtml(q.explanation) + '</p>' : '') +
        '</div>' +
      '</details>';
    }).join("");

    root.innerHTML =
      '<section class="result-hero">' +
        '<div class="result-hero-inner">' +
          '<div class="result-eyebrow">' + escapeHtml(prog.name) + ' Result · ' + escapeHtml(result.testTitle) + '</div>' +
          '<div class="result-score-ring score-' + overallBand + '" style="--score-deg:' + (result.score * 3.6) + 'deg">' +
            '<div class="result-score-num">' + result.score + '<span>%</span></div>' +
            '<div class="result-score-frac">' + result.correct + ' / ' + result.total + ' correct</div>' +
          '</div>' +
          '<div class="result-meta">' +
            '<span><strong>' + result.attempted + '</strong> attempted</span>' +
            '<span><strong>' + (result.total - result.attempted) + '</strong> skipped</span>' +
            '<span><strong>' + fmtTime(result.timeSeconds) + '</strong> time</span>' +
          '</div>' +
          '<p class="result-verdict">' + escapeHtml(verdict) + '</p>' +
          adaptiveBanner +
        '</div>' +
      '</section>' +

      '<section class="result-section">' +
        '<h2>Subject-wise performance</h2>' +
        '<p class="muted">Strength &amp; weakness breakdown across nursing subjects.</p>' +
        '<div class="subj-list">' + subjectBars + '</div>' +
      '</section>' +

      '<section class="result-section result-callouts">' +
        '<div class="callout callout-strong">' +
          '<h3>💪 Strengths (≥75%)</h3>' +
          (strengths.length
            ? '<ul>' + strengths.map(function (r) { return '<li>' + escapeHtml(r.name) + ' — ' + r.pct + '%</li>'; }).join("") + '</ul>'
            : '<p class="muted">No subject crossed the 75% strength threshold yet.</p>') +
        '</div>' +
        '<div class="callout callout-weak">' +
          '<h3>📌 Focus areas (<50%)</h3>' +
          (weaknesses.length
            ? '<ul>' + weaknesses.map(function (r) { return '<li>' + escapeHtml(r.name) + ' — ' + r.pct + '% — revise the topic discussion + retake</li>'; }).join("") + '</ul>'
            : '<p class="muted">No subject below 50%. Keep momentum.</p>') +
        '</div>' +
      '</section>' +

      '<section class="result-section">' +
        '<h2>Question-by-question review</h2>' +
        '<p class="muted">Click any question to expand the rationale.</p>' +
        '<div class="review-list">' + reviewItems + '</div>' +
      '</section>' +

      '<section class="result-actions">' +
        '<a class="btn-primary" href="quiz.html?program=' + encodeURIComponent(result.programId) + '&test=' + encodeURIComponent(result.testId) + '">Retake this test</a>' +
        '<a class="btn-secondary" href="tests.html?program=' + encodeURIComponent(result.programId) + '">Try another test</a>' +
        '<a class="btn-secondary" href="' + encodeURIComponent(result.programId) + '.html">Back to ' + escapeHtml(prog.name) + '</a>' +
      '</section>';
  }

  /* ============================================================
     EXPORT
     ============================================================ */
  window.PulseQuiz = {
    renderCatalog: renderCatalog,
    renderTopicList: renderTopicList,
    renderTopicPage: renderTopicPage,
    runQuiz: runQuiz,
    renderResults: renderResults,
    getProgramId: getProgramId
  };
})();
