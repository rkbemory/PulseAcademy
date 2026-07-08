/* Pulse for Nurses — "Ask Pulse" AI study tutor (Cloudflare Pages Function).
   Route: /api/ask
     GET  ?action=status -> { enabled, perDay }
     POST { messages:[{role:'user'|'model', text}] } -> { ok, answer, left }

   Model: Google Gemini free tier (key = env GEMINI_API_KEY, server-only).
   Uses gemini-2.5-flash-lite by default for higher free daily volume; override
   with env GEMINI_MODEL_ASK. Dormant-safe: without the key, status reports
   enabled:false and the chat UI stays hidden.

   Guardrails: it is a STUDY aid for nursing exams — not personal medical advice.
   Rate limits (KV): 20 messages/visitor/UTC-day + 1500/day site cap. */

const MODEL_DEFAULT = "gemini-2.5-flash-lite";
const PER_IP_DAILY = 20;
const GLOBAL_DAILY = 1500;
const MAX_TURNS = 10;         // keep only the last N turns of context

const SYSTEM = [
  "You are \"Pulse\", a friendly, expert nursing tutor for Bangladeshi nurses and nursing students who use pulsefornurses.com to prepare for exams (BNMC RN licensing, MSN & Post-Basic admission, NCLEX-RN, IELTS) and diploma/B.Sc. coursework.",
  "",
  "YOUR JOB: help the learner UNDERSTAND nursing and health-science concepts, explain why an exam answer is right or wrong, define terms, compare conditions, and give memory tips. Be accurate, clear and concise.",
  "",
  "STYLE:",
  "- Answer directly first, then briefly explain the reasoning.",
  "- Use short paragraphs and bullet points; bold key terms with **asterisks**.",
  "- Exam-focused and practical. Keep most answers under ~180 words unless asked to go deeper.",
  "- Plain English by default; you may add a short Bangla gloss of a key term if it helps, but do not translate whole answers unless asked.",
  "",
  "SAFETY — very important:",
  "- You are a STUDY aid, NOT a doctor. Do NOT give personal medical advice, diagnoses, or treatment plans for a real patient or the user's own health.",
  "- If someone describes a real, urgent personal or patient emergency, briefly tell them to seek qualified in-person medical care / follow local protocols, and do not attempt to manage it.",
  "- When giving drug doses or normal values, present them as standard reference/teaching values and remind the learner to always verify against current local guidelines and the prescription.",
  "- If you are unsure or a question is outside nursing/health-science study, say so honestly rather than inventing facts. Never fabricate references, statistics, or guideline numbers.",
  "- Politely decline requests that are not about learning nursing/health science or exam prep."
].join("\n");

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store, max-age=0",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};
function res(obj, status) { return new Response(JSON.stringify(obj), { status: status || 200, headers }); }
function todayUtc() { return new Date().toISOString().slice(0, 10); }

async function bumpLimit(kv, key, max, ttl) {
  if (!kv) return { ok: true, left: max };
  const cur = parseInt((await kv.get(key)) || "0", 10) || 0;
  if (cur >= max) return { ok: false, left: 0 };
  await kv.put(key, String(cur + 1), { expirationTtl: ttl });
  return { ok: true, left: max - cur - 1 };
}

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

  const key = env && env.GEMINI_API_KEY;
  if (request.method === "GET") return res({ enabled: !!key, perDay: PER_IP_DAILY });
  if (request.method !== "POST") return res({ error: "method" }, 405);
  if (!key) return res({ error: "not-configured" }, 503);

  let body;
  try { body = await request.json(); } catch (e) { return res({ error: "bad-json" }, 400); }
  let msgs = Array.isArray(body.messages) ? body.messages : [];
  // sanitise + clamp
  msgs = msgs.filter(function (m) { return m && (m.role === "user" || m.role === "model") && typeof m.text === "string" && m.text.trim(); })
    .slice(-MAX_TURNS)
    .map(function (m) { return { role: m.role, text: m.text.slice(0, 2000) }; });
  if (!msgs.length || msgs[msgs.length - 1].role !== "user") return res({ error: "no-question" }, 400);

  // ---- rate limits ----
  const kv = env.PULSE_KV, day = todayUtc();
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const g = await bumpLimit(kv, "ask:g:" + day, GLOBAL_DAILY, 172800);
  if (!g.ok) return res({ error: "site-limit" }, 429);
  const p = await bumpLimit(kv, "ask:ip:" + ip + ":" + day, PER_IP_DAILY, 172800);
  if (!p.ok) return res({ error: "daily-limit", perDay: PER_IP_DAILY }, 429);

  // ---- call Gemini (retry once on transient cold-start / 5xx / empty) ----
  const model = env.GEMINI_MODEL_ASK || MODEL_DEFAULT;
  const url = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent";
  const contents = msgs.map(function (m) { return { role: m.role, parts: [{ text: m.text }] }; });
  const payload = JSON.stringify({
    systemInstruction: { parts: [{ text: SYSTEM }] },
    contents: contents,
    generationConfig: { temperature: 0.4, maxOutputTokens: 900, thinkingConfig: { thinkingBudget: 0 } },
    safetySettings: [
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" },
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" }
    ]
  });

  let text = "", quota429 = false, lastDetail = "";
  for (let attempt = 0; attempt < 2; attempt++) {
    let gRes, gData;
    try {
      gRes = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": key }, body: payload });
      gData = await gRes.json();
    } catch (e) { lastDetail = String((e && e.message) || e); continue; }   // network blip → retry
    if (gRes.status === 429) { quota429 = true; break; }                    // real quota → stop
    if (!gRes.ok) { lastDetail = (gData && gData.error && gData.error.message) || ("http " + gRes.status); continue; }
    try { text = gData.candidates[0].content.parts.map(function (p2) { return p2.text || ""; }).join(""); } catch (e) {}
    if (text) break;
    lastDetail = (gData && gData.candidates && gData.candidates[0] && gData.candidates[0].finishReason) || "empty";
  }

  if (quota429) return res({ error: "site-limit" }, 429);
  if (!text) return res({ error: "upstream", detail: lastDetail || "no answer" }, 502);
  return res({ ok: true, answer: text.trim(), left: p.left });
}
