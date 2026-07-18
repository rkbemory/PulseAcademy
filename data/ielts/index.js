/* Pulse for Nurses — IELTS module registry (verification build, no API).
   Reading & Listening are auto-scored (objective). Writing & Speaking show the
   real question format; AI band-scoring is the Pro feature (added later).
   Per-module content lives in data/ielts/<module>.js and is lazy-loaded. */
window.IELTS = window.IELTS || {};
window.IELTS.data = window.IELTS.data || {};

window.IELTS.meta = {
  name: "IELTS Preparation",
  note: "IELTS-style practice — not affiliated with or endorsed by IELTS, British Council, IDP or Cambridge.",
  official: [
    { name: "IDP IELTS", url: "https://ielts.idp.com" },
    { name: "British Council — Take IELTS", url: "https://takeielts.britishcouncil.org" }
  ]
};

window.IELTS.modules = {
  reading: {
    id: "reading", name: "Reading", icon: "📖", timeMin: 60,
    blurb: "3 passages, 40 questions, 60 minutes. Academic-style. Auto-scored with answers.",
    tests: [
      { id: "reading-1", title: "Academic Reading — Test 1" },
      { id: "reading-2", title: "Academic Reading — Test 2" },
      { id: "reading-3", title: "Academic Reading — Test 3" },
      { id: "reading-4", title: "Academic Reading — Test 4" },
      { id: "reading-5", title: "Academic Reading — Test 5" },
      { id: "reading-6", title: "Academic Reading — Test 6" },
      { id: "reading-7", title: "Academic Reading — Test 7" },
      { id: "reading-8", title: "Academic Reading — Test 8" },
      { id: "reading-9", title: "Academic Reading — Test 9" },
      { id: "reading-10", title: "Academic Reading — Test 10" }
    ]
  },
  listening: {
    id: "listening", name: "Listening", icon: "🎧", timeMin: 30,
    blurb: "4 sections, 40 questions, ~30 minutes. Audio plays in your browser. Auto-scored.",
    tests: [
      { id: "listening-1", title: "Listening — Test 1" },
      { id: "listening-2", title: "Listening — Test 2" },
      { id: "listening-3", title: "Listening — Test 3" },
      { id: "listening-4", title: "Listening — Test 4" },
      { id: "listening-5", title: "Listening — Test 5" },
      { id: "listening-6", title: "Listening — Test 6" },
      { id: "listening-7", title: "Listening — Test 7" },
      { id: "listening-8", title: "Listening — Test 8" },
      { id: "listening-9", title: "Listening — Test 9" },
      { id: "listening-10", title: "Listening — Test 10" }
    ]
  },
  writing: {
    id: "writing", name: "Writing", icon: "✍️", timeMin: 60,
    blurb: "Task 1 (150+ words) and Task 2 (250+ words). Live word counter + free AI band score with feedback.",
    tests: [
      { id: "writing-1", title: "Academic Writing — Set 1" },
      { id: "writing-2", title: "Academic Writing — Set 2" },
      { id: "writing-3", title: "Academic Writing — Set 3" },
      { id: "writing-4", title: "Academic Writing — Set 4" },
      { id: "writing-5", title: "Academic Writing — Set 5" },
      { id: "writing-6", title: "Academic Writing — Set 6" },
      { id: "writing-7", title: "Academic Writing — Set 7" },
      { id: "writing-8", title: "Academic Writing — Set 8" },
      { id: "writing-9", title: "Academic Writing — Set 9" },
      { id: "writing-10", title: "Academic Writing — Set 10" }
    ]
  },
  speaking: {
    id: "speaking", name: "Speaking", icon: "🎤", timeMin: 14,
    blurb: "Parts 1, 2 (cue card) and 3 — record your answers and get a free AI band with feedback.",
    tests: [
      { id: "speaking-1", title: "Speaking — Set 1" },
      { id: "speaking-2", title: "Speaking — Set 2" },
      { id: "speaking-3", title: "Speaking — Set 3" },
      { id: "speaking-4", title: "Speaking — Set 4" },
      { id: "speaking-5", title: "Speaking — Set 5" },
      { id: "speaking-6", title: "Speaking — Set 6" },
      { id: "speaking-7", title: "Speaking — Set 7" },
      { id: "speaking-8", title: "Speaking — Set 8" },
      { id: "speaking-9", title: "Speaking — Set 9" },
      { id: "speaking-10", title: "Speaking — Set 10" }
    ]
  }
};

window.IELTS.findModule = function (id) { return window.IELTS.modules[id] || null; };
window.IELTS.findTest = function (mid, tid) {
  var m = window.IELTS.modules[mid]; if (!m) return null;
  for (var i = 0; i < m.tests.length; i++) if (m.tests[i].id === tid) return m.tests[i];
  return null;
};
