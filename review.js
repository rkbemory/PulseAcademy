/* Pulse for Nurses — Smart Review (spaced repetition).
   A lightweight, offline-first flashcard system that resurfaces the MCQs a
   nurse got wrong (auto-captured from quizzes) plus starter decks seeded from
   the existing question banks, scheduled with an SM-2-lite algorithm.

   - window.PulseReview API is ALWAYS defined (so quiz-engine can call
     addMissed() safely on any page that loads this file).
   - When a #review-root element is present, the study interface renders.
   - Storage is local (localStorage). Cross-device sync can be layered later. */
(function () {
  "use strict";

  var LS = "pulse:review:v1";
  var NEW_PER_DAY = 20;          // pace: at most 20 brand-new cards enter per day
  var AGAIN_DELAY = 60 * 1000;   // "Again" re-queues the card ~1 min later (same session)
  var DAY = 86400 * 1000;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c];
    });
  }
  function todayStr() { return new Date().toISOString().slice(0, 10); }

  function load() {
    var d;
    try { d = JSON.parse(localStorage.getItem(LS) || "{}"); } catch (e) { d = {}; }
    if (!d || typeof d !== "object") d = {};
    if (!d.cards || typeof d.cards !== "object") d.cards = {};
    if (!d.day || d.day.date !== todayStr()) d.day = { date: todayStr(), newCount: 0, reviewed: 0 };
    if (!Array.isArray(d.seeded)) d.seeded = [];
    return d;
  }
  var revMirrorTimer = null;
  // Signed in → mirror the review deck to the account (debounced) so it follows
  // the user across devices. syncProgress adopts the newest copy (newest-wins).
  function mirrorReview(d) {
    if (!(window.PulseAuth && window.PulseAuth.user && window.PulseAuth.saveProgress)) return;
    if (revMirrorTimer) clearTimeout(revMirrorTimer);
    revMirrorTimer = setTimeout(function () { try { window.PulseAuth.saveProgress("review", "v1", d); } catch (e) {} }, 2500);
  }
  function save(d) {
    d.updatedAt = Date.now();
    try { localStorage.setItem(LS, JSON.stringify(d)); } catch (e) {}
    mirrorReview(d);
  }

  function newCard(q, source, now) {
    return {
      front: q.stem, options: (q.options || []).slice(), answer: q.answer,
      explanation: q.explanation || q.rationale || "", subject: q.subject || "",
      source: source || "", ease: 2.3, interval: 0, reps: 0, lapses: 0,
      due: now, added: now
    };
  }

  /* ---- SM-2-lite scheduler ---- */
  function schedule(card, grade, now) {
    if (grade === 0) {                       // Again
      card.reps = 0; card.interval = 0;
      card.ease = Math.max(1.3, card.ease - 0.2);
      card.lapses++;
      card.due = now + AGAIN_DELAY;
      return card;
    }
    if (grade === 1) {                       // Hard
      card.interval = card.interval <= 0 ? 1 : Math.max(1, Math.round(card.interval * 1.2));
      card.ease = Math.max(1.3, card.ease - 0.15);
    } else if (grade === 2) {                // Good
      card.interval = card.reps === 0 ? 1 : (card.reps === 1 ? 3 : Math.max(1, Math.round(card.interval * card.ease)));
    } else {                                 // Easy
      card.interval = card.reps === 0 ? 2 : Math.max(2, Math.round((card.interval || 1) * card.ease * 1.3));
      card.ease = card.ease + 0.15;
    }
    card.reps++;
    card.due = now + card.interval * DAY;
    return card;
  }

  /* Human hint for the next interval a grade would produce (shown on buttons). */
  function intervalHint(card, grade) {
    var c = JSON.parse(JSON.stringify(card));
    schedule(c, grade, Date.now());
    if (grade === 0) return "<1m";
    var d = c.interval;
    if (d < 1) return "<1d";
    if (d === 1) return "1d";
    if (d < 30) return d + "d";
    if (d < 365) return Math.round(d / 30) + "mo";
    return Math.round(d / 365) + "y";
  }

  function isNew(card) { return card.reps === 0 && card.lapses === 0 && (card.interval || 0) === 0; }

  /* ---- Public API ---- */
  var API = {
    /* Snapshot the wrong (attempted-and-incorrect) questions from a finished quiz. */
    addMissed: function (questions, answers, source) {
      if (!Array.isArray(questions)) return 0;
      var d = load(), now = Date.now(), added = 0;
      questions.forEach(function (q, i) {
        var ans = answers ? answers[i] : null;
        if (ans == null || ans === q.answer) return;     // skipped or correct → skip
        var id = "q:" + (q.id || (source || "x") + "-" + i);
        if (d.cards[id]) return;                          // already tracked
        d.cards[id] = newCard(q, source || "Quiz", now);
        added++;
      });
      if (added) save(d);
      return added;
    },
    /* Add an arbitrary list of question-shaped objects as cards. */
    addCards: function (list, source) {
      if (!Array.isArray(list)) return 0;
      var d = load(), now = Date.now(), added = 0;
      list.forEach(function (q) {
        if (!q || !q.stem || !q.options) return;
        var id = "q:" + (q.id || esc(q.stem).slice(0, 24));
        if (d.cards[id]) return;
        d.cards[id] = newCard(q, source || "", now);
        added++;
      });
      if (added) save(d);
      return added;
    },
    /* Seed a starter deck from a program's question bank (needs window.Pulse loaded). */
    seedProgram: function (programId) {
      if (!(window.Pulse && window.Pulse.getProgram)) return 0;
      var prog = window.Pulse.getProgram(programId);
      if (!prog || !prog.questionBank) return 0;
      var n = API.addCards(prog.questionBank, (prog.name || programId));
      var d = load();
      if (d.seeded.indexOf(programId) === -1) { d.seeded.push(programId); save(d); }
      return n;
    },
    seededPrograms: function () { return load().seeded.slice(); },
    /* Counts for the dashboard tile and page header. */
    counts: function () {
      var d = load(), now = Date.now(), total = 0, dueRev = 0, news = 0;
      Object.keys(d.cards).forEach(function (k) {
        total++;
        var c = d.cards[k];
        if (isNew(c)) { news++; return; }
        if (c.due <= now) dueRev++;
      });
      var newAllowed = Math.max(0, NEW_PER_DAY - (d.day.newCount || 0));
      return { total: total, due: dueRev + Math.min(newAllowed, news), reviews: dueRev, newAvail: Math.min(newAllowed, news), newTotal: news, reviewedToday: d.day.reviewed || 0 };
    },
    NEW_PER_DAY: NEW_PER_DAY
  };
  window.PulseReview = API;

  /* ============================================================
     STUDY INTERFACE — only when #review-root is on the page
     ============================================================ */
  function boot() {
    var root = document.getElementById("review-root");
    if (!root) return;
    var d = load();
    var now = Date.now();

    // Build the session queue: due reviews (shuffled) + a capped batch of new cards.
    var ids = Object.keys(d.cards);
    var reviews = [], news = [];
    ids.forEach(function (id) {
      var c = d.cards[id];
      if (isNew(c)) news.push(id);
      else if (c.due <= now) reviews.push(id);
    });
    // light shuffle of reviews (deterministic-ish; no Math.random dependency needed)
    reviews.sort(function (a, b) { return d.cards[a].due - d.cards[b].due; });
    var newAllowed = Math.max(0, NEW_PER_DAY - (d.day.newCount || 0));
    var queue = reviews.concat(news.slice(0, newAllowed));
    var sessionTotal = queue.length;
    var doneThisSession = 0;

    if (ids.length === 0) { renderEmpty(root, true); return; }
    if (queue.length === 0) { renderDone(root, d, true); return; }

    function persist() { save(d); }
    function subjLabel(c) {
      if (window.Pulse && window.Pulse.getSubject && c.subject) {
        var s = window.Pulse.getSubject(c.subject);
        if (s && s.name) return s.name;
      }
      return c.source || "Review";
    }

    function renderCard() {
      if (queue.length === 0) { renderDone(root, d, false, doneThisSession); return; }
      var id = queue[0], c = d.cards[id];
      var opts = c.options.map(function (o, i) {
        return '<li class="rev-opt" data-i="' + i + '"><span class="rev-opt-key">' + String.fromCharCode(65 + i) + "</span>" + esc(o) + "</li>";
      }).join("");
      var progressPct = sessionTotal ? Math.round((doneThisSession / sessionTotal) * 100) : 0;
      root.innerHTML =
        '<div class="rev-topbar"><a class="rev-back" href="dashboard.html">← Dashboard</a>' +
          '<span class="rev-count">' + (doneThisSession + 1) + " / " + sessionTotal + (isNew(c) ? ' · <span class="rev-newtag">new</span>' : "") + "</span></div>" +
        '<div class="rev-progress"><span style="width:' + progressPct + '%"></span></div>' +
        '<div class="rev-card">' +
          '<div class="rev-subj">' + esc(subjLabel(c)) + "</div>" +
          '<p class="rev-q">' + esc(c.front) + "</p>" +
          '<ul class="rev-opts">' + opts + "</ul>" +
          '<div class="rev-answer" hidden></div>' +
          '<div class="rev-actions">' +
            '<button type="button" class="btn btn-primary rev-show">Show answer <span class="rev-kbd">Space</span></button>' +
          "</div>" +
        "</div>";

      var card = root.querySelector(".rev-card");
      var answerBox = root.querySelector(".rev-answer");
      var showBtn = root.querySelector(".rev-show");

      function reveal() {
        card.querySelectorAll(".rev-opt").forEach(function (li) {
          var i = parseInt(li.getAttribute("data-i"), 10);
          if (i === c.answer) li.classList.add("is-correct");
        });
        answerBox.hidden = false;
        answerBox.innerHTML =
          '<p class="rev-ans-line">✅ Correct: <strong>' + String.fromCharCode(65 + c.answer) + ".</strong> " + esc(c.options[c.answer]) + "</p>" +
          (c.explanation ? '<p class="rev-expl">' + esc(c.explanation) + "</p>" : "");
        var grades = [["Again", 0, "rev-g0"], ["Hard", 1, "rev-g1"], ["Good", 2, "rev-g2"], ["Easy", 3, "rev-g3"]];
        root.querySelector(".rev-actions").innerHTML =
          '<div class="rev-grades">' + grades.map(function (g) {
            return '<button type="button" class="rev-grade ' + g[2] + '" data-grade="' + g[1] + '">' +
              g[0] + '<span class="rev-int">' + intervalHint(c, g[1]) + "</span></button>";
          }).join("") + "</div>";
        root.querySelectorAll(".rev-grade").forEach(function (b) {
          b.addEventListener("click", function () { rate(parseInt(b.getAttribute("data-grade"), 10)); });
        });
      }

      function rate(grade) {
        var wasNew = isNew(c);
        schedule(c, grade, Date.now());
        if (wasNew) d.day.newCount = (d.day.newCount || 0) + 1;
        d.day.reviewed = (d.day.reviewed || 0) + 1;
        queue.shift();
        if (grade === 0) queue.push(id);       // Again → back of the session queue
        else doneThisSession++;
        persist();
        renderCard();
      }

      showBtn.addEventListener("click", reveal);
      root._revKey = function (e) {
        if (answerBox.hidden && (e.key === " " || e.key === "Enter")) { e.preventDefault(); reveal(); }
        else if (!answerBox.hidden && /^[1-4]$/.test(e.key)) { e.preventDefault(); rate(parseInt(e.key, 10) - 1); }
      };
    }

    document.addEventListener("keydown", function (e) { if (root._revKey) root._revKey(e); });
    renderCard();
  }

  function renderDone(root, d, freshLoad, count) {
    var c = API.counts();
    root.innerHTML =
      '<div class="rev-done">' +
        '<div class="rev-done-ic">🎉</div>' +
        "<h2>All caught up!</h2>" +
        "<p>" + (freshLoad ? "You have no cards due right now." : "You reviewed <strong>" + (count || 0) + "</strong> card" + ((count || 0) === 1 ? "" : "s") + " this session.") + " Come back tomorrow to keep them fresh.</p>" +
        '<div class="rev-done-stats"><span><strong>' + c.total + "</strong> cards</span><span><strong>" + c.reviewedToday + "</strong> reviewed today</span></div>" +
        addDeckPanel() +
        '<a class="btn btn-secondary" href="dashboard.html">Back to dashboard</a>' +
      "</div>";
    wireAddDecks(root);
  }

  function renderEmpty(root) {
    root.innerHTML =
      '<div class="rev-done">' +
        '<div class="rev-done-ic">🧠</div>' +
        "<h2>Smart Review is empty — let's fill it</h2>" +
        "<p>Smart Review resurfaces questions right before you forget them. Two ways to add cards:</p>" +
        '<ul class="rev-how"><li>📝 <strong>Take any quiz</strong> — every question you get wrong is automatically added here.</li>' +
        "<li>⚡ <strong>Add a starter deck</strong> below to begin straight away.</li></ul>" +
        addDeckPanel() +
      "</div>";
    wireAddDecks(root);
  }

  function addDeckPanel() {
    var progs = [["msn", "🩺 MSN"], ["post-basic", "📘 Post Basic"], ["rn", "🎓 BNMC RN"], ["nclex", "🌎 NCLEX-RN"]];
    var seeded = API.seededPrograms();
    var btns = progs.map(function (p) {
      var done = seeded.indexOf(p[0]) !== -1;
      var n = (window.Pulse && window.Pulse.getProgram(p[0]) && window.Pulse.getProgram(p[0]).questionBank) ? window.Pulse.getProgram(p[0]).questionBank.length : 0;
      return '<button type="button" class="rev-deck" data-prog="' + p[0] + '"' + (done ? " disabled" : "") + ">" +
        p[1] + (done ? " ✓ added" : (n ? ' <span class="rev-deck-n">' + n + " cards</span>" : "")) + "</button>";
    }).join("");
    return '<div class="rev-add"><p class="rev-add-h">Add a starter deck</p><div class="rev-decks">' + btns + "</div></div>";
  }
  function wireAddDecks(root) {
    root.querySelectorAll(".rev-deck").forEach(function (b) {
      b.addEventListener("click", function () {
        var prog = b.getAttribute("data-prog");
        b.disabled = true; b.textContent = "Adding…";
        var n = API.seedProgram(prog);
        b.textContent = n ? "✓ " + n + " cards added" : "Unavailable";
        setTimeout(function () { location.reload(); }, 550);
      });
    });
  }

  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
