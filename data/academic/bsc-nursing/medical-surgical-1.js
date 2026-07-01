/* ============================================================
   B.Sc. in Nursing (4-year, BNMC 2018) · Year 2
   B233 · Medical & Surgical Nursing-1 (Paper I) — 20 topics.
   Degree-level: pathophysiology, investigations, evidence-based
   nursing management. Adapted & deepened from the diploma MSN
   base and realigned to the B.Sc. syllabus. Grounded in:
     • Smeltzer SC, Bare BG, Hinkle JL, Cheever KH. Brunner &
       Suddarth's Textbook of Medical-Surgical Nursing. Lippincott.
     • Lewis SL, Dirksen SR, Heitkemper MM, Bucher L.
       Medical-Surgical Nursing. Elsevier/Mosby.
     • Black JM, Hawks JH. Medical-Surgical Nursing: Clinical
       Management for Positive Outcomes. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_MSN = [
  "Smeltzer SC, Bare BG, Hinkle JL, Cheever KH. Brunner & Suddarth's Textbook of Medical-Surgical Nursing. Lippincott.",
  "Lewis SL, Dirksen SR, Heitkemper MM, Bucher L. Medical-Surgical Nursing. Elsevier/Mosby.",
  "Black JM, Hawks JH. Medical-Surgical Nursing: Clinical Management for Positive Outcomes. Elsevier."
];

window.Academic.topics["bsc-nursing/medical-surgical-1"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "msn-01-intro-role",
    unit: "Unit 1 · Foundations of Medical-Surgical Nursing",
    title: "Introduction to Medical-Surgical Nursing & the Nurse's Role",
    readMinutes: 24,
    summary: "Scope and nature of medical-surgical nursing; acute versus chronic illness; the roles and competencies of the MS nurse; the nursing process as the organising framework; holistic, client-centred care; and the ethical, legal and evidence-based basis of adult health nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is medical-surgical nursing?", p: "Medical-surgical (adult health) nursing is the specialty concerned with the assessment, diagnosis, treatment and evaluation of adults (roughly 18-65 years and older) experiencing acute or chronic health problems that are managed medically (with drugs and therapy) or surgically (with operative intervention). It is the largest single field of nursing practice and provides the clinical foundation on which most other specialties build." },
      { h: "Nature of acute illness", p: "An acute illness has a rapid onset, a relatively short and self-limiting course, and predictable signs and symptoms; it usually resolves with treatment or ends in recovery or death (e.g. acute appendicitis, pneumonia, myocardial infarction). Nursing emphasis is on early recognition, rapid stabilisation, preventing complications and restoring the previous level of function." },
      { h: "Nature of chronic illness", p: "A chronic illness persists for 3 months or longer (WHO), often for life, with periods of exacerbation and remission; it is usually irreversible and demands ongoing self-management (e.g. diabetes mellitus, COPD, chronic kidney disease). Nursing emphasis shifts to controlling symptoms, preventing complications, supporting adaptation, promoting maximal independence and quality of life, and educating the client and family." },
      { h: "The trajectory model of chronic illness", p: "Corbin and Strauss described chronic illness as a trajectory with phases (pre-trajectory, onset, stable, unstable, acute, crisis, comeback, downward, dying). Recognising the phase guides realistic goal-setting: stabilising an unstable phase differs from rehabilitating a comeback phase." },
      { h: "Roles of the medical-surgical nurse", list: [
        "Care-giver — provides direct, safe, evidence-based physical and psychosocial care.",
        "Communicator — the hub of information between client, family and the health team.",
        "Educator / health teacher — teaches self-care, medication, prevention and health promotion.",
        "Advocate — protects the client's rights, dignity, safety and informed choice.",
        "Counsellor — supports coping, adaptation and behaviour change.",
        "Coordinator / manager — organises care, delegates and ensures continuity.",
        "Change agent and researcher — applies and generates evidence to improve practice."
      ] },
      { h: "The nursing process — the framework of practice", p: "The nursing process is a systematic, cyclical, client-centred method of problem-solving with five steps: Assessment, Diagnosis, Planning, Implementation and Evaluation (ADPIE). It is dynamic — evaluation feeds back into reassessment — and provides the structure for every medical-surgical care plan.", figure: {
        caption: "The five-step nursing process (ADPIE) as a continuous, cyclical framework.",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nursing process cycle"><defs><marker id="msnArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><circle cx="280" cy="125" r="30" fill="#0F4C3A"/><text x="280" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">NURSING</text><text x="280" y="136" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">PROCESS</text><g font-family="sans-serif"><rect x="220" y="10" width="120" height="38" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">1 Assessment</text><rect x="410" y="80" width="130" height="38" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="475" y="104" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">2 Diagnosis</text><rect x="410" y="150" width="130" height="38" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="475" y="174" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">3 Planning</text><rect x="220" y="205" width="120" height="38" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="229" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">4 Implement</text><rect x="20" y="115" width="130" height="38" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="85" y="139" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">5 Evaluation</text></g><path d="M330 45 A70 70 0 0 1 415 95" fill="none" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr1)"/><line x1="475" y1="118" x2="475" y2="146" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr1)"/><path d="M415 185 A80 80 0 0 1 335 220" fill="none" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr1)"/><path d="M225 220 A90 90 0 0 1 120 150" fill="none" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr1)"/><path d="M120 118 A90 90 0 0 1 220 40" fill="none" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr1)"/></svg>'
      } },
      { h: "Holistic and client-centred care", p: "Holistic care addresses the whole person — physical, psychological, social, cultural and spiritual dimensions — rather than the disease alone. Client-centred care makes the client an active partner: goals, preferences and values are respected, information is shared, and decisions are made with (not for) the client." },
      { h: "Core competencies of the MS nurse", list: [
        "Sound theoretical knowledge of anatomy, physiology, pathophysiology and pharmacology.",
        "Skilled physical assessment and clinical judgement.",
        "Competent psychomotor skills (aseptic technique, medication administration, wound care).",
        "Critical thinking and prioritisation (e.g. ABC — airway, breathing, circulation).",
        "Effective communication and health teaching.",
        "Ethical, legal and culturally sensitive practice."
      ] },
      { h: "Ethical principles in adult care", list: [
        "Autonomy — respect the client's right to self-determination and informed consent.",
        "Beneficence — act in the client's best interest.",
        "Non-maleficence — 'first, do no harm'.",
        "Justice — fair, equitable distribution of care and resources.",
        "Veracity (truthfulness) and Fidelity (keeping promises, confidentiality)."
      ] },
      { h: "Legal responsibilities", p: "The nurse is accountable for safe practice within the scope defined by the licensing body (in Bangladesh, the BNMC). Key legal duties include obtaining/witnessing informed consent, accurate documentation, maintaining confidentiality, safe medication administration (the rights of medication), and avoiding negligence (failure to meet the standard of a reasonably prudent nurse causing harm)." },
      { h: "Evidence-based practice (EBP)", p: "EBP integrates the best available research evidence, clinical expertise and client values/preferences to guide care decisions. Steps: Ask a focused (PICO) question → Acquire evidence → Appraise it critically → Apply it → Assess the outcome. EBP replaces ritual and tradition with practices proven to improve outcomes." },
      { h: "The health-illness continuum", p: "Health and illness are not fixed states but a dynamic continuum ranging from high-level wellness to severe illness and death. A client with a chronic disease may still achieve high-level wellness through effective self-management, showing that the goal of nursing is optimal function, not merely absence of disease." },
      { h: "Clinical relevance", p: "Every subsequent topic in this course applies this same framework: assess systematically, identify actual/potential problems (nursing diagnoses), plan measurable client-centred goals, implement evidence-based interventions safely, and evaluate outcomes — always within an ethical, legal and holistic frame." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define medical-surgical nursing and differentiate acute from chronic illness with examples.",
      "Describe the five steps of the nursing process and explain why it is cyclical.",
      "Discuss six roles of the medical-surgical nurse in the care of adult clients.",
      "Explain the ethical principles that guide the care of adults with acute and chronic illness.",
      "What is evidence-based practice? Outline its steps and importance in adult health nursing."
    ],
    assessment: [
      { type: "mcq", q: "A client with COPD has had the disease for 8 years with periodic flare-ups. This best illustrates:", options: ["A chronic illness", "An acute illness", "A communicable illness", "A terminal illness only"], answer: 0, rationale: "Persistence over months to years with exacerbations and remissions defines chronic illness; COPD is a classic example." },
      { type: "mcq", q: "Which action reflects the nurse acting primarily as a client advocate?", options: ["Charting the medications given", "Taking vital signs every 4 hours", "Ensuring the client understands a procedure before signing consent", "Delegating hygiene care to an assistant"], answer: 2, rationale: "Advocacy protects the client's right to informed, autonomous decision-making." },
      { type: "mcq", q: "The correct sequence of the nursing process is:", options: ["Diagnosis, Assessment, Planning, Evaluation, Implementation", "Planning, Assessment, Diagnosis, Implementation, Evaluation", "Assessment, Planning, Diagnosis, Evaluation, Implementation", "Assessment, Diagnosis, Planning, Implementation, Evaluation"], answer: 3, rationale: "ADPIE: Assessment, Diagnosis, Planning, Implementation, Evaluation." },
      { type: "mcq", q: "A nurse withholds a treatment likely to cause more harm than benefit. This applies which principle?", options: ["Autonomy", "Non-maleficence", "Justice", "Veracity"], answer: 1, rationale: "Non-maleficence means avoiding harm ('first, do no harm')." },
      { type: "mcq", q: "The first step of evidence-based practice is to:", options: ["Apply the intervention", "Publish the results", "Ask a focused clinical (PICO) question", "Appraise the evidence"], answer: 2, rationale: "EBP begins by framing a clear, answerable question before acquiring and appraising evidence." },
      { type: "mcq", q: "Holistic nursing care means the nurse addresses:", options: ["The physical, psychological, social, cultural and spiritual needs", "Only the presenting disease", "Only the client's medications", "Only laboratory results"], answer: 0, rationale: "Holism treats the whole person, not the disease alone." },
      { type: "mcq", q: "Which is the BEST example of client-centred care?", options: ["The nurse decides all goals independently", "The family alone sets the goals", "The physician sets goals without the client", "Goals and decisions are made together with the client"], answer: 3, rationale: "Client-centred care makes the client an active partner in goal-setting and decisions." },
      { type: "mcq", q: "Failure to meet the standard of a reasonably prudent nurse, resulting in client harm, is termed:", options: ["Assault", "Negligence", "Battery", "Defamation"], answer: 1, rationale: "Negligence is failing to provide the accepted standard of care, causing harm." },
      { type: "mcq", q: "In the health-illness continuum, a diabetic who self-manages well can:", options: ["Never reach wellness", "Only remain in illness", "Achieve high-level wellness despite the disease", "Have no continuum"], answer: 2, rationale: "The goal is optimal function; effective self-management can achieve high-level wellness even with chronic disease." },
      { type: "mcq", q: "A key feature distinguishing acute from chronic illness is that acute illness typically:", options: ["Has rapid onset and a short, self-limiting course", "Lasts for years", "Requires lifelong self-management", "Never resolves"], answer: 0, rationale: "Acute illness has rapid onset and short duration, unlike the long course of chronic disease." }
      , { type: "fill", q: "The five steps of the nursing process are summarised by the acronym ____.", accept: ["ADPIE", "adpie"], rationale: "Assessment, Diagnosis, Planning, Implementation, Evaluation." }
      , { type: "fill", q: "An illness that persists for 3 months or longer is classified as ____.", accept: ["chronic", "chronic illness"], rationale: "The WHO defines chronic illness as lasting 3 months or more." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "msn-02-health-assessment",
    unit: "Unit 1 · Foundations of Medical-Surgical Nursing",
    title: "Health Assessment of the Adult",
    readMinutes: 25,
    summary: "Comprehensive adult health assessment: purposes and types; the health history; the four techniques of physical examination; a head-to-toe survey; vital signs with normal ranges; general survey; and documentation as the foundation of the nursing process.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of health assessment", p: "Health assessment is the systematic collection of subjective and objective data to establish a baseline, identify actual and potential health problems, form nursing diagnoses, plan care and evaluate response to treatment. It is the first and most critical step of the nursing process — the quality of all subsequent care depends on it." },
      { h: "Subjective vs objective data", list: [
        "Subjective data — what the client states (symptoms), e.g. 'I feel dizzy', pain, nausea. Only the client can report it.",
        "Objective data — what the nurse observes or measures (signs), e.g. BP 90/60 mmHg, pallor, a palpable mass, temperature 38.5 °C."
      ] },
      { h: "Types of assessment", list: [
        "Comprehensive (initial) — complete history and full physical examination on admission.",
        "Focused (problem-based) — targeted to a specific complaint or system (e.g. chest pain).",
        "Ongoing / follow-up — repeated to monitor change.",
        "Emergency — rapid ABC assessment in a life-threatening situation."
      ] },
      { h: "Components of the health history", list: [
        "Biographic data — name, age, sex, occupation.",
        "Chief complaint — the main reason for seeking care, in the client's own words.",
        "History of present illness — analysed using OLDCARTS/PQRST (Onset, Location, Duration, Character, Aggravating/relieving factors, Radiation, Timing, Severity).",
        "Past medical & surgical history — illnesses, operations, hospitalisations, allergies, medications, immunisations.",
        "Family history — hereditary and familial diseases.",
        "Personal & social history — diet, sleep, tobacco/alcohol, occupation, support systems.",
        "Functional / review of systems (ROS) — a systematic head-to-toe symptom check."
      ] },
      { h: "The four techniques of physical examination", p: "Physical examination uses four techniques, usually in this order (inspection → palpation → percussion → auscultation) — except the abdomen, where auscultation precedes palpation and percussion so that bowel sounds are not altered.", figure: {
        caption: "Four examination techniques and their usual order (abdomen is the exception).",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four examination techniques"><defs><marker id="msnArr2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif"><rect x="12" y="70" width="120" height="60" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="72" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Inspection</text><text x="72" y="114" text-anchor="middle" font-size="10" fill="#15803D">looking</text><rect x="152" y="70" width="120" height="60" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="212" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Palpation</text><text x="212" y="114" text-anchor="middle" font-size="10" fill="#15803D">touching</text><rect x="292" y="70" width="120" height="60" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="352" y="96" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Percussion</text><text x="352" y="114" text-anchor="middle" font-size="10" fill="#15803D">tapping</text><rect x="432" y="70" width="120" height="60" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="492" y="96" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Auscultation</text><text x="492" y="114" text-anchor="middle" font-size="10" fill="#15803D">listening</text></g><line x1="132" y1="100" x2="150" y2="100" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr2)"/><line x1="272" y1="100" x2="290" y2="100" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr2)"/><line x1="412" y1="100" x2="430" y2="100" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr2)"/><text x="280" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Abdomen order: Inspect → Auscultate → Percuss → Palpate</text></svg>'
      } },
      { h: "Vital signs — normal adult ranges", list: [
        "Temperature — 36.5-37.5 °C (oral); >38 °C is fever (pyrexia).",
        "Pulse (heart rate) — 60-100 beats/min; <60 bradycardia, >100 tachycardia.",
        "Respiratory rate — 12-20 breaths/min.",
        "Blood pressure — around 120/80 mmHg; ≥140/90 is hypertension (adult).",
        "Oxygen saturation (SpO2) — 95-100% on room air.",
        "Pain — the 'fifth vital sign', rated 0-10."
      ] },
      { h: "The general survey", p: "Before touching the client, the nurse forms an overall impression: level of consciousness, apparent age, body build and posture, hygiene and grooming, skin colour, obvious distress, gait, speech and mood. This general survey often gives the first clue to acuity and priority." },
      { h: "Head-to-toe systematic examination", list: [
        "Head & neck — eyes, ears, nose, mouth, lymph nodes, thyroid, jugular veins.",
        "Chest / respiratory — chest shape, breath sounds, use of accessory muscles.",
        "Cardiovascular — heart sounds, apex beat, peripheral pulses, oedema.",
        "Abdomen — contour, bowel sounds, tenderness, organomegaly, masses.",
        "Musculoskeletal — range of motion, strength, deformity.",
        "Neurological — consciousness (GCS), pupils, motor/sensory, reflexes.",
        "Skin & extremities — colour, temperature, turgor, lesions, capillary refill (<2-3 s)."
      ] },
      { h: "Levels of consciousness", p: "Consciousness is described along a scale: alert → confused → lethargic (drowsy but rousable) → obtunded → stupor (rousable only by vigorous stimulus) → coma (unrousable). The Glasgow Coma Scale (GCS) quantifies it from 3 (deepest coma) to 15 (fully alert) using eye, verbal and motor responses." },
      { h: "Techniques of palpation and percussion", p: "Light palpation (1-2 cm) detects tenderness and surface texture; deep palpation (about 4 cm) assesses organs and masses. Percussion produces sounds that indicate underlying density: resonance (normal lung), hyper-resonance (air, e.g. emphysema/pneumothorax), dullness (solid organ or fluid), and tympany (air-filled bowel/stomach)." },
      { h: "Special considerations in the adult/older client", p: "In older adults, allow more time, respect fatigue, expect physiological changes (reduced skin turgor, presbyopia, presbycusis, decreased baroreceptor sensitivity causing orthostatic hypotension). Always ensure privacy, warmth, adequate lighting, and a systematic, unhurried approach." },
      { h: "Documentation", p: "Findings must be recorded accurately, objectively, promptly and legibly, using accepted terminology and avoiding interpretation of subjective data. Good documentation communicates with the team, provides a legal record, supports continuity, and forms the baseline against which change is measured. Rule of thumb: 'not documented = not done'." },
      { h: "Clinical relevance", p: "A structured assessment enables early detection of deterioration (e.g. a rising respiratory rate is often the earliest sign of clinical decline), correct triage and prioritisation using ABC, and formulation of accurate nursing diagnoses that drive the rest of the care plan." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Differentiate subjective from objective data and give two examples of each.",
      "Describe the components of a complete adult health history.",
      "Explain the four techniques of physical examination and state why abdominal assessment differs in order.",
      "List the normal adult ranges for the vital signs and define bradycardia, tachycardia and pyrexia.",
      "Discuss the importance of accurate documentation in the nursing process."
    ],
    assessment: [
      { type: "mcq", q: "'The client reports sharp epigastric pain' is an example of:", options: ["Subjective data", "Objective data", "A nursing diagnosis", "A vital sign"], answer: 0, rationale: "Symptoms stated by the client are subjective data; only the client can report pain." },
      { type: "mcq", q: "When examining the abdomen, the correct order is:", options: ["Inspection, palpation, percussion, auscultation", "Auscultation, inspection, palpation, percussion", "Inspection, auscultation, percussion, palpation", "Palpation, inspection, auscultation, percussion"], answer: 2, rationale: "Auscultation is done before percussion/palpation on the abdomen so bowel sounds are not artificially altered." },
      { type: "mcq", q: "A resting adult pulse of 52 beats/min is described as:", options: ["Tachycardia", "Normal", "Fibrillation", "Bradycardia"], answer: 3, rationale: "A rate below 60 beats/min is bradycardia (normal 60-100)." },
      { type: "mcq", q: "Which percussion note is normally heard over healthy lung tissue?", options: ["Dullness", "Resonance", "Tympany", "Flatness"], answer: 1, rationale: "Air-filled healthy lung gives resonance; dullness suggests consolidation or fluid." },
      { type: "mcq", q: "The earliest and most sensitive vital-sign change in a deteriorating adult is often a rise in:", options: ["Temperature", "Blood pressure", "Respiratory rate", "Pulse pressure"], answer: 2, rationale: "An increasing respiratory rate is frequently the first measurable sign of clinical deterioration." },
      { type: "mcq", q: "A Glasgow Coma Scale score of 15 indicates a client who is:", options: ["Fully alert and oriented", "In deep coma", "Stuporous", "Brain dead"], answer: 0, rationale: "GCS ranges 3 (deepest coma) to 15 (fully alert); 15 is normal consciousness." },
      { type: "mcq", q: "The assessment done immediately for a client with sudden collapse and no pulse is:", options: ["Comprehensive assessment", "Ongoing assessment", "Focused GI assessment", "Emergency (ABC) assessment"], answer: 3, rationale: "A life-threatening situation calls for a rapid emergency airway-breathing-circulation assessment." },
      { type: "mcq", q: "Normal capillary refill time in an adult is:", options: ["5-8 seconds", "Less than 2-3 seconds", "10 seconds", "Refill does not occur normally"], answer: 1, rationale: "Prompt refill (<2-3 s) indicates adequate peripheral perfusion." },
      { type: "mcq", q: "OLDCARTS is a mnemonic used to analyse:", options: ["The past surgical history", "The family history", "The characteristics of a presenting symptom", "Laboratory results"], answer: 2, rationale: "OLDCARTS structures analysis of the history of present illness/symptom." },
      { type: "mcq", q: "Light palpation is used primarily to assess:", options: ["Surface tenderness and texture", "Deep organs and masses", "Percussion notes", "Breath sounds"], answer: 0, rationale: "Light palpation (1-2 cm) detects surface characteristics; deep palpation assesses organs." }
      , { type: "fill", q: "Data the nurse can observe or measure is called ____ data.", accept: ["objective"], rationale: "Objective data are observable/measurable signs, unlike subjective symptoms." }
      , { type: "fill", q: "A body temperature above 38 °C is termed fever or ____.", accept: ["pyrexia"], rationale: "Pyrexia is the medical term for fever." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "msn-03-fluid-electrolyte",
    unit: "Unit 1 · Foundations of Medical-Surgical Nursing",
    title: "Fluid, Electrolyte & Acid-Base Balance",
    readMinutes: 26,
    summary: "Body fluid compartments and their regulation; movement of fluids (osmosis, diffusion, filtration); normal serum electrolyte values; the major fluid and electrolyte imbalances; acid-base physiology and the four primary disturbances; and the nursing management of clients with imbalances and IV therapy.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Body water and fluid compartments", p: "Water makes up about 60% of adult body weight (less in the obese and the elderly, more in infants). It is distributed between two main compartments: intracellular fluid (ICF, about two-thirds / 40% of body weight) and extracellular fluid (ECF, about one-third / 20%). The ECF is subdivided into interstitial fluid (~15%) and intravascular plasma (~5%), with a small transcellular portion." },
      { h: "Movement of fluids and solutes", list: [
        "Diffusion — movement of solutes from higher to lower concentration.",
        "Osmosis — movement of water across a semipermeable membrane from lower to higher solute concentration.",
        "Filtration — movement of fluid due to hydrostatic pressure differences (e.g. at capillaries).",
        "Active transport — movement against a gradient using energy (ATP), e.g. the sodium-potassium pump."
      ] },
      { h: "Tonicity of solutions", p: "Isotonic solutions (e.g. 0.9% normal saline, Ringer's lactate) have the same osmolality as plasma (~280-300 mOsm/kg) and stay in the ECF — used for volume replacement. Hypotonic solutions (e.g. 0.45% saline) move water into cells. Hypertonic solutions (e.g. 3% saline, 10% dextrose) pull water out of cells. Normal serum osmolality is about 275-295 mOsm/kg." },
      { h: "Regulation of fluid balance", list: [
        "Kidneys — regulate volume and composition; excrete ~1500 mL urine/day.",
        "Antidiuretic hormone (ADH) — from the posterior pituitary; conserves water.",
        "Aldosterone (RAAS) — retains sodium and water, excretes potassium.",
        "Thirst mechanism — driven by rising osmolality.",
        "Atrial natriuretic peptide (ANP) — promotes sodium and water excretion."
      ] },
      { h: "Normal serum electrolyte values", list: [
        "Sodium (Na+) — 135-145 mmol/L (chief ECF cation).",
        "Potassium (K+) — 3.5-5.0 mmol/L (chief ICF cation).",
        "Calcium (Ca2+) — 8.5-10.5 mg/dL (2.1-2.6 mmol/L).",
        "Magnesium (Mg2+) — 1.5-2.5 mg/dL (0.7-1.0 mmol/L).",
        "Chloride (Cl-) — 95-105 mmol/L.",
        "Phosphate — 2.5-4.5 mg/dL; Bicarbonate (HCO3-) — 22-26 mmol/L."
      ] },
      { h: "Fluid volume deficit (hypovolaemia / dehydration)", p: "Loss of ECF water and electrolytes from vomiting, diarrhoea, haemorrhage, fever, burns or diuretics. Features: thirst, dry mucous membranes, poor skin turgor, oliguria (<30 mL/h), tachycardia, weak thready pulse, postural hypotension, weight loss, raised haematocrit and urine specific gravity. Management: replace fluids orally or IV (isotonic), monitor intake/output, daily weight and vital signs." },
      { h: "Fluid volume excess (hypervolaemia)", p: "Retention of water and sodium in heart failure, renal failure or excessive IV fluids. Features: oedema, weight gain, distended neck veins, bounding pulse, dyspnoea, crackles, raised BP. Management: restrict sodium and fluids, administer diuretics, position upright, monitor weight, I/O and for pulmonary oedema." },
      { h: "Key electrolyte imbalances", list: [
        "Hyponatraemia (<135) — confusion, headache, seizures; Hypernatraemia (>145) — thirst, dry membranes, neurologic signs.",
        "Hypokalaemia (<3.5) — muscle weakness, cramps, flat T waves, U waves, arrhythmias; Hyperkalaemia (>5.0) — peaked T waves, arrhythmias, cardiac arrest — a medical emergency.",
        "Hypocalcaemia (<8.5) — tetany, Chvostek's & Trousseau's signs; Hypercalcaemia (>10.5) — weakness, stones, bone pain, constipation.",
        "Hypomagnesaemia — tremor, hyperreflexia; Hypermagnesaemia — hyporeflexia, hypotension."
      ] },
      { h: "Acid-base physiology", p: "Normal arterial pH is 7.35-7.45, maintained by three systems: chemical buffers (bicarbonate is the main one, act in seconds), the respiratory system (adjusts CO2 in minutes), and the kidneys (adjust HCO3- over hours to days). Key ABG values: PaCO2 35-45 mmHg, HCO3- 22-26 mmol/L, PaO2 80-100 mmHg." },
      { h: "The four primary acid-base disorders", figure: {
        caption: "Primary acid-base disturbances by pH, PaCO2 and HCO3-.",
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acid-base disorders table"><g font-family="sans-serif"><rect x="10" y="10" width="540" height="200" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><line x1="10" y1="50" x2="550" y2="50" stroke="#15803D" stroke-width="1.5"/><line x1="200" y1="10" x2="200" y2="210" stroke="#15803D" stroke-width="1.2"/><line x1="315" y1="10" x2="315" y2="210" stroke="#15803D" stroke-width="1.2"/><line x1="430" y1="10" x2="430" y2="210" stroke="#15803D" stroke-width="1.2"/><line x1="10" y1="90" x2="550" y2="90" stroke="#22C55E" stroke-width="1"/><line x1="10" y1="130" x2="550" y2="130" stroke="#22C55E" stroke-width="1"/><line x1="10" y1="170" x2="550" y2="170" stroke="#22C55E" stroke-width="1"/><text x="105" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Disorder</text><text x="257" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">pH</text><text x="372" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">PaCO2</text><text x="490" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">HCO3-</text><text x="20" y="75" font-size="11" fill="#0F4C3A">Respiratory acidosis</text><text x="257" y="75" text-anchor="middle" font-size="12" fill="#15803D">↓</text><text x="372" y="75" text-anchor="middle" font-size="12" fill="#15803D">↑</text><text x="490" y="75" text-anchor="middle" font-size="12" fill="#15803D">↑/N</text><text x="20" y="115" font-size="11" fill="#0F4C3A">Respiratory alkalosis</text><text x="257" y="115" text-anchor="middle" font-size="12" fill="#15803D">↑</text><text x="372" y="115" text-anchor="middle" font-size="12" fill="#15803D">↓</text><text x="490" y="115" text-anchor="middle" font-size="12" fill="#15803D">↓/N</text><text x="20" y="155" font-size="11" fill="#0F4C3A">Metabolic acidosis</text><text x="257" y="155" text-anchor="middle" font-size="12" fill="#15803D">↓</text><text x="372" y="155" text-anchor="middle" font-size="12" fill="#15803D">↓/N</text><text x="490" y="155" text-anchor="middle" font-size="12" fill="#15803D">↓</text><text x="20" y="195" font-size="11" fill="#0F4C3A">Metabolic alkalosis</text><text x="257" y="195" text-anchor="middle" font-size="12" fill="#15803D">↑</text><text x="372" y="195" text-anchor="middle" font-size="12" fill="#15803D">↑/N</text><text x="490" y="195" text-anchor="middle" font-size="12" fill="#15803D">↑</text></g></svg>'
      } },
      { h: "Interpreting ABGs (systematic steps)", p: "Step 1: look at pH — is it acid (<7.35) or alkaline (>7.45)? Step 2: look at PaCO2 (respiratory) — high CO2 = acid. Step 3: look at HCO3- (metabolic) — low HCO3- = acid. Step 4: match the abnormal value to the pH to identify the primary problem. Step 5: check for compensation (the other system moving to normalise pH)." },
      { h: "IV therapy nursing responsibilities", list: [
        "Verify order, fluid type, rate and expiry; use aseptic technique.",
        "Select appropriate site; monitor for infiltration, phlebitis, infection.",
        "Regulate flow accurately; use infusion pumps for critical fluids.",
        "Monitor intake/output, daily weight, electrolytes and for fluid overload.",
        "Change site/dressing per policy; document site condition and volumes."
      ] },
      { h: "Nursing management of imbalances", list: [
        "Maintain accurate intake-output records and daily weights (1 L ≈ 1 kg).",
        "Monitor vital signs, level of consciousness, skin turgor and mucous membranes.",
        "Watch cardiac monitor/ECG in potassium, calcium and magnesium disturbances.",
        "Administer replacement or restriction as prescribed; never give IV potassium as a rapid bolus.",
        "Educate the client on diet, fluid limits and warning signs."
      ] },
      { h: "Clinical relevance", p: "Fluid and electrolyte imbalance underlies or complicates almost every acute illness — shock, burns, renal failure, GI losses and post-operative states. Early nursing recognition of subtle signs (falling urine output, changing mental status, ECG changes) can be life-saving." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the body fluid compartments and the mechanisms regulating fluid balance.",
      "State the normal serum values of sodium, potassium and calcium and the features of their major imbalances.",
      "Explain the clinical features and nursing management of fluid volume deficit.",
      "Outline the four primary acid-base disorders with their expected pH, PaCO2 and HCO3- changes.",
      "Discuss the nursing responsibilities during intravenous fluid therapy."
    ],
    assessment: [
      { type: "mcq", q: "The chief cation of the intracellular fluid is:", options: ["Potassium", "Sodium", "Calcium", "Chloride"], answer: 0, rationale: "Potassium is the main intracellular cation; sodium predominates in the ECF." },
      { type: "mcq", q: "A serum potassium of 6.8 mmol/L with peaked T waves on ECG requires urgent action because it can cause:", options: ["Constipation only", "Mild muscle cramps only", "Life-threatening cardiac arrhythmias", "Increased urine output"], answer: 2, rationale: "Severe hyperkalaemia causes dangerous arrhythmias and cardiac arrest — a medical emergency." },
      { type: "mcq", q: "0.9% normal saline is classified as a(n):", options: ["Hypotonic solution", "Hypertonic solution", "Colloid", "Isotonic solution"], answer: 3, rationale: "Normal saline has osmolality similar to plasma, so it is isotonic and stays in the ECF." },
      { type: "mcq", q: "A dehydrated client typically shows:", options: ["Bounding pulse and neck-vein distension", "Poor skin turgor, oliguria and tachycardia", "Weight gain and crackles", "Bradycardia and hypertension"], answer: 1, rationale: "Fluid volume deficit produces poor turgor, low urine output and compensatory tachycardia." },
      { type: "mcq", q: "ABG: pH 7.30, PaCO2 55 mmHg, HCO3- 24 mmol/L. This indicates:", options: ["Metabolic acidosis", "Respiratory alkalosis", "Respiratory acidosis", "Metabolic alkalosis"], answer: 2, rationale: "Low pH with high PaCO2 and normal HCO3- is uncompensated respiratory acidosis." },
      { type: "mcq", q: "Trousseau's and Chvostek's signs are associated with:", options: ["Hypocalcaemia", "Hypercalcaemia", "Hyperkalaemia", "Hypernatraemia"], answer: 0, rationale: "Low calcium increases neuromuscular excitability, producing tetany with positive Trousseau's/Chvostek's signs." },
      { type: "mcq", q: "The hormone that conserves body water by acting on the kidney is:", options: ["Aldosterone", "Atrial natriuretic peptide", "Insulin", "Antidiuretic hormone (ADH)"], answer: 3, rationale: "ADH promotes water reabsorption in the collecting ducts, conserving water." },
      { type: "mcq", q: "The fastest-acting system defending against acute pH changes is:", options: ["The kidneys", "Chemical buffers", "Behavioural change", "The liver"], answer: 1, rationale: "Chemical buffers (chiefly bicarbonate) react within seconds, before respiratory and renal compensation." },
      { type: "mcq", q: "When administering IV potassium chloride, the nurse must NEVER:", options: ["Dilute it", "Use an infusion pump", "Give it as a rapid IV bolus/push", "Monitor the ECG"], answer: 2, rationale: "Rapid IV potassium can cause fatal cardiac arrest; it must be diluted and infused slowly." },
      { type: "mcq", q: "In metabolic acidosis the primary abnormality is a:", options: ["Fall in HCO3-", "Rise in HCO3-", "Fall in PaCO2 alone", "Rise in PaO2"], answer: 0, rationale: "Metabolic acidosis is defined by a primary decrease in bicarbonate, lowering pH." }
      , { type: "fill", q: "Normal arterial blood pH ranges from 7.35 to ____.", accept: ["7.45"], rationale: "The normal arterial pH range is 7.35-7.45." }
      , { type: "fill", q: "The normal serum sodium range is 135 to ____ mmol/L.", accept: ["145"], rationale: "Serum sodium is normally 135-145 mmol/L." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "msn-04-inflammation-immunity",
    unit: "Unit 1 · Foundations of Medical-Surgical Nursing",
    title: "Inflammation, Infection & Immunity",
    readMinutes: 25,
    summary: "The inflammatory response and its cardinal signs; the stages of wound and tissue healing; the chain of infection; innate and adaptive immunity; types of immunity; hypersensitivity reactions; healthcare-associated (nosocomial) infection; and the nurse's central role in infection prevention and control.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Inflammation defined", p: "Inflammation is the body's non-specific, protective response to tissue injury or infection. Its purposes are to neutralise and remove the injurious agent, limit its spread, and prepare the tissue for repair. It can be acute (rapid, short-lived) or chronic (persistent, weeks to years, e.g. rheumatoid arthritis, tuberculosis)." },
      { h: "The five cardinal signs", list: [
        "Rubor (redness) — from increased blood flow (hyperaemia).",
        "Calor (heat) — from increased blood flow.",
        "Tumor (swelling) — from fluid exudate leaking into tissue.",
        "Dolor (pain) — from pressure and chemical mediators.",
        "Functio laesa (loss of function) — of the affected part."
      ] },
      { h: "Mechanism of acute inflammation", p: "After injury, chemical mediators (histamine, prostaglandins, bradykinin, cytokines) are released. These cause vasodilation (increasing blood flow → redness and heat) and increased capillary permeability (allowing plasma and proteins to leak out → swelling). Leukocytes (especially neutrophils) marginate, adhere to vessel walls, migrate through them (diapedesis) and move toward the site by chemotaxis, where they phagocytose debris and organisms." },
      { h: "Stages of wound healing", list: [
        "Haemostasis — immediate; vasoconstriction and clot formation.",
        "Inflammatory phase (0-4 days) — clean-up by neutrophils and macrophages.",
        "Proliferative phase (4-21 days) — granulation tissue, collagen and epithelialisation.",
        "Maturation / remodelling (21 days-2 years) — collagen strengthens and the scar matures."
      ] },
      { h: "Types of wound healing", p: "Primary intention: clean, approximated edges (a sutured surgical wound) heal quickly with minimal scarring. Secondary intention: open wounds with tissue loss heal from the base up by granulation (slower, more scarring, higher infection risk). Tertiary (delayed primary) intention: a wound left open initially then closed later, e.g. after contamination is controlled." },
      { h: "The chain of infection", p: "Infection requires six linked elements; breaking any link prevents transmission — the foundation of infection control.", figure: {
        caption: "The chain of infection — six links; breaking any one prevents infection.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of infection"><defs><marker id="msnArr4" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A"><rect x="10" y="20" width="100" height="44" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="60" y="40" text-anchor="middle">Infectious</text><text x="60" y="54" text-anchor="middle">agent</text><rect x="150" y="20" width="100" height="44" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="200" y="46" text-anchor="middle">Reservoir</text><rect x="290" y="20" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="345" y="40" text-anchor="middle">Portal of</text><text x="345" y="54" text-anchor="middle">exit</text><rect x="435" y="20" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="490" y="40" text-anchor="middle">Mode of</text><text x="490" y="54" text-anchor="middle">transmission</text><rect x="300" y="140" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="355" y="160" text-anchor="middle">Portal of</text><text x="355" y="174" text-anchor="middle">entry</text><rect x="130" y="140" width="120" height="44" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="190" y="160" text-anchor="middle">Susceptible</text><text x="190" y="174" text-anchor="middle">host</text></g><line x1="110" y1="42" x2="146" y2="42" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr4)"/><line x1="250" y1="42" x2="286" y2="42" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr4)"/><line x1="400" y1="42" x2="431" y2="42" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr4)"/><path d="M490 64 L490 120 L410 120 L385 138" fill="none" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr4)"/><line x1="300" y1="162" x2="254" y2="162" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr4)"/><path d="M130 150 L60 120 L60 66" fill="none" stroke="#22C55E" stroke-width="2.5" marker-end="url(#msnArr4)"/></svg>'
      } },
      { h: "Innate (non-specific) immunity", p: "The first and second lines of defence, present from birth and acting immediately against any invader: physical/chemical barriers (intact skin, mucous membranes, gastric acid, lysozyme in tears), the inflammatory response, phagocytes (neutrophils, macrophages), natural killer cells and the complement system. It has no memory." },
      { h: "Adaptive (specific) immunity", p: "The third line of defence: slower but specific and with memory. Two arms: (1) humoral immunity — B lymphocytes produce antibodies (immunoglobulins IgG, IgM, IgA, IgE, IgD) against specific antigens; (2) cell-mediated immunity — T lymphocytes (helper CD4, cytotoxic CD8) act against intracellular pathogens, fungi and tumour cells." },
      { h: "Types of acquired immunity", list: [
        "Active natural — antibodies made after actual infection (long-lasting).",
        "Active artificial — antibodies made after vaccination (long-lasting).",
        "Passive natural — antibodies transferred mother-to-baby (placenta/breast milk); temporary.",
        "Passive artificial — ready-made antibodies given (immunoglobulin/antiserum); immediate but temporary."
      ] },
      { h: "Hypersensitivity reactions", list: [
        "Type I (immediate, IgE) — anaphylaxis, allergic asthma, hay fever.",
        "Type II (cytotoxic) — transfusion reactions, haemolytic disease.",
        "Type III (immune-complex) — SLE, glomerulonephritis.",
        "Type IV (delayed, cell-mediated) — contact dermatitis, TB skin test, graft rejection."
      ] },
      { h: "Healthcare-associated (nosocomial) infection", p: "A nosocomial infection is one acquired in a healthcare setting, usually appearing 48 hours or more after admission and not present at admission. Common types: urinary tract infection (often catheter-related), surgical site infection, pneumonia (often ventilator-associated) and bloodstream infection (often line-related). Major risks: invasive devices, immunosuppression, prolonged stay and antibiotic overuse." },
      { h: "Standard precautions and infection control", list: [
        "Hand hygiene — the single most effective measure (WHO 'five moments').",
        "Personal protective equipment — gloves, gown, mask, eye protection as indicated.",
        "Safe handling and disposal of sharps and waste.",
        "Aseptic technique for invasive procedures and wound care.",
        "Cleaning, disinfection and sterilisation of equipment and environment.",
        "Isolation/transmission-based precautions (contact, droplet, airborne)."
      ] },
      { h: "Nursing management", list: [
        "Assess for local and systemic signs of infection (fever, raised WBC, purulent exudate).",
        "Monitor temperature, WBC count and culture results; administer antimicrobials on time.",
        "Apply and teach standard precautions and asepsis rigorously.",
        "Promote nutrition, hydration, rest and wound care to support healing.",
        "Educate on immunisation, hand hygiene and completing antibiotic courses."
      ] },
      { h: "Clinical relevance", p: "The nurse is the frontline defender against infection. Meticulous hand hygiene, asepsis and early recognition of infection break the chain of infection, reduce nosocomial infections and antimicrobial resistance, and directly improve patient survival." }
    ],
    references: REF_MSN,
    examQuestions: [
      "List and explain the five cardinal signs of inflammation and their physiological basis.",
      "Describe the stages of wound healing and differentiate primary, secondary and tertiary intention.",
      "Draw the chain of infection and explain how nursing measures break each link.",
      "Differentiate innate from adaptive immunity and describe the four types of acquired immunity.",
      "Define nosocomial infection and discuss the nurse's role in infection prevention and control."
    ],
    assessment: [
      { type: "mcq", q: "The redness and heat of acute inflammation are chiefly caused by:", options: ["Vasodilation and increased blood flow", "Vasoconstriction", "Decreased capillary permeability", "Fibrosis"], answer: 0, rationale: "Chemical mediators cause vasodilation, increasing blood flow and producing rubor and calor." },
      { type: "mcq", q: "A clean, sutured surgical incision that heals with minimal scarring heals by:", options: ["Secondary intention", "Tertiary intention", "Primary intention", "Chronic granulation"], answer: 2, rationale: "Approximated edges heal by primary intention with rapid closure and little scarring." },
      { type: "mcq", q: "The single most effective measure to prevent healthcare-associated infection is:", options: ["Prophylactic antibiotics", "Wearing gowns at all times", "Reverse isolation for everyone", "Hand hygiene"], answer: 3, rationale: "Proper hand hygiene is the most effective, evidence-based measure to prevent cross-infection." },
      { type: "mcq", q: "Antibodies transferred from mother to infant through breast milk provide:", options: ["Active natural immunity", "Passive natural immunity", "Active artificial immunity", "Passive artificial immunity"], answer: 1, rationale: "Ready-made maternal antibodies passed naturally give temporary passive natural immunity." },
      { type: "mcq", q: "Anaphylaxis is an example of which hypersensitivity reaction?", options: ["Type II (cytotoxic)", "Type III (immune complex)", "Type I (IgE-mediated)", "Type IV (delayed)"], answer: 2, rationale: "Anaphylaxis is an immediate, IgE-mediated Type I hypersensitivity reaction." },
      { type: "mcq", q: "The migration of leukocytes through the capillary wall toward injured tissue is called:", options: ["Diapedesis", "Chemotaxis", "Phagocytosis", "Opsonisation"], answer: 0, rationale: "Diapedesis is the passage of white cells through the vessel wall; chemotaxis is the directed movement that follows." },
      { type: "mcq", q: "A urinary tract infection appearing 3 days after admission with a catheter is best classified as:", options: ["Community-acquired", "A hypersensitivity reaction", "A latent infection", "Nosocomial (healthcare-associated)"], answer: 3, rationale: "Infection developing ≥48 h after admission and related to care/devices is nosocomial." },
      { type: "mcq", q: "Humoral immunity is mediated mainly by:", options: ["T lymphocytes", "B lymphocytes and antibodies", "Neutrophils", "Complement only"], answer: 1, rationale: "B cells produce antibodies (immunoglobulins) — the basis of humoral immunity." },
      { type: "mcq", q: "Vaccination produces which type of immunity?", options: ["Passive natural", "Passive artificial", "Active artificial", "Innate"], answer: 2, rationale: "A vaccine stimulates the person's own antibody production — active artificial immunity." },
      { type: "mcq", q: "Which is part of innate (non-specific) immunity?", options: ["Intact skin and phagocytosis", "Antibody production by plasma cells", "Memory T cells", "Immunoglobulin therapy"], answer: 0, rationale: "Barriers and phagocytes act immediately without specificity or memory — innate immunity." }
      , { type: "fill", q: "The Latin cardinal sign of inflammation meaning 'loss of function' is functio ____.", accept: ["laesa"], rationale: "Functio laesa denotes loss of function of the inflamed part." }
      , { type: "fill", q: "Infection acquired in a healthcare setting ≥48 hours after admission is called a ____ infection.", accept: ["nosocomial", "healthcare-associated", "hospital-acquired"], rationale: "Such infections are nosocomial (healthcare-associated)." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "msn-05-pain-management",
    unit: "Unit 1 · Foundations of Medical-Surgical Nursing",
    title: "Pain Management",
    readMinutes: 24,
    summary: "The nature and physiology of pain; classification of pain; pain assessment tools; pharmacological management using the WHO analgesic ladder; non-pharmacological measures; opioid safety and side-effects; and evidence-based nursing management of the client in pain.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is pain?", p: "Pain is 'an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage' (IASP). A vital nursing principle is that pain is whatever the experiencing person says it is, existing whenever they say it does — it is always subjective and self-reported." },
      { h: "Physiology of pain (nociception)", list: [
        "Transduction — a noxious stimulus is converted into an electrical impulse at the nociceptor.",
        "Transmission — the impulse travels via A-delta (sharp, fast) and C (dull, slow) fibres to the spinal cord and brain.",
        "Perception — the brain (cortex, limbic system) becomes conscious of pain.",
        "Modulation — the body inhibits or amplifies pain via descending pathways and endogenous opioids (endorphins)."
      ] },
      { h: "The gate control theory", p: "Melzack and Wall proposed that a 'gate' in the dorsal horn of the spinal cord controls pain transmission. Stimulation of large A-beta fibres (by rubbing, heat, massage, TENS) can 'close the gate' and reduce pain, explaining why non-drug measures work. This theory underpins many nursing comfort interventions." },
      { h: "Classification of pain", list: [
        "By duration — Acute (recent, protective, resolves with healing) vs Chronic (>3 months, may persist without ongoing tissue damage).",
        "By origin — Nociceptive: somatic (skin, bone, well localised) or visceral (organs, diffuse, cramping); Neuropathic (nerve damage — burning, shooting, e.g. diabetic neuropathy).",
        "Referred pain — felt at a site distant from its source (e.g. cardiac pain to the left arm/jaw).",
        "Cancer pain and phantom limb pain are special mixed types."
      ] },
      { h: "Pain assessment", p: "Assess systematically using OLDCARTS/PQRST and a validated scale. Document location, intensity, quality, onset, duration, aggravating/relieving factors and effect on function. Because pain is subjective, the client's self-report is the gold standard.", figure: {
        caption: "Common pain intensity scales.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pain scales"><g font-family="sans-serif"><text x="20" y="30" font-size="13" font-weight="700" fill="#0F4C3A">Numeric Rating Scale (0-10)</text><line x1="20" y1="55" x2="540" y2="55" stroke="#15803D" stroke-width="3"/><g font-size="11" fill="#0F4C3A" text-anchor="middle">' +
'<text x="20" y="78">0</text><text x="72" y="78">1</text><text x="124" y="78">2</text><text x="176" y="78">3</text><text x="228" y="78">4</text><text x="280" y="78">5</text><text x="332" y="78">6</text><text x="384" y="78">7</text><text x="436" y="78">8</text><text x="488" y="78">9</text><text x="540" y="78">10</text></g>' +
'<text x="20" y="98" font-size="10" fill="#15803D">No pain</text><text x="540" y="98" font-size="10" fill="#15803D" text-anchor="end">Worst pain</text>' +
'<text x="20" y="135" font-size="13" font-weight="700" fill="#0F4C3A">Categories</text><rect x="20" y="148" width="120" height="30" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="168" text-anchor="middle" font-size="11" fill="#0F4C3A">Mild 1-3</text><rect x="150" y="148" width="130" height="30" rx="6" fill="#22C55E" stroke="#15803D"/><text x="215" y="168" text-anchor="middle" font-size="11" fill="#F0FDF4">Moderate 4-6</text><rect x="290" y="148" width="130" height="30" rx="6" fill="#0F4C3A" stroke="#15803D"/><text x="355" y="168" text-anchor="middle" font-size="11" fill="#F0FDF4">Severe 7-10</text></g></svg>'
      } },
      { h: "Pain assessment tools", list: [
        "Numeric Rating Scale (NRS) 0-10 — most common for adults.",
        "Visual Analogue Scale (VAS) — a 10 cm line.",
        "Wong-Baker FACES — for children and those with communication difficulty.",
        "Behavioural scales (e.g. FLACC, PAINAD) — for non-verbal or cognitively impaired clients."
      ] },
      { h: "The WHO analgesic ladder", list: [
        "Step 1 (mild pain) — non-opioids: paracetamol, NSAIDs ± adjuvants.",
        "Step 2 (moderate pain) — weak opioids (codeine, tramadol) ± non-opioid ± adjuvant.",
        "Step 3 (severe pain) — strong opioids (morphine) ± non-opioid ± adjuvant.",
        "Adjuvants — antidepressants and anticonvulsants for neuropathic pain; give analgesia 'by the clock', 'by the mouth', 'by the ladder'."
      ] },
      { h: "Non-pharmacological management", list: [
        "Physical — heat/cold, massage, positioning, TENS, immobilisation.",
        "Cognitive-behavioural — distraction, relaxation, guided imagery, music.",
        "Cutaneous stimulation and acupressure.",
        "Spiritual and psychological support; a calm, restful environment."
      ] },
      { h: "Opioid side-effects and safety", list: [
        "Respiratory depression — the most serious; monitor rate and sedation level.",
        "Constipation — very common; give prophylactic laxatives.",
        "Nausea/vomiting, sedation, pruritus, urinary retention.",
        "Naloxone is the antidote for opioid-induced respiratory depression.",
        "Assess sedation before each dose; hold if respiratory rate <8-10/min or excessive sedation."
      ] },
      { h: "Patient-controlled analgesia (PCA)", p: "PCA allows the client to self-administer small preset IV doses of opioid via a pump with a lockout interval that prevents overdose. It gives better pain control and satisfaction. Only the patient should press the button (no 'PCA by proxy'); the nurse monitors respiratory rate, sedation and pump settings." },
      { h: "Common myths and barriers", list: [
        "Myth: giving opioids for real pain causes addiction — true addiction in acute pain is rare.",
        "Myth: a sleeping patient is not in pain — patients may sleep from exhaustion.",
        "Barriers: fear of addiction, under-reporting, inadequate assessment, and provider bias — all must be actively addressed."
      ] },
      { h: "Nursing management", list: [
        "Believe and accept the client's report of pain; assess and reassess after each intervention.",
        "Administer analgesia promptly, ideally before pain becomes severe (pre-emptive).",
        "Combine pharmacological and non-pharmacological measures (multimodal analgesia).",
        "Monitor for side-effects, especially respiratory depression with opioids.",
        "Document pain scores and response; educate on the safe use of PCA and analgesics."
      ] },
      { h: "Clinical relevance", p: "Unrelieved pain slows recovery, impairs mobility and breathing (raising the risk of pneumonia and DVT), prolongs hospital stay and causes suffering. Effective, individualised pain control is both an ethical duty and a measurable quality indicator." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define pain and explain the four physiological processes of nociception.",
      "Describe the gate control theory and how it supports non-pharmacological pain relief.",
      "Explain the WHO analgesic ladder with drug examples at each step.",
      "Discuss the major side-effects of opioids and the nursing safety measures for each.",
      "Outline a nursing care plan for a post-operative client with severe pain."
    ],
    assessment: [
      { type: "mcq", q: "The most reliable indicator of a client's pain is:", options: ["The client's own report", "The nurse's judgement", "The blood pressure", "The facial expression alone"], answer: 0, rationale: "Pain is subjective; the client's self-report is the gold standard for assessment." },
      { type: "mcq", q: "Step 3 of the WHO analgesic ladder for severe pain uses:", options: ["Paracetamol only", "Weak opioids only", "Strong opioids such as morphine", "No analgesia"], answer: 2, rationale: "Severe pain is managed with strong opioids (e.g. morphine), ± non-opioid ± adjuvant." },
      { type: "mcq", q: "The most serious side-effect requiring monitoring after opioid administration is:", options: ["Constipation", "Dry mouth", "Itching", "Respiratory depression"], answer: 3, rationale: "Respiratory depression is potentially fatal; sedation and respiratory rate must be monitored." },
      { type: "mcq", q: "The antidote for opioid-induced respiratory depression is:", options: ["Flumazenil", "Naloxone", "Atropine", "Vitamin K"], answer: 1, rationale: "Naloxone reverses opioid effects, including respiratory depression." },
      { type: "mcq", q: "Cardiac pain felt in the left arm and jaw is an example of:", options: ["Neuropathic pain", "Phantom pain", "Referred pain", "Somatic pain"], answer: 2, rationale: "Referred pain is perceived at a site distant from its true source." },
      { type: "mcq", q: "According to the gate control theory, rubbing or applying heat to an area relieves pain by:", options: ["Closing the spinal 'gate' via large-fibre stimulation", "Increasing C-fibre firing", "Blocking the brain cortex", "Producing prostaglandins"], answer: 0, rationale: "Large A-beta fibre input closes the dorsal-horn gate, reducing pain transmission." },
      { type: "mcq", q: "Burning, shooting pain in the feet of a client with diabetes is typically:", options: ["Visceral pain", "Somatic pain", "Referred pain", "Neuropathic pain"], answer: 3, rationale: "Nerve damage produces neuropathic pain with a burning, shooting quality." },
      { type: "mcq", q: "A key safety rule for patient-controlled analgesia (PCA) is:", options: ["Family may press the button when the patient sleeps", "Only the patient presses the button", "Remove the lockout interval", "Bolus the whole reservoir at once"], answer: 1, rationale: "Only the patient should activate PCA; proxy dosing risks overdose. The lockout prevents overdosing." },
      { type: "mcq", q: "The WHO principle for chronic pain analgesia includes giving drugs:", options: ["Only when pain is unbearable", "By intramuscular route only", "By the clock (regularly), not only PRN", "In a single daily dose"], answer: 2, rationale: "'By the clock' regular dosing maintains steady analgesia rather than waiting for severe pain." },
      { type: "mcq", q: "Which non-pharmacological method uses electrical stimulation to relieve pain?", options: ["TENS", "Guided imagery", "Relaxation breathing", "Music therapy"], answer: 0, rationale: "TENS (transcutaneous electrical nerve stimulation) delivers mild current to modulate pain." }
      , { type: "fill", q: "The most widely used pain intensity scale for adults rates pain from 0 to ____.", accept: ["10", "ten"], rationale: "The Numeric Rating Scale runs from 0 (no pain) to 10 (worst pain)." }
      , { type: "fill", q: "Pain persisting longer than 3 months is classified as ____ pain.", accept: ["chronic"], rationale: "Chronic pain lasts beyond the normal healing period (>3 months)." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "msn-06-perioperative",
    unit: "Unit 1 · Foundations of Medical-Surgical Nursing",
    title: "Perioperative Nursing (Pre-, Intra- & Post-operative Care)",
    readMinutes: 27,
    summary: "The three perioperative phases; classification of surgery; comprehensive preoperative assessment, preparation and informed consent; types of anaesthesia; intra-operative roles and safety (including the surgical safety checklist); PACU and post-operative care; and prevention and nursing management of post-operative complications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The three perioperative phases", p: "Perioperative care covers the entire surgical experience in three phases: preoperative (from the decision to operate until transfer to the operating table), intra-operative (from the operating table until admission to the recovery unit), and postoperative (from admission to recovery until full recovery/discharge and follow-up)." },
      { h: "Classification of surgery", list: [
        "By urgency — emergency (immediate, life-saving), urgent, elective (scheduled), optional.",
        "By purpose — diagnostic (biopsy), curative/ablative (remove diseased part), palliative (relieve symptoms), reconstructive/cosmetic, transplant.",
        "By risk/extent — major vs minor surgery."
      ] },
      { h: "Preoperative assessment", list: [
        "Complete history and physical examination; identify comorbidities (diabetes, cardiac, respiratory, renal).",
        "Investigations — CBC, blood grouping and cross-match, coagulation, blood glucose, urea/electrolytes, ECG, chest X-ray as indicated.",
        "Assess allergies, current medications (especially anticoagulants, steroids, antidiabetics), smoking and alcohol use.",
        "Assess nutritional status, psychological readiness and anxiety."
      ] },
      { h: "Informed consent", p: "Valid informed consent must be obtained before surgery. It requires that the client is competent, has been informed of the nature, benefits, risks and alternatives, and consents voluntarily and without coercion. The surgeon is responsible for explaining the procedure; the nurse witnesses the signature and confirms understanding, ensuring the form is signed before sedation." },
      { h: "Preoperative preparation", list: [
        "Fasting (NPO) — typically 6 hours for solids and 2 hours for clear fluids to prevent aspiration.",
        "Skin preparation — cleansing and, if needed, hair clipping (not shaving) at the site.",
        "Bowel and bladder preparation; remove prostheses, jewellery, nail polish, dentures.",
        "Administer prescribed pre-medication and prophylactic antibiotics; site marking.",
        "Baseline vital signs, empty bladder, correct site/patient/procedure verification."
      ] },
      { h: "Preoperative teaching", p: "Teach deep breathing and coughing exercises, incentive spirometry, leg exercises and early ambulation, pain management plan, and what to expect. Effective teaching reduces anxiety, pain and post-operative complications such as atelectasis and DVT." },
      { h: "Types of anaesthesia", list: [
        "General anaesthesia — reversible loss of consciousness; airway protection needed.",
        "Regional — spinal, epidural, nerve block: loss of sensation in a body region while conscious.",
        "Local — a small area is numbed for minor procedures.",
        "Conscious (procedural) sedation — reduced awareness with maintained airway reflexes.",
        "Stages of general anaesthesia: induction → maintenance → emergence."
      ] },
      { h: "Intra-operative roles", list: [
        "Scrub nurse — sterile; passes instruments, maintains the sterile field, counts sponges/needles.",
        "Circulating nurse — unsterile; coordinates the room, documents, obtains supplies, monitors safety.",
        "Anaesthetist — administers anaesthesia and monitors the patient.",
        "Positioning, temperature control, and prevention of pressure/nerve injury."
      ] },
      { h: "The WHO Surgical Safety Checklist", figure: {
        caption: "The three checkpoints of the WHO Surgical Safety Checklist.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Surgical safety checklist"><defs><marker id="msnArr6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif"><rect x="15" y="45" width="160" height="80" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="95" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">SIGN IN</text><text x="95" y="90" text-anchor="middle" font-size="10" fill="#15803D">before anaesthesia</text><text x="95" y="106" text-anchor="middle" font-size="9" fill="#15803D">ID, site, consent, allergy</text><rect x="200" y="45" width="160" height="80" rx="9" fill="#22C55E" stroke="#15803D" stroke-width="2"/><text x="280" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#F0FDF4">TIME OUT</text><text x="280" y="90" text-anchor="middle" font-size="10" fill="#F0FDF4">before incision</text><text x="280" y="106" text-anchor="middle" font-size="9" fill="#F0FDF4">team confirms patient/site</text><rect x="385" y="45" width="160" height="80" rx="9" fill="#0F4C3A" stroke="#15803D" stroke-width="2"/><text x="465" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#F0FDF4">SIGN OUT</text><text x="465" y="90" text-anchor="middle" font-size="10" fill="#DCFCE7">before leaving room</text><text x="465" y="106" text-anchor="middle" font-size="9" fill="#DCFCE7">counts, specimen, plan</text></g><line x1="175" y1="85" x2="196" y2="85" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#msnArr6)"/><line x1="360" y1="85" x2="381" y2="85" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#msnArr6)"/></svg>'
      } },
      { h: "Post-anaesthesia care unit (PACU)", list: [
        "Priority is ABC — a patent airway, adequate breathing, oxygenation and circulation.",
        "Monitor vital signs, SpO2, level of consciousness and surgical site every 15 minutes initially.",
        "Position to prevent aspiration; keep suction and oxygen ready.",
        "Assess pain, nausea, bleeding and return of protective reflexes.",
        "Discharge from PACU when a scoring system (e.g. Aldrete score) criteria are met."
      ] },
      { h: "Post-operative nursing care on the ward", list: [
        "Monitor vitals, wound/dressing, drains and intake-output.",
        "Manage pain (multimodal) and nausea/vomiting.",
        "Encourage deep breathing, coughing, incentive spirometry and early ambulation.",
        "Prevent DVT — leg exercises, compression stockings, prophylactic anticoagulation, early mobility.",
        "Advance diet as bowel function returns; support wound healing with nutrition."
      ] },
      { h: "Post-operative complications", list: [
        "Respiratory — atelectasis, pneumonia, aspiration.",
        "Circulatory — haemorrhage, shock, DVT, pulmonary embolism.",
        "Wound — infection, dehiscence (separation), evisceration (protrusion of viscera).",
        "Others — paralytic ileus, urinary retention, hypothermia, delirium."
      ] },
      { h: "Wound dehiscence and evisceration", p: "If wound dehiscence or evisceration occurs, the nurse must stay with the client, place them supine with knees flexed, cover the wound with a sterile saline-soaked dressing (do not push organs back in), notify the surgeon immediately, keep the client NPO and prepare for emergency surgery." },
      { h: "Nursing management summary", p: "Perioperative nursing centres on safety: correct patient/site/procedure verification, asepsis, vigilant monitoring, prevention of complications through early mobilisation and pulmonary hygiene, effective pain control, and thorough discharge teaching (wound care, activity, medications and warning signs)." },
      { h: "Clinical relevance", p: "Most post-operative deaths and readmissions stem from preventable complications — aspiration, VTE, wound infection, haemorrhage. Systematic perioperative nursing, the WHO checklist and early mobilisation are proven to reduce surgical mortality and morbidity." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the three phases of perioperative care and the nurse's role in each.",
      "Explain the elements of valid informed consent and the nurse's specific responsibilities.",
      "Compare general, regional and local anaesthesia with nursing implications.",
      "List the common post-operative complications and the nursing measures to prevent them.",
      "Describe the immediate nursing management of wound dehiscence and evisceration."
    ],
    assessment: [
      { type: "mcq", q: "The primary purpose of keeping a client NPO before surgery is to:", options: ["Prevent aspiration of stomach contents during anaesthesia", "Reduce cost", "Speed wound healing", "Prevent infection"], answer: 0, rationale: "Fasting empties the stomach, reducing the risk of aspiration under anaesthesia." },
      { type: "mcq", q: "The nurse's role regarding informed surgical consent is to:", options: ["Explain the surgical procedure in detail", "Decide whether surgery is needed", "Witness the signature and confirm understanding", "Sign on the client's behalf"], answer: 2, rationale: "The surgeon explains the procedure; the nurse witnesses consent and verifies understanding." },
      { type: "mcq", q: "The IMMEDIATE priority when receiving a client in the PACU is:", options: ["Pain assessment", "Checking the dressing", "Offering oral fluids", "A patent airway and breathing"], answer: 3, rationale: "Airway and breathing (ABC) take first priority in the immediate post-anaesthetic period." },
      { type: "mcq", q: "The scrub nurse's main responsibility is to:", options: ["Document the procedure and fetch supplies", "Maintain the sterile field and pass instruments", "Administer anaesthesia", "Monitor the recovery room"], answer: 1, rationale: "The scrub nurse works within the sterile field, handling instruments and counts." },
      { type: "mcq", q: "During the 'Time Out' of the surgical safety checklist, the team confirms:", options: ["Only the instrument count", "Discharge plans", "Patient identity, correct site and procedure before incision", "The final specimen"], answer: 2, rationale: "Time Out (before incision) verifies correct patient, site and procedure." },
      { type: "mcq", q: "To prevent post-operative atelectasis and pneumonia, the nurse should encourage:", options: ["Deep breathing, coughing, spirometry and early ambulation", "Prolonged bed rest and shallow breathing", "Fluid restriction", "Continuous supine positioning"], answer: 0, rationale: "Pulmonary hygiene and early mobility re-expand alveoli and clear secretions." },
      { type: "mcq", q: "If bowel loops protrude through a separated abdominal wound (evisceration), the nurse should first:", options: ["Push the organs back inside", "Give oral fluids", "Ambulate the patient", "Cover with a sterile saline-soaked dressing and notify the surgeon"], answer: 3, rationale: "Never replace viscera; cover with moist sterile gauze, position supine with knees flexed, and call the surgeon." },
      { type: "mcq", q: "A client who received spinal anaesthesia is best described as having:", options: ["Loss of consciousness", "Loss of sensation in a body region while awake", "Numbness of a small local area only", "No effect on sensation"], answer: 1, rationale: "Regional (spinal) anaesthesia blocks sensation in a region while the client stays conscious." },
      { type: "mcq", q: "Which measure best prevents deep vein thrombosis after surgery?", options: ["Strict prolonged bed rest", "Withholding all fluids", "Early ambulation, leg exercises and compression stockings", "Keeping the legs dependent and still"], answer: 2, rationale: "Movement and compression promote venous return and prevent stasis/DVT." },
      { type: "mcq", q: "Hair at the surgical site, when removal is necessary, should be:", options: ["Clipped just before surgery", "Shaved with a razor the night before", "Left untouched always", "Waxed"], answer: 0, rationale: "Clipping immediately before surgery causes fewer micro-abrasions and lower infection risk than razor shaving." }
      , { type: "fill", q: "Separation of the layers of a surgical wound is called wound ____.", accept: ["dehiscence"], rationale: "Dehiscence is partial or complete separation of wound edges; evisceration is protrusion of viscera." }
      , { type: "fill", q: "The phase of perioperative care from the operating table until admission to recovery is the ____ phase.", accept: ["intra-operative", "intraoperative"], rationale: "The intra-operative phase spans the surgery itself." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "msn-07-shock",
    unit: "Unit 1 · Foundations of Medical-Surgical Nursing",
    title: "Shock and Its Management",
    readMinutes: 25,
    summary: "Definition and pathophysiology of shock; the classification into hypovolaemic, cardiogenic, distributive (septic, anaphylactic, neurogenic) and obstructive types; the three progressive stages; clinical features; investigations; and the emergency medical and nursing management of the client in shock.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Shock is a life-threatening state of acute circulatory failure in which tissue perfusion is inadequate to meet cellular oxygen and nutrient demands. The result is cellular hypoxia, a shift to anaerobic metabolism, lactic acidosis and, if uncorrected, multi-organ failure and death." },
      { h: "Basic pathophysiology", p: "Adequate perfusion depends on three components: an effective pump (heart), sufficient fluid volume (blood), and intact vessels with normal tone. Failure of any one lowers cardiac output and/or blood pressure, reducing oxygen delivery. Compensatory mechanisms (sympathetic activation, RAAS, ADH) initially maintain perfusion, but if the cause is not corrected these fail and shock progresses." },
      { h: "Classification of shock", figure: {
        caption: "Four main categories of shock by underlying mechanism.",
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of shock"><g font-family="sans-serif"><rect x="200" y="10" width="160" height="40" rx="9" fill="#0F4C3A"/><text x="280" y="35" text-anchor="middle" font-size="14" font-weight="700" fill="#F0FDF4">SHOCK</text><rect x="10" y="90" width="120" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="70" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Hypovolaemic</text><text x="70" y="130" text-anchor="middle" font-size="9" fill="#15803D">fluid/blood loss</text><rect x="150" y="90" width="120" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="210" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Cardiogenic</text><text x="210" y="130" text-anchor="middle" font-size="9" fill="#15803D">pump failure</text><rect x="290" y="90" width="120" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="350" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Distributive</text><text x="350" y="130" text-anchor="middle" font-size="9" fill="#15803D">vasodilation</text><rect x="430" y="90" width="120" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="490" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Obstructive</text><text x="490" y="130" text-anchor="middle" font-size="9" fill="#15803D">blocked flow</text><text x="350" y="180" text-anchor="middle" font-size="10" fill="#15803D">Distributive = septic · anaphylactic · neurogenic</text></g><line x1="240" y1="50" x2="90" y2="88" stroke="#22C55E" stroke-width="2"/><line x1="270" y1="50" x2="215" y2="88" stroke="#22C55E" stroke-width="2"/><line x1="290" y1="50" x2="345" y2="88" stroke="#22C55E" stroke-width="2"/><line x1="320" y1="50" x2="470" y2="88" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Hypovolaemic shock", p: "The most common type — caused by loss of intravascular volume (>15-20%): haemorrhage, severe burns, vomiting/diarrhoea, dehydration. Reduced venous return lowers cardiac output. Priority management: stop the loss and restore volume with IV isotonic fluids and blood." },
      { h: "Cardiogenic shock", p: "The heart fails to pump effectively — myocardial infarction, arrhythmias, cardiomyopathy, valve failure. Cardiac output falls despite adequate volume; the patient may be fluid-overloaded (pulmonary oedema). Management targets the cardiac cause: inotropes, oxygen, careful fluids, and treating the underlying MI/arrhythmia." },
      { h: "Distributive shock", list: [
        "Septic shock — overwhelming infection triggers widespread vasodilation and capillary leak; give broad-spectrum antibiotics within the first hour, fluids and vasopressors.",
        "Anaphylactic shock — severe IgE allergic reaction; treat with adrenaline (epinephrine) IM, oxygen, antihistamines and steroids.",
        "Neurogenic shock — loss of sympathetic tone (e.g. spinal cord injury) causes vasodilation and bradycardia; treat with fluids, vasopressors and atropine for bradycardia."
      ] },
      { h: "Obstructive shock", p: "Physical obstruction to blood flow — massive pulmonary embolism, cardiac tamponade, tension pneumothorax. Cardiac output drops despite a normal heart and volume. Management is relief of the obstruction (e.g. needle decompression, pericardiocentesis, thrombolysis)." },
      { h: "Stages of shock", list: [
        "Compensatory (Stage 1) — BP maintained; tachycardia, cool skin, mild anxiety, decreased urine output. Reversible if treated.",
        "Progressive (Stage 2) — compensation fails: hypotension, tachycardia, rapid shallow breathing, cold clammy skin, confusion, oliguria, metabolic acidosis.",
        "Irreversible / refractory (Stage 3) — profound hypotension, multi-organ failure; death despite treatment."
      ] },
      { h: "Clinical features (general)", list: [
        "Cardiovascular — hypotension, tachycardia, weak thready pulse, narrowed pulse pressure.",
        "Skin — cold, pale, clammy (warm/flushed early in septic and neurogenic).",
        "Neurological — restlessness, anxiety progressing to confusion and unconsciousness.",
        "Renal — oliguria (<30 mL/h), a sensitive early sign.",
        "Respiratory — rapid, shallow breathing; later respiratory distress."
      ] },
      { h: "Investigations", list: [
        "Vital signs, continuous ECG and pulse oximetry; central venous pressure.",
        "Blood — CBC, group & cross-match, lactate (raised), ABG, electrolytes, renal/liver function, blood cultures (sepsis).",
        "Hourly urine output via catheter; imaging to find the cause (echo, chest X-ray, CT)."
      ] },
      { h: "Emergency medical management", list: [
        "Ensure airway, high-flow oxygen and ventilatory support as needed.",
        "Establish two large-bore IV cannulae; give fluids (isotonic/blood) except in cardiogenic overload.",
        "Vasopressors/inotropes (noradrenaline, dopamine, dobutamine) if fluids insufficient.",
        "Treat the cause: control haemorrhage, antibiotics for sepsis, adrenaline for anaphylaxis, relieve obstruction."
      ] },
      { h: "Nursing management", list: [
        "Position: usually supine with legs slightly elevated (modified Trendelenburg) to aid venous return; not in cardiogenic pulmonary oedema.",
        "Administer oxygen, IV fluids and drugs as prescribed; monitor response continuously.",
        "Monitor vital signs, ECG, SpO2, level of consciousness and hourly urine output.",
        "Keep the client warm, calm and reassured; maintain accurate intake-output records.",
        "Anticipate deterioration; have emergency and resuscitation equipment ready."
      ] },
      { h: "Clinical relevance", p: "Shock is a true emergency where outcome depends on the golden hour. Nurses often detect the earliest compensatory signs — a rising pulse, falling urine output, restlessness and cool skin — before the blood pressure falls. Early recognition and rapid intervention determine survival." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define shock and explain its basic pathophysiology.",
      "Classify shock and describe the distinctive cause and management of each type.",
      "Describe the three stages of shock with their clinical features.",
      "Outline the emergency medical management of hypovolaemic shock.",
      "Discuss the nursing management of a client in shock."
    ],
    assessment: [
      { type: "mcq", q: "The most common type of shock in trauma is:", options: ["Hypovolaemic", "Cardiogenic", "Neurogenic", "Obstructive"], answer: 0, rationale: "Blood/fluid loss in trauma most often causes hypovolaemic shock." },
      { type: "mcq", q: "An early, sensitive sign of shock that the nurse should monitor closely is:", options: ["Bounding pulse", "Warm dry skin", "Decreasing urine output (oliguria)", "Rising blood pressure"], answer: 2, rationale: "Falling renal perfusion causes oliguria, an early and sensitive sign of shock." },
      { type: "mcq", q: "The first-line drug for anaphylactic shock is:", options: ["Furosemide", "Digoxin", "Insulin", "Adrenaline (epinephrine)"], answer: 3, rationale: "IM adrenaline reverses bronchospasm and vasodilation in anaphylaxis and is given immediately." },
      { type: "mcq", q: "IV fluid boluses should be given cautiously and may be harmful in which type of shock?", options: ["Hypovolaemic", "Cardiogenic", "Septic", "Neurogenic"], answer: 1, rationale: "In cardiogenic shock the heart cannot handle extra volume, risking pulmonary oedema." },
      { type: "mcq", q: "In the compensatory stage of shock, blood pressure is typically:", options: ["Very low", "Undetectable", "Maintained near normal with tachycardia", "Elevated with bradycardia"], answer: 2, rationale: "Compensation (sympathetic activation) keeps BP near normal while the pulse rises." },
      { type: "mcq", q: "Neurogenic shock characteristically presents with:", options: ["Hypotension with bradycardia", "Tachycardia and pallor", "Bounding pulse", "Hypertension"], answer: 0, rationale: "Loss of sympathetic tone causes vasodilation and unopposed vagal bradycardia." },
      { type: "mcq", q: "For septic shock, the Surviving Sepsis principle is to give broad-spectrum antibiotics:", options: ["After 24 hours", "Only if fever persists", "Never with fluids", "Within the first hour after cultures"], answer: 3, rationale: "Early antibiotics (within 1 hour) after obtaining cultures improve survival in sepsis." },
      { type: "mcq", q: "The recommended positioning for most types of shock (not cardiogenic) is:", options: ["High Fowler's", "Supine with legs slightly elevated", "Prone", "Left lateral only"], answer: 1, rationale: "Modified Trendelenburg (legs elevated) promotes venous return; avoided in cardiogenic pulmonary oedema." },
      { type: "mcq", q: "A tension pneumothorax obstructing venous return causes which category of shock?", options: ["Distributive", "Cardiogenic", "Obstructive", "Hypovolaemic"], answer: 2, rationale: "Physical obstruction to flow (tamponade, PE, tension pneumothorax) causes obstructive shock." },
      { type: "mcq", q: "A raised serum lactate in a shocked patient indicates:", options: ["Anaerobic metabolism from tissue hypoxia", "Improved perfusion", "Alkalosis", "Normal oxygen delivery"], answer: 0, rationale: "Inadequate perfusion forces anaerobic metabolism, producing lactate and metabolic acidosis." }
      , { type: "fill", q: "Shock caused by pump failure of the heart is called ____ shock.", accept: ["cardiogenic"], rationale: "Cardiogenic shock results from the heart's failure to pump effectively." }
      , { type: "fill", q: "A urine output below ____ mL/hour signals inadequate renal perfusion in shock.", accept: ["30"], rationale: "Oliguria (<30 mL/h) reflects reduced kidney perfusion." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "msn-08-wound-care",
    unit: "Unit 1 · Foundations of Medical-Surgical Nursing",
    title: "Wound Care & Pressure Injury Prevention",
    readMinutes: 24,
    summary: "Classification of wounds; principles of wound assessment and the phases of healing; factors affecting healing; dressing types and aseptic wound care; drains; the pathophysiology, staging and prevention of pressure injuries; and evidence-based nursing management of surgical and chronic wounds.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a wound?", p: "A wound is any break in the continuity or integrity of skin or underlying tissue caused by physical, chemical, thermal or mechanical injury or by surgery. Wound care aims to promote healing, prevent infection, protect the surrounding skin and restore function." },
      { h: "Classification of wounds", list: [
        "By skin integrity — closed (contusion, haematoma) vs open (incision, laceration, abrasion, puncture, avulsion).",
        "By cleanliness (surgical) — clean, clean-contaminated, contaminated, dirty/infected.",
        "By duration — acute (heal predictably) vs chronic (fail to heal in the expected time, e.g. pressure, venous, diabetic ulcers).",
        "By depth — superficial, partial-thickness (into dermis), full-thickness (through dermis to fat/muscle/bone)."
      ] },
      { h: "Phases of wound healing (recap)", list: [
        "Haemostasis — clot formation and vasoconstriction.",
        "Inflammatory (0-4 days) — cleansing by neutrophils/macrophages.",
        "Proliferative (4-21 days) — granulation, angiogenesis, epithelialisation.",
        "Maturation (21 days-2 years) — collagen remodelling and scar strengthening."
      ] },
      { h: "Factors affecting wound healing", list: [
        "Systemic — age, nutrition (protein, vitamin C, zinc), diabetes, anaemia, obesity, immunosuppression, steroids, smoking.",
        "Local — infection, poor blood supply/oxygenation, foreign body, pressure, excessive moisture or dryness, repeated trauma.",
        "Optimising these factors (glycaemic control, nutrition, perfusion) is central to healing."
      ] },
      { h: "Wound assessment", list: [
        "Location, size (length × width × depth) and shape; measure and track.",
        "Wound bed — granulation (red/healthy), slough (yellow), eschar (black necrotic), epithelialisation.",
        "Exudate — amount, colour, odour (purulent, foul odour suggests infection).",
        "Surrounding skin — redness, warmth, maceration, induration.",
        "Signs of infection — increasing pain, erythema, heat, swelling, purulent discharge, fever, raised WBC."
      ] },
      { h: "Principles of wound dressing", list: [
        "Use aseptic (sterile) technique for open/surgical wounds.",
        "Cleanse from the least contaminated to the most contaminated area (clean to dirty).",
        "Maintain a moist wound environment to promote healing while managing exudate.",
        "Protect the wound and peri-wound skin; avoid unnecessary trauma on removal.",
        "Assess and document the wound at each dressing change."
      ] },
      { h: "Types of dressings", list: [
        "Gauze — simple, absorbent; may adhere and disturb the bed.",
        "Transparent film — for shallow, low-exudate wounds; allows observation.",
        "Hydrocolloid — for light-moderate exudate; keeps a moist environment.",
        "Hydrogel — hydrates dry/necrotic wounds and aids debridement.",
        "Alginate/foam — highly absorbent for heavy exudate.",
        "Antimicrobial (silver, iodine) — for infected wounds; NPWT (vacuum) for complex wounds."
      ] },
      { h: "Wound drains", p: "Drains remove blood, serum or pus and prevent collections. Passive drains (e.g. Penrose) drain by gravity; active/closed drains (e.g. Redivac, Jackson-Pratt) use suction. The nurse maintains patency, measures and records the output, observes colour/character, and uses asepsis to prevent infection." },
      { h: "Pressure injury (pressure ulcer)", p: "A pressure injury is localised damage to skin and underlying tissue, usually over a bony prominence, from sustained pressure, shear and friction that reduce blood flow and cause ischaemia and tissue death. Common sites: sacrum, heels, hips, elbows, occiput, ischial tuberosities.", figure: {
        caption: "NPUAP/EPUAP staging of pressure injuries.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pressure injury stages"><g font-family="sans-serif"><rect x="10" y="30" width="130" height="140" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Stage I</text><text x="75" y="90" text-anchor="middle" font-size="10" fill="#15803D">Non-blanchable</text><text x="75" y="106" text-anchor="middle" font-size="10" fill="#15803D">redness, intact</text><text x="75" y="122" text-anchor="middle" font-size="10" fill="#15803D">skin</text><rect x="150" y="30" width="130" height="140" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="215" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Stage II</text><text x="215" y="90" text-anchor="middle" font-size="10" fill="#15803D">Partial-thickness</text><text x="215" y="106" text-anchor="middle" font-size="10" fill="#15803D">loss; blister/</text><text x="215" y="122" text-anchor="middle" font-size="10" fill="#15803D">shallow ulcer</text><rect x="290" y="30" width="130" height="140" rx="8" fill="#22C55E" stroke="#15803D" stroke-width="2"/><text x="355" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#F0FDF4">Stage III</text><text x="355" y="90" text-anchor="middle" font-size="10" fill="#F0FDF4">Full-thickness;</text><text x="355" y="106" text-anchor="middle" font-size="10" fill="#F0FDF4">fat visible</text><rect x="430" y="30" width="120" height="140" rx="8" fill="#0F4C3A" stroke="#15803D" stroke-width="2"/><text x="490" y="52" text-anchor="middle" font-size="13" font-weight="700" fill="#F0FDF4">Stage IV</text><text x="490" y="90" text-anchor="middle" font-size="10" fill="#DCFCE7">Muscle, bone</text><text x="490" y="106" text-anchor="middle" font-size="10" fill="#DCFCE7">or tendon</text><text x="490" y="122" text-anchor="middle" font-size="10" fill="#DCFCE7">exposed</text></g></svg>'
      } },
      { h: "Pressure injury prevention", list: [
        "Risk assessment on admission and regularly (e.g. Braden scale).",
        "Reposition at least every 2 hours; use the 30-degree tilt; heel offloading.",
        "Pressure-redistributing mattresses and cushions.",
        "Keep skin clean and dry; manage incontinence; avoid friction and shear.",
        "Optimise nutrition and hydration; inspect skin, especially bony prominences."
      ] },
      { h: "Nursing management of wounds", list: [
        "Assess and document the wound systematically at each dressing change.",
        "Perform aseptic dressing with appropriate dressing type for the wound and exudate.",
        "Recognise and report signs of infection early; obtain swabs if indicated.",
        "Support healing with adequate protein, vitamin C, zinc, fluids and glycaemic control.",
        "Educate the client and family on wound care, nutrition and warning signs at discharge."
      ] },
      { h: "Clinical relevance", p: "Pressure injuries and surgical-site infections are largely preventable adverse events and are used internationally as indicators of nursing care quality. Systematic risk assessment, repositioning, aseptic wound care and nutrition directly reduce their incidence and length of stay." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Classify wounds and describe the phases of wound healing.",
      "Discuss the systemic and local factors that affect wound healing.",
      "Describe the principles and aseptic technique of wound dressing.",
      "Explain the staging of pressure injuries and the measures to prevent them.",
      "Outline the nursing management of a client with a chronic non-healing wound."
    ],
    assessment: [
      { type: "mcq", q: "When cleaning a surgical wound, the nurse should cleanse:", options: ["From least contaminated (clean) to most contaminated", "From most contaminated to least contaminated", "In a random pattern", "Only around the edges"], answer: 0, rationale: "Cleansing clean-to-dirty prevents carrying microorganisms into the incision." },
      { type: "mcq", q: "A pressure injury with intact skin showing non-blanchable redness is classified as:", options: ["Stage II", "Stage III", "Stage I", "Stage IV"], answer: 2, rationale: "Stage I is non-blanchable erythema of intact skin." },
      { type: "mcq", q: "The single most important nursing measure to prevent pressure injuries is:", options: ["Applying powder to the skin", "Restricting fluids", "Massaging reddened bony prominences vigorously", "Repositioning the client regularly (at least 2-hourly)"], answer: 3, rationale: "Frequent repositioning relieves sustained pressure and prevents ischaemia; massaging reddened areas is discouraged." },
      { type: "mcq", q: "Black necrotic tissue in a wound bed is called:", options: ["Granulation", "Eschar", "Epithelium", "Slough"], answer: 1, rationale: "Eschar is dry black necrotic tissue; slough is soft yellow devitalised tissue." },
      { type: "mcq", q: "Which nutrient is especially important for collagen synthesis and wound healing?", options: ["Vitamin K", "Calcium", "Vitamin C", "Iron only"], answer: 2, rationale: "Vitamin C is essential for collagen formation; protein and zinc also support healing." },
      { type: "mcq", q: "A moist wound environment is promoted because it:", options: ["Speeds epithelialisation and healing", "Increases infection", "Dries the wound bed", "Prevents granulation"], answer: 0, rationale: "Moist wound healing supports cell migration and faster epithelialisation." },
      { type: "mcq", q: "A closed suction drain (e.g. Jackson-Pratt/Redivac) works by:", options: ["Gravity only", "Capillary action of gauze", "Osmosis", "Negative pressure (suction)"], answer: 3, rationale: "Active/closed drains use suction to remove fluid; Penrose is a passive gravity drain." },
      { type: "mcq", q: "A pressure injury exposing muscle or bone is:", options: ["Stage I", "Stage IV", "Stage II", "Stage III"], answer: 1, rationale: "Stage IV involves full-thickness loss with exposed muscle, tendon or bone." },
      { type: "mcq", q: "Which client is at HIGHEST risk of impaired wound healing?", options: ["A well-nourished young adult", "A client on a balanced diet", "A poorly controlled diabetic who smokes", "A hydrated, mobile client"], answer: 2, rationale: "Hyperglycaemia and smoking impair perfusion and immunity, delaying healing." },
      { type: "mcq", q: "The tool commonly used to assess pressure-injury risk is the:", options: ["Braden scale", "Glasgow Coma Scale", "Aldrete score", "APGAR score"], answer: 0, rationale: "The Braden scale assesses risk factors for pressure injury." }
      , { type: "fill", q: "The red, healthy tissue that fills an open wound during healing is called ____ tissue.", accept: ["granulation"], rationale: "Granulation tissue is new connective tissue and capillaries in the proliferative phase." }
      , { type: "fill", q: "Pressure injuries most commonly develop over ____ prominences.", accept: ["bony", "bone"], rationale: "Tissue over bony prominences (sacrum, heels) is most vulnerable to pressure damage." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "msn-09-respiratory",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Respiratory System Disorders",
    readMinutes: 27,
    summary: "Assessment of the respiratory client; pathophysiology, features, investigations, medical and nursing management of major disorders — COPD (chronic bronchitis, emphysema), bronchial asthma, bronchiectasis, pneumonia, pulmonary tuberculosis and lung abscess; oxygen therapy, chest physiotherapy, chest drainage and thoracic surgery care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Respiratory assessment", p: "Assess rate, depth, rhythm and effort of breathing; use of accessory muscles; cough (dry/productive) and sputum (colour, amount, blood); dyspnoea, orthopnoea; cyanosis; chest shape; and breath sounds (crackles, wheeze, bronchial breathing). Normal SpO2 is 95-100%; normal respiratory rate 12-20/min." },
      { h: "Key investigations", list: [
        "Chest X-ray and CT thorax.",
        "Sputum examination — Gram stain, culture, AFB (for TB), cytology.",
        "Pulmonary function tests (spirometry) — FEV1/FVC ratio.",
        "Arterial blood gases — oxygenation and acid-base.",
        "Pulse oximetry, bronchoscopy, Mantoux/tuberculin test, GeneXpert for TB."
      ] },
      { h: "Chronic Obstructive Pulmonary Disease (COPD)", p: "COPD is a chronic, progressive, largely irreversible airflow limitation, mainly caused by smoking. It encompasses chronic bronchitis and emphysema, which usually coexist. Diagnosis is confirmed by a post-bronchodilator FEV1/FVC ratio <0.70 on spirometry." },
      { h: "Chronic bronchitis vs emphysema", figure: {
        caption: "Comparing the two components of COPD.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bronchitis vs emphysema"><g font-family="sans-serif"><rect x="10" y="15" width="540" height="170" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><line x1="200" y1="15" x2="200" y2="185" stroke="#15803D" stroke-width="1.5"/><line x1="10" y1="50" x2="550" y2="50" stroke="#15803D" stroke-width="1.5"/><text x="105" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Chronic bronchitis</text><text x="375" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Emphysema</text><g font-size="10.5" fill="#0F4C3A"><text x="20" y="75">"Blue bloater"</text><text x="210" y="75">"Pink puffer"</text><text x="20" y="100">Productive cough &gt;3 mo/yr</text><text x="210" y="100">Alveolar wall destruction</text><text x="20" y="125">Excess mucus, cyanosis</text><text x="210" y="125">Loss of elastic recoil</text><text x="20" y="150">Right heart failure early</text><text x="210" y="150">Barrel chest, dyspnoea</text><text x="20" y="172">Hypoxia + CO2 retention</text><text x="210" y="172">Air trapping, pursed lips</text></g></g></svg>'
      } },
      { h: "COPD management", list: [
        "Smoking cessation — the single most effective intervention to slow progression.",
        "Bronchodilators (beta-2 agonists, anticholinergics), inhaled corticosteroids for exacerbations.",
        "Controlled oxygen therapy — low flow (24-28%) to avoid removing the hypoxic drive; target SpO2 88-92%.",
        "Pulmonary rehabilitation, breathing exercises (pursed-lip, diaphragmatic), vaccination.",
        "Nursing: position upright, teach effective coughing, energy conservation, monitor for respiratory failure."
      ] },
      { h: "Bronchial asthma", p: "Asthma is a chronic inflammatory airway disorder with reversible bronchoconstriction, airway hyper-responsiveness and mucus, triggered by allergens, exercise, cold, infection or drugs. Features: recurrent wheeze, cough, chest tightness and dyspnoea, worse at night. Severe attack (status asthmaticus) is life-threatening." },
      { h: "Asthma management", list: [
        "Relievers — short-acting beta-2 agonists (salbutamol) for acute bronchospasm.",
        "Controllers — inhaled corticosteroids ± long-acting beta-2 agonists for prevention.",
        "Identify and avoid triggers; correct inhaler technique; a written action plan.",
        "Acute: oxygen, nebulised bronchodilators, systemic steroids; monitor peak flow and SpO2.",
        "Nursing: calm reassurance, upright position, monitor for a silent chest (ominous sign)."
      ] },
      { h: "Bronchiectasis", p: "Bronchiectasis is permanent, abnormal dilation of bronchi from chronic infection and inflammation that destroys the airway wall. Features: chronic cough with copious foul, purulent sputum, haemoptysis and recurrent infections. Management: airway clearance (postural drainage, physiotherapy), antibiotics for exacerbations, hydration and bronchodilators." },
      { h: "Pneumonia", p: "Pneumonia is acute inflammation of the lung parenchyma, usually infective (bacterial — commonly Streptococcus pneumoniae, viral, or aspiration). Features: fever, chills, productive cough (rusty sputum), pleuritic chest pain, dyspnoea, tachypnoea, crackles and bronchial breathing over consolidation. Management: appropriate antibiotics, oxygen, fluids, antipyretics, chest physiotherapy and deep breathing." },
      { h: "Pulmonary tuberculosis (TB)", p: "TB is a chronic infection by Mycobacterium tuberculosis, spread by airborne droplets. Features: chronic cough >2-3 weeks, haemoptysis, evening fever, night sweats, weight loss and fatigue. Diagnosis: sputum for AFB, GeneXpert, chest X-ray, tuberculin test. Treatment: DOTS — a combination of first-line drugs (isoniazid, rifampicin, pyrazinamide, ethambutol) for months; adherence is essential to prevent resistance." },
      { h: "TB nursing responsibilities", list: [
        "Airborne (respiratory) isolation; N95 mask, negative-pressure room, cough etiquette.",
        "Ensure and supervise drug adherence (DOTS); monitor for side-effects (hepatotoxicity, optic/peripheral neuropathy).",
        "Educate on infection prevention, sputum disposal, nutrition and contact screening.",
        "Emphasise completing the full course even after symptoms improve."
      ] },
      { h: "Lung abscess", p: "A lung abscess is a localised area of pus and necrosis in the lung, often from aspiration or pneumonia. Features: foul-smelling purulent sputum, fever, cough, weight loss. Management: prolonged antibiotics, postural drainage, and occasionally surgical drainage." },
      { h: "Oxygen therapy & chest drainage", list: [
        "Delivery devices — nasal cannula (24-40%), simple mask, Venturi mask (precise low flow for COPD), non-rebreather (high concentration).",
        "Chest drain (ICD/underwater seal) removes air/fluid from the pleural space; keep the drain below chest level, check for swinging/bubbling, never clamp routinely, and report sudden cessation of swinging or excessive bleeding.",
        "Thoracic surgery care: pain control, deep breathing, arm exercises, monitor chest drain and for complications."
      ] },
      { h: "Nursing management (general respiratory)", list: [
        "Position upright (high Fowler's or orthopnoeic) to ease breathing.",
        "Administer oxygen and medications as prescribed; monitor SpO2, ABG and respiratory rate.",
        "Promote airway clearance — hydration, humidification, coughing, chest physiotherapy, suction.",
        "Encourage breathing exercises and gradual activity; provide rest and nutrition.",
        "Educate on smoking cessation, inhaler technique, adherence and infection prevention."
      ] },
      { h: "Clinical relevance", p: "Respiratory disorders are leading causes of morbidity in Bangladesh (TB, COPD, pneumonia). Skilled nursing — correct oxygen delivery, airway clearance, infection control and adherence support — prevents respiratory failure and interrupts TB transmission." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Compare chronic bronchitis and emphysema in COPD, including pathophysiology and features.",
      "Describe the pathophysiology and acute management of bronchial asthma.",
      "Discuss the clinical features, diagnosis and DOTS treatment of pulmonary tuberculosis.",
      "Explain the nursing responsibilities in caring for a client with an underwater-seal chest drain.",
      "Outline the nursing management of a client with pneumonia."
    ],
    assessment: [
      { type: "mcq", q: "COPD is confirmed by a post-bronchodilator FEV1/FVC ratio that is:", options: ["Less than 0.70", "Greater than 0.90", "Exactly 1.0", "Above 0.80"], answer: 0, rationale: "A ratio <0.70 indicates persistent airflow limitation characteristic of COPD." },
      { type: "mcq", q: "When giving oxygen to a client with severe COPD, the nurse should:", options: ["Give high-flow 100% oxygen", "Withhold all oxygen", "Give controlled low-flow oxygen targeting SpO2 88-92%", "Give oxygen only during sleep"], answer: 2, rationale: "High oxygen can suppress the hypoxic drive; controlled low-flow with target 88-92% is safer." },
      { type: "mcq", q: "The FIRST-line reliever for an acute asthma attack is:", options: ["An inhaled corticosteroid", "An oral antibiotic", "A long-acting bronchodilator only", "A short-acting beta-2 agonist (salbutamol)"], answer: 3, rationale: "Salbutamol rapidly relieves bronchospasm in acute asthma; ICS is a preventer." },
      { type: "mcq", q: "In a severe asthma attack, a suddenly 'silent chest' means:", options: ["The attack has resolved", "Severe airway obstruction with little air movement — an emergency", "The client is faking", "Normal breathing"], answer: 1, rationale: "A silent chest indicates critically reduced airflow and impending respiratory failure." },
      { type: "mcq", q: "The classic sputum of a client with lobar pneumococcal pneumonia is described as:", options: ["Frothy pink", "Clear and watery", "Rusty coloured", "Green and odourless"], answer: 2, rationale: "Rusty (blood-tinged) sputum is characteristic of pneumococcal pneumonia." },
      { type: "mcq", q: "Which precaution is essential for a client with active pulmonary tuberculosis?", options: ["Airborne (respiratory) isolation with an N95 mask", "Contact precautions only", "No precautions needed", "Droplet precautions with a surgical mask only"], answer: 0, rationale: "TB spreads by airborne droplet nuclei, requiring airborne isolation and N95 respirators." },
      { type: "mcq", q: "The nurse teaches a TB client that the MOST important factor for cure and preventing resistance is:", options: ["Bed rest", "Drinking extra fluids", "Isolation alone", "Completing the full drug course under DOTS"], answer: 3, rationale: "Adherence to the complete multidrug regimen (DOTS) cures TB and prevents drug resistance." },
      { type: "mcq", q: "When caring for an underwater-seal chest drain, the nurse should:", options: ["Keep the drainage bottle above chest level", "Keep the bottle below chest level and observe for swinging/bubbling", "Clamp the tube routinely for hours", "Empty the seal chamber each shift"], answer: 1, rationale: "The drain stays below the chest to prevent backflow; swinging with respiration confirms patency." },
      { type: "mcq", q: "Pursed-lip breathing helps the COPD client by:", options: ["Increasing air trapping", "Lowering oxygen levels", "Preventing airway collapse and improving exhalation of trapped air", "Causing hyperventilation"], answer: 2, rationale: "Pursed-lip breathing keeps airways open during expiration, reducing air trapping and dyspnoea." },
      { type: "mcq", q: "Copious foul-smelling purulent sputum and recurrent infections are characteristic of:", options: ["Bronchiectasis", "Asthma", "Simple viral cold", "Pulmonary embolism"], answer: 0, rationale: "Permanent bronchial dilation in bronchiectasis produces large volumes of foul purulent sputum." }
      , { type: "fill", q: "The internationally recommended supervised treatment strategy for tuberculosis is abbreviated ____.", accept: ["DOTS"], rationale: "DOTS = Directly Observed Treatment, Short-course." }
      , { type: "fill", q: "The reliever drug salbutamol belongs to the class of short-acting ____ agonists.", accept: ["beta-2", "beta 2", "beta2", "beta-agonist", "beta"], rationale: "Salbutamol is a short-acting beta-2 agonist bronchodilator." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "msn-10-cardiovascular",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Cardiovascular System Disorders",
    readMinutes: 27,
    summary: "Cardiovascular assessment; hypertension; coronary artery disease, angina and myocardial infarction; heart failure; rheumatic heart disease and valvular disorders; the pathophysiology, investigations, medical/surgical management and evidence-based nursing care of the cardiac client.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Cardiovascular assessment", p: "Assess chest pain (using PQRST), dyspnoea, orthopnoea, palpitations, syncope, oedema and fatigue. Examine pulse (rate, rhythm, volume), blood pressure in both arms, jugular venous pressure, apex beat, heart sounds (S1, S2, added S3/S4, murmurs) and peripheral perfusion." },
      { h: "Key investigations", list: [
        "ECG — rhythm, ischaemia, infarction.",
        "Cardiac biomarkers — troponin (most specific for MI), CK-MB.",
        "Echocardiography — structure, valves, ejection fraction.",
        "Chest X-ray, lipid profile, exercise/stress test, coronary angiography.",
        "Blood pressure monitoring; electrolytes and renal function."
      ] },
      { h: "Hypertension", p: "Hypertension is persistently raised arterial pressure ≥140/90 mmHg. Most cases are primary (essential) with no single cause; secondary hypertension has an identifiable cause (renal, endocrine). Often symptomless ('the silent killer') until it damages heart, brain, kidney and eyes. Complications: stroke, MI, heart failure, renal failure, retinopathy." },
      { h: "Hypertension management", list: [
        "Lifestyle — weight loss, low-salt (<5-6 g/day) DASH diet, exercise, reduce alcohol, stop smoking, manage stress.",
        "Drugs — diuretics, ACE inhibitors/ARBs, calcium-channel blockers, beta-blockers.",
        "Nursing: accurate BP measurement, adherence support, teach lifestyle change and side-effects, monitor for target-organ damage."
      ] },
      { h: "Coronary artery disease & angina", p: "Coronary artery disease is narrowing of coronary arteries by atherosclerosis, reducing myocardial blood supply. Angina pectoris is chest pain from reversible myocardial ischaemia — typically crushing central/retrosternal pain radiating to the left arm/jaw, precipitated by exertion and relieved by rest or nitroglycerin. Stable angina is predictable; unstable angina occurs at rest and signals impending infarction." },
      { h: "Myocardial infarction (MI)", p: "MI is irreversible necrosis of heart muscle from prolonged ischaemia when a coronary artery is occluded (usually a ruptured atherosclerotic plaque with thrombus). Features: severe, prolonged crushing chest pain not relieved by rest/nitrates, radiating to arm/jaw, with sweating, nausea, dyspnoea and anxiety, sometimes 'silent' in diabetics and the elderly." },
      { h: "MI — investigations and management", figure: {
        caption: "Immediate management of acute MI (MONA and reperfusion).",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MI management"><defs><marker id="msnArr10" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif"><rect x="15" y="60" width="110" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="70" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Oxygen</text><text x="70" y="101" text-anchor="middle" font-size="9" fill="#15803D">if hypoxic</text><rect x="145" y="60" width="110" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="200" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Aspirin</text><text x="200" y="101" text-anchor="middle" font-size="9" fill="#15803D">antiplatelet</text><rect x="275" y="60" width="120" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="335" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Nitrates</text><text x="335" y="101" text-anchor="middle" font-size="9" fill="#15803D">+ Morphine</text><rect x="415" y="60" width="130" height="55" rx="8" fill="#22C55E" stroke="#15803D" stroke-width="2"/><text x="480" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="#F0FDF4">Reperfusion</text><text x="480" y="101" text-anchor="middle" font-size="9" fill="#F0FDF4">PCI / thrombolysis</text></g><line x1="125" y1="87" x2="143" y2="87" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#msnArr10)"/><line x1="255" y1="87" x2="273" y2="87" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#msnArr10)"/><line x1="395" y1="87" x2="413" y2="87" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#msnArr10)"/></svg>'
      } },
      { h: "MI management details", list: [
        "Diagnosis: ECG (ST elevation in STEMI), rising troponin.",
        "Immediate: oxygen if hypoxic, aspirin, nitrates, morphine for pain, antiplatelets/anticoagulation.",
        "Reperfusion: primary PCI (angioplasty/stent) or thrombolysis — 'time is muscle'.",
        "Later: beta-blockers, ACE inhibitors, statins, cardiac rehabilitation.",
        "Nursing: continuous ECG, bed rest initially, relieve pain and anxiety, monitor for arrhythmias and complications."
      ] },
      { h: "Heart failure", p: "Heart failure is the heart's inability to pump enough blood to meet the body's needs. Left-sided failure causes pulmonary congestion (dyspnoea, orthopnoea, paroxysmal nocturnal dyspnoea, crackles, frothy pink sputum). Right-sided failure causes systemic congestion (peripheral oedema, raised JVP, hepatomegaly, ascites). Reduced ejection fraction confirms systolic failure." },
      { h: "Heart failure management", list: [
        "Drugs — diuretics (relieve congestion), ACE inhibitors/ARBs, beta-blockers, digoxin, aldosterone antagonists.",
        "Lifestyle — sodium/fluid restriction, daily weight, activity within tolerance.",
        "Nursing: position upright, oxygen, monitor weight and I/O, restrict fluids/sodium, watch for worsening congestion and digoxin toxicity."
      ] },
      { h: "Rheumatic heart disease & valvular disorders", p: "Rheumatic fever follows a group A streptococcal throat infection; an autoimmune reaction damages heart valves (commonly mitral), causing stenosis or regurgitation. Features: murmur, dyspnoea, fatigue, palpitations. Prevention is prompt treatment of streptococcal sore throat and long-term prophylactic penicillin. Severe valve disease may require valve repair/replacement." },
      { h: "Nursing management (general cardiac)", list: [
        "Assess and relieve chest pain promptly; monitor ECG, vital signs and oxygenation.",
        "Promote rest, reduce cardiac workload, position for comfort (upright if dyspnoeic).",
        "Administer cardiac drugs safely (check apex/pulse before digoxin and beta-blockers).",
        "Monitor for arrhythmias, heart failure and shock; maintain I/O and daily weight.",
        "Educate on medication adherence, low-salt diet, activity, risk-factor reduction and warning signs."
      ] },
      { h: "Clinical relevance", p: "Cardiovascular disease is the leading cause of death worldwide. Nursing priorities — early recognition of chest pain, rapid reperfusion in MI, adherence and lifestyle support in hypertension and heart failure — directly reduce mortality and readmission." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define hypertension, list its complications and outline its management.",
      "Differentiate stable angina from myocardial infarction in features and management.",
      "Describe the immediate medical and nursing management of a client with acute MI.",
      "Compare left-sided and right-sided heart failure in clinical features.",
      "Explain the link between streptococcal infection and rheumatic heart disease and its prevention."
    ],
    assessment: [
      { type: "mcq", q: "Blood pressure is classified as hypertension in an adult when it is persistently:", options: ["≥140/90 mmHg", "≥120/80 mmHg", "≥100/60 mmHg", "≥90/60 mmHg"], answer: 0, rationale: "Hypertension is diagnosed at sustained readings of 140/90 mmHg or higher." },
      { type: "mcq", q: "The most specific blood marker for myocardial infarction is:", options: ["White cell count", "Blood glucose", "Troponin", "Serum sodium"], answer: 2, rationale: "Troponin is the most cardiac-specific and sensitive biomarker of myocardial necrosis." },
      { type: "mcq", q: "Angina pain differs from myocardial infarction pain mainly in that angina:", options: ["Lasts for hours and is unrelieved by rest", "Always causes cardiac arrest", "Never radiates", "Is relieved by rest or nitroglycerin"], answer: 3, rationale: "Angina reflects reversible ischaemia and is relieved by rest/nitrates; MI pain is prolonged and unrelieved." },
      { type: "mcq", q: "The principle 'time is muscle' in acute MI emphasises:", options: ["Delaying treatment", "Rapid reperfusion to salvage myocardium", "Prolonged bed rest before treatment", "Avoiding all drugs"], answer: 1, rationale: "Early reperfusion (PCI or thrombolysis) limits infarct size — the sooner, the more muscle saved." },
      { type: "mcq", q: "Frothy pink sputum, orthopnoea and crackles indicate:", options: ["Right-sided heart failure", "Angina", "Left-sided heart failure with pulmonary oedema", "Hypertension"], answer: 2, rationale: "Left ventricular failure backs up into the lungs, causing pulmonary congestion/oedema." },
      { type: "mcq", q: "Peripheral oedema, raised JVP and hepatomegaly are features of:", options: ["Right-sided heart failure", "Left-sided heart failure", "Stable angina", "Hypertension crisis"], answer: 0, rationale: "Right-sided failure causes systemic venous congestion." },
      { type: "mcq", q: "Before administering digoxin, the nurse must check the client's:", options: ["Temperature", "Respiratory rate only", "Blood glucose", "Apical pulse for 1 minute"], answer: 3, rationale: "Digoxin slows the heart; hold and report if the apical pulse is below 60/min in adults." },
      { type: "mcq", q: "Rheumatic heart disease most often follows infection with:", options: ["Staphylococcus aureus", "Group A streptococcus (throat)", "Escherichia coli", "Candida"], answer: 1, rationale: "An autoimmune reaction to group A streptococcal pharyngitis damages heart valves." },
      { type: "mcq", q: "A key dietary instruction for both hypertension and heart failure is to:", options: ["Increase salt intake", "Avoid all fluids permanently", "Restrict sodium (salt) intake", "Eat a high-fat diet"], answer: 2, rationale: "Sodium restriction reduces fluid retention and cardiac/vascular workload." },
      { type: "mcq", q: "The priority nursing action for a client reporting sudden crushing chest pain is to:", options: ["Assess pain, obtain an ECG and notify the physician immediately", "Send the client home", "Give a large meal", "Encourage vigorous exercise"], answer: 0, rationale: "Rapid assessment, ECG and alerting the team are critical to diagnose and treat possible MI early." }
      , { type: "fill", q: "Chest pain from reversible myocardial ischaemia relieved by rest is called ____ pectoris.", accept: ["angina"], rationale: "Angina pectoris is transient ischaemic chest pain." }
      , { type: "fill", q: "Hypertension is often called the '____ killer' because it is usually symptomless.", accept: ["silent"], rationale: "Hypertension damages organs silently before symptoms appear." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "msn-11-haematologic",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Haematologic Disorders",
    readMinutes: 25,
    summary: "Blood composition and normal values; the anaemias (iron-deficiency, megaloblastic, aplastic, haemolytic, sickle cell) and thalassaemia; leukaemia; bleeding and coagulation disorders (haemophilia, thrombocytopenia, DIC); blood transfusion and reactions; and the nursing management of haematologic clients.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Blood composition and function", p: "Blood is a connective tissue of plasma (~55%) and cells (~45%): red cells (erythrocytes) carry oxygen via haemoglobin; white cells (leukocytes) defend against infection; and platelets (thrombocytes) aid clotting. Blood transports gases, nutrients, hormones and wastes, regulates temperature and pH, and defends the body." },
      { h: "Normal haematologic values", list: [
        "Haemoglobin — men 13-17 g/dL, women 12-15 g/dL.",
        "Red cell count — 4.5-6.0 million/µL (men), 4.0-5.5 (women).",
        "White cell count — 4,000-11,000/µL.",
        "Platelet count — 150,000-400,000/µL.",
        "Haematocrit (PCV) — 40-54% (men), 36-48% (women)."
      ] },
      { h: "Anaemia — definition and general features", p: "Anaemia is a reduction in haemoglobin, red cell count or haematocrit below normal, reducing oxygen-carrying capacity. General features: pallor, fatigue, weakness, dyspnoea on exertion, tachycardia, palpitations, dizziness and, if severe, angina and heart failure." },
      { h: "Types of anaemia", figure: {
        caption: "Classification of anaemias by cause.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of anaemia"><g font-family="sans-serif"><rect x="200" y="10" width="160" height="38" rx="9" fill="#0F4C3A"/><text x="280" y="34" text-anchor="middle" font-size="13" font-weight="700" fill="#F0FDF4">ANAEMIA</text><rect x="15" y="90" width="150" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="90" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">Decreased</text><text x="90" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">production</text><text x="90" y="146" text-anchor="middle" font-size="9" fill="#15803D">iron/B12/aplastic</text><rect x="205" y="90" width="150" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">Blood loss</text><text x="280" y="146" text-anchor="middle" font-size="9" fill="#15803D">acute/chronic</text><rect x="395" y="90" width="150" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="470" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">Increased</text><text x="470" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">destruction</text><text x="470" y="146" text-anchor="middle" font-size="9" fill="#15803D">haemolytic/sickle</text></g><line x1="250" y1="48" x2="120" y2="88" stroke="#22C55E" stroke-width="2"/><line x1="280" y1="48" x2="280" y2="88" stroke="#22C55E" stroke-width="2"/><line x1="310" y1="48" x2="440" y2="88" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Iron-deficiency anaemia", p: "The most common anaemia — from blood loss (menorrhagia, GI bleeding, hookworm), poor intake or malabsorption. Microcytic, hypochromic cells; low serum ferritin. Features: pallor, fatigue, spoon nails (koilonychia), glossitis, pica. Management: treat the cause, oral iron (take with vitamin C, on an empty stomach; warn of black stools and constipation), iron-rich diet." },
      { h: "Megaloblastic anaemia", p: "Due to deficiency of vitamin B12 or folic acid, producing large immature red cells (macrocytic). B12 deficiency (pernicious anaemia — lack of intrinsic factor) also causes neurological signs (paraesthesia, ataxia). Management: B12 injections or folate replacement and dietary advice." },
      { h: "Aplastic and haemolytic anaemia", list: [
        "Aplastic — bone marrow failure (drugs, chemicals, radiation, idiopathic) reduces all cell lines (pancytopenia): anaemia, infection and bleeding. Management: remove cause, transfusion, immunosuppression, marrow transplant.",
        "Haemolytic — premature red cell destruction (inherited or acquired); features include jaundice and splenomegaly.",
        "Sickle cell disease — abnormal HbS distorts red cells under low oxygen, causing painful vaso-occlusive crises; manage with hydration, oxygen, analgesia and infection prevention."
      ] },
      { h: "Thalassaemia", p: "An inherited disorder of haemoglobin chain synthesis common in this region, causing chronic haemolytic anaemia. Major forms need regular transfusions, leading to iron overload; iron-chelation therapy is required. Nursing: transfusion support, chelation adherence, genetic counselling." },
      { h: "Leukaemia", p: "Leukaemia is a malignant proliferation of abnormal white cells in bone marrow that crowds out normal cells. Types: acute (ALL, AML — rapid) and chronic (CLL, CML). Features from marrow failure: anaemia (fatigue, pallor), neutropenia (infections), thrombocytopenia (bruising, bleeding), plus bone pain and organ infiltration. Management: chemotherapy, supportive care, sometimes stem-cell transplant." },
      { h: "Bleeding & coagulation disorders", list: [
        "Haemophilia — inherited deficiency of clotting factor VIII (A) or IX (B); prolonged bleeding into joints/muscles; treated with factor replacement.",
        "Thrombocytopenia — low platelets (<150,000/µL) causing petechiae, purpura and bleeding.",
        "Disseminated intravascular coagulation (DIC) — widespread clotting then consumption of factors leading to bleeding; a serious complication of sepsis, obstetric emergencies and trauma."
      ] },
      { h: "Blood transfusion", list: [
        "Verify identity, blood group and cross-match with two nurses before administration.",
        "Use a blood administration set with a filter; start slowly and stay with the client for the first 15 minutes.",
        "Monitor vital signs before, during and after; complete within 4 hours.",
        "Only 0.9% normal saline is compatible with blood (never dextrose or Ringer's)."
      ] },
      { h: "Transfusion reactions", list: [
        "Acute haemolytic — ABO incompatibility: fever, chills, flank/back pain, hypotension, dark urine — STOP the transfusion immediately, keep the line open with saline, notify the physician and blood bank.",
        "Febrile non-haemolytic — fever and chills; the most common reaction.",
        "Allergic — urticaria, itching; severe reactions cause anaphylaxis.",
        "Circulatory overload — dyspnoea, crackles from too rapid/large volume."
      ] },
      { h: "Nursing management (general haematologic)", list: [
        "Assess for pallor, fatigue, bleeding and infection; monitor blood counts.",
        "Balance activity with rest to reduce oxygen demand; provide a safe, low-injury environment.",
        "Protect immunocompromised clients from infection (hand hygiene, neutropenic precautions).",
        "Prevent and control bleeding (soft toothbrush, avoid IM injections/aspirin in thrombocytopenia).",
        "Administer iron, vitamins, transfusions and chemotherapy safely; educate on diet and adherence."
      ] },
      { h: "Clinical relevance", p: "Thalassaemia, iron-deficiency and haemolytic anaemias are highly prevalent in Bangladesh. Safe transfusion practice, neutropenic precautions in leukaemia, and bleeding precautions in thrombocytopenia are core, life-protecting nursing responsibilities." }
    ],
    references: REF_MSN,
    examQuestions: [
      "State the normal values of haemoglobin, WBC and platelets and define anaemia.",
      "Classify the anaemias by cause and describe iron-deficiency anaemia and its management.",
      "Describe the features and nursing care of a client with leukaemia.",
      "List the types of blood transfusion reaction and the nursing action for an acute haemolytic reaction.",
      "Explain the nursing management of a client with thrombocytopenia."
    ],
    assessment: [
      { type: "mcq", q: "The most common type of anaemia worldwide is:", options: ["Iron-deficiency anaemia", "Aplastic anaemia", "Sickle cell anaemia", "Pernicious anaemia"], answer: 0, rationale: "Iron-deficiency anaemia is the most prevalent, often from blood loss or poor intake." },
      { type: "mcq", q: "When teaching a client taking oral iron, the nurse explains that iron is best absorbed:", options: ["With milk", "With antacids", "On an empty stomach with vitamin C", "With tea"], answer: 2, rationale: "Vitamin C enhances iron absorption; milk, antacids and tea reduce it." },
      { type: "mcq", q: "Neurological signs such as paraesthesia and ataxia may accompany which anaemia?", options: ["Iron-deficiency", "Blood-loss anaemia", "Thalassaemia minor", "Vitamin B12 deficiency (pernicious)"], answer: 3, rationale: "B12 is needed for myelin; its deficiency causes neurological as well as haematologic signs." },
      { type: "mcq", q: "During a blood transfusion, the client develops fever, chills, flank pain and dark urine. The nurse should FIRST:", options: ["Slow the transfusion", "Stop the transfusion and keep the line open with saline", "Give paracetamol and continue", "Increase the rate"], answer: 1, rationale: "These signs suggest an acute haemolytic reaction; stopping the transfusion immediately is the priority." },
      { type: "mcq", q: "The only IV fluid compatible with blood products is:", options: ["5% dextrose", "Ringer's lactate", "0.9% normal saline", "10% dextrose"], answer: 2, rationale: "Dextrose causes haemolysis and Ringer's contains calcium that can clot blood; only normal saline is used." },
      { type: "mcq", q: "A client with leukaemia is at risk of infection primarily because of:", options: ["A lack of functioning white cells (neutropenia)", "Excess healthy neutrophils", "High platelet count", "High haemoglobin"], answer: 0, rationale: "Marrow crowding by leukaemic cells reduces functional neutrophils, raising infection risk." },
      { type: "mcq", q: "For a client with a platelet count of 20,000/µL, the nurse should:", options: ["Give IM injections freely", "Encourage contact sports", "Give aspirin for comfort", "Avoid IM injections, use a soft toothbrush and prevent trauma"], answer: 3, rationale: "Severe thrombocytopenia demands bleeding precautions and avoiding aspirin/IM injections." },
      { type: "mcq", q: "Haemophilia A is caused by deficiency of clotting factor:", options: ["Factor IX", "Factor VIII", "Factor II", "Factor X"], answer: 1, rationale: "Haemophilia A results from factor VIII deficiency; haemophilia B from factor IX." },
      { type: "mcq", q: "A painful vaso-occlusive crisis is a feature of:", options: ["Iron-deficiency anaemia", "Thalassaemia trait", "Sickle cell disease", "Pernicious anaemia"], answer: 2, rationale: "Sickled cells occlude small vessels under low oxygen, causing painful crises." },
      { type: "mcq", q: "During the first 15 minutes of a transfusion the nurse should:", options: ["Stay with the client and monitor for reactions", "Leave the client alone", "Infuse as fast as possible", "Add dextrose to the line"], answer: 0, rationale: "Most severe reactions occur early, so the nurse stays and starts the transfusion slowly." }
      , { type: "fill", q: "The normal adult platelet count ranges from 150,000 to ____ per microlitre.", accept: ["400000", "400,000"], rationale: "Normal platelets are 150,000-400,000/µL." }
      , { type: "fill", q: "A reduction in haemoglobin below normal, lowering oxygen-carrying capacity, is called ____.", accept: ["anaemia", "anemia"], rationale: "Anaemia is a deficiency of haemoglobin/red cells." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "msn-12-gastrointestinal",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Gastrointestinal Disorders",
    readMinutes: 27,
    summary: "GI assessment; peptic ulcer disease and GI bleeding; gastritis and gastroenteritis; inflammatory bowel disease and ulcerative colitis; diverticular disease; intestinal obstruction; appendicitis; haemorrhoids and hernia; nasogastric intubation, gastric gavage and lavage; and the nursing management of GI and post-operative GI surgery clients.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "GI assessment", p: "Assess appetite, weight change, nausea, vomiting (colour, amount, blood/coffee-ground), dysphagia, heartburn, abdominal pain (site, character), bowel habit (constipation, diarrhoea, melaena, fresh blood) and abdominal distension. Examine using inspection → auscultation → percussion → palpation (auscultation before palpation on the abdomen)." },
      { h: "Peptic ulcer disease (PUD)", p: "A peptic ulcer is an erosion of the mucosa of the stomach (gastric) or duodenum (duodenal) exposed to acid and pepsin. Main causes: Helicobacter pylori infection and NSAID use; also smoking, stress and alcohol. Duodenal ulcer pain is typically relieved by food; gastric ulcer pain is worsened by food. Diagnosis: endoscopy, H. pylori tests." },
      { h: "PUD management", list: [
        "Drugs — proton-pump inhibitors (omeprazole), H2 blockers, antacids; triple therapy (two antibiotics + PPI) to eradicate H. pylori.",
        "Avoid NSAIDs, smoking, alcohol and irritant foods.",
        "Nursing: relieve pain, administer drugs correctly (antacids between meals), monitor for complications, teach diet and stress reduction.",
        "Complications: haemorrhage, perforation (surgical emergency — board-like rigid abdomen), obstruction."
      ] },
      { h: "GI bleeding", p: "Upper GI bleeding (above the ligament of Treitz) presents as haematemesis (vomiting blood/coffee-ground) and melaena (black tarry stool); lower GI bleeding causes fresh red blood (haematochezia). Causes: peptic ulcer, varices, cancer, diverticula. Management: assess and treat for shock (fluids, blood), NPO, IV access, endoscopy to locate and stop the bleed; monitor vitals, Hb and output closely." },
      { h: "Gastritis and gastroenteritis", list: [
        "Gastritis — inflammation of the stomach lining (H. pylori, NSAIDs, alcohol); epigastric pain, nausea, anorexia.",
        "Gastroenteritis — acute inflammation of stomach and intestine, usually infective; vomiting, diarrhoea, cramps, fever, risk of dehydration and electrolyte imbalance. Management: rehydration (ORS/IV), rest, cautious diet, hygiene."
      ] },
      { h: "Inflammatory bowel disease (IBD)", figure: {
        caption: "Ulcerative colitis vs Crohn's disease.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ulcerative colitis vs Crohn"><g font-family="sans-serif"><rect x="10" y="15" width="540" height="160" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><line x1="200" y1="15" x2="200" y2="175" stroke="#15803D" stroke-width="1.5"/><line x1="10" y1="48" x2="550" y2="48" stroke="#15803D" stroke-width="1.5"/><text x="105" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Ulcerative colitis</text><text x="375" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Crohn\'s disease</text><g font-size="10.5" fill="#0F4C3A"><text x="20" y="72">Colon &amp; rectum only</text><text x="210" y="72">Any part, mouth to anus</text><text x="20" y="98">Continuous inflammation</text><text x="210" y="98">Skip lesions, patchy</text><text x="20" y="124">Mucosa only</text><text x="210" y="124">Full-thickness (transmural)</text><text x="20" y="150">Bloody diarrhoea</text><text x="210" y="150">Diarrhoea, fistulae, strictures</text></g></g></svg>'
      } },
      { h: "IBD management", p: "IBD (ulcerative colitis and Crohn's disease) is chronic autoimmune bowel inflammation with remissions and exacerbations. Features: chronic diarrhoea (often bloody in colitis), abdominal pain, weight loss, malnutrition and fatigue. Management: aminosalicylates, corticosteroids, immunosuppressants and biologics; nutritional support; surgery for complications. Nursing: monitor bowel pattern and hydration, skin care, nutrition, emotional support and medication adherence." },
      { h: "Diverticular disease", p: "Diverticula are small pouches herniating through the colon wall (from a low-fibre diet and raised intraluminal pressure). Diverticulitis is their inflammation/infection, causing left lower quadrant pain, fever and altered bowel habit. Management: antibiotics, bowel rest, high-fibre diet once recovered; surgery for complications (perforation, abscess)." },
      { h: "Intestinal obstruction", p: "Obstruction blocks the passage of intestinal contents — mechanical (adhesions, hernia, tumour, volvulus) or paralytic (ileus, after surgery). Features: colicky abdominal pain, distension, vomiting, absolute constipation and absent/high-pitched bowel sounds. Management: NPO, NG decompression, IV fluids and electrolyte correction, and surgery for mechanical obstruction." },
      { h: "Acute appendicitis", p: "Inflammation of the appendix, usually from obstruction of the lumen. Features: peri-umbilical pain shifting to the right iliac fossa (McBurney's point), rebound tenderness, anorexia, nausea, low-grade fever, raised WBC. Rovsing's sign may be positive. Management: prompt appendicectomy; do NOT apply heat or give enemas/laxatives (risk of rupture). Watch for peritonitis." },
      { h: "Haemorrhoids and hernia", list: [
        "Haemorrhoids — dilated rectal/anal veins causing bright bleeding, pain and prolapse; managed with high-fibre diet, sitz baths, and surgery (haemorrhoidectomy) if severe.",
        "Hernia — protrusion of an organ through a weak abdominal wall (inguinal, umbilical, incisional); risk of strangulation (surgical emergency). Repair is herniorrhaphy/hernioplasty."
      ] },
      { h: "NG intubation, gavage and lavage", list: [
        "Nasogastric (NG) tube — used for feeding (gavage), decompression, or lavage. Confirm placement (aspirate pH ≤5.5, X-ray) before use.",
        "Gastric gavage — feeding through the tube; check placement and residual, sit the client upright, flush after feeds.",
        "Gastric lavage — washing out the stomach (e.g. poisoning, bleeding); protect the airway and monitor closely."
      ] },
      { h: "Nursing management & post-operative GI care", list: [
        "Relieve pain and nausea; monitor vital signs and for bleeding/perforation (rigid abdomen).",
        "Maintain NPO and NG decompression as ordered; monitor bowel sounds and return of function.",
        "Fluid, electrolyte and nutrition support (parenteral if needed); accurate I/O.",
        "Wound and stoma care; early ambulation to prevent ileus and DVT.",
        "Educate on diet (high-fibre, fluids), medication and warning signs."
      ] },
      { h: "Clinical relevance", p: "GI disorders are extremely common in adult wards. Recognising alarm features — a rigid board-like abdomen (perforation), haematemesis with shock (GI bleed), or absent bowel sounds with distension (obstruction) — and acting promptly can be life-saving." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the causes, features and management of peptic ulcer disease and its complications.",
      "Differentiate upper from lower GI bleeding and outline the emergency nursing management.",
      "Compare ulcerative colitis and Crohn's disease.",
      "Describe the clinical features and nursing care of acute appendicitis.",
      "Explain the nursing responsibilities in nasogastric intubation and gastric gavage."
    ],
    assessment: [
      { type: "mcq", q: "The two main causes of peptic ulcer disease are:", options: ["Helicobacter pylori infection and NSAID use", "Viruses and fungi", "High-fibre diet and exercise", "Low blood pressure and anaemia"], answer: 0, rationale: "H. pylori and NSAIDs damage the mucosal barrier, causing peptic ulcers." },
      { type: "mcq", q: "Black tarry stool (melaena) usually indicates:", options: ["Lower GI bleeding of fresh blood", "Normal stool", "Upper GI bleeding", "Biliary obstruction"], answer: 2, rationale: "Digested blood from an upper GI source produces black tarry melaena." },
      { type: "mcq", q: "A sudden rigid, board-like abdomen in a peptic ulcer client suggests:", options: ["Constipation", "Improvement", "Simple indigestion", "Perforation and peritonitis"], answer: 3, rationale: "Perforation spills contents into the peritoneum, causing rigidity — a surgical emergency." },
      { type: "mcq", q: "For a client with suspected acute appendicitis, the nurse should AVOID:", options: ["Keeping the client NPO", "Applying heat or giving enemas/laxatives", "Monitoring vital signs", "Preparing for surgery"], answer: 1, rationale: "Heat and laxatives/enemas increase the risk of appendiceal rupture and peritonitis." },
      { type: "mcq", q: "In ulcerative colitis, inflammation characteristically:", options: ["Affects the entire GI tract with skip lesions", "Occurs only in the mouth", "Is continuous and limited to the colon and rectum", "Never causes diarrhoea"], answer: 2, rationale: "UC is continuous mucosal inflammation confined to the colon/rectum, unlike patchy transmural Crohn's." },
      { type: "mcq", q: "Colicky pain, distension, vomiting and absolute constipation indicate:", options: ["Intestinal obstruction", "Peptic ulcer", "Gastritis", "Haemorrhoids"], answer: 0, rationale: "These classic features point to intestinal obstruction." },
      { type: "mcq", q: "Before giving a feed through a nasogastric tube, the nurse must FIRST:", options: ["Warm the room", "Sit the client flat", "Flush with air only", "Confirm correct tube placement"], answer: 3, rationale: "Verifying placement (pH/aspirate, X-ray) prevents accidental feeding into the lungs." },
      { type: "mcq", q: "The regimen to eradicate H. pylori typically combines:", options: ["A single antacid", "Two antibiotics plus a proton-pump inhibitor", "Only vitamins", "Laxatives"], answer: 1, rationale: "Triple therapy (two antibiotics + a PPI) eradicates H. pylori and heals the ulcer." },
      { type: "mcq", q: "A strangulated hernia is a surgical emergency because:", options: ["It always resolves on its own", "It causes only mild discomfort", "The trapped bowel's blood supply is cut off, risking necrosis", "It improves with laxatives"], answer: 2, rationale: "Strangulation compromises blood flow, leading to ischaemia and bowel necrosis." },
      { type: "mcq", q: "The priority for a client with severe upper GI bleeding and hypotension is to:", options: ["Establish IV access and treat for hypovolaemic shock", "Give a heavy meal", "Ambulate immediately", "Delay treatment"], answer: 0, rationale: "Restoring circulating volume and treating shock take priority in significant GI haemorrhage." }
      , { type: "fill", q: "Vomiting of blood is medically termed ____.", accept: ["haematemesis", "hematemesis"], rationale: "Haematemesis is vomiting of blood, a sign of upper GI bleeding." }
      , { type: "fill", q: "The point of maximal tenderness in appendicitis is called ____ point.", accept: ["McBurney's", "McBurney", "mcburney"], rationale: "McBurney's point (right lower quadrant) is classically tender in appendicitis." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "msn-13-hepatobiliary",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Hepatobiliary & Pancreatic Disorders",
    readMinutes: 26,
    summary: "Liver functions and function tests; viral hepatitis; liver cirrhosis and its complications (portal hypertension, ascites, oesophageal varices, hepatic encephalopathy); cholelithiasis and cholecystitis; acute pancreatitis; and the nursing management of clients with hepatobiliary and pancreatic disease.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the liver", list: [
        "Metabolism of carbohydrate, protein and fat.",
        "Synthesis of plasma proteins (albumin) and clotting factors.",
        "Detoxification of drugs, toxins and ammonia (to urea).",
        "Bile production for fat digestion; storage of glycogen, vitamins and iron.",
        "Bilirubin metabolism and immune (Kupffer cell) function."
      ] },
      { h: "Liver function tests (LFTs)", list: [
        "ALT and AST — raised in hepatocellular damage.",
        "ALP and GGT — raised in cholestasis/biliary obstruction.",
        "Bilirubin — raised causes jaundice (normal total <1.0-1.2 mg/dL).",
        "Serum albumin — low in chronic liver disease (impaired synthesis).",
        "Prothrombin time/INR — prolonged when clotting-factor synthesis fails."
      ] },
      { h: "Viral hepatitis", figure: {
        caption: "Routes of transmission of the hepatitis viruses.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hepatitis transmission"><g font-family="sans-serif"><rect x="15" y="30" width="255" height="110" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="142" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Faecal-oral</text><text x="142" y="82" text-anchor="middle" font-size="12" fill="#15803D">Hepatitis A</text><text x="142" y="104" text-anchor="middle" font-size="12" fill="#15803D">Hepatitis E</text><text x="142" y="126" text-anchor="middle" font-size="9" fill="#15803D">contaminated food/water; usually acute</text><rect x="290" y="30" width="255" height="110" rx="9" fill="#0F4C3A" stroke="#15803D" stroke-width="2"/><text x="417" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#F0FDF4">Blood / body fluids</text><text x="417" y="82" text-anchor="middle" font-size="12" fill="#DCFCE7">Hepatitis B, C, D</text><text x="417" y="104" text-anchor="middle" font-size="9" fill="#DCFCE7">blood, sexual, mother-to-child</text><text x="417" y="122" text-anchor="middle" font-size="9" fill="#DCFCE7">may become chronic; B has a vaccine</text></g></svg>'
      } },
      { h: "Hepatitis — features and management", p: "Viral hepatitis is inflammation of the liver. Phases: prodromal (fatigue, anorexia, nausea, mild fever), icteric (jaundice, dark urine, pale stool, pruritus, tender hepatomegaly) and convalescent. Management is largely supportive: rest, nutrition, avoid alcohol and hepatotoxic drugs; antivirals for chronic B/C. Prevention: hepatitis B vaccine, safe injection practices, hand and food hygiene, standard precautions." },
      { h: "Liver cirrhosis", p: "Cirrhosis is chronic, irreversible destruction of liver cells with fibrosis and regenerating nodules that distort structure and impair function. Causes: chronic hepatitis B/C, alcohol, non-alcoholic fatty liver disease. It leads to two consequences: liver-cell failure and portal hypertension." },
      { h: "Complications of cirrhosis", list: [
        "Portal hypertension — raised pressure in the portal system.",
        "Oesophageal varices — dilated veins that can rupture and cause massive, life-threatening haematemesis.",
        "Ascites — fluid in the peritoneal cavity from low albumin and portal hypertension.",
        "Hepatic encephalopathy — confusion, asterixis and coma from ammonia accumulation.",
        "Bleeding tendency (reduced clotting factors), jaundice and hypoalbuminaemia."
      ] },
      { h: "Cirrhosis management", list: [
        "Rest, high-calorie diet; protein moderated in encephalopathy; salt and fluid restriction for ascites.",
        "Diuretics and paracentesis for ascites; lactulose to reduce ammonia in encephalopathy.",
        "Beta-blockers and endoscopic banding for varices; vitamin K and blood products for bleeding.",
        "Avoid alcohol, sedatives and hepatotoxic drugs; treat the underlying cause."
      ] },
      { h: "Nursing management in cirrhosis", list: [
        "Monitor for and manage bleeding (varices), ascites (measure abdominal girth, daily weight) and encephalopathy (level of consciousness).",
        "Administer lactulose, diuretics and vitamins; restrict sodium/fluid as ordered.",
        "Meticulous skin care (jaundice/pruritus, oedema); prevent injury and infection.",
        "Balance nutrition and rest; educate on alcohol abstinence and medication safety."
      ] },
      { h: "Cholelithiasis and cholecystitis", p: "Cholelithiasis is the formation of gallstones; cholecystitis is inflammation of the gallbladder, usually from a stone obstructing the cystic duct. Risk factors — the 'five Fs': female, forty, fat, fertile, fair. Features: right upper quadrant/epigastric pain (biliary colic) radiating to the right shoulder, worse after fatty meals, nausea, fever; obstruction causes jaundice, dark urine and pale stools. Management: analgesia, low-fat diet, antibiotics, and cholecystectomy (often laparoscopic)." },
      { h: "Acute pancreatitis", p: "Acute pancreatitis is inflammation of the pancreas from autodigestion by its own enzymes. Main causes: gallstones and alcohol. Features: severe epigastric pain radiating to the back, relieved by leaning forward, nausea, vomiting, abdominal distension, fever; raised serum amylase and lipase. It can progress to shock, hypocalcaemia and multi-organ failure." },
      { h: "Pancreatitis management", list: [
        "Rest the pancreas — NPO, NG suction if vomiting; IV fluids and electrolyte correction.",
        "Strong analgesia (pain control), antiemetics; monitor for shock, hypocalcaemia and respiratory distress.",
        "Treat the cause (gallstones, alcohol); gradual reintroduction of a low-fat diet.",
        "Nursing: pain relief, strict I/O, monitor blood glucose and calcium, position of comfort (leaning forward), emotional support."
      ] },
      { h: "Clinical relevance", p: "Hepatitis B and cirrhosis are major public-health problems in Bangladesh. Nurses play a key role in hepatitis prevention (vaccination, safe injections, standard precautions), early recognition of variceal bleeding and encephalopathy, and supportive care that can prevent fatal complications." }
    ],
    references: REF_MSN,
    examQuestions: [
      "List the major functions of the liver and the common liver function tests.",
      "Compare the transmission and prevention of the different hepatitis viruses.",
      "Describe the complications of liver cirrhosis and their nursing management.",
      "Explain the causes, features and management of cholecystitis.",
      "Discuss the pathophysiology and nursing management of acute pancreatitis."
    ],
    assessment: [
      { type: "mcq", q: "Hepatitis A is transmitted mainly by the:", options: ["Faecal-oral route", "Blood-borne route", "Sexual route", "Airborne route"], answer: 0, rationale: "Hepatitis A (and E) spread by the faecal-oral route via contaminated food/water." },
      { type: "mcq", q: "Which hepatitis virus is preventable by vaccination and commonly becomes chronic?", options: ["Hepatitis A", "Hepatitis E", "Hepatitis B", "None"], answer: 2, rationale: "Hepatitis B has an effective vaccine and can progress to chronic infection and cirrhosis." },
      { type: "mcq", q: "The most life-threatening complication of oesophageal varices in cirrhosis is:", options: ["Constipation", "Mild indigestion", "Weight gain", "Massive haematemesis from variceal rupture"], answer: 3, rationale: "Ruptured varices cause massive upper GI haemorrhage, a leading cause of death in cirrhosis." },
      { type: "mcq", q: "Lactulose is given to a cirrhotic client with encephalopathy in order to:", options: ["Increase ammonia", "Reduce ammonia absorption from the gut", "Stop diarrhoea", "Raise blood pressure"], answer: 1, rationale: "Lactulose acidifies the colon and promotes ammonia excretion, lowering blood ammonia." },
      { type: "mcq", q: "The classic risk factors for gallstones are summarised as the five:", options: ["Ss", "Ps", "Fs (female, forty, fat, fertile, fair)", "Ts"], answer: 2, rationale: "The 'five Fs' describe common gallstone risk factors." },
      { type: "mcq", q: "Serum enzymes characteristically raised in acute pancreatitis are:", options: ["Amylase and lipase", "Troponin and CK-MB", "ALT and AST only", "Alkaline phosphatase only"], answer: 0, rationale: "Raised amylase and lipase are hallmark findings in acute pancreatitis." },
      { type: "mcq", q: "A client with acute pancreatitis is most comfortable when positioned:", options: ["Flat on the back", "Trendelenburg", "Prone", "Leaning forward or in the knee-chest position"], answer: 3, rationale: "Leaning forward reduces pressure on the inflamed pancreas and eases pain." },
      { type: "mcq", q: "A low serum albumin in chronic liver disease contributes to:", options: ["Hypertension", "Ascites and oedema", "Polycythaemia", "Constipation"], answer: 1, rationale: "Low albumin reduces oncotic pressure, promoting fluid shift into tissues and the peritoneum (ascites)." },
      { type: "mcq", q: "A prolonged prothrombin time in liver disease reflects:", options: ["Excess clotting factors", "High platelet count", "Impaired synthesis of clotting factors", "Improved liver function"], answer: 2, rationale: "The damaged liver cannot synthesise clotting factors, prolonging the PT/INR and causing bleeding." },
      { type: "mcq", q: "For a cirrhotic client with ascites, the nurse should monitor:", options: ["Daily weight and abdominal girth", "Only temperature", "Hair growth", "Nail colour only"], answer: 0, rationale: "Daily weight and abdominal girth track fluid accumulation and treatment response." }
      , { type: "fill", q: "Yellow discolouration of skin and sclera from raised bilirubin is called ____.", accept: ["jaundice"], rationale: "Jaundice results from bilirubin accumulation, seen in liver and biliary disease." }
      , { type: "fill", q: "Accumulation of fluid in the peritoneal cavity in cirrhosis is called ____.", accept: ["ascites"], rationale: "Ascites is peritoneal fluid from portal hypertension and hypoalbuminaemia." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "msn-14-renal-urinary",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Renal & Urinary Disorders",
    readMinutes: 26,
    summary: "Renal assessment and function tests; urinary tract infection; glomerulonephritis and nephrotic syndrome; urolithiasis (renal calculi); benign prostatic hyperplasia; acute kidney injury and chronic kidney disease; dialysis; urinary catheterisation; and the nursing management of renal and urinary clients.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the kidney", list: [
        "Excretion of metabolic wastes (urea, creatinine) and drugs.",
        "Regulation of fluid, electrolyte and acid-base balance.",
        "Blood-pressure control (renin-angiotensin system).",
        "Erythropoietin production (stimulates red cell formation).",
        "Activation of vitamin D for calcium balance."
      ] },
      { h: "Renal assessment and investigations", list: [
        "Urine output — normal ~0.5-1 mL/kg/h (adult ~1500 mL/day); oliguria <400 mL/day, anuria <100 mL/day.",
        "Urinalysis — protein, blood, glucose, specific gravity, casts; culture for infection.",
        "Blood — urea, creatinine (raised in renal failure), electrolytes, eGFR.",
        "Imaging — ultrasound, KUB X-ray, IVU, CT; renal biopsy."
      ] },
      { h: "Urinary tract infection (UTI)", p: "UTI is infection of any part of the urinary tract, most often by Escherichia coli, commoner in women and with catheters. Lower UTI (cystitis): dysuria, frequency, urgency, suprapubic pain, cloudy/foul urine. Upper UTI (pyelonephritis): fever, chills, flank pain. Management: appropriate antibiotics, increased fluids, and prevention (perineal hygiene, catheter care). Catheter-associated UTI is a common nosocomial infection." },
      { h: "Glomerulonephritis and nephrotic syndrome", list: [
        "Acute glomerulonephritis — immune inflammation of the glomeruli, often post-streptococcal; features: haematuria (smoky urine), proteinuria, oedema (periorbital), hypertension, oliguria. Management: rest, salt/fluid/protein restriction, treat hypertension and infection.",
        "Nephrotic syndrome — massive proteinuria, hypoalbuminaemia, generalised oedema and hyperlipidaemia. Management: steroids, protein and salt management, diuretics, monitor for infection and thrombosis."
      ] },
      { h: "Urolithiasis (renal calculi)", p: "Kidney stones form from crystallisation of urinary substances (calcium oxalate most common), favoured by low fluid intake, infection and metabolic factors. Features: severe colicky loin-to-groin pain (renal colic), haematuria, nausea and vomiting, restlessness. Management: analgesia, high fluid intake, stone analysis, lithotripsy or surgery; strain urine to catch the stone. Prevention: adequate hydration and dietary modification." },
      { h: "Benign prostatic hyperplasia (BPH)", p: "BPH is non-cancerous enlargement of the prostate in older men, obstructing urine flow. Features: hesitancy, weak stream, frequency, nocturia, dribbling, incomplete emptying and retention. Management: alpha-blockers, 5-alpha-reductase inhibitors, and surgery (TURP). Nursing after TURP: monitor continuous bladder irrigation, catheter patency and for haemorrhage." },
      { h: "Acute kidney injury (AKI)", p: "AKI is a rapid, often reversible fall in kidney function with rising urea/creatinine and reduced urine output. Causes: pre-renal (hypovolaemia, shock), renal (nephrotoxins, glomerulonephritis) and post-renal (obstruction). Phases: onset → oliguric → diuretic → recovery. Management: treat the cause, careful fluid and electrolyte balance (especially potassium), and dialysis if severe." },
      { h: "Chronic kidney disease (CKD)", figure: {
        caption: "Progression and consequences of chronic kidney disease.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CKD consequences"><defs><marker id="msnArr14" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif"><rect x="15" y="55" width="130" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="80" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">Nephron loss</text><text x="80" y="98" text-anchor="middle" font-size="9" fill="#15803D">falling eGFR</text><rect x="185" y="20" width="150" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="260" y="47" text-anchor="middle" font-size="10" font-weight="700" fill="#0F4C3A">Uraemia · fluid overload</text><rect x="185" y="75" width="150" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="260" y="102" text-anchor="middle" font-size="10" font-weight="700" fill="#0F4C3A">Hyperkalaemia · acidosis</text><rect x="185" y="120" width="150" height="42" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="260" y="146" text-anchor="middle" font-size="10" font-weight="700" fill="#0F4C3A">Anaemia · bone disease</text><rect x="380" y="60" width="165" height="55" rx="8" fill="#0F4C3A" stroke="#15803D" stroke-width="2"/><text x="462" y="83" text-anchor="middle" font-size="11" font-weight="700" fill="#F0FDF4">End-stage:</text><text x="462" y="101" text-anchor="middle" font-size="10" fill="#DCFCE7">dialysis / transplant</text></g><line x1="145" y1="70" x2="181" y2="45" stroke="#22C55E" stroke-width="2" marker-end="url(#msnArr14)"/><line x1="145" y1="85" x2="181" y2="95" stroke="#22C55E" stroke-width="2" marker-end="url(#msnArr14)"/><line x1="145" y1="100" x2="181" y2="138" stroke="#22C55E" stroke-width="2" marker-end="url(#msnArr14)"/><line x1="335" y1="90" x2="377" y2="88" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#msnArr14)"/></svg>'
      } },
      { h: "CKD management", p: "CKD is progressive, irreversible loss of kidney function over months to years (commonly from diabetes and hypertension). Consequences: fluid overload, hyperkalaemia, metabolic acidosis, uraemia, anaemia (low erythropoietin) and renal bone disease. Management: control the cause, restrict fluid/sodium/potassium/protein/phosphate as needed, treat anaemia (erythropoietin, iron), and renal replacement (dialysis or transplant) at end stage." },
      { h: "Dialysis", list: [
        "Haemodialysis — blood is filtered through an external machine via a fistula/catheter, several times weekly; protect the fistula (no BP or venepuncture on that arm; feel for a thrill).",
        "Peritoneal dialysis — the peritoneum acts as the filter using dialysate instilled into the abdomen; monitor for peritonitis (cloudy effluent).",
        "Nursing: monitor fluid/electrolyte balance, weight, BP, access site, and for complications."
      ] },
      { h: "Urinary catheterisation", list: [
        "Use strict aseptic technique; choose the correct size; secure and maintain a closed drainage system.",
        "Keep the bag below bladder level, ensure free drainage, provide catheter/perineal care.",
        "Remove as early as possible to prevent catheter-associated UTI; monitor output."
      ] },
      { h: "Nursing management (general renal)", list: [
        "Monitor intake-output, daily weight, vital signs and for oedema/fluid overload.",
        "Watch electrolytes, especially potassium (ECG changes) and signs of uraemia.",
        "Administer fluids, diuretics, antihypertensives and dietary restrictions as ordered.",
        "Prevent and detect infection; provide skin, catheter and access-site care.",
        "Educate on fluid/diet limits, medication adherence, fistula care and warning signs."
      ] },
      { h: "Clinical relevance", p: "CKD from diabetes and hypertension is rising rapidly. Nurses prevent catheter-associated UTIs, protect dialysis access, detect dangerous hyperkalaemia early, and support the complex fluid, diet and medication regimen essential to renal patients' survival." }
    ],
    references: REF_MSN,
    examQuestions: [
      "List the functions of the kidney and the main renal function tests.",
      "Differentiate cystitis from pyelonephritis and outline the prevention of catheter-associated UTI.",
      "Describe the features and nursing management of acute glomerulonephritis.",
      "Explain the causes, phases and management of acute kidney injury.",
      "Discuss the nursing care of a client on haemodialysis, including fistula care."
    ],
    assessment: [
      { type: "mcq", q: "The most common causative organism of urinary tract infection is:", options: ["Escherichia coli", "Staphylococcus aureus", "Candida albicans", "Streptococcus pyogenes"], answer: 0, rationale: "E. coli from the bowel flora causes the majority of UTIs." },
      { type: "mcq", q: "The hormone produced by the kidney that stimulates red cell production is:", options: ["Insulin", "Aldosterone", "Erythropoietin", "Renin"], answer: 2, rationale: "Erythropoietin stimulates marrow red-cell production; its deficiency causes CKD anaemia." },
      { type: "mcq", q: "Severe colicky pain radiating from the loin to the groin with haematuria suggests:", options: ["Cystitis", "Nephrotic syndrome", "BPH", "Renal calculi (stones)"], answer: 3, rationale: "Ureteric stone movement causes classic loin-to-groin renal colic with haematuria." },
      { type: "mcq", q: "The MOST dangerous electrolyte disturbance to monitor in renal failure is:", options: ["Hyponatraemia", "Hyperkalaemia", "Hypocalcaemia", "Hypochloraemia"], answer: 1, rationale: "Failing kidneys retain potassium; hyperkalaemia can cause fatal cardiac arrhythmias." },
      { type: "mcq", q: "When caring for an arm with an arteriovenous fistula, the nurse must:", options: ["Take blood pressure on that arm", "Apply tight bandages", "Avoid BP measurement and venepuncture on that arm and check for a thrill", "Insert IV cannulae there"], answer: 2, rationale: "Protecting the fistula preserves dialysis access; a palpable thrill confirms patency." },
      { type: "mcq", q: "Periorbital oedema, smoky/haematuric urine and hypertension in a child after a sore throat suggest:", options: ["Acute post-streptococcal glomerulonephritis", "BPH", "Renal calculi", "Cystitis"], answer: 0, rationale: "Immune glomerular injury after streptococcal infection causes this classic picture." },
      { type: "mcq", q: "Cloudy peritoneal dialysis effluent most likely indicates:", options: ["Normal dialysis", "Successful treatment", "Dehydration", "Peritonitis (infection)"], answer: 3, rationale: "Cloudy effluent signals peritonitis, a key complication of peritoneal dialysis." },
      { type: "mcq", q: "To prevent catheter-associated UTI, the drainage bag should be kept:", options: ["Above bladder level", "Below bladder level with a closed system", "Clamped continuously", "Open to air"], answer: 1, rationale: "Keeping the bag below the bladder in a closed system prevents backflow and infection." },
      { type: "mcq", q: "Nephrotic syndrome is characterised by:", options: ["High albumin and no protein loss", "Only fever", "Massive proteinuria, hypoalbuminaemia and oedema", "Polycythaemia"], answer: 2, rationale: "The nephrotic tetrad is proteinuria, hypoalbuminaemia, oedema and hyperlipidaemia." },
      { type: "mcq", q: "Urine output below 400 mL/day is termed:", options: ["Oliguria", "Polyuria", "Anuria", "Dysuria"], answer: 0, rationale: "Oliguria is <400 mL/day; anuria is <100 mL/day." }
      , { type: "fill", q: "The main nitrogenous waste products measured to assess renal function are urea and ____.", accept: ["creatinine"], rationale: "Serum urea and creatinine rise as kidney function falls." }
      , { type: "fill", q: "The surgical procedure to relieve benign prostatic obstruction is abbreviated ____.", accept: ["TURP"], rationale: "TURP = transurethral resection of the prostate." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "msn-15-endocrine-diabetes",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Endocrine Disorders (including Diabetes Mellitus)",
    readMinutes: 27,
    summary: "The endocrine system overview; thyroid disorders (hypo- and hyperthyroidism); disorders of the pituitary and adrenal glands; diabetes insipidus; and diabetes mellitus in depth — types, pathophysiology, features, diagnosis, acute and chronic complications, and evidence-based nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The endocrine system", p: "The endocrine system is a network of ductless glands that secrete hormones directly into the blood to regulate metabolism, growth, reproduction, fluid balance and the stress response. Control is by negative feedback: rising hormone levels suppress further release. Disorders arise from over-secretion (hyperfunction) or under-secretion (hypofunction) of a gland." },
      { h: "Thyroid disorders — hypothyroidism", p: "Hypothyroidism is deficient thyroid hormone, slowing metabolism. Features: fatigue, cold intolerance, weight gain, dry skin, hair loss, constipation, bradycardia, slow speech, depression; severe form is myxoedema. Low T3/T4 with raised TSH. Management: lifelong levothyroxine (take on an empty stomach), monitor TSH." },
      { h: "Thyroid disorders — hyperthyroidism", p: "Hyperthyroidism is excess thyroid hormone (commonly Graves' disease), speeding metabolism. Features: weight loss despite good appetite, heat intolerance, sweating, tremor, palpitations/tachycardia, anxiety, diarrhoea, goitre and exophthalmos. Raised T3/T4 with low TSH. Management: antithyroid drugs (carbimazole), beta-blockers, radioactive iodine or thyroidectomy. Thyroid storm is a life-threatening crisis." },
      { h: "Pituitary and adrenal disorders", list: [
        "Pituitary — over-secretion of growth hormone causes acromegaly/gigantism; under-secretion causes dwarfism and hypopituitarism.",
        "Cushing's syndrome — excess cortisol: central obesity, moon face, buffalo hump, striae, hypertension, hyperglycaemia, osteoporosis.",
        "Addison's disease — adrenal insufficiency: fatigue, weight loss, hypotension, hyperpigmentation, hyponatraemia; Addisonian crisis is an emergency needing IV steroids and fluids."
      ] },
      { h: "Diabetes insipidus (DI)", p: "DI results from deficient ADH (central) or renal resistance to it (nephrogenic), causing the kidneys to lose large volumes of dilute urine. Features: severe polyuria (up to several litres/day), intense thirst (polydipsia), dilute urine (low specific gravity) and risk of dehydration and hypernatraemia. Management: desmopressin (ADH analogue) for central DI, fluid replacement and careful I/O monitoring. (Not to be confused with diabetes mellitus.)" },
      { h: "Diabetes mellitus — definition & types", figure: {
        caption: "Comparison of Type 1 and Type 2 diabetes mellitus.",
        svg: '<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Type 1 vs Type 2 diabetes"><g font-family="sans-serif"><rect x="10" y="15" width="540" height="155" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><line x1="200" y1="15" x2="200" y2="170" stroke="#15803D" stroke-width="1.5"/><line x1="10" y1="48" x2="550" y2="48" stroke="#15803D" stroke-width="1.5"/><text x="105" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Type 1 DM</text><text x="375" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Type 2 DM</text><g font-size="10.5" fill="#0F4C3A"><text x="20" y="72">Beta-cell destruction</text><text x="210" y="72">Insulin resistance + deficiency</text><text x="20" y="98">No/little insulin</text><text x="210" y="98">Relative insulin lack</text><text x="20" y="124">Young onset, thin</text><text x="210" y="124">Adult onset, often obese</text><text x="20" y="150">Insulin essential; DKA risk</text><text x="210" y="150">Diet/oral drugs/insulin; HHS risk</text></g></g></svg>'
      } },
      { h: "Diabetes — pathophysiology", p: "Diabetes mellitus is a group of metabolic disorders of chronic hyperglycaemia from defects in insulin secretion, action, or both. Insulin normally moves glucose into cells; without effective insulin, blood glucose rises while cells starve, and the body breaks down fat (producing ketones) and protein. Type 1 (autoimmune beta-cell destruction) needs insulin; Type 2 (insulin resistance) is linked to obesity; gestational diabetes occurs in pregnancy." },
      { h: "Diabetes — features and diagnosis", list: [
        "Classic symptoms — the three Ps: polyuria, polydipsia, polyphagia, plus weight loss, fatigue, blurred vision, poor wound healing and recurrent infections.",
        "Diagnosis — fasting plasma glucose ≥7.0 mmol/L (126 mg/dL); 2-hour post-load ≥11.1 mmol/L (200 mg/dL); random ≥11.1 with symptoms; HbA1c ≥6.5%.",
        "HbA1c reflects average glucose over ~2-3 months (target usually <7%)."
      ] },
      { h: "Acute complications", list: [
        "Hypoglycaemia (<4 mmol/L / 70 mg/dL) — sweating, tremor, hunger, confusion, coma; treat FAST with oral glucose if conscious, IV dextrose or glucagon if not.",
        "Diabetic ketoacidosis (DKA) — mainly Type 1: hyperglycaemia, ketosis, acidosis, dehydration, Kussmaul breathing, acetone breath; treat with IV fluids, insulin and potassium.",
        "Hyperosmolar hyperglycaemic state (HHS) — mainly Type 2: very high glucose, severe dehydration, no significant ketosis."
      ] },
      { h: "Chronic complications", list: [
        "Microvascular — retinopathy (blindness), nephropathy (renal failure), neuropathy (numbness, foot ulcers).",
        "Macrovascular — coronary artery disease, stroke, peripheral vascular disease.",
        "The diabetic foot — neuropathy plus poor circulation and infection can lead to ulcers and amputation."
      ] },
      { h: "Diabetes management", list: [
        "Diet — balanced, controlled carbohydrate, regular meals, weight control.",
        "Exercise — improves glucose uptake and insulin sensitivity.",
        "Medication — oral hypoglycaemics (metformin, sulfonylureas) for Type 2; insulin for Type 1 and when needed in Type 2.",
        "Self-monitoring of blood glucose; regular HbA1c and screening for complications.",
        "Insulin: rotate injection sites, correct storage, match type/onset to meals, avoid errors."
      ] },
      { h: "Nursing management", list: [
        "Monitor blood glucose and recognise/treat hypo- and hyperglycaemia promptly.",
        "Educate on diet, exercise, medication/insulin technique, and sick-day rules.",
        "Emphasise meticulous foot care (inspect daily, proper footwear, treat injuries early).",
        "Support psychological adjustment and long-term adherence.",
        "Screen for and help prevent complications (eyes, kidneys, feet, cardiovascular)."
      ] },
      { h: "Clinical relevance", p: "Diabetes is epidemic in Bangladesh and worldwide. Nurse-led education on glucose monitoring, insulin technique, foot care and lifestyle prevents the acute crises (hypoglycaemia, DKA) and the devastating chronic complications that drive disability and cost." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Differentiate hypothyroidism from hyperthyroidism in features and management.",
      "Compare Type 1 and Type 2 diabetes mellitus in pathophysiology and management.",
      "Describe the acute complications of diabetes and their emergency nursing management.",
      "Explain the chronic complications of diabetes and how the nurse helps prevent them.",
      "Outline the health education a nurse should give to a newly diagnosed diabetic."
    ],
    assessment: [
      { type: "mcq", q: "The three classic symptoms of diabetes mellitus are polyuria, polydipsia and:", options: ["Polyphagia", "Polycythaemia", "Polyarthritis", "Polyneuritis"], answer: 0, rationale: "The 'three Ps' are polyuria, polydipsia (thirst) and polyphagia (hunger)." },
      { type: "mcq", q: "A fasting plasma glucose diagnostic of diabetes is:", options: ["≥5.0 mmol/L", "≥3.0 mmol/L", "≥7.0 mmol/L (126 mg/dL)", "≥4.0 mmol/L"], answer: 2, rationale: "Fasting plasma glucose ≥7.0 mmol/L (126 mg/dL) meets the diagnostic threshold." },
      { type: "mcq", q: "A conscious diabetic client who is sweaty, shaky and confused should FIRST be given:", options: ["Extra insulin", "A large fatty meal", "Nothing by mouth", "Fast-acting oral glucose"], answer: 3, rationale: "These are signs of hypoglycaemia; give rapid oral glucose (or IV dextrose/glucagon if unconscious)." },
      { type: "mcq", q: "Kussmaul breathing and acetone breath in a Type 1 diabetic indicate:", options: ["Hypoglycaemia", "Diabetic ketoacidosis", "Simple dehydration", "Hyperthyroidism"], answer: 1, rationale: "Deep rapid Kussmaul breathing and fruity breath are hallmarks of DKA." },
      { type: "mcq", q: "HbA1c is useful because it reflects average blood glucose over the past:", options: ["24 hours", "1 week", "2-3 months", "1 year"], answer: 2, rationale: "HbA1c indicates glycaemic control over roughly the preceding 2-3 months." },
      { type: "mcq", q: "The FIRST-line drug for most clients with Type 2 diabetes is:", options: ["Metformin", "Insulin", "Carbimazole", "Levothyroxine"], answer: 0, rationale: "Metformin is usually first-line in Type 2 diabetes, improving insulin sensitivity." },
      { type: "mcq", q: "A key teaching point for diabetic foot care is to:", options: ["Walk barefoot at home", "Soak feet in very hot water", "Cut corns with a blade", "Inspect the feet daily and wear proper footwear"], answer: 3, rationale: "Daily inspection and protective footwear prevent unnoticed injury, ulcers and amputation." },
      { type: "mcq", q: "Hyperthyroidism (Graves' disease) typically presents with:", options: ["Weight gain and cold intolerance", "Weight loss, heat intolerance and tachycardia", "Bradycardia and constipation", "Dry, coarse skin only"], answer: 1, rationale: "Excess thyroid hormone speeds metabolism, causing weight loss, heat intolerance and tachycardia." },
      { type: "mcq", q: "Diabetes insipidus differs from diabetes mellitus in that it is caused by a problem with:", options: ["Insulin", "Thyroid hormone", "Antidiuretic hormone (ADH)", "Cortisol"], answer: 2, rationale: "DI results from ADH deficiency or resistance, causing dilute polyuria — unrelated to insulin." },
      { type: "mcq", q: "When teaching insulin administration, the nurse instructs the client to:", options: ["Rotate injection sites", "Inject in the same spot each time", "Store insulin in a freezer", "Share needles to save cost"], answer: 0, rationale: "Rotating sites prevents lipohypertrophy and ensures consistent absorption." }
      , { type: "fill", q: "The hormone deficient or ineffective in diabetes mellitus is ____.", accept: ["insulin"], rationale: "Diabetes mellitus results from insulin deficiency or resistance." }
      , { type: "fill", q: "A blood glucose below 4 mmol/L (70 mg/dL) is termed ____.", accept: ["hypoglycaemia", "hypoglycemia"], rationale: "Hypoglycaemia is dangerously low blood glucose requiring prompt treatment." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "msn-16-neurological",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Neurological Disorders",
    readMinutes: 27,
    summary: "Neurological assessment and the Glasgow Coma Scale; raised intracranial pressure; stroke (cerebrovascular accident); meningitis; epilepsy; Parkinson's disease; neuritis; rehabilitative and post-neurosurgical care; and the nursing management of the neurological client.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Neurological assessment", p: "Assess level of consciousness (the most sensitive indicator), orientation, pupils (size, equality, reaction to light), motor and sensory function, reflexes, cranial nerves, speech and vital signs. The Glasgow Coma Scale (GCS) objectively scores eye, verbal and motor responses from 3 (deep coma) to 15 (fully alert)." },
      { h: "Glasgow Coma Scale", figure: {
        caption: "The three components of the Glasgow Coma Scale (total 3-15).",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Glasgow Coma Scale"><g font-family="sans-serif"><rect x="15" y="30" width="165" height="105" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="97" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Eye opening</text><text x="97" y="82" text-anchor="middle" font-size="22" font-weight="700" fill="#15803D">4</text><text x="97" y="108" text-anchor="middle" font-size="10" fill="#15803D">spontaneous to none</text><rect x="197" y="30" width="165" height="105" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="279" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Verbal response</text><text x="279" y="82" text-anchor="middle" font-size="22" font-weight="700" fill="#15803D">5</text><text x="279" y="108" text-anchor="middle" font-size="10" fill="#15803D">oriented to none</text><rect x="379" y="30" width="165" height="105" rx="9" fill="#22C55E" stroke="#15803D" stroke-width="2"/><text x="461" y="55" text-anchor="middle" font-size="13" font-weight="700" fill="#F0FDF4">Motor response</text><text x="461" y="82" text-anchor="middle" font-size="22" font-weight="700" fill="#F0FDF4">6</text><text x="461" y="108" text-anchor="middle" font-size="10" fill="#F0FDF4">obeys to none</text></g></svg>'
      } },
      { h: "Raised intracranial pressure (ICP)", p: "The skull is rigid, so any increase in brain volume, blood or CSF raises ICP (normal 5-15 mmHg). Causes: head injury, tumour, haemorrhage, oedema, hydrocephalus. Early signs: decreasing level of consciousness, headache, vomiting, restlessness. Late signs (Cushing's triad): rising BP with widening pulse pressure, bradycardia and irregular breathing — a neurological emergency. Fixed dilated pupils are ominous." },
      { h: "Managing raised ICP", list: [
        "Elevate the head of bed ~30 degrees, keep the head/neck neutral to aid venous drainage.",
        "Maintain airway and oxygenation; avoid hypercapnia (CO2 raises ICP).",
        "Osmotic diuretics (mannitol), fluid balance, treat the cause; avoid activities that raise ICP (straining, suctioning too long).",
        "Continuous neuro-observation; report any deterioration promptly."
      ] },
      { h: "Stroke (cerebrovascular accident)", p: "A stroke is sudden loss of brain function from interrupted blood supply. Ischaemic stroke (~85%) is caused by thrombosis or embolism; haemorrhagic stroke by a ruptured vessel. Features: sudden weakness/paralysis (hemiplegia), facial droop, slurred speech (dysarthria) or loss of speech (aphasia), visual loss, and altered consciousness. Recognise with FAST: Face, Arm, Speech, Time." },
      { h: "Stroke management", list: [
        "Rapid assessment and CT to distinguish ischaemic from haemorrhagic (guides treatment).",
        "Ischaemic: thrombolysis within the therapeutic window; antiplatelets; 'time is brain'.",
        "Support airway, breathing, swallowing (aspiration risk) and blood pressure.",
        "Nursing: positioning, prevent complications (aspiration, DVT, pressure injury, contractures), early rehabilitation (physiotherapy, speech therapy), and communication support."
      ] },
      { h: "Meningitis", p: "Meningitis is inflammation of the meninges, usually infective (bacterial, viral). Features: fever, severe headache, neck stiffness (nuchal rigidity), photophobia, positive Kernig's and Brudzinski's signs, altered consciousness and, in meningococcal disease, a non-blanching rash. Management: urgent antibiotics (bacterial), isolation as needed, supportive care and monitoring for raised ICP and shock." },
      { h: "Epilepsy and seizures", list: [
        "Epilepsy is a tendency to recurrent seizures from abnormal brain electrical activity.",
        "Generalised tonic-clonic seizures involve loss of consciousness, stiffening then jerking.",
        "During a seizure: protect from injury, do NOT restrain or put anything in the mouth, turn to the side after jerking stops, maintain airway, time the seizure.",
        "Status epilepticus (prolonged/repeated seizures) is an emergency needing IV anticonvulsants (benzodiazepines).",
        "Long-term: anticonvulsant drugs; teach adherence, triggers and safety."
      ] },
      { h: "Parkinson's disease", p: "Parkinson's disease is a progressive degeneration of dopamine-producing neurons in the basal ganglia. The classic triad is tremor (resting, 'pill-rolling'), rigidity and bradykinesia (slow movement), with a shuffling gait, stooped posture and mask-like face. Management: levodopa and other dopaminergic drugs, physiotherapy; nursing focuses on safety, mobility, nutrition, communication and preventing falls." },
      { h: "Neuritis", p: "Neuritis is inflammation of a nerve or nerves causing pain, tingling, numbness and weakness in the area supplied (e.g. peripheral neuritis in diabetes or vitamin B deficiency). Management: treat the cause, control pain (including neuropathic agents), protect the affected part and support function." },
      { h: "Rehabilitative & post-neurosurgical care", list: [
        "Neurological monitoring — regular GCS, pupils, limb power and vital signs.",
        "Post-craniotomy: positioning per surgeon, monitor for raised ICP, CSF leak and infection; ventriculostomy/drain care.",
        "Rehabilitation: physiotherapy, occupational and speech therapy; prevent contractures, DVT and pressure injuries.",
        "Family education for home care of clients with neurological deficits."
      ] },
      { h: "Nursing management (general neurological)", list: [
        "Perform frequent, accurate neuro-observations and report changes early.",
        "Maintain airway, oxygenation and safety (seizure and fall precautions).",
        "Prevent complications of immobility — aspiration, DVT, pressure injury, contractures.",
        "Support communication, nutrition (swallow assessment), elimination and psychological needs.",
        "Educate the client and family on rehabilitation, medication and warning signs."
      ] },
      { h: "Clinical relevance", p: "In neurological emergencies, the nurse's serial observations are the early-warning system: a falling GCS, unequal pupils or Cushing's triad signal rising ICP and demand immediate action. Rapid stroke recognition (FAST) and seizure safety prevent death and disability." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the components of the Glasgow Coma Scale and its clinical use.",
      "Explain the early and late signs of raised intracranial pressure and its management.",
      "Differentiate ischaemic from haemorrhagic stroke and describe acute nursing care.",
      "Outline the immediate nursing actions during and after a generalised seizure.",
      "Describe the clinical features and nursing management of a client with Parkinson's disease."
    ],
    assessment: [
      { type: "mcq", q: "The MOST sensitive early indicator of a client's neurological status is:", options: ["Level of consciousness", "Pupil size", "Blood pressure", "Temperature"], answer: 0, rationale: "A change in level of consciousness is the earliest and most sensitive sign of neurological deterioration." },
      { type: "mcq", q: "Cushing's triad (rising BP with widening pulse pressure, bradycardia, irregular respirations) is a LATE sign of:", options: ["Hypoglycaemia", "Shock", "Raised intracranial pressure", "Seizure"], answer: 2, rationale: "Cushing's triad indicates dangerously raised ICP — a neurological emergency." },
      { type: "mcq", q: "To help reduce raised intracranial pressure, the nurse should position the client:", options: ["Flat and prone", "Trendelenburg", "With the neck flexed", "Head of bed elevated ~30 degrees, head neutral"], answer: 3, rationale: "Head elevation with a neutral neck promotes venous drainage and lowers ICP." },
      { type: "mcq", q: "During a tonic-clonic seizure, the nurse should:", options: ["Restrain the limbs firmly", "Protect the client from injury and never force anything into the mouth", "Insert a spoon between the teeth", "Give oral fluids immediately"], answer: 1, rationale: "Protect from injury and maintain airway; restraint and mouth objects cause harm." },
      { type: "mcq", q: "The FAST tool for recognising stroke stands for Face, Arm, Speech and:", options: ["Temperature", "Touch", "Time", "Tremor"], answer: 2, rationale: "FAST = Face droop, Arm weakness, Speech difficulty, Time to call for help — 'time is brain'." },
      { type: "mcq", q: "A CT scan is done urgently in stroke primarily to:", options: ["Distinguish ischaemic from haemorrhagic stroke", "Measure blood sugar", "Check the kidneys", "Assess the lungs"], answer: 0, rationale: "Thrombolysis is dangerous in haemorrhagic stroke, so CT must exclude bleeding first." },
      { type: "mcq", q: "Neck stiffness, photophobia and positive Kernig's sign suggest:", options: ["Parkinson's disease", "Epilepsy", "Neuritis", "Meningitis"], answer: 3, rationale: "Meningeal irritation produces nuchal rigidity, photophobia and positive Kernig's/Brudzinski's signs." },
      { type: "mcq", q: "The classic triad of Parkinson's disease is tremor, rigidity and:", options: ["Fever", "Bradykinesia", "Photophobia", "Hyperreflexia"], answer: 1, rationale: "Loss of basal-ganglia dopamine causes resting tremor, rigidity and bradykinesia." },
      { type: "mcq", q: "Prolonged or repeated seizures without recovery of consciousness (status epilepticus) require:", options: ["No treatment", "Oral fluids only", "Emergency IV anticonvulsants (e.g. benzodiazepines)", "Discharge home"], answer: 2, rationale: "Status epilepticus is life-threatening and needs urgent IV anticonvulsant therapy." },
      { type: "mcq", q: "A stroke client with dysphagia is at particular risk of:", options: ["Aspiration pneumonia", "Hypertension", "Diabetes", "Anaemia"], answer: 0, rationale: "Impaired swallowing risks aspiration of food/fluids into the lungs, causing pneumonia." }
      , { type: "fill", q: "The scale used to objectively assess level of consciousness is the ____ Coma Scale.", accept: ["Glasgow"], rationale: "The Glasgow Coma Scale scores eye, verbal and motor responses (3-15)." }
      , { type: "fill", q: "Loss or impairment of the ability to speak or understand language after a stroke is called ____.", accept: ["aphasia", "dysphasia"], rationale: "Aphasia/dysphasia is a language deficit common after stroke affecting speech centres." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "msn-17-musculoskeletal",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Musculoskeletal Disorders (Overview)",
    readMinutes: 24,
    summary: "Musculoskeletal assessment; fractures and their healing and management (immobilisation, cast and traction care); sprains and dislocations; osteoarthritis and rheumatoid arthritis; osteoporosis; osteomyelitis; amputation care; and the nursing management of the orthopaedic client, including neurovascular assessment and complication prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Musculoskeletal assessment", p: "Assess pain, swelling, deformity, range of motion, muscle strength, gait and function. Crucially, perform neurovascular assessment of the affected limb — the '6 Ps': Pain, Pallor, Pulselessness, Paraesthesia, Paralysis and Poikilothermia (coolness) — to detect compromised circulation early." },
      { h: "Fractures — types", list: [
        "Closed (simple) — skin intact; Open (compound) — bone breaks the skin (infection risk).",
        "Complete vs incomplete (greenstick in children).",
        "Comminuted — bone shattered into fragments; Impacted — ends driven together.",
        "Pathological — through diseased/weak bone (e.g. osteoporosis, tumour).",
        "By pattern — transverse, oblique, spiral."
      ] },
      { h: "Fracture healing", p: "Bone heals in stages: haematoma formation → inflammation → soft callus (fibrocartilage) → hard (bony) callus → remodelling. Healing is aided by good blood supply, immobilisation, nutrition (calcium, vitamin D, protein) and youth; delayed by infection, poor blood supply, movement, smoking and old age." },
      { h: "Fracture management", list: [
        "Reduction — restoring alignment (closed manipulation or open surgical reduction).",
        "Immobilisation — cast, splint, traction, or internal/external fixation.",
        "Rehabilitation — restoring strength and function.",
        "First aid: immobilise, control bleeding, cover open wounds, check neurovascular status, do not attempt to straighten."
      ] },
      { h: "Cast and traction care", list: [
        "Cast: allow to dry, elevate the limb, check neurovascular status and for tightness/pressure, keep dry, do not insert objects; report severe pain, swelling, numbness or foul smell.",
        "Traction: maintain correct alignment and continuous pull; weights hang freely and are never removed without order; check ropes/pulleys and pin sites (for infection); prevent complications of immobility.",
        "Neurovascular checks are performed regularly on any immobilised limb."
      ] },
      { h: "Sprains and dislocations", list: [
        "Sprain — overstretch/tear of a ligament; strain — of a muscle/tendon; treat with RICE (Rest, Ice, Compression, Elevation).",
        "Dislocation — displacement of a bone from its joint; causes pain, deformity and loss of movement; needs prompt reduction and immobilisation; check neurovascular status."
      ] },
      { h: "Arthritis", figure: {
        caption: "Osteoarthritis vs rheumatoid arthritis.",
        svg: '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Osteoarthritis vs rheumatoid arthritis"><g font-family="sans-serif"><rect x="10" y="15" width="540" height="145" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><line x1="200" y1="15" x2="200" y2="160" stroke="#15803D" stroke-width="1.5"/><line x1="10" y1="48" x2="550" y2="48" stroke="#15803D" stroke-width="1.5"/><text x="105" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Osteoarthritis</text><text x="375" y="37" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Rheumatoid arthritis</text><g font-size="10.5" fill="#0F4C3A"><text x="20" y="72">Degenerative "wear and tear"</text><text x="210" y="72">Autoimmune, systemic</text><text x="20" y="98">Cartilage loss, older age</text><text x="210" y="98">Synovial inflammation</text><text x="20" y="124">Worse with activity</text><text x="210" y="124">Morning stiffness, symmetrical</text><text x="20" y="150">Large weight-bearing joints</text><text x="210" y="150">Small joints, deformity, nodules</text></g></g></svg>'
      } },
      { h: "Osteoarthritis and rheumatoid arthritis", p: "Osteoarthritis is degenerative cartilage loss in weight-bearing joints causing pain worse with activity and stiffness relieved by rest; managed with analgesia, weight control, exercise and joint replacement. Rheumatoid arthritis is a chronic autoimmune inflammation of synovial joints, symmetrical, with morning stiffness, swelling, deformity and systemic features; managed with DMARDs, NSAIDs, steroids and physiotherapy." },
      { h: "Osteoporosis", p: "Osteoporosis is reduced bone density and quality, making bones fragile and prone to fracture (hip, spine, wrist), common in postmenopausal women and the elderly. Prevention/management: adequate calcium and vitamin D, weight-bearing exercise, fall prevention, and bisphosphonates. Nursing focuses on safety and fall prevention." },
      { h: "Osteomyelitis", p: "Osteomyelitis is bone infection (often Staphylococcus aureus) via bloodstream, open fracture or surgery. Features: bone pain, fever, swelling, redness and drainage. Management: prolonged antibiotics, sometimes surgical debridement; nursing includes pain relief, immobilisation, wound care and monitoring." },
      { h: "Amputation care", list: [
        "Pre-op: prepare psychologically; post-op: monitor stump for bleeding and infection.",
        "Position to prevent contractures; manage phantom limb pain (real and treated).",
        "Stump care, bandaging for shaping, early mobilisation and prosthesis rehabilitation.",
        "Emotional support for body-image change."
      ] },
      { h: "Nursing management (general orthopaedic)", list: [
        "Perform regular neurovascular checks (the 6 Ps) on affected limbs.",
        "Manage pain; maintain correct positioning, cast/traction and alignment.",
        "Prevent complications of immobility — DVT, pressure injury, pneumonia, constipation, contractures, and compartment syndrome.",
        "Promote mobility, physiotherapy and activities of daily living within limits.",
        "Educate on cast/wound care, medication, nutrition and safe activity."
      ] },
      { h: "Compartment syndrome — a key emergency", p: "Compartment syndrome is dangerously raised pressure within a muscle compartment (often after fracture or a tight cast) that compromises circulation. Hallmark: severe pain out of proportion, worse on passive stretch, with the other Ps. It is an emergency — loosen constricting casts/dressings, keep the limb at heart level, notify the surgeon; a fasciotomy may be needed to save the limb." },
      { h: "Clinical relevance", p: "Fractures and arthritis are among the most common ward and community problems. Vigilant neurovascular assessment allows early detection of limb-threatening compartment syndrome, while complication prevention and rehabilitation restore mobility and independence." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Classify fractures and describe the stages of fracture healing.",
      "Explain the nursing care of a client in a plaster cast, including neurovascular assessment.",
      "Differentiate osteoarthritis from rheumatoid arthritis.",
      "Describe compartment syndrome, its warning signs and emergency management.",
      "Outline the nursing management of a client following limb amputation."
    ],
    assessment: [
      { type: "mcq", q: "Neurovascular assessment of an injured limb is summarised by the:", options: ["Six Ps", "Five Fs", "ABCs", "Three Ps"], answer: 0, rationale: "The 6 Ps (Pain, Pallor, Pulselessness, Paraesthesia, Paralysis, Poikilothermia) assess limb circulation." },
      { type: "mcq", q: "A fracture in which the bone breaks through the skin is termed:", options: ["Closed (simple)", "Greenstick", "Open (compound)", "Impacted"], answer: 2, rationale: "An open (compound) fracture breaks the skin, carrying a high infection risk." },
      { type: "mcq", q: "Severe pain out of proportion, worse on passive stretch, in a casted limb suggests:", options: ["Normal healing", "Improvement", "Simple bruising", "Compartment syndrome"], answer: 3, rationale: "This is the hallmark of compartment syndrome, a limb-threatening emergency." },
      { type: "mcq", q: "For a client in skeletal traction, the nurse should ensure that the weights:", options: ["Rest on the floor", "Hang freely and are not removed without an order", "Are increased at will", "Are removed each shift"], answer: 1, rationale: "Traction weights must hang freely to maintain continuous pull; removing them disrupts alignment." },
      { type: "mcq", q: "Rheumatoid arthritis is best described as a:", options: ["Degenerative wear-and-tear disease", "Bacterial bone infection", "Chronic autoimmune inflammatory disease", "Result of a single injury"], answer: 2, rationale: "RA is a systemic autoimmune disease inflaming synovial joints symmetrically." },
      { type: "mcq", q: "First aid for a sprain follows the principle of:", options: ["RICE (Rest, Ice, Compression, Elevation)", "Heat and massage immediately", "Vigorous exercise", "Applying traction"], answer: 0, rationale: "RICE reduces swelling and pain in acute soft-tissue injury." },
      { type: "mcq", q: "Osteoporosis most commonly leads to fractures of the:", options: ["Skull", "Fingers only", "Ribs only", "Hip, spine and wrist"], answer: 3, rationale: "Fragile bones in osteoporosis fracture most often at the hip, vertebrae and wrist." },
      { type: "mcq", q: "Phantom limb pain after amputation is:", options: ["Imaginary and ignored", "A real sensation that should be assessed and treated", "A sign of infection", "Always permanent and untreatable"], answer: 1, rationale: "Phantom limb pain is a genuine neurological phenomenon requiring assessment and management." },
      { type: "mcq", q: "To prevent complications of immobility in an orthopaedic client, the nurse should:", options: ["Encourage complete inactivity", "Restrict all fluids", "Promote position changes, exercises and early mobilisation", "Keep the client flat continuously"], answer: 2, rationale: "Movement and repositioning prevent DVT, pressure injury, pneumonia and contractures." },
      { type: "mcq", q: "The MOST important early nursing check after applying a cast to a limb is:", options: ["Neurovascular status distal to the cast", "The colour of the cast", "The client's appetite", "The room temperature"], answer: 0, rationale: "A tight cast can impair circulation; distal neurovascular checks detect this early." }
      , { type: "fill", q: "The bridging tissue that forms between fracture fragments during healing is called ____.", accept: ["callus"], rationale: "Soft then hard callus bridges the fracture before remodelling." }
      , { type: "fill", q: "Displacement of a bone from its normal position in a joint is called a ____.", accept: ["dislocation"], rationale: "A dislocation is displacement of the articulating bones of a joint." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "msn-18-eye-ent",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Eye & ENT Disorders",
    readMinutes: 24,
    summary: "Common eye disorders — refractive errors, cataract, glaucoma, conjunctivitis; ear disorders — otitis media, hearing loss and vertigo; nose and throat disorders — epistaxis, sinusitis, tonsillitis; instillation of eye/ear drops; and the nursing management of the sensory-impaired client.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Sensory function overview", p: "The eyes and ears are the special sense organs through which most environmental information is received. Impairment reduces safety, communication and independence, so nursing care of sensory disorders combines treating the disease with supporting adaptation and preventing injury." },
      { h: "Eye assessment", p: "Assess visual acuity (Snellen chart), visual fields, pupil reaction, eye movement, redness, discharge, pain and photophobia. Note any sudden vision change — a red flag needing urgent attention." },
      { h: "Refractive errors", list: [
        "Myopia (short-sight) — distant objects blurred.",
        "Hypermetropia (long-sight) — near objects blurred.",
        "Astigmatism — distorted vision from irregular corneal curvature.",
        "Presbyopia — age-related loss of near focus.",
        "Correction: spectacles, contact lenses, or refractive surgery."
      ] },
      { h: "Cataract", p: "A cataract is progressive clouding (opacity) of the lens, mainly age-related, causing gradual painless blurring, glare and reduced vision. Management: surgical removal of the cloudy lens with intraocular lens implant. Post-op nursing: protect the eye (shield), avoid bending, straining, rubbing or heavy lifting, watch for infection and sudden pain (raised pressure), and teach eye-drop use." },
      { h: "Glaucoma", p: "Glaucoma is a group of disorders with raised intraocular pressure (IOP) that damages the optic nerve and causes progressive, irreversible loss of peripheral vision. Open-angle (chronic) is gradual and symptomless early; acute angle-closure causes sudden severe eye pain, red eye, halos and vision loss — an emergency. Management: eye drops to lower IOP (never stop them), laser or surgery. Early detection preserves sight.", figure: {
        caption: "Cataract vs glaucoma — the key difference.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cataract vs glaucoma"><g font-family="sans-serif"><rect x="15" y="20" width="255" height="110" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="142" y="45" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">CATARACT</text><text x="142" y="72" text-anchor="middle" font-size="11" fill="#15803D">Clouding of the lens</text><text x="142" y="95" text-anchor="middle" font-size="10" fill="#15803D">Painless, gradual blur</text><text x="142" y="115" text-anchor="middle" font-size="10" fill="#15803D">Rx: lens surgery + IOL</text><rect x="290" y="20" width="255" height="110" rx="9" fill="#0F4C3A" stroke="#15803D" stroke-width="2"/><text x="417" y="45" text-anchor="middle" font-size="13" font-weight="700" fill="#F0FDF4">GLAUCOMA</text><text x="417" y="72" text-anchor="middle" font-size="11" fill="#DCFCE7">Raised eye pressure</text><text x="417" y="95" text-anchor="middle" font-size="10" fill="#DCFCE7">Optic nerve damage</text><text x="417" y="115" text-anchor="middle" font-size="10" fill="#DCFCE7">Rx: drops to lower IOP</text></g></svg>'
      } },
      { h: "Conjunctivitis", p: "Conjunctivitis is inflammation of the conjunctiva (bacterial, viral or allergic), causing redness, discharge, itching and gritty sensation. It is often highly contagious. Management: appropriate drops, strict hand hygiene, avoid sharing towels, and no eye rubbing to prevent spread." },
      { h: "Ear disorders", list: [
        "Otitis media — middle-ear infection, common in children: earache, fever, hearing loss, possible discharge if the eardrum perforates; managed with antibiotics and analgesia.",
        "Hearing loss — conductive (outer/middle ear, e.g. wax, otitis) or sensorineural (inner ear/nerve); managed by treating the cause, hearing aids or surgery.",
        "Vertigo (e.g. Ménière's disease) — spinning sensation with nausea and tinnitus; ensure safety and prevent falls."
      ] },
      { h: "Nose and throat disorders", list: [
        "Epistaxis (nosebleed) — sit up, lean forward, pinch the soft part of the nose for 10-15 minutes, apply cold; seek help if uncontrolled.",
        "Sinusitis — inflammation of the sinuses: facial pain/pressure, nasal congestion, discharge; treated with decongestants, steam and antibiotics if bacterial.",
        "Tonsillitis — inflamed tonsils: sore throat, fever, dysphagia; managed with analgesia, fluids, antibiotics if bacterial; tonsillectomy for recurrent cases (watch for post-op bleeding — frequent swallowing is a warning sign)."
      ] },
      { h: "Instillation of eye drops", list: [
        "Wash hands; ask the client to look up; gently pull down the lower lid to form a pocket.",
        "Drop into the conjunctival sac (not directly on the cornea); avoid touching the eye with the dropper.",
        "Apply gentle pressure to the inner canthus to reduce systemic absorption; wait 5 minutes between different drops."
      ] },
      { h: "Instillation of ear drops", list: [
        "Warm drops to body temperature (cold drops cause dizziness).",
        "For adults, pull the pinna up and back; for young children, down and back, to straighten the canal.",
        "Keep the client lying on the side for a few minutes after instillation."
      ] },
      { h: "Nursing management (sensory)", list: [
        "Ensure safety for the visually or hearing-impaired (orientation, clear pathways, communication aids).",
        "Teach correct eye/ear drop technique and adherence (especially glaucoma drops).",
        "Reinforce infection-prevention measures (hand hygiene, no rubbing, no sharing towels).",
        "Support communication and independence; provide psychological support for sensory loss.",
        "Emphasise post-operative eye precautions and recognising warning signs."
      ] },
      { h: "Clinical relevance", p: "Cataract and glaucoma are leading causes of blindness in Bangladesh, much of it preventable. Nurses promote early detection, safe eye surgery recovery, adherence to sight-saving glaucoma drops, and infection control for contagious conjunctivitis." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Differentiate cataract from glaucoma in pathology, symptoms and management.",
      "Describe the post-operative nursing care of a client after cataract surgery.",
      "Explain the first-aid and nursing management of epistaxis.",
      "Describe the correct technique for instilling eye and ear drops.",
      "Discuss the nursing management of a client with a sensory (visual or hearing) impairment."
    ],
    assessment: [
      { type: "mcq", q: "A cataract is best defined as:", options: ["Clouding (opacity) of the lens", "Raised eye pressure", "Inflammation of the conjunctiva", "Detachment of the retina"], answer: 0, rationale: "A cataract is progressive lens opacity causing painless blurred vision." },
      { type: "mcq", q: "Glaucoma damages vision primarily through:", options: ["Clouding of the lens", "Bacterial infection of the eyelid", "Raised intraocular pressure injuring the optic nerve", "Refractive error"], answer: 2, rationale: "Raised IOP damages the optic nerve, causing irreversible peripheral vision loss." },
      { type: "mcq", q: "A key teaching point for a client on glaucoma eye drops is to:", options: ["Stop them when vision feels normal", "Use them only at night occasionally", "Share the drops with family", "Use them regularly and never stop without advice"], answer: 3, rationale: "Consistent, lifelong drop use controls IOP; stopping risks irreversible sight loss." },
      { type: "mcq", q: "The correct first-aid position for a client with epistaxis is to:", options: ["Lie flat and tilt the head back", "Sit up, lean forward and pinch the soft part of the nose", "Lie on the back", "Blow the nose hard"], answer: 1, rationale: "Sitting forward and pinching prevents blood being swallowed/aspirated and helps control bleeding." },
      { type: "mcq", q: "When instilling eye drops, the nurse should place the drop:", options: ["Directly onto the cornea", "On the eyelashes", "Into the lower conjunctival sac", "In the inner canthus only"], answer: 2, rationale: "Drops go into the lower conjunctival sac to avoid corneal trauma and blink loss." },
      { type: "mcq", q: "To straighten the ear canal in an ADULT before ear drops, the pinna is pulled:", options: ["Up and back", "Down and back", "Straight forward", "Not moved"], answer: 0, rationale: "In adults the pinna is pulled up and back; in young children, down and back." },
      { type: "mcq", q: "Frequent swallowing in a child after tonsillectomy is a warning sign of:", options: ["Normal recovery", "Hunger", "Improvement", "Post-operative bleeding"], answer: 3, rationale: "Repeated swallowing may indicate blood trickling down the throat from post-tonsillectomy haemorrhage." },
      { type: "mcq", q: "After cataract surgery, the nurse instructs the client to avoid:", options: ["Wearing the eye shield", "Bending, straining and rubbing the eye", "Instilling prescribed drops", "Resting"], answer: 1, rationale: "Activities that raise intraocular pressure or introduce infection are avoided post cataract surgery." },
      { type: "mcq", q: "Sudden severe eye pain, redness, halos around lights and vision loss indicate:", options: ["Chronic open-angle glaucoma", "Simple conjunctivitis", "Acute angle-closure glaucoma (an emergency)", "Presbyopia"], answer: 2, rationale: "Acute angle-closure glaucoma is a sight-threatening emergency needing urgent IOP reduction." },
      { type: "mcq", q: "Conjunctivitis spread is best prevented by:", options: ["Strict hand hygiene and not rubbing the eyes", "Sharing towels", "Rubbing both eyes", "Ignoring the discharge"], answer: 0, rationale: "Hand hygiene and avoiding contact/sharing prevent transmission of contagious conjunctivitis." }
      , { type: "fill", q: "The instrument/chart used to test visual acuity is the ____ chart.", accept: ["Snellen"], rationale: "The Snellen chart measures distance visual acuity." }
      , { type: "fill", q: "A nosebleed is medically termed ____.", accept: ["epistaxis"], rationale: "Epistaxis is bleeding from the nose." }
    ]
  },

  /* ============ TOPIC 19 ============ */
  {
    id: "msn-19-skin-burns",
    unit: "Unit 4 · Special Areas of Adult Care",
    title: "Skin Disorders & Burns",
    readMinutes: 26,
    summary: "Functions of the skin; common skin disorders — infections, dermatitis/eczema, psoriasis, drug reactions and Stevens-Johnson syndrome; and burns in depth — classification by depth and extent (rule of nines), pathophysiology, fluid resuscitation, and phased medical and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the skin", list: [
        "Protection — a barrier against microbes, injury and chemicals.",
        "Temperature regulation — through sweating and blood-vessel control.",
        "Sensation — touch, pain, temperature, pressure.",
        "Fluid balance — prevents excess water loss.",
        "Vitamin D synthesis and excretion of some wastes."
      ] },
      { h: "Skin assessment", p: "Assess skin colour, temperature, moisture, turgor and integrity; describe lesions by type (macule, papule, vesicle, pustule, plaque, ulcer), distribution, colour, size, and associated itching, pain or exudate. Accurate description guides diagnosis and monitoring of response to treatment." },
      { h: "Skin infections", list: [
        "Bacterial — impetigo, cellulitis, folliculitis, boils (often staphylococcal/streptococcal).",
        "Fungal — ringworm (tinea), candidiasis; thrive in warm moist areas.",
        "Viral — herpes simplex, herpes zoster (shingles), warts.",
        "Parasitic — scabies (intense itching, worse at night), pediculosis (lice).",
        "Management: appropriate antimicrobials, hygiene, keeping skin clean and dry, and preventing spread."
      ] },
      { h: "Dermatitis / eczema and psoriasis", list: [
        "Dermatitis (eczema) — inflammation with redness, itching, vesicles and scaling; contact dermatitis follows an irritant/allergen. Manage: avoid triggers, emollients, topical steroids, antihistamines.",
        "Psoriasis — chronic autoimmune disorder with thick, silvery, scaly plaques on extensor surfaces from rapid skin-cell turnover; managed with emollients, topical steroids/vitamin D analogues, phototherapy and systemic agents."
      ] },
      { h: "Drug reactions & Stevens-Johnson syndrome", p: "Drug reactions range from mild rash and urticaria to severe, life-threatening reactions. Stevens-Johnson syndrome (SJS) and toxic epidermal necrolysis (TEN) are severe reactions (often to drugs) causing widespread blistering and detachment of skin and mucous membranes — a dermatological emergency treated like a burn: stop the drug, fluid/electrolyte support, infection control, wound care and specialist referral." },
      { h: "General skin-care nursing", list: [
        "Assess lesions (type, distribution, colour, itching, exudate) and document.",
        "Keep skin clean and appropriately moist; avoid irritants and scratching.",
        "Apply topical treatments correctly; relieve itching and pain.",
        "Prevent secondary infection and spread; educate on triggers and skin care."
      ] },
      { h: "Burns — classification by depth", figure: {
        caption: "Classification of burns by depth.",
        svg: '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Burn depth classification"><g font-family="sans-serif"><rect x="10" y="20" width="175" height="140" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="97" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Superficial</text><text x="97" y="62" text-anchor="middle" font-size="10" fill="#15803D">(1st degree)</text><text x="97" y="90" text-anchor="middle" font-size="10" fill="#15803D">Epidermis only</text><text x="97" y="110" text-anchor="middle" font-size="10" fill="#15803D">Red, painful, dry</text><text x="97" y="130" text-anchor="middle" font-size="10" fill="#15803D">No blisters</text><rect x="192" y="20" width="175" height="140" rx="9" fill="#22C55E" stroke="#15803D" stroke-width="2"/><text x="279" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="#F0FDF4">Partial-thickness</text><text x="279" y="62" text-anchor="middle" font-size="10" fill="#F0FDF4">(2nd degree)</text><text x="279" y="90" text-anchor="middle" font-size="10" fill="#F0FDF4">Epidermis + dermis</text><text x="279" y="110" text-anchor="middle" font-size="10" fill="#F0FDF4">Blisters, very painful</text><text x="279" y="130" text-anchor="middle" font-size="10" fill="#F0FDF4">Moist, red</text><rect x="374" y="20" width="176" height="140" rx="9" fill="#0F4C3A" stroke="#15803D" stroke-width="2"/><text x="462" y="45" text-anchor="middle" font-size="12" font-weight="700" fill="#F0FDF4">Full-thickness</text><text x="462" y="62" text-anchor="middle" font-size="10" fill="#DCFCE7">(3rd degree)</text><text x="462" y="90" text-anchor="middle" font-size="10" fill="#DCFCE7">Through dermis</text><text x="462" y="110" text-anchor="middle" font-size="10" fill="#DCFCE7">White/charred, dry</text><text x="462" y="130" text-anchor="middle" font-size="10" fill="#DCFCE7">Painless (nerves gone)</text></g></svg>'
      } },
      { h: "Burns — estimating extent (rule of nines)", p: "The extent of burn is estimated as % total body surface area (TBSA). The rule of nines (adult): head 9%, each arm 9%, each leg 18%, front trunk 18%, back trunk 18%, and perineum 1%. Accurate estimation guides fluid resuscitation. Burns >15-20% TBSA cause major fluid shifts and systemic effects." },
      { h: "Burns — pathophysiology", p: "In major burns, damaged capillaries leak plasma into tissues, causing massive fluid loss, hypovolaemia and 'burn shock', with oedema, electrolyte imbalance and haemoconcentration in the first 24-48 hours. Later, fluid shifts back and infection becomes the leading threat. Inhalation injury and airway oedema are life-threatening in facial/neck burns." },
      { h: "Burns — emergency and fluid management", list: [
        "First aid: stop the burning, cool with running water (not ice), remove hot clothing/jewellery, cover with a clean cloth; ensure airway (suspect inhalation injury).",
        "Assess ABC; give high-flow oxygen; establish IV access.",
        "Fluid resuscitation (e.g. Parkland formula: 4 mL × body weight (kg) × %TBSA of Ringer's lactate in 24 h, half in the first 8 hours from the time of injury).",
        "Monitor urine output (aim ~0.5-1 mL/kg/h) as the best guide to adequate resuscitation; insert a catheter.",
        "Pain relief (IV opioids), tetanus prophylaxis, and NG tube if ileus."
      ] },
      { h: "Burns — ongoing and nursing management", list: [
        "Strict asepsis and infection prevention (leading cause of burn death); wound cleansing and dressings, topical antimicrobials.",
        "Maintain fluid, electrolyte and nutritional support (high-protein, high-calorie for hypermetabolism).",
        "Pain control; position to prevent contractures; early physiotherapy.",
        "Monitor for complications — shock, infection/sepsis, respiratory failure, renal failure, contractures.",
        "Psychological support and rehabilitation for disfigurement and function; skin grafting for deep burns."
      ] },
      { h: "Clinical relevance", p: "Burns are common and often preventable injuries in Bangladesh. Correct first aid, accurate TBSA estimation, timely fluid resuscitation guided by urine output, and rigorous infection control are the nursing priorities that determine survival and functional outcome." }
    ],
    references: REF_MSN,
    examQuestions: [
      "List the functions of the skin and describe common types of skin infection.",
      "Differentiate dermatitis, psoriasis and Stevens-Johnson syndrome.",
      "Classify burns by depth and explain the rule of nines.",
      "Describe the pathophysiology of burn shock and the principles of fluid resuscitation.",
      "Outline the nursing management of a client with major burns."
    ],
    assessment: [
      { type: "mcq", q: "A full-thickness (third-degree) burn is characteristically:", options: ["Painless with a white or charred, dry appearance", "Very painful with blisters", "Only red and dry", "Always superficial"], answer: 0, rationale: "Full-thickness burns destroy nerve endings, so they are painless with a leathery white/charred surface." },
      { type: "mcq", q: "Using the rule of nines in an adult, one entire leg represents approximately:", options: ["9%", "36%", "18%", "4.5%"], answer: 2, rationale: "Each whole lower limb is about 18% TBSA in the adult rule of nines." },
      { type: "mcq", q: "The BEST indicator of adequate fluid resuscitation in a burn client is:", options: ["Blood pressure alone", "Skin colour", "Body temperature", "Hourly urine output (~0.5-1 mL/kg/h)"], answer: 3, rationale: "Urine output reflects renal perfusion and is the most reliable guide to resuscitation adequacy." },
      { type: "mcq", q: "In the first 24-48 hours after a major burn, the priority threat is:", options: ["Infection", "Hypovolaemic (burn) shock from fluid loss", "Contractures", "Depression"], answer: 1, rationale: "Massive capillary fluid loss causes burn shock early; infection dominates later." },
      { type: "mcq", q: "Immediate first aid for a thermal burn includes:", options: ["Applying ice directly", "Applying butter or toothpaste", "Cooling with running water and removing hot clothing", "Bursting the blisters"], answer: 2, rationale: "Cool running water limits injury; ice, home remedies and bursting blisters cause harm." },
      { type: "mcq", q: "Stevens-Johnson syndrome is best managed by:", options: ["Stopping the drug and treating like a burn with fluids and infection control", "Continuing the causative drug", "Ignoring the rash", "Applying heat"], answer: 0, rationale: "SJS is a drug emergency; the culprit drug is stopped and burn-type supportive care given." },
      { type: "mcq", q: "The Parkland formula is used to calculate:", options: ["Drug doses", "Burn depth", "Calorie needs only", "Fluid replacement volume in burns"], answer: 3, rationale: "The Parkland formula estimates crystalloid fluid resuscitation over the first 24 hours in burns." },
      { type: "mcq", q: "The leading cause of death in the later stages of major burns is:", options: ["Hypothermia", "Infection/sepsis", "Boredom", "Hypertension"], answer: 1, rationale: "Loss of the skin barrier makes infection and sepsis the major later threat." },
      { type: "mcq", q: "Intense itching that is worse at night and spreads within a household suggests:", options: ["Psoriasis", "Cataract", "Scabies", "Cellulitis"], answer: 2, rationale: "Scabies (mite infestation) causes intense nocturnal itching and household spread." },
      { type: "mcq", q: "A facial/neck burn is especially dangerous because of the risk of:", options: ["Inhalation injury and airway oedema", "Constipation", "Weight gain", "Hair loss only"], answer: 0, rationale: "Burns of the face/neck threaten the airway from inhalation injury and swelling." }
      , { type: "fill", q: "The method for estimating the percentage body surface area burned in adults is the rule of ____.", accept: ["nines", "nine"], rationale: "The rule of nines divides the body into areas of 9% (or multiples)." }
      , { type: "fill", q: "A severe drug reaction causing widespread skin and mucosal blistering is ____ syndrome.", accept: ["Stevens-Johnson", "Stevens Johnson", "stevens-johnson"], rationale: "Stevens-Johnson syndrome is a severe, life-threatening mucocutaneous drug reaction." }
    ]
  },

  /* ============ TOPIC 20 ============ */
  {
    id: "msn-20-oncology-critical",
    unit: "Unit 4 · Special Areas of Adult Care",
    title: "Oncology Nursing & Care of the Critically Ill / Emergency",
    readMinutes: 27,
    summary: "Cancer — pathophysiology, warning signs, staging, treatment modalities and the nursing management of chemotherapy and radiotherapy; palliative care; and care of the critically ill — priorities of emergency assessment, cardiopulmonary resuscitation (BLS), and the nurse's role in emergencies.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is cancer?", p: "Cancer is a group of diseases characterised by uncontrolled, abnormal cell growth that invades local tissue (invasion) and spreads to distant sites (metastasis). Benign tumours are localised and non-invasive; malignant tumours invade and metastasise. Carcinogenesis progresses through initiation, promotion and progression, often over years." },
      { h: "Risk factors and carcinogens", list: [
        "Chemical — tobacco (the leading preventable cause), asbestos, some dyes.",
        "Physical — ionising and ultraviolet radiation.",
        "Biological — viruses (HPV → cervical cancer; hepatitis B/C → liver cancer).",
        "Lifestyle/diet, chronic inflammation, genetics and family history.",
        "Age and immunosuppression."
      ] },
      { h: "Warning signs of cancer (CAUTION)", list: [
        "C — Change in bowel or bladder habits.",
        "A — A sore that does not heal.",
        "U — Unusual bleeding or discharge.",
        "T — Thickening or a lump.",
        "I — Indigestion or difficulty swallowing.",
        "O — Obvious change in a wart or mole.",
        "N — Nagging cough or hoarseness."
      ] },
      { h: "Diagnosis and staging", p: "Diagnosis uses biopsy (the definitive test), imaging (X-ray, CT, MRI, ultrasound), endoscopy and tumour markers. The TNM system stages cancer by Tumour size (T), lymph Node involvement (N) and Metastasis (M); grading describes how abnormal the cells look. Staging guides treatment and prognosis." },
      { h: "Treatment modalities", figure: {
        caption: "The main modalities of cancer treatment.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cancer treatment modalities"><g font-family="sans-serif"><rect x="10" y="45" width="125" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="72" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Surgery</text><text x="72" y="90" text-anchor="middle" font-size="9" fill="#15803D">remove tumour</text><rect x="147" y="45" width="125" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="209" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Radiotherapy</text><text x="209" y="90" text-anchor="middle" font-size="9" fill="#15803D">local radiation</text><rect x="284" y="45" width="130" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="349" y="70" text-anchor="middle" font-size="12" font-weight="700" fill="#0F4C3A">Chemotherapy</text><text x="349" y="90" text-anchor="middle" font-size="9" fill="#15803D">systemic drugs</text><rect x="426" y="45" width="124" height="60" rx="8" fill="#22C55E" stroke="#15803D" stroke-width="2"/><text x="488" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#F0FDF4">Targeted /</text><text x="488" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#F0FDF4">immune</text><text x="488" y="98" text-anchor="middle" font-size="9" fill="#F0FDF4">+ hormonal</text></g></svg>'
      } },
      { h: "Chemotherapy — nursing management", list: [
        "Chemotherapy kills rapidly dividing cells but also harms normal fast-growing cells (marrow, GI lining, hair follicles).",
        "Side-effects: bone-marrow suppression (anaemia, neutropenia → infection, thrombocytopenia → bleeding), nausea/vomiting, alopecia, mucositis, fatigue.",
        "Nursing: neutropenic precautions and infection monitoring, antiemetics, mouth and skin care, bleeding precautions, safe cytotoxic handling.",
        "Extravasation of vesicant drugs damages tissue — monitor the IV site closely."
      ] },
      { h: "Radiotherapy — nursing management", list: [
        "Uses ionising radiation to destroy cancer cells locally.",
        "Skin reactions (erythema, dryness): keep the marked area clean and dry, avoid rubbing, sun, heat and harsh soaps; do not wash off skin markings.",
        "Fatigue, and site-specific effects (e.g. mucositis, diarrhoea).",
        "For sealed-source (brachytherapy): observe radiation-safety principles — time, distance, shielding."
      ] },
      { h: "Palliative and end-of-life care", p: "Palliative care improves the quality of life of clients with life-limiting illness by relieving pain and other symptoms and giving psychological, social and spiritual support. Priorities: effective pain and symptom control (the WHO ladder), dignity, honest communication, family support and, at the end of life, comfort-focused care. It is offered alongside or after curative treatment." },
      { h: "Care of the critically ill — priorities", p: "Critically ill clients need continuous monitoring and rapid response. Assessment follows the ABCDE approach: Airway, Breathing, Circulation, Disability (neurological), Exposure. Priorities are set by threat to life — airway first. Continuous monitoring of vital signs, ECG, oxygenation, urine output and consciousness detects deterioration early." },
      { h: "Emergency assessment and triage", list: [
        "Rapid primary survey (ABCDE) to find and treat immediate threats.",
        "Triage — sorting clients by severity so the most urgent are treated first.",
        "Recognise and act on early-warning signs (falling BP, rising RR/pulse, falling consciousness/urine output).",
        "Have emergency equipment, oxygen and drugs ready and checked."
      ] },
      { h: "Basic life support (BLS) & CPR", list: [
        "Check responsiveness and call for help; check breathing and pulse.",
        "If no pulse/breathing, begin CPR: high-quality chest compressions at 100-120/min, depth 5-6 cm, allowing full recoil, with minimal interruptions.",
        "Compression-to-ventilation ratio 30:2 (single/two-rescuer adult); attach a defibrillator (AED) as soon as available.",
        "Ensure a firm surface; rotate compressors to avoid fatigue; continue until help/return of circulation.",
        "Ethical considerations: consent, resuscitation status (DNR) and family presence."
      ] },
      { h: "Nursing role in emergencies", list: [
        "Remain calm, prioritise using ABCDE, and act quickly and systematically.",
        "Summon help, initiate BLS, and assist advanced life support.",
        "Prepare and administer emergency drugs and equipment; document actions and times.",
        "Provide reassurance and communicate with the client and family.",
        "Anticipate deterioration and ensure safe handover."
      ] },
      { h: "Clinical relevance", p: "Oncology and critical care demand the highest level of nursing skill: protecting the immunosuppressed cancer client from infection, controlling pain with dignity, and, in emergencies, the ABCDE approach and prompt high-quality CPR that save lives in the crucial first minutes." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define cancer and list the seven warning signs (CAUTION) of cancer.",
      "Describe the main modalities of cancer treatment and the nursing care during chemotherapy.",
      "Explain the nursing care of a client receiving radiotherapy, including skin care.",
      "Discuss the principles of palliative care for a client with advanced cancer.",
      "Describe the ABCDE approach and the steps of adult basic life support (CPR)."
    ],
    assessment: [
      { type: "mcq", q: "The definitive investigation to confirm a cancer diagnosis is:", options: ["Biopsy and histology", "A plain X-ray", "Blood pressure measurement", "Urinalysis"], answer: 0, rationale: "Biopsy with histological examination provides the definitive tissue diagnosis." },
      { type: "mcq", q: "The spread of cancer to distant body sites is called:", options: ["Invasion", "Remission", "Metastasis", "Benign growth"], answer: 2, rationale: "Metastasis is the spread of malignant cells to distant organs." },
      { type: "mcq", q: "A client on chemotherapy with a very low neutrophil count is at greatest risk of:", options: ["Hypertension", "Weight gain", "Constipation only", "Infection"], answer: 3, rationale: "Neutropenia from marrow suppression greatly increases infection risk, requiring neutropenic precautions." },
      { type: "mcq", q: "When caring for skin in the radiotherapy field, the nurse should:", options: ["Scrub the area and remove the markings", "Keep it dry, avoid rubbing/heat/sun and not wash off markings", "Apply ice packs", "Expose it to sunlight"], answer: 1, rationale: "Irradiated skin is fragile; gentle care and preserving treatment markings are essential." },
      { type: "mcq", q: "The recommended rate of chest compressions in adult CPR is:", options: ["40-60 per minute", "150-180 per minute", "100-120 per minute", "As slow as possible"], answer: 2, rationale: "High-quality CPR uses a compression rate of 100-120/min at 5-6 cm depth." },
      { type: "mcq", q: "The compression-to-ventilation ratio in adult CPR is:", options: ["30:2", "15:2", "5:1", "10:2"], answer: 0, rationale: "The standard adult ratio is 30 compressions to 2 breaths." },
      { type: "mcq", q: "In the ABCDE approach to a critically ill client, the FIRST priority is:", options: ["Circulation", "Disability", "Exposure", "Airway"], answer: 3, rationale: "Airway is always assessed and secured first, as its loss is most rapidly fatal." },
      { type: "mcq", q: "The main goal of palliative care is to:", options: ["Cure the disease at any cost", "Improve quality of life and relieve suffering", "Prolong life regardless of comfort", "Stop all medication"], answer: 1, rationale: "Palliative care focuses on comfort, symptom relief and quality of life, not cure." },
      { type: "mcq", q: "Triage in an emergency means:", options: ["Treating clients in order of arrival", "Treating the least ill first", "Sorting clients so the most urgent are treated first", "Ignoring severity"], answer: 2, rationale: "Triage prioritises care based on the severity and urgency of each client's condition." },
      { type: "mcq", q: "The 'C' in the CAUTION warning signs of cancer stands for:", options: ["Change in bowel or bladder habits", "Coughing blood", "Chest pain", "Confusion"], answer: 0, rationale: "'C' = Change in bowel or bladder habits, one of the classic cancer warning signs." }
      , { type: "fill", q: "The staging system that classifies cancer by tumour, node and metastasis is the ____ system.", accept: ["TNM"], rationale: "TNM = Tumour, Node, Metastasis staging." }
      , { type: "fill", q: "The systematic emergency assessment sequence Airway, Breathing, Circulation, Disability, Exposure is abbreviated ____.", accept: ["ABCDE"], rationale: "ABCDE structures the primary survey of a critically ill client." }
    ]
  }
];
