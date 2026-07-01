/* ============================================================
   B.Sc. in Nursing (2018) · Year 2 · B231-I Fundamentals of
   Nursing-2 & Health Assessment (Paper I) — 16 topics.
   Degree-level. Aligned to the BNMC 4-year B.Sc. syllabus:
   nursing process & clinical judgement, comprehensive health
   history and physical examination, system-wise assessment,
   documentation, and the core comfort/oxygenation/elimination/
   wound-care needs. Content original, grounded in:
     • Potter PA, Perry AG. Fundamentals of Nursing. Elsevier/Mosby.
     • Jarvis C. Physical Examination and Health Assessment. Elsevier.
     • Berman A, Snyder S. Kozier & Erb's Fundamentals of Nursing. Pearson.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_FON2 = [
  "Potter PA, Perry AG. Fundamentals of Nursing. Elsevier/Mosby.",
  "Jarvis C. Physical Examination and Health Assessment. Elsevier.",
  "Berman A, Snyder S. Kozier & Erb's Fundamentals of Nursing. Pearson."
];

window.Academic.topics["bsc-nursing/fundamentals-2"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "fon2-01-nursing-process",
    unit: "Unit 1 · Nursing Process & Clinical Judgement",
    title: "The Nursing Process & Clinical Judgement",
    readMinutes: 26,
    summary: "The nursing process as a systematic, cyclical framework for care: its five steps (assessment, diagnosis, planning, implementation, evaluation), critical thinking, clinical judgement models, priority-setting, and outcome measurement at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and significance", p: "The nursing process is a systematic, patient-centred, goal-directed method of critical thinking that nurses use to deliver individualised care. It is deliberative, dynamic and cyclical rather than linear, meaning the nurse continually returns to earlier steps as the patient's condition changes. Its significance lies in promoting safe, consistent, evidence-based and legally defensible care, and in giving nurses a shared professional language that organises assessment data into planned action and measurable outcomes." },
      { h: "Characteristics of the nursing process", list: [
        "Systematic — follows an ordered, logical sequence of steps.",
        "Dynamic and cyclical — continuous, with constant feedback and re-assessment.",
        "Patient-centred — organised around the individual's unique needs and responses.",
        "Goal-directed / outcome-oriented — every action aims at a stated, measurable outcome.",
        "Interpersonal and collaborative — built on the nurse-patient relationship and the team.",
        "Universally applicable — used in any setting, for individuals, families or communities.",
        "Grounded in critical thinking and evidence."
      ] },
      { h: "The five steps (ADPIE)", p: "The contemporary nursing process has five sequential but overlapping steps, easily recalled as ADPIE: Assessment, Diagnosis, Planning, Implementation, and Evaluation. Older texts describe four steps by combining assessment and diagnosis; the five-step model is the current professional standard.", figure: {
        caption: "The five-step nursing process (ADPIE) is a continuous cycle with feedback from evaluation back to assessment.",
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nursing process cycle ADPIE"><defs><marker id="fp1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><circle cx="280" cy="130" r="34" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="126" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Nursing</text><text x="280" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Process</text><g font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D"><rect x="230" y="10" width="100" height="34" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="280" y="32" text-anchor="middle">Assessment</text><rect x="430" y="80" width="110" height="34" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="485" y="102" text-anchor="middle">Diagnosis</text><rect x="440" y="160" width="100" height="34" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="490" y="182" text-anchor="middle">Planning</text><rect x="20" y="160" width="130" height="34" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="85" y="182" text-anchor="middle">Implementation</text><rect x="20" y="80" width="110" height="34" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="102" text-anchor="middle">Evaluation</text></g><path d="M330 30 Q430 40 470 78" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fp1)"/><path d="M490 114 L490 156" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fp1)"/><path d="M440 190 Q290 240 150 190" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fp1)"/><path d="M80 156 L78 118" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fp1)"/><path d="M95 78 Q160 30 228 28" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fp1)"/></svg>'
      } },
      { h: "Step 1 — Assessment", p: "Assessment is the systematic and continuous collection, validation and organisation of data about the patient's health status. It uses subjective data (what the patient reports — symptoms, feelings, perceptions) and objective data (observable, measurable signs — vital signs, examination findings, laboratory results). Sources are primary (the patient) and secondary (family, records, the health team). Data are validated to avoid errors, then clustered and documented as the database for all further steps." },
      { h: "Step 2 — Nursing diagnosis", p: "A nursing diagnosis is a clinical judgement about a patient's actual or potential response to a health problem that the nurse is licensed and competent to treat. It differs from a medical diagnosis, which names a disease. Types include actual (a present problem), risk (vulnerability to a problem), and health-promotion (readiness to improve). The classic PES format states the Problem, its Etiology (related to), and its Signs and symptoms (as evidenced by) — for example, 'Impaired gas exchange related to alveolar-capillary changes as evidenced by SpO2 88% and dyspnoea.'" },
      { h: "Step 3 — Planning", p: "Planning sets priorities and formulates measurable goals and expected outcomes, then selects nursing interventions to achieve them. Priorities are commonly ranked using Maslow's hierarchy (physiological and safety needs first) or the ABC framework (Airway, Breathing, Circulation). Goals should be SMART — Specific, Measurable, Achievable, Relevant and Time-bound — and classified as short-term or long-term. The written care plan communicates intended care to the whole team." },
      { h: "Step 4 — Implementation", p: "Implementation is carrying out (or delegating) the planned interventions. Interventions may be independent (nurse-initiated, e.g. repositioning, teaching), dependent (physician-ordered, e.g. giving a prescribed drug), or collaborative (interdisciplinary, e.g. physiotherapy referral). The nurse reassesses before acting, performs the intervention safely and competently, and documents the care and the patient's immediate response." },
      { h: "Step 5 — Evaluation", p: "Evaluation is the planned, ongoing judgement of the patient's progress toward the stated outcomes. The nurse compares actual findings with the expected outcome criteria and concludes the goal was met, partially met, or not met. Based on this, the plan is continued, modified, or terminated — feeding directly back into re-assessment, which makes the process cyclical." },
      { h: "Critical thinking and clinical reasoning", p: "The nursing process is driven by critical thinking — purposeful, self-regulating reasoning that interprets, analyses and evaluates evidence. Clinical reasoning is critical thinking applied to a specific clinical situation: recognising cues, processing information, weighing options and acting. Attributes of a critical thinker include curiosity, open-mindedness, analytical skill, systematic approach and reflection." },
      { h: "Tanner's Clinical Judgement Model", list: [
        "Noticing — perceiving a change or grasping the situation, shaped by the nurse's expectations and knowledge of the patient.",
        "Interpreting — making sense of the data and reasoning about what it means.",
        "Responding — deciding on and carrying out an appropriate action.",
        "Reflecting — reflection-in-action (during care) and reflection-on-action (afterwards) to learn and improve."
      ] },
      { h: "Priority-setting frameworks", list: [
        "Maslow's hierarchy — physiological needs, then safety, love/belonging, esteem, self-actualisation.",
        "ABCs — Airway first, then Breathing, then Circulation.",
        "Actual over risk — an existing problem generally takes priority over a potential one.",
        "Acute/unstable over chronic/stable — deteriorating patients are seen first.",
        "Patient's own priorities — respect what matters most to the individual when it is safe to do so."
      ] },
      { h: "Benefits of the nursing process", list: [
        "Individualised, holistic and continuous care.",
        "Improved patient safety and quality of care.",
        "Better communication and continuity across the team.",
        "A legal record of professional judgement and action.",
        "Increased patient participation and satisfaction.",
        "A basis for measuring outcomes and for nursing research."
      ] },
      { h: "Clinical relevance", p: "In practice the five steps blur into one another — a nurse assesses continuously while implementing care and evaluating responses in real time. Degree-level practice expects the nurse not merely to complete steps but to exercise sound clinical judgement: recognising subtle cues, anticipating deterioration, and adjusting the plan proactively rather than reactively." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Define the nursing process and explain its five steps with an example for each.",
      "Differentiate between a nursing diagnosis and a medical diagnosis, and write a diagnosis in PES format.",
      "Describe Tanner's Clinical Judgement Model and its relevance to nursing practice.",
      "Explain the frameworks used to set priorities among a patient's needs.",
      "Discuss the characteristics and benefits of the nursing process."
    ],
    assessment: [
      { type: "mcq", q: "A nurse re-assesses a patient while carrying out care and adjusts the plan immediately. This best illustrates the nursing process being:", options: ["Linear and fixed", "Dynamic and cyclical", "Purely theoretical", "Doctor-directed"], answer: 1, rationale: "The nursing process is dynamic and cyclical, with continuous feedback and re-assessment during care." },
      { type: "mcq", q: "Which correctly lists the five steps of the nursing process in order?", options: ["Diagnosis, Assessment, Planning, Evaluation, Implementation", "Assessment, Diagnosis, Planning, Implementation, Evaluation", "Assessment, Planning, Diagnosis, Implementation, Evaluation", "Planning, Assessment, Diagnosis, Implementation, Evaluation"], answer: 1, rationale: "The correct order is ADPIE: Assessment, Diagnosis, Planning, Implementation, Evaluation." },
      { type: "mcq", q: "'SpO2 88%' recorded during examination is an example of:", options: ["Subjective data", "Objective data", "A nursing diagnosis", "An expected outcome"], answer: 1, rationale: "A measurable, observable finding is objective data; what the patient reports is subjective." },
      { type: "mcq", q: "In the PES format of a nursing diagnosis, the 'E' stands for:", options: ["Evaluation", "Etiology (related factors)", "Evidence", "Expected outcome"], answer: 1, rationale: "PES = Problem, Etiology (related to), Signs/symptoms (as evidenced by)." },
      { type: "mcq", q: "A patient has a blocked airway and also reports anxiety. Using the ABC framework the nurse should FIRST address:", options: ["Anxiety", "Circulation", "The airway", "Documentation"], answer: 2, rationale: "Airway takes priority over breathing and circulation, and over psychosocial needs." },
      { type: "mcq", q: "Giving a prescribed analgesic ordered by the physician is which type of intervention?", options: ["Independent", "Dependent", "Collaborative", "Delegated to family"], answer: 1, rationale: "Physician-ordered actions are dependent interventions; nurse-initiated actions are independent." },
      { type: "mcq", q: "The step in which the nurse compares actual findings with expected outcomes is:", options: ["Assessment", "Planning", "Implementation", "Evaluation"], answer: 3, rationale: "Evaluation judges progress toward outcomes and decides whether to continue, modify or end the plan." },
      { type: "mcq", q: "In Tanner's model, 'perceiving a change in a patient' corresponds to:", options: ["Noticing", "Interpreting", "Responding", "Reflecting"], answer: 0, rationale: "Noticing is the initial grasp or perception of the situation." },
      { type: "mcq", q: "A goal stated as 'The patient will walk 20 metres unaided by day 3' is best described as:", options: ["A medical diagnosis", "A SMART outcome", "Subjective data", "An independent intervention"], answer: 1, rationale: "It is Specific, Measurable, Achievable, Relevant and Time-bound — a SMART outcome." },
      { type: "mcq", q: "Which priority-setting principle indicates a deteriorating patient should be seen before a stable one?", options: ["Actual over risk", "Acute/unstable over chronic/stable", "Patient preference always first", "Alphabetical order"], answer: 1, rationale: "Unstable, acute conditions take precedence over chronic, stable ones." }
      , { type: "fill", q: "The five-step nursing process is commonly remembered by the acronym ____.", accept: ["ADPIE", "adpie"], rationale: "ADPIE = Assessment, Diagnosis, Planning, Implementation, Evaluation." }
      , { type: "fill", q: "Data the patient reports, such as pain or nausea, are called ____ data.", accept: ["subjective"], rationale: "Subjective data are reported by the patient; objective data are observed/measured." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "fon2-02-health-history",
    unit: "Unit 1 · Nursing Process & Clinical Judgement",
    title: "The Comprehensive Health History",
    readMinutes: 25,
    summary: "Purpose, components and technique of a complete health history: interviewing skills, phases of the interview, the full history framework (chief complaint, HPI using OLDCARTS/PQRST, past history, family and personal/social history, review of systems), and cultural and ethical considerations.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose and importance of history taking", p: "The health history is the structured, subjective account of the patient's health obtained through interview. It is the foundation of assessment: it establishes the therapeutic relationship, identifies the reason for seeking care, provides most of the diagnostic information (studies suggest the history yields the majority of the data leading to a diagnosis), guides the focus of the physical examination, and captures the patient's own perspective, values and expectations." },
      { h: "The nurse's role in history taking", list: [
        "Create a private, comfortable, unhurried environment.",
        "Establish rapport and trust with the patient.",
        "Use effective verbal and non-verbal communication.",
        "Collect accurate, complete and relevant data.",
        "Respect confidentiality, autonomy and cultural values.",
        "Validate and clarify information and document it faithfully."
      ] },
      { h: "Types of health history", list: [
        "Complete (comprehensive) — a full history taken at first contact or admission.",
        "Focused (problem-centred) — limited to the current complaint, e.g. in an emergency.",
        "Follow-up (interval) — updates changes since the last visit.",
        "Emergency — rapid, life-threatening problem-focused history (e.g. AMPLE: Allergies, Medications, Past history, Last meal, Events)."
      ] },
      { h: "Phases of the interview", list: [
        "Orientation / introductory phase — greet, introduce yourself, explain purpose, obtain consent, ensure privacy.",
        "Working / body phase — collect data using open- and closed-ended questions and active listening.",
        "Termination / closing phase — summarise, allow final questions, explain next steps, thank the patient."
      ] },
      { h: "Effective communication techniques", list: [
        "Open-ended questions — invite description ('Tell me about the pain').",
        "Closed-ended questions — elicit specific facts ('When did it start?').",
        "Active listening — full attention, appropriate eye contact, unhurried pace.",
        "Clarification and validation — 'Do you mean...?'",
        "Reflection and paraphrasing — restate to confirm understanding.",
        "Silence — allows the patient time to think.",
        "Summarising — reviews key points at the end."
      ] },
      { h: "Communication pitfalls to avoid", list: [
        "Leading or biased questions ('You don't smoke, do you?').",
        "Using medical jargon the patient cannot understand.",
        "Interrupting, rushing or 'why' questions that sound accusatory.",
        "Giving false reassurance or unwanted advice.",
        "Asking multiple questions at once.",
        "Judgemental or dismissive responses."
      ] },
      { h: "Components of a complete health history", list: [
        "Biographical / demographic data — name, age, sex, occupation, address, informant.",
        "Chief complaint (CC) — the main problem in the patient's own words, with duration.",
        "History of present illness (HPI) — full analysis of the current problem.",
        "Past health history — illnesses, surgeries, injuries, allergies, immunisations, obstetric history.",
        "Current medications — prescribed, over-the-counter and traditional remedies.",
        "Family history — health of close relatives, hereditary and communicable disease.",
        "Personal and social history — diet, sleep, exercise, tobacco/alcohol, occupation, housing, support.",
        "Review of systems (ROS) — a screening question set covering each body system."
      ] },
      { h: "Analysing the present illness — OLDCARTS / PQRST", p: "A symptom is characterised systematically. Two common mnemonics are OLDCARTS (Onset, Location, Duration, Character, Aggravating factors, Relieving factors, Timing, Severity) and PQRST (Provokes/Palliates, Quality, Region/Radiation, Severity, Timing). Applying every element ensures no dimension of the symptom is missed.", figure: {
        caption: "OLDCARTS — a systematic framework for analysing any symptom during the history of present illness.",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OLDCARTS symptom analysis box"><rect x="20" y="15" width="520" height="220" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#0F4C3A">OLDCARTS — Symptom Analysis</text><g font-family="sans-serif" font-size="12" fill="#15803D"><text x="45" y="72">O — Onset (sudden or gradual?)</text><text x="45" y="96">L — Location (where exactly?)</text><text x="45" y="120">D — Duration (how long / constant?)</text><text x="45" y="144">C — Character (sharp, dull, burning?)</text><text x="300" y="72">A — Aggravating factors</text><text x="300" y="96">R — Relieving factors</text><text x="300" y="120">T — Timing / pattern</text><text x="300" y="144">S — Severity (0-10 scale)</text></g><rect x="45" y="170" width="470" height="46" rx="8" fill="#DCFCE7" stroke="#22C55E" stroke-width="1.5"/><text x="280" y="192" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Also ask: associated symptoms, patient beliefs about the cause,</text><text x="280" y="208" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">and the effect of the problem on daily life.</text></svg>'
      } },
      { h: "Past, family and personal/social history detail", p: "Past history documents childhood and adult illnesses, hospitalisations, surgeries, injuries, obstetric history, allergies (drug, food, environmental with the type of reaction), immunisation status and current medications including doses. Family history screens for hereditary conditions (diabetes, hypertension, cardiac disease, cancer, genetic disorders) and infectious disease exposure, often summarised in a three-generation genogram. Personal and social history covers lifestyle, nutrition, sleep, exercise, substance use, occupation and hazards, living conditions, finances, relationships and spiritual practices — the social determinants of health." },
      { h: "Review of systems (ROS)", p: "The ROS is a systematic head-to-toe series of screening questions for each system (general, skin, HEENT, respiratory, cardiovascular, gastrointestinal, genitourinary, musculoskeletal, neurological, endocrine, haematological, psychological) to detect problems the patient did not mention. It records subjective symptoms only — it is not the physical examination — and helps ensure nothing is overlooked." },
      { h: "Cultural and psychosocial considerations", p: "Culturally competent history taking uses an interpreter where needed rather than a family member for sensitive matters, respects beliefs about illness causation and modesty, observes norms of eye contact and touch, and enquires about traditional remedies. The nurse also assesses psychosocial and spiritual dimensions — coping, support systems, meaning and faith — as these strongly affect health and recovery." },
      { h: "Legal and ethical aspects", list: [
        "Informed consent — explain the purpose before collecting data.",
        "Confidentiality and privacy — protect information and interview privately.",
        "Autonomy — the patient may decline to answer any question.",
        "Accuracy — record only what is stated and observed, without alteration.",
        "Non-judgemental attitude and cultural sensitivity throughout."
      ] },
      { h: "Clinical relevance", p: "A skilful history frequently points to the diagnosis before any examination, targets the physical assessment efficiently, and builds the trust that makes patients disclose sensitive but decisive information. At degree level the nurse integrates the history with examination findings to form clinical judgements rather than merely recording data." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Enumerate the components of a complete health history and describe each briefly.",
      "Explain the three phases of the patient interview and the nurse's role in each.",
      "Describe the OLDCARTS (or PQRST) framework for analysing a presenting symptom.",
      "Discuss effective communication techniques and common pitfalls in history taking.",
      "Explain the cultural, legal and ethical considerations in obtaining a health history."
    ],
    assessment: [
      { type: "mcq", q: "The chief complaint should ideally be recorded:", options: ["In medical terminology", "In the patient's own words with duration", "As a nursing diagnosis", "Only after examination"], answer: 1, rationale: "The chief complaint is stated in the patient's own words, with its duration." },
      { type: "mcq", q: "In OLDCARTS, the 'C' most commonly refers to:", options: ["Cause", "Character (quality) of the symptom", "Consent", "Culture"], answer: 1, rationale: "C stands for Character — the quality of the symptom (sharp, dull, burning)." },
      { type: "mcq", q: "Which question is open-ended and therefore best for beginning the HPI?", options: ["Do you have chest pain?", "Is the pain sharp?", "Tell me about what brought you in today.", "Did it start yesterday?"], answer: 2, rationale: "Open-ended questions invite the patient to describe the problem in their own words." },
      { type: "mcq", q: "The review of systems (ROS) records:", options: ["Physical examination findings", "Objective vital signs", "Subjective screening symptoms for each body system", "Laboratory results"], answer: 2, rationale: "The ROS is a set of subjective screening questions per system; it is not the physical exam." },
      { type: "mcq", q: "A nurse asks, 'You don't drink alcohol, do you?' This is an example of a:", options: ["Clarifying question", "Leading (biased) question", "Reflective statement", "Open-ended question"], answer: 1, rationale: "A leading question suggests the desired answer and biases the response." },
      { type: "mcq", q: "In an emergency, a rapid focused history may use the mnemonic AMPLE, in which 'L' stands for:", options: ["Location", "Last meal", "Level of pain", "Length of illness"], answer: 1, rationale: "AMPLE = Allergies, Medications, Past history, Last meal, Events." },
      { type: "mcq", q: "Recording a family history of diabetes and hypertension across relatives is best summarised as a:", options: ["Genogram", "Kardex", "Care plan", "Flow sheet"], answer: 0, rationale: "A three-generation genogram summarises hereditary family health information." },
      { type: "mcq", q: "The MOST appropriate person to interpret during a sensitive history when the patient does not speak the nurse's language is:", options: ["The patient's young child", "A trained interpreter", "Another patient", "No one; use gestures"], answer: 1, rationale: "A trained interpreter preserves accuracy and confidentiality; family (especially children) should be avoided for sensitive matters." },
      { type: "mcq", q: "During the termination phase of the interview the nurse should:", options: ["Introduce herself", "Obtain consent", "Summarise and explain the next steps", "Begin the physical exam"], answer: 2, rationale: "The closing phase summarises findings, invites questions and explains what happens next." },
      { type: "mcq", q: "Which action best protects the ethical principle of autonomy during history taking?", options: ["Insisting the patient answer every question", "Allowing the patient to decline any question", "Sharing data with the family freely", "Recording assumptions as facts"], answer: 1, rationale: "Respecting the patient's right to decline any question upholds autonomy." }
      , { type: "fill", q: "The main problem that brought the patient to seek care, stated in their own words, is the ____ ____.", accept: ["chief complaint", "chief complaint (cc)"], rationale: "The chief complaint is the presenting reason for the visit in the patient's words." },
      { type: "fill", q: "A systematic head-to-toe set of screening questions covering every body system is called the ____ ____ ____.", accept: ["review of systems", "review of systems (ros)"], rationale: "The Review of Systems screens each body system for subjective symptoms." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "fon2-03-examination-techniques",
    unit: "Unit 2 · Physical Examination",
    title: "Physical Examination Techniques: IPPA",
    readMinutes: 26,
    summary: "The four cardinal techniques of physical examination — inspection, palpation, percussion and auscultation — their correct sequence, method, the equipment used, standard precautions, and preparation of the patient and environment at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of physical examination", p: "Physical examination is the systematic, objective collection of data about the body using the senses and simple instruments. It confirms or refutes the impressions formed during the history, detects abnormalities the patient did not report, establishes a baseline, and monitors change over time. It complements — never replaces — a careful history." },
      { h: "The four techniques and their usual order", p: "The four cardinal techniques are Inspection, Palpation, Percussion and Auscultation (IPPA), always performed in that order — EXCEPT for the abdomen, where auscultation precedes palpation and percussion so that manipulation does not alter bowel sounds. Each technique is used from least to most disturbing.", figure: {
        caption: "The IPPA sequence of examination (abdomen: inspect, then auscultate, then percuss and palpate).",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IPPA examination sequence"><defs><marker id="ip1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif"><rect x="10" y="45" width="120" height="55" rx="9" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="70" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Inspection</text><text x="70" y="88" text-anchor="middle" font-size="10" fill="#15803D">look</text><rect x="150" y="45" width="120" height="55" rx="9" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="210" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Palpation</text><text x="210" y="88" text-anchor="middle" font-size="10" fill="#15803D">feel</text><rect x="290" y="45" width="120" height="55" rx="9" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="350" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Percussion</text><text x="350" y="88" text-anchor="middle" font-size="10" fill="#15803D">tap</text><rect x="430" y="45" width="120" height="55" rx="9" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="490" y="70" text-anchor="middle" font-size="13" font-weight="700" fill="#0F4C3A">Auscultation</text><text x="490" y="88" text-anchor="middle" font-size="10" fill="#15803D">listen</text><line x1="130" y1="72" x2="146" y2="72" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ip1)"/><line x1="270" y1="72" x2="286" y2="72" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ip1)"/><line x1="410" y1="72" x2="426" y2="72" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ip1)"/></g><text x="280" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">Abdomen exception: Inspect - Auscultate - Percuss - Palpate</text></svg>'
      } },
      { h: "Inspection", p: "Inspection is deliberate, systematic visual (and sometimes olfactory and auditory) observation. It requires good lighting (natural daylight is ideal for skin colour), adequate exposure with the patient positioned appropriately, and comparison of symmetrical sides. The nurse observes size, shape, colour, symmetry, position, movement, and any discharge or odour. It begins the moment the nurse meets the patient." },
      { h: "Palpation", p: "Palpation uses touch to assess texture, temperature, moisture, tenderness, swelling, pulsation, masses, organ size and consistency. Different parts of the hand are used: fingertips for fine tactile discrimination and pulses, the dorsum (back) of the hand for temperature, and the palm/ulnar surface for vibration. Light palpation (1 cm depth) precedes deep palpation (about 4 cm) for organs and masses; tender areas are examined last." },
      { h: "Types of palpation", list: [
        "Light palpation — gentle, ~1 cm, for surface texture, tenderness and pulses.",
        "Deep palpation — ~4 cm, one- or two-handed (bimanual), for organs and masses.",
        "Ballottement — a bouncing technique to detect a floating organ or fluid.",
        "Assessing temperature — use the dorsum of the hand, which is more sensitive to warmth."
      ] },
      { h: "Percussion", p: "Percussion taps the body surface to set underlying tissues vibrating, producing sounds and a palpable vibration that reveal whether tissue beneath is air-filled, fluid-filled or solid, and helps map organ borders. In indirect (mediate) percussion the middle finger of the non-dominant hand (the pleximeter) is placed on the skin and struck by the flexed middle finger of the dominant hand (the plexor) with a quick wrist action." },
      { h: "Percussion sounds", list: [
        "Resonance — loud, low-pitched, hollow — normal healthy lung.",
        "Hyper-resonance — very loud, booming — over air-trapped lung (emphysema, pneumothorax).",
        "Tympany — loud, high-pitched, drum-like — over air-filled stomach or bowel.",
        "Dullness — soft, high-pitched, thud — over solid organs (liver) or consolidation.",
        "Flatness — very soft, very high — over dense tissue such as bone or heavy muscle."
      ] },
      { h: "Auscultation", p: "Auscultation is listening to sounds produced within the body, usually with a stethoscope. The diaphragm (flat side) transmits high-pitched sounds — normal breath sounds, bowel sounds, normal heart sounds — pressed firmly to the skin. The bell (cup side) transmits low-pitched sounds — some murmurs, bruits — held lightly. The environment must be quiet, the stethoscope placed on bare skin, and the nurse listens for intensity, pitch, quality, duration and timing." },
      { h: "Equipment for physical examination", list: [
        "Stethoscope — auscultation of heart, lungs, abdomen, vessels.",
        "Sphygmomanometer — blood pressure.",
        "Thermometer — temperature.",
        "Penlight / torch — pupils, mouth, throat.",
        "Ophthalmoscope and otoscope — eye and ear examination.",
        "Tape measure — circumferences and lengths.",
        "Tuning fork, reflex hammer — neurological assessment.",
        "Weighing scale and stadiometer — weight and height.",
        "Gloves, lubricant, gauze, and a Snellen chart as required."
      ] },
      { h: "Preparation of environment and patient", list: [
        "Ensure privacy, good lighting, comfortable warm room and quiet.",
        "Explain the procedure and obtain consent; answer questions.",
        "Ask the patient to empty the bladder for comfort.",
        "Assist to position and drape to expose only the area examined.",
        "Perform hand hygiene and observe standard precautions.",
        "Warm the hands and stethoscope; proceed systematically head to toe."
      ] },
      { h: "Standard precautions and safety", p: "Hand hygiene before and after contact, appropriate use of gloves (especially for mucous membranes, non-intact skin and body fluids), cleaning of shared equipment between patients, and respect for dignity and comfort are essential. Examination should be organised to minimise position changes and fatigue for the patient." },
      { h: "Positions used in examination", list: [
        "Sitting — head, neck, chest, heart, upper limbs, vital signs.",
        "Supine — abdomen, heart, breasts, extremities.",
        "Dorsal recumbent — abdomen when supine is uncomfortable.",
        "Lithotomy — female genital and pelvic examination.",
        "Sims' (left lateral) — rectal and vaginal examination.",
        "Prone — posterior thorax, hip; knee-chest for rectal/sigmoid."
      ] },
      { h: "Clinical relevance", p: "Mastery of IPPA lets the nurse detect subtle findings — a shifted apex beat, a dull lung base signalling effusion, absent bowel sounds after surgery — that trigger timely intervention. Degree-level practice demands not only correct technique but interpretation of findings within the whole clinical picture." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Describe the four techniques of physical examination and state the normal sequence, including the abdominal exception.",
      "Explain the different types of palpation and the parts of the hand used for each purpose.",
      "Describe the percussion sounds and the tissues that produce them.",
      "Differentiate the use of the diaphragm and the bell of the stethoscope in auscultation.",
      "List the equipment required and describe preparation of the patient and environment for physical examination."
    ],
    assessment: [
      { type: "mcq", q: "The correct sequence of examination techniques for MOST body regions is:", options: ["Palpation, inspection, percussion, auscultation", "Inspection, palpation, percussion, auscultation", "Auscultation, inspection, palpation, percussion", "Percussion, palpation, inspection, auscultation"], answer: 1, rationale: "IPPA — inspection, palpation, percussion, auscultation — is standard except for the abdomen." },
      { type: "mcq", q: "For the abdomen, the sequence is modified so that auscultation is done:", options: ["Last", "Before palpation and percussion", "Not at all", "Only with the bell"], answer: 1, rationale: "Palpation/percussion can alter bowel sounds, so the abdomen is auscultated before them." },
      { type: "mcq", q: "To assess skin temperature most accurately the nurse uses the:", options: ["Fingertips", "Palm", "Dorsum (back) of the hand", "Ulnar edge"], answer: 2, rationale: "The dorsum of the hand is most sensitive to temperature." },
      { type: "mcq", q: "A drum-like, loud, high-pitched sound heard over the air-filled stomach is:", options: ["Resonance", "Dullness", "Tympany", "Flatness"], answer: 2, rationale: "Tympany is the drum-like note over air-filled hollow organs." },
      { type: "mcq", q: "Dullness on percussion over a lung field most likely indicates:", options: ["Normal aerated lung", "Air trapping", "Fluid or consolidation", "An empty stomach"], answer: 2, rationale: "Dullness replaces resonance when the lung is filled with fluid or is consolidated." },
      { type: "mcq", q: "The bell of the stethoscope is best for hearing:", options: ["High-pitched breath sounds", "Low-pitched sounds such as some murmurs and bruits", "Bowel sounds only", "Normal S1 and S2"], answer: 1, rationale: "The bell, held lightly, transmits low-pitched sounds; the diaphragm transmits high-pitched sounds." },
      { type: "mcq", q: "In indirect percussion, the finger placed on the skin to be struck is called the:", options: ["Plexor", "Pleximeter", "Diaphragm", "Bell"], answer: 1, rationale: "The pleximeter (stationary finger) is struck by the plexor (striking finger)." },
      { type: "mcq", q: "Hyper-resonance on chest percussion is characteristic of:", options: ["Pleural effusion", "Consolidation", "Emphysema or pneumothorax (air trapping)", "A solid tumour"], answer: 2, rationale: "Excess air, as in emphysema or pneumothorax, produces a booming hyper-resonant note." },
      { type: "mcq", q: "Which action correctly precedes physical examination for infection control?", options: ["Skip hand hygiene to save time", "Perform hand hygiene and observe standard precautions", "Use the same gloves for all patients", "Examine tender areas first"], answer: 1, rationale: "Hand hygiene and standard precautions before and after contact are mandatory." },
      { type: "mcq", q: "When examining an area that is tender, the nurse should palpate it:", options: ["First, before anything else", "Last, after non-tender areas", "With deep pressure immediately", "Not at all"], answer: 1, rationale: "Tender or painful areas are examined last to avoid guarding and distress." }
      , { type: "fill", q: "The examination technique that involves tapping the body surface to judge whether underlying tissue is air-, fluid- or solid-filled is ____.", accept: ["percussion"], rationale: "Percussion produces sounds/vibrations that reveal the nature of underlying tissue." },
      { type: "fill", q: "The normal, loud, low-pitched, hollow percussion note heard over healthy lung is called ____.", accept: ["resonance", "resonant"], rationale: "Healthy air-filled lung produces resonance on percussion." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "fon2-04-general-survey-vitals",
    unit: "Unit 2 · Physical Examination",
    title: "General Survey & Vital Signs Interpretation",
    readMinutes: 26,
    summary: "The general survey (appearance, body structure, mobility, behaviour), anthropometry and BMI, and the measurement and interpretation of the vital signs — temperature, pulse, respiration, blood pressure, oxygen saturation and pain — with normal ranges and abnormal patterns.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The general survey", p: "The general survey is the overall impression of the patient formed from the first moment of contact and refined throughout the encounter. Jarvis groups it into four areas: physical appearance (apparent age, level of consciousness, skin colour, facial features, signs of distress); body structure (stature, nutrition, symmetry, posture, obvious deformity); mobility (gait, range of motion, involuntary movement); and behaviour (facial expression, mood, speech, dress, hygiene, and appropriateness of responses)." },
      { h: "Anthropometric measurement", p: "Height and weight are recorded to assess growth and nutritional status and to calculate drug doses. Body Mass Index (BMI) = weight (kg) / height (m)^2. Standard adult categories: underweight below 18.5; normal 18.5-24.9; overweight 25-29.9; obese 30 and above. Waist circumference and mid-upper arm circumference give further nutritional information.", figure: {
        caption: "BMI formula and standard adult classification.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BMI formula and categories"><rect x="20" y="15" width="520" height="150" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#0F4C3A">BMI = weight (kg) / height (m)&#178;</text><g font-family="sans-serif" font-size="12" fill="#15803D"><rect x="45" y="65" width="230" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="55" y="83">Underweight: &lt; 18.5</text><rect x="45" y="97" width="230" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="55" y="115">Normal: 18.5 - 24.9</text><rect x="285" y="65" width="230" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="295" y="83">Overweight: 25 - 29.9</text><rect x="285" y="97" width="230" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="295" y="115">Obese: &#8805; 30</text></g><text x="280" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Example: 60 kg &#247; (1.6 m)&#178; = 60 &#247; 2.56 = 23.4 (normal)</text></svg>'
      } },
      { h: "Body temperature", p: "Temperature reflects the balance between heat produced and heat lost. Normal oral temperature averages 37 degrees C (range about 36.5-37.5 degrees C). Rectal readings run about 0.5 degrees C higher and axillary about 0.5 degrees C lower than oral. Pyrexia (fever) is above 38 degrees C; hyperpyrexia above 41 degrees C; hypothermia below 35 degrees C. Sites include oral, axillary, rectal, tympanic and temporal artery." },
      { h: "Fever patterns", list: [
        "Continuous (sustained) — remains elevated with little variation (<1 degree C).",
        "Intermittent — spikes then returns to normal within each day (e.g. malaria).",
        "Remittent — fluctuates more than 1 degree C but never returns to normal.",
        "Relapsing (recurrent) — febrile periods alternate with 1-2 days of normal temperature.",
        "Crisis — sudden fall to normal; Lysis — gradual fall."
      ] },
      { h: "Pulse", p: "The pulse is the palpable arterial wave produced by ventricular contraction. Normal adult resting rate is 60-100 beats/min. Tachycardia is above 100/min; bradycardia below 60/min. The nurse assesses rate, rhythm (regular or irregular), volume/amplitude (0=absent to 4+=bounding) and elasticity. The radial pulse is used routinely; the apical pulse (auscultated at the 5th intercostal space, mid-clavicular line) is used for irregular rhythms, infants and before certain drugs." },
      { h: "Common pulse sites", list: [
        "Temporal, carotid, apical, brachial, radial, femoral, popliteal, posterior tibial, dorsalis pedis.",
        "Carotid — used in emergencies/CPR for adults.",
        "Brachial — used for CPR in infants and for blood pressure.",
        "Radial — routine adult pulse.",
        "An apical-radial (pulse) deficit indicates that not every heartbeat is reaching the periphery."
      ] },
      { h: "Respiration", p: "Respiration is assessed unobtrusively for one full minute for rate, depth, rhythm and effort. Normal adult rate is 12-20 breaths/min (eupnoea). Tachypnoea is rapid breathing (>20/min); bradypnoea is slow (<12/min); apnoea is absence of breathing. Abnormal patterns include Cheyne-Stokes (crescendo-decrescendo with apnoea), Kussmaul (deep, rapid — diabetic ketoacidosis) and Biot's (irregular). Note use of accessory muscles, orthopnoea and cyanosis." },
      { h: "Blood pressure", p: "Blood pressure is the force of blood against arterial walls, recorded as systolic/diastolic in mmHg. Normal adult is below 120/80 mmHg. Per common classification: elevated 120-129 systolic; hypertension stage 1 is 130-139/80-89 and stage 2 is 140/90 or above; hypotension is generally below 90/60 mmHg. Pulse pressure (systolic minus diastolic) is normally 30-40 mmHg. Ensure correct cuff size (bladder ~40% of arm circumference) to avoid false readings." },
      { h: "Oxygen saturation (SpO2)", p: "Pulse oximetry non-invasively estimates the percentage of haemoglobin saturated with oxygen. Normal is 95-100%; below 90% indicates hypoxaemia requiring prompt action. Readings can be falsely low with poor perfusion, cold extremities, nail polish, motion or carbon monoxide poisoning. SpO2 is often called the 'fifth vital sign', with pain sometimes called the fifth or sixth." },
      { h: "Factors affecting vital signs", list: [
        "Age — infants have higher pulse and respiration and lower BP than adults.",
        "Exercise, pain, anxiety and stress raise pulse, respiration and BP.",
        "Time of day (diurnal variation) — temperature lowest in early morning.",
        "Medications — e.g. beta-blockers lower pulse and BP.",
        "Fever raises pulse and respiration; hypovolaemia raises pulse and lowers BP.",
        "Hormones, pregnancy, posture and environmental temperature."
      ] },
      { h: "Normal values / key figures (adult)", list: [
        "Temperature: ~37 degrees C oral (36.5-37.5).",
        "Pulse: 60-100 beats/min.",
        "Respiration: 12-20 breaths/min.",
        "Blood pressure: <120/80 mmHg.",
        "SpO2: 95-100%.",
        "Pulse pressure: 30-40 mmHg."
      ] },
      { h: "Clinical relevance", p: "Vital signs are the most sensitive early indicators of clinical deterioration; a rising pulse with a falling blood pressure, for example, may signal shock long before collapse. Degree-level nurses interpret trends and combinations (early warning scores) rather than isolated readings, and act on them promptly." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Describe the four components of the general survey.",
      "State the normal adult ranges for temperature, pulse, respiration, blood pressure and SpO2.",
      "Explain how to calculate and classify Body Mass Index (BMI).",
      "Describe the different fever patterns and abnormal respiratory patterns.",
      "Discuss the factors that affect vital signs and the significance of vital-sign trends."
    ],
    assessment: [
      { type: "mcq", q: "A resting adult pulse of 108 beats/min is best described as:", options: ["Bradycardia", "Normal", "Tachycardia", "Pulse deficit"], answer: 2, rationale: "A rate above 100 beats/min is tachycardia; below 60 is bradycardia." },
      { type: "mcq", q: "A patient is 1.6 m tall and weighs 60 kg. Their BMI (to one decimal) is approximately:", options: ["23.4", "18.9", "27.1", "30.0"], answer: 0, rationale: "60 / (1.6 x 1.6) = 60 / 2.56 = 23.4, which is normal." },
      { type: "mcq", q: "Deep, rapid breathing seen in diabetic ketoacidosis is called:", options: ["Cheyne-Stokes respiration", "Kussmaul respiration", "Biot's respiration", "Apnoea"], answer: 1, rationale: "Kussmaul respiration is the deep, rapid breathing that compensates for metabolic acidosis." },
      { type: "mcq", q: "An SpO2 reading of 88% indicates:", options: ["Normal oxygenation", "Hyperoxia", "Hypoxaemia requiring prompt action", "A faulty probe only"], answer: 2, rationale: "SpO2 below 90% indicates hypoxaemia and needs prompt assessment and intervention." },
      { type: "mcq", q: "The apical-radial pulse deficit means:", options: ["Not every heartbeat produces a peripheral pulse", "The two rates are always equal", "The blood pressure is high", "The temperature is elevated"], answer: 0, rationale: "A deficit shows some contractions are too weak to reach the periphery (e.g. atrial fibrillation)." },
      { type: "mcq", q: "Which blood pressure meets the definition of hypertension stage 2 (common classification)?", options: ["118/76 mmHg", "126/78 mmHg", "134/86 mmHg", "146/94 mmHg"], answer: 3, rationale: "Stage 2 hypertension is 140/90 mmHg or above." },
      { type: "mcq", q: "Compared with an oral reading, a rectal temperature is normally about:", options: ["0.5 degrees C lower", "0.5 degrees C higher", "Exactly the same", "2 degrees C higher"], answer: 1, rationale: "Rectal readings average ~0.5 degrees C higher, axillary ~0.5 degrees C lower, than oral." },
      { type: "mcq", q: "A fever that spikes and returns to normal within each 24 hours is a ____ pattern.", options: ["Continuous", "Intermittent", "Remittent", "Relapsing"], answer: 1, rationale: "Intermittent fever spikes then falls to normal daily; remittent stays above normal." },
      { type: "mcq", q: "Using a blood-pressure cuff that is too small for the arm will tend to give a reading that is:", options: ["Falsely high", "Falsely low", "Unaffected", "Zero"], answer: 0, rationale: "An undersized cuff over-reads (falsely high) blood pressure; an oversized cuff under-reads." },
      { type: "mcq", q: "A rising pulse together with a falling blood pressure in a bleeding patient most likely signals:", options: ["Improvement", "A normal finding", "Fever", "Developing shock"], answer: 3, rationale: "Tachycardia with hypotension is an early sign of hypovolaemic shock." }
      , { type: "fill", q: "Body Mass Index equals weight in kilograms divided by height in ____ squared.", accept: ["metres", "meters", "metre", "meter"], rationale: "BMI = weight (kg) / height (m)^2." },
      { type: "fill", q: "The normal adult resting respiratory rate range is 12 to ____ breaths per minute.", accept: ["20", "twenty"], rationale: "Normal adult respiration (eupnoea) is 12-20 breaths per minute." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "fon2-05-skin-heent",
    unit: "Unit 2 · Physical Examination",
    title: "Assessment of the Skin, Hair, Nails & HEENT",
    readMinutes: 25,
    summary: "System-wise assessment of the integument (skin, hair, nails) and the HEENT region — head, eyes, ears, nose, mouth and throat, neck and lymph nodes — including normal findings, common abnormalities and their clinical significance at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Assessing the skin", p: "The skin is inspected and palpated for colour, moisture, temperature, texture, turgor, oedema and lesions. Normal skin is warm, dry, intact and elastic with colour appropriate to ethnicity. Pallor suggests anaemia or poor perfusion; cyanosis (bluish) suggests hypoxia; jaundice (yellow) suggests liver or haemolytic disease; erythema (redness) suggests inflammation. In dark skin, colour change is best seen in the conjunctiva, oral mucosa, palms and soles." },
      { h: "Skin turgor, moisture and temperature", p: "Turgor (elasticity) is tested by gently pinching skin over the sternum or clavicle; slow return (tenting) indicates dehydration. Excess moisture (diaphoresis) accompanies fever or shock; dryness accompanies dehydration or hypothyroidism. Temperature is assessed with the dorsum of the hand, comparing both sides — generalised warmth suggests fever, local warmth suggests inflammation, and coolness suggests poor perfusion." },
      { h: "Skin lesions", list: [
        "Macule — flat, coloured, <1 cm (freckle); Patch — flat, >1 cm.",
        "Papule — raised, solid, <1 cm; Nodule — raised, solid, deeper, 1-2 cm.",
        "Vesicle — fluid-filled, <1 cm (blister); Bulla — fluid-filled, >1 cm.",
        "Pustule — pus-filled; Wheal — raised, transient, irregular (urticaria).",
        "Ulcer — loss of skin surface with a crater; Fissure — a linear crack."
      ] },
      { h: "The ABCDE of skin lesions", p: "Suspicious pigmented lesions are screened with the ABCDE rule: Asymmetry, Border irregularity, Colour variation, Diameter greater than 6 mm, and Evolution (change over time). Any lesion meeting these features warrants medical referral to exclude malignant melanoma." },
      { h: "Hair and nails", p: "Hair is inspected for distribution, colour, texture and quantity; alopecia, brittleness or excess hair may indicate nutritional or endocrine problems, and infestation (lice/nits) is checked. Nails are inspected for colour, shape, and the nail-bed angle. Capillary refill (normally under 2 seconds) reflects peripheral perfusion. Clubbing (angle >180 degrees) suggests chronic hypoxia; spoon-shaped nails (koilonychia) suggest iron-deficiency anaemia; and a blue nail bed suggests cyanosis." },
      { h: "Assessing the head and face", p: "The skull is inspected and palpated for size, shape, symmetry and any lumps or tenderness. The face is observed for symmetry (asymmetry may indicate facial nerve palsy or stroke), expression, and characteristic appearances (e.g. the moon face of Cushing's or the mask-like face of Parkinsonism). Temporomandibular joint movement is assessed." },
      { h: "Assessing the eyes", p: "The eyes are checked for visual acuity (Snellen chart, normal 6/6), external structures, conjunctiva (pink; pale in anaemia) and sclera (white; yellow in jaundice). Pupils are examined with a penlight and documented as PERRLA — Pupils Equal, Round, Reactive to Light and Accommodation. Normal pupil size is 3-5 mm; unequal pupils (anisocoria) or a fixed dilated pupil are serious neurological signs. Extraocular movements test the six cardinal fields of gaze." },
      { h: "Assessing the ears", p: "The external ear (pinna) is inspected for shape, symmetry and discharge; the canal and tympanic membrane are viewed with an otoscope (normal drum is pearly grey and intact). Hearing is screened with the whispered-voice test and, where indicated, the Rinne and Weber tuning-fork tests, which help distinguish conductive from sensorineural hearing loss." },
      { h: "Assessing the nose, mouth and throat", p: "The nose is checked for patency, deviation, discharge and mucosal colour. The mouth is inspected for lips, mucosa, gums, teeth and tongue (colour, hydration, coating, ulcers), and for odour. The pharynx and tonsils are viewed with a torch and tongue depressor; the uvula should rise midline when the patient says 'ah' (testing cranial nerves IX and X). Central cyanosis is best seen under the tongue." },
      { h: "Assessing the neck and lymph nodes", p: "The neck is inspected for symmetry, range of motion and any swelling; the trachea is palpated for midline position (deviation suggests a space-occupying or collapsing process). The thyroid is palpated for size, nodules and tenderness (normally not visibly enlarged). Lymph nodes (pre/post-auricular, cervical, submandibular, supraclavicular) are palpated; normal nodes are small, soft, mobile and non-tender, whereas hard, fixed, enlarged nodes are suspicious." },
      { h: "Common abnormal findings and significance", list: [
        "Cyanosis — hypoxia; central (tongue) is more serious than peripheral.",
        "Jaundiced sclera — liver or haemolytic disease.",
        "Pale conjunctiva — anaemia.",
        "Tracheal deviation — pneumothorax, effusion or mass.",
        "Fixed, hard cervical nodes — possible malignancy.",
        "Unequal pupils — raised intracranial pressure or nerve lesion."
      ] },
      { h: "Clinical relevance", p: "The integument and HEENT examination yields rich early diagnostic clues — the colour of the sclera and mucosa, the state of hydration in the skin, the reactivity of the pupils — that the degree-level nurse links to systemic disease and uses to prioritise urgent referral." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Describe the assessment of the skin for colour, temperature, moisture and turgor, and the significance of abnormal findings.",
      "Define and give an example of five primary skin lesions.",
      "Explain the ABCDE rule for evaluating a pigmented skin lesion.",
      "Describe the assessment of the eyes including the meaning of PERRLA.",
      "Describe the assessment of the neck, thyroid and lymph nodes and the significance of abnormal findings."
    ],
    assessment: [
      { type: "mcq", q: "Slow return of pinched skin over the sternum (tenting) indicates:", options: ["Normal turgor", "Dehydration", "Oedema", "Cyanosis"], answer: 1, rationale: "Poor skin turgor (tenting) is a sign of dehydration/fluid volume deficit." },
      { type: "mcq", q: "In a patient with very dark skin, central cyanosis is best detected by inspecting the:", options: ["Palms only", "Nail beds only", "Oral mucosa/under the tongue and conjunctiva", "Sclera"], answer: 2, rationale: "Colour change is most reliably seen in mucous membranes and conjunctiva in dark skin." },
      { type: "mcq", q: "A small, flat, circumscribed area of colour change less than 1 cm is a:", options: ["Papule", "Macule", "Vesicle", "Nodule"], answer: 1, rationale: "A macule is flat and <1 cm; a papule is raised; a vesicle is fluid-filled." },
      { type: "mcq", q: "In the ABCDE rule for a mole, 'D' stands for:", options: ["Discharge", "Diameter greater than 6 mm", "Dryness", "Depth"], answer: 1, rationale: "D = Diameter >6 mm, a warning feature for melanoma." },
      { type: "mcq", q: "Spoon-shaped nails (koilonychia) most commonly suggest:", options: ["Chronic hypoxia", "Iron-deficiency anaemia", "Liver disease", "Dehydration"], answer: 1, rationale: "Koilonychia is classically associated with iron-deficiency anaemia; clubbing suggests chronic hypoxia." },
      { type: "mcq", q: "PERRLA documents that the pupils are equal, round, and reactive to:", options: ["Light only", "Accommodation only", "Light and accommodation", "Pain"], answer: 2, rationale: "PERRLA = Pupils Equal, Round, Reactive to Light and Accommodation." },
      { type: "mcq", q: "Normal capillary refill time is:", options: ["Under 2 seconds", "3-5 seconds", "5-7 seconds", "Over 10 seconds"], answer: 0, rationale: "Capillary refill under 2 seconds reflects adequate peripheral perfusion." },
      { type: "mcq", q: "Deviation of the trachea from the midline may indicate:", options: ["Normal variation", "A pneumothorax, effusion or mass", "Good lung function", "Dehydration"], answer: 1, rationale: "Tracheal shift suggests a space-occupying or volume-changing thoracic process." },
      { type: "mcq", q: "Yellow discolouration of the sclera indicates:", options: ["Anaemia", "Cyanosis", "Jaundice", "Normal ageing"], answer: 2, rationale: "Scleral icterus (yellow sclera) reflects hyperbilirubinaemia/jaundice." },
      { type: "mcq", q: "Hard, fixed, enlarged cervical lymph nodes are MOST concerning for:", options: ["A viral cold", "Possible malignancy", "Normal nodes", "Dehydration"], answer: 1, rationale: "Hard, fixed, non-tender nodes raise suspicion of malignancy, unlike soft mobile reactive nodes." }
      , { type: "fill", q: "A fluid-filled, raised skin lesion smaller than 1 cm (a small blister) is called a ____.", accept: ["vesicle"], rationale: "A vesicle is a fluid-filled lesion <1 cm; a bulla is >1 cm." },
      { type: "fill", q: "The mnemonic ____ records that pupils are Equal, Round, Reactive to Light and Accommodation.", accept: ["PERRLA", "perrla"], rationale: "PERRLA is the standard documentation for normal pupils." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "fon2-06-respiratory-cardiovascular",
    unit: "Unit 2 · Physical Examination",
    title: "Assessment of the Respiratory & Cardiovascular Systems",
    readMinutes: 27,
    summary: "Focused assessment of the thorax and lungs (breath sounds, adventitious sounds) and the heart and peripheral vasculature (apex beat, heart sounds, pulses, oedema), with normal findings, common abnormalities and their nursing significance at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Respiratory assessment — inspection", p: "The thorax is inspected for shape, symmetry and the anteroposterior-to-transverse diameter (normally about 1:2; a 1:1 'barrel chest' suggests chronic obstruction). The nurse observes respiratory rate, depth, rhythm, effort, use of accessory muscles, chest expansion symmetry, and signs of distress such as nasal flaring, pursed-lip breathing or intercostal recession, and any cyanosis or clubbing." },
      { h: "Respiratory assessment — palpation and percussion", p: "Palpation assesses chest expansion (hands on the posterior chest should move apart symmetrically on inspiration), tenderness, and tactile fremitus (palpable vibration when the patient says 'ninety-nine' — increased over consolidation, decreased over effusion or pneumothorax). Percussion normally gives resonance; dullness suggests fluid/consolidation and hyper-resonance suggests trapped air." },
      { h: "Normal breath sounds", list: [
        "Vesicular — soft, low-pitched, heard over most lung fields; inspiration longer than expiration.",
        "Broncho-vesicular — medium pitch, over the main bronchi; inspiration equals expiration.",
        "Bronchial (tracheal) — loud, high-pitched, over the trachea; expiration longer than inspiration.",
        "Bronchial sounds heard over peripheral lung fields are ABNORMAL and suggest consolidation."
      ] },
      { h: "Adventitious (added) breath sounds", list: [
        "Crackles (crepitations) — discontinuous popping; fine crackles suggest fluid in small airways (pneumonia, heart failure).",
        "Wheezes — continuous musical high-pitched sounds from narrowed airways (asthma, COPD).",
        "Rhonchi — low-pitched snoring sounds from secretions in larger airways.",
        "Pleural friction rub — grating sound from inflamed pleural surfaces.",
        "Stridor — harsh high-pitched sound on inspiration from upper-airway obstruction (an emergency)."
      ] },
      { h: "Cardiovascular assessment — inspection and palpation", p: "The precordium is inspected and palpated for the apical impulse (point of maximal impulse, PMI), normally at the 5th intercostal space in the left mid-clavicular line. Displacement laterally suggests cardiac enlargement. The nurse palpates for heaves (sustained lifts) and thrills (palpable murmurs). The jugular venous pressure and any peripheral oedema and cyanosis are noted." },
      { h: "Auscultating the heart sounds", p: "Heart sounds are auscultated over the five classic areas: Aortic (2nd right intercostal space), Pulmonic (2nd left ICS), Erb's point (3rd left ICS), Tricuspid (4th-5th left ICS) and Mitral/apex (5th left ICS mid-clavicular). S1 ('lub') marks closure of the mitral and tricuspid valves at the start of systole; S2 ('dub') marks closure of the aortic and pulmonic valves at the start of diastole.", figure: {
        caption: "The cardiac cycle: S1 (mitral/tricuspid closure) begins systole; S2 (aortic/pulmonic closure) begins diastole.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heart sounds S1 and S2"><rect x="20" y="20" width="520" height="130" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Heart Sounds &amp; the Cardiac Cycle</text><line x1="60" y1="95" x2="500" y2="95" stroke="#15803D" stroke-width="2"/><circle cx="120" cy="95" r="18" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="120" y="100" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">S1</text><circle cx="340" cy="95" r="18" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="340" y="100" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">S2</text><text x="120" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">"lub" mitral/tricuspid close</text><text x="340" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">"dub" aortic/pulmonic close</text><text x="230" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#22C55E">SYSTOLE</text><text x="430" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#22C55E">DIASTOLE</text></svg>'
      } },
      { h: "Extra heart sounds and murmurs", list: [
        "S3 (ventricular gallop) — normal in children/young adults; suggests heart failure or volume overload in older adults.",
        "S4 (atrial gallop) — suggests a stiff ventricle (hypertension, ischaemia).",
        "Murmurs — turbulent flow; graded I-VI in intensity; described by timing (systolic/diastolic), location and radiation.",
        "Pericardial friction rub — from pericarditis."
      ] },
      { h: "Assessing peripheral vasculature", p: "Peripheral pulses (radial, brachial, femoral, popliteal, posterior tibial, dorsalis pedis) are palpated bilaterally for rate, rhythm, amplitude and symmetry, and graded 0 (absent) to 4+ (bounding). Capillary refill, skin temperature, colour and hair distribution reflect arterial supply. Peripheral (dependent) oedema is assessed by pressing over a bony prominence and graded by the depth and duration of pitting." },
      { h: "Grading oedema", list: [
        "1+ — slight (2 mm) pit, disappears rapidly.",
        "2+ — deeper (4 mm) pit, disappears in 10-15 seconds.",
        "3+ — deep (6 mm) pit, lasts more than a minute; limb looks swollen.",
        "4+ — very deep (8 mm) pit, lasts 2-5 minutes; gross swelling."
      ] },
      { h: "Common abnormal findings and significance", list: [
        "Crackles at lung bases + peripheral oedema + S3 — heart failure.",
        "Wheeze + prolonged expiration — obstructive airway disease.",
        "Displaced apex beat — cardiac enlargement.",
        "Absent/weak peripheral pulse + cool pale limb — arterial insufficiency.",
        "Stridor — upper-airway obstruction; a medical emergency."
      ] },
      { h: "Normal values / key figures", list: [
        "Apex beat: 5th intercostal space, left mid-clavicular line.",
        "SpO2: 95-100%.",
        "Respiration: 12-20/min; Pulse: 60-100/min.",
        "AP:transverse chest diameter ~1:2.",
        "Capillary refill: under 2 seconds."
      ] },
      { h: "Clinical relevance", p: "Integrated respiratory and cardiovascular assessment lets the nurse recognise the classic picture of heart failure or the deterioration of an asthmatic and escalate care early. At degree level the nurse correlates auscultatory findings with oxygenation, fluid status and vital-sign trends to form a clinical judgement." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Describe the inspection, palpation and percussion of the thorax in respiratory assessment.",
      "Differentiate normal breath sounds from adventitious sounds with examples.",
      "Describe the auscultation of heart sounds, including the location and meaning of S1 and S2.",
      "Explain the assessment and grading of peripheral pulses and pitting oedema.",
      "Describe the combined findings that suggest heart failure and the nursing response."
    ],
    assessment: [
      { type: "mcq", q: "The apical impulse (point of maximal impulse) is normally found at the:", options: ["2nd right intercostal space", "3rd left intercostal space", "5th left intercostal space, mid-clavicular line", "Xiphoid process"], answer: 2, rationale: "The normal PMI/apex beat lies at the 5th ICS in the left mid-clavicular line." },
      { type: "mcq", q: "Bronchial breath sounds heard over the peripheral lung fields indicate:", options: ["Consolidation", "A normal finding", "A pneumothorax", "Good aeration"], answer: 0, rationale: "Bronchial sounds are normal over the trachea; heard peripherally they suggest consolidation." },
      { type: "mcq", q: "A continuous, high-pitched musical sound from narrowed airways is a:", options: ["Crackle", "Wheeze", "Pleural rub", "Bronchial sound"], answer: 1, rationale: "Wheezes are continuous musical sounds of narrowed airways (asthma, COPD)." },
      { type: "mcq", q: "S1 ('lub') is produced by closure of the:", options: ["Aortic and pulmonic valves", "Pulmonic valve only", "Mitral and tricuspid valves", "Coronary arteries"], answer: 2, rationale: "S1 marks closure of the atrioventricular (mitral and tricuspid) valves at the start of systole." },
      { type: "mcq", q: "A harsh, high-pitched inspiratory sound over the upper airway that signals obstruction is:", options: ["Wheeze", "Rhonchi", "Stridor", "Fine crackles"], answer: 2, rationale: "Stridor indicates upper-airway obstruction and is a medical emergency." },
      { type: "mcq", q: "A pit that is about 4 mm deep and disappears in 10-15 seconds is graded:", options: ["1+", "2+", "3+", "4+"], answer: 1, rationale: "2+ pitting oedema is a ~4 mm pit lasting 10-15 seconds." },
      { type: "mcq", q: "Increased tactile fremitus over an area of lung suggests:", options: ["Pleural effusion", "Pneumothorax", "Consolidation", "Normal lung"], answer: 2, rationale: "Consolidation transmits vibration better (increased fremitus); effusion/air decrease it." },
      { type: "mcq", q: "An S3 heart sound in an older adult most commonly suggests:", options: ["Normal ageing", "Heart failure/volume overload", "Dehydration", "A stiff ventricle"], answer: 1, rationale: "S3 in older adults suggests heart failure or volume overload; S4 suggests a stiff ventricle." },
      { type: "mcq", q: "A barrel chest (AP:transverse ratio near 1:1) is characteristic of:", options: ["Normal young adults", "Dehydration", "Anaemia", "Chronic obstructive pulmonary disease"], answer: 3, rationale: "Air trapping in COPD increases the anteroposterior diameter, producing a barrel chest." },
      { type: "mcq", q: "Crackles at the lung bases with peripheral oedema and an S3 together most strongly suggest:", options: ["Asthma", "Pneumothorax", "Heart failure", "Anaemia"], answer: 2, rationale: "This classic combination reflects congestive heart failure." }
      , { type: "fill", q: "The soft, low-pitched breath sound heard over most peripheral lung fields is the ____ breath sound.", accept: ["vesicular"], rationale: "Vesicular breath sounds are normal over most of the lung fields." },
      { type: "fill", q: "The second heart sound, S2, is caused by closure of the aortic and ____ valves.", accept: ["pulmonic", "pulmonary"], rationale: "S2 marks closure of the semilunar (aortic and pulmonic) valves." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "fon2-07-abdomen-msk-neuro",
    unit: "Unit 2 · Physical Examination",
    title: "Assessment of the Abdomen, Musculoskeletal & Neurological Systems",
    readMinutes: 27,
    summary: "Assessment of the abdomen (four quadrants, bowel sounds, organ palpation), the musculoskeletal system (posture, gait, range of motion, muscle strength) and the neurological system (consciousness, Glasgow Coma Scale, cranial nerves, motor, sensory and reflex testing) at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Abdominal assessment — the map", p: "The abdomen is described by four quadrants (right and left, upper and lower) or nine regions. Knowing which organs lie in each area guides interpretation: the liver and gallbladder lie in the right upper quadrant, the spleen and stomach in the left upper, the appendix in the right lower, and the sigmoid colon in the left lower quadrant." },
      { h: "Abdominal assessment — sequence", p: "Uniquely, the abdomen is examined in the order Inspect, Auscultate, Percuss, Palpate, because palpation and percussion can alter bowel sounds. Inspection notes contour (flat, rounded, distended, scaphoid), symmetry, visible peristalsis, pulsations, scars and skin changes. The patient lies supine with knees slightly flexed to relax the abdominal wall.", figure: {
        caption: "Abdominal examination sequence and the four quadrants with key organs.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abdominal quadrants"><rect x="30" y="20" width="200" height="170" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="130" y1="20" x2="130" y2="190" stroke="#15803D" stroke-width="1.5"/><line x1="30" y1="105" x2="230" y2="105" stroke="#15803D" stroke-width="1.5"/><g font-family="sans-serif" font-size="10" fill="#0F4C3A"><text x="80" y="55" text-anchor="middle" font-weight="700">RUQ</text><text x="80" y="70" text-anchor="middle">liver, GB</text><text x="180" y="55" text-anchor="middle" font-weight="700">LUQ</text><text x="180" y="70" text-anchor="middle">spleen, stomach</text><text x="80" y="140" text-anchor="middle" font-weight="700">RLQ</text><text x="80" y="155" text-anchor="middle">appendix</text><text x="180" y="140" text-anchor="middle" font-weight="700">LLQ</text><text x="180" y="155" text-anchor="middle">sigmoid colon</text></g><rect x="270" y="40" width="260" height="130" rx="10" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="400" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Sequence (abdomen)</text><g font-family="sans-serif" font-size="12" fill="#15803D"><text x="290" y="92">1. Inspect</text><text x="290" y="115">2. Auscultate</text><text x="290" y="138">3. Percuss</text><text x="290" y="161">4. Palpate</text></g></svg>'
      } },
      { h: "Abdominal auscultation and percussion", p: "Bowel sounds are auscultated with the diaphragm in all four quadrants; normal sounds are soft gurgles occurring 5-30 times per minute. Hyperactive (loud, frequent) sounds occur in early obstruction or gastroenteritis; hypoactive or absent sounds (listen for a full 5 minutes before declaring absent) occur in paralytic ileus or peritonitis. Vascular bruits are noted over the aorta and renal arteries. Percussion reveals tympany over gas-filled bowel and dullness over organs, fluid or masses." },
      { h: "Abdominal palpation", p: "Light palpation (1 cm) screens for tenderness, guarding and superficial masses; deep palpation (4-5 cm) assesses organs and deeper masses. Signs of peritoneal irritation include involuntary guarding, rigidity, and rebound tenderness (pain on sudden release). The liver edge may be palpable below the right costal margin on deep inspiration; a palpable spleen tip is abnormal (enlargement)." },
      { h: "Musculoskeletal assessment", p: "The musculoskeletal system is assessed for posture, gait, symmetry, joint swelling, deformity, and range of motion (active and passive) at each joint. Muscle bulk and tone are inspected and palpated, and any crepitus, tenderness or limitation noted. The nurse also assesses functional ability — the capacity to perform activities of daily living." },
      { h: "Grading muscle strength", list: [
        "0/5 — no muscle contraction.",
        "1/5 — flicker of contraction, no movement.",
        "2/5 — movement with gravity eliminated.",
        "3/5 — movement against gravity but not resistance.",
        "4/5 — movement against gravity and some resistance.",
        "5/5 — normal power against full resistance."
      ] },
      { h: "Neurological assessment — level of consciousness", p: "Level of consciousness is the most sensitive indicator of neurological status. It is described from alert, to confused, drowsy, stuporous, and finally comatose, and quantified with the Glasgow Coma Scale (GCS). The nurse also assesses orientation to time, place and person." },
      { h: "The Glasgow Coma Scale (GCS)", p: "The GCS scores three responses — Eye opening (1-4), Verbal response (1-5) and Motor response (1-6) — for a total from 3 (deep coma) to 15 (fully conscious). A score of 8 or below indicates severe impairment (coma) and usually the need to protect the airway; 9-12 is moderate and 13-15 is mild.", figure: {
        caption: "Glasgow Coma Scale: three components summed to a total of 3 (worst) to 15 (best).",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Glasgow Coma Scale"><rect x="20" y="15" width="520" height="150" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="42" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Glasgow Coma Scale (total 3 - 15)</text><g font-family="sans-serif" font-size="12" fill="#15803D"><rect x="45" y="60" width="150" height="80" rx="8" fill="#DCFCE7" stroke="#22C55E"/><text x="120" y="82" text-anchor="middle" font-weight="700" fill="#0F4C3A">Eye opening</text><text x="120" y="105" text-anchor="middle">1 - 4</text><rect x="205" y="60" width="150" height="80" rx="8" fill="#DCFCE7" stroke="#22C55E"/><text x="280" y="82" text-anchor="middle" font-weight="700" fill="#0F4C3A">Verbal</text><text x="280" y="105" text-anchor="middle">1 - 5</text><rect x="365" y="60" width="150" height="80" rx="8" fill="#DCFCE7" stroke="#22C55E"/><text x="440" y="82" text-anchor="middle" font-weight="700" fill="#0F4C3A">Motor</text><text x="440" y="105" text-anchor="middle">1 - 6</text></g><text x="280" y="158" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">&#8804; 8 = severe (coma) &#183; 9-12 = moderate &#183; 13-15 = mild</text></svg>'
      } },
      { h: "Cranial nerves, motor, sensory and reflexes", list: [
        "Cranial nerves I-XII — smell, vision, eye movement, facial sensation and movement, hearing, swallowing, tongue and shoulder movement.",
        "Motor — muscle bulk, tone, power, coordination (finger-nose, heel-shin) and gait.",
        "Sensory — light touch, pain, temperature, vibration and proprioception.",
        "Reflexes — deep tendon reflexes graded 0 to 4+ (2+ normal); plantar reflex (Babinski) — an upgoing toe is abnormal in adults."
      ] },
      { h: "Signs of meningeal irritation and raised ICP", p: "Nuchal rigidity, a positive Kernig's sign (pain on knee extension with hip flexed) and Brudzinski's sign (hip/knee flexion when the neck is flexed) suggest meningeal irritation. Signs of raised intracranial pressure include a falling GCS, unequal or sluggish pupils, and the late Cushing's triad of rising blood pressure, bradycardia and irregular respiration." },
      { h: "Nursing responsibilities and documentation", list: [
        "Position and expose the patient correctly and preserve dignity for each region examined.",
        "Compare findings bilaterally and against the patient's own baseline.",
        "Record neurological observations (GCS, pupils, limb power) on a standard chart to reveal trends.",
        "Recognise and escalate red flags — rigid abdomen, falling GCS, unequal pupils — without delay.",
        "Ensure patient safety (fall precautions) when mobility or consciousness is impaired.",
        "Document findings accurately and communicate changes at handover."
      ] },
      { h: "Clinical relevance", p: "Neurological deterioration is often subtle and rapid; a one- or two-point fall in GCS or a newly sluggish pupil demands immediate escalation. Combined abdominal, musculoskeletal and neurological assessment lets the degree-level nurse localise problems, monitor trends, and prioritise life-threatening findings such as peritonitis or rising intracranial pressure." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Explain why the abdomen is examined in the order inspect-auscultate-percuss-palpate, and describe each step.",
      "Describe the assessment and grading of muscle strength.",
      "Describe the Glasgow Coma Scale and the significance of its scores.",
      "Outline the components of a neurological examination.",
      "Describe the signs of meningeal irritation and of raised intracranial pressure."
    ],
    assessment: [
      { type: "mcq", q: "The appendix is located in which abdominal quadrant?", options: ["Right upper quadrant", "Left upper quadrant", "Right lower quadrant", "Left lower quadrant"], answer: 2, rationale: "The appendix lies in the right lower quadrant (McBurney's point region)." },
      { type: "mcq", q: "Before documenting bowel sounds as 'absent' the nurse must auscultate for at least:", options: ["30 seconds", "1 minute", "5 minutes", "10 seconds"], answer: 2, rationale: "Absent bowel sounds are declared only after listening for a full 5 minutes in a quadrant." },
      { type: "mcq", q: "Pain felt when the examiner suddenly releases deep pressure over the abdomen is called:", options: ["Guarding", "Rebound tenderness", "Tympany", "Bruit"], answer: 1, rationale: "Rebound tenderness is a sign of peritoneal irritation (peritonitis)." },
      { type: "mcq", q: "A muscle that moves against gravity but not against added resistance is graded:", options: ["1/5", "2/5", "3/5", "5/5"], answer: 2, rationale: "3/5 is movement against gravity only; 4/5 adds some resistance." },
      { type: "mcq", q: "A Glasgow Coma Scale score of 8 or below indicates:", options: ["Full consciousness", "Mild impairment", "Severe impairment (coma) with likely airway risk", "A normal finding"], answer: 2, rationale: "GCS 8 or below is severe impairment and usually requires airway protection." },
      { type: "mcq", q: "The maximum possible total score on the Glasgow Coma Scale is:", options: ["10", "12", "15", "20"], answer: 2, rationale: "GCS ranges from 3 (deep coma) to 15 (fully conscious)." },
      { type: "mcq", q: "In an adult, an upgoing great toe on plantar stimulation (positive Babinski) is:", options: ["A normal reflex", "An abnormal (upper motor neuron) sign", "A sign of good coordination", "Expected after eating"], answer: 1, rationale: "A positive Babinski in adults indicates an upper motor neuron lesion; it is normal only in infants." },
      { type: "mcq", q: "Hyperactive, loud, frequent bowel sounds are MOST consistent with:", options: ["Paralytic ileus", "Peritonitis", "Early mechanical obstruction or gastroenteritis", "Normal fasting"], answer: 2, rationale: "Hyperactive sounds occur in early obstruction and gastroenteritis; ileus/peritonitis cause hypoactive/absent sounds." },
      { type: "mcq", q: "Cushing's triad (rising BP, bradycardia, irregular respiration) is a LATE sign of:", options: ["Dehydration", "Raised intracranial pressure", "Hypoglycaemia", "Anaemia"], answer: 1, rationale: "Cushing's triad is a late, ominous sign of raised intracranial pressure." },
      { type: "mcq", q: "For abdominal palpation the patient is best positioned:", options: ["Prone", "Standing", "Supine with knees slightly flexed", "Sitting upright"], answer: 2, rationale: "Supine with knees slightly flexed relaxes the abdominal wall for palpation." }
      , { type: "fill", q: "The scale used to quantify level of consciousness by eye, verbal and motor responses is the ____ ____ ____.", accept: ["glasgow coma scale", "gcs"], rationale: "The Glasgow Coma Scale sums eye, verbal and motor responses (3-15)." },
      { type: "fill", q: "Normal bowel sounds occur about 5 to ____ times per minute.", accept: ["30", "thirty"], rationale: "Normal bowel sounds are soft gurgles occurring 5-30 times per minute." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "fon2-08-pain-assessment",
    unit: "Unit 2 · Physical Examination",
    title: "Pain Assessment & Management",
    readMinutes: 24,
    summary: "Pain as the fifth vital sign: its physiology and types, comprehensive assessment using self-report and behavioural tools, pain-rating scales across the lifespan, barriers to assessment, and principles of pharmacological and non-pharmacological management at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and nature of pain", p: "Pain is 'an unpleasant sensory and emotional experience associated with, or resembling that associated with, actual or potential tissue damage' (IASP). It is subjective and personal: the widely quoted principle is that 'pain is whatever the experiencing person says it is, existing whenever they say it does.' Because it is subjective, the patient's self-report is the single most reliable indicator of pain." },
      { h: "Classification by duration and origin", list: [
        "Acute pain — recent onset, a warning of injury; usually resolves with healing (<3-6 months).",
        "Chronic pain — persists beyond expected healing (>3-6 months); may lack obvious cause.",
        "Nociceptive — from actual tissue damage; somatic (well-localised, e.g. bone) or visceral (deep, poorly localised, e.g. organ).",
        "Neuropathic — from nerve damage; burning, shooting, tingling (e.g. diabetic neuropathy).",
        "Referred pain — felt at a site distant from its source (e.g. cardiac pain in the left arm)."
      ] },
      { h: "Physiology of pain (nociception)", list: [
        "Transduction — noxious stimulus is converted into an electrical impulse at the nociceptor.",
        "Transmission — the impulse travels via peripheral nerves and the spinal cord to the brain.",
        "Perception — the brain (cortex, limbic system) becomes aware of and interprets the pain.",
        "Modulation — the body alters the signal, e.g. by releasing endorphins (the gate-control theory describes how the spinal 'gate' can be opened or closed)."
      ] },
      { h: "Comprehensive pain assessment (self-report)", p: "A full assessment analyses each dimension of the pain, often with OLDCARTS or the mnemonic COLDSPA/PQRST — Onset, Location, Duration, Character/quality, aggravating and relieving factors, Timing, and Severity — together with associated symptoms, effect on function and sleep, and the patient's beliefs and goals. Self-report is always sought first when the patient can communicate." },
      { h: "Pain-rating scales", list: [
        "Numeric Rating Scale (NRS) — patient rates pain 0 (none) to 10 (worst imaginable).",
        "Visual Analogue Scale (VAS) — a 10 cm line marked from no pain to worst pain.",
        "Wong-Baker FACES scale — faces from smiling to crying; useful for children and low-literacy adults.",
        "FLACC scale — Face, Legs, Activity, Cry, Consolability; a behavioural tool for infants/non-verbal patients.",
        "Verbal Descriptor Scale — none, mild, moderate, severe, worst possible."
      ], figure: {
        caption: "The 0-10 Numeric Rating Scale for pain intensity.",
        svg: '<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Numeric pain rating scale 0 to 10"><text x="280" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Numeric Pain Rating Scale (0-10)</text><line x1="40" y1="65" x2="520" y2="65" stroke="#0F4C3A" stroke-width="3"/><g font-family="sans-serif" font-size="11" fill="#15803D" text-anchor="middle"><text x="40" y="90">0</text><text x="88" y="90">1</text><text x="136" y="90">2</text><text x="184" y="90">3</text><text x="232" y="90">4</text><text x="280" y="90">5</text><text x="328" y="90">6</text><text x="376" y="90">7</text><text x="424" y="90">8</text><text x="472" y="90">9</text><text x="520" y="90">10</text></g><g><circle cx="40" cy="65" r="5" fill="#22C55E"/><circle cx="280" cy="65" r="5" fill="#15803D"/><circle cx="520" cy="65" r="5" fill="#0F4C3A"/></g><text x="40" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">no pain</text><text x="280" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">moderate</text><text x="520" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">worst</text></svg>'
      } },
      { h: "Behavioural and physiological indicators", p: "When patients cannot self-report (infants, the unconscious, cognitively impaired), the nurse relies on behavioural cues — grimacing, guarding, restlessness, moaning, altered facial expression — and physiological signs — tachycardia, hypertension, tachypnoea, sweating, dilated pupils (mostly in acute pain; these may be absent in chronic pain despite severe suffering)." },
      { h: "Barriers to accurate assessment", list: [
        "Belief that patients exaggerate, or fear of causing addiction (usually unfounded).",
        "Patient reluctance to report pain or to 'bother' staff.",
        "Cultural and language differences in expressing pain.",
        "Cognitive impairment, extremes of age, and unconsciousness.",
        "Failure to reassess after intervention."
      ] },
      { h: "The WHO analgesic ladder", p: "For persistent pain the WHO ladder guides pharmacological management: Step 1 non-opioids (paracetamol, NSAIDs) for mild pain; Step 2 weak opioids (e.g. codeine) plus non-opioids for moderate pain; Step 3 strong opioids (e.g. morphine) plus non-opioids for severe pain. Adjuvants (e.g. antidepressants, anticonvulsants for neuropathic pain) may be added at any step, and analgesia should be given regularly ('by the clock') for continuous pain." },
      { h: "Non-pharmacological measures", list: [
        "Cutaneous — heat, cold, massage, TENS.",
        "Cognitive-behavioural — relaxation, guided imagery, distraction, music.",
        "Positioning, rest and a calm environment.",
        "Education and reassurance to reduce fear and tension.",
        "Spiritual and psychological support."
      ] },
      { h: "Nursing management of pain", list: [
        "Accept and act on the patient's self-report of pain.",
        "Assess systematically and reassess after every intervention (e.g. 30-60 minutes after analgesia).",
        "Administer analgesia safely and monitor for effect and side-effects (e.g. respiratory depression with opioids).",
        "Combine pharmacological and non-pharmacological methods (multimodal).",
        "Involve the patient in setting realistic pain-relief goals.",
        "Document pain scores and the response to treatment."
      ] },
      { h: "Special populations and health education", list: [
        "Children — use age-appropriate tools (FACES, FLACC) and involve caregivers.",
        "Older adults — pain is often under-reported; screen actively and watch for behavioural cues.",
        "Cognitively impaired/non-verbal — rely on validated behavioural observation tools.",
        "Educate patients that reporting pain is encouraged and that addiction from appropriate short-term use is uncommon.",
        "Teach the correct use of prescribed analgesia and non-drug measures at home."
      ] },
      { h: "Clinical relevance", p: "Unrelieved pain harms recovery — it impairs breathing, mobility, sleep and wound healing and prolongs hospital stay. Treating pain as the fifth vital sign, and reassessing it as rigorously as any other, is a core degree-level nursing responsibility and an ethical duty." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Define pain and classify it by duration and origin with examples.",
      "Describe the four physiological processes of nociception.",
      "Describe the pain-rating scales used for different patient groups.",
      "Explain the WHO analgesic ladder and the principles of pharmacological pain management.",
      "Discuss the nursing management of a patient in pain, including non-pharmacological measures."
    ],
    assessment: [
      { type: "mcq", q: "The single most reliable indicator of a patient's pain is:", options: ["The nurse's judgement", "Vital-sign changes", "The patient's self-report", "The diagnosis"], answer: 2, rationale: "Pain is subjective; the patient's own report is the most reliable indicator." },
      { type: "mcq", q: "Burning, shooting pain from nerve damage, as in diabetic neuropathy, is classified as:", options: ["Somatic nociceptive", "Visceral nociceptive", "Neuropathic", "Referred"], answer: 2, rationale: "Neuropathic pain arises from nerve injury and is typically burning or shooting." },
      { type: "mcq", q: "Cardiac pain felt in the left arm is an example of:", options: ["Somatic pain", "Referred pain", "Chronic pain", "Neuropathic pain"], answer: 1, rationale: "Referred pain is felt at a site distant from its actual source." },
      { type: "mcq", q: "The process by which a noxious stimulus is converted into an electrical impulse is:", options: ["Transmission", "Transduction", "Perception", "Modulation"], answer: 1, rationale: "Transduction is the conversion of stimulus to impulse at the nociceptor." },
      { type: "mcq", q: "Which tool is MOST appropriate for assessing pain in a non-verbal infant?", options: ["Numeric Rating Scale", "Visual Analogue Scale", "FLACC scale", "Verbal Descriptor Scale"], answer: 2, rationale: "FLACC (Face, Legs, Activity, Cry, Consolability) is a behavioural tool for non-verbal patients/infants." },
      { type: "mcq", q: "On the WHO analgesic ladder, severe pain is treated at Step 3 with:", options: ["Paracetamol alone", "Weak opioids only", "Strong opioids such as morphine plus non-opioids", "No medication"], answer: 2, rationale: "Step 3 uses strong opioids (e.g. morphine) with non-opioids for severe pain." },
      { type: "mcq", q: "After giving an opioid analgesic the nurse should particularly monitor for:", options: ["Hypertension", "Respiratory depression", "Tachycardia", "Fever"], answer: 1, rationale: "Respiratory depression is the key dangerous side-effect of opioids." },
      { type: "mcq", q: "A patient with chronic pain may show NORMAL vital signs because:", options: ["The pain is not real", "The body adapts physiologically over time", "The scale is wrong", "Chronic pain never hurts"], answer: 1, rationale: "In chronic pain physiological signs often normalise through adaptation, though suffering continues." },
      { type: "mcq", q: "Which is a non-pharmacological pain-relief measure?", options: ["Morphine", "Guided imagery and relaxation", "Codeine", "An NSAID"], answer: 1, rationale: "Relaxation, imagery, heat/cold and distraction are non-pharmacological methods." },
      { type: "mcq", q: "The BEST time to reassess pain after giving an oral analgesic is about:", options: ["Immediately", "30-60 minutes later", "8 hours later", "Only the next day"], answer: 1, rationale: "Reassessing 30-60 minutes after analgesia checks effect at expected peak action." }
      , { type: "fill", q: "Pain that persists beyond the expected healing time, usually more than 3-6 months, is called ____ pain.", accept: ["chronic"], rationale: "Chronic pain outlasts normal healing; acute pain is recent and protective." },
      { type: "fill", q: "The 0 to 10 self-report tool for pain intensity is the ____ ____ Scale.", accept: ["numeric rating", "numerical rating"], rationale: "The Numeric Rating Scale rates pain from 0 (none) to 10 (worst)." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "fon2-09-nutritional-functional",
    unit: "Unit 2 · Physical Examination",
    title: "Nutritional & Functional Assessment",
    readMinutes: 24,
    summary: "Assessment of nutritional status (dietary history, the ABCD method — anthropometric, biochemical, clinical, dietary), screening tools, common deficiency signs, and functional assessment of activities of daily living, mobility and fall risk in the older adult at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of nutritional assessment", p: "Nutritional assessment identifies patients who are malnourished or at risk, enabling early intervention. Malnutrition — under- or over-nutrition — delays wound healing, weakens immunity, prolongs hospital stay and increases mortality. Screening on admission and periodic re-assessment are core nursing responsibilities." },
      { h: "The ABCD of nutritional assessment", p: "A comprehensive nutritional assessment uses four complementary methods, remembered as ABCD: Anthropometric measurements, Biochemical tests, Clinical examination and Dietary history. No single method is sufficient; they are interpreted together.", figure: {
        caption: "The ABCD framework for nutritional assessment.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ABCD nutritional assessment"><rect x="20" y="15" width="520" height="160" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="42" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">ABCD of Nutritional Assessment</text><g font-family="sans-serif" font-size="11" fill="#15803D"><rect x="40" y="60" width="230" height="46" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="80" font-weight="700" fill="#0F4C3A">A - Anthropometric</text><text x="52" y="98">weight, height, BMI, MUAC</text><rect x="290" y="60" width="230" height="46" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="80" font-weight="700" fill="#0F4C3A">B - Biochemical</text><text x="302" y="98">albumin, Hb, electrolytes</text><rect x="40" y="116" width="230" height="46" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="136" font-weight="700" fill="#0F4C3A">C - Clinical</text><text x="52" y="154">signs of deficiency</text><rect x="290" y="116" width="230" height="46" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="136" font-weight="700" fill="#0F4C3A">D - Dietary</text><text x="302" y="154">intake history, 24-h recall</text></g></svg>'
      } },
      { h: "Anthropometric measurements", list: [
        "Weight and height, and Body Mass Index (weight kg / height m squared).",
        "Recent unintentional weight loss — loss of >5% in a month or >10% in six months is significant.",
        "Mid-upper arm circumference (MUAC) — screens for wasting, especially in children.",
        "Skinfold thickness (e.g. triceps) — estimates body fat stores.",
        "Waist circumference — indicates central adiposity and metabolic risk."
      ] },
      { h: "Biochemical indicators", list: [
        "Serum albumin (normal ~3.5-5.0 g/dL) and prealbumin — longer- and shorter-term protein status.",
        "Haemoglobin and haematocrit — screen for anaemia.",
        "Serum electrolytes, glucose, urea and creatinine.",
        "Total lymphocyte count and transferrin — reflect nutritional and immune status."
      ] },
      { h: "Clinical signs of deficiency", list: [
        "Hair — dull, brittle, easily plucked (protein-energy malnutrition).",
        "Eyes — pale conjunctiva (iron), night blindness/Bitot's spots (vitamin A).",
        "Mouth — angular stomatitis, glossitis, bleeding gums (B-vitamins, vitamin C).",
        "Skin — dryness, poor wound healing, petechiae (vitamin C, zinc).",
        "Oedema and muscle wasting (protein deficiency); goitre (iodine)."
      ] },
      { h: "Dietary history and screening tools", p: "Dietary assessment uses a 24-hour recall, a food-frequency questionnaire, or a food diary to estimate intake, and explores appetite, chewing/swallowing difficulty, food allergies, cultural and religious practices, and financial access to food. Validated screening tools include the Malnutrition Universal Screening Tool (MUST) and the Mini Nutritional Assessment (MNA) for older adults; a positive screen triggers a full assessment and dietitian referral." },
      { h: "Functional assessment — activities of daily living", p: "Functional assessment measures a person's ability to perform everyday tasks, which is central to planning care and discharge. Basic Activities of Daily Living (ADLs) — bathing, dressing, toileting, transferring, continence and feeding — are often scored with the Katz or Barthel Index. Instrumental ADLs (IADLs) — cooking, shopping, managing money, medication and transport — are more complex tasks assessed by the Lawton scale." },
      { h: "Mobility and fall-risk assessment", p: "Mobility is assessed through gait, balance, transfers and the use of aids. Simple validated tools include the Timed Up and Go test (rising from a chair, walking 3 metres, returning and sitting; over ~12 seconds suggests increased fall risk) and the Morse Fall Scale. Fall-risk factors include age, previous falls, impaired vision, dizziness, polypharmacy, incontinence and an unsafe environment." },
      { h: "Functional decline in the older adult", p: "A geriatric assessment also screens for the common syndromes that threaten independence — cognitive impairment, depression, sensory loss, incontinence and frailty. Recognising functional decline early allows the nurse to mobilise rehabilitation, home support and safety measures before a crisis such as a fall or hospital admission." },
      { h: "Nursing responsibilities", list: [
        "Screen nutrition and function on admission and at intervals.",
        "Accurately measure and record weight, height, BMI and intake/output.",
        "Recognise and report signs of malnutrition and deteriorating function.",
        "Refer promptly to the dietitian, physiotherapist or occupational therapist.",
        "Promote independence and dignity while ensuring safety.",
        "Educate the patient and family on nutrition and safe mobility."
      ] },
      { h: "Normal values / key figures", list: [
        "Serum albumin: ~3.5-5.0 g/dL.",
        "Significant weight loss: >5% in 1 month or >10% in 6 months.",
        "Timed Up and Go: >12 seconds suggests increased fall risk.",
        "BMI normal range: 18.5-24.9."
      ] },
      { h: "Clinical relevance", p: "Nutritional and functional status strongly predict recovery, complications and length of stay. The degree-level nurse integrates these assessments with the physical examination to design realistic, person-centred goals — for example, combining protein supplementation with a graded mobility plan to prevent pressure injury and restore independence." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Describe the ABCD method of nutritional assessment.",
      "List the anthropometric measurements used in nutritional assessment and their significance.",
      "Describe the clinical signs of common nutrient deficiencies.",
      "Differentiate basic ADLs from instrumental ADLs and name a tool for assessing each.",
      "Describe the assessment of mobility and fall risk in the older adult."
    ],
    assessment: [
      { type: "mcq", q: "The 'B' in the ABCD of nutritional assessment refers to:", options: ["Biochemical tests", "Body weight", "Blood pressure", "Behaviour"], answer: 0, rationale: "ABCD = Anthropometric, Biochemical, Clinical, Dietary." },
      { type: "mcq", q: "Which unintentional weight loss is considered significant?", options: ["1% in a month", "2% in six months", "More than 5% in one month", "Any weight gain"], answer: 2, rationale: "Loss of >5% in a month (or >10% in six months) is clinically significant." },
      { type: "mcq", q: "A low serum albumin level generally reflects:", options: ["Good protein status", "High vitamin C", "Poorer/longer-term protein nutritional status", "Normal hydration"], answer: 2, rationale: "Albumin is a marker of protein status; low levels suggest protein malnutrition (over the longer term)." },
      { type: "mcq", q: "Bitot's spots and night blindness are clinical signs of deficiency of:", options: ["Vitamin A", "Iron", "Vitamin C", "Iodine"], answer: 0, rationale: "Vitamin A deficiency causes night blindness, Bitot's spots and xerophthalmia." },
      { type: "mcq", q: "Bathing, dressing, toileting and feeding are examples of:", options: ["Instrumental ADLs", "Basic ADLs", "Biochemical tests", "Anthropometry"], answer: 1, rationale: "Basic ADLs are essential self-care tasks; IADLs are more complex tasks like shopping and finances." },
      { type: "mcq", q: "Managing money, cooking and taking medication correctly are examples of:", options: ["Basic ADLs", "Vital signs", "Reflexes", "Instrumental ADLs (IADLs)"], answer: 3, rationale: "IADLs are complex tasks needed to live independently, assessed by the Lawton scale." },
      { type: "mcq", q: "A Timed Up and Go result of more than about 12 seconds suggests:", options: ["Excellent mobility", "Increased fall risk", "Normal nutrition", "Dehydration"], answer: 1, rationale: "A prolonged Timed Up and Go time indicates impaired mobility and higher fall risk." },
      { type: "mcq", q: "Which is a validated malnutrition screening tool?", options: ["Malnutrition Universal Screening Tool (MUST)", "Glasgow Coma Scale", "Snellen chart", "Morse Fall Scale"], answer: 0, rationale: "MUST (and MNA for older adults) screen for malnutrition risk." },
      { type: "mcq", q: "Angular stomatitis and glossitis are most associated with deficiency of:", options: ["Vitamin A", "B-group vitamins", "Vitamin D", "Calcium"], answer: 1, rationale: "B-vitamin deficiencies cause angular stomatitis and glossitis." },
      { type: "mcq", q: "A key nursing responsibility after a positive nutrition screen is to:", options: ["Ignore it if the patient looks well", "Stop all feeding", "Wait for discharge", "Refer to the dietitian and complete a full assessment"], answer: 3, rationale: "A positive screen should trigger full assessment and dietitian referral." }
      , { type: "fill", q: "The four-part method of nutritional assessment is abbreviated ____.", accept: ["ABCD", "abcd"], rationale: "ABCD = Anthropometric, Biochemical, Clinical, Dietary methods." },
      { type: "fill", q: "The circumference measured on the arm to screen for wasting, especially in children, is the ____ (three-letter abbreviation).", accept: ["MUAC", "muac"], rationale: "Mid-Upper Arm Circumference (MUAC) screens for wasting/undernutrition." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "fon2-10-documentation",
    unit: "Unit 3 · Documentation & Care Delivery",
    title: "Documentation of Assessment & Nursing Records",
    readMinutes: 24,
    summary: "The significance, principles and legal aspects of nursing documentation: types of records (data-collection form, Kardex, nurse's notes, flow sheets), documentation formats (SOAP, PIE, focus/DAR, narrative), electronic records, and rules for accurate, legally sound recording at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Significance of documentation", p: "The health record is the permanent, legal account of the patient's care. Good documentation ensures continuity and coordination of care, communicates assessment findings and the plan across shifts and disciplines, provides legal evidence of the care given, supports quality audit, reimbursement, education and research, and protects both patient and nurse. The professional maxim is: 'if it is not documented, it is not done.'" },
      { h: "Purposes of the health record", list: [
        "Communication among the health-care team.",
        "Continuity of care across shifts and settings.",
        "Legal documentation and evidence of accountability.",
        "Quality assurance, audit and accreditation.",
        "Reimbursement and resource planning.",
        "Education and clinical research.",
        "A database for the nursing process."
      ] },
      { h: "Types of nursing records", list: [
        "Data-collection form (nursing history/admission assessment) — the initial database.",
        "Kardex — a concise, updated summary of the current plan of care for quick reference.",
        "Nurse's (progress) notes — ongoing narrative of care and the patient's response.",
        "Flow sheets / graphic records — vital signs, intake-output, blood glucose recorded over time.",
        "Medication administration record (MAR).",
        "Care plan and clinical pathway.",
        "Incident/occurrence report — a separate record of adverse events (not filed in the chart)."
      ] },
      { h: "The Kardex", p: "The Kardex is a portable, quickly updated card or file summarising key information — diagnosis, allergies, activity and diet orders, treatments, and the current nursing plan — so any nurse can grasp a patient's care at a glance. It is a working communication tool and is usually not a permanent part of the legal record." },
      { h: "Documentation formats", list: [
        "Narrative — chronological free-text account of care.",
        "SOAP(IE) — Subjective, Objective, Assessment, Plan (Intervention, Evaluation); problem-oriented.",
        "PIE — Problem, Intervention, Evaluation.",
        "Focus/DAR charting — Data, Action, Response focused on a specific concern.",
        "Charting by exception (CBE) — documents only significant deviations from defined norms."
      ], figure: {
        caption: "Common structured documentation formats.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Documentation formats SOAP PIE DAR"><rect x="20" y="15" width="520" height="140" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Structured Charting Formats</text><g font-family="sans-serif" font-size="11" fill="#15803D"><rect x="40" y="55" width="150" height="85" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="115" y="75" text-anchor="middle" font-weight="700" fill="#0F4C3A">SOAP</text><text x="115" y="95" text-anchor="middle">Subjective</text><text x="115" y="110" text-anchor="middle">Objective</text><text x="115" y="125" text-anchor="middle">Assessment / Plan</text><rect x="205" y="55" width="150" height="85" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="280" y="75" text-anchor="middle" font-weight="700" fill="#0F4C3A">PIE</text><text x="280" y="95" text-anchor="middle">Problem</text><text x="280" y="110" text-anchor="middle">Intervention</text><text x="280" y="125" text-anchor="middle">Evaluation</text><rect x="370" y="55" width="150" height="85" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="445" y="75" text-anchor="middle" font-weight="700" fill="#0F4C3A">DAR (Focus)</text><text x="445" y="95" text-anchor="middle">Data</text><text x="445" y="110" text-anchor="middle">Action</text><text x="445" y="125" text-anchor="middle">Response</text></g></svg>'
      } },
      { h: "Principles of good documentation", list: [
        "Factual — record objective observations and what the patient states, not opinions.",
        "Accurate and precise — use exact measurements and approved terms/abbreviations.",
        "Complete and relevant — record all pertinent care and the patient's response.",
        "Current (timely) — chart as soon as possible after care; never in advance.",
        "Organised — logical, chronological entries.",
        "Confidential — accessible only to authorised persons."
      ] },
      { h: "Rules for legally sound records", list: [
        "Write legibly in permanent ink (paper records); sign and designate every entry.",
        "Date and time every entry.",
        "Never erase, use correction fluid, or delete; draw a single line through an error, write 'error', and initial.",
        "Do not leave blank lines; chart chronologically.",
        "Record only care you personally gave or witnessed.",
        "Use only approved abbreviations to avoid ambiguity."
      ] },
      { h: "Electronic health records (EHR)", p: "EHRs improve legibility, accessibility, decision support and data sharing, and reduce transcription errors. They require the nurse to protect log-in credentials (never share passwords), log out after use, avoid unauthorised access, and understand that every action is time-stamped and auditable. Downtime procedures must be known for system failures." },
      { h: "Legal and ethical issues", p: "Records are legal documents that can be used in court; falsification, back-dating or altering an entry is a serious offence. Patients have a right to confidentiality and, in many jurisdictions, to access their records. Breaching confidentiality — for example, discussing a patient on social media — violates law and professional codes. Incident reports document adverse events for risk management and are kept separate from the clinical chart." },
      { h: "Common documentation errors", list: [
        "Failing to record a change in condition or a given medication.",
        "Charting in advance or in a block at shift end (loss of accuracy).",
        "Vague entries ('patient comfortable') without supporting data.",
        "Using unapproved abbreviations.",
        "Correcting errors improperly (erasing or obliterating)."
      ] },
      { h: "Reporting and handover", p: "Documentation is complemented by verbal and written reporting. A structured handover tool such as SBAR (Situation, Background, Assessment, Recommendation) ensures critical information transfers safely between shifts and disciplines. Change-of-shift reports, transfer and referral reports, telephone orders (read back and verified) and incident reporting all support continuity and patient safety, and each has documentation requirements the nurse must meet." },
      { h: "Clinical relevance", p: "Accurate, contemporaneous records are the backbone of safe care and the nurse's best protection in disputes. Degree-level practice expects documentation that not only records tasks but demonstrates clinical judgement — the assessment, the reasoning, the action and the evaluated response." }
    ],
    references: REF_FON2,
    examQuestions: [
      "State the significance and purposes of nursing documentation.",
      "Describe the main types of nursing records including the Kardex.",
      "Compare the SOAP, PIE and Focus (DAR) formats of charting.",
      "List the rules for making legally sound entries in a nursing record.",
      "Discuss the legal and ethical issues relating to nursing records and electronic health records."
    ],
    assessment: [
      { type: "mcq", q: "The professional principle 'if it is not documented, it is not done' emphasises that:", options: ["Documentation is optional", "Care not recorded may be treated legally as not given", "Only doctors document", "Verbal reports are enough"], answer: 1, rationale: "Unrecorded care cannot be proven and may be considered undone in law." },
      { type: "mcq", q: "The concise, regularly updated summary of a patient's current care plan for quick reference is the:", options: ["Incident report", "Kardex", "Consent form", "Discharge summary"], answer: 1, rationale: "The Kardex gives an at-a-glance summary of current care." },
      { type: "mcq", q: "In SOAP charting, the 'O' stands for:", options: ["Opinion", "Objective data", "Order", "Outcome"], answer: 1, rationale: "SOAP = Subjective, Objective, Assessment, Plan." },
      { type: "mcq", q: "The correct way to deal with a written charting error is to:", options: ["Erase it completely", "Use correction fluid", "Draw a single line through it, write 'error' and initial", "Rewrite the whole page"], answer: 2, rationale: "A single line, the word 'error', and initials preserve the original and maintain integrity." },
      { type: "mcq", q: "Recording only significant deviations from established norms is called:", options: ["Narrative charting", "Charting by exception", "SOAP charting", "Focus charting"], answer: 1, rationale: "Charting by exception documents only findings that deviate from defined standards." },
      { type: "mcq", q: "Which entry best meets the principle of being factual and specific?", options: ["Patient seems fine", "Had a good night", "Reports pain 7/10 in right calf; leg warm and swollen", "Doing well"], answer: 2, rationale: "Specific, measurable, objective data with the patient's own report is factual and useful." },
      { type: "mcq", q: "An incident (occurrence) report should be:", options: ["Filed in the patient's chart", "Kept separate from the clinical record for risk management", "Discarded", "Written by the patient"], answer: 1, rationale: "Incident reports are kept separate from the chart and used for risk management." },
      { type: "mcq", q: "Charting nursing care in advance of actually providing it is:", options: ["Efficient and recommended", "Unacceptable and unsafe", "Required at shift start", "Standard practice"], answer: 1, rationale: "Charting in advance is inaccurate, unsafe and a form of falsification." },
      { type: "mcq", q: "A key security responsibility when using an electronic health record is to:", options: ["Share your password with colleagues", "Never log out", "Protect log-in credentials and log out after use", "Access any record freely"], answer: 2, rationale: "Credentials must be protected and access limited to authorised, need-to-know use." },
      { type: "mcq", q: "In Focus (DAR) charting, the 'R' represents the:", options: ["Reason", "Response of the patient", "Referral", "Result of a test"], answer: 1, rationale: "DAR = Data, Action, Response (the patient's response to the action)." }
      , { type: "fill", q: "The initial comprehensive record obtained on admission that forms the patient database is the ____ (nursing) assessment or data-collection form.", accept: ["admission", "nursing history", "baseline"], rationale: "The admission/nursing history assessment is the initial database." },
      { type: "fill", q: "The problem-oriented charting format abbreviated SOAP stands for Subjective, Objective, Assessment and ____.", accept: ["plan"], rationale: "SOAP = Subjective, Objective, Assessment, Plan." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "fon2-11-hygiene-comfort",
    unit: "Unit 3 · Documentation & Care Delivery",
    title: "Hygiene & Comfort Needs",
    readMinutes: 24,
    summary: "Personal hygiene as a fundamental need: purposes and types of bathing, oral, hair, nail, eye, ear, perineal care and back care, care of pressure-prone patients, factors influencing hygiene, and the assessment and promotion of comfort at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Meaning and importance of hygiene", p: "Hygiene is the practice of cleanliness that promotes health and prevents disease. Personal hygiene care maintains skin integrity, prevents infection and odour, stimulates circulation, promotes comfort and relaxation, preserves self-esteem and dignity, and provides an opportunity for the nurse to assess the skin and build rapport." },
      { h: "Factors influencing hygiene practices", list: [
        "Culture, religion and personal preference.",
        "Socioeconomic status and access to facilities.",
        "Knowledge and health beliefs.",
        "Physical condition — weakness, pain, mobility, cognition.",
        "Developmental stage and body image.",
        "Environment and available resources."
      ] },
      { h: "Types of bath", list: [
        "Complete bed bath — the nurse washes a totally dependent patient.",
        "Partial bed bath — only areas that cause discomfort or odour (face, axillae, perineum).",
        "Assisted bath — the patient does what they can, the nurse assists.",
        "Therapeutic bath — for a specific effect (e.g. sitz bath, medicated bath).",
        "Shower or tub bath — for the more independent patient."
      ] },
      { h: "Principles of the bed bath", list: [
        "Ensure privacy, warmth and safety; explain and gain consent.",
        "Perform hand hygiene; gather all equipment first.",
        "Wash from cleanest to dirtiest area; change water when cool or soiled.",
        "Wash, rinse and dry thoroughly, especially skin folds.",
        "Assess skin, mobility and comfort throughout.",
        "Encourage independence and maintain dignity."
      ] },
      { h: "Oral hygiene", p: "Oral care removes food debris and plaque, prevents dental caries, gum disease and infection, moistens the mucosa and freshens the mouth. It is especially important for unconscious, NPO, oxygen-dependent and dehydrated patients. For the unconscious patient, position them side-lying with the head turned to prevent aspiration, use minimal fluid and suction as needed." },
      { h: "Hair, nail, eye and ear care", list: [
        "Hair — brushing/combing, washing; check for lice; maintain scalp health.",
        "Nails — clean and trim straight across; special care for diabetics/vascular disease (avoid injury).",
        "Eyes — clean from inner to outer canthus with a separate swab per eye; special care for the unconscious to prevent corneal drying.",
        "Ears — clean the outer ear only; never insert objects into the canal."
      ] },
      { h: "Perineal and back care", p: "Perineal care cleanses the genital and anal area to prevent infection, odour and skin breakdown, and is essential for incontinent and catheterised patients (always clean from front to back in women). Back care (a back rub) with the patient prone or side-lying stimulates circulation, relieves muscle tension, provides comfort and offers an opportunity to inspect pressure areas over the sacrum and other bony prominences." },
      { h: "The comfortable, safe bed", list: [
        "Keep linen clean, dry, wrinkle-free and free of crumbs to protect skin.",
        "Position the bed at a safe height with brakes on and rails as indicated.",
        "Types of bed: open, closed, occupied, and post-operative (surgical) bed.",
        "Maintain a tidy, uncluttered, well-ventilated environment."
      ] },
      { h: "The concept of comfort", p: "Comfort is a state of physical, psychological, social and spiritual ease. Kolcaba's comfort theory describes three states — relief (a specific need met), ease (a state of calm) and transcendence (rising above problems) — across these four contexts. Nursing measures for comfort include relieving pain, positioning, hygiene, a restful environment, and emotional and spiritual support.", figure: {
        caption: "Kolcaba's three states of comfort across four contexts.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comfort theory"><rect x="20" y="15" width="520" height="130" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Comfort: three states, four contexts</text><g font-family="sans-serif" font-size="11" fill="#15803D"><rect x="40" y="55" width="150" height="40" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="115" y="80" text-anchor="middle" font-weight="700" fill="#0F4C3A">Relief</text><rect x="205" y="55" width="150" height="40" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="280" y="80" text-anchor="middle" font-weight="700" fill="#0F4C3A">Ease</text><rect x="370" y="55" width="150" height="40" rx="7" fill="#DCFCE7" stroke="#22C55E"/><text x="445" y="80" text-anchor="middle" font-weight="700" fill="#0F4C3A">Transcendence</text></g><text x="280" y="125" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Contexts: physical &#183; psychospiritual &#183; social &#183; environmental</text></svg>'
      } },
      { h: "Assessing comfort and hygiene needs", list: [
        "Assess skin integrity, mucous membranes, hair, nails and mouth.",
        "Determine the patient's usual hygiene routine and preferences.",
        "Assess self-care ability and level of assistance needed.",
        "Identify risk factors for skin breakdown and infection.",
        "Evaluate pain and other sources of discomfort."
      ] },
      { h: "Nursing responsibilities", list: [
        "Provide hygiene care tailored to need, culture and dignity.",
        "Promote self-care and independence wherever possible.",
        "Use hygiene time to assess the skin and detect early problems.",
        "Maintain a clean, safe, comfortable environment.",
        "Document care given and any abnormal findings."
      ] },
      { h: "Clinical relevance", p: "Hygiene and comfort are not merely 'basic tasks' — they prevent infection and pressure injury, reveal early skin and oral problems, and profoundly affect dignity, mood and recovery. The degree-level nurse uses each hygiene encounter as a structured assessment and a therapeutic intervention." }
    ],
    references: REF_FON2,
    examQuestions: [
      "State the purposes of personal hygiene care and the factors that influence hygiene practices.",
      "Describe the types of bath and the principles of giving a bed bath.",
      "Describe the provision of oral care to an unconscious patient and the precautions taken.",
      "Explain perineal and back care and their importance.",
      "Discuss the concept of comfort and the nursing measures that promote it."
    ],
    assessment: [
      { type: "mcq", q: "When giving a bed bath, the nurse should wash:", options: ["From cleanest to dirtiest area", "From dirtiest to cleanest area", "In any order", "Only the hands and face"], answer: 0, rationale: "Washing from cleanest to dirtiest reduces the spread of microorganisms." },
      { type: "mcq", q: "To prevent aspiration during oral care of an unconscious patient, the nurse positions them:", options: ["Flat on the back", "Sitting fully upright", "Side-lying with head turned", "Prone"], answer: 2, rationale: "Side-lying with the head turned lets fluids drain out, preventing aspiration." },
      { type: "mcq", q: "The eye is cleaned by wiping:", options: ["From inner to outer canthus", "From outer to inner canthus", "In a circular motion", "Only the eyelashes"], answer: 0, rationale: "Wiping inner to outer canthus with a separate swab per eye avoids contaminating the tear duct/other eye." },
      { type: "mcq", q: "Perineal care in a female patient should always proceed:", options: ["From back to front", "In random order", "From front to back", "Only on request"], answer: 2, rationale: "Cleaning front to back prevents transferring organisms from the anus to the urethra/vagina." },
      { type: "mcq", q: "A partial bed bath includes washing:", options: ["Only areas causing discomfort or odour (face, axillae, perineum)", "The entire body", "Only the feet", "Nothing"], answer: 0, rationale: "A partial bath cleanses areas prone to odour/discomfort rather than the whole body." },
      { type: "mcq", q: "Nail care for a patient with diabetes requires special caution because:", options: ["Nails grow faster", "Minor injury can lead to poor healing and infection", "Nails are stronger", "It is unnecessary"], answer: 1, rationale: "Impaired circulation and neuropathy mean small injuries can cause serious infection." },
      { type: "mcq", q: "Which finding during a bed bath should the nurse report and document?", options: ["Intact warm skin", "Clean nails", "Moist mucous membranes", "A reddened, non-blanching area over the sacrum"], answer: 3, rationale: "A non-blanching reddened bony prominence signals early pressure injury and must be reported." },
      { type: "mcq", q: "In Kolcaba's comfort theory, a state of calm and contentment is called:", options: ["Relief", "Ease", "Transcendence", "Distress"], answer: 1, rationale: "Ease is the state of calm; relief means a specific need is met; transcendence is rising above problems." },
      { type: "mcq", q: "A bed prepared to receive a patient returning from surgery is a/an:", options: ["Closed bed", "Occupied bed", "Post-operative (surgical) bed", "Open bed"], answer: 2, rationale: "The post-operative bed is arranged for easy transfer of a patient from theatre." },
      { type: "mcq", q: "A key reason to keep bed linen dry and wrinkle-free is to:", options: ["Save laundry", "Improve appearance only", "Reduce noise", "Prevent skin breakdown and pressure injury"], answer: 3, rationale: "Wrinkles and moisture increase friction and shear, promoting pressure injury." }
      , { type: "fill", q: "Cleansing of the genital and anal area, essential for incontinent and catheterised patients, is called ____ care.", accept: ["perineal", "peri"], rationale: "Perineal (peri) care prevents infection and skin breakdown in the genital/anal region." },
      { type: "fill", q: "In a bed bath, wash water should be changed when it becomes ____ or soiled.", accept: ["cool", "cold"], rationale: "Cool or soiled water is uncomfortable and less effective, so it is changed." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "fon2-12-activity-mobility",
    unit: "Unit 3 · Documentation & Care Delivery",
    title: "Activity, Mobility & Positioning",
    readMinutes: 25,
    summary: "Body mechanics and the nurse's role in movement, patient positions and their uses, range-of-motion exercises, transfer and ambulation, the hazards of immobility on every body system, and prevention through mobilisation at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Importance of activity and mobility", p: "Mobility — the ability to move freely and purposefully — is essential to independence, circulation, respiration, elimination, musculoskeletal integrity and psychological well-being. Nurses assess mobility, promote activity within limits, prevent the complications of immobility, and assist safe movement and positioning." },
      { h: "Body mechanics", p: "Body mechanics is the coordinated use of body parts to produce safe, efficient movement and to prevent injury to nurse and patient. Key principles: keep a wide base of support with feet apart; bend the knees and keep the back straight (lift with the legs, not the back); hold the load close to the body; face the direction of movement; and push, pull or roll rather than lift when possible. Mechanical aids and adequate help should be used for heavy patients." },
      { h: "Principles of safe patient handling", list: [
        "Assess the patient's weight, ability and cooperation before moving.",
        "Plan the move and explain it to the patient.",
        "Raise the bed to waist height and lock the wheels.",
        "Use a wide stance, flexed knees and the large leg muscles.",
        "Keep the load close and avoid twisting the spine.",
        "Use slide sheets, hoists and adequate staff; do not lift beyond safe limits."
      ] },
      { h: "Common patient positions and uses", list: [
        "Fowler's (semi-sitting 45-60 degrees) — eases breathing, feeding; high Fowler's ~90 degrees.",
        "Semi-Fowler's (30 degrees) — comfort, reduces aspiration, after some surgeries.",
        "Supine (dorsal recumbent) — rest, examination of the front of the body.",
        "Prone — promotes drainage; used in some respiratory failure.",
        "Lateral (side-lying) — relieves pressure on the sacrum; for unconscious patients.",
        "Sims' (semi-prone) — enemas, rectal exam, unconscious drainage.",
        "Trendelenburg (head down) — shock, promotes venous return (used cautiously).",
        "Lithotomy — pelvic/perineal procedures and childbirth."
      ], figure: {
        caption: "Head-of-bed angles: semi-Fowler's (30), Fowler's (45-60), high Fowler's (90).",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fowler positions"><rect x="20" y="15" width="520" height="140" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="38" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Fowler Position Angles</text><g stroke="#0F4C3A" stroke-width="2" fill="none"><line x1="60" y1="120" x2="150" y2="120"/><line x1="60" y1="120" x2="95" y2="95"/><line x1="230" y1="120" x2="320" y2="120"/><line x1="230" y1="120" x2="278" y2="80"/><line x1="400" y1="120" x2="490" y2="120"/><line x1="400" y1="120" x2="400" y2="75"/></g><g font-family="sans-serif" font-size="10" fill="#15803D" text-anchor="middle"><text x="105" y="140">Semi-Fowler 30&#176;</text><text x="275" y="140">Fowler 45-60&#176;</text><text x="445" y="140">High Fowler 90&#176;</text></g></svg>'
      } },
      { h: "Range-of-motion (ROM) exercises", list: [
        "Active ROM — the patient moves the joint independently.",
        "Active-assisted ROM — the patient moves with some help.",
        "Passive ROM — the nurse moves the joint for a patient who cannot.",
        "Purpose — maintain joint mobility, prevent contractures, stimulate circulation.",
        "Move each joint through flexion, extension, abduction, adduction and rotation to the point of resistance, not pain."
      ] },
      { h: "Transfer and ambulation", p: "Safe transfer (bed to chair, chair to bed) uses correct body mechanics, a transfer belt, and the patient's own strength where possible; the strong side leads. Before ambulation the nurse assesses strength and balance, dangles the patient at the bedside to check for orthostatic hypotension, uses appropriate footwear and aids (walker, cane, crutches), and stays on the patient's weaker side ready to support." },
      { h: "Hazards of immobility — by system", list: [
        "Musculoskeletal — muscle atrophy, weakness, contractures, osteoporosis, disuse.",
        "Cardiovascular — orthostatic hypotension, venous stasis, deep vein thrombosis, increased cardiac workload.",
        "Respiratory — reduced chest expansion, pooling of secretions, atelectasis, hypostatic pneumonia.",
        "Integumentary — pressure injuries over bony prominences.",
        "Urinary — stasis, calculi (stones), infection, retention.",
        "Gastrointestinal — reduced appetite, constipation.",
        "Metabolic — negative nitrogen and calcium balance, slowed metabolism.",
        "Psychological — depression, boredom, altered sleep, disorientation."
      ] },
      { h: "Preventing complications of immobility", list: [
        "Encourage early and frequent mobilisation and ROM exercises.",
        "Reposition at least every 2 hours to protect the skin.",
        "Deep-breathing and coughing exercises to clear secretions.",
        "Anti-embolism stockings, calf exercises and prescribed prophylaxis for DVT.",
        "Adequate hydration, fibre and toileting for elimination.",
        "Maintain functional body alignment and use of supportive devices."
      ] },
      { h: "Assessment of mobility", p: "The nurse assesses body alignment, gait, joint range and stability, muscle strength (0-5 scale), endurance, coordination and the use of aids, together with the patient's activity tolerance (noting pulse, respiration and fatigue during activity) and any pain that limits movement." },
      { h: "Assistive devices and their use", list: [
        "Walker (frame) — greatest stability; lift and place, then step in.",
        "Cane — held on the strong side; advanced with the weak leg.",
        "Crutches — sized with 2-3 finger widths below the axilla; weight taken on the hands, not the axillae.",
        "Wheelchair — lock brakes before transfer; ensure footrests are managed safely.",
        "Trapeze, transfer/slide boards and hoists for dependent patients."
      ] },
      { h: "Common gait abnormalities", list: [
        "Antalgic gait — limping to avoid pain in a limb.",
        "Shuffling/festinating gait — small quick steps, seen in Parkinsonism.",
        "Ataxic gait — unsteady, wide-based, poor coordination.",
        "Hemiplegic gait — the affected leg is swung out and around after a stroke.",
        "Assessing gait guides aid selection and fall prevention."
      ] },
      { h: "Clinical relevance", p: "Immobility harms every body system, so 'first mobilisation' is a key safety and recovery goal after surgery and acute illness. Degree-level nurses balance the benefits of early activity against safety, tailoring positioning and progressive mobilisation to the individual to prevent DVT, pneumonia, pressure injury and functional decline." }
    ],
    references: REF_FON2,
    examQuestions: [
      "State the principles of good body mechanics for safe patient handling.",
      "Describe the common patient positions and their uses.",
      "Differentiate active, active-assisted and passive range-of-motion exercises.",
      "Describe the hazards of immobility on each body system.",
      "Explain the nursing measures used to prevent the complications of immobility."
    ],
    assessment: [
      { type: "mcq", q: "A core principle of good body mechanics when lifting is to:", options: ["Bend at the waist with straight knees", "Bend the knees and lift with the leg muscles", "Hold the load away from the body", "Twist the spine while lifting"], answer: 1, rationale: "Bending the knees and using the large leg muscles protects the back." },
      { type: "mcq", q: "Which position best eases breathing in a patient with dyspnoea?", options: ["Supine", "Prone", "Fowler's (semi-sitting)", "Trendelenburg"], answer: 2, rationale: "Fowler's position drops the diaphragm and eases lung expansion and breathing." },
      { type: "mcq", q: "Passive range-of-motion exercises are performed:", options: ["By the patient alone", "By the nurse for a patient who cannot move the joint", "Only with weights", "Only after discharge"], answer: 1, rationale: "In passive ROM the nurse moves the joints for a patient unable to do so." },
      { type: "mcq", q: "Pooling of respiratory secretions and atelectasis in an immobile patient can lead to:", options: ["Hypostatic pneumonia", "Osteoporosis", "Renal calculi", "Contractures"], answer: 0, rationale: "Immobility causes secretion pooling and hypostatic pneumonia in the respiratory system." },
      { type: "mcq", q: "Before helping an immobile patient to stand, the nurse dangles them at the bedside mainly to check for:", options: ["Fever", "Orthostatic hypotension", "Constipation", "Pressure injury"], answer: 1, rationale: "Dangling detects orthostatic (postural) hypotension before ambulation to prevent falls." },
      { type: "mcq", q: "To protect the skin, an immobile patient should be repositioned at least every:", options: ["8 hours", "6 hours", "2 hours", "12 hours"], answer: 2, rationale: "Repositioning at least 2-hourly relieves pressure and prevents pressure injury." },
      { type: "mcq", q: "When assisting ambulation, the nurse should generally stand on the patient's:", options: ["Stronger side", "Weaker side, ready to support", "Behind at a distance", "In front blocking the path"], answer: 1, rationale: "Standing on the weaker side lets the nurse support the patient if they lose balance." },
      { type: "mcq", q: "The side-lying position that relieves pressure on the sacrum and is used for unconscious patients is:", options: ["Supine", "Lateral", "Fowler's", "Lithotomy"], answer: 1, rationale: "The lateral (side-lying) position relieves sacral pressure and helps drainage in the unconscious." },
      { type: "mcq", q: "Venous stasis from immobility increases the specific risk of:", options: ["Deep vein thrombosis", "Osteoporosis", "Pneumonia", "Contractures"], answer: 0, rationale: "Venous stasis predisposes to deep vein thrombosis; anti-embolism measures reduce this." },
      { type: "mcq", q: "During a transfer from bed to chair, the patient should generally lead with the:", options: ["Weaker side", "Stronger side", "Either side equally", "Feet together"], answer: 1, rationale: "Leading with the stronger side gives a more stable, safer transfer." }
      , { type: "fill", q: "Moving each joint through its full range by the nurse when the patient cannot move it is called ____ range-of-motion exercise.", accept: ["passive"], rationale: "Passive ROM is performed by the nurse for the patient." },
      { type: "fill", q: "Repositioning an immobile patient at least every ____ hours helps prevent pressure injury.", accept: ["2", "two"], rationale: "Two-hourly repositioning relieves pressure over bony prominences." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "fon2-13-rest-sleep",
    unit: "Unit 3 · Documentation & Care Delivery",
    title: "Rest & Sleep",
    readMinutes: 23,
    summary: "The physiology of sleep (NREM and REM stages, the sleep cycle, circadian rhythm), functions of sleep, requirements across the lifespan, common sleep disorders, factors affecting sleep, assessment, and nursing measures to promote rest and sleep at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Rest and sleep defined", p: "Rest is a state of reduced activity that leaves a person refreshed and calm. Sleep is a recurring, reversible state of reduced consciousness and responsiveness to the environment, essential to physical restoration, memory consolidation and psychological health. Both are basic human needs the nurse must protect and promote." },
      { h: "Functions of sleep", list: [
        "Physical restoration and tissue repair (growth hormone release).",
        "Energy conservation.",
        "Memory consolidation and learning.",
        "Immune function and infection resistance.",
        "Emotional regulation and psychological well-being.",
        "Brain 'clearance' of metabolic waste."
      ] },
      { h: "Physiology — NREM and REM sleep", p: "Sleep alternates between non-rapid-eye-movement (NREM) and rapid-eye-movement (REM) sleep. NREM has three stages (N1 light transition, N2 true sleep, N3 deep/slow-wave restorative sleep). REM sleep is when most vivid dreaming occurs, with rapid eye movements, muscle atonia and brain activity resembling wakefulness. One full cycle lasts about 90-110 minutes and repeats 4-6 times a night, with REM periods lengthening toward morning.", figure: {
        caption: "One sleep cycle (~90-110 min): NREM stages N1-N3 then REM, repeating through the night.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sleep cycle stages"><rect x="20" y="15" width="520" height="140" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="38" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">The Sleep Cycle (~90-110 min)</text><g font-family="sans-serif" font-size="11" fill="#15803D"><rect x="45" y="55" width="95" height="70" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="92" y="85" text-anchor="middle" font-weight="700" fill="#0F4C3A">N1</text><text x="92" y="105" text-anchor="middle">light</text><rect x="150" y="55" width="95" height="70" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="197" y="85" text-anchor="middle" font-weight="700" fill="#0F4C3A">N2</text><text x="197" y="105" text-anchor="middle">true sleep</text><rect x="255" y="55" width="95" height="70" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="85" text-anchor="middle" font-weight="700" fill="#0F4C3A">N3</text><text x="302" y="105" text-anchor="middle">deep</text><rect x="360" y="55" width="150" height="70" rx="6" fill="#22C55E" stroke="#0F4C3A"/><text x="435" y="85" text-anchor="middle" font-weight="700" fill="#F0FDF4">REM</text><text x="435" y="105" text-anchor="middle" fill="#F0FDF4">dreaming</text></g></svg>'
      } },
      { h: "Circadian rhythm", p: "The circadian rhythm is the body's ~24-hour internal clock, governed by the suprachiasmatic nucleus and cued by light and darkness. It regulates the sleep-wake cycle, body temperature and hormone secretion (melatonin rises in darkness to promote sleep, cortisol rises toward waking). Disruption — by shift work, hospital routines or crossing time zones — impairs sleep and health." },
      { h: "Sleep requirements across the lifespan", list: [
        "Newborn — about 16 hours a day.",
        "Infant — 12-15 hours including naps.",
        "Toddler/pre-schooler — 10-13 hours.",
        "School-age child — 9-11 hours.",
        "Adolescent — 8-10 hours.",
        "Adult — 7-9 hours.",
        "Older adult — 7-8 hours, but lighter, more fragmented sleep with less N3."
      ] },
      { h: "Common sleep disorders", list: [
        "Insomnia — difficulty falling or staying asleep, or non-restorative sleep.",
        "Sleep apnoea — repeated pauses in breathing during sleep (often obstructive).",
        "Narcolepsy — sudden uncontrollable daytime sleep attacks.",
        "Restless legs syndrome — unpleasant leg sensations urging movement.",
        "Parasomnias — sleepwalking, night terrors, bruxism, enuresis.",
        "Sleep deprivation — insufficient quantity/quality causing daytime dysfunction."
      ] },
      { h: "Factors affecting sleep", list: [
        "Illness, pain and physical discomfort.",
        "Environment — noise, light, unfamiliar hospital setting.",
        "Emotional stress, anxiety and depression.",
        "Lifestyle — shift work, irregular schedules.",
        "Diet and stimulants — caffeine, nicotine, alcohol, heavy late meals.",
        "Medications — some drugs disturb sleep or suppress REM.",
        "Age and normal developmental changes."
      ] },
      { h: "Effects of sleep deprivation", p: "Inadequate sleep impairs concentration, judgement, mood and reaction time; weakens immunity; disturbs appetite and glucose regulation; and, over time, increases the risk of hypertension, obesity, diabetes and mental-health problems. In hospital, disrupted sleep slows recovery and can contribute to delirium, especially in older patients." },
      { h: "Assessment of sleep", list: [
        "Usual sleep pattern, bedtime routine and sleep environment.",
        "Difficulty falling or staying asleep and early waking.",
        "Daytime sleepiness, naps and energy levels.",
        "Use of sleep aids, caffeine, alcohol and medications.",
        "Signs of a sleep disorder (snoring, apnoea, restless legs).",
        "A sleep diary where indicated."
      ] },
      { h: "Nursing measures to promote sleep (sleep hygiene)", list: [
        "Provide a quiet, dark, comfortable environment; cluster care to avoid unnecessary waking.",
        "Support the patient's usual bedtime routine and sleep position.",
        "Relieve pain and discomfort and offer a back rub or warm drink.",
        "Encourage daytime activity and limit long daytime naps.",
        "Limit caffeine, heavy meals and screens before sleep.",
        "Use relaxation techniques; give hypnotics only as a last resort and cautiously."
      ] },
      { h: "Pharmacological aids and cautions", p: "Hypnotics and sedatives (e.g. benzodiazepines, Z-drugs) may occasionally be prescribed for short-term insomnia but carry risks — daytime drowsiness, tolerance, dependence, rebound insomnia, and falls or confusion in older adults. They should be a last resort, used at the lowest effective dose for the shortest time, alongside sleep-hygiene measures, with the nurse monitoring effect and safety." },
      { h: "Clinical relevance", p: "Sleep is a therapeutic necessity, not a luxury: promoting it speeds healing, stabilises mood and helps prevent delirium. The degree-level nurse plans care to protect uninterrupted sleep — grouping observations and treatments, controlling noise and light, and preferring non-pharmacological measures before sedatives." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Describe the stages of NREM and REM sleep and the structure of the sleep cycle.",
      "Explain the circadian rhythm and its influence on sleep.",
      "State the sleep requirements across the lifespan.",
      "Describe the common sleep disorders and the factors that affect sleep.",
      "Discuss the nursing measures used to promote rest and sleep in hospital."
    ],
    assessment: [
      { type: "mcq", q: "Deep, slow-wave, most restorative sleep occurs in:", options: ["Stage N1", "Stage N2", "Stage N3 (NREM)", "REM sleep"], answer: 2, rationale: "N3 is deep slow-wave sleep and is the most physically restorative stage." },
      { type: "mcq", q: "Vivid dreaming and muscle atonia are characteristic of:", options: ["N1", "N2", "N3", "REM sleep"], answer: 3, rationale: "REM sleep features vivid dreams, rapid eye movements and skeletal muscle atonia." },
      { type: "mcq", q: "One complete sleep cycle lasts approximately:", options: ["20-30 minutes", "45-60 minutes", "90-110 minutes", "3 hours"], answer: 2, rationale: "A cycle of NREM then REM lasts about 90-110 minutes and repeats several times." },
      { type: "mcq", q: "The hormone that rises in darkness to promote sleep is:", options: ["Cortisol", "Melatonin", "Insulin", "Adrenaline"], answer: 1, rationale: "Melatonin rises in darkness; cortisol rises toward waking." },
      { type: "mcq", q: "The recommended sleep duration for a healthy adult is about:", options: ["3-4 hours", "5-6 hours", "7-9 hours", "11-12 hours"], answer: 2, rationale: "Adults generally need 7-9 hours of sleep per night." },
      { type: "mcq", q: "Repeated pauses in breathing during sleep describe:", options: ["Insomnia", "Narcolepsy", "Sleep apnoea", "Restless legs syndrome"], answer: 2, rationale: "Sleep apnoea is characterised by repeated breathing pauses, commonly obstructive." },
      { type: "mcq", q: "Which is the BEST first nursing measure to help a hospitalised patient sleep?", options: ["Give a sedative immediately", "Cluster care and reduce noise and light", "Wake the patient hourly for observations", "Encourage caffeine at night"], answer: 1, rationale: "Non-pharmacological measures — clustering care, reducing noise/light — are preferred first." },
      { type: "mcq", q: "Sleepwalking and night terrors are examples of:", options: ["Insomnia", "Parasomnias", "Narcolepsy", "Circadian disorders"], answer: 1, rationale: "Parasomnias are abnormal behaviours during sleep, such as sleepwalking and night terrors." },
      { type: "mcq", q: "Compared with younger adults, older adults typically have:", options: ["More deep N3 sleep", "Lighter, more fragmented sleep with less N3", "No REM sleep", "A longer sleep cycle"], answer: 1, rationale: "Older adults have lighter, more fragmented sleep and reduced slow-wave (N3) sleep." },
      { type: "mcq", q: "Disrupted hospital sleep in an older patient may specifically contribute to:", options: ["Faster healing", "Delirium", "Lower infection risk", "Weight loss only"], answer: 1, rationale: "Sleep disruption is a recognised contributor to delirium, especially in older patients." }
      , { type: "fill", q: "The body's approximately 24-hour internal clock governing the sleep-wake cycle is the ____ rhythm.", accept: ["circadian"], rationale: "The circadian rhythm is the ~24-hour internal biological clock." },
      { type: "fill", q: "The stage of sleep in which most vivid dreaming occurs is ____ sleep.", accept: ["REM", "rem", "rapid eye movement"], rationale: "Most vivid dreaming occurs during REM (rapid eye movement) sleep." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "fon2-14-oxygenation",
    unit: "Unit 4 · Oxygenation, Fluids & Elimination",
    title: "Oxygenation & Airway Care",
    readMinutes: 26,
    summary: "Meeting the oxygenation need: respiratory physiology, factors affecting oxygenation, assessment of respiratory status, oxygen delivery devices and flow rates, safety of oxygen therapy, airway clearance (positioning, breathing exercises, suctioning), and tracheostomy care at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The need for oxygenation", p: "Oxygenation is the process of supplying the cells with oxygen and removing carbon dioxide, achieved through ventilation (air movement), diffusion (gas exchange in the alveoli) and perfusion (blood flow carrying gases). Oxygen is essential for cellular metabolism; even brief deprivation harms the brain and heart, making oxygenation a top clinical priority (the 'B' and 'C' of ABC)." },
      { h: "Factors affecting oxygenation", list: [
        "Airway patency — obstruction by secretions, tongue, foreign body.",
        "Lung and cardiac disease — pneumonia, COPD, asthma, heart failure.",
        "Haemoglobin level — anaemia reduces oxygen-carrying capacity.",
        "Environment — altitude, air quality, smoking.",
        "Age, obesity, immobility and pain that limits breathing.",
        "Anxiety and level of consciousness."
      ] },
      { h: "Assessment of oxygenation", list: [
        "Respiratory rate, depth, rhythm and effort; use of accessory muscles.",
        "Oxygen saturation (SpO2) — normal 95-100%.",
        "Skin/mucosa colour — cyanosis signals hypoxia.",
        "Breath sounds and adventitious sounds on auscultation.",
        "Cough and sputum (colour, amount, consistency).",
        "Signs of hypoxia — restlessness, confusion, tachycardia, dyspnoea, later cyanosis.",
        "Arterial blood gases where available."
      ] },
      { h: "Signs of hypoxia and hypoxaemia", p: "Hypoxaemia is low oxygen in the blood (SpO2 <90% or low PaO2); hypoxia is inadequate oxygen at the tissues. Early signs are restlessness, anxiety, tachypnoea, tachycardia and rising blood pressure; late signs are confusion, bradycardia, cyanosis, hypotension and loss of consciousness. Restlessness and confusion are important EARLY warnings that must not be dismissed." },
      { h: "Positioning and breathing exercises", list: [
        "High Fowler's / orthopnoeic position — maximises lung expansion for dyspnoea.",
        "Deep-breathing and incentive spirometry — expand alveoli, prevent atelectasis.",
        "Pursed-lip breathing — prolongs expiration, useful in COPD.",
        "Diaphragmatic (abdominal) breathing — improves ventilation efficiency.",
        "Effective coughing and chest physiotherapy — mobilise secretions.",
        "Adequate hydration to keep secretions loose."
      ] },
      { h: "Oxygen delivery devices", list: [
        "Nasal cannula — 1-6 L/min, delivers ~24-44% oxygen; comfortable, allows eating/talking.",
        "Simple face mask — 5-10 L/min, ~40-60%; needs at least 5 L/min to flush CO2.",
        "Partial rebreather / non-rebreather mask — 10-15 L/min, up to ~60-95%; for high need.",
        "Venturi mask — precise fixed percentages (e.g. 24-60%); ideal for COPD.",
        "Face tent, T-piece and tracheostomy collar for specific situations."
      ], figure: {
        caption: "Common oxygen devices with approximate flow rates and delivered oxygen concentration.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxygen delivery devices"><rect x="20" y="15" width="520" height="150" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="38" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Oxygen Delivery (approximate)</text><g font-family="sans-serif" font-size="11" fill="#15803D"><rect x="40" y="55" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="50" y="75" fill="#0F4C3A">Nasal cannula: 1-6 L/min - 24-44%</text><rect x="290" y="55" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="300" y="75" fill="#0F4C3A">Simple mask: 5-10 L/min - 40-60%</text><rect x="40" y="95" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="50" y="115" fill="#0F4C3A">Non-rebreather: 10-15 L - up to 95%</text><rect x="290" y="95" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="300" y="115" fill="#0F4C3A">Venturi: precise 24-60%</text></g><text x="280" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Venturi = fixed, accurate % - preferred in COPD</text></svg>'
      } },
      { h: "Safety of oxygen therapy", list: [
        "Oxygen supports combustion — NO smoking or open flames; use 'oxygen in use' signs.",
        "Avoid oil, grease and alcohol-based products near the source.",
        "Check flow rate against the prescription; oxygen is a drug.",
        "Humidify oxygen at higher flow rates to prevent mucosal drying.",
        "In some COPD patients, high-flow oxygen can suppress the hypoxic respiratory drive — titrate carefully to target SpO2.",
        "Monitor SpO2, respiratory status and skin under devices."
      ] },
      { h: "Suctioning and airway clearance", p: "Suction removes secretions the patient cannot clear (oropharyngeal, nasopharyngeal or via an artificial airway). Key safety points: use sterile technique for deep/tracheal suction; pre-oxygenate; apply suction only on withdrawal; limit each pass to 10-15 seconds; and allow recovery between passes. Complications include hypoxia, mucosal trauma, bradycardia (vagal stimulation) and infection." },
      { h: "Tracheostomy care", p: "A tracheostomy is a surgical airway opening in the trachea. Nursing care maintains patency and prevents infection: keep humidified oxygen, suction as needed with sterile technique, clean the inner cannula and stoma, change dressings and ties (with two people, holding the tube), and keep a spare tube and obturator plus resuscitation equipment at the bedside. The nurse monitors for bleeding, blockage, tube displacement and signs of respiratory distress." },
      { h: "Normal values / key figures", list: [
        "SpO2 normal: 95-100%; hypoxaemia below 90%.",
        "Nasal cannula: 1-6 L/min (~24-44% oxygen).",
        "Each suction pass: no more than 10-15 seconds.",
        "Simple mask minimum flow: 5 L/min to clear CO2."
      ] },
      { h: "Nursing responsibilities in oxygen therapy", list: [
        "Verify the prescription (flow rate, device, target SpO2) — oxygen is a drug.",
        "Check equipment, humidification and connections before and during use.",
        "Monitor SpO2, respiratory rate, effort, colour and level of consciousness.",
        "Inspect skin behind the ears and over the nose/cheeks for device-related pressure injury.",
        "Provide oral and nasal care to relieve drying from oxygen flow.",
        "Educate the patient and family on oxygen safety at home and reassess response to therapy."
      ] },
      { h: "Clinical relevance", p: "Oxygenation problems can kill within minutes, so early recognition (restlessness, falling SpO2) and correct device selection are lifesaving skills. The degree-level nurse titrates oxygen to target saturations, applies safe suction and tracheostomy technique, and anticipates deterioration rather than reacting late." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Explain the processes of ventilation, diffusion and perfusion in oxygenation.",
      "Describe the assessment of a patient's respiratory/oxygenation status.",
      "Describe the common oxygen delivery devices with their flow rates and delivered concentrations.",
      "State the safety precautions during oxygen therapy.",
      "Describe the procedure and precautions for suctioning and for tracheostomy care."
    ],
    assessment: [
      { type: "mcq", q: "An EARLY sign of hypoxia that is often overlooked is:", options: ["Cyanosis", "Restlessness and confusion", "Bradycardia", "Loss of consciousness"], answer: 1, rationale: "Restlessness/confusion are early hypoxia signs; cyanosis and bradycardia are late." },
      { type: "mcq", q: "A nasal cannula typically delivers oxygen at flow rates of:", options: ["1-6 L/min", "10-15 L/min", "15-20 L/min", "0.5 L/min only"], answer: 0, rationale: "Nasal cannula flows are 1-6 L/min, giving roughly 24-44% oxygen." },
      { type: "mcq", q: "The device that delivers the MOST precise, fixed oxygen concentration, ideal for COPD, is the:", options: ["Nasal cannula", "Simple face mask", "Venturi mask", "Non-rebreather mask"], answer: 2, rationale: "The Venturi mask delivers accurate fixed percentages, useful when precise control is needed." },
      { type: "mcq", q: "Each pass of suctioning should be limited to no more than:", options: ["30-45 seconds", "10-15 seconds", "1 minute", "5 seconds only"], answer: 1, rationale: "Suction passes are kept to 10-15 seconds to avoid hypoxia and trauma." },
      { type: "mcq", q: "Suction should be applied:", options: ["On insertion of the catheter", "Only during withdrawal of the catheter", "Continuously throughout", "Only after removing the catheter"], answer: 1, rationale: "Applying suction only on withdrawal minimises mucosal trauma and hypoxia." },
      { type: "mcq", q: "A key safety rule during oxygen therapy is to:", options: ["Allow smoking nearby", "Use oil-based products freely", "Prohibit smoking and open flames", "Turn the flow to maximum always"], answer: 2, rationale: "Oxygen supports combustion, so smoking and open flames must be prohibited." },
      { type: "mcq", q: "A simple face mask requires a minimum flow of about 5 L/min mainly to:", options: ["Increase comfort", "Flush exhaled carbon dioxide from the mask", "Save oxygen", "Reduce noise"], answer: 1, rationale: "At least 5 L/min prevents rebreathing of exhaled CO2 trapped in the mask." },
      { type: "mcq", q: "High-flow oxygen must be given cautiously to some COPD patients because it can:", options: ["Improve their drive to breathe", "Suppress the hypoxic respiratory drive", "Cure the disease", "Lower the heart rate"], answer: 1, rationale: "In some CO2-retaining COPD patients, high oxygen can reduce the hypoxic drive; titrate to target SpO2." },
      { type: "mcq", q: "Which position best relieves dyspnoea by maximising lung expansion?", options: ["Supine flat", "High Fowler's / orthopnoeic", "Trendelenburg", "Prone flat"], answer: 1, rationale: "Sitting upright (high Fowler's/orthopnoeic) lets the diaphragm and lungs expand fully." },
      { type: "mcq", q: "Bradycardia during deep suctioning is most likely caused by:", options: ["Fever", "Vagal (vasovagal) stimulation", "Dehydration", "Anaemia"], answer: 1, rationale: "Deep suction can stimulate the vagus nerve, causing bradycardia; stop and oxygenate." }
      , { type: "fill", q: "The oxygen delivery device that gives the highest concentration (up to ~95%) is the ____ mask.", accept: ["non-rebreather", "nonrebreather", "non rebreather"], rationale: "The non-rebreather mask delivers the highest oxygen concentration among common devices." },
      { type: "fill", q: "Low oxygen level in the arterial blood, generally an SpO2 below 90%, is called ____.", accept: ["hypoxaemia", "hypoxemia"], rationale: "Hypoxaemia is low blood oxygen; hypoxia is low tissue oxygen." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "fon2-15-fluid-elimination",
    unit: "Unit 4 · Oxygenation, Fluids & Elimination",
    title: "Fluid, Electrolyte & Elimination Needs",
    readMinutes: 27,
    summary: "Body fluid compartments and balance, common fluid and electrolyte imbalances, assessment of hydration and intake-output, and the assessment and nursing management of urinary and bowel elimination, including catheter care and enemas, at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Body fluid compartments", p: "Water makes up about 60% of adult body weight. It is distributed between two main compartments: intracellular fluid (ICF, ~two-thirds of body water) and extracellular fluid (ECF, ~one-third), the latter divided into interstitial fluid and plasma (intravascular). Fluid moves between compartments by osmosis, diffusion, filtration and active transport to maintain balance." },
      { h: "Fluid balance and regulation", p: "Fluid intake (drinking, food, metabolic water) should balance output (urine, faeces, skin, lungs — the last two being 'insensible' losses). Balance is regulated by thirst, the kidneys, antidiuretic hormone (ADH, which conserves water) and aldosterone (which conserves sodium and water). Normal adult urine output is about 0.5-1 mL/kg/hour, and a healthy adult needs roughly 1500-2500 mL of fluid a day." },
      { h: "Major electrolytes and normal ranges", list: [
        "Sodium (Na+) 135-145 mmol/L — main ECF cation; controls fluid balance.",
        "Potassium (K+) 3.5-5.0 mmol/L — main ICF cation; critical for cardiac and muscle function.",
        "Calcium (Ca2+) ~2.1-2.6 mmol/L — bones, clotting, muscle/nerve function.",
        "Magnesium, chloride, phosphate and bicarbonate maintain acid-base and cellular function."
      ] },
      { h: "Fluid volume imbalances", list: [
        "Fluid volume deficit (hypovolaemia/dehydration) — thirst, dry mucosa, poor turgor, tachycardia, hypotension, oliguria, weight loss, raised haematocrit.",
        "Fluid volume excess (hypervolaemia/overload) — oedema, weight gain, raised blood pressure, distended neck veins, crackles, dyspnoea."
      ], figure: {
        caption: "Body fluid compartments: ICF (~2/3) and ECF (~1/3, split into interstitial and plasma).",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Body fluid compartments"><rect x="20" y="15" width="520" height="140" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Body Fluid (~60% of body weight)</text><rect x="45" y="55" width="300" height="80" rx="8" fill="#22C55E" stroke="#0F4C3A"/><text x="195" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Intracellular (ICF)</text><text x="195" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">~ two-thirds</text><rect x="355" y="55" width="160" height="80" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="435" y="82" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Extracellular</text><text x="435" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">interstitial</text><text x="435" y="115" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">+ plasma (~1/3)</text></svg>'
      } },
      { h: "Common electrolyte imbalances", list: [
        "Hyponatraemia / hypernatraemia — confusion, seizures; neurological effects.",
        "Hypokalaemia — muscle weakness, cardiac dysrhythmias, flat T waves.",
        "Hyperkalaemia — dangerous cardiac arrhythmias, peaked T waves (a medical emergency).",
        "Hypocalcaemia — tetany, positive Trousseau/Chvostek signs; hypercalcaemia — weakness, stones."
      ] },
      { h: "Assessment of fluid status", list: [
        "Accurate intake and output (fluid balance) chart.",
        "Daily weight — the most reliable indicator (1 kg ≈ 1 litre of fluid).",
        "Skin turgor, mucous membranes, and presence of oedema.",
        "Vital signs — pulse, blood pressure, postural drop.",
        "Urine volume, colour and specific gravity.",
        "Laboratory electrolytes, urea, haematocrit."
      ] },
      { h: "Urinary elimination — normal and abnormal", p: "Normal adults void about 1500 mL/day in 4-6 voidings; urine is clear, pale-to-amber and aromatic. Abnormalities include oliguria (<400 mL/day), anuria (<100 mL/day), polyuria (excessive), dysuria (painful), frequency, urgency, nocturia, retention (inability to empty) and incontinence (involuntary loss). Assessment covers pattern, symptoms, and urine characteristics." },
      { h: "Nursing management of urinary elimination", list: [
        "Promote normal voiding — privacy, normal position, running water, timely response.",
        "Encourage adequate fluids and perineal hygiene to prevent infection.",
        "Bladder training and pelvic-floor exercises for incontinence.",
        "Catheterisation only when indicated, using strict aseptic technique.",
        "Catheter care — secure the tube, keep the bag below bladder level, maintain a closed system, provide meatal hygiene, and remove as early as possible to prevent CAUTI.",
        "Monitor and record urine output and characteristics."
      ] },
      { h: "Bowel elimination — normal and abnormal", p: "Normal bowel patterns vary widely (from three times a day to three times a week). Common problems are constipation (infrequent, hard, difficult stools), impaction (a hardened mass), diarrhoea (frequent loose stools with risk of fluid/electrolyte loss), incontinence, flatulence and the presence of an ostomy. Stool is assessed for frequency, consistency, colour and abnormal content (blood, mucus)." },
      { h: "Nursing management of bowel elimination", list: [
        "Promote regularity — adequate fibre, fluids, activity and a routine, with privacy.",
        "For constipation — increase fibre/fluid/mobility; use prescribed laxatives or an enema when needed.",
        "Enema — instil fluid into the rectum to soften stool and stimulate evacuation (cleansing, retention or return-flow); position the patient in the left lateral (Sims') position.",
        "For diarrhoea — replace fluids/electrolytes, protect perianal skin, identify the cause.",
        "Ostomy care — protect peristomal skin, empty/change the appliance, and support adaptation.",
        "Record stool frequency, amount and characteristics."
      ] },
      { h: "Normal values / key figures", list: [
        "Body water: ~60% of adult body weight (ICF 2/3, ECF 1/3).",
        "Daily fluid requirement: ~1500-2500 mL; urine output ~1500 mL/day.",
        "Minimum acceptable urine output: 0.5 mL/kg/hour.",
        "Serum sodium 135-145, potassium 3.5-5.0 mmol/L.",
        "1 kg weight change ≈ 1 litre of fluid."
      ] },
      { h: "Clinical relevance", p: "Fluid, electrolyte and elimination balance underpins every organ system; an unnoticed potassium abnormality can cause fatal arrhythmia, and an unnecessary catheter is a leading cause of hospital infection. The degree-level nurse maintains meticulous fluid balance and daily weights, interprets electrolyte results, and manages elimination to prevent CAUTI and preserve dignity." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Describe the body fluid compartments and the mechanisms that regulate fluid balance.",
      "Compare the signs of fluid volume deficit and fluid volume excess.",
      "State the normal ranges of the major electrolytes and the effects of their imbalance.",
      "Describe the nursing management of urinary elimination, including catheter care to prevent infection.",
      "Describe the nursing management of constipation and diarrhoea, including the administration of an enema."
    ],
    assessment: [
      { type: "mcq", q: "Approximately what proportion of the adult body is water?", options: ["20%", "40%", "60%", "90%"], answer: 2, rationale: "Water is about 60% of adult body weight, mostly intracellular." },
      { type: "mcq", q: "The main intracellular cation, critical to cardiac function, is:", options: ["Sodium", "Potassium", "Calcium", "Chloride"], answer: 1, rationale: "Potassium (K+) is the principal intracellular cation; imbalances cause cardiac dysrhythmias." },
      { type: "mcq", q: "The MOST reliable daily indicator of a patient's fluid status is:", options: ["Skin colour", "Daily weight", "Hair condition", "Nail growth"], answer: 1, rationale: "Daily weight is the most reliable indicator; ~1 kg change equals ~1 litre of fluid." },
      { type: "mcq", q: "Poor skin turgor, dry mucosa, tachycardia and oliguria indicate:", options: ["Fluid volume excess", "Fluid volume deficit", "Normal hydration", "Hyperkalaemia"], answer: 1, rationale: "These are classic signs of fluid volume deficit (dehydration/hypovolaemia)." },
      { type: "mcq", q: "The normal serum sodium range is:", options: ["3.5-5.0 mmol/L", "135-145 mmol/L", "2.1-2.6 mmol/L", "95-105 mmol/L"], answer: 1, rationale: "Serum sodium is 135-145 mmol/L; 3.5-5.0 is potassium." },
      { type: "mcq", q: "A urine output of less than 400 mL/day is termed:", options: ["Polyuria", "Oliguria", "Dysuria", "Nocturia"], answer: 1, rationale: "Oliguria is reduced output (<400 mL/day); anuria is <100 mL/day." },
      { type: "mcq", q: "To reduce the risk of catheter-associated urinary tract infection the nurse should:", options: ["Raise the drainage bag above the bladder", "Open the closed system frequently", "Keep the bag below bladder level and maintain a closed system", "Leave the catheter in as long as possible"], answer: 2, rationale: "Keeping the bag below the bladder, a closed system, and early removal prevent CAUTI." },
      { type: "mcq", q: "For administering a cleansing enema, the patient is best positioned in the:", options: ["Supine position", "Left lateral (Sims') position", "High Fowler's position", "Prone position"], answer: 1, rationale: "The left lateral (Sims') position follows the sigmoid colon's curve for enema instillation." },
      { type: "mcq", q: "Peaked T waves and dangerous cardiac arrhythmias are classically caused by:", options: ["Hyponatraemia", "Hyperkalaemia", "Hypocalcaemia", "Fluid excess"], answer: 1, rationale: "Hyperkalaemia produces peaked T waves and life-threatening arrhythmias — a medical emergency." },
      { type: "mcq", q: "The minimum acceptable urine output for an adult is about:", options: ["0.5 mL/kg/hour", "5 mL/kg/hour", "50 mL/day", "10 mL/kg/hour"], answer: 0, rationale: "An output of at least 0.5 mL/kg/hour indicates adequate renal perfusion." }
      , { type: "fill", q: "The fluid compartment inside the cells, holding about two-thirds of body water, is the ____ fluid.", accept: ["intracellular", "intracellular (icf)"], rationale: "Intracellular fluid (ICF) holds roughly two-thirds of total body water." },
      { type: "fill", q: "Difficult, infrequent passage of hard stools is called ____.", accept: ["constipation"], rationale: "Constipation is infrequent, hard, difficult defecation." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "fon2-16-wound-eol-holistic",
    unit: "Unit 4 · Oxygenation, Fluids & Elimination",
    title: "Wound Care, Pressure-Injury Prevention & End-of-Life Care",
    readMinutes: 27,
    summary: "Wound types and healing, principles of wound assessment and dressing, prevention and staging of pressure injuries, and holistic end-of-life care — the dying process, symptom control, psychosocial and spiritual support, and care after death — at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Wounds and their classification", list: [
        "By skin integrity — open (break in skin, e.g. incision, laceration) or closed (e.g. contusion).",
        "By cause — surgical, traumatic, thermal (burns), pressure.",
        "By cleanliness — clean, clean-contaminated, contaminated, infected/dirty.",
        "By depth — superficial, partial-thickness, full-thickness.",
        "By duration — acute (heal in an orderly, timely way) or chronic (delayed healing, e.g. pressure or diabetic ulcers)."
      ] },
      { h: "Phases of wound healing", list: [
        "Haemostasis — immediate vasoconstriction and clot formation.",
        "Inflammatory phase (day 1-4) — redness, swelling, warmth; phagocytes clear debris.",
        "Proliferative phase (day 4-21) — granulation tissue, new vessels, epithelialisation, contraction.",
        "Maturation/remodelling (day 21 onward, up to 1-2 years) — collagen strengthens and the scar matures."
      ], figure: {
        caption: "The four phases of wound healing over time.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wound healing phases"><defs><marker id="wh1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif"><rect x="10" y="50" width="120" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="70" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">Haemostasis</text><text x="70" y="90" text-anchor="middle" font-size="9" fill="#15803D">clot</text><rect x="150" y="50" width="120" height="50" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="210" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">Inflammatory</text><text x="210" y="90" text-anchor="middle" font-size="9" fill="#15803D">day 1-4</text><rect x="290" y="50" width="120" height="50" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="350" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">Proliferative</text><text x="350" y="90" text-anchor="middle" font-size="9" fill="#15803D">day 4-21</text><rect x="430" y="50" width="120" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="490" y="72" text-anchor="middle" font-size="11" font-weight="700" fill="#0F4C3A">Maturation</text><text x="490" y="90" text-anchor="middle" font-size="9" fill="#15803D">21 d - 2 yr</text><line x1="130" y1="75" x2="146" y2="75" stroke="#0F4C3A" stroke-width="2" marker-end="url(#wh1)"/><line x1="270" y1="75" x2="286" y2="75" stroke="#0F4C3A" stroke-width="2" marker-end="url(#wh1)"/><line x1="410" y1="75" x2="426" y2="75" stroke="#0F4C3A" stroke-width="2" marker-end="url(#wh1)"/></g></svg>'
      } },
      { h: "Types of wound healing", list: [
        "Primary intention — clean wound edges approximated (e.g. sutured incision); minimal scar.",
        "Secondary intention — wound left open to heal by granulation (e.g. pressure ulcer); more scarring.",
        "Tertiary (delayed primary) intention — wound left open then closed later, e.g. after infection clears."
      ] },
      { h: "Wound assessment", p: "The nurse assesses location, size (length x width x depth), the wound bed (granulating red, sloughy yellow, necrotic black), exudate (amount, colour, odour), the wound edges and surrounding skin, and signs of infection — increasing pain, erythema, warmth, swelling, purulent discharge, odour and fever. Factors delaying healing include poor nutrition, ageing, diabetes, poor perfusion, infection, smoking and some medications (steroids)." },
      { h: "Principles of wound dressing", list: [
        "Use aseptic (sterile) technique to prevent infection.",
        "Clean from the least to the most contaminated area (centre outward for a clean wound).",
        "Choose the dressing for the wound — dry dressing for a clean, closed wound; a moist wound-healing environment for open/granulating wounds.",
        "Wet-to-dry/wet dressings for debridement or open wounds as prescribed.",
        "Assess and document the wound at each change; secure the dressing comfortably.",
        "Manage pain and maintain the patient's dignity."
      ] },
      { h: "Pressure injuries — definition and causes", p: "A pressure injury (pressure ulcer/bedsore) is localised damage to skin and underlying tissue, usually over a bony prominence, from sustained pressure, or pressure combined with shear and friction. Contributing factors include immobility, moisture (incontinence, sweat), poor nutrition, impaired sensation, poor perfusion and advanced age. Common sites are the sacrum, heels, hips, elbows and occiput." },
      { h: "Staging of pressure injuries", list: [
        "Stage 1 — intact skin with non-blanchable redness.",
        "Stage 2 — partial-thickness loss; a shallow open ulcer or blister.",
        "Stage 3 — full-thickness loss; subcutaneous fat may be visible, no bone/tendon exposed.",
        "Stage 4 — full-thickness loss with exposed bone, tendon or muscle.",
        "Unstageable — base obscured by slough/eschar; Deep tissue injury — persistent non-blanchable deep red/purple discolouration."
      ] },
      { h: "Prevention of pressure injuries", list: [
        "Use a risk-assessment tool (e.g. Braden or Waterlow scale) on admission and regularly.",
        "Reposition at least every 2 hours; use the 30-degree tilt and offload heels.",
        "Use pressure-redistributing mattresses and cushions.",
        "Keep skin clean and dry; manage incontinence and moisture promptly.",
        "Optimise nutrition and hydration (protein, vitamin C, zinc).",
        "Inspect the skin over bony prominences at each repositioning; never massage a reddened area."
      ] },
      { h: "The dying process and palliative care", p: "Palliative care relieves suffering and improves quality of life for people with life-limiting illness, addressing physical, psychological, social and spiritual needs. As death approaches, physical signs appear: decreasing consciousness, cool mottled extremities, weak thready pulse, falling blood pressure, irregular breathing (Cheyne-Stokes), noisy respirations ('death rattle') from pooled secretions, reduced intake and output, and loss of sphincter control. Care shifts from cure to comfort." },
      { h: "Holistic end-of-life nursing care", list: [
        "Symptom control — pain, dyspnoea, nausea, secretions, agitation; regular analgesia.",
        "Physical comfort — positioning, mouth and skin care, gentle repositioning.",
        "Psychological support — presence, honest compassionate communication, addressing fear.",
        "Recognise Kubler-Ross stages of grief: denial, anger, bargaining, depression, acceptance.",
        "Spiritual and cultural support — respect beliefs, rituals and the wish for clergy.",
        "Family support — involve, inform and comfort the family; allow presence and privacy."
      ] },
      { h: "Care after death", p: "After death is confirmed, the nurse provides dignified last offices: performs hand hygiene and standard precautions, straightens the body in a natural position before rigor mortis, closes the eyes and mouth, removes tubes as per policy, cleans the body, applies identification, and handles the body respecting the family's cultural and religious wishes. Documentation, notification of relatives, and support for the grieving family are completed with sensitivity." },
      { h: "Clinical relevance", p: "Wound care and pressure-injury prevention protect skin integrity and prevent life-threatening infection, while skilled end-of-life care ensures a dignified, comfortable death. The degree-level nurse assesses wounds systematically, prevents pressure injury proactively with risk tools, and delivers holistic, culturally sensitive palliative care that honours the whole person and their family." }
    ],
    references: REF_FON2,
    examQuestions: [
      "Classify wounds and describe the four phases of wound healing.",
      "Differentiate healing by primary, secondary and tertiary intention.",
      "Describe the staging of pressure injuries and the measures used to prevent them.",
      "Describe the assessment of a wound and the principles of aseptic dressing.",
      "Discuss the holistic nursing care of a dying patient, including care after death."
    ],
    assessment: [
      { type: "mcq", q: "A clean surgical incision with edges brought together and sutured heals by:", options: ["Secondary intention", "Primary intention", "Tertiary intention", "It does not heal"], answer: 1, rationale: "Approximated wound edges heal by primary intention with minimal scarring." },
      { type: "mcq", q: "The phase of wound healing in which granulation tissue forms (day 4-21) is the:", options: ["Haemostasis phase", "Inflammatory phase", "Proliferative phase", "Maturation phase"], answer: 2, rationale: "The proliferative phase builds granulation tissue, new vessels and epithelium." },
      { type: "mcq", q: "Intact skin with an area of non-blanchable redness is a pressure injury of:", options: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"], answer: 0, rationale: "Stage 1 is intact skin with non-blanchable erythema." },
      { type: "mcq", q: "A pressure injury with exposed bone, tendon or muscle is:", options: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"], answer: 3, rationale: "Stage 4 is full-thickness loss with exposed bone, tendon or muscle." },
      { type: "mcq", q: "The MOST important nursing measure to prevent pressure injuries in an immobile patient is:", options: ["Massaging reddened areas vigorously", "Repositioning at least every 2 hours", "Keeping the patient supine at all times", "Restricting fluids"], answer: 1, rationale: "Frequent repositioning relieves sustained pressure; reddened areas must NOT be massaged." },
      { type: "mcq", q: "Which is a recognised pressure-injury risk-assessment tool?", options: ["Glasgow Coma Scale", "Braden scale", "Snellen chart", "Apgar score"], answer: 1, rationale: "The Braden (and Waterlow) scale assesses pressure-injury risk." },
      { type: "mcq", q: "When cleaning a clean wound, the nurse wipes:", options: ["From the outer edge inward", "From the centre (cleanest) outward", "Randomly", "Only with dry gauze"], answer: 1, rationale: "Cleaning from the least contaminated centre outward avoids introducing organisms into the wound." },
      { type: "mcq", q: "Noisy, gurgling respirations from pooled secretions in a dying patient are commonly called:", options: ["Stridor", "The death rattle", "Wheeze", "Kussmaul breathing"], answer: 1, rationale: "The 'death rattle' is noisy breathing from secretions the dying patient cannot clear." },
      { type: "mcq", q: "In Kubler-Ross's stages of grief, the FIRST typical reaction is:", options: ["Acceptance", "Bargaining", "Denial", "Depression"], answer: 2, rationale: "Kubler-Ross described denial, anger, bargaining, depression, then acceptance." },
      { type: "mcq", q: "A priority of last offices (care after death) is to:", options: ["Delay all care for 24 hours", "Straighten the body naturally before rigor mortis and respect cultural wishes", "Massage the limbs", "Leave all tubes in place regardless of policy"], answer: 1, rationale: "Positioning the body before rigor mortis and honouring cultural/religious wishes are key to dignified after-death care." }
      , { type: "fill", q: "A wound left open to heal by granulation from its base, such as a pressure ulcer, heals by ____ intention.", accept: ["secondary"], rationale: "Open wounds granulating from the base heal by secondary intention." },
      { type: "fill", q: "Localised skin/tissue damage over a bony prominence caused by sustained pressure is a ____ injury (or ulcer).", accept: ["pressure"], rationale: "A pressure injury/ulcer results from sustained pressure over bony prominences." }
    ]
  }
];
