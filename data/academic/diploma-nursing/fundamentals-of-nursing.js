/* ============================================================
   Diploma in Nursing · D135 Fundamentals of Nursing — 20 topics.
   The core professional subject. Topics 1-5 authored; 6-20 are
   structured placeholders. Content original, grounded in:
     • Potter PA, Perry AG, Stockert P, Hall A. Fundamentals of Nursing. Elsevier.
     • Berman A, Snyder S, Frandsen G. Kozier & Erb's Fundamentals of Nursing. Pearson.
     • Basavanthappa BT. Fundamentals of Nursing. Jaypee.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_FON = [
  "Potter PA, Perry AG, Stockert P, Hall A. Fundamentals of Nursing. Elsevier.",
  "Berman A, Snyder S, Frandsen G. Kozier & Erb's Fundamentals of Nursing. Pearson.",
  "Basavanthappa BT. Fundamentals of Nursing. Jaypee Brothers."
];

window.Academic.topics["diploma-nursing/fundamentals-of-nursing"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "fon-01-introduction",
    unit: "Unit 1 · Foundations of Nursing",
    title: "Introduction to Nursing",
    readMinutes: 19,
    summary: "The meaning and history of nursing, Florence Nightingale, nursing as a profession, the roles and functions of the nurse, qualities of a good nurse, and the health-care team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is nursing?", p: "Nursing is the art and science of caring for individuals, families and communities to promote, maintain and restore health, and to support a peaceful death. A widely used definition by Virginia Henderson describes the unique function of the nurse as 'to assist the individual, sick or well, in the performance of those activities contributing to health or its recovery (or to a peaceful death) that they would perform unaided if they had the necessary strength, will or knowledge.' Nursing combines compassionate care with scientific knowledge." },
      { h: "A brief history of nursing", p: "Caring for the sick is as old as humanity, but modern professional nursing began in the 19th century. Earlier, care was often given in the home or by religious orders. The transformation into a trained, respected profession is credited largely to Florence Nightingale." },
      { h: "Florence Nightingale", p: "Florence Nightingale (1820-1910) is regarded as the founder of modern nursing. During the Crimean War she dramatically reduced soldier deaths by improving hygiene, sanitation, nutrition and ventilation — earning the name 'the Lady with the Lamp' for her night rounds. She founded the first scientific nursing school (at St Thomas' Hospital, London), wrote 'Notes on Nursing', and emphasised the influence of the environment on recovery. International Nurses Day is held on her birthday, 12 May." },
      { h: "Nursing as a profession", p: "Nursing is a profession because it has the defining features of one: a specialised body of knowledge, formal and continuing education, a code of ethics, a spirit of service to society, standards of practice, accountability, and a degree of autonomy. In Bangladesh, nursing education and practice are regulated by the Bangladesh Nursing and Midwifery Council (BNMC)." },
      { h: "Roles and functions of the nurse", list: [
        "Caregiver — provides direct, holistic care for physical, emotional and social needs.",
        "Communicator — exchanges information with patients, families and the health team.",
        "Teacher / health educator — explains care and promotes healthy behaviour.",
        "Advocate — protects the patient's rights and acts in their best interest.",
        "Counsellor — supports patients coping with illness and change.",
        "Manager / coordinator — organises and delegates care.",
        "Researcher — uses and contributes to evidence for better practice."
      ] },
      { h: "Qualities of a good nurse", p: "Effective nurses combine professional knowledge and skill with personal qualities: empathy and compassion, honesty and integrity, patience, good communication, reliability, observation, a caring attitude, physical and emotional stamina, and respect for the dignity of every patient regardless of background." },
      { h: "The health-care team", p: "Nurses work within a multidisciplinary team that may include doctors, pharmacists, physiotherapists, dietitians, laboratory and radiology staff, social workers, and support workers. Good teamwork and clear communication among members are essential for safe, coordinated patient care, with the nurse often coordinating the patient's day-to-day care." }
    ],
    references: REF_FON,
    examQuestions: [
      "Define nursing and state Virginia Henderson's definition.",
      "Describe the contribution of Florence Nightingale to modern nursing.",
      "List the characteristics that make nursing a profession.",
      "Describe any five roles of the nurse.",
      "List the qualities of a good nurse and name the members of the health-care team."
    ],
    assessment: [
      { type: "mcq", q: "The founder of modern nursing is:", options: ["Florence Nightingale", "Virginia Henderson", "Clara Barton", "Mother Teresa"], answer: 0, rationale: "Florence Nightingale is regarded as the founder of modern professional nursing." },
      { type: "mcq", q: "Florence Nightingale became famous for her work during the:", options: ["First World War", "American Civil War", "Crimean War", "Second World War"], answer: 2, rationale: "She reformed care for soldiers during the Crimean War (1850s)." },
      { type: "mcq", q: "International Nurses Day is celebrated on:", options: ["8 March", "5 December", "1 July", "12 May"], answer: 3, rationale: "It is held on 12 May, Florence Nightingale's birthday." },
      { type: "mcq", q: "When a nurse protects a patient's rights and acts in their best interest, she is acting as a/an:", options: ["Teacher", "Advocate", "Manager", "Researcher"], answer: 1, rationale: "Protecting patient rights and interests is the advocate role." },
      { type: "mcq", q: "Nursing education and practice in Bangladesh are regulated by the:", options: ["BNMC", "WHO", "ICN", "Red Crescent"], answer: 0, rationale: "The Bangladesh Nursing and Midwifery Council (BNMC) regulates nursing." },
      { type: "mcq", q: "The book 'Notes on Nursing' was written by:", options: ["Virginia Henderson", "Hildegard Peplau", "Florence Nightingale", "Dorothea Orem"], answer: 2, rationale: "Nightingale wrote 'Notes on Nursing', an early influential text." },
      { type: "mcq", q: "Which is a defining feature of a profession?", options: ["No special training", "No accountability", "Working alone only", "A specialised body of knowledge and a code of ethics"], answer: 3, rationale: "Professions have specialised knowledge, education, ethics, service and accountability." },
      { type: "mcq", q: "Teaching a patient about their medicines is the nurse's role as:", options: ["Advocate", "Health educator/teacher", "Counsellor", "Manager"], answer: 1, rationale: "Explaining care and promoting health is the teacher/educator role." },
      { type: "mcq", q: "Nightingale's reforms in the Crimea focused mainly on:", options: ["Hygiene, sanitation and ventilation", "Surgery techniques", "New medicines", "Military tactics"], answer: 0, rationale: "She improved sanitation, hygiene, nutrition and ventilation, cutting death rates." },
      { type: "mcq", q: "Working with doctors, pharmacists and physiotherapists for patient care is called ______ teamwork.", options: ["Single-discipline", "Independent", "Multidisciplinary", "Optional"], answer: 2, rationale: "Care is delivered by a multidisciplinary health-care team." },
      { type: "fill", q: "The nurse who speaks up for and protects a patient's rights is acting as an ______.", accept: ["advocate"], rationale: "Advocacy means protecting and promoting the patient's rights and interests." },
      { type: "fill", q: "Florence Nightingale was known as the 'Lady with the ______'.", accept: ["lamp"], rationale: "She was called the Lady with the Lamp for her night rounds in the Crimea." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "fon-02-nursing-process",
    unit: "Unit 1 · Foundations of Nursing",
    title: "The Nursing Process",
    readMinutes: 20,
    summary: "The five steps of the nursing process (assessment, diagnosis, planning, implementation, evaluation), priority-setting, and the principles of documentation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is the nursing process?", p: "The nursing process is a systematic, patient-centred, problem-solving method that guides nurses to give organised, individualised care. It has five steps, easily remembered as ADPIE: Assessment, Diagnosis, Planning, Implementation and Evaluation. The process is continuous and cyclical — evaluation feeds back into a new assessment.", figure: {
        caption: "Figure 2.1 — The five-step nursing process (ADPIE) is a continuous cycle.",
        svg: "<svg viewBox='0 0 620 90' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Nursing process'>" +
          "<defs><marker id='np2' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          ["Assessment","Diagnosis","Planning","Implementation","Evaluation"].map(function(t,i){var x=6+i*122;return "<rect x='"+x+"' y='28' width='110' height='38' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+55)+"' y='51' text-anchor='middle' font-family='Inter' font-size='10.5' font-weight='700' fill='#14387A'>"+t+"</text>"+(i<4?"<line x1='"+(x+110)+"' y1='47' x2='"+(x+122)+"' y2='47' stroke='#2E63B8' stroke-width='2' marker-end='url(#np2)'/>":"");}).join("") +
          "<path d='M571,66 L571,82 L61,82 L61,66' fill='none' stroke='#B85C5C' stroke-width='2' stroke-dasharray='5 4' marker-end='url(#np2)'/>" +
          "</svg>"
      } },
      { h: "Step 1 — Assessment", p: "Assessment is the systematic collection of information about the patient. Subjective data are what the patient tells you (symptoms, feelings, history); objective data are what you observe or measure (vital signs, appearance, test results). Data are gathered by interview, observation and physical examination, then validated and recorded. Good assessment is the foundation of all later steps." },
      { h: "Step 2 — Nursing diagnosis", p: "From the assessment data, the nurse identifies the patient's actual or potential health problems that nursing can treat — these are nursing diagnoses (e.g. 'risk of pressure injury', 'impaired mobility'). A nursing diagnosis differs from a medical diagnosis: the doctor diagnoses the disease (e.g. diabetes), while the nurse identifies the patient's responses and needs related to it." },
      { h: "Step 3 — Planning", p: "Planning sets priorities and goals and chooses nursing interventions. Priorities are often ordered using Maslow's hierarchy of needs — life-threatening physiological needs (airway, breathing, circulation) first, then safety, then higher needs. Goals should be specific, measurable and realistic with a time frame, and are set in partnership with the patient where possible." },
      { h: "Step 4 — Implementation", p: "Implementation is carrying out the planned nursing interventions — for example, giving medicines, repositioning, teaching, or assisting with hygiene. The nurse acts safely, involves the patient, may delegate appropriately, and records the care given and the patient's immediate response." },
      { h: "Step 5 — Evaluation", p: "Evaluation judges whether the goals have been met by comparing the patient's current status with the expected outcomes. If goals are met, the problem is resolved; if not, the plan is reviewed and changed. Because the patient's condition keeps changing, evaluation leads back to reassessment, making the process cyclical." },
      { h: "Documentation and reporting", p: "Everything assessed, planned, done and evaluated must be recorded. Good documentation is accurate, factual, complete, timely, legible and signed; it is never altered or falsified. Records communicate care to the whole team, provide legal evidence ('not documented = not done'), support continuity of care, and are kept confidential." },
      { h: "Why the nursing process matters", p: "The nursing process ensures care is individualised, organised, goal-directed and continuously evaluated rather than routine or haphazard. It also promotes the patient's participation and provides a clear structure for documentation and communication within the team." }
    ],
    references: REF_FON,
    examQuestions: [
      "Define the nursing process and list its five steps.",
      "Differentiate subjective and objective data with examples.",
      "Differentiate a nursing diagnosis from a medical diagnosis.",
      "How are priorities set during planning (Maslow's hierarchy)?",
      "State the principles of good nursing documentation."
    ],
    assessment: [
      { type: "mcq", q: "The five steps of the nursing process are remembered as:", options: ["SOAP", "ADPIE", "ABCDE", "PQRST"], answer: 1, rationale: "ADPIE = Assessment, Diagnosis, Planning, Implementation, Evaluation." },
      { type: "mcq", q: "The first step of the nursing process is:", options: ["Planning", "Assessment", "Evaluation", "Diagnosis"], answer: 1, rationale: "Assessment (data collection) is the first step and foundation of the process." },
      { type: "mcq", q: "Information the patient tells you about their symptoms is ______ data.", options: ["Objective", "Subjective", "Measured", "Laboratory"], answer: 1, rationale: "Subjective data are reported by the patient; objective data are observed/measured." },
      { type: "mcq", q: "A blood pressure reading of 150/95 mmHg is an example of ______ data.", options: ["Subjective", "Objective", "Historical", "Emotional"], answer: 1, rationale: "A measured value such as BP is objective data." },
      { type: "mcq", q: "'Risk of pressure injury' is an example of a:", options: ["Medical diagnosis", "Nursing diagnosis", "Goal", "Medical order"], answer: 1, rationale: "It describes a patient response/need that nursing addresses — a nursing diagnosis." },
      { type: "mcq", q: "When setting priorities, which need is addressed first (Maslow)?", options: ["Self-esteem", "Physiological needs (e.g. airway)", "Love and belonging", "Self-actualisation"], answer: 1, rationale: "Life-sustaining physiological needs take top priority." },
      { type: "mcq", q: "Carrying out the planned nursing interventions is the ______ step.", options: ["Assessment", "Planning", "Implementation", "Evaluation"], answer: 2, rationale: "Implementation is performing the planned care." },
      { type: "mcq", q: "Judging whether the patient's goals have been met occurs during:", options: ["Assessment", "Diagnosis", "Planning", "Evaluation"], answer: 3, rationale: "Evaluation compares outcomes with goals and guides reassessment." },
      { type: "mcq", q: "A principle of good documentation is that records should be:", options: ["Altered when convenient", "Accurate, factual and signed", "Written from memory days later", "Kept vague"], answer: 1, rationale: "Documentation must be accurate, factual, timely, legible and signed; never falsified." },
      { type: "mcq", q: "The legal principle regarding records states that care not documented is considered:", options: ["Already known", "Not done", "Optional", "Confidential only"], answer: 1, rationale: "'Not documented = not done' — undocumented care cannot be proven to have happened." },
      { type: "fill", q: "Data that the nurse observes or measures (e.g. temperature) are called ______ data.", accept: ["objective"], rationale: "Objective data are measurable/observable; subjective data are reported by the patient." },
      { type: "fill", q: "The hierarchy of needs used to set care priorities was proposed by ______.", accept: ["maslow"], rationale: "Maslow's hierarchy ranks physiological needs first." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "fon-03-communication",
    unit: "Unit 1 · Foundations of Nursing",
    title: "Communication & the Nurse-Patient Relationship",
    readMinutes: 19,
    summary: "The communication process, verbal and non-verbal communication, therapeutic techniques and barriers, the phases of the nurse-patient relationship, and communicating with special groups.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why communication matters", p: "Communication is the exchange of information, ideas and feelings, and it is central to every part of nursing — assessing patients, giving care, teaching, comforting and working in a team. Good communication builds trust, reduces anxiety, improves cooperation and prevents errors; poor communication is a major cause of mistakes and complaints." },
      { h: "The communication process", p: "Communication is a two-way process with several elements: a sender who has a message, the message itself, a channel (spoken word, writing, touch), a receiver who interprets it, and feedback that confirms understanding. 'Noise' — distractions, pain, language differences — can distort the message at any point.", figure: {
        caption: "Figure 3.1 — The communication process is a two-way loop with feedback.",
        svg: "<svg viewBox='0 0 560 110' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Communication process'>" +
          "<defs><marker id='cm3' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          [["Sender",20],["Message",210],["Receiver",400]].map(function(p,i){var x=p[1];return "<rect x='"+x+"' y='24' width='140' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+70)+"' y='49' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>"+p[0]+"</text>"+(i<2?"<line x1='"+(x+140)+"' y1='44' x2='"+(x+210)+"' y2='44' stroke='#2E63B8' stroke-width='2' marker-end='url(#cm3)'/>":"");}).join("") +
          "<path d='M470,64 L470,92 L90,92 L90,64' fill='none' stroke='#B85C5C' stroke-width='2' stroke-dasharray='5 4' marker-end='url(#cm3)'/><text x='280' y='106' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#B85C5C'>feedback</text>" +
          "</svg>"
      } },
      { h: "Verbal and non-verbal communication", p: "Verbal communication uses spoken or written words; it should be clear, simple and in the patient's language, avoiding jargon. Non-verbal communication — facial expression, eye contact, posture, gestures, touch and tone of voice — often carries more meaning than words and must match what is said. A warm, attentive manner reassures patients even before a word is spoken." },
      { h: "Therapeutic communication techniques", list: [
        "Active listening — giving full attention, facing the patient, not interrupting.",
        "Open-ended questions — inviting the patient to describe ('Tell me how you feel').",
        "Empathy — showing you understand the patient's feelings.",
        "Clarifying and paraphrasing — checking you have understood correctly.",
        "Silence — allowing the patient time to think and respond.",
        "Providing information — honestly and at the patient's level."
      ] },
      { h: "Barriers to communication", p: "Some responses block therapeutic communication and should be avoided: giving false reassurance ('Don't worry, you'll be fine'), being judgemental, giving unwanted advice, changing the subject, using jargon, and not listening. Physical barriers such as pain, noise, hearing loss, or language differences also hinder communication and must be managed (e.g. using an interpreter)." },
      { h: "The nurse-patient relationship", p: "The therapeutic nurse-patient relationship is professional, goal-directed and centred on the patient's needs. It typically passes through phases: the orientation phase (building trust and assessing needs), the working phase (carrying out care and helping the patient cope), and the termination phase (ending the relationship, e.g. at discharge, and summarising progress). Trust, respect, genuineness and confidentiality underpin it throughout." },
      { h: "Communicating with special groups", list: [
        "Children — use simple words, play and reassurance; involve the parents.",
        "Older adults — speak clearly, allow time, check hearing and vision.",
        "Unconscious patients — still speak to them, explain care, and use touch; hearing may persist.",
        "Patients who speak another language — use a trained interpreter, not just gestures."
      ] },
      { h: "Nursing relevance", p: "Skilled communication is itself a nursing intervention: it gathers accurate assessment data, gains consent and cooperation, teaches self-care, relieves fear, and ensures safe handovers between staff. Every nurse continually develops this core skill." }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the elements of the communication process.",
      "Differentiate verbal and non-verbal communication with examples.",
      "List five therapeutic communication techniques and three barriers.",
      "Describe the phases of the nurse-patient relationship.",
      "How should a nurse communicate with an unconscious patient and with a child?"
    ],
    assessment: [
      { type: "mcq", q: "Communication that uses facial expression, posture and touch is:", options: ["Verbal", "Non-verbal", "Written", "Electronic"], answer: 1, rationale: "Non-verbal communication conveys meaning without words." },
      { type: "mcq", q: "In the communication process, confirmation that the message was understood is the:", options: ["Channel", "Feedback", "Noise", "Sender"], answer: 1, rationale: "Feedback closes the loop, confirming the message was received and understood." },
      { type: "mcq", q: "Which is a therapeutic communication technique?", options: ["Giving false reassurance", "Active listening", "Being judgemental", "Changing the subject"], answer: 1, rationale: "Active listening is therapeutic; the others are barriers." },
      { type: "mcq", q: "Saying 'Don't worry, everything will be fine' is an example of:", options: ["Empathy", "False reassurance (a barrier)", "Active listening", "Clarifying"], answer: 1, rationale: "False reassurance dismisses feelings and blocks therapeutic communication." },
      { type: "mcq", q: "The first phase of the nurse-patient relationship is the:", options: ["Working phase", "Orientation phase", "Termination phase", "Evaluation phase"], answer: 1, rationale: "The orientation phase builds trust and assesses needs first." },
      { type: "mcq", q: "When caring for an unconscious patient, the nurse should:", options: ["Stay silent", "Still speak and explain care, as hearing may persist", "Avoid touch", "Communicate only with family"], answer: 1, rationale: "Hearing may be retained, so continue to speak to and reassure the patient." },
      { type: "mcq", q: "Open-ended questions are useful because they:", options: ["Can be answered yes/no", "Encourage the patient to describe their experience", "Save time only", "Avoid feelings"], answer: 1, rationale: "Open questions invite fuller, descriptive answers." },
      { type: "mcq", q: "To communicate with a patient who speaks another language, the nurse should ideally use:", options: ["Only gestures", "A trained interpreter", "Louder speech", "Family children to translate everything"], answer: 1, rationale: "A trained interpreter ensures accurate, confidential communication." },
      { type: "mcq", q: "Allowing a patient time to think without interrupting is the technique of:", options: ["Silence", "Advising", "Judging", "Reassuring"], answer: 0, rationale: "Purposeful silence gives the patient time to gather and express thoughts." },
      { type: "mcq", q: "The nurse-patient relationship should always be:", options: ["Social and personal", "Professional, goal-directed and confidential", "Brief and impersonal", "Based on advice-giving"], answer: 1, rationale: "It is a professional, patient-centred, confidential therapeutic relationship." },
      { type: "fill", q: "Giving full attention to the patient without interrupting is called ______ listening.", accept: ["active"], rationale: "Active listening is a core therapeutic communication technique." },
      { type: "fill", q: "Showing that you understand and share the patient's feelings is called ______.", accept: ["empathy"], rationale: "Empathy is understanding the patient's feelings and conveying that understanding." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "fon-04-ethics",
    unit: "Unit 1 · Foundations of Nursing",
    title: "Nursing Ethics & Patient Rights",
    readMinutes: 18,
    summary: "Ethical principles in nursing, confidentiality and informed consent, patient rights, professional accountability and codes of conduct, and common ethical issues.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is nursing ethics?", p: "Ethics is the study of right and wrong conduct. Nursing ethics guides nurses to make good moral decisions and to protect patients, who are often vulnerable. Ethical practice rests on a set of agreed principles and professional codes." },
      { h: "Core ethical principles", list: [
        "Autonomy — respecting the patient's right to make their own informed decisions.",
        "Beneficence — doing good and acting in the patient's best interest.",
        "Non-maleficence — 'do no harm'; avoiding injury to the patient.",
        "Justice — treating patients fairly and equally, without discrimination.",
        "Veracity — being truthful.",
        "Fidelity — keeping promises and being faithful to commitments."
      ] },
      { h: "Confidentiality and privacy", p: "Nurses learn private information and must keep it confidential, sharing it only with those involved in the patient's care and only as needed. Privacy must also be protected during procedures (using screens, covering the patient). Breaching confidentiality damages trust and may be illegal, except where the law requires disclosure (e.g. certain notifiable situations)." },
      { h: "Informed consent", p: "Before any procedure or treatment, the patient has the right to give informed consent — agreeing voluntarily after being told, in language they understand, the nature, benefits, risks and alternatives of the procedure. Consent may be verbal, written or implied; the patient may refuse or withdraw consent at any time. Nurses ensure consent is obtained and the patient understands." },
      { h: "Patient rights", p: "Patients have recognised rights, often set out in a 'Patient's Bill of Rights': to respectful and safe care; to information about their condition and treatment; to give or refuse consent; to privacy and confidentiality; to dignity; to make a complaint; and to be treated without discrimination. The nurse, as advocate, helps protect these rights." },
      { h: "Accountability and professional conduct", p: "Accountability means the nurse is answerable for their own actions and omissions. Nurses practise only within their competence, follow standards and protocols, keep accurate records, report errors honestly, and maintain professional behaviour. Professional codes — such as the ICN Code of Ethics for Nurses and the BNMC code of conduct — set out these duties." },
      { h: "Common ethical issues", p: "Nurses meet ethical challenges such as truth-telling versus protecting a patient from bad news, respecting refusal of treatment, end-of-life decisions, resource limitations, and confidentiality dilemmas. These are approached by applying ethical principles, the professional code, good communication, and, where needed, discussion with the team or an ethics committee." },
      { h: "Nursing relevance", p: "Applying ethics every day means gaining proper consent, guarding confidentiality and dignity, treating all patients fairly, telling the truth, working within competence, and advocating for patients who cannot speak for themselves — the foundation of trustworthy, safe nursing." }
    ],
    references: REF_FON,
    examQuestions: [
      "Define the core ethical principles in nursing.",
      "What is informed consent and what must the patient be told?",
      "Why is confidentiality important, and when may information be shared?",
      "List the main patient rights.",
      "What is accountability in nursing practice?"
    ],
    assessment: [
      { type: "mcq", q: "Respecting a patient's right to make their own decisions is the principle of:", options: ["Beneficence", "Autonomy", "Justice", "Fidelity"], answer: 1, rationale: "Autonomy is respect for the patient's self-determination." },
      { type: "mcq", q: "The principle 'do no harm' is called:", options: ["Beneficence", "Non-maleficence", "Veracity", "Autonomy"], answer: 1, rationale: "Non-maleficence means avoiding harm to the patient." },
      { type: "mcq", q: "Treating all patients fairly and without discrimination is:", options: ["Justice", "Fidelity", "Veracity", "Autonomy"], answer: 0, rationale: "Justice is fairness and equal treatment." },
      { type: "mcq", q: "Informed consent must be:", options: ["Forced", "Given voluntarily after the patient is properly informed", "Given by the nurse", "Permanent and unchangeable"], answer: 1, rationale: "Consent must be voluntary, informed, and may be refused or withdrawn at any time." },
      { type: "mcq", q: "Keeping a patient's information private and sharing it only as needed for care is:", options: ["Negligence", "Confidentiality", "Advocacy", "Autonomy"], answer: 1, rationale: "Confidentiality protects private patient information." },
      { type: "mcq", q: "Being truthful with patients reflects the principle of:", options: ["Veracity", "Justice", "Non-maleficence", "Fidelity"], answer: 0, rationale: "Veracity is truthfulness." },
      { type: "mcq", q: "Being answerable for one's own nursing actions is called:", options: ["Delegation", "Accountability", "Autonomy", "Advocacy"], answer: 1, rationale: "Accountability means the nurse is responsible for their actions and omissions." },
      { type: "mcq", q: "During a procedure, using a screen and covering the patient protects their:", options: ["Autonomy", "Privacy and dignity", "Consent", "Justice"], answer: 1, rationale: "Screening and covering protect the patient's privacy and dignity." },
      { type: "mcq", q: "An international code guiding nursing ethics is the:", options: ["ICN Code of Ethics for Nurses", "Highway Code", "ISO 9001", "Geneva Convention"], answer: 0, rationale: "The ICN Code of Ethics for Nurses guides professional conduct." },
      { type: "mcq", q: "A patient who understands the risks decides to refuse a treatment. The nurse should:", options: ["Force the treatment", "Respect the decision and inform the team", "Ignore the patient", "Document nothing"], answer: 1, rationale: "Autonomy means a competent, informed patient may refuse treatment; document and inform the team." },
      { type: "fill", q: "The ethical principle of acting in the patient's best interest (doing good) is ______.", accept: ["beneficence"], rationale: "Beneficence is acting for the patient's benefit." },
      { type: "fill", q: "Voluntary agreement to a procedure after being fully informed is called informed ______.", accept: ["consent"], rationale: "Informed consent is required before procedures and treatment." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "fon-05-admission-environment",
    unit: "Unit 2 · Patient Care & Safe Environment",
    title: "Hospital Environment, Admission, Transfer & Discharge",
    readMinutes: 18,
    summary: "The therapeutic hospital environment and patient unit, and the procedures and nursing care for admission, transfer and discharge of a patient.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The therapeutic environment", p: "A therapeutic (healing) environment is safe, clean, comfortable and supportive of recovery. Important features include adequate ventilation and lighting, comfortable temperature, control of noise, cleanliness and infection control, privacy, and a calm, caring atmosphere. Nightingale stressed that a good environment helps the body heal itself." },
      { h: "The patient unit", p: "The patient unit is the bed and the immediate area and equipment assigned to one patient — the bed, bedside locker, over-bed table, chair, call bell, and often oxygen and suction points. It should be kept clean, tidy, safe and within the patient's reach, with the call bell always accessible." },
      { h: "Admission of a patient", p: "Admission is the patient's entry into the hospital ward. Good admission care reduces anxiety and starts safe care. Steps include: greeting and identifying the patient, orienting them to the ward (bed, toilet, call bell, routines), recording an admission assessment and vital signs, checking belongings and valuables, completing documentation, informing the doctor, and beginning the care plan." },
      { h: "Reducing admission anxiety", p: "Being admitted to hospital is stressful. The nurse helps by giving a warm welcome, explaining what will happen, answering questions, respecting culture and privacy, and involving the family appropriately. A good first impression builds the trust on which all later care depends." },
      { h: "Transfer of a patient", p: "Transfer is moving a patient from one unit, ward or hospital to another (for example, from the emergency department to a ward, or to intensive care). Safe transfer requires preparing the patient, ensuring stability, sending the records and medicines, communicating a clear handover to the receiving team, and documenting the transfer. Careful handover prevents information being lost." },
      { h: "Discharge of a patient", p: "Discharge is the patient's release from hospital. Discharge planning ideally begins at admission. It includes teaching the patient and family about medicines, diet, activity, wound or other care, and danger signs; arranging follow-up appointments; giving a discharge summary and any take-home medicines; and documenting. Some patients leave 'against medical advice', which is recorded with the risks explained." },
      { h: "Safety in the environment", p: "The nurse keeps the environment safe by preventing falls (clear floors, bed brakes on, bed at a safe height, call bell within reach), correctly identifying patients before care, following fire-safety rules, controlling infection, and safely managing equipment and waste. Patient safety is a continuous responsibility." },
      { h: "Nursing relevance", p: "Smooth admission, transfer and discharge — with clear communication and teaching — reduce anxiety, prevent errors and readmission, and support recovery at home. Maintaining a clean, safe, comfortable environment is fundamental nursing care for every patient." }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the features of a therapeutic hospital environment.",
      "What is the patient unit and what does it include?",
      "Describe the nursing procedure for admitting a patient.",
      "What is involved in the safe transfer of a patient?",
      "Describe discharge planning and patient teaching at discharge."
    ],
    assessment: [
      { type: "mcq", q: "A therapeutic environment should be:", options: ["Noisy and bright", "Safe, clean, comfortable and calm", "Cold and dark", "Crowded"], answer: 1, rationale: "A healing environment is safe, clean, comfortable, quiet and supportive of recovery." },
      { type: "mcq", q: "The 'patient unit' refers to:", options: ["The whole hospital", "The bed and immediate area/equipment of one patient", "The nurses' station", "The operating theatre"], answer: 1, rationale: "The patient unit is the bed and immediate furnishings/equipment for one patient." },
      { type: "mcq", q: "An essential item that must always be within the patient's reach is the:", options: ["Drug trolley", "Call bell", "X-ray machine", "Notes folder"], answer: 1, rationale: "The call bell must be accessible so the patient can summon help." },
      { type: "mcq", q: "On admission, the nurse should first:", options: ["Start IV fluids", "Greet, identify and orient the patient", "Discharge planning only", "Give medicines"], answer: 1, rationale: "Greeting, identifying and orienting the patient begins safe admission care." },
      { type: "mcq", q: "Discharge planning should ideally begin:", options: ["On the day of discharge", "At admission", "After discharge", "Only if requested"], answer: 1, rationale: "Discharge planning starts at admission for a smooth, safe transition home." },
      { type: "mcq", q: "When transferring a patient to another ward, it is essential to:", options: ["Send no records", "Give a clear handover and send records/medicines", "Skip documentation", "Move them without preparation"], answer: 1, rationale: "Safe transfer needs preparation, a clear handover and the records/medicines." },
      { type: "mcq", q: "A patient who leaves hospital against advice is recorded as discharged:", options: ["Routinely", "Against medical advice (AMA)", "On referral", "By transfer"], answer: 1, rationale: "Leaving against advice is documented as discharge against medical advice, with risks explained." },
      { type: "mcq", q: "To prevent falls, the nurse should:", options: ["Raise the bed high and remove the call bell", "Keep the floor clear, bed brakes on and call bell in reach", "Leave spills on the floor", "Dim all lights"], answer: 1, rationale: "Clear floors, locked bed brakes, safe bed height and an accessible call bell prevent falls." },
      { type: "mcq", q: "Discharge teaching should include all EXCEPT:", options: ["Medicines and diet", "Danger signs and follow-up", "Activity and wound care", "Other patients' details"], answer: 3, rationale: "Teaching covers the patient's own care; sharing other patients' details breaches confidentiality." },
      { type: "mcq", q: "Confirming you are caring for the correct patient is called patient:", options: ["Orientation", "Identification", "Transfer", "Discharge"], answer: 1, rationale: "Correct patient identification before care prevents errors." },
      { type: "fill", q: "Moving a patient from one ward or hospital to another is called ______.", accept: ["transfer"], rationale: "Transfer is relocating a patient between units or facilities." },
      { type: "fill", q: "Planning for a patient's safe release home should begin at ______.", accept: ["admission"], rationale: "Discharge planning ideally starts at admission." }
    ]
  },

  /* ---------- Placeholders: structured to the BNMC D135 syllabus ---------- */
  {
    id: "fon-06-person-health",
    unit: "Unit 2 · Patient Care & Safe Environment",
    title: "Person, Health, Illness & Basic Human Needs",
    readMinutes: 17,
    summary: "The person as a holistic being, basic human needs (Maslow), human rights, the meaning of health and illness, the health-illness continuum, and factors affecting health.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The person as a holistic being", p: "Nursing cares for the whole person, not just a disease. A person is a holistic being with interacting physical, psychological, social, cultural and spiritual dimensions; a problem in one affects the others. The person is also an active, self-determined being who has the right to take part in decisions about their own care." },
      { h: "Basic human needs", p: "All people share basic needs that must be met for health and wellbeing. Abraham Maslow arranged these as a hierarchy: lower, more urgent needs must be met before higher ones. Nurses use this to set care priorities — a patient who cannot breathe (a physiological need) is helped before their need for reassurance.", figure: {
        caption: "Figure 6.1 — Maslow's hierarchy of needs (most urgent at the base).",
        svg: "<svg viewBox='0 0 360 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Maslow hierarchy'>" +
          [["Physiological (air, food, water)","#2E63B8",300,176],["Safety & security","#3F86E0",240,146],["Love & belonging","#5C9BE6",180,116],["Self-esteem","#C99A50",120,86],["Self-actualisation","#16A34A",60,56]].map(function(p,i){var w=p[2];var y=p[3];var x=(360-w)/2;return "<rect x='"+x+"' y='"+y+"' width='"+w+"' height='28' rx='3' fill='"+p[1]+"'/><text x='180' y='"+(y+19)+"' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#fff'>"+p[0]+"</text>";}).join("") +
          "</svg>"
      } },
      { h: "Maslow's levels", list: [
        "Physiological — air, water, food, elimination, rest (the most urgent).",
        "Safety and security — a safe environment, freedom from harm and fear.",
        "Love and belonging — relationships, acceptance, family.",
        "Self-esteem — respect, dignity, recognition.",
        "Self-actualisation — reaching one's full potential."
      ] },
      { h: "Human and patient rights", p: "Every person has human rights that nursing must respect: the right to dignity, to safe and respectful care, to information and to take part in decisions, to privacy and confidentiality, and to be treated fairly without discrimination. Recognising the patient as a rights-holder is central to ethical care." },
      { h: "Environment", p: "The environment is everything around and within the person that affects health. It includes the internal environment (the body's own conditions, kept stable by homeostasis) and the external environment — physical (housing, water, sanitation, workplace) and social (family, culture, economy). Many illnesses arise from an unhealthy environment, which is why nursing also promotes safe surroundings." },
      { h: "Health and illness", p: "The World Health Organization defines health as 'a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity.' Illness is a state of poor functioning or distress. Rather than a simple either/or, health and illness form a health-illness continuum, with high-level wellness at one end and serious illness or death at the other; a person moves along it over time." },
      { h: "Human responses and factors affecting health", p: "People respond to illness in different ways (the 'sick role', illness behaviour, anxiety, denial or coping), influenced by personality, culture and support. Health itself is shaped by many determinants: heredity, lifestyle (diet, exercise, smoking), environment, income and education, and access to health care. Nurses assess these to give individualised, culturally sensitive care." },
      { h: "Nursing relevance", p: "Seeing the patient as a whole, rights-bearing person guides holistic, individualised care; Maslow's hierarchy guides priority-setting; and understanding the health-illness continuum and health determinants helps nurses promote health, prevent illness, and support people wherever they are on the continuum." }
    ],
    references: REF_FON,
    examQuestions: [
      "Explain what is meant by the person as a holistic being.",
      "Describe Maslow's hierarchy of needs and how nurses use it to set priorities.",
      "State the WHO definition of health and explain the health-illness continuum.",
      "List the basic human rights a nurse must respect.",
      "What factors (determinants) affect a person's health?"
    ],
    assessment: [
      { type: "mcq", q: "Caring for the whole person — body, mind, social and spiritual — is called ______ care.", options: ["Partial", "Holistic", "Medical", "Emergency"], answer: 1, rationale: "Holistic care addresses all interacting dimensions of the person." },
      { type: "mcq", q: "According to Maslow, which needs must be met first?", options: ["Self-esteem", "Love and belonging", "Physiological needs", "Self-actualisation"], answer: 2, rationale: "Physiological needs (air, food, water) are the most urgent and are met first." },
      { type: "mcq", q: "The WHO defines health as a state of complete physical, mental and ______ well-being.", options: ["financial", "social", "spiritual", "political"], answer: 1, rationale: "WHO: complete physical, mental and social well-being, not merely absence of disease." },
      { type: "mcq", q: "A patient who cannot breathe and also feels anxious should first be helped with:", options: ["Reassurance", "Breathing (a physiological need)", "Self-esteem", "Belonging"], answer: 1, rationale: "Airway/breathing is a physiological priority over higher needs." },
      { type: "mcq", q: "Health and illness are best viewed as:", options: ["A fixed either/or state", "A continuum a person moves along", "Unrelated to environment", "The same thing"], answer: 1, rationale: "The health-illness continuum ranges from high wellness to serious illness." },
      { type: "mcq", q: "Which is the second level of Maslow's hierarchy (just above physiological)?", options: ["Self-actualisation", "Safety and security", "Self-esteem", "Love and belonging"], answer: 1, rationale: "Safety and security needs come just above physiological needs." },
      { type: "mcq", q: "A person's right to have information kept private is the right to:", options: ["Mobility", "Confidentiality", "Nutrition", "Movement"], answer: 1, rationale: "Confidentiality protects the patient's private information." },
      { type: "mcq", q: "The body's own stable internal conditions are part of the ______ environment.", options: ["external", "internal", "social", "physical"], answer: 1, rationale: "The internal environment is maintained by homeostasis." },
      { type: "mcq", q: "Lifestyle, heredity, income and access to care are examples of:", options: ["Vital signs", "Determinants of health", "Nursing diagnoses", "Medications"], answer: 1, rationale: "These are determinants (factors) that affect health." },
      { type: "mcq", q: "Recognising the patient as a self-determined being supports their right to:", options: ["Be ignored", "Take part in decisions about their care", "Receive no information", "Be treated unfairly"], answer: 1, rationale: "Self-determination underpins the right to participate in care decisions (autonomy)." },
      { type: "fill", q: "The hierarchy of human needs used to set care priorities was proposed by ______.", accept: ["maslow"], rationale: "Maslow's hierarchy ranks physiological needs first." },
      { type: "fill", q: "Care that addresses the whole person — physical, mental, social and spiritual — is called ______ care.", accept: ["holistic"], rationale: "Holistic care treats the whole person, not just the disease." }
    ]
  },
  {
    id: "fon-07-vital-signs",
    unit: "Unit 2 · Patient Care & Safe Environment",
    title: "Vital Signs",
    readMinutes: 20,
    summary: "The measurement, normal ranges and abnormalities of temperature, pulse, respiration and blood pressure, plus pain as the fifth vital sign, and when and how to record them.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are vital signs?", p: "Vital signs are measurements of the body's most basic functions: temperature, pulse, respiration and blood pressure (TPR and BP). Pain is often called the fifth vital sign, and oxygen saturation (SpO2) is widely added. Because they change early when a patient deteriorates, vital signs are among the most important observations a nurse makes.", figure: {
        caption: "Figure 7.1 — Normal adult vital-sign ranges.",
        svg: "<svg viewBox='0 0 460 150' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Normal vital signs'>" +
          [["Temperature","36.5 - 37.5 C"],["Pulse","60 - 100 / min"],["Respiration","12 - 20 / min"],["Blood pressure","~120 / 80 mmHg"],["SpO2","95 - 100%"]].map(function(p,i){var y=12+i*27;return "<rect x='10' y='"+y+"' width='180' height='22' rx='4' fill='#E6ECF8' stroke='#2E63B8'/><text x='20' y='"+(y+15)+"' font-family='Inter' font-size='11' font-weight='700' fill='#14387A'>"+p[0]+"</text><text x='205' y='"+(y+15)+"' font-family='Inter' font-size='11' fill='#1F2A33'>"+p[1]+"</text>";}).join("") +
          "</svg>"
      } },
      { h: "Body temperature", p: "Temperature reflects the balance between heat produced and lost. The normal range is about 36.5-37.5 °C. It can be measured at the mouth (oral), armpit (axillary), ear (tympanic) or rectum (rectal — highest and most accurate). A temperature above normal is fever (pyrexia); a very high temperature is hyperpyrexia; a low temperature is hypothermia. Temperature is usually lowest in the early morning and highest in the evening." },
      { h: "Pulse", p: "The pulse is the wave felt over an artery each time the heart beats. The normal adult rate is 60-100 beats per minute. It is felt most commonly at the radial artery (wrist), and also at the carotid, brachial, femoral and other sites. The nurse notes the rate, rhythm (regular or irregular) and volume (strength). A fast rate is tachycardia (>100); a slow rate is bradycardia (<60)." },
      { h: "Respiration", p: "Respiration is breathing — one cycle is one inspiration plus one expiration. The normal adult rate is 12-20 breaths per minute. The nurse observes the rate, depth and rhythm, ideally without the patient knowing (so they breathe naturally). Fast breathing is tachypnoea, slow is bradypnoea, difficult or laboured breathing is dyspnoea, and absence of breathing is apnoea." },
      { h: "Blood pressure", p: "Blood pressure (BP) is the force of blood against the artery walls, written as systolic over diastolic (e.g. 120/80 mmHg). Systolic is the peak during heart contraction; diastolic is the lowest during relaxation. It is measured with a sphygmomanometer and stethoscope (or an automated device), with the correct cuff size and the arm at heart level. Persistently high BP is hypertension; low BP is hypotension." },
      { h: "Pain — the fifth vital sign", p: "Pain is assessed and recorded alongside the other vital signs because it strongly affects wellbeing and can signal a problem. It is rated using a pain scale (such as 0 = no pain to 10 = worst pain), and described by site, type, severity, timing and what makes it better or worse. Pain is whatever the patient says it is — believe and act on the patient's report." },
      { h: "When and how to record", p: "Vital signs are measured on admission, routinely as ordered, before and after procedures or medicines that affect them, and whenever the patient's condition changes. They must be recorded accurately and promptly on the chart, and any abnormal or rapidly changing value reported at once — abnormal vital signs are often the first warning of deterioration." },
      { h: "Nursing relevance", p: "Accurate vital signs guide diagnosis, monitoring and urgent decisions. Many hospitals use 'early warning scores' that add up vital-sign abnormalities to trigger a rapid response. Correct technique, correct equipment, comparison with the patient's normal, and prompt reporting are core nursing skills." }
    ],
    references: REF_FON,
    examQuestions: [
      "Name the vital signs and state the normal adult range of each.",
      "Describe the sites and methods for measuring body temperature.",
      "What does the nurse assess about the pulse, and define tachycardia and bradycardia.",
      "Describe how blood pressure is measured and define hypertension and hypotension.",
      "Why is pain called the fifth vital sign, and how is it assessed?"
    ],
    assessment: [
      { type: "mcq", q: "The normal adult body temperature range is about:", options: ["34-35 °C", "36.5-37.5 °C", "38-39 °C", "39-40 °C"], answer: 1, rationale: "Normal body temperature is approximately 36.5-37.5 °C." },
      { type: "mcq", q: "The normal adult resting pulse rate is:", options: ["40-60 bpm", "60-100 bpm", "100-140 bpm", "20-40 bpm"], answer: 1, rationale: "A normal adult pulse is 60-100 beats per minute." },
      { type: "mcq", q: "The normal adult respiratory rate is:", options: ["6-10 /min", "12-20 /min", "25-35 /min", "40-50 /min"], answer: 1, rationale: "Normal adult respiration is 12-20 breaths per minute." },
      { type: "mcq", q: "A normal adult blood pressure is approximately:", options: ["90/60 mmHg", "120/80 mmHg", "150/100 mmHg", "180/110 mmHg"], answer: 1, rationale: "Around 120/80 mmHg is the normal reference." },
      { type: "mcq", q: "A pulse rate above 100 beats per minute is called:", options: ["Bradycardia", "Tachycardia", "Apnoea", "Hypotension"], answer: 1, rationale: "Tachycardia is a fast heart rate (>100 bpm); bradycardia is slow (<60)." },
      { type: "mcq", q: "Fever (raised body temperature) is also called:", options: ["Hypothermia", "Pyrexia", "Apnoea", "Bradycardia"], answer: 1, rationale: "Pyrexia means fever; hypothermia is low temperature." },
      { type: "mcq", q: "The pulse is most commonly felt at the:", options: ["Radial artery (wrist)", "Aorta", "Jugular vein", "Femoral vein"], answer: 0, rationale: "The radial artery at the wrist is the usual site for the pulse." },
      { type: "mcq", q: "Difficult or laboured breathing is termed:", options: ["Apnoea", "Dyspnoea", "Bradypnoea", "Eupnoea"], answer: 1, rationale: "Dyspnoea is difficult/laboured breathing; apnoea is absence of breathing." },
      { type: "mcq", q: "In a blood pressure of 120/80 mmHg, 80 is the:", options: ["Systolic pressure", "Diastolic pressure", "Pulse pressure", "Mean pressure"], answer: 1, rationale: "The lower number (80) is the diastolic pressure." },
      { type: "mcq", q: "Pain is best assessed by:", options: ["The nurse's guess", "The patient's own report and a pain scale", "Blood pressure only", "Temperature"], answer: 1, rationale: "Pain is subjective — use the patient's report and a rating scale." },
      { type: "fill", q: "The instrument used to measure blood pressure is the ______.", accept: ["sphygmomanometer"], rationale: "The sphygmomanometer (with a cuff) measures blood pressure." },
      { type: "fill", q: "A respiratory rate below the normal range (slow breathing) is called ______.", accept: ["bradypnoea", "bradypnea"], rationale: "Bradypnoea is abnormally slow breathing." }
    ]
  },
  {
    id: "fon-08-infection",
    unit: "Unit 2 · Patient Care & Safe Environment",
    title: "Infection Prevention & Sterile Technique",
    readMinutes: 20,
    summary: "The chain of infection, medical and surgical asepsis, hand hygiene, personal protective equipment, sterile technique, isolation precautions, waste management and patient safety.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why infection control matters", p: "Patients in hospital are vulnerable to infection, and infections caught in hospital (healthcare-associated infections) cause serious harm and even death. Preventing the spread of micro-organisms is therefore one of the most important responsibilities of every nurse." },
      { h: "The chain of infection", p: "Infection spreads through a six-link 'chain'. Infection control works by breaking any link in this chain — for example, hand hygiene interrupts transmission, and covering a wound blocks the portal of entry.", figure: {
        caption: "Figure 8.1 — The chain of infection; breaking any link stops the spread.",
        svg: "<svg viewBox='0 0 700 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Chain of infection'>" +
          "<defs><marker id='ci8' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          ["Agent","Reservoir","Portal of exit","Transmission","Portal of entry","Susceptible host"].map(function(t,i){var x=4+i*116;return "<rect x='"+x+"' y='24' width='104' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+52)+"' y='48' text-anchor='middle' font-family='Inter' font-size='9.5' font-weight='700' fill='#14387A'>"+t+"</text>"+(i<5?"<line x1='"+(x+104)+"' y1='44' x2='"+(x+116)+"' y2='44' stroke='#2E63B8' stroke-width='2' marker-end='url(#ci8)'/>":"");}).join("") +
          "</svg>"
      } },
      { h: "The six links", list: [
        "Infectious agent — the microbe (bacterium, virus, fungus, parasite).",
        "Reservoir — where it lives (people, equipment, water, food).",
        "Portal of exit — how it leaves (secretions, blood, faeces, droplets).",
        "Mode of transmission — how it spreads (contact, droplet, airborne, vehicle, vector).",
        "Portal of entry — how it enters the next host (broken skin, mouth, airway, catheter).",
        "Susceptible host — a person who can be infected (the weak, ill or unimmunised)."
      ] },
      { h: "Asepsis: medical vs surgical", p: "Asepsis means being free from harmful microbes. Medical asepsis ('clean technique') reduces the number and spread of microbes — for example, hand washing, cleaning surfaces and using gloves. Surgical asepsis ('sterile technique') removes all microbes and spores from an area or object, and is used for invasive procedures such as surgery, urinary catheterisation and wound dressing." },
      { h: "Hand hygiene — the most important measure", p: "Hand hygiene is the single most effective way to prevent the spread of infection. Hands are washed with soap and water when visibly dirty or after using the toilet; an alcohol-based hand rub is used on visibly clean hands. The WHO describes 'five moments' for hand hygiene: before touching a patient, before a clean/aseptic task, after exposure to body fluids, after touching a patient, and after touching the patient's surroundings." },
      { h: "Personal protective equipment (PPE)", p: "PPE protects the nurse and the patient: gloves, aprons or gowns, masks, and eye protection, chosen according to the risk. It is put on (donned) before contact and taken off (doffed) and discarded carefully afterwards to avoid contamination, followed by hand hygiene. Sterile gloves are used for sterile (aseptic) procedures using a no-touch technique to keep the outside sterile." },
      { h: "Isolation and precautions", p: "Standard precautions are used for ALL patients (treating every body fluid as potentially infectious). Additional transmission-based precautions are used for specific infections: contact precautions (e.g. for resistant bacteria), droplet precautions (e.g. for influenza), and airborne precautions (e.g. for tuberculosis, needing a special mask and room). Infected patients may be isolated to protect others." },
      { h: "Waste, sterilisation and safety", p: "Healthcare waste is segregated — general waste, infectious waste, and sharps in a puncture-proof container (never recap needles). Equipment is cleaned then disinfected or sterilised (the autoclave uses pressurised steam). Patient safety also includes using bed rails and, when truly necessary and ordered, restraints — applied safely and for the shortest time, with the patient's dignity protected." },
      { h: "Nursing relevance", p: "Nurses prevent infection every shift: rigorous hand hygiene, correct PPE, aseptic technique for invasive procedures, safe sharps and waste handling, and following isolation precautions. These simple measures save lives." }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the six links in the chain of infection and how each can be broken.",
      "Differentiate medical asepsis and surgical asepsis with examples.",
      "Why is hand hygiene the most important infection-control measure? List the WHO five moments.",
      "List the items of PPE and the principles of using them.",
      "Differentiate standard and transmission-based precautions."
    ],
    assessment: [
      { type: "mcq", q: "The single most effective way to prevent the spread of infection is:", options: ["Wearing gloves only", "Hand hygiene", "Giving antibiotics", "Isolation only"], answer: 1, rationale: "Hand hygiene is the most effective infection-control measure." },
      { type: "mcq", q: "Which is NOT a link in the chain of infection?", options: ["Reservoir", "Portal of exit", "Susceptible host", "Blood pressure"], answer: 3, rationale: "The links are agent, reservoir, portal of exit, transmission, portal of entry and host." },
      { type: "mcq", q: "Sterile (surgical asepsis) technique aims to:", options: ["Reduce some microbes", "Remove all microbes and spores", "Clean the floor", "Lower temperature"], answer: 1, rationale: "Surgical asepsis removes all microbes and spores for invasive procedures." },
      { type: "mcq", q: "Hands that are visibly dirty should be cleaned with:", options: ["Alcohol rub only", "Soap and water", "Dry wiping", "Gloves"], answer: 1, rationale: "Visibly soiled hands need washing with soap and water; alcohol rub is for clean hands." },
      { type: "mcq", q: "Treating every patient's body fluids as potentially infectious is the basis of:", options: ["Airborne precautions", "Standard precautions", "Contact precautions only", "No precautions"], answer: 1, rationale: "Standard precautions apply to all patients and all body fluids." },
      { type: "mcq", q: "Tuberculosis spread by tiny particles in the air requires ______ precautions.", options: ["Contact", "Droplet", "Airborne", "Standard only"], answer: 2, rationale: "TB needs airborne precautions (special mask and room)." },
      { type: "mcq", q: "Used needles (sharps) should be:", options: ["Recapped and reused", "Placed in a puncture-proof sharps container", "Thrown in general waste", "Left on the trolley"], answer: 1, rationale: "Sharps go directly into a puncture-proof container; never recap needles." },
      { type: "mcq", q: "The autoclave sterilises equipment using:", options: ["Dry heat", "Pressurised steam (moist heat)", "Alcohol", "UV light"], answer: 1, rationale: "The autoclave uses pressurised steam (~121 °C)." },
      { type: "mcq", q: "After removing (doffing) gloves, the nurse should immediately:", options: ["Touch the patient", "Perform hand hygiene", "Recap a needle", "Reuse the gloves"], answer: 1, rationale: "Hand hygiene follows glove removal to remove any contamination." },
      { type: "mcq", q: "'Clean technique' that reduces the number and spread of microbes is:", options: ["Surgical asepsis", "Medical asepsis", "Sterilisation", "Disinfection of skin"], answer: 1, rationale: "Medical asepsis (clean technique) reduces microbe numbers and spread." },
      { type: "fill", q: "Interrupting any link of the chain of ______ stops the spread of disease.", accept: ["infection"], rationale: "Breaking a link in the chain of infection prevents transmission." },
      { type: "fill", q: "Equipment, gowns, gloves and masks worn to prevent infection are together called ______ (abbreviation).", accept: ["ppe", "personal protective equipment"], rationale: "PPE = personal protective equipment." }
    ]
  },
  {
    id: "fon-09-hygiene",
    unit: "Unit 2 · Patient Care & Safe Environment",
    title: "Personal Hygiene, Comfort & Bed Making",
    readMinutes: 19,
    summary: "The purposes and methods of personal hygiene care, pressure-area care, promoting comfort, rest and sleep, and the types and principles of bed making.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why hygiene care matters", p: "Helping a patient keep clean does far more than improve appearance. Good hygiene care promotes comfort and dignity, prevents infection, keeps the skin healthy, stimulates circulation, and gives the nurse a valuable chance to observe the patient's skin and overall condition and to build a relationship." },
      { h: "Types of hygiene care", list: [
        "Bathing — a bed bath for dependent patients, an assisted bath, or self-care with supervision.",
        "Oral (mouth) care — cleaning teeth/mouth, especially important for the unconscious and very ill.",
        "Hair care and shampooing — keeping hair clean and combed.",
        "Nail and hand/foot care — preventing injury and infection (with care in diabetes).",
        "Back care (back rub) — promotes comfort and circulation and relieves pressure.",
        "Eye, ear and nose care, and perineal care — gentle cleansing as needed."
      ], figure: { caption: "Figure 9.1 — Hygiene care and bed making. Add a labelled procedure image if available.", placeholder: true } },
      { h: "Pressure-area care", p: "Patients who cannot move freely are at risk of pressure injuries (bed sores) over bony areas such as the sacrum, heels and hips. The nurse prevents these by repositioning at least every 2 hours, keeping the skin clean and dry, relieving pressure (special mattresses), checking the skin for early non-blanching redness, and ensuring good nutrition and hydration." },
      { h: "Comfort, rest and sleep", p: "Comfort, rest and sleep are essential for healing. The nurse promotes them by relieving pain, providing a clean, quiet, well-ventilated environment, comfortable positioning and bedding, attending to hygiene and elimination needs, and reducing anxiety. Sleep can be disturbed by pain, noise, light, worry, an unfamiliar environment and frequent interruptions — which the nurse tries to minimise, especially at night." },
      { h: "Bed making — purpose and types", p: "A clean, comfortable, wrinkle-free bed supports rest, prevents pressure injuries and reduces infection. Common types are the unoccupied bed (closed when empty, open ready to receive a patient), the occupied bed (made while the patient is in it, for those who cannot get up), and special beds (such as the post-operative or 'recovery' bed prepared to receive a patient from theatre, or beds adapted for fracture or cardiac patients)." },
      { h: "Principles of bed making", list: [
        "Gather all linen first and perform hand hygiene.",
        "Keep linen clean, dry and free of wrinkles (wrinkles cause pressure injuries).",
        "Use good body mechanics and raise the bed to a safe working height.",
        "Avoid shaking linen (which spreads microbes); never let clean linen touch the floor or your uniform.",
        "Keep the patient comfortable, warm and covered, and the call bell within reach."
      ] },
      { h: "Nursing relevance", p: "Hygiene and bed making are everyday fundamental skills that protect skin, prevent infection and pressure injuries, promote comfort and rest, and uphold the patient's dignity — while giving the nurse repeated opportunities to assess the patient." }
    ],
    references: REF_FON,
    examQuestions: [
      "State the purposes of personal hygiene care.",
      "List the types of hygiene care a nurse provides.",
      "How are pressure injuries prevented?",
      "How can the nurse promote rest and sleep in hospital?",
      "Name the types of bed and state the principles of bed making."
    ],
    assessment: [
      { type: "mcq", q: "A main purpose of hygiene care, besides cleanliness, is to:", options: ["Prevent infection and observe the skin", "Increase infection", "Save time", "Avoid contact with the patient"], answer: 0, rationale: "Hygiene care prevents infection, maintains skin health and allows assessment." },
      { type: "mcq", q: "A bath given to a fully dependent patient in bed is a:", options: ["Shower", "Self bath", "Bed bath", "Sitz bath"], answer: 2, rationale: "A bed bath is given to patients who cannot wash themselves." },
      { type: "mcq", q: "To prevent pressure injuries, an immobile patient should be repositioned at least every:", options: ["8 hours", "24 hours", "12 hours", "2 hours"], answer: 3, rationale: "Two-hourly repositioning relieves pressure over bony areas." },
      { type: "mcq", q: "The earliest sign of a pressure injury is:", options: ["An open wound", "Non-blanching redness over a bony area", "Black eschar", "Yellow slough"], answer: 1, rationale: "Persistent non-blanching redness is the first (stage 1) sign." },
      { type: "mcq", q: "A bed made while the patient remains in it is an:", options: ["Occupied bed", "Unoccupied bed", "Closed bed", "Open bed"], answer: 0, rationale: "An occupied bed is made with the patient in it." },
      { type: "mcq", q: "Wrinkle-free bed linen is important because wrinkles can cause:", options: ["Faster healing", "Better sleep", "Pressure injuries", "Lower temperature"], answer: 2, rationale: "Wrinkles create pressure points that can lead to pressure injuries." },
      { type: "mcq", q: "Oral care is especially important for:", options: ["Active healthy patients", "No one", "Visitors", "Unconscious and very ill patients"], answer: 3, rationale: "Unconscious/very ill patients cannot maintain their own mouth care." },
      { type: "mcq", q: "Which commonly disturbs a hospital patient's sleep?", options: ["Quietness", "Noise, pain and frequent interruptions", "Darkness", "Comfortable bedding"], answer: 1, rationale: "Noise, pain, light and interruptions disturb sleep; nurses minimise these." },
      { type: "mcq", q: "Linen should not be shaken during bed making because it:", options: ["Spreads microbes into the air", "Wastes time", "Makes the bed neat", "Cools the room"], answer: 0, rationale: "Shaking linen disperses microbes; it should be handled gently." },
      { type: "mcq", q: "A bed prepared to receive a patient returning from the operating theatre is a:", options: ["Closed bed", "Occupied bed", "Post-operative (recovery) bed", "Fracture bed"], answer: 2, rationale: "The post-operative/recovery bed is prepared to receive a patient from theatre." },
      { type: "fill", q: "Pressure injuries are also commonly called ______ sores.", accept: ["bed", "pressure"], rationale: "Pressure injuries are also called bed sores or pressure sores." },
      { type: "fill", q: "A bony area at high risk of pressure injury when lying on the back is the ______.", accept: ["sacrum", "heel", "heels"], rationale: "The sacrum and heels are common pressure-injury sites when supine." }
    ]
  },
  {
    id: "fon-10-activity",
    unit: "Unit 2 · Patient Care & Safe Environment",
    title: "Body Mechanics, Activity & Exercise",
    readMinutes: 19,
    summary: "Principles of body mechanics, common patient positions and their uses, safe lifting and transferring, ambulation, range-of-motion exercise, and prevention of the complications of immobility.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Body mechanics", p: "Body mechanics is the efficient, coordinated and safe use of the body to move and lift. Using it correctly protects the nurse from injury (especially back injury) and the patient from harm. Key principles: keep a wide base of support (feet apart), bend the hips and knees not the back, keep the load close, use the strong leg muscles, avoid twisting (turn the feet), and get help or use equipment for heavy loads." },
      { h: "Patient positioning", p: "Patients are placed in different positions for comfort, treatment, examination and to prevent complications. The position is changed regularly for immobile patients.", figure: { caption: "Figure 10.1 — Common patient positions. Add a labelled image if available.", placeholder: true } },
      { h: "Common positions and their uses", list: [
        "Supine (dorsal) — lying flat on the back; for rest and many examinations.",
        "Prone — lying on the abdomen; rarely used, gives back access.",
        "Lateral (side-lying) — on the side; relieves pressure on the back.",
        "Fowler's / semi-Fowler's — head of bed raised 45-90° / 30-45°; eases breathing and feeding.",
        "Sims' (semi-prone) — for enemas and rectal examination.",
        "Lithotomy — on the back with legs raised in stirrups; for childbirth and pelvic exams.",
        "Trendelenburg — head lower than feet; sometimes used in shock."
      ] },
      { h: "Lifting and transferring", p: "Moving patients (for example, from bed to chair or trolley) is a common cause of nurse injury and patient falls. The nurse assesses the patient's weight and ability, explains the move, uses correct body mechanics, and uses aids such as slide sheets, transfer boards and hoists, or asks for help, rather than lifting manually. Locks/brakes are applied and the bed set to a safe height." },
      { h: "Ambulation and exercise", p: "Helping a patient to walk (ambulate) restores strength and independence and prevents the hazards of immobility. The nurse supports the patient safely, uses walking aids as needed, and watches for dizziness. Range-of-motion (ROM) exercises move the joints through their normal range — active (done by the patient) or passive (done for the patient who cannot move) — to keep joints mobile and prevent stiffness." },
      { h: "Complications of immobility", p: "Prolonged immobility harms nearly every system: pressure injuries (skin), deep vein thrombosis (circulation), chest infection/pneumonia (lungs), constipation (bowel), urinary stasis and infection, muscle wasting and joint contractures, and loss of independence and low mood. Prevention is far better than cure." },
      { h: "Preventing the hazards of immobility", list: [
        "Reposition regularly and relieve pressure to protect the skin.",
        "Encourage leg movement, early mobilisation and (as ordered) anti-clot measures to prevent DVT.",
        "Encourage deep breathing and coughing to prevent chest infection.",
        "Maintain fluids, fibre and toileting to prevent constipation and urinary problems.",
        "Use range-of-motion exercises to prevent muscle wasting and contractures."
      ] },
      { h: "Nursing relevance", p: "Safe moving and handling protects both nurse and patient; correct positioning aids treatment and comfort; and early mobilisation plus ROM exercises prevent the many serious complications of immobility — making activity and exercise a core part of fundamental care." }
    ],
    references: REF_FON,
    examQuestions: [
      "State the principles of correct body mechanics.",
      "Name five patient positions and a use for each.",
      "Describe safe technique for lifting and transferring a patient.",
      "Differentiate active and passive range-of-motion exercises.",
      "List the complications of immobility and how each is prevented."
    ],
    assessment: [
      { type: "mcq", q: "When lifting, the nurse should bend the:", options: ["Back", "Knees and hips", "Neck", "Wrists"], answer: 1, rationale: "Bending the knees and hips (not the back) uses the strong leg muscles and protects the spine." },
      { type: "mcq", q: "The position with the head of the bed raised 45-90° to ease breathing is:", options: ["Supine", "Prone", "Fowler's", "Sims'"], answer: 2, rationale: "Fowler's position raises the head of the bed and eases breathing." },
      { type: "mcq", q: "The side-lying position used to relieve pressure on the back is:", options: ["Supine", "Lateral", "Lithotomy", "Trendelenburg"], answer: 1, rationale: "The lateral (side-lying) position relieves pressure on the back." },
      { type: "mcq", q: "The lithotomy position is mainly used for:", options: ["Back massage", "Childbirth and pelvic examination", "Sleeping", "Feeding"], answer: 1, rationale: "Lithotomy (legs in stirrups) is used for childbirth and pelvic/perineal procedures." },
      { type: "mcq", q: "Exercises moving a patient's joints when they cannot move themselves are:", options: ["Active ROM", "Passive ROM", "Isometric only", "No exercise"], answer: 1, rationale: "Passive range-of-motion is done for the patient by the nurse." },
      { type: "mcq", q: "A serious circulatory complication of immobility is:", options: ["Deep vein thrombosis", "Fever", "Hypertension", "Goitre"], answer: 0, rationale: "Immobility predisposes to deep vein thrombosis (DVT)." },
      { type: "mcq", q: "To move a heavy patient safely, the nurse should:", options: ["Lift alone quickly", "Use aids/hoist or get help", "Twist at the waist", "Bend the back"], answer: 1, rationale: "Use mechanical aids or assistance rather than risky manual lifting." },
      { type: "mcq", q: "Deep breathing and coughing after immobility help prevent:", options: ["Constipation", "Chest infection (pneumonia)", "Pressure injury", "DVT"], answer: 1, rationale: "Deep breathing and coughing prevent pooling of secretions and chest infection." },
      { type: "mcq", q: "The Sims' position is used for:", options: ["Enemas and rectal examination", "Feeding", "Eye examination", "Walking"], answer: 0, rationale: "The semi-prone Sims' position is used for enemas and rectal procedures." },
      { type: "mcq", q: "A wide base of support when lifting means:", options: ["Feet together", "Feet apart", "Standing on tiptoe", "Sitting down"], answer: 1, rationale: "Feet apart gives a wide, stable base of support." },
      { type: "fill", q: "Helping a patient to walk is called ______.", accept: ["ambulation", "ambulating"], rationale: "Ambulation is assisting the patient to walk." },
      { type: "fill", q: "Range-of-motion exercises the patient performs without help are ______ ROM.", accept: ["active"], rationale: "Active ROM is done by the patient; passive ROM is done for them." }
    ]
  },
  {
    id: "fon-11-oxygenation",
    unit: "Unit 3 · Meeting Basic Human Needs",
    title: "Oxygenation & Respiratory Care",
    readMinutes: 18,
    summary: "Recognising hypoxia, oxygen-therapy devices and safety, positioning and breathing exercises, suctioning, and tracheostomy care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The need for oxygenation", p: "Every cell needs a constant supply of oxygen; even a few minutes without it damages the brain. Nurses help patients who cannot oxygenate well because of lung, heart or other illness. Signs of low oxygen (hypoxia) include restlessness or confusion, fast breathing and pulse, use of extra breathing muscles, and — a late sign — cyanosis (a bluish colour). A pulse oximeter (SpO2, normal 95-100%) monitors oxygen levels." },
      { h: "Oxygen therapy and devices", p: "Oxygen is given as a medicine, at a prescribed flow, to relieve hypoxia. Common devices are the nasal cannula (low flow, comfortable, lets the patient eat and talk), the simple face mask (moderate flow), the Venturi mask (a precise oxygen percentage) and the non-rebreather mask (high concentration for emergencies). Oxygen is humidified at higher flows to prevent drying of the airways.", figure: { caption: "Figure 11.1 — Oxygen-delivery devices (cannula, masks). Add a labelled image if available.", placeholder: true } },
      { h: "Oxygen safety", p: "Oxygen supports combustion, so it is a serious fire hazard: there must be no smoking, naked flames, sparks or oil/grease near it, and 'Oxygen in use' signs are displayed. The nurse checks the prescription and flow rate, the device fit, and the patient's response, and gives oxygen carefully (some patients with chronic lung disease need controlled low-dose oxygen)." },
      { h: "Positioning and breathing exercises", p: "Sitting the patient upright (Fowler's or the orthopnoeic position, leaning forward on a table) lets the lungs expand and eases breathing. The nurse also teaches deep breathing and coughing and may use incentive spirometry to expand the lungs and clear secretions, which helps prevent chest infection — especially after surgery or during immobility." },
      { h: "Suctioning", p: "When a patient cannot clear their own secretions, suction removes them from the mouth, nose/throat (naso-pharyngeal) or an artificial airway. Tracheal suction uses sterile (aseptic) technique. Key principles: explain to the patient, oxygenate before and after, apply suction only while withdrawing the catheter, limit each pass to about 10-15 seconds, and watch the oxygen level and pulse to avoid causing hypoxia." },
      { h: "Tracheostomy care", p: "A tracheostomy is an opening into the trachea through the neck with a tube to maintain the airway. Care includes keeping the tube and inner cannula clean and patent, suctioning secretions, cleaning the stoma with aseptic technique, humidifying inspired air, securing the tube, and watching for blockage or displacement (an emergency). Communication aids are provided as the patient cannot speak normally." },
      { h: "Nursing relevance", p: "Recognising hypoxia early, giving oxygen safely at the correct flow, positioning for easy breathing, teaching breathing exercises, and performing safe suction and tracheostomy care are core skills that keep the airway open and oxygen flowing — sometimes life-saving." }
    ],
    references: REF_FON,
    examQuestions: [
      "List the signs of hypoxia.",
      "Name the common oxygen-delivery devices and their uses.",
      "State the safety precautions for oxygen therapy.",
      "Describe the key principles of safe suctioning.",
      "Describe the nursing care of a patient with a tracheostomy."
    ],
    assessment: [
      { type: "mcq", q: "A late sign of hypoxia is:", options: ["Pink skin", "Cyanosis (bluish colour)", "Slow pulse", "Warm hands"], answer: 1, rationale: "Cyanosis is a late sign of low oxygen; earlier signs include restlessness and tachypnoea." },
      { type: "mcq", q: "A low-flow oxygen device that lets the patient eat and talk is the:", options: ["Non-rebreather mask", "Nasal cannula", "Venturi mask", "Tracheostomy"], answer: 1, rationale: "The nasal cannula delivers low-flow oxygen and is comfortable for eating/talking." },
      { type: "mcq", q: "The device giving the highest oxygen concentration for emergencies is the:", options: ["Nasal cannula", "Simple mask", "Non-rebreather mask", "Room air"], answer: 2, rationale: "The non-rebreather mask delivers a high oxygen concentration." },
      { type: "mcq", q: "A key oxygen-safety rule is:", options: ["Allow smoking nearby", "No flames, sparks or oil near oxygen", "Use grease on connections", "Cover warning signs"], answer: 1, rationale: "Oxygen supports combustion; keep flames, sparks and oil/grease away." },
      { type: "mcq", q: "During tracheal suction, each suction pass should last no more than about:", options: ["10-15 seconds", "1 minute", "3 minutes", "30 seconds always"], answer: 0, rationale: "Limit each pass to ~10-15 seconds and oxygenate before/after to avoid hypoxia." },
      { type: "mcq", q: "Suction should be applied:", options: ["While inserting the catheter", "Only while withdrawing the catheter", "Continuously for a minute", "Never"], answer: 1, rationale: "Apply suction only on withdrawal to limit mucosal trauma and oxygen loss." },
      { type: "mcq", q: "The best position to ease a breathless patient's breathing is:", options: ["Flat supine", "Upright (Fowler's/orthopnoeic)", "Prone", "Trendelenburg"], answer: 1, rationale: "Sitting upright lets the lungs expand and eases breathing." },
      { type: "mcq", q: "Normal oxygen saturation (SpO2) is:", options: ["75-85%", "85-90%", "95-100%", "60-70%"], answer: 2, rationale: "Normal SpO2 is 95-100%." },
      { type: "mcq", q: "Tracheal suctioning is performed using:", options: ["Clean technique", "Sterile (aseptic) technique", "No technique", "Bare hands"], answer: 1, rationale: "Tracheal suction uses sterile technique to avoid introducing infection." },
      { type: "mcq", q: "Deep breathing and coughing exercises mainly help to:", options: ["Raise blood pressure", "Expand lungs and clear secretions", "Lower temperature", "Increase appetite"], answer: 1, rationale: "They expand the lungs and clear secretions, preventing chest infection." },
      { type: "fill", q: "Low blood/tissue oxygen is called ______.", accept: ["hypoxia", "hypoxaemia", "hypoxemia"], rationale: "Hypoxia is deficient oxygen in the tissues." },
      { type: "fill", q: "An opening made into the trachea through the neck to maintain the airway is a ______.", accept: ["tracheostomy"], rationale: "A tracheostomy is a surgical airway through the neck into the trachea." }
    ]
  },
  {
    id: "fon-12-nutrition",
    unit: "Unit 3 · Meeting Basic Human Needs",
    title: "Nutrition & Hydration",
    readMinutes: 18,
    summary: "The importance of nutrition, balanced and therapeutic diets, assessing nutritional status, assisting with oral feeding, and nasogastric tube feeding.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why nutrition and hydration matter", p: "Good nutrition and adequate fluids are essential for energy, growth, repair, immunity and recovery from illness. Sick patients are at high risk of malnutrition and dehydration, which slow healing, weaken immunity and worsen outcomes. Meeting these basic needs is a fundamental nursing responsibility." },
      { h: "A balanced diet", p: "A balanced diet supplies the right amounts of the energy nutrients — carbohydrates (main energy), proteins (growth and repair) and fats (concentrated energy) — together with vitamins, minerals, fibre and water. Protein and vitamin C are especially important for wound healing, and iron and folate for making blood." },
      { h: "Therapeutic (special) diets", list: [
        "Soft / light diet — easy to chew and digest.",
        "Liquid diet — clear or full fluids, e.g. before/after some procedures.",
        "Diabetic diet — controlled carbohydrate.",
        "Low-salt diet — for heart and kidney disease and high blood pressure.",
        "High-protein / high-calorie diet — for healing and malnutrition.",
        "NPO ('nil by mouth') — nothing by mouth, e.g. before surgery or when swallowing is unsafe."
      ] },
      { h: "Assessing nutritional status", p: "The nurse assesses nutrition by history (appetite, intake, weight change, chewing/swallowing problems), physical signs (weight and height/BMI, muscle wasting, pale or dry skin), and relevant tests. Identifying poor intake early allows action such as encouraging food, providing supplements, or referral to a dietitian." },
      { h: "Assisting with oral feeding", p: "Patients who cannot feed themselves need help to eat safely and with dignity. The nurse prepares the patient (hygiene, toileting, positioning upright), offers appropriate food at a comfortable pace, encourages independence, and guards against choking and aspiration — sitting the patient up, giving small amounts, and not rushing. Special care is needed for the elderly, the weak and those with swallowing difficulty (dysphagia)." },
      { h: "Nasogastric (NG) tube feeding", p: "When a patient cannot eat by mouth but the gut works, feed is given through a nasogastric tube passed via the nose into the stomach (enteral feeding). The nurse inserts the tube gently, CONFIRMS it is in the stomach before each use (checking the aspirate's pH and following local policy), keeps the patient sitting up during and after feeding to prevent aspiration, gives the feed at the right rate and temperature, and flushes the tube. The tube and nostril are kept clean.", figure: { caption: "Figure 12.1 — Nasogastric tube feeding. Add a labelled image if available.", placeholder: true } },
      { h: "Hydration and monitoring", p: "The nurse encourages adequate fluids, watches for signs of dehydration (thirst, dry mouth, reduced/concentrated urine) or overload (oedema), keeps an accurate fluid-balance (intake-output) chart for at-risk patients, and reports concerns. Where oral fluids are not enough or possible, fluids may be given by NG tube or intravenously." },
      { h: "Nursing relevance", p: "Nurses protect nutrition and hydration by assessing risk, helping patients eat and drink safely, giving the correct therapeutic diet, performing safe NG feeding, and monitoring fluid balance — all central to recovery and to preventing serious complications such as aspiration and dehydration." }
    ],
    references: REF_FON,
    examQuestions: [
      "Why are nutrition and hydration important for a sick patient?",
      "Name five therapeutic diets and a use for each.",
      "How does the nurse assess a patient's nutritional status?",
      "Describe how to safely assist a dependent patient with oral feeding.",
      "Describe the key nursing precautions during nasogastric tube feeding."
    ],
    assessment: [
      { type: "mcq", q: "The nutrient most important for tissue growth and repair is:", options: ["Carbohydrate", "Protein", "Fat", "Water"], answer: 1, rationale: "Protein provides amino acids for growth and repair (and wound healing)." },
      { type: "mcq", q: "'NPO' (nil by mouth) means the patient should:", options: ["Eat a soft diet", "Take nothing by mouth", "Drink only water", "Eat high protein"], answer: 1, rationale: "NPO means nothing by mouth, e.g. before surgery or when swallowing is unsafe." },
      { type: "mcq", q: "To prevent aspiration during feeding, the patient should be:", options: ["Lying flat", "Sitting upright", "On the abdomen", "Turned away"], answer: 1, rationale: "An upright position reduces the risk of aspiration while eating." },
      { type: "mcq", q: "Before each use of a nasogastric tube, the nurse must:", options: ["Give the feed immediately", "Confirm the tube is correctly in the stomach", "Lay the patient flat", "Remove the tube"], answer: 1, rationale: "Tube placement must be confirmed (e.g. aspirate pH) before feeding to avoid feeding into the lungs." },
      { type: "mcq", q: "A diet with controlled carbohydrate is used for patients with:", options: ["Diabetes", "Fractures", "Anaemia", "Burns"], answer: 0, rationale: "A diabetic diet controls carbohydrate to manage blood glucose." },
      { type: "mcq", q: "Difficulty swallowing is called:", options: ["Dyspnoea", "Dysphagia", "Dysuria", "Dyspepsia"], answer: 1, rationale: "Dysphagia is difficulty swallowing, raising aspiration risk." },
      { type: "mcq", q: "Feeding through a tube into the stomach when the gut works is called ______ feeding.", options: ["Parenteral", "Enteral", "Intravenous", "Subcutaneous"], answer: 1, rationale: "Enteral feeding uses the gut (e.g. NG tube); parenteral bypasses it (IV)." },
      { type: "mcq", q: "A low-salt diet is commonly prescribed for:", options: ["Heart and kidney disease/high BP", "Anaemia", "Constipation", "Wound healing"], answer: 0, rationale: "Low-salt diets help manage hypertension, heart and kidney disease." },
      { type: "mcq", q: "A sign of dehydration is:", options: ["Oedema", "Dry mouth and concentrated urine", "Weight gain", "Bounding pulse"], answer: 1, rationale: "Dehydration causes thirst, dry mucous membranes and low/concentrated urine." },
      { type: "mcq", q: "Nutrients especially important for wound healing are:", options: ["Protein and vitamin C", "Fat only", "Salt", "Caffeine"], answer: 0, rationale: "Protein and vitamin C support tissue repair and wound healing." },
      { type: "fill", q: "Feeding via a tube passed through the nose into the stomach uses a ______ tube.", accept: ["nasogastric", "ng"], rationale: "The nasogastric (NG) tube is passed via the nose into the stomach." },
      { type: "fill", q: "Breathing food or fluid into the lungs is called ______.", accept: ["aspiration"], rationale: "Aspiration (food/fluid entering the airway) is a serious feeding risk." }
    ]
  },
  {
    id: "fon-13-urinary",
    unit: "Unit 3 · Meeting Basic Human Needs",
    title: "Urinary Elimination",
    readMinutes: 18,
    summary: "Normal urination and its problems, assisting with elimination, urinary catheterization (types, technique and complications), and measuring urine output.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Normal urination", p: "The kidneys make urine continuously and the bladder stores it until it is convenient to void. A healthy adult passes about 1-1.5 litres of urine a day (roughly 0.5-1 mL per kg per hour). Normal urine is clear, pale to amber yellow, with a faint smell. The nurse helps patients meet this basic need with privacy and dignity." },
      { h: "Common urinary problems", list: [
        "Retention — inability to empty the bladder.",
        "Incontinence — involuntary leakage of urine.",
        "Dysuria — pain or burning on passing urine (often infection).",
        "Frequency and urgency — needing to pass urine often/suddenly.",
        "Oliguria — very low output (<400 mL/day); anuria — almost none.",
        "Polyuria — abnormally large output."
      ] },
      { h: "Assisting with elimination", p: "For patients who cannot reach the toilet, the nurse offers a bedpan (women, or for bowels) or urinal (men), ensuring privacy, correct positioning, and prompt response to the call bell. Afterwards, perineal hygiene is given and hands washed. The nurse promotes normal voiding — privacy, normal position, running water, adequate fluids — before considering a catheter." },
      { h: "Urinary catheterization — types", list: [
        "Intermittent (straight) catheter — passed to drain the bladder then removed.",
        "Indwelling (Foley) catheter — stays in place, held by a balloon, draining into a bag.",
        "Condom (external) catheter — a sheath over the penis, draining urine without entering the bladder (lower infection risk)."
      ] },
      { h: "Catheterization technique and care", p: "Inserting a urinary catheter is a sterile (aseptic) procedure to avoid introducing infection. The nurse explains the procedure, maintains privacy, uses sterile equipment and lubricant, and inserts the catheter gently. For an indwelling catheter, the bag is kept below bladder level and off the floor, the system kept closed, the meatus kept clean, and adequate fluids encouraged. Catheters are removed as early as possible.", figure: { caption: "Figure 13.1 — Urinary catheterization. Add a labelled image if available.", placeholder: true } },
      { h: "Complications of catheterization", p: "The main risk is a catheter-associated urinary tract infection (CAUTI) — the longer a catheter stays in, the higher the risk, so catheters are used only when necessary and removed promptly. Other problems include trauma during insertion, blockage, bladder spasm and leakage. The nurse watches for signs of infection (fever, cloudy or offensive urine) and reports them." },
      { h: "Measuring and recording output", p: "Accurate measurement of urine output is a key observation, especially for seriously ill patients. The nurse measures and records output on the fluid-balance chart and reports low output (below about 0.5 mL/kg/hour), which may signal dehydration or kidney problems. Urine may also be tested (urinalysis) or sent for culture." },
      { h: "Nursing relevance", p: "Helping patients pass urine with dignity, promoting normal voiding, performing aseptic catheterization, preventing and detecting CAUTI, and accurately measuring output are core fundamental skills that protect comfort and kidney health." }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe normal urine and the normal range of urine output.",
      "List common urinary problems and define each.",
      "Name the types of urinary catheter.",
      "Why is catheterization an aseptic procedure, and how is CAUTI prevented?",
      "Why and how is urine output measured?"
    ],
    assessment: [
      { type: "mcq", q: "Normal adult urine output is approximately:", options: ["0.1 L/day", "1-1.5 L/day", "5 L/day", "0.5 L/week"], answer: 1, rationale: "About 1-1.5 L/day (0.5-1 mL/kg/hr) is normal." },
      { type: "mcq", q: "Inability to empty the bladder is called urinary:", options: ["Incontinence", "Retention", "Frequency", "Dysuria"], answer: 1, rationale: "Retention is inability to empty the bladder; incontinence is leakage." },
      { type: "mcq", q: "Pain or burning when passing urine is:", options: ["Polyuria", "Dysuria", "Oliguria", "Anuria"], answer: 1, rationale: "Dysuria is painful urination, often due to infection." },
      { type: "mcq", q: "A catheter held in the bladder by a balloon is a/an:", options: ["Straight catheter", "Indwelling (Foley) catheter", "Condom catheter", "Suction catheter"], answer: 1, rationale: "The indwelling (Foley) catheter has a balloon and stays in place." },
      { type: "mcq", q: "Urinary catheterization is performed using:", options: ["Clean technique", "Sterile (aseptic) technique", "No special technique", "Bare hands"], answer: 1, rationale: "Catheterization is aseptic to prevent introducing infection." },
      { type: "mcq", q: "The drainage bag of an indwelling catheter should be kept:", options: ["Above the bladder", "Below bladder level and off the floor", "On the bed", "Open to air"], answer: 1, rationale: "Keeping the bag below the bladder and closed prevents backflow and infection." },
      { type: "mcq", q: "The main complication of an indwelling catheter is:", options: ["Catheter-associated UTI (CAUTI)", "Hypertension", "Anaemia", "Constipation"], answer: 0, rationale: "CAUTI risk rises the longer a catheter remains; remove it as soon as possible." },
      { type: "mcq", q: "Very low urine output (<400 mL/day) is called:", options: ["Polyuria", "Oliguria", "Dysuria", "Diuresis"], answer: 1, rationale: "Oliguria is abnormally low output; anuria is virtually none." },
      { type: "mcq", q: "An external catheter (sheath) suitable for male incontinence is the:", options: ["Foley catheter", "Condom catheter", "Straight catheter", "Suprapubic catheter"], answer: 1, rationale: "The condom (external) catheter drains urine without entering the bladder." },
      { type: "mcq", q: "Urine output should be reported if it falls below about:", options: ["0.5 mL/kg/hour", "2 mL/kg/hour", "5 mL/kg/hour", "10 mL/kg/hour"], answer: 0, rationale: "Output below ~0.5 mL/kg/hr may indicate dehydration or kidney injury." },
      { type: "fill", q: "Involuntary leakage of urine is called urinary ______.", accept: ["incontinence"], rationale: "Incontinence is involuntary loss of urine." },
      { type: "fill", q: "A catheter-associated urinary tract infection is abbreviated ______.", accept: ["cauti"], rationale: "CAUTI is the main risk of indwelling catheters." }
    ]
  },
  {
    id: "fon-14-bowel",
    unit: "Unit 3 · Meeting Basic Human Needs",
    title: "Bowel Elimination",
    readMinutes: 17,
    summary: "Normal defecation and its problems, promoting normal elimination, enema administration, and the care of a colostomy.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Normal bowel elimination", p: "Defecation is the elimination of faeces (stool) from the bowel. Normal frequency varies widely — from a few times a day to a few times a week. Normal stool is soft, formed and brown. Bowel habit is affected by diet (especially fibre and fluids), activity, privacy, routine, medicines and illness." },
      { h: "Common bowel problems", list: [
        "Constipation — infrequent, hard, difficult stools.",
        "Faecal impaction — a hard stool mass that cannot be passed (a severe constipation).",
        "Diarrhoea — frequent loose, watery stools (risks dehydration).",
        "Faecal incontinence — involuntary loss of stool.",
        "Flatulence — excess gas in the bowel."
      ] },
      { h: "Promoting normal elimination", p: "The nurse helps prevent and relieve problems by encouraging a high-fibre diet and adequate fluids, promoting activity, providing privacy and a normal position (sitting/squatting if possible), and responding promptly to the urge to defecate. These simple measures prevent most constipation." },
      { h: "Diarrhoea care", p: "Diarrhoea is a major cause of illness and death, especially in children, because of fluid and electrolyte loss. The nurse maintains hydration (oral rehydration solution, ORS, or IV fluids if severe), protects the skin around the anus, practises strict hand hygiene and infection control (diarrhoea is often infectious), monitors fluid balance, and identifies the cause." },
      { h: "Enema administration", p: "An enema is the introduction of fluid into the rectum, most often a cleansing enema to relieve constipation or empty the bowel before surgery, childbirth or some investigations. A retention enema (e.g. of oil or medication) is meant to be held. The nurse explains the procedure, ensures privacy, positions the patient (usually left lateral / Sims'), inserts the lubricated tube gently, gives the fluid slowly at a safe temperature, and helps the patient to a toilet/bedpan afterwards. Suppositories may also be used to soften stool or deliver medication.", figure: { caption: "Figure 14.1 — Enema administration (left lateral position). Add a labelled image if available.", placeholder: true } },
      { h: "Colostomy (stoma) care", p: "A colostomy is an opening (stoma) of the bowel onto the abdominal wall through which faeces pass into a collecting appliance (bag). Care includes emptying and changing the appliance, gently cleaning and protecting the surrounding skin, checking the stoma is healthy (pink/red and moist), controlling odour, and — very importantly — giving emotional support and teaching, as a stoma greatly affects body image and confidence." },
      { h: "Nursing relevance", p: "Promoting normal bowel habit, managing constipation and diarrhoea (with attention to hydration and infection control), safely giving enemas, and providing sensitive colostomy care and teaching are fundamental skills that protect comfort, hydration, skin integrity and dignity." }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe normal defecation and the factors that affect it.",
      "Define constipation, diarrhoea and faecal impaction.",
      "How does the nurse promote normal bowel elimination?",
      "Describe the procedure and purpose of a cleansing enema.",
      "Describe the care of a patient with a colostomy."
    ],
    assessment: [
      { type: "mcq", q: "Infrequent, hard, difficult-to-pass stools describe:", options: ["Diarrhoea", "Constipation", "Incontinence", "Flatulence"], answer: 1, rationale: "Constipation is infrequent, hard, difficult defecation." },
      { type: "mcq", q: "The most dangerous immediate effect of severe diarrhoea is:", options: ["Weight gain", "Dehydration and electrolyte loss", "High blood pressure", "Constipation"], answer: 1, rationale: "Diarrhoea causes fluid and electrolyte loss leading to dehydration." },
      { type: "mcq", q: "A simple, life-saving treatment for diarrhoea-related fluid loss is:", options: ["Antibiotics only", "Oral rehydration solution (ORS)", "A laxative", "An enema"], answer: 1, rationale: "ORS replaces lost water and electrolytes; it is a cornerstone of diarrhoea care." },
      { type: "mcq", q: "Introducing fluid into the rectum to relieve constipation is a/an:", options: ["Enema", "Catheter", "Suction", "Infusion"], answer: 0, rationale: "A cleansing enema introduces fluid into the rectum to empty the bowel." },
      { type: "mcq", q: "The usual position for giving an enema is:", options: ["Supine", "Left lateral (Sims')", "Prone", "Sitting upright"], answer: 1, rationale: "The left lateral/Sims' position follows the bowel's anatomy for enema fluid." },
      { type: "mcq", q: "A healthy colostomy stoma should look:", options: ["Black and dry", "Pink/red and moist", "Pale and sunken", "Yellow"], answer: 1, rationale: "A healthy stoma is pink/red and moist; dark or dusky colour is abnormal." },
      { type: "mcq", q: "To prevent constipation, the nurse encourages:", options: ["Low fibre and low fluids", "High fibre, fluids and activity", "Bed rest only", "Skipping meals"], answer: 1, rationale: "Fibre, fluids and activity promote normal bowel function." },
      { type: "mcq", q: "A hard stool mass that cannot be passed is:", options: ["Diarrhoea", "Faecal impaction", "Flatulence", "Incontinence"], answer: 1, rationale: "Faecal impaction is a severe, obstructing accumulation of hard stool." },
      { type: "mcq", q: "Because diarrhoea is often infectious, the nurse must emphasise:", options: ["Sharing equipment", "Strict hand hygiene and infection control", "No precautions", "Stopping fluids"], answer: 1, rationale: "Hand hygiene and infection control limit the spread of infectious diarrhoea." },
      { type: "mcq", q: "A key part of colostomy care, besides the appliance, is:", options: ["Ignoring the patient's feelings", "Emotional support and teaching", "Restricting all fluids", "Keeping it secret"], answer: 1, rationale: "A stoma affects body image; emotional support and self-care teaching are essential." },
      { type: "fill", q: "Frequent loose, watery stools are called ______.", accept: ["diarrhoea", "diarrhea"], rationale: "Diarrhoea is frequent loose/watery stools, risking dehydration." },
      { type: "fill", q: "A surgically created opening of the bowel onto the abdomen is a ______.", accept: ["colostomy", "stoma"], rationale: "A colostomy/stoma diverts faeces to a collecting appliance." }
    ]
  },
  {
    id: "fon-15-medication",
    unit: "Unit 4 · Clinical Nursing Skills",
    title: "Medication Administration & IV Therapy",
    readMinutes: 20,
    summary: "Safe medication administration and the 'rights', routes of administration and injection sites, basic drug calculation, intravenous therapy, and giving blood products safely.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Safe medication administration", p: "Giving medicines is one of the nurse's most important and high-risk duties — medication errors can seriously harm or kill. Safety depends on knowledge of the drug, careful checking, correct technique, and clear documentation. The nurse also teaches the patient about their medicines and watches for effects and side-effects." },
      { h: "The 'rights' of medication administration", list: [
        "Right patient — check identity with two identifiers.",
        "Right drug — check the medicine against the prescription.",
        "Right dose — verify and, if needed, calculate the dose.",
        "Right route — give by the prescribed route.",
        "Right time — at the correct time/frequency.",
        "Right documentation — record immediately after giving.",
        "(Also: right reason, right response, and the patient's right to refuse.)"
      ] },
      { h: "Routes of administration", p: "Medicines are given by many routes. Enteral routes use the gut: oral (swallowed), sublingual (under the tongue) and rectal. Other routes include topical (on the skin), transdermal (patch), and inhalation (into the lungs). Parenteral routes use injection: intradermal (ID), subcutaneous (SC), intramuscular (IM) and intravenous (IV). The route affects how fast and how completely the drug acts (IV is fastest)." },
      { h: "Injections and sites", p: "Each injection has its sites and angle: intramuscular (IM) into muscle at 90° — common sites are the deltoid, vastus lateralis and ventrogluteal; subcutaneous (SC) into fatty tissue at 45-90° — abdomen, outer upper arm, thigh; intradermal (ID) into the skin at 10-15° — forearm (e.g. for skin tests). Aseptic technique, the correct needle, site rotation and safe sharps disposal are essential.", figure: { caption: "Figure 15.1 — Injection routes and angles (ID, SC, IM, IV). Add a labelled image if available.", placeholder: true } },
      { h: "Drug calculation", p: "Nurses must calculate doses accurately. A common formula is: dose to give = (amount prescribed ÷ amount available) × the volume it comes in. For example, if 250 mg is prescribed and the stock is 500 mg in 5 mL, give (250 ÷ 500) × 5 mL = 2.5 mL. Always double-check high-risk calculations, and beware of mg/mcg and unit errors." },
      { h: "Intravenous (IV) therapy", p: "IV therapy delivers fluids, electrolytes, medicines and nutrition directly into a vein for rapid, reliable effect. The nurse checks the prescription, uses aseptic technique, regulates the flow rate, and monitors the site and patient. Common site problems are infiltration (fluid leaking into tissue — swelling, coolness), phlebitis (vein inflammation — redness, pain along the vein) and infection — all needing the infusion to be stopped and the site changed." },
      { h: "Blood products", p: "Transfusion of blood or blood products can be life-saving but carries serious risks. Safety steps include confirming ABO/Rh compatibility, double-checking the unit and patient identity with a second nurse, and monitoring closely — especially in the first 15 minutes. If a transfusion reaction occurs (fever, chills, rash, breathlessness, back pain, fall in BP), the nurse STOPS the transfusion immediately, keeps the IV line open with saline, and calls for help." },
      { h: "Nursing relevance", p: "Applying the rights of medication, choosing and performing the correct route safely, calculating doses accurately, monitoring IV sites, and giving blood with strict checks prevent medication and transfusion errors — among the most important safety responsibilities in nursing." }
    ],
    references: REF_FON,
    examQuestions: [
      "List the 'rights' of medication administration.",
      "Name the routes of medication administration with an example of each.",
      "State the common IM and SC injection sites and their angles.",
      "Calculate: 250 mg is prescribed; stock is 500 mg in 5 mL — how many mL are given?",
      "What are the signs of a transfusion reaction and the nurse's immediate actions?"
    ],
    assessment: [
      { type: "mcq", q: "Which is one of the 'rights' of medication administration?", options: ["Right colour", "Right dose", "Right brand", "Right price"], answer: 1, rationale: "The rights include right patient, drug, dose, route, time and documentation." },
      { type: "mcq", q: "The fastest-acting route of drug administration is:", options: ["Oral", "Intravenous (IV)", "Topical", "Rectal"], answer: 1, rationale: "IV delivers the drug straight into the bloodstream, acting fastest." },
      { type: "mcq", q: "Intramuscular (IM) injections are given at an angle of:", options: ["10-15°", "45°", "90°", "5°"], answer: 2, rationale: "IM injections are given at 90° into muscle; SC at 45-90°; ID at 10-15°." },
      { type: "mcq", q: "A recommended IM injection site in adults is the:", options: ["Forearm", "Vastus lateralis", "Abdomen", "Earlobe"], answer: 1, rationale: "Vastus lateralis, deltoid and ventrogluteal are common IM sites." },
      { type: "mcq", q: "If 500 mg is prescribed and stock is 250 mg in 5 mL, the volume to give is:", options: ["2.5 mL", "5 mL", "10 mL", "1 mL"], answer: 2, rationale: "(500 ÷ 250) × 5 mL = 10 mL." },
      { type: "mcq", q: "Swelling and coolness at an IV site where fluid leaks into tissue is:", options: ["Phlebitis", "Infiltration", "Infection", "Embolism"], answer: 1, rationale: "Infiltration is leakage of fluid into surrounding tissue." },
      { type: "mcq", q: "Redness and pain along the vein at an IV site indicate:", options: ["Infiltration", "Phlebitis", "Normal finding", "Dehydration"], answer: 1, rationale: "Phlebitis is inflammation of the vein; stop the infusion and re-site." },
      { type: "mcq", q: "If a blood transfusion reaction occurs, the nurse should first:", options: ["Increase the rate", "Stop the transfusion immediately", "Ignore it", "Give more blood"], answer: 1, rationale: "Stop the transfusion at once, keep the line open with saline and get help." },
      { type: "mcq", q: "A medicine dissolved under the tongue for rapid absorption is given by the ______ route.", options: ["Sublingual", "Intramuscular", "Topical", "Rectal"], answer: 0, rationale: "Sublingual medication dissolves under the tongue and is absorbed across the oral mucosa (not an injection)." },
      { type: "mcq", q: "Before giving any medicine, the nurse must first confirm the:", options: ["Room number", "Right patient (identity)", "Time of lunch", "Bed colour"], answer: 1, rationale: "Confirming the right patient with two identifiers prevents errors." },
      { type: "fill", q: "Giving a medicine directly into a vein is the ______ route (abbreviation).", accept: ["iv", "intravenous"], rationale: "IV (intravenous) delivers the drug into the bloodstream." },
      { type: "fill", q: "Leakage of IV fluid into the surrounding tissue is called ______.", accept: ["infiltration"], rationale: "Infiltration causes local swelling and coolness; the IV must be re-sited." }
    ]
  },
  {
    id: "fon-16-wound-care",
    unit: "Unit 4 · Clinical Nursing Skills",
    title: "Wound Care, Dressings & Bandaging",
    readMinutes: 19,
    summary: "Types of wounds and how they heal, factors affecting healing, aseptic dressing technique, signs of wound infection, and the purposes, types and rules of bandaging.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a wound?", p: "A wound is any break in the continuity of the skin or tissues. Wounds may be closed (the skin is intact, e.g. a bruise) or open (the skin is broken, e.g. a cut, surgical incision, ulcer or burn), and acute (healing in an orderly, timely way) or chronic (slow to heal, e.g. a pressure injury or diabetic ulcer)." },
      { h: "How wounds heal", p: "Wound healing proceeds through overlapping phases.", figure: { caption: "Figure 16.1 — The phases of wound healing.", svg: "<svg viewBox='0 0 700 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Wound healing phases'><defs><marker id='wh16' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" + ["Haemostasis (clotting)", "Inflammation", "Proliferation (new tissue)", "Maturation (scar)"].map(function (t, i) { var x = 6 + i * 174; return "<rect x='" + x + "' y='24' width='160' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='" + (x + 80) + "' y='48' text-anchor='middle' font-family='Inter' font-size='10' font-weight='700' fill='#14387A'>" + t + "</text>" + (i < 3 ? "<line x1='" + (x + 160) + "' y1='44' x2='" + (x + 174) + "' y2='44' stroke='#2E63B8' stroke-width='2' marker-end='url(#wh16)'/>" : ""); }).join("") + "</svg>" } },
      { h: "Phases of healing", list: [
        "Haemostasis — bleeding stops as the blood clots and seals the wound.",
        "Inflammation — redness, heat, swelling and pain as the body cleans the wound and fights infection.",
        "Proliferation — new tissue (granulation) and blood vessels form and the wound contracts.",
        "Maturation (remodelling) — the new tissue strengthens into a scar over weeks to months."
      ] },
      { h: "Types of healing", p: "Healing by primary intention occurs when a clean wound with edges brought together (e.g. a sutured surgical incision) heals quickly with little scar. Secondary intention occurs when a large or infected wound is left open to heal from the base upwards, taking longer and leaving more scar. Tertiary (delayed primary) intention is closing a wound after a delay." },
      { h: "Factors affecting healing", p: "Healing is helped by good nutrition (especially protein and vitamin C), a good blood and oxygen supply, youth, and a clean, moist wound. It is delayed by infection, poor circulation, poor nutrition, old age, diabetes, smoking, and certain drugs (such as steroids). The nurse addresses these factors to promote healing." },
      { h: "Wound dressing and asepsis", p: "Dressings protect the wound, absorb drainage, maintain a healing environment and prevent infection. A dry dressing covers a clean, dry wound; a wet (moist) dressing is used for some wounds. Dressing changes use aseptic (sterile) technique: hand hygiene, sterile gloves and instruments, cleaning from clean to dirty, and safe disposal. The nurse assesses the wound at each change and watches for signs of infection — increasing redness, swelling, warmth, pain, pus and fever — reporting them promptly." },
      { h: "Bandaging", p: "A bandage is a strip of material used to hold a dressing in place, support or immobilise a part, apply pressure to control bleeding or swelling, or limit movement. Common types are the roller bandage and the triangular bandage (useful as a sling). General rules: apply firmly but not too tightly (check circulation — colour, warmth, sensation beyond the bandage), bandage from the part farthest from the heart upwards, keep it neat and secure, and leave fingertips/toes exposed to check circulation." },
      { h: "Nursing relevance", p: "Understanding how wounds heal, performing aseptic dressings, recognising infection early, supporting the factors that aid healing, and applying bandages safely (without cutting off circulation) are core clinical skills that prevent complications and speed recovery." }
    ],
    references: REF_FON,
    examQuestions: [
      "Define a wound and describe its types.",
      "Describe the phases of wound healing.",
      "Differentiate healing by primary and secondary intention.",
      "List the factors that delay wound healing and the signs of wound infection.",
      "State the purposes of bandaging and the general rules for applying a bandage."
    ],
    assessment: [
      { type: "mcq", q: "The first phase of wound healing, in which bleeding stops, is:", options: ["Inflammation", "Haemostasis", "Proliferation", "Maturation"], answer: 1, rationale: "Haemostasis (clotting) stops bleeding first, before inflammation." },
      { type: "mcq", q: "A clean sutured surgical wound heals by:", options: ["Primary intention", "Secondary intention", "Tertiary intention", "No healing"], answer: 0, rationale: "Wounds with approximated edges heal by primary intention with minimal scar." },
      { type: "mcq", q: "Which delays wound healing?", options: ["Good nutrition", "Infection and poor blood supply", "Adequate oxygen", "Youth"], answer: 1, rationale: "Infection, poor circulation, poor nutrition, age and diabetes delay healing." },
      { type: "mcq", q: "Dressing changes should be performed using:", options: ["Clean technique only", "Aseptic (sterile) technique", "Bare hands", "No technique"], answer: 1, rationale: "Aseptic technique prevents introducing infection into the wound." },
      { type: "mcq", q: "A sign of wound infection is:", options: ["Decreasing pain", "Increasing redness, warmth and pus", "Dry clean edges", "No drainage"], answer: 1, rationale: "Spreading redness, warmth, swelling, pain, pus and fever indicate infection." },
      { type: "mcq", q: "A bandage is used to:", options: ["Replace the heart", "Hold a dressing, support, or apply pressure", "Feed the patient", "Measure temperature"], answer: 1, rationale: "Bandages secure dressings, support/immobilise, and apply pressure." },
      { type: "mcq", q: "A nutrient especially important for wound healing is:", options: ["Protein (and vitamin C)", "Caffeine", "Salt", "Fat only"], answer: 0, rationale: "Protein and vitamin C are needed for tissue repair." },
      { type: "mcq", q: "After applying a limb bandage, the nurse should check:", options: ["The patient's appetite", "Circulation beyond the bandage (colour, warmth, sensation)", "Room temperature", "Blood group"], answer: 1, rationale: "Check distal circulation to ensure the bandage is not too tight." },
      { type: "mcq", q: "A large open wound left to heal from the base upward heals by:", options: ["Primary intention", "Secondary intention", "Instant closure", "No scar"], answer: 1, rationale: "Open/infected wounds heal by secondary intention, with more scarring." },
      { type: "mcq", q: "A triangular bandage is especially useful as a:", options: ["Sling", "Splint material", "Thermometer", "Catheter"], answer: 0, rationale: "The triangular bandage is commonly used to make an arm sling." },
      { type: "fill", q: "The phase of wound healing in which the scar strengthens over weeks is ______.", accept: ["maturation", "remodelling", "remodeling"], rationale: "Maturation (remodelling) strengthens the new tissue into a scar." },
      { type: "fill", q: "Dressing changes must use ______ technique to prevent infection.", accept: ["aseptic", "sterile"], rationale: "Aseptic (sterile) technique protects the wound from infection." }
    ]
  },
  {
    id: "fon-17-specimen",
    unit: "Unit 4 · Clinical Nursing Skills",
    title: "Specimen Collection",
    readMinutes: 16,
    summary: "The principles of correct specimen collection and the collection of blood, urine, stool and sputum specimens, with the safety the nurse must observe.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why correct collection matters", p: "Many diagnoses depend on laboratory tests of body fluids and tissues, and the nurse usually collects these specimens. A poorly collected, wrongly labelled or delayed specimen gives misleading results that can lead to wrong treatment — so correct technique is essential." },
      { h: "General principles", list: [
        "Use the correct container for the test, and the right preservative/tube where needed.",
        "Label clearly with the patient's name, ID, date, time and specimen type, and complete the request form.",
        "Collect at the correct time (e.g. fasting, early morning, or a timed sample).",
        "Use aseptic/clean technique and avoid contamination.",
        "Collect an adequate amount.",
        "Send to the laboratory promptly (or store correctly), and record that it was sent."
      ] },
      { h: "Blood specimens", p: "Blood is usually taken from a vein (venepuncture) using aseptic technique and the correct collection tubes for the test (different tests need tubes with different additives). The site is cleaned, the sample drawn, pressure applied afterwards, and the tubes labelled at the bedside. Blood may be tested for a full blood count, blood chemistry, blood grouping, cultures and many other things." },
      { h: "Urine specimens", list: [
        "Routine (random) urine — a fresh sample for basic urinalysis.",
        "Midstream clean-catch (MSU) — the genitals are cleaned and the middle of the stream collected for culture, to avoid contamination.",
        "Catheter specimen (CSU) — taken from the sampling port of a catheter, not the bag.",
        "24-hour urine — all urine over 24 hours collected for certain tests."
      ] },
      { h: "Stool specimens", p: "A stool (faeces) specimen is collected in a clean container, avoiding contamination with urine or water. It is examined for ova, cysts and parasites; for occult (hidden) blood; or for culture to find infecting organisms. For some tests a fresh, warm sample must reach the laboratory quickly." },
      { h: "Sputum specimens", p: "Sputum (not saliva) is coughed up from deep in the lungs, ideally early in the morning, into a sterile container. It is used to diagnose chest infections and, importantly in Bangladesh, tuberculosis (testing for acid-fast bacilli). The nurse explains that a deep cough is needed and observes infection-control precautions, as sputum may be highly infectious." },
      { h: "Safety in specimen handling", p: "All specimens are treated as potentially infectious. The nurse uses standard precautions (gloves, hand hygiene), avoids spillage and contamination of the outside of the container, places specimens in a sealed bag with the request form, and never eats or stores food where specimens are handled." },
      { h: "Nursing relevance", p: "Collecting the right specimen, the right way, into the right container, correctly labelled and promptly delivered — while protecting the patient's dignity and everyone's safety — directly affects the accuracy of diagnosis and the safety of care." }
    ],
    references: REF_FON,
    examQuestions: [
      "State the general principles of correct specimen collection.",
      "How is a midstream clean-catch urine specimen collected and why?",
      "What can a stool specimen be tested for?",
      "Describe how a sputum specimen is collected and its importance for TB.",
      "What safety precautions apply to handling specimens?"
    ],
    assessment: [
      { type: "mcq", q: "A correctly collected specimen must always be:", options: ["Unlabelled", "Clearly labelled with patient details", "Left at the bedside for hours", "Mixed with another sample"], answer: 1, rationale: "Correct labelling (and prompt delivery) is essential for valid results and safety." },
      { type: "mcq", q: "A midstream clean-catch urine specimen is collected to:", options: ["Increase contamination", "Reduce contamination for culture", "Save time", "Test blood"], answer: 1, rationale: "Cleaning and catching the mid-stream reduces contamination for accurate culture." },
      { type: "mcq", q: "A urine specimen from a catheterised patient should be taken from the:", options: ["Drainage bag", "Sampling port of the catheter", "Floor", "Toilet"], answer: 1, rationale: "A catheter specimen (CSU) is taken aseptically from the sampling port, not the bag." },
      { type: "mcq", q: "Sputum for testing should be:", options: ["Saliva from the mouth", "Coughed from deep in the lungs", "Nasal mucus", "Collected after eating"], answer: 1, rationale: "True sputum is coughed from the lungs, ideally early morning, not saliva." },
      { type: "mcq", q: "In Bangladesh, sputum is especially important for diagnosing:", options: ["Diabetes", "Tuberculosis", "Anaemia", "Fracture"], answer: 1, rationale: "Sputum is tested for acid-fast bacilli to diagnose tuberculosis." },
      { type: "mcq", q: "A stool specimen may be tested for all EXCEPT:", options: ["Ova and parasites", "Occult blood", "Culture for organisms", "Blood glucose"], answer: 3, rationale: "Blood glucose is a blood test; stool is tested for parasites, occult blood and pathogens." },
      { type: "mcq", q: "Blood for the laboratory is usually collected by:", options: ["Venepuncture using aseptic technique", "Scraping the skin", "A urine sample", "Coughing"], answer: 0, rationale: "Venous blood is drawn aseptically into the correct tubes." },
      { type: "mcq", q: "All specimens should be treated as:", options: ["Harmless", "Potentially infectious", "Food", "Waste to ignore"], answer: 1, rationale: "Standard precautions apply — handle all specimens as potentially infectious." },
      { type: "mcq", q: "A test requiring all urine passed over a day is the:", options: ["Random urine", "24-hour urine collection", "Midstream urine", "Catheter specimen"], answer: 1, rationale: "A 24-hour collection gathers all urine over the period for certain tests." },
      { type: "mcq", q: "After collection, a specimen should be:", options: ["Kept at the bedside overnight", "Sent to the lab promptly or stored correctly", "Opened to air", "Relabelled later"], answer: 1, rationale: "Prompt, correct transport preserves the specimen and the validity of results." },
      { type: "fill", q: "Drawing blood from a vein for testing is called ______.", accept: ["venepuncture", "venipuncture"], rationale: "Venepuncture is collection of venous blood." },
      { type: "fill", q: "A clean midstream urine specimen is abbreviated ______.", accept: ["msu", "mssu"], rationale: "MSU (midstream urine) is collected to reduce contamination for culture." }
    ]
  },
  {
    id: "fon-18-health-assessment",
    unit: "Unit 5 · Health Assessment & Emergency Care",
    title: "Health Assessment: History Taking & Physical Examination",
    readMinutes: 20,
    summary: "The purpose and sources of assessment data, the framework for history taking, the four techniques of physical examination, the head-to-toe assessment, and the legal-ethical considerations of data collection.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of health assessment", p: "Health assessment is the systematic collection of information about a patient's health to identify their needs and problems and to plan care. It is the first step of the nursing process and combines a health history (what the patient tells you) with a physical examination (what you observe and measure). A thorough, accurate assessment is the foundation of safe care." },
      { h: "Subjective and objective data", p: "Assessment gathers two kinds of data. Subjective data are what the patient (or family) reports — symptoms, feelings, concerns and history; these are the 'symptoms'. Objective data are what the nurse observes, measures or examines — vital signs, appearance, examination findings and test results; these are the 'signs'. The main source (primary source) is the patient; family, records and other staff are secondary sources." },
      { h: "Legal and ethical considerations", p: "Collecting health information must respect the patient's rights: gain consent, protect privacy (a private setting, screening), and keep all information confidential, sharing it only with those involved in care. These principles apply throughout history taking and examination." },
      { h: "History taking", p: "The health history is taken in an organised framework, usually: the chief complaint (the main problem in the patient's own words); the history of the present illness (when it began, how it developed, what makes it better or worse); the past medical and surgical history; the drug and allergy history; the family history; the personal and social history (occupation, lifestyle, habits); and a review of systems. Good interviewing — active listening, open questions, empathy — gathers accurate information and builds trust." },
      { h: "Physical examination techniques", p: "Physical examination uses four techniques, normally in the order Inspection, Palpation, Percussion, Auscultation (IPPA).", figure: { caption: "Figure 18.1 — The four physical-examination techniques (IPPA).", svg: "<svg viewBox='0 0 620 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Physical examination techniques'><defs><marker id='ip18' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" + ["Inspection", "Palpation", "Percussion", "Auscultation"].map(function (t, i) { var x = 6 + i * 152; return "<rect x='" + x + "' y='24' width='136' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='" + (x + 68) + "' y='48' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#14387A'>" + t + "</text>" + (i < 3 ? "<line x1='" + (x + 136) + "' y1='44' x2='" + (x + 152) + "' y2='44' stroke='#2E63B8' stroke-width='2' marker-end='url(#ip18)'/>" : ""); }).join("") + "</svg>" } },
      { h: "The four techniques explained", list: [
        "Inspection — careful looking (colour, shape, swelling, movement, symmetry).",
        "Palpation — feeling with the hands (temperature, tenderness, lumps, pulses).",
        "Percussion — tapping to judge what lies beneath (air, fluid or solid by the sound).",
        "Auscultation — listening with a stethoscope (heart, lungs, bowel sounds).",
        "(For the abdomen the order changes to inspect, auscultate, percuss, palpate, so palpation does not alter the bowel sounds.)"
      ] },
      { h: "The head-to-toe assessment", p: "A complete physical examination is carried out systematically from head to toe: a general survey (appearance, level of consciousness, vital signs) followed by each region/system — head and neck, chest and lungs, heart, abdomen, limbs, skin and neurological status. Working in a set order ensures nothing is missed. The nurse then interprets the findings to identify the patient's problems." },
      { h: "Nursing relevance", p: "Skilled assessment — a thorough history plus a systematic physical examination using inspection, palpation, percussion and auscultation — gives the accurate picture on which the whole nursing process and care plan depend, while respecting consent, privacy and confidentiality." }
    ],
    references: REF_FON,
    examQuestions: [
      "Differentiate subjective and objective data, and primary and secondary sources.",
      "Describe the framework for taking a health history.",
      "Name and describe the four techniques of physical examination.",
      "Why is the order of examination different for the abdomen?",
      "What legal and ethical principles apply to collecting health data?"
    ],
    assessment: [
      { type: "mcq", q: "Information the patient reports about their symptoms is ______ data.", options: ["Objective", "Subjective", "Measured", "Laboratory"], answer: 1, rationale: "Subjective data are reported by the patient; objective data are observed/measured." },
      { type: "mcq", q: "The primary source of assessment data is the:", options: ["Family", "Patient", "Old chart", "Another nurse"], answer: 1, rationale: "The patient is the primary source; others are secondary sources." },
      { type: "mcq", q: "The usual order of physical-examination techniques is:", options: ["Auscultation, percussion, palpation, inspection", "Inspection, palpation, percussion, auscultation", "Palpation, inspection, auscultation, percussion", "Percussion, palpation, inspection, auscultation"], answer: 1, rationale: "The standard order is IPPA: inspection, palpation, percussion, auscultation." },
      { type: "mcq", q: "Feeling with the hands for tenderness or lumps is:", options: ["Inspection", "Palpation", "Percussion", "Auscultation"], answer: 1, rationale: "Palpation uses the hands to feel temperature, tenderness, masses and pulses." },
      { type: "mcq", q: "Listening to heart and lung sounds with a stethoscope is:", options: ["Inspection", "Palpation", "Percussion", "Auscultation"], answer: 3, rationale: "Auscultation is listening, usually with a stethoscope." },
      { type: "mcq", q: "Tapping the body to judge underlying air, fluid or solid is:", options: ["Percussion", "Inspection", "Palpation", "Auscultation"], answer: 0, rationale: "Percussion produces sounds that indicate what lies beneath." },
      { type: "mcq", q: "For abdominal examination, auscultation is done before palpation because palpation can:", options: ["Improve hearing", "Alter the bowel sounds", "Save time", "Reduce pain"], answer: 1, rationale: "Palpating first can change bowel sounds, so the abdomen is auscultated before palpation." },
      { type: "mcq", q: "The main problem in the patient's own words is the:", options: ["Diagnosis", "Chief complaint", "Care plan", "Prognosis"], answer: 1, rationale: "The chief complaint is the patient's stated main reason for seeking care." },
      { type: "mcq", q: "A complete physical examination is best carried out:", options: ["Randomly", "Systematically head-to-toe", "Only on the chest", "Without order"], answer: 1, rationale: "A systematic head-to-toe approach ensures nothing is missed." },
      { type: "mcq", q: "Before assessment, the nurse must ensure:", options: ["The room is public", "Consent, privacy and confidentiality", "No documentation", "The family decides everything"], answer: 1, rationale: "Consent, privacy and confidentiality protect the patient during data collection." },
      { type: "fill", q: "Measurable, observed findings such as a rash or blood pressure are ______ data.", accept: ["objective"], rationale: "Objective data are observed/measured (signs)." },
      { type: "fill", q: "The examination technique of careful looking is called ______.", accept: ["inspection"], rationale: "Inspection is systematic visual examination." }
    ]
  },
  {
    id: "fon-19-documentation",
    unit: "Unit 5 · Health Assessment & Emergency Care",
    title: "Documentation, Records & Diagnostic Tests",
    readMinutes: 17,
    summary: "The significance and types of nursing records, the principles and legal aspects of documentation, the nursing care plan, and common diagnostic tests with their normal values.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why records matter", p: "Nursing records are a written (or electronic) account of the patient's care. They serve many purposes: communicating care to the whole team, ensuring continuity, providing legal evidence of what was done, supporting quality audit and research, and aiding billing and planning. Good records protect both patient and nurse." },
      { h: "Types of nursing records", list: [
        "Patient history / data-collection form — assessment information at admission.",
        "Nurse's notes / progress notes — ongoing record of observations, care and the patient's response.",
        "Kardex — a quick-reference summary of the patient's current care.",
        "Charts — vital-signs chart, fluid-balance (intake-output) chart, medication chart.",
        "Care plan — the documented plan of nursing problems, goals and interventions."
      ] },
      { h: "Principles of good documentation", list: [
        "Accurate and factual — record what you observe and do, not opinion or guesses.",
        "Complete and relevant — include all important information.",
        "Timely — record as soon as possible after care.",
        "Legible and clear — readable, with approved terms/abbreviations.",
        "Dated, timed and signed — by the nurse who gave the care.",
        "Never falsified or improperly altered — errors are crossed out with a single line, corrected and initialled."
      ] },
      { h: "Legal aspects", p: "Records are legal documents that can be used in court. The guiding principle is 'not documented = not done' — care that is not recorded cannot be shown to have happened. Records must be kept confidential and secure, and the patient generally has a right of access to their own records. Falsifying records is a serious offence." },
      { h: "The nursing care plan", p: "Documentation links to the nursing process: the nurse interprets the assessment data, identifies the patient's needs/problems, prioritises them (using Maslow), and writes a care plan with goals and nursing interventions, then records the care given and evaluates the outcome. The care plan keeps care organised, individualised and consistent across the team." },
      { h: "Diagnostic tests and normal values", p: "Nurses assist with and prepare patients for diagnostic tests, and should know common tests and their normal values. Blood tests include the complete blood count (CBC — haemoglobin, white cells, platelets), blood chemistry (glucose, urea, creatinine, electrolytes) and liver function tests. Imaging includes the chest X-ray and the plain abdominal X-ray (KUB — kidneys, ureters, bladder). The nurse explains the test, gains consent, prepares the patient (e.g. fasting), collects any specimen correctly, and gives aftercare." },
      { h: "Nursing relevance", p: "Clear, accurate, timely, signed records and a well-written care plan ensure safe, continuous, legally sound care; and knowing common diagnostic tests and normal values lets the nurse prepare patients, collect specimens correctly, and recognise abnormal results to report." }
    ],
    references: REF_FON,
    examQuestions: [
      "State the purposes (significance) of nursing records.",
      "Name the types of nursing records.",
      "List the principles of good documentation.",
      "Explain the legal importance of nursing records ('not documented = not done').",
      "Name common blood and imaging tests and the nurse's role in diagnostic testing."
    ],
    assessment: [
      { type: "mcq", q: "A key purpose of nursing records is to:", options: ["Hide information", "Communicate care and provide a legal record", "Replace the patient", "Save paper"], answer: 1, rationale: "Records communicate care, ensure continuity and serve as legal evidence." },
      { type: "mcq", q: "The legal principle about documentation states that care not documented is considered:", options: ["Already known", "Not done", "Optional", "Confidential only"], answer: 1, rationale: "'Not documented = not done' — undocumented care cannot be proven." },
      { type: "mcq", q: "An error in a written record should be:", options: ["Erased completely", "Covered with correction fluid", "Crossed out with a single line, corrected and initialled", "Left as is"], answer: 2, rationale: "A single line through the error, with correction and initials, keeps the record honest and legible." },
      { type: "mcq", q: "A quick-reference summary of a patient's current care is the:", options: ["Kardex", "X-ray", "Consent form", "Prescription"], answer: 0, rationale: "The Kardex summarises the patient's current care for quick reference." },
      { type: "mcq", q: "Documentation should be done:", options: ["Days later from memory", "As soon as possible after care (timely)", "Only at discharge", "By any visitor"], answer: 1, rationale: "Timely recording, by the nurse who gave the care, keeps records accurate." },
      { type: "mcq", q: "The CBC blood test measures:", options: ["Blood pressure", "Haemoglobin, white cells and platelets", "Urine output", "Liver size"], answer: 1, rationale: "The complete blood count measures the blood cells." },
      { type: "mcq", q: "A 'KUB' plain X-ray images the:", options: ["Chest", "Kidneys, ureters and bladder", "Brain", "Heart"], answer: 1, rationale: "KUB = kidneys, ureters and bladder." },
      { type: "mcq", q: "Before a diagnostic test, the nurse should:", options: ["Skip consent", "Explain the test, gain consent and prepare the patient", "Hide the results", "Avoid the patient"], answer: 1, rationale: "Preparation includes explanation, consent, any fasting, and correct specimen/aftercare." },
      { type: "mcq", q: "Nursing records must be kept:", options: ["Public", "Confidential and secure", "On open display", "Unsigned"], answer: 1, rationale: "Records are confidential legal documents and must be kept secure." },
      { type: "mcq", q: "The documented plan of nursing problems, goals and interventions is the:", options: ["Care plan", "Menu", "Consent form", "Receipt"], answer: 0, rationale: "The nursing care plan organises individualised care from the nursing process." },
      { type: "fill", q: "A quick-reference card summarising a patient's current care is the ______.", accept: ["kardex"], rationale: "The Kardex is a concise current-care summary." },
      { type: "fill", q: "Liver function is checked by a blood test abbreviated ______.", accept: ["lft", "lfts"], rationale: "LFTs (liver function tests) assess the liver." }
    ]
  },
  {
    id: "fon-20-first-aid",
    unit: "Unit 5 · Health Assessment & Emergency Care",
    title: "First Aid & Emergency Nursing",
    readMinutes: 21,
    summary: "The aims and principles of first aid, the primary survey (DRABC) and CPR, and the first-aid management of shock, unconsciousness, haemorrhage, burns, fractures, poisoning, bites and drowning.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is first aid?", p: "First aid is the immediate, temporary care given to a sick or injured person before professional help arrives. Its aims are to preserve life, prevent the condition from getting worse, and promote recovery. The first aider stays calm, keeps the casualty and themselves safe, gives appropriate care within their ability, and arranges urgent help." },
      { h: "Principles and the first aider's responsibilities", p: "The first aider should ensure safety (of self, casualty and bystanders), assess the situation quickly, give priority to life-threatening problems, handle the casualty gently, reassure them, prevent further harm, summon help (e.g. ambulance), and not give anything by mouth to an unconscious person. Doing only what you are trained to do, and seeking help, are key responsibilities." },
      { h: "The primary survey — DRABC", p: "In any emergency, assess and act in a set order to find and treat the most life-threatening problems first.", figure: { caption: "Figure 20.1 — The DRABC primary survey.", svg: "<svg viewBox='0 0 600 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='DRABC'><defs><marker id='fa20' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" + [["D", "Danger"], ["R", "Response"], ["A", "Airway"], ["B", "Breathing"], ["C", "Circulation"]].map(function (p, i) { var x = 8 + i * 118; return "<rect x='" + x + "' y='24' width='104' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='" + (x + 52) + "' y='44' text-anchor='middle' font-family='Inter' font-size='13' font-weight='800' fill='#14387A'>" + p[0] + "</text><text x='" + (x + 52) + "' y='58' text-anchor='middle' font-family='Inter' font-size='9' fill='#6B7785'>" + p[1] + "</text>" + (i < 4 ? "<line x1='" + (x + 104) + "' y1='44' x2='" + (x + 118) + "' y2='44' stroke='#2E63B8' stroke-width='2' marker-end='url(#fa20)'/>" : ""); }).join("") + "</svg>" } },
      { h: "DRABC and CPR", p: "DRABC means: check for Danger; check Response (talk to and gently shake the casualty); open the Airway (head tilt, chin lift); check Breathing; and check Circulation. If the person is unresponsive and not breathing normally, start cardiopulmonary resuscitation (CPR) — chest compressions (push hard and fast in the centre of the chest, about 100-120 per minute) with rescue breaths — and send for emergency help/defibrillator. An unconscious person who IS breathing is placed in the recovery position to keep the airway clear." },
      { h: "Shock, unconsciousness and haemorrhage", list: [
        "Shock (low blood flow to tissues) — signs include pale, cold, clammy skin, fast weak pulse and low BP; lay the person down, raise the legs, keep them warm, treat the cause and get urgent help.",
        "Unconsciousness — ensure the airway is open; if breathing, use the recovery position; never give anything by mouth.",
        "Haemorrhage (severe bleeding) — apply firm direct pressure on the wound, raise the part if possible, lay the person down and call for help; watch for shock."
      ] },
      { h: "Burns, fractures and poisoning", list: [
        "Burns — cool the burn with running water for about 20 minutes, remove tight items, cover loosely with a clean non-stick cloth; do not apply toothpaste, oil or ice or burst blisters.",
        "Fractures — immobilise the injured part (splint/support), do not move it unnecessarily, control any bleeding, and seek care.",
        "Poisoning — remove the person from the source, identify the poison if possible, do NOT make them vomit unless specifically advised, keep any container/sample, and get medical help urgently."
      ] },
      { h: "Bites and drowning", list: [
        "Snake bite — keep the person calm and still, immobilise the bitten limb at heart level or below, do not cut/suck the wound, and get to hospital fast for antivenom.",
        "Dog/animal bite — wash the wound well with soap and water, control bleeding, and seek care for wound treatment and rabies prevention.",
        "Drowning — ensure rescuer safety, remove from water, check airway and breathing, and begin CPR if not breathing; get help."
      ] },
      { h: "Nursing relevance", p: "First-aid skills let the nurse respond effectively to emergencies anywhere — at the bedside, in the community or at the scene of an accident. Knowing DRABC, CPR, the recovery position and the management of common emergencies can be the difference between life and death." }
    ],
    references: REF_FON,
    examQuestions: [
      "Define first aid and state its aims.",
      "Describe the DRABC primary survey.",
      "When is CPR started, and when is the recovery position used?",
      "Describe the first-aid management of severe bleeding and of shock.",
      "Outline the first-aid management of burns, fractures and poisoning."
    ],
    assessment: [
      { type: "mcq", q: "The main aims of first aid are to preserve life, prevent worsening and:", options: ["Diagnose disease", "Promote recovery", "Prescribe drugs", "Perform surgery"], answer: 1, rationale: "First aid aims to preserve life, prevent deterioration and promote recovery." },
      { type: "mcq", q: "In the DRABC sequence, 'D' stands for:", options: ["Drugs", "Danger", "Diagnosis", "Drainage"], answer: 1, rationale: "DRABC = Danger, Response, Airway, Breathing, Circulation." },
      { type: "mcq", q: "An unconscious casualty who IS breathing normally should be placed in the:", options: ["Supine position", "Recovery position", "Sitting position", "Trendelenburg"], answer: 1, rationale: "The recovery position keeps the airway clear in an unconscious, breathing person." },
      { type: "mcq", q: "The first action for severe external bleeding is to:", options: ["Give water to drink", "Apply firm direct pressure to the wound", "Apply a tourniquet first", "Wait and watch"], answer: 1, rationale: "Direct pressure is the immediate measure to control bleeding." },
      { type: "mcq", q: "For shock, the casualty should be positioned:", options: ["Sitting upright", "Lying down with legs raised, kept warm", "On the abdomen", "Standing"], answer: 1, rationale: "Lying flat with legs raised improves blood flow to vital organs; keep warm." },
      { type: "mcq", q: "First aid for a burn is to:", options: ["Apply toothpaste/oil", "Cool with running water and cover loosely", "Burst the blisters", "Apply ice directly"], answer: 1, rationale: "Cool with running water ~20 min and cover; do not apply substances, ice or burst blisters." },
      { type: "mcq", q: "For suspected poisoning, the first aider should:", options: ["Always make the person vomit", "Not induce vomiting unless advised; identify the poison and get help", "Give milk routinely", "Ignore the container"], answer: 1, rationale: "Do not induce vomiting unless advised; identify the poison and seek urgent help." },
      { type: "mcq", q: "Chest compressions in CPR are given at a rate of about:", options: ["20-40 per minute", "60-80 per minute", "100-120 per minute", "150-200 per minute"], answer: 2, rationale: "Effective CPR uses ~100-120 compressions per minute." },
      { type: "mcq", q: "For a snake bite, the first aider should:", options: ["Cut and suck the wound", "Keep the person calm and still and immobilise the limb", "Apply a tight tourniquet", "Give alcohol"], answer: 1, rationale: "Keep still, immobilise the limb and reach hospital quickly for antivenom; do not cut/suck." },
      { type: "mcq", q: "A suspected fracture should be:", options: ["Moved repeatedly", "Immobilised/supported and not moved unnecessarily", "Massaged", "Bent to test it"], answer: 1, rationale: "Immobilise the part and avoid unnecessary movement to prevent further injury." },
      { type: "fill", q: "The emergency procedure of chest compressions and rescue breaths is abbreviated ______.", accept: ["cpr"], rationale: "CPR (cardiopulmonary resuscitation) supports circulation and breathing." },
      { type: "fill", q: "Immediate care given to the injured before professional help arrives is called ______ ______.", accept: ["first aid"], rationale: "First aid is the immediate temporary care before professional help." }
    ]
  }
];
