/* ============================================================
   Diploma in Nursing · D222 Pharmacology
   — 15 topics. Aligned to the BNMC 2018 syllabus (principles of
   drug action — pharmaceutics, pharmacokinetics, pharmacodynamics;
   forms & routes; dosage calculation; medication safety; then drugs
   acting on the major body systems). Grounded in standard texts:
     • Karch AM. Focus on Nursing Pharmacology. Lippincott Williams & Wilkins.
     • Kee JL, Hayes ER, McCuistion LE. Pharmacology: A Patient-Centered
       Nursing Process Approach. Elsevier.
     • Lehne RA. Pharmacology for Nursing Care. Elsevier Saunders.
   Doses are standard, widely-published values or usual ranges; the
   emphasis throughout is on checking and the nursing process.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_PHARM = [
  "Karch AM. Focus on Nursing Pharmacology. Lippincott Williams & Wilkins.",
  "Kee JL, Hayes ER, McCuistion LE. Pharmacology: A Patient-Centered Nursing Process Approach. Elsevier.",
  "Lehne RA. Pharmacology for Nursing Care. Elsevier Saunders."
];

window.Academic.topics["diploma-nursing/pharmacology"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "ph-01-intro",
    unit: "Unit 1 · Principles of Pharmacology",
    title: "Introduction & Basic Concepts (Pharmacokinetics & Pharmacodynamics)",
    readMinutes: 16,
    summary: "What pharmacology is, key terms, the three phases of drug action (pharmaceutic, pharmacokinetic, pharmacodynamic), and how absorption, distribution, metabolism and excretion shape a drug's effect.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is pharmacology?", p: "Pharmacology is the study of drugs — how they are introduced into the body, what they do to the body, and what the body does to them. For nurses the goal is practical: to give drugs safely, to know the expected effects and the unwanted ones, and to teach and monitor the patient. A drug (medication) is any chemical substance that produces a biological effect when given to a living organism." },
      { h: "Key terms", list: [
        "Pharmacology — the overall science of drugs and their effects.",
        "Pharmacokinetics — what the body does to the drug (absorption, distribution, metabolism, excretion).",
        "Pharmacodynamics — what the drug does to the body (its mechanism of action and effects).",
        "Therapeutic effect — the desired, intended effect of the drug.",
        "Side effect / adverse effect — an unwanted effect; an adverse drug reaction (ADR) is a harmful, unintended response.",
        "Indication — a reason or condition for which a drug is given; contraindication — a reason it must not be given.",
        "Generic name vs brand (trade) name — paracetamol (generic) is sold as many brand names."
      ] },
      { h: "The three phases of drug action", p: "A drug given by mouth passes through three phases. In the pharmaceutic phase a solid tablet disintegrates and dissolves so the drug can be absorbed. In the pharmacokinetic phase the drug is absorbed, distributed, metabolised and excreted. In the pharmacodynamic phase the drug reaches its site of action and produces its effect.", figure: {
        caption: "The three phases of drug action for an oral drug: pharmaceutic (dissolution) → pharmacokinetic (ADME) → pharmacodynamic (effect).",
        svg: '<svg viewBox="0 0 580 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three phases of drug action: pharmaceutic, pharmacokinetic, pharmacodynamic."><defs><marker id="phArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="14" y="55" width="160" height="62" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="94" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">PHARMACEUTIC</text><text x="94" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">tablet dissolves</text><rect x="210" y="55" width="160" height="62" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="290" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">PHARMACOKINETIC</text><text x="290" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">A · D · M · E</text><rect x="406" y="55" width="160" height="62" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="486" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">PHARMACODYNAMIC</text><text x="486" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">drug acts → effect</text><line x1="174" y1="86" x2="206" y2="86" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#phArr1)"/><line x1="370" y1="86" x2="402" y2="86" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#phArr1)"/></svg>'
      } },
      { h: "Pharmacokinetics — ADME", p: "Pharmacokinetics has four processes, remembered as ADME:", list: [
        "Absorption — movement of the drug from the site of administration into the blood. Affected by route, drug form, blood flow and (for oral drugs) the gut.",
        "Distribution — the drug is carried by the blood to body tissues. Affected by blood flow, protein binding and the drug's ability to cross membranes.",
        "Metabolism (biotransformation) — the drug is chemically changed, mainly in the liver, usually into a less active, more water-soluble form.",
        "Excretion (elimination) — the drug and its by-products leave the body, mainly through the kidneys in urine (also bile, lungs, sweat, breast milk)."
      ] },
      { h: "First-pass effect and bioavailability", p: "After an oral drug is absorbed from the gut, blood carries it first to the liver, where part of the dose may be broken down before it reaches the general circulation. This first-pass effect reduces the amount of active drug available. Bioavailability is the fraction of the given dose that actually reaches the bloodstream in active form; intravenous drugs have 100% bioavailability because they bypass absorption and the first pass." },
      { h: "Half-life, onset, peak and duration", list: [
        "Half-life (t½) — the time taken for the blood level of a drug to fall by half. It guides how often a drug is given.",
        "Onset — the time from giving the drug until the effect begins.",
        "Peak — the time at which the drug reaches its highest blood concentration and greatest effect.",
        "Duration — how long the effect lasts.",
        "Therapeutic range — the blood level between the minimum effective concentration and the toxic level; the drug works safely within this range."
      ] },
      { h: "Pharmacodynamics — how drugs act", p: "Most drugs work by binding to a receptor on or in a cell, like a key in a lock. An agonist binds and activates the receptor to produce an effect; an antagonist (blocker) binds but does not activate it, and prevents the natural substance or another drug from acting. Some drugs work by other means, such as changing enzyme activity or chemical/physical action (for example, antacids neutralise stomach acid)." },
      { h: "Factors that change a drug's effect", list: [
        "Age — children and older adults often need adjusted doses; infants and the elderly metabolise and excrete drugs more slowly.",
        "Body weight — larger people may need a larger dose; many paediatric doses are per kilogram.",
        "Liver and kidney function — disease slows metabolism and excretion, raising the risk of toxicity.",
        "Route and time of administration — affect speed and degree of absorption.",
        "Other drugs, food and disease — can cause interactions that increase or decrease the effect.",
        "Genetic and individual variation, and tolerance with repeated use."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "Define pharmacology, pharmacokinetics and pharmacodynamics.",
      "Describe the four processes of pharmacokinetics (ADME).",
      "Explain the first-pass effect and its importance for oral drugs.",
      "What is half-life? How does it influence the frequency of dosing?",
      "List six factors that can alter the effect of a drug in a patient."
    ],
    assessment: [
      { type: "mcq", q: "Pharmacokinetics is best described as:", options: ["What the drug does to the body", "What the body does to the drug", "The study of drug prices", "The study of drug receptors only"], answer: 1, rationale: "Pharmacokinetics covers absorption, distribution, metabolism and excretion — what the body does to the drug." },
      { type: "mcq", q: "The four processes of pharmacokinetics (ADME) are:", options: ["Action, dose, mechanism, effect", "Absorption, distribution, metabolism, excretion", "Agonist, drug, marker, enzyme", "Acid, base, mixture, elimination"], answer: 1, rationale: "ADME stands for Absorption, Distribution, Metabolism and Excretion." },
      { type: "mcq", q: "Most drug metabolism (biotransformation) takes place in the:", options: ["Kidney", "Lung", "Liver", "Stomach"], answer: 2, rationale: "The liver is the main organ of drug metabolism." },
      { type: "mcq", q: "Most drugs are excreted mainly by the:", options: ["Kidneys", "Skin", "Liver", "Salivary glands"], answer: 0, rationale: "The kidneys are the principal route of drug excretion, removing drugs in the urine." },
      { type: "mcq", q: "The 'first-pass effect' refers to:", options: ["The first dose ever given to a patient", "Breakdown of an oral drug by the liver before it reaches the general circulation", "The first sign of an allergic reaction", "The peak blood level of a drug"], answer: 1, rationale: "After gut absorption, oral drugs pass through the liver first, where part of the dose may be metabolised, lowering bioavailability." },
      { type: "mcq", q: "A drug that binds to a receptor and activates it to produce an effect is called a(n):", options: ["Antagonist", "Agonist", "Placebo", "Catalyst"], answer: 1, rationale: "An agonist binds and activates the receptor; an antagonist blocks it." },
      { type: "mcq", q: "Half-life (t½) of a drug is the time required for:", options: ["The drug to be fully absorbed", "The blood level of the drug to fall by half", "The drug to reach its peak", "Half the tablet to dissolve"], answer: 1, rationale: "Half-life is the time for the plasma concentration to decrease by 50%, guiding dosing frequency." },
      { type: "mcq", q: "Which route gives 100% bioavailability because it bypasses absorption?", options: ["Oral", "Intravenous", "Subcutaneous", "Rectal"], answer: 1, rationale: "An IV drug is placed directly into the blood, so the entire dose is available (100% bioavailability)." },
      { type: "mcq", q: "The blood concentration range in which a drug is effective but not toxic is the:", options: ["Lethal dose", "Therapeutic range", "Loading dose", "First-pass window"], answer: 1, rationale: "The therapeutic range lies between the minimum effective and the toxic concentration." },
      { type: "mcq", q: "Which factor would MOST likely increase the risk of drug toxicity?", options: ["Normal kidney function", "Severe liver and kidney disease", "Young, healthy adult age", "Adequate hydration"], answer: 1, rationale: "Impaired liver metabolism and kidney excretion allow drugs to accumulate, increasing toxicity risk." }
      , { type: "fill", q: "The phase of drug action in which the drug produces its effect on the body is the ____ phase.", accept: ["pharmacodynamic", "pharmacodynamics"], rationale: "Pharmacodynamics is what the drug does to the body — its mechanism and effect." }
      , { type: "fill", q: "The fraction of an administered dose that reaches the systemic circulation in active form is called ____.", accept: ["bioavailability"], rationale: "Bioavailability describes how much active drug actually reaches the blood." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ph-02-routes-forms",
    unit: "Unit 1 · Principles of Pharmacology",
    title: "Routes of Drug Administration & Drug Forms",
    readMinutes: 16,
    summary: "The main forms (preparations) of drugs, the enteral, parenteral and topical routes, the parenteral injection types and their angles, and the advantages and disadvantages of each route.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why route and form matter", p: "The form (preparation) of a drug and the route by which it is given decide how fast and how completely it is absorbed, and therefore how quickly it acts. Choosing the right route depends on the drug, the desired speed of action, the patient's condition and the patient's ability to take it." },
      { h: "Common drug forms", list: [
        "Solid oral forms — tablets, capsules, enteric-coated and sustained/extended-release tablets, lozenges, powders.",
        "Liquid oral forms — syrups, suspensions, elixirs, solutions, drops.",
        "Semi-solid forms — ointments, creams, gels, pastes, suppositories.",
        "Injectable (parenteral) forms — solutions and suspensions in ampoules and vials.",
        "Other forms — inhalers and nebuliser solutions, transdermal patches, eye/ear/nasal drops, sprays, and pessaries."
      ] },
      { h: "Three broad routes", p: "Routes are grouped as enteral (via the gastrointestinal tract — oral, sublingual, rectal), parenteral (by injection, bypassing the gut) and topical/local (applied to skin or mucous membranes, including inhalation and patches). Enteral routes are usually the safest and easiest; parenteral routes act fast but carry more risk." },
      { h: "Enteral routes", list: [
        "Oral (PO) — by mouth and swallowed; convenient, safe and cheap, but slow and unsuitable if the patient is vomiting, unconscious or nil by mouth.",
        "Sublingual (SL) — placed under the tongue to dissolve; absorbed quickly into the blood and avoids the first-pass effect (for example, glyceryl trinitrate for angina).",
        "Buccal — held between the cheek and gum.",
        "Rectal (PR) — suppository or enema; useful when the patient is vomiting or unconscious, or for a local effect."
      ] },
      { h: "Parenteral (injection) routes", p: "Parenteral means given by injection, bypassing the gut. The main types differ in the tissue used, the angle and the volume:", list: [
        "Intradermal (ID) — into the dermis, just under the skin surface, at about 10–15°; tiny volumes; used for skin tests (for example, the Mantoux test).",
        "Subcutaneous (SC) — into the fatty tissue under the skin at about 45° (or 90° with a short needle); slow, steady absorption (for example, insulin, heparin).",
        "Intramuscular (IM) — into a muscle at 90°; faster absorption and larger volumes than SC (for example, many vaccines).",
        "Intravenous (IV) — directly into a vein; immediate action and complete (100%) bioavailability; used in emergencies, but errors and reactions act at once."
      ] },
      { h: "Injection angles", p: "The needle angle differs by route, which helps the drug reach the correct tissue.", figure: {
        caption: "Approximate needle angles: intradermal (10–15°), subcutaneous (45°), intramuscular (90°).",
        svg: '<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Injection angles for intradermal, subcutaneous and intramuscular routes."><rect x="20" y="120" width="440" height="14" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="240" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">skin surface</text><line x1="70" y1="120" x2="150" y2="105" stroke="#7C2D12" stroke-width="3"/><text x="95" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">ID 10–15°</text><line x1="240" y1="120" x2="300" y2="70" stroke="#B45309" stroke-width="3"/><text x="270" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">SC 45°</text><line x1="410" y1="120" x2="410" y2="55" stroke="#7C2D12" stroke-width="3"/><text x="410" y="46" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">IM 90°</text></svg>'
      } },
      { h: "Topical and other local routes", list: [
        "Skin (cutaneous) — creams and ointments for a local effect.",
        "Transdermal patch — drug absorbed slowly through the skin for a steady systemic effect.",
        "Inhalation — drug breathed into the lungs (inhalers, nebulisers); rapid action on the airways.",
        "Eye, ear and nasal drops/sprays — for local effects on those areas.",
        "Vaginal (pessary) and rectal routes for local or systemic effects."
      ] },
      { h: "Advantages and disadvantages — a summary", p: "Oral is simple, safe and economical but slow and dependent on a working gut. Sublingual is fast and avoids the first pass but suits only a few drugs. Injections act quickly and work when the oral route cannot be used, but they need a trained person, are painful, cost more and carry risks of infection and rapid reactions. The nurse selects and checks the route as part of safe administration." }
    ],
    references: REF_PHARM,
    examQuestions: [
      "List and give examples of the main forms (preparations) of drugs.",
      "Differentiate between enteral, parenteral and topical routes with examples.",
      "Name the four main parenteral routes and the angle used for each.",
      "State the advantages and disadvantages of the oral route.",
      "Why is the sublingual route used for glyceryl trinitrate in angina?"
    ],
    assessment: [
      { type: "mcq", q: "'Parenteral' administration means the drug is given:", options: ["By mouth", "By injection, bypassing the gut", "Through the rectum", "On the skin"], answer: 1, rationale: "Parenteral routes deliver drugs by injection, bypassing the gastrointestinal tract." },
      { type: "mcq", q: "Insulin and heparin are usually given by which route?", options: ["Intradermal", "Subcutaneous", "Intramuscular", "Intravenous"], answer: 1, rationale: "Insulin and heparin are given subcutaneously for slow, steady absorption." },
      { type: "mcq", q: "An intramuscular injection is given at an angle of:", options: ["10–15°", "30°", "45°", "90°"], answer: 3, rationale: "IM injections are given at 90° to reach the muscle." },
      { type: "mcq", q: "The intradermal route is used mainly for:", options: ["Large fluid volumes", "Skin tests such as the Mantoux test", "Emergency drugs", "Oily depot injections"], answer: 1, rationale: "Intradermal injection places a tiny volume in the dermis, ideal for skin (sensitivity/TB) testing." },
      { type: "mcq", q: "Which route gives the fastest, immediate drug action?", options: ["Oral", "Subcutaneous", "Intravenous", "Transdermal"], answer: 2, rationale: "IV delivers the drug straight into the blood, producing immediate action." },
      { type: "mcq", q: "Glyceryl trinitrate is given sublingually for angina mainly because this route:", options: ["Is the cheapest", "Gives a slow, prolonged effect", "Is absorbed quickly and avoids the first-pass effect", "Can be self-given only by nurses"], answer: 2, rationale: "Sublingual absorption is rapid and bypasses hepatic first-pass metabolism, giving fast relief." },
      { type: "mcq", q: "An enteric-coated tablet is designed to:", options: ["Dissolve in the mouth", "Resist stomach acid and dissolve in the intestine", "Be crushed before use", "Be given intravenously"], answer: 1, rationale: "The enteric coating protects the drug from gastric acid (and the stomach from the drug); it dissolves in the intestine, so it must not be crushed." },
      { type: "mcq", q: "Which is an ENTERAL route?", options: ["Intramuscular", "Sublingual", "Subcutaneous", "Intravenous"], answer: 1, rationale: "Enteral routes use the GI tract; sublingual (under the tongue) is enteral, while the others are parenteral." },
      { type: "mcq", q: "A subcutaneous injection is usually given at an angle of about:", options: ["10°", "45°", "60°", "90° only"], answer: 1, rationale: "SC injections are commonly given at 45° (or 90° with a short needle) into subcutaneous fat." },
      { type: "mcq", q: "A disadvantage of the oral route is that it:", options: ["Is unsafe in conscious patients", "Cannot be used if the patient is vomiting or unconscious", "Always causes infection", "Has 100% bioavailability"], answer: 1, rationale: "The oral route is unsuitable when the patient cannot swallow, is vomiting, or is nil by mouth." }
      , { type: "fill", q: "A drug placed under the tongue to dissolve is given by the ____ route.", accept: ["sublingual"], rationale: "The sublingual route allows rapid absorption from under the tongue." }
      , { type: "fill", q: "The route that delivers a drug directly into a vein is the ____ route.", accept: ["intravenous", "iv"], rationale: "The intravenous route places the drug straight into the bloodstream." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ph-03-dosage-calculation",
    unit: "Unit 1 · Principles of Pharmacology",
    title: "Drug Dosage Calculation",
    readMinutes: 17,
    summary: "Units and conversions used in medicine, the basic dose formula, calculating tablets and liquid doses, IV drip rates, weight-based and paediatric doses, and safe-calculation practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why accurate calculation matters", p: "A wrong calculation can give too little drug (no effect) or too much (toxicity or death). Dosage calculation is a core nursing skill. Always work carefully, write the units, and have a second nurse check high-risk drugs (for example, insulin, heparin, and paediatric doses)." },
      { h: "Units of measurement", list: [
        "Weight — kilogram (kg), gram (g), milligram (mg), microgram (mcg or µg).",
        "Volume — litre (L), millilitre (mL).",
        "Other — unit (U) for drugs such as insulin and heparin; milliequivalent (mEq) for electrolytes.",
        "Always write 'microgram' or 'mcg' in full where possible; the abbreviation can be misread as 'mg'."
      ] },
      { h: "Common conversions", list: [
        "1 kilogram (kg) = 1000 grams (g)",
        "1 gram (g) = 1000 milligrams (mg)",
        "1 milligram (mg) = 1000 micrograms (mcg)",
        "1 litre (L) = 1000 millilitres (mL)",
        "To change a larger unit to a smaller one, multiply by 1000; to change smaller to larger, divide by 1000."
      ] },
      { h: "The basic dose formula", p: "The most useful formula for tablets and liquids is: Dose required (what you want) divided by Dose available (what you have on hand), multiplied by the Quantity (volume or number per stock unit).", figure: {
        caption: "The basic dose formula: (dose wanted ÷ dose available) × the stock quantity.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dose formula: wanted over available times stock quantity."><rect x="20" y="30" width="480" height="90" rx="12" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="150" y="70" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#7C2D12">Dose =</text><line x1="210" y1="62" x2="350" y2="62" stroke="#7C2D12" stroke-width="2"/><text x="280" y="56" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">dose wanted</text><text x="280" y="82" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#B45309">dose available</text><text x="430" y="70" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#7C2D12">× quantity</text><text x="260" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">(what you want ÷ what you have, × stock volume or number)</text></svg>'
      } },
      { h: "Worked examples — tablets and liquids", list: [
        "Tablets: ordered 500 mg, stock 250 mg tablets → 500 ÷ 250 × 1 = 2 tablets.",
        "Liquid: ordered 250 mg, stock 125 mg in 5 mL → 250 ÷ 125 × 5 mL = 10 mL.",
        "Always check that the wanted and available doses are in the SAME units before dividing (convert first if needed)."
      ] },
      { h: "IV drip rate (drops per minute)", p: "When fluid runs by gravity, the rate in drops per minute is found from the volume, the time and the giving-set drop factor: drops/min = (volume in mL × drop factor in drops/mL) ÷ time in minutes. A standard (macrodrip) set is usually 15 or 20 drops/mL; a microdrip set is 60 drops/mL. For example, 1000 mL over 8 hours with a 20 drops/mL set = (1000 × 20) ÷ 480 ≈ 42 drops/min." },
      { h: "Weight-based and paediatric doses", p: "Many doses, especially in children, are ordered per kilogram of body weight (mg/kg). Multiply the dose per kg by the patient's weight to get the total dose. For example, a drug at 10 mg/kg for a 20 kg child = 10 × 20 = 200 mg. Always check the safe dose range in a reference and never exceed the stated maximum." },
      { h: "Safe-calculation rules", list: [
        "Read the order carefully and convert all values to the same unit first.",
        "Estimate the answer first — if you expect about 1–2 tablets, an answer of 10 is a warning sign.",
        "Write the units at every step and label the final answer.",
        "Double-check high-risk drugs and paediatric doses with another nurse.",
        "Use the rights of medication administration and question any order that seems wrong."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "State the basic dose formula and use it to calculate tablets and a liquid dose.",
      "Convert: 0.5 g to mg; 250 mcg to mg; 2 L to mL.",
      "Write the formula for IV drip rate in drops per minute and explain each term.",
      "Calculate the dose for a 25 kg child when the order is 8 mg/kg.",
      "List five rules for safe drug calculation in nursing."
    ],
    assessment: [
      { type: "mcq", q: "1 gram (g) is equal to:", options: ["10 mg", "100 mg", "1000 mg", "1,000,000 mg"], answer: 2, rationale: "1 g = 1000 mg." },
      { type: "mcq", q: "Order: 500 mg. Stock: 250 mg tablets. How many tablets are given?", options: ["1 tablet", "2 tablets", "3 tablets", "Half a tablet"], answer: 1, rationale: "500 ÷ 250 × 1 = 2 tablets." },
      { type: "mcq", q: "Order: 250 mg. Stock: 125 mg in 5 mL. What volume is given?", options: ["2.5 mL", "5 mL", "10 mL", "20 mL"], answer: 2, rationale: "250 ÷ 125 × 5 mL = 10 mL." },
      { type: "mcq", q: "1 milligram (mg) equals how many micrograms (mcg)?", options: ["10", "100", "1000", "0.001"], answer: 2, rationale: "1 mg = 1000 mcg." },
      { type: "mcq", q: "The formula for IV drops per minute is:", options: ["volume × time ÷ drop factor", "(volume × drop factor) ÷ time in minutes", "drop factor ÷ volume", "volume ÷ drop factor"], answer: 1, rationale: "Drops/min = (volume in mL × drop factor) ÷ time in minutes." },
      { type: "mcq", q: "A drug is ordered at 10 mg/kg for a 30 kg child. The total dose is:", options: ["100 mg", "200 mg", "300 mg", "30 mg"], answer: 2, rationale: "10 mg/kg × 30 kg = 300 mg." },
      { type: "mcq", q: "Before dividing 'wanted by available', you must first ensure that:", options: ["The patient is asleep", "Both doses are in the same unit of measurement", "The drug is intravenous", "The tablet is scored"], answer: 1, rationale: "The wanted and available amounts must be in identical units, or you must convert first." },
      { type: "mcq", q: "To convert grams to milligrams you should:", options: ["Divide by 1000", "Multiply by 1000", "Multiply by 100", "Divide by 100"], answer: 1, rationale: "A gram is larger than a milligram, so multiply by 1000 to get the smaller unit." },
      { type: "mcq", q: "A microdrip (paediatric) giving set usually delivers:", options: ["10 drops/mL", "15 drops/mL", "20 drops/mL", "60 drops/mL"], answer: 3, rationale: "Microdrip sets deliver 60 drops/mL, allowing precise low-rate infusion." },
      { type: "mcq", q: "Which drugs should always have the dose double-checked by a second nurse?", options: ["Only oral vitamins", "High-risk drugs such as insulin, heparin and paediatric doses", "Only topical creams", "Antacids"], answer: 1, rationale: "High-alert drugs (insulin, heparin) and paediatric doses require an independent double-check to prevent harm." }
      , { type: "fill", q: "1 litre (L) is equal to ____ millilitres.", accept: ["1000", "1,000"], rationale: "1 L = 1000 mL." }
      , { type: "fill", q: "In the basic dose formula, you divide the dose wanted by the dose ____ and multiply by the quantity.", accept: ["available", "on hand", "have"], rationale: "Dose = (wanted ÷ available) × quantity." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ph-04-medication-safety",
    unit: "Unit 1 · Principles of Pharmacology",
    title: "Nursing Responsibilities & Medication Safety (The Rights of Medication Administration)",
    readMinutes: 16,
    summary: "The rights of medication administration, the nurse's role across the nursing process, drug error prevention, controlled drugs, storage and documentation, and patient education.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The nurse's central role", p: "The nurse is usually the last person to check a drug before it reaches the patient, so the nurse is the patient's final safeguard against error. Safe administration means giving the right drug to the right patient, in the right way and at the right time, while watching for effects and teaching the patient. This duty runs through the whole nursing process — assessment, planning, implementation and evaluation." },
      { h: "The rights of medication administration", p: "Before giving any drug, confirm the classic rights. The core five are widely taught, with several more added over time.", list: [
        "Right patient — check identity using at least two identifiers (name and another, such as date of birth or hospital number).",
        "Right drug — check the drug name against the order; beware look-alike, sound-alike names.",
        "Right dose — check the amount and recalculate if needed.",
        "Right route — confirm the prescribed route.",
        "Right time — give within the correct time window.",
        "Right documentation — record immediately after giving, never before.",
        "Right reason (indication), right response (effect), right to refuse, and right patient education."
      ] },
      { h: "The three (or more) checks", p: "Read the drug label and compare it with the medication order at least three times: when taking the drug from storage, when preparing it, and at the bedside before giving it. Checking the label against the order each time catches most errors before they reach the patient." },
      { h: "Common causes of medication errors", list: [
        "Misreading or miscommunicating an order (illegible, verbal or unclear orders).",
        "Look-alike / sound-alike drug names and similar packaging.",
        "Calculation mistakes, especially with decimals and 'units'.",
        "Wrong patient because identity was not checked.",
        "Distraction and interruption during preparation.",
        "Failure to check allergies or to monitor after giving the drug."
      ] },
      { h: "Preventing errors", list: [
        "Use the rights and the three checks every single time, with no shortcuts.",
        "Question and clarify any order that is unclear or seems unsafe — do not guess.",
        "Avoid trailing zeros (write 5 mg, not 5.0 mg) and always use a leading zero (0.5 mg, not .5 mg).",
        "Prepare drugs in a quiet area and avoid interruptions.",
        "Check the patient's allergy band and known reactions before giving.",
        "If an error occurs, report it honestly, assess the patient, and follow the incident policy."
      ] },
      { h: "Controlled (narcotic) drugs", p: "Controlled drugs, such as strong opioids, are kept under extra control because of the risk of misuse. They are stored in a locked cupboard, counted regularly by two nurses, and every dose is recorded in a special register with the amount given, the amount remaining and the signatures of the nurses involved. Any wastage is witnessed and recorded." },
      { h: "Safe storage of drugs", list: [
        "Keep drugs in their labelled containers, away from light, heat and moisture as directed.",
        "Store some drugs in the refrigerator (for example, many insulins and vaccines) at the correct temperature.",
        "Keep internal and external preparations separate, and keep poisons and disinfectants apart from medicines.",
        "Check expiry dates and remove expired or deteriorated stock.",
        "Keep all drugs out of the reach of children and unauthorised people."
      ] },
      { h: "Documentation and patient education", p: "Record each dose immediately after giving it, including the drug, dose, route, time and your signature; chart any drug that is refused or withheld and the reason. Teach the patient the drug's name and purpose, how and when to take it, the common side effects, what to avoid, and the importance of completing a course (for example, antibiotics). Good records and good teaching are part of safe, legal practice." }
    ],
    references: REF_PHARM,
    examQuestions: [
      "List and explain the 'rights' of medication administration.",
      "Describe the nurse's responsibilities before, during and after giving a drug.",
      "What are the common causes of medication errors and how can they be prevented?",
      "Explain the special rules for storing and recording controlled (narcotic) drugs.",
      "What key points should a nurse teach a patient about a newly prescribed drug?"
    ],
    assessment: [
      { type: "mcq", q: "The classic core 'five rights' of medication administration are right patient, right drug, right dose, right route and right:", options: ["Colour", "Time", "Price", "Container"], answer: 1, rationale: "The five rights are patient, drug, dose, route and time." },
      { type: "mcq", q: "To confirm the 'right patient', the nurse should:", options: ["Use the bed number only", "Use at least two identifiers such as name and date of birth", "Ask another patient", "Rely on memory"], answer: 1, rationale: "At least two patient identifiers must be checked to confirm identity safely." },
      { type: "mcq", q: "When should the nurse document that a drug has been given?", options: ["Before giving it", "Immediately after giving it", "At the end of the shift only", "The next day"], answer: 1, rationale: "Record the dose immediately after administration, never before, to keep the record accurate." },
      { type: "mcq", q: "Which is the SAFEST way to write a dose to avoid error?", options: ["5.0 mg", ".5 mg", "0.5 mg", "5,0 mg"], answer: 2, rationale: "Use a leading zero (0.5 mg) and avoid trailing zeros (not 5.0 mg) to prevent ten-fold errors." },
      { type: "mcq", q: "Controlled (narcotic) drugs must be:", options: ["Left on the open trolley", "Kept in a locked cupboard and recorded in a register", "Given without an order in emergencies", "Counted once a month only"], answer: 1, rationale: "Controlled drugs are locked away, counted by two nurses and recorded in a register for each dose." },
      { type: "mcq", q: "A nurse receives an order that is unclear and possibly unsafe. The nurse should:", options: ["Give the usual dose anyway", "Guess the prescriber's intention", "Clarify the order with the prescriber before giving it", "Ask the patient what to do"], answer: 2, rationale: "Unclear or doubtful orders must be clarified with the prescriber; never guess." },
      { type: "mcq", q: "Reading the drug label against the order at least three times helps to ensure the right:", options: ["Price", "Drug and dose", "Colour of tablet", "Brand only"], answer: 1, rationale: "The three label checks confirm the correct drug, dose, route and patient before administration." },
      { type: "mcq", q: "Which drug commonly needs refrigerated storage?", options: ["Paracetamol tablets", "Many insulins and vaccines", "Antacid tablets", "Oral iron tablets"], answer: 1, rationale: "Many insulins and vaccines must be kept refrigerated at the correct temperature." },
      { type: "mcq", q: "A major cause of medication error during preparation is:", options: ["Working in a quiet area", "Distraction and interruption", "Checking the label", "Recalculating the dose"], answer: 1, rationale: "Interruptions and distraction during preparation are a leading cause of errors." },
      { type: "mcq", q: "If a nurse makes a medication error, the FIRST priority is to:", options: ["Hide the mistake", "Assess and protect the patient, then report it", "Blame the pharmacy", "Wait until the next shift"], answer: 1, rationale: "Patient safety comes first — assess the patient, then report and document the error per policy." }
      , { type: "fill", q: "Confirming you are giving the medication to the correct person is the right ____.", accept: ["patient"], rationale: "The 'right patient' is verified using two identifiers." }
      , { type: "fill", q: "A leading zero should always be written before a decimal point, for example ____ mg instead of .5 mg.", accept: ["0.5"], rationale: "Writing 0.5 mg prevents the dose being misread as 5 mg." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ph-05-autonomic",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Drugs Acting on the Autonomic Nervous System",
    readMinutes: 17,
    summary: "The sympathetic and parasympathetic divisions, their neurotransmitters and receptors, and the four main drug groups — cholinergics, anticholinergics, adrenergics and adrenergic blockers — with examples and nursing points.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The autonomic nervous system", p: "The autonomic nervous system (ANS) controls the body's involuntary functions — heart rate, blood pressure, breathing, digestion, glands and the size of the pupil. It has two divisions that mostly oppose each other: the sympathetic (the 'fight or flight' system) and the parasympathetic (the 'rest and digest' system). Many drugs act by copying or blocking these divisions." },
      { h: "Neurotransmitters and receptors", list: [
        "The sympathetic system mainly uses noradrenaline (norepinephrine) acting on adrenergic receptors — alpha (α) and beta (β).",
        "The parasympathetic system uses acetylcholine acting on cholinergic receptors — muscarinic and nicotinic.",
        "Beta-1 (β1) receptors act mainly on the heart (increase rate and force); beta-2 (β2) on the bronchi and blood vessels (relaxation).",
        "Knowing the receptor predicts the drug's effect."
      ] },
      { h: "Sympathetic ('fight or flight') effects", p: "When the sympathetic system is active it prepares the body for action: the heart beats faster and stronger, blood pressure rises, the airways (bronchi) widen, the pupils dilate, and digestion slows. Sympathomimetic drugs reproduce these effects." },
      { h: "Parasympathetic ('rest and digest') effects", p: "The parasympathetic system conserves energy: it slows the heart, narrows the airways, increases digestion and gut movement, constricts the pupil, and increases secretions such as saliva. Parasympathomimetic (cholinergic) drugs reproduce these effects.", figure: {
        caption: "Opposing actions of the two ANS divisions on the main organs.",
        svg: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sympathetic versus parasympathetic effects on heart, lungs, pupil and gut."><rect x="20" y="14" width="230" height="186" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><rect x="270" y="14" width="230" height="186" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="135" y="36" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">SYMPATHETIC</text><text x="135" y="52" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">fight or flight</text><text x="385" y="36" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">PARASYMPATHETIC</text><text x="385" y="52" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">rest and digest</text><text x="135" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Heart rate ↑</text><text x="135" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Bronchi widen</text><text x="135" y="132" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Pupils dilate</text><text x="135" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Digestion ↓</text><text x="385" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#B45309">Heart rate ↓</text><text x="385" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#B45309">Bronchi narrow</text><text x="385" y="132" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#B45309">Pupils constrict</text><text x="385" y="156" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#B45309">Digestion ↑</text></svg>'
      } },
      { h: "Cholinergic (parasympathomimetic) drugs", p: "Cholinergic drugs mimic acetylcholine and produce parasympathetic effects: they slow the heart, increase gut and bladder activity, constrict the pupil and increase secretions. Examples include pilocarpine (constricts the pupil in glaucoma) and neostigmine (used in myasthenia gravis and to reverse some muscle relaxants). Side effects follow the 'SLUDGE' pattern — salivation, lacrimation, urination, defecation, GI upset and emesis." },
      { h: "Anticholinergic (parasympathetic-blocking) drugs", p: "Anticholinergics block acetylcholine at muscarinic receptors, so they produce the opposite of cholinergic effects: a faster heart, a dry mouth, dilated pupils, reduced secretions and slowed gut and bladder. Atropine is the classic example — it speeds a slow heart (bradycardia) and dries secretions before surgery. Side effects are remembered as 'dry as a bone, red as a beet, blind as a bat, mad as a hatter' (dry mouth, flushing, blurred vision, confusion); urinary retention and constipation are common." },
      { h: "Adrenergic (sympathomimetic) drugs", p: "Adrenergic drugs stimulate adrenergic receptors and reproduce sympathetic effects. Adrenaline (epinephrine) acts on α and β receptors and is the key drug in anaphylaxis and cardiac arrest. Salbutamol is a β2 agonist that widens the bronchi in asthma. These drugs can raise heart rate and blood pressure, so the nurse monitors pulse, blood pressure and for tremor or palpitations." },
      { h: "Adrenergic-blocking drugs", list: [
        "Beta-blockers (for example, propranolol, atenolol, metoprolol) block β receptors, slowing the heart and lowering blood pressure; used in hypertension, angina and arrhythmias. Use caution in asthma (β2 block can narrow the airways) and do not stop suddenly.",
        "Alpha-blockers (for example, prazosin) relax blood vessels and lower blood pressure; they can cause a sudden drop in blood pressure on standing (postural hypotension).",
        "Nursing care: monitor pulse and blood pressure; teach the patient to rise slowly and not to stop the drug abruptly."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "Name the two divisions of the autonomic nervous system and their neurotransmitters.",
      "Compare the effects of the sympathetic and parasympathetic systems on the heart, bronchi, pupil and gut.",
      "Describe the actions, an example and the main side effects of anticholinergic drugs.",
      "What are beta-blockers used for, and what precautions should the nurse take?",
      "State the uses of adrenaline (epinephrine) and the nursing observations required."
    ],
    assessment: [
      { type: "mcq", q: "The neurotransmitter of the parasympathetic nervous system is:", options: ["Noradrenaline", "Acetylcholine", "Dopamine", "Serotonin"], answer: 1, rationale: "The parasympathetic system uses acetylcholine acting on cholinergic receptors." },
      { type: "mcq", q: "Stimulation of the sympathetic ('fight or flight') system causes the heart rate to:", options: ["Slow down", "Stay the same", "Increase", "Stop"], answer: 2, rationale: "Sympathetic activity increases heart rate and force as part of the fight-or-flight response." },
      { type: "mcq", q: "Atropine is an example of a(n):", options: ["Cholinergic drug", "Anticholinergic drug", "Beta-blocker", "Alpha agonist"], answer: 1, rationale: "Atropine is an anticholinergic (antimuscarinic) drug; it speeds the heart and dries secretions." },
      { type: "mcq", q: "A common side effect of anticholinergic drugs is:", options: ["Excess salivation", "Dry mouth", "Slow heart rate", "Constricted pupils"], answer: 1, rationale: "Anticholinergics reduce secretions, causing dry mouth, and also dilate pupils and speed the heart." },
      { type: "mcq", q: "Salbutamol relieves asthma by stimulating which receptors to widen the bronchi?", options: ["Alpha-1", "Beta-1", "Beta-2", "Muscarinic"], answer: 2, rationale: "Salbutamol is a beta-2 agonist; beta-2 receptors relax bronchial smooth muscle." },
      { type: "mcq", q: "Beta-1 receptors are found mainly in the:", options: ["Bronchi", "Heart", "Sweat glands", "Salivary glands"], answer: 1, rationale: "Beta-1 receptors act mainly on the heart, increasing rate and force." },
      { type: "mcq", q: "Which drug is the key treatment for anaphylaxis and cardiac arrest?", options: ["Atropine", "Adrenaline (epinephrine)", "Pilocarpine", "Propranolol"], answer: 1, rationale: "Adrenaline (epinephrine) acts on alpha and beta receptors and is essential in anaphylaxis and cardiac arrest." },
      { type: "mcq", q: "A patient on a beta-blocker should be monitored for:", options: ["Fast heart rate and high blood pressure", "Slow heart rate and low blood pressure", "Dilated pupils", "Excess salivation"], answer: 1, rationale: "Beta-blockers slow the heart and lower blood pressure, so monitor for bradycardia and hypotension." },
      { type: "mcq", q: "Cholinergic drugs typically cause all of the following EXCEPT:", options: ["Increased salivation", "Slow heart rate", "Dilated pupils", "Increased gut activity"], answer: 2, rationale: "Cholinergic drugs constrict (not dilate) the pupils; dilation is an anticholinergic effect." },
      { type: "mcq", q: "Beta-blockers should be used with caution in patients with asthma because they may:", options: ["Widen the airways too much", "Narrow the airways (bronchospasm)", "Raise the heart rate dangerously", "Cause excessive salivation"], answer: 1, rationale: "Blocking beta-2 receptors in the bronchi can cause bronchoconstriction, dangerous in asthma." }
      , { type: "fill", q: "The neurotransmitter released by the sympathetic nervous system is ____.", accept: ["noradrenaline", "norepinephrine"], rationale: "The sympathetic system mainly uses noradrenaline (norepinephrine) on adrenergic receptors." },
      { type: "fill", q: "Drugs that block acetylcholine at muscarinic receptors are called ____ drugs.", accept: ["anticholinergic", "antimuscarinic", "parasympatholytic"], rationale: "Anticholinergic drugs block muscarinic receptors, producing effects opposite to the parasympathetic system." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "ph-06-cns",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Drugs Acting on the Central Nervous System (Sedatives, Anticonvulsants, Psychotropics)",
    readMinutes: 18,
    summary: "How CNS drugs depress or alter brain activity: sedative-hypnotics and anxiolytics, anticonvulsants for epilepsy, and the main psychotropic groups — antipsychotics, antidepressants and antimanic drugs — with key nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The central nervous system and its drugs", p: "The central nervous system (CNS) is the brain and spinal cord. CNS drugs either depress activity (sedatives, hypnotics, anaesthetics) or alter mood, thinking and behaviour (psychotropics) or control abnormal electrical activity (anticonvulsants). Because the brain controls breathing and consciousness, CNS depressants must be given carefully and their effects add together with alcohol and other depressants." },
      { h: "Sedatives, hypnotics and anxiolytics", p: "A sedative calms and reduces anxiety; a hypnotic in a larger dose produces sleep — they are often the same drug at different doses. Benzodiazepines (for example, diazepam, lorazepam, midazolam) are widely used to relieve anxiety, aid sleep, relax muscles and stop seizures. They enhance the action of the inhibitory transmitter GABA. They can cause drowsiness, dependence with long use, and dangerous respiratory depression if combined with alcohol or opioids; flumazenil is the reversal agent." },
      { h: "Nursing care with CNS depressants", list: [
        "Warn the patient about drowsiness; advise against driving or operating machinery.",
        "Avoid alcohol and other CNS depressants, which add to the effect.",
        "Use the lowest effective dose for the shortest time to limit dependence.",
        "Do not stop long-term use suddenly — taper to avoid withdrawal.",
        "Monitor respiration and level of consciousness, especially in the elderly and after injection.",
        "Raise side-rails and prevent falls in drowsy or older patients."
      ] },
      { h: "Anticonvulsants (antiepileptic drugs)", p: "Anticonvulsants prevent or reduce seizures by stabilising the over-excitable nerve cells in the brain. Common examples are phenytoin, carbamazepine, sodium valproate and phenobarbitone; diazepam or lorazepam is used to stop a fit in progress (status epilepticus). Treatment is usually long term and the dose is adjusted to control seizures with the fewest side effects." },
      { h: "Nursing points for anticonvulsants", list: [
        "Give the drug at the same times each day and never stop it suddenly — this can trigger seizures.",
        "Teach the patient to keep taking the drug even when seizure-free, and to carry identification.",
        "Phenytoin can cause overgrowth of the gums (gingival hyperplasia) — emphasise good mouth care.",
        "Watch for drowsiness, unsteadiness, rash and blood or liver problems; some drugs need blood-level monitoring.",
        "Several anticonvulsants can harm the unborn baby — discuss pregnancy planning."
      ] },
      { h: "Antipsychotic drugs", p: "Antipsychotics (neuroleptics) treat psychosis and schizophrenia by blocking dopamine receptors in the brain. Older (typical) drugs include chlorpromazine and haloperidol; newer (atypical) drugs include risperidone and olanzapine. They reduce hallucinations, delusions and agitation. Their main concern is movement disorders called extrapyramidal side effects — tremor and stiffness (parkinsonism), restlessness (akathisia), acute muscle spasms, and, with long use, involuntary movements (tardive dyskinesia). A rare but life-threatening reaction is neuroleptic malignant syndrome (high fever, rigidity and confusion)." },
      { h: "Antidepressant drugs", list: [
        "SSRIs (for example, fluoxetine, sertraline) increase serotonin and are first-line for depression; they are safer in overdose. Effects take 2–4 weeks; watch for GI upset and, early on, increased anxiety.",
        "Tricyclic antidepressants (for example, amitriptyline) are effective but cause anticholinergic effects (dry mouth, constipation) and are dangerous in overdose.",
        "Teach patients that mood improves gradually over weeks, not at once, and not to stop the drug abruptly.",
        "Never combine different serotonergic drugs without care — too much serotonin causes serotonin syndrome."
      ] },
      { h: "Antimanic / mood-stabilising drugs", p: "Lithium is used to control mania and to stabilise mood in bipolar disorder. It has a narrow therapeutic range, so blood levels must be checked regularly and the patient must keep a steady salt and fluid intake; dehydration or low sodium raises the level and causes toxicity. Early signs of lithium toxicity include nausea, vomiting, diarrhoea, tremor, drowsiness and slurred speech — teach the patient to report these at once." }
    ],
    references: REF_PHARM,
    examQuestions: [
      "Differentiate between a sedative and a hypnotic, and give an example of a benzodiazepine.",
      "List the nursing precautions for a patient receiving CNS depressant drugs.",
      "Why must anticonvulsant drugs never be stopped suddenly? Add two other nursing points.",
      "Describe the extrapyramidal side effects of antipsychotic drugs.",
      "Why must blood levels be monitored in a patient taking lithium? List early signs of toxicity."
    ],
    assessment: [
      { type: "mcq", q: "A drug that calms and reduces anxiety in low dose but causes sleep in higher dose is a:", options: ["Stimulant", "Sedative-hypnotic", "Antibiotic", "Diuretic"], answer: 1, rationale: "Sedative-hypnotics calm at low dose and induce sleep at higher dose." },
      { type: "mcq", q: "Diazepam and lorazepam belong to which group?", options: ["Benzodiazepines", "Antibiotics", "Beta-blockers", "Antacids"], answer: 0, rationale: "Diazepam and lorazepam are benzodiazepines, used for anxiety, sleep, seizures and muscle spasm." },
      { type: "mcq", q: "The most serious risk of combining a benzodiazepine with alcohol or opioids is:", options: ["High blood pressure", "Respiratory depression", "Fast heart rate", "Diarrhoea"], answer: 1, rationale: "CNS depressants add together; the combination can dangerously depress breathing." },
      { type: "mcq", q: "Why must anticonvulsant drugs not be stopped suddenly?", options: ["They cause a rash", "Sudden withdrawal can trigger seizures", "They lose their colour", "They cause hair loss"], answer: 1, rationale: "Abrupt withdrawal of antiepileptic drugs can precipitate seizures, including status epilepticus." },
      { type: "mcq", q: "Phenytoin commonly causes which side effect that requires good mouth care?", options: ["Overgrowth of the gums", "Black teeth", "Excess saliva", "Tooth loss"], answer: 0, rationale: "Phenytoin can cause gingival hyperplasia (gum overgrowth); good oral hygiene is taught." },
      { type: "mcq", q: "Antipsychotic drugs mainly act by blocking which neurotransmitter?", options: ["Acetylcholine", "Dopamine", "Histamine", "Insulin"], answer: 1, rationale: "Antipsychotics block dopamine receptors, reducing hallucinations and delusions." },
      { type: "mcq", q: "Tremor, muscle stiffness and restlessness caused by antipsychotics are called:", options: ["Allergic reactions", "Extrapyramidal side effects", "Withdrawal symptoms", "Anticholinergic effects"], answer: 1, rationale: "These movement disorders are extrapyramidal side effects of dopamine blockade." },
      { type: "mcq", q: "SSRIs such as fluoxetine usually take how long to improve mood?", options: ["Within minutes", "Within 1 hour", "About 2–4 weeks", "About 6 months"], answer: 2, rationale: "Antidepressant effect develops gradually over about 2–4 weeks." },
      { type: "mcq", q: "A patient on lithium should be taught to:", options: ["Avoid all salt and fluids", "Keep a steady salt and fluid intake and report tremor or vomiting", "Stop the drug when feeling well", "Take a double dose if a meal is missed"], answer: 1, rationale: "Stable sodium and fluid intake prevents lithium accumulation; nausea, vomiting and tremor signal toxicity." },
      { type: "mcq", q: "The reversal (antidote) agent for benzodiazepine overdose is:", options: ["Naloxone", "Flumazenil", "Atropine", "Vitamin K"], answer: 1, rationale: "Flumazenil reverses benzodiazepines; naloxone reverses opioids." }
      , { type: "fill", q: "A drug given to prevent or control seizures in epilepsy is called an ____.", accept: ["anticonvulsant", "antiepileptic", "anti-epileptic"], rationale: "Anticonvulsant (antiepileptic) drugs stabilise excitable neurons to prevent seizures." }
      , { type: "fill", q: "____ is a mood-stabilising drug used in bipolar disorder that requires regular blood-level monitoring.", accept: ["lithium"], rationale: "Lithium has a narrow therapeutic range, so its blood level must be monitored." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "ph-07-analgesics",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Analgesics & Anti-inflammatory Drugs (Opioids, NSAIDs)",
    readMinutes: 17,
    summary: "Pain and the analgesic ladder, non-opioid analgesics and NSAIDs, paracetamol, opioid analgesics and their effects and antidote, and the nursing assessment and care of patients in pain.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Pain and analgesics", p: "An analgesic is a drug that relieves pain. Pain is assessed and treated according to its severity, often using the WHO analgesic ladder: start with non-opioids for mild pain, add a weak opioid for moderate pain, and use a strong opioid for severe pain, with other drugs added as needed. Pain is whatever the patient says it is; the nurse assesses it and evaluates the response to treatment.", figure: {
        caption: "The WHO analgesic ladder: step up the strength of treatment as pain severity increases.",
        svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WHO three-step analgesic ladder."><rect x="40" y="150" width="120" height="50" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="100" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Step 1</text><text x="100" y="190" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">non-opioid</text><rect x="160" y="100" width="120" height="50" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="220" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Step 2</text><text x="220" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">weak opioid</text><rect x="280" y="50" width="120" height="50" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="340" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Step 3</text><text x="340" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">strong opioid</text><text x="230" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">increasing pain →</text></svg>'
      } },
      { h: "Non-opioid analgesics and antipyretics", p: "Non-opioid analgesics relieve mild to moderate pain and many also lower fever (antipyretic). The two main types are paracetamol (acetaminophen) and the NSAIDs. They do not cause dependence and are used at every step of the ladder." },
      { h: "Paracetamol (acetaminophen)", p: "Paracetamol relieves pain and lowers fever but has little anti-inflammatory effect. It is generally safe at the recommended dose and does not irritate the stomach, which makes it a common first choice. Its danger is overdose: too much paracetamol causes severe, sometimes fatal, liver damage. The nurse teaches the patient never to exceed the stated daily dose and to check that other combined remedies do not also contain paracetamol; the antidote is acetylcysteine." },
      { h: "NSAIDs (non-steroidal anti-inflammatory drugs)", p: "NSAIDs (for example, ibuprofen, diclofenac, aspirin) relieve pain, reduce inflammation and lower fever. They work by blocking the enzyme cyclo-oxygenase (COX), which reduces prostaglandins — the chemicals that cause pain, swelling and fever. Because prostaglandins also protect the stomach lining and support kidney blood flow, NSAIDs can cause stomach irritation, ulcers and bleeding, and can harm the kidneys.", list: [
        "Give NSAIDs with or after food to reduce stomach upset.",
        "Use with caution in peptic ulcer, asthma, kidney disease and the elderly.",
        "Watch for indigestion, black stools (a sign of GI bleeding) and fluid retention.",
        "Aspirin is avoided in children with viral illness because of the risk of Reye's syndrome."
      ] },
      { h: "Opioid analgesics", p: "Opioids (for example, morphine, codeine, pethidine, tramadol, fentanyl) are the strongest analgesics and are used for moderate to severe pain. They act on opioid receptors in the brain and spinal cord to reduce the sensation of pain. Morphine is the standard strong opioid. Opioids are controlled drugs because of the risk of dependence and misuse." },
      { h: "Effects and side effects of opioids", list: [
        "Therapeutic: powerful pain relief and a sense of calm.",
        "Respiratory depression — the most dangerous effect; check the respiratory rate before and after dosing.",
        "Constipation — very common; usually a laxative is needed.",
        "Drowsiness and sedation, nausea and vomiting, low blood pressure.",
        "Pinpoint pupils (miosis); pruritus (itching).",
        "Tolerance and physical dependence with long-term use."
      ] },
      { h: "Nursing care and the opioid antidote", p: "Before giving an opioid, assess the pain and the respiratory rate; if the rate is low (commonly below about 12 breaths per minute) withhold the drug and report. Monitor pain relief, breathing, sedation, bowels and blood pressure after giving it. Naloxone is the antidote that reverses opioid effects, including respiratory depression, in overdose. Keep accurate controlled-drug records and reassure patients that, used correctly for genuine pain, opioids are appropriate and safe." }
    ],
    references: REF_PHARM,
    examQuestions: [
      "Describe the WHO analgesic ladder for managing pain.",
      "How do NSAIDs work, and what are their main side effects and nursing precautions?",
      "Why is paracetamol overdose dangerous, and what is its antidote?",
      "List the therapeutic effects and the dangerous side effects of opioid analgesics.",
      "What must the nurse assess before and after giving an opioid, and what is the opioid antidote?"
    ],
    assessment: [
      { type: "mcq", q: "An analgesic is a drug that:", options: ["Relieves pain", "Causes sleep", "Kills bacteria", "Lowers blood sugar"], answer: 0, rationale: "An analgesic relieves pain." },
      { type: "mcq", q: "NSAIDs relieve pain and inflammation by blocking which enzyme?", options: ["Cyclo-oxygenase (COX)", "Amylase", "Lipase", "Protease"], answer: 0, rationale: "NSAIDs inhibit cyclo-oxygenase, reducing prostaglandins that cause pain, swelling and fever." },
      { type: "mcq", q: "The most dangerous effect of paracetamol in overdose is:", options: ["Kidney stones", "Severe liver damage", "Stomach ulcer", "Hair loss"], answer: 1, rationale: "Paracetamol overdose causes severe, potentially fatal hepatotoxicity (liver damage)." },
      { type: "mcq", q: "A common and important side effect of NSAIDs is:", options: ["Stomach irritation and bleeding", "Excess salivation", "Slow heart rate", "Dilated pupils"], answer: 0, rationale: "By reducing protective prostaglandins, NSAIDs can irritate the stomach and cause ulcers and GI bleeding." },
      { type: "mcq", q: "The standard strong opioid analgesic for severe pain is:", options: ["Ibuprofen", "Paracetamol", "Morphine", "Aspirin"], answer: 2, rationale: "Morphine is the reference strong opioid for severe pain." },
      { type: "mcq", q: "The MOST dangerous side effect of opioids that the nurse must monitor is:", options: ["Constipation", "Respiratory depression", "Itching", "Dry mouth"], answer: 1, rationale: "Opioids depress the respiratory centre; respiratory depression can be fatal and must be monitored." },
      { type: "mcq", q: "The antidote that reverses opioid overdose is:", options: ["Flumazenil", "Naloxone", "Acetylcysteine", "Atropine"], answer: 1, rationale: "Naloxone reverses opioid effects, including respiratory depression." },
      { type: "mcq", q: "The antidote for paracetamol poisoning is:", options: ["Naloxone", "Acetylcysteine", "Vitamin K", "Flumazenil"], answer: 1, rationale: "Acetylcysteine (N-acetylcysteine) is the antidote for paracetamol overdose." },
      { type: "mcq", q: "NSAIDs should be given:", options: ["On an empty stomach", "With or after food", "Only at night", "By IV only"], answer: 1, rationale: "Taking NSAIDs with or after food reduces gastric irritation." },
      { type: "mcq", q: "Before giving an opioid, the nurse should especially check the patient's:", options: ["Hair", "Respiratory rate", "Nail colour", "Weight in pounds"], answer: 1, rationale: "Assess the respiratory rate first; if it is too low, withhold the opioid and report." }
      , { type: "fill", q: "Aspirin should be avoided in children with a viral illness because of the risk of ____ syndrome.", accept: ["reye", "reye's", "reyes"], rationale: "Aspirin in children with viral infection is linked to Reye's syndrome." }
      , { type: "fill", q: "A drug that relieves pain by acting on opioid receptors and may cause respiratory depression is an ____.", accept: ["opioid", "opiate"], rationale: "Opioids act on opioid receptors and can depress respiration." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "ph-08-antimicrobials",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Antimicrobial Drugs (Antibiotics, Antivirals, Antifungals, Antitubercular)",
    readMinutes: 18,
    summary: "How antimicrobials work, the main antibiotic classes, antibiotic resistance and the importance of completing a course, antiviral and antifungal drugs, antitubercular therapy, and nursing responsibilities.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are antimicrobials?", p: "Antimicrobials are drugs that kill or stop the growth of micro-organisms. They are grouped by the organism they target: antibiotics (antibacterials) act on bacteria, antivirals on viruses, antifungals on fungi, and antiprotozoals/anthelmintics on parasites. A drug that kills the organism is 'cidal' (bactericidal); one that only stops it multiplying is 'static' (bacteriostatic), leaving the body's defences to clear it." },
      { h: "Selective toxicity and spectrum", p: "A good antimicrobial harms the microbe but not the patient — this is selective toxicity, often achieved by attacking a structure the microbe has but human cells do not (for example, the bacterial cell wall). A broad-spectrum drug acts against many kinds of bacteria; a narrow-spectrum drug acts against only a few. Where possible the narrowest effective drug is chosen, guided by culture and sensitivity tests." },
      { h: "Main classes of antibiotics", list: [
        "Penicillins (for example, amoxicillin) and cephalosporins — damage the bacterial cell wall; bactericidal; penicillin allergy is important and may cross over to cephalosporins.",
        "Macrolides (for example, erythromycin, azithromycin) — stop protein synthesis; useful in penicillin allergy.",
        "Aminoglycosides (for example, gentamicin) — stop protein synthesis; can damage the kidney and hearing (nephro- and ototoxic), so levels are monitored.",
        "Tetracyclines (for example, doxycycline) — broad spectrum; avoid in young children and pregnancy (stain developing teeth/bone); reduce dairy at dose times.",
        "Fluoroquinolones (for example, ciprofloxacin) — broad spectrum; affect tendons and the gut flora.",
        "Sulfonamides and others (for example, co-trimoxazole, metronidazole for anaerobes and protozoa)."
      ] },
      { h: "Antibiotic resistance and completing the course", p: "Antibiotic resistance occurs when bacteria change so that a drug no longer kills them, often because antibiotics are overused or courses are not completed. Resistance makes infections hard or impossible to treat. The nurse plays a key part: give antibiotics on time at the right spacing, teach the patient to finish the whole course even when feeling better, and discourage using antibiotics for viral illnesses such as the common cold." },
      { h: "Antiviral drugs", p: "Viruses live and multiply inside the body's own cells, so they are harder to treat without harming the patient; antivirals usually suppress the virus rather than cure the infection. Examples include aciclovir for herpes and chickenpox, oseltamivir for influenza, and the antiretroviral drugs used in combination for HIV. Antiretrovirals must be taken exactly and continuously to keep the virus controlled and prevent resistance." },
      { h: "Antifungal drugs", p: "Antifungals treat fungal (yeast and mould) infections of the skin, mucous membranes or internal organs. Examples include nystatin and clotrimazole for thrush and skin infections, fluconazole for many candida infections, and amphotericin B for serious systemic fungal disease. Systemic antifungals such as amphotericin B can be toxic to the kidneys and liver, so monitoring is required." },
      { h: "Antitubercular drugs", p: "Tuberculosis (TB) is treated with several drugs together for a long period (months) to kill the slow-growing bacteria and prevent resistance. The first-line drugs are often remembered as RIPE — Rifampicin, Isoniazid, Pyrazinamide and Ethambutol. Key teaching points: rifampicin turns urine, tears and other secretions orange-red (harmless) and reduces the effect of some other drugs including oral contraceptives; isoniazid can cause nerve damage (prevented with vitamin B6/pyridoxine) and liver problems; ethambutol can affect vision. Adherence for the full course is essential and is supported by directly observed therapy." },
      { h: "Nursing responsibilities with antimicrobials", list: [
        "Ask about and document drug allergies before the first dose, especially penicillin.",
        "Take specimens for culture and sensitivity, where ordered, before starting the drug.",
        "Give doses at evenly spaced times to keep a steady blood level.",
        "Teach the patient to complete the full course and not to share or save antibiotics.",
        "Watch for super-infection (for example, oral or vaginal thrush, or antibiotic-associated diarrhoea).",
        "Monitor for allergic reactions and organ toxicity, and report them promptly."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "Differentiate between bactericidal and bacteriostatic drugs, and broad- and narrow-spectrum antibiotics.",
      "Name four classes of antibiotics with an example and one key nursing point for each.",
      "What is antibiotic resistance and how can the nurse help to prevent it?",
      "List the first-line antitubercular drugs and the main teaching point for each.",
      "State six nursing responsibilities when giving antimicrobial drugs."
    ],
    assessment: [
      { type: "mcq", q: "A drug that kills bacteria is described as:", options: ["Bacteriostatic", "Bactericidal", "Antifungal", "Antiviral"], answer: 1, rationale: "'Cidal' means killing; bactericidal drugs kill bacteria, while bacteriostatic drugs only stop them multiplying." },
      { type: "mcq", q: "Penicillins and cephalosporins kill bacteria mainly by damaging the:", options: ["Cell membrane only", "Bacterial cell wall", "Human cell wall", "Red blood cells"], answer: 1, rationale: "These beta-lactam antibiotics disrupt bacterial cell-wall synthesis; human cells have no cell wall (selective toxicity)." },
      { type: "mcq", q: "Before the first dose of an antibiotic, the nurse must especially check for:", options: ["Blood group", "Drug allergies", "Eye colour", "Body height"], answer: 1, rationale: "Documenting allergies (especially penicillin) before the first dose prevents serious reactions." },
      { type: "mcq", q: "Why must a patient complete the whole course of antibiotics?", options: ["To use up the supply", "To prevent the bacteria becoming resistant", "Because the drug expires quickly", "To change the urine colour"], answer: 1, rationale: "Stopping early can leave hardy bacteria alive and promote resistance; the full course should be finished." },
      { type: "mcq", q: "Gentamicin (an aminoglycoside) can be toxic to the:", options: ["Kidneys and hearing", "Skin and hair", "Teeth and bone", "Stomach only"], answer: 0, rationale: "Aminoglycosides are nephrotoxic and ototoxic, so blood levels and renal function are monitored." },
      { type: "mcq", q: "Aciclovir is used to treat infection caused by:", options: ["Bacteria", "Herpes virus", "Fungi", "Worms"], answer: 1, rationale: "Aciclovir is an antiviral used for herpes simplex and varicella (chickenpox/shingles)." },
      { type: "mcq", q: "Which drug is used for fungal infections such as oral thrush?", options: ["Amoxicillin", "Nystatin", "Gentamicin", "Aciclovir"], answer: 1, rationale: "Nystatin is an antifungal commonly used for oral and other candida (thrush) infections." },
      { type: "mcq", q: "Rifampicin commonly causes which harmless effect that patients should be warned about?", options: ["Blue skin", "Orange-red colour of urine and tears", "Green teeth", "Black stools"], answer: 1, rationale: "Rifampicin colours urine, tears and secretions orange-red; it is harmless but should be explained." },
      { type: "mcq", q: "Tuberculosis is treated with several drugs together mainly to:", options: ["Make it cheaper", "Prevent drug resistance and kill the slow-growing bacteria", "Shorten the course to one week", "Avoid all side effects"], answer: 1, rationale: "Combination therapy over months kills the slow-growing organisms and prevents resistance." },
      { type: "mcq", q: "Tetracyclines should be avoided in young children and pregnancy because they can:", options: ["Stain developing teeth and affect bone", "Cause deafness", "Turn urine red", "Raise blood sugar"], answer: 0, rationale: "Tetracyclines deposit in developing teeth and bone, causing staining and growth effects." }
      , { type: "fill", q: "An antibiotic effective against many different types of bacteria is described as ____-spectrum.", accept: ["broad"], rationale: "Broad-spectrum antibiotics act against a wide range of bacteria." }
      , { type: "fill", q: "Isoniazid can cause nerve damage, which is prevented by giving vitamin B6, also called ____.", accept: ["pyridoxine"], rationale: "Pyridoxine (vitamin B6) prevents isoniazid-induced peripheral neuropathy." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "ph-09-cardiovascular",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Cardiovascular Drugs",
    readMinutes: 18,
    summary: "Drugs for the heart and blood vessels: antihypertensives, antianginal nitrates, cardiac glycosides for heart failure, antiarrhythmics, and anticoagulants and antiplatelets, with essential nursing monitoring.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Cardiovascular drugs act on the heart and blood vessels to treat high blood pressure, angina, heart failure, abnormal rhythms and clotting disorders. Because they affect the pulse, blood pressure and circulation directly, careful monitoring of vital signs is central to safe nursing care." },
      { h: "Antihypertensive drugs", p: "Antihypertensives lower high blood pressure to prevent stroke, heart attack and kidney damage. The main groups are:", list: [
        "Diuretics (for example, thiazides) — remove excess salt and water.",
        "ACE inhibitors (for example, enalapril, lisinopril) — relax vessels; may cause a dry cough and a high potassium level.",
        "Angiotensin receptor blockers (ARBs, for example, losartan) — similar to ACE inhibitors but less cough.",
        "Calcium channel blockers (for example, amlodipine, nifedipine) — relax vessels; may cause ankle swelling and flushing.",
        "Beta-blockers (for example, atenolol) — slow the heart and reduce its workload.",
        "Nursing care: monitor blood pressure, teach patients to rise slowly (postural hypotension), continue the drug even when feeling well, and not stop suddenly."
      ] },
      { h: "Antianginal drugs — nitrates", p: "Angina is chest pain from a reduced blood supply to the heart muscle. Nitrates such as glyceryl trinitrate (GTN) relieve and prevent angina by widening (dilating) blood vessels, which reduces the heart's workload and improves its blood supply. GTN is given under the tongue (sublingual) for a fast effect during an attack. Teach the patient to sit down when using it (it can cause dizziness and headache), to use it at the first sign of pain, and to seek help if pain is not relieved after the recommended use. GTN tablets lose potency and should be stored correctly and replaced when out of date." },
      { h: "Drugs for heart failure — cardiac glycosides", p: "In heart failure the heart pumps too weakly. Digoxin, a cardiac glycoside, makes each heartbeat stronger and slows the heart rate, improving the circulation. Digoxin has a narrow therapeutic range, so it is easy to reach toxic levels.", list: [
        "Always check the apical pulse for one full minute before giving digoxin.",
        "Withhold the dose and report if the adult pulse is below about 60 beats per minute.",
        "Low potassium increases the risk of digoxin toxicity — monitor potassium.",
        "Early toxicity: nausea, vomiting, loss of appetite, visual changes (yellow-green halos), and slow or irregular pulse."
      ] },
      { h: "Antiarrhythmic drugs", p: "Antiarrhythmics correct abnormal heart rhythms so the heart beats regularly and effectively. They work in different ways — some block sodium or potassium channels, some are beta-blockers, and some are calcium channel blockers; amiodarone is a widely used example. Because these drugs can themselves disturb the rhythm, the nurse monitors the pulse, blood pressure and (where available) the ECG closely." },
      { h: "Anticoagulants", p: "Anticoagulants reduce the blood's ability to clot, preventing and treating clots (thrombosis) such as deep vein thrombosis and clots that cause stroke. Heparin acts quickly and is given by injection; warfarin is taken by mouth and acts slowly. The main risk is bleeding.", list: [
        "Heparin is monitored by the APTT; its antidote is protamine sulfate.",
        "Warfarin is monitored by the INR; its antidote is vitamin K. Warfarin interacts with many drugs and foods (green leafy vegetables).",
        "Watch for any bleeding — bruising, bleeding gums, blood in urine or stool, or prolonged bleeding from cuts.",
        "Teach the patient to attend for blood tests, use a soft toothbrush, avoid injury, and report bleeding."
      ] },
      { h: "Antiplatelet and lipid-lowering drugs", p: "Antiplatelet drugs such as aspirin (in low dose) and clopidogrel stop platelets from clumping and are used to prevent heart attacks and strokes; their main risk is also bleeding and, for aspirin, stomach irritation. Lipid-lowering drugs called statins (for example, atorvastatin, simvastatin) lower cholesterol to reduce cardiovascular risk; they are usually well tolerated but the nurse should report unexplained muscle pain or weakness, which can signal a rare muscle problem." },
      { h: "Core nursing care for cardiovascular drugs", list: [
        "Measure and record the pulse and blood pressure before and during therapy.",
        "Know which drugs require withholding and reporting (for example, digoxin with a low pulse).",
        "Teach adherence, slow position changes, and the signs to report (bleeding, dizziness, chest pain).",
        "Emphasise that these drugs are usually long term and must not be stopped suddenly without advice."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "List the main groups of antihypertensive drugs and the key nursing care for them.",
      "How do nitrates relieve angina, and what should the nurse teach about using GTN?",
      "Why must the apical pulse be checked before giving digoxin? List the early signs of digoxin toxicity.",
      "Compare heparin and warfarin (route, monitoring test and antidote).",
      "What are the main nursing observations and teaching points for a patient on anticoagulants?"
    ],
    assessment: [
      { type: "mcq", q: "Before giving digoxin, the nurse must check the patient's:", options: ["Temperature", "Apical pulse for one full minute", "Weight", "Blood sugar"], answer: 1, rationale: "Digoxin slows the heart; the apical pulse is counted for a full minute and the dose withheld if it is too slow." },
      { type: "mcq", q: "Digoxin should usually be withheld in an adult if the pulse is below:", options: ["100 beats/min", "90 beats/min", "60 beats/min", "120 beats/min"], answer: 2, rationale: "A pulse below about 60 beats/min indicates the dose should be withheld and reported." },
      { type: "mcq", q: "Glyceryl trinitrate (GTN) relieves angina by:", options: ["Thickening the blood", "Widening (dilating) blood vessels", "Speeding the heart", "Raising blood pressure"], answer: 1, rationale: "Nitrates dilate vessels, reducing cardiac workload and improving blood supply to the heart muscle." },
      { type: "mcq", q: "The antidote for warfarin is:", options: ["Protamine sulfate", "Vitamin K", "Naloxone", "Calcium"], answer: 1, rationale: "Vitamin K reverses warfarin; protamine sulfate reverses heparin." },
      { type: "mcq", q: "Warfarin therapy is monitored using which blood test?", options: ["INR", "Blood sugar", "Haemoglobin", "Serum sodium"], answer: 0, rationale: "The INR (International Normalised Ratio) monitors warfarin's effect on clotting." },
      { type: "mcq", q: "The main risk of all anticoagulant drugs is:", options: ["Clotting", "Bleeding", "Constipation", "Hair loss"], answer: 1, rationale: "Anticoagulants reduce clotting, so the chief danger is bleeding." },
      { type: "mcq", q: "A dry, persistent cough is a recognised side effect of which antihypertensive group?", options: ["Calcium channel blockers", "ACE inhibitors", "Diuretics", "Nitrates"], answer: 1, rationale: "ACE inhibitors commonly cause a dry cough and can raise potassium." },
      { type: "mcq", q: "Which electrolyte imbalance increases the risk of digoxin toxicity?", options: ["High potassium", "Low potassium", "High calcium", "Low sodium"], answer: 1, rationale: "Low potassium (hypokalaemia) sensitises the heart to digoxin and raises toxicity risk." },
      { type: "mcq", q: "Statins (for example, simvastatin) are given to:", options: ["Lower cholesterol", "Raise blood pressure", "Thin the blood", "Slow the heart"], answer: 0, rationale: "Statins lower cholesterol to reduce cardiovascular risk; report unexplained muscle pain." },
      { type: "mcq", q: "A patient using sublingual GTN for an angina attack should be taught to:", options: ["Stand up and walk about", "Sit or lie down because it can cause dizziness", "Swallow the tablet whole", "Take ten doses at once"], answer: 1, rationale: "GTN can lower blood pressure and cause dizziness, so the patient should sit or lie down when using it." }
      , { type: "fill", q: "The blood test used to monitor heparin therapy is the ____.", accept: ["aptt", "appt", "activated partial thromboplastin time"], rationale: "Heparin is monitored by the APTT; warfarin is monitored by the INR." }
      , { type: "fill", q: "An early visual sign of digoxin toxicity is seeing yellow-green ____ around lights.", accept: ["halos", "haloes", "halo"], rationale: "Yellow-green halos around lights are a classic visual sign of digoxin toxicity." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "ph-10-diuretics",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Diuretics & Drugs Affecting Fluid Balance",
    readMinutes: 16,
    summary: "How diuretics remove excess fluid, the loop, thiazide and potassium-sparing groups, their uses in oedema and hypertension, the electrolyte risks (especially potassium), and nursing monitoring.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What diuretics do", p: "Diuretics ('water tablets') increase the amount of urine the kidneys make by causing them to excrete more salt (sodium) and water. By removing excess fluid they reduce swelling (oedema) and lower blood pressure. They are widely used in heart failure, high blood pressure, and conditions causing fluid overload such as some kidney and liver diseases." },
      { h: "The main groups of diuretics", list: [
        "Loop diuretics (for example, furosemide) — the most powerful; act quickly and produce a large urine output; used in heart failure and pulmonary oedema. They lower potassium.",
        "Thiazide diuretics (for example, hydrochlorothiazide, bendroflumethiazide) — milder; widely used for high blood pressure. They also lower potassium.",
        "Potassium-sparing diuretics (for example, spironolactone, amiloride) — weaker, but they keep potassium in the body; often combined with the other groups to balance potassium."
      ] },
      { h: "Uses of diuretics", list: [
        "Heart failure — to relieve breathlessness and swelling from fluid overload.",
        "High blood pressure (hypertension) — often as first-line treatment.",
        "Oedema from kidney or liver disease.",
        "Pulmonary oedema (fluid in the lungs) — furosemide acts fast.",
        "Spironolactone is also used where the hormone aldosterone is high."
      ] },
      { h: "Potassium — the key electrolyte concern", p: "The biggest risk with most diuretics is a change in the body's potassium level. Loop and thiazide diuretics cause potassium loss (hypokalaemia), which can cause muscle weakness, cramps, tiredness and dangerous heart rhythm changes — and increases the risk of digoxin toxicity. Potassium-sparing diuretics do the opposite and can cause too much potassium (hyperkalaemia). The nurse monitors potassium and watches for these effects.", figure: {
        caption: "Effect of diuretic groups on body potassium.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Loop and thiazide diuretics lower potassium; potassium-sparing diuretics raise it."><rect x="20" y="35" width="220" height="80" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="130" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Loop &amp; Thiazide</text><text x="130" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#B45309">Potassium ↓</text><text x="130" y="103" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">(hypokalaemia)</text><rect x="280" y="35" width="220" height="80" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="390" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Potassium-sparing</text><text x="390" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#7C2D12">Potassium ↑</text><text x="390" y="103" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">(hyperkalaemia)</text></svg>'
      } },
      { h: "Other side effects", list: [
        "Dehydration and low blood pressure, with dizziness, especially on standing.",
        "Loss of other electrolytes such as sodium.",
        "Increased blood sugar and uric acid with thiazides (caution in diabetes and gout).",
        "Spironolactone may cause breast tenderness or enlargement.",
        "Increased urination — important for timing the dose."
      ] },
      { h: "Nursing care and monitoring", list: [
        "Give diuretics in the morning (and not late in the day) so increased urination does not disturb sleep.",
        "Monitor fluid balance — record intake and output, and daily weight (a reliable guide to fluid loss or gain).",
        "Check blood pressure and watch for signs of dehydration and postural dizziness.",
        "Monitor electrolytes, especially potassium; report muscle weakness, cramps or palpitations.",
        "For potassium-losing diuretics, encourage potassium-rich foods (bananas, oranges) or give supplements as prescribed; for potassium-sparing diuretics, avoid extra potassium.",
        "Teach the patient to rise slowly, to keep to the prescribed dose, and to attend for blood tests."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "How do diuretics work, and what are their main clinical uses?",
      "Name the three main groups of diuretics with an example of each.",
      "Why is potassium monitoring essential in patients taking diuretics?",
      "List the side effects of diuretic therapy.",
      "Describe the nursing care and monitoring of a patient receiving furosemide."
    ],
    assessment: [
      { type: "mcq", q: "Diuretics reduce oedema and blood pressure by making the kidneys excrete more:", options: ["Glucose and protein", "Salt and water", "Red blood cells", "Calcium only"], answer: 1, rationale: "Diuretics increase the excretion of sodium and water, reducing fluid volume." },
      { type: "mcq", q: "The most powerful, rapidly acting diuretic used in pulmonary oedema is:", options: ["Furosemide (a loop diuretic)", "Spironolactone", "Amiloride", "Hydrochlorothiazide"], answer: 0, rationale: "Loop diuretics such as furosemide are the most potent and act quickly." },
      { type: "mcq", q: "Which diuretic group helps the body KEEP potassium?", options: ["Loop diuretics", "Thiazide diuretics", "Potassium-sparing diuretics", "Osmotic diuretics"], answer: 2, rationale: "Potassium-sparing diuretics (e.g. spironolactone) retain potassium." },
      { type: "mcq", q: "Furosemide and thiazides commonly cause a LOW level of which electrolyte?", options: ["Sodium", "Potassium", "Calcium", "Iron"], answer: 1, rationale: "Loop and thiazide diuretics cause potassium loss (hypokalaemia)." },
      { type: "mcq", q: "A patient on furosemide reports muscle weakness and cramps. This may indicate:", options: ["High potassium", "Low potassium", "High calcium", "Low sodium only"], answer: 1, rationale: "Muscle weakness and cramps are signs of hypokalaemia caused by potassium-losing diuretics." },
      { type: "mcq", q: "Diuretics are best given:", options: ["In the morning", "At bedtime", "Only at night", "Every hour"], answer: 0, rationale: "Morning dosing prevents the increased urine output from disturbing the patient's sleep." },
      { type: "mcq", q: "The most reliable daily nursing measure of fluid loss or gain in a patient on diuretics is:", options: ["Temperature", "Daily weight", "Pulse rate", "Skin colour"], answer: 1, rationale: "Daily weight at the same time reliably reflects changes in body fluid." },
      { type: "mcq", q: "For a patient on a potassium-losing diuretic, the nurse may encourage foods such as:", options: ["White bread", "Bananas and oranges", "Boiled sweets", "Butter"], answer: 1, rationale: "Bananas and oranges are potassium-rich and help replace losses (unless contraindicated)." },
      { type: "mcq", q: "A patient on spironolactone (potassium-sparing) should be advised to:", options: ["Take extra potassium supplements", "Avoid potassium supplements and salt substitutes", "Eat large amounts of banana", "Stop all fluids"], answer: 1, rationale: "Potassium-sparing diuretics can raise potassium, so extra potassium should be avoided." },
      { type: "mcq", q: "Thiazide diuretics should be used with caution in diabetes because they may:", options: ["Lower blood sugar", "Raise blood sugar", "Raise potassium", "Cause clotting"], answer: 1, rationale: "Thiazides can increase blood glucose (and uric acid), so caution is needed in diabetes and gout." }
      , { type: "fill", q: "Loss of too much potassium from the body is called ____.", accept: ["hypokalaemia", "hypokalemia"], rationale: "Hypokalaemia (low potassium) is a key risk of loop and thiazide diuretics." }
      , { type: "fill", q: "____ is a potassium-sparing diuretic that may cause breast enlargement or tenderness.", accept: ["spironolactone"], rationale: "Spironolactone is potassium-sparing and can cause gynaecomastia/breast tenderness." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "ph-11-respiratory",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Drugs Acting on the Respiratory System",
    readMinutes: 16,
    summary: "Drugs for asthma and COPD (bronchodilators and inhaled corticosteroids), plus cough medicines, mucolytics, antihistamines and oxygen, with correct inhaler technique and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Respiratory drugs help breathing by opening narrowed airways, reducing airway inflammation, loosening or suppressing a cough, and relieving allergy. They are central to managing asthma and chronic obstructive pulmonary disease (COPD). Many are given by inhalation so the drug acts directly on the airways with less effect on the rest of the body." },
      { h: "Bronchodilators", p: "Bronchodilators relax and widen the muscle around the airways (bronchi), making it easier to breathe. The main types are:", list: [
        "Beta-2 agonists — salbutamol is a short-acting 'reliever' for sudden breathlessness; salmeterol is long-acting for regular control. Side effects: tremor, fast heart rate and palpitations.",
        "Anticholinergics — ipratropium relaxes the airways and is useful in COPD.",
        "Methylxanthines — theophylline/aminophylline; effective but with a narrow therapeutic range, so blood levels are monitored and toxicity (nausea, palpitations, seizures) is watched for."
      ] },
      { h: "Inhaled corticosteroids (preventers)", p: "Inhaled corticosteroids such as beclometasone and budesonide reduce the inflammation and swelling in the airways that underlie asthma. They are 'preventers' taken regularly every day to control the disease and reduce attacks; they do not give quick relief during an attack. The main local side effects are oral thrush and a hoarse voice, which are reduced by rinsing the mouth after use. The patient must understand the difference between the daily preventer and the reliever inhaler." },
      { h: "Correct inhaler use", p: "An inhaler only works if used correctly, so teaching technique is a key nursing task.", list: [
        "Shake the inhaler and breathe out fully first.",
        "Press the inhaler while breathing in slowly and deeply, then hold the breath for about ten seconds.",
        "Wait before a second puff if ordered.",
        "Use a spacer device where available to improve drug delivery, especially for children and the elderly.",
        "Rinse the mouth after using a steroid inhaler to prevent thrush."
      ] },
      { h: "Cough medicines and mucolytics", list: [
        "Expectorants loosen secretions so a productive cough can clear mucus more easily.",
        "Mucolytics (for example, bromhexine) thin thick mucus so it is easier to cough up.",
        "Cough suppressants (antitussives, for example, codeine-based linctus) calm a dry, irritating cough; they are not used when bringing up phlegm is needed.",
        "Encourage fluids and steam to help loosen secretions."
      ] },
      { h: "Antihistamines and decongestants", p: "Antihistamines block histamine and relieve allergic symptoms such as a runny nose, sneezing, itching and hay fever, and are used in mild allergic reactions. Older antihistamines (for example, chlorphenamine) cause drowsiness; newer ones (for example, cetirizine, loratadine) cause less. Decongestants reduce a blocked nose by narrowing nasal vessels but should be used only short term, as prolonged use causes rebound congestion." },
      { h: "Oxygen as a drug and nursing care", p: "Oxygen is a drug and is prescribed at a stated rate or concentration. It is given for low blood oxygen, but in some patients with severe long-standing COPD too much oxygen can reduce the drive to breathe, so the prescribed rate must be followed. Oxygen supports combustion, so no smoking or naked flames are allowed nearby.", list: [
        "Give reliever then preventer, and check inhaler technique at every opportunity.",
        "Monitor breathing, oxygen saturation, pulse and the response to treatment.",
        "Teach the patient to recognise a worsening attack and to seek help, and to carry the reliever inhaler.",
        "For nebulised or inhaled bronchodilators, watch for tremor and a fast heart rate."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "How do bronchodilators relieve breathlessness? Name the main types with an example.",
      "Differentiate between a reliever and a preventer inhaler in asthma.",
      "Describe the correct steps for using a metered-dose inhaler.",
      "Why must inhaled corticosteroids be used regularly, and why rinse the mouth afterwards?",
      "Explain why oxygen is regarded as a drug and the safety points when giving it."
    ],
    assessment: [
      { type: "mcq", q: "Bronchodilators relieve breathlessness by:", options: ["Narrowing the airways", "Relaxing and widening the airways", "Drying the lungs", "Stopping the cough reflex"], answer: 1, rationale: "Bronchodilators relax bronchial smooth muscle, widening the airways." },
      { type: "mcq", q: "Salbutamol is best described as a:", options: ["Long-acting preventer", "Short-acting reliever (beta-2 agonist)", "Inhaled steroid", "Cough suppressant"], answer: 1, rationale: "Salbutamol is a short-acting beta-2 agonist used as a quick reliever." },
      { type: "mcq", q: "Inhaled corticosteroids such as beclometasone are used as:", options: ["Quick relievers during an attack", "Daily preventers to reduce inflammation", "Cough suppressants", "Antibiotics"], answer: 1, rationale: "Inhaled steroids are preventers taken regularly to control airway inflammation; they do not relieve an acute attack." },
      { type: "mcq", q: "After using a steroid inhaler the patient should:", options: ["Lie flat", "Rinse the mouth", "Avoid all fluids", "Take an antibiotic"], answer: 1, rationale: "Rinsing the mouth removes residual drug and helps prevent oral thrush and hoarseness." },
      { type: "mcq", q: "A common side effect of beta-2 agonists such as salbutamol is:", options: ["Slow heart rate", "Tremor and palpitations", "Constipation", "Dry eyes"], answer: 1, rationale: "Beta-2 agonists can cause fine tremor, tachycardia and palpitations." },
      { type: "mcq", q: "A mucolytic drug is used to:", options: ["Suppress a dry cough", "Thin thick mucus so it is easier to cough up", "Widen the airways", "Reduce allergy"], answer: 1, rationale: "Mucolytics thin viscous secretions, aiding their removal." },
      { type: "mcq", q: "Which older antihistamine commonly causes drowsiness?", options: ["Loratadine", "Cetirizine", "Chlorphenamine", "Salbutamol"], answer: 2, rationale: "Chlorphenamine is a sedating (first-generation) antihistamine; loratadine and cetirizine are less sedating." },
      { type: "mcq", q: "Oxygen therapy must be regarded as a:", options: ["Harmless gas needing no order", "Drug that is prescribed at a stated rate", "Food supplement", "Disinfectant"], answer: 1, rationale: "Oxygen is a drug; it is prescribed and given at a controlled rate or concentration." },
      { type: "mcq", q: "An important safety rule when oxygen is in use is:", options: ["Allow smoking nearby", "No smoking or naked flames near the oxygen", "Keep the flow as high as possible", "Use it only at night"], answer: 1, rationale: "Oxygen supports combustion, so smoking and naked flames must be kept away." },
      { type: "mcq", q: "A cough suppressant (antitussive) is NOT suitable when the patient:", options: ["Has a dry, irritating cough", "Is bringing up phlegm (productive cough)", "Cannot sleep due to coughing", "Has a tickly throat"], answer: 1, rationale: "Suppressing a productive cough traps secretions; suppressants suit a dry, non-productive cough." }
      , { type: "fill", q: "The short-acting beta-2 agonist commonly used as a reliever inhaler in asthma is ____.", accept: ["salbutamol", "albuterol"], rationale: "Salbutamol (albuterol) is the standard short-acting reliever." }
      , { type: "fill", q: "A device fitted to an inhaler to improve drug delivery, especially in children, is called a ____.", accept: ["spacer"], rationale: "A spacer improves delivery of inhaled drug to the lungs." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "ph-12-gastrointestinal",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Drugs Acting on the Gastrointestinal System",
    readMinutes: 16,
    summary: "Drugs for the gut and biliary system: antacids and acid-reducing drugs for ulcers and reflux, anti-emetics, laxatives and antidiarrhoeals, with their actions, side effects and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Gastrointestinal (GI) drugs treat the common problems of the digestive tract: too much stomach acid (ulcers and reflux), nausea and vomiting, constipation and diarrhoea. Because the GI tract handles the body's food, fluid and many oral drugs, these conditions affect nutrition, comfort and the absorption of other medicines." },
      { h: "Antacids", p: "Antacids neutralise stomach acid to relieve heartburn, indigestion and ulcer pain. They contain salts of aluminium, magnesium or calcium. Magnesium-based antacids tend to cause diarrhoea, while aluminium-based ones tend to cause constipation, so many products combine the two to balance the effect. Antacids can bind other drugs in the gut and reduce their absorption, so they are given at a different time (usually one to two hours apart) from other medicines." },
      { h: "Acid-reducing drugs for ulcers and reflux", list: [
        "H2-receptor blockers (for example, ranitidine, famotidine) reduce acid production by blocking histamine in the stomach.",
        "Proton pump inhibitors (PPIs, for example, omeprazole, pantoprazole) strongly reduce acid by blocking the acid pump; they are taken before food and are very effective for ulcers and reflux.",
        "Peptic ulcers are often caused by the bacterium Helicobacter pylori, which is treated with a PPI plus two antibiotics together.",
        "Mucosal protectants (for example, sucralfate) coat and protect the ulcer surface."
      ] },
      { h: "Anti-emetics (drugs for nausea and vomiting)", p: "Anti-emetics relieve nausea and vomiting from many causes — motion sickness, infection, pregnancy, surgery and chemotherapy. They act at different sites, so the choice depends on the cause.", list: [
        "Metoclopramide speeds stomach emptying and acts on the vomiting centre.",
        "Promethazine and cyclizine (antihistamine type) help motion sickness and vertigo and may cause drowsiness.",
        "Ondansetron blocks serotonin and is used for vomiting after surgery and chemotherapy.",
        "The nurse also corrects dehydration and watches the fluid balance in a vomiting patient."
      ] },
      { h: "Laxatives (for constipation)", p: "Laxatives relieve constipation and ease bowel emptying. The main types work in different ways:", list: [
        "Bulk-forming (for example, ispaghula/psyllium) — add fibre and water to the stool; need plenty of fluid; act gently.",
        "Osmotic (for example, lactulose) — draw water into the bowel to soften the stool.",
        "Stimulant (for example, bisacodyl, senna) — stimulate bowel movement; useful but can cause cramps and should not be overused.",
        "Stool softeners and lubricants — make hard stool easier to pass.",
        "Teach fibre, fluids and exercise; laxatives should not be used long term or when the abdomen is painful and undiagnosed."
      ] },
      { h: "Antidiarrhoeal drugs", p: "Antidiarrhoeals reduce the number and looseness of stools. Loperamide slows the movement of the gut so more water is absorbed and stools firm up. They give symptom relief but do not treat the cause; they are generally avoided in infective diarrhoea with high fever or blood, where the infection needs to be cleared. The first priority in any diarrhoea, especially in children, is to prevent and treat dehydration with oral rehydration solution (ORS) and fluids." },
      { h: "Nursing care for GI drugs", list: [
        "Give antacids and PPIs at the correct time in relation to food and other drugs.",
        "Separate antacids from other oral medicines to avoid reduced absorption.",
        "Monitor bowel habit, hydration and the response to treatment.",
        "Teach lifestyle measures: small frequent meals, avoiding irritants (alcohol, smoking, spicy food) for reflux, and fibre and fluids for constipation.",
        "In vomiting or diarrhoea, monitor fluid and electrolyte balance and give ORS as needed.",
        "Stress completing H. pylori treatment fully to clear the infection."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "How do antacids work, and why should they be given separately from other drugs?",
      "Differentiate between H2-receptor blockers and proton pump inhibitors.",
      "Name the main groups of laxatives with an example and how each works.",
      "When are antidiarrhoeal drugs inappropriate, and what is the first priority in diarrhoea?",
      "Describe the nursing care of a patient with peptic ulcer disease taking acid-reducing drugs."
    ],
    assessment: [
      { type: "mcq", q: "Antacids relieve indigestion by:", options: ["Increasing stomach acid", "Neutralising stomach acid", "Stopping vomiting", "Speeding the bowel"], answer: 1, rationale: "Antacids neutralise gastric acid, relieving heartburn and ulcer pain." },
      { type: "mcq", q: "Omeprazole and pantoprazole belong to which group?", options: ["Antacids", "H2-receptor blockers", "Proton pump inhibitors", "Laxatives"], answer: 2, rationale: "Omeprazole and pantoprazole are proton pump inhibitors that strongly reduce acid production." },
      { type: "mcq", q: "A magnesium-based antacid is most likely to cause:", options: ["Constipation", "Diarrhoea", "Vomiting", "Fever"], answer: 1, rationale: "Magnesium antacids tend to cause diarrhoea, while aluminium ones tend to cause constipation." },
      { type: "mcq", q: "Antacids should be given at a different time from other oral drugs because they may:", options: ["Increase their absorption", "Reduce their absorption", "Change their colour", "Make them dissolve faster"], answer: 1, rationale: "Antacids can bind other drugs in the gut and reduce their absorption, so doses are spaced apart." },
      { type: "mcq", q: "Peptic ulcers are often caused by the bacterium:", options: ["Escherichia coli", "Helicobacter pylori", "Staphylococcus aureus", "Streptococcus"], answer: 1, rationale: "Helicobacter pylori is a major cause of peptic ulcers and is treated with a PPI plus antibiotics." },
      { type: "mcq", q: "Lactulose relieves constipation by acting as a(n):", options: ["Stimulant laxative", "Osmotic laxative drawing water into the bowel", "Antacid", "Antidiarrhoeal"], answer: 1, rationale: "Lactulose is an osmotic laxative that draws water into the bowel to soften the stool." },
      { type: "mcq", q: "Bulk-forming laxatives such as ispaghula require the patient to:", options: ["Restrict all fluids", "Drink plenty of fluid", "Stay in bed", "Avoid all fibre"], answer: 1, rationale: "Bulk-forming laxatives need adequate fluid to work and to avoid obstruction." },
      { type: "mcq", q: "Loperamide controls diarrhoea by:", options: ["Killing bacteria", "Slowing gut movement so more water is absorbed", "Drawing water into the bowel", "Neutralising acid"], answer: 1, rationale: "Loperamide slows intestinal motility, allowing more water reabsorption and firmer stools." },
      { type: "mcq", q: "The first priority in a child with diarrhoea is to:", options: ["Give a strong antidiarrhoeal", "Prevent and treat dehydration with ORS", "Stop all feeding", "Give an antacid"], answer: 1, rationale: "Preventing and correcting dehydration with oral rehydration solution is the priority in diarrhoea." },
      { type: "mcq", q: "Antidiarrhoeal drugs are generally avoided when diarrhoea is accompanied by:", options: ["Mild tiredness", "High fever or blood in the stool", "Normal appetite", "A single loose stool"], answer: 1, rationale: "In severe infective diarrhoea (fever or blood), slowing the gut may worsen the illness; the cause must be treated." }
      , { type: "fill", q: "Drugs such as omeprazole that strongly reduce stomach acid by blocking the acid pump are called ____ ____ inhibitors.", accept: ["proton pump", "proton-pump"], rationale: "Proton pump inhibitors block the gastric acid pump." }
      , { type: "fill", q: "The solution given first to prevent dehydration in diarrhoea is ____ (abbreviation).", accept: ["ors", "oral rehydration solution", "oral rehydration salts"], rationale: "Oral rehydration solution (ORS) replaces lost fluid and electrolytes." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "ph-13-endocrine",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Endocrine Drugs (Insulin & Oral Antidiabetics, Thyroid, Corticosteroids)",
    readMinutes: 18,
    summary: "Drugs that replace or adjust hormones: insulin and oral antidiabetics for diabetes, thyroid and antithyroid drugs, and corticosteroids, with the recognition of hypoglycaemia and key nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The endocrine system and its drugs", p: "The endocrine system uses hormones to control body functions such as blood sugar, metabolism, growth and the stress response. Endocrine drugs either replace a hormone that is lacking (for example, insulin or thyroxine), reduce a hormone that is in excess (for example, antithyroid drugs), or use a hormone for its effects (for example, corticosteroids). They must be balanced carefully, as both too much and too little cause harm." },
      { h: "Diabetes and insulin", p: "In diabetes mellitus the blood glucose is too high because the body lacks insulin or cannot use it well. Insulin is a hormone that lowers blood glucose; it is destroyed in the gut, so it is given by injection, usually subcutaneously. Insulins differ by how fast and how long they act (rapid-, short-, intermediate- and long-acting), and the type and timing are matched to meals.", list: [
        "Rotate injection sites to prevent lumps (lipohypertrophy) and uneven absorption.",
        "Give the correct insulin type at the right time in relation to food.",
        "Use an insulin syringe or pen marked in units, and have insulin doses double-checked.",
        "Store insulin correctly (refrigerated stock; the in-use pen kept as directed)."
      ] },
      { h: "Hypoglycaemia — a key emergency", p: "The most important danger of insulin (and some oral antidiabetics) is hypoglycaemia — blood sugar that falls too low. It can occur if a meal is missed, the dose is too high, or there is extra exercise. Signs come on quickly: sweating, shakiness, hunger, fast heartbeat, confusion and, if untreated, loss of consciousness. Treatment is fast-acting sugar (glucose tablets, sweet drink) if the patient is conscious, or glucagon/IV glucose if not. Teach patients to recognise and treat early hypoglycaemia and to carry sugar." },
      { h: "Oral antidiabetic drugs", list: [
        "Metformin (a biguanide) — first-line for type 2 diabetes; lowers glucose without usually causing hypoglycaemia; common side effect is GI upset; take with food.",
        "Sulfonylureas (for example, glibenclamide, gliclazide) — make the pancreas release more insulin; CAN cause hypoglycaemia, so meals must not be skipped.",
        "Oral drugs are used in type 2 diabetes; type 1 always needs insulin.",
        "Teach diet, regular meals, exercise, foot care and blood-glucose monitoring."
      ] },
      { h: "Thyroid and antithyroid drugs", p: "The thyroid gland controls metabolism. When it is underactive (hypothyroidism) the missing hormone is replaced with levothyroxine (thyroxine), usually taken once daily on an empty stomach and continued for life; too high a dose causes symptoms of overactivity (palpitations, weight loss, tremor). When the thyroid is overactive (hyperthyroidism) antithyroid drugs such as carbimazole reduce hormone production; a serious but rare side effect is a fall in white cells, so the patient is told to report a sore throat or fever at once." },
      { h: "Corticosteroids", p: "Corticosteroids (for example, prednisolone, hydrocortisone, dexamethasone) are hormones of the adrenal gland used widely to reduce inflammation and to suppress the immune system — in asthma, allergy, severe inflammation and many other conditions. They are powerful and helpful but have important effects with prolonged use." },
      { h: "Effects and safe use of corticosteroids", list: [
        "Long-term effects: raised blood sugar, weight gain and a rounded face, raised blood pressure, thinning of bone (osteoporosis), muscle weakness, mood changes, and a thin, easily bruised skin.",
        "They lower resistance to infection and can mask its signs — watch for infection.",
        "They can irritate the stomach — give with food and watch for ulcers.",
        "NEVER stop long-term steroids suddenly — the body's own production is suppressed; the dose must be reduced gradually to avoid a dangerous adrenal crisis.",
        "Patients on long-term steroids should carry a steroid card and may need a higher dose during illness or stress.",
        "Take the dose in the morning to match the body's natural rhythm where possible."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "Why is insulin given by injection, and what nursing points apply to its administration?",
      "Describe the signs of hypoglycaemia and its immediate treatment.",
      "Compare metformin and sulfonylureas, including their risk of hypoglycaemia.",
      "What is levothyroxine used for, and what teaching does the patient need?",
      "List the main side effects of long-term corticosteroids and explain why they must not be stopped suddenly."
    ],
    assessment: [
      { type: "mcq", q: "Insulin must be given by injection because it:", options: ["Tastes unpleasant", "Is destroyed in the stomach if swallowed", "Works only on the skin", "Cannot be measured"], answer: 1, rationale: "Insulin is a protein destroyed by digestive enzymes, so it is given parenterally (usually subcutaneously)." },
      { type: "mcq", q: "The most important acute danger of insulin therapy is:", options: ["Hyperglycaemia", "Hypoglycaemia", "Constipation", "Hair loss"], answer: 1, rationale: "Excess insulin, a missed meal or extra exercise can cause dangerously low blood sugar (hypoglycaemia)." },
      { type: "mcq", q: "Which of the following is an early sign of hypoglycaemia?", options: ["Sweating and shakiness", "Slow deep breathing", "Dry skin and thirst", "Increased urine output"], answer: 0, rationale: "Hypoglycaemia causes sweating, shakiness, hunger and a fast heartbeat; it comes on quickly." },
      { type: "mcq", q: "A conscious patient with hypoglycaemia should first be given:", options: ["Insulin", "A fast-acting sugar such as glucose or a sweet drink", "A laxative", "Nothing by mouth"], answer: 1, rationale: "If conscious and able to swallow, give fast-acting sugar to raise the blood glucose quickly." },
      { type: "mcq", q: "The first-line oral drug for type 2 diabetes that rarely causes hypoglycaemia is:", options: ["Glibenclamide", "Metformin", "Insulin", "Gliclazide"], answer: 1, rationale: "Metformin lowers glucose without usually causing hypoglycaemia and is first-line in type 2 diabetes." },
      { type: "mcq", q: "Sulfonylureas (for example, gliclazide) lower blood sugar by:", options: ["Stopping all food absorption", "Stimulating the pancreas to release more insulin", "Blocking acid", "Removing sugar in urine only"], answer: 1, rationale: "Sulfonylureas stimulate insulin release from the pancreas, so they can cause hypoglycaemia." },
      { type: "mcq", q: "Levothyroxine (thyroxine) is used to treat:", options: ["An overactive thyroid", "An underactive thyroid (hypothyroidism)", "Diabetes", "High blood pressure"], answer: 1, rationale: "Levothyroxine replaces thyroid hormone in hypothyroidism and is usually lifelong." },
      { type: "mcq", q: "A patient on the antithyroid drug carbimazole should report which symptom at once?", options: ["Mild tiredness", "Sore throat or fever", "Increased appetite", "Dry skin"], answer: 1, rationale: "Carbimazole can rarely lower white cells; a sore throat or fever may signal this and must be reported." },
      { type: "mcq", q: "Why must long-term corticosteroids NOT be stopped suddenly?", options: ["They are addictive", "The body's own steroid production is suppressed, risking adrenal crisis", "They turn urine red", "They cause sneezing"], answer: 1, rationale: "Long-term steroids suppress natural adrenal output; abrupt withdrawal can cause a dangerous adrenal crisis, so taper gradually." },
      { type: "mcq", q: "A long-term side effect of corticosteroids is:", options: ["Low blood sugar", "Raised blood sugar and thinning of the bones", "Slow heart rate", "Improved immunity to infection"], answer: 1, rationale: "Corticosteroids raise blood glucose, cause osteoporosis, and lower resistance to infection." }
      , { type: "fill", q: "Blood sugar that falls too low, causing sweating and shakiness, is called ____.", accept: ["hypoglycaemia", "hypoglycemia", "low blood sugar"], rationale: "Hypoglycaemia is low blood glucose and is the key acute risk of insulin." }
      , { type: "fill", q: "Patients on long-term corticosteroids should carry a steroid ____ to alert others to their treatment.", accept: ["card"], rationale: "A steroid card alerts staff that the patient is steroid-dependent and may need extra doses in illness." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "ph-14-fluids-blood",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Vitamins, Minerals, IV Fluids & Blood Products",
    readMinutes: 17,
    summary: "Vitamins and key minerals (iron, calcium, potassium) and their uses, the types of intravenous fluids, and the safe transfusion of blood and blood products with recognition of reactions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Vitamins", p: "Vitamins are substances the body needs in small amounts for normal function; a lack of them causes deficiency diseases. They are given to prevent or treat deficiency. They are grouped as fat-soluble (A, D, E, K), which are stored in the body and can build up if taken in excess, and water-soluble (B group and C), which are not stored and so must be supplied regularly.", list: [
        "Vitamin A — vision and skin; deficiency causes night blindness.",
        "Vitamin D — calcium absorption and bone; deficiency causes rickets in children.",
        "Vitamin K — needed for blood clotting; the antidote to warfarin.",
        "Vitamin B group — energy and nerve function; B12 and folate are needed to make red blood cells.",
        "Vitamin C — healing and immunity; deficiency causes scurvy."
      ] },
      { h: "Important minerals", list: [
        "Iron — needed to make haemoglobin; iron deficiency causes anaemia. Oral iron is best absorbed with vitamin C, may cause black stools and constipation, and should be kept away from children (overdose is dangerous).",
        "Calcium — needed for bones, nerves and muscle; given for low calcium and to protect bone.",
        "Potassium — vital for the heart and muscles; given for low potassium but must NEVER be given by rapid IV push (it can stop the heart) — it is always diluted and given slowly.",
        "Iodine — needed by the thyroid to make its hormones."
      ] },
      { h: "Intravenous (IV) fluids — purpose", p: "IV fluids are given to replace water and electrolytes, to maintain fluid balance when the patient cannot drink, and as a route for drugs. The choice depends on the patient's needs and blood results; giving too little causes dehydration, while giving too much causes fluid overload (breathlessness and swelling), so the rate is controlled and the patient is monitored." },
      { h: "Main types of IV fluid", list: [
        "Crystalloids — clear salt/sugar solutions, for example normal saline (0.9% sodium chloride), dextrose (glucose) solutions, and Ringer's lactate (a balanced electrolyte solution). They are the usual first choice for replacing fluid.",
        "Colloids — contain larger molecules that stay in the blood vessels longer to expand blood volume.",
        "Isotonic fluids (such as normal saline) match the body's concentration and are used for general replacement; the type must match the clinical need."
      ] },
      { h: "Blood and blood products", p: "Blood is given to replace serious loss or correct severe anaemia. Whole blood and, more commonly, separated products are used: packed red cells (to raise haemoglobin), platelets (to help clotting where platelets are low), fresh frozen plasma (clotting factors), and cryoprecipitate. Because blood is a living human tissue, transfusion carries real risks and demands strict checking." },
      { h: "Safe blood transfusion", list: [
        "The patient's blood group and cross-match must be correct; giving the wrong group causes a severe, sometimes fatal reaction.",
        "Two trained staff check the patient's identity against the blood unit and documentation at the bedside before starting.",
        "Record baseline vital signs (temperature, pulse, blood pressure, respiration) and monitor closely, especially in the first 15 minutes.",
        "Watch for a transfusion reaction: fever, chills, rash or itching, back or loin pain, breathlessness or a fall in blood pressure.",
        "If a reaction is suspected, STOP the transfusion at once, keep the line open with saline, and call for help.",
        "Use the correct giving set with a filter and give within the safe time limit; never add drugs to blood."
      ] },
      { h: "Nursing care — fluids, vitamins and minerals", list: [
        "Check the fluid, rate and additives against the prescription, and monitor intake and output.",
        "Watch for signs of fluid overload (breathlessness, swelling, raised pulse) and of dehydration.",
        "Give oral iron with vitamin C and warn about black stools; keep iron away from children.",
        "Never give concentrated potassium by direct IV push — always dilute and infuse slowly.",
        "Follow strict checking and monitoring for every blood transfusion."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "Differentiate between fat-soluble and water-soluble vitamins with examples.",
      "Describe the nursing points for a patient taking oral iron for anaemia.",
      "Name the main types of IV fluid and state when crystalloids are used.",
      "List the steps for the safe administration of a blood transfusion.",
      "What are the signs of a transfusion reaction and what should the nurse do first?"
    ],
    assessment: [
      { type: "mcq", q: "Which group of vitamins is stored in the body and can build up if taken in excess?", options: ["Water-soluble (B and C)", "Fat-soluble (A, D, E, K)", "All vitamins equally", "None are stored"], answer: 1, rationale: "Fat-soluble vitamins (A, D, E, K) are stored in body fat and can accumulate to toxic levels." },
      { type: "mcq", q: "Iron is needed by the body mainly to:", options: ["Make haemoglobin", "Build bones", "Help clotting", "Make thyroid hormone"], answer: 0, rationale: "Iron is essential for haemoglobin; deficiency causes anaemia." },
      { type: "mcq", q: "Oral iron is best absorbed when taken with:", options: ["Milk", "Vitamin C", "An antacid", "Tea"], answer: 1, rationale: "Vitamin C enhances iron absorption; milk, antacids and tea reduce it." },
      { type: "mcq", q: "Concentrated potassium chloride must NEVER be given by:", options: ["Slow diluted infusion", "Rapid intravenous push", "Mouth with food", "Diluted in a large bag of fluid"], answer: 1, rationale: "Rapid IV potassium can stop the heart; it must always be diluted and infused slowly." },
      { type: "mcq", q: "Normal saline (0.9% sodium chloride) is an example of a:", options: ["Colloid", "Crystalloid", "Blood product", "Vitamin solution"], answer: 1, rationale: "Normal saline is a crystalloid (a clear electrolyte solution) used for fluid replacement." },
      { type: "mcq", q: "Packed red blood cells are transfused mainly to:", options: ["Stop bleeding by clotting", "Raise the haemoglobin in anaemia or blood loss", "Replace clotting factors", "Provide platelets"], answer: 1, rationale: "Packed red cells increase oxygen-carrying capacity by raising haemoglobin." },
      { type: "mcq", q: "Before starting a blood transfusion, the patient's identity and the blood unit must be checked by:", options: ["One nurse alone", "Two trained staff at the bedside", "The patient only", "The porter"], answer: 1, rationale: "Two trained staff must verify identity and the unit at the bedside to prevent a wrong-blood reaction." },
      { type: "mcq", q: "If a transfusion reaction is suspected, the nurse's FIRST action is to:", options: ["Speed up the transfusion", "Stop the transfusion immediately", "Give the next unit", "Ignore it if mild"], answer: 1, rationale: "Stop the transfusion at once, keep the line open with saline, and summon help." },
      { type: "mcq", q: "A patient is monitored most closely during which part of a transfusion?", options: ["The last 5 minutes", "The first 15 minutes", "Only after it finishes", "It needs no monitoring"], answer: 1, rationale: "Most serious reactions appear early, so observation is most intense in the first 15 minutes." },
      { type: "mcq", q: "Which is a recognised sign of a transfusion reaction?", options: ["Fever, chills and back pain", "Hair growth", "Improved appetite", "Slow, deep sleep"], answer: 0, rationale: "Fever, chills, rash, loin/back pain, breathlessness or a falling blood pressure suggest a reaction." }
      , { type: "fill", q: "The vitamin needed for normal blood clotting, also used as the antidote to warfarin, is vitamin ____.", accept: ["k"], rationale: "Vitamin K is required for clotting factors and reverses warfarin." }
      , { type: "fill", q: "Iron deficiency leads to a low haemoglobin, a condition called ____.", accept: ["anaemia", "anemia", "iron deficiency anaemia", "iron deficiency anemia"], rationale: "Insufficient iron reduces haemoglobin, causing anaemia." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "ph-15-emergency-drugs",
    unit: "Unit 2 · Drugs Acting on Body Systems",
    title: "Emergency & Life-saving Drugs",
    readMinutes: 16,
    summary: "The key drugs used in emergencies — cardiac arrest, anaphylaxis, severe hypoglycaemia and poisoning — important antidotes, the emergency (crash) trolley, and the nurse's role in a resuscitation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Emergency drugs and the nurse's role", p: "Emergency (life-saving) drugs are given quickly in situations that threaten life, such as cardiac arrest, severe allergic reaction, very low blood sugar and poisoning. In an emergency the nurse must know where the drugs are, what they are used for, and how to give them safely and fast — often by the intravenous route. Speed, accuracy and teamwork save lives, and good records of what was given and when are essential." },
      { h: "Drugs in cardiac arrest", list: [
        "Adrenaline (epinephrine) — the main drug in cardiac arrest; it stimulates the heart and constricts vessels to support the circulation.",
        "Amiodarone — an antiarrhythmic used for certain shockable rhythms that do not respond to defibrillation.",
        "Atropine — used for a dangerously slow heart rate (severe bradycardia).",
        "These are given alongside chest compressions, oxygen and, where indicated, defibrillation."
      ] },
      { h: "Anaphylaxis (severe allergic reaction)", p: "Anaphylaxis is a sudden, severe, life-threatening allergic reaction with swelling, difficulty breathing and a falling blood pressure. The first and most important drug is adrenaline (epinephrine), given by intramuscular injection without delay; it opens the airways and raises the blood pressure. Oxygen, IV fluids, an antihistamine and a corticosteroid (such as hydrocortisone) are given as supportive treatment. The nurse must recognise anaphylaxis early and act at once." },
      { h: "Severe hypoglycaemia", p: "A patient with very low blood sugar who is unconscious or cannot swallow cannot be given sugar by mouth safely. Instead, glucagon is given by injection to raise the blood glucose, or glucose (dextrose) is given intravenously. As the patient recovers and can swallow, longer-acting carbohydrate is given to prevent the blood sugar falling again." },
      { h: "Important antidotes", p: "An antidote reverses the effect of a specific drug or poison. The nurse should know the common ones.", figure: {
        caption: "Common antidotes and what they reverse.",
        svg: '<svg viewBox="0 0 520 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table of common antidotes and the poisons they reverse."><rect x="20" y="20" width="480" height="34" fill="#7C2D12"/><text x="150" y="42" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">Antidote</text><text x="380" y="42" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">Reverses</text><rect x="20" y="54" width="480" height="32" fill="#FFF7ED" stroke="#B45309" stroke-width="1"/><text x="150" y="75" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Naloxone</text><text x="380" y="75" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Opioids (morphine)</text><rect x="20" y="86" width="480" height="32" fill="#FEF3C7" stroke="#B45309" stroke-width="1"/><text x="150" y="107" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Flumazenil</text><text x="380" y="107" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Benzodiazepines</text><rect x="20" y="118" width="480" height="32" fill="#FFF7ED" stroke="#B45309" stroke-width="1"/><text x="150" y="139" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Acetylcysteine</text><text x="380" y="139" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Paracetamol</text><rect x="20" y="150" width="480" height="32" fill="#FEF3C7" stroke="#B45309" stroke-width="1"/><text x="150" y="171" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Vitamin K</text><text x="380" y="171" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Warfarin</text><rect x="20" y="182" width="480" height="32" fill="#FFF7ED" stroke="#B45309" stroke-width="1"/><text x="150" y="203" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Protamine</text><text x="380" y="203" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Heparin</text></svg>'
      } },
      { h: "Other emergency drugs", list: [
        "Oxygen — given in almost every emergency to support breathing.",
        "Glyceryl trinitrate (GTN) — for acute angina (chest pain).",
        "Diazepam or lorazepam — to stop a prolonged seizure (status epilepticus).",
        "Furosemide — for acute pulmonary oedema (fluid in the lungs).",
        "Intravenous fluids — to treat shock and severe dehydration.",
        "Soluble (oral) aspirin — given early in a suspected heart attack unless contraindicated."
      ] },
      { h: "The emergency (crash) trolley", p: "Every clinical area keeps an emergency or 'crash' trolley holding the resuscitation drugs and equipment (airway and breathing equipment, oxygen, suction, IV supplies and a defibrillator). It is checked regularly so that nothing is missing, out of date or broken, and so that it is ready for instant use. Knowing the layout of the trolley in advance saves vital time in an emergency." },
      { h: "Nursing responsibilities in an emergency", list: [
        "Recognise the emergency early and call for help immediately.",
        "Start basic life support and bring the emergency trolley.",
        "Prepare and give the prescribed drugs accurately, checking dose and route even under pressure.",
        "Keep an accurate record of the time, drugs, doses and the patient's response.",
        "Keep the resuscitation skills and trolley checks up to date so you are always ready."
      ] }
    ],
    references: REF_PHARM,
    examQuestions: [
      "Name the key drugs used in cardiac arrest and their purpose.",
      "What is the first-line drug in anaphylaxis, and how is it given? List the supportive measures.",
      "How is severe hypoglycaemia treated in an unconscious patient?",
      "List five important antidotes and the substances they reverse.",
      "Describe the nurse's responsibilities and the role of the emergency (crash) trolley in a resuscitation."
    ],
    assessment: [
      { type: "mcq", q: "The main drug used in cardiac arrest is:", options: ["Paracetamol", "Adrenaline (epinephrine)", "Insulin", "Furosemide"], answer: 1, rationale: "Adrenaline (epinephrine) supports the circulation and is central to cardiac arrest management." },
      { type: "mcq", q: "The first and most important drug in anaphylaxis is:", options: ["An antihistamine tablet", "Adrenaline (epinephrine) by intramuscular injection", "Oral aspirin", "A laxative"], answer: 1, rationale: "Intramuscular adrenaline is given immediately in anaphylaxis to open the airway and raise blood pressure." },
      { type: "mcq", q: "An unconscious patient with severe hypoglycaemia should be given:", options: ["A sweet drink by mouth", "Glucagon injection or IV glucose", "Insulin", "Nothing until awake"], answer: 1, rationale: "Oral sugar is unsafe if the patient cannot swallow; glucagon or IV glucose raises blood sugar safely." },
      { type: "mcq", q: "The antidote for opioid overdose is:", options: ["Flumazenil", "Naloxone", "Vitamin K", "Protamine"], answer: 1, rationale: "Naloxone reverses opioids such as morphine, including their respiratory depression." },
      { type: "mcq", q: "Protamine sulfate is the antidote for:", options: ["Warfarin", "Heparin", "Paracetamol", "Digoxin"], answer: 1, rationale: "Protamine reverses heparin; vitamin K reverses warfarin." },
      { type: "mcq", q: "Which drug is used to stop a prolonged seizure (status epilepticus)?", options: ["Adrenaline", "Diazepam or lorazepam", "Insulin", "Atropine"], answer: 1, rationale: "A benzodiazepine such as diazepam or lorazepam is first-line to terminate a prolonged seizure." },
      { type: "mcq", q: "Soluble aspirin is given early in a suspected heart attack because it:", options: ["Relieves fever", "Reduces clotting (antiplatelet effect)", "Widens the bronchi", "Raises blood sugar"], answer: 1, rationale: "Aspirin's antiplatelet action helps in acute myocardial infarction (unless contraindicated)." },
      { type: "mcq", q: "The antidote for paracetamol poisoning is:", options: ["Acetylcysteine", "Naloxone", "Atropine", "Glucagon"], answer: 0, rationale: "Acetylcysteine is the antidote for paracetamol overdose, protecting the liver." },
      { type: "mcq", q: "The emergency (crash) trolley should be:", options: ["Checked once a year", "Checked regularly so nothing is missing or out of date", "Left unchecked until needed", "Used for general storage"], answer: 1, rationale: "Regular checks ensure the trolley is complete, in date and ready for instant use." },
      { type: "mcq", q: "Atropine may be used in an emergency to treat:", options: ["A dangerously slow heart rate (bradycardia)", "High blood sugar", "A fast heart rate", "Constipation"], answer: 0, rationale: "Atropine increases the heart rate and is used for severe symptomatic bradycardia." }
      , { type: "fill", q: "The antidote that reverses the effects of a benzodiazepine overdose is ____.", accept: ["flumazenil"], rationale: "Flumazenil is the specific benzodiazepine antidote." }
      , { type: "fill", q: "In an unconscious hypoglycaemic patient, the hormone given by injection to raise the blood sugar is ____.", accept: ["glucagon"], rationale: "Glucagon raises blood glucose and is used when the patient cannot take sugar by mouth." }
    ]
  }
];
