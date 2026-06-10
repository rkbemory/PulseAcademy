/* Post Basic BSc in Nursing — Admission Preparation
   Source: Pulse Post Basic Admission Guide (V1) + WHO/IPH public resources.
   Last updated: 2026-05. */
(function () {
  if (!window.PulsePrograms) window.PulsePrograms = {};

  const topics = [
    {
      id: "pb-t-fundamental",
      title: "Fundamental Nursing — Core Principles",
      subject: "fundamental-nursing",
      readMinutes: 12,
      summary: "Nursing process, body mechanics, documentation, communication, ethics, delegation, and care planning — the backbone of safe practice.",
      content: [
        { h: "The Nursing Process (ADPIE)", p: "Five cyclical steps: (1) Assessment — collect subjective (patient-reported) and objective (measured) data through interview, observation, physical exam, and chart review. (2) Diagnosis — analyze data to identify actual or risk nursing diagnoses (e.g., 'Risk for falls related to gait instability'). (3) Planning — set SMART goals and select interventions. (4) Implementation — carry out interventions, delegate appropriately, document. (5) Evaluation — measure outcomes against goals; modify plan as needed. New data at any step restarts the cycle. Distinct from the medical model — nurses diagnose responses to illness, not the disease itself." },
        { h: "Writing a Nursing Care Plan", p: "Standard format: nursing diagnosis (NANDA-I), related factors, defining characteristics, expected outcomes (with measurable indicators and timeframe), planned interventions, rationale (evidence base), evaluation. Example: 'Acute pain related to surgical incision as evidenced by patient report of 7/10 pain' → goal 'Patient reports pain ≤3/10 within 30 minutes of intervention' → interventions (assess pain, administer analgesic as prescribed, position for comfort, distraction) → evaluate after 30 min." },
        { h: "Body Mechanics & Safe Patient Handling", p: "Wide base of support (feet shoulder-width), bend at knees not waist, keep load close to the body, push rather than pull, pivot rather than twist. For patients heavier than 35 kg or unable to bear weight, use mechanical lift devices (no-lift policy is now standard in many systems to prevent caregiver injury). Always assess patient ability before transfer: 'Can you bear weight? Can you follow commands?' Get help — two staff is the minimum for most transfers; more for bariatric or unstable patients." },
        { h: "Documentation Standards", p: "Documentation must be Factual, Accurate, Complete, Current, Organized (FACCO). Use objective language ('walked 50 m unassisted') over subjective ('patient walked well'). Late entries: date and time when written, marked as 'late entry'. Never back-date. Errors: strike through with a single line, write 'error', initial and date — never erase, white-out, or rewrite over. Charting by exception is acceptable when normal findings are standardized. Document interventions and patient response, not just tasks. Sign every entry." },
        { h: "Therapeutic Communication", p: "Goal-directed and patient-centered. Use: silence (allows processing), open-ended questions ('Tell me about your pain'), reflection ('You feel frustrated about the wait'), clarification ('When you say dizzy, do you mean spinning or lightheaded?'), summarizing, focusing. Avoid: false reassurance ('You'll be fine'), giving advice ('You should...'), 'why' questions (feel accusatory), defending healthcare workers, changing the subject. SOLER positioning helps: Sit facing, Open posture, Lean slightly forward, Eye contact appropriate to culture, Relaxed." },
        { h: "Delegation — The 5 Rights", p: "When delegating to nursing assistants or junior staff: (1) Right task — within their scope and ability. (2) Right circumstance — appropriate setting, stable patient. (3) Right person — competence demonstrated. (4) Right direction/communication — clear instructions, expected outcomes, when to report back. (5) Right supervision/evaluation — verify completion and quality. The registered nurse retains accountability for assessment, evaluation, and outcomes even after delegating the task. Never delegate assessment of an unstable patient, patient teaching, or evaluation of care." },
        { h: "Patient Rights", p: "Foundational: right to informed consent (voluntary, informed, competent), right to refuse treatment (even if life-saving — for competent adults), right to confidentiality (protected health information), right to dignity, right to an advance directive (living will, durable POA for healthcare), right to a second opinion, right to know who is caring for them, right to participate in care decisions, right to safe care. Vulnerable populations (children, mentally impaired, prisoners) need additional safeguards." },
        { h: "Ethical Frameworks", p: "Four classical principles: Autonomy (respect for self-determination), Beneficence (do good), Non-maleficence ('first, do no harm' — Hippocratic), Justice (fair distribution). When principles conflict (a competent patient refusing life-saving blood for religious reasons), structured ethics consultation helps. Veracity: truth-telling. Fidelity: keeping promises. Confidentiality (with limits — duty to warn in imminent harm). Cultural humility: every patient brings their own ethical context, particularly around end-of-life, autonomy of women, blood products, organ donation." },
        { h: "Sleep, Hygiene & Comfort", p: "Adults need ~7–9 hours sleep nightly. Hospitalization disrupts sleep — cluster nighttime care to allow 2–3 hour uninterrupted blocks. Promote: comfortable position, quiet environment, dim lights at night, warm milk or light snack if appropriate, back rub, scheduled medications adjusted to avoid 2-4 AM disturbance. Bathing daily or every other day is sufficient for most; daily perineal care for incontinent patients. Oral care every 4 hours for unconscious or intubated patients reduces ventilator-associated pneumonia." },
        { h: "Documentation Legal Aspects", p: "Patient records are legal documents — written for the patient's care first, but readable as evidence in court years later. If it isn't documented, it didn't happen. Avoid abbreviations on the 'Do Not Use' list (e.g., U for units, IU, QD, QOD, trailing zeros, lack of leading zeros). Record refusals of care with reason. Document patient teaching and demonstrated understanding. Incident reports: factual, no blame, no copy in the chart — they protect both patient and staff." }
      ],
      checkIn: [
        { id: "pb-t-fn-q1", subject: "fundamental-nursing", stem: "The five steps of the nursing process (ADPIE) begin with:", options: ["Diagnosis","Planning","Assessment","Evaluation"], answer: 2, explanation: "Assessment is the first step — data collection precedes everything else." },
        { id: "pb-t-fn-q2", subject: "fundamental-nursing", stem: "When lifting a heavy object, the nurse should:", options: ["Bend at the waist","Keep the load far from the body","Bend at the knees, keep load close, use leg muscles","Twist while lifting"], answer: 2, explanation: "Bend at knees + load close to body = leg muscles do the work, sparing the back." },
        { id: "pb-t-fn-q3", subject: "fundamental-nursing", stem: "An error in nursing documentation should be:", options: ["Erased completely","Covered with correction fluid","Struck through with a single line, initialled, dated","Re-written on a new page"], answer: 2, explanation: "Strike through with one line, write 'error', initial, date — preserves the audit trail." },
        { id: "pb-t-fn-q4", subject: "fundamental-nursing", stem: "Therapeutic communication includes all EXCEPT:", options: ["Open-ended questions","Active listening","False reassurance","Reflection"], answer: 2, explanation: "False reassurance ('Don't worry, everything will be fine') blocks communication." },
        { id: "pb-t-fn-q5", subject: "fundamental-nursing", stem: "A patient with the capacity to make decisions has the right to:", options: ["Demand any medication","Refuse treatment even if life-saving","Override physician orders","Receive free care"], answer: 1, explanation: "Competent adults have the right to refuse treatment, even when refusal could be fatal." },
        { id: "pb-t-fn-q6", subject: "fundamental-nursing", stem: "Informed consent requires the patient to understand all EXCEPT:", options: ["Nature of the procedure","Risks and benefits","Alternatives","Cost of insurance"], answer: 3, explanation: "Procedure details, risks/benefits, alternatives, and right to withdraw — not insurance cost." },
        { id: "pb-t-fn-q7", subject: "fundamental-nursing", stem: "In Maslow's hierarchy of needs, which needs must be met first?", options: ["Self-esteem needs","Physiological needs","Love and belonging","Safety needs"], answer: 1, explanation: "Physiological needs (air, water, food, sleep) form the base of Maslow's hierarchy and are met first." },
        { id: "pb-t-fn-q8", subject: "fundamental-nursing", stem: "A patient has the right to refuse treatment. The nurse should:", options: ["Force the treatment","Document the refusal and inform the prescriber","Hide the medicine in food","Discharge the patient"], answer: 1, explanation: "Competent patients may refuse; the nurse documents the refusal and notifies the prescriber." },
        { id: "pb-t-fn-q9", subject: "fundamental-nursing", stem: "The single most effective way to prevent cross-infection is:", options: ["Wearing gloves always","Hand hygiene","Daily antibiotics","Isolating all patients"], answer: 1, explanation: "Hand hygiene is the most effective measure to prevent the spread of infection." },
        { id: "pb-t-fn-q10", subject: "fundamental-nursing", stem: "Good nursing documentation should be:", options: ["Written in pencil","Factual, accurate, and timely","Completed at end of shift only","Based on opinion"], answer: 1, explanation: "Records must be factual, accurate, complete, and contemporaneous — 'not documented, not done'." }
      ]
    },
    {
      id: "pb-t-anatomy",
      title: "Essential Anatomy & Physiology",
      subject: "anatomy",
      readMinutes: 14,
      summary: "Body systems at-a-glance — structures, functions, and nursing-relevant physiology across all major organ systems.",
      content: [
        { h: "Skeletal & Muscular", p: "206 bones in the adult skeleton, divided into axial (80 — skull, vertebral column, ribs, sternum) and appendicular (126 — limbs, pectoral and pelvic girdles). Functions: support, protection, movement, mineral storage (calcium, phosphate), haematopoiesis (red marrow). Three muscle types: skeletal (striated, voluntary, attaches to bones via tendons), smooth (non-striated, involuntary, lines hollow organs and vessels), cardiac (striated, involuntary, found only in the heart). Joints: synovial (most mobile — shoulder, knee), cartilaginous (semi-mobile — intervertebral discs), fibrous (immobile — skull sutures)." },
        { h: "Cardiovascular", p: "Heart has 4 chambers (2 atria, 2 ventricles) and 4 valves (tricuspid, pulmonary, mitral, aortic). Right side handles deoxygenated blood → lungs (pulmonary circuit). Left side handles oxygenated blood → body (systemic circuit). Normal cardiac output ≈ 5 L/min (HR × SV = 70 × 70 mL). Total blood volume ~5-6 L. Coronary arteries arise from the aortic root immediately above the aortic valve and perfuse the myocardium mainly during diastole. Major systemic arteries: aorta → common carotid (brain), brachial (arms), renal, common iliac (legs)." },
        { h: "Respiratory", p: "Upper tract (nose, pharynx, larynx) and lower tract (trachea, bronchi, bronchioles, alveoli). Gas exchange occurs across ~300 million alveoli with total surface ~70 m². Inspiration is active (diaphragm + external intercostals contract — negative intrathoracic pressure draws air in); quiet expiration is passive (elastic recoil). Normal tidal volume ~500 mL, vital capacity ~4.5 L. Surfactant produced by type-II pneumocytes reduces alveolar surface tension and prevents collapse — deficient in premature infants (RDS)." },
        { h: "Renal", p: "Two kidneys, each ~150 g, holding ~1 million nephrons (functional units). Filter ~180 L plasma/day, excrete ~1.5 L urine/day. Functions: fluid and electrolyte balance, acid-base regulation, blood pressure (renin-angiotensin-aldosterone), erythropoietin production, vitamin D activation, removal of nitrogenous waste (urea, creatinine). Nephron parts: glomerulus, Bowman's capsule, proximal tubule, loop of Henle, distal tubule, collecting duct. Normal GFR ≥90 mL/min/1.73m². Urine output <30 mL/h in adults = oliguria, needs investigation." },
        { h: "Endocrine", p: "Major glands and key hormones: pituitary ('master gland') — GH, TSH, ACTH, FSH/LH, prolactin, ADH, oxytocin. Thyroid — T3, T4 (regulate metabolism), calcitonin. Parathyroid — PTH (raises blood Ca²⁺). Adrenal cortex — cortisol, aldosterone, androgens; medulla — adrenaline, noradrenaline. Pancreas — insulin (beta cells) lowers glucose, glucagon (alpha cells) raises it. Ovaries — estrogen, progesterone. Testes — testosterone. Negative feedback loops keep hormone levels within physiological ranges; disruption causes excess (e.g., Cushing's) or deficiency (e.g., Addison's, hypothyroidism)." },
        { h: "Gastrointestinal", p: "Tract: mouth → pharynx → esophagus → stomach → small intestine (duodenum, jejunum, ileum) → large intestine (colon: ascending, transverse, descending, sigmoid) → rectum → anus. Accessory organs: liver, gallbladder, pancreas, salivary glands. Functions: digestion (mechanical + chemical), absorption (mainly small intestine), elimination. Liver: ~500 functions including bile production, glucose homeostasis, drug metabolism, protein synthesis (albumin, clotting factors). Normal stool frequency ranges 3/day to 3/week — anything regular for that patient is normal for them." },
        { h: "Nervous System", p: "Central nervous system: brain + spinal cord. Peripheral nervous system: cranial nerves (12 pairs) + spinal nerves (31 pairs) + autonomic (sympathetic 'fight-or-flight' + parasympathetic 'rest-and-digest'). Brain regions: cerebrum (higher functions — frontal/parietal/temporal/occipital lobes), cerebellum (balance and coordination), brainstem (vital centers — respiration, cardiovascular, consciousness). Neurons communicate via action potentials and synaptic neurotransmitters (acetylcholine, dopamine, serotonin, GABA, glutamate). The blood-brain barrier protects neural tissue and limits drug delivery." },
        { h: "Reproductive System", p: "Female: ovaries (produce eggs + hormones), fallopian tubes, uterus, cervix, vagina. Menstrual cycle ~28 days (range 21-35): follicular phase, ovulation around day 14, luteal phase. Pregnancy hormones: hCG (detected by pregnancy test), estrogen, progesterone, hPL. Male: testes (produce sperm + testosterone), epididymis, vas deferens, seminal vesicles, prostate, penis. Spermatogenesis takes ~74 days, occurs continuously from puberty. Both systems regulated by hypothalamic-pituitary-gonadal axis." },
        { h: "Acid-Base Balance", p: "Normal blood pH 7.35-7.45 — tight range maintained by buffer systems, respiratory compensation (CO₂ excretion, minutes-to-hours), and renal compensation (bicarbonate handling, hours-to-days). Disturbances: respiratory acidosis (high CO₂ from hypoventilation, e.g., COPD), respiratory alkalosis (low CO₂ from hyperventilation, e.g., anxiety), metabolic acidosis (low HCO₃⁻, e.g., DKA, renal failure), metabolic alkalosis (high HCO₃⁻, e.g., prolonged vomiting). ABG interpretation: pH → PCO₂ vs HCO₃⁻ → primary disorder → compensation." },
        { h: "Fluid & Electrolyte Basics", p: "Total body water ~60% of body weight in adult males, ~55% in females. Divided into intracellular fluid (2/3) and extracellular fluid (1/3 — split into interstitial and intravascular). Daily requirement: ~30-35 mL/kg in adults, more in children. Key electrolytes and normal ranges: Na 135-145 mEq/L, K 3.5-5.0 mEq/L, Cl 96-106, Ca 8.5-10.5 mg/dL, Mg 1.5-2.5. Imbalances commonly seen in nursing: hyponatremia (confusion, seizures), hyperkalemia (cardiac arrhythmia — peaked T waves), hypocalcemia (Chvostek's, Trousseau's signs)." }
      ],
      checkIn: [
        { id: "pb-t-an-q1", subject: "anatomy", stem: "Total number of bones in the adult human body:", options: ["198","206","216","250"], answer: 1, explanation: "206 bones in the adult skeleton." },
        { id: "pb-t-an-q2", subject: "anatomy", stem: "The smallest functional unit of the lung is the:", options: ["Bronchus","Bronchiole","Alveolus","Pleura"], answer: 2, explanation: "Alveoli are the gas exchange units." },
        { id: "pb-t-an-q3", subject: "anatomy", stem: "Insulin is produced by:", options: ["Liver","Alpha cells of pancreas","Beta cells of pancreas","Thyroid"], answer: 2, explanation: "Beta cells of islets of Langerhans." },
        { id: "pb-t-an-q4", subject: "anatomy", stem: "Each kidney contains approximately:", options: ["100","10,000","1 million","100 million"], answer: 2, explanation: "About 1 million nephrons per kidney." },
        { id: "pb-t-an-q5", subject: "anatomy", stem: "Cardiac output for a healthy adult at rest is approximately:", options: ["1 L/min","5 L/min","10 L/min","20 L/min"], answer: 1, explanation: "CO = HR × SV ≈ 70 × 70 mL = ~5 L/min." },
        { id: "pb-t-an-q6", subject: "anatomy", stem: "Which muscle is involuntary?", options: ["Biceps","Smooth muscle of intestine","Quadriceps","Tongue muscle"], answer: 1, explanation: "Smooth (visceral) muscle is involuntary." },
        { id: "pb-t-an-q7", subject: "anatomy", stem: "The functional unit of the kidney is the:", options: ["Alveolus","Nephron","Neuron","Hepatocyte"], answer: 1, explanation: "The nephron is the microscopic filtering unit of the kidney." },
        { id: "pb-t-an-q8", subject: "anatomy", stem: "The largest organ of the human body is the:", options: ["Liver","Brain","Skin","Lung"], answer: 2, explanation: "The skin is the body's largest organ, providing protection, temperature regulation, and sensation." },
        { id: "pb-t-an-q9", subject: "anatomy", stem: "Which chamber of the heart pumps oxygenated blood to the body?", options: ["Right atrium","Right ventricle","Left atrium","Left ventricle"], answer: 3, explanation: "The left ventricle pumps oxygenated blood into the aorta and systemic circulation." },
        { id: "pb-t-an-q10", subject: "anatomy", stem: "Normal adult resting heart rate is:", options: ["40–60 bpm","60–100 bpm","100–120 bpm","120–140 bpm"], answer: 1, explanation: "The normal adult resting heart rate is 60–100 beats per minute." }
      ]
    },
    {
      id: "pb-t-child",
      title: "Child Health Essentials",
      subject: "child-health",
      readMinutes: 13,
      summary: "Neonatal care, growth milestones, immunization, common childhood illnesses, IMCI, breastfeeding, and developmental milestones.",
      content: [
        { h: "Neonatal Care Essentials", p: "Routine care at birth: dry, keep warm (skin-to-skin contact reduces hypothermia and supports breastfeeding), delayed cord clamping (≥1 minute), initiate breastfeeding within the first hour. Vitamin K 1 mg IM single dose to prevent haemorrhagic disease of the newborn. Eye prophylaxis (tetracycline or povidone-iodine drops) prevents ophthalmia neonatorum. Newborn screening: weight, length, head circumference, examination for congenital anomalies, hearing screen if available. Watch for danger signs: feeding poorly, convulsions, severe chest in-drawing, fever or hypothermia, lethargy." },
        { h: "Growth Milestones", p: "Birth weight doubles by ~6 months, triples by 1 year, quadruples by 2 years. Average birth length ~50 cm; increases ~25 cm in year 1, ~12 cm in year 2. Head circumference: ~35 cm at birth, +12 cm in year 1. Anterior fontanelle: 4–6 cm at birth, closes between 12–18 months. Posterior fontanelle closes by ~2 months. Plot growth on WHO charts each visit — a child crossing percentiles downward is more concerning than a small but tracking-along-curve child." },
        { h: "Developmental Milestones (0-5 yr)", p: "2 months: social smile, follows objects. 4 months: rolls front to back, laughs. 6 months: sits with support, transfers objects. 9 months: sits without support, crawls, says 'mama/dada' non-specifically. 12 months: walks with one hand held, one-word vocabulary, pincer grasp. 18 months: walks well, 10-25 words, points to body parts. 2 years: runs, two-word phrases, 50+ words. 3 years: rides tricycle, three-word sentences. 5 years: hops on one foot, full sentences, copies shapes. Persistent delays in two or more domains need formal developmental assessment." },
        { h: "Bangladesh EPI Schedule", p: "At birth: BCG (left deltoid, intradermal), OPV-0. At 6, 10, 14 weeks: Pentavalent (DPT-HepB-Hib) + OPV + PCV + Rotavirus (6 and 10 wk) + IPV (6 and 14 wk). At 9 months: MR-1. At 15 months: MR-2. Td (tetanus-diphtheria) for pregnant women in two doses with 4-week gap, ideally completed before 36 weeks. Verify the most current EPI guidance from DGHS Bangladesh as schedules update periodically." },
        { h: "IMCI Strategy", p: "Integrated Management of Childhood Illness (WHO/UNICEF, 1995) — a strategy to reduce under-5 mortality by addressing the leading causes together rather than singly. Assess every sick child for general danger signs first (not drinking/breastfeeding, vomits everything, convulsions, lethargic/unconscious), then the main symptoms: cough/difficult breathing, diarrhoea, fever, ear problem, malnutrition and anaemia. Classify using color-coded triage: pink (severe — urgent referral with pre-referral treatment), yellow (moderate — treat at facility), green (mild — home care with counselling)." },
        { h: "Common Pediatric Conditions", p: "Acute diarrhoea: assess dehydration, give ORS, zinc 10–20 mg/day for 10–14 days, continue feeding, no routine antibiotics unless dysentery or cholera. Pneumonia: WHO-defined by fast breathing (>50/min in 2-12 months, >40/min in 1-5 years) or chest in-drawing. Non-severe: oral amoxicillin 5-7 days. Severe (any general danger sign): IV antibiotic + referral. Acute otitis media: amoxicillin 7-10 days, paracetamol for pain. Anaemia: iron 3 mg/kg/day for 3 months if mild-moderate; severe needs referral." },
        { h: "Common Pediatric Emergencies", p: "Severe dehydration: WHO Plan C — Ringer's lactate 100 mL/kg over 3 hours (under 12 months) or 100 mL/kg over 30 minutes (children 12 months+ as a bolus). Convulsions: protect airway, lateral position, do not restrain. Give buccal midazolam or rectal diazepam if seizure >5 minutes. Always check blood glucose. Foreign body airway obstruction: back blows + chest thrusts in infants, abdominal thrusts (Heimlich) in children. Anaphylaxis: IM adrenaline 0.01 mg/kg of 1:1000 (max 0.5 mg) into anterolateral thigh." },
        { h: "Malnutrition Management", p: "Mild-moderate acute malnutrition (WHZ -2 to -3, MUAC 11.5-12.5 cm): nutritional counselling + supplementary feeding. Severe acute malnutrition without complications: outpatient treatment with RUTF (ready-to-use therapeutic food). SAM with complications (poor appetite, edema, infection, dehydration): inpatient stabilization — F-75 therapeutic milk for initial phase (low protein, low sodium to allow metabolic recovery), transition to F-100 (higher energy) for catch-up growth. Treat hypoglycaemia, hypothermia, dehydration, infection — the 10 steps WHO outlines." },
        { h: "Breastfeeding Support", p: "Exclusive breastfeeding for the first 6 months (WHO/UNICEF). Continue alongside complementary feeding up to 2 years and beyond. Counsel on positioning (mother and baby tummy-to-tummy, baby's head, shoulders, hips aligned), latch (wide mouth, more areola visible above than below, no clicking sounds), frequency (on-demand, ≥8 feeds in 24 h), signs of effective feeding (audible swallowing, ≥6 wet nappies, regular soft stools). Common difficulties: sore nipples (latch issue), engorgement (frequent feeding, warm compress), low supply (increase frequency, hydration, rule out medications)." },
        { h: "Adolescent Health", p: "Pubertal changes typically begin ~10-13 years in girls, ~11-14 in boys. Tanner staging (1-5) describes secondary sexual characteristic progression. Major health risks shift from infections to behaviour and mental health: road traffic injury, suicide, substance use, unsafe sex, early pregnancy. Confidential counselling and adolescent-friendly services are key. Vaccination: HPV (girls 9-14 years per WHO) and catch-up vaccinations. Iron-folic acid weekly supplementation for adolescent girls reduces anaemia." }
      ],
      checkIn: [
        { id: "pb-t-ch-q1", subject: "child-health", stem: "Recommended duration of exclusive breastfeeding:", options: ["3 months","6 months","9 months","12 months"], answer: 1, explanation: "Exclusive for 6 months; complementary feeding starts at 6 months while continuing breastfeeding." },
        { id: "pb-t-ch-q2", subject: "child-health", stem: "Treatment of acute watery diarrhoea in a child:", options: ["Antibiotics","ORS and zinc supplementation","Antimotility drug","Withholding fluids"], answer: 1, explanation: "ORS + zinc (10–20 mg/day × 10–14 days) is standard WHO recommendation." },
        { id: "pb-t-ch-q3", subject: "child-health", stem: "BCG is administered at:", options: ["Birth","6 weeks","9 months","15 months"], answer: 0, explanation: "BCG at birth (Bangladesh EPI)." },
        { id: "pb-t-ch-q4", subject: "child-health", stem: "A child's weight at 1 year is approximately:", options: ["Same as birth","Double birth weight","Triple birth weight","Four times birth weight"], answer: 2, explanation: "Triple by 1 year." },
        { id: "pb-t-ch-q5", subject: "child-health", stem: "First-line antibiotic for community-acquired pediatric pneumonia is:", options: ["Ciprofloxacin","Amoxicillin","Vancomycin","Azithromycin"], answer: 1, explanation: "Oral amoxicillin × 5–7 days for non-severe community-acquired pneumonia (IMCI/WHO)." },
        { id: "pb-t-ch-q6", subject: "child-health", stem: "IMCI 'pink' classification indicates:", options: ["Home care","Treatment at facility","Urgent referral","Counseling only"], answer: 2, explanation: "Pink = severe classification, urgent pre-referral treatment and transfer." },
        { id: "pb-t-ch-q7", subject: "child-health", stem: "Which is a general IMCI danger sign requiring urgent referral?", options: ["Mild runny nose","Inability to drink or breastfeed","A single loose stool","Slight irritability"], answer: 1, explanation: "Inability to drink/breastfeed, vomiting everything, convulsions, and lethargy are general danger signs." },
        { id: "pb-t-ch-q8", subject: "child-health", stem: "In the EPI schedule, the first dose of pentavalent vaccine is given at:", options: ["Birth","6 weeks","9 months","15 months"], answer: 1, explanation: "Pentavalent (DPT-HepB-Hib) is given at 6, 10, and 14 weeks; the first dose is at 6 weeks." },
        { id: "pb-t-ch-q9", subject: "child-health", stem: "The first-line treatment for mild-to-moderate dehydration from diarrhoea is:", options: ["IV fluids","Oral rehydration solution (ORS)","Antibiotics","Anti-diarrhoeal drugs"], answer: 1, explanation: "ORS replaces lost fluid and electrolytes and is first-line for mild-to-moderate dehydration." },
        { id: "pb-t-ch-q10", subject: "child-health", stem: "A newborn's normal respiratory rate is approximately:", options: ["12–20/min","20–30/min","30–60/min","60–80/min"], answer: 2, explanation: "Newborns breathe faster than adults — a normal rate is about 30–60 breaths per minute." }
      ]
    },
    {
      id: "pb-t-community",
      title: "Community Health & PHC",
      subject: "community-health",
      readMinutes: 13,
      summary: "Primary health care, Bangladesh health system, public health programs, indicators, prevention levels, NCDs, school and occupational health.",
      content: [
        { h: "Primary Health Care", p: "Alma-Ata Declaration (1978) defined PHC as essential health care made universally accessible to all individuals and families through their full participation, at a cost the community and country can afford. Reaffirmed at Astana (2018) with PHC positioned as the foundation of universal health coverage. The eight essential components: (1) health education, (2) food and proper nutrition, (3) adequate safe water and basic sanitation, (4) maternal and child health care including family planning, (5) immunization, (6) prevention and control of locally endemic diseases, (7) appropriate treatment of common diseases and injuries, (8) provision of essential drugs." },
        { h: "Bangladesh Health System", p: "Three-tier delivery: Primary (Community Clinic — one per ~6,000 population at ward level; Union Health & Family Welfare Centre — sub-district; Upazila Health Complex — 31-50 beds at sub-district headquarters with basic surgical and obstetric services). Secondary (District Hospital — 100-250 beds with multi-specialty services). Tertiary (Medical College Hospital, specialized national institutes — NICVD for cardiology, NIKDU for kidney disease, NICRH for cancer). Frontline community workforce: Community Health Care Provider (CHCP), Health Assistant (HA), Family Welfare Assistant (FWA), Family Welfare Visitor (FWV)." },
        { h: "Key Public Health Programs", p: "EPI (Expanded Programme on Immunization), CDD (Control of Diarrhoeal Disease), ARI (Acute Respiratory Infection) control, TB DOTS (Directly Observed Therapy Short-course), Leprosy elimination, Filariasis (lymphatic) elimination — MDA with DEC + albendazole, National Malaria Control Programme (high-burden districts in Chittagong Hill Tracts), MCH-FP (Maternal-Child Health & Family Planning), Adolescent Reproductive Health, Non-Communicable Disease Control Programme, National Mental Health Programme." },
        { h: "Demographic Indicators (Bangladesh, approximate)", p: "Population ~170 million, growth rate ~1%. TFR (Total Fertility Rate) ~2.0, near replacement level. IMR (Infant Mortality Rate) ~24/1,000 live births. U5MR ~29/1,000. NMR (Neonatal Mortality Rate) ~17/1,000 — accounts for the majority of under-5 deaths. MMR ~123/100,000 live births. Life expectancy at birth ~72 years. Urbanization ~40% and rising. Always quote a source and year — these indicators shift; consult the most recent Bangladesh Demographic and Health Survey or DGHS report." },
        { h: "Levels of Prevention", p: "Primordial: act on underlying social conditions that drive risk factors (poverty, education, urban design). Primary: prevent occurrence in healthy individuals (immunization, safe water, helmet legislation, health education). Secondary: early detection and prompt treatment in pre-symptomatic or early disease (cervical screening, antenatal care, blood pressure measurement). Tertiary: limit disability after disease is established (cardiac rehabilitation, occupational therapy after stroke, diabetic foot care). Most nursing interventions span primary and secondary prevention." },
        { h: "Non-Communicable Diseases — Rising Burden", p: "NCDs now account for the majority of deaths in Bangladesh — cardiovascular disease, cancer, diabetes, chronic respiratory disease. Shared modifiable risk factors: tobacco use, harmful alcohol use, unhealthy diet (high salt, low fruit/vegetable), physical inactivity, air pollution. WHO's 'Best Buys' for prevention: tobacco taxation, smoke-free public places, salt reduction in foods, mass media for healthy diet and activity. Population-level interventions are far more cost-effective than treating established disease." },
        { h: "School Health Program", p: "School-aged children represent a captive population for health promotion. Core components: routine health screening (vision, hearing, dental, growth), deworming twice yearly (albendazole), iron-folic acid weekly supplementation for adolescent girls, mid-day meal programs, immunization catch-up, mental health and life-skills education, school sanitation and water. Teachers and health workers collaborate; parental engagement amplifies impact." },
        { h: "Occupational Health Nursing", p: "Workers in industries (garments, leather, brick kilns, agriculture, construction) face occupation-specific hazards. Common exposures in Bangladesh garment sector: poor ventilation, ergonomic strain, fire risk, chemical dyes. Core occupational health functions: pre-employment screening, periodic health surveillance, hazard identification, accident reporting and investigation, first-aid services, return-to-work assessment, mental health support, health education. ILO conventions inform national occupational safety laws." },
        { h: "Environmental Health", p: "Major environmental health priorities in Bangladesh: arsenic contamination of groundwater (long-term skin lesions, cancer risk — test wells and use deeper or alternative sources), waterborne diarrhoeal disease (safe water + sanitation + handwashing reduces incidence dramatically), indoor air pollution from biomass cooking fuel (improved cookstoves, LPG), outdoor air pollution (particulate matter, especially in Dhaka), vector-borne disease (dengue is a recurring urban epidemic). Nursing role: education, surveillance, advocacy, vulnerable-population support." },
        { h: "Disaster Preparedness", p: "Bangladesh faces recurrent cyclones, floods, river erosion, and seismic risk. Phases of disaster management: preparedness (training, drills, stockpiling), response (search-rescue, mass casualty triage, shelter, water, sanitation, communicable disease control), recovery (rebuilding services, mental health support, livelihood restoration), mitigation (early warning systems, embankments, building codes). Nurses contribute at every phase — in pre-disaster training, primary care during response, and trauma-informed mental health care afterwards." }
      ],
      checkIn: [
        { id: "pb-t-co-q1", subject: "community-health", stem: "Alma-Ata Declaration year:", options: ["1948","1968","1978","1988"], answer: 2, explanation: "Alma-Ata Declaration on PHC: 1978." },
        { id: "pb-t-co-q2", subject: "community-health", stem: "Lowest tier of Bangladesh health service delivery:", options: ["Medical College Hospital","District Hospital","Upazila Health Complex","Community Clinic"], answer: 3, explanation: "Community Clinic at the union/ward level — closest to people." },
        { id: "pb-t-co-q3", subject: "community-health", stem: "Screening mammography is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Quaternary prevention"], answer: 1, explanation: "Secondary prevention = early detection in asymptomatic individuals." },
        { id: "pb-t-co-q4", subject: "community-health", stem: "MMR is expressed per:", options: ["1000 live births","10,000 live births","100,000 live births","1 million population"], answer: 2, explanation: "Maternal Mortality Ratio: per 100,000 live births." },
        { id: "pb-t-co-q5", subject: "community-health", stem: "Most effective primary prevention against measles:", options: ["Hand hygiene","Isolation","Vaccination","Antibiotics"], answer: 2, explanation: "MR vaccine is the primary prevention strategy." },
        { id: "pb-t-co-q6", subject: "community-health", stem: "Number of essential elements of PHC per Alma-Ata:", options: ["5","6","8","10"], answer: 2, explanation: "Eight elements: education, nutrition, water/sanitation, MCH/FP, immunization, endemic disease prevention, treatment of common conditions, essential drugs." },
        { id: "pb-t-co-q7", subject: "community-health", stem: "Immunization to prevent disease before it occurs is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Rehabilitation"], answer: 0, explanation: "Primary prevention stops disease before it starts — immunization and health promotion are key examples." },
        { id: "pb-t-co-q8", subject: "community-health", stem: "Rehabilitation after a stroke is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Health promotion"], answer: 2, explanation: "Tertiary prevention reduces complications and disability after disease has occurred, e.g., rehabilitation." },
        { id: "pb-t-co-q9", subject: "community-health", stem: "The crude birth rate is expressed per:", options: ["100 population","1,000 population","10,000 population","100,000 population"], answer: 1, explanation: "Crude birth rate is the number of live births per 1,000 population per year." },
        { id: "pb-t-co-q10", subject: "community-health", stem: "The infant mortality rate measures deaths of children under:", options: ["28 days","1 year of age","5 years of age","10 years of age"], answer: 1, explanation: "Infant mortality rate is the number of deaths of children under 1 year per 1,000 live births." }
      ]
    },
    {
      id: "pb-t-pharmacology",
      title: "Pharmacology Quick Review",
      subject: "pharmacology",
      readMinutes: 13,
      summary: "Rights of administration, drug routes, antidotes, antibiotic classes, pain ladder, common adverse reactions, and medication-error prevention.",
      content: [
        { h: "The Rights of Medication Administration", p: "Core five: right patient (use two identifiers — name + DOB or hospital ID), right drug (read label three times), right dose, right route, right time. Modern additions: right documentation, right reason (indication), right response (re-assess effect). Before administering: check expiry date, check for allergies, calculate dose with a second person for high-alert drugs, never give a medication someone else has prepared unless you witnessed the preparation." },
        { h: "Routes & Onset", p: "Intravenous (IV): immediate onset, 100% bioavailability — for emergencies and when oral not feasible. Intramuscular (IM): 10-20 min onset, large muscle (deltoid, ventrogluteal, vastus lateralis) — most vaccines. Subcutaneous (SC): 15-30 min — insulin, heparin, some hormonal. Oral (PO): 30-60 min, subject to first-pass metabolism in liver. Sublingual: 1-5 min, bypasses first-pass (nitroglycerin, ondansetron). Rectal (PR): 30-60 min, useful when NPO or vomiting. Inhaled: seconds-minutes (beta-agonists, steroids). Transdermal: hours, continuous release (fentanyl, nitroglycerin patches, hormones)." },
        { h: "High-Alert Medications", p: "ISMP-identified drugs that cause disproportionate harm when error occurs: insulin (units, never abbreviate as 'U'), anticoagulants (heparin, warfarin, DOACs), opioids, neuromuscular blockers, concentrated electrolytes (KCl — never IV push, always dilute), chemotherapy, magnesium sulfate, intravenous adrenaline. Safeguards: independent double-check by two qualified staff, smart-pump dose libraries, standardized concentrations, separated storage, distinct labelling. Concentrated KCl should not be stored on general wards." },
        { h: "Critical Antidotes", p: "Heparin → Protamine sulfate (1 mg per 100 units). Warfarin → Vitamin K (oral if non-urgent, IV for major bleed) + prothrombin complex concentrate or fresh frozen plasma. Opioid → Naloxone 0.04-0.4 mg IV titrated, short half-life. Benzodiazepine → Flumazenil. Paracetamol → N-acetylcysteine. Iron → Deferoxamine. Digoxin → Digibind. Methotrexate → Leucovorin. Beta-blocker → Glucagon. Calcium channel blocker → IV calcium + glucagon. Magnesium toxicity → calcium gluconate. Organophosphate → Atropine + pralidoxime." },
        { h: "Antibiotic Classes & Common Uses", p: "Penicillins (amoxicillin, ampicillin, flucloxacillin, piperacillin-tazobactam) — wide spectrum, watch for hypersensitivity. Cephalosporins (cefixime, ceftriaxone, cefepime) — generations have progressively wider gram-negative coverage. Macrolides (erythromycin, azithromycin) — atypical pneumonia, alternative when penicillin-allergic. Fluoroquinolones (ciprofloxacin, levofloxacin) — UTI, respiratory infections; tendinopathy risk, avoid in children. Aminoglycosides (gentamicin, amikacin) — gram-negative, monitor levels (nephro/ototoxicity). Tetracyclines (doxycycline) — atypicals, acne; avoid in children <8 yr and pregnancy. Metronidazole — anaerobes, protozoa." },
        { h: "WHO Pain Ladder", p: "Step 1 (mild pain, 1-3): non-opioid — paracetamol, NSAID (ibuprofen, diclofenac); ± adjuvants (antidepressants, anticonvulsants for neuropathic pain). Step 2 (moderate, 4-6): weak opioid (codeine, tramadol) + Step 1 drugs + adjuvants. Step 3 (severe, 7-10): strong opioid (morphine, fentanyl, oxycodone) + Step 1 + adjuvants. Move up the ladder if pain persists or escalates; use the oral route by preference; give at regular intervals not 'as needed' for chronic pain; counsel on constipation (start laxative with any opioid)." },
        { h: "Common Adverse Drug Reactions", p: "Anaphylaxis: minutes after exposure — urticaria, angioedema, wheeze, hypotension. Treat: IM adrenaline 0.5 mg (0.5 mL of 1:1000) into anterolateral thigh, repeat every 5 min, IV fluid, oxygen, antihistamine, steroid. Stevens-Johnson syndrome / TEN: rash with mucosal involvement, often with sulfonamides, allopurinol, lamotrigine, NSAIDs — stop drug immediately. Serotonin syndrome: triad of mental status change, autonomic hyperactivity, neuromuscular abnormalities (tremor, hyperreflexia). Neuroleptic malignant syndrome (antipsychotics): rigidity, hyperthermia, autonomic instability — supportive care + dantrolene." },
        { h: "Medication Errors — Prevention", p: "Common error points: prescribing (look-alike sound-alike drugs — LASA), transcription, dispensing, administration. Prevention strategies: barcode medication administration, computerized prescriber order entry (CPOE), pharmacist verification, eliminating dangerous abbreviations, standardized concentrations, smart pumps with dose limits, independent double-check for high-alert drugs. When an error occurs: ensure patient safety first, notify physician, document factually in chart, complete incident report (separate from chart), follow up with the patient and family with honesty." },
        { h: "Storage & Handling", p: "Most oral drugs at controlled room temperature 20-25°C, away from light and moisture. Insulin: unopened in refrigerator 2-8°C, opened in use can stay at room temperature for up to 28 days. Vaccines: cold chain 2-8°C; some (OPV in central stores) frozen; never refreeze thawed vaccines. Vaccine vial monitors indicate cumulative heat exposure. Controlled drugs (opioids, benzodiazepines): double-locked cabinet, paired count at every shift change with witness signature, immediate documentation of waste." },
        { h: "Patient Education on Medications", p: "Use teach-back: 'Tell me how you'll take this at home.' Cover: name (generic and brand), reason, dose, frequency, route, what to do if a dose is missed, common and serious side effects, food or drug interactions, how to store, when to seek help, when next prescription is due. Provide written reminder in their preferred language. Particularly important for chronic-disease medications where adherence determines outcomes — diabetes, hypertension, TB, mental health, HIV." }
      ],
      checkIn: [
        { id: "pb-t-ph-q1", subject: "pharmacology", stem: "The 5 rights of medication administration do NOT include:", options: ["Right patient","Right route","Right cost","Right time"], answer: 2, explanation: "Right cost is not part of the 5 rights." },
        { id: "pb-t-ph-q2", subject: "pharmacology", stem: "Antidote for heparin overdose:", options: ["Vitamin K","Protamine sulfate","Naloxone","Atropine"], answer: 1, explanation: "Protamine reverses heparin." },
        { id: "pb-t-ph-q3", subject: "pharmacology", stem: "Insulin should be stored, when opened, at:", options: ["Freezer","Room temperature ≤28 days","Refrigerator 2-8°C only","Window sill in sunlight"], answer: 1, explanation: "Opened insulin: room temperature ≤28 days; unopened in fridge." },
        { id: "pb-t-ph-q4", subject: "pharmacology", stem: "Two patient identifiers BEST include:", options: ["Room number and bed","Name and date of birth","Diagnosis and physician","Time and date"], answer: 1, explanation: "Two unique identifiers: full name + DOB (or hospital ID). Never room number alone." },
        { id: "pb-t-ph-q5", subject: "pharmacology", stem: "Fastest medication route for life-threatening emergency:", options: ["Oral","Sublingual","Intramuscular","Intravenous"], answer: 3, explanation: "IV: immediate onset, fully bioavailable." },
        { id: "pb-t-ph-q6", subject: "pharmacology", stem: "High-alert medications require:", options: ["Single nurse check","Independent double-check by two nurses","No special handling","Verbal confirmation only"], answer: 1, explanation: "ISMP recommends independent double-check for high-alert drugs (insulin, heparin, opioids, KCl, chemo)." },
        { id: "pb-t-ph-q7", subject: "pharmacology", stem: "The antidote for an opioid overdose is:", options: ["Flumazenil","Naloxone","Vitamin K","Atropine"], answer: 1, explanation: "Naloxone reverses opioid-induced respiratory depression." },
        { id: "pb-t-ph-q8", subject: "pharmacology", stem: "Warfarin therapy is monitored using the:", options: ["aPTT","INR","Blood glucose","Serum potassium"], answer: 1, explanation: "Warfarin is monitored with the INR (target usually 2.0–3.0); vitamin K is its reversal agent." },
        { id: "pb-t-ph-q9", subject: "pharmacology", stem: "Before giving digoxin, the nurse must check the patient's:", options: ["Temperature","Apical pulse for one full minute","Blood glucose","Respiratory rate"], answer: 1, explanation: "Check the apical pulse for a full minute and withhold the dose if it is below 60 bpm in an adult." },
        { id: "pb-t-ph-q10", subject: "pharmacology", stem: "The antidote for warfarin overdose is:", options: ["Protamine sulfate","Vitamin K","Naloxone","Flumazenil"], answer: 1, explanation: "Vitamin K reverses warfarin; protamine sulfate reverses heparin." }
      ]
    },
    {
      id: "pb-t-adult-care",
      title: "Adult Health Nursing Highlights",
      subject: "adult-health",
      readMinutes: 14,
      summary: "Diabetes, hypertension, COPD, stroke, post-op care, respiratory disorders, renal failure, cancer nursing, and surgical nursing essentials.",
      content: [
        { h: "Diabetes Mellitus", p: "Type 1: autoimmune β-cell destruction, insulin-dependent from diagnosis, typically presents in childhood/young adult with classic polyuria, polydipsia, polyphagia, weight loss. Type 2: insulin resistance + progressive insulin deficiency, often associated with obesity, family history, sedentary lifestyle. ADA diagnostic criteria: FPG ≥126 mg/dL on two occasions, OGTT 2-hour ≥200, HbA1c ≥6.5%, or random glucose ≥200 with classic symptoms. HbA1c target <7% for most non-pregnant adults. Acute complications: DKA (Type 1 mainly), HHS (Type 2). Chronic: retinopathy, nephropathy, neuropathy, cardiovascular disease." },
        { h: "Hypertension", p: "ACC/AHA 2017 categories: Normal <120/80; Elevated 120-129/<80; Stage 1 130-139/80-89; Stage 2 ≥140/≥90; Hypertensive crisis ≥180/≥120. Lifestyle measures (DASH diet, salt reduction, weight loss, exercise, alcohol moderation) first for elevated and Stage 1 without other risk. Pharmacological: thiazide diuretic, ACEi or ARB (compelling indication in diabetic nephropathy, heart failure), calcium channel blocker. ACEi key side effect: dry cough due to bradykinin — switch to ARB if intolerable. Watch for hyperkalemia with ACEi/ARB + K-sparing diuretic." },
        { h: "Respiratory Disorders", p: "Asthma: reversible airway obstruction, episodic, triggered by allergens/exercise/cold air. Step-up treatment: SABA (salbutamol) as reliever, ICS (budesonide) for control, add LABA, then montelukast or oral steroid for severe. Pneumonia: lobar (bacterial — pneumococcus, klebsiella) vs bronchopneumonia (multiple foci). Assess severity with CURB-65 (Confusion, Urea >7, RR ≥30, BP low, age ≥65). Pulmonary embolism: sudden dyspnea + pleuritic chest pain + tachycardia, often post-surgery or immobility. Confirm with CT pulmonary angiogram, treat with anticoagulation." },
        { h: "COPD", p: "Chronic, progressive, largely irreversible airflow limitation — smoking causes >80%. Two pheotypes: emphysema (loss of alveolar walls, hyperinflation, 'pink puffer') and chronic bronchitis (productive cough most days for ≥3 months × 2 years, 'blue bloater'). Most patients have features of both. Management: smoking cessation (the only intervention that alters progression), bronchodilators (LABA + LAMA), inhaled corticosteroid in frequent exacerbators, pulmonary rehabilitation, vaccinations (influenza, pneumococcal). Acute exacerbation: short-course oral steroid + antibiotic if purulent sputum + controlled oxygen (target SpO₂ 88-92%)." },
        { h: "Stroke", p: "Ischemic (~85%) vs haemorrhagic (~15%). FAST: Face droop, Arm weakness, Speech difficulty, Time to call emergency. tPA (alteplase) window: ≤4.5 hours from symptom onset for ischemic stroke, after CT excludes haemorrhage. Mechanical thrombectomy: up to 24 hours in selected patients with large vessel occlusion. Haemorrhagic stroke: BP control, reverse anticoagulation, neurosurgery for selected cases. Nursing priorities: airway, swallow assessment before any oral intake (aspiration risk), bladder care, pressure ulcer prevention, communication adaptations, early mobilization once stable, secondary prevention education." },
        { h: "Renal Failure & Dialysis", p: "Acute kidney injury (AKI): rapid rise in creatinine or fall in urine output. Causes: pre-renal (volume depletion, sepsis, CHF), intrinsic (acute tubular necrosis, glomerulonephritis), post-renal (obstruction). Chronic kidney disease (CKD): staged 1-5 by eGFR; Stage 5 (<15 mL/min/1.73m²) requires renal replacement therapy. Hemodialysis: 3-4 hours × 3 sessions/week, vascular access (AV fistula preferred). Peritoneal dialysis: home-based, continuous. Nursing priorities: fluid balance, electrolyte monitoring (especially K+), nutrition (low phosphate, controlled protein), anaemia management, access care." },
        { h: "Cancer Nursing Basics", p: "Three main treatment modalities: surgery, chemotherapy, radiation — often combined. Common chemotherapy side effects and nursing care: nausea/vomiting (antiemetics prophylactically), mucositis (oral care, soft diet), myelosuppression (neutropenic precautions when ANC <500), alopecia (psychological support), peripheral neuropathy. Radiation side effects depend on field — skin reactions, mucositis, fatigue. Pain management: WHO ladder, around-the-clock dosing for cancer pain, breakthrough doses available. Psychosocial support throughout — denial, anger, grief, acceptance are normal." },
        { h: "Surgical Nursing — Pre & Post-Op", p: "Pre-operative: NPO 6-8 hours for solids, 2 hours for clear fluids. Verify consent, allergies, marked surgical site. Pre-medication, prophylactic antibiotic within 60 minutes of incision, VTE prophylaxis. Post-operative first 24 hours: monitor vitals (every 15 min × 4, every 30 × 4, hourly × 4, then routinely), surgical site (bleeding, dressing), fluid balance, pain, complications (haemorrhage, infection, atelectasis, DVT, urinary retention). Early mobilization reduces DVT, atelectasis, and ileus risk and shortens hospital stay. Pain control improves participation in deep breathing and ambulation." },
        { h: "Wound Care Basics", p: "Wound healing phases: haemostasis (immediate), inflammation (0-3 days), proliferation (3-21 days), maturation (21 days to 2 years). Healing requires adequate oxygenation, nutrition (protein, vitamin C, zinc), glucose control, absence of infection. Wound assessment: location, size (length × width × depth), tissue type (granulation pink/red is good, slough yellow needs debridement, eschar black is necrotic), exudate, surrounding skin, pain. Choose dressing by wound type: hydrocolloid for low exudate, alginate for high exudate, foam for moderate, transparent film for protection." },
        { h: "Geriatric Considerations", p: "Older adults present atypically: pneumonia may show only confusion, MI may be silent or present as dyspnea, sepsis may show hypothermia not fever. Polypharmacy is the rule — review all medications at every encounter. Falls risk: assess gait, vision, footwear, environmental hazards, medications (sedatives, antihypertensives). Cognitive impairment is common but not normal aging — screen with Mini-Cog or MMSE. Communication: face the patient, speak clearly without shouting, allow time, address by preferred name. Goals of care discussions earlier rather than later." }
      ],
      checkIn: [
        { id: "pb-t-ad-q1", subject: "adult-health", stem: "HbA1c diagnostic of diabetes:", options: ["≥5.7%","≥6.0%","≥6.5%","≥7.0%"], answer: 2, explanation: "ADA: HbA1c ≥6.5% diagnostic of DM." },
        { id: "pb-t-ad-q2", subject: "adult-health", stem: "Most common side effect of ACE inhibitors:", options: ["Bradycardia","Dry cough","Hyperglycemia","Constipation"], answer: 1, explanation: "Dry cough (bradykinin-mediated) is the classic ACEi side effect — switch to ARB if intolerable." },
        { id: "pb-t-ad-q3", subject: "adult-health", stem: "tPA window for ischemic stroke:", options: ["≤30 min","≤2 hours","≤4.5 hours","≤12 hours"], answer: 2, explanation: "tPA up to 4.5 h from symptom onset (after CT rules out hemorrhage)." },
        { id: "pb-t-ad-q4", subject: "adult-health", stem: "Most important post-op intervention to prevent DVT:", options: ["Bed rest","Early ambulation","High-fat diet","Restrict fluids"], answer: 1, explanation: "Early ambulation + leg exercises + pharmacological prophylaxis prevent DVT." },
        { id: "pb-t-ad-q5", subject: "adult-health", stem: "Stage 2 hypertension begins at:", options: ["120/80","130/80","140/90","160/100"], answer: 2, explanation: "ACC/AHA 2017: Stage 2 ≥140/≥90." },
        { id: "pb-t-ad-q6", subject: "adult-health", stem: "COPD oxygen therapy targets SpO2 of approximately:", options: ["≥99%","94-98%","88-92%","75-80%"], answer: 2, explanation: "In COPD with chronic CO2 retention, target SpO2 88-92% to avoid suppressing hypoxic drive." },
        { id: "pb-t-ad-q7", subject: "adult-health", stem: "The normal serum potassium range in adults is:", options: ["1.5–2.5 mmol/L","3.5–5.0 mmol/L","8.5–10.5 mmol/L","135–145 mmol/L"], answer: 1, explanation: "Normal serum potassium is 3.5–5.0 mmol/L; values outside this range threaten cardiac rhythm." },
        { id: "pb-t-ad-q8", subject: "adult-health", stem: "The classic chest pain of a myocardial infarction:", options: ["Is sharp and worse on inspiration","Is central and crushing, radiating to the arm or jaw","Is localised to the right flank","Only occurs after eating"], answer: 1, explanation: "MI typically causes central, crushing chest pain radiating to the left arm, neck, or jaw." },
        { id: "pb-t-ad-q9", subject: "adult-health", stem: "The best position for a breathless patient is:", options: ["Supine flat","Trendelenburg","High-Fowler's (sitting upright)","Prone"], answer: 2, explanation: "Sitting upright in high-Fowler's position maximises lung expansion and eases breathing." },
        { id: "pb-t-ad-q10", subject: "adult-health", stem: "A patient on furosemide should be monitored for low levels of:", options: ["Potassium","Calcium","Sodium","Glucose"], answer: 0, explanation: "Loop diuretics such as furosemide cause potassium loss, risking hypokalaemia and arrhythmias." }
      ]
    },

    /* ============================================================
       NEW TOPICS (Phase 2b expansion)
       ============================================================ */
    {
      id: "pb-t-infection",
      title: "Infection Prevention & Control",
      subject: "fundamental-nursing",
      readMinutes: 9,
      summary: "The chain of infection, standard and transmission-based precautions, hand hygiene, PPE, and safe handling of sharps and waste.",
      content: [
        { h: "The Chain of Infection", p: "Infection spreads through six links: the infectious agent, a reservoir (where it lives), a portal of exit, a mode of transmission, a portal of entry, and a susceptible host. Breaking any link stops the spread. Nursing actions target each link — for example, hand hygiene breaks transmission, and immunization reduces host susceptibility. Understanding the chain helps you choose the right precaution for each situation." },
        { h: "Hand Hygiene", p: "Hand hygiene is the single most effective measure to prevent healthcare-associated infection. Use alcohol-based hand rub for routine decontamination when hands are not visibly soiled, and soap and water when they are soiled or after caring for a patient with diarrhoea. The WHO 'five moments' are: before touching a patient, before a clean/aseptic procedure, after body-fluid exposure risk, after touching a patient, and after touching the patient's surroundings." },
        { h: "Standard Precautions", p: "Standard precautions apply to every patient at all times, regardless of diagnosis, because infection status is often unknown. They include hand hygiene, gloves and other PPE when contact with body fluids is likely, safe injection practice, respiratory hygiene, and safe handling of sharps, linen, and waste. Treat all blood and body fluids as potentially infectious." },
        { h: "Transmission-Based Precautions", p: "Added to standard precautions for specific organisms. Contact precautions (gloves and gown) for organisms spread by touch, such as MRSA or C. difficile. Droplet precautions (surgical mask within ~1 metre) for influenza, pertussis, and meningococcus. Airborne precautions (N95 respirator and a negative-pressure room) for tuberculosis, measles, and chickenpox. Knowing which category a disease falls into is frequently tested." },
        { h: "Personal Protective Equipment", p: "Select PPE based on the anticipated exposure. The order of putting on (donning) is gown, mask/respirator, goggles, then gloves. The order of removing (doffing) is gloves, goggles, gown, then mask/respirator last — because the front of items is contaminated and the face is protected until last. Perform hand hygiene immediately after removing all PPE." },
        { h: "Asepsis", p: "Medical asepsis (clean technique) reduces the number of organisms and prevents their spread — used for routine care such as giving oral medication. Surgical asepsis (sterile technique) eliminates all organisms and is required for invasive procedures such as urinary catheterization, wound dressing, and injections. Once a sterile field is contaminated, it must be discarded." },
        { h: "Sharps & Waste Safety", p: "Dispose of used needles immediately in a puncture-proof sharps container without recapping — recapping is a leading cause of needlestick injury. Segregate clinical waste from general waste per local policy. If a needlestick injury occurs, encourage bleeding, wash with soap and water, report immediately, and follow post-exposure prophylaxis protocols. Never bend or break needles by hand." },
        { h: "Preventing Healthcare-Associated Infection", p: "Common preventable infections include catheter-associated urinary tract infection, central-line bloodstream infection, surgical site infection, and ventilator-associated pneumonia. Prevent them with strict asepsis on insertion, daily review of whether devices are still needed, early removal, elevating the head of the bed, good oral care, and meticulous hand hygiene. Antibiotic stewardship — using the right drug only when needed — limits resistance." }
      ],
      checkIn: [
        { id: "pb-t-inf-q1", subject: "fundamental-nursing", stem: "The single most effective measure to prevent healthcare-associated infection is:", options: ["Wearing gloves at all times","Hand hygiene","Routine antibiotics","Isolating every patient"], answer: 1, explanation: "Hand hygiene is the most effective measure to prevent the spread of infection." },
        { id: "pb-t-inf-q2", subject: "fundamental-nursing", stem: "Tuberculosis requires which transmission-based precaution?", options: ["Contact","Droplet","Airborne","Standard only"], answer: 2, explanation: "TB spreads via airborne droplet nuclei, requiring airborne precautions and an N95 respirator." },
        { id: "pb-t-inf-q3", subject: "fundamental-nursing", stem: "Standard precautions are applied to:", options: ["Only patients with a known infection","All patients regardless of diagnosis","Only patients in isolation","Only during surgery"], answer: 1, explanation: "Standard precautions apply to every patient at all times, because infection status is often unknown." },
        { id: "pb-t-inf-q4", subject: "fundamental-nursing", stem: "When doffing PPE, which item is removed last?", options: ["Gloves","Gown","Goggles","Mask/respirator"], answer: 3, explanation: "The mask or respirator is removed last, as the face stays protected until other contaminated items are off." },
        { id: "pb-t-inf-q5", subject: "fundamental-nursing", stem: "Used needles should be:", options: ["Recapped then binned","Placed directly in a puncture-proof sharps container","Put in general waste","Bent before disposal"], answer: 1, explanation: "Dispose of sharps immediately without recapping to prevent needlestick injury." },
        { id: "pb-t-inf-q6", subject: "fundamental-nursing", stem: "Which procedure requires sterile (surgical aseptic) technique?", options: ["Giving oral medicine","Urinary catheter insertion","Taking blood pressure","Feeding a patient"], answer: 1, explanation: "Urinary catheterization is invasive and requires sterile technique." },
        { id: "pb-t-inf-q7", subject: "fundamental-nursing", stem: "Which precaution is required for a patient with C. difficile?", options: ["Airborne","Contact","Droplet","None"], answer: 1, explanation: "C. difficile spreads by contact; use gloves, gown, and soap-and-water hand washing (alcohol rub does not kill spores)." },
        { id: "pb-t-inf-q8", subject: "fundamental-nursing", stem: "Breaking the 'chain of infection' at the mode of transmission is achieved mainly by:", options: ["Immunization","Hand hygiene and cleaning","Giving antibiotics","Improving nutrition"], answer: 1, explanation: "Hand hygiene and environmental cleaning interrupt transmission, a key link in the chain." },
        { id: "pb-t-inf-q9", subject: "fundamental-nursing", stem: "After a needlestick injury, the first action is to:", options: ["Ignore it if small","Encourage bleeding and wash with soap and water","Apply a tight bandage only","Wait until end of shift to report"], answer: 1, explanation: "Encourage bleeding, wash the site, then report immediately and follow post-exposure prophylaxis." },
        { id: "pb-t-inf-q10", subject: "fundamental-nursing", stem: "When are alcohol-based hand rubs NOT appropriate?", options: ["Before touching a patient","When hands are visibly soiled","After touching surroundings","Before an aseptic task"], answer: 1, explanation: "When hands are visibly soiled or after caring for diarrhoea (e.g., C. difficile), wash with soap and water instead." }
      ]
    },
    {
      id: "pb-t-maternal",
      title: "Maternal & Newborn Care",
      subject: "midwifery",
      readMinutes: 10,
      summary: "Antenatal care, the stages of labour, danger signs in pregnancy, postpartum haemorrhage, and essential newborn care.",
      content: [
        { h: "Antenatal Care", p: "Antenatal care monitors the health of mother and baby and detects problems early. WHO recommends a minimum of eight antenatal contacts. Routine care includes blood pressure and weight checks, urine testing for protein and sugar, measuring fundal height, checking the baby's heart, tetanus immunization, and iron and folic acid supplementation. Folic acid before and in early pregnancy reduces neural tube defects." },
        { h: "Danger Signs in Pregnancy", p: "Teach every pregnant woman the danger signs that need urgent care: severe headache or blurred vision, swelling of the face and hands, vaginal bleeding, severe abdominal pain, reduced or absent fetal movements, fever, and convulsions. These may signal pre-eclampsia, haemorrhage, infection, or fetal distress. Early recognition and referral save lives." },
        { h: "Stages of Labour", p: "Labour has three stages. The first stage runs from the onset of regular contractions to full (10 cm) cervical dilatation, and is the longest. The second stage is from full dilatation to the birth of the baby. The third stage is from the birth of the baby to delivery of the placenta. Active management of the third stage — a uterotonic, controlled cord traction, and uterine massage — reduces postpartum haemorrhage." },
        { h: "Pre-eclampsia & Eclampsia", p: "Pre-eclampsia is new high blood pressure (≥140/90) with proteinuria after 20 weeks of pregnancy, with headache, visual changes, and swelling. Untreated, it can progress to eclampsia (seizures), which is life-threatening. Magnesium sulfate is the first-line drug to prevent and treat eclamptic seizures; calcium gluconate is its antidote. Monitor reflexes, respiratory rate, and urine output during magnesium therapy." },
        { h: "Postpartum Haemorrhage", p: "Postpartum haemorrhage — blood loss over 500 mL after vaginal birth — is a leading cause of maternal death. The most common cause is uterine atony (a poorly contracting uterus). Remember the four T's: Tone (atony), Trauma (tears), Tissue (retained placenta), Thrombin (clotting problems). First actions: call for help, massage the uterus, give a uterotonic such as oxytocin, ensure IV access, and monitor vital signs." },
        { h: "Essential Newborn Care", p: "At birth, dry the baby thoroughly, keep it warm (skin-to-skin with the mother), and ensure it is breathing. Initiate breastfeeding within the first hour to provide colostrum and promote bonding. Routine care includes cord care (keep clean and dry), vitamin K to prevent bleeding, eye care, weighing, and immunization (BCG and OPV-0). Watch for danger signs: poor feeding, lethargy, fast or difficult breathing, fever or low temperature, and jaundice in the first 24 hours." },
        { h: "Breastfeeding Support", p: "Exclusive breastfeeding for six months is recommended. Help the mother with positioning and attachment — the baby's mouth should cover much of the areola, not just the nipple, to feed well and prevent sore nipples. Feed on demand, day and night. Colostrum, the first thick yellow milk, is rich in antibodies. Reassure mothers that frequent feeding is normal and builds the milk supply." },
        { h: "Family Planning Basics", p: "Counsel on birth spacing of at least two years for maternal and child health. Methods include barrier methods (condoms, which also prevent sexually transmitted infection), combined and progestogen-only pills, injectables, implants and intrauterine devices (long-acting reversible methods), and permanent methods. Lactational amenorrhoea offers short-term protection only under specific conditions. Choice should be informed and voluntary." }
      ],
      checkIn: [
        { id: "pb-t-mat-q1", subject: "midwifery", stem: "WHO recommends a minimum number of antenatal contacts of:", options: ["4","6","8","12"], answer: 2, explanation: "WHO's 2016 guidance recommends a minimum of eight antenatal care contacts." },
        { id: "pb-t-mat-q2", subject: "midwifery", stem: "The first stage of labour ends when:", options: ["Contractions begin","The cervix is fully (10 cm) dilated","The baby is born","The placenta is delivered"], answer: 1, explanation: "The first stage runs from onset of labour to full cervical dilatation." },
        { id: "pb-t-mat-q3", subject: "midwifery", stem: "The most common cause of postpartum haemorrhage is:", options: ["Retained placenta","Uterine atony","Cervical tear","Clotting failure"], answer: 1, explanation: "Uterine atony (a poorly contracting uterus) is the leading cause of postpartum haemorrhage." },
        { id: "pb-t-mat-q4", subject: "midwifery", stem: "The first-line drug to prevent and treat eclamptic seizures is:", options: ["Diazepam","Magnesium sulfate","Phenytoin","Calcium gluconate"], answer: 1, explanation: "Magnesium sulfate is first-line; calcium gluconate is its antidote." },
        { id: "pb-t-mat-q5", subject: "midwifery", stem: "Pre-eclampsia is diagnosed after 20 weeks with:", options: ["BP ≥120/80","BP ≥140/90 plus proteinuria","Proteinuria alone","Swelling alone"], answer: 1, explanation: "Pre-eclampsia is new hypertension ≥140/90 with proteinuria (or end-organ signs) after 20 weeks." },
        { id: "pb-t-mat-q6", subject: "midwifery", stem: "Breastfeeding should ideally be initiated:", options: ["Within the first hour of birth","After 6 hours","After 24 hours","After the first bath"], answer: 0, explanation: "Early initiation within the first hour gives colostrum and promotes bonding and uterine contraction." },
        { id: "pb-t-mat-q7", subject: "midwifery", stem: "A danger sign in pregnancy requiring urgent care is:", options: ["Mild back ache","Severe headache with blurred vision","Occasional heartburn","Mild ankle swelling in late pregnancy"], answer: 1, explanation: "Severe headache with visual changes suggests pre-eclampsia and needs urgent assessment." },
        { id: "pb-t-mat-q8", subject: "midwifery", stem: "Immediate care of a newborn at birth includes:", options: ["Delayed drying","Drying, warmth, and ensuring breathing","Routine deep suctioning of all babies","Immediate bathing"], answer: 1, explanation: "Dry the baby, keep it warm, and ensure breathing — the first steps of essential newborn care." },
        { id: "pb-t-mat-q9", subject: "midwifery", stem: "Active management of the third stage of labour helps prevent:", options: ["Pre-eclampsia","Postpartum haemorrhage","Gestational diabetes","Preterm labour"], answer: 1, explanation: "A uterotonic, controlled cord traction, and uterine massage reduce postpartum haemorrhage." },
        { id: "pb-t-mat-q10", subject: "midwifery", stem: "The first thick yellow breast milk, rich in antibodies, is called:", options: ["Colostrum","Foremilk","Hindmilk","Formula"], answer: 0, explanation: "Colostrum is the antibody-rich first milk, ideal for the newborn's immune protection." }
      ]
    },
    {
      id: "pb-t-mental",
      title: "Mental Health Nursing Basics",
      subject: "psychiatric",
      readMinutes: 9,
      summary: "Therapeutic communication, common disorders, suicide risk, key psychiatric medications, and the nurse's role in mental health.",
      content: [
        { h: "Therapeutic Communication", p: "The therapeutic relationship is the foundation of mental health nursing. Use active listening, open-ended questions, silence, reflection, and validation to build trust. Avoid barriers such as false reassurance ('everything will be fine'), giving advice, judging, or changing the subject. Be genuine, non-judgemental, and consistent. Maintain professional boundaries while showing empathy." },
        { h: "Anxiety & Depression", p: "Anxiety is excessive worry with physical symptoms such as palpitations, sweating, and restlessness; mild anxiety can sharpen focus, but severe anxiety impairs function. Depression features persistent low mood, loss of interest, sleep and appetite changes, low energy, guilt, and poor concentration. Always assess a depressed patient for suicidal thoughts. Treatment combines psychotherapy, medication, and social support." },
        { h: "Schizophrenia", p: "Schizophrenia is a psychotic disorder. Positive symptoms (added experiences) include hallucinations, delusions, and disorganized thinking. Negative symptoms (lost functions) include flat affect, social withdrawal, and lack of motivation. Auditory hallucinations are the most common type. Care includes building trust, not arguing about delusions, ensuring safety, promoting medication adherence, and supporting daily functioning." },
        { h: "Suicide Risk", p: "Take every expression of suicidal thinking seriously. Ask directly — 'Are you thinking of harming yourself?' — asking does not plant the idea; it opens assessment and shows you care. Assess intent, plan, and means. The priority is safety: provide close observation, remove dangerous objects, and never leave a high-risk patient alone. Statements like 'I won't be a problem anymore' may signal intent and require immediate response." },
        { h: "Psychiatric Medications", p: "Antipsychotics treat psychosis; watch for extrapyramidal side effects and, with long-term typical agents, tardive dyskinesia. Antidepressants (SSRIs) take two to four weeks to work — counsel patients not to stop early. Mood stabilizers such as lithium need blood-level monitoring (therapeutic 0.6–1.2 mEq/L); early toxicity causes nausea, tremor, and diarrhoea. Benzodiazepines relieve acute anxiety but risk dependence." },
        { h: "Substance Use", p: "Substance use disorders involve compulsive use despite harm. Withdrawal from alcohol can be dangerous — tremor, sweating, agitation, and, at its worst, seizures and delirium tremens. Treat with a calm environment, monitoring, and medication as prescribed. Approach without judgement, support motivation to change, and connect patients with rehabilitation and community resources." },
        { h: "The Nurse's Role & Stigma", p: "Mental illness is common and treatable, yet stigma stops many people from seeking help. Nurses promote mental health by listening without judgement, providing accurate information, involving family, and linking patients to services. Care for the whole person — physical health is often neglected in mental illness. Your respectful attitude can itself be therapeutic and can challenge harmful stereotypes in the community." }
      ],
      checkIn: [
        { id: "pb-t-men-q1", subject: "psychiatric", stem: "A therapeutic communication technique is:", options: ["Giving false reassurance","Active listening and open-ended questions","Changing the subject","Being judgemental"], answer: 1, explanation: "Active listening, open-ended questions, and empathy build trust; false reassurance is a barrier." },
        { id: "pb-t-men-q2", subject: "psychiatric", stem: "The most common type of hallucination in schizophrenia is:", options: ["Visual","Auditory","Tactile","Olfactory"], answer: 1, explanation: "Auditory hallucinations (hearing voices) are the most common in schizophrenia." },
        { id: "pb-t-men-q3", subject: "psychiatric", stem: "The priority when caring for a suicidal patient is:", options: ["Leaving them to rest alone","Ensuring safety and close observation","Avoiding the topic","Quick discharge"], answer: 1, explanation: "Safety is the priority — assess intent, remove means, and provide close observation." },
        { id: "pb-t-men-q4", subject: "psychiatric", stem: "Therapeutic lithium serum level is:", options: ["0.1–0.5 mEq/L","0.6–1.2 mEq/L","1.5–2.5 mEq/L","3.0–4.0 mEq/L"], answer: 1, explanation: "0.6–1.2 mEq/L is therapeutic; above 1.5 mEq/L is toxic." },
        { id: "pb-t-men-q5", subject: "psychiatric", stem: "A positive symptom of schizophrenia is:", options: ["Flat affect","Social withdrawal","Hallucinations","Lack of motivation"], answer: 2, explanation: "Positive symptoms add experiences — hallucinations, delusions, disorganization; negative symptoms are losses." },
        { id: "pb-t-men-q6", subject: "psychiatric", stem: "Tardive dyskinesia is associated with long-term use of:", options: ["SSRIs","Antipsychotics","Benzodiazepines","Lithium"], answer: 1, explanation: "Tardive dyskinesia results from chronic dopamine-receptor blockade by antipsychotics." },
        { id: "pb-t-men-q7", subject: "psychiatric", stem: "The best response to a patient who says 'I won't be a problem anymore' is:", options: ["'You'll feel better tomorrow'","'Are you thinking of harming yourself?'","'Don't talk like that'","'Let's change the subject'"], answer: 1, explanation: "Direct questioning is essential to assess suicidal intent; it does not plant the idea." },
        { id: "pb-t-men-q8", subject: "psychiatric", stem: "SSRIs typically take how long to show full effect?", options: ["A few hours","1–2 days","2–4 weeks","6 months"], answer: 2, explanation: "Antidepressants usually take 2–4 weeks to work; counsel patients not to stop early." },
        { id: "pb-t-men-q9", subject: "psychiatric", stem: "A dangerous feature of alcohol withdrawal is:", options: ["Mild headache","Seizures and delirium tremens","Increased appetite","Drowsiness only"], answer: 1, explanation: "Severe alcohol withdrawal can cause seizures and delirium tremens, which can be fatal." },
        { id: "pb-t-men-q10", subject: "psychiatric", stem: "Early signs of lithium toxicity include:", options: ["Constipation and dry skin","Nausea, tremor, and diarrhoea","Weight gain only","Hair loss"], answer: 1, explanation: "Early lithium toxicity causes nausea, coarse tremor, and diarrhoea; later, ataxia and seizures." }
      ]
    },
    {
      id: "pb-t-nutrition",
      title: "Nutrition & Diet Therapy",
      subject: "nutrition",
      readMinutes: 8,
      summary: "Macro- and micronutrients, therapeutic diets, malnutrition, and nutrition across the lifespan.",
      content: [
        { h: "Macronutrients", p: "The three macronutrients provide energy. Carbohydrates (4 kcal/g) are the body's main fuel. Proteins (4 kcal/g) build and repair tissue and are vital during growth, pregnancy, and healing. Fats (9 kcal/g) are the most energy-dense and carry fat-soluble vitamins. A balanced diet provides energy and the building blocks for health; needs rise during illness, surgery, and recovery." },
        { h: "Micronutrients", p: "Vitamins and minerals are needed in small amounts but are essential. Vitamin A protects vision and immunity; deficiency causes night blindness. Vitamin C aids wound healing and iron absorption; deficiency causes scurvy. Vitamin D and calcium build bone. Iron prevents anaemia. Iodine prevents goitre. Folic acid in early pregnancy prevents neural tube defects. Many of these are public-health priorities in Bangladesh." },
        { h: "Therapeutic Diets", p: "Diet is adjusted to the patient's condition. Diabetes: controlled carbohydrate, regular meals. Hypertension and heart failure: low salt. Chronic kidney disease: controlled protein, low potassium and phosphate. Liver failure: adequate calories, protein adjusted to the situation. After surgery: high protein and vitamin C for healing. Always check for swallowing difficulty and modify texture to prevent aspiration." },
        { h: "Protein-Energy Malnutrition", p: "Malnutrition remains common in children. Marasmus is severe wasting from overall energy (and protein) deficiency — the child looks 'skin and bones'. Kwashiorkor is mainly protein deficiency with oedema, a swollen abdomen, and skin and hair changes. Both are dangerous. Management is careful, staged refeeding to avoid refeeding syndrome, treating infection, and correcting micronutrient deficiencies." },
        { h: "Nutrition Assessment", p: "Assess nutrition using weight and height (and BMI in adults), mid-upper arm circumference in children, recent weight change, appetite, and diet history. Growth charts detect faltering early in children. Look for signs of deficiency — pale conjunctiva (anaemia), poor wound healing, brittle hair, oedema. Identifying malnutrition early allows timely intervention." },
        { h: "Nutrition Across the Lifespan", p: "Needs change with age. Infants: exclusive breastfeeding for six months, then complementary feeding. Children and adolescents: extra energy and protein for growth. Pregnancy and lactation: increased energy, protein, iron, and folate. Older adults: enough protein to preserve muscle, with attention to appetite, dentition, and hydration. Match dietary advice to the person's life stage and circumstances." },
        { h: "Hydration & Enteral Feeding", p: "Adequate fluid is part of nutrition. Monitor intake and output and watch for dehydration (dry mouth, reduced urine, lethargy) or overload. When patients cannot eat safely, nasogastric or other enteral feeding maintains nutrition — confirm tube position before feeding, elevate the head of the bed to reduce aspiration, and give feeds at the prescribed rate." }
      ],
      checkIn: [
        { id: "pb-t-nut-q1", subject: "nutrition", stem: "Which macronutrient is the most energy-dense, at 9 kcal per gram?", options: ["Carbohydrate","Protein","Fat","Fibre"], answer: 2, explanation: "Fat provides about 9 kcal/g, more than carbohydrate or protein (4 kcal/g each)." },
        { id: "pb-t-nut-q2", subject: "nutrition", stem: "Vitamin C deficiency causes:", options: ["Night blindness","Scurvy","Goitre","Rickets"], answer: 1, explanation: "Vitamin C deficiency causes scurvy; it also aids wound healing and iron absorption." },
        { id: "pb-t-nut-q3", subject: "nutrition", stem: "Kwashiorkor is primarily a deficiency of:", options: ["Carbohydrate","Protein","Fat","Water"], answer: 1, explanation: "Kwashiorkor is mainly protein deficiency, with oedema and a swollen abdomen." },
        { id: "pb-t-nut-q4", subject: "nutrition", stem: "A patient with chronic kidney disease should generally restrict:", options: ["Potassium and phosphate","Vitamin C","Fibre","Water-soluble vitamins"], answer: 0, explanation: "CKD diets restrict potassium and phosphate, with controlled protein." },
        { id: "pb-t-nut-q5", subject: "nutrition", stem: "Folic acid in early pregnancy prevents:", options: ["Anaemia only","Neural tube defects","Goitre","Night blindness"], answer: 1, explanation: "Folic acid before and in early pregnancy reduces the risk of neural tube defects." },
        { id: "pb-t-nut-q6", subject: "nutrition", stem: "Vitamin A deficiency classically causes:", options: ["Scurvy","Night blindness","Beriberi","Pellagra"], answer: 1, explanation: "Vitamin A deficiency causes night blindness and impairs immunity." },
        { id: "pb-t-nut-q7", subject: "nutrition", stem: "Marasmus is best described as:", options: ["Protein deficiency with oedema","Severe wasting from energy deficiency","Vitamin C deficiency","Iron overload"], answer: 1, explanation: "Marasmus is severe wasting from overall energy (and protein) deficiency, without oedema." },
        { id: "pb-t-nut-q8", subject: "nutrition", stem: "Vitamin C enhances the absorption of:", options: ["Calcium","Iron","Sodium","Potassium"], answer: 1, explanation: "Vitamin C reduces dietary iron to its more absorbable ferrous form, enhancing absorption." },
        { id: "pb-t-nut-q9", subject: "nutrition", stem: "To reduce aspiration risk during nasogastric feeding, the nurse should:", options: ["Lay the patient flat","Elevate the head of the bed","Give the feed rapidly","Skip checking tube position"], answer: 1, explanation: "Elevating the head of the bed and confirming tube position reduce aspiration risk." },
        { id: "pb-t-nut-q10", subject: "nutrition", stem: "The recommended infant feeding for the first six months is:", options: ["Formula only","Exclusive breastfeeding","Cow's milk","Solid foods"], answer: 1, explanation: "Exclusive breastfeeding for six months is recommended, then complementary feeding." }
      ]
    },
    {
      id: "pb-t-vitals",
      title: "Vital Signs & Health Assessment",
      subject: "fundamental-nursing",
      readMinutes: 9,
      summary: "Normal ranges and correct technique for the core vital signs, pain assessment, and when to escalate.",
      content: [
        { h: "Why Vital Signs Matter", p: "Vital signs are the quickest way to know whether a patient is stable or deteriorating. Trends matter more than single readings — a steady rise in heart rate or fall in blood pressure can be the first warning of trouble. Always compare with the patient's own baseline and record findings promptly and accurately." },
        { h: "Temperature", p: "Normal adult oral temperature is 36.5–37.5 °C. Rectal readings are about 0.5 °C higher and axillary about 0.5 °C lower. Fever (>38 °C) suggests infection; very high temperature (≥41 °C, hyperpyrexia) is an emergency. A low temperature can also signal serious infection, especially in the elderly and newborns." },
        { h: "Pulse", p: "Normal adult resting pulse is 60–100 beats per minute. Use the radial artery for routine checks and count for a full minute if the rhythm is irregular. Assess rate, rhythm, and strength. Bradycardia is below 60 and tachycardia above 100. Children have faster rates than adults." },
        { h: "Respiration", p: "Normal adult respiration is 12–20 breaths per minute. Count without telling the patient, because awareness changes the rate. Note depth, rhythm, and effort, including the use of accessory muscles. Fast breathing (tachypnoea) is an important early sign of illness, especially in children." },
        { h: "Blood Pressure", p: "Normal blood pressure is below 120/80 mmHg. Per ACC/AHA 2017: elevated 120–129/<80, Stage 1 hypertension 130–139/80–89, and Stage 2 ≥140/90. Use a correctly sized cuff covering about 80% of the arm — too small a cuff falsely raises the reading. Position the patient seated, rested, with the arm at heart level, and recheck any abnormal value." },
        { h: "Oxygen Saturation & Pain", p: "Pulse oximetry (SpO₂) is the 'sixth vital sign'; normal on room air is 95–100%, and below 90% needs intervention. In COPD with CO₂ retention, target 88–92%. Pain is the 'fifth vital sign' — self-report is the gold standard; use a 0–10 numeric scale for adults and faces scales for children. Reassess pain after every intervention." },
        { h: "When to Escalate", p: "Report urgently for: heart rate below 40 or above 130, respiratory rate below 8 or above 25, systolic blood pressure below 90 or above 180, SpO₂ below 90% on room air, temperature above 39.5 °C or below 35 °C, or any sudden change in consciousness. Many hospitals use an early-warning score to trigger escalation. When in doubt, ask for senior help — patient safety comes first." }
      ],
      checkIn: [
        { id: "pb-t-vit-q1", subject: "fundamental-nursing", stem: "Normal adult oral body temperature is:", options: ["35.0–36.0 °C","36.5–37.5 °C","37.5–38.5 °C","38.0–39.0 °C"], answer: 1, explanation: "Normal adult oral temperature is 36.5–37.5 °C." },
        { id: "pb-t-vit-q2", subject: "fundamental-nursing", stem: "Normal adult resting pulse rate is:", options: ["40–60 bpm","60–100 bpm","100–120 bpm","120–140 bpm"], answer: 1, explanation: "The normal adult resting pulse is 60–100 beats per minute." },
        { id: "pb-t-vit-q3", subject: "fundamental-nursing", stem: "Normal adult respiratory rate is:", options: ["6–10/min","12–20/min","22–28/min","30–40/min"], answer: 1, explanation: "Normal adult respiration is 12–20 breaths per minute." },
        { id: "pb-t-vit-q4", subject: "fundamental-nursing", stem: "Per ACC/AHA 2017, Stage 2 hypertension begins at:", options: ["120/80","130/80","140/90","160/100"], answer: 2, explanation: "Stage 2 hypertension is ≥140/90 mmHg." },
        { id: "pb-t-vit-q5", subject: "fundamental-nursing", stem: "Normal SpO₂ on room air for a healthy adult is:", options: ["80–84%","85–89%","90–94%","95–100%"], answer: 3, explanation: "Normal SpO₂ on room air is 95–100%; below 90% requires intervention." },
        { id: "pb-t-vit-q6", subject: "fundamental-nursing", stem: "Respirations should be counted:", options: ["While telling the patient to breathe normally","Without the patient being aware","Only when the patient sleeps","For 10 seconds × 6"], answer: 1, explanation: "Awareness changes the breathing rate, so count respirations discreetly." },
        { id: "pb-t-vit-q7", subject: "fundamental-nursing", stem: "An undersized blood pressure cuff will most likely give a:", options: ["Falsely low reading","Falsely high reading","Accurate reading","No reading"], answer: 1, explanation: "Too small a cuff requires extra pressure to occlude the artery, falsely raising the reading." },
        { id: "pb-t-vit-q8", subject: "fundamental-nursing", stem: "The gold standard for assessing pain in an alert adult is:", options: ["Vital sign changes","The nurse's judgement","The patient's self-report","Facial expression only"], answer: 2, explanation: "Self-report on a 0–10 scale is the gold standard — pain is what the patient says it is." },
        { id: "pb-t-vit-q9", subject: "fundamental-nursing", stem: "Hyperpyrexia (a medical emergency) is a temperature of:", options: ["≥38 °C","≥39 °C","≥40 °C","≥41 °C"], answer: 3, explanation: "Hyperpyrexia (≥41 °C) risks central nervous system injury and is an emergency." },
        { id: "pb-t-vit-q10", subject: "fundamental-nursing", stem: "Which finding should be reported to senior staff urgently?", options: ["Pulse 72 bpm","SpO₂ 98%","Respiratory rate 14/min","SpO₂ 88% on room air"], answer: 3, explanation: "SpO₂ below 90% on room air is a danger sign needing urgent review." }
      ]
    },
    {
      id: "pb-t-microbiology",
      title: "Microbiology & Immunity Basics",
      subject: "microbiology",
      readMinutes: 8,
      summary: "Types of microorganisms, sterilization vs. disinfection, how infections spread, immunity, and antibiotic resistance.",
      content: [
        { h: "Types of Microorganisms", p: "Microorganisms include bacteria, viruses, fungi, and parasites. Bacteria are single-celled and may be helpful (gut flora) or harmful; they are treated with antibiotics. Viruses are smaller, need a host cell to multiply, and do not respond to antibiotics. Fungi cause infections such as thrush and ringworm. Parasites include protozoa (e.g., malaria) and worms. Knowing the type guides treatment." },
        { h: "Normal Flora & Opportunists", p: "The body normally carries harmless or helpful microorganisms — normal flora — on the skin and in the gut and elsewhere. They aid digestion and compete with harmful organisms. Problems arise when flora move to the wrong site (gut bacteria entering the urinary tract) or when immunity is weakened, letting normally harmless 'opportunistic' organisms cause disease." },
        { h: "Sterilization vs. Disinfection", p: "Sterilization destroys all microorganisms, including spores — achieved by autoclaving (steam under pressure) for instruments. Disinfection reduces organisms on surfaces but may not kill spores; boiling, for example, disinfects but does not sterilize. Antiseptics are applied to skin. Choose the method by the level of risk: critical items entering sterile tissue must be sterilized." },
        { h: "How Infections Spread", p: "Routes include direct contact, droplets (coughing, sneezing within about a metre), airborne tiny particles that travel further (tuberculosis, measles), vehicles such as contaminated food or water (cholera, typhoid), and vectors such as mosquitoes (malaria, dengue). Matching the route to the right precaution — contact, droplet, or airborne — prevents spread." },
        { h: "Immunity", p: "Immunity is the body's defence against infection. Innate immunity is the inborn, non-specific first line (skin, stomach acid, inflammation). Adaptive immunity is specific and develops over time. Active immunity comes from infection or vaccination and is long-lasting; passive immunity is borrowed antibodies (from the mother across the placenta or in breast milk, or from immunoglobulin injections) and is temporary." },
        { h: "Vaccination", p: "Vaccines train the immune system to recognize an organism without causing the disease, protecting the individual and, through herd immunity, the community. Live vaccines (BCG, measles, oral polio) are generally avoided in significant immunodeficiency and pregnancy. Maintaining the cold chain keeps vaccines effective. Immunization is one of the most cost-effective public-health measures." },
        { h: "Antibiotic Resistance", p: "Overuse and misuse of antibiotics let bacteria become resistant, making infections harder to treat. Prevent resistance through antibiotic stewardship: use antibiotics only when needed, choose the right drug and dose, complete the prescribed course, and never use antibiotics for viral illness. Nurses educate patients and support correct, rational use." }
      ],
      checkIn: [
        { id: "pb-t-mic-q1", subject: "microbiology", stem: "Which organism does NOT respond to antibiotics?", options: ["Bacteria","Viruses","Both equally","Neither"], answer: 1, explanation: "Antibiotics act on bacteria, not viruses; viral illness should not be treated with antibiotics." },
        { id: "pb-t-mic-q2", subject: "microbiology", stem: "Sterilization differs from disinfection in that sterilization:", options: ["Only cleans surfaces","Destroys all microorganisms including spores","Is used on skin","Uses plain water"], answer: 1, explanation: "Sterilization (e.g., autoclaving) destroys all organisms including spores; disinfection may not kill spores." },
        { id: "pb-t-mic-q3", subject: "microbiology", stem: "Boiling instruments achieves:", options: ["Sterilization","Disinfection (not sporicidal)","Antisepsis of skin","Nothing useful"], answer: 1, explanation: "Boiling disinfects but does not reliably kill spores, so it is not true sterilization." },
        { id: "pb-t-mic-q4", subject: "microbiology", stem: "Malaria is caused by a:", options: ["Bacterium","Virus","Protozoan parasite","Fungus"], answer: 2, explanation: "Malaria is caused by Plasmodium, a protozoan parasite spread by mosquitoes." },
        { id: "pb-t-mic-q5", subject: "microbiology", stem: "Immunity from a vaccine is an example of:", options: ["Passive immunity","Active immunity","Innate immunity","No immunity"], answer: 1, explanation: "Vaccination produces active immunity by stimulating the body to make its own antibodies." },
        { id: "pb-t-mic-q6", subject: "microbiology", stem: "Antibodies passed from mother to baby in breast milk give:", options: ["Active immunity","Passive immunity","Innate immunity","Permanent immunity"], answer: 1, explanation: "Maternal antibodies provide temporary passive immunity to the newborn." },
        { id: "pb-t-mic-q7", subject: "microbiology", stem: "Tuberculosis spreads mainly by the:", options: ["Faecal–oral route","Airborne route","Vector (mosquito) route","Direct skin contact"], answer: 1, explanation: "TB spreads by airborne droplet nuclei, requiring airborne precautions." },
        { id: "pb-t-mic-q8", subject: "microbiology", stem: "Antibiotic resistance is best prevented by:", options: ["Using antibiotics for every fever","Stopping antibiotics as soon as you feel better","Using antibiotics only when needed and completing the course","Sharing leftover antibiotics"], answer: 2, explanation: "Rational use — only when indicated, correct drug and full course — limits resistance." },
        { id: "pb-t-mic-q9", subject: "microbiology", stem: "The body's inborn, non-specific first line of defence is:", options: ["Adaptive immunity","Innate immunity","Passive immunity","Acquired immunity"], answer: 1, explanation: "Innate immunity (skin, stomach acid, inflammation) is the inborn, non-specific first line." },
        { id: "pb-t-mic-q10", subject: "microbiology", stem: "Cholera and typhoid are typically spread through:", options: ["Mosquito bites","Contaminated food and water","Airborne particles","Direct skin contact"], answer: 1, explanation: "Cholera and typhoid spread via contaminated food and water (the faecal–oral route)." }
      ]
    }
  ];

  /* Question bank — uses some MSN questions as foundational + Post-Basic-specific */
  const questionBank = [
    /* Fundamental */
    { id: "pb-fn-001", subject: "fundamental-nursing", stem: "The five steps of the nursing process (ADPIE) begin with:", options: ["Diagnosis","Planning","Assessment","Evaluation"], answer: 2, explanation: "Assessment comes first." },
    { id: "pb-fn-002", subject: "fundamental-nursing", stem: "Hand hygiene is most effective when:", options: ["Performed once a shift","Performed before and after every patient contact","Only when hands appear soiled","Only between rooms"], answer: 1, explanation: "Before and after every patient encounter — also before aseptic procedures and after body fluid exposure." },
    { id: "pb-fn-003", subject: "fundamental-nursing", stem: "Therapeutic communication does NOT include:", options: ["Open-ended questions","Silence","False reassurance","Reflection"], answer: 2, explanation: "False reassurance ('Everything will be fine') is non-therapeutic." },
    { id: "pb-fn-004", subject: "fundamental-nursing", stem: "Informed consent must include:", options: ["Diagnosis only","Procedure, risks, benefits, alternatives, and right to refuse","Cost only","Insurance details"], answer: 1, explanation: "Full disclosure: nature, risks/benefits, alternatives, consequences of refusal." },
    { id: "pb-fn-005", subject: "fundamental-nursing", stem: "The WHO-recommended duration for routine handwashing with soap and water is:", options: ["5 seconds","10 seconds","40–60 seconds","5 minutes"], answer: 2, explanation: "WHO recommends 40–60 seconds for routine handwashing with soap and water (alcohol-based hand rub takes 20–30 seconds)." },
    { id: "pb-fn-006", subject: "fundamental-nursing", stem: "Documentation should be:", options: ["Written in pencil","Written in red ink","Done in chronological order, factually","Verbally only"], answer: 2, explanation: "FACCO: factual, accurate, complete, current, organized — in chronological order, permanent ink." },
    { id: "pb-fn-007", subject: "fundamental-nursing", stem: "The Joint Commission identifies the 'time-out' as critical before:", options: ["Eating","Surgery / invasive procedures","Discharge","Admission"], answer: 1, explanation: "Universal Protocol time-out before procedure: correct patient, correct site, correct procedure." },
    { id: "pb-fn-008", subject: "fundamental-nursing", stem: "Patient confidentiality permits sharing information with:", options: ["Anyone who asks","Family without consent","Members of the care team on a need-to-know basis","Social media"], answer: 2, explanation: "Need-to-know within the care team is permitted; broader disclosure requires consent (with limited legal exceptions)." },
    { id: "pb-fn-009", subject: "fundamental-nursing", stem: "Maslow's hierarchy places physiological needs:", options: ["At the top","At the second level","At the base","Outside the pyramid"], answer: 2, explanation: "Physiological (air, water, food, sleep) form the foundation." },
    { id: "pb-fn-010", subject: "fundamental-nursing", stem: "A patient says 'I want to die'. Nurse's BEST response:", options: ["'Why?'","'Don't say that.'","'Tell me more about what you're feeling.'","Change the topic."], answer: 2, explanation: "Open exploration validates feelings, allows assessment of suicidal ideation, plan, and intent." },
    /* Anatomy */
    { id: "pb-an-001", subject: "anatomy", stem: "Largest organ of the body:", options: ["Liver","Lungs","Skin","Brain"], answer: 2, explanation: "Skin." },
    { id: "pb-an-002", subject: "anatomy", stem: "Heart sound S2 corresponds to closure of:", options: ["AV valves","Semilunar valves (aortic + pulmonary)","Mitral only","Tricuspid only"], answer: 1, explanation: "S2 ('dub') = semilunar valve closure." },
    { id: "pb-an-003", subject: "anatomy", stem: "Number of bones in adult human body:", options: ["198","206","216","226"], answer: 1, explanation: "206 bones." },
    { id: "pb-an-004", subject: "anatomy", stem: "Functional unit of the kidney:", options: ["Glomerulus","Nephron","Tubule","Calyx"], answer: 1, explanation: "Nephron." },
    { id: "pb-an-005", subject: "anatomy", stem: "Adult resting heart rate range:", options: ["40-50","50-60","60-100","100-120"], answer: 2, explanation: "60-100 bpm normal adult resting." },
    { id: "pb-an-006", subject: "anatomy", stem: "Insulin is produced by:", options: ["Alpha cells","Beta cells","Delta cells","Gamma cells"], answer: 1, explanation: "Beta cells of pancreas." },
    { id: "pb-an-007", subject: "anatomy", stem: "Normal adult respiratory rate:", options: ["6-10","12-20","20-28","30-40"], answer: 1, explanation: "12-20 breaths/min adult." },
    { id: "pb-an-008", subject: "anatomy", stem: "Cerebellum primarily controls:", options: ["Memory","Vision","Balance and coordination","Emotion"], answer: 2, explanation: "Cerebellum coordinates movement, posture, balance." },
    /* Nutrition */
    { id: "pb-nu-001", subject: "nutrition", stem: "Vitamin C is most abundant in:", options: ["Milk","Citrus fruits","Eggs","Rice"], answer: 1, explanation: "Citrus + amla + guava." },
    { id: "pb-nu-002", subject: "nutrition", stem: "Energy value of 1 g of protein:", options: ["4 kcal","7 kcal","9 kcal","12 kcal"], answer: 0, explanation: "Protein: 4 kcal/g." },
    { id: "pb-nu-003", subject: "nutrition", stem: "Major source of essential amino acids:", options: ["Vegetables","Fruits","Animal protein and pulses","Sugar"], answer: 2, explanation: "Complete proteins (animal + soy) and complementary plant proteins (pulses + cereals)." },
    { id: "pb-nu-004", subject: "nutrition", stem: "Vitamin D deficiency causes:", options: ["Scurvy","Beri-beri","Rickets in children, osteomalacia in adults","Pellagra"], answer: 2, explanation: "Vitamin D deficiency → defective bone mineralization." },
    { id: "pb-nu-005", subject: "nutrition", stem: "Major source of iodine in Bangladesh diet:", options: ["Rice","Iodized salt","Sugar","Milk only"], answer: 1, explanation: "Universal Salt Iodization is the primary public health iodine source." },
    { id: "pb-nu-006", subject: "nutrition", stem: "Pernicious anemia is caused by deficiency of:", options: ["Vitamin C","Vitamin B12","Iron","Folate"], answer: 1, explanation: "B12 deficiency due to intrinsic factor lack → megaloblastic + neurological symptoms." },
    /* Microbiology */
    { id: "pb-mb-001", subject: "microbiology", stem: "TB is caused by:", options: ["Mycobacterium tuberculosis","Streptococcus","Klebsiella","Pneumocystis"], answer: 0, explanation: "Acid-fast bacillus." },
    { id: "pb-mb-002", subject: "microbiology", stem: "Hepatitis A transmits primarily via:", options: ["Blood","Fecal-oral","Respiratory","Vector"], answer: 1, explanation: "HAV: fecal-oral via contaminated food/water." },
    { id: "pb-mb-003", subject: "microbiology", stem: "Autoclave sterilization parameters:", options: ["100°C × 5 min","121°C × 15 min at 15 psi","60°C × 30 min","80°C × 20 min"], answer: 1, explanation: "Standard autoclave: 121°C, 15 psi, 15-30 min." },
    { id: "pb-mb-004", subject: "microbiology", stem: "Gram-negative cell walls contain:", options: ["Thick peptidoglycan only","LPS outer membrane","Mycolic acid","Capsule alone"], answer: 1, explanation: "Gram− have a thin peptidoglycan + LPS outer membrane." },
    { id: "pb-mb-005", subject: "microbiology", stem: "Most common cause of UTI:", options: ["E. coli","Pseudomonas","Klebsiella","Staphylococcus"], answer: 0, explanation: "E. coli causes ~80% of community-acquired UTIs." },
    /* Pharmacology */
    { id: "pb-ph-001", subject: "pharmacology", stem: "First-line antibiotic for pediatric pneumonia:", options: ["Penicillin V","Amoxicillin","Ciprofloxacin","Vancomycin"], answer: 1, explanation: "Oral amoxicillin × 5-7 days." },
    { id: "pb-ph-002", subject: "pharmacology", stem: "Warfarin reversal:", options: ["Vitamin K","Protamine","Calcium gluconate","Naloxone"], answer: 0, explanation: "Vitamin K." },
    { id: "pb-ph-003", subject: "pharmacology", stem: "Iron supplementation in children with anemia is best absorbed with:", options: ["Milk","Vitamin C","Calcium","Tea"], answer: 1, explanation: "Vitamin C (ascorbate) enhances non-heme iron absorption." },
    { id: "pb-ph-004", subject: "pharmacology", stem: "First-line antitubercular regimen (intensive phase):", options: ["HRZE × 2 months","HR × 6 months","Z × 9 months","RIF × 4 months"], answer: 0, explanation: "WHO standard: Isoniazid + Rifampicin + Pyrazinamide + Ethambutol (HRZE) × 2 mo intensive, then HR × 4 mo continuation." },
    { id: "pb-ph-005", subject: "pharmacology", stem: "Peripheral neuropathy caused by isoniazid (INH) is prevented by giving:", options: ["Pyridoxine (vitamin B6)","Vitamin K","Calcium","Folic acid"], answer: 0, explanation: "Isoniazid can cause peripheral neuropathy, prevented by co-administering pyridoxine (vitamin B6); optic neuritis is an ethambutol effect." },
    /* Adult Health */
    { id: "pb-ad-001", subject: "adult-health", stem: "HbA1c target for most diabetic adults:", options: ["<5%","<6%","<7%","<8%"], answer: 2, explanation: "<7% per ADA for most non-pregnant adults." },
    { id: "pb-ad-002", subject: "adult-health", stem: "Stage 2 HTN starts at:", options: ["120/80","130/80","140/90","160/100"], answer: 2, explanation: "ACC/AHA 2017: Stage 2 ≥140/≥90." },
    { id: "pb-ad-003", subject: "adult-health", stem: "FAST acronym for stroke:", options: ["Fever, Anaemia, Sugar, Time","Face, Arm, Speech, Time","Fluid, Acid, Saline, Temp","Foot, Arm, Spine, Touch"], answer: 1, explanation: "Face droop, Arm weakness, Speech difficulty, Time to call emergency." },
    { id: "pb-ad-004", subject: "adult-health", stem: "Insulin is best stored, unopened, at:", options: ["Freezer −20°C","Refrigerator 2-8°C","Room temperature","Direct sunlight"], answer: 1, explanation: "Refrigerator 2-8°C unopened; ≤28 days at room temp once in use." },
    { id: "pb-ad-005", subject: "adult-health", stem: "Cushing's triad indicates:", options: ["Sepsis","Raised intracranial pressure","Hypoglycemia","Shock"], answer: 1, explanation: "Hypertension + bradycardia + irregular respirations = ↑ICP (late sign)." },
    /* Child Health */
    { id: "pb-ch-001", subject: "child-health", stem: "BCG site:", options: ["Buttock","Right deltoid","Left deltoid","Thigh"], answer: 2, explanation: "Left deltoid, intradermal." },
    { id: "pb-ch-002", subject: "child-health", stem: "Anterior fontanelle closes by:", options: ["6 mo","12-18 mo","2 yr","3 yr"], answer: 1, explanation: "12-18 months." },
    { id: "pb-ch-003", subject: "child-health", stem: "ORS works by which mechanism:", options: ["Killing bacteria","Sodium-glucose co-transport","Increased motility","Antiemetic"], answer: 1, explanation: "Glucose-coupled sodium absorption drives water absorption." },
    { id: "pb-ch-004", subject: "child-health", stem: "Severe acute malnutrition treatment milk:", options: ["F-50","F-75 then F-100","Regular milk","Soy milk"], answer: 1, explanation: "WHO: F-75 for initial stabilization; F-100 for nutritional rehabilitation." },
    { id: "pb-ch-005", subject: "child-health", stem: "Most appropriate IM site in <1 year:", options: ["Deltoid","Vastus lateralis","Dorsogluteal","Ventrogluteal"], answer: 1, explanation: "Vastus lateralis (anterolateral thigh) — large muscle, no major nerves/vessels." },
    /* Psychiatric */
    { id: "pb-ps-001", subject: "psychiatric", stem: "Hallmark of schizophrenia (positive symptom):", options: ["Apathy","Hallucinations","Flat affect","Avolition"], answer: 1, explanation: "Positive: hallucinations, delusions, disorganization." },
    { id: "pb-ps-002", subject: "psychiatric", stem: "First-line antidepressant class:", options: ["TCAs","MAOIs","SSRIs","Benzodiazepines"], answer: 2, explanation: "SSRIs first-line (fluoxetine, sertraline, citalopram, escitalopram)." },
    { id: "pb-ps-003", subject: "psychiatric", stem: "Lithium toxicity signs:", options: ["Fine tremor only","Coarse tremor, confusion, ataxia, vomiting","Hypertension","Sedation only"], answer: 1, explanation: "Toxic (>1.5 mEq/L): coarse tremor, vomiting, ataxia, confusion. Severe (>2.5): seizures, coma." },
    { id: "pb-ps-004", subject: "psychiatric", stem: "Suicide assessment requires:", options: ["Avoiding the topic","Direct questioning about ideation, plan, means, intent","Family interview only","Vital signs only"], answer: 1, explanation: "Direct, open assessment." },
    { id: "pb-ps-005", subject: "psychiatric", stem: "Acute mania first-line:", options: ["Lithium or valproate","Diazepam","Fluoxetine","Donepezil"], answer: 0, explanation: "Lithium or valproate; antipsychotic added for severe agitation." },
    /* Community */
    { id: "pb-co-001", subject: "community-health", stem: "Alma-Ata year:", options: ["1948","1978","1988","2008"], answer: 1, explanation: "1978." },
    { id: "pb-co-002", subject: "community-health", stem: "Lowest tier of health service in Bangladesh:", options: ["Community Clinic","Upazila Health Complex","District Hospital","Medical College"], answer: 0, explanation: "Community Clinic." },
    { id: "pb-co-003", subject: "community-health", stem: "MMR per:", options: ["1000 LB","10,000 LB","100,000 LB","1 million LB"], answer: 2, explanation: "Per 100,000 live births." },
    { id: "pb-co-004", subject: "community-health", stem: "Cervical cancer screening test:", options: ["VIA / Pap smear","Mammography","Colonoscopy","ECG"], answer: 0, explanation: "Visual Inspection with Acetic acid (VIA) and Pap smear are standard screens." },
    { id: "pb-co-005", subject: "community-health", stem: "Most cost-effective public health intervention:", options: ["Surgery","Vaccination","Imaging","Genetic testing"], answer: 1, explanation: "Vaccination is among the highest-impact, lowest-cost public health interventions." },
    /* Midwifery */
    { id: "pb-mw-001", subject: "midwifery", stem: "Couvelaire uterus is associated with:", options: ["Placenta praevia","Placental abruption","PPH","Eclampsia"], answer: 1, explanation: "Severe abruption with myometrial bleeding gives a bruised 'Couvelaire' appearance." },
    { id: "pb-mw-002", subject: "midwifery", stem: "Definition of PPH after vaginal delivery:", options: [">200 mL","≥500 mL","≥1500 mL","≥2 L"], answer: 1, explanation: "≥500 mL vaginal, ≥1000 mL caesarean." },
    { id: "pb-mw-003", subject: "midwifery", stem: "Stage 3 of labour ends with:", options: ["Full dilation","Birth of baby","Delivery of placenta","Postpartum hour 1"], answer: 2, explanation: "Stage 3 = delivery of placenta + membranes." },
    { id: "pb-mw-004", subject: "midwifery", stem: "MgSO4 toxicity reversal:", options: ["Calcium gluconate","Naloxone","Vitamin K","Atropine"], answer: 0, explanation: "Calcium gluconate IV reverses Mg toxicity." },
    { id: "pb-mw-005", subject: "midwifery", stem: "WHO 8-contact ANC includes contacts at approximately:", options: ["12, 24, 36 wk","12, 20, 26, 30, 34, 36, 38, 40 wk","Every month","Every 2 weeks"], answer: 1, explanation: "Booking <12 wk, then 20, 26, 30, 34, 36, 38, 40 wk." },
    /* English */
    { id: "pb-en-001", subject: "english", stem: "Synonym of 'lucid':", options: ["Confusing","Clear","Dark","Brief"], answer: 1, explanation: "Lucid = clear, easy to understand." },
    { id: "pb-en-002", subject: "english", stem: "Choose correct: 'Neither of the nurses ___ available.'", options: ["are","is","were","be"], answer: 1, explanation: "'Neither' takes a singular verb." },
    { id: "pb-en-003", subject: "english", stem: "Antonym of 'benevolent':", options: ["Kind","Cruel","Generous","Friendly"], answer: 1, explanation: "Benevolent = kind; antonym = cruel/malevolent." },
    { id: "pb-en-004", subject: "english", stem: "Identify the article: 'She is ___ honest student.'", options: ["a","an","the","no article"], answer: 1, explanation: "'An' before vowel sound ('h' is silent here)." },
    { id: "pb-en-005", subject: "english", stem: "Plural of 'analysis':", options: ["analyses","analysises","analysisesi","analyzes"], answer: 0, explanation: "analysis → analyses." },
    /* GK */
    { id: "pb-gk-001", subject: "gk", stem: "Father of the Nation of Bangladesh:", options: ["Sher-e-Bangla","Bangabandhu Sheikh Mujibur Rahman","Maulana Bhasani","Tajuddin Ahmad"], answer: 1, explanation: "Bangabandhu Sheikh Mujibur Rahman." },
    { id: "pb-gk-002", subject: "gk", stem: "BNMC stands for:", options: ["Bangladesh Nursing & Midwifery Council","Bangladesh National Medical Council","Bangladesh Nursing & Medical College","Bangladesh Nurse Membership Council"], answer: 0, explanation: "Bangladesh Nursing & Midwifery Council." },
    { id: "pb-gk-003", subject: "gk", stem: "The founder of modern nursing, known as the 'Lady with the Lamp', is:", options: ["Florence Nightingale","Clara Barton","Virginia Henderson","Mother Teresa"], answer: 0, explanation: "Florence Nightingale, the 'Lady with the Lamp', founded modern nursing during the Crimean War." },
    { id: "pb-gk-004", subject: "gk", stem: "International Midwife Day:", options: ["May 5","May 12","July 1","October 16"], answer: 0, explanation: "International Day of the Midwife: 5 May." },
    { id: "pb-gk-005", subject: "gk", stem: "Ekushey February (Language Martyrs' Day) is observed on:", options: ["21 February","26 March","16 December","17 April"], answer: 0, explanation: "21 February — recognized as International Mother Language Day by UNESCO." }
  ];

  const tests = [];

  /* Model Test 01 — fully populated */
  tests.push({
    id: "pb-mt-01",
    title: "Post Basic Model Test 01",
    type: "model",
    duration: 30,
    intendedCount: 30,
    status: "live",
    questionIds: [
      "pb-fn-001","pb-fn-003","pb-fn-005","pb-fn-007","pb-fn-010",
      "pb-an-001","pb-an-003","pb-an-005",
      "pb-nu-001","pb-nu-004",
      "pb-mb-001","pb-mb-003",
      "pb-ph-001","pb-ph-003",
      "pb-ad-001","pb-ad-003",
      "pb-ch-001","pb-ch-003",
      "pb-ps-002","pb-ps-004",
      "pb-co-001","pb-co-003",
      "pb-mw-002","pb-mw-005",
      "pb-en-001","pb-en-003",
      "pb-gk-002","pb-gk-005",
      "pb-fn-008","pb-an-007"
    ]
  });

  /* Model Test 02 — fully populated */
  tests.push({
    id: "pb-mt-02",
    title: "Post Basic Model Test 02",
    type: "model",
    duration: 30,
    intendedCount: 30,
    status: "live",
    questionIds: [
      "pb-fn-002","pb-fn-004","pb-fn-006","pb-fn-009",
      "pb-an-002","pb-an-004","pb-an-006","pb-an-008",
      "pb-nu-002","pb-nu-005",
      "pb-mb-002","pb-mb-004","pb-mb-005",
      "pb-ph-002","pb-ph-004","pb-ph-005",
      "pb-ad-002","pb-ad-004","pb-ad-005",
      "pb-ch-002","pb-ch-004","pb-ch-005",
      "pb-ps-001","pb-ps-003","pb-ps-005",
      "pb-co-002","pb-co-004",
      "pb-mw-001","pb-mw-003",
      "pb-en-002"
    ]
  });

  /* Add topic check-in Qs to the bank first so tests 03-20 can draw from them. */
  topics.forEach(function (t) {
    t.checkIn.forEach(function (q) {
      if (!questionBank.find(function (x) { return x.id === q.id; })) {
        questionBank.push(q);
      }
    });
  });

  /* Look up each question by id and derive a "fact key" (subject + correct-answer
     text) so a single test never repeats the same fact via two different items. */
  const bankById = {};
  questionBank.forEach(function (q) { bankById[q.id] = q; });
  function factKey(id) {
    const q = bankById[id];
    if (!q) return id;
    return q.subject + "|" + String(q.options[q.answer]).toLowerCase().replace(/[^a-z0-9]/g, "");
  }
  function stemKey(id) {
    const q = bankById[id];
    if (!q) return id;
    return String(q.stem).toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  /* Auto-populate Tests 03 – 20 with 30 questions each, drawn deterministically
     from the bank with a per-test rotation. Skips same-fact collisions. */
  function pickIdsForTest(testNum) {
    const ids = questionBank.map(function (q) { return q.id; });
    const n = ids.length;
    if (n === 0) return [];
    const offset = ((testNum * 13) + 7) % n;
    const step = (n % 3 === 0) ? 4 : 3;
    const picks = [];
    const seen = {};
    const seenFact = {};
    const seenStem = {};
    let i = offset;
    let safety = n * 6;
    while (picks.length < 30 && safety-- > 0) {
      const id = ids[i % n];
      const fk = factKey(id), sk = stemKey(id);
      if (!seen[id] && !seenFact[fk] && !seenStem[sk]) { picks.push(id); seen[id] = true; seenFact[fk] = true; seenStem[sk] = true; }
      i += step;
    }
    let backfill = 0;
    while (picks.length < 30 && backfill < n) {
      const id = ids[backfill++];
      if (!seen[id]) { picks.push(id); seen[id] = true; }
    }
    return picks;
  }

  /* Pick `count` questions spread evenly across the bank, skipping same-fact
     collisions — used for the full model tests. */
  function pickSpread(count, seed) {
    const ids = questionBank.map(function (q) { return q.id; });
    const n = ids.length;
    if (n === 0) return [];
    const step = Math.max(1, Math.floor(n / count));
    const picks = [];
    const seen = {};
    const seenFact = {};
    const seenStem = {};
    let i = seed % n;
    let safety = n * 10;
    while (picks.length < count && safety-- > 0) {
      const id = ids[i % n];
      const fk = factKey(id), sk = stemKey(id);
      if (!seen[id] && !seenFact[fk] && !seenStem[sk]) { picks.push(id); seen[id] = true; seenFact[fk] = true; seenStem[sk] = true; }
      i += step + (picks.length % 2);
    }
    let backfill = 0;
    while (picks.length < count && backfill < n) {
      const id = ids[backfill++];
      if (!seen[id]) { picks.push(id); seen[id] = true; }
    }
    return picks;
  }

  for (let i = 3; i <= 10; i++) {
    tests.push({
      id: "pb-mt-" + String(i).padStart(2, "0"),
      title: "Post Basic Model Test " + String(i).padStart(2, "0"),
      type: "model",
      duration: 30,
      intendedCount: 30,
      status: "live",
      questionIds: pickIdsForTest(i)
    });
  }

  /* Tests 11 – 20 — now live, auto-populated from the expanded bank. */
  for (let i = 11; i <= 20; i++) {
    tests.push({
      id: "pb-mt-" + String(i).padStart(2, "0"),
      title: "Post Basic Model Test " + String(i).padStart(2, "0"),
      type: "model",
      duration: 30,
      intendedCount: 30,
      status: "live",
      questionIds: pickIdsForTest(i)
    });
  }

  /* Three full model tests — 100 Q each, evenly spread across all subjects. */
  tests.push({
    id: "pb-fmt-01",
    title: "Post Basic Full Model Test 01 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 0)
  });
  tests.push({
    id: "pb-fmt-02",
    title: "Post Basic Full Model Test 02 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 5)
  });
  tests.push({
    id: "pb-fmt-03",
    title: "Post Basic Full Model Test 03 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 11)
  });

  /* Register the topic check-in tests (questions already in bank above). */
  topics.forEach(function (t) {
    tests.push({
      id: "pb-topic-" + t.id,
      title: t.title + " — Check-in",
      type: "topic-checkin",
      topicId: t.id,
      duration: Math.max(5, t.checkIn.length),
      intendedCount: t.checkIn.length,
      status: "live",
      questionIds: t.checkIn.map(function (q) { return q.id; })
    });
  });

  window.PulsePrograms["post-basic"] = {
    topics: topics,
    questionBank: questionBank,
    tests: tests
  };
})();
