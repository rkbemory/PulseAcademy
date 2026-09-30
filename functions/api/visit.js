/* Pulse for Nurses — visitor counter (Cloudflare Pages Function).
   Route: /api/visit
     GET ?action=read         -> { total, today, views }
     GET ?action=view         -> +1 to raw total views (every page load)
     GET ?action=view&daily=1 -> also +1 to today + all-time (once per browser/day)
     GET ?action=increment    -> legacy: same as view&daily=1

   Storage: a Cloudflare KV namespace bound to this project as `PULSE_KV`.

   WRITE BUDGET (why this file looks the way it does)
   --------------------------------------------------
   Cloudflare's free tier allows 1,000 KV *writes* per day. The first version of
   this counter used three separate keys and wrote all three on a first-of-day
   visit, so a single visit could cost 3 writes. Crawlers made that far worse:
   a bot has no localStorage, so the page always thinks it is that browser's
   first visit today and sends `daily=1`. Every crawler hit therefore cost
   3 writes AND inflated "today"/"all time" with traffic that was never a person.
   On 2026-09-30 that exhausted the daily write quota, which in turn made the
   shared rate-limiter throw and took Ask Pulse down site-wide (HTTP 500).

   Three defences now keep writes inside the budget:
     1. BOT FILTER   — known crawlers are counted as nothing and never written.
     2. SINGLE KEY   — one JSON blob, so a counted visit costs 1 write, not 3.
     3. ORIGIN LOCK  — only our own pages may increment; reads stay public.
   Write failures are also swallowed, so a quota breach can never again take a
   page (or another endpoint) down. */

const STATS_KEY = "stats:v2";          // { total, views, date, today, w }
// Legacy keys — read once so existing totals carry over to the single blob.
const L_TOTAL = "totalVisits";
const L_DAILY = "dailyVisits";
const L_VIEWS = "totalViews";

/* Hard write budget. Cloudflare's free tier allows 1,000 KV writes per day for
   the WHOLE project, and the AI endpoints' rate limiters share that pool. This
   counter is the only high-volume writer, so it caps itself well below the
   limit and simply stops counting past the cap. That reserves the remainder for
   rate limiting, which is the thing that must never run out. `w` resets daily
   along with the rest of the blob. */
const WRITE_BUDGET = 600;

const ALLOW_ORIGINS = ["https://pulsefornurses.com", "https://www.pulsefornurses.com"];

function corsHeaders(origin) {
  return {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store, max-age=0",
    // Reads are public; writes are gated separately by isOwnSite() below.
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

function todayUtc() { return new Date().toISOString().slice(0, 10); }
function safeInt(v) { const n = parseInt(v, 10); return Number.isFinite(n) && n >= 0 ? n : 0; }

/* Counting only makes sense for our own pages. A crawler hitting the endpoint
   directly, or another site embedding it, sends no matching Origin/Referer. */
function isOwnSite(request) {
  const o = request.headers.get("Origin");
  if (o) return ALLOW_ORIGINS.indexOf(o) !== -1 || /^https:\/\/[a-z0-9-]+\.pages\.dev$/.test(o);
  const r = request.headers.get("Referer") || "";
  return ALLOW_ORIGINS.some(function (a) { return r.indexOf(a + "/") === 0 || r === a; }) ||
         /^https:\/\/[a-z0-9-]+\.pages\.dev\//.test(r);
}

/* Well-behaved crawlers identify themselves. This will never catch everything,
   but it removes the bulk of the inflation and the writes that came with it. */
const BOT_RE = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|vkshare|whatsapp|telegram|discord|slack|preview|monitor|uptime|pingdom|semrush|ahrefs|mj12|dotbot|petal|yandex|baidu|duckduck|archive|curl|wget|python-requests|okhttp|headless|lighthouse|gtmetrix|phantom|puppeteer|playwright/i;
function isBot(request) {
  const ua = request.headers.get("User-Agent") || "";
  if (!ua) return true;                       // no UA at all — not a real browser
  return BOT_RE.test(ua);
}

async function readStats(kv) {
  let s = null;
  try { s = await kv.get(STATS_KEY, { type: "json" }); } catch (e) { s = null; }
  if (s && typeof s === "object") {
    return { total: safeInt(s.total), views: safeInt(s.views), date: s.date || todayUtc(), today: safeInt(s.today), w: safeInt(s.w) };
  }
  // First run after the migration: fold the three legacy keys into one blob.
  let total = 0, views = 0, date = todayUtc(), today = 0;
  try {
    total = safeInt(await kv.get(L_TOTAL));
    views = safeInt(await kv.get(L_VIEWS));
    const d = await kv.get(L_DAILY, { type: "json" });
    if (d && typeof d === "object") { date = d.date || date; today = safeInt(d.count); }
  } catch (e) { /* fall through with zeros */ }
  return { total: total, views: views, date: date, today: today, w: 0 };
}

export async function onRequest(context) {
  const { request, env } = context;
  const origin = request.headers.get("Origin") || "";
  const headers = corsHeaders(ALLOW_ORIGINS.indexOf(origin) !== -1 ? origin : "*");
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

  const kv = env && env.PULSE_KV;
  if (!kv) {
    return new Response(
      JSON.stringify({ error: "counter unavailable", detail: "KV namespace PULSE_KV not bound" }),
      { status: 500, headers }
    );
  }

  const url = new URL(request.url);
  const action = (url.searchParams.get("action") || "read").toLowerCase();
  const daily1 = url.searchParams.get("daily") === "1";
  const today = todayUtc();

  try {
    const s = await readStats(kv);
    const sameDay = (s.date === today);
    let total = s.total, views = s.views;
    let todayCount = sameDay ? s.today : 0;
    let writes = sameDay ? s.w : 0;          // writes already spent today

    // Only our own pages, driven by a real browser, may increment the counter,
    // and only while this counter is still inside its own daily write budget.
    const wantsWrite = (action === "view" || action === "increment");
    const mayWrite = wantsWrite && isOwnSite(request) && !isBot(request) && writes < WRITE_BUDGET;
    const bumpDaily = mayWrite && (action === "increment" || daily1);

    if (mayWrite) {
      views += 1;
      if (bumpDaily) { total += 1; todayCount += 1; }
      writes += 1;
      // ONE write per counted visit. A failure here (e.g. the daily free-tier
      // write quota) must never surface as an error: the numbers simply hold
      // until the quota resets, and every other endpoint stays healthy.
      try {
        await kv.put(STATS_KEY, JSON.stringify({ total: total, views: views, date: today, today: todayCount, w: writes }));
      } catch (e) { /* quota exhausted — serve the current numbers, skip the write */ }
    }

    return new Response(
      JSON.stringify({ total: total, today: todayCount, views: views, action: action, serverDate: today }),
      { status: 200, headers }
    );
  } catch (err) {
    // Never fail the page over a counter: return the request as a no-op read.
    return new Response(
      JSON.stringify({ total: 0, today: 0, views: 0, action: action, serverDate: today, degraded: true }),
      { status: 200, headers }
    );
  }
}
