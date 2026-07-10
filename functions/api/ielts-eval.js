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

const MODEL_DEFAULT = "gemini-2.5-flash";   // 2.0-flash is off the free tier now; 2.5-flash grades better anyway
const PER_IP_DAILY = 8;
const GLOBAL_DAILY = 1200;

const ALLOW_ORIGINS = ["https://pulsefornurses.com", "https://www.pulsefornurses.com"];
// Reflect only an allowed browser Origin so another site can't spend our Gemini
// quota through its visitors. Same-origin / non-browser requests send no Origin
// and are never blocked; the KV rate limits remain the hard cap.
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
function words(s) { return (String(s || "").trim().match(/\S+/g) || []).length; }
function halfBand(n) {
  n = Number(n);
  if (!Number.isFinite(n)) return null;
  return Math.max(1, Math.min(9, Math.round(n * 2) / 2));
}

/* Condensed from the official IELTS Writing Band Descriptors (public, IELTS.org,
   updated May 2023). Bands 5-9 essences per criterion — the working range for
   almost all candidates; anything weaker maps to band 4 or below. */
const DESC_TA = [
  "9: All task requirements fully and appropriately satisfied; only extremely rare lapses.",
  "8: Covers all requirements appropriately, relevantly and sufficiently; key features skilfully selected, clearly presented, highlighted and illustrated.",
  "7: Covers the requirements; presents a CLEAR OVERVIEW with main trends/differences identified and data appropriately categorised, but key features could be more fully or appropriately illustrated.",
  "6: Focuses on the requirements; key features covered and ADEQUATELY highlighted; a relevant overview is attempted; some irrelevant/inaccurate detail may occur; some details may be missing or excessive.",
  "5: Generally addresses the task but key features are NOT adequately covered; recounting of detail is mainly mechanical; there may be no data to support the description; tends to focus on detail without the bigger picture."
];
const DESC_TR = [
  "9: Prompt appropriately addressed and explored in depth; a clear, fully developed position; ideas fully extended and well supported.",
  "8: Prompt appropriately and sufficiently addressed; a clear, well-developed position; ideas relevant, well extended and supported.",
  "7: Main parts of the prompt appropriately addressed; a clear developed position; main ideas extended and supported but may over-generalise or lack focus/precision in support.",
  "6: Main parts addressed (some more fully than others); a relevant position but conclusions may be unclear/unjustified/repetitive; main ideas relevant but some insufficiently developed or lacking clarity.",
  "5: Main parts only INCOMPLETELY addressed; a position is expressed but development is not always clear; main ideas limited, not sufficiently developed, possibly with irrelevant detail or repetition."
];
const DESC_CC = [
  "9: Message followed effortlessly; cohesion rarely attracts attention; paragraphing skilfully managed.",
  "8: Followed with ease; logically sequenced; cohesion well managed; paragraphing sufficient and appropriate; only occasional lapses.",
  "7: Logically organised with clear progression; a range of cohesive devices used flexibly but with some inaccuracy or over/under-use; paragraphing generally effective.",
  "6: Generally coherent with clear overall progression, BUT cohesive devices may be faulty or mechanical (misuse/overuse/omission); reference and substitution may lack flexibility; paragraphing may not always be logical.",
  "5: Organisation evident but not wholly logical; may lack overall progression; sentences not fluently linked; limited or overused cohesive devices; repetitive; paragraphing may be inadequate or missing."
];
const DESC_LR = [
  "9: Full flexibility and precise use; wide range used accurately and appropriately with sophisticated control; errors extremely rare.",
  "8: Wide resource fluently and flexibly used for precise meaning; skilful use of uncommon/idiomatic items; only occasional inaccuracies.",
  "7: Resource sufficient for some flexibility and precision; some less common/idiomatic items; awareness of style and collocation though inappropriacies occur; only a few spelling/word-formation errors.",
  "6: Generally adequate and appropriate; meaning generally clear despite a restricted range or lack of precision; some spelling/word-formation errors but they do not impede communication.",
  "5: Limited but minimally adequate; simple vocabulary used accurately but little variation; frequent lapses in word choice; noticeable spelling/word-formation errors that may cause the reader some difficulty."
];
const DESC_GRA = [
  "9: Wide range of structures with full flexibility and control; error-free; punctuation appropriate throughout.",
  "8: Wide range flexibly and accurately used; majority of sentences error-free; punctuation well managed.",
  "7: A variety of complex structures with some flexibility and accuracy; generally well controlled; error-free sentences frequent; a few errors persist but do not impede.",
  "6: A mix of simple and complex forms but flexibility is limited; complex structures less accurate than simple ones; errors occur but rarely impede communication.",
  "5: Range limited and repetitive; complex sentences attempted but faulty; greatest accuracy on simple sentences; grammatical errors may be frequent and cause the reader difficulty; punctuation may be faulty."
];

