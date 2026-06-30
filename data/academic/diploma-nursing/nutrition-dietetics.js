/* ============================================================
   Diploma in Nursing · D223 Nutrition & Dietetics (Year 2)
   — 16 topics. Aligned to the BNMC Diploma in Nursing syllabus
   (foundations of nutrition; applied nutrition & dietetics;
   nutritional assessment, life-cycle nutrition, therapeutic
   diets, malnutrition, food hygiene, and national nutrition
   programmes in Bangladesh). Grounded in standard texts:
     • Srilakshmi B. Dietetics. New Age International.
     • Srilakshmi B. Nutrition Science. New Age International.
     • Park K. Park's Textbook of Preventive and Social Medicine.
       Bhanot Publishers.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_NUTR = [
  "Srilakshmi B. Dietetics. New Age International.",
  "Srilakshmi B. Nutrition Science. New Age International.",
  "Park K. Park's Textbook of Preventive and Social Medicine. Bhanot Publishers."
];

window.Academic.topics["diploma-nursing/nutrition-dietetics"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "nut-01-intro",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Introduction to Nutrition & Dietetics",
    readMinutes: 14,
    summary: "Basic concepts of food, nutrition, nutrients and dietetics; functions of food; classification of nutrients; and the significance of nutrition for health and for nursing practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key definitions", list: [
        "Food — any solid or liquid substance that, when eaten and absorbed, nourishes the body by providing energy, building and repairing tissues, and regulating body processes.",
        "Nutrition — the science of food and its relationship to health; it covers how the body takes in, digests, absorbs, transports, uses and excretes food substances.",
        "Nutrient — a chemical component of food (such as a carbohydrate, protein, fat, vitamin or mineral) that the body needs to function.",
        "Dietetics — the practical application of the principles of nutrition to the feeding of individuals and groups in health and in disease.",
        "Diet — the total food and drink regularly consumed by a person."
      ] },
      { h: "Functions of food", p: "Food serves three broad purposes in the body, and most foods serve more than one at once. Understanding these functions helps the nurse explain why a balanced diet matters.", list: [
        "Physiological (body) functions — providing energy for work and warmth, building and repairing tissues for growth and healing, and regulating body processes such as fluid balance and metabolism.",
        "Psychological functions — giving satisfaction, comfort and a sense of security; food meets emotional needs as well as physical ones.",
        "Social and cultural functions — strengthening relationships and expressing identity, religion and custom through shared meals and festival foods."
      ] },
      { h: "Classification of nutrients", p: "Nutrients are grouped according to the amount the body needs each day. Macronutrients are needed in large (gram) quantities and yield energy; micronutrients are needed in small (milligram or microgram) quantities and have regulatory and protective roles.", figure: {
        caption: "Classification of nutrients into energy-yielding macronutrients and regulatory micronutrients, with water as an essential constituent.",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of nutrients into macronutrients, micronutrients and water."><rect x="200" y="10" width="160" height="40" rx="8" fill="#7C2D12"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#FFF7ED">NUTRIENTS</text><rect x="20" y="95" width="170" height="40" rx="8" fill="#B45309"/><text x="105" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">Macronutrients</text><rect x="370" y="95" width="170" height="40" rx="8" fill="#B45309"/><text x="455" y="120" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">Micronutrients</text><line x1="280" y1="50" x2="105" y2="93" stroke="#7C2D12" stroke-width="2"/><line x1="280" y1="50" x2="455" y2="93" stroke="#7C2D12" stroke-width="2"/><rect x="10" y="165" width="120" height="34" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="70" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Carbohydrate</text><rect x="135" y="165" width="60" height="34" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="165" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Protein</text><rect x="200" y="165" width="55" height="34" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="227" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Fat</text><rect x="375" y="165" width="75" height="34" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="412" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Vitamins</text><rect x="455" y="165" width="85" height="34" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="497" y="187" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Minerals</text><rect x="205" y="215" width="150" height="30" rx="6" fill="#FB923C"/><text x="280" y="235" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Water (essential)</text></svg>'
      } },
      { h: "Macronutrients", list: [
        "Carbohydrates — the body's main and cheapest source of energy (≈4 kcal/g).",
        "Proteins — build and repair tissues; also provide energy (≈4 kcal/g).",
        "Fats — a concentrated energy store (≈9 kcal/g) and carrier of fat-soluble vitamins."
      ] },
      { h: "Micronutrients and water", list: [
        "Vitamins — organic compounds needed in tiny amounts to regulate body processes; classified as fat-soluble (A, D, E, K) or water-soluble (B-complex, C).",
        "Minerals — inorganic elements such as calcium, iron and iodine that build tissues and regulate functions.",
        "Water — not a source of energy but essential for every body process; it makes up about 60% of adult body weight."
      ] },
      { h: "Significance of nutrition for health", p: "Good nutrition supports normal growth and development, maintains the body's defence against infection, promotes recovery from illness, injury and surgery, and lowers the risk of diet-related diseases such as obesity, diabetes and heart disease. Poor nutrition — either too little (undernutrition) or too much (overnutrition) — is a major cause of ill health, especially in mothers and young children." },
      { h: "Relevance to nursing", p: "Nutrition is part of basic nursing care. The nurse identifies patients at nutritional risk, assists with feeding, monitors intake, gives nutrition education, and works with the dietitian to plan therapeutic diets. A well-nourished patient heals faster, resists infection better and has a shorter hospital stay." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Define food, nutrition, nutrient and dietetics.",
      "Describe the three major functions of food with examples.",
      "Classify nutrients into macronutrients and micronutrients and give examples of each.",
      "Explain the significance of good nutrition for health.",
      "Discuss the role of the nurse in promoting good nutrition among patients."
    ],
    assessment: [
      { type: "mcq", q: "The science of food and its relationship to health is called:", options: ["Nutrition", "Dietetics", "Metabolism", "Physiology"], answer: 0, rationale: "Nutrition is the science of food and how the body uses it; dietetics is the practical application of nutrition." },
      { type: "mcq", q: "The practical application of the principles of nutrition to the feeding of people is:", options: ["Dietetics", "Pharmacology", "Microbiology", "Anatomy"], answer: 0, rationale: "Dietetics applies nutrition science to planning meals for individuals and groups in health and disease." },
      { type: "mcq", q: "Which of the following is a macronutrient?", options: ["Vitamin C", "Iron", "Carbohydrate", "Iodine"], answer: 2, rationale: "Carbohydrate is needed in gram quantities and yields energy; the others are micronutrients." },
      { type: "mcq", q: "Vitamins and minerals are classed as micronutrients because they are:", options: ["The main source of energy", "Not needed by the body", "Needed only in small amounts", "Made only by the liver"], answer: 2, rationale: "Micronutrients are required in milligram or microgram amounts and mainly regulate body processes." },
      { type: "mcq", q: "Which nutrient provides the most energy per gram?", options: ["Carbohydrate", "Protein", "Fat", "Water"], answer: 2, rationale: "Fat yields about 9 kcal per gram, more than double the energy from carbohydrate or protein." },
      { type: "mcq", q: "Building and repair of body tissue is mainly the function of:", options: ["Carbohydrate", "Fat", "Fibre", "Protein"], answer: 3, rationale: "Protein is the chief tissue-building nutrient, supplying amino acids for growth and repair." },
      { type: "mcq", q: "Sharing festival foods with family is an example of which function of food?", options: ["Physiological function", "Social and cultural function", "Energy function", "Regulatory function"], answer: 1, rationale: "Eating together for custom and celebration is a social and cultural function of food." },
      { type: "mcq", q: "Approximately what proportion of adult body weight is water?", options: ["20%", "40%", "60%", "90%"], answer: 2, rationale: "Water makes up roughly 60% of an adult's body weight and is essential for all body processes." },
      { type: "mcq", q: "Which statement about water as a nutrient is correct?", options: ["It is a rich source of energy", "It is needed only in hot weather", "It is essential but yields no energy", "It is a type of vitamin"], answer: 2, rationale: "Water provides no calories but is essential for digestion, transport, temperature control and excretion." },
      { type: "mcq", q: "A chemical component of food that the body needs to function is best called a:", options: ["Calorie", "Nutrient", "Recipe", "Flavour"], answer: 1, rationale: "A nutrient is a chemical constituent of food — carbohydrate, protein, fat, vitamin, mineral or water." }
      , { type: "fill", q: "Nutrients needed in large (gram) amounts that supply energy are called ____.", accept: ["macronutrients", "macronutrient"], rationale: "Carbohydrates, proteins and fats are macronutrients supplying energy in gram quantities." }
      , { type: "fill", q: "The branch of knowledge that applies nutrition principles to feeding people in health and disease is ____.", accept: ["dietetics"], rationale: "Dietetics is the applied, practical side of nutrition science." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "nut-02-carbohydrates",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Carbohydrates",
    readMinutes: 14,
    summary: "Composition, classification (mono-, di- and polysaccharides), food sources, digestion and absorption, functions, and the health effects of too much or too little carbohydrate.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are carbohydrates?", p: "Carbohydrates are organic compounds made of carbon, hydrogen and oxygen, with hydrogen and oxygen usually in the same 2:1 ratio as in water. They are the body's main and cheapest source of energy, supplying about 4 kilocalories per gram. In most diets — and especially in Bangladesh, where rice is the staple — carbohydrates provide the largest share of daily energy." },
      { h: "Classification of carbohydrates", p: "Carbohydrates are classified by the number of sugar units they contain.", figure: {
        caption: "Classification of carbohydrates into monosaccharides, disaccharides and polysaccharides with common examples.",
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of carbohydrates by number of sugar units."><rect x="195" y="10" width="170" height="38" rx="8" fill="#7C2D12"/><text x="280" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FFF7ED">CARBOHYDRATES</text><rect x="15" y="90" width="160" height="38" rx="7" fill="#B45309"/><text x="95" y="114" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Monosaccharides</text><rect x="200" y="90" width="160" height="38" rx="7" fill="#B45309"/><text x="280" y="114" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Disaccharides</text><rect x="385" y="90" width="160" height="38" rx="7" fill="#B45309"/><text x="465" y="114" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Polysaccharides</text><line x1="280" y1="48" x2="95" y2="88" stroke="#7C2D12" stroke-width="2"/><line x1="280" y1="48" x2="280" y2="88" stroke="#7C2D12" stroke-width="2"/><line x1="280" y1="48" x2="465" y2="88" stroke="#7C2D12" stroke-width="2"/><text x="95" y="165" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Glucose, fructose,</text><text x="95" y="181" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">galactose</text><text x="280" y="165" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Sucrose, lactose,</text><text x="280" y="181" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">maltose</text><text x="465" y="165" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Starch, glycogen,</text><text x="465" y="181" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">cellulose</text></svg>'
      } },
      { h: "Monosaccharides (simple sugars)", list: [
        "Glucose — the main sugar in blood and the form cells use for energy; found in fruits and honey.",
        "Fructose — fruit sugar, the sweetest natural sugar; found in fruits and honey.",
        "Galactose — does not occur free in nature; produced from the digestion of milk sugar."
      ] },
      { h: "Disaccharides (double sugars)", list: [
        "Sucrose = glucose + fructose — common table sugar, from sugar cane and sugar beet.",
        "Lactose = glucose + galactose — the sugar of milk.",
        "Maltose = glucose + glucose — formed when starch is digested; present in malted grains."
      ] },
      { h: "Polysaccharides (complex carbohydrates)", list: [
        "Starch — the storage carbohydrate of plants; the main dietary carbohydrate, found in rice, wheat, potato and pulses.",
        "Glycogen — the storage carbohydrate of animals, kept in the liver and muscles ('animal starch').",
        "Dietary fibre (e.g. cellulose) — the indigestible carbohydrate of plant cell walls; it adds bulk to stool and aids bowel function."
      ] },
      { h: "Digestion and absorption", p: "Starch digestion begins in the mouth with salivary amylase and continues in the small intestine with pancreatic amylase, breaking starch down to maltose. Intestinal enzymes (maltase, sucrase, lactase) split the disaccharides into monosaccharides, which are absorbed into the blood. The liver converts fructose and galactose into glucose. Glucose is then used for energy or stored as glycogen; excess is converted to fat." },
      { h: "Functions of carbohydrates", list: [
        "Provide ready energy for the body (the brain and red blood cells depend on glucose).",
        "Spare protein — when enough carbohydrate is eaten, protein is saved for tissue building rather than burned for energy.",
        "Help in the complete oxidation of fats and prevent build-up of ketone bodies.",
        "Dietary fibre adds bulk, prevents constipation and helps control blood sugar and cholesterol.",
        "Lactose aids absorption of calcium and helps maintain useful gut bacteria."
      ] },
      { h: "Too much or too little", p: "Excess carbohydrate, especially refined sugar, is converted to fat and contributes to obesity, dental caries and type 2 diabetes. Too little carbohydrate forces the body to burn fat and protein for energy, producing ketosis and breaking down lean tissue. A balanced diet should obtain most of its energy from complex carbohydrates while limiting added sugar." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Classify carbohydrates with suitable examples of each group.",
      "Describe the digestion and absorption of carbohydrates.",
      "List the functions of carbohydrates in the body.",
      "What is the protein-sparing action of carbohydrate? Why is it important?",
      "Discuss the health effects of eating too much refined sugar."
    ],
    assessment: [
      { type: "mcq", q: "Carbohydrates supply approximately how much energy per gram?", options: ["4 kcal", "7 kcal", "9 kcal", "2 kcal"], answer: 0, rationale: "Carbohydrate yields about 4 kilocalories per gram, the same as protein." },
      { type: "mcq", q: "Which of the following is a monosaccharide?", options: ["Glucose", "Sucrose", "Lactose", "Starch"], answer: 0, rationale: "Glucose is a single-sugar unit (monosaccharide); sucrose and lactose are disaccharides and starch is a polysaccharide." },
      { type: "mcq", q: "Table sugar (sucrose) is made of glucose plus:", options: ["Galactose", "Maltose", "Fructose", "Lactose"], answer: 2, rationale: "Sucrose is a disaccharide of glucose and fructose." },
      { type: "mcq", q: "The sugar found in milk is:", options: ["Lactose", "Sucrose", "Maltose", "Fructose"], answer: 0, rationale: "Lactose, made of glucose and galactose, is the disaccharide of milk." },
      { type: "mcq", q: "The storage carbohydrate of animals, held in liver and muscle, is:", options: ["Starch", "Cellulose", "Glycogen", "Sucrose"], answer: 2, rationale: "Glycogen is the animal storage form of carbohydrate, sometimes called animal starch." },
      { type: "mcq", q: "The main carbohydrate stored in plants and the chief dietary carbohydrate is:", options: ["Glycogen", "Starch", "Lactose", "Fructose"], answer: 1, rationale: "Starch is the plant storage carbohydrate and supplies most dietary carbohydrate (rice, wheat, potato)." },
      { type: "mcq", q: "The enzyme that begins starch digestion in the mouth is:", options: ["Lactase", "Salivary amylase", "Pepsin", "Lipase"], answer: 1, rationale: "Salivary amylase (ptyalin) starts breaking down starch in the mouth." },
      { type: "mcq", q: "When enough carbohydrate is eaten, protein is saved for tissue building. This is called the:", options: ["Protein-sparing action", "Glycaemic action", "Ketogenic action", "Fat-sparing action"], answer: 0, rationale: "Adequate carbohydrate spares dietary protein so it can be used for building tissue rather than for energy." },
      { type: "mcq", q: "An indigestible plant carbohydrate that adds bulk to the stool is:", options: ["Glucose", "Glycogen", "Cellulose (dietary fibre)", "Maltose"], answer: 2, rationale: "Cellulose is dietary fibre; humans cannot digest it, but it adds bulk and prevents constipation." },
      { type: "mcq", q: "A diet very low in carbohydrate forces the body to burn fat, which may cause:", options: ["Ketosis", "Scurvy", "Goitre", "Rickets"], answer: 0, rationale: "Inadequate carbohydrate leads to incomplete fat oxidation and the build-up of ketone bodies (ketosis)." }
      , { type: "fill", q: "The single sugar that circulates in the blood and is the body's main fuel is ____.", accept: ["glucose"], rationale: "Glucose is the form of carbohydrate carried in blood and used by cells for energy." }
      , { type: "fill", q: "The indigestible carbohydrate of plant cell walls that prevents constipation is called dietary ____.", accept: ["fibre", "fiber", "roughage"], rationale: "Dietary fibre (roughage), such as cellulose, adds bulk to stool and aids bowel function." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "nut-03-proteins",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Proteins",
    readMinutes: 14,
    summary: "Composition and amino acids, essential and non-essential amino acids, classification by quality, food sources, functions, digestion, and the consequences of protein deficiency.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are proteins?", p: "Proteins are large, complex compounds built from building blocks called amino acids. Unlike carbohydrates and fats, proteins contain nitrogen (about 16%) in addition to carbon, hydrogen and oxygen; some also contain sulphur. Protein is the chief tissue-building nutrient and also supplies energy (about 4 kilocalories per gram) when needed." },
      { h: "Amino acids", p: "There are about 20 amino acids in food. They join in chains to form proteins, much as letters form words. The body can make some amino acids itself, but others must come from food.", list: [
        "Essential (indispensable) amino acids — about 9 amino acids the body cannot make in sufficient amounts and must obtain from food.",
        "Non-essential (dispensable) amino acids — those the body can make itself from other amino acids, provided enough nitrogen is available."
      ] },
      { h: "Classification of proteins by quality", list: [
        "Complete (high biological value) proteins — contain all the essential amino acids in the right proportions; mostly from animal foods such as egg, milk, meat and fish. Egg protein is the reference standard.",
        "Incomplete (low biological value) proteins — lack one or more essential amino acids or have them in poor proportion; mostly plant proteins such as cereals and pulses.",
        "Complementary proteins — combining two incomplete proteins (for example rice + dal, or cereal + pulse) so that the amino acid lacking in one is supplied by the other, giving a good-quality protein at low cost."
      ] },
      { h: "Food sources", list: [
        "Animal sources — egg, milk and milk products, meat, fish and poultry (high biological value).",
        "Plant sources — pulses and legumes (dal, beans), nuts, oilseeds and cereals (lower biological value but cheap and important in Bangladesh).",
        "Combining cereals with pulses gives an inexpensive complete-protein meal."
      ] },
      { h: "Functions of protein", list: [
        "Building new tissue for growth (especially in children, pregnancy and lactation) and repairing worn-out tissue.",
        "Forming enzymes, many hormones (such as insulin), and antibodies that fight infection.",
        "Maintaining fluid balance and acid–base balance, and transporting substances (for example haemoglobin carries oxygen).",
        "Providing energy when carbohydrate and fat are insufficient.",
        "Contributing to blood clotting and to the structure of skin, hair, nails, muscle and bone matrix."
      ] },
      { h: "Digestion and protein quality measures", p: "Protein digestion begins in the stomach, where hydrochloric acid activates pepsin to break proteins into smaller chains. In the small intestine, pancreatic and intestinal enzymes complete digestion to amino acids, which are absorbed into the blood and carried to the liver. Protein quality is judged by measures such as biological value (BV) — the proportion of absorbed protein retained by the body — and the digestibility of the protein." },
      { h: "Nitrogen balance", p: "Nitrogen balance compares nitrogen taken in (as protein) with nitrogen lost. A healthy adult is in equilibrium (intake = output). A positive balance (intake greater than output) occurs during growth, pregnancy and recovery, when new tissue is being built. A negative balance (output greater than intake) occurs in starvation, serious illness, burns and after surgery, when the body is losing protein." },
      { h: "Protein deficiency", p: "A diet short of protein and energy causes protein-energy malnutrition. In children this appears as kwashiorkor (protein deficiency with oedema, a swollen 'moon' face and skin and hair changes) or marasmus (severe deficiency of both energy and protein, giving extreme wasting). Protein deficiency also delays wound healing, lowers immunity and stunts growth. Adequate protein from a mixed cereal–pulse diet, plus animal foods where affordable, prevents these problems." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Define protein. Distinguish between essential and non-essential amino acids.",
      "Differentiate between complete and incomplete proteins with examples.",
      "Explain the concept of complementary proteins and its importance in a low-income diet.",
      "List the functions of protein in the body.",
      "What is nitrogen balance? Describe positive and negative nitrogen balance with examples."
    ],
    assessment: [
      { type: "mcq", q: "Which element is present in protein but NOT in carbohydrate or fat?", options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"], answer: 2, rationale: "Protein characteristically contains nitrogen (about 16%), which carbohydrate and fat lack." },
      { type: "mcq", q: "The building blocks of protein are:", options: ["Amino acids", "Fatty acids", "Monosaccharides", "Glycerol"], answer: 0, rationale: "Proteins are made of amino acids joined in chains." },
      { type: "mcq", q: "Amino acids that the body cannot make and must get from food are called:", options: ["Non-essential", "Complementary", "Essential", "Conditional"], answer: 2, rationale: "Essential (indispensable) amino acids must be supplied by the diet." },
      { type: "mcq", q: "Which food is the reference standard for high-quality (complete) protein?", options: ["Egg", "Rice", "Potato", "Sugar"], answer: 0, rationale: "Egg protein contains all essential amino acids in ideal proportion and is the reference standard." },
      { type: "mcq", q: "Combining rice and dal to improve protein quality is an example of:", options: ["Fortification", "Fermentation", "Complementary proteins", "Enrichment"], answer: 2, rationale: "Cereal plus pulse supply each other's missing amino acids — complementary protein action." },
      { type: "mcq", q: "Protein provides approximately how much energy per gram?", options: ["2 kcal", "4 kcal", "7 kcal", "9 kcal"], answer: 1, rationale: "Protein yields about 4 kilocalories per gram, the same as carbohydrate." },
      { type: "mcq", q: "Which of the following is a function of protein?", options: ["Forming antibodies and enzymes", "Adding sweetness to food", "Storing fat-soluble vitamins", "Forming bile"], answer: 0, rationale: "Proteins build enzymes, hormones and antibodies, and repair tissue." },
      { type: "mcq", q: "Protein digestion begins in the:", options: ["Mouth", "Stomach", "Large intestine", "Liver"], answer: 1, rationale: "In the stomach, hydrochloric acid activates pepsin, which begins breaking down protein." },
      { type: "mcq", q: "A child with oedema, a swollen face and skin and hair changes from protein deficiency most likely has:", options: ["Marasmus", "Kwashiorkor", "Scurvy", "Rickets"], answer: 1, rationale: "Kwashiorkor is protein-deficiency malnutrition marked by oedema and skin/hair changes." },
      { type: "mcq", q: "A negative nitrogen balance (output greater than intake) is expected in:", options: ["A growing child", "Pregnancy", "Recovery from illness", "Severe burns or starvation"], answer: 3, rationale: "In burns, starvation and serious illness the body loses more nitrogen than it takes in." }
      , { type: "fill", q: "Proteins that contain all the essential amino acids in good proportion are called ____ proteins.", accept: ["complete", "high biological value", "first class"], rationale: "Complete (high biological value) proteins, such as egg and milk, supply all essential amino acids." }
      , { type: "fill", q: "Severe deficiency of both energy and protein causing extreme wasting in a child is called ____.", accept: ["marasmus"], rationale: "Marasmus results from severe, prolonged deficiency of energy and protein, producing gross wasting." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "nut-04-fats",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Fats & Lipids",
    readMinutes: 14,
    summary: "Composition and fatty acids, saturated and unsaturated fats, essential fatty acids, visible and invisible fat sources, functions, digestion, and the effects of excess and deficiency.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are fats and lipids?", p: "Lipids are a group of fatty substances that do not dissolve in water. The main dietary lipids are fats (solid at room temperature) and oils (liquid at room temperature); chemically both are triglycerides — one molecule of glycerol joined to three fatty acids. Fat is the most concentrated source of energy in the diet, supplying about 9 kilocalories per gram, more than twice that of carbohydrate or protein." },
      { h: "Fatty acids: saturated and unsaturated", p: "The type of fatty acid determines whether a fat is healthy or harmful.", list: [
        "Saturated fatty acids — have no double bonds; usually solid at room temperature; mainly from animal fats (ghee, butter, meat fat) and from coconut and palm oil. A high intake raises blood cholesterol.",
        "Monounsaturated fatty acids — have one double bond; found in mustard oil, groundnut oil and olive oil; considered heart-friendly.",
        "Polyunsaturated fatty acids (PUFA) — have many double bonds; found in fish oil and many vegetable oils (sunflower, soybean); include the essential fatty acids.",
        "Trans fatty acids — formed when oils are hydrogenated (as in some vanaspati and processed foods); they are harmful and raise the risk of heart disease."
      ] },
      { h: "Essential fatty acids", p: "Two fatty acids cannot be made by the body and must come from food: linoleic acid (an omega-6 fatty acid) and alpha-linolenic acid (an omega-3 fatty acid). They are needed for healthy skin, normal growth, and the making of substances that regulate body functions. Good sources are vegetable oils, oilseeds, nuts and fish." },
      { h: "Visible and invisible fat", list: [
        "Visible fat — fat that we can see and add to food, such as cooking oil, ghee, butter and the fat on meat.",
        "Invisible fat — fat hidden within foods, such as the fat in milk, egg, nuts, whole cereals and pulses. Much of the daily fat intake comes from invisible fat."
      ] },
      { h: "Functions of fat", list: [
        "Provide a concentrated source and store of energy (adipose tissue).",
        "Carry the fat-soluble vitamins A, D, E and K and help their absorption.",
        "Supply essential fatty acids needed for growth and healthy skin.",
        "Form part of every cell membrane and of nerve coverings.",
        "Protect and cushion vital organs and insulate the body against heat loss.",
        "Add flavour, palatability and a feeling of fullness (satiety) to meals."
      ] },
      { h: "Digestion and absorption", p: "Little fat is digested in the stomach. In the small intestine, bile from the liver emulsifies fat into tiny droplets, and pancreatic lipase breaks triglycerides down into fatty acids and glycerol. These are absorbed into the lymph and then the blood. Fat slows stomach emptying, which is why fatty meals keep us feeling full for longer." },
      { h: "Cholesterol and lipoproteins", p: "Cholesterol is a fat-like substance found only in animal foods and also made by the liver; it is needed to build cell membranes, vitamin D, bile and steroid hormones. In the blood, fats are carried by lipoproteins. Low-density lipoprotein (LDL) carries cholesterol to tissues and, in excess, deposits it in arteries ('bad' cholesterol); high-density lipoprotein (HDL) carries cholesterol away for removal ('good' cholesterol). A diet high in saturated and trans fat raises LDL and the risk of heart disease." },
      { h: "Too much or too little", p: "Excess fat, especially saturated and trans fat, leads to obesity, raised blood cholesterol and atherosclerosis, increasing the risk of heart attack and stroke. Too little fat can cause deficiency of essential fatty acids and of fat-soluble vitamins, scaly skin and poor growth. A healthy diet keeps total fat moderate and favours unsaturated oils over animal and hydrogenated fats." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Classify dietary fatty acids and give a food source of each type.",
      "What are essential fatty acids? Name them and give their sources.",
      "Differentiate between visible and invisible fat with examples.",
      "List the functions of fat in the body.",
      "Explain the difference between LDL and HDL cholesterol and their effect on heart health."
    ],
    assessment: [
      { type: "mcq", q: "Fat provides approximately how much energy per gram?", options: ["4 kcal", "7 kcal", "9 kcal", "2 kcal"], answer: 2, rationale: "Fat is the most concentrated energy source, yielding about 9 kilocalories per gram." },
      { type: "mcq", q: "A triglyceride is made of glycerol joined to:", options: ["Three fatty acids", "Three amino acids", "Three glucose units", "Three minerals"], answer: 0, rationale: "A triglyceride is one glycerol molecule combined with three fatty acids." },
      { type: "mcq", q: "Which fat is usually solid at room temperature and raises blood cholesterol?", options: ["Polyunsaturated fat", "Saturated fat", "Monounsaturated fat", "Fish oil"], answer: 1, rationale: "Saturated fats (animal fat, ghee, butter) are solid and tend to raise blood cholesterol." },
      { type: "mcq", q: "Which of the following is an essential fatty acid?", options: ["Stearic acid", "Linoleic acid", "Palmitic acid", "Oleic acid"], answer: 1, rationale: "Linoleic acid (omega-6) is essential and must be obtained from the diet." },
      { type: "mcq", q: "The fat hidden inside foods such as milk, egg and nuts is called:", options: ["Visible fat", "Invisible fat", "Trans fat", "Saturated fat"], answer: 1, rationale: "Invisible fat is the fat naturally present within foods, not added during cooking." },
      { type: "mcq", q: "Which vitamins depend on dietary fat for their absorption?", options: ["B and C", "A, D, E and K", "B-complex only", "C and folate"], answer: 1, rationale: "The fat-soluble vitamins A, D, E and K are carried and absorbed with dietary fat." },
      { type: "mcq", q: "In the small intestine, fat is emulsified by:", options: ["Bile", "Pepsin", "Saliva", "Insulin"], answer: 0, rationale: "Bile from the liver emulsifies fat into small droplets so lipase can act on it." },
      { type: "mcq", q: "Which lipoprotein is known as 'bad' cholesterol because it deposits cholesterol in arteries?", options: ["HDL", "LDL", "Chylomicron only", "Albumin"], answer: 1, rationale: "Low-density lipoprotein (LDL) carries cholesterol to tissues and, in excess, deposits it in artery walls." },
      { type: "mcq", q: "Harmful fatty acids formed when oils are hydrogenated (as in some vanaspati) are:", options: ["Omega-3 fatty acids", "Trans fatty acids", "Essential fatty acids", "Monounsaturated fatty acids"], answer: 1, rationale: "Hydrogenation produces trans fatty acids, which raise the risk of heart disease." },
      { type: "mcq", q: "Cholesterol is found in the diet only in:", options: ["Plant foods", "Animal foods", "Cereals", "Fruits"], answer: 1, rationale: "Dietary cholesterol occurs only in animal foods; the body also makes its own in the liver." }
      , { type: "fill", q: "Fats that are liquid at room temperature, such as cooking oils, are mainly ____ fats.", accept: ["unsaturated"], rationale: "Unsaturated fats (mono- and polyunsaturated) are typically liquid oils and are heart-friendlier than saturated fats." }
      , { type: "fill", q: "The most concentrated source of energy in the diet, giving about 9 kcal per gram, is ____.", accept: ["fat", "fats", "lipid"], rationale: "Fat supplies about 9 kcal/g, more than carbohydrate or protein." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "nut-05-vitamins",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Vitamins",
    readMinutes: 15,
    summary: "Fat-soluble (A, D, E, K) and water-soluble (B-complex, C) vitamins: their functions, food sources, deficiency disorders, and the nurse's role in preventing vitamin deficiency.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are vitamins?", p: "Vitamins are organic compounds needed by the body in very small amounts to regulate body processes, support growth and maintain health. They do not provide energy and are not building blocks, but most act as helpers (co-enzymes) in chemical reactions. Because the body cannot make most vitamins (or makes too little), they must be supplied by food. Vitamins are grouped by what they dissolve in: fat-soluble or water-soluble." },
      { h: "Fat-soluble versus water-soluble", p: "The two groups behave differently in the body.", list: [
        "Fat-soluble vitamins (A, D, E, K) — absorbed with dietary fat, stored in the liver and fatty tissue, and not easily lost; because they are stored, very large doses can build up and become toxic.",
        "Water-soluble vitamins (B-complex and C) — dissolve in water, are not stored in large amounts (except B12), and excess is passed in urine; they must be supplied regularly and are easily lost in cooking water and by heat."
      ] },
      { h: "Vitamin A (retinol)", p: "Vitamin A is needed for vision in dim light, for healthy skin and the linings of the body, and for resistance to infection. Sources are liver, egg, milk and fish-liver oils, and the plant pigment beta-carotene in green leafy vegetables, carrot, papaya and mango. Deficiency causes night blindness, dryness of the eye (xerophthalmia) and, if untreated, permanent blindness — an important public-health problem in Bangladesh, tackled by twice-yearly vitamin A capsules for under-fives." },
      { h: "Vitamin D and the fat-soluble group", list: [
        "Vitamin D — helps absorb calcium and phosphorus and harden bone; made in the skin by sunlight and found in fish-liver oil and egg yolk. Deficiency causes rickets in children and osteomalacia in adults.",
        "Vitamin E — an antioxidant that protects cells; found in vegetable oils, nuts and green vegetables.",
        "Vitamin K — needed for blood clotting; found in green leafy vegetables and made by gut bacteria. Newborns are given vitamin K to prevent bleeding."
      ] },
      { h: "B-complex vitamins", p: "The B-complex vitamins act mainly as co-enzymes that release energy from food and keep the nerves, skin and blood healthy.", list: [
        "Thiamine (B1) — energy metabolism; deficiency causes beri-beri. Found in whole grains and pulses.",
        "Riboflavin (B2) — healthy skin and lips; deficiency causes cracks at the corners of the mouth (angular stomatitis). Found in milk, egg and green vegetables.",
        "Niacin (B3) — energy metabolism; deficiency causes pellagra (dermatitis, diarrhoea, dementia). Found in groundnut, meat and whole grains.",
        "Folic acid and B12 — needed to make red blood cells; deficiency causes megaloblastic anaemia. Folic acid in pregnancy prevents neural-tube defects. B12 is found only in animal foods."
      ] },
      { h: "Vitamin C (ascorbic acid)", p: "Vitamin C helps form collagen for healthy gums, skin, blood vessels and wound healing, acts as an antioxidant, and greatly improves the absorption of iron from plant foods. It is found in fresh fruits (especially amla, guava and citrus) and vegetables. Deficiency causes scurvy, with bleeding, swollen gums, easy bruising and poor wound healing. Vitamin C is the most easily destroyed vitamin — lost by heat, long cooking and storage." },
      { h: "Preventing loss of vitamins in cooking", list: [
        "Wash vegetables before cutting, not after, to avoid losing water-soluble vitamins.",
        "Cut vegetables into large pieces just before cooking; avoid long soaking.",
        "Cook for the shortest time with the least water, and use the cooking water in soups.",
        "Avoid adding cooking soda; eat some fruits and vegetables raw where safe."
      ] },
      { h: "The nurse's role", p: "The nurse teaches families to include vitamin-rich foods, especially coloured fruits and vegetables, and to cook them so vitamins are preserved. The nurse helps deliver vitamin A capsules and iron–folic acid supplements, recognises early signs of deficiency (such as night blindness or sore mouth), and refers as needed. Health education at the community level is the key to preventing vitamin deficiency disorders." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Differentiate between fat-soluble and water-soluble vitamins.",
      "Describe the functions, sources and deficiency of vitamin A.",
      "Name the B-complex vitamins and the deficiency disease caused by each.",
      "Describe the functions and deficiency of vitamin C, and explain its role in iron absorption.",
      "List the measures to prevent loss of vitamins during cooking."
    ],
    assessment: [
      { type: "mcq", q: "Which group of vitamins is stored in the liver and can become toxic in large doses?", options: ["Water-soluble vitamins", "Fat-soluble vitamins", "B-complex vitamins", "Vitamin C"], answer: 1, rationale: "Fat-soluble vitamins (A, D, E, K) are stored in the liver and fat, so excess can accumulate and be toxic." },
      { type: "mcq", q: "Night blindness is an early sign of deficiency of:", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"], answer: 0, rationale: "Vitamin A is needed for vision in dim light; deficiency first shows as night blindness." },
      { type: "mcq", q: "Rickets in children is caused by deficiency of:", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Thiamine"], answer: 2, rationale: "Vitamin D deficiency impairs calcium absorption and bone hardening, causing rickets." },
      { type: "mcq", q: "Which vitamin is essential for normal blood clotting?", options: ["Vitamin K", "Vitamin E", "Vitamin C", "Niacin"], answer: 0, rationale: "Vitamin K is required to make clotting factors; newborns are given it to prevent bleeding." },
      { type: "mcq", q: "Beri-beri is caused by deficiency of:", options: ["Riboflavin", "Thiamine (B1)", "Niacin", "Vitamin C"], answer: 1, rationale: "Thiamine (vitamin B1) deficiency causes beri-beri." },
      { type: "mcq", q: "Pellagra, with dermatitis, diarrhoea and dementia, results from lack of:", options: ["Niacin (B3)", "Vitamin A", "Vitamin D", "Folic acid"], answer: 0, rationale: "Niacin (vitamin B3) deficiency causes pellagra, the disease of the three Ds." },
      { type: "mcq", q: "Scurvy is caused by deficiency of:", options: ["Vitamin A", "Vitamin K", "Vitamin C", "Riboflavin"], answer: 2, rationale: "Vitamin C deficiency causes scurvy, with bleeding gums and poor wound healing." },
      { type: "mcq", q: "Vitamin C improves the absorption of which mineral from plant foods?", options: ["Iron", "Calcium", "Iodine", "Sodium"], answer: 0, rationale: "Vitamin C converts iron to a more absorbable form, enhancing iron uptake from plant foods." },
      { type: "mcq", q: "Folic acid taken in early pregnancy mainly helps to prevent:", options: ["Goitre", "Neural-tube defects", "Night blindness", "Rickets"], answer: 1, rationale: "Adequate folic acid around conception reduces the risk of neural-tube defects in the baby." },
      { type: "mcq", q: "Which vitamin is the most easily destroyed by heat and long cooking?", options: ["Vitamin A", "Vitamin D", "Vitamin C", "Vitamin K"], answer: 2, rationale: "Vitamin C is the most heat-sensitive vitamin and is easily lost in cooking and storage." }
      , { type: "fill", q: "The vitamin made in the skin by sunlight and needed for strong bones is vitamin ____.", accept: ["D", "vitamin d"], rationale: "Vitamin D is produced in the skin by sunlight and aids calcium absorption for bone." }
      , { type: "fill", q: "To prevent loss of water-soluble vitamins, vegetables should be washed ____ cutting.", accept: ["before", "prior to"], rationale: "Washing whole vegetables before cutting avoids leaching of water-soluble vitamins into the wash water." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "nut-06-minerals",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Minerals",
    readMinutes: 15,
    summary: "Macro- and micro-minerals; the functions, sources and deficiency of calcium, iron, iodine, sodium, potassium and other key minerals, with emphasis on iron and iodine deficiency in Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are minerals?", p: "Minerals are inorganic elements that remain as ash when food is burned. Like vitamins, they yield no energy but are essential for building tissues (such as bone and teeth), for making important body substances (such as haemoglobin and thyroid hormone), and for regulating fluid balance, nerve and muscle activity. They are grouped by the amount the body needs." },
      { h: "Macro-minerals and trace minerals", list: [
        "Macro-minerals (major minerals) — needed in larger amounts (more than 100 mg/day): calcium, phosphorus, sodium, potassium, magnesium, chloride and sulphur.",
        "Trace minerals (micro-minerals) — needed in tiny amounts: iron, iodine, zinc, fluoride, copper and others."
      ] },
      { h: "Calcium and phosphorus", p: "Calcium is the most abundant mineral in the body; with phosphorus it builds and hardens bones and teeth. Calcium is also needed for blood clotting, muscle contraction and nerve function. Good sources are milk and milk products, small fish eaten with bones, and green leafy vegetables. Vitamin D is needed to absorb calcium. Deficiency causes rickets in children, osteomalacia in adults and, over the long term, osteoporosis (brittle bones)." },
      { h: "Iron", p: "Iron is needed to make haemoglobin, the pigment in red blood cells that carries oxygen, and is part of muscle myoglobin and many enzymes. Sources are liver and meat (well absorbed), and green leafy vegetables, pulses and jaggery (less well absorbed). Vitamin C improves iron absorption; tea and coffee reduce it. Iron-deficiency anaemia is the most common nutritional deficiency in Bangladesh, especially in women and young children, causing tiredness, pallor, breathlessness and reduced work capacity." },
      { h: "Iodine", p: "Iodine is needed to make thyroid hormones, which control growth and metabolism. Sources are sea fish, seafood and, most importantly, iodised salt. Deficiency causes goitre (swelling of the thyroid gland in the neck) and, in pregnancy, may cause miscarriage, stillbirth and cretinism (severe physical and mental retardation) in the baby. Iodine deficiency disorders (IDD) are prevented in Bangladesh by the universal use of iodised salt.", figure: {
        caption: "Iodine deficiency disorders and their control through universal salt iodisation.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Iodine deficiency leads to goitre and cretinism, prevented by iodised salt."><rect x="20" y="80" width="150" height="48" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="95" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Iodine</text><text x="95" y="118" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">deficiency</text><rect x="230" y="20" width="160" height="44" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="310" y="47" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Goitre (neck swelling)</text><rect x="230" y="80" width="160" height="44" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="310" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Cretinism in baby</text><text x="310" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">(if mother deficient)</text><rect x="230" y="140" width="160" height="44" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="310" y="167" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Miscarriage / stillbirth</text><line x1="170" y1="104" x2="226" y2="42" stroke="#B45309" stroke-width="2"/><line x1="170" y1="104" x2="226" y2="102" stroke="#B45309" stroke-width="2"/><line x1="170" y1="104" x2="226" y2="162" stroke="#B45309" stroke-width="2"/><rect x="420" y="80" width="125" height="48" rx="9" fill="#FB923C"/><text x="482" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Prevent with</text><text x="482" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">iodised salt</text></svg>'
      } },
      { h: "Sodium, potassium and chloride", list: [
        "Sodium and chloride — found in common salt; control fluid balance, blood volume and nerve and muscle function. Too much salt raises blood pressure, so intake should be moderate.",
        "Potassium — found in fruits (banana), vegetables and pulses; works with sodium to maintain fluid balance and is needed for the heartbeat and muscle action.",
        "These electrolytes are lost in diarrhoea, vomiting and heavy sweating and must be replaced (for example with oral rehydration solution)."
      ] },
      { h: "Other important trace minerals", list: [
        "Zinc — needed for growth, wound healing and immunity; deficiency slows healing and growth and may worsen diarrhoea. Zinc is given with ORS in the treatment of childhood diarrhoea.",
        "Fluoride — strengthens teeth and prevents dental caries; too much causes mottling (fluorosis).",
        "Magnesium and copper — needed in small amounts for enzymes, bone and blood formation."
      ] },
      { h: "The nurse's role in mineral nutrition", p: "The nurse promotes iron-rich foods with vitamin C and supervises iron–folic acid supplements for pregnant women and adolescents to prevent anaemia. The nurse teaches families to use iodised salt to prevent goitre, to limit added salt to protect blood pressure, and to give zinc with ORS during diarrhoea. Recognising the signs of common mineral deficiencies and giving simple dietary advice are core nursing skills in the community." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Differentiate between macro-minerals and trace minerals with examples.",
      "Describe the functions, sources and deficiency of iron.",
      "Describe iodine deficiency disorders and their prevention in Bangladesh.",
      "Explain the functions of calcium and the diseases caused by its deficiency.",
      "What is the role of the nurse in preventing iron and iodine deficiency in the community?"
    ],
    assessment: [
      { type: "mcq", q: "Minerals differ from carbohydrate, protein and fat in that they:", options: ["Provide most of the body's energy", "Are inorganic and yield no energy", "Are made by the liver", "Are a type of vitamin"], answer: 1, rationale: "Minerals are inorganic elements that provide no energy but build tissue and regulate functions." },
      { type: "mcq", q: "The mineral needed to make haemoglobin is:", options: ["Iron", "Calcium", "Iodine", "Sodium"], answer: 0, rationale: "Iron is the key component of haemoglobin, which carries oxygen in the blood." },
      { type: "mcq", q: "The most common nutritional deficiency in Bangladesh, especially among women, is:", options: ["Iron-deficiency anaemia", "Iodine deficiency", "Vitamin D deficiency", "Zinc deficiency"], answer: 0, rationale: "Iron-deficiency anaemia is the most widespread nutritional deficiency, particularly in women and children." },
      { type: "mcq", q: "Iodine is required for the body to make:", options: ["Insulin", "Haemoglobin", "Thyroid hormones", "Bile"], answer: 2, rationale: "Iodine is an essential part of thyroid hormones, which regulate growth and metabolism." },
      { type: "mcq", q: "Goitre (swelling of the neck) is caused by deficiency of:", options: ["Iron", "Calcium", "Iodine", "Potassium"], answer: 2, rationale: "Lack of iodine enlarges the thyroid gland, producing goitre." },
      { type: "mcq", q: "Which mineral, together with phosphorus, builds and hardens bones and teeth?", options: ["Iron", "Calcium", "Sodium", "Zinc"], answer: 1, rationale: "Calcium with phosphorus forms the hard material of bone and teeth." },
      { type: "mcq", q: "Which substance taken with a meal increases the absorption of iron?", options: ["Tea", "Coffee", "Vitamin C", "Milk"], answer: 2, rationale: "Vitamin C converts iron to a more absorbable form; tea and coffee reduce iron absorption." },
      { type: "mcq", q: "A high intake of which mineral is associated with raised blood pressure?", options: ["Potassium", "Iron", "Sodium (salt)", "Calcium"], answer: 2, rationale: "Excess sodium (common salt) raises blood pressure, so intake should be moderate." },
      { type: "mcq", q: "Which trace mineral is given along with ORS to treat childhood diarrhoea?", options: ["Iodine", "Zinc", "Fluoride", "Copper"], answer: 1, rationale: "Zinc supplementation with ORS shortens diarrhoea and aids recovery in children." },
      { type: "mcq", q: "Iodine deficiency in pregnancy can cause which condition in the baby?", options: ["Cretinism", "Scurvy", "Beri-beri", "Pellagra"], answer: 0, rationale: "Severe maternal iodine deficiency can cause cretinism — physical and mental retardation in the child." }
      , { type: "fill", q: "Iodine deficiency disorders are prevented in Bangladesh by the universal use of ____ salt.", accept: ["iodised", "iodized", "iodised salt", "iodized salt"], rationale: "Universal salt iodisation is the main strategy to prevent iodine deficiency disorders." }
      , { type: "fill", q: "Long-term calcium deficiency in older adults leads to brittle, fragile bones, a condition called ____.", accept: ["osteoporosis"], rationale: "Chronic calcium deficiency and bone loss cause osteoporosis." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "nut-07-water-fibre",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Water & Dietary Fibre",
    readMinutes: 13,
    summary: "Water as an essential nutrient — its functions, sources, balance and the dangers of dehydration and ORS; and dietary fibre — its types, sources and importance for health.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Water as an essential nutrient", p: "Water makes up about 60% of an adult's body weight and is the medium in which all body processes take place. Although it gives no energy, a person can survive only a few days without water — far less than without food. Water is therefore the most urgently needed nutrient." },
      { h: "Functions of water", list: [
        "Forms the main part of blood, lymph and all body fluids, carrying nutrients to cells and wastes away.",
        "Takes part in digestion, absorption and the chemical reactions of the body.",
        "Regulates body temperature through sweating.",
        "Lubricates joints and moistens the eyes, mouth and linings of the body.",
        "Helps remove waste products through urine and stool."
      ] },
      { h: "Water balance", p: "The body keeps a balance between water taken in and water lost. Water is gained from drinks, from the water content of food, and from the breakdown of nutrients in the body (metabolic water). Water is lost in urine, through the skin as sweat, through the lungs as water vapour, and in the stool. The kidneys are the main organ that adjusts water balance. Thirst is the body's signal that more water is needed.", figure: {
        caption: "Water balance: intake from drinks, food and metabolism is balanced by losses in urine, skin, lungs and stool.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Water balance between intake and output."><rect x="40" y="30" width="160" height="130" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="120" y="52" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">INTAKE</text><text x="120" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Drinks</text><text x="120" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Water in food</text><text x="120" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Metabolic water</text><rect x="360" y="30" width="160" height="130" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="440" y="52" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">OUTPUT</text><text x="440" y="74" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Urine</text><text x="440" y="94" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Sweat (skin)</text><text x="440" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Breath (lungs)</text><text x="440" y="134" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Stool</text><line x1="205" y1="95" x2="355" y2="95" stroke="#B45309" stroke-width="3"/><text x="280" y="86" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">BALANCE</text></svg>'
      } },
      { h: "Dehydration and oral rehydration", p: "Dehydration is the loss of body water and salts, most often from diarrhoea and vomiting, and is a major cause of child death in Bangladesh. Signs include thirst, dry mouth, sunken eyes, little urine, loss of skin elasticity and, when severe, fast weak pulse and unconsciousness. The simple, life-saving treatment is oral rehydration solution (ORS) — a balanced mixture of clean water, salt and sugar (glucose) that the gut can absorb. The sugar helps the gut absorb salt and water together. Zinc is given alongside ORS in children." },
      { h: "What is dietary fibre?", p: "Dietary fibre (roughage) is the part of plant food that human digestive enzymes cannot break down. It passes through the gut largely unchanged but is essential for normal bowel function and general health. Fibre gives no energy yet does important work." },
      { h: "Types and sources of fibre", list: [
        "Insoluble fibre (e.g. cellulose) — found in wheat bran, whole grains and vegetable skins; adds bulk to the stool and speeds its passage, preventing constipation.",
        "Soluble fibre (e.g. pectin, gums) — found in fruits, oats and pulses; forms a gel that slows sugar absorption and helps lower blood cholesterol.",
        "Good everyday sources are whole grains, brown rice, pulses, vegetables and fruits eaten with their skin."
      ] },
      { h: "Benefits of dietary fibre", list: [
        "Prevents and relieves constipation by adding bulk and softening the stool.",
        "Helps prevent piles (haemorrhoids) and diverticular disease of the bowel.",
        "Slows the rise in blood sugar after meals, helping in diabetes.",
        "Helps lower blood cholesterol, reducing heart-disease risk.",
        "Gives a feeling of fullness, helping to control weight.",
        "May lower the risk of cancer of the large bowel."
      ] },
      { h: "A balanced view", p: "Both too little and too much fibre cause problems. Too little fibre leads to constipation and related diseases; very high fibre with too little water can cause bloating and may reduce the absorption of some minerals such as iron and calcium. The practical advice is to eat plenty of whole grains, pulses, vegetables and fruits, and to drink enough water." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "List the functions of water in the body.",
      "Explain water balance, naming the routes of water intake and loss.",
      "What is dehydration? Describe its signs and the role of ORS in its treatment.",
      "Define dietary fibre and differentiate between soluble and insoluble fibre.",
      "Discuss the health benefits of dietary fibre."
    ],
    assessment: [
      { type: "mcq", q: "Approximately what percentage of an adult's body weight is water?", options: ["30%", "45%", "60%", "85%"], answer: 2, rationale: "Water forms roughly 60% of adult body weight." },
      { type: "mcq", q: "Which is a function of water in the body?", options: ["Providing 4 kcal per gram", "Regulating body temperature by sweating", "Building bone", "Forming antibodies"], answer: 1, rationale: "Water regulates body temperature through sweating and is the medium for body processes; it gives no energy." },
      { type: "mcq", q: "The main organ that regulates the body's water balance is the:", options: ["Liver", "Kidney", "Lung", "Skin"], answer: 1, rationale: "The kidneys adjust urine output to keep water balance." },
      { type: "mcq", q: "Water formed inside the body from the breakdown of nutrients is called:", options: ["Metabolic water", "Mineral water", "Distilled water", "Soft water"], answer: 0, rationale: "Metabolic water is produced when carbohydrate, fat and protein are oxidised in the body." },
      { type: "mcq", q: "The most common cause of dangerous dehydration in young children is:", options: ["Diarrhoea and vomiting", "Fever alone", "Eating sweets", "Drinking milk"], answer: 0, rationale: "Diarrhoea and vomiting cause heavy loss of water and salts, leading to dehydration." },
      { type: "mcq", q: "Oral rehydration solution (ORS) is essentially a balanced mixture of clean water, salt and:", options: ["Oil", "Vinegar", "Sugar (glucose)", "Milk"], answer: 2, rationale: "ORS contains glucose with salt; the sugar helps the gut absorb salt and water together." },
      { type: "mcq", q: "Dietary fibre is best defined as:", options: ["Plant material that human enzymes cannot digest", "A type of protein", "A fat-soluble vitamin", "A simple sugar"], answer: 0, rationale: "Fibre (roughage) is the indigestible part of plant foods." },
      { type: "mcq", q: "Which type of fibre forms a gel and helps lower blood cholesterol?", options: ["Insoluble fibre", "Soluble fibre", "Cellulose", "Bran fibre"], answer: 1, rationale: "Soluble fibre (pectin, gums) forms a gel that slows sugar absorption and lowers cholesterol." },
      { type: "mcq", q: "The main benefit of insoluble fibre such as wheat bran is to:", options: ["Prevent constipation", "Supply energy", "Build muscle", "Provide vitamins"], answer: 0, rationale: "Insoluble fibre adds bulk to the stool and prevents constipation." },
      { type: "mcq", q: "A possible harmful effect of a very high fibre intake with too little water is:", options: ["Better iron absorption", "Reduced absorption of some minerals", "Increased energy intake", "Lower bowel cancer risk"], answer: 1, rationale: "Excess fibre can bind and reduce absorption of minerals such as iron and calcium, and may cause bloating." }
      , { type: "fill", q: "The life-saving solution of clean water, salt and sugar used to treat dehydration is called ____.", accept: ["ORS", "oral rehydration solution", "oral rehydration salt"], rationale: "Oral rehydration solution (ORS) replaces water and salts lost in diarrhoea." }
      , { type: "fill", q: "The indigestible part of plant food that prevents constipation is called dietary ____.", accept: ["fibre", "fiber", "roughage"], rationale: "Dietary fibre (roughage) adds bulk to stool and supports bowel health." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "nut-08-energy-bmr",
    unit: "Unit 1 · Foundations of Nutrition",
    title: "Energy & Basal Metabolic Rate",
    readMinutes: 14,
    summary: "Energy units and the energy value of foods; total energy needs; basal metabolic rate and the factors that affect it; and the balance between energy intake and expenditure.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Energy and its units", p: "The body needs a constant supply of energy to keep alive, to grow and to do work. This energy comes from the food we eat and is measured in kilocalories (kcal) or kilojoules (kJ); one kilocalorie equals about 4.2 kilojoules. A kilocalorie is the amount of heat needed to raise the temperature of one litre of water by one degree Celsius." },
      { h: "Energy value of foods", p: "Only three nutrients supply energy, and each gives a known amount per gram. Alcohol also supplies energy but is not a nutrient.", list: [
        "Carbohydrate — about 4 kcal per gram.",
        "Protein — about 4 kcal per gram.",
        "Fat — about 9 kcal per gram (the richest source).",
        "Alcohol — about 7 kcal per gram (empty calories)."
      ] },
      { h: "Components of total energy expenditure", p: "The energy a person uses each day has three main parts.", list: [
        "Basal metabolic rate (BMR) — the energy needed at complete rest just to keep the body alive; it is the largest part (about two-thirds) of total energy use.",
        "Physical activity — the energy used in movement and work; this varies most between people and is the part we can change.",
        "Thermic effect of food (specific dynamic action) — the small amount of energy used to digest, absorb and process food."
      ] },
      { h: "What is basal metabolic rate?", p: "Basal metabolic rate (BMR) is the rate at which the body uses energy when at complete physical and mental rest, awake, lying down, in a comfortable temperature, and about 12 hours after the last meal. It is the energy spent only on essential life processes such as breathing, heartbeat, maintaining body temperature and the work of internal organs." },
      { h: "Factors affecting BMR", list: [
        "Body size and composition — larger people and those with more lean muscle have a higher BMR; fat tissue is less active.",
        "Age — BMR is highest in infancy and childhood (rapid growth) and falls slowly with age.",
        "Sex — men usually have a higher BMR than women because they have more muscle.",
        "Climate — BMR tends to be higher in cold climates.",
        "Thyroid hormone — an overactive thyroid raises BMR; an underactive thyroid lowers it.",
        "Body temperature (fever) — BMR rises in fever (about 10–13% for each 1°C rise).",
        "Physiological state — BMR rises in pregnancy and lactation; starvation lowers it."
      ] },
      { h: "Total energy requirement", p: "A person's total daily energy requirement is the BMR plus the energy for physical activity plus the thermic effect of food. It depends mainly on body size, age, sex and how active the person is. A heavy manual worker needs much more energy than a person doing light office work, and growth, pregnancy and lactation all add to the requirement.", figure: {
        caption: "Energy balance: when intake equals expenditure, weight is stable; an imbalance leads to weight gain or loss.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Energy balance between intake and expenditure."><rect x="30" y="70" width="150" height="50" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="105" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Energy IN</text><text x="105" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">(food eaten)</text><rect x="380" y="70" width="150" height="50" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="455" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Energy OUT</text><text x="455" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">(BMR + activity)</text><line x1="180" y1="95" x2="378" y2="95" stroke="#B45309" stroke-width="3"/><text x="280" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">IN = OUT → stable weight</text><text x="280" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">IN &gt; OUT → weight gain</text><text x="280" y="160" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">IN &lt; OUT → weight loss</text></svg>'
      } },
      { h: "Energy balance and its importance", p: "Energy balance means matching energy intake from food with energy expenditure. When intake equals expenditure, body weight stays steady. When intake is greater than expenditure, the extra energy is stored as fat and the person gains weight, leading to overweight and obesity. When intake is less than expenditure, the body uses its own stores and the person loses weight, as in undernutrition. Maintaining energy balance through diet and activity is the foundation of a healthy body weight." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Define kilocalorie. State the energy value per gram of carbohydrate, protein and fat.",
      "Define basal metabolic rate and list the factors that affect it.",
      "Name and explain the three components of total daily energy expenditure.",
      "Explain energy balance and its relationship to body weight.",
      "How does fever affect the basal metabolic rate and hence energy needs?"
    ],
    assessment: [
      { type: "mcq", q: "The energy value of food is commonly measured in:", options: ["Grams", "Kilocalories", "Millilitres", "Milligrams"], answer: 1, rationale: "Food energy is measured in kilocalories (kcal) or kilojoules (kJ)." },
      { type: "mcq", q: "Which nutrient gives the most energy per gram?", options: ["Carbohydrate", "Protein", "Fat", "Fibre"], answer: 2, rationale: "Fat supplies about 9 kcal per gram, more than carbohydrate or protein (about 4 kcal each)." },
      { type: "mcq", q: "One gram of carbohydrate provides about:", options: ["4 kcal", "7 kcal", "9 kcal", "2 kcal"], answer: 0, rationale: "Carbohydrate yields about 4 kilocalories per gram." },
      { type: "mcq", q: "Basal metabolic rate is the energy used:", options: ["At complete rest to keep the body alive", "During heavy exercise", "Only while eating", "Only during sleep walking"], answer: 0, rationale: "BMR is the energy needed at complete rest for essential life processes." },
      { type: "mcq", q: "Which of these usually has the HIGHEST basal metabolic rate?", options: ["An elderly woman", "A sedentary adult", "A growing infant", "A person with low thyroid activity"], answer: 2, rationale: "BMR is highest in infancy and childhood because of rapid growth." },
      { type: "mcq", q: "An overactive thyroid gland will:", options: ["Lower the BMR", "Have no effect on BMR", "Raise the BMR", "Stop energy use"], answer: 2, rationale: "Thyroid hormone speeds metabolism; an overactive thyroid raises BMR." },
      { type: "mcq", q: "The largest part of most people's total daily energy expenditure is:", options: ["Physical activity", "Thermic effect of food", "Basal metabolic rate", "Digestion of fibre"], answer: 2, rationale: "BMR accounts for roughly two-thirds of total daily energy use." },
      { type: "mcq", q: "Compared with light office work, heavy manual labour requires:", options: ["Less energy", "The same energy", "More energy", "No energy"], answer: 2, rationale: "Greater physical activity increases total energy expenditure and requirement." },
      { type: "mcq", q: "If energy intake is consistently greater than energy expenditure, the result is:", options: ["Weight loss", "Stable weight", "Weight gain", "Dehydration"], answer: 2, rationale: "Surplus energy is stored as fat, leading to weight gain and obesity." },
      { type: "mcq", q: "Alcohol provides about how much energy per gram?", options: ["2 kcal", "4 kcal", "7 kcal", "9 kcal"], answer: 2, rationale: "Alcohol supplies about 7 kcal per gram — energy with little nutritional value ('empty calories')." }
      , { type: "fill", q: "The energy needed by the body at complete rest just to stay alive is called the ____ metabolic rate.", accept: ["basal", "BMR"], rationale: "Basal metabolic rate (BMR) is the resting energy needed for essential life processes." }
      , { type: "fill", q: "When energy intake equals energy expenditure, the body is said to be in energy ____.", accept: ["balance", "equilibrium"], rationale: "Energy balance keeps body weight stable; imbalance causes weight gain or loss." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "nut-09-balanced-diet",
    unit: "Unit 2 · Applied Nutrition & Dietetics",
    title: "Balanced Diet & Food Groups",
    readMinutes: 14,
    summary: "The meaning and principles of a balanced diet, the basic food groups and the food pyramid, recommended dietary allowances, and practical points for planning balanced meals.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a balanced diet?", p: "A balanced diet is one that contains all the nutrients — carbohydrate, protein, fat, vitamins, minerals, water and fibre — in the right amounts and proportions to meet the body's needs for energy, growth, repair and good health, with a small reserve for times of extra need. No single food contains all nutrients, so a balanced diet must include a variety of foods from each food group." },
      { h: "Principles of meal planning", list: [
        "Adequacy — provides enough of every nutrient and enough energy.",
        "Balance — the nutrients are in correct proportion to one another.",
        "Calorie (energy) control — energy intake matches the person's needs to keep a healthy weight.",
        "Nutrient density — choosing foods that give many nutrients for their calories.",
        "Moderation — not too much of any one food, especially fat, salt and sugar.",
        "Variety — different foods are chosen so the diet is not monotonous and no nutrient is missed."
      ] },
      { h: "The basic food groups", p: "Foods can be grouped by their main nutrient contribution. A simple grouping used in nutrition teaching is:", list: [
        "Cereals, grains and starchy roots — the energy (carbohydrate) foods: rice, wheat, maize, potato.",
        "Pulses, legumes, nuts and animal foods — the body-building (protein) foods: dal, beans, egg, fish, meat, milk.",
        "Vegetables and fruits — the protective (regulatory) foods rich in vitamins, minerals and fibre.",
        "Fats, oils and sugars — the concentrated energy foods, to be used sparingly."
      ] },
      { h: "The food pyramid", p: "The food pyramid is a simple picture that shows how much of each food group to eat. Foods at the wide base should be eaten most; foods at the narrow top should be eaten least.", figure: {
        caption: "A food guide pyramid: cereals at the base (most), then vegetables and fruits, then protein foods, with fats and sugars at the tip (least).",
        svg: '<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Food guide pyramid showing proportions of food groups."><polygon points="240,20 290,90 190,90" fill="#7C2D12"/><text x="240" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FFF7ED">Fats, sugars</text><polygon points="190,90 290,90 320,160 160,160" fill="#B45309"/><text x="240" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFF7ED">Milk, meat, pulses (protein)</text><polygon points="160,160 320,160 355,225 125,225" fill="#FB923C"/><text x="240" y="198" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Vegetables &amp; fruits</text><polygon points="125,225 355,225 395,290 85,290" fill="#FEF3C7"/><text x="240" y="262" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Cereals, grains, roots (most)</text></svg>'
      } },
      { h: "Recommended Dietary Allowance (RDA)", p: "The Recommended Dietary Allowance (RDA) is the amount of each nutrient that is enough to meet the needs of nearly all healthy people in a particular age and sex group. RDAs are set with a margin of safety above the average requirement, and they are higher for children, adolescents, and pregnant and lactating women. RDAs guide the planning of balanced diets and the evaluation of whether a diet is adequate." },
      { h: "Factors to consider when planning a diet", list: [
        "Age, sex, body size and activity of the person.",
        "Physiological state — growth, pregnancy, lactation, illness or recovery.",
        "Food availability, cost and the season.",
        "Religion, culture, food habits and personal likes and dislikes.",
        "Methods of cooking that preserve nutrients."
      ] },
      { h: "Practical tips for a balanced meal", p: "A practical balanced Bangladeshi meal combines a cereal (rice or ruti) for energy, a pulse or fish/egg/meat for body building, plenty of vegetables and some fruit for protection, a little oil for energy and fat-soluble vitamins, and milk where affordable for calcium. Using local, seasonal and inexpensive foods makes a balanced diet achievable for most families." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Define a balanced diet and explain why variety is important.",
      "List and explain the principles of meal planning.",
      "Describe the basic food groups and give examples of each.",
      "What is Recommended Dietary Allowance (RDA)? Why is it set above the average requirement?",
      "Plan a balanced day's meal for an adult using locally available foods."
    ],
    assessment: [
      { type: "mcq", q: "A balanced diet is one that provides:", options: ["All nutrients in the right amounts and proportions", "Only energy-giving foods", "Only protein foods", "Only fruits and vegetables"], answer: 0, rationale: "A balanced diet supplies all nutrients in correct amounts and proportions for health." },
      { type: "mcq", q: "Why must a balanced diet include a variety of foods?", options: ["Because variety is cheaper", "Because variety adds colour only", "Because no single food contains all nutrients", "Because it is a religious rule"], answer: 2, rationale: "No one food has every nutrient, so variety from all food groups is needed." },
      { type: "mcq", q: "Rice, wheat and potato belong mainly to which food group?", options: ["Energy-giving foods", "Body-building foods", "Protective foods", "Fats and oils"], answer: 0, rationale: "Cereals and starchy roots are carbohydrate-rich energy foods." },
      { type: "mcq", q: "Vegetables and fruits are called protective foods because they are rich in:", options: ["Carbohydrate and fat", "Protein only", "Vitamins, minerals and fibre", "Water only"], answer: 2, rationale: "Vegetables and fruits supply vitamins, minerals and fibre that protect health." },
      { type: "mcq", q: "In the food pyramid, the foods that should be eaten in the LARGEST amount are at the:", options: ["Base (bottom)", "Tip (top)", "Middle only", "Outside"], answer: 0, rationale: "The wide base shows cereals and grains, to be eaten most; the narrow tip shows foods to eat least." },
      { type: "mcq", q: "Which group is shown at the tip of the food pyramid, to be eaten least?", options: ["Cereals", "Vegetables", "Fats and sugars", "Pulses"], answer: 2, rationale: "Fats, oils and sugars sit at the tip and should be used sparingly." },
      { type: "mcq", q: "RDA stands for:", options: ["Recommended Dietary Allowance", "Required Daily Amount", "Reduced Diet Advice", "Regular Daily Allowance"], answer: 0, rationale: "RDA = Recommended Dietary Allowance, the nutrient amount that meets the needs of nearly all healthy people." },
      { type: "mcq", q: "RDAs are set HIGHER for which group?", options: ["Sedentary elderly men", "Pregnant and lactating women", "Healthy non-pregnant adults", "People who are overweight"], answer: 1, rationale: "Pregnancy and lactation increase nutrient needs, so RDAs are higher for these women." },
      { type: "mcq", q: "Choosing foods that give many nutrients for their calories is called:", options: ["Nutrient density", "Calorie control", "Moderation", "Variety"], answer: 0, rationale: "Nutrient density means a high nutrient content relative to the energy provided." },
      { type: "mcq", q: "Which is a body-building food?", options: ["Rice", "Cooking oil", "Egg", "Sugar"], answer: 2, rationale: "Egg is a protein-rich body-building food; rice and sugar give energy and oil gives fat." }
      , { type: "fill", q: "The principle of meal planning that means matching energy intake to a person's needs is calorie ____.", accept: ["control", "balance"], rationale: "Calorie (energy) control keeps intake matched to needs and maintains healthy weight." }
      , { type: "fill", q: "The amount of a nutrient enough to meet the needs of nearly all healthy people in a group is the Recommended Dietary ____.", accept: ["Allowance", "allowance"], rationale: "Recommended Dietary Allowance (RDA) is set with a safety margin above the average requirement." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "nut-10-assessment-bmi",
    unit: "Unit 2 · Applied Nutrition & Dietetics",
    title: "Nutritional Assessment (including BMI)",
    readMinutes: 15,
    summary: "Methods of assessing nutritional status — anthropometry (including BMI and MUAC), biochemical tests, clinical signs and dietary assessment (the ABCD approach) — and their use by the nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is nutritional assessment?", p: "Nutritional assessment is the systematic measurement and evaluation of a person's nutritional status — whether they are well nourished, undernourished or overnourished. It helps to identify people at nutritional risk, to plan suitable diets and to monitor the effect of treatment. A full assessment uses several methods together, remembered as the ABCD approach." },
      { h: "The ABCD of assessment", list: [
        "A — Anthropometry (body measurements such as weight, height, BMI, MUAC).",
        "B — Biochemical (laboratory) tests, such as haemoglobin and blood protein.",
        "C — Clinical examination for signs of deficiency.",
        "D — Dietary assessment of what and how much the person eats."
      ] },
      { h: "Anthropometry", p: "Anthropometry means measuring the body. It is simple, cheap and non-invasive, and is the most widely used method.", list: [
        "Weight and height — the basic measurements; followed over time they show growth or loss.",
        "Body Mass Index (BMI) — relates weight to height in adults.",
        "Weight-for-age, height-for-age and weight-for-height — used to assess growth in children (underweight, stunting and wasting).",
        "Mid-upper-arm circumference (MUAC) — a quick screen for acute malnutrition, especially in children and pregnancy.",
        "Skinfold (fat-fold) thickness — estimates body fat.",
        "Waist circumference — indicates abdominal (central) fat and disease risk."
      ] },
      { h: "Body Mass Index (BMI)", p: "BMI is the most useful single measure of nutritional status in adults. It is calculated as weight in kilograms divided by the square of height in metres (kg/m²). BMI shows whether an adult's weight is healthy for their height, but it is not used in the same way for children or pregnant women.", figure: {
        caption: "BMI formula and the standard adult classification of nutritional status.",
        svg: '<svg viewBox="0 0 540 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BMI formula and weight categories."><rect x="20" y="20" width="500" height="48" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="270" y="50" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#7C2D12">BMI = weight (kg) &#247; [height (m)]&#178;</text><rect x="20" y="85" width="500" height="32" rx="6" fill="#FFF7ED" stroke="#7C2D12" stroke-width="1.5"/><text x="270" y="106" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Below 18.5 = Underweight</text><rect x="20" y="123" width="500" height="32" rx="6" fill="#FB923C"/><text x="270" y="144" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">18.5 to 24.9 = Normal (healthy)</text><rect x="20" y="161" width="500" height="32" rx="6" fill="#FFF7ED" stroke="#7C2D12" stroke-width="1.5"/><text x="270" y="182" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">25 to 29.9 = Overweight</text><rect x="20" y="199" width="500" height="28" rx="6" fill="#FFEDD5" stroke="#7C2D12" stroke-width="1.5"/><text x="270" y="218" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">30 and above = Obese</text></svg>'
      } },
      { h: "Reading the BMI", p: "For adults, a BMI below 18.5 means underweight, 18.5–24.9 is the normal healthy range, 25–29.9 is overweight, and 30 or more is obese. For example, a person weighing 60 kg and 1.6 m tall has a BMI of 60 ÷ (1.6 × 1.6) = 23.4, which is normal. A low BMI suggests chronic undernutrition; a high BMI suggests excess fat and a higher risk of diabetes and heart disease." },
      { h: "Biochemical and clinical assessment", list: [
        "Biochemical tests — blood haemoglobin (for anaemia), serum proteins such as albumin (for protein status), and blood levels of vitamins or minerals when needed.",
        "Clinical signs — examining the eyes (for vitamin A deficiency), the mouth and tongue (for B-vitamin deficiency), the gums (for vitamin C), the skin, hair, nails and the thyroid (for goitre)."
      ] },
      { h: "Dietary assessment", p: "Dietary assessment finds out what and how much a person eats. Common methods are the 24-hour recall (listing all food eaten in the past day), the food-frequency questionnaire (how often particular foods are eaten), and the food diary. The information is compared with the RDA to judge whether the diet is adequate. Dietary assessment also reveals food habits, beliefs and problems that affect nutrition." },
      { h: "The nurse's role", p: "The nurse takes accurate weight, height, BMI and MUAC, records them on growth charts where relevant, looks for clinical signs of deficiency, asks about food intake, and reports findings to the team. Repeated measurements allow the nurse to monitor whether a patient's nutrition is improving with treatment." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Describe the ABCD methods of nutritional assessment.",
      "How is BMI calculated? Give the adult classification of BMI.",
      "What is MUAC and why is it useful in assessing malnutrition?",
      "Name the methods of dietary assessment and explain any one.",
      "Describe the role of the nurse in the nutritional assessment of a patient."
    ],
    assessment: [
      { type: "mcq", q: "The 'A' in the ABCD of nutritional assessment stands for:", options: ["Albumin", "Anthropometry", "Appetite", "Activity"], answer: 1, rationale: "A = Anthropometry, the measurement of the body (weight, height, BMI, MUAC)." },
      { type: "mcq", q: "BMI is calculated as:", options: ["Weight (kg) ÷ height (m)²", "Weight (kg) × height (m)", "Height (m) ÷ weight (kg)", "Weight (kg) ÷ age"], answer: 0, rationale: "BMI = weight in kilograms divided by the square of height in metres (kg/m²)." },
      { type: "mcq", q: "A normal (healthy) adult BMI lies between:", options: ["12 and 17", "30 and 35", "18.5 and 24.9", "25 and 29.9"], answer: 2, rationale: "A BMI of 18.5–24.9 is the normal healthy range for adults." },
      { type: "mcq", q: "An adult with a BMI of 32 is classified as:", options: ["Underweight", "Normal", "Overweight", "Obese"], answer: 3, rationale: "A BMI of 30 or more is classed as obese." },
      { type: "mcq", q: "A man weighs 70 kg and is 1.75 m tall. His BMI is closest to:", options: ["18", "23", "28", "32"], answer: 1, rationale: "70 ÷ (1.75 × 1.75) = 70 ÷ 3.06 ≈ 22.9, which is in the normal range." },
      { type: "mcq", q: "Mid-upper-arm circumference (MUAC) is mainly used to:", options: ["Measure height", "Screen quickly for acute malnutrition", "Test blood sugar", "Count calories"], answer: 1, rationale: "MUAC is a simple, rapid screen for acute malnutrition, especially in children and pregnancy." },
      { type: "mcq", q: "Which is a biochemical method of nutritional assessment?", options: ["Measuring BMI", "Blood haemoglobin test", "Counting meals per day", "Examining the gums"], answer: 1, rationale: "Biochemical (laboratory) assessment includes blood tests such as haemoglobin." },
      { type: "mcq", q: "Examining the eyes, tongue and gums for signs of deficiency is part of which method?", options: ["Anthropometry", "Biochemical assessment", "Clinical examination", "Dietary recall"], answer: 2, rationale: "Looking for physical signs of deficiency is the clinical (C) method." },
      { type: "mcq", q: "Listing all the food a person ate in the previous day is called a:", options: ["Food frequency questionnaire", "24-hour recall", "Skinfold test", "Growth chart"], answer: 1, rationale: "The 24-hour recall records all foods consumed in the past 24 hours." },
      { type: "mcq", q: "In children, low height-for-age (chronic undernutrition) is described as:", options: ["Wasting", "Stunting", "Obesity", "Oedema"], answer: 1, rationale: "Stunting (low height-for-age) reflects long-term, chronic undernutrition; wasting (low weight-for-height) reflects acute undernutrition." }
      , { type: "fill", q: "The body measurement that relates an adult's weight to the square of height is the Body Mass ____.", accept: ["Index", "index", "BMI"], rationale: "Body Mass Index (BMI) = weight (kg) ÷ height (m)²." }
      , { type: "fill", q: "A quick screen for acute malnutrition that measures the arm is the mid-upper-arm ____.", accept: ["circumference", "MUAC"], rationale: "Mid-upper-arm circumference (MUAC) rapidly screens for acute malnutrition." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "nut-11-life-cycle",
    unit: "Unit 2 · Applied Nutrition & Dietetics",
    title: "Nutrition Through the Life Cycle",
    readMinutes: 16,
    summary: "Changing nutritional needs across life — pregnancy, lactation, infancy, childhood, adolescence and old age — with emphasis on breastfeeding, weaning and the role of the nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why needs change through life", p: "Nutritional needs are not the same at every age. They rise during periods of rapid growth (infancy, childhood, adolescence) and during pregnancy and lactation, and they change again in old age. Meeting the right needs at each stage protects health and helps prevent both undernutrition and diet-related disease. The first 1000 days — from conception to a child's second birthday — are especially important for lifelong health." },
      { h: "Nutrition in pregnancy", p: "A pregnant woman must nourish both herself and her growing baby, so her needs for energy, protein, and especially iron, folic acid, calcium and iodine rise. Good nutrition in pregnancy supports the baby's growth and brain development and prevents low birth weight.", list: [
        "Extra energy and protein for the growth of the baby and the mother's tissues.",
        "Iron and folic acid to prevent anaemia in the mother and neural-tube defects in the baby; supplements are routinely given.",
        "Calcium and vitamin D for the baby's bones and to protect the mother's stores.",
        "Iodine for the baby's brain development.",
        "Enough food, rest, and avoidance of alcohol, tobacco and unnecessary medicines."
      ] },
      { h: "Nutrition in lactation", p: "A breastfeeding mother needs even more energy and fluid than in pregnancy to produce enough milk. Her diet should be rich in protein, calcium, iron and vitamins, and she should drink plenty of fluids. Good maternal nutrition and frequent suckling keep up a good milk supply. Lactation should not be a time of dieting." },
      { h: "Infant nutrition: breastfeeding", p: "Breast milk is the ideal and complete food for the infant in the first six months of life.", list: [
        "Exclusive breastfeeding (only breast milk, no other food or water) is recommended for the first 6 months.",
        "Colostrum, the first thick yellow milk, is rich in antibodies and protects the newborn from infection; it must not be discarded.",
        "Breast milk is clean, at the right temperature, easily digested, and gives immunity; breastfeeding also bonds mother and baby and helps spacing of births.",
        "Breastfeeding should ideally continue up to two years along with other foods."
      ] },
      { h: "Weaning (complementary feeding)", p: "Weaning, or complementary feeding, is the gradual introduction of other foods alongside breast milk, starting at about six months when breast milk alone can no longer meet the growing baby's needs. Foods should be introduced one at a time, starting with soft, mashed, energy- and nutrient-rich foods (such as khichuri of rice, dal, vegetables and a little oil), increasing in amount and variety. Foods must be freshly prepared and hygienic. Late or wrong weaning is an important cause of malnutrition." },
      { h: "Nutrition in childhood and adolescence", list: [
        "Young children need nutrient-dense foods in small, frequent meals because their stomachs are small but their needs are high.",
        "School-age children need a balanced diet to support steady growth, learning and activity.",
        "Adolescents have a growth spurt and high needs for energy, protein, calcium (for bone) and iron (especially girls after menstruation begins).",
        "Good habits formed now — eating breakfast, limiting junk food and sugary drinks — protect later health."
      ] },
      { h: "Nutrition in old age", p: "In old age energy needs fall because activity and BMR decrease, but the need for protein, calcium, vitamins and minerals stays high, so foods must be nutrient-dense. Common problems include poor appetite, difficulty chewing, constipation, and reduced absorption. Older people benefit from soft, easily digested, high-fibre foods, adequate fluid and calcium and vitamin D for bone, with less salt, sugar and fat to protect against heart disease and diabetes." },
      { h: "The nurse's role across the life cycle", p: "The nurse promotes and supports exclusive breastfeeding and correct weaning, gives iron–folic acid and other supplements in pregnancy, monitors children's growth, counsels adolescents and older people on healthy eating, and identifies and refers those at nutritional risk at every stage of life." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Describe the extra nutritional needs of a woman during pregnancy.",
      "What is exclusive breastfeeding? List the advantages of breastfeeding.",
      "Define weaning. Describe the principles of correct complementary feeding.",
      "Explain the special nutritional needs of adolescents.",
      "Discuss the nutritional problems and dietary needs of the elderly."
    ],
    assessment: [
      { type: "mcq", q: "Exclusive breastfeeding is recommended for the first:", options: ["3 months", "6 months", "12 months", "24 months"], answer: 1, rationale: "Only breast milk (no other food or water) is recommended for the first 6 months of life." },
      { type: "mcq", q: "The first thick yellow milk, rich in antibodies, is called:", options: ["Colostrum", "Whey", "Curd", "Cream"], answer: 0, rationale: "Colostrum is the first milk; it is rich in antibodies and protects the newborn from infection." },
      { type: "mcq", q: "Which nutrients are especially increased and supplemented during pregnancy?", options: ["Iron and folic acid", "Vitamin C and fibre", "Sodium and sugar", "Fat only"], answer: 0, rationale: "Iron and folic acid are routinely supplemented to prevent maternal anaemia and neural-tube defects." },
      { type: "mcq", q: "Weaning (complementary feeding) should normally begin at about:", options: ["2 months", "4 months", "6 months", "12 months"], answer: 2, rationale: "At about 6 months breast milk alone no longer meets needs, so other foods are introduced." },
      { type: "mcq", q: "A suitable first weaning food in Bangladesh is:", options: ["Strong tea", "Fried spicy snacks", "Soft khichuri (rice, dal, vegetables, oil)", "Carbonated drinks"], answer: 2, rationale: "Soft, mashed, energy- and nutrient-rich foods such as khichuri are ideal first weaning foods." },
      { type: "mcq", q: "Compared with pregnancy, energy and fluid needs during lactation are:", options: ["Lower", "The same", "Higher", "Zero"], answer: 2, rationale: "Milk production raises energy and fluid needs above those of pregnancy." },
      { type: "mcq", q: "Adolescent girls have a particularly high need for iron mainly because of:", options: ["Rapid bone loss", "Onset of menstruation", "Reduced activity", "Low BMR"], answer: 1, rationale: "Menstrual blood loss increases iron needs in adolescent girls, raising the risk of anaemia." },
      { type: "mcq", q: "Young children should be given:", options: ["Large meals twice a day", "Small, frequent, nutrient-dense meals", "Only liquids", "Adult-sized portions"], answer: 1, rationale: "Small stomachs and high needs mean children require small, frequent, nutrient-dense meals." },
      { type: "mcq", q: "In old age, energy needs usually ____ while needs for protein, calcium and vitamins stay high.", options: ["Increase", "Decrease", "Disappear", "Double"], answer: 1, rationale: "Lower activity and BMR reduce energy needs, but micronutrient and protein needs remain high, so foods must be nutrient-dense." },
      { type: "mcq", q: "The 'first 1000 days' important for lifelong health refers to the period from conception to about the child's:", options: ["First birthday", "Second birthday", "Fifth birthday", "Tenth birthday"], answer: 1, rationale: "The first 1000 days run from conception to roughly the child's second birthday, a critical window for growth and development." }
      , { type: "fill", q: "Giving only breast milk and nothing else for the first six months is called ____ breastfeeding.", accept: ["exclusive"], rationale: "Exclusive breastfeeding means breast milk only, with no other food or water, for the first 6 months." }
      , { type: "fill", q: "The gradual introduction of other foods alongside breast milk from about six months is called ____.", accept: ["weaning", "complementary feeding"], rationale: "Weaning (complementary feeding) supplements breast milk as the baby's needs grow." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "nut-12-therapeutic-diets",
    unit: "Unit 2 · Applied Nutrition & Dietetics",
    title: "Therapeutic / Modified Diets",
    readMinutes: 14,
    summary: "The purpose and principles of therapeutic diets; routine hospital diets; consistency-modified diets; modifications of nutrients; and routes of feeding including enteral and parenteral nutrition.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a therapeutic diet?", p: "A therapeutic (modified) diet is a normal diet that has been changed to suit the needs of a person who is ill. It is an important part of treatment. The change may be in the texture, the energy value, the amount of one or more nutrients, the number and timing of meals, or the way the food is given. The aim is to maintain or improve nutrition, to rest or support the affected organ, and to help recovery." },
      { h: "Principles of planning a therapeutic diet", list: [
        "Base it on the person's normal diet, changing only what is necessary.",
        "Meet nutritional needs as far as the illness allows.",
        "Consider the patient's likes, habits, religion and ability to eat.",
        "Make the food acceptable, attractive and easy to digest.",
        "Explain the diet to the patient and family so it is followed at home."
      ] },
      { h: "Routine hospital diets", list: [
        "Normal (regular) diet — a balanced diet for patients with no special needs.",
        "Soft diet — food that is soft in texture and lightly seasoned, easy to chew and digest (for example after surgery or in mild illness).",
        "Light / convalescent diet — between soft and normal, for recovering patients.",
        "Full-fluid diet — all foods that are liquid or become liquid at body temperature (milk, soup, custard).",
        "Clear-fluid diet — only clear liquids that leave little residue (water, clear soup, fruit juice, glucose water), used briefly after surgery or in acute illness."
      ] },
      { h: "Consistency (texture) modifications", p: "The texture of food is changed when a patient cannot chew or swallow normally. A soft diet suits those who are weak or have sore mouths; a pureed or liquidised diet suits those with serious chewing or swallowing difficulty; a clear- or full-fluid diet is used when the gut must be rested. Care is taken that fluid and pureed diets still provide enough energy and nutrients." },
      { h: "Nutrient and energy modifications", list: [
        "High-calorie / high-protein diet — for underweight patients, fever, burns and recovery.",
        "Low-calorie diet — for obesity and weight reduction.",
        "Low-fat diet — for gall-bladder and liver disease and high blood cholesterol.",
        "Low-salt (sodium-restricted) diet — for high blood pressure, heart and kidney disease.",
        "Diabetic diet — controlled, regular carbohydrate with limited sugar.",
        "High-fibre or low-fibre (low-residue) diet — for constipation or for bowel rest respectively."
      ] },
      { h: "Routes of feeding", p: "When a patient cannot eat normally, nutrition can be given by other routes.", list: [
        "Oral route — by mouth; always preferred when possible.",
        "Enteral (tube) feeding — liquid feed given through a tube into the stomach or intestine (for example a nasogastric tube) when the patient cannot swallow but the gut works.",
        "Parenteral nutrition — nutrients given directly into a vein when the gut cannot be used; partial parenteral nutrition (PPN) supplements oral intake, while total parenteral nutrition (TPN) supplies all needs intravenously."
      ] },
      { h: "Enteral and parenteral nutrition in brief", p: "The guiding rule is: 'if the gut works, use it.' Enteral feeding is safer, cheaper and more natural than parenteral feeding and helps keep the gut healthy. Parenteral nutrition is reserved for patients whose intestines cannot absorb food, such as after major bowel surgery or in severe intestinal disease. Both require careful, sterile nursing care to prevent complications such as infection and blocked tubes." },
      { h: "The nurse's role", p: "The nurse serves the correct diet, checks that the right patient receives the right diet, helps and encourages the patient to eat, records intake, watches for problems such as nausea or difficulty swallowing, and gives safe tube or intravenous feeds as ordered. The nurse also teaches the patient and family about the diet for home." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Define a therapeutic diet and state its purposes.",
      "List the routine hospital diets and explain any three.",
      "Differentiate between clear-fluid and full-fluid diets.",
      "Name the routes of feeding and explain enteral and parenteral nutrition.",
      "Describe the role of the nurse in the care of a patient on a therapeutic diet."
    ],
    assessment: [
      { type: "mcq", q: "A therapeutic diet is best defined as:", options: ["A diet for healthy athletes", "A normal diet modified to suit an illness", "A diet of only fruits", "A diet without water"], answer: 1, rationale: "A therapeutic (modified) diet is the normal diet changed to meet the needs of an ill person." },
      { type: "mcq", q: "Which diet contains only liquids that leave little residue, such as clear soup and glucose water?", options: ["Clear-fluid diet", "Full-fluid diet", "Soft diet", "Normal diet"], answer: 0, rationale: "A clear-fluid diet provides only clear, low-residue liquids, used briefly after surgery or in acute illness." },
      { type: "mcq", q: "A patient who has had mouth surgery and cannot chew well is best given a:", options: ["Normal hard diet", "High-fibre raw diet", "Soft or pureed diet", "Dry diet"], answer: 2, rationale: "A soft or pureed (consistency-modified) diet suits those who cannot chew normally." },
      { type: "mcq", q: "A low-salt (sodium-restricted) diet is most appropriate for a patient with:", options: ["High blood pressure", "Constipation", "Anaemia", "Night blindness"], answer: 0, rationale: "Sodium restriction helps control high blood pressure and heart and kidney disease." },
      { type: "mcq", q: "Which patient most needs a high-protein, high-calorie diet?", options: ["An obese adult", "A patient with extensive burns", "A patient with high blood pressure", "A healthy office worker"], answer: 1, rationale: "Burns greatly increase energy and protein needs for tissue repair." },
      { type: "mcq", q: "Feeding a patient liquid feed through a nasogastric tube into the stomach is called:", options: ["Parenteral nutrition", "Enteral (tube) feeding", "Oral feeding", "Intravenous feeding"], answer: 1, rationale: "Enteral feeding delivers nutrition through a tube into the working gut." },
      { type: "mcq", q: "Total parenteral nutrition (TPN) means giving:", options: ["All nutrients into a vein", "Food by mouth only", "Only water by tube", "A normal hospital tray"], answer: 0, rationale: "TPN supplies all nutritional needs directly into a vein when the gut cannot be used." },
      { type: "mcq", q: "The guiding rule for choosing a feeding route is:", options: ["Always use a vein", "If the gut works, use it", "Never feed by tube", "Use only clear fluids"], answer: 1, rationale: "Enteral feeding is preferred whenever the gastrointestinal tract is functioning ('if the gut works, use it')." },
      { type: "mcq", q: "Which is the FIRST principle in planning a therapeutic diet?", options: ["Change the whole diet completely", "Base it on the person's normal diet and change only what is necessary", "Ignore the patient's likes", "Give only supplements"], answer: 1, rationale: "A therapeutic diet should modify the normal diet as little as possible while meeting the illness's needs." },
      { type: "mcq", q: "A low-residue (low-fibre) diet is used mainly to:", options: ["Relieve constipation", "Rest the bowel", "Build muscle", "Treat anaemia"], answer: 1, rationale: "A low-residue diet reduces stool bulk to rest the bowel; a high-fibre diet is used for constipation." }
      , { type: "fill", q: "Giving nutrients directly into a vein when the gut cannot be used is called ____ nutrition.", accept: ["parenteral"], rationale: "Parenteral nutrition delivers nutrients intravenously, bypassing the digestive tract." }
      , { type: "fill", q: "A diet of all foods that are liquid or become liquid at body temperature, such as milk and custard, is a ____-fluid diet.", accept: ["full"], rationale: "A full-fluid diet includes all liquids and foods that liquefy at body temperature." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "nut-13-diet-in-disease",
    unit: "Unit 2 · Applied Nutrition & Dietetics",
    title: "Diet in Disease Conditions",
    readMinutes: 16,
    summary: "Dietary management of common conditions — fever, diabetes mellitus, kidney (renal) disease, heart (cardiac) disease and gastrointestinal disorders — and the principles behind each diet.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Diet as part of treatment", p: "In many diseases the right diet is as important as medicine. The diet is modified to meet the changed needs of the body, to rest or protect the affected organ, and to relieve symptoms. The general aim is to keep the patient well nourished while managing the disease. The following are the principles for some common conditions." },
      { h: "Diet in fever", p: "Fever raises the body's metabolic rate and energy needs (about 10–13% for each 1°C rise in temperature) and increases the breakdown of body protein and the loss of fluid through sweat.", list: [
        "Give a high-calorie, high-protein diet to meet the raised needs and replace losses.",
        "Provide plenty of fluids to prevent dehydration and help excrete wastes.",
        "Use soft, easily digested foods given as small, frequent feeds because appetite is poor.",
        "Include fruit juices and extra vitamins (especially vitamin C and B-complex)."
      ] },
      { h: "Diet in diabetes mellitus", p: "Diabetes is a disorder in which blood glucose is too high because of lack or poor action of insulin. Diet is central to its control.", list: [
        "Eat regular meals at fixed times and avoid skipping meals.",
        "Control total energy to reach and keep a healthy weight.",
        "Choose complex carbohydrates (whole grains, vegetables, pulses) and avoid sugar, sweets and sugary drinks.",
        "Include plenty of fibre, which slows the rise in blood sugar.",
        "Limit fat, especially saturated fat, to protect the heart.",
        "Distribute carbohydrate evenly through the day to avoid swings in blood sugar."
      ] },
      { h: "Diet in kidney (renal) disease", p: "In kidney disease the kidneys cannot remove wastes and excess fluid and salts well, so the diet is adjusted to reduce their workload while preventing malnutrition.", list: [
        "Often a controlled-protein diet (enough good-quality protein but not excess) to limit the build-up of nitrogen wastes.",
        "Restriction of sodium (salt) to control blood pressure and swelling.",
        "Restriction of potassium and phosphorus when blood levels are high.",
        "Fluid intake adjusted to urine output, especially in advanced disease.",
        "Adequate energy from carbohydrate and fat so that protein is not burned for energy."
      ] },
      { h: "Diet in heart (cardiac) disease", p: "Diet helps control the risk factors for heart disease — high blood pressure, high cholesterol and overweight.", list: [
        "Reduce salt (sodium) to help control blood pressure and reduce fluid retention.",
        "Reduce total and saturated fat and avoid trans fat to lower blood cholesterol.",
        "Control energy to reach a healthy weight.",
        "Increase fruits, vegetables and fibre; use unsaturated oils in moderation.",
        "Limit caffeine and alcohol; small, frequent meals are easier on the heart."
      ] },
      { h: "Diet in gastrointestinal (GI) disorders", list: [
        "Diarrhoea — replace fluid and salts with ORS; give easily digested, low-fibre foods; continue feeding (and breastfeeding) and give zinc in children.",
        "Constipation — a high-fibre diet with whole grains, vegetables and fruits, plenty of fluids and regular activity.",
        "Peptic ulcer / gastritis — small, frequent, bland meals; avoid very spicy, fried and acidic foods, strong tea, coffee and alcohol that irritate the stomach.",
        "Liver disease — adequate energy and protein (unless the liver failure is severe), low fat if fat is poorly tolerated, and no alcohol."
      ] },
      { h: "General nursing points", p: "For every disease the nurse must make sure the prescribed diet is understood and accepted, encourage the patient to eat, monitor intake and weight, watch for symptoms such as low blood sugar in a diabetic patient or swelling in a kidney patient, and teach the patient and family how to continue the diet safely at home. Good diet counselling improves the success of treatment.", figure: {
        caption: "Key dietary modification for common disease conditions.",
        svg: '<svg viewBox="0 0 540 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Main dietary change for fever, diabetes, renal, cardiac and GI disease."><rect x="15" y="15" width="250" height="34" rx="6" fill="#7C2D12"/><text x="140" y="37" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Condition</text><rect x="275" y="15" width="250" height="34" rx="6" fill="#7C2D12"/><text x="400" y="37" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Key diet change</text><rect x="15" y="51" width="250" height="32" rx="4" fill="#FEF3C7"/><text x="25" y="72" font-family="sans-serif" font-size="11" fill="#7C2D12">Fever</text><rect x="275" y="51" width="250" height="32" rx="4" fill="#FEF3C7"/><text x="285" y="72" font-family="sans-serif" font-size="11" fill="#7C2D12">High calorie, high protein, fluids</text><rect x="15" y="85" width="250" height="32" rx="4" fill="#FFF7ED"/><text x="25" y="106" font-family="sans-serif" font-size="11" fill="#7C2D12">Diabetes</text><rect x="275" y="85" width="250" height="32" rx="4" fill="#FFF7ED"/><text x="285" y="106" font-family="sans-serif" font-size="11" fill="#7C2D12">Limit sugar; fibre; regular meals</text><rect x="15" y="119" width="250" height="32" rx="4" fill="#FEF3C7"/><text x="25" y="140" font-family="sans-serif" font-size="11" fill="#7C2D12">Renal disease</text><rect x="275" y="119" width="250" height="32" rx="4" fill="#FEF3C7"/><text x="285" y="140" font-family="sans-serif" font-size="11" fill="#7C2D12">Control protein, salt, potassium</text><rect x="15" y="153" width="250" height="32" rx="4" fill="#FFF7ED"/><text x="25" y="174" font-family="sans-serif" font-size="11" fill="#7C2D12">Cardiac disease</text><rect x="275" y="153" width="250" height="32" rx="4" fill="#FFF7ED"/><text x="285" y="174" font-family="sans-serif" font-size="11" fill="#7C2D12">Low salt, low saturated fat</text><rect x="15" y="187" width="250" height="32" rx="4" fill="#FEF3C7"/><text x="25" y="208" font-family="sans-serif" font-size="11" fill="#7C2D12">Diarrhoea</text><rect x="275" y="187" width="250" height="32" rx="4" fill="#FEF3C7"/><text x="285" y="208" font-family="sans-serif" font-size="11" fill="#7C2D12">ORS, fluids, continue feeding</text></svg>'
      } }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Describe the dietary management of a patient with fever.",
      "Outline the principles of a diabetic diet.",
      "What dietary modifications are needed in kidney (renal) disease?",
      "Explain the diet recommended for a patient with heart disease.",
      "Describe the dietary care of a patient with diarrhoea and of a patient with peptic ulcer."
    ],
    assessment: [
      { type: "mcq", q: "The diet recommended in fever is:", options: ["Low-calorie, low-protein", "High-calorie, high-protein with plenty of fluids", "Fat-free and fluid-free", "High-salt"], answer: 1, rationale: "Fever raises energy and protein needs and fluid losses, so a high-calorie, high-protein, high-fluid diet is given." },
      { type: "mcq", q: "A diabetic patient should mainly avoid:", options: ["Whole grains", "Green vegetables", "Sugar and sweets", "Pulses"], answer: 2, rationale: "Sugar and sweets cause sharp rises in blood glucose and should be avoided in diabetes." },
      { type: "mcq", q: "Which nutrient helps slow the rise in blood sugar and is encouraged in a diabetic diet?", options: ["Fibre", "Sugar", "Saturated fat", "Salt"], answer: 0, rationale: "Dietary fibre slows glucose absorption, smoothing blood-sugar rises." },
      { type: "mcq", q: "In kidney disease, intake of which nutrient is often controlled to limit nitrogen wastes?", options: ["Carbohydrate", "Protein", "Vitamin C", "Water-soluble vitamins"], answer: 1, rationale: "Protein is controlled (enough good-quality protein but not excess) to reduce the build-up of urea and other nitrogen wastes." },
      { type: "mcq", q: "Which mineral is restricted in both heart disease and kidney disease to control blood pressure and swelling?", options: ["Sodium (salt)", "Iron", "Calcium", "Iodine"], answer: 0, rationale: "Sodium restriction helps control blood pressure and fluid retention in cardiac and renal disease." },
      { type: "mcq", q: "To lower blood cholesterol in heart disease, the diet should reduce:", options: ["Fibre", "Fruits", "Saturated and trans fat", "Water"], answer: 2, rationale: "Cutting saturated and trans fat lowers LDL cholesterol and heart-disease risk." },
      { type: "mcq", q: "The most important first step in managing a child with diarrhoea is to:", options: ["Give ORS to replace fluid and salts", "Stop all feeding", "Give a high-fat diet", "Give only solid food"], answer: 0, rationale: "Replacing lost fluid and salts with ORS prevents dehydration; feeding should continue." },
      { type: "mcq", q: "A high-fibre diet with plenty of fluids is the treatment for:", options: ["Diarrhoea", "Constipation", "Peptic ulcer", "Fever"], answer: 1, rationale: "Fibre and fluids add bulk and soften stool, relieving constipation." },
      { type: "mcq", q: "A patient with peptic ulcer should avoid:", options: ["Bland soft foods", "Small frequent meals", "Very spicy and fried foods, strong tea and coffee", "Milk"], answer: 2, rationale: "Spicy, fried and acidic foods and strong tea/coffee irritate the stomach and worsen ulcers." },
      { type: "mcq", q: "Why is adequate energy from carbohydrate and fat important in a controlled-protein renal diet?", options: ["To raise blood sugar", "So that body protein is not burned for energy", "To increase salt", "To add flavour only"], answer: 1, rationale: "Sufficient non-protein energy spares dietary and body protein, preventing tissue breakdown and extra nitrogen waste." }
      , { type: "fill", q: "The mineral that must be restricted in high blood pressure and heart disease is ____ (common salt).", accept: ["sodium", "salt"], rationale: "Sodium (salt) restriction helps control blood pressure and fluid retention." }
      , { type: "fill", q: "In a child with diarrhoea, fluid and salts are replaced using ____ and feeding is continued.", accept: ["ORS", "oral rehydration solution", "oral rehydration salt"], rationale: "ORS replaces lost water and electrolytes; continued feeding maintains nutrition." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "nut-14-malnutrition",
    unit: "Unit 2 · Applied Nutrition & Dietetics",
    title: "Malnutrition & Nutritional Deficiency Disorders",
    readMinutes: 16,
    summary: "Protein-energy malnutrition (kwashiorkor, marasmus, MAM and SAM), micronutrient deficiencies (vitamin A, iron-deficiency anaemia, iodine deficiency), their causes, signs, management and prevention in Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is malnutrition?", p: "Malnutrition means a state of poor nutrition. It includes undernutrition (too little energy, protein or micronutrients) and overnutrition (too much food, leading to overweight and obesity). In Bangladesh undernutrition in mothers and young children remains the major problem, although overweight is rising. Malnutrition lowers resistance to infection, impairs growth and learning, and increases illness and death." },
      { h: "Protein-energy malnutrition (PEM)", p: "Protein-energy malnutrition results from a diet short of energy and protein, often made worse by repeated infections. It mainly affects young children and shows in two classic forms, with mixed forms in between.", list: [
        "Kwashiorkor — mainly protein deficiency; the child has oedema (swelling, especially of the feet), a 'moon face', a swollen abdomen, thin discoloured hair, skin changes, poor appetite and misery.",
        "Marasmus — severe deficiency of both energy and protein; the child is grossly wasted ('skin and bones'), with an old-man's face, no fat, marked muscle loss, but usually a good appetite.",
        "Marasmic kwashiorkor — features of both."
      ] },
      { h: "MAM and SAM", p: "Acute malnutrition (recent, rapid weight loss) is graded by severity to guide treatment.", list: [
        "Moderate Acute Malnutrition (MAM) — moderately low weight-for-height or reduced MUAC, without complications; managed with extra and improved feeding in the community.",
        "Severe Acute Malnutrition (SAM) — very low weight-for-height, very low MUAC, or the presence of oedema; life-threatening and needs special care. SAM with complications is treated in hospital with cautious feeding (therapeutic milk such as F-75 then F-100, or ready-to-use therapeutic food) and treatment of infection."
      ] },
      { h: "Causes of malnutrition", list: [
        "Poverty and not enough food in the household.",
        "Poor infant and young-child feeding — late or wrong weaning, not breastfeeding.",
        "Repeated infections such as diarrhoea, measles and worms, which use up nutrients.",
        "Ignorance of good feeding practices and harmful food beliefs.",
        "Large family size, poor sanitation and unsafe water.",
        "Maternal undernutrition leading to low-birth-weight babies."
      ] },
      { h: "Vitamin A deficiency", p: "Vitamin A deficiency is a major cause of preventable childhood blindness and increases the severity of infections. It first causes night blindness, then dryness of the eye (xerophthalmia) and white Bitot's spots, and finally softening of the cornea (keratomalacia) and permanent blindness. It is prevented by vitamin A-rich foods (green leafy vegetables, yellow fruits, egg, liver) and by twice-yearly high-dose vitamin A capsules for under-fives in Bangladesh.", figure: {
        caption: "The three common micronutrient deficiencies of public-health importance and their main effects.",
        svg: '<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vitamin A, iron and iodine deficiency and their effects."><rect x="20" y="30" width="150" height="120" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="95" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Vitamin A</text><text x="95" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Night blindness,</text><text x="95" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">xerophthalmia,</text><text x="95" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">blindness</text><rect x="195" y="30" width="150" height="120" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="270" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Iron</text><text x="270" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Anaemia,</text><text x="270" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">tiredness,</text><text x="270" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">pallor</text><rect x="370" y="30" width="150" height="120" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="445" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Iodine</text><text x="445" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Goitre,</text><text x="445" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">cretinism,</text><text x="445" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">poor growth</text></svg>'
      } },
      { h: "Iron-deficiency anaemia and iodine deficiency", list: [
        "Iron-deficiency anaemia — the commonest micronutrient deficiency; causes pallor, tiredness, breathlessness and reduced work and learning capacity; prevented by iron-rich foods with vitamin C, iron–folic acid supplements (especially in pregnancy and adolescence), deworming and control of infection.",
        "Iodine deficiency disorders (IDD) — cause goitre, and in pregnancy miscarriage, stillbirth and cretinism in the baby; prevented by universal use of iodised salt."
      ] },
      { h: "Management and prevention", p: "Mild and moderate malnutrition is managed by improving the diet — more energy- and nutrient-dense food, continued breastfeeding, treatment of infection and deworming. Severe acute malnutrition needs special, careful refeeding and medical care. Prevention is the priority and rests on: promotion of breastfeeding and correct weaning, immunisation, growth monitoring, supplementation (vitamin A, iron–folic acid), use of iodised salt, safe water and sanitation, nutrition education, and improvement of household food security." },
      { h: "The nurse's role", p: "The nurse weighs and measures children and plots growth, screens with MUAC, recognises the signs of PEM and micronutrient deficiency, gives supplements and therapeutic feeds, teaches mothers about feeding and hygiene, supports breastfeeding and weaning, and refers severe cases. Community nutrition education by nurses is central to preventing malnutrition." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Define malnutrition. Differentiate between kwashiorkor and marasmus.",
      "Differentiate between Moderate Acute Malnutrition (MAM) and Severe Acute Malnutrition (SAM).",
      "Describe the causes of protein-energy malnutrition in children.",
      "Describe vitamin A deficiency, its effects on the eye and its prevention.",
      "Outline the measures for the prevention of malnutrition in the community."
    ],
    assessment: [
      { type: "mcq", q: "Malnutrition includes:", options: ["Only undernutrition", "Only overnutrition", "Both undernutrition and overnutrition", "Neither"], answer: 2, rationale: "Malnutrition means poor nutrition of any kind — too little (undernutrition) or too much (overnutrition)." },
      { type: "mcq", q: "Oedema (swelling) in a malnourished child is the hallmark of:", options: ["Kwashiorkor", "Marasmus", "Scurvy", "Rickets"], answer: 0, rationale: "Kwashiorkor (mainly protein deficiency) is characterised by oedema, a moon face and skin/hair changes." },
      { type: "mcq", q: "A grossly wasted, 'skin and bones' child with an old-man's face but a good appetite most likely has:", options: ["Kwashiorkor", "Marasmus", "Goitre", "Pellagra"], answer: 1, rationale: "Marasmus is severe energy and protein deficiency causing extreme wasting, usually with a preserved appetite." },
      { type: "mcq", q: "The presence of oedema or a very low MUAC in a child indicates:", options: ["Normal nutrition", "Moderate acute malnutrition", "Severe acute malnutrition", "Overnutrition"], answer: 2, rationale: "Bilateral oedema or very low MUAC/weight-for-height defines severe acute malnutrition (SAM)." },
      { type: "mcq", q: "The earliest sign of vitamin A deficiency is:", options: ["Night blindness", "Goitre", "Bleeding gums", "Bow legs"], answer: 0, rationale: "Vitamin A deficiency first causes night blindness, before xerophthalmia and corneal damage." },
      { type: "mcq", q: "Twice-yearly high-dose vitamin A capsules in Bangladesh are given mainly to:", options: ["Children under five", "Elderly men", "Pregnant women only", "Adolescent boys"], answer: 0, rationale: "Under-fives receive periodic high-dose vitamin A to prevent deficiency and blindness." },
      { type: "mcq", q: "The most common micronutrient deficiency worldwide and in Bangladesh is:", options: ["Iron-deficiency anaemia", "Iodine deficiency", "Vitamin A deficiency", "Zinc deficiency"], answer: 0, rationale: "Iron-deficiency anaemia is the commonest micronutrient deficiency, especially in women and children." },
      { type: "mcq", q: "Repeated infections such as diarrhoea and measles contribute to malnutrition because they:", options: ["Increase appetite", "Use up nutrients and reduce intake", "Add nutrients", "Cure deficiency"], answer: 1, rationale: "Infections raise nutrient needs and reduce intake and absorption, worsening malnutrition." },
      { type: "mcq", q: "Which is a key preventive measure against malnutrition in young children?", options: ["Discarding colostrum", "Promotion of breastfeeding and correct weaning", "Early bottle feeding", "Avoiding immunisation"], answer: 1, rationale: "Breastfeeding, timely correct weaning, immunisation and hygiene are central to preventing malnutrition." },
      { type: "mcq", q: "Iodine deficiency in a pregnant woman can cause which condition in her baby?", options: ["Marasmus", "Cretinism", "Scurvy", "Rickets"], answer: 1, rationale: "Maternal iodine deficiency can cause cretinism (severe physical and mental retardation) in the child." }
      , { type: "fill", q: "Protein deficiency in a child causing oedema and a moon face is called ____.", accept: ["kwashiorkor"], rationale: "Kwashiorkor is protein-deficiency malnutrition marked by oedema and skin/hair changes." }
      , { type: "fill", q: "Severe acute malnutrition with complications is treated in hospital with therapeutic milk such as F-75 then ____.", accept: ["F-100", "F100"], rationale: "Inpatient SAM care uses F-75 for stabilisation then F-100 (or RUTF) for catch-up growth." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "nut-15-food-hygiene",
    unit: "Unit 2 · Applied Nutrition & Dietetics",
    title: "Food Hygiene, Safety & Preservation",
    readMinutes: 15,
    summary: "Food spoilage and food-borne illness; principles of food hygiene and safe handling; methods of food preservation; and food adulteration and fortification, with the nurse's role in food safety.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why food hygiene matters", p: "Food that is not handled safely can cause illness. Food hygiene means all the practices that keep food safe and wholesome from production to eating, so that it does not harm health. Unsafe food is a major cause of diarrhoea and other illnesses, especially in children, and good food hygiene is one of the cheapest ways to prevent disease." },
      { h: "Food spoilage and food-borne illness", list: [
        "Food spoilage — food going bad due to the growth of micro-organisms (bacteria, moulds, yeasts), the action of enzymes, or chemical change; spoiled food looks, smells or tastes bad.",
        "Food-borne illness (food poisoning) — illness caused by eating food contaminated with harmful germs or their toxins, or with chemicals; common signs are vomiting, diarrhoea and abdominal pain.",
        "Food infection vs food intoxication — infection is caused by germs that grow in the body (for example Salmonella from undercooked egg or poultry); intoxication is caused by toxins already formed in the food."
      ] },
      { h: "How food gets contaminated", list: [
        "Dirty hands of food handlers, especially after using the toilet.",
        "Unclean water, utensils and surfaces.",
        "Flies, insects, rats and other pests.",
        "Raw foods touching cooked foods (cross-contamination).",
        "Keeping cooked food too long at room temperature, allowing germs to multiply."
      ] },
      { h: "Principles of safe food handling", p: "Safe food handling can be summarised in a few golden rules.", list: [
        "Keep clean — wash hands, utensils and surfaces; protect food from insects and pests.",
        "Separate raw and cooked food to prevent cross-contamination.",
        "Cook food thoroughly, especially meat, poultry, egg and fish.",
        "Keep food at safe temperatures — eat cooked food hot, keep it either hot or refrigerated, and do not leave it long at room temperature.",
        "Use safe water and safe, fresh raw materials; wash fruits and vegetables.",
        "Cover food, store it properly, and reheat leftovers thoroughly before eating."
      ] },
      { h: "Food preservation", p: "Food preservation means treating food so that it keeps longer without spoiling, by stopping or slowing the growth of micro-organisms and the action of enzymes. Preservation reduces waste, makes seasonal foods available all year and can improve food security.", figure: {
        caption: "Common methods of food preservation grouped by principle.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Methods of food preservation."><rect x="190" y="10" width="160" height="36" rx="8" fill="#7C2D12"/><text x="270" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">Preservation</text><rect x="15" y="80" width="120" height="36" rx="7" fill="#B45309"/><text x="75" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFF7ED">By cold</text><rect x="145" y="80" width="120" height="36" rx="7" fill="#B45309"/><text x="205" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFF7ED">By heat</text><rect x="275" y="80" width="120" height="36" rx="7" fill="#B45309"/><text x="335" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFF7ED">By drying</text><rect x="405" y="80" width="120" height="36" rx="7" fill="#B45309"/><text x="465" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFF7ED">Chemicals</text><line x1="270" y1="46" x2="75" y2="78" stroke="#7C2D12" stroke-width="1.5"/><line x1="270" y1="46" x2="205" y2="78" stroke="#7C2D12" stroke-width="1.5"/><line x1="270" y1="46" x2="335" y2="78" stroke="#7C2D12" stroke-width="1.5"/><line x1="270" y1="46" x2="465" y2="78" stroke="#7C2D12" stroke-width="1.5"/><text x="75" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Refrigeration,</text><text x="75" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">freezing</text><text x="205" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Boiling, canning,</text><text x="205" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">pasteurisation</text><text x="335" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Sun-drying,</text><text x="335" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">dehydration</text><text x="465" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Salt, sugar,</text><text x="465" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">smoking, acids</text></svg>'
      } },
      { h: "Methods of food preservation", list: [
        "Low temperature — refrigeration (slows germ growth) and freezing (stops it); keeps food fresh for days to months.",
        "High temperature — boiling, cooking, pasteurisation (mild heat, as for milk) and canning (heat and seal) destroy germs.",
        "Drying / dehydration — removing water (sun-drying fish, grains, pulses) so germs cannot grow.",
        "Salting, sugaring and pickling — high salt, sugar or acid (vinegar) stops germ growth (pickles, jam, salted fish).",
        "Smoking and the use of permitted chemical preservatives.",
        "Modern methods such as freeze-drying and irradiation."
      ] },
      { h: "Food adulteration and fortification", list: [
        "Food adulteration — adding an inferior or harmful substance to food, or removing a valuable one, to cheat the buyer (for example mixing water in milk, brick powder in chilli, or harmful colours and chemicals). Adulteration lowers food value and can be dangerous; laws and food inspection aim to prevent it.",
        "Food fortification — deliberately adding a nutrient to a food to improve its nutritional value and prevent deficiency in the population (for example iodised salt, vitamin A-fortified edible oil, and fortified flour). Fortification is an important public-health measure."
      ] },
      { h: "The nurse's role in food safety", p: "The nurse teaches families the golden rules of safe food handling, hand-washing, use of safe water and proper storage, especially for feeding infants and the sick. The nurse promotes the use of fortified foods such as iodised salt, helps people recognise and avoid adulterated food, and reports outbreaks of food-borne illness. In hospital, the nurse helps ensure that patients' food is prepared and served hygienically." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "What is food hygiene? List the golden rules of safe food handling.",
      "Differentiate between food spoilage and food-borne illness.",
      "Describe the common methods of food preservation with examples.",
      "Differentiate between food adulteration and food fortification with examples.",
      "Describe the role of the nurse in promoting food safety."
    ],
    assessment: [
      { type: "mcq", q: "Food hygiene means:", options: ["Practices that keep food safe and wholesome", "Making food tasty", "Cooking food quickly", "Adding more spices"], answer: 0, rationale: "Food hygiene covers all practices that keep food safe and fit to eat, from production to consumption." },
      { type: "mcq", q: "Illness caused by eating food contaminated with harmful germs or toxins is called:", options: ["Food preservation", "Food fortification", "Food-borne illness (food poisoning)", "Malnutrition"], answer: 2, rationale: "Food-borne illness results from eating food contaminated with germs, their toxins or chemicals." },
      { type: "mcq", q: "Raw meat juices dripping onto cooked food is an example of:", options: ["Cross-contamination", "Fortification", "Pasteurisation", "Preservation"], answer: 0, rationale: "Cross-contamination is the transfer of germs from raw to cooked food." },
      { type: "mcq", q: "Which is a golden rule of safe food handling?", options: ["Leave cooked food at room temperature for hours", "Keep raw and cooked food together", "Cook food thoroughly", "Skip hand-washing"], answer: 2, rationale: "Thorough cooking destroys harmful germs; the other options increase the risk of illness." },
      { type: "mcq", q: "Preserving food by removing its water content is called:", options: ["Freezing", "Canning", "Pickling", "Drying (dehydration)"], answer: 3, rationale: "Drying removes water so micro-organisms cannot grow (for example sun-dried fish)." },
      { type: "mcq", q: "Mild heating of milk to destroy germs without spoiling it is called:", options: ["Pasteurisation", "Freezing", "Salting", "Smoking"], answer: 0, rationale: "Pasteurisation uses controlled mild heat to kill pathogens in milk while keeping its quality." },
      { type: "mcq", q: "Jam and pickles are preserved mainly by the use of high:", options: ["Water content", "Sugar, salt or acid", "Temperature only", "Air"], answer: 1, rationale: "High sugar (jam), salt or acid/vinegar (pickle) prevents the growth of micro-organisms." },
      { type: "mcq", q: "Adding water to milk to cheat the buyer is an example of:", options: ["Food adulteration", "Food fortification", "Food preservation", "Pasteurisation"], answer: 0, rationale: "Adulteration is adding an inferior or harmful substance (or removing a valuable one) to deceive the buyer." },
      { type: "mcq", q: "Adding iodine to salt or vitamin A to cooking oil to prevent deficiency is called:", options: ["Adulteration", "Spoilage", "Fortification", "Contamination"], answer: 2, rationale: "Fortification deliberately adds a nutrient to a food to improve its nutritional value for the population." },
      { type: "mcq", q: "Which method stops (rather than only slows) the growth of micro-organisms in food?", options: ["Refrigeration", "Freezing", "Keeping at room temperature", "Leaving uncovered"], answer: 1, rationale: "Freezing halts microbial growth; refrigeration only slows it." }
      , { type: "fill", q: "The deliberate addition of a nutrient to a food to prevent deficiency, such as iodine in salt, is called food ____.", accept: ["fortification"], rationale: "Food fortification adds nutrients to common foods to improve population nutrition." }
      , { type: "fill", q: "Adding an inferior or harmful substance to food to cheat the buyer is called food ____.", accept: ["adulteration"], rationale: "Adulteration lowers food quality and may be harmful; it is controlled by food laws." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "nut-16-national-programmes",
    unit: "Unit 2 · Applied Nutrition & Dietetics",
    title: "National Nutrition Programmes & Policy in Bangladesh",
    readMinutes: 15,
    summary: "The nutrition situation and major nutrition problems in Bangladesh, national nutrition policy and programmes, supplementation and food-based strategies, and the nurse's role in national nutrition.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The nutrition situation in Bangladesh", p: "Bangladesh has made real progress in reducing undernutrition, but important problems remain. Child undernutrition (stunting, wasting and underweight), low birth weight, maternal undernutrition and anaemia, and micronutrient deficiencies (iron, vitamin A, iodine, zinc) are still common, while overweight and diet-related diseases are now rising. Good nutrition is recognised as essential for health, education and national development." },
      { h: "Major nutrition problems", list: [
        "Protein-energy malnutrition in young children (stunting and wasting).",
        "Maternal undernutrition and low-birth-weight babies.",
        "Iron-deficiency anaemia in women and children.",
        "Vitamin A deficiency in children.",
        "Iodine deficiency disorders.",
        "Rising overweight, obesity and diet-related non-communicable diseases."
      ] },
      { h: "National nutrition policy", p: "Bangladesh has a National Nutrition Policy that sets the direction for improving the nutrition of the whole population, with priority to mothers, infants and young children. Nutrition services have been brought into the regular health system (mainstreamed) so that nutrition care is given through ordinary health and family-welfare services rather than as a separate vertical programme. The policy promotes a 'whole of government' approach, because nutrition depends on food, agriculture, water, sanitation, education and women's status as well as health." },
      { h: "Key national nutrition programmes and strategies", list: [
        "Promotion of breastfeeding and infant and young-child feeding (IYCF) — supporting exclusive breastfeeding for six months and correct complementary feeding.",
        "Vitamin A supplementation — high-dose vitamin A capsules for children, given through National Vitamin A Plus campaigns.",
        "Control of anaemia — iron–folic acid supplements for pregnant women and adolescents, and deworming.",
        "Universal salt iodisation — to control iodine deficiency disorders.",
        "Management of acute malnutrition — community and facility-based care of MAM and SAM.",
        "Growth monitoring and promotion of young children.",
        "Food fortification — iodised salt, fortified edible oil and fortified flour.",
        "Nutrition education and behaviour-change communication in the community."
      ] },
      { h: "Supplementation, fortification and food-based approaches", p: "Three complementary strategies are used to fight micronutrient deficiency.", list: [
        "Supplementation — giving the nutrient directly (vitamin A capsules, iron–folic acid tablets, zinc with ORS); quick-acting and good for high-risk groups.",
        "Fortification — adding nutrients to commonly eaten foods (iodised salt, fortified oil and flour); reaches the whole population steadily.",
        "Food-based / dietary approaches — promoting a varied diet, home gardening, poultry and fish, and dietary diversification; the most sustainable long-term solution."
      ] },
      { h: "Roles of agencies and links to public health", p: "Nutrition programmes are run mainly by the Government (through the health and family-welfare system and other ministries), supported by United Nations agencies and non-governmental organisations. Nutrition is closely linked to other public-health programmes — immunisation (EPI), control of diarrhoeal disease (ORS), safe water and sanitation, maternal and child health, and family planning — because these together determine a child's nutrition and survival." },
      { h: "The nurse's role in national nutrition", p: "Nurses are front-line workers in delivering national nutrition programmes. They promote and support breastfeeding and correct weaning, give vitamin A, iron–folic acid and zinc, monitor children's growth, screen and refer the malnourished, promote iodised and fortified foods, give nutrition education and behaviour-change counselling to families, and collect simple data for monitoring. Through these everyday actions nurses help translate national nutrition policy into improved health for mothers and children." }
    ],
    references: REF_NUTR,
    examQuestions: [
      "Describe the major nutrition problems in Bangladesh.",
      "What is meant by mainstreaming nutrition into the health system?",
      "List and briefly explain the key national nutrition programmes of Bangladesh.",
      "Differentiate between supplementation, fortification and food-based approaches to micronutrient deficiency.",
      "Describe the role of the nurse in implementing national nutrition programmes."
    ],
    assessment: [
      { type: "mcq", q: "Which is still a major nutrition problem in Bangladesh?", options: ["Vitamin overdose", "Excess iodine only", "Child stunting and maternal anaemia", "No nutrition problem"], answer: 2, rationale: "Child stunting, maternal undernutrition and anaemia remain major problems, alongside rising overweight." },
      { type: "mcq", q: "Low height-for-age in children, reflecting long-term undernutrition, is called:", options: ["Stunting", "Wasting", "Obesity", "Oedema"], answer: 0, rationale: "Stunting (low height-for-age) indicates chronic undernutrition." },
      { type: "mcq", q: "'Mainstreaming' nutrition means:", options: ["Delivering nutrition care through the regular health system", "Running nutrition as a separate vertical programme", "Stopping nutrition services", "Treating only adults"], answer: 0, rationale: "Mainstreaming integrates nutrition services into ordinary health and family-welfare care." },
      { type: "mcq", q: "National Vitamin A Plus campaigns in Bangladesh mainly give vitamin A to:", options: ["Children", "Elderly men", "Soldiers", "Office workers"], answer: 0, rationale: "High-dose vitamin A capsules are given to children to prevent deficiency and blindness." },
      { type: "mcq", q: "Universal salt iodisation is the national strategy to control:", options: ["Anaemia", "Night blindness", "Iodine deficiency disorders", "Diabetes"], answer: 2, rationale: "Iodising all salt prevents goitre and other iodine deficiency disorders." },
      { type: "mcq", q: "Iron–folic acid supplements are routinely targeted at:", options: ["Pregnant women and adolescents", "Newborn boys only", "Elderly men only", "Athletes only"], answer: 0, rationale: "Pregnant women and adolescents are at high risk of anaemia and are key targets for iron–folic acid." },
      { type: "mcq", q: "Adding nutrients to commonly eaten foods to reach the whole population is the strategy of:", options: ["Supplementation", "Deworming", "Fortification", "Growth monitoring"], answer: 2, rationale: "Fortification (for example iodised salt, fortified oil) reaches the population steadily through everyday foods." },
      { type: "mcq", q: "The MOST sustainable long-term approach to micronutrient deficiency is:", options: ["Supplement tablets forever", "Food-based dietary diversification", "Ignoring the problem", "Importing all food"], answer: 1, rationale: "A varied diet and home food production (dietary diversification) is the most sustainable long-term solution." },
      { type: "mcq", q: "Which programme is closely linked with nutrition for child survival?", options: ["Immunisation (EPI)", "Road building", "Banking", "Postal service"], answer: 0, rationale: "Immunisation, safe water, sanitation and diarrhoea control work together with nutrition to improve child survival." },
      { type: "mcq", q: "A key everyday role of the nurse in national nutrition programmes is to:", options: ["Promote breastfeeding and give supplements", "Sell food", "Build roads", "Avoid contact with mothers"], answer: 0, rationale: "Nurses promote breastfeeding, give supplements, monitor growth and provide nutrition education." }
      , { type: "fill", q: "Bringing nutrition services into the regular health system rather than running them separately is called ____ nutrition.", accept: ["mainstreaming"], rationale: "Mainstreaming integrates nutrition into routine health and family-welfare services." }
      , { type: "fill", q: "Giving a nutrient directly as a tablet or capsule, such as vitamin A capsules, is called ____.", accept: ["supplementation"], rationale: "Supplementation provides the nutrient directly and is useful for high-risk groups." }
    ]
  }
];
