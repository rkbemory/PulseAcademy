/* Pulse for Nurses — free AI IELTS Speaking evaluation (Cloudflare Pages Function).
   Route: /api/speaking-eval
     GET  ?action=status -> { enabled }
     POST { parts:[{ part:1|2|3, question, audio(base64), mime }] } -> band JSON

   The candidate records Part 1 / Part 2 / Part 3 aloud in the browser; the clips
   (16 kHz mono WAV) are sent here and forwarded to Google Gemini (audio input),
   which transcribes and scores the four official IELTS Speaking criteria. The key
   lives ONLY here as the Pages environment variable GEMINI_API_KEY.

   Rate limits (protects the free tier — Speaking uses ~3x the tokens of Writing):
     - per visitor:  4 evaluations / UTC day
     - whole site :  400 evaluations / UTC day
   Uses the same PULSE_KV namespace; without it, limits are simply skipped. */

const MODEL_DEFAULT = "gemini-2.5-flash";   // supports audio input
const PER_IP_DAILY = 4;
const GLOBAL_DAILY = 400;
const MAX_TOTAL_AUDIO_B64 = 16 * 1024 * 1024;   // ~16 MB of base64 across all clips (Gemini inline cap safety)

const ALLOW_ORIGINS = ["https://pulsefornurses.com", "https://www.pulsefornurses.com"];
function originInfo(request) {
  const o = request.headers.get("Origin") || "";
  if (!o) return { origin: "", blocked: false };
  if (ALLOW_ORIGINS.indexOf(o) !== -1) return { origin: o, blocked: false };
  if (/^https:\/\/[a-z0-9-]+\.pages\.dev$/.test(o)) return { origin: o, blocked: false };
  return { origin: o, blocked: true };
}
function corsHeaders(origin) {
  return {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store, max-age=0",
    "Access-Control-Allow-Origin": origin || ALLOW_ORIGINS[0],
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}
function todayUtc() { return new Date().toISOString().slice(0, 10); }
function halfBand(n) {
  n = Number(n);
  if (!Number.isFinite(n)) return null;
  return Math.max(1, Math.min(9, Math.round(n * 2) / 2));
}
async function bumpLimit(kv, key, max, ttl) {
  if (!kv) return { ok: true, left: max };
  const cur = parseInt((await kv.get(key)) || "0", 10) || 0;
  if (cur >= max) return { ok: false, left: 0 };
  await kv.put(key, String(cur + 1), { expirationTtl: ttl });
  return { ok: true, left: max - cur - 1 };
}

/* Paraphrased rubric of the four public IELTS Speaking criteria (not the official
   descriptor text). Gemini scores the candidate's audio against these. */
const RUBRIC = [
  "You are an experienced IELTS Speaking examiner. You will receive a candidate's spoken answers to an IELTS Speaking test in up to three parts:",
  "  Part 1 = short personal interview questions; Part 2 = a long turn (~1-2 minutes) from a cue card; Part 3 = a two-way discussion of abstract questions.",
  "LISTEN to each audio clip and assess the candidate's spoken English on the four IELTS Speaking criteria, each on the 1-9 band scale (use half bands, e.g. 6.5):",
  "1) Fluency & coherence — speech rate and continuity, hesitation and self-correction, linking of ideas with discourse markers, and coherent topic development.",
  "2) Lexical resource — range, precision and appropriacy of vocabulary, paraphrase, collocation and less-common/idiomatic language across topics.",
  "3) Grammatical range & accuracy — range of simple and complex structures, sentence formation, and the frequency and communicative effect of errors.",
  "4) Pronunciation — overall intelligibility and use of pronunciation features (individual sounds, word and sentence stress, rhythm, intonation). Judge pronunciation ONLY from the audio.",
  "The OVERALL band is the mean of the four criteria rounded to the nearest half band.",
  "Be fair and calibrated to real IELTS standards — do not inflate. If a clip is silent, too short, or unintelligible, score conservatively and note it.",
  "Return ONLY valid JSON in exactly this shape (no markdown):",
  '{"overall":number,"criteria":{"fluency":{"band":number,"note":string},"lexical":{"band":number,"note":string},"grammar":{"band":number,"note":string},"pronunciation":{"band":number,"note":string}},',
  '"parts":[{"part":number,"transcript":string,"note":string}],"strengths":[string,string,string],"improvements":[string,string,string],"comment":string}',
  "Keep each note/strength/improvement under 200 characters and specific (quote a word or phrase from the candidate where useful). Transcript = a faithful transcription of what the candidate actually said for that part."
].join("\n");

export async function onRequest(context) {
  const { request, env } = context;
  const oi = originInfo(request);
  const headers = corsHeaders(oi.origin);
  const res = function (obj, status) { return new Response(JSON.stringify(obj), { status: status || 200, headers }); };
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

  const key = env && env.GEMINI_API_KEY;
  if (request.method === "GET") return res({ enabled: !!key, perDay: PER_IP_DAILY });
  if (request.method !== "POST") return res({ error: "method" }, 405);
  if (oi.blocked) return res({ error: "forbidden-origin" }, 403);
  if (!key) return res({ error: "not-configured" }, 503);

  let body;
  try { body = await request.json(); } catch (e) { return res({ error: "bad-json" }, 400); }
  let parts = Array.isArray(body.parts) ? body.parts : [];
  parts = parts.filter(function (p) {
    return p && (p.part === 1 || p.part === 2 || p.part === 3) && typeof p.audio === "string" && p.audio.length > 500;
  }).slice(0, 3);
  if (!parts.length) return res({ error: "no-audio" }, 400);
  const totalB64 = parts.reduce(function (s, p) { return s + p.audio.length; }, 0);
  if (totalB64 > MAX_TOTAL_AUDIO_B64) return res({ error: "too-large" }, 413);

  // ---- rate limits ----
  const kv = env.PULSE_KV, day = todayUtc();
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const g = await bumpLimit(kv, "spkEval:g:" + day, GLOBAL_DAILY, 172800);
  if (!g.ok) return res({ error: "site-limit" }, 429);
  const p = await bumpLimit(kv, "spkEval:ip:" + ip + ":" + day, PER_IP_DAILY, 172800);
  if (!p.ok) return res({ error: "daily-limit", perDay: PER_IP_DAILY }, 429);

  // ---- build Gemini request: rubric + each part's question text then its audio ----
  const partName = { 1: "Part 1 (interview)", 2: "Part 2 (long turn / cue card)", 3: "Part 3 (discussion)" };
  const contentParts = [{ text: RUBRIC }];
  parts.sort(function (a, b) { return a.part - b.part; });
  parts.forEach(function (pt) {
    contentParts.push({ text: "\n=== " + partName[pt.part] + " ===\nPrompt: " + String(pt.question || "").slice(0, 800) + "\nCandidate's spoken answer follows:" });
    contentParts.push({ inlineData: { mimeType: (pt.mime || "audio/wav"), data: pt.audio } });
  });

  const model = env.GEMINI_MODEL_SPEAKING || MODEL_DEFAULT;
  const gUrl = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent";
  let gRes, gData;
  try {
    gRes = await fetch(gUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        contents: [{ parts: contentParts }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 1600, responseMimeType: "application/json", thinkingConfig: { thinkingBudget: 0 } }
      })
    });
    gData = await gRes.json();
  } catch (e) {
    return res({ error: "upstream", detail: String((e && e.message) || e) }, 502);
  }
  if (gRes.status === 429) return res({ error: "site-limit" }, 429);
  if (!gRes.ok) return res({ error: "upstream", status: gRes.status, detail: gData && gData.error && gData.error.message }, 502);

  let text = "";
  try { text = gData.candidates[0].content.parts.map(function (x) { return x.text || ""; }).join(""); } catch (e) {}
  let out = null;
  try { out = JSON.parse(text); }
  catch (e) { const m = text.match(/\{[\s\S]*\}/); if (m) { try { out = JSON.parse(m[0]); } catch (e2) {} } }

  const c = out && out.criteria;
  const bF = halfBand(c && c.fluency && c.fluency.band);
  const bL = halfBand(c && c.lexical && c.lexical.band);
  const bG = halfBand(c && c.grammar && c.grammar.band);
  const bP = halfBand(c && c.pronunciation && c.pronunciation.band);
  if (bF == null || bL == null || bG == null || bP == null) {
    return res({ error: "parse", detail: "model returned an unexpected format — please try again" }, 502);
  }
  const overall = Math.round(((bF + bL + bG + bP) / 4) * 2) / 2;
  const clean = function (a) { return Array.isArray(a) ? a.slice(0, 5).map(function (s) { return String(s).slice(0, 220); }) : []; };
  const partsOut = Array.isArray(out.parts) ? out.parts.slice(0, 3).map(function (x) {
    return { part: Number(x.part) || 0, transcript: String(x.transcript || "").slice(0, 1600), note: String(x.note || "").slice(0, 220) };
  }) : [];

  return res({
    ok: true,
    overall: overall,
    criteria: [
      { name: "Fluency & coherence", band: bF, note: String((c.fluency && c.fluency.note) || "").slice(0, 220) },
      { name: "Lexical resource", band: bL, note: String((c.lexical && c.lexical.note) || "").slice(0, 220) },
      { name: "Grammatical range & accuracy", band: bG, note: String((c.grammar && c.grammar.note) || "").slice(0, 220) },
      { name: "Pronunciation", band: bP, note: String((c.pronunciation && c.pronunciation.note) || "").slice(0, 220) }
    ],
    parts: partsOut,
    strengths: clean(out.strengths),
    improvements: clean(out.improvements),
    comment: String((out && out.comment) || "").slice(0, 300),
    left: p.left
  });
}
