/* Pulse for Nurses — live nursing-jobs feed (Cloudflare Pages Function).
   Route: GET /api/jobs

   Design (copyright-safe + zero-maintenance):
   - Fetches ONLY official, fetch-friendly sources and stores ONLY factual
     metadata (title, organization, location, dates, original URL). Job
     descriptions are never copied; every card links to the original posting.
   - Sources:
       • UNICEF Bangladesh — server-rendered PageUp listing (parseable HTML)
       • ReliefWeb v2 API — NGO/UN/health jobs in Bangladesh. Requires a
         one-time approved appname; until approved the API returns 403 and
         this source silently reports "pending" without affecting the page.
   - Each source is isolated in try/catch: one failure never breaks the rest.
   - Results cached in KV (PULSE_KV, key "jobs:v1") for CACHE_HOURS; the first
     visitor after expiry triggers a refresh. Without a KV binding the
     function still works (fetches live on every call).
*/

const CACHE_KEY = "jobs:v3"; // bump when the data shape changes so stale blobs are ignored
const CACHE_HOURS = 6;

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=300",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS"
};

/* ---------- qualification / sector classification (factual keywords) ---------- */
function classify(title) {
  const t = (title || "").toLowerCase();
  const qual = [];
  if (/\b(senior staff nurse|staff nurse|nursing officer|registered nurse|\brn\b)\b/.test(t)) qual.push("rn", "bsc");
  if (/\bmidwife|midwifery\b/.test(t)) qual.push("midwifery");
  if (/\b(matron|nurse manager|nursing superintendent|nurse consultant|nursing instructor|faculty|lecturer)\b/.test(t)) qual.push("msn");
  if (/\b(consultant|advisor|specialist|coordinator|officer|manager)\b/.test(t) && /health|medical|clinical|nurs/.test(t)) qual.push("msn", "bsc");
  if (!qual.length) qual.push("all");
  return [...new Set(qual)];
}

function looksHealthRelated(title) {
  return /nurs|midwif|health|medical|clinic|hospital|paramedic|vaccin|immuni[sz]|maternal|community|infect|disease|nutrition|epidemi|laborat|technologist|biomedical|pharma|physician|surg/i.test(title || "");
}

function looksNursing(title) {
  return /nurs|midwif/i.test(title || "");
}

/* ---------- source: UNICEF Bangladesh (PageUp, server-rendered) ---------- */
async function fetchUnicef() {
  const res = await fetch("https://jobs.unicef.org/en-us/filter/?search-keyword=&location=bangladesh", {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; PulseForNurses/1.0; +https://pulsefornurses.com)" }
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const html = await res.text();
  const jobs = [];
  const seen = new Set();
  const re = /<a[^>]*class="job-link"[^>]*href="(\/en-us\/job\/[^"]+)"[^>]*>([^<]+)<\/a>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const url = "https://jobs.unicef.org" + m[1];
    if (seen.has(url)) continue;
    seen.add(url);
    const title = m[2].replace(/\s+/g, " ").trim();
    if (!looksHealthRelated(title)) continue; // nurse-relevant roles only
    jobs.push({
      id: "unicef-" + (m[1].match(/job\/(\d+)/) || [0, url])[1],
      title: title,
      org: "UNICEF Bangladesh",
      orgType: "ngo",
      location: "Bangladesh",
      deadline: null,
      url: url,
      source: "UNICEF Careers",
      nursing: looksNursing(title),
      qual: classify(title)
    });
  }
  return jobs;
}

