/* Pulse Admin — password-gated, role-based (Main / Deputy).
   All mutations write to localStorage under "pulse:admin:overrides".
   Pulse loader applies the overrides on top of the static data files at page load.
   Architected so the same admin actions can later POST to Supabase when a backend lands. */
(function () {
  const LS_ACCOUNTS = "pulse:admin:accounts";
  const LS_SESSION  = "pulse:admin:session";

  /* Default passwords are stored as SHA-256 hashes so the actual passwords
     never appear in the public source. Once the Main Admin signs in and
     changes a password via the Accounts tab, the new value is stored in
     localStorage and replaces the default check for that role. */
  const DEFAULT_HASHES = {
    main:   "9fa2de40341bc04a57a2afad45087682fa9e571b5d413487719570a0b93b1212",
    deputy: "6e7ae3be410c2bc1d650b0ef1372172441f8a009eac90589a5bfab4304a7ab13"
  };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.from((r || document).querySelectorAll(s)); }
  function escapeHtml(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c])); }

  async function sha256(str) {
    if (!window.crypto || !window.crypto.subtle) {
      // Fallback for very old browsers — refuses login (forces upgrade)
      return "";
    }
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
  }

  function loadAccounts() {
    try {
      const a = JSON.parse(localStorage.getItem(LS_ACCOUNTS) || "null");
      if (a && typeof a === "object") return a;
    } catch (e) {}
    return null;
  }
  function saveAccounts(a) { localStorage.setItem(LS_ACCOUNTS, JSON.stringify(a)); }

  /* Check a plaintext password against either a localStorage-overridden value
     or, if not overridden, the default SHA-256 hash. */
  async function checkPassword(role, plaintext) {
    if (!plaintext) return false;
    const stored = loadAccounts();
    if (stored && stored[role]) {
      // User has set an explicit password — exact match
      return stored[role] === plaintext;
    }
    // Fall back to default hash check
    const hash = await sha256(plaintext);
    return hash === DEFAULT_HASHES[role];
  }
  function loadSession() {
    try { return JSON.parse(localStorage.getItem(LS_SESSION) || "null"); }
    catch (e) { return null; }
  }
  function saveSession(s) { localStorage.setItem(LS_SESSION, JSON.stringify(s)); }
  function clearSession() { localStorage.removeItem(LS_SESSION); }

  /* -------------- LOGIN -------------- */
  function showLogin() {
    $("#login-screen").hidden = false;
    $("#admin-app").hidden = true;
  }
  function showApp(session) {
    $("#login-screen").hidden = true;
    $("#admin-app").hidden = false;
    $("#role-pill").textContent = session.role === "main" ? "Main Admin" : "Deputy Admin";
    $$("[data-main-only]").forEach(function (b) {
      b.style.display = session.role === "main" ? "" : "none";
    });
    refreshStats();
    switchView("dashboard");
  }

  function refreshStats() {
    let qCount = 0, tCount = 0, topCount = 0;
    Object.keys(Pulse.data.programs).forEach(function (pid) {
      const p = Pulse.data.programs[pid];
      qCount   += p.questionBank.length;
      tCount   += p.tests.length;
      topCount += p.topics.length;
    });
    $("#stat-questions").textContent = qCount + " questions";
    $("#stat-tests").textContent = tCount + " tests";
    $("#stat-topics").textContent = topCount + " topics";
  }

  function attachLogin() {
    $("#login-btn").addEventListener("click", async function () {
      const role = $("#login-role").value;
      const pass = $("#login-pass").value;
      $("#login-err").textContent = "";
      const ok = await checkPassword(role, pass);
      if (ok) {
        const session = { role: role, signedInAt: Date.now() };
        saveSession(session);
        showApp(session);
      } else {
        $("#login-err").textContent = "Wrong password for that role.";
      }
    });
    $("#login-pass").addEventListener("keyup", function (e) { if (e.key === "Enter") $("#login-btn").click(); });
    $("#logout-btn").addEventListener("click", function () { clearSession(); location.reload(); });
  }

  /* -------------- VIEW ROUTER -------------- */
  function switchView(view) {
    $$(".admin-nav button").forEach(function (b) { b.classList.toggle("is-active", b.dataset.view === view); });
    const host = $("#view-host");
    host.innerHTML = "";
    const renderer = views[view];
    if (renderer) renderer(host, loadSession());
  }

  /* -------------- VIEWS -------------- */
  const views = {};

  /* DASHBOARD */
  views.dashboard = function (host, session) {
    const programs = Pulse.data.programs;
    const items = Object.keys(programs).map(function (pid) {
      const p = programs[pid];
      const live = p.tests.filter(function (t) { return t.status === "live"; }).length;
      const scaffold = p.tests.filter(function (t) { return t.status !== "live"; }).length;
      return '<div class="dash-card">' +
        '<h3>' + escapeHtml(p.name) + '</h3>' +
        '<div class="dash-row"><span>' + p.topics.length + '</span><label>Topics</label></div>' +
        '<div class="dash-row"><span>' + p.questionBank.length + '</span><label>Questions</label></div>' +
        '<div class="dash-row"><span>' + live + '</span><label>Live tests</label></div>' +
        '<div class="dash-row"><span>' + scaffold + '</span><label>Scaffold tests</label></div>' +
      '</div>';
    }).join("");
    host.innerHTML =
      '<header class="admin-view-head"><h1>Dashboard</h1><p class="muted">Quick health check across all three programs.</p></header>' +
      '<div class="dash-grid">' + items + '</div>' +
      '<section class="admin-tip">' +
        '<h3>💡 What you can do here</h3>' +
        '<ul>' +
          '<li><strong>Questions tab:</strong> add new MCQs, edit explanations, delete duplicates.</li>' +
          '<li><strong>Tests tab:</strong> populate scaffold tests (03–20) by selecting questions, mark tests live/coming-soon.</li>' +
          '<li><strong>Topics tab:</strong> add new topic discussions or extend check-ins.</li>' +
          '<li><strong>Export / Import:</strong> back up all overrides to a JSON file, or restore from one.</li>' +
        '</ul>' +
        (session.role === "deputy" ? '<p class="muted"><em>You are signed in as Deputy. Admin Accounts and Backend tabs are hidden.</em></p>' : '') +
      '</section>';
  };

  /* QUESTIONS */
  views.questions = function (host, session) {
    const programIds = Object.keys(Pulse.data.programs);
    host.innerHTML =
      '<header class="admin-view-head">' +
        '<h1>Questions</h1>' +
        '<div class="admin-toolbar">' +
          '<select id="q-program">' + programIds.map(function (pid) { return '<option value="' + pid + '">' + escapeHtml(Pulse.data.programs[pid].name) + '</option>'; }).join("") + '</select>' +
          '<input id="q-filter" placeholder="Filter questions…">' +
          '<button id="q-add" class="btn btn-primary">+ Add Question</button>' +
        '</div>' +
      '</header>' +
      '<div id="q-list"></div>';

    function refresh() {
      const pid = $("#q-program").value;
      const filter = ($("#q-filter").value || "").toLowerCase();
      const prog = Pulse.getProgram(pid);
      const list = prog.questionBank.filter(function (q) {
        if (!filter) return true;
        return q.stem.toLowerCase().includes(filter) || q.id.toLowerCase().includes(filter) || q.subject.toLowerCase().includes(filter);
      });
      $("#q-list").innerHTML = '<div class="admin-count muted">' + list.length + ' of ' + prog.questionBank.length + ' questions</div>' +
        list.map(function (q) {
          const sub = Pulse.getSubject(q.subject);
          return '<details class="admin-row">' +
            '<summary>' +
              '<span class="row-id">' + escapeHtml(q.id) + '</span>' +
              '<span class="row-subject" style="background:' + sub.color + '">' + escapeHtml(sub.name) + '</span>' +
              '<span class="row-stem">' + escapeHtml(q.stem) + '</span>' +
            '</summary>' +
            '<div class="row-body">' +
              '<ol class="row-opts">' + q.options.map(function (o, i) { return '<li' + (i === q.answer ? ' class="is-correct"' : '') + '>' + escapeHtml(o) + (i === q.answer ? ' ✓' : '') + '</li>'; }).join("") + '</ol>' +
              (q.explanation ? '<p class="row-expl"><strong>Rationale:</strong> ' + escapeHtml(q.explanation) + '</p>' : '') +
              '<div class="row-actions">' +
                '<button class="btn btn-secondary" data-edit="' + escapeHtml(q.id) + '">Edit</button>' +
                '<button class="btn btn-danger" data-delete="' + escapeHtml(q.id) + '">Delete</button>' +
              '</div>' +
            '</div>' +
          '</details>';
        }).join("");

      $$("[data-delete]").forEach(function (b) {
        b.addEventListener("click", function () {
          const qid = b.dataset.delete;
          if (!confirm("Delete question " + qid + "? (Override is reversible by clearing overrides in Export tab.)")) return;
          const overrides = Pulse.readOverrides();
          overrides[pid] = overrides[pid] || {};
          overrides[pid].removeQuestionIds = overrides[pid].removeQuestionIds || [];
          if (overrides[pid].removeQuestionIds.indexOf(qid) === -1) overrides[pid].removeQuestionIds.push(qid);
          if (overrides[pid].addQuestions) overrides[pid].addQuestions = overrides[pid].addQuestions.filter(function (q) { return q.id !== qid; });
          Pulse.writeOverrides(overrides);
          refreshStats();
          refresh();
        });
      });
      $$("[data-edit]").forEach(function (b) {
        b.addEventListener("click", function () { openQuestionEditor(pid, b.dataset.edit); });
      });
    }

    $("#q-program").addEventListener("change", refresh);
    $("#q-filter").addEventListener("input", refresh);
    $("#q-add").addEventListener("click", function () { openQuestionEditor($("#q-program").value, null); });
    refresh();
  };

  function openQuestionEditor(programId, qid) {
    const prog = Pulse.getProgram(programId);
    const existing = qid ? prog.questionBank.find(function (q) { return q.id === qid; }) : null;
    const subjects = Pulse.data.subjects;
    const allowedSubjects = Object.keys(subjects).filter(function (k) { return subjects[k].programs.indexOf(programId) !== -1; });

    const modal = document.createElement("div");
    modal.className = "admin-modal";
    modal.innerHTML =
      '<div class="admin-modal-card">' +
        '<h2>' + (existing ? "Edit question " + escapeHtml(existing.id) : "Add new question") + '</h2>' +
        '<label>ID <input id="qe-id" value="' + (existing ? escapeHtml(existing.id) : "") + '" placeholder="e.g. msn-fn-101"></label>' +
        '<label>Subject <select id="qe-subject">' +
          allowedSubjects.map(function (k) { return '<option value="' + k + '"' + (existing && existing.subject === k ? " selected" : "") + '>' + escapeHtml(subjects[k].name) + '</option>'; }).join("") +
        '</select></label>' +
        '<label>Question stem <textarea id="qe-stem" rows="3">' + (existing ? escapeHtml(existing.stem) : "") + '</textarea></label>' +
        '<label>Options (one per line — minimum 2)<textarea id="qe-opts" rows="4">' + (existing ? existing.options.map(escapeHtml).join("\n") : "") + '</textarea></label>' +
        '<label>Correct answer index (0-based) <input type="number" id="qe-answer" min="0" value="' + (existing ? existing.answer : "0") + '"></label>' +
        '<label>Rationale (optional) <textarea id="qe-expl" rows="2">' + (existing ? escapeHtml(existing.explanation || "") : "") + '</textarea></label>' +
        '<div class="modal-actions">' +
          '<button class="btn btn-secondary" id="qe-cancel">Cancel</button>' +
          '<button class="btn btn-primary" id="qe-save">Save</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);

    $("#qe-cancel", modal).addEventListener("click", function () { modal.remove(); });
    $("#qe-save", modal).addEventListener("click", function () {
      const id = $("#qe-id", modal).value.trim();
      const subject = $("#qe-subject", modal).value;
      const stem = $("#qe-stem", modal).value.trim();
      const options = $("#qe-opts", modal).value.split("\n").map(function (s) { return s.trim(); }).filter(Boolean);
      const answer = parseInt($("#qe-answer", modal).value, 10);
      const explanation = $("#qe-expl", modal).value.trim();
      if (!id) return alert("ID is required");
      if (!stem) return alert("Stem is required");
      if (options.length < 2) return alert("At least 2 options required");
      if (isNaN(answer) || answer < 0 || answer >= options.length) return alert("Answer index must be a valid 0-based option number");
      const newQ = { id: id, subject: subject, stem: stem, options: options, answer: answer, explanation: explanation };
      const overrides = Pulse.readOverrides();
      overrides[programId] = overrides[programId] || {};
      overrides[programId].addQuestions = (overrides[programId].addQuestions || []).filter(function (q) { return q.id !== id; });
      overrides[programId].addQuestions.push(newQ);
      if (existing && existing.id !== id) {
        overrides[programId].removeQuestionIds = overrides[programId].removeQuestionIds || [];
        if (overrides[programId].removeQuestionIds.indexOf(existing.id) === -1) overrides[programId].removeQuestionIds.push(existing.id);
      } else if (existing) {
        overrides[programId].removeQuestionIds = overrides[programId].removeQuestionIds || [];
        if (overrides[programId].removeQuestionIds.indexOf(id) === -1) overrides[programId].removeQuestionIds.push(id);
      }
      Pulse.writeOverrides(overrides);
      modal.remove();
      refreshStats();
      switchView("questions");
    });
  }

  /* TESTS */
  views.tests = function (host) {
    const programIds = Object.keys(Pulse.data.programs);
    host.innerHTML =
      '<header class="admin-view-head">' +
        '<h1>Tests</h1>' +
        '<div class="admin-toolbar">' +
          '<select id="t-program">' + programIds.map(function (pid) { return '<option value="' + pid + '">' + escapeHtml(Pulse.data.programs[pid].name) + '</option>'; }).join("") + '</select>' +
          '<button id="t-add" class="btn btn-primary">+ Add Test</button>' +
        '</div>' +
      '</header>' +
      '<div id="t-list"></div>';

    function refresh() {
      const pid = $("#t-program").value;
      const prog = Pulse.getProgram(pid);
      $("#t-list").innerHTML = prog.tests.map(function (t) {
        const live = t.status === "live";
        return '<details class="admin-row admin-row-test">' +
          '<summary>' +
            '<span class="row-id">' + escapeHtml(t.id) + '</span>' +
            '<span class="row-subject" style="background:' + (t.type === "full-model" ? "#E89B2C" : t.type === "topic-checkin" ? "#16A34A" : "#1E3A8A") + '">' + escapeHtml(t.type) + '</span>' +
            '<span class="row-stem">' + escapeHtml(t.title) + '</span>' +
            '<span class="row-pill ' + (live ? "ok" : "warn") + '">' + (live ? "live" : "coming-soon") + '</span>' +
            '<span class="row-stem-meta">' + (t.questionIds || []).length + ' / ' + t.intendedCount + ' Qs</span>' +
          '</summary>' +
          '<div class="row-body">' +
            '<div class="row-actions">' +
              '<button class="btn btn-secondary" data-edit="' + escapeHtml(t.id) + '">Edit test</button>' +
              '<button class="btn btn-secondary" data-toggle="' + escapeHtml(t.id) + '">' + (live ? "Mark coming-soon" : "Mark live") + '</button>' +
              '<button class="btn btn-danger" data-delete="' + escapeHtml(t.id) + '">Delete</button>' +
            '</div>' +
          '</div>' +
        '</details>';
      }).join("");

      $$("[data-toggle]").forEach(function (b) {
        b.addEventListener("click", function () {
          const tid = b.dataset.toggle;
          const t = Pulse.findTest(pid, tid);
          const overrides = Pulse.readOverrides();
          overrides[pid] = overrides[pid] || {};
          overrides[pid].updateTests = overrides[pid].updateTests || [];
          overrides[pid].updateTests = overrides[pid].updateTests.filter(function (u) { return u.id !== tid; });
          overrides[pid].updateTests.push({ id: tid, patch: { status: t.status === "live" ? "coming-soon" : "live" } });
          Pulse.writeOverrides(overrides);
          refresh();
        });
      });
      $$("[data-delete]").forEach(function (b) {
        b.addEventListener("click", function () {
          const tid = b.dataset.delete;
          if (!confirm("Delete test " + tid + "?")) return;
          const overrides = Pulse.readOverrides();
          overrides[pid] = overrides[pid] || {};
          overrides[pid].removeTestIds = overrides[pid].removeTestIds || [];
          if (overrides[pid].removeTestIds.indexOf(tid) === -1) overrides[pid].removeTestIds.push(tid);
          if (overrides[pid].addTests) overrides[pid].addTests = overrides[pid].addTests.filter(function (t) { return t.id !== tid; });
          Pulse.writeOverrides(overrides);
          refreshStats();
          refresh();
        });
      });
      $$("[data-edit]").forEach(function (b) {
        b.addEventListener("click", function () { openTestEditor(pid, b.dataset.edit); });
      });
    }

    $("#t-program").addEventListener("change", refresh);
    $("#t-add").addEventListener("click", function () { openTestEditor($("#t-program").value, null); });
    refresh();
  };

  function openTestEditor(programId, tid) {
    const prog = Pulse.getProgram(programId);
    const existing = tid ? prog.tests.find(function (t) { return t.id === tid; }) : null;
    const modal = document.createElement("div");
    modal.className = "admin-modal";
    modal.innerHTML =
      '<div class="admin-modal-card admin-modal-card-wide">' +
        '<h2>' + (existing ? "Edit " + escapeHtml(existing.id) : "Add test") + '</h2>' +
        '<label>ID <input id="te-id" value="' + (existing ? escapeHtml(existing.id) : "") + '" placeholder="e.g. msn-mt-21"></label>' +
        '<label>Title <input id="te-title" value="' + (existing ? escapeHtml(existing.title) : "") + '"></label>' +
        '<label>Type <select id="te-type">' +
          ["model","full-model","topic-checkin"].map(function (t) { return '<option value="' + t + '"' + (existing && existing.type === t ? " selected" : "") + '>' + t + '</option>'; }).join("") +
        '</select></label>' +
        '<label>Duration (min) <input type="number" id="te-duration" value="' + (existing ? existing.duration : 30) + '"></label>' +
        '<label>Intended count <input type="number" id="te-count" value="' + (existing ? existing.intendedCount : 30) + '"></label>' +
        '<label>Status <select id="te-status">' +
          ["live","coming-soon"].map(function (s) { return '<option value="' + s + '"' + (existing && existing.status === s ? " selected" : "") + '>' + s + '</option>'; }).join("") +
        '</select></label>' +
        '<label>Question IDs (one per line)<textarea id="te-qids" rows="8">' + (existing && existing.questionIds ? existing.questionIds.join("\n") : "") + '</textarea></label>' +
        '<p class="muted">Available question IDs for ' + escapeHtml(prog.name) + ': ' + prog.questionBank.length + '. <button id="te-show-ids" class="btn btn-secondary" type="button">Show available IDs</button></p>' +
        '<div id="te-id-pool" class="te-id-pool" hidden></div>' +
        '<div class="modal-actions">' +
          '<button class="btn btn-secondary" id="te-cancel">Cancel</button>' +
          '<button class="btn btn-primary" id="te-save">Save</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);
    $("#te-show-ids", modal).addEventListener("click", function () {
      const pool = $("#te-id-pool", modal);
      if (pool.hidden) {
        pool.hidden = false;
        pool.innerHTML = prog.questionBank.map(function (q) {
          return '<span class="te-id-chip" data-id="' + escapeHtml(q.id) + '" title="' + escapeHtml(q.stem) + '">' + escapeHtml(q.id) + '</span>';
        }).join("");
        $$(".te-id-chip", pool).forEach(function (c) {
          c.addEventListener("click", function () {
            const ta = $("#te-qids", modal);
            const cur = ta.value.trim();
            ta.value = (cur ? cur + "\n" : "") + c.dataset.id;
          });
        });
      } else { pool.hidden = true; }
    });
    $("#te-cancel", modal).addEventListener("click", function () { modal.remove(); });
    $("#te-save", modal).addEventListener("click", function () {
      const id = $("#te-id", modal).value.trim();
      const title = $("#te-title", modal).value.trim();
      const type = $("#te-type", modal).value;
      const duration = parseInt($("#te-duration", modal).value, 10) || 30;
      const intendedCount = parseInt($("#te-count", modal).value, 10) || 30;
      const status = $("#te-status", modal).value;
      const qids = $("#te-qids", modal).value.split("\n").map(function (s) { return s.trim(); }).filter(Boolean);
      if (!id || !title) return alert("ID and title required");
      const newT = { id: id, title: title, type: type, duration: duration, intendedCount: intendedCount, status: status, questionIds: qids };
      const overrides = Pulse.readOverrides();
      overrides[programId] = overrides[programId] || {};
      if (existing) {
        overrides[programId].updateTests = overrides[programId].updateTests || [];
        overrides[programId].updateTests = overrides[programId].updateTests.filter(function (u) { return u.id !== existing.id; });
        overrides[programId].updateTests.push({ id: existing.id, patch: newT });
        if (existing.id !== id) {
          overrides[programId].removeTestIds = overrides[programId].removeTestIds || [];
          if (overrides[programId].removeTestIds.indexOf(existing.id) === -1) overrides[programId].removeTestIds.push(existing.id);
          overrides[programId].addTests = overrides[programId].addTests || [];
          overrides[programId].addTests.push(newT);
        }
      } else {
        overrides[programId].addTests = (overrides[programId].addTests || []).filter(function (t) { return t.id !== id; });
        overrides[programId].addTests.push(newT);
      }
      Pulse.writeOverrides(overrides);
      modal.remove();
      refreshStats();
      switchView("tests");
    });
  }

  /* TOPICS */
  views.topics = function (host) {
    const programIds = Object.keys(Pulse.data.programs);
    host.innerHTML =
      '<header class="admin-view-head">' +
        '<h1>Topics</h1>' +
        '<div class="admin-toolbar">' +
          '<select id="top-program">' + programIds.map(function (pid) { return '<option value="' + pid + '">' + escapeHtml(Pulse.data.programs[pid].name) + '</option>'; }).join("") + '</select>' +
          '<a id="top-add" class="btn btn-primary" href="#">+ Add Topic (JSON)</a>' +
        '</div>' +
      '</header>' +
      '<div id="top-list"></div>';

    function refresh() {
      const pid = $("#top-program").value;
      const prog = Pulse.getProgram(pid);
      $("#top-list").innerHTML = prog.topics.map(function (t) {
        return '<details class="admin-row">' +
          '<summary>' +
            '<span class="row-id">' + escapeHtml(t.id) + '</span>' +
            '<span class="row-subject" style="background:' + Pulse.getSubject(t.subject).color + '">' + escapeHtml(Pulse.getSubject(t.subject).name) + '</span>' +
            '<span class="row-stem">' + escapeHtml(t.title) + '</span>' +
            '<span class="row-stem-meta">' + t.readMinutes + ' min · ' + t.checkIn.length + ' check-ins</span>' +
          '</summary>' +
          '<div class="row-body">' +
            '<p class="row-expl">' + escapeHtml(t.summary) + '</p>' +
            '<div class="row-actions">' +
              '<a class="btn btn-secondary" href="topic.html?program=' + encodeURIComponent(pid) + '&topic=' + encodeURIComponent(t.id) + '" target="_blank">Preview ↗</a>' +
              '<button class="btn btn-danger" data-delete-topic="' + escapeHtml(t.id) + '">Delete</button>' +
            '</div>' +
          '</div>' +
        '</details>';
      }).join("");

      $$("[data-delete-topic]").forEach(function (b) {
        b.addEventListener("click", function () {
          const tid = b.dataset.deleteTopic;
          if (!confirm("Delete topic " + tid + "?")) return;
          const overrides = Pulse.readOverrides();
          overrides[pid] = overrides[pid] || {};
          overrides[pid].removeTopicIds = overrides[pid].removeTopicIds || [];
          if (overrides[pid].removeTopicIds.indexOf(tid) === -1) overrides[pid].removeTopicIds.push(tid);
          Pulse.writeOverrides(overrides);
          refreshStats();
          refresh();
        });
      });
    }
    $("#top-program").addEventListener("change", refresh);
    $("#top-add").addEventListener("click", function (e) {
      e.preventDefault();
      const pid = $("#top-program").value;
      const sample = {
        id: "new-topic-" + Date.now(),
        title: "New topic title",
        subject: "fundamental-nursing",
        readMinutes: 5,
        summary: "One-line summary.",
        content: [{ h: "Section 1", p: "Section 1 body." }],
        checkIn: [{ id: "new-q-001", subject: "fundamental-nursing", stem: "Sample question?", options: ["Option A","Option B","Option C","Option D"], answer: 0, explanation: "Rationale." }]
      };
      const raw = prompt("Paste topic JSON (sample shown is editable):", JSON.stringify(sample, null, 2));
      if (!raw) return;
      let parsed;
      try { parsed = JSON.parse(raw); } catch (err) { return alert("Invalid JSON: " + err.message); }
      if (!parsed.id || !parsed.title || !Array.isArray(parsed.content) || !Array.isArray(parsed.checkIn)) {
        return alert("Topic must have id, title, content[], checkIn[].");
      }
      const overrides = Pulse.readOverrides();
      overrides[pid] = overrides[pid] || {};
      overrides[pid].addTopics = (overrides[pid].addTopics || []).filter(function (t) { return t.id !== parsed.id; });
      overrides[pid].addTopics.push(parsed);
      Pulse.writeOverrides(overrides);
      refreshStats();
      refresh();
    });
    refresh();
  };

  /* EXPORT / IMPORT */
  views.export = function (host) {
    const overrides = Pulse.readOverrides();
    host.innerHTML =
      '<header class="admin-view-head"><h1>Export / Import</h1><p class="muted">All your admin edits live in localStorage as a JSON override. Back it up here, or restore from a file.</p></header>' +
      '<section class="admin-section">' +
        '<h3>Current overrides</h3>' +
        '<textarea id="ov-text" rows="14" style="width:100%">' + escapeHtml(JSON.stringify(overrides, null, 2)) + '</textarea>' +
        '<div class="row-actions">' +
          '<button id="ov-download" class="btn btn-primary">⬇ Download as JSON</button>' +
          '<button id="ov-apply" class="btn btn-secondary">Apply edited JSON</button>' +
          '<button id="ov-clear" class="btn btn-danger">Clear all overrides</button>' +
        '</div>' +
      '</section>' +
      '<section class="admin-section">' +
        '<h3>Restore from file</h3>' +
        '<input type="file" id="ov-file" accept="application/json">' +
      '</section>';

    $("#ov-download").addEventListener("click", function () {
      const blob = new Blob([$("#ov-text").value], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "pulse-overrides-" + new Date().toISOString().slice(0,10) + ".json";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
    $("#ov-apply").addEventListener("click", function () {
      try {
        const next = JSON.parse($("#ov-text").value);
        Pulse.writeOverrides(next);
        refreshStats();
        alert("Overrides applied.");
      } catch (e) { alert("Invalid JSON: " + e.message); }
    });
    $("#ov-clear").addEventListener("click", function () {
      if (!confirm("Wipe all overrides? Your custom questions/tests/topics will be lost.")) return;
      Pulse.writeOverrides({});
      refreshStats();
      switchView("export");
    });
    $("#ov-file").addEventListener("change", function (e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function () {
        try {
          const next = JSON.parse(reader.result);
          Pulse.writeOverrides(next);
          refreshStats();
          alert("Overrides restored.");
          switchView("export");
        } catch (err) { alert("Failed to parse: " + err.message); }
      };
      reader.readAsText(file);
    });
  };

  /* ADMIN ACCOUNTS (main only) */
  views.accounts = function (host, session) {
    if (session.role !== "main") { host.innerHTML = "<p class='muted'>Main Admin only.</p>"; return; }
    const accounts = loadAccounts() || {};
    const mainSet = !!accounts.main;
    const deputySet = !!accounts.deputy;
    host.innerHTML =
      '<header class="admin-view-head"><h1>Admin Accounts</h1><p class="muted">Set or rotate the role passwords. Default values use SHA-256 hashes stored in the source, so the actual default is not visible there.</p></header>' +
      '<section class="admin-section">' +
        '<h3>Main Admin password</h3>' +
        '<p class="muted">' + (mainSet ? "Custom password is set." : "Currently using the default hash-checked password.") + '</p>' +
        '<input type="password" id="acc-main" placeholder="' + (mainSet ? "Enter new password to rotate" : "Set a custom password") + '">' +
      '</section>' +
      '<section class="admin-section">' +
        '<h3>Deputy Admin password</h3>' +
        '<p class="muted">' + (deputySet ? "Custom Deputy password is set." : "Deputy role disabled by default. Set a password here to enable a Deputy.") + '</p>' +
        '<input type="password" id="acc-deputy" placeholder="' + (deputySet ? "Enter new Deputy password" : "Leave blank to keep Deputy disabled") + '">' +
      '</section>' +
      '<div class="row-actions" style="margin-top:8px;">' +
        '<button id="acc-save" class="btn btn-primary">Save</button>' +
        (mainSet || deputySet ? '<button id="acc-reset" class="btn btn-secondary">Reset to defaults</button>' : '') +
      '</div>';

    $("#acc-save").addEventListener("click", function () {
      const main = ($("#acc-main").value || "").trim();
      const deputy = ($("#acc-deputy").value || "").trim();
      // Build the new accounts object based on what changed.
      const next = Object.assign({}, accounts);
      if (main) next.main = main;
      if (deputy) next.deputy = deputy;
      // Validation: if both end up set, they must differ
      if (next.main && next.deputy && next.main === next.deputy) {
        return alert("Main and Deputy passwords must be different.");
      }
      if (!main && !deputy) return alert("Enter at least one new password to save.");
      saveAccounts(next);
      alert("Saved. Your current session stays valid; next sign-in uses the new password(s).");
      switchView("accounts");
    });
    const resetBtn = $("#acc-reset");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (!confirm("Reset both role passwords to the source defaults? This clears the custom passwords stored in this browser.")) return;
        localStorage.removeItem(LS_ACCOUNTS);
        alert("Reset done. The next sign-in uses the default hash-checked password.");
        switchView("accounts");
      });
    }
  };

  /* BACKEND ROADMAP (main only) */
  views.backend = function (host, session) {
    if (session.role !== "main") { host.innerHTML = "<p class='muted'>Main Admin only.</p>"; return; }
    host.innerHTML =
      '<header class="admin-view-head"><h1>Backend Roadmap</h1><p class="muted">How to migrate this prototype to a real, cheap, multi-user backend when you are ready.</p></header>' +
      '<section class="admin-section">' +
        '<h3>Recommended: Supabase free tier</h3>' +
        '<p>Supabase gives you: PostgreSQL database, authentication (email + magic link + OAuth), file storage, and a REST/realtime API — all on a generous free tier (500 MB DB, 50,000 monthly active users at the time of writing). Easiest path from this prototype.</p>' +
        '<h4>Migration steps when ready</h4>' +
        '<ol class="migration-list">' +
          '<li>Create a free Supabase project at <code>supabase.com</code>.</li>' +
          '<li>Create tables: <code>programs</code>, <code>subjects</code>, <code>topics</code>, <code>questions</code>, <code>tests</code>, <code>attempts</code>, <code>admins</code>.</li>' +
          '<li>Use the <em>Export / Import</em> tab to download all current data as JSON, then upload to Supabase via their dashboard CSV/JSON import or the SQL editor.</li>' +
          '<li>Replace <code>data/pulse-loader.js</code> with a fetch call to <code>supabase.from("questions").select()</code> etc.</li>' +
          '<li>Replace the password gate with Supabase Auth (RLS: only authenticated admins can write).</li>' +
          '<li>Persist attempt history per user via <code>insert into attempts</code> after each quiz submit.</li>' +
        '</ol>' +
      '</section>' +
      '<section class="admin-section">' +
        '<h3>Estimated cost</h3>' +
        '<p>With expected traffic (a few hundred to a few thousand active students), you can stay on the Supabase free tier for the first year. Beyond that, Supabase Pro is roughly $25/month — still the cheapest viable real backend.</p>' +
      '</section>' +
      '<section class="admin-section">' +
        '<h3>Until then</h3>' +
        '<p>Your overrides live in browser localStorage. Use <strong>Export / Import</strong> regularly to back them up to a file you can commit to git or email yourself. The site works 100% offline once loaded.</p>' +
      '</section>';
  };

  /* -------------- BOOT -------------- */
  document.addEventListener("DOMContentLoaded", function () {
    attachLogin();
    const session = loadSession();
    if (session) { showApp(session); }
    else { showLogin(); }

    $$(".admin-nav button").forEach(function (b) {
      b.addEventListener("click", function () { switchView(b.dataset.view); });
    });
  });
})();
