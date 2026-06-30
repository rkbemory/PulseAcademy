/* ============================================================
   Diploma in Nursing · D231 Medical & Surgical Nursing
   — 20 topics. Aligned to the BNMC Diploma in Nursing (Year 2)
   syllabus: foundations of MS nursing, perioperative & shock,
   disorders of body systems, and special areas (burns, oncology,
   communicable disease, critical care). Grounded in standard texts:
     • Smeltzer SC, Bare BG, Hinkle JL, Cheever KH. Brunner &
       Suddarth's Textbook of Medical-Surgical Nursing. Lippincott
       Williams & Wilkins.
     • Lewis SL, Dirksen SR, Heitkemper MM, Bucher L. Medical-
       Surgical Nursing: Assessment and Management of Clinical
       Problems. Elsevier/Mosby.
     • Linton AD. Introduction to Medical-Surgical Nursing.
       Elsevier Saunders.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_MSN = [
  "Smeltzer SC, Bare BG, Hinkle JL, Cheever KH. Brunner & Suddarth's Textbook of Medical-Surgical Nursing. Lippincott Williams & Wilkins.",
  "Lewis SL, Dirksen SR, Heitkemper MM, Bucher L. Medical-Surgical Nursing: Assessment and Management of Clinical Problems. Elsevier/Mosby.",
  "Linton AD. Introduction to Medical-Surgical Nursing. Elsevier Saunders."
];

window.Academic.topics["diploma-nursing/medical-surgical-nursing"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "msn-01-intro-assessment",
    unit: "Unit 1 · Foundations of MS Nursing",
    title: "Introduction to Medical-Surgical Nursing & Physical Assessment",
    readMinutes: 15,
    summary: "The scope of medical-surgical nursing, acute versus chronic illness, the nursing process, and a systematic head-to-toe physical assessment using the four techniques.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is medical-surgical nursing?", p: "Medical-surgical (adult health) nursing is the care of adult patients with medical conditions (treated mainly with medicines and supportive care) and surgical conditions (treated by operation). The nurse cares for the whole person, not just the disease, addressing physical, psychological, social and spiritual needs. It is the broadest field of nursing and the foundation for all specialty areas." },
      { h: "Acute versus chronic illness", list: [
        "Acute illness — comes on suddenly, lasts a short time and is usually reversible (for example, appendicitis or pneumonia). Care is often curative.",
        "Chronic illness — develops slowly, lasts a long time (often lifelong) and may not be curable (for example, diabetes or hypertension). Care focuses on control, preventing complications and self-management.",
        "Many patients live with both at once — an acute flare on a background of chronic disease."
      ] },
      { h: "The nursing process", p: "The nursing process is a systematic, problem-solving method used to plan and give care. It has five steps that form a continuous cycle: Assessment (collect data), Diagnosis (identify the patient's problems), Planning (set goals and choose interventions), Implementation (carry out care), and Evaluation (judge whether goals were met). It keeps care organised, individualised and patient-centred.", figure: {
        caption: "The five steps of the nursing process form a continuous cycle.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The nursing process cycle: assessment, diagnosis, planning, implementation, evaluation."><defs><marker id="msnArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="10" y="75" width="96" height="50" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="58" y="98" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Assess</text><text x="58" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">collect data</text><rect x="125" y="75" width="96" height="50" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="173" y="98" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Diagnose</text><text x="173" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">find problems</text><rect x="240" y="75" width="96" height="50" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="288" y="98" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">Plan</text><text x="288" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">set goals</text><rect x="355" y="75" width="96" height="50" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="403" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Implement</text><text x="403" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">give care</text><rect x="455" y="75" width="96" height="50" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="503" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Evaluate</text><text x="503" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">judge result</text><line x1="106" y1="100" x2="123" y2="100" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr1)"/><line x1="221" y1="100" x2="238" y2="100" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr1)"/><line x1="336" y1="100" x2="353" y2="100" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr1)"/><line x1="451" y1="100" x2="453" y2="100" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr1)"/><path d="M503 75 C503 30 58 30 58 73" fill="none" stroke="#B45309" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#msnArr1)"/></svg>'
      } },
      { h: "Subjective and objective data", p: "Assessment collects two kinds of data. Subjective data are what the patient says — symptoms, feelings and history (for example, 'I have chest pain'). Objective data are what the nurse observes and measures — signs such as vital signs, skin colour, swelling and laboratory results. Good assessment uses both and checks that they agree." },
      { h: "The four assessment techniques", list: [
        "Inspection — looking carefully at the patient (colour, shape, symmetry, movement, swelling).",
        "Palpation — feeling with the hands (temperature, tenderness, lumps, pulses).",
        "Percussion — tapping the body surface to judge what lies beneath by the sound produced.",
        "Auscultation — listening with a stethoscope (heart, lungs, bowel sounds).",
        "Order is usually inspection → palpation → percussion → auscultation, EXCEPT for the abdomen, where auscultation is done before palpation so that touching does not alter bowel sounds."
      ] },
      { h: "Vital signs and general survey", p: "Vital signs — temperature, pulse, respiration, blood pressure and oxygen saturation — give a quick picture of the patient's condition and are recorded regularly. Pain is often called the 'fifth vital sign'. The general survey notes overall appearance, level of consciousness, body build, posture, hygiene and any obvious distress." },
      { h: "Health history", p: "A nursing health history is collected by interview. It includes the chief complaint (the main reason for seeking care), history of the present illness, past medical and surgical history, medicines and allergies, family history, and a social history (occupation, habits such as smoking and alcohol, and living situation). It guides the focused physical examination." },
      { h: "Holistic, patient-centred care", p: "The nurse respects the patient's dignity, culture, beliefs and right to make decisions. Care is planned with the patient, communication is clear and honest, confidentiality is maintained, and the family is involved where appropriate. This holistic approach improves trust, cooperation and outcomes." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define medical-surgical nursing and differentiate between acute and chronic illness with examples.",
      "Describe the five steps of the nursing process.",
      "Explain the four techniques of physical examination and state the exception in abdominal assessment.",
      "Differentiate between subjective and objective data with examples.",
      "List the components of a nursing health history."
    ],
    assessment: [
      { type: "mcq", q: "Which technique uses a stethoscope to listen to body sounds?", options: ["Inspection", "Palpation", "Percussion", "Auscultation"], answer: 3, rationale: "Auscultation is listening to internal sounds (heart, lungs, bowel) with a stethoscope." },
      { type: "mcq", q: "The statement 'I feel short of breath' is an example of:", options: ["Objective data", "A nursing diagnosis", "An intervention", "Subjective data"], answer: 3, rationale: "Subjective data are what the patient reports; the nurse cannot directly measure the feeling." },
      { type: "mcq", q: "What is the correct order of assessment for MOST body regions?", options: ["Inspection, palpation, percussion, auscultation", "Auscultation, inspection, palpation, percussion", "Palpation, inspection, auscultation, percussion", "Percussion, auscultation, inspection, palpation"], answer: 0, rationale: "The usual sequence is inspection, palpation, percussion, then auscultation." },
      { type: "mcq", q: "When assessing the abdomen, auscultation is performed BEFORE palpation because:", options: ["It is faster", "Palpation can alter bowel sounds", "The stethoscope is sterile", "It is more comfortable"], answer: 1, rationale: "Touching or pressing the abdomen can change bowel sounds, so listening is done first." },
      { type: "mcq", q: "Which is the FIRST step of the nursing process?", options: ["Planning", "Diagnosis", "Assessment", "Evaluation"], answer: 2, rationale: "Assessment (data collection) comes first and guides every later step." },
      { type: "mcq", q: "A chronic illness is best described as one that:", options: ["Comes on suddenly and resolves quickly", "Always requires surgery", "Lasts a long time and is often not curable", "Affects only older adults"], answer: 2, rationale: "Chronic illness is long-lasting, develops slowly and is usually managed rather than cured." },
      { type: "mcq", q: "Feeling for tenderness, lumps and pulses with the hands is called:", options: ["Inspection", "Percussion", "Palpation", "Auscultation"], answer: 2, rationale: "Palpation uses the hands to assess texture, temperature, tenderness and masses." },
      { type: "mcq", q: "Pain is frequently referred to as the:", options: ["First vital sign", "Sixth sense", "Objective sign", "Fifth vital sign"], answer: 3, rationale: "Pain is often called the fifth vital sign and should be assessed and recorded regularly." },
      { type: "mcq", q: "The MAIN reason the patient is seeking care is the:", options: ["Family history", "Chief complaint", "Social history", "Review of systems"], answer: 1, rationale: "The chief complaint is the patient's main reason for the visit, stated in their own words." },
      { type: "mcq", q: "Tapping the body surface to judge underlying structures by sound is:", options: ["Auscultation", "Palpation", "Percussion", "Inspection"], answer: 2, rationale: "Percussion produces sounds that reveal whether tissue beneath is solid, hollow or fluid-filled." }
      , { type: "fill", q: "Data that the nurse can see and measure, such as blood pressure, are called ____ data.", accept: ["objective"], rationale: "Objective data are observable and measurable signs, unlike subjective reports." }
      , { type: "fill", q: "The systematic five-step method used to plan and deliver patient care is the nursing ____.", accept: ["process"], rationale: "The nursing process (assess, diagnose, plan, implement, evaluate) organises care." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "msn-02-fluid-electrolyte",
    unit: "Unit 1 · Foundations of MS Nursing",
    title: "Fluid, Electrolyte & Acid-Base Balance",
    readMinutes: 16,
    summary: "Body fluid compartments, the major electrolytes and their imbalances, the principles of fluid movement, and an introduction to acid-base balance and its disturbances.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Body water and fluid compartments", p: "Water makes up about 60% of an adult's body weight. It is divided into two main compartments: intracellular fluid (ICF) inside the cells (about two-thirds of body water) and extracellular fluid (ECF) outside the cells (about one-third). ECF is further divided into plasma (inside blood vessels) and interstitial fluid (between the cells). Balance between these compartments keeps cells working normally." },
      { h: "How fluids move", list: [
        "Diffusion — solutes move from a higher to a lower concentration.",
        "Osmosis — water moves across a membrane from a lower to a higher solute concentration.",
        "Filtration — fluid is pushed across a membrane by pressure (as in capillaries and kidneys).",
        "Active transport — moves substances against their gradient using energy (for example, the sodium-potassium pump)."
      ] },
      { h: "Fluid volume imbalances", list: [
        "Hypovolaemia (fluid volume deficit) — loss of water and electrolytes from vomiting, diarrhoea, bleeding or poor intake. Signs: thirst, dry mucous membranes, low blood pressure, fast weak pulse, reduced urine output, poor skin turgor and weight loss.",
        "Hypervolaemia (fluid volume excess) — too much fluid from heart or kidney failure or excess IV fluids. Signs: oedema, raised blood pressure, distended neck veins, crackles in the lungs, breathlessness and weight gain."
      ] },
      { h: "Sodium (135-145 mmol/L)", p: "Sodium is the main electrolyte of the ECF and controls fluid balance and nerve and muscle function. Hyponatraemia (low sodium) causes confusion, headache, nausea, muscle cramps and, if severe, seizures. Hypernatraemia (high sodium) causes thirst, dry sticky mucous membranes, restlessness and, if severe, neurological signs. Sodium and water balance are closely linked." },
      { h: "Potassium (3.5-5.0 mmol/L)", p: "Potassium is the main intracellular electrolyte and is vital for heart rhythm and muscle function. Hypokalaemia (low potassium) causes muscle weakness, fatigue, cramps and dangerous cardiac arrhythmias. Hyperkalaemia (high potassium) also causes weakness and can cause life-threatening arrhythmias and cardiac arrest. Potassium given intravenously must ALWAYS be diluted and infused slowly — never given as a rapid IV push." },
      { h: "Calcium and other electrolytes", list: [
        "Calcium — needed for bones, clotting, and nerve and muscle function. Low calcium causes muscle twitching, tetany and a positive Chvostek/Trousseau sign; high calcium causes weakness, constipation and kidney stones.",
        "Magnesium — needed for muscle and nerve function and heart rhythm; works closely with potassium and calcium.",
        "Phosphate — works inversely with calcium and is important for bones and energy."
      ] },
      { h: "Acid-base balance and pH", p: "The blood is normally slightly alkaline, with a pH of 7.35-7.45. The body keeps pH steady using three systems: chemical buffers (mainly bicarbonate), the lungs (which control carbon dioxide, an acid, by breathing), and the kidneys (which control bicarbonate and hydrogen ions). A pH below 7.35 is acidosis; above 7.45 is alkalosis." },
      { h: "The four acid-base disturbances", list: [
        "Respiratory acidosis — too much CO2 (slow or poor breathing, as in COPD); pH low.",
        "Respiratory alkalosis — too little CO2 (fast breathing/hyperventilation); pH high.",
        "Metabolic acidosis — gain of acid or loss of bicarbonate (diarrhoea, kidney failure, diabetic ketoacidosis); pH low.",
        "Metabolic alkalosis — loss of acid or gain of bicarbonate (vomiting, excess antacids); pH high.",
        "The lungs and kidneys try to compensate to bring pH back toward normal."
      ] },
      { h: "Nursing responsibilities", list: [
        "Record accurate intake and output and daily weight (1 litre of fluid is about 1 kg).",
        "Monitor vital signs, level of consciousness, skin turgor and oedema.",
        "Watch laboratory electrolyte and blood gas results and report abnormal values.",
        "Give IV fluids and electrolytes safely at the prescribed rate.",
        "Watch the heart rhythm in potassium, calcium and magnesium imbalances."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the body fluid compartments and the processes by which fluids move between them.",
      "Differentiate between fluid volume deficit and fluid volume excess, listing the signs of each.",
      "Discuss the causes, signs and nursing care of hypokalaemia and hyperkalaemia.",
      "Explain acid-base balance and name the four primary acid-base disturbances.",
      "Outline the nursing responsibilities in caring for a patient with fluid and electrolyte imbalance."
    ],
    assessment: [
      { type: "mcq", q: "Approximately what percentage of an adult's body weight is water?", options: ["20%", "40%", "60%", "80%"], answer: 2, rationale: "Water makes up about 60% of adult body weight." },
      { type: "mcq", q: "The movement of WATER across a membrane from low to high solute concentration is:", options: ["Diffusion", "Filtration", "Active transport", "Osmosis"], answer: 3, rationale: "Osmosis is specifically the movement of water across a semipermeable membrane toward higher solute concentration." },
      { type: "mcq", q: "Which sign is typical of fluid volume DEFICIT (hypovolaemia)?", options: ["Bounding pulse and oedema", "Distended neck veins", "Poor skin turgor and low blood pressure", "Weight gain and crackles"], answer: 2, rationale: "Fluid deficit causes poor skin turgor, hypotension, a fast weak pulse and weight loss." },
      { type: "mcq", q: "The normal serum potassium range is approximately:", options: ["1.0-2.0 mmol/L", "8.5-10.5 mmol/L", "3.5-5.0 mmol/L", "135-145 mmol/L"], answer: 2, rationale: "Normal serum potassium is about 3.5-5.0 mmol/L." },
      { type: "mcq", q: "A critical safety rule when giving potassium intravenously is that it must:", options: ["Be given as a rapid IV push", "Be given undiluted for speed", "Be mixed with calcium", "Always be diluted and given slowly"], answer: 3, rationale: "IV potassium must be diluted and infused slowly; rapid IV push can cause fatal cardiac arrest." },
      { type: "mcq", q: "The normal pH of arterial blood is:", options: ["6.80-7.00", "7.00-7.20", "7.35-7.45", "7.60-7.80"], answer: 2, rationale: "Normal arterial blood pH is 7.35-7.45, slightly alkaline." },
      { type: "mcq", q: "Hyperventilation that 'blows off' too much carbon dioxide leads to:", options: ["Respiratory acidosis", "Respiratory alkalosis", "Metabolic acidosis", "Metabolic alkalosis"], answer: 1, rationale: "Losing CO2 (an acid) by fast breathing raises pH, causing respiratory alkalosis." },
      { type: "mcq", q: "Prolonged vomiting most directly causes:", options: ["Metabolic acidosis", "Respiratory acidosis", "Metabolic alkalosis", "Respiratory alkalosis"], answer: 2, rationale: "Vomiting loses gastric acid (HCl), raising bicarbonate and pH — metabolic alkalosis." },
      { type: "mcq", q: "The main electrolyte found inside the cells (intracellular fluid) is:", options: ["Sodium", "Potassium", "Calcium", "Chloride"], answer: 1, rationale: "Potassium is the principal intracellular cation; sodium dominates the extracellular fluid." },
      { type: "mcq", q: "A roughly 1 kg gain in daily body weight usually indicates retention of about:", options: ["100 mL of fluid", "500 mL of fluid", "1 litre of fluid", "5 litres of fluid"], answer: 2, rationale: "About 1 litre of fluid weighs roughly 1 kg, so daily weight is a sensitive guide to fluid status." }
      , { type: "fill", q: "A blood pH below 7.35 is called ____.", accept: ["acidosis"], rationale: "Acidosis is an arterial pH below the normal lower limit of 7.35." }
      , { type: "fill", q: "The fluid located inside the body's cells is called ____ fluid.", accept: ["intracellular", "intracellular fluid", "ICF"], rationale: "Intracellular fluid (ICF) lies within the cells and holds about two-thirds of body water." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "msn-03-inflammation-wound",
    unit: "Unit 1 · Foundations of MS Nursing",
    title: "Inflammation, Infection & Wound Care",
    readMinutes: 15,
    summary: "The inflammatory response and its cardinal signs, the chain of infection and asepsis, types and phases of wound healing, and the principles of wound assessment and dressing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Inflammation", p: "Inflammation is the body's normal, protective response to injury or infection. It aims to remove the harmful agent, limit damage and begin healing. It can be acute (short and self-limiting) or chronic (long-lasting, as in tuberculosis or rheumatoid arthritis). Inflammation is a process, not a disease, and is not the same as infection — though infection always causes inflammation." },
      { h: "Cardinal signs of inflammation", list: [
        "Redness (rubor) — from increased blood flow.",
        "Heat (calor) — from increased blood flow.",
        "Swelling (tumor) — from fluid leaking into the tissues.",
        "Pain (dolor) — from pressure and chemical mediators.",
        "Loss of function — the part is used less because of pain and swelling."
      ] },
      { h: "The chain of infection", p: "Infection spreads through six linked steps, the 'chain of infection': (1) infectious agent (germ), (2) reservoir (where it lives, e.g. a person), (3) portal of exit (how it leaves, e.g. coughing), (4) mode of transmission (how it travels, e.g. hands or droplets), (5) portal of entry (how it enters the next host, e.g. a wound), and (6) susceptible host. Breaking any link stops the spread; hand hygiene breaks the most common link — transmission.", figure: {
        caption: "The chain of infection — breaking any link prevents the spread of infection.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six links in the chain of infection."><defs><marker id="msnArr3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="15" y="20" width="150" height="42" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="90" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">1. Agent (germ)</text><rect x="200" y="20" width="150" height="42" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="275" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">2. Reservoir</text><rect x="385" y="20" width="160" height="42" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="465" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">3. Portal of exit</text><rect x="385" y="90" width="160" height="42" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="465" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">4. Transmission</text><rect x="200" y="90" width="150" height="42" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="275" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">5. Portal of entry</text><rect x="15" y="90" width="150" height="42" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="90" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">6. Host</text><line x1="165" y1="41" x2="198" y2="41" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr3)"/><line x1="350" y1="41" x2="383" y2="41" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr3)"/><line x1="465" y1="62" x2="465" y2="88" stroke="#B45309" stroke-width="2.5" marker-end="url(#msnArr3)"/><line x1="385" y1="111" x2="352" y2="111" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr3)"/><line x1="200" y1="111" x2="167" y2="111" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr3)"/><path d="M90 90 C90 76 90 76 90 64" fill="none" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr3)"/></svg>'
      } },
      { h: "Asepsis and infection control", list: [
        "Medical asepsis (clean technique) — reduces the number of germs (hand hygiene, gloves, cleaning surfaces).",
        "Surgical asepsis (sterile technique) — removes ALL germs; used for invasive procedures, dressings and surgery.",
        "Hand hygiene is the single most effective measure to prevent infection.",
        "Standard precautions are used for ALL patients; personal protective equipment (PPE) and safe sharps disposal protect staff and patients."
      ] },
      { h: "Types of wounds", p: "Wounds may be classified by cause and contamination. An incised wound is a clean cut (as in surgery); a laceration is a torn, jagged wound; an abrasion is a graze of the surface; a puncture is a deep narrow wound; and a contusion is a bruise with intact skin. Wounds are also graded as clean, clean-contaminated, contaminated or dirty/infected, which predicts the risk of infection." },
      { h: "Phases of wound healing", list: [
        "Haemostasis — bleeding stops as blood vessels constrict and a clot forms.",
        "Inflammatory phase — white cells clean the wound; redness and swelling occur (about days 1-4).",
        "Proliferative phase — new tissue (granulation) and blood vessels form and the wound contracts (about days 4-21).",
        "Maturation (remodelling) phase — the scar strengthens and remodels over weeks to months."
      ] },
      { h: "Types of healing", list: [
        "Primary intention — clean wound edges held together (sutured surgical wound); heals fast with little scarring.",
        "Secondary intention — a wound with tissue loss heals from the bottom up by granulation (pressure ulcer); slower, more scarring.",
        "Tertiary intention (delayed primary) — the wound is left open at first (often because of infection) and closed later."
      ] },
      { h: "Wound assessment and dressing", list: [
        "Assess size, depth, edges, the wound bed (granulation, slough, necrosis), exudate (amount, colour, odour) and surrounding skin.",
        "Watch for signs of wound infection — increasing pain, redness, heat, swelling, purulent discharge, foul odour and fever.",
        "Clean from the cleanest to the dirtiest area; use sterile technique for open or surgical wounds.",
        "Keep the wound moist but not wet, choose the dressing to suit the wound, and support healing with good nutrition (protein, vitamin C, zinc), hydration and blood-sugar control."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the inflammatory response and list its five cardinal signs.",
      "Explain the six links in the chain of infection and how nursing actions can break them.",
      "Differentiate between medical asepsis and surgical asepsis with examples.",
      "Describe the four phases of wound healing.",
      "Discuss the principles of wound assessment and the signs of wound infection."
    ],
    assessment: [
      { type: "mcq", q: "Which of the following is NOT one of the cardinal signs of inflammation?", options: ["Redness", "Heat", "Pallor", "Swelling"], answer: 2, rationale: "The cardinal signs are redness, heat, swelling, pain and loss of function; pallor is not one of them." },
      { type: "mcq", q: "The single most effective measure to prevent the spread of infection is:", options: ["Wearing a mask", "Giving antibiotics", "Isolating every patient", "Hand hygiene"], answer: 3, rationale: "Hand hygiene breaks the transmission link and is the most effective infection-control measure." },
      { type: "mcq", q: "A clean surgical wound whose edges are sutured together heals by:", options: ["Secondary intention", "Tertiary intention", "Primary intention", "Granulation"], answer: 2, rationale: "Wounds with closely approximated edges heal by primary intention with minimal scarring." },
      { type: "mcq", q: "Which phase of wound healing involves formation of granulation tissue?", options: ["Haemostasis", "Inflammatory phase", "Proliferative phase", "Maturation phase"], answer: 2, rationale: "Granulation tissue and new vessels form during the proliferative phase." },
      { type: "mcq", q: "Removing ALL microorganisms using sterile technique is called:", options: ["Medical asepsis", "Disinfection", "Surgical asepsis", "Standard precaution"], answer: 2, rationale: "Surgical asepsis (sterile technique) eliminates all microorganisms for invasive procedures." },
      { type: "mcq", q: "A torn, jagged wound is termed a/an:", options: ["Incision", "Abrasion", "Laceration", "Contusion"], answer: 2, rationale: "A laceration is a wound with torn, irregular edges; an incision is a clean cut." },
      { type: "mcq", q: "Purulent (pus) discharge, increasing pain and fever in a wound suggest:", options: ["Normal healing", "Maturation", "Haemostasis", "Wound infection"], answer: 3, rationale: "Purulent drainage, increasing pain, redness and fever indicate wound infection." },
      { type: "mcq", q: "When cleaning a wound, the nurse should wipe:", options: ["From dirtiest to cleanest area", "In any direction", "From cleanest to dirtiest area", "Only in circles outward then back"], answer: 2, rationale: "Cleaning from the cleanest (wound) to the dirtiest (outer) area avoids carrying contamination into the wound." },
      { type: "mcq", q: "Which nutrient is especially important for collagen formation and wound healing?", options: ["Vitamin C", "Vitamin K", "Vitamin D", "Calcium"], answer: 0, rationale: "Vitamin C is needed for collagen synthesis; protein and zinc are also important for healing." },
      { type: "mcq", q: "In the chain of infection, a cough that expels droplets is an example of a:", options: ["Reservoir", "Portal of exit", "Susceptible host", "Mode of entry"], answer: 1, rationale: "The portal of exit is the route by which the organism leaves the reservoir, such as coughing." }
      , { type: "fill", q: "A wound that heals slowly from the base by granulation, with tissue loss, heals by ____ intention.", accept: ["secondary"], rationale: "Open wounds with tissue loss heal by secondary intention, filling in by granulation." }
      , { type: "fill", q: "The body's protective response to injury, shown by redness, heat, swelling and pain, is called ____.", accept: ["inflammation"], rationale: "Inflammation is the protective tissue response with the classic cardinal signs." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "msn-04-pain-management",
    unit: "Unit 1 · Foundations of MS Nursing",
    title: "Pain Management",
    readMinutes: 14,
    summary: "The nature and types of pain, pain assessment using rating scales, the WHO analgesic ladder, and pharmacological and non-pharmacological nursing management of pain.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is pain?", p: "Pain is an unpleasant sensory and emotional experience linked to actual or potential tissue damage. It is whatever the patient says it is, occurring whenever the patient says it does — pain is subjective. It is the most common reason people seek health care and, untreated, it delays recovery, disturbs sleep and lowers quality of life." },
      { h: "Types of pain", list: [
        "Acute pain — sudden, short-lived, with a clear cause (surgery, injury); usually resolves as healing occurs.",
        "Chronic pain — lasts beyond the normal healing time (often more than 3 months); may have no obvious ongoing cause and affects mood and function.",
        "Nociceptive pain — from tissue damage; may be somatic (skin, muscle, bone — sharp, well localised) or visceral (organs — dull, deep, poorly localised).",
        "Neuropathic pain — from nerve damage; burning, shooting or tingling (as in diabetes or shingles)."
      ] },
      { h: "Pain assessment", p: "Assessment is the key to good pain control. A useful guide is PQRST: Provoking/relieving factors, Quality (sharp, dull, burning), Region/Radiation, Severity, and Timing. Severity is rated with a tool such as the 0-10 numeric scale (0 = no pain, 10 = worst pain), a faces scale for children or non-verbal adults, or a behavioural scale (grimacing, guarding, restlessness) when the patient cannot speak. Reassess after every intervention." },
      { h: "The WHO analgesic ladder", p: "The World Health Organization analgesic ladder is a stepwise guide to choosing analgesia by pain severity. Step 1 (mild pain): non-opioids such as paracetamol and NSAIDs. Step 2 (moderate pain): weak opioids (such as codeine or tramadol) with or without non-opioids. Step 3 (severe pain): strong opioids such as morphine, with or without non-opioids. Adjuvant drugs (for example, antidepressants or anticonvulsants for neuropathic pain) may be added at any step.", figure: {
        caption: "The WHO three-step analgesic ladder, matching analgesia to pain severity.",
        svg: '<svg viewBox="0 0 520 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WHO three-step analgesic ladder."><rect x="40" y="160" width="160" height="55" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="120" y="183" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Step 1</text><text x="120" y="202" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Non-opioid (mild)</text><rect x="120" y="105" width="160" height="55" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="200" y="128" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Step 2</text><text x="200" y="147" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Weak opioid (moderate)</text><rect x="200" y="50" width="160" height="55" fill="#B45309" stroke="#7C2D12" stroke-width="2"/><text x="280" y="73" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">Step 3</text><text x="280" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FFF7ED">Strong opioid (severe)</text><text x="385" y="40" font-family="sans-serif" font-size="11" fill="#7C2D12">Pain</text><text x="385" y="54" font-family="sans-serif" font-size="11" fill="#7C2D12">increasing</text><path d="M375 60 L375 200" stroke="#7C2D12" stroke-width="2" marker-end="url(#msnArrL)"/><defs><marker id="msnArrL" markerWidth="9" markerHeight="9" refX="4" refY="8" orient="auto"><path d="M0 9L4.5 0L9 9z" fill="#7C2D12"/></marker></defs></svg>'
      } },
      { h: "Non-pharmacological methods", list: [
        "Positioning, rest and a calm, quiet environment.",
        "Heat and cold application (where appropriate).",
        "Relaxation, deep breathing, distraction and guided imagery.",
        "Massage and gentle exercise or physiotherapy.",
        "Emotional support, reassurance and patient education — anxiety worsens pain."
      ] },
      { h: "Safe use of analgesics", list: [
        "Give analgesia regularly ('by the clock') for continuous pain rather than only when pain is severe.",
        "Paracetamol is safe at normal doses but overdose causes liver damage; stay within the maximum daily dose.",
        "NSAIDs (such as ibuprofen) can cause stomach irritation, bleeding and kidney problems; give with food and use cautiously.",
        "Opioids (such as morphine) relieve severe pain but can cause sedation, constipation, nausea and, most dangerously, respiratory depression."
      ] },
      { h: "Monitoring opioids", p: "When opioids are given, monitor the respiratory rate, level of sedation and pain score. A falling respiratory rate with increasing sedation is an early warning of dangerous respiratory depression and must be reported at once. Naloxone is the antidote that reverses opioid effects. Prevent and treat constipation routinely, as it almost always accompanies opioid use." },
      { h: "Nursing role and barriers", p: "The nurse believes the patient's report of pain, assesses regularly, gives prescribed analgesia, uses non-drug measures, evaluates the response and teaches the patient and family. Barriers to good pain control include fear of addiction (very rare when opioids are used properly for genuine pain), the wrong belief that pain must be endured, and failure to assess. The nurse must overcome these so that patients receive adequate relief." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define pain and differentiate between acute and chronic pain.",
      "Describe the methods of pain assessment, including at least one pain rating scale.",
      "Explain the WHO analgesic ladder with examples of drugs at each step.",
      "List five non-pharmacological methods of pain relief.",
      "Discuss the nursing care and safety monitoring of a patient receiving opioid analgesia."
    ],
    assessment: [
      { type: "mcq", q: "The most reliable indicator of a patient's pain is:", options: ["The patient's own report", "The nurse's observation", "The blood pressure reading", "The type of surgery"], answer: 0, rationale: "Pain is subjective; the patient's self-report is the most reliable indicator." },
      { type: "mcq", q: "Burning, shooting pain caused by nerve damage is called:", options: ["Somatic pain", "Visceral pain", "Neuropathic pain", "Referred pain"], answer: 2, rationale: "Neuropathic pain arises from nerve damage and is typically burning, shooting or tingling." },
      { type: "mcq", q: "On the WHO analgesic ladder, Step 1 (mild pain) uses:", options: ["Strong opioids", "Weak opioids", "Non-opioids such as paracetamol", "Anaesthetic agents"], answer: 2, rationale: "Step 1 uses non-opioid analgesics such as paracetamol and NSAIDs for mild pain." },
      { type: "mcq", q: "The MOST dangerous adverse effect of opioids that nurses must monitor is:", options: ["Constipation", "Nausea", "Respiratory depression", "Dry mouth"], answer: 2, rationale: "Respiratory depression is the most life-threatening opioid effect and must be monitored closely." },
      { type: "mcq", q: "The antidote that reverses opioid overdose is:", options: ["Atropine", "Naloxone", "Adrenaline", "Flumazenil"], answer: 1, rationale: "Naloxone is the opioid antagonist used to reverse opioid-induced respiratory depression." },
      { type: "mcq", q: "Chronic pain is generally defined as pain lasting longer than:", options: ["1 week", "2 weeks", "1 month", "3 months"], answer: 3, rationale: "Pain persisting beyond about 3 months (the expected healing time) is classed as chronic." },
      { type: "mcq", q: "In the PQRST assessment, the letter 'S' stands for:", options: ["Site", "Symptom", "Sensation", "Severity"], answer: 3, rationale: "In PQRST, S = Severity (the intensity of the pain), often rated 0-10." },
      { type: "mcq", q: "For continuous pain, analgesia is best given:", options: ["Only when the patient screams", "Once a day", "Regularly by the clock", "Only at night"], answer: 2, rationale: "Regular 'by the clock' dosing keeps pain controlled better than waiting for severe pain." },
      { type: "mcq", q: "Dull, deep, poorly localised pain arising from internal organs is:", options: ["Somatic pain", "Neuropathic pain", "Visceral pain", "Phantom pain"], answer: 2, rationale: "Visceral pain from organs is typically deep, dull and hard to localise." },
      { type: "mcq", q: "Which is a NON-pharmacological method of pain relief?", options: ["Morphine injection", "Ibuprofen tablet", "Relaxation and distraction", "Paracetamol syrup"], answer: 2, rationale: "Relaxation, distraction, heat/cold and positioning are non-drug pain-relief methods." }
      , { type: "fill", q: "The opioid drug commonly used for severe pain at Step 3 of the WHO ladder is ____.", accept: ["morphine"], rationale: "Morphine is the prototype strong opioid used for severe pain." }
      , { type: "fill", q: "Overdose of the non-opioid analgesic ____ can cause serious liver damage.", accept: ["paracetamol", "acetaminophen"], rationale: "Paracetamol (acetaminophen) overdose is hepatotoxic and can cause liver failure." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "msn-05-perioperative",
    unit: "Unit 1 · Foundations of MS Nursing",
    title: "Perioperative Nursing (Pre-, Intra- & Post-operative Care)",
    readMinutes: 17,
    summary: "Care of the surgical patient across the three perioperative phases: pre-operative assessment, consent and preparation; intra-operative asepsis and safety; and post-operative monitoring and complication prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The perioperative period", p: "Perioperative nursing covers the whole surgical experience in three phases: the pre-operative phase (from the decision to operate until the patient enters the operating room), the intra-operative phase (during the operation), and the post-operative phase (from arrival in recovery until full recovery). The aim throughout is patient safety and the best possible outcome." },
      { h: "Pre-operative assessment", list: [
        "Take a full history and physical assessment, including medicines, allergies and past anaesthesia.",
        "Check baseline vital signs and investigations (blood tests, ECG, chest X-ray as ordered).",
        "Identify risk factors — age, obesity, smoking, diabetes, heart or lung disease and bleeding tendency.",
        "Assess the patient's understanding and emotional state; surgery causes fear and anxiety."
      ] },
      { h: "Informed consent", p: "Informed consent is the patient's voluntary agreement to surgery after the surgeon has explained the procedure, its benefits, risks and alternatives in language the patient understands. The surgeon obtains the consent; the nurse witnesses the signature and confirms the patient understands and is not sedated when signing. Consent protects the patient's right to decide and is a legal requirement." },
      { h: "Pre-operative preparation", list: [
        "Pre-operative teaching — explain what to expect, and teach deep breathing, coughing, leg exercises and early mobilisation to prevent complications.",
        "Keep the patient nil by mouth (NPO/fasting) before surgery to prevent aspiration during anaesthesia.",
        "Skin preparation — clean and, if ordered, clip (not shave) hair at the site to reduce infection.",
        "Give bowel preparation, an enema or a urinary catheter only if ordered; empty the bladder before transfer.",
        "Remove dentures, jewellery, nail polish and prostheses; check the identity band and the marked operative site.",
        "Give pre-medication as prescribed and complete the pre-operative checklist."
      ] },
      { h: "Intra-operative care and asepsis", list: [
        "The operating-room team includes the surgeon, anaesthetist, scrub nurse (sterile field) and circulating nurse (non-sterile).",
        "Strict surgical asepsis is maintained — surgical hand scrub, sterile gown and gloves and a sterile field.",
        "The patient is positioned safely to allow access while protecting the airway, circulation, nerves and pressure points.",
        "A surgical safety checklist and correct counts of instruments, swabs and needles prevent retained items and wrong-site surgery.",
        "Maintain the airway, monitor vital signs, and prevent hypothermia and falls."
      ] },
      { h: "Types of anaesthesia", list: [
        "General anaesthesia — produces unconsciousness and loss of all sensation; the airway must be protected.",
        "Regional anaesthesia (spinal/epidural) — numbs a large area while the patient stays awake; watch for a fall in blood pressure.",
        "Local anaesthesia — numbs a small area for minor procedures.",
        "Sedation — relaxes the patient and reduces awareness for some procedures."
      ] },
      { h: "Immediate post-operative care", p: "On arrival in the recovery room, the priority follows ABC — Airway, Breathing, Circulation. Keep the airway open, give oxygen, monitor vital signs and oxygen saturation frequently, assess level of consciousness, check the wound and drains for bleeding, monitor pain and give analgesia. Position the unconscious patient on the side (recovery position) to prevent aspiration until protective reflexes return." },
      { h: "Post-operative complications", list: [
        "Respiratory — atelectasis and pneumonia; prevented by deep breathing, coughing and early mobilisation.",
        "Circulatory — haemorrhage (watch for rising pulse and falling BP) and deep vein thrombosis (leg exercises, early walking).",
        "Wound — infection and dehiscence (the wound splitting open); keep it clean and support it when coughing.",
        "Others — paralytic ileus, urinary retention, nausea and vomiting, and fluid and electrolyte imbalance.",
        "Maintain accurate intake-output charting and monitor for these complications throughout recovery."
      ] },
      { h: "Promoting recovery", p: "The nurse encourages early mobilisation (which prevents chest infection, clots and constipation), adequate pain relief, good nutrition and hydration, wound care, and emotional support. Discharge teaching covers wound care, medicines, activity limits, danger signs to report and follow-up appointments, so the patient can recover safely at home." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the three phases of the perioperative period and the nurse's role in each.",
      "Explain informed consent and the nurse's responsibility in obtaining it.",
      "List the components of pre-operative preparation of a surgical patient.",
      "Discuss the immediate post-operative care of a patient recovering from general anaesthesia.",
      "Describe the common post-operative complications and their prevention."
    ],
    assessment: [
      { type: "mcq", q: "The pre-operative phase begins when:", options: ["The decision for surgery is made", "The patient enters the operating room", "The patient reaches the recovery room", "The wound is closed"], answer: 0, rationale: "The pre-operative phase runs from the decision to operate until the patient enters the operating room." },
      { type: "mcq", q: "Who is responsible for explaining the surgery and obtaining informed consent?", options: ["The nurse", "The ward clerk", "The surgeon", "The pharmacist"], answer: 2, rationale: "The surgeon explains the procedure and obtains consent; the nurse witnesses and confirms understanding." },
      { type: "mcq", q: "A patient is kept nil by mouth before surgery mainly to prevent:", options: ["Hypothermia", "Wound infection", "Constipation", "Aspiration during anaesthesia"], answer: 3, rationale: "Fasting empties the stomach and prevents aspiration of stomach contents during anaesthesia." },
      { type: "mcq", q: "Current best practice for removing hair at the surgical site is to:", options: ["Shave with a razor the night before", "Clip the hair, if needed, near the time of surgery", "Never remove any hair", "Use depilatory cream on all patients"], answer: 1, rationale: "Clipping (not shaving) close to surgery causes fewer skin nicks and lowers infection risk." },
      { type: "mcq", q: "In the operating room, the nurse who maintains the sterile field is the:", options: ["Circulating nurse", "Charge nurse", "Scrub nurse", "Recovery nurse"], answer: 2, rationale: "The scrub nurse is sterile and manages the sterile field and instruments; the circulating nurse is non-sterile." },
      { type: "mcq", q: "The FIRST priority on receiving a patient in the recovery room is:", options: ["Checking the airway and breathing", "Giving food", "Removing the IV line", "Taking blood for tests"], answer: 0, rationale: "Airway and breathing (ABC) are the immediate post-operative priority." },
      { type: "mcq", q: "An unconscious post-operative patient should be positioned:", options: ["Flat on the back", "Sitting fully upright", "Head down (Trendelenburg)", "On the side (recovery position)"], answer: 3, rationale: "The lateral/recovery position keeps the airway clear and prevents aspiration until reflexes return." },
      { type: "mcq", q: "A rising pulse with a falling blood pressure after surgery most likely indicates:", options: ["Normal recovery", "Wound healing", "Haemorrhage", "Constipation"], answer: 2, rationale: "Tachycardia with hypotension is a classic early sign of post-operative haemorrhage/shock." },
      { type: "mcq", q: "Deep breathing, coughing and early mobilisation after surgery mainly prevent:", options: ["Respiratory complications and clots", "Wound dehiscence", "Urinary retention", "Nausea"], answer: 0, rationale: "These measures prevent atelectasis, pneumonia and deep vein thrombosis." },
      { type: "mcq", q: "The post-operative complication in which the surgical wound splits open is called:", options: ["Evisceration only", "Atelectasis", "Ileus", "Dehiscence"], answer: 3, rationale: "Dehiscence is partial or complete separation of the wound edges (evisceration is protrusion of organs)." }
      , { type: "fill", q: "The patient's voluntary, informed agreement to surgery is called informed ____.", accept: ["consent"], rationale: "Informed consent is the legal, ethical agreement to a procedure after explanation." }
      , { type: "fill", q: "The type of anaesthesia that produces complete unconsciousness is ____ anaesthesia.", accept: ["general"], rationale: "General anaesthesia causes loss of consciousness and all sensation, requiring airway protection." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "msn-06-shock",
    unit: "Unit 1 · Foundations of MS Nursing",
    title: "Shock and Its Management",
    readMinutes: 15,
    summary: "The pathophysiology and stages of shock, its main types (hypovolaemic, cardiogenic, distributive and obstructive), clinical features and the principles of emergency and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is shock?", p: "Shock is a life-threatening state in which blood flow (perfusion) to the tissues is too low to meet their needs for oxygen and nutrients. Cells are starved of oxygen, waste products build up, and if it is not corrected the cells, then the organs, begin to fail. Shock is a medical emergency requiring rapid recognition and treatment." },
      { h: "Types of shock", list: [
        "Hypovolaemic shock — loss of blood or fluid (haemorrhage, burns, severe vomiting or diarrhoea) reduces circulating volume. This is the most common type.",
        "Cardiogenic shock — the heart fails to pump effectively (after a large heart attack or in heart failure).",
        "Distributive shock — widespread vasodilation lowers blood pressure; it includes septic (infection), anaphylactic (severe allergy) and neurogenic (spinal injury) shock.",
        "Obstructive shock — a physical block to blood flow (massive pulmonary embolism, cardiac tamponade or tension pneumothorax)."
      ] },
      { h: "Stages of shock", list: [
        "Initial/compensatory stage — the body compensates: heart rate and breathing rise, vessels constrict, and blood pressure is kept near normal. The skin is cool and pale and urine output falls. This stage is reversible if treated.",
        "Progressive stage — compensation fails: blood pressure falls, the patient becomes confused, breathing is rapid, and organs begin to suffer.",
        "Irreversible/refractory stage — organ damage is so severe that treatment can no longer save the patient."
      ] },
      { h: "Clinical features", p: "Common signs of shock include a fast, weak ('thready') pulse; low blood pressure (a late sign in young adults who compensate well); cool, pale, clammy skin; rapid shallow breathing; thirst; restlessness or confusion; and reduced urine output (oliguria). A key exception is early septic and neurogenic shock, where the skin may at first be warm and flushed because of vasodilation.", figure: {
        caption: "Shock: inadequate tissue perfusion leads to cellular oxygen starvation and, if untreated, organ failure.",
        svg: '<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pathway of shock from low perfusion to organ failure."><defs><marker id="msnArr6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="10" y="65" width="120" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="70" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Low perfusion</text><text x="70" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">tissues short of blood</text><rect x="160" y="65" width="120" height="55" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="220" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Cell hypoxia</text><text x="220" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">no oxygen</text><rect x="310" y="65" width="120" height="55" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="370" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Cell damage</text><text x="370" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">waste builds up</text><rect x="455" y="65" width="78" height="55" rx="9" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="494" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Organ</text><text x="494" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">failure</text><line x1="130" y1="92" x2="158" y2="92" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr6)"/><line x1="280" y1="92" x2="308" y2="92" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr6)"/><line x1="430" y1="92" x2="453" y2="92" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr6)"/></svg>'
      } },
      { h: "Emergency management (general)", list: [
        "Ensure Airway, Breathing and Circulation (ABC) and give high-flow oxygen.",
        "Position the patient flat with the legs slightly raised (modified Trendelenburg) unless contraindicated, to help blood return to vital organs.",
        "Establish IV access with wide-bore cannulae and give IV fluids; stop any obvious bleeding.",
        "Monitor vital signs, oxygen saturation, level of consciousness and urine output closely.",
        "Keep the patient warm, calm and reassured; call for medical help urgently."
      ] },
      { h: "Type-specific treatment", list: [
        "Hypovolaemic — replace fluid/blood and control the source of loss.",
        "Cardiogenic — improve the heart's pumping with drugs; treat the cause (e.g. the heart attack).",
        "Septic — give antibiotics early and fluids; find and treat the infection.",
        "Anaphylactic — give adrenaline (epinephrine) immediately, plus oxygen, fluids, antihistamines and steroids.",
        "Obstructive — relieve the obstruction (e.g. drain a tension pneumothorax or tamponade)."
      ] },
      { h: "Nursing management and monitoring", list: [
        "Continuously monitor blood pressure, pulse, respiration, oxygen saturation and conscious level.",
        "Measure hourly urine output — falling output is an early warning of worsening shock.",
        "Give prescribed fluids, blood and drugs accurately and record intake and output.",
        "Keep the patient warm and provide reassurance to reduce fear and oxygen demand.",
        "Anticipate deterioration, keep emergency equipment ready and document carefully."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define shock and explain its pathophysiology.",
      "Classify the types of shock with one cause of each.",
      "Describe the stages of shock.",
      "Outline the general emergency management of a patient in shock.",
      "Discuss the nursing management and monitoring of a patient in hypovolaemic shock."
    ],
    assessment: [
      { type: "mcq", q: "Shock is fundamentally a problem of inadequate:", options: ["Tissue perfusion", "Blood clotting", "Urine production", "Breathing rate"], answer: 0, rationale: "Shock is a state of inadequate tissue perfusion, depriving cells of oxygen." },
      { type: "mcq", q: "The MOST common type of shock is:", options: ["Cardiogenic", "Hypovolaemic", "Neurogenic", "Anaphylactic"], answer: 1, rationale: "Hypovolaemic shock from blood or fluid loss is the most common type." },
      { type: "mcq", q: "Severe allergy leading to widespread vasodilation causes which type of shock?", options: ["Cardiogenic", "Hypovolaemic", "Anaphylactic", "Obstructive"], answer: 2, rationale: "Anaphylactic shock is a distributive shock caused by a severe allergic reaction." },
      { type: "mcq", q: "The immediate drug of choice in anaphylactic shock is:", options: ["Morphine", "Atropine", "Digoxin", "Adrenaline (epinephrine)"], answer: 3, rationale: "Adrenaline (epinephrine) is the first-line emergency treatment for anaphylaxis." },
      { type: "mcq", q: "Which is an EARLY (compensatory stage) sign of shock?", options: ["Increased heart rate with cool pale skin", "Deep coma", "Warm pink skin and slow pulse", "No change in vital signs"], answer: 0, rationale: "In the compensatory stage the heart rate rises and the skin is cool and pale as vessels constrict." },
      { type: "mcq", q: "A useful early indicator that shock is worsening is a fall in:", options: ["Body temperature", "Hair growth", "Hourly urine output", "Appetite"], answer: 2, rationale: "Reduced perfusion of the kidneys lowers urine output, an early and sensitive warning sign." },
      { type: "mcq", q: "Shock caused by failure of the heart to pump effectively is:", options: ["Hypovolaemic shock", "Septic shock", "Cardiogenic shock", "Neurogenic shock"], answer: 2, rationale: "Cardiogenic shock results from the heart's inability to pump enough blood, as after a large MI." },
      { type: "mcq", q: "In the early stage of SEPTIC shock the skin is often:", options: ["Cold and blue", "Yellow", "Black", "Warm and flushed"], answer: 3, rationale: "Early septic (and neurogenic) shock causes vasodilation, so the skin may be warm and flushed." },
      { type: "mcq", q: "The usual emergency position for a patient in shock (unless contraindicated) is:", options: ["Flat with legs slightly elevated", "Sitting fully upright", "Prone (face down)", "High Fowler's"], answer: 0, rationale: "Lying flat with legs raised (modified Trendelenburg) helps venous return to vital organs." },
      { type: "mcq", q: "Massive pulmonary embolism or cardiac tamponade causes which category of shock?", options: ["Distributive", "Hypovolaemic", "Obstructive", "Anaphylactic"], answer: 2, rationale: "Obstructive shock results from a physical block to blood flow, such as PE or tamponade." }
      , { type: "fill", q: "Shock caused by severe loss of blood or body fluid is called ____ shock.", accept: ["hypovolaemic", "hypovolemic"], rationale: "Hypovolaemic shock results from a reduced circulating blood/fluid volume." }
      , { type: "fill", q: "Septic shock is caused by a severe ____ in the body.", accept: ["infection", "sepsis"], rationale: "Septic shock results from a severe systemic infection causing vasodilation and poor perfusion." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "msn-07-respiratory",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Respiratory System Disorders",
    readMinutes: 17,
    summary: "Common respiratory disorders — COPD, asthma, bronchiectasis, pneumonia, pleural effusion, pulmonary tuberculosis and lung abscess — with their features, oxygen therapy and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Assessment of the respiratory patient", p: "Respiratory disorders interfere with breathing and gas exchange. Common signs include dyspnoea (breathlessness), cough, sputum, chest pain, wheeze, cyanosis (a bluish colour from low oxygen) and the use of accessory muscles. The nurse assesses respiratory rate, depth and effort, oxygen saturation, breath sounds and sputum, and watches for restlessness and confusion, which are early signs of low oxygen (hypoxia)." },
      { h: "Chronic Obstructive Pulmonary Disease (COPD)", p: "COPD is a chronic, progressive disease in which airflow is persistently obstructed; it includes chronic bronchitis (long-term cough with sputum) and emphysema (destruction of the alveoli). Smoking is the main cause. Patients have breathlessness, chronic cough, sputum and wheeze, and develop a barrel chest over time. It cannot be cured but can be controlled with bronchodilators, stopping smoking and, in severe disease, oxygen." },
      { h: "Oxygen therapy in COPD", p: "Oxygen relieves hypoxia, but in some patients with long-standing severe COPD a high concentration can reduce their drive to breathe; such patients are usually given controlled low-flow oxygen and monitored carefully. The principle for the nurse is to give oxygen as prescribed, observe the response (rate, saturation, alertness) and never withhold oxygen from a hypoxic patient out of fear — but watch closely and report changes." },
      { h: "Asthma", p: "Asthma is a chronic inflammatory disease in which the airways become narrowed and over-reactive to triggers such as allergens, cold air, smoke, exercise or infection. Attacks cause wheeze, breathlessness, chest tightness and cough, often worse at night. Treatment uses reliever inhalers (short-acting bronchodilators such as salbutamol) for attacks and preventer inhalers (inhaled steroids) to reduce inflammation. A severe attack not responding to treatment (status asthmaticus) is an emergency." },
      { h: "Bronchiectasis and lung abscess", list: [
        "Bronchiectasis — permanent abnormal widening of the bronchi, often after repeated infection, causing a chronic cough with large amounts of foul, purulent sputum and recurrent chest infections. Postural drainage and physiotherapy help clear secretions.",
        "Lung abscess — a localised collection of pus within the lung, usually from infection or aspiration; treated with prolonged antibiotics and drainage of secretions."
      ] },
      { h: "Pneumonia", p: "Pneumonia is inflammation and infection of the lung tissue (alveoli), most often caused by bacteria such as Streptococcus pneumoniae. The alveoli fill with fluid and pus, reducing gas exchange. Signs are fever, chills, cough with purulent or rusty sputum, chest pain on breathing, fast breathing and crackles. Treatment is antibiotics, oxygen, fluids, antipyretics and chest physiotherapy. The old, the very young and those with weak immunity are most at risk." },
      { h: "Pleural effusion", p: "Pleural effusion is a collection of fluid in the pleural space (between the lung and the chest wall). It causes breathlessness, reduced chest movement and decreased breath sounds on the affected side. The fluid may be drained by a needle (thoracentesis/pleural tap) or a chest tube. After thoracentesis, the nurse watches for breathlessness, bleeding or signs of pneumothorax." },
      { h: "Pulmonary tuberculosis (TB)", list: [
        "TB is a chronic infectious disease caused by Mycobacterium tuberculosis, spread by airborne droplets from coughing.",
        "Symptoms: a cough lasting more than 2-3 weeks, sometimes with blood-stained sputum (haemoptysis), fever, night sweats, weight loss and tiredness.",
        "Diagnosis: sputum examination for acid-fast bacilli, chest X-ray and other tests.",
        "Treatment: a combination of anti-TB drugs (such as isoniazid, rifampicin, pyrazinamide and ethambutol) taken regularly for several months, often under direct observation (DOTS).",
        "Nursing: stress the importance of completing the full course (stopping early causes drug resistance), teach cough hygiene and infection control, and support nutrition."
      ] },
      { h: "General nursing management", list: [
        "Position the breathless patient upright (high Fowler's) to ease breathing.",
        "Give oxygen as prescribed and monitor oxygen saturation and respiratory effort.",
        "Encourage fluids to loosen secretions, and teach effective coughing and deep breathing.",
        "Use chest physiotherapy and postural drainage to clear sputum where indicated.",
        "Give prescribed bronchodilators, antibiotics and other drugs, and observe the response.",
        "Promote rest, good nutrition and stopping smoking; teach inhaler technique and disease self-management."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the causes, signs and nursing management of COPD.",
      "Differentiate between asthma and chronic bronchitis.",
      "Discuss the pathophysiology, signs and management of pneumonia.",
      "Explain the symptoms, diagnosis, treatment and nursing care of pulmonary tuberculosis.",
      "Describe the principles of oxygen therapy and the nursing care of a breathless patient."
    ],
    assessment: [
      { type: "mcq", q: "The single most important cause of COPD is:", options: ["Air pollution", "Cold weather", "Cigarette smoking", "Allergy"], answer: 2, rationale: "Cigarette smoking is the leading cause of chronic bronchitis and emphysema (COPD)." },
      { type: "mcq", q: "A bluish discolouration of the skin and lips due to low oxygen is called:", options: ["Jaundice", "Pallor", "Erythema", "Cyanosis"], answer: 3, rationale: "Cyanosis is the bluish colour caused by inadequate oxygenation of the blood." },
      { type: "mcq", q: "The reliever inhaler used during an acute asthma attack is a:", options: ["Short-acting bronchodilator (e.g. salbutamol)", "Inhaled corticosteroid", "Antibiotic", "Antihistamine"], answer: 0, rationale: "Short-acting bronchodilators such as salbutamol quickly relieve bronchospasm in an attack." },
      { type: "mcq", q: "Pneumonia is inflammation and infection of the:", options: ["Bronchi only", "Pleura", "Lung tissue (alveoli)", "Trachea"], answer: 2, rationale: "Pneumonia is infection of the lung tissue/alveoli, which fill with fluid and pus." },
      { type: "mcq", q: "The causative organism of pulmonary tuberculosis is:", options: ["Streptococcus pneumoniae", "Staphylococcus aureus", "Mycobacterium tuberculosis", "Influenza virus"], answer: 2, rationale: "TB is caused by Mycobacterium tuberculosis, spread by airborne droplets." },
      { type: "mcq", q: "Why is it vital that a TB patient completes the full course of anti-TB drugs?", options: ["To reduce cost", "To gain weight faster", "It is not actually important", "To prevent drug resistance and relapse"], answer: 3, rationale: "Stopping treatment early allows surviving bacteria to develop drug resistance and the disease to relapse." },
      { type: "mcq", q: "The best position to ease breathing in a breathless patient is:", options: ["Flat supine", "Prone", "Left lateral flat", "Upright (high Fowler's)"], answer: 3, rationale: "Sitting upright lowers the diaphragm and expands the lungs, easing breathing." },
      { type: "mcq", q: "A collection of fluid in the space between the lung and chest wall is:", options: ["Pleural effusion", "Pneumonia", "Lung abscess", "Bronchiectasis"], answer: 0, rationale: "Pleural effusion is fluid in the pleural space, often drained by thoracentesis." },
      { type: "mcq", q: "Coughing up blood-stained sputum is called:", options: ["Haematemesis", "Haematuria", "Haemoptysis", "Melaena"], answer: 2, rationale: "Haemoptysis is coughing up blood from the respiratory tract, seen in TB and other lung diseases." },
      { type: "mcq", q: "A reliable early sign of hypoxia (low oxygen) that the nurse should watch for is:", options: ["Restlessness and confusion", "Increased appetite", "Slow deep sleep", "Warm dry skin"], answer: 0, rationale: "The brain is sensitive to low oxygen, so restlessness and confusion are early warnings of hypoxia." }
      , { type: "fill", q: "The chronic lung disease that includes chronic bronchitis and emphysema is abbreviated as ____.", accept: ["COPD"], rationale: "COPD = Chronic Obstructive Pulmonary Disease." }
      , { type: "fill", q: "The procedure of inserting a needle to drain fluid from the pleural space is called ____.", accept: ["thoracentesis", "thoracocentesis", "pleural tap"], rationale: "Thoracentesis (pleural tap) removes fluid from the pleural space." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "msn-08-cardiovascular",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Cardiovascular System Disorders",
    readMinutes: 18,
    summary: "Common cardiovascular disorders — hypertension, rheumatic and valvular heart disease, congestive heart failure, arteriosclerosis and varicose veins — and the principles of cardiopulmonary resuscitation (CPR).",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Assessment of the cardiac patient", p: "Cardiovascular disorders affect the heart and blood vessels and reduce the delivery of oxygen-rich blood to the body. Common features include chest pain, breathlessness, palpitations, fatigue, dizziness, swelling of the legs (oedema) and fainting. The nurse assesses pulse (rate, rhythm and volume), blood pressure, oedema, skin colour and temperature, and watches for signs of poor perfusion." },
      { h: "Hypertension", p: "Hypertension is persistently raised blood pressure, generally taken as 140/90 mmHg or higher on repeated readings. It is often called the 'silent killer' because it usually has no symptoms but damages the heart, brain, kidneys and eyes over time, leading to stroke, heart attack and kidney failure. Most cases have no single cause (primary/essential hypertension). Management combines lifestyle change — reduced salt, weight loss, exercise, no smoking, less alcohol — with regular antihypertensive medicines that must be taken consistently even when the patient feels well." },
      { h: "Rheumatic fever and rheumatic heart disease", p: "Rheumatic fever is an inflammatory disease that can follow an untreated streptococcal throat infection, mainly in children. The body's immune response damages the joints, skin and, most seriously, the heart valves. Repeated attacks scar the valves, causing chronic rheumatic heart disease (often a narrowed or leaking mitral valve). Prevention is prompt treatment of strep throat with antibiotics and long-term penicillin to prevent recurrence." },
      { h: "Valvular heart disease", list: [
        "Stenosis — a valve is narrowed and does not open fully, obstructing blood flow.",
        "Regurgitation (incompetence) — a valve does not close fully, so blood leaks backward.",
        "Both make the heart work harder and can lead to heart failure; a murmur is often heard.",
        "Treatment ranges from medicines to surgical repair or valve replacement."
      ] },
      { h: "Congestive heart failure (CHF)", p: "Heart failure is the inability of the heart to pump enough blood to meet the body's needs. In left-sided failure, blood backs up into the lungs, causing breathlessness (worse on lying flat — orthopnoea), cough and crackles. In right-sided failure, blood backs up into the body, causing swollen legs, raised neck veins and an enlarged tender liver. Management includes rest, a low-salt diet, fluid restriction, and drugs such as diuretics (to remove excess fluid), and other heart medicines as prescribed.", figure: {
        caption: "Left- versus right-sided heart failure: where blood backs up and the resulting signs.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left-sided versus right-sided heart failure signs."><rect x="20" y="30" width="230" height="150" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="135" y="55" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">Left-sided failure</text><text x="135" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Blood backs up to LUNGS</text><text x="40" y="104" font-family="sans-serif" font-size="11" fill="#7C2D12">- Breathlessness</text><text x="40" y="124" font-family="sans-serif" font-size="11" fill="#7C2D12">- Orthopnoea</text><text x="40" y="144" font-family="sans-serif" font-size="11" fill="#7C2D12">- Cough, crackles</text><rect x="290" y="30" width="230" height="150" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="405" y="55" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#B45309">Right-sided failure</text><text x="405" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#B45309">Blood backs up to BODY</text><text x="310" y="104" font-family="sans-serif" font-size="11" fill="#92400E">- Leg/ankle oedema</text><text x="310" y="124" font-family="sans-serif" font-size="11" fill="#92400E">- Raised neck veins</text><text x="310" y="144" font-family="sans-serif" font-size="11" fill="#92400E">- Enlarged liver</text></svg>'
      } },
      { h: "Arteriosclerosis and atherosclerosis", p: "Arteriosclerosis is a general hardening and thickening of artery walls with age. Atherosclerosis is the build-up of fatty plaques (atheroma) inside the arteries, which narrows them and reduces blood flow. It is the main cause of coronary heart disease (angina and heart attack), stroke and peripheral vascular disease. Risk factors include smoking, high cholesterol, high blood pressure, diabetes, obesity and inactivity — most of which can be reduced." },
      { h: "Varicose veins", p: "Varicose veins are swollen, twisted, visible veins, usually in the legs, caused by weak or damaged valves that allow blood to pool. They cause aching, heaviness, swelling and, in severe cases, skin changes and ulcers. Management includes leg elevation, exercise, avoiding long standing, graduated compression stockings, and surgery in severe cases. The nurse teaches leg care and the prevention of skin breakdown." },
      { h: "Cardiopulmonary resuscitation (CPR)", list: [
        "CPR is the emergency procedure used when the heart and breathing stop (cardiac arrest).",
        "Check for danger, then check response and breathing; call for help and get a defibrillator if available.",
        "Begin chest compressions: press hard and fast in the centre of the chest, about 100-120 compressions per minute, allowing full recoil.",
        "Combine compressions with rescue breaths (commonly 30 compressions to 2 breaths) if trained and willing.",
        "Continue without long interruptions until help arrives or the patient recovers; use an automated defibrillator as soon as one is available."
      ] },
      { h: "General nursing management", list: [
        "Monitor vital signs, pulse rhythm, oedema and weight; report changes promptly.",
        "Give prescribed cardiac drugs accurately and observe for effects and side effects.",
        "Encourage a low-salt, heart-healthy diet, weight control, exercise as tolerated and stopping smoking.",
        "Balance rest and activity to reduce the heart's workload.",
        "Teach the patient to take medicines regularly and to recognise warning signs such as chest pain or worsening breathlessness."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define hypertension and discuss its complications and management.",
      "Explain the link between rheumatic fever and rheumatic heart disease.",
      "Differentiate between left-sided and right-sided heart failure.",
      "Describe atherosclerosis and its risk factors.",
      "Outline the steps of cardiopulmonary resuscitation (CPR)."
    ],
    assessment: [
      { type: "mcq", q: "Hypertension in an adult is generally defined as a blood pressure persistently at or above:", options: ["100/60 mmHg", "120/80 mmHg", "140/90 mmHg", "160/110 mmHg"], answer: 2, rationale: "Hypertension is commonly defined as a sustained BP of 140/90 mmHg or higher." },
      { type: "mcq", q: "Hypertension is called the 'silent killer' because it:", options: ["Is always fatal", "Usually has no symptoms but causes serious damage", "Only affects the elderly", "Cannot be treated"], answer: 1, rationale: "Hypertension is often symptomless yet silently damages the heart, brain, kidneys and eyes." },
      { type: "mcq", q: "Rheumatic fever most often follows an untreated infection with:", options: ["Streptococcus", "Mycobacterium", "Influenza virus", "E. coli"], answer: 0, rationale: "Rheumatic fever follows an untreated streptococcal throat infection, damaging the heart valves." },
      { type: "mcq", q: "In LEFT-sided heart failure, blood backs up into the:", options: ["Legs", "Liver", "Lungs", "Neck veins"], answer: 2, rationale: "Left-sided failure causes pulmonary congestion, leading to breathlessness and crackles." },
      { type: "mcq", q: "Swollen legs, raised neck veins and an enlarged liver are signs of:", options: ["Left-sided heart failure", "Right-sided heart failure", "Asthma", "Anaemia"], answer: 1, rationale: "Right-sided failure causes systemic venous congestion: peripheral oedema, raised JVP and hepatomegaly." },
      { type: "mcq", q: "The class of drugs used to remove excess fluid in heart failure is:", options: ["Antibiotics", "Diuretics", "Antacids", "Analgesics"], answer: 1, rationale: "Diuretics increase urine output to remove excess fluid and relieve congestion in heart failure." },
      { type: "mcq", q: "Build-up of fatty plaque inside the arteries is called:", options: ["Arteriosclerosis", "Atherosclerosis", "Varicosis", "Stenosis"], answer: 1, rationale: "Atherosclerosis is plaque (atheroma) deposition inside arteries, narrowing them." },
      { type: "mcq", q: "When a heart valve fails to close fully and blood leaks backward, this is called:", options: ["Stenosis", "Regurgitation", "Occlusion", "Embolism"], answer: 1, rationale: "Valve regurgitation (incompetence) allows backward leakage of blood; stenosis is narrowing." },
      { type: "mcq", q: "The recommended rate of chest compressions during CPR is about:", options: ["40-60 per minute", "60-80 per minute", "100-120 per minute", "150-180 per minute"], answer: 2, rationale: "High-quality CPR uses about 100-120 chest compressions per minute." },
      { type: "mcq", q: "Varicose veins are caused mainly by:", options: ["Narrowed arteries", "Incompetent (weak) vein valves with pooling of blood", "High blood sugar", "Lung infection"], answer: 1, rationale: "Faulty vein valves allow blood to pool, causing swollen, twisted varicose veins." }
      , { type: "fill", q: "The class of drugs used to lower high blood pressure are called ____ drugs.", accept: ["antihypertensive", "antihypertensives"], rationale: "Antihypertensive drugs are used to control raised blood pressure." }
      , { type: "fill", q: "The emergency procedure performed when the heart and breathing stop is abbreviated ____.", accept: ["CPR", "cardiopulmonary resuscitation"], rationale: "CPR (cardiopulmonary resuscitation) is performed for cardiac arrest." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "msn-09-haematologic",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Blood & Haematologic Disorders",
    readMinutes: 16,
    summary: "Disorders of the blood and lymphatic system — anaemia, bleeding disorders, leukaemia and lymphoma — with their causes, features, treatment and nursing care, including safe blood transfusion.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The blood and its functions", p: "Blood carries oxygen, nutrients, hormones and waste, helps fight infection and forms clots to stop bleeding. It is made of plasma (the fluid) and three cell types: red blood cells (carry oxygen using haemoglobin), white blood cells (fight infection) and platelets (help clotting). Disorders of any of these cause distinct problems, and the nurse must understand the role of each." },
      { h: "Anaemia", p: "Anaemia is a reduction in the number of red blood cells or in the amount of haemoglobin, so less oxygen reaches the tissues. Causes include blood loss, poor diet (iron, folate or vitamin B12 deficiency), increased red-cell destruction (haemolysis) and reduced production (as in bone marrow or kidney disease). Iron-deficiency anaemia is the most common type worldwide." },
      { h: "Signs and management of anaemia", list: [
        "Signs: tiredness, pallor (especially of the conjunctiva, nail beds and palms), breathlessness on exertion, dizziness, fast heart rate and, if severe, fainting.",
        "Iron-deficiency anaemia is treated with iron (dietary and supplements); teach that iron is better absorbed with vitamin C and may darken the stool.",
        "Pernicious anaemia (B12 deficiency) needs vitamin B12 injections; folate deficiency needs folic acid.",
        "Nursing care: balance activity with rest, give supplements as prescribed, teach an iron-rich diet (green leafy vegetables, meat, beans), and treat the underlying cause."
      ] },
      { h: "Bleeding disorders", p: "Bleeding (haemorrhagic) disorders are conditions in which blood does not clot properly, so bleeding is excessive or prolonged. Causes include a low platelet count (thrombocytopenia), clotting-factor deficiency (such as haemophilia, an inherited lack of a clotting factor), liver disease and some medicines. Signs include easy bruising, nosebleeds, bleeding gums, blood in the urine or stool, and prolonged bleeding from cuts or injection sites." },
      { h: "Nursing care in bleeding disorders", list: [
        "Watch for and report any signs of bleeding, including hidden internal bleeding.",
        "Prevent injury: use a soft toothbrush, avoid intramuscular injections where possible, apply firm pressure after any needle stick, and prevent falls.",
        "Avoid drugs that increase bleeding (such as aspirin) unless specifically prescribed.",
        "Give clotting factors, platelets or other prescribed treatment safely and monitor the response."
      ] },
      { h: "Leukaemia", p: "Leukaemia is a cancer of the blood-forming tissue (bone marrow) in which abnormal white blood cells multiply uncontrollably and crowd out normal cells. This leads to anaemia (tiredness, pallor), infection (because the abnormal white cells do not work properly) and bleeding (low platelets). It may be acute (sudden, rapidly progressing) or chronic (slow). Treatment includes chemotherapy and sometimes bone marrow (stem cell) transplant." },
      { h: "Lymphoma", p: "Lymphoma is a cancer of the lymphatic system (lymph nodes and lymph tissue). The two main types are Hodgkin lymphoma and non-Hodgkin lymphoma. The typical sign is painless, enlarged lymph nodes (often in the neck, armpit or groin), with fever, night sweats, weight loss and tiredness. Treatment is chemotherapy and/or radiotherapy. Many lymphomas, especially Hodgkin disease, respond well to treatment." },
      { h: "Caring for the immunosuppressed patient", list: [
        "Patients with leukaemia, lymphoma or on chemotherapy have weak immunity and are at high risk of infection.",
        "Practise strict hand hygiene and protect the patient from people with infections (protective/reverse isolation).",
        "Watch for fever and other signs of infection and report them at once — fever may be the only sign.",
        "Watch for bleeding and anaemia; provide good mouth care, rest and emotional support."
      ] },
      { h: "Safe blood transfusion", list: [
        "Check the patient's identity and match the blood unit against the prescription and blood group very carefully — a mismatch can be fatal.",
        "Two trained staff usually verify the patient, the unit and the compatibility details before starting.",
        "Take baseline vital signs, then monitor closely, especially in the first 15 minutes, when most serious reactions occur.",
        "STOP the transfusion immediately at any sign of a reaction (fever, chills, rash, breathlessness, back pain, low blood pressure), keep the vein open with saline and call for help."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define anaemia, list its causes and describe the nursing care of an anaemic patient.",
      "Describe the causes, signs and nursing care of a patient with a bleeding disorder.",
      "Explain leukaemia and its main effects on the body.",
      "Differentiate between Hodgkin and non-Hodgkin lymphoma and describe their common signs.",
      "Outline the nursing responsibilities in safe blood transfusion."
    ],
    assessment: [
      { type: "mcq", q: "Anaemia is best defined as a reduction in:", options: ["White blood cells", "Platelets", "Red blood cells or haemoglobin", "Plasma proteins"], answer: 2, rationale: "Anaemia is a fall in red cells or haemoglobin, reducing oxygen delivery to tissues." },
      { type: "mcq", q: "The most common type of anaemia worldwide is:", options: ["Pernicious anaemia", "Aplastic anaemia", "Iron-deficiency anaemia", "Haemolytic anaemia"], answer: 2, rationale: "Iron-deficiency anaemia is the most common form globally." },
      { type: "mcq", q: "Iron absorption from the gut is improved when iron is taken with:", options: ["Milk", "Tea", "Calcium", "Vitamin C"], answer: 3, rationale: "Vitamin C enhances iron absorption; tea, milk and calcium reduce it." },
      { type: "mcq", q: "Haemophilia is an inherited deficiency of:", options: ["A clotting factor", "Red blood cells", "White blood cells", "Haemoglobin"], answer: 0, rationale: "Haemophilia is an inherited lack of a clotting factor, causing prolonged bleeding." },
      { type: "mcq", q: "Leukaemia is a cancer affecting the:", options: ["Liver", "Lymph nodes only", "Bone marrow (white blood cells)", "Lungs"], answer: 2, rationale: "Leukaemia is cancer of blood-forming bone marrow with overproduction of abnormal white cells." },
      { type: "mcq", q: "A patient with leukaemia is at high risk of infection because:", options: ["They have too many normal white cells", "Their abnormal white cells do not fight infection well", "They have high platelets", "They have extra red cells"], answer: 1, rationale: "Abnormal leukaemic white cells are ineffective and crowd out normal cells, weakening immunity." },
      { type: "mcq", q: "The classic sign of lymphoma is:", options: ["Painless enlarged lymph nodes", "Severe chest pain", "Yellow skin", "High blood sugar"], answer: 0, rationale: "Painless lymph node enlargement, with fever, night sweats and weight loss, is typical of lymphoma." },
      { type: "mcq", q: "During a blood transfusion, serious reactions most often occur during the:", options: ["Last 5 minutes", "First 15 minutes", "Second hour only", "Day after"], answer: 1, rationale: "Most severe transfusion reactions appear within the first 15 minutes, so close monitoring is vital then." },
      { type: "mcq", q: "The FIRST action if a transfusion reaction is suspected is to:", options: ["Speed up the transfusion", "Stop the transfusion immediately", "Give more blood", "Ignore it if mild"], answer: 1, rationale: "Stop the transfusion at once, keep the vein open with saline and call for help." },
      { type: "mcq", q: "To protect an immunosuppressed patient, the nurse should mainly use:", options: ["Strict hand hygiene and protective isolation", "Routine antibiotics for everyone", "No special precautions", "Sharing equipment between patients"], answer: 0, rationale: "Strict hand hygiene and protecting the patient from infection sources are key for the immunosuppressed." }
      , { type: "fill", q: "The oxygen-carrying protein in red blood cells is ____.", accept: ["haemoglobin", "hemoglobin"], rationale: "Haemoglobin in red cells binds and carries oxygen; low levels cause anaemia." }
      , { type: "fill", q: "Blood cells called ____ are essential for clotting, and a low count causes bleeding.", accept: ["platelets", "thrombocytes"], rationale: "Platelets (thrombocytes) are needed for clotting; thrombocytopenia causes bleeding." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "msn-10-gastrointestinal",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Gastrointestinal Disorders",
    readMinutes: 17,
    summary: "Common digestive-system disorders — peptic ulcer, GI bleeding, inflammatory bowel disease, bowel obstruction, perforation, appendicitis, haemorrhoids and hernia — with their features and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Assessment of the GI patient", p: "Gastrointestinal disorders affect digestion and the absorption of food. Common symptoms are abdominal pain, nausea and vomiting, change in bowel habit (diarrhoea or constipation), loss of appetite, weight loss, and bleeding seen as vomited blood (haematemesis), black tarry stool (melaena) or fresh red blood. The nurse assesses the abdomen (remembering to auscultate before palpating), monitors intake and output and watches for dehydration and bleeding." },
      { h: "Peptic ulcer disease", p: "A peptic ulcer is a break in the lining of the stomach (gastric ulcer) or the first part of the small intestine (duodenal ulcer), caused when acid and pepsin damage the mucosa. The main causes are infection with the bacterium Helicobacter pylori and the use of NSAIDs such as aspirin and ibuprofen. The typical symptom is burning or gnawing upper abdominal (epigastric) pain, related to meals. Complications include bleeding, perforation and obstruction." },
      { h: "Management of peptic ulcer", list: [
        "Drugs that reduce acid — proton pump inhibitors (such as omeprazole) and H2-blockers (such as ranitidine) — and antacids for symptom relief.",
        "Antibiotics to eradicate Helicobacter pylori when present.",
        "Stop NSAIDs and aspirin where possible; avoid smoking, alcohol and irritant foods.",
        "Teach the patient to take medicines as prescribed and to report black stools or vomiting blood, which signal bleeding."
      ] },
      { h: "Gastrointestinal bleeding", p: "GI bleeding can come from the upper tract (oesophagus, stomach, duodenum — for example, a bleeding ulcer or varices) or the lower tract (colon, rectum — for example, haemorrhoids or cancer). Upper GI bleeding shows as haematemesis and/or melaena; lower bleeding usually shows as fresh red blood. Severe bleeding can cause shock. The nurse keeps the patient nil by mouth, monitors vital signs for shock, gives IV fluids and blood as prescribed and prepares the patient for endoscopy." },
      { h: "Inflammatory bowel disease (IBD)", list: [
        "IBD is chronic inflammation of the bowel and includes Crohn's disease and ulcerative colitis.",
        "Crohn's disease can affect any part of the gut, often in patches, through the full thickness of the wall.",
        "Ulcerative colitis affects the lining of the colon and rectum in a continuous pattern.",
        "Both cause diarrhoea (often with blood), abdominal pain, weight loss and tiredness, with flare-ups and remissions.",
        "Management includes anti-inflammatory and immune-suppressing drugs, good nutrition and, in some cases, surgery."
      ] },
      { h: "Bowel obstruction and intestinal perforation", list: [
        "Bowel obstruction — the intestine is blocked, so contents cannot pass. Signs: colicky abdominal pain, abdominal distension, vomiting and absolute constipation (no stool or flatus). Management: nil by mouth, nasogastric tube to decompress the stomach, IV fluids, and often surgery.",
        "Intestinal perforation — a hole in the bowel wall lets contents leak into the abdomen, causing peritonitis (a rigid, very tender abdomen, severe pain, fever and shock). This is a surgical emergency."
      ] },
      { h: "Acute appendicitis", p: "Appendicitis is inflammation of the appendix, usually from obstruction and infection. It causes pain that often begins around the navel and then moves to the right lower abdomen (McBurney's point), with nausea, low-grade fever and loss of appetite. There may be rebound tenderness. The treatment is surgical removal (appendicectomy). A sudden relief of pain followed by worsening, spreading pain may mean the appendix has burst — an emergency." },
      { h: "Haemorrhoids and hernia", list: [
        "Haemorrhoids (piles) — swollen veins in the anus and rectum, causing bright red bleeding on defaecation, itching and discomfort; managed with a high-fibre diet, fluids, local treatment and, if severe, surgery.",
        "Hernia — the protrusion of an organ (usually bowel) through a weak point in the muscle wall, seen as a lump that may appear on straining. A strangulated hernia (cut-off blood supply) is painful, irreducible and a surgical emergency.",
        "Diverticular disease — small pouches in the colon wall that may become inflamed (diverticulitis), causing left lower abdominal pain and fever; managed with diet, rest and antibiotics."
      ] },
      { h: "General nursing management", list: [
        "Monitor pain, vital signs, abdominal girth, bowel sounds and bowel habit.",
        "Manage nausea and vomiting; keep the patient nil by mouth and use a nasogastric tube when ordered.",
        "Maintain fluid and electrolyte balance with accurate intake-output charting.",
        "Watch for danger signs — bleeding, a rigid abdomen, rising pulse and falling blood pressure (shock or peritonitis).",
        "Give prescribed medicines, prepare the patient for any surgery and provide diet teaching on recovery."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the causes, symptoms and management of peptic ulcer disease.",
      "Differentiate between upper and lower gastrointestinal bleeding.",
      "Compare Crohn's disease and ulcerative colitis.",
      "Describe the signs and nursing management of intestinal obstruction.",
      "Explain the features and management of acute appendicitis."
    ],
    assessment: [
      { type: "mcq", q: "A common bacterial cause of peptic ulcer disease is:", options: ["Helicobacter pylori", "Mycobacterium tuberculosis", "Streptococcus", "Salmonella typhi"], answer: 0, rationale: "Helicobacter pylori infection is a major cause of peptic ulcers, along with NSAID use." },
      { type: "mcq", q: "Black, tarry stool caused by digested blood is called:", options: ["Haematuria", "Haematemesis", "Steatorrhoea", "Melaena"], answer: 3, rationale: "Melaena is black, tarry stool from upper GI bleeding (digested blood)." },
      { type: "mcq", q: "Which group of drugs reduces stomach acid by blocking the proton pump?", options: ["Antibiotics", "Diuretics", "Proton pump inhibitors (e.g. omeprazole)", "Laxatives"], answer: 2, rationale: "Proton pump inhibitors such as omeprazole strongly reduce gastric acid secretion." },
      { type: "mcq", q: "Vomiting of blood is termed:", options: ["Haematemesis", "Melaena", "Haemoptysis", "Haematuria"], answer: 0, rationale: "Haematemesis is the vomiting of blood, indicating upper GI bleeding." },
      { type: "mcq", q: "Colicky pain, distension, vomiting and absolute constipation suggest:", options: ["Peptic ulcer", "Haemorrhoids", "Bowel obstruction", "Gastritis"], answer: 2, rationale: "These four features are the classic presentation of intestinal obstruction." },
      { type: "mcq", q: "The pain of appendicitis classically localises to the:", options: ["Right lower abdomen (McBurney's point)", "Left upper abdomen", "Centre of the chest", "Right shoulder"], answer: 0, rationale: "Appendicitis pain often starts centrally and shifts to the right lower quadrant (McBurney's point)." },
      { type: "mcq", q: "A rigid, board-like, very tender abdomen with fever suggests:", options: ["Constipation", "Mild gastritis", "Peritonitis from perforation", "Hunger"], answer: 2, rationale: "A rigid, tender abdomen indicates peritonitis, often from a perforated bowel — a surgical emergency." },
      { type: "mcq", q: "Bright red bleeding during defaecation with anal itching is typical of:", options: ["Haemorrhoids", "Peptic ulcer", "Pancreatitis", "Hepatitis"], answer: 0, rationale: "Haemorrhoids cause bright red rectal bleeding, itching and discomfort on defaecation." },
      { type: "mcq", q: "A hernia with its blood supply cut off, painful and irreducible, is called:", options: ["Reducible hernia", "Hiatus hernia", "Umbilical hernia", "Strangulated hernia"], answer: 3, rationale: "A strangulated hernia has a compromised blood supply and is a surgical emergency." },
      { type: "mcq", q: "When examining the abdomen, the nurse should perform auscultation:", options: ["After palpation", "Before palpation", "After percussion only", "It does not matter"], answer: 1, rationale: "Auscultate the abdomen before palpation, because palpation can alter bowel sounds." }
      , { type: "fill", q: "A break in the lining of the stomach or duodenum caused by acid is called a ____ ulcer.", accept: ["peptic"], rationale: "A peptic ulcer is an acid-related break in the gastric or duodenal mucosa." }
      , { type: "fill", q: "Inflammation of the appendix is called ____.", accept: ["appendicitis"], rationale: "Appendicitis is inflammation of the appendix, usually treated by appendicectomy." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "msn-11-liver-biliary",
    unit: "Unit 2 · Disorders of Body Systems I",
    title: "Liver, Biliary & Pancreatic Disorders",
    readMinutes: 16,
    summary: "Disorders of the liver, gallbladder and pancreas — hepatitis, cirrhosis, cholecystitis, gallstones and pancreatitis — with their causes, features and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The liver, gallbladder and pancreas", p: "The liver has many vital jobs: it processes nutrients, makes bile and clotting factors, stores vitamins and glucose, and breaks down (detoxifies) drugs and waste such as bilirubin. The gallbladder stores and concentrates bile, which helps digest fat. The pancreas makes digestive enzymes and the hormones insulin and glucagon. Disease in these organs disturbs digestion, clotting, blood sugar and the removal of waste." },
      { h: "Jaundice", p: "Jaundice is a yellow colouring of the skin and the whites of the eyes caused by a build-up of bilirubin in the blood. It is a sign, not a disease, and points to a problem with the liver or bile flow — for example hepatitis, cirrhosis or a blocked bile duct (often by a gallstone). The urine may turn dark and the stool pale when bile cannot reach the gut. The nurse assesses the skin and sclera, urine and stool colour, and any itching." },
      { h: "Hepatitis", list: [
        "Hepatitis is inflammation of the liver, most often caused by viruses (hepatitis A, B, C, D and E); it may also follow alcohol or drug toxicity.",
        "Hepatitis A and E spread by the faecal-oral route (contaminated food and water).",
        "Hepatitis B, C and D spread through blood and body fluids (unsafe injections, transfusions, sexual contact and mother to baby).",
        "Symptoms: tiredness, loss of appetite, nausea, abdominal discomfort, dark urine, pale stool and jaundice.",
        "Care: rest, good nutrition, avoiding alcohol and liver-toxic drugs, and infection-control measures; hepatitis A and B are preventable by vaccine."
      ] },
      { h: "Cirrhosis of the liver", p: "Cirrhosis is chronic, irreversible scarring of the liver in which healthy tissue is replaced by fibrous tissue, so the liver fails to work properly. Common causes are long-term alcohol use and chronic hepatitis B or C. As the liver fails, complications appear: jaundice, ascites (fluid in the abdomen), oedema, easy bruising and bleeding (less clotting factors), bleeding oesophageal varices, and confusion progressing to coma (hepatic encephalopathy) as toxins such as ammonia build up." },
      { h: "Nursing care in cirrhosis", list: [
        "Rest and a diet suited to the patient's condition; restrict salt and fluid if there is ascites or oedema, and limit protein if there is encephalopathy, as prescribed.",
        "Measure abdominal girth and daily weight to monitor ascites; give diuretics as prescribed.",
        "Watch for and prevent bleeding (varices, bruising) — avoid trauma and use a soft toothbrush.",
        "Watch for signs of encephalopathy (confusion, drowsiness, tremor) and report them.",
        "Strictly avoid alcohol and liver-toxic drugs; give prescribed treatment and emotional support."
      ] },
      { h: "Gallstones (cholelithiasis) and cholecystitis", p: "Gallstones (cholelithiasis) are hard stones that form in the gallbladder. They may cause no symptoms or block the flow of bile, causing severe pain in the right upper abdomen (biliary colic), often after a fatty meal, sometimes radiating to the right shoulder. Cholecystitis is inflammation of the gallbladder, usually caused by a stone blocking its outlet, giving right upper abdominal pain, tenderness, fever and nausea. Treatment ranges from a low-fat diet and pain relief to surgical removal of the gallbladder (cholecystectomy)." },
      { h: "Pancreatitis", p: "Pancreatitis is inflammation of the pancreas, in which the digestive enzymes become active inside the gland and begin to digest the pancreas itself. The main causes are gallstones and heavy alcohol use. It causes severe upper abdominal pain that often bores through to the back, nausea, vomiting and abdominal tenderness; severe (acute) pancreatitis can lead to shock and is life-threatening. Treatment includes nil by mouth to rest the pancreas, IV fluids, strong pain relief and close monitoring." },
      { h: "Nursing care in cholecystitis and pancreatitis", list: [
        "Manage pain with prescribed analgesia and a position of comfort.",
        "Keep the patient nil by mouth as ordered to rest the digestive organs, with a nasogastric tube if needed.",
        "Give IV fluids and monitor fluid and electrolyte balance and vital signs (watch for shock in pancreatitis).",
        "Teach a low-fat diet for gallbladder disease and complete avoidance of alcohol after pancreatitis.",
        "Prepare and care for the patient undergoing surgery (e.g. cholecystectomy) and monitor for complications."
      ] },
      { h: "General principles", p: "Because the liver makes clotting factors and breaks down drugs and waste, patients with liver disease bleed more easily and handle medicines poorly; doses are adjusted and bleeding is watched for. Good nutrition, the strict avoidance of alcohol, and prevention of infection (including vaccination and safe injection practice) protect these organs. The nurse plays a key role in teaching prevention and supporting long-term lifestyle change." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define jaundice and explain its causes.",
      "Describe the types, modes of spread and prevention of viral hepatitis.",
      "Discuss the complications and nursing care of a patient with cirrhosis of the liver.",
      "Differentiate between cholelithiasis and cholecystitis.",
      "Describe the causes, features and management of acute pancreatitis."
    ],
    assessment: [
      { type: "mcq", q: "Jaundice is caused by a build-up in the blood of:", options: ["Glucose", "Bilirubin", "Urea", "Calcium"], answer: 1, rationale: "Jaundice is yellow discolouration from excess bilirubin, signalling liver or bile-duct problems." },
      { type: "mcq", q: "Which types of hepatitis spread mainly by the faecal-oral route?", options: ["Hepatitis A and E", "Hepatitis B and C", "Hepatitis C and D", "Hepatitis B and D"], answer: 0, rationale: "Hepatitis A and E spread via contaminated food and water (faecal-oral route)." },
      { type: "mcq", q: "Hepatitis B is mainly transmitted through:", options: ["Contaminated food", "Blood and body fluids", "Coughing", "Insect bites"], answer: 1, rationale: "Hepatitis B spreads through blood and body fluids, sexual contact and mother to baby." },
      { type: "mcq", q: "Cirrhosis of the liver is BEST described as:", options: ["Temporary swelling of the liver", "Infection of the gallbladder", "Irreversible scarring (fibrosis) of the liver", "A liver tumour"], answer: 2, rationale: "Cirrhosis is chronic, irreversible fibrosis that replaces healthy liver tissue and impairs function." },
      { type: "mcq", q: "Fluid collecting in the abdominal cavity, common in cirrhosis, is called:", options: ["Oedema", "Jaundice", "Effusion", "Ascites"], answer: 3, rationale: "Ascites is the accumulation of fluid in the peritoneal (abdominal) cavity." },
      { type: "mcq", q: "Confusion and drowsiness from toxin build-up in liver failure is called:", options: ["Hepatic encephalopathy", "Meningitis", "Hypoglycaemia", "Delirium tremens"], answer: 0, rationale: "Hepatic encephalopathy results from toxins such as ammonia affecting the brain in liver failure." },
      { type: "mcq", q: "The presence of stones in the gallbladder is called:", options: ["Cholecystitis", "Cholelithiasis", "Cirrhosis", "Pancreatitis"], answer: 1, rationale: "Cholelithiasis means gallstones; cholecystitis is inflammation of the gallbladder." },
      { type: "mcq", q: "Gallbladder pain (biliary colic) is classically brought on by:", options: ["A fatty meal", "Drinking water", "Lying flat", "Exercise"], answer: 0, rationale: "Fatty meals trigger gallbladder contraction and biliary colic in gallstone disease." },
      { type: "mcq", q: "The two main causes of acute pancreatitis are:", options: ["Smoking and stress", "Viruses and allergy", "Gallstones and alcohol", "High salt and caffeine"], answer: 2, rationale: "Gallstones and heavy alcohol use are the leading causes of acute pancreatitis." },
      { type: "mcq", q: "A patient with severe acute pancreatitis is usually kept nil by mouth to:", options: ["Save money", "Prevent jaundice", "Lower blood pressure", "Rest the pancreas and reduce enzyme secretion"], answer: 3, rationale: "Resting the gut reduces pancreatic enzyme stimulation, easing inflammation and pain." }
      , { type: "fill", q: "Surgical removal of the gallbladder is called ____.", accept: ["cholecystectomy"], rationale: "Cholecystectomy is the operation to remove the gallbladder, often for gallstones." }
      , { type: "fill", q: "Inflammation of the liver, often caused by a virus, is called ____.", accept: ["hepatitis"], rationale: "Hepatitis is inflammation of the liver, most commonly viral." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "msn-12-renal-urinary",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Renal & Urinary Disorders",
    readMinutes: 17,
    summary: "Disorders of the kidneys and urinary tract — urinary tract infection, obstruction, stones, incontinence, glomerulonephritis, nephrotic syndrome, renal failure and benign prostatic hyperplasia — and their nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The urinary system", p: "The kidneys filter the blood to remove waste and excess water as urine, balance fluids and electrolytes, control blood pressure, keep the blood's acid-base balance and help make red blood cells. Urine flows from the kidneys down the ureters to the bladder and out through the urethra. Disorders disturb the removal of waste and the balance of fluid and electrolytes, so the nurse closely monitors urine output and fluid balance." },
      { h: "Urinary tract infection (UTI)", list: [
        "A UTI is infection of any part of the urinary tract, usually by bacteria (commonly E. coli); it is more common in women because of the short urethra.",
        "Lower UTI (cystitis — bladder): burning on passing urine (dysuria), frequency, urgency, lower abdominal pain and cloudy or smelly urine.",
        "Upper UTI (pyelonephritis — kidney): the above plus high fever, chills and loin (flank) pain; it is more serious.",
        "Management: antibiotics, plenty of fluids to flush the tract, and teaching prevention (good perineal hygiene — wiping front to back, drinking enough water, not holding urine)."
      ] },
      { h: "Urinary obstruction and stones (urolithiasis)", p: "Anything that blocks the flow of urine — an enlarged prostate, a stricture or a stone — is a urinary obstruction. Urinary stones (urolithiasis/calculi) are hard deposits that form in the urinary tract. A stone passing down the ureter causes sudden, severe, cramping loin pain that radiates to the groin (renal colic), often with nausea and blood in the urine (haematuria). Management includes strong pain relief, plenty of fluids, straining the urine to catch the stone, and procedures to remove or break up large stones. A high fluid intake helps prevent stones." },
      { h: "Urinary incontinence", p: "Urinary incontinence is the involuntary leakage of urine. Common types are stress incontinence (leakage on coughing, sneezing or lifting, from weak pelvic muscles), urge incontinence (a sudden strong need to pass urine, from an overactive bladder) and overflow incontinence (dribbling from a full bladder that cannot empty, as in obstruction). Management includes pelvic floor (Kegel) exercises, bladder training, treating the cause, skin care to prevent breakdown, and preserving the patient's dignity." },
      { h: "Glomerulonephritis and nephrotic syndrome", list: [
        "Acute glomerulonephritis — inflammation of the kidney's filtering units (glomeruli), often after a streptococcal infection. Signs: blood and protein in the urine, reduced urine output, oedema (especially of the face) and raised blood pressure.",
        "Nephrotic syndrome — the glomeruli leak large amounts of protein into the urine. Signs: heavy proteinuria, low blood protein, marked generalised oedema and high blood cholesterol.",
        "Care for both: monitor intake and output, weight and blood pressure; restrict salt and fluid as ordered; give prescribed drugs; and watch for worsening kidney function."
      ] },
      { h: "Renal failure", p: "Renal (kidney) failure is the loss of the kidneys' ability to filter waste and balance fluid. Acute kidney injury (acute renal failure) comes on suddenly and is often reversible if treated early; chronic kidney disease develops slowly over months or years and is irreversible. As waste (urea, creatinine) and potassium build up and fluid is retained, the patient develops oedema, breathlessness, nausea, tiredness, itching, confusion and dangerous high potassium. Treatment includes controlling fluid and diet, treating the cause and, in severe cases, dialysis or transplant.", figure: {
        caption: "Healthy kidney function compared with renal failure: waste and fluid are retained when filtering fails.",
        svg: '<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of healthy kidney function and renal failure."><rect x="20" y="30" width="230" height="135" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="135" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Healthy kidney</text><text x="40" y="80" font-family="sans-serif" font-size="11" fill="#7C2D12">- Filters waste</text><text x="40" y="100" font-family="sans-serif" font-size="11" fill="#7C2D12">- Balances fluid</text><text x="40" y="120" font-family="sans-serif" font-size="11" fill="#7C2D12">- Normal urine output</text><text x="40" y="140" font-family="sans-serif" font-size="11" fill="#7C2D12">- Normal potassium</text><rect x="290" y="30" width="230" height="135" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="405" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">Renal failure</text><text x="310" y="80" font-family="sans-serif" font-size="11" fill="#92400E">- Waste builds up (urea)</text><text x="310" y="100" font-family="sans-serif" font-size="11" fill="#92400E">- Fluid retained, oedema</text><text x="310" y="120" font-family="sans-serif" font-size="11" fill="#92400E">- Low urine output</text><text x="310" y="140" font-family="sans-serif" font-size="11" fill="#92400E">- High potassium (danger)</text></svg>'
      } },
      { h: "Benign prostatic hyperplasia (BPH)", p: "Benign prostatic hyperplasia is a non-cancerous enlargement of the prostate gland, common in older men. The enlarged prostate presses on the urethra and obstructs urine flow, causing a weak stream, hesitancy, dribbling, frequency, urgency, getting up at night to pass urine (nocturia) and incomplete emptying. It can lead to urinary retention and infection. Treatment includes medicines to relax or shrink the prostate and surgery (such as TURP — transurethral resection of the prostate) in more severe cases." },
      { h: "General nursing management", list: [
        "Monitor urine output, fluid balance, daily weight, blood pressure and blood results (urea, creatinine, potassium).",
        "Maintain prescribed fluid and dietary limits (salt, potassium, protein and fluid as ordered).",
        "Give medicines safely, remembering that the kidneys excrete many drugs, so doses may be reduced.",
        "Provide catheter care using sterile technique when a urinary catheter is in place, to prevent infection.",
        "Teach prevention — adequate fluids, good hygiene, completing antibiotics and reporting urinary symptoms early."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Differentiate between lower and upper urinary tract infection and describe their management.",
      "Describe the features and nursing management of urinary stones (urolithiasis).",
      "Explain the types of urinary incontinence and their management.",
      "Differentiate between acute and chronic renal failure and describe the nursing care.",
      "Describe the features and management of benign prostatic hyperplasia (BPH)."
    ],
    assessment: [
      { type: "mcq", q: "The most common organism causing urinary tract infection is:", options: ["Escherichia coli", "Mycobacterium tuberculosis", "Streptococcus pyogenes", "Candida albicans"], answer: 0, rationale: "E. coli from the bowel is the most common cause of urinary tract infection." },
      { type: "mcq", q: "Infection of the kidney with fever and loin pain is called:", options: ["Cystitis", "Urethritis", "Pyelonephritis", "Nephrotic syndrome"], answer: 2, rationale: "Pyelonephritis is an upper UTI (kidney infection) with fever, chills and flank pain." },
      { type: "mcq", q: "Sudden, severe cramping loin pain radiating to the groin with haematuria suggests:", options: ["Renal colic from a stone", "Cystitis", "Incontinence", "BPH"], answer: 0, rationale: "Renal colic is the classic pain of a ureteric stone, radiating to the groin with blood in the urine." },
      { type: "mcq", q: "Leakage of urine on coughing or sneezing is called:", options: ["Urge incontinence", "Stress incontinence", "Overflow incontinence", "Functional incontinence"], answer: 1, rationale: "Stress incontinence is leakage on exertion (coughing, sneezing) from weak pelvic muscles." },
      { type: "mcq", q: "Acute glomerulonephritis often develops after an infection with:", options: ["E. coli", "Streptococcus", "Hepatitis virus", "Candida"], answer: 1, rationale: "Post-streptococcal glomerulonephritis follows a streptococcal throat or skin infection." },
      { type: "mcq", q: "Heavy protein loss in the urine, low blood protein and marked oedema describe:", options: ["UTI", "Renal colic", "Cystitis", "Nephrotic syndrome"], answer: 3, rationale: "Nephrotic syndrome features massive proteinuria, hypoalbuminaemia and generalised oedema." },
      { type: "mcq", q: "A dangerous electrolyte that rises in renal failure and can stop the heart is:", options: ["Calcium", "Sodium", "Potassium", "Chloride"], answer: 2, rationale: "Failing kidneys retain potassium; hyperkalaemia can cause fatal cardiac arrhythmias." },
      { type: "mcq", q: "The treatment that filters the blood when the kidneys fail is:", options: ["Dialysis", "Chemotherapy", "Physiotherapy", "Catheterisation"], answer: 0, rationale: "Dialysis artificially removes waste and excess fluid when the kidneys can no longer do so." },
      { type: "mcq", q: "Benign prostatic hyperplasia causes urinary symptoms because the enlarged prostate:", options: ["Produces more urine", "Presses on and obstructs the urethra", "Infects the bladder", "Destroys the kidney"], answer: 1, rationale: "An enlarged prostate compresses the urethra, obstructing urine flow and causing the symptoms of BPH." },
      { type: "mcq", q: "To help prevent recurrent urinary tract infection, women should be taught to:", options: ["Wipe from back to front", "Wipe from front to back", "Hold urine for long periods", "Drink very little water"], answer: 1, rationale: "Wiping front to back avoids carrying bowel bacteria to the urethra; good fluid intake also helps." }
      , { type: "fill", q: "The presence of blood in the urine is called ____.", accept: ["haematuria", "hematuria"], rationale: "Haematuria is blood in the urine, seen with stones, infection and other urinary disorders." }
      , { type: "fill", q: "Hard stones that form in the urinary tract are called urinary ____ (urolithiasis).", accept: ["calculi", "stones", "calculus"], rationale: "Urinary calculi (stones), or urolithiasis, can obstruct the tract and cause renal colic." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "msn-13-endocrine-diabetes",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Endocrine Disorders (including Diabetes Mellitus)",
    readMinutes: 18,
    summary: "Disorders of the endocrine glands — thyroid disorders, diabetes insipidus, Cushing's syndrome — and, in detail, diabetes mellitus: its types, features, complications, treatment and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The endocrine system", p: "The endocrine system is made of glands that release hormones into the blood to control body functions such as growth, metabolism, blood sugar, water balance and the stress response. Key glands are the thyroid, the adrenal glands, the pituitary and the pancreas. Endocrine disorders are caused by too much or too little of a hormone, and their effects are often widespread because hormones act all over the body." },
      { h: "Thyroid disorders", list: [
        "Hyperthyroidism (overactive thyroid) — too much thyroid hormone speeds up the body. Signs: weight loss despite a good appetite, fast heart rate, heat intolerance and sweating, nervousness, tremor, diarrhoea and sometimes bulging eyes and a goitre (swollen thyroid).",
        "Hypothyroidism (underactive thyroid) — too little thyroid hormone slows the body. Signs: weight gain, tiredness, cold intolerance, slow heart rate, constipation, dry skin, slow thinking and a puffy face.",
        "Both are confirmed by blood tests; treatment is anti-thyroid drugs or surgery for an overactive gland and hormone replacement (thyroxine) for an underactive gland."
      ] },
      { h: "Diabetes insipidus and Cushing's syndrome", list: [
        "Diabetes insipidus — caused by a lack of antidiuretic hormone (ADH), so the kidneys cannot concentrate urine. The patient passes very large amounts of dilute urine and is extremely thirsty. It is NOT the same as diabetes mellitus (the blood sugar is normal).",
        "Cushing's syndrome — caused by too much cortisol (often from long-term steroid medicines). Signs: a round 'moon' face, central obesity with thin limbs, a fatty hump on the back, thin skin that bruises easily, purple stretch marks, high blood pressure and high blood sugar."
      ] },
      { h: "Diabetes mellitus", p: "Diabetes mellitus is a chronic disease in which the blood glucose is persistently too high (hyperglycaemia) because the body either does not make enough insulin or cannot use it properly. Insulin, made by the pancreas, allows glucose to enter the cells for energy. Without enough working insulin, glucose builds up in the blood while the cells starve. It is a major and growing health problem." },
      { h: "Types of diabetes", list: [
        "Type 1 — the pancreas makes little or no insulin (often from autoimmune damage); usually starts in childhood or youth and always needs insulin injections.",
        "Type 2 — the body becomes resistant to insulin and/or makes too little; usually starts in adults and is linked to obesity and inactivity; managed by diet, exercise, oral drugs and sometimes insulin.",
        "Gestational diabetes — high blood sugar that appears during pregnancy."
      ] },
      { h: "Symptoms and diagnosis", p: "The classic symptoms are the 'three Ps': polyuria (passing a lot of urine), polydipsia (excessive thirst) and polyphagia (excessive hunger), along with weight loss, tiredness, blurred vision and slow healing of wounds. Diagnosis is by raised blood glucose levels — a fasting blood sugar or a glucose tolerance test — and a long-term test, the glycated haemoglobin (HbA1c), shows the average control over the past 2-3 months.", figure: {
        caption: "The classic 'three Ps' of diabetes mellitus.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three Ps of diabetes: polyuria, polydipsia, polyphagia."><rect x="20" y="45" width="150" height="60" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="95" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Polyuria</text><text x="95" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">much urine</text><rect x="185" y="45" width="150" height="60" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="260" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">Polydipsia</text><text x="260" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">much thirst</text><rect x="350" y="45" width="150" height="60" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="425" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Polyphagia</text><text x="425" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">much hunger</text></svg>'
      } },
      { h: "Acute complications", list: [
        "Hypoglycaemia (low blood sugar) — from too much insulin, a missed meal or extra exercise. Signs: sweating, shaking, hunger, fast heartbeat, confusion and, if severe, unconsciousness. It comes on quickly and is treated FAST with sugar (fast-acting glucose) if the patient is conscious.",
        "Diabetic ketoacidosis (DKA) — a dangerous emergency mainly in type 1, with very high blood sugar, ketones, dehydration, deep rapid breathing, a fruity breath odour and drowsiness; it needs urgent insulin and IV fluids.",
        "A key rule: if unsure whether the patient is high or low, treat for low sugar first, because hypoglycaemia can quickly cause brain damage."
      ] },
      { h: "Long-term complications", list: [
        "Eyes — damage to the retina (retinopathy), which can cause blindness.",
        "Kidneys — diabetic kidney disease (nephropathy), leading to renal failure.",
        "Nerves — neuropathy, causing numbness, tingling and pain, especially in the feet.",
        "Blood vessels and heart — atherosclerosis, heart attack, stroke and poor circulation.",
        "Feet — poor circulation and numbness lead to ulcers and infection (the diabetic foot), which can require amputation; good foot care is essential."
      ] },
      { h: "Nursing management", list: [
        "Teach a healthy, regular diet with controlled carbohydrate, and regular exercise.",
        "Teach safe use of insulin or oral drugs — correct dose, timing, injection sites and storage.",
        "Teach blood-sugar monitoring and how to recognise and treat high and low blood sugar.",
        "Stress meticulous foot care — daily inspection, washing and drying well, suitable footwear and never walking barefoot.",
        "Encourage regular check-ups of eyes, kidneys, feet and blood pressure, and provide ongoing education and support for self-management."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Differentiate between hyperthyroidism and hypothyroidism.",
      "Define diabetes mellitus and differentiate between type 1 and type 2.",
      "Describe the classic symptoms and diagnosis of diabetes mellitus.",
      "Differentiate between hypoglycaemia and diabetic ketoacidosis and their management.",
      "Discuss the nursing management and health education of a patient with diabetes mellitus, including foot care."
    ],
    assessment: [
      { type: "mcq", q: "Weight loss, fast heart rate, heat intolerance and tremor are signs of:", options: ["Hypothyroidism", "Diabetes insipidus", "Hyperthyroidism", "Cushing's syndrome"], answer: 2, rationale: "An overactive thyroid (hyperthyroidism) speeds metabolism, causing these features." },
      { type: "mcq", q: "The hormone replacement used for hypothyroidism is:", options: ["Insulin", "Cortisol", "ADH", "Thyroxine"], answer: 3, rationale: "Hypothyroidism is treated with thyroid hormone replacement (thyroxine)." },
      { type: "mcq", q: "Diabetes insipidus is caused by a lack of:", options: ["Insulin", "Thyroxine", "Antidiuretic hormone (ADH)", "Cortisol"], answer: 2, rationale: "Diabetes insipidus results from deficient ADH, causing large volumes of dilute urine." },
      { type: "mcq", q: "In diabetes mellitus, the blood glucose is high because of a problem with:", options: ["Thyroxine", "Insulin", "Adrenaline", "Calcium"], answer: 1, rationale: "Diabetes mellitus results from a lack of insulin or resistance to it, raising blood glucose." },
      { type: "mcq", q: "Which type of diabetes ALWAYS requires insulin injections?", options: ["Type 1", "Type 2", "Gestational only", "Pre-diabetes"], answer: 0, rationale: "Type 1 diabetes makes little or no insulin, so insulin injections are essential." },
      { type: "mcq", q: "The 'three Ps' of diabetes are polyuria, polydipsia and:", options: ["Polyphagia", "Paralysis", "Pallor", "Palpitations"], answer: 0, rationale: "The three Ps are polyuria, polydipsia (thirst) and polyphagia (hunger)." },
      { type: "mcq", q: "A conscious patient with hypoglycaemia (low blood sugar) should be given:", options: ["Insulin", "Fast-acting sugar/glucose", "More exercise", "A salty drink"], answer: 1, rationale: "Hypoglycaemia is treated quickly with fast-acting glucose; insulin would make it worse." },
      { type: "mcq", q: "A fruity breath odour, deep rapid breathing and high blood sugar suggest:", options: ["Hypoglycaemia", "Hypothyroidism", "A common cold", "Diabetic ketoacidosis"], answer: 3, rationale: "These are classic features of diabetic ketoacidosis (DKA), an emergency needing insulin and fluids." },
      { type: "mcq", q: "The blood test that shows average glucose control over the past 2-3 months is:", options: ["Fasting glucose", "Random glucose", "HbA1c (glycated haemoglobin)", "Urine ketones"], answer: 2, rationale: "HbA1c reflects average blood glucose over the previous 2-3 months." },
      { type: "mcq", q: "Why is meticulous foot care vital for a person with diabetes?", options: ["Feet grow faster", "Poor circulation and numbness lead to unnoticed ulcers and infection", "Insulin is absorbed through the feet", "It lowers blood pressure"], answer: 1, rationale: "Neuropathy and poor circulation cause unnoticed injuries that can become ulcers and lead to amputation." }
      , { type: "fill", q: "The hormone that lowers blood glucose by letting it enter the cells is ____.", accept: ["insulin"], rationale: "Insulin, made by the pancreas, enables glucose uptake into cells, lowering blood sugar." }
      , { type: "fill", q: "Abnormally LOW blood sugar is called ____.", accept: ["hypoglycaemia", "hypoglycemia"], rationale: "Hypoglycaemia is low blood glucose, treated promptly with fast-acting sugar." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "msn-14-neurological",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Neurological Disorders",
    readMinutes: 18,
    summary: "Disorders of the nervous system — meningitis, epilepsy, Parkinson's disease, raised intracranial pressure and stroke (CVA) — with their features, emergency care and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Neurological assessment", p: "The nervous system controls movement, sensation, thinking and the vital functions of the body. Key parts of a neurological assessment are the level of consciousness (the most important and earliest sign of change), the pupils (size, equality and reaction to light), limb movement and strength, sensation, and the vital signs. The Glasgow Coma Scale (GCS) is used to score consciousness by testing eye opening, verbal and motor responses. Any fall in the level of consciousness must be reported at once." },
      { h: "Meningitis", p: "Meningitis is inflammation of the meninges, the membranes covering the brain and spinal cord, usually caused by infection (bacterial or viral). The classic signs are a severe headache, high fever, a stiff neck (neck rigidity), photophobia (dislike of light), vomiting and, in severe cases, a rash, drowsiness, seizures and coma. Bacterial meningitis is a medical emergency needing urgent antibiotics. The nurse provides a quiet, darkened room, monitors neurological status and uses infection-control precautions." },
      { h: "Epilepsy and seizures", p: "Epilepsy is a tendency to have repeated seizures, caused by sudden, abnormal electrical activity in the brain. Seizures vary from a brief blank stare (absence) to a generalised tonic-clonic seizure with loss of consciousness, stiffening and jerking of the body. It is controlled with regular anti-epileptic (anticonvulsant) drugs that must be taken consistently. The nurse teaches the patient never to stop the drugs suddenly and to avoid known triggers." },
      { h: "Care during a seizure", list: [
        "Stay with the patient, note the time the seizure starts and what happens.",
        "Protect from injury: ease the patient to the floor, cushion the head and move away dangerous objects.",
        "Do NOT restrain the patient and do NOT put anything in the mouth.",
        "Loosen tight clothing and, when possible, turn the patient on the side to keep the airway clear.",
        "After the seizure, allow rest, reassure the patient, check for injury and record the event."
      ] },
      { h: "Parkinson's disease", p: "Parkinson's disease is a chronic, progressive disease caused by the loss of dopamine-producing cells in the brain. The classic features are a resting tremor (often a 'pill-rolling' movement of the hand), rigidity (stiff muscles), bradykinesia (slow movement) and postural instability (poor balance). The face becomes mask-like, the writing small and the walk shuffling. There is no cure; medicines (such as levodopa) reduce symptoms. Nursing care focuses on safety (preventing falls), mobility, nutrition, communication and emotional support." },
      { h: "Raised intracranial pressure (ICP)", list: [
        "The skull is a rigid box; if the brain swells or there is bleeding or a tumour, the pressure inside (ICP) rises and can damage or kill brain tissue.",
        "Early signs: a decreasing level of consciousness (the earliest sign), headache, vomiting (often without nausea) and restlessness.",
        "Late signs (Cushing's triple response): rising blood pressure with a widening pulse pressure, a slow pulse (bradycardia) and irregular breathing; the pupils may become unequal or fixed.",
        "Nursing care: keep the head of the bed raised about 30 degrees with the head in a neutral position, avoid anything that raises ICP further (straining, coughing), monitor neurological status closely and report deterioration urgently."
      ] },
      { h: "Stroke (cerebrovascular accident, CVA)", p: "A stroke is sudden damage to part of the brain caused by an interruption of its blood supply. There are two main types: ischaemic stroke (a clot blocks an artery — the more common type) and haemorrhagic stroke (an artery bursts and bleeds). The brain tissue is starved of oxygen and its function is lost. A stroke is a medical emergency — 'time is brain' — because fast treatment can save brain tissue.", figure: {
        caption: "The two main types of stroke: a blocked artery (ischaemic) and a burst artery (haemorrhagic).",
        svg: '<svg viewBox="0 0 540 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two types of stroke: ischaemic and haemorrhagic."><rect x="20" y="30" width="230" height="125" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="135" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Ischaemic stroke</text><text x="135" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">A CLOT blocks an artery</text><text x="135" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">(more common type)</text><text x="135" y="130" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">brain area loses blood</text><rect x="290" y="30" width="230" height="125" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="405" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">Haemorrhagic stroke</text><text x="405" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">An artery BURSTS</text><text x="405" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">and bleeds in the brain</text><text x="405" y="130" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">pressure damages tissue</text></svg>'
      } },
      { h: "Recognising and managing stroke", list: [
        "Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call for help urgently.",
        "Signs: sudden weakness or numbness on one side of the body, slurred speech or trouble understanding, facial droop, sudden vision or balance problems and a sudden severe headache.",
        "Acute care: keep the airway safe, monitor neurological status and vital signs, and get the patient to definitive care fast.",
        "Recovery: prevent complications of immobility (pressure sores, clots, chest infection), help with positioning and swallowing, and begin rehabilitation — physiotherapy, speech therapy and help with daily living."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the signs, emergency care and nursing management of meningitis.",
      "Explain the nursing care of a patient during and after a seizure.",
      "Describe the clinical features and nursing management of Parkinson's disease.",
      "List the early and late signs of raised intracranial pressure.",
      "Differentiate between ischaemic and haemorrhagic stroke and describe the use of the FAST tool."
    ],
    assessment: [
      { type: "mcq", q: "The earliest and most important sign of a change in neurological status is a change in:", options: ["Level of consciousness", "Body temperature", "Skin colour", "Appetite"], answer: 0, rationale: "A falling level of consciousness is the earliest and most sensitive sign of neurological deterioration." },
      { type: "mcq", q: "A severe headache, high fever, stiff neck and photophobia suggest:", options: ["Migraine", "Epilepsy", "Parkinson's disease", "Meningitis"], answer: 3, rationale: "Headache, fever, neck stiffness and photophobia are classic features of meningitis." },
      { type: "mcq", q: "During a seizure, the nurse should:", options: ["Restrain the patient firmly", "Put a spoon in the mouth", "Protect the head and not restrain the patient", "Give food and water"], answer: 2, rationale: "Protect from injury, cushion the head, never restrain and never place objects in the mouth." },
      { type: "mcq", q: "The neurotransmitter that is deficient in Parkinson's disease is:", options: ["Insulin", "Dopamine", "Adrenaline", "Serotonin"], answer: 1, rationale: "Parkinson's disease results from loss of dopamine-producing cells in the brain." },
      { type: "mcq", q: "A 'pill-rolling' resting tremor with rigidity and slow movement is typical of:", options: ["Stroke", "Epilepsy", "Parkinson's disease", "Meningitis"], answer: 2, rationale: "Resting tremor, rigidity and bradykinesia are the classic features of Parkinson's disease." },
      { type: "mcq", q: "The Glasgow Coma Scale assesses eye opening, motor response and:", options: ["Verbal response", "Blood pressure", "Pupil size", "Reflexes"], answer: 0, rationale: "The GCS scores eye opening, verbal response and motor response to assess consciousness." },
      { type: "mcq", q: "Late signs of raised intracranial pressure include:", options: ["Fast pulse and low blood pressure", "Normal vital signs", "Slow pulse with rising blood pressure (Cushing's response)", "Fever and rash"], answer: 2, rationale: "Cushing's response — rising BP, bradycardia and irregular breathing — is a late, ominous sign of raised ICP." },
      { type: "mcq", q: "To help reduce raised intracranial pressure, the patient is usually positioned with the:", options: ["Head of the bed raised about 30 degrees, head neutral", "Head flat and turned to one side", "Head lower than the body", "Body prone"], answer: 0, rationale: "Elevating the head about 30 degrees in a neutral position promotes venous drainage and lowers ICP." },
      { type: "mcq", q: "The more common type of stroke, caused by a clot blocking an artery, is:", options: ["Haemorrhagic stroke", "Transient stroke only", "Ischaemic stroke", "Embolic bleeding"], answer: 2, rationale: "Ischaemic stroke (a clot blocking blood flow) is the more common type." },
      { type: "mcq", q: "In the FAST tool for stroke, the letter 'S' stands for:", options: ["Strength", "Sweating", "Seizure", "Speech difficulty"], answer: 3, rationale: "FAST = Face drooping, Arm weakness, Speech difficulty, Time to act." }
      , { type: "fill", q: "Inflammation of the membranes covering the brain and spinal cord is called ____.", accept: ["meningitis"], rationale: "Meningitis is inflammation of the meninges, usually due to infection." }
      , { type: "fill", q: "The abbreviation used for a stroke or cerebrovascular accident is ____.", accept: ["CVA", "stroke"], rationale: "CVA (cerebrovascular accident) is the medical term for a stroke." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "msn-15-musculoskeletal",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Musculoskeletal Disorders",
    readMinutes: 16,
    summary: "Disorders and injuries of the bones, joints and muscles — fractures, sprains and strains, arthritis, osteoporosis — with the principles of cast and traction care and the prevention of complications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The musculoskeletal system", p: "The musculoskeletal system — bones, joints, muscles, ligaments and tendons — gives the body shape and support, protects the organs, allows movement and stores minerals such as calcium. Disorders cause pain, swelling, deformity, loss of movement and disability. The nurse assesses pain, swelling, deformity, range of movement, and the circulation, movement and sensation of the affected limb." },
      { h: "Fractures", list: [
        "A fracture is a break in the continuity of a bone, usually from injury.",
        "Closed (simple) fracture — the skin is intact; open (compound) fracture — the bone breaks through the skin, with a high risk of infection.",
        "Complete fracture — the bone is broken right across; incomplete (e.g. greenstick) — only partly broken.",
        "Signs: pain, swelling, deformity, abnormal movement, inability to use the part, and sometimes a grating feeling (crepitus).",
        "Treatment follows reduce, immobilise and rehabilitate: realign the bone (reduction), hold it still (cast, traction or surgery) and restore function."
      ] },
      { h: "First aid and emergency care of fractures", list: [
        "Do not move the patient unnecessarily; immobilise the injured part with a splint, including the joints above and below.",
        "Control any bleeding and cover an open fracture with a clean dressing.",
        "Check the circulation, movement and sensation beyond the injury.",
        "Apply cold and elevate to reduce swelling, give pain relief and arrange transfer for definitive care."
      ] },
      { h: "Sprains and strains", list: [
        "Sprain — an injury (stretch or tear) of a ligament at a joint, from twisting or wrenching.",
        "Strain — an injury (stretch or tear) of a muscle or tendon, from overuse or overstretching.",
        "Both cause pain, swelling and limited movement; the first aid is RICE — Rest, Ice, Compression and Elevation."
      ] },
      { h: "Care of a patient in a cast (plaster)", list: [
        "Allow a new plaster cast to dry fully; handle it with the palms, not the fingertips, to avoid dents that press on the skin.",
        "Elevate the limb to reduce swelling, especially in the first 24-48 hours.",
        "Frequently check the limb beyond the cast for circulation and nerve function — the '5 Ps': Pain, Pallor, Pulselessness, Paraesthesia (tingling) and Paralysis.",
        "Report severe or increasing pain, coldness, blueness, numbness or swelling at once — these warn of a dangerous loss of circulation (compartment syndrome).",
        "Keep the cast clean and dry and never push objects inside it to scratch."
      ] },
      { h: "Care of a patient in traction", p: "Traction uses a steady pull on a limb to align broken bones, reduce muscle spasm and relieve pain. For traction to work, the weights must hang freely and not rest on the floor, the ropes must run smoothly in their pulleys, and the prescribed pull (alignment) must be maintained without lifting or removing the weights. The nurse also gives skin and pressure-area care, checks the circulation of the limb and prevents the complications of bed rest." },
      { h: "Arthritis and osteoporosis", list: [
        "Osteoarthritis — 'wear and tear' of the joint cartilage, common with age, causing pain and stiffness in weight-bearing joints, usually worse with use.",
        "Rheumatoid arthritis — a chronic autoimmune disease causing inflamed, swollen, painful joints (often symmetrical, in the hands), with morning stiffness and, over time, deformity.",
        "Osteoporosis — bones become thin and weak (low bone density), so they break easily; common in older women after menopause. Prevention uses adequate calcium and vitamin D, weight-bearing exercise and fall prevention.",
        "Management of arthritis: pain relief and anti-inflammatory drugs, rest balanced with exercise, joint protection, physiotherapy and aids to daily living."
      ] },
      { h: "Preventing complications of immobility", list: [
        "Pressure sores — change position regularly, keep skin clean and dry and use pressure-relieving aids.",
        "Deep vein thrombosis — encourage leg and ankle exercises and early movement where possible.",
        "Chest infection — encourage deep breathing and coughing.",
        "Muscle wasting and stiff joints — encourage exercise within limits and gentle range-of-motion movements.",
        "Constipation — encourage fluids, fibre and activity; provide emotional support during long recovery."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Classify fractures and describe their signs and principles of management.",
      "Describe the first aid and emergency care of a patient with a fracture.",
      "Explain the nursing care of a patient with a plaster cast, including the warning signs to watch for.",
      "Describe the principles of caring for a patient in traction.",
      "Differentiate between osteoarthritis and rheumatoid arthritis."
    ],
    assessment: [
      { type: "mcq", q: "A fracture in which the broken bone pierces through the skin is called:", options: ["Closed fracture", "Open (compound) fracture", "Greenstick fracture", "Incomplete fracture"], answer: 1, rationale: "An open (compound) fracture breaks the skin and carries a high risk of infection." },
      { type: "mcq", q: "The first aid for a sprain is summarised as:", options: ["RICE (Rest, Ice, Compression, Elevation)", "ABC", "FAST", "PQRST"], answer: 0, rationale: "Sprains and strains are managed with Rest, Ice, Compression and Elevation (RICE)." },
      { type: "mcq", q: "A sprain is an injury to a:", options: ["Muscle", "Bone", "Ligament", "Nerve"], answer: 2, rationale: "A sprain injures a ligament (at a joint); a strain injures a muscle or tendon." },
      { type: "mcq", q: "When checking a limb in a cast, the '5 Ps' include pain, pallor, pulselessness, paralysis and:", options: ["Paraesthesia (tingling)", "Pyrexia", "Pallor again", "Pus"], answer: 0, rationale: "The 5 Ps are Pain, Pallor, Pulselessness, Paraesthesia and Paralysis — signs of impaired circulation." },
      { type: "mcq", q: "A new plaster cast should be handled with the:", options: ["Fingertips", "A towel only", "Metal instruments", "Palms of the hands"], answer: 3, rationale: "Handling a wet cast with the palms avoids fingertip dents that can press on and injure the skin." },
      { type: "mcq", q: "For skeletal traction to be effective, the weights must:", options: ["Hang freely without touching the floor", "Rest on the floor", "Be lifted during care", "Be removed at night"], answer: 0, rationale: "Traction weights must hang freely to maintain the pull; they should not rest on the floor or be lifted." },
      { type: "mcq", q: "Increasing severe pain, numbness and coldness in a casted limb may indicate:", options: ["Normal healing", "Good blood flow", "Compartment syndrome (loss of circulation)", "Mild bruising"], answer: 2, rationale: "These are warning signs of compartment syndrome, a dangerous loss of circulation needing urgent action." },
      { type: "mcq", q: "Osteoporosis is best described as:", options: ["Inflammation of joints", "An infection of bone", "A bone tumour", "Thin, weak bones with low density"], answer: 3, rationale: "Osteoporosis is loss of bone density, making bones fragile and prone to fracture." },
      { type: "mcq", q: "Rheumatoid arthritis is mainly a/an:", options: ["Autoimmune inflammatory disease", "Wear-and-tear disease", "Infection", "Vitamin deficiency"], answer: 0, rationale: "Rheumatoid arthritis is a chronic autoimmune disease causing symmetrical inflamed joints." },
      { type: "mcq", q: "To prevent pressure sores in an immobile patient, the nurse should mainly:", options: ["Keep the patient in one position", "Restrict all fluids", "Change position regularly and keep skin clean and dry", "Massage reddened bony areas firmly"], answer: 2, rationale: "Regular repositioning and skin care relieve pressure and prevent sores in immobile patients." }
      , { type: "fill", q: "A break in the continuity of a bone is called a ____.", accept: ["fracture"], rationale: "A fracture is a break in a bone, classified as open/closed and complete/incomplete." }
      , { type: "fill", q: "The use of a steady pulling force to align broken bones is called ____.", accept: ["traction"], rationale: "Traction applies a pull to realign bone, reduce spasm and relieve pain." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "msn-16-eye-ent",
    unit: "Unit 3 · Disorders of Body Systems II",
    title: "Eye & ENT Disorders",
    readMinutes: 16,
    summary: "Common disorders of the eye (conjunctivitis, cataract, glaucoma, eye injury) and of the ear, nose and throat (otitis media, CSOM, sinusitis, tonsillitis, tracheostomy) with their features and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Disorders of the eye", p: "The eye allows vision; disorders can threaten sight, so early recognition and care are vital. Common features are redness, pain, discharge, watering, sensitivity to light and changes or loss of vision. The nurse assesses vision, the appearance of the eye and any discharge, teaches correct instillation of eye drops, and stresses not rubbing the eye and good hand hygiene to prevent the spread of infection." },
      { h: "Conjunctivitis and corneal ulcer", list: [
        "Conjunctivitis — inflammation of the conjunctiva ('pink eye'), from infection (bacterial or viral) or allergy. Signs: red, watery or sticky eye with discharge and irritation. Infectious types spread easily by the hands, so hygiene is essential.",
        "Corneal ulcer — an open sore on the cornea, often from infection or injury, causing pain, redness, watering, light sensitivity and blurred vision; it is serious and can damage sight if untreated."
      ] },
      { h: "Cataract", p: "A cataract is a clouding of the normally clear lens of the eye, most commonly with age. It causes painless, gradual blurring of vision, glare and faded colours, and if untreated can lead to blindness. The treatment is surgery to remove the cloudy lens and replace it with an artificial lens. After surgery the nurse teaches the patient to avoid rubbing or pressing the eye, avoid heavy lifting and straining, use eye drops as prescribed and report sudden pain or loss of vision." },
      { h: "Glaucoma", p: "Glaucoma is a group of eye diseases in which raised pressure inside the eye (intraocular pressure) damages the optic nerve and, if untreated, causes permanent loss of vision, starting at the edges (peripheral vision). Chronic glaucoma is often painless and silent, so regular eye checks matter; acute glaucoma causes sudden severe eye pain, redness, blurred vision and haloes around lights and is an emergency. Treatment uses eye drops to lower the pressure, and sometimes surgery. Lost vision cannot be restored, so the aim is to prevent further damage." },
      { h: "Eye injury — first aid", list: [
        "Chemical splash — wash the eye immediately with plenty of clean water or saline for many minutes; this is the priority.",
        "Foreign body — do not rub; a loose particle may be washed or wiped out, but an embedded object must be left in place and the eye covered for expert care.",
        "Do not press on an injured eyeball; cover the eye lightly and seek medical help.",
        "All significant eye injuries need urgent assessment to protect sight."
      ] },
      { h: "Ear disorders", list: [
        "Otitis media — infection of the middle ear, common in children, causing earache, fever, reduced hearing and, if the eardrum bursts, discharge; treated with analgesia and antibiotics when bacterial.",
        "Chronic suppurative otitis media (CSOM) — long-standing middle-ear infection with a perforated eardrum and persistent or recurring ear discharge and hearing loss; needs ear care and treatment to prevent complications.",
        "Mastoiditis — infection spreading to the mastoid bone behind the ear, a complication of middle-ear infection.",
        "Hearing impairment — partial or complete loss of hearing; the nurse communicates clearly, faces the patient and uses written or other aids as needed."
      ] },
      { h: "Nose and throat disorders", list: [
        "Sinusitis — inflammation of the sinuses, causing facial pain and pressure, a blocked or runny nose and headache.",
        "Nasal polyp and deviated nasal septum — cause nasal blockage and difficulty breathing through the nose; may need surgery.",
        "Tonsillitis — inflammation of the tonsils, causing a sore throat, difficulty swallowing, fever and enlarged tonsils; recurrent cases may need tonsillectomy. After tonsillectomy the nurse watches closely for bleeding (frequent swallowing is an early warning) and gives cool fluids.",
        "Epistaxis (nosebleed) — first aid is to sit the patient up, lean forward and pinch the soft part of the nose for several minutes."
      ] },
      { h: "Tracheostomy care", list: [
        "A tracheostomy is an opening made in the front of the neck into the trachea to help breathing, often with a tube in place.",
        "Keep the airway clear by suctioning secretions using sterile technique, as needed.",
        "Keep the stoma and tube clean and the inner tube patent; humidify the inspired air, as the nose no longer warms and moistens it.",
        "Keep emergency equipment (suction and a spare tube) at the bedside, observe breathing closely and provide a means of communication, as the patient cannot speak normally."
      ] },
      { h: "General nursing care", list: [
        "Teach correct use of eye and ear drops and good hand hygiene to prevent spreading infection.",
        "Promote safety for patients with reduced vision or hearing and communicate clearly.",
        "Give prescribed medicines, relieve pain and provide reassurance.",
        "Prepare and care for patients undergoing eye or ENT surgery and watch for complications such as bleeding.",
        "Teach prevention — eye protection at work, prompt treatment of infections and regular eye checks."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Differentiate between cataract and glaucoma.",
      "Describe the first aid for a chemical eye injury.",
      "Explain the causes, signs and nursing care of otitis media.",
      "Describe the post-operative nursing care after tonsillectomy.",
      "Outline the principles of tracheostomy care."
    ],
    assessment: [
      { type: "mcq", q: "A clouding of the lens of the eye is called:", options: ["Glaucoma", "Conjunctivitis", "Cataract", "Corneal ulcer"], answer: 2, rationale: "A cataract is clouding of the lens, causing gradual painless loss of vision." },
      { type: "mcq", q: "Glaucoma damages the optic nerve mainly because of:", options: ["Raised pressure inside the eye", "Low blood sugar", "A clouded lens", "Infection of the conjunctiva"], answer: 0, rationale: "Glaucoma is due to raised intraocular pressure damaging the optic nerve, causing vision loss." },
      { type: "mcq", q: "The IMMEDIATE first aid for a chemical splash in the eye is to:", options: ["Cover the eye and wait", "Wash the eye with plenty of clean water at once", "Rub the eye", "Apply ointment"], answer: 1, rationale: "Immediate copious irrigation with water or saline dilutes and removes the chemical to protect sight." },
      { type: "mcq", q: "Inflammation of the conjunctiva, often called 'pink eye', is:", options: ["Cataract", "Glaucoma", "Conjunctivitis", "Mastoiditis"], answer: 2, rationale: "Conjunctivitis (pink eye) is inflammation of the conjunctiva from infection or allergy." },
      { type: "mcq", q: "Infection of the middle ear, common in children, is:", options: ["Sinusitis", "Tonsillitis", "Mastoiditis", "Otitis media"], answer: 3, rationale: "Otitis media is middle-ear infection causing earache, fever and reduced hearing." },
      { type: "mcq", q: "After a tonsillectomy, an EARLY sign of bleeding the nurse must watch for is:", options: ["Frequent swallowing", "Increased appetite", "Warm dry skin", "Slow pulse"], answer: 0, rationale: "Frequent swallowing may indicate blood trickling down the throat — an early sign of post-tonsillectomy bleeding." },
      { type: "mcq", q: "Long-standing middle-ear infection with a perforated eardrum and discharge is:", options: ["Acute otitis media", "Sinusitis", "Chronic suppurative otitis media (CSOM)", "Conjunctivitis"], answer: 2, rationale: "CSOM is chronic middle-ear infection with a perforated drum and persistent discharge." },
      { type: "mcq", q: "A tracheostomy is an opening into the:", options: ["Oesophagus", "Stomach", "Trachea (windpipe)", "Sinus"], answer: 2, rationale: "A tracheostomy is a surgical opening into the trachea to assist breathing." },
      { type: "mcq", q: "When suctioning a tracheostomy, the nurse should use:", options: ["Sterile technique", "Clean technique only", "No special technique", "Bare hands"], answer: 0, rationale: "Sterile technique during tracheostomy suctioning prevents introducing infection into the airway." },
      { type: "mcq", q: "First aid for a nosebleed (epistaxis) is to sit up, lean forward and:", options: ["Tilt the head back", "Lie flat", "Blow the nose hard", "Pinch the soft part of the nose"], answer: 3, rationale: "Leaning forward and pinching the soft part of the nose helps stop the bleeding and avoids swallowing blood." }
      , { type: "fill", q: "Raised pressure inside the eye that damages the optic nerve causes ____.", accept: ["glaucoma"], rationale: "Glaucoma is optic-nerve damage from raised intraocular pressure." }
      , { type: "fill", q: "A surgical opening made into the trachea to assist breathing is called a ____.", accept: ["tracheostomy", "tracheotomy"], rationale: "A tracheostomy is an opening in the trachea, often with a tube, to maintain the airway." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "msn-17-skin-burns",
    unit: "Unit 4 · Special Areas",
    title: "Skin Disorders & Burns",
    readMinutes: 17,
    summary: "Common skin disorders and, in detail, burns: their types and causes, estimating burn size with the rule of nines, depth, immediate care, fluid replacement, and the prevention of complications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The skin and common disorders", p: "The skin is the body's largest organ; it protects against injury and infection, controls temperature, senses touch, and prevents loss of fluid. Common skin disorders include infections (bacterial, fungal such as ringworm, viral and parasitic such as scabies), allergic conditions (eczema and dermatitis), and chronic conditions (such as psoriasis). General care includes good hygiene, keeping the skin clean and the cause controlled, treating itching, preventing scratching and infection, and applying topical treatment as prescribed." },
      { h: "Burns and their causes", list: [
        "A burn is tissue damage caused by heat, chemicals, electricity, radiation or friction.",
        "Thermal burns — from flames, hot liquids (scalds), steam or hot objects (the most common).",
        "Chemical burns — from strong acids or alkalis; flush with large amounts of water.",
        "Electrical burns — from electric current; the surface damage may hide severe deep injury, and the heart rhythm must be watched.",
        "Burns destroy the skin's protective barrier, so fluid loss, infection and temperature loss become major dangers."
      ] },
      { h: "Depth of burns", list: [
        "Superficial (first-degree) — affects only the outer layer (epidermis); red, painful and dry (like sunburn); heals quickly.",
        "Partial-thickness (second-degree) — affects the epidermis and part of the dermis; red, blistered, moist and very painful.",
        "Full-thickness (third-degree) — destroys the full skin and may reach deeper; appears white, brown or charred and leathery and is painless in the centre because the nerves are destroyed; needs skin grafting."
      ] },
      { h: "Estimating the size of a burn (rule of nines)", p: "The size of a burn is given as the percentage of total body surface area (TBSA) burned. In an adult, the rule of nines divides the body into areas that are each about 9% (or a multiple of 9): the head and neck 9%, each arm 9%, the front of the trunk 18%, the back of the trunk 18%, each leg 18%, and the genital area about 1%. The bigger the burned area, the more serious the burn and the greater the fluid loss. (Children have different proportions — a relatively larger head.)", figure: {
        caption: "The rule of nines for estimating the percentage of total body surface area burned in an adult.",
        svg: '<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rule of nines body chart for adults."><rect x="120" y="15" width="80" height="40" rx="18" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="160" y="40" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Head 9%</text><rect x="120" y="60" width="80" height="95" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="160" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Front</text><text x="160" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">trunk 18%</text><text x="160" y="140" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">(back 18%)</text><rect x="70" y="60" width="46" height="95" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="93" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Arm</text><text x="93" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">9%</text><rect x="204" y="60" width="46" height="95" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="227" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Arm</text><text x="227" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">9%</text><rect x="120" y="160" width="38" height="90" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="139" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Leg</text><text x="139" y="216" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">18%</text><rect x="162" y="160" width="38" height="90" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="181" y="200" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Leg</text><text x="181" y="216" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">18%</text></svg>'
      } },
      { h: "Immediate (first aid) care of burns", list: [
        "Stop the burning: remove the person from danger, put out flames (stop, drop and roll) and remove burning or soaked clothing and jewellery (unless stuck to the skin).",
        "Cool the burn with cool (not ice-cold) running water for several minutes; do not use ice, which can deepen the injury.",
        "Cover the burn with a clean, non-stick dressing or cloth.",
        "Do NOT apply toothpaste, butter, oil or other home remedies, and do not burst blisters.",
        "Check Airway, Breathing and Circulation, especially if there is smoke inhalation, give pain relief and arrange urgent transfer for a major burn."
      ] },
      { h: "Fluid replacement and life-threatening events", list: [
        "In a large burn, huge amounts of fluid leak from the circulation into the tissues, so the patient can quickly develop hypovolaemic (burn) shock; prompt IV fluid replacement is life-saving.",
        "Fluid needs are calculated from the patient's weight and the percentage of body surface burned, using a standard formula, and adjusted by monitoring urine output (a key guide to whether replacement is adequate).",
        "Airway danger — burns to the face or neck or smoke inhalation can cause the airway to swell and obstruct; watch for hoarseness, soot around the mouth and breathing difficulty, and be ready to support the airway.",
        "Later dangers — infection (the leading cause of death in burns once the patient survives the first phase), as the skin barrier is lost."
      ] },
      { h: "Nursing management of burns", list: [
        "Maintain the airway and give oxygen; monitor breathing closely.",
        "Give IV fluids as prescribed and monitor vital signs and hourly urine output.",
        "Use strict aseptic technique for wound care to prevent infection; the patient is very vulnerable.",
        "Provide strong pain relief, keep the patient warm and maintain good nutrition (high protein and calories for healing).",
        "Position to prevent contractures, support movement and provide great emotional support, as burns are painful and frightening."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Classify burns by cause and by depth.",
      "Explain how to estimate the size of a burn using the rule of nines.",
      "Describe the immediate first-aid care of a patient with burns.",
      "Discuss fluid replacement therapy and the life-threatening complications of major burns.",
      "Outline the nursing management of a patient with extensive burns."
    ],
    assessment: [
      { type: "mcq", q: "A full-thickness (third-degree) burn is typically:", options: ["Red and very painful with blisters", "White or charred, leathery and painless in the centre", "Only red like sunburn", "Always small"], answer: 1, rationale: "Full-thickness burns destroy the skin and nerves, appearing white/charred and painless centrally; they need grafting." },
      { type: "mcq", q: "Using the rule of nines in an adult, the WHOLE front of the trunk is about:", options: ["9%", "27%", "18%", "36%"], answer: 2, rationale: "The front of the trunk is about 18% of total body surface area in an adult." },
      { type: "mcq", q: "Using the rule of nines, an entire arm in an adult is about:", options: ["4.5%", "18%", "27%", "9%"], answer: 3, rationale: "Each whole arm is about 9% of body surface area in the adult rule of nines." },
      { type: "mcq", q: "The correct way to cool a fresh burn is to use:", options: ["Cool running water for several minutes", "Ice cubes directly", "Butter", "Toothpaste"], answer: 0, rationale: "Cool (not ice-cold) running water cools the burn; ice can deepen injury and home remedies cause harm." },
      { type: "mcq", q: "The MAIN early life-threatening danger in a large burn is:", options: ["Constipation", "Hair loss", "Hypovolaemic (burn) shock from fluid loss", "Mild itching"], answer: 2, rationale: "Massive fluid loss from burned tissue causes hypovolaemic shock, so fluid replacement is urgent." },
      { type: "mcq", q: "Which sign suggests a dangerous airway (inhalation) injury in a burn patient?", options: ["Hoarseness and soot around the mouth", "Pink healthy skin", "Normal breathing", "Good appetite"], answer: 0, rationale: "Hoarseness, soot around the mouth and breathing difficulty warn of airway burns and swelling." },
      { type: "mcq", q: "The best guide that fluid replacement in a burn patient is adequate is:", options: ["Skin colour", "Hair growth", "Appetite", "Hourly urine output"], answer: 3, rationale: "Hourly urine output reflects kidney perfusion and is the key guide to adequate fluid replacement." },
      { type: "mcq", q: "Once a burn patient survives the first phase, the leading cause of death is:", options: ["Infection", "Hunger", "Boredom", "Constipation"], answer: 0, rationale: "Loss of the skin barrier makes infection the leading later cause of death in burns." },
      { type: "mcq", q: "Wound care for a burn patient must be performed using:", options: ["Clean technique only", "Strict aseptic (sterile) technique", "No special precautions", "Bare hands"], answer: 1, rationale: "Strict asepsis is essential because the burn patient has lost the skin's protective barrier." },
      { type: "mcq", q: "A first-degree (superficial) burn affects:", options: ["Only the outer layer (epidermis)", "The full skin and muscle", "Bone", "Only the dermis"], answer: 0, rationale: "Superficial (first-degree) burns affect only the epidermis, appearing red and dry like sunburn." }
      , { type: "fill", q: "The method used to estimate the percentage of body surface area burned in an adult is the rule of ____.", accept: ["nines", "nine"], rationale: "The rule of nines divides the adult body into areas of about 9% to estimate burn size." }
      , { type: "fill", q: "Massive fluid loss from a large burn can cause ____ shock.", accept: ["hypovolaemic", "hypovolemic", "burn"], rationale: "Fluid shifting out of the circulation in a major burn causes hypovolaemic (burn) shock." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "msn-18-oncology",
    unit: "Unit 4 · Special Areas",
    title: "Oncology (Cancer) Nursing",
    readMinutes: 17,
    summary: "The concept and classification of cancer, its warning signs, treatments and their side effects, common cancers (breast, cervical, lung), prevention, and the psychosocial and nursing care of the patient with cancer.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is cancer?", p: "Cancer is a disease in which abnormal body cells grow and divide in an uncontrolled way, ignoring the body's normal controls. These cells can invade and destroy nearby tissue and spread to distant parts of the body through the blood or lymph — a process called metastasis. A growth of abnormal cells is a tumour. The spread (metastasis) is what makes cancer so dangerous." },
      { h: "Benign and malignant tumours", list: [
        "Benign tumour — grows slowly, stays in one place (does not spread), is usually encapsulated and is generally not life-threatening unless it presses on a vital structure.",
        "Malignant tumour — this is cancer: it grows quickly, invades nearby tissue, spreads (metastasises) to other parts and can recur after treatment.",
        "Cancers are also classified by the tissue of origin — for example, carcinoma (from surface/lining tissue, the commonest), sarcoma (from connective tissue and bone), leukaemia (from blood) and lymphoma (from lymph tissue)."
      ] },
      { h: "Warning signs of cancer (CAUTION)", p: "The American Cancer Society's warning signs are remembered as CAUTION: Change in bowel or bladder habits; A sore that does not heal; Unusual bleeding or discharge; Thickening or a lump (for example, in the breast); Indigestion or difficulty swallowing; Obvious change in a wart or mole; Nagging cough or hoarseness. Any of these warrants prompt medical assessment, because early detection greatly improves the chance of cure.", figure: {
        caption: "The seven warning signs of cancer (CAUTION).",
        svg: '<svg viewBox="0 0 360 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CAUTION warning signs of cancer."><text x="20" y="30" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">C</text><text x="42" y="30" font-family="sans-serif" font-size="11" fill="#7C2D12">Change in bowel/bladder habit</text><text x="20" y="60" font-family="sans-serif" font-size="14" font-weight="700" fill="#B45309">A</text><text x="42" y="60" font-family="sans-serif" font-size="11" fill="#7C2D12">A sore that does not heal</text><text x="20" y="90" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">U</text><text x="42" y="90" font-family="sans-serif" font-size="11" fill="#7C2D12">Unusual bleeding or discharge</text><text x="20" y="120" font-family="sans-serif" font-size="14" font-weight="700" fill="#B45309">T</text><text x="42" y="120" font-family="sans-serif" font-size="11" fill="#7C2D12">Thickening or lump</text><text x="20" y="150" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">I</text><text x="42" y="150" font-family="sans-serif" font-size="11" fill="#7C2D12">Indigestion / trouble swallowing</text><text x="20" y="180" font-family="sans-serif" font-size="14" font-weight="700" fill="#B45309">O</text><text x="42" y="180" font-family="sans-serif" font-size="11" fill="#7C2D12">Obvious change in wart or mole</text><text x="20" y="210" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">N</text><text x="42" y="210" font-family="sans-serif" font-size="11" fill="#7C2D12">Nagging cough or hoarseness</text></svg>'
      } },
      { h: "Cancer treatments", list: [
        "Surgery — removes the tumour; may be curative (early disease) or to relieve symptoms.",
        "Chemotherapy — drugs that kill rapidly dividing cells throughout the body; useful for cancers that have spread.",
        "Radiotherapy — high-energy rays that destroy cancer cells in a targeted area.",
        "Other — hormone therapy, immunotherapy and targeted therapy for certain cancers.",
        "Treatments are often combined; the plan depends on the type, site and stage of the cancer."
      ] },
      { h: "Side effects of chemotherapy and radiotherapy", list: [
        "Bone marrow suppression — low white cells (high infection risk), low platelets (bleeding) and low red cells (anaemia); this is the most dangerous effect.",
        "Nausea and vomiting — controlled with anti-emetic drugs.",
        "Hair loss (alopecia) — usually temporary; offer support, as it is distressing.",
        "Mouth sores (mucositis) and diarrhoea — from damage to fast-growing lining cells; provide gentle mouth care.",
        "Tiredness, loss of appetite and skin reactions in the treated area (radiotherapy)."
      ] },
      { h: "Common cancers", list: [
        "Breast cancer — the commonest cancer in women; a painless breast lump is the usual first sign. Teach breast self-examination and the value of screening; treatment may include surgery, chemotherapy, radiotherapy and hormone therapy.",
        "Cervical cancer — cancer of the neck of the womb, strongly linked to human papillomavirus (HPV) infection; it is largely preventable by HPV vaccination and detectable early by cervical screening (Pap smear/VIA).",
        "Lung cancer — strongly linked to smoking; signs include a persistent cough, coughing blood, breathlessness, chest pain and weight loss; often found late, so prevention by not smoking is vital."
      ] },
      { h: "Prevention and early detection", list: [
        "Avoid tobacco in all forms (the single biggest preventable cause of cancer) and limit alcohol.",
        "Eat a healthy diet, keep a healthy weight and be physically active.",
        "Protect against known infections — HPV vaccine (cervical cancer) and hepatitis B vaccine (liver cancer).",
        "Avoid excess sun and known cancer-causing chemicals.",
        "Take up screening — breast, cervical and others as available — and report warning signs early."
      ] },
      { h: "Psychosocial and nursing care", list: [
        "A cancer diagnosis brings fear, anxiety, anger, grief and depression; listen, give honest information and emotional support, and involve the family.",
        "Control symptoms well — especially pain (use the WHO analgesic ladder) and nausea.",
        "Protect the immunosuppressed patient from infection and watch for bleeding and anaemia.",
        "Support nutrition, rest and dignity; respect the patient's spiritual and cultural needs.",
        "For advanced cancer, provide palliative care — comfort, symptom relief and quality of life — and support the patient and family with compassion."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Define cancer and differentiate between benign and malignant tumours.",
      "List the seven warning signs of cancer (CAUTION).",
      "Describe the main treatments for cancer and the major side effects of chemotherapy.",
      "Discuss the prevention and early detection of cancer.",
      "Describe the psychosocial and nursing care of a patient with cancer."
    ],
    assessment: [
      { type: "mcq", q: "The spread of cancer from its original site to distant parts of the body is called:", options: ["Inflammation", "Metastasis", "Remission", "Hypertrophy"], answer: 1, rationale: "Metastasis is the spread of cancer cells to distant sites via blood or lymph." },
      { type: "mcq", q: "Which feature describes a MALIGNANT tumour?", options: ["Grows slowly and stays in one place", "Always harmless", "Invades and spreads to other parts", "Never recurs"], answer: 2, rationale: "Malignant tumours (cancer) invade nearby tissue and metastasise to other parts of the body." },
      { type: "mcq", q: "In the cancer warning signs 'CAUTION', the letter 'U' stands for:", options: ["Ulcer in the mouth", "Unexplained fever", "Urinary frequency", "Unusual bleeding or discharge"], answer: 3, rationale: "U = Unusual bleeding or discharge, one of the seven warning signs of cancer." },
      { type: "mcq", q: "Chemotherapy works by killing cells that are:", options: ["Rapidly dividing", "Slowly dividing", "Already dead", "Only in the skin"], answer: 0, rationale: "Chemotherapy targets rapidly dividing cells, which is why it also harms some normal fast-growing cells." },
      { type: "mcq", q: "The MOST dangerous side effect of chemotherapy is:", options: ["Hair loss", "Mild nausea", "Bone marrow suppression", "Tiredness"], answer: 2, rationale: "Bone marrow suppression causes infection, bleeding and anaemia, and is the most dangerous effect." },
      { type: "mcq", q: "The most common first sign of breast cancer is:", options: ["A painless breast lump", "Severe chest pain", "High fever", "Yellow skin"], answer: 0, rationale: "A painless lump in the breast is the typical first sign of breast cancer." },
      { type: "mcq", q: "Cervical cancer is strongly linked to infection with:", options: ["Hepatitis B virus", "HIV", "Human papillomavirus (HPV)", "Tuberculosis"], answer: 2, rationale: "Most cervical cancers are caused by persistent HPV infection, now preventable by vaccination." },
      { type: "mcq", q: "The single biggest preventable cause of cancer is:", options: ["Tobacco use", "Drinking water", "Exercise", "Eating fruit"], answer: 0, rationale: "Tobacco use is the leading preventable cause of cancer, especially lung cancer." },
      { type: "mcq", q: "Care that focuses on comfort and quality of life in advanced cancer is called:", options: ["Curative care", "Preventive care", "Emergency care", "Palliative care"], answer: 3, rationale: "Palliative care relieves symptoms and supports quality of life when cure is not possible." },
      { type: "mcq", q: "A cancer arising from surface or lining (epithelial) tissue is called a:", options: ["Carcinoma", "Sarcoma", "Leukaemia", "Lymphoma"], answer: 0, rationale: "Carcinomas arise from epithelial (surface/lining) tissue and are the most common cancers." }
      , { type: "fill", q: "A tumour that grows slowly and does NOT spread to other parts of the body is called ____.", accept: ["benign"], rationale: "A benign tumour is non-cancerous, stays local and does not metastasise." }
      , { type: "fill", q: "The cancer treatment that uses high-energy rays to destroy cancer cells in a targeted area is called ____.", accept: ["radiotherapy", "radiation therapy", "radiation"], rationale: "Radiotherapy uses high-energy radiation to kill cancer cells in a defined area." }
    ]
  },

  /* ============ TOPIC 19 ============ */
  {
    id: "msn-19-communicable",
    unit: "Unit 4 · Special Areas",
    title: "Communicable & Infectious Diseases",
    readMinutes: 17,
    summary: "Common communicable diseases in this region — malaria, diarrhoeal diseases, typhoid, dengue, chikungunya, leprosy and HIV/AIDS — with their causes, features, treatment, prevention and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Communicable disease and its control", p: "A communicable (infectious) disease is one that can be passed from one person to another, directly or indirectly, by germs (bacteria, viruses, parasites). Control rests on breaking the chain of infection: treating the source, interrupting transmission (clean water, sanitation, vector control, hand hygiene and safe injections), and protecting people (vaccination, health education). The nurse plays a central role in care, infection control and teaching prevention." },
      { h: "Malaria", list: [
        "Cause: a parasite (Plasmodium) spread by the bite of an infected female Anopheles mosquito.",
        "Signs: cycles of fever with shaking chills (rigors) and sweating, headache, body ache and, in severe cases, anaemia, jaundice and complications affecting the brain (cerebral malaria).",
        "Diagnosis: examination of a blood film or a rapid diagnostic test for the parasite.",
        "Treatment: anti-malarial drugs as per the national protocol; complete the full course.",
        "Prevention: mosquito control, insecticide-treated bed nets, removing stagnant water and protecting against bites."
      ] },
      { h: "Diarrhoeal diseases and oral rehydration", p: "Diarrhoea is the frequent passage of loose, watery stools, usually from infection through contaminated food or water (including cholera). Its main danger is dehydration and loss of electrolytes, especially in children and the elderly. The key treatment is rehydration: oral rehydration solution (ORS) for mild to moderate cases and IV fluids for severe dehydration, together with continued feeding and zinc in children. Prevention is safe water, good sanitation, hand washing and food hygiene.", figure: {
        caption: "Managing diarrhoea: assess dehydration and replace fluid (ORS or IV).",
        svg: '<svg viewBox="0 0 540 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diarrhoea management: assess dehydration then rehydrate."><defs><marker id="msnArr19" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="15" y="60" width="150" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="90" y="84" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Diarrhoea</text><text x="90" y="102" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">fluid &amp; salt loss</text><rect x="195" y="60" width="150" height="55" rx="9" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="270" y="84" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Assess</text><text x="270" y="102" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">dehydration level</text><rect x="375" y="35" width="150" height="45" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="450" y="56" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Mild/moderate: ORS</text><text x="450" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">+ keep feeding</text><rect x="375" y="95" width="150" height="45" rx="9" fill="#FB923C" stroke="#7C2D12" stroke-width="2"/><text x="450" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Severe: IV fluids</text><text x="450" y="132" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">urgent</text><line x1="165" y1="87" x2="192" y2="87" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr19)"/><line x1="345" y1="80" x2="372" y2="62" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr19)"/><line x1="345" y1="95" x2="372" y2="112" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr19)"/></svg>'
      } },
      { h: "Typhoid fever", list: [
        "Cause: the bacterium Salmonella typhi, spread by food and water contaminated with faeces (faecal-oral route).",
        "Signs: a gradually rising step-ladder fever, headache, abdominal pain, constipation or diarrhoea, a coated tongue, an enlarged spleen and sometimes rose-coloured spots; a dangerous complication is intestinal bleeding or perforation.",
        "Treatment: appropriate antibiotics, rest, fluids and a soft, easily digested diet.",
        "Prevention: safe water and sanitation, food hygiene, hand washing and typhoid vaccination."
      ] },
      { h: "Dengue and chikungunya", list: [
        "Both are viral diseases spread by the bite of the Aedes mosquito, which breeds in clean, stored water and bites by day.",
        "Dengue — high fever, severe headache, pain behind the eyes, severe muscle and joint pain ('breakbone fever') and a rash; warning signs of severe dengue include bleeding, abdominal pain, persistent vomiting and a falling platelet count, which can lead to shock.",
        "Chikungunya — fever with severe joint pain that can last a long time, plus headache and rash.",
        "Care: there is no specific cure, so treatment is supportive — fluids, rest and paracetamol for fever (AVOID aspirin and NSAIDs in dengue because they increase bleeding); watch closely for warning signs.",
        "Prevention: remove mosquito breeding sites (empty stored water), use nets and repellents."
      ] },
      { h: "Leprosy (Hansen's disease)", p: "Leprosy is a chronic infectious disease caused by Mycobacterium leprae, affecting the skin and the nerves. It causes pale or reddish skin patches with loss of sensation, thickened nerves, and weakness or deformity of the hands, feet and face if untreated. It is curable with multi-drug therapy (MDT) taken for several months; with treatment the patient quickly becomes non-infectious. Care includes giving MDT, protecting numb hands and feet from injury, preventing deformity, and reducing stigma through education." },
      { h: "HIV/AIDS", list: [
        "HIV (human immunodeficiency virus) attacks and weakens the immune system (especially CD4 cells); AIDS is the advanced stage, when immunity is so low that serious infections and cancers occur.",
        "Spread: through unprotected sex, infected blood (unsafe transfusions and needles) and from mother to baby (in pregnancy, birth or breastfeeding). It is NOT spread by casual contact, sharing food, hugging or insect bites.",
        "Care and treatment: antiretroviral therapy (ART) controls the virus and lets people live long, healthy lives, but must be taken regularly and lifelong; treat and prevent opportunistic infections.",
        "Prevention: safe sex and condoms, safe blood and injections, prevention of mother-to-child transmission, and voluntary counselling and testing (VCT).",
        "Nursing: use standard precautions for all patients, give non-judgemental care, maintain confidentiality and provide counselling and support to reduce stigma."
      ] },
      { h: "General nursing care in communicable disease", list: [
        "Use standard precautions and appropriate isolation; practise strict hand hygiene.",
        "Manage fever, maintain fluid and electrolyte balance and provide good nutrition and rest.",
        "Give prescribed drugs correctly and stress completing the full course (especially antibiotics and anti-TB/leprosy/HIV drugs) to prevent resistance and relapse.",
        "Monitor for complications and danger signs and report them promptly.",
        "Teach prevention — safe water, sanitation, vector control, vaccination and safe practices — and notify reportable diseases to public health."
      ] }
    ],
    references: REF_MSN,
    examQuestions: [
      "Describe the cause, signs, treatment and prevention of malaria.",
      "Explain the management of diarrhoeal disease, including oral rehydration therapy.",
      "Describe the features and nursing care of a patient with dengue fever.",
      "Discuss the modes of transmission and prevention of HIV/AIDS.",
      "Describe leprosy and the principles of its treatment and care."
    ],
    assessment: [
      { type: "mcq", q: "Malaria is transmitted by the bite of the:", options: ["Aedes mosquito", "Female Anopheles mosquito", "Housefly", "Tick"], answer: 1, rationale: "Malaria parasites are spread by the bite of an infected female Anopheles mosquito." },
      { type: "mcq", q: "The MAIN danger in diarrhoeal disease, especially in children, is:", options: ["Dehydration", "Weight gain", "High blood sugar", "Hair loss"], answer: 0, rationale: "Diarrhoea causes loss of fluid and electrolytes, leading to dangerous dehydration." },
      { type: "mcq", q: "The first-line treatment for mild to moderate dehydration from diarrhoea is:", options: ["IV fluids only", "Antibiotics only", "Oral rehydration solution (ORS)", "Withholding all fluids"], answer: 2, rationale: "ORS is the first-line, life-saving treatment for mild to moderate dehydration; IV is for severe cases." },
      { type: "mcq", q: "Typhoid fever is caused by:", options: ["Salmonella typhi (bacterium)", "A virus", "A parasite", "A fungus"], answer: 0, rationale: "Typhoid is caused by the bacterium Salmonella typhi, spread by the faecal-oral route." },
      { type: "mcq", q: "Dengue and chikungunya are both spread by the:", options: ["Anopheles mosquito", "Sandfly", "Aedes mosquito", "Louse"], answer: 2, rationale: "Dengue and chikungunya viruses are spread by the day-biting Aedes mosquito." },
      { type: "mcq", q: "Which drug should be AVOIDED for fever in a patient with dengue?", options: ["Paracetamol", "ORS", "Plain water", "Aspirin"], answer: 3, rationale: "Aspirin (and NSAIDs) increase bleeding risk in dengue; paracetamol is the safer choice for fever." },
      { type: "mcq", q: "Leprosy mainly affects the:", options: ["Liver and kidneys", "Heart and lungs", "Skin and nerves", "Bones only"], answer: 2, rationale: "Leprosy (Mycobacterium leprae) affects the skin and peripheral nerves, causing patches and numbness." },
      { type: "mcq", q: "HIV is transmitted by:", options: ["Unprotected sex, infected blood and mother to baby", "Hugging and sharing food", "Insect bites", "Coughing"], answer: 0, rationale: "HIV spreads via unprotected sex, infected blood/needles and mother to baby — not by casual contact." },
      { type: "mcq", q: "The treatment that controls HIV and must be taken lifelong is:", options: ["Antibiotics", "Anti-malarials", "Antiretroviral therapy (ART)", "Chemotherapy"], answer: 2, rationale: "Antiretroviral therapy (ART) suppresses HIV and must be taken regularly for life." },
      { type: "mcq", q: "To protect against blood-borne infections such as HIV and hepatitis B, the nurse should use:", options: ["No precautions for known-negative patients", "Precautions only in surgery", "Standard precautions for ALL patients", "Gloves only when convenient"], answer: 2, rationale: "Standard precautions are applied to every patient because infection status is not always known." }
      , { type: "fill", q: "The life-saving solution of water, salts and sugar given by mouth to treat dehydration is abbreviated ____.", accept: ["ORS", "oral rehydration solution"], rationale: "ORS (oral rehydration solution) replaces lost fluid and electrolytes in diarrhoea." }
      , { type: "fill", q: "The advanced stage of HIV infection, with severe loss of immunity, is called ____.", accept: ["AIDS"], rationale: "AIDS (acquired immune deficiency syndrome) is the advanced stage of HIV infection." }
    ]
  },

  /* ============ TOPIC 20 ============ */
  {
    id: "msn-20-critical-emergency",
    unit: "Unit 4 · Special Areas",
    title: "Care of the Critically Ill & Emergency Nursing",
    readMinutes: 17,
    summary: "Principles of critical care and emergency nursing — the ABCDE approach, triage, basic life support, care of the unconscious patient, common emergencies and the role of the ICU/HDU nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Critical care and emergency nursing", p: "Critically ill patients have life-threatening illness or injury and need close, continuous monitoring and rapid treatment, usually in an intensive care unit (ICU) or high dependency unit (HDU). Emergency nursing is the immediate care of patients with sudden, urgent problems. In both, the nurse must recognise deterioration early, set priorities quickly and act fast, because minutes matter." },
      { h: "The ABCDE approach", p: "Critically ill and emergency patients are assessed and treated in a strict order of priority — ABCDE — always treating the most immediately life-threatening problem first: A — Airway (is it open and clear?), B — Breathing (rate, effort, oxygen), C — Circulation (pulse, blood pressure, bleeding), D — Disability (level of consciousness, pupils, blood sugar), E — Exposure (examine the whole body while keeping the patient warm and dignified). You move to the next step only when the current one is managed.", figure: {
        caption: "The ABCDE approach: assess and treat life-threatening problems in order of priority.",
        svg: '<svg viewBox="0 0 540 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ABCDE approach to the critically ill patient."><defs><marker id="msnArr20" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="8" y="45" width="92" height="50" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="54" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">A</text><text x="54" y="85" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">Airway</text><rect x="115" y="45" width="92" height="50" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="161" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">B</text><text x="161" y="85" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">Breathing</text><rect x="222" y="45" width="92" height="50" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="268" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#B45309">C</text><text x="268" y="85" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">Circulation</text><rect x="329" y="45" width="92" height="50" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="375" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">D</text><text x="375" y="85" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">Disability</text><rect x="436" y="45" width="96" height="50" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="484" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">E</text><text x="484" y="85" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">Exposure</text><line x1="100" y1="70" x2="113" y2="70" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr20)"/><line x1="207" y1="70" x2="220" y2="70" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr20)"/><line x1="314" y1="70" x2="327" y2="70" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr20)"/><line x1="421" y1="70" x2="434" y2="70" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#msnArr20)"/></svg>'
      } },
      { h: "Triage", p: "Triage is the process of quickly sorting patients by the urgency of their need so that the sickest are treated first when resources are limited (for example, in a busy emergency department or a disaster). Patients are commonly grouped as emergency/immediate (life-threatening — treat at once), urgent (serious but can wait a short time) and non-urgent (minor — can wait longer). Triage is repeated, because a patient's condition can change." },
      { h: "Basic life support (BLS)", list: [
        "Check the scene for danger, then check the patient's response and breathing; call for help and get a defibrillator.",
        "If there is no normal breathing and no pulse, start CPR — high-quality chest compressions (about 100-120 per minute, pressing hard in the centre of the chest) with rescue breaths if trained.",
        "Use an automated external defibrillator (AED) as soon as it is available and follow its prompts.",
        "Continue resuscitation with minimal interruptions until help arrives or the patient recovers.",
        "The chain of survival: early recognition and call for help, early CPR, early defibrillation and early advanced care."
      ] },
      { h: "Care of the unconscious patient", list: [
        "Priority is the airway — an unconscious patient cannot protect their own airway and may choke on the tongue, secretions or vomit.",
        "Position the patient on the side (recovery position) unless contraindicated, and keep the airway clear by suctioning as needed.",
        "Monitor the level of consciousness (e.g. with the Glasgow Coma Scale), pupils, vital signs and oxygen saturation.",
        "Give meticulous nursing care: eye care, mouth care, skin/pressure-area care and regular turning, bladder and bowel care, and prevention of clots and contractures.",
        "Never give anything by mouth to an unconscious patient (risk of aspiration); meet nutrition and fluids by other routes as prescribed."
      ] },
      { h: "Common emergencies", list: [
        "Cardiac arrest — start BLS/CPR immediately and call the resuscitation team.",
        "Choking — encourage coughing; if the airway is blocked, give back blows and abdominal thrusts.",
        "Severe bleeding (haemorrhage) — apply firm direct pressure, elevate, and treat for shock.",
        "Anaphylaxis (severe allergy) — give adrenaline (epinephrine) at once, plus oxygen and fluids.",
        "Poisoning — remove from the source, support ABC, identify the poison and give the antidote where one exists; seek expert advice.",
        "Drowning, burns, head injury and seizures — support ABC and give condition-specific care."
      ] },
      { h: "Monitoring the critically ill patient", list: [
        "Continuously monitor the airway, breathing, circulation and conscious level.",
        "Watch vital signs, oxygen saturation, the heart rhythm (ECG monitor), urine output and laboratory results.",
        "Use early-warning observation charts to detect deterioration early and escalate quickly.",
        "Care for patients on machines safely — oxygen, ventilators, infusion pumps and monitors — and check alarms.",
        "Keep accurate records, including a careful intake-output chart, and communicate clearly within the team."
      ] },
      { h: "Holistic and ethical care", p: "Even in the high-technology setting of critical care, the patient is a person. The nurse maintains dignity, gives reassurance and explanation (the conscious patient may be frightened and the unconscious patient may still hear), and supports the anxious family with honest information. Ethical issues — consent, end-of-life decisions and truth-telling — must be handled with sensitivity, and care continues to comfort the patient and family even when cure is not possible." }
    ],
    references: REF_MSN,
    examQuestions: [
      "Explain the ABCDE approach to the assessment of a critically ill patient.",
      "Define triage and describe its categories.",
      "Describe the steps of basic life support (BLS) and the chain of survival.",
      "Outline the nursing care of an unconscious patient.",
      "Describe the immediate management of two common emergencies (e.g. cardiac arrest and anaphylaxis)."
    ],
    assessment: [
      { type: "mcq", q: "In the ABCDE approach, the FIRST priority is always:", options: ["Breathing", "Airway", "Circulation", "Disability"], answer: 1, rationale: "Airway is assessed and secured first, because a blocked airway kills fastest." },
      { type: "mcq", q: "In ABCDE, the letter 'D' stands for:", options: ["Drugs", "Diet", "Disability (consciousness/neurological)", "Drainage"], answer: 2, rationale: "D = Disability, a rapid check of consciousness, pupils and blood sugar." },
      { type: "mcq", q: "Triage is the process of:", options: ["Cleaning wounds", "Giving medicines", "Recording vital signs", "Sorting patients by urgency of need"], answer: 3, rationale: "Triage sorts patients so the most urgent (sickest) are treated first when resources are limited." },
      { type: "mcq", q: "The recommended rate of chest compressions in CPR is about:", options: ["100-120 per minute", "40-60 per minute", "150-170 per minute", "200 per minute"], answer: 0, rationale: "High-quality CPR uses about 100-120 chest compressions per minute." },
      { type: "mcq", q: "The safest position for an unconscious patient who is breathing is the:", options: ["Flat on the back", "Sitting upright", "Recovery (side-lying) position", "Head-down position"], answer: 2, rationale: "The recovery position keeps the airway open and lets secretions drain, preventing aspiration." },
      { type: "mcq", q: "An unconscious patient should NEVER be given:", options: ["Oxygen", "Eye care", "Turning", "Anything by mouth"], answer: 3, rationale: "Oral intake risks aspiration in an unconscious patient who cannot protect the airway." },
      { type: "mcq", q: "The immediate treatment of anaphylaxis (severe allergic reaction) is:", options: ["Adrenaline (epinephrine)", "Paracetamol", "Antibiotics", "Aspirin"], answer: 0, rationale: "Adrenaline (epinephrine) is the first-line, life-saving drug in anaphylaxis." },
      { type: "mcq", q: "For severe external bleeding, the FIRST action is to:", options: ["Give a drink", "Raise the head", "Apply firm direct pressure to the wound", "Wait and watch"], answer: 2, rationale: "Firm direct pressure (and elevation) is the immediate way to control external haemorrhage." },
      { type: "mcq", q: "An AED used during resuscitation is a/an:", options: ["Automated external defibrillator", "Airway entry device", "Anti-emetic drug", "Arterial echo detector"], answer: 0, rationale: "An AED (automated external defibrillator) delivers a shock to restore a normal heart rhythm." },
      { type: "mcq", q: "Which best reflects holistic care of the critically ill patient?", options: ["Focus only on machines", "Maintain dignity, reassure the patient and support the family", "Ignore the conscious patient's fears", "Avoid talking to an unconscious patient"], answer: 1, rationale: "Holistic critical care treats the person — dignity, reassurance and family support — not just the equipment." }
      , { type: "fill", q: "The ordered priority approach to a critically ill patient (Airway, Breathing, Circulation, Disability, Exposure) is called the ____ approach.", accept: ["ABCDE", "ABCDE approach"], rationale: "ABCDE structures assessment so the most life-threatening problem is treated first." }
      , { type: "fill", q: "Sorting patients according to the urgency of their need for care is called ____.", accept: ["triage"], rationale: "Triage prioritises patients so the sickest are treated first when resources are limited." }
    ]
  }
];
