/* ============================================================
   Pulse for Nurses — shared site scripts
   Mobile drawer · scroll header · reveal-on-scroll · counters · FAQ
   ============================================================ */

(function () {
  /* ---------------------------------------------------------------
     Google Analytics 4 (gtag.js) — loaded on every page from here.
     Skips localhost so local testing never pollutes the data.
     --------------------------------------------------------------- */
  (function initAnalytics() {
    var GA_ID = "G-9ZYS6JKEQ8";
    var host = location.hostname;
    if (host === "localhost" || host === "127.0.0.1" || host === "") return;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);

    // Cloudflare Web Analytics (cookieless) — runs alongside GA.
    var cf = document.createElement("script");
    cf.defer = true;
    cf.src = "https://static.cloudflareinsights.com/beacon.min.js";
    cf.setAttribute("data-cf-beacon", '{"token": "1cbd475365b846eabbe7746b90b8b6f8"}');
    document.head.appendChild(cf);
  })();

  /* ---------------------------------------------------------------
     0. Inject hamburger toggle into existing header
     --------------------------------------------------------------- */
  function injectToggle() {
    if (document.querySelector(".nav-toggle")) return;
    const inner = document.querySelector(".top-nav-inner");
    if (!inner) return;
    const btn = document.createElement("button");
    btn.className = "nav-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Open menu");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = "<span></span><span></span><span></span>";
    inner.appendChild(btn);
  }

  /* ---------------------------------------------------------------
     1. Inject mobile drawer + backdrop once per page
     --------------------------------------------------------------- */
  function injectDrawer() {
    if (document.querySelector(".nav-drawer")) return;

    // Try to mark the active link based on current pathname
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    function activeFor(href) {
      return path === href ? "is-active" : "";
    }

    const drawer = document.createElement("aside");
    drawer.className = "nav-drawer";
    drawer.setAttribute("aria-hidden", "true");
    drawer.innerHTML = [
      '<span class="nav-drawer-section">Programs</span>',
      '<a href="msn.html" class="' + activeFor("msn.html") + '">🩺 MSN Admission</a>',
      '<a href="post-basic.html" class="' + activeFor("post-basic.html") + '">📘 Post Basic BSc</a>',
      '<a href="rn.html" class="' + activeFor("rn.html") + '">🎓 BNMC RN</a>',
      '<div class="nav-drawer-sep"></div>',
      '<span class="nav-drawer-section">Explore</span>',
      '<a href="nclex.html" class="' + activeFor("nclex.html") + '">🌎 NCLEX-RN</a>',
      '<a href="index.html#consult">🧭 Consultation <span class="footer-soon">soon</span></a>',
      '<a href="books.html" class="' + activeFor("books.html") + '">📚 Books</a>',
      '<a href="jobs.html" class="' + activeFor("jobs.html") + '">💼 Nursing Jobs</a>',
      '<a href="calculators.html" class="' + activeFor("calculators.html") + '">🧮 Calculators</a>',
      '<a href="tests.html?program=msn">📝 All Tests</a>',
      '<a href="feedback.html" class="' + activeFor("feedback.html") + '">💬 Feedback &amp; Support</a>',
      '<a href="admin.html" class="' + activeFor("admin.html") + '">🔒 Admin</a>',
      '<a href="quiz.html?program=msn&test=msn-mt-01" class="nav-drawer-cta">🎯 Try a Free Mock</a>',
      '<div class="nav-drawer-social">',
        '<a href="https://www.facebook.com/Pulsefornurses" target="_blank" rel="noopener">📘 Facebook</a>',
        '<a href="https://www.youtube.com/@pulsefornursesbd6887" target="_blank" rel="noopener">▶ YouTube</a>',
      '</div>'
    ].join("");

    const backdrop = document.createElement("div");
    backdrop.className = "nav-drawer-backdrop";
    backdrop.setAttribute("aria-hidden", "true");

    drawer.inert = true; // keep links unfocusable while hidden
    document.body.appendChild(drawer);
    document.body.appendChild(backdrop);

    const toggle = document.querySelector(".nav-toggle");
    if (!toggle) return;

    function close() {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      drawer.inert = true;
      backdrop.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function open() {
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
      drawer.inert = false;
      backdrop.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    toggle.addEventListener("click", function () {
      drawer.classList.contains("is-open") ? close() : open();
    });
    backdrop.addEventListener("click", close);
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) close();
    });
  }

  /* ---------------------------------------------------------------
     2. Header gets a small shadow once you scroll
     --------------------------------------------------------------- */
  function attachScrollHeader() {
    const header = document.querySelector("header.top-nav");
    if (!header) return;
    function update() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ---------------------------------------------------------------
     3. Reveal-on-scroll for cards
     --------------------------------------------------------------- */
  function attachReveal() {
    const selectors = [
      ".program-card", ".topic-card", ".test-card", ".model-card",
      ".why-card", ".premium-card", ".book-shelf-item", ".books-detail-card",
      ".about-card", ".faculty-card", ".testi-card", ".blog-card",
      ".dash-card", ".books-price-summary", ".bookstore-price-card"
    ];
    const targets = document.querySelectorAll(selectors.join(", "));
    if (!targets.length || !("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-revealed"); });
      return;
    }
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          // small stagger when several cards reveal at once
          setTimeout(function () { e.target.classList.add("is-revealed"); }, (i % 6) * 60);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    targets.forEach(function (t) {
      t.classList.add("reveal-on-scroll");
      obs.observe(t);
    });
  }

  /* ---------------------------------------------------------------
     4. Counters with data-count
     --------------------------------------------------------------- */
  function attachCounters() {
    const counters = document.querySelectorAll("[data-count]");
    if (!counters.length) return;
    const animate = function (el) {
      const target = +el.dataset.count;
      const duration = 1400;
      const start = performance.now();
      const tick = function (now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + "+";
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animate(e.target); obs.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { obs.observe(c); });
  }

  /* ---------------------------------------------------------------
     5. FAQ accordion
     --------------------------------------------------------------- */
  function attachFAQ() {
    document.querySelectorAll(".faq-item").forEach(function (item) {
      const q = item.querySelector(".faq-q");
      if (!q) return;
      q.addEventListener("click", function () { item.classList.toggle("open"); });
    });
  }

  /* ---------------------------------------------------------------
     6. Auto-set active state on top-nav-links by current page
     --------------------------------------------------------------- */
  function attachActiveLink() {
    const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    document.querySelectorAll(".top-nav-links a").forEach(function (a) {
      const href = (a.getAttribute("href") || "").split("?")[0].toLowerCase();
      if (href === path) a.classList.add("is-active");
    });
  }

  /* ---------------------------------------------------------------
     Init
     --------------------------------------------------------------- */
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }
  /* ---------------------------------------------------------------
     7. Visitor counter (Netlify Function + Blobs)
        - Floating chip in top-right of every page (below sticky header).
        - Shows Today + All-time totals.
        - Increments once per browser per UTC day.
        - Re-polls every 30s so the numbers tick live.
     --------------------------------------------------------------- */
  function attachVisitorCounter() {
    if (location.pathname.includes("admin")) return;

    // Raw "views" count every page load (a repeat visit counts again).
    // "Today" + "All time" still count once per browser per UTC day.
    const today = new Date().toISOString().slice(0, 10);
    const lastVisit = localStorage.getItem("pulse:lastVisitDay");
    const newDay = lastVisit !== today;
    // view = +1 to total views always; daily=1 also bumps Today + All-time once a day.
    const incAction = newDay ? "view&daily=1" : "view";

    // The stat chip is shown ONLY on the homepage (the initial display).
    const page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const isHome = page === "" || page === "index.html";

    function fetchCounts(action) {
      return fetch("/api/visit?action=" + action, { cache: "no-store" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (!data || typeof data.total !== "number") return null;
          return data;
        })
        .catch(function () { return null; });
    }

    // Always record the view (every page), so "total views" reflects the whole portal.
    const firstCall = fetchCounts(incAction);
    if (newDay) firstCall.then(function (d) { if (d) localStorage.setItem("pulse:lastVisitDay", today); });

    if (!isHome) return; // count silently elsewhere; only render the chip on the homepage

    const chip = injectCounterChip();
    if (!chip) return;

    firstCall.then(function (data) {
      if (!data) { chip.classList.add("is-error"); return; }
      updateChip(chip, data);
    });

    setInterval(function () {
      fetchCounts("read").then(function (data) { if (data) updateChip(chip, data); });
    }, 30000);

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        fetchCounts("read").then(function (data) { if (data) updateChip(chip, data); });
      }
    });
  }

  function injectCounterChip() {
    if (document.querySelector(".visitor-counter")) return document.querySelector(".visitor-counter");
    const el = document.createElement("button");
    el.type = "button";
    el.className = "visitor-counter";
    // No aria-label: the visible Today/All-time/Views text is the accessible name.
    el.title = "Today · All-time visitors · Total views";
    el.innerHTML =
      '<span class="vc-pulse" aria-hidden="true"></span>' +
      '<span class="vc-icon" aria-hidden="true">👀</span>' +
      '<span class="vc-stat">' +
        '<span class="vc-stat-label">Today</span>' +
        '<span class="vc-stat-value vc-today" aria-live="polite">—</span>' +
      '</span>' +
      '<span class="vc-divider" aria-hidden="true"></span>' +
      '<span class="vc-stat">' +
        '<span class="vc-stat-label">All time</span>' +
        '<span class="vc-stat-value vc-total" aria-live="polite">—</span>' +
      '</span>' +
      '<span class="vc-divider" aria-hidden="true"></span>' +
      '<span class="vc-stat">' +
        '<span class="vc-stat-label">Views</span>' +
        '<span class="vc-stat-value vc-views" aria-live="polite">—</span>' +
      '</span>';
    el.addEventListener("click", function () {
      fetch("/api/visit?action=read", { cache: "no-store" })
        .then(function (r) { return r.json(); })
        .then(function (data) { if (data) updateChip(el, data); })
        .catch(function () {});
    });
    document.body.appendChild(el);
    return el;
  }

  function parseIntSafe(str) {
    return parseInt(String(str || "0").replace(/[^\d]/g, ""), 10) || 0;
  }

  function updateChip(chip, data) {
    if (typeof data.today === "number") {
      const el = chip.querySelector(".vc-today");
      if (el) animateCount(el, parseIntSafe(el.textContent), data.today);
    }
    if (typeof data.total === "number") {
      const el = chip.querySelector(".vc-total");
      if (el) animateCount(el, parseIntSafe(el.textContent), data.total);
    }
    if (typeof data.views === "number") {
      const el = chip.querySelector(".vc-views");
      if (el) animateCount(el, parseIntSafe(el.textContent), data.views);
    }
    chip.classList.add("is-loaded");
    chip.classList.remove("is-error");
  }

  function animateCount(el, from, to) {
    if (from === to) { el.textContent = to.toLocaleString(); return; }
    const dur = 900;
    const start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(from + (to - from) * eased);
      el.textContent = val.toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------------------------------------------------------------
     8. Register service worker (PWA / offline support)
     --------------------------------------------------------------- */
  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;
    // Only register on HTTPS or localhost (browsers block SW on http)
    if (location.protocol !== "https:" && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") return;
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function (err) {
        // Quiet failure — site still works without it
        console.warn("Service worker registration failed:", err);
      });
    });
  }

  ready(function () {
    injectToggle();
    injectDrawer();
    attachScrollHeader();
    attachReveal();
    attachCounters();
    attachFAQ();
    attachActiveLink();
    attachVisitorCounter();
    registerServiceWorker();
  });
})();
