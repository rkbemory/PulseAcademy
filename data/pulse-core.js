/* Pulse for Nurses — core configuration.
   Brand metadata, bookstore contact info, social links, and the
   subject taxonomy shared across all three programs.
   Loaded before each program-specific data file. */

window.PulseCore = {
  brand: {
    name: "Pulse for Nurses",
    tagline: "For Nurses, By Nurses",
    logoPath: "Photo & Logo/Pulse For Nurses Logo.png",
    facebook: "https://www.facebook.com/Pulsefornurses",
    youtube: "https://www.youtube.com/@pulsefornursesbd6887"
  },

  bookstore: {
    nameEn: "Meghla Medical Book Center",
    nameBn: "মেঘলা মেডিকেল বুক সেন্টার",
    shopEn: "Shop #69, Lane #3",
    shopBn: "দোকান নং #৬৯, লেন #৩",
    addressEn: "Islamia Market, Nilkhet, Dhaka-1205",
    addressBn: "ইসলামিয়া মার্কেট, নীলখেত, ঢাকা-১২০৫",
    mobile: "01833700087",
    courierNoteEn: "Courier available, all over the country",
    courierNoteBn: "কুরিয়ার করা হয় - ঢাকাসহ সারাদেশে"
  },

  /* Single source of truth for subject taxonomy.
     A subject may appear in one program's tests and not another's.
     `programs` lists which programs use this subject. */
  subjects: {
    "fundamental-nursing":  { name: "Fundamental Nursing",       short: "Fund. Nurs.", color: "#6B2424", icon: "FN", programs: ["msn","post-basic","rn"] },
    "anatomy":              { name: "Anatomy & Physiology",      short: "Anatomy",     color: "#C0392B", icon: "AN", programs: ["msn","post-basic","rn"] },
    "nutrition":            { name: "Nutrition",                 short: "Nutrition",   color: "#E89B2C", icon: "NU", programs: ["msn","post-basic","rn"] },
    "microbiology":         { name: "Microbiology",              short: "Micro.",      color: "#1E8A5A", icon: "MB", programs: ["msn","post-basic"] },
    "pharmacology":         { name: "Pharmacology",              short: "Pharm.",      color: "#1E3A8A", icon: "PH", programs: ["msn","post-basic"] },
    "adult-health":         { name: "Adult & Elderly Health",    short: "Adult Hlth",  color: "#7C3AED", icon: "AH", programs: ["msn","post-basic"] },
    "child-health":         { name: "Child Health Nursing",      short: "Child Hlth",  color: "#DB2777", icon: "CH", programs: ["msn","post-basic","rn"] },
    "psychiatric":          { name: "Mental Health Nursing",     short: "Psych.",      color: "#0E7490", icon: "PS", programs: ["msn","post-basic"] },
    "community-health":     { name: "Community Health Nursing",  short: "Comm. Hlth",  color: "#16A34A", icon: "CO", programs: ["msn","post-basic","rn"] },
    "midwifery":            { name: "Midwifery & Women's Health",short: "Midwifery",   color: "#BE185D", icon: "MW", programs: ["msn","post-basic"] },
    "nursing-mgmt":         { name: "Nursing Management",        short: "Mgmt.",       color: "#0F1B4C", icon: "NM", programs: ["msn"] },
    "research":             { name: "Research Methodology",      short: "Research",    color: "#7E22CE", icon: "RM", programs: ["msn"] },
    "english":              { name: "English",                   short: "English",     color: "#374151", icon: "EN", programs: ["msn","post-basic","rn"] },
    "gk":                   { name: "General Knowledge",         short: "GK",          color: "#92400E", icon: "GK", programs: ["msn","post-basic","rn"] }
  },

  /* Programs catalog. Each program-specific file populates the rest. */
  programs: {
    "msn": {
      id: "msn",
      name: "MSN Admission",
      fullName: "Master of Science in Nursing — Admission Preparation",
      tagline: "For BSc-qualified nurses targeting NIANER, BSMMU & affiliated MSN programs.",
      level: "Advanced",
      color: "#1E3A8A",
      accent: "#E89B2C",
      icon: "🩺",
      hasBook: true,
      hasFullModel: true,   /* MSN: 2 × 100-Q full models in addition to 20 × 30-Q */
      modelTestCount: 20,
      modelTestQuestions: 30,
      modelTestDuration: 30,
      fullModelCount: 2,
      fullModelQuestions: 100,
      fullModelDuration: 100,
      books: [
        {
          id: "msn-vol1",
          title: "Pulse MSN Admission Guide — Volume I",
          subtitle: "Basic Subjects · 4th Edition · 2025",
          cover: "Photo & Logo/MSN_Book Cover_V4_Volume 1.jpeg",
          features: ["4800+ targeted MCQs", "Concept-clarifying notes", "Past admission questions", "10 ace-ready model tests"]
        },
        {
          id: "msn-vol2",
          title: "Pulse MSN Admission Guide — Volume II",
          subtitle: "Specialty Subjects · 4th Edition · 2025",
          cover: "Photo & Logo/MSN_Book Cover_V4_Volume 2.jpeg",
          features: ["Specialty subject coverage", "Past 10 years solved", "Author-explained rationales", "Index-cross-referenced"]
        }
      ],
      bookBundle: {
        title: "Both Volumes (I + II) — 4th Edition",
        price: 620,
        currency: "৳",
        bookstore: "Meghla Medical Book Center, Nilkhet"
      },
      paid: {
        name: "Pulse MSN Premium",
        priceLabel: "Coming soon",
        perks: [
          "10 additional mock tests (100 Q each)",
          "Live online classes with the authors",
          "Personalized weakness drills",
          "Priority WhatsApp doubt-clearing",
          "Ranked weekly leaderboard"
        ]
      }
    },

    "post-basic": {
      id: "post-basic",
      name: "Post Basic BSc",
      fullName: "Post Basic BSc in Nursing — Admission Preparation",
      tagline: "For diploma-qualified RNs upgrading to BSc in Nursing.",
      level: "Intermediate",
      color: "#4FA8D8",
      accent: "#1E5F9C",
      icon: "📘",
      hasBook: true,
      hasFullModel: false,
      modelTestCount: 20,
      modelTestQuestions: 30,
      modelTestDuration: 30,
      books: [
        {
          id: "pb-vol1",
          title: "Pulse Post Basic BSc Admission Guide",
          subtitle: "Version 1 · Complete Edition",
          cover: "Photo & Logo/Post Basic_V1_Book Cover Photo.jpeg",
          features: ["Subject-wise MCQs with rationales", "Past papers with solutions", "Concept-clarifying notes", "Full model tests"]
        }
      ],
      bookBundle: {
        title: "Pulse Post Basic BSc Admission Guide — V1",
        price: 420,
        currency: "৳",
        bookstore: "Meghla Medical Book Center, Nilkhet"
      },
      paid: {
        name: "Pulse Post Basic Premium",
        priceLabel: "Coming soon",
        perks: [
          "10 additional mock tests (100 Q each)",
          "Live online classes",
          "Subject-wise drill packs",
          "WhatsApp support group access"
        ]
      }
    },

    "rn": {
      id: "rn",
      name: "BNMC RN",
      fullName: "BNMC Registered Nurse — Licensing Exam Preparation",
      tagline: "Fundamental-level practice for the BNMC RN licensing exam.",
      level: "Foundational",
      color: "#16A34A",
      accent: "#4ADE80",
      icon: "🎓",
      hasBook: false,
      hasFullModel: false,
      modelTestCount: 20,
      modelTestQuestions: 30,
      modelTestDuration: 30,
      books: [],
      bookBundle: null,
      paid: {
        name: "Pulse RN Premium",
        priceLabel: "Coming soon",
        perks: [
          "10 additional mock tests (100 Q each)",
          "Online classes by RN-cleared faculty",
          "Anatomy & Fundamental video bites",
          "Topic-wise revision drills"
        ]
      }
    }
  }
};

/* Empty per-program containers — populated by msn.js / post-basic.js / rn.js */
window.PulsePrograms = window.PulsePrograms || {
  "msn":        { topics: [], questionBank: [], tests: [] },
  "post-basic": { topics: [], questionBank: [], tests: [] },
  "rn":         { topics: [], questionBank: [], tests: [] }
};
