/* Pulse for Nurses — Jobs page logic.
   Fetches /api/jobs (Cloudflare Function, KV-cached), renders live listing
   cards, and provides client-side search + level filters. If the API fails
   or returns nothing, the page degrades to a friendly note — the trusted-
   sources hub below is static HTML and always works. */

(function () {
  var grid = document.getElementById("jobs-grid");
  var statusEl = document.getElementById("jobs-status");
  var searchEl = document.getElementById("jobs-search");
  var chipRow = document.getElementById("jobs-chips");
  if (!grid) return;

  var allJobs = [];
  var activeQual = "all-jobs";
  var query = "";

  function esc(s) {
    return String(s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function daysUntil(dateStr) {
    if (!dateStr) return null;
    var d = Date.parse(dateStr);
    if (isNaN(d)) return null;
    return Math.ceil((d - Date.now()) / 86400000);
  }

  function fmtDate(dateStr) {
    var d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  }

  function matches(job) {
    if (activeQual !== "all-jobs" && job.qual.indexOf(activeQual) === -1) return false;
    if (query) {
      var hay = (job.title + " " + job.org).toLowerCase();
      if (hay.indexOf(query) === -1) return false;
    }
    return true;
  }

  // Bdjobs has no public feed (JS-only site), so it lives as a permanent
  // pinned row: one tap opens their always-current "nurse" search.
  var BDJOBS_ROW =
    '<a class="job-row job-row-pinned" href="https://bdjobs.com/h/jobs?qOT=&txtsearch=nurse&lang=en" target="_blank" rel="noopener">' +
      '<span class="job-row-main">' +
        '<span class="job-row-title">All current “nurse” vacancies on Bdjobs</span>' +
        '<span class="job-row-org">Bdjobs — largest job portal in Bangladesh · <em>hospital &amp; clinic posts land here first</em></span>' +
      '</span>' +
      '<span class="job-row-side">' +
        '<span class="job-badge job-badge-live">🔴 Live search</span>' +
        '<span class="job-row-apply">Open →</span>' +
      '</span>' +
    '</a>';

  function render() {
    var visible = allJobs.filter(matches);
    if (!allJobs.length) {
      grid.innerHTML = '<div class="job-list">' + BDJOBS_ROW + "</div>" +
        '<div class="jobs-empty jobs-empty-slim">' +
          '<p>No feed listings right now — new icddr,b / UNICEF / NGO openings appear here automatically.</p>' +
        '</div>';
      return;
    }
    if (!visible.length) {
      grid.innerHTML = '<div class="job-list">' + BDJOBS_ROW + "</div>" +
        '<div class="jobs-empty jobs-empty-slim">' +
        '<p><strong>No listings match your search.</strong> Try clearing the search or choosing “All”.</p></div>';
      return;
    }
    grid.innerHTML = '<div class="job-list">' + BDJOBS_ROW + visible.map(function (j) {
      var dl = daysUntil(j.deadline);
      var badge = "";
      if (dl !== null && dl <= 7 && dl >= 0) badge = '<span class="job-badge job-badge-soon">⏳ Closing soon</span>';
      var deadlineTxt = j.deadline
        ? '<span class="job-row-deadline">📅 Apply by ' + esc(fmtDate(j.deadline)) + "</span>"
        : '<span class="job-row-deadline job-row-open">Open until filled</span>';
      return (
        '<a class="job-row" href="' + esc(j.url) + '" target="_blank" rel="noopener">' +
          '<span class="job-row-main">' +
            '<span class="job-row-title">' + esc(j.title) + "</span>" +
            '<span class="job-row-org">' + esc(j.org) + ' · <em>via ' + esc(j.source) + "</em></span>" +
          "</span>" +
          '<span class="job-row-side">' +
            badge + deadlineTxt +
            '<span class="job-row-apply">Apply →</span>' +
          "</span>" +
        "</a>"
      );
    }).join("") + "</div>";
  }

  function setStatus(data) {
    if (!statusEl) return;
    var okSources = (data.sources || []).filter(function (s) { return s.status === "ok"; });
    var when = data.updatedAt ? new Date(data.updatedAt) : null;
    var whenTxt = when && !isNaN(when.getTime())
      ? when.toLocaleDateString("en-GB", { day: "numeric", month: "short" }) + ", " +
        when.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
      : "";
    if (allJobs.length) {
      statusEl.textContent = allJobs.length + " live listing" + (allJobs.length === 1 ? "" : "s") +
        (okSources.length ? " from " + okSources.map(function (s) { return s.label; }).join(" & ") : "") +
        (whenTxt ? " · updated " + whenTxt : "") + (data.stale ? " (cached)" : "");
    } else {
      statusEl.textContent = "Live feeds are quiet right now — they refresh automatically.";
    }
  }

  fetch("/api/jobs", { cache: "no-store" })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (data) {
      if (!data) throw new Error("bad response");
      allJobs = (data.jobs || []).slice();
      // nursing/midwifery roles first, then soonest deadline (no-deadline last)
      allJobs.sort(function (a, b) {
        if (!!b.nursing - !!a.nursing) return (!!b.nursing) - (!!a.nursing);
        var da = a.deadline ? Date.parse(a.deadline) : Infinity;
        var db = b.deadline ? Date.parse(b.deadline) : Infinity;
        return da - db;
      });
      setStatus(data);
      render();
    })
    .catch(function () {
      allJobs = [];
      if (statusEl) statusEl.textContent = "Couldn't reach the live feed — the sources below always work.";
      render();
    });

  if (searchEl) {
    searchEl.addEventListener("input", function () {
      query = searchEl.value.trim().toLowerCase();
      render();
    });
  }
  if (chipRow) {
    chipRow.addEventListener("click", function (e) {
      var btn = e.target.closest(".jobs-chip");
      if (!btn) return;
      chipRow.querySelectorAll(".jobs-chip").forEach(function (c) { c.classList.remove("is-on"); });
      btn.classList.add("is-on");
      activeQual = btn.getAttribute("data-qual");
      render();
    });
  }
})();
