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
    if (!allJobs.length || !visible.length) {
      grid.innerHTML =
        '<div class="jobs-empty jobs-empty-slim"><p>' +
        (!allJobs.length
          ? "No feed listings right now — new icddr,b / UNICEF / NGO openings appear here automatically. The job sites below always have the latest posts."
          : "<strong>No listings match your search.</strong> Try clearing the search or choosing “All”.") +
        "</p></div>";
      return;
    }
    var rows = visible.map(function (j, i) {
      var dl = daysUntil(j.deadline);
      var soon = dl !== null && dl <= 7 && dl >= 0;
      return (
        "<tr" + (soon ? ' class="jt-soon"' : "") + ">" +
          '<td class="jt-sl">' + (i + 1) + "</td>" +
          '<td class="jt-post"><a href="' + esc(j.url) + '" target="_blank" rel="noopener">' + esc(j.title) + "</a></td>" +
          '<td class="jt-org">' + esc(j.org) + "</td>" +
          '<td class="jt-date">' + (j.posted ? esc(fmtDate(j.posted)) : "—") + "</td>" +
          '<td class="jt-date">' + (j.deadline ? esc(fmtDate(j.deadline)) + (soon ? ' <span class="job-badge job-badge-soon">⏳</span>' : "") : "Open") + "</td>" +
          '<td class="jt-link"><a class="jt-apply" href="' + esc(j.url) + '" target="_blank" rel="noopener">View →</a></td>' +
        "</tr>"
      );
    }).join("");
    grid.innerHTML =
      '<div class="job-table-wrap"><table class="job-table">' +
        "<thead><tr>" +
          '<th class="jt-sl">SL</th><th>Post Name</th><th>Organization</th><th>Post Date</th><th>Deadline</th><th class="jt-link">Link</th>' +
        "</tr></thead><tbody>" + rows + "</tbody></table></div>";
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
      statusEl.innerHTML = '<strong class="jobs-count">' + allJobs.length + " post" + (allJobs.length === 1 ? "" : "s") + " available today</strong>" +
        (okSources.length ? " · from " + okSources.map(function (s) { return s.label; }).join(" & ") : "") +
        (whenTxt ? " · updated " + whenTxt : "") + (data.stale ? " (cached)" : "");
    } else {
      statusEl.textContent = "0 posts in the feeds right now — they refresh automatically. The job sites below always have the latest.";
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
