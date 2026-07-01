/* ============================================================
   B.Sc. in Nursing (BNMC 2018, 4-year) · B134 Fundamentals of
   Nursing — Paper I. Degree-level, syllabus-aligned. 18 topics.
   Adapted and DEEPENED from the diploma Fundamentals base:
   nursing process, theories, mechanism, evidence and clinical
   application. Content original, grounded in:
     • Potter PA, Perry AG. Fundamentals of Nursing. Elsevier/Mosby.
     • Berman A, Snyder S. Kozier & Erb's Fundamentals of Nursing. Pearson.
     • Taylor C. Fundamentals of Nursing: The Art and Science of
       Person-Centered Care. Wolters Kluwer.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_FON = [
  "Potter PA, Perry AG. Fundamentals of Nursing. Elsevier/Mosby.",
  "Berman A, Snyder S. Kozier & Erb's Fundamentals of Nursing. Pearson.",
  "Taylor C. Fundamentals of Nursing: The Art and Science of Person-Centered Care. Wolters Kluwer."
];

window.Academic.topics["bsc-nursing/fundamentals-1"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "fon-01-conceptual-bases",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "Introduction to the Conceptual Bases of Nursing & Historical Development",
    readMinutes: 18,
    summary: "The meaning, nature and scope of nursing; the historical evolution of the profession from Nightingale to the present; nursing as a discipline, art and science; and the roles, functions and competencies of the professional nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is nursing?", p: "Nursing is both an art and a science concerned with the care of individuals, families, groups and communities across the health-illness continuum to promote, maintain and restore health, prevent illness, and support a dignified death. The International Council of Nurses (ICN) defines nursing as encompassing autonomous and collaborative care of people of all ages, in all settings, and includes health promotion, illness prevention, and care of the ill, disabled and dying. As a discipline it draws on a distinct body of theoretical knowledge, evidence and skilled practice." },
      { h: "Nursing as art, science and profession", list: [
        "Art — the creative, humanistic, caring and interpersonal dimension: compassion, presence, comfort, therapeutic use of self and individualised care.",
        "Science — the systematic, research-based body of knowledge and clinical reasoning that guides safe, effective, evidence-based practice.",
        "Profession — nursing meets the criteria of a profession: a specialised body of knowledge, prolonged education, a code of ethics, autonomy, accountability, service orientation and self-regulation."
      ] },
      { h: "Historical development of nursing", p: "Care of the sick is as old as humanity, but professional nursing emerged in the 19th century. Early care was provided in the home, by families, or by religious and military orders. Florence Nightingale (1820-1910) transformed nursing during the Crimean War, using sanitation, statistics and disciplined observation to dramatically reduce mortality, and later founded the first secular training school at St Thomas' Hospital (1860), establishing nursing as an educated, respectable occupation." },
      { h: "Nightingale's enduring contributions", list: [
        "Emphasis on a clean, ventilated, well-lit therapeutic environment — the basis of her Environmental Theory.",
        "Systematic observation and record-keeping; pioneering use of health statistics.",
        "Structured, formal nurse education separate from religious control.",
        "Distinction between health nursing and sick nursing (health promotion and prevention)."
      ] },
      { h: "Evolution into the modern discipline", p: "Through the 20th century nursing developed university-based education, theoretical frameworks (from the 1950s onward), research programmes and specialisation. In Bangladesh, nursing has progressed from certificate and diploma preparation regulated by the Bangladesh Nursing and Midwifery Council (BNMC) to degree (B.Sc.) and postgraduate education, reflecting a global shift toward graduate-level, evidence-based, autonomous practice." },
      { h: "Scope of nursing practice", list: [
        "Health promotion and disease prevention across the lifespan.",
        "Direct clinical care of the acutely and chronically ill.",
        "Rehabilitation and restoration of function.",
        "Palliative and end-of-life care.",
        "Education, counselling and advocacy for patients and families.",
        "Leadership, management, research and policy contribution."
      ] },
      { h: "Roles and functions of the professional nurse", list: [
        "Caregiver — provides holistic, person-centred physical and psychosocial care.",
        "Communicator — the pivotal role underpinning all others.",
        "Teacher/educator — promotes health literacy and self-care.",
        "Advocate — protects patient rights and interests.",
        "Counsellor — supports coping and behaviour change.",
        "Leader, manager and coordinator of care.",
        "Change agent and researcher — generates and applies evidence."
      ] },
      { h: "Core competencies of the graduate nurse", p: "Degree-level competencies include critical thinking and clinical judgement, evidence-based practice, safe technical skill, effective communication, cultural competence, ethical and legal accountability, leadership, teamwork within the interprofessional team, and a commitment to lifelong learning." },
      { h: "Key terms", list: [
        "Discipline — a branch of knowledge with its own theories and methods of inquiry.",
        "Autonomy — the authority and freedom to make professional judgements.",
        "Accountability — being answerable for one's own actions and omissions.",
        "Person-centred care — care organised around the values, needs and preferences of the individual."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define nursing and explain why it is described as both an art and a science.",
      "Describe the historical development of nursing, highlighting the contributions of Florence Nightingale.",
      "Discuss the criteria that qualify nursing as a profession.",
      "Explain the scope of nursing practice across the health-illness continuum.",
      "Enumerate and describe the roles and core competencies of the graduate professional nurse."
    ],
    assessment: [
      { type: "mcq", q: "Nursing is best described as:", options: ["A purely technical trade", "Both an art and a science", "A branch of medicine", "An administrative service"], answer: 1, rationale: "Nursing integrates the caring, humanistic art with a systematic, evidence-based science." },
      { type: "mcq", q: "The founder of modern professional nursing is:", options: ["Virginia Henderson", "Florence Nightingale", "Clara Barton", "Dorothea Orem"], answer: 1, rationale: "Nightingale established formal nurse training and reformed care during and after the Crimean War." },
      { type: "mcq", q: "Nightingale's major theoretical contribution was her:", options: ["Self-Care Theory", "Environmental Theory", "Adaptation Model", "Human Caring Theory"], answer: 1, rationale: "Nightingale's Environmental Theory stressed a clean, ventilated, well-lit environment for healing." },
      { type: "mcq", q: "Which body regulates nursing education and practice in Bangladesh?", options: ["WHO", "ICN", "BNMC", "UNICEF"], answer: 2, rationale: "The Bangladesh Nursing and Midwifery Council (BNMC) is the national regulatory body." },
      { type: "mcq", q: "Being answerable for one's own nursing actions and omissions is called:", options: ["Autonomy", "Advocacy", "Accountability", "Delegation"], answer: 2, rationale: "Accountability means taking responsibility for and justifying one's professional actions." },
      { type: "mcq", q: "The nurse role that protects and speaks up for patient rights is the:", options: ["Advocate", "Caregiver", "Manager", "Researcher"], answer: 0, rationale: "The advocate defends the patient's interests, rights and preferences." },
      { type: "mcq", q: "A defining criterion of a profession is:", options: ["Short informal training", "A specialised body of knowledge and code of ethics", "Lack of self-regulation", "Absence of accountability"], answer: 1, rationale: "Professions have a specialised knowledge base, prolonged education, a code of ethics and self-regulation." },
      { type: "mcq", q: "Care organised around the individual's values, needs and preferences is termed:", options: ["Task-centred care", "Person-centred care", "Routine care", "Custodial care"], answer: 1, rationale: "Person-centred care places the individual's values and preferences at the centre of care." },
      { type: "mcq", q: "Which is a degree-level (graduate) nursing competency?", options: ["Avoiding evidence", "Critical thinking and evidence-based practice", "Working in isolation", "Refusing accountability"], answer: 1, rationale: "Graduate practice emphasises critical thinking, clinical judgement and evidence-based practice." },
      { type: "mcq", q: "The authority and freedom to make independent professional judgements is:", options: ["Delegation", "Autonomy", "Supervision", "Documentation"], answer: 1, rationale: "Autonomy is the professional's authority to make and act on independent judgements." },
      { type: "fill", q: "The founder of modern professional nursing is ____.", accept: ["Florence Nightingale", "Nightingale"], rationale: "Nightingale established modern nurse training and reformed sanitary care." },
      { type: "fill", q: "Nursing is described as both an art and a ____.", accept: ["science"], rationale: "Nursing blends the caring art with an evidence-based science." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "fon-02-basic-concepts",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "Basic Concepts: Person, Environment, Health & Nursing (The Metaparadigm)",
    readMinutes: 18,
    summary: "The four central concepts of the nursing metaparadigm; basic human needs and Maslow's hierarchy; human rights in care; the health-illness continuum; and how person, environment, health and nursing interrelate.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The nursing metaparadigm", p: "The metaparadigm is the broadest conceptual framework of the discipline and identifies its four central, interrelated concepts: person (the recipient of care), environment (internal and external surroundings), health (well-being along a continuum), and nursing (the actions, knowledge and relationship through which care is delivered). Every nursing theory defines and links these four concepts in its own way." },
      { h: "Person / client", p: "The person is a unique, holistic being with physical, psychological, social, cultural and spiritual dimensions that are interdependent — a change in one dimension affects the others. The person may be an individual, family, group or community and is an active partner in care, not a passive recipient." },
      { h: "Basic human needs", p: "All persons share basic needs that must be met for survival and well-being. Nurses assess and help meet these needs. Abraham Maslow arranged them in a hierarchy, generally addressing lower-level needs before higher ones, though the order is flexible in real situations (e.g., pain relief may precede all else).", figure: {
        caption: "Maslow's hierarchy of human needs — nursing usually meets lower (physiological/safety) needs before higher ones.",
        svg: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maslow hierarchy of needs pyramid"><polygon points="230,20 300,70 160,70" fill="#0F4C3A"/><text x="230" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7">Self-actualisation</text><polygon points="160,72 300,72 340,122 120,122" fill="#15803D"/><text x="230" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Esteem</text><polygon points="120,124 340,124 375,172 85,172" fill="#22C55E"/><text x="230" y="153" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Love &amp; belonging</text><polygon points="85,174 375,174 405,218 55,218" fill="#86EFAC"/><text x="230" y="200" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Safety &amp; security</text><polygon points="55,220 405,220 435,255 25,255" fill="#DCFCE7"/><text x="230" y="242" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Physiological (air, water, food)</text></svg>'
      } },
      { h: "Human rights in health care", list: [
        "The right to safe, competent and dignified care without discrimination.",
        "The right to information and to informed consent or refusal.",
        "The right to privacy and confidentiality.",
        "The right to participate in decisions about one's own care.",
        "The right to access care and to be treated equitably."
      ] },
      { h: "Environment", p: "Environment includes all internal conditions (physiological and psychological states) and external conditions (physical surroundings, family, culture, socioeconomic and community factors) that influence the person and their health. Nightingale first emphasised the external environment; contemporary nursing addresses environmental determinants of health at individual and population levels." },
      { h: "Health and the health-illness continuum", p: "The WHO defines health as a state of complete physical, mental and social well-being, not merely the absence of disease. Health is dynamic and best represented as a continuum ranging from high-level wellness to severe illness and death; a person moves along this continuum over time. Illness is a subjective experience of not being well, while disease is a measurable pathological process." },
      { h: "Nursing as the fourth concept", p: "Nursing is the deliberate application of knowledge, judgement and caring actions — through the nursing process and the therapeutic relationship — to help the person achieve, maintain or regain the best possible health along the continuum. Nursing links and acts upon the other three concepts." },
      { h: "Interrelationship of the four concepts", p: "The person, situated in an environment, experiences health that shifts along a continuum; nursing intervenes within that environment to influence the person's health. Understanding these relationships allows the nurse to give holistic, individualised, context-aware care rather than treating an isolated symptom." },
      { h: "Key terms", list: [
        "Holism — viewing the person as an integrated whole rather than separate parts.",
        "Wellness — active pursuit of optimal health and functioning.",
        "Homeostasis — the internal balance the body maintains for health.",
        "Determinants of health — factors (biological, environmental, social) that shape health outcomes."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define the nursing metaparadigm and describe its four central concepts.",
      "Explain Maslow's hierarchy of needs and its application to setting nursing priorities.",
      "Discuss the health-illness continuum and differentiate illness from disease.",
      "List and explain the human rights of a patient receiving nursing care.",
      "Describe how person, environment, health and nursing are interrelated."
    ],
    assessment: [
      { type: "mcq", q: "The four concepts of the nursing metaparadigm are person, environment, nursing and:", options: ["Medicine", "Health", "Technology", "Money"], answer: 1, rationale: "The metaparadigm consists of person, environment, health and nursing." },
      { type: "mcq", q: "According to Maslow, which need is generally met first?", options: ["Self-actualisation", "Esteem", "Physiological needs", "Love and belonging"], answer: 2, rationale: "Physiological needs form the base of the hierarchy and are usually addressed first." },
      { type: "mcq", q: "The WHO defines health as complete physical, mental and social well-being and not merely the:", options: ["Presence of wellness", "Absence of disease", "Ability to work", "Sign of youth"], answer: 1, rationale: "The WHO definition stresses well-being, not just the absence of disease." },
      { type: "mcq", q: "A subjective experience of not being well is termed:", options: ["Disease", "Illness", "Diagnosis", "Sign"], answer: 1, rationale: "Illness is the personal, subjective experience; disease is the measurable pathology." },
      { type: "mcq", q: "Viewing the person as an integrated whole rather than separate parts is:", options: ["Reductionism", "Holism", "Dualism", "Isolation"], answer: 1, rationale: "Holism regards the person's dimensions as interdependent and integrated." },
      { type: "mcq", q: "Which is a patient's human right in care?", options: ["Right to informed consent", "Right to be ignored", "Right to no privacy", "Right to unsafe care"], answer: 0, rationale: "Informed consent is a fundamental patient right." },
      { type: "mcq", q: "The internal balance the body maintains for health is called:", options: ["Homeostasis", "Metastasis", "Diagnosis", "Prognosis"], answer: 0, rationale: "Homeostasis is the maintenance of a stable internal environment." },
      { type: "mcq", q: "The nurse who first emphasised the external environment in health was:", options: ["Orem", "Nightingale", "Roy", "Peplau"], answer: 1, rationale: "Nightingale's Environmental Theory centred on external conditions such as air, light and cleanliness." },
      { type: "mcq", q: "Health represented as a dynamic range from high-level wellness to death is the:", options: ["Health-illness continuum", "Nursing process", "Metaparadigm", "Care plan"], answer: 0, rationale: "The health-illness continuum depicts health as a dynamic, moving state." },
      { type: "mcq", q: "Factors such as biology, environment and social conditions that shape health are:", options: ["Determinants of health", "Vital signs", "Nursing diagnoses", "Interventions"], answer: 0, rationale: "Determinants of health are the underlying factors that influence health outcomes." },
      { type: "fill", q: "The base of Maslow's hierarchy consists of ____ needs.", accept: ["physiological", "physiologic"], rationale: "Physiological needs (air, water, food) form the foundation of the hierarchy." },
      { type: "fill", q: "A measurable pathological process is called ____, whereas the personal experience of it is illness.", accept: ["disease"], rationale: "Disease is the objective pathology; illness is the subjective experience." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "fon-03-nursing-process",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "The Nursing Process: Assessment, Diagnosis, Planning, Implementation & Evaluation",
    readMinutes: 20,
    summary: "The nursing process as the systematic, patient-centred method of clinical reasoning; the five phases (ADPIE); critical thinking, nursing diagnoses versus medical diagnoses; goal-setting and evaluation; and its role in evidence-based, individualised care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is the nursing process?", p: "The nursing process is a systematic, cyclical, problem-solving framework that guides the nurse's clinical reasoning to deliver individualised, goal-directed and evidence-based care. It is patient-centred, dynamic, universally applicable, and organised into five interrelated phases remembered by the acronym ADPIE: Assessment, Diagnosis, Planning, Implementation and Evaluation." },
      { h: "The five phases (ADPIE)", figure: {
        caption: "The five cyclical phases of the nursing process (ADPIE) — evaluation feeds back to reassessment.",
        svg: '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nursing process cycle: assessment, diagnosis, planning, implementation, evaluation"><defs><marker id="fpArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="90" width="80" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="60" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Assess</text><rect x="120" y="90" width="80" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="160" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Diagnose</text><rect x="220" y="90" width="80" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="260" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Plan</text><rect x="320" y="90" width="80" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="360" y="117" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Implement</text><rect x="400" y="30" width="70" height="44" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="435" y="57" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Evaluate</text><line x1="100" y1="112" x2="116" y2="112" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fpArr)"/><line x1="200" y1="112" x2="216" y2="112" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fpArr)"/><line x1="300" y1="112" x2="316" y2="112" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fpArr)"/><line x1="400" y1="95" x2="435" y2="76" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fpArr)"/><path d="M410 40 C 200 -10, 60 30, 60 86" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#fpArr)"/><text x="235" y="18" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">reassess (feedback loop)</text></svg>'
      } },
      { h: "1. Assessment", p: "Systematic and continuous collection, validation and organisation of data. Subjective data are what the patient reports (symptoms, feelings); objective data are observable and measurable (signs, vital signs, laboratory values). Sources include the patient (primary source), family, records and the health team (secondary sources). Data are gathered through interview, observation and physical examination and then clustered for analysis." },
      { h: "2. Nursing diagnosis", p: "Analysis of the clustered data to make a clinical judgement about the patient's actual or potential health problems that nurses are licensed and competent to treat. A nursing diagnosis differs from a medical diagnosis: a medical diagnosis identifies a disease (e.g., pneumonia), whereas a nursing diagnosis identifies the human response to it (e.g., impaired gas exchange, activity intolerance). Standardised systems such as NANDA-I provide agreed diagnostic labels." },
      { h: "Components of a nursing diagnosis (PES)", list: [
        "Problem (P) — the diagnostic label / human response.",
        "Etiology (E) — the related factors or cause ('related to').",
        "Signs and symptoms (S) — the defining characteristics ('as evidenced by')."
      ] },
      { h: "3. Planning", p: "Setting priorities and establishing patient-centred goals and expected outcomes, then selecting evidence-based interventions to achieve them. Priorities may be guided by Maslow's hierarchy (life-threatening first). Goals should be SMART — Specific, Measurable, Achievable, Realistic and Time-bound — and written in terms of what the patient will achieve, not what the nurse will do." },
      { h: "4. Implementation", p: "Carrying out (or delegating and supervising) the planned interventions safely and skilfully while continuing to assess the patient's response. Interventions may be independent (nurse-initiated), dependent (physician-ordered) or collaborative (interprofessional). The nurse documents care accurately and adapts to the patient's changing condition." },
      { h: "5. Evaluation", p: "Measuring the patient's progress toward the stated goals using the expected outcomes as criteria, and judging whether goals were met, partially met or unmet. Based on evaluation, the plan is continued, modified or terminated — the process loops back to reassessment, making it dynamic and self-correcting." },
      { h: "Critical thinking and evidence", p: "The nursing process is powered by critical thinking — purposeful, reflective, reasoned judgement. At degree level, each phase is informed by the best available evidence, clinical expertise and the patient's values, integrating research into everyday decisions and ensuring care is individualised, defensible and safe." },
      { h: "Key terms", list: [
        "Subjective data — what the patient states (symptoms).",
        "Objective data — observable, measurable findings (signs).",
        "Expected outcome — a specific, measurable criterion of goal achievement.",
        "NANDA-I — an international standard taxonomy of nursing diagnoses."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define the nursing process and describe its five phases in sequence.",
      "Differentiate between a nursing diagnosis and a medical diagnosis with examples.",
      "Explain the PES format of a nursing diagnosis.",
      "Discuss the characteristics of SMART goals in the planning phase.",
      "Explain the role of critical thinking and evidence in the nursing process."
    ],
    assessment: [
      { type: "mcq", q: "The correct sequence of the nursing process (ADPIE) is:", options: ["Diagnosis, Assessment, Planning, Implementation, Evaluation", "Assessment, Diagnosis, Planning, Implementation, Evaluation", "Planning, Assessment, Diagnosis, Evaluation, Implementation", "Assessment, Planning, Diagnosis, Implementation, Evaluation"], answer: 1, rationale: "ADPIE = Assessment, Diagnosis, Planning, Implementation, Evaluation." },
      { type: "mcq", q: "A patient's report of pain is an example of:", options: ["Subjective data", "Objective data", "A nursing intervention", "An outcome"], answer: 0, rationale: "What the patient states (a symptom) is subjective data." },
      { type: "mcq", q: "'Impaired gas exchange' is an example of a:", options: ["Medical diagnosis", "Vital sign", "Nursing diagnosis", "Laboratory value"], answer: 2, rationale: "It describes the human response and is a nursing diagnosis; pneumonia would be the medical diagnosis." },
      { type: "mcq", q: "In the PES format, 'E' stands for:", options: ["Evaluation", "Etiology", "Evidence", "Expected outcome"], answer: 1, rationale: "E is the etiology or related factor ('related to')." },
      { type: "mcq", q: "SMART goals must be Specific, Measurable, Achievable, Realistic and:", options: ["Theoretical", "Traditional", "Time-bound", "Temporary"], answer: 2, rationale: "The T in SMART is Time-bound." },
      { type: "mcq", q: "A blood pressure reading of 150/95 mmHg is:", options: ["Subjective data", "A goal", "A diagnosis", "Objective data"], answer: 3, rationale: "A measurable, observable finding is objective data." },
      { type: "mcq", q: "Nurse-initiated actions that do not require a physician's order are:", options: ["Independent interventions", "Dependent interventions", "Collaborative interventions", "Delegated orders"], answer: 0, rationale: "Independent interventions are within the nurse's own scope and authority." },
      { type: "mcq", q: "Measuring the patient's progress toward stated goals occurs in the ____ phase.", options: ["Assessment", "Planning", "Implementation", "Evaluation"], answer: 3, rationale: "Evaluation judges whether goals were met and closes the loop." },
      { type: "mcq", q: "The standardised international taxonomy of nursing diagnoses is:", options: ["NANDA-I", "ICD", "DSM", "CPT"], answer: 0, rationale: "NANDA-International provides standardised nursing diagnosis labels." },
      { type: "mcq", q: "The primary source of assessment data is usually the:", options: ["Family", "Old records", "Patient", "Laboratory"], answer: 2, rationale: "The patient is the primary source; others are secondary sources." },
      { type: "fill", q: "The five phases of the nursing process are abbreviated ____.", accept: ["ADPIE", "adpie"], rationale: "Assessment, Diagnosis, Planning, Implementation, Evaluation." },
      { type: "fill", q: "Data that are observable and measurable, such as vital signs, are called ____ data.", accept: ["objective"], rationale: "Objective data are signs; subjective data are what the patient reports." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "fon-04-theories",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "Nursing Theories & Models; Quality, Client-Centred & Holistic Care",
    readMinutes: 19,
    summary: "The purpose and levels of nursing theory; major theorists (Nightingale, Henderson, Orem, Roy, Peplau, Watson); the attributes of quality, client-centred and holistic nursing care; and indicators used to measure the quality of nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why nursing theory matters", p: "A theory is a set of interrelated concepts that describe, explain or predict phenomena and guide practice. Nursing theories give the discipline a distinct identity, organise knowledge, direct assessment and intervention, guide research and education, and justify why nurses do what they do. They convert nursing from routine task-completion into reasoned, purposeful, evidence-informed practice." },
      { h: "Levels of theory", list: [
        "Grand theories — broad, abstract frameworks (e.g., Orem's Self-Care Deficit Theory).",
        "Middle-range theories — narrower, testable and closer to practice (e.g., theories of pain, comfort, uncertainty).",
        "Practice (micro) theories — very specific, guiding a defined situation or intervention."
      ] },
      { h: "Selected major theorists", list: [
        "Florence Nightingale — Environmental Theory: manipulate the environment (air, light, warmth, cleanliness, quiet) to support the body's reparative process.",
        "Virginia Henderson — Need Theory: the nurse assists the individual in 14 basic activities they would perform unaided given strength, will or knowledge.",
        "Hildegard Peplau — Interpersonal Relations Theory: nursing is a therapeutic interpersonal process with phases (orientation, working, termination).",
        "Dorothea Orem — Self-Care Deficit Theory: nursing is needed when a person cannot meet their own self-care demands.",
        "Sister Callista Roy — Adaptation Model: the person is an adaptive system; nursing promotes adaptation across physiological, self-concept, role-function and interdependence modes.",
        "Jean Watson — Theory of Human Caring: caring is the moral, relational core of nursing (the caritas processes)."
      ] },
      { h: "Client-centred (person-centred) care", p: "Client-centred care organises care around the individual's values, preferences, culture and expressed needs, and treats the patient as an active partner. It is grounded in respect for autonomy and the therapeutic relationship." },
      { h: "Attributes and development of client-centred care", list: [
        "Respect for the patient's values, preferences and expressed needs.",
        "Coordination and integration of care; clear information and education.",
        "Physical comfort and emotional support; involvement of family.",
        "Developed through active listening, shared decision-making, cultural humility and continuity of caregiver."
      ] },
      { h: "Holistic nursing care", p: "Holistic care addresses the whole person — body, mind, emotion, social relationships and spirit — recognising that these dimensions are interconnected and that illness in one affects the others. It treats the patient, not merely the disease." },
      { h: "Attributes and development of holistic care", list: [
        "Attends to physical, psychological, social, cultural and spiritual needs together.",
        "Views the patient within family and community context.",
        "Uses caring presence, therapeutic communication and comfort measures.",
        "Developed by comprehensive assessment, individualised planning and integrating complementary comfort strategies with scientific care."
      ] },
      { h: "Quality of nursing care and its indicators", p: "Quality nursing care is safe, effective, timely, efficient, equitable and person-centred (the six aims of quality). Structure-process-outcome (Donabedian) is a common framework: structure (resources and staffing), process (how care is given), and outcome (results for the patient).", list: [
        "Nurse-sensitive outcome indicators — pressure injury rate, patient fall rate, hospital-acquired infection rate, medication error rate.",
        "Process indicators — hand-hygiene compliance, timely assessment and documentation, pain reassessment.",
        "Structure indicators — nurse staffing levels and skill mix.",
        "Patient experience — satisfaction and reported respect and information."
      ] },
      { h: "Key terms", list: [
        "Metaparadigm — the four global concepts a theory addresses.",
        "Nurse-sensitive indicator — an outcome directly influenced by nursing care.",
        "Cultural humility — ongoing self-reflection and respect for the patient's culture.",
        "Caritas — Watson's caring processes at the heart of nursing."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define nursing theory and explain its importance to practice, research and education.",
      "Describe the three levels of nursing theory with an example of each.",
      "Compare the contributions of Nightingale, Henderson and Orem to nursing.",
      "Discuss the attributes of client-centred and holistic nursing care.",
      "Explain, with examples, the indicators used to measure the quality of nursing care."
    ],
    assessment: [
      { type: "mcq", q: "Orem is best known for which theory?", options: ["Environmental Theory", "Self-Care Deficit Theory", "Adaptation Model", "Human Caring Theory"], answer: 1, rationale: "Orem developed the Self-Care Deficit Nursing Theory." },
      { type: "mcq", q: "A broad, abstract nursing framework is a:", options: ["Practice theory", "Middle-range theory", "Grand theory", "Hypothesis"], answer: 2, rationale: "Grand theories are the most abstract and comprehensive." },
      { type: "mcq", q: "Peplau's theory describes nursing primarily as a(n):", options: ["Environmental process", "Interpersonal (therapeutic) process", "Adaptation process", "Mechanical task"], answer: 1, rationale: "Peplau's Interpersonal Relations Theory frames nursing as a therapeutic relationship." },
      { type: "mcq", q: "Care organised around the patient's values and preferences as an active partner is:", options: ["Task-centred care", "Client-centred care", "Custodial care", "Routine care"], answer: 1, rationale: "Client-centred care makes the patient's values central and the patient an active partner." },
      { type: "mcq", q: "Holistic care addresses the patient's:", options: ["Disease only", "Physical needs only", "Body, mind, social and spiritual dimensions", "Paperwork only"], answer: 2, rationale: "Holistic care attends to all interconnected dimensions of the person." },
      { type: "mcq", q: "Which is a nurse-sensitive outcome indicator?", options: ["Building maintenance", "Pressure injury rate", "Hospital parking", "Cafeteria menu"], answer: 1, rationale: "Pressure injury rate is directly influenced by nursing care." },
      { type: "mcq", q: "In Donabedian's framework, staffing levels are an example of:", options: ["Process", "Outcome", "Structure", "Evaluation"], answer: 2, rationale: "Structure refers to resources such as staffing and skill mix." },
      { type: "mcq", q: "Watson's theory is centred on:", options: ["Environment", "Human caring", "Self-care", "Adaptation"], answer: 1, rationale: "Watson's Theory of Human Caring centres on the caritas processes." },
      { type: "mcq", q: "Henderson's Need Theory lists how many basic activities?", options: ["7", "10", "14", "21"], answer: 2, rationale: "Henderson described 14 basic human needs/activities the nurse assists with." },
      { type: "mcq", q: "Ongoing self-reflection and respect for the patient's culture is called:", options: ["Stereotyping", "Cultural humility", "Ethnocentrism", "Bias"], answer: 1, rationale: "Cultural humility involves continuous self-reflection and respect for the patient's culture." },
      { type: "fill", q: "An outcome directly influenced by nursing care, such as fall rate, is called a nurse-____ indicator.", accept: ["sensitive"], rationale: "Nurse-sensitive indicators reflect the impact of nursing care." },
      { type: "fill", q: "Nightingale's theory is known as the ____ Theory.", accept: ["Environmental", "environment"], rationale: "Nightingale's Environmental Theory focuses on manipulating the environment for healing." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "fon-05-delivery-system",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "Health-Care Delivery System, Levels of Care & Nursing Accountability",
    readMinutes: 18,
    summary: "The structure of the health-care delivery system; primary, secondary and tertiary levels of care; types of care facilities; nurses' roles in promoting, maintaining and restoring health; and nursing self-management and accountability.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The health-care delivery system", p: "A health-care delivery system is the organised network of people, institutions, resources and services that provides health care to a population. It aims to promote health, prevent disease, diagnose and treat illness, and rehabilitate. In Bangladesh it spans community and primary facilities (community clinics, union and upazila health complexes), district hospitals, and specialised/tertiary institutions, complemented by private and non-governmental providers." },
      { h: "Levels of care", list: [
        "Primary care — first point of contact; health promotion, prevention, screening and management of common problems (community clinics, health centres, general practice).",
        "Secondary care — more specialised diagnostic and treatment services, usually on referral (district/general hospitals, specialists).",
        "Tertiary care — highly specialised, complex care and advanced technology (medical college and specialised hospitals, ICUs, transplant and cancer centres)."
      ] },
      { h: "Levels of prevention (a related framework)", list: [
        "Primary prevention — prevent disease before it occurs (immunisation, health education, sanitation).",
        "Secondary prevention — early detection and prompt treatment (screening, early diagnosis).",
        "Tertiary prevention — limit disability and rehabilitate after established disease."
      ] },
      { h: "Types of care facilities", list: [
        "Acute care — short-term care for sudden, severe illness or injury (hospitals).",
        "Sub-acute care — care between acute and long-term, for recovery or continuing complex needs.",
        "Chronic (long-term) care — ongoing care for lasting conditions or disability.",
        "Rehabilitation care — restoring function after illness, injury or surgery.",
        "Ambulatory (outpatient) care — care without overnight admission (clinics, day surgery).",
        "Home care — services delivered in the patient's own home.",
        "Palliative/hospice care — comfort-focused care for life-limiting illness."
      ] },
      { h: "Nurses' roles: promoting, maintaining, restoring health", list: [
        "Promoting health — health education, lifestyle counselling, immunisation and screening.",
        "Maintaining health — supporting self-care, adherence and stable chronic-disease management.",
        "Restoring health — direct care of the ill, rehabilitation and helping the patient regain function."
      ] },
      { h: "The interprofessional health-care team", p: "Care is delivered by a team — nurses, physicians, pharmacists, physiotherapists, dietitians, social workers, technicians and support staff. The nurse frequently coordinates the team, ensures continuity, communicates across disciplines and advocates for the patient, making collaboration a core competency." },
      { h: "Nursing self-management", p: "Self-management is the nurse's ability to organise workload, set priorities, manage time and stress, maintain competence through lifelong learning, and practise self-care to prevent burnout. Effective self-management underpins safe, sustainable practice." },
      { h: "Accountability and responsibility", p: "Responsibility is the obligation to perform a task; accountability is being answerable for the outcomes of one's actions and omissions to the patient, the profession, the employer and society. Accountability is anchored in the scope of practice, standards, the code of ethics and the law, and includes accurate documentation, appropriate delegation, and reporting errors and unsafe conditions." },
      { h: "Key terms", list: [
        "Referral — directing a patient to a higher level or specialist service.",
        "Continuity of care — coordinated, uninterrupted care across settings and time.",
        "Scope of practice — the range of activities a nurse is authorised and competent to perform.",
        "Delegation — assigning a task to another while retaining accountability."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the structure of the health-care delivery system and its aims.",
      "Differentiate between primary, secondary and tertiary levels of care with examples.",
      "List and explain the types of care facilities within the delivery system.",
      "Explain the nurse's roles in promoting, maintaining and restoring health.",
      "Differentiate responsibility from accountability and discuss nursing self-management."
    ],
    assessment: [
      { type: "mcq", q: "The first point of contact for health care is:", options: ["Tertiary care", "Secondary care", "Primary care", "Rehabilitation care"], answer: 2, rationale: "Primary care is the first, most accessible point of contact." },
      { type: "mcq", q: "An intensive care unit in a specialised hospital is an example of:", options: ["Primary care", "Secondary care", "Tertiary care", "Home care"], answer: 2, rationale: "Highly specialised, complex care is tertiary care." },
      { type: "mcq", q: "Immunisation is an example of:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Rehabilitation"], answer: 0, rationale: "Primary prevention stops disease before it occurs." },
      { type: "mcq", q: "Care delivered without overnight admission is:", options: ["Acute care", "Ambulatory care", "Chronic care", "Hospice care"], answer: 1, rationale: "Ambulatory (outpatient) care needs no overnight stay." },
      { type: "mcq", q: "Screening for early disease detection is:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Health promotion"], answer: 1, rationale: "Secondary prevention emphasises early detection and prompt treatment." },
      { type: "mcq", q: "Being answerable for the outcomes of one's actions is:", options: ["Responsibility", "Accountability", "Delegation", "Autonomy"], answer: 1, rationale: "Accountability is answerability for the results of one's actions and omissions." },
      { type: "mcq", q: "Assigning a task to another while retaining accountability is:", options: ["Referral", "Delegation", "Continuity", "Advocacy"], answer: 1, rationale: "In delegation the nurse assigns a task but remains accountable." },
      { type: "mcq", q: "Restoring function after injury or surgery is provided by:", options: ["Rehabilitation care", "Acute care", "Ambulatory care", "Primary prevention"], answer: 0, rationale: "Rehabilitation care aims to restore function." },
      { type: "mcq", q: "Directing a patient to a specialist or higher level of care is a:", options: ["Referral", "Discharge", "Delegation", "Diagnosis"], answer: 0, rationale: "A referral moves the patient to appropriate specialist or higher-level care." },
      { type: "mcq", q: "Managing workload, time, stress and lifelong learning to sustain safe practice is nursing:", options: ["Delegation", "Self-management", "Accountability", "Advocacy"], answer: 1, rationale: "Self-management sustains competence and prevents burnout." },
      { type: "fill", q: "Coordinated, uninterrupted care across settings and time is called ____ of care.", accept: ["continuity"], rationale: "Continuity of care ensures seamless care across settings." },
      { type: "fill", q: "The range of activities a nurse is authorised and competent to perform is the ____ of practice.", accept: ["scope"], rationale: "Scope of practice defines authorised, competent nursing activities." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "fon-06-communication",
    unit: "Unit 2 · Communication & Relationships in Nursing",
    title: "Communication in Nursing: Types, Purposes & Assertive Communication",
    readMinutes: 18,
    summary: "The communication process and its elements; verbal, non-verbal and written types; purposes and functions of communication in nursing; assertive and responsible communication; and factors influencing communication.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is communication?", p: "Communication is the dynamic, two-way process of exchanging information, ideas, feelings and meaning between people. In nursing it is the foundation of the therapeutic relationship, safe care and teamwork; virtually every nursing action depends on effective communication." },
      { h: "Elements of the communication process", p: "Communication is a cyclical process, and a breakdown at any point causes miscommunication.", figure: {
        caption: "The communication process: sender encodes a message, sends it through a channel to a receiver who decodes it and gives feedback.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication process elements"><defs><marker id="cmArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="40" width="90" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="60" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Sender</text><text x="60" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">encodes</text><rect x="150" y="40" width="100" height="46" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="200" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Message</text><text x="200" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">via channel</text><rect x="300" y="40" width="95" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="347" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Receiver</text><text x="347" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">decodes</text><line x1="105" y1="63" x2="146" y2="63" stroke="#0F4C3A" stroke-width="2" marker-end="url(#cmArr)"/><line x1="250" y1="63" x2="296" y2="63" stroke="#0F4C3A" stroke-width="2" marker-end="url(#cmArr)"/><path d="M347 90 C 347 125, 60 125, 60 90" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#cmArr)"/><text x="205" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">feedback</text></svg>'
      } },
      { h: "Types of communication", list: [
        "Verbal — spoken or written words; affected by pace, tone, clarity, timing and vocabulary.",
        "Non-verbal — body language, facial expression, eye contact, posture, gestures, touch, appearance and silence; often more powerful and honest than words.",
        "Written — documentation, reports and health-education materials; must be clear, accurate and legible."
      ] },
      { h: "Levels of communication", list: [
        "Intrapersonal — self-talk within an individual.",
        "Interpersonal — between two people (nurse and patient).",
        "Small-group — within the health-care team.",
        "Public/organisational — health education to communities or institutions."
      ] },
      { h: "Purposes and functions of communication in nursing", list: [
        "To gather and share accurate information for assessment and care.",
        "To establish and sustain the therapeutic relationship.",
        "To educate, counsel and support patients and families.",
        "To coordinate safe care within the team and hand over responsibility.",
        "To provide comfort, reassurance and emotional support."
      ] },
      { h: "Assertive communication", p: "Assertive communication is the honest, direct and respectful expression of one's thoughts, feelings and needs while respecting the rights of others. It sits between passive communication (suppressing one's own needs) and aggressive communication (violating others' rights). Assertiveness protects patient safety (e.g., speaking up about an unsafe order) and supports professional collaboration." },
      { h: "Techniques for assertiveness", list: [
        "Use 'I' statements ('I am concerned that...') rather than blaming.",
        "Be specific, calm and respectful; maintain eye contact and steady tone.",
        "Say 'no' appropriately and set professional boundaries.",
        "Use structured tools such as SBAR (Situation, Background, Assessment, Recommendation) to communicate concerns clearly."
      ] },
      { h: "Factors influencing communication", list: [
        "Developmental stage, language and culture.",
        "Emotional state, anxiety and pain.",
        "Sensory or cognitive impairment (hearing, vision, confusion).",
        "Environment — privacy, noise and interruptions.",
        "Values, beliefs and prior experiences of both parties."
      ] },
      { h: "Key terms", list: [
        "Encoding — converting an idea into a message.",
        "Decoding — interpreting a received message.",
        "Feedback — the receiver's response confirming understanding.",
        "SBAR — a structured framework for concise clinical communication."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define communication and describe the elements of the communication process with a diagram.",
      "Differentiate between verbal and non-verbal communication with examples.",
      "State the purposes and functions of communication in nursing.",
      "Compare passive, assertive and aggressive communication.",
      "Discuss the factors that influence communication and how to overcome them."
    ],
    assessment: [
      { type: "mcq", q: "The person who initiates and encodes a message is the:", options: ["Receiver", "Sender", "Channel", "Feedback"], answer: 1, rationale: "The sender encodes and initiates the message." },
      { type: "mcq", q: "Body language, facial expression and gestures are forms of ____ communication.", options: ["Verbal", "Written", "Non-verbal", "Intrapersonal"], answer: 2, rationale: "These are non-verbal cues." },
      { type: "mcq", q: "Interpreting a received message is called:", options: ["Encoding", "Decoding", "Feedback", "Channelling"], answer: 1, rationale: "Decoding is the receiver's interpretation of the message." },
      { type: "mcq", q: "Honest, direct and respectful expression that respects others' rights is:", options: ["Passive communication", "Aggressive communication", "Assertive communication", "Silent communication"], answer: 2, rationale: "Assertive communication balances self-expression with respect for others." },
      { type: "mcq", q: "SBAR is a structured tool for:", options: ["Bathing a patient", "Clinical handover/communication", "Measuring temperature", "Wound dressing"], answer: 1, rationale: "SBAR (Situation, Background, Assessment, Recommendation) structures clinical communication." },
      { type: "mcq", q: "The receiver's response that confirms understanding is:", options: ["Encoding", "Feedback", "The channel", "Noise"], answer: 1, rationale: "Feedback closes the loop and confirms the message was understood." },
      { type: "mcq", q: "Self-talk within an individual is ____ communication.", options: ["Interpersonal", "Intrapersonal", "Public", "Group"], answer: 1, rationale: "Intrapersonal communication occurs within the self." },
      { type: "mcq", q: "Using 'I' statements is a technique of:", options: ["Aggressive communication", "Passive communication", "Assertive communication", "Non-communication"], answer: 2, rationale: "'I' statements express needs assertively without blaming." },
      { type: "mcq", q: "Which factor can impair communication?", options: ["Privacy", "Hearing impairment", "Clear language", "Calm environment"], answer: 1, rationale: "Sensory impairment such as hearing loss can hinder communication." },
      { type: "mcq", q: "Communication is best described as a process that is:", options: ["One-way only", "Dynamic and two-way", "Only written", "Only verbal"], answer: 1, rationale: "Communication is a dynamic, two-way exchange with feedback." },
      { type: "fill", q: "Converting an idea into a message is called ____.", accept: ["encoding"], rationale: "Encoding transforms an idea into a transmittable message." },
      { type: "fill", q: "The communication style that respects both self and others is ____ communication.", accept: ["assertive"], rationale: "Assertive communication balances one's own and others' rights." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "fon-07-therapeutic-relationship",
    unit: "Unit 2 · Communication & Relationships in Nursing",
    title: "The Nurse-Patient Relationship, Therapeutic Techniques & Barriers",
    readMinutes: 19,
    summary: "The therapeutic nurse-patient relationship and its phases; key elements (warmth, respect, genuineness, empathy); therapeutic communication techniques; barriers to relationship and communication; bridges to relationship; and communicating with the health-care team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The therapeutic relationship", p: "The therapeutic (helping) relationship is a purposeful, goal-directed, patient-centred professional relationship established to meet the patient's health needs. Unlike a social relationship it is planned, time-limited, focused on the patient's needs, and bounded by professional ethics. Peplau described it as the essence of nursing." },
      { h: "Phases of the helping relationship (Peplau)", list: [
        "Pre-interaction — the nurse prepares before meeting the patient (reviews information, examines own feelings).",
        "Orientation (introductory) — building trust and rapport, setting boundaries and goals.",
        "Working phase — active work toward goals; the patient explores and the nurse intervenes.",
        "Termination — summarising, evaluating progress and ending the relationship therapeutically."
      ] },
      { h: "Key elements in building relationships", list: [
        "Warmth — conveying friendliness, acceptance and caring.",
        "Respect — valuing the patient as a worthwhile person (unconditional positive regard).",
        "Genuineness — being real, honest and congruent.",
        "Empathy — accurately sensing and communicating understanding of the patient's feelings.",
        "Self-disclosure — sharing limited, purposeful information to build connection.",
        "Effective questioning and appropriate expression of opinions."
      ] },
      { h: "Therapeutic communication techniques", list: [
        "Active listening and attending; using silence purposefully.",
        "Open-ended questions to encourage expression.",
        "Reflecting and restating to show understanding.",
        "Clarifying and seeking validation.",
        "Focusing, summarising and offering information.",
        "Using touch and presence appropriately."
      ] },
      { h: "Non-therapeutic responses / barriers to communication", list: [
        "Giving false reassurance ('Everything will be fine').",
        "Giving advice or approving/disapproving prematurely.",
        "Asking 'why' questions and probing that feels intrusive.",
        "Changing the subject, defensiveness or stereotyping.",
        "Being judgemental or offering clich&eacute;s."
      ] },
      { h: "Barriers to the interpersonal relationship", list: [
        "Anxiety — in patient or nurse, narrowing attention and distorting messages.",
        "Stereotyping — fixed, generalised assumptions about a person or group.",
        "Lack of personal space and privacy.",
        "Language, cultural and sensory differences."
      ] },
      { h: "Bridges to the relationship", list: [
        "Caring — genuine concern for the patient's welfare.",
        "Trust — reliability and honesty that make the patient feel safe.",
        "Empathy — shared understanding of feelings.",
        "Mutuality — working together toward shared goals.",
        "Confidentiality — protecting private information."
      ] },
      { h: "Communicating with health-care professionals", list: [
        "Advocacy — representing the patient's interests and voice.",
        "Conflict resolution — addressing disagreement constructively.",
        "Collaboration and teamwork across disciplines.",
        "Delegation and supervision of non-trained staff.",
        "Peer negotiation and developing a support system.",
        "Structured handover (e.g., SBAR) to ensure safety."
      ] },
      { h: "Key terms", list: [
        "Empathy — understanding and sharing another's feelings (differs from sympathy, which is feeling pity).",
        "Rapport — a relationship of mutual trust and understanding.",
        "Unconditional positive regard — accepting the patient without judgement.",
        "Advocacy — acting to protect and promote the patient's rights and interests."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define the therapeutic relationship and describe its phases according to Peplau.",
      "Explain the key elements (warmth, respect, genuineness, empathy) in building a therapeutic relationship.",
      "List and explain five therapeutic communication techniques.",
      "Discuss the barriers to interpersonal relationships and the bridges that overcome them.",
      "Describe the nurse's communication with other health-care professionals, including advocacy and conflict resolution."
    ],
    assessment: [
      { type: "mcq", q: "The phase in which the nurse first builds trust and sets goals is the:", options: ["Pre-interaction phase", "Orientation phase", "Working phase", "Termination phase"], answer: 1, rationale: "The orientation phase establishes rapport, trust and goals." },
      { type: "mcq", q: "Accurately sensing and communicating understanding of a patient's feelings is:", options: ["Sympathy", "Empathy", "Pity", "Apathy"], answer: 1, rationale: "Empathy is understanding and conveying the patient's feelings; sympathy is feeling pity." },
      { type: "mcq", q: "Which is a therapeutic communication technique?", options: ["Giving false reassurance", "Active listening", "Changing the subject", "Being judgemental"], answer: 1, rationale: "Active listening is therapeutic; the others are barriers." },
      { type: "mcq", q: "'Everything will be fine' is an example of:", options: ["Empathy", "False reassurance", "Clarifying", "Reflecting"], answer: 1, rationale: "False reassurance blocks genuine expression of feelings." },
      { type: "mcq", q: "Fixed, generalised assumptions about a group are:", options: ["Empathy", "Stereotyping", "Rapport", "Mutuality"], answer: 1, rationale: "Stereotyping applies rigid generalisations and is a barrier." },
      { type: "mcq", q: "Accepting the patient without judgement is:", options: ["Stereotyping", "Unconditional positive regard", "Advocacy", "Delegation"], answer: 1, rationale: "Unconditional positive regard is non-judgemental acceptance." },
      { type: "mcq", q: "Representing and speaking up for the patient's interests is:", options: ["Delegation", "Advocacy", "Supervision", "Termination"], answer: 1, rationale: "Advocacy protects and promotes the patient's rights." },
      { type: "mcq", q: "A relationship of mutual trust and understanding is called:", options: ["Rapport", "Rivalry", "Routine", "Referral"], answer: 0, rationale: "Rapport is mutual trust and understanding." },
      { type: "mcq", q: "In which phase does the nurse examine their own feelings before meeting the patient?", options: ["Working", "Termination", "Pre-interaction", "Orientation"], answer: 2, rationale: "Pre-interaction is the preparation phase before meeting the patient." },
      { type: "mcq", q: "Working together toward shared goals is:", options: ["Mutuality", "Anxiety", "Stereotyping", "Defensiveness"], answer: 0, rationale: "Mutuality is collaborative goal pursuit and a bridge to relationship." },
      { type: "fill", q: "The final phase of the therapeutic relationship is ____.", accept: ["termination"], rationale: "Termination summarises, evaluates and ends the relationship therapeutically." },
      { type: "fill", q: "Protecting a patient's private information is called maintaining ____.", accept: ["confidentiality"], rationale: "Confidentiality safeguards private information and builds trust." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "fon-08-documentation",
    unit: "Unit 2 · Communication & Relationships in Nursing",
    title: "Documentation, Reporting & Records in Nursing",
    readMinutes: 17,
    summary: "The purposes and principles of documentation; types of records and charting methods; reporting and handover; the legal and professional importance of accurate records; and common documentation errors and safeguards.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Documentation and reporting", p: "Documentation (charting) is the written or electronic record of the patient's care and status. Reporting is the oral, written or electronic exchange of information between caregivers. Together they ensure continuity, safety, communication, accountability and a legal record of care. A widely quoted principle is 'not documented, not done'." },
      { h: "Purposes of documentation", list: [
        "Communication — informs the whole health-care team and ensures continuity.",
        "Legal record — an accurate account admissible as evidence.",
        "Care planning and evaluation — supports the nursing process.",
        "Quality improvement, audit and accreditation.",
        "Research, education and statistics.",
        "Reimbursement and resource use (where applicable)."
      ] },
      { h: "Principles of good documentation", list: [
        "Factual — objective, based on what is seen, heard, felt or measured; avoid vague terms.",
        "Accurate and precise — exact measurements, correct spelling and approved abbreviations.",
        "Complete and relevant — record all pertinent information.",
        "Current (timely) — chart as soon as possible after care; note date and time.",
        "Organised and legible; each entry signed with name and designation.",
        "Confidential — protect the record and patient privacy."
      ] },
      { h: "Types of records", list: [
        "Patient's chart / medical record (paper or electronic health record, EHR).",
        "Nursing care plan and progress notes.",
        "Medication administration record (MAR).",
        "Vital signs and intake-output charts, flow sheets.",
        "Admission, transfer and discharge records; incident reports."
      ] },
      { h: "Methods / formats of charting", list: [
        "Narrative charting — chronological story of care.",
        "Problem-oriented medical record (POMR) with SOAP/SOAPIE notes (Subjective, Objective, Assessment, Plan, Intervention, Evaluation).",
        "Focus (DAR) charting — Data, Action, Response.",
        "Charting by exception — records only deviations from norms.",
        "Electronic health records — increasingly standard, improving legibility and access."
      ] },
      { h: "Reporting and handover", p: "Handover (shift report) transfers responsibility and essential information between nurses or teams. Structured formats such as SBAR reduce omissions and errors. Other reports include telephone orders (read back and verify), transfer and incident reports, and reporting critical values promptly." },
      { h: "Correcting errors and safeguards", list: [
        "Never erase, overwrite or use correction fluid; draw a single line through an error, write 'error', and initial.",
        "Never chart in advance or for another person.",
        "Do not leave blank spaces; avoid altering records after the fact.",
        "Protect passwords and log off electronic systems to maintain security."
      ] },
      { h: "Legal and ethical importance", p: "The record is a legal document; accurate, timely, honest documentation protects the patient and the nurse, demonstrates the standard of care, and is central to accountability. Falsification or careless documentation is a serious professional and legal offence, and breaches of confidentiality violate patient rights." },
      { h: "Key terms", list: [
        "Charting — the act of recording care in the record.",
        "SOAP — Subjective, Objective, Assessment, Plan format.",
        "Handover — structured transfer of care responsibility.",
        "EHR — electronic health record."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define documentation and reporting and state their purposes in nursing.",
      "Explain the principles of good nursing documentation.",
      "Describe the common methods/formats of charting with examples.",
      "Discuss the correct procedure for correcting a documentation error.",
      "Explain the legal and ethical importance of nursing records."
    ],
    assessment: [
      { type: "mcq", q: "The principle 'not documented, not done' emphasises that:", options: ["Care need not be recorded", "Unrecorded care may be treated as not given", "Only doctors document", "Documentation is optional"], answer: 1, rationale: "Legally, care that is not documented may be regarded as not having been performed." },
      { type: "mcq", q: "A documentation entry should be:", options: ["Vague and general", "Factual and objective", "Charted in advance", "Written for others"], answer: 1, rationale: "Entries must be factual, objective and based on observed data." },
      { type: "mcq", q: "In SOAP charting, the 'O' stands for:", options: ["Opinion", "Objective", "Order", "Outcome"], answer: 1, rationale: "O is Objective data in the SOAP format." },
      { type: "mcq", q: "The correct way to fix a charting error is to:", options: ["Erase it", "Use correction fluid", "Draw a single line, write 'error' and initial", "Rewrite the whole page"], answer: 2, rationale: "A single line, the word 'error' and initials preserve the original entry legally." },
      { type: "mcq", q: "Focus (DAR) charting records Data, Action and:", options: ["Diagnosis", "Response", "Reason", "Review"], answer: 1, rationale: "DAR = Data, Action, Response." },
      { type: "mcq", q: "The structured transfer of care responsibility between shifts is:", options: ["Handover", "Admission", "Discharge", "Delegation"], answer: 0, rationale: "Handover (shift report) transfers responsibility and information." },
      { type: "mcq", q: "Which is a purpose of documentation?", options: ["To hide information", "To ensure communication and continuity", "To replace assessment", "To reduce accountability"], answer: 1, rationale: "Documentation ensures communication, continuity and accountability." },
      { type: "mcq", q: "The record listing all medicines given to a patient is the:", options: ["MAR", "SBAR", "SOAP", "EHR"], answer: 0, rationale: "The Medication Administration Record (MAR) documents medicines given." },
      { type: "mcq", q: "Charting only deviations from expected norms is called:", options: ["Narrative charting", "Charting by exception", "Focus charting", "SOAP charting"], answer: 1, rationale: "Charting by exception documents only abnormal findings/deviations." },
      { type: "mcq", q: "A telephone order should always be:", options: ["Acted on without checking", "Read back and verified", "Ignored", "Charted the next day"], answer: 1, rationale: "Reading back and verifying prevents transcription errors and improves safety." },
      { type: "fill", q: "The electronic version of a patient's record is abbreviated ____.", accept: ["EHR", "electronic health record"], rationale: "EHR stands for electronic health record." },
      { type: "fill", q: "In the SOAP format, 'S' stands for ____ data.", accept: ["subjective"], rationale: "S is the subjective data reported by the patient." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "fon-09-vital-signs",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Vital Signs: Temperature, Pulse, Respiration & Blood Pressure",
    readMinutes: 20,
    summary: "The physiology, normal ranges, measurement, and nursing interpretation of the four vital signs plus pain and oxygen saturation; factors affecting them; and the clinical significance of abnormal findings.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are vital signs?", p: "Vital signs are objective measurements of the body's most basic physiological functions: body temperature, pulse, respiration and blood pressure. Pain (the 'fifth vital sign') and oxygen saturation (SpO2) are routinely added. They reflect the effectiveness of circulatory, respiratory, neural and endocrine function and are key indicators of health status and early deterioration." },
      { h: "When to measure vital signs", list: [
        "On admission and as a baseline.",
        "According to hospital policy and the patient's condition.",
        "Before and after surgery, procedures or blood transfusion.",
        "Before and after administering medications affecting them.",
        "Whenever the patient's condition changes or they report distress."
      ] },
      { h: "Body temperature", p: "Temperature reflects the balance between heat produced and heat lost, regulated by the hypothalamus. The normal oral average is about 37 degrees C (36.1-37.2 degrees C), varying with site (rectal higher, axillary lower). Fever (pyrexia) is a raised set-point due to pyrogens; hyperthermia is uncontrolled heat gain; hypothermia is dangerously low temperature. Sites: oral, axillary, rectal, tympanic and temporal.", list: [
        "Heat is lost by radiation, conduction, convection and evaporation.",
        "Factors: time of day (circadian), age, exercise, hormones, stress and environment."
      ] },
      { h: "Pulse", p: "The pulse is the palpable wave of arterial expansion produced by each ventricular contraction; it reflects heart rate, rhythm and volume. The normal adult resting rate is about 60-100 beats/min. Tachycardia is a fast rate (>100), bradycardia a slow rate (<60). Assess rate, rhythm (regular/irregular), volume/amplitude and equality. Common sites include the radial, carotid, brachial, femoral and apical pulses.", list: [
        "Factors: age, exercise, fever, emotions, pain, blood loss, medications and position."
      ] },
      { h: "Respiration", p: "Respiration is the exchange of oxygen and carbon dioxide, observed as breathing movements. The normal adult rate is about 12-20 breaths/min. Assess rate, depth, rhythm and effort; count without alerting the patient. Terms include eupnoea (normal), tachypnoea (fast), bradypnoea (slow), apnoea (absent), dyspnoea (difficult) and orthopnoea (breathless lying flat)." },
      { h: "Blood pressure", p: "Blood pressure (BP) is the force exerted by blood against arterial walls, recorded as systolic (ventricular contraction) over diastolic (relaxation) in mmHg. A normal adult value is about 120/80 mmHg. Hypertension is persistently elevated BP; hypotension is abnormally low BP. BP = cardiac output x peripheral resistance, so it is affected by blood volume, vessel elasticity and vascular tone.", figure: {
        caption: "Typical adult vital-sign reference ranges (values are standard averages; interpret with the patient's baseline).",
        svg: '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal adult vital sign ranges table"><rect x="10" y="10" width="440" height="170" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="10" y1="45" x2="450" y2="45" stroke="#0F4C3A" stroke-width="1.5"/><text x="30" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Vital sign</text><text x="270" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Normal adult range</text><text x="30" y="72" font-family="sans-serif" font-size="12" fill="#15803D">Temperature (oral)</text><text x="270" y="72" font-family="sans-serif" font-size="12" fill="#15803D">36.1-37.2 &#176;C</text><text x="30" y="102" font-family="sans-serif" font-size="12" fill="#15803D">Pulse</text><text x="270" y="102" font-family="sans-serif" font-size="12" fill="#15803D">60-100 beats/min</text><text x="30" y="132" font-family="sans-serif" font-size="12" fill="#15803D">Respiration</text><text x="270" y="132" font-family="sans-serif" font-size="12" fill="#15803D">12-20 breaths/min</text><text x="30" y="162" font-family="sans-serif" font-size="12" fill="#15803D">Blood pressure</text><text x="270" y="162" font-family="sans-serif" font-size="12" fill="#15803D">~120/80 mmHg</text></svg>'
      } },
      { h: "Oxygen saturation and pain", p: "SpO2, measured by pulse oximetry, estimates the percentage of haemoglobin saturated with oxygen; a normal value is about 95-100%. Pain, the fifth vital sign, is assessed with validated scales and is 'whatever the patient says it is'." },
      { h: "Nursing responsibilities", list: [
        "Use correct, clean and calibrated equipment and technique.",
        "Ensure the patient is rested; explain the procedure.",
        "Record accurately and promptly; compare with baseline and trends.",
        "Recognise and report abnormal values and act appropriately."
      ] },
      { h: "Key terms", list: [
        "Pyrexia — fever; elevated body temperature.",
        "Tachycardia / bradycardia — fast / slow heart rate.",
        "Dyspnoea — difficult or laboured breathing.",
        "Systolic / diastolic — pressures during contraction / relaxation of the heart."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define vital signs and state when they should be measured.",
      "Describe the normal ranges of temperature, pulse, respiration and blood pressure in an adult.",
      "Explain the physiology of blood pressure and the factors that affect it.",
      "Describe how you would assess a patient's pulse and what characteristics you would note.",
      "Discuss the nursing responsibilities in measuring and recording vital signs."
    ],
    assessment: [
      { type: "mcq", q: "The normal resting adult pulse rate is:", options: ["40-60 beats/min", "60-100 beats/min", "100-140 beats/min", "20-40 beats/min"], answer: 1, rationale: "A normal adult resting pulse is 60-100 beats/min." },
      { type: "mcq", q: "The centre that regulates body temperature is the:", options: ["Cerebellum", "Medulla", "Hypothalamus", "Pituitary"], answer: 2, rationale: "The hypothalamus acts as the body's thermostat." },
      { type: "mcq", q: "The normal adult respiratory rate is about:", options: ["12-20 breaths/min", "6-10 breaths/min", "24-30 breaths/min", "30-40 breaths/min"], answer: 0, rationale: "Normal adult respiration is 12-20 breaths/min." },
      { type: "mcq", q: "A blood pressure reading is expressed as:", options: ["Diastolic over systolic", "Pulse over respiration", "Systolic over diastolic", "Rate over rhythm"], answer: 2, rationale: "BP is recorded as systolic over diastolic in mmHg." },
      { type: "mcq", q: "Fever (elevated body temperature) is termed:", options: ["Hypothermia", "Pyrexia", "Bradycardia", "Apnoea"], answer: 1, rationale: "Pyrexia is fever; hypothermia is low temperature." },
      { type: "mcq", q: "A heart rate above 100 beats/min is:", options: ["Bradycardia", "Eupnoea", "Tachycardia", "Apnoea"], answer: 2, rationale: "Tachycardia is a rate above 100 beats/min." },
      { type: "mcq", q: "Blood pressure equals cardiac output multiplied by:", options: ["Respiratory rate", "Temperature", "Peripheral resistance", "Pulse volume"], answer: 2, rationale: "BP = cardiac output x peripheral (vascular) resistance." },
      { type: "mcq", q: "A normal oxygen saturation (SpO2) is about:", options: ["70-80%", "85-90%", "95-100%", "50-60%"], answer: 2, rationale: "Normal SpO2 by pulse oximetry is roughly 95-100%." },
      { type: "mcq", q: "Difficult or laboured breathing is called:", options: ["Eupnoea", "Dyspnoea", "Bradypnoea", "Apnoea"], answer: 1, rationale: "Dyspnoea is difficult or laboured breathing." },
      { type: "mcq", q: "Pain is often described as the:", options: ["First vital sign", "Third vital sign", "Fifth vital sign", "No vital sign"], answer: 2, rationale: "Pain is commonly called the fifth vital sign." },
      { type: "fill", q: "The pressure during ventricular contraction is called the ____ pressure.", accept: ["systolic"], rationale: "Systolic pressure occurs during ventricular contraction." },
      { type: "fill", q: "A slow heart rate below 60 beats/min is called ____.", accept: ["bradycardia"], rationale: "Bradycardia is a heart rate below 60 beats/min." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "fon-10-health-assessment",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Health Assessment & Physical Examination (History Taking & IPPA)",
    readMinutes: 19,
    summary: "The purpose and components of health assessment; health history taking; the four techniques of physical examination (inspection, palpation, percussion, auscultation); approaches to the examination; and documentation of findings.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is health assessment?", p: "Health assessment is the systematic and continuous collection of subjective and objective data about a patient's health status. It is the first and foundational phase of the nursing process, providing the database for nursing diagnoses and care. It combines the health history (subjective) with the physical examination (objective)." },
      { h: "Components of a health history", list: [
        "Biographic data and reason for seeking care (chief complaint).",
        "History of present illness (onset, location, duration, character, aggravating/relieving factors, associated symptoms).",
        "Past medical, surgical and medication history; allergies.",
        "Family history and psychosocial/lifestyle history.",
        "Review of systems — a systematic check of each body system."
      ] },
      { h: "Preparing for the physical examination", list: [
        "Ensure privacy, comfort, warmth and adequate lighting.",
        "Gather and clean equipment; perform hand hygiene.",
        "Explain the procedure and obtain consent; position and drape appropriately.",
        "Proceed systematically, usually head-to-toe, comparing sides for symmetry."
      ] },
      { h: "The four techniques (IPPA)", p: "Physical examination uses four sequential techniques — inspection, palpation, percussion and auscultation — usually in that order, except for the abdomen where auscultation precedes palpation and percussion to avoid altering bowel sounds.", figure: {
        caption: "The four physical examination techniques (IPPA) in usual order.",
        svg: '<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IPPA physical examination techniques"><defs><marker id="ipArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="65" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Inspection</text><text x="65" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">look</text><rect x="140" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="195" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Palpation</text><text x="195" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">feel</text><rect x="270" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="325" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Percussion</text><text x="325" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">tap</text><rect x="400" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="455" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Auscultation</text><text x="455" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">listen</text><line x1="120" y1="62" x2="136" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ipArr)"/><line x1="250" y1="62" x2="266" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ipArr)"/><line x1="380" y1="62" x2="396" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ipArr)"/></svg>'
      } },
      { h: "1. Inspection", p: "Systematic visual observation of the body for colour, size, shape, symmetry, movement, lesions and other characteristics, using good lighting and comparing both sides. Inspection begins the moment the nurse meets the patient." },
      { h: "2. Palpation", p: "Using the hands and fingers to feel for texture, temperature, moisture, tenderness, masses, pulsation, swelling and organ size. Light palpation precedes deep palpation; the fingertips detect fine detail while the palm and back of the hand assess vibration and temperature." },
      { h: "3. Percussion", p: "Tapping the body surface to produce sounds that indicate the density of underlying tissue. Resonance suggests air-filled lungs, dullness suggests solid organs or fluid, and tympany suggests air-filled structures such as the stomach or bowel. Percussion helps locate organ borders and detect fluid or air abnormally present." },
      { h: "4. Auscultation", p: "Listening, usually with a stethoscope, to sounds produced within the body — heart sounds, breath sounds, bowel sounds and bruits. The diaphragm detects high-pitched sounds and the bell low-pitched sounds. Auscultation requires a quiet environment and systematic technique." },
      { h: "Documenting and using findings", p: "Findings are recorded objectively and precisely, then clustered and analysed to form nursing diagnoses and guide the care plan. Assessment is ongoing; the nurse continually compares new findings with baseline data to detect change and evaluate care." },
      { h: "Key terms", list: [
        "Subjective data — the health history (what the patient reports).",
        "Objective data — physical examination findings (what is observed).",
        "Resonance / dullness / tympany — percussion notes reflecting tissue density.",
        "Review of systems — systematic questioning about each body system."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define health assessment and describe its components.",
      "Outline the components of a comprehensive health history.",
      "Describe the four techniques of physical examination and their usual order.",
      "Explain why auscultation precedes palpation and percussion in the abdominal examination.",
      "Discuss the nursing preparation of a patient for a physical examination."
    ],
    assessment: [
      { type: "mcq", q: "The four techniques of physical examination in usual order are:", options: ["Palpation, inspection, auscultation, percussion", "Inspection, palpation, percussion, auscultation", "Auscultation, percussion, palpation, inspection", "Percussion, inspection, palpation, auscultation"], answer: 1, rationale: "The usual order is inspection, palpation, percussion, auscultation (IPPA)." },
      { type: "mcq", q: "Using the hands to feel for texture, masses and tenderness is:", options: ["Inspection", "Palpation", "Percussion", "Auscultation"], answer: 1, rationale: "Palpation uses touch to assess physical characteristics." },
      { type: "mcq", q: "Tapping the body to judge tissue density is:", options: ["Inspection", "Palpation", "Percussion", "Auscultation"], answer: 2, rationale: "Percussion produces sounds indicating underlying density." },
      { type: "mcq", q: "For the abdomen, the technique performed before palpation and percussion is:", options: ["Inspection then auscultation", "Percussion", "Palpation", "None"], answer: 0, rationale: "In the abdomen, inspection then auscultation come first to avoid altering bowel sounds." },
      { type: "mcq", q: "The percussion note over air-filled lungs is:", options: ["Dullness", "Resonance", "Flatness", "Tympany"], answer: 1, rationale: "Normal air-filled lung yields resonance." },
      { type: "mcq", q: "Health assessment is which phase of the nursing process?", options: ["Assessment", "Diagnosis", "Planning", "Evaluation"], answer: 0, rationale: "Assessment is the first phase and provides the database." },
      { type: "mcq", q: "Listening to body sounds with a stethoscope is:", options: ["Inspection", "Percussion", "Auscultation", "Palpation"], answer: 2, rationale: "Auscultation is listening to internally produced sounds." },
      { type: "mcq", q: "The systematic questioning about each body system is the:", options: ["Chief complaint", "Review of systems", "Family history", "Care plan"], answer: 1, rationale: "The review of systems checks each body system in turn." },
      { type: "mcq", q: "The health history mainly provides:", options: ["Objective data", "Subjective data", "Laboratory data", "Radiologic data"], answer: 1, rationale: "The history is the patient's subjective account." },
      { type: "mcq", q: "A dull percussion note usually indicates:", options: ["Air-filled lung", "Solid organ or fluid", "Empty stomach", "Normal bowel gas"], answer: 1, rationale: "Dullness reflects solid tissue or fluid beneath the surface." },
      { type: "fill", q: "Systematic visual observation of the patient is called ____.", accept: ["inspection"], rationale: "Inspection is careful, systematic visual examination." },
      { type: "fill", q: "The physical examination technique of listening with a stethoscope is ____.", accept: ["auscultation"], rationale: "Auscultation is listening to internal body sounds." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "fon-11-infection-control",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Infection Prevention & Control: Asepsis and Sterile Technique",
    readMinutes: 20,
    summary: "The chain of infection; medical and surgical asepsis; hand hygiene, gloving and personal protective equipment; standard and transmission-based precautions; sterilisation and disinfection; and prevention of health-care-associated infection.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Infection and its importance", p: "Infection is the invasion and multiplication of pathogenic microorganisms in body tissue, producing injury. Health-care-associated (nosocomial) infections increase morbidity, mortality, length of stay and cost. Infection prevention and control is a core nursing responsibility and a key quality and safety indicator." },
      { h: "The chain of infection", p: "Infection spreads through six linked elements; breaking any link prevents transmission, which is the principle behind all infection-control measures.", figure: {
        caption: "The chain of infection — breaking any link stops transmission.",
        svg: '<svg viewBox="0 0 470 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of infection cycle"><defs><marker id="ceArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><circle cx="235" cy="125" r="95" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4"/><g font-family="sans-serif" font-size="10" fill="#0F4C3A" text-anchor="middle"><rect x="185" y="8" width="100" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="235" y="27">Infectious agent</text><rect x="330" y="55" width="95" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="377" y="74">Reservoir</text><rect x="345" y="165" width="110" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="400" y="184">Portal of exit</text><rect x="185" y="212" width="100" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="235" y="231">Transmission</text><rect x="15" y="165" width="115" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="72" y="184">Portal of entry</text><rect x="45" y="55" width="110" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="100" y="74">Susceptible host</text></g></svg>'
      } },
      { h: "Links of the chain", list: [
        "Infectious agent — the pathogen (bacterium, virus, fungus, parasite).",
        "Reservoir — where it lives and multiplies (humans, animals, environment).",
        "Portal of exit — how it leaves (respiratory, blood, secretions, faeces).",
        "Mode of transmission — contact, droplet, airborne, vehicle or vector.",
        "Portal of entry — how it enters a new host (broken skin, mucosa, invasive devices).",
        "Susceptible host — a person with reduced defences."
      ] },
      { h: "Medical versus surgical asepsis", list: [
        "Medical asepsis (clean technique) — reduces the number and spread of microorganisms (hand hygiene, clean gloves, cleaning surfaces).",
        "Surgical asepsis (sterile technique) — eliminates all microorganisms and spores from an object or area (sterile field, sterile gloving, invasive procedures)."
      ] },
      { h: "Hand hygiene — the single most important measure", list: [
        "Perform hand hygiene using the WHO 'Five Moments': before touching a patient, before an aseptic task, after body-fluid exposure risk, after touching a patient, and after touching patient surroundings.",
        "Use soap and water for visibly soiled hands; alcohol-based hand rub otherwise.",
        "Cover all surfaces of the hands; correct duration and technique are essential."
      ] },
      { h: "Personal protective equipment (PPE) and gloving", list: [
        "PPE — gloves, gowns/aprons, masks, eye protection; selected by anticipated exposure.",
        "Don PPE before contact and doff carefully to avoid self-contamination; hand hygiene follows removal.",
        "Sterile gloving and sterile fields are used for invasive and surgical procedures; the sterile field is never turned away from or reached across."
      ] },
      { h: "Standard and transmission-based precautions", list: [
        "Standard precautions — applied to all patients: hand hygiene, PPE, safe injection and sharps practice, respiratory hygiene, and safe handling of equipment and waste.",
        "Transmission-based precautions — added for specific routes: contact, droplet and airborne precautions."
      ] },
      { h: "Sterilisation and disinfection", list: [
        "Sterilisation — destroys all microorganisms including spores (autoclave/moist heat, dry heat, chemical sterilants, radiation).",
        "Disinfection — destroys most pathogens on inanimate surfaces (chemical disinfectants).",
        "Antisepsis — reduces microorganisms on living tissue (skin antiseptics).",
        "Cleaning always precedes disinfection and sterilisation."
      ] },
      { h: "Nursing responsibilities and prevention", list: [
        "Consistent hand hygiene and correct PPE use; aseptic technique for invasive care.",
        "Care of invasive devices (catheters, cannulae) to prevent device-associated infection.",
        "Safe sharps handling, waste segregation and environmental cleaning.",
        "Patient and family education; supporting host defences (nutrition, immunisation)."
      ] },
      { h: "Key terms", list: [
        "Asepsis — the absence of pathogenic microorganisms.",
        "Nosocomial / HAI — health-care-associated infection.",
        "Standard precautions — infection-control measures applied to every patient.",
        "Sterilisation — complete destruction of all microorganisms and spores."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the chain of infection and explain how each link can be broken.",
      "Differentiate between medical asepsis and surgical asepsis with examples.",
      "Explain the WHO 'Five Moments' for hand hygiene.",
      "Differentiate between sterilisation, disinfection and antisepsis.",
      "Discuss the nurse's role in preventing health-care-associated infections."
    ],
    assessment: [
      { type: "mcq", q: "The single most effective measure to prevent infection transmission is:", options: ["Hand hygiene", "Wearing a gown", "Isolation", "Antibiotics"], answer: 0, rationale: "Hand hygiene is the most important infection-control measure." },
      { type: "mcq", q: "Which is NOT a link in the chain of infection?", options: ["Reservoir", "Portal of exit", "Susceptible host", "Documentation"], answer: 3, rationale: "The six links are agent, reservoir, portal of exit, transmission, portal of entry and host." },
      { type: "mcq", q: "Sterile technique that eliminates all microorganisms is:", options: ["Medical asepsis", "Clean technique", "Surgical asepsis", "Disinfection"], answer: 2, rationale: "Surgical asepsis (sterile technique) removes all microorganisms including spores." },
      { type: "mcq", q: "Sterilisation differs from disinfection because sterilisation also destroys:", options: ["Dust", "Bacterial spores", "Odours", "Stains"], answer: 1, rationale: "Sterilisation destroys all microorganisms including resistant spores." },
      { type: "mcq", q: "Standard precautions are applied to:", options: ["Only infected patients", "Only surgical patients", "All patients", "Only children"], answer: 2, rationale: "Standard precautions apply to every patient regardless of diagnosis." },
      { type: "mcq", q: "Reducing microorganisms on living skin is called:", options: ["Sterilisation", "Antisepsis", "Fumigation", "Incineration"], answer: 1, rationale: "Antisepsis reduces microorganisms on living tissue." },
      { type: "mcq", q: "An autoclave achieves sterilisation using:", options: ["Cold air", "Ultraviolet only", "Moist heat under pressure", "Plain water"], answer: 2, rationale: "The autoclave uses pressurised moist heat (steam) to sterilise." },
      { type: "mcq", q: "A health-care-associated (nosocomial) infection is one acquired:", options: ["During hospital care", "Before admission", "At home only", "In childhood"], answer: 0, rationale: "HAIs are acquired during the course of health-care delivery." },
      { type: "mcq", q: "The correct sequence before disinfection or sterilisation is to first:", options: ["Store the item", "Clean the item", "Label the item", "Use the item"], answer: 1, rationale: "Cleaning must precede disinfection and sterilisation." },
      { type: "mcq", q: "Airborne, droplet and contact are types of:", options: ["Standard precautions", "Sterilisation", "Transmission-based precautions", "Hand hygiene"], answer: 2, rationale: "Transmission-based precautions target specific routes of spread." },
      { type: "fill", q: "The absence of pathogenic microorganisms is called ____.", accept: ["asepsis"], rationale: "Asepsis is the absence of pathogenic organisms." },
      { type: "fill", q: "The process that destroys all microorganisms including spores is ____.", accept: ["sterilisation", "sterilization"], rationale: "Sterilisation destroys all microbial life including spores." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "fon-12-safety-environment",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Safety & the Therapeutic Environment; Use of Restraints",
    readMinutes: 18,
    summary: "The safe, therapeutic environment; common hospital hazards and risk factors; fall prevention; fire and electrical safety; the appropriate and ethical use of restraints; and the nurse's role in patient safety.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Patient safety and the therapeutic environment", p: "A therapeutic environment is one that is safe, clean, comfortable and supportive of healing — physically, psychologically and socially. Patient safety, the prevention of avoidable harm, is a fundamental duty and quality indicator. Nurses spend the most time with patients and are pivotal in identifying and reducing risk." },
      { h: "Elements of a therapeutic environment", list: [
        "Physical — clean, adequately lit, well-ventilated, safe temperature, reduced noise, uncluttered space.",
        "Psychological — respect, privacy, reduced anxiety, orientation and clear communication.",
        "Social — supportive relationships, family involvement and dignity.",
        "Safety features — call bells within reach, side rails as indicated, non-slip floors, secure equipment."
      ] },
      { h: "Risk factors for injury", list: [
        "Patient factors — age (very young and elderly), impaired mobility, sensory or cognitive impairment, confusion, sedation and certain medications.",
        "Environmental factors — wet or cluttered floors, poor lighting, unfamiliar surroundings, faulty equipment.",
        "Situational factors — unattended patients, understaffing and inadequate communication."
      ] },
      { h: "Common hospital hazards and prevention", list: [
        "Falls — the most common hospital injury; prevent by risk assessment, call bells, bed in low position, adequate lighting, assistance and appropriate footwear.",
        "Fire — follow the RACE approach (Rescue, Alarm, Confine, Extinguish/Evacuate) and PASS for extinguisher use.",
        "Electrical hazards — check equipment, avoid overloaded sockets, report faults.",
        "Poisoning, burns/scalds and needle-stick injuries — safe storage, temperature checks and safe sharps practice.",
        "Infection — addressed through infection-control measures."
      ] },
      { h: "Fall prevention (evidence-based bundle)", p: "Fall prevention uses a multifactorial bundle: standardised fall-risk assessment on admission and change of condition, keeping the bed low with wheels locked, ensuring call bells and needed items are within reach, timely toileting rounds, reviewing sedating medications, and providing assistance and non-slip footwear." },
      { h: "Restraints — definition and principles", p: "A restraint is any physical or chemical method that restricts a patient's freedom of movement or access to their own body. Restraints carry serious physical and psychological risks (injury, pressure injury, impaired circulation, humiliation) and are a measure of last resort, used only to prevent harm when less restrictive alternatives have failed.", list: [
        "Physical restraints — devices limiting movement (limb/vest restraints, side rails used to restrict).",
        "Chemical restraints — medications used to control behaviour rather than to treat a condition.",
        "Environmental restraints — secured or locked areas."
      ] },
      { h: "Safe and ethical use of restraints", list: [
        "Try least-restrictive alternatives first; use restraints only when necessary for safety.",
        "Obtain a valid order and informed consent where required; follow policy and law.",
        "Apply correctly, allowing circulation; use a quick-release knot to a stable part of the bed frame, not the side rail.",
        "Monitor frequently — circulation, skin, position, hydration, elimination and dignity.",
        "Release regularly for movement and care; document the reason, monitoring and response; reassess the ongoing need."
      ] },
      { h: "Nurse's role in safety", list: [
        "Assess risk continuously and individualise preventive measures.",
        "Maintain a hazard-free environment and functioning equipment.",
        "Educate patients and families; report and analyse incidents (incident reports) to improve systems.",
        "Foster a culture of safety and open reporting."
      ] },
      { h: "Key terms", list: [
        "Restraint — a device or drug that restricts movement or body access.",
        "RACE — Rescue, Alarm, Confine, Extinguish/Evacuate (fire response).",
        "Fall-risk assessment — a structured evaluation of a patient's likelihood of falling.",
        "Incident report — a formal record of an unexpected event or near-miss."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the elements of a safe, therapeutic environment.",
      "Discuss the risk factors for patient injury in the hospital.",
      "Outline an evidence-based fall-prevention bundle.",
      "Define restraints and explain the principles of their safe and ethical use.",
      "Explain the nurse's role in maintaining patient safety, including incident reporting."
    ],
    assessment: [
      { type: "mcq", q: "The most common physical injury among hospitalised patients is:", options: ["Falls", "Burns", "Poisoning", "Electrocution"], answer: 0, rationale: "Falls are the most frequent hospital injury." },
      { type: "mcq", q: "The fire-response acronym RACE stands for Rescue, Alarm, Confine and:", options: ["Escape only", "Extinguish/Evacuate", "Examine", "Explain"], answer: 1, rationale: "RACE = Rescue, Alarm, Confine, Extinguish/Evacuate." },
      { type: "mcq", q: "A restraint should be used:", options: ["Routinely for all patients", "As a first choice", "As a last resort for safety", "For staff convenience"], answer: 2, rationale: "Restraints are a last resort after less restrictive measures fail." },
      { type: "mcq", q: "A medication used to control behaviour rather than treat a condition is a:", options: ["Physical restraint", "Chemical restraint", "Environmental restraint", "Antibiotic"], answer: 1, rationale: "A chemical restraint controls behaviour rather than treating illness." },
      { type: "mcq", q: "A restraint should be tied with a quick-release knot to the:", options: ["Side rail", "IV pole", "Stable bed frame", "Patient's clothing"], answer: 2, rationale: "Tie to a stable bed frame, not the movable side rail, using a quick-release knot." },
      { type: "mcq", q: "To reduce falls, the bed should be kept:", options: ["In the highest position", "Unlocked", "In the low position with wheels locked", "Without a call bell"], answer: 2, rationale: "A low, locked bed reduces fall risk." },
      { type: "mcq", q: "A formal record of an unexpected event or near-miss is a(n):", options: ["Care plan", "Incident report", "Discharge summary", "Consent form"], answer: 1, rationale: "Incident reports document unexpected events to improve safety." },
      { type: "mcq", q: "Which is a patient factor increasing injury risk?", options: ["Good vision", "Full mobility", "Youthful strength", "Confusion and sedation"], answer: 3, rationale: "Confusion and sedation raise the risk of injury." },
      { type: "mcq", q: "A restrained patient must be monitored for:", options: ["Circulation and skin integrity", "Hair colour", "Room temperature only", "Television access"], answer: 0, rationale: "Frequent monitoring of circulation, skin and comfort prevents restraint injury." },
      { type: "mcq", q: "A therapeutic environment should be:", options: ["Cluttered and noisy", "Dark and cold", "Clean, safe and comfortable", "Without call bells"], answer: 2, rationale: "A therapeutic environment supports healing through cleanliness, safety and comfort." },
      { type: "fill", q: "Any device or drug that restricts a patient's freedom of movement is a ____.", accept: ["restraint"], rationale: "A restraint limits movement or access to the body." },
      { type: "fill", q: "The most common physical injury in hospitalised patients is a ____.", accept: ["fall", "falls"], rationale: "Falls are the leading hospital injury." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "fon-13-hygiene-comfort",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Personal Hygiene, Comfort & Bed Making",
    readMinutes: 18,
    summary: "The purposes and principles of personal hygiene care; oral, skin, hair, perineal and back care; the therapeutic bed bath and back massage; comfort measures; and the purposes and types of bed making.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Hygiene and comfort in nursing", p: "Personal hygiene is the self-care by which people maintain cleanliness of the body. When illness limits self-care, the nurse assists, meeting a basic human need and promoting comfort, dignity, skin integrity and well-being. Hygiene care is also a prime opportunity for assessment and therapeutic communication." },
      { h: "Purposes of hygiene care", list: [
        "Cleanse skin and remove microorganisms, secretions and odour.",
        "Promote comfort, relaxation and a sense of well-being.",
        "Stimulate circulation and maintain skin integrity.",
        "Provide an opportunity to assess the skin and the patient's condition.",
        "Preserve dignity and support self-esteem."
      ] },
      { h: "General principles of hygiene care", list: [
        "Ensure privacy, warmth and safety; explain and gain cooperation.",
        "Perform hand hygiene; use standard precautions and clean equipment.",
        "Encourage independence and respect preferences and culture.",
        "Work from clean to dirty areas; observe skin and report abnormalities.",
        "Maintain body mechanics for the nurse and comfortable positioning for the patient."
      ] },
      { h: "Oral (mouth) care", p: "Oral care removes food debris and plaque, prevents infection and halitosis, and promotes comfort. Special mouth care is essential for unconscious, NPO, oxygen-dependent or debilitated patients, who are at risk of a dry, coated mouth and mucosal breakdown. Position the unconscious patient on the side to prevent aspiration." },
      { h: "Bathing and skin care", list: [
        "Types — complete bed bath (nurse washes a dependent patient), partial bath, self-bath, tub/shower, and therapeutic baths.",
        "The bed bath cleanses, promotes circulation and comfort, and allows full skin assessment.",
        "Inspect pressure areas; keep skin clean, dry and moisturised to protect integrity."
      ] },
      { h: "Perineal (genital) and other care", list: [
        "Perineal care prevents infection and odour; clean from front to back (clean to dirty) to reduce contamination.",
        "Hair care and shampooing maintain cleanliness and comfort.",
        "Nail, eye, ear and nose care as needed."
      ] },
      { h: "Back care and massage", p: "A back rub/massage promotes relaxation, relieves muscle tension, stimulates circulation to pressure-prone areas and provides comfort; it is also an opportunity to inspect the back and sacrum for early pressure changes. It is contraindicated where it could cause harm (e.g., certain spinal conditions or skin breakdown)." },
      { h: "Bed making — purposes and types", p: "A clean, wrinkle-free, comfortable bed promotes rest, comfort and skin integrity and reduces infection risk.", list: [
        "Unoccupied bed — made when empty (closed or open).",
        "Occupied bed — made with the patient in it, for those on bed rest.",
        "Special beds — e.g., post-operative (surgical) bed, cardiac bed and others adapted to need.",
        "Principles — clean linen, tight wrinkle-free surface, standard precautions with soiled linen, and body mechanics."
      ] },
      { h: "Comfort measures", p: "Comfort is a state of physical and psychological ease. Nurses promote comfort through positioning, hygiene, pain relief, a calm environment, therapeutic communication and attention to the patient's individual preferences and dignity." },
      { h: "Key terms", list: [
        "Bed bath — bathing a patient confined to bed.",
        "Perineal care — hygiene of the genital and anal area.",
        "Halitosis — offensive mouth odour.",
        "Occupied bed — a bed made with the patient in it."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "State the purposes of personal hygiene care.",
      "Explain the general principles the nurse follows when giving hygiene care.",
      "Describe the special oral care of an unconscious patient and its precautions.",
      "Discuss the purposes and technique of a back massage.",
      "Describe the purposes and types of bed making."
    ],
    assessment: [
      { type: "mcq", q: "Perineal care should be performed:", options: ["Front to back", "Back to front", "In any direction", "Only with a brush"], answer: 0, rationale: "Cleaning front to back moves from clean to dirty and reduces contamination." },
      { type: "mcq", q: "An unconscious patient receiving oral care should be positioned:", options: ["Flat on the back", "On the side", "Sitting upright unsupported", "Prone"], answer: 1, rationale: "Side-lying prevents aspiration of fluids during mouth care." },
      { type: "mcq", q: "A bed made with the patient in it is a(n):", options: ["Unoccupied bed", "Closed bed", "Occupied bed", "Surgical bed"], answer: 2, rationale: "An occupied bed is made with the patient in it." },
      { type: "mcq", q: "A key purpose of a back massage is to:", options: ["Increase blood pressure", "Cause skin breakdown", "Raise temperature", "Promote relaxation and circulation"], answer: 3, rationale: "Back massage promotes relaxation and stimulates circulation." },
      { type: "mcq", q: "During hygiene care the nurse should always ensure:", options: ["A public setting", "Privacy and warmth", "Cold water only", "No explanation"], answer: 1, rationale: "Privacy, warmth and explanation preserve dignity and comfort." },
      { type: "mcq", q: "Offensive mouth odour is called:", options: ["Halitosis", "Cyanosis", "Anorexia", "Dysphagia"], answer: 0, rationale: "Halitosis is offensive breath odour." },
      { type: "mcq", q: "A complete bed bath is given to a patient who is:", options: ["Fully independent", "Dependent and unable to self-care", "Ambulatory", "Discharged"], answer: 1, rationale: "A complete bed bath is for dependent patients unable to bathe themselves." },
      { type: "mcq", q: "Hygiene care should proceed from:", options: ["Dirty to clean areas", "Random order", "Clean to dirty areas", "Feet to mouth"], answer: 2, rationale: "Working clean to dirty prevents spreading contamination." },
      { type: "mcq", q: "A wrinkle-free bed helps prevent:", options: ["Pressure injury and discomfort", "Fever", "Infection immunity", "Weight gain"], answer: 0, rationale: "A smooth, wrinkle-free surface protects skin integrity and comfort." },
      { type: "mcq", q: "A prime additional benefit of hygiene care is that it allows the nurse to:", options: ["Skip assessment", "Avoid the patient", "Reduce communication", "Assess the skin and patient condition"], answer: 3, rationale: "Hygiene care is a key opportunity for skin and general assessment." },
      { type: "fill", q: "A bed made with the patient in it is called an ____ bed.", accept: ["occupied"], rationale: "An occupied bed is made while the patient remains in it." },
      { type: "fill", q: "Bathing a patient who is confined to bed is called a ____ bath.", accept: ["bed"], rationale: "A bed bath is given to a patient confined to bed." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "fon-14-mobility-body-mechanics",
    unit: "Unit 4 · Mobility, Rest & Oxygenation",
    title: "Activity, Mobility, Body Mechanics & Positioning",
    readMinutes: 19,
    summary: "The importance of activity and mobility; principles of body mechanics; safe positioning, transferring and range-of-motion exercises; the hazards of immobility on every body system; and nursing measures to prevent complications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Activity, mobility and their importance", p: "Mobility is the ability to move freely and purposefully. Adequate activity maintains musculoskeletal, cardiovascular, respiratory, metabolic and psychological health. Illness, injury, pain, weakness and prescribed bed rest reduce mobility, so nurses assess mobility and both promote activity and prevent the complications of immobility." },
      { h: "Body mechanics — principles", p: "Body mechanics is the coordinated use of body parts to produce safe, efficient movement and to prevent injury to the nurse and patient. Musculoskeletal injury is a major occupational hazard for nurses; correct technique and modern safe-handling equipment reduce this risk.", list: [
        "Maintain a wide base of support with feet apart.",
        "Keep the back straight and bend at the hips and knees, using strong leg muscles rather than the back.",
        "Keep the load close to the body and the centre of gravity low.",
        "Push, pull or roll rather than lift where possible; pivot the feet instead of twisting the spine.",
        "Face the direction of movement; get help and use lifting aids for heavy loads."
      ] },
      { h: "Common positions and their uses", list: [
        "Supine (dorsal) — lying on the back; rest and many procedures.",
        "Fowler's / semi-Fowler's — head raised 45-90 / 30-45 degrees; eases breathing and feeding.",
        "Lateral (side-lying) — relieves pressure on the back; useful for the unconscious.",
        "Prone — lying on the abdomen; may aid oxygenation in some conditions.",
        "Sims' — semi-prone side-lying; enemas and rectal procedures.",
        "Trendelenburg — head lower than feet; used in specific circumstances (e.g., shock, per policy)."
      ] },
      { h: "Positioning and pressure relief", p: "Regular repositioning (commonly about every two hours, individualised to risk) redistributes pressure over bony prominences, preventing pressure injury, and prevents contractures and respiratory pooling. Use pillows and supports to maintain alignment and comfort." },
      { h: "Transferring patients safely", list: [
        "Assess the patient's weight-bearing ability, cooperation and equipment needs.",
        "Explain the move and coordinate ('on three'); lock bed and wheelchair brakes.",
        "Use transfer belts, slide sheets or mechanical lifts as indicated.",
        "Maintain the nurse's body mechanics and never sacrifice safety for speed."
      ] },
      { h: "Range-of-motion (ROM) exercises", list: [
        "Active ROM — performed by the patient independently.",
        "Passive ROM — performed by the nurse for a patient who cannot move a part.",
        "Active-assisted ROM — patient assisted by the nurse.",
        "ROM maintains joint mobility and muscle tone and prevents contractures; move each joint gently through its normal range without forcing."
      ] },
      { h: "Hazards of immobility", p: "Prolonged immobility harms every body system.", list: [
        "Musculoskeletal — muscle atrophy, weakness, contractures, disuse osteoporosis.",
        "Cardiovascular — orthostatic hypotension, venous stasis and deep vein thrombosis.",
        "Respiratory — reduced expansion, pooled secretions and hypostatic pneumonia.",
        "Integumentary — pressure injuries.",
        "Gastrointestinal/urinary — constipation, urinary stasis and infection.",
        "Psychosocial — depression, anxiety and disorientation."
      ] },
      { h: "Nursing measures to prevent complications", list: [
        "Encourage early mobilisation and activity as permitted.",
        "Reposition regularly; perform or teach ROM exercises.",
        "Encourage deep breathing and coughing; ensure hydration and nutrition.",
        "Apply anti-embolism measures and monitor for DVT and skin breakdown per policy."
      ] },
      { h: "Key terms", list: [
        "Body mechanics — safe, efficient coordinated body movement.",
        "Contracture — permanent shortening of muscle/joint from disuse.",
        "Passive ROM — joint movement performed for the patient by the nurse.",
        "Fowler's position — sitting position with head of bed raised."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Explain the principles of correct body mechanics and why they matter for nurses.",
      "Describe the common patient positions and their uses.",
      "Differentiate active, passive and active-assisted range-of-motion exercises.",
      "Discuss the hazards of immobility on the major body systems.",
      "Outline the nursing measures used to prevent the complications of immobility."
    ],
    assessment: [
      { type: "mcq", q: "A principle of good body mechanics is to lift using the:", options: ["Back muscles", "Leg muscles", "Neck", "Wrists"], answer: 1, rationale: "Strong leg muscles should do the work, protecting the back." },
      { type: "mcq", q: "Range-of-motion exercises performed by the nurse for a patient who cannot move are:", options: ["Active ROM", "Passive ROM", "Isometric", "Resisted"], answer: 1, rationale: "Passive ROM is done for the patient by the nurse." },
      { type: "mcq", q: "To ease breathing, a patient is best placed in the:", options: ["Prone position", "Fowler's position", "Trendelenburg position", "Flat supine position"], answer: 1, rationale: "Fowler's (raised head) position improves lung expansion and breathing." },
      { type: "mcq", q: "A permanent shortening of a muscle or joint from disuse is a:", options: ["Contracture", "Fracture", "Sprain", "Callus"], answer: 0, rationale: "Contractures result from prolonged immobility." },
      { type: "mcq", q: "Repositioning an immobile patient primarily prevents:", options: ["Fever", "Pressure injuries", "Hair loss", "Weight gain"], answer: 1, rationale: "Regular repositioning relieves pressure and prevents pressure injuries." },
      { type: "mcq", q: "A respiratory hazard of immobility is:", options: ["Hypostatic pneumonia", "Tachycardia", "Diarrhoea", "Hypertension"], answer: 0, rationale: "Pooled secretions in immobility predispose to hypostatic pneumonia." },
      { type: "mcq", q: "Before transferring a patient to a wheelchair, the nurse should first:", options: ["Twist the spine", "Lock the brakes", "Rush the move", "Skip explanation"], answer: 1, rationale: "Locking brakes prevents the chair or bed from moving during transfer." },
      { type: "mcq", q: "A wide base of support is achieved by:", options: ["Keeping feet together", "Standing on tiptoe", "Placing feet apart", "Bending only the back"], answer: 2, rationale: "Feet apart widen the base of support and improve stability." },
      { type: "mcq", q: "A cardiovascular hazard of prolonged immobility is:", options: ["Deep vein thrombosis", "Improved circulation", "Lower infection risk", "Faster healing"], answer: 0, rationale: "Venous stasis in immobility raises the risk of DVT." },
      { type: "mcq", q: "Instead of twisting the spine, the nurse should:", options: ["Bend the back", "Pivot the feet", "Hold the load away", "Lift quickly"], answer: 1, rationale: "Pivoting the feet avoids dangerous spinal twisting." },
      { type: "fill", q: "The safe, coordinated use of the body to move and lift is called body ____.", accept: ["mechanics"], rationale: "Body mechanics protects the nurse and patient from injury." },
      { type: "fill", q: "Joint movement performed for the patient by the nurse is ____ range of motion.", accept: ["passive"], rationale: "Passive ROM is carried out by the nurse for the patient." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "fon-15-rest-sleep",
    unit: "Unit 4 · Mobility, Rest & Oxygenation",
    title: "Rest, Sleep & Oxygenation / Basic Respiratory Care",
    readMinutes: 19,
    summary: "The physiology and stages of sleep and its functions; common sleep disturbances and promotion of rest; the physiology of oxygenation; assessment of respiratory status; and basic nursing interventions to support breathing and oxygen delivery.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Rest and sleep", p: "Rest is a state of reduced activity and mental calm; sleep is a natural, reversible state of reduced consciousness and responsiveness that restores physical and mental function. Both are basic human needs essential for healing, immunity, growth, memory and well-being; illness and hospitalisation frequently disrupt them." },
      { h: "Physiology and stages of sleep", p: "Sleep is regulated by the circadian rhythm and brain centres. It cycles through non-rapid-eye-movement (NREM) stages of progressively deeper sleep and rapid-eye-movement (REM) sleep, in which dreaming occurs. A full cycle lasts roughly 90 minutes and repeats several times a night.", list: [
        "NREM — physical restoration; tissue repair and growth hormone release predominate.",
        "REM — mental restoration; important for memory, learning and mood; associated with vivid dreaming."
      ] },
      { h: "Functions of sleep", list: [
        "Physical restoration and tissue repair.",
        "Conservation of energy and immune support.",
        "Consolidation of memory and learning.",
        "Emotional regulation and psychological well-being."
      ] },
      { h: "Common sleep disturbances", list: [
        "Insomnia — difficulty falling or staying asleep.",
        "Sleep apnoea — repeated cessation of breathing during sleep.",
        "Narcolepsy — sudden uncontrollable daytime sleep.",
        "Parasomnias — sleepwalking, night terrors and similar events."
      ] },
      { h: "Promoting rest and sleep (nursing measures)", list: [
        "Provide a quiet, dim, comfortable environment; cluster care to avoid interruptions.",
        "Maintain routines and comfort measures (hygiene, positioning, warm drink).",
        "Manage pain and anxiety; limit stimulants and daytime napping.",
        "Educate on sleep hygiene; use medication only when necessary and reassess."
      ] },
      { h: "Oxygenation — physiology", p: "Oxygenation is the process of supplying oxygen to body cells for energy production and removing carbon dioxide. It depends on three systems working together: ventilation (movement of air in and out), diffusion (gas exchange across the alveolar-capillary membrane), and perfusion (blood flow carrying gases). Failure of any component impairs cellular oxygen supply.", figure: {
        caption: "Oxygenation depends on ventilation, diffusion and perfusion working together.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxygenation: ventilation, diffusion, perfusion"><defs><marker id="oxArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="45" width="130" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="80" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Ventilation</text><text x="80" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">air in &amp; out</text><rect x="185" y="45" width="130" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="250" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Diffusion</text><text x="250" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">gas exchange</text><rect x="355" y="45" width="130" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="420" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Perfusion</text><text x="420" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">blood flow</text><line x1="145" y1="68" x2="181" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#oxArr)"/><line x1="315" y1="68" x2="351" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#oxArr)"/></svg>'
      } },
      { h: "Assessment of respiratory status", list: [
        "Rate, depth, rhythm and effort of breathing; use of accessory muscles.",
        "Colour (cyanosis), oxygen saturation (SpO2) and level of consciousness.",
        "Breath sounds, cough and sputum; reports of dyspnoea.",
        "Signs of hypoxia — restlessness, tachycardia, tachypnoea, confusion."
      ] },
      { h: "Basic nursing interventions to support oxygenation", list: [
        "Position upright/Fowler's to maximise lung expansion.",
        "Encourage deep breathing, coughing and use of incentive spirometry.",
        "Ensure a clear airway; suction secretions when indicated.",
        "Administer oxygen safely as prescribed (correct device, flow and humidification).",
        "Ensure hydration to loosen secretions; provide chest physiotherapy per plan.",
        "Monitor response and report deterioration promptly."
      ] },
      { h: "Key terms", list: [
        "Hypoxia — inadequate oxygen at the tissue level.",
        "REM sleep — rapid-eye-movement, dreaming, mentally restorative stage.",
        "Ventilation — movement of air into and out of the lungs.",
        "Incentive spirometry — a device encouraging deep breathing to expand the lungs."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Differentiate rest from sleep and explain the functions of sleep.",
      "Describe the stages of sleep (NREM and REM) and their restorative roles.",
      "Discuss common sleep disturbances and nursing measures to promote sleep.",
      "Explain the three processes on which oxygenation depends.",
      "Outline the basic nursing interventions used to support a patient's oxygenation."
    ],
    assessment: [
      { type: "mcq", q: "The stage of sleep associated with dreaming is:", options: ["NREM stage 1", "NREM stage 3", "REM sleep", "Wakefulness"], answer: 2, rationale: "Vivid dreaming occurs mainly during REM sleep." },
      { type: "mcq", q: "Repeated cessation of breathing during sleep is:", options: ["Insomnia", "Sleep apnoea", "Narcolepsy", "Parasomnia"], answer: 1, rationale: "Sleep apnoea involves repeated pauses in breathing during sleep." },
      { type: "mcq", q: "Oxygenation depends on ventilation, perfusion and:", options: ["Digestion", "Diffusion", "Excretion", "Filtration"], answer: 1, rationale: "Diffusion is gas exchange across the alveolar-capillary membrane." },
      { type: "mcq", q: "Inadequate oxygen at the tissue level is called:", options: ["Hyperoxia", "Hypoxia", "Hypercapnia", "Hypertension"], answer: 1, rationale: "Hypoxia is insufficient oxygen at the cellular/tissue level." },
      { type: "mcq", q: "The best position to maximise lung expansion is:", options: ["Flat supine", "Fowler's (upright)", "Trendelenburg", "Prone"], answer: 1, rationale: "An upright/Fowler's position improves lung expansion and breathing." },
      { type: "mcq", q: "An early sign of hypoxia is often:", options: ["Restlessness", "Deep sleep", "Bradycardia at rest", "Weight gain"], answer: 0, rationale: "Restlessness and confusion are early signs of hypoxia." },
      { type: "mcq", q: "Difficulty falling or staying asleep is:", options: ["Insomnia", "Narcolepsy", "Sleep apnoea", "Eupnoea"], answer: 0, rationale: "Insomnia is difficulty initiating or maintaining sleep." },
      { type: "mcq", q: "A device that encourages deep breathing to expand the lungs is:", options: ["A glucometer", "An incentive spirometer", "A sphygmomanometer", "A thermometer"], answer: 1, rationale: "Incentive spirometry promotes deep inspiration and lung expansion." },
      { type: "mcq", q: "The movement of air into and out of the lungs is:", options: ["Diffusion", "Perfusion", "Ventilation", "Digestion"], answer: 2, rationale: "Ventilation is the mechanical movement of air in and out." },
      { type: "mcq", q: "A full sleep cycle lasts approximately:", options: ["10 minutes", "30 minutes", "90 minutes", "5 hours"], answer: 2, rationale: "A sleep cycle is roughly 90 minutes and repeats through the night." },
      { type: "fill", q: "The dreaming, mentally restorative stage of sleep is ____ sleep.", accept: ["REM", "rapid eye movement"], rationale: "REM (rapid-eye-movement) sleep supports memory and mood." },
      { type: "fill", q: "Inadequate oxygen at the tissue level is called ____.", accept: ["hypoxia"], rationale: "Hypoxia is insufficient oxygen at the tissues." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "fon-16-nutrition-fluid-elimination",
    unit: "Unit 4 · Mobility, Rest & Oxygenation",
    title: "Fluid, Nutrition & Elimination Needs",
    readMinutes: 19,
    summary: "Nutrition and its components; fluid and electrolyte balance and intake-output monitoring; methods of feeding; urinary and bowel elimination and common problems; and the nursing management of these basic needs.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Meeting basic physiological needs", p: "Nutrition, fluids and elimination are interdependent basic human needs essential to homeostasis, healing and comfort. Illness commonly disturbs them, and the nurse assesses intake and output, prevents and manages problems, and supports the patient's dignity and independence." },
      { h: "Nutrition and its components", list: [
        "Carbohydrates — the main energy source.",
        "Proteins — build and repair tissue; essential for healing and immunity.",
        "Fats — concentrated energy and support for fat-soluble vitamins.",
        "Vitamins and minerals — regulate body processes.",
        "Water — the medium for all body functions.",
        "A balanced diet supplies all nutrients in appropriate amounts; nutritional needs change with age, activity, pregnancy and illness."
      ] },
      { h: "Nutritional assessment and support", list: [
        "Assess appetite, weight, body-mass index, intake, swallowing and nutritional risk.",
        "Assist and encourage eating; respect cultural and religious food practices.",
        "Recognise and manage malnutrition and special diets (e.g., diabetic, low-salt, high-protein)."
      ] },
      { h: "Methods of feeding", list: [
        "Oral — the preferred route when safe and effective.",
        "Enteral (tube) feeding — via nasogastric or gastrostomy tube when the gut works but oral intake is unsafe/inadequate.",
        "Parenteral nutrition — intravenous provision of nutrients when the gut cannot be used.",
        "Nursing care includes verifying tube placement, preventing aspiration and maintaining hygiene."
      ] },
      { h: "Fluid and electrolyte balance", p: "Body water is distributed in intracellular and extracellular compartments, and its balance with electrolytes (sodium, potassium and others) is tightly regulated to sustain cell function. Intake (drinks, food, IV fluids) should balance output (urine, stool, sweat, respiration).", list: [
        "Dehydration — deficient fluid volume; signs include thirst, dry mucosa, reduced urine, weakness and tachycardia.",
        "Overhydration/oedema — excess fluid; signs include swelling, weight gain and breathlessness."
      ] },
      { h: "Intake and output (I&O) monitoring", p: "Accurate measurement and recording of all fluids taken in and all fluids lost is essential for patients at risk of imbalance. Daily weight is a sensitive indicator of fluid change. The nurse totals I&O per shift and day and reports significant imbalance." },
      { h: "Urinary elimination", list: [
        "Normal adult urine output is about 1500 mL/day (roughly 30 mL/hour or more).",
        "Common problems — retention (inability to void), incontinence, dysuria, oliguria (low output), polyuria (high output) and urinary tract infection.",
        "Nursing care — promote normal voiding, ensure privacy and hydration, catheter care with strict asepsis, and I&O monitoring."
      ] },
      { h: "Bowel elimination", list: [
        "Normal bowel patterns vary widely between individuals.",
        "Common problems — constipation, diarrhoea, faecal impaction, flatulence and incontinence.",
        "Nursing care — promote fibre and fluids, activity, privacy and routine; administer enemas or suppositories as ordered; assess stool characteristics."
      ] },
      { h: "Nursing management summary", list: [
        "Assess nutrition, hydration and elimination as part of holistic care.",
        "Maintain accurate I&O and daily weight for at-risk patients.",
        "Promote independence, dignity and comfort; educate the patient and family.",
        "Recognise and report imbalances and complications promptly."
      ] },
      { h: "Key terms", list: [
        "Enteral feeding — nutrition delivered into the gastrointestinal tract via a tube.",
        "Dehydration — a deficit of body fluid.",
        "Oliguria — abnormally low urine output.",
        "Intake and output (I&O) — measured record of fluids gained and lost."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "List the components of a balanced diet and their functions.",
      "Describe the methods of feeding and the nursing care associated with tube feeding.",
      "Explain fluid and electrolyte balance and the signs of dehydration.",
      "Discuss the importance and method of intake-output monitoring.",
      "Describe common urinary and bowel elimination problems and their nursing management."
    ],
    assessment: [
      { type: "mcq", q: "The main dietary source of energy is:", options: ["Proteins", "Carbohydrates", "Vitamins", "Minerals"], answer: 1, rationale: "Carbohydrates are the body's main energy source." },
      { type: "mcq", q: "The nutrient most essential for tissue building and repair is:", options: ["Fat", "Protein", "Water", "Fibre"], answer: 1, rationale: "Proteins build and repair tissue and support healing." },
      { type: "mcq", q: "Feeding via a nasogastric tube is an example of:", options: ["Oral feeding", "Enteral feeding", "Parenteral nutrition", "Fasting"], answer: 1, rationale: "Nasogastric feeding delivers nutrition enterally into the GI tract." },
      { type: "mcq", q: "A sign of dehydration is:", options: ["Oedema", "Dry mucous membranes", "Weight gain", "Bounding pulse"], answer: 1, rationale: "Dry mucosa, thirst and reduced urine indicate dehydration." },
      { type: "mcq", q: "Abnormally low urine output is called:", options: ["Polyuria", "Oliguria", "Dysuria", "Nocturia"], answer: 1, rationale: "Oliguria is diminished urine output." },
      { type: "mcq", q: "The most sensitive daily indicator of fluid balance change is:", options: ["Height", "Body weight", "Hair length", "Skin colour"], answer: 1, rationale: "Daily weight reflects fluid gains and losses sensitively." },
      { type: "mcq", q: "Difficult or painful urination is termed:", options: ["Dysuria", "Polyuria", "Anuria", "Enuresis"], answer: 0, rationale: "Dysuria is painful or difficult urination." },
      { type: "mcq", q: "IV provision of nutrients when the gut cannot be used is:", options: ["Enteral feeding", "Oral feeding", "Parenteral nutrition", "Gavage"], answer: 2, rationale: "Parenteral nutrition supplies nutrients intravenously." },
      { type: "mcq", q: "A common measure to relieve constipation is to increase:", options: ["Fibre and fluids", "Bed rest", "Sedatives", "Fasting"], answer: 0, rationale: "Fibre, fluids and activity promote normal bowel elimination." },
      { type: "mcq", q: "Normal adult urine output is approximately:", options: ["100 mL/day", "500 mL/day", "1500 mL/day", "5000 mL/day"], answer: 2, rationale: "Around 1500 mL/day (about 30 mL/hour or more) is normal." },
      { type: "fill", q: "A deficit of body fluid is called ____.", accept: ["dehydration"], rationale: "Dehydration is a deficiency of body fluid." },
      { type: "fill", q: "Feeding delivered into the GI tract through a tube is called ____ feeding.", accept: ["enteral", "tube"], rationale: "Enteral (tube) feeding uses the functioning gastrointestinal tract." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "fon-17-medication-administration",
    unit: "Unit 5 · Medication, Wounds & Pain",
    title: "Medication Administration, Routes & Dosage Calculation",
    readMinutes: 19,
    summary: "Principles of safe medication administration; routes of administration; the rights of medication administration; basic pharmacology concepts; dosage calculation; and the nurse's legal and safety responsibilities.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Medication administration in nursing", p: "Administering medicines safely is a core, high-risk nursing responsibility governed by law, professional standards and the doctor's order. The nurse must understand the drug, its action, dose, route, side effects and contraindications, and must verify and monitor each administration to prevent medication errors, a leading cause of patient harm." },
      { h: "Basic pharmacology concepts", list: [
        "Pharmacokinetics — what the body does to the drug: absorption, distribution, metabolism and excretion.",
        "Pharmacodynamics — what the drug does to the body: mechanism of action and effect.",
        "Therapeutic effect, side effect, adverse effect and toxicity.",
        "Onset, peak and duration of action; therapeutic range."
      ] },
      { h: "Routes of administration", list: [
        "Oral (PO) — by mouth; safe and common but slower onset.",
        "Sublingual/buccal — under the tongue / against the cheek for rapid absorption.",
        "Topical and transdermal — applied to skin.",
        "Inhalation — into the respiratory tract.",
        "Rectal and vaginal — via mucous membranes.",
        "Parenteral (by injection) — intradermal (ID), subcutaneous (SC), intramuscular (IM) and intravenous (IV); IV gives the fastest effect."
      ] },
      { h: "The rights of medication administration", p: "Checking the traditional 'rights' at every administration is a key safety practice.", figure: {
        caption: "The core 'rights' of safe medication administration.",
        svg: '<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rights of medication administration"><rect x="10" y="10" width="400" height="190" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="210" y="36" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Rights of Medication</text><g font-family="sans-serif" font-size="12" fill="#15803D"><text x="40" y="66">1. Right patient</text><text x="230" y="66">6. Right documentation</text><text x="40" y="94">2. Right drug</text><text x="230" y="94">7. Right reason</text><text x="40" y="122">3. Right dose</text><text x="230" y="122">8. Right response</text><text x="40" y="150">4. Right route</text><text x="230" y="150">9. Right to refuse</text><text x="40" y="178">5. Right time</text><text x="230" y="178">10. Right education</text></g></svg>'
      } },
      { h: "The rights (list)", list: [
        "Right patient — verify identity with two identifiers.",
        "Right drug — check against the order and label.",
        "Right dose — verify and calculate accurately.",
        "Right route — as prescribed and appropriate.",
        "Right time — at the correct time and frequency.",
        "Right documentation, right reason, right response, right to refuse and right education."
      ] },
      { h: "Dosage calculation", p: "Accurate calculation prevents dangerous errors. A common formula is: Dose to give = (Dose ordered / Dose available) x Quantity (or volume) available. For example, if 250 mg is ordered and the stock is 500 mg per tablet, the nurse gives half a tablet. Always double-check high-risk calculations and use the same units throughout.", list: [
        "Convert to common units before calculating.",
        "Estimate the expected answer to detect gross errors.",
        "Have a second nurse check high-alert drugs and paediatric doses."
      ] },
      { h: "Safe practice and error prevention", list: [
        "Perform hand hygiene and check the order for completeness and legality.",
        "Check the drug label three times and the expiry date.",
        "Never leave medicines unattended; watch the patient take oral medicines.",
        "Report and document errors and adverse reactions honestly and promptly.",
        "Educate the patient about the medicine and monitor for effect and side effects."
      ] },
      { h: "Legal and professional responsibilities", p: "The nurse is accountable for every medicine administered, must work within scope and policy, must question unclear or unsafe orders, and must maintain accurate records. Controlled drugs require special storage, checking and documentation." },
      { h: "Key terms", list: [
        "Pharmacokinetics — absorption, distribution, metabolism, excretion of a drug.",
        "Parenteral — administration by injection, bypassing the GI tract.",
        "Adverse effect — a harmful, unintended drug response.",
        "High-alert drug — a medicine with heightened risk of harm if misused."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "List and explain the 'rights' of medication administration.",
      "Describe the routes of medication administration with examples.",
      "Differentiate pharmacokinetics from pharmacodynamics.",
      "Using the standard formula, explain how to calculate a medication dose with an example.",
      "Discuss the nurse's legal and safety responsibilities in medication administration."
    ],
    assessment: [
      { type: "mcq", q: "The route giving the most rapid drug effect is:", options: ["Oral", "Topical", "Intravenous", "Rectal"], answer: 2, rationale: "The IV route delivers the drug directly into the bloodstream for the fastest effect." },
      { type: "mcq", q: "'What the body does to the drug' describes:", options: ["Pharmacodynamics", "Pharmacokinetics", "Toxicology", "Therapeutics"], answer: 1, rationale: "Pharmacokinetics = absorption, distribution, metabolism and excretion." },
      { type: "mcq", q: "Verifying the patient's identity addresses which right?", options: ["Right dose", "Right patient", "Right time", "Right route"], answer: 1, rationale: "Confirming identity with two identifiers ensures the right patient." },
      { type: "mcq", q: "If 250 mg is ordered and tablets are 500 mg each, the nurse gives:", options: ["Two tablets", "One tablet", "Half a tablet", "Four tablets"], answer: 2, rationale: "(250/500) x 1 tablet = 0.5, i.e., half a tablet." },
      { type: "mcq", q: "An intramuscular injection is an example of a ____ route.", options: ["Oral", "Topical", "Parenteral", "Inhalation"], answer: 2, rationale: "Injections such as IM are parenteral routes." },
      { type: "mcq", q: "A harmful, unintended response to a drug is a(n):", options: ["Therapeutic effect", "Adverse effect", "Onset", "Peak"], answer: 1, rationale: "An adverse effect is a harmful unintended response." },
      { type: "mcq", q: "Oral medicines should be given only after the nurse:", options: ["Leaves them at the bedside", "Watches the patient take them", "Charts them in advance", "Skips the label check"], answer: 1, rationale: "The nurse should observe the patient actually taking oral medicines." },
      { type: "mcq", q: "Before administering, the drug label should be checked:", options: ["Once", "Three times", "Never", "Only by the pharmacist"], answer: 1, rationale: "Checking the label three times reduces medication error." },
      { type: "mcq", q: "'What the drug does to the body' describes:", options: ["Pharmacokinetics", "Pharmacodynamics", "Excretion", "Absorption"], answer: 1, rationale: "Pharmacodynamics is the drug's mechanism and effect on the body." },
      { type: "mcq", q: "A patient has the right to:", options: ["Be given any drug without consent", "Refuse a medication", "Be denied information", "No documentation"], answer: 1, rationale: "The right to refuse is one of the rights of administration." },
      { type: "fill", q: "Administration of a drug by injection is called the ____ route.", accept: ["parenteral"], rationale: "Parenteral routes bypass the GI tract via injection." },
      { type: "fill", q: "The processes of absorption, distribution, metabolism and excretion are together called ____.", accept: ["pharmacokinetics"], rationale: "Pharmacokinetics describes what the body does to a drug." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "fon-18-wound-pain-firstaid",
    unit: "Unit 5 · Medication, Wounds & Pain",
    title: "Wound Care & Pressure-Injury Prevention, Pain Management, First Aid & Basic Life Support",
    readMinutes: 20,
    summary: "Types of wounds and the phases of healing; pressure-injury prevention and staging; the nature and management of pain; the principles and purposes of first aid and bandaging; and basic life support for the collapsed patient.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Wounds and healing", p: "A wound is a break in the continuity of body tissue. Wounds are classified by cause (surgical/intentional or traumatic), by whether the skin is broken (open or closed), and by contamination (clean, clean-contaminated, contaminated, infected). Healing occurs by primary intention (clean, approximated edges), secondary intention (open wounds healing from the base) or tertiary intention (delayed closure)." },
      { h: "Phases of wound healing", list: [
        "Haemostasis — immediate; clot formation stops bleeding.",
        "Inflammatory phase — cleansing; increased blood flow brings white cells to remove debris and microorganisms.",
        "Proliferative phase — rebuilding; granulation tissue, new vessels and collagen form and the wound contracts.",
        "Maturation (remodelling) phase — collagen is reorganised and the scar strengthens over weeks to months."
      ] },
      { h: "Wound care and dressing principles", list: [
        "Assess wound size, appearance, exudate and signs of infection.",
        "Use aseptic technique; clean from clean to dirty.",
        "Select a dressing that maintains a moist wound environment, protects and absorbs exudate.",
        "Support healing through nutrition (protein, vitamin C, zinc), hydration and control of underlying conditions.",
        "Recognise complications — infection, dehiscence (wound reopening) and evisceration."
      ] },
      { h: "Pressure injuries and their prevention", p: "A pressure injury (pressure ulcer/bedsore) is localised damage to skin and underlying tissue over a bony prominence caused by sustained pressure, shear and friction that obstruct blood flow. They are largely preventable and are a key nurse-sensitive quality indicator.", list: [
        "Risk factors — immobility, poor nutrition, moisture/incontinence, reduced sensation, advanced age and poor perfusion (assessed with tools such as the Braden scale).",
        "Staging — from Stage 1 (non-blanchable redness of intact skin) through full-thickness loss (Stages 3-4) to unstageable and deep-tissue injury.",
        "Prevention — regular repositioning, pressure-redistributing surfaces, skin care, moisture management, adequate nutrition and early risk assessment."
      ] },
      { h: "Pain and its management", p: "Pain is an unpleasant sensory and emotional experience and is 'whatever the patient says it is'. It may be acute (recent, protective) or chronic (persistent), and nociceptive or neuropathic. Nurses assess pain systematically (site, onset, character, radiation, severity using scales, timing, aggravating/relieving factors) and reassess after intervention.", list: [
        "Pharmacological management — following a stepwise (analgesic ladder) approach from non-opioids to opioids as needed, given safely and monitored.",
        "Non-pharmacological measures — positioning, heat/cold, relaxation, distraction, massage and therapeutic presence.",
        "Believe the patient's report; individualise care and evaluate effectiveness."
      ] },
      { h: "First aid — purpose and principles", p: "First aid is the immediate, temporary care given to an injured or suddenly ill person before professional help arrives. Its aims are to preserve life, prevent the condition worsening and promote recovery.", list: [
        "Ensure scene safety for rescuer and casualty; call for help.",
        "Assess responsiveness and the ABCs (airway, breathing, circulation).",
        "Control severe bleeding with direct pressure; treat for shock; keep the casualty warm and reassured.",
        "Do not move a suspected spinal injury unnecessarily; do only what is needed and hand over to professionals."
      ] },
      { h: "Bandaging", list: [
        "Purposes — to hold dressings, support and immobilise, apply pressure to control bleeding, and reduce swelling.",
        "Types — roller, triangular and tubular bandages; common turns include circular, spiral, figure-of-eight and recurrent.",
        "Principles/rules — apply firmly but not too tight (check circulation distal to the bandage), work from distal to proximal and inner to outer, keep it clean and comfortable, and leave fingertips/toes visible to monitor colour and warmth."
      ] },
      { h: "Basic life support (BLS)", p: "BLS maintains circulation and oxygenation in cardiac or respiratory arrest until advanced help arrives. The sequence checks safety and responsiveness, calls for help, then follows compressions, airway and breathing.", figure: {
        caption: "Basic life support sequence for the collapsed adult (check-call-compress).",
        svg: '<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basic life support sequence"><defs><marker id="blArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="45" width="110" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="65" y="65" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Check safety</text><text x="65" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">&amp; response</text><rect x="140" y="45" width="105" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="192" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Call for help</text><rect x="265" y="45" width="115" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="322" y="65" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Compressions</text><text x="322" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">30 : 2</text><rect x="400" y="45" width="110" height="46" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="455" y="65" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Airway &amp;</text><text x="455" y="81" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">breathing</text><line x1="120" y1="68" x2="136" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#blArr)"/><line x1="245" y1="68" x2="261" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#blArr)"/><line x1="380" y1="68" x2="396" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#blArr)"/></svg>'
      } },
      { h: "BLS key points", list: [
        "Give high-quality chest compressions — centre of the chest, adequate depth and rate, allowing full recoil, minimising interruptions.",
        "Adult compression-to-ventilation ratio is 30:2 for a single rescuer.",
        "Open the airway (head-tilt/chin-lift unless spinal injury suspected) and give rescue breaths if trained.",
        "Use an automated external defibrillator (AED) as soon as available; continue until help or signs of life."
      ] },
      { h: "Key terms", list: [
        "Dehiscence — partial or complete separation of wound edges.",
        "Pressure injury — tissue damage over a bony prominence from sustained pressure.",
        "First aid — immediate temporary care before professional help.",
        "BLS — basic life support to maintain circulation and breathing in arrest."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Classify wounds and describe the phases of wound healing.",
      "Explain the causes, risk factors and prevention of pressure injuries.",
      "Describe the systematic assessment and management of pain.",
      "State the purposes and principles of first aid and of bandaging.",
      "Outline the sequence and key points of basic life support for a collapsed adult."
    ],
    assessment: [
      { type: "mcq", q: "A clean surgical wound with approximated edges heals by:", options: ["Primary intention", "Secondary intention", "Tertiary intention", "No healing"], answer: 0, rationale: "Clean, approximated wounds heal by primary intention." },
      { type: "mcq", q: "The first phase of wound healing is:", options: ["Maturation", "Proliferation", "Haemostasis", "Remodelling"], answer: 2, rationale: "Haemostasis (clot formation) occurs first to stop bleeding." },
      { type: "mcq", q: "The main cause of a pressure injury is:", options: ["Sustained pressure over a bony prominence", "High fever", "Overhydration", "Excess exercise"], answer: 0, rationale: "Sustained pressure (with shear/friction) obstructs blood flow and damages tissue." },
      { type: "mcq", q: "The single most important nursing measure to prevent pressure injuries is:", options: ["Fasting the patient", "Regular repositioning", "Restricting fluids", "Bright lighting"], answer: 1, rationale: "Frequent repositioning relieves pressure over bony prominences." },
      { type: "mcq", q: "Pain is best described as:", options: ["Only what the nurse observes", "Whatever the patient says it is", "Always visible", "Never chronic"], answer: 1, rationale: "Pain is subjective and defined by the patient's report." },
      { type: "mcq", q: "The primary aim of first aid is to:", options: ["Replace hospital care", "Preserve life and prevent worsening", "Diagnose disease", "Prescribe drugs"], answer: 1, rationale: "First aid preserves life, prevents deterioration and promotes recovery." },
      { type: "mcq", q: "The adult single-rescuer compression-to-ventilation ratio in BLS is:", options: ["15:2", "5:1", "30:2", "10:2"], answer: 2, rationale: "The standard adult ratio is 30 compressions to 2 breaths." },
      { type: "mcq", q: "Severe external bleeding is first controlled by:", options: ["Applying a tourniquet immediately", "Direct pressure on the wound", "Elevating the head", "Giving fluids by mouth"], answer: 1, rationale: "Direct firm pressure is the first measure to control bleeding." },
      { type: "mcq", q: "When bandaging a limb, the nurse should:", options: ["Cover the fingertips completely", "Leave fingertips/toes visible to check circulation", "Apply as tightly as possible", "Work proximal to distal only"], answer: 1, rationale: "Leaving digits visible allows monitoring of circulation distal to the bandage." },
      { type: "mcq", q: "Separation of the edges of a healing wound is called:", options: ["Granulation", "Dehiscence", "Contraction", "Epithelialisation"], answer: 1, rationale: "Dehiscence is separation of wound edges, a healing complication." },
      { type: "fill", q: "A clean wound with approximated edges heals by ____ intention.", accept: ["primary", "first"], rationale: "Primary intention healing occurs in clean, approximated wounds." },
      { type: "fill", q: "The immediate temporary care given before professional help arrives is called ____.", accept: ["first aid"], rationale: "First aid is immediate care to preserve life and prevent worsening." }
    ]
  }
];
