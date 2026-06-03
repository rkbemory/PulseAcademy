/* ============================================================
   Pulse for Nurses — shared site scripts
   Mobile drawer · scroll header · reveal-on-scroll · counters · FAQ
   ============================================================ */

(function () {
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
      '<a href="books.html" class="' + activeFor("books.html") + '">📚 Books</a>',
      '<a href="tests.html?program=msn">📝 All Tests</a>',
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

    document.body.appendChild(drawer);
    document.body.appendChild(backdrop);

    const toggle = document.querySelector(".nav-toggle");
    if (!toggle) return;

    function close() {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      drawer.classList.remove("is-open");
      drawer.setAttribute("aria-hidden", "true");
      backdrop.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function open() {
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      drawer.classList.add("is-open");
      drawer.setAttribute("aria-hidden", "false");
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
        - Floating chip in bottom-right of every page.
        - Increments once per browser per UTC day.
        - Re-polls every 30s so the number ticks live.
     --------------------------------------------------------------- */
  function attachVisitorCounter() {
    // Skip on admin / preview surfaces
    if (location.pathname.includes("admin")) return;

    const chip = injectCounterChip();
    if (!chip) return;

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD UTC
    const lastVisit = localStorage.getItem("pulse:lastVisitDay");
    const shouldIncrement = lastVisit !== today;

    let lastShown = 0;
    function setCount(n, animate) {
      const span = chip.querySelector(".vc-count");
      if (!span) return;
      if (animate && n !== lastShown) animateCount(span, lastShown, n);
      else span.textContent = n.toLocaleString();
      lastShown = n;
      chip.classList.toggle("is-loaded", true);
    }

    function fetchCount(action) {
      return fetch("/api/visit?action=" + action, { cache: "no-store" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) { return data && typeof data.total === "number" ? data.total : null; })
        .catch(function () { return null; });
    }

    // Initial: increment once per day, otherwise just read.
    fetchCount(shouldIncrement ? "increment" : "read").then(function (n) {
      if (n == null) { chip.classList.add("is-error"); return; }
      if (shouldIncrement) localStorage.setItem("pulse:lastVisitDay", today);
      setCount(n, true);
    });

    // Poll every 30s (read only — no further increments)
    setInterval(function () {
      fetchCount("read").then(function (n) { if (n != null) setCount(n, true); });
    }, 30000);

    // Re-poll when tab becomes visible again (after being backgrounded)
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible") {
        fetchCount("read").then(function (n) { if (n != null) setCount(n, true); });
      }
    });
  }

  function injectCounterChip() {
    if (document.querySelector(".visitor-counter")) return document.querySelector(".visitor-counter");
    const el = document.createElement("button");
    el.type = "button";
    el.className = "visitor-counter";
    el.setAttribute("aria-label", "Total visitors to Pulse for Nurses");
    el.title = "Total visitors to Pulse for Nurses";
    el.innerHTML =
      '<span class="vc-icon" aria-hidden="true">👀</span>' +
      '<span class="vc-label">Visitors</span>' +
      '<span class="vc-count" aria-live="polite">—</span>';
    el.addEventListener("click", function () {
      // Tiny celebration tap — also nudges a fresh re-read
      fetch("/api/visit?action=read", { cache: "no-store" })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data && typeof data.total === "number") {
            const span = el.querySelector(".vc-count");
            if (span) animateCount(span, parseInt((span.textContent || "0").replace(/[^\d]/g, ""), 10) || 0, data.total);
          }
        })
        .catch(function () {});
    });
    document.body.appendChild(el);
    return el;
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
