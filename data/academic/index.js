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
          { id: "midwifery",                 code: "D331", name: "Midwifery",                        type: "Professional", marks: 300, hours: 1192, topicCount: 22, available: true },
          { id: "psychiatric-nursing",       code: "D332", name: "Psychiatric Nursing",             type: "Professional", marks: 150, hours: 144, topicCount: 15, available: true },
          { id: "orthopedic-nursing",        code: "D333", name: "Orthopedic Nursing",              type: "Professional", marks: 150, hours: 240, topicCount: 14, available: true },
          { id: "leadership-management",     code: "D334", name: "Leadership & Management",          type: "Professional", marks: 150, hours: 96, topicCount: 12, available: true },
          { id: "research-methodology",      code: "D335", name: "Research Methodology",             type: "Professional", marks: 100, hours: 80, topicCount: 12, available: true }
        ]
      }
    }
  },

  "diploma-midwifery": {
    id: "diploma-midwifery",
    name: "Diploma in Midwifery",
    short: "Diploma in Midwifery",
    authority: "Bangladesh Nursing & Midwifery Council (2020 Curriculum · ICM standard)",
    durationYears: 3,
    color: "#831843",
    accent: "#F472B6",
    icon: "🤱",
    available: true,
    years: {
      1: {
        name: "1st Year", totalMarks: 1250,
        subjects: [
          { id: "behavioural-science",      code: "DM 111", name: "Behavioural Science",                          type: "General",      marks: 100, hours: 70,  topicCount: 14, available: true },
          { id: "basic-science",            code: "DM 112", name: "Basic Science",                               type: "General",      marks: 100, hours: 88,  topicCount: 16, available: true },
          { id: "anatomy-physiology",       code: "DM 123", name: "Anatomy & Physiology",                        type: "Foundation",   marks: 200, hours: 234, topicCount: 20, available: true },
          { id: "professional-framework",   code: "DM 124", name: "Professional Framework & Communication in Midwifery", type: "Professional", marks: 150, hours: 142, topicCount: 14, available: true },
          { id: "fundamentals-of-midwifery",code: "DM 135", name: "Fundamentals of Midwifery",                   type: "Professional", marks: 250, hours: 496, topicCount: 20, available: true },
          { id: "midwifery-pharmacology",   code: "DM 126", name: "Midwifery Pharmacology",                      type: "Foundation",   marks: 100, hours: 86,  topicCount: 12, available: true },
          { id: "english-ict",              code: "DM 118", name: "Communicative English & ICT",                 type: "General",      marks: 150, hours: 186, topicCount: 14, available: true },
          { id: "midwifery-practice-1",     code: "DM 137", name: "Midwifery Practice-I (clinical skills)",       type: "Clinical",     marks: 200, hours: 234, topicCount: 6, available: true }
        ]
      },
      2: {
        name: "2nd Year", totalMarks: 1000,
        subjects: [
          { id: "research-evidence-based",  code: "DM 221", name: "Research & Evidence-Based Midwifery",          type: "Professional", marks: 200, hours: 172, topicCount: 14, available: true },
          { id: "art-science-midwifery",    code: "DM 232", name: "The Art & Science of Midwifery",               type: "Professional", marks: 200, hours: 440, topicCount: 20, available: true },
          { id: "womens-health",            code: "DM 233", name: "Women's Health",                               type: "Professional", marks: 200, hours: 358, topicCount: 16, available: true },
          { id: "complicated-maternity",    code: "DM 234", name: "Complicated Maternity Experience",             type: "Professional", marks: 200, hours: 486, topicCount: 18, available: true },
          { id: "midwifery-practice-2",     code: "DM 235", name: "Midwifery Practice-II (clinical skills)",       type: "Clinical",     marks: 200, hours: 200, topicCount: 5, available: true }
        ]
      },
      3: {
        name: "3rd Year", totalMarks: 700,
        subjects: [
          { id: "newborn-complications",    code: "DM 331", name: "Newborn Complications",                        type: "Professional", marks: 150, hours: 420, topicCount: 16, available: true },
          { id: "complexities-maternity",   code: "DM 332", name: "Complexities of Maternity Experience",         type: "Professional", marks: 200, hours: 576, topicCount: 16, available: true },
          { id: "transition-registered",    code: "DM 333", name: "Transition to Registered Midwifery",           type: "Professional", marks: 150, hours: 384, topicCount: 12, available: true },
          { id: "midwifery-practicum",      code: "DM 334", name: "Midwifery Practicum (clinical skills)",         type: "Clinical",     marks: 200, hours: 384, topicCount: 5, available: true }
        ]
      }
    }
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