/* ---------- source: icddr,b (server-rendered "Current opportunities" table) ---------- */
async function fetchIcddrb() {
  const res = await fetch("https://career.icddrb.org/", {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; PulseForNurses/1.0; +https://pulsefornurses.com)" }
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  const html = await res.text();
  const jobs = [];
  // Row shape (href is unquoted in their markup):
  //   <a href=https://career.icddrb.org/vacancy-preview/32235>Title…</a><br />Posted on: June 11,  2026
  //   </td><td>Fixed Term</td><td>June 22,  2026</td>
  const re = /<a\s+href=["']?(https:\/\/career\.icddrb\.org\/vacancy-preview\/\d+)["']?\s*>([^<]+)<\/a>\s*(?:<br\s*\/?>\s*Posted on:\s*([^<]*))?[\s\S]*?<\/td>\s*<td>([^<]*)<\/td>\s*<td>([^<]*)<\/td>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const title = m[2].replace(/\s+/g, " ").trim().replace(/\.$/, "");
    if (!looksHealthRelated(title)) continue; // nurse-relevant roles only
    let posted = null;
    if (m[3]) {
      const p = Date.parse(m[3].replace(/\s+/g, " ").trim());
      if (!isNaN(p)) posted = new Date(p).toISOString().slice(0, 10);
    }
    let deadline = null;
    const parsed = Date.parse(m[5].replace(/\s+/g, " ").trim());
    if (!isNaN(parsed)) deadline = new Date(parsed).toISOString().slice(0, 10);
    jobs.push({
      id: "icddrb-" + (m[1].match(/(\d+)$/) || [0, m[1]])[1],
      title: title,
      org: "icddr,b",
      orgType: "ngo",
      location: "Bangladesh",
      posted: posted,
      deadline: deadline,
      url: m[1],
      source: "icddr,b Careers",
      nursing: looksNursing(title),
      qual: classify(title)
    });
  }
  return jobs;
}

/* ---------- source: ReliefWeb v2 (NGO/UN jobs in Bangladesh) ---------- */
async function fetchReliefWeb() {
  const body = {
    profile: "list",
    limit: 40,
    preset: "latest",
    query: { value: "nurse OR nursing OR midwife OR midwifery OR health", operator: "OR" },
    filter: { field: "country.iso3", value: "bgd" },
    fields: { include: ["title", "source.name", "url_alias", "date.closing", "country.name"] }
  };
  const res = await fetch("https://api.reliefweb.int/v2/jobs?appname=pulsefornurses.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", "User-Agent": "Mozilla/5.0 (compatible; PulseForNurses/1.0; +https://pulsefornurses.com)" },
    body: JSON.stringify(body)
  });
  if (res.status === 403 || res.status === 406) {
    // appname not yet approved by ReliefWeb (or WAF challenge) — report
    // quietly as "pending"; activates automatically once approved.
    const err = new Error("pending-registration");
    err.pending = true;
    throw err;
  }
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  return (data.data || [])
    .filter(function (it) { return it.fields && looksHealthRelated(it.fields.title); })
    .map(function (it) {
      const f = it.fields;
      return {
        id: "rw-" + it.id,
        title: f.title,
        org: (f.source && f.source[0] && f.source[0].name) || "via ReliefWeb",
        orgType: "ngo",
        location: "Bangladesh",
        deadline: (f.date && f.date.closing) || null,
        url: f.url_alias ? "https://reliefweb.int" + (f.url_alias.startsWith("/") ? f.url_alias : "/" + f.url_alias) : "https://reliefweb.int/jobs?search=nurse",
        source: "ReliefWeb",
        nursing: looksNursing(f.title),
        qual: classify(f.title)
      };
    });
}

/* ---------- orchestration ---------- */
async function refreshAll() {
  const sources = [
    { id: "icddrb", label: "icddr,b Careers", fn: fetchIcddrb },
    { id: "unicef", label: "UNICEF Careers", fn: fetchUnicef },
    { id: "reliefweb", label: "ReliefWeb", fn: fetchReliefWeb }
  ];
  const jobs = [];
  const status = [];
  for (const s of sources) {
    try {
      const list = await s.fn();
      jobs.push.apply(jobs, list);
      status.push({ id: s.id, label: s.label, status: "ok", count: list.length });
    } catch (e) {
      status.push({
        id: s.id, label: s.label,
        status: e && e.pending ? "pending" : "error",
        count: 0
      });
    }
  }
  // De-duplicate by URL, drop expired deadlines (keep no-deadline items)
  const now = Date.now();
  const seen = new Set();
  const clean = jobs.filter(function (j) {
    if (seen.has(j.url)) return false;
    seen.add(j.url);
    if (j.deadline) {
      const d = Date.parse(j.deadline);
      if (!isNaN(d) && d < now - 86400000) return false;
    }
    return true;
  });
  return { updatedAt: new Date().toISOString(), sources: status, jobs: clean };
}

export async function onRequest(context) {
  const { request, env } = context;
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });
  if (request.method !== "GET") return new Response(JSON.stringify({ error: "method" }), { status: 405, headers });

  const kv = env && env.PULSE_KV;
  const forceRefresh = new URL(request.url).searchParams.get("refresh") === "1";
  try {
    if (kv && !forceRefresh) {
      const cached = await kv.get(CACHE_KEY, { type: "json" });
      if (cached && cached.updatedAt && (Date.now() - Date.parse(cached.updatedAt)) < CACHE_HOURS * 3600000) {
        return new Response(JSON.stringify(cached), { status: 200, headers });
      }
    }
    const fresh = await refreshAll();
    if (kv && fresh.jobs.length) {
      // keep last-good data for 7 days even if later refreshes fail
      await kv.put(CACHE_KEY, JSON.stringify(fresh), { expirationTtl: 7 * 86400 });
    }
    if (kv && !fresh.jobs.length) {
      // every source failed — fall back to last-good if available
      const lastGood = await kv.get(CACHE_KEY, { type: "json" });
      if (lastGood && lastGood.jobs && lastGood.jobs.length) {
        lastGood.stale = true;
        return new Response(JSON.stringify(lastGood), { status: 200, headers });
      }
    }
    return new Response(JSON.stringify(fresh), { status: 200, headers });
  } catch (err) {
    return new Response(
      JSON.stringify({ updatedAt: null, sources: [], jobs: [], error: "jobs unavailable" }),
      { status: 200, headers } // 200 with empty list: the page's redirect hub still works
    );
  }
}
