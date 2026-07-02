/* ============================================================
   B.Sc. in Nursing (BNMC 2018) · Year 3 · B332 Community Health Nursing
   — 18 topics. Aligned to the BNMC 4-year B.Sc. Nursing (2018)
   syllabus: concepts of health & community health nursing, primary
   health care & the Bangladesh health-care delivery system,
   epidemiology (principles, measurements & methods), communicable &
   non-communicable disease control, immunisation/EPI & cold chain,
   environmental health, family health nursing & the home visit, MCH,
   family planning, demography & vital statistics, health education,
   nutrition, national health programmes, school & occupational health,
   disaster management, and the community health nursing process.
   Degree-level depth: epidemiological methods, biostatistics, and
   programme detail. Grounded in standard texts and WHO standards:
     • Park K. Park's Textbook of Preventive and Social Medicine. Bhanot.
     • Stanhope M, Lancaster J. Public Health Nursing: Population-Centered
       Health Care in the Community. Elsevier.
     • Basavanthappa BT. Essentials of Community Health Nursing. Jaypee Brothers.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_CHN = [
  "Park K. Park's Textbook of Preventive and Social Medicine. Bhanot.",
  "Stanhope M, Lancaster J. Public Health Nursing: Population-Centered Health Care in the Community. Elsevier.",
  "Basavanthappa BT. Essentials of Community Health Nursing. Jaypee Brothers."
];

window.Academic.topics["bsc-nursing/community-health"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "chn-01-health-disease-prevention",
    unit: "Unit 1 · Concepts of Community Health",
    title: "Concept of Health, Disease & the Levels of Prevention",
    readMinutes: 24,
    summary: "The WHO and operational definitions of health, its dimensions and determinants, positive health and the health–illness continuum, the epidemiological triad and the web of causation, the natural history of disease, and the three levels and five modes of prevention with the concept of the iceberg of disease.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of health", p: "The World Health Organization (WHO, 1948) defines health as 'a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.' The 1978 Alma-Ata Declaration added that health is a fundamental human right and a worldwide social goal. The definition is positive and holistic, but is criticised as idealistic ('complete' well-being is rarely attained) and non-measurable. An operational definition therefore treats health as (a) no obvious evidence of disease and normal functioning of body systems, and (b) organs functioning within normal limits by accepted standards — allowing health to be observed and measured at community level." },
      { h: "Dimensions of health", p: "Health is multidimensional; the dimensions interact so the community health nurse must assess the whole person and the aggregate.", list: [
        "Physical — anatomical integrity and physiological functioning within normal ranges.",
        "Mental — ability to think clearly and coherently, and to cope with stress and emotion.",
        "Social — quality of interpersonal ties and the degree of participation in community life.",
        "Spiritual — sense of meaning, purpose, connectedness and inner peace.",
        "Emotional — recognising and appropriately managing feelings.",
        "Vocational, environmental and political dimensions are also described (the last through equity and human-rights lenses)."
      ] },
      { h: "Determinants of health", p: "Determinants are the factors that decide the health of an individual or population. Dahlgren and Whitehead arranged them as layers around the person.", list: [
        "Biological — age, sex, genes, and inherited constitution.",
        "Behavioural/lifestyle — diet, physical activity, tobacco, alcohol, hygiene, risk behaviours.",
        "Environmental (physical) — safe water, sanitation, air quality, housing, climate.",
        "Socio-economic — income, education, occupation, food security, social class (the 'causes of the causes').",
        "Health services — availability, accessibility, acceptability, affordability and quality of care.",
        "Ageing of the population, gender and other cross-cutting factors."
      ] },
      { h: "Positive health & the concept of well-being", p: "Positive health is a state above the neutral point of freedom from disease — a reserve of physical and mental fitness. Well-being has an objective component (standard of living, level of living, quality of life) and a subjective component (satisfaction, perceived health). The community health nurse aims not merely to remove disease but to raise the whole community toward positive health." },
      { h: "Health–illness continuum & the spectrum of health", p: "Health and illness are not separate boxes but the ends of a continuum along which a person moves throughout life: optimum health → better health → normal health → poor health → death. The spectrum of health grades this as positive health → freedom from sickness → unrecognised (subclinical) sickness → mild → moderate → severe sickness → death. Because much disease is hidden and subclinical, screening of apparently well people is a core community activity.", figure: {
        caption: "The health–illness continuum: individuals move dynamically between positive health and death; community health work shifts the population toward the positive end.",
        svg: '<svg viewBox="0 0 620 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Health illness continuum from optimum health to death"><defs><linearGradient id="chnGrad1" x1="0" x2="1"><stop offset="0" stop-color="#22C55E"/><stop offset="1" stop-color="#0F4C3A"/></linearGradient></defs><rect x="40" y="55" width="540" height="26" rx="13" fill="url(#chnGrad1)"/><text x="45" y="105" font-family="sans-serif" font-size="12" fill="#0F4C3A">Optimum health</text><text x="255" y="105" font-family="sans-serif" font-size="12" fill="#15803D">Normal health</text><text x="500" y="105" font-family="sans-serif" font-size="12" fill="#0F4C3A">Death</text><text x="310" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Dynamic movement throughout life</text><polygon points="40,68 30,60 30,76" fill="#0F4C3A"/><polygon points="580,68 590,60 590,76" fill="#0F4C3A"/></svg>'
      } },
      { h: "Epidemiological (agent–host–environment) triad", p: "Disease results from imbalance between three interacting factors. The agent is the necessary cause (biological microbe; chemical toxin/deficiency; physical force; nutritional excess/lack; genetic; psychosocial). The host contributes susceptibility (age, sex, immunity, genetics, behaviour). The environment brings agent and host together (physical, biological and socio-economic). Disease occurs when the agent overcomes host defences, usually because the environment favours transmission. Prevention can act on any of the three." },
      { h: "Web of causation & multifactorial causation", p: "For chronic non-communicable diseases a single agent rarely explains illness; instead many factors interconnect like a web. MacMahon's 'web of causation' (classically for ischaemic heart disease) shows that removing or weakening any strand of the web reduces disease — the rationale for tackling several risk factors at once (diet, tobacco, blood pressure, lipids). This multifactorial model complements the triad used for infectious disease." },
      { h: "Natural history of disease", p: "Left alone, every disease passes through stages. In pre-pathogenesis the agent, host and environment interact but the person is still well. In pathogenesis the agent enters the host: a subclinical stage (tissue changes begin, no symptoms), then clinical disease (signs and symptoms), then an outcome — recovery, disability, chronic state or death. Knowing where a disease is in its natural history tells us which level of prevention applies." },
      { h: "Levels of prevention", p: "Prevention is matched to the stage of the natural history of disease.", list: [
        "Primordial prevention — prevents the emergence of risk factors themselves in populations where they are not yet common (e.g. preventing the adoption of smoking or unhealthy diets in children).",
        "Primary prevention — acts in pre-pathogenesis before disease begins (health promotion + specific protection: immunisation, safe water, nutrition, health education).",
        "Secondary prevention — acts in early pathogenesis to halt or slow progress (early diagnosis and prompt treatment; screening).",
        "Tertiary prevention — acts in late disease to limit disability and rehabilitate (disability limitation + rehabilitation)."
      ] },
      { h: "Modes of intervention (five)", p: "Leavell and Clark described five specific modes across the levels.", list: [
        "Health promotion — general measures raising health (nutrition, housing, health education, lifestyle).",
        "Specific protection — measures against specific agents (immunisation, chemoprophylaxis, safe water, use of PPE).",
        "Early diagnosis & treatment — case-finding, screening and prompt therapy to cure or stop spread.",
        "Disability limitation — adequate treatment to arrest disease and prevent complications and impairment.",
        "Rehabilitation — medical, vocational, social and psychological restoration to the fullest useful capacity."
      ] },
      { h: "Iceberg phenomenon of disease", p: "The clinically apparent cases (the visible tip of the iceberg above the water line) are only a small fraction of all disease. Below the surface lie subclinical cases, carriers, latent and undiagnosed disease. This concept explains why community diagnosis relies on surveys and screening, and why treating only presenting cases fails to control an epidemic.", figure: {
        caption: "Iceberg of disease: clinical cases are the small visible tip; subclinical cases, carriers and latent disease lie hidden below the surface.",
        svg: '<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Iceberg of disease diagram"><rect x="0" y="120" width="420" height="140" fill="#DCFCE7"/><line x1="0" y1="120" x2="420" y2="120" stroke="#15803D" stroke-width="2" stroke-dasharray="6 4"/><polygon points="210,30 250,120 170,120" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><polygon points="170,120 250,120 320,240 100,240" fill="#15803D" stroke="#0F4C3A" stroke-width="2"/><text x="210" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Clinical cases</text><text x="210" y="170" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Sub-clinical cases</text><text x="210" y="195" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Carriers &amp; latent disease</text><text x="210" y="218" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Undiagnosed disease</text><text x="330" y="112" font-family="sans-serif" font-size="10" fill="#15803D">water line</text></svg>'
      } },
      { h: "Clinical / community relevance for nursing", p: "The community health nurse uses these concepts daily: assessing all dimensions and determinants, positioning interventions at the right level of prevention, screening to reveal the submerged iceberg, and targeting the web of causation for NCDs. Health education and immunisation are primary prevention; growth monitoring and Pap smears are secondary; stroke rehabilitation is tertiary." },
      { h: "Key figures & indicators to remember", list: [
        "WHO definition year — 1948; Alma-Ata Declaration — 1978.",
        "Three classical levels of prevention (plus primordial as a fourth described level).",
        "Five modes of intervention (Leavell & Clark).",
        "Blood pressure classed as normal <120/80 mmHg — a modifiable risk factor targeted by primary prevention.",
        "Positive health = a reserve above the neutral point of 'no disease'."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define health. State the WHO definition and give two criticisms and an operational definition.",
      "Describe the dimensions and determinants of health, illustrating the role of the community health nurse.",
      "Explain the natural history of disease and relate each stage to a level of prevention.",
      "Compare the epidemiological triad with the web of causation, giving one disease example of each.",
      "Explain the iceberg phenomenon of disease and its implications for community diagnosis."
    ],
    assessment: [
      { type: "mcq", q: "The WHO (1948) definition of health is most criticised because it:", options: ["Ignores mental health", "Describes 'complete' well-being, an unattainable ideal that cannot be measured", "Excludes the social dimension", "Was written after Alma-Ata"], answer: 1, rationale: "The word 'complete' makes the definition idealistic and non-operational, so an operational definition is used at community level." },
      { type: "mcq", q: "A nurse screens apparently healthy adults for high blood pressure. This is an example of which level of prevention?", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Primordial prevention"], answer: 1, rationale: "Screening for early, often subclinical, disease to allow prompt treatment is secondary prevention." },
      { type: "mcq", q: "Preventing children from ever taking up smoking, in a population where smoking is still uncommon, best fits:", options: ["Primordial prevention", "Secondary prevention", "Rehabilitation", "Disability limitation"], answer: 0, rationale: "Primordial prevention prevents the emergence of risk factors themselves before they become established." },
      { type: "mcq", q: "The 'web of causation' model is MOST appropriate for explaining:", options: ["Cholera outbreak", "Ischaemic heart disease", "Rabies", "Tetanus"], answer: 1, rationale: "The web of causation was described by MacMahon for multifactorial chronic disease such as ischaemic heart disease." },
      { type: "mcq", q: "In the iceberg of disease, the part hidden below the water line represents:", options: ["Clinically apparent cases only", "Subclinical cases, carriers and latent disease", "Cured cases", "Deaths"], answer: 1, rationale: "The submerged bulk of the iceberg is subclinical/undiagnosed disease and carriers; only clinical cases show above the surface." },
      { type: "mcq", q: "Which is the correct sequence in the natural history of disease?", options: ["Clinical stage → subclinical stage → pre-pathogenesis", "Pre-pathogenesis → subclinical stage → clinical disease → outcome", "Outcome → clinical disease → pre-pathogenesis", "Subclinical stage → pre-pathogenesis → outcome"], answer: 1, rationale: "Disease progresses from pre-pathogenesis through subclinical and clinical stages to an outcome." },
      { type: "mcq", q: "Rehabilitation of a patient after a stroke is classed as:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Health promotion"], answer: 2, rationale: "Rehabilitation acts in late disease to reduce disability and restore function — tertiary prevention." },
      { type: "mcq", q: "In the agent–host–environment triad, immunity of the individual is a factor of the:", options: ["Agent", "Host", "Environment", "Vector"], answer: 1, rationale: "Immunity, age, sex and behaviour are host factors that determine susceptibility." },
      { type: "mcq", q: "Immunisation and provision of safe drinking water are examples of:", options: ["Specific protection under primary prevention", "Secondary prevention", "Disability limitation", "Rehabilitation"], answer: 0, rationale: "Both are specific protection measures, a mode of primary prevention acting before disease begins." },
      { type: "mcq", q: "'Positive health' is best described as:", options: ["Merely the absence of disease", "A reserve of fitness above the neutral point of no disease", "A subclinical infection", "The clinical tip of the iceberg"], answer: 1, rationale: "Positive health is a state above the neutral point of freedom from disease — a reserve of physical and mental fitness." }
      , { type: "fill", q: "The year in which WHO gave its classic definition of health is ____.", accept: ["1948"], rationale: "The WHO constitutional definition dates from 1948." }
      , { type: "fill", q: "Early diagnosis and prompt treatment through screening constitutes ____ prevention.", accept: ["secondary", "secondary prevention"], rationale: "Acting in early pathogenesis to halt progress is secondary prevention." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "chn-02-chn-concept-scope-roles",
    unit: "Unit 1 · Concepts of Community Health",
    title: "Community Health Nursing — Concept, Scope & Roles",
    readMinutes: 24,
    summary: "Definition and philosophy of community health nursing, its distinction from public-health and community-based nursing, principles, settings and scope, the community as the unit of care, community participation and empowerment, and the multiple roles and competencies of the community health nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition & philosophy", p: "Community health nursing (CHN) is a field of nursing that synthesises nursing science and public-health science to promote and protect the health of populations. Its unit of care is the community/aggregate as well as the individual and family. Its philosophy holds that health is a right, that care is continuous and family/community centred, that people should participate in decisions about their health, and that the nurse works with — not merely for — the community." },
      { h: "Public health nursing vs community-based nursing", p: "These overlapping terms differ in focus.", list: [
        "Public health nursing (population-centred) — focus is the population/aggregate; goal is health promotion and disease prevention for groups; grounded in epidemiology and the core public-health functions.",
        "Community health nursing — care of individuals, families and groups in community settings, blending clinical care with public-health goals.",
        "Community-based nursing — illness-oriented care of individuals and families delivered where they live (home care), regardless of population focus."
      ] },
      { h: "Aims & objectives", list: [
        "Promote and maintain the health of individuals, families and communities.",
        "Prevent disease and disability and control communicable and non-communicable disease.",
        "Provide curative and rehabilitative care at community level.",
        "Identify health needs and deliver care to vulnerable and under-served groups (equity).",
        "Empower people toward self-care and healthy behaviour.",
        "Link the community with health and welfare services (referral and coordination)."
      ] },
      { h: "Principles of community health nursing", list: [
        "The community is the unit of service; the family is the basic unit of care.",
        "Care is based on assessed needs and available resources.",
        "Health teaching is integral to every contact.",
        "The nurse works with the community, encouraging participation and self-reliance.",
        "Care is continuous, comprehensive, coordinated and culturally appropriate.",
        "Records and reports guide and evaluate the work."
      ] },
      { h: "Scope & settings of practice", p: "CHN is practised across many settings.", list: [
        "Homes — home visits and home-based care.",
        "Primary care facilities — community/union health centres, sub-centres, upazila health complexes.",
        "Schools — school health services.",
        "Workplaces — occupational health.",
        "Maternal & child health / family-planning clinics and EPI centres.",
        "Camps and outreach — disaster relief, immunisation and screening camps."
      ] },
      { h: "The community as the unit of care", p: "A community is a group of people sharing a geographic area, common values, interests or institutions, and a sense of belonging. In CHN the aggregate (a group sharing a characteristic such as age or risk — e.g. under-fives, pregnant women, factory workers) is the target. The nurse practises 'community diagnosis' — describing the health of the whole population — and designs population-level interventions." },
      { h: "Community participation & empowerment", p: "Community participation is the process by which people take part in decisions and actions that affect their health (from Alma-Ata). Community empowerment goes further: building the community's capacity and control over the determinants of its own health. Strategies include forming community groups, using local resources and leaders, and involving people from problem identification through evaluation. Participation increases relevance, coverage and sustainability of programmes.", figure: {
        caption: "Ladder of community involvement, from being informed toward genuine empowerment and control.",
        svg: '<svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ladder of community participation to empowerment"><rect x="30" y="180" width="380" height="30" fill="#DCFCE7" stroke="#15803D"/><text x="40" y="200" font-family="sans-serif" font-size="12" fill="#0F4C3A">Informed</text><rect x="60" y="140" width="350" height="30" fill="#BBF7D0" stroke="#15803D"/><text x="70" y="160" font-family="sans-serif" font-size="12" fill="#0F4C3A">Consulted</text><rect x="90" y="100" width="320" height="30" fill="#86EFAC" stroke="#15803D"/><text x="100" y="120" font-family="sans-serif" font-size="12" fill="#0F4C3A">Participating</text><rect x="120" y="60" width="290" height="30" fill="#22C55E" stroke="#0F4C3A"/><text x="130" y="80" font-family="sans-serif" font-size="12" fill="#0F4C3A">Partnership</text><rect x="150" y="20" width="260" height="30" fill="#15803D" stroke="#0F4C3A"/><text x="160" y="40" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Empowerment / control</text></svg>'
      } },
      { h: "Roles of the community health nurse", p: "The CHN plays many interrelated roles.", list: [
        "Care provider — direct nursing care to individuals and families.",
        "Educator — health teaching and counselling.",
        "Advocate — speaks for the client and community, especially the vulnerable.",
        "Manager/coordinator — plans, organises and coordinates care and resources.",
        "Case-finder & epidemiologist — surveillance, screening and outbreak investigation.",
        "Change agent — promotes healthier behaviour and system change.",
        "Counsellor and role model.",
        "Researcher — collects and uses data to improve practice.",
        "Collaborator and referral link with the health team and other sectors."
      ] },
      { h: "Core competencies", list: [
        "Assessment — community assessment, epidemiology and biostatistics.",
        "Policy/programme skills — planning, implementing and evaluating programmes.",
        "Communication and cultural competence.",
        "Community mobilisation and partnership.",
        "Analytic/scientific skills and use of evidence.",
        "Leadership, ethics and professional accountability."
      ] },
      { h: "Historical development (brief)", p: "CHN evolved from district and home nursing (Florence Nightingale's district nurses in the 19th century, and the work of William Rathbone and Lillian Wald's Henry Street Settlement) through the sanitary/public-health movement to today's population-centred practice underpinned by the Alma-Ata primary-health-care approach (1978) and the health-for-all goal." },
      { h: "Cultural diversity in the community", p: "Communities are culturally diverse in beliefs, practices, language, diet and health-seeking behaviour. Culturally competent nursing (Leininger's transcultural nursing) requires the nurse to assess cultural beliefs, avoid stereotyping, negotiate care that respects values, and use local terms and trusted persons — essential for acceptance and effectiveness of community programmes in Bangladesh's varied communities." },
      { h: "Clinical / nursing relevance", p: "Understanding the scope and roles helps the nurse move fluidly between bedside home care and population programmes, decide when to refer, advocate for excluded groups, and design participatory interventions that communities own and sustain — the difference between a programme done 'to' a community and one done 'with' it." },
      { h: "Key points to remember", list: [
        "Unit of service = community; basic unit of care = family.",
        "Public health nursing = population/aggregate centred.",
        "Community participation is a founding principle of primary health care (Alma-Ata, 1978).",
        "Empowerment is the highest rung of community involvement.",
        "The nurse is care provider, educator, advocate, manager, case-finder, change agent, researcher and collaborator."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define community health nursing and state its philosophy and principles.",
      "Differentiate public health nursing, community health nursing and community-based nursing.",
      "Describe the roles and core competencies of the community health nurse.",
      "Explain community participation and empowerment and their importance for programme success.",
      "Discuss cultural diversity in the community and the concept of culturally competent nursing care."
    ],
    assessment: [
      { type: "mcq", q: "In community health nursing, the unit of service is the ____ and the basic unit of care is the ____.", options: ["individual; family", "community; family", "family; individual", "hospital; ward"], answer: 1, rationale: "The community is the unit of service while the family is the basic unit of care." },
      { type: "mcq", q: "Which term is MOST specifically population/aggregate-centred rather than individual illness care?", options: ["Public health nursing", "Community-based nursing", "Bedside nursing", "Home care"], answer: 0, rationale: "Public health nursing focuses on the population/aggregate and is grounded in epidemiology." },
      { type: "mcq", q: "A nurse forms a mothers' group that identifies, plans and runs its own nutrition project. This best illustrates:", options: ["Community informing", "Case-finding", "Community empowerment", "Disability limitation"], answer: 2, rationale: "Building the community's capacity to control the determinants of its own health is empowerment — the highest rung of involvement." },
      { type: "mcq", q: "An 'aggregate' in community health nursing means:", options: ["A single sick patient", "A hospital department", "A group sharing a common characteristic such as age or risk", "A vaccine batch"], answer: 2, rationale: "An aggregate is a group sharing a characteristic (e.g. under-fives, pregnant women, factory workers) that is targeted for care." },
      { type: "mcq", q: "When a community health nurse speaks up for the rights of a neglected disabled child to services, she is acting as a(n):", options: ["Advocate", "Case-finder", "Researcher", "Role model"], answer: 0, rationale: "Advocacy means speaking and acting for the client/community, especially the vulnerable." },
      { type: "mcq", q: "Community participation was established as a founding principle by the:", options: ["WHO definition of 1948", "Alma-Ata Declaration of 1978", "Ottawa Charter alone", "Bangladesh National Health Policy"], answer: 1, rationale: "The 1978 Alma-Ata Declaration on primary health care enshrined community participation." },
      { type: "mcq", q: "Culturally competent community nursing requires the nurse FIRST to:", options: ["Impose scientific practices immediately", "Avoid using local terms", "Ignore traditional healers", "Assess and respect the community's cultural beliefs and practices"], answer: 3, rationale: "Cultural competence begins with assessing beliefs and negotiating care that respects them, avoiding stereotyping." },
      { type: "mcq", q: "Conducting surveillance and investigating an outbreak is which role of the community health nurse?", options: ["Counsellor", "Case-finder / epidemiologist", "Care provider", "Role model"], answer: 1, rationale: "Surveillance, screening and outbreak investigation are the case-finder/epidemiologist role." },
      { type: "mcq", q: "Which statement best distinguishes community-based nursing?", options: ["It is population/aggregate centred", "It is illness-oriented care of individuals/families in their own settings", "It ignores families", "It is only hospital care"], answer: 1, rationale: "Community-based nursing is individual/family illness care delivered where people live, regardless of population focus." },
      { type: "mcq", q: "Which is NOT a principle of community health nursing?", options: ["Care is based on assessed needs", "Health teaching is integral to every contact", "The nurse works in isolation from the community", "Records guide and evaluate the work"], answer: 2, rationale: "CHN requires working WITH the community and encouraging participation, not in isolation." }
      , { type: "fill", q: "The nursing role that involves speaking and acting for vulnerable clients is that of the ____.", accept: ["advocate"], rationale: "Advocacy protects the interests of clients and the community." }
      , { type: "fill", q: "Nursing that focuses on the population or aggregate is called ____ nursing.", accept: ["public health", "public-health"], rationale: "Public health nursing is population/aggregate centred." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "chn-03-phc-delivery-system",
    unit: "Unit 2 · Primary Health Care & the Health System",
    title: "Primary Health Care & the Bangladesh Health-Care Delivery System",
    readMinutes: 25,
    summary: "The Alma-Ata Declaration and definition of primary health care (PHC), its principles and eight-plus essential elements, the levels of health care, the structure of Bangladesh's public health-care delivery system from national to community level, the Essential Service Package, and the community health nurse's place within it.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Background — Health for All & Alma-Ata", p: "In 1978 the International Conference on Primary Health Care at Alma-Ata (USSR) declared 'Health for All by the year 2000' and identified primary health care as the key to achieving it. It reaffirmed health as a fundamental human right, stressed the gross inequality in health status, and called for community participation and intersectoral action." },
      { h: "Definition of primary health care", p: "Alma-Ata defined PHC as 'essential health care based on practical, scientifically sound and socially acceptable methods and technology, made universally accessible to individuals and families in the community through their full participation and at a cost that the community and country can afford to maintain at every stage of their development in the spirit of self-reliance and self-determination.'" },
      { h: "Principles of primary health care", list: [
        "Equitable distribution — health services reach all, especially the under-served (social justice).",
        "Community participation — people take part in planning and delivering their own care.",
        "Intersectoral coordination — health depends on agriculture, education, water, housing and other sectors.",
        "Appropriate technology — methods that are scientifically sound, affordable, acceptable and locally maintainable.",
        "Focus on prevention and promotion (added principle)."
      ] },
      { h: "Essential elements of PHC ('ELEMENTS')", p: "Alma-Ata listed eight essential elements; later additions expanded them.", list: [
        "E — Education about prevailing health problems and their control.",
        "L — Local endemic disease prevention and control.",
        "E — Expanded Programme on Immunization (against major infectious diseases).",
        "M — Maternal and child health care including family planning.",
        "E — Essential drugs provision.",
        "N — Nutrition (promotion of food supply and proper nutrition).",
        "T — Treatment of common diseases and injuries.",
        "S — Safe water and basic sanitation.",
        "Later additions: mental health, dental health, and care for the elderly."
      ], figure: {
        caption: "The eight classic essential elements of primary health care (Alma-Ata, 1978).",
        svg: '<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Eight essential elements of primary health care"><circle cx="240" cy="125" r="55" fill="#0F4C3A"/><text x="240" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">PHC</text><text x="240" y="136" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">8 elements</text><g font-family="sans-serif" font-size="9" fill="#0F4C3A"><rect x="180" y="10" width="120" height="24" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="240" y="26" text-anchor="middle">Health education</text><rect x="330" y="45" width="130" height="24" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="395" y="61" text-anchor="middle">Local disease control</text><rect x="360" y="115" width="110" height="24" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="415" y="131" text-anchor="middle">Immunization</text><rect x="330" y="185" width="130" height="24" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="395" y="201" text-anchor="middle">MCH &amp; family planning</text><rect x="180" y="216" width="120" height="24" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="240" y="232" text-anchor="middle">Essential drugs</text><rect x="20" y="185" width="120" height="24" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="201" text-anchor="middle">Nutrition</text><rect x="10" y="115" width="130" height="24" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="75" y="131" text-anchor="middle">Treat common disease</text><rect x="20" y="45" width="130" height="24" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="85" y="61" text-anchor="middle">Safe water &amp; sanitation</text></g></svg>'
      } },
      { h: "Levels of health care", list: [
        "Primary care — first point of contact (community/union level: sub-centres, community clinics, upazila health complexes).",
        "Secondary care — district hospitals with specialist services on referral.",
        "Tertiary care — medical college and specialised hospitals for complex care and training."
      ] },
      { h: "Structure of the Bangladesh health system", p: "Health services in Bangladesh are delivered by the Ministry of Health and Family Welfare through two wings — the Directorate General of Health Services (DGHS) and the Directorate General of Family Planning (DGFP) — with a pyramidal administrative structure from national to community level, complemented by NGO and private providers." },
      { h: "Administrative tiers of public health services", list: [
        "National — Ministry of Health & Family Welfare; DGHS and DGFP; tertiary/specialised hospitals.",
        "Division — divisional health offices and medical college hospitals.",
        "District (Zila) — Civil Surgeon office and district hospital (secondary care, ~250 beds).",
        "Upazila (sub-district) — Upazila Health Complex (typically 31–50 beds) headed by the Upazila Health & Family Planning Officer; first referral level.",
        "Union — Union Health & Family Welfare Centre / Union Sub-Centre (Sub-Assistant Community Medical Officer, Family Welfare Visitor).",
        "Ward/community — Community Clinic (one per ~6,000 population) staffed by the Community Health Care Provider; domiciliary services by Health Assistants and Family Welfare Assistants."
      ], figure: {
        caption: "Pyramidal structure of the Bangladesh public health-care delivery system from community clinic to national level.",
        svg: '<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pyramid of Bangladesh health system tiers"><polygon points="230,15 300,60 160,60" fill="#0F4C3A"/><text x="230" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">National</text><polygon points="160,62 300,62 330,105 130,105" fill="#15803D"/><text x="230" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">District (2° care)</text><polygon points="130,107 330,107 360,150 100,150" fill="#22C55E"/><text x="230" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Upazila Health Complex</text><polygon points="100,152 360,152 390,195 70,195" fill="#86EFAC"/><text x="230" y="180" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Union Health &amp; FW Centre</text><polygon points="70,197 390,197 420,238 40,238" fill="#DCFCE7"/><text x="230" y="223" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Community Clinic (~6,000 pop.)</text></svg>'
      } },
      { h: "The Community Clinic", p: "The Community Clinic is the lowest tier and closest facility to the people, ideally one for every 6,000 population. It provides basic curative care, EPI, MCH and family planning, essential drugs, health education, and referral. It is run by a Community Health Care Provider (CHCP) supported by a Health Assistant and a Family Welfare Assistant, and is overseen by a Community Group of local people — an example of community participation." },
      { h: "Essential Service Package (ESP)", p: "Bangladesh delivers a defined Essential Service Package at primary level, concentrating limited resources on high-impact interventions. Core components typically include: reproductive health care (safe motherhood, family planning, adolescent health), child health care (including EPI and IMCI), communicable disease control (TB, malaria, etc.), limited curative care, and behaviour change communication." },
      { h: "Health workforce at community level", list: [
        "Community Health Care Provider (CHCP) — runs the community clinic.",
        "Health Assistant (HA) — domiciliary services, EPI, surveillance under DGHS.",
        "Family Welfare Assistant (FWA) — family planning and MCH at household level under DGFP.",
        "Sub-Assistant Community Medical Officer (SACMO) and Family Welfare Visitor (FWV) at union level.",
        "Community health nurse — links these workers, supervises care, provides skilled nursing and health education."
      ] },
      { h: "Clinical / nursing relevance", p: "The community health nurse works mostly at the primary level within this system: staffing MCH/EPI clinics, supervising community clinics, making home visits, and referring upward for secondary/tertiary care. Understanding the referral chain ensures timely, appropriate referral (e.g. an obstructed labour from community clinic → union centre → upazila complex → district hospital)." },
      { h: "Key figures to remember", list: [
        "Alma-Ata Conference — 1978; goal 'Health for All by 2000'.",
        "Eight essential elements of PHC (ELEMENTS mnemonic).",
        "Community Clinic — 1 per ~6,000 population.",
        "Upazila Health Complex — typically 31–50 beds; first referral level.",
        "Two directorates: DGHS (health) and DGFP (family planning)."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define primary health care and explain its four principles with Bangladesh examples.",
      "List and briefly describe the eight essential elements of primary health care.",
      "Describe the structure of the Bangladesh public health-care delivery system from national to community level.",
      "Explain the role and staffing of the Community Clinic in Bangladesh.",
      "Discuss the levels of health care and illustrate the referral chain for an obstetric emergency."
    ],
    assessment: [
      { type: "mcq", q: "Primary health care was adopted as the key to 'Health for All' at the conference held in 1978 at:", options: ["Ottawa", "Alma-Ata", "Geneva", "Dhaka"], answer: 1, rationale: "The Alma-Ata Declaration of 1978 established primary health care as the strategy for Health for All." },
      { type: "mcq", q: "Ensuring health services reach the poorest and most remote groups reflects which PHC principle?", options: ["Appropriate technology", "Equitable distribution", "Intersectoral coordination", "Curative focus"], answer: 1, rationale: "Equitable distribution (social justice) means services reach all, especially the under-served." },
      { type: "mcq", q: "In Bangladesh, the lowest-tier facility, ideally one per 6,000 population, is the:", options: ["Upazila Health Complex", "District hospital", "Community Clinic", "Medical college hospital"], answer: 2, rationale: "The Community Clinic is the closest facility to the people, one per about 6,000 population." },
      { type: "mcq", q: "The first referral level in the Bangladesh public health system is the:", options: ["Community Clinic", "Union Sub-Centre", "Upazila Health Complex", "Divisional office"], answer: 2, rationale: "The Upazila Health Complex is the first referral level, typically with 31–50 beds." },
      { type: "mcq", q: "'Use of oral rehydration solution made from locally available sugar and salt' best illustrates the PHC principle of:", options: ["Appropriate technology", "Equitable distribution", "Tertiary care", "Rehabilitation"], answer: 0, rationale: "ORS is scientifically sound, affordable, acceptable and locally maintainable — appropriate technology." },
      { type: "mcq", q: "The two wings of the Ministry of Health & Family Welfare that deliver services are:", options: ["DGHS and DGFP", "WHO and UNICEF", "DGHS and Civil Surgeon", "ESP and IMCI"], answer: 0, rationale: "Services are delivered through the Directorate General of Health Services (DGHS) and the Directorate General of Family Planning (DGFP)." },
      { type: "mcq", q: "Which is NOT one of the eight essential elements of PHC?", options: ["Immunization", "Provision of tertiary cardiac surgery", "Safe water and sanitation", "Maternal and child health with family planning"], answer: 1, rationale: "Tertiary cardiac surgery is specialised care, not a PHC essential element; PHC covers basic, high-impact services." },
      { type: "mcq", q: "A Community Clinic is overseen by a local Community Group. This is an example of the PHC principle of:", options: ["Community participation", "Appropriate technology", "Referral", "Curative care"], answer: 0, rationale: "Local people overseeing the clinic exemplifies community participation." },
      { type: "mcq", q: "The correct upward referral chain for an obstructed labour beginning at the community level is:", options: ["Community Clinic → Union Centre → Upazila Complex → District Hospital", "District Hospital → Upazila Complex → Community Clinic", "Medical college → Community Clinic", "Union Centre → Community Clinic → Home"], answer: 0, rationale: "Referral moves upward from community clinic through union and upazila levels to the district hospital." },
      { type: "mcq", q: "The Family Welfare Assistant (FWA) primarily works under which directorate?", options: ["DGHS", "DGFP", "WHO", "Civil Surgeon only"], answer: 1, rationale: "The FWA provides household family-planning and MCH services under the Directorate General of Family Planning." }
      , { type: "fill", q: "The 1978 declaration that made primary health care the key to Health for All is the ____ Declaration.", accept: ["Alma-Ata", "Alma Ata", "Almaata"], rationale: "The Alma-Ata Declaration of 1978." }
      , { type: "fill", q: "In Bangladesh the first referral level with 31–50 beds is the ____ Health Complex.", accept: ["Upazila", "upazila"], rationale: "The Upazila Health Complex is the first referral level." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "chn-04-epidemiology-methods",
    unit: "Unit 3 · Epidemiology & Disease Control",
    title: "Epidemiology — Principles, Measurements & Methods",
    readMinutes: 26,
    summary: "Definition, aims and uses of epidemiology; the epidemiological triad and modes of transmission; measurements of morbidity (incidence, prevalence) and mortality; standardisation; descriptive, analytical (case-control, cohort) and experimental study designs; measures of association (relative risk, odds ratio, attributable risk); screening validity (sensitivity, specificity, predictive value); and the steps of an epidemic investigation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition & scope", p: "Epidemiology is 'the study of the distribution and determinants of health-related states or events in specified populations, and the application of this study to the control of health problems' (Last). 'Distribution' (who, where, when) is descriptive epidemiology; 'determinants' (why, how) is analytical epidemiology; 'application to control' links it to public-health action." },
      { h: "Aims & uses of epidemiology", list: [
        "Describe the health status of populations (community diagnosis).",
        "Identify the causes and risk factors of disease (aetiology).",
        "Determine the natural history and prognosis of disease.",
        "Evaluate preventive and therapeutic measures (e.g. clinical trials, programme evaluation).",
        "Provide the basis for planning, monitoring and policy."
      ] },
      { h: "Epidemiological triad & transmission", p: "Communicable disease results from interaction of agent, host and environment, spread by a chain of infection: reservoir/source → portal of exit → mode of transmission → portal of entry → susceptible host. Modes of transmission are direct (contact, droplet, transplacental) and indirect (vehicle-borne, vector-borne, air-borne, fomite). Breaking any link in the chain controls the disease." },
      { h: "Measurements of morbidity — incidence & prevalence", p: "Two key rates describe how much disease exists.", list: [
        "Incidence rate = number of NEW cases during a period ÷ population at risk × 1,000. It measures the rate of occurrence of new disease.",
        "Point prevalence = number of ALL existing cases at a point in time ÷ population × 1,000. It measures the burden of existing disease.",
        "Relationship: Prevalence ≈ Incidence × mean Duration (P = I × D). Chronic disease raises prevalence; a curable/fatal disease lowers it."
      ], figure: {
        caption: "Incidence measures new cases arising; prevalence measures the pool of existing cases at a point in time (P ≈ I × D).",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Incidence prevalence relationship"><ellipse cx="240" cy="110" rx="140" ry="55" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="240" y="115" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">PREVALENCE POOL</text><text x="240" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">all existing cases</text><path d="M60 60 Q120 90 110 100" fill="none" stroke="#22C55E" stroke-width="3" marker-end="url(#chnArrE)"/><defs><marker id="chnArrE" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#22C55E"/></marker></defs><text x="55" y="50" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Incidence (new cases in)</text><path d="M370 100 Q430 120 430 160" fill="none" stroke="#0F4C3A" stroke-width="3" marker-end="url(#chnArrE)"/><text x="360" y="185" font-family="sans-serif" font-size="10" fill="#0F4C3A">recovery / death (cases out)</text></svg>'
      } },
      { h: "Measurements of mortality", list: [
        "Crude death rate = deaths in a year ÷ mid-year population × 1,000.",
        "Specific death rate — by age, sex or cause.",
        "Case fatality rate (CFR) = deaths from a disease ÷ total cases of that disease × 100 (measures virulence/severity).",
        "Infant mortality rate (IMR) = infant (<1 yr) deaths ÷ live births in the year × 1,000 — a sensitive index of community health.",
        "Maternal mortality ratio (MMR) = maternal deaths ÷ live births × 100,000.",
        "Under-five mortality rate; proportional mortality rate."
      ] },
      { h: "Standardisation of rates", p: "Crude rates can mislead when populations differ in age structure. Standardisation adjusts for this. Direct standardisation applies the study population's age-specific rates to a standard population; indirect standardisation applies a standard population's rates to the study population to give the standardised mortality ratio (SMR). Standardisation allows fair comparison between communities." },
      { h: "Descriptive epidemiology", p: "Describes disease by TIME, PLACE and PERSON. Time patterns: short-term (epidemic), seasonal/cyclical, and secular (long-term) trends. Place: international, national, rural/urban, local clustering. Person: age, sex, occupation, social class, marital status, ethnicity. Descriptive studies generate hypotheses about causation." },
      { h: "Analytical epidemiology — case-control study", p: "A case-control (retrospective) study starts with people who HAVE the disease (cases) and compares their past exposure with people who do not (controls). It is quick, cheap, good for rare diseases and needs few subjects, but cannot give incidence and is prone to recall and selection bias. The measure of association is the odds ratio (OR)." },
      { h: "Analytical epidemiology — cohort study", p: "A cohort (prospective, longitudinal) study starts with people free of disease, classifies them by exposure, and follows them forward to see who develops the disease. It gives incidence and relative risk directly, establishes temporal sequence, and reduces bias, but is expensive, long and unsuitable for rare diseases. The measure is relative risk (RR)." },
      { h: "Measures of association", p: "These quantify the link between exposure and disease.", list: [
        "Relative Risk (RR) = incidence in exposed ÷ incidence in unexposed (cohort). RR > 1 = increased risk.",
        "Odds Ratio (OR) = (a×d) ÷ (b×c) from a 2×2 table (case-control); approximates RR when disease is rare.",
        "Attributable Risk (AR) = incidence in exposed − incidence in unexposed; the excess risk due to the exposure (basis of prevention).",
        "Population attributable risk — the excess in the whole population from the exposure."
      ], figure: {
        caption: "The 2×2 table used to compute odds ratio and relative risk from exposure and disease status.",
        svg: '<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two by two table for OR and RR"><rect x="120" y="30" width="120" height="35" fill="#DCFCE7" stroke="#15803D"/><rect x="240" y="30" width="120" height="35" fill="#DCFCE7" stroke="#15803D"/><rect x="120" y="65" width="120" height="45" fill="#F0FDF4" stroke="#15803D"/><rect x="240" y="65" width="120" height="45" fill="#F0FDF4" stroke="#15803D"/><rect x="120" y="110" width="120" height="45" fill="#F0FDF4" stroke="#15803D"/><rect x="240" y="110" width="120" height="45" fill="#F0FDF4" stroke="#15803D"/><text x="180" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Disease +</text><text x="300" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Disease -</text><text x="60" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Exposed</text><text x="60" y="137" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Not exp.</text><text x="180" y="93" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#15803D">a</text><text x="300" y="93" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#15803D">b</text><text x="180" y="138" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#15803D">c</text><text x="300" y="138" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#15803D">d</text><text x="210" y="180" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">OR = (a×d)/(b×c)</text></svg>'
      } },
      { h: "Experimental epidemiology", p: "Experimental studies deliberately introduce or withdraw an exposure/intervention. The randomised controlled trial (RCT) — randomisation, control group, and blinding — is the gold standard for evaluating treatments and vaccines. Field trials and community trials evaluate preventive measures in whole populations." },
      { h: "Screening — validity & yield", p: "Screening presumptively identifies unrecognised disease in apparently healthy people. A screening test is judged by its validity.", list: [
        "Sensitivity = ability to correctly identify those WITH disease = a ÷ (a+c).",
        "Specificity = ability to correctly identify those WITHOUT disease = d ÷ (b+d).",
        "Positive predictive value = a ÷ (a+b) — proportion of test-positives who truly have disease; falls when prevalence is low.",
        "A good screening test is highly sensitive (few false negatives) for serious treatable disease."
      ] },
      { h: "Investigation of an epidemic", p: "Systematic steps control an outbreak.", list: [
        "Verify the diagnosis and confirm the existence of an epidemic (compare with expected/baseline).",
        "Define and identify cases (case definition) and count them.",
        "Describe by time (epidemic curve), place (spot map) and person.",
        "Formulate and test a hypothesis about source and mode of spread.",
        "Institute control measures — control the source, interrupt transmission, protect susceptibles.",
        "Continue surveillance and write a report."
      ] },
      { h: "Clinical / nursing relevance", p: "The community health nurse applies epidemiology when calculating ward or community rates, interpreting IMR/MMR to plan MCH services, choosing and interpreting screening tests, and taking the lead in outbreak investigation (line-listing cases, drawing the epidemic curve, tracing contacts, and implementing control)." },
      { h: "Key formulae to remember", list: [
        "Incidence = new cases ÷ population at risk × 1,000.",
        "Prevalence = existing cases ÷ population × 1,000; P ≈ I × D.",
        "Case fatality rate = deaths ÷ cases × 100.",
        "Relative Risk = incidence(exposed) ÷ incidence(unexposed).",
        "Sensitivity = a/(a+c); Specificity = d/(b+d)."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define epidemiology and describe its aims and uses in community health nursing.",
      "Differentiate incidence and prevalence and explain the relationship P = I × D with examples.",
      "Compare case-control and cohort study designs, stating the measure of association each yields.",
      "Define sensitivity, specificity and positive predictive value using a 2×2 table.",
      "Describe the steps in the investigation of an epidemic."
    ],
    assessment: [
      { type: "mcq", q: "The number of NEW cases of a disease occurring in a defined population during a specified period is the:", options: ["Point prevalence", "Incidence", "Case fatality rate", "Attributable risk"], answer: 1, rationale: "Incidence measures new cases arising over time; prevalence measures existing cases at a point." },
      { type: "mcq", q: "For a chronic disease of long duration, prevalence tends to be ____ incidence because P ≈ I × D.", options: ["much lower than", "equal to", "much higher than", "unrelated to"], answer: 2, rationale: "Long duration (D large) makes prevalence much higher than incidence." },
      { type: "mcq", q: "A study starts with lung-cancer patients and healthy controls and compares their PAST smoking. This design is a:", options: ["Cohort study", "Case-control study", "Randomised controlled trial", "Cross-sectional survey"], answer: 1, rationale: "Starting with disease status and looking back at exposure is a case-control (retrospective) study, yielding an odds ratio." },
      { type: "mcq", q: "Which measure of association is obtained DIRECTLY from a cohort study?", options: ["Odds ratio", "Relative risk", "Sensitivity", "Prevalence odds"], answer: 1, rationale: "Cohort studies measure incidence in exposed and unexposed, giving relative risk directly." },
      { type: "mcq", q: "The case fatality rate measures the:", options: ["Rate of new infections", "Proportion of cases that die from the disease", "Number of susceptibles", "Prevalence pool"], answer: 1, rationale: "CFR = deaths from a disease ÷ total cases × 100, reflecting severity/virulence." },
      { type: "mcq", q: "Sensitivity of a screening test is its ability to correctly identify those who:", options: ["Do NOT have the disease", "HAVE the disease", "Refuse screening", "Are immune"], answer: 1, rationale: "Sensitivity = a/(a+c) = true positives among all who truly have disease." },
      { type: "mcq", q: "When the prevalence of a disease is very low, the positive predictive value of a screening test:", options: ["Rises", "Falls", "Is unaffected", "Equals sensitivity"], answer: 1, rationale: "PPV depends on prevalence; at low prevalence more positives are false, so PPV falls." },
      { type: "mcq", q: "The FIRST step in investigating a suspected epidemic is to:", options: ["Institute control measures", "Verify the diagnosis and confirm an epidemic exists", "Write the final report", "Vaccinate everyone"], answer: 1, rationale: "One must first verify the diagnosis and confirm that observed cases exceed the expected baseline." },
      { type: "mcq", q: "The excess risk of disease in the exposed group that is due to the exposure is the:", options: ["Relative risk", "Odds ratio", "Attributable risk", "Specificity"], answer: 2, rationale: "Attributable risk = incidence(exposed) − incidence(unexposed), the excess due to exposure." },
      { type: "mcq", q: "The gold-standard design for evaluating a new vaccine's efficacy is the:", options: ["Case-control study", "Cross-sectional survey", "Randomised controlled trial", "Ecological study"], answer: 2, rationale: "The RCT with randomisation, control and blinding is the gold standard for evaluating interventions." }
      , { type: "fill", q: "The measure of association derived from a case-control study is the ____ ratio.", accept: ["odds", "odds ratio"], rationale: "Case-control studies yield the odds ratio." }
      , { type: "fill", q: "Deaths from a disease divided by total cases of that disease, ×100, gives the case ____ rate.", accept: ["fatality", "fatality rate"], rationale: "This defines the case fatality rate." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "chn-05-communicable-disease-control",
    unit: "Unit 3 · Epidemiology & Disease Control",
    title: "Communicable Disease Control",
    readMinutes: 25,
    summary: "Concepts of infection, the chain of infection and reservoirs, dynamics of transmission, immunity, epidemic/endemic/pandemic terms, general and disease-specific control measures, key communicable diseases of Bangladesh (tuberculosis, diarrhoeal disease, dengue, malaria, hepatitis, COVID-19), isolation and quarantine, and the nurse's role in surveillance and control.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key concepts & terms", list: [
        "Infection — entry and multiplication of an agent in the host.",
        "Contamination — presence of agent on a surface or article.",
        "Infestation — lodgement of arthropods/worms on or in the body.",
        "Incubation period — time from infection to first symptom.",
        "Communicable period — time during which an agent may be transferred to another host.",
        "Carrier — a person harbouring the agent without overt disease who can transmit it (healthy, incubatory, convalescent, chronic)."
      ] },
      { h: "The chain of infection", p: "Transmission requires an unbroken chain of six links. Control means breaking any link.", list: [
        "Infectious agent — the pathogen.",
        "Reservoir — where the agent lives and multiplies (human, animal, environment).",
        "Portal of exit — respiratory, GI, GU, skin, blood.",
        "Mode of transmission — direct or indirect (vehicle, vector, air, fomite).",
        "Portal of entry — the way the agent enters the new host.",
        "Susceptible host — a person lacking immunity."
      ], figure: {
        caption: "The chain of infection: breaking any of the six links interrupts transmission.",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of infection six links"><g font-family="sans-serif" font-size="9" fill="#0F4C3A" text-anchor="middle"><circle cx="70" cy="60" r="34" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="70" y="60">Agent</text><circle cx="180" cy="45" r="34" fill="#BBF7D0" stroke="#15803D" stroke-width="2"/><text x="180" y="45">Reservoir</text><circle cx="300" cy="55" r="34" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="300" y="50">Portal</text><text x="300" y="62">of exit</text><circle cx="400" cy="120" r="34" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="400" y="116">Trans-</text><text x="400" y="128">mission</text><circle cx="280" cy="155" r="34" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="280" y="150">Portal of</text><text x="280" y="162">entry</text><circle cx="130" cy="150" r="36" fill="#BBF7D0" stroke="#15803D" stroke-width="2"/><text x="130" y="145">Susceptible</text><text x="130" y="157">host</text></g></svg>'
      } },
      { h: "Dynamics of transmission", p: "Modes of transmission are DIRECT (direct contact, droplet spread, contact with soil, inoculation, transplacental) and INDIRECT (vehicle-borne — water, food, blood; vector-borne — mechanical or biological in an arthropod; air-borne — droplet nuclei and dust; fomite-borne; unclean hands). Knowing the mode dictates the control measure (e.g. safe water for cholera, vector control for dengue)." },
      { h: "Immunity", list: [
        "Innate (natural, non-specific) immunity — present from birth (skin, mucosa, inflammation).",
        "Acquired active immunity — the host makes antibodies after natural infection or vaccination; long-lasting.",
        "Acquired passive immunity — ready-made antibodies given (maternal transfer, immunoglobulin/antiserum); immediate but short-lived.",
        "Herd immunity — resistance of a whole population when a high proportion is immune, interrupting transmission and protecting the susceptible."
      ] },
      { h: "Epidemic, endemic, pandemic", list: [
        "Endemic — constant presence of a disease at expected levels in an area (e.g. malaria in some regions).",
        "Epidemic — occurrence clearly in excess of expectation (outbreak).",
        "Pandemic — an epidemic spread over several countries/continents (e.g. COVID-19).",
        "Sporadic — scattered, irregular cases."
      ] },
      { h: "General control measures", p: "Control is directed at the three points of the chain.", list: [
        "Control of the reservoir/source — early diagnosis and treatment, notification, isolation, disinfection.",
        "Interruption of transmission — safe water, food hygiene, vector control, hand hygiene, cough etiquette.",
        "Protection of the susceptible host — immunisation, chemoprophylaxis, health education, better nutrition.",
        "Isolation — separation of infected persons for the communicable period.",
        "Quarantine — restriction of apparently well contacts for the maximum incubation period.",
        "Surveillance, contact tracing and notification of notifiable diseases."
      ] },
      { h: "Tuberculosis (TB)", p: "Caused by Mycobacterium tuberculosis, spread by droplet nuclei. A major problem in Bangladesh. Controlled through the National TB Programme using DOTS — case detection by sputum smear/GeneXpert, directly observed short-course chemotherapy (typically 6 months: 2 months intensive HRZE + 4 months HR), BCG vaccination, and contact screening. The nurse ensures adherence, records treatment, and screens contacts." },
      { h: "Diarrhoeal diseases & cholera", p: "Faeco-oral spread through contaminated water and food; a leading cause of under-five deaths. Cornerstones: oral rehydration therapy (ORS) to prevent/treat dehydration, zinc for children, safe water, sanitation, hand-washing, exclusive breastfeeding, and oral cholera vaccine in high-risk settings. Bangladesh (ICDDR,B) pioneered ORS." },
      { h: "Vector-borne diseases — dengue & malaria", list: [
        "Dengue — Aedes aegypti mosquito (day-biting, breeds in clean stored water). Control: source reduction of breeding sites, larviciding, community clean-up; nursing: fluid balance, warning-sign monitoring, avoid NSAIDs.",
        "Malaria — Anopheles mosquito, chiefly in hilly districts. Control: insecticide-treated bed nets (ITNs/LLINs), indoor residual spraying, prompt diagnosis by RDT/microscopy and treatment, chemoprophylaxis for travellers."
      ] },
      { h: "Hepatitis & blood-borne infections", p: "Hepatitis A and E spread faeco-orally (prevented by safe water/sanitation and, for A, vaccine). Hepatitis B and C and HIV are blood-borne and sexually transmitted; prevention includes hepatitis-B immunisation (in EPI), safe injection practice, screening of blood, and standard precautions — central to the nurse's role." },
      { h: "Emerging infections — COVID-19", p: "COVID-19 (SARS-CoV-2) is spread by respiratory droplets and aerosols. Control combines non-pharmaceutical measures (masks, hand hygiene, physical distancing, ventilation, isolation of cases and quarantine of contacts) with vaccination and surveillance — a modern application of classic communicable-disease principles." },
      { h: "Clinical / nursing relevance", p: "The community health nurse is central to communicable-disease control: educating on hygiene and vaccination, detecting and notifying cases, tracing and screening contacts, supervising DOTS and ORS use, promoting bed nets and source reduction, and applying isolation/quarantine and standard precautions correctly." },
      { h: "Key figures to remember", list: [
        "DOTS short-course TB regimen — commonly 6 months (2 HRZE + 4 HR).",
        "Isolation = for the infected during the communicable period; quarantine = for well contacts during the incubation period.",
        "ORS + zinc — mainstay of childhood diarrhoea management.",
        "Aedes = dengue; Anopheles = malaria.",
        "Herd immunity interrupts transmission when a high proportion are immune."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Describe the chain of infection and explain how control measures break each link.",
      "Differentiate isolation and quarantine, and active and passive immunity.",
      "Outline the control of tuberculosis under the DOTS strategy in Bangladesh.",
      "Discuss the prevention and control of dengue at community level and the nurse's role.",
      "Define epidemic, endemic and pandemic with examples, and state general measures to control an epidemic."
    ],
    assessment: [
      { type: "mcq", q: "Restricting the movement of apparently well CONTACTS of a case for the maximum incubation period is called:", options: ["Isolation", "Quarantine", "Notification", "Disinfection"], answer: 1, rationale: "Quarantine restricts well contacts during the incubation period; isolation separates the infected during the communicable period." },
      { type: "mcq", q: "Antibodies transferred from mother to fetus across the placenta give the infant:", options: ["Passive natural immunity", "Active natural immunity", "Active artificial immunity", "Innate immunity"], answer: 0, rationale: "Ready-made maternal antibodies confer passive natural immunity — immediate but short-lived." },
      { type: "mcq", q: "Dengue is transmitted by which vector, which breeds in clean stored water?", options: ["Anopheles mosquito", "Culex mosquito", "Aedes aegypti mosquito", "Housefly"], answer: 2, rationale: "Aedes aegypti, a day-biting mosquito breeding in clean stored water, transmits dengue." },
      { type: "mcq", q: "The cornerstone of managing acute watery diarrhoea in a child at community level is:", options: ["Immediate antibiotics for all", "Antimotility drugs", "Withholding all fluids", "Oral rehydration solution and zinc"], answer: 3, rationale: "ORS to prevent/treat dehydration plus zinc is the mainstay; routine antibiotics/antimotility drugs are not." },
      { type: "mcq", q: "The DOTS strategy for tuberculosis primarily ensures:", options: ["Directly observed, complete short-course chemotherapy", "Lifelong isolation of all patients", "Surgery for every case", "Only BCG vaccination"], answer: 0, rationale: "DOTS = directly observed treatment, short-course, ensuring adherence and cure." },
      { type: "mcq", q: "A disease constantly present at expected levels in a particular area is described as:", options: ["Epidemic", "Pandemic", "Endemic", "Sporadic"], answer: 2, rationale: "Endemic means the habitual, expected presence of a disease in an area." },
      { type: "mcq", q: "Which measure BEST interrupts the transmission link of the chain of infection for cholera?", options: ["Immunising the whole population only", "Providing safe water and sanitation with hand hygiene", "Isolating recovered patients", "Giving antipyretics"], answer: 1, rationale: "Cholera spreads faeco-orally through water/food; safe water, sanitation and hand hygiene interrupt transmission." },
      { type: "mcq", q: "Herd immunity protects susceptible individuals mainly by:", options: ["Giving them passive antibodies", "Reducing transmission when a high proportion of the population is immune", "Killing the vector", "Increasing the incubation period"], answer: 1, rationale: "When enough people are immune, chains of transmission are broken, indirectly protecting the non-immune." },
      { type: "mcq", q: "A person who harbours and can transmit an agent without showing overt disease is a:", options: ["Susceptible host", "Carrier", "Vector", "Reservoir animal"], answer: 1, rationale: "A carrier harbours the agent without overt disease and can transmit it." },
      { type: "mcq", q: "Which pair is correctly matched by mode of spread?", options: ["Hepatitis B — faeco-oral", "Hepatitis A — blood-borne", "Malaria — vector-borne", "Tuberculosis — water-borne"], answer: 2, rationale: "Malaria is vector-borne (Anopheles); hepatitis B is blood-borne, hepatitis A faeco-oral, TB droplet/air-borne." }
      , { type: "fill", q: "Separation of an infected person for the duration of the communicable period is called ____.", accept: ["isolation"], rationale: "Isolation separates the infected; quarantine restricts well contacts." }
      , { type: "fill", q: "The mosquito genus that transmits malaria is ____.", accept: ["Anopheles", "anopheles"], rationale: "Anopheles mosquitoes transmit malaria." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "chn-06-immunization-epi-cold-chain",
    unit: "Unit 3 · Epidemiology & Disease Control",
    title: "Immunization, the Expanded Programme on Immunization (EPI) & the Cold Chain",
    readMinutes: 25,
    summary: "Principles and types of immunity and vaccines, the EPI schedule of Bangladesh, target diseases, routes and sites of administration, the cold chain and vaccine vial monitor, adverse events following immunization (AEFI), contraindications and false contraindications, open-vial policy, and the nurse's role in immunization services.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Immunization & immunity", p: "Immunization is the process of inducing or providing immunity artificially. Active immunization gives an antigen (vaccine/toxoid) so the host makes its own long-lasting antibodies; passive immunization gives ready-made antibodies (immunoglobulin/antiserum) for immediate but short-lived protection. EPI relies mainly on active immunization to protect children against vaccine-preventable diseases." },
      { h: "Types of vaccines", list: [
        "Live attenuated — weakened organisms (BCG, OPV, measles, MR); usually one/two doses give durable immunity; avoid in immunocompromised and pregnancy.",
        "Killed/inactivated — whole killed organisms (IPV, whole-cell pertussis, cholera).",
        "Toxoids — inactivated toxins (tetanus toxoid, diphtheria toxoid).",
        "Subunit/conjugate — parts of the organism (hepatitis B surface antigen, Hib, pneumococcal conjugate, HPV).",
        "mRNA/vector vaccines — newer platforms (e.g. some COVID-19 vaccines)."
      ] },
      { h: "The Expanded Programme on Immunization (EPI)", p: "Launched by WHO in 1974 and in Bangladesh in 1979, EPI provides free routine immunization to protect children and mothers against major vaccine-preventable diseases. Bangladesh's EPI is a public-health success with high coverage. Target diseases include tuberculosis, diphtheria, pertussis, tetanus, poliomyelitis, hepatitis B, Haemophilus influenzae type b, measles, rubella, and pneumococcal disease." },
      { h: "EPI schedule of Bangladesh (childhood)", list: [
        "At birth — BCG and OPV-0 (and hepatitis B birth dose where used).",
        "6 weeks — Pentavalent-1 (DPT-HepB-Hib), OPV-1, PCV-1.",
        "10 weeks — Pentavalent-2, OPV-2, PCV-2.",
        "14 weeks — Pentavalent-3, OPV-3, IPV, PCV-3.",
        "9 months — MR-1 (measles-rubella) (and, in schedule, a further OPV where applicable).",
        "15 months — MR-2."
      ], figure: {
        caption: "Simplified childhood EPI schedule of Bangladesh from birth to 15 months.",
        svg: '<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="EPI childhood schedule timeline"><line x1="40" y1="90" x2="490" y2="90" stroke="#15803D" stroke-width="3"/><g font-family="sans-serif" font-size="9" fill="#0F4C3A" text-anchor="middle"><circle cx="60" cy="90" r="6" fill="#0F4C3A"/><text x="60" y="70">Birth</text><text x="60" y="120">BCG,OPV0</text><circle cx="150" cy="90" r="6" fill="#15803D"/><text x="150" y="70">6 wk</text><text x="150" y="120">Penta1,OPV1,PCV1</text><circle cx="250" cy="90" r="6" fill="#22C55E"/><text x="250" y="70">10 wk</text><text x="250" y="120">Penta2,OPV2,PCV2</text><circle cx="350" cy="90" r="6" fill="#15803D"/><text x="350" y="70">14 wk</text><text x="350" y="120">Penta3,OPV3,IPV,PCV3</text><circle cx="430" cy="90" r="6" fill="#0F4C3A"/><text x="430" y="70">9 mo</text><text x="430" y="120">MR-1</text><circle cx="480" cy="90" r="6" fill="#22C55E"/><text x="480" y="70">15 mo</text><text x="480" y="120">MR-2</text></g></svg>'
      } },
      { h: "Tetanus protection for mothers", p: "To eliminate maternal and neonatal tetanus, tetanus-diphtheria (Td) is given to women of childbearing age in a five-dose lifetime schedule (Td1 at first contact, Td2 at least 4 weeks later, Td3 at least 6 months later, Td4 and Td5 at least one year apart), giving lasting protection. Clean delivery and cord care complete prevention." },
      { h: "Routes & sites of administration", list: [
        "BCG — intradermal, over the left upper arm (deltoid).",
        "OPV — oral drops.",
        "Pentavalent, PCV, IPV — intramuscular, anterolateral thigh (mid-outer thigh) in infants.",
        "MR — subcutaneous, upper arm.",
        "Correct dose, route, site and aseptic technique are essential."
      ] },
      { h: "The cold chain", p: "The cold chain is the system of storing and transporting vaccines within a safe temperature range from manufacturer to the child. Most EPI vaccines are kept at +2°C to +8°C in refrigerators/cold boxes; some (OPV) may be frozen at storage level. Freezing damages freeze-sensitive vaccines (Pentavalent, PCV, IPV, Td), while heat damages heat-sensitive vaccines (BCG, OPV, MR). The chain must never be broken.", figure: {
        caption: "The cold chain keeps vaccines at +2°C to +8°C from central store through district and facility to the child.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cold chain from store to child"><defs><marker id="chnArrCC" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif" font-size="9" fill="#0F4C3A" text-anchor="middle"><rect x="20" y="55" width="90" height="40" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="65" y="72">Central</text><text x="65" y="85">cold store</text><rect x="150" y="55" width="90" height="40" rx="6" fill="#BBF7D0" stroke="#15803D"/><text x="195" y="72">District</text><text x="195" y="85">store</text><rect x="280" y="55" width="90" height="40" rx="6" fill="#86EFAC" stroke="#15803D"/><text x="325" y="72">Facility</text><text x="325" y="85">refrigerator</text><rect x="410" y="55" width="90" height="40" rx="6" fill="#22C55E" stroke="#0F4C3A"/><text x="455" y="72">Cold box</text><text x="455" y="85">to child</text></g><line x1="110" y1="75" x2="146" y2="75" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrCC)"/><line x1="240" y1="75" x2="276" y2="75" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrCC)"/><line x1="370" y1="75" x2="406" y2="75" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrCC)"/><text x="260" y="30" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Maintain +2°C to +8°C throughout</text></svg>'
      } },
      { h: "Vaccine vial monitor (VVM) & open-vial policy", p: "The vaccine vial monitor is a heat-sensitive label on the vial: when the inner square is lighter than the outer ring the vaccine is usable; when the square matches or is darker than the ring, discard it. Under the multi-dose open-vial policy, certain opened liquid vaccines (OPV, Pentavalent, Td, PCV, hepatitis B) may be used at later sessions for up to 28 days if stored correctly, the VVM is good, and no contamination — while reconstituted BCG and MR must be discarded after 6 hours." },
      { h: "Adverse events following immunization (AEFI)", p: "An AEFI is any untoward medical event after immunization, which may or may not be caused by the vaccine. Most are mild and expected (local soreness, low fever, mild rash). Serious AEFI (high fever, seizures, anaphylaxis, abscess) must be recognised, treated (adrenaline for anaphylaxis), and reported. Correct technique and cold-chain reduce programme-error AEFI." },
      { h: "Contraindications & false contraindications", list: [
        "True contraindications — severe reaction/anaphylaxis to a previous dose; live vaccines in severe immunodeficiency or pregnancy; encephalopathy after pertussis.",
        "False contraindications (should NOT delay vaccination) — minor illness with low fever, mild diarrhoea, malnutrition, breastfeeding, prematurity, and a family history of convulsions.",
        "Missed doses — continue the schedule from where it stopped; do NOT restart."
      ] },
      { h: "Clinical / nursing relevance", p: "The nurse maintains the cold chain and checks VVMs, gives the right vaccine by the right route/site with aseptic technique, keeps and updates immunization records/cards, educates parents on schedule and minor reactions, screens for true contraindications, manages and reports AEFI, and mobilises the community to raise coverage and reduce dropout." },
      { h: "Key figures to remember", list: [
        "EPI launched: WHO 1974; Bangladesh 1979.",
        "Cold-chain range: +2°C to +8°C.",
        "Open-vial policy: liquid vaccines up to 28 days; reconstituted BCG/MR discard after 6 hours.",
        "BCG — intradermal; OPV — oral; Pentavalent — IM anterolateral thigh; MR — subcutaneous.",
        "Freeze-sensitive: Pentavalent, PCV, IPV, Td; heat-sensitive: BCG, OPV, MR."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Differentiate active and passive immunization and give examples of each type of vaccine.",
      "Write the childhood EPI schedule of Bangladesh with routes and sites of administration.",
      "Explain the cold chain, the vaccine vial monitor and the open-vial policy.",
      "Describe adverse events following immunization (AEFI) and the nurse's responsibilities.",
      "List true and false contraindications to immunization and the rule for missed doses."
    ],
    assessment: [
      { type: "mcq", q: "The recommended storage temperature range for most EPI vaccines in the cold chain is:", options: ["−20°C to −10°C", "0°C to +2°C", "+2°C to +8°C", "+15°C to +25°C"], answer: 2, rationale: "Most EPI vaccines are kept at +2°C to +8°C; freezing damages freeze-sensitive vaccines." },
      { type: "mcq", q: "BCG vaccine is administered by which route and site?", options: ["Oral drops", "Intradermal, over the left upper arm", "Intramuscular, thigh", "Subcutaneous, abdomen"], answer: 1, rationale: "BCG is given intradermally over the left deltoid region." },
      { type: "mcq", q: "According to Bangladesh EPI, measles-rubella (MR-1) is given at:", options: ["Birth", "6 weeks", "9 months", "5 years"], answer: 2, rationale: "MR-1 is scheduled at 9 months, with MR-2 at 15 months." },
      { type: "mcq", q: "When the inner square of a vaccine vial monitor becomes the same colour as or darker than the outer ring, the nurse should:", options: ["Use the vaccine immediately", "Discard the vaccine", "Freeze the vaccine", "Dilute the vaccine"], answer: 1, rationale: "A VVM square that matches or is darker than the ring indicates heat damage — discard the vaccine." },
      { type: "mcq", q: "Which is a FALSE contraindication that should NOT delay immunization?", options: ["Anaphylaxis to a previous dose", "Mild diarrhoea with low fever", "Severe immunodeficiency for a live vaccine", "Encephalopathy after pertussis"], answer: 1, rationale: "Minor illness with low fever is a false contraindication; immunization should proceed." },
      { type: "mcq", q: "A child received Pentavalent-1 but missed the next dose for two months. The nurse should:", options: ["Restart the whole schedule", "Continue from where it stopped with Pentavalent-2", "Skip to MR", "Give a double dose"], answer: 1, rationale: "For missed doses, continue the schedule from where it stopped; do not restart." },
      { type: "mcq", q: "Reconstituted BCG and MR vaccines must be discarded after:", options: ["28 days", "6 hours", "72 hours", "1 hour"], answer: 1, rationale: "Reconstituted BCG and MR must be discarded after 6 hours, unlike liquid vaccines under the 28-day open-vial policy." },
      { type: "mcq", q: "Immediate protection using ready-made antibodies (e.g. tetanus immunoglobulin) is an example of:", options: ["Active immunization", "Passive immunization", "Herd immunity", "Toxoid immunity"], answer: 1, rationale: "Passive immunization provides ready-made antibodies for immediate but short-lived protection." },
      { type: "mcq", q: "The Pentavalent vaccine in infants is correctly given:", options: ["Orally", "Intradermally in the forearm", "Intramuscularly in the anterolateral thigh", "Subcutaneously in the abdomen"], answer: 2, rationale: "Pentavalent is given intramuscularly in the anterolateral (mid-outer) thigh of the infant." },
      { type: "mcq", q: "Which group of vaccines is FREEZE-sensitive (damaged by freezing)?", options: ["BCG, OPV, MR", "Pentavalent, PCV, IPV, Td", "OPV and BCG only", "All live vaccines"], answer: 1, rationale: "Pentavalent, PCV, IPV and Td are freeze-sensitive; BCG, OPV and MR are chiefly heat-sensitive." }
      , { type: "fill", q: "The system of keeping vaccines at a safe temperature from manufacturer to child is the ____ chain.", accept: ["cold", "cold chain"], rationale: "The cold chain maintains +2°C to +8°C throughout." }
      , { type: "fill", q: "Any untoward medical event after immunization is abbreviated ____.", accept: ["AEFI"], rationale: "AEFI = adverse event following immunization." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "chn-07-ncd-prevention",
    unit: "Unit 3 · Epidemiology & Disease Control",
    title: "Non-Communicable Diseases & Their Prevention",
    readMinutes: 25,
    summary: "Definition and burden of non-communicable diseases (NCDs), shared modifiable and non-modifiable risk factors, the major NCDs (cardiovascular disease, diabetes, cancer, chronic respiratory disease), the epidemiological transition, levels of prevention including population and high-risk strategies, screening, and the community health nurse's role in NCD control.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition & the four major NCDs", p: "Non-communicable diseases are chronic, non-infectious conditions of long duration and generally slow progression, resulting from a combination of genetic, physiological, environmental and behavioural factors. WHO's four major NCDs are cardiovascular diseases (heart attack, stroke), diabetes mellitus, cancers, and chronic respiratory diseases (COPD, asthma). They share common modifiable risk factors." },
      { h: "The epidemiological transition & double burden", p: "As countries develop, the main causes of death shift from infectious diseases and undernutrition toward chronic NCDs — the epidemiological transition. Bangladesh now faces a 'double burden': communicable diseases and undernutrition persist while NCDs rise rapidly, now causing the majority of deaths — demanding integrated community programmes." },
      { h: "Shared risk factors", p: "Most NCDs share a small set of risk factors, so tackling them prevents several diseases at once.", list: [
        "Modifiable behavioural — tobacco use, unhealthy diet (salt, sugar, saturated/trans fat), physical inactivity, harmful alcohol use.",
        "Modifiable metabolic (intermediate) — raised blood pressure, overweight/obesity, hyperglycaemia, raised blood lipids.",
        "Non-modifiable — age, sex, genetics and family history.",
        "Environmental — air pollution."
      ], figure: {
        caption: "Shared modifiable risk factors drive intermediate metabolic risks, which lead to the major NCDs.",
        svg: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Risk factor pathway to NCDs"><defs><marker id="chnArrN" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="55" width="140" height="90" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="85" y="75" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Behaviour</text><text x="85" y="95" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">tobacco, diet,</text><text x="85" y="110" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">inactivity, alcohol</text><rect x="190" y="55" width="140" height="90" rx="8" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="260" y="75" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Metabolic</text><text x="260" y="95" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">raised BP, BMI,</text><text x="260" y="110" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">glucose, lipids</text><rect x="365" y="55" width="140" height="90" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="435" y="75" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">NCDs</text><text x="435" y="95" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">CVD, diabetes,</text><text x="435" y="110" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">cancer, CRD</text><line x1="155" y1="100" x2="186" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrN)"/><line x1="330" y1="100" x2="361" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrN)"/></svg>'
      } },
      { h: "Cardiovascular disease & hypertension", p: "CVD (coronary heart disease and stroke) is the leading cause of NCD death. Hypertension is the chief modifiable risk factor; blood pressure is normal below 120/80 mmHg and hypertension is generally diagnosed at ≥140/90 mmHg on repeated measurement. Prevention: reduce salt, tobacco and alcohol; healthy weight and activity; detect and treat raised BP and lipids." },
      { h: "Diabetes mellitus", p: "Type 2 diabetes is rising sharply. Diagnostic thresholds: fasting plasma glucose ≥7.0 mmol/L (126 mg/dL), or 2-hour post-load ≥11.1 mmol/L (200 mg/dL), or HbA1c ≥6.5%. Prevention and control centre on healthy diet, physical activity, weight control, screening high-risk adults, and education on foot care, medication adherence and complication prevention." },
      { h: "Cancer", p: "Common cancers in Bangladesh include lung and oral (tobacco-related), cervical, breast, and stomach. Up to a third of cancers are preventable through tobacco control, diet, HPV and hepatitis-B vaccination, and infection control; another third are curable if detected early — hence screening (cervical VIA/Pap, breast self-examination and clinical examination, oral inspection)." },
      { h: "Chronic respiratory disease", p: "COPD and asthma are driven by tobacco smoke, indoor air pollution (biomass cooking fuel), occupational dust and outdoor pollution. Prevention: tobacco cessation, clean cooking fuels/ventilation, and early management to prevent exacerbations." },
      { h: "Population vs high-risk prevention strategy", p: "Two complementary strategies (Rose).", list: [
        "Population (mass) strategy — shift the whole population's risk distribution downward (e.g. reduce salt in the food supply, ban smoking in public places). Large total benefit but small individual gain (the 'prevention paradox').",
        "High-risk strategy — identify and treat those at highest risk (e.g. treat people with very high BP). Cost-effective for individuals but misses the many at moderate risk who produce most cases."
      ] },
      { h: "Levels of prevention for NCDs", list: [
        "Primordial — prevent risk factors emerging (school health, healthy food environments).",
        "Primary — health promotion and specific protection (tobacco control, diet, activity, HPV/HBV vaccination).",
        "Secondary — screening and early detection (BP, blood glucose, cervical/breast screening) and prompt treatment.",
        "Tertiary — control established disease, prevent complications, and rehabilitate (e.g. cardiac and stroke rehabilitation, diabetic foot care)."
      ] },
      { h: "Screening for NCDs", p: "Because NCDs are often silent (the iceberg), opportunistic and organised screening is central: blood-pressure measurement, random/fasting blood glucose, BMI and waist circumference, cervical screening by VIA, and breast examination. Screening must lead to confirmed diagnosis, treatment and follow-up to be worthwhile." },
      { h: "WHO 'best buys' & policy measures", p: "Cost-effective population interventions ('best buys') include tobacco taxation and smoke-free laws, salt reduction, restriction of harmful alcohol, promotion of physical activity, and cervical/breast screening. Bangladesh has a National NCD Control Programme and tobacco-control law supporting these measures." },
      { h: "Clinical / nursing relevance", p: "The community health nurse conducts NCD risk-factor screening and health education, measures and records BP/glucose/BMI, counsels on diet, exercise, tobacco and alcohol, supports medication adherence and self-care in diabetes and hypertension, teaches breast self-examination and promotes cervical screening, and refers and follows up — often through community clinics and NCD corners." },
      { h: "Key figures to remember", list: [
        "Four major NCDs: cardiovascular disease, diabetes, cancer, chronic respiratory disease.",
        "Hypertension threshold ≥140/90 mmHg; normal BP <120/80 mmHg.",
        "Diabetes: fasting glucose ≥7.0 mmol/L (126 mg/dL) or HbA1c ≥6.5%.",
        "Shared behavioural risks: tobacco, unhealthy diet, physical inactivity, harmful alcohol.",
        "Population strategy vs high-risk strategy (Rose); the prevention paradox."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define non-communicable disease and name WHO's four major NCDs with their shared risk factors.",
      "Explain the epidemiological transition and the double burden of disease in Bangladesh.",
      "Compare the population and high-risk strategies of prevention with examples.",
      "Describe the levels of prevention applied to diabetes mellitus and the nurse's role.",
      "Discuss community-level screening for non-communicable diseases and its requirements."
    ],
    assessment: [
      { type: "mcq", q: "Which of the following is one of WHO's four major non-communicable diseases?", options: ["Tuberculosis", "Cardiovascular disease", "Cholera", "Malaria"], answer: 1, rationale: "The four major NCDs are cardiovascular disease, diabetes, cancer and chronic respiratory disease; the others listed are communicable." },
      { type: "mcq", q: "Reducing salt in the entire national food supply to lower everyone's blood pressure is an example of the:", options: ["High-risk strategy", "Tertiary prevention", "Population (mass) strategy", "Rehabilitation"], answer: 2, rationale: "Shifting the whole population's risk distribution downward is the population/mass strategy." },
      { type: "mcq", q: "Hypertension is generally diagnosed at a blood pressure of:", options: ["≥110/70 mmHg", "≥120/80 mmHg", "≥140/90 mmHg", "≥100/60 mmHg"], answer: 2, rationale: "Hypertension is generally diagnosed at ≥140/90 mmHg on repeated measurement; <120/80 is normal." },
      { type: "mcq", q: "A fasting plasma glucose of 8.0 mmol/L (144 mg/dL) on repeat testing indicates:", options: ["Normal glucose", "Hypoglycaemia", "Dehydration only", "Diabetes mellitus"], answer: 3, rationale: "Fasting glucose ≥7.0 mmol/L (126 mg/dL) meets the diagnostic threshold for diabetes." },
      { type: "mcq", q: "The 'prevention paradox' describes how:", options: ["A measure bringing large benefit to the population offers little to each individual", "Screening always harms", "High-risk strategy prevents all cases", "NCDs are contagious"], answer: 0, rationale: "The prevention paradox: population measures give large total benefit but small individual gain." },
      { type: "mcq", q: "The shift from infectious diseases toward chronic NCDs as the leading causes of death is called the:", options: ["Demographic cycle", "Epidemiological transition", "Cold chain", "Iceberg phenomenon"], answer: 1, rationale: "The epidemiological transition is the shift in disease patterns as societies develop." },
      { type: "mcq", q: "Teaching breast self-examination and promoting cervical VIA screening are examples of:", options: ["Primary prevention", "Secondary prevention", "Primordial prevention", "Rehabilitation"], answer: 1, rationale: "Early detection through screening for existing but unrecognised disease is secondary prevention." },
      { type: "mcq", q: "Which risk factor is shared by cardiovascular disease, cancer and chronic respiratory disease?", options: ["Tobacco use", "Advanced age only", "Female sex", "Blood group"], answer: 0, rationale: "Tobacco use is a common modifiable risk factor across the major NCDs." },
      { type: "mcq", q: "A community nurse identifies and treats only individuals with very high blood pressure. This reflects the:", options: ["Population strategy", "High-risk strategy", "Primordial strategy", "Cold-chain strategy"], answer: 1, rationale: "Targeting those at highest individual risk is the high-risk strategy." },
      { type: "mcq", q: "Bangladesh's coexistence of persisting infections/undernutrition with rising NCDs is called the:", options: ["Herd immunity effect", "Double burden of disease", "Prevention paradox", "Natural history of disease"], answer: 1, rationale: "Facing both communicable diseases/undernutrition and NCDs is the double burden of disease." }
      , { type: "fill", q: "The chief modifiable risk factor for stroke and coronary heart disease, defined as BP ≥140/90 mmHg, is ____.", accept: ["hypertension", "high blood pressure"], rationale: "Hypertension is the chief modifiable cardiovascular risk factor." }
      , { type: "fill", q: "Strategies that shift the whole population's risk downward are called the ____ strategy of prevention.", accept: ["population", "mass", "population (mass)"], rationale: "The population/mass strategy lowers risk across the whole population." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "chn-08-environmental-health",
    unit: "Unit 4 · Environmental Health",
    title: "Environmental Health — Safe Water, Sanitation, Waste Disposal & Housing",
    readMinutes: 24,
    summary: "Concept of environmental health, safe and adequate water supply and purification, water-related diseases, human excreta disposal and sanitation, solid and hazardous waste management including biomedical waste, air pollution, housing standards, arsenic in Bangladesh, and the nurse's role in environmental health promotion.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept of environmental health", p: "Environmental health addresses the physical, chemical and biological factors external to a person and all related behaviour that can affect health. It targets the prevention of disease by controlling the environment — safe water, sanitation, clean air, safe food, adequate housing and waste management — a core element of primary health care." },
      { h: "Safe and wholesome water", p: "Safe (potable) water is free from pathogens and harmful chemicals, clear, colourless, odourless, palatable and usable for domestic purposes. Water is essential and also a vehicle of disease. A minimum of about 40–50 litres per person per day is a common domestic requirement (varying by context)." },
      { h: "Water-related diseases", list: [
        "Water-borne — pathogens IN the water: cholera, typhoid, hepatitis A/E, dysentery, poliomyelitis.",
        "Water-washed — from lack of water for hygiene: skin and eye infections (scabies, trachoma).",
        "Water-based — part of the life cycle in water (schistosomiasis).",
        "Water-related vector — vectors breed in/near water (malaria, dengue).",
        "Chemical — arsenic and fluoride contamination (important in Bangladesh)."
      ] },
      { h: "Purification of water", p: "Water is purified on a large and small scale.", list: [
        "Large-scale — storage/sedimentation, filtration (slow sand or rapid sand), and disinfection (chlorination).",
        "Small-scale/household — boiling (bring to rolling boil), chlorination (bleaching powder/tablets), filtration (ceramic/candle), SODIS (solar disinfection), and safe storage.",
        "Chlorination — a free residual chlorine of about 0.5 mg/L after 30 minutes' contact indicates adequate disinfection."
      ], figure: {
        caption: "Conventional large-scale water purification: storage/sedimentation → filtration → disinfection (chlorination).",
        svg: '<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Water purification steps"><defs><marker id="chnArrW" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif" font-size="10" fill="#0F4C3A" text-anchor="middle"><rect x="15" y="50" width="120" height="50" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="75" y="72">Storage /</text><text x="75" y="87">sedimentation</text><rect x="185" y="50" width="120" height="50" rx="8" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="245" y="80">Filtration</text><rect x="355" y="50" width="130" height="50" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="420" y="72">Disinfection</text><text x="420" y="87">(chlorination)</text></g><line x1="135" y1="75" x2="181" y2="75" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrW)"/><line x1="305" y1="75" x2="351" y2="75" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrW)"/></svg>'
      } },
      { h: "Arsenic contamination in Bangladesh", p: "A major public-health issue: many shallow tube wells draw groundwater with arsenic above the Bangladesh limit of 0.05 mg/L (WHO guideline 0.01 mg/L). Chronic exposure causes arsenicosis — skin pigmentation (melanosis), keratosis, and increased risk of skin, bladder and lung cancers. Response: well testing and painting (red = unsafe, green = safe), alternative safe sources (deep wells, rainwater, treatment), and community education." },
      { h: "Disposal of human excreta & sanitation", p: "Safe disposal of faeces breaks the faeco-oral chain (the 'F-diagram': faeces reaching new hosts via fluids, fingers, flies, fields/food). Sanitary options in rural settings include the sanitary pit latrine, water-seal (pour-flush) latrine, and septic tank systems. The goal is a sanitary latrine for every household, hand-washing with soap, and an end to open defecation." },
      { h: "Solid & hazardous waste management", p: "Solid waste (refuse) if not managed breeds flies, rodents and disease and pollutes water. Steps: segregation at source, storage, collection, transport, and disposal by sanitary landfill, composting, or incineration for suitable waste. Poor disposal contaminates water and encourages vectors." },
      { h: "Biomedical (health-care) waste", p: "Biomedical waste is hazardous and must be segregated at source by colour-coded bins and treated separately: infectious/sharps carry risk of injury and infection (hepatitis B/C, HIV). Sharps go in puncture-proof containers; infectious waste is autoclaved or incinerated. Correct segregation is a key nursing responsibility to protect staff, patients and the community." },
      { h: "Air pollution & housing", p: "Air pollution (outdoor: vehicles, industry, brick kilns; indoor: biomass cooking fuel and tobacco smoke) causes respiratory and cardiovascular disease. Adequate housing — sufficient space to avoid overcrowding, ventilation, lighting, safe water and sanitation, and protection from vectors — is fundamental; overcrowding promotes the spread of respiratory and other communicable diseases." },
      { h: "Waste-water and refuse and vector control", p: "Stagnant waste water and refuse provide breeding sites for mosquitoes and flies. Environmental control (source reduction, drainage, covering water storage, refuse removal) is the most sustainable method of vector control and underpins the prevention of dengue and malaria." },
      { h: "Clinical / nursing relevance", p: "The community health nurse promotes safe water and household purification, teaches hand-washing and sanitary latrine use, identifies and refers arsenicosis cases, ensures correct segregation and disposal of biomedical waste in clinics, advises on ventilation and clean cooking fuel, and participates in community sanitation drives and outbreak control." },
      { h: "Key figures to remember", list: [
        "Domestic water need ≈ 40–50 L/person/day (context-dependent).",
        "Arsenic limits — Bangladesh 0.05 mg/L; WHO guideline 0.01 mg/L.",
        "Adequate chlorination — free residual chlorine ~0.5 mg/L after 30 minutes.",
        "Faeco-oral spread — the F-diagram: fluids, fingers, flies, fields/food.",
        "Biomedical waste — colour-coded segregation; sharps in puncture-proof containers."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define environmental health and describe the characteristics of safe water.",
      "Classify water-related diseases with examples and describe household water purification methods.",
      "Discuss arsenic contamination of groundwater in Bangladesh, its effects and control.",
      "Explain safe disposal of human excreta and how it breaks the faeco-oral chain.",
      "Describe biomedical waste management and the nurse's responsibilities in a community clinic."
    ],
    assessment: [
      { type: "mcq", q: "Cholera and typhoid, caused by pathogens present in drinking water, are classified as:", options: ["Water-washed diseases", "Water-borne diseases", "Water-based diseases", "Vector-related diseases"], answer: 1, rationale: "Water-borne diseases are caused by pathogens IN the water, such as cholera and typhoid." },
      { type: "mcq", q: "The WHO guideline limit for arsenic in drinking water is:", options: ["0.5 mg/L", "0.05 mg/L", "0.01 mg/L", "1.0 mg/L"], answer: 2, rationale: "The WHO guideline is 0.01 mg/L; the Bangladesh national limit is 0.05 mg/L." },
      { type: "mcq", q: "The MOST reliable household method to make small quantities of water safe to drink is to:", options: ["Add sugar", "Leave it in sunlight for 5 minutes", "Filter through cloth only", "Bring it to a rolling boil"], answer: 3, rationale: "Boiling to a rolling boil reliably kills pathogens; cloth filtering and brief sun exposure are insufficient." },
      { type: "mcq", q: "Adequate chlorination of water is indicated by a free residual chlorine of about:", options: ["0.05 mg/L after 5 minutes", "0.5 mg/L after 30 minutes", "5 mg/L after 1 minute", "0.001 mg/L after 2 hours"], answer: 1, rationale: "A free residual chlorine of about 0.5 mg/L after 30 minutes' contact indicates adequate disinfection." },
      { type: "mcq", q: "Chronic arsenic exposure classically causes:", options: ["Goitre", "Dental fluorosis only", "Skin melanosis and keratosis with raised cancer risk (arsenicosis)", "Night blindness"], answer: 2, rationale: "Arsenicosis presents with skin pigmentation (melanosis), keratosis and increased skin, bladder and lung cancer risk." },
      { type: "mcq", q: "The 'F-diagram' of faeco-oral transmission includes fluids, fingers, flies and:", options: ["Fire", "Fields/food", "Fuel", "Furniture"], answer: 1, rationale: "The F-diagram routes are fluids, fingers, flies and fields/food; safe excreta disposal interrupts them." },
      { type: "mcq", q: "In biomedical waste management, used needles and sharps should be placed in:", options: ["A puncture-proof (sharps) container", "An ordinary bin", "The recycling bag", "A cloth bag"], answer: 0, rationale: "Sharps must go into puncture-proof containers to prevent needle-stick injury and blood-borne infection." },
      { type: "mcq", q: "Overcrowding in housing MOST directly increases the spread of:", options: ["Arsenicosis", "Fluorosis", "Vitamin A deficiency", "Respiratory communicable diseases"], answer: 3, rationale: "Overcrowding promotes droplet spread of respiratory and other communicable diseases such as TB and measles." },
      { type: "mcq", q: "Which is the MOST sustainable method of controlling mosquito vectors in a community?", options: ["Repeated fogging only", "Giving antibiotics", "Environmental source reduction of breeding sites", "Boiling all water"], answer: 2, rationale: "Source reduction (removing breeding sites, drainage, covering water) is the most sustainable vector control." },
      { type: "mcq", q: "A tube well tested for arsenic and found unsafe is conventionally painted:", options: ["Green", "Red", "Blue", "White"], answer: 1, rationale: "Unsafe wells are painted red and safe wells green so communities can choose safe sources." }
      , { type: "fill", q: "Diseases caused by pathogens present in drinking water, such as cholera, are called water-____ diseases.", accept: ["borne", "water-borne", "waterborne"], rationale: "Water-borne diseases have pathogens IN the water." }
      , { type: "fill", q: "Safe disposal of human ____ breaks the faeco-oral chain of transmission.", accept: ["excreta", "faeces", "feces", "stool"], rationale: "Sanitary disposal of excreta interrupts faeco-oral spread." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "chn-09-family-health-home-visit",
    unit: "Unit 5 · Family Health & MCH",
    title: "Family Health Nursing & the Home Visit",
    readMinutes: 24,
    summary: "The family as the unit of care, types and functions of the family, family life cycle and developmental tasks, family health assessment, family-centred care, the principles, purposes, phases and bag technique of the home visit, and the nurse's role in family counselling and care of caregivers.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The family as the unit of care", p: "The family is the basic unit of community health nursing care: health beliefs, behaviours and resources are shaped within it, and the health of one member affects all. Family health nursing addresses the family as a whole while caring for individuals, aiming to help the family achieve its optimum level of health and function." },
      { h: "Types of family", list: [
        "Nuclear family — husband, wife and their unmarried children.",
        "Joint/extended family — several generations or related nuclear families living together (common in Bangladesh).",
        "Three-generation family — grandparents, parents and children.",
        "Single-parent family — one parent with children.",
        "Blended/reconstituted family — remarriage bringing children together."
      ] },
      { h: "Functions of the family", list: [
        "Biological — reproduction and rearing of children.",
        "Economic — meeting material needs.",
        "Affectional/psychological — love, security and emotional support.",
        "Social — socialisation and transmission of culture and values.",
        "Health — care during illness, health practices and health decisions."
      ] },
      { h: "Family life cycle & developmental tasks", p: "Families pass through predictable stages (Duvall), each with tasks: beginning family (marriage), childbearing, families with pre-school and school children, families with adolescents, launching, middle-aged parents, and ageing family. Each transition brings health needs and stresses the community nurse anticipates and supports." },
      { h: "Family health assessment", p: "Assessment describes the family's structure, function, environment and health.", list: [
        "Family composition, roles and relationships (a genogram is useful).",
        "Socio-economic status, occupation, income and education.",
        "Housing and environment — water, sanitation, ventilation, crowding.",
        "Health status of each member, immunisation, illnesses and risks.",
        "Health practices, beliefs, and use of health services.",
        "Coping, support systems and available resources (an eco-map is useful)."
      ], figure: {
        caption: "Family assessment tools: the genogram maps family structure and relationships; the eco-map shows links to outside resources.",
        svg: '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Genogram and eco-map"><g stroke="#0F4C3A" stroke-width="2" fill="none"><rect x="60" y="30" width="34" height="34" fill="#DCFCE7"/><circle cx="160" cy="47" r="18" fill="#DCFCE7"/><line x1="94" y1="47" x2="142" y2="47"/><line x1="120" y1="47" x2="120" y2="95"/><rect x="80" y="95" width="30" height="30" fill="#F0FDF4"/><circle cx="150" cy="110" r="15" fill="#F0FDF4"/><line x1="120" y1="80" x2="150" y2="95"/></g><text x="120" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Genogram</text><g stroke="#15803D" stroke-width="2"><circle cx="340" cy="70" r="26" fill="#86EFAC"/><line x1="366" y1="70" x2="420" y2="45"/><line x1="366" y1="80" x2="420" y2="110"/></g><text x="340" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Family</text><text x="435" y="45" font-family="sans-serif" font-size="9" fill="#15803D">Clinic</text><text x="435" y="115" font-family="sans-serif" font-size="9" fill="#15803D">School</text><text x="340" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Eco-map</text></svg>'
      } },
      { h: "Family-centred care", p: "Family-centred care recognises the family as the constant in the client's life and a partner in care. Its principles are respect, information sharing, participation in decisions, and collaboration. The nurse supports the family's strengths, respects its culture and values, promotes communication and shared decision-making, and empowers members to manage health themselves." },
      { h: "The home visit — definition & purposes", p: "A home visit is a planned, purposeful contact by the nurse with a family in their own home. Purposes: assess the family and home environment, give nursing care (e.g. to a postnatal mother, newborn, or chronically ill member), health teaching in a real setting, follow-up and referral, and building a trusting relationship. Care is given where it is most relevant and acceptable." },
      { h: "Principles of the home visit", list: [
        "Each visit should have a clear purpose/plan.",
        "Use information about the family and focus on their needs.",
        "Involve the family and respect their culture, autonomy and confidentiality.",
        "Be flexible, practical and use available household resources.",
        "Maintain safety and infection control (bag technique).",
        "Record the visit and plan follow-up."
      ] },
      { h: "Phases of the home visit", p: "A home visit is carried out in orderly phases.", list: [
        "Pre-visit/initiation — review records, plan objectives, prepare the bag and appointment.",
        "In-home/previsit greeting — establish rapport, observe and assess.",
        "Implementation — provide care and health teaching.",
        "Termination — summarise, plan the next visit, and leave.",
        "Post-visit — record findings and care, and evaluate."
      ] },
      { h: "Bag technique", p: "The nurse's bag carries equipment and supplies for home care. Bag technique is the procedure for using the bag to give effective nursing care while preventing the spread of infection: place the bag on a clean surface over a paper lining, wash hands before and after handling contents, keep clean and used items separate, and clean and restock the bag afterwards. It is a practical application of medical asepsis in the home." },
      { h: "Care of family caregivers & counselling", p: "Family caregivers of the chronically ill, disabled or elderly face physical, emotional and financial strain ('caregiver burden'). The nurse assesses caregiver needs, teaches care skills, arranges respite and support, and counsels the family. Family counselling helps members communicate, cope with crisis and illness, and make health decisions." },
      { h: "Clinical / nursing relevance", p: "Family health nursing and the home visit let the nurse deliver continuous, individualised, culturally appropriate care; detect problems early in context (e.g. an unimmunised child, a depressed caregiver, unsafe water); teach where learning is applied; and strengthen the family's own capacity for self-care — the essence of community-oriented practice." },
      { h: "Key points to remember", list: [
        "The family is the BASIC unit of community health nursing care.",
        "Genogram maps structure; eco-map maps outside links.",
        "Home-visit phases: pre-visit → in-home → implementation → termination → post-visit.",
        "Bag technique applies medical asepsis in the home.",
        "Caregiver burden must be assessed and supported."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Explain why the family is the basic unit of community health nursing care, with its types and functions.",
      "Describe family health assessment and the use of the genogram and eco-map.",
      "Define a home visit and state its purposes and principles.",
      "Describe the phases of a home visit and the bag technique.",
      "Discuss family-centred care and the support of family caregivers."
    ],
    assessment: [
      { type: "mcq", q: "In community health nursing, the basic unit of care is the:", options: ["Family", "Individual patient", "Hospital", "Government"], answer: 0, rationale: "The family is the basic unit of care because health behaviours and resources are shaped within it." },
      { type: "mcq", q: "A family consisting only of husband, wife and their unmarried children is a:", options: ["Joint family", "Blended family", "Nuclear family", "Single-parent family"], answer: 2, rationale: "The nuclear family is husband, wife and their unmarried children." },
      { type: "mcq", q: "Which tool BEST maps a family's structure and relationships across generations?", options: ["Eco-map", "Epidemic curve", "Genogram", "Spot map"], answer: 2, rationale: "The genogram diagrams family structure and relationships; the eco-map shows links to outside resources." },
      { type: "mcq", q: "The FIRST (pre-visit) phase of a home visit chiefly involves:", options: ["Reviewing records, planning objectives and preparing the bag", "Providing wound care", "Recording after leaving", "Terminating the visit"], answer: 0, rationale: "The pre-visit phase is planning: review records, set objectives and prepare the bag." },
      { type: "mcq", q: "The main purpose of bag technique during a home visit is to:", options: ["Impress the family", "Carry money safely", "Replace hand-washing", "Give effective care while preventing the spread of infection"], answer: 3, rationale: "Bag technique applies medical asepsis so care is given without spreading infection." },
      { type: "mcq", q: "'Caregiver burden' refers to the strain experienced by:", options: ["The nurse only", "Family members caring for a chronically ill or dependent relative", "Hospital administrators", "The vaccine cold chain"], answer: 1, rationale: "Caregiver burden is the physical, emotional and financial strain on family caregivers." },
      { type: "mcq", q: "Which is a core principle of family-centred care?", options: ["Information sharing and partnership with the family in decisions", "The nurse decides everything alone", "Excluding the family from care", "Ignoring cultural values"], answer: 0, rationale: "Family-centred care rests on respect, information sharing, participation and collaboration." },
      { type: "mcq", q: "During a home visit the nurse should place the nursing bag:", options: ["On the floor directly", "On the patient's bed", "On a clean surface over a paper lining", "In the kitchen sink"], answer: 2, rationale: "The bag is placed on a clean surface over a paper lining to maintain asepsis." },
      { type: "mcq", q: "Anticipating the health needs of a family expecting its first baby applies the concept of the:", options: ["Epidemiological triad", "Cold chain", "Web of causation", "Family life cycle and developmental tasks"], answer: 3, rationale: "The family life cycle (Duvall) describes stage-specific developmental tasks and needs, such as the childbearing stage." },
      { type: "mcq", q: "A key purpose of the home visit that a clinic visit CANNOT fully achieve is:", options: ["Giving injections", "Direct assessment of the home environment and family in context", "Prescribing drugs", "Weighing the patient"], answer: 1, rationale: "The home visit uniquely allows assessment of the actual home environment and family context." }
      , { type: "fill", q: "The diagram used to map a family's structure and relationships is the ____.", accept: ["genogram"], rationale: "The genogram maps family structure and relationships." }
      , { type: "fill", q: "The procedure for using the nurse's bag to give care while preventing infection is called ____ technique.", accept: ["bag"], rationale: "Bag technique applies medical asepsis in the home." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "chn-10-mch-services",
    unit: "Unit 5 · Family Health & MCH",
    title: "Maternal & Child Health (MCH) Services",
    readMinutes: 25,
    summary: "Concept and importance of maternal and child health, the maternal and child health cycle, antenatal, intranatal and postnatal care, essential and emergency obstetric care, care of the newborn and under-five, growth monitoring, IMCI, high-risk approach, MCH indicators, and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept & importance of MCH", p: "Maternal and child health care promotes and protects the health of mothers (during pregnancy, childbirth and the postnatal period) and children (newborn, infant and under-five). Mothers and children are a priority (vulnerable) group forming a large share of the population, and their health is a sensitive index of a community's health and development." },
      { h: "The MCH cycle", p: "Maternal and child health are interdependent through a continuous cycle: the health of the girl child affects the future mother; the mother's health affects pregnancy and the fetus; the newborn's health depends on antenatal and delivery care; and childhood health shapes the next generation. Care must therefore be continuous across the life cycle, not episodic." },
      { h: "Antenatal care (ANC)", p: "ANC is the care of a woman during pregnancy to ensure a healthy mother and baby. WHO recommends at least eight ANC contacts. Key components:", list: [
        "Registration, history and estimation of gestational age and expected date of delivery.",
        "Examination — weight, blood pressure, anaemia, fundal height, fetal heart, oedema.",
        "Investigations — haemoglobin, blood group, urine (protein/sugar), and screening (e.g. syphilis, HIV, blood sugar as indicated).",
        "Preventive — iron-folic acid supplementation, tetanus (Td) immunisation, deworming, and nutrition advice.",
        "Identification and referral of high-risk pregnancies; birth-preparedness and danger-sign education."
      ] },
      { h: "Danger signs in pregnancy", p: "Women and families are taught to seek care immediately for danger signs: severe headache/blurred vision (pre-eclampsia), vaginal bleeding, severe abdominal pain, high fever, reduced fetal movements, swelling of face/hands, convulsions, and leaking of liquor. Early recognition and referral prevent maternal deaths." },
      { h: "Intranatal care & clean delivery", p: "Intranatal care aims at a safe delivery. The 'clean delivery' principles (five cleans): clean hands, clean surface, clean cord-cutting instrument (clean blade), clean cord tie, and clean cord care — to prevent sepsis and neonatal tetanus. Skilled birth attendance and access to emergency obstetric care are central to reducing maternal mortality.", figure: {
        caption: "The 'five cleans' of clean delivery to prevent maternal and neonatal sepsis and tetanus.",
        svg: '<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five cleans of delivery"><g font-family="sans-serif" font-size="9" fill="#0F4C3A" text-anchor="middle"><circle cx="70" cy="80" r="34" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="70" y="78">Clean</text><text x="70" y="90">hands</text><circle cx="165" cy="80" r="34" fill="#BBF7D0" stroke="#15803D" stroke-width="2"/><text x="165" y="78">Clean</text><text x="165" y="90">surface</text><circle cx="260" cy="80" r="34" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="260" y="74">Clean</text><text x="260" y="86">blade</text><circle cx="355" cy="80" r="34" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="355" y="74">Clean</text><text x="355" y="86">cord tie</text><circle cx="440" cy="80" r="34" fill="#15803D" stroke="#0F4C3A" stroke-width="2"/><text x="440" y="74" fill="#F0FDF4">Clean</text><text x="440" y="86" fill="#F0FDF4">cord care</text></g></svg>'
      } },
      { h: "Essential & emergency obstetric care", p: "Basic Emergency Obstetric Care (BEmOC) includes parenteral antibiotics, oxytocics and anticonvulsants, manual removal of placenta, removal of retained products, and assisted vaginal delivery. Comprehensive EmOC (CEmOC) adds caesarean section and blood transfusion. Timely referral from community to CEmOC facilities saves lives in complications such as haemorrhage, obstructed labour, eclampsia and sepsis." },
      { h: "Postnatal care (PNC)", p: "PNC covers the mother and baby for six weeks after delivery, the highest-risk period for maternal and newborn death. It includes assessment for bleeding, infection and pre-eclampsia; support for breastfeeding; family planning counselling; iron and nutrition; newborn care; and immunisation. Early contact within the first 24 hours and follow-up visits are recommended." },
      { h: "Care of the newborn", p: "Essential newborn care: immediate drying and warmth (prevent hypothermia), initiation of breastfeeding within one hour, clean cord care, eye care, immunisation (BCG, OPV-0, hepatitis B birth dose), and recognition of danger signs (poor feeding, fast/difficult breathing, hypothermia/fever, convulsions, jaundice). Kangaroo mother care benefits low-birth-weight babies." },
      { h: "Child health — growth monitoring & IMCI", p: "Child health services include growth monitoring using the road-to-health/growth chart to detect faltering early; exclusive breastfeeding for six months and appropriate complementary feeding; immunisation (EPI); vitamin A and deworming; and Integrated Management of Childhood Illness (IMCI), which classifies and treats the main childhood killers — pneumonia, diarrhoea, malaria, measles and malnutrition — using simple assessment and referral algorithms." },
      { h: "High-risk approach & MCH indicators", p: "The high-risk approach concentrates scarce resources on mothers and children at greatest risk (e.g. very young/old mothers, high parity, previous complications, low birth weight). Key indicators used to monitor MCH: maternal mortality ratio (per 100,000 live births), infant mortality rate, neonatal mortality rate, under-five mortality rate, and antenatal/skilled-birth-attendance coverage." },
      { h: "Clinical / nursing relevance", p: "The community health nurse registers and follows pregnant women, provides ANC and PNC, promotes iron-folic acid and Td, teaches danger signs and birth-preparedness, ensures skilled attendance and timely referral, gives essential newborn care, monitors child growth and immunisation, applies IMCI, and counsels on breastfeeding, nutrition and family planning." },
      { h: "Key figures to remember", list: [
        "WHO recommends ≥8 antenatal contacts.",
        "Five cleans of delivery; postnatal period ≈ 6 weeks.",
        "Exclusive breastfeeding for 6 months; breastfeeding within 1 hour of birth.",
        "MMR per 100,000 live births; IMR and U5MR per 1,000 live births.",
        "IMCI targets pneumonia, diarrhoea, malaria, measles and malnutrition."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Explain the concept and importance of maternal and child health and the MCH cycle.",
      "Describe the components of antenatal care and the danger signs of pregnancy.",
      "State the five cleans of delivery and differentiate basic and comprehensive emergency obstetric care.",
      "Describe essential newborn care and the components of postnatal care.",
      "Explain growth monitoring and the IMCI strategy in child health."
    ],
    assessment: [
      { type: "mcq", q: "WHO currently recommends a minimum number of antenatal contacts of:", options: ["Four", "Eight", "Two", "Twelve"], answer: 1, rationale: "WHO recommends at least eight antenatal care contacts for a positive pregnancy experience." },
      { type: "mcq", q: "Which is a danger sign in pregnancy requiring immediate referral?", options: ["Severe headache with blurred vision", "Mild ankle swelling in late pregnancy", "Occasional heartburn", "Increased appetite"], answer: 0, rationale: "Severe headache with blurred vision suggests pre-eclampsia — a danger sign needing urgent care." },
      { type: "mcq", q: "The 'five cleans' of delivery are designed mainly to prevent:", options: ["Postpartum haemorrhage", "Anaemia", "Maternal and neonatal sepsis and tetanus", "Gestational diabetes"], answer: 2, rationale: "Clean hands, surface, blade, cord tie and cord care prevent sepsis and neonatal tetanus." },
      { type: "mcq", q: "Comprehensive emergency obstetric care (CEmOC) differs from basic EmOC by including:", options: ["Iron-folic acid tablets", "Health education", "Growth monitoring", "Caesarean section and blood transfusion"], answer: 3, rationale: "CEmOC adds caesarean section and blood transfusion to the basic EmOC signal functions." },
      { type: "mcq", q: "Exclusive breastfeeding is recommended for the first:", options: ["3 months", "6 months", "12 months", "2 months"], answer: 1, rationale: "Exclusive breastfeeding is recommended for the first six months of life." },
      { type: "mcq", q: "The IMCI strategy targets the main childhood killers, which include:", options: ["Hypertension and diabetes", "Arthritis and cataract", "Pneumonia, diarrhoea, measles and malnutrition", "Arsenicosis and fluorosis"], answer: 2, rationale: "IMCI classifies and manages pneumonia, diarrhoea, malaria, measles and malnutrition." },
      { type: "mcq", q: "The most sensitive routine tool to detect early growth faltering in a child is the:", options: ["Epidemic curve", "Genogram", "Growth (road-to-health) chart", "Spot map"], answer: 2, rationale: "Plotting weight-for-age on the growth chart detects faltering before it becomes severe." },
      { type: "mcq", q: "The high-risk approach in MCH means:", options: ["Concentrating resources on mothers/children at greatest risk", "Treating only after death", "Ignoring low-risk mothers' basic care entirely", "Vaccinating adults only"], answer: 0, rationale: "The high-risk approach directs scarce resources to those at greatest risk while continuing basic care for all." },
      { type: "mcq", q: "Maternal mortality ratio is conventionally expressed per:", options: ["1,000 population", "100,000 live births", "1,000 live births", "10,000 women"], answer: 1, rationale: "MMR = maternal deaths per 100,000 live births." },
      { type: "mcq", q: "Essential newborn care immediately after birth includes:", options: ["Delaying breastfeeding for 24 hours", "Bathing the baby at once in cold water", "Applying ash to the cord", "Immediate drying and warmth with breastfeeding within one hour"], answer: 3, rationale: "Immediate drying/warmth to prevent hypothermia and early breastfeeding within one hour are essential newborn care." }
      , { type: "fill", q: "Care of the mother during pregnancy to ensure a healthy mother and baby is called ____ care.", accept: ["antenatal", "antenatal care", "prenatal"], rationale: "Antenatal care is provided during pregnancy." }
      , { type: "fill", q: "The postnatal period, the highest-risk time for mother and newborn, lasts about ____ weeks.", accept: ["6", "six"], rationale: "The postnatal period covers about six weeks after delivery." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "chn-11-family-planning",
    unit: "Unit 5 · Family Health & MCH",
    title: "Family Planning",
    readMinutes: 25,
    summary: "Concept and objectives of family planning, spacing and limiting methods, natural and barrier methods, hormonal contraceptives and emergency contraception, intrauterine devices and implants, permanent methods, menstrual regulation, eligibility and side-effects, contraceptive counselling, and the community health nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept & objectives", p: "Family planning is the way of thinking and living that enables individuals and couples to decide freely and responsibly the number and spacing of their children, and to have the means to do so. Objectives: prevent unwanted pregnancy, ensure healthy spacing (birth-to-birth interval of about 3 years), reduce maternal and child mortality, control population growth, and improve family welfare." },
      { h: "Classification of contraceptive methods", p: "Methods are broadly spacing (temporary) or terminal (permanent).", list: [
        "Natural/fertility-awareness — calendar (rhythm), basal body temperature, cervical mucus, lactational amenorrhoea method (LAM), coitus interruptus.",
        "Barrier — male and female condoms, diaphragm, spermicides.",
        "Hormonal — combined oral pills, progestogen-only pills, injectables, implants, emergency contraceptive pills.",
        "Intrauterine devices (IUD/IUCD) — copper-bearing and hormonal.",
        "Permanent (surgical) — tubectomy (female) and vasectomy (male).",
        "Menstrual regulation (MR)/MVA — an interim measure to ensure non-pregnancy."
      ], figure: {
        caption: "Classification of contraceptive methods into spacing (temporary) and permanent (terminal) methods.",
        svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of contraceptive methods"><rect x="180" y="10" width="140" height="34" rx="8" fill="#0F4C3A"/><text x="250" y="32" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Contraception</text><g font-family="sans-serif" font-size="9" fill="#0F4C3A" text-anchor="middle"><rect x="30" y="80" width="180" height="30" rx="6" fill="#86EFAC" stroke="#15803D"/><text x="120" y="99">Spacing (temporary)</text><rect x="290" y="80" width="180" height="30" rx="6" fill="#22C55E" stroke="#0F4C3A"/><text x="380" y="99">Permanent (terminal)</text><rect x="20" y="135" width="90" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="65" y="152">Natural</text><rect x="120" y="135" width="90" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="165" y="152">Barrier</text><rect x="20" y="168" width="90" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="65" y="185">Hormonal</text><rect x="120" y="168" width="90" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="165" y="185">IUD/Implant</text><rect x="300" y="135" width="80" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="340" y="152">Vasectomy</text><rect x="390" y="135" width="80" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="430" y="152">Tubectomy</text></g><line x1="120" y1="110" x2="120" y2="132" stroke="#15803D" stroke-width="2"/><line x1="380" y1="110" x2="380" y2="132" stroke="#0F4C3A" stroke-width="2"/></svg>'
      } },
      { h: "Natural methods", list: [
        "Calendar (rhythm) — avoid intercourse during the fertile window; unreliable with irregular cycles.",
        "Basal body temperature and cervical mucus (Billings) — detect ovulation.",
        "Lactational amenorrhoea method (LAM) — effective only if fully breastfeeding, amenorrhoeic, and within 6 months of delivery.",
        "Coitus interruptus (withdrawal) — high failure rate.",
        "Advantages: no cost, no side-effects, acceptable to those who cannot use other methods; disadvantage: higher failure rates."
      ] },
      { h: "Barrier methods", p: "Condoms (male and female), diaphragm and spermicides physically or chemically block sperm. The condom is the only method that also protects against sexually transmitted infections including HIV — dual protection. It is safe, cheap and widely available; its main limitation is user-dependence and the need for correct use every time." },
      { h: "Hormonal contraceptives", p: "Hormonal methods prevent ovulation, thicken cervical mucus and thin the endometrium.", list: [
        "Combined oral pill (COC) — oestrogen + progestogen; taken daily; contraindicated in smokers over 35, hypertension, thromboembolism, migraine with aura, and breastfeeding in the early weeks.",
        "Progestogen-only pill (POP/mini-pill) — suitable during breastfeeding.",
        "Injectables (e.g. DMPA) — every 3 months; may cause irregular bleeding and delayed return of fertility.",
        "Implants — sub-dermal rods giving 3–5 years of protection; highly effective and reversible."
      ] },
      { h: "Emergency contraception (ECP)", p: "Emergency contraceptive pills are used after unprotected intercourse to prevent pregnancy, most effective the sooner they are taken (ideally within 72 hours, up to 120 hours for some regimens). A copper IUD inserted within 5 days is the most effective emergency method. ECP is not for regular use and does not protect against STIs." },
      { h: "Intrauterine devices (IUD/IUCD) & implants", p: "The copper IUD is a small device placed in the uterus giving long-acting reversible contraception (some for up to 10 years). It works mainly by preventing fertilisation. Advantages: highly effective, long-acting, reversible, no daily action; possible side-effects: heavier or irregular menstrual bleeding and cramping, and rare expulsion or perforation. Implants (progestogen rods) are similarly long-acting and reversible." },
      { h: "Permanent methods", list: [
        "Vasectomy (male sterilisation) — the vas deferens is cut/tied; simple, safe, done under local anaesthesia; not immediately effective (needs ~3 months/backup until semen is clear).",
        "Tubectomy/tubal ligation (female sterilisation) — the fallopian tubes are cut/tied; effective immediately.",
        "Both are permanent and should be chosen only after full, informed, voluntary counselling."
      ] },
      { h: "Menstrual regulation (MR) & MVA", p: "Menstrual regulation using manual vacuum aspiration (MVA) is an interim procedure to ensure non-pregnancy after a missed period, offered within the legally permitted period. It is provided with counselling, screening and post-procedure contraception. It is distinct from unsafe abortion and is a recognised service in Bangladesh's programme." },
      { h: "Contraceptive counselling & eligibility", p: "Good counselling (the GATHER approach — Greet, Ask, Tell, Help choose, Explain, Return) helps the client make a free, informed choice suited to their needs, health and stage of life. The WHO Medical Eligibility Criteria classify how safe each method is in given conditions. Informed consent, confidentiality and no coercion are essential." },
      { h: "Clinical / nursing relevance", p: "The community health nurse counsels couples on the full range of methods, screens for eligibility and contraindications, provides pills, condoms, injectables and refers/assists for IUD, implant and sterilisation, teaches correct use and side-effect management, ensures follow-up and continuity of supply, and promotes healthy spacing and dual protection against STIs." },
      { h: "Key figures to remember", list: [
        "Recommended birth-to-birth spacing ≈ 3 years.",
        "Emergency contraceptive pills — most effective within 72 hours (up to 120 h for some).",
        "LAM valid only if fully breastfeeding, amenorrhoeic and <6 months postpartum.",
        "Condom = only method giving dual protection against STIs/HIV.",
        "Implants last 3–5 years; copper IUD up to 10 years."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define family planning and state its objectives and importance for maternal and child health.",
      "Classify contraceptive methods and describe the natural and barrier methods.",
      "Describe hormonal contraceptives, their mechanism, side-effects and contraindications.",
      "Compare the intrauterine device with permanent methods of contraception.",
      "Explain contraceptive counselling using the GATHER approach and the nurse's role."
    ],
    assessment: [
      { type: "mcq", q: "The recommended interval between one birth and the next for optimum maternal and child health is about:", options: ["6 months", "1 year", "3 years", "6 years"], answer: 2, rationale: "A birth-to-birth spacing of about 3 years reduces maternal and child health risks." },
      { type: "mcq", q: "Which contraceptive method ALSO protects against sexually transmitted infections including HIV?", options: ["Condom", "Combined oral pill", "Copper IUD", "Injectable DMPA"], answer: 0, rationale: "Only the condom provides dual protection — contraception plus protection against STIs/HIV." },
      { type: "mcq", q: "The lactational amenorrhoea method (LAM) is reliable ONLY when the mother is:", options: ["Partly breastfeeding at 9 months", "Menstruating regularly", "Fully breastfeeding, amenorrhoeic and within 6 months of delivery", "Using formula feeds"], answer: 2, rationale: "LAM requires full breastfeeding, amenorrhoea and being within 6 months postpartum." },
      { type: "mcq", q: "Emergency contraceptive pills are MOST effective when taken:", options: ["Any time in the next month", "Only after a positive pregnancy test", "Daily for regular use", "As soon as possible, ideally within 72 hours"], answer: 3, rationale: "ECPs work best the sooner they are taken, ideally within 72 hours of unprotected sex." },
      { type: "mcq", q: "A combined oral contraceptive pill is generally CONTRAINDICATED in a woman who:", options: ["Is over 35 and smokes", "Is 25 and healthy", "Has regular cycles", "Wants long-term spacing"], answer: 0, rationale: "COCs are contraindicated in smokers over 35 due to thromboembolic risk." },
      { type: "mcq", q: "Which is a PERMANENT (terminal) method of contraception?", options: ["Condom", "Copper IUD", "Vasectomy", "Progestogen-only pill"], answer: 2, rationale: "Vasectomy (and tubectomy) are permanent surgical methods; the others are temporary/spacing methods." },
      { type: "mcq", q: "After a vasectomy, the man must use a backup method because it is:", options: ["Immediately effective", "Not immediately effective until semen is clear of sperm (~3 months)", "Reversible next day", "Only for older men"], answer: 1, rationale: "Vasectomy is not immediately effective; a backup is needed until semen analysis shows no sperm." },
      { type: "mcq", q: "A common side-effect the nurse should counsel about with the copper IUD is:", options: ["Weight loss", "Heavier or irregular menstrual bleeding and cramping", "Immediate infertility", "Protection from HIV"], answer: 1, rationale: "The copper IUD may cause heavier/irregular bleeding and cramping; it does not protect against HIV." },
      { type: "mcq", q: "The GATHER approach is a framework for:", options: ["Cold-chain maintenance", "Contraceptive counselling", "Epidemic investigation", "Water purification"], answer: 1, rationale: "GATHER (Greet, Ask, Tell, Help, Explain, Return) structures client-centred contraceptive counselling." },
      { type: "mcq", q: "Menstrual regulation (MR) by manual vacuum aspiration is best described as:", options: ["A permanent sterilisation method", "An interim procedure to ensure non-pregnancy after a missed period, with counselling", "A hormonal pill", "A vaccine"], answer: 1, rationale: "MR/MVA is an interim procedure to ensure non-pregnancy, provided with counselling and post-procedure contraception." }
      , { type: "fill", q: "The only contraceptive method that also protects against sexually transmitted infections is the ____.", accept: ["condom"], rationale: "The condom provides dual protection against pregnancy and STIs." }
      , { type: "fill", q: "Female surgical sterilisation by cutting/tying the fallopian tubes is called ____.", accept: ["tubectomy", "tubal ligation"], rationale: "Tubectomy (tubal ligation) is female sterilisation." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "chn-12-demography-vital-statistics",
    unit: "Unit 6 · Demography & Health Statistics",
    title: "Demography & Vital / Health Statistics",
    readMinutes: 25,
    summary: "Concepts of demography and the demographic cycle, sources of demographic data (census, registration, surveys), the population pyramid and dependency ratio, fertility and mortality measures, the demographic dividend and transition, vital statistics and their uses, and basic biostatistics for community health.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Demography & its importance", p: "Demography is the scientific study of human populations — their size, composition (age, sex), distribution, and the dynamic processes (births, deaths, migration) that change them. It is essential in community health for assessing needs, planning services, allocating resources and evaluating programmes." },
      { h: "Sources of demographic and health data", list: [
        "Census — a complete count of the population at a point in time, usually every 10 years; gives size, age-sex structure and distribution.",
        "Civil (vital) registration — continuous recording of births, deaths and marriages.",
        "Sample registration and surveys — e.g. Demographic and Health Surveys (DHS) that provide fertility, mortality and health indicators.",
        "Notification of disease and hospital/health-service records.",
        "Special studies and disease registers (e.g. cancer registry)."
      ] },
      { h: "The demographic cycle & transition", p: "Populations move through a demographic cycle/transition in stages: (1) high stationary — high birth and death rates; (2) early expanding — death rate falls, birth rate high (rapid growth); (3) late expanding — birth rate begins to fall; (4) low stationary — low birth and death rates; (5) declining — birth rate below death rate. Bangladesh is in a late-expanding/declining phase with falling fertility.", figure: {
        caption: "The demographic transition: as death rates fall before birth rates, the population grows rapidly, then stabilises as birth rates decline.",
        svg: '<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Demographic transition graph"><line x1="40" y1="170" x2="480" y2="170" stroke="#0F4C3A" stroke-width="2"/><line x1="40" y1="20" x2="40" y2="170" stroke="#0F4C3A" stroke-width="2"/><path d="M40 50 L150 55 L260 120 L370 150 L470 152" fill="none" stroke="#15803D" stroke-width="3"/><path d="M40 55 L150 60 L260 70 L370 145 L470 150" fill="none" stroke="#22C55E" stroke-width="3" stroke-dasharray="6 4"/><text x="60" y="45" font-family="sans-serif" font-size="10" fill="#15803D">Death rate</text><text x="60" y="90" font-family="sans-serif" font-size="10" fill="#22C55E">Birth rate</text><text x="250" y="190" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Stage 1 → 2 → 3 → 4 (time)</text></svg>'
      } },
      { h: "Population pyramid & age structure", p: "A population pyramid is a bar graph showing the age-sex structure of a population. A broad-based pyramid indicates a young population with high birth rates (typical of developing countries); a narrow base and bulging middle indicate an ageing population. The shape guides planning of MCH, school, reproductive and geriatric services." },
      { h: "Dependency ratio & demographic dividend", p: "The dependency ratio = (population aged <15 + population aged 65+) ÷ population aged 15–64, expressed per 100. A high ratio means many dependents per worker. When falling fertility temporarily produces a large working-age share and low dependency, a country can reap a 'demographic dividend' if it invests in education, health and jobs — a current opportunity for Bangladesh." },
      { h: "Fertility measures", list: [
        "Crude Birth Rate (CBR) = live births in a year ÷ mid-year population × 1,000.",
        "General Fertility Rate = live births ÷ women aged 15–49 × 1,000.",
        "Total Fertility Rate (TFR) = average number of children a woman would have in her lifetime at current age-specific rates; replacement level ≈ 2.1.",
        "Age-specific fertility rate — births to women of a given age group."
      ] },
      { h: "Mortality & growth measures", list: [
        "Crude Death Rate = deaths ÷ mid-year population × 1,000.",
        "Natural growth rate = (birth rate − death rate); with migration gives the actual growth rate.",
        "Infant, neonatal, under-five and maternal mortality (sensitive indicators of development).",
        "Life expectancy at birth — average years a newborn is expected to live."
      ] },
      { h: "Vital statistics & their uses", p: "Vital statistics are the numerical data on vital events — births, deaths, marriages, divorces, and migrations. Their uses: measure the health of a population, identify problems and priorities, plan and evaluate services and policy, and compare communities over time. Complete civil registration is the ideal but is often incomplete in developing countries." },
      { h: "Basic biostatistics — types of data & averages", p: "Biostatistics applies statistics to health data.", list: [
        "Data types — qualitative (categorical: sex, blood group) and quantitative (numerical: weight, blood pressure, discrete or continuous).",
        "Measures of central tendency — mean (average), median (middle value), mode (most frequent).",
        "Measures of dispersion — range and standard deviation (spread around the mean).",
        "Rate (event ÷ population at risk × k), ratio (one number to another), and proportion (part of a whole)."
      ] },
      { h: "Presentation of data", p: "Data are summarised in tables and displayed graphically: bar diagram (categorical comparison), histogram and frequency polygon (continuous data), line graph (trend over time), pie chart (proportions of a whole), and the population pyramid. Good presentation makes patterns clear for decision-making." },
      { h: "Clinical / nursing relevance", p: "The community health nurse collects and uses vital data — registering births and deaths, calculating simple rates for the catchment population, reading the population pyramid to plan services, interpreting IMR/MMR/TFR to advocate for MCH and family planning, and presenting data clearly in reports for planning and evaluation." },
      { h: "Key figures & formulae to remember", list: [
        "Census — usually every 10 years; complete count.",
        "TFR replacement level ≈ 2.1 children per woman.",
        "Dependency ratio = (under-15 + 65+) ÷ 15–64 × 100.",
        "CBR and CDR expressed per 1,000 population; natural growth = CBR − CDR.",
        "Central tendency: mean, median, mode; dispersion: range, standard deviation."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define demography and describe the sources of demographic and health data.",
      "Explain the demographic transition/cycle with its stages and Bangladesh's position.",
      "Define and interpret the population pyramid, dependency ratio and demographic dividend.",
      "Define vital statistics and explain their uses in community health nursing.",
      "Describe measures of central tendency and dispersion with examples of their use in health data."
    ],
    assessment: [
      { type: "mcq", q: "A complete count of the whole population, usually taken every ten years, is the:", options: ["Sample survey", "Census", "Notification", "Registry"], answer: 1, rationale: "The census is a complete population count, usually decennial." },
      { type: "mcq", q: "The total fertility rate at replacement level is approximately:", options: ["1.0", "2.1", "4.0", "6.0"], answer: 1, rationale: "A TFR of about 2.1 children per woman represents replacement-level fertility." },
      { type: "mcq", q: "A broad-based population pyramid indicates a population that is:", options: ["Ageing with low birth rates", "Young with high birth rates", "Shrinking rapidly", "Entirely elderly"], answer: 1, rationale: "A broad base reflects a young population with high birth rates, typical of developing countries." },
      { type: "mcq", q: "The dependency ratio is calculated as:", options: ["(under-15 + 65+) ÷ (15–64) × 100", "births ÷ deaths × 100", "deaths ÷ population × 1,000", "cases ÷ population × 1,000"], answer: 0, rationale: "Dependency ratio = (young + old dependents) ÷ working-age population × 100." },
      { type: "mcq", q: "In the demographic transition, rapid population growth occurs when:", options: ["Both birth and death rates are high", "Death rate falls while birth rate remains high", "Birth rate falls below death rate", "Both rates are very low"], answer: 1, rationale: "In the early-expanding stage the death rate falls before the birth rate, causing rapid growth." },
      { type: "mcq", q: "Which is a measure of central tendency?", options: ["Standard deviation", "Range", "Median", "Variance"], answer: 2, rationale: "The median (like mean and mode) is a measure of central tendency; range and SD measure dispersion." },
      { type: "mcq", q: "The 'demographic dividend' can be gained when:", options: ["Dependency is very high", "A large working-age share and low dependency are matched by investment in health, education and jobs", "Birth and death rates are both high", "The population is entirely elderly"], answer: 1, rationale: "The dividend arises from a large working-age share with low dependency, if investment accompanies it." },
      { type: "mcq", q: "The natural growth rate of a population is:", options: ["Birth rate + death rate", "Birth rate − death rate", "Death rate − birth rate", "Births ÷ deaths"], answer: 1, rationale: "Natural growth rate = crude birth rate − crude death rate (before migration)." },
      { type: "mcq", q: "Sex and blood group are examples of which type of data?", options: ["Continuous quantitative", "Discrete quantitative", "Qualitative (categorical)", "Ordinal ratios"], answer: 2, rationale: "Sex and blood group are categorical (qualitative) variables." },
      { type: "mcq", q: "The best graph to show the trend of infant mortality rate over 20 years is a:", options: ["Pie chart", "Line graph", "Population pyramid", "Spot map"], answer: 1, rationale: "A line graph best displays a trend over time." }
      , { type: "fill", q: "The average number of children a woman would bear in her lifetime at current rates is the total ____ rate.", accept: ["fertility", "fertility rate"], rationale: "This defines the total fertility rate (TFR)." }
      , { type: "fill", q: "Numerical data on births, deaths and marriages are called ____ statistics.", accept: ["vital"], rationale: "Vital statistics are data on vital events." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "chn-13-health-education-communication",
    unit: "Unit 7 · Health Promotion & Education",
    title: "Health Education & Communication",
    readMinutes: 24,
    summary: "Concept, aims and principles of health education, models of behaviour change (health belief model, transtheoretical/stages of change), the communication process and barriers, methods and audio-visual aids of health education, IEC/BCC, planning a health-education session, and the community health nurse as educator.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept & aims of health education", p: "Health education is the process of helping people to learn and voluntarily adopt behaviour conducive to health. Its aims: to inform (increase knowledge), to influence attitudes and beliefs, and above all to enable people to change behaviour and take responsibility for their own health. It is a key primary-prevention tool and a component of PHC." },
      { h: "Health promotion vs health education", p: "Health education is a component of the broader concept of health promotion. Health promotion (Ottawa Charter, 1986) is the process of enabling people to increase control over and improve their health, through building healthy public policy, creating supportive environments, strengthening community action, developing personal skills, and reorienting health services — of which education is one strand." },
      { h: "Principles of health education", list: [
        "Interest — start from the felt needs and interests of the people.",
        "Participation — active involvement promotes learning and change.",
        "Known to unknown, simple to complex — build on what people already know.",
        "Comprehension — use the local language and simple terms.",
        "Reinforcement and repetition — repeat messages to fix learning.",
        "Motivation, credibility (trustworthy source), and good human relations.",
        "Learning by doing and setting a good example (role modelling)."
      ] },
      { h: "The communication process", p: "Communication is the transfer of a message from a sender to a receiver. The elements are: SENDER (source) → MESSAGE → CHANNEL/medium → RECEIVER → FEEDBACK, all affected by 'noise' (barriers). Feedback tells the sender whether the message was understood, making communication two-way. Effective health education depends on effective communication.", figure: {
        caption: "The communication process: sender encodes a message sent through a channel to a receiver, who returns feedback; noise (barriers) can distort it.",
        svg: '<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication process model"><defs><marker id="chnArrC" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><g font-family="sans-serif" font-size="10" fill="#0F4C3A" text-anchor="middle"><rect x="20" y="40" width="90" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="65" y="66">Sender</text><rect x="150" y="40" width="120" height="45" rx="8" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="210" y="60">Message</text><text x="210" y="75">via channel</text><rect x="310" y="40" width="90" height="45" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="355" y="66">Receiver</text></g><line x1="110" y1="62" x2="146" y2="62" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrC)"/><line x1="270" y1="62" x2="306" y2="62" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#chnArrC)"/><path d="M355 85 Q210 140 65 85" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#chnArrC)"/><text x="210" y="130" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Feedback</text></svg>'
      } },
      { h: "Barriers to communication", list: [
        "Physiological — hearing/speech difficulty, illness, tiredness.",
        "Psychological — emotions, prejudice, low motivation, fear.",
        "Environmental — noise, poor lighting, distance.",
        "Cultural/linguistic — different language, beliefs, or customs.",
        "Source-related — poor delivery, use of jargon, lack of credibility."
      ] },
      { h: "Models of behaviour change", p: "Understanding why people change guides education.", list: [
        "Health Belief Model — people act if they feel susceptible to a serious problem, believe the action brings benefits outweighing barriers, and are prompted by a cue to action (and self-efficacy).",
        "Transtheoretical (Stages of Change) Model — behaviour change moves through pre-contemplation → contemplation → preparation → action → maintenance (with possible relapse); the educator matches the message to the stage.",
        "Others: theory of reasoned action/planned behaviour; social/diffusion of innovation."
      ] },
      { h: "Methods of health education", list: [
        "Individual — counselling and one-to-one teaching (personal, allows feedback).",
        "Group — lectures, group discussion, demonstration, role play, panel, symposium (for defined groups such as mothers or students).",
        "Mass — television, radio, newspapers, posters, campaigns (reach many but limited feedback).",
        "The choice depends on the audience, objectives, resources and message."
      ] },
      { h: "Audio-visual aids", p: "Aids strengthen learning because people remember more of what they see and do. Categories: auditory (radio, audio), visual (posters, flip charts, flannelgraph, models, real objects, charts), and audio-visual (television, video, films, projected slides). Good aids are simple, accurate, culturally appropriate, visible and reinforce the key message." },
      { h: "IEC & BCC", p: "Information, Education and Communication (IEC) uses communication strategies to inform and educate. Behaviour Change Communication (BCC) goes further, using tailored, interactive communication to promote and sustain specific healthy behaviours (e.g. exclusive breastfeeding, hand-washing, contraceptive use). Both are widely used in Bangladesh's national programmes." },
      { h: "Planning a health-education session", p: "A session is planned in steps: assess needs and the audience; set clear, achievable objectives; select content, method and aids; deliver in the local language with participation; and evaluate learning and behaviour change with feedback and reinforcement. Sessions should be short, focused and use familiar examples." },
      { h: "Clinical / nursing relevance", p: "As educator the community health nurse assesses learning needs, chooses appropriate methods and aids, communicates clearly in the local language, applies behaviour-change models to move clients toward action, uses every contact (home visit, clinic, school) to teach, and evaluates whether knowledge and behaviour actually changed." },
      { h: "Key points to remember", list: [
        "Health education aims at voluntary behaviour change, not just giving information.",
        "Communication elements: sender → message → channel → receiver → feedback (with noise).",
        "Health Belief Model: susceptibility, severity, benefits, barriers, cues, self-efficacy.",
        "Stages of change: pre-contemplation, contemplation, preparation, action, maintenance.",
        "IEC informs/educates; BCC promotes and sustains specific behaviours."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define health education and state its aims and principles.",
      "Describe the communication process and the barriers to effective communication.",
      "Explain the Health Belief Model and the Stages of Change model with examples.",
      "Compare individual, group and mass methods of health education with their merits.",
      "Describe how you would plan and evaluate a health-education session for mothers on breastfeeding."
    ],
    assessment: [
      { type: "mcq", q: "The ultimate aim of health education is to:", options: ["Give information only", "Enable voluntary adoption of health-promoting behaviour", "Frighten people into compliance", "Sell products"], answer: 1, rationale: "Health education aims at voluntary behaviour change, not merely transferring information or coercion." },
      { type: "mcq", q: "In the communication process, the component that makes it two-way and tells the sender the message was understood is:", options: ["Channel", "Noise", "Feedback", "Encoding"], answer: 2, rationale: "Feedback from the receiver makes communication two-way and confirms understanding." },
      { type: "mcq", q: "A smoker who is thinking about quitting but has not yet acted is in which stage of the transtheoretical model?", options: ["Pre-contemplation", "Contemplation", "Action", "Maintenance"], answer: 1, rationale: "Contemplation is when a person is considering change but has not yet acted." },
      { type: "mcq", q: "According to the Health Belief Model, a person is MORE likely to act when they perceive:", options: ["High benefits and low barriers, with a cue to action", "The disease as harmless", "No personal susceptibility", "That action is useless"], answer: 0, rationale: "The HBM predicts action when perceived benefits outweigh barriers, susceptibility/severity are felt, and a cue prompts action." },
      { type: "mcq", q: "Which method of health education allows the MOST personal feedback and privacy?", options: ["Mass media campaign", "Individual counselling", "Radio broadcast", "Newspaper article"], answer: 1, rationale: "Individual (one-to-one) counselling is personal and allows immediate feedback and privacy." },
      { type: "mcq", q: "A principle of health education is to teach from:", options: ["Complex to simple", "Unknown to known", "Known to unknown, simple to complex", "General to nothing"], answer: 2, rationale: "Effective teaching proceeds from the known to the unknown and from simple to complex." },
      { type: "mcq", q: "BCC (Behaviour Change Communication) differs from basic IEC in that it:", options: ["Only prints posters", "Uses tailored, interactive communication to promote and sustain specific behaviours", "Avoids the community", "Is purely one-way"], answer: 1, rationale: "BCC uses tailored, interactive strategies to change and sustain specific behaviours, beyond simply informing." },
      { type: "mcq", q: "Using the local language and simple terms in health teaching addresses the principle of:", options: ["Comprehension", "Punishment", "Complexity", "Secrecy"], answer: 0, rationale: "Comprehension requires messages in the audience's language and simple terms." },
      { type: "mcq", q: "Posters, flip charts and models are examples of ____ aids.", options: ["Auditory", "Visual", "Purely audio", "Chemical"], answer: 1, rationale: "Posters, flip charts and models are visual audio-visual aids." },
      { type: "mcq", q: "Health education is BEST described in relation to health promotion as:", options: ["Identical to it", "A component of the broader concept of health promotion", "Unrelated to it", "A replacement for immunisation"], answer: 1, rationale: "Health education is one strand within the broader concept of health promotion (Ottawa Charter)." }
      , { type: "fill", q: "The element of the communication process that distorts the message is called ____.", accept: ["noise", "barrier", "barriers"], rationale: "Noise (barriers) distorts the message." }
      , { type: "fill", q: "In the stages-of-change model, the stage before 'action', when a person is preparing to change, is called ____.", accept: ["preparation"], rationale: "Preparation precedes action in the transtheoretical model." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "chn-14-nutrition-community",
    unit: "Unit 7 · Health Promotion & Education",
    title: "Nutrition & the Community",
    readMinutes: 24,
    summary: "Concept of nutrition and a balanced diet, the macronutrients and micronutrients, assessment of nutritional status, protein-energy malnutrition and micronutrient deficiencies common in Bangladesh (vitamin A, iron, iodine, zinc), nutrition in vulnerable groups, national nutrition interventions, and the nurse's role in community nutrition.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nutrition & balanced diet", p: "Nutrition is the science of food and its relation to health — how the body uses nutrients for growth, energy, maintenance and repair. A balanced diet provides all nutrients (carbohydrate, protein, fat, vitamins, minerals, water and fibre) in the right amounts and proportions to meet the body's needs and maintain health." },
      { h: "Macronutrients", list: [
        "Carbohydrates — the main source of energy (~4 kcal/g); rice, wheat, potato.",
        "Proteins — for growth and repair (~4 kcal/g); pulses, fish, meat, egg, milk; classed as first-class (complete) and second-class.",
        "Fats — concentrated energy (~9 kcal/g) and carrier of fat-soluble vitamins; oils, ghee, nuts."
      ] },
      { h: "Micronutrients", p: "Vitamins and minerals are needed in small amounts but are essential.", list: [
        "Fat-soluble vitamins — A, D, E, K.",
        "Water-soluble vitamins — B-complex and C.",
        "Minerals — calcium, iron, iodine, zinc, and others.",
        "Deficiency of even one micronutrient can cause specific disease (e.g. vitamin A and night blindness)."
      ] },
      { h: "Assessment of nutritional status", p: "Nutritional status is assessed by the 'ABCD' approach.", list: [
        "Anthropometry — weight, height/length, mid-upper-arm circumference (MUAC), BMI, and indices weight-for-age, height-for-age (stunting), weight-for-height (wasting).",
        "Biochemical tests — haemoglobin, serum proteins, etc.",
        "Clinical examination — signs of deficiency (pallor, oedema, Bitot's spots).",
        "Dietary assessment — 24-hour recall, food frequency."
      ], figure: {
        caption: "Anthropometric indices distinguish acute malnutrition (wasting, low weight-for-height) from chronic malnutrition (stunting, low height-for-age).",
        svg: '<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wasting versus stunting indices"><rect x="30" y="40" width="190" height="90" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="125" y="65" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">WASTING</text><text x="125" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">low weight-for-height</text><text x="125" y="106" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">= acute malnutrition</text><rect x="260" y="40" width="190" height="90" rx="10" fill="#86EFAC" stroke="#0F4C3A" stroke-width="2"/><text x="355" y="65" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">STUNTING</text><text x="355" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">low height-for-age</text><text x="355" y="106" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">= chronic malnutrition</text></svg>'
      } },
      { h: "Protein-energy malnutrition (PEM)", p: "PEM in children results from inadequate energy and protein. Severe forms: marasmus (severe wasting, 'skin and bones', from energy deficiency) and kwashiorkor (oedema, moon face, skin/hair changes, from relative protein deficiency); marasmic-kwashiorkor is mixed. MUAC and weight-for-height identify severe acute malnutrition, managed with therapeutic feeding and treatment of infection." },
      { h: "Micronutrient deficiencies in Bangladesh", list: [
        "Vitamin A deficiency — causes night blindness, Bitot's spots and xerophthalmia, and raises child mortality; prevented by vitamin A capsules (national campaigns) and vitamin-A-rich foods.",
        "Iron-deficiency anaemia — very common in women and children; prevented by iron-folic acid supplementation, dietary iron and deworming.",
        "Iodine-deficiency disorders — goitre and, in children, impaired development/cretinism; prevented by universal salt iodisation.",
        "Zinc deficiency — impairs growth and immunity; zinc is used in diarrhoea management."
      ] },
      { h: "Nutrition in vulnerable groups", p: "Special attention is needed for infants (exclusive breastfeeding for 6 months, then complementary feeding), young children (growth monitoring, adequate diet), pregnant and lactating women (extra energy, protein, iron-folate, calcium), adolescents (iron), and the elderly. Poverty, ignorance, infection and cultural food taboos worsen malnutrition." },
      { h: "National nutrition interventions", list: [
        "Promotion of breastfeeding and infant/young-child feeding.",
        "Vitamin A supplementation campaigns for children.",
        "Iron-folic acid supplementation for pregnant women and adolescents.",
        "Universal salt iodisation.",
        "Growth monitoring and management of severe acute malnutrition.",
        "Nutrition education and food fortification."
      ] },
      { h: "Recommended dietary allowances & food groups", p: "The recommended dietary allowance (RDA) is the daily amount of a nutrient sufficient to meet the needs of nearly all healthy people in a group; requirements rise in pregnancy, lactation, childhood growth and infection. Practical diet planning uses food groups (cereals; pulses/legumes and animal foods; vegetables and fruits; fats/oils and sugars) and locally affordable combinations to achieve balance." },
      { h: "Food hygiene & safety", p: "Community nutrition also covers food safety: safe storage, cooking and handling to prevent food-borne illness; protecting food from flies, dust and contamination; and personal hygiene of food handlers. Contaminated food is a major cause of diarrhoeal disease." },
      { h: "Clinical / nursing relevance", p: "The community health nurse assesses nutritional status (weighing children, MUAC, plotting growth charts), promotes breastfeeding and balanced family diets, distributes vitamin A and iron-folic acid, detects and refers malnutrition and deficiency signs, teaches food hygiene and locally affordable nutritious foods, and supports national nutrition programmes." },
      { h: "Key figures to remember", list: [
        "Energy: carbohydrate/protein ≈ 4 kcal/g; fat ≈ 9 kcal/g.",
        "Stunting = low height-for-age (chronic); wasting = low weight-for-height (acute).",
        "Exclusive breastfeeding for 6 months, then complementary feeding.",
        "Vitamin A deficiency = leading cause of preventable childhood blindness.",
        "Universal salt iodisation prevents iodine-deficiency disorders/goitre."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define nutrition and a balanced diet and describe the macronutrients and micronutrients.",
      "Describe the ABCD assessment of nutritional status, distinguishing stunting and wasting.",
      "Compare marasmus and kwashiorkor and outline the management of severe acute malnutrition.",
      "Discuss the common micronutrient deficiencies in Bangladesh and their prevention.",
      "Explain the nurse's role in community nutrition and national nutrition interventions."
    ],
    assessment: [
      { type: "mcq", q: "Which nutrient provides the most concentrated source of energy, at about 9 kcal per gram?", options: ["Carbohydrate", "Protein", "Fat", "Vitamin C"], answer: 2, rationale: "Fat yields about 9 kcal/g, more than carbohydrate or protein (~4 kcal/g each)." },
      { type: "mcq", q: "A child with low height-for-age is described as:", options: ["Wasted", "Stunted", "Overweight", "Oedematous"], answer: 1, rationale: "Low height-for-age indicates stunting — chronic malnutrition; low weight-for-height is wasting (acute)." },
      { type: "mcq", q: "Kwashiorkor is characterised chiefly by:", options: ["Severe wasting with no oedema", "Oedema, moon face and skin/hair changes from protein deficiency", "Night blindness", "Goitre"], answer: 1, rationale: "Kwashiorkor presents with oedema, moon face and skin/hair changes due to relative protein deficiency." },
      { type: "mcq", q: "Night blindness and Bitot's spots in a child indicate deficiency of:", options: ["Iron", "Iodine", "Vitamin A", "Vitamin C"], answer: 2, rationale: "Vitamin A deficiency causes night blindness, Bitot's spots and xerophthalmia." },
      { type: "mcq", q: "Universal salt iodisation is the main strategy to prevent:", options: ["Anaemia", "Iodine-deficiency disorders such as goitre", "Vitamin A deficiency", "Rickets"], answer: 1, rationale: "Iodising all salt prevents iodine-deficiency disorders including goitre and cretinism." },
      { type: "mcq", q: "A quick community screening measure for severe acute malnutrition in young children is:", options: ["Blood pressure", "Mid-upper-arm circumference (MUAC)", "Pulse rate", "Height only"], answer: 1, rationale: "MUAC (with weight-for-height) is a simple field measure of severe acute malnutrition." },
      { type: "mcq", q: "Iron-deficiency anaemia in pregnant women is BEST prevented at community level by:", options: ["Iron-folic acid supplementation with dietary iron and deworming", "Salt iodisation", "Vitamin A capsules alone", "Calcium only"], answer: 0, rationale: "Iron-folic acid supplementation, iron-rich diet and deworming prevent iron-deficiency anaemia." },
      { type: "mcq", q: "The 'C' in the ABCD assessment of nutritional status stands for:", options: ["Counselling", "Clinical examination", "Cooking method", "Cost"], answer: 1, rationale: "ABCD = Anthropometry, Biochemical, Clinical examination, Dietary assessment." },
      { type: "mcq", q: "Exclusive breastfeeding is recommended for the first six months because it:", options: ["Provides all needed nutrients and protection with no other food or water", "Should be mixed with water", "Should include honey", "Is inferior to formula"], answer: 0, rationale: "Breast milk alone meets an infant's needs and gives immune protection for the first six months." },
      { type: "mcq", q: "Marasmus differs from kwashiorkor in that marasmus is mainly due to:", options: ["Protein deficiency with oedema", "Overall energy deficiency causing severe wasting", "Iodine deficiency", "Excess fat intake"], answer: 1, rationale: "Marasmus is severe wasting from overall energy deficiency, without the oedema typical of kwashiorkor." }
      , { type: "fill", q: "Low weight-for-height, indicating acute malnutrition, is called ____.", accept: ["wasting"], rationale: "Wasting = low weight-for-height (acute malnutrition)." }
      , { type: "fill", q: "The vitamin whose deficiency is the leading cause of preventable childhood blindness is vitamin ____.", accept: ["A", "vitamin A"], rationale: "Vitamin A deficiency causes preventable childhood blindness." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "chn-15-national-health-programmes",
    unit: "Unit 8 · Health Programmes & Special Settings",
    title: "National Health Programmes of Bangladesh",
    readMinutes: 24,
    summary: "The purpose and structure of national health programmes, the sector-wide programme approach, and the key programmes of Bangladesh — EPI, the National TB (DOTS) and leprosy programmes, malaria and communicable-disease control, MCH and reproductive health, family planning, nutrition, NCD control, and health-system initiatives such as community clinics — with the community health nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept & purpose of national health programmes", p: "National health programmes are organised, government-led efforts to prevent and control specific health problems or to strengthen health services across the whole country. They set goals, strategies, activities and targets, mobilise resources, and are monitored and evaluated. They translate national health policy into action and are largely delivered through the primary-care system." },
      { h: "The sector-wide approach", p: "Bangladesh delivers health, population and nutrition services through successive multi-year sector-wide programmes (a Health, Population and Nutrition Sector Programme). This pools government and development-partner resources under one plan, coordinating the many vertical programmes and reducing duplication — the framework within which most national programmes now operate." },
      { h: "Expanded Programme on Immunization (EPI)", p: "One of Bangladesh's most successful programmes, providing free routine immunisation to children and mothers against vaccine-preventable diseases, with high coverage. (Detailed schedule and cold chain are covered in the immunisation topic.) The nurse is central to delivery, record-keeping and community mobilisation." },
      { h: "National Tuberculosis & Leprosy Programmes", p: "The National TB Control Programme uses the DOTS strategy — case detection (sputum smear/GeneXpert), directly observed short-course chemotherapy, drug supply, recording/reporting, and BCG. The National Leprosy Programme provides multi-drug therapy (MDT) free of charge, with early case detection, disability prevention and de-stigmatisation. Nurses supervise treatment, ensure adherence and trace contacts." },
      { h: "Malaria & communicable-disease control", p: "The malaria programme (chiefly in the hilly districts) uses long-lasting insecticidal nets, indoor residual spraying, prompt diagnosis by RDT/microscopy and effective treatment. Other communicable-disease efforts cover kala-azar elimination, dengue control, and epidemic preparedness and surveillance (IEDCR at national level)." },
      { h: "Reproductive, maternal, neonatal & child health", p: "Programmes for safe motherhood (ANC, skilled birth attendance, emergency obstetric care), newborn and child health (IMCI, essential newborn care), and adolescent health aim to reduce maternal, neonatal and child mortality. They are delivered jointly by the health and family-planning wings.", figure: {
        caption: "Key national health programmes of Bangladesh delivered through the primary-care system.",
        svg: '<svg viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="National health programmes overview"><circle cx="250" cy="105" r="46" fill="#0F4C3A"/><text x="250" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">National</text><text x="250" y="114" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">programmes</text><g font-family="sans-serif" font-size="9" fill="#0F4C3A" text-anchor="middle"><rect x="170" y="10" width="110" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="225" y="27">EPI</text><rect x="340" y="45" width="120" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="62">TB / DOTS &amp; leprosy</text><rect x="360" y="120" width="120" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="420" y="137">Malaria / CDC</text><rect x="180" y="175" width="120" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="240" y="192">MCH / RH</text><rect x="20" y="120" width="120" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="137">Family planning</text><rect x="30" y="45" width="120" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="90" y="62">Nutrition / NCD</text></g></svg>'
      } },
      { h: "Family-planning programme", p: "A long-standing, well-known programme delivering a full range of contraceptive methods, counselling and menstrual-regulation services through family-welfare centres and field workers (Family Welfare Assistants and Visitors). It has been central to Bangladesh's marked fall in fertility." },
      { h: "Nutrition programme", p: "National nutrition services (now mainstreamed into the sector programme) include promotion of breastfeeding and young-child feeding, vitamin A supplementation, iron-folic acid for pregnant women and adolescents, salt iodisation, growth monitoring, and management of severe acute malnutrition." },
      { h: "Non-communicable disease control", p: "A growing priority given the double burden, the NCD control programme promotes healthy lifestyles, tobacco control (supported by tobacco-control law), and screening and management of hypertension and diabetes through 'NCD corners' at upazila and community level." },
      { h: "Health-system & community initiatives", p: "The Community Clinic initiative (one per ~6,000 population, with local Community Groups) brings primary care close to the people. Other cross-cutting efforts include the essential service package, digital health/health information systems, human-resource development, and quality improvement — all delivered within the sector programme." },
      { h: "Role of the community health nurse", p: "The nurse implements these programmes at community level: giving immunisations, supervising DOTS and MDT, promoting bed nets and treatment adherence, providing ANC/PNC, family planning and nutrition services, screening for NCDs, keeping accurate records and reports for monitoring, and mobilising the community to use services — the operational backbone of national programmes." },
      { h: "Clinical / nursing relevance", p: "Knowing the aims, strategies and targets of each programme lets the nurse deliver correct, standardised care, use programme registers and reporting formats, refer appropriately, and contribute the field data on which programme monitoring and policy depend." },
      { h: "Key points to remember", list: [
        "National programmes translate health policy into country-wide action through primary care.",
        "Bangladesh uses a pooled sector-wide (Health, Population & Nutrition) programme.",
        "TB → DOTS; leprosy → MDT (both free).",
        "EPI and family planning are flagship success programmes.",
        "Community Clinics (1 per ~6,000) bring primary care to the people."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define national health programmes and explain their purpose and the sector-wide approach in Bangladesh.",
      "Describe the National Tuberculosis Control Programme and the DOTS strategy.",
      "Outline Bangladesh's family-planning and nutrition programmes and their achievements.",
      "Discuss the non-communicable disease control programme and the Community Clinic initiative.",
      "Explain the role of the community health nurse in implementing national health programmes."
    ],
    assessment: [
      { type: "mcq", q: "The strategy used by Bangladesh's National Tuberculosis Control Programme is:", options: ["DOTS (directly observed treatment, short-course)", "Universal salt iodisation", "Indoor residual spraying", "Cold chain"], answer: 0, rationale: "The National TB Control Programme uses the DOTS strategy for case detection and supervised treatment." },
      { type: "mcq", q: "Leprosy in the national programme is treated free of charge with:", options: ["A single antibiotic dose", "BCG only", "Multi-drug therapy (MDT)", "Vitamin A"], answer: 2, rationale: "Leprosy is treated with WHO multi-drug therapy (MDT), provided free." },
      { type: "mcq", q: "Bangladesh coordinates its many health programmes chiefly through a pooled:", options: ["Vertical hospital budget", "Private insurance scheme", "Single vaccine fund", "Sector-wide Health, Population and Nutrition programme"], answer: 3, rationale: "A sector-wide programme pools resources under one plan to coordinate the vertical programmes." },
      { type: "mcq", q: "Which programme is chiefly responsible for Bangladesh's marked decline in fertility?", options: ["The family-planning programme", "The leprosy programme", "The malaria programme", "The NCD programme"], answer: 0, rationale: "The long-standing family-planning programme has been central to the fall in fertility." },
      { type: "mcq", q: "'NCD corners' at upazila and community level are part of the programme for:", options: ["Communicable disease only", "Non-communicable disease screening and management", "Immunisation storage", "Salt iodisation"], answer: 1, rationale: "NCD corners screen and manage conditions such as hypertension and diabetes." },
      { type: "mcq", q: "The Community Clinic initiative aims to provide one clinic per approximately:", options: ["600 population", "6,000 population", "60,000 population", "600,000 population"], answer: 1, rationale: "The Community Clinic serves about 6,000 people, bringing primary care close to them." },
      { type: "mcq", q: "The main vector-control tools in Bangladesh's malaria programme are:", options: ["Salt iodisation and ORS", "Long-lasting insecticidal nets and indoor residual spraying", "BCG and OPV", "Iron-folic acid"], answer: 1, rationale: "Malaria control relies on LLINs and indoor residual spraying with prompt diagnosis and treatment." },
      { type: "mcq", q: "Vitamin A supplementation campaigns for children are part of the national ____ programme.", options: ["Tuberculosis", "Nutrition", "Leprosy", "Dengue"], answer: 1, rationale: "Vitamin A supplementation is a national nutrition intervention." },
      { type: "mcq", q: "The MAIN role of the community health nurse in national programmes is to:", options: ["Set national policy alone", "Implement services at community level and maintain records for monitoring", "Manufacture vaccines", "Fund the programmes"], answer: 1, rationale: "The nurse operationalises programmes at community level and provides the field data for monitoring." },
      { type: "mcq", q: "Two flagship success stories among Bangladesh's national health programmes are:", options: ["EPI and family planning", "Arsenic and fluorosis", "Housing and roads", "Banking and trade"], answer: 0, rationale: "EPI and the family-planning programme are widely cited public-health successes in Bangladesh." }
      , { type: "fill", q: "The tuberculosis-control strategy of directly observed short-course treatment is abbreviated ____.", accept: ["DOTS"], rationale: "DOTS = directly observed treatment, short-course." }
      , { type: "fill", q: "Leprosy is treated free of charge under the national programme with multi-____ therapy.", accept: ["drug", "MDT", "multi-drug"], rationale: "Leprosy is treated with multi-drug therapy (MDT)." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "chn-16-school-occupational-health",
    unit: "Unit 8 · Health Programmes & Special Settings",
    title: "School & Occupational Health",
    readMinutes: 24,
    summary: "Concept and objectives of school health, its components (health appraisal, environment, services, education) and the school nurse's role; occupational health — its aims, occupational hazards and diseases, ergonomics, safety and injury prevention, legislation, and the occupational health nurse's role in Bangladesh's workplaces.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept & importance of school health", p: "School health services aim to promote and protect the health of school-age children and, through them, the family and community. School children are a large, accessible and vulnerable group at a formative age; healthy children learn better, and habits formed at school last a lifetime — making the school a key setting for health promotion." },
      { h: "Objectives of school health", list: [
        "Promote positive health and healthy habits.",
        "Prevent disease and detect and correct defects early (screening).",
        "Ensure a safe and healthy school environment.",
        "Provide health education and first aid/emergency care.",
        "Refer and follow up children with health problems."
      ] },
      { h: "Components of school health", list: [
        "Health appraisal — periodic medical/health examination and screening (vision, hearing, dental, growth, immunisation status).",
        "Healthful school environment — safe water, sanitation, adequate space, lighting, ventilation, and play area.",
        "School health services — first aid, treatment of minor ailments, immunisation, deworming, and referral.",
        "Health education — teaching hygiene, nutrition, safety and life skills.",
        "Mid-day meal/nutrition and mental-health support where provided."
      ], figure: {
        caption: "Components of a comprehensive school health programme.",
        svg: '<svg viewBox="0 0 500 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Components of school health"><circle cx="250" cy="95" r="42" fill="#0F4C3A"/><text x="250" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">School</text><text x="250" y="106" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">health</text><g font-family="sans-serif" font-size="9" fill="#0F4C3A" text-anchor="middle"><rect x="180" y="12" width="140" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="250" y="29">Health appraisal</text><rect x="345" y="80" width="140" height="26" rx="6" fill="#86EFAC" stroke="#15803D"/><text x="415" y="97">Healthful environment</text><rect x="180" y="152" width="140" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="250" y="169">Health services</text><rect x="15" y="80" width="140" height="26" rx="6" fill="#86EFAC" stroke="#15803D"/><text x="85" y="97">Health education</text></g></svg>'
      } },
      { h: "Role of the school nurse", p: "The school nurse conducts health screening and keeps health records, gives first aid and emergency care, manages minor ailments, checks immunisation and arranges catch-up, teaches hygiene, nutrition, safety and adolescent health, inspects the school environment, counsels students and liaises with parents, teachers and health services for referral and follow-up." },
      { h: "Concept & aims of occupational health", p: "Occupational health (WHO/ILO) aims at the promotion and maintenance of the highest degree of physical, mental and social well-being of workers in all occupations; the prevention of ill-health caused by working conditions; the protection of workers from risks; and placing and maintaining workers in an environment suited to their capabilities — adapting work to the worker and the worker to the job." },
      { h: "Occupational hazards", list: [
        "Physical — heat, cold, noise (hearing loss), vibration, radiation, poor lighting.",
        "Chemical — dusts, fumes, gases, solvents, heavy metals (lead), pesticides.",
        "Biological — infections from animals or contaminated material (e.g. in agriculture, health care).",
        "Mechanical — machinery injuries, falls, unsafe equipment.",
        "Psychosocial — stress, long hours, shift work, poor relations."
      ] },
      { h: "Occupational diseases", list: [
        "Pneumoconioses — dust lung diseases: silicosis (silica), byssinosis (cotton dust — relevant to Bangladesh's textile sector), asbestosis.",
        "Occupational deafness — from chronic noise exposure.",
        "Lead and pesticide poisoning.",
        "Occupational skin diseases (dermatitis).",
        "Musculoskeletal disorders from poor posture and repetitive work."
      ] },
      { h: "Ergonomics, safety & injury prevention", p: "Ergonomics fits the job to the worker (workstation design, safe lifting, posture) to prevent musculoskeletal injury and fatigue. Safety and injury prevention use the hierarchy of control — elimination, substitution, engineering controls, administrative controls, and personal protective equipment (PPE) as the last line — plus safety training, machine guarding, and emergency preparedness (important after workplace disasters in Bangladesh's garment industry)." },
      { h: "Legislation & workers' welfare", p: "Bangladesh's Labour Act and factory rules set requirements for working hours, health, safety, welfare (ventilation, sanitation, drinking water, first aid), and compensation for occupational injury and disease. Pre-employment and periodic medical examinations, notification of occupational diseases, and workers' compensation protect workers' health and rights." },
      { h: "Role of the occupational health nurse", p: "The occupational health nurse conducts pre-employment and periodic health examinations, provides first aid and treatment of injuries/illness, monitors the work environment and promotes PPE use, educates on hazards and safe practice, keeps health records and reports occupational diseases, counsels on health and lifestyle, and participates in safety committees and emergency planning." },
      { h: "Clinical / nursing relevance", p: "In both settings the nurse applies prevention: at school, early detection of defects and health-habit formation; at work, hazard control, health surveillance and injury prevention. Both are aggregates with distinctive risks, illustrating population-focused nursing in defined settings." },
      { h: "Key points to remember", list: [
        "School health components: health appraisal, healthful environment, health services, health education.",
        "Occupational health = adapt work to worker and worker to work (WHO/ILO).",
        "Hazards: physical, chemical, biological, mechanical, psychosocial.",
        "Byssinosis (cotton dust) and occupational deafness are relevant occupational diseases.",
        "Hierarchy of control: elimination → substitution → engineering → administrative → PPE (last)."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define school health and state its objectives and components.",
      "Describe the role of the school nurse in a school health programme.",
      "Define occupational health and its aims, and classify occupational hazards with examples.",
      "Discuss common occupational diseases and the principles of injury prevention including the hierarchy of control.",
      "Explain the role of the occupational health nurse and relevant workers' welfare legislation."
    ],
    assessment: [
      { type: "mcq", q: "Which is a core component of a comprehensive school health programme?", options: ["Tax collection", "Health appraisal (screening) of pupils", "Road construction", "Currency exchange"], answer: 1, rationale: "Health appraisal/screening of pupils is a core school-health component, alongside environment, services and education." },
      { type: "mcq", q: "Byssinosis, an occupational lung disease relevant to Bangladesh's textile industry, is caused by:", options: ["Silica dust", "Cotton dust", "Asbestos", "Coal dust"], answer: 1, rationale: "Byssinosis results from inhaling cotton dust, an important hazard in the textile sector." },
      { type: "mcq", q: "In the hierarchy of control for workplace hazards, personal protective equipment (PPE) is:", options: ["The first and best control", "The last line of defence", "Never used", "The same as elimination"], answer: 1, rationale: "PPE is the last line of defence; elimination, substitution and engineering controls come first." },
      { type: "mcq", q: "The essence of occupational health, per WHO/ILO, is to:", options: ["Adapt the work to the worker and the worker to the work", "Maximise output regardless of health", "Employ only healthy young men", "Avoid all medical examinations"], answer: 0, rationale: "Occupational health aims to fit work to the worker and the worker to the job, protecting well-being." },
      { type: "mcq", q: "Chronic exposure to loud workplace noise classically causes:", options: ["Silicosis", "Occupational deafness (noise-induced hearing loss)", "Dermatitis", "Lead poisoning"], answer: 1, rationale: "Prolonged noise exposure causes noise-induced hearing loss (occupational deafness)." },
      { type: "mcq", q: "Ergonomics in the workplace is concerned mainly with:", options: ["Fitting the job/workstation to the worker to prevent injury and fatigue", "Increasing noise", "Removing first-aid kits", "Setting wages"], answer: 0, rationale: "Ergonomics designs the job and workstation to fit the worker, preventing musculoskeletal injury and fatigue." },
      { type: "mcq", q: "Why is the school an especially valuable setting for health promotion?", options: ["Children never fall ill", "Habits formed at school last a lifetime and children are an accessible aggregate", "Schools have no health needs", "It avoids parents entirely"], answer: 1, rationale: "The school reaches a large, accessible, formative-age group whose habits persist, benefiting family and community." },
      { type: "mcq", q: "Silicosis is an occupational disease caused by inhaling:", options: ["Cotton dust", "Silica (stone/sand) dust", "Pollen", "Iron filings only"], answer: 1, rationale: "Silicosis is a pneumoconiosis caused by inhaling silica dust." },
      { type: "mcq", q: "A key duty of the occupational health nurse is to conduct:", options: ["Pre-employment and periodic health examinations of workers", "Only accounting", "Vaccine manufacture", "Building design alone"], answer: 0, rationale: "Pre-employment and periodic examinations (health surveillance) are central occupational-nursing duties." },
      { type: "mcq", q: "Providing safe water, sanitation, adequate lighting and ventilation in a school falls under the component of:", options: ["Health appraisal", "Healthful school environment", "First aid only", "Tax policy"], answer: 1, rationale: "Ensuring safe water, sanitation, lighting and ventilation is the healthful school environment component." }
      , { type: "fill", q: "The occupational lung disease caused by inhaling cotton dust is called ____.", accept: ["byssinosis"], rationale: "Byssinosis is caused by cotton dust." }
      , { type: "fill", q: "In hazard control, ____ protective equipment is regarded as the last line of defence.", accept: ["personal", "PPE"], rationale: "PPE is the last line of defence after higher controls." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "chn-17-disaster-management",
    unit: "Unit 9 · Disaster Management & Nursing Process",
    title: "Disaster Management & Community Preparedness",
    readMinutes: 24,
    summary: "Concept and types of disasters, the disaster-management cycle (prevention/mitigation, preparedness, response, recovery), the effects of disasters, triage, mass-casualty management, community preparedness in disaster-prone Bangladesh, and the community health nurse's role across the cycle.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept & definition", p: "A disaster is a sudden or gradual event that causes damage, destruction, loss of life and disruption exceeding the affected community's capacity to cope with its own resources, so that external help is needed. Disasters overwhelm local capacity; a hazard becomes a disaster only when it strikes a vulnerable, exposed population." },
      { h: "Types of disasters", list: [
        "Natural — geophysical (earthquake), hydrometeorological (cyclone, flood, storm surge, drought), and biological (epidemics).",
        "Man-made (technological) — industrial accidents, chemical spills, fires, building collapse, transport crashes.",
        "Complex emergencies — conflict, displacement and famine.",
        "Bangladesh, being low-lying and densely populated, is highly prone to floods, cyclones, river erosion and, increasingly, climate-related events."
      ] },
      { h: "The disaster-management cycle", p: "Disaster management is a continuous cycle of four phases, not a single event.", list: [
        "Prevention/mitigation — measures to prevent or reduce the impact (embankments, cyclone shelters, building codes, land-use planning).",
        "Preparedness — planning, early-warning systems, training, drills, and stockpiling before a disaster.",
        "Response — immediate actions during and just after the disaster (rescue, first aid, evacuation, relief, disease control).",
        "Recovery/rehabilitation & reconstruction — restoring services and rebuilding to a safer state ('building back better')."
      ], figure: {
        caption: "The four-phase disaster-management cycle: mitigation, preparedness, response and recovery.",
        svg: '<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Disaster management cycle"><defs><marker id="chnArrD" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><circle cx="160" cy="150" r="70" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="4 4"/><g font-family="sans-serif" font-size="10" fill="#0F4C3A" text-anchor="middle"><rect x="105" y="10" width="110" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="160" y="31">Mitigation</text><rect x="235" y="130" width="80" height="40" rx="8" fill="#86EFAC" stroke="#15803D"/><text x="275" y="147">Prepared-</text><text x="275" y="160">ness</text><rect x="105" y="256" width="110" height="34" rx="8" fill="#22C55E" stroke="#0F4C3A"/><text x="160" y="277">Response</text><rect x="5" y="130" width="90" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="50" y="154">Recovery</text></g><path d="M160 50 A70 70 0 0 1 233 145" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#chnArrD)"/><path d="M262 175 A70 70 0 0 1 165 250" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#chnArrD)"/><path d="M150 250 A70 70 0 0 1 60 168" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#chnArrD)"/><path d="M62 128 A70 70 0 0 1 150 50" fill="none" stroke="#0F4C3A" stroke-width="2" marker-end="url(#chnArrD)"/></svg>'
      } },
      { h: "Hazard, vulnerability & risk", p: "Three linked concepts explain why disasters happen. A hazard is a potentially damaging event or condition (cyclone, flood, chemical). Vulnerability is the degree to which a community is susceptible to and unable to cope with the hazard (poverty, poor housing, low awareness increase it). Disaster risk is commonly expressed as Risk = Hazard × Vulnerability ÷ Capacity: reducing vulnerability and building capacity lowers risk even when the hazard cannot be prevented." },
      { h: "Effects of disasters", list: [
        "Deaths, injuries and disability.",
        "Displacement and destruction of homes and livelihoods.",
        "Damage to water, sanitation and health infrastructure, raising the risk of communicable disease (diarrhoea, respiratory infection).",
        "Food shortage and malnutrition.",
        "Mental-health effects — acute stress, anxiety, depression, post-traumatic stress."
      ] },
      { h: "Triage", p: "Triage is the sorting of casualties to prioritise treatment and transport when the number of victims exceeds resources — doing the greatest good for the greatest number. A common colour code is used.", list: [
        "RED (immediate) — life-threatening but salvageable injuries needing immediate care.",
        "YELLOW (delayed) — serious injuries that can wait a short time.",
        "GREEN (minor/walking wounded) — minor injuries, can wait longer.",
        "BLACK (expectant/dead) — dead or injuries incompatible with survival given resources."
      ], figure: {
        caption: "Mass-casualty triage colour codes prioritise care from immediate (red) to expectant (black).",
        svg: '<svg viewBox="0 0 460 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triage colour codes"><g font-family="sans-serif" font-size="10" text-anchor="middle"><rect x="15" y="40" width="100" height="45" rx="8" fill="#22C55E" stroke="#0F4C3A"/><text x="65" y="60" fill="#0F4C3A" font-weight="700">RED</text><text x="65" y="76" fill="#0F4C3A" font-size="8">immediate</text><rect x="125" y="40" width="100" height="45" rx="8" fill="#86EFAC" stroke="#15803D"/><text x="175" y="60" fill="#0F4C3A" font-weight="700">YELLOW</text><text x="175" y="76" fill="#0F4C3A" font-size="8">delayed</text><rect x="235" y="40" width="100" height="45" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="285" y="60" fill="#0F4C3A" font-weight="700">GREEN</text><text x="285" y="76" fill="#0F4C3A" font-size="8">minor</text><rect x="345" y="40" width="100" height="45" rx="8" fill="#0F4C3A"/><text x="395" y="60" fill="#F0FDF4" font-weight="700">BLACK</text><text x="395" y="76" fill="#DCFCE7" font-size="8">expectant</text></g></svg>'
      } },
      { h: "Community preparedness", p: "Preparedness reduces disaster impact.", list: [
        "Community-based disaster preparedness — local committees, volunteers and drills.",
        "Early-warning systems and safe evacuation routes and cyclone shelters (a Bangladesh success reducing cyclone deaths).",
        "Hazard mapping and identification of vulnerable groups (children, elderly, disabled, pregnant women).",
        "Stockpiling of essential supplies, first-aid training, and family emergency plans.",
        "Coordination with government, NGOs and the disaster-management authority."
      ] },
      { h: "Disaster response & public health", p: "Response priorities: search and rescue, first aid and emergency care, triage and referral, safe water and sanitation, food and shelter, control of communicable disease (surveillance, immunisation, vector control), and mental-health/psychosocial support. Restoring safe water and sanitation early prevents secondary epidemics." },
      { h: "Recovery & building back better", p: "Recovery restores livelihoods, health services and infrastructure and addresses long-term physical and psychological needs. 'Building back better' means reconstructing to be more resilient (safer housing, stronger embankments, better warning systems), reducing risk from future events." },
      { h: "Role of the community health nurse", p: "Across the cycle the nurse: helps prepare the community (education, drills, identifying the vulnerable); in response performs triage, first aid and emergency care, ensures safe water/sanitation and communicable-disease control, sets up relief clinics, and provides psychological first aid; and in recovery supports rehabilitation, follow-up care, immunisation and mental-health support — often the first skilled responder present." },
      { h: "Clinical / nursing relevance", p: "Disaster nursing applies community-health skills under extreme conditions: rapid assessment, triage, mass immunisation, outbreak control, and psychosocial support. In disaster-prone Bangladesh, the community health nurse's preparedness and leadership save lives and prevent secondary disease." },
      { h: "Key points to remember", list: [
        "Disaster = event exceeding the community's capacity to cope with its own resources.",
        "Cycle: mitigation → preparedness → response → recovery.",
        "Triage colours: RED immediate, YELLOW delayed, GREEN minor, BLACK expectant/dead.",
        "Restoring safe water and sanitation early prevents secondary epidemics.",
        "Bangladesh's cyclone shelters and early warning have greatly cut disaster deaths."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Define a disaster and classify types of disasters with Bangladesh examples.",
      "Describe the four phases of the disaster-management cycle.",
      "Explain triage and the colour-coding system used in mass-casualty situations.",
      "Discuss community disaster preparedness and its importance in Bangladesh.",
      "Describe the role of the community health nurse across the disaster-management cycle."
    ],
    assessment: [
      { type: "mcq", q: "A disaster is best defined as an event that:", options: ["Causes minor inconvenience only", "Exceeds the affected community's capacity to cope with its own resources", "Is always man-made", "Never needs outside help"], answer: 1, rationale: "A disaster overwhelms local coping capacity, requiring external assistance." },
      { type: "mcq", q: "In mass-casualty triage, a RED tag indicates a victim who is:", options: ["Dead or expectant", "Walking wounded with minor injury", "Immediate — life-threatening but salvageable, needing care first", "Uninjured"], answer: 2, rationale: "RED = immediate: life-threatening but salvageable injuries requiring priority care." },
      { type: "mcq", q: "The phase of the disaster-management cycle that includes early-warning systems, drills and stockpiling BEFORE an event is:", options: ["Response", "Recovery", "Preparedness", "Reconstruction"], answer: 2, rationale: "Preparedness involves planning, warning, training, drills and stockpiling before a disaster." },
      { type: "mcq", q: "Building cyclone shelters and embankments to reduce future impact is an example of:", options: ["Mitigation/prevention", "Response", "Triage", "Rehabilitation"], answer: 0, rationale: "Structural measures to prevent or reduce impact are mitigation/prevention." },
      { type: "mcq", q: "The guiding principle of triage in a mass-casualty incident is to:", options: ["Treat the most senior person first", "Do the greatest good for the greatest number", "Treat only the dead", "Treat in alphabetical order"], answer: 1, rationale: "Triage aims to do the greatest good for the greatest number when resources are limited." },
      { type: "mcq", q: "After a flood, the community health nurse's FIRST public-health priority to prevent a secondary epidemic is usually to:", options: ["Rebuild roads", "Hold elections", "Repaint the clinic", "Restore safe water and sanitation"], answer: 3, rationale: "Restoring safe water and sanitation early prevents diarrhoeal and other secondary outbreaks." },
      { type: "mcq", q: "A GREEN triage tag is assigned to casualties who are:", options: ["Dead", "Immediate priority", "Minor injuries / walking wounded", "Requiring surgery within minutes"], answer: 2, rationale: "GREEN denotes minor injuries (walking wounded) who can wait longer." },
      { type: "mcq", q: "'Building back better' during recovery means:", options: ["Rebuilding exactly as before", "Reconstructing to be more resilient and reduce future risk", "Ignoring safety codes", "Abandoning the area"], answer: 1, rationale: "Building back better reconstructs more safely and resiliently to reduce future disaster risk." },
      { type: "mcq", q: "Which group should be specially identified as vulnerable in disaster preparedness?", options: ["Only adult men", "Children, elderly, disabled and pregnant women", "Government officials", "Shopkeepers only"], answer: 1, rationale: "Children, the elderly, disabled persons and pregnant women are especially vulnerable and must be identified." },
      { type: "mcq", q: "Psychological first aid provided by the nurse after a disaster addresses:", options: ["Only physical wounds", "Acute stress and emotional needs of survivors", "Building repair", "Salt iodisation"], answer: 1, rationale: "Psychological first aid supports survivors' acute stress and emotional needs, part of disaster response." }
      , { type: "fill", q: "Sorting casualties by priority when resources are limited is called ____.", accept: ["triage"], rationale: "Triage prioritises casualties for care and transport." }
      , { type: "fill", q: "The disaster phase involving rescue, first aid and relief during and just after the event is the ____ phase.", accept: ["response"], rationale: "The response phase covers immediate actions during and after a disaster." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "chn-18-nursing-process-records",
    unit: "Unit 9 · Disaster Management & Nursing Process",
    title: "The Community Health Nursing Process & Records/Reports",
    readMinutes: 24,
    summary: "Application of the nursing process to individuals, families and communities; community assessment and community diagnosis; planning, implementation and evaluation of community programmes; the purposes, principles and types of records and reports; and their use for continuity of care, evaluation and planning.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The nursing process in the community", p: "The nursing process is a systematic, problem-solving method of giving individualised care through five interrelated steps — Assessment, Diagnosis, Planning, Implementation and Evaluation (ADPIE). In community health nursing it is applied not only to individuals but also to families and to whole communities/aggregates, guiding organised, goal-directed and evaluable care." },
      { h: "Steps of the nursing process (ADPIE)", list: [
        "Assessment — systematic collection of data about the client/family/community.",
        "Diagnosis — analysing data to identify actual and potential health problems and their causes.",
        "Planning — setting priorities, goals/objectives and choosing interventions.",
        "Implementation — carrying out the planned interventions.",
        "Evaluation — comparing outcomes with objectives and revising as needed."
      ], figure: {
        caption: "The cyclical nursing process (ADPIE) applied to individuals, families and communities.",
        svg: '<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nursing process ADPIE cycle"><defs><marker id="chnArrP" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><circle cx="160" cy="150" r="72" fill="none" stroke="#15803D" stroke-width="2" stroke-dasharray="4 4"/><g font-family="sans-serif" font-size="10" fill="#0F4C3A" text-anchor="middle"><rect x="110" y="6" width="100" height="30" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="160" y="26">Assessment</text><rect x="240" y="90" width="78" height="30" rx="8" fill="#86EFAC" stroke="#15803D"/><text x="279" y="110">Diagnosis</text><rect x="235" y="175" width="82" height="30" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="276" y="195">Planning</text><rect x="90" y="262" width="140" height="30" rx="8" fill="#22C55E" stroke="#0F4C3A"/><text x="160" y="282">Implementation</text><rect x="2" y="130" width="94" height="30" rx="8" fill="#86EFAC" stroke="#15803D"/><text x="49" y="150">Evaluation</text></g></svg>'
      } },
      { h: "Community assessment", p: "Community assessment (community study) systematically describes the community to identify its health needs and resources.", list: [
        "People — size, age-sex composition, growth, culture, socio-economic status.",
        "Place — geography, boundaries, environment, housing, water and sanitation.",
        "Health status — vital and health statistics, morbidity/mortality, disease patterns.",
        "Health resources and services — facilities, manpower, and community organisations.",
        "Methods — records review, surveys, observation, interviews, and community meetings (windshield survey/walk-through)."
      ] },
      { h: "Community diagnosis", p: "Community diagnosis is the identification and quantification of the health problems of a community as a whole, in terms of morbidity and mortality, and the factors influencing them, to determine those with the greatest importance and amenability to intervention. It differs from clinical (individual) diagnosis: it describes the health of a population, using epidemiological data, and sets priorities for community action." },
      { h: "Planning community programmes", p: "Planning follows priority-setting (using criteria such as magnitude, severity, feasibility, and community concern). It sets measurable objectives, selects strategies and activities, allocates resources and responsibilities, and prepares a time-line — ideally WITH the community to ensure relevance and ownership. Objectives should be SMART (specific, measurable, achievable, relevant, time-bound)." },
      { h: "Implementation & evaluation", p: "Implementation carries out the plan — delivering services, health education, immunisation, home visits — coordinating the team and the community. Evaluation judges whether objectives were met: process/formative evaluation (was it done as planned?) and outcome/summative evaluation (did health improve?). Findings feed back into re-assessment, closing the cycle." },
      { h: "Records — meaning & purposes", p: "A record is a permanent, written account of observations, care given and events. Purposes of records in community health nursing:", list: [
        "Provide continuity of care and communication among the health team.",
        "Serve as legal documents and evidence of care.",
        "Supply data for statistics, planning, monitoring and evaluation.",
        "Aid teaching, supervision and research.",
        "Show the workload and justify resources."
      ] },
      { h: "Principles of good records", list: [
        "Accurate, factual and objective.",
        "Complete, clear and legible.",
        "Timely (recorded promptly) and dated/signed.",
        "Confidential and securely stored.",
        "No falsification or erasure; corrections made properly."
      ] },
      { h: "Types of records in community health", list: [
        "Family/family folder and individual health records.",
        "Cumulative/continuing records (e.g. child immunisation card, antenatal card).",
        "Registers — birth and death, immunisation, antenatal, family-planning, TB, and clinic registers.",
        "Home-visit records and the nurse's daily diary.",
        "Stock/inventory and administrative records."
      ] },
      { h: "Reports", p: "A report is an account, oral or written, of activities, events or findings compiled from records. Types include daily/periodic (monthly, quarterly, annual) activity reports, statistical returns to higher levels, incident/outbreak reports, and special survey reports. Good reports are accurate, concise, complete, timely and based on records; they inform supervision, planning and policy at higher levels." },
      { h: "Clinical / nursing relevance", p: "The community health nurse uses the nursing process to structure care from the individual to the whole community, performs community assessment and diagnosis to set priorities, keeps accurate family folders and registers, and submits timely reports — ensuring continuity of care, meeting legal and programme requirements, and providing the data on which service planning and evaluation depend." },
      { h: "Key points to remember", list: [
        "Nursing process = ADPIE: Assessment, Diagnosis, Planning, Implementation, Evaluation.",
        "Community diagnosis describes the health of a POPULATION, not one person.",
        "Community assessment covers people, place and health status/resources.",
        "Objectives should be SMART.",
        "Records give continuity, legal evidence and data; reports summarise records for higher levels."
      ] }
    ],
    references: REF_CHN,
    examQuestions: [
      "Describe the five steps of the nursing process and their application to a community.",
      "Explain community assessment and how community diagnosis differs from clinical diagnosis.",
      "Discuss the planning and evaluation of a community health programme with SMART objectives.",
      "State the purposes and principles of records in community health nursing.",
      "Describe the types of records and reports used by a community health nurse and their uses."
    ],
    assessment: [
      { type: "mcq", q: "The correct sequence of the nursing process (ADPIE) is:", options: ["Diagnosis → Assessment → Planning → Evaluation → Implementation", "Assessment → Diagnosis → Planning → Implementation → Evaluation", "Planning → Assessment → Implementation → Diagnosis → Evaluation", "Evaluation → Planning → Assessment → Diagnosis → Implementation"], answer: 1, rationale: "ADPIE = Assessment, Diagnosis, Planning, Implementation, Evaluation, in that order." },
      { type: "mcq", q: "Community diagnosis differs from clinical diagnosis in that it:", options: ["Describes the health problems of a whole population", "Concerns only one patient", "Ignores statistics", "Is made by laboratory tests alone"], answer: 0, rationale: "Community diagnosis identifies and quantifies the health problems of a population, using epidemiological data." },
      { type: "mcq", q: "A community objective that is 'specific, measurable, achievable, relevant and time-bound' is described as:", options: ["Vague", "SMART", "Optional", "Confidential"], answer: 1, rationale: "SMART objectives are specific, measurable, achievable, relevant and time-bound." },
      { type: "mcq", q: "Which is a PURPOSE of keeping records in community health nursing?", options: ["To provide continuity of care and data for planning", "To hide information from the team", "To replace patient examination", "To increase confusion"], answer: 0, rationale: "Records ensure continuity of care and communication and provide data for planning and evaluation, and legal evidence." },
      { type: "mcq", q: "A 'windshield survey' or walk-through is a method used in:", options: ["Cold-chain monitoring", "Community assessment", "Vaccine reconstitution", "Salt iodisation"], answer: 1, rationale: "A windshield/walk-through survey is an observational method of community assessment." },
      { type: "mcq", q: "Evaluating whether a programme was carried out as planned is called:", options: ["Outcome/summative evaluation", "Process/formative evaluation", "Diagnosis", "Registration"], answer: 1, rationale: "Process (formative) evaluation checks whether activities were implemented as planned; outcome evaluation checks results." },
      { type: "mcq", q: "Which is a principle of good record-keeping?", options: ["Record only what is convenient", "Be accurate, factual, timely and confidential", "Erase mistakes completely", "Leave entries unsigned"], answer: 1, rationale: "Good records are accurate, factual, timely, legible, signed and confidential." },
      { type: "mcq", q: "A monthly statistical return of immunisations sent to the upazila level is an example of a:", options: ["Record only", "Report", "Genogram", "Triage tag"], answer: 1, rationale: "A report is a compiled account (here a periodic statistical return) prepared from records for higher levels." },
      { type: "mcq", q: "The FIRST step in applying the nursing process to a family is:", options: ["Evaluation", "Implementation", "Assessment", "Reporting"], answer: 2, rationale: "Assessment (data collection) is the first step of the nursing process." },
      { type: "mcq", q: "When setting priorities among community health problems, a nurse should consider:", options: ["Only her personal preference", "Magnitude, severity, feasibility and community concern", "The alphabet", "The weather only"], answer: 1, rationale: "Priority-setting uses criteria such as magnitude, severity, feasibility and community concern." }
      , { type: "fill", q: "The five steps of the nursing process are summarised by the acronym ____.", accept: ["ADPIE"], rationale: "ADPIE = Assessment, Diagnosis, Planning, Implementation, Evaluation." }
      , { type: "fill", q: "Identifying and quantifying the health problems of a whole population is called community ____.", accept: ["diagnosis"], rationale: "Community diagnosis describes the health problems of a population." }
    ]
  }
];
