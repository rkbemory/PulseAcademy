/* Pulse for Nurses — personal Dashboard.
   Shows the signed-in (or local) learner: their chosen programs (editable
   anytime), where they are now vs previously, a visual progress/performance
   scoreboard, and a feedback box. Reads progress from localStorage
   (pulse:academic:progress + pulse:history) and, when signed in, merges the
   account's saved quiz results (Supabase) for cross-device performance.
   Fully graceful: works offline and when not signed in (device-local). */
(function () {
  "use strict";

  var WEB3FORMS_KEY = "9a9d33e7-bd31-42a5-b5e3-3f8b29a320a4";
  var LS_PROGRESS = "pulse:academic:progress";
  var LS_HISTORY  = "pulse:history";
  var LS_INTERESTS = "pulse:interests";

  /* The trackable learning programs. */
  var PROGRAMS = [
    { id: "msn",              name: "MSN Admission",        kind: "exam",     href: "msn.html",         color: "#1E3A8A", icon: "🩺" },
    { id: "post-basic",       name: "Post Basic Admission", kind: "exam",     href: "post-basic.html",  color: "#1E5F9C", icon: "📘" },
    { id: "rn",               name: "BNMC RN",              kind: "exam",     href: "rn.html",          color: "#16A34A", icon: "🎓" },
    { id: "nclex",            name: "NCLEX-RN",             kind: "exam",     href: "nclex.html",       color: "#2E9E72", icon: "🌎" },
    { id: "ielts",            name: "IELTS Preparation",    kind: "ielts",    href: "ielts.html",       color: "#6D28D9", icon: "📝" },
    { id: "diploma-nursing",  name: "Diploma in Nursing",   kind: "academic", href: "academic-program.html?program=diploma-nursing",  color: "#7C2D12", icon: "🏥" },
    { id: "diploma-midwifery",name: "Diploma in Midwifery", kind: "academic", href: "academic-program.html?program=diploma-midwifery",color: "#831843", icon: "🤱" },
    { id: "bsc-nursing",      name: "B.Sc. in Nursing",     kind: "academic", href: "academic-program.html?program=bsc-nursing",       color: "#0F4C3A", icon: "📗" }
  ];
  function prog(id) { for (var i = 0; i < PROGRAMS.length; i++) if (PROGRAMS[i].id === id) return PROGRAMS[i]; return null; }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); }
  function readJSON(k, d) {
    try { var v = JSON.parse(localStorage.getItem(k) || d); return (v && typeof v === "object") ? v : JSON.parse(d); }
    catch (e) { return JSON.parse(d); }
  }
  function fmtDate(ts) {
    if (!ts) return "";
    var d = new Date(ts); if (isNaN(d)) return "";
    var days = Math.floor((Date.now() - d.getTime()) / 86400000);
    if (days <= 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 30) return days + " days ago";
    return d.toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" });
  }

  function getInterests() {
    var raw = localStorage.getItem(LS_INTERESTS);
    if (raw == null) return null;              // never chosen
    try { var a = JSON.parse(raw); return Array.isArray(a) ? a : null; } catch (e) { return null; }
  }
  function setInterests(arr) { try { localStorage.setItem(LS_INTERESTS, JSON.stringify(arr)); } catch (e) {} }

  /* ---------- progress computation ---------- */
  function academicTotal(pid) {
    var p = window.Academic && window.Academic.programs && window.Academic.programs[pid];
    if (!p || !p.years) return 0;
    var n = 0;
    for (var y in p.years) { if (!p.years.hasOwnProperty(y)) continue; (p.years[y].subjects || []).forEach(function (s) { if (s.available && s.topicCount) n += s.topicCount; }); }
    return n;
  }
  function subjectName(pid, sid) {
    if (window.Academic && window.Academic.findSubject) { var s = window.Academic.findSubject(pid, sid); if (s) return s.name; }
    return sid;
  }
  function academicActivity(pid) {
    var pr = readJSON(LS_PROGRESS, "{}"), entries = [];
    for (var k in pr) {
      if (!pr.hasOwnProperty(k) || k.indexOf(pid + "/") !== 0) continue;
      var parts = k.split("/");
      entries.push({ subject: parts[1], topic: parts[2], ts: (pr[k] && pr[k].ts) || 0, score: pr[k] && pr[k].score });
    }
    entries.sort(function (a, b) { return b.ts - a.ts; });
    return entries;
  }
  function examActivity(pid, hist) {
    var items = hist.filter(function (h) { return h.programId === pid; });
    items.sort(function (a, b) { return new Date(b.submittedAt || 0) - new Date(a.submittedAt || 0); });
    var scores = items.map(scoreOf);
    return {
      attempts: items.length,
      best: scores.length ? Math.max.apply(null, scores) : 0,
      avg: scores.length ? Math.round(scores.reduce(function (a, b) { return a + b; }, 0) / scores.length) : 0,
      items: items
    };
  }
  function scoreOf(h) {
    if (typeof h.score === "number") return Math.round(h.score);
    if (h.total) return Math.round((h.correct || 0) / h.total * 100);
    return 0;
  }

  /* IELTS Preparation — best raw scores are stored in pulse:ielts:progress,
     keyed "<module>/<test>" → best raw /40 (Reading & Listening auto-score). */
  function ieltsActivity() {
    var pr = readJSON("pulse:ielts:progress", "{}"), attempts = 0, bestRaw = 0, bestKey = null;
    for (var k in pr) {
      if (!pr.hasOwnProperty(k)) continue;
      var v = pr[k], raw = (typeof v === "number") ? v : (v && typeof v.best === "number" ? v.best : null);
      if (raw == null) continue;
      attempts++;
      if (raw > bestRaw) { bestRaw = raw; bestKey = k; }
    }
    return { attempts: attempts, bestRaw: bestRaw, bestModule: bestKey ? ieltsModuleName(bestKey.split("/")[0]) : "" };
  }
  function ieltsTotal() {
    var M = window.IELTS && window.IELTS.modules, n = 0;
    if (M) ["reading", "listening"].forEach(function (mid) { if (M[mid] && M[mid].tests) n += M[mid].tests.length; });
    return n || 20;
  }
  function ieltsModuleName(mid) {
    var M = window.IELTS && window.IELTS.modules;
    return (M && M[mid] && M[mid].name) ? M[mid].name : (mid.charAt(0).toUpperCase() + mid.slice(1));
  }

  function getHistory() { var a = readJSON(LS_HISTORY, "[]"); return Array.isArray(a) ? a : []; }
  function mergeRemote(local, rows) {
    var seen = {}, out = [];
    // Local history stores submittedAt as an epoch number; remote rows store an
    // ISO string. Normalize both so the same quiz dedups instead of doubling.
    function normTs(v) { var n = typeof v === "number" ? v : Date.parse(v); return isNaN(n) ? String(v) : n; }
    function push(h) { var key = (h.testId || "") + "|" + normTs(h.submittedAt); if (seen[key]) return; seen[key] = 1; out.push(h); }
    local.forEach(push);
    rows.forEach(function (r) {
      push({ programId: r.program_id, testId: r.test_id, testTitle: r.test_title, score: r.score, correct: r.correct, total: r.total, submittedAt: r.submitted_at });
    });
    return out;
  }

  /* ---------- effective (interested) programs ---------- */
  function activePrograms() {
    var chosen = getInterests();
    if (chosen && chosen.length) return PROGRAMS.filter(function (p) { return chosen.indexOf(p.id) >= 0; });
    // none chosen yet → show programs that have any activity; else all
    var withActivity = PROGRAMS.filter(function (p) { return hasActivity(p); });
    return withActivity.length ? withActivity : PROGRAMS.slice();
  }
  function hasActivity(p, hist) {
    hist = hist || STATE.history;
    if (p.kind === "academic") return academicActivity(p.id).length > 0;
    if (p.kind === "ielts") return ieltsActivity().attempts > 0;
    return hist.some(function (h) { return h.programId === p.id; });
  }

  var STATE = { history: [] };

  /* ============================================================ RENDER */
  function render() {
    var root = document.getElementById("dashboard-root");
    if (!root) return;
    var u = window.PulseAuth && window.PulseAuth.user;
    var html = "";
    html += head(u);
    html += smartReviewBanner();
    html += '<div class="dash-top">';
    html +=   '<div class="dash-col dash-programs">' + interestsSection() + toolsSection() + '</div>';
    html +=   '<div class="dash-col dash-main">' + statsSection() + continueSection() + '</div>';
    html += '</div>';
    html += '<div class="dash-metrics">' + progressSection() + performanceSection() + '</div>';
    html += feedbackSection(u);
    root.innerHTML = html;
    wire(root);
  }

  function greeting() {
    var h = new Date().getHours();
    if (h < 12) return { t: "Good morning", ic: "☀️" };
    if (h < 17) return { t: "Good afternoon", ic: "🌤️" };
    if (h < 21) return { t: "Good evening", ic: "🌆" };
    return { t: "Good evening", ic: "🌙" };
  }
  function firstName(u) {
    if (!u) return "there";
    var local = (u.email || "").split("@")[0] || "";
    var tok = (local.split(/[.\-_+0-9]+/).filter(Boolean)[0] || local || "there");
    return tok.charAt(0).toUpperCase() + tok.slice(1);
  }

  function head(u) {
    var g = greeting();
    var name = esc(firstName(u));
    var sub = u
      ? '<p class="dash-sub">Signed in as <strong>' + esc(u.email) + '</strong> — your progress syncs across your devices.</p>'
      : '<p class="dash-sub">You\'re studying as a guest — progress is saved on this device. <button class="dash-link-btn" data-act="signin">Sign in</button> to sync it across devices.</p>';
    return '<div class="dash-head">' +
      '<span class="dash-eyebrow">' + g.ic + ' ' + g.t + '</span>' +
      '<h1 class="section-title">Hi, ' + name + ' 👋</h1>' + sub + '</div>';
  }

  /* 1 — Program interests */
  function interestsSection() {
    var chosen = getInterests() || [];
    var never = getInterests() === null;
    var chips = PROGRAMS.map(function (p) {
      var on = chosen.indexOf(p.id) >= 0;
      return '<label class="dash-int' + (on ? " is-on" : "") + '" style="--pc:' + p.color + '">' +
        '<input type="checkbox" data-int="' + p.id + '"' + (on ? " checked" : "") + '>' +
        '<span class="dash-int-ic">' + p.icon + '</span><span class="dash-int-name">' + esc(p.name) + '</span>' +
        '<span class="dash-int-tick">✓</span></label>';
    }).join("");
    return '<section class="dash-section">' +
      '<h2 class="dash-h2">🎯 My programs</h2>' +
      '<p class="dash-note">' + (never
        ? "Tick the program(s) you’re preparing for. Your dashboard will focus on these — you can change this any time."
        : "Tick to include a program, untick to hide it. Change any time.") + '</p>' +
      '<div class="dash-interests">' + chips + '</div>' +
      '</section>';
  }

  /* 2 — Continue where you left off */
  function continueSection() {
    var cards = activePrograms().map(function (p) {
      if (p.kind === "academic") return academicCard(p);
      if (p.kind === "ielts") return ieltsCard(p);
      return examCard(p);
    }).join("");
    if (!cards) cards = '<p class="dash-empty">No programs selected yet — tick one above to get started.</p>';
    return '<section class="dash-section"><h2 class="dash-h2">📍 Continue where you left off</h2>' +
      '<div class="dash-cont-grid">' + cards + '</div></section>';
  }
  function academicCard(p) {
    var acts = academicActivity(p.id), total = academicTotal(p.id), studied = acts.length;
    var pct = total ? Math.round(studied / total * 100) : 0;
    var now = acts[0], prev = acts[1];
    var cont = now
      ? "academic-topic.html?program=" + p.id + "&subject=" + encodeURIComponent(now.subject) + "&topic=" + encodeURIComponent(now.topic)
      : p.href;
    var lines = now
      ? '<p class="dash-cont-line"><span>Now</span> ' + esc(subjectName(p.id, now.subject)) + ' <em>· ' + fmtDate(now.ts) + '</em></p>' +
        (prev ? '<p class="dash-cont-line dash-cont-prev"><span>Before</span> ' + esc(subjectName(p.id, prev.subject)) + ' <em>· ' + fmtDate(prev.ts) + '</em></p>' : "")
      : '<p class="dash-cont-line dash-cont-prev">Not started yet.</p>';
    return card(p, pct, studied + " / " + total + " topics", lines, cont, now ? "Continue →" : "Start →");
  }
  function examCard(p) {
    var e = examActivity(p.id, STATE.history);
    var now = e.items[0], prev = e.items[1];
    var pct = e.best;
    var lines = now
      ? '<p class="dash-cont-line"><span>Last</span> ' + esc(now.testTitle || "Test") + ' — <strong>' + scoreOf(now) + '%</strong> <em>· ' + fmtDate(now.submittedAt) + '</em></p>' +
        (prev ? '<p class="dash-cont-line dash-cont-prev"><span>Before</span> ' + scoreOf(prev) + '% <em>· ' + fmtDate(prev.submittedAt) + '</em></p>' : "")
      : '<p class="dash-cont-line dash-cont-prev">No attempts yet.</p>';
    var sub = e.attempts ? (e.attempts + " attempts · best " + e.best + "%") : "Practice tests";
    return card(p, pct, sub, lines, p.href, e.attempts ? "Practice →" : "Start →");
  }
  function ieltsCard(p) {
    var a = ieltsActivity(), total = ieltsTotal();
    var pct = a.bestRaw ? Math.round(a.bestRaw / 40 * 100) : 0;
    var lines = a.attempts
      ? '<p class="dash-cont-line"><span>Best</span> ' + esc(a.bestModule) + ' — <strong>' + a.bestRaw + '/40</strong></p>' +
        '<p class="dash-cont-line dash-cont-prev"><span>Done</span> ' + a.attempts + ' auto-scored test' + (a.attempts === 1 ? "" : "s") + '</p>'
      : '<p class="dash-cont-line dash-cont-prev">Reading · Listening · Writing · Speaking — not started yet.</p>';
    var metric = a.attempts ? (a.attempts + " / " + total + " scored tests · best " + a.bestRaw + "/40") : "Academic Reading, Listening, Writing & Speaking";
    return card(p, pct, metric, lines, p.href, a.attempts ? "Continue →" : "Start →");
  }
  function card(p, pct, metric, lines, href, cta) {
    return '<div class="dash-cont-card" style="--pc:' + p.color + '">' +
      '<div class="dash-cont-top"><span class="dash-cont-ic">' + p.icon + '</span>' +
        '<div><h3>' + esc(p.name) + '</h3><span class="dash-cont-metric">' + esc(metric) + '</span></div></div>' +
      '<div class="dash-bar"><span style="width:' + Math.max(2, Math.min(100, pct)) + '%"></span></div>' +
      '<div class="dash-cont-lines">' + lines + '</div>' +
      '<a class="btn btn-primary dash-cont-btn" href="' + href + '">' + cta + '</a></div>';
  }

  /* 3a — Headline stat tiles (overall) */
  function statsSection() {
    var pr = readJSON(LS_PROGRESS, "{}"), studied = Object.keys(pr).length;
    var hist = STATE.history, scores = hist.map(scoreOf);
    var avg = scores.length ? Math.round(scores.reduce(function (a, b) { return a + b; }, 0) / scores.length) : 0;
    var best = scores.length ? Math.max.apply(null, scores) : 0;
    var stat = function (n, l) { return '<div class="dash-stat"><span class="dash-stat-num">' + n + '</span><span class="dash-stat-label">' + l + '</span></div>'; };
    var stats = stat(studied, "Topics studied") + stat(hist.length, "Quizzes taken") + stat(avg + "%", "Average score") + stat(best + "%", "Best score");
    return '<section class="dash-section"><h2 class="dash-h2">📊 Your scoreboard</h2>' +
      '<div class="dash-stats">' + stats + '</div></section>';
  }

  /* 3b — Per-program progress bars */
  function progressSection() {
    var hist = STATE.history;
    var bars = activePrograms().map(function (p) {
      var pct, label;
      if (p.kind === "academic") { var t = academicTotal(p.id), s = academicActivity(p.id).length; pct = t ? Math.round(s / t * 100) : 0; label = s + "/" + t + " topics"; }
      else if (p.kind === "ielts") { var a = ieltsActivity(); pct = a.bestRaw ? Math.round(a.bestRaw / 40 * 100) : 0; label = a.attempts ? ("best " + a.bestRaw + "/40") : "—"; }
      else { var e = examActivity(p.id, hist); pct = e.best; label = e.attempts ? ("best " + e.best + "%") : "—"; }
      return '<div class="dash-scorerow"><span class="dash-scorerow-name">' + p.icon + " " + esc(p.name) + '</span>' +
        '<div class="dash-bar" style="--pc:' + p.color + '"><span style="width:' + Math.max(2, Math.min(100, pct)) + '%"></span></div>' +
        '<span class="dash-scorerow-val">' + esc(label) + '</span></div>';
    }).join("");
    return '<section class="dash-section"><h2 class="dash-h2">📶 Your progress</h2>' +
      (bars ? '<div class="dash-scorelist">' + bars + '</div>' : '<p class="dash-empty">Pick a program above to see progress here.</p>') +
      '</section>';
  }

  /* Performance trend — line chart of recent quiz scores over time */
  function performanceSection() {
    var hist = STATE.history.slice().sort(function (a, b) { return new Date(a.submittedAt || 0) - new Date(b.submittedAt || 0); });
    var recent = hist.slice(-15);
    if (!recent.length) {
      return '<section class="dash-section"><h2 class="dash-h2">📈 Performance trend</h2>' +
        '<p class="dash-empty">Take a model test or self-check and your score trend will appear here.</p></section>';
    }
    var W = 640, H = 260, padL = 34, padR = 16, padT = 16, padB = 40, n = recent.length;
    var iw = W - padL - padR, ih = H - padT - padB;
    var xAt = function (i) { return padL + (n === 1 ? iw / 2 : iw * i / (n - 1)); };
    var yAt = function (v) { return padT + ih * (1 - Math.max(0, Math.min(100, v)) / 100); };
    var band = function (v) { return v >= 60 ? "#16A34A" : (v >= 40 ? "#E89B2C" : "#DC2626"); };

    // horizontal gridlines + y labels
    var grid = [0, 25, 50, 75, 100].map(function (g) {
      var y = yAt(g);
      return '<line x1="' + padL + '" y1="' + y.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + y.toFixed(1) + '" stroke="#EDF1F5" stroke-width="1"></line>' +
        '<text x="' + (padL - 7) + '" y="' + (y + 3).toFixed(1) + '" text-anchor="end" font-family="sans-serif" font-size="9" fill="#94A3B8">' + g + '</text>';
    }).join("");
    // pass line at 60%
    var passY = yAt(60);
    var passLine = '<line x1="' + padL + '" y1="' + passY.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + passY.toFixed(1) + '" stroke="#16A34A" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"></line>' +
      '<text x="' + (W - padR) + '" y="' + (passY - 5).toFixed(1) + '" text-anchor="end" font-family="sans-serif" font-size="9" fill="#16A34A">pass 60%</text>';

    var pts = recent.map(function (h, i) { return { x: xAt(i), y: yAt(scoreOf(h)), v: scoreOf(h), h: h }; });
    var linePath = pts.map(function (p, i) { return (i ? "L" : "M") + p.x.toFixed(1) + " " + p.y.toFixed(1); }).join(" ");
    var areaPath = "M" + pts[0].x.toFixed(1) + " " + (padT + ih).toFixed(1) + " " +
      pts.map(function (p) { return "L" + p.x.toFixed(1) + " " + p.y.toFixed(1); }).join(" ") +
      " L" + pts[n - 1].x.toFixed(1) + " " + (padT + ih).toFixed(1) + " Z";
    var dots = pts.map(function (p, i) {
      var lbl = (n <= 10 || i === 0 || i === n - 1 || i % 2 === 0)
        ? '<text x="' + p.x.toFixed(1) + '" y="' + (p.y - 9).toFixed(1) + '" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#334155">' + p.v + '</text>' : "";
      return '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1) + '" r="3.5" fill="' + band(p.v) + '" stroke="#fff" stroke-width="1.5"></circle>' + lbl;
    }).join("");
    // x-axis date labels: first & last
    function shortDate(ts) { var d = new Date(ts); return isNaN(d) ? "" : d.toLocaleDateString(undefined, { day: "numeric", month: "short" }); }
    var xlabels = '<text x="' + xAt(0).toFixed(1) + '" y="' + (H - 14) + '" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#94A3B8">' + shortDate(recent[0].submittedAt) + '</text>' +
      (n > 1 ? '<text x="' + xAt(n - 1).toFixed(1) + '" y="' + (H - 14) + '" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#94A3B8">' + shortDate(recent[n - 1].submittedAt) + '</text>' : "");

    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="dash-chart" role="img" aria-label="Line chart of recent quiz scores over time">' +
      '<defs><linearGradient id="dashArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#14387A" stop-opacity="0.18"/><stop offset="100%" stop-color="#14387A" stop-opacity="0"/></linearGradient></defs>' +
      grid + passLine +
      '<path d="' + areaPath + '" fill="url(#dashArea)"></path>' +
      '<path d="' + linePath + '" fill="none" stroke="#14387A" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"></path>' +
      dots + xlabels + '</svg>';
    return '<section class="dash-section"><h2 class="dash-h2">📈 Performance trend</h2>' +
      '<p class="dash-note">Your last ' + n + ' quiz score(s) over time. Dots: green ≥ 60%, amber 40–59%, red below 40%.</p>' +
      '<div class="dash-chart-wrap">' + svg + '</div></section>';
  }

  /* Smart Review daily-habit banner — spaced-repetition of missed questions. */
  function smartReviewBanner() {
    var c = (window.PulseReview && window.PulseReview.counts) ? window.PulseReview.counts() : null;
    if (!c) return "";
    var due = c.due || 0, total = c.total || 0;
    var line, cta;
    if (total === 0) {
      line = "Turn the questions you get wrong into a daily review deck — it remembers them so you don't have to.";
      cta = "Start Smart Review →";
    } else if (due === 0) {
      line = "All caught up — you've reviewed everything due today. " + total + " card" + (total === 1 ? "" : "s") + " in your deck.";
      cta = "Open Smart Review →";
    } else {
      line = "<strong>" + due + "</strong> card" + (due === 1 ? "" : "s") + " due for review today" + (c.reviewedToday ? " · " + c.reviewedToday + " done" : "") + ". A few minutes now keeps them in your memory.";
      cta = "Review " + due + " card" + (due === 1 ? "" : "s") + " →";
    }
    return '<a class="dash-review-banner' + (due > 0 ? " is-due" : "") + '" href="review.html">' +
      '<span class="dash-review-ic">🧠</span>' +
      '<span class="dash-review-body"><span class="dash-review-title">Smart Review' +
        (due > 0 ? '<span class="dash-review-badge">' + due + '</span>' : "") + '</span>' +
        '<span class="dash-review-line">' + line + '</span></span>' +
      '<span class="dash-review-cta">' + esc(cta) + '</span></a>';
  }

  /* Explore & tools — quick links to non-tracked resources */
  function toolsSection() {
    var links = [
      { href: "resources.html", ic: "🔗", name: "Resource Hub" },
      { href: "jobs.html", ic: "💼", name: "Nursing Jobs" },
      { href: "books.html", ic: "📚", name: "Books" },
      { href: "calculators.html", ic: "🧮", name: "Calculators" },
      { href: "reference.html", ic: "🧪", name: "Quick Reference" }
    ];
    return '<section class="dash-section"><h2 class="dash-h2">🧰 Explore &amp; tools</h2>' +
      '<div class="dash-tools">' + links.map(function (l) {
        return '<a class="dash-tool" href="' + l.href + '"><span class="dash-tool-ic">' + l.ic + '</span>' + esc(l.name) + '</a>';
      }).join("") + '</div></section>';
  }

  /* 4 — Feedback */
  function feedbackSection(u) {
    return '<section class="dash-section"><h2 class="dash-h2">💬 Feedback</h2>' +
      '<p class="dash-note">Tell us what would make Pulse better for you — it goes straight to the team.</p>' +
      '<form class="dash-feedback" novalidate>' +
        '<input type="hidden" name="access_key" value="' + WEB3FORMS_KEY + '">' +
        '<input type="hidden" name="subject" value="Dashboard feedback — Pulse for Nurses">' +
        '<input type="hidden" name="from_name" value="Pulse Dashboard">' +
        '<input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">' +
        '<textarea class="dash-fb-msg" name="message" rows="3" placeholder="Your feedback, ideas or a problem you hit…" required></textarea>' +
        '<input class="dash-fb-contact" name="email" type="email" placeholder="Email (optional, for a reply)" value="' + (u ? esc(u.email) : "") + '" autocomplete="email">' +
        '<button type="submit" class="btn btn-primary dash-fb-send">Send feedback →</button>' +
        '<p class="dash-fb-done" hidden>✅ Thank you! Your feedback was sent.</p>' +
      '</form></section>';
  }

  /* ---------- wiring ---------- */
  function wire(root) {
    // sign-in link
    var si = root.querySelector('[data-act="signin"]');
    if (si) si.addEventListener("click", function () { if (window.PulseAuth) window.PulseAuth.openModal("signin"); });

    // interests toggles
    root.querySelectorAll("input[data-int]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        var cur = getInterests() || [];
        var id = cb.getAttribute("data-int");
        if (cb.checked) { if (cur.indexOf(id) < 0) cur.push(id); }
        else { cur = cur.filter(function (x) { return x !== id; }); }
        setInterests(cur);
        if (window.PulseAuth && window.PulseAuth.user && window.PulseAuth.savePrefs) window.PulseAuth.savePrefs(cur);
        render();
      });
    });

    // feedback submit (Web3Forms)
    var form = root.querySelector(".dash-feedback");
    if (form) form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector(".dash-fb-send"), done = form.querySelector(".dash-fb-done");
      btn.disabled = true; btn.textContent = "Sending…";
      fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function () { form.querySelector(".dash-fb-msg").value = ""; done.hidden = false; btn.textContent = "Sent ✓"; })
        .catch(function () { btn.disabled = false; btn.textContent = "Send feedback →"; alert("Could not send — please check your connection."); });
    });
  }

  /* ---------- boot ---------- */
  function init() {
    STATE.history = getHistory();
    render();
    // Cross-device: pull the account's saved results, merge, re-render.
    if (window.PulseAuth) {
      window.PulseAuth.onChange(function () {
        STATE.history = getHistory();
        pullRemote();
        render();
      });
      pullRemote();
    }
  }
  function pullRemote() {
    if (!(window.PulseAuth && window.PulseAuth.user)) return;
    // cross-device program interests: account is source of truth once signed in
    if (window.PulseAuth.getPrefs) {
      window.PulseAuth.getPrefs().then(function (pf) {
        if (pf && Array.isArray(pf.programs)) { setInterests(pf.programs); render(); }
        else { var local = getInterests(); if (local && local.length && window.PulseAuth.savePrefs) window.PulseAuth.savePrefs(local); }
      });
    }
    // cross-device performance
    if (window.PulseAuth.fetchResults) {
      window.PulseAuth.fetchResults().then(function (rows) {
        if (rows && rows.length) { STATE.history = mergeRemote(getHistory(), rows); render(); }
      });
    }
    // cross-device academic & IELTS progress: fetch-merge(-push), re-render if changed
    if (window.PulseAuth.syncProgress) {
      window.PulseAuth.syncProgress(true).then(function (changed) { if (changed) render(); });
    }
  }

  if (document.readyState !== "loading") init();
  else document.addEventListener("DOMContentLoaded", init);
})();