function rubricPrompt(task, taskPrompt, essay) {
  const isT1 = task === "t1";
  const crit1 = isT1 ? "Task Achievement" : "Task Response";
  const desc1 = isT1 ? DESC_TA : DESC_TR;
  return [
    "You are a certified, experienced IELTS Academic Writing examiner. Mark the candidate essay STRICTLY and CONSISTENTLY against the official IELTS Writing band descriptors (May 2023), quoted below. Award the band whose positive features the script FULLY fits; a single bolded-style negative feature limits the rating.",
    "",
    "TASK: Academic Writing " + (isT1 ? "Task 1 (summarise visual data / a process; minimum 150 words)" : "Task 2 (discursive essay; minimum 250 words)"),
    "TASK PROMPT SHOWN TO THE CANDIDATE:",
    taskPrompt,
    "",
    "CANDIDATE ESSAY (mark ONLY what is written; do not invent content):",
    essay,
    "",
    "OFFICIAL BAND DESCRIPTORS (bands 5-9; weaker scripts fall to band 4 or below):",
    crit1.toUpperCase() + " (" + (isT1 ? "TA" : "TR") + "):",
    desc1.join("\n"),
    "COHERENCE & COHESION (CC):",
    DESC_CC.join("\n"),
    "LEXICAL RESOURCE (LR):",
    DESC_LR.join("\n"),
    "GRAMMATICAL RANGE & ACCURACY (GRA):",
    DESC_GRA.join("\n"),
    "",
    "Rules: score each criterion 1.0-9.0 in HALF-BAND steps. Apply the under-length penalty if below the minimum word count. For each criterion, the 'note' must name the SINGLE main band-descriptor reason the script sits at that band (the key limiting issue), citing concrete evidence from THIS essay (a phrase, an error type, a missing feature). Keep every note under 40 words.",
    "'strengths' = 2-3 things the writer genuinely did well. 'improvements' = 3-4 specific, actionable next steps to move up a band (each tied to a criterion).",
    "",
    "Respond with ONLY a JSON object, no other text, exactly this shape:",
    '{"taskResponse":{"band":6.5,"note":"the specific band-guide issue with evidence"},"coherence":{"band":6.0,"note":"..."},"lexical":{"band":6.0,"note":"..."},"grammar":{"band":5.5,"note":"..."},"strengths":["...","..."],"improvements":["...","...","..."]}'
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
  const oi = originInfo(request);
  const headers = corsHeaders(oi.origin);
  const res = function (obj, status) { return new Response(JSON.stringify(obj), { status: status || 200, headers }); };
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

  const key = env && env.GEMINI_API_KEY;
  const url = new URL(request.url);

  if (request.method === "GET") {
    // status probe for the client
    return res({ enabled: !!key, perDay: PER_IP_DAILY });
  }
  if (request.method !== "POST") return res({ error: "method" }, 405);
  if (oi.blocked) return res({ error: "forbidden-origin" }, 403);
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

  // ---- call Gemini (key sent as header — works for both AIza and AQ. key formats) ----
  const model = (env.GEMINI_MODEL || MODEL_DEFAULT);
  const gUrl = "https://generativelanguage.googleapis.com/v1beta/models/" + model + ":generateContent";
  let gRes, gData;
  try {
    gRes = await fetch(gUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        contents: [{ parts: [{ text: rubricPrompt(task, taskPrompt, essay) }] }],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 1200,
          responseMimeType: "application/json",
          thinkingConfig: { thinkingBudget: 0 }   // grading uses a fixed rubric — no "thinking" tokens needed
        }
      })
    });
    gData = await gRes.json();
  } catch (e) {
    return res({ error: "upstream", detail: String((e && e.message) || e) }, 502);
  }
  if (gRes.status === 429) {
    // Google's own free-tier daily quota is spent — show the friendly "come back tomorrow" message.
    return res({ error: "site-limit" }, 429);
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
