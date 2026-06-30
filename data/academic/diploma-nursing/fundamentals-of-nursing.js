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
      { type: "mcq", q: "The founder of modern nursing is:", options: ["Virginia Henderson", "Florence Nightingale", "Clara Barton", "Mother Teresa"], answer: 1, rationale: "Florence Nightingale is regarded as the founder of modern professional nursing." },
      { type: "mcq", q: "Florence Nightingale became famous for her work during the:", options: ["First World War", "Crimean War", "American Civil War", "Second World War"], answer: 1, rationale: "She reformed care for soldiers during the Crimean War (1850s)." },
      { type: "mcq", q: "International Nurses Day is celebrated on:", options: ["8 March", "12 May", "1 July", "5 December"], answer: 1, rationale: "It is held on 12 May, Florence Nightingale's birthday." },
      { type: "mcq", q: "When a nurse protects a patient's rights and acts in their best interest, she is acting as a/an:", options: ["Teacher", "Advocate", "Manager", "Researcher"], answer: 1, rationale: "Protecting patient rights and interests is the advocate role." },
      { type: "mcq", q: "Nursing education and practice in Bangladesh are regulated by the:", options: ["WHO", "BNMC", "ICN", "Red Crescent"], answer: 1, rationale: "The Bangladesh Nursing and Midwifery Council (BNMC) regulates nursing." },
      { type: "mcq", q: "The book 'Notes on Nursing' was written by:", options: ["Virginia Henderson", "Florence Nightingale", "Hildegard Peplau", "Dorothea Orem"], answer: 1, rationale: "Nightingale wrote 'Notes on Nursing', an early influential text." },
      { type: "mcq", q: "Which is a defining feature of a profession?", options: ["No special training", "A specialised body of knowledge and a code of ethics", "Working alone only", "No accountability"], answer: 1, rationale: "Professions have specialised knowledge, education, ethics, service and accountability." },
      { type: "mcq", q: "Teaching a patient about their medicines is the nurse's role as:", options: ["Advocate", "Health educator/teacher", "Counsellor", "Manager"], answer: 1, rationale: "Explaining care and promoting health is the teacher/educator role." },
      { type: "mcq", q: "Nightingale's reforms in the Crimea focused mainly on:", options: ["Surgery techniques", "Hygiene, sanitation and ventilation", "New medicines", "Military tactics"], answer: 1, rationale: "She improved sanitation, hygiene, nutrition and ventilation, cutting death rates." },
      { type: "mcq", q: "Working with doctors, pharmacists and physiotherapists for patient care is called ______ teamwork.", options: ["Single-discipline", "Multidisciplinary", "Independent", "Optional"], answer: 1, rationale: "Care is delivered by a multidisciplinary health-care team." },
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
    unit: "Unit 2 · Safe Patient Environment",
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

  /* ---------- Placeholders: structured, ready to author ---------- */
  { id: "fon-06-bed-making",   unit: "Unit 2 · Safe Patient Environment",     title: "Bed Making & Patient Positioning", placeholder: true, summary: "Types of beds, bed-making, and the common patient positions and their uses." },
  { id: "fon-07-infection",    unit: "Unit 2 · Safe Patient Environment",     title: "Infection Prevention & Control", placeholder: true, summary: "Chain of infection, asepsis, hand hygiene, PPE, isolation and waste management." },
  { id: "fon-08-body-mechanics", unit: "Unit 2 · Safe Patient Environment",   title: "Body Mechanics, Mobility & Transfers", placeholder: true, summary: "Safe moving and handling, ambulation, and prevention of complications of immobility." },
  { id: "fon-09-vital-signs",  unit: "Unit 3 · Meeting Basic Human Needs",    title: "Vital Signs", placeholder: true, summary: "Temperature, pulse, respiration and blood pressure — measurement and normal ranges." },
  { id: "fon-10-hygiene",      unit: "Unit 3 · Meeting Basic Human Needs",    title: "Personal Hygiene & Pressure-Area Care", placeholder: true, summary: "Bathing, oral, hair and nail care, and prevention of pressure injuries." },
  { id: "fon-11-comfort",      unit: "Unit 3 · Meeting Basic Human Needs",    title: "Comfort, Rest, Sleep, Pain & End-of-Life Care", placeholder: true, summary: "Promoting comfort, rest and sleep, pain management, and care of the dying." },
  { id: "fon-12-nutrition",    unit: "Unit 3 · Meeting Basic Human Needs",    title: "Nutrition & Feeding", placeholder: true, summary: "Balanced diet, therapeutic diets and methods of feeding including NG feeding." },
  { id: "fon-13-urinary",      unit: "Unit 3 · Meeting Basic Human Needs",    title: "Urinary Elimination", placeholder: true, summary: "Normal urination, problems, bedpan/urinal use and catheter care." },
  { id: "fon-14-bowel",        unit: "Unit 3 · Meeting Basic Human Needs",    title: "Bowel Elimination", placeholder: true, summary: "Normal defecation, constipation and diarrhoea, and enema administration." },
  { id: "fon-15-oxygenation",  unit: "Unit 3 · Meeting Basic Human Needs",    title: "Oxygenation & Respiratory Care", placeholder: true, summary: "Oxygen therapy, positioning, steam inhalation and suction." },
  { id: "fon-16-fluids",       unit: "Unit 3 · Meeting Basic Human Needs",    title: "Fluid & Electrolyte Balance and IV Therapy", placeholder: true, summary: "Fluid balance, intake-output, dehydration and basics of IV therapy." },
  { id: "fon-17-medication",   unit: "Unit 4 · Clinical Nursing Skills",      title: "Medication Administration", placeholder: true, summary: "Routes, the rights of medication administration, dosage and injections." },
  { id: "fon-18-wound-care",   unit: "Unit 4 · Clinical Nursing Skills",      title: "Wound Care, Dressings & Bandaging", placeholder: true, summary: "Wound healing, aseptic dressing technique and bandaging." },
  { id: "fon-19-specimen",     unit: "Unit 4 · Clinical Nursing Skills",      title: "Specimen Collection & Diagnostic Procedures", placeholder: true, summary: "Collecting blood, urine, stool and sputum specimens and assisting with tests." },
  { id: "fon-20-first-aid",    unit: "Unit 4 · Clinical Nursing Skills",      title: "First Aid & Emergency Nursing", placeholder: true, summary: "First-aid principles, CPR, bleeding, burns, shock, fractures and poisoning." }
];
