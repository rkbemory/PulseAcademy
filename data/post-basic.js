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
        { id: "pb-t-fn-q6", subject: "fundamental-nursing", stem: "Informed consent requires the patient to understand all EXCEPT:", options: ["Nature of the procedure","Risks and benefits","Alternatives","Cost of insurance"], answer: 3, explanation: "Procedure details, risks/benefits, alternatives, and right to withdraw — not insurance cost." }
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
        { id: "pb-t-an-q6", subject: "anatomy", stem: "Which muscle is involuntary?", options: ["Biceps","Smooth muscle of intestine","Quadriceps","Tongue muscle"], answer: 1, explanation: "Smooth (visceral) muscle is involuntary." }
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
        { id: "pb-t-ch-q6", subject: "child-health", stem: "IMCI 'pink' classification indicates:", options: ["Home care","Treatment at facility","Urgent referral","Counseling only"], answer: 2, explanation: "Pink = severe classification, urgent pre-referral treatment and transfer." }
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
        { id: "pb-t-co-q6", subject: "community-health", stem: "Number of essential elements of PHC per Alma-Ata:", options: ["5","6","8","10"], answer: 2, explanation: "Eight elements: education, nutrition, water/sanitation, MCH/FP, immunization, endemic disease prevention, treatment of common conditions, essential drugs." }
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
        { id: "pb-t-ph-q6", subject: "pharmacology", stem: "High-alert medications require:", options: ["Single nurse check","Independent double-check by two nurses","No special handling","Verbal confirmation only"], answer: 1, explanation: "ISMP recommends independent double-check for high-alert drugs (insulin, heparin, opioids, KCl, chemo)." }
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
        { id: "pb-t-ad-q6", subject: "adult-health", stem: "COPD oxygen therapy targets SpO2 of approximately:", options: ["≥99%","94-98%","88-92%","75-80%"], answer: 2, explanation: "In COPD with chronic CO2 retention, target SpO2 88-92% to avoid suppressing hypoxic drive." }
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
    { id: "pb-fn-005", subject: "fundamental-nursing", stem: "Correct technique for hand washing duration:", options: ["5 seconds","20 seconds","20 seconds (CDC) or ≥40-60 s (WHO)","2 minutes"], answer: 2, explanation: "WHO: 40-60 s. CDC: ~20 s. The longer recommendation aligns with WHO surgical hand hygiene." },
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
    { id: "pb-ph-005", subject: "pharmacology", stem: "Side effect of isoniazid:", options: ["Optic neuritis","Peripheral neuropathy","Hepatotoxicity","All except optic neuritis"], answer: 3, explanation: "INH: peripheral neuropathy (prevented by pyridoxine) and hepatotoxicity. Optic neuritis is ethambutol." },
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
    { id: "pb-gk-003", subject: "gk", stem: "First woman nursing graduate of Bangladesh (commonly cited):", options: ["Sufia Kamal","Begum Rokeya","Multiple early graduates from Mitford","Pritilata"], answer: 2, explanation: "Modern nursing education in Bangladesh dates to the colonial period via Mitford Hospital and later institutions." },
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

  /* Auto-populate Tests 03 – 20 with 30 questions each, drawn deterministically
     from the bank with a per-test rotation so each test feels distinct. */
  function pickIdsForTest(testNum) {
    const ids = questionBank.map(function (q) { return q.id; });
    const n = ids.length;
    if (n === 0) return [];
    const offset = ((testNum * 13) + 7) % n;
    const step = (n % 3 === 0) ? 4 : 3;
    const picks = [];
    const seen = {};
    let i = offset;
    let safety = n * 6;
    while (picks.length < 30 && safety-- > 0) {
      const id = ids[i % n];
      if (!seen[id]) { picks.push(id); seen[id] = true; }
      i += step;
    }
    // If bank smaller than 30, allow controlled reuse to fill to 30.
    let backfill = 0;
    while (picks.length < 30) { picks.push(ids[backfill++ % n]); }
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

  /* Tests 11 – 20 — coming soon */
  for (let i = 11; i <= 20; i++) {
    tests.push({
      id: "pb-mt-" + String(i).padStart(2, "0"),
      title: "Post Basic Model Test " + String(i).padStart(2, "0"),
      type: "model",
      duration: 30,
      intendedCount: 30,
      status: "coming-soon",
      questionIds: []
    });
  }

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
