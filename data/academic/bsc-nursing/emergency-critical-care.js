/* ============================================================
   B.Sc. Nursing (4-yr, 2018) · Year 3 · B334 Emergency &
   Critical Care Nursing — 16 topics. Degree-level, authored
   fresh and aligned to the BNMC 2018 syllabus (emergency &
   critical care nursing). Grounded in standard texts:
     • Urden LD, Stacy KM, Lough ME. Critical Care Nursing:
       Diagnosis and Management. Elsevier.
     • Sole ML, Klein DG, Moseley MJ. Introduction to Critical
       Care Nursing. Elsevier.
     • Smeltzer SC, Bare BG, Hinkle JL, Cheever KH. Brunner &
       Suddarth's Textbook of Medical-Surgical Nursing
       (Emergency & Critical Care). Lippincott.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_ECC = [
  "Urden LD, Stacy KM, Lough ME. Critical Care Nursing: Diagnosis and Management. Elsevier.",
  "Sole ML, Klein DG, Moseley MJ. Introduction to Critical Care Nursing. Elsevier.",
  "Smeltzer SC, Bare BG, Hinkle JL, Cheever KH. Brunner & Suddarth's Textbook of Medical-Surgical Nursing (Emergency & Critical Care). Lippincott."
];

window.Academic.topics["bsc-nursing/emergency-critical-care"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "ecc-01-intro",
    unit: "Unit 1 · Foundations of Emergency & Critical Care",
    title: "Introduction to Emergency & Critical Care Nursing & the Nurse's Role",
    readMinutes: 24,
    summary: "Concepts of emergency and critical care nursing, the continuum of care, roles and competencies of the critical care nurse, psychosocial-spiritual-ethical concerns, injury prevention, and end-of-life care in the critical setting.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of emergency & critical care nursing", p: "Emergency nursing is the care of patients of all ages with actual or perceived physical or emotional alterations of health that are undiagnosed or require further intervention, delivered in a time-sensitive, often unpredictable environment. Critical care nursing is the specialty concerned with the care of patients who are experiencing life-threatening or potentially life-threatening problems and who require intensive, continuous nursing surveillance and intervention. Both share a focus on rapid assessment, priority-driven action, and physiological stabilisation." },
      { h: "The care continuum", p: "The critically ill patient moves along a continuum: pre-hospital care and transport → emergency department (ED) resuscitation and triage → intensive care unit (ICU/critical care unit) → step-down / high-dependency unit → ward → rehabilitation and community follow-up. Nursing ensures continuity, safe hand-over (using structured tools such as SBAR — Situation, Background, Assessment, Recommendation) and consistent monitoring across each transition." },
      { h: "Characteristics of the critically ill patient", list: [
        "Physiological instability requiring continuous monitoring (usually 1:1 or 1:2 nurse-to-patient ratio in ICU).",
        "Actual or potential failure of one or more vital organ systems.",
        "Dependence on advanced technology (ventilators, monitors, infusion pumps, dialysis).",
        "Rapidly changing status demanding frequent reassessment and titration of therapy.",
        "High vulnerability to complications, infection and psychological distress."
      ] },
      { h: "Roles of the critical care / emergency nurse", list: [
        "Care provider — direct, priority-based physiological and psychosocial care.",
        "Patient advocate — protecting rights, dignity, informed consent and autonomy.",
        "Educator — teaching patient and family about condition, devices and self-care.",
        "Coordinator / manager — organising the multidisciplinary team and resources.",
        "Communicator — accurate hand-over, documentation and family liaison.",
        "Researcher — using and generating evidence for best practice.",
        "Vigilant monitor — early detection of deterioration (surveillance)."
      ] },
      { h: "Core competencies (Synergy concept)", p: "The AACN Synergy Model holds that patient outcomes are optimised when nurse competencies match patient needs. Key competencies include clinical judgement, clinical inquiry, caring practices, collaboration, systems thinking, response to diversity, advocacy/moral agency, and facilitation of learning. The sicker and less stable the patient, the greater the required nurse competency." },
      { h: "Psychosocial responses of the critically ill", list: [
        "Anxiety and fear of death, pain and loss of control.",
        "Sensory overload (alarms, lights, noise) and sensory deprivation.",
        "Powerlessness, dependency and altered body image.",
        "Communication difficulty (intubation, sedation).",
        "Sleep disruption and disturbance of circadian rhythm."
      ] },
      { h: "ICU delirium & sleep alteration", p: "Delirium is an acute, fluctuating disturbance of attention and cognition affecting up to 60-80% of ventilated ICU patients; it is screened using the CAM-ICU tool. Non-pharmacological prevention (re-orientation, day-night lighting, early mobilisation, minimising sedation, promoting sleep, family presence) is central nursing care and is captured in the ABCDEF bundle (Assess pain, Both spontaneous awakening/breathing trials, Choice of sedation, Delirium monitoring, Early mobility, Family engagement)." },
      { h: "Spiritual & cultural concerns", p: "Critical illness threatens meaning, hope and connection. The nurse assesses spiritual needs, facilitates access to chaplaincy or religious support, respects cultural rituals around illness and death, and supports the family. Culturally competent care avoids assumptions and individualises support." },
      { h: "Ethical & legal issues", list: [
        "Autonomy, beneficence, non-maleficence and justice as guiding principles.",
        "Informed consent and, where the patient cannot consent, surrogate/substitute decision-making and advance directives.",
        "Withholding and withdrawing life-sustaining treatment; do-not-resuscitate (DNR) orders.",
        "Confidentiality and truthful disclosure.",
        "Resource allocation and equitable access to critical care."
      ] },
      { h: "Euthanasia vs withdrawal of futile treatment", p: "Euthanasia is the deliberate act of ending life to relieve suffering and is illegal and unethical in most jurisdictions including Nepal/Bangladesh nursing practice. This is distinct from withholding or withdrawing treatment judged futile, and from the doctrine of double effect (giving adequate analgesia/sedation to relieve suffering even if it may hasten death), which are ethically and legally accepted." },
      { h: "End-of-life & palliative care in the ICU", p: "When cure is no longer possible, care shifts to comfort: effective symptom control (pain, dyspnoea, secretions, agitation), dignity, presence, honest communication and family support. Palliative principles run alongside critical care and are not limited to the final hours. Bereavement support for the family and debriefing for staff are part of holistic end-of-life care." },
      { h: "Injury prevention & the nurse's role", p: "Emergency nurses have a public-health role in injury prevention through community education (road-traffic safety, helmet and seat-belt use, drowning and burn prevention, safe medication storage), advocacy for safety legislation, and health promotion. Prevention reduces the burden of trauma and poisoning that fills emergency departments." },
      { h: "Clinical relevance", p: "Understanding these foundations lets the nurse prioritise physiological stabilisation without losing sight of the person and family. Structured communication, vigilance for deterioration and delirium, and ethically grounded decision-making underpin every subsequent skill in this course." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Define emergency and critical care nursing and describe the care continuum of the critically ill patient.",
      "Discuss the roles and core competencies of the critical care nurse.",
      "Explain the psychosocial and spiritual responses of critically ill patients and relevant nursing interventions.",
      "Differentiate euthanasia from withdrawal of futile treatment and the doctrine of double effect.",
      "Describe the components of the ABCDEF bundle and its role in preventing ICU delirium."
    ],
    assessment: [
      { type: "mcq", q: "The structured hand-over tool recommended for communicating a deteriorating patient is:", options: ["FAST", "SBAR", "AVPU", "SAMPLE"], answer: 1, rationale: "SBAR (Situation, Background, Assessment, Recommendation) standardises hand-over and reduces communication errors." },
      { type: "mcq", q: "According to the AACN Synergy Model, patient outcomes are best when:", options: ["The unit has the newest equipment", "Nurse competencies match patient needs", "The nurse-patient ratio is 1:4", "The physician makes all decisions"], answer: 1, rationale: "Synergy occurs when the nurse's competencies are matched to the acuity and needs of the patient." },
      { type: "mcq", q: "The validated bedside tool used by nurses to screen for delirium in ICU is the:", options: ["Glasgow Coma Scale", "CAM-ICU", "APACHE II", "RASS only"], answer: 1, rationale: "The Confusion Assessment Method for the ICU (CAM-ICU) detects the acute, fluctuating inattention of delirium." },
      { type: "mcq", q: "Giving adequate opioid to relieve a dying patient's pain, accepting it may hasten death, is ethically justified by the:", options: ["Principle of euthanasia", "Doctrine of double effect", "Rule of rescue", "Utilitarian override"], answer: 1, rationale: "The doctrine of double effect permits a foreseen but unintended harmful effect when the primary intent is symptom relief." },
      { type: "mcq", q: "Which is a feature of sensory overload in the ICU rather than deprivation?", options: ["Continuous alarms, bright lights and noise", "Isolation with no visitors", "Absence of clocks and windows", "Monotonous, featureless environment"], answer: 0, rationale: "Overload results from excessive stimuli such as alarms and lighting; deprivation results from too few meaningful stimuli." },
      { type: "mcq", q: "The 'E' in the ABCDEF bundle stands for:", options: ["ECG monitoring", "Early mobility and exercise", "Endotracheal suction", "Enteral feeding"], answer: 1, rationale: "'E' is Early mobility/exercise, which reduces delirium, weakness and length of stay." },
      { type: "mcq", q: "A nurse challenges a plan she believes violates the patient's expressed wishes. This role is best described as:", options: ["Educator", "Advocate / moral agency", "Coordinator", "Researcher"], answer: 1, rationale: "Advocacy and moral agency involve protecting patient rights and voicing their interests." },
      { type: "mcq", q: "Which statement about euthanasia in nursing practice is correct?", options: ["It is the same as withdrawing futile treatment", "It is a routine ICU procedure", "It is illegal and unethical in most jurisdictions", "It is identical to palliative sedation"], answer: 2, rationale: "Euthanasia is the deliberate ending of life and is illegal/unethical in most settings, unlike withdrawal of futile care." },
      { type: "mcq", q: "The typical nurse-to-patient ratio for an unstable ICU patient is approximately:", options: ["1:6", "1:4", "1:1 to 1:2", "1:8"], answer: 2, rationale: "High acuity requires intensive surveillance, so ratios are usually 1:1 or 1:2." },
      { type: "mcq", q: "The nurse's public-health contribution in the emergency setting is best shown by:", options: ["Restraining all patients", "Community injury-prevention education and advocacy", "Limiting family visiting", "Avoiding documentation"], answer: 1, rationale: "Injury prevention through education and advocacy reduces the burden of preventable trauma and poisoning." }
      , { type: "fill", q: "The AACN model matching nurse competencies to patient needs is the ____ model.", accept: ["synergy", "synergy model"], rationale: "The Synergy Model links patient acuity to required nurse competencies." }
      , { type: "fill", q: "The acute, fluctuating disturbance of attention common in ventilated ICU patients is called ____.", accept: ["delirium", "icu delirium"], rationale: "Delirium affects up to 60-80% of ventilated patients and is screened with CAM-ICU." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ecc-02-ed-triage",
    unit: "Unit 1 · Foundations of Emergency & Critical Care",
    title: "The Emergency Department & Triage",
    readMinutes: 24,
    summary: "Organisation and design of the emergency department, the concept and principles of triage, common triage systems and categories, the triage nursing process, and overcrowding and disaster considerations.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of the emergency department (ED)", p: "The ED is the hospital gateway for unscheduled, acute and life-threatening presentations. Its goals are rapid assessment, stabilisation of life-threatening conditions, initiation of definitive care or referral, and safe disposition (admission, transfer, or discharge). It operates 24 hours a day and must handle unpredictable volume and acuity." },
      { h: "Functional zones of the ED", list: [
        "Triage area — first point of contact and prioritisation.",
        "Resuscitation / red zone — for critically ill patients needing immediate intervention.",
        "Acute treatment (majors) — for serious but stable cases.",
        "Ambulatory / minor (fast track) — for minor injuries and illness.",
        "Observation / short-stay unit.",
        "Isolation area — for infectious or contaminated patients.",
        "Decontamination area — for chemical/radiological exposure."
      ] },
      { h: "Definition of triage", p: "Triage (from the French 'trier', to sort) is the process of rapidly sorting patients by the severity and urgency of their condition to determine the priority and place of treatment, so that the sickest patients are seen first and limited resources are used to achieve the greatest good. It is a dynamic process — patients are re-triaged as their condition changes." },
      { h: "Principles of triage", list: [
        "Rapid, brief, focused assessment (usually 2-5 minutes).",
        "Priority based on clinical urgency, not order of arrival.",
        "Continuous re-assessment while waiting.",
        "Right patient, right place, right time.",
        "Life-threatening problems (airway, breathing, circulation) always take precedence."
      ] },
      { h: "Five-level triage scales", p: "Modern EDs use validated five-level scales such as the Emergency Severity Index (ESI, USA) and the Australasian, Canadian and Manchester Triage Scales. Level 1 is the most urgent (immediate, resuscitation) and Level 5 the least urgent (non-urgent). Five-level systems are more reliable and reproducible than older three-level (emergent / urgent / non-urgent) systems.", figure: {
        caption: "Five-level ED triage: category, urgency and target time to be seen (indicative).",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-level triage table."><rect x="20" y="20" width="520" height="30" fill="#0F4C3A"/><text x="60" y="40" font-family="sans-serif" font-size="13" font-weight="700" fill="#DCFCE7">Level</text><text x="180" y="40" font-family="sans-serif" font-size="13" font-weight="700" fill="#DCFCE7">Category</text><text x="400" y="40" font-family="sans-serif" font-size="13" font-weight="700" fill="#DCFCE7">Target time</text><rect x="20" y="50" width="520" height="38" fill="#F0FDF4"/><text x="45" y="74" font-family="sans-serif" font-size="12" fill="#15803D">1</text><text x="180" y="74" font-family="sans-serif" font-size="12" fill="#15803D">Resuscitation / immediate</text><text x="400" y="74" font-family="sans-serif" font-size="12" fill="#15803D">Immediate</text><rect x="20" y="88" width="520" height="38" fill="#DCFCE7"/><text x="45" y="112" font-family="sans-serif" font-size="12" fill="#15803D">2</text><text x="180" y="112" font-family="sans-serif" font-size="12" fill="#15803D">Emergent</text><text x="400" y="112" font-family="sans-serif" font-size="12" fill="#15803D">Within ~10 min</text><rect x="20" y="126" width="520" height="38" fill="#F0FDF4"/><text x="45" y="150" font-family="sans-serif" font-size="12" fill="#15803D">3</text><text x="180" y="150" font-family="sans-serif" font-size="12" fill="#15803D">Urgent</text><text x="400" y="150" font-family="sans-serif" font-size="12" fill="#15803D">Within ~30 min</text><rect x="20" y="164" width="520" height="38" fill="#DCFCE7"/><text x="45" y="188" font-family="sans-serif" font-size="12" fill="#15803D">4</text><text x="180" y="188" font-family="sans-serif" font-size="12" fill="#15803D">Less urgent</text><text x="400" y="188" font-family="sans-serif" font-size="12" fill="#15803D">Within ~60 min</text><rect x="20" y="202" width="520" height="38" fill="#F0FDF4"/><text x="45" y="226" font-family="sans-serif" font-size="12" fill="#15803D">5</text><text x="180" y="226" font-family="sans-serif" font-size="12" fill="#15803D">Non-urgent</text><text x="400" y="226" font-family="sans-serif" font-size="12" fill="#15803D">Within ~120 min</text></svg>'
      } },
      { h: "Emergency Severity Index (ESI) logic", p: "The ESI sorts patients using two questions: (1) Does the patient need immediate life-saving intervention? → Level 1. (2) Is it a high-risk situation, or confused/lethargic, or in severe pain/distress? → Level 2. If neither, the nurse predicts how many resources (labs, imaging, procedures) will be needed: many = Level 3, one = Level 4, none = Level 5. Danger-zone vital signs can up-triage a Level 3 to Level 2." },
      { h: "The triage assessment", list: [
        "Chief complaint and brief history (often using SAMPLE: Signs/symptoms, Allergies, Medications, Past history, Last meal, Events).",
        "Rapid ABCD / general appearance assessment.",
        "Vital signs including pain score and, where relevant, SpO2 and blood glucose.",
        "Assigning a triage category and directing to the right area.",
        "Documentation and re-assessment."
      ] },
      { h: "Triage nurse qualities", p: "The triage nurse should be experienced, with strong assessment and decision-making skills, the ability to work under pressure, good communication, and cultural sensitivity. Under-triage (underestimating severity) risks patient harm; over-triage wastes resources — both must be minimised." },
      { h: "Special triage situations", list: [
        "Paediatric patients — use age-appropriate parameters and paediatric early-warning signs.",
        "Obstetric patients — direct antenatal emergencies appropriately.",
        "Psychiatric / behavioural emergencies — assess risk of self-harm and to others.",
        "Infectious patients — early isolation to prevent spread.",
        "Mass casualty — switch to disaster (START) triage where the goal shifts to the greatest good for the greatest number."
      ] },
      { h: "ED overcrowding & boarding", p: "Overcrowding occurs when demand exceeds capacity; 'boarding' is holding admitted patients in the ED for lack of inpatient beds. Consequences include delayed care, increased errors, ambulance diversion and worse outcomes. Strategies include fast-track streams, rapid assessment, escalation policies and improved patient flow." },
      { h: "Nursing management in triage", list: [
        "Ensure immediate care of life-threatening conditions before full registration.",
        "Maintain patient safety and dignity in the waiting area.",
        "Communicate expected waits and reasons for prioritisation.",
        "Re-triage deteriorating patients promptly.",
        "Accurate, timely documentation for medico-legal safety."
      ] },
      { h: "Clinical relevance", p: "Effective triage is the single most important process determining who lives and dies in a busy ED. A structured five-level system, sound clinical judgement and continuous re-assessment protect the sickest patients when resources are stretched." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Define triage and explain its principles in the emergency department.",
      "Describe a five-level triage scale and give an example patient for each level.",
      "Explain the decision logic of the Emergency Severity Index (ESI).",
      "Discuss the functional zones of a well-designed emergency department.",
      "What is ED overcrowding and boarding, and how can nurses help manage patient flow?"
    ],
    assessment: [
      { type: "mcq", q: "The primary aim of triage is to:", options: ["Register patients in order of arrival", "Sort patients by urgency so the sickest are seen first", "Complete full documentation before care", "Assign patients to specialists"], answer: 1, rationale: "Triage prioritises by clinical urgency rather than arrival order, ensuring the sickest are treated first." },
      { type: "mcq", q: "In a five-level triage scale, Level 1 indicates a patient who:", options: ["Needs immediate life-saving intervention", "Can wait up to 2 hours", "Has a minor injury", "Requires no resources"], answer: 0, rationale: "Level 1 is resuscitation/immediate — requiring life-saving intervention now." },
      { type: "mcq", q: "A confused, lethargic patient in severe distress but not needing immediate resuscitation is ESI level:", options: ["Level 1", "Level 4", "Level 2", "Level 5"], answer: 2, rationale: "High-risk situations or altered mental state/severe distress place the patient at ESI Level 2." },
      { type: "mcq", q: "Under-triage is dangerous because it:", options: ["Underestimates severity and delays needed care", "Wastes resources", "Sends minor cases to resuscitation", "Improves patient flow"], answer: 0, rationale: "Under-triage misclassifies a serious patient as low-priority, risking deterioration and harm." },
      { type: "mcq", q: "The SAMPLE mnemonic used at triage stands for Signs/symptoms, Allergies, Medications, Past history, ____ and Events.", options: ["Last meal", "Level of pain", "Location", "Laboratory"], answer: 0, rationale: "The 'L' in SAMPLE is Last meal (last oral intake), important before possible procedures." },
      { type: "mcq", q: "Which area of the ED is designed for immediate management of critically ill patients?", options: ["Fast track", "Resuscitation (red) zone", "Observation unit", "Registration desk"], answer: 1, rationale: "The resuscitation/red zone is equipped for immediate intervention on the most critical patients." },
      { type: "mcq", q: "In a mass-casualty incident the goal of triage shifts to:", options: ["Treating the most senior person first", "The greatest good for the greatest number", "Seeing patients in arrival order", "Full care for every patient regardless of resources"], answer: 1, rationale: "Disaster triage maximises survivors by directing limited resources where they save the most lives." },
      { type: "mcq", q: "An ED patient initially triaged Level 3 develops a dangerously low blood pressure. The nurse should:", options: ["Wait for the original slot", "Re-triage (up-triage) to a higher priority", "Discharge the patient", "Move the patient to fast track"], answer: 1, rationale: "Triage is dynamic; deterioration mandates immediate re-triage to a higher acuity level." },
      { type: "mcq", q: "'Boarding' in the ED refers to:", options: ["Placing patients on stretchers", "Recording vital signs", "Holding admitted patients in the ED due to no inpatient beds", "Isolating infectious patients"], answer: 2, rationale: "Boarding is holding admitted patients in the ED awaiting ward beds, a major contributor to crowding." },
      { type: "mcq", q: "Which patient should the triage nurse see FIRST?", options: ["A child with an ankle sprain", "An adult with a sore throat for 3 days", "A man with crushing chest pain and sweating", "A woman requesting a prescription refill"], answer: 2, rationale: "Chest pain with diaphoresis suggests acute coronary syndrome — a time-critical, highest-priority presentation." }
      , { type: "fill", q: "Sorting patients by severity to prioritise treatment is called ____.", accept: ["triage"], rationale: "Triage means to sort patients by urgency of need." }
      , { type: "fill", q: "In a five-level scale, the most urgent category is Level ____.", accept: ["1", "one"], rationale: "Level 1 is the resuscitation/immediate category." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ecc-03-icu-environment",
    unit: "Unit 1 · Foundations of Emergency & Critical Care",
    title: "The Critically Ill Patient & the ICU Environment",
    readMinutes: 24,
    summary: "The intensive care unit — its types, design, equipment, admission criteria, monitoring, infection control, the humanising of care, and the effect of the environment on patient and family.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is an ICU?", p: "The intensive care unit (ICU), or critical care unit (CCU), is a specialised, self-contained hospital area providing continuous monitoring and advanced life support to patients with actual or potential life-threatening organ dysfunction. It combines a high nurse-to-patient ratio, advanced technology and a multidisciplinary team." },
      { h: "Types / levels of critical care", list: [
        "Level 1 (ward) — patients at risk of deterioration needing extra observation.",
        "Level 2 (high-dependency unit, HDU) — single-organ support or step-down; ratio about 1:2.",
        "Level 3 (ICU) — advanced respiratory support (mechanical ventilation) and/or two or more organ supports; ratio 1:1.",
        "Specialty units — coronary care (CCU), neuro-ICU, paediatric (PICU), neonatal (NICU), burns and cardiac-surgical ICUs."
      ] },
      { h: "ICU design principles", list: [
        "Central nursing station with direct line of sight to every bed.",
        "Adequate space per bed (piped oxygen, air, suction, multiple power outlets).",
        "Isolation rooms with negative/positive pressure for infection control.",
        "Windows and clocks to preserve orientation and circadian rhythm.",
        "Noise and light control; hand-hygiene stations at every bed.",
        "Ready access to imaging, laboratory and the operating theatre."
      ] },
      { h: "Essential ICU equipment", list: [
        "Multiparameter monitors (ECG, SpO2, non-invasive and invasive BP, temperature, capnography).",
        "Mechanical ventilators and oxygen delivery systems.",
        "Infusion and syringe pumps for precise drug titration.",
        "Defibrillator and fully stocked emergency (crash) cart.",
        "Suction apparatus, resuscitation bag and airway equipment.",
        "Renal replacement (dialysis/CRRT) machines and warming/cooling devices."
      ] },
      { h: "Admission criteria to ICU", p: "Admission is guided by the prioritisation model: Priority 1 — unstable patients needing intensive treatment/monitoring not available elsewhere (e.g. ventilation, vasoactive drugs). Priority 2 — patients needing intensive monitoring who may require immediate intervention. Priority 3 — critically ill with reduced likelihood of recovery who may still benefit. Priority 4 — generally not appropriate (too well or too sick with no benefit expected). Admission should be needs-based, not diagnosis-based alone." },
      { h: "Discharge / step-down criteria", p: "Patients are stepped down when the acute problem is resolving, they no longer need continuous monitoring or organ support, and are haemodynamically and respiratorily stable. Premature discharge risks readmission and higher mortality, so structured discharge planning and hand-over are essential." },
      { h: "Severity & scoring systems", p: "Illness severity and predicted mortality are quantified with tools such as APACHE II (Acute Physiology and Chronic Health Evaluation), SAPS and, for organ dysfunction, the SOFA (Sequential Organ Failure Assessment) score. These support audit, resource planning and communication, though they inform rather than dictate individual decisions." },
      { h: "Continuous monitoring", p: "ICU patients receive continuous surveillance of ECG rhythm, oxygen saturation (SpO2, normal 95-100%), blood pressure, respiratory rate, temperature and often invasive parameters (arterial pressure, central venous pressure, capnography). Trends matter more than single readings; the nurse interprets data in the clinical context and acts on early warning signs." },
      { h: "Infection prevention in the ICU", list: [
        "Strict hand hygiene (WHO 'five moments') — the single most effective measure.",
        "Care bundles to prevent ventilator-associated pneumonia (VAP), central-line-associated bloodstream infection (CLABSI) and catheter-associated UTI (CAUTI).",
        "Aseptic technique for all invasive procedures.",
        "Environmental cleaning, isolation and antimicrobial stewardship.",
        "Head-of-bed elevation 30-45° and oral care with chlorhexidine to reduce VAP."
      ] },
      { h: "Humanising the ICU / the family", p: "The technological environment can dehumanise care. Humanising measures include calling the patient by name, explaining procedures even to sedated patients, open/flexible visiting, family participation in care, diaries, comfortable waiting areas, and honest, compassionate communication. Families experience high anxiety and need information, proximity and reassurance." },
      { h: "Environmental hazards to the patient", list: [
        "Noise-induced sleep disruption and delirium.",
        "Immobility — pressure injuries, venous thromboembolism, ICU-acquired weakness.",
        "Infection from invasive devices.",
        "Alarm fatigue leading to missed critical alarms.",
        "Medication and equipment errors in a complex environment."
      ] },
      { h: "Nursing management in the ICU", list: [
        "Continuous, systematic assessment and prompt response to change.",
        "Meticulous device and skin care; regular repositioning and early mobilisation.",
        "Bundle compliance for VAP, CLABSI, CAUTI and delirium prevention.",
        "Psychological support, orientation and family communication.",
        "Accurate documentation, safe medication administration and alarm management."
      ] },
      { h: "Clinical relevance", p: "The ICU environment is powerful but double-edged: it can save life while causing harm through infection, immobility, sleep loss and delirium. Skilled nursing surveillance, bundle-based prevention and humanised care determine whether the environment helps or harms." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Describe the levels of critical care and the criteria for ICU admission.",
      "Discuss the design principles and essential equipment of an intensive care unit.",
      "Explain the measures used to prevent infection in the ICU.",
      "How can nursing care humanise the ICU experience for patient and family?",
      "Describe the environmental hazards to an ICU patient and nursing measures to prevent them."
    ],
    assessment: [
      { type: "mcq", q: "Level 3 critical care is defined by the need for:", options: ["Advanced respiratory support and/or support of two or more organs", "Routine ward observation", "Single overnight monitoring", "Outpatient follow-up"], answer: 0, rationale: "Level 3 (ICU) provides mechanical ventilation and/or support of two or more organ systems, usually at 1:1 nursing." },
      { type: "mcq", q: "The single most effective measure to prevent ICU-acquired infection is:", options: ["Prophylactic antibiotics for all", "Daily chest X-rays", "Hand hygiene", "Routine blood cultures"], answer: 2, rationale: "Hand hygiene (WHO five moments) is the most effective and evidence-based infection-prevention measure." },
      { type: "mcq", q: "To reduce ventilator-associated pneumonia, the head of the bed should be elevated to:", options: ["0-10°", "60-90°", "30-45°", "Flat only"], answer: 2, rationale: "Semi-recumbent positioning at 30-45° reduces aspiration and is a core VAP-prevention bundle element." },
      { type: "mcq", q: "The score used to describe multi-organ dysfunction over time is the:", options: ["GCS", "SOFA", "ESI", "APGAR"], answer: 1, rationale: "The Sequential Organ Failure Assessment (SOFA) score quantifies dysfunction across organ systems." },
      { type: "mcq", q: "A Priority 1 ICU admission is a patient who:", options: ["Is too well to benefit", "Has no chance of recovery", "Requires only ward observation", "Needs intensive treatment unavailable on the ward, e.g. ventilation"], answer: 3, rationale: "Priority 1 patients are unstable and need intensive interventions such as ventilation or vasoactive drugs." },
      { type: "mcq", q: "Normal oxygen saturation (SpO2) for a critically ill adult is generally targeted at:", options: ["70-80%", "85-90%", "95-100%", "60-70%"], answer: 2, rationale: "Normal SpO2 is 95-100%; specific targets may be individualised (e.g. lower in chronic CO2 retainers)." },
      { type: "mcq", q: "'Alarm fatigue' in the ICU refers to:", options: ["Broken monitors", "Desensitisation to frequent alarms leading to missed critical ones", "Low battery alarms", "Nurses working overtime"], answer: 1, rationale: "Excessive alarms desensitise staff, risking that a genuine critical alarm is missed." },
      { type: "mcq", q: "Which design feature best preserves an ICU patient's circadian rhythm?", options: ["Constant bright lighting", "Windows, clocks and day-night lighting", "No visitors", "Continuous background music"], answer: 1, rationale: "Natural light, visible clocks and day-night cycling help orientation and normal sleep-wake rhythm." },
      { type: "mcq", q: "A complication of prolonged immobility in ICU is:", options: ["Improved muscle strength", "ICU-acquired weakness and pressure injury", "Faster recovery", "Reduced VTE risk"], answer: 1, rationale: "Immobility causes muscle wasting (ICU-acquired weakness), pressure injuries and venous thromboembolism." },
      { type: "mcq", q: "Humanising ICU care includes:", options: ["Ignoring sedated patients", "Explaining procedures and using the patient's name even when sedated", "Restricting all family contact", "Silencing all communication"], answer: 1, rationale: "Speaking to and orienting patients (even sedated) and involving family humanises the technological environment." }
      , { type: "fill", q: "The severity score using acute physiology and chronic health data is ____ II.", accept: ["apache", "apache ii"], rationale: "APACHE II estimates severity and predicted mortality in ICU patients." }
      , { type: "fill", q: "A step-down unit providing single-organ support is called the ____ dependency unit.", accept: ["high", "high dependency"], rationale: "The high-dependency unit (HDU) provides an intermediate level between ward and ICU." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ecc-04-abcde-assessment",
    unit: "Unit 2 · Assessment & Airway",
    title: "Principles of Assessment — the ABCDE Approach & Primary/Secondary Survey",
    readMinutes: 24,
    summary: "Systematic assessment of the acutely ill or injured patient using the ABCDE approach, the primary and secondary survey, adjuncts, resuscitation as you go, and reassessment.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why a systematic approach?", p: "In an emergency the nurse cannot assess everything at once, so a structured, priority-based sequence ensures that the most immediately life-threatening problems are found and treated first. The universal framework is ABCDE — Airway, Breathing, Circulation, Disability, Exposure — applied in strict order, treating each problem before moving on ('treat as you go')." },
      { h: "The ABCDE sequence", figure: {
        caption: "The ABCDE approach: assess and treat each step before moving to the next.",
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ABCDE assessment flow."><defs><marker id="eccA1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="40" y="15" width="480" height="34" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="60" y="37" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">A</text><text x="90" y="37" font-family="sans-serif" font-size="12" fill="#15803D">Airway (with C-spine control in trauma)</text><rect x="40" y="61" width="480" height="34" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/><text x="60" y="83" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">B</text><text x="90" y="83" font-family="sans-serif" font-size="12" fill="#15803D">Breathing (rate, SpO2, effort, air entry)</text><rect x="40" y="107" width="480" height="34" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="60" y="129" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">C</text><text x="90" y="129" font-family="sans-serif" font-size="12" fill="#15803D">Circulation (pulse, BP, bleeding, IV access)</text><rect x="40" y="153" width="480" height="34" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/><text x="60" y="175" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">D</text><text x="90" y="175" font-family="sans-serif" font-size="12" fill="#15803D">Disability (AVPU/GCS, pupils, glucose)</text><rect x="40" y="199" width="480" height="34" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="60" y="221" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">E</text><text x="90" y="221" font-family="sans-serif" font-size="12" fill="#15803D">Exposure (fully examine, prevent hypothermia)</text><line x1="280" y1="49" x2="280" y2="60" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA1)"/><line x1="280" y1="95" x2="280" y2="106" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA1)"/><line x1="280" y1="141" x2="280" y2="152" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA1)"/><line x1="280" y1="187" x2="280" y2="198" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA1)"/></svg>'
      } },
      { h: "A — Airway", p: "Assess airway patency: can the patient speak clearly? Look for obstruction — stridor, gurgling, snoring, see-saw breathing, or silence. Open the airway with head-tilt/chin-lift (or jaw thrust if cervical-spine injury is suspected), clear secretions by suction, insert an oropharyngeal/nasopharyngeal airway if needed, and give high-flow oxygen. A blocked airway kills in minutes, so it is always first." },
      { h: "B — Breathing", list: [
        "Look — respiratory rate (normal 12-20/min), chest movement, symmetry, use of accessory muscles, cyanosis.",
        "Listen — air entry, added sounds (wheeze, crackles), ability to speak in sentences.",
        "Feel — tracheal position, chest expansion, surgical emphysema.",
        "Measure — SpO2 (target usually 94-98%), and treat life-threats (tension pneumothorax, severe asthma) immediately."
      ] },
      { h: "C — Circulation", list: [
        "Assess pulse rate and character, blood pressure, capillary refill (normal < 2 seconds), skin colour and temperature.",
        "Look for and control external haemorrhage with direct pressure.",
        "Establish two large-bore IV cannulae and take bloods.",
        "Give fluids/blood as indicated and monitor urine output (normal ≥ 0.5 mL/kg/hr)."
      ] },
      { h: "D — Disability", p: "Assess neurological status rapidly using AVPU (Alert, responds to Voice, responds to Pain, Unresponsive) or the Glasgow Coma Scale (GCS 3-15). Check pupil size, equality and reaction, limb movement, and always measure blood glucose (Don't Ever Forget Glucose). A GCS of 8 or less indicates the airway is at risk and may need protection." },
      { h: "E — Exposure", p: "Fully expose the patient to examine for injuries, rashes (e.g. anaphylaxis, meningococcal), bleeding, wounds and drains, while preserving dignity and preventing hypothermia (cover, use warmed blankets/fluids). Log-roll trauma patients to inspect the back and perform relevant checks." },
      { h: "Primary survey", p: "The primary survey IS the ABCDE assessment — a rapid identification and simultaneous treatment of immediately life-threatening conditions. It is repeated whenever the patient deteriorates or after any intervention. The mantra is: find a problem, fix it, then move on." },
      { h: "Secondary survey", p: "Once the patient is stabilised, the secondary survey is a thorough head-to-toe examination and detailed history (AMPLE — Allergies, Medications, Past history, Last meal, Events) to identify all injuries or problems not immediately life-threatening. It includes systematic examination from head, neck, chest, abdomen, pelvis, limbs to back, plus relevant investigations." },
      { h: "Adjuncts to assessment", list: [
        "Continuous monitoring — ECG, SpO2, non-invasive BP, capnography.",
        "Point-of-care tests — blood glucose, arterial blood gas, lactate.",
        "Imaging — chest and pelvic X-ray, FAST ultrasound in trauma.",
        "Urinary catheter and nasogastric tube where indicated.",
        "12-lead ECG for chest pain or arrhythmia."
      ] },
      { h: "Reassessment & escalation", p: "Assessment is continuous, not a single event. The nurse reassesses after every intervention and uses early-warning scoring (e.g. NEWS2 — National Early Warning Score) to detect deterioration and trigger timely escalation to senior help or the rapid-response/critical-care outreach team." },
      { h: "Nursing responsibilities", list: [
        "Perform and document a structured ABCDE assessment.",
        "Prepare and assist with airway, breathing and circulatory interventions.",
        "Ensure IV access, sampling and safe medication administration.",
        "Monitor trends, recognise deterioration and escalate promptly.",
        "Communicate findings clearly using SBAR."
      ] },
      { h: "Clinical relevance", p: "The ABCDE approach gives every nurse a reliable, memorable method to manage any acutely ill or injured patient safely, ensuring the greatest threat to life is always addressed first and no critical problem is overlooked." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Describe the ABCDE approach to the acutely ill patient with the action taken at each step.",
      "Differentiate between the primary and secondary survey in trauma.",
      "Explain how you would assess Disability (D) in the ABCDE sequence.",
      "List the adjuncts used during assessment of a critically ill patient.",
      "How does an early-warning score assist in recognising and escalating deterioration?"
    ],
    assessment: [
      { type: "mcq", q: "In the ABCDE approach, the FIRST priority is always:", options: ["Circulation", "Airway", "Disability", "Exposure"], answer: 1, rationale: "A blocked airway causes death within minutes, so Airway is assessed and secured first." },
      { type: "mcq", q: "If a cervical-spine injury is suspected, the airway should be opened using:", options: ["Head-tilt/chin-lift", "Neck extension", "Jaw thrust", "Sniffing position"], answer: 2, rationale: "Jaw thrust opens the airway without moving the cervical spine, avoiding further spinal injury." },
      { type: "mcq", q: "A normal capillary refill time in an adult is:", options: ["Less than 2 seconds", "4-5 seconds", "6-8 seconds", "More than 10 seconds"], answer: 0, rationale: "Capillary refill under 2 seconds indicates adequate peripheral perfusion." },
      { type: "mcq", q: "The 'D' in ABCDE is assessed rapidly using AVPU or the:", options: ["ESI", "APGAR score", "Glasgow Coma Scale", "SOFA score"], answer: 2, rationale: "Disability is assessed with AVPU or the Glasgow Coma Scale (GCS 3-15)." },
      { type: "mcq", q: "During 'E' (Exposure), a key nursing priority alongside examination is to:", options: ["Restrain the patient", "Give oral fluids", "Delay all treatment", "Prevent hypothermia"], answer: 3, rationale: "Exposing the patient risks heat loss, so hypothermia must be actively prevented with warming measures." },
      { type: "mcq", q: "The AMPLE history taken in the secondary survey includes Allergies, Medications, Past history, ____ and Events.", options: ["Last meal", "Level of consciousness", "Location of pain", "Laboratory results"], answer: 0, rationale: "'L' in AMPLE is Last meal (oral intake), relevant before anaesthesia or surgery." },
      { type: "mcq", q: "A urine output that reflects adequate renal perfusion in an adult is at least:", options: ["0.1 mL/kg/hr", "0.5 mL/kg/hr", "2 mL/kg/hr", "5 mL/kg/hr"], answer: 1, rationale: "A urine output of ≥ 0.5 mL/kg/hr indicates adequate perfusion in circulation assessment." },
      { type: "mcq", q: "A GCS of 8 or less is important because it indicates:", options: ["The patient is fully alert", "The airway is at risk and may need protection", "No further monitoring is needed", "The patient can be discharged"], answer: 1, rationale: "GCS ≤ 8 means the patient cannot protect their own airway and may require intubation." },
      { type: "mcq", q: "Which measurement must NEVER be forgotten during Disability assessment?", options: ["Body weight", "Blood glucose", "Height", "Skin colour"], answer: 1, rationale: "'Don't Ever Forget Glucose' — hypoglycaemia is a rapidly reversible cause of reduced consciousness." },
      { type: "mcq", q: "The primary survey should be repeated whenever:", options: ["The shift changes", "The patient's condition deteriorates or after any intervention", "A relative arrives", "The chart is full"], answer: 1, rationale: "Reassessment after deterioration or intervention ensures new life-threats are detected early." }
      , { type: "fill", q: "The ordered emergency assessment sequence is A, B, C, D and ____.", accept: ["e", "exposure"], rationale: "ABCDE ends with E for Exposure (and environment)." }
      , { type: "fill", q: "The rapid consciousness scale using Alert, Voice, Pain, Unresponsive is called ____.", accept: ["avpu"], rationale: "AVPU is a quick screen of conscious level during Disability assessment." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ecc-05-airway-oxygen",
    unit: "Unit 2 · Assessment & Airway",
    title: "Airway Management & Oxygen Therapy",
    readMinutes: 25,
    summary: "Recognition and relief of airway obstruction, basic and advanced airway techniques, endotracheal intubation, suctioning, and oxygen delivery devices with their flow rates and inspired oxygen concentrations.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Importance of the airway", p: "A patent airway is the absolute first priority in any emergency because complete obstruction causes hypoxic brain injury within 3-4 minutes and death within minutes. Airway management ranges from simple positioning to advanced surgical airways, always combined with oxygenation." },
      { h: "Causes of airway obstruction", list: [
        "The tongue falling back in an unconscious patient (most common).",
        "Foreign body, food or vomit (aspiration).",
        "Blood, secretions or teeth.",
        "Oedema — burns, anaphylaxis, infection (epiglottitis).",
        "Laryngospasm or bronchospasm.",
        "Trauma to the face or neck."
      ] },
      { h: "Recognising obstruction", p: "Partial obstruction gives noisy breathing — stridor (upper airway), gurgling (fluid), snoring (tongue) or wheeze (lower airway). Complete obstruction is silent with paradoxical 'see-saw' chest and abdominal movement, tracheal tug and no air felt at the mouth. Use the 'look, listen, feel' method for up to 10 seconds." },
      { h: "Basic airway manoeuvres", list: [
        "Head-tilt/chin-lift — opens the airway in non-trauma patients.",
        "Jaw thrust — preferred where cervical-spine injury is possible.",
        "Suction — remove blood, vomit and secretions.",
        "Recovery position — for an unconscious, breathing patient with no trauma.",
        "Back blows and abdominal thrusts (Heimlich) for choking with a foreign body."
      ] },
      { h: "Airway adjuncts", list: [
        "Oropharyngeal (Guedel) airway — for unconscious patients with no gag reflex; sized from incisors to angle of jaw.",
        "Nasopharyngeal airway — better tolerated in semi-conscious patients; avoid in base-of-skull fracture.",
        "Supraglottic devices (laryngeal mask airway, i-gel) — quick, effective temporary airways.",
        "Bag-valve-mask (BVM) — provides ventilation with high-flow oxygen and a reservoir."
      ] },
      { h: "Endotracheal intubation", p: "Endotracheal intubation places a cuffed tube through the vocal cords into the trachea; it is the definitive (gold-standard) airway. Indications include airway protection (GCS ≤ 8, absent gag), respiratory failure needing ventilation, and anticipated deterioration. Correct placement is confirmed by capnography (the most reliable), equal chest rise, bilateral breath sounds, absence of gastric sounds and chest X-ray. Rapid sequence induction (RSI) is used in the emergency setting." },
      { h: "Nursing role in intubation", list: [
        "Prepare and check equipment (laryngoscope, correctly sized tubes, suction, bougie, drugs, capnography) — the 'SOAP-ME' preparation.",
        "Pre-oxygenate the patient and position appropriately.",
        "Assist during the procedure and apply cricoid pressure if requested.",
        "Confirm and secure the tube; note tube length at the lips.",
        "Monitor for complications: oesophageal or endobronchial intubation, hypoxia, aspiration, trauma."
      ] },
      { h: "Tracheostomy & surgical airway", p: "A tracheostomy is a surgical opening into the trachea for long-term ventilation or upper-airway obstruction. Emergency surgical airways (cricothyroidotomy) are a last resort in 'can't intubate, can't oxygenate' situations. Tracheostomy care includes humidified oxygen, aseptic suctioning, stoma care and keeping spare tubes and an obturator at the bedside." },
      { h: "Endotracheal / tracheal suctioning", p: "Suctioning clears secretions to maintain patency and oxygenation. Principles: use aseptic technique, pre-oxygenate with 100% oxygen, insert catheter without suction, apply suction (usually 80-150 mmHg) intermittently while withdrawing, limit each pass to 10-15 seconds, and monitor SpO2 and heart rate throughout. Complications include hypoxia, arrhythmia, trauma and raised intracranial pressure." },
      { h: "Oxygen therapy — principles", p: "Oxygen is a drug: it is prescribed, its dose (flow/concentration) recorded, and SpO2 targeted (usually 94-98%, or 88-92% in patients at risk of hypercapnia such as COPD). Excess oxygen can be harmful, and oxygen supports combustion so no smoking or flames are allowed near it." },
      { h: "Oxygen delivery devices", figure: {
        caption: "Common oxygen devices with approximate flow rate and delivered oxygen concentration (FiO2).",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxygen delivery devices table."><rect x="20" y="20" width="520" height="28" fill="#0F4C3A"/><text x="40" y="39" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">Device</text><text x="270" y="39" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">Flow (L/min)</text><text x="430" y="39" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">FiO2 (approx)</text><rect x="20" y="48" width="520" height="30" fill="#F0FDF4"/><text x="40" y="68" font-family="sans-serif" font-size="11" fill="#15803D">Nasal cannula</text><text x="270" y="68" font-family="sans-serif" font-size="11" fill="#15803D">1-6</text><text x="430" y="68" font-family="sans-serif" font-size="11" fill="#15803D">24-44%</text><rect x="20" y="78" width="520" height="30" fill="#DCFCE7"/><text x="40" y="98" font-family="sans-serif" font-size="11" fill="#15803D">Simple face mask</text><text x="270" y="98" font-family="sans-serif" font-size="11" fill="#15803D">5-10</text><text x="430" y="98" font-family="sans-serif" font-size="11" fill="#15803D">40-60%</text><rect x="20" y="108" width="520" height="30" fill="#F0FDF4"/><text x="40" y="128" font-family="sans-serif" font-size="11" fill="#15803D">Venturi mask</text><text x="270" y="128" font-family="sans-serif" font-size="11" fill="#15803D">2-15 (colour-coded)</text><text x="430" y="128" font-family="sans-serif" font-size="11" fill="#15803D">24-60% (fixed)</text><rect x="20" y="138" width="520" height="30" fill="#DCFCE7"/><text x="40" y="158" font-family="sans-serif" font-size="11" fill="#15803D">Non-rebreather mask</text><text x="270" y="158" font-family="sans-serif" font-size="11" fill="#15803D">10-15</text><text x="430" y="158" font-family="sans-serif" font-size="11" fill="#15803D">60-90%</text><rect x="20" y="168" width="520" height="30" fill="#F0FDF4"/><text x="40" y="188" font-family="sans-serif" font-size="11" fill="#15803D">High-flow nasal / BVM</text><text x="270" y="188" font-family="sans-serif" font-size="11" fill="#15803D">up to 60 / 15</text><text x="430" y="188" font-family="sans-serif" font-size="11" fill="#15803D">up to ~100%</text></svg>'
      } },
      { h: "Complications of oxygen therapy", list: [
        "Drying of mucosa — humidify at higher flows.",
        "CO2 retention in some COPD patients if given uncontrolled high-flow oxygen.",
        "Oxygen toxicity with prolonged high concentrations.",
        "Fire hazard — oxygen supports combustion.",
        "Pressure injury from device straps."
      ] },
      { h: "Nursing management", list: [
        "Assess and maintain a patent airway continuously.",
        "Deliver prescribed oxygen, monitor SpO2 and titrate to target.",
        "Perform safe aseptic suctioning and secure airways.",
        "Provide humidification, mouth care and skin care under devices.",
        "Educate patient/family and enforce oxygen safety."
      ] },
      { h: "Clinical relevance", p: "Airway and oxygenation are inseparable and take absolute priority. Competence in basic manoeuvres, adjuncts, safe suctioning and correct oxygen-device selection is a core life-saving skill for every critical-care and emergency nurse." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Describe the causes and recognition of airway obstruction and the basic manoeuvres to relieve it.",
      "Explain the indications for and nursing role in endotracheal intubation.",
      "Describe the principles and safe technique of endotracheal suctioning.",
      "Compare the common oxygen delivery devices with their flow rates and delivered oxygen concentrations.",
      "Discuss the hazards of oxygen therapy and the nursing measures to ensure safe administration."
    ],
    assessment: [
      { type: "mcq", q: "The most common cause of airway obstruction in an unconscious patient is:", options: ["Foreign body", "The tongue falling backward", "Laryngospasm", "Bronchospasm"], answer: 1, rationale: "Loss of muscle tone lets the tongue fall back and occlude the pharynx — the commonest cause in unconsciousness." },
      { type: "mcq", q: "For a patient with suspected cervical-spine injury needing an open airway, the nurse should use:", options: ["Head-tilt/chin-lift", "Jaw thrust", "Neck hyperextension", "Sniffing position"], answer: 1, rationale: "Jaw thrust maintains neutral spinal alignment while opening the airway." },
      { type: "mcq", q: "The MOST reliable method to confirm correct endotracheal tube placement is:", options: ["Chest X-ray only", "Waveform capnography", "Skin colour", "Pulse rate"], answer: 1, rationale: "Continuous waveform capnography confirming CO2 return is the gold standard for tube placement." },
      { type: "mcq", q: "An oropharyngeal (Guedel) airway is appropriate for a patient who is:", options: ["Fully alert", "Unconscious with no gag reflex", "Talking normally", "Refusing oxygen"], answer: 1, rationale: "A Guedel airway is tolerated only when the gag reflex is absent; it would cause gagging/vomiting in an alert patient." },
      { type: "mcq", q: "Each pass of endotracheal suction should be limited to a maximum of:", options: ["10-15 seconds", "30-40 seconds", "1 minute", "2 minutes"], answer: 0, rationale: "Suction is limited to 10-15 seconds per pass to avoid hypoxia and arrhythmia." },
      { type: "mcq", q: "A non-rebreather mask at 10-15 L/min delivers an inspired oxygen concentration of about:", options: ["24-28%", "40-50%", "60-90%", "100% guaranteed"], answer: 2, rationale: "A reservoir non-rebreather mask delivers roughly 60-90% oxygen at high flow." },
      { type: "mcq", q: "A device that delivers a FIXED, precise oxygen concentration regardless of the patient's breathing is the:", options: ["Nasal cannula", "Simple face mask", "Venturi mask", "Non-rebreather mask"], answer: 2, rationale: "The Venturi mask entrains air in a fixed ratio, delivering a precise FiO2 — useful in COPD." },
      { type: "mcq", q: "The usual SpO2 target for a patient at risk of hypercapnia (e.g. COPD) is:", options: ["88-92%", "94-98%", "99-100%", "70-80%"], answer: 0, rationale: "A lower target (88-92%) avoids suppressing the hypoxic drive and worsening CO2 retention." },
      { type: "mcq", q: "Before endotracheal suctioning the nurse should:", options: ["Withhold all oxygen", "Pre-oxygenate with 100% oxygen", "Apply suction during insertion", "Suction for 40 seconds"], answer: 1, rationale: "Pre-oxygenation with 100% oxygen prevents suction-induced hypoxaemia." },
      { type: "mcq", q: "A definitive (gold-standard) airway is provided by:", options: ["A nasal cannula", "A cuffed endotracheal tube", "The recovery position", "A simple face mask"], answer: 1, rationale: "A cuffed endotracheal tube in the trachea protects and secures the airway definitively." }
      , { type: "fill", q: "Oxygen supports combustion, so no ____ or open flames are allowed near it.", accept: ["smoking", "fire", "flames"], rationale: "Oxygen is a fire hazard; smoking and flames must be prohibited." }
      , { type: "fill", q: "The reservoir mask delivering the highest oxygen without ventilation is the ____ mask.", accept: ["non-rebreather", "nonrebreather", "non rebreather"], rationale: "The non-rebreather mask delivers up to ~90% oxygen at 10-15 L/min." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "ecc-06-bls-cpr",
    unit: "Unit 3 · Resuscitation",
    title: "Basic Life Support (BLS) & CPR (Adult/Child) with AED",
    readMinutes: 25,
    summary: "The chain of survival, recognition of cardiac arrest, high-quality chest compressions and ventilation for adults and children, use of the automated external defibrillator, and choking management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is BLS?", p: "Basic Life Support (BLS) is the emergency maintenance of a patient's airway, breathing and circulation without specialised equipment (except an AED and barrier device) until advanced help arrives. Cardiopulmonary resuscitation (CPR) — chest compressions plus rescue breaths — is the core of BLS and can double or triple survival when started early." },
      { h: "The chain of survival", p: "Survival from cardiac arrest depends on a chain of linked actions: (1) early recognition and call for help, (2) early high-quality CPR, (3) early defibrillation, (4) effective advanced life support, and (5) post-resuscitation care. The chain is only as strong as its weakest link, so each step must happen promptly." },
      { h: "Recognising cardiac arrest", p: "Cardiac arrest is recognised by unresponsiveness and absent or abnormal (agonal, gasping) breathing. In a healthcare setting a trained rescuer may also check the carotid pulse for no more than 10 seconds. Do not delay CPR to feel for a pulse if uncertain — start compressions." },
      { h: "The adult BLS sequence (DRSABC)", list: [
        "Danger — ensure the scene is safe for rescuer and patient.",
        "Response — check responsiveness ('shout and shake').",
        "Shout for help / activate emergency response and get an AED.",
        "Airway — open with head-tilt/chin-lift.",
        "Breathing — look for normal breathing for up to 10 seconds.",
        "Compressions — if not breathing normally, begin chest compressions immediately (C-A-B in current guidance: Compressions first)."
      ] },
      { h: "High-quality chest compressions (adult)", figure: {
        caption: "Key metrics for high-quality adult CPR.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="High-quality CPR metrics box."><rect x="30" y="20" width="500" height="150" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="46" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#0F4C3A">High-Quality Adult CPR</text><text x="60" y="78" font-family="sans-serif" font-size="12" fill="#15803D">• Rate: 100-120 compressions / minute</text><text x="60" y="102" font-family="sans-serif" font-size="12" fill="#15803D">• Depth: at least 5 cm (not more than 6 cm)</text><text x="60" y="126" font-family="sans-serif" font-size="12" fill="#15803D">• Allow full chest recoil; minimise interruptions</text><text x="60" y="150" font-family="sans-serif" font-size="12" fill="#15803D">• Ratio: 30 compressions : 2 breaths (single/adult)</text></svg>'
      } },
      { h: "Compression technique", list: [
        "Place the heel of one hand in the centre of the chest (lower half of the sternum), the other hand on top.",
        "Keep arms straight, shoulders over hands, compress vertically.",
        "Rate 100-120/min, depth at least 5 cm (≤ 6 cm) in adults.",
        "Allow full recoil after each compression; do not lean.",
        "Minimise interruptions to less than 10 seconds; rotate rescuers every 2 minutes to avoid fatigue."
      ] },
      { h: "Rescue breaths", p: "After 30 compressions give 2 rescue breaths (mouth-to-mouth with barrier, or bag-valve-mask), each over about 1 second, enough to make the chest rise visibly. Avoid excessive ventilation, which raises intrathoracic pressure and reduces cardiac output. If unwilling or unable to give breaths, perform continuous compression-only CPR." },
      { h: "Paediatric BLS", list: [
        "Children have mostly respiratory (hypoxic) causes of arrest, so give 5 initial rescue breaths before compressions.",
        "Compression-ventilation ratio 15:2 for two healthcare rescuers (30:2 for a lone lay rescuer).",
        "Depth at least one-third of chest depth (about 4 cm in infants, 5 cm in children).",
        "Infant compressions: two-thumb encircling (two rescuers) or two-finger technique on the lower sternum.",
        "Rate remains 100-120/min."
      ] },
      { h: "Automated external defibrillator (AED)", p: "An AED analyses the heart rhythm and delivers a shock for shockable rhythms (ventricular fibrillation, pulseless ventricular tachycardia). Use as soon as available: turn on, attach pads (right upper chest and left lower/apex), stop CPR while it analyses, ensure everyone is clear, deliver the shock if advised, then immediately resume CPR for 2 minutes before reassessing. Early defibrillation is the strongest determinant of survival in shockable arrest." },
      { h: "AED special situations", list: [
        "Wet chest — dry before applying pads.",
        "Excess hair — quickly shave the pad site if pads will not stick.",
        "Pacemaker/ICD — place pads at least 8 cm away.",
        "Medication patch — remove and wipe the area.",
        "Paediatric — use paediatric pads/attenuator for children under 8 years / 25 kg where available."
      ] },
      { h: "Choking (foreign body airway obstruction)", p: "For mild obstruction (effective cough) encourage coughing. For severe obstruction in a conscious adult/child: give up to 5 back blows between the shoulder blades, then up to 5 abdominal thrusts (Heimlich), alternating until relieved or the patient becomes unconscious — then start CPR. In infants use 5 back blows and 5 chest thrusts (no abdominal thrusts)." },
      { h: "When to stop / not start CPR", list: [
        "Return of spontaneous circulation (signs of life).",
        "Arrival of advanced help taking over.",
        "Rescuer exhaustion or danger.",
        "A valid Do-Not-Resuscitate order or clear signs of irreversible death."
      ] },
      { h: "Clinical relevance", p: "Cardiac arrest survival falls by about 7-10% for every minute without CPR and defibrillation. Immediate recognition, high-quality compressions and early AED use are the interventions that most improve survival, and every nurse must perform them competently." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Describe the chain of survival and its importance in cardiac arrest.",
      "Outline the adult BLS sequence and the components of high-quality CPR.",
      "Compare adult and paediatric basic life support.",
      "Explain the correct use of an automated external defibrillator including special situations.",
      "Describe the management of a choking adult and a choking infant."
    ],
    assessment: [
      { type: "mcq", q: "The correct rate for adult chest compressions is:", options: ["60-80 per minute", "80-100 per minute", "100-120 per minute", "140-160 per minute"], answer: 2, rationale: "Guidelines specify 100-120 compressions per minute for high-quality CPR." },
      { type: "mcq", q: "The recommended depth of chest compression in an adult is:", options: ["At least 5 cm (not more than 6 cm)", "2 cm", "8 cm", "As deep as possible"], answer: 0, rationale: "Adult depth is at least 5 cm but no more than 6 cm to balance perfusion and injury risk." },
      { type: "mcq", q: "The single-rescuer compression-to-ventilation ratio for an adult is:", options: ["15:2", "5:1", "30:2", "10:2"], answer: 2, rationale: "A ratio of 30 compressions to 2 breaths is used for adult CPR." },
      { type: "mcq", q: "An AED will deliver a shock for which rhythm?", options: ["Ventricular fibrillation", "Asystole", "Normal sinus rhythm", "Sinus bradycardia"], answer: 0, rationale: "AEDs shock 'shockable' rhythms — ventricular fibrillation and pulseless VT — not asystole." },
      { type: "mcq", q: "In paediatric arrest, why are 5 rescue breaths given first?", options: ["Children rarely arrest", "Compressions are unnecessary", "Most paediatric arrests are respiratory/hypoxic in origin", "Their hearts are stronger"], answer: 2, rationale: "Paediatric arrests are usually hypoxic, so initial ventilation addresses the primary cause." },
      { type: "mcq", q: "During CPR, rescuers should change compressor roles about every:", options: ["30 seconds", "10 minutes", "2 minutes", "20 minutes"], answer: 2, rationale: "Rotating every 2 minutes prevents fatigue and maintains compression quality." },
      { type: "mcq", q: "For a choking conscious adult with a severe obstruction, after 5 back blows you give up to 5:", options: ["Rescue breaths", "Abdominal thrusts (Heimlich)", "Chest compressions", "Finger sweeps"], answer: 1, rationale: "Severe obstruction in adults is managed by alternating 5 back blows and 5 abdominal thrusts." },
      { type: "mcq", q: "The two-rescuer compression-to-ventilation ratio for a child is:", options: ["30:2", "15:2", "5:2", "50:2"], answer: 1, rationale: "Two healthcare rescuers use 15:2 for infants and children." },
      { type: "mcq", q: "After the AED delivers a shock, the rescuer should:", options: ["Check the pulse for 1 minute", "Immediately resume CPR for 2 minutes", "Wait for the doctor", "Remove the pads"], answer: 1, rationale: "CPR is resumed immediately for 2 minutes before the next rhythm analysis to maintain perfusion." },
      { type: "mcq", q: "For a choking INFANT, abdominal thrusts are replaced by:", options: ["Back blows only", "5 chest thrusts", "Rescue breaths", "Nothing"], answer: 1, rationale: "Infants receive 5 back blows and 5 chest thrusts; abdominal thrusts are avoided to prevent organ injury." }
      , { type: "fill", q: "The linked steps from recognition to post-arrest care are called the chain of ____.", accept: ["survival"], rationale: "The chain of survival links the actions that improve cardiac-arrest outcomes." }
      , { type: "fill", q: "A device that analyses rhythm and advises a shock is an ____ (abbreviation).", accept: ["aed", "automated external defibrillator"], rationale: "The automated external defibrillator (AED) enables early defibrillation by minimally trained rescuers." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "ecc-07-acls-ecg",
    unit: "Unit 3 · Resuscitation",
    title: "Advanced Cardiac Life Support Overview & Basic ECG / Arrhythmia Recognition",
    readMinutes: 25,
    summary: "The ACLS approach to cardiac arrest, shockable and non-shockable rhythms, key drugs, reversible causes, plus the basics of ECG interpretation and recognition of common arrhythmias.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is ACLS?", p: "Advanced Cardiac Life Support (ACLS) builds on BLS with advanced airway management, rhythm recognition, defibrillation, intravenous drugs and treatment of the underlying cause. It requires a trained team, a monitor/defibrillator and a leader who coordinates high-quality CPR with minimal interruptions." },
      { h: "Cardiac arrest rhythms", list: [
        "Shockable: Ventricular Fibrillation (VF) and pulseless Ventricular Tachycardia (pVT) — treated with immediate defibrillation.",
        "Non-shockable: Asystole (no electrical activity, a flat line) and Pulseless Electrical Activity (PEA — organised electrical activity with no pulse) — CPR and drugs, no shock."
      ] },
      { h: "The ACLS cardiac-arrest algorithm (overview)", figure: {
        caption: "Simplified ACLS pathway after starting CPR and attaching the monitor.",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ACLS shockable vs non-shockable pathway."><defs><marker id="eccA7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="200" y="15" width="160" height="40" rx="10" fill="#0F4C3A"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">CPR + monitor</text><line x1="280" y1="55" x2="280" y2="75" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA7)"/><rect x="200" y="76" width="160" height="34" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="98" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0F4C3A">Assess rhythm</text><line x1="240" y1="110" x2="150" y2="140" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA7)"/><line x1="320" y1="110" x2="410" y2="140" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA7)"/><rect x="30" y="142" width="230" height="90" rx="10" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/><text x="145" y="163" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Shockable (VF/pVT)</text><text x="145" y="184" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Defibrillate → CPR 2 min</text><text x="145" y="202" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Adrenaline every 3-5 min</text><text x="145" y="220" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Amiodarone after 3rd shock</text><rect x="300" y="142" width="230" height="90" rx="10" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/><text x="415" y="163" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Non-shockable (Asys/PEA)</text><text x="415" y="184" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">CPR 2 min (no shock)</text><text x="415" y="202" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Adrenaline ASAP,</text><text x="415" y="220" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">then every 3-5 min</text></svg>'
      } },
      { h: "Key ACLS drugs", list: [
        "Adrenaline (epinephrine) 1 mg IV every 3-5 minutes — for all arrest rhythms (a vasopressor improving coronary/cerebral perfusion).",
        "Amiodarone 300 mg IV after the 3rd shock in refractory VF/pVT (then 150 mg) — an antiarrhythmic.",
        "Atropine — for symptomatic bradycardia (not routinely for arrest).",
        "Magnesium — for torsades de pointes.",
        "Consider fluids, blood and cause-specific therapy."
      ] },
      { h: "Reversible causes — the 4 Hs and 4 Ts", list: [
        "Hypoxia, Hypovolaemia, Hyper/Hypokalaemia (and metabolic), Hypothermia.",
        "Thrombosis (coronary or pulmonary), Tension pneumothorax, Tamponade (cardiac), Toxins.",
        "Actively seeking and treating a reversible cause is essential to achieving return of spontaneous circulation."
      ] },
      { h: "Basics of the ECG", p: "The electrocardiogram records the heart's electrical activity. The normal complex has a P wave (atrial depolarisation), QRS complex (ventricular depolarisation) and T wave (ventricular repolarisation). Standard paper runs at 25 mm/second, so each small square = 0.04 s and each large square = 0.2 s." },
      { h: "Systematic ECG interpretation", list: [
        "Rate — count large squares between R waves and divide into 300 (300/number of large squares); normal 60-100/min.",
        "Rhythm — regular or irregular?",
        "P waves — present, uniform, one before each QRS?",
        "PR interval — normal 0.12-0.20 s (3-5 small squares).",
        "QRS width — normal < 0.12 s (narrow); wide suggests ventricular origin/conduction block.",
        "QT and ST segment — ischaemia, injury or prolongation."
      ] },
      { h: "Normal sinus rhythm", p: "Sinus rhythm arises from the sinoatrial node: rate 60-100/min, regular, each P wave followed by a QRS, normal PR and QRS. Deviations from this pattern define the arrhythmias." },
      { h: "Common arrhythmias", list: [
        "Sinus bradycardia — rate < 60/min; treat if symptomatic (atropine, pacing).",
        "Sinus tachycardia — rate > 100/min; treat the cause (pain, fever, hypovolaemia).",
        "Atrial fibrillation — irregularly irregular, no clear P waves; risk of stroke (anticoagulation).",
        "Supraventricular tachycardia (SVT) — narrow-complex, very fast, regular; vagal manoeuvres/adenosine.",
        "Ventricular tachycardia — wide-complex, fast; may be pulseless (shock) or with pulse.",
        "Ventricular fibrillation — chaotic, no organised complexes; defibrillate immediately.",
        "Heart block — first, second (Mobitz I/II) and third-degree (complete) AV block."
      ] },
      { h: "Recognising life-threatening rhythms quickly", p: "VF is chaotic with no discernible waves; pVT is a rapid regular wide-complex rhythm with no pulse — both need immediate defibrillation. Asystole is a near-flat line (confirm in two leads, check leads/gain). PEA shows organised electrical activity but no pulse — look hard for a reversible cause." },
      { h: "Defibrillation vs cardioversion", p: "Defibrillation is an unsynchronised shock for VF/pVT. Synchronised cardioversion delivers the shock on the R wave to treat unstable tachyarrhythmias with a pulse (e.g. unstable AF, SVT, VT with pulse), avoiding the vulnerable T-wave period. Pacing is used for symptomatic bradycardia/high-degree block." },
      { h: "Nursing role in ACLS", list: [
        "Ensure high-quality, minimally interrupted compressions and safe defibrillation.",
        "Recognise the rhythm and anticipate the algorithm step.",
        "Prepare and administer drugs accurately, and record timings.",
        "Manage the airway, IV/IO access and monitoring.",
        "Document the resuscitation and support the family; assist post-arrest care."
      ] },
      { h: "Clinical relevance", p: "Rapid, accurate rhythm recognition determines whether the patient is defibrillated or given drugs, and identifying a reversible cause often makes the difference between death and recovery. ECG literacy is essential for the critical-care nurse." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Differentiate shockable from non-shockable cardiac-arrest rhythms and their initial management.",
      "List the 4 Hs and 4 Ts and explain their importance in cardiac arrest.",
      "Describe a systematic method for interpreting an ECG rhythm strip with normal values.",
      "Compare defibrillation and synchronised cardioversion.",
      "Discuss the nurse's responsibilities during an ACLS resuscitation."
    ],
    assessment: [
      { type: "mcq", q: "Which pair of rhythms is SHOCKABLE?", options: ["VF and pulseless VT", "Asystole and PEA", "Sinus rhythm and bradycardia", "First-degree block and AF"], answer: 0, rationale: "Ventricular fibrillation and pulseless VT are the shockable arrest rhythms requiring defibrillation." },
      { type: "mcq", q: "The standard ACLS dose and frequency of adrenaline in cardiac arrest is:", options: ["10 mg once", "0.1 mg hourly", "1 mg every 3-5 minutes", "5 mg every 30 seconds"], answer: 2, rationale: "Adrenaline 1 mg IV is given every 3-5 minutes during arrest." },
      { type: "mcq", q: "Amiodarone in cardiac arrest is indicated:", options: ["For asystole", "For sinus tachycardia", "In refractory VF/pVT after the third shock", "Never during arrest"], answer: 2, rationale: "Amiodarone 300 mg is given for shock-refractory VF/pVT after the third shock." },
      { type: "mcq", q: "A normal PR interval measures:", options: ["0.04-0.08 s", "0.30-0.40 s", "0.50-0.60 s", "0.12-0.20 s"], answer: 3, rationale: "The normal PR interval is 0.12-0.20 seconds (3-5 small squares)." },
      { type: "mcq", q: "An 'irregularly irregular' rhythm with no clear P waves is characteristic of:", options: ["Sinus rhythm", "Atrial fibrillation", "Complete heart block", "Ventricular fibrillation"], answer: 1, rationale: "Atrial fibrillation is irregularly irregular with absent organised P waves." },
      { type: "mcq", q: "Which is one of the '4 Ts' reversible causes of arrest?", options: ["Hypoxia", "Tension pneumothorax", "Hypothermia", "Hypovolaemia"], answer: 1, rationale: "Tension pneumothorax is a 'T'; the others listed are 'H' causes." },
      { type: "mcq", q: "Synchronised cardioversion differs from defibrillation because it:", options: ["Uses no electricity", "Delivers the shock timed to the R wave", "Is only for asystole", "Requires no sedation ever"], answer: 1, rationale: "Cardioversion synchronises to the R wave to avoid the vulnerable T-wave and is used for unstable tachyarrhythmias with a pulse." },
      { type: "mcq", q: "At standard paper speed each small square represents:", options: ["0.04 second", "0.2 second", "1 second", "0.5 second"], answer: 0, rationale: "At 25 mm/s each small (1 mm) square is 0.04 s and each large square 0.2 s." },
      { type: "mcq", q: "PEA (pulseless electrical activity) is managed by:", options: ["Immediate defibrillation", "CPR, adrenaline and searching for a reversible cause", "Cardioversion", "Doing nothing"], answer: 1, rationale: "PEA is non-shockable; management is CPR, adrenaline and treating the underlying reversible cause." },
      { type: "mcq", q: "A regular narrow-complex tachycardia around 180/min with no visible P waves is most likely:", options: ["Ventricular fibrillation", "Supraventricular tachycardia", "Asystole", "Sinus bradycardia"], answer: 1, rationale: "A fast, regular, narrow-complex rhythm suggests SVT, treated with vagal manoeuvres or adenosine if stable." }
      , { type: "fill", q: "The chaotic, disorganised rhythm needing immediate defibrillation is ventricular ____.", accept: ["fibrillation", "vf"], rationale: "Ventricular fibrillation is chaotic electrical activity requiring immediate defibrillation." }
      , { type: "fill", q: "A normal heart rate on ECG is ____ to 100 beats per minute.", accept: ["60"], rationale: "Normal sinus rate is 60-100 beats per minute." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "ecc-08-shock",
    unit: "Unit 4 · Circulatory & Respiratory Emergencies",
    title: "Shock — Types, Pathophysiology & Management",
    readMinutes: 26,
    summary: "Definition and classification of shock, the stages and pathophysiology, clinical features by type (hypovolaemic, cardiogenic, distributive, obstructive), investigations, management and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Shock is a life-threatening state of acute circulatory failure in which oxygen delivery to the tissues is inadequate to meet metabolic demand, leading to cellular hypoxia, anaerobic metabolism, and if uncorrected, cell death, organ failure and death. It is a syndrome of inadequate tissue perfusion, not simply low blood pressure." },
      { h: "Classification of shock", list: [
        "Hypovolaemic — loss of circulating volume (haemorrhage, dehydration, burns).",
        "Cardiogenic — pump failure (myocardial infarction, arrhythmia, cardiomyopathy).",
        "Distributive — abnormal vasodilation and maldistribution: septic, anaphylactic and neurogenic shock.",
        "Obstructive — mechanical obstruction to flow (tension pneumothorax, cardiac tamponade, massive pulmonary embolism)."
      ] },
      { h: "Determinants of tissue perfusion", p: "Blood pressure = cardiac output × systemic vascular resistance, and cardiac output = heart rate × stroke volume. Stroke volume depends on preload, contractility and afterload. Each shock type disrupts one or more of these: hypovolaemic (preload), cardiogenic (contractility), distributive (resistance), obstructive (mechanical impedance)." },
      { h: "Stages of shock", figure: {
        caption: "Progression of shock through four stages.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of shock."><defs><marker id="eccA8" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="50" width="120" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="70" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Initial</text><text x="70" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">anaerobic, lactate</text><rect x="150" y="50" width="120" height="50" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/><text x="210" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Compensatory</text><text x="210" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">HR up, vasoconstrict</text><rect x="290" y="50" width="120" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="350" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Progressive</text><text x="350" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">BP falls, organ injury</text><rect x="430" y="50" width="120" height="50" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/><text x="490" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Refractory</text><text x="490" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">irreversible, MODS</text><line x1="130" y1="75" x2="148" y2="75" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA8)"/><line x1="270" y1="75" x2="288" y2="75" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA8)"/><line x1="410" y1="75" x2="428" y2="75" stroke="#0F4C3A" stroke-width="2" marker-end="url(#eccA8)"/></svg>'
      } },
      { h: "Pathophysiology (step by step)", p: "Reduced perfusion → cells switch to anaerobic metabolism → lactic acid accumulates (metabolic acidosis). Compensatory mechanisms (sympathetic activation, renin-angiotensin-aldosterone, ADH) raise heart rate and vasoconstrict to preserve vital organs. If uncorrected, capillaries leak, microthrombi form, cellular pumps fail, and progressive organ dysfunction leads to multi-organ dysfunction syndrome (MODS) and the irreversible (refractory) stage." },
      { h: "General clinical features", list: [
        "Tachycardia and, later, hypotension (systolic often < 90 mmHg).",
        "Cool, clammy, pale skin (except warm/flushed in early distributive shock).",
        "Prolonged capillary refill (> 2 s) and weak thready pulse.",
        "Tachypnoea, restlessness then confusion (falling cerebral perfusion).",
        "Oliguria (urine < 0.5 mL/kg/hr) and rising serum lactate.",
        "Metabolic acidosis on blood gas."
      ] },
      { h: "Distinguishing features by type", list: [
        "Hypovolaemic — history of bleeding/fluid loss, low CVP, cold peripheries.",
        "Cardiogenic — chest pain, raised JVP, pulmonary oedema, low output despite adequate volume.",
        "Septic — fever/hypothermia, warm then cold shock, high lactate, source of infection.",
        "Anaphylactic — rapid onset after allergen, urticaria, wheeze, angio-oedema.",
        "Neurogenic — after spinal cord injury; hypotension WITH bradycardia and warm skin.",
        "Obstructive — distended neck veins, muffled heart sounds (tamponade) or tracheal deviation (tension pneumothorax)."
      ] },
      { h: "Investigations", list: [
        "Blood — full count, cross-match, urea/electrolytes, glucose, lactate, cultures.",
        "Arterial blood gas — acidosis, lactate, oxygenation.",
        "ECG and cardiac markers (troponin).",
        "Imaging — chest X-ray, echocardiography, focused ultrasound (FAST/e-FAST).",
        "Haemodynamic monitoring — CVP, arterial line, sometimes cardiac output monitoring."
      ] },
      { h: "General management principles", list: [
        "Airway, breathing, high-flow oxygen; support ventilation if needed.",
        "Two large-bore IV cannulae; restore circulating volume with fluid resuscitation.",
        "Identify and treat the cause (stop bleeding, antibiotics, adrenaline, decompress).",
        "Vasopressors (e.g. noradrenaline) and inotropes if fluids alone fail.",
        "Monitor response: BP, heart rate, urine output, lactate clearance, mental state."
      ] },
      { h: "Type-specific treatment highlights", list: [
        "Hypovolaemic — control bleeding, crystalloid then blood; target haemostasis.",
        "Cardiogenic — cautious fluids, inotropes, treat MI (reperfusion), sometimes mechanical support; avoid fluid overload.",
        "Septic — early broad-spectrum antibiotics (within 1 hour), fluids, source control, vasopressors (Surviving Sepsis).",
        "Anaphylactic — IM adrenaline 0.5 mg (1:1000), oxygen, fluids, antihistamine, steroids.",
        "Neurogenic — fluids, vasopressors, atropine for bradycardia, spinal precautions.",
        "Obstructive — needle/finger decompression (tension pneumothorax), pericardiocentesis (tamponade), thrombolysis (PE)."
      ] },
      { h: "Nursing management", list: [
        "Continuous ABC assessment and vital-sign/haemodynamic monitoring.",
        "Position (supine; passive leg raise may help; upright for cardiogenic pulmonary oedema).",
        "Administer oxygen, fluids, blood and drugs safely; titrate to response.",
        "Strict intake-output and hourly urine measurement.",
        "Maintain warmth, skin integrity and pressure-area care.",
        "Emotional support to patient and family; accurate documentation and prompt escalation."
      ] },
      { h: "Complications", p: "Untreated shock leads to acute kidney injury, acute respiratory distress syndrome, disseminated intravascular coagulation, hepatic failure, multi-organ dysfunction syndrome and death. Early recognition and prompt correction of perfusion prevent progression to the irreversible stage." },
      { h: "Clinical relevance", p: "Shock is a final common pathway of many emergencies. The nurse's ability to recognise early (compensated) shock — often before the blood pressure falls — and to act rapidly on the cause is decisive for survival." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Define shock and classify its types with an example of each.",
      "Describe the stages and pathophysiology of shock.",
      "Compare the clinical features of hypovolaemic, cardiogenic, septic and neurogenic shock.",
      "Outline the general and type-specific management of shock.",
      "Discuss the nursing management of a patient in shock."
    ],
    assessment: [
      { type: "mcq", q: "Shock is best defined as:", options: ["A blood pressure below 120/80", "Inadequate tissue perfusion and oxygen delivery to meet metabolic demand", "A fast heart rate", "Loss of consciousness"], answer: 1, rationale: "Shock is inadequate tissue perfusion causing cellular hypoxia, not merely a low blood pressure." },
      { type: "mcq", q: "Shock caused by loss of circulating blood volume is:", options: ["Cardiogenic", "Hypovolaemic", "Neurogenic", "Obstructive"], answer: 1, rationale: "Hypovolaemic shock results from volume loss such as haemorrhage, burns or dehydration." },
      { type: "mcq", q: "Which type of shock classically presents with hypotension AND bradycardia?", options: ["Septic", "Anaphylactic", "Neurogenic", "Hypovolaemic"], answer: 2, rationale: "Neurogenic shock (loss of sympathetic tone after spinal injury) gives hypotension with bradycardia and warm skin." },
      { type: "mcq", q: "The first-line drug for anaphylactic shock is:", options: ["IV amiodarone", "IM adrenaline 0.5 mg (1:1000)", "Oral antihistamine only", "IV atropine"], answer: 1, rationale: "Intramuscular adrenaline is the immediate life-saving treatment for anaphylaxis." },
      { type: "mcq", q: "In septic shock, broad-spectrum antibiotics should ideally be given within:", options: ["1 hour", "6 hours", "24 hours", "After cultures return"], answer: 0, rationale: "The Surviving Sepsis guidance recommends antibiotics within the first hour of recognition." },
      { type: "mcq", q: "A hallmark laboratory finding of tissue hypoperfusion in shock is:", options: ["Low potassium", "Raised serum lactate / metabolic acidosis", "High sodium", "Low white cell count"], answer: 1, rationale: "Anaerobic metabolism raises lactate and produces a metabolic acidosis, marking hypoperfusion." },
      { type: "mcq", q: "The stage of shock in which damage becomes irreversible despite treatment is:", options: ["Initial", "Compensatory", "Progressive", "Refractory"], answer: 3, rationale: "The refractory (irreversible) stage features unresponsive hypotension and multi-organ failure." },
      { type: "mcq", q: "Which finding suggests obstructive shock from cardiac tamponade?", options: ["Warm flushed skin", "Distended neck veins with muffled heart sounds", "Bounding pulses", "High urine output"], answer: 1, rationale: "Tamponade produces raised JVP, muffled heart sounds and hypotension (Beck's triad)." },
      { type: "mcq", q: "Cardiogenic shock differs from hypovolaemic shock in that management should:", options: ["Give large rapid fluid boluses", "Be cautious with fluids and use inotropes", "Avoid oxygen", "Withhold monitoring"], answer: 1, rationale: "In pump failure, aggressive fluids worsen pulmonary oedema; cautious fluids plus inotropes are needed." },
      { type: "mcq", q: "An early ('compensated') sign the nurse may detect BEFORE the blood pressure falls is:", options: ["Bradycardia", "Tachycardia with cool clammy skin and restlessness", "Warm dry skin", "High urine output"], answer: 1, rationale: "Compensatory sympathetic activation causes tachycardia, vasoconstriction and restlessness before hypotension appears." }
      , { type: "fill", q: "Septic, anaphylactic and neurogenic shock all belong to the ____ category.", accept: ["distributive"], rationale: "These share abnormal vasodilation and maldistribution of blood flow — distributive shock." }
      , { type: "fill", q: "Adequate urine output reflecting perfusion is at least 0.5 mL/kg/____.", accept: ["hour", "hr", "h"], rationale: "A urine output of ≥ 0.5 mL/kg/hr indicates adequate renal perfusion." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "ecc-09-resp-failure-ventilation",
    unit: "Unit 4 · Circulatory & Respiratory Emergencies",
    title: "Acute Respiratory Failure & Principles of Mechanical Ventilation",
    readMinutes: 26,
    summary: "Types and causes of acute respiratory failure and ARDS, blood-gas interpretation, indications for and modes of mechanical ventilation, ventilator settings, and the nursing care of the ventilated patient.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of acute respiratory failure", p: "Acute respiratory failure is the inability of the respiratory system to maintain adequate gas exchange, defined by arterial blood gas as a PaO2 below 60 mmHg (Type I) and/or a PaCO2 above 50 mmHg with acidosis (Type II), while breathing room air. It is a syndrome of failure of oxygenation, ventilation, or both." },
      { h: "Types of respiratory failure", list: [
        "Type I (hypoxaemic) — low PaO2 with normal/low PaCO2; a problem of oxygenation (e.g. pneumonia, ARDS, pulmonary oedema, PE).",
        "Type II (hypercapnic/ventilatory) — high PaCO2 with acidosis; a problem of ventilation (e.g. COPD, respiratory muscle weakness, drug overdose, chest-wall problems)."
      ] },
      { h: "Causes", list: [
        "Airway — asthma, COPD, obstruction.",
        "Lung parenchyma — pneumonia, ARDS, pulmonary oedema, fibrosis.",
        "Vascular — pulmonary embolism.",
        "Chest wall/pleura — flail chest, pneumothorax, effusion.",
        "Neuromuscular / central — Guillain-Barré, myasthenia, spinal injury, opioids, brain injury."
      ] },
      { h: "Acute respiratory distress syndrome (ARDS)", p: "ARDS is severe, acute, diffuse inflammatory lung injury causing increased alveolar-capillary permeability, non-cardiogenic pulmonary oedema, stiff lungs and refractory hypoxaemia. The Berlin definition requires acute onset (within 1 week), bilateral infiltrates on imaging, not fully explained by cardiac failure, and a reduced PaO2/FiO2 ratio (mild ≤ 300, moderate ≤ 200, severe ≤ 100). Causes include sepsis, aspiration, pneumonia, trauma and pancreatitis." },
      { h: "Clinical features", list: [
        "Dyspnoea, tachypnoea, use of accessory muscles.",
        "Restlessness and anxiety, then confusion and drowsiness (CO2 narcosis).",
        "Cyanosis (a late sign), low SpO2.",
        "Tachycardia; in Type II, warm flushed skin, bounding pulse, flapping tremor.",
        "Signs of the underlying cause (crackles, wheeze, reduced air entry)."
      ] },
      { h: "Arterial blood gas interpretation", p: "Normal values: pH 7.35-7.45, PaO2 80-100 mmHg, PaCO2 35-45 mmHg, HCO3 22-26 mmol/L, SaO2 95-100%. A low pH is acidaemia, high pH alkalaemia. Respiratory acidosis = high PaCO2; metabolic acidosis = low HCO3. The kidneys (HCO3) and lungs (CO2) compensate for one another." },
      { h: "Initial management", list: [
        "High-flow oxygen (controlled in COPD to target 88-92%).",
        "Treat the cause (bronchodilators, antibiotics, diuretics, reversal agents).",
        "Non-invasive ventilation (CPAP/BiPAP) for suitable Type II failure or cardiogenic pulmonary oedema.",
        "Position upright; chest physiotherapy and secretion clearance.",
        "Escalate to intubation and mechanical ventilation if failing."
      ] },
      { h: "Indications for mechanical ventilation", list: [
        "Apnoea or inadequate spontaneous ventilation.",
        "Refractory hypoxaemia despite maximal oxygen.",
        "Rising PaCO2 with worsening acidosis and exhaustion.",
        "Inability to protect the airway (GCS ≤ 8).",
        "Need to control ventilation (raised ICP, after major surgery)."
      ] },
      { h: "Non-invasive vs invasive ventilation", p: "Non-invasive ventilation (NIV) delivers support through a tight mask without intubation: CPAP maintains a constant positive pressure to open alveoli (useful in cardiogenic pulmonary oedema), and BiPAP gives two pressure levels to assist breaths (useful in COPD/Type II failure). Invasive ventilation delivers breaths through an endotracheal or tracheostomy tube for severe or prolonged failure." },
      { h: "Common ventilator modes & settings", figure: {
        caption: "Key ventilator parameters the nurse monitors.",
        svg: '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ventilator settings box."><rect x="30" y="15" width="500" height="145" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Key Ventilator Settings</text><text x="55" y="66" font-family="sans-serif" font-size="11" fill="#15803D">• Tidal volume: ~6-8 mL/kg (6 mL/kg lung-protective)</text><text x="55" y="88" font-family="sans-serif" font-size="11" fill="#15803D">• Respiratory rate: ~12-16 breaths/min</text><text x="55" y="110" font-family="sans-serif" font-size="11" fill="#15803D">• FiO2: 0.21-1.0 (titrate to SpO2/PaO2)</text><text x="55" y="132" font-family="sans-serif" font-size="11" fill="#15803D">• PEEP: usually 5 cmH2O (higher in ARDS)</text><text x="55" y="152" font-family="sans-serif" font-size="11" fill="#15803D">• Modes: A/C, SIMV, PSV, CPAP</text></svg>'
      } },
      { h: "Ventilator terms", list: [
        "Tidal volume (VT) — volume per breath (lung-protective ~6 mL/kg ideal body weight in ARDS).",
        "PEEP (positive end-expiratory pressure) — pressure kept in the lungs at end-expiration to keep alveoli open and improve oxygenation.",
        "FiO2 — fraction of inspired oxygen (0.21 = room air to 1.0 = 100%).",
        "Assist-Control (A/C) — machine delivers a set breath for every patient effort.",
        "SIMV — synchronised mandatory breaths plus spontaneous breaths.",
        "Pressure support (PSV) — assists the patient's own breaths, used for weaning."
      ] },
      { h: "Complications of mechanical ventilation", list: [
        "Ventilator-associated pneumonia (VAP).",
        "Barotrauma / volutrauma (pneumothorax) from high pressures/volumes.",
        "Haemodynamic compromise from raised intrathoracic pressure.",
        "Oxygen toxicity, and ventilator-associated lung injury.",
        "Tube problems — displacement, obstruction, cuff injury.",
        "ICU-acquired weakness and delirium."
      ] },
      { h: "Nursing care of the ventilated patient", list: [
        "Confirm tube position and settings; respond to alarms (high pressure, low volume, apnoea).",
        "VAP bundle: head-up 30-45°, oral care with chlorhexidine, sedation holds, DVT and peptic-ulcer prophylaxis.",
        "Aseptic suctioning, humidification and cuff-pressure checks (20-30 cmH2O).",
        "Monitor SpO2, ABG, chest movement and breath sounds.",
        "Sedation/analgesia assessment (RASS), delirium screening and daily awakening/breathing trials.",
        "Communication aids, eye and mouth care, repositioning and skin care; family support.",
        "Assess readiness to wean and support the weaning process."
      ] },
      { h: "Clinical relevance", p: "Respiratory failure is one of the commonest reasons for ICU admission. Understanding oxygenation versus ventilation, interpreting blood gases, and delivering meticulous ventilator and VAP-prevention care are central nursing competencies that directly affect survival." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Differentiate Type I and Type II respiratory failure with causes and blood-gas findings.",
      "Describe ARDS, its definition and pathophysiology.",
      "Interpret a set of arterial blood gases giving the normal values.",
      "List the indications for mechanical ventilation and describe common modes and settings.",
      "Discuss the nursing care of a mechanically ventilated patient including VAP prevention."
    ],
    assessment: [
      { type: "mcq", q: "Type I (hypoxaemic) respiratory failure is defined mainly by:", options: ["High PaCO2 with acidosis", "Low PaO2 (< 60 mmHg) with normal/low PaCO2", "High bicarbonate", "Normal blood gases"], answer: 1, rationale: "Type I is a failure of oxygenation — low PaO2 with a normal or low PaCO2." },
      { type: "mcq", q: "A patient with COPD who is drowsy with warm flushed skin and a flapping tremor most likely has:", options: ["Type I failure", "Type II (hypercapnic) failure with CO2 narcosis", "Metabolic alkalosis", "No respiratory problem"], answer: 1, rationale: "CO2 retention (Type II) causes drowsiness, warm skin, bounding pulse and asterixis (flap)." },
      { type: "mcq", q: "The lung-protective tidal volume used in ARDS is approximately:", options: ["6 mL/kg ideal body weight", "15 mL/kg", "20 mL/kg", "2 mL/kg"], answer: 0, rationale: "Low tidal volumes (~6 mL/kg IBW) reduce ventilator-induced lung injury in ARDS." },
      { type: "mcq", q: "PEEP improves oxygenation by:", options: ["Increasing the respiratory rate", "Keeping alveoli open at end-expiration", "Removing CO2 only", "Lowering FiO2 needs is irrelevant"], answer: 1, rationale: "Positive end-expiratory pressure prevents alveolar collapse, improving gas exchange." },
      { type: "mcq", q: "The normal arterial PaCO2 range is:", options: ["10-20 mmHg", "35-45 mmHg", "60-70 mmHg", "80-100 mmHg"], answer: 1, rationale: "Normal PaCO2 is 35-45 mmHg; PaO2 (80-100) is the oxygen value." },
      { type: "mcq", q: "Which non-invasive mode is most useful for cardiogenic pulmonary oedema?", options: ["CPAP", "SIMV", "Assist-control", "Tracheostomy"], answer: 0, rationale: "CPAP recruits alveoli and reduces preload/afterload, helping cardiogenic pulmonary oedema." },
      { type: "mcq", q: "To prevent ventilator-associated pneumonia the head of the bed should be at:", options: ["Flat (0°)", "30-45°", "90°", "Prone only"], answer: 1, rationale: "Semi-recumbent positioning at 30-45° is a core VAP-prevention bundle measure." },
      { type: "mcq", q: "A PaO2/FiO2 ratio of 90 in a patient with bilateral infiltrates indicates:", options: ["Normal lungs", "Severe ARDS", "Mild asthma", "Metabolic alkalosis"], answer: 1, rationale: "A P/F ratio ≤ 100 with bilateral infiltrates meets the Berlin criteria for severe ARDS." },
      { type: "mcq", q: "The recommended endotracheal cuff pressure is:", options: ["5-10 cmH2O", "20-30 cmH2O", "40-50 cmH2O", "60-70 cmH2O"], answer: 1, rationale: "A cuff pressure of 20-30 cmH2O seals the airway without causing tracheal ischaemia." },
      { type: "mcq", q: "A ventilator mode commonly used to WEAN a patient by assisting their own breaths is:", options: ["Pressure support ventilation (PSV)", "Full assist-control", "Apnoea mode", "Manual bagging only"], answer: 0, rationale: "Pressure support assists spontaneous breaths and is widely used during weaning." }
      , { type: "fill", q: "Positive pressure kept in the lungs at end-expiration is abbreviated ____.", accept: ["peep"], rationale: "PEEP keeps alveoli open at end-expiration, improving oxygenation." }
      , { type: "fill", q: "Severe diffuse inflammatory lung injury with refractory hypoxaemia is called ____ (abbreviation).", accept: ["ards", "acute respiratory distress syndrome"], rationale: "ARDS is defined by the Berlin criteria with a reduced PaO2/FiO2 ratio." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "ecc-10-haemodynamic",
    unit: "Unit 4 · Circulatory & Respiratory Emergencies",
    title: "Haemodynamic Monitoring",
    readMinutes: 24,
    summary: "Principles and parameters of haemodynamic monitoring, non-invasive and invasive methods including arterial and central venous pressure lines, normal values, and the nursing responsibilities and safety in monitoring.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of haemodynamic monitoring", p: "Haemodynamic monitoring is the measurement and interpretation of the pressures, flows and oxygenation of the cardiovascular system to assess perfusion, guide fluid and drug therapy, and detect deterioration early. It ranges from simple non-invasive vital signs to invasive continuous pressure measurement." },
      { h: "Key haemodynamic parameters", list: [
        "Heart rate and rhythm.",
        "Blood pressure (systolic, diastolic, mean arterial pressure, MAP).",
        "Central venous pressure (CVP) — reflects right-heart preload/volume status.",
        "Cardiac output (CO) and cardiac index (CI).",
        "Systemic vascular resistance (SVR) — afterload.",
        "Mixed/central venous oxygen saturation (SvO2/ScvO2) — oxygen delivery vs consumption."
      ] },
      { h: "Mean arterial pressure (MAP)", p: "MAP is the average pressure driving blood to the organs, estimated as MAP = diastolic + 1/3(systolic − diastolic). A MAP of at least 65 mmHg is generally needed to perfuse vital organs; falling MAP signals inadequate perfusion and often triggers vasopressor therapy." },
      { h: "Non-invasive monitoring", list: [
        "Automated oscillometric blood-pressure cuff.",
        "Continuous ECG for rate and rhythm.",
        "Pulse oximetry (SpO2) for oxygenation.",
        "Capnography (end-tidal CO2) reflecting ventilation and perfusion.",
        "Non-invasive cardiac-output monitors (bio-impedance/Doppler)."
      ] },
      { h: "Normal haemodynamic values", figure: {
        caption: "Reference ranges for common haemodynamic parameters.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal haemodynamic values table."><rect x="20" y="15" width="520" height="28" fill="#0F4C3A"/><text x="45" y="34" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">Parameter</text><text x="380" y="34" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">Normal range</text><rect x="20" y="43" width="520" height="26" fill="#F0FDF4"/><text x="45" y="61" font-family="sans-serif" font-size="11" fill="#15803D">MAP</text><text x="380" y="61" font-family="sans-serif" font-size="11" fill="#15803D">70-105 mmHg (target ≥ 65)</text><rect x="20" y="69" width="520" height="26" fill="#DCFCE7"/><text x="45" y="87" font-family="sans-serif" font-size="11" fill="#15803D">CVP</text><text x="380" y="87" font-family="sans-serif" font-size="11" fill="#15803D">2-8 mmHg</text><rect x="20" y="95" width="520" height="26" fill="#F0FDF4"/><text x="45" y="113" font-family="sans-serif" font-size="11" fill="#15803D">Cardiac output</text><text x="380" y="113" font-family="sans-serif" font-size="11" fill="#15803D">4-8 L/min</text><rect x="20" y="121" width="520" height="26" fill="#DCFCE7"/><text x="45" y="139" font-family="sans-serif" font-size="11" fill="#15803D">Cardiac index</text><text x="380" y="139" font-family="sans-serif" font-size="11" fill="#15803D">2.5-4.0 L/min/m²</text><rect x="20" y="147" width="520" height="26" fill="#F0FDF4"/><text x="45" y="165" font-family="sans-serif" font-size="11" fill="#15803D">ScvO2</text><text x="380" y="165" font-family="sans-serif" font-size="11" fill="#15803D">70-75%</text></svg>'
      } },
      { h: "Arterial line (invasive BP)", p: "An arterial catheter (usually radial) gives continuous, beat-to-beat blood pressure and easy access for arterial blood-gas sampling. It is indicated in shock, on vasoactive drugs, and where frequent gases are needed. The transducer must be zeroed to atmospheric pressure and levelled at the phlebostatic axis (4th intercostal space, mid-axillary line)." },
      { h: "Central venous pressure (CVP) monitoring", p: "A central venous catheter (internal jugular, subclavian or femoral) measures CVP — a guide to preload and volume status (normal 2-8 mmHg). A low CVP suggests hypovolaemia; a high CVP suggests fluid overload, right-heart failure or obstruction. Trends and response to a fluid challenge are more useful than a single value. The catheter also allows drug and fluid administration and central venous oxygen sampling." },
      { h: "Pulmonary artery (Swan-Ganz) catheter", p: "The pulmonary artery catheter measures pulmonary artery pressures, pulmonary capillary wedge pressure (an estimate of left-atrial/left-ventricular preload) and cardiac output by thermodilution. Its use has declined in favour of less invasive methods, but it remains valuable in complex cardiac and shock states." },
      { h: "Interpreting the data together", p: "No single number tells the whole story. The nurse integrates MAP, CVP, cardiac output, SVR and ScvO2 with clinical signs (skin, urine output, lactate, consciousness) to classify shock and judge the response to fluids, vasopressors and inotropes — for example, low MAP with low CVP and low CO suggests hypovolaemia; low MAP with high CO and low SVR suggests distributive (septic) shock." },
      { h: "Complications of invasive monitoring", list: [
        "Infection (catheter-related bloodstream infection).",
        "Bleeding and haematoma; arterial thrombosis or distal ischaemia.",
        "Pneumothorax during central-line insertion.",
        "Air embolism and catheter displacement.",
        "Accidental disconnection with rapid blood loss (arterial line)."
      ] },
      { h: "Nursing responsibilities", list: [
        "Set up, zero and level the transducer correctly; check waveform quality.",
        "Ensure the pressure bag (arterial) is at ~300 mmHg and the flush system is patent.",
        "Monitor and document readings and trends; correlate with the patient's condition.",
        "Maintain aseptic technique and a secure, well-labelled circuit (never give drugs into an arterial line).",
        "Observe for complications; check limb perfusion distal to an arterial line.",
        "Alarm limits set appropriately and responded to promptly."
      ] },
      { h: "Safety points", list: [
        "Always label arterial lines clearly to prevent inadvertent drug injection.",
        "Re-zero after position changes and if readings seem inaccurate.",
        "Keep insertion sites visible and monitored for infection and bleeding.",
        "Have clamps and dressings ready in case of disconnection."
      ] },
      { h: "Clinical relevance", p: "Accurate haemodynamic monitoring lets the team fine-tune resuscitation and detect deterioration before catastrophe. The nurse's technical accuracy (zeroing, levelling), vigilance for complications and correct interpretation of trends make monitoring genuinely useful and safe." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Define haemodynamic monitoring and list the key parameters measured.",
      "Explain mean arterial pressure, how it is calculated, and its clinical significance.",
      "Describe central venous pressure monitoring, its normal value and interpretation.",
      "Discuss the complications of invasive haemodynamic monitoring and their prevention.",
      "Outline the nursing responsibilities in caring for a patient with an arterial line."
    ],
    assessment: [
      { type: "mcq", q: "The minimum mean arterial pressure generally needed to perfuse vital organs is about:", options: ["45 mmHg", "65 mmHg", "90 mmHg", "120 mmHg"], answer: 1, rationale: "A MAP of at least 65 mmHg is the usual target for adequate organ perfusion." },
      { type: "mcq", q: "The normal range for central venous pressure (CVP) is approximately:", options: ["2-8 mmHg", "15-25 mmHg", "30-40 mmHg", "0-1 mmHg"], answer: 0, rationale: "Normal CVP is 2-8 mmHg, reflecting right-heart preload/volume status." },
      { type: "mcq", q: "Before recording invasive pressures the transducer must be zeroed and levelled at the:", options: ["Sternal notch", "Phlebostatic axis (4th intercostal space, mid-axillary line)", "Umbilicus", "Xiphoid tip"], answer: 1, rationale: "The phlebostatic axis approximates the level of the right atrium for accurate readings." },
      { type: "mcq", q: "A low CVP most likely indicates:", options: ["Fluid overload", "Hypovolaemia", "Right-heart failure", "Cardiac tamponade"], answer: 1, rationale: "A low CVP suggests reduced preload/volume, i.e. hypovolaemia." },
      { type: "mcq", q: "A key safety rule for an arterial line is to:", options: ["Give IV drugs through it to save time", "Never inject drugs into it and label it clearly", "Leave it unzeroed", "Keep the pressure bag empty"], answer: 1, rationale: "Drugs must never be injected into an arterial line; clear labelling prevents dangerous errors." },
      { type: "mcq", q: "Mean arterial pressure can be estimated as:", options: ["Systolic − diastolic", "Diastolic + 1/3(systolic − diastolic)", "Systolic × 2", "(Systolic + heart rate)/2"], answer: 1, rationale: "MAP ≈ diastolic + one-third of the pulse pressure (systolic − diastolic)." },
      { type: "mcq", q: "Low MAP with high cardiac output and low systemic vascular resistance suggests:", options: ["Hypovolaemic shock", "Cardiogenic shock", "Distributive (septic) shock", "Obstructive shock"], answer: 2, rationale: "Vasodilation (low SVR) with high output and low MAP is the pattern of distributive/septic shock." },
      { type: "mcq", q: "A serious complication specific to CENTRAL line insertion is:", options: ["Distal limb ischaemia", "Pneumothorax", "Wrist pain", "Cuff over-inflation"], answer: 1, rationale: "Puncture of the pleura during subclavian/internal jugular insertion can cause pneumothorax." },
      { type: "mcq", q: "The arterial pressure-bag flush system is normally maintained at about:", options: ["50 mmHg", "150 mmHg", "300 mmHg", "500 mmHg"], answer: 2, rationale: "A pressure of ~300 mmHg keeps the line patent with a slow continuous flush." },
      { type: "mcq", q: "A central venous oxygen saturation (ScvO2) below normal suggests:", options: ["Excess oxygen delivery", "Inadequate oxygen delivery relative to consumption", "Normal perfusion", "Hyperoxia"], answer: 1, rationale: "Low ScvO2 (< ~70%) indicates that oxygen delivery is not meeting tissue demand." }
      , { type: "fill", q: "The average pressure perfusing the organs is the ____ arterial pressure.", accept: ["mean"], rationale: "Mean arterial pressure (MAP) is the perfusion pressure to the organs." }
      , { type: "fill", q: "CVP is measured through a ____ venous catheter.", accept: ["central"], rationale: "A central venous catheter measures central venous pressure." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "ecc-11-fluids-blood",
    unit: "Unit 5 · Fluids, Trauma & Burns",
    title: "Fluid Resuscitation, Blood & Blood Products",
    readMinutes: 25,
    summary: "Body fluid compartments, types of intravenous fluids, principles of fluid resuscitation, blood and blood products, safe transfusion practice, and recognition and management of transfusion reactions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Body fluid compartments", p: "Total body water is about 60% of body weight in an adult, divided into intracellular fluid (about two-thirds) and extracellular fluid (about one-third), the latter being interstitial fluid and plasma. Fluid balance is regulated by thirst, the kidneys, ADH and aldosterone. Understanding these compartments explains how different IV fluids distribute." },
      { h: "Aims of fluid resuscitation", p: "Fluid resuscitation aims to restore an adequate circulating volume and tissue perfusion in shock and dehydration. Goals are guided by end-points: improving heart rate, blood pressure/MAP (≥ 65 mmHg), capillary refill, mental state, urine output (≥ 0.5 mL/kg/hr) and lactate clearance, avoiding both under- and over-resuscitation." },
      { h: "Types of intravenous fluids", list: [
        "Crystalloids — clear salt/sugar solutions that cross membranes: isotonic (0.9% normal saline, Ringer's lactate/Hartmann's) for resuscitation; hypotonic (0.45% saline) and hypertonic (3% saline) for specific needs; 5% dextrose (free water once metabolised).",
        "Colloids — larger molecules staying in the vascular space longer (albumin, gelatins); used selectively.",
        "Balanced solutions (Hartmann's/Ringer's lactate) are often preferred over large volumes of normal saline to avoid hyperchloraemic acidosis."
      ] },
      { h: "Isotonic, hypotonic, hypertonic", figure: {
        caption: "How fluid tonicity moves water relative to the cell.",
        svg: '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tonicity and water movement."><rect x="20" y="20" width="160" height="135" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="100" y="44" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Isotonic</text><circle cx="100" cy="95" r="34" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="100" y="145" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">no net shift</text><rect x="200" y="20" width="160" height="135" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="44" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Hypotonic</text><circle cx="280" cy="95" r="42" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="145" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">cell swells</text><rect x="380" y="20" width="160" height="135" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="460" y="44" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Hypertonic</text><circle cx="460" cy="95" r="26" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="460" y="145" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">cell shrinks</text></svg>'
      } },
      { h: "Principles of resuscitation", list: [
        "Use warmed isotonic crystalloid boluses (e.g. 250-500 mL) and reassess after each.",
        "In haemorrhage, give blood early and limit crystalloid; consider permissive hypotension until bleeding is controlled in trauma.",
        "Titrate to physiological end-points, not a fixed volume.",
        "Avoid over-resuscitation — pulmonary oedema, tissue oedema and dilutional coagulopathy."
      ] },
      { h: "Blood and its components", list: [
        "Whole blood — rarely used now; separated into components for efficient use.",
        "Packed red blood cells (PRBC) — for anaemia and blood loss; raise oxygen-carrying capacity.",
        "Fresh frozen plasma (FFP) — clotting factors for coagulopathy/massive transfusion.",
        "Platelets — for thrombocytopenia or platelet dysfunction with bleeding.",
        "Cryoprecipitate — fibrinogen and factor VIII/XIII.",
        "Albumin — colloid for selected indications."
      ] },
      { h: "Blood groups & compatibility", p: "The ABO and Rhesus (Rh D) systems are most important. Group O negative is the universal donor for emergency red cells; AB positive is the universal recipient. Transfusion requires correct grouping and cross-matching; ABO-incompatible transfusion causes potentially fatal acute haemolysis, so patient identification is critical." },
      { h: "Massive transfusion", p: "Massive transfusion (roughly replacing the patient's blood volume within 24 hours, or ≥ 10 units) is used in major haemorrhage. A balanced ratio of red cells, plasma and platelets (often 1:1:1) with tranexamic acid and calcium replacement helps prevent the lethal triad of hypothermia, acidosis and coagulopathy." },
      { h: "Safe transfusion practice", list: [
        "Positive patient identification and matching the unit to the patient at the bedside (two-person check).",
        "Check compatibility label, blood group, expiry and pack integrity.",
        "Use a blood-giving set with a filter; do not add drugs; only 0.9% saline is compatible in the line.",
        "Take baseline observations, then monitor closely, especially in the first 15 minutes.",
        "Complete each unit within the recommended time (usually within 4 hours).",
        "Document and manage any reaction immediately."
      ] },
      { h: "Transfusion reactions", list: [
        "Acute haemolytic (ABO incompatibility) — fever, loin/back pain, hypotension, dark urine; life-threatening.",
        "Febrile non-haemolytic — fever/chills; common and usually mild.",
        "Allergic/anaphylactic — urticaria to airway compromise and shock.",
        "Transfusion-associated circulatory overload (TACO) — dyspnoea, hypertension, pulmonary oedema.",
        "Transfusion-related acute lung injury (TRALI) — acute hypoxaemia and lung infiltrates.",
        "Delayed reactions and transfusion-transmitted infection."
      ] },
      { h: "Management of a suspected reaction", list: [
        "STOP the transfusion immediately and keep IV access open with saline.",
        "Assess ABC and check patient identity against the unit.",
        "Treat the reaction (fluids, adrenaline for anaphylaxis, oxygen, diuretics for TACO).",
        "Inform the doctor and blood bank; return the unit and take samples as required.",
        "Monitor vital signs and urine output; document fully."
      ] },
      { h: "Nursing responsibilities", list: [
        "Obtain informed consent and check baseline observations.",
        "Perform meticulous identity and compatibility checks.",
        "Administer and monitor safely; recognise reactions early.",
        "Maintain accurate fluid-balance and transfusion records.",
        "Educate the patient about the reason for transfusion and what to report."
      ] },
      { h: "Clinical relevance", p: "Fluids and blood are among the most powerful — and potentially dangerous — therapies in critical care. Correct fluid choice, careful titration and rigorous transfusion checking prevent both under-resuscitation and fatal transfusion errors." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Describe the body fluid compartments and classify intravenous fluids.",
      "Explain the principles and end-points of fluid resuscitation in shock.",
      "List the main blood components and their indications.",
      "Describe safe blood-transfusion practice and the nurse's checking responsibilities.",
      "Identify the types of transfusion reaction and outline the immediate management of a suspected reaction."
    ],
    assessment: [
      { type: "mcq", q: "The isotonic crystalloid commonly used for resuscitation is:", options: ["0.9% normal saline / Ringer's lactate", "5% dextrose", "0.45% saline", "3% saline"], answer: 0, rationale: "Isotonic crystalloids such as normal saline and Ringer's lactate expand the intravascular space for resuscitation." },
      { type: "mcq", q: "The universal donor blood group for emergency red cells is:", options: ["AB positive", "A positive", "O negative", "B negative"], answer: 2, rationale: "O negative red cells lack A, B and RhD antigens, making them safe when the group is unknown." },
      { type: "mcq", q: "The MOST dangerous transfusion reaction, caused by ABO incompatibility, is:", options: ["Febrile non-haemolytic reaction", "Mild urticaria", "Delayed reaction", "Acute haemolytic reaction"], answer: 3, rationale: "ABO-incompatible acute haemolysis can rapidly cause shock, renal failure and death." },
      { type: "mcq", q: "The FIRST action on suspecting a transfusion reaction is to:", options: ["Slow the transfusion", "Stop the transfusion and keep the line open with saline", "Give paracetamol and continue", "Remove the cannula"], answer: 1, rationale: "Stopping the transfusion immediately while maintaining IV access is the priority." },
      { type: "mcq", q: "Which product is given to replace clotting factors in coagulopathy?", options: ["Packed red cells", "Fresh frozen plasma", "Platelets", "Albumin"], answer: 1, rationale: "Fresh frozen plasma contains clotting factors and is used for coagulopathy and massive transfusion." },
      { type: "mcq", q: "The only intravenous solution that may be run in the same line as blood is:", options: ["5% dextrose", "0.9% normal saline", "Ringer's lactate", "Hypertonic saline"], answer: 1, rationale: "Only 0.9% saline is compatible; calcium-containing or dextrose fluids can cause clotting or haemolysis." },
      { type: "mcq", q: "Transfusion-associated circulatory overload (TACO) typically presents with:", options: ["Hypotension and warm skin", "Dyspnoea, hypertension and pulmonary oedema", "Loin pain and dark urine", "Isolated fever only"], answer: 1, rationale: "TACO is fluid overload — dyspnoea, raised BP and pulmonary oedema, especially in at-risk patients." },
      { type: "mcq", q: "In major haemorrhage a balanced massive-transfusion ratio of red cells:plasma:platelets is often:", options: ["4:1:1", "1:1:1", "10:1:0", "2:0:1"], answer: 1, rationale: "A 1:1:1 ratio helps prevent dilutional coagulopathy in massive haemorrhage." },
      { type: "mcq", q: "A resuscitation end-point indicating improving perfusion is:", options: ["Falling urine output", "Rising lactate", "Urine output ≥ 0.5 mL/kg/hr and lactate clearing", "Worsening confusion"], answer: 2, rationale: "Restored urine output and falling lactate reflect improved tissue perfusion." },
      { type: "mcq", q: "One unit of blood should generally be completed within:", options: ["30 minutes", "4 hours", "12 hours", "24 hours"], answer: 1, rationale: "To limit bacterial growth, a unit is transfused within 4 hours of leaving controlled storage." }
      , { type: "fill", q: "The universal recipient blood group is ____ positive.", accept: ["ab", "ab positive"], rationale: "AB positive individuals can receive all ABO/Rh groups." }
      , { type: "fill", q: "Clear salt or sugar IV solutions that cross membranes are called ____.", accept: ["crystalloids", "crystalloid"], rationale: "Crystalloids (e.g. saline, Ringer's lactate) are used widely for resuscitation." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "ecc-12-trauma",
    unit: "Unit 5 · Fluids, Trauma & Burns",
    title: "Trauma & Polytrauma Nursing",
    readMinutes: 25,
    summary: "Concepts of trauma and polytrauma, mechanism of injury, the trauma primary and secondary survey, management of specific injuries, spinal precautions, and the nursing care of the trauma patient.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "Trauma is physical injury caused by an external force. Polytrauma (multiple/major trauma) is injury to two or more body regions or systems, at least one of which is life-threatening. Trauma is a leading cause of death and disability in young adults, and outcomes depend heavily on rapid, organised care." },
      { h: "Mechanism of injury", p: "Understanding how the injury happened predicts the pattern of injury. Blunt trauma (road-traffic crashes, falls) transfers energy widely; penetrating trauma (stab, gunshot) injures along the track; blast injuries combine mechanisms. High-energy mechanisms (high-speed crash, fall from height, ejection) warn of serious hidden injury." },
      { h: "The trimodal distribution of trauma deaths", list: [
        "Immediate (seconds-minutes) — catastrophic brain, heart or great-vessel injury; largely prevented, not treated.",
        "Early (minutes-hours) — the 'golden hour'; deaths from airway loss, breathing and haemorrhage that timely care can prevent.",
        "Late (days-weeks) — sepsis and multi-organ failure; prevented by good early and critical care."
      ] },
      { h: "Primary survey in trauma (<C>ABCDE)", p: "Trauma resuscitation follows ABCDE with two modifications: catastrophic external haemorrhage is controlled first (the 'C' before A — using direct pressure, tourniquet or haemostatic dressing), and the cervical spine is protected throughout airway management. Life-threats are treated as they are found.", figure: {
        caption: "Trauma primary survey priorities.",
        svg: '<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trauma CABCDE priorities."><rect x="30" y="20" width="500" height="125" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="44" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Trauma Primary Survey</text><text x="55" y="70" font-family="sans-serif" font-size="11" fill="#15803D">C — Catastrophic haemorrhage control (pressure/tourniquet)</text><text x="55" y="90" font-family="sans-serif" font-size="11" fill="#15803D">A — Airway + cervical-spine protection</text><text x="55" y="110" font-family="sans-serif" font-size="11" fill="#15803D">B — Breathing (tension pneumothorax, flail, haemothorax)</text><text x="55" y="130" font-family="sans-serif" font-size="11" fill="#15803D">C — Circulation · D — Disability · E — Exposure</text></svg>'
      } },
      { h: "Immediately life-threatening chest injuries", list: [
        "Tension pneumothorax — decompress immediately (needle then chest drain).",
        "Open (sucking) chest wound — three-sided occlusive dressing.",
        "Massive haemothorax — chest drain and volume/blood.",
        "Flail chest — oxygen, analgesia, may need ventilation.",
        "Cardiac tamponade — pericardiocentesis/surgery."
      ] },
      { h: "Haemorrhage & fluid strategy", p: "Uncontrolled bleeding is the leading preventable cause of trauma death. Control external bleeding early, give tranexamic acid, activate massive transfusion where needed, and use damage-control resuscitation (permissive hypotension, balanced blood products, prevention of the lethal triad) until surgical or radiological haemostasis is achieved." },
      { h: "Spinal injury & immobilisation", p: "Suspect spinal injury with any significant mechanism or neurological signs. Maintain in-line immobilisation, use log-roll technique to move the patient, and apply a semi-rigid collar with head blocks as indicated. Assess motor, sensory and reflex function. Neurogenic shock (hypotension with bradycardia) may accompany high spinal-cord injury." },
      { h: "Head & abdominal injury", list: [
        "Head injury — monitor GCS and pupils, prevent secondary injury (hypoxia, hypotension), image with CT; watch for rising ICP.",
        "Abdominal injury — may bleed silently; use FAST ultrasound/CT; distension, tenderness and shock suggest intra-abdominal haemorrhage requiring surgery.",
        "Pelvic fracture — can cause major concealed bleeding; apply a pelvic binder."
      ] },
      { h: "Secondary survey & investigations", p: "After stabilisation, perform a systematic head-to-toe examination with an AMPLE history to find all injuries, including a log-roll to inspect the back. Investigations include trauma bloods and cross-match, arterial gas/lactate, X-rays (chest, pelvis), FAST ultrasound and CT ('trauma scan') for major cases." },
      { h: "Nursing management of the trauma patient", list: [
        "Rapid, team-based ABCDE assessment and assistance with interventions.",
        "Control bleeding, establish large-bore IV access, and manage fluids/blood.",
        "Maintain spinal precautions and safe patient movement (log-roll).",
        "Prevent hypothermia (warm the patient, environment and fluids).",
        "Continuous monitoring, pain management and accurate documentation (medico-legal).",
        "Wound care, tetanus prophylaxis and antibiotics as indicated.",
        "Psychological support and family communication; prepare for theatre/transfer."
      ] },
      { h: "Complications", list: [
        "Haemorrhagic shock and the lethal triad (hypothermia, acidosis, coagulopathy).",
        "ARDS, fat embolism (long-bone fractures), venous thromboembolism.",
        "Compartment syndrome, infection and sepsis.",
        "Multi-organ dysfunction and rhabdomyolysis with acute kidney injury."
      ] },
      { h: "Clinical relevance", p: "Organised trauma care within the 'golden hour' — control catastrophic bleeding, protect the airway and spine, and resuscitate with blood — saves the most preventable deaths. The nurse is central to this rapid, coordinated response." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Define trauma and polytrauma and explain the significance of the mechanism of injury.",
      "Describe the modified trauma primary survey (<C>ABCDE).",
      "List the immediately life-threatening chest injuries and their emergency management.",
      "Explain the principles of damage-control resuscitation in major haemorrhage.",
      "Discuss the nursing management of a polytrauma patient including spinal precautions."
    ],
    assessment: [
      { type: "mcq", q: "Polytrauma is best defined as:", options: ["Injury to two or more regions with at least one life-threatening", "Any single fracture", "A minor laceration", "Injury only to the limbs"], answer: 0, rationale: "Polytrauma involves multiple body regions with at least one life-threatening injury." },
      { type: "mcq", q: "In the modified trauma primary survey the initial 'C' before Airway stands for:", options: ["Circulation assessment", "Cervical collar removal", "Catastrophic external haemorrhage control", "CT scan"], answer: 2, rationale: "Catastrophic haemorrhage is controlled first because exsanguination kills faster than airway loss in some cases." },
      { type: "mcq", q: "The 'golden hour' refers to the:", options: ["Time to complete paperwork", "First hour of the nursing shift", "Time before the ambulance arrives", "Early period where prompt care prevents many trauma deaths"], answer: 3, rationale: "The early phase (golden hour) is when timely care of airway, breathing and bleeding prevents avoidable deaths." },
      { type: "mcq", q: "The immediate treatment of a tension pneumothorax is:", options: ["Needle/finger decompression then chest drain", "Chest X-ray first", "Oral antibiotics", "Observation only"], answer: 0, rationale: "Tension pneumothorax is a clinical diagnosis needing immediate decompression, not delay for imaging." },
      { type: "mcq", q: "The correct method to move a patient with suspected spinal injury is the:", options: ["Two-person lift by the arms", "Log-roll with in-line immobilisation", "Sit them up quickly", "Drag by the legs"], answer: 1, rationale: "Log-rolling keeps the spine aligned, preventing secondary cord injury." },
      { type: "mcq", q: "The leading PREVENTABLE cause of death in trauma is:", options: ["Infection", "Uncontrolled haemorrhage", "Fat embolism", "Pressure injury"], answer: 1, rationale: "Haemorrhage is the leading preventable cause of early trauma death, hence early bleeding control." },
      { type: "mcq", q: "The 'lethal triad' in major trauma consists of hypothermia, acidosis and:", options: ["Hyperglycaemia", "Coagulopathy", "Hypertension", "Bradycardia"], answer: 1, rationale: "Hypothermia, acidosis and coagulopathy reinforce each other and worsen bleeding." },
      { type: "mcq", q: "A concealed source of major blood loss to suspect in blunt trauma is a:", options: ["Small scalp cut", "Pelvic fracture", "Finger laceration", "Nosebleed"], answer: 1, rationale: "Pelvic fractures can cause large hidden retroperitoneal bleeding; a pelvic binder is applied." },
      { type: "mcq", q: "A bedside imaging tool used to detect intra-abdominal free fluid in trauma is:", options: ["MRI", "FAST ultrasound", "Barium meal", "Spirometry"], answer: 1, rationale: "The FAST scan rapidly detects free fluid (blood) in the abdomen and pericardium." },
      { type: "mcq", q: "An open (sucking) chest wound is initially managed with a:", options: ["Fully sealed dressing on all sides", "Three-sided occlusive dressing", "Tight circumferential bandage", "No dressing"], answer: 1, rationale: "A three-sided dressing lets air escape on expiration but not enter, preventing tension physiology." }
      , { type: "fill", q: "Moving a spine-injured patient while keeping alignment is called the ____ technique.", accept: ["log-roll", "log roll", "logroll"], rationale: "The log-roll keeps the vertebral column aligned during movement." }
      , { type: "fill", q: "The leading preventable cause of early trauma death is uncontrolled ____.", accept: ["haemorrhage", "hemorrhage", "bleeding"], rationale: "Haemorrhage control is the priority to prevent avoidable trauma death." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "ecc-13-burns",
    unit: "Unit 5 · Fluids, Trauma & Burns",
    title: "Burns Emergency Care",
    readMinutes: 25,
    summary: "Types and causes of burns, depth and extent estimation (rule of nines), pathophysiology and burn shock, emergency management, fluid resuscitation (Parkland formula), wound care, and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition & causes", p: "A burn is tissue injury caused by heat, chemicals, electricity, radiation or friction. Causes include thermal (flame, scald, contact), chemical (acids/alkalis), electrical (low/high voltage), and radiation burns. The severity depends on the temperature, duration of contact, depth, extent and site of the burn and the patient's age and comorbidities." },
      { h: "Classification by depth", list: [
        "Superficial (first-degree) — epidermis only; red, dry, painful (e.g. sunburn); heals in days.",
        "Superficial partial-thickness (second-degree) — epidermis and upper dermis; blisters, moist, very painful.",
        "Deep partial-thickness — into deeper dermis; less painful, patchy colour, slower healing.",
        "Full-thickness (third-degree) — entire dermis; dry, leathery, white/charred, painless (nerves destroyed); needs grafting.",
        "Fourth-degree — extends to muscle/bone."
      ] },
      { h: "Estimating extent — rule of nines", p: "The Wallace 'rule of nines' rapidly estimates the total body surface area (TBSA) burned in adults: head and neck 9%, each arm 9%, each leg 18%, anterior trunk 18%, posterior trunk 18%, and perineum 1%. The patient's palm (including fingers) is about 1% TBSA and is useful for small or scattered burns. Only partial- and full-thickness burns are counted.", figure: {
        caption: "Rule of nines — adult body surface area percentages.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rule of nines percentages."><rect x="30" y="15" width="500" height="170" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Rule of Nines (Adult)</text><text x="60" y="68" font-family="sans-serif" font-size="12" fill="#15803D">Head &amp; neck ............ 9%</text><text x="60" y="90" font-family="sans-serif" font-size="12" fill="#15803D">Each arm ................. 9% (both = 18%)</text><text x="60" y="112" font-family="sans-serif" font-size="12" fill="#15803D">Each leg ................. 18% (both = 36%)</text><text x="60" y="134" font-family="sans-serif" font-size="12" fill="#15803D">Anterior trunk ........... 18%</text><text x="60" y="156" font-family="sans-serif" font-size="12" fill="#15803D">Posterior trunk .......... 18%</text><text x="60" y="178" font-family="sans-serif" font-size="12" fill="#15803D">Perineum ................. 1%  ·  Palm ≈ 1%</text></svg>'
      } },
      { h: "Pathophysiology & burn shock", p: "Major burns cause massive fluid shift: increased capillary permeability lets plasma leak into the interstitium (oedema), reducing circulating volume and causing hypovolaemic ('burn') shock in the first 24-48 hours. There is also protein and electrolyte loss, red-cell destruction, hypermetabolism, and a high risk of infection once the skin barrier is lost. Circumferential burns can constrict and impair circulation or breathing." },
      { h: "Emergency (first-aid) management", list: [
        "Stop the burning — remove from source, extinguish flames, remove hot/soaked or chemical-contaminated clothing and jewellery.",
        "Cool the burn with running cool (not ice-cold) water for about 20 minutes; avoid hypothermia.",
        "For chemical burns, brush off dry powder then irrigate copiously with water.",
        "Assess ABCDE; give high-flow oxygen; suspect airway/inhalation injury.",
        "Cover the burn with clean, non-adherent (e.g. cling film) dressing."
      ] },
      { h: "Airway & inhalation injury", p: "Suspect inhalation injury with burns in an enclosed space, facial burns, singed nasal hair, soot in the mouth, hoarseness or stridor. The airway can swell rapidly, so early intubation before oedema closes it may be life-saving. Give high-concentration oxygen; consider carbon monoxide and cyanide poisoning in smoke inhalation." },
      { h: "Fluid resuscitation — Parkland formula", p: "For significant burns (adults > 15-20% TBSA), fluid is calculated by the Parkland formula: 4 mL × body weight (kg) × %TBSA burned of Ringer's lactate over 24 hours, with HALF given in the first 8 hours (from the time of injury) and the remainder over the next 16 hours. Fluids are then titrated to a urine output of 0.5-1 mL/kg/hr (higher in children and electrical burns)." },
      { h: "Worked example", p: "A 70 kg adult with 30% TBSA burns: 4 × 70 × 30 = 8,400 mL of Ringer's lactate in 24 hours. The first half (4,200 mL) is given in the first 8 hours (about 525 mL/hr), and the remaining 4,200 mL over the next 16 hours, adjusting to urine output." },
      { h: "Ongoing & wound management", list: [
        "Analgesia (often IV opioids); tetanus prophylaxis.",
        "Aseptic wound care with topical antimicrobials (e.g. silver sulfadiazine) and appropriate dressings.",
        "Escharotomy for constricting circumferential full-thickness burns.",
        "Nutritional support for the hypermetabolic state (high calorie/protein).",
        "Early referral to a burns unit for major or specialised burns; skin grafting for full-thickness."
      ] },
      { h: "Nursing management", list: [
        "Prioritise airway, oxygenation and fluid resuscitation; monitor hourly urine output.",
        "Strict intake-output, weight and haemodynamic monitoring.",
        "Meticulous infection prevention and aseptic wound care.",
        "Pain assessment and effective analgesia before dressings.",
        "Maintain warmth and prevent hypothermia; position to reduce oedema and contractures.",
        "Psychological support and, later, rehabilitation, physiotherapy and scar management."
      ] },
      { h: "Complications", list: [
        "Hypovolaemic (burn) shock and acute kidney injury.",
        "Airway obstruction and inhalation lung injury.",
        "Wound and systemic infection/sepsis.",
        "Curling's (stress) ulcer, contractures and hypertrophic scarring.",
        "Compartment syndrome from circumferential burns."
      ] },
      { h: "Clinical relevance", p: "Accurate estimation of burn depth and extent, timely airway protection and correct fluid resuscitation in the first 24 hours are the interventions that most affect survival. The nurse's calculation, monitoring and infection-control skills are decisive throughout." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Classify burns by depth and describe the features of each.",
      "Explain the rule of nines and estimate the burned area in a given scenario.",
      "Describe the pathophysiology of burn shock.",
      "Calculate the fluid requirement using the Parkland formula for a stated patient and describe how it is given.",
      "Discuss the emergency and nursing management of a patient with major burns."
    ],
    assessment: [
      { type: "mcq", q: "In the adult rule of nines, each entire lower limb is assigned:", options: ["9%", "27%", "18%", "36%"], answer: 2, rationale: "Each leg is 18% (front and back); both legs together total 36%." },
      { type: "mcq", q: "A full-thickness (third-degree) burn is characteristically:", options: ["Dry, leathery, white/charred and painless", "Very painful with blisters", "Only red and dry", "Always superficial"], answer: 0, rationale: "Full-thickness burns destroy nerve endings, so they are painless with a dry leathery appearance and need grafting." },
      { type: "mcq", q: "Using the Parkland formula, a 60 kg patient with 25% TBSA burns needs, over 24 hours:", options: ["1,500 mL", "3,000 mL", "12,000 mL", "6,000 mL"], answer: 3, rationale: "4 × 60 × 25 = 6,000 mL of Ringer's lactate in 24 hours." },
      { type: "mcq", q: "In the Parkland formula, the proportion of fluid given in the first 8 hours is:", options: ["One quarter", "One half", "Three quarters", "All of it"], answer: 1, rationale: "Half the calculated volume is given in the first 8 hours from the time of injury." },
      { type: "mcq", q: "The target urine output guiding burn fluid resuscitation in an adult is:", options: ["0.1 mL/kg/hr", "0.5-1 mL/kg/hr", "3-4 mL/kg/hr", "No monitoring needed"], answer: 1, rationale: "Fluids are titrated to a urine output of 0.5-1 mL/kg/hr in adults." },
      { type: "mcq", q: "Which finding most strongly suggests inhalation injury?", options: ["A burn on the foot", "Singed nasal hair, soot in the mouth and hoarseness", "A small hand blister", "Normal voice"], answer: 1, rationale: "Facial soot, singed hairs and hoarseness signal airway/inhalation injury requiring early airway protection." },
      { type: "mcq", q: "First-aid cooling of a burn should use:", options: ["Ice directly on the skin", "Running cool water for about 20 minutes", "Hot water", "No cooling"], answer: 1, rationale: "Cool (not ice-cold) running water for ~20 minutes limits injury; ice causes further damage and hypothermia." },
      { type: "mcq", q: "The fluid of choice in the Parkland formula is:", options: ["5% dextrose", "Ringer's lactate", "Colloid only", "Hypertonic saline"], answer: 1, rationale: "The Parkland formula uses Ringer's lactate (a balanced crystalloid)." },
      { type: "mcq", q: "A stress ulcer that may complicate severe burns is called a:", options: ["Cushing's ulcer", "Curling's ulcer", "Marjolin's ulcer", "Venous ulcer"], answer: 1, rationale: "Curling's ulcer is a stress ulcer associated with major burns." },
      { type: "mcq", q: "A constricting circumferential full-thickness burn impairing circulation may require:", options: ["Escharotomy", "Simple dressing only", "Oral fluids", "No intervention"], answer: 0, rationale: "Escharotomy releases the constricting eschar to restore circulation or ventilation." }
      , { type: "fill", q: "The patient's palm represents about ____ percent of total body surface area.", accept: ["1", "one"], rationale: "The palm (with fingers) is approximately 1% TBSA, useful for small burns." }
      , { type: "fill", q: "The formula used to calculate burn fluid resuscitation is the ____ formula.", accept: ["parkland"], rationale: "The Parkland formula (4 mL × kg × %TBSA) guides burn fluid resuscitation." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "ecc-14-poisoning",
    unit: "Unit 6 · Medical & Neurological Emergencies",
    title: "Poisoning & Drug Overdose",
    readMinutes: 25,
    summary: "Types and routes of poisoning, general principles of management, decontamination and elimination, common poisons and their antidotes, and the nursing care of the poisoned or overdosed patient including self-harm.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition & scope", p: "Poisoning is injury or death caused by a substance that damages the body through its chemical action. It may be accidental (children, occupational, environmental), intentional (self-harm/suicide attempt, homicide) or iatrogenic (medication error). Overdose is poisoning with an excessive amount of a drug. Poisoning is a common and important emergency, especially deliberate self-poisoning." },
      { h: "Routes of exposure", list: [
        "Ingestion (most common) — drugs, chemicals, plants.",
        "Inhalation — carbon monoxide, smoke, gases.",
        "Dermal / mucosal absorption — pesticides, chemicals.",
        "Injection — drugs, venom (snake/insect bites)."
      ] },
      { h: "General principles of management", p: "Treat the patient, not the poison. The priorities are: resuscitation (ABCDE), risk assessment (what, how much, when, why), supportive care, decontamination, specific antidotes where available, and enhanced elimination when indicated. Identify the poison from history, containers, witnesses and toxidromes, and consult a poison information centre." },
      { h: "The ABCDE + 'DEFG' approach", list: [
        "Airway/Breathing — protect airway (reduced consciousness), give oxygen.",
        "Circulation — treat hypotension/arrhythmias, IV access.",
        "Disability — assess GCS/pupils; 'Don't Ever Forget Glucose'.",
        "Exposure — decontaminate, examine, keep warm.",
        "Screen for and treat co-ingestants and complications."
      ] },
      { h: "Toxidromes (symptom patterns)", list: [
        "Cholinergic (organophosphates) — salivation, lacrimation, urination, defecation, bradycardia, small pupils (SLUDGE).",
        "Anticholinergic — dry, hot, flushed skin, dilated pupils, confusion, urinary retention.",
        "Opioid — pinpoint pupils, respiratory depression, coma.",
        "Sympathomimetic — agitation, tachycardia, hypertension, dilated pupils, sweating."
      ] },
      { h: "Decontamination", list: [
        "Skin/eye — remove clothing, irrigate copiously.",
        "Activated charcoal — adsorbs many poisons if given early (usually within 1 hour) and the airway is protected; not for corrosives, alcohols, iron, lithium.",
        "Gastric lavage — rarely used now, only for recent life-threatening ingestion with a protected airway.",
        "Whole-bowel irrigation — for certain sustained-release or metal ingestions.",
        "Induced emesis (ipecac) is no longer recommended."
      ] },
      { h: "Enhanced elimination", list: [
        "Urinary alkalinisation — for salicylate (aspirin) poisoning.",
        "Haemodialysis — for methanol, ethylene glycol, salicylates, lithium.",
        "Multiple-dose activated charcoal — for some drugs (e.g. theophylline, carbamazepine)."
      ] },
      { h: "Common poisons & antidotes", figure: {
        caption: "Key poisons and their specific antidotes.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Poisons and antidotes table."><rect x="20" y="15" width="520" height="28" fill="#0F4C3A"/><text x="45" y="34" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">Poison</text><text x="330" y="34" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">Antidote</text><rect x="20" y="43" width="520" height="26" fill="#F0FDF4"/><text x="45" y="61" font-family="sans-serif" font-size="11" fill="#15803D">Paracetamol</text><text x="330" y="61" font-family="sans-serif" font-size="11" fill="#15803D">N-acetylcysteine</text><rect x="20" y="69" width="520" height="26" fill="#DCFCE7"/><text x="45" y="87" font-family="sans-serif" font-size="11" fill="#15803D">Opioids</text><text x="330" y="87" font-family="sans-serif" font-size="11" fill="#15803D">Naloxone</text><rect x="20" y="95" width="520" height="26" fill="#F0FDF4"/><text x="45" y="113" font-family="sans-serif" font-size="11" fill="#15803D">Benzodiazepines</text><text x="330" y="113" font-family="sans-serif" font-size="11" fill="#15803D">Flumazenil (cautiously)</text><rect x="20" y="121" width="520" height="26" fill="#DCFCE7"/><text x="45" y="139" font-family="sans-serif" font-size="11" fill="#15803D">Organophosphates</text><text x="330" y="139" font-family="sans-serif" font-size="11" fill="#15803D">Atropine + pralidoxime</text><rect x="20" y="147" width="520" height="26" fill="#F0FDF4"/><text x="45" y="165" font-family="sans-serif" font-size="11" fill="#15803D">Iron / Warfarin / CO</text><text x="330" y="165" font-family="sans-serif" font-size="11" fill="#15803D">Desferrioxamine / Vit K / O2</text></svg>'
      } },
      { h: "Paracetamol (acetaminophen) overdose", p: "Paracetamol is a common overdose that can cause fatal hepatic failure, often with few early symptoms. A timed plasma level guides treatment against a nomogram; the antidote N-acetylcysteine is most effective within 8 hours of ingestion. This illustrates why history of timing and prompt treatment are vital." },
      { h: "Deliberate self-harm & suicide risk", p: "Many poisonings are acts of self-harm. Alongside medical management, the nurse provides a non-judgemental, compassionate approach, ensures patient safety (remove means, close observation), performs a risk assessment for further self-harm/suicide, and arranges psychiatric/mental-health assessment before discharge. Confidentiality, dignity and legal documentation are important." },
      { h: "Nursing management", list: [
        "Rapid ABCDE assessment and airway protection in the unconscious patient.",
        "Continuous monitoring of vital signs, ECG, GCS, glucose and urine output.",
        "Safe administration of antidotes, charcoal and supportive treatment.",
        "Accurate history-taking and preservation of evidence (containers) where relevant.",
        "Prevent complications (aspiration, arrhythmia, organ injury).",
        "Psychological support, suicide-risk assessment and mental-health referral.",
        "Health education on safe medicine storage and poison prevention."
      ] },
      { h: "Clinical relevance", p: "Most poisoned patients recover with good supportive care. Recognising toxidromes, giving the right antidote promptly (e.g. naloxone, N-acetylcysteine), protecting the airway, and addressing the mental-health needs behind deliberate self-poisoning are the core nursing priorities." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Classify poisoning by cause and route and outline the general principles of management.",
      "Describe the common toxidromes and the poisons that cause them.",
      "Discuss the methods of decontamination and enhanced elimination in poisoning.",
      "List common poisons with their specific antidotes.",
      "Describe the nursing management of a patient with deliberate self-poisoning including risk assessment."
    ],
    assessment: [
      { type: "mcq", q: "The most common route of poisoning is:", options: ["Ingestion", "Inhalation", "Injection", "Skin absorption"], answer: 0, rationale: "Ingestion of drugs or chemicals is the commonest route of poisoning." },
      { type: "mcq", q: "The antidote for opioid overdose is:", options: ["Flumazenil", "Atropine", "Naloxone", "N-acetylcysteine"], answer: 2, rationale: "Naloxone reverses opioid-induced respiratory depression and coma." },
      { type: "mcq", q: "The antidote for paracetamol (acetaminophen) poisoning is:", options: ["Naloxone", "Vitamin K", "Desferrioxamine", "N-acetylcysteine"], answer: 3, rationale: "N-acetylcysteine restores glutathione and prevents hepatic injury, most effective within 8 hours." },
      { type: "mcq", q: "Activated charcoal is generally most effective when given:", options: ["Within 1 hour of ingestion with a protected airway", "24 hours later", "For corrosive ingestion", "Only after gastric lavage"], answer: 0, rationale: "Charcoal adsorbs many poisons best within an hour and requires a protected airway; it is not used for corrosives." },
      { type: "mcq", q: "Pinpoint pupils with respiratory depression and coma suggest:", options: ["Anticholinergic toxidrome", "Opioid toxidrome", "Sympathomimetic toxidrome", "Cholinergic toxidrome"], answer: 1, rationale: "Miosis, respiratory depression and coma are the classic opioid toxidrome." },
      { type: "mcq", q: "Organophosphate (cholinergic) poisoning is treated with:", options: ["Naloxone", "Atropine and pralidoxime", "Flumazenil", "Vitamin K"], answer: 1, rationale: "Atropine counteracts muscarinic effects and pralidoxime reactivates cholinesterase." },
      { type: "mcq", q: "A patient who is dry, hot, flushed, confused with dilated pupils and urinary retention shows the:", options: ["Cholinergic toxidrome", "Anticholinergic toxidrome", "Opioid toxidrome", "Withdrawal syndrome"], answer: 1, rationale: "These are classic anticholinergic features ('dry as a bone, red as a beet, mad as a hatter')." },
      { type: "mcq", q: "The enhanced-elimination method used for salicylate (aspirin) poisoning is:", options: ["Whole-bowel irrigation", "Urinary alkalinisation", "Induced vomiting", "Skin irrigation"], answer: 1, rationale: "Alkalinising the urine increases salicylate excretion; haemodialysis is used in severe cases." },
      { type: "mcq", q: "A key nursing priority for a deliberate self-poisoning patient, beyond medical care, is:", options: ["Immediate discharge", "Suicide-risk assessment and mental-health referral", "Ignoring the psychological cause", "Restraining routinely"], answer: 1, rationale: "Assessing suicide risk and arranging mental-health assessment addresses the cause and prevents repetition." },
      { type: "mcq", q: "The overriding principle in poisoning management is to:", options: ["Always induce vomiting", "Treat the patient, not just the poison (support ABCDE)", "Give charcoal to everyone", "Wait for the toxicology result before any care"], answer: 1, rationale: "Supportive resuscitation and treating the patient take priority; specific measures follow." }
      , { type: "fill", q: "The opioid antidote that reverses respiratory depression is ____.", accept: ["naloxone"], rationale: "Naloxone is the specific opioid-receptor antagonist." }
      , { type: "fill", q: "The classic cholinergic toxidrome is remembered by the mnemonic ____.", accept: ["sludge"], rationale: "SLUDGE = Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "ecc-15-neuro-cardiac-emergencies",
    unit: "Unit 6 · Medical & Neurological Emergencies",
    title: "Neurological & Cardiac Emergencies",
    readMinutes: 27,
    summary: "Neurological emergencies (coma and GCS, stroke, raised intracranial pressure, status epilepticus) and cardiac emergencies (acute coronary syndrome/MI and cardiac arrest), with pathophysiology, features and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Assessing consciousness — the Glasgow Coma Scale", p: "The Glasgow Coma Scale (GCS) grades conscious level by the best Eye opening (1-4), Verbal response (1-5) and Motor response (1-6), giving a total of 3 (deep coma) to 15 (fully alert). A GCS of 8 or less indicates coma and an airway at risk needing protection. The GCS is recorded serially to detect deterioration.", figure: {
        caption: "Glasgow Coma Scale — components and score range.",
        svg: '<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Glasgow Coma Scale box."><rect x="30" y="15" width="500" height="130" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Glasgow Coma Scale (3-15)</text><text x="60" y="68" font-family="sans-serif" font-size="12" fill="#15803D">Eye opening ............ 1-4</text><text x="60" y="92" font-family="sans-serif" font-size="12" fill="#15803D">Verbal response ........ 1-5</text><text x="60" y="116" font-family="sans-serif" font-size="12" fill="#15803D">Motor response ......... 1-6</text><text x="330" y="92" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">GCS ≤ 8 = coma</text><text x="330" y="116" font-family="sans-serif" font-size="11" fill="#15803D">→ protect airway</text></svg>'
      } },
      { h: "Coma", p: "Coma is a state of unrousable unconsciousness. Causes (mnemonic AEIOU-TIPS) include Alcohol, Epilepsy/Electrolytes, Insulin (hypo/hyperglycaemia), Opiates/Oxygen lack, Uraemia, Trauma/Temperature, Infection, Poisoning, Stroke/Shock. Management: protect the airway, support breathing and circulation, check glucose, treat reversible causes, and nurse safely (position, eye/mouth care, pressure care, prevent complications)." },
      { h: "Stroke — types & features", p: "Stroke is a sudden focal neurological deficit due to a vascular cause: ischaemic (about 85%, from a clot) or haemorrhagic (bleeding). Recognise it with FAST — Face drooping, Arm weakness, Speech difficulty, Time to call for help. Other features: sudden weakness/numbness, visual loss, severe headache (haemorrhagic), and altered consciousness." },
      { h: "Stroke — management", list: [
        "Urgent CT to distinguish ischaemic from haemorrhagic.",
        "Ischaemic — thrombolysis within the time window (about 4.5 hours) or thrombectomy if eligible.",
        "Maintain airway, oxygenation, glucose and blood-pressure control; nil by mouth until swallow assessed.",
        "Haemorrhagic — control BP, reverse anticoagulation, neurosurgical referral.",
        "Nursing — neuro observations, positioning, aspiration prevention, early rehabilitation."
      ] },
      { h: "Raised intracranial pressure (ICP)", p: "The Monro-Kellie doctrine states that the skull is a fixed box containing brain, blood and CSF; an increase in one (e.g. haematoma, oedema, tumour) raises ICP once compensation is exhausted. Normal ICP is about 5-15 mmHg. Cerebral perfusion pressure (CPP) = MAP − ICP and should be maintained (usually > 60 mmHg)." },
      { h: "Signs of raised ICP & management", list: [
        "Falling GCS, headache, vomiting, pupillary changes (dilated, sluggish).",
        "Cushing's triad (late) — hypertension with widening pulse pressure, bradycardia and irregular breathing.",
        "Management — head-up 30°, neck neutral, maintain oxygenation and normocapnia, treat with osmotic therapy (mannitol/hypertonic saline), avoid factors that raise ICP (pain, fever, coughing), and neurosurgical intervention."
      ] },
      { h: "Status epilepticus", p: "Status epilepticus is a seizure lasting 5 minutes or more, or repeated seizures without recovery of consciousness between them. It is a medical emergency risking hypoxia and brain injury. Management: protect airway and give oxygen, check glucose, first-line benzodiazepine (e.g. IV lorazepam/diazepam or buccal midazolam), then second-line antiepileptic, and treat the cause. Nurse safely — protect from injury, do not restrain or put objects in the mouth, monitor and time the seizure." },
      { h: "Acute coronary syndrome (ACS) / myocardial infarction", p: "ACS results from reduced coronary blood flow, usually from a ruptured atherosclerotic plaque and thrombus, causing myocardial ischaemia (unstable angina) or infarction (NSTEMI, STEMI). Classic features: central crushing chest pain radiating to the arm/jaw, sweating, nausea, dyspnoea; some (elderly, diabetic) have atypical or silent presentations." },
      { h: "ACS — investigations & management", list: [
        "12-lead ECG (ST elevation in STEMI) and serial cardiac troponin.",
        "Immediate care (mnemonic MONA-C style): oxygen if hypoxic, aspirin, nitrate, analgesia (morphine), plus a second antiplatelet and anticoagulant.",
        "STEMI — urgent reperfusion by primary PCI (preferred) or thrombolysis.",
        "Monitor for arrhythmias and complications; cardiac monitoring is essential.",
        "Nursing — continuous ECG, pain relief, reassurance, rest, and secondary-prevention education."
      ] },
      { h: "Cardiac arrest & post-arrest care", p: "Cardiac arrest is the sudden cessation of effective cardiac output, recognised by unresponsiveness and absent/abnormal breathing. Management is immediate high-quality CPR and defibrillation for shockable rhythms (see BLS/ACLS topics). After return of spontaneous circulation, post-cardiac-arrest care includes optimising oxygenation and blood pressure, 12-lead ECG and coronary intervention if indicated, targeted temperature management, and treating the cause." },
      { h: "Nursing management (neurological & cardiac)", list: [
        "Frequent, accurate neurological observations (GCS, pupils, limb power) and cardiac monitoring.",
        "Airway protection in reduced consciousness; oxygenation and haemodynamic support.",
        "Timely administration of thrombolysis/antiplatelets/antiepileptics as prescribed.",
        "Prevention of secondary injury (avoid hypoxia, hypotension, hyperthermia, hyper/hypoglycaemia).",
        "Seizure and fall precautions; aspiration prevention and swallow safety in stroke.",
        "Rapid recognition of deterioration and escalation; emotional support and health education."
      ] },
      { h: "Clinical relevance", p: "Neurological and cardiac emergencies are time-critical: 'time is brain' in stroke and 'time is muscle' in myocardial infarction. Rapid recognition (FAST, chest-pain pathway), correct GCS assessment, and prompt, protocol-driven treatment determine survival and long-term disability." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Describe the Glasgow Coma Scale and its clinical significance.",
      "Explain the types, recognition and emergency management of stroke.",
      "Describe raised intracranial pressure, its signs including Cushing's triad, and management.",
      "Define status epilepticus and outline its emergency management.",
      "Describe the features and immediate management of acute coronary syndrome / myocardial infarction."
    ],
    assessment: [
      { type: "mcq", q: "The Glasgow Coma Scale ranges from:", options: ["0 to 10", "1 to 12", "3 to 15", "5 to 20"], answer: 2, rationale: "The GCS totals 3 (deep coma) to 15 (fully alert)." },
      { type: "mcq", q: "A GCS of 8 or less is significant because it indicates:", options: ["Full alertness", "Coma with an airway at risk", "Mild confusion only", "Readiness for discharge"], answer: 1, rationale: "GCS ≤ 8 means coma; the patient cannot protect the airway and may need intubation." },
      { type: "mcq", q: "The FAST tool for recognising stroke stands for Face, Arm, Speech and:", options: ["Temperature", "Time", "Touch", "Tremor"], answer: 1, rationale: "'T' is Time — act fast and call for emergency help immediately." },
      { type: "mcq", q: "Thrombolysis for ischaemic stroke is generally given within approximately:", options: ["4.5 hours of onset", "24 hours", "3 days", "1 week"], answer: 0, rationale: "Intravenous thrombolysis is time-limited, typically within about 4.5 hours of symptom onset." },
      { type: "mcq", q: "Cushing's triad (a late sign of raised ICP) consists of hypertension, irregular breathing and:", options: ["Tachycardia", "Bradycardia", "Fever", "Hypotension"], answer: 1, rationale: "Cushing's triad is hypertension with widening pulse pressure, bradycardia and irregular respiration." },
      { type: "mcq", q: "Status epilepticus is defined as a seizure lasting at least:", options: ["30 seconds", "5 minutes (or repeated seizures without recovery)", "1 hour", "12 hours"], answer: 1, rationale: "A seizure of 5 minutes or more, or recurrent seizures without recovery, defines status epilepticus." },
      { type: "mcq", q: "The first-line drug for status epilepticus is a:", options: ["Benzodiazepine", "Beta-blocker", "Diuretic", "Vasopressor"], answer: 0, rationale: "A benzodiazepine (e.g. lorazepam, diazepam or buccal midazolam) is first-line for terminating seizures." },
      { type: "mcq", q: "The ECG finding that defines a STEMI requiring urgent reperfusion is:", options: ["ST-segment elevation", "A normal ECG", "Sinus bradycardia", "A prolonged PR interval"], answer: 0, rationale: "ST-segment elevation indicates a STEMI needing primary PCI or thrombolysis." },
      { type: "mcq", q: "For a patient with suspected raised ICP, appropriate positioning is:", options: ["Flat and prone", "Head-up about 30° with the neck neutral", "Head-down (Trendelenburg)", "Neck sharply flexed"], answer: 1, rationale: "Head-up 30° with a neutral neck promotes venous drainage and lowers ICP." },
      { type: "mcq", q: "During a seizure the nurse should:", options: ["Restrain the limbs firmly", "Put a spoon in the mouth", "Protect from injury and time the seizure without restraining", "Leave the patient alone"], answer: 2, rationale: "Safe seizure care protects from injury and times the event; restraint and mouth objects cause harm." }
      , { type: "fill", q: "Cerebral perfusion pressure equals MAP minus ____.", accept: ["icp", "intracranial pressure"], rationale: "CPP = MAP − ICP; it must be maintained to perfuse the brain." }
      , { type: "fill", q: "In stroke and MI care the sayings are 'time is brain' and 'time is ____'.", accept: ["muscle", "heart"], rationale: "Rapid treatment limits loss of brain tissue and myocardium respectively." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "ecc-16-medical-disaster",
    unit: "Unit 6 · Medical & Neurological Emergencies",
    title: "Other Medical Emergencies & Disaster / Mass-Casualty Nursing",
    readMinutes: 26,
    summary: "Common medical emergencies (anaphylaxis, diabetic ketoacidosis, status asthmaticus) and the principles of disaster and mass-casualty nursing, including disaster triage systems and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Anaphylaxis", p: "Anaphylaxis is a severe, life-threatening, generalised hypersensitivity reaction with rapid onset after an allergen (foods, drugs, insect stings, latex). Mast-cell/basophil mediators cause vasodilation, increased permeability, bronchospasm and airway oedema, leading to airway compromise, breathing difficulty and circulatory (distributive) shock." },
      { h: "Anaphylaxis — features & management", list: [
        "Features — urticaria, angio-oedema, wheeze/stridor, hypotension, tachycardia, sense of impending doom; may progress within minutes.",
        "First-line — IM adrenaline (0.5 mg of 1:1000 in an adult, repeated after 5 minutes if needed) into the anterolateral thigh.",
        "High-flow oxygen, lie flat with legs raised (sit up if breathing difficulty), rapid IV fluids.",
        "Adjuncts — antihistamine, corticosteroid, bronchodilator for wheeze.",
        "Monitor for biphasic reaction; remove the trigger; educate on adrenaline auto-injectors and avoidance."
      ] },
      { h: "Diabetic ketoacidosis (DKA)", p: "DKA is an acute metabolic emergency of (usually type 1) diabetes from severe insulin deficiency. Without insulin, cells cannot use glucose, so fat is broken down to ketones, producing hyperglycaemia, ketosis and metabolic acidosis with osmotic diuresis and dehydration. Triggers include infection, missed insulin and new-onset diabetes." },
      { h: "DKA — features & management", list: [
        "Features — polyuria, polydipsia, dehydration, Kussmaul (deep) breathing, ketotic (acetone) breath, abdominal pain, drowsiness; blood glucose usually > 11 mmol/L (>200 mg/dL), ketones raised, pH < 7.3.",
        "Management — the priorities are FLUIDS first (IV 0.9% saline), then a fixed-rate IV insulin infusion, and careful POTASSIUM replacement (insulin drives K+ into cells).",
        "Monitor glucose, ketones, electrolytes, pH and urine output hourly; add dextrose when glucose falls.",
        "Treat the precipitating cause; watch for cerebral oedema (especially in children) and hypokalaemia."
      ] },
      { h: "Status asthmaticus (acute severe asthma)", p: "Status asthmaticus is a severe asthma attack that does not respond to initial bronchodilators and can be life-threatening. Bronchospasm, mucosal oedema and mucus plugging cause severe airflow obstruction, hypoxia and, ominously, a rising CO2 and a 'silent chest' (too little air movement to wheeze) as the patient tires." },
      { h: "Status asthmaticus — features & management", list: [
        "Severe/life-threatening signs — inability to complete sentences, respiratory rate ≥ 25, pulse ≥ 110, SpO2 < 92%, silent chest, exhaustion, cyanosis, altered consciousness.",
        "Management — high-flow oxygen, repeated/continuous nebulised salbutamol and ipratropium, systemic corticosteroids, IV magnesium sulphate in severe cases.",
        "Monitor SpO2 and blood gases; a normal or rising PaCO2 is a danger sign.",
        "Prepare for possible intubation and ventilation if deteriorating; nurse upright, calm and reassure."
      ] },
      { h: "What is a disaster / mass-casualty incident?", p: "A disaster is a sudden event causing damage, casualties and disruption that overwhelms local resources and requires external help. A mass-casualty incident (MCI) produces more patients than the available resources can normally handle. Disasters may be natural (earthquake, flood, cyclone) or human-made (fire, chemical, transport, terrorism)." },
      { h: "Phases of disaster management", list: [
        "Mitigation/prevention — reducing risk and vulnerability.",
        "Preparedness — plans, drills, stockpiles, training.",
        "Response — rescue, triage, treatment and evacuation.",
        "Recovery/rehabilitation — restoring services and community health."
      ] },
      { h: "Disaster triage (START system)", p: "In an MCI, triage shifts from doing everything for one patient to the greatest good for the greatest number. The START (Simple Triage And Rapid Treatment) system sorts patients in under a minute by Respiration, Perfusion and Mental status into four colour-coded categories.", figure: {
        caption: "Disaster triage colour categories (START).",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Disaster triage colour categories."><rect x="30" y="20" width="500" height="34" rx="6" fill="#dc2626"/><text x="55" y="43" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">RED — Immediate</text><text x="300" y="43" font-family="sans-serif" font-size="11" fill="#fff">life-threatening, salvageable</text><rect x="30" y="58" width="500" height="34" rx="6" fill="#f59e0b"/><text x="55" y="81" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">YELLOW — Delayed</text><text x="300" y="81" font-family="sans-serif" font-size="11" fill="#fff">serious but can wait</text><rect x="30" y="96" width="500" height="34" rx="6" fill="#15803D"/><text x="55" y="119" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">GREEN — Minor</text><text x="300" y="119" font-family="sans-serif" font-size="11" fill="#fff">walking wounded</text><rect x="30" y="134" width="500" height="34" rx="6" fill="#111827"/><text x="55" y="157" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">BLACK — Expectant/dead</text><text x="300" y="157" font-family="sans-serif" font-size="11" fill="#fff">unsalvageable / deceased</text></svg>'
      } },
      { h: "START triage logic", list: [
        "Can the patient walk? → GREEN (minor).",
        "Not breathing after airway opened → BLACK (dead); breathing only after opening airway → RED.",
        "Respiratory rate > 30/min → RED.",
        "Capillary refill > 2 s or absent radial pulse (poor perfusion) → RED.",
        "Cannot obey commands (altered mental status) → RED; otherwise → YELLOW (delayed)."
      ] },
      { h: "The nurse's role in disaster", list: [
        "Participate in preparedness — plans, drills and training.",
        "Perform rapid disaster triage and life-saving first aid.",
        "Deliver care within an incident command structure and scope of practice.",
        "Maintain documentation, infection control and safety of self and others.",
        "Provide psychological first aid to survivors and support the bereaved.",
        "Assist in evacuation, communication and post-disaster recovery and surveillance."
      ] },
      { h: "Ethical & psychological aspects", p: "Disaster triage raises difficult ethical choices (allocating scarce resources, the expectant category). Decisions should be fair, consistent and compassionate. Both survivors and responders are at risk of acute stress and post-traumatic reactions, so psychological first aid and staff support/debriefing are essential." },
      { h: "Clinical relevance", p: "Whether managing a single collapsing patient with anaphylaxis, DKA or severe asthma, or hundreds in a mass-casualty event, the nurse applies the same core skills — rapid assessment, prioritisation and decisive action — scaled to the situation, always aiming to do the most good with the resources available." }
    ],
    references: REF_ECC,
    examQuestions: [
      "Describe the features and emergency management of anaphylaxis.",
      "Explain the pathophysiology and management priorities of diabetic ketoacidosis.",
      "Describe the recognition and management of status asthmaticus, including danger signs.",
      "Define a disaster and mass-casualty incident and outline the phases of disaster management.",
      "Explain the START disaster-triage system and the nurse's role in a mass-casualty incident."
    ],
    assessment: [
      { type: "mcq", q: "The immediate first-line treatment of anaphylaxis is:", options: ["IM adrenaline", "Oral antihistamine", "IV corticosteroid", "Nebulised saline"], answer: 0, rationale: "Intramuscular adrenaline is the priority, life-saving treatment in anaphylaxis." },
      { type: "mcq", q: "The FIRST priority in managing diabetic ketoacidosis is:", options: ["A bolus of insulin", "Oral glucose", "Intravenous fluid replacement", "Bicarbonate"], answer: 2, rationale: "Fluid resuscitation with 0.9% saline is first; insulin and potassium follow, guided by monitoring." },
      { type: "mcq", q: "Insulin therapy in DKA can cause a dangerous fall in serum:", options: ["Sodium", "Calcium", "Chloride", "Potassium"], answer: 3, rationale: "Insulin drives potassium into cells, risking hypokalaemia, so potassium must be monitored and replaced." },
      { type: "mcq", q: "A 'silent chest' in acute severe asthma indicates:", options: ["Life-threatening obstruction with minimal air movement", "Improvement", "Mild attack", "A blocked stethoscope"], answer: 0, rationale: "A silent chest means too little airflow to generate a wheeze — an ominous sign of severe obstruction." },
      { type: "mcq", q: "In status asthmaticus, a rising or normal PaCO2 in a tiring patient is:", options: ["Reassuring", "A danger sign of impending respiratory failure", "Expected and harmless", "A reason to stop oxygen"], answer: 1, rationale: "Normally PaCO2 is low in an attack; a rising CO2 signals exhaustion and impending failure." },
      { type: "mcq", q: "In a mass-casualty incident the guiding aim of triage is:", options: ["Full treatment for each patient in turn", "The greatest good for the greatest number", "Treating staff first", "Random selection"], answer: 1, rationale: "Disaster triage maximises overall survival with limited resources." },
      { type: "mcq", q: "In START triage, a patient who can get up and walk is tagged:", options: ["Red", "Yellow", "Green", "Black"], answer: 2, rationale: "Walking wounded are GREEN (minor), freeing responders for the critically injured." },
      { type: "mcq", q: "A START triage category of BLACK indicates a patient who is:", options: ["Walking wounded", "Delayed but serious", "Immediate priority", "Deceased or unsalvageable (expectant)"], answer: 3, rationale: "BLACK denotes deceased or expectant patients who cannot be saved with available resources." },
      { type: "mcq", q: "Kussmaul breathing and a ketotic (acetone) breath are characteristic of:", options: ["Anaphylaxis", "Diabetic ketoacidosis", "Status asthmaticus", "Stroke"], answer: 1, rationale: "Deep Kussmaul respiration and acetone breath reflect the acidosis and ketosis of DKA." },
      { type: "mcq", q: "The disaster-management phase that involves plans, drills and training is:", options: ["Mitigation", "Preparedness", "Response", "Recovery"], answer: 1, rationale: "Preparedness covers planning, drills, stockpiling and training before an event occurs." }
      , { type: "fill", q: "The rapid disaster-triage system based on Respiration, Perfusion and Mental status is called ____.", accept: ["start"], rationale: "START = Simple Triage And Rapid Treatment." }
      , { type: "fill", q: "In START triage the colour tag for an immediate, salvageable life-threat is ____.", accept: ["red"], rationale: "RED denotes immediate priority patients with a salvageable life-threatening condition." }
    ]
  }
];
