/* Pulse for Nurses — visitor counter (Netlify Function).
   GET  /api/visit?action=read       → returns current total
   GET  /api/visit?action=increment  → atomically +1, returns new total
   Storage: Netlify Blobs (a key/value store on your Netlify project).
   The blob is named "pulse-stats" and the key "totalVisits". */

import { getStore } from "@netlify/blobs";

const STORE_NAME = "pulse-stats";
const TOTAL_KEY  = "totalVisits";

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store, max-age=0",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export default async function handler(request) {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

  const url = new URL(request.url);
  const action = (url.searchParams.get("action") || "read").toLowerCase();

  try {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });
    const raw = await store.get(TOTAL_KEY);
    let total = parseInt(raw, 10);
    if (!Number.isFinite(total) || total < 0) total = 0;

    if (action === "increment") {
      total += 1;
      await store.set(TOTAL_KEY, String(total));
    }

    return new Response(JSON.stringify({ total, action }), { status: 200, headers });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "counter unavailable", detail: String(err && err.message || err) }),
      { status: 500, headers }
    );
  }
}

export const config = { path: "/.netlify/functions/visit" };
