/* Pulse for Nurses — visitor counter (Cloudflare Pages Function).
   Route: /api/visit  (Cloudflare maps functions/api/visit.js to this path)
     GET ?action=read         -> { total, today, views }
     GET ?action=view         -> +1 to raw total views (every page load)
     GET ?action=view&daily=1 -> also +1 to today + all-time (once per browser/day)
     GET ?action=increment    -> legacy: same as view&daily=1

   Storage: a Cloudflare KV namespace bound to this project as `PULSE_KV`.
   To enable it (one-time, in the Cloudflare dashboard):
     1. Workers & Pages -> KV -> Create a namespace (e.g. "pulse-stats").
     2. Your Pages project -> Settings -> Functions -> KV namespace bindings
        -> Add binding:  Variable name = PULSE_KV,  KV namespace = pulse-stats.
   If the binding is absent the counter simply returns a friendly error and the
   on-page chip hides itself — the rest of the site is unaffected. */

const TOTAL_KEY = "totalVisits";
const DAILY_KEY = "dailyVisits";
const VIEWS_KEY = "totalViews";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store, max-age=0",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function todayUtc() { return new Date().toISOString().slice(0, 10); }
function safeInt(v) { const n = parseInt(v, 10); return Number.isFinite(n) && n >= 0 ? n : 0; }

export async function onRequest(context) {
  const { request, env } = context;
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

  try {
    const today = todayUtc();
    let total = safeInt(await kv.get(TOTAL_KEY));
    let views = safeInt(await kv.get(VIEWS_KEY));

    let daily = await kv.get(DAILY_KEY, { type: "json" });
    if (!daily || typeof daily !== "object") daily = { date: today, count: 0 };
    let todayCount = (daily.date === today) ? safeInt(daily.count) : 0;

    const isView = action === "view";
    const bumpDaily = action === "increment" || (isView && daily1);
    const writes = [];

    if (isView || action === "increment") {
      views += 1;                          // raw view count — every page load
      writes.push(kv.put(VIEWS_KEY, String(views)));
    }
    if (bumpDaily) {
      total += 1;                          // all-time + today — once per browser/day
      daily = (daily.date === today)
        ? { date: today, count: safeInt(daily.count) + 1 }
        : { date: today, count: 1 };
      todayCount = daily.count;
      writes.push(kv.put(TOTAL_KEY, String(total)));
      writes.push(kv.put(DAILY_KEY, JSON.stringify(daily)));
    }
    if (writes.length) await Promise.all(writes);

    return new Response(
      JSON.stringify({ total, today: todayCount, views, action, serverDate: today }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "counter unavailable", detail: String((err && err.message) || err) }),
      { status: 500, headers }
    );
  }
}
