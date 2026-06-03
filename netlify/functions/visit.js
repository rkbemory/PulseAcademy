/* Pulse for Nurses — visitor counter (Netlify Function).
   GET  /api/visit?action=read       → returns { total, today }
   GET  /api/visit?action=increment  → +1 to both totals (with daily rollover)
   Storage: Netlify Blobs, store "pulse-stats".
     - totalVisits  : integer string
     - dailyVisits  : JSON { date: "YYYY-MM-DD", count: N }
*/

import { getStore } from "@netlify/blobs";

const STORE_NAME = "pulse-stats";
const TOTAL_KEY  = "totalVisits";
const DAILY_KEY  = "dailyVisits";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store, max-age=0",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function todayUtc() { return new Date().toISOString().slice(0, 10); }

function safeInt(v) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

export default async function handler(request) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

  const url = new URL(request.url);
  const action = (url.searchParams.get("action") || "read").toLowerCase();

  try {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });
    const today = todayUtc();

    let total = safeInt(await store.get(TOTAL_KEY));

    let daily = await store.get(DAILY_KEY, { type: "json" });
    if (!daily || typeof daily !== "object") daily = { date: today, count: 0 };

    // Stored daily.count is only "today" if its date matches today.
    let todayCount = (daily.date === today) ? safeInt(daily.count) : 0;

    if (action === "increment") {
      total += 1;
      if (daily.date === today) {
        daily = { date: today, count: safeInt(daily.count) + 1 };
      } else {
        daily = { date: today, count: 1 };
      }
      todayCount = daily.count;
      await Promise.all([
        store.set(TOTAL_KEY, String(total)),
        store.setJSON(DAILY_KEY, daily)
      ]);
    }

    return new Response(
      JSON.stringify({ total, today: todayCount, action, serverDate: today }),
      { status: 200, headers }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "counter unavailable", detail: String(err && err.message || err) }),
      { status: 500, headers }
    );
  }
}

export const config = { path: "/.netlify/functions/visit" };
