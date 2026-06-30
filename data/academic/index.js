/* ============================================================
   Pulse for Nurses — Academic Programs section.
   Holds multiple full academic curricula (Diploma in Nursing,
   Diploma in Midwifery, B.Sc. in Nursing). Each program has the
   same shape: meta + year-wise subjects. Per-subject TOPIC data
   lives in data/academic/<program>/<subject>.js (lazy-loaded).
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

window.Academic.section = {
  name: "Academic Programs",
  tagline: "Full undergraduate nursing & midwifery curricula — study notes, video lectures, quizzes and exam prep, year by year."
};

window.Academic.programs = {

  "diploma-nursing": {
    id: "diploma-nursing",
    name: "Diploma in Nursing Science & Midwifery",
    short: "Diploma in Nursing",
    authority: "Bangladesh Nursing & Midwifery Council (2018 Curriculum)",
    durationYears: 3,
    internshipMonths: 6,
    totalMarks: 3100,
    totalHours: 5112,
    color: "#7C2D12",
    accent: "#FB923C",
    icon: "🏥",
    available: true,
    years: {
      1: {
        name: "1st Year", totalMarks: 1250, totalHours: 1656,
        subjects: [
          { id: "behavioral-science",        code: "D111", name: "Behavioral Science",               type: "General",      marks: 150, hours: 240, topicCount: 18, available: true },
          { id: "basic-science",             code: "D112", name: "Basic Science",                    type: "General",      marks: 150, hours: 128, topicCount: 23, available: true },
          { id: "anatomy-physiology",        code: "D123", name: "Anatomy & Physiology",             type: "Foundation",   marks: 250, hours: 256, topicCount: 20, available: true },
          { id: "microbiology-parasitology", code: "D124", name: "Microbiology & Parasitology",      type: "Foundation",   marks: 150, hours: 64, topicCount: 14, available: true },
          { id: "fundamentals-of-nursing",   code: "D135", name: "Fundamentals of Nursing",          type: "Professional", marks: 250, hours: 824, topicCount: 20, available: true },
          { id: "communicative-english",     code: "D116", name: "Communicative English",            type: "General",      marks: 150, hours: 80, topicCount: 10, available: true },
          { id: "computer-it",               code: "D117", name: "Computer & Information Technology", type: "General",      marks: 150, hours: 64, topicCount: 10, available: true }
        ]
      },
      2: {
        name: "2nd Year", totalMarks: 1000, totalHours: 1704,
        subjects: [
          { id: "medical-surgical-nursing",  code: "D231", name: "Medical & Surgical Nursing",       type: "Professional", marks: 300, hours: 832, topicCount: 20, available: true },
          { id: "pharmacology",              code: "D222", name: "Pharmacology",                     type: "Foundation",   marks: 150, hours: 80, topicCount: 15, available: true },
          { id: "nutrition-dietetics",       code: "D223", name: "Nutrition & Dietetics",            type: "Foundation",   marks: 200, hours: 240, topicCount: 16, available: true },
          { id: "community-health-nursing",  code: "D234", name: "Community Health Nursing",         type: "Professional", marks: 200, hours: 292, topicCount: 18, available: true },
          { id: "pediatric-nursing",         code: "D235", name: "Pediatric Nursing",                type: "Professional", marks: 150, hours: 260, topicCount: 15, available: true }
        ]
      },
      3: {
        name: "3rd Year", totalMarks: 850, totalHours: 1752,
        subjects: [
          { id: "midwifery",                 code: "D331", name: "Midwifery",                        type: "Professional", marks: 300, hours: 1192 },
          { id: "psychiatric-nursing",       code: "D332", name: "Psychiatric Nursing",             type: "Professional", marks: 150, hours: 144 },
          { id: "orthopedic-nursing",        code: "D333", name: "Orthopedic Nursing",              type: "Professional", marks: 150, hours: 240 },
          { id: "leadership-management",     code: "D334", name: "Leadership & Management",          type: "Professional", marks: 150, hours: 96 },
          { id: "research-methodology",      code: "D335", name: "Research Methodology",             type: "Professional", marks: 100, hours: 80 }
        ]
      }
    }
  },

  "diploma-midwifery": {
    id: "diploma-midwifery",
    name: "Diploma in Midwifery",
    short: "Diploma in Midwifery",
    authority: "Bangladesh Nursing & Midwifery Council",
    durationYears: 3,
    color: "#831843",
    accent: "#F472B6",
    icon: "🤱",
    available: false,
    note: "Curriculum being added — the official Diploma in Midwifery syllabus will be structured here next.",
    years: {}
  },

  "bsc-nursing": {
    id: "bsc-nursing",
    name: "B.Sc. in Nursing",
    short: "B.Sc. in Nursing",
    authority: "Bangladesh Nursing & Midwifery Council",
    durationYears: 4,
    color: "#0F4C3A",
    accent: "#4ADE80",
    icon: "🎓",
    available: false,
    note: "Curriculum being added — the 4-year B.Sc. in Nursing syllabus will be structured here next.",
    years: {}
  }
};

/* ---------------- helpers ---------------- */
window.Academic.findProgram = function (programId) {
  return window.Academic.programs[programId] || null;
};

window.Academic.findSubject = function (programId, subjectId) {
  var prog = window.Academic.programs[programId];
  if (!prog || !prog.years) return null;
  for (var y in prog.years) {
    if (!prog.years.hasOwnProperty(y)) continue;
    var subs = prog.years[y].subjects || [];
    for (var i = 0; i < subs.length; i++) {
      if (subs[i].id === subjectId) {
        return Object.assign({ year: parseInt(y, 10), yearName: prog.years[y].name, programId: programId }, subs[i]);
      }
    }
  }
  return null;
};
