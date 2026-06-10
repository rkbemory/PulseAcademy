/* Pulse for Nurses — minimal service worker.
   Strategy: cache-first for same-origin assets, network-first for everything else.
   Bumps CACHE_NAME on every meaningful update to retire stale entries. */

const CACHE_NAME = "pulse-v2.1.0";
const PRECACHE = [
  "./",
  "index.html",
  "msn.html",
  "post-basic.html",
  "rn.html",
  "books.html",
  "tests.html",
  "quiz.html",
  "results.html",
  "topic.html",
  "thanks.html",
  "feedback.html",
  "admin.html",
  "styles.css",
  "scripts.js",
  "quiz-engine.js",
  "admin.js",
  "data/pulse-core.js",
  "data/msn.js",
  "data/post-basic.js",
  "data/rn.js",
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

  // Same-origin: cache-first
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(event.request).then(function (cached) {
        if (cached) return cached;
        return fetch(event.request).then(function (response) {
          // Only cache successful, basic responses
          if (response && response.status === 200 && response.type === "basic") {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(event.request, copy);
            });
          }
          return response;
        }).catch(function () {
          // Network failed and not in cache — fall back to home page for nav requests
          if (event.request.mode === "navigate") {
            return caches.match("index.html");
          }
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
