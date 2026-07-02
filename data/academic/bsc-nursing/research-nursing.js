/* ============================================================
   B.Sc. in Nursing (BNMC 2018) · Year 4 · B433 Research in Nursing
   — 14 topics. Aligned to the BNMC 4-year B.Sc. Nursing (2018)
   syllabus: foundations of nursing research, evidence-based
   practice, research ethics, the research process (problem,
   literature, hypothesis, design, variables), methods & instruments
   (sampling, data collection, validity & reliability), and analysis
   & communication (descriptive & inferential biostatistics,
   referencing and proposal/report writing).
   Degree-level depth: research designs, psychometrics and applied
   biostatistics with worked reasoning and Bangladesh context.
   Grounded in standard texts:
     • Polit DF, Beck CT. Essentials of Nursing Research: Appraising
       Evidence for Nursing Practice. Wolters Kluwer.
     • Burns N, Grove SK. The Practice of Nursing Research: Appraisal,
       Synthesis, and Generation of Evidence. Elsevier.
     • Sundar Rao PSS, Richard J. An Introduction to Biostatistics
       and Research Methods. PHI Learning.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_RESN = [
  "Polit DF, Beck CT. Essentials of Nursing Research: Appraising Evidence for Nursing Practice. Wolters Kluwer/Lippincott.",
  "Burns N, Grove SK. The Practice of Nursing Research: Appraisal, Synthesis, and Generation of Evidence. Elsevier.",
  "Sundar Rao PSS, Richard J. An Introduction to Biostatistics and Research Methods. PHI Learning."
];

window.Academic.topics["bsc-nursing/research-nursing"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "res-01-intro",
    unit: "Unit 1 · Foundations of Nursing Research",
    title: "Introduction to Nursing Research: Definition, Types & Scope",
    readMinutes: 22,
    summary: "Meaning, definition and purpose of research and nursing research; characteristics of good research; the basic–applied and quantitative–qualitative classifications; the scope and importance of research in nursing; and the reciprocal link between research, theory and practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is research?", p: "Research is a systematic, controlled, empirical and critical investigation of phenomena guided by theory and hypotheses about the presumed relations among them (Kerlinger). The word joins 're' (again) and 'search' (to look), meaning to search again — to investigate carefully rather than to glance casually. It follows orderly steps, uses objective methods, and produces findings that others can verify and reproduce, which distinguishes it from opinion, tradition or trial-and-error." },
      { h: "Definition of nursing research", p: "Nursing research is systematic inquiry designed to generate trustworthy evidence about issues of importance to the nursing profession — clinical practice, education, administration and health-services delivery (Polit & Beck). Its ultimate aim is to build a scientific knowledge base that improves the health and care of patients, families and communities. Burns and Grove stress that this knowledge must be relevant to nursing's unique concerns of health promotion, human responses to illness and holistic care." },
      { h: "Purposes / aims of research", p: "Research serves a graded set of aims, each answering a different kind of question.", list: [
        "Identification & description — naming a phenomenon and portraying its characteristics accurately (What is this? What is it like?).",
        "Exploration — investigating the full nature of a little-understood phenomenon and the factors related to it.",
        "Explanation — understanding the underlying causes or relationships (Why does it happen?).",
        "Prediction & control — estimating the probability of an outcome and manipulating factors to change it.",
        "Application — solving practical problems and improving the quality and safety of care.",
        "Theory testing and knowledge verification — confirming or refuting existing knowledge."
      ] },
      { h: "Characteristics of good research", list: [
        "Systematic — proceeds through orderly, logical, pre-planned steps.",
        "Objective & unbiased — findings reflect reality, not the investigator's beliefs.",
        "Empirical — conclusions rest on evidence gathered through observation or experience.",
        "Controlled — extraneous and confounding factors are held in check.",
        "Valid & reliable — measures what it intends to measure and yields consistent results.",
        "Replicable / verifiable — others can repeat the study and check the findings.",
        "Logical & rigorous — reasoning moves clearly and defensibly from data to conclusion.",
        "Generalisable — well-designed studies allow findings to extend beyond the sample."
      ] },
      { h: "Basic vs applied research", list: [
        "Basic (pure / fundamental) research — extends the theoretical knowledge base for its own sake, without an immediate practical application (e.g. studying the physiology of the stress response).",
        "Applied research — is undertaken to solve an immediate practical problem and is used directly to change practice (e.g. testing whether a repositioning schedule reduces pressure-ulcer incidence).",
        "The two are complementary — basic research supplies the theory that applied research puts to work at the bedside."
      ] },
      { h: "Quantitative vs qualitative research", p: "The two paradigms rest on different views of reality and knowledge.", list: [
        "Quantitative research (positivist) — assumes reality is objective and measurable; collects numerical data, tests hypotheses deductively, and uses statistics to examine relationships and cause-and-effect (e.g. measuring whether an education programme lowers HbA1c).",
        "Qualitative research (naturalistic/constructivist) — assumes reality is multiple and socially constructed; collects narrative data inductively to explore meaning and experience in depth (e.g. exploring how women experience obstetric fistula).",
        "Mixed-methods research — deliberately combines both to answer questions neither could answer alone."
      ] },
      { h: "Other classifications of research", list: [
        "By time — retrospective (looking back) vs prospective (following forward); cross-sectional (one point in time) vs longitudinal (repeated over time).",
        "By setting — clinical, laboratory or field research.",
        "Descriptive, correlational, quasi-experimental and experimental — a hierarchy of increasing control.",
        "Action research — cycles of action and reflection to solve a problem in a specific setting."
      ] },
      { h: "Scope of nursing research", p: "Nursing research spans the full breadth of the profession: clinical practice (interventions, symptom management, patient safety), community and public health, maternal-child and reproductive health, mental health, gerontology, nursing education and curriculum, nursing administration and workforce, health-systems and policy, and instrument development. In Bangladesh, priority areas include maternal and neonatal survival, communicable and emerging non-communicable disease, and strengthening the nursing workforce." },
      { h: "Importance of research in nursing", list: [
        "Builds a scientific body of knowledge unique to nursing and reduces reliance on tradition and ritual.",
        "Provides the evidence for safe, effective, high-quality and cost-effective care.",
        "Improves patient outcomes, patient safety and satisfaction.",
        "Informs standards, protocols, guidelines and health policy.",
        "Enhances professional autonomy and accountability.",
        "Supports lifelong learning and the credibility of nursing as a discipline."
      ] },
      { h: "The research–theory–practice link", p: "Research, theory and practice form a continuous cycle. Theory proposes relationships that research tests; research generates and refines theory (both inductively, from data to theory, and deductively, from theory to hypothesis); and both feed evidence into practice, while problems arising in practice generate new research questions. This reciprocal loop is the engine of an evidence-based discipline.", figure: {
        caption: "The reciprocal cycle linking theory, research and practice — each informs and is renewed by the others.",
        svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Theory research practice cycle"><circle cx="230" cy="55" r="42" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="230" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Theory</text><circle cx="110" cy="160" r="42" fill="#BBF7D0" stroke="#15803D" stroke-width="2"/><text x="110" y="165" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Research</text><circle cx="350" cy="160" r="42" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="350" y="165" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Practice</text><polygon points="188,80 150,120 165,122 172,108" fill="#15803D"/><polygon points="152,175 308,175 300,168 300,182" fill="#15803D"/><polygon points="272,80 310,120 295,122 288,108" fill="#15803D"/></svg>'
      } },
      { h: "The nurse's roles in research", list: [
        "Consumer — critically reads and applies research findings to practice.",
        "Participant — collects data or facilitates studies in the clinical setting.",
        "Producer — designs and conducts research (chiefly graduate-prepared nurses).",
        "Advocate — protects the rights and safety of research participants."
      ] },
      { h: "Bangladesh & global context", p: "Nursing research in Bangladesh is coordinated through institutions such as the Bangladesh Nursing and Midwifery Council (BNMC), the Directorate General of Nursing and Midwifery (DGNM) and academic bodies, and is aligned with national priorities under the Sustainable Development Goals — particularly SDG 3 targets for reducing maternal mortality (MMR) and under-five and neonatal mortality. Building local research capacity ensures evidence is relevant to the country's own health system and resources." },
      { h: "Key points to remember", list: [
        "Research = systematic, controlled, empirical, critical inquiry.",
        "Basic builds theory; applied solves practical problems.",
        "Quantitative = numbers/deductive; qualitative = words/inductive.",
        "Ultimate goal of nursing research = improve patient/community care.",
        "Theory ↔ research ↔ practice form a continuous cycle."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Define research and nursing research, and state five purposes of research.",
      "Explain the characteristics of good research with nursing examples.",
      "Differentiate basic from applied research and quantitative from qualitative research.",
      "Discuss the scope and importance of research in nursing in the Bangladesh context.",
      "Describe the relationship between research, theory and nursing practice."
    ],
    assessment: [
      { type: "mcq", q: "Nursing research is best defined as:", options: ["A casual observation of patients", "Systematic inquiry to generate trustworthy evidence for nursing", "Copying findings from medical journals", "Writing an opinion about care"], answer: 1, rationale: "Nursing research is systematic inquiry designed to develop trustworthy evidence about issues important to nursing." },
      { type: "mcq", q: "Research that seeks knowledge for its own sake to build theory, with no immediate application, is called:", options: ["Applied research", "Basic research", "Action research", "Clinical audit"], answer: 1, rationale: "Basic (pure) research extends theoretical knowledge without an immediate practical use." },
      { type: "mcq", q: "A study that collects numerical data to test whether an education programme lowers blood sugar is:", options: ["Qualitative", "Quantitative", "Historical", "Ethnographic"], answer: 1, rationale: "Numerical data, hypothesis testing and statistics characterise quantitative research." },
      { type: "mcq", q: "Qualitative research is chiefly used to:", options: ["Measure variables numerically", "Explore meaning and human experience in depth", "Test cause-and-effect with statistics", "Calculate incidence rates"], answer: 1, rationale: "Qualitative research explores meaning, experience and context using narrative data." },
      { type: "mcq", q: "The characteristic that lets other investigators repeat a study and check its findings is:", options: ["Replicability", "Subjectivity", "Secrecy", "Bias"], answer: 0, rationale: "Replicability/verifiability allows others to repeat the study and confirm results." },
      { type: "mcq", q: "Which is NOT a characteristic of good research?", options: ["Systematic", "Empirical", "Biased", "Controlled"], answer: 2, rationale: "Good research is objective and unbiased; bias undermines validity." },
      { type: "mcq", q: "The ultimate goal of nursing research is to:", options: ["Increase publications", "Improve care to patients, families and communities", "Replace medical research", "Fulfil a course requirement"], answer: 1, rationale: "Nursing research ultimately aims to improve the health and care of patients and communities." },
      { type: "mcq", q: "A nurse who critically reads studies and applies the findings to bedside care acts as a research:", options: ["Producer", "Consumer", "Sponsor", "Publisher"], answer: 1, rationale: "A consumer reads and applies research findings in practice." },
      { type: "mcq", q: "The purpose of research concerned with understanding WHY a phenomenon occurs is:", options: ["Description", "Explanation", "Identification", "Funding"], answer: 1, rationale: "Explanation seeks the underlying causes and relationships of a phenomenon." },
      { type: "mcq", q: "'Empirical' means that research conclusions rest on:", options: ["Tradition", "Authority", "Evidence from observation or experience", "Intuition"], answer: 2, rationale: "Empirical knowledge is derived from observed or experienced evidence." }
      , { type: "fill", q: "Research undertaken to solve an immediate practical problem and used directly in practice is called ____ research.", accept: ["applied", "applied research"], rationale: "Applied research addresses an immediate practical problem." }
      , { type: "fill", q: "The paradigm that collects narrative data to explore meaning and experience is ____ research.", accept: ["qualitative", "qualitative research"], rationale: "Qualitative research explores meaning and experience with narrative data." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "res-02-ebn",
    unit: "Unit 1 · Foundations of Nursing Research",
    title: "Evidence-Based Nursing Practice",
    readMinutes: 22,
    summary: "The concept of evidence-based nursing/practice; the five A's of the EBP process; the hierarchy and levels of evidence; the PICO(T) question format; enabling factors and barriers to EBN in Bangladesh; and research utilization models.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept of evidence-based nursing", p: "Evidence-based nursing (EBN) / evidence-based practice (EBP) is the conscientious, explicit and judicious integration of the best available research evidence with the nurse's clinical expertise and the patient's values, preferences and circumstances to make decisions about care (adapted from Sackett). It replaces ritual, tradition and 'we have always done it this way' with care shown to be effective, while still individualising decisions to the person in front of the nurse." },
      { h: "Three pillars of EBP", p: "EBP is a tripod — remove any leg and it falls. Best research evidence answers 'what works?'; clinical expertise interprets and applies the evidence to the individual; and patient values ensure the decision respects the person's goals, culture and resources. Some models add a fourth element — the practice context and available resources.", figure: {
        caption: "The three integrating pillars of evidence-based practice: research evidence, clinical expertise and patient values.",
        svg: '<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three pillars of evidence based practice"><circle cx="150" cy="80" r="60" fill="#22C55E" fill-opacity="0.35" stroke="#15803D"/><circle cx="310" cy="80" r="60" fill="#15803D" fill-opacity="0.35" stroke="#0F4C3A"/><circle cx="230" cy="150" r="60" fill="#86EFAC" fill-opacity="0.5" stroke="#15803D"/><text x="110" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Research</text><text x="110" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">evidence</text><text x="350" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Clinical</text><text x="350" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">expertise</text><text x="230" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Patient values</text><text x="230" y="108" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">EBP</text></svg>'
      } },
      { h: "The five A's of EBP", p: "The EBP process is remembered as five sequential steps, the five A's.", list: [
        "Ask — convert the information need into a focused, answerable clinical question (usually in PICO format).",
        "Acquire — search efficiently for the best external evidence to answer the question.",
        "Appraise — critically evaluate the evidence for validity, impact and applicability.",
        "Apply — integrate the appraised evidence with clinical expertise and patient values to make a decision.",
        "Assess (Audit) — evaluate the outcome of the change and seek ways to improve the process."
      ] },
      { h: "Hierarchy / levels of evidence", p: "Not all evidence is equally trustworthy; designs are ranked by how well they control bias. A common hierarchy, strongest first:", list: [
        "Level I — systematic reviews and meta-analyses of randomised controlled trials (highest).",
        "Level II — one or more well-designed randomised controlled trials (RCTs).",
        "Level III — well-designed controlled trials without randomisation (quasi-experimental).",
        "Level IV — well-designed case-control and cohort studies.",
        "Level V — systematic reviews of descriptive and qualitative studies.",
        "Level VI — single descriptive or qualitative study.",
        "Level VII — opinion of authorities and expert committees (lowest)."
      ] },
      { h: "The evidence pyramid", p: "The levels are often drawn as a pyramid: filtered, pre-appraised sources (systematic reviews, critically appraised topics, evidence-based guidelines) sit at the top and are the quickest, most reliable to use, while unfiltered primary studies and expert opinion sit lower and require more appraisal effort.", figure: {
        caption: "The evidence pyramid: systematic reviews and RCTs at the apex, expert opinion at the base.",
        svg: '<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Evidence pyramid"><polygon points="210,20 260,70 160,70" fill="#0F4C3A"/><polygon points="160,70 260,70 290,120 130,120" fill="#15803D"/><polygon points="130,120 290,120 320,170 100,170" fill="#22C55E"/><polygon points="100,170 320,170 350,215 70,215" fill="#86EFAC"/><text x="210" y="55" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">Syst. review/meta-analysis</text><text x="210" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">RCTs</text><text x="210" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Cohort &amp; case-control</text><text x="210" y="198" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Descriptive / expert opinion</text></svg>'
      } },
      { h: "The PICO question format", p: "A well-built clinical question makes searching efficient. The PICO framework structures it:", list: [
        "P — Population / Patient / Problem (e.g. post-operative adults).",
        "I — Intervention / exposure of interest (e.g. chlorhexidine bathing).",
        "C — Comparison / control (e.g. routine soap-and-water bathing).",
        "O — Outcome of interest (e.g. surgical-site infection rate).",
        "PICOT adds T — Time frame, and PICOS adds S — Study design."
      ] },
      { h: "Worked PICO example", p: "Clinical scenario: does daily chlorhexidine bathing reduce infections after surgery? P = post-operative surgical patients; I = daily chlorhexidine bathing; C = standard soap-and-water bathing; O = incidence of surgical-site infection. The answerable question becomes: 'In post-operative adults (P), does daily chlorhexidine bathing (I) compared with soap-and-water bathing (C) reduce surgical-site infection (O)?'" },
      { h: "Types of evidence questions", p: "The best study design depends on the type of question.", list: [
        "Therapy/intervention → RCT or systematic review of RCTs.",
        "Diagnosis/screening → cross-sectional study with a reference standard.",
        "Prognosis → cohort study.",
        "Aetiology/harm → cohort or case-control study.",
        "Meaning/experience → qualitative study."
      ] },
      { h: "Research utilization vs EBP", p: "Research utilization is the narrower process of using findings from a specific study (or studies) to change practice. EBP is the broader problem-solving approach that also incorporates clinical expertise, patient preferences and appraisal of the whole body of evidence. EBP subsumes research utilization." },
      { h: "Models of EBP / research utilization", list: [
        "Iowa Model — begins with problem-focused or knowledge-focused triggers and guides teams through evidence appraisal and piloting.",
        "Stetler Model — a practitioner-oriented model emphasising critical thinking and the individual's use of evidence.",
        "ACE Star Model of Knowledge Transformation — five points: discovery, evidence summary, translation, integration, evaluation.",
        "PARIHS framework — successful implementation depends on evidence, context and facilitation."
      ] },
      { h: "Enabling factors for EBN", list: [
        "Access to databases, journals and the internet.",
        "Nurses' knowledge and skills in searching and appraisal.",
        "Supportive leadership and an organisational culture of inquiry.",
        "Availability of clinical guidelines and protocols.",
        "Time, mentorship and multidisciplinary collaboration."
      ] },
      { h: "Barriers to EBN in Bangladesh", list: [
        "Heavy workload, high nurse-to-patient ratios and lack of protected time.",
        "Limited access to electronic databases and paywalled full-text articles.",
        "Gaps in research-appraisal skills and English-language scientific literacy.",
        "Hierarchical structures that limit nurses' autonomy to change practice.",
        "Scarcity of locally generated, context-relevant evidence.",
        "Weak library, internet and information-technology infrastructure in some facilities."
      ] },
      { h: "Overcoming barriers", p: "Strategies include continuing-education workshops on searching and appraisal, journal clubs, institutional subscriptions and use of free resources (PubMed, HINARI, Cochrane), designated EBP mentors or champions, incorporating EBP into nursing curricula, and management support that grants time and recognises evidence-based improvements." },
      { h: "Key points to remember", list: [
        "EBP = best evidence + clinical expertise + patient values.",
        "Five A's: Ask, Acquire, Appraise, Apply, Assess.",
        "Systematic review/meta-analysis of RCTs = highest level of evidence.",
        "PICO structures the clinical question; PICOT adds time.",
        "HINARI and Cochrane give low-cost evidence access in Bangladesh."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Define evidence-based nursing and explain its three integrating pillars.",
      "Describe the five A's of the evidence-based practice process.",
      "Explain the hierarchy of evidence and why systematic reviews rank highest.",
      "Write a PICO question for a clinical problem of your choice and label each element.",
      "Discuss the barriers to evidence-based nursing in Bangladesh and how they can be overcome."
    ],
    assessment: [
      { type: "mcq", q: "Evidence-based practice integrates best research evidence, patient values and:", options: ["Hospital profit", "Clinical expertise", "Government policy", "Random choice"], answer: 1, rationale: "EBP integrates research evidence, clinical expertise and patient values/preferences." },
      { type: "mcq", q: "The first of the five A's of EBP is to:", options: ["Apply", "Ask a focused question", "Appraise", "Assess"], answer: 1, rationale: "The process begins by asking a focused, answerable clinical question." },
      { type: "mcq", q: "Which represents the HIGHEST level of evidence?", options: ["Expert opinion", "Case report", "Systematic review/meta-analysis of RCTs", "Single descriptive study"], answer: 2, rationale: "Systematic reviews and meta-analyses of RCTs sit at the top of the hierarchy." },
      { type: "mcq", q: "In PICO, the letter 'C' stands for:", options: ["Cause", "Comparison / control", "Category", "Confounder"], answer: 1, rationale: "C denotes the comparison or control intervention." },
      { type: "mcq", q: "The 'O' in PICO refers to the:", options: ["Observation method", "Outcome of interest", "Organisation", "Objective"], answer: 1, rationale: "O is the outcome the study measures." },
      { type: "mcq", q: "The best study design to answer a therapy/intervention question is:", options: ["Case report", "Randomised controlled trial", "Ethnography", "Cross-sectional survey"], answer: 1, rationale: "RCTs (or systematic reviews of RCTs) best answer intervention/therapy questions." },
      { type: "mcq", q: "Using the findings of a specific study to change practice is best termed:", options: ["Research utilization", "Meta-analysis", "Peer review", "Sampling"], answer: 0, rationale: "Research utilization is the narrower use of study findings to change practice." },
      { type: "mcq", q: "A recognised barrier to EBN in Bangladesh is:", options: ["Too many idle nurses", "Limited access to electronic databases", "Excess research funding", "Too little clinical work"], answer: 1, rationale: "Limited database/full-text access is a key barrier in resource-limited settings." },
      { type: "mcq", q: "The fifth A, 'Assess', in the EBP process means to:", options: ["Ask a new question", "Acquire more articles", "Evaluate the outcome of the change", "Appraise the abstract only"], answer: 2, rationale: "The final step evaluates the outcome/effectiveness of the applied evidence." },
      { type: "mcq", q: "Which model of knowledge transformation has five points (discovery, summary, translation, integration, evaluation)?", options: ["Iowa Model", "ACE Star Model", "Stetler Model", "PARIHS framework"], answer: 1, rationale: "The ACE Star Model describes five points of knowledge transformation." }
      , { type: "fill", q: "The EBP process is summarised by the five A's: Ask, Acquire, Appraise, Apply and ____.", accept: ["assess", "audit"], rationale: "The fifth A is Assess (sometimes called Audit)." }
      , { type: "fill", q: "A freely accessible database widely used by nurses to search the biomedical literature is ____.", accept: ["PubMed", "HINARI", "Cochrane"], rationale: "PubMed (also HINARI/Cochrane) provides low-cost access to evidence." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "res-03-ethics",
    unit: "Unit 1 · Foundations of Nursing Research",
    title: "Ethical Considerations in Nursing Research",
    readMinutes: 22,
    summary: "The ethical principles governing research (autonomy, beneficence, non-maleficence, justice); informed consent; confidentiality and anonymity; the role of the IRB/ethics committee; protection of vulnerable groups; historical cases that shaped ethics; and plagiarism and research misconduct.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why ethics matter in research", p: "Research involving human participants creates an inherent tension between the pursuit of knowledge and the rights and welfare of individuals. Because participants may be exposed to risk, discomfort or intrusion, ethical safeguards ensure that scientific progress is never bought at the price of human dignity. Nurses have a special duty here, as advocates for patients who are often the participants." },
      { h: "Historical cases that shaped research ethics", list: [
        "Nazi medical experiments (World War II) — brutal experiments on prisoners led to the Nuremberg Trials and the Nuremberg Code (1947), the first international code requiring voluntary consent.",
        "Tuskegee Syphilis Study (USA, 1932–1972) — poor Black men with syphilis were left untreated even after penicillin became available; exposed deception and injustice.",
        "Willowbrook study — children with intellectual disability were deliberately infected with hepatitis.",
        "Jewish Chronic Disease Hospital study — cancer cells injected into patients without consent.",
        "These abuses produced the Declaration of Helsinki (1964, World Medical Association) and the Belmont Report (1979)."
      ] },
      { h: "The Belmont Report — three core principles", list: [
        "Respect for persons — individuals are autonomous agents; those with diminished autonomy deserve protection (basis of informed consent).",
        "Beneficence — maximise possible benefits and minimise possible harms.",
        "Justice — fairness in who bears the burdens and who receives the benefits of research."
      ] },
      { h: "The four bioethical principles", p: "Applied to research, the four principles of Beauchamp and Childress guide day-to-day decisions.", list: [
        "Autonomy — respect the participant's right to self-determination and free, informed choice.",
        "Beneficence — act to do good and promote the participant's welfare.",
        "Non-maleficence — 'first, do no harm'; avoid and minimise physical, psychological, social and economic harm.",
        "Justice — treat participants fairly and distribute benefits and burdens equitably."
      ] },
      { h: "Rights of research participants", list: [
        "Right to self-determination (to participate or refuse, and to withdraw at any time without penalty).",
        "Right to full disclosure of the study's nature, risks and benefits.",
        "Right to privacy, confidentiality and anonymity.",
        "Right to fair treatment and non-discriminatory selection.",
        "Right to protection from discomfort and harm."
      ] },
      { h: "Informed consent", p: "Informed consent is the participant's voluntary agreement to take part, given after understanding the study. It rests on three elements: adequate information, comprehension of that information, and voluntariness (free from coercion or undue influence). Consent is documented on a form signed by the participant and witnessed, and for those unable to consent, a legally authorised representative provides proxy consent (with the participant's assent where possible)." },
      { h: "Elements to disclose in consent", list: [
        "The purpose of the study and what participation involves.",
        "Expected duration and procedures, including any that are experimental.",
        "Foreseeable risks, discomforts and benefits.",
        "Alternatives to participation and assurance that care will not be affected.",
        "How confidentiality will be protected.",
        "The voluntary nature of participation and the right to withdraw at any time.",
        "Contact details of the researcher and the ethics committee."
      ] },
      { h: "Confidentiality vs anonymity", p: "The two are related but distinct.", list: [
        "Anonymity — the researcher cannot link a response to a participant, even the researcher does not know who provided which data (e.g. an unsigned postal questionnaire).",
        "Confidentiality — the researcher can identify participants but pledges not to disclose their identity or data publicly; data are coded, stored securely and reported only in aggregate."
      ] },
      { h: "Institutional Review Board / ethics committee", p: "An Institutional Review Board (IRB), Ethics Review Committee (ERC) or Institutional Ethics Committee reviews research proposals before data collection to protect participants. It assesses the risk–benefit ratio, the adequacy of informed consent, the fairness of participant selection and the safeguards for vulnerable groups. In Bangladesh, national oversight is provided through bodies such as the Bangladesh Medical Research Council (BMRC) and institutional ethics committees; international collaborative research also follows ICH-GCP and the Declaration of Helsinki." },
      { h: "Levels of IRB review", list: [
        "Exempt — minimal-risk studies (e.g. anonymous educational surveys) that qualify for exemption.",
        "Expedited — minimal-risk research reviewed by the chair or a subset of members.",
        "Full board review — greater-than-minimal-risk studies or those involving vulnerable groups, reviewed by the full committee."
      ] },
      { h: "Vulnerable groups", p: "Some populations need extra protection because their autonomy or ability to consent is limited, or they are open to coercion.", list: [
        "Children and neonates (require parental permission and the child's assent).",
        "Pregnant women, fetuses and neonates.",
        "People with cognitive or mental impairment.",
        "Prisoners and institutionalised persons.",
        "Economically or educationally disadvantaged and terminally ill people.",
        "Students or employees of the researcher (risk of coercion)."
      ] },
      { h: "Plagiarism", p: "Plagiarism is presenting another person's ideas, words or work as one's own without proper acknowledgement. Forms include direct copying, paraphrasing without citation, and self-plagiarism (reusing one's own previously published work as if new). It is prevented by accurate citation, quotation marks for verbatim text, and the use of similarity-detection software. It constitutes a serious breach of academic and research integrity." },
      { h: "Research misconduct", p: "The three cardinal forms of research misconduct are captured by the acronym FFP.", list: [
        "Fabrication — inventing data or results.",
        "Falsification — manipulating, altering or omitting data or results to misrepresent findings.",
        "Plagiarism — appropriating others' ideas or words without credit.",
        "Related concerns include duplicate publication, ghost/gift authorship, conflicts of interest and failure to obtain ethical approval."
      ] },
      { h: "Bangladesh context", p: "Health research in Bangladesh requires ethical clearance from a recognised committee (institutional ERC or the BMRC National Research Ethics Committee) before it can proceed, and journals and funders increasingly demand documented approval and consent. Nurses conducting or facilitating research must ensure consent forms are in Bangla and understandable to participants with limited literacy." },
      { h: "Key points to remember", list: [
        "Nuremberg Code (1947) → Declaration of Helsinki (1964) → Belmont Report (1979).",
        "Four principles: autonomy, beneficence, non-maleficence, justice.",
        "Informed consent = information + comprehension + voluntariness.",
        "Anonymity: even researcher cannot identify; confidentiality: researcher can but will not disclose.",
        "FFP = Fabrication, Falsification, Plagiarism."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Explain the four ethical principles that govern nursing research.",
      "Describe the elements of valid informed consent.",
      "Distinguish confidentiality from anonymity with examples.",
      "Discuss the role and levels of review of an institutional ethics committee (IRB).",
      "What is research misconduct? Describe its forms and how plagiarism can be prevented."
    ],
    assessment: [
      { type: "mcq", q: "The ethical principle 'first, do no harm' is best described as:", options: ["Autonomy", "Justice", "Non-maleficence", "Fidelity"], answer: 2, rationale: "Non-maleficence is the duty to avoid and minimise harm." },
      { type: "mcq", q: "The first international code to require voluntary consent, arising after Nazi experiments, was the:", options: ["Nuremberg Code", "Belmont Report", "Declaration of Helsinki", "Tuskegee Report"], answer: 0, rationale: "The Nuremberg Code (1947) first required voluntary consent." },
      { type: "mcq", q: "Informed consent rests on information, voluntariness and:", options: ["Payment", "Anonymity", "Comprehension", "Randomisation"], answer: 2, rationale: "Valid consent requires adequate information, comprehension and voluntariness." },
      { type: "mcq", q: "When even the researcher cannot link data to a specific participant, this is:", options: ["Confidentiality", "Anonymity", "Coding", "Fidelity"], answer: 1, rationale: "Anonymity means the response cannot be linked to any participant, even by the researcher." },
      { type: "mcq", q: "The Belmont Report identifies respect for persons, justice and:", options: ["Veracity", "Autonomy only", "Beneficence", "Confidentiality"], answer: 2, rationale: "The three Belmont principles are respect for persons, beneficence and justice." },
      { type: "mcq", q: "Which group is considered a vulnerable population in research?", options: ["Healthy adult volunteers", "Children", "University professors", "Nurse researchers"], answer: 1, rationale: "Children have limited capacity to consent and are a vulnerable group." },
      { type: "mcq", q: "The infamous study in which men with syphilis were left untreated for decades was the:", options: ["Willowbrook study", "Framingham study", "Tuskegee study", "Nurses' Health Study"], answer: 2, rationale: "The Tuskegee Syphilis Study withheld treatment for decades." },
      { type: "mcq", q: "Inventing data that were never collected is called:", options: ["Falsification", "Fabrication", "Plagiarism", "Paraphrasing"], answer: 1, rationale: "Fabrication is inventing data or results." },
      { type: "mcq", q: "The body that reviews a research proposal before data collection to protect participants is the:", options: ["Journal editor", "Funding agency", "Institutional Review Board / ethics committee", "Statistical unit"], answer: 2, rationale: "The IRB/ethics committee reviews proposals to protect participants." },
      { type: "mcq", q: "Reusing one's own previously published work as if it were new is termed:", options: ["Fabrication", "Self-plagiarism", "Falsification", "Peer review"], answer: 1, rationale: "Self-plagiarism is presenting one's prior work as new without disclosure." }
      , { type: "fill", q: "The 1979 report that set out respect for persons, beneficence and justice is the ____ Report.", accept: ["Belmont", "Belmont Report"], rationale: "The Belmont Report (1979) established these three principles." }
      , { type: "fill", q: "The three cardinal forms of research misconduct are fabrication, falsification and ____.", accept: ["plagiarism"], rationale: "FFP = fabrication, falsification and plagiarism." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "res-04-problem",
    unit: "Unit 2 · The Research Process",
    title: "Formulating the Research Problem, Objectives & Questions",
    readMinutes: 20,
    summary: "Sources of research problems; the statement of the problem and its levels; criteria for a good problem; the difference between aims, objectives, research questions and hypotheses; and the significance of the study.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a research problem?", p: "A research problem is a perplexing or troubling situation, gap in knowledge, or unanswered question that a researcher wants to address through systematic inquiry. It is the starting point of the entire research process — a poorly conceived problem cannot be rescued by good methods. The problem is later narrowed into a purpose statement, objectives and researchable questions." },
      { h: "Sources of research problems", list: [
        "Clinical practice and personal experience — puzzling situations and recurring problems at the bedside.",
        "Literature — gaps, contradictions and 'recommendations for further research' in published studies.",
        "Existing theory — propositions that need testing in the real world.",
        "Priorities of the profession and funding/health agencies (e.g. WHO, BNMC, national health priorities).",
        "Social and political issues — new health problems, policies and technologies.",
        "Interaction with peers, mentors and experts."
      ] },
      { h: "Steps in narrowing a problem", p: "Researchers move from a broad topic to a specific, researchable problem: select a broad area of interest → narrow the topic → identify the specific problem → review the literature → define the problem precisely → state the purpose, objectives and questions. Each step reduces breadth and adds focus." },
      { h: "Statement of the problem", p: "The problem statement is a clear, concise expression of the issue to be studied. A good statement identifies the specific problem, indicates its scope and the population affected, conveys its importance, and points to what the study will examine — without prejudging the answer. It usually follows a background paragraph that establishes context and magnitude." },
      { h: "Levels of a research problem", p: "Problems can be framed at increasing levels of complexity that determine the design.", list: [
        "Level 1 (factor-isolating / descriptive) — 'What is this?' Names and describes phenomena (little prior knowledge).",
        "Level 2 (factor-relating / correlational) — 'What is happening here?' Examines relationships among variables.",
        "Level 3 (situation-relating / cause-and-effect) — 'What will happen if…?' Tests predicted effects, often experimentally."
      ] },
      { h: "Criteria for a good research problem — 'SMART' & FINER", p: "Two mnemonics help judge a problem. FINER: Feasible, Interesting, Novel, Ethical, Relevant. Objectives should be SMART: Specific, Measurable, Achievable, Relevant, Time-bound.", list: [
        "Significant — matters to nursing knowledge, practice or policy.",
        "Researchable — can be studied empirically (not a purely moral or value question).",
        "Feasible — realistic given time, money, participants, expertise and equipment.",
        "Ethical — can be studied without violating participants' rights.",
        "Novel — adds something new; not merely repeating settled knowledge.",
        "Interesting to the researcher and clear/unambiguous."
      ] },
      { h: "Aims, objectives and research questions", p: "These terms are related but distinct and are frequently confused.", list: [
        "Aim / goal — the broad, overall intention of the study (one or two sentences).",
        "Objectives — the specific, measurable steps that, together, achieve the aim (often numbered, beginning with an action verb: to determine, to compare, to assess).",
        "Research questions — the precise interrogative statements the study will answer, derived from the objectives.",
        "Hypothesis — a predicted answer to a research question, tested statistically (used mainly in quantitative studies)."
      ] },
      { h: "Writing measurable objectives", p: "Objectives begin with a specific action verb whose achievement can be observed and measured. Strong verbs include 'to determine', 'to compare', 'to identify', 'to assess', 'to describe', 'to evaluate' and 'to explore'. Vague verbs such as 'to understand', 'to know' or 'to study' should be avoided because their attainment cannot be verified. Example: 'To compare the mean pain score of patients receiving music therapy with those receiving routine care.'" },
      { h: "General vs specific objectives", p: "A general objective states the overall purpose in broad terms (e.g. 'to assess the effect of a hand-hygiene programme on infection rates'), while specific objectives break this into concrete, measurable parts (e.g. 'to measure baseline compliance', 'to deliver the programme', 'to compare post-intervention infection rates'). Together the specific objectives fully cover the general one." },
      { h: "Significance of the study", p: "The significance (or justification/rationale) explains why the study is worth doing — the contribution it will make to nursing knowledge, practice, education, administration or policy, and who will benefit (patients, nurses, the health system). It answers the 'so what?' question and is essential for convincing ethics committees and funders." },
      { h: "Delimitations, limitations and assumptions", list: [
        "Delimitations — the boundaries the researcher deliberately sets (e.g. one hospital, adults only).",
        "Limitations — weaknesses beyond the researcher's control that may affect results (e.g. small sample, self-report bias).",
        "Assumptions — beliefs taken to be true without proof (e.g. participants will answer honestly)."
      ] },
      { h: "Bangladesh context", p: "Research problems in Bangladesh are often generated from national priorities — reducing maternal and neonatal mortality, controlling communicable and non-communicable disease, improving nurse staffing and retention, and strengthening health-service quality. Aligning a problem with such priorities improves relevance and the chance of funding and uptake." },
      { h: "Key points to remember", list: [
        "The research problem is the foundation of the whole study.",
        "FINER = Feasible, Interesting, Novel, Ethical, Relevant.",
        "Objectives should be SMART and begin with measurable action verbs.",
        "Aim = broad; objectives = specific measurable steps; question = interrogative form.",
        "Significance answers 'why is this study worth doing?'"
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Define a research problem and list its main sources.",
      "State the criteria (FINER) for a good research problem.",
      "Differentiate the aim, objectives, research questions and hypothesis of a study.",
      "Explain how to write a measurable research objective, with an example.",
      "What is the significance of a study, and how does it differ from limitations and delimitations?"
    ],
    assessment: [
      { type: "mcq", q: "The starting point of the entire research process is the:", options: ["Data analysis", "Research problem", "Reference list", "Sample size"], answer: 1, rationale: "A clearly conceived research problem is the foundation of the study." },
      { type: "mcq", q: "In the FINER criteria, the 'F' stands for:", options: ["Fast", "Feasible", "Formal", "Fixed"], answer: 1, rationale: "F = Feasible — realistic given available resources." },
      { type: "mcq", q: "A specific, measurable step that helps achieve the aim of a study is a research:", options: ["Objective", "Reference", "Limitation", "Assumption"], answer: 0, rationale: "Objectives are the measurable steps toward the aim." },
      { type: "mcq", q: "Which verb is BEST for a measurable objective?", options: ["To understand", "To know", "To compare", "To appreciate"], answer: 2, rationale: "'To compare' is observable and measurable; the others cannot be verified." },
      { type: "mcq", q: "A level-1 (factor-isolating) research problem chiefly asks:", options: ["What will happen if…?", "What is this / what is it like?", "Why did it happen?", "How much did it cost?"], answer: 1, rationale: "Level 1 describes and names phenomena — 'what is this?'" },
      { type: "mcq", q: "Boundaries the researcher deliberately sets on a study are called:", options: ["Limitations", "Delimitations", "Assumptions", "Hypotheses"], answer: 1, rationale: "Delimitations are the deliberate boundaries the researcher chooses." },
      { type: "mcq", q: "Weaknesses beyond the researcher's control that may affect results are:", options: ["Delimitations", "Assumptions", "Limitations", "Objectives"], answer: 2, rationale: "Limitations are uncontrollable weaknesses affecting the study." },
      { type: "mcq", q: "The part of a proposal explaining why the study is worth doing is the:", options: ["Significance / justification", "Reference list", "Abstract", "Appendix"], answer: 0, rationale: "The significance/justification answers the 'so what?' question." },
      { type: "mcq", q: "'To assess the effect of a hand-hygiene programme on infection rates' is an example of a:", options: ["General objective", "Reference", "Limitation", "Delimitation"], answer: 0, rationale: "This broad statement is a general objective, later split into specific ones." },
      { type: "mcq", q: "A predicted answer to a research question that is tested statistically is a:", options: ["Delimitation", "Hypothesis", "Assumption", "Reference"], answer: 1, rationale: "A hypothesis is a testable prediction of the answer to a research question." }
      , { type: "fill", q: "The mnemonic for a good research problem — Feasible, Interesting, Novel, Ethical, Relevant — is ____.", accept: ["FINER"], rationale: "FINER summarises the criteria for a good research problem." }
      , { type: "fill", q: "Objectives should begin with a measurable ____ verb such as 'to compare' or 'to determine'.", accept: ["action"], rationale: "Measurable objectives start with an observable action verb." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "res-05-literature",
    unit: "Unit 2 · The Research Process",
    title: "Literature Review",
    readMinutes: 20,
    summary: "Purpose and importance of the literature review; primary vs secondary sources and electronic databases (PubMed, CINAHL, Cochrane); skills for searching and appraising; synthesising the literature; and the theoretical/conceptual framework.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a literature review?", p: "A literature review is a systematic, critical and comprehensive summary and analysis of published and unpublished work relevant to a research topic. It is not a list of summaries but an organised synthesis that shows what is known, what is disputed and what gap the new study will fill. It is conducted early (to shape the study) and revisited when interpreting findings." },
      { h: "Purposes / importance of the literature review", list: [
        "Identifies what is already known and reveals gaps or contradictions.",
        "Refines the research problem, questions and hypotheses.",
        "Prevents needless duplication of existing work.",
        "Suggests suitable designs, methods, samples and instruments used by others.",
        "Provides a theoretical or conceptual framework for the study.",
        "Helps interpret and compare the study's findings.",
        "Builds the researcher's expertise and supplies the reference base."
      ] },
      { h: "Primary vs secondary sources", list: [
        "Primary source — the original report of a study written by the researcher who conducted it (e.g. an original research article, thesis). Preferred, because it is first-hand and unaltered.",
        "Secondary source — a description or summary of another's work (e.g. a textbook, review article citing original studies, or a commentary). Useful for orientation but may contain errors of interpretation."
      ] },
      { h: "Types of information sources", list: [
        "Journals — the main source of current primary research.",
        "Books and textbooks — background and established knowledge (may lag behind current evidence).",
        "Theses and dissertations — detailed, often unpublished, primary work.",
        "Conference proceedings and reports — recent findings and grey literature.",
        "Government and organisational documents (WHO, DGHS, BNMC) — statistics and guidelines."
      ] },
      { h: "Electronic databases", p: "Efficient reviewing uses bibliographic databases.", list: [
        "PubMed / MEDLINE — the major free biomedical database (US National Library of Medicine).",
        "CINAHL — Cumulative Index to Nursing and Allied Health Literature; nursing-specific.",
        "Cochrane Library — systematic reviews of interventions (highest-quality evidence).",
        "Google Scholar — broad scholarly search engine, useful but less precise.",
        "HINARI — WHO programme giving low-income countries free/low-cost access to journals — important in Bangladesh."
      ] },
      { h: "Building a search strategy", p: "A structured search improves recall and precision. Identify key concepts (often from PICO), list synonyms and alternative spellings, and combine them with Boolean operators.", list: [
        "AND — narrows a search (both terms must appear): 'pain AND music'.",
        "OR — broadens a search (either term): 'adolescent OR teenager'.",
        "NOT — excludes a term.",
        "Truncation (*) captures word variants: 'nurs*' finds nurse, nurses, nursing.",
        "MeSH (medical subject headings) and filters (date, language, study type) refine results."
      ] },
      { h: "Skills for conducting the review", list: [
        "Searching — using databases, keywords, Boolean logic and MeSH terms.",
        "Screening — selecting relevant studies against inclusion/exclusion criteria.",
        "Reading & note-taking — recording bibliographic details and key findings systematically.",
        "Critical appraisal — judging the quality and validity of each study.",
        "Organising — grouping studies by theme, method or chronology.",
        "Referencing — managing citations (e.g. with reference-management software)."
      ] },
      { h: "Critical appraisal", p: "Critical appraisal is the process of carefully and systematically examining research to judge its trustworthiness, value and relevance. The reviewer asks whether the aims were clear, the design appropriate, the sample adequate, the measures valid and reliable, the analysis correct, the conclusions justified by the data, and the findings applicable to practice. Structured tools (e.g. CASP checklists) guide the process." },
      { h: "Synthesising the literature", p: "Synthesis means integrating findings across studies into a coherent narrative rather than describing each study one by one. The reviewer compares and contrasts results, notes agreements and conflicts, identifies patterns and gaps, and argues logically toward the justification for the new study. A thematic or conceptual organisation (by topic) is usually stronger than a chronological list." },
      { h: "Avoiding common pitfalls", list: [
        "Merely summarising study after study without analysis or linkage.",
        "Relying on secondary sources instead of the original reports.",
        "Using outdated references when current evidence exists.",
        "Selective (biased) inclusion of only supportive studies.",
        "Plagiarising — failing to cite ideas and words correctly."
      ] },
      { h: "Theoretical & conceptual frameworks", p: "A framework is the structure that organises and links the concepts of a study. A theoretical framework is based on an existing, established theory (e.g. Orem's Self-Care Deficit Theory, the Health Belief Model). A conceptual framework is the researcher's own diagrammatic map of how the study's concepts and variables relate, often built when no single theory fits. The framework guides variable selection, hypotheses and interpretation.", figure: {
        caption: "A simple conceptual framework: independent variable acts on the dependent variable while extraneous variables are controlled.",
        svg: '<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conceptual framework diagram"><rect x="20" y="60" width="140" height="46" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="90" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Independent</text><text x="90" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">variable</text><rect x="320" y="60" width="140" height="46" rx="8" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="390" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Dependent</text><text x="390" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">variable</text><line x1="160" y1="83" x2="318" y2="83" stroke="#0F4C3A" stroke-width="2"/><polygon points="318,83 306,77 306,89" fill="#0F4C3A"/><rect x="180" y="122" width="120" height="34" rx="8" fill="#BBF7D0" stroke="#15803D"/><text x="240" y="143" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Extraneous variables</text><line x1="240" y1="122" x2="240" y2="90" stroke="#15803D" stroke-dasharray="4 3"/></svg>'
      } },
      { h: "Key points to remember", list: [
        "Primary sources are first-hand and preferred over secondary summaries.",
        "PubMed, CINAHL and Cochrane are core nursing databases; HINARI aids access in Bangladesh.",
        "Boolean AND narrows, OR broadens, NOT excludes; truncation (*) captures variants.",
        "Synthesise, don't merely summarise.",
        "Theoretical framework = existing theory; conceptual framework = researcher's own map."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "State the purposes and importance of the literature review.",
      "Differentiate primary and secondary sources, and name three databases used in nursing.",
      "Explain how Boolean operators and truncation improve a literature search.",
      "What is critical appraisal, and what questions does the reviewer ask?",
      "Distinguish a theoretical framework from a conceptual framework."
    ],
    assessment: [
      { type: "mcq", q: "A literature review is best described as a:", options: ["Random list of books", "Critical synthesis of relevant published work", "Copy of one textbook chapter", "Set of personal opinions"], answer: 1, rationale: "A review is a systematic, critical synthesis of relevant literature, not a mere list." },
      { type: "mcq", q: "An original research article written by the investigator who did the study is a:", options: ["Secondary source", "Primary source", "Tertiary source", "Grey source"], answer: 1, rationale: "A primary source is the first-hand report by the original researcher." },
      { type: "mcq", q: "Which database is nursing-specific?", options: ["CINAHL", "PhysicsWeb", "arXiv", "SSRN"], answer: 0, rationale: "CINAHL indexes nursing and allied-health literature." },
      { type: "mcq", q: "The Boolean operator that NARROWS a search by requiring both terms is:", options: ["OR", "AND", "NOT", "NEAR"], answer: 1, rationale: "AND requires both terms and narrows results." },
      { type: "mcq", q: "Typing 'nurs*' to capture nurse, nurses and nursing is called:", options: ["Truncation", "Nesting", "Filtering", "Ranking"], answer: 0, rationale: "Truncation (*) retrieves all variant endings of a root word." },
      { type: "mcq", q: "The WHO programme giving low-income countries low-cost access to journals is:", options: ["HINARI", "SCOPUS", "ORCID", "DOAJ"], answer: 0, rationale: "HINARI provides access to health literature in low-income countries." },
      { type: "mcq", q: "Judging the quality, validity and relevance of a study is called:", options: ["Sampling", "Critical appraisal", "Randomisation", "Coding"], answer: 1, rationale: "Critical appraisal evaluates a study's trustworthiness and relevance." },
      { type: "mcq", q: "A framework built directly on an established theory such as the Health Belief Model is a:", options: ["Conceptual framework", "Theoretical framework", "Sampling frame", "Time frame"], answer: 1, rationale: "A theoretical framework is grounded in an existing, named theory." },
      { type: "mcq", q: "The Cochrane Library is best known for providing:", options: ["Expert opinions", "Systematic reviews of interventions", "Newspaper articles", "Raw datasets only"], answer: 1, rationale: "Cochrane publishes high-quality systematic reviews of interventions." },
      { type: "mcq", q: "The best way to present multiple studies in a review is to:", options: ["Summarise each one separately with no linkage", "Synthesise them thematically, comparing findings", "List only the titles", "Ignore conflicting studies"], answer: 1, rationale: "Synthesis integrates and compares studies thematically." }
      , { type: "fill", q: "The Boolean operator that BROADENS a search by accepting either term is ____.", accept: ["OR"], rationale: "OR retrieves records containing either term, broadening the search." }
      , { type: "fill", q: "The major free biomedical database maintained by the US National Library of Medicine is ____.", accept: ["PubMed", "MEDLINE", "PubMed/MEDLINE"], rationale: "PubMed/MEDLINE is the principal free biomedical database." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "res-06-hypothesis",
    unit: "Unit 2 · The Research Process",
    title: "Hypothesis in Nursing Research",
    readMinutes: 18,
    summary: "Definition and purpose of a hypothesis; characteristics of a good hypothesis; types (null, alternative/research, directional, non-directional, simple, complex, associative, causal); its relationship to research questions; and the logic of hypothesis testing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a hypothesis?", p: "A hypothesis is a tentative, testable statement that predicts the expected relationship between two or more variables. It is an 'educated guess' derived from theory, prior research or observation, and it translates the research question into a form that can be tested statistically. Hypotheses are used mainly in quantitative research; purely descriptive and qualitative studies often use research questions instead." },
      { h: "Purpose of a hypothesis", list: [
        "Provides direction and focus to the study.",
        "Bridges theory and observation by making theory testable.",
        "Specifies the variables and the expected relationship between them.",
        "Guides the choice of design, sample and statistical test.",
        "Enables objective testing and either support or rejection by data."
      ] },
      { h: "Characteristics of a good hypothesis", list: [
        "States a relationship between two or more variables.",
        "Testable / measurable — can be supported or refuted by empirical data.",
        "Clear and specific — uses precise, unambiguous terms.",
        "Consistent with existing knowledge and theory.",
        "Simple and concise — as parsimonious as possible.",
        "Stated in declarative form and formulated before data collection."
      ] },
      { h: "Null hypothesis (H0)", p: "The null hypothesis states that there is NO relationship or NO difference between the variables (any observed difference is due to chance). It is the hypothesis that is actually tested statistically. Example: 'There is no difference in mean pain score between patients receiving music therapy and those receiving routine care.' The researcher seeks evidence to reject the null." },
      { h: "Alternative / research hypothesis (H1 or Ha)", p: "The alternative (research) hypothesis states that a relationship or difference DOES exist. It reflects what the researcher actually expects. Example: 'Patients receiving music therapy have a lower mean pain score than those receiving routine care.' If the data allow the null to be rejected, the alternative is supported." },
      { h: "Directional vs non-directional", list: [
        "Directional hypothesis — predicts not only that a relationship exists but also its direction (e.g. 'higher', 'lower', 'positive', 'increases'). Used when theory or prior evidence supports a specific direction; tested one-tailed.",
        "Non-directional hypothesis — predicts that a relationship or difference exists but not its direction (e.g. 'there is a difference'). Used when evidence is insufficient to predict direction; tested two-tailed."
      ] },
      { h: "Simple vs complex", list: [
        "Simple hypothesis — states the relationship between ONE independent and ONE dependent variable (e.g. 'smoking increases the risk of lung cancer').",
        "Complex (multivariate) hypothesis — states the relationship among two or more independent and/or two or more dependent variables (e.g. 'smoking and obesity increase the risk of heart disease and stroke')."
      ] },
      { h: "Associative vs causal", list: [
        "Associative hypothesis — predicts that variables occur or change together (correlation) without claiming cause (e.g. 'physical activity is associated with lower blood pressure').",
        "Causal hypothesis — predicts that the independent variable produces an effect on the dependent variable (cause-and-effect), and requires an experimental design to test."
      ] },
      { h: "Relationship to research questions", p: "A research question is an interrogative statement ('Does music therapy reduce post-operative pain?'), while a hypothesis is a declarative prediction of the answer ('Music therapy reduces post-operative pain'). Every testable hypothesis can be rephrased as a question and vice versa; exploratory and descriptive studies often stop at the question, while explanatory quantitative studies proceed to a hypothesis.", figure: {
        caption: "From research question to testable hypotheses (null and alternative).",
        svg: '<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Question to hypothesis flow"><rect x="10" y="55" width="150" height="46" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="85" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Research question</text><text x="85" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">(interrogative)</text><rect x="200" y="15" width="150" height="40" rx="8" fill="#BBF7D0" stroke="#15803D"/><text x="275" y="39" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">H1: relationship exists</text><rect x="200" y="100" width="150" height="40" rx="8" fill="#86EFAC" stroke="#15803D"/><text x="275" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">H0: no relationship</text><line x1="160" y1="70" x2="200" y2="40" stroke="#0F4C3A" stroke-width="2"/><line x1="160" y1="86" x2="200" y2="118" stroke="#0F4C3A" stroke-width="2"/></svg>'
      } },
      { h: "The logic of hypothesis testing", p: "Statistical testing works by assuming the null hypothesis is true and asking how likely the observed data would be under that assumption. If the data are very unlikely under the null (probability below a chosen significance level, usually p < 0.05), the null is rejected in favour of the alternative. Crucially, we never 'prove' a hypothesis — we only reject or fail to reject the null on the balance of probability." },
      { h: "Common errors", p: "Because decisions are probabilistic, two errors are possible: a Type I error (α) rejects a true null hypothesis (a false positive), and a Type II error (β) fails to reject a false null (a false negative). Setting a smaller α reduces Type I error, and increasing sample size and power (1 − β) reduces Type II error." },
      { h: "Key points to remember", list: [
        "Hypothesis = testable prediction of the relationship between variables.",
        "H0 = no difference/relationship (the one actually tested); H1 = a difference exists.",
        "Directional = one-tailed with predicted direction; non-directional = two-tailed.",
        "Simple = 1 IV & 1 DV; complex = multiple variables.",
        "We reject or fail to reject H0 — we never 'prove' a hypothesis."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Define a hypothesis and state its purposes in research.",
      "List the characteristics of a good hypothesis.",
      "Differentiate the null and alternative hypotheses with examples.",
      "Compare directional with non-directional and simple with complex hypotheses.",
      "Explain the logic of hypothesis testing and the two types of error that can occur."
    ],
    assessment: [
      { type: "mcq", q: "A hypothesis is best defined as a:", options: ["Proven fact", "Testable prediction of the relationship between variables", "Summary of the literature", "List of references"], answer: 1, rationale: "A hypothesis is a tentative, testable statement predicting a relationship between variables." },
      { type: "mcq", q: "The hypothesis stating there is NO difference between groups is the:", options: ["Null hypothesis", "Alternative hypothesis", "Directional hypothesis", "Complex hypothesis"], answer: 0, rationale: "The null hypothesis (H0) asserts no relationship or difference." },
      { type: "mcq", q: "'Patients on music therapy have LOWER pain than controls' is a ____ hypothesis.", options: ["Non-directional", "Directional", "Null", "Associative"], answer: 1, rationale: "Predicting the direction ('lower') makes it directional." },
      { type: "mcq", q: "A hypothesis with one independent and one dependent variable is:", options: ["Complex", "Multivariate", "Simple", "Causal"], answer: 2, rationale: "A simple hypothesis links one IV to one DV." },
      { type: "mcq", q: "Which is actually tested statistically?", options: ["The research hypothesis", "The null hypothesis", "The conceptual framework", "The aim"], answer: 1, rationale: "Statistical tests are applied to the null hypothesis." },
      { type: "mcq", q: "A hypothesis predicting that variables change together without claiming cause is:", options: ["Causal", "Associative", "Null", "Directional"], answer: 1, rationale: "An associative hypothesis predicts correlation, not causation." },
      { type: "mcq", q: "Rejecting a TRUE null hypothesis is a:", options: ["Type I error", "Type II error", "Sampling error", "Measurement error"], answer: 0, rationale: "A Type I (α) error is a false positive — rejecting a true null." },
      { type: "mcq", q: "Which is NOT a characteristic of a good hypothesis?", options: ["Testable", "Clear and specific", "Untestable and vague", "States a relationship"], answer: 2, rationale: "A good hypothesis must be testable and clear, not vague or untestable." },
      { type: "mcq", q: "A non-directional hypothesis is typically tested using a:", options: ["One-tailed test", "No test", "Two-tailed test", "Chi-square only"], answer: 2, rationale: "Non-directional hypotheses use two-tailed tests because direction is not predicted." },
      { type: "mcq", q: "Failing to reject a FALSE null hypothesis is a:", options: ["Type I error", "Type II error", "Random error", "Bias"], answer: 1, rationale: "A Type II (β) error is a false negative — failing to reject a false null." }
      , { type: "fill", q: "The hypothesis that predicts a relationship or difference DOES exist is called the ____ (research) hypothesis.", accept: ["alternative", "alternative hypothesis", "research"], rationale: "The alternative/research hypothesis (H1) predicts a relationship exists." }
      , { type: "fill", q: "A hypothesis that predicts the direction of the relationship (e.g. 'higher' or 'lower') is a ____ hypothesis.", accept: ["directional"], rationale: "A directional hypothesis specifies the direction of the predicted relationship." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "res-07-design",
    unit: "Unit 2 · The Research Process",
    title: "Research Designs: Quantitative & Qualitative",
    readMinutes: 24,
    summary: "The concept of research design; quantitative designs (experimental/RCT, quasi-experimental, and non-experimental — descriptive, correlational, survey, cohort, case-control); qualitative designs (phenomenology, grounded theory, ethnography, case study); and mixed-methods research.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a research design?", p: "A research design is the overall plan or blueprint for conducting a study — it specifies how participants are selected, how variables are measured or manipulated, when and how often data are collected, and how bias and extraneous variables are controlled. A sound design ensures that the study answers its question with the greatest possible validity and the least possible bias." },
      { h: "Classification of designs", p: "Designs are first divided by paradigm: quantitative designs (which measure variables numerically) and qualitative designs (which explore meaning). Quantitative designs are further split by whether the researcher manipulates an independent variable into experimental, quasi-experimental and non-experimental designs.", figure: {
        caption: "A map of research designs, from experimental control to naturalistic exploration.",
        svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of research designs"><rect x="200" y="8" width="120" height="34" rx="6" fill="#0F4C3A"/><text x="260" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Research design</text><rect x="70" y="70" width="150" height="30" rx="6" fill="#15803D"/><text x="145" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">Quantitative</text><rect x="300" y="70" width="150" height="30" rx="6" fill="#22C55E"/><text x="375" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Qualitative</text><rect x="10" y="130" width="120" height="28" rx="5" fill="#BBF7D0" stroke="#15803D"/><text x="70" y="149" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Experimental/RCT</text><rect x="10" y="165" width="120" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="70" y="182" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Quasi-experimental</text><rect x="10" y="196" width="120" height="20" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="70" y="210" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Non-experimental</text><rect x="300" y="130" width="170" height="26" rx="5" fill="#86EFAC" stroke="#15803D"/><text x="385" y="147" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Phenomenology / grounded theory</text><rect x="300" y="162" width="170" height="26" rx="5" fill="#86EFAC" stroke="#15803D"/><text x="385" y="179" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Ethnography / case study</text><line x1="260" y1="42" x2="145" y2="70" stroke="#0F4C3A"/><line x1="260" y1="42" x2="375" y2="70" stroke="#0F4C3A"/></svg>'
      } },
      { h: "Experimental design (true experiment / RCT)", p: "A true experiment has three defining features: manipulation (the researcher applies the independent variable/intervention), control (a comparison or control group), and randomisation (participants are randomly assigned to groups). The randomised controlled trial (RCT) is the gold standard for testing cause-and-effect because randomisation balances known and unknown confounders across groups, giving the strongest evidence for an intervention's effect." },
      { h: "Quasi-experimental design", p: "Quasi-experimental designs test an intervention but LACK randomisation, or sometimes a control group. They are used when random assignment is impractical or unethical (e.g. comparing two wards). Common types include the non-equivalent control-group design and the one-group pre-test/post-test design. They are more feasible than RCTs but more vulnerable to confounding and selection bias, so causal claims are weaker." },
      { h: "Non-experimental (observational) designs", p: "Here the researcher observes and measures variables without manipulating any of them.", list: [
        "Descriptive — portrays characteristics of a group as they are (e.g. a survey of nurses' knowledge of hand hygiene).",
        "Correlational — examines the relationship or association between variables without inferring cause (e.g. relation between BMI and blood pressure).",
        "Survey — collects self-reported data from a sample to describe attitudes, knowledge or behaviour.",
        "Comparative — compares groups that already differ on a variable."
      ] },
      { h: "Cohort vs case-control designs", p: "Two key analytic observational designs, especially in epidemiology.", list: [
        "Cohort study — starts with exposure status and follows groups forward in time to see who develops the outcome (prospective); good for measuring incidence and relative risk.",
        "Case-control study — starts with the outcome (cases vs controls) and looks backward for prior exposure (retrospective); efficient for rare diseases; yields the odds ratio."
      ] },
      { h: "Cross-sectional vs longitudinal", list: [
        "Cross-sectional — data collected at a single point in time; quick and cheap but cannot show change or sequence (a 'snapshot').",
        "Longitudinal — data collected from the same participants at several points over time; shows change and trends but is costly and prone to attrition."
      ] },
      { h: "Qualitative designs — phenomenology", p: "Phenomenology (rooted in philosophy, Husserl/Heidegger) explores the lived experience and the meaning people give to a phenomenon (e.g. the experience of living with a colostomy). Data come from in-depth interviews; the researcher brackets (sets aside) personal assumptions and describes the essence of the experience." },
      { h: "Qualitative designs — grounded theory", p: "Grounded theory (Glaser & Strauss) aims to generate a theory that is 'grounded' in data about a social process (e.g. how families cope with a child's chronic illness). It uses constant comparative analysis, theoretical sampling and coding until theoretical saturation is reached and a theory emerges from the data." },
      { h: "Qualitative designs — ethnography & case study", list: [
        "Ethnography (from anthropology) — studies a culture or group in its natural setting through prolonged fieldwork and participant observation (e.g. the culture of a labour ward).",
        "Case study — an in-depth, holistic examination of a single case or a few cases (a person, unit or event) using multiple data sources.",
        "Historical research — systematically studies past events from documents and records."
      ] },
      { h: "The concept of saturation", p: "In qualitative research, data collection continues until data saturation — the point at which new interviews or observations yield no new themes or information. Saturation, rather than a fixed sample size, determines when enough data have been gathered, which is why qualitative samples are usually small but information-rich." },
      { h: "Mixed-methods research", p: "Mixed-methods research deliberately combines quantitative and qualitative approaches in a single study to gain a fuller understanding than either alone. Common designs include convergent parallel (both collected together and compared), explanatory sequential (quantitative first, then qualitative to explain results) and exploratory sequential (qualitative first to build an instrument, then quantitative). It capitalises on the strengths of both paradigms." },
      { h: "Choosing a design", p: "The design is chosen to fit the research question: intervention/therapy questions call for an RCT; questions about relationships call for correlational or cohort designs; questions about rare outcomes suit case-control; and questions about meaning and experience call for qualitative designs. Feasibility, ethics and resources also shape the choice." },
      { h: "Key points to remember", list: [
        "True experiment = manipulation + control + randomisation; RCT is the gold standard for cause-effect.",
        "Quasi-experimental lacks randomisation; non-experimental has no manipulation.",
        "Cohort looks forward from exposure (relative risk); case-control looks back from outcome (odds ratio).",
        "Phenomenology = lived experience; grounded theory = theory generation; ethnography = culture; case study = in-depth single case.",
        "Qualitative sampling stops at data saturation."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Define research design and explain its importance.",
      "Describe the three essential features of a true experimental design (RCT).",
      "Differentiate cohort and case-control studies with examples.",
      "Compare phenomenology, grounded theory, ethnography and case-study designs.",
      "What is mixed-methods research? Describe its common designs."
    ],
    assessment: [
      { type: "mcq", q: "The three essential features of a true experiment are manipulation, control and:", options: ["Randomisation", "Interview", "Saturation", "Bracketing"], answer: 0, rationale: "A true experiment requires manipulation, a control group and random assignment." },
      { type: "mcq", q: "The gold-standard design for testing cause-and-effect of an intervention is the:", options: ["Case report", "Randomised controlled trial", "Cross-sectional survey", "Ethnography"], answer: 1, rationale: "The RCT provides the strongest evidence of causation." },
      { type: "mcq", q: "A study that tests an intervention but does NOT use random assignment is:", options: ["True experimental", "Quasi-experimental", "Phenomenological", "Correlational"], answer: 1, rationale: "Quasi-experimental designs test interventions without randomisation." },
      { type: "mcq", q: "A design that starts with exposure and follows participants forward to the outcome is a:", options: ["Case-control study", "Case study", "Cohort study", "Cross-sectional survey"], answer: 2, rationale: "Cohort studies follow exposed and unexposed groups forward in time." },
      { type: "mcq", q: "A case-control study typically yields which measure of association?", options: ["Relative risk", "Odds ratio", "Incidence rate", "Mean difference"], answer: 1, rationale: "Case-control studies estimate the odds ratio." },
      { type: "mcq", q: "The qualitative design that explores lived experience and its meaning is:", options: ["Ethnography", "Phenomenology", "Grounded theory", "Case-control"], answer: 1, rationale: "Phenomenology studies the lived experience of a phenomenon." },
      { type: "mcq", q: "The qualitative design that aims to GENERATE a theory from data is:", options: ["Phenomenology", "Ethnography", "Grounded theory", "Survey"], answer: 2, rationale: "Grounded theory generates theory grounded in the data." },
      { type: "mcq", q: "The study of a culture or group in its natural setting through fieldwork is:", options: ["Ethnography", "Phenomenology", "Correlational study", "RCT"], answer: 0, rationale: "Ethnography studies cultures through prolonged fieldwork and observation." },
      { type: "mcq", q: "Collecting data from the same people at several points over time is a ____ design.", options: ["Cross-sectional", "Case-control", "Descriptive", "Longitudinal"], answer: 3, rationale: "Longitudinal designs follow the same participants over time." },
      { type: "mcq", q: "The point at which new qualitative data yield no new themes is called:", options: ["Randomisation", "Data saturation", "Triangulation", "Bracketing"], answer: 1, rationale: "Data saturation signals that enough qualitative data have been collected." }
      , { type: "fill", q: "A design that lacks random assignment but still tests an intervention is called ____.", accept: ["quasi-experimental", "quasi experimental"], rationale: "Quasi-experimental designs test interventions without randomisation." }
      , { type: "fill", q: "Research that deliberately combines quantitative and qualitative approaches in one study is called ____ research.", accept: ["mixed-methods", "mixed methods"], rationale: "Mixed-methods research integrates both paradigms." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "res-08-variables",
    unit: "Unit 2 · The Research Process",
    title: "Variables & Their Measurement",
    readMinutes: 18,
    summary: "Definition and types of variables (independent, dependent, extraneous/confounding, demographic); operational definitions; the four levels of measurement (nominal, ordinal, interval, ratio); and how variables are measured.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a variable?", p: "A variable is any characteristic, quality or attribute that takes on different values (varies) among the people, objects or conditions being studied — for example age, weight, blood pressure, pain level or anxiety. A characteristic that does not vary (is the same for everyone in the study) is a constant. Research is largely the study of how variables relate to one another." },
      { h: "Independent variable (IV)", p: "The independent variable is the presumed cause, the input, or the intervention — the variable the researcher manipulates or that is thought to influence the outcome. In an experiment it is the treatment (e.g. a teaching programme). It is also called the predictor or explanatory variable. It is 'independent' because its value does not depend on other variables in the study." },
      { h: "Dependent variable (DV)", p: "The dependent variable is the presumed effect, the outcome, or the response the researcher measures — it is expected to change in response to the independent variable (e.g. the patient's knowledge score after a teaching programme). It is also called the outcome or criterion variable, and it 'depends on' the independent variable. A study's hypothesis states how the IV is expected to affect the DV." },
      { h: "Extraneous & confounding variables", p: "Extraneous variables are variables other than the IV that could influence the DV and thus distort the results. When an extraneous variable is related to both the IV and the DV, it becomes a confounding variable that can produce a false apparent relationship. For example, in studying whether coffee causes heart disease, smoking is a confounder because smokers drink more coffee and smoking itself causes heart disease. Confounders are controlled by randomisation, matching, restriction or statistical adjustment.", figure: {
        caption: "A confounding variable is associated with both the independent and dependent variables, distorting the observed relationship.",
        svg: '<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Confounding variable diagram"><rect x="20" y="90" width="120" height="42" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="80" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Coffee (IV)</text><rect x="320" y="90" width="120" height="42" rx="8" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="380" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Heart disease</text><text x="380" y="122" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">(DV)</text><rect x="170" y="10" width="120" height="42" rx="8" fill="#BBF7D0" stroke="#15803D" stroke-width="2"/><text x="230" y="30" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Smoking</text><text x="230" y="44" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">(confounder)</text><line x1="140" y1="105" x2="320" y2="105" stroke="#0F4C3A" stroke-width="2" stroke-dasharray="5 4"/><polygon points="320,105 308,99 308,111" fill="#0F4C3A"/><line x1="215" y1="52" x2="90" y2="90" stroke="#15803D" stroke-width="2"/><line x1="245" y1="52" x2="375" y2="90" stroke="#15803D" stroke-width="2"/></svg>'
      } },
      { h: "Other types of variables", list: [
        "Demographic variables — participant characteristics such as age, sex, education and income (often measured to describe the sample and check comparability).",
        "Attribute variables — pre-existing characteristics that cannot be manipulated (e.g. blood group).",
        "Active variables — those the researcher can manipulate (e.g. dose of a drug).",
        "Continuous variables — take any value within a range (e.g. weight, temperature).",
        "Discrete / categorical variables — take only distinct, separate values (e.g. number of children, blood group)."
      ] },
      { h: "Conceptual vs operational definitions", list: [
        "Conceptual (theoretical) definition — the abstract, dictionary-like meaning of a concept (e.g. 'anxiety is a feeling of apprehension and tension').",
        "Operational definition — specifies exactly how the variable will be observed and measured in this study (e.g. 'anxiety is the score obtained on the State-Trait Anxiety Inventory')."
      ] },
      { h: "Why operational definitions matter", p: "Operational definitions make abstract concepts researchable and allow other investigators to replicate the study. Without them, terms such as 'pain', 'quality of care' or 'competence' would mean different things to different people. A good operational definition names the tool or procedure, the unit, and the criterion (e.g. hypertension = systolic ≥140 mmHg or diastolic ≥90 mmHg on two readings)." },
      { h: "Levels of measurement — overview", p: "The level of measurement of a variable determines which statistics can legitimately be used. The four levels, in ascending order of information, are nominal, ordinal, interval and ratio (mnemonic: 'NOIR')." },
      { h: "Nominal level", p: "Nominal (categorical) measurement classifies data into named categories with NO order or rank — e.g. sex (male/female), blood group, marital status, religion. Numbers assigned (1 = male, 2 = female) are mere labels; only counting, mode and frequency/percentage are meaningful. It is the lowest level." },
      { h: "Ordinal level", p: "Ordinal measurement ranks data in a meaningful ORDER, but the intervals between ranks are unequal or unknown — e.g. pain (mild/moderate/severe), Likert scales (strongly agree → strongly disagree), education level, cancer stage. The median and mode are appropriate; the mean is not strictly justified." },
      { h: "Interval level", p: "Interval measurement has ordered categories with EQUAL intervals between values but NO true (absolute) zero — e.g. temperature in Celsius or Fahrenheit, calendar year, IQ score. Zero does not mean 'none' (0 °C is not 'no temperature'), so ratios are meaningless (20 °C is not 'twice as hot' as 10 °C). Mean and standard deviation can be used." },
      { h: "Ratio level", p: "Ratio measurement has all the properties of interval data PLUS a true zero that means 'none of the quantity' — e.g. weight, height, age, pulse rate, income, number of children. Because zero is absolute, ratios are meaningful (a 60 kg person is twice as heavy as a 30 kg person). It is the highest level and permits all mathematical operations and statistics." },
      { h: "Bangladesh/clinical relevance", p: "Nurses record variables at all four levels daily: blood group (nominal), pain and wound-healing stage (ordinal), body temperature in Celsius (interval) and weight, pulse and blood pressure (ratio). Recognising the level guides both correct charting and the correct choice of statistical test later." },
      { h: "Key points to remember", list: [
        "IV = presumed cause/intervention; DV = measured effect/outcome.",
        "A confounder is linked to both IV and DV and distorts the result.",
        "Operational definition = how a variable is measured in this study.",
        "NOIR: Nominal (categories) → Ordinal (rank) → Interval (equal gaps, no true zero) → Ratio (true zero).",
        "Temperature in °C is interval; weight and age are ratio."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Define a variable and differentiate independent, dependent and extraneous variables.",
      "What is a confounding variable? Give an example and state how it is controlled.",
      "Distinguish conceptual from operational definitions with an example.",
      "Describe the four levels of measurement with a nursing example of each.",
      "Explain why the level of measurement matters when choosing a statistical test."
    ],
    assessment: [
      { type: "mcq", q: "The variable that the researcher manipulates as the presumed cause is the:", options: ["Dependent variable", "Independent variable", "Extraneous variable", "Demographic variable"], answer: 1, rationale: "The independent variable is the presumed cause or intervention." },
      { type: "mcq", q: "The outcome that is measured and expected to change is the:", options: ["Independent variable", "Dependent variable", "Confounder", "Constant"], answer: 1, rationale: "The dependent variable is the measured effect/outcome." },
      { type: "mcq", q: "A variable related to both the IV and the DV that distorts their relationship is a:", options: ["Demographic variable", "Confounding variable", "Constant", "Continuous variable"], answer: 1, rationale: "A confounder is associated with both IV and DV, biasing the result." },
      { type: "mcq", q: "'Anxiety is the score on the State-Trait Anxiety Inventory' is an example of a(n):", options: ["Conceptual definition", "Operational definition", "Hypothesis", "Delimitation"], answer: 1, rationale: "It specifies how the variable is measured — an operational definition." },
      { type: "mcq", q: "Blood group (A, B, AB, O) is measured at which level?", options: ["Nominal", "Ordinal", "Interval", "Ratio"], answer: 0, rationale: "Named categories with no order are nominal." },
      { type: "mcq", q: "A pain rating of mild/moderate/severe is measured at which level?", options: ["Nominal", "Ordinal", "Interval", "Ratio"], answer: 1, rationale: "Ranked categories with unequal intervals are ordinal." },
      { type: "mcq", q: "Temperature in degrees Celsius is an example of which level of measurement?", options: ["Nominal", "Ordinal", "Interval", "Ratio"], answer: 2, rationale: "Celsius has equal intervals but no true zero — interval level." },
      { type: "mcq", q: "Which variable is measured at the ratio level?", options: ["Marital status", "Cancer stage", "Body weight", "Religion"], answer: 2, rationale: "Weight has a true zero and equal intervals — ratio level." },
      { type: "mcq", q: "The lowest level of measurement is:", options: ["Ratio", "Interval", "Ordinal", "Nominal"], answer: 3, rationale: "Nominal, which only classifies into unordered categories, is the lowest level." },
      { type: "mcq", q: "The distinguishing feature of ratio-level data compared with interval data is:", options: ["Ordered categories", "Equal intervals", "A true (absolute) zero", "Named categories"], answer: 2, rationale: "Ratio data have a true zero meaning absence of the quantity." }
      , { type: "fill", q: "A definition that states exactly how a variable will be measured in a study is called an ____ definition.", accept: ["operational"], rationale: "The operational definition specifies measurement procedures." }
      , { type: "fill", q: "The mnemonic for the four levels of measurement, in ascending order, is N-O-I-R: nominal, ordinal, interval and ____.", accept: ["ratio"], rationale: "The highest level, with a true zero, is ratio." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "res-09-sampling",
    unit: "Unit 3 · Methods & Instruments",
    title: "Sampling & Sampling Techniques",
    readMinutes: 22,
    summary: "Population versus sample; the sampling frame; probability sampling (simple random, systematic, stratified, cluster); non-probability sampling (convenience, purposive, quota, snowball); sample-size considerations; and sampling error and bias.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why sample?", p: "It is rarely possible, affordable or necessary to study every member of a population. Sampling selects a subset (a sample) that represents the whole population, so that conclusions drawn from the sample can be generalised to the population. Good sampling saves time, money and effort while preserving accuracy; poor sampling introduces bias that no amount of analysis can fix." },
      { h: "Key terms", list: [
        "Population (universe) — the entire group possessing the characteristic of interest.",
        "Target population — the whole group to which the researcher wishes to generalise.",
        "Accessible population — the portion of the target population the researcher can actually reach.",
        "Sample — the subset of the population actually studied.",
        "Element / sampling unit — the single member from which data are collected.",
        "Sampling frame — the complete list of all elements from which the sample is drawn."
      ] },
      { h: "Inclusion & exclusion criteria", p: "Eligibility criteria define who may enter the study. Inclusion criteria specify the characteristics a participant MUST have (e.g. diabetic adults aged 30–60), while exclusion criteria specify characteristics that disqualify (e.g. those with cognitive impairment). Clear criteria improve homogeneity, safety and the interpretability of findings." },
      { h: "Two broad approaches", p: "Sampling methods fall into two families: probability sampling, in which every element has a known, non-zero chance of selection (random selection), and non-probability sampling, in which selection is not random and the probability of selection is unknown. Probability methods support generalisation; non-probability methods are easier but more prone to bias.", figure: {
        caption: "The two families of sampling methods and their common techniques.",
        svg: '<svg viewBox="0 0 520 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sampling methods classification"><rect x="200" y="8" width="120" height="30" rx="6" fill="#0F4C3A"/><text x="260" y="28" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Sampling</text><rect x="60" y="60" width="160" height="28" rx="6" fill="#15803D"/><text x="140" y="79" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">Probability (random)</text><rect x="300" y="60" width="170" height="28" rx="6" fill="#22C55E"/><text x="385" y="79" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Non-probability</text><rect x="35" y="110" width="90" height="60" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="130" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">Simple random</text><text x="80" y="144" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">Systematic</text><text x="80" y="158" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">Stratified · Cluster</text><rect x="330" y="110" width="110" height="60" rx="5" fill="#BBF7D0" stroke="#15803D"/><text x="385" y="128" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">Convenience</text><text x="385" y="142" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">Purposive · Quota</text><text x="385" y="156" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">Snowball</text><line x1="260" y1="38" x2="140" y2="60" stroke="#0F4C3A"/><line x1="260" y1="38" x2="385" y2="60" stroke="#0F4C3A"/></svg>'
      } },
      { h: "Simple random sampling", p: "Every element has an equal and independent chance of being chosen, using a lottery method or a table/generator of random numbers applied to a numbered sampling frame. It is the most representative probability method and the basis of statistical theory, but requires a complete list of the population, which is not always available." },
      { h: "Systematic sampling", p: "Every kth element is selected from the sampling frame after a random start. The sampling interval k = population size ÷ desired sample size. For example, to draw 100 from 1000, k = 10; pick a random start between 1 and 10 and then every 10th element. It is simpler than simple random sampling but can be biased if the list has a hidden cyclical pattern that coincides with k." },
      { h: "Stratified random sampling", p: "The population is first divided into homogeneous subgroups (strata) based on a relevant characteristic (e.g. sex, age group, ward), and random samples are drawn from each stratum. In proportionate stratified sampling the sample from each stratum matches its proportion in the population. It guarantees representation of key subgroups and increases precision, especially when strata differ." },
      { h: "Cluster (multistage) sampling", p: "The population is divided into naturally occurring groups (clusters), such as districts, villages or hospitals; whole clusters are then randomly selected, and all or a random sample of elements within chosen clusters are studied. It is economical and practical for large, geographically dispersed populations (e.g. national surveys in Bangladesh) but is less precise than simple random sampling." },
      { h: "Convenience (accidental) sampling", p: "Non-probability method that selects the most readily available participants (e.g. all patients attending a clinic on a given day). It is quick and cheap and is the most common method in nursing studies, but it is the weakest for representativeness and highly prone to selection bias." },
      { h: "Purposive (judgemental) sampling", p: "The researcher deliberately selects participants who are information-rich or best fit the study's purpose (e.g. expert nurses for a Delphi study, or women who have experienced a specific event). It is widely used in qualitative research where depth, not statistical generalisation, is the goal." },
      { h: "Quota & snowball sampling", list: [
        "Quota sampling — the non-probability analogue of stratified sampling: the researcher fills preset quotas for subgroups (e.g. 50 men and 50 women) by any convenient means, without random selection.",
        "Snowball (network / chain-referral) sampling — existing participants refer others; useful for hidden or hard-to-reach populations (e.g. injecting drug users, people with a stigmatised condition)."
      ] },
      { h: "Sample size", p: "The right sample size balances precision against cost. In quantitative studies it depends on the effect size to be detected, the desired power (commonly 80% or 0.80), the significance level (commonly α = 0.05), the expected variability (standard deviation) and the study design; larger samples give more precise, more powerful estimates. Formulae or software (e.g. G*Power) compute it. In qualitative studies, size is guided by data saturation rather than a formula." },
      { h: "Sampling error & sampling bias", list: [
        "Sampling error — the natural, random difference between a sample statistic and the true population value; it decreases as sample size increases and is quantified by the standard error.",
        "Sampling bias — a systematic error in which some members are over- or under-represented, so the sample is not representative; it does NOT decrease with larger samples and is prevented by random selection and adequate frames."
      ] },
      { h: "Key points to remember", list: [
        "Probability sampling uses random selection and supports generalisation; non-probability does not.",
        "Systematic interval k = population ÷ sample size, with a random start.",
        "Stratified samples within homogeneous subgroups; cluster samples whole groups.",
        "Convenience and purposive are non-probability; purposive is favoured in qualitative work.",
        "Larger samples reduce sampling error but NOT sampling bias."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Differentiate population, sample and sampling frame.",
      "Describe the four probability sampling techniques with an example of each.",
      "Compare convenience, purposive, quota and snowball sampling.",
      "How is the sampling interval calculated in systematic sampling? Illustrate.",
      "Distinguish sampling error from sampling bias and state how each is reduced."
    ],
    assessment: [
      { type: "mcq", q: "The complete list of all elements from which a sample is drawn is the:", options: ["Sampling frame", "Population", "Stratum", "Cluster"], answer: 0, rationale: "The sampling frame is the list of all elements in the accessible population." },
      { type: "mcq", q: "In which method does every element have a known, non-zero chance of selection?", options: ["Convenience sampling", "Probability sampling", "Quota sampling", "Snowball sampling"], answer: 1, rationale: "Probability sampling gives each element a known chance of selection." },
      { type: "mcq", q: "Selecting every kth person from a list after a random start is:", options: ["Simple random sampling", "Cluster sampling", "Systematic sampling", "Purposive sampling"], answer: 2, rationale: "Systematic sampling selects every kth element after a random start." },
      { type: "mcq", q: "To draw 50 people from a list of 500, the systematic sampling interval k is:", options: ["5", "10", "50", "100"], answer: 1, rationale: "k = 500 ÷ 50 = 10." },
      { type: "mcq", q: "Dividing the population into homogeneous subgroups and sampling randomly from each is:", options: ["Cluster sampling", "Stratified sampling", "Convenience sampling", "Snowball sampling"], answer: 1, rationale: "Stratified sampling draws random samples from each stratum." },
      { type: "mcq", q: "Randomly selecting whole villages and then studying people within them is:", options: ["Stratified sampling", "Quota sampling", "Cluster sampling", "Purposive sampling"], answer: 2, rationale: "Cluster sampling selects naturally occurring groups (clusters)." },
      { type: "mcq", q: "Choosing the most readily available patients attending a clinic is:", options: ["Convenience sampling", "Simple random sampling", "Stratified sampling", "Systematic sampling"], answer: 0, rationale: "Convenience sampling uses the most accessible participants." },
      { type: "mcq", q: "Deliberately selecting information-rich expert participants for a qualitative study is:", options: ["Convenience sampling", "Purposive sampling", "Cluster sampling", "Systematic sampling"], answer: 1, rationale: "Purposive sampling selects those best fitting the study's purpose." },
      { type: "mcq", q: "The method in which participants refer other participants, useful for hidden populations, is:", options: ["Quota sampling", "Stratified sampling", "Simple random sampling", "Snowball sampling"], answer: 3, rationale: "Snowball sampling uses referrals to reach hard-to-find groups." },
      { type: "mcq", q: "Which increases with a SMALLER sample but is NOT the same as systematic bias?", options: ["Sampling bias", "Sampling error", "Confounding", "Attrition"], answer: 1, rationale: "Sampling error is random and decreases as sample size increases; bias is systematic." }
      , { type: "fill", q: "Sampling in which every element has a known, non-zero chance of selection is called ____ sampling.", accept: ["probability", "random"], rationale: "Probability (random) sampling gives each element a known selection chance." }
      , { type: "fill", q: "A systematic error making the sample unrepresentative, not reduced by a larger sample, is sampling ____.", accept: ["bias"], rationale: "Sampling bias is systematic and is not corrected by increasing sample size." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "res-10-data-collection",
    unit: "Unit 3 · Methods & Instruments",
    title: "Data-Collection Methods & Research Instruments",
    readMinutes: 22,
    summary: "Methods of data collection (observation, interview, questionnaire, scales, biophysiological measures, records); types of tools; structured versus unstructured approaches; developing and pre-testing a tool; and the data-collection procedure.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Data and data-collection", p: "Data are the pieces of information collected during a study to answer the research question. Data collection is the systematic gathering of this information using a chosen method and instrument. The method must fit the design, the variables and their level of measurement, and must be feasible, ethical and capable of yielding valid, reliable data." },
      { h: "Method vs instrument", p: "A data-collection METHOD is the general strategy for gathering data (e.g. interviewing, observing), whereas an INSTRUMENT (tool) is the specific device used to record the data (e.g. a questionnaire, an interview schedule, an observation checklist, a rating scale). One method can use several instruments." },
      { h: "Observation", p: "Observation collects data by watching and recording behaviour, events or conditions as they occur. It may be participant (the observer takes part in the setting) or non-participant, and structured (using a checklist or category system) or unstructured (open field notes). It is valuable for behaviours people cannot report accurately (e.g. hand-hygiene compliance) but is time-consuming and open to observer bias and the Hawthorne effect (people change behaviour when watched)." },
      { h: "Interview", p: "An interview collects data through verbal questioning, face-to-face or by telephone. It allows probing, clarification and rapport, achieves high response rates, and suits people who cannot read or write — important in low-literacy settings in Bangladesh — but is time-consuming, costly and prone to interviewer bias.", list: [
        "Structured interview — fixed questions asked in a set order (like a spoken questionnaire).",
        "Semi-structured — a guide of key questions with freedom to probe.",
        "Unstructured / in-depth — open conversation used in qualitative research."
      ] },
      { h: "Questionnaire", p: "A questionnaire is a self-administered set of written questions completed by the respondent. It is economical, allows a large sample and anonymity, and removes interviewer bias, but suffers from low response rates and cannot be used by those who cannot read. Questions may be closed-ended (fixed options, easy to analyse) or open-ended (free text, richer but harder to analyse)." },
      { h: "Interview vs questionnaire", p: "Both collect self-report data via questions, but differ: the interview is read aloud and recorded by the researcher (higher response, allows probing, needs no literacy, but costly and open to interviewer bias), whereas the questionnaire is completed by the respondent (cheap, anonymous, large samples, but low response and requires literacy)." },
      { h: "Rating scales", p: "Scales quantify attributes such as attitudes, pain or quality of life along a continuum.", list: [
        "Likert scale — respondents rate agreement on an ordered set (e.g. strongly agree → strongly disagree), summed to a score.",
        "Visual analogue scale (VAS) — a 10 cm line on which the respondent marks intensity (e.g. pain).",
        "Numerical rating scale — a 0–10 scale (e.g. pain 0 = none, 10 = worst).",
        "Semantic differential — rating between two bipolar adjectives (e.g. good–bad)."
      ] },
      { h: "Biophysiological measures", p: "Biophysiological (physiological) measures collect objective physical data using instruments — for example blood pressure with a sphygmomanometer, temperature with a thermometer, blood glucose with a glucometer, weight with a scale, or laboratory assays. They are precise and objective but require calibrated, accurate equipment and trained personnel." },
      { h: "Records & documents", p: "Existing records — patient charts, registers, census data, hospital statistics and vital records — provide secondary data that are inexpensive and cover large numbers. Limitations include incompleteness, inaccuracy and the fact that they were collected for other purposes, so key variables may be missing." },
      { h: "Structured vs unstructured methods", list: [
        "Structured methods — predetermined questions/categories applied uniformly to all; yield quantitative, comparable data; used in quantitative research.",
        "Unstructured methods — flexible, open-ended, adapting to the respondent; yield rich qualitative data; used in qualitative research."
      ] },
      { h: "Developing a research tool", p: "Constructing a new instrument follows orderly steps: define the concept and its domains (from the framework and literature) → generate an item pool → arrange items and choose a response format → seek content-validity review by experts → pre-test/pilot the tool → revise → assess reliability and validity → finalise. Existing validated tools should be used where possible, with permission." },
      { h: "Pre-testing (pilot study)", p: "A pre-test administers the draft tool to a small group similar to the target sample (but not part of the final sample) to check that questions are clear, unambiguous and in logical order, to estimate completion time, to detect problems in procedures, and to obtain preliminary reliability/validity data. Problems found are corrected before the main study — a small pilot prevents large-scale failure." },
      { h: "The data-collection procedure", list: [
        "Obtain ethical approval and administrative permission.",
        "Recruit eligible participants and take informed consent.",
        "Train data collectors to apply the tool uniformly.",
        "Collect data in a standardised way, protecting privacy and confidentiality.",
        "Check completeness and accuracy of each response.",
        "Store data securely and prepare for analysis."
      ] },
      { h: "Key points to remember", list: [
        "Method = strategy (e.g. interview); instrument = device (e.g. interview schedule).",
        "Interviews need no literacy and allow probing; questionnaires are cheap and anonymous.",
        "Likert, VAS and numerical scales quantify attitudes and symptoms.",
        "Biophysiological measures are objective but need calibrated equipment.",
        "Always pre-test (pilot) the tool before the main study."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Differentiate a data-collection method from a research instrument.",
      "Compare observation, interview and questionnaire as data-collection methods.",
      "Describe the common types of rating scales used in nursing research.",
      "Outline the steps in developing a new research tool.",
      "Why is pre-testing (piloting) a tool important, and what does it check?"
    ],
    assessment: [
      { type: "mcq", q: "An interview schedule or observation checklist is best classified as a:", options: ["Research instrument", "Data-collection method", "Sampling frame", "Hypothesis"], answer: 0, rationale: "The specific device used to record data is the instrument/tool." },
      { type: "mcq", q: "The tendency of people to change behaviour because they know they are being observed is the:", options: ["Placebo effect", "Hawthorne effect", "Halo effect", "Ceiling effect"], answer: 1, rationale: "The Hawthorne effect is behaviour change due to being observed." },
      { type: "mcq", q: "Which method is BEST suited to respondents who cannot read or write?", options: ["Self-administered questionnaire", "Postal survey", "Interview", "Online form"], answer: 2, rationale: "Interviews are read aloud and need no literacy, suiting low-literacy respondents." },
      { type: "mcq", q: "A self-administered set of written questions completed by the respondent is a:", options: ["Interview schedule", "Questionnaire", "Observation checklist", "Glucometer"], answer: 1, rationale: "A questionnaire is completed by the respondent themselves." },
      { type: "mcq", q: "A scale on which respondents rate agreement from 'strongly agree' to 'strongly disagree' is a:", options: ["Visual analogue scale", "Glasgow scale", "Likert scale", "Semantic map"], answer: 2, rationale: "The Likert scale rates ordered levels of agreement." },
      { type: "mcq", q: "Measuring blood glucose with a glucometer is an example of a ____ measure.", options: ["Self-report", "Biophysiological", "Projective", "Documentary"], answer: 1, rationale: "Instrument-based physical measurement is a biophysiological measure." },
      { type: "mcq", q: "Closed-ended questions are preferred when the researcher wants data that are:", options: ["Rich and narrative", "Impossible to code", "Purely qualitative", "Easy to quantify and analyse"], answer: 3, rationale: "Closed-ended items give fixed, easily quantified responses." },
      { type: "mcq", q: "Administering a draft tool to a small similar group before the main study is called:", options: ["Randomisation", "Pre-testing / piloting", "Stratification", "Triangulation"], answer: 1, rationale: "Pre-testing (piloting) checks the tool before the full study." },
      { type: "mcq", q: "Unstructured, open-ended data-collection methods are typically used in:", options: ["Quantitative research", "Qualitative research", "Meta-analysis", "RCTs"], answer: 1, rationale: "Flexible, open-ended methods yield qualitative data." },
      { type: "mcq", q: "A limitation of using existing hospital records as a data source is that they:", options: ["Are always complete and accurate", "Require informed consent from every past patient", "May be incomplete and were collected for other purposes", "Cannot cover large numbers"], answer: 2, rationale: "Records may be incomplete/inaccurate and were gathered for other purposes." }
      , { type: "fill", q: "A short pilot administration of the tool before the main study, to check clarity and feasibility, is called ____.", accept: ["pre-testing", "pretesting", "pre-test", "piloting", "pilot study"], rationale: "Pre-testing/piloting checks the instrument before full data collection." }
      , { type: "fill", q: "A 10 cm line on which a patient marks the intensity of pain is called a ____ analogue scale.", accept: ["visual"], rationale: "The visual analogue scale (VAS) uses a marked line to rate intensity." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "res-11-psychometrics",
    unit: "Unit 3 · Methods & Instruments",
    title: "Psychometric Properties: Validity & Reliability",
    readMinutes: 20,
    summary: "Validity (content, construct, criterion — concurrent and predictive); reliability (test-retest, inter-rater, internal consistency/Cronbach's alpha); the relationship between validity and reliability; and strategies to improve both.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why psychometrics matter", p: "The quality of a study depends on the quality of its measurements. Psychometric properties — chiefly validity and reliability — tell us whether an instrument measures the right thing and does so consistently. Data from a flawed tool cannot yield trustworthy findings, so nurses must judge these properties before using or trusting a tool." },
      { h: "Validity — definition", p: "Validity is the degree to which an instrument measures what it is intended to measure. A valid tool produces accurate, meaningful, well-founded conclusions. Validity is not a fixed property of the tool alone but of the tool used with a particular group for a particular purpose; it is a matter of degree, evidenced in several forms." },
      { h: "Content validity", p: "Content validity is the extent to which the items of an instrument adequately and representatively cover the full domain of the concept being measured. It is judged by a panel of experts and is often quantified by a content validity index (CVI). Face validity — whether the tool merely 'looks' as if it measures the concept — is the weakest, most superficial form." },
      { h: "Construct validity", p: "Construct validity is the extent to which a tool truly measures the abstract theoretical construct (e.g. anxiety, resilience) it claims to. Evidence includes convergent validity (scores correlate with measures of related constructs), discriminant/divergent validity (scores do NOT correlate with unrelated constructs), known-groups technique (the tool distinguishes groups known to differ), and factor analysis (items cluster as theory predicts)." },
      { h: "Criterion-related validity", p: "Criterion validity is the extent to which scores on the instrument correlate with an external criterion (a 'gold standard' or accepted measure). It has two types by timing.", list: [
        "Concurrent validity — the tool and the criterion are measured at the SAME time (e.g. a new depression scale correlates with a diagnostic interview done today).",
        "Predictive validity — the tool predicts a FUTURE criterion (e.g. an admission aptitude test predicts later exam performance)."
      ] },
      { h: "Reliability — definition", p: "Reliability is the degree to which an instrument yields consistent, stable and reproducible results when repeated under similar conditions. A reliable tool gives the same reading on the same unchanged subject each time; it reflects freedom from random measurement error. Reliability is a prerequisite for, but does not guarantee, validity." },
      { h: "Test-retest reliability (stability)", p: "The same tool is administered to the same people on two occasions separated by a short interval, and the two sets of scores are correlated. A high correlation (commonly r ≥ 0.70–0.80) indicates good stability over time. It suits stable traits; if the interval is too long or the attribute changes, reliability appears falsely low." },
      { h: "Inter-rater (inter-observer) reliability", p: "This is the degree of agreement between two or more independent raters or observers using the same tool on the same subjects — essential for observation checklists and clinical ratings. It is quantified by percentage agreement or, better, by Cohen's kappa (κ), which corrects for chance agreement (κ > 0.60 is substantial, > 0.80 is almost perfect)." },
      { h: "Internal consistency & Cronbach's alpha", p: "Internal consistency measures how well the items of a multi-item scale correlate with one another — that is, whether they all tap the same underlying concept. It is most often estimated by Cronbach's alpha (α), which ranges from 0 to 1: values of 0.70–0.90 are generally considered acceptable to good; below 0.70 suggests the items are not measuring a single construct well, while above 0.95 may indicate redundant items. The split-half method and Kuder-Richardson (KR-20, for dichotomous items) are related approaches." },
      { h: "Relationship between validity & reliability", p: "The two are linked but distinct. A tool can be reliable (consistent) without being valid (accurate), but it cannot be valid without first being reliable. The classic analogy is a target: reliability is hitting the same spot repeatedly; validity is hitting the bull's-eye. Consistent shots off-centre are reliable but not valid.", figure: {
        caption: "Reliability vs validity: consistent hits (reliable) may still miss the true target (invalid); valid measurement is both consistent and on target.",
        svg: '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reliability versus validity target analogy"><g><circle cx="90" cy="80" r="55" fill="#DCFCE7" stroke="#15803D"/><circle cx="90" cy="80" r="34" fill="none" stroke="#15803D"/><circle cx="90" cy="80" r="14" fill="none" stroke="#15803D"/><circle cx="120" cy="55" r="4" fill="#0F4C3A"/><circle cx="126" cy="60" r="4" fill="#0F4C3A"/><circle cx="122" cy="66" r="4" fill="#0F4C3A"/><text x="90" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Reliable, not valid</text></g><g><circle cx="250" cy="80" r="55" fill="#DCFCE7" stroke="#15803D"/><circle cx="250" cy="80" r="34" fill="none" stroke="#15803D"/><circle cx="250" cy="80" r="14" fill="none" stroke="#15803D"/><circle cx="235" cy="70" r="4" fill="#0F4C3A"/><circle cx="270" cy="95" r="4" fill="#0F4C3A"/><circle cx="255" cy="105" r="4" fill="#0F4C3A"/><text x="250" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Neither</text></g><g><circle cx="410" cy="80" r="55" fill="#DCFCE7" stroke="#15803D"/><circle cx="410" cy="80" r="34" fill="none" stroke="#15803D"/><circle cx="410" cy="80" r="14" fill="none" stroke="#15803D"/><circle cx="408" cy="78" r="4" fill="#0F4C3A"/><circle cx="414" cy="82" r="4" fill="#0F4C3A"/><circle cx="410" cy="85" r="4" fill="#0F4C3A"/><text x="410" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Reliable &amp; valid</text></g></svg>'
      } },
      { h: "Improving validity", list: [
        "Ground items in the concept, framework and literature.",
        "Use expert-panel review to ensure content coverage (content validity).",
        "Use or adapt already-validated instruments where possible.",
        "Pilot the tool and test it against criteria and known groups.",
        "Write clear, unambiguous, non-leading items."
      ] },
      { h: "Improving reliability", list: [
        "Increase the number of good items measuring the same concept.",
        "Standardise administration and scoring procedures.",
        "Train and calibrate observers/raters (raises inter-rater reliability).",
        "Remove ambiguous, poorly performing items after item analysis.",
        "Ensure adequate, comfortable conditions for respondents."
      ] },
      { h: "Trustworthiness in qualitative research", p: "In qualitative work the parallel concept is trustworthiness, judged by credibility (truth value, e.g. member checking), dependability (consistency), confirmability (neutrality) and transferability (applicability to other contexts). Triangulation — using multiple data sources, methods or investigators — strengthens trustworthiness." },
      { h: "Key points to remember", list: [
        "Validity = measures the right thing; reliability = measures consistently.",
        "Content (expert coverage), construct (measures the concept), criterion (concurrent/predictive).",
        "Test-retest = stability; inter-rater = agreement (Cohen's kappa); Cronbach's alpha = internal consistency.",
        "Acceptable Cronbach's alpha ≈ 0.70–0.90.",
        "A tool can be reliable but invalid, but not valid without being reliable."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Define validity and reliability and explain how they differ.",
      "Describe content, construct and criterion validity.",
      "Differentiate concurrent from predictive validity with examples.",
      "Explain test-retest, inter-rater and internal-consistency reliability, naming the statistic used for each.",
      "Using the target analogy, explain the relationship between validity and reliability."
    ],
    assessment: [
      { type: "mcq", q: "Validity refers to whether an instrument:", options: ["Gives consistent results", "Measures what it intends to measure", "Is quick to complete", "Is inexpensive"], answer: 1, rationale: "Validity is the degree to which a tool measures what it intends to measure." },
      { type: "mcq", q: "The extent to which items cover the full domain of a concept, judged by experts, is:", options: ["Content validity", "Predictive validity", "Test-retest reliability", "Face validity"], answer: 0, rationale: "Content validity concerns adequate coverage of the concept's domain." },
      { type: "mcq", q: "A new depression scale correlated with a same-day diagnostic interview demonstrates:", options: ["Predictive validity", "Concurrent validity", "Inter-rater reliability", "Internal consistency"], answer: 1, rationale: "Correlation with a criterion measured at the same time is concurrent validity." },
      { type: "mcq", q: "An admission test that forecasts later exam performance shows:", options: ["Concurrent validity", "Predictive validity", "Content validity", "Face validity"], answer: 1, rationale: "Predicting a future criterion is predictive validity." },
      { type: "mcq", q: "Reliability is best described as the ____ of measurement.", options: ["accuracy", "consistency", "cost", "speed"], answer: 1, rationale: "Reliability is the consistency/stability of measurement." },
      { type: "mcq", q: "Administering the same tool to the same people twice and correlating scores tests:", options: ["Inter-rater reliability", "Test-retest reliability", "Content validity", "Construct validity"], answer: 1, rationale: "Test-retest reliability assesses stability over time." },
      { type: "mcq", q: "Agreement between two independent observers using the same tool is:", options: ["Internal consistency", "Inter-rater reliability", "Predictive validity", "Face validity"], answer: 1, rationale: "Inter-rater reliability is agreement between raters, often via Cohen's kappa." },
      { type: "mcq", q: "The statistic most commonly used to estimate the internal consistency of a multi-item scale is:", options: ["Cohen's kappa", "Cronbach's alpha", "Chi-square", "Standard error"], answer: 1, rationale: "Cronbach's alpha estimates internal consistency." },
      { type: "mcq", q: "A generally acceptable value of Cronbach's alpha is approximately:", options: ["0.10", "0.30", "0.70 or above", "Below zero"], answer: 2, rationale: "Alpha of about 0.70 or higher is generally considered acceptable." },
      { type: "mcq", q: "Which statement about validity and reliability is TRUE?", options: ["A tool can be valid without being reliable", "A reliable tool is always valid", "A tool can be reliable without being valid", "Validity and reliability are the same thing"], answer: 2, rationale: "A tool may be consistent (reliable) yet measure the wrong thing (invalid)." }
      , { type: "fill", q: "The coefficient ranging from 0 to 1 used to measure internal consistency is Cronbach's ____.", accept: ["alpha"], rationale: "Cronbach's alpha quantifies internal consistency." }
      , { type: "fill", q: "The type of criterion validity in which the tool predicts a FUTURE outcome is called ____ validity.", accept: ["predictive"], rationale: "Predictive validity concerns forecasting a future criterion." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "res-12-biostat-descriptive",
    unit: "Unit 4 · Analysis & Communication",
    title: "Introduction to Biostatistics & Descriptive Statistics",
    readMinutes: 24,
    summary: "Definition and uses of statistics and biostatistics; types of data; measures of central tendency (mean, median, mode); measures of dispersion (range, variance, standard deviation); frequency distributions; graphical presentation; and the normal distribution.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is statistics / biostatistics?", p: "Statistics is the science of collecting, organising, summarising, analysing, presenting and interpreting numerical data. Biostatistics is the application of statistical methods to biological, medical, public-health and nursing data. It turns raw observations into meaningful information that supports evidence-based decisions and reveals patterns not visible in unprocessed data." },
      { h: "Descriptive vs inferential statistics", list: [
        "Descriptive statistics — organise, summarise and describe the data actually collected (e.g. averages, percentages, tables, graphs); they make no claims beyond the sample.",
        "Inferential statistics — use data from a sample to draw conclusions (inferences) about the wider population, using probability and hypothesis testing."
      ] },
      { h: "Uses of biostatistics in nursing", list: [
        "Describe the health status and characteristics of patients and communities.",
        "Compare groups and evaluate the effectiveness of interventions.",
        "Identify risk factors and relationships between variables.",
        "Support planning, resource allocation and health policy.",
        "Interpret and critically appraise published research."
      ] },
      { h: "Types of data", p: "Data mirror the levels of measurement.", list: [
        "Qualitative (categorical) — nominal (unordered categories, e.g. blood group) and ordinal (ranked, e.g. pain severity).",
        "Quantitative (numerical) — discrete (whole counts, e.g. number of admissions) and continuous (any value in a range, e.g. weight).",
        "The data type dictates the appropriate summary measure and graph."
      ] },
      { h: "Frequency distribution", p: "A frequency distribution organises raw data into a table showing each value or class interval and how often it occurs (its frequency). Relative frequency (proportion or percentage) and cumulative frequency (a running total) are often added. Grouping continuous data into class intervals makes large data sets comprehensible and is the basis of histograms and ogives." },
      { h: "Measures of central tendency", p: "These describe the typical or central value of a data set.", list: [
        "Mean (arithmetic average) — the sum of all values divided by the number of values; uses every value but is pulled toward extreme values (outliers).",
        "Median — the middle value when data are arranged in order (or the average of the two middle values); it is NOT affected by outliers and is best for skewed data.",
        "Mode — the most frequently occurring value; the only measure usable for nominal data; a set may have no mode, one mode or several."
      ] },
      { h: "Choosing the right average", p: "The mean suits symmetric, interval/ratio data with no serious outliers. When the distribution is skewed (e.g. income, hospital length of stay), the median gives a truer picture of the typical value because the mean is dragged toward the tail. The mode is used for categorical data or to report the most common category." },
      { h: "Measures of dispersion", p: "Dispersion (variability) describes how spread out the data are around the centre; two data sets can share a mean yet differ greatly in spread.", list: [
        "Range — the difference between the highest and lowest values; simple but uses only two values and is sensitive to outliers.",
        "Variance — the average of the squared deviations from the mean.",
        "Standard deviation (SD) — the square root of the variance; the most widely used measure, expressed in the same units as the data.",
        "Interquartile range (IQR) — the spread of the middle 50% (Q3 − Q1); robust to outliers and paired with the median.",
        "Coefficient of variation (CV) — SD ÷ mean × 100%; compares variability between data sets with different units."
      ] },
      { h: "Understanding the standard deviation", p: "The standard deviation summarises how far, on average, individual values lie from the mean. A small SD means values cluster tightly around the mean (homogeneous data); a large SD means they are widely scattered (heterogeneous). Because it is in the original units, the SD is easily interpreted alongside the mean and is central to the normal distribution and inferential statistics." },
      { h: "Graphical presentation of data", list: [
        "Bar diagram — compares categories using separated bars (for qualitative/discrete data).",
        "Pie chart — shows the proportion of a whole for categorical data (sectors sum to 100%).",
        "Histogram — adjacent bars for continuous data grouped into class intervals; area represents frequency.",
        "Frequency polygon — points at class midpoints joined by lines.",
        "Ogive — a cumulative frequency curve, used to read medians and percentiles.",
        "Line graph — shows trends over time; scatter plot shows the relationship between two variables."
      ] },
      { h: "The normal distribution", p: "The normal (Gaussian) distribution is a symmetric, bell-shaped curve in which the mean, median and mode coincide at the centre. Many biological variables (e.g. height, blood pressure) approximate it. Its key property is the empirical (68-95-99.7) rule: about 68% of values lie within ±1 SD of the mean, about 95% within ±2 SD (more precisely ±1.96 SD), and about 99.7% within ±3 SD. This underpins reference ranges and inferential statistics.", figure: {
        caption: "The normal curve and the empirical rule: ~68%, ~95% and ~99.7% of data fall within 1, 2 and 3 standard deviations of the mean.",
        svg: '<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal distribution empirical rule"><path d="M40 170 C 130 170, 150 40, 240 40 C 330 40, 350 170, 440 170" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><line x1="40" y1="170" x2="440" y2="170" stroke="#0F4C3A"/><line x1="240" y1="40" x2="240" y2="170" stroke="#15803D" stroke-dasharray="4 3"/><line x1="173" y1="120" x2="173" y2="170" stroke="#15803D" stroke-dasharray="3 3"/><line x1="307" y1="120" x2="307" y2="170" stroke="#15803D" stroke-dasharray="3 3"/><line x1="107" y1="162" x2="107" y2="170" stroke="#15803D" stroke-dasharray="3 3"/><line x1="373" y1="162" x2="373" y2="170" stroke="#15803D" stroke-dasharray="3 3"/><text x="240" y="188" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">mean</text><text x="173" y="188" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">-1SD</text><text x="307" y="188" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">+1SD</text><text x="107" y="188" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">-2SD</text><text x="373" y="188" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">+2SD</text><text x="240" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">68%</text><text x="240" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">95% within ±2SD</text></svg>'
      } },
      { h: "Skewness", p: "When a distribution is not symmetric it is skewed. In positive (right) skew the tail extends to the right and the mean > median > mode (e.g. income); in negative (left) skew the tail extends left and the mean < median < mode. Skew signals that the median, not the mean, is the better summary and that non-parametric tests may be needed." },
      { h: "Bangladesh/clinical relevance", p: "Nurses use descriptive statistics constantly: reporting the mean and SD of patients' blood pressure on a ward, the median length of stay, the mode of the commonest diagnosis, or presenting immunisation coverage as a bar chart. Correct summaries and graphs communicate ward and community health data clearly to the team and to policymakers." },
      { h: "Key points to remember", list: [
        "Descriptive = summarise the sample; inferential = generalise to the population.",
        "Mean uses all values but is sensitive to outliers; median is best for skewed data; mode is the only average for nominal data.",
        "SD is the most used measure of dispersion, in the same units as the data.",
        "Histogram = continuous data; bar chart/pie = categorical data.",
        "Normal curve: 68% ±1SD, 95% ±2SD, 99.7% ±3SD; in skew, mean is pulled toward the tail."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Define statistics and biostatistics and state their uses in nursing.",
      "Compare the mean, median and mode and state when each is preferred.",
      "Describe the measures of dispersion, explaining the standard deviation.",
      "Describe the graphical methods used to present categorical and continuous data.",
      "Explain the normal distribution and the empirical (68-95-99.7) rule."
    ],
    assessment: [
      { type: "mcq", q: "Biostatistics is the application of statistical methods to:", options: ["Engineering data", "Biological, medical and health data", "Financial audits only", "Weather data"], answer: 1, rationale: "Biostatistics applies statistics to biological, medical and health data." },
      { type: "mcq", q: "Statistics that summarise only the data actually collected are:", options: ["Inferential statistics", "Descriptive statistics", "Predictive statistics", "Bayesian priors"], answer: 1, rationale: "Descriptive statistics summarise the collected data without generalising." },
      { type: "mcq", q: "The measure of central tendency MOST affected by extreme outliers is the:", options: ["Median", "Mode", "Mean", "Range"], answer: 2, rationale: "The mean is pulled toward outliers because it uses every value." },
      { type: "mcq", q: "For markedly skewed data, the best measure of central tendency is the:", options: ["Mean", "Median", "Variance", "Range"], answer: 1, rationale: "The median is unaffected by skew/outliers and best represents skewed data." },
      { type: "mcq", q: "The only measure of central tendency that can be used for nominal data is the:", options: ["Mean", "Median", "Mode", "Standard deviation"], answer: 2, rationale: "Only the mode applies to unordered categorical (nominal) data." },
      { type: "mcq", q: "The square root of the variance is the:", options: ["Range", "Standard deviation", "Mean", "Mode"], answer: 1, rationale: "The standard deviation is the square root of the variance." },
      { type: "mcq", q: "Which graph is MOST appropriate for continuous data grouped into class intervals?", options: ["Pie chart", "Histogram", "Bar diagram", "Line of best fit"], answer: 1, rationale: "A histogram displays continuous data grouped into intervals." },
      { type: "mcq", q: "In a normal distribution, approximately what percentage of values lie within ±2 SD of the mean?", options: ["50%", "68%", "95%", "99.7%"], answer: 2, rationale: "About 95% of values fall within ±2 SD (empirical rule)." },
      { type: "mcq", q: "In a positively (right) skewed distribution, the order is:", options: ["Mean < median < mode", "Mean = median = mode", "Mode < median < mean", "Median < mode < mean"], answer: 2, rationale: "In right skew the mean is highest: mode < median < mean." },
      { type: "mcq", q: "A cumulative frequency curve used to read medians and percentiles is called an:", options: ["Ogive", "Histogram", "Ellipse", "Isobar"], answer: 0, rationale: "The ogive is the cumulative frequency curve." }
      , { type: "fill", q: "The most widely used measure of dispersion, expressed in the same units as the data, is the ____ deviation.", accept: ["standard"], rationale: "The standard deviation is the commonest dispersion measure." }
      , { type: "fill", q: "In a normal distribution the mean, median and ____ all coincide at the centre.", accept: ["mode"], rationale: "In a symmetric normal curve the mean, median and mode are equal." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "res-13-biostat-inferential",
    unit: "Unit 4 · Analysis & Communication",
    title: "Inferential Statistics & Data Interpretation",
    readMinutes: 24,
    summary: "Inferring from sample to population; probability and the normal curve; hypothesis testing; the p-value and level of significance; confidence intervals; common tests (t-test, chi-square, ANOVA, correlation) and when to use them; Type I and II errors; and interpreting and presenting results.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "From sample to population", p: "Inferential statistics use data from a representative sample to draw conclusions about the larger population from which it was drawn. Because a sample is only part of the population, estimates carry uncertainty; inferential methods quantify that uncertainty using probability, allowing researchers to generalise findings and test hypotheses rather than merely describe the sample." },
      { h: "Probability & the sampling distribution", p: "Probability (P) is the likelihood of an event, ranging from 0 (impossible) to 1 (certain). Repeated random samples from a population produce a distribution of sample means — the sampling distribution — which, by the central limit theorem, is approximately normal for large samples regardless of the population's shape. Its spread is the standard error (SE = SD ÷ √n), which shrinks as sample size grows, giving more precise estimates." },
      { h: "Standard error vs standard deviation", p: "The standard deviation describes the spread of individual observations, whereas the standard error describes the spread (precision) of a sample statistic such as the mean. A larger sample reduces the standard error (not the SD), which is why bigger studies give tighter, more reliable estimates of the population value." },
      { h: "Estimation & confidence intervals", p: "A point estimate is a single best guess of a population parameter (e.g. the sample mean). A confidence interval (CI) is a range around it that is likely to contain the true population value. A 95% CI means that if the study were repeated many times, about 95% of such intervals would contain the true parameter. A narrow CI indicates a precise estimate; a CI for a difference that includes zero (or a risk ratio that includes 1) indicates a non-significant result." },
      { h: "Hypothesis testing — the logic", p: "Hypothesis testing decides between the null hypothesis (H0: no difference/relationship) and the alternative (H1: a difference exists). The steps are: state H0 and H1; choose a significance level (α); select the appropriate test; compute the test statistic and its p-value; and decide — reject H0 if p < α, otherwise fail to reject it. We never 'prove' H1; we only find the data (in)compatible with H0." },
      { h: "Level of significance (α)", p: "The significance level α is the probability threshold, set before analysis, for rejecting a true null hypothesis — conventionally 0.05 (5%). It represents the acceptable risk of a Type I (false-positive) error. A stricter α (e.g. 0.01) reduces false positives but increases the chance of missing a real effect." },
      { h: "The p-value", p: "The p-value is the probability of obtaining results at least as extreme as those observed, assuming the null hypothesis is true. A small p-value (p < 0.05) means the data are unlikely under H0, so H0 is rejected (result 'statistically significant'). Note: the p-value is NOT the probability that H0 is true, and statistical significance is not the same as clinical importance — a tiny, unimportant difference can be significant with a very large sample." },
      { h: "Type I and Type II errors", p: "Because decisions are made under uncertainty, two errors are possible.", list: [
        "Type I error (α) — rejecting a TRUE null hypothesis; a false positive (concluding an effect exists when it does not).",
        "Type II error (β) — failing to reject a FALSE null hypothesis; a false negative (missing a real effect).",
        "Power (1 − β) — the probability of correctly detecting a true effect; increased by a larger sample, larger effect size and lower variability."
      ], figure: {
        caption: "The four outcomes of a statistical test: correct decisions on the diagonal, Type I and Type II errors off it.",
        svg: '<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Type I and Type II error table"><rect x="120" y="30" width="150" height="30" fill="#0F4C3A"/><text x="195" y="50" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">H0 is TRUE</text><rect x="270" y="30" width="150" height="30" fill="#15803D"/><text x="345" y="50" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">H0 is FALSE</text><rect x="10" y="60" width="110" height="60" fill="#15803D"/><text x="65" y="95" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">Reject H0</text><rect x="10" y="120" width="110" height="60" fill="#0F4C3A"/><text x="65" y="155" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">Fail to reject</text><rect x="120" y="60" width="150" height="60" fill="#FECACA" stroke="#0F4C3A"/><text x="195" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7F1D1D">Type I error (α)</text><text x="195" y="106" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#7F1D1D">false positive</text><rect x="270" y="60" width="150" height="60" fill="#DCFCE7" stroke="#15803D"/><text x="345" y="94" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Correct (power)</text><rect x="120" y="120" width="150" height="60" fill="#DCFCE7" stroke="#15803D"/><text x="195" y="154" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Correct</text><rect x="270" y="120" width="150" height="60" fill="#FECACA" stroke="#0F4C3A"/><text x="345" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7F1D1D">Type II error (β)</text><text x="345" y="166" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#7F1D1D">false negative</text></svg>'
      } },
      { h: "Parametric vs non-parametric tests", list: [
        "Parametric tests — assume normally distributed, interval/ratio data with roughly equal variances (e.g. t-test, ANOVA, Pearson's r); more powerful when assumptions hold.",
        "Non-parametric tests — make fewer assumptions and suit ordinal data or non-normal distributions (e.g. Mann-Whitney U, Wilcoxon, Kruskal-Wallis, chi-square, Spearman's rho)."
      ] },
      { h: "The t-test", p: "The t-test compares the MEANS of one or two groups on a continuous, normally distributed variable. The one-sample t-test compares a sample mean with a known value; the independent (unpaired) t-test compares the means of two separate groups (e.g. treatment vs control); the paired t-test compares two related measurements (e.g. before vs after in the same patients)." },
      { h: "Analysis of variance (ANOVA)", p: "ANOVA compares the means of THREE OR MORE groups simultaneously on a continuous outcome, avoiding the inflated Type I error of many separate t-tests. A significant F-ratio shows that at least one group mean differs; post-hoc tests (e.g. Tukey) then identify which groups differ. Two-way ANOVA examines two independent variables at once." },
      { h: "Chi-square test", p: "The chi-square (χ²) test examines the ASSOCIATION between two CATEGORICAL (nominal/ordinal) variables by comparing observed frequencies with those expected under independence, using a contingency table (e.g. is smoking status associated with disease?). It requires adequate expected cell counts; Fisher's exact test is used when counts are small." },
      { h: "Correlation & regression", p: "Correlation measures the strength and direction of the linear relationship between two continuous variables. Pearson's correlation coefficient (r) ranges from −1 (perfect negative) through 0 (none) to +1 (perfect positive); Spearman's rho is its non-parametric equivalent for ordinal or non-normal data. Regression goes further, producing an equation to predict one variable from another. Crucially, correlation does NOT prove causation." },
      { h: "Choosing the right test", p: "Test selection depends on the research question, the number of groups, whether groups are related or independent, and the data's level of measurement and distribution. Compare two means → t-test; three or more means → ANOVA; association between two categories → chi-square; relationship between two continuous variables → correlation/regression; ordinal or non-normal data → the matching non-parametric test." },
      { h: "Interpreting & presenting results", list: [
        "Report the test used, the test statistic, degrees of freedom, the exact p-value and a confidence interval or effect size.",
        "Distinguish statistical significance (p < 0.05) from clinical significance (does it matter to patients?).",
        "Present results clearly in tables and figures, with descriptive statistics alongside test results.",
        "State findings objectively, acknowledge limitations, and avoid overstating causation from correlational data.",
        "Relate findings back to the research questions, hypotheses and existing literature."
      ] },
      { h: "Key points to remember", list: [
        "Inferential statistics generalise from sample to population using probability.",
        "p < 0.05 usually means 'reject H0' (statistically significant); p is NOT the probability H0 is true.",
        "Type I = false positive (α); Type II = false negative (β); power = 1 − β.",
        "t-test (2 means), ANOVA (≥3 means), chi-square (categorical association), correlation (2 continuous variables).",
        "Statistical significance ≠ clinical significance; correlation ≠ causation."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "Differentiate descriptive from inferential statistics and explain the standard error.",
      "Explain the steps of hypothesis testing, the level of significance and the p-value.",
      "Define and distinguish Type I and Type II errors and statistical power.",
      "State which statistical test you would use to compare two means, three means, and an association between two categorical variables, giving reasons.",
      "Explain the difference between statistical and clinical significance, and why correlation does not prove causation."
    ],
    assessment: [
      { type: "mcq", q: "Inferential statistics are used to:", options: ["Summarise only the sample", "Draw conclusions about a population from a sample", "Draw graphs", "Clean the data"], answer: 1, rationale: "Inferential statistics generalise from a sample to the population." },
      { type: "mcq", q: "The conventional level of significance (α) used in most nursing studies is:", options: ["0.5", "0.05", "0.5%", "5"], answer: 1, rationale: "α is conventionally set at 0.05 (5%)." },
      { type: "mcq", q: "A p-value less than 0.05 usually leads the researcher to:", options: ["Accept the null hypothesis", "Reject the null hypothesis", "Ignore the result", "Increase α"], answer: 1, rationale: "p < α (0.05) leads to rejecting the null hypothesis." },
      { type: "mcq", q: "Rejecting a true null hypothesis (a false positive) is a:", options: ["Type I error", "Type II error", "Sampling error", "Measurement error"], answer: 0, rationale: "A Type I (α) error rejects a true null — a false positive." },
      { type: "mcq", q: "The probability of correctly detecting a true effect is the study's:", options: ["Significance", "Power", "Bias", "Variance"], answer: 1, rationale: "Power (1 − β) is the probability of detecting a real effect." },
      { type: "mcq", q: "To compare the mean blood pressure of two independent groups, the appropriate test is the:", options: ["Chi-square test", "Pearson correlation", "Independent t-test", "ANOVA"], answer: 2, rationale: "The independent t-test compares the means of two separate groups." },
      { type: "mcq", q: "To compare the mean scores of FOUR groups at once, the correct test is:", options: ["t-test", "Chi-square", "Correlation", "ANOVA"], answer: 3, rationale: "ANOVA compares means across three or more groups." },
      { type: "mcq", q: "To test the association between two categorical variables, use the:", options: ["Paired t-test", "Chi-square test", "Pearson's r", "ANOVA"], answer: 1, rationale: "The chi-square test examines association between categorical variables." },
      { type: "mcq", q: "A correlation coefficient (r) of −1 indicates:", options: ["No relationship", "A perfect positive relationship", "A perfect negative relationship", "A causal relationship"], answer: 2, rationale: "r = −1 is a perfect negative linear relationship (correlation is not causation)." },
      { type: "mcq", q: "A 95% confidence interval for a difference in means that INCLUDES zero indicates the result is:", options: ["Statistically significant", "Not statistically significant", "Definitely clinically important", "A Type I error"], answer: 1, rationale: "If the 95% CI for a difference contains zero, the result is not significant at 0.05." }
      , { type: "fill", q: "Failing to reject a false null hypothesis (a false negative) is a Type ____ error.", accept: ["II", "2", "two"], rationale: "A Type II (β) error is a false negative." }
      , { type: "fill", q: "The test used to compare the means of three or more groups simultaneously is ____.", accept: ["ANOVA", "analysis of variance"], rationale: "ANOVA compares three or more group means." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "res-14-referencing-proposal",
    unit: "Unit 4 · Analysis & Communication",
    title: "Referencing (Vancouver/Harvard) & Writing the Research Proposal",
    readMinutes: 22,
    summary: "Principles of research utilization; referencing styles (Vancouver vs Harvard) and citation; avoiding plagiarism; the components of a research proposal; writing and critiquing a proposal; the annotated bibliography; and report writing (IMRAD).",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Research utilization & dissemination", p: "Research is worthwhile only if its findings reach and change practice. Research utilization is the process of translating study findings into practice, while dissemination communicates findings through reports, journal articles, conference presentations and clinical guidelines. Clear writing and correct referencing are essential to both — they let others locate the evidence, judge it and build on it." },
      { h: "Why reference?", list: [
        "To give credit to the original authors and avoid plagiarism.",
        "To allow readers to trace and verify the sources.",
        "To support and strengthen the writer's arguments with evidence.",
        "To show the depth and currency of the literature reviewed.",
        "To meet academic and publishing requirements."
      ] },
      { h: "Two parts of a reference", p: "Every citation system has two linked parts: the in-text citation (a brief marker within the text at the point a source is used) and the reference list / bibliography (the full details of each source, gathered at the end). The style chosen determines the format of both parts, and the two must always correspond exactly." },
      { h: "Vancouver style (numeric)", p: "The Vancouver style, common in medicine and nursing, numbers references in the ORDER they first appear in the text. The in-text citation is a number in brackets or superscript, e.g. 'Hand hygiene reduces infection (1).' The reference list is arranged numerically (not alphabetically). A typical journal entry: Author AA, Author BB. Title of article. Journal Name. Year;Volume(Issue):pages." },
      { h: "Harvard style (author-date)", p: "The Harvard style cites the author's surname and year of publication in the text, e.g. '(Polit & Beck, 2021).' The reference list is arranged ALPHABETICALLY by author surname. A typical entry: Polit, D.F. and Beck, C.T. (2021) Essentials of Nursing Research. Philadelphia: Wolters Kluwer. Other author-date systems include APA, widely used in nursing scholarship." },
      { h: "Vancouver vs Harvard at a glance", list: [
        "Ordering — Vancouver: by order of appearance (numbered); Harvard: alphabetical by author.",
        "In-text — Vancouver: a number (1); Harvard: (Author, year).",
        "Renumbering — Vancouver requires renumbering if references are added/removed; Harvard does not.",
        "Use — Vancouver dominates biomedical journals; Harvard/APA common in academic assignments and social sciences."
      ] },
      { h: "Avoiding plagiarism through citation", p: "Plagiarism — presenting others' work as one's own — is avoided by citing the source whenever ideas, data or words are used, placing verbatim text in quotation marks with a citation, paraphrasing properly (rewriting in one's own words AND citing), and keeping accurate records of sources. Reference-management software (e.g. EndNote, Zotero, Mendeley) helps store references and generate correct citations automatically." },
      { h: "The annotated bibliography", p: "An annotated bibliography is a list of citations in which each reference is followed by a brief paragraph (the annotation) that summarises the source and evaluates its relevance, quality and contribution to the topic. It is a useful step while building a literature review, forcing the writer to read critically and record why each source matters." },
      { h: "What is a research proposal?", p: "A research proposal is a written plan submitted before a study begins, describing what will be studied, why, and how. It persuades supervisors, ethics committees and funders that the problem is important, the methods are sound and the study is feasible and ethical. It is written in the future tense and becomes the blueprint for the eventual report." },
      { h: "Components of a research proposal", list: [
        "Title — concise and informative.",
        "Introduction & background — the problem, its magnitude and context.",
        "Statement of the problem and significance/justification.",
        "Objectives, research questions and/or hypotheses.",
        "Literature review and conceptual/theoretical framework.",
        "Methodology — design, setting, population and sample, sampling technique, variables, tools, data-collection and analysis plan.",
        "Ethical considerations.",
        "Work plan/timeline (e.g. Gantt chart) and budget.",
        "References and appendices (consent form, tools)."
      ], figure: {
        caption: "The logical flow of a research proposal, from problem to methods to plan.",
        svg: '<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Research proposal flow"><rect x="10" y="60" width="100" height="46" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="60" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Problem &amp;</text><text x="60" y="93" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">objectives</text><rect x="140" y="60" width="100" height="46" rx="8" fill="#BBF7D0" stroke="#15803D"/><text x="190" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Literature &amp;</text><text x="190" y="93" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">framework</text><rect x="270" y="60" width="100" height="46" rx="8" fill="#86EFAC" stroke="#15803D"/><text x="320" y="86" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Methodology</text><rect x="400" y="60" width="90" height="46" rx="8" fill="#22C55E" stroke="#0F4C3A"/><text x="445" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Ethics, plan</text><text x="445" y="93" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">&amp; budget</text><line x1="110" y1="83" x2="140" y2="83" stroke="#0F4C3A" stroke-width="2"/><polygon points="140,83 130,78 130,88" fill="#0F4C3A"/><line x1="240" y1="83" x2="270" y2="83" stroke="#0F4C3A" stroke-width="2"/><polygon points="270,83 260,78 260,88" fill="#0F4C3A"/><line x1="370" y1="83" x2="400" y2="83" stroke="#0F4C3A" stroke-width="2"/><polygon points="400,83 390,78 390,88" fill="#0F4C3A"/></svg>'
      } },
      { h: "Critiquing a proposal or study", p: "A critique is a balanced, objective appraisal of a proposal or completed study, noting strengths as well as weaknesses. The reviewer asks: is the problem significant and clearly stated? Are the objectives and hypotheses appropriate? Is the literature review adequate and current? Is the design suitable and the sample adequate? Are the tools valid and reliable, the analysis correct, the ethics sound, and the conclusions justified? Structured guides (e.g. Polit & Beck's critique guidelines) help." },
      { h: "Report writing — the IMRAD structure", p: "Research reports and journal articles follow the IMRAD format:", list: [
        "Introduction — the problem, background, purpose and research questions ('Why was it done?').",
        "Methods — design, sample, tools and procedures ('How was it done?').",
        "Results — the findings presented objectively in text, tables and figures ('What was found?').",
        "And Discussion — interpretation, comparison with literature, implications, limitations and conclusions ('What does it mean?').",
        "Framed by a title, abstract, references and appendices."
      ] },
      { h: "The abstract", p: "The abstract is a brief (usually 150–300 word) structured summary placed at the start of a report or article, covering the background, objective, methods, key results and conclusion. Though written last, it is read first and often alone, so it must accurately and concisely represent the whole study." },
      { h: "Bangladesh/academic relevance", p: "B.Sc. nursing students in Bangladesh must submit a research proposal for ethical clearance and, on completion, a dissertation in IMRAD format with correct references (often Vancouver or APA). Mastering citation and proposal writing is therefore both an academic requirement and a professional skill for contributing evidence to the country's health system." },
      { h: "Key points to remember", list: [
        "Vancouver = numbered by order of appearance; Harvard = author-date, alphabetical list.",
        "Cite every borrowed idea, quote or datum to avoid plagiarism.",
        "An annotated bibliography summarises AND evaluates each source.",
        "A proposal (future tense) is the blueprint: problem → literature → methods → ethics/plan.",
        "Reports follow IMRAD: Introduction, Methods, Results, and Discussion."
      ] }
    ],
    references: REF_RESN,
    examQuestions: [
      "State the purposes of referencing and compare the Vancouver and Harvard styles.",
      "How can a writer avoid plagiarism when using sources?",
      "List and briefly describe the components of a research proposal.",
      "What is an annotated bibliography, and how does it help in a literature review?",
      "Explain the IMRAD structure of a research report and the role of the abstract."
    ],
    assessment: [
      { type: "mcq", q: "In the Vancouver referencing style, references in the list are arranged:", options: ["Alphabetically by author", "In the order they first appear in the text", "By year of publication", "By journal name"], answer: 1, rationale: "Vancouver numbers references in order of first appearance in the text." },
      { type: "mcq", q: "The Harvard style uses which form of in-text citation?", options: ["Author surname and year", "A superscript number", "Journal abbreviation", "A footnote symbol"], answer: 0, rationale: "Harvard is an author-date system: (Author, year)." },
      { type: "mcq", q: "The main purpose of referencing is to:", options: ["Increase the word count", "Credit sources and allow verification, avoiding plagiarism", "Impress the examiner with length", "Hide the sources used"], answer: 1, rationale: "Referencing credits authors, enables verification and prevents plagiarism." },
      { type: "mcq", q: "Presenting another person's ideas or words as one's own is:", options: ["Paraphrasing", "Plagiarism", "Citation", "Synthesis"], answer: 1, rationale: "Plagiarism is using others' work without acknowledgement." },
      { type: "mcq", q: "A list of citations each followed by a short summary and evaluation is a(n):", options: ["Index", "Abstract", "Annotated bibliography", "Glossary"], answer: 2, rationale: "An annotated bibliography summarises and evaluates each source." },
      { type: "mcq", q: "A research proposal is best described as a:", options: ["Final report of results", "Written plan submitted before a study begins", "List of references", "Set of raw data"], answer: 1, rationale: "A proposal is the plan written before the study is carried out." },
      { type: "mcq", q: "Which is NOT usually a component of a research proposal?", options: ["Objectives", "Methodology", "The study's final results", "Ethical considerations"], answer: 2, rationale: "Final results belong in the report, not the proposal (written beforehand)." },
      { type: "mcq", q: "In the IMRAD structure, the section that interprets findings and compares them with the literature is the:", options: ["Introduction", "Methods", "Results", "Discussion"], answer: 3, rationale: "The Discussion interprets results and relates them to prior work." },
      { type: "mcq", q: "The 'M' in IMRAD stands for:", options: ["Meaning", "Methods", "Materials list", "Measurement"], answer: 1, rationale: "IMRAD = Introduction, Methods, Results, and Discussion." },
      { type: "mcq", q: "The brief structured summary placed at the start of a report, though written last, is the:", options: ["Appendix", "Reference list", "Abstract", "Preface"], answer: 2, rationale: "The abstract is a concise summary at the start of the report." }
      , { type: "fill", q: "The referencing style that numbers sources in order of appearance and is common in medical journals is the ____ style.", accept: ["Vancouver"], rationale: "Vancouver is the numeric style used widely in biomedicine." }
      , { type: "fill", q: "Research reports commonly follow the ____ structure: Introduction, Methods, Results and Discussion.", accept: ["IMRAD"], rationale: "IMRAD is the standard structure of a research report." }
    ]
  }
];
