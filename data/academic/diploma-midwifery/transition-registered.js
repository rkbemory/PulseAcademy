/* ============================================================
   Diploma in Midwifery · DM333 Transition to Registered
   Midwifery Practice — 12 topics. Aligned to the BNMC
   Diploma in Midwifery syllabus (ICM standard), Year 3:
   professional transition, portfolio & reflection, ICM/BNMC
   competencies, legal & regulatory framework, accountability
   & code of conduct, the profession nationally & globally,
   leadership, conflict, advocacy, teaching/EBP/governance,
   and CPD & preparation for the National registration exam.
   Grounded in standard texts:
     • International Confederation of Midwives (ICM). Essential
       Competencies for Midwifery Practice & Global Standards.
     • Marshall JE, Raynor MD. Myles Professional Studies for
       Midwifery Education and Practice. Elsevier.
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_TRM = [
  "International Confederation of Midwives (ICM). Essential Competencies for Midwifery Practice & Global Standards.",
  "Marshall JE, Raynor MD. Myles Professional Studies for Midwifery Education and Practice. Elsevier.",
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier."
];

window.Academic.topics["diploma-midwifery/transition-registered"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "trm-01-preparing-transition",
    unit: "Unit 1 · Becoming a Registered Midwife",
    title: "Preparing for the Transition from Student to Registered Midwife",
    readMinutes: 16,
    summary: "What the transition from student to autonomous registered midwife means, the 'transition shock' experienced by newly qualified midwives, how to prepare knowledge, skills and confidence, the move from supervised to accountable practice, and strategies (preceptorship, support, self-care) that ease a safe transition.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What 'transition' means", p: "Transition is the planned process by which a final-year student integrates all previous learning and moves from being a supervised learner to a registered midwife who is personally accountable for the care she gives. It is both a change in role (from student to qualified professional) and a change in identity (from 'learner' to 'midwife'). The DM333 course exists to make this move deliberate, supported and safe rather than sudden." },
      { h: "From supervised learner to accountable practitioner", list: [
        "As a student, a mentor holds ultimate responsibility for the woman's care; the student practises under supervision.",
        "On registration the midwife carries her own professional accountability for decisions and omissions within her scope of practice.",
        "Autonomy increases: the registered midwife can lead care for normal pregnancy, labour, birth and the puerperium.",
        "The duty to recognise the limits of competence, to seek help and to refer becomes a personal legal and professional obligation."
      ] },
      { h: "Transition shock in newly qualified midwives", p: "Many newly qualified midwives experience 'transition shock' — the gap between the expectations built during training and the reality of full responsibility, workload, shift patterns and decision-making. It can bring reduced confidence, self-doubt and stress in the first months. Recognising this as a normal, well-described phenomenon (not personal failure) helps the new midwife seek support rather than leave the profession." },
      { h: "Preparing knowledge and clinical skills", list: [
        "Consolidate normal antenatal, intrapartum and postnatal care and newborn care.",
        "Revise recognition and initial management of obstetric and neonatal emergencies (e.g. haemorrhage, eclampsia, shoulder dystocia, neonatal resuscitation).",
        "Rehearse drug calculations, record-keeping and infection-prevention routines.",
        "Practise clear, respectful communication with women, families and the multidisciplinary team."
      ] },
      { h: "Building confidence and professional identity", p: "Confidence grows through deliberate practice, honest reflection and constructive feedback, not by waiting until one feels 'ready'. Developing a professional identity means owning the values of the midwifery profession — partnership with women, respect, evidence-based practice and accountability — and beginning to describe oneself, and act, as a midwife." },
      { h: "Strategies that ease a safe transition", list: [
        "Preceptorship / structured support in the first period of employment.",
        "A named supervisor, mentor or 'buddy' to consult and debrief with.",
        "Realistic, gradual increase in caseload and responsibility.",
        "Reflective practice and use of a professional portfolio to track growth.",
        "Self-care: adequate rest, peer support and early help-seeking to prevent burnout."
      ] },
      { h: "The midwife's scope and the duty to refer", p: "The registered midwife is the expert in normal childbearing but must recognise deviations from normal and refer promptly to an obstetrician, neonatologist or other professional. Safe transition means being clear, from day one, about what falls within the midwife's scope and when consultation and referral are required — this protects both the woman and the newly qualified midwife.", figure: {
        caption: "The transition pathway: from supervised student, through consolidation and preceptorship, to an accountable registered midwife.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Transition pathway from student to registered midwife."><defs><marker id="trmArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="60" width="150" height="60" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="90" y="86" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">STUDENT</text><text x="90" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">supervised learner</text><rect x="205" y="60" width="150" height="60" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="82" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">TRANSITION</text><text x="280" y="99" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">consolidate +</text><text x="280" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">preceptorship</text><rect x="395" y="60" width="150" height="60" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="470" y="82" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">REGISTERED</text><text x="470" y="99" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">MIDWIFE</text><text x="470" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">accountable</text><line x1="165" y1="90" x2="201" y2="90" stroke="#831843" stroke-width="2.5" marker-end="url(#trmArr1)"/><line x1="355" y1="90" x2="391" y2="90" stroke="#831843" stroke-width="2.5" marker-end="url(#trmArr1)"/></svg>'
      } }
    ],
    references: REF_TRM,
    examQuestions: [
      "Define the transition from student to registered midwife and explain why it is a planned process.",
      "Describe 'transition shock' and outline strategies that help a newly qualified midwife cope.",
      "Explain how accountability changes when a student becomes a registered midwife.",
      "Discuss the role of preceptorship and support in a safe transition to practice.",
      "Why is it essential for a newly qualified midwife to be clear about her scope of practice and duty to refer?"
    ],
    assessment: [
      { type: "mcq", q: "The MAIN aim of the transition course is to help the student:", options: ["Avoid ever working with doctors", "Move safely from a supervised learner to an accountable registered midwife", "Skip the National registration examination", "Reduce contact with childbearing women"], answer: 1, rationale: "Transition is the planned move from supervised student to an autonomous, accountable registered midwife." },
      { type: "mcq", q: "'Transition shock' in a newly qualified midwife is BEST described as:", options: ["A physical illness caused by night duty", "The normal gap between training expectations and the reality of full responsibility", "A permanent loss of clinical skill", "A disciplinary offence"], answer: 1, rationale: "Transition shock is the well-described gap between expectations and the reality of accountable practice, not a failing or an illness." },
      { type: "mcq", q: "As a student, ultimate responsibility for the woman's care lies with:", options: ["The student herself", "The woman", "The supervising mentor / registered midwife", "The hospital cleaner"], answer: 2, rationale: "Students practise under supervision; the registered mentor holds ultimate responsibility until the student qualifies." },
      { type: "mcq", q: "Which strategy MOST directly eases the first months of registered practice?", options: ["Working alone with no support", "A structured preceptorship with a named supporter", "Taking the largest possible caseload immediately", "Avoiding all reflection"], answer: 1, rationale: "Preceptorship with a named supporter provides guided, gradual support during the vulnerable early period." },
      { type: "mcq", q: "The registered midwife is regarded as the expert in:", options: ["Complex neonatal surgery", "Normal pregnancy, labour, birth and the puerperium", "Anaesthesia", "Radiology reporting"], answer: 1, rationale: "The midwife's core scope is normal childbearing; deviations require consultation and referral." },
      { type: "mcq", q: "Confidence in a new midwife is BEST built by:", options: ["Waiting until she feels completely ready", "Deliberate practice, reflection and constructive feedback", "Never asking for help", "Copying others without understanding"], answer: 1, rationale: "Confidence grows through practice, reflection and feedback rather than by waiting passively." },
      { type: "mcq", q: "On registration, the midwife's duty to refer deviations from normal becomes:", options: ["Optional", "A personal professional and legal obligation", "The doctor's responsibility only", "Unnecessary"], answer: 1, rationale: "After registration the midwife is personally accountable for recognising and referring deviations from normal." },
      { type: "mcq", q: "Developing a professional identity as a midwife mainly involves:", options: ["Wearing a uniform only", "Owning the values of partnership, respect, evidence and accountability", "Avoiding women in labour", "Memorising the syllabus word for word"], answer: 1, rationale: "Professional identity means internalising and acting on the profession's core values." },
      { type: "mcq", q: "Which of the following is a self-care strategy that helps prevent burnout in transition?", options: ["Skipping rest and breaks", "Adequate rest, peer support and early help-seeking", "Ignoring stress until it becomes severe", "Refusing all feedback"], answer: 1, rationale: "Rest, peer support and early help-seeking protect wellbeing and support a safe transition." },
      { type: "mcq", q: "A key difference between the student and the registered midwife is that the registered midwife:", options: ["Never makes decisions", "Carries personal accountability for her decisions and omissions", "Has no scope of practice", "Cannot lead normal births"], answer: 1, rationale: "Registration brings personal accountability for decisions and omissions within scope of practice." }
      , { type: "fill", q: "The planned move from supervised learner to an accountable registered midwife is called the ____.", accept: ["transition", "transition to practice"], rationale: "Transition is the deliberate, supported move into accountable practice." }
      , { type: "fill", q: "Structured support given to a newly qualified midwife in her first period of employment is called ____.", accept: ["preceptorship", "a preceptorship"], rationale: "Preceptorship provides guided support during early registered practice." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "trm-02-portfolio-reflection",
    unit: "Unit 1 · Becoming a Registered Midwife",
    title: "Developing a Professional Midwifery Portfolio & Reflective Practice",
    readMinutes: 17,
    summary: "What a professional portfolio is and why the BNMC requires one, the contents and structure of a midwifery portfolio, exemplars and evidence of competence, the meaning and value of reflective practice, common reflective models (Gibbs, Borton), and how reflection improves care and demonstrates fitness to practise.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a professional portfolio?", p: "A professional portfolio is an organised collection of evidence that shows a midwife has met, and continues to meet, the competencies required for registration and practice. It is a living document: it grows across the career and is used for registration, appraisal and continuing professional development (CPD). The BNMC requires students to build a practice portfolio demonstrating that they meet the BNMC and ICM competencies for practice." },
      { h: "Purposes of the portfolio", list: [
        "Demonstrates achievement of the BNMC and ICM competencies for practice.",
        "Provides evidence of continuing competence and CPD for re-registration.",
        "Supports appraisal, feedback and personal development planning.",
        "Encourages ownership of learning and reflective, evidence-based practice.",
        "Serves as a professional record that can be shown to employers and the regulator."
      ] },
      { h: "Contents of a midwifery portfolio", list: [
        "Personal and professional profile (qualifications, registration details).",
        "A statement of the midwife's personal philosophy of midwifery.",
        "Records of clinical experience and numbers (e.g. births attended, procedures).",
        "Exemplars: worked examples showing how a competency was met in real care.",
        "Reflective accounts / reflective journal entries.",
        "Feedback, appraisals and testimonies from mentors and women.",
        "Evidence of CPD — courses, study days, reading and skills updates.",
        "A personal development plan (PDP) with future learning goals."
      ] },
      { h: "Exemplars and evidence of competence", p: "An exemplar is a documented example of practice that shows how the midwife met a specific competency — for example, a description of assessing and supporting a woman in normal labour, with the underpinning reasoning and evidence. Good evidence is authentic (the midwife's own work), current, relevant to the competency, and sufficient in quantity to be convincing. Confidentiality must be protected: women are never identifiable in a portfolio." },
      { h: "What is reflective practice?", p: "Reflective practice is the deliberate process of thinking critically about an experience in order to learn from it and improve future care. It turns everyday experience into learning by asking what happened, why, how it felt, what was done well, what could be better, and what will change. Reflection is central to lifelong learning and to demonstrating fitness to practise." },
      { h: "Models of reflection", list: [
        "Gibbs' Reflective Cycle — Description → Feelings → Evaluation → Analysis → Conclusion → Action plan.",
        "Borton / Rolfe framework — the three simple questions: 'What? So what? Now what?'.",
        "Both models move from describing an event to analysing it and planning change; the model is a scaffold, not a rule."
      ], figure: {
        caption: "Gibbs' reflective cycle — a common scaffold for structured reflective writing in a portfolio.",
        svg: '<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gibbs reflective cycle stages."><circle cx="210" cy="150" r="120" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><circle cx="210" cy="30" r="34" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="210" y="34" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Description</text><circle cx="314" cy="90" r="34" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="314" y="94" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Feelings</text><circle cx="314" cy="210" r="34" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="314" y="214" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Evaluation</text><circle cx="210" cy="270" r="34" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="210" y="274" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Analysis</text><circle cx="106" cy="210" r="34" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="106" y="207" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Conclu-</text><text x="106" y="221" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">sion</text><circle cx="106" cy="90" r="34" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="106" y="87" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Action</text><text x="106" y="101" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">plan</text></svg>'
      } },
      { h: "How reflection improves midwifery care", list: [
        "Identifies learning needs and closes gaps in knowledge and skill.",
        "Turns emotionally difficult events (e.g. an emergency) into safe learning.",
        "Supports evidence-based, woman-centred decisions.",
        "Builds self-awareness, resilience and professional accountability.",
        "Provides written reflective accounts that are strong portfolio evidence."
      ] }
    ],
    references: REF_TRM,
    examQuestions: [
      "Define a professional portfolio and explain why the BNMC requires midwives to keep one.",
      "List and describe the main contents of a midwifery portfolio.",
      "What is an exemplar? Explain the qualities of good portfolio evidence.",
      "Describe Gibbs' reflective cycle and explain how it can be used in a reflective account.",
      "Discuss how reflective practice improves the quality of midwifery care."
    ],
    assessment: [
      { type: "mcq", q: "A professional portfolio is BEST described as:", options: ["An organised collection of evidence that a midwife meets the required competencies", "A textbook", "A patient's medical record", "A list of hospital rules"], answer: 0, rationale: "A portfolio is an organised, evolving collection of evidence of competence and CPD." },
      { type: "mcq", q: "The BNMC requires the student to build a practice portfolio that shows she meets the:", options: ["Salary scale", "BNMC and ICM competencies for practice", "Hospital menu", "Bus timetable"], answer: 1, rationale: "The syllabus requires a portfolio demonstrating the BNMC and ICM competencies for practice." },
      { type: "mcq", q: "In a portfolio, an 'exemplar' is:", options: ["A blank page", "A photograph of the woman", "A documented example of practice showing how a competency was met", "A copy of a drug chart"], answer: 2, rationale: "An exemplar is a worked example demonstrating achievement of a specific competency." },
      { type: "mcq", q: "Which is a quality of GOOD portfolio evidence?", options: ["It identifies the woman by name", "It is authentic, current, relevant and sufficient", "It is copied from a classmate", "It is many years out of date"], answer: 1, rationale: "Good evidence is the midwife's own, current, relevant and sufficient — and always protects confidentiality." },
      { type: "mcq", q: "Reflective practice is MAINLY about:", options: ["Blaming others for mistakes", "Thinking critically about experience in order to learn and improve care", "Forgetting difficult events", "Repeating tasks without thought"], answer: 1, rationale: "Reflection is deliberate critical thinking about experience to improve future practice." },
      { type: "mcq", q: "The correct order of Gibbs' reflective cycle begins with:", options: ["Action plan → Description", "Description → Feelings → Evaluation → Analysis → Conclusion → Action plan", "Analysis → Feelings", "Conclusion → Description"], answer: 1, rationale: "Gibbs' cycle runs Description, Feelings, Evaluation, Analysis, Conclusion, Action plan." },
      { type: "mcq", q: "The Borton/Rolfe reflective framework uses the three questions:", options: ["Who? Where? When?", "What? So what? Now what?", "Why? Why not? Whatever?", "How much? How many? How long?"], answer: 1, rationale: "The Borton/Rolfe model uses 'What? So what? Now what?' to structure reflection." },
      { type: "mcq", q: "A portfolio must ALWAYS protect the woman's:", options: ["Address only", "Handwriting", "Blood group", "Confidentiality — she must not be identifiable"], answer: 3, rationale: "Confidentiality is essential; women must never be identifiable in a portfolio." },
      { type: "mcq", q: "A personal development plan (PDP) in a portfolio sets out:", options: ["Past salaries", "Future learning goals and how they will be met", "The ward duty roster", "A shopping list"], answer: 1, rationale: "A PDP records the midwife's future learning goals and the plan to achieve them." },
      { type: "mcq", q: "Reflection is valuable after an emergency mainly because it:", options: ["Hides what happened", "Turns a difficult event into safe learning and improvement", "Punishes the midwife", "Replaces clinical training"], answer: 1, rationale: "Structured reflection converts stressful events into learning that improves future care." }
      , { type: "fill", q: "A documented example of practice that shows how a competency was met is called an ____.", accept: ["exemplar", "example"], rationale: "An exemplar is a worked example demonstrating a competency." }
      , { type: "fill", q: "The reflective model with the stages Description, Feelings, Evaluation, Analysis, Conclusion and Action plan is ____'s cycle.", accept: ["gibbs", "gibb"], rationale: "This is Gibbs' reflective cycle." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "trm-03-icm-competencies",
    unit: "Unit 2 · Competencies & Registration",
    title: "The ICM Essential Competencies for Midwifery Practice",
    readMinutes: 17,
    summary: "What the ICM is and why global standards matter, the meaning of competency, the structure of the ICM Essential Competencies (general competencies plus care across pregnancy, labour and birth, and postnatal/newborn care), the knowledge-skill-behaviour components, and how the competencies define the midwife's scope and shape training and registration.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The International Confederation of Midwives (ICM)", p: "The International Confederation of Midwives (ICM) is the global body that represents midwives and midwives' associations worldwide. It sets internationally agreed standards for midwifery education, regulation and practice so that midwives everywhere provide safe, high-quality, respectful care. Bangladesh aligns its midwifery training and competencies with the ICM standard." },
      { h: "What is a competency?", p: "A competency is the combination of knowledge, skills and professional behaviour that a midwife must possess to practise safely and effectively. It is not knowledge alone: a competent midwife knows the evidence, can perform the skill, and behaves professionally (safely, ethically, in partnership with the woman). Competence must be demonstrated in real practice, not merely claimed." },
      { h: "Structure of the ICM Essential Competencies", p: "The ICM Essential Competencies are organised into broad categories that map onto the childbearing journey.", list: [
        "General competencies — professional accountability, scope of practice, ethical and evidence-based care that apply across all midwifery.",
        "Pre-pregnancy and antenatal care — assessment, health promotion and detection of complications in pregnancy.",
        "Care during labour and birth — competent care of normal labour, safe birth and initial management of emergencies.",
        "Ongoing care of women and newborns — postnatal care, newborn care, breastfeeding support and family planning."
      ] },
      { h: "Knowledge, skills and behaviours", p: "Each ICM competency is expressed through three linked components: the knowledge that underpins it, the skills or activities that demonstrate it, and the professional behaviours that must accompany it. For example, managing the third stage of labour requires knowledge of physiology and haemorrhage, the skill of active management, and behaviours such as communication, consent and record-keeping.", figure: {
        caption: "A competency is the integration of knowledge, skills and professional behaviour demonstrated in practice.",
        svg: '<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Competency as knowledge, skills and behaviour."><rect x="20" y="70" width="120" height="70" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="80" y="100" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">KNOWLEDGE</text><text x="80" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">knows why</text><rect x="170" y="70" width="120" height="70" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="230" y="100" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">SKILLS</text><text x="230" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">can do</text><rect x="320" y="70" width="120" height="70" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="380" y="100" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">BEHAVIOUR</text><text x="380" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">acts well</text><text x="230" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">COMPETENCY</text><text x="230" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">demonstrated in real practice</text></svg>'
      } },
      { h: "Why the ICM competencies matter", list: [
        "They define the minimum safe scope of the midwife worldwide.",
        "They set the standard that midwifery education must produce.",
        "They form the basis for national regulation and registration (including BNMC).",
        "They protect women by ensuring midwives everywhere meet an agreed standard.",
        "They support the midwife's autonomy by clearly stating what she is competent to do."
      ] },
      { h: "Competencies and scope of practice", p: "The competencies mark the boundary of what a midwife is trained and authorised to do. Within scope (normal childbearing) she practises autonomously; beyond scope (complications and disease) she consults and refers. Knowing the competencies therefore also means knowing the limits of one's practice and the duty to seek help." },
      { h: "Using the competencies in the portfolio", p: "Because registration requires proof of competence, students map their portfolio evidence and exemplars to the ICM (and BNMC) competencies. This makes the abstract competencies concrete — each is backed by real, reflective examples of care the student has given." }
    ],
    references: REF_TRM,
    examQuestions: [
      "What is the ICM and why are internationally agreed midwifery standards important?",
      "Define competency and explain its three components with a midwifery example.",
      "Describe the main categories of the ICM Essential Competencies for midwifery practice.",
      "Explain how the ICM competencies define the midwife's scope of practice and duty to refer.",
      "Discuss how a student maps portfolio evidence to the ICM competencies."
    ],
    assessment: [
      { type: "mcq", q: "ICM stands for the International Confederation of:", options: ["Medicine", "Midwives", "Managers", "Ministries"], answer: 1, rationale: "ICM is the International Confederation of Midwives, the global body for the profession." },
      { type: "mcq", q: "A competency is BEST defined as the combination of:", options: ["Knowledge only", "Knowledge, skills and professional behaviour", "Speed and strength", "Age and experience only"], answer: 1, rationale: "Competency integrates knowledge, skills and professional behaviour demonstrated in practice." },
      { type: "mcq", q: "Which is a GENERAL ICM competency that applies across all midwifery?", options: ["Performing caesarean section", "Professional accountability and ethical, evidence-based care", "Administering anaesthesia", "Interpreting CT scans"], answer: 1, rationale: "General competencies cover accountability, ethics, scope and evidence-based care across all practice." },
      { type: "mcq", q: "The ICM competencies are important because they:", options: ["Set the minimum safe scope of the midwife worldwide", "Increase paperwork only", "Replace clinical judgement", "Are optional guidelines with no effect on registration"], answer: 0, rationale: "The competencies define the agreed minimum safe scope and underpin education and registration." },
      { type: "mcq", q: "Within her scope of practice (normal childbearing), the midwife:", options: ["Must always ask a doctor's permission", "Practises autonomously", "Cannot make any decision", "Is not accountable"], answer: 1, rationale: "For normal childbearing the midwife practises autonomously within her competencies." },
      { type: "mcq", q: "Managing the third stage of labour illustrates a competency because it requires:", options: ["Knowledge, skill and professional behaviour together", "Knowledge alone", "A single button press", "No communication"], answer: 0, rationale: "It needs underpinning knowledge, the practical skill, and behaviours such as consent and record-keeping." },
      { type: "mcq", q: "Beyond her scope (complications and disease), the midwife should:", options: ["Continue alone regardless", "Consult and refer to the appropriate professional", "Ignore the problem", "Discharge the woman"], answer: 1, rationale: "Deviations from normal require consultation and referral to the appropriate professional." },
      { type: "mcq", q: "Bangladesh midwifery training is aligned with the standard set by:", options: ["The World Bank", "The ICM", "A private company", "The local bus company"], answer: 1, rationale: "Bangladesh aligns its midwifery competencies and training with the ICM standard." },
      { type: "mcq", q: "In a portfolio, ICM competencies are made concrete by:", options: ["Leaving them blank", "Mapping real reflective exemplars of care to each competency", "Copying the syllabus", "Listing salaries"], answer: 1, rationale: "Students back each competency with authentic reflective exemplars of care given." },
      { type: "mcq", q: "Competence must be:", options: ["Merely claimed on paper", "Demonstrated in real practice", "Assumed after one lecture", "Bought"], answer: 1, rationale: "Competence must be shown in actual practice, not simply asserted." }
      , { type: "fill", q: "The global body that sets standards for midwifery education, regulation and practice is the ____.", accept: ["icm", "international confederation of midwives"], rationale: "The ICM sets global midwifery standards." }
      , { type: "fill", q: "A competency integrates knowledge, ____ and professional behaviour.", accept: ["skills", "skill"], rationale: "The three components are knowledge, skills and behaviour." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "trm-04-bnmc-registration-route",
    unit: "Unit 2 · Competencies & Registration",
    title: "BNMC & ICM Competencies for Registration & the Licensing Route",
    readMinutes: 16,
    summary: "The role of the Bangladesh Nursing and Midwifery Council (BNMC), how the BNMC competencies align with the ICM standard, the requirements for registration as a midwife, the licensing route (approved education, portfolio, National examination and registration), what a licence permits, and the ongoing requirement to renew registration.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The Bangladesh Nursing and Midwifery Council (BNMC)", p: "The BNMC is the national regulatory body responsible for the standards of nursing and midwifery education, practice and conduct in Bangladesh. It approves training institutions and curricula, sets the competencies for practice, conducts or oversees the registration/licensing examination, maintains the register of qualified midwives, and takes action on professional misconduct. Its purpose is to protect the public by ensuring only competent, fit practitioners are registered." },
      { h: "How BNMC and ICM competencies align", p: "The BNMC competencies for midwifery practice are built on the ICM Essential Competencies. This means a midwife registered in Bangladesh is expected to meet a globally recognised standard, adapted to the country's health needs and context (for example, the burden of maternal and neonatal conditions, cultural practices and the referral system)." },
      { h: "Requirements for registration as a midwife", list: [
        "Successful completion of an approved (BNMC-accredited) midwifery education programme.",
        "A practice portfolio demonstrating the BNMC and ICM competencies, including exemplars.",
        "The required clinical practice hours and experience across the childbearing continuum.",
        "Passing the National registration/licensing examination.",
        "Being of good character and fit to practise (no disqualifying conduct)."
      ] },
      { h: "The licensing route step by step", p: "Registration follows a clear pathway from education to a licence to practise.", figure: {
        caption: "The route to registration: approved education, competency portfolio, National examination, then registration and a licence to practise.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Route to midwifery registration."><defs><marker id="trmArr4" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="30" width="150" height="52" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="90" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Approved</text><text x="90" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">education</text><rect x="205" y="30" width="150" height="52" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Competency</text><text x="280" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">portfolio</text><rect x="395" y="30" width="150" height="52" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="470" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">National</text><text x="470" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">examination</text><rect x="205" y="135" width="150" height="52" rx="9" fill="#FCE7F3" stroke="#15803D" stroke-width="2"/><text x="280" y="157" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Registration</text><text x="280" y="173" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">licence to practise</text><line x1="165" y1="56" x2="201" y2="56" stroke="#831843" stroke-width="2.5" marker-end="url(#trmArr4)"/><line x1="355" y1="56" x2="391" y2="56" stroke="#831843" stroke-width="2.5" marker-end="url(#trmArr4)"/><line x1="470" y1="82" x2="470" y2="110" stroke="#831843" stroke-width="2.5"/><line x1="470" y1="110" x2="284" y2="110" stroke="#831843" stroke-width="2.5"/><line x1="280" y1="110" x2="280" y2="131" stroke="#831843" stroke-width="2.5" marker-end="url(#trmArr4)"/></svg>'
      } },
      { h: "The National registration/licensing examination", p: "The National examination is the final gateway to registration. It confirms that the graduate has the knowledge, judgement and skills to practise safely. Learning from all previous courses is synthesised in DM333 in readiness for this examination; it may include written, oral and practical/clinical components." },
      { h: "What registration (a licence) permits", list: [
        "Legal authority to use the protected title 'midwife'.",
        "Authority to practise the full midwifery scope for normal childbearing.",
        "Entry on the BNMC register, visible to employers and the public.",
        "The corresponding duties of accountability, competence and adherence to the code of conduct."
      ] },
      { h: "Maintaining and renewing registration", p: "Registration is not permanent. The midwife must maintain fitness to practise, complete continuing professional development, and renew her registration according to BNMC requirements. Serious misconduct or lack of competence can lead to conditions, suspension or removal from the register." }
    ],
    references: REF_TRM,
    examQuestions: [
      "Describe the role and functions of the Bangladesh Nursing and Midwifery Council (BNMC).",
      "Explain how the BNMC competencies align with the ICM Essential Competencies.",
      "List the requirements a graduate must meet to be registered as a midwife.",
      "Describe the licensing route from approved education to a licence to practise.",
      "Explain what registration permits and why it must be maintained and renewed."
    ],
    assessment: [
      { type: "mcq", q: "The national body that regulates midwifery education and practice in Bangladesh is the:", options: ["ICM", "WHO", "BNMC", "UN"], answer: 2, rationale: "The BNMC is Bangladesh's national nursing and midwifery regulator." },
      { type: "mcq", q: "The main purpose of the BNMC is to:", options: ["Sell textbooks", "Protect the public by registering only competent, fit practitioners", "Employ all midwives directly", "Set hospital fees"], answer: 1, rationale: "Regulation exists chiefly to protect the public through standards and registration." },
      { type: "mcq", q: "The BNMC competencies for midwifery practice are built on the:", options: ["ICM Essential Competencies", "Local newspaper", "Hospital menu", "Bus schedule"], answer: 0, rationale: "The BNMC competencies are based on the ICM Essential Competencies, adapted to national needs." },
      { type: "mcq", q: "Which is a requirement for registration as a midwife?", options: ["Owning a car", "Completing an approved programme and passing the National examination", "Living near the hospital", "Being over 40 years old"], answer: 1, rationale: "Registration requires approved education, a competency portfolio and passing the National examination." },
      { type: "mcq", q: "The FINAL gateway to registration described in the syllabus is the:", options: ["First-year test", "National registration/licensing examination", "Interview only", "Attendance register"], answer: 1, rationale: "The National registration/licensing examination is the final step before registration." },
      { type: "mcq", q: "DM333 synthesises earlier learning specifically in readiness for the:", options: ["National midwifery examination", "Sports day", "Annual picnic", "Library card"], answer: 0, rationale: "The course consolidates prior learning to prepare students for the National exam." },
      { type: "mcq", q: "Registration legally permits the midwife to:", options: ["Perform surgery independently", "Use the protected title 'midwife' and practise the midwifery scope", "Prescribe any drug without limit", "Ignore the code of conduct"], answer: 1, rationale: "Registration grants the protected title and authority to practise within the midwifery scope, with its duties." },
      { type: "mcq", q: "Registration as a midwife is:", options: ["Permanent and never reviewed", "Maintained through fitness to practise, CPD and renewal", "Given once at birth", "Automatic for everyone"], answer: 1, rationale: "Registration must be maintained through continuing competence, CPD and periodic renewal." },
      { type: "mcq", q: "Serious professional misconduct can lead to:", options: ["A pay rise", "Conditions, suspension or removal from the register", "Automatic promotion", "Nothing at all"], answer: 1, rationale: "The regulator can impose conditions, suspend or remove a midwife to protect the public." },
      { type: "mcq", q: "The competency portfolio contributes to registration by:", options: ["Replacing all clinical practice", "Providing evidence that the graduate meets the BNMC and ICM competencies", "Being optional decoration", "Recording only holidays"], answer: 1, rationale: "The portfolio evidences achievement of the required competencies for registration." }
      , { type: "fill", q: "The national regulator of nursing and midwifery in Bangladesh is the ____.", accept: ["bnmc", "bangladesh nursing and midwifery council"], rationale: "The BNMC regulates nursing and midwifery in Bangladesh." },
      { type: "fill", q: "The final examination that acts as the gateway to registration is the ____ examination.", accept: ["national", "national registration", "national licensing"], rationale: "The National registration/licensing examination is the gateway to registration." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "trm-05-legal-regulatory-framework",
    unit: "Unit 2 · Competencies & Registration",
    title: "The Legal & Regulatory Framework of Midwifery Practice",
    readMinutes: 17,
    summary: "The legal and regulatory framework that surrounds midwifery practice: what regulation is and why it exists, scope of practice, the concept of accountability (professional, legal, employment and ethical), consent and confidentiality, documentation and its legal importance, negligence and duty of care, and how the law protects both women and midwives.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why midwifery is regulated by law", p: "Midwifery is regulated because it involves care of women and newborns at a vulnerable time when mistakes can cause serious harm. The legal and regulatory framework sets who may practise, what they may do, and the standards they must meet. Its central purpose is public protection: ensuring safe, competent, accountable practitioners and giving women a way to seek redress if care falls below standard." },
      { h: "Scope of practice", p: "Scope of practice is the range of activities a midwife is educated, competent and authorised to perform. In Bangladesh this is defined by BNMC (aligned with ICM). Practising within scope — normal pregnancy, labour, birth and the puerperium, plus recognition and initial management of emergencies — is a legal and professional requirement; practising beyond scope without appropriate authority is unsafe and unlawful." },
      { h: "Accountability — four linked strands", list: [
        "Professional accountability — to the BNMC and its code of conduct.",
        "Legal accountability — to the law (civil and criminal), including duty of care.",
        "Employment accountability — to the employer through the contract and policies.",
        "Ethical accountability — to the woman, the profession and one's own conscience."
      ], figure: {
        caption: "The midwife is accountable through four linked strands: professional, legal, employment and ethical.",
        svg: '<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four strands of accountability."><circle cx="230" cy="105" r="42" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="230" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">MIDWIFE</text><text x="230" y="118" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">accountable</text><rect x="40" y="20" width="130" height="40" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="105" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Professional</text><rect x="290" y="20" width="130" height="40" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="355" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Legal</text><rect x="40" y="150" width="130" height="40" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="105" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Employment</text><rect x="290" y="150" width="130" height="40" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="355" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Ethical</text><line x1="170" y1="45" x2="196" y2="80" stroke="#831843" stroke-width="1.5"/><line x1="290" y1="45" x2="264" y2="80" stroke="#831843" stroke-width="1.5"/><line x1="170" y1="165" x2="196" y2="130" stroke="#831843" stroke-width="1.5"/><line x1="290" y1="165" x2="264" y2="130" stroke="#831843" stroke-width="1.5"/></svg>'
      } },
      { h: "Consent", p: "Every competent woman has the legal right to give or refuse consent to any examination, procedure or treatment. Valid consent must be informed (she understands the nature, benefits and risks and the alternatives), given voluntarily (without coercion), and given by a person with capacity to decide. Providing care without valid consent can constitute assault; the woman may refuse care even when the midwife disagrees." },
      { h: "Confidentiality", p: "Information about a woman is confidential and may be shared only with her consent or where the law requires or permits it (for example, a serious risk of harm or a legal duty to report). Breaching confidentiality without justification is both a professional and a legal wrong. Records, conversations and handovers must all respect confidentiality." },
      { h: "Documentation and its legal weight", list: [
        "Records are a legal document; 'if it is not written, it was not done'.",
        "Entries must be accurate, factual, contemporaneous, legible, signed and dated.",
        "No falsification or backdating; corrections are made openly (single line, signed).",
        "Good records protect the woman's continuity of care and protect the midwife in any inquiry."
      ] },
      { h: "Duty of care and negligence", p: "The midwife owes every woman in her care a duty of care — to provide care to the standard of a reasonably competent midwife. Negligence arises when there is a duty of care, that duty is breached (care falls below the standard), and the breach causes harm. Practising within competence, following evidence-based standards, referring appropriately and documenting well are the best protection against negligence." },
      { h: "How the framework protects women AND midwives", p: "The framework is not only about restriction. Clear scope, standards and records protect women from harm and give them redress, and they also protect the midwife: a midwife who works within scope, obtains consent, follows standards, refers appropriately and documents well is acting lawfully and is defensible if questioned." }
    ],
    references: REF_TRM,
    examQuestions: [
      "Explain why midwifery practice is regulated by law and what the framework aims to achieve.",
      "Define scope of practice and explain the consequences of practising beyond it.",
      "Describe the four strands of accountability with an example of each.",
      "Explain the requirements for valid consent and the limits of confidentiality.",
      "Define duty of care and negligence, and describe how good practice protects the midwife."
    ],
    assessment: [
      { type: "mcq", q: "The central purpose of the legal and regulatory framework of midwifery is:", options: ["To increase midwives' pay", "Public protection — safe, competent, accountable practice", "To reduce paperwork", "To limit the number of women seen"], answer: 1, rationale: "Regulation exists primarily to protect the public." },
      { type: "mcq", q: "'Scope of practice' means the range of activities a midwife is:", options: ["Willing to try", "Educated, competent and authorised to perform", "Paid the most for", "Interested in"], answer: 1, rationale: "Scope of practice is defined by education, competence and authority, not personal preference." },
      { type: "mcq", q: "Accountability to the BNMC and its code of conduct is the ____ strand.", options: ["Professional", "Financial", "Recreational", "Geographical"], answer: 0, rationale: "Accountability to the regulator and its code is professional accountability." },
      { type: "mcq", q: "For consent to be valid it must be:", options: ["Written in Latin", "Informed, voluntary and given by a person with capacity", "Given by a relative only", "Given after the procedure"], answer: 1, rationale: "Valid consent is informed, voluntary and given by a person with capacity to decide." },
      { type: "mcq", q: "A competent woman who refuses a procedure the midwife recommends:", options: ["Must be treated anyway", "Has the legal right to refuse", "Loses all rights to care", "Must be reported to police"], answer: 1, rationale: "A competent adult may refuse care even when the midwife disagrees." },
      { type: "mcq", q: "Providing a procedure without valid consent may amount to:", options: ["Good practice", "Assault", "A minor paperwork issue", "Nothing legally"], answer: 1, rationale: "Care without valid consent can constitute assault in law." },
      { type: "mcq", q: "Which statement about midwifery records is correct?", options: ["They can be backdated if forgotten", "They are a legal document and must be accurate, contemporaneous and signed", "They are private notes with no legal value", "Corrections should be hidden with correction fluid"], answer: 1, rationale: "Records are legal documents; entries must be accurate, contemporaneous, signed and corrected openly." },
      { type: "mcq", q: "Negligence in law requires a duty of care, a breach of that duty, and:", options: ["A pay dispute", "Resulting harm caused by the breach", "A written complaint only", "A long shift"], answer: 1, rationale: "Negligence = duty of care + breach + harm caused by the breach." },
      { type: "mcq", q: "Confidential information about a woman may be shared:", options: ["Freely with anyone", "With her consent or where the law requires/permits it", "Only with the newspaper", "Never, under any circumstances"], answer: 1, rationale: "Disclosure is justified with consent or where the law requires or permits it (e.g. serious risk of harm)." },
      { type: "mcq", q: "The BEST protection against a negligence claim is to:", options: ["Avoid documentation", "Work within competence, follow standards, refer appropriately and document well", "Never refer to a doctor", "Ignore consent"], answer: 1, rationale: "Working within scope, following standards, referring and documenting are the strongest safeguards." }
      , { type: "fill", q: "The range of activities a midwife is educated, competent and authorised to perform is her ____ of practice.", accept: ["scope"], rationale: "This is the scope of practice." },
      { type: "fill", q: "Care that falls below the standard of a reasonably competent midwife and causes harm may amount to ____.", accept: ["negligence"], rationale: "This describes negligence in law." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "trm-06-accountability-code",
    unit: "Unit 3 · Professional Responsibilities & Ethics",
    title: "Professional Responsibilities, Accountability & the Code of Conduct",
    readMinutes: 17,
    summary: "The professional responsibilities of the registered midwife, the meaning of accountability and answerability, the purpose and content of a code of conduct/ethics, the four principles of biomedical ethics, key duties (competence, honesty, respect, safeguarding, raising concerns), and how the code guides everyday midwifery decisions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Professional responsibility", p: "A professional is someone who holds specialist knowledge and skills and is trusted by society to use them for the public good. The registered midwife's professional responsibility is to provide safe, competent, compassionate, evidence-based care and to put the interests of women and newborns first. With the privilege of registration and the protected title comes the responsibility to uphold the standards of the profession at all times, on and off duty." },
      { h: "Accountability and answerability", p: "Accountability means being answerable for one's actions and, importantly, one's omissions (what one fails to do). A midwife cannot delegate away her accountability: even when she delegates a task, she remains accountable for the decision to delegate. Being accountable requires being able to give a clear, reasoned justification for the care given." },
      { h: "What is a code of conduct/ethics?", p: "A code of conduct (or code of ethics) is the set of professional standards, values and expected behaviours published by the regulator (BNMC) and reflected in ICM guidance. It states what the public and profession can expect of every midwife. Breaching the code can lead to fitness-to-practise proceedings. The code turns broad values into practical duties." },
      { h: "The four principles of biomedical ethics", list: [
        "Autonomy — respect the woman's right to make her own informed decisions.",
        "Beneficence — act in the woman's and newborn's best interests; do good.",
        "Non-maleficence — 'do no harm'; avoid causing avoidable harm.",
        "Justice — treat women fairly, without discrimination, and use resources fairly."
      ], figure: {
        caption: "The four principles of biomedical ethics that underpin the midwife's code of conduct.",
        svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four principles of biomedical ethics."><rect x="20" y="30" width="200" height="55" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="120" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Autonomy</text><text x="120" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">her own choice</text><rect x="240" y="30" width="200" height="55" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="340" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">Beneficence</text><text x="340" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">do good</text><rect x="20" y="105" width="200" height="55" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="120" y="129" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">Non-maleficence</text><text x="120" y="147" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">do no harm</text><rect x="240" y="105" width="200" height="55" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="340" y="129" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Justice</text><text x="340" y="147" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">fairness</text></svg>'
      } },
      { h: "Key duties in the code", list: [
        "Prioritise people — put the woman's and newborn's safety and dignity first.",
        "Practise effectively — keep knowledge and skills up to date; use best evidence.",
        "Preserve safety — work within competence, delegate safely and raise concerns.",
        "Promote professionalism and trust — be honest, respectful and act with integrity.",
        "Obtain consent, protect confidentiality and keep accurate records.",
        "Do not discriminate; provide culturally sensitive, respectful care to all."
      ] },
      { h: "Safeguarding and raising concerns", p: "The midwife has a duty to protect women, newborns and vulnerable people from harm and abuse (safeguarding). She must also raise concerns openly if she sees unsafe practice, poor care or a risk to safety — this is a professional duty, not disloyalty. The interests of the woman and public safety override collegial or institutional loyalty." },
      { h: "Honesty and the duty of candour", p: "When something goes wrong, the midwife must be open and honest with the woman and family — this is the duty of candour. She should explain what happened, apologise, and take steps to put things right and prevent recurrence. Honesty maintains trust and is required by the code even when errors have occurred." }
    ],
    references: REF_TRM,
    examQuestions: [
      "Explain the professional responsibilities of a registered midwife.",
      "Define accountability and explain why it cannot be delegated away.",
      "Describe the purpose of a code of conduct and its main duties.",
      "Explain the four principles of biomedical ethics with a midwifery example of each.",
      "Discuss the midwife's duty to safeguard, to raise concerns and to be candid when errors occur."
    ],
    assessment: [
      { type: "mcq", q: "Accountability means being answerable for one's actions AND:", options: ["Only successes", "Omissions — what one fails to do", "Other people's shifts", "The weather"], answer: 1, rationale: "A midwife is accountable for both her actions and her omissions." },
      { type: "mcq", q: "When a midwife delegates a task, she:", options: ["Loses all accountability", "Remains accountable for the decision to delegate", "Transfers all blame to the junior", "Is no longer involved"], answer: 1, rationale: "Accountability for the decision to delegate stays with the midwife." },
      { type: "mcq", q: "The ethical principle of 'non-maleficence' means:", options: ["Do good", "Do no harm", "Respect autonomy", "Share resources fairly"], answer: 1, rationale: "Non-maleficence is the duty to avoid causing avoidable harm." },
      { type: "mcq", q: "Respecting a woman's right to make her own informed decision reflects the principle of:", options: ["Justice", "Autonomy", "Non-maleficence", "Beneficence"], answer: 1, rationale: "Autonomy is respect for the woman's self-determination." },
      { type: "mcq", q: "A code of conduct is BEST described as:", options: ["A pay agreement", "Professional standards and behaviours expected of every midwife", "A hospital cleaning rota", "A list of drugs"], answer: 1, rationale: "The code sets the standards, values and behaviours expected of registrants." },
      { type: "mcq", q: "Treating all women fairly and without discrimination reflects the principle of:", options: ["Autonomy", "Justice", "Beneficence", "Non-maleficence"], answer: 1, rationale: "Justice concerns fairness and non-discrimination." },
      { type: "mcq", q: "The 'duty of candour' requires the midwife to:", options: ["Hide errors", "Be open and honest with the woman when something goes wrong", "Blame the woman", "Say nothing without a lawyer"], answer: 1, rationale: "The duty of candour is openness and honesty when care goes wrong, including apology." },
      { type: "mcq", q: "If a midwife sees unsafe practice on the ward she should:", options: ["Stay silent to be loyal", "Raise the concern openly to protect safety", "Wait until someone is harmed", "Leave the job quietly"], answer: 1, rationale: "Raising concerns to protect safety is a professional duty, not disloyalty." },
      { type: "mcq", q: "Acting in the best interests of the woman and newborn (doing good) is:", options: ["Beneficence", "Autonomy", "Justice", "Confidentiality"], answer: 0, rationale: "Beneficence is the duty to act in the person's best interests." },
      { type: "mcq", q: "Safeguarding in midwifery means:", options: ["Guarding the hospital gate", "Protecting women, newborns and vulnerable people from harm and abuse", "Locking the drug cupboard only", "Keeping equipment clean only"], answer: 1, rationale: "Safeguarding is protecting vulnerable people from harm and abuse." }
      , { type: "fill", q: "Being answerable for one's own actions and omissions is called ____.", accept: ["accountability"], rationale: "This defines professional accountability." },
      { type: "fill", q: "The ethical principle 'do no harm' is called ____.", accept: ["non-maleficence", "nonmaleficence"], rationale: "Non-maleficence means avoiding harm." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "trm-07-profession-national-global",
    unit: "Unit 3 · Professional Responsibilities & Ethics",
    title: "The Midwifery Profession in Bangladesh & Globally",
    readMinutes: 16,
    summary: "The development and status of the midwifery profession in Bangladesh and internationally, the role of midwives in reducing maternal and newborn mortality, professional organisations (ICM, national midwifery associations), current professional issues and challenges nationally and globally, and the midwife's contribution to the Sustainable Development Goals.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Midwifery as a profession", p: "A profession has a defined body of knowledge, agreed standards and competencies, a code of ethics, a system of registration and regulation, a commitment to continuing development, and its own representative organisations. Midwifery meets all of these criteria and is recognised globally as an autonomous profession, distinct from and complementary to nursing and medicine." },
      { h: "Midwifery in Bangladesh", p: "Bangladesh has invested in developing a professional midwifery workforce as part of its strategy to improve maternal and newborn health. Diploma and degree midwives are educated to the ICM standard, regulated by the BNMC, and deployed to provide skilled care at birth, particularly for underserved communities. Building the profession's status, recognition and career pathways is an ongoing national priority." },
      { h: "The global importance of midwives", list: [
        "Skilled midwifery care reduces maternal deaths, stillbirths and newborn deaths.",
        "Midwives provide most essential sexual, reproductive, maternal and newborn services.",
        "Midwife-led care for healthy women is associated with fewer interventions and good outcomes.",
        "Investing in midwives is one of the most cost-effective ways to improve maternal and newborn survival."
      ] },
      { h: "Professional organisations", list: [
        "International Confederation of Midwives (ICM) — the global federation setting standards and representing midwives.",
        "National midwifery associations — represent midwives within a country, support professional development and advocacy.",
        "Regulatory councils (e.g. BNMC) — set and enforce standards for education and practice.",
        "These bodies give the profession a collective voice and protect professional standards."
      ], figure: {
        caption: "Levels of midwifery professional bodies: global (ICM), national association, and national regulator.",
        svg: '<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Levels of midwifery professional organisations."><rect x="130" y="20" width="200" height="46" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="230" y="41" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Global: ICM</text><text x="230" y="58" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">standards worldwide</text><rect x="30" y="120" width="180" height="46" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="120" y="141" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">National association</text><text x="120" y="158" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">voice &amp; advocacy</text><rect x="250" y="120" width="180" height="46" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="340" y="141" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Regulator (BNMC)</text><text x="340" y="158" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">standards &amp; registration</text><line x1="200" y1="66" x2="120" y2="116" stroke="#831843" stroke-width="1.5"/><line x1="260" y1="66" x2="340" y2="116" stroke="#831843" stroke-width="1.5"/></svg>'
      } },
      { h: "Professional issues and challenges — national", list: [
        "Workforce shortages, uneven deployment and retention in rural areas.",
        "Gaining full professional recognition, autonomy and clear career pathways.",
        "Adequate resources, supportive supervision and safe working conditions.",
        "Respectful maternity care and reducing disrespect and abuse in facilities."
      ] },
      { h: "Professional issues and challenges — global", list: [
        "A large global shortage of midwives, especially where mortality is highest.",
        "Variation in education quality, regulation and scope between countries.",
        "Task-shifting, professional boundaries and role clarity.",
        "Ensuring respectful, woman-centred, evidence-based care everywhere."
      ] },
      { h: "Midwives and the Sustainable Development Goals (SDGs)", p: "Midwives contribute directly to the global goal of good health and wellbeing — reducing maternal and newborn mortality and improving sexual and reproductive health. By providing skilled, respectful care and health education, midwives advance these goals and strengthen the health system, especially for women in the most underserved communities." }
    ],
    references: REF_TRM,
    examQuestions: [
      "List the criteria that make midwifery a profession and show how midwifery meets them.",
      "Describe the development and current status of midwifery in Bangladesh.",
      "Explain the global importance of midwives in reducing maternal and newborn mortality.",
      "Describe the roles of professional organisations such as the ICM, national associations and the regulator.",
      "Discuss the main professional issues facing midwifery nationally and internationally."
    ],
    assessment: [
      { type: "mcq", q: "Which is a defining feature of a profession?", options: ["Having no standards", "A defined body of knowledge, a code of ethics and regulation", "Working without training", "No representative organisation"], answer: 1, rationale: "A profession has a knowledge base, ethics, standards, regulation and organisations." },
      { type: "mcq", q: "Midwifery is best described as:", options: ["A branch of nursing with no autonomy", "An autonomous profession, distinct from and complementary to nursing and medicine", "A hobby", "A part of pharmacy"], answer: 1, rationale: "Midwifery is recognised globally as an autonomous, distinct profession." },
      { type: "mcq", q: "Investing in skilled midwifery care primarily helps to:", options: ["Increase maternal and newborn deaths", "Reduce maternal, stillbirth and newborn deaths", "Close maternity services", "Replace all doctors"], answer: 1, rationale: "Skilled midwifery care reduces maternal, stillbirth and neonatal mortality." },
      { type: "mcq", q: "The global federation that represents midwives and sets standards worldwide is the:", options: ["BNMC", "ICM", "WTO", "IMF"], answer: 1, rationale: "The ICM is the global federation of midwives and their associations." },
      { type: "mcq", q: "A national midwifery association mainly provides:", options: ["Hospital cleaning", "A collective voice, advocacy and professional development for midwives", "Drug manufacturing", "Ambulance driving"], answer: 1, rationale: "National associations represent midwives and support advocacy and development." },
      { type: "mcq", q: "A key NATIONAL challenge for midwifery in Bangladesh is:", options: ["Too many midwives in rural areas", "Workforce shortages, deployment, retention and recognition", "No women needing care", "Excess of resources everywhere"], answer: 1, rationale: "Shortages, deployment/retention and professional recognition are key national challenges." },
      { type: "mcq", q: "A major GLOBAL challenge for the profession is:", options: ["A worldwide shortage of midwives, especially where mortality is highest", "Too many midwives everywhere", "No need for regulation", "Identical scope in every country"], answer: 0, rationale: "There is a large global midwife shortage, worst where maternal/newborn mortality is highest." },
      { type: "mcq", q: "Midwife-led care for healthy women is associated with:", options: ["More unnecessary intervention", "Fewer interventions and good outcomes", "Poorer outcomes", "No difference at all"], answer: 1, rationale: "For healthy women, midwife-led care is linked with fewer interventions and good outcomes." },
      { type: "mcq", q: "Respectful maternity care means care that is:", options: ["Rushed and impersonal", "Free from disrespect and abuse, dignified and woman-centred", "Given only to some women", "Decided without the woman"], answer: 1, rationale: "Respectful maternity care is dignified, woman-centred and free of disrespect and abuse." },
      { type: "mcq", q: "Midwives contribute to the Sustainable Development Goals mainly by:", options: ["Building roads", "Improving maternal and newborn health and reproductive health", "Trading currency", "Running elections"], answer: 1, rationale: "Midwives advance the health SDGs through maternal, newborn and reproductive health." }
      , { type: "fill", q: "The global federation representing midwives and setting worldwide standards is the ____.", accept: ["icm", "international confederation of midwives"], rationale: "The ICM is the global midwifery federation." },
      { type: "fill", q: "Dignified, woman-centred care that is free from disrespect and abuse is called ____ maternity care.", accept: ["respectful"], rationale: "This is respectful maternity care." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "trm-08-leadership",
    unit: "Unit 4 · Leadership, Conflict & Advocacy",
    title: "Leadership in Midwifery (Styles & Skills)",
    readMinutes: 16,
    summary: "The concept of leadership and how it differs from management, why every midwife is a leader, common leadership styles (autocratic, democratic, laissez-faire, transformational, transactional, servant), the core skills of an effective leader, and how leadership improves the safety and quality of maternity care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is leadership?", p: "Leadership is the ability to influence, motivate and enable others to work together towards a shared goal. In midwifery, leadership means guiding a team, an individual woman's care, or a change in practice so that women and newborns receive safe, respectful, high-quality care. Leadership is not a title — it is a set of behaviours that can be learned and practised." },
      { h: "Leadership vs management", list: [
        "Management is mainly about systems: planning, organising, staffing, budgeting and controlling to keep things running.",
        "Leadership is mainly about people and direction: setting a vision, inspiring, influencing and driving improvement and change.",
        "The two overlap; a good midwife leader both manages the work and leads the people. 'Managers do things right; leaders do the right things.'"
      ] },
      { h: "Every midwife is a leader", p: "Leadership is not only for those in senior posts. Even a newly qualified midwife leads: she leads the woman's care, coordinates the team around a birth, mentors students, advocates for the woman, and role-models good practice. This is sometimes called 'clinical leadership' or 'leadership at the bedside'." },
      { h: "Leadership styles", list: [
        "Autocratic — the leader decides alone; fast and clear, useful in an emergency, but can demotivate.",
        "Democratic (participative) — the leader involves the team in decisions; builds ownership and morale.",
        "Laissez-faire — the leader gives the team freedom; works with experienced staff but risks lack of direction.",
        "Transformational — the leader inspires a shared vision and helps people grow and improve.",
        "Transactional — leadership through clear tasks, rewards and consequences.",
        "Servant leadership — the leader serves and supports the team's needs first."
      ], figure: {
        caption: "Common leadership styles range from leader-centred (autocratic) to team-centred (laissez-faire), with the best style depending on the situation.",
        svg: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Leadership styles continuum."><line x1="40" y1="120" x2="480" y2="120" stroke="#831843" stroke-width="2.5"/><text x="40" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">leader-centred</text><text x="480" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">team-centred</text><rect x="30" y="60" width="120" height="44" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="90" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Autocratic</text><text x="90" y="95" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">leader decides</text><rect x="195" y="60" width="130" height="44" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="260" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Democratic</text><text x="260" y="95" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">team involved</text><rect x="360" y="60" width="130" height="44" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="425" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Laissez-faire</text><text x="425" y="95" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">team free</text><line x1="90" y1="104" x2="90" y2="118" stroke="#831843" stroke-width="1.5"/><line x1="260" y1="104" x2="260" y2="118" stroke="#831843" stroke-width="1.5"/><line x1="425" y1="104" x2="425" y2="118" stroke="#831843" stroke-width="1.5"/></svg>'
      } },
      { h: "Skills of an effective leader", list: [
        "Communication — clear, honest, respectful listening and speaking.",
        "Emotional intelligence — self-awareness and awareness of others' feelings.",
        "Decision-making and problem-solving.",
        "Delegation — assigning the right task to the right person, safely.",
        "Role-modelling — demonstrating the standards expected of others.",
        "Building and motivating a team; giving and receiving feedback.",
        "Managing change and championing evidence-based improvement."
      ] },
      { h: "Choosing the right style", p: "No single style is best for every situation. In an acute emergency (e.g. postpartum haemorrhage) a clear, directive (more autocratic) style keeps the team focused and safe; in planning a service change, a democratic or transformational style builds ownership and lasting improvement. Effective leaders adapt their style to the people and the situation — this is 'situational leadership'." },
      { h: "How leadership improves maternity care", list: [
        "Sets and role-models high standards of safe, respectful care.",
        "Improves teamwork and communication, which prevent errors.",
        "Supports staff wellbeing, morale and retention.",
        "Drives evidence-based improvement, audit and change.",
        "Advocates for women and for the resources care requires."
      ] }
    ],
    references: REF_TRM,
    examQuestions: [
      "Define leadership and distinguish it from management.",
      "Explain why every midwife, including a newly qualified one, is a leader.",
      "Describe the main leadership styles and give a midwifery situation suited to each.",
      "List and explain the core skills of an effective leader.",
      "Discuss how good leadership improves the safety and quality of maternity care."
    ],
    assessment: [
      { type: "mcq", q: "Leadership is BEST defined as the ability to:", options: ["Give orders and punish", "Influence and enable others towards a shared goal", "Avoid all responsibility", "Work only alone"], answer: 1, rationale: "Leadership is influencing and enabling others towards a shared goal." },
      { type: "mcq", q: "Which statement contrasts leadership and management correctly?", options: ["They are exactly the same", "Management focuses on systems; leadership focuses on people and direction", "Leadership means only budgeting", "Management means only inspiring"], answer: 1, rationale: "Management is about systems; leadership is about people, vision and direction." },
      { type: "mcq", q: "Even a newly qualified midwife shows leadership when she:", options: ["Ignores students", "Coordinates the team and advocates for the woman's care", "Refuses to make decisions", "Avoids role-modelling"], answer: 1, rationale: "Clinical leadership includes coordinating care, mentoring and advocating for the woman." },
      { type: "mcq", q: "In an acute emergency such as postpartum haemorrhage, the MOST suitable leadership style is usually:", options: ["Laissez-faire", "A clear, directive (more autocratic) style", "No leadership at all", "Endless discussion"], answer: 1, rationale: "A clear, directive style keeps the team focused and safe in a time-critical emergency." },
      { type: "mcq", q: "The style in which the leader involves the team in decisions is:", options: ["Autocratic", "Democratic", "Laissez-faire", "Absent"], answer: 1, rationale: "Democratic (participative) leadership involves the team in decisions." },
      { type: "mcq", q: "A leader who inspires a shared vision and helps staff grow uses a ____ style.", options: ["Transactional", "Transformational", "Autocratic", "Laissez-faire"], answer: 1, rationale: "Transformational leaders inspire a shared vision and develop their people." },
      { type: "mcq", q: "Delegation as a leadership skill means:", options: ["Doing everything yourself", "Assigning the right task to the right person, safely", "Refusing to share work", "Blaming juniors"], answer: 1, rationale: "Safe delegation matches the right task to the right, competent person." },
      { type: "mcq", q: "Adapting leadership style to the people and the situation is called:", options: ["Situational leadership", "Fixed leadership", "No leadership", "Random leadership"], answer: 0, rationale: "Situational leadership adapts style to the context and the people." },
      { type: "mcq", q: "Which is a core leadership skill?", options: ["Poor communication", "Emotional intelligence", "Ignoring feedback", "Avoiding decisions"], answer: 1, rationale: "Emotional intelligence (self- and other-awareness) is central to good leadership." },
      { type: "mcq", q: "Good leadership improves maternity care mainly by:", options: ["Increasing errors", "Improving teamwork, standards and evidence-based improvement", "Lowering standards", "Reducing communication"], answer: 1, rationale: "Leadership improves teamwork, standards, wellbeing and evidence-based improvement." }
      , { type: "fill", q: "Adapting one's leadership style to the people and the situation is called ____ leadership.", accept: ["situational"], rationale: "This is situational leadership." },
      { type: "fill", q: "The leadership style in which the leader inspires a shared vision and develops staff is called ____ leadership.", accept: ["transformational"], rationale: "Transformational leadership inspires and develops people." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "trm-09-managing-conflict",
    unit: "Unit 4 · Leadership, Conflict & Advocacy",
    title: "Managing Conflict in the Workplace",
    readMinutes: 16,
    summary: "The nature and causes of workplace conflict, its positive and negative effects, the common conflict-management styles (avoiding, accommodating, competing, compromising, collaborating), a practical step-by-step approach to resolving conflict, communication skills for de-escalation, and the midwife's role in maintaining a respectful, safe team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is conflict?", p: "Conflict is a disagreement or clash that occurs when people have differing needs, values, goals, expectations or perceptions. In a busy maternity setting, some conflict is inevitable. Conflict itself is neither good nor bad; what matters is how it is handled. Well-managed conflict can improve understanding and practice; poorly managed conflict harms teamwork, morale and — ultimately — the safety of care." },
      { h: "Common causes of conflict in midwifery", list: [
        "Poor or unclear communication and misunderstandings.",
        "Differences in values, culture or clinical opinion.",
        "Unclear roles, responsibilities and expectations.",
        "Workload pressure, staff shortages and limited resources.",
        "Personality clashes and past unresolved grievances.",
        "Hierarchy and power differences within the team."
      ] },
      { h: "Positive and negative effects", list: [
        "Positive: surfaces problems, encourages new ideas, clarifies roles and can strengthen relationships when resolved well.",
        "Negative: stress, low morale, poor teamwork, breakdown in communication, errors and unsafe care if left unresolved."
      ] },
      { h: "Conflict-management styles (Thomas–Kilmann)", list: [
        "Avoiding — ignoring or withdrawing; may suit trivial or highly charged moments but leaves issues unresolved.",
        "Accommodating — giving in to keep the peace; useful when the issue matters more to the other person.",
        "Competing — asserting one's own position; may be needed in an emergency or on a safety issue.",
        "Compromising — each side gives up something to reach a middle ground; quick but not always ideal.",
        "Collaborating — working together for a win–win solution that meets both parties' needs; usually the best for important issues."
      ], figure: {
        caption: "Conflict-management styles vary by how far each party pursues their own concern versus the other's concern; collaboration seeks a win-win.",
        svg: '<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conflict management styles grid."><line x1="50" y1="30" x2="50" y2="220" stroke="#831843" stroke-width="2"/><line x1="50" y1="220" x2="260" y2="220" stroke="#831843" stroke-width="2"/><text x="30" y="125" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843" transform="rotate(-90 30 125)">assertive (own concern)</text><text x="155" y="245" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">cooperative (other concern)</text><text x="80" y="50" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Competing</text><text x="230" y="50" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">Collaborating</text><text x="155" y="130" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Compromising</text><text x="80" y="210" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Avoiding</text><text x="230" y="210" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Accommodating</text></svg>'
      } },
      { h: "A step-by-step approach to resolving conflict", list: [
        "Stay calm and choose a private, appropriate time and place.",
        "Listen actively to understand the other person's view; acknowledge feelings.",
        "Focus on the problem/behaviour, not the person; avoid blame.",
        "Identify the shared goal (usually safe, good care for the woman).",
        "Explore options together and agree a solution both can accept.",
        "Agree actions and follow up; escalate to a manager if unresolved or if safety is at risk."
      ] },
      { h: "Communication skills for de-escalation", list: [
        "Use a calm tone and open, non-threatening body language.",
        "Use 'I' statements ('I feel...', 'I am concerned...') rather than 'you' accusations.",
        "Active listening: paraphrase and check understanding.",
        "Keep the focus on facts and the woman's safety, not on winning.",
        "Show respect even in disagreement."
      ] },
      { h: "The midwife's role in a respectful team", p: "The midwife has a professional duty to maintain respectful working relationships and to address conflict constructively. Unresolved conflict and incivility are patient-safety issues, because they impair communication and teamwork around the woman. When conflict cannot be resolved directly, or when it involves unsafe practice or bullying, the midwife should escalate appropriately and use the organisation's policies." }
    ],
    references: REF_TRM,
    examQuestions: [
      "Define conflict and list the common causes of conflict in a maternity workplace.",
      "Discuss the positive and negative effects of conflict.",
      "Describe the five conflict-management styles and when each may be appropriate.",
      "Outline a step-by-step approach to resolving a workplace conflict.",
      "Explain why unresolved conflict is a patient-safety issue and how the midwife should respond."
    ],
    assessment: [
      { type: "mcq", q: "Conflict is BEST described as:", options: ["A clash arising from differing needs, values or goals", "Always harmful", "Only physical fighting", "A sign of a bad person"], answer: 0, rationale: "Conflict is a disagreement arising from differing needs, values, goals or perceptions." },
      { type: "mcq", q: "Which is a common cause of conflict in midwifery?", options: ["Perfect communication", "Unclear roles and poor communication", "Plenty of staff and resources", "Total agreement on everything"], answer: 1, rationale: "Unclear roles and poor communication are frequent sources of conflict." },
      { type: "mcq", q: "The conflict style that seeks a win–win solution meeting both parties' needs is:", options: ["Avoiding", "Competing", "Collaborating", "Accommodating"], answer: 2, rationale: "Collaborating works together for a win–win outcome and is usually best for important issues." },
      { type: "mcq", q: "Giving in to keep the peace is the ____ style.", options: ["Competing", "Accommodating", "Collaborating", "Compromising"], answer: 1, rationale: "Accommodating means yielding to the other party to preserve harmony." },
      { type: "mcq", q: "A directive 'competing' style may be appropriate when:", options: ["The issue is trivial", "There is an emergency or a clear safety issue", "You want to build long-term consensus", "You wish to ignore the problem"], answer: 1, rationale: "Competing (asserting) can be justified in an emergency or on a non-negotiable safety issue." },
      { type: "mcq", q: "When resolving conflict, the midwife should focus on:", options: ["Blaming the person", "The problem/behaviour and the shared goal of safe care", "Winning at all costs", "Public humiliation"], answer: 1, rationale: "Focus on the problem and shared goal, not on blaming the individual." },
      { type: "mcq", q: "An 'I' statement in conflict resolution is used to:", options: ["Accuse the other person", "Express one's own feelings and concerns without blaming", "Avoid all communication", "Give commands"], answer: 1, rationale: "'I' statements express feelings and concerns without accusing, reducing defensiveness." },
      { type: "mcq", q: "Unresolved workplace conflict is a patient-safety issue because it:", options: ["Improves teamwork", "Impairs communication and teamwork around the woman", "Has no effect on care", "Only affects pay"], answer: 1, rationale: "Poor relationships impair communication and teamwork, increasing the risk of error." },
      { type: "mcq", q: "The FIRST step in resolving a conflict constructively is usually to:", options: ["Shout back", "Stay calm and choose an appropriate private time and place", "Complain to everyone", "Ignore it forever"], answer: 1, rationale: "Staying calm and choosing an appropriate setting sets the stage for constructive resolution." },
      { type: "mcq", q: "If a conflict involves unsafe practice or bullying and cannot be resolved directly, the midwife should:", options: ["Do nothing", "Retaliate", "Resign immediately", "Escalate appropriately using organisational policy"], answer: 3, rationale: "Unsafe practice or bullying should be escalated through the proper channels." }
      , { type: "fill", q: "The conflict-management style that works together for a win–win outcome is called ____.", accept: ["collaborating", "collaboration"], rationale: "Collaborating seeks a win–win solution." },
      { type: "fill", q: "Statements beginning 'I feel...' or 'I am concerned...' used to reduce defensiveness are called ____ statements.", accept: ["i", "'i'"], rationale: "'I' statements express feelings without blaming." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "trm-10-advocacy",
    unit: "Unit 4 · Leadership, Conflict & Advocacy",
    title: "Advocacy Skills & Woman-Centred Advocacy",
    readMinutes: 16,
    summary: "The meaning of advocacy and why it is central to midwifery, the midwife as the woman's advocate, types and levels of advocacy (individual, group, self-advocacy), the skills needed to advocate effectively, the link with informed choice and consent, potential barriers and conflicts, and how advocacy protects women's rights and dignity.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is advocacy?", p: "Advocacy means actively supporting, representing and speaking up for another person so that their needs, wishes and rights are heard and respected. In midwifery, the midwife advocates for the woman — ensuring her voice is central to decisions about her own care. Advocacy is a core professional responsibility that flows directly from the partnership model of midwifery and the principle of autonomy." },
      { h: "Why advocacy matters in midwifery", list: [
        "Childbearing women may feel vulnerable, unwell, frightened or unable to speak for themselves.",
        "Power and knowledge imbalances exist between women and health professionals.",
        "Some women face language, cultural, social or educational barriers.",
        "Advocacy protects the woman's rights, dignity, safety and informed choices."
      ] },
      { h: "The midwife as the woman's advocate", p: "The midwife's first loyalty in advocacy is to the woman. This means giving her full, honest, understandable information; supporting her to make her own decisions; representing her wishes to the wider team; and ensuring she is treated with respect and dignity. True advocacy supports the woman's own decision — it is not the midwife imposing what she thinks is best." },
      { h: "Types and levels of advocacy", list: [
        "Individual (case) advocacy — supporting one woman in her specific care.",
        "Group / systemic advocacy — speaking up for groups of women or for improvements in services and policy.",
        "Self-advocacy — helping and empowering the woman to speak up for herself.",
        "Peer advocacy — support from someone with shared experience."
      ], figure: {
        caption: "Advocacy operates at the level of the individual woman, of groups/services, and by empowering the woman's own voice (self-advocacy).",
        svg: '<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Levels of advocacy."><rect x="20" y="60" width="130" height="60" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="85" y="86" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Individual</text><text x="85" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">one woman</text><rect x="165" y="60" width="130" height="60" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="230" y="86" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">Group /</text><text x="230" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">systemic</text><rect x="310" y="60" width="130" height="60" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="375" y="86" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Self-</text><text x="375" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">advocacy</text><text x="230" y="35" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">ADVOCACY</text></svg>'
      } },
      { h: "Skills for effective advocacy", list: [
        "Active listening — truly understanding what the woman wants and fears.",
        "Clear, honest communication and giving unbiased, understandable information.",
        "Assertiveness — speaking up respectfully and confidently to the team.",
        "Negotiation and problem-solving within the team.",
        "Cultural sensitivity and non-judgemental attitude.",
        "Knowledge of the woman's rights, the evidence and available options."
      ] },
      { h: "Advocacy, informed choice and consent", p: "Advocacy is closely linked to informed choice and consent. To choose, a woman needs full, balanced information about her options, benefits and risks, given in a way she understands. The midwife advocates by ensuring this information is provided and that the woman's decision — even one the midwife would not make — is respected, provided the woman has capacity." },
      { h: "Barriers and conflicts in advocacy", list: [
        "Hierarchy and fear of challenging senior colleagues.",
        "Time pressure, heavy workload and limited resources.",
        "Conflict between the woman's wishes and clinical safety — requiring careful, honest discussion and, where needed, referral.",
        "The midwife's own values must not override the woman's informed choice."
      ] },
      { h: "How advocacy protects women", p: "Effective advocacy upholds the woman's rights, dignity and safety; strengthens the partnership and trust between woman and midwife; reduces disrespect and abuse in maternity care; and ensures decisions are truly the woman's own. It is a practical expression of respectful, woman-centred midwifery." }
    ],
    references: REF_TRM,
    examQuestions: [
      "Define advocacy and explain why it is central to midwifery practice.",
      "Explain the role of the midwife as the woman's advocate and how true advocacy differs from imposing the midwife's view.",
      "Describe the types/levels of advocacy with an example of each.",
      "List and explain the skills needed for effective advocacy.",
      "Discuss the barriers to advocacy and how the midwife can overcome them."
    ],
    assessment: [
      { type: "mcq", q: "Advocacy in midwifery means:", options: ["Supporting and speaking up for the woman so her wishes and rights are respected", "Making all decisions for the woman", "Ignoring the woman's views", "Following only the doctor's wishes"], answer: 0, rationale: "Advocacy is actively supporting and representing the woman so her voice and rights are respected." },
      { type: "mcq", q: "In advocacy the midwife's first loyalty is to:", options: ["The hospital budget", "The woman", "Her senior colleague", "Her own preferences"], answer: 1, rationale: "The midwife's first loyalty in advocacy is to the woman." },
      { type: "mcq", q: "True advocacy supports:", options: ["What the midwife thinks is best regardless of the woman", "The woman's own informed decision", "The cheapest option always", "The fastest option always"], answer: 1, rationale: "Advocacy supports the woman's own informed decision, not the midwife's imposed choice." },
      { type: "mcq", q: "Helping and empowering the woman to speak up for herself is called:", options: ["Group advocacy", "Systemic advocacy", "Self-advocacy", "No advocacy"], answer: 2, rationale: "Self-advocacy empowers the woman to speak for herself." },
      { type: "mcq", q: "Speaking up for improvements in services and policy for many women is ____ advocacy.", options: ["Individual", "Group / systemic", "Self-", "Silent"], answer: 1, rationale: "Group/systemic advocacy addresses services and policy for groups of women." },
      { type: "mcq", q: "Which is a key skill for effective advocacy?", options: ["Ignoring the woman", "Active listening and assertive, respectful communication", "Judging the woman's choices", "Withholding information"], answer: 1, rationale: "Active listening and respectful assertiveness are core advocacy skills." },
      { type: "mcq", q: "Advocacy is closely linked to informed choice because the woman needs:", options: ["No information", "Full, balanced, understandable information to decide", "Only the risks", "Only the benefits"], answer: 1, rationale: "Informed choice requires full, balanced information given in an understandable way." },
      { type: "mcq", q: "A common BARRIER to advocacy is:", options: ["Good staffing", "Hierarchy and fear of challenging seniors", "Plenty of time", "Clear communication"], answer: 1, rationale: "Hierarchy and fear of challenging senior colleagues can hinder advocacy." },
      { type: "mcq", q: "If a woman with capacity makes a choice the midwife disagrees with, the midwife should:", options: ["Override her decision", "Respect her informed decision after giving full information", "Report her", "Withdraw all care"], answer: 1, rationale: "A woman with capacity has the right to make her own informed decision, which must be respected." },
      { type: "mcq", q: "Effective advocacy helps to reduce:", options: ["Respect for women", "Women's rights", "Informed choice", "Disrespect and abuse in maternity care"], answer: 3, rationale: "Advocacy upholds dignity and rights, helping to reduce disrespect and abuse." }
      , { type: "fill", q: "Helping and empowering a woman to speak up for herself is called ____-advocacy.", accept: ["self"], rationale: "This is self-advocacy." },
      { type: "fill", q: "Advocacy is closely linked to informed ____ and consent.", accept: ["choice"], rationale: "Advocacy supports informed choice and consent." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "trm-11-teaching-ebp-governance",
    unit: "Unit 5 · Teaching, Evidence & Quality",
    title: "Teaching, Health Education, Evidence-Based Practice & Clinical Governance",
    readMinutes: 18,
    summary: "The midwife as teacher and health educator, principles of adult learning and effective teaching, planning and delivering health education, evidence-based practice and its steps, clinical governance and its pillars, and audit and quality/risk management as ways to improve and assure the safety of maternity care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The midwife as teacher and health educator", p: "Teaching is a core midwifery role. The midwife teaches women and families (health education — for example on breastfeeding, danger signs, nutrition and family planning), teaches students and junior colleagues, and shares knowledge in the team. Effective teaching improves self-care, promotes health and prevents complications, and is part of the DM333 emphasis on effective teaching within midwifery practice." },
      { h: "Principles of adult learning", list: [
        "Adults are self-directed and bring their own experience.",
        "Learning must be relevant, practical and problem-centred.",
        "Adults need to understand why they are learning something.",
        "Respect, a safe environment and active participation aid learning.",
        "Feedback and the chance to practise consolidate learning."
      ] },
      { h: "Planning and delivering health education", list: [
        "Assess the woman's/family's learning needs, prior knowledge and language.",
        "Set clear, realistic objectives (what she should know/do afterwards).",
        "Choose suitable methods — discussion, demonstration, teach-back, visual aids.",
        "Use simple, culturally appropriate language and check understanding.",
        "Evaluate learning (e.g. teach-back) and reinforce key messages."
      ] },
      { h: "Evidence-based practice (EBP)", p: "Evidence-based practice means integrating the best available research evidence with the midwife's clinical expertise and the woman's values and preferences to make decisions about care. It ensures care is safe, effective and up to date rather than based only on tradition or habit.", figure: {
        caption: "Evidence-based practice integrates best research evidence, clinical expertise and the woman's values and preferences.",
        svg: '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Evidence-based practice three components."><circle cx="150" cy="90" r="70" fill="#FCE7F3" fill-opacity="0.7" stroke="#831843" stroke-width="2"/><circle cx="270" cy="90" r="70" fill="#FDF2F8" fill-opacity="0.7" stroke="#BE185D" stroke-width="2"/><circle cx="210" cy="160" r="70" fill="#FCE7F3" fill-opacity="0.6" stroke="#831843" stroke-width="2"/><text x="115" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Research</text><text x="115" y="85" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">evidence</text><text x="305" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Clinical</text><text x="305" y="85" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">expertise</text><text x="210" y="185" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Woman s values</text><text x="210" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">EBP</text></svg>'
      } },
      { h: "Steps of evidence-based practice", list: [
        "Ask — turn the clinical problem into a clear, answerable question.",
        "Acquire — search for the best available evidence.",
        "Appraise — critically evaluate the evidence for validity and relevance.",
        "Apply — integrate it with expertise and the woman's values in a decision.",
        "Assess — evaluate the outcome and reflect."
      ] },
      { h: "Clinical governance", p: "Clinical governance is the system through which health services are accountable for continuously improving the quality and safety of care. It provides the framework that makes quality everyone's responsibility.", list: [
        "Education, training and CPD.",
        "Clinical audit.",
        "Evidence-based practice and clinical effectiveness.",
        "Risk management and patient safety.",
        "Openness, learning from incidents and complaints.",
        "Patient/woman involvement and experience."
      ] },
      { h: "Clinical audit and the audit cycle", p: "Clinical audit checks whether care meets an agreed standard and drives improvement. The audit cycle is: set a standard → measure current practice against it → identify gaps → make changes → re-measure to confirm improvement (closing the loop). Audit turns 'we think care is good' into evidence and action." },
      { h: "Quality and risk management", list: [
        "Risk management identifies, assesses and reduces risks to women, newborns and staff.",
        "Incident reporting and 'near-miss' review help the service learn and prevent harm.",
        "Root-cause analysis explores why an incident happened, not who to blame.",
        "A 'just culture' encourages open reporting and learning rather than punishment.",
        "The goal is safer, higher-quality, continuously improving maternity care."
      ] }
    ],
    references: REF_TRM,
    examQuestions: [
      "Explain the midwife's role as a teacher and health educator.",
      "Describe the principles of adult learning and how they guide health education.",
      "Define evidence-based practice and outline its main steps.",
      "Describe clinical governance and its main pillars.",
      "Explain the clinical audit cycle and the role of risk management in improving maternity care."
    ],
    assessment: [
      { type: "mcq", q: "Evidence-based practice integrates best research evidence, clinical expertise and:", options: ["The woman's values and preferences", "The cheapest option", "Only tradition", "The manager's opinion"], answer: 0, rationale: "EBP combines research evidence, clinical expertise and the woman's values/preferences." },
      { type: "mcq", q: "A key principle of adult learning is that adults:", options: ["Learn best without any relevance", "Are self-directed and learn best when content is relevant and practical", "Cannot use their experience", "Do not need to know why they learn"], answer: 1, rationale: "Adults are self-directed and learn best with relevant, practical, experience-based content." },
      { type: "mcq", q: "'Teach-back' is used in health education to:", options: ["Test the midwife", "Save time by skipping teaching", "Check the woman's understanding by asking her to explain it back", "Punish the woman"], answer: 2, rationale: "Teach-back checks understanding by having the learner explain the information back." },
      { type: "mcq", q: "The correct order of the EBP steps is:", options: ["Apply → Ask → Acquire", "Ask → Acquire → Appraise → Apply → Assess", "Assess → Apply → Ask", "Acquire → Assess → Ask"], answer: 1, rationale: "EBP follows Ask, Acquire, Appraise, Apply, Assess." },
      { type: "mcq", q: "Clinical governance is BEST described as:", options: ["A payroll system", "The framework for continuously improving the quality and safety of care", "A cleaning schedule", "A drug company"], answer: 1, rationale: "Clinical governance is the system for continuous improvement of quality and safety." },
      { type: "mcq", q: "Which is a pillar of clinical governance?", options: ["Ignoring incidents", "Clinical audit", "Hiding complaints", "Avoiding training"], answer: 1, rationale: "Clinical audit is a core pillar of clinical governance." },
      { type: "mcq", q: "The clinical audit cycle is completed ('the loop is closed') when the team:", options: ["Sets a standard only", "Re-measures practice after making changes to confirm improvement", "Stops after finding a gap", "Never measures anything"], answer: 1, rationale: "Closing the audit loop means re-measuring after change to confirm improvement." },
      { type: "mcq", q: "Root-cause analysis after an incident focuses on:", options: ["Who to punish", "Why the incident happened so it can be prevented", "Hiding the event", "Blaming the woman"], answer: 1, rationale: "Root-cause analysis seeks the underlying causes to prevent recurrence, not to assign blame." },
      { type: "mcq", q: "A 'just culture' in a maternity unit encourages:", options: ["Punishing all errors harshly", "Open reporting and learning from incidents", "Hiding near-misses", "Silence about mistakes"], answer: 1, rationale: "A just culture supports open reporting and learning rather than blame." },
      { type: "mcq", q: "The overall aim of quality and risk management in maternity care is:", options: ["More paperwork for its own sake", "Fewer records", "Blaming staff", "Safer, higher-quality, continuously improving care"], answer: 3, rationale: "The aim is safer, continuously improving, higher-quality care." }
      , { type: "fill", q: "Integrating best research evidence, clinical expertise and the woman's values is called ____-based practice.", accept: ["evidence"], rationale: "This is evidence-based practice." },
      { type: "fill", q: "Checking whether care meets an agreed standard and driving improvement is called clinical ____.", accept: ["audit"], rationale: "This describes clinical audit." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "trm-12-cpd-exam-preparation",
    unit: "Unit 5 · Teaching, Evidence & Quality",
    title: "Continuing Professional Development, Lifelong Learning & Preparing for the National Examination",
    readMinutes: 17,
    summary: "The meaning and importance of continuing professional development (CPD) and lifelong learning, methods of CPD and recording it, self-care, professional boundaries and preventing burnout, and practical strategies for revising and preparing for the National midwifery registration/licensing examination.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is continuing professional development (CPD)?", p: "Continuing professional development (CPD) is the ongoing, planned learning a midwife undertakes throughout her career to keep her knowledge, skills and competence up to date. It is a professional and regulatory requirement: because evidence and practice change, a midwife who does not keep learning becomes unsafe. CPD is part of maintaining fitness to practise and renewing registration." },
      { h: "Why lifelong learning matters", list: [
        "Evidence, guidelines, drugs and technology change over time.",
        "It maintains and improves competence and confidence.",
        "It is required to renew registration and remain fit to practise.",
        "It improves the safety and quality of care for women and newborns.",
        "It supports career development and professional satisfaction."
      ] },
      { h: "Methods of CPD", list: [
        "Formal study — courses, study days, workshops and higher qualifications.",
        "Skills updates and simulation (e.g. emergency drills, neonatal resuscitation).",
        "Reading journals, guidelines and textbooks; online learning.",
        "Reflective practice and learning from clinical experience and audit.",
        "Mentoring, teaching others, and attending professional meetings.",
        "Recording all CPD as evidence in the professional portfolio."
      ] },
      { h: "Self-care, boundaries and preventing burnout", p: "Sustaining a long career requires looking after oneself. Burnout — emotional exhaustion, detachment and reduced sense of accomplishment — threatens both the midwife's wellbeing and safe care. Maintaining professional boundaries (a caring but appropriate relationship with women, not over-involvement), taking rest and leave, seeking peer support and debriefing after critical incidents, and asking for help early all protect wellbeing and, ultimately, patient safety.", figure: {
        caption: "Lifelong professional growth: registration is the beginning, sustained by ongoing CPD, reflection and self-care.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lifelong CPD cycle."><defs><marker id="trmArr12" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="50" width="120" height="50" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="75" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Registration</text><rect x="165" y="50" width="120" height="50" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="225" y="73" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">CPD &amp;</text><text x="225" y="89" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">reflection</text><rect x="315" y="50" width="120" height="50" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="375" y="73" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Renew &amp;</text><text x="375" y="89" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">improve</text><rect x="450" y="50" width="80" height="50" rx="9" fill="#FDF2F8" stroke="#15803D" stroke-width="2"/><text x="490" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">Safe</text><text x="490" y="89" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">care</text><line x1="135" y1="75" x2="161" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#trmArr12)"/><line x1="285" y1="75" x2="311" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#trmArr12)"/><line x1="435" y1="75" x2="446" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#trmArr12)"/></svg>'
      } },
      { h: "The National registration/licensing examination", p: "DM333 synthesises learning from all earlier courses in readiness for the National midwifery examination — the final assessment before registration. It confirms that the graduate can practise safely and competently, and it may include written, oral and practical/clinical components. A mock final examination is used during the course to prepare students." },
      { h: "How to prepare and revise effectively", list: [
        "Start early and make a realistic revision timetable covering all subjects.",
        "Use the syllabus and competencies as a checklist of what to cover.",
        "Practise past questions and mock examinations under timed conditions.",
        "Use active methods — self-testing, teaching a peer, summarising, spaced repetition.",
        "Revise skills as well as theory (OSCE-style practical stations).",
        "Rest, sleep and manage exam anxiety; look after physical and mental health."
      ] },
      { h: "On the day and safe practice mindset", list: [
        "Read each question carefully; manage time across all questions.",
        "In clinical/oral stations, think aloud safely: assess, act, communicate, refer.",
        "Always demonstrate the safety principles — consent, infection control, recognising danger signs and referral.",
        "Answer as a safe, accountable midwife would practise, not just to 'pass'."
      ] },
      { h: "Beyond the exam — a professional for life", p: "Passing the examination is the start, not the end, of professional learning. The registered midwife commits to lifelong learning, reflection, CPD and self-care so that, throughout her career, she continues to provide safe, respectful, evidence-based, woman-centred care." }
    ],
    references: REF_TRM,
    examQuestions: [
      "Define continuing professional development (CPD) and explain why it is a professional requirement.",
      "Describe the methods a midwife can use for CPD and how they are recorded.",
      "Explain burnout and the strategies (including professional boundaries and self-care) that prevent it.",
      "Describe effective strategies for revising and preparing for the National midwifery examination.",
      "Explain why registration is the beginning rather than the end of a midwife's learning."
    ],
    assessment: [
      { type: "mcq", q: "Continuing professional development (CPD) is:", options: ["Ongoing, planned learning throughout the career to stay competent", "A one-off event at graduation", "Only for managers", "Optional and never checked"], answer: 0, rationale: "CPD is ongoing, planned lifelong learning required to maintain competence and registration." },
      { type: "mcq", q: "A key reason lifelong learning matters is that:", options: ["Evidence and practice never change", "Evidence, guidelines and technology change over time", "Once qualified, no further learning is needed", "It has no effect on care"], answer: 1, rationale: "Because knowledge and practice change, ongoing learning is essential to remain safe." },
      { type: "mcq", q: "Which is a valid method of CPD?", options: ["Ignoring new guidelines", "Attending study days, reflection and skills updates", "Avoiding journals", "Never attending meetings"], answer: 1, rationale: "Study days, reflection, reading and skills updates are all legitimate CPD methods." },
      { type: "mcq", q: "Burnout in a midwife is characterised by:", options: ["Increased energy and joy", "Better sleep", "Emotional exhaustion, detachment and reduced accomplishment", "No effect on care"], answer: 2, rationale: "Burnout involves emotional exhaustion, detachment and a reduced sense of accomplishment." },
      { type: "mcq", q: "Maintaining professional boundaries means:", options: ["Being cold and uncaring", "A caring but appropriate relationship, avoiding over-involvement", "Refusing to speak to women", "Becoming personally over-involved"], answer: 1, rationale: "Professional boundaries keep the relationship caring yet appropriate, avoiding over-involvement." },
      { type: "mcq", q: "A helpful self-care strategy after a critical incident is:", options: ["Suppressing all feelings", "Debriefing and seeking peer support", "Working extra shifts immediately", "Never discussing it"], answer: 1, rationale: "Debriefing and peer support help the midwife process critical incidents safely." },
      { type: "mcq", q: "DM333 prepares students specifically for the:", options: ["Driving test", "National midwifery registration/licensing examination", "Annual sports event", "Library exam"], answer: 1, rationale: "The course synthesises learning in readiness for the National midwifery examination." },
      { type: "mcq", q: "An effective revision strategy is to:", options: ["Cram everything the night before", "Start early, use a timetable and practise past questions and mocks", "Only read passively once", "Avoid all practice questions"], answer: 1, rationale: "Early planning, timetabling and active practice with past/mock questions are effective." },
      { type: "mcq", q: "In a clinical/oral examination station, the midwife should always demonstrate:", options: ["Only theory", "Safety principles — consent, infection control, recognising danger signs and referral", "How fast she can talk", "Memorised page numbers"], answer: 1, rationale: "Stations should show safe practice: consent, infection control, recognising danger signs and referral." },
      { type: "mcq", q: "Passing the National examination should be regarded as:", options: ["The end of all learning", "A reason to stop reflecting", "Permission to ignore CPD", "The beginning of lifelong professional learning"], answer: 3, rationale: "Registration is the start of a career of lifelong learning, reflection and CPD." }
      , { type: "fill", q: "Ongoing, planned learning throughout a midwife's career to maintain competence is called ____.", accept: ["cpd", "continuing professional development"], rationale: "This is continuing professional development (CPD)." },
      { type: "fill", q: "Emotional exhaustion, detachment and a reduced sense of accomplishment describe ____.", accept: ["burnout"], rationale: "These are the features of burnout." }
    ]
  }
];
