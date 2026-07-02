/* Pulse for Nurses — accounts & login (Supabase).
   - Email/password sign-up & sign-in, Google one-tap sign-in, password recovery.
   - Saves quiz results to the user's account (table `quiz_results`) when signed in.
   - Soft, dismissible prompt after a few anonymous quizzes inviting sign-up.
   - GRACEFUL: if auth-config.js still has placeholder values, this whole module
     stays dormant and the site behaves exactly as before (local-only progress).
   The anon key is meant to live in the browser; Row Level Security protects data. */
(function () {
  "use strict";

  var listeners = [];
  var cfg = window.PulseAuthConfig || {};
  var configured =
    cfg.supabaseUrl && cfg.supabaseAnonKey &&
    cfg.supabaseUrl.indexOf("REPLACE_WITH") === -1 &&
    cfg.supabaseAnonKey.indexOf("REPLACE_WITH") === -1;

  /* Public API stub — present even when disabled so callers never break. */
  window.PulseAuth = {
    enabled: false,
    user: null,
    openModal: function () {},
    signOut: function () {},
    saveResult: function () { return Promise.resolve(null); },
    fetchResults: function () { return Promise.resolve([]); },
    getPrefs: function () { return Promise.resolve(null); },
    savePrefs: function () { return Promise.resolve(null); },
    onChange: function (cb) { if (typeof cb === "function") listeners.push(cb); },
    noteQuizFinished: function () {}
  };

  if (!configured) return; /* dormant until Supabase is set up */

  var SDK_URL = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
  var supa = null;

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  function el(tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }

  /* After a fresh sign-in, land the learner on their dashboard (but never
     redirect a page-load session-restore, and never loop when already there). */
  function onDashboard() { return /(?:^|\/)dashboard\.html$/.test(location.pathname); }
  function goDash() { if (!onDashboard()) location.href = "dashboard.html"; }
  function maybeGoDashAfterAuth(u) {
    if (!u) return;
    var flag; try { flag = sessionStorage.getItem("pulse:goDash"); } catch (e) { flag = null; }
    if (flag) { try { sessionStorage.removeItem("pulse:goDash"); } catch (e) {} goDash(); }
  }

  /* ---- Load the Supabase SDK, then boot ---- */
  function loadSdk() {
    return new Promise(function (resolve, reject) {
      if (window.supabase && window.supabase.createClient) return resolve();
      var s = document.createElement("script");
      s.src = SDK_URL; s.async = true;
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  loadSdk().then(boot).catch(function () { /* offline / blocked — stay silent */ });

  function boot() {
    supa = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
    window.PulseAuth.enabled = true;
    window.PulseAuth.openModal = openModal;
    window.PulseAuth.signOut = signOut;
    window.PulseAuth.saveResult = saveResult;
    window.PulseAuth.fetchResults = fetchResults;
    window.PulseAuth.getPrefs = getPrefs;
    window.PulseAuth.savePrefs = savePrefs;
    window.PulseAuth.noteQuizFinished = noteQuizFinished;

    supa.auth.getSession().then(function (res) {
      var u = res && res.data && res.data.session ? res.data.session.user : null;
      setUser(u);
      maybeGoDashAfterAuth(u);
    });
    supa.auth.onAuthStateChange(function (_event, session) {
      var u = session ? session.user : null;
      setUser(u);
      maybeGoDashAfterAuth(u);
    });

    ready(function () {
      injectNavControl();
      injectModal();
    });
  }

  function setUser(u) {
    window.PulseAuth.user = u || null;
    renderNavControl();
    listeners.forEach(function (cb) { try { cb(window.PulseAuth.user); } catch (e) {} });
    if (window.PulseAuth.user) {
      // Once signed in, push any locally-stored history up and hide the prompt.
      hidePrompt();
      syncLocalHistory();
    }
  }

  /* ============================================================
     NAV CONTROL — a small account button in the top nav
     ============================================================ */
  function injectNavControl() {
    var nav = document.querySelector(".top-nav-links");
    if (!nav || document.querySelector(".pulse-acct")) return;
    var wrap = el("div", "pulse-acct");
    nav.appendChild(wrap);
    renderNavControl();
  }
  function renderNavControl() {
    var wrap = document.querySelector(".pulse-acct");
    if (!wrap) return;
    var u = window.PulseAuth.user;
    if (u) {
      var label = (u.email || "Account");
      var initial = (label[0] || "P").toUpperCase();
      wrap.innerHTML =
        '<button class="pulse-acct-btn" type="button" aria-label="Account menu">' +
          '<span class="pulse-acct-avatar">' + esc(initial) + '</span>' +
          '<span class="pulse-acct-name">' + esc(label.split("@")[0]) + '</span>' +
        '</button>' +
        '<div class="pulse-acct-menu" hidden>' +
          '<div class="pulse-acct-email">' + esc(label) + '</div>' +
          '<a class="pulse-acct-item" href="dashboard.html">📊 My Dashboard</a>' +
          '<button class="pulse-acct-item pulse-acct-signout" type="button">Sign out</button>' +
        '</div>';
      var btn = wrap.querySelector(".pulse-acct-btn");
      var menu = wrap.querySelector(".pulse-acct-menu");
      function syncMenu() { document.body.classList.toggle("pulse-acct-open", !menu.hidden); }
      btn.addEventListener("click", function () { menu.hidden = !menu.hidden; syncMenu(); });
      document.addEventListener("click", function (e) { if (!wrap.contains(e.target)) { menu.hidden = true; syncMenu(); } });
      wrap.querySelector(".pulse-acct-signout").addEventListener("click", signOut);
    } else {
      wrap.innerHTML = '<button class="pulse-acct-signin" type="button">Sign in</button>';
      wrap.querySelector(".pulse-acct-signin").addEventListener("click", function () { openModal("signin"); });
    }
  }

  /* ============================================================
     AUTH MODAL
     ============================================================ */
  var modal = null;
  function injectModal() {
    if (document.querySelector(".pulse-auth-modal")) return;
    modal = el("div", "pulse-auth-modal");
    modal.hidden = true;
    modal.innerHTML =
      '<div class="pulse-auth-backdrop"></div>' +
      '<div class="pulse-auth-card" role="dialog" aria-modal="true" aria-label="Sign in">' +
        '<button class="pulse-auth-close" type="button" aria-label="Close">&times;</button>' +
        '<div class="pulse-auth-banner">' +
          '<img class="pulse-auth-brand-logo" src="Photo & Logo/Pulse For Nurses Logo.png" alt="">' +
          '<div class="pulse-auth-brand-name">Pulse <span>for Nurses</span></div>' +
          '<div class="pulse-auth-brand-tag">For Nurses, By Nurses</div>' +
        '</div>' +
        '<div class="pulse-auth-body">' +
          '<h3 class="pulse-auth-title">Welcome back</h3>' +
          '<p class="pulse-auth-sub">Sign in to save your progress across devices. Practice always stays free.</p>' +
          '<button class="pulse-auth-google" type="button">' +
            '<span class="pulse-auth-g">G</span> Continue with Google</button>' +
          '<div class="pulse-auth-or"><span>or use your email</span></div>' +
          '<form class="pulse-auth-form">' +
            '<input class="pulse-auth-input" type="email" name="email" placeholder="Email address" autocomplete="email" required>' +
            '<input class="pulse-auth-input" type="password" name="password" placeholder="Password (min 6 characters)" autocomplete="current-password" minlength="6" required>' +
            '<input class="pulse-auth-input pulse-auth-confirm" type="password" name="password2" placeholder="Re-enter password to confirm" autocomplete="new-password" minlength="6" hidden>' +
            '<button class="pulse-auth-forgot" type="button">Forgot password?</button>' +
            '<div class="pulse-auth-msg" hidden></div>' +
            '<button class="pulse-auth-submit" type="submit">Sign in</button>' +
          '</form>' +
          '<div class="pulse-auth-switch">' +
            '<span class="pulse-auth-switch-text">New to Pulse for Nurses?</span>' +
            '<button class="pulse-auth-toggle" type="button">Create a free account</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    document.body.appendChild(modal);

    var mode = "signin";
    var card = modal.querySelector(".pulse-auth-card");
    var form = modal.querySelector(".pulse-auth-form");
    var msg = modal.querySelector(".pulse-auth-msg");
    var submit = modal.querySelector(".pulse-auth-submit");
    var title = modal.querySelector(".pulse-auth-title");
    var sub = modal.querySelector(".pulse-auth-sub");
    var toggle = modal.querySelector(".pulse-auth-toggle");
    var confirmInput = modal.querySelector(".pulse-auth-confirm");
    var forgotBtn = modal.querySelector(".pulse-auth-forgot");
    var switchText = modal.querySelector(".pulse-auth-switch-text");

    function setMode(m) {
      mode = m;
      var signup = m === "signup";
      card.classList.toggle("is-signup", signup);
      submit.textContent = signup ? "Create my free account" : "Sign in";
      title.textContent = signup ? "Create your free account" : "Welcome back";
      sub.textContent = signup
        ? "Free forever — your scores and progress follow you across devices."
        : "Sign in to save your progress across devices. Practice always stays free.";
      toggle.textContent = signup ? "Sign in instead" : "Create a free account";
      switchText.textContent = signup ? "Already have an account?" : "New to Pulse for Nurses?";
      confirmInput.hidden = !signup;
      confirmInput.required = signup;
      forgotBtn.style.display = signup ? "none" : "block";
      form.password.setAttribute("autocomplete", signup ? "new-password" : "current-password");
      showMsg("");
    }
    function showMsg(text, ok) {
      if (!text) { msg.hidden = true; return; }
      msg.hidden = false; msg.textContent = text;
      msg.className = "pulse-auth-msg" + (ok ? " is-ok" : " is-err");
    }

    modal._setMode = setMode;
    modal.querySelector(".pulse-auth-close").addEventListener("click", closeModal);
    modal.querySelector(".pulse-auth-backdrop").addEventListener("click", closeModal);
    toggle.addEventListener("click", function () { setMode(mode === "signup" ? "signin" : "signup"); });

    modal.querySelector(".pulse-auth-google").addEventListener("click", function () {
      try { sessionStorage.setItem("pulse:goDash", "1"); } catch (e) {}
      supa.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.origin + window.location.pathname }
      });
    });

    modal.querySelector(".pulse-auth-forgot").addEventListener("click", function () {
      var email = form.email.value.trim();
      if (!email) { showMsg("Enter your email above first, then tap Forgot password."); return; }
      supa.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + "/reset.html" })
        .then(function (r) {
          showMsg(r.error ? r.error.message : "Password reset link sent — check your email.", !r.error);
        });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      var password = form.password.value;
      if (mode === "signup" && password !== form.password2.value) {
        showMsg("The two passwords don't match — please re-enter them.");
        return;
      }
      submit.disabled = true; submit.textContent = "…";
      var p = mode === "signup"
        ? supa.auth.signUp({ email: email, password: password })
        : supa.auth.signInWithPassword({ email: email, password: password });
      p.then(function (r) {
        submit.disabled = false;
        setMode(mode); /* resets button label */
        if (r.error) { showMsg(r.error.message); return; }
        if (mode === "signup" && r.data && r.data.user && !r.data.session) {
          showMsg("Account created — check your email to confirm, then sign in.", true);
          setMode("signin");
          return;
        }
        closeModal();
        goDash();
      });
    });
  }

  function openModal(mode) {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    if (modal._setMode) modal._setMode(mode === "signup" ? "signup" : "signin");
    var inp = modal.querySelector('input[name=email]'); if (inp) inp.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  function signOut() {
    supa.auth.signOut().then(function () {
      var m = document.querySelector(".pulse-acct-menu"); if (m) m.hidden = true;
      document.body.classList.remove("pulse-acct-open");
      location.href = "index.html";   // return to the general homepage after signing out
    });
  }

  /* ============================================================
     PROGRESS SYNC — save quiz results to the account
     ============================================================ */
  function saveResult(result) {
    if (!window.PulseAuth.user || !result) return Promise.resolve(null);
    var row = {
      user_id: window.PulseAuth.user.id,
      program_id: result.programId,
      test_id: result.testId,
      test_title: result.testTitle,
      test_type: result.testType || "model",
      score: result.score,
      correct: result.correct,
      total: result.total,
      pass_probability: (typeof result.passProbability === "number") ? result.passProbability : null,
      submitted_at: new Date(result.submittedAt || Date.now()).toISOString(),
      detail: result.perSubject || {}
    };
    return supa.from("quiz_results").insert(row).then(function (r) { return r; }).catch(function () { return null; });
  }

  /* Read the signed-in user's saved quiz results (for the dashboard, cross-device). */
  function fetchResults() {
    if (!window.PulseAuth.user) return Promise.resolve([]);
    return supa.from("quiz_results")
      .select("program_id,test_id,test_title,test_type,score,correct,total,pass_probability,submitted_at")
      .eq("user_id", window.PulseAuth.user.id)
      .order("submitted_at", { ascending: false })
      .limit(300)
      .then(function (r) { return (r && r.data) || []; })
      .catch(function () { return []; });
  }

  /* Per-user preferences (e.g. chosen programs) — cross-device, table `user_prefs`.
     Degrades gracefully: if the table doesn't exist yet, resolves null and the
     dashboard keeps using device-local storage. */
  function getPrefs() {
    if (!window.PulseAuth.user) return Promise.resolve(null);
    return supa.from("user_prefs").select("programs").eq("user_id", window.PulseAuth.user.id).maybeSingle()
      .then(function (r) { return (r && r.data) || null; })
      .catch(function () { return null; });
  }
  function savePrefs(programs) {
    if (!window.PulseAuth.user) return Promise.resolve(null);
    return supa.from("user_prefs").upsert({
      user_id: window.PulseAuth.user.id,
      programs: programs || [],
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id" }).then(function (r) { return r; }).catch(function () { return null; });
  }

  /* When a user signs in, push any results saved locally while anonymous. */
  function syncLocalHistory() {
    try {
      var hist = JSON.parse(localStorage.getItem("pulse:history") || "[]");
      if (!hist.length || localStorage.getItem("pulse:synced") === "1") return;
      var rows = hist.slice(0, 50).map(function (h) {
        return {
          user_id: window.PulseAuth.user.id,
          program_id: h.programId, test_id: h.testId, test_title: h.testTitle,
          test_type: "model", score: h.score, correct: h.correct, total: h.total,
          submitted_at: new Date(h.submittedAt || Date.now()).toISOString(), detail: {}
        };
      });
      supa.from("quiz_results").insert(rows).then(function () {
        try { localStorage.setItem("pulse:synced", "1"); } catch (e) {}
      });
    } catch (e) {}
  }

  /* ============================================================
     SOFT PROMPT — after a few anonymous quizzes
     ============================================================ */
  var PROMPT_DISMISSED = "pulse:promptDismissed";
  var QUIZ_COUNT = "pulse:quizCount";

  function noteQuizFinished() {
    if (window.PulseAuth.user) return; /* already signed in */
    var n = 0;
    try { n = parseInt(localStorage.getItem(QUIZ_COUNT) || "0", 10) + 1; localStorage.setItem(QUIZ_COUNT, String(n)); } catch (e) {}
    var threshold = cfg.promptAfterQuizzes || 2;
    if (n >= threshold && localStorage.getItem(PROMPT_DISMISSED) !== "1") {
      ready(showPrompt);
    }
  }

  function showPrompt() {
    if (window.PulseAuth.user || document.querySelector(".pulse-prompt")) return;
    var bar = el("div", "pulse-prompt",
      '<span class="pulse-prompt-text">📈 Enjoying your practice? Create a free account to <strong>save your progress</strong> across devices.</span>' +
      '<span class="pulse-prompt-actions">' +
        '<button class="pulse-prompt-cta" type="button">Save my progress</button>' +
        '<button class="pulse-prompt-dismiss" type="button" aria-label="Dismiss">Not now</button>' +
      '</span>');
    document.body.appendChild(bar);
    requestAnimationFrame(function () { bar.classList.add("is-in"); });
    bar.querySelector(".pulse-prompt-cta").addEventListener("click", function () { openModal("signup"); });
    bar.querySelector(".pulse-prompt-dismiss").addEventListener("click", function () {
      try { localStorage.setItem(PROMPT_DISMISSED, "1"); } catch (e) {}
      hidePrompt();
    });
  }
  function hidePrompt() {
    var bar = document.querySelector(".pulse-prompt");
    if (bar) { bar.classList.remove("is-in"); setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 300); }
  }
})();
