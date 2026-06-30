/* ============================================================
   Diploma in Nursing · D335 Research Methodology
   — 12 topics. Aligned to the BNMC 2018 syllabus (foundations
   of nursing research, research process, designs & sampling,
   data collection, analysis, ethics and report writing).
   Grounded in standard texts:
     • Polit DF, Beck CT. Nursing Research: Generating and
       Assessing Evidence for Nursing Practice. Wolters Kluwer.
     • Kothari CR. Research Methodology: Methods and Techniques.
       New Age International.
     • Burns N, Grove SK. Understanding Nursing Research:
       Building an Evidence-Based Practice. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_RES = [
  "Polit DF, Beck CT. Nursing Research: Generating and Assessing Evidence for Nursing Practice. Wolters Kluwer/Lippincott.",
  "Kothari CR. Research Methodology: Methods and Techniques. New Age International.",
  "Burns N, Grove SK. Understanding Nursing Research: Building an Evidence-Based Practice. Elsevier."
];

window.Academic.topics["diploma-nursing/research-methodology"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "res-01-intro",
    unit: "Unit 1 · Foundations of Research",
    title: "Introduction to Research & Nursing Research",
    readMinutes: 16,
    summary: "Meaning, definition, purpose and characteristics of research, the concept and importance of nursing research, and the use of research in evidence-based nursing practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is research?", p: "Research is a systematic, planned and scientific way of finding answers to questions and solving problems. The word comes from 're' (again) and 'search' (to look), meaning 'to search again' or to investigate carefully. Research is not a casual look at a problem; it follows orderly steps, uses objective methods, and produces findings that others can check and repeat." },
      { h: "Definition", p: "Research is defined as a systematic inquiry that uses disciplined methods to answer questions or solve problems (Polit & Beck). Kothari describes it as a scientific and systematic search for relevant information on a specific topic. In short, research is the organised, unbiased search for new knowledge or for confirming existing knowledge." },
      { h: "What is nursing research?", p: "Nursing research is systematic inquiry designed to develop trustworthy knowledge about issues of importance to nurses — including nursing practice, education, administration and the nursing profession. Its ultimate goal is to provide evidence that improves the care given to patients, families and communities." },
      { h: "Purposes / aims of research", list: [
        "To discover new facts and add to the body of knowledge.",
        "To describe a situation, group or phenomenon accurately.",
        "To explain why something happens (identify causes and relationships).",
        "To predict and, where possible, to control or change outcomes.",
        "To solve practical problems and improve practice.",
        "To test theories and verify existing knowledge."
      ] },
      { h: "Characteristics of good research", list: [
        "Systematic — follows orderly, logical steps.",
        "Objective — free from the researcher's personal bias.",
        "Empirical — based on evidence gathered through observation or experience.",
        "Controlled — extraneous factors are kept in check.",
        "Valid and reliable — measures what it intends to, and gives consistent results.",
        "Replicable / verifiable — others can repeat it and check the findings.",
        "Logical — reasoning moves clearly from data to conclusion."
      ] },
      { h: "Importance of research in nursing", list: [
        "Builds a scientific knowledge base unique to nursing.",
        "Provides evidence for safe, effective and high-quality care.",
        "Improves patient outcomes and patient safety.",
        "Guides nursing policies, standards and protocols.",
        "Promotes cost-effective and efficient use of resources.",
        "Strengthens nursing as a respected profession.",
        "Supports continuing education and professional growth."
      ] },
      { h: "Evidence-based practice (EBP)", p: "Evidence-based practice means making clinical decisions by combining the best available research evidence with the nurse's clinical expertise and the patient's values and preferences. Research is the engine that produces this evidence, so a nurse who understands research can read studies critically and apply trustworthy findings to care." },
      { h: "The nurse's role in research", list: [
        "Consumer — reads and applies research findings in practice.",
        "Participant — collects data or helps conduct studies.",
        "Producer — designs and carries out research (advanced nurses).",
        "Advocate — protects the rights of patients in studies."
      ] }
    ],
    references: REF_RES,
    examQuestions: [
      "Define research and nursing research. State four purposes of research.",
      "Explain six characteristics of good research.",
      "Discuss the importance of research in nursing.",
      "What is evidence-based practice? How does research support it?",
      "Describe the different roles a nurse can play in research."
    ],
    assessment: [
      { type: "mcq", q: "The word 'research' literally means:", options: ["To guess again", "To search again", "To copy again", "To read again"], answer: 1, rationale: "'Re' (again) + 'search' (to look) means to search again or investigate carefully." },
      { type: "mcq", q: "Research is best described as a ____ inquiry using disciplined methods.", options: ["random", "systematic", "casual", "personal"], answer: 1, rationale: "Research is a systematic inquiry that uses disciplined, scientific methods." },
      { type: "mcq", q: "The ultimate goal of nursing research is to:", options: ["Increase nurses' salaries", "Improve the care given to patients", "Replace doctors", "Reduce the number of nurses"], answer: 1, rationale: "Nursing research aims to develop knowledge that improves patient and family care." },
      { type: "mcq", q: "Which is NOT a characteristic of good research?", options: ["Objective", "Systematic", "Biased", "Replicable"], answer: 2, rationale: "Good research is objective and free from bias, not biased." },
      { type: "mcq", q: "'Empirical' means research findings are based on:", options: ["Opinion and belief", "Evidence from observation or experience", "Tradition", "Authority alone"], answer: 1, rationale: "Empirical knowledge comes from observed or experienced evidence." },
      { type: "mcq", q: "Evidence-based practice combines best research evidence, clinical expertise and:", options: ["Hospital profit", "Patient values and preferences", "Government orders", "Random choice"], answer: 1, rationale: "EBP integrates research evidence, clinical expertise and patient values/preferences." },
      { type: "mcq", q: "A nurse who reads and applies research findings in practice acts as a research:", options: ["Producer", "Consumer", "Sponsor", "Editor"], answer: 1, rationale: "A consumer of research reads and applies findings to care." },
      { type: "mcq", q: "The ability of others to repeat a study and check its findings is called:", options: ["Replicability", "Secrecy", "Subjectivity", "Speed"], answer: 0, rationale: "Replicability/verifiability lets others repeat and confirm the study." },
      { type: "mcq", q: "Which purpose of research involves stating accurately what a phenomenon is like?", options: ["Description", "Control", "Funding", "Publication"], answer: 0, rationale: "Description aims to portray a situation, group or phenomenon accurately." },
      { type: "mcq", q: "Keeping extraneous factors in check during a study reflects which characteristic?", options: ["Controlled", "Random", "Emotional", "Optional"], answer: 0, rationale: "Control means managing extraneous variables that could affect results." }
      , { type: "fill", q: "Making clinical decisions using the best research evidence, clinical expertise and patient values is called ____ practice.", accept: ["evidence-based", "evidence based", "EBP"], rationale: "This defines evidence-based practice (EBP)." }
      , { type: "fill", q: "Research that is based on evidence gathered through observation or experience is said to be ____.", accept: ["empirical"], rationale: "Empirical research relies on observed/experienced evidence." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "res-02-types-process",
    unit: "Unit 1 · Foundations of Research",
    title: "Types of Research & the Research Process",
    readMinutes: 17,
    summary: "Classification of research — quantitative versus qualitative, basic versus applied, and other types — together with the orderly steps of the research process.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why classify research?", p: "Research can be grouped in several ways depending on the kind of question, the type of data and the purpose of the study. Knowing the types helps a nurse choose the right approach and understand published studies." },
      { h: "Quantitative vs qualitative research", list: [
        "Quantitative research — collects numerical data and uses statistics; it measures variables, tests hypotheses and looks for cause-and-effect or relationships. It is objective and deductive (for example, measuring whether a new dressing reduces wound infection rates).",
        "Qualitative research — collects words, descriptions and meanings rather than numbers; it explores experiences, feelings and the meaning people give to events. It is subjective and inductive (for example, exploring how mothers feel after caesarean section)."
      ] },
      { h: "Basic vs applied research", list: [
        "Basic (pure / fundamental) research — seeks knowledge for its own sake to build or test theory, without an immediate practical use (for example, studying how the body responds to stress).",
        "Applied research — seeks to solve an existing practical problem and is used directly in practice (for example, testing the best position to reduce bedsores)."
      ] },
      { h: "Other ways of classifying research", list: [
        "Descriptive research — describes characteristics as they are, without manipulation.",
        "Experimental research — manipulates a variable and tests its effect.",
        "Exploratory research — investigates a little-known problem to gain insight.",
        "Historical research — studies past events from records and documents.",
        "Correlational research — examines relationships between variables.",
        "Action research — solves a problem in a specific setting through cycles of action and reflection."
      ] },
      { h: "The research process", p: "The research process is the orderly series of steps a researcher follows from start to finish. Although texts differ slightly in numbering, the logical flow is the same.", figure: {
        caption: "The main steps of the research process flow from identifying the problem to communicating the findings.",
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Steps of the research process from problem to report."><defs><marker id="resArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="170" y="10" width="220" height="34" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="280" y="32" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">1. Identify research problem</text><rect x="170" y="56" width="220" height="34" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="280" y="78" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">2. Review literature</text><rect x="170" y="102" width="220" height="34" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="280" y="124" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">3. Objectives &amp; hypothesis</text><rect x="170" y="148" width="220" height="34" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="280" y="170" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">4. Design &amp; sampling</text><rect x="170" y="194" width="220" height="34" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="280" y="216" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">5. Collect &amp; analyse data</text><rect x="170" y="240" width="220" height="34" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="262" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">6. Report &amp; communicate</text><line x1="280" y1="44" x2="280" y2="54" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr1)"/><line x1="280" y1="90" x2="280" y2="100" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr1)"/><line x1="280" y1="136" x2="280" y2="146" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr1)"/><line x1="280" y1="182" x2="280" y2="192" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr1)"/><line x1="280" y1="228" x2="280" y2="238" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr1)"/></svg>'
      } },
      { h: "Steps of the research process", list: [
        "Identify and define the research problem.",
        "Review the related literature.",
        "Formulate objectives, research questions and hypothesis.",
        "Define variables and concepts (and frame the conceptual framework).",
        "Select the research design and methodology.",
        "Identify the population and select the sample.",
        "Develop tools and collect data.",
        "Process and analyse the data.",
        "Interpret results and draw conclusions.",
        "Write the report and communicate the findings."
      ] },
      { h: "Phases of the research process", p: "The steps are often grouped into four phases: the conceptual phase (problem, literature, framework), the design and planning phase (design, sample, tools), the empirical phase (data collection and analysis), and the dissemination phase (writing and sharing the report). This grouping helps the researcher plan time and resources." },
      { h: "Mixed-methods research", p: "When a study combines both quantitative and qualitative approaches in the same project — for example, measuring pain scores AND interviewing patients about their pain experience — it is called mixed-methods research. It gives a fuller picture than either approach alone." }
    ],
    references: REF_RES,
    examQuestions: [
      "Differentiate between quantitative and qualitative research with examples.",
      "Distinguish between basic and applied research.",
      "List and briefly explain the steps of the research process.",
      "Describe the four phases of the research process.",
      "What is mixed-methods research? Give one example."
    ],
    assessment: [
      { type: "mcq", q: "Research that collects numerical data and uses statistics is:", options: ["Qualitative", "Quantitative", "Historical", "Action"], answer: 1, rationale: "Quantitative research deals with numbers, measurement and statistics." },
      { type: "mcq", q: "Exploring how mothers feel after caesarean section is an example of ____ research.", options: ["Quantitative", "Experimental", "Qualitative", "Correlational"], answer: 2, rationale: "Studying feelings, meanings and experiences in words is qualitative." },
      { type: "mcq", q: "Research done to build or test theory without an immediate practical use is:", options: ["Applied research", "Basic research", "Action research", "Survey research"], answer: 1, rationale: "Basic (pure) research seeks knowledge for its own sake to develop theory." },
      { type: "mcq", q: "Testing the best position to reduce bedsores is an example of:", options: ["Basic research", "Historical research", "Applied research", "Pure research"], answer: 2, rationale: "Applied research solves a practical problem and is used directly in practice." },
      { type: "mcq", q: "The FIRST step of the research process is to:", options: ["Collect data", "Write the report", "Identify the research problem", "Analyse data"], answer: 2, rationale: "Everything begins with identifying and defining the research problem." },
      { type: "mcq", q: "Which step comes immediately after identifying the problem?", options: ["Data analysis", "Review of literature", "Report writing", "Sampling"], answer: 1, rationale: "After the problem is set, the related literature is reviewed." },
      { type: "mcq", q: "Data collection and analysis belong to which phase of the research process?", options: ["Conceptual phase", "Empirical phase", "Dissemination phase", "Planning phase"], answer: 1, rationale: "The empirical phase covers data collection and analysis." },
      { type: "mcq", q: "A study that combines both quantitative and qualitative approaches is called:", options: ["Pure research", "Mixed-methods research", "Historical research", "Pilot research"], answer: 1, rationale: "Mixed-methods research uses both numerical and qualitative data." },
      { type: "mcq", q: "Quantitative research generally uses which type of reasoning?", options: ["Inductive", "Deductive", "Random", "Emotional"], answer: 1, rationale: "Quantitative research tests hypotheses using deductive reasoning." },
      { type: "mcq", q: "Research that studies past events from records and documents is:", options: ["Experimental", "Historical", "Quasi-experimental", "Survey"], answer: 1, rationale: "Historical research examines past events using existing records and documents." }
      , { type: "fill", q: "Research that seeks to solve an existing practical problem is called ____ research.", accept: ["applied"], rationale: "Applied research addresses real, practical problems." }
      , { type: "fill", q: "The four phases of the research process are conceptual, design/planning, empirical and ____.", accept: ["dissemination", "dissemination phase"], rationale: "The final phase is dissemination (writing and sharing findings)." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "res-03-problem-objectives-hypothesis",
    unit: "Unit 1 · Foundations of Research",
    title: "Research Problem, Objectives & Hypothesis",
    readMinutes: 17,
    summary: "How to identify and state a research problem, write a problem statement, set objectives and research questions, and formulate and classify hypotheses.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a research problem?", p: "A research problem is a situation, gap or difficulty that a researcher wants to understand or solve through study. It is the starting point of all research. A good problem is clear, specific, important to nursing, researchable, and feasible within the available time and resources." },
      { h: "Sources of research problems", list: [
        "Clinical practice and patient-care experiences.",
        "Gaps or contradictions found in the literature.",
        "Nursing theories needing testing.",
        "Priorities set by the profession or health system.",
        "Personal interest and observation of everyday problems.",
        "Suggestions from experts, teachers and colleagues."
      ] },
      { h: "Statement of the problem", p: "The problem statement is a clear, concise written description of exactly what is being studied. It names the variables, the population and the setting, and usually explains the gap or need. A well-written statement tells the reader what the study is about in one or two sentences." },
      { h: "Criteria for a good problem (FINER)", list: [
        "Feasible — can be done with available time, money and skill.",
        "Interesting — holds the researcher's interest.",
        "Novel — adds something new or confirms uncertain knowledge.",
        "Ethical — does not harm participants.",
        "Relevant — useful to nursing, patients or science."
      ] },
      { h: "Objectives of the study", p: "Objectives are clear statements of what the study aims to achieve. The general objective states the broad aim, while specific objectives break it into measurable parts. Good objectives are often written using the SMART rule — Specific, Measurable, Achievable, Relevant and Time-bound — and usually begin with action verbs such as 'to assess', 'to determine' or 'to compare'." },
      { h: "Research questions", p: "A research question is the problem stated in question form, for example, 'Does hand-washing education reduce infection rates among student nurses?' Qualitative studies usually use broad research questions, while quantitative studies often use a hypothesis." },
      { h: "Hypothesis", p: "A hypothesis is a tentative statement or intelligent guess about the expected relationship between two or more variables, which the study then tests. It is written before data collection and must be testable. For example: 'Nurses who receive training will have higher knowledge scores than those who do not.'" },
      { h: "Types of hypothesis", list: [
        "Null hypothesis (H0) — states there is NO relationship or difference between variables; it is the statement that is statistically tested.",
        "Alternative / research hypothesis (H1) — states that a relationship or difference DOES exist.",
        "Directional hypothesis — predicts the direction of the relationship (for example, training increases scores).",
        "Non-directional hypothesis — predicts a relationship but not its direction (for example, training affects scores).",
        "Simple hypothesis — relates one independent and one dependent variable.",
        "Complex hypothesis — relates two or more independent and/or dependent variables."
      ] }
    ],
    references: REF_RES,
    examQuestions: [
      "Define a research problem and list its sources.",
      "What is a statement of the problem? State the criteria of a good problem (FINER).",
      "Differentiate between general and specific objectives. What is the SMART rule?",
      "Define a hypothesis and explain the difference between null and alternative hypotheses.",
      "Differentiate between directional and non-directional hypotheses with examples."
    ],
    assessment: [
      { type: "mcq", q: "The starting point of any research is the:", options: ["Report", "Research problem", "Conclusion", "Reference list"], answer: 1, rationale: "All research begins with identifying a research problem." },
      { type: "mcq", q: "In the FINER criteria, the 'E' stands for:", options: ["Easy", "Expensive", "Ethical", "Exact"], answer: 2, rationale: "FINER = Feasible, Interesting, Novel, Ethical, Relevant." },
      { type: "mcq", q: "A tentative, testable statement about the relationship between variables is a:", options: ["Conclusion", "Hypothesis", "Reference", "Variable"], answer: 1, rationale: "A hypothesis is a tentative, testable prediction about variables' relationship." },
      { type: "mcq", q: "The hypothesis that states there is NO relationship between variables is the:", options: ["Alternative hypothesis", "Directional hypothesis", "Null hypothesis", "Complex hypothesis"], answer: 2, rationale: "The null hypothesis (H0) states no relationship/difference and is statistically tested." },
      { type: "mcq", q: "'Training increases nurses' knowledge scores' is an example of a ____ hypothesis.", options: ["Null", "Non-directional", "Directional", "Empty"], answer: 2, rationale: "It predicts the direction (increase), so it is directional." },
      { type: "mcq", q: "The 'M' in the SMART rule for objectives stands for:", options: ["Many", "Measurable", "Modern", "Manual"], answer: 1, rationale: "SMART = Specific, Measurable, Achievable, Relevant, Time-bound." },
      { type: "mcq", q: "A hypothesis relating one independent and one dependent variable is:", options: ["Complex", "Simple", "Null", "Statistical"], answer: 1, rationale: "A simple hypothesis links a single independent and a single dependent variable." },
      { type: "mcq", q: "Which is usually used in qualitative studies rather than a hypothesis?", options: ["Null hypothesis", "Broad research question", "p-value", "Standard deviation"], answer: 1, rationale: "Qualitative studies use broad research questions rather than testable hypotheses." },
      { type: "mcq", q: "Objectives that begin with verbs like 'to assess' or 'to compare' are stated as:", options: ["Vague hopes", "Action-oriented statements", "References", "Hypotheses"], answer: 1, rationale: "Good objectives use action verbs to state measurable aims." },
      { type: "mcq", q: "Which is a source of research problems?", options: ["Clinical practice experience", "The printer brand", "Ward paint colour", "The time of day"], answer: 0, rationale: "Clinical practice and patient-care experiences are a major source of problems." }
      , { type: "fill", q: "The hypothesis of 'no difference' that is statistically tested is the ____ hypothesis.", accept: ["null", "null (H0)", "H0"], rationale: "The null hypothesis states no relationship and is the one tested." }
      , { type: "fill", q: "The broad aim of a study is the general objective, while measurable parts are the ____ objectives.", accept: ["specific"], rationale: "Specific objectives break the general aim into measurable parts." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "res-04-literature-review",
    unit: "Unit 1 · Foundations of Research",
    title: "Review of Literature",
    readMinutes: 16,
    summary: "Meaning, purposes and sources of the review of literature, the steps in conducting it, and how to organise and write a sound literature review.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is review of literature?", p: "Review of literature is the careful reading, analysis and summary of existing published and unpublished work related to the research problem. It helps the researcher learn what is already known, what is still unknown, and how others have studied the same topic." },
      { h: "Purposes of literature review", list: [
        "Shows what is already known and identifies gaps in knowledge.",
        "Helps refine and narrow the research problem.",
        "Avoids unnecessary duplication of work already done.",
        "Suggests suitable designs, methods and tools.",
        "Provides a theoretical and conceptual basis for the study.",
        "Helps interpret and compare the study's findings later.",
        "Builds the researcher's expertise on the topic."
      ] },
      { h: "Sources of literature", list: [
        "Primary sources — original reports written by the researchers who did the study (research articles, theses). These are the most valuable.",
        "Secondary sources — descriptions or summaries of others' work (textbooks, review articles).",
        "Indexes, databases and search engines — for example CINAHL, MEDLINE/PubMed, Cochrane Library and Google Scholar.",
        "Journals, books, government reports, conference papers and reputable websites."
      ] },
      { h: "Primary vs secondary sources", p: "A primary source is written by the person who carried out the research and contains the original data and findings. A secondary source is written by someone else describing or interpreting that original work. Researchers should rely mainly on primary sources because secondary sources may contain the second author's errors or bias." },
      { h: "Steps in conducting a literature review", list: [
        "Identify key words and concepts from the research problem.",
        "Search relevant databases, libraries and indexes.",
        "Select studies that are relevant and reasonably recent.",
        "Read critically — note the purpose, methods, findings and limitations.",
        "Organise the material by themes or concepts.",
        "Summarise, compare and synthesise the findings.",
        "Write the review and cite all sources correctly."
      ] },
      { h: "Critical reading", p: "Reviewing literature is more than collecting articles; the researcher must read critically — judging how strong each study is, whether its methods were sound, and whether the findings can be trusted. Weak or biased studies are noted but given less weight." },
      { h: "Organising and writing the review", p: "A good literature review is organised logically — often by theme, by concept, or from general to specific — rather than listing one study after another. It flows like an argument that leads naturally to the gap the present study will fill, and ends by showing why the study is needed." },
      { h: "Plagiarism and citation", p: "All ideas and words taken from other authors must be acknowledged by proper citation and referencing; presenting another person's work as one's own is plagiarism, which is a serious academic and ethical offence. Paraphrasing in one's own words and citing the source is the correct practice." }
    ],
    references: REF_RES,
    examQuestions: [
      "Define review of literature and state its purposes.",
      "Differentiate between primary and secondary sources with examples.",
      "List the steps in conducting a literature review.",
      "Why should a researcher read literature critically?",
      "What is plagiarism? How can a researcher avoid it?"
    ],
    assessment: [
      { type: "mcq", q: "Review of literature mainly helps the researcher to:", options: ["Avoid reading", "Know what is already known and find gaps", "Increase the cost of study", "Skip the methodology"], answer: 1, rationale: "It reveals existing knowledge and identifies gaps to be filled." },
      { type: "mcq", q: "An original research article written by the investigators who did the study is a:", options: ["Secondary source", "Primary source", "Tertiary source", "Review source"], answer: 1, rationale: "Primary sources are original reports by the researchers themselves." },
      { type: "mcq", q: "A textbook that summarises others' research is an example of a:", options: ["Primary source", "Secondary source", "Raw data", "Hypothesis"], answer: 1, rationale: "Secondary sources describe or summarise others' original work." },
      { type: "mcq", q: "Which is a database used to search nursing literature?", options: ["CINAHL", "ECG", "APGAR", "BMI"], answer: 0, rationale: "CINAHL is a major nursing and allied-health literature database." },
      { type: "mcq", q: "Presenting another person's work or words as one's own is called:", options: ["Citation", "Paraphrasing", "Plagiarism", "Referencing"], answer: 2, rationale: "Plagiarism is using another's work without acknowledgement." },
      { type: "mcq", q: "Researchers should rely MAINLY on which type of source?", options: ["Secondary sources", "Primary sources", "Newspaper gossip", "Advertisements"], answer: 1, rationale: "Primary sources give original data and avoid second-hand errors." },
      { type: "mcq", q: "Which is NOT a purpose of the literature review?", options: ["Refining the problem", "Avoiding duplication", "Suggesting methods", "Guaranteeing positive results"], answer: 3, rationale: "A review cannot guarantee results; it informs and guides the study." },
      { type: "mcq", q: "Organising a literature review by themes rather than one study after another makes it more:", options: ["Confusing", "Logical and readable", "Expensive", "Secret"], answer: 1, rationale: "Thematic organisation makes the review flow logically." },
      { type: "mcq", q: "The first step in conducting a literature review is to:", options: ["Write the report", "Identify key words and concepts", "Collect data", "Draw conclusions"], answer: 1, rationale: "Identifying key words/concepts guides the search." },
      { type: "mcq", q: "Reading literature critically means:", options: ["Believing every study fully", "Judging how sound and trustworthy each study is", "Ignoring methods", "Counting pages"], answer: 1, rationale: "Critical reading evaluates the quality and trustworthiness of each study." }
      , { type: "fill", q: "Original reports written by the researchers who conducted the study are called ____ sources.", accept: ["primary"], rationale: "Primary sources contain the original data and findings." }
      , { type: "fill", q: "Using another author's work without acknowledgement is known as ____.", accept: ["plagiarism"], rationale: "Plagiarism is presenting others' work as one's own." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "res-05-variables",
    unit: "Unit 1 · Foundations of Research",
    title: "Variables, Concepts & Operational Definitions",
    readMinutes: 16,
    summary: "Meaning and types of variables, the difference between concepts and variables, conceptual versus operational definitions, and the conceptual framework.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a variable?", p: "A variable is any characteristic, quality or attribute that can take on different values or vary from person to person, object to object, or time to time — for example age, weight, blood pressure, anxiety level or knowledge score. The word 'variable' comes from 'vary', meaning to change." },
      { h: "Independent and dependent variables", list: [
        "Independent variable (IV) — the cause, the input, or the treatment that the researcher manipulates or studies; it is presumed to influence another variable (for example, a teaching programme).",
        "Dependent variable (DV) — the effect, the outcome, or the result that is measured; it depends on or responds to the independent variable (for example, the knowledge score after teaching)."
      ] },
      { h: "Extraneous and confounding variables", p: "An extraneous variable is any variable other than the independent variable that may affect the outcome — for example age, motivation or previous experience. If such a variable is not controlled and mixes its effect with the independent variable, it becomes a confounding variable and can distort the results. Good research controls extraneous variables." },
      { h: "Other types of variables", list: [
        "Continuous variable — can take any value within a range (for example weight, height).",
        "Discrete variable — takes only whole, separate values (for example number of children).",
        "Categorical variable — places subjects into named groups (for example male/female, blood group).",
        "Attribute variable — a fixed characteristic that cannot be manipulated (for example sex, race)."
      ] },
      { h: "Concept vs variable", p: "A concept is an abstract idea or mental image, such as 'pain', 'anxiety' or 'caring'. A variable is a concept that has been made measurable so it can be studied. For example the concept 'anxiety' becomes a variable when it is measured by an anxiety rating scale." },
      { h: "Conceptual and operational definitions", list: [
        "Conceptual definition — explains the abstract, dictionary-like meaning of a concept (for example, 'anxiety is a feeling of worry and unease').",
        "Operational definition — states exactly how the variable will be measured or observed in the study (for example, 'anxiety is the score obtained on the Hamilton Anxiety Rating Scale'). It makes the concept concrete and repeatable."
      ] },
      { h: "Why operational definitions matter", p: "Operational definitions remove ambiguity. They tell readers precisely what the researcher meant and exactly how each variable was measured, so the study can be understood, judged and repeated by others. Without them, terms like 'good health' or 'satisfaction' would mean different things to different people." },
      { h: "Conceptual framework", p: "A conceptual framework is a diagram or written structure showing how the main concepts and variables of the study are linked. Often based on a theory, it acts as a map that guides the study, explains expected relationships, and helps interpret the findings." }
    ],
    references: REF_RES,
    examQuestions: [
      "Define a variable and differentiate between independent and dependent variables.",
      "What are extraneous and confounding variables? Why must they be controlled?",
      "Differentiate between a concept and a variable.",
      "Distinguish between conceptual and operational definitions with examples.",
      "What is a conceptual framework? State its uses in research."
    ],
    assessment: [
      { type: "mcq", q: "A characteristic that can take on different values is called a:", options: ["Constant", "Variable", "Reference", "Hypothesis"], answer: 1, rationale: "A variable is any attribute that can vary or change in value." },
      { type: "mcq", q: "The variable that is manipulated or presumed to be the cause is the:", options: ["Dependent variable", "Independent variable", "Extraneous variable", "Attribute variable"], answer: 1, rationale: "The independent variable is the cause/treatment that influences the outcome." },
      { type: "mcq", q: "The outcome that is measured and depends on the treatment is the:", options: ["Independent variable", "Dependent variable", "Confounding variable", "Discrete variable"], answer: 1, rationale: "The dependent variable is the effect/outcome that is measured." },
      { type: "mcq", q: "An uncontrolled extraneous variable that distorts the results becomes a ____ variable.", options: ["Dependent", "Confounding", "Discrete", "Categorical"], answer: 1, rationale: "An extraneous variable that mixes its effect with the IV is confounding." },
      { type: "mcq", q: "Number of children in a family is an example of a ____ variable.", options: ["Continuous", "Discrete", "Conceptual", "Attribute"], answer: 1, rationale: "It takes only whole, separate values, so it is discrete." },
      { type: "mcq", q: "An abstract idea such as 'pain' or 'anxiety' is a:", options: ["Variable", "Concept", "Sample", "Statistic"], answer: 1, rationale: "A concept is an abstract mental idea; it becomes a variable when measured." },
      { type: "mcq", q: "Defining anxiety as 'the score on the Hamilton Anxiety Rating Scale' is a(n):", options: ["Conceptual definition", "Operational definition", "Hypothesis", "Reference"], answer: 1, rationale: "Stating exactly how a variable is measured is an operational definition." },
      { type: "mcq", q: "Operational definitions are important mainly because they:", options: ["Increase cost", "Remove ambiguity and allow repetition", "Hide the method", "Replace the sample"], answer: 1, rationale: "They make terms precise so the study can be understood and replicated." },
      { type: "mcq", q: "A diagram showing how the study's concepts and variables are linked is the:", options: ["Reference list", "Conceptual framework", "Questionnaire", "Sampling frame"], answer: 1, rationale: "The conceptual framework maps the relationships among concepts/variables." },
      { type: "mcq", q: "Sex and race, which cannot be manipulated, are examples of ____ variables.", options: ["Attribute", "Dependent", "Continuous", "Confounding"], answer: 0, rationale: "Attribute variables are fixed characteristics that cannot be manipulated." }
      , { type: "fill", q: "The variable that is measured as the outcome of a study is the ____ variable.", accept: ["dependent"], rationale: "The dependent variable is the measured outcome." }
      , { type: "fill", q: "A statement of exactly how a variable will be measured in the study is its ____ definition.", accept: ["operational"], rationale: "The operational definition specifies how a variable is measured." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "res-06-research-designs",
    unit: "Unit 2 · Research Methods",
    title: "Research Designs",
    readMinutes: 17,
    summary: "The meaning and importance of a research design and the main quantitative designs (descriptive, experimental, quasi-experimental) and qualitative designs.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a research design?", p: "A research design is the overall plan or blueprint for conducting the study. It states how the study will be carried out — the approach, the setting, the group studied, how data will be collected and how the variables will be controlled. A good design answers the research question as accurately and economically as possible." },
      { h: "Importance of a good design", list: [
        "Provides a clear road map for the whole study.",
        "Helps control extraneous variables and reduce bias.",
        "Increases the accuracy and trustworthiness of findings.",
        "Saves time, money and effort.",
        "Makes the study easier to repeat and check."
      ] },
      { h: "Descriptive (non-experimental) designs", p: "Descriptive designs describe a situation, group or phenomenon as it naturally is, without any manipulation of variables. They answer 'what is happening?'. Examples include the survey, the case study, the cross-sectional study (data at one point in time) and the longitudinal study (data over a period of time). Correlational designs, which examine relationships between variables without manipulation, also belong here." },
      { h: "Experimental design", p: "In a true experimental design the researcher actively manipulates the independent variable (the treatment) and measures its effect on the dependent variable. It has three essential features: manipulation (giving the treatment), control (a control group for comparison) and randomisation (random assignment of subjects to groups). Because of these features, the experimental design gives the strongest evidence of cause and effect — the randomised controlled trial (RCT) is the best example.", figure: {
        caption: "True experimental design: subjects are randomly assigned to an experimental group (receives treatment) or a control group, and outcomes are compared.",
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Experimental design with randomisation into experimental and control groups."><defs><marker id="resArr6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="20" y="85" width="120" height="50" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="80" y="108" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">Sample</text><text x="80" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">random assignment</text><rect x="220" y="25" width="160" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="300" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Experimental group</text><text x="300" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">receives treatment</text><rect x="220" y="135" width="160" height="55" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="300" y="158" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Control group</text><text x="300" y="176" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">no/usual treatment</text><rect x="430" y="85" width="110" height="50" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="485" y="108" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Compare</text><text x="485" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">outcomes</text><line x1="140" y1="100" x2="216" y2="55" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr6)"/><line x1="140" y1="120" x2="216" y2="162" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr6)"/><line x1="380" y1="52" x2="430" y2="100" stroke="#15803D" stroke-width="2.5" marker-end="url(#resArr6)"/><line x1="380" y1="162" x2="430" y2="120" stroke="#15803D" stroke-width="2.5" marker-end="url(#resArr6)"/></svg>'
      } },
      { h: "Quasi-experimental design", p: "A quasi-experimental design also manipulates the independent variable but lacks one of the controls of a true experiment — usually randomisation, and sometimes a control group. It is used when randomisation is not possible or ethical in a real clinical setting. It gives weaker evidence of cause and effect than a true experiment but is often more practical." },
      { h: "Qualitative research designs", list: [
        "Phenomenology — studies the lived experience and meaning of a phenomenon (for example, the experience of living with cancer).",
        "Grounded theory — develops a theory grounded in data collected from people in the situation.",
        "Ethnography — studies a culture or group by living among and observing them.",
        "Case study — an in-depth study of a single person, group or unit.",
        "Historical — examines past events through records and documents."
      ] },
      { h: "Choosing a design", p: "The choice of design depends on the research question, the type of data needed, the resources available and ethical considerations. Quantitative questions about cause and effect call for experimental designs; questions exploring meaning and experience call for qualitative designs." }
    ],
    references: REF_RES,
    examQuestions: [
      "Define research design and state its importance.",
      "Describe the three essential features of a true experimental design.",
      "Differentiate between experimental and quasi-experimental designs.",
      "Name and briefly explain four qualitative research designs.",
      "What factors influence the choice of a research design?"
    ],
    assessment: [
      { type: "mcq", q: "A research design is best described as the:", options: ["List of references", "Overall plan or blueprint of the study", "Final conclusion", "Sample size"], answer: 1, rationale: "The design is the overall plan/blueprint guiding the whole study." },
      { type: "mcq", q: "The three essential features of a true experiment are manipulation, control and:", options: ["Randomisation", "Repetition", "Reporting", "Reviewing"], answer: 0, rationale: "True experiments require manipulation, a control group and randomisation." },
      { type: "mcq", q: "The strongest design for showing cause and effect is the:", options: ["Survey", "Case study", "True experimental design (RCT)", "Historical study"], answer: 2, rationale: "Randomised controlled experiments give the strongest causal evidence." },
      { type: "mcq", q: "A design that manipulates a variable but lacks randomisation is:", options: ["True experimental", "Quasi-experimental", "Descriptive", "Phenomenology"], answer: 1, rationale: "Quasi-experimental designs lack one control of a true experiment (often randomisation)." },
      { type: "mcq", q: "A study describing a situation as it is, without manipulation, is a ____ design.", options: ["Experimental", "Descriptive", "Quasi-experimental", "Grounded theory"], answer: 1, rationale: "Descriptive designs portray phenomena without manipulating variables." },
      { type: "mcq", q: "Studying the lived experience of a phenomenon is the focus of:", options: ["Phenomenology", "Survey", "Experiment", "Correlational study"], answer: 0, rationale: "Phenomenology explores lived experience and meaning." },
      { type: "mcq", q: "A design that develops a theory from data collected from people is:", options: ["Ethnography", "Grounded theory", "Case study", "Cross-sectional"], answer: 1, rationale: "Grounded theory builds theory grounded in collected data." },
      { type: "mcq", q: "Collecting data at a single point in time describes a ____ study.", options: ["Longitudinal", "Cross-sectional", "Historical", "Experimental"], answer: 1, rationale: "Cross-sectional studies gather data at one point in time." },
      { type: "mcq", q: "Studying a culture by living among and observing the group is:", options: ["Ethnography", "Phenomenology", "Survey", "Experiment"], answer: 0, rationale: "Ethnography studies a culture through immersion and observation." },
      { type: "mcq", q: "Random assignment of subjects to groups is called:", options: ["Manipulation", "Randomisation", "Replication", "Reporting"], answer: 1, rationale: "Randomisation is the random assignment of subjects to study groups." }
      , { type: "fill", q: "A design that manipulates a variable but lacks randomisation is called ____ design.", accept: ["quasi-experimental", "quasi experimental"], rationale: "Quasi-experimental designs lack full experimental control." }
      , { type: "fill", q: "The strongest experimental study for testing cause and effect is the randomised ____ trial.", accept: ["controlled", "control"], rationale: "The randomised controlled trial (RCT) is the gold standard." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "res-07-population-sampling",
    unit: "Unit 2 · Research Methods",
    title: "Population, Sample & Sampling Techniques",
    readMinutes: 17,
    summary: "Meaning of population and sample, the purpose of sampling, sample size, and the probability and non-probability sampling techniques used in nursing research.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Population and sample", p: "The population is the entire group of people or items that have the characteristics the researcher is interested in — for example, all nurses in a hospital. A sample is a smaller part of the population that is actually studied. Because it is rarely possible to study everyone, the researcher studies a sample and applies the findings to the whole population." },
      { h: "Key terms", list: [
        "Target population — the whole group the researcher wants the findings to apply to.",
        "Accessible population — the part of the target population the researcher can actually reach.",
        "Sample — the subset of the population that is studied.",
        "Sampling unit / element — a single member of the population (for example one patient).",
        "Sampling frame — a complete list of all elements from which the sample is drawn."
      ] },
      { h: "Purpose and advantages of sampling", list: [
        "Saves time, money and effort compared with studying everyone.",
        "Makes the study practical and manageable.",
        "Allows quicker collection and analysis of data.",
        "Can give accurate results if the sample truly represents the population."
      ] },
      { h: "Sampling techniques: two broad types", p: "Sampling methods fall into two groups. In probability sampling every member of the population has a known, equal chance of being selected (uses random selection). In non-probability sampling members do NOT have an equal chance; selection is based on convenience or the researcher's judgement.", figure: {
        caption: "Sampling techniques are divided into probability (random) and non-probability (non-random) methods.",
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of sampling techniques."><rect x="195" y="10" width="170" height="38" rx="8" fill="#7C2D12"/><text x="280" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">Sampling techniques</text><rect x="40" y="80" width="200" height="34" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="140" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">Probability (random)</text><rect x="320" y="80" width="200" height="34" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="420" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Non-probability</text><line x1="240" y1="48" x2="140" y2="78" stroke="#7C2D12" stroke-width="2"/><line x1="320" y1="48" x2="420" y2="78" stroke="#7C2D12" stroke-width="2"/><text x="140" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Simple random</text><text x="140" y="158" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Systematic</text><text x="140" y="176" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Stratified</text><text x="140" y="194" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Cluster</text><text x="420" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Convenience</text><text x="420" y="158" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Quota</text><text x="420" y="176" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Purposive</text><text x="420" y="194" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Snowball</text></svg>'
      } },
      { h: "Probability sampling methods", list: [
        "Simple random sampling — every member has an equal chance; selection by lottery or random number table.",
        "Systematic sampling — every kth member is chosen from a list after a random start (for example, every 5th patient).",
        "Stratified random sampling — the population is divided into strata (groups) and a random sample is taken from each, ensuring all groups are represented.",
        "Cluster sampling — the population is divided into clusters (for example wards or villages) and whole clusters are randomly selected."
      ] },
      { h: "Non-probability sampling methods", list: [
        "Convenience (accidental) sampling — uses subjects who are easily available (most common but weakest).",
        "Quota sampling — fills set quotas for certain groups, but selection within the group is non-random.",
        "Purposive (judgemental) sampling — the researcher deliberately chooses subjects with particular knowledge or characteristics.",
        "Snowball (network) sampling — current participants help recruit others; useful for hard-to-reach groups."
      ] },
      { h: "Probability vs non-probability", p: "Probability sampling reduces bias and lets the researcher generalise findings to the whole population, so it is preferred in quantitative research. Non-probability sampling is easier and cheaper but carries a higher risk of bias; it is common in qualitative studies and pilot work." },
      { h: "Sample size", p: "Sample size is the number of subjects in the study. A larger, well-chosen sample usually represents the population better and gives more reliable results, but it costs more. The right size depends on the population size, the variability of the data, the design and the required level of accuracy; it can be estimated using statistical formulae." }
    ],
    references: REF_RES,
    examQuestions: [
      "Differentiate between population and sample. Define target and accessible population.",
      "State the purpose and advantages of sampling.",
      "Describe four probability sampling techniques.",
      "Describe four non-probability sampling techniques.",
      "What factors determine the sample size of a study?"
    ],
    assessment: [
      { type: "mcq", q: "The entire group that has the characteristics of interest is the:", options: ["Sample", "Population", "Variable", "Statistic"], answer: 1, rationale: "The population is the whole group of interest; the sample is a part of it." },
      { type: "mcq", q: "A complete list of all elements from which a sample is drawn is the:", options: ["Sampling frame", "Hypothesis", "Questionnaire", "Stratum"], answer: 0, rationale: "The sampling frame is the full list of population elements." },
      { type: "mcq", q: "In probability sampling, every member of the population has:", options: ["No chance of selection", "A known, equal chance of selection", "Selection by the researcher's choice", "Selection by convenience"], answer: 1, rationale: "Probability sampling gives each member a known, equal chance via random selection." },
      { type: "mcq", q: "Choosing every 5th patient from a list after a random start is:", options: ["Stratified sampling", "Systematic sampling", "Snowball sampling", "Quota sampling"], answer: 1, rationale: "Selecting every kth member is systematic sampling." },
      { type: "mcq", q: "Dividing the population into groups and randomly sampling from each is:", options: ["Cluster sampling", "Stratified random sampling", "Convenience sampling", "Purposive sampling"], answer: 1, rationale: "Stratified random sampling samples randomly within each stratum/group." },
      { type: "mcq", q: "The weakest and most convenient non-probability method is:", options: ["Simple random sampling", "Convenience sampling", "Cluster sampling", "Systematic sampling"], answer: 1, rationale: "Convenience sampling uses easily available subjects and is most prone to bias." },
      { type: "mcq", q: "When current participants recruit other participants, the method is:", options: ["Quota sampling", "Snowball sampling", "Stratified sampling", "Cluster sampling"], answer: 1, rationale: "Snowball (network) sampling uses participants to recruit others." },
      { type: "mcq", q: "Deliberately selecting subjects with particular knowledge is ____ sampling.", options: ["Purposive", "Random", "Systematic", "Cluster"], answer: 0, rationale: "Purposive (judgemental) sampling chooses subjects on purpose for their characteristics." },
      { type: "mcq", q: "Which sampling type best allows generalisation to the whole population?", options: ["Convenience", "Quota", "Probability", "Snowball"], answer: 2, rationale: "Probability sampling reduces bias and supports generalisation." },
      { type: "mcq", q: "The part of the target population the researcher can actually reach is the:", options: ["Accessible population", "Sample size", "Cluster", "Stratum"], answer: 0, rationale: "The accessible population is the reachable portion of the target population." }
      , { type: "fill", q: "Sampling in which every member has a known equal chance of selection is called ____ sampling.", accept: ["probability", "random"], rationale: "Probability sampling uses random selection with known chances." }
      , { type: "fill", q: "A smaller part of the population that is actually studied is called the ____.", accept: ["sample"], rationale: "The sample is the subset of the population studied." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "res-08-data-collection",
    unit: "Unit 2 · Research Methods",
    title: "Methods & Tools of Data Collection",
    readMinutes: 17,
    summary: "The main methods of collecting data — questionnaire, interview, observation and scales — their tools, types, advantages and disadvantages, and the role of the pilot study.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is data collection?", p: "Data collection is the systematic gathering of information needed to answer the research question. The way it is done must be planned carefully, because the quality of the whole study depends on the quality of the data collected. A method is the broad approach (for example, interviewing); a tool or instrument is the actual device used (for example, the interview schedule)." },
      { h: "Questionnaire", p: "A questionnaire is a printed set of written questions that respondents answer themselves. It may have closed-ended questions (fixed options, easy to analyse) or open-ended questions (free answers, richer but harder to analyse).", list: [
        "Advantages — cheap, quick, can cover many people, keeps anonymity, no interviewer bias.",
        "Disadvantages — needs literate respondents, low return rate possible, no chance to clarify, answers may be careless."
      ] },
      { h: "Interview", p: "An interview is a face-to-face or telephone conversation in which the researcher asks questions and records the answers.", list: [
        "Structured interview — fixed questions in fixed order (uses an interview schedule).",
        "Unstructured interview — open conversation guided by broad topics.",
        "Semi-structured interview — a mix of set questions and freedom to probe.",
        "Advantages — flexible, can clarify and probe, suits illiterate respondents, high response rate.",
        "Disadvantages — time-consuming, costly, risk of interviewer bias, less anonymity."
      ] },
      { h: "Observation", p: "In observation the researcher watches and records behaviour or events directly.", list: [
        "Participant observation — the observer takes part in the activity being studied.",
        "Non-participant observation — the observer watches without taking part.",
        "Structured observation — uses a checklist or rating scale of specific behaviours.",
        "Advantages — records actual behaviour, useful when people cannot report themselves (for example infants).",
        "Disadvantages — time-consuming, observer bias, people may change behaviour when watched (Hawthorne effect)."
      ] },
      { h: "Scales", p: "A scale is a tool that assigns numbers to measure the amount or degree of an attribute such as attitude, pain or satisfaction.", list: [
        "Likert scale — statements rated from 'strongly agree' to 'strongly disagree' (commonly 5 points).",
        "Rating scale — judges a quality along a line or set of points.",
        "Visual analogue scale (VAS) — a line on which the respondent marks intensity, widely used for pain.",
        "Semantic differential scale — rates between two opposite adjectives (for example good–bad)."
      ] },
      { h: "Other methods", list: [
        "Physiological / biophysical measures — instruments such as a thermometer, sphygmomanometer or weighing scale.",
        "Records and documents — case notes, registers and existing records.",
        "Focus group discussion — a guided group discussion to explore views (qualitative)."
      ] },
      { h: "Pilot study (pre-testing)", p: "A pilot study is a small-scale trial run of the whole study, or of the tool, carried out before the main study on a few subjects similar to the real sample. It checks whether the tool is clear and works, estimates time and cost, and reveals problems so they can be corrected before the main data collection. Pilot data are NOT included in the final study." },
      { h: "Choosing the method", p: "The choice of method and tool depends on the research question, the type of data needed, the characteristics of the respondents (for example literacy), the time and money available, and the need for accuracy. Often more than one method is combined to strengthen the data." }
    ],
    references: REF_RES,
    examQuestions: [
      "Differentiate between a method and a tool of data collection.",
      "Describe the questionnaire as a data-collection tool, with its advantages and disadvantages.",
      "Differentiate between structured, unstructured and semi-structured interviews.",
      "Name and explain four types of scales used in research.",
      "What is a pilot study? State its purposes."
    ],
    assessment: [
      { type: "mcq", q: "A printed set of written questions answered by the respondents themselves is a:", options: ["Interview schedule", "Questionnaire", "Checklist", "Scale"], answer: 1, rationale: "A questionnaire is self-administered written questions." },
      { type: "mcq", q: "Questions with fixed answer options are called:", options: ["Open-ended", "Closed-ended", "Leading", "Probing"], answer: 1, rationale: "Closed-ended questions offer fixed options and are easy to analyse." },
      { type: "mcq", q: "Which method is BEST suited to illiterate respondents?", options: ["Mailed questionnaire", "Interview", "Self-report form", "Online survey"], answer: 1, rationale: "Interviews do not require the respondent to read or write." },
      { type: "mcq", q: "A 5-point scale from 'strongly agree' to 'strongly disagree' is a:", options: ["Visual analogue scale", "Likert scale", "Checklist", "Semantic differential"], answer: 1, rationale: "The Likert scale rates agreement across ordered points." },
      { type: "mcq", q: "The widely used scale for measuring pain intensity on a marked line is the:", options: ["Likert scale", "Visual analogue scale (VAS)", "Quota scale", "Nominal scale"], answer: 1, rationale: "The visual analogue scale (VAS) measures intensity such as pain along a line." },
      { type: "mcq", q: "When people change their behaviour because they know they are being watched, it is the:", options: ["Placebo effect", "Hawthorne effect", "Halo effect", "Domino effect"], answer: 1, rationale: "The Hawthorne effect is behaviour change due to being observed." },
      { type: "mcq", q: "A small-scale trial run carried out before the main study is a:", options: ["Pilot study", "Census", "Survey", "Case study"], answer: 0, rationale: "A pilot study tests the tool and procedures before the main study." },
      { type: "mcq", q: "Pilot study data should be:", options: ["Added to the main study results", "Excluded from the final study", "Published separately as the main finding", "Used as the hypothesis"], answer: 1, rationale: "Pilot data are not included in the final main-study results." },
      { type: "mcq", q: "Watching and recording behaviour directly is the method of:", options: ["Observation", "Questionnaire", "Mailing", "Sampling"], answer: 0, rationale: "Observation records behaviour or events as they happen." },
      { type: "mcq", q: "A thermometer or sphygmomanometer is an example of a ____ measure.", options: ["Attitude", "Physiological/biophysical", "Documentary", "Snowball"], answer: 1, rationale: "Instruments measuring body function are physiological/biophysical measures." }
      , { type: "fill", q: "A small-scale trial run of a study or tool before the main study is called a ____ study.", accept: ["pilot"], rationale: "The pilot study pre-tests the tool and procedures." }
      , { type: "fill", q: "A scale rating statements from 'strongly agree' to 'strongly disagree' is the ____ scale.", accept: ["Likert", "likert"], rationale: "The Likert scale measures attitudes across ordered agreement points." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "res-09-reliability-validity",
    unit: "Unit 2 · Research Methods",
    title: "Reliability & Validity of Tools",
    readMinutes: 16,
    summary: "The meaning of reliability and validity, their types, the relationship between them, and how the quality of a data-collection tool is judged.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why quality of tools matters", p: "The data are only as good as the tool that collects them. Two main qualities tell us whether a tool is good: reliability (does it measure consistently?) and validity (does it measure what it is supposed to measure?). A trustworthy study needs tools that are both reliable and valid." },
      { h: "Reliability", p: "Reliability is the consistency, stability and dependability of a tool — the degree to which it gives the same results when used repeatedly under the same conditions. A reliable weighing scale gives the same weight each time the same object is weighed. Reliability is often expressed as a coefficient between 0 and 1; the closer to 1, the better." },
      { h: "Types of reliability", list: [
        "Test–retest reliability — the same tool is given to the same people twice; similar scores show stability over time.",
        "Internal consistency — all items of the tool measure the same concept; commonly assessed by Cronbach's alpha.",
        "Inter-rater reliability — two or more observers using the tool get the same results (important in observation).",
        "Equivalence / parallel-form reliability — two equivalent versions of the tool give similar results."
      ] },
      { h: "Validity", p: "Validity is the degree to which a tool actually measures what it is intended to measure. A thermometer is a valid tool for temperature but not for blood pressure. Validity is the more important of the two qualities, because a tool can be consistent (reliable) yet still measure the wrong thing." },
      { h: "Types of validity", list: [
        "Face validity — on the surface, the tool appears to measure what it should (a quick, weak check).",
        "Content validity — the tool covers all the important aspects of the concept; usually judged by a panel of experts.",
        "Criterion-related validity — the tool's results agree with an outside criterion or 'gold standard' (concurrent or predictive).",
        "Construct validity — the tool truly measures the abstract concept (construct) it claims to, shown by how it relates to other measures."
      ] },
      { h: "Relationship between reliability and validity", p: "A tool can be reliable without being valid, but it cannot be valid without being reliable. In other words, reliability is necessary for validity but does not guarantee it. A clock that is always 10 minutes fast is reliable (consistent) but not valid (gives the wrong time).", figure: {
        caption: "Reliability is consistency; validity is accuracy. A tool can be reliable but not valid, yet it must be reliable to be valid.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Relationship between reliability and validity using target diagrams."><circle cx="120" cy="100" r="55" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><circle cx="120" cy="100" r="35" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><circle cx="120" cy="100" r="15" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><circle cx="150" cy="70" r="4" fill="#B45309"/><circle cx="158" cy="78" r="4" fill="#B45309"/><circle cx="148" cy="82" r="4" fill="#B45309"/><text x="120" y="180" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Reliable, NOT valid</text><circle cx="320" cy="100" r="55" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><circle cx="320" cy="100" r="35" fill="#FEF3C7" stroke="#7C2D12" stroke-width="1.5"/><circle cx="320" cy="100" r="15" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><circle cx="316" cy="98" r="4" fill="#15803D"/><circle cx="324" cy="102" r="4" fill="#15803D"/><circle cx="320" cy="106" r="4" fill="#15803D"/><text x="320" y="180" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Reliable AND valid</text></svg>'
      } },
      { h: "Improving reliability and validity", list: [
        "Use clear, simple, unambiguous items.",
        "Pilot-test the tool and revise problem items.",
        "Use standardised, already-tested tools where possible.",
        "Have content checked by a panel of experts.",
        "Train data collectors and observers to act in the same way.",
        "Standardise the conditions of measurement."
      ] },
      { h: "Trustworthiness in qualitative research", p: "In qualitative studies, the parallel idea to reliability and validity is called trustworthiness, judged by credibility, dependability, confirmability and transferability. Techniques such as member checking and prolonged engagement help establish it." }
    ],
    references: REF_RES,
    examQuestions: [
      "Define reliability and validity of a research tool.",
      "Explain four types of reliability.",
      "Explain four types of validity.",
      "Describe the relationship between reliability and validity with an example.",
      "How can the reliability and validity of a tool be improved?"
    ],
    assessment: [
      { type: "mcq", q: "The consistency and stability of a tool over repeated use is called:", options: ["Validity", "Reliability", "Sampling", "Bias"], answer: 1, rationale: "Reliability is the consistency/dependability of a measuring tool." },
      { type: "mcq", q: "The degree to which a tool measures what it is supposed to measure is:", options: ["Reliability", "Validity", "Feasibility", "Frequency"], answer: 1, rationale: "Validity is whether the tool measures the intended attribute." },
      { type: "mcq", q: "Giving the same tool to the same people twice tests ____ reliability.", options: ["Inter-rater", "Test–retest", "Content", "Face"], answer: 1, rationale: "Test–retest reliability checks stability over time with repeated administration." },
      { type: "mcq", q: "Cronbach's alpha is used to assess:", options: ["Face validity", "Internal consistency reliability", "Sample size", "Hypothesis"], answer: 1, rationale: "Cronbach's alpha measures internal consistency among items." },
      { type: "mcq", q: "Agreement between two observers using the same tool is:", options: ["Inter-rater reliability", "Construct validity", "Face validity", "Predictive validity"], answer: 0, rationale: "Inter-rater reliability is consistency between different observers." },
      { type: "mcq", q: "Validity judged by a panel of experts covering all aspects of a concept is:", options: ["Face validity", "Content validity", "Concurrent validity", "Test–retest"], answer: 1, rationale: "Content validity is usually established by an expert panel." },
      { type: "mcq", q: "A clock always 10 minutes fast is:", options: ["Valid but not reliable", "Reliable but not valid", "Both reliable and valid", "Neither reliable nor valid"], answer: 1, rationale: "It is consistent (reliable) but gives the wrong time (not valid)." },
      { type: "mcq", q: "Which statement is TRUE?", options: ["A valid tool need not be reliable", "A tool must be reliable to be valid", "Reliability guarantees validity", "Validity is unrelated to reliability"], answer: 1, rationale: "Reliability is necessary for validity, though it does not guarantee it." },
      { type: "mcq", q: "Which is generally considered the MORE important quality of a tool?", options: ["Reliability", "Validity", "Length", "Cost"], answer: 1, rationale: "Validity matters more, since a reliable tool may still measure the wrong thing." },
      { type: "mcq", q: "In qualitative research, the parallel concept to reliability and validity is:", options: ["Randomisation", "Trustworthiness", "Manipulation", "Sampling frame"], answer: 1, rationale: "Trustworthiness (credibility, dependability, etc.) is the qualitative parallel." }
      , { type: "fill", q: "The ability of a tool to give the same results on repeated use is its ____.", accept: ["reliability"], rationale: "Reliability is consistency of measurement." }
      , { type: "fill", q: "The internal-consistency reliability of a multi-item tool is commonly measured by Cronbach's ____.", accept: ["alpha"], rationale: "Cronbach's alpha indexes internal consistency." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "res-10-data-analysis",
    unit: "Unit 3 · Analysis & Ethics",
    title: "Data Analysis: Descriptive & Inferential Statistics",
    readMinutes: 18,
    summary: "Processing of data, descriptive statistics (measures of central tendency and dispersion), graphic presentation, and an introduction to inferential statistics.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Data processing and analysis", p: "After data are collected they must be processed before they can be understood. Processing includes editing (checking for errors and completeness), coding (giving numbers or labels to answers), classification (grouping similar data) and tabulation (arranging data in tables). Data analysis then uses statistics to make sense of the data and answer the research question." },
      { h: "What is statistics?", p: "Statistics is the science of collecting, organising, presenting, analysing and interpreting numerical data. In research it has two main branches: descriptive statistics, which summarise and describe the data, and inferential statistics, which draw conclusions about a population from a sample." },
      { h: "Measures of central tendency", p: "These describe the centre or typical value of a set of data.", list: [
        "Mean — the arithmetic average; add all values and divide by the number of values. It uses every value but is affected by extreme scores.",
        "Median — the middle value when data are arranged in order. It is not affected by extreme values, so it is better for skewed data.",
        "Mode — the value that occurs most often. A set may have one mode, more than one, or none."
      ], figure: {
        caption: "Mean, median and mode are the three measures of central tendency.",
        svg: '<svg viewBox="0 0 540 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three measures of central tendency: mean, median, mode."><rect x="20" y="40" width="150" height="90" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="95" y="70" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#7C2D12">MEAN</text><text x="95" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">sum &#247; number</text><text x="95" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">the average</text><rect x="195" y="40" width="150" height="90" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="270" y="70" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#B45309">MEDIAN</text><text x="270" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#B45309">middle value</text><text x="270" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">data in order</text><rect x="370" y="40" width="150" height="90" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="445" y="70" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#7C2D12">MODE</text><text x="445" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">most frequent</text><text x="445" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">value</text><text x="270" y="22" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Measures of central tendency</text></svg>'
      } },
      { h: "Worked example", p: "For the data set 2, 4, 4, 6, 9: the mean is (2+4+4+6+9) ÷ 5 = 25 ÷ 5 = 5; the median (middle value when ordered) is 4; the mode (most frequent value) is 4. This shows how the three measures can differ for the same data." },
      { h: "Measures of dispersion (spread)", list: [
        "Range — the difference between the highest and lowest value; simple but uses only two values.",
        "Variance — the average of the squared differences from the mean.",
        "Standard deviation (SD) — the square root of the variance; it shows how widely the values are spread around the mean. A small SD means values are close to the mean; a large SD means they are widely spread."
      ] },
      { h: "Graphic presentation of data", list: [
        "Table — rows and columns; the most precise way to present figures.",
        "Bar diagram — bars of equal width for categories; compares groups.",
        "Histogram — bars with no gaps for continuous, grouped data.",
        "Pie chart — a circle divided into slices showing parts of a whole (percentages).",
        "Line graph — points joined by a line; shows change or trend over time.",
        "Frequency polygon and cumulative frequency curve (ogive) — show distributions."
      ] },
      { h: "Introduction to inferential statistics", p: "Inferential statistics use data from a sample to draw conclusions (inferences) about the whole population and to test hypotheses. They tell us whether a result is likely to be true for the population or just due to chance. Common inferential tests include the t-test (compares the means of two groups), ANOVA (compares means of three or more groups), the chi-square test (examines relationships between categorical variables) and correlation (measures the strength of a relationship)." },
      { h: "Significance and the p-value", p: "Inferential tests give a p-value, the probability that the result happened by chance. By convention, if p is less than 0.05 (the usual level of significance), the result is called statistically significant and the null hypothesis is rejected. A p-value of 0.05 means there is a 5% chance the result is due to chance alone." }
    ],
    references: REF_RES,
    examQuestions: [
      "What is data processing? Describe its main steps.",
      "Define mean, median and mode, and calculate them for a given data set.",
      "What is standard deviation? What does it tell us about data?",
      "Name and describe four ways of presenting data graphically.",
      "Differentiate between descriptive and inferential statistics. What is a p-value?"
    ],
    assessment: [
      { type: "mcq", q: "Checking collected data for errors and completeness is called:", options: ["Coding", "Editing", "Tabulation", "Sampling"], answer: 1, rationale: "Editing checks data for errors, accuracy and completeness." },
      { type: "mcq", q: "The arithmetic average of a data set is the:", options: ["Median", "Mode", "Mean", "Range"], answer: 2, rationale: "The mean is the sum of values divided by their number." },
      { type: "mcq", q: "For the data 2, 4, 4, 6, 9 the median is:", options: ["2", "4", "5", "9"], answer: 1, rationale: "Arranged in order, the middle (3rd of 5) value is 4." },
      { type: "mcq", q: "The value that occurs most frequently is the:", options: ["Mean", "Median", "Mode", "Variance"], answer: 2, rationale: "The mode is the most frequently occurring value." },
      { type: "mcq", q: "Which measure of central tendency is LEAST affected by extreme values?", options: ["Mean", "Median", "Sum", "Total"], answer: 1, rationale: "The median is not pulled by extreme scores, unlike the mean." },
      { type: "mcq", q: "The square root of the variance is the:", options: ["Range", "Mode", "Standard deviation", "Mean"], answer: 2, rationale: "Standard deviation is the square root of the variance." },
      { type: "mcq", q: "A small standard deviation indicates that values are:", options: ["Widely spread out", "Close to the mean", "All zero", "Negative"], answer: 1, rationale: "A small SD means the data cluster closely around the mean." },
      { type: "mcq", q: "A circle divided into slices showing parts of a whole is a:", options: ["Bar diagram", "Pie chart", "Line graph", "Histogram"], answer: 1, rationale: "A pie chart shows proportions of a whole as slices." },
      { type: "mcq", q: "Statistics used to draw conclusions about a population from a sample are:", options: ["Descriptive statistics", "Inferential statistics", "Raw data", "Coding"], answer: 1, rationale: "Inferential statistics generalise from sample to population." },
      { type: "mcq", q: "The conventional level of significance for rejecting the null hypothesis is a p-value less than:", options: ["0.5", "0.05", "5.0", "50"], answer: 1, rationale: "p < 0.05 is the usual cut-off for statistical significance." }
      , { type: "fill", q: "The middle value of an ordered data set is the ____.", accept: ["median"], rationale: "The median is the central value when data are ordered." }
      , { type: "fill", q: "The measure of spread that is the square root of the variance is the standard ____.", accept: ["deviation", "deviation (SD)"], rationale: "Standard deviation is the square root of the variance." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "res-11-ethics",
    unit: "Unit 3 · Analysis & Ethics",
    title: "Ethics in Research",
    readMinutes: 16,
    summary: "The meaning and importance of research ethics, the rights of human participants, informed consent, confidentiality, the role of the IRB/ethics committee, and ethical issues in nursing research.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is research ethics?", p: "Research ethics are the moral principles and standards that guide how research is planned and carried out so that the rights, dignity, safety and welfare of participants are protected. Because nursing research studies human beings, ethical conduct is essential at every stage." },
      { h: "Why ethics matter", p: "History has shown serious abuse of human subjects in research (for example unethical wartime experiments and the Tuskegee study). In response, codes and guidelines such as the Nuremberg Code, the Declaration of Helsinki and the Belmont Report were developed to protect participants. These set the rules that all researchers must follow today." },
      { h: "The three Belmont principles", list: [
        "Respect for persons (autonomy) — people are treated as free agents able to make their own decisions; those with reduced autonomy are protected.",
        "Beneficence — do good and do no harm; maximise benefits and minimise risks.",
        "Justice — fair selection of subjects and fair sharing of the benefits and burdens of research."
      ] },
      { h: "Rights of research participants", list: [
        "Right to self-determination — to decide freely whether to take part and to withdraw at any time without penalty.",
        "Right to full disclosure — to be told the full nature, purpose, risks and benefits of the study.",
        "Right to privacy and confidentiality — personal information is kept secret and not misused.",
        "Right to fair treatment — to be selected and treated fairly and without discrimination.",
        "Right to protection from harm and discomfort — physical, emotional, social and financial."
      ] },
      { h: "Informed consent", p: "Informed consent means the participant agrees to take part voluntarily after being given, and understanding, all the necessary information. It must include: the purpose of the study, what will be done, the risks and benefits, the right to refuse or withdraw, and assurance of confidentiality. Consent must be voluntary (no force or undue pressure) and given by a competent person; for children or those unable to consent, a guardian gives permission.", figure: {
        caption: "Essential elements of valid informed consent.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Elements of informed consent."><rect x="170" y="10" width="200" height="34" rx="8" fill="#7C2D12"/><text x="270" y="33" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">Informed consent</text><rect x="20" y="70" width="160" height="44" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="100" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Full information</text><text x="100" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">disclosed</text><rect x="190" y="70" width="160" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="270" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">Understanding by</text><text x="270" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">the participant</text><rect x="360" y="70" width="160" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="440" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Voluntary, competent</text><text x="440" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">agreement</text><rect x="190" y="140" width="160" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="270" y="165" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">Right to withdraw anytime</text></svg>'
      } },
      { h: "Confidentiality and anonymity", list: [
        "Confidentiality — the researcher keeps the participant's information private and does not reveal it to others or link it to the person in reports.",
        "Anonymity — even the researcher cannot link the data to a particular participant (stronger than confidentiality).",
        "Data are stored securely, codes are used instead of names, and findings are reported as groups, not individuals."
      ] },
      { h: "Institutional Review Board (IRB) / Ethics Committee", p: "An Institutional Review Board (IRB), also called an ethics committee, is a group that reviews research proposals before the study begins to make sure participants will be protected. No research involving human subjects should start until the IRB has examined the design, risks, benefits and consent process and given approval." },
      { h: "Common ethical issues in nursing research", list: [
        "Plagiarism and dishonesty in reporting.",
        "Fabrication (inventing data) and falsification (changing data).",
        "Failing to obtain proper informed consent.",
        "Breaching confidentiality.",
        "Coercion or undue pressure to participate.",
        "Conflict between the nurse's caring role and the researcher role."
      ] }
    ],
    references: REF_RES,
    examQuestions: [
      "Define research ethics and explain why they are important.",
      "State and explain the three Belmont principles.",
      "Describe the rights of research participants.",
      "What is informed consent? List its essential elements.",
      "What is an IRB? Differentiate between confidentiality and anonymity."
    ],
    assessment: [
      { type: "mcq", q: "Moral principles that protect the rights and welfare of research participants are called research:", options: ["Ethics", "Designs", "Variables", "Statistics"], answer: 0, rationale: "Research ethics are the moral standards protecting participants." },
      { type: "mcq", q: "Which is one of the three Belmont principles?", options: ["Speed", "Beneficence", "Profit", "Secrecy"], answer: 1, rationale: "The Belmont principles are respect for persons, beneficence and justice." },
      { type: "mcq", q: "The right to decide freely whether to take part and to withdraw at any time is the right to:", options: ["Self-determination", "Payment", "Publication", "Promotion"], answer: 0, rationale: "Self-determination lets participants choose to join or withdraw freely." },
      { type: "mcq", q: "Voluntary agreement to participate after full information is given is called:", options: ["A hypothesis", "Informed consent", "A pilot study", "Randomisation"], answer: 1, rationale: "Informed consent is voluntary, informed agreement to take part." },
      { type: "mcq", q: "Keeping a participant's information private and not revealing it is:", options: ["Anonymity", "Confidentiality", "Coercion", "Coding"], answer: 1, rationale: "Confidentiality is keeping participant information private." },
      { type: "mcq", q: "When even the researcher cannot link data to a participant, this is:", options: ["Confidentiality", "Anonymity", "Bias", "Validity"], answer: 1, rationale: "Anonymity means no one, not even the researcher, can identify the source." },
      { type: "mcq", q: "The group that reviews a study proposal to protect participants before it begins is the:", options: ["Sampling frame", "IRB / ethics committee", "Control group", "Pilot group"], answer: 1, rationale: "The IRB/ethics committee reviews and approves studies to protect subjects." },
      { type: "mcq", q: "Inventing data that were never collected is called:", options: ["Falsification", "Fabrication", "Replication", "Coding"], answer: 1, rationale: "Fabrication is making up data; falsification is altering real data." },
      { type: "mcq", q: "The Belmont principle of fair selection and fair sharing of burdens is:", options: ["Justice", "Beneficence", "Autonomy", "Fidelity"], answer: 0, rationale: "Justice concerns fairness in selecting subjects and sharing benefits/burdens." },
      { type: "mcq", q: "For a child or a person unable to consent, consent is given by:", options: ["The researcher alone", "A parent or legal guardian", "No one is needed", "The IRB chairman personally"], answer: 1, rationale: "A parent or legal guardian gives permission for those unable to consent." }
      , { type: "fill", q: "Voluntary agreement to take part after receiving and understanding full information is called informed ____.", accept: ["consent"], rationale: "This defines informed consent." }
      , { type: "fill", q: "The committee that reviews and approves research to protect human subjects is the ____.", accept: ["IRB", "institutional review board", "ethics committee"], rationale: "The IRB/ethics committee safeguards participants." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "res-12-report-writing-utilization",
    unit: "Unit 3 · Analysis & Ethics",
    title: "Research Report Writing, Communication & Utilization of Findings",
    readMinutes: 17,
    summary: "The purpose and structure of a research report, the IMRAD format, referencing, methods of disseminating findings, and the utilization of research in evidence-based practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a research report?", p: "A research report is a written document that presents the whole study — why it was done, how it was done, what was found and what it means — in a clear, organised way. It is the final step of the research process; research that is not written up and shared cannot benefit practice." },
      { h: "Purposes of a research report", list: [
        "To communicate the findings to others.",
        "To add the new knowledge to the body of literature.",
        "To allow others to judge and repeat the study.",
        "To provide evidence for changes in practice and policy.",
        "To fulfil academic or institutional requirements."
      ] },
      { h: "Structure of a research report (IMRAD)", p: "Most scientific reports follow the IMRAD pattern, organised into the main sections below.", list: [
        "Preliminary pages — title, abstract, acknowledgements and table of contents.",
        "Introduction — background, problem statement, objectives, hypothesis and significance.",
        "Review of literature — what is already known.",
        "Methodology (Methods) — design, population, sample, tools, data collection and analysis, and ethical considerations.",
        "Results — the findings, presented in text, tables and figures.",
        "Discussion — interpretation of the findings, comparison with other studies, and limitations.",
        "Conclusion and recommendations — the main message and suggestions for practice and future research.",
        "References and appendices — sources cited and supporting material (for example the tool, consent form)."
      ], figure: {
        caption: "The IMRAD structure of a research report: Introduction, Methods, Results, and Discussion.",
        svg: '<svg viewBox="0 0 540 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IMRAD structure of a research report."><defs><marker id="resArr12" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="20" y="80" width="110" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="75" y="105" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">I</text><text x="75" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Introduction</text><rect x="150" y="80" width="110" height="55" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="205" y="105" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">M</text><text x="205" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Methods</text><rect x="280" y="80" width="110" height="55" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="335" y="105" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">R</text><text x="335" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">Results</text><rect x="410" y="80" width="115" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="467" y="105" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">A &amp; D</text><text x="467" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Discussion</text><line x1="130" y1="107" x2="146" y2="107" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr12)"/><line x1="260" y1="107" x2="276" y2="107" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#resArr12)"/><line x1="390" y1="107" x2="406" y2="107" stroke="#15803D" stroke-width="2.5" marker-end="url(#resArr12)"/><text x="270" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">IMRAD report structure</text></svg>'
      } },
      { h: "The abstract", p: "The abstract is a short summary (usually 150–250 words) placed at the beginning of the report. It briefly states the background/objective, methods, main results and conclusion. Many readers read only the abstract, so it must be clear and accurate." },
      { h: "Referencing and citation", p: "All sources used must be acknowledged in the text (citation) and listed at the end (references) using a recognised style such as APA, Vancouver or Harvard. Correct referencing gives credit to original authors, allows readers to trace the sources, and avoids plagiarism." },
      { h: "Dissemination of findings", list: [
        "Publication in scientific and nursing journals.",
        "Presentation at conferences, seminars and workshops (oral or poster).",
        "Reports to the institution, funding body or health authority.",
        "Theses and dissertations submitted to the university.",
        "Sharing through professional meetings, newsletters and reputable online platforms."
      ] },
      { h: "Utilization of findings & evidence-based practice", p: "Research utilization means putting research findings into actual practice to improve care. Trustworthy findings from one or several studies are appraised and, where appropriate, used to update protocols, guidelines and standards. This is the heart of evidence-based practice: best evidence + clinical expertise + patient values guiding the care given. A study has real value only when its findings are used to benefit patients." },
      { h: "Barriers to research utilization", list: [
        "Lack of time and heavy workload of nurses.",
        "Difficulty understanding statistical reports.",
        "Limited access to journals and research.",
        "Resistance to change in the workplace.",
        "Lack of authority or support to change practice."
      ] }
    ],
    references: REF_RES,
    examQuestions: [
      "State the purposes of a research report.",
      "Describe the structure of a research report (IMRAD).",
      "What is an abstract? What should it contain?",
      "Describe the methods of disseminating research findings.",
      "What is research utilization? State the barriers to using research in nursing."
    ],
    assessment: [
      { type: "mcq", q: "The final step of the research process is to:", options: ["Identify the problem", "Write and communicate the report", "Select the sample", "State the hypothesis"], answer: 1, rationale: "Writing up and sharing the report is the last step of the process." },
      { type: "mcq", q: "IMRAD stands for Introduction, Methods, Results And:", options: ["Data", "Discussion", "Design", "Drugs"], answer: 1, rationale: "IMRAD = Introduction, Methods, Results And Discussion." },
      { type: "mcq", q: "A short summary placed at the beginning of a report is the:", options: ["Reference", "Abstract", "Appendix", "Hypothesis"], answer: 1, rationale: "The abstract briefly summarises the whole study." },
      { type: "mcq", q: "In which section are the design, sample and tools described?", options: ["Introduction", "Methodology", "Discussion", "Conclusion"], answer: 1, rationale: "The methodology section describes design, sample, tools and analysis." },
      { type: "mcq", q: "The interpretation of findings and comparison with other studies appears in the:", options: ["Results", "Discussion", "Abstract", "References"], answer: 1, rationale: "The discussion interprets findings and compares them with other work." },
      { type: "mcq", q: "Which is a recognised referencing style?", options: ["APGAR", "APA", "RAM", "IRB"], answer: 1, rationale: "APA (like Vancouver and Harvard) is a standard referencing style." },
      { type: "mcq", q: "Putting research findings into actual practice to improve care is called research:", options: ["Sampling", "Utilization", "Coding", "Editing"], answer: 1, rationale: "Research utilization means applying findings to improve practice." },
      { type: "mcq", q: "Which is a method of disseminating research findings?", options: ["Hiding the report", "Publication in a journal", "Deleting the data", "Ignoring the results"], answer: 1, rationale: "Publishing in journals is a key way to disseminate findings." },
      { type: "mcq", q: "Which is a barrier to research utilization in nursing?", options: ["Lack of time and heavy workload", "Too many journals available", "Excess authority to change practice", "Strong statistical skills"], answer: 0, rationale: "Lack of time and workload are well-known barriers to using research." },
      { type: "mcq", q: "Evidence-based practice combines best evidence, clinical expertise and:", options: ["Patient values and preferences", "The cheapest option", "The manager's order", "Random choice"], answer: 0, rationale: "EBP integrates best evidence, clinical expertise and patient values." }
      , { type: "fill", q: "The standard report structure of Introduction, Methods, Results and Discussion is known as ____.", accept: ["IMRAD", "imrad"], rationale: "IMRAD names the four main sections of a scientific report." }
      , { type: "fill", q: "Putting research findings into actual nursing practice to improve care is called research ____.", accept: ["utilization", "utilisation"], rationale: "Research utilization applies findings to practice." }
    ]
  }
];
