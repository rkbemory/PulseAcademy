/* Pulse loader.
   Runs after pulse-core.js + msn.js + post-basic.js + rn.js.
   1. Merges program-specific banks/tests into PulseCore.programs[id].
   2. Applies admin overrides from localStorage on top.
   3. Exposes a single global `Pulse` API used by every page. */
(function () {
  const LS_OVERRIDES = "pulse:admin:overrides";
  const LS_LAST      = "pulse:lastResult";
  const LS_HISTORY   = "pulse:history";
  const LS_PROFILE   = "pulse:profile";

  function readOverrides() {
    try { return JSON.parse(localStorage.getItem(LS_OVERRIDES) || "{}") || {}; }
    catch (e) { return {}; }
  }

  function deepCloneArray(arr) { return arr.map(function (x) { return Object.assign({}, x); }); }

  /* Apply overrides for one program. The override format:
       { "msn": {
           addQuestions: [...],     // appended to bank
           removeQuestionIds: [...],// pruned from bank
           addTests: [...],         // appended
           removeTestIds: [...],
           updateTests: [ { id, patch } ],
           addTopics: [...],
           removeTopicIds: [...]
       }}
  */
  function applyOverrides(programId, prog, overrides) {
    const ov = overrides[programId] || {};

    if (ov.removeQuestionIds && ov.removeQuestionIds.length) {
      prog.questionBank = prog.questionBank.filter(function (q) { return ov.removeQuestionIds.indexOf(q.id) === -1; });
    }
    if (ov.addQuestions && ov.addQuestions.length) {
      ov.addQuestions.forEach(function (q) {
        if (!prog.questionBank.find(function (x) { return x.id === q.id; })) prog.questionBank.push(q);
      });
    }

    if (ov.removeTopicIds && ov.removeTopicIds.length) {
      prog.topics = prog.topics.filter(function (t) { return ov.removeTopicIds.indexOf(t.id) === -1; });
    }
    if (ov.addTopics && ov.addTopics.length) {
      ov.addTopics.forEach(function (t) {
        if (!prog.topics.find(function (x) { return x.id === t.id; })) prog.topics.push(t);
      });
    }

    if (ov.removeTestIds && ov.removeTestIds.length) {
      prog.tests = prog.tests.filter(function (t) { return ov.removeTestIds.indexOf(t.id) === -1; });
    }
    if (ov.updateTests && ov.updateTests.length) {
      ov.updateTests.forEach(function (u) {
        const idx = prog.tests.findIndex(function (t) { return t.id === u.id; });
        if (idx !== -1) prog.tests[idx] = Object.assign({}, prog.tests[idx], u.patch);
      });
    }
    if (ov.addTests && ov.addTests.length) {
      ov.addTests.forEach(function (t) {
        if (!prog.tests.find(function (x) { return x.id === t.id; })) prog.tests.push(t);
      });
    }

    return prog;
  }

  /* Merge per-program data into PulseCore */
  function assemble() {
    const overrides = readOverrides();
    const out = {
      brand:     window.PulseCore.brand,
      bookstore: window.PulseCore.bookstore,
      subjects:  window.PulseCore.subjects,
      programs:  {}
    };
    Object.keys(window.PulseCore.programs).forEach(function (id) {
      const base = window.PulseCore.programs[id];
      const dynamic = (window.PulsePrograms && window.PulsePrograms[id]) || { topics: [], questionBank: [], tests: [] };
      const merged = Object.assign({}, base, {
        topics:       deepCloneArray(dynamic.topics),
        questionBank: deepCloneArray(dynamic.questionBank),
        tests:        deepCloneArray(dynamic.tests)
      });
      out.programs[id] = applyOverrides(id, merged, overrides);
    });
    return out;
  }

  /* Public API */
  window.Pulse = {
    data: assemble(),

    /* re-assemble (after admin edits) */
    refresh: function () { window.Pulse.data = assemble(); return window.Pulse.data; },

    /* convenience lookups */
    getProgram: function (id) { return window.Pulse.data.programs[id] || null; },
    getSubject: function (key) { return window.Pulse.data.subjects[key] || { name: key, color: "#6B2424", icon: "?" }; },

    findTest: function (programId, testId) {
      const prog = window.Pulse.getProgram(programId);
      if (!prog) return null;
      return prog.tests.find(function (t) { return t.id === testId; }) || null;
    },
    findQuestion: function (programId, qid) {
      const prog = window.Pulse.getProgram(programId);
      if (!prog) return null;
      return prog.questionBank.find(function (q) { return q.id === qid; }) || null;
    },
    findTopic: function (programId, topicId) {
      const prog = window.Pulse.getProgram(programId);
      if (!prog) return null;
      return prog.topics.find(function (t) { return t.id === topicId; }) || null;
    },

    /* Storage keys (used by quiz + admin) */
    LS_LAST: LS_LAST,
    LS_HISTORY: LS_HISTORY,
    LS_PROFILE: LS_PROFILE,
    LS_OVERRIDES: LS_OVERRIDES,

    /* Overrides API for admin panel */
    readOverrides: readOverrides,
    writeOverrides: function (next) {
      localStorage.setItem(LS_OVERRIDES, JSON.stringify(next || {}));
      window.Pulse.refresh();
    }
  };
})();
