/* ============================================================
   B.Sc. in Nursing (BNMC 2018, 4-year) · B134 Fundamentals of
   Nursing — Paper I. Degree-level, syllabus-aligned. 18 topics.
   DEEPENED to advanced Bachelor's textbook depth: mechanism,
   normal values, classifications, evidence and clinical
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
    readMinutes: 26,
    summary: "The meaning, nature and scope of nursing; the historical evolution of the profession from the pre-Nightingale era to advanced practice; nursing as a discipline, art and science; the criteria and attributes of a profession; ways of knowing; the aims and standards of nursing; and the roles, functions and core competencies of the graduate professional nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is nursing?", p: "Nursing is both an art and a science concerned with the care of individuals, families, groups and communities across the entire health-illness continuum — to promote and maintain health, prevent illness, restore function, and support a dignified death. The International Council of Nurses (ICN, 2002) defines nursing as encompassing autonomous and collaborative care of people of all ages, in all settings, and including health promotion, illness prevention, advocacy, research, participation in shaping health policy, and care of the ill, disabled and dying. As a discipline it possesses a distinct, evolving body of theoretical knowledge, systematic methods of inquiry, and a skilled, ethically governed practice. Four verbs summarise its aims: promote, prevent, restore and comfort." },
      { h: "The four aims / functions of nursing", list: [
        "Promoting health — helping people move toward optimal wellness (education, immunisation, healthy lifestyle counselling).",
        "Preventing illness — reducing risk and detecting problems early (screening, safety, infection control).",
        "Restoring health — direct care, rehabilitation and helping the person regain lost function after illness or injury.",
        "Caring for the dying — palliative and end-of-life care that provides comfort and preserves dignity when cure is not possible.",
        "These aims apply whether the recipient is well, at risk, acutely ill, chronically ill or dying."
      ] },
      { h: "Definitions across time (evolution of the concept)", list: [
        "Nightingale (1859) — to put the patient in the best condition for nature to act; the focus is the environment and the reparative process.",
        "Virginia Henderson (1966) — assisting the individual, sick or well, in activities contributing to health, recovery or a peaceful death, that they would perform unaided given strength, will or knowledge.",
        "ANA (American Nurses Association) — the protection, promotion and optimisation of health, prevention of illness and injury, and advocacy in the care of individuals, families, communities and populations.",
        "ICN (2002) — autonomous and collaborative care across all settings, including advocacy, research and policy.",
        "The trend over time: from task-based, obedience-oriented, disease-focused work toward autonomous, evidence-based, person-centred, health-focused practice."
      ] },
      { h: "Nursing as art, science and profession", list: [
        "Art — the creative, humanistic, caring, interpersonal dimension: compassion, presence, comfort, moral sensitivity, therapeutic use of self and individualised care that cannot be reduced to a protocol.",
        "Science — the systematic, research-based body of knowledge, clinical reasoning and skilled psychomotor competence that guides safe, effective, evidence-based practice.",
        "Profession — nursing satisfies the recognised criteria of a profession and is self-regulating, not merely an occupation."
      ] },
      { h: "Ways of knowing in nursing (Carper)", list: [
        "Empirical knowing — the 'science' of nursing: verifiable, research-based, factual knowledge.",
        "Aesthetic knowing — the 'art' of nursing: perceiving the whole situation and responding creatively and compassionately.",
        "Personal knowing — self-awareness and authentic engagement in the therapeutic relationship.",
        "Ethical knowing — the moral component: knowledge of duty, right conduct and values.",
        "These four patterns show that competent nursing integrates fact, artistry, self and morality — not facts alone."
      ] },
      { h: "Criteria that qualify nursing as a profession", figure: {
        caption: "The defining attributes of a profession — nursing satisfies all of them.",
        svg: '<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Criteria of a profession"><rect x="10" y="10" width="420" height="200" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="220" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Attributes of a Profession</text><g font-family="sans-serif" font-size="11.5" fill="#15803D"><text x="35" y="66">1. Specialised body of knowledge</text><text x="35" y="92">2. Prolonged, university-based education</text><text x="35" y="118">3. Code of ethics</text><text x="35" y="144">4. Autonomy &amp; self-regulation</text><text x="35" y="170">5. Accountability &amp; standards</text><text x="35" y="196">6. Service (altruistic) orientation</text></g></svg>'
      } },
      { h: "Nursing as a discipline versus a profession", p: "A discipline is a branch of knowledge with its own theories, concepts and methods of inquiry (the academic dimension); a profession is the practical application of that knowledge in service to society under ethical and legal regulation (the occupational dimension). Degree-level nursing deliberately develops both: students learn to generate and critique knowledge (discipline) and to apply it accountably (profession). Nursing knowledge is generated by research, refined by theory, and validated in practice — a continuous cycle." },
      { h: "Historical development — the pre-Nightingale era", p: "Care of the sick is as old as humanity. Early care was provided in the home by families, and in the ancient and medieval periods by religious orders (deaconesses, monastic and military nursing orders such as the Knights Hospitaller) and, in some periods, by untrained or even disreputable attendants (the so-called 'dark age' of nursing during and after the Reformation, when many religious hospitals closed). Nursing lacked formal education, standards and social status until the 19th century." },
      { h: "Florence Nightingale (1820-1910) — the founder of modern nursing", list: [
        "During the Crimean War (1854) she and her nurses used sanitation, ventilation, nutrition and disciplined observation to reduce soldier mortality dramatically (reported to fall from around 40% toward 2%).",
        "She pioneered the use of statistics and graphical data (the polar-area/'coxcomb' diagram) to argue for reform — an early example of evidence-based practice.",
        "In 1860 she founded the first secular nurse-training school at St Thomas' Hospital, London, establishing nursing as an educated, respectable, disciplined occupation.",
        "Her 'Notes on Nursing' (1859) articulated the Environmental Theory and distinguished 'health nursing' (prevention) from 'sick nursing'.",
        "She was known as 'The Lady with the Lamp' for her night rounds; International Nurses Day (12 May) marks her birthday."
      ] },
      { h: "Evolution into the modern discipline", p: "Through the 20th century nursing developed university-based education, theoretical frameworks (from the 1950s onward), organised research programmes, specialisation and advanced practice. Key milestones include the founding of the ICN (1899), the emergence of nursing theories, the shift to degree-level entry in many countries, the growth of specialties and advanced-practice roles (nurse practitioners, clinical nurse specialists), and the establishment of nursing research journals and doctoral (PhD/DNP) programmes." },
      { h: "Nursing in Bangladesh", p: "In Bangladesh, nursing has progressed from certificate and diploma preparation to degree (B.Sc.) and postgraduate education. Education and practice are regulated by the Bangladesh Nursing and Midwifery Council (BNMC), which sets curricula, conducts registration examinations, licenses practitioners and maintains standards, reflecting the global movement toward graduate-level, evidence-based, autonomous practice." },
      { h: "Scope of nursing practice", list: [
        "Health promotion and disease prevention across the lifespan (immunisation, screening, education).",
        "Direct clinical care of the acutely and chronically ill in every setting.",
        "Rehabilitation and restoration of function after illness or injury.",
        "Palliative and end-of-life care focused on comfort and dignity.",
        "Education, counselling and advocacy for patients, families and communities.",
        "Leadership, management, coordination, research and contribution to health policy."
      ] },
      { h: "Roles and functions of the professional nurse", list: [
        "Caregiver — provides holistic, person-centred physical and psychosocial care; the central role.",
        "Communicator — the pivotal skill underpinning every other role.",
        "Teacher/educator — promotes health literacy, self-care and behaviour change.",
        "Advocate — protects and represents patient rights, interests and voice.",
        "Counsellor — supports coping, adjustment and decision-making.",
        "Leader, manager and coordinator — organises and directs care and teams.",
        "Change agent and researcher — generates, appraises and applies evidence."
      ] },
      { h: "Core competencies of the graduate nurse", p: "Degree-level competencies include critical thinking and sound clinical judgement, evidence-based practice, safe and skilled technical performance, effective therapeutic and professional communication, cultural competence and humility, ethical and legal accountability, leadership and management, effective teamwork within the interprofessional team, informatics literacy, and a commitment to lifelong learning and quality improvement. These map to the domains of a modern nursing competency framework: professional values, communication and interpersonal skills, nursing practice and decision-making, and leadership/management/team-working." },
      { h: "Clinical relevance", p: "Understanding the conceptual and historical bases is not academic decoration: it explains why the modern nurse asks 'what is the evidence?', why care is documented and audited, why the nurse is personally accountable rather than merely following orders, and why the patient is treated as an autonomous partner. It anchors professional identity and justifies the nurse's distinct contribution to the health team." },
      { h: "Key terms", list: [
        "Discipline — a branch of knowledge with its own theories and methods of inquiry.",
        "Autonomy — the authority and freedom to make and act on professional judgements.",
        "Accountability — being answerable for one's own actions and omissions.",
        "Person-centred care — care organised around the values, needs and preferences of the individual.",
        "Metaparadigm — the four global concepts (person, environment, health, nursing) a discipline addresses."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define nursing and explain, with examples, why it is described as both an art and a science.",
      "Describe the historical development of nursing, critically appraising the contributions of Florence Nightingale.",
      "Discuss the criteria that qualify nursing as a profession and evaluate how well nursing meets each.",
      "Explain Carper's four fundamental patterns of knowing and their significance for holistic practice.",
      "Enumerate and describe the roles and core competencies of the graduate professional nurse."
    ],
    assessment: [
      { type: "mcq", q: "A nurse individualises comfort measures and uses therapeutic presence for a dying patient while also titrating analgesia by evidence-based protocol. This best illustrates nursing as:", options: ["Both an art and a science", "Only a technical trade", "A branch of medicine", "An administrative service"], answer: 0, rationale: "The humanistic caring (art) is combined with evidence-based clinical reasoning (science); it is neither purely technical nor a subset of medicine." },
      { type: "mcq", q: "Nightingale's dramatic reduction in Crimean War mortality is most attributed to her use of:", options: ["Antibiotics", "Blood transfusion", "Sanitation, ventilation and statistical analysis", "Surgical anaesthesia"], answer: 2, rationale: "She applied environmental sanitation and pioneering health statistics; antibiotics and transfusion did not yet exist in usable form." },
      { type: "mcq", q: "A student argues that nursing is a profession, not just an occupation. The STRONGEST supporting criterion is that nursing has:", options: ["Short informal training", "A specialised knowledge base, prolonged education, a code of ethics and self-regulation", "No accountability", "No standards"], answer: 1, rationale: "These are the defining attributes distinguishing a profession from an occupation; the other options describe an occupation." },
      { type: "mcq", q: "A nurse relies on her ability to grasp the whole of a distressing situation and respond compassionately and creatively. In Carper's patterns this is which way of knowing?", options: ["Empirical knowing", "Aesthetic knowing", "Ethical knowing", "Personal knowing"], answer: 1, rationale: "Aesthetic knowing is the 'art' of nursing — perceiving the whole and responding creatively; empirical is the science, ethical the morals, personal the self." },
      { type: "mcq", q: "Henderson's classic definition emphasises assisting the person in activities they would do unaided given:", options: ["Money and time", "Family support only", "Strength, will or knowledge", "Medication"], answer: 2, rationale: "Henderson's definition centres on strength, will or knowledge; the others are not part of her formulation." },
      { type: "mcq", q: "The nurse questions an unclear medication order and refuses to proceed until it is clarified. This most directly reflects:", options: ["Delegation", "Autonomy and accountability", "Advocacy only", "Documentation"], answer: 1, rationale: "Acting on independent judgement and being answerable for it reflects autonomy and accountability; it also protects the patient but the core concept tested is professional accountability." },
      { type: "mcq", q: "Which body conducts registration examinations and licenses nurses in Bangladesh?", options: ["WHO", "ICN", "BNMC", "UNICEF"], answer: 2, rationale: "The Bangladesh Nursing and Midwifery Council regulates nursing education, registration and practice; WHO/ICN/UNICEF are international, not national regulators." },
      { type: "mcq", q: "During and after the Reformation many religious hospitals closed and care fell to untrained attendants. This period is often called the:", options: ["Golden age of nursing", "Dark age of nursing", "Renaissance of nursing", "Age of theory"], answer: 1, rationale: "The 'dark age' followed the closure of religious nursing institutions, before Nightingale's reforms restored status and training." },
      { type: "mcq", q: "A graduate nurse appraises a research paper before changing wound-care practice on the ward. This exemplifies which core competency?", options: ["Tradition-based practice", "Evidence-based practice", "Working in isolation", "Refusing accountability"], answer: 1, rationale: "Appraising and applying research to change practice is evidence-based practice, a core graduate competency." },
      { type: "mcq", q: "Nightingale's 1859 'Notes on Nursing' is the foundation of which theoretical perspective?", options: ["Self-Care Deficit Theory", "Environmental Theory", "Adaptation Model", "Human Caring Theory"], answer: 1, rationale: "Notes on Nursing articulated her Environmental Theory; the others belong to Orem, Roy and Watson respectively." },
      { type: "fill", q: "The founder of modern professional nursing is ____.", accept: ["Florence Nightingale", "Nightingale"], rationale: "Nightingale established modern nurse training and reformed sanitary care." },
      { type: "fill", q: "Being answerable for one's own nursing actions and omissions is called ____.", accept: ["accountability"], rationale: "Accountability is answerability for one's professional actions and omissions." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "fon-02-basic-concepts",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "Basic Concepts: Person, Environment, Health & Nursing (The Metaparadigm)",
    readMinutes: 26,
    summary: "The four central concepts of the nursing metaparadigm; the dimensions of the person; basic human needs and Maslow's hierarchy applied to priority-setting; human rights and the determinants of health; the health-illness continuum and models of health; illness, disease and illness behaviour; the stages of illness; and how person, environment, health and nursing interrelate.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The nursing metaparadigm", p: "The metaparadigm is the broadest, most abstract conceptual framework of the discipline and identifies its four central, interrelated concepts: person (the recipient of care), environment (internal and external surroundings), health (well-being along a continuum), and nursing (the actions, knowledge and relationship through which care is delivered). Every nursing theory is essentially a distinctive way of defining and linking these four concepts, so the metaparadigm is the shared 'map' of the whole discipline." },
      { h: "Person / client", p: "The person is a unique, holistic being with physical, psychological, social, cultural, developmental and spiritual dimensions that are interdependent — a change in one dimension affects the others (e.g., unrelieved pain lowers mood, sleep and immunity). The 'person' may be an individual, a family, a group or a community, and is an active partner in care rather than a passive recipient. The person has inherent worth, dignity and the right to self-determination." },
      { h: "Dimensions of the whole person (holism)", list: [
        "Physical (biological) — body structure and function, homeostasis.",
        "Psychological (emotional) — feelings, self-concept, coping and mental health.",
        "Sociocultural — relationships, roles, culture, ethnicity and social support.",
        "Developmental — the person's stage across the lifespan.",
        "Spiritual — meaning, purpose, values and beliefs.",
        "Holism holds these dimensions are integrated; the nurse assesses and cares for all, not the disease alone."
      ] },
      { h: "Basic human needs", p: "All persons share basic needs that must be met for survival and well-being. Nurses assess and help meet these needs and use them to prioritise care. Abraham Maslow (1943) arranged them in a hierarchy of five levels; lower-level (physiological and safety) needs generally take priority, though the order is flexible — an urgent higher need (e.g., a suicidal patient's safety) or overwhelming pain may override the usual sequence.", figure: {
        caption: "Maslow's hierarchy of human needs — nurses usually meet lower (physiological/safety) needs before higher ones.",
        svg: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maslow hierarchy of needs pyramid"><polygon points="230,20 300,70 160,70" fill="#0F4C3A"/><text x="230" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7">Self-actualisation</text><polygon points="160,72 300,72 340,122 120,122" fill="#15803D"/><text x="230" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Esteem</text><polygon points="120,124 340,124 375,172 85,172" fill="#22C55E"/><text x="230" y="153" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Love &amp; belonging</text><polygon points="85,174 375,174 405,218 55,218" fill="#86EFAC"/><text x="230" y="200" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Safety &amp; security</text><polygon points="55,220 405,220 435,255 25,255" fill="#DCFCE7"/><text x="230" y="242" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Physiological (air, water, food)</text></svg>'
      } },
      { h: "Applying Maslow to nursing priorities", list: [
        "Physiological (highest priority) — airway, breathing, circulation, fluids, nutrition, elimination, pain, rest. Airway always comes first.",
        "Safety and security — physical safety (falls, infection, injury), psychological safety, a predictable environment.",
        "Love and belonging — family presence, therapeutic relationship, reducing isolation.",
        "Esteem — dignity, independence, respect, involving the patient in decisions.",
        "Self-actualisation — helping the person reach their fullest potential and meaning.",
        "Rule of thumb — 'ABCs before all else', then actual problems before potential ones, then patient priorities."
      ] },
      { h: "Human rights in health care", list: [
        "The right to safe, competent and dignified care without discrimination.",
        "The right to information and to informed consent or refusal.",
        "The right to privacy and confidentiality.",
        "The right to participate in decisions about one's own care.",
        "The right to access care and to be treated equitably.",
        "These rights are the ethical foundation of person-centred, lawful practice."
      ] },
      { h: "Environment", p: "Environment includes all internal conditions (physiological and psychological states, homeostasis) and external conditions (physical surroundings, family, culture, socioeconomic status and community factors) that influence the person and their health. Nightingale first emphasised the external environment (air, light, warmth, cleanliness, quiet); contemporary nursing extends this to the psychosocial and to environmental determinants of health at population level." },
      { h: "Determinants of health", list: [
        "Biological and genetic factors — age, sex, inherited predisposition.",
        "Individual behaviour — diet, activity, smoking, adherence.",
        "Physical environment — housing, water, sanitation, air quality.",
        "Social and economic factors — income, education, employment, social support.",
        "Access to and quality of health services.",
        "Social determinants often influence outcomes more powerfully than clinical care alone."
      ] },
      { h: "Health and the health-illness continuum", p: "The WHO (1948) defines health as a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity. Health is dynamic and best represented as a continuum ranging from high-level (optimal) wellness through a neutral point to severe illness and death; a person moves along this continuum over time and can pursue wellness even with a chronic disease.", figure: {
        caption: "The health-illness continuum — a dynamic range, not a fixed state.",
        svg: '<svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Health illness continuum"><defs><linearGradient id="hicG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0F4C3A"/><stop offset="0.5" stop-color="#22C55E"/><stop offset="1" stop-color="#DCFCE7"/></linearGradient></defs><rect x="20" y="45" width="440" height="22" rx="11" fill="url(#hicG)" stroke="#0F4C3A" stroke-width="1.5"/><polygon points="20,40 20,72 8,56" fill="#0F4C3A"/><polygon points="460,40 460,72 472,56" fill="#0F4C3A"/><text x="30" y="32" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">High-level wellness</text><text x="240" y="95" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">neutral point</text><text x="450" y="32" text-anchor="end" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Illness &#8594; death</text></svg>'
      } },
      { h: "Models of health and wellness", list: [
        "Clinical model — health is simply the absence of disease (the narrowest view).",
        "Role-performance model — health is the ability to fulfil one's social roles.",
        "Adaptive model — health is successful adaptation to change and stressors.",
        "Eudaimonistic model — health is the fullest realisation of one's potential (the broadest, most positive view).",
        "Agent-host-environment model — health/illness results from the interaction of a causal agent, a susceptible host and the environment."
      ] },
      { h: "Illness, disease and illness behaviour", list: [
        "Disease — an objective, measurable pathological process (e.g., raised blood glucose in diabetes).",
        "Illness — the subjective, personal experience of not being well, shaped by culture and perception.",
        "Acute illness — short duration, usually reversible; chronic illness — long-lasting, often irreversible, requiring self-management.",
        "Illness behaviour — how people perceive, interpret and act on symptoms (e.g., seeking help, adopting the sick role); understanding it helps the nurse support timely, appropriate care."
      ] },
      { h: "Stages of illness behaviour (Suchman)", list: [
        "Symptom experience — the person perceives that something is wrong.",
        "Assumption of the sick role — accepting illness and seeking lay advice.",
        "Medical contact — seeking professional advice and validation.",
        "Dependent patient role — accepting care and following treatment.",
        "Recovery/rehabilitation — relinquishing the sick role and resuming normal roles.",
        "Understanding these stages helps the nurse recognise denial, delayed help-seeking and the challenges of resuming normal life."
      ] },
      { h: "Nursing as the fourth concept", p: "Nursing is the deliberate application of knowledge, judgement and caring actions — through the nursing process and the therapeutic relationship — to help the person achieve, maintain or regain the best possible health along the continuum. Nursing is the active concept that links and acts upon the other three: it works within the environment to influence the person's health." },
      { h: "Interrelationship of the four concepts", p: "The person, situated in an environment, experiences health that shifts along a continuum; nursing intervenes within that environment to influence the person's health. Understanding these relationships allows the nurse to give holistic, individualised, context-aware care — for example, recognising that discharging a frail patient to an unsafe home environment will undermine health regardless of excellent hospital care." },
      { h: "Clinical relevance", p: "The metaparadigm turns abstract concepts into daily decisions: the nurse assesses the whole person (not just the diagnosis), modifies the environment (positioning, cleanliness, family presence), aims care at moving the patient toward wellness on the continuum, and evaluates whether nursing actions achieved that movement. It is the conceptual justification for holistic assessment and care planning." },
      { h: "Key terms", list: [
        "Holism — viewing the person as an integrated whole rather than separate parts.",
        "Wellness — active pursuit of optimal health and functioning, possible even with disease.",
        "Homeostasis — the internal balance the body maintains for health.",
        "Determinants of health — factors (biological, behavioural, environmental, social) that shape health outcomes.",
        "Illness behaviour — how a person perceives and responds to symptoms."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define the nursing metaparadigm and describe how a chosen theory links its four central concepts.",
      "Explain Maslow's hierarchy of needs and apply it to setting nursing priorities for an acutely ill patient.",
      "Discuss the health-illness continuum and compare the clinical, adaptive and eudaimonistic models of health.",
      "Explain the determinants of health and their significance for nursing.",
      "Describe Suchman's stages of illness behaviour with a clinical example."
    ],
    assessment: [
      { type: "mcq", q: "The four concepts of the nursing metaparadigm are person, environment, nursing and:", options: ["Medicine", "Health", "Technology", "Economics"], answer: 1, rationale: "The metaparadigm consists of person, environment, health and nursing; medicine, technology and economics are not among the four." },
      { type: "mcq", q: "A patient has an obstructed airway, is anxious, and is lonely. Using Maslow, the nurse addresses FIRST:", options: ["Loneliness", "Anxiety", "The airway", "Self-esteem"], answer: 2, rationale: "Airway is a physiological need at the base of the hierarchy and always takes priority over safety, belonging and esteem needs." },
      { type: "mcq", q: "The WHO defines health as complete physical, mental and social well-being and not merely the:", options: ["Presence of wellness", "Absence of disease", "Ability to work", "Sign of youth"], answer: 1, rationale: "The WHO definition stresses positive well-being, explicitly rejecting 'mere absence of disease' as sufficient." },
      { type: "mcq", q: "A man with well-controlled diabetes runs marathons and reports feeling healthy. This best illustrates that:", options: ["Disease and wellness cannot coexist", "Wellness can be pursued even with a chronic disease", "He has no disease", "Health is static"], answer: 1, rationale: "The continuum allows high-level wellness despite chronic disease; the man clearly still has diabetes but is far toward the wellness end." },
      { type: "mcq", q: "A nurse states that a patient is healthy only because he can carry out his job as a labourer. This reflects which model of health?", options: ["Eudaimonistic model", "Clinical model", "Role-performance model", "Adaptive model"], answer: 2, rationale: "Defining health by the ability to fulfil social roles is the role-performance model." },
      { type: "mcq", q: "A confused patient signs a consent form he cannot understand. The right most clearly at risk is the right to:", options: ["Informed consent", "Parking", "A private room", "A specific nurse"], answer: 0, rationale: "Valid informed consent requires capacity and understanding; consent obtained without them violates this right." },
      { type: "mcq", q: "Income, education and housing are examples of:", options: ["Vital signs", "Social determinants of health", "Nursing diagnoses", "Interventions"], answer: 1, rationale: "These are social/economic determinants that shape health outcomes, often more than clinical care." },
      { type: "mcq", q: "A patient acknowledges he is unwell, stops work and asks his family for advice before seeing a doctor. In Suchman's stages this is:", options: ["Medical contact", "Symptom experience", "Assumption of the sick role", "Recovery"], answer: 2, rationale: "Accepting illness and seeking lay/family advice is the assumption of the sick role, before formal medical contact." },
      { type: "mcq", q: "A patient who ignores chest pain for two days before seeking help demonstrates:", options: ["Homeostasis", "Illness behaviour", "The metaparadigm", "Self-actualisation"], answer: 1, rationale: "How a person perceives and acts on symptoms — including delay — is illness behaviour." },
      { type: "mcq", q: "The internal balance the body maintains for health is called:", options: ["Homeostasis", "Metastasis", "Diagnosis", "Prognosis"], answer: 0, rationale: "Homeostasis is the maintenance of a stable internal environment; the other terms are unrelated." },
      { type: "fill", q: "The base of Maslow's hierarchy consists of ____ needs.", accept: ["physiological", "physiologic"], rationale: "Physiological needs (air, water, food) form the foundation of the hierarchy." },
      { type: "fill", q: "A measurable pathological process is called ____, whereas the personal experience of it is illness.", accept: ["disease"], rationale: "Disease is the objective pathology; illness is the subjective experience." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "fon-03-nursing-process",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "The Nursing Process: Assessment, Diagnosis, Planning, Implementation & Evaluation",
    readMinutes: 28,
    summary: "The nursing process as the systematic method of clinical reasoning; the five phases (ADPIE); data types, sources and validation; nursing versus medical diagnoses and the PES format; priority-setting; SMART goal-setting; types of intervention; evaluation and the feedback loop; and its role in critical thinking and evidence-based, individualised care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is the nursing process?", p: "The nursing process is a systematic, cyclical, deliberate problem-solving framework that guides the nurse's clinical reasoning to deliver individualised, goal-directed and evidence-based care. It is patient-centred, dynamic, universally applicable across settings and specialties, interpersonal, and organised into five interrelated phases remembered by the acronym ADPIE: Assessment, Diagnosis, Planning, Implementation and Evaluation. It provides a common language and a defensible, auditable structure for care." },
      { h: "Origins and importance", p: "The process evolved from a three-phase model (assess, plan, evaluate) to today's five phases as the discipline matured. It parallels the scientific method: gathering data, forming a hypothesis (diagnosis), planning and acting, then testing the result (evaluation). Its importance is that it promotes safe, consistent, individualised, coordinated and legally defensible care, and it converts intuition into structured, teachable reasoning." },
      { h: "Characteristics of the process", list: [
        "Cyclic and dynamic — phases overlap and repeat; evaluation feeds back to reassessment.",
        "Patient-centred and individualised — organised around the specific person's responses.",
        "Interpersonal and collaborative — requires the therapeutic relationship and the team.",
        "Universally applicable — used with individuals, families and communities in any setting.",
        "Problem-solving and outcome-oriented — driven by critical thinking toward measurable results."
      ] },
      { h: "The five phases (ADPIE)", figure: {
        caption: "The five cyclical phases of the nursing process (ADPIE) — evaluation feeds back to reassessment.",
        svg: '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nursing process cycle: assessment, diagnosis, planning, implementation, evaluation"><defs><marker id="fpArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="90" width="80" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="60" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Assess</text><rect x="120" y="90" width="80" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="160" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Diagnose</text><rect x="220" y="90" width="80" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="260" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Plan</text><rect x="320" y="90" width="80" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="360" y="117" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Implement</text><rect x="400" y="30" width="70" height="44" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="435" y="57" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Evaluate</text><line x1="100" y1="112" x2="116" y2="112" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fpArr)"/><line x1="200" y1="112" x2="216" y2="112" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fpArr)"/><line x1="300" y1="112" x2="316" y2="112" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fpArr)"/><line x1="400" y1="95" x2="435" y2="76" stroke="#0F4C3A" stroke-width="2" marker-end="url(#fpArr)"/><path d="M410 40 C 200 -10, 60 30, 60 86" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#fpArr)"/><text x="235" y="18" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">reassess (feedback loop)</text></svg>'
      } },
      { h: "1. Assessment", p: "Systematic and continuous collection, validation, organisation and documentation of data. Subjective data are what the patient reports (symptoms, feelings, perceptions); objective data are observable and measurable (signs, vital signs, laboratory values). Sources include the patient (primary source), and family, records, other professionals and literature (secondary sources). Data are gathered through interview (health history), observation and physical examination, then validated (checked for accuracy/consistency) and clustered for analysis." },
      { h: "Types and validation of data", list: [
        "Subjective (covert) — 'I feel dizzy'; only the patient can report it.",
        "Objective (overt) — BP 90/60 mmHg; observable/measurable by others.",
        "Primary source — the patient; secondary sources — family, records, other staff, literature.",
        "Validation — comparing subjective and objective cues, clarifying ambiguous data and re-checking abnormal findings to avoid errors.",
        "Comprehensive (admission) versus focused (problem-specific) versus emergency versus ongoing assessment."
      ] },
      { h: "2. Nursing diagnosis", p: "Analysis and interpretation of clustered data to make a clinical judgement about the patient's actual, risk (potential) or health-promotion responses that nurses are licensed and competent to treat independently. A nursing diagnosis differs from a medical diagnosis: a medical diagnosis names a disease (e.g., pneumonia) and directs medical treatment, whereas a nursing diagnosis names the human response to it (e.g., impaired gas exchange, activity intolerance) and directs nursing care. NANDA-International (NANDA-I) provides the standardised diagnostic taxonomy." },
      { h: "Types of nursing diagnosis", list: [
        "Actual — a problem present now, supported by defining characteristics.",
        "Risk (potential) — a vulnerability that may develop ('risk for...').",
        "Health-promotion — readiness to enhance a healthy behaviour.",
        "Syndrome — a cluster of diagnoses that occur together (e.g., relocation stress syndrome)."
      ] },
      { h: "Components of a nursing diagnosis (PES)", figure: {
        caption: "The three-part PES format of an actual nursing diagnosis.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PES format problem etiology signs"><defs><marker id="peArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="12" y="45" width="140" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="82" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Problem (P)</text><text x="82" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">the label</text><rect x="180" y="45" width="140" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="250" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Etiology (E)</text><text x="250" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">related to...</text><rect x="348" y="45" width="140" height="50" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="418" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Signs/Sx (S)</text><text x="418" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">as evidenced by</text><line x1="152" y1="70" x2="176" y2="70" stroke="#0F4C3A" stroke-width="2" marker-end="url(#peArr)"/><line x1="320" y1="70" x2="344" y2="70" stroke="#0F4C3A" stroke-width="2" marker-end="url(#peArr)"/><text x="250" y="24" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Acute pain r/t incision AEB 8/10 &amp; guarding</text></svg>'
      } },
      { h: "PES explained", list: [
        "Problem (P) — the diagnostic label / human response.",
        "Etiology (E) — the related factors or probable cause ('related to').",
        "Signs and symptoms (S) — the defining characteristics ('as evidenced by').",
        "Example: Acute pain (P) related to surgical incision (E) as evidenced by a pain score of 8/10 and guarding (S).",
        "Risk diagnoses use a two-part statement (P + risk factors), as no signs/symptoms are yet present."
      ] },
      { h: "3. Planning and priority-setting", p: "Setting priorities and establishing patient-centred goals and expected outcomes, then selecting evidence-based interventions to achieve them. Priorities may be guided by Maslow's hierarchy (life-threatening/physiological first), the ABCs, actual before risk problems, and the patient's own priorities. Problems may be ranked as high, intermediate or low priority. Goals may be short-term or long-term and should be written as what the PATIENT will achieve, not what the nurse will do." },
      { h: "SMART goals and outcomes", list: [
        "Specific — clear and precise.",
        "Measurable — quantifiable so achievement can be judged.",
        "Achievable — realistic for this patient.",
        "Relevant/Realistic — meaningful to the patient and the problem.",
        "Time-bound — with a defined target time frame.",
        "Example: 'The patient will ambulate 20 metres unaided by day 3 post-op.'"
      ] },
      { h: "4. Implementation", p: "Carrying out (or delegating and supervising) the planned interventions safely and skilfully while continuing to assess the patient's response and reprioritise. Nursing interventions are of three types: independent (nurse-initiated, within the nurse's own authority, e.g., repositioning, teaching), dependent (physician-ordered, e.g., administering a prescribed drug), and collaborative/interdependent (carried out with other disciplines). The nurse documents care accurately and adapts to the patient's changing condition." },
      { h: "5. Evaluation", p: "Measuring the patient's progress toward the stated goals using the expected outcomes as measurable criteria, and judging whether each goal was met, partially met or unmet. The nurse then identifies why (e.g., unrealistic goal, ineffective intervention, changed condition) and revises accordingly. Based on evaluation, the plan is continued, modified or terminated — the process loops back to reassessment, making it dynamic and self-correcting." },
      { h: "Critical thinking and clinical judgement", p: "The nursing process is powered by critical thinking — purposeful, reflective, reasoned judgement that questions assumptions, interprets cues and weighs alternatives. Modern models (e.g., the clinical judgement model: recognise cues, analyse, prioritise hypotheses, generate solutions, take action, evaluate) formalise this reasoning. Critical thinking prevents the nurse from acting on habit or bias and underpins patient safety." },
      { h: "Evidence-based practice", p: "At degree level each phase integrates the best available evidence, the nurse's clinical expertise and the patient's values and preferences (the three pillars of evidence-based practice), ensuring care is individualised, defensible, current and safe. The nurse asks a focused question, finds and appraises evidence, applies it, and evaluates the outcome — the same loop as the nursing process." },
      { h: "Clinical relevance", p: "A post-operative patient reports pain (assessment); the nurse diagnoses Acute pain related to the incision (diagnosis); sets a goal of pain score under 3/10 within 1 hour (planning); administers prescribed analgesia and repositions (implementation, dependent + independent); then reassesses the score at 1 hour (evaluation). If unmet, the cycle repeats. This shows the process as a continuous safety and quality mechanism, not a paperwork exercise." },
      { h: "Key terms", list: [
        "Subjective data — what the patient states (symptoms).",
        "Objective data — observable, measurable findings (signs).",
        "Expected outcome — a specific, measurable criterion of goal achievement.",
        "NANDA-I — the international standardised taxonomy of nursing diagnoses.",
        "Independent intervention — a nurse-initiated action within the nurse's own authority."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define the nursing process and describe its five phases in sequence with a clinical example.",
      "Differentiate a nursing diagnosis from a medical diagnosis and classify the types of nursing diagnosis.",
      "Explain the PES format and write a correctly structured nursing diagnosis.",
      "Discuss SMART goals and distinguish independent, dependent and collaborative interventions.",
      "Explain the role of critical thinking and evidence-based practice within the nursing process."
    ],
    assessment: [
      { type: "mcq", q: "A nurse checks abnormal vital signs against the patient's report and re-measures before acting. This activity is called:", options: ["Delegation", "Data validation", "Evaluation", "Documentation"], answer: 1, rationale: "Validation confirms accuracy of cues before diagnosis, reducing error; it is not delegation, evaluation or mere documentation." },
      { type: "mcq", q: "A patient states 'I feel short of breath.' This is:", options: ["Subjective data", "Objective data", "A nursing intervention", "An outcome"], answer: 0, rationale: "What the patient states (a symptom only they can report) is subjective data; an observed low SpO2 would be objective." },
      { type: "mcq", q: "'Risk for falls related to unsteady gait and sedation' is which type of nursing diagnosis?", options: ["Actual", "Risk (potential)", "Medical", "Syndrome"], answer: 1, rationale: "No signs/symptoms are present yet; a vulnerability is identified, so it is a risk diagnosis stated in two parts." },
      { type: "mcq", q: "In the PES statement 'Acute pain related to surgical incision as evidenced by grimacing', 'related to surgical incision' is the:", options: ["Problem", "Etiology", "Sign", "Outcome"], answer: 1, rationale: "The 'related to' clause names the cause and is the etiology (E); the label is P and grimacing is S." },
      { type: "mcq", q: "Which is correctly written as a SMART patient goal?", options: ["The nurse will give analgesia", "The patient will report pain under 3/10 within 1 hour", "Improve the patient's comfort", "Monitor pain"], answer: 1, rationale: "It is specific, measurable, patient-centred and time-bound; the others are nurse-focused or vague." },
      { type: "mcq", q: "Administering a prescribed antibiotic is a ____ intervention.", options: ["Independent", "Collaborative", "Dependent", "Self-care"], answer: 2, rationale: "It requires a physician's order, so it is a dependent intervention; an independent one is nurse-initiated." },
      { type: "mcq", q: "Two patients need attention: one has an obstructed airway, the other requests help to the toilet. Applying priority-setting, the nurse attends FIRST to the:", options: ["Toileting request", "Airway problem", "Whoever asked first", "Neither, call for help"], answer: 1, rationale: "Life-threatening, physiological (ABC) problems are the highest priority; the airway takes precedence over the toileting need." },
      { type: "mcq", q: "One hour after analgesia the nurse rechecks the pain score against the goal. This is the ____ phase.", options: ["Assessment", "Planning", "Implementation", "Evaluation"], answer: 3, rationale: "Comparing progress to the expected outcome and judging goal achievement is evaluation." },
      { type: "mcq", q: "The correct ADPIE sequence is:", options: ["Assessment, Diagnosis, Planning, Implementation, Evaluation", "Diagnosis, Assessment, Planning, Implementation, Evaluation", "Planning, Assessment, Diagnosis, Evaluation, Implementation", "Assessment, Planning, Diagnosis, Implementation, Evaluation"], answer: 0, rationale: "ADPIE = Assessment, Diagnosis, Planning, Implementation, Evaluation, in that order." },
      { type: "mcq", q: "Evidence-based practice integrates best available evidence, patient values and:", options: ["Tradition", "Clinical expertise", "Cost only", "Convenience"], answer: 1, rationale: "The three pillars are evidence, patient values and the nurse's clinical expertise — not tradition or convenience." },
      { type: "fill", q: "The five phases of the nursing process are abbreviated ____.", accept: ["ADPIE", "adpie"], rationale: "Assessment, Diagnosis, Planning, Implementation, Evaluation." },
      { type: "fill", q: "Data that are observable and measurable, such as vital signs, are called ____ data.", accept: ["objective"], rationale: "Objective data are signs; subjective data are what the patient reports." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "fon-04-theories",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "Nursing Theories & Models; Quality, Client-Centred & Holistic Care",
    readMinutes: 27,
    summary: "The purpose, components and levels of nursing theory; major theorists and their models (Nightingale, Henderson, Peplau, Orem, Roy, Watson, Leininger, Abdellah, King); the attributes and development of quality, client-centred and holistic nursing care; the six aims of quality; the Donabedian framework; and nurse-sensitive indicators of care quality.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why nursing theory matters", p: "A theory is a set of interrelated concepts, definitions and propositions that describe, explain or predict phenomena and guide practice. Nursing theories give the discipline a distinct identity and knowledge structure, organise and communicate knowledge, direct assessment and intervention, generate and test research questions, guide education and curriculum, and justify why nurses do what they do. They convert nursing from routine task-completion into reasoned, purposeful, evidence-informed practice." },
      { h: "Components of a theory", list: [
        "Concepts — the building blocks (abstract ideas such as 'self-care').",
        "Definitions — the meaning assigned to each concept (theoretical and operational).",
        "Propositions/assumptions — statements linking concepts and describing relationships.",
        "Phenomenon — the aspect of reality the theory addresses.",
        "Metaparadigm linkage — how the theory defines person, environment, health and nursing."
      ] },
      { h: "Levels of theory", figure: {
        caption: "Levels of nursing theory by abstraction and scope.",
        svg: '<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Levels of nursing theory"><polygon points="220,15 320,70 120,70" fill="#0F4C3A"/><text x="220" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7">Grand theory</text><text x="220" y="64" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#DCFCE7">broad / abstract</text><polygon points="120,72 320,72 370,130 70,130" fill="#22C55E"/><text x="220" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Middle-range theory</text><text x="220" y="114" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">testable / near practice</text><polygon points="70,132 370,132 420,188 20,188" fill="#DCFCE7"/><text x="220" y="162" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Practice (micro) theory</text><text x="220" y="176" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">specific / concrete</text></svg>'
      } },
      { h: "Levels explained", list: [
        "Metatheory — theory about theory itself (the most abstract).",
        "Grand theories — broad, abstract, comprehensive frameworks (e.g., Orem's Self-Care Deficit Theory, Roy's Adaptation Model).",
        "Middle-range theories — narrower, more concrete and testable, closer to practice (e.g., theories of pain, comfort, uncertainty in illness).",
        "Practice (micro) theories — very specific, guiding a defined situation, population or intervention."
      ] },
      { h: "Selected major theorists", list: [
        "Florence Nightingale — Environmental Theory: manipulate the environment (air, light, warmth, cleanliness, quiet, nutrition) to support the body's reparative process.",
        "Virginia Henderson — Need Theory: the nurse assists the individual in 14 basic activities they would perform unaided given strength, will or knowledge.",
        "Hildegard Peplau — Interpersonal Relations Theory: nursing is a therapeutic interpersonal process with phases (orientation, working, termination).",
        "Dorothea Orem — Self-Care Deficit Theory: nursing is needed when a person's self-care demand exceeds their self-care ability.",
        "Sister Callista Roy — Adaptation Model: the person is an adaptive system; nursing promotes adaptation across physiological, self-concept, role-function and interdependence modes.",
        "Jean Watson — Theory of Human Caring: caring is the moral, relational core of nursing (the caritas processes).",
        "Madeleine Leininger — Transcultural Nursing/Culture Care Theory: care must be congruent with the patient's cultural values and beliefs.",
        "Faye Abdellah — 21 nursing problems; Imogene King — Goal Attainment through nurse-patient interaction."
      ] },
      { h: "Applying theory to practice", p: "Theory is chosen to fit the situation. On a rehabilitation ward Orem's self-care framework guides graded restoration of the patient's own abilities; in a hospice Watson's caring theory guides relational, comfort-focused presence; with a patient from an unfamiliar culture Leininger's model prompts culturally congruent care; a nurse building trust with an anxious patient draws on Peplau. Selecting and applying the right lens improves the relevance and outcomes of care." },
      { h: "Client-centred (person-centred) care", p: "Client-centred care organises care around the individual's values, preferences, culture and expressed needs, and treats the patient as an active, informed partner. It is grounded in respect for autonomy, shared decision-making and the therapeutic relationship, and is one of the six aims of high-quality care. It contrasts with task- or disease-centred care where routines take precedence over the person." },
      { h: "Attributes and development of client-centred care", list: [
        "Respect for the patient's values, preferences and expressed needs.",
        "Coordination and integration of care; clear information, communication and education.",
        "Physical comfort and emotional support; involvement of family and carers.",
        "Continuity and access; the patient as a partner in decisions.",
        "Developed through active listening, shared decision-making, cultural humility and continuity of caregiver."
      ] },
      { h: "Holistic nursing care", p: "Holistic care addresses the whole person — body, mind, emotion, social relationships and spirit — recognising that these dimensions are interconnected and that a change in one affects the others. It treats the patient, not merely the disease, and situates the person within family and community context." },
      { h: "Attributes and development of holistic care", list: [
        "Attends to physical, psychological, social, cultural and spiritual needs together.",
        "Views the patient within family and community context.",
        "Uses caring presence, therapeutic communication and comfort measures.",
        "Integrates evidence-based clinical care with complementary comfort strategies.",
        "Developed by comprehensive assessment, individualised planning and reflective, self-aware practice."
      ] },
      { h: "The six aims of quality care", list: [
        "Safe — avoiding harm to patients from care intended to help them.",
        "Effective — providing care based on evidence to those who could benefit.",
        "Patient-centred — respecting individual preferences, needs and values.",
        "Timely — reducing waits and harmful delays.",
        "Efficient — avoiding waste of equipment, supplies, ideas and energy.",
        "Equitable — quality that does not vary by personal characteristics such as sex, ethnicity or income."
      ] },
      { h: "Quality of nursing care and the Donabedian framework", p: "Donabedian's classic framework evaluates quality through three linked domains: structure (the resources and system — staffing, skill mix, equipment), process (how care is actually delivered), and outcome (the results for the patient). Good structure enables good process, which produces good outcomes; measuring all three gives a complete picture of quality.", figure: {
        caption: "Donabedian's structure-process-outcome model of care quality.",
        svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Donabedian structure process outcome"><defs><marker id="doArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="40" width="130" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="80" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Structure</text><text x="80" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">staffing, equipment</text><rect x="185" y="40" width="130" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="250" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Process</text><text x="250" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">how care is given</text><rect x="355" y="40" width="130" height="46" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="420" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Outcome</text><text x="420" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">patient results</text><line x1="145" y1="63" x2="181" y2="63" stroke="#0F4C3A" stroke-width="2" marker-end="url(#doArr)"/><line x1="315" y1="63" x2="351" y2="63" stroke="#0F4C3A" stroke-width="2" marker-end="url(#doArr)"/></svg>'
      } },
      { h: "Indicators of quality of nursing care", list: [
        "Nurse-sensitive outcome indicators — pressure injury rate, patient fall rate, hospital-acquired infection rate, medication error rate.",
        "Process indicators — hand-hygiene compliance, timely assessment and documentation, pain reassessment.",
        "Structure indicators — nurse staffing levels and skill mix.",
        "Patient-experience indicators — satisfaction, reported respect, information and involvement."
      ] },
      { h: "Clinical relevance", p: "A ward with a rising fall rate (an adverse nurse-sensitive outcome) reviews its structure (staffing at night), process (whether fall-risk assessments and hourly rounding actually occur) and outcome (the fall data trend) using Donabedian's model; it also reframes routines around each patient (client-centred care) and addresses the whole person's needs (holistic care). Theory and quality frameworks thus directly shape day-to-day improvement." },
      { h: "Key terms", list: [
        "Metaparadigm — the four global concepts a theory addresses.",
        "Nurse-sensitive indicator — an outcome directly influenced by the quantity/quality of nursing care.",
        "Cultural humility — ongoing self-reflection and respect for the patient's culture.",
        "Caritas — Watson's caring processes at the heart of nursing.",
        "Donabedian model — the structure-process-outcome approach to quality."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define nursing theory, list its components, and explain its importance to practice, research and education.",
      "Describe the levels of nursing theory with an example of each.",
      "Compare the models of Nightingale, Orem, Roy and Watson and match one to a clinical setting.",
      "Discuss the attributes and ways to develop client-centred and holistic nursing care.",
      "Explain the Donabedian framework and give examples of nurse-sensitive quality indicators."
    ],
    assessment: [
      { type: "mcq", q: "On a rehabilitation ward the nurse grades activities to rebuild the patient's own abilities. Which theory best fits this approach?", options: ["Nightingale's Environmental Theory", "Orem's Self-Care Deficit Theory", "Peplau's Interpersonal Theory", "Leininger's Culture Care Theory"], answer: 1, rationale: "Orem's model focuses on restoring the patient's self-care ability where a deficit exists; the others focus on environment, relationship and culture." },
      { type: "mcq", q: "A theory of comfort that is testable and close to practice is a:", options: ["Grand theory", "Middle-range theory", "Metatheory", "Practice-independent theory"], answer: 1, rationale: "Middle-range theories are narrower, concrete and testable; grand theory is broad and metatheory is theory about theory." },
      { type: "mcq", q: "Peplau's theory frames nursing primarily as a(n):", options: ["Interpersonal (therapeutic) process", "Environmental process", "Adaptation process", "Mechanical task"], answer: 0, rationale: "Peplau's Interpersonal Relations Theory frames nursing as a therapeutic relationship, not an environmental or adaptation model." },
      { type: "mcq", q: "A nurse adapts diet teaching to a patient's religious food practices. This most reflects which theorist?", options: ["Roy", "Nightingale", "Leininger", "Henderson"], answer: 2, rationale: "Leininger's Transcultural/Culture Care Theory stresses culturally congruent care." },
      { type: "mcq", q: "In Donabedian's framework, the ward's nurse-to-patient ratio is an example of:", options: ["Process", "Outcome", "Structure", "Evaluation"], answer: 2, rationale: "Staffing and resources are structure; how care is given is process and patient results are outcome." },
      { type: "mcq", q: "Hand-hygiene compliance measured on a ward is best classified as a:", options: ["Structure indicator", "Process indicator", "Outcome indicator", "Financial indicator"], answer: 1, rationale: "It measures how care is delivered, so it is a process indicator, not a resource (structure) or result (outcome)." },
      { type: "mcq", q: "A rising ward pressure-injury rate is a:", options: ["Structure indicator", "Nurse-sensitive outcome indicator", "Medical diagnosis", "Process only"], answer: 1, rationale: "Pressure injury rate is a patient result directly influenced by nursing care — a nurse-sensitive outcome." },
      { type: "mcq", q: "Providing evidence-based care without variation by a patient's income or ethnicity satisfies which aim of quality?", options: ["Timely", "Equitable", "Efficient", "Safe"], answer: 1, rationale: "Equitable care does not vary by personal characteristics such as income or ethnicity." },
      { type: "mcq", q: "Henderson's Need Theory describes how many basic activities/needs?", options: ["7", "10", "14", "21"], answer: 2, rationale: "Henderson described 14 basic human needs; Abdellah described 21 nursing problems." },
      { type: "mcq", q: "Care organised around the patient's values and preferences, with the patient as an active partner, is:", options: ["Task-centred care", "Client-centred care", "Custodial care", "Routine care"], answer: 1, rationale: "Client-centred care makes the patient's values central and the patient a partner in decisions." },
      { type: "fill", q: "An outcome directly influenced by nursing care, such as fall rate, is called a nurse-____ indicator.", accept: ["sensitive"], rationale: "Nurse-sensitive indicators reflect the impact of nursing care." },
      { type: "fill", q: "Donabedian's three quality domains are structure, ____ and outcome.", accept: ["process"], rationale: "The model is structure-process-outcome." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "fon-05-delivery-system",
    unit: "Unit 1 · Conceptual Bases of Nursing",
    title: "Health-Care Delivery System, Levels of Care & Nursing Accountability",
    readMinutes: 26,
    summary: "The structure, aims and WHO building blocks of the health-care delivery system; primary, secondary and tertiary levels of care and the levels of prevention; types of care facilities; the interprofessional team; nurses' roles in promoting, maintaining and restoring health; nursing self-management; responsibility versus accountability; and the five rights of delegation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The health-care delivery system", p: "A health-care delivery system is the organised network of people, institutions, resources, financing and services that provides health care to a population. Its functions are to promote health, prevent disease, diagnose and treat illness, provide rehabilitation, and support end-of-life care. In Bangladesh it spans community and primary facilities (community clinics, union sub-centres and upazila health complexes), district hospitals, and specialised/tertiary institutions (medical college hospitals), complemented by private, NGO and traditional providers." },
      { h: "Aims of a good health system", list: [
        "Improve the health of the population it serves.",
        "Respond to people's expectations and treat them with dignity.",
        "Provide financial protection against the cost of ill health.",
        "Deliver services that are safe, effective, accessible and equitable.",
        "Universal Health Coverage (UHC) — all people receive needed services without financial hardship — is the overarching global goal."
      ] },
      { h: "Building blocks of a health system (WHO)", list: [
        "Service delivery — safe, effective, accessible services.",
        "Health workforce — competent, sufficient and equitably distributed staff, including nurses.",
        "Health information systems — reliable data for decisions.",
        "Access to essential medicines and technologies.",
        "Financing — adequate, fair funding with financial protection.",
        "Leadership and governance — policy, regulation and oversight."
      ] },
      { h: "Levels of care", list: [
        "Primary care — the first, most accessible point of contact; health promotion, prevention, screening, and management of common problems (community clinics, health centres, general practice).",
        "Secondary care — more specialised diagnostic and treatment services, usually on referral (district/general hospitals, specialists).",
        "Tertiary care — highly specialised, complex care using advanced technology (medical college and specialised hospitals, ICUs, transplant, cardiac and cancer centres).",
        "Some systems add quaternary care for extremely specialised, experimental interventions."
      ] },
      { h: "Levels of prevention", figure: {
        caption: "The three levels of prevention across the natural history of disease.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Levels of prevention"><defs><marker id="lpArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="40" width="150" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="85" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Primary</text><text x="85" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">prevent onset (vaccine)</text><rect x="175" y="40" width="150" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="250" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Secondary</text><text x="250" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">early detection (screen)</text><rect x="340" y="40" width="150" height="50" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="415" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Tertiary</text><text x="415" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">limit disability (rehab)</text><line x1="160" y1="65" x2="171" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#lpArr)"/><line x1="325" y1="65" x2="336" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#lpArr)"/></svg>'
      } },
      { h: "Prevention explained", list: [
        "Primary prevention — prevents disease before it occurs (immunisation, health education, sanitation, safe water).",
        "Secondary prevention — early detection and prompt treatment to halt progression (screening, early diagnosis).",
        "Tertiary prevention — limits disability and rehabilitates after established disease.",
        "Note the distinction: levels of prevention target the disease process, whereas levels of care describe the health-service tier."
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
      { h: "The interprofessional health-care team", p: "Care is delivered by a team — nurses, physicians, pharmacists, physiotherapists, dietitians, social workers, laboratory and radiology technicians, and support staff. The nurse is frequently the coordinator: ensuring continuity, communicating across disciplines, integrating the plan and advocating for the patient. Effective, respectful collaboration and clear handover are core safety competencies." },
      { h: "Models of nursing care delivery", list: [
        "Total patient care (case method) — one nurse gives all care to assigned patients for the shift.",
        "Functional nursing — tasks divided among staff (one gives medications, another does dressings) — efficient but fragmented.",
        "Team nursing — a team led by a registered nurse cares for a group of patients.",
        "Primary nursing — one nurse is accountable for a patient's care 24 hours a day across the stay.",
        "Case management — coordinating care and resources across the whole episode of illness."
      ] },
      { h: "Nurses' roles: promoting, maintaining, restoring health", list: [
        "Promoting health — health education, lifestyle counselling, immunisation and screening.",
        "Maintaining health — supporting self-care, adherence and stable chronic-disease management.",
        "Restoring health — direct care of the ill, rehabilitation and helping the patient regain function.",
        "Supporting a dignified death — palliative and end-of-life care when restoration is not possible."
      ] },
      { h: "Nursing self-management", p: "Self-management is the nurse's ability to organise workload, set priorities, manage time and stress, delegate appropriately, maintain competence through lifelong learning, and practise self-care to prevent burnout and compassion fatigue. Effective self-management underpins safe, sustainable, high-quality practice and models professional behaviour to others." },
      { h: "Responsibility versus accountability", p: "Responsibility is the obligation to perform an assigned task. Accountability is being answerable for the outcomes of one's actions and omissions — to the patient, the profession, the employer and society. A nurse can delegate a task (assign responsibility) but retains accountability for the delegation decision and its supervision. Accountability is anchored in scope of practice, standards, the code of ethics and law, and includes accurate documentation, appropriate delegation, and reporting errors and unsafe conditions." },
      { h: "The five rights of delegation", figure: {
        caption: "The five rights that make delegation safe.",
        svg: '<svg viewBox="0 0 440 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five rights of delegation"><rect x="10" y="10" width="420" height="155" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="220" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Five Rights of Delegation</text><g font-family="sans-serif" font-size="12" fill="#15803D"><text x="35" y="64">1. Right task</text><text x="35" y="90">2. Right circumstance</text><text x="35" y="116">3. Right person</text><text x="35" y="142">4. Right direction / communication</text><text x="250" y="142">5. Right supervision</text></g></svg>'
      } },
      { h: "The five rights explained", list: [
        "Right task — appropriate to delegate.",
        "Right circumstance — a stable patient and suitable setting.",
        "Right person — a competent, authorised delegatee.",
        "Right direction/communication — clear instruction and expectations.",
        "Right supervision/evaluation — monitoring and follow-up; accountability stays with the nurse."
      ] },
      { h: "Clinical relevance", p: "When a nurse delegates vital-sign measurement to an assistant, she chooses a stable patient (right circumstance), a trained assistant (right person), gives clear instructions and reporting parameters (right communication), and checks the results and the patient (right supervision) — remaining accountable throughout. Understanding levels of care also guides safe, timely referral to the appropriate service tier." },
      { h: "Key terms", list: [
        "Referral — directing a patient to a higher level or specialist service.",
        "Continuity of care — coordinated, uninterrupted care across settings and time.",
        "Scope of practice — the range of activities a nurse is authorised and competent to perform.",
        "Delegation — assigning a task to another while retaining accountability.",
        "Accountability — being answerable for the outcomes of one's actions and omissions."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the structure, aims and WHO building blocks of a health-care delivery system.",
      "Differentiate primary, secondary and tertiary levels of care from the three levels of prevention.",
      "Compare the models of nursing care delivery (functional, team, primary, case management).",
      "Explain the nurse's roles in promoting, maintaining and restoring health.",
      "Differentiate responsibility from accountability and apply the five rights of delegation."
    ],
    assessment: [
      { type: "mcq", q: "A patient is directed from a community clinic to a medical college hospital's cardiac ICU. This is a move to:", options: ["Primary care", "Secondary care", "Tertiary care", "Home care"], answer: 2, rationale: "Highly specialised, complex ICU/cardiac care is tertiary care; the community clinic was primary." },
      { type: "mcq", q: "A nationwide measles immunisation campaign is an example of:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Rehabilitation"], answer: 0, rationale: "Immunisation prevents disease before it occurs, so it is primary prevention." },
      { type: "mcq", q: "Cervical cancer screening of asymptomatic women is:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Health promotion"], answer: 1, rationale: "Screening for early detection of existing disease is secondary prevention." },
      { type: "mcq", q: "Stroke rehabilitation to limit long-term disability is:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Acute care only"], answer: 2, rationale: "Limiting disability after established disease is tertiary prevention." },
      { type: "mcq", q: "On a ward, one nurse gives all medications while another does all dressings for every patient. This delivery model is:", options: ["Primary nursing", "Functional nursing", "Total patient care", "Case management"], answer: 1, rationale: "Dividing care by task rather than by patient is functional nursing." },
      { type: "mcq", q: "A nurse delegates bathing to an assistant but checks the patient and the outcome afterwards. She retains:", options: ["Only responsibility", "Accountability", "Nothing", "The task itself"], answer: 1, rationale: "The task (responsibility) is delegated, but accountability for the decision and supervision remains with the nurse." },
      { type: "mcq", q: "Choosing a stable patient before delegating a task satisfies which right of delegation?", options: ["Right task", "Right circumstance", "Right person", "Right supervision"], answer: 1, rationale: "A stable patient/suitable setting is the right circumstance." },
      { type: "mcq", q: "Which is a WHO health-system building block?", options: ["Health workforce", "Weather", "Tourism", "Sports"], answer: 0, rationale: "The health workforce (including nurses) is a core building block; the others are not." },
      { type: "mcq", q: "Coordinated, uninterrupted care as a patient moves from hospital to home is called:", options: ["Referral", "Continuity of care", "Delegation", "Discharge only"], answer: 1, rationale: "Continuity of care ensures seamless care across settings and time." },
      { type: "mcq", q: "Ensuring all people receive needed services without financial hardship is the goal of:", options: ["Universal Health Coverage", "Functional nursing", "Tertiary prevention", "Delegation"], answer: 0, rationale: "Universal Health Coverage (UHC) is the overarching aim of access without financial hardship." },
      { type: "fill", q: "The range of activities a nurse is authorised and competent to perform is the ____ of practice.", accept: ["scope"], rationale: "Scope of practice defines authorised, competent nursing activities." },
      { type: "fill", q: "Directing a patient to a specialist or higher level of care is a ____.", accept: ["referral"], rationale: "A referral moves the patient to appropriate specialist or higher-level care." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "fon-06-communication",
    unit: "Unit 2 · Communication & Relationships in Nursing",
    title: "Communication in Nursing: Types, Purposes & Assertive Communication",
    readMinutes: 25,
    summary: "The communication process and its elements; verbal, non-verbal and written types; levels of communication; the zones of personal space; purposes and functions in nursing; passive-assertive-aggressive-passive-aggressive styles; assertiveness techniques including SBAR; and the factors and barriers that influence communication.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is communication?", p: "Communication is the dynamic, continuous, two-way process of exchanging information, ideas, feelings and meaning between people through a shared system of symbols. In nursing it is the foundation of the therapeutic relationship, safe care, teamwork and documentation; virtually every nursing action — assessing, teaching, comforting, handing over — depends on effective communication, making it a defining professional competency. Communication is also a leading root cause of clinical error, so competence in it is a patient-safety issue." },
      { h: "Elements of the communication process", p: "Communication is a cyclical process; a breakdown at any element causes miscommunication, so the nurse attends to each part.", figure: {
        caption: "The communication process: sender encodes a message, sends it through a channel to a receiver who decodes it and gives feedback.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication process elements"><defs><marker id="cmArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="40" width="90" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="60" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Sender</text><text x="60" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">encodes</text><rect x="150" y="40" width="100" height="46" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="200" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Message</text><text x="200" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">via channel</text><rect x="300" y="40" width="95" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="347" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Receiver</text><text x="347" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">decodes</text><line x1="105" y1="63" x2="146" y2="63" stroke="#0F4C3A" stroke-width="2" marker-end="url(#cmArr)"/><line x1="250" y1="63" x2="296" y2="63" stroke="#0F4C3A" stroke-width="2" marker-end="url(#cmArr)"/><path d="M347 90 C 347 125, 60 125, 60 90" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#cmArr)"/><text x="205" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">feedback</text></svg>'
      } },
      { h: "The seven elements", list: [
        "Sender (source/encoder) — the person who initiates and encodes the message.",
        "Message — the information, idea or feeling being conveyed.",
        "Channel/medium — the route (spoken word, writing, touch, technology).",
        "Receiver (decoder) — the person who receives and interprets the message.",
        "Feedback — the receiver's response confirming (or not) understanding.",
        "Context/environment — the setting and circumstances.",
        "Noise/interference — anything that distorts the message (physical noise, pain, bias)."
      ] },
      { h: "Types of communication", list: [
        "Verbal — spoken or written words; affected by vocabulary, pace, tone, clarity, timing, relevance and credibility.",
        "Non-verbal — body language, facial expression, eye contact, posture, gestures, touch, appearance, personal space and silence; often more powerful and more honest than words.",
        "Written — documentation, reports and health-education materials; must be clear, accurate, complete and legible.",
        "When verbal and non-verbal messages conflict, receivers usually believe the non-verbal."
      ] },
      { h: "Components of non-verbal communication", list: [
        "Kinesics — body movements, gestures and posture.",
        "Facial expression and eye contact — powerful conveyors of emotion and interest.",
        "Proxemics — the use of space and distance.",
        "Touch (haptics) — comforting or clinical; use with awareness of consent and culture.",
        "Paralanguage — tone, pitch, volume and rate of speech.",
        "Appearance and silence — also carry meaning."
      ] },
      { h: "Levels of communication", list: [
        "Intrapersonal — self-talk within an individual (influences confidence and stress).",
        "Interpersonal — between two people (nurse and patient); the core of nursing.",
        "Small-group — within the health-care team (handover, meetings).",
        "Public/organisational — health education to communities or institutions.",
        "Electronic/tele-communication — telephone, email and telehealth."
      ] },
      { h: "Zones of personal space (proxemics)", list: [
        "Intimate distance (about 0-45 cm) — used for physical care, comfort and examination; the nurse must explain and gain consent as this space is entered.",
        "Personal distance (about 45 cm-1.2 m) — for close conversation and teaching.",
        "Social distance (about 1.2-3.6 m) — for routine, less personal interactions.",
        "Public distance (over 3.6 m) — for addressing groups.",
        "Much nursing care occurs in the intimate zone, which can cause anxiety unless handled sensitively."
      ] },
      { h: "Purposes and functions of communication in nursing", list: [
        "To gather and share accurate information for assessment and care.",
        "To establish and sustain the therapeutic relationship.",
        "To educate, counsel and support patients and families.",
        "To coordinate safe care within the team and hand over responsibility.",
        "To provide comfort, reassurance and emotional support.",
        "To influence, advocate and promote healthy behaviour change."
      ] },
      { h: "Communication styles", figure: {
        caption: "Assertiveness sits between passive and aggressive communication.",
        svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Passive assertive aggressive continuum"><rect x="15" y="45" width="150" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="90" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Passive</text><text x="90" y="81" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">self loses</text><rect x="175" y="45" width="150" height="46" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="250" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Assertive</text><text x="250" y="81" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">both respected</text><rect x="335" y="45" width="150" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="410" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Aggressive</text><text x="410" y="81" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">other loses</text></svg>'
      } },
      { h: "The four styles compared", list: [
        "Passive — suppressing one's own needs and allowing others to violate one's rights ('self loses').",
        "Aggressive — expressing needs at others' expense, hostile or blaming ('other loses').",
        "Passive-aggressive — indirect resistance, sarcasm or sulking rather than open expression.",
        "Assertive — honest, direct, respectful expression that respects both parties' rights ('both win'); the goal for nurses."
      ] },
      { h: "Assertive communication", p: "Assertive communication is the honest, direct and respectful expression of one's thoughts, feelings and needs while respecting the rights of others. It sits between passive communication (suppressing one's own needs) and aggressive communication (violating others' rights). Assertiveness protects patient safety (e.g., speaking up about an unsafe order), reduces conflict and supports professional collaboration and self-respect." },
      { h: "Techniques for assertiveness", list: [
        "Use 'I' statements ('I am concerned that...') rather than blaming 'you' statements.",
        "Be specific, calm and respectful; maintain eye contact, an open posture and a steady tone.",
        "Say 'no' appropriately and set professional boundaries without guilt.",
        "Use the broken-record and fogging techniques to hold a reasonable position calmly.",
        "Use structured tools such as SBAR (Situation, Background, Assessment, Recommendation) to raise clinical concerns clearly and safely."
      ] },
      { h: "Factors influencing communication", list: [
        "Developmental stage, language and literacy.",
        "Culture, values, beliefs and prior experiences of both parties.",
        "Emotional state — anxiety, anger, fear and pain.",
        "Sensory or cognitive impairment (hearing, vision, confusion, aphasia).",
        "Roles, relationships and gender.",
        "Environment — privacy, noise, interruptions, distance and space."
      ] },
      { h: "Barriers and how to overcome them", list: [
        "Physical — noise, lack of privacy; overcome by choosing a quiet, private setting.",
        "Physiological — pain, deafness, confusion; overcome by relieving pain, using aids, speaking clearly and facing the patient.",
        "Psychological — anxiety, defensiveness, prejudice; overcome by building trust and using empathy.",
        "Semantic/language — jargon, dialect; overcome by plain language and trained interpreters, not family members for sensitive information.",
        "Cultural — differing norms of eye contact, touch and space; overcome with cultural humility."
      ] },
      { h: "Clinical relevance", p: "A nurse who notices a wrong-dose order uses assertive SBAR: 'Doctor, the ordered dose is double the usual (Situation); the patient weighs 50 kg (Background); I am concerned it is unsafe (Assessment); can we confirm the correct dose? (Recommendation).' This models assertive, structured communication that directly prevents patient harm — the practical payoff of these concepts." },
      { h: "Key terms", list: [
        "Encoding — converting an idea into a message.",
        "Decoding — interpreting a received message.",
        "Proxemics — the use of interpersonal space and distance.",
        "Feedback — the receiver's response confirming understanding.",
        "SBAR — a structured framework for concise, safe clinical communication."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define communication and describe the elements of the communication process with a diagram.",
      "Differentiate verbal, non-verbal and written communication and explain why non-verbal cues are powerful.",
      "Describe the four zones of personal space (proxemics) and their relevance to nursing care.",
      "Compare passive, assertive, aggressive and passive-aggressive communication and describe techniques for assertiveness.",
      "Discuss the factors and barriers that influence communication and strategies to overcome them."
    ],
    assessment: [
      { type: "mcq", q: "A patient smiles and says 'I'm fine' while trembling and avoiding eye contact. The nurse should give MOST weight to the:", options: ["Non-verbal cues", "Spoken words", "Written notes", "Room lighting"], answer: 0, rationale: "When verbal and non-verbal messages conflict, the non-verbal is usually more truthful." },
      { type: "mcq", q: "The receiver's response that confirms the message was understood is:", options: ["Encoding", "Noise", "Feedback", "Channel"], answer: 2, rationale: "Feedback closes the communication loop; encoding and channel are earlier elements and noise distorts the message." },
      { type: "mcq", q: "A nurse rehearses how to break bad news, managing her own nervous self-talk. This is which level of communication?", options: ["Interpersonal", "Intrapersonal", "Public", "Small-group"], answer: 1, rationale: "Self-talk within the individual is intrapersonal communication." },
      { type: "mcq", q: "Before giving intimate personal care the nurse explains the procedure and gains consent, chiefly because she is entering the patient's:", options: ["Public distance", "Social distance", "Intimate zone", "Personal distance"], answer: 2, rationale: "Care such as bathing enters the intimate zone (0-45 cm), which can cause anxiety unless explained and consented to." },
      { type: "mcq", q: "A nurse says 'You never listen to me!' loudly to a colleague. This style is:", options: ["Assertive", "Aggressive", "Passive", "Therapeutic"], answer: 1, rationale: "Blaming, hostile expression at another's expense is aggressive communication." },
      { type: "mcq", q: "SBAR is used mainly to:", options: ["Bathe a patient", "Structure clinical communication/handover safely", "Measure temperature", "Dress a wound"], answer: 1, rationale: "SBAR (Situation, Background, Assessment, Recommendation) structures clinical communication and handover." },
      { type: "mcq", q: "For a patient with hearing impairment, the BEST strategy is to:", options: ["Speak faster", "Face the patient and speak clearly, using aids", "Cover your mouth", "Shout from the doorway"], answer: 1, rationale: "Facing the patient, clear speech and hearing aids overcome the physiological barrier; shouting and covering the mouth do not." },
      { type: "mcq", q: "A nurse who is upset gives silent, sulky, sarcastic responses instead of stating her concern. This style is:", options: ["Assertive", "Passive-aggressive", "Aggressive", "Therapeutic"], answer: 1, rationale: "Indirect resistance, sarcasm and sulking rather than open expression is passive-aggressive." },
      { type: "mcq", q: "Medical jargon that the patient does not understand is which type of barrier?", options: ["Physical", "Semantic/language", "Cultural", "Environmental"], answer: 1, rationale: "Jargon is a semantic (language) barrier; plain language overcomes it." },
      { type: "mcq", q: "Converting an idea into a transmittable message is called:", options: ["Decoding", "Encoding", "Feedback", "Channelling"], answer: 1, rationale: "Encoding transforms an idea into a message; decoding is the receiver's interpretation." },
      { type: "fill", q: "Interpreting a received message is called ____.", accept: ["decoding"], rationale: "Decoding is the receiver's interpretation of the message." },
      { type: "fill", q: "The communication style that respects both self and others is ____ communication.", accept: ["assertive"], rationale: "Assertive communication balances one's own and others' rights." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "fon-07-therapeutic-relationship",
    unit: "Unit 2 · Communication & Relationships in Nursing",
    title: "The Nurse-Patient Relationship, Therapeutic Techniques & Barriers",
    readMinutes: 26,
    summary: "The therapeutic nurse-patient relationship and its phases; how it differs from a social relationship; professional boundaries; key elements (warmth, respect, genuineness, empathy); therapeutic communication techniques; non-therapeutic responses and barriers; bridges to relationship; and communicating with the health-care team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The therapeutic relationship", p: "The therapeutic (helping) relationship is a purposeful, goal-directed, patient-centred professional relationship established to meet the patient's health needs. Peplau described it as the essence of nursing. It is the medium through which assessment, teaching, comfort and behaviour change occur, and it is deliberately built and maintained by the nurse using self-awareness and communication skill." },
      { h: "Therapeutic versus social relationship", list: [
        "Purpose — therapeutic is goal-directed toward the patient's needs; social is for mutual pleasure.",
        "Focus — therapeutic centres on the patient; social meets both parties' needs equally.",
        "Boundaries — therapeutic is bounded by professional ethics and confidentiality.",
        "Time — therapeutic is planned and time-limited, ending with termination.",
        "Responsibility — the nurse is responsible for establishing and maintaining it professionally."
      ] },
      { h: "Professional boundaries", p: "Boundaries define the safe, therapeutic limits of the nurse-patient relationship. Under-involvement (distancing, neglect) and over-involvement (excessive self-disclosure, favouritism, romantic or financial entanglement, secrecy) are both boundary violations. Warning signs include spending disproportionate time with one patient, keeping secrets, and giving or receiving significant gifts. Maintaining boundaries protects the patient's welfare and the nurse's integrity." },
      { h: "Phases of the helping relationship (Peplau)", figure: {
        caption: "The four phases of the therapeutic relationship.",
        svg: '<svg viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phases of therapeutic relationship"><defs><marker id="trArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="65" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Pre-interaction</text><text x="65" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">prepare</text><rect x="140" y="40" width="105" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="192" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Orientation</text><text x="192" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">trust &amp; goals</text><rect x="265" y="40" width="105" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="317" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Working</text><text x="317" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">intervene</text><rect x="390" y="40" width="120" height="44" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="450" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Termination</text><text x="450" y="76" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">evaluate &amp; end</text><line x1="120" y1="62" x2="136" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#trArr)"/><line x1="245" y1="62" x2="261" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#trArr)"/><line x1="370" y1="62" x2="386" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#trArr)"/></svg>'
      } },
      { h: "The phases explained", list: [
        "Pre-interaction — the nurse prepares before meeting the patient (reviews information, examines own feelings, anxieties and biases).",
        "Orientation (introductory) — building trust and rapport, clarifying roles, setting boundaries, identifying needs and goals, agreeing a contract.",
        "Working phase — the active phase; the patient explores feelings and problems and the nurse intervenes, teaches and supports change.",
        "Termination — summarising, evaluating goal achievement and ending the relationship therapeutically, addressing feelings of loss."
      ] },
      { h: "Key elements in building relationships", list: [
        "Warmth — conveying friendliness, acceptance and caring through manner and non-verbal cues.",
        "Respect — valuing the patient as a worthwhile person (unconditional positive regard).",
        "Genuineness (congruence) — being real, honest and consistent, with matching words and behaviour.",
        "Empathy — accurately sensing and communicating understanding of the patient's feelings and perspective.",
        "Self-disclosure — sharing limited, purposeful personal information to build connection, never to shift focus to the nurse.",
        "Effective questioning and the appropriate expression of opinions."
      ] },
      { h: "Empathy versus sympathy", p: "Empathy is understanding and communicating awareness of the patient's feelings from their frame of reference, while remaining objective enough to help. Sympathy is feeling pity or sharing the patient's emotion, which can blur boundaries and reduce objectivity. Empathy is therapeutic; excessive sympathy can be non-therapeutic." },
      { h: "Therapeutic communication techniques", figure: {
        caption: "Core therapeutic communication techniques.",
        svg: '<svg viewBox="0 0 440 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Therapeutic communication techniques"><rect x="10" y="10" width="420" height="155" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="220" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Therapeutic Techniques</text><g font-family="sans-serif" font-size="11" fill="#15803D"><text x="35" y="62">Active listening</text><text x="250" y="62">Open-ended questions</text><text x="35" y="88">Silence</text><text x="250" y="88">Reflecting / restating</text><text x="35" y="114">Clarifying / validating</text><text x="250" y="114">Focusing</text><text x="35" y="140">Summarising</text><text x="250" y="140">Offering self / presence</text></g></svg>'
      } },
      { h: "The techniques explained", list: [
        "Active listening and attending; using silence purposefully to allow reflection.",
        "Open-ended questions to encourage full expression.",
        "Reflecting and restating to show understanding and invite elaboration.",
        "Clarifying and seeking validation to confirm meaning.",
        "Focusing, summarising and offering information.",
        "Using touch and presence appropriately and with consent."
      ] },
      { h: "Non-therapeutic responses / barriers to communication", list: [
        "Giving false or premature reassurance ('Everything will be fine').",
        "Giving advice or approving/disapproving, imposing the nurse's values.",
        "Asking probing 'why' questions that feel intrusive or accusatory.",
        "Changing the subject, being defensive, or minimising feelings.",
        "Stereotyping, being judgemental, or offering clich&eacute;s.",
        "Talking too much, giving false hope, or using unfamiliar jargon."
      ] },
      { h: "Barriers to the interpersonal relationship", list: [
        "Anxiety — in patient or nurse, narrowing attention and distorting messages.",
        "Stereotyping — fixed, generalised assumptions about a person or group.",
        "Lack of personal space and privacy.",
        "Language, cultural, developmental and sensory differences.",
        "Distrust, past negative experiences and power imbalance."
      ] },
      { h: "Bridges to the relationship", list: [
        "Caring — genuine concern for the patient's welfare.",
        "Trust — reliability, honesty and consistency that make the patient feel safe.",
        "Empathy — accurate, communicated understanding of feelings.",
        "Mutuality — working together toward shared, agreed goals.",
        "Confidentiality — protecting private information, which underpins trust."
      ] },
      { h: "Communicating with health-care professionals", list: [
        "Advocacy — representing and safeguarding the patient's interests and voice.",
        "Conflict resolution — addressing disagreement constructively and calmly.",
        "Collaboration and teamwork across disciplines with mutual respect.",
        "Delegation and supervision of non-trained staff, retaining accountability.",
        "Peer negotiation, removal of barriers and developing a support system.",
        "Structured handover (e.g., SBAR) to ensure continuity and safety."
      ] },
      { h: "Clinical relevance", p: "In the orientation phase a nurse who introduces herself, explains her role, ensures privacy and agrees goals builds the trust that later makes the working phase (e.g., teaching a frightened new diabetic to self-inject) possible. Recognising a non-therapeutic habit — jumping to false reassurance when a patient voices fear — and replacing it with active listening is a concrete, examinable skill improvement." },
      { h: "Key terms", list: [
        "Empathy — understanding and sharing another's feelings from their perspective (differs from sympathy/pity).",
        "Rapport — a relationship of mutual trust and understanding.",
        "Professional boundary — the safe therapeutic limit of the nurse-patient relationship.",
        "Unconditional positive regard — accepting the patient without judgement.",
        "Termination — the final, planned ending phase of the therapeutic relationship."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define the therapeutic relationship, distinguish it from a social relationship, and describe Peplau's phases.",
      "Explain professional boundaries and give examples of over- and under-involvement.",
      "Differentiate empathy from sympathy and list five therapeutic communication techniques.",
      "Discuss the barriers to interpersonal relationships and the bridges that overcome them.",
      "Describe the nurse's communication with other health-care professionals, including advocacy and conflict resolution."
    ],
    assessment: [
      { type: "mcq", q: "A nurse reviews a new patient's notes and reflects on her own anxiety before entering the room. This is the ____ phase.", options: ["Working", "Orientation", "Pre-interaction", "Termination"], answer: 2, rationale: "Preparing and examining one's own feelings before meeting the patient is pre-interaction." },
      { type: "mcq", q: "Which response is therapeutic?", options: ["'You seem worried — tell me more about that.'", "'Don't worry, everything will be fine.'", "'Why did you wait so long to come in?'", "'If I were you, I would...'"], answer: 0, rationale: "Reflecting the feeling and inviting elaboration is therapeutic; false reassurance, probing 'why', and giving advice are barriers." },
      { type: "mcq", q: "A nurse understands a grieving patient's feelings yet stays composed enough to help. This is:", options: ["Sympathy", "Pity", "Empathy", "Detachment"], answer: 2, rationale: "Empathy conveys understanding while maintaining helpful objectivity; sympathy/pity risk losing objectivity." },
      { type: "mcq", q: "A nurse spends most of her shift with one patient, keeps secrets for him and accepts a costly gift. This most indicates:", options: ["Good rapport", "A professional boundary violation (over-involvement)", "Appropriate empathy", "Termination"], answer: 1, rationale: "Disproportionate time, secrecy and significant gifts are classic signs of over-involvement and boundary crossing." },
      { type: "mcq", q: "Fixed, generalised assumptions about a group of patients are:", options: ["Empathy", "Stereotyping", "Rapport", "Mutuality"], answer: 1, rationale: "Stereotyping applies rigid generalisations and is a barrier to the relationship." },
      { type: "mcq", q: "Accepting a patient without judgement despite disapproving of his choices is:", options: ["Stereotyping", "Unconditional positive regard", "Sympathy", "Delegation"], answer: 1, rationale: "Unconditional positive regard is non-judgemental acceptance of the person." },
      { type: "mcq", q: "During the working phase the nurse mainly:", options: ["Introduces herself", "Helps the patient explore problems and intervenes toward goals", "Prepares before meeting", "Ends the relationship"], answer: 1, rationale: "The working phase is the active problem-solving and intervention phase; introductions belong to orientation." },
      { type: "mcq", q: "A nurse's limited, purposeful sharing of experience to build connection is:", options: ["Gossip", "Therapeutic self-disclosure", "A boundary violation", "False reassurance"], answer: 1, rationale: "Purposeful, limited self-disclosure that keeps focus on the patient is therapeutic; excessive disclosure would be a violation." },
      { type: "mcq", q: "Which is a bridge to the therapeutic relationship?", options: ["Anxiety", "Trust", "Stereotyping", "Defensiveness"], answer: 1, rationale: "Trust is a bridge; anxiety, stereotyping and defensiveness are barriers." },
      { type: "mcq", q: "Summarising progress, evaluating goals and preparing the patient for the relationship's end occurs in the ____ phase.", options: ["Pre-interaction", "Orientation", "Working", "Termination"], answer: 3, rationale: "Termination summarises, evaluates and ends the relationship therapeutically." },
      { type: "fill", q: "Protecting a patient's private information is called maintaining ____.", accept: ["confidentiality"], rationale: "Confidentiality safeguards private information and builds trust." },
      { type: "fill", q: "Understanding and conveying a patient's feelings from their perspective is called ____.", accept: ["empathy"], rationale: "Empathy is accurate, communicated understanding of the patient's feelings." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "fon-08-documentation",
    unit: "Unit 2 · Communication & Relationships in Nursing",
    title: "Documentation, Reporting & Records in Nursing",
    readMinutes: 25,
    summary: "The purposes and principles of documentation; types of records and charting formats; reporting and structured handover; correcting errors; abbreviations and safe language; the legal, ethical and confidentiality importance of records; and safeguards including electronic health records.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Documentation and reporting", p: "Documentation (charting) is the written or electronic record of the patient's status, care given and response. Reporting is the oral, written or electronic exchange of information between caregivers. Together they ensure continuity, safety, communication, accountability and a legal record of care. A widely quoted medico-legal principle is 'not documented, not done' — care that is unrecorded may be treated as not having been given." },
      { h: "Purposes of documentation", list: [
        "Communication — informs the whole health-care team and ensures continuity of care.",
        "Legal record — an accurate, contemporaneous account admissible as evidence.",
        "Care planning and evaluation — supports the nursing process and shows progress.",
        "Quality improvement, audit and accreditation.",
        "Research, education and health statistics.",
        "Reimbursement, resource use and workload measurement (where applicable)."
      ] },
      { h: "Principles of good documentation", list: [
        "Factual — objective, based on what is seen, heard, felt or measured; avoid vague or interpretive terms.",
        "Accurate and precise — exact measurements, correct spelling and only approved abbreviations.",
        "Complete and relevant — record all pertinent information and care.",
        "Current (timely) — chart as soon as possible after care; record date and time.",
        "Organised and legible; each entry signed with name and designation.",
        "Confidential — protect the record and the patient's privacy."
      ] },
      { h: "Characteristics of quality entries (a checklist)", figure: {
        caption: "Hallmarks of a legally sound documentation entry.",
        svg: '<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Documentation quality checklist"><rect x="10" y="10" width="420" height="180" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="220" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">A good entry is...</text><g font-family="sans-serif" font-size="11.5" fill="#15803D"><text x="35" y="64">Factual &amp; objective</text><text x="240" y="64">Timely / dated</text><text x="35" y="92">Accurate &amp; precise</text><text x="240" y="92">Legible</text><text x="35" y="120">Complete &amp; relevant</text><text x="240" y="120">Signed</text><text x="35" y="148">Confidential</text><text x="240" y="148">No blank spaces</text><text x="35" y="176">Chronological</text><text x="240" y="176">Original (no erasing)</text></g></svg>'
      } },
      { h: "Types of records", list: [
        "Patient's chart / medical record (paper or electronic health record, EHR).",
        "Nursing care plan and progress/nurses' notes.",
        "Medication administration record (MAR).",
        "Vital-signs charts, intake-output charts and flow sheets.",
        "Admission, transfer and discharge records; consent forms; incident reports.",
        "Kardex or care-summary tools."
      ] },
      { h: "Methods / formats of charting", list: [
        "Narrative charting — a chronological story of care in paragraph form.",
        "Problem-oriented medical record (POMR) with SOAP/SOAPIE notes (Subjective, Objective, Assessment, Plan, Intervention, Evaluation).",
        "Focus (DAR) charting — Data, Action, Response.",
        "Charting by exception (CBE) — records only deviations from defined norms, reducing repetition.",
        "PIE charting — Problem, Intervention, Evaluation.",
        "Electronic health records — increasingly standard, improving legibility, access, alerts and audit."
      ] },
      { h: "Abbreviations and safe language", list: [
        "Use only officially approved abbreviations to prevent misinterpretation.",
        "Avoid dangerous, error-prone abbreviations (e.g., 'U' for units, which can be read as a zero).",
        "Write times unambiguously and record objective, non-judgemental language.",
        "Do not label or characterise the patient ('difficult', 'uncooperative'); record observed behaviour instead.",
        "Ambiguity in records is a recognised cause of medication and care errors."
      ] },
      { h: "Reporting and structured handover", p: "Handover (shift report) transfers responsibility and essential information between nurses or teams and is a high-risk point for error and omission. Structured formats such as SBAR (Situation, Background, Assessment, Recommendation) or ISBAR (adding Identification) standardise handover and reduce mistakes. Other reports include telephone/verbal orders (read back and verify), transfer reports, incident reports, and prompt reporting of critical laboratory values." },
      { h: "Correcting errors and safeguards", list: [
        "Never erase, overwrite, obscure or use correction fluid; draw a single line through the error, write 'error' (and reason if required) and initial and date it.",
        "Never chart in advance of care or chart for another person.",
        "Do not leave blank spaces that could be filled in later; draw a line through unused space.",
        "Avoid altering records after the fact; late entries must be clearly labelled as such with the current date/time.",
        "Protect passwords, do not share logins, and log off electronic systems after use."
      ] },
      { h: "Legal, ethical and confidentiality importance", p: "The record is a legal document; accurate, timely, honest documentation protects the patient and the nurse, demonstrates the standard of care met, and is central to accountability. Falsification, back-dating or careless documentation is a serious professional and legal offence. Confidentiality is a legal and ethical duty: records are shared only on a need-to-know basis, and unauthorised access or disclosure violates patient rights." },
      { h: "Common documentation errors to avoid", list: [
        "Vague terms ('appears okay', 'good day') without objective data.",
        "Recording opinions, blame or subjective judgements of others.",
        "Illegible writing, unapproved abbreviations and unsigned entries.",
        "Failing to document a change in condition, an intervention or the patient's response.",
        "Block ('routine') charting that hides the actual timing of events."
      ] },
      { h: "Electronic health records — benefits and cautions", list: [
        "Benefits — legibility, remote access, decision-support alerts, easier audit and data retrieval, and reduced transcription error.",
        "Cautions — protect passwords and never share logins; log off after use; beware 'copy-and-paste' propagating outdated data; alert fatigue can cause important warnings to be ignored.",
        "Downtime procedures — know the paper backup process for system failures.",
        "Confidentiality — access only records for patients in your care; audit trails record who viewed each record."
      ] },
      { h: "Clinical relevance", p: "If a patient deteriorates and the nurse escalates but does not chart the call, a later review may find no evidence the doctor was informed — legally 'not documented, not done'. Conversely, an accurate SBAR handover and a timed, signed note showing assessment, action and response demonstrate safe, accountable care. Good documentation is therefore both a safety tool and legal protection." },
      { h: "Key terms", list: [
        "Charting — the act of recording care in the record.",
        "SOAP — Subjective, Objective, Assessment, Plan format.",
        "Handover — structured transfer of care responsibility between caregivers.",
        "EHR — electronic health record.",
        "Charting by exception — documenting only deviations from established norms."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define documentation and reporting and state their purposes in nursing.",
      "Explain the principles and characteristics of good nursing documentation.",
      "Describe the common formats of charting (narrative, SOAP, DAR, CBE) with examples.",
      "Describe the correct procedure for correcting a documentation error and common errors to avoid.",
      "Discuss the benefits and cautions of electronic health records and the legal importance of confidentiality."
    ],
    assessment: [
      { type: "mcq", q: "A nurse escalates a deteriorating patient by phone but does not chart it. Legally this is problematic because:", options: ["Charting is optional", "Unrecorded care may be treated as not done", "Only doctors chart", "Phone calls need no record"], answer: 1, rationale: "The principle 'not documented, not done' means unrecorded actions may be deemed not performed in law." },
      { type: "mcq", q: "Which entry is MOST appropriate?", options: ["'Patient had a good night.'", "'Patient slept from 22:00-06:00, no complaints of pain.'", "'Patient seems fine.'", "'Difficult patient again.'"], answer: 1, rationale: "It is factual, objective, timed and specific; the others are vague or judgemental." },
      { type: "mcq", q: "The correct way to fix a charting error is to:", options: ["Erase it", "Use correction fluid", "Draw a single line, write 'error' and initial and date it", "Rewrite the whole page"], answer: 2, rationale: "A single line preserves the original entry legally; erasing or covering it is prohibited." },
      { type: "mcq", q: "In SOAP charting, the 'A' stands for:", options: ["Assessment", "Action", "Advice", "Admission"], answer: 0, rationale: "In SOAP, A is the Assessment (the nurse's interpretation of the subjective and objective data)." },
      { type: "mcq", q: "Focus (DAR) charting records Data, Action and:", options: ["Diagnosis", "Response", "Reason", "Review"], answer: 1, rationale: "DAR = Data, Action, Response." },
      { type: "mcq", q: "A verbal/telephone order should always be:", options: ["Acted on without checking", "Read back and verified", "Ignored", "Charted the next day"], answer: 1, rationale: "Reading back and verifying prevents transcription errors before acting." },
      { type: "mcq", q: "Charting only deviations from expected norms is called:", options: ["Narrative charting", "Charting by exception", "Focus charting", "SOAP charting"], answer: 1, rationale: "Charting by exception documents only abnormal findings/deviations from defined standards." },
      { type: "mcq", q: "A recognised risk of 'copy-and-paste' in an EHR is that it:", options: ["Improves accuracy", "Can propagate outdated or wrong information", "Prevents alert fatigue", "Is always prohibited"], answer: 1, rationale: "Copy-and-paste can carry forward stale or erroneous data into new notes, a documented safety hazard." },
      { type: "mcq", q: "A structured handover framework that reduces omissions is:", options: ["PASS", "RACE", "SBAR", "SOAP"], answer: 2, rationale: "SBAR (Situation, Background, Assessment, Recommendation) structures safe handover; SOAP is a note format." },
      { type: "mcq", q: "Which is a documentation error to avoid?", options: ["Signing each entry", "Recording objective data", "Leaving blank spaces that could be filled later", "Charting promptly"], answer: 2, rationale: "Blank spaces can be altered later and must be lined through." },
      { type: "fill", q: "The electronic version of a patient's record is abbreviated ____.", accept: ["EHR", "electronic health record"], rationale: "EHR stands for electronic health record." },
      { type: "fill", q: "In the SOAP format, 'S' stands for ____ data.", accept: ["subjective"], rationale: "S is the subjective data reported by the patient." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "fon-09-vital-signs",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Vital Signs: Temperature, Pulse, Respiration & Blood Pressure",
    readMinutes: 29,
    summary: "The physiology, normal ranges and units, measurement and nursing interpretation of the vital signs plus pain and oxygen saturation; heat balance and thermoregulation; fever mechanism and patterns; pulse characteristics and deficit; determinants of blood pressure and Korotkoff sounds; factors affecting each sign; early-warning scoring; and the clinical significance of abnormal findings.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are vital signs?", p: "Vital signs are objective measurements of the body's most basic physiological functions: body temperature (T), pulse (P), respiration (R) and blood pressure (BP). Pain (the 'fifth vital sign') and oxygen saturation (SpO2) are routinely added. They reflect the effectiveness of circulatory, respiratory, neural and endocrine function, provide a baseline, and are among the earliest and most sensitive indicators of clinical deterioration." },
      { h: "When to measure vital signs", list: [
        "On admission, to establish a baseline.",
        "According to hospital policy and the acuity of the patient's condition.",
        "Before, during and after surgery, invasive procedures or blood transfusion.",
        "Before and after administering medications that affect them (e.g., antihypertensives, opioids).",
        "Whenever the patient's condition changes or the patient reports distress.",
        "As part of early-warning score (EWS/NEWS) monitoring to detect deterioration."
      ] },
      { h: "Normal adult reference ranges", figure: {
        caption: "Typical adult vital-sign reference ranges (standard averages; always interpret against the patient's baseline).",
        svg: '<svg viewBox="0 0 470 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal adult vital sign ranges table"><rect x="10" y="10" width="450" height="200" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="10" y1="45" x2="460" y2="45" stroke="#0F4C3A" stroke-width="1.5"/><text x="30" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Vital sign</text><text x="260" y="33" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Normal adult range</text><text x="30" y="70" font-family="sans-serif" font-size="12" fill="#15803D">Temperature (oral)</text><text x="260" y="70" font-family="sans-serif" font-size="12" fill="#15803D">36.1-37.2 &#176;C</text><text x="30" y="98" font-family="sans-serif" font-size="12" fill="#15803D">Pulse</text><text x="260" y="98" font-family="sans-serif" font-size="12" fill="#15803D">60-100 beats/min</text><text x="30" y="126" font-family="sans-serif" font-size="12" fill="#15803D">Respiration</text><text x="260" y="126" font-family="sans-serif" font-size="12" fill="#15803D">12-20 breaths/min</text><text x="30" y="154" font-family="sans-serif" font-size="12" fill="#15803D">Blood pressure</text><text x="260" y="154" font-family="sans-serif" font-size="12" fill="#15803D">~120/80 mmHg</text><text x="30" y="182" font-family="sans-serif" font-size="12" fill="#15803D">SpO2</text><text x="260" y="182" font-family="sans-serif" font-size="12" fill="#15803D">95-100%</text><text x="30" y="205" font-family="sans-serif" font-size="11" fill="#0F4C3A">Pain: 0-10 self-report scale (fifth vital sign)</text></svg>'
      } },
      { h: "Body temperature — thermoregulation", p: "Temperature reflects the balance between heat produced (metabolism, muscle activity, shivering, thyroid and catecholamine effects) and heat lost, regulated by the hypothalamus acting as a thermostat. The normal oral average is about 37 degrees C (range 36.1-37.2 degrees C). Site varies the reading: rectal and tympanic run about 0.5 degrees C higher and axillary about 0.5 degrees C lower than oral.", list: [
        "Heat is lost by radiation, conduction, convection and evaporation.",
        "Factors: circadian rhythm (lowest early morning), age (less stable in the very young and old), exercise, hormones (menstrual cycle), stress and environment."
      ] },
      { h: "Fever mechanism (pathophysiology)", list: [
        "Pyrogens (from microbes or the immune system) trigger release of prostaglandins in the hypothalamus.",
        "The hypothalamic set-point is raised, so the body now defends a higher target temperature.",
        "Chill phase — the patient feels cold, shivers and vasoconstricts to raise temperature toward the new set-point.",
        "Plateau (fever) phase — temperature stabilises at the raised set-point; the patient feels warm.",
        "Defervescence (flush) phase — the set-point falls; the patient sweats and vasodilates to lose heat back to normal."
      ] },
      { h: "Temperature alterations and patterns", list: [
        "Pyrexia (fever) — a regulated rise in set-point caused by pyrogens; grades from low-grade to hyperpyrexia (>41.1 degrees C).",
        "Hyperthermia — uncontrolled heat gain overwhelming loss (e.g., heat stroke); the set-point is not raised.",
        "Hypothermia — core temperature below 35 degrees C.",
        "Fever patterns — intermittent (spikes then normal), remittent (fluctuates but stays above normal), constant/continuous, and relapsing.",
        "Sites — oral, axillary, rectal, tympanic and temporal."
      ] },
      { h: "Pulse", p: "The pulse is the palpable wave of arterial expansion produced by each ventricular contraction; it reflects heart rate, rhythm and volume. The normal adult resting rate is 60-100 beats/min. Assess rate, rhythm (regular or irregular), volume/amplitude (bounding, normal, thready), and equality bilaterally. The apical pulse (auscultated at the apex) is the most accurate and is compared with the radial to detect a pulse deficit.", list: [
        "Tachycardia — rate above 100/min; bradycardia — rate below 60/min.",
        "Pulse deficit — apical rate exceeds radial rate; occurs when weak beats do not transmit to the periphery (e.g., atrial fibrillation); requires two nurses to measure simultaneously.",
        "Common sites: radial, carotid, brachial, femoral, popliteal, dorsalis pedis and apical.",
        "Factors: age, exercise, fever, emotions, pain, blood loss/hypovolaemia, medications, position and thyroid status."
      ] },
      { h: "Respiration", p: "Respiration is the exchange of oxygen and carbon dioxide, observed as breathing movements (one inhalation plus one exhalation equals one breath). The normal adult rate is 12-20 breaths/min. Assess rate, depth (tidal volume), rhythm and effort; count for a full minute if irregular and without alerting the patient (which can alter the rate). Note use of accessory muscles and any noisy breathing.", list: [
        "Terms: eupnoea (normal), tachypnoea (fast), bradypnoea (slow), apnoea (absent), dyspnoea (difficult), orthopnoea (breathless lying flat), hyperventilation and hypoventilation.",
        "Cheyne-Stokes respiration — cyclical crescendo-decrescendo breathing with periods of apnoea, seen in serious illness."
      ] },
      { h: "Blood pressure — physiology", p: "Blood pressure (BP) is the force exerted by circulating blood against arterial walls, recorded as systolic (peak, ventricular contraction) over diastolic (trough, ventricular relaxation) in mmHg; a normal adult value is about 120/80 mmHg. The pulse pressure is the difference (about 40 mmHg). BP is the product of cardiac output and systemic vascular resistance (BP = CO x SVR), so it is influenced by blood volume, heart rate and contractility, vessel elasticity and vascular tone.", figure: {
        caption: "The determinants of arterial blood pressure.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Blood pressure determinants formula"><rect x="15" y="45" width="150" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="90" y="66" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Cardiac output</text><text x="90" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">HR x stroke volume</text><text x="185" y="72" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#15803D">&#215;</text><rect x="205" y="45" width="180" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="295" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Systemic vascular resistance</text><text x="295" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">vessel tone / diameter</text><text x="405" y="72" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#15803D">=</text><rect x="425" y="45" width="60" height="46" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="455" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">BP</text></svg>'
      } },
      { h: "Blood pressure alterations and measurement", list: [
        "Hypertension — persistently elevated BP (generally sustained readings at or above ~140/90 mmHg by older thresholds); a major cardiovascular risk.",
        "Hypotension — abnormally low BP causing hypoperfusion; orthostatic (postural) hypotension is a drop on standing.",
        "Measure with a correctly sized cuff (bladder ~80% of arm circumference), arm at heart level, patient rested; a cuff too small falsely raises and too large falsely lowers the reading.",
        "Korotkoff sounds: the first tapping sound (phase 1) = systolic; the disappearance of sound (phase 5) = diastolic."
      ] },
      { h: "Oxygen saturation and pain", p: "SpO2, measured by pulse oximetry, estimates the percentage of haemoglobin saturated with oxygen; a normal value is about 95-100%. It can read falsely with poor perfusion, motion, nail polish or carbon monoxide poisoning. Pain, the fifth vital sign, is assessed with validated self-report scales (e.g., 0-10 numeric, faces) and is 'whatever the patient says it is', reassessed after intervention." },
      { h: "Early-warning scores and trends", p: "Aggregate early-warning scores (e.g., NEWS) assign points to each vital sign; a rising total triggers escalation. A single reading is less important than the TREND and the whole clinical picture. A classic deterioration pattern is a rising pulse and respiratory rate with a falling blood pressure and falling consciousness, indicating early shock or haemorrhage that must be reported and acted on promptly." },
      { h: "Nursing responsibilities and clinical relevance", list: [
        "Use correct, clean, calibrated equipment and technique; the right cuff and site.",
        "Ensure the patient is rested and undisturbed; explain the procedure.",
        "Record accurately and promptly; interpret against baseline and trends, not single values.",
        "Recognise patterns — e.g., rising pulse and respiration with falling BP suggest early shock/haemorrhage; report and act on abnormal early-warning scores promptly.",
        "A single reading is less important than the trend and the whole clinical picture."
      ] },
      { h: "Key terms", list: [
        "Pyrexia — fever; a regulated rise in body temperature set-point.",
        "Tachycardia / bradycardia — fast / slow heart rate.",
        "Pulse deficit — a difference between apical and radial pulse rates.",
        "Systolic / diastolic — arterial pressure during contraction / relaxation of the ventricles.",
        "Pulse pressure — the difference between systolic and diastolic pressure."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define vital signs and state when they should be measured.",
      "Explain the mechanism and phases of fever and describe the common fever patterns.",
      "Explain the physiology of blood pressure (BP = CO x SVR) and the factors that affect it.",
      "Describe how you would assess a pulse and detect a pulse deficit.",
      "Discuss the use of trends and early-warning scores in interpreting and acting on vital signs."
    ],
    assessment: [
      { type: "mcq", q: "A patient's pulse rises from 80 to 120/min, respirations rise, and BP falls. This trend most suggests:", options: ["Normal variation", "Early shock/haemorrhage", "Improving condition", "Hypothermia"], answer: 1, rationale: "Rising pulse and respiration with falling BP is a classic early sign of shock/blood loss and must be escalated." },
      { type: "mcq", q: "An axillary temperature reads about 36.6 degrees C. The equivalent oral reading would be roughly:", options: ["Lower, ~36.1", "Higher, ~37.1", "Identical", "Unpredictable"], answer: 1, rationale: "Axillary runs about 0.5 degrees C lower than oral, so the oral value would be about 0.5 higher." },
      { type: "mcq", q: "The centre that regulates body temperature is the:", options: ["Cerebellum", "Medulla", "Hypothalamus", "Pituitary"], answer: 2, rationale: "The hypothalamus acts as the body's thermostat, adjusting the set-point." },
      { type: "mcq", q: "A shivering, vasoconstricted patient whose temperature is climbing toward a new raised set-point is in which fever phase?", options: ["Chill phase", "Defervescence", "Plateau phase", "Hypothermia"], answer: 0, rationale: "The chill phase features shivering and vasoconstriction as the body raises temperature toward the new set-point." },
      { type: "mcq", q: "Using a BP cuff that is too small for a large arm will:", options: ["Falsely lower the reading", "Falsely raise the reading", "Have no effect", "Only affect diastolic"], answer: 1, rationale: "An undersized cuff over-reads (falsely high); an oversized cuff under-reads." },
      { type: "mcq", q: "The most accurate site for assessing heart rate, especially if irregular, is the:", options: ["Radial pulse", "Dorsalis pedis", "Apical pulse", "Femoral pulse"], answer: 2, rationale: "The apical pulse is auscultated directly over the heart and is most accurate for irregular rhythms." },
      { type: "mcq", q: "A patient with atrial fibrillation has an apical rate of 96 but a radial rate of 78. This difference is called a:", options: ["Pulse pressure", "Pulse deficit", "Bradycardia", "Bounding pulse"], answer: 1, rationale: "When the apical rate exceeds the radial rate (weak beats not reaching the periphery), it is a pulse deficit." },
      { type: "mcq", q: "The first Korotkoff sound heard while deflating the cuff represents the:", options: ["Diastolic pressure", "Systolic pressure", "Pulse pressure", "Mean pressure"], answer: 1, rationale: "The first tapping sound (phase 1) marks systolic; its disappearance (phase 5) marks diastolic." },
      { type: "mcq", q: "A normal oxygen saturation (SpO2) is about:", options: ["70-80%", "85-90%", "95-100%", "50-60%"], answer: 2, rationale: "Normal SpO2 by pulse oximetry is roughly 95-100%." },
      { type: "mcq", q: "To count respirations accurately, the nurse should:", options: ["Tell the patient to breathe normally and watch openly", "Count without the patient's awareness", "Ask the patient to hold their breath", "Count for 5 seconds only"], answer: 1, rationale: "Awareness alters the rate, so respirations are counted unobtrusively, ideally for a full minute if irregular." },
      { type: "fill", q: "The pressure during ventricular contraction is called the ____ pressure.", accept: ["systolic"], rationale: "Systolic pressure occurs during ventricular contraction." },
      { type: "fill", q: "A slow heart rate below 60 beats/min is called ____.", accept: ["bradycardia"], rationale: "Bradycardia is a heart rate below 60 beats/min." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "fon-10-health-assessment",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Health Assessment & Physical Examination (History Taking & IPPA)",
    readMinutes: 27,
    summary: "The purpose, types and components of health assessment; the comprehensive health history and OLDCART/PQRST symptom analysis; the therapeutic interview; the four techniques of physical examination (IPPA); percussion notes; the head-to-toe approach and the abdominal exception; level of consciousness (GCS); and documentation and use of findings.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is health assessment?", p: "Health assessment is the systematic and continuous collection of subjective and objective data about a patient's health status. It is the first and foundational phase of the nursing process, generating the database from which nursing diagnoses and care flow. It combines the health history (subjective) with the physical examination (objective), and is ongoing — data are continually updated to detect change and evaluate care." },
      { h: "Types of assessment", list: [
        "Comprehensive (initial/admission) — a complete history and full physical examination.",
        "Focused (problem-oriented) — targeted to a specific complaint or system.",
        "Emergency — rapid assessment of life-threatening problems (ABCs).",
        "Ongoing (reassessment) — repeated monitoring to track change and response to care."
      ] },
      { h: "The therapeutic interview", list: [
        "Phases — orientation (introduce, explain purpose, ensure privacy and comfort), working (gather data), and closure (summarise and thank).",
        "Use mainly open-ended questions to gather rich data; closed questions for specific facts.",
        "Employ active listening, silence, clarification and reflection; avoid leading and 'why' questions.",
        "Adapt to age, culture, language, literacy and any sensory or cognitive impairment.",
        "Ensure privacy and a non-judgemental manner to obtain honest, complete information."
      ] },
      { h: "Components of a health history", list: [
        "Biographic data and the reason for seeking care (chief complaint, in the patient's words).",
        "History of present illness — analysed systematically (see OLDCART/PQRST below).",
        "Past medical, surgical, obstetric and immunisation history; current medications and allergies.",
        "Family history — hereditary and communicable risks.",
        "Psychosocial and lifestyle history — occupation, diet, activity, substances, support, coping.",
        "Review of systems — a systematic verbal check of each body system."
      ] },
      { h: "Symptom analysis (OLDCART / PQRST)", figure: {
        caption: "Two mnemonics for a thorough symptom analysis.",
        svg: '<svg viewBox="0 0 470 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OLDCART and PQRST symptom analysis"><rect x="10" y="10" width="450" height="160" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="120" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">OLDCART</text><text x="350" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">PQRST</text><g font-family="sans-serif" font-size="10.5" fill="#15803D"><text x="30" y="58">Onset</text><text x="30" y="76">Location</text><text x="30" y="94">Duration</text><text x="30" y="112">Character</text><text x="30" y="130">Aggravating factors</text><text x="30" y="148">Relieving factors / Timing</text><text x="270" y="58">Provocation / Palliation</text><text x="270" y="76">Quality</text><text x="270" y="94">Region / Radiation</text><text x="270" y="112">Severity (0-10)</text><text x="270" y="130">Timing</text></g></svg>'
      } },
      { h: "Preparing for the physical examination", list: [
        "Ensure privacy, comfort, warmth and adequate lighting.",
        "Gather and clean equipment; perform hand hygiene.",
        "Explain the procedure and obtain consent; position and drape appropriately, exposing only the area examined.",
        "Proceed systematically, usually head-to-toe, comparing right and left sides for symmetry.",
        "Follow standard precautions throughout."
      ] },
      { h: "The four techniques (IPPA)", p: "Physical examination uses four sequential techniques — inspection, palpation, percussion and auscultation — usually in that order. The abdomen is the key exception: inspection then auscultation precede percussion and palpation, because touching first can alter bowel-sound frequency and cause guarding.", figure: {
        caption: "The four physical examination techniques (IPPA) in usual order.",
        svg: '<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IPPA physical examination techniques"><defs><marker id="ipArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="65" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Inspection</text><text x="65" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">look</text><rect x="140" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="195" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Palpation</text><text x="195" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">feel</text><rect x="270" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="325" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Percussion</text><text x="325" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">tap</text><rect x="400" y="40" width="110" height="44" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="455" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Auscultation</text><text x="455" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">listen</text><line x1="120" y1="62" x2="136" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ipArr)"/><line x1="250" y1="62" x2="266" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ipArr)"/><line x1="380" y1="62" x2="396" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ipArr)"/></svg>'
      } },
      { h: "1. Inspection", p: "Systematic visual (and olfactory) observation of the body for colour, size, shape, symmetry, position, movement, lesions, drainage and odour, using good lighting and comparing both sides. It is the least invasive technique, begins the moment the nurse meets the patient, and continues throughout." },
      { h: "2. Palpation", p: "Using the hands and fingers to feel for texture, temperature, moisture, tenderness, masses, pulsation, crepitus, swelling and organ size and consistency. Light palpation (about 1 cm) precedes deep palpation (about 4 cm); fingertips detect fine detail and pulsation, the palmar/ulnar surface detects vibration, and the dorsum best assesses temperature. Palpate tender areas last." },
      { h: "3. Percussion", p: "Tapping the body surface to set underlying tissue vibrating and produce sounds indicating tissue density. It helps map organ borders and detect abnormal air or fluid.", list: [
        "Resonance — low-pitched, hollow; normal air-filled lung.",
        "Hyper-resonance — booming; over-inflated lung (e.g., emphysema).",
        "Dullness — thud; solid organ (liver) or fluid.",
        "Flatness — very dull; dense tissue such as bone or muscle.",
        "Tympany — drum-like; air-filled stomach or bowel."
      ] },
      { h: "4. Auscultation", p: "Listening, usually with a stethoscope, to sounds produced within the body — heart sounds, breath sounds, bowel sounds and vascular bruits. The diaphragm (pressed firmly) detects high-pitched sounds (breath, normal heart, bowel); the bell (light contact) detects low-pitched sounds (some murmurs, bruits). Auscultation requires a quiet environment, warm stethoscope and systematic, symmetrical technique." },
      { h: "Assessing level of consciousness (Glasgow Coma Scale)", list: [
        "The Glasgow Coma Scale (GCS) scores eye-opening (1-4), best verbal response (1-5) and best motor response (1-6).",
        "The total ranges from 3 (deep coma) to 15 (fully alert).",
        "A score of 8 or below usually indicates severe impairment and inability to protect the airway.",
        "AVPU (Alert, responds to Voice, responds to Pain, Unresponsive) is a rapid screening alternative.",
        "Level of consciousness is one of the most sensitive indicators of neurological change."
      ] },
      { h: "Documenting and using findings", p: "Findings are recorded objectively and precisely (using correct terms and measurements), then clustered and analysed to form nursing diagnoses and guide the care plan. Assessment is continuous: the nurse compares new findings with baseline data to detect change, prioritise problems and evaluate the effect of care." },
      { h: "Clinical relevance", p: "For a patient with abdominal pain the nurse inspects for distension, auscultates bowel sounds BEFORE touching (to avoid altering them), then percusses for tympany/dullness and palpates the tender area last. Getting this sequence right yields accurate data and avoids causing unnecessary pain or false findings — a directly examinable application of IPPA." },
      { h: "Key terms", list: [
        "Subjective data — the health history (what the patient reports).",
        "Objective data — physical examination findings (what is observed/measured).",
        "Resonance / dullness / tympany — percussion notes reflecting tissue density.",
        "Glasgow Coma Scale — a 3-15 score of consciousness (eye, verbal, motor).",
        "OLDCART/PQRST — mnemonics for thorough symptom analysis."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Define health assessment, describe its types, and outline the components of a comprehensive health history.",
      "Explain the OLDCART or PQRST framework for analysing a presenting symptom.",
      "Describe the four techniques of physical examination, the usual order, and the percussion notes.",
      "Explain the Glasgow Coma Scale and its interpretation.",
      "Explain why auscultation precedes percussion and palpation in the abdominal examination."
    ],
    assessment: [
      { type: "mcq", q: "For a patient with abdominal pain, the correct examination order is:", options: ["Inspection, auscultation, percussion, palpation", "Inspection, palpation, percussion, auscultation", "Palpation first to find the pain", "Percussion, palpation, auscultation, inspection"], answer: 0, rationale: "In the abdomen, auscultation precedes percussion and palpation to avoid altering bowel sounds and provoking guarding." },
      { type: "mcq", q: "A booming, hyper-resonant percussion note over the chest most suggests:", options: ["Solid tumour", "Pleural fluid", "Over-inflated lung (e.g., emphysema)", "Normal liver"], answer: 2, rationale: "Hyper-resonance indicates trapped/excess air, as in emphysema; dullness would suggest fluid or solid tissue." },
      { type: "mcq", q: "Which stethoscope part best detects a low-pitched heart murmur?", options: ["The diaphragm pressed firmly", "The bell held lightly", "The earpieces", "The tubing"], answer: 1, rationale: "The bell held lightly transmits low-pitched sounds; the diaphragm favours high-pitched sounds." },
      { type: "mcq", q: "A patient opens eyes to speech (3), is confused (4) and localises to pain (5). His Glasgow Coma Scale total is:", options: ["8", "10", "12", "15"], answer: 2, rationale: "Eye 3 + verbal 4 + motor 5 = 12; a fully alert patient scores 15 and deep coma is 3." },
      { type: "mcq", q: "A dull percussion note over the lung base most likely indicates:", options: ["Normal air-filled lung", "Air in the stomach", "Fluid or consolidation", "Bowel gas"], answer: 2, rationale: "Dullness reflects fluid or solid tissue where air-filled lung (resonance) is expected." },
      { type: "mcq", q: "Analysing pain by Provocation, Quality, Region, Severity and Timing uses which mnemonic?", options: ["ADPIE", "SBAR", "PQRST", "RACE"], answer: 2, rationale: "PQRST structures symptom analysis; ADPIE is the nursing process and SBAR/RACE serve other purposes." },
      { type: "mcq", q: "The dorsum (back) of the hand is best used to assess:", options: ["Texture", "Temperature", "Pulsation", "Masses"], answer: 1, rationale: "The dorsum is most sensitive to temperature; fingertips are best for fine detail and pulsation." },
      { type: "mcq", q: "During the health interview, to gather the richest data about the present illness the nurse should mainly use:", options: ["Closed yes/no questions", "Open-ended questions", "Leading questions", "Silence only"], answer: 1, rationale: "Open-ended questions encourage full, detailed responses; closed questions are for specific facts." },
      { type: "mcq", q: "Health assessment is which phase of the nursing process?", options: ["Assessment", "Diagnosis", "Planning", "Evaluation"], answer: 0, rationale: "Assessment is the first phase and provides the database for the rest of the process." },
      { type: "mcq", q: "A tympanic percussion note is normally expected over the:", options: ["Liver", "Air-filled stomach", "Dense muscle", "Consolidated lung"], answer: 1, rationale: "Tympany is the drum-like note over air-filled stomach/bowel; the liver gives dullness." },
      { type: "fill", q: "Systematic visual observation of the patient is called ____.", accept: ["inspection"], rationale: "Inspection is careful, systematic visual examination." },
      { type: "fill", q: "The physical examination technique of listening with a stethoscope is ____.", accept: ["auscultation"], rationale: "Auscultation is listening to internal body sounds." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "fon-11-infection-control",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Infection Prevention & Control: Asepsis and Sterile Technique",
    readMinutes: 28,
    summary: "The chain of infection and how to break each link; modes of transmission; the stages of the infectious process; the body's defences; medical and surgical asepsis; the WHO Five Moments and hand-hygiene technique; PPE and sterile-field rules; standard and transmission-based precautions; sterilisation, disinfection and antisepsis with the Spaulding classification; and prevention of health-care-associated infection.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Infection and its importance", p: "Infection is the invasion and multiplication of pathogenic microorganisms in body tissue, producing injury. Colonisation is the presence of organisms without tissue damage. Health-care-associated (nosocomial) infections increase morbidity, mortality, length of stay, antimicrobial resistance and cost. Infection prevention and control (IPC) is a core nursing responsibility and a key nurse-sensitive quality and safety indicator." },
      { h: "The chain of infection", p: "Infection spreads through six linked elements; breaking any single link interrupts transmission, which is the unifying principle behind every infection-control measure.", figure: {
        caption: "The chain of infection — breaking any link stops transmission.",
        svg: '<svg viewBox="0 0 470 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of infection cycle"><circle cx="235" cy="125" r="95" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4"/><g font-family="sans-serif" font-size="10" fill="#0F4C3A" text-anchor="middle"><rect x="185" y="8" width="100" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="235" y="27">Infectious agent</text><rect x="330" y="55" width="95" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="377" y="74">Reservoir</text><rect x="345" y="165" width="110" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="400" y="184">Portal of exit</text><rect x="185" y="212" width="100" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="235" y="231">Transmission</text><rect x="15" y="165" width="115" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="72" y="184">Portal of entry</text><rect x="45" y="55" width="110" height="30" rx="6" fill="#DCFCE7" stroke="#0F4C3A"/><text x="100" y="74">Susceptible host</text></g></svg>'
      } },
      { h: "Links of the chain and how to break them", list: [
        "Infectious agent (pathogen) — break by antimicrobials, cleaning and rapid identification.",
        "Reservoir (where it lives — humans, animals, environment, water) — break by cleaning, waste disposal and treating carriers.",
        "Portal of exit (respiratory, blood, secretions, faeces) — break by respiratory hygiene, wound covering, safe specimen handling.",
        "Mode of transmission (contact, droplet, airborne, vehicle, vector) — break by hand hygiene, PPE and isolation.",
        "Portal of entry (broken skin, mucosa, invasive devices) — break by aseptic technique and device care.",
        "Susceptible host (reduced defences) — break by immunisation, nutrition and treating underlying illness."
      ] },
      { h: "Modes of transmission in detail", list: [
        "Contact — direct (person to person) or indirect (via a contaminated object/fomite); the commonest route (e.g., MRSA, C. difficile).",
        "Droplet — large respiratory droplets travelling short distances (~1-2 m) that fall quickly (e.g., influenza, pertussis).",
        "Airborne — tiny droplet nuclei that stay suspended and travel further (e.g., tuberculosis, measles, varicella).",
        "Vehicle — via contaminated food, water, blood or equipment.",
        "Vector — via insects or animals (e.g., mosquito-borne malaria, dengue)."
      ] },
      { h: "Stages of the infectious process", list: [
        "Incubation — from entry to first symptoms.",
        "Prodromal — early, vague, non-specific symptoms; often highly contagious.",
        "Illness (acute) — specific signs and symptoms peak.",
        "Convalescence (decline and recovery) — symptoms resolve and the host recovers."
      ] },
      { h: "Body defences against infection", list: [
        "First line (non-specific) — intact skin and mucous membranes, normal flora, acidic secretions, cilia, coughing.",
        "Second line (non-specific) — inflammation, phagocytosis, fever and complement.",
        "Third line (specific/adaptive) — humoral (antibody/B-cell) and cell-mediated (T-cell) immunity.",
        "Compromised defences (extremes of age, malnutrition, immunosuppression, invasive devices) raise susceptibility."
      ] },
      { h: "Medical versus surgical asepsis", list: [
        "Medical asepsis (clean technique) — reduces the number and spread of microorganisms (hand hygiene, clean gloves, cleaning surfaces, standard precautions).",
        "Surgical asepsis (sterile technique) — eliminates all microorganisms and spores from an object or area (sterile field, sterile gloving, invasive/surgical procedures, catheter insertion)."
      ] },
      { h: "Hand hygiene — the single most important measure", list: [
        "Perform hand hygiene using the WHO 'Five Moments': (1) before touching a patient, (2) before an aseptic/clean task, (3) after body-fluid exposure risk, (4) after touching a patient, (5) after touching patient surroundings.",
        "Use soap and water for visibly soiled hands and after certain organisms (e.g., spore-forming); use alcohol-based hand rub otherwise.",
        "Cover all surfaces of the hands; recommended duration is about 20-30 seconds for hand rub and 40-60 seconds for handwashing.",
        "Remove rings and keep nails short; care for skin to maintain integrity."
      ] },
      { h: "PPE and sterile-field rules", list: [
        "PPE — gloves, gowns/aprons, masks, respirators and eye protection, selected by the anticipated exposure and route.",
        "Sequence — don gown, mask, eye protection, then gloves; doff gloves, eye protection, gown, then mask, performing hand hygiene after removal.",
        "Doff carefully to avoid self-contamination; PPE is single-use where indicated.",
        "Sterile field rules — keep it in sight and above waist level, do not turn your back on it or reach across it, a 2.5 cm border is considered contaminated, and moisture wicks contamination (strike-through)."
      ] },
      { h: "Standard and transmission-based precautions", list: [
        "Standard precautions — applied to ALL patients regardless of diagnosis: hand hygiene, PPE by risk, safe injection and sharps practice, respiratory hygiene/cough etiquette, safe handling of equipment, linen and waste, and environmental cleaning.",
        "Transmission-based precautions (added to standard) — Contact (e.g., MRSA, C. difficile: gloves, gown, dedicated equipment); Droplet (e.g., influenza, pertussis: surgical mask within ~1-2 m); Airborne (e.g., tuberculosis, measles, varicella: N95/respirator and negative-pressure room)."
      ] },
      { h: "Sterilisation, disinfection and antisepsis (Spaulding)", figure: {
        caption: "The Spaulding classification links the item's risk to the decontamination level required.",
        svg: '<svg viewBox="0 0 500 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spaulding classification"><rect x="10" y="10" width="480" height="145" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="10" y1="42" x2="490" y2="42" stroke="#0F4C3A" stroke-width="1.5"/><text x="30" y="32" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Item category</text><text x="300" y="32" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Required level</text><g font-family="sans-serif" font-size="11" fill="#15803D"><text x="30" y="68">Critical (enters sterile tissue)</text><text x="300" y="68">Sterilisation</text><text x="30" y="98">Semi-critical (touches mucosa)</text><text x="300" y="98">High-level disinfection</text><text x="30" y="128">Non-critical (intact skin)</text><text x="300" y="128">Low-level disinfection</text></g></svg>'
      } },
      { h: "Levels of decontamination", list: [
        "Sterilisation — destroys ALL microorganisms including spores (moist heat/autoclave ~121 degrees C, dry heat, chemical sterilants, ionising radiation, gas).",
        "Disinfection — destroys most pathogens (not all spores) on inanimate surfaces (chemical disinfectants); classified as high-, intermediate- and low-level.",
        "Antisepsis — reduces microorganisms on living tissue (skin/mucosa antiseptics).",
        "Cleaning (removal of visible soil) ALWAYS precedes disinfection and sterilisation.",
        "Spaulding classification — critical items require sterilisation; semi-critical require high-level disinfection; non-critical require low-level disinfection."
      ] },
      { h: "Preventing health-care-associated infections", list: [
        "Consistent hand hygiene and correct PPE use; aseptic technique for invasive care.",
        "Care bundles for devices — CAUTI (catheter), CLABSI (central line), VAP (ventilator) and surgical-site infection prevention.",
        "Safe sharps handling and disposal; waste segregation; environmental cleaning.",
        "Antimicrobial stewardship and prompt isolation of infectious patients.",
        "Patient and family education; supporting host defences (nutrition, immunisation)."
      ] },
      { h: "Clinical relevance", p: "Before inserting a urinary catheter the nurse uses surgical asepsis (sterile gloves and field, aseptic non-touch technique), thereby protecting the 'portal of entry' link — a direct application of both the chain of infection and the medical/surgical asepsis distinction, and a core element of the CAUTI prevention bundle." },
      { h: "Key terms", list: [
        "Asepsis — the absence of pathogenic microorganisms.",
        "Nosocomial / HAI — health-care-associated infection.",
        "Standard precautions — infection-control measures applied to every patient.",
        "Sterilisation — complete destruction of all microorganisms and spores.",
        "Transmission-based precautions — contact, droplet and airborne precautions added for specific routes."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the chain of infection and explain how each link can be broken.",
      "Compare the modes of transmission (contact, droplet, airborne, vehicle, vector) with examples.",
      "Explain the WHO Five Moments and correct technique for hand hygiene.",
      "Differentiate standard from transmission-based precautions, giving examples of each transmission type.",
      "Differentiate sterilisation, disinfection and antisepsis and relate them to the Spaulding classification."
    ],
    assessment: [
      { type: "mcq", q: "A patient has pulmonary tuberculosis. The correct precaution level and PPE is:", options: ["Contact precautions with gloves only", "Droplet precautions with a surgical mask", "Airborne precautions with an N95 respirator and negative-pressure room", "Standard precautions alone"], answer: 2, rationale: "Tuberculosis spreads by the airborne route via droplet nuclei, requiring an N95 respirator and negative-pressure isolation." },
      { type: "mcq", q: "Inserting a urinary catheter requires which technique to protect the portal of entry?", options: ["Medical asepsis only", "Surgical (sterile) asepsis", "No special technique", "Clean gloves only"], answer: 1, rationale: "Catheter insertion enters a normally sterile route and requires surgical asepsis." },
      { type: "mcq", q: "The single most effective measure to prevent infection transmission is:", options: ["Antibiotics", "Hand hygiene", "Wearing a gown", "Isolation"], answer: 1, rationale: "Hand hygiene is the most important IPC measure, breaking the transmission link." },
      { type: "mcq", q: "A surgical instrument that enters sterile tissue is a critical item and must be:", options: ["Cleaned only", "Low-level disinfected", "High-level disinfected", "Sterilised"], answer: 3, rationale: "Under Spaulding, critical items entering sterile tissue require sterilisation." },
      { type: "mcq", q: "Standard precautions are applied to:", options: ["Only infected patients", "Only surgical patients", "All patients", "Only children"], answer: 2, rationale: "Standard precautions apply to every patient regardless of diagnosis." },
      { type: "mcq", q: "A patient's flu spreads to a nearby patient via large respiratory droplets over about one metre. This is which mode of transmission?", options: ["Airborne", "Droplet", "Vector", "Vehicle"], answer: 1, rationale: "Large droplets travelling a short distance and falling quickly define droplet transmission; airborne involves suspended droplet nuclei." },
      { type: "mcq", q: "For a patient with Clostridioides difficile, hand hygiene should be performed with:", options: ["Alcohol hand rub only", "Soap and water", "A dry wipe", "Nothing needed"], answer: 1, rationale: "Alcohol is less effective against spores; soap and water physically remove C. difficile spores." },
      { type: "mcq", q: "Which is a body's first-line, non-specific defence?", options: ["Antibody production", "Intact skin and normal flora", "T-cell immunity", "Vaccination"], answer: 1, rationale: "Intact skin/mucosa and normal flora are first-line non-specific defences; antibody and T-cell responses are third-line adaptive immunity." },
      { type: "mcq", q: "The stage of infection with early, vague, highly contagious symptoms is the:", options: ["Incubation stage", "Prodromal stage", "Convalescence stage", "Decline stage"], answer: 1, rationale: "The prodromal stage features early non-specific symptoms and high contagiousness." },
      { type: "mcq", q: "Before any disinfection or sterilisation, an item must first be:", options: ["Stored", "Cleaned of visible soil", "Labelled", "Used"], answer: 1, rationale: "Cleaning to remove visible soil must always precede disinfection and sterilisation." },
      { type: "fill", q: "The absence of pathogenic microorganisms is called ____.", accept: ["asepsis"], rationale: "Asepsis is the absence of pathogenic organisms." },
      { type: "fill", q: "The process that destroys all microorganisms including spores is ____.", accept: ["sterilisation", "sterilization"], rationale: "Sterilisation destroys all microbial life including spores." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "fon-12-safety-environment",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Safety & the Therapeutic Environment; Use of Restraints",
    readMinutes: 25,
    summary: "The safe, therapeutic environment; risk factors and common hospital hazards; the evidence-based fall-prevention bundle and Morse scale; fire (RACE/PASS) and electrical safety; the appropriate, ethical and legal use of restraints; alternatives to restraint; incident reporting; and the nurse's role in a culture of safety.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Patient safety and the therapeutic environment", p: "A therapeutic environment is one that is safe, clean, comfortable and supportive of healing — physically, psychologically and socially. Patient safety, the prevention of avoidable harm during care, is a fundamental duty and a core quality indicator. Nurses spend the most time with patients and are pivotal in identifying, assessing and reducing risk and in fostering a culture of safety." },
      { h: "Elements of a therapeutic environment", list: [
        "Physical — clean, adequately lit, well-ventilated, comfortable temperature, reduced noise, uncluttered space.",
        "Psychological — respect, privacy, reduced anxiety, orientation and clear communication.",
        "Social — supportive relationships, family involvement and preserved dignity.",
        "Safety features — call bells within reach, bed in low position, side rails as clinically indicated, non-slip floors, secure functioning equipment."
      ] },
      { h: "Risk factors for injury", list: [
        "Patient (intrinsic) factors — age (very young and elderly), impaired mobility or balance, sensory or cognitive impairment, confusion/delirium, sedation and polypharmacy, incontinence, previous falls.",
        "Environmental (extrinsic) factors — wet or cluttered floors, poor lighting, unfamiliar surroundings, unsuitable footwear, faulty equipment, high beds.",
        "Situational factors — unattended patients, understaffing, poor communication and lack of risk assessment."
      ] },
      { h: "Common hospital hazards and prevention", list: [
        "Falls — the most common hospital injury; prevented by risk assessment, call bell in reach, bed low and locked, adequate lighting, toileting rounds, assistance and non-slip footwear.",
        "Fire — respond by RACE (Rescue, Alarm, Confine, Extinguish/Evacuate); operate an extinguisher by PASS (Pull, Aim, Squeeze, Sweep).",
        "Electrical hazards — inspect equipment, avoid overloaded sockets, remove and report faulty devices.",
        "Poisoning, burns/scalds and needle-stick injuries — safe storage and labelling, temperature checks and safe sharps practice.",
        "Infection and medication errors — addressed by IPC and the rights of medication administration."
      ] },
      { h: "Fire response (RACE / PASS)", figure: {
        caption: "Fire response mnemonics: RACE for the emergency, PASS for the extinguisher.",
        svg: '<svg viewBox="0 0 470 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RACE and PASS fire safety"><rect x="10" y="10" width="450" height="150" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="120" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">RACE</text><text x="350" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">PASS</text><g font-family="sans-serif" font-size="11" fill="#15803D"><text x="30" y="60">R - Rescue</text><text x="30" y="82">A - Alarm</text><text x="30" y="104">C - Confine</text><text x="30" y="126">E - Extinguish / Evacuate</text><text x="270" y="60">P - Pull the pin</text><text x="270" y="82">A - Aim at the base</text><text x="270" y="104">S - Squeeze the handle</text><text x="270" y="126">S - Sweep side to side</text></g></svg>'
      } },
      { h: "Fall prevention (evidence-based bundle)", p: "Fall prevention uses a multifactorial bundle: standardised fall-risk assessment (e.g., Morse Fall Scale) on admission, per shift and after change of condition; keeping the bed low with wheels locked; ensuring the call bell and needed items are within reach; timely and scheduled toileting rounds; reviewing sedating and psychoactive medications; providing assistance, non-slip footwear and adequate lighting; and educating the patient and family." },
      { h: "The Morse Fall Scale", list: [
        "A validated tool scoring six factors: history of falling, secondary diagnosis, ambulatory aid, IV/heparin lock, gait/transferring and mental status.",
        "The total score stratifies patients into low, moderate and high fall risk.",
        "Higher risk triggers more intensive, individualised interventions from the bundle.",
        "Reassessment is done on admission, per shift, after a fall and after any change in condition or medication."
      ] },
      { h: "Restraints — definition and types", p: "A restraint is any physical or chemical method that restricts a patient's freedom of movement or normal access to their own body. Restraints carry serious physical and psychological risks (injury, strangulation, pressure injury, impaired circulation, aspiration, humiliation, agitation, even death) and are a measure of last resort, used only to prevent harm when less restrictive alternatives have failed.", list: [
        "Physical restraints — devices limiting movement (limb, mitt or vest restraints; side rails when used to restrict).",
        "Chemical restraints — medications used to control behaviour rather than to treat a diagnosed condition.",
        "Environmental restraints — secured or locked areas that confine the patient."
      ] },
      { h: "Alternatives to restraint (try first)", list: [
        "Identify and treat the cause of agitation (pain, hypoxia, infection, full bladder, delirium).",
        "Reorientation, familiar objects, family presence and a sitter/companion.",
        "Diversional activity, adequate lighting and a calm environment; frequent checks.",
        "Bed/chair alarms, low beds and floor mats; regular toileting.",
        "Optimise vision and hearing aids and communication."
      ] },
      { h: "Safe, ethical and legal use of restraints", list: [
        "Use only when necessary for safety and only after least-restrictive alternatives have failed.",
        "Obtain a valid, time-limited order and informed consent where required; follow policy and law; restraints are never for staff convenience or punishment.",
        "Apply correctly, allowing two fingers' space and adequate circulation; use a quick-release knot tied to a stable, movable part of the bed frame, NOT to the side rail.",
        "Monitor frequently (commonly every 15-30 minutes) — circulation, skin, position, breathing, hydration, elimination and dignity.",
        "Release regularly (e.g., every 2 hours) for movement, exercise and care; document the reason, alternatives tried, consent, monitoring and response; reassess and discontinue as soon as possible."
      ] },
      { h: "Incident and near-miss reporting", list: [
        "An incident report is a factual, objective record of any unexpected event or near-miss (fall, medication error, equipment failure).",
        "Its purpose is system learning and improvement, NOT blaming or disciplining an individual.",
        "The report is a separate risk-management document — reference to it is not made in the patient's chart, though the clinical facts of the event ARE charted.",
        "Root-cause analysis examines why an event happened to prevent recurrence.",
        "Near-misses (caught before harm) are valuable warnings and should be reported too."
      ] },
      { h: "Nurse's role and a culture of safety", list: [
        "Assess risk continuously and individualise preventive measures.",
        "Maintain a hazard-free environment and functioning equipment.",
        "Educate patients and families; complete incident/near-miss reports to analyse and improve systems.",
        "Foster open, blame-free reporting and root-cause analysis to prevent recurrence."
      ] },
      { h: "Clinical relevance", p: "For a confused, agitated post-op patient the nurse first checks for reversible causes (pain, hypoxia, full bladder), tries reorientation, family presence and a bed alarm, and only if these fail and the patient endangers themselves applies the least-restrictive restraint with an order, correct technique, frequent monitoring and full documentation — demonstrating the ethical, legal and safe use of restraint as a last resort." },
      { h: "Key terms", list: [
        "Restraint — a device or drug that restricts movement or access to one's body.",
        "RACE / PASS — fire-emergency and fire-extinguisher response mnemonics.",
        "Morse Fall Scale — a validated fall-risk assessment tool.",
        "Incident report — a formal record of an unexpected event or near-miss for system learning.",
        "Least-restrictive alternative — the safest, least limiting option tried before restraint."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Describe the elements of a safe, therapeutic environment and the risk factors for injury.",
      "Outline an evidence-based fall-prevention bundle and the role of the Morse Fall Scale.",
      "Explain the RACE and PASS approaches to fire safety.",
      "Define restraints, list alternatives, and explain the principles of their safe, ethical and legal use.",
      "Explain the purpose of incident reporting and the nurse's role in a culture of safety."
    ],
    assessment: [
      { type: "mcq", q: "A confused, agitated patient is pulling at his IV. The nurse's FIRST action should be to:", options: ["Apply wrist restraints immediately", "Assess and treat reversible causes and try alternatives", "Sedate the patient", "Do nothing"], answer: 1, rationale: "Restraints are a last resort; the nurse first seeks reversible causes and tries less-restrictive alternatives." },
      { type: "mcq", q: "During a room fire, applying RACE, the FIRST step is to:", options: ["Extinguish the fire", "Rescue anyone in danger", "Confine the fire", "Sound the alarm"], answer: 1, rationale: "In RACE, Rescue those in immediate danger comes first, then Alarm, Confine, Extinguish/Evacuate." },
      { type: "mcq", q: "When using a fire extinguisher (PASS), you aim at:", options: ["The top of the flames", "The base of the fire", "The smoke", "The ceiling"], answer: 1, rationale: "PASS: Pull, Aim at the base, Squeeze, Sweep — aiming at the base removes the fuel." },
      { type: "mcq", q: "A medication given solely to control behaviour rather than treat a condition is a:", options: ["Physical restraint", "Chemical restraint", "Environmental restraint", "Therapeutic dose"], answer: 1, rationale: "A chemical restraint controls behaviour rather than treating a diagnosed illness." },
      { type: "mcq", q: "A limb restraint should be secured with a quick-release knot to the:", options: ["Side rail", "IV pole", "Stable bed frame", "Patient's gown"], answer: 2, rationale: "Tie to a stable, movable bed frame, not the side rail, to avoid injury when the rail moves." },
      { type: "mcq", q: "A restrained patient should be monitored for circulation, skin and comfort approximately every:", options: ["8 hours", "4 hours", "15-30 minutes", "Once a shift"], answer: 2, rationale: "Frequent monitoring (about every 15-30 minutes) prevents restraint-related harm." },
      { type: "mcq", q: "The main purpose of the Morse Fall Scale is to:", options: ["Diagnose disease", "Stratify a patient's fall risk to guide interventions", "Measure pain", "Rate consciousness"], answer: 1, rationale: "The Morse scale stratifies fall risk (low/moderate/high) so preventive measures can be matched to risk." },
      { type: "mcq", q: "The most appropriate first-choice alternative for a wandering, confused patient is:", options: ["A vest restraint", "A bed/chair alarm and reorientation", "Chemical sedation", "A locked room"], answer: 1, rationale: "Bed alarms, reorientation and supervision are least-restrictive alternatives tried before restraint." },
      { type: "mcq", q: "The main purpose of an incident report is to:", options: ["Blame the nurse", "Improve systems and prevent recurrence", "Discipline staff", "Replace documentation"], answer: 1, rationale: "Incident reports support system learning and root-cause analysis in a blame-free safety culture." },
      { type: "mcq", q: "The most common physical injury among hospitalised patients is:", options: ["Falls", "Burns", "Poisoning", "Electrocution"], answer: 0, rationale: "Falls are the most frequent hospital injury, driving the emphasis on fall-prevention bundles." },
      { type: "fill", q: "Any device or drug that restricts a patient's freedom of movement is a ____.", accept: ["restraint"], rationale: "A restraint limits movement or access to the body." },
      { type: "fill", q: "The fire-response acronym that begins with Rescue and Alarm is ____.", accept: ["RACE"], rationale: "RACE = Rescue, Alarm, Confine, Extinguish/Evacuate." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "fon-13-hygiene-comfort",
    unit: "Unit 3 · Basic Needs & Nursing Techniques",
    title: "Personal Hygiene, Comfort & Bed Making",
    readMinutes: 25,
    summary: "The purposes and principles of personal hygiene care; oral, skin, hair, perineal, eye/ear/nose and back care; the therapeutic bed bath and back massage; factors affecting hygiene; the skin as the first barrier; comfort measures; and the purposes, types and principles of bed making.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Hygiene and comfort in nursing", p: "Personal hygiene is the self-care by which people maintain cleanliness and grooming of the body. When illness, weakness or immobility limits self-care, the nurse assists — meeting a basic human need and promoting comfort, dignity, skin integrity, circulation and psychological well-being. Hygiene care is also a prime, unhurried opportunity for skin and general assessment and for therapeutic communication." },
      { h: "The skin as the first barrier", list: [
        "The skin is the body's largest organ and the first-line defence against infection.",
        "Functions — protection, temperature regulation, sensation, excretion and vitamin D synthesis.",
        "Intact, clean, well-perfused skin resists microorganisms; broken or macerated skin is a portal of entry.",
        "Hygiene care maintains this barrier and offers a chance to detect early breakdown.",
        "Ageing, moisture, poor nutrition and immobility all threaten skin integrity."
      ] },
      { h: "Purposes of hygiene care", list: [
        "Cleanse the skin and remove microorganisms, secretions, sweat and odour.",
        "Promote comfort, relaxation and a sense of well-being.",
        "Stimulate circulation and maintain skin integrity.",
        "Provide an opportunity to assess the skin, mobility and the patient's overall condition.",
        "Preserve dignity, self-esteem and independence."
      ] },
      { h: "Factors affecting hygiene practices", list: [
        "Culture, religion and personal preferences.",
        "Developmental stage and body image.",
        "Socioeconomic status and access to facilities.",
        "Health state, energy, mobility and cognition.",
        "Knowledge and habits regarding self-care."
      ] },
      { h: "General principles of hygiene care", list: [
        "Ensure privacy, warmth and safety; explain the procedure and gain cooperation and consent.",
        "Perform hand hygiene; apply standard precautions and use clean equipment and warm water.",
        "Encourage independence and respect preferences, culture and dignity.",
        "Work from clean to dirty and from proximal areas outward; observe the skin and report abnormalities.",
        "Maintain good body mechanics for the nurse and comfortable, safe positioning for the patient.",
        "Keep the patient covered as much as possible, exposing only the area being washed."
      ] },
      { h: "Oral (mouth) care", p: "Oral care removes food debris and plaque, prevents dental caries, infection (including aspiration pneumonia) and halitosis, and promotes comfort and appetite. Special mouth care is essential for unconscious, NPO (nil by mouth), oxygen-dependent, intubated or debilitated patients, who are prone to a dry, coated mouth and mucosal breakdown. Position the unconscious patient side-lying with the head turned to allow drainage and prevent aspiration; never place fingers between the teeth of a patient who may bite." },
      { h: "Bathing and skin care", list: [
        "Types — complete bed bath (nurse washes a fully dependent patient), partial bath (face, hands, axillae, perineum), self-bath, assisted tub/shower, and therapeutic/medicated baths.",
        "The bed bath cleanses, promotes circulation and comfort, and allows a full head-to-toe skin assessment.",
        "Inspect bony prominences and pressure areas; keep skin clean, dry (especially skin folds) and appropriately moisturised.",
        "Water temperature should be comfortably warm (about 43-46 degrees C for a bed bath), tested before use."
      ] },
      { h: "Perineal and other specific care", list: [
        "Perineal (genital) care prevents infection and odour; clean from front to back / clean to dirty to reduce contamination; especially important for catheterised, incontinent and postpartum patients.",
        "Hair care and shampooing maintain cleanliness, comfort and self-esteem.",
        "Nail care — trim/file carefully; extra caution and often referral for diabetic or vascular patients.",
        "Eye care — clean from inner to outer canthus; ear and nose care as needed, avoiding trauma."
      ] },
      { h: "Back care and massage", p: "A back rub/massage promotes relaxation, relieves muscle tension, stimulates circulation to pressure-prone areas (sacrum, scapulae, heels) and provides comfort and an opportunity to inspect the back for early pressure changes. Use long, smooth effleurage strokes with lotion for about 3-5 minutes. It is contraindicated where it could cause harm (e.g., certain spinal conditions, fractures, deep vein thrombosis, or broken/reddened non-blanching skin)." },
      { h: "Bed making — purposes and types", p: "A clean, dry, wrinkle-free, comfortable bed promotes rest, comfort and skin integrity and reduces infection risk.", figure: {
        caption: "Types of beds the nurse prepares.",
        svg: '<svg viewBox="0 0 470 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of beds"><rect x="10" y="10" width="450" height="130" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="235" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Types of Bed</text><g font-family="sans-serif" font-size="11" fill="#15803D"><text x="35" y="62">Unoccupied - closed</text><text x="260" y="62">Occupied (patient in bed)</text><text x="35" y="88">Unoccupied - open</text><text x="260" y="88">Post-operative (surgical) bed</text><text x="35" y="114">Special / cardiac bed</text><text x="260" y="114">Amputation / fracture bed</text></g></svg>'
      } },
      { h: "Types and principles of bed making", list: [
        "Unoccupied bed — made when empty; closed (top covers up) or open (folded down to receive a patient).",
        "Occupied bed — made with the patient in it, for those on bed rest; the patient is rolled side to side.",
        "Post-operative (surgical) bed — top linen fan-folded to one side to receive a patient from a trolley.",
        "Special beds — cardiac, amputation, fracture and others adapted to need.",
        "Principles — use clean, wrinkle-free linen pulled tight (a tight foundation prevents pressure and discomfort); apply standard precautions with soiled linen (never shake it or hold it against the uniform); use good body mechanics; miter corners for security."
      ] },
      { h: "Comfort measures", figure: {
        caption: "Comfort is physical, psychological and social ease supported by many measures.",
        svg: '<svg viewBox="0 0 460 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comfort measures"><rect x="10" y="10" width="440" height="110" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="230" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Promoting Comfort</text><g font-family="sans-serif" font-size="11" fill="#15803D"><text x="35" y="62">Hygiene &amp; positioning</text><text x="250" y="62">Pain relief</text><text x="35" y="88">Clean, calm environment</text><text x="250" y="88">Therapeutic presence</text><text x="35" y="112">Preserving dignity</text><text x="250" y="112">Individual preferences</text></g></svg>'
      } },
      { h: "Clinical relevance", p: "For a bed-bound, incontinent, semiconscious patient the nurse gives a bed bath (assessing skin), side-lying oral care (preventing aspiration), front-to-back perineal care (preventing infection), a back massage over the sacrum (relieving pressure) and an occupied-bed change with tight linen (protecting skin) — integrating hygiene, comfort and pressure-injury prevention into one coordinated round of care." },
      { h: "Key terms", list: [
        "Bed bath — bathing a patient confined to bed.",
        "Perineal care — hygiene of the genital and anal area, done front to back.",
        "Halitosis — offensive mouth odour.",
        "Occupied bed — a bed made with the patient in it.",
        "Effleurage — long, smooth stroking used in back massage."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "State the purposes of personal hygiene care and explain the role of intact skin as the first barrier.",
      "Explain the general principles the nurse follows when giving hygiene care.",
      "Describe the special oral care of an unconscious patient and its precautions.",
      "Discuss the purposes, technique and contraindications of a back massage.",
      "Describe the purposes, types and principles of bed making."
    ],
    assessment: [
      { type: "mcq", q: "The nurse is about to give an unconscious patient mouth care. The safest position is:", options: ["Side-lying with head turned to allow drainage", "Flat supine", "High Fowler's unsupported", "Prone"], answer: 0, rationale: "Side-lying with the head turned allows secretions to drain and prevents aspiration in a patient who cannot protect the airway." },
      { type: "mcq", q: "Perineal care on a female patient should be performed:", options: ["Back to front", "In any direction", "Front to back (clean to dirty)", "With a stiff brush"], answer: 2, rationale: "Cleaning front to back moves clean to dirty and reduces contamination of the urethra." },
      { type: "mcq", q: "While giving a back massage the nurse notes a non-blanching red area over the sacrum. She should:", options: ["Massage it vigorously", "Avoid massaging it and report a possible pressure injury", "Apply heat", "Ignore it"], answer: 1, rationale: "Massaging reddened, non-blanching skin can worsen tissue damage; it should be offloaded and reported." },
      { type: "mcq", q: "The skin's role as the body's first-line defence is threatened MOST by:", options: ["Intact, dry skin", "Moisture, immobility and poor nutrition", "Regular repositioning", "Good perfusion"], answer: 1, rationale: "Moisture, immobility and poor nutrition break down the skin barrier and create a portal of entry." },
      { type: "mcq", q: "Soiled linen should be:", options: ["Shaken to remove debris", "Held against the uniform", "Rolled away from the body without shaking", "Reused"], answer: 2, rationale: "Not shaking and not touching the uniform prevents dispersal of microorganisms." },
      { type: "mcq", q: "A tight, wrinkle-free foundation sheet primarily helps to:", options: ["Raise temperature", "Prevent pressure injury and discomfort", "Increase infection", "Save linen"], answer: 1, rationale: "A smooth, tight surface protects skin integrity and comfort." },
      { type: "mcq", q: "A post-operative (surgical) bed is prepared by:", options: ["Making a closed bed", "Fan-folding the top linen to one side", "Leaving it unmade", "Removing the mattress"], answer: 1, rationale: "Top linen is fan-folded aside to receive the patient arriving from a trolley." },
      { type: "mcq", q: "Offensive mouth odour is called:", options: ["Halitosis", "Cyanosis", "Anorexia", "Dysphagia"], answer: 0, rationale: "Halitosis is offensive breath odour, reduced by good oral care." },
      { type: "mcq", q: "A prime additional benefit of giving hygiene care is that it allows the nurse to:", options: ["Skip assessment", "Assess the skin and overall condition", "Avoid communication", "Reduce documentation"], answer: 1, rationale: "Hygiene care is a key unhurried opportunity for skin and general assessment." },
      { type: "mcq", q: "Which factor most legitimately alters how hygiene care is provided?", options: ["The nurse's mood", "The patient's culture and preferences", "Ward decoration", "Visiting hours"], answer: 1, rationale: "Culture, religion and personal preference appropriately shape individualised hygiene care." },
      { type: "fill", q: "A bed made with the patient in it is called an ____ bed.", accept: ["occupied"], rationale: "An occupied bed is made while the patient remains in it." },
      { type: "fill", q: "Hygiene of the genital and anal area, cleaned front to back, is called ____ care.", accept: ["perineal", "peri"], rationale: "Perineal care cleans the genital/anal area from clean to dirty." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "fon-14-mobility-body-mechanics",
    unit: "Unit 4 · Mobility, Rest & Oxygenation",
    title: "Activity, Mobility, Body Mechanics & Positioning",
    readMinutes: 26,
    summary: "The importance of activity and mobility; elements of normal movement; principles of body mechanics and safe patient handling; common positions and their uses; pressure relief; safe transferring; range-of-motion exercises; the systemic hazards of immobility; and nursing measures to prevent complications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Activity, mobility and their importance", p: "Mobility is the ability to move freely, purposefully and independently in the environment. Adequate activity maintains musculoskeletal strength and joint function, cardiovascular fitness, respiratory function, metabolism, elimination and psychological health. Illness, injury, pain, weakness, attached devices and prescribed bed rest reduce mobility, so nurses assess mobility, promote activity, and actively prevent the complications of immobility." },
      { h: "Elements of normal movement", list: [
        "Body alignment (posture) — the relationship of body parts that allows balance and reduces strain.",
        "Balance — a low centre of gravity over a wide base of support.",
        "Coordinated movement — integrated muscle, skeletal and nervous-system function.",
        "Joint mobility and muscle tone — maintained by regular use."
      ] },
      { h: "Body mechanics — principles", p: "Body mechanics is the coordinated, efficient use of body parts to produce safe movement and maintain balance while preventing injury to the nurse and patient. Musculoskeletal injury (especially low-back injury) is a major occupational hazard for nurses; correct technique combined with safe-handling equipment (hoists, slide sheets) markedly reduces this risk. Manual lifting of heavy patients is discouraged in favour of assistive devices.", list: [
        "Maintain a wide base of support with feet apart (about shoulder width).",
        "Keep the back straight and bend at the hips and knees, using the strong leg muscles rather than the back.",
        "Keep the load close to the body and the centre of gravity low.",
        "Push, pull, roll or slide rather than lift where possible; pivot the feet instead of twisting the spine.",
        "Face the direction of movement; tighten abdominal and gluteal muscles; get help and use aids for heavy loads."
      ] },
      { h: "Common positions and their uses", figure: {
        caption: "Common patient positions and typical uses.",
        svg: '<svg viewBox="0 0 470 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Common patient positions"><rect x="10" y="10" width="450" height="160" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="10" y1="40" x2="460" y2="40" stroke="#0F4C3A" stroke-width="1.5"/><text x="30" y="30" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Position</text><text x="240" y="30" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Typical use</text><g font-family="sans-serif" font-size="10.5" fill="#15803D"><text x="30" y="62">Supine (dorsal)</text><text x="240" y="62">Rest, many procedures</text><text x="30" y="86">Fowler&#39;s / semi-Fowler&#39;s</text><text x="240" y="86">Eases breathing &amp; feeding</text><text x="30" y="110">Lateral (side-lying)</text><text x="240" y="110">Pressure relief, unconscious</text><text x="30" y="134">Sims&#39;</text><text x="240" y="134">Enemas, rectal procedures</text><text x="30" y="158">Trendelenburg</text><text x="240" y="158">Selected use per policy</text></g></svg>'
      } },
      { h: "Positions in detail", list: [
        "Supine (dorsal recumbent) — lying on the back; for rest and many procedures.",
        "Fowler's / semi-Fowler's — head of bed raised 45-90 / 30-45 degrees; eases breathing, feeding and comfort.",
        "Lateral (side-lying) — relieves pressure on the back and sacrum; useful for the unconscious.",
        "Prone — lying on the abdomen; may improve oxygenation in selected respiratory conditions.",
        "Sims' — semi-prone side-lying with the upper knee flexed; for enemas and rectal procedures.",
        "Trendelenburg — head lower than feet; used only in specific circumstances per policy (e.g., certain procedures)."
      ] },
      { h: "Positioning and pressure relief", p: "Regular repositioning (commonly about every two hours, individualised to risk and support surface) redistributes pressure over bony prominences, preventing pressure injury, and also prevents contractures, foot drop and pooling of respiratory secretions. Use pillows, wedges and supports to maintain neutral alignment, protect joints and prevent external rotation of the hips and plantar flexion of the feet." },
      { h: "Transferring patients safely", list: [
        "Assess the patient's weight-bearing ability, cooperation, cognition and equipment needs before moving.",
        "Explain the move and coordinate a clear count ('on three'); lock bed and wheelchair brakes.",
        "Use transfer belts, slide sheets, slide boards or mechanical hoists as indicated.",
        "Position yourself close, maintain body mechanics, and move the patient toward their stronger side.",
        "Never sacrifice safety for speed; get adequate help for dependent patients."
      ] },
      { h: "Range-of-motion (ROM) exercises", list: [
        "Active ROM — performed by the patient independently, maintaining strength and mobility.",
        "Passive ROM — performed by the nurse for a patient who cannot move a part; maintains joint mobility but not muscle strength.",
        "Active-assisted ROM — the patient moves with the nurse's help.",
        "Move each joint slowly and gently through its normal range without forcing or causing pain; support the joint above and below."
      ] },
      { h: "Types of joint movement (terminology)", list: [
        "Flexion — decreasing the angle of a joint; extension — increasing it.",
        "Abduction — moving away from the midline; adduction — moving toward it.",
        "Rotation — turning around an axis; circumduction — a circular movement.",
        "Pronation/supination — turning the palm down/up.",
        "Dorsiflexion/plantar flexion — moving the foot up toward the shin / down; inversion/eversion — turning the sole in/out."
      ] },
      { h: "Hazards of immobility (systemic)", p: "Prolonged immobility harms every body system, with effects that compound one another.", list: [
        "Musculoskeletal — muscle atrophy and weakness, contractures, foot drop, disuse osteoporosis.",
        "Cardiovascular — orthostatic (postural) hypotension, increased cardiac workload, venous stasis and deep vein thrombosis (DVT).",
        "Respiratory — reduced chest expansion, pooling of secretions, atelectasis and hypostatic pneumonia.",
        "Integumentary — pressure injuries over bony prominences.",
        "Gastrointestinal — reduced appetite, constipation.",
        "Urinary — stasis, calculi and infection.",
        "Metabolic — negative nitrogen balance, altered glucose handling.",
        "Psychosocial — depression, anxiety, boredom, altered sleep and disorientation."
      ] },
      { h: "Nursing measures to prevent complications", list: [
        "Encourage early mobilisation and activity as permitted; set graded goals.",
        "Reposition regularly; perform or teach ROM exercises to preserve joints.",
        "Encourage deep breathing, coughing and incentive spirometry to protect the lungs.",
        "Ensure hydration, fibre and nutrition to protect elimination and skin.",
        "Apply anti-embolism stockings/measures and monitor for DVT and skin breakdown per policy.",
        "Provide psychosocial stimulation and involve the patient in care."
      ] },
      { h: "Clinical relevance", p: "For a patient on prolonged bed rest the nurse links the concepts: correct body mechanics and a hoist protect both patient and nurse during a transfer; two-hourly repositioning and passive ROM prevent pressure injury and contractures; deep-breathing and early mobilisation prevent pneumonia and DVT. Recognising, for example, that dizziness on first standing is orthostatic hypotension prompts a slow, staged transfer to prevent a fall." },
      { h: "Key terms", list: [
        "Body mechanics — safe, efficient coordinated body movement.",
        "Contracture — permanent shortening of a muscle/joint from disuse.",
        "Passive ROM — joint movement performed for the patient by the nurse.",
        "Abduction / adduction — movement away from / toward the midline.",
        "Orthostatic hypotension — a fall in blood pressure on standing, a hazard of immobility."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Explain the principles of correct body mechanics and why safe handling matters for nurses.",
      "Describe the common patient positions and their uses.",
      "Define the main types of joint movement and differentiate active, passive and active-assisted ROM.",
      "Discuss the hazards of immobility across the major body systems.",
      "Outline the nursing measures used to prevent the complications of immobility."
    ],
    assessment: [
      { type: "mcq", q: "A patient on bed rest becomes dizzy and pale when first standing. This most likely reflects:", options: ["Contracture", "Orthostatic hypotension", "Pneumonia", "Osteoporosis"], answer: 1, rationale: "A blood-pressure drop on standing after immobility is orthostatic hypotension, prompting a slow staged transfer." },
      { type: "mcq", q: "When lifting, the nurse should generate power from the:", options: ["Back muscles", "Leg muscles", "Neck", "Wrists"], answer: 1, rationale: "Strong leg muscles should do the work to protect the vulnerable back." },
      { type: "mcq", q: "Turning the palm of the hand upward is termed:", options: ["Pronation", "Supination", "Abduction", "Flexion"], answer: 1, rationale: "Supination turns the palm up; pronation turns it down." },
      { type: "mcq", q: "To ease breathing in a dyspnoeic patient, the BEST position is:", options: ["Prone", "Fowler's (upright)", "Trendelenburg", "Flat supine"], answer: 1, rationale: "Fowler's raises the head and improves lung expansion and breathing." },
      { type: "mcq", q: "Passive ROM maintains joint mobility but does NOT:", options: ["Move joints", "Maintain muscle strength", "Prevent contractures", "Preserve range"], answer: 1, rationale: "Because the patient does not actively contract muscles, strength is not maintained by passive ROM." },
      { type: "mcq", q: "A respiratory hazard of prolonged immobility is:", options: ["Hypostatic pneumonia", "Hypertension", "Diarrhoea", "Tachycardia"], answer: 0, rationale: "Pooled secretions predispose to atelectasis and hypostatic pneumonia." },
      { type: "mcq", q: "Before transferring a patient to a wheelchair the nurse should FIRST:", options: ["Twist the spine", "Lock the brakes on bed and chair", "Rush the move", "Skip the explanation"], answer: 1, rationale: "Locking brakes prevents the chair or bed moving during transfer, a key safety step." },
      { type: "mcq", q: "Moving a limb away from the midline of the body is called:", options: ["Adduction", "Abduction", "Flexion", "Rotation"], answer: 1, rationale: "Abduction is movement away from the midline; adduction is toward it." },
      { type: "mcq", q: "A cardiovascular hazard of prolonged immobility is:", options: ["Deep vein thrombosis", "Improved circulation", "Lower infection risk", "Faster healing"], answer: 0, rationale: "Venous stasis in immobility raises the risk of deep vein thrombosis." },
      { type: "mcq", q: "A wide base of support is achieved by:", options: ["Keeping feet together", "Standing on tiptoe", "Placing the feet about shoulder-width apart", "Bending only the back"], answer: 2, rationale: "Feet apart widen the base of support and improve stability." },
      { type: "fill", q: "The safe, coordinated use of the body to move and lift is called body ____.", accept: ["mechanics"], rationale: "Body mechanics protects the nurse and patient from injury." },
      { type: "fill", q: "A permanent shortening of a muscle or joint from disuse is a ____.", accept: ["contracture"], rationale: "Contractures result from prolonged immobility." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "fon-15-rest-sleep",
    unit: "Unit 4 · Mobility, Rest & Oxygenation",
    title: "Rest, Sleep & Oxygenation / Basic Respiratory Care",
    readMinutes: 26,
    summary: "The physiology, stages and functions of sleep; sleep regulation and requirements; common sleep disturbances and promotion of rest; the physiology of oxygenation (ventilation, diffusion, perfusion, transport); assessment of respiratory status and early versus late hypoxia; oxygen-delivery devices and safety; and nursing interventions to support breathing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Rest and sleep", p: "Rest is a state of reduced physical activity and mental calm that restores energy. Sleep is a natural, cyclical, reversible state of reduced consciousness and responsiveness to the environment that restores physical and mental function. Both are basic human needs essential for healing, immunity, tissue growth, memory, mood and safety; illness, pain, anxiety and the hospital environment frequently disrupt them, and poor sleep slows recovery." },
      { h: "Physiology and regulation of sleep", p: "Sleep-wake cycles are governed by the circadian rhythm (an approximately 24-hour internal clock in the hypothalamic suprachiasmatic nucleus, entrained by light) and by brain centres and neurotransmitters. Melatonin (released in darkness) promotes sleep; the reticular activating system maintains wakefulness. Sleep cycles through NREM and REM stages roughly every 90 minutes, with 4-6 cycles per night.", figure: {
        caption: "Sleep cycles alternate NREM and REM about every 90 minutes through the night.",
        svg: '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sleep cycle NREM and REM"><rect x="10" y="10" width="460" height="130" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><polyline points="30,40 90,40 90,70 150,70 150,110 210,110 210,55 240,55 240,110 300,110 300,70 360,70 360,40 420,40" fill="none" stroke="#15803D" stroke-width="2.5"/><text x="240" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">one ~90-min cycle repeats</text><text x="225" y="50" font-family="sans-serif" font-size="9" fill="#22C55E">REM (bursts)</text><text x="120" y="128" font-family="sans-serif" font-size="9" fill="#0F4C3A">deep NREM (N3)</text></svg>'
      } },
      { h: "Stages of sleep", list: [
        "NREM N1 — light transitional sleep; easily aroused.",
        "NREM N2 — deeper; heart rate and temperature fall.",
        "NREM N3 — deep, slow-wave restorative sleep; growth-hormone release, tissue repair; hardest to wake from.",
        "REM — rapid-eye-movement; vivid dreaming; important for memory, learning and mood; muscle atonia; occurs in longer bursts toward morning."
      ] },
      { h: "Functions of sleep and requirements", list: [
        "Physical restoration and tissue repair (mainly NREM N3).",
        "Conservation of energy and support of immune function.",
        "Consolidation of memory and learning (mainly REM).",
        "Emotional regulation and psychological well-being.",
        "Typical requirements: newborns 14-17 h, school-age ~9-11 h, adults ~7-9 h, older adults ~7-8 h (often lighter, more fragmented)."
      ] },
      { h: "Common sleep disturbances", list: [
        "Insomnia — difficulty falling or staying asleep, or non-restorative sleep.",
        "Sleep apnoea — repeated cessation of breathing during sleep (often obstructive), causing daytime sleepiness.",
        "Narcolepsy — sudden, uncontrollable daytime sleep attacks.",
        "Parasomnias — sleepwalking, night terrors, bruxism and enuresis.",
        "Sleep deprivation — cumulative loss causing irritability, poor concentration and impaired healing."
      ] },
      { h: "Promoting rest and sleep (nursing measures)", list: [
        "Provide a quiet, dim, comfortable environment; cluster care to avoid unnecessary night interruptions.",
        "Maintain routines and comfort measures (hygiene, positioning, a warm drink, back rub).",
        "Manage pain and anxiety; limit caffeine, heavy meals and daytime napping.",
        "Educate on sleep hygiene (consistent schedule, limiting screens, daytime light and activity).",
        "Use sedative/hypnotic medication only when necessary and reassess, as it can disrupt normal sleep architecture."
      ] },
      { h: "Oxygenation — physiology", p: "Oxygenation supplies oxygen to body cells for energy production and removes carbon dioxide. It depends on integrated processes: ventilation (movement of air in and out of the lungs), diffusion (gas exchange across the alveolar-capillary membrane, driven by pressure gradients), perfusion (blood flow through the pulmonary and systemic circulation), and transport (oxygen carried mainly bound to haemoglobin). Failure of any component impairs cellular oxygen supply.", figure: {
        caption: "Oxygenation depends on ventilation, diffusion and perfusion working together.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Oxygenation: ventilation, diffusion, perfusion"><defs><marker id="oxArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="45" width="130" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="80" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Ventilation</text><text x="80" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">air in &amp; out</text><rect x="185" y="45" width="130" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="250" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Diffusion</text><text x="250" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">gas exchange</text><rect x="355" y="45" width="130" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="420" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Perfusion</text><text x="420" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">blood flow</text><line x1="145" y1="68" x2="181" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#oxArr)"/><line x1="315" y1="68" x2="351" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#oxArr)"/></svg>'
      } },
      { h: "Factors affecting oxygenation", list: [
        "Airway patency — obstruction by the tongue, secretions or foreign body.",
        "Lung and cardiac disease — pneumonia, asthma, COPD, heart failure.",
        "Haemoglobin level — anaemia reduces oxygen-carrying capacity.",
        "Environmental — altitude, air quality, smoking.",
        "Position and mobility — upright positions and activity aid ventilation."
      ] },
      { h: "Assessment of respiratory status", list: [
        "Rate, depth, rhythm and effort of breathing; use of accessory muscles; noisy breathing.",
        "Colour (central cyanosis is a late sign), oxygen saturation (SpO2) and level of consciousness.",
        "Breath sounds on auscultation; cough and sputum characteristics; reports of dyspnoea.",
        "Early signs of hypoxia — restlessness, anxiety, tachycardia, tachypnoea, confusion.",
        "Late signs of hypoxia — cyanosis, bradycardia, decreasing consciousness."
      ] },
      { h: "Oxygen-delivery devices", list: [
        "Nasal cannula — low-flow, ~1-6 L/min, comfortable, allows eating/talking; delivers roughly 24-44% oxygen.",
        "Simple face mask — ~5-8 L/min for moderate needs.",
        "Venturi mask — delivers a precise, controlled oxygen percentage (useful in CO2-retaining COPD patients).",
        "Non-rebreather mask — high concentration (~60-90%) for emergencies via a reservoir bag and one-way valves.",
        "Humidification is added for higher flows; caution with high oxygen in chronic CO2 retainers."
      ] },
      { h: "Oxygen safety and basic interventions", list: [
        "Position upright/Fowler's (or high side-lying) to maximise lung expansion.",
        "Encourage deep breathing, effective coughing and incentive spirometry.",
        "Ensure a clear airway; suction secretions when indicated; encourage hydration to loosen secretions.",
        "Administer oxygen safely as prescribed by the correct device, with humidification and caution in CO2-retaining patients.",
        "Oxygen supports combustion — enforce no-smoking and fire precautions and avoid oil-based products around the source.",
        "Provide chest physiotherapy per plan; monitor response and report deterioration promptly."
      ] },
      { h: "Clinical relevance", p: "A post-operative patient who becomes restless with SpO2 falling to 88% is showing early hypoxia; the nurse sits him upright, encourages deep breathing and coughing, checks the airway, applies prescribed oxygen and reassesses — linking the ventilation-diffusion-perfusion model to prioritised action. Recognising restlessness as an early (not late) hypoxia sign can prevent an emergency." },
      { h: "Key terms", list: [
        "Hypoxia — inadequate oxygen at the tissue level.",
        "REM sleep — rapid-eye-movement, dreaming, mentally restorative stage.",
        "NREM N3 — deep slow-wave sleep responsible for physical restoration.",
        "Ventilation — movement of air into and out of the lungs.",
        "Incentive spirometry — a device encouraging sustained deep breathing to expand the lungs."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Differentiate rest from sleep, explain sleep regulation, and describe the functions of sleep.",
      "Describe the stages of sleep (NREM and REM) and their restorative roles.",
      "Discuss common sleep disturbances and nursing measures to promote sleep.",
      "Explain the processes on which oxygenation depends and factors that affect it.",
      "Compare the common oxygen-delivery devices and state the key oxygen safety precautions."
    ],
    assessment: [
      { type: "mcq", q: "A post-op patient becomes restless and anxious with SpO2 88%. The nurse should interpret this as:", options: ["An early sign of hypoxia requiring action", "Normal recovery", "A late sign only", "A sign of good oxygenation"], answer: 0, rationale: "Restlessness and anxiety are early signs of hypoxia; cyanosis and bradycardia are late signs that indicate danger." },
      { type: "mcq", q: "Deep, slow-wave sleep most responsible for physical restoration and growth-hormone release is:", options: ["NREM N1", "REM", "NREM N3", "Wakefulness"], answer: 2, rationale: "NREM N3 is deep restorative sleep with tissue repair and growth-hormone release; REM is more for memory and mood." },
      { type: "mcq", q: "Repeated cessation of breathing during sleep is:", options: ["Insomnia", "Sleep apnoea", "Narcolepsy", "Parasomnia"], answer: 1, rationale: "Sleep apnoea involves repeated pauses in breathing during sleep, often obstructive." },
      { type: "mcq", q: "A COPD patient who retains carbon dioxide needs a precise, controlled oxygen concentration. The BEST device is a:", options: ["Non-rebreather mask", "Nasal cannula at 6 L/min", "Venturi mask", "Simple face mask at 8 L/min"], answer: 2, rationale: "The Venturi mask delivers an exact, controlled oxygen percentage, important to avoid removing the hypoxic drive in CO2 retainers." },
      { type: "mcq", q: "A patient with severe anaemia may have poor tissue oxygenation mainly because of reduced:", options: ["Ventilation", "Haemoglobin oxygen-carrying capacity", "Diffusion distance", "Airway size"], answer: 1, rationale: "Oxygen is carried on haemoglobin; anaemia lowers carrying capacity despite normal lungs." },
      { type: "mcq", q: "To best support oxygenation the nurse positions the dyspnoeic patient:", options: ["Flat supine", "Upright/Fowler's", "Trendelenburg", "Prone flat"], answer: 1, rationale: "An upright/Fowler's position maximises lung expansion and eases breathing." },
      { type: "mcq", q: "Which is a key safety rule during oxygen therapy?", options: ["Allow smoking nearby", "Enforce no smoking and fire precautions", "Use oil-based products freely", "Remove humidification always"], answer: 1, rationale: "Oxygen supports combustion, so no smoking and fire precautions are essential; oil-based products near oxygen are hazardous." },
      { type: "mcq", q: "A high-concentration device using a reservoir bag and one-way valves for emergencies is the:", options: ["Nasal cannula", "Non-rebreather mask", "Venturi mask", "Simple mask"], answer: 1, rationale: "The non-rebreather mask delivers roughly 60-90% oxygen for emergencies via its reservoir and valves." },
      { type: "mcq", q: "The internal clock that regulates the sleep-wake cycle over ~24 hours is the:", options: ["Circadian rhythm", "Cardiac cycle", "Menstrual cycle", "Krebs cycle"], answer: 0, rationale: "The circadian rhythm governs the ~24-hour sleep-wake cycle, entrained by light." },
      { type: "mcq", q: "A full sleep cycle lasts approximately:", options: ["10 minutes", "30 minutes", "90 minutes", "5 hours"], answer: 2, rationale: "A sleep cycle is roughly 90 minutes and repeats 4-6 times a night." },
      { type: "fill", q: "The dreaming, mentally restorative stage of sleep is ____ sleep.", accept: ["REM", "rapid eye movement"], rationale: "REM sleep supports memory, learning and mood." },
      { type: "fill", q: "Inadequate oxygen at the tissue level is called ____.", accept: ["hypoxia"], rationale: "Hypoxia is insufficient oxygen at the tissues." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "fon-16-nutrition-fluid-elimination",
    unit: "Unit 4 · Mobility, Rest & Oxygenation",
    title: "Fluid, Nutrition & Elimination Needs",
    readMinutes: 26,
    summary: "Nutrients and a balanced diet; nutritional assessment and methods of feeding; fluid compartments and electrolyte balance with normal values; dehydration and fluid overload; intake-output and daily-weight monitoring; urinary and bowel elimination, normal values and common problems; and their nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Meeting basic physiological needs", p: "Nutrition, fluids and elimination are interdependent basic human needs essential to homeostasis, healing, energy and comfort. Illness commonly disturbs them — through anorexia, vomiting, fever, wounds, immobility or medication. The nurse assesses intake and output, prevents and manages problems, supports independence and dignity, and educates the patient and family." },
      { h: "Nutrients and their functions", list: [
        "Carbohydrates — the main and most readily available energy source (~4 kcal/g).",
        "Proteins — build and repair tissue, form enzymes and antibodies; essential for healing and immunity (~4 kcal/g).",
        "Fats — concentrated energy (~9 kcal/g), insulation, and carriers of fat-soluble vitamins (A, D, E, K).",
        "Vitamins — organic regulators of body processes (water-soluble B and C; fat-soluble A, D, E, K).",
        "Minerals — inorganic regulators (calcium, iron, sodium, potassium).",
        "Water — the essential medium for all body functions and transport."
      ] },
      { h: "A balanced diet and changing needs", p: "A balanced diet supplies all nutrient groups in appropriate proportions and adequate energy. Nutritional needs change with age, growth, activity, pregnancy and lactation, and illness (e.g., increased protein and energy needs during wound healing, sepsis or burns). Cultural, religious and personal food preferences must be respected in planning care." },
      { h: "Nutritional assessment and support", list: [
        "Assess appetite, usual intake, recent weight change, body-mass index (BMI), swallowing ability and nutritional-risk screening.",
        "Assist and encourage eating; position upright; allow time; respect cultural and religious food practices.",
        "Recognise and manage malnutrition, obesity and special diets (diabetic, low-salt, high-protein, renal, texture-modified).",
        "Involve dietitians for complex needs; monitor response to nutritional support."
      ] },
      { h: "Methods of feeding", list: [
        "Oral — the preferred route when swallowing is safe and intake adequate.",
        "Enteral (tube) feeding — via nasogastric (NG), nasojejunal, gastrostomy (PEG) or jejunostomy tube when the gut works but oral intake is unsafe or insufficient.",
        "Parenteral nutrition — intravenous provision of nutrients (peripheral or total/central) when the gut cannot be used.",
        "Nursing care for tube feeding — verify tube placement before each feed, elevate the head of the bed 30-45 degrees to prevent aspiration, check residual/tolerance, flush the tube, and maintain oral and tube hygiene."
      ] },
      { h: "Fluid compartments and balance", p: "Total body water is about 60% of adult body weight, distributed as intracellular fluid (about two-thirds) and extracellular fluid (about one-third, comprising intravascular plasma and interstitial fluid). Balance is maintained when intake (drinks, food, IV fluids; ~2000-2500 mL/day) equals output (urine, stool, sweat, insensible losses via skin and lungs). Homeostasis is regulated by thirst, the kidneys, and hormones (ADH and aldosterone).", figure: {
        caption: "Fluid balance: intake should equal output (approximate adult figures).",
        svg: '<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fluid balance intake and output"><rect x="20" y="30" width="180" height="90" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="110" y="52" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Intake ~2500 mL</text><text x="110" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">drinks, food, IV</text><rect x="280" y="30" width="180" height="90" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="370" y="52" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Output ~2500 mL</text><text x="370" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">urine, stool, sweat, lungs</text><text x="240" y="82" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#15803D">=</text></svg>'
      } },
      { h: "Fluid and electrolyte imbalance", list: [
        "Dehydration (fluid volume deficit) — signs: thirst, dry mucosa, poor skin turgor, sunken eyes, reduced/concentrated urine, weakness, tachycardia and hypotension.",
        "Fluid overload (excess) — signs: oedema, weight gain, raised blood pressure, distended neck veins, crackles and breathlessness.",
        "Key electrolytes — sodium (~135-145 mmol/L), potassium (~3.5-5.0 mmol/L), calcium (~2.1-2.6 mmol/L); imbalances affect nerves, muscles and the heart.",
        "Report significant imbalance promptly; potassium disturbances are especially dangerous to cardiac rhythm."
      ] },
      { h: "Signs of imbalance (comparison)", figure: {
        caption: "Contrasting signs of fluid volume deficit and excess.",
        svg: '<svg viewBox="0 0 480 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deficit versus excess signs"><rect x="10" y="10" width="460" height="145" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="240" y1="10" x2="240" y2="155" stroke="#0F4C3A" stroke-width="1.5"/><text x="125" y="34" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Deficit (dehydration)</text><text x="355" y="34" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Excess (overload)</text><g font-family="sans-serif" font-size="10.5" fill="#15803D"><text x="30" y="62">Thirst, dry mucosa</text><text x="255" y="62">Oedema, weight gain</text><text x="30" y="88">Poor skin turgor</text><text x="255" y="88">Distended neck veins</text><text x="30" y="114">Tachycardia, low BP</text><text x="255" y="114">Raised BP, crackles</text><text x="30" y="140">Scanty dark urine</text><text x="255" y="140">Breathlessness</text></g></svg>'
      } },
      { h: "Intake and output (I&O) monitoring", p: "Accurate measurement and recording of all fluids taken in (oral, enteral, IV) and all fluids lost (urine, vomit, drains, diarrhoea, estimated losses) is essential for patients at risk of imbalance. Daily weighing at the same time, scale and clothing is the most sensitive indicator of fluid change (about 1 kg equals ~1 litre). The nurse totals I&O per shift and per 24 hours and reports significant negative or positive balance." },
      { h: "Urinary elimination", list: [
        "Normal adult urine output is about 1500 mL/day (roughly 0.5-1 mL/kg/hour; an output below ~30 mL/hour warrants concern).",
        "Common problems — retention (inability to void), incontinence, dysuria (painful voiding), oliguria (low output), anuria (near-absent output), polyuria (high output), nocturia and urinary tract infection.",
        "Nursing care — promote normal voiding (privacy, position, hydration, timing), strict aseptic catheter care and CAUTI prevention, accurate I&O and prompt reporting of abnormal output."
      ] },
      { h: "Bowel elimination", list: [
        "Normal bowel patterns vary widely between individuals (from three times a day to three times a week).",
        "Common problems — constipation, diarrhoea, faecal impaction, flatulence and faecal incontinence.",
        "Nursing care — promote adequate fibre, fluids, activity, privacy and routine; administer prescribed enemas, suppositories or laxatives; assess stool colour, consistency and frequency; recognise and relieve impaction."
      ] },
      { h: "Clinical relevance", p: "A febrile patient with vomiting has thirst, dry mucosa, tachycardia and low, concentrated urine — the nurse recognises fluid volume deficit, starts strict I&O and daily weights, encourages/administers fluids as prescribed, and monitors electrolytes. Conversely, sudden weight gain, oedema and breathlessness signal overload requiring fluid review. Linking I&O and daily weight to these signs is a core, examinable nursing skill." },
      { h: "Key terms", list: [
        "Enteral feeding — nutrition delivered into the gastrointestinal tract via a tube.",
        "Dehydration — a deficit of body fluid (fluid volume deficit).",
        "Oliguria — abnormally low urine output (below ~30 mL/hour).",
        "Intake and output (I&O) — the measured record of fluids gained and lost.",
        "Skin turgor — skin elasticity, reduced in dehydration."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "List the nutrient groups and their functions and explain how needs change with illness.",
      "Describe the methods of feeding and the nursing care associated with enteral tube feeding.",
      "Explain fluid compartments and balance and contrast the signs of dehydration and fluid overload.",
      "Discuss the importance and method of intake-output and daily-weight monitoring.",
      "Describe common urinary and bowel elimination problems and their nursing management."
    ],
    assessment: [
      { type: "mcq", q: "A febrile, vomiting patient has dry mucosa, poor skin turgor, tachycardia and dark, scanty urine. This indicates:", options: ["Fluid overload", "Fluid volume deficit (dehydration)", "Normal status", "Hyperkalaemia"], answer: 1, rationale: "These are classic signs of dehydration/fluid volume deficit; overload would show oedema and crackles." },
      { type: "mcq", q: "During NG tube feeding, the nurse should keep the head of the bed elevated 30-45 degrees mainly to:", options: ["Aid digestion of fat", "Prevent aspiration", "Speed the feed", "Reduce cost"], answer: 1, rationale: "Head elevation reduces the risk of regurgitation and aspiration during and after feeds." },
      { type: "mcq", q: "The most sensitive daily indicator of fluid balance change is:", options: ["Body weight measured consistently", "Height", "Hair length", "Skin colour"], answer: 0, rationale: "Daily weight (same time/scale/clothing) sensitively reflects fluid gains and losses (~1 kg is about 1 L)." },
      { type: "mcq", q: "An hourly urine output persistently below 30 mL/hour is called ____ and should be reported.", options: ["Polyuria", "Oliguria", "Nocturia", "Dysuria"], answer: 1, rationale: "Oliguria (low output) may signal poor perfusion or renal problems and warrants prompt reporting." },
      { type: "mcq", q: "Which electrolyte imbalance is most dangerous to cardiac rhythm and must be reported urgently?", options: ["Mild low calcium", "Potassium disturbance", "Slightly high chloride", "Low magnesium alone"], answer: 1, rationale: "Potassium is critical to cardiac conduction; abnormal levels can cause fatal arrhythmias." },
      { type: "mcq", q: "Sudden weight gain, ankle oedema, crackles and breathlessness most suggest:", options: ["Dehydration", "Fluid overload", "Constipation", "Anaemia"], answer: 1, rationale: "These are signs of fluid volume excess/overload, the opposite of dehydration." },
      { type: "mcq", q: "IV provision of nutrients when the gut cannot be used is:", options: ["Enteral feeding", "Oral feeding", "Parenteral nutrition", "Gavage"], answer: 2, rationale: "Parenteral nutrition supplies nutrients intravenously when the gastrointestinal tract cannot be used." },
      { type: "mcq", q: "A normal serum potassium level is approximately:", options: ["135-145 mmol/L", "8-12 mmol/L", "3.5-5.0 mmol/L", "2.1-2.6 mmol/L"], answer: 2, rationale: "Normal potassium is about 3.5-5.0 mmol/L; 135-145 is sodium and 2.1-2.6 is calcium." },
      { type: "mcq", q: "The nutrient most essential for tissue building, healing and antibody formation is:", options: ["Fat", "Protein", "Water", "Fibre"], answer: 1, rationale: "Proteins build and repair tissue and form enzymes and antibodies, vital for healing." },
      { type: "mcq", q: "Normal adult urine output is approximately:", options: ["100 mL/day", "500 mL/day", "1500 mL/day", "5000 mL/day"], answer: 2, rationale: "Around 1500 mL/day (about 0.5-1 mL/kg/hour) is normal adult output." },
      { type: "fill", q: "A deficit of body fluid is called ____.", accept: ["dehydration"], rationale: "Dehydration is a deficiency of body fluid." },
      { type: "fill", q: "Feeding delivered into the GI tract through a tube is called ____ feeding.", accept: ["enteral", "tube"], rationale: "Enteral (tube) feeding uses the functioning gastrointestinal tract." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "fon-17-medication-administration",
    unit: "Unit 5 · Medication, Wounds & Pain",
    title: "Medication Administration, Routes & Dosage Calculation",
    readMinutes: 27,
    summary: "Principles of safe medication administration; basic pharmacokinetics and pharmacodynamics; routes of administration and injection sites; the rights of medication administration; the three label checks; dosage-calculation formulae with worked examples; high-alert drugs and error prevention; and the nurse's legal and professional responsibilities.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Medication administration in nursing", p: "Administering medicines safely is a core, high-risk nursing responsibility governed by law, professional standards and a valid prescriber's order. The nurse must understand each drug's action, indication, usual dose, route, side effects, interactions and contraindications, and must verify, administer, document and monitor each dose. Medication errors are a leading cause of preventable patient harm, so safety systems and vigilance are essential." },
      { h: "Basic pharmacology concepts", list: [
        "Pharmacokinetics — what the body does to the drug: absorption, distribution, metabolism (mainly liver) and excretion (mainly kidney) — ADME.",
        "Pharmacodynamics — what the drug does to the body: mechanism of action, receptor binding and effect.",
        "Therapeutic effect, side effect, adverse drug reaction, toxicity and allergy.",
        "Onset, peak and duration of action; half-life; therapeutic range (the window between sub-therapeutic and toxic levels)."
      ] },
      { h: "Factors affecting drug response", list: [
        "Age (paediatric and older adults are more sensitive) and body weight.",
        "Organ function — impaired liver or kidney reduces metabolism/excretion and raises toxicity risk.",
        "Genetics, disease state and nutrition/hydration.",
        "Drug interactions and the route and time of administration."
      ] },
      { h: "Routes of administration", list: [
        "Oral (PO) — by mouth; safe, convenient and economical but slower onset; avoid if the patient is NPO, vomiting or unable to swallow.",
        "Sublingual/buccal — under the tongue / against the cheek for rapid absorption bypassing first-pass metabolism.",
        "Topical and transdermal — applied to skin for local or slow systemic effect.",
        "Inhalation — into the respiratory tract for rapid local/systemic effect.",
        "Rectal and vaginal — via mucous membranes when oral is unsuitable.",
        "Parenteral (by injection) — intradermal (ID), subcutaneous (SC), intramuscular (IM) and intravenous (IV); IV gives the fastest, most complete effect and carries the highest risk."
      ] },
      { h: "Parenteral routes and injection angles", list: [
        "Intradermal (ID) — into the dermis at ~10-15 degrees; small volumes for skin tests and TB testing.",
        "Subcutaneous (SC) — into fatty tissue at ~45 degrees (or 90 with a short needle); e.g., insulin, heparin.",
        "Intramuscular (IM) — into muscle at 90 degrees; larger volumes and faster absorption; sites include ventrogluteal (preferred), deltoid and vastus lateralis.",
        "Intravenous (IV) — directly into the vein for immediate, complete effect and titration.",
        "Rotate SC/IM sites to prevent tissue damage and ensure absorption."
      ] },
      { h: "The rights of medication administration", p: "Checking the traditional 'rights' at every administration is a key safety practice, expanded in modern practice from five to ten.", figure: {
        caption: "The core 'rights' of safe medication administration.",
        svg: '<svg viewBox="0 0 420 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rights of medication administration"><rect x="10" y="10" width="400" height="190" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="210" y="36" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Rights of Medication</text><g font-family="sans-serif" font-size="12" fill="#15803D"><text x="40" y="66">1. Right patient</text><text x="230" y="66">6. Right documentation</text><text x="40" y="94">2. Right drug</text><text x="230" y="94">7. Right reason</text><text x="40" y="122">3. Right dose</text><text x="230" y="122">8. Right response</text><text x="40" y="150">4. Right route</text><text x="230" y="150">9. Right to refuse</text><text x="40" y="178">5. Right time</text><text x="230" y="178">10. Right education</text></g></svg>'
      } },
      { h: "The rights explained and the three checks", list: [
        "Right patient — verify identity with two identifiers (name and date of birth/ID band), not room number.",
        "Right drug, right dose, right route, right time — checked against a legible, complete order.",
        "Right documentation, right reason, right response, right to refuse and right education.",
        "The three label checks — read the medication label three times: when taking it from storage, when preparing/pouring it, and before returning/at the bedside before giving it."
      ] },
      { h: "Dosage calculation", p: "Accurate calculation prevents dangerous errors. The standard formula is: Dose to give = (Dose ordered / Dose available) x Quantity (or volume) available. Always convert to common units first, estimate the expected answer to detect gross errors, and have a second nurse independently check high-alert drugs, paediatric and weight-based doses.", figure: {
        caption: "The standard dosage-calculation formula.",
        svg: '<svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dosage formula"><rect x="15" y="30" width="450" height="55" rx="10" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="240" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Dose to give = (Ordered &#247; Available) &#215; Quantity</text><text x="240" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">e.g. (375 mg &#247; 250 mg) &#215; 5 mL = 7.5 mL</text></svg>'
      } },
      { h: "Worked examples", list: [
        "Tablet example: order 250 mg, stock 500 mg/tablet -> (250/500) x 1 = 0.5, i.e., half a tablet.",
        "Liquid example: order 375 mg, stock 250 mg in 5 mL -> (375/250) x 5 = 7.5 mL.",
        "Weight-based example: order 10 mg/kg for a 20 kg child -> 200 mg total dose.",
        "IV rate (mL/hour) = total volume (mL) / time (hours); drops/min = (volume x drop factor) / time in minutes."
      ] },
      { h: "High-alert drugs and error prevention", list: [
        "High-alert drugs (e.g., insulin, heparin/anticoagulants, opioids, concentrated potassium, chemotherapy) carry heightened risk and require independent double-checks.",
        "Perform hand hygiene; check the order for completeness, legality and appropriateness; question unclear or unsafe orders.",
        "Check the drug label three times and the expiry date; do not use unlabelled or altered medicines.",
        "Never leave medicines unattended; observe the patient actually take oral medicines.",
        "Do not chart in advance; document immediately after administration.",
        "Report and document errors and adverse reactions honestly and promptly; monitor for effect and side effects and educate the patient."
      ] },
      { h: "Legal and professional responsibilities", p: "The nurse is accountable for every medicine administered and must work within scope of practice and policy, apply the rights and checks, question and clarify doubtful orders (the nurse who administers a wrong drug shares liability even if the order was wrong), and maintain accurate records. Controlled/narcotic drugs require special storage, witnessed checking, counting and documentation." },
      { h: "Reducing medication errors — system safeguards", list: [
        "Use standardised, legible or electronic prescribing and barcode medication administration where available.",
        "Avoid dangerous abbreviations and 'trailing zeros' (write 5 mg, not 5.0 mg; write 0.5 mg, not .5 mg).",
        "Store look-alike/sound-alike drugs separately and use tall-man lettering.",
        "Minimise interruptions during medication preparation and rounds.",
        "Report near-misses and errors in a blame-free culture so systems can be improved."
      ] },
      { h: "Clinical relevance", p: "Before giving insulin (a high-alert drug) the nurse confirms two identifiers, checks the order and the three label reads, has a second nurse independently verify the dose and the drawn-up units, gives it by the correct SC route and time, watches for the response (blood glucose, hypoglycaemia signs), documents immediately and educates the patient — a single scenario integrating the rights, checks, calculation and error-prevention concepts of this topic." },
      { h: "Key terms", list: [
        "Pharmacokinetics — absorption, distribution, metabolism and excretion of a drug (ADME).",
        "Pharmacodynamics — the drug's mechanism and effect on the body.",
        "Parenteral — administration by injection, bypassing the GI tract.",
        "Adverse drug reaction — a harmful, unintended response to a drug.",
        "High-alert drug — a medicine with heightened risk of serious harm if used in error."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "List and explain the 'rights' of medication administration and the three label checks.",
      "Describe the routes of medication administration and the parenteral injection angles/sites.",
      "Differentiate pharmacokinetics from pharmacodynamics and list factors affecting drug response.",
      "Using the standard formula, calculate tablet, liquid and weight-based doses with worked examples.",
      "Discuss high-alert drugs and the nurse's legal and safety responsibilities in medication administration."
    ],
    assessment: [
      { type: "mcq", q: "An order reads 375 mg; the stock is 250 mg in 5 mL. The nurse gives:", options: ["7.5 mL", "5 mL", "2.5 mL", "10 mL"], answer: 0, rationale: "(375/250) x 5 mL = 7.5 mL using the standard dosage formula." },
      { type: "mcq", q: "A child weighs 20 kg and the order is 10 mg/kg. The total dose is:", options: ["100 mg", "150 mg", "200 mg", "300 mg"], answer: 2, rationale: "10 mg/kg x 20 kg = 200 mg." },
      { type: "mcq", q: "To verify the right patient, the nurse should use:", options: ["The room number", "Two identifiers such as name and date of birth", "The diagnosis", "The bed position"], answer: 1, rationale: "Two patient identifiers (not room/bed) confirm the right patient and prevent wrong-patient errors." },
      { type: "mcq", q: "Insulin is a high-alert drug, so the safest practice before giving it is to:", options: ["Give it quickly alone", "Have a second nurse independently double-check", "Skip the label check", "Leave it at the bedside"], answer: 1, rationale: "High-alert drugs require an independent double-check to prevent serious harm." },
      { type: "mcq", q: "An intramuscular injection into the deltoid is given at an angle of:", options: ["15 degrees", "45 degrees", "90 degrees", "10 degrees"], answer: 2, rationale: "IM injections are given at 90 degrees into the muscle; ID is ~15 and SC ~45 degrees." },
      { type: "mcq", q: "A patient with severe kidney impairment is at higher risk of drug toxicity mainly because of reduced:", options: ["Absorption", "Encoding", "Excretion", "Ventilation"], answer: 2, rationale: "Impaired renal excretion allows drugs/metabolites to accumulate to toxic levels." },
      { type: "mcq", q: "The route giving the most rapid and complete drug effect is:", options: ["Oral", "Topical", "Intravenous", "Rectal"], answer: 2, rationale: "IV delivers the drug directly into the bloodstream for the fastest, most complete effect." },
      { type: "mcq", q: "The drug label should be read:", options: ["Once", "Three times (storage, preparation, before giving)", "Never", "Only by pharmacy"], answer: 1, rationale: "Three label checks at key points reduce medication error." },
      { type: "mcq", q: "A nurse notices an ordered dose is ten times the usual. The correct action is to:", options: ["Give it as written", "Withhold and clarify the order with the prescriber", "Halve it herself and give", "Chart it as given"], answer: 1, rationale: "The nurse is accountable and must question and clarify unsafe orders before acting; she cannot simply give or alter it." },
      { type: "mcq", q: "A patient competently declines a medication. The nurse should:", options: ["Force it", "Respect the right to refuse and document/report it", "Hide it in food", "Ignore the refusal"], answer: 1, rationale: "The right to refuse must be respected, documented and communicated to the prescriber." },
      { type: "fill", q: "Administration of a drug by injection is called the ____ route.", accept: ["parenteral"], rationale: "Parenteral routes bypass the GI tract via injection." },
      { type: "fill", q: "The processes of absorption, distribution, metabolism and excretion are together called ____.", accept: ["pharmacokinetics"], rationale: "Pharmacokinetics describes what the body does to a drug." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "fon-18-wound-pain-firstaid",
    unit: "Unit 5 · Medication, Wounds & Pain",
    title: "Wound Care & Pressure-Injury Prevention, Pain Management, First Aid & Basic Life Support",
    readMinutes: 29,
    summary: "Wound classification and the phases of healing; factors affecting healing and complications; pressure-injury staging, risk assessment and prevention; the nature, types and management of pain (including the analgesic ladder); first-aid principles and bandaging; and basic life support for the collapsed adult.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Wounds and classification", p: "A wound is a break in the continuity of body tissue. Wounds are classified by cause (surgical/intentional or traumatic/unintentional), by whether the skin is broken (open or closed), by depth (superficial, partial-thickness, full-thickness), and by contamination (clean, clean-contaminated, contaminated, infected/dirty). Accurate classification guides cleansing, dressing choice and infection-risk management." },
      { h: "Types of wound healing", list: [
        "Primary intention — clean wound with approximated edges (e.g., a sutured surgical incision); minimal tissue loss, fast healing, fine scar.",
        "Secondary intention — an open wound with tissue loss healing from the base by granulation (e.g., a pressure injury); slower, larger scar, higher infection risk.",
        "Tertiary intention (delayed primary closure) — a wound left open initially (e.g., for infection/oedema) then closed later."
      ] },
      { h: "Phases of wound healing", figure: {
        caption: "The overlapping phases of wound healing.",
        svg: '<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phases of wound healing"><defs><marker id="whArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="8" y="45" width="110" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="63" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Haemostasis</text><text x="63" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">clot</text><rect x="130" y="45" width="120" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="190" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Inflammatory</text><text x="190" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">cleanse</text><rect x="262" y="45" width="120" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="322" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Proliferative</text><text x="322" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">rebuild</text><rect x="394" y="45" width="118" height="46" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="453" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Maturation</text><text x="453" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">remodel</text><line x1="118" y1="68" x2="126" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#whArr)"/><line x1="250" y1="68" x2="258" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#whArr)"/><line x1="382" y1="68" x2="390" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#whArr)"/></svg>'
      } },
      { h: "The four phases in detail", list: [
        "Haemostasis — immediate; vasoconstriction and clot formation stop bleeding.",
        "Inflammatory phase (about days 1-4) — cleansing; increased blood flow brings neutrophils and macrophages to remove debris and microorganisms; redness, warmth, swelling and pain occur.",
        "Proliferative phase (about days 4-21) — rebuilding; fibroblasts lay collagen, granulation tissue and new vessels form, and the wound contracts and epithelialises.",
        "Maturation (remodelling) phase (weeks to over a year) — collagen is reorganised and the scar gains strength (never regaining full original strength)."
      ] },
      { h: "Factors affecting wound healing", list: [
        "Nutrition — protein, vitamin C, vitamin A and zinc are essential for collagen and tissue repair.",
        "Oxygenation and perfusion — poor circulation, anaemia and smoking impair healing.",
        "Age — healing slows with age.",
        "Chronic disease — diabetes, immunosuppression and obesity delay healing.",
        "Infection, wound moisture balance and mechanical stress also influence healing."
      ] },
      { h: "Wound care, dressings and complications", list: [
        "Assess wound size, depth, bed appearance, exudate amount/type, edges and signs of infection.",
        "Use aseptic technique; clean from clean to dirty (least to most contaminated) with normal saline.",
        "Select a dressing that maintains a moist wound environment, protects, absorbs exudate and allows atraumatic removal.",
        "Support healing through nutrition, hydration, oxygenation and control of underlying conditions (e.g., diabetes).",
        "Recognise complications — infection, haemorrhage, dehiscence (wound reopening) and evisceration (protrusion of viscera — a surgical emergency: cover with sterile saline-soaked gauze and summon help)."
      ] },
      { h: "Pressure injuries — risk and staging", p: "A pressure injury (pressure ulcer/bedsore) is localised damage to skin and underlying tissue, usually over a bony prominence, caused by sustained pressure, shear and friction that obstruct blood flow and cause ischaemia. They are largely preventable and are a key nurse-sensitive quality indicator.", figure: {
        caption: "The four stages of pressure injury (plus unstageable and deep-tissue injury).",
        svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pressure injury staging"><rect x="10" y="10" width="480" height="140" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="250" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Pressure Injury Staging</text><g font-family="sans-serif" font-size="10.5" fill="#15803D"><text x="30" y="62">Stage 1: non-blanchable erythema, intact skin</text><text x="30" y="86">Stage 2: partial-thickness loss (blister/abrasion)</text><text x="30" y="110">Stage 3: full-thickness into subcutaneous fat</text><text x="30" y="134">Stage 4: full-thickness exposing muscle/bone</text></g></svg>'
      } },
      { h: "Pressure-injury risk and sites", list: [
        "Risk factors — immobility, poor nutrition, moisture/incontinence, reduced sensation, friction/shear, advanced age and poor perfusion; assessed with validated tools such as the Braden scale.",
        "Staging summary — Stage 1: non-blanchable erythema of intact skin; Stage 2: partial-thickness loss; Stage 3: full-thickness into fat; Stage 4: exposing muscle/bone; plus unstageable (base obscured) and deep-tissue injury.",
        "Common sites — sacrum, heels, ischial tuberosities, greater trochanters, elbows and occiput."
      ] },
      { h: "Pressure-injury prevention (bundle)", list: [
        "Structured risk assessment on admission and regularly (e.g., Braden).",
        "Regular repositioning (individualised, often ~2-hourly) and pressure-redistributing surfaces.",
        "Keep skin clean and dry; manage moisture and incontinence; avoid friction and shear.",
        "Optimise nutrition and hydration; inspect skin, especially bony prominences, at each opportunity.",
        "Do not massage reddened bony prominences (worsens damage); offload instead."
      ] },
      { h: "Pain and its assessment", p: "Pain is an unpleasant sensory and emotional experience associated with actual or potential tissue damage, and is 'whatever the patient says it is, existing whenever they say it does'. It may be acute (recent, protective, resolves with healing) or chronic (persistent beyond expected healing), and nociceptive (tissue injury) or neuropathic (nerve damage). Assess systematically (e.g., OLDCART/PQRST) using a validated 0-10 or faces scale, and reassess after every intervention." },
      { h: "Pain management and the analgesic ladder", figure: {
        caption: "The WHO three-step analgesic ladder.",
        svg: '<svg viewBox="0 0 460 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WHO analgesic ladder"><rect x="30" y="120" width="130" height="40" rx="6" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="95" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Step 1</text><text x="95" y="152" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">non-opioid</text><rect x="165" y="80" width="130" height="40" rx="6" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="230" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Step 2</text><text x="230" y="112" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">mild opioid</text><rect x="300" y="40" width="130" height="40" rx="6" fill="#15803D" stroke="#0F4C3A" stroke-width="2"/><text x="365" y="58" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">Step 3</text><text x="365" y="72" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F0FDF4">strong opioid</text><text x="230" y="26" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">+ adjuvants at any step</text></svg>'
      } },
      { h: "Pain management explained", list: [
        "Pharmacological — follow the WHO analgesic ladder: step 1 non-opioids (paracetamol, NSAIDs); step 2 mild opioids; step 3 strong opioids, with adjuvants at any step; give regularly for constant pain and monitor for effect and side effects (sedation, respiratory depression, constipation).",
        "Non-pharmacological — positioning, heat/cold, relaxation, distraction, massage, TENS and therapeutic presence.",
        "Believe the patient's report, individualise the plan, involve the patient, and evaluate effectiveness by reassessing the pain score."
      ] },
      { h: "First aid — purpose and principles", p: "First aid is the immediate, temporary care given to an injured or suddenly ill person before professional help arrives. Its aims are to preserve life, prevent the condition worsening, and promote recovery.", list: [
        "Ensure scene safety for rescuer and casualty first; call for help.",
        "Assess responsiveness and the ABCs (airway, breathing, circulation).",
        "Control severe bleeding with direct pressure; treat for shock; keep the casualty warm and reassured.",
        "Do not move a suspected spinal injury unnecessarily; do only what is needed and hand over to professionals with a clear report."
      ] },
      { h: "Bandaging", list: [
        "Purposes — to hold dressings in place, support and immobilise a part, apply pressure to control bleeding, and reduce or prevent swelling.",
        "Types — roller, triangular and tubular bandages; common turns include circular, spiral, spiral-reverse, figure-of-eight and recurrent.",
        "Rules/principles — apply firmly but not too tightly (check circulation distal to the bandage), work from distal to proximal and inner to outer, keep it clean and comfortable, secure the end safely, and leave fingertips/toes visible to monitor colour, warmth, swelling and sensation."
      ] },
      { h: "Basic life support (BLS)", p: "BLS maintains circulation and oxygenation in cardiac or respiratory arrest until advanced help and defibrillation arrive. The sequence checks safety and responsiveness, calls for help, then delivers high-quality compressions with airway and breathing support.", figure: {
        caption: "Basic life support sequence for the collapsed adult (check-call-compress).",
        svg: '<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basic life support sequence"><defs><marker id="blArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="45" width="110" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="65" y="65" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Check safety</text><text x="65" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">&amp; response</text><rect x="140" y="45" width="105" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="192" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Call for help</text><rect x="265" y="45" width="115" height="46" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="322" y="65" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Compressions</text><text x="322" y="81" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">30 : 2</text><rect x="400" y="45" width="110" height="46" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="455" y="65" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Airway &amp;</text><text x="455" y="81" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">breathing</text><line x1="120" y1="68" x2="136" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#blArr)"/><line x1="245" y1="68" x2="261" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#blArr)"/><line x1="380" y1="68" x2="396" y2="68" stroke="#0F4C3A" stroke-width="2" marker-end="url(#blArr)"/></svg>'
      } },
      { h: "BLS key points", list: [
        "Give high-quality chest compressions — centre of the chest (lower half of the sternum), depth about 5-6 cm, rate 100-120/min, allowing full recoil and minimising interruptions.",
        "Adult compression-to-ventilation ratio is 30:2 for both single and two-rescuer BLS.",
        "Open the airway with head-tilt/chin-lift (jaw thrust if spinal injury suspected) and give rescue breaths if trained and equipped.",
        "Attach and use an automated external defibrillator (AED) as soon as available; follow its prompts and continue CPR until help arrives or signs of life return."
      ] },
      { h: "Clinical relevance", p: "These topics interlock in a bed-bound patient: the pressure-injury bundle (repositioning, Braden assessment, offloading, nutrition) prevents a Stage 1 injury progressing to a chronic Stage 4 wound healing by secondary intention; systematic pain assessment and the analgesic ladder keep the patient comfortable and mobile; and if the patient collapses, the nurse initiates BLS (check-call-compress, 30:2, AED) — a continuum from prevention to emergency response." },
      { h: "Key terms", list: [
        "Dehiscence — partial or complete separation of wound edges.",
        "Evisceration — protrusion of internal organs through a wound (surgical emergency).",
        "Pressure injury — tissue damage over a bony prominence from sustained pressure, shear and friction.",
        "First aid — immediate temporary care before professional help arrives.",
        "BLS — basic life support to maintain circulation and breathing in arrest (adult ratio 30:2)."
      ] }
    ],
    references: REF_FON,
    examQuestions: [
      "Classify wounds and describe the four phases of wound healing and factors that affect it.",
      "Explain the causes, risk factors, staging and prevention of pressure injuries.",
      "Describe the systematic assessment and management of pain, including the analgesic ladder.",
      "State the purposes and principles of first aid and of bandaging.",
      "Outline the sequence and key points of basic life support for a collapsed adult."
    ],
    assessment: [
      { type: "mcq", q: "An open pressure injury with tissue loss that heals from the base by granulation heals by:", options: ["Secondary intention", "Primary intention", "Tertiary intention", "No healing"], answer: 0, rationale: "Open wounds with tissue loss heal from the base by granulation — secondary intention; approximated clean wounds heal by primary intention." },
      { type: "mcq", q: "A post-op patient's wound edges separate and a loop of bowel protrudes. This is ____ and the nurse should:", options: ["Dehiscence; leave it open", "Evisceration; cover with sterile saline-soaked gauze and call for help", "Granulation; massage it", "Normal; ignore it"], answer: 1, rationale: "Evisceration (protruding viscera) is a surgical emergency; cover with sterile moist gauze and summon urgent help." },
      { type: "mcq", q: "Non-blanchable erythema of intact skin over the sacrum is a pressure injury of:", options: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"], answer: 0, rationale: "Stage 1 is non-blanchable erythema of intact skin; loss of skin begins at Stage 2." },
      { type: "mcq", q: "A tool used to assess pressure-injury risk is the:", options: ["Glasgow scale", "Braden scale", "Apgar score", "Morse scale"], answer: 1, rationale: "The Braden scale assesses pressure-injury risk; Glasgow rates consciousness, Apgar the newborn and Morse fall risk." },
      { type: "mcq", q: "A patient with chronic pain reports steady moderate pain despite regular paracetamol. Per the analgesic ladder the next appropriate step is to add a:", options: ["Placebo", "Mild opioid (step 2)", "Nothing further", "Only heat therapy"], answer: 1, rationale: "When a step-1 non-opioid is insufficient, the ladder moves to a step-2 mild opioid (with adjuvants as needed)." },
      { type: "mcq", q: "The most reliable basis for assessing a conscious patient's pain is:", options: ["The nurse's observation only", "The patient's self-report using a validated scale", "The diagnosis", "The vital signs alone"], answer: 1, rationale: "Pain is subjective; the patient's self-report is the gold standard, supplemented by observation." },
      { type: "mcq", q: "In adult BLS, high-quality chest compressions are given at a rate of:", options: ["60-80/min", "100-120/min", "140-160/min", "40-60/min"], answer: 1, rationale: "The recommended compression rate is 100-120 per minute at a depth of 5-6 cm." },
      { type: "mcq", q: "The adult compression-to-ventilation ratio in BLS is:", options: ["15:2", "5:1", "30:2", "10:2"], answer: 2, rationale: "The standard adult ratio is 30 compressions to 2 breaths for single and two-rescuer BLS." },
      { type: "mcq", q: "A key nutrient specifically required for collagen synthesis in wound healing is:", options: ["Vitamin C", "Sodium", "Fibre", "Water only"], answer: 0, rationale: "Vitamin C (with protein and zinc) is essential for collagen synthesis and tissue repair." },
      { type: "mcq", q: "The FIRST priority when reaching a collapsed person is to:", options: ["Start compressions immediately", "Ensure scene safety and check response", "Give rescue breaths", "Find an AED first"], answer: 1, rationale: "Scene safety and checking responsiveness precede all other BLS steps to protect rescuer and casualty." },
      { type: "fill", q: "A clean wound with approximated edges heals by ____ intention.", accept: ["primary", "first"], rationale: "Primary intention healing occurs in clean, approximated wounds." },
      { type: "fill", q: "The immediate temporary care given before professional help arrives is called ____.", accept: ["first aid"], rationale: "First aid is immediate care to preserve life and prevent worsening." }
    ]
  }
];
















