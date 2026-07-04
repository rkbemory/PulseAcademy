/* Pulse for Nurses — free AI IELTS Writing evaluation (Cloudflare Pages Function).
   Route: /api/ielts-eval
     GET  ?action=status -> { enabled }            (client shows/hides the button)
     POST { task, prompt, essay }                  -> band estimate JSON

   Model: Google Gemini free tier. The key lives ONLY here, as the Pages
   environment variable `GEMINI_API_KEY` (Settings -> Environment variables).
   Until the key is set, status reports enabled:false and the site behaves
   exactly as before — the evaluate button simply never appears.

   Rate limits (protects the ~1,500-requests/day free tier):
     - per visitor:  4 evaluations per UTC day  (KV, keyed by IP)
     - whole site :  1,200 evaluations per UTC day (safety headroom)
   Uses the same PULSE_KV namespace as the visitor counter; if the binding
   is ever absent the function still works, just without server-side limits. */

const MODEL_DEFAULT = "gemini-2.0-flash";
const PER_IP_DAILY = 4;
const GLOBAL_DAILY = 1200;

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store, max-age=0",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function res(obj, status) {
  return new Response(JSON.stringify(obj), { status: status || 200, headers });
}
function todayUtc() { return new Date().toISOString().slice(0, 10); }
function words(s) { return (String(s || "").trim().match(/\S+/g) || []).length; }
function halfBand(n) {
  n = Number(n);
  if (!Number.isFinite(n)) return null;
  return Math.max(1, Math.min(9, Math.round(n * 2) / 2));
}

function rubricPrompt(task, taskPrompt, essay) {
  const isT1 = task === "t1";
  const crit1 = isT1 ? "Task Achievement" : "Task Response";
  return [
    "You are a certified IELTS Academic Writing examiner. Assess the candidate essay below strictly against the official IELTS Writing band descriptors.",
    "",
    "TASK TYPE: Academic Writing " + (isT1 ? "Task 1 (report on visual data / process, minimum 150 words)" : "Task 2 (essay, minimum 250 words)"),
    "TASK PROMPT GIVEN TO THE CANDIDATE:",
    taskPrompt,
    "",
    "CANDIDATE ESSAY:",
    essay,
    "",
    "Score each of the four criteria from 1.0 to 9.0 in half-band steps:",
    "1. " + crit1 + " — does it fully address the task" + (isT1 ? ", give a clear overview and select key features?" : ", present a clear position developed with support?"),
    "2. Coherence and Cohesion — organisation, paragraphing, linking.",
    "3. Lexical Resource — range, precision, collocation, spelling.",
    "4. Grammatical Range and Accuracy — structures, punctuation, errors.",
    "Apply the under-length penalty if the essay is below the minimum word count. Judge only what is written; be fair but rigorous, like a real examiner.",
    "",
    "Respond with ONLY a JSON object, no other text, exactly this shape:",
    '{"taskResponse":{"band":6.5,"note":"one concise sentence"},"coherence":{"band":6.0,"note":"one concise sentence"},"lexical":{"band":6.0,"note":"one concise sentence"},"grammar":{"band":5.5,"note":"one concise sentence"},"strengths":["short point","short point"],"improvements":["specific, actionable point","specific, actionable point","specific, actionable point"]}'
  ].join("\n");
}

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
  const url = new URL(request.url);

  if (request.method === "GET") {
    // status probe for the client
    return res({ enabled: !!key, perDay: PER_IP_DAILY });
  }
  if (request.method !== "POST") return res({ error: "method" }, 405);
  if (!key) return res({ error: "not-configured" }, 503);

  let body;
  try { body = await request.json(); } catch (e) { return res({ error: "bad-json" }, 400); }
  const task = body.task === "t2" ? "t2" : "t1";
  const taskPrompt = String(body.prompt || "").slice(0, 1500);
  const essay = String(body.essay || "").slice(0, 9000);
  const wc = words(essay);
  if (wc < 40) return res({ error: "too-short", words: wc }, 400);
  if (!taskPrompt) return res({ error: "no-prompt" }, 400);

  // ---- rate limits (KV optional) ----
  const kv = env.PULSE_KV;
  const day = todayUtc();
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const g = await bumpLimit(kv, "ieltsEval:g:" + day, GLOBAL_DAILY, 172800);
  if (!g.ok) return res({ error: "site-limit" }, 429);
  const p = await bumpLimit(kv, "ieltsEval:ip:" + ip + ":" + day, PER_IP_DAILY, 172800);
  if (!p.ok) return res({ error: "daily-limit", perDay: PER_IP_DAILY }, 429);

  // ---- call Gemini ----
  const model = (env.GEMINI_MODEL || MODEL_DEFAULT);
  const gUrl = "https://generativelanguage.googleapis.com/v1beta/models/" + model +
    ":generateContent?key=" + encodeURIComponent(key);
  let gRes, gData;
  try {
    gRes = await fetch(gUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: rubricPrompt(task, taskPrompt, essay) }] }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 900, responseMimeType: "application/json" }
      })
    });
    gData = await gRes.json();
  } catch (e) {
    return res({ error: "upstream", detail: String((e && e.message) || e) }, 502);
  }
  if (!gRes.ok) {
    return res({ error: "upstream", status: gRes.status, detail: gData && gData.error && gData.error.message }, 502);
  }

  // ---- parse the model's JSON ----
  let text = "";
  try { text = gData.candidates[0].content.parts.map(p2 => p2.text || "").join(""); } catch (e) {}
  let out = null;
  try { out = JSON.parse(text); }
  catch (e) {
    const m = text.match(/\{[\s\S]*\}/);
    if (m) { try { out = JSON.parse(m[0]); } catch (e2) {} }
  }
  const tr = out && out.taskResponse, co = out && out.coherence, le = out && out.lexical, gr = out && out.grammar;
  const b1 = halfBand(tr && tr.band), b2 = halfBand(co && co.band), b3 = halfBand(le && le.band), b4 = halfBand(gr && gr.band);
  if (b1 == null || b2 == null || b3 == null || b4 == null) {
    return res({ error: "parse", detail: "model returned an unexpected format — please try again" }, 502);
  }
  // Overall = mean of the four, rounded to the nearest half band (.25 rounds up)
  const overall = Math.round(((b1 + b2 + b3 + b4) / 4) * 2) / 2;

  const clean = a => Array.isArray(a) ? a.slice(0, 5).map(s => String(s).slice(0, 220)) : [];
  return res({
    ok: true,
    task, words: wc, overall,
    criteria: [
      { name: task === "t1" ? "Task Achievement" : "Task Response", band: b1, note: String((tr && tr.note) || "").slice(0, 220) },
      { name: "Coherence & Cohesion", band: b2, note: String((co && co.note) || "").slice(0, 220) },
      { name: "Lexical Resource", band: b3, note: String((le && le.note) || "").slice(0, 220) },
      { name: "Grammatical Range & Accuracy", band: b4, note: String((gr && gr.note) || "").slice(0, 220) }
    ],
    strengths: clean(out.strengths),
    improvements: clean(out.improvements),
    left: p.left
  });
}
