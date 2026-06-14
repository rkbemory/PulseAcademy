/* Pulse for Nurses — minimal service worker.
   Strategy: network-first for page navigations (so new/updated pages always load
   and never get stuck on a stale cache), cache-first for static assets, and
   network-first for the API. Bumps CACHE_NAME on every meaningful update. */

const CACHE_NAME = "pulse-v2.34.0";
const PRECACHE = [
  "./",
  "index.html",
  "msn.html",
  "post-basic.html",
  "rn.html",
  "nclex.html",
  "books.html",
  "jobs.html",
  "calculators.html",
  "tests.html",
  "quiz.html",
  "results.html",
  "topic.html",
  "thanks.html",
  "feedback.html",
  "reset.html",
  "admin.html",
  "styles.css",
  "scripts.js",
  "quiz-engine.js",
  "jobs.js",
  "calc.js",
  "auth.js",
  "admin.js",
  "data/pulse-core.js",
  "data/auth-config.js",
  "data/msn.js",
  "data/post-basic.js",
  "data/rn.js",
  "data/nclex.js",
  "data/pulse-loader.js",
  "pulse-icon.png",
  "pulse-social.png",
  "manifest.webmanifest"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // Use individual addAll with skip-on-error — Pages serves redirects on root paths.
      return Promise.all(
        PRECACHE.map(function (url) {
          return cache.add(url).catch(function () { /* skip 404s silently */ });
        })
      );
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  // Only handle GET — never cache POST/PUT/DELETE
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Never cache the visitor-counter API or anything under /api/ or /.netlify/
  // — must always be a fresh fetch to reflect the current total.
  if (
    url.pathname.startsWith("/api/") ||
    url.pathname.startsWith("/.netlify/") ||
    url.pathname.includes("admin")
  ) {
    event.respondWith(fetch(event.request).catch(function () {
      return caches.match(event.request);
    }));
    return;
  }

  // Same-origin PAGE NAVIGATIONS: network-first so new/updated pages always load.
  // Falls back to the cached page (or home) only when the network is unavailable.
  if (url.origin === location.origin && event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).then(function (response) {
        if (response && response.status === 200 && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      }).catch(function () {
        return caches.match(event.request).then(function (cached) {
          return cached || caches.match("index.html");
        });
      })
    );
    return;
  }

  // Same-origin CSS / JS: network-first so design and logic updates appear
  // immediately after a deploy (cache is only a fallback when offline).
  if (url.origin === location.origin && /\.(css|js)$/.test(url.pathname)) {
    event.respondWith(
      fetch(event.request).then(function (response) {
        if (response && response.status === 200 && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      }).catch(function () { return caches.match(event.request); })
    );
    return;
  }

  // Other same-origin assets (images, fonts, icons): cache-first for speed
  // — these rarely change, so serving them from cache is safe and fast.
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then(function (cached) {
        if (cached) return cached;
        return fetch(event.request).then(function (response) {
          if (response && response.status === 200 && response.type === "basic") {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
          }
          return response;
        });
      })
    );
    return;
  }

  // Cross-origin (Google Fonts, etc.): network-first with cache fallback
  event.respondWith(
    fetch(event.request).then(function (response) {
      if (response && response.status === 200) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, copy);
        });
      }
      return response;
    }).catch(function () {
      return caches.match(event.request);
    })
  );
});

self.addEventListener("message", function (event) {
  if (event.data === "skipWaiting") self.skipWaiting();
});
