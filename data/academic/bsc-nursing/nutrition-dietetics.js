/* ============================================================
   B.Sc. in Nursing (2018) · B231 Fundamentals of Nursing-2,
   Paper II — Nutrition & Dietetics (Year 2). — 16 topics,
   degree level. Aligned to the BNMC 4-year B.Sc. syllabus
   (foundations of nutrition & the nutrition care process;
   macro- & micronutrients; energy metabolism; balanced diet &
   RDA; ABCD nutritional assessment; life-cycle nutrition;
   therapeutic/modified diets; diet in disease; enteral &
   parenteral nutrition; malnutrition; food hygiene & national
   nutrition programmes in Bangladesh). Grounded in:
     • Srilakshmi B. Dietetics. New Age International.
     • Mahan LK, Raymond JL. Krause's Food & the Nutrition Care
       Process. Elsevier.
     • Park K. Park's Textbook of Preventive and Social Medicine.
       Bhanot.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_NUT = [
  "Srilakshmi B. Dietetics. New Age International.",
  "Mahan LK, Raymond JL. Krause's Food & the Nutrition Care Process. Elsevier.",
  "Park K. Park's Textbook of Preventive and Social Medicine. Bhanot."
];

window.Academic.topics["bsc-nursing/nutrition-dietetics"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "nut-01-intro-ncp",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Introduction to Nutrition & the Nutrition Care Process",
    readMinutes: 24,
    summary: "Core concepts of food, nutrition, nutrients and dietetics at degree level; functions of food; classification of nutrients; nutritional status and the determinants of nutrition; and Krause's four-step Nutrition Care Process (NCP) with its role in evidence-based nursing practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key definitions", list: [
        "Food — any solid or liquid substance that, when eaten, digested and absorbed, nourishes the body by providing energy, building and repairing tissues, and regulating body processes.",
        "Nutrition — the science of food and its relationship to health; it studies how the body ingests, digests, absorbs, transports, utilises and excretes food substances, and how these processes affect health and disease.",
        "Nutrient — a chemical constituent of food (carbohydrate, protein, fat, vitamin, mineral or water) that the body requires for energy, growth, maintenance and regulation.",
        "Essential nutrient — one that the body cannot synthesise in adequate amounts and must obtain from the diet (e.g. essential amino acids, essential fatty acids, vitamins, minerals, water).",
        "Dietetics — the science and art of applying the principles of nutrition to the feeding of individuals and groups in health and disease.",
        "Diet — the total food and drink habitually consumed by a person or group."
      ] },
      { h: "Functions of food", p: "Food serves overlapping purposes; most foods perform more than one function simultaneously. Understanding these functions helps the nurse justify why balanced intake is essential.", list: [
        "Physiological (body) functions — energy for work and heat, building and repair of tissues for growth and healing, and regulation of body processes such as fluid balance, acid-base balance and metabolism.",
        "Psychological functions — satisfaction, comfort and emotional security; food meets affective as well as physical needs.",
        "Social and cultural functions — expressing identity, religion, hospitality and custom through shared meals, festival foods and rituals."
      ] },
      { h: "Classification of nutrients", p: "Nutrients are grouped by the quantity the body needs daily. Macronutrients are required in gram amounts and yield energy; micronutrients are required in milligram/microgram amounts and have regulatory and protective roles; water is an essential non-energy constituent.", figure: {
        caption: "Classification of nutrients into energy-yielding macronutrients and regulatory micronutrients, with water as an essential constituent.",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of nutrients."><rect x="200" y="10" width="160" height="40" rx="8" fill="#0F4C3A"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#F0FDF4">NUTRIENTS</text><rect x="20" y="95" width="170" height="40" rx="8" fill="#15803D"/><text x="105" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">Macronutrients</text><rect x="370" y="95" width="170" height="40" rx="8" fill="#15803D"/><text x="455" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">Micronutrients</text><line x1="280" y1="50" x2="105" y2="93" stroke="#0F4C3A" stroke-width="2"/><line x1="280" y1="50" x2="455" y2="93" stroke="#0F4C3A" stroke-width="2"/><rect x="10" y="165" width="120" height="34" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="70" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Carbohydrate</text><rect x="135" y="165" width="60" height="34" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="165" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Protein</text><rect x="200" y="165" width="55" height="34" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="227" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Fat</text><rect x="375" y="165" width="75" height="34" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="412" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Vitamins</text><rect x="455" y="165" width="85" height="34" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="497" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Minerals</text><rect x="205" y="215" width="150" height="30" rx="6" fill="#22C55E"/><text x="280" y="235" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Water (essential)</text></svg>'
      } },
      { h: "Macronutrients and their energy value", list: [
        "Carbohydrate — chief and cheapest energy source, yielding approximately 4 kcal/g (17 kJ/g).",
        "Protein — builds and repairs tissue and, when in excess or when energy is short, yields approximately 4 kcal/g.",
        "Fat — most concentrated energy store at approximately 9 kcal/g (37 kJ/g) and carrier of fat-soluble vitamins.",
        "Alcohol (not a nutrient) — yields approximately 7 kcal/g but provides 'empty' calories."
      ] },
      { h: "Micronutrients and water", list: [
        "Vitamins — organic compounds needed in tiny amounts to regulate metabolism; fat-soluble (A, D, E, K) or water-soluble (B-complex, C).",
        "Minerals — inorganic elements; macrominerals (Ca, P, Na, K, Mg) needed in >100 mg/day and trace elements (Fe, I, Zn, Cu, Se, F) in smaller amounts.",
        "Water — no energy value but essential for every process; about 60% of adult body weight."
      ] },
      { h: "Nutritional status and its determinants", p: "Nutritional status is the condition of the body resulting from the intake, absorption and utilisation of nutrients. Optimum nutrition means intake matches requirement; undernutrition and overnutrition are both forms of malnutrition. Determinants operate at several levels.", list: [
        "Immediate — dietary intake and health/disease status (infection increases needs and losses).",
        "Underlying — household food security, care for mothers and children, and access to health services and a healthy environment.",
        "Basic — economic, political, social and cultural factors, education and resources (UNICEF conceptual framework of malnutrition)."
      ] },
      { h: "The Nutrition Care Process (NCP)", p: "Krause defines the NCP as a systematic, standardised, four-step problem-solving method that dietitians and nurses use to deliver individualised, evidence-based nutrition care. It parallels the nursing process and provides a common structure and language.", figure: {
        caption: "The four steps of the Nutrition Care Process (NCP): Assessment → Diagnosis → Intervention → Monitoring & Evaluation, forming a continuous cycle.",
        svg: '<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four steps of the Nutrition Care Process."><defs><marker id="nutArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="70" width="120" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="70" y="95" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">1. Nutrition</text><text x="70" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Assessment</text><rect x="155" y="70" width="120" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="215" y="95" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">2. Nutrition</text><text x="215" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Diagnosis</text><rect x="300" y="70" width="120" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="360" y="95" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">3. Nutrition</text><text x="360" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Intervention</text><rect x="445" y="70" width="125" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="507" y="95" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">4. Monitoring</text><text x="507" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">&amp; Evaluation</text><line x1="130" y1="100" x2="151" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#nutArr1)"/><line x1="275" y1="100" x2="296" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#nutArr1)"/><line x1="420" y1="100" x2="441" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#nutArr1)"/><path d="M507 130 L507 160 L70 160 L70 132" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#nutArr1)"/></svg>'
      } },
      { h: "Step 1 — Nutrition assessment", p: "Systematic collection and interpretation of data using the ABCD approach — Anthropometric, Biochemical, Clinical and Dietary — plus client history and environment. Data are compared against standards and criteria to identify nutrition problems." },
      { h: "Step 2 — Nutrition diagnosis", p: "Identification and labelling of a specific nutrition problem the professional is responsible for treating, written as a PES statement: Problem (the diagnostic label) related to Etiology (cause) as evidenced by Signs/Symptoms (defining data). Example: 'Inadequate oral intake related to poor appetite as evidenced by consuming <50% of meals.'" },
      { h: "Step 3 — Nutrition intervention", p: "Planned actions to resolve the diagnosis: food/nutrient delivery (diet modification, supplements, enteral/parenteral support), nutrition education, nutrition counselling and coordination of care. Goals are set collaboratively and are measurable." },
      { h: "Step 4 — Nutrition monitoring & evaluation", p: "Determining progress by re-measuring outcome indicators (e.g. weight, intake, biochemical markers) and comparing them with goals; the cycle then repeats, revising the plan as needed." },
      { h: "Relevance to nursing practice", p: "Nutrition is integral to nursing. The nurse screens for nutritional risk on admission, participates in each NCP step alongside the dietitian, assists with feeding, records intake/output, delivers nutrition education, and evaluates response. Good nutrition accelerates wound healing, strengthens immunity, reduces complications and shortens hospital stay." },
      { h: "Normal values / key figures", list: [
        "Energy from macronutrients: carbohydrate ~4 kcal/g, protein ~4 kcal/g, fat ~9 kcal/g, alcohol ~7 kcal/g.",
        "Body water: ~60% of body weight in adult men, ~50–55% in women.",
        "Acceptable macronutrient distribution (of total energy): carbohydrate 50–65%, fat 20–30%, protein 10–15%."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Define food, nutrition, nutrient, essential nutrient and dietetics.",
      "Describe the four steps of the Nutrition Care Process and relate them to the nursing process.",
      "Write a nutrition diagnosis in PES format and explain each component.",
      "Explain the determinants of nutritional status using the UNICEF conceptual framework.",
      "Classify nutrients and state the energy value of each energy-yielding nutrient."
    ],
    assessment: [
      { type: "mcq", q: "A patient's chart reads: 'Inadequate protein-energy intake related to reduced appetite as evidenced by 6% weight loss in one month.' This is an example of:", options: ["A nursing intervention", "A PES nutrition diagnosis statement", "A nutrition assessment", "A monitoring indicator"], answer: 1, rationale: "The statement follows Problem–Etiology–Signs/Symptoms format, the standard for a nutrition diagnosis." },
      { type: "mcq", q: "The correct sequence of the Nutrition Care Process is:", options: ["Diagnosis → Assessment → Intervention → Evaluation", "Assessment → Diagnosis → Intervention → Monitoring & Evaluation", "Intervention → Assessment → Diagnosis → Evaluation", "Assessment → Intervention → Diagnosis → Evaluation"], answer: 1, rationale: "Krause's NCP proceeds assessment, diagnosis, intervention, then monitoring and evaluation, forming a cycle." },
      { type: "mcq", q: "Which nutrient yields the most energy per gram?", options: ["Carbohydrate", "Protein", "Fat", "Alcohol"], answer: 2, rationale: "Fat provides ~9 kcal/g, more than protein/carbohydrate (~4) and alcohol (~7)." },
      { type: "mcq", q: "In the UNICEF framework, household food insecurity is best classified as a/an ____ cause of malnutrition.", options: ["Immediate", "Underlying", "Basic", "Genetic"], answer: 1, rationale: "Food security, care and health services are the underlying causes; intake and disease are immediate; socio-economic factors are basic." },
      { type: "mcq", q: "An 'essential' nutrient is one that:", options: ["Provides the most calories", "Cannot be synthesised in adequate amounts and must come from diet", "Is only needed during illness", "Is stored in unlimited amounts"], answer: 1, rationale: "Essential nutrients cannot be made by the body in sufficient quantity and must be supplied by food." },
      { type: "mcq", q: "The step of the NCP in which outcome indicators are re-measured and compared with goals is:", options: ["Assessment", "Diagnosis", "Intervention", "Monitoring & evaluation"], answer: 3, rationale: "Monitoring and evaluation determine progress toward the stated nutrition goals." },
      { type: "mcq", q: "Sharing festival foods to express religion and hospitality illustrates which function of food?", options: ["Physiological", "Social and cultural", "Regulatory", "Energy-yielding"], answer: 1, rationale: "Custom, religion and hospitality expressed through food are social and cultural functions." },
      { type: "mcq", q: "Which best describes the ABCD approach used in NCP assessment?", options: ["Airway, Breathing, Circulation, Disability", "Anthropometric, Biochemical, Clinical, Dietary", "Assess, Balance, Compute, Deliver", "Adequacy, Balance, Calorie, Density"], answer: 1, rationale: "Nutritional assessment collects Anthropometric, Biochemical, Clinical and Dietary data." },
      { type: "mcq", q: "Water is classed as an essential nutrient chiefly because it:", options: ["Provides 4 kcal/g", "Is a fat-soluble vitamin", "Is required for every body process yet cannot be stored in surplus", "Replaces the need for minerals"], answer: 2, rationale: "Water yields no energy but is indispensable for metabolism, transport and thermoregulation." },
      { type: "mcq", q: "Approximately what percentage of total energy should come from carbohydrate in a balanced diet?", options: ["10–15%", "20–30%", "50–65%", "70–85%"], answer: 2, rationale: "The acceptable range for carbohydrate is roughly 50–65% of total energy intake." }
      , { type: "fill", q: "In a nutrition diagnosis, the abbreviation PES stands for Problem, ____ and Signs/symptoms.", accept: ["etiology", "aetiology"], rationale: "The etiology (cause) links the problem to the evidence in a PES statement." }
      , { type: "fill", q: "Anthropometric, Biochemical, Clinical and Dietary data together make up the ____ approach to nutritional assessment.", accept: ["ABCD"], rationale: "ABCD is the mnemonic for the four categories of nutritional assessment data." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "nut-02-carbohydrates",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Carbohydrates",
    readMinutes: 24,
    summary: "Definition and classification of carbohydrates (mono-, di-, oligo- and polysaccharides); dietary sources; digestion, absorption and metabolism; functions; the glycaemic index; dietary fibre; requirements; and clinical relevance including diabetes, lactose intolerance and dental caries.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Carbohydrates are organic compounds of carbon, hydrogen and oxygen (general formula Cn(H2O)n) that serve as the body's chief and most economical source of energy. They are synthesised by green plants through photosynthesis." },
      { h: "Classification", p: "Carbohydrates are classified by the number of sugar (saccharide) units they contain.", figure: {
        caption: "Classification of carbohydrates by number of saccharide units, with common dietary examples.",
        svg: '<svg viewBox="0 0 580 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of carbohydrates."><rect x="210" y="8" width="160" height="36" rx="8" fill="#0F4C3A"/><text x="290" y="31" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#F0FDF4">CARBOHYDRATES</text><rect x="15" y="90" width="120" height="36" rx="7" fill="#15803D"/><text x="75" y="113" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Monosaccharide</text><rect x="150" y="90" width="120" height="36" rx="7" fill="#15803D"/><text x="210" y="113" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Disaccharide</text><rect x="300" y="90" width="120" height="36" rx="7" fill="#15803D"/><text x="360" y="113" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Oligosaccharide</text><rect x="440" y="90" width="120" height="36" rx="7" fill="#15803D"/><text x="500" y="113" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Polysaccharide</text><line x1="290" y1="44" x2="75" y2="88" stroke="#0F4C3A" stroke-width="1.5"/><line x1="290" y1="44" x2="210" y2="88" stroke="#0F4C3A" stroke-width="1.5"/><line x1="290" y1="44" x2="360" y2="88" stroke="#0F4C3A" stroke-width="1.5"/><line x1="290" y1="44" x2="500" y2="88" stroke="#0F4C3A" stroke-width="1.5"/><rect x="15" y="160" width="120" height="60" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="75" y="182" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Glucose</text><text x="75" y="198" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Fructose</text><text x="75" y="214" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Galactose</text><rect x="150" y="160" width="120" height="60" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="210" y="182" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Sucrose</text><text x="210" y="198" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Lactose</text><text x="210" y="214" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Maltose</text><rect x="300" y="160" width="120" height="60" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="360" y="188" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Raffinose</text><text x="360" y="204" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Stachyose</text><rect x="440" y="160" width="120" height="60" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="500" y="182" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Starch</text><text x="500" y="198" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Glycogen</text><text x="500" y="214" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Cellulose</text></svg>'
      } },
      { h: "Monosaccharides", list: [
        "Glucose (dextrose) — the body's circulating sugar and main cellular fuel; the form all carbohydrate is converted to.",
        "Fructose — the sweetest sugar; found in fruits and honey.",
        "Galactose — released from lactose; converted to glucose in the liver."
      ] },
      { h: "Disaccharides", list: [
        "Sucrose (table sugar) = glucose + fructose; from cane and beet.",
        "Lactose (milk sugar) = glucose + galactose; the least sweet sugar.",
        "Maltose (malt sugar) = glucose + glucose; from starch breakdown."
      ] },
      { h: "Polysaccharides", list: [
        "Starch — the main storage carbohydrate of plants (cereals, roots, tubers); digestible.",
        "Glycogen — the storage carbohydrate of animals, held in liver (~100 g) and muscle (~300–400 g).",
        "Dietary fibre (cellulose, hemicellulose, pectin, gums) — non-digestible; important for gut function.",
        "Dextrins — intermediate products of starch hydrolysis."
      ] },
      { h: "Dietary sources", p: "Cereals (rice, wheat, maize), millets, roots and tubers (potato, sweet potato), pulses, sugars and jaggery, fruits, milk (lactose) and vegetables. In Bangladesh, rice supplies the bulk of dietary energy." },
      { h: "Digestion, absorption and metabolism (step-by-step)", list: [
        "Mouth — salivary amylase (ptyalin) begins starch hydrolysis to dextrins and maltose.",
        "Stomach — amylase is inactivated by acid; little carbohydrate digestion occurs.",
        "Small intestine — pancreatic amylase completes starch digestion to maltose; brush-border enzymes (maltase, sucrase, lactase) split disaccharides into monosaccharides.",
        "Absorption — glucose and galactose absorbed by active transport (SGLT1, sodium-dependent), fructose by facilitated diffusion (GLUT5); carried by the portal vein to the liver.",
        "Metabolism — glucose is oxidised (glycolysis + Krebs cycle) for ATP, stored as glycogen (glycogenesis), or converted to fat (lipogenesis) when in excess."
      ] },
      { h: "Functions", list: [
        "Chief energy source — 1 g yields ~4 kcal; the brain and red cells depend almost entirely on glucose.",
        "Protein-sparing action — adequate carbohydrate prevents protein being burned for energy.",
        "Prevents ketosis — carbohydrate is needed for complete fat oxidation ('fat burns in the flame of carbohydrate').",
        "Energy reserve — stored as glycogen for short-term needs.",
        "Structural and functional roles — ribose in nucleic acids, glycoproteins, lactose in milk.",
        "Dietary fibre — adds bulk, aids bowel regularity, lowers cholesterol and slows glucose absorption."
      ] },
      { h: "Glycaemic index (GI)", p: "The glycaemic index ranks a carbohydrate food by how much it raises blood glucose over 2 hours compared with a reference (glucose = 100). Low-GI foods (≤55: legumes, whole grains, most fruits) cause a slower, smaller rise and are preferred in diabetes and weight control; high-GI foods (≥70: white bread, white rice, sugar) raise glucose sharply. Glycaemic load (GL) accounts for the amount eaten as well." },
      { h: "Requirements", p: "Carbohydrate should provide about 50–65% of total daily energy. Free (added) sugars should be limited to <10% (ideally <5%) of energy. A minimum of ~100–130 g/day is required to prevent ketosis and supply the brain." },
      { h: "Clinical relevance", list: [
        "Diabetes mellitus — carbohydrate quantity, type and distribution (carbohydrate counting, low-GI choices) are central to glycaemic control.",
        "Lactose intolerance — lactase deficiency causes bloating, cramps and diarrhoea after milk; managed with lactose-free products or lactase.",
        "Dental caries — frequent sugar exposure feeds acid-producing oral bacteria.",
        "Hypoglycaemia — blood glucose <70 mg/dL causes sweating, tremor and confusion; treat with rapid oral glucose (15 g).",
        "Galactosaemia — inherited inability to metabolise galactose; requires a lactose-free diet."
      ] },
      { h: "Nursing management", list: [
        "Teach diabetic patients carbohydrate counting, portion control and low-GI food choices.",
        "Recognise and promptly treat hypoglycaemia; monitor blood glucose.",
        "Advise limiting free sugars and sugary drinks to protect against caries and obesity.",
        "Ensure adequate carbohydrate in fasting/NPO patients (IV dextrose) to prevent ketosis.",
        "Educate on dietary fibre for constipation, and identify lactose intolerance from a dietary history."
      ] },
      { h: "Normal values / key figures", list: [
        "Fasting blood glucose: 70–100 mg/dL (3.9–5.6 mmol/L).",
        "Diabetes diagnostic thresholds: fasting ≥126 mg/dL; HbA1c ≥6.5%; 2-h post-load ≥200 mg/dL.",
        "Liver glycogen ~100 g; muscle glycogen ~300–400 g.",
        "Energy from carbohydrate: ~4 kcal/g."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Classify carbohydrates with examples of each class.",
      "Describe the digestion and absorption of carbohydrates step by step.",
      "Explain the functions of carbohydrates, including the protein-sparing and anti-ketogenic actions.",
      "Define glycaemic index and glycaemic load and discuss their use in diabetes.",
      "Discuss the nursing management of a patient with lactose intolerance and one with hypoglycaemia."
    ],
    assessment: [
      { type: "mcq", q: "A patient reports bloating and diarrhoea after drinking milk but tolerates yoghurt. The most likely cause is deficiency of which brush-border enzyme?", options: ["Sucrase", "Lactase", "Maltase", "Amylase"], answer: 1, rationale: "Lactase deficiency causes undigested lactose to ferment in the colon, producing gas and osmotic diarrhoea." },
      { type: "mcq", q: "Which monosaccharide is the body's main circulating fuel and the form to which other sugars are converted?", options: ["Fructose", "Galactose", "Glucose", "Ribose"], answer: 2, rationale: "Glucose is the primary blood sugar and cellular energy source." },
      { type: "mcq", q: "The 'protein-sparing' action of carbohydrate means that adequate carbohydrate:", options: ["Increases protein excretion", "Prevents protein from being used as an energy source", "Converts protein to fat", "Blocks protein digestion"], answer: 1, rationale: "Sufficient carbohydrate supplies energy so dietary and body protein are spared for tissue building." },
      { type: "mcq", q: "White rice has a high glycaemic index. For a patient with type 2 diabetes, the best advice is to:", options: ["Avoid all carbohydrate", "Prefer low-GI foods such as whole grains and legumes", "Eat only high-GI foods", "Replace rice with sugar"], answer: 1, rationale: "Low-GI foods cause a slower, smaller rise in blood glucose, aiding glycaemic control." },
      { type: "mcq", q: "Glucose and galactose are absorbed from the small intestine mainly by:", options: ["Simple diffusion", "Sodium-dependent active transport (SGLT1)", "Pinocytosis", "Facilitated diffusion via GLUT5"], answer: 1, rationale: "SGLT1 co-transports glucose/galactose with sodium; fructose uses GLUT5 by facilitated diffusion." },
      { type: "mcq", q: "Sucrose is composed of:", options: ["Glucose + glucose", "Glucose + galactose", "Glucose + fructose", "Fructose + galactose"], answer: 2, rationale: "Sucrose is a disaccharide of glucose and fructose." },
      { type: "mcq", q: "The statement 'fat burns in the flame of carbohydrate' refers to carbohydrate's role in:", options: ["Preventing ketosis by allowing complete fat oxidation", "Increasing fat storage", "Blocking fat absorption", "Raising blood cholesterol"], answer: 0, rationale: "Adequate carbohydrate is required for complete oxidation of fat, preventing ketone accumulation." },
      { type: "mcq", q: "A minimum daily carbohydrate intake of about 100–130 g is recommended mainly to:", options: ["Prevent scurvy", "Supply glucose to the brain and prevent ketosis", "Provide fibre", "Raise blood pressure"], answer: 1, rationale: "The brain relies on glucose; too little carbohydrate forces fat breakdown and ketone production." },
      { type: "mcq", q: "The storage form of carbohydrate in the human liver and muscle is:", options: ["Starch", "Cellulose", "Glycogen", "Dextrin"], answer: 2, rationale: "Glycogen is the animal storage polysaccharide, stored in liver and muscle." },
      { type: "mcq", q: "A fasting blood glucose repeatedly measured at 140 mg/dL indicates:", options: ["Hypoglycaemia", "Normal glucose", "Diabetes (fasting ≥126 mg/dL)", "Ketosis"], answer: 2, rationale: "A fasting glucose ≥126 mg/dL on more than one occasion meets the diagnostic threshold for diabetes." }
      , { type: "fill", q: "The disaccharide found in milk, made of glucose and galactose, is ____.", accept: ["lactose"], rationale: "Lactose (milk sugar) is hydrolysed by lactase into glucose and galactose." }
      , { type: "fill", q: "The ranking of a carbohydrate food by its effect on blood glucose, with glucose = 100, is called the ____ index.", accept: ["glycaemic", "glycemic"], rationale: "The glycaemic index compares a food's blood-glucose response with that of pure glucose." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "nut-03-proteins",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Proteins",
    readMinutes: 25,
    summary: "Definition and amino-acid basis of proteins; essential vs non-essential amino acids; classification by quality; sources; digestion, absorption and nitrogen balance; functions; biological value and protein quality; requirements; and clinical relevance including protein-energy malnutrition and protein needs in illness.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Proteins are complex nitrogen-containing organic compounds built from amino acids joined by peptide bonds. Besides carbon, hydrogen and oxygen they contain nitrogen (~16%) and often sulphur. Nitrogen is the element that distinguishes protein from carbohydrate and fat." },
      { h: "Amino acids", p: "About 20 amino acids form body proteins. They are the building blocks; the sequence and folding determine each protein's function.", list: [
        "Essential (indispensable) amino acids — cannot be synthesised by the body and must come from food. Nine are essential: histidine, isoleucine, leucine, lysine, methionine, phenylalanine, threonine, tryptophan, valine.",
        "Non-essential (dispensable) amino acids — can be synthesised by the body (e.g. alanine, glutamine, glycine).",
        "Conditionally essential — needed from diet in certain states (e.g. arginine, glutamine during stress or in preterm infants)."
      ] },
      { h: "Classification by nutritive quality", list: [
        "Complete (high-biological-value) proteins — supply all essential amino acids in adequate proportion (egg, milk, meat, fish, soya).",
        "Partially complete — supply essential amino acids but some in inadequate amounts (most cereals and pulses); support maintenance but not optimal growth alone.",
        "Incomplete — lack one or more essential amino acids (e.g. gelatin, maize deficient in lysine and tryptophan).",
        "Reference protein — egg protein, used as the standard against which quality is compared."
      ] },
      { h: "Complementary proteins (mutual supplementation)", p: "Combining foods whose limiting amino acids differ raises overall protein quality. Cereals are low in lysine but adequate in methionine; pulses are the reverse. A cereal-pulse mix (rice + dal, khichuri) provides a complete amino-acid pattern — a key principle for vegetarian and low-cost diets in Bangladesh." },
      { h: "Dietary sources", p: "Animal sources (egg, milk, fish, meat, poultry) provide high-quality protein. Plant sources (pulses, legumes, soya, nuts, cereals) are important, cheaper and dominant in Bangladeshi diets; combining them improves quality." },
      { h: "Digestion, absorption and metabolism (step-by-step)", list: [
        "Stomach — HCl denatures protein and activates pepsinogen to pepsin, which begins breakdown to polypeptides.",
        "Small intestine — pancreatic proteases (trypsin, chymotrypsin, carboxypeptidase) and brush-border peptidases split peptides to amino acids and small peptides.",
        "Absorption — amino acids are absorbed by active transport into the portal blood and carried to the liver.",
        "Metabolism — amino acids enter the amino-acid pool for protein synthesis, or are deaminated (amino group removed, forming urea excreted by the kidney) with the carbon skeleton used for energy or converted to glucose/fat."
      ] },
      { h: "Nitrogen balance", p: "Because protein is ~16% nitrogen, protein status is assessed by nitrogen balance = nitrogen intake − nitrogen loss.", list: [
        "Positive balance — intake exceeds loss; seen in growth, pregnancy, and recovery/tissue building.",
        "Negative balance — loss exceeds intake; seen in starvation, fever, burns, trauma, immobility and uncontrolled diabetes; indicates tissue breakdown.",
        "Equilibrium (zero balance) — intake equals loss; the normal state of a healthy adult."
      ] },
      { h: "Functions", list: [
        "Body-building — growth and repair of all tissues (muscle, skin, organs, blood).",
        "Formation of regulatory and functional compounds — enzymes, many hormones (insulin), antibodies, haemoglobin, plasma proteins.",
        "Maintenance of colloid osmotic (oncotic) pressure — plasma albumin holds fluid in vessels; low albumin causes oedema.",
        "Acid-base and fluid balance — proteins act as buffers.",
        "Energy — yields ~4 kcal/g when carbohydrate and fat are insufficient.",
        "Transport and storage — carrier proteins move lipids, iron, drugs and vitamins."
      ] },
      { h: "Assessing protein quality", list: [
        "Biological Value (BV) — proportion of absorbed nitrogen retained by the body; egg ~100, milk ~85.",
        "Protein Efficiency Ratio (PER) — weight gain per gram of protein eaten.",
        "Net Protein Utilisation (NPU) — proportion of ingested nitrogen retained (digestibility × BV).",
        "PDCAAS / DIAAS — amino-acid-score-based measures of protein quality."
      ] },
      { h: "Requirements", p: "The safe intake for a healthy adult is about 0.8–1.0 g of good-quality protein per kg body weight per day. Needs rise in pregnancy (+extra), lactation, infancy, childhood, and during illness/stress (1.2–2.0 g/kg in trauma, burns, sepsis). Protein should supply ~10–15% of total energy." },
      { h: "Clinical relevance", list: [
        "Protein-energy malnutrition (PEM) — kwashiorkor (protein deficiency: oedema, fatty liver, skin/hair changes) and marasmus (energy + protein deficiency: severe wasting).",
        "Hypoalbuminaemia — causes oedema and impairs wound healing and drug binding.",
        "Increased needs — burns, sepsis, surgery, pressure injuries and dialysis raise protein requirement.",
        "Restricted needs — advanced chronic kidney disease and hepatic encephalopathy may require controlled protein.",
        "Inborn errors — phenylketonuria (PKU) requires a phenylalanine-restricted diet."
      ] },
      { h: "Nursing management", list: [
        "Identify patients at risk of protein deficiency (poor intake, wounds, burns, elderly, chronic illness).",
        "Provide/encourage high-biological-value protein and cereal-pulse combinations affordably.",
        "Monitor serum albumin/pre-albumin, weight, wound healing and nitrogen balance where ordered.",
        "Adjust protein up for healing/stress and down when medically indicated (renal/hepatic), per dietitian.",
        "Educate families on low-cost complete-protein combinations for children and pregnant women."
      ] },
      { h: "Normal values / key figures", list: [
        "Serum total protein: 6.0–8.3 g/dL; serum albumin: 3.5–5.0 g/dL.",
        "Protein is ~16% nitrogen (1 g nitrogen ≈ 6.25 g protein).",
        "Adult RDA (safe intake): ~0.8–1.0 g/kg/day; illness 1.2–2.0 g/kg/day.",
        "Energy from protein: ~4 kcal/g; BV of egg ~100."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Define protein and classify amino acids into essential, non-essential and conditionally essential.",
      "Explain complementary proteins and give an example relevant to Bangladeshi diets.",
      "Describe nitrogen balance and the conditions that produce positive and negative balance.",
      "Discuss the methods used to assess protein quality (BV, NPU, PER, PDCAAS).",
      "Explain the protein requirements and nursing management of a patient recovering from burns."
    ],
    assessment: [
      { type: "mcq", q: "A vegetarian client eats only rice. To improve protein quality most cheaply, the nurse should advise adding:", options: ["More rice", "Pulses/dal (complementary protein)", "Sugar", "Cooking oil"], answer: 1, rationale: "Cereals are low in lysine and pulses low in methionine; combined they provide a complete amino-acid pattern." },
      { type: "mcq", q: "A patient with extensive burns is in negative nitrogen balance. This means:", options: ["Intake exceeds loss", "Nitrogen loss exceeds intake, indicating tissue breakdown", "The patient is growing", "Nitrogen intake equals loss"], answer: 1, rationale: "Burns cause catabolism, so nitrogen loss exceeds intake — a negative balance requiring increased protein." },
      { type: "mcq", q: "Which element distinguishes protein from carbohydrate and fat?", options: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"], answer: 2, rationale: "Proteins contain nitrogen (~16%), which carbohydrate and fat lack." },
      { type: "mcq", q: "Egg protein has a biological value of about 100 because it:", options: ["Has the most calories", "Supplies all essential amino acids in ideal proportion and is well retained", "Contains no fat", "Is a plant protein"], answer: 1, rationale: "Egg is the reference protein with an ideal essential-amino-acid pattern and high retention." },
      { type: "mcq", q: "Low serum albumin in a malnourished patient most directly causes:", options: ["Hypertension", "Oedema due to reduced oncotic pressure", "Polycythaemia", "Hyperglycaemia"], answer: 1, rationale: "Albumin maintains plasma oncotic pressure; when low, fluid leaks into tissues causing oedema." },
      { type: "mcq", q: "Which of the following is an essential amino acid?", options: ["Alanine", "Glycine", "Lysine", "Glutamine"], answer: 2, rationale: "Lysine is essential and cannot be synthesised; the others are non-essential/conditionally essential." },
      { type: "mcq", q: "The nitrogen removed when an amino acid is deaminated is chiefly excreted as:", options: ["Glucose", "Urea in urine", "Carbon dioxide", "Bile"], answer: 1, rationale: "Deamination forms ammonia, converted to urea in the liver and excreted by the kidneys." },
      { type: "mcq", q: "A child with oedema, an enlarged fatty liver, skin depigmentation and 'flag sign' hair most likely has:", options: ["Marasmus", "Kwashiorkor", "Scurvy", "Rickets"], answer: 1, rationale: "These are classic features of kwashiorkor, a protein-deficiency form of PEM." },
      { type: "mcq", q: "The safe protein intake for a healthy adult is approximately:", options: ["0.1 g/kg/day", "0.8–1.0 g/kg/day", "3.0 g/kg/day", "5.0 g/kg/day"], answer: 1, rationale: "About 0.8–1.0 g/kg/day of good-quality protein meets healthy-adult needs." },
      { type: "mcq", q: "In which condition would a nurse expect a therapeutically REDUCED protein prescription?", options: ["Wound healing", "Pregnancy", "Advanced chronic kidney disease", "Childhood growth"], answer: 2, rationale: "Protein may be controlled in advanced CKD/hepatic encephalopathy; the others need increased protein." }
      , { type: "fill", q: "Combining cereals and pulses to supply all essential amino acids is called protein ____ (mutual supplementation).", accept: ["complementation", "complementarity"], rationale: "Complementary proteins provide each other's limiting amino acids." }
      , { type: "fill", q: "Nitrogen ____ = nitrogen intake minus nitrogen loss, and is used to assess protein status.", accept: ["balance"], rationale: "Nitrogen balance indicates whether the body is building (positive) or losing (negative) protein." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "nut-04-fats-lipids",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Fats & Lipids",
    readMinutes: 24,
    summary: "Definition and classification of dietary lipids; fatty acids (saturated, mono- and polyunsaturated, essential fatty acids, trans fats); sources; digestion, absorption and transport (lipoproteins); functions; requirements; and clinical relevance including dyslipidaemia and cardiovascular disease.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Lipids are a group of organic compounds insoluble in water but soluble in organic solvents. Dietary fat is mainly triglycerides (glycerol + three fatty acids); other lipids include phospholipids, sterols (cholesterol) and fat-soluble vitamins." },
      { h: "Classification of lipids", list: [
        "Simple lipids — triglycerides (fats and oils), waxes.",
        "Compound lipids — phospholipids (lecithin), glycolipids, lipoproteins.",
        "Derived lipids — fatty acids, glycerol, sterols (cholesterol)."
      ] },
      { h: "Fatty acids", p: "Fatty acids are the key functional units and are classified by saturation and chain length.", figure: {
        caption: "Classification of dietary fatty acids by degree of saturation, with common food sources.",
        svg: '<svg viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of fatty acids."><rect x="205" y="8" width="170" height="36" rx="8" fill="#0F4C3A"/><text x="290" y="31" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">FATTY ACIDS</text><rect x="30" y="85" width="150" height="38" rx="7" fill="#15803D"/><text x="105" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Saturated</text><text x="105" y="117" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">no double bonds</text><rect x="215" y="85" width="150" height="38" rx="7" fill="#15803D"/><text x="290" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Monounsaturated</text><text x="290" y="117" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">one double bond</text><rect x="400" y="85" width="160" height="38" rx="7" fill="#15803D"/><text x="480" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Polyunsaturated</text><text x="480" y="117" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">many double bonds</text><line x1="290" y1="44" x2="105" y2="83" stroke="#0F4C3A" stroke-width="1.5"/><line x1="290" y1="44" x2="290" y2="83" stroke="#0F4C3A" stroke-width="1.5"/><line x1="290" y1="44" x2="480" y2="83" stroke="#0F4C3A" stroke-width="1.5"/><rect x="30" y="155" width="150" height="50" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="105" y="177" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Ghee, butter,</text><text x="105" y="192" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">coconut, palm</text><rect x="215" y="155" width="150" height="50" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="290" y="177" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Olive, groundnut,</text><text x="290" y="192" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">mustard oil</text><rect x="400" y="155" width="160" height="50" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="480" y="177" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Fish, sunflower,</text><text x="480" y="192" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">soybean oil</text></svg>'
      } },
      { h: "Types of fatty acids", list: [
        "Saturated fatty acids (SFA) — no double bonds; solid at room temperature; from animal fat, ghee, butter, coconut and palm oil; raise LDL cholesterol.",
        "Monounsaturated fatty acids (MUFA) — one double bond (oleic acid); olive, groundnut and mustard oil; cardioprotective.",
        "Polyunsaturated fatty acids (PUFA) — several double bonds; include the essential fatty acids.",
        "Trans fatty acids — produced by hydrogenation (vanaspati, many baked/fried processed foods); raise LDL and lower HDL — the most harmful; should be minimised (<1% energy)."
      ] },
      { h: "Essential fatty acids (EFA)", p: "Linoleic acid (omega-6) and alpha-linolenic acid (omega-3) cannot be synthesised and must be supplied by diet. From them the body makes arachidonic acid, EPA and DHA. Functions: structural component of cell membranes, precursors of prostaglandins, and (DHA) essential for brain and retina. Deficiency causes scaly dermatitis, poor growth and impaired wound healing." },
      { h: "Dietary sources", p: "Visible fats — oils, ghee, butter. Invisible fats — those within cereals, pulses, nuts, milk, egg and meat. Omega-3 sources include oily fish (hilsa, sardine), flaxseed and walnuts, important in Bangladeshi fish-based diets." },
      { h: "Digestion, absorption and transport (step-by-step)", list: [
        "Mouth/stomach — minimal digestion (lingual/gastric lipase).",
        "Small intestine — bile salts emulsify fat into small droplets; pancreatic lipase hydrolyses triglycerides to fatty acids and monoglycerides.",
        "Absorption — these form micelles, are absorbed by intestinal cells, re-formed into triglycerides and packaged into chylomicrons.",
        "Transport — chylomicrons enter the lymphatics, then blood; lipoproteins (VLDL, LDL, HDL) transport lipids around the body."
      ] },
      { h: "Lipoproteins ('good' and 'bad' cholesterol)", list: [
        "Chylomicrons — carry dietary triglyceride from the gut.",
        "VLDL — carry endogenous triglyceride from the liver.",
        "LDL ('bad') — deliver cholesterol to tissues; high LDL promotes atherosclerosis.",
        "HDL ('good') — carry cholesterol from tissues back to the liver (reverse transport); protective."
      ] },
      { h: "Functions of fat", list: [
        "Most concentrated energy source (~9 kcal/g) and long-term energy store as adipose tissue.",
        "Carrier and aid to absorption of fat-soluble vitamins A, D, E, K.",
        "Supplies essential fatty acids and structural membrane lipids.",
        "Insulation and protection of organs; padding beneath skin.",
        "Satiety and palatability — delays gastric emptying, improves taste and texture."
      ] },
      { h: "Requirements", p: "Fat should provide about 20–30% of total energy (visible fat ~20–25 g/day for adults). Saturated fat should be <10% of energy, trans fat <1%, with the balance from MUFA and PUFA. Dietary cholesterol is a smaller concern than saturated/trans fat." },
      { h: "Clinical relevance", list: [
        "Dyslipidaemia — raised LDL/triglycerides and low HDL increase cardiovascular risk.",
        "Atherosclerosis, coronary heart disease and stroke — linked to high SFA/trans-fat intake.",
        "Obesity — excess fat (energy-dense) contributes to weight gain.",
        "Fat malabsorption — pancreatic/biliary disease causes steatorrhoea (pale, fatty, floating stools) and fat-soluble vitamin deficiency.",
        "EFA deficiency — dermatitis and impaired healing, seen in prolonged fat-free feeding."
      ] },
      { h: "Nursing management", list: [
        "Advise replacing saturated/trans fats with MUFA/PUFA and increasing omega-3 (fish) intake.",
        "Teach cardiac and dyslipidaemic patients low-fat cooking, avoiding vanaspati and deep-fried foods.",
        "Monitor lipid profile and support adherence to diet and lipid-lowering therapy.",
        "Recognise steatorrhoea and ensure fat-soluble vitamin supplementation in malabsorption.",
        "Counsel on portion control of visible fats for weight management."
      ] },
      { h: "Normal values / key figures", list: [
        "Energy from fat: ~9 kcal/g.",
        "Desirable total cholesterol <200 mg/dL; LDL <100 mg/dL; HDL >40 mg/dL (men)/>50 (women); triglycerides <150 mg/dL.",
        "Recommended fat intake: 20–30% of energy; SFA <10%; trans fat <1%."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Classify dietary lipids and fatty acids with examples.",
      "Describe the essential fatty acids, their functions and deficiency features.",
      "Explain the digestion, absorption and transport of dietary fat.",
      "Differentiate LDL and HDL cholesterol and their role in cardiovascular disease.",
      "Discuss the dietary advice and nursing management for a patient with dyslipidaemia."
    ],
    assessment: [
      { type: "mcq", q: "A cardiac patient asks which fat is most harmful. The best answer is:", options: ["Monounsaturated fat", "Omega-3 fat", "Trans fat", "Linoleic acid"], answer: 2, rationale: "Trans fats raise LDL and lower HDL, making them the most atherogenic dietary fat." },
      { type: "mcq", q: "HDL cholesterol is called 'good' because it:", options: ["Delivers cholesterol to arteries", "Carries cholesterol from tissues back to the liver", "Raises blood pressure", "Is stored in fat"], answer: 1, rationale: "HDL performs reverse cholesterol transport, removing cholesterol from tissues — a protective role." },
      { type: "mcq", q: "Bile salts assist fat digestion mainly by:", options: ["Hydrolysing triglycerides", "Emulsifying fat into small droplets for lipase to act on", "Absorbing fatty acids", "Producing chylomicrons"], answer: 1, rationale: "Bile emulsifies fat, increasing surface area so pancreatic lipase can hydrolyse it." },
      { type: "mcq", q: "Which are the two essential fatty acids?", options: ["Oleic and stearic acid", "Linoleic (omega-6) and alpha-linolenic (omega-3) acid", "Palmitic and lauric acid", "Arachidonic and oleic acid"], answer: 1, rationale: "Linoleic and alpha-linolenic acids cannot be synthesised and must be supplied by diet." },
      { type: "mcq", q: "A patient with pancreatic disease passes pale, bulky, foul, floating stools. This steatorrhoea indicates:", options: ["Protein malabsorption", "Fat malabsorption", "Carbohydrate intolerance", "Excess bile"], answer: 1, rationale: "Undigested fat in stool (steatorrhoea) reflects fat malabsorption, risking fat-soluble vitamin deficiency." },
      { type: "mcq", q: "Fat provides how much energy per gram?", options: ["4 kcal", "7 kcal", "9 kcal", "2 kcal"], answer: 2, rationale: "Fat is the most concentrated energy source at ~9 kcal/g." },
      { type: "mcq", q: "Dietary fat is required for the absorption of which vitamins?", options: ["B and C", "A, D, E and K", "C and folate", "B12 only"], answer: 1, rationale: "Fat is the carrier for the fat-soluble vitamins A, D, E and K." },
      { type: "mcq", q: "Which oil is richest in cardioprotective monounsaturated fat?", options: ["Coconut oil", "Vanaspati", "Olive/mustard oil", "Butter"], answer: 2, rationale: "Olive and mustard oils are high in monounsaturated (oleic) fat; coconut, vanaspati and butter are high in saturated/trans fat." },
      { type: "mcq", q: "The recommended proportion of total energy from fat in a balanced diet is about:", options: ["5–10%", "20–30%", "40–50%", "60–70%"], answer: 1, rationale: "Fat should supply roughly 20–30% of energy, with saturated fat under 10%." },
      { type: "mcq", q: "Dietary triglycerides absorbed from the gut are first transported in the lymph as:", options: ["LDL", "HDL", "Chylomicrons", "Albumin"], answer: 2, rationale: "Chylomicrons carry newly absorbed dietary triglyceride via the lymphatics into the blood." }
      , { type: "fill", q: "Fatty acids produced by hydrogenation of oils, found in vanaspati and many fried processed foods, are called ____ fats.", accept: ["trans"], rationale: "Trans fats raise LDL and lower HDL and should be minimised." }
      , { type: "fill", q: "The presence of excess undigested fat in the stool is called ____.", accept: ["steatorrhoea", "steatorrhea"], rationale: "Steatorrhoea signals fat malabsorption." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "nut-05-vitamins",
    unit: "Unit 2 · Micronutrients & Regulatory Nutrients",
    title: "Vitamins",
    readMinutes: 25,
    summary: "Definition and classification of vitamins; the fat-soluble vitamins (A, D, E, K) and water-soluble vitamins (B-complex and C) — sources, functions, deficiency and toxicity; requirements; and clinical/nursing relevance of vitamin deficiencies common in Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Vitamins are organic compounds needed in very small (mg or µg) amounts that the body cannot synthesise in adequate quantity. They do not provide energy but act as coenzymes and regulators essential for metabolism, growth and health." },
      { h: "Classification", p: "Vitamins are grouped by solubility, which determines absorption, storage and toxicity risk.", figure: {
        caption: "Classification of vitamins into fat-soluble (A, D, E, K — stored) and water-soluble (B-complex, C — not stored).",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of vitamins."><rect x="200" y="8" width="160" height="36" rx="8" fill="#0F4C3A"/><text x="280" y="31" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#F0FDF4">VITAMINS</text><rect x="40" y="80" width="180" height="42" rx="8" fill="#15803D"/><text x="130" y="99" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Fat-soluble</text><text x="130" y="115" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">A, D, E, K (stored)</text><rect x="340" y="80" width="180" height="42" rx="8" fill="#15803D"/><text x="430" y="99" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Water-soluble</text><text x="430" y="115" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">B-complex, C (not stored)</text><line x1="280" y1="44" x2="130" y2="78" stroke="#0F4C3A" stroke-width="1.5"/><line x1="280" y1="44" x2="430" y2="78" stroke="#0F4C3A" stroke-width="1.5"/><rect x="40" y="150" width="180" height="48" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="130" y="170" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Absorbed with fat; stored</text><text x="130" y="186" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">in liver/fat; toxicity possible</text><rect x="340" y="150" width="180" height="48" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="430" y="170" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Excess excreted in urine;</text><text x="430" y="186" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">need regular daily intake</text></svg>'
      } },
      { h: "Vitamin A (retinol / carotene)", list: [
        "Functions — vision (rhodopsin for dim-light sight), epithelial integrity, immunity, growth.",
        "Sources — liver, egg, milk, fish-liver oil; beta-carotene in dark-green leafy vegetables, carrot, mango, papaya.",
        "Deficiency — night blindness, xerophthalmia, Bitot's spots, keratomalacia (a leading cause of preventable childhood blindness in Bangladesh); increased infection.",
        "Toxicity — headache, hepatotoxicity; teratogenic in pregnancy (high doses)."
      ] },
      { h: "Vitamin D (calciferol)", list: [
        "Functions — promotes calcium and phosphate absorption; bone mineralisation.",
        "Sources — sunlight (skin synthesis), fish-liver oil, egg yolk, fortified foods.",
        "Deficiency — rickets in children (bow legs, delayed fontanelle closure), osteomalacia in adults.",
        "Toxicity — hypercalcaemia, calcification of soft tissues."
      ] },
      { h: "Vitamins E and K", list: [
        "Vitamin E (tocopherol) — antioxidant protecting cell membranes; sources vegetable oils, nuts; deficiency rare (haemolysis in premature infants).",
        "Vitamin K — needed for synthesis of clotting factors (II, VII, IX, X); sources green leafy vegetables and gut bacteria; deficiency causes bleeding; given prophylactically to newborns."
      ] },
      { h: "Water-soluble B-complex vitamins", list: [
        "B1 (thiamine) — coenzyme in carbohydrate metabolism; deficiency: beriberi (wet/dry), Wernicke's encephalopathy.",
        "B2 (riboflavin) — energy metabolism; deficiency: angular stomatitis, glossitis, cheilosis.",
        "B3 (niacin) — deficiency: pellagra (dermatitis, diarrhoea, dementia — the 3 Ds).",
        "B6 (pyridoxine) — amino-acid metabolism; deficiency: peripheral neuritis (e.g. with isoniazid).",
        "B9 (folic acid) — DNA synthesis; deficiency: megaloblastic anaemia, neural-tube defects; needed pre-/peri-conception.",
        "B12 (cobalamin) — with folate for red-cell formation and nerves; deficiency: megaloblastic/pernicious anaemia, neuropathy; needs intrinsic factor for absorption."
      ] },
      { h: "Vitamin C (ascorbic acid)", list: [
        "Functions — collagen synthesis, wound healing, antioxidant, enhances iron absorption, immunity.",
        "Sources — amla (Indian gooseberry), guava, citrus, green vegetables (destroyed by heat).",
        "Deficiency — scurvy (bleeding/spongy gums, poor healing, petechiae, joint pain)."
      ] },
      { h: "Requirements", p: "Requirements vary by age, sex and physiological state. Examples (adult): vitamin A ~600 µg retinol equivalents/day; vitamin C ~40–65 mg/day; thiamine ~1.0–1.4 mg/day; folate ~200–400 µg/day (higher in pregnancy). Needs rise in pregnancy, lactation and illness." },
      { h: "Clinical relevance", list: [
        "Vitamin A deficiency — a major child-health and blindness problem in Bangladesh; targeted by twice-yearly high-dose capsule programmes.",
        "Folate — periconceptional supplementation prevents neural-tube defects.",
        "Vitamin K — routine newborn injection prevents haemorrhagic disease of the newborn.",
        "Vitamin C — enhances non-haem iron absorption; useful advice in iron-deficiency anaemia.",
        "B12/folate — investigate and correctly distinguish before treating megaloblastic anaemia."
      ] },
      { h: "Nursing management", list: [
        "Identify at-risk groups (children, pregnant/lactating women, alcoholics, malabsorption) and screen for deficiency signs.",
        "Administer supplementation programmes (vitamin A capsules, newborn vitamin K, antenatal folate/iron).",
        "Advise correct food preparation to preserve heat-labile vitamins (minimal water, short cooking).",
        "Give thiamine before glucose in suspected deficiency/alcoholism to prevent Wernicke's encephalopathy.",
        "Educate on cheap local vitamin-rich foods (dark leafy greens, guava, amla, seasonal fruits)."
      ] },
      { h: "Preserving vitamins in food", p: "Water-soluble vitamins (especially B-complex and C) and, to a lesser extent, some fat-soluble vitamins are easily destroyed by heat, light, air and prolonged cooking, or lost in discarded cooking water. Practical measures: cook in minimal water, avoid overcooking and repeated reheating, cut vegetables just before cooking, avoid soaking after cutting, use covered pans, and eat some fruits and vegetables raw or lightly cooked." },
      { h: "Normal values / key figures", list: [
        "Vitamin A RDA adult ~600 µg RE/day; child high-dose prophylaxis 100,000–200,000 IU 6-monthly.",
        "Vitamin C adult RDA ~40–65 mg/day.",
        "Folate RDA ~200 µg/day (adult), ~500–600 µg/day (pregnancy).",
        "Fat-soluble vitamins are stored and can be toxic; water-soluble vitamins are excreted and rarely toxic."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Classify vitamins and contrast fat-soluble with water-soluble vitamins.",
      "Describe the functions, sources and deficiency of vitamin A and its public-health importance in Bangladesh.",
      "List the B-complex vitamins with one deficiency disease for each.",
      "Explain the functions and deficiency (scurvy) of vitamin C and its role in iron absorption.",
      "Discuss the nursing role in preventing vitamin A deficiency and neural-tube defects."
    ],
    assessment: [
      { type: "mcq", q: "A 3-year-old presents with night blindness and Bitot's spots. The deficient vitamin is:", options: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"], answer: 1, rationale: "Night blindness, Bitot's spots and xerophthalmia are hallmarks of vitamin A deficiency." },
      { type: "mcq", q: "To improve absorption of iron from a plant-based meal, the nurse should advise taking it with a food rich in:", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], answer: 1, rationale: "Vitamin C reduces ferric to ferrous iron and enhances non-haem iron absorption." },
      { type: "mcq", q: "Why can fat-soluble vitamins cause toxicity more readily than water-soluble ones?", options: ["They are needed in larger amounts", "They are stored in the liver and fat rather than excreted", "They dissolve in urine", "They are made by the body"], answer: 1, rationale: "Fat-soluble vitamins accumulate in body stores; excess water-soluble vitamins are excreted in urine." },
      { type: "mcq", q: "Newborns are routinely given vitamin K to prevent:", options: ["Rickets", "Scurvy", "Haemorrhagic disease of the newborn", "Beriberi"], answer: 2, rationale: "Vitamin K is required for clotting factors; the deficient newborn is at risk of bleeding." },
      { type: "mcq", q: "Pellagra (dermatitis, diarrhoea, dementia) results from deficiency of:", options: ["Thiamine (B1)", "Niacin (B3)", "Folate (B9)", "Cobalamin (B12)"], answer: 1, rationale: "The classic 3 Ds of pellagra indicate niacin (B3) deficiency." },
      { type: "mcq", q: "A woman planning pregnancy should take folic acid mainly to prevent:", options: ["Anaemia only", "Neural-tube defects in the baby", "Night blindness", "Osteomalacia"], answer: 1, rationale: "Periconceptional folate reduces the risk of neural-tube defects such as spina bifida." },
      { type: "mcq", q: "Rickets in children and osteomalacia in adults are caused by deficiency of:", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], answer: 2, rationale: "Vitamin D deficiency impairs calcium absorption and bone mineralisation." },
      { type: "mcq", q: "A patient with chronic alcoholism is at high risk of Wernicke's encephalopathy from deficiency of:", options: ["Vitamin C", "Thiamine (B1)", "Vitamin K", "Vitamin A"], answer: 1, rationale: "Thiamine deficiency causes Wernicke's; thiamine should be given before glucose in such patients." },
      { type: "mcq", q: "Bleeding, spongy gums and poor wound healing suggest deficiency of:", options: ["Vitamin C", "Vitamin A", "Vitamin B12", "Vitamin D"], answer: 0, rationale: "These are features of scurvy, caused by vitamin C deficiency and impaired collagen synthesis." },
      { type: "mcq", q: "Megaloblastic anaemia can result from deficiency of:", options: ["Iron", "Folate or vitamin B12", "Vitamin K", "Calcium"], answer: 1, rationale: "Folate and B12 are needed for DNA synthesis in red-cell precursors; deficiency causes megaloblastic anaemia." }
      , { type: "fill", q: "The eye disease caused by severe vitamin A deficiency, a leading cause of childhood blindness, is ____.", accept: ["xerophthalmia", "keratomalacia"], rationale: "Progressive vitamin A deficiency causes xerophthalmia and, if untreated, keratomalacia." }
      , { type: "fill", q: "Vitamin C deficiency causes the disease ____, with bleeding gums and poor healing.", accept: ["scurvy"], rationale: "Scurvy is the classic vitamin C deficiency disease." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "nut-06-minerals",
    unit: "Unit 2 · Micronutrients & Regulatory Nutrients",
    title: "Minerals",
    readMinutes: 24,
    summary: "Definition and classification of minerals (macrominerals and trace elements); the major minerals calcium, phosphorus, sodium, potassium; and the key trace elements iron, iodine, zinc and fluoride — functions, sources, deficiency and clinical/nursing relevance including anaemia and goitre.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and classification", p: "Minerals are inorganic elements that remain as ash when food is burnt. They provide no energy but build tissues and regulate body functions.", list: [
        "Macrominerals (major) — needed in >100 mg/day: calcium, phosphorus, sodium, potassium, magnesium, chloride, sulphur.",
        "Trace elements (micro) — needed in <100 mg/day: iron, iodine, zinc, copper, selenium, fluoride, manganese, chromium."
      ] },
      { h: "Calcium", list: [
        "Functions — bone and teeth formation (99% of body calcium), blood clotting, muscle contraction, nerve conduction, enzyme activity.",
        "Sources — milk and milk products, small fish eaten with bones, green leafy vegetables, ragi.",
        "Absorption — enhanced by vitamin D and an acid medium; reduced by phytates and oxalates.",
        "Deficiency — rickets/osteomalacia, osteoporosis, tetany (low ionised calcium causes muscle spasm)."
      ] },
      { h: "Phosphorus, magnesium and sulphur", list: [
        "Phosphorus — with calcium in bone; part of ATP, DNA and phospholipids; from milk, meat, cereals.",
        "Magnesium — enzyme cofactor, neuromuscular function; deficiency causes tremor and arrhythmia.",
        "Sulphur — part of some amino acids and vitamins."
      ] },
      { h: "Sodium, potassium and chloride (electrolytes)", list: [
        "Sodium — chief extracellular cation; fluid balance, nerve/muscle function; excess linked to hypertension.",
        "Potassium — chief intracellular cation; nerve/muscle and cardiac function; imbalance is dangerous to the heart.",
        "Chloride — with sodium in fluid balance and gastric HCl."
      ] },
      { h: "Iron", list: [
        "Functions — component of haemoglobin (oxygen transport) and myoglobin; enzyme systems.",
        "Types — haem iron (meat, fish — well absorbed) and non-haem iron (plants — less absorbed; vitamin C aids, phytates hinder).",
        "Sources — liver, meat, egg, green leafy vegetables, pulses, jaggery.",
        "Deficiency — iron-deficiency anaemia (pallor, fatigue, koilonychia, breathlessness) — the commonest deficiency worldwide and highly prevalent in Bangladeshi women and children."
      ] },
      { h: "Iodine", list: [
        "Function — essential for thyroid hormones (T3, T4) that control metabolism and growth.",
        "Sources — iodised salt, sea fish; soil-poor inland areas are deficient.",
        "Deficiency — goitre, hypothyroidism, and in pregnancy cretinism and impaired brain development in the child (Iodine Deficiency Disorders — IDD).",
        "Prevention — universal salt iodisation."
      ] },
      { h: "Zinc and fluoride", list: [
        "Zinc — growth, immunity, wound healing, taste; deficiency causes poor growth, impaired healing and diarrhoea; zinc is given with ORS in childhood diarrhoea.",
        "Fluoride — strengthens tooth enamel against caries; excess causes dental/skeletal fluorosis (a problem in some Bangladeshi groundwater)."
      ] },
      { h: "Requirements", p: "Examples (adult): calcium ~600–1000 mg/day (higher in pregnancy/lactation and elderly); iron ~19–29 mg/day (much higher in menstruating/pregnant women); iodine ~150 µg/day (250 µg in pregnancy); zinc ~10–12 mg/day; sodium <2 g/day (≈5 g salt)." },
      { h: "Clinical relevance", list: [
        "Iron-deficiency anaemia — routine antenatal iron-folate; dietary counselling and treatment of causes.",
        "Iodine deficiency — salt iodisation; iodine in pregnancy protects fetal brain development.",
        "Sodium — restriction in hypertension, heart failure, renal and liver disease.",
        "Potassium — careful monitoring in renal failure, diuretic therapy and vomiting/diarrhoea.",
        "Calcium — supplementation in osteoporosis, pregnancy and post-menopause; watch for tetany after thyroid surgery.",
        "Zinc — adjunct in childhood diarrhoea and poor wound healing."
      ] },
      { h: "Nursing management", list: [
        "Promote iron-rich foods with vitamin C and administer/monitor antenatal iron-folate supplements.",
        "Educate on use of iodised salt (stored covered, added after cooking) to prevent goitre.",
        "Counsel on salt restriction for hypertension/heart/renal patients; read food labels.",
        "Monitor serum electrolytes; recognise signs of hypo-/hyperkalaemia and hypocalcaemic tetany.",
        "Give zinc with ORS in childhood diarrhoea and ensure calcium/vitamin D in at-risk groups."
      ] },
      { h: "Factors affecting mineral absorption", p: "Mineral bioavailability varies widely. Enhancers include vitamin C (non-haem iron), vitamin D (calcium) and an acid gastric medium. Inhibitors include phytates (whole grains, pulses), oxalates (spinach), tannins (tea), and excess of one mineral competing with another (e.g. high calcium reduces iron absorption). Food preparation such as soaking, sprouting and fermentation reduces phytates and improves absorption — relevant when advising on plant-based Bangladeshi diets." },
      { h: "Normal values / key figures", list: [
        "Haemoglobin (WHO anaemia cut-offs): <12 g/dL (non-pregnant women), <11 g/dL (pregnancy/children), <13 g/dL (men).",
        "Serum calcium 8.5–10.5 mg/dL; sodium 135–145 mmol/L; potassium 3.5–5.0 mmol/L.",
        "Iodine RDA ~150 µg/day (250 µg pregnancy); recommended salt <5 g/day."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Classify minerals into macrominerals and trace elements with examples.",
      "Describe the functions, sources and deficiency of iron and factors affecting its absorption.",
      "Explain iodine deficiency disorders and their prevention.",
      "Discuss the functions and deficiency of calcium and its relation to vitamin D.",
      "Explain the nursing management of a pregnant woman with iron-deficiency anaemia."
    ],
    assessment: [
      { type: "mcq", q: "To maximise iron absorption from a lentil (dal) meal, the nurse should advise taking it with:", options: ["Tea", "A vitamin C-rich food such as lemon or guava", "Milk", "Antacid"], answer: 1, rationale: "Vitamin C enhances non-haem iron absorption, whereas tea (tannins), milk (calcium) and antacids reduce it." },
      { type: "mcq", q: "A woman in an inland district has neck swelling (goitre). The most likely dietary cause is deficiency of:", options: ["Iron", "Iodine", "Calcium", "Zinc"], answer: 1, rationale: "Iodine deficiency, common in soil-poor inland areas, causes goitre and other IDD." },
      { type: "mcq", q: "Which mineral is the chief intracellular cation and critical to cardiac rhythm?", options: ["Sodium", "Calcium", "Potassium", "Chloride"], answer: 2, rationale: "Potassium is the main intracellular cation; imbalance can cause dangerous arrhythmias." },
      { type: "mcq", q: "Calcium absorption from the gut is chiefly enhanced by:", options: ["Phytates", "Oxalates", "Tannins", "Vitamin D"], answer: 3, rationale: "Vitamin D promotes intestinal calcium absorption; phytates, oxalates and tannins hinder mineral absorption." },
      { type: "mcq", q: "Zinc is recommended alongside ORS in childhood diarrhoea because it:", options: ["Reduces duration/severity and aids recovery and immunity", "Stops all fluid loss instantly", "Replaces the need for fluids", "Raises blood pressure"], answer: 0, rationale: "Zinc shortens diarrhoea duration and severity and supports immune recovery." },
      { type: "mcq", q: "Haem iron differs from non-haem iron in that it is:", options: ["Only found in plants", "Better absorbed and found in meat/fish", "Blocked by vitamin C", "Not usable by the body"], answer: 1, rationale: "Haem iron from animal foods is absorbed more efficiently than plant non-haem iron." },
      { type: "mcq", q: "After a total thyroidectomy a patient develops muscle spasms and tingling. The likely cause is:", options: ["Hyperkalaemia", "Hypocalcaemia (tetany)", "Hypernatraemia", "Iron overload"], answer: 1, rationale: "Accidental parathyroid injury lowers calcium, causing hypocalcaemic tetany." },
      { type: "mcq", q: "A patient with hypertension should be advised to limit dietary:", options: ["Potassium", "Sodium (salt)", "Iron", "Calcium"], answer: 1, rationale: "High sodium intake raises blood pressure; salt restriction is standard advice in hypertension." },
      { type: "mcq", q: "The WHO haemoglobin cut-off for anaemia in a pregnant woman is below:", options: ["8 g/dL", "11 g/dL", "13 g/dL", "15 g/dL"], answer: 1, rationale: "Anaemia in pregnancy is defined as haemoglobin below 11 g/dL." },
      { type: "mcq", q: "About 99% of the body's calcium is found in the:", options: ["Blood plasma", "Muscle", "Bone and teeth", "Liver"], answer: 2, rationale: "The vast majority of body calcium is stored in bone and teeth, with a small critical fraction in blood." }
      , { type: "fill", q: "The commonest nutritional deficiency worldwide, causing pallor and fatigue, is ____ anaemia.", accept: ["iron-deficiency", "iron deficiency", "iron"], rationale: "Iron-deficiency anaemia is the most prevalent micronutrient deficiency globally." }
      , { type: "fill", q: "The universal public-health measure used to prevent iodine deficiency disorders is salt ____.", accept: ["iodisation", "iodization", "iodine fortification"], rationale: "Universal salt iodisation is the mainstay of IDD prevention." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "nut-07-water-fibre-antioxidants",
    unit: "Unit 2 · Micronutrients & Regulatory Nutrients",
    title: "Water, Dietary Fibre & Antioxidants",
    readMinutes: 23,
    summary: "Water — distribution, functions, balance and requirements; dietary fibre — types, functions, sources and clinical uses; and antioxidants — mechanism, dietary sources and role in health; with nursing management of dehydration, fluid overload and constipation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Water as an essential nutrient", p: "Water is the largest single constituent of the body (~60% of adult body weight) and, though it yields no energy, is indispensable for survival — a person can live only a few days without it. It is distributed as intracellular fluid (~2/3) and extracellular fluid (~1/3, comprising plasma and interstitial fluid)." },
      { h: "Functions of water", list: [
        "Solvent and medium for all biochemical reactions and metabolism.",
        "Transport — carries nutrients, gases, hormones and wastes in blood and lymph.",
        "Temperature regulation — heat loss through sweating and evaporation.",
        "Lubrication — synovial fluid, saliva, mucus, serous fluids.",
        "Maintenance of blood volume, blood pressure and fluid/electrolyte balance.",
        "Excretion — removes waste products via urine."
      ] },
      { h: "Water balance", p: "Intake must match output to maintain balance.", figure: {
        caption: "Daily water balance in an adult: intake (drinks, food, metabolic water) equals output (urine, skin, lungs, faeces).",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Daily water balance."><rect x="30" y="20" width="200" height="30" rx="6" fill="#0F4C3A"/><text x="130" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">INTAKE (~2500 mL)</text><rect x="30" y="60" width="200" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="130" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Drinks ~1500 mL</text><rect x="30" y="92" width="200" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="130" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Food ~700 mL</text><rect x="30" y="124" width="200" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="130" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Metabolic ~300 mL</text><rect x="330" y="20" width="200" height="30" rx="6" fill="#15803D"/><text x="430" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">OUTPUT (~2500 mL)</text><rect x="330" y="60" width="200" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="430" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Urine ~1500 mL</text><rect x="330" y="92" width="200" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="430" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Skin/lungs ~800 mL</text><rect x="330" y="124" width="200" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="430" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Faeces ~200 mL</text><line x1="280" y1="85" x2="280" y2="85" stroke="#22C55E" stroke-width="0"/><text x="280" y="90" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#0F4C3A">=</text></svg>'
      } },
      { h: "Requirements and regulation", p: "Adults need roughly 2–3 litres/day (about 30–35 mL/kg), more in heat, fever, exercise, pregnancy and lactation. Thirst, ADH (vasopressin) and the kidney regulate balance. 'Insensible' losses (skin and lungs, ~800–1000 mL/day) increase with fever (~+13% per °C rise) and burns." },
      { h: "Dehydration and overload", list: [
        "Dehydration — from vomiting, diarrhoea, fever, burns or poor intake; signs: thirst, dry mucosa, sunken eyes, reduced skin turgor, oliguria, tachycardia, hypotension; managed with ORS or IV fluids.",
        "Fluid overload — from excess intake or heart/kidney failure; signs: oedema, raised weight, breathlessness, raised JVP; managed with fluid restriction and diuretics."
      ] },
      { h: "Dietary fibre — definition and types", p: "Dietary fibre is the non-digestible carbohydrate (and lignin) of plant foods that resists digestion in the small intestine.", list: [
        "Soluble fibre (pectin, gums, beta-glucan) — dissolves to a gel; lowers blood cholesterol and slows glucose absorption; from oats, fruits, pulses.",
        "Insoluble fibre (cellulose, hemicellulose, lignin) — adds bulk, speeds transit, prevents constipation; from whole grains, vegetables, wheat bran."
      ] },
      { h: "Functions and benefits of fibre", list: [
        "Increases faecal bulk and softness, promoting regular bowel movement and preventing constipation.",
        "Lowers LDL cholesterol (soluble fibre binds bile acids).",
        "Slows glucose absorption, improving glycaemic control in diabetes.",
        "Increases satiety, aiding weight management.",
        "Protects against diverticular disease, haemorrhoids and possibly colorectal cancer."
      ] },
      { h: "Fibre requirement and cautions", p: "Recommended intake is about 25–40 g/day (roughly 40 g/2000 kcal). Adequate water must accompany a high-fibre diet. Excess fibre can reduce absorption of iron, calcium and zinc (phytate binding) and cause bloating; fibre is temporarily reduced in acute diarrhoea and some GI conditions." },
      { h: "Antioxidants", p: "Antioxidants are substances that neutralise free radicals (reactive oxygen species) produced during metabolism, protecting cells from oxidative damage implicated in ageing, cancer, cardiovascular and degenerative disease.", list: [
        "Vitamin antioxidants — vitamin C, vitamin E, beta-carotene (provitamin A).",
        "Mineral-dependent enzymes — selenium (glutathione peroxidase), zinc, copper, manganese (superoxide dismutase).",
        "Phytochemicals — flavonoids, polyphenols, lycopene, carotenoids in colourful fruits and vegetables."
      ] },
      { h: "Sources and role of antioxidants", p: "Rich sources are brightly coloured fruits and vegetables (guava, citrus, tomato, carrot, dark leafy greens), nuts, seeds and vegetable oils. A varied, colourful, plant-rich diet is the best way to obtain antioxidants; routine high-dose supplements are not recommended and may be harmful." },
      { h: "Nursing management", list: [
        "Assess hydration (skin turgor, mucosa, intake/output, weight, urine output) and correct dehydration with ORS/IV fluids.",
        "Recognise and manage fluid overload; enforce fluid restriction and monitor daily weight where ordered.",
        "Promote gradual increase in dietary fibre with adequate fluids to relieve/prevent constipation.",
        "Advise a colourful plant-rich diet for antioxidants rather than supplements.",
        "Adjust fibre and fluid in specific conditions (low residue in acute flare, high fluid in stones/UTI)."
      ] },
      { h: "Normal values / key figures", list: [
        "Total body water ~60% of body weight; ICF ~2/3, ECF ~1/3.",
        "Daily water requirement ~30–35 mL/kg (~2–3 L); minimum urine output ~0.5 mL/kg/hour.",
        "Dietary fibre ~25–40 g/day; insensible loss ~800–1000 mL/day."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Describe the functions of water and the components of daily water balance.",
      "Differentiate soluble and insoluble dietary fibre with their functions and sources.",
      "Explain the benefits of dietary fibre and the cautions with a high-fibre diet.",
      "Define antioxidants, list dietary sources, and explain their role in health.",
      "Discuss the nursing assessment and management of a dehydrated patient."
    ],
    assessment: [
      { type: "mcq", q: "A patient with severe watery diarrhoea has sunken eyes, dry mucosa and oliguria. The priority nursing action is:", options: ["Give a high-fibre diet", "Restrict all fluids", "Rehydrate with ORS or IV fluids and monitor output", "Give antioxidant supplements"], answer: 2, rationale: "The signs indicate dehydration; fluid and electrolyte replacement with monitoring is the priority." },
      { type: "mcq", q: "Which type of fibre chiefly lowers blood cholesterol?", options: ["Insoluble fibre", "Soluble fibre", "Cellulose", "Lignin"], answer: 1, rationale: "Soluble fibre (pectin, gums, beta-glucan) binds bile acids and lowers LDL cholesterol." },
      { type: "mcq", q: "A high-fibre diet for constipation is most effective when combined with:", options: ["Reduced water intake", "Adequate fluid intake", "Bed rest", "Antibiotics"], answer: 1, rationale: "Fibre needs adequate water to soften stool and add bulk; without fluid it can worsen constipation." },
      { type: "mcq", q: "Antioxidants protect the body by:", options: ["Providing energy", "Neutralising free radicals and reducing oxidative damage", "Increasing blood glucose", "Storing fat"], answer: 1, rationale: "Antioxidants quench reactive oxygen species, limiting cell and tissue damage." },
      { type: "mcq", q: "Approximately what fraction of an adult's body weight is water?", options: ["20%", "40%", "60%", "85%"], answer: 2, rationale: "Water is about 60% of adult body weight, mostly intracellular." },
      { type: "mcq", q: "Insensible water loss increases most in a patient with:", options: ["Fever", "Hypothermia", "Constipation", "Low blood pressure"], answer: 0, rationale: "Fever raises insensible loss via skin and lungs (roughly 13% per °C rise in temperature)." },
      { type: "mcq", q: "Which is a rich dietary source of antioxidants?", options: ["Refined sugar", "White bread", "Brightly coloured fruits and vegetables", "Cooking oil alone"], answer: 2, rationale: "Colourful fruits and vegetables supply vitamins C and E, carotenoids and polyphenols." },
      { type: "mcq", q: "Excess dietary fibre can reduce absorption of which nutrients due to phytate binding?", options: ["Iron, calcium and zinc", "Water and sodium", "Vitamin C and folate", "Glucose only"], answer: 0, rationale: "Phytates in high-fibre foods can bind iron, calcium and zinc, reducing their absorption." },
      { type: "mcq", q: "A patient in heart failure gains 2 kg in two days with ankle oedema and breathlessness. This indicates:", options: ["Dehydration", "Fluid overload", "Normal variation", "Fibre excess"], answer: 1, rationale: "Rapid weight gain with oedema and dyspnoea signals fluid overload, needing restriction/diuretics." },
      { type: "mcq", q: "The recommended daily dietary fibre intake for adults is approximately:", options: ["2–5 g", "25–40 g", "80–100 g", "150 g"], answer: 1, rationale: "About 25–40 g/day of fibre is recommended for adults." }
      , { type: "fill", q: "Fibre that dissolves to form a gel and lowers cholesterol is called ____ fibre.", accept: ["soluble"], rationale: "Soluble fibre lowers cholesterol and slows glucose absorption." }
      , { type: "fill", q: "Reactive molecules that damage cells and are neutralised by antioxidants are called free ____.", accept: ["radicals"], rationale: "Free radicals cause oxidative damage countered by antioxidants." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "nut-08-energy-bmr",
    unit: "Unit 3 · Energy, Balanced Diet & Assessment",
    title: "Energy Metabolism & Basal Metabolic Rate",
    readMinutes: 24,
    summary: "Units of food energy; components of total energy expenditure (BMR, thermic effect of food, physical activity); factors affecting BMR; measurement of energy value and expenditure; calculation of energy requirement; and the concept and clinical relevance of energy balance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Food energy and units", p: "Energy is the capacity to do work; the body obtains it by oxidising carbohydrate, fat and protein. Energy is measured in kilocalories (kcal) or kilojoules (kJ). 1 kcal = 4.184 kJ. One kcal is the heat needed to raise 1 kg of water by 1°C." },
      { h: "Physiological fuel (energy) values", list: [
        "Carbohydrate — 4 kcal/g.",
        "Protein — 4 kcal/g.",
        "Fat — 9 kcal/g.",
        "Alcohol — 7 kcal/g."
      ] },
      { h: "Components of total energy expenditure (TEE)", p: "The body's daily energy need is the sum of three components.", figure: {
        caption: "The three components of total energy expenditure: basal metabolic rate (largest), physical activity, and the thermic effect of food.",
        svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Components of total energy expenditure."><rect x="60" y="30" width="400" height="40" rx="6" fill="#0F4C3A"/><text x="260" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">TOTAL ENERGY EXPENDITURE</text><rect x="40" y="100" width="200" height="70" rx="8" fill="#15803D"/><text x="140" y="128" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">BMR (60–75%)</text><text x="140" y="148" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">basal body functions</text><rect x="255" y="100" width="130" height="70" rx="8" fill="#22C55E"/><text x="320" y="128" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Activity</text><text x="320" y="148" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">15–30%</text><rect x="400" y="100" width="80" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="440" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">TEF</text><text x="440" y="148" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">~10%</text><line x1="140" y1="70" x2="140" y2="98" stroke="#0F4C3A" stroke-width="1.5"/><line x1="320" y1="70" x2="320" y2="98" stroke="#0F4C3A" stroke-width="1.5"/><line x1="440" y1="70" x2="440" y2="98" stroke="#0F4C3A" stroke-width="1.5"/></svg>'
      } },
      { h: "Basal Metabolic Rate (BMR)", p: "BMR is the energy needed to maintain basic body functions (heartbeat, respiration, cell activity, body temperature) at complete physical and mental rest, in a fasting state (12 hours after food), lying still in a comfortable temperature. It is the largest component of energy expenditure (~60–75% of TEE) and is roughly 1 kcal/kg/hour in adults." },
      { h: "Thermic effect of food (TEF) and physical activity", list: [
        "Thermic effect of food (specific dynamic action) — energy used to digest, absorb and process food; about 10% of TEE; highest for protein.",
        "Physical activity — the most variable component (15–30% or more); depends on occupation and exercise; the main modifiable factor in energy balance."
      ] },
      { h: "Factors affecting BMR", list: [
        "Body size and composition — greater lean (muscle) mass raises BMR; fat tissue is less active.",
        "Age — highest in infancy/growth; declines with age.",
        "Sex — higher in men (more muscle) than women.",
        "Thyroid hormone — hyperthyroidism raises and hypothyroidism lowers BMR.",
        "Fever and infection — raise BMR (~13% per °C).",
        "Fasting/starvation and undernutrition — lower BMR (adaptation).",
        "Pregnancy, lactation, growth, stress and certain drugs raise BMR; cold exposure raises it."
      ] },
      { h: "Measuring energy value and expenditure", list: [
        "Bomb calorimeter — measures the gross energy value of food by combustion (direct).",
        "Direct calorimetry — measures body heat output in a sealed chamber.",
        "Indirect calorimetry — measures oxygen consumption/CO2 production to estimate energy use (common in clinical/ICU settings).",
        "Doubly labelled water — research method for free-living total expenditure."
      ] },
      { h: "Estimating energy requirement", p: "A practical estimate is TEE = BMR × physical activity level (PAL). Typical PAL: sedentary ~1.4, moderate ~1.7, heavy work ~2.0. Predictive equations (e.g. Harris-Benedict, Mifflin-St Jeor) estimate BMR from weight, height, age and sex. Requirements also rise ~+350 kcal/day in pregnancy (2nd/3rd trimester) and ~+600 kcal/day in lactation." },
      { h: "Energy balance", p: "Energy balance = energy intake − energy expenditure.", list: [
        "Positive balance — intake exceeds expenditure; surplus stored as fat → weight gain/obesity.",
        "Negative balance — expenditure exceeds intake; body stores used → weight loss (used therapeutically in obesity, harmful in starvation).",
        "Neutral balance — intake equals expenditure; stable weight."
      ] },
      { h: "Clinical relevance", list: [
        "Obesity — chronic positive balance; managed by reducing intake and increasing activity.",
        "Undernutrition/wasting — chronic negative balance; needs increased energy density.",
        "Hyper-/hypothyroidism — altered BMR changes energy needs and weight.",
        "Critical illness, burns and sepsis — hypermetabolism sharply raises energy needs; indirect calorimetry guides feeding.",
        "1 kg body fat ≈ 7700 kcal — basis of realistic weight-change targets."
      ] },
      { h: "Nursing management", list: [
        "Estimate energy needs using body weight and activity level, adjusting for illness/fever/pregnancy.",
        "Counsel on energy balance for weight management (portion control, activity).",
        "Ensure adequate energy in wasting, burns and post-surgical patients to prevent catabolism.",
        "Recognise altered BMR in thyroid disease and adjust dietary advice.",
        "Monitor weight trends as a practical index of energy balance."
      ] },
      { h: "Normal values / key figures", list: [
        "Energy values: CHO 4, protein 4, fat 9, alcohol 7 kcal/g. 1 kcal = 4.184 kJ.",
        "BMR ~1 kcal/kg/hour (~1300–1600 kcal/day adult); BMR is ~60–75% of TEE; TEF ~10%.",
        "Adult requirement (moderate activity) ~30–35 kcal/kg/day; 1 kg fat ≈ 7700 kcal.",
        "Extra energy: pregnancy +~350 kcal/day; lactation +~600 kcal/day."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Define BMR and describe the factors that affect it.",
      "Explain the three components of total energy expenditure.",
      "Describe how the energy value of food and energy expenditure are measured.",
      "Explain energy balance and its outcomes (positive, negative, neutral).",
      "Calculate and discuss the energy requirement of a moderately active adult and adjust it for pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "A patient with hyperthyroidism is losing weight despite eating well. This is best explained by:", options: ["A reduced BMR", "An increased BMR raising energy expenditure", "Poor absorption of fibre", "Excess fluid intake"], answer: 1, rationale: "Thyroid hormone raises BMR; increased expenditure causes weight loss despite adequate intake." },
      { type: "mcq", q: "The largest component of total energy expenditure in a typical adult is:", options: ["Physical activity", "Thermic effect of food", "Basal metabolic rate", "Digestion of fibre"], answer: 2, rationale: "BMR accounts for about 60–75% of total daily energy expenditure." },
      { type: "mcq", q: "Which instrument measures the gross energy value of a food by burning it?", options: ["Sphygmomanometer", "Bomb calorimeter", "Spirometer", "Glucometer"], answer: 1, rationale: "A bomb calorimeter combusts food to measure the heat (energy) released." },
      { type: "mcq", q: "A person in chronic positive energy balance will:", options: ["Lose weight", "Gain weight as stored fat", "Maintain stable weight", "Develop scurvy"], answer: 1, rationale: "When intake exceeds expenditure, the surplus is stored as body fat, causing weight gain." },
      { type: "mcq", q: "Which factor RAISES basal metabolic rate?", options: ["Starvation", "Fever", "Increasing age", "Hypothyroidism"], answer: 1, rationale: "Fever raises BMR (~13% per °C); starvation, ageing and hypothyroidism lower it." },
      { type: "mcq", q: "The thermic effect of food is highest for which nutrient?", options: ["Fat", "Carbohydrate", "Protein", "Water"], answer: 2, rationale: "Protein has the greatest specific dynamic action (thermic effect) of the macronutrients." },
      { type: "mcq", q: "BMR is measured under conditions of:", options: ["After heavy exercise", "Complete rest, fasting, comfortable temperature", "Immediately after a large meal", "During fever"], answer: 1, rationale: "BMR requires complete physical/mental rest, a post-absorptive (fasting) state and thermoneutral conditions." },
      { type: "mcq", q: "Approximately how many kcal are stored in 1 kg of body fat?", options: ["500 kcal", "2000 kcal", "7700 kcal", "20000 kcal"], answer: 2, rationale: "About 7700 kcal equals 1 kg of body fat — a basis for weight-change planning." },
      { type: "mcq", q: "1 kilocalorie is equal to approximately:", options: ["4.184 kJ", "1 kJ", "100 kJ", "0.1 kJ"], answer: 0, rationale: "1 kcal = 4.184 kilojoules." },
      { type: "mcq", q: "The most variable and modifiable component of energy expenditure is:", options: ["BMR", "Thermic effect of food", "Physical activity", "Insensible loss"], answer: 2, rationale: "Physical activity varies most between individuals and is the main modifiable component." }
      , { type: "fill", q: "Fat provides ____ kcal of energy per gram.", accept: ["9", "nine"], rationale: "Fat yields ~9 kcal/g, more than carbohydrate or protein." }
      , { type: "fill", q: "The energy needed to maintain basic body functions at complete rest is called the ____ metabolic rate.", accept: ["basal"], rationale: "BMR is the energy for essential functions at rest and fasting." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "nut-09-balanced-diet-rda",
    unit: "Unit 3 · Energy, Balanced Diet & Assessment",
    title: "Balanced Diet, RDA & Food Groups",
    readMinutes: 24,
    summary: "Definition and principles of a balanced diet (adequacy, balance, calorie control, nutrient density, variety, moderation); Recommended Dietary Allowances (RDA) and related reference values; food groups and food guides; and menu/diet planning with practical application to Bangladeshi diets.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of a balanced diet", p: "A balanced diet is one that contains all the nutrients — carbohydrate, protein, fat, vitamins, minerals, fibre and water — in the amounts and proportions required to meet the body's needs for energy, growth, repair and maintenance of health, with a small reserve for periods of leanness. It is built by combining foods from different food groups." },
      { h: "Principles of diet planning", p: "Krause describes several principles that together produce a balanced diet.", list: [
        "Adequacy — provides enough of every essential nutrient, fibre and energy.",
        "Balance — nutrients in the right proportion to one another (e.g. calcium vs phosphorus).",
        "Calorie (energy) control — energy matched to needs to maintain healthy weight.",
        "Nutrient density — choosing foods rich in nutrients relative to their calories.",
        "Moderation — limiting fat, salt, free sugar and refined foods.",
        "Variety — different foods to cover all nutrients and reduce risk of contaminants."
      ] },
      { h: "Recommended Dietary Allowance (RDA)", p: "RDA is the average daily amount of a nutrient considered adequate to meet the needs of nearly all (97–98%) healthy individuals in a particular age, sex and physiological group. It is set above the average requirement (adds a safety margin of ~2 standard deviations) to cover individual variation, and is used for planning and assessing diets of groups." },
      { h: "Reference values in the family", list: [
        "EAR (Estimated Average Requirement) — meets the needs of half the group.",
        "RDA — EAR + 2 SD; meets ~97–98% of the group.",
        "AI (Adequate Intake) — used when an RDA cannot be set.",
        "UL (Tolerable Upper Intake Level) — the highest safe daily intake.",
        "Reference/consultation unit — the RDA is often expressed per 'reference man/woman' of defined weight and activity."
      ] },
      { h: "Food groups", p: "Foods are grouped by their dominant nutrient contribution; choosing from every group each day helps ensure balance.", figure: {
        caption: "The basic food groups: energy-giving (cereals, fats, sugars), body-building (pulses, milk, egg, fish, meat), and protective (vegetables and fruits).",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Basic food groups."><rect x="20" y="20" width="160" height="150" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="100" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Energy-giving</text><text x="100" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Cereals, rice,</text><text x="100" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">roots, sugar,</text><text x="100" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">fats &amp; oils</text><rect x="200" y="20" width="160" height="150" rx="10" fill="#22C55E"/><text x="280" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Body-building</text><text x="280" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Pulses, milk,</text><text x="280" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">egg, fish,</text><text x="280" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">meat</text><rect x="380" y="20" width="160" height="150" rx="10" fill="#15803D"/><text x="460" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Protective</text><text x="460" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">Green &amp; other</text><text x="460" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">vegetables,</text><text x="460" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">fruits</text></svg>'
      } },
      { h: "Functional food-group classification", list: [
        "Energy-giving — cereals, millets, roots, tubers, sugars, fats and oils.",
        "Body-building — pulses, milk and products, egg, fish, meat (proteins).",
        "Protective and regulatory — vegetables (especially green leafy) and fruits (vitamins, minerals, fibre)."
      ] },
      { h: "Food guides", p: "Food guides translate nutrient needs into food choices — e.g. the food pyramid or 'My Plate' concept (fill half the plate with vegetables and fruit, a quarter with cereals, a quarter with protein foods, plus a little milk). They help nurses give simple, practical dietary advice." },
      { h: "Steps in diet/menu planning", list: [
        "Assess the person — age, sex, activity, physiological state, health and food habits/budget.",
        "Determine energy and nutrient requirements (RDA).",
        "Select foods from each food group in appropriate amounts.",
        "Distribute foods across meals; ensure variety, palatability and cultural acceptability.",
        "Evaluate the plan against the RDA and adjust."
      ] },
      { h: "Application to Bangladeshi diets", p: "A typical balanced Bangladeshi meal pairs rice (energy) with dal and fish/egg (body-building) and seasonal vegetables and fruit (protective). Affordable improvements include adding dark leafy greens, small fish eaten with bones (calcium), seasonal fruit for vitamin C, and cereal-pulse combinations for protein quality." },
      { h: "Clinical relevance and nursing management", list: [
        "Use food groups and RDA to plan therapeutic and normal diets and to counsel patients simply.",
        "Adapt the balanced diet to life stage, disease and budget without losing adequacy.",
        "Teach families the 'plate' concept for children and pregnant women.",
        "Identify gaps (e.g. low protective foods) and suggest cheap local substitutes.",
        "Evaluate whether a patient's actual intake meets the RDA and act on shortfalls."
      ] },
      { h: "Factors affecting food choice and dietary intake", p: "In planning a balanced, acceptable diet the nurse must consider the factors that shape what people actually eat: income and food cost, food availability and seasonality, culture, religion and rituals, urban versus rural residence, family food habits and education, personal preferences, age, gender and health status. A technically perfect diet fails if it ignores these; advice must be affordable and culturally acceptable to be followed." },
      { h: "Normal values / key figures", list: [
        "Balanced-diet energy distribution: carbohydrate 50–65%, fat 20–30%, protein 10–15%.",
        "RDA meets the needs of ~97–98% of a healthy group (EAR + 2 SD).",
        "'My Plate': ~½ vegetables/fruit, ¼ cereals, ¼ protein foods."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Define a balanced diet and describe the principles of diet planning.",
      "Define RDA and distinguish it from EAR, AI and UL.",
      "Classify foods into food groups on a functional basis with examples.",
      "Describe the steps in planning a balanced menu for a family.",
      "Plan a balanced day's diet for a moderately active adult using local Bangladeshi foods."
    ],
    assessment: [
      { type: "mcq", q: "The RDA for a nutrient is set to meet the needs of:", options: ["Exactly 50% of a group", "About 97–98% of healthy individuals in a group", "Only sick individuals", "100% including the ill"], answer: 1, rationale: "RDA = EAR + 2 SD, covering nearly all (97–98%) healthy people in the age/sex/physiological group." },
      { type: "mcq", q: "Choosing brown rice and dal over white rice and sugar to get more nutrients per calorie applies the principle of:", options: ["Moderation", "Nutrient density", "Calorie control", "Variety"], answer: 1, rationale: "Nutrient density means selecting foods high in nutrients relative to their energy content." },
      { type: "mcq", q: "Which foods belong to the 'body-building' group?", options: ["Rice and sugar", "Pulses, fish, egg and milk", "Vegetables and fruit", "Oil and ghee"], answer: 1, rationale: "Protein-rich pulses, fish, egg and milk are body-building foods." },
      { type: "mcq", q: "On the 'My Plate' guide, the largest portion of the plate should be:", options: ["Cereals", "Protein foods", "Vegetables and fruit", "Oil"], answer: 2, rationale: "About half the plate should be vegetables and fruit for a balanced meal." },
      { type: "mcq", q: "The reference value that meets the requirement of only half a group is the:", options: ["RDA", "EAR", "UL", "AI"], answer: 1, rationale: "The Estimated Average Requirement (EAR) meets the needs of 50% of the group." },
      { type: "mcq", q: "The first step in planning a diet for a patient is to:", options: ["Cook the food", "Assess age, sex, activity, health and food habits", "Buy supplements", "Set the price"], answer: 1, rationale: "Assessment of the individual guides the requirement calculation and food selection." },
      { type: "mcq", q: "Green leafy vegetables and fruits are classed as ____ foods.", options: ["Energy-giving", "Body-building", "Protective/regulatory", "Empty-calorie"], answer: 2, rationale: "Vegetables and fruits supply vitamins, minerals and fibre and are protective/regulatory foods." },
      { type: "mcq", q: "The highest daily intake of a nutrient that is unlikely to cause harm is the:", options: ["EAR", "RDA", "Tolerable Upper Intake Level (UL)", "AI"], answer: 2, rationale: "The UL is the maximum daily intake considered safe for almost all people." },
      { type: "mcq", q: "Which principle limits intake of fat, salt and free sugar?", options: ["Adequacy", "Moderation", "Balance", "Variety"], answer: 1, rationale: "Moderation restricts nutrients and foods that are harmful in excess." },
      { type: "mcq", q: "In a balanced diet, protein should provide approximately what percentage of total energy?", options: ["1–2%", "10–15%", "40–50%", "70%"], answer: 1, rationale: "Protein should supply roughly 10–15% of total energy in a balanced diet." }
      , { type: "fill", q: "The average daily nutrient intake adequate for ~97–98% of healthy people in a group is the ____ (abbreviation).", accept: ["RDA", "recommended dietary allowance"], rationale: "RDA is set at EAR + 2 SD to cover nearly all healthy individuals." }
      , { type: "fill", q: "Selecting foods high in nutrients relative to their calories is the principle of nutrient ____.", accept: ["density"], rationale: "Nutrient density maximises nutrients per calorie." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "nut-10-nutritional-assessment",
    unit: "Unit 3 · Energy, Balanced Diet & Assessment",
    title: "Nutritional Assessment (ABCD)",
    readMinutes: 25,
    summary: "Purpose and methods of nutritional assessment using the ABCD approach — Anthropometric (weight, height, BMI, MUAC, skinfolds, growth monitoring), Biochemical, Clinical and Dietary methods — with interpretation of key indices and their nursing application.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of nutritional assessment", p: "Nutritional assessment is the systematic collection and interpretation of data to identify the presence, nature and extent of impaired nutritional status. It detects malnutrition (under- or over-), identifies those at risk, guides intervention, and monitors response. It forms Step 1 of the Nutrition Care Process." },
      { h: "The ABCD approach", p: "Four complementary methods together give a complete picture; no single method is sufficient.", figure: {
        caption: "The ABCD methods of nutritional assessment: Anthropometric, Biochemical, Clinical and Dietary.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ABCD nutritional assessment."><rect x="15" y="40" width="120" height="110" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="75" y="66" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#0F4C3A">A</text><text x="75" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Anthropometry</text><text x="75" y="112" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">weight, height,</text><text x="75" y="126" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">BMI, MUAC</text><rect x="150" y="40" width="120" height="110" rx="10" fill="#22C55E"/><text x="210" y="66" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#0F4C3A">B</text><text x="210" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Biochemical</text><text x="210" y="112" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">Hb, albumin,</text><text x="210" y="126" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">blood/urine tests</text><rect x="285" y="40" width="120" height="110" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="345" y="66" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#0F4C3A">C</text><text x="345" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Clinical</text><text x="345" y="112" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">signs of</text><text x="345" y="126" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">deficiency</text><rect x="420" y="40" width="120" height="110" rx="10" fill="#15803D"/><text x="480" y="66" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#F0FDF4">D</text><text x="480" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">Dietary</text><text x="480" y="112" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F0FDF4">24-h recall,</text><text x="480" y="126" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F0FDF4">food frequency</text></svg>'
      } },
      { h: "A — Anthropometric measurements", p: "Measurement of body dimensions and composition; simple, cheap and non-invasive.", list: [
        "Weight and height — basic measures; weight change over time is a sensitive indicator.",
        "Body Mass Index (BMI) — weight/height relationship.",
        "Mid-upper arm circumference (MUAC) — quick screen for acute malnutrition, useful in children and emergencies.",
        "Skinfold thickness (triceps) — estimates subcutaneous fat/body-fat stores.",
        "Waist circumference / waist-hip ratio — indicates central (abdominal) obesity and cardiometabolic risk.",
        "Head circumference — used in young children."
      ] },
      { h: "Body Mass Index (BMI)", p: "BMI = weight (kg) ÷ height (m)². It classifies adults by weight status.", figure: {
        caption: "BMI formula and adult WHO classification.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BMI formula and classification."><rect x="20" y="15" width="500" height="42" rx="8" fill="#0F4C3A"/><text x="270" y="42" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#F0FDF4">BMI = weight (kg) / height (m)²</text><rect x="20" y="70" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="140" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">&lt; 18.5  Underweight</text><rect x="280" y="70" width="240" height="26" rx="5" fill="#22C55E"/><text x="400" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">18.5–24.9  Normal</text><rect x="20" y="102" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="140" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">25–29.9  Overweight</text><rect x="280" y="102" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">&ge; 30  Obese</text><rect x="20" y="140" width="500" height="40" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="270" y="165" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Example: 60 kg, 1.6 m → 60 / (1.6×1.6) = 60/2.56 = 23.4 (Normal)</text></svg>'
      } },
      { h: "Anthropometric indices in children", list: [
        "Weight-for-age — reflects underweight (acute + chronic).",
        "Height-for-age — reflects stunting (chronic malnutrition).",
        "Weight-for-height — reflects wasting (acute malnutrition).",
        "MUAC — <11.5 cm indicates severe acute malnutrition in 6–59-month children.",
        "Growth charts — plotting serial measurements detects faltering early."
      ] },
      { h: "B — Biochemical (laboratory) assessment", list: [
        "Haemoglobin and iron studies — detect anaemia and iron deficiency.",
        "Serum albumin/pre-albumin, total protein — indicate protein/visceral status.",
        "Serum electrolytes, calcium, glucose, lipid profile.",
        "Specific nutrient levels — vitamin D, B12, folate; urinary nitrogen for nitrogen balance.",
        "Objective and early, but affected by non-nutritional factors (inflammation, hydration)."
      ] },
      { h: "C — Clinical examination", p: "A head-to-toe search for physical signs of malnutrition or specific deficiency: pallor (anaemia), angular stomatitis/glossitis (B-vitamins), Bitot's spots/night blindness (vitamin A), goitre (iodine), oedema (protein), skin/hair changes, koilonychia (iron), bone deformities (vitamin D). Simple but signs appear late and may be non-specific." },
      { h: "D — Dietary assessment", list: [
        "24-hour dietary recall — recall of all food/drink in the past day (quick, but one day may not be typical).",
        "Food frequency questionnaire — how often food groups are eaten over a period.",
        "Diet history — usual pattern combining recall and frequency.",
        "Food weighment / record — most accurate; the person records/weighs actual intake.",
        "Compare intake with the RDA to detect deficiencies or excesses."
      ] },
      { h: "Additional and clinical relevance", p: "Ecological data (household food security, socio-economic status) and screening tools (MUST, SGA, MNA for the elderly) complement ABCD. Together they identify at-risk patients on admission, classify malnutrition (e.g. SAM/MAM in children), guide referral to the dietitian, and provide baselines for monitoring." },
      { h: "Nursing management", list: [
        "Screen every patient on admission for nutritional risk using a validated tool and refer as needed.",
        "Measure and correctly record weight, height, BMI and MUAC; plot children on growth charts.",
        "Observe and document clinical signs of deficiency during physical assessment.",
        "Take an accurate dietary history and monitor food intake charts.",
        "Interpret findings with the dietitian, plan care and re-assess to evaluate progress."
      ] },
      { h: "Advantages and limitations of the ABCD methods", p: "Each method has strengths and weaknesses, so they are used together. Anthropometry is simple, cheap and objective but changes slowly and needs correct technique/standards. Biochemistry is objective and detects deficiency early but is costly, invasive and affected by inflammation and hydration. Clinical examination is quick and needs no equipment but signs appear late and are non-specific. Dietary methods reveal intake and habits but depend on memory, honesty and typical days. No single method alone gives a complete picture." },
      { h: "Normal values / key figures", list: [
        "Adult BMI: <18.5 underweight; 18.5–24.9 normal; 25–29.9 overweight; ≥30 obese.",
        "MUAC (6–59 months): <11.5 cm = SAM; 11.5–12.5 cm = MAM.",
        "Serum albumin 3.5–5.0 g/dL; haemoglobin normal ranges as per age/sex.",
        "Weight-for-height = wasting; height-for-age = stunting; weight-for-age = underweight."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Describe the ABCD methods of nutritional assessment.",
      "Define BMI, give its formula and adult classification, and calculate BMI for a 60 kg, 1.6 m person.",
      "Explain the anthropometric indices used to assess malnutrition in children.",
      "Describe the dietary assessment methods and their advantages and limitations.",
      "Discuss the nurse's role in nutritional screening and assessment on admission."
    ],
    assessment: [
      { type: "mcq", q: "A woman weighs 72 kg and is 1.5 m tall. Her BMI (~32) places her in which category?", options: ["Underweight", "Normal", "Overweight", "Obese"], answer: 3, rationale: "72 ÷ (1.5×1.5) = 72/2.25 = 32, which is ≥30 — the obese category." },
      { type: "mcq", q: "A 2-year-old with MUAC of 10.5 cm should be classified as having:", options: ["Normal nutrition", "Moderate acute malnutrition", "Severe acute malnutrition", "Overnutrition"], answer: 2, rationale: "MUAC <11.5 cm in 6–59-month children indicates severe acute malnutrition." },
      { type: "mcq", q: "Low height-for-age in a child reflects:", options: ["Acute malnutrition (wasting)", "Chronic malnutrition (stunting)", "Overnutrition", "Dehydration"], answer: 1, rationale: "Height-for-age deficit indicates long-standing (chronic) undernutrition, i.e. stunting." },
      { type: "mcq", q: "Which is a Biochemical method of nutritional assessment?", options: ["Measuring MUAC", "Serum albumin and haemoglobin", "Observing pallor", "24-hour dietary recall"], answer: 1, rationale: "Laboratory tests such as serum albumin and haemoglobin are biochemical methods." },
      { type: "mcq", q: "A quick, low-cost dietary method asking about all food eaten in the previous day is the:", options: ["Food weighment", "24-hour recall", "Serum test", "Skinfold measurement"], answer: 1, rationale: "The 24-hour dietary recall records intake over the past day; it is quick but a single day may not be typical." },
      { type: "mcq", q: "Angular stomatitis and glossitis found on clinical examination suggest deficiency of:", options: ["Vitamin A", "B-complex vitamins", "Vitamin K", "Calcium"], answer: 1, rationale: "Angular stomatitis and glossitis are clinical signs of B-complex (e.g. riboflavin) deficiency." },
      { type: "mcq", q: "Waist circumference and waist-hip ratio are used mainly to assess:", options: ["Chronic stunting", "Central (abdominal) obesity and cardiometabolic risk", "Iron status", "Vitamin A status"], answer: 1, rationale: "These indicate abdominal fat distribution, a marker of cardiometabolic risk." },
      { type: "mcq", q: "The most accurate but most demanding dietary assessment method is:", options: ["24-hour recall", "Food frequency questionnaire", "Food weighment/record", "General impression"], answer: 2, rationale: "Weighing and recording actual intake is the most accurate, though time-consuming and burdensome." },
      { type: "mcq", q: "Triceps skinfold thickness is measured to estimate:", options: ["Muscle protein", "Subcutaneous fat/body-fat stores", "Blood glucose", "Bone density"], answer: 1, rationale: "Skinfold thickness estimates subcutaneous fat and hence body-fat reserves." },
      { type: "mcq", q: "The correct formula for BMI is:", options: ["Weight (kg) × height (m)", "Weight (kg) / height (m)²", "Height (m) / weight (kg)", "Weight (kg) / height (m)"], answer: 1, rationale: "BMI = weight in kilograms divided by height in metres squared." }
      , { type: "fill", q: "In the ABCD approach, the letter 'A' stands for ____ assessment (body measurements).", accept: ["anthropometric", "anthropometry"], rationale: "A = Anthropometric measurement of body dimensions and composition." }
      , { type: "fill", q: "A BMI of 25–29.9 in an adult is classified as ____.", accept: ["overweight"], rationale: "A BMI of 25–29.9 is the overweight category." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "nut-11-lifecycle-nutrition",
    unit: "Unit 4 · Applied & Therapeutic Nutrition",
    title: "Nutrition Through the Life Cycle",
    readMinutes: 25,
    summary: "Changing nutritional needs across the lifespan — pregnancy, lactation, infancy (including breastfeeding and complementary feeding), childhood, adolescence, adulthood and old age — with special requirements, common problems and nursing guidance for each stage.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Principle of life-cycle nutrition", p: "Nutrient needs change with growth, development, activity and physiological state. Requirements are highest (per kg) during rapid growth (infancy, adolescence) and physiological demand (pregnancy, lactation). Meeting needs at each stage prevents malnutrition and lays the foundation for lifelong health — the first 1000 days (conception to age two) are especially critical." },
      { h: "Nutrition in pregnancy", list: [
        "Extra energy — about +350 kcal/day in the 2nd and 3rd trimesters.",
        "Increased protein (+extra), calcium, iron and iodine.",
        "Folic acid — periconceptional and early pregnancy to prevent neural-tube defects.",
        "Iron-folate supplementation to prevent maternal anaemia.",
        "Adequate weight gain (~10–12 kg over pregnancy); avoid alcohol and limit caffeine.",
        "Manage nausea with small frequent meals; ensure fibre and fluids for constipation."
      ] },
      { h: "Nutrition in lactation", list: [
        "Highest energy demand — about +600 kcal/day to support milk production.",
        "Increased protein, calcium, and fluids; continued iron/iodine.",
        "Good maternal nutrition supports milk quantity and the mother's own stores.",
        "Encourage exclusive breastfeeding for the first 6 months."
      ] },
      { h: "Infant nutrition — breastfeeding", p: "Breast milk is the ideal, complete food for the first 6 months.", list: [
        "Exclusive breastfeeding for 6 months (no water or other food).",
        "Colostrum — the first milk, rich in antibodies (IgA) and vitamin A; should not be discarded.",
        "Benefits — perfect nutrition, immunity, bonding, cheap, safe, protects against infection and later disease; benefits the mother (involution, spacing).",
        "Continue breastfeeding up to 2 years alongside complementary foods."
      ] },
      { h: "Complementary feeding", p: "From 6 months, breast milk alone no longer meets needs; safe, adequate complementary foods are introduced while continuing breastfeeding.", list: [
        "Start at 6 months with soft, mashed, energy- and nutrient-dense foods.",
        "Increase amount, thickness and variety with age; add oil for energy density.",
        "Ensure hygiene to prevent diarrhoea; responsive feeding.",
        "Include family foods rich in iron and vitamin A by ~1 year."
      ] },
      { h: "Childhood nutrition", list: [
        "Rapid growth needs adequate energy, good-quality protein, calcium, iron and vitamins.",
        "Establish healthy eating habits; regular meals and healthy snacks.",
        "Vulnerable to protein-energy malnutrition, anaemia and vitamin A deficiency.",
        "Growth monitoring to detect faltering early; deworming and vitamin A programmes."
      ] },
      { h: "Adolescent nutrition", list: [
        "Growth spurt and puberty raise energy, protein, calcium (bone mass) and iron needs (especially menstruating girls).",
        "Risk of iron-deficiency anaemia, poor diet, skipping meals, and eating disorders.",
        "Foundation for future maternal health; adolescent girls' nutrition affects future pregnancies.",
        "Counsel on balanced meals, calcium, iron and avoiding junk food."
      ] },
      { h: "Adult nutrition", list: [
        "Focus shifts from growth to maintenance and prevention of chronic disease.",
        "Balanced diet with energy matched to activity to prevent obesity.",
        "Limit salt, sugar and saturated fat; ensure fibre, fruit and vegetables.",
        "Adequate calcium and iron (women); healthy weight to prevent diabetes and heart disease."
      ] },
      { h: "Nutrition in old age (geriatric)", list: [
        "Lower energy need (reduced BMR/activity) but similar or higher needs for protein, calcium, vitamin D, B12 and fibre.",
        "Problems — poor appetite, dental problems, altered taste/smell, dysphagia, constipation, reduced thirst (dehydration risk), social isolation, low income, polypharmacy.",
        "Provide soft, nutrient-dense, easily digestible meals; encourage fluids and fibre.",
        "Screen for malnutrition (e.g. MNA) and watch for micronutrient deficiencies."
      ] },
      { h: "Clinical relevance and nursing management", list: [
        "Promote and support exclusive breastfeeding and timely complementary feeding.",
        "Give antenatal iron-folate and nutrition counselling; monitor maternal weight gain.",
        "Perform growth monitoring in children and screen adolescents/elderly for anaemia and malnutrition.",
        "Adapt texture and nutrient density for the elderly and those with dysphagia; prevent dehydration.",
        "Educate families on life-stage-appropriate, affordable local diets."
      ] },
      { h: "Common nutritional problems by life stage (summary)", list: [
        "Pregnancy/lactation — anaemia, calcium and iodine deficiency, inadequate weight gain.",
        "Infancy — inadequate exclusive breastfeeding, late/inappropriate complementary feeding, diarrhoea-linked malnutrition.",
        "Childhood — protein-energy malnutrition, anaemia, vitamin A deficiency, growth faltering.",
        "Adolescence — iron-deficiency anaemia, poor diet, eating disorders, calcium shortfall.",
        "Adulthood — overweight/obesity and diet-related non-communicable disease.",
        "Old age — undernutrition, dehydration, constipation and micronutrient (B12, D) deficiency."
      ] },
      { h: "Normal values / key figures", list: [
        "Extra energy: pregnancy +~350 kcal/day; lactation +~600 kcal/day.",
        "Exclusive breastfeeding 0–6 months; complementary feeding from 6 months; breastfeeding to 2 years.",
        "Recommended pregnancy weight gain ~10–12 kg (normal-BMI woman).",
        "First 1000 days (conception to 2 years) are the critical window for growth."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Describe the nutritional requirements during pregnancy and lactation.",
      "Explain the advantages of breastfeeding and the principles of complementary feeding.",
      "Discuss the nutritional needs and common problems of adolescents.",
      "Describe the nutritional problems and dietary management of the elderly.",
      "Explain the nurse's role in promoting optimal nutrition across the life cycle."
    ],
    assessment: [
      { type: "mcq", q: "A lactating mother asks how much extra energy she needs. The best answer is about:", options: ["+50 kcal/day", "+150 kcal/day", "+600 kcal/day", "No extra energy"], answer: 2, rationale: "Lactation has the highest demand, about +600 kcal/day, to support milk production." },
      { type: "mcq", q: "Exclusive breastfeeding is recommended for the first:", options: ["3 months", "6 months", "12 months", "24 months"], answer: 1, rationale: "WHO recommends exclusive breastfeeding for the first 6 months of life." },
      { type: "mcq", q: "Colostrum should be given to the newborn because it is rich in:", options: ["Antibodies (IgA) and vitamin A", "Fat only", "Iron only", "Water"], answer: 0, rationale: "Colostrum is rich in protective antibodies and vitamin A and should not be discarded." },
      { type: "mcq", q: "Complementary feeding should begin at:", options: ["Birth", "3 months", "6 months", "12 months"], answer: 2, rationale: "From 6 months breast milk alone is insufficient, so complementary foods are introduced." },
      { type: "mcq", q: "A pregnant woman should take folic acid mainly to prevent:", options: ["Gestational diabetes", "Neural-tube defects in the baby", "Hypertension", "Goitre"], answer: 1, rationale: "Periconceptional folate reduces the risk of neural-tube defects." },
      { type: "mcq", q: "Which deficiency are adolescent girls especially at risk of?", options: ["Vitamin K deficiency", "Vitamin D toxicity", "Iron-deficiency anaemia", "Excess protein"], answer: 2, rationale: "Menstrual iron loss plus growth raises the risk of iron-deficiency anaemia in adolescent girls." },
      { type: "mcq", q: "Compared with a young adult, an older adult typically needs:", options: ["More energy but less protein", "Less energy but similar or more protein, calcium and vitamin D", "More of everything", "Only carbohydrate"], answer: 1, rationale: "Energy needs fall with age while protein and several micronutrient needs stay high or rise." },
      { type: "mcq", q: "The recommended weight gain over a normal pregnancy is approximately:", options: ["2–3 kg", "10–12 kg", "20–25 kg", "No gain"], answer: 1, rationale: "About 10–12 kg is recommended for a woman of normal pre-pregnancy BMI." },
      { type: "mcq", q: "The 'first 1000 days' critical window for nutrition refers to:", options: ["Birth to age 3", "Conception to age 2", "Age 2 to 5", "Adolescence"], answer: 1, rationale: "The first 1000 days span conception to a child's second birthday, decisive for growth and development." },
      { type: "mcq", q: "For an elderly patient with poor appetite and dental problems, the nurse should provide:", options: ["Large infrequent meals", "Only clear fluids", "A high-salt diet", "Soft, nutrient-dense, easily chewed meals"], answer: 3, rationale: "Soft, energy- and nutrient-dense small meals meet needs despite reduced appetite and chewing ability." }
      , { type: "fill", q: "During pregnancy the extra energy requirement in the 2nd and 3rd trimesters is about +____ kcal/day.", accept: ["350", "300"], rationale: "About +350 kcal/day is added in later pregnancy." }
      , { type: "fill", q: "The protein- and antibody-rich first breast milk produced after birth is called ____.", accept: ["colostrum"], rationale: "Colostrum provides antibodies and vitamin A to the newborn." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "nut-12-therapeutic-diets",
    unit: "Unit 4 · Applied & Therapeutic Nutrition",
    title: "Therapeutic & Modified Diets",
    readMinutes: 24,
    summary: "Definition and purposes of therapeutic diets; principles of diet modification; the routine hospital diets (regular, soft, light, full-fluid, clear-fluid) and modified diets by consistency, nutrient content and feeding route; helping clients to eat; with the nurse's role in therapeutic feeding.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and purpose", p: "A therapeutic diet is a normal diet modified to suit the requirements of a particular disease or condition. It is prescribed as part of treatment.", list: [
        "To maintain or restore good nutritional status.",
        "To correct deficiencies and rest a diseased organ.",
        "To adjust intake to the body's ability to metabolise nutrients.",
        "To bring about specific changes (e.g. lower salt, control sugar) and aid recovery."
      ] },
      { h: "Principles of therapeutic diet planning", p: "A therapeutic diet is built by modifying the normal diet as little as necessary, keeping it adequate, acceptable and based on the patient's usual pattern, culture and food likes. Modifications may change nutrients, energy, consistency, texture, spacing or feeding route." },
      { h: "Types of diet modification", figure: {
        caption: "Ways a normal diet may be modified therapeutically.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of diet modification."><rect x="190" y="10" width="180" height="36" rx="8" fill="#0F4C3A"/><text x="280" y="33" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">DIET MODIFICATION</text><rect x="10" y="90" width="130" height="40" rx="7" fill="#15803D"/><text x="75" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">Consistency</text><text x="75" y="122" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F0FDF4">fluid, soft, solid</text><rect x="150" y="90" width="130" height="40" rx="7" fill="#15803D"/><text x="215" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">Energy</text><text x="215" y="122" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F0FDF4">high/low calorie</text><rect x="290" y="90" width="130" height="40" rx="7" fill="#15803D"/><text x="355" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">Nutrient</text><text x="355" y="122" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F0FDF4">low salt/protein</text><rect x="430" y="90" width="120" height="40" rx="7" fill="#15803D"/><text x="490" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">Route</text><text x="490" y="122" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#F0FDF4">oral/enteral/PN</text><line x1="280" y1="46" x2="75" y2="88" stroke="#0F4C3A" stroke-width="1.3"/><line x1="280" y1="46" x2="215" y2="88" stroke="#0F4C3A" stroke-width="1.3"/><line x1="280" y1="46" x2="355" y2="88" stroke="#0F4C3A" stroke-width="1.3"/><line x1="280" y1="46" x2="490" y2="88" stroke="#0F4C3A" stroke-width="1.3"/></svg>'
      } },
      { h: "Routine hospital diets by consistency", list: [
        "Regular (normal/full) diet — a balanced normal diet for patients with no dietary restriction.",
        "Soft diet — soft-textured, low-fibre, mildly seasoned; for chewing/swallowing difficulty, mild GI conditions, post-operative transition.",
        "Light (semi-solid) diet — between soft and regular; for convalescence.",
        "Full-fluid diet — all foods liquid at room/body temperature (milk, soups, custard, juices); for those unable to chew.",
        "Clear-fluid diet — clear liquids leaving little residue (water, clear soup, clear juice, tea); short-term, post-operative, pre-procedure."
      ] },
      { h: "Diet progression", p: "After surgery or acute illness, diet is usually progressed as tolerated: NPO → clear fluids → full fluids → soft → light → regular. The nurse advances the diet according to the patient's tolerance, bowel sounds and the physician's orders." },
      { h: "Modified-consistency and texture diets", list: [
        "Mechanical soft / pureed — for dysphagia or no teeth; food is minced or pureed.",
        "Thickened fluids — for dysphagia to reduce aspiration risk.",
        "Low-residue / low-fibre — to reduce stool bulk (acute GI disease, pre-surgery).",
        "High-fibre — for constipation and diverticulosis."
      ] },
      { h: "Nutrient-modified diets", list: [
        "Energy — high-calorie (undernutrition, burns) or low-calorie (obesity).",
        "Protein — high-protein (healing, burns) or low-protein (renal/hepatic failure).",
        "Sodium — low-salt (hypertension, heart/renal/liver disease with oedema).",
        "Carbohydrate — controlled/consistent carbohydrate (diabetes).",
        "Fat — low-fat/low-cholesterol (dyslipidaemia, gallbladder/malabsorption).",
        "Others — low-purine (gout), gluten-free (coeliac), potassium/phosphate-restricted (renal)."
      ] },
      { h: "Feeding-route diets", p: "When oral intake is inadequate or impossible, nutrition is given by enteral (tube) or parenteral (intravenous) routes — covered in detail in the next topic. The choice follows the principle: 'if the gut works, use it.'" },
      { h: "Helping clients to eat", list: [
        "Prepare the patient — position upright, oral hygiene, hand washing, comfort and pain relief.",
        "Prepare the environment — clean, pleasant, unhurried; remove unpleasant sights/smells.",
        "Assist as needed — cut food, open packets, feed dependent patients patiently at their pace.",
        "Ensure safe swallowing (especially in dysphagia/stroke) and prevent aspiration.",
        "Respect preferences, culture and dignity; encourage independence where possible."
      ] },
      { h: "Clinical relevance and nursing management", list: [
        "Understand and correctly implement the prescribed therapeutic diet; explain it to the patient/family.",
        "Progress or modify diet per orders and patient tolerance; monitor intake and tolerance.",
        "Ensure diets remain adequate, palatable and culturally acceptable to promote compliance.",
        "Assist feeding safely, prevent aspiration, and record intake accurately.",
        "Liaise with the dietitian and evaluate the patient's nutritional response."
      ] },
      { h: "Ensuring adequacy and compliance", p: "A restricted therapeutic diet risks nutritional inadequacy and poor acceptance. The nurse and dietitian keep the diet as close to normal as the condition allows, preserve energy and protein, respect culture, religion and food likes, present food attractively, involve the patient/family in planning, and explain the reason for each restriction. Monitoring intake and adjusting texture, timing and variety improve compliance and prevent iatrogenic malnutrition." },
      { h: "Normal values / key figures", list: [
        "Typical post-operative progression: NPO → clear fluid → full fluid → soft → regular.",
        "Low-sodium diet: often <2 g sodium (~5 g salt)/day in cardiac/renal disease.",
        "High-protein therapeutic diet: ~1.2–2.0 g/kg/day for healing/burns.",
        "Principle: 'if the gut works, use it' (enteral before parenteral)."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Define a therapeutic diet and state its purposes.",
      "Describe the routine hospital diets classified by consistency.",
      "Explain the types of diet modification with examples.",
      "Describe the diet progression after surgery.",
      "Discuss the nursing measures for helping a dependent patient to eat safely."
    ],
    assessment: [
      { type: "mcq", q: "A patient two days after abdominal surgery has returning bowel sounds. The most appropriate first oral diet is:", options: ["Regular diet", "Clear-fluid diet", "High-fibre diet", "Fried foods"], answer: 1, rationale: "Post-operative diet is progressed from clear fluids upward as tolerance and bowel function return." },
      { type: "mcq", q: "A therapeutic diet is best defined as:", options: ["A normal diet modified to suit a disease or condition", "A weight-loss fad diet", "A diet with no restrictions", "Only intravenous feeding"], answer: 0, rationale: "A therapeutic diet is the normal diet modified as part of treatment for a specific condition." },
      { type: "mcq", q: "For a patient with dysphagia and aspiration risk, the safest fluids are:", options: ["Thin clear fluids", "Thickened fluids", "Carbonated drinks", "No fluids at all"], answer: 1, rationale: "Thickened fluids slow flow and reduce aspiration risk in dysphagia." },
      { type: "mcq", q: "A low-sodium diet is typically prescribed for a patient with:", options: ["Iron-deficiency anaemia", "Constipation", "Hypertension with heart failure", "Night blindness"], answer: 2, rationale: "Sodium restriction helps control fluid retention and blood pressure in cardiac/renal disease." },
      { type: "mcq", q: "Which diet consists only of liquids that leave minimal residue, used before procedures?", options: ["Soft diet", "Full-fluid diet", "Clear-fluid diet", "High-fibre diet"], answer: 2, rationale: "A clear-fluid diet (water, clear soup/juice, tea) leaves little residue and is used short-term." },
      { type: "mcq", q: "The guiding principle 'if the gut works, use it' means:", options: ["Always use IV nutrition", "Prefer enteral (gut) feeding over parenteral when the gut functions", "Never feed by tube", "Give only clear fluids"], answer: 1, rationale: "Enteral feeding is preferred over parenteral whenever the gastrointestinal tract is functional." },
      { type: "mcq", q: "A high-protein therapeutic diet is most appropriate for a patient with:", options: ["Advanced kidney failure", "Hepatic encephalopathy", "Gout", "Extensive burns needing tissue repair"], answer: 3, rationale: "Burns cause catabolism and need increased protein; renal/hepatic conditions may need protein control." },
      { type: "mcq", q: "When helping a patient with a stroke to eat, the priority is to:", options: ["Feed quickly to save time", "Lay the patient flat", "Position upright and ensure safe swallowing to prevent aspiration", "Give large mouthfuls"], answer: 2, rationale: "Upright positioning and safe-swallow techniques prevent aspiration in dysphagic patients." },
      { type: "mcq", q: "The correct order of post-operative diet progression is:", options: ["Regular → soft → clear fluid", "NPO → clear fluid → full fluid → soft → regular", "Full fluid → NPO → regular", "Soft → clear fluid → NPO"], answer: 1, rationale: "Diet advances from NPO through clear and full fluids to soft and then regular as tolerated." },
      { type: "mcq", q: "A key principle when planning any therapeutic diet is to:", options: ["Ignore the patient's food habits", "Modify the normal diet as little as necessary and keep it adequate and acceptable", "Remove all protein", "Make it as different as possible"], answer: 1, rationale: "Minimal, acceptable modification of the normal diet promotes adequacy and patient compliance." }
      , { type: "fill", q: "A diet of liquids only, such as milk, soup and custard, for a patient unable to chew is a ____-fluid diet.", accept: ["full"], rationale: "A full-fluid diet includes all foods liquid at body temperature." }
      , { type: "fill", q: "A normal diet modified to treat a specific disease is called a ____ diet.", accept: ["therapeutic", "modified"], rationale: "A therapeutic (modified) diet is prescribed as part of treatment." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "nut-13-diet-in-disease",
    unit: "Unit 4 · Applied & Therapeutic Nutrition",
    title: "Diet in Disease",
    readMinutes: 26,
    summary: "Dietary management of common conditions — fever and infection, diabetes mellitus, renal disease, cardiovascular disease, gastrointestinal disorders (diarrhoea, peptic ulcer, liver disease), obesity, and stress/burns and cancer — with rationale, principles and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "General principles of diet in disease", p: "Disease alters nutrient needs, digestion, absorption, metabolism and appetite. The diet is modified to meet altered needs, rest or protect the affected organ, correct deficiencies, and support recovery, while remaining adequate and acceptable. The nurse tailors, delivers and monitors the diet in collaboration with the dietitian." },
      { h: "Diet in fever and infection", list: [
        "Fever raises BMR (~13% per °C) and catabolism, increasing energy and protein needs.",
        "Give a high-energy, high-protein diet with plenty of fluids to replace losses.",
        "Small, frequent, soft, easily digestible, palatable meals suit poor appetite.",
        "Ensure vitamins (A, C, B-complex) and electrolyte replacement in prolonged fever."
      ] },
      { h: "Diet in diabetes mellitus", list: [
        "Aim — maintain near-normal blood glucose and lipids and a healthy weight.",
        "Consistent carbohydrate intake, favouring complex, high-fibre, low-GI foods; limit free sugar.",
        "Distribute carbohydrate across regular meals/snacks to match medication and avoid hypo-/hyperglycaemia.",
        "Total energy controlled to achieve/maintain ideal weight; limit saturated fat.",
        "Nursing — teach carbohydrate awareness, meal timing, hypoglycaemia recognition and glucose monitoring."
      ] },
      { h: "Diet in renal disease", list: [
        "Chronic kidney disease — controlled protein (high-biological-value) to reduce urea; restrict sodium, potassium and phosphate as indicated; fluid balanced to output.",
        "Dialysis — higher protein needs (losses); still restrict potassium, phosphate, sodium and fluid.",
        "Nephrotic syndrome — adequate protein and sodium restriction for oedema.",
        "Nursing — monitor weight, oedema, electrolytes and fluid balance; educate on restricted foods."
      ] },
      { h: "Diet in cardiovascular disease", list: [
        "Hypertension — low-salt (DASH-style) diet, rich in fruit, vegetables and potassium; weight control; limit alcohol.",
        "Coronary heart disease/dyslipidaemia — low saturated and trans fat, low cholesterol; more fibre, fish (omega-3), fruit and vegetables.",
        "Heart failure — sodium and fluid restriction to control oedema.",
        "Nursing — teach low-salt/low-fat cooking, label reading, and monitor weight and blood pressure."
      ] },
      { h: "Diet in gastrointestinal disorders", list: [
        "Diarrhoea — oral rehydration solution (ORS) to replace fluid/electrolytes, continued feeding, plus zinc in children; avoid high-fat/high-sugar foods.",
        "Peptic ulcer — small frequent bland meals; avoid irritants (very spicy foods, alcohol, caffeine, smoking); no rigid milk-only diets.",
        "Liver disease/hepatitis — adequate energy and protein; restrict protein and give branched-chain amino acids only in encephalopathy; low salt with ascites; no alcohol.",
        "Constipation — high fibre and fluids."
      ] },
      { h: "Diet in obesity", list: [
        "Create a modest energy deficit (e.g. −500 to −1000 kcal/day) for gradual weight loss (~0.5 kg/week).",
        "High-fibre, high-satiety, nutrient-dense foods; limit fat, sugar and refined carbohydrate.",
        "Maintain protein and micronutrient adequacy; increase physical activity.",
        "Nursing — support behaviour change, portion control and realistic goals; monitor weight/BMI."
      ] },
      { h: "Diet in severe stress, burns and surgery", list: [
        "Hypermetabolism and catabolism sharply raise energy and protein needs.",
        "High-energy, high-protein diet (protein up to ~1.5–2.0 g/kg/day); adequate vitamins/minerals (vitamin C, zinc for healing).",
        "Enteral or parenteral support if oral intake is inadequate.",
        "Nursing — monitor weight, wound healing, intake and nitrogen balance."
      ] },
      { h: "Diet in cancer and HIV/AIDS", list: [
        "High-energy, high-protein diet to counter weight loss and cachexia.",
        "Manage symptoms — nausea, mouth sores, altered taste, anorexia — with small, frequent, appealing, soft meals.",
        "Ensure food safety (immunocompromised); use supplements/enteral feeding when needed.",
        "Nursing — symptom-based feeding, oral care, monitoring weight and intake."
      ] },
      { h: "Summary of key diet modifications", figure: {
        caption: "Key dietary modification for selected conditions.",
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diet modifications by condition."><rect x="20" y="15" width="520" height="30" rx="5" fill="#0F4C3A"/><text x="150" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">CONDITION</text><text x="410" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">KEY MODIFICATION</text><rect x="20" y="47" width="260" height="26" fill="#DCFCE7" stroke="#15803D"/><rect x="280" y="47" width="260" height="26" fill="#F0FDF4" stroke="#15803D"/><text x="30" y="65" font-family="sans-serif" font-size="10" fill="#0F4C3A">Diabetes</text><text x="290" y="65" font-family="sans-serif" font-size="10" fill="#0F4C3A">Consistent low-GI carbohydrate</text><rect x="20" y="73" width="260" height="26" fill="#DCFCE7" stroke="#15803D"/><rect x="280" y="73" width="260" height="26" fill="#F0FDF4" stroke="#15803D"/><text x="30" y="91" font-family="sans-serif" font-size="10" fill="#0F4C3A">Hypertension/CHF</text><text x="290" y="91" font-family="sans-serif" font-size="10" fill="#0F4C3A">Low sodium (salt) / fluid restrict</text><rect x="20" y="99" width="260" height="26" fill="#DCFCE7" stroke="#15803D"/><rect x="280" y="99" width="260" height="26" fill="#F0FDF4" stroke="#15803D"/><text x="30" y="117" font-family="sans-serif" font-size="10" fill="#0F4C3A">Renal (CKD)</text><text x="290" y="117" font-family="sans-serif" font-size="10" fill="#0F4C3A">Controlled protein, K, PO4, Na</text><rect x="20" y="125" width="260" height="26" fill="#DCFCE7" stroke="#15803D"/><rect x="280" y="125" width="260" height="26" fill="#F0FDF4" stroke="#15803D"/><text x="30" y="143" font-family="sans-serif" font-size="10" fill="#0F4C3A">Fever/burns</text><text x="290" y="143" font-family="sans-serif" font-size="10" fill="#0F4C3A">High energy + high protein</text><rect x="20" y="151" width="260" height="26" fill="#DCFCE7" stroke="#15803D"/><rect x="280" y="151" width="260" height="26" fill="#F0FDF4" stroke="#15803D"/><text x="30" y="169" font-family="sans-serif" font-size="10" fill="#0F4C3A">Obesity</text><text x="290" y="169" font-family="sans-serif" font-size="10" fill="#0F4C3A">Energy deficit, high fibre</text><rect x="20" y="177" width="260" height="26" fill="#DCFCE7" stroke="#15803D"/><rect x="280" y="177" width="260" height="26" fill="#F0FDF4" stroke="#15803D"/><text x="30" y="195" font-family="sans-serif" font-size="10" fill="#0F4C3A">Diarrhoea</text><text x="290" y="195" font-family="sans-serif" font-size="10" fill="#0F4C3A">ORS + continued feeding (+zinc)</text></svg>'
      } },
      { h: "Nursing management (general)", list: [
        "Understand the rationale for each therapeutic diet and implement it accurately.",
        "Educate patients/families on food choices, cooking methods and label reading for adherence.",
        "Monitor intake, weight, relevant biochemistry (glucose, electrolytes, lipids) and symptoms.",
        "Provide/assist appropriate feeding route and manage symptoms affecting intake.",
        "Collaborate with the dietitian and evaluate the patient's nutritional response."
      ] },
      { h: "Normal values / key figures", list: [
        "Fever raises energy needs ~13% per °C above normal.",
        "Safe weight loss ~0.5 kg/week (≈500 kcal/day deficit).",
        "Low-sodium cardiac/renal diet often <2 g sodium (~5 g salt)/day.",
        "Burns/stress protein ~1.5–2.0 g/kg/day."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Describe the principles of dietary management in diabetes mellitus.",
      "Explain the dietary modifications in chronic kidney disease.",
      "Discuss the diet for a patient with hypertension and heart failure.",
      "Explain the nutritional management of a patient with extensive burns.",
      "Describe the dietary management of a child with acute diarrhoea."
    ],
    assessment: [
      { type: "mcq", q: "For a patient with type 2 diabetes, the best carbohydrate advice is to:", options: ["Avoid all carbohydrate", "Take consistent amounts of low-GI, high-fibre carbohydrate spread across meals", "Eat large amounts of sugar", "Only eat white rice"], answer: 1, rationale: "Consistent, low-GI, high-fibre carbohydrate distributed across meals stabilises blood glucose." },
      { type: "mcq", q: "A child with acute watery diarrhoea should receive:", options: ["Nil by mouth for 24 hours", "ORS with continued feeding and zinc", "A high-fat diet", "Only tea"], answer: 1, rationale: "ORS replaces fluid/electrolytes; continued feeding and zinc reduce duration and aid recovery." },
      { type: "mcq", q: "In heart failure with oedema, the key dietary modification is:", options: ["High salt", "High saturated fat", "Sodium and fluid restriction", "Low protein only"], answer: 2, rationale: "Restricting sodium and fluid reduces fluid retention and cardiac workload." },
      { type: "mcq", q: "A patient with chronic kidney disease and high urea is likely to be prescribed:", options: ["A very high-protein diet", "Unrestricted potassium", "High salt", "Controlled high-biological-value protein with potassium/phosphate restriction"], answer: 3, rationale: "Controlled quality protein and mineral restriction reduce uraemic load in CKD." },
      { type: "mcq", q: "The dietary priority for a patient with extensive burns is:", options: ["Low-protein, low-calorie", "High-energy, high-protein", "Clear fluids only long term", "Low-calorie diet"], answer: 1, rationale: "Hypermetabolism and tissue repair in burns require high energy and protein." },
      { type: "mcq", q: "For a patient with a peptic ulcer, appropriate advice is to:", options: ["Take small frequent bland meals and avoid irritants", "Drink large amounts of coffee", "Eat very spicy food", "Fast completely"], answer: 0, rationale: "Small frequent bland meals and avoiding irritants (spice, alcohol, caffeine, smoking) reduce symptoms." },
      { type: "mcq", q: "In hepatic encephalopathy, protein is temporarily restricted because:", options: ["Protein has no value", "Reducing protein lowers ammonia production that worsens encephalopathy", "The patient is obese", "Protein raises blood sugar"], answer: 1, rationale: "Protein metabolism generates ammonia, which the failing liver cannot clear, worsening encephalopathy." },
      { type: "mcq", q: "A safe rate of weight loss in obesity management is about:", options: ["3 kg per week", "0.5 kg per week", "5 kg per week", "No limit"], answer: 1, rationale: "About 0.5 kg/week (a ~500 kcal/day deficit) is a safe, sustainable rate." },
      { type: "mcq", q: "A febrile patient with a temperature of 40°C has increased needs for:", options: ["Energy and protein plus fluids", "Only water", "Reduced calories", "No change"], answer: 0, rationale: "Fever raises BMR and catabolism, increasing energy, protein and fluid requirements." },
      { type: "mcq", q: "For a cancer patient with cachexia and anorexia, the best approach is:", options: ["Large infrequent meals", "Small, frequent, high-energy high-protein appealing meals", "Clear fluids only", "A low-calorie diet"], answer: 1, rationale: "Small, frequent, energy- and protein-dense meals counter weight loss and poor appetite." }
      , { type: "fill", q: "The mainstay of dietary treatment for acute diarrhoea to replace fluid and electrolytes is ____ (abbreviation).", accept: ["ORS", "oral rehydration solution", "oral rehydration salts"], rationale: "ORS replaces water and electrolytes lost in diarrhoea." }
      , { type: "fill", q: "In hypertension, the key dietary restriction is of ____ (salt).", accept: ["sodium", "salt"], rationale: "Reducing sodium (salt) helps lower blood pressure." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "nut-14-enteral-parenteral",
    unit: "Unit 4 · Applied & Therapeutic Nutrition",
    title: "Enteral & Parenteral Nutrition",
    readMinutes: 24,
    summary: "Nutrition support when oral intake is inadequate — indications; enteral (tube) feeding routes, formulas, methods and complications; parenteral nutrition (peripheral and total); and the nurse's role in safe administration and prevention of complications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nutrition support and its rationale", p: "Nutrition support provides nutrients by tube (enteral) or vein (parenteral) when a patient cannot meet needs orally. The guiding principle is 'if the gut works, use it' — enteral feeding is preferred because it is more physiological, cheaper, safer and preserves gut integrity and immunity." },
      { h: "Choosing the route", figure: {
        caption: "Decision pathway for choosing a route of nutrition support.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Route of nutrition support decision."><defs><marker id="nutArr14" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="200" y="10" width="160" height="34" rx="8" fill="#0F4C3A"/><text x="280" y="32" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Oral intake adequate?</text><rect x="20" y="80" width="150" height="34" rx="7" fill="#22C55E"/><text x="95" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">YES → Oral diet</text><rect x="200" y="80" width="160" height="34" rx="7" fill="#15803D"/><text x="280" y="97" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">NO — is the gut</text><text x="280" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">working?</text><rect x="200" y="150" width="150" height="34" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="275" y="172" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">YES → Enteral (tube)</text><rect x="380" y="150" width="170" height="34" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="465" y="172" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">NO → Parenteral (IV)</text><line x1="240" y1="44" x2="120" y2="78" stroke="#0F4C3A" stroke-width="1.5" marker-end="url(#nutArr14)"/><line x1="280" y1="44" x2="280" y2="78" stroke="#0F4C3A" stroke-width="1.5" marker-end="url(#nutArr14)"/><line x1="280" y1="114" x2="275" y2="148" stroke="#0F4C3A" stroke-width="1.5" marker-end="url(#nutArr14)"/><line x1="320" y1="114" x2="450" y2="148" stroke="#0F4C3A" stroke-width="1.5" marker-end="url(#nutArr14)"/></svg>'
      } },
      { h: "Enteral nutrition — indications", p: "Enteral (tube) feeding is used when the GI tract works but the patient cannot eat enough orally — e.g. unconsciousness/coma, stroke or dysphagia, severe anorexia, head/neck or oesophageal obstruction, mechanical ventilation, severe burns or hypermetabolism, and refusal or inability to swallow safely." },
      { h: "Enteral routes", list: [
        "Nasogastric (NG) tube — nose to stomach; short-term (<4–6 weeks); the commonest route.",
        "Nasojejunal — nose to jejunum; for high aspiration risk or gastric problems.",
        "Gastrostomy (PEG) — tube directly into the stomach; long-term feeding.",
        "Jejunostomy — tube into the jejunum; long-term or when the stomach must be bypassed."
      ] },
      { h: "Enteral formulas and methods", list: [
        "Formulas — polymeric (whole nutrients), elemental/semi-elemental (predigested), or disease-specific; can be commercial or blenderised.",
        "Bolus — a set volume by syringe several times a day (stomach only).",
        "Intermittent/gravity — over 30–60 minutes several times a day.",
        "Continuous — slow drip by pump, often for jejunal or critically ill patients."
      ] },
      { h: "Enteral feeding — nursing management", list: [
        "Confirm tube position before each feed (aspirate pH ≤5.5 / X-ray for initial placement).",
        "Keep the patient's head elevated 30–45° during and after feeding to prevent aspiration.",
        "Check gastric residual volume as per protocol; give feed at room temperature.",
        "Flush the tube with water before and after feeds/medications to prevent blockage.",
        "Maintain hygiene of feed and equipment; monitor tolerance, intake and bowel habit."
      ] },
      { h: "Enteral complications", list: [
        "Aspiration pneumonia (most serious) — from regurgitation.",
        "Tube blockage, displacement or nasal/mucosal irritation.",
        "Diarrhoea, nausea, bloating, cramps (rate/formula/contamination related).",
        "Metabolic — hyperglycaemia, electrolyte and fluid imbalance, refeeding syndrome."
      ] },
      { h: "Parenteral nutrition (PN)", p: "Parenteral nutrition delivers nutrients directly into a vein, bypassing the gut. It is used when the GI tract cannot be used or is inadequate — e.g. intestinal obstruction, short bowel syndrome, severe malabsorption, prolonged ileus, severe pancreatitis, or the gut needs complete rest.", list: [
        "Peripheral parenteral nutrition (PPN) — via a peripheral vein; short-term, lower concentration.",
        "Total parenteral nutrition (TPN) — via a central vein (e.g. subclavian); provides complete nutrition long-term with concentrated solutions."
      ] },
      { h: "Composition of PN", p: "PN solutions contain glucose (dextrose) for energy, amino acids for protein, lipid emulsions, plus electrolytes, vitamins and trace elements — formulated to meet the patient's full requirements." },
      { h: "Parenteral nutrition — nursing management", list: [
        "Maintain strict aseptic technique with the central line to prevent catheter-related sepsis.",
        "Infuse via a pump at the prescribed rate; never abruptly stop TPN (risk of rebound hypoglycaemia).",
        "Monitor blood glucose, electrolytes, fluid balance, weight and signs of infection.",
        "Do not use the TPN line for other infusions/medications; change tubing per protocol.",
        "Watch for refeeding syndrome in malnourished patients (start slowly, monitor phosphate/potassium/magnesium)."
      ] },
      { h: "Parenteral complications", list: [
        "Catheter-related bloodstream infection/sepsis (major risk).",
        "Metabolic — hyperglycaemia/hypoglycaemia, electrolyte disturbance, refeeding syndrome, liver dysfunction.",
        "Mechanical — pneumothorax, thrombosis, air embolism during line insertion/use.",
        "Gut atrophy from disuse."
      ] },
      { h: "Clinical relevance", p: "Choosing and safely delivering the correct route is central to preventing and treating hospital malnutrition. Enteral feeding should be started early when possible; PN is reserved for a non-functioning gut. Refeeding syndrome is a life-threatening risk when feeding is restarted in severely malnourished patients." },
      { h: "Normal values / key figures", list: [
        "NG feeding is short-term (<4–6 weeks); PEG/jejunostomy for long-term support.",
        "Confirm NG position by aspirate pH ≤5.5 (and X-ray for initial/high-risk placement).",
        "Keep head elevated 30–45° during enteral feeding to reduce aspiration.",
        "Refeeding syndrome: watch phosphate, potassium and magnesium; feed cautiously."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Define enteral and parenteral nutrition and state the indications for each.",
      "Describe the routes and methods of enteral feeding.",
      "Discuss the nursing management and prevention of complications in tube feeding.",
      "Differentiate peripheral and total parenteral nutrition and describe TPN composition.",
      "Explain refeeding syndrome and the nurse's role in preventing it."
    ],
    assessment: [
      { type: "mcq", q: "An unconscious patient after a stroke has a functioning gut but cannot swallow. The most appropriate feeding route is:", options: ["Oral diet", "Nasogastric tube feeding", "Total parenteral nutrition", "No feeding"], answer: 1, rationale: "With a working gut but unsafe swallowing, enteral (NG) feeding is preferred over parenteral." },
      { type: "mcq", q: "The principle 'if the gut works, use it' means:", options: ["Prefer parenteral nutrition", "Avoid all tube feeding", "Prefer enteral feeding whenever the GI tract is functional", "Only give oral diet"], answer: 2, rationale: "Enteral feeding is more physiological and safer, so it is preferred when the gut functions." },
      { type: "mcq", q: "To prevent aspiration during nasogastric feeding, the nurse should:", options: ["Lay the patient flat", "Elevate the head of the bed 30–45°", "Feed quickly", "Feed cold formula fast"], answer: 1, rationale: "Head elevation reduces regurgitation and the risk of aspiration pneumonia." },
      { type: "mcq", q: "Total parenteral nutrition (TPN) is administered through a:", options: ["Nasogastric tube", "Peripheral vein only", "Central venous line", "Gastrostomy"], answer: 2, rationale: "TPN uses concentrated solutions requiring a large central vein to avoid vein damage." },
      { type: "mcq", q: "The most serious complication of parenteral nutrition is:", options: ["Constipation", "Catheter-related bloodstream infection (sepsis)", "Tooth decay", "Weight gain"], answer: 1, rationale: "Central-line infection/sepsis is a major, potentially fatal complication of PN." },
      { type: "mcq", q: "Before giving an NG feed, the nurse must first:", options: ["Give medications", "Sit the patient flat", "Warm the patient", "Confirm correct tube position"], answer: 3, rationale: "Verifying tube position (pH/X-ray) prevents feeding into the lungs." },
      { type: "mcq", q: "TPN should never be stopped abruptly mainly because of the risk of:", options: ["Hypertension", "Rebound hypoglycaemia", "Constipation", "Fever"], answer: 1, rationale: "Sudden cessation of high-dextrose TPN can cause rebound hypoglycaemia; it is tapered." },
      { type: "mcq", q: "A severely malnourished patient started on feeding develops low phosphate, potassium and magnesium. This is:", options: ["Refeeding syndrome", "Dumping syndrome", "Aspiration", "Dehydration"], answer: 0, rationale: "Refeeding syndrome causes dangerous electrolyte shifts; feed slowly and monitor these electrolytes." },
      { type: "mcq", q: "For long-term (over 6 weeks) enteral feeding, the preferred route is:", options: ["Nasogastric tube", "Percutaneous gastrostomy (PEG)", "Peripheral IV", "Clear fluids"], answer: 1, rationale: "PEG (or jejunostomy) is preferred for prolonged feeding; NG is for short-term use." },
      { type: "mcq", q: "Parenteral nutrition is indicated when the patient has:", options: ["A normally functioning gut", "A non-functioning or inaccessible gut (e.g. obstruction)", "A mild sore throat", "Good oral intake"], answer: 1, rationale: "PN is reserved for when the GI tract cannot be used, such as obstruction or short bowel." }
      , { type: "fill", q: "Feeding delivered directly into a vein, bypassing the gut, is called ____ nutrition.", accept: ["parenteral"], rationale: "Parenteral nutrition supplies nutrients intravenously." }
      , { type: "fill", q: "During nasogastric feeding the head of the bed should be elevated to at least ____ degrees to prevent aspiration.", accept: ["30", "45", "30-45", "30–45"], rationale: "Elevating the head 30–45° reduces aspiration risk." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "nut-15-malnutrition-deficiency",
    unit: "Unit 5 · Public Health Nutrition & Food Safety",
    title: "Malnutrition & Deficiency Disorders",
    readMinutes: 25,
    summary: "Concept and classification of malnutrition; protein-energy malnutrition (kwashiorkor and marasmus, with classification and management of severe acute malnutrition); the major micronutrient deficiency disorders (vitamin A deficiency, nutritional anaemia, IDD); overnutrition; and their prevention and nursing management, with a focus on Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept and classification of malnutrition", p: "Malnutrition is any disorder of nutrition — from either deficiency or excess/imbalance of nutrients.", list: [
        "Undernutrition — inadequate intake/utilisation: protein-energy malnutrition, micronutrient deficiencies, wasting, stunting, underweight.",
        "Overnutrition — excess intake: overweight, obesity and diet-related non-communicable diseases.",
        "Bangladesh faces the 'double burden' — persistent undernutrition alongside rising overnutrition."
      ] },
      { h: "Protein-energy malnutrition (PEM)", p: "PEM results from a deficiency of protein and/or energy, mainly affecting young children. It ranges from mild growth faltering to the severe forms kwashiorkor and marasmus.", figure: {
        caption: "Comparison of the two severe forms of protein-energy malnutrition.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kwashiorkor versus marasmus."><rect x="20" y="15" width="250" height="30" rx="5" fill="#0F4C3A"/><text x="145" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">KWASHIORKOR</text><rect x="290" y="15" width="250" height="30" rx="5" fill="#15803D"/><text x="415" y="35" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">MARASMUS</text><rect x="20" y="48" width="250" height="130" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="30" y="70" font-family="sans-serif" font-size="10" fill="#0F4C3A">Protein deficiency (energy ~ok)</text><text x="30" y="90" font-family="sans-serif" font-size="10" fill="#0F4C3A">Oedema (key sign)</text><text x="30" y="110" font-family="sans-serif" font-size="10" fill="#0F4C3A">Enlarged fatty liver</text><text x="30" y="130" font-family="sans-serif" font-size="10" fill="#0F4C3A">Skin/hair changes, moon face</text><text x="30" y="150" font-family="sans-serif" font-size="10" fill="#0F4C3A">Apathy; some fat retained</text><text x="30" y="170" font-family="sans-serif" font-size="10" fill="#0F4C3A">Usually 1–3 years</text><rect x="290" y="48" width="250" height="130" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="300" y="70" font-family="sans-serif" font-size="10" fill="#0F4C3A">Energy + protein deficiency</text><text x="300" y="90" font-family="sans-serif" font-size="10" fill="#0F4C3A">No oedema</text><text x="300" y="110" font-family="sans-serif" font-size="10" fill="#0F4C3A">Severe wasting, &quot;old-man&quot; face</text><text x="300" y="130" font-family="sans-serif" font-size="10" fill="#0F4C3A">Loss of fat and muscle</text><text x="300" y="150" font-family="sans-serif" font-size="10" fill="#0F4C3A">Alert but irritable, very thin</text><text x="300" y="170" font-family="sans-serif" font-size="10" fill="#0F4C3A">Usually under 1 year</text></svg>'
      } },
      { h: "Kwashiorkor", list: [
        "Cause — protein deficiency with relatively adequate energy; often after weaning onto starchy foods.",
        "Features — bilateral pitting oedema (the defining sign), 'moon face', enlarged fatty liver, muscle wasting masked by oedema, sparse discoloured ('flag sign') hair, flaky-paint dermatosis, apathy and poor appetite.",
        "Complications — infection, electrolyte imbalance, hypoglycaemia, hypothermia."
      ] },
      { h: "Marasmus", list: [
        "Cause — severe deficiency of both energy and protein (near-starvation).",
        "Features — gross wasting of fat and muscle, 'skin and bones' appearance, wizened 'old-man' face, very low weight (<60% expected), no oedema, alert but irritable, often hungry.",
        "May coexist with kwashiorkor (marasmic-kwashiorkor)."
      ] },
      { h: "Classification and diagnosis of severe acute malnutrition (SAM)", list: [
        "Weight-for-height/length below −3 SD (severe wasting), OR",
        "MUAC <11.5 cm (6–59 months), OR",
        "Bilateral pitting oedema.",
        "Moderate acute malnutrition (MAM): weight-for-height −2 to −3 SD or MUAC 11.5–12.5 cm."
      ] },
      { h: "Management of severe acute malnutrition", list: [
        "Stabilisation — treat/prevent hypoglycaemia, hypothermia, dehydration (ReSoMal), electrolyte imbalance and infection; cautious feeding (F-75) to avoid refeeding.",
        "Rehabilitation — catch-up growth with F-100 or ready-to-use therapeutic food (RUTF).",
        "Micronutrients — vitamin A, folate, zinc, and iron (added in the recovery phase, not initially).",
        "Follow-up — sensory stimulation, breastfeeding support and prevention of relapse.",
        "Uncomplicated SAM is managed in the community (CMAM); complicated cases are admitted."
      ] },
      { h: "Micronutrient deficiency disorders ('hidden hunger')", list: [
        "Vitamin A deficiency — night blindness, xerophthalmia, keratomalacia; increased child mortality; prevented by high-dose capsules, fortification and diet.",
        "Nutritional anaemia — mainly iron deficiency (also folate/B12); causes fatigue, pallor, reduced work capacity and maternal/perinatal risk; prevented by iron-folate and diet.",
        "Iodine deficiency disorders (IDD) — goitre, hypothyroidism, cretinism; prevented by salt iodisation.",
        "Zinc deficiency — poor growth, impaired immunity and diarrhoea."
      ] },
      { h: "Overnutrition", p: "Overnutrition (overweight and obesity) results from chronic energy excess and inactivity, raising the risk of type 2 diabetes, hypertension, heart disease and some cancers. It is rising in urban Bangladesh, creating a double burden alongside undernutrition; managed by dietary energy control and increased activity." },
      { h: "Prevention of malnutrition", list: [
        "Promote exclusive breastfeeding and timely, adequate complementary feeding.",
        "Ensure household food security and dietary diversity.",
        "Micronutrient supplementation and food fortification programmes.",
        "Growth monitoring, immunisation, deworming and prompt treatment of infection.",
        "Maternal nutrition, girls' education and poverty reduction; nutrition education."
      ] },
      { h: "Nursing management", list: [
        "Screen and identify malnourished/at-risk patients (MUAC, weight-for-height, oedema).",
        "Implement stabilisation and rehabilitation feeding safely, watching for refeeding syndrome.",
        "Detect and treat infection, hypoglycaemia and hypothermia in SAM.",
        "Deliver supplementation programmes and educate families on prevention and feeding.",
        "Support breastfeeding, follow-up and community-based management to prevent relapse."
      ] },
      { h: "Consequences of malnutrition", p: "Undernutrition impairs physical growth (stunting, wasting) and brain development, weakens immunity and raises the risk and severity of infection, delays wound healing and recovery, and increases child and maternal mortality. In adults it reduces work capacity and productivity. A malnutrition–infection vicious cycle operates: malnutrition lowers immunity, infection worsens nutritional status, and each aggravates the other. Overnutrition, in turn, drives non-communicable diseases." },
      { h: "Normal values / key figures", list: [
        "SAM: weight-for-height < −3 SD, MUAC <11.5 cm, or bilateral pitting oedema.",
        "Initial (stabilisation) feed F-75; recovery feed F-100/RUTF.",
        "Iron is added only in the rehabilitation phase of SAM, not at the start.",
        "Kwashiorkor = oedema present; marasmus = severe wasting, no oedema."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Classify malnutrition and explain the concept of the double burden.",
      "Differentiate kwashiorkor and marasmus in cause and clinical features.",
      "Describe the diagnostic criteria and management of severe acute malnutrition.",
      "Explain the major micronutrient deficiency disorders and their prevention.",
      "Discuss the nurse's role in the prevention and management of childhood malnutrition."
    ],
    assessment: [
      { type: "mcq", q: "A 2-year-old has bilateral pitting oedema, a 'moon face', sparse pale hair and an enlarged liver. The diagnosis is:", options: ["Marasmus", "Kwashiorkor", "Scurvy", "Rickets"], answer: 1, rationale: "Oedema with these skin/hair/liver changes is characteristic of kwashiorkor (protein deficiency)." },
      { type: "mcq", q: "A grossly wasted 8-month-old with an 'old-man' face, no oedema and very low weight has:", options: ["Kwashiorkor", "Marasmus", "Goitre", "Xerophthalmia"], answer: 1, rationale: "Severe wasting of fat and muscle without oedema is marasmus (energy + protein deficiency)." },
      { type: "mcq", q: "Which single finding is sufficient to diagnose severe acute malnutrition?", options: ["Mild pallor", "A single loose stool", "Bilateral pitting oedema", "Slight cough"], answer: 2, rationale: "Bilateral pitting oedema, MUAC <11.5 cm, or weight-for-height < −3 SD each define SAM." },
      { type: "mcq", q: "In managing SAM, iron supplementation is:", options: ["Added only in the rehabilitation (recovery) phase", "Given immediately at admission", "Never given", "Given intravenously first"], answer: 0, rationale: "Iron is delayed to the recovery phase because early iron can worsen infection risk in SAM." },
      { type: "mcq", q: "The 'double burden of malnutrition' refers to the coexistence of:", options: ["Two vitamin deficiencies", "Undernutrition and overnutrition in the same population", "Anaemia and goitre", "Marasmus and rickets"], answer: 1, rationale: "The double burden is persistent undernutrition alongside rising overweight/obesity." },
      { type: "mcq", q: "The initial stabilisation feed for a child with complicated SAM is:", options: ["F-100", "Full cream milk", "A high-iron formula", "F-75"], answer: 3, rationale: "F-75 is the lower-protein/energy stabilisation feed; F-100/RUTF is for catch-up growth later." },
      { type: "mcq", q: "'Hidden hunger' refers to:", options: ["Total starvation", "Micronutrient deficiency without obvious energy lack", "Overeating", "Loss of appetite only"], answer: 1, rationale: "Hidden hunger is micronutrient deficiency (e.g. iron, vitamin A, iodine) despite adequate calories." },
      { type: "mcq", q: "A child with severe malnutrition is at high risk during early feeding of:", options: ["Hypertension", "Obesity", "Refeeding syndrome", "Polycythaemia"], answer: 2, rationale: "Rapid feeding causes dangerous electrolyte shifts (refeeding syndrome); feeding must start cautiously." },
      { type: "mcq", q: "Uncomplicated severe acute malnutrition is best managed:", options: ["Only in intensive care", "In the community with RUTF (CMAM)", "By fasting", "With antibiotics alone"], answer: 1, rationale: "Community-based management (CMAM) with RUTF treats uncomplicated SAM; complicated cases are admitted." },
      { type: "mcq", q: "The most effective single measure to prevent childhood malnutrition in the first 6 months is:", options: ["Early complementary feeding", "High-dose iron", "A low-fat diet", "Exclusive breastfeeding"], answer: 3, rationale: "Exclusive breastfeeding for 6 months provides ideal nutrition and protection against infection." }
      , { type: "fill", q: "The form of severe protein-energy malnutrition whose defining sign is bilateral oedema is ____.", accept: ["kwashiorkor"], rationale: "Kwashiorkor is characterised by oedema due to protein deficiency." }
      , { type: "fill", q: "A mid-upper arm circumference below ____ cm in a young child indicates severe acute malnutrition.", accept: ["11.5", "11.5 cm"], rationale: "MUAC <11.5 cm (6–59 months) defines severe acute malnutrition." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "nut-16-food-hygiene-programmes",
    unit: "Unit 5 · Public Health Nutrition & Food Safety",
    title: "Food Hygiene, Safety & National Nutrition Programmes",
    readMinutes: 24,
    summary: "Food hygiene and safety — food-borne illness, contamination and the principles of safe food handling, preservation and fortification; and the major national nutrition programmes and food-safety framework of Bangladesh, with the nurse's public-health role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Food hygiene and food safety — definitions", p: "Food hygiene is all the measures needed to ensure food is safe and wholesome at every stage from production to consumption. Food safety is the assurance that food will not cause harm to the consumer when prepared and eaten as intended. Poor food hygiene causes food-borne illness — a major cause of diarrhoea and malnutrition." },
      { h: "Food-borne illness and hazards", list: [
        "Biological hazards — bacteria (Salmonella, E. coli, Vibrio cholerae, Shigella), viruses, parasites, moulds/toxins.",
        "Chemical hazards — pesticide residues, adulterants, food additives, heavy metals, cleaning agents.",
        "Physical hazards — glass, stones, hair, metal fragments.",
        "Food poisoning presents as vomiting, diarrhoea, abdominal pain and fever, and can be fatal in the young, old and immunocompromised."
      ] },
      { h: "Types of food contamination", list: [
        "Primary — present in the food source (e.g. infected animal).",
        "Cross-contamination — transfer from raw to cooked food, hands, surfaces or utensils.",
        "By food handlers — through poor personal hygiene or carrier state."
      ] },
      { h: "Principles of safe food handling (WHO five keys)", figure: {
        caption: "WHO's Five Keys to Safer Food.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WHO five keys to safer food."><rect x="130" y="10" width="300" height="30" rx="6" fill="#0F4C3A"/><text x="280" y="30" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">FIVE KEYS TO SAFER FOOD</text><rect x="20" y="60" width="100" height="120" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="70" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">1. Keep</text><text x="70" y="126" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">clean</text><rect x="130" y="60" width="100" height="120" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="180" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">2. Separate</text><text x="180" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">raw/cooked</text><rect x="240" y="60" width="100" height="120" rx="8" fill="#22C55E"/><text x="290" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">3. Cook</text><text x="290" y="129" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">thoroughly</text><rect x="350" y="60" width="100" height="120" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">4. Safe</text><text x="400" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">temperatures</text><rect x="460" y="60" width="90" height="120" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="505" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">5. Safe water</text><text x="505" y="121" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">&amp; raw materials</text></svg>'
      } },
      { h: "The danger zone and safe temperatures", p: "Bacteria multiply fastest in the 'danger zone' of about 5–60°C. Keep hot food hot (>60°C) and cold food cold (<5°C). Cook food thoroughly (core >70°C), reheat once and thoroughly, cool leftovers quickly, and avoid holding cooked food at room temperature for long periods." },
      { h: "Food preservation", p: "Preservation prevents spoilage and food-borne illness and reduces waste by stopping microbial and enzyme action.", list: [
        "By low temperature — refrigeration and freezing.",
        "By high temperature — pasteurisation, boiling, canning, sterilisation.",
        "By drying/dehydration — removing water (sun-dried fish, cereals, pulses).",
        "By salting, sugaring, smoking and pickling (acid) — reduce available water/pH.",
        "By chemical preservatives and by irradiation.",
        "Preservation should retain nutritive value and food safety."
      ] },
      { h: "Preserving nutritive value in cooking", list: [
        "Use minimal water and avoid discarding cooking water (retains water-soluble vitamins/minerals).",
        "Cook for the shortest time; avoid overcooking and repeated reheating.",
        "Cut vegetables just before cooking; avoid soaking after cutting.",
        "Steam or pressure-cook rather than boiling heavily; avoid excess frying."
      ] },
      { h: "Food fortification and adulteration", list: [
        "Fortification — adding nutrients to foods (iodised salt, vitamin A-fortified edible oil, fortified flour) to prevent deficiency.",
        "Adulteration — adding inferior or harmful substances to food; a public-health and legal concern controlled by food-safety law."
      ] },
      { h: "National nutrition programmes in Bangladesh", list: [
        "National Nutrition Services (NNS) / National Nutrition Programme — mainstreaming nutrition into health services.",
        "Vitamin A supplementation — twice-yearly high-dose capsules for children (National Vitamin A Plus campaign).",
        "Iron-folic acid supplementation for pregnant women and adolescents; anaemia control.",
        "Universal salt iodisation to control iodine deficiency disorders.",
        "Community-based management of acute malnutrition (CMAM) and IMCI.",
        "Baby-Friendly Hospital Initiative and breastfeeding promotion; the BMS (breast-milk substitute) marketing regulations.",
        "School feeding, garden/homestead food production, and food fortification (oil, salt).",
        "Regulation — Bangladesh Food Safety Authority (BFSA) and the Safe Food Act 2013."
      ] },
      { h: "Clinical relevance", p: "Food-borne disease is a leading cause of diarrhoea and undernutrition, especially in children. Effective hygiene, safe water and preservation, together with national supplementation and fortification programmes, prevent both infection and micronutrient deficiency. Nurses are key frontline agents in delivering and teaching these measures." },
      { h: "Nursing management / public-health role", list: [
        "Teach the WHO five keys, hand hygiene, safe water, and safe cooking/storage temperatures.",
        "Promote and administer national programmes — vitamin A campaigns, antenatal iron-folate, iodised salt, immunisation, deworming.",
        "Support breastfeeding and Baby-Friendly practices; counsel on safe complementary feeding.",
        "Detect and report food-borne illness outbreaks; educate on food preservation and avoiding adulterated food.",
        "Counsel on nutrient-preserving cooking methods and household food safety."
      ] },
      { h: "Normal values / key figures", list: [
        "Bacterial 'danger zone' ~5–60°C; cook core >70°C; hold hot food >60°C and cold food <5°C.",
        "Vitamin A campaign: high-dose capsules twice yearly for children (100,000–200,000 IU).",
        "Universal salt iodisation and oil fortification are national deficiency-control measures.",
        "Bangladesh Food Safety Authority and Safe Food Act 2013 govern food safety."
      ] }
    ],
    references: REF_NUT,
    examQuestions: [
      "Define food hygiene and food safety and describe the hazards causing food-borne illness.",
      "Explain the WHO five keys to safer food and the food temperature danger zone.",
      "Describe the methods of food preservation and how nutritive value is retained in cooking.",
      "Discuss the major national nutrition programmes in Bangladesh.",
      "Explain the nurse's public-health role in food safety and nutrition programmes."
    ],
    assessment: [
      { type: "mcq", q: "Cooked food left at room temperature (about 30°C) for several hours becomes unsafe mainly because it is in the:", options: ["Freezing zone", "Bacterial danger zone (5–60°C)", "Sterile zone", "Safe hot-holding zone"], answer: 1, rationale: "The 5–60°C danger zone allows rapid bacterial multiplication in the food." },
      { type: "mcq", q: "Which is an example of cross-contamination?", options: ["Cooking meat thoroughly", "Refrigerating leftovers promptly", "Using the same unwashed knife for raw chicken then salad", "Boiling drinking water"], answer: 2, rationale: "Transferring pathogens from raw chicken to ready-to-eat salad via a shared utensil is cross-contamination." },
      { type: "mcq", q: "To preserve water-soluble vitamins during cooking, the nurse should advise:", options: ["Using plenty of water and discarding it", "Using minimal water and not discarding cooking water", "Overcooking vegetables", "Repeated reheating"], answer: 1, rationale: "Water-soluble vitamins leach into and are lost with discarded cooking water; use minimal water." },
      { type: "mcq", q: "Adding iodine to salt to prevent goitre is an example of food:", options: ["Adulteration", "Contamination", "Spoilage", "Fortification"], answer: 3, rationale: "Fortification adds nutrients (iodine) to a staple food to prevent deficiency." },
      { type: "mcq", q: "The Bangladesh National Vitamin A Plus campaign gives children high-dose vitamin A capsules:", options: ["Once in a lifetime", "Twice a year", "Every day", "Only when ill"], answer: 1, rationale: "High-dose vitamin A capsules are given twice yearly to prevent deficiency and reduce child mortality." },
      { type: "mcq", q: "Which preservation method works mainly by removing water from food?", options: ["Freezing", "Drying/dehydration", "Pasteurisation", "Irradiation"], answer: 1, rationale: "Drying removes water, halting microbial growth (e.g. sun-dried fish, cereals)." },
      { type: "mcq", q: "The agency responsible for food safety regulation in Bangladesh is the:", options: ["Bangladesh Bank", "BNMC", "WHO", "Bangladesh Food Safety Authority (BFSA)"], answer: 3, rationale: "The BFSA, under the Safe Food Act 2013, regulates food safety in Bangladesh." },
      { type: "mcq", q: "Food should be cooked to a core temperature of at least:", options: ["30°C", "50°C", "70°C", "5°C"], answer: 2, rationale: "A core temperature above 70°C kills most food-poisoning bacteria." },
      { type: "mcq", q: "Adding an inferior or harmful substance to food for profit is called:", options: ["Fortification", "Adulteration", "Pasteurisation", "Preservation"], answer: 1, rationale: "Adulteration debases food with cheaper or harmful substances and is a food-safety offence." },
      { type: "mcq", q: "A key national programme to control anaemia in Bangladesh is:", options: ["Salt iodisation", "Iron-folic acid supplementation for pregnant women and adolescents", "Vitamin K injection", "Fluoridation"], answer: 1, rationale: "Iron-folate supplementation targets iron-deficiency anaemia in pregnancy and adolescence." }
      , { type: "fill", q: "The temperature range of about 5–60°C in which bacteria multiply rapidly is called the ____ zone.", accept: ["danger"], rationale: "The danger zone (5–60°C) favours rapid bacterial growth." }
      , { type: "fill", q: "Adding nutrients such as iodine or vitamin A to staple foods to prevent deficiency is called food ____.", accept: ["fortification"], rationale: "Fortification enriches foods with nutrients to prevent deficiency disorders." }
    ]
  }
];
