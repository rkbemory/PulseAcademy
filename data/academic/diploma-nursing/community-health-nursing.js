/* ============================================================
   Diploma in Nursing · D234 Community Health Nursing
   — 18 topics. Aligned to the BNMC Diploma in Nursing (Year 2)
   syllabus: concepts of health & community health nursing, primary
   health care, the Bangladesh health system, epidemiology & disease
   control, immunisation/EPI, family & MCH, family planning, school &
   occupational health, environmental health, demography & vital
   statistics, health education, national health programmes, the home
   visit & nursing process, and disaster management.
   Grounded in standard texts and WHO standards:
     • Park K. Park's Textbook of Preventive and Social Medicine. Bhanot Publishers.
     • Basavanthappa BT. Essentials of Community Health Nursing. Jaypee Brothers Medical Publishers.
     • Clement I. Basic Concepts of Community Health Nursing. Jaypee Brothers Medical Publishers.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_CHN = [
  "Park K. Park's Textbook of Preventive and Social Medicine. Bhanot Publishers.",
  "Basavanthappa BT. Essentials of Community Health Nursing. Jaypee Brothers Medical Publishers.",
  "Clement I. Basic Concepts of Community Health Nursing. Jaypee Brothers Medical Publishers."
];

window.Academic.topics["diploma-nursing/community-health-nursing"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "chn-01-health-disease",
    unit: "Unit 1 · Concepts of Community Health",
    title: "Concept of Health & Disease",
    readMinutes: 15,
    summary: "The WHO definition and dimensions of health, the health–illness continuum, determinants of health, the agent–host–environment triad, the natural history of disease, and the three levels of prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of health", p: "The World Health Organization (WHO, 1948) defines health as 'a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.' This definition is important because it is positive (well-being, not just no disease) and holistic. Its main criticism is that 'complete' well-being is an ideal that few people ever reach, so health is better understood as a relative state that varies between people and over time." },
      { h: "Dimensions of health", p: "Health is multidimensional. The main dimensions interact and influence one another, so a community health nurse must consider the whole person, not one part alone.", list: [
        "Physical — the body works well and is free from disease.",
        "Mental — the ability to think clearly, cope with stress and emotions.",
        "Social — good relationships and the ability to live and work with others.",
        "Spiritual — a sense of meaning, purpose and inner peace.",
        "Emotional — recognising and managing one's feelings.",
        "Others described include vocational, environmental and political dimensions."
      ] },
      { h: "Health–illness continuum", p: "Health and illness are not two separate boxes but the two ends of a continuous line. A person moves along this line — from optimum health, through better health and normal health, towards poor health and finally death. Health is therefore dynamic and changes throughout life. The aim of community health work is to move people towards the positive (health) end." },
      { h: "Spectrum of health", p: "Closely related to the continuum, the spectrum of health describes the gradation: positive health → better health → freedom from sickness → unrecognised (subclinical) sickness → mild sickness → severe sickness → death. Many people in a community have hidden, subclinical disease — a key reason for screening." },
      { h: "Determinants of health", p: "Determinants are the factors that decide a person's or a community's level of health.", list: [
        "Biological — age, sex, genes and inherited factors.",
        "Behavioural / lifestyle — diet, exercise, smoking, alcohol, hygiene.",
        "Environmental — safe water, sanitation, housing, air, climate.",
        "Socio-economic — income, education, occupation, food security.",
        "Health services — availability, access and quality of care.",
        "Other — ageing of the population, gender, and social support."
      ] },
      { h: "Agent–host–environment triad", p: "Disease results from an imbalance between three factors: the agent (the cause — a microbe, chemical, deficiency or physical force), the host (the person and their susceptibility), and the environment (the surroundings that bring agent and host together). Disease occurs when the agent overcomes the host's defences, often because the environment favours it. Prevention works by acting on any one of the three.", figure: {
        caption: "The epidemiological triad: disease arises from interaction of agent, host and environment.",
        svg: '<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Epidemiological triad of agent, host and environment forming a triangle."><polygon points="210,30 60,210 360,210" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2.5"/><circle cx="210" cy="30" r="30" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="210" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">AGENT</text><circle cx="60" cy="210" r="30" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="60" y="215" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">HOST</text><circle cx="360" cy="210" r="34" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="360" y="207" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">ENVIRON-</text><text x="360" y="220" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">MENT</text><text x="210" y="150" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">balance = health</text><text x="210" y="168" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">imbalance = disease</text></svg>'
      } },
      { h: "Natural history of disease", p: "Every disease, left alone, passes through stages — its natural history. In the pre-pathogenesis phase the agent, host and environment interact but the person is still well. In the pathogenesis phase the agent enters the host: there is a subclinical stage (changes begin, no symptoms yet), then clinical disease (signs and symptoms appear), and finally an outcome — recovery, disability, chronic state or death. Understanding these stages tells us where each level of prevention acts." },
      { h: "Levels of prevention", p: "Prevention is matched to the stage of disease.", list: [
        "Primary prevention — acts before disease begins (health promotion, immunisation, safe water, health education). It removes risk factors and keeps people healthy.",
        "Secondary prevention — acts in early disease (screening, early diagnosis and prompt treatment) to cure or stop progression.",
        "Tertiary prevention — acts in established disease (disability limitation and rehabilitation) to reduce complications and restore function.",
        "Primordial prevention — a newer level: stops risk factors from ever appearing in a population (e.g. preventing the habit of smoking from starting)."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define health according to WHO. Discuss the dimensions of health.",
      "Explain the agent–host–environment triad with examples.",
      "Describe the natural history of disease with a suitable diagram.",
      "Explain the three levels of prevention with one example of each.",
      "What are the determinants of health? How do they affect a community's health?"
    ],
    assessment: [
      { type: "mcq", q: "The WHO definition describes health as a state of complete physical, mental and ____ well-being.", options: ["financial", "social", "political", "spiritual"], answer: 1, rationale: "The 1948 WHO definition names physical, mental and social well-being." },
      { type: "mcq", q: "Immunisation of children is an example of which level of prevention?", options: ["Rehabilitation", "Secondary prevention", "Tertiary prevention", "Primary prevention"], answer: 3, rationale: "Immunisation acts before disease occurs, so it is primary prevention." },
      { type: "mcq", q: "Screening to detect disease early, before symptoms appear, is:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Primordial prevention"], answer: 1, rationale: "Early detection and prompt treatment is secondary prevention." },
      { type: "mcq", q: "In the epidemiological triad, a bacterium that causes disease is the:", options: ["Host", "Environment", "Agent", "Reservoir"], answer: 2, rationale: "The agent is the cause of disease; the host is the person and the environment is the surroundings." },
      { type: "mcq", q: "Rehabilitation of a patient after a stroke is an example of:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Health promotion"], answer: 2, rationale: "Rehabilitation reduces disability in established disease — tertiary prevention." },
      { type: "mcq", q: "The stage of disease in which changes have begun but there are no symptoms yet is called:", options: ["Clinical stage", "Subclinical stage", "Recovery stage", "Pre-pathogenesis stage"], answer: 1, rationale: "The subclinical (pre-symptomatic) stage is part of pathogenesis before clinical signs appear." },
      { type: "mcq", q: "Which is NOT one of the recognised dimensions of health?", options: ["Physical", "Mental", "Mechanical", "Social"], answer: 2, rationale: "Physical, mental, social and spiritual are dimensions; 'mechanical' is not." },
      { type: "mcq", q: "Health and illness are best described as:", options: ["Two completely separate states", "The two ends of a continuum", "The same thing", "Unrelated to lifestyle"], answer: 1, rationale: "The health–illness continuum shows a continuous range from optimum health to death." },
      { type: "mcq", q: "Age, sex and heredity are which kind of determinant of health?", options: ["Behavioural", "Environmental", "Economic", "Biological"], answer: 3, rationale: "Age, sex and genes are biological determinants." },
      { type: "mcq", q: "Preventing risk factors from ever appearing in a population (e.g. stopping smoking from starting) is:", options: ["Primary prevention", "Primordial prevention", "Secondary prevention", "Tertiary prevention"], answer: 1, rationale: "Primordial prevention removes the underlying conditions that lead to risk factors." }
      , { type: "fill", q: "Health promotion and immunisation are examples of ____ prevention.", accept: ["primary"], rationale: "These act before disease begins." }
      , { type: "fill", q: "The three components of the epidemiological triad are agent, host and ____.", accept: ["environment"], rationale: "Agent, host and environment together determine disease." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "chn-02-chn-concept",
    unit: "Unit 1 · Concepts of Community Health",
    title: "Community Health Nursing — Concept, Scope & Roles",
    readMinutes: 15,
    summary: "Definitions of community, community health and community health nursing; principles, scope and settings of practice; and the many roles and functions of the community health nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a community?", p: "A community is a group of people who live in a defined geographical area, share common values, interests and institutions, and interact with one another. In community health we are interested both in the place (a village, ward or slum) and in the people as a group (the aggregate) — their shared health needs and resources." },
      { h: "Community health", p: "Community health is the art and science of maintaining, protecting and improving the health of a whole community through organised, collective effort. The focus is on the population and on prevention, not only on treating sick individuals one at a time." },
      { h: "Community health nursing", p: "Community health nursing is a field of nursing that combines nursing skills with public-health principles to promote and protect the health of people where they live, work, study and play — in homes, schools, workplaces and the community. The unit of service is the individual, the family and the community. Care is mostly preventive and promotive, delivered close to the people." },
      { h: "Distinguishing features", list: [
        "Care is given to people in their own setting, not mainly in hospital.",
        "The family and community — not just the individual — are the unit of care.",
        "Emphasis is on health promotion and prevention rather than cure.",
        "It uses the resources of the community and encourages people to take part.",
        "The nurse often works with limited supervision and must be self-directed."
      ] },
      { h: "Principles of community health nursing", list: [
        "Based on the recognised needs of individuals, families and communities.",
        "Care is family-centred and considers the whole family.",
        "Available and accessible to all, without discrimination.",
        "Promotes health and prevents disease as a priority.",
        "Encourages community participation and self-reliance.",
        "Uses available resources wisely.",
        "Involves teamwork and continuous, periodic evaluation."
      ] },
      { h: "Scope and settings", p: "Community health nursing is practised in many settings: homes (home visits), sub-centres and health/family-welfare centres, EPI and well-baby clinics, schools, factories and workplaces, maternal and child health clinics, and the community at large. Its scope spans the whole life cycle — from antenatal care, the newborn and child, the school child, adolescents and adults, to the elderly — and covers promotive, preventive, curative and rehabilitative services." },
      { h: "Roles of the community health nurse", p: "The community health nurse plays many roles at the same time.", list: [
        "Care provider — gives nursing care to individuals and families at home and in clinics.",
        "Educator / health teacher — teaches health to people and groups.",
        "Counsellor — advises and supports families in health decisions.",
        "Manager / organiser — plans, organises and evaluates community health activities.",
        "Advocate — speaks for the people's health needs and rights.",
        "Researcher — identifies problems and collects community data.",
        "Change agent — helps the community adopt healthier behaviour.",
        "Coordinator / link — connects the family with health services and other agencies."
      ] },
      { h: "Functions of the community health nurse", list: [
        "Conducting home visits and family health care.",
        "Maternal and child health care, including antenatal and postnatal care.",
        "Immunisation and control of communicable diseases.",
        "Health education and family planning services.",
        "Care of the sick, elderly and disabled in the community.",
        "Keeping records, reports and community health statistics.",
        "Working with community leaders, volunteers and other health workers."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define community health nursing. Explain its principles.",
      "Describe the roles of the community health nurse with examples.",
      "List the settings in which community health nursing is practised.",
      "Differentiate community health nursing from hospital nursing.",
      "Explain the functions of a community health nurse in a rural community."
    ],
    assessment: [
      { type: "mcq", q: "The unit of service in community health nursing is the individual, the family and the:", options: ["hospital", "community", "doctor", "ministry"], answer: 1, rationale: "Community health nursing serves the individual, family and community as a whole." },
      { type: "mcq", q: "The main emphasis of community health nursing is on:", options: ["Curative care in hospital", "Surgery", "Health promotion and prevention", "Laboratory testing"], answer: 2, rationale: "Community health nursing focuses mainly on promotion of health and prevention of disease." },
      { type: "mcq", q: "When a community health nurse teaches a mother about breastfeeding, she is acting as a:", options: ["Researcher", "Surgeon", "Pharmacist", "Educator"], answer: 3, rationale: "Teaching health is the educator role." },
      { type: "mcq", q: "Which is a distinguishing feature of community health nursing?", options: ["Care is given mainly in the operating theatre", "The family is the unit of care", "It ignores prevention", "It is given only to children"], answer: 1, rationale: "The family (and community) is the unit of care in community health nursing." },
      { type: "mcq", q: "A group of people living in a defined area and sharing common interests is a:", options: ["Family", "Community", "Hospital", "Committee"], answer: 1, rationale: "That is the definition of a community." },
      { type: "mcq", q: "Speaking up for the health needs and rights of the people is which role?", options: ["Advocate", "Counsellor", "Manager", "Care provider"], answer: 0, rationale: "Advocacy means representing and defending the people's interests." },
      { type: "mcq", q: "Community health combines nursing with the principles of:", options: ["Engineering", "Public health", "Law", "Accounting"], answer: 1, rationale: "Community health nursing blends nursing skills with public-health principles." },
      { type: "mcq", q: "Which of the following is a setting for community health nursing practice?", options: ["Schools and workplaces", "Only tertiary hospitals", "Only operating theatres", "Only laboratories"], answer: 0, rationale: "Homes, schools, workplaces, clinics and the community are all CHN settings." },
      { type: "mcq", q: "Helping a community adopt healthier behaviour makes the nurse a:", options: ["Change agent", "Record keeper", "Phlebotomist", "Radiographer"], answer: 0, rationale: "Promoting healthy change is the change-agent role." },
      { type: "mcq", q: "A key principle of community health nursing is that services should be:", options: ["For the rich only", "Available and accessible to all", "Given only in emergencies", "Limited to one disease"], answer: 1, rationale: "Care must be available and accessible to all without discrimination." }
      , { type: "fill", q: "Care in community health nursing is centred on the ____ rather than the individual alone.", accept: ["family", "family and community"], rationale: "Community health nursing is family-centred." }
      , { type: "fill", q: "Connecting families with health services and other agencies is the ____ role of the nurse.", accept: ["coordinator", "link", "coordinator/link"], rationale: "Coordinating and linking services is a core CHN role." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "chn-03-phc",
    unit: "Unit 1 · Concepts of Community Health",
    title: "Primary Health Care (Alma-Ata, Elements, Principles)",
    readMinutes: 14,
    summary: "The Alma-Ata Declaration and the goal of 'Health for All', the definition of primary health care, its eight essential elements, four guiding principles, and the levels of health care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Background — Alma-Ata 1978", p: "In 1978 the International Conference on Primary Health Care was held at Alma-Ata (now Almaty, Kazakhstan), organised by WHO and UNICEF. It produced the Alma-Ata Declaration, which set the goal of 'Health for All by the year 2000' and named primary health care (PHC) as the key to reaching that goal. It declared health a fundamental human right." },
      { h: "Definition of primary health care", p: "Primary health care is essential health care made universally accessible to individuals and families in the community, by means acceptable to them, through their full participation, and at a cost the community and country can afford. It is the first level of contact between people and the health system and brings health care as close as possible to where people live and work." },
      { h: "The eight essential elements (ELEMENTS)", p: "The Alma-Ata Declaration listed eight essential components of PHC. A common way to remember them is the word ELEMENTS.", list: [
        "E — Education about health problems and how to prevent and control them.",
        "L — Local endemic disease prevention and control.",
        "E — Expanded Programme on Immunization (immunisation against major infectious diseases).",
        "M — Maternal and child health, including family planning.",
        "E — Essential drugs provision.",
        "N — Nutrition (promotion of food supply and proper nutrition).",
        "T — Treatment of common diseases and injuries.",
        "S — Safe water and sanitation (and basic sanitation)."
      ] },
      { h: "Principles of primary health care", p: "PHC rests on four guiding principles.", list: [
        "Equitable distribution — health services shared fairly, reaching the poor and rural people, not only towns.",
        "Community participation — people take an active part in planning and running their own health services (e.g. village health workers).",
        "Inter-sectoral coordination — health works together with other sectors such as agriculture, education, water, housing and industry.",
        "Appropriate technology — methods and equipment that are scientifically sound, acceptable, affordable and suited to local conditions."
      ], figure: {
        caption: "The four principles of primary health care.",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four boxes showing the principles of primary health care."><rect x="15" y="20" width="210" height="70" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="120" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Equitable distribution</text><text x="120" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">fair access for all</text><rect x="255" y="20" width="210" height="70" rx="10" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="360" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Community participation</text><text x="360" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">people take part</text><rect x="15" y="110" width="210" height="70" rx="10" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="120" y="140" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Inter-sectoral</text><text x="120" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">work with other sectors</text><rect x="255" y="110" width="210" height="70" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="360" y="140" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Appropriate technology</text><text x="360" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">suited to local needs</text></svg>'
      } },
      { h: "Levels of health care", p: "Health care is organised in three levels that refer cases upward.", list: [
        "Primary level — first contact (sub-centres, health/family-welfare centres, community clinics); handles common problems and prevention.",
        "Secondary level — district-level hospitals with specialists; receives referrals from the primary level.",
        "Tertiary level — large, specialised teaching and referral hospitals with advanced care."
      ] },
      { h: "Importance of PHC for nursing", p: "Community health nurses are central to PHC because they deliver most of its elements — immunisation, MCH, health education, control of local diseases and essential care — and because they live and work among the people, building the participation and trust that PHC depends on." },
      { h: "PHC and 'Health for All'", p: "Although the original target year (2000) passed without full success everywhere, the PHC approach remains the foundation of modern health systems and was reaffirmed in later global declarations. It continues to guide Bangladesh's community-based health services and the work of the community health nurse." }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define primary health care. Discuss the Alma-Ata Declaration.",
      "Enumerate and explain the eight essential elements of primary health care.",
      "Describe the four principles of primary health care.",
      "Explain the three levels of health care with examples.",
      "Discuss the role of the community health nurse in primary health care."
    ],
    assessment: [
      { type: "mcq", q: "The Alma-Ata Declaration on primary health care was made in the year:", options: ["1948", "1978", "1986", "2000"], answer: 1, rationale: "The International Conference on Primary Health Care at Alma-Ata was held in 1978." },
      { type: "mcq", q: "The goal set by the Alma-Ata Declaration was:", options: ["Polio eradication", "Universal hospitals", "Health for All by 2000", "Free surgery for all"], answer: 2, rationale: "Alma-Ata set the goal of 'Health for All by the year 2000'." },
      { type: "mcq", q: "Which of the following is one of the four principles of primary health care?", options: ["Community participation", "Privatisation", "Centralisation in cities", "Profit making"], answer: 0, rationale: "Community participation is a core principle of PHC." },
      { type: "mcq", q: "'Provision of essential drugs' is best described as:", options: ["A principle of PHC", "An essential element of PHC", "A level of care", "A type of hospital"], answer: 1, rationale: "Essential drugs are one of the eight essential elements of PHC." },
      { type: "mcq", q: "Sharing health services fairly so that rural and poor people are reached is the principle of:", options: ["Appropriate technology", "Equitable distribution", "Inter-sectoral coordination", "Privatisation"], answer: 1, rationale: "Equitable distribution means fair access for all." },
      { type: "mcq", q: "A district hospital with specialists that receives referrals is which level of care?", options: ["Primary", "Secondary", "Tertiary", "Quaternary"], answer: 1, rationale: "The secondary level is the district hospital that receives referrals from primary level." },
      { type: "mcq", q: "Working together with agriculture, education and water sectors illustrates:", options: ["Inter-sectoral coordination", "Equitable distribution", "Appropriate technology", "Community participation"], answer: 0, rationale: "Co-operation across sectors is inter-sectoral coordination." },
      { type: "mcq", q: "Which is an essential element of primary health care?", options: ["Maternal and child health care", "Organ transplantation", "Cosmetic surgery", "Stock market trading"], answer: 0, rationale: "MCH including family planning is one of the eight essential elements." },
      { type: "mcq", q: "Methods and equipment that are scientifically sound and affordable for the community describe:", options: ["Appropriate technology", "Tertiary care", "Privatisation", "Specialisation"], answer: 0, rationale: "Appropriate technology is acceptable, affordable and locally suitable." },
      { type: "mcq", q: "Primary health care is the ____ level of contact between people and the health system.", options: ["last", "first", "highest", "specialist"], answer: 1, rationale: "PHC is the first point of contact with the health system." }
      , { type: "fill", q: "The two organisations that jointly organised the Alma-Ata conference were WHO and ____.", accept: ["UNICEF"], rationale: "WHO and UNICEF jointly convened Alma-Ata in 1978." }
      , { type: "fill", q: "The PHC principle that people should take an active part in their own health services is called community ____.", accept: ["participation", "involvement"], rationale: "Community participation is a guiding principle of PHC." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "chn-04-bd-health-system",
    unit: "Unit 1 · Concepts of Community Health",
    title: "Health Care Delivery System of Bangladesh",
    readMinutes: 15,
    summary: "The structure of Bangladesh's health system from national to community level, the roles of government, NGO and private sectors, the community-based service points, and the categories of health workforce.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Bangladesh provides health care through three sectors that work side by side: the government (public) sector, the non-governmental organisation (NGO) sector, and the private sector. Government services are organised in a pyramid that reaches from the national ministry down to the village, with the aim of bringing essential and primary health care close to the people." },
      { h: "Central direction", p: "At the top, the Ministry of Health and Family Welfare (MoHFW) sets policy and directs health services. Under it, two main directorates run the field services: the Directorate General of Health Services (DGHS) and the Directorate General of Family Planning (DGFP). Health and family-planning workers therefore form two parallel field cadres." },
      { h: "Levels of the public health system", p: "Government services step down through several administrative levels.", list: [
        "National — Ministry and directorates; specialised/tertiary teaching hospitals.",
        "Division — divisional level coordination.",
        "District — District (Sadar) Hospital with specialists; the secondary level.",
        "Upazila (sub-district) — Upazila Health Complex (UHC), a key first-referral unit usually of about 31–50 beds, providing in-patient, out-patient, MCH, EPI and emergency care.",
        "Union — Union Health and Family Welfare Centre (UH&FWC) and union sub-centre; the primary care unit for several villages.",
        "Ward / village — Community Clinic, serving roughly 6,000 people, the closest point of care."
      ], figure: {
        caption: "Pyramid of the public health-care delivery system of Bangladesh.",
        svg: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyramid of Bangladesh public health system from national to community level."><polygon points="230,15 110,75 350,75" fill="#7C2D12"/><text x="230" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">National / MoHFW</text><polygon points="110,80 350,80 375,140 85,140" fill="#B45309"/><text x="230" y="118" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">District Hospital</text><polygon points="85,145 375,145 400,205 60,205" fill="#FB923C"/><text x="230" y="183" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Upazila Health Complex</text><polygon points="60,210 400,210 415,250 45,250" fill="#FEF3C7"/><text x="230" y="235" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Union centre &amp; Community Clinic</text></svg>'
      } },
      { h: "The Community Clinic", p: "Community Clinics are the lowest tier of the public system, designed to provide one clinic for about every 6,000 people. They deliver essential services — minor ailment care, MCH, family planning, immunisation (EPI), nutrition advice, health education and referral — and are run with the help of a community-chosen support group, reflecting the PHC principle of community participation." },
      { h: "Field health workforce", p: "Community health is delivered by a range of field workers under the two directorates.", list: [
        "Health Assistant (HA) and Assistant Health Inspector (AHI) — DGHS field workers (EPI, disease control, sanitation).",
        "Family Welfare Assistant (FWA) and Family Welfare Visitor (FWV) — DGFP workers (family planning, MCH).",
        "Community Health Care Provider (CHCP) — runs the Community Clinic.",
        "Senior Staff Nurse / nurse-midwife — provides nursing and midwifery care.",
        "Medical Officer — doctor at union and upazila level."
      ] },
      { h: "NGO and private sectors", p: "Many large NGOs (such as BRAC and others) extend services into communities, especially family planning, immunisation outreach, TB control and health education, often reaching areas the government cannot. The private sector includes private hospitals, clinics, pharmacies and practitioners; it is large and growing but is mainly curative, urban and paid for out of pocket." },
      { h: "Common community health problems in Bangladesh", p: "The community health nurse works against a recognisable pattern of problems: communicable diseases (diarrhoeal disease, respiratory infections, tuberculosis, dengue), maternal and child health needs (high maternal and neonatal risk, malnutrition), the rising burden of non-communicable diseases (hypertension, diabetes), unsafe water and sanitation, and the effects of poverty, illiteracy and natural disasters." },
      { h: "Role of the nurse in the system", p: "Within this system, the community health nurse links the formal services with families — staffing clinics and EPI sessions, supervising field activities, conducting home visits, giving MCH and family-planning care, and referring serious cases upward through the levels of the pyramid." }
    ],
    references: REF_CHN,
    examQuestions: [
      "Describe the structure of the health-care delivery system of Bangladesh with a diagram.",
      "Explain the functions of the Upazila Health Complex and the Community Clinic.",
      "What are the two directorates under the Ministry of Health and Family Welfare?",
      "Describe the categories of field health workers in Bangladesh.",
      "Discuss the common community health problems in Bangladesh."
    ],
    assessment: [
      { type: "mcq", q: "The ministry that directs health services in Bangladesh is the:", options: ["Ministry of Education", "Ministry of Health and Family Welfare", "Ministry of Agriculture", "Ministry of Finance"], answer: 1, rationale: "The MoHFW sets policy and directs the health system." },
      { type: "mcq", q: "Approximately how many people is one Community Clinic intended to serve?", options: ["About 600", "About 6,000", "About 60,000", "About 600,000"], answer: 1, rationale: "Community Clinics are planned at roughly one per 6,000 population." },
      { type: "mcq", q: "The first-referral health unit at the sub-district level is the:", options: ["Community Clinic", "Upazila Health Complex", "Medical College Hospital", "Union sub-centre"], answer: 1, rationale: "The Upazila Health Complex is the key first-referral unit at upazila level." },
      { type: "mcq", q: "Family planning field services are run mainly under which directorate?", options: ["Directorate General of Health Services", "Directorate General of Family Planning", "Directorate of Education", "Directorate of Agriculture"], answer: 1, rationale: "The DGFP runs family-planning and related MCH field services." },
      { type: "mcq", q: "A Family Welfare Assistant (FWA) mainly works in:", options: ["Family planning and MCH", "Road building", "Surgery", "Banking"], answer: 0, rationale: "FWAs are DGFP field workers focused on family planning and MCH." },
      { type: "mcq", q: "The District (Sadar) Hospital represents which level of care?", options: ["Primary", "Secondary", "Tertiary", "Community"], answer: 1, rationale: "The district hospital with specialists is the secondary level." },
      { type: "mcq", q: "Which worker typically runs the Community Clinic?", options: ["Community Health Care Provider", "Civil Surgeon", "Professor", "Pharmacist only"], answer: 0, rationale: "The CHCP staffs and runs the Community Clinic." },
      { type: "mcq", q: "Which sector is largely curative, urban and paid out of pocket?", options: ["Government sector", "Private sector", "Community Clinic", "EPI programme"], answer: 1, rationale: "The private sector is mostly curative, urban and financed out of pocket." },
      { type: "mcq", q: "EPI and disease-control field work is mainly carried out by the:", options: ["Health Assistant (HA)", "Family Welfare Visitor (FWV)", "Civil Surgeon", "Pharmacist"], answer: 0, rationale: "Health Assistants under DGHS carry out EPI and disease-control activities." },
      { type: "mcq", q: "Which is a common communicable disease problem in Bangladesh?", options: ["Diarrhoeal disease", "Frostbite", "Altitude sickness", "Scurvy epidemics"], answer: 0, rationale: "Diarrhoeal disease is a major communicable problem in the country." }
      , { type: "fill", q: "The lowest tier of the public health system, serving about 6,000 people, is the ____ Clinic.", accept: ["Community"], rationale: "Community Clinics are the lowest, closest tier." }
      , { type: "fill", q: "The two field directorates under MoHFW are the DGHS and the ____.", accept: ["DGFP", "Directorate General of Family Planning"], rationale: "DGHS and DGFP run the parallel field cadres." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "chn-05-epidemiology",
    unit: "Unit 2 · Epidemiology & Disease Control",
    title: "Epidemiology — Principles & Measurements",
    readMinutes: 15,
    summary: "The definition, aims and uses of epidemiology; key terms such as endemic, epidemic and pandemic; basic measures of morbidity and mortality (rates and ratios); and the main types of epidemiological study.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of epidemiology", p: "Epidemiology is the study of the distribution and determinants of health-related states and events in specified populations, and the application of this study to the control of health problems. In simple words, it studies how often diseases occur in groups of people, why they occur, and how to control them. The community — not the individual patient — is the unit of study." },
      { h: "Aims and uses", list: [
        "To describe the distribution and size of disease problems in a population.",
        "To identify causes (aetiology) and risk factors of disease.",
        "To find out the natural history and prognosis of disease.",
        "To plan, implement and evaluate health services and programmes.",
        "To provide the evidence base for prevention and health policy."
      ] },
      { h: "Components of epidemiology", p: "Epidemiology answers three questions about disease: 'Who, where and when' (distribution — described by time, place and person), 'Why and how' (determinants — the causes and risk factors), and 'so what can we do' (application to prevention and control)." },
      { h: "Common epidemiological terms", list: [
        "Endemic — the constant, usual presence of a disease in a given area (e.g. malaria in certain regions).",
        "Epidemic (outbreak) — the occurrence of cases clearly in excess of what is normally expected in an area.",
        "Pandemic — an epidemic spreading over several countries or continents (e.g. COVID-19).",
        "Sporadic — cases occurring irregularly, here and there, with no clear pattern.",
        "Incidence — the number of NEW cases occurring in a population in a given period.",
        "Prevalence — the number of ALL existing cases (old and new) at a point or period in time."
      ] },
      { h: "Incidence and prevalence", p: "Incidence measures new cases and tells us about the risk and speed of new disease — it is most useful for acute conditions and outbreaks. Prevalence measures all existing cases and tells us the total burden at a moment — it is useful for chronic conditions and for planning services. Prevalence depends on both the incidence and the duration of disease." },
      { h: "Measures of mortality", p: "Death rates summarise mortality in a population. Important ones include:", list: [
        "Crude Death Rate (CDR) — total deaths in a year ÷ mid-year population × 1,000.",
        "Infant Mortality Rate (IMR) — deaths under 1 year ÷ live births in the year × 1,000; a sensitive indicator of community health.",
        "Maternal Mortality Ratio (MMR) — maternal deaths ÷ live births × 100,000.",
        "Under-five Mortality Rate — deaths under 5 years ÷ live births × 1,000.",
        "Case Fatality Rate (CFR) — deaths from a disease ÷ cases of that disease × 100; shows how deadly a disease is."
      ], figure: {
        caption: "Basic rate formula: a rate relates events to the population at risk over a defined time.",
        svg: '<svg viewBox="0 0 470 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Formula box for a rate: numerator over denominator times a multiplier."><rect x="20" y="20" width="430" height="110" rx="12" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="120" y="60" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">Rate =</text><line x1="180" y1="70" x2="360" y2="70" stroke="#7C2D12" stroke-width="2"/><text x="270" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#7C2D12">number of events (e.g. deaths)</text><text x="270" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#7C2D12">population at risk</text><text x="400" y="74" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#B45309">× k</text><text x="270" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">(k = 1,000 or 100,000) in a defined time period</text></svg>'
      } },
      { h: "Measures of morbidity", p: "Morbidity means sickness. Besides incidence and prevalence, useful measures include the attack rate (used in outbreaks: cases ÷ population at risk × 100 over the outbreak period). Morbidity data come from notifications, hospital and clinic records, and surveys." },
      { h: "Types of epidemiological study", list: [
        "Descriptive — describes disease by time, place and person (the first step).",
        "Analytical — tests associations between exposure and disease; includes case-control studies (start from disease, look back at exposure) and cohort studies (start from exposure, follow forward to disease).",
        "Experimental — the investigator introduces an intervention, as in a randomised controlled trial, to test cause or treatment."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define epidemiology. Describe its aims and uses.",
      "Differentiate between incidence and prevalence with examples.",
      "Define endemic, epidemic and pandemic.",
      "Explain the infant mortality rate and state why it is an important health indicator.",
      "Describe the types of epidemiological studies."
    ],
    assessment: [
      { type: "mcq", q: "Epidemiology studies disease in:", options: ["A single patient", "Populations", "Laboratory animals only", "Hospitals only"], answer: 1, rationale: "Epidemiology studies health-related states in populations, not single patients." },
      { type: "mcq", q: "The number of NEW cases of a disease in a given period is called:", options: ["Prevalence", "Mortality", "Fatality", "Incidence"], answer: 3, rationale: "Incidence counts new cases; prevalence counts all existing cases." },
      { type: "mcq", q: "The constant, usual presence of a disease in an area is termed:", options: ["Epidemic", "Pandemic", "Endemic", "Sporadic"], answer: 2, rationale: "Endemic means the habitual presence of a disease in a given area." },
      { type: "mcq", q: "A disease spreading across several countries or continents is a/an:", options: ["Endemic", "Epidemic", "Pandemic", "Outbreak"], answer: 2, rationale: "A pandemic is an epidemic over a very wide area, across countries or continents." },
      { type: "mcq", q: "The infant mortality rate uses which denominator?", options: ["Mid-year population", "Live births in the year", "Total deaths", "Number of mothers"], answer: 1, rationale: "IMR = deaths under one year ÷ live births in the year × 1,000." },
      { type: "mcq", q: "All existing cases of a disease at a point in time describes:", options: ["Incidence", "Prevalence", "Attack rate", "Case fatality rate"], answer: 1, rationale: "Prevalence is all existing (old + new) cases at a given time." },
      { type: "mcq", q: "The proportion of people with a disease who die from it is the:", options: ["Crude death rate", "Case fatality rate", "Maternal mortality ratio", "Incidence rate"], answer: 1, rationale: "Case fatality rate = deaths from a disease ÷ cases of that disease × 100." },
      { type: "mcq", q: "A study that starts with the disease and looks back at past exposure is a:", options: ["Cohort study", "Case-control study", "Randomised trial", "Descriptive study"], answer: 1, rationale: "A case-control study compares those with and without disease for past exposures." },
      { type: "mcq", q: "Describing a disease by time, place and person is which type of study?", options: ["Descriptive", "Experimental", "Cohort", "Case-control"], answer: 0, rationale: "Descriptive epidemiology characterises disease by time, place and person." },
      { type: "mcq", q: "The attack rate is most often used in:", options: ["Chronic disease planning", "Disease outbreaks", "Birth registration", "Census taking"], answer: 1, rationale: "Attack rate is a measure used during outbreaks of disease." }
      , { type: "fill", q: "The occurrence of cases clearly in excess of the normal expected number is called a/an ____.", accept: ["epidemic", "outbreak"], rationale: "An epidemic (outbreak) exceeds the expected number of cases." }
      , { type: "fill", q: "Prevalence depends on the incidence and the ____ of the disease.", accept: ["duration"], rationale: "Prevalence = incidence × duration (roughly)." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "chn-06-communicable-disease",
    unit: "Unit 2 · Epidemiology & Disease Control",
    title: "Communicable Disease Control",
    readMinutes: 15,
    summary: "How infections spread (the chain of infection and modes of transmission), the dynamics of disease, key prevention and control measures, and the place of isolation, quarantine and notification.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a communicable disease?", p: "A communicable (infectious) disease is one caused by a living agent (such as a bacterium, virus, parasite or fungus) or its products, that can be transmitted directly or indirectly from an infected person, animal or reservoir to a susceptible host. Control of these diseases is a central task of community health nursing." },
      { h: "The chain of infection", p: "Infection spreads through a chain of six links. Breaking any one link stops the spread — this is the basis of all control.", list: [
        "Infectious agent — the microbe that causes disease.",
        "Reservoir — where the agent normally lives and multiplies (human, animal or environment).",
        "Portal of exit — the way the agent leaves the reservoir (respiratory secretions, faeces, blood).",
        "Mode of transmission — how the agent travels to a new host.",
        "Portal of entry — the way the agent enters the new host (mouth, nose, skin break).",
        "Susceptible host — a person without immunity who can become infected."
      ], figure: {
        caption: "The chain of infection — breaking any link prevents disease spread.",
        svg: '<svg viewBox="0 0 540 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six links of the chain of infection shown left to right."><defs><marker id="chnArr6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="8" y="45" width="78" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="47" y="64" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">Agent</text><rect x="96" y="45" width="78" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="135" y="64" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">Reservoir</text><rect x="184" y="45" width="78" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="223" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">Portal of</text><text x="223" y="73" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">exit</text><rect x="272" y="45" width="84" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="314" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">Mode of</text><text x="314" y="73" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">transmission</text><rect x="366" y="45" width="78" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="405" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">Portal of</text><text x="405" y="73" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">entry</text><rect x="454" y="45" width="80" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="494" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">Susceptible</text><text x="494" y="73" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">host</text><line x1="86" y1="67" x2="94" y2="67" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr6)"/><line x1="174" y1="67" x2="182" y2="67" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr6)"/><line x1="262" y1="67" x2="270" y2="67" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr6)"/><line x1="356" y1="67" x2="364" y2="67" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr6)"/><line x1="444" y1="67" x2="452" y2="67" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr6)"/></svg>'
      } },
      { h: "Modes of transmission", list: [
        "Direct — direct contact (touch, droplet spread over a short distance, sexual contact), or vertical from mother to baby.",
        "Indirect — through vehicles (water, food, blood, fomites), vectors (mosquitoes, flies), or airborne droplet nuclei and dust.",
        "Faecal–oral route — many diarrhoeal diseases spread when faeces contaminate food or water."
      ] },
      { h: "Source, reservoir and carrier", p: "The source is the person or object from which infection passes to a host. A reservoir is where the agent normally lives. A carrier is an infected person who shows no symptoms but can still spread the agent — carriers are dangerous because they are not recognised. Some agents have animal reservoirs (zoonoses, e.g. rabies)." },
      { h: "Incubation period", p: "The incubation period is the time between entry of the agent and the appearance of the first signs or symptoms. Knowing it helps to trace the source of an outbreak, decide the period of quarantine, and predict when contacts may fall ill." },
      { h: "Levels of disease prevention and control measures", p: "Communicable disease is controlled by acting on the chain of infection at three points.", list: [
        "Controlling the reservoir / source — early diagnosis, notification, isolation and treatment of cases; treating carriers; controlling animal reservoirs.",
        "Interrupting transmission — safe water and food, sanitation, hand hygiene, vector control, disinfection and safe disposal of waste.",
        "Protecting the susceptible host — immunisation, chemoprophylaxis, better nutrition and health education."
      ] },
      { h: "Isolation, quarantine and surveillance", list: [
        "Isolation — separation of an infected (sick) person for the period of communicability to prevent spread.",
        "Quarantine — restriction of movement of healthy contacts who have been exposed, for the longest usual incubation period, to watch for disease.",
        "Surveillance — continuous watching over the occurrence and spread of disease so that action can be taken quickly.",
        "Notification — reporting certain (notifiable) diseases to health authorities so outbreaks can be detected and controlled."
      ] },
      { h: "The nurse's role", p: "The community health nurse detects and reports cases early, teaches families about hygiene, safe water and cough/hand etiquette, gives immunisations, traces and follows up contacts, supervises home care and isolation, ensures treatment is completed (especially for tuberculosis under DOTS), and supports outbreak investigation and control." }
    ],
    references: REF_CHN,
    examQuestions: [
      "Describe the chain of infection and explain how breaking it controls disease.",
      "Explain the modes of transmission of communicable diseases with examples.",
      "Differentiate between isolation and quarantine.",
      "What is a carrier? Why are carriers important in disease control?",
      "Describe the role of the community health nurse in communicable disease control."
    ],
    assessment: [
      { type: "mcq", q: "Breaking any single link of the chain of infection will:", options: ["Increase spread", "Stop the spread of infection", "Have no effect", "Create new disease"], answer: 1, rationale: "Interrupting any link of the chain prevents transmission." },
      { type: "mcq", q: "An infected person who has no symptoms but can spread the disease is a:", options: ["Reservoir", "Vector", "Host", "Carrier"], answer: 3, rationale: "A carrier harbours and spreads the agent without showing illness." },
      { type: "mcq", q: "Separation of a sick, infectious person during the period of communicability is called:", options: ["Quarantine", "Isolation", "Surveillance", "Notification"], answer: 1, rationale: "Isolation separates the already infected person." },
      { type: "mcq", q: "Restricting the movement of exposed but healthy contacts is called:", options: ["Isolation", "Quarantine", "Disinfection", "Immunisation"], answer: 1, rationale: "Quarantine applies to healthy exposed contacts for the incubation period." },
      { type: "mcq", q: "Malaria spread by mosquitoes is an example of which transmission?", options: ["Direct contact", "Vector-borne (indirect)", "Vertical", "Airborne"], answer: 1, rationale: "Mosquitoes are vectors — an indirect mode of transmission." },
      { type: "mcq", q: "The time between entry of the agent and the first symptoms is the:", options: ["Period of communicability", "Incubation period", "Recovery period", "Latent immunity"], answer: 1, rationale: "The incubation period precedes the appearance of symptoms." },
      { type: "mcq", q: "Immunisation protects which link of the chain of infection?", options: ["The agent", "The reservoir", "The susceptible host", "The portal of exit"], answer: 2, rationale: "Immunisation makes the host immune, protecting the susceptible host." },
      { type: "mcq", q: "Diarrhoeal diseases most commonly spread by the:", options: ["Airborne route", "Faecal–oral route", "Bite of a dog", "Blood transfusion"], answer: 1, rationale: "Faecal contamination of food/water spreads many diarrhoeal diseases." },
      { type: "mcq", q: "Reporting a notifiable disease to health authorities is called:", options: ["Notification", "Quarantine", "Isolation", "Rehabilitation"], answer: 0, rationale: "Notification is the reporting of certain diseases to authorities." },
      { type: "mcq", q: "A disease transmitted from animals to humans, such as rabies, is a:", options: ["Zoonosis", "Sporadic disease", "Deficiency disease", "Genetic disease"], answer: 0, rationale: "Zoonoses are diseases transmissible from animals to humans." }
      , { type: "fill", q: "Continuous watching over the occurrence and spread of disease is called ____.", accept: ["surveillance"], rationale: "Surveillance enables prompt control action." }
      , { type: "fill", q: "The place where an infectious agent normally lives and multiplies is its ____.", accept: ["reservoir"], rationale: "The reservoir is the natural habitat of the agent." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "chn-07-immunization-epi",
    unit: "Unit 2 · Epidemiology & Disease Control",
    title: "Immunization & the Expanded Programme on Immunization (EPI)",
    readMinutes: 16,
    summary: "Types of immunity, active versus passive immunisation, the cold chain, the EPI of Bangladesh and its vaccines and schedule, and the nurse's role in safe immunisation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Immunity and immunisation", p: "Immunity is the body's ability to resist a particular infection. Immunisation is the process of making a person immune, usually by giving a vaccine. It is one of the most powerful and cost-effective ways of preventing communicable disease and is a key element of primary health care." },
      { h: "Types of immunity", list: [
        "Innate (natural) immunity — present from birth, non-specific.",
        "Acquired immunity — developed during life and specific to an agent.",
        "Active immunity — the person's own body makes antibodies after natural infection or vaccination; it is slow to develop but long-lasting.",
        "Passive immunity — ready-made antibodies are given (e.g. immunoglobulin) or pass from mother to baby; it acts at once but is short-lived."
      ] },
      { h: "Active vs passive immunisation", p: "Active immunisation uses vaccines (live attenuated, killed, toxoids or subunit) to stimulate the body to produce its own protection — used for routine prevention. Passive immunisation gives preformed antibodies (antiserum or immunoglobulin) for immediate but temporary protection — used after exposure or for those who cannot wait, as in tetanus or rabies." },
      { h: "The cold chain", p: "The cold chain is the system of storing and transporting vaccines at the correct low temperature, from the manufacturer to the child, so that they remain potent. Most vaccines are kept at 2–8 °C in the refrigerator; some are more sensitive. If the cold chain breaks, vaccines lose their power and become useless. Walk-in cold rooms, refrigerators, cold boxes, vaccine carriers and ice packs maintain it.", figure: {
        caption: "The cold chain keeps vaccines potent from store to child (commonly 2–8 °C).",
        svg: '<svg viewBox="0 0 540 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cold chain from manufacturer to child via cold store, carrier and centre."><defs><marker id="chnArr7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="10" y="40" width="100" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="60" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Manufacturer</text><rect x="130" y="40" width="100" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="180" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Cold store</text><text x="180" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">2–8 °C</text><rect x="250" y="40" width="110" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="305" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Vaccine carrier</text><text x="305" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">ice packs</text><rect x="380" y="40" width="100" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="430" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">EPI centre</text><rect x="498" y="44" width="36" height="36" rx="18" fill="#FB923C" stroke="#7C2D12" stroke-width="1.5"/><text x="516" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">child</text><line x1="110" y1="62" x2="128" y2="62" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr7)"/><line x1="230" y1="62" x2="248" y2="62" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr7)"/><line x1="360" y1="62" x2="378" y2="62" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr7)"/><line x1="480" y1="62" x2="496" y2="62" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr7)"/></svg>'
      } },
      { h: "The Expanded Programme on Immunization (EPI)", p: "EPI is the global programme launched by WHO in 1974 to immunise children against the major vaccine-preventable diseases; Bangladesh began its EPI in 1979 and it is now one of the country's most successful health programmes. It targets infants, children and women of child-bearing age, and is delivered free through fixed and outreach EPI sessions, largely staffed by health workers and nurses." },
      { h: "Vaccine-preventable diseases in EPI", p: "Bangladesh's EPI protects against a growing list of diseases, including tuberculosis, diphtheria, pertussis (whooping cough), tetanus, poliomyelitis, hepatitis B, Haemophilus influenzae type b (Hib), pneumococcal disease, measles and rubella. Tetanus is also prevented in mothers and newborns by immunising women of child-bearing age." },
      { h: "EPI vaccines and the schedule (principle)", p: "Children receive a series of vaccines from birth through the first one to two years, given at set ages so that protection develops before exposure. Standard components include BCG at birth (against tuberculosis), oral polio and inactivated polio vaccine, the pentavalent vaccine (DPT–hepatitis B–Hib) and pneumococcal vaccine given as a primary series in early infancy, and measles-containing vaccine (MR) given after the age of nine months with a second dose later. Always follow the current national EPI schedule and card, as exact ages and doses are periodically updated.", list: [
        "At birth — BCG and the first oral polio dose.",
        "Early infancy (around 6, 10 and 14 weeks) — pentavalent, oral/inactivated polio and pneumococcal vaccine as a primary series.",
        "After 9 months — measles–rubella (MR), with a second MR dose later in the second year.",
        "Women of child-bearing age — tetanus-containing vaccine to prevent maternal and neonatal tetanus."
      ] },
      { h: "Safe immunisation and the nurse's role", list: [
        "Check the vaccine, expiry date and vaccine vial monitor; maintain the cold chain.",
        "Use a sterile auto-disable syringe for every injection (one needle, one syringe, one child).",
        "Give the correct dose by the correct route and site.",
        "Record the dose on the child's EPI card and the register; give the next-visit date.",
        "Watch for and manage adverse events following immunisation (AEFI).",
        "Educate mothers, dispel myths, and trace defaulters and drop-outs."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Differentiate between active and passive immunity with examples.",
      "What is the cold chain? Why is it important in immunisation?",
      "Describe the Expanded Programme on Immunization (EPI) in Bangladesh.",
      "List the vaccine-preventable diseases covered under EPI.",
      "Explain the role of the nurse in ensuring safe immunisation."
    ],
    assessment: [
      { type: "mcq", q: "BCG vaccine in the EPI schedule protects against:", options: ["Measles", "Tuberculosis", "Polio", "Tetanus"], answer: 1, rationale: "BCG is given against tuberculosis, usually at birth." },
      { type: "mcq", q: "Immunity in which the body makes its own antibodies after a vaccine is:", options: ["Passive immunity", "Innate immunity", "Maternal immunity", "Active immunity"], answer: 3, rationale: "Vaccination produces active immunity — the body makes its own antibodies." },
      { type: "mcq", q: "Most EPI vaccines are stored at a temperature of:", options: ["2–8 °C", "20–25 °C", "37 °C", "below −70 °C"], answer: 0, rationale: "The common cold-chain range for most vaccines is 2–8 °C." },
      { type: "mcq", q: "The pentavalent vaccine protects against diphtheria, pertussis, tetanus, hepatitis B and:", options: ["Measles", "Haemophilus influenzae type b (Hib)", "Cholera", "Rabies"], answer: 1, rationale: "Pentavalent = DPT + hepatitis B + Hib." },
      { type: "mcq", q: "Measles-containing (MR) vaccine is first given at about:", options: ["Birth", "6 weeks", "9 months", "5 years"], answer: 2, rationale: "Measles-containing vaccine is given from about 9 months of age." },
      { type: "mcq", q: "Passive immunity is characterised by protection that is:", options: ["Slow but long-lasting", "Immediate but short-lived", "Permanent", "Only from vaccines"], answer: 1, rationale: "Passive immunity acts immediately but lasts only a short time." },
      { type: "mcq", q: "The 'one needle, one syringe, one child' rule is achieved using:", options: ["Glass reusable syringes", "Auto-disable (AD) syringes", "Any available needle", "Shared multidose needles"], answer: 1, rationale: "Auto-disable syringes prevent reuse and ensure safe injection." },
      { type: "mcq", q: "EPI in Bangladesh was introduced in the year:", options: ["1974", "1979", "1990", "2000"], answer: 1, rationale: "Bangladesh launched its EPI in 1979 (global EPI began in 1974)." },
      { type: "mcq", q: "Tetanus in newborns is best prevented by:", options: ["Giving BCG at birth", "Immunising women of child-bearing age", "Polio drops", "Vitamin A"], answer: 1, rationale: "Maternal/neonatal tetanus is prevented by immunising women of child-bearing age." },
      { type: "mcq", q: "If the cold chain is broken, the vaccine:", options: ["Becomes stronger", "Loses its potency", "Lasts longer", "Is unaffected"], answer: 1, rationale: "Heat damages vaccines, so they lose potency if the cold chain breaks." }
      , { type: "fill", q: "The system of keeping vaccines cold from manufacturer to child is the ____ chain.", accept: ["cold"], rationale: "The cold chain preserves vaccine potency." }
      , { type: "fill", q: "Ready-made antibodies given for immediate protection produce ____ immunity.", accept: ["passive"], rationale: "Passive immunity is conferred by preformed antibodies." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "chn-08-ncd",
    unit: "Unit 2 · Epidemiology & Disease Control",
    title: "Non-communicable Diseases & Their Prevention",
    readMinutes: 14,
    summary: "The nature and rising burden of non-communicable diseases, their common modifiable risk factors, the major NCDs, and prevention through health promotion, screening and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are non-communicable diseases?", p: "Non-communicable diseases (NCDs) are chronic diseases that are not passed from person to person. They usually develop slowly, last a long time, and result from a combination of genetic, behavioural and environmental factors. They are now the leading cause of death worldwide and a fast-growing problem in Bangladesh as the population ages and lifestyles change." },
      { h: "The four major NCDs", list: [
        "Cardiovascular diseases — heart attack, stroke, hypertension.",
        "Cancers — various malignant tumours.",
        "Chronic respiratory diseases — chronic obstructive pulmonary disease (COPD), asthma.",
        "Diabetes mellitus — raised blood glucose."
      ] },
      { h: "Shared modifiable risk factors", p: "The major NCDs share a small set of common behavioural and metabolic risk factors. Because these can be changed, NCDs are largely preventable.", list: [
        "Tobacco use (smoking and smokeless).",
        "Unhealthy diet (too much salt, sugar and fat; too little fruit and vegetables).",
        "Physical inactivity.",
        "Harmful use of alcohol.",
        "Resulting metabolic changes — raised blood pressure, overweight/obesity, raised blood glucose and abnormal blood lipids."
      ], figure: {
        caption: "Four shared behavioural risk factors lead to the major non-communicable diseases.",
        svg: '<svg viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram linking four risk factors to four major NCDs."><rect x="15" y="20" width="170" height="30" rx="6" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="100" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Tobacco use</text><rect x="15" y="60" width="170" height="30" rx="6" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="100" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Unhealthy diet</text><rect x="15" y="100" width="170" height="30" rx="6" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="100" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Physical inactivity</text><rect x="15" y="140" width="170" height="30" rx="6" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="100" y="160" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Harmful alcohol use</text><rect x="300" y="40" width="180" height="30" rx="6" fill="#FB923C" stroke="#7C2D12" stroke-width="1.5"/><text x="390" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Cardiovascular disease</text><rect x="300" y="80" width="180" height="30" rx="6" fill="#FB923C" stroke="#7C2D12" stroke-width="1.5"/><text x="390" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Cancer</text><rect x="300" y="120" width="180" height="30" rx="6" fill="#FB923C" stroke="#7C2D12" stroke-width="1.5"/><text x="390" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Chronic lung disease</text><rect x="300" y="160" width="180" height="30" rx="6" fill="#FB923C" stroke="#7C2D12" stroke-width="1.5"/><text x="390" y="180" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Diabetes</text><line x1="185" y1="95" x2="298" y2="95" stroke="#B45309" stroke-width="2"/><line x1="185" y1="120" x2="298" y2="135" stroke="#B45309" stroke-width="2"/></svg>'
      } },
      { h: "Non-modifiable risk factors", p: "Some risk factors cannot be changed but help identify who is at higher risk: increasing age, sex, family history (heredity) and ethnicity. These are used together with the modifiable factors to assess a person's overall risk." },
      { h: "Levels of prevention for NCDs", list: [
        "Primordial — prevent risk factors from arising (e.g. promote healthy habits in childhood, tobacco-free environments).",
        "Primary — reduce risk factors in those exposed (health education, diet, exercise, stop smoking, control of blood pressure).",
        "Secondary — early detection through screening (blood pressure, blood glucose, breast and cervical screening) and prompt treatment.",
        "Tertiary — manage established disease to prevent complications and disability, and provide rehabilitation."
      ] },
      { h: "Screening and early detection", p: "Because NCDs are silent for years, screening is vital. Simple community screening includes measuring blood pressure, checking blood glucose, calculating Body Mass Index (BMI = weight in kg ÷ height in m²), breast self-examination and clinical breast examination, and cervical cancer screening (such as VIA — visual inspection with acetic acid). Screening finds disease early when treatment works best." },
      { h: "Population and high-risk approaches", p: "NCDs are tackled in two complementary ways: the population (mass) approach, which shifts the whole community towards healthier living (e.g. salt reduction, tobacco laws, promoting exercise); and the high-risk approach, which finds and treats individuals at greatest risk. Both are needed for the best effect." },
      { h: "The nurse's role", list: [
        "Health education on diet, exercise, and avoiding tobacco and alcohol.",
        "Community screening for blood pressure, diabetes and cancers.",
        "Counselling and support for lifestyle change and for taking medicines regularly (adherence).",
        "Follow-up and home care of people with chronic disease.",
        "Linking patients to clinics and referral services."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define non-communicable diseases and name the four major NCDs.",
      "Describe the common modifiable risk factors of NCDs.",
      "Explain the levels of prevention applied to non-communicable diseases.",
      "Discuss the importance of screening in the early detection of NCDs.",
      "Explain the role of the community health nurse in the prevention and control of NCDs."
    ],
    assessment: [
      { type: "mcq", q: "Which of the following is a non-communicable disease?", options: ["Tuberculosis", "Diabetes mellitus", "Measles", "Cholera"], answer: 1, rationale: "Diabetes is a chronic NCD; the others are communicable." },
      { type: "mcq", q: "Which is a shared modifiable risk factor for the major NCDs?", options: ["Age", "Sex", "Tobacco use", "Heredity"], answer: 2, rationale: "Tobacco use is modifiable; age, sex and heredity cannot be changed." },
      { type: "mcq", q: "Body Mass Index (BMI) is calculated as weight in kg divided by:", options: ["height in cm", "height in m²", "age in years", "waist in cm"], answer: 1, rationale: "BMI = weight (kg) ÷ height (m) squared." },
      { type: "mcq", q: "The four major NCDs include cardiovascular disease, cancer, diabetes and:", options: ["Chronic respiratory disease", "Malaria", "Typhoid", "Dengue"], answer: 0, rationale: "Chronic respiratory disease (e.g. COPD) is the fourth major NCD group." },
      { type: "mcq", q: "Screening for high blood pressure to find disease early is which level of prevention?", options: ["Primary", "Secondary", "Tertiary", "Primordial"], answer: 1, rationale: "Early detection through screening is secondary prevention." },
      { type: "mcq", q: "VIA (visual inspection with acetic acid) is used to screen for:", options: ["Breast cancer", "Cervical cancer", "Lung cancer", "Diabetes"], answer: 1, rationale: "VIA is a simple screening test for cervical cancer." },
      { type: "mcq", q: "Shifting the whole community towards healthier living is the:", options: ["High-risk approach", "Population (mass) approach", "Curative approach", "Surgical approach"], answer: 1, rationale: "The population approach targets the entire community." },
      { type: "mcq", q: "Which is a NON-modifiable risk factor for NCDs?", options: ["Diet", "Physical inactivity", "Family history", "Smoking"], answer: 2, rationale: "Family history (heredity) cannot be changed." },
      { type: "mcq", q: "Rehabilitation of a patient disabled by stroke is which level of prevention?", options: ["Primary", "Secondary", "Tertiary", "Primordial"], answer: 2, rationale: "Reducing disability in established disease is tertiary prevention." },
      { type: "mcq", q: "NCDs are described as chronic because they:", options: ["Spread quickly between people", "Develop slowly and last a long time", "Are caused by bacteria", "Always recover in days"], answer: 1, rationale: "NCDs are long-lasting conditions that develop slowly." }
      , { type: "fill", q: "Excess intake of salt, sugar and fat is part of an unhealthy ____, a key NCD risk factor.", accept: ["diet"], rationale: "Unhealthy diet is a leading modifiable NCD risk factor." }
      , { type: "fill", q: "Finding and treating only the individuals at greatest risk is called the ____ approach.", accept: ["high-risk", "high risk"], rationale: "The high-risk approach targets the most at-risk individuals." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "chn-09-family-health",
    unit: "Unit 3 · Family & Maternal-Child Health",
    title: "Family Health & Family Health Nursing",
    readMinutes: 14,
    summary: "The definition and types of family, the meaning of family health nursing, principles of family-centred care, factors influencing family health, and the nurse's roles with families.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a family?", p: "A family is a group of two or more people, usually related by blood, marriage or adoption, who live together (or are closely connected), share resources and responsibilities, and care for one another. The family is the basic unit of society and the first place where health habits and beliefs are formed — which is why it is the basic unit of community health nursing care." },
      { h: "Types of family", list: [
        "Nuclear family — husband, wife and their unmarried children only.",
        "Joint / extended family — parents, their married children, grandchildren and other relatives living together (common in Bangladesh).",
        "Three-generation family — grandparents, parents and children.",
        "Single-parent family — one parent with children (due to death, divorce or separation).",
        "Blended / reconstituted family — formed when remarried partners bring children from previous unions."
      ] },
      { h: "Family health nursing", p: "Family health nursing is the provision of nursing care in which the family — not just the individual patient — is the unit of service. The nurse works with the whole family to promote health, prevent disease, care for the sick member, and help the family cope, because the health of each member affects, and is affected by, the others." },
      { h: "Principles of family-centred care", list: [
        "The family is treated as a whole unit, not just the sick member.",
        "Care is based on the family's own needs, beliefs and resources.",
        "The family is an active partner in planning and giving care.",
        "Care respects the family's culture, values and right to make decisions.",
        "The aim is to make the family self-reliant in caring for its own health."
      ] },
      { h: "Factors influencing family health", list: [
        "Economic — income, occupation and food security.",
        "Educational — literacy and health knowledge of family members.",
        "Environmental — housing, water, sanitation and crowding.",
        "Cultural and religious — beliefs, customs and practices about health.",
        "Family size and structure — number of members and dependency.",
        "Lifestyle and habits — diet, hygiene, smoking and alcohol.",
        "Access to health services and social support."
      ] },
      { h: "Functions of a family", p: "A healthy family carries out several functions: producing and raising children, giving physical care and security, providing love and emotional support, teaching values and social behaviour (socialisation), and meeting economic needs. When these functions fail, the health of members suffers." },
      { h: "The nurse's roles with the family", list: [
        "Assessing the health of the whole family and the home environment.",
        "Giving care to sick members and teaching the family to give care.",
        "Health education on hygiene, nutrition, immunisation and family planning.",
        "Counselling and emotional support during illness and crisis.",
        "Referral and linking the family to health and welfare services.",
        "Keeping family health records and following up."
      ] },
      { h: "The family health record", p: "The community health nurse keeps a family health record (or family folder) for each family, noting members, their health problems, immunisations, antenatal and family-planning details, and visits. This record helps in continuous, planned care and in evaluating the family's progress over time." }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define family and family health nursing.",
      "Describe the types of family with examples.",
      "Explain the principles of family-centred care.",
      "Discuss the factors that influence the health of a family.",
      "Describe the roles and responsibilities of the nurse in family health care."
    ],
    assessment: [
      { type: "mcq", q: "The basic unit of community health nursing care is the:", options: ["Hospital", "Individual only", "Family", "Government"], answer: 2, rationale: "The family is the basic unit of community health nursing." },
      { type: "mcq", q: "A family of husband, wife and their unmarried children only is a:", options: ["Joint family", "Extended family", "Blended family", "Nuclear family"], answer: 3, rationale: "That is the definition of a nuclear family." },
      { type: "mcq", q: "Parents, married children and grandchildren living together form a:", options: ["Nuclear family", "Single-parent family", "Joint/extended family", "Blended family"], answer: 2, rationale: "A joint/extended family includes several related generations together." },
      { type: "mcq", q: "In family-centred care, the family is regarded as:", options: ["A passive observer", "An active partner in care", "Irrelevant to care", "A barrier to care"], answer: 1, rationale: "Family-centred care treats the family as an active partner." },
      { type: "mcq", q: "Which is a factor influencing family health?", options: ["Income and occupation", "The colour of the house", "The brand of the television", "The day of the week"], answer: 0, rationale: "Economic status (income, occupation) strongly influences family health." },
      { type: "mcq", q: "A family formed when remarried partners bring children from previous marriages is:", options: ["Nuclear", "Blended/reconstituted", "Joint", "Three-generation"], answer: 1, rationale: "A blended or reconstituted family combines children from previous unions." },
      { type: "mcq", q: "Teaching values and social behaviour to children is which family function?", options: ["Economic", "Socialisation", "Reproductive", "Recreational"], answer: 1, rationale: "Passing on values and social norms is the socialisation function." },
      { type: "mcq", q: "The record the nurse keeps for each family is the:", options: ["Death register", "Family health record (folder)", "Stock book", "Duty roster"], answer: 1, rationale: "The family folder records the family's members, problems and care." },
      { type: "mcq", q: "A single-parent family may result from:", options: ["Death, divorce or separation", "Joint living", "Having many children", "Living in a city"], answer: 0, rationale: "A single-parent family has one parent due to death, divorce or separation." },
      { type: "mcq", q: "The goal of family-centred nursing care is to make the family:", options: ["Dependent on the nurse", "Self-reliant in its own health care", "Larger in size", "Wealthier"], answer: 1, rationale: "The aim is family self-reliance in caring for its own health." }
      , { type: "fill", q: "The family is the basic unit of ____, where health habits are first formed.", accept: ["society"], rationale: "The family is described as the basic unit of society." }
      , { type: "fill", q: "Care that treats the whole family rather than only the sick member is called family-____ care.", accept: ["centred", "centered"], rationale: "Family-centred care addresses the whole family." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "chn-10-mch",
    unit: "Unit 3 · Family & Maternal-Child Health",
    title: "Maternal & Child Health (MCH) Services",
    readMinutes: 16,
    summary: "The aims and components of MCH care, antenatal, intranatal and postnatal care, care of the newborn and under-five child, danger signs, and key child-survival interventions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is MCH?", p: "Maternal and Child Health (MCH) care promotes and protects the health of mothers and children — the most vulnerable groups in any community. It covers the woman through pregnancy, childbirth and the period after, and the child from birth through the under-five years. Good MCH care lowers maternal, neonatal and child deaths and is a core element of primary health care." },
      { h: "Components of MCH care", list: [
        "Antenatal (prenatal) care — care during pregnancy.",
        "Intranatal care — safe care during labour and delivery.",
        "Postnatal care — care of the mother after delivery.",
        "Newborn (neonatal) care — care of the baby in the first 28 days.",
        "Child care — growth monitoring, immunisation, nutrition and care of illness.",
        "Family planning — spacing and limiting births to protect mother and child."
      ] },
      { h: "Antenatal care", p: "Antenatal care aims to ensure a safe pregnancy and a healthy mother and baby. WHO recommends at least the recommended number of focused antenatal contacts. Care includes registration and history, regular checks of weight, blood pressure, anaemia and the growing uterus, tetanus immunisation, iron-folic acid supplements, screening and treatment of problems, and counselling on nutrition, danger signs, birth planning and breastfeeding." },
      { h: "Danger signs in pregnancy", p: "The nurse teaches every mother the danger signs that need urgent care.", list: [
        "Vaginal bleeding.",
        "Severe headache or blurred vision.",
        "Swelling of the face and hands (a sign of pre-eclampsia).",
        "Convulsions or fits.",
        "High fever.",
        "Reduced or absent fetal movements.",
        "Severe abdominal pain or leaking of fluid."
      ] },
      { h: "Intranatal (delivery) care — the three cleans", p: "Safe delivery prevents infection and death of mother and baby. The classic 'three cleans' summarise clean delivery: clean hands, a clean delivery surface, and clean cutting and care of the cord. Births should be attended by a skilled birth attendant, with readiness to refer complications quickly. The community health nurse promotes institutional delivery and skilled attendance.", figure: {
        caption: "The 'three cleans' of safe (clean) delivery.",
        svg: '<svg viewBox="0 0 470 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three boxes showing clean hands, clean surface and clean cord care."><rect x="15" y="35" width="135" height="60" rx="10" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="82" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Clean</text><text x="82" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">hands</text><rect x="167" y="35" width="135" height="60" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="234" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Clean</text><text x="234" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">surface</text><rect x="319" y="35" width="135" height="60" rx="10" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="386" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Clean cord</text><text x="386" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">care</text></svg>'
      } },
      { h: "Postnatal and newborn care", p: "After delivery, the mother is watched for bleeding, infection and high blood pressure, and is supported with nutrition, rest, hygiene, exclusive breastfeeding and family planning. Essential newborn care includes drying and keeping the baby warm, early initiation of breastfeeding within the first hour, hygienic cord care, eye care, and watching for danger signs such as poor feeding, fast or difficult breathing, fever or low temperature, convulsions and yellowness (jaundice)." },
      { h: "Care of the under-five child", list: [
        "Growth monitoring — regular weighing and use of the growth chart to detect malnutrition early.",
        "Immunisation — completing the EPI schedule.",
        "Nutrition — exclusive breastfeeding for the first six months, then appropriate complementary feeding with continued breastfeeding.",
        "Control of diarrhoea — oral rehydration solution (ORS) and zinc.",
        "Control of acute respiratory infection — early recognition and treatment of pneumonia.",
        "Vitamin A supplementation and deworming."
      ] },
      { h: "IMCI and child survival", p: "Integrated Management of Childhood Illness (IMCI) is a strategy that helps health workers assess and treat the sick child as a whole, looking together for the common killers — pneumonia, diarrhoea, measles, malnutrition and newborn problems — rather than one disease at a time. The 'GOBI' interventions (Growth monitoring, Oral rehydration, Breastfeeding, Immunisation) are simple, low-cost measures that save many child lives." },
      { h: "The nurse's role in MCH", p: "The community health nurse registers and follows up pregnant women, provides antenatal and postnatal checks, conducts or assists safe deliveries, gives immunisations and growth monitoring, teaches mothers about danger signs, nutrition and family planning, manages common childhood illness, and refers complications promptly." }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define MCH and list its components.",
      "Describe the aims and content of antenatal care.",
      "List the danger signs in pregnancy that require urgent referral.",
      "Explain essential newborn care.",
      "What is IMCI? Describe the GOBI child-survival interventions."
    ],
    assessment: [
      { type: "mcq", q: "Exclusive breastfeeding is recommended for the first:", options: ["6 weeks", "3 months", "6 months", "12 months"], answer: 2, rationale: "WHO recommends exclusive breastfeeding for the first six months of life." },
      { type: "mcq", q: "Which is a danger sign in pregnancy requiring urgent care?", options: ["Mild morning sickness in the first weeks", "Vaginal bleeding", "Slight tiredness", "Increased appetite"], answer: 1, rationale: "Vaginal bleeding is a recognised danger sign in pregnancy." },
      { type: "mcq", q: "The 'three cleans' of safe delivery are clean hands, clean surface and clean:", options: ["clothes", "cord care", "water only", "room"], answer: 1, rationale: "The three cleans are clean hands, clean delivery surface and clean cord care." },
      { type: "mcq", q: "The neonatal period covers the first ____ days of life.", options: ["7", "14", "28", "42"], answer: 2, rationale: "The neonatal (newborn) period is the first 28 days of life." },
      { type: "mcq", q: "Breastfeeding should ideally be initiated within the first ____ after birth.", options: ["hour", "day", "week", "month"], answer: 0, rationale: "Early initiation of breastfeeding within the first hour is recommended." },
      { type: "mcq", q: "Regular weighing of a child using a growth chart is called:", options: ["Immunisation", "Growth monitoring", "Rehydration", "Deworming"], answer: 1, rationale: "Plotting weight on a growth chart is growth monitoring." },
      { type: "mcq", q: "ORS and zinc are used in the management of childhood:", options: ["Pneumonia", "Diarrhoea", "Measles", "Anaemia"], answer: 1, rationale: "Oral rehydration solution and zinc treat diarrhoea." },
      { type: "mcq", q: "IMCI stands for Integrated Management of:", options: ["Childhood Illness", "Chronic Infection", "Community Immunisation", "Critical Injury"], answer: 0, rationale: "IMCI = Integrated Management of Childhood Illness." },
      { type: "mcq", q: "The 'I' in the GOBI child-survival strategy stands for:", options: ["Iron", "Immunisation", "Iodine", "Infection"], answer: 1, rationale: "GOBI = Growth monitoring, Oral rehydration, Breastfeeding, Immunisation." },
      { type: "mcq", q: "Swelling of the face and hands with high blood pressure in pregnancy suggests:", options: ["Normal pregnancy", "Pre-eclampsia", "Anaemia", "Diabetes"], answer: 1, rationale: "Facial/hand oedema with raised blood pressure suggests pre-eclampsia." }
      , { type: "fill", q: "Care of the mother during pregnancy is called ____ care.", accept: ["antenatal", "prenatal"], rationale: "Antenatal (prenatal) care is given during pregnancy." }
      , { type: "fill", q: "The solution given to treat dehydration from diarrhoea is ____ (abbreviation).", accept: ["ORS", "oral rehydration solution"], rationale: "ORS replaces fluid and salts lost in diarrhoea." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "chn-11-family-planning",
    unit: "Unit 3 · Family & Maternal-Child Health",
    title: "Family Planning & Contraception",
    readMinutes: 15,
    summary: "The concept and benefits of family planning, spacing versus limiting methods, the main temporary and permanent contraceptive methods, and counselling and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is family planning?", p: "Family planning is the way couples plan and decide the number and spacing of their children, using safe and acceptable methods of contraception, so that every child is wanted and the mother's and family's health are protected. It is a voluntary, informed decision and a basic component of primary health care and reproductive health." },
      { h: "Benefits of family planning", list: [
        "Protects the health of the mother by spacing births (at least about two to three years apart).",
        "Improves child health and survival by allowing adequate care and breastfeeding.",
        "Reduces maternal and infant deaths and unsafe abortions.",
        "Helps families care for and educate their children.",
        "Slows rapid population growth, supporting national development."
      ] },
      { h: "Classification of methods", p: "Contraceptive methods are broadly of two kinds: temporary (spacing) methods that can be stopped when another child is wanted, and permanent (terminal) methods for couples who want no more children.", figure: {
        caption: "Classification of contraceptive methods.",
        svg: '<svg viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree classifying contraceptive methods into temporary and permanent."><rect x="170" y="12" width="160" height="34" rx="8" fill="#7C2D12"/><text x="250" y="34" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Contraceptive methods</text><rect x="40" y="80" width="170" height="34" rx="8" fill="#B45309"/><text x="125" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Temporary (spacing)</text><rect x="290" y="80" width="170" height="34" rx="8" fill="#B45309"/><text x="375" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Permanent (terminal)</text><line x1="250" y1="46" x2="125" y2="78" stroke="#7C2D12" stroke-width="2"/><line x1="250" y1="46" x2="375" y2="78" stroke="#7C2D12" stroke-width="2"/><rect x="20" y="140" width="210" height="58" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="125" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Pills, condoms, IUCD,</text><text x="125" y="176" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">injectables, implants,</text><text x="125" y="192" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">natural methods</text><rect x="290" y="140" width="170" height="58" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="375" y="166" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Vasectomy (male),</text><text x="375" y="184" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">tubectomy (female)</text></svg>'
      } },
      { h: "Temporary (spacing) methods", list: [
        "Barrier methods — condoms (also protect against sexually transmitted infections) and the diaphragm.",
        "Oral contraceptive pills — combined and progestogen-only pills, taken daily.",
        "Injectable contraceptives — given every few months.",
        "Implants — small rods placed under the skin, lasting several years.",
        "Intrauterine contraceptive device (IUCD) — placed in the uterus, lasting several years.",
        "Natural methods — calendar/rhythm, lactational amenorrhoea (LAM) and withdrawal — less reliable."
      ] },
      { h: "Permanent (terminal) methods", p: "Permanent methods are surgical and are chosen by couples who have completed their family. Tubectomy (female sterilisation) closes the fallopian tubes; vasectomy (male sterilisation) closes the vas deferens. Vasectomy is simpler and safer than tubectomy. Both are highly effective and should be undertaken only with full, informed and voluntary consent." },
      { h: "Emergency contraception", p: "Emergency contraception (emergency contraceptive pills, or an IUCD) can prevent pregnancy after unprotected intercourse when taken within the recommended short time. It is for emergency use only — for example after a missed method or assault — and is not a regular method." },
      { h: "Eligibility, choice and side-effects", p: "There is no single 'best' method; the right method depends on the couple's age, number of children, health, and wishes. The nurse must know the benefits, limitations and common side-effects of each method, screen for any conditions that make a method unsuitable, and respect the couple's free and informed choice without pressure." },
      { h: "Counselling and the nurse's role", list: [
        "Give clear, correct information on all available methods (the GATHER approach to counselling).",
        "Help the couple make a free, informed choice — no coercion.",
        "Teach correct and consistent use, and what to do about side-effects.",
        "Provide methods and ensure resupply and follow-up.",
        "Maintain privacy, confidentiality and a non-judgmental attitude.",
        "Promote dual protection against both pregnancy and sexually transmitted infections."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define family planning and state its benefits.",
      "Classify the methods of contraception with examples.",
      "Differentiate between temporary and permanent methods of contraception.",
      "Describe the temporary (spacing) methods of family planning.",
      "Explain the role of the nurse in family-planning counselling."
    ],
    assessment: [
      { type: "mcq", q: "Family planning helps couples decide the number and ____ of their children.", options: ["names", "spacing", "weight", "school"], answer: 1, rationale: "Family planning concerns the number and spacing of children." },
      { type: "mcq", q: "Which is a permanent (terminal) method of contraception?", options: ["Oral pill", "Condom", "IUCD", "Tubectomy"], answer: 3, rationale: "Tubectomy (and vasectomy) are permanent surgical methods." },
      { type: "mcq", q: "Which method also protects against sexually transmitted infections?", options: ["Oral pill", "Condom", "IUCD", "Injectable"], answer: 1, rationale: "Condoms provide dual protection — against pregnancy and STIs." },
      { type: "mcq", q: "Vasectomy is the permanent method performed on the:", options: ["Female", "Male", "Newborn", "Adolescent girl"], answer: 1, rationale: "Vasectomy is male sterilisation; tubectomy is female sterilisation." },
      { type: "mcq", q: "An IUCD is placed in the:", options: ["Vagina", "Uterus", "Vas deferens", "Stomach"], answer: 1, rationale: "The intrauterine contraceptive device is placed within the uterus." },
      { type: "mcq", q: "Emergency contraceptive pills should be taken:", options: ["Every day as a routine method", "Within the recommended short time after unprotected sex", "Only during menstruation", "After confirmed pregnancy"], answer: 1, rationale: "Emergency contraception is taken soon after unprotected intercourse, for emergency use only." },
      { type: "mcq", q: "Recommended birth spacing for the health of mother and child is at least about:", options: ["3 months", "6 months", "1 year", "2–3 years"], answer: 3, rationale: "A spacing of at least two to three years protects maternal and child health." },
      { type: "mcq", q: "Which is a natural (fertility-awareness) method of contraception?", options: ["Implant", "Calendar/rhythm method", "Injectable", "Tubectomy"], answer: 1, rationale: "The calendar/rhythm method is a natural family-planning method." },
      { type: "mcq", q: "The most important principle in choosing a family-planning method is:", options: ["The cheapest method always", "Free and informed choice by the couple", "The nurse decides alone", "The newest method always"], answer: 1, rationale: "Method choice must be voluntary and based on informed consent." },
      { type: "mcq", q: "Small rods placed under the skin that prevent pregnancy for several years are:", options: ["Condoms", "Implants", "Pills", "Diaphragms"], answer: 1, rationale: "Contraceptive implants are placed under the skin and last several years." }
      , { type: "fill", q: "Female permanent sterilisation by closing the fallopian tubes is called ____.", accept: ["tubectomy", "tubal ligation"], rationale: "Tubectomy is female surgical sterilisation." }
      , { type: "fill", q: "Methods that can be stopped when another child is wanted are called ____ methods.", accept: ["temporary", "spacing"], rationale: "Temporary (spacing) methods are reversible." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "chn-12-school-occupational-health",
    unit: "Unit 3 · Family & Maternal-Child Health",
    title: "School Health & Occupational Health",
    readMinutes: 15,
    summary: "The aims and components of the school health programme and the role of the school nurse, and the principles of occupational health, common occupational hazards and their prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "School health — meaning and importance", p: "School health services are the part of community health that looks after the health of school-age children and adolescents. School children are a large, reachable group at an age when health habits are formed, so the school is an ideal place for health promotion, early detection of problems and health education that children carry home to their families." },
      { h: "Aims of the school health programme", list: [
        "Promote the physical, mental and social health of school children.",
        "Detect and treat health problems early through screening.",
        "Prevent communicable disease in the school.",
        "Create a safe and healthy school environment.",
        "Teach health knowledge and good habits.",
        "Establish a health record for each child."
      ] },
      { h: "Components of the school health programme", list: [
        "Health appraisal (screening) — periodic checks of vision, hearing, teeth, growth (height and weight) and general health.",
        "Remedial measures and follow-up — treatment or referral of problems found.",
        "Prevention of communicable disease — immunisation, early detection and exclusion of infectious cases.",
        "Healthful school environment — safe water, sanitation, lighting, ventilation and a clean compound.",
        "Nutritional services — mid-day meals, nutrition education and deworming.",
        "Health education — teaching hygiene, nutrition, safety and life skills.",
        "First aid and emergency care, and maintenance of health records."
      ] },
      { h: "Common health problems of school children", p: "These include malnutrition and anaemia, dental caries, defects of vision and hearing, worm infestations, skin and respiratory infections, and behavioural or learning difficulties. The school nurse screens for these and arranges treatment or referral." },
      { h: "Role of the school nurse", list: [
        "Conducting health screening and keeping records.",
        "Giving immunisations and first aid.",
        "Health education for pupils, teachers and parents.",
        "Inspecting the school environment for safety and hygiene.",
        "Referring children who need medical or dental care and following them up.",
        "Counselling adolescents on health, hygiene and life skills."
      ] },
      { h: "Occupational health — meaning", p: "Occupational health aims to promote and maintain the highest degree of physical, mental and social well-being of workers in all occupations, to prevent ill health caused by working conditions, and to place workers in jobs suited to their abilities. It protects workers from hazards arising from their work." },
      { h: "Occupational hazards", p: "Hazards at work are grouped by their nature.", list: [
        "Physical — heat, cold, noise, vibration, radiation, poor lighting (causing deafness, heat stroke, injuries).",
        "Chemical — dusts, fumes, gases, solvents and metals (causing poisoning, lung disease, dermatitis).",
        "Biological — bacteria, viruses and parasites (causing infections in health, farm and animal workers).",
        "Mechanical — machinery and tools (causing accidents and injuries).",
        "Psychosocial — stress, long hours, shift work and job insecurity."
      ], figure: {
        caption: "The five groups of occupational hazards.",
        svg: '<svg viewBox="0 0 510 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five boxes naming physical, chemical, biological, mechanical and psychosocial hazards."><rect x="8" y="35" width="92" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="54" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Physical</text><rect x="108" y="35" width="92" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="154" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Chemical</text><rect x="208" y="35" width="92" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="254" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Biological</text><rect x="308" y="35" width="96" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="356" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Mechanical</text><rect x="412" y="35" width="92" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="458" y="58" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">Psycho-</text><text x="458" y="70" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">social</text></svg>'
      } },
      { h: "Prevention of occupational hazards", list: [
        "Pre-employment and periodic medical examination of workers.",
        "Engineering control — safe design, ventilation, enclosure and guarding of machines.",
        "Personal protective equipment — gloves, masks, ear plugs, goggles, helmets.",
        "Safe work practices, training and limiting exposure time.",
        "Good factory environment — lighting, sanitation and welfare facilities.",
        "Health education and enforcement of safety laws and standards."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "State the aims of the school health programme.",
      "Describe the components of the school health programme.",
      "Explain the role of the school nurse.",
      "Define occupational health and classify occupational hazards.",
      "Describe the measures to prevent occupational health hazards."
    ],
    assessment: [
      { type: "mcq", q: "Periodic checking of pupils' vision, hearing and growth is called:", options: ["Health appraisal (screening)", "First aid", "Immunisation", "Counselling"], answer: 0, rationale: "Health appraisal/screening detects problems early in school children." },
      { type: "mcq", q: "Which is a common health problem of school children?", options: ["Dental caries", "Osteoporosis", "Cataract", "Parkinson's disease"], answer: 0, rationale: "Dental caries is common among school children." },
      { type: "mcq", q: "Noise-induced deafness in a worker is which type of occupational hazard?", options: ["Chemical", "Physical", "Biological", "Psychosocial"], answer: 1, rationale: "Noise is a physical hazard." },
      { type: "mcq", q: "Dust and fumes causing lung disease in workers are which type of hazard?", options: ["Physical", "Chemical", "Mechanical", "Psychosocial"], answer: 1, rationale: "Dusts, fumes and gases are chemical hazards." },
      { type: "mcq", q: "Ear plugs, gloves and goggles are examples of:", options: ["Engineering control", "Personal protective equipment", "Medical examination", "Health records"], answer: 1, rationale: "These are personal protective equipment (PPE)." },
      { type: "mcq", q: "Infection acquired by a health worker from patients is which occupational hazard?", options: ["Physical", "Chemical", "Biological", "Mechanical"], answer: 2, rationale: "Infections from microbes are biological hazards." },
      { type: "mcq", q: "A healthful school environment includes safe water, sanitation and good:", options: ["ventilation and lighting", "television", "furniture brand", "wall colour"], answer: 0, rationale: "Ventilation, lighting and cleanliness make a healthful school environment." },
      { type: "mcq", q: "Stress, long hours and shift work are which type of occupational hazard?", options: ["Physical", "Chemical", "Psychosocial", "Biological"], answer: 2, rationale: "Stress and work organisation problems are psychosocial hazards." },
      { type: "mcq", q: "Examination of a worker before joining the job is called:", options: ["Post-mortem", "Pre-employment examination", "Census", "Notification"], answer: 1, rationale: "Pre-employment examination assesses fitness before starting work." },
      { type: "mcq", q: "School health is important partly because children:", options: ["Cannot learn health habits", "Carry health messages home to their families", "Do not get sick", "Are too old to change habits"], answer: 1, rationale: "Children take health knowledge home, multiplying its effect." }
      , { type: "fill", q: "Guarding machines and improving ventilation to reduce hazards is called ____ control.", accept: ["engineering"], rationale: "Engineering control modifies the workplace to reduce hazards." }
      , { type: "fill", q: "Deafness from continuous loud sound at work is caused by the physical hazard of ____.", accept: ["noise"], rationale: "Noise is a physical occupational hazard causing deafness." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "chn-13-environmental-health",
    unit: "Unit 4 · Environment & Community Practice",
    title: "Environmental Health — Safe Water, Sanitation & Waste Disposal",
    readMinutes: 16,
    summary: "The meaning of environmental health, safe water and methods of purification, sanitation and safe excreta disposal, refuse and waste management including biomedical waste, and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is environmental health?", p: "Environmental health is the branch of public health concerned with all the physical, chemical and biological factors outside a person that can affect health, and with controlling them to prevent disease and create healthy surroundings. It includes safe water, sanitation, clean air, healthful housing, waste disposal and control of noise and pollution." },
      { h: "Safe and wholesome water", p: "Safe (wholesome) water is water that is free from disease-causing organisms and harmful chemicals, clear, colourless, odourless and pleasant to drink. Unsafe water spreads many diseases. Sources of water are rain, surface water (rivers, ponds, lakes) and ground water (wells, tube-wells); ground water is usually safer than surface water." },
      { h: "Water-related diseases", p: "Contaminated water spreads water-borne diseases such as cholera, typhoid, hepatitis A and E, diarrhoea, dysentery and worm infestations. In some areas, ground water also carries chemical hazards such as arsenic. Providing safe water is therefore one of the most important preventive measures in a community." },
      { h: "Purification of water", p: "Water can be purified on a large scale (for a town) or in the home.", list: [
        "Large-scale: storage (allows sedimentation), filtration (slow sand or rapid sand filters), and disinfection (usually chlorination).",
        "Household: boiling (the surest method — rolling boil), chlorination (chlorine tablets or solution), filtration (ceramic/cloth filters), and solar disinfection (SODIS).",
        "Special: arsenic-removal methods where ground water is contaminated."
      ], figure: {
        caption: "Large-scale water purification: storage, filtration and disinfection.",
        svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three stages of water purification: storage, filtration, chlorination."><defs><marker id="chnArr13" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="20" y="38" width="120" height="50" rx="10" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="80" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Storage</text><text x="80" y="77" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">sedimentation</text><rect x="190" y="38" width="120" height="50" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="250" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Filtration</text><text x="250" y="77" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">sand filters</text><rect x="360" y="38" width="120" height="50" rx="10" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="420" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Disinfection</text><text x="420" y="77" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">chlorination</text><line x1="140" y1="63" x2="188" y2="63" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#chnArr13)"/><line x1="310" y1="63" x2="358" y2="63" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#chnArr13)"/></svg>'
      } },
      { h: "Sanitation and excreta disposal", p: "Sanitation means the safe management of human waste, refuse and the environment to prevent disease. Safe disposal of human excreta is essential because faeces spread the faecal–oral diseases. Sanitary latrines (such as the sanitary pit latrine and the water-seal pour-flush latrine) keep excreta away from water, food, hands and flies — the principles often remembered as keeping faeces away from these routes of spread." },
      { h: "Refuse and waste disposal", p: "Refuse (solid waste) includes household rubbish, street sweepings and market and industrial waste. If not managed it breeds flies, rats and disease and pollutes water and air. Methods of solid-waste disposal include controlled tipping (sanitary land-fill), composting (turning organic waste into manure), incineration (burning) and, increasingly, reduce–reuse–recycle. Liquid waste (sewage and sullage) needs safe drainage and treatment." },
      { h: "Biomedical (health-care) waste", p: "Waste from hospitals and clinics — used needles and syringes, dressings, body fluids and laboratory waste — is dangerous because it can spread infection and injure people. It must be segregated at source into colour-coded bins, handled with care, and treated safely (sharps in puncture-proof containers; infectious waste autoclaved or incinerated). The nurse has a direct responsibility for safe waste segregation and sharps disposal." },
      { h: "The nurse's role in environmental health", list: [
        "Teaching families to use safe water and to purify water at home (boiling, chlorination).",
        "Promoting the use of sanitary latrines and hand-washing.",
        "Encouraging safe disposal of refuse and household waste.",
        "Practising and teaching correct biomedical waste segregation and sharps safety.",
        "Identifying environmental hazards and working with the community to remove them."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define environmental health and list its components.",
      "What is safe water? Describe the methods of water purification.",
      "Explain the importance of safe disposal of human excreta.",
      "Describe the methods of solid (refuse) waste disposal.",
      "Explain the safe management of biomedical waste and the nurse's role."
    ],
    assessment: [
      { type: "mcq", q: "The surest household method of purifying drinking water is:", options: ["Adding sugar", "Boiling", "Keeping in sunlight only", "Stirring"], answer: 1, rationale: "Boiling (rolling boil) is the most reliable household method of purification." },
      { type: "mcq", q: "Which disease is spread mainly through contaminated water?", options: ["Cholera", "Tuberculosis", "Tetanus", "Measles"], answer: 0, rationale: "Cholera is a classic water-borne disease." },
      { type: "mcq", q: "The chemical commonly used to disinfect public water supplies is:", options: ["Chlorine", "Iron", "Calcium", "Sodium"], answer: 0, rationale: "Chlorination is the usual method of disinfecting piped water." },
      { type: "mcq", q: "Turning organic solid waste into manure is called:", options: ["Incineration", "Composting", "Chlorination", "Filtration"], answer: 1, rationale: "Composting converts organic waste into useful manure." },
      { type: "mcq", q: "Used needles and syringes should be disposed of in:", options: ["An open dustbin", "The toilet", "A paper bag", "A puncture-proof sharps container"], answer: 3, rationale: "Sharps must go into puncture-proof containers to prevent injury and infection." },
      { type: "mcq", q: "Ground water in some areas of Bangladesh may be contaminated with the chemical:", options: ["Arsenic", "Vitamin C", "Glucose", "Oxygen"], answer: 0, rationale: "Arsenic contamination of ground water is a known problem in parts of Bangladesh." },
      { type: "mcq", q: "Safe disposal of human excreta mainly prevents:", options: ["Faecal–oral diseases", "Fractures", "Hypertension", "Cataract"], answer: 0, rationale: "Safe excreta disposal interrupts the faecal–oral spread of disease." },
      { type: "mcq", q: "Controlled tipping of refuse into the ground is also called:", options: ["Sanitary land-fill", "Composting", "Recycling", "Incineration"], answer: 0, rationale: "Controlled tipping is the same as sanitary land-fill." },
      { type: "mcq", q: "In large-scale water treatment, sand filters carry out the process of:", options: ["Storage", "Filtration", "Disinfection", "Chlorination"], answer: 1, rationale: "Sand filters perform the filtration stage of purification." },
      { type: "mcq", q: "Biomedical waste should first be:", options: ["Mixed with all other waste", "Segregated at the point of generation", "Thrown in the river", "Buried with food waste"], answer: 1, rationale: "Segregation at source into colour-coded bins is the first step of biomedical waste management." }
      , { type: "fill", q: "Water that is free from harmful germs and chemicals and safe to drink is called ____ water.", accept: ["safe", "wholesome", "potable"], rationale: "Safe/wholesome (potable) water is fit for drinking." }
      , { type: "fill", q: "Burning of waste at high temperature to destroy it is called ____.", accept: ["incineration"], rationale: "Incineration destroys waste by controlled burning." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "chn-14-demography-statistics",
    unit: "Unit 4 · Environment & Community Practice",
    title: "Demography & Vital / Health Statistics",
    readMinutes: 14,
    summary: "The meaning of demography and the demographic cycle, vital statistics and their sources, common health indicators (birth, death, fertility and growth rates), and the use of statistics in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is demography?", p: "Demography is the scientific study of human populations — their size, composition (age and sex), distribution, and the changes brought about by births, deaths and migration. It tells the community health nurse who the people are, how many there are, and how the population is changing, which is essential for planning services." },
      { h: "The demographic cycle", p: "Populations pass through stages as a country develops, known as the demographic cycle or transition: a high stationary stage (high birth and death rates), an early expanding stage (death rate falls, birth rate stays high — rapid growth), a late expanding stage (birth rate begins to fall), a low stationary stage (low birth and death rates), and a declining stage (death rate exceeds birth rate). Bangladesh is in the expanding phase, with falling but still significant growth." },
      { h: "Population pyramid", p: "A population pyramid is a graph that shows the age and sex structure of a population. A broad-based pyramid means many children and a young, fast-growing population (typical of developing countries); a narrow-based pyramid means an ageing population. The shape guides what health services are most needed." },
      { h: "Vital statistics", p: "Vital statistics are the numerical records of vital events in a population — births, deaths, marriages, divorces, and migration. They are 'vital' because they mark the key events of life. Reliable vital statistics are the foundation of community health planning and evaluation." },
      { h: "Sources of health statistics", list: [
        "Census — the complete counting of the whole population, usually every ten years.",
        "Civil registration — continuous recording of births and deaths as they happen.",
        "Sample surveys — studying a representative sample to estimate facts about the whole population.",
        "Notification of diseases and hospital/clinic records.",
        "Records kept by health workers (family folders, registers, reports)."
      ] },
      { h: "Common health indicators", p: "A few key rates summarise the health of a population.", list: [
        "Crude Birth Rate (CBR) — live births in a year ÷ mid-year population × 1,000.",
        "Crude Death Rate (CDR) — deaths in a year ÷ mid-year population × 1,000.",
        "Total Fertility Rate (TFR) — the average number of children a woman would have in her lifetime.",
        "Infant Mortality Rate (IMR) — deaths under 1 year ÷ live births × 1,000 (a sensitive indicator).",
        "Maternal Mortality Ratio (MMR) — maternal deaths ÷ live births × 100,000.",
        "Natural growth rate — the difference between the birth rate and the death rate."
      ], figure: {
        caption: "Natural growth of a population = birth rate minus death rate (ignoring migration).",
        svg: '<svg viewBox="0 0 470 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Equation: birth rate minus death rate equals natural growth rate."><rect x="15" y="35" width="120" height="44" rx="9" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="75" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Birth rate</text><text x="155" y="64" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#B45309">−</text><rect x="180" y="35" width="120" height="44" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="240" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Death rate</text><text x="320" y="64" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#B45309">=</text><rect x="345" y="35" width="120" height="44" rx="9" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="405" y="58" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Natural</text><text x="405" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">growth rate</text></svg>'
      } },
      { h: "Uses of vital and health statistics", list: [
        "To measure the level of health and disease in the community.",
        "To identify health problems and groups at risk.",
        "To plan, set targets for, and allocate resources to health programmes.",
        "To monitor and evaluate the success of programmes.",
        "To carry out research and to inform health policy."
      ] },
      { h: "The nurse and health statistics", p: "The community health nurse is both a collector and a user of statistics. By keeping accurate registers and reports — births, deaths, immunisations, antenatal visits and disease notifications — the nurse provides the raw data; by reading simple rates and trends, the nurse identifies problems and judges whether her work is succeeding. Accuracy and honesty in record-keeping are therefore vital." }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define demography and describe the demographic cycle.",
      "What are vital statistics? List their sources.",
      "Define crude birth rate, crude death rate and infant mortality rate.",
      "Explain the uses of vital and health statistics in community health.",
      "Describe the role of the nurse in collecting health statistics."
    ],
    assessment: [
      { type: "mcq", q: "Demography is the study of:", options: ["Human populations", "Soil and rocks", "Stars and planets", "Plant diseases"], answer: 0, rationale: "Demography studies the size, structure and change of human populations." },
      { type: "mcq", q: "The complete counting of the whole population, usually every ten years, is the:", options: ["Survey", "Census", "Notification", "Registration"], answer: 1, rationale: "A census is the periodic complete enumeration of the population." },
      { type: "mcq", q: "Births, deaths and marriages are recorded as:", options: ["Vital statistics", "Hospital bills", "Census maps", "Stock records"], answer: 0, rationale: "These vital events make up vital statistics." },
      { type: "mcq", q: "The crude birth rate is usually expressed per:", options: ["100 population", "1,000 population", "100,000 live births", "10 population"], answer: 1, rationale: "CBR = live births ÷ mid-year population × 1,000." },
      { type: "mcq", q: "The most sensitive single indicator of the health of a community is the:", options: ["Crude death rate", "Infant mortality rate", "Marriage rate", "Literacy rate"], answer: 1, rationale: "IMR is regarded as a sensitive index of overall community health." },
      { type: "mcq", q: "Natural growth rate of a population is the birth rate minus the:", options: ["Death rate", "Migration rate", "Marriage rate", "Fertility rate"], answer: 0, rationale: "Natural growth = birth rate − death rate (excluding migration)." },
      { type: "mcq", q: "A broad-based population pyramid indicates a population that is:", options: ["Old and shrinking", "Young and fast-growing", "Equal at all ages", "All elderly"], answer: 1, rationale: "A wide base means many children — a young, growing population." },
      { type: "mcq", q: "The average number of children a woman would bear in her lifetime is the:", options: ["Crude birth rate", "Total fertility rate", "Infant mortality rate", "Death rate"], answer: 1, rationale: "Total fertility rate (TFR) is the lifetime average number of children per woman." },
      { type: "mcq", q: "Continuous recording of births and deaths as they occur is called:", options: ["Civil registration", "Census", "Incidence", "Quarantine"], answer: 0, rationale: "Civil (vital) registration records events continuously as they happen." },
      { type: "mcq", q: "The maternal mortality ratio is usually expressed per:", options: ["1,000 population", "100,000 live births", "100 mothers", "10,000 deaths"], answer: 1, rationale: "MMR = maternal deaths ÷ live births × 100,000." }
      , { type: "fill", q: "The stage-by-stage change of a population as a country develops is the demographic ____.", accept: ["cycle", "transition"], rationale: "This is the demographic cycle/transition." }
      , { type: "fill", q: "A graph showing the age and sex structure of a population is a population ____.", accept: ["pyramid"], rationale: "The population pyramid displays age–sex structure." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "chn-15-health-education",
    unit: "Unit 4 · Environment & Community Practice",
    title: "Health Education & Communication",
    readMinutes: 15,
    summary: "The aims and principles of health education, the communication process and its barriers, methods and media of health education, and how to plan a health-education session.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is health education?", p: "Health education is the process of helping people to learn about health so that they willingly change their behaviour towards better health. It is not just giving information; its goal is a change in knowledge, attitude and practice (KAP) that the person adopts of their own free will. It is one of the most important and constant tasks of the community health nurse." },
      { h: "Aims of health education", list: [
        "To make health a valued community asset.",
        "To give correct knowledge about health and disease.",
        "To change attitudes and encourage healthy behaviour and habits.",
        "To help people make their own decisions and take responsibility for their health.",
        "To promote the proper use of available health services."
      ] },
      { h: "Principles of health education", list: [
        "Start from felt needs and the people's existing knowledge.",
        "Set clear, realistic objectives.",
        "Use simple, local language the audience understands.",
        "Involve and gain the active participation of learners.",
        "Proceed from known to unknown and simple to complex.",
        "Reinforce and repeat the message; use more than one method.",
        "Be credible, consistent and lead by good example."
      ] },
      { h: "The communication process", p: "Health education works through communication. The basic elements are the sender (source), the message, the channel (the way the message travels), the receiver (audience), and feedback (the receiver's response). Good communication is a two-way process: feedback tells the sender whether the message was understood.", figure: {
        caption: "The communication process: sender → message → channel → receiver, with feedback returning.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication model showing sender, message, channel, receiver and feedback loop."><defs><marker id="chnArr15" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="10" y="35" width="95" height="42" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="57" y="61" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Sender</text><rect x="135" y="35" width="95" height="42" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="182" y="61" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Message</text><rect x="260" y="35" width="95" height="42" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="307" y="61" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Channel</text><rect x="385" y="35" width="95" height="42" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="432" y="61" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Receiver</text><line x1="105" y1="56" x2="133" y2="56" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr15)"/><line x1="230" y1="56" x2="258" y2="56" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr15)"/><line x1="355" y1="56" x2="383" y2="56" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr15)"/><path d="M432 77 L432 120 L57 120 L57 79" fill="none" stroke="#B45309" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#chnArr15)"/><text x="245" y="136" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">feedback</text></svg>'
      } },
      { h: "Barriers to communication", p: "Messages can fail because of barriers: physiological (deafness, poor sight), psychological (fear, prejudice, low interest), environmental (noise, distance), cultural (language, beliefs, taboos) and the use of difficult words or too much information at once. The nurse must recognise and reduce these barriers." },
      { h: "Methods of health education", p: "Methods are chosen to suit the audience.", list: [
        "Individual methods — personal talks, counselling, home visits (most personal and effective for behaviour change).",
        "Group methods — lectures, demonstrations, group discussions, role play, panel discussions, workshops (good for a target group, e.g. mothers).",
        "Mass methods — television, radio, newspapers, posters, films, social media (reach large numbers quickly but with little feedback)."
      ] },
      { h: "Media / audio-visual aids", list: [
        "Auditory aids — radio, microphone, audio recordings.",
        "Visual aids — posters, charts, flip charts, flannelgraph, models, real objects, blackboard.",
        "Audio-visual aids — television, films, videos, computer/projector presentations.",
        "Good aids make the message clearer, hold attention and aid memory."
      ] },
      { h: "Planning a health-education session", p: "A planned session is more effective. Steps are: assess the audience and their needs; set clear objectives; select the content, method and media; arrange the time and place; deliver the session using simple language and aids and encouraging participation; and finally evaluate whether the objectives were met (through questions, observation or change in practice). For formal teaching, the nurse prepares a written lesson plan." }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define health education and state its aims.",
      "Explain the principles of health education.",
      "Describe the elements of the communication process with a diagram.",
      "Discuss the methods and media of health education.",
      "Describe the steps in planning a health-education session."
    ],
    assessment: [
      { type: "mcq", q: "The main goal of health education is a change in the people's:", options: ["Income", "Behaviour (knowledge, attitude and practice)", "Address", "Language"], answer: 1, rationale: "Health education aims at voluntary change in knowledge, attitude and practice." },
      { type: "mcq", q: "The response of the receiver that tells the sender if the message was understood is called:", options: ["Channel", "Noise", "Source", "Feedback"], answer: 3, rationale: "Feedback makes communication a two-way process." },
      { type: "mcq", q: "Which is an individual method of health education?", options: ["Television advertisement", "Counselling", "Radio broadcast", "Newspaper"], answer: 1, rationale: "Counselling is a personal, individual method." },
      { type: "mcq", q: "Which is a mass method of health education?", options: ["Home visit", "Television", "Personal counselling", "Bedside teaching"], answer: 1, rationale: "Television reaches large numbers — a mass method." },
      { type: "mcq", q: "A good principle of health education is to use:", options: ["Difficult technical words", "Simple local language", "Only English", "Long lectures only"], answer: 1, rationale: "Messages should be in simple language the audience understands." },
      { type: "mcq", q: "A poster is an example of which type of aid?", options: ["Auditory aid", "Visual aid", "Audio-visual aid", "Tactile aid"], answer: 1, rationale: "A poster is a visual aid." },
      { type: "mcq", q: "Health education should proceed from:", options: ["Unknown to known", "Complex to simple", "Known to unknown", "End to beginning"], answer: 2, rationale: "Teaching moves from known to unknown and simple to complex." },
      { type: "mcq", q: "Fear, prejudice and lack of interest are which type of barrier to communication?", options: ["Physiological", "Psychological", "Environmental", "Mechanical"], answer: 1, rationale: "These are psychological barriers." },
      { type: "mcq", q: "The first step in planning a health-education session is to:", options: ["Evaluate", "Assess the audience and their needs", "Give a certificate", "Distribute posters"], answer: 1, rationale: "Planning begins with assessing the audience and their needs." },
      { type: "mcq", q: "Which method of health education usually gives the best feedback?", options: ["Television", "Radio", "Individual/face-to-face", "Newspaper"], answer: 2, rationale: "Face-to-face individual methods allow the most feedback." }
      , { type: "fill", q: "Health education aims to change knowledge, attitude and ____.", accept: ["practice", "behaviour", "behavior"], rationale: "The KAP model — knowledge, attitude and practice." }
      , { type: "fill", q: "In the communication process, the way the message travels from sender to receiver is the ____.", accept: ["channel", "medium"], rationale: "The channel/medium carries the message." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "chn-16-national-programmes",
    unit: "Unit 4 · Environment & Community Practice",
    title: "National Health Programmes of Bangladesh",
    readMinutes: 15,
    summary: "The purpose of national health programmes, the sector-wide HNPSP/HPNSP approach, and the major disease-control, MCH, nutrition and population programmes in which the nurse takes part.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are national health programmes?", p: "National health programmes are organised, country-wide efforts, planned and funded by the government (often with partners), to control specific diseases or to improve particular areas of health such as immunisation, maternal and child health, nutrition and family planning. They turn health policy into action and are mostly delivered at community level — where the nurse works." },
      { h: "The sector-wide approach (HNPSP / HPNSP)", p: "Rather than running many separate projects, Bangladesh organises health under a single sector-wide programme covering Health, Population and Nutrition. Successive programmes — for example the Health, Nutrition and Population Sector Programme (HNPSP) and the later Health, Population and Nutrition Sector Development/Programme (HPNSP) — pool resources to strengthen services across the whole sector, with a strong focus on primary and community health care." },
      { h: "Expanded Programme on Immunization (EPI)", p: "EPI immunises infants, children and women of child-bearing age against the major vaccine-preventable diseases. It is one of Bangladesh's most successful programmes and a model of community delivery, run largely through fixed and outreach sessions staffed by health workers and nurses." },
      { h: "Communicable disease control programmes", list: [
        "National Tuberculosis Control Programme — finds and treats TB cases using DOTS (Directly Observed Treatment, Short-course), in which treatment is watched to ensure the full course is completed.",
        "Malaria and dengue (vector-borne disease) control — case management, vector control and community awareness.",
        "Leprosy elimination — case detection and multidrug therapy.",
        "National AIDS/STD programme — prevention, awareness and care for HIV and sexually transmitted infections.",
        "Control of diarrhoeal diseases and acute respiratory infection in children."
      ] },
      { h: "Maternal, child and reproductive health programmes", list: [
        "Maternal health / safe motherhood — antenatal care, skilled birth attendance and emergency obstetric care to reduce maternal deaths.",
        "Integrated Management of Childhood Illness (IMCI) — assessing and treating the sick child for the common killers together.",
        "National Newborn Health Programme — essential newborn care to reduce neonatal deaths.",
        "Adolescent and reproductive health services."
      ] },
      { h: "Nutrition programmes", list: [
        "National Nutrition Services — promotion of breastfeeding, complementary feeding and growth monitoring.",
        "Vitamin A supplementation — given to under-five children (National Vitamin A campaigns).",
        "Control of anaemia — iron and folic acid supplementation, especially for pregnant women.",
        "Control of iodine deficiency through universal salt iodisation.",
        "Control of vitamin and micronutrient deficiencies."
      ], figure: {
        caption: "Major areas covered by Bangladesh's national health programmes.",
        svg: '<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five boxes naming immunisation, communicable disease, MCH, nutrition and family planning programmes."><rect x="15" y="20" width="150" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="90" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Immunisation</text><text x="90" y="55" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">(EPI)</text><rect x="175" y="20" width="150" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="250" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Communicable</text><text x="250" y="55" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">disease control</text><rect x="335" y="20" width="150" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="410" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Maternal &amp;</text><text x="410" y="55" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">child health</text><rect x="95" y="90" width="150" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="170" y="117" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Nutrition</text><rect x="255" y="90" width="150" height="44" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="330" y="111" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Family planning</text><text x="330" y="126" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">&amp; population</text></svg>'
      } },
      { h: "Family planning and population programme", p: "The national family-planning programme provides contraceptive methods, counselling and MCH services through DGFP field workers and clinics, aiming to reduce the birth rate, space births and improve maternal and child health. It is one of the country's longest-running and most far-reaching programmes." },
      { h: "Other programmes and the SDGs", p: "Bangladesh also runs programmes for non-communicable disease prevention, mental health, eye care (blindness control), control of arsenic in drinking water, and school health. Today these programmes are aligned with the Sustainable Development Goals (SDGs), especially SDG 3 — 'good health and well-being for all at all ages' — which has replaced the earlier Millennium Development Goals as the global framework." },
      { h: "The nurse's role in national programmes", p: "The community health nurse is the front-line worker who delivers most of these programmes: giving immunisations, supervising DOTS, providing MCH and family-planning services, running growth monitoring and nutrition activities, educating the community, keeping the programme records and reports, and tracing defaulters so that targets are met." }
    ],
    references: REF_CHN,
    examQuestions: [
      "What are national health programmes? Why are they important?",
      "Explain the sector-wide approach (HNPSP/HPNSP) in Bangladesh.",
      "Describe the major communicable disease control programmes in Bangladesh.",
      "List the national nutrition programmes and the nurse's role in them.",
      "Discuss the role of the community health nurse in national health programmes."
    ],
    assessment: [
      { type: "mcq", q: "DOTS, used in tuberculosis control, stands for Directly Observed Treatment,:", options: ["Short-course", "Single-dose", "Self-administered", "Slow-release"], answer: 0, rationale: "DOTS = Directly Observed Treatment, Short-course." },
      { type: "mcq", q: "EPI is the national programme for:", options: ["Immunisation", "Road safety", "Banking", "Housing"], answer: 0, rationale: "EPI is the Expanded Programme on Immunization." },
      { type: "mcq", q: "Bangladesh organises its health services mainly through a:", options: ["Single sector-wide programme (HNPSP/HPNSP)", "Collection of unrelated private clinics", "Foreign army", "Stock exchange"], answer: 0, rationale: "A sector-wide approach pools resources across health, population and nutrition." },
      { type: "mcq", q: "Vitamin A supplementation under the nutrition programme mainly targets:", options: ["Under-five children", "The elderly", "Adult men", "University students"], answer: 0, rationale: "Vitamin A is given to under-five children to prevent deficiency and blindness." },
      { type: "mcq", q: "Universal salt iodisation is used to control:", options: ["Iron deficiency", "Iodine deficiency disorders", "Vitamin C deficiency", "Protein deficiency"], answer: 1, rationale: "Iodised salt prevents iodine deficiency disorders such as goitre." },
      { type: "mcq", q: "Which programme aims to reduce maternal deaths through skilled birth attendance?", options: ["Safe motherhood / maternal health", "Leprosy elimination", "Malaria control", "Blindness control"], answer: 0, rationale: "Safe motherhood focuses on antenatal care and skilled delivery." },
      { type: "mcq", q: "Family-planning field services are mainly delivered by workers of the:", options: ["DGFP", "Ministry of Finance", "Police", "Election Commission"], answer: 0, rationale: "The Directorate General of Family Planning runs field family-planning services." },
      { type: "mcq", q: "The current global framework to which Bangladesh's health programmes are aligned is the:", options: ["Sustainable Development Goals (SDGs)", "Cold War", "Industrial Revolution", "Green Revolution"], answer: 0, rationale: "The SDGs (especially SDG 3) now guide health goals." },
      { type: "mcq", q: "IMCI as a national strategy is aimed at the health of:", options: ["The sick child", "Factory machines", "Bank customers", "Soldiers"], answer: 0, rationale: "IMCI manages the common illnesses of the sick under-five child." },
      { type: "mcq", q: "A key role of the nurse in national programmes is:", options: ["Delivering services and keeping records", "Setting interest rates", "Building bridges", "Trading shares"], answer: 0, rationale: "Nurses deliver programme services and maintain their records." }
      , { type: "fill", q: "In tuberculosis control, treatment is watched directly under the strategy called ____.", accept: ["DOTS", "directly observed treatment short-course"], rationale: "DOTS ensures the full TB course is completed." }
      , { type: "fill", q: "Health goals today are guided by the Sustainable Development Goals, especially SDG ____ on health.", accept: ["3", "three"], rationale: "SDG 3 is 'good health and well-being'." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "chn-17-home-visit-process",
    unit: "Unit 4 · Environment & Community Practice",
    title: "Home Visit & the Community Health Nursing Process",
    readMinutes: 15,
    summary: "The purpose, principles and steps of the home visit, the bag technique, and the application of the nursing process (assessment to evaluation) to individuals, families and communities.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a home visit?", p: "A home visit is a planned visit by the community health nurse to a family in their own home, with a specific purpose. It is one of the most important tools of community health nursing because it lets the nurse see the family in its real environment, give care and health education on the spot, and build a trusting relationship with the family." },
      { h: "Purposes of the home visit", list: [
        "To give nursing care to a sick member at home.",
        "To assess the family's health needs and home environment.",
        "To provide health education suited to the family's situation.",
        "To follow up cases — antenatal and postnatal mothers, newborns, TB patients, defaulters.",
        "To promote health and prevent disease in the family.",
        "To establish a good nurse–family relationship and link the family to services."
      ] },
      { h: "Principles of the home visit", list: [
        "Each visit should have a clear, definite purpose.",
        "The visit is planned, but flexible to the family's needs.",
        "It is based on the family's needs, not the nurse's convenience alone.",
        "It respects the family's privacy, customs and right to make decisions.",
        "It makes use of available family and community resources.",
        "Records are kept and the next visit is planned."
      ] },
      { h: "Steps / phases of the home visit", p: "A home visit moves through clear phases.", list: [
        "Pre-visit (planning) — review the family record, set the purpose, prepare the bag and materials.",
        "Initiation — greet the family, explain the purpose and build rapport.",
        "Implementation — assess the situation, give the planned care and health education using the bag technique.",
        "Termination — summarise, give advice, plan the next visit and say goodbye.",
        "Post-visit — clean and replenish the bag, record the visit and findings, and plan follow-up."
      ], figure: {
        caption: "Phases of a home visit, from planning to recording.",
        svg: '<svg viewBox="0 0 540 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five phases of a home visit shown left to right."><defs><marker id="chnArr17" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="6" y="38" width="96" height="42" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="54" y="56" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Pre-visit</text><text x="54" y="70" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">plan</text><rect x="112" y="38" width="96" height="42" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="160" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Initiation</text><rect x="218" y="38" width="104" height="42" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="270" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Implementation</text><rect x="332" y="38" width="100" height="42" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="382" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Termination</text><rect x="442" y="38" width="92" height="42" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="488" y="56" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Post-visit</text><text x="488" y="70" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">record</text><line x1="102" y1="59" x2="110" y2="59" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr17)"/><line x1="208" y1="59" x2="216" y2="59" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr17)"/><line x1="322" y1="59" x2="330" y2="59" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr17)"/><line x1="432" y1="59" x2="440" y2="59" stroke="#7C2D12" stroke-width="2" marker-end="url(#chnArr17)"/></svg>'
      } },
      { h: "The bag technique", p: "The nurse's bag carries the equipment needed for care in the home. Bag technique is the way of using the bag so as to prevent the spread of infection: place the bag on a clean surface, wash hands before and after handling its contents, use and clean equipment properly, keep clean and used items separate, and replenish the bag afterwards. Good bag technique protects both the family and the nurse." },
      { h: "The nursing process in the community", p: "The nursing process is a systematic, problem-solving method applied to individuals, families and whole communities. Its steps are:", list: [
        "Assessment — collect data about the client/family/community (interview, observation, examination, records).",
        "Diagnosis — identify the actual or potential health problems and needs.",
        "Planning — set priorities and goals and decide the actions (the care plan).",
        "Implementation — carry out the planned nursing actions.",
        "Evaluation — judge whether the goals were met and revise the plan as needed."
      ] },
      { h: "Applying the process to the community", p: "When the 'client' is a whole community, assessment becomes a community health survey (population, environment, resources and health problems); diagnosis names the community's priority problems; planning sets community goals and a programme; implementation mobilises the community and delivers services; and evaluation measures the change in the community's health. This makes the nursing process the backbone of organised community health practice." },
      { h: "Advantages and limitations of home visits", p: "Home visits give care in a familiar setting, reveal the real living conditions, involve the whole family and build trust. Their limitations are that they are time-consuming, reach fewer people than clinic or group work, and depend on the family being available — so the nurse balances home visits with clinic and group activities." }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define a home visit and state its purposes.",
      "Describe the steps/phases of a home visit.",
      "What is bag technique? Why is it important?",
      "Explain the steps of the nursing process.",
      "How is the nursing process applied to a whole community?"
    ],
    assessment: [
      { type: "mcq", q: "The first step of the nursing process is:", options: ["Planning", "Assessment", "Implementation", "Evaluation"], answer: 1, rationale: "The nursing process begins with assessment (data collection)." },
      { type: "mcq", q: "The main purpose of bag technique is to:", options: ["Save time", "Look professional", "Carry money", "Prevent the spread of infection"], answer: 3, rationale: "Bag technique prevents cross-infection during home care." },
      { type: "mcq", q: "Reviewing the family record and preparing the bag before going is part of the:", options: ["Pre-visit phase", "Termination phase", "Evaluation phase", "Diagnosis phase"], answer: 0, rationale: "Planning and preparation occur in the pre-visit phase." },
      { type: "mcq", q: "Identifying the actual or potential health problems is which step of the nursing process?", options: ["Assessment", "Diagnosis", "Implementation", "Evaluation"], answer: 1, rationale: "Naming the problem is the diagnosis step." },
      { type: "mcq", q: "A key principle of the home visit is that each visit should have a:", options: ["Definite purpose", "Free meal", "Large audience", "Television crew"], answer: 0, rationale: "Every home visit must have a clear, definite purpose." },
      { type: "mcq", q: "Judging whether the goals of care were met is which step?", options: ["Planning", "Assessment", "Evaluation", "Diagnosis"], answer: 2, rationale: "Evaluation determines whether goals were achieved." },
      { type: "mcq", q: "An advantage of the home visit is that the nurse can:", options: ["Reach the largest number of people quickly", "See the family's real living conditions", "Avoid record-keeping", "Work without any plan"], answer: 1, rationale: "Home visits reveal the family's actual environment and conditions." },
      { type: "mcq", q: "Carrying out the planned nursing actions is the step called:", options: ["Assessment", "Implementation", "Diagnosis", "Evaluation"], answer: 1, rationale: "Implementation is putting the care plan into action." },
      { type: "mcq", q: "When the client is a whole community, assessment is mainly done through a:", options: ["Community health survey", "Stock check", "Census of animals", "Bank audit"], answer: 0, rationale: "Community assessment uses a community health survey." },
      { type: "mcq", q: "A limitation of home visits compared with clinic work is that they are:", options: ["Cheaper for everyone", "Time-consuming and reach fewer people", "Always more effective", "Never useful"], answer: 1, rationale: "Home visits take time and reach fewer people than clinic/group methods." }
      , { type: "fill", q: "After completing care, cleaning and refilling the bag and recording the visit occur in the ____ phase.", accept: ["post-visit", "post visit"], rationale: "Recording and replenishing happen in the post-visit phase." }
      , { type: "fill", q: "The systematic five-step problem-solving method used in nursing is called the nursing ____.", accept: ["process"], rationale: "The nursing process has five steps from assessment to evaluation." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "chn-18-disaster-first-aid",
    unit: "Unit 4 · Environment & Community Practice",
    title: "Disaster Management & Community First Aid",
    readMinutes: 16,
    summary: "Types and effects of disasters, the disaster management cycle, mass-casualty triage, the principles of first aid, and the role of the community health nurse before, during and after a disaster.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a disaster?", p: "A disaster is a sudden, serious event that causes widespread human, material or environmental losses which exceed the ability of the affected community to cope using its own resources. Bangladesh is highly disaster-prone, facing floods, cyclones and other hazards, so disaster management is an essential part of community health nursing." },
      { h: "Types of disaster", list: [
        "Natural disasters — floods, cyclones, storm surges, earthquakes, droughts, landslides and epidemics.",
        "Man-made (human-induced) disasters — fires, building collapse, road and industrial accidents, chemical spills, war and stampedes.",
        "Some disasters are mixed, where human action worsens a natural event."
      ] },
      { h: "Effects of disasters", list: [
        "Deaths and injuries, and long-term disability.",
        "Outbreaks of communicable disease (especially diarrhoea) from unsafe water and crowding.",
        "Malnutrition and food shortage.",
        "Destruction of homes, health facilities and water and sanitation systems.",
        "Mental health effects — fear, grief, anxiety and trauma.",
        "Displacement of people and disruption of normal life and services."
      ] },
      { h: "The disaster management cycle", p: "Disaster management is a continuous cycle with phases before, during and after the event.", list: [
        "Prevention / mitigation — reducing the risk and impact (embankments, safe building, early-warning systems).",
        "Preparedness — getting ready before a disaster (plans, drills, stockpiles, training, warning systems).",
        "Response (relief) — immediate action during and just after the event (rescue, first aid, shelter, food, safe water).",
        "Recovery (rehabilitation and reconstruction) — restoring normal life and rebuilding afterwards."
      ], figure: {
        caption: "The disaster management cycle: mitigation, preparedness, response and recovery.",
        svg: '<svg viewBox="0 0 300 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circular disaster management cycle with four phases."><circle cx="150" cy="135" r="92" fill="none" stroke="#B45309" stroke-width="2" stroke-dasharray="5 5"/><rect x="95" y="12" width="110" height="40" rx="9" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><text x="150" y="37" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Mitigation</text><rect x="225" y="115" width="110" height="40" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5" transform="translate(-90,0)"/><text x="245" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Preparedness</text><rect x="95" y="218" width="110" height="40" rx="9" fill="#FB923C" stroke="#7C2D12" stroke-width="1.5"/><text x="150" y="243" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Response</text><rect x="-35" y="115" width="110" height="40" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5" transform="translate(90,0)"/><text x="55" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Recovery</text></svg>'
      } },
      { h: "Mass casualty and triage", p: "A mass-casualty incident is one in which the number of casualties is far greater than the resources available at that moment. To save the most lives, casualties are sorted by the urgency of their need — a process called triage. A common system uses four colour-coded categories.", list: [
        "Red — immediate: life-threatening but treatable (treat first).",
        "Yellow — delayed: serious but can wait a short time.",
        "Green — minor: 'walking wounded', can wait.",
        "Black — deceased or injuries beyond saving with available resources."
      ] },
      { h: "Principles of first aid", p: "First aid is the immediate, temporary care given to a sick or injured person before professional medical help is available. Its aims are to preserve life, prevent the condition from getting worse, and promote recovery. The basic sequence is to ensure safety, then check the ABC — Airway, Breathing and Circulation — and treat life-threatening problems first." },
      { h: "Common first-aid actions", list: [
        "Bleeding — apply firm direct pressure and raise the part.",
        "Unconsciousness (breathing) — place in the recovery position and keep the airway open.",
        "No breathing — start cardiopulmonary resuscitation (CPR).",
        "Burns — cool with clean running water and cover with a clean cloth; do not apply toothpaste or oil.",
        "Fractures — immobilise (splint) the part and do not move unnecessarily.",
        "Shock — lay the person down, keep warm and get help; arrange prompt referral."
      ] },
      { h: "Role of the community health nurse in disasters", list: [
        "Before — take part in preparedness: planning, training, drills, health education and early warning.",
        "During — give first aid and emergency care, help with triage, rescue and shelter, and ensure safe water and sanitation.",
        "After — prevent disease outbreaks (immunisation, safe water, sanitation), restore MCH and other services, give nutritional and psychological support, and keep records of casualties and needs.",
        "Throughout — coordinate with the health team, government and relief agencies, and support the most vulnerable (children, pregnant women, the elderly and the disabled)."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define disaster and describe its types.",
      "Explain the disaster management cycle.",
      "What is triage? Describe the colour-coded triage categories.",
      "State the aims and principles of first aid.",
      "Describe the role of the community health nurse before, during and after a disaster."
    ],
    assessment: [
      { type: "mcq", q: "A disaster is an event whose losses exceed the community's ability to:", options: ["Celebrate", "Cope with its own resources", "Travel", "Communicate"], answer: 1, rationale: "A disaster overwhelms the affected community's own coping capacity." },
      { type: "mcq", q: "A cyclone is an example of a:", options: ["Man-made disaster", "Natural disaster", "Chemical spill", "Road accident"], answer: 1, rationale: "Cyclones are natural disasters." },
      { type: "mcq", q: "Getting ready before a disaster through plans, drills and warning systems is the phase of:", options: ["Recovery", "Preparedness", "Response", "Reconstruction"], answer: 1, rationale: "Preparedness is the pre-disaster readiness phase." },
      { type: "mcq", q: "In triage, the RED category means the casualty is:", options: ["Dead", "Minor", "Can wait a long time", "Immediate / life-threatening but treatable"], answer: 3, rationale: "Red = immediate, life-threatening but salvageable — treated first." },
      { type: "mcq", q: "The first aim of first aid is to:", options: ["Preserve life", "Charge a fee", "Diagnose the disease", "Write a report"], answer: 0, rationale: "The aims of first aid are to preserve life, prevent worsening and promote recovery." },
      { type: "mcq", q: "ABC in first aid stands for Airway, Breathing and:", options: ["Calculation", "Circulation", "Communication", "Cooking"], answer: 1, rationale: "ABC = Airway, Breathing, Circulation." },
      { type: "mcq", q: "The correct first aid for a burn is to:", options: ["Apply toothpaste", "Cool with clean running water", "Rub with oil", "Cover with mud"], answer: 1, rationale: "Cooling a burn with clean running water is correct; oils/toothpaste are harmful." },
      { type: "mcq", q: "The sorting of casualties by the urgency of their need is called:", options: ["Triage", "Rehabilitation", "Mitigation", "Notification"], answer: 0, rationale: "Triage prioritises casualties to save the most lives." },
      { type: "mcq", q: "After a disaster, a major task of the nurse is to prevent:", options: ["Outbreaks of communicable disease", "Sunrise", "Population census", "School holidays"], answer: 0, rationale: "Crowding and unsafe water make disease outbreaks a key post-disaster risk." },
      { type: "mcq", q: "Rebuilding homes and restoring services after a disaster is part of the ____ phase.", options: ["Preparedness", "Response", "Recovery", "Mitigation"], answer: 2, rationale: "Recovery includes rehabilitation and reconstruction after the event." }
      , { type: "fill", q: "Immediate temporary care given before professional medical help arrives is called ____.", accept: ["first aid"], rationale: "First aid is the initial care before professional help." }
      , { type: "fill", q: "An incident with far more casualties than available resources is a ____ casualty incident.", accept: ["mass"], rationale: "A mass-casualty incident overwhelms available resources." }
    ]
  }
];
