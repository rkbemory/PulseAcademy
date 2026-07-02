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
      { id: "reading-5", title: "Academic Reading — Test 5" }
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
      { id: "listening-5", title: "Listening — Test 5" }
    ]
  },
  writing: {
    id: "writing", name: "Writing", icon: "✍️", timeMin: 60,
    blurb: "Task 1 (150+ words) and Task 2 (250+ words). Practise with a live word counter. AI band score is Pro.",
    tests: [
      { id: "writing-1", title: "Academic Writing — Set 1" },
      { id: "writing-2", title: "Academic Writing — Set 2" },
      { id: "writing-3", title: "Academic Writing — Set 3" },
      { id: "writing-4", title: "Academic Writing — Set 4" },
      { id: "writing-5", title: "Academic Writing — Set 5" }
    ]
  },
  speaking: {
    id: "speaking", name: "Speaking", icon: "🎤", timeMin: 14,
    blurb: "Parts 1, 2 (cue card) and 3, with the examiner's questions. AI evaluation is Pro.",
    tests: [
      { id: "speaking-1", title: "Speaking — Set 1" },
      { id: "speaking-2", title: "Speaking — Set 2" },
      { id: "speaking-3", title: "Speaking — Set 3" },
      { id: "speaking-4", title: "Speaking — Set 4" },
      { id: "speaking-5", title: "Speaking — Set 5" }
    ]
  }
};

window.IELTS.findModule = function (id) { return window.IELTS.modules[id] || null; };
window.IELTS.findTest = function (mid, tid) {
  var m = window.IELTS.modules[mid]; if (!m) return null;
  for (var i = 0; i < m.tests.length; i++) if (m.tests[i].id === tid) return m.tests[i];
  return null;
};
