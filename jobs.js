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

  function render() {
    var visible = allJobs.filter(matches);
    if (!allJobs.length) {
      grid.innerHTML =
        '<div class="jobs-empty">' +
          '<span aria-hidden="true">🗂️</span>' +
          '<p><strong>No live feed listings right now.</strong><br>' +
          'New openings appear here automatically. Meanwhile, the trusted sources below always have the latest posts — especially Bdjobs and the government portals.</p>' +
        '</div>';
      return;
    }
    if (!visible.length) {
      grid.innerHTML =
        '<div class="jobs-empty"><span aria-hidden="true">🔍</span>' +
        '<p><strong>No listings match your search.</strong><br>Try clearing the search or choosing “All”.</p></div>';
      return;
    }
    grid.innerHTML = visible.map(function (j) {
      var dl = daysUntil(j.deadline);
      var badge = "";
      if (dl !== null && dl <= 7 && dl >= 0) badge = '<span class="job-badge job-badge-soon">⏳ Closing soon</span>';
      var deadlineLine = j.deadline
        ? '<span class="job-meta-item">📅 Apply by ' + esc(fmtDate(j.deadline)) + "</span>"
        : "";
      return (
        '<article class="job-card">' +
          '<div class="job-card-top">' +
            '<span class="job-org">' + esc(j.org) + "</span>" + badge +
          "</div>" +
          '<h3 class="job-title">' + esc(j.title) + "</h3>" +
          '<div class="job-meta">' +
            '<span class="job-meta-item">📍 ' + esc(j.location || "Bangladesh") + "</span>" +
            deadlineLine +
            '<span class="job-meta-item job-via">via ' + esc(j.source) + "</span>" +
          "</div>" +
          '<a class="btn btn-primary job-apply" href="' + esc(j.url) + '" target="_blank" rel="noopener">View &amp; apply at source →</a>' +
        "</article>"
      );
    }).join("");
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
      // newest deadline-less last, soonest deadline first
      allJobs.sort(function (a, b) {
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
