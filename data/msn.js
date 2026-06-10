/* MSN Admission Preparation — topics, question bank, model tests.
   Source material: Pulse MSN Admission Guide (Vol I & II, 4th edition, 2025)
   plus public-domain nursing references (NIH, WHO, Alzheimer's Association).
   Last updated: 2026-05. */
(function () {
  if (!window.PulsePrograms) window.PulsePrograms = {};

  /* ============================================================
     TOPICS — concept-clarifying short reads with check-in MCQs.
     Each topic: 5–10 short MCQs to lock in the concept.
     ============================================================ */
  const topics = [
    {
      id: "msn-t-vital-signs",
      title: "Vital Signs & Baseline Assessment",
      subject: "fundamental-nursing",
      readMinutes: 11,
      summary: "Reference ranges, technique, red-flag thresholds, and how to escalate — for the four core vitals plus pain and SpO₂.",
      content: [
        { h: "Why Vital Signs Matter", p: "Vital signs are the earliest window into physiological change. Trends matter more than single readings. A patient whose heart rate has drifted from 78 to 102 over four hours is telling you something even if the absolute number still looks 'normal'. Baseline values on admission anchor every later comparison." },
        { h: "Body Temperature", p: "Normal adult oral temperature: 36.5–37.5 °C (97.7–99.5 °F). Rectal readings run ~0.5 °C higher than oral, axillary ~0.5 °C lower, and tympanic varies by technique. Hyperpyrexia (≥41 °C) is a medical emergency with risk of CNS injury. Hypothermia (<35 °C) commonly accompanies sepsis in the elderly, neonates, and patients on beta-blockers — fever may be absent even with serious infection." },
        { h: "Pulse", p: "Normal adult resting pulse: 60–100 bpm. Bradycardia <60 bpm (significant in symptomatic patients or on rate-limiting drugs), tachycardia >100 bpm. The radial artery at the wrist is the routine assessment site; carotid is preferred during cardiac arrest checks (max 10 seconds). Always assess rate, rhythm, and amplitude — a regularly irregular pulse may suggest premature beats, an irregularly irregular pulse raises suspicion of atrial fibrillation." },
        { h: "Respiration", p: "Normal adult rate: 12–20 breaths/min. Tachypnea >20, bradypnea <12. Always count respirations without telling the patient — voluntary control distorts the count. Observe depth, rhythm, effort, and use of accessory muscles. Kussmaul breathing (deep, rapid) suggests metabolic acidosis (e.g., DKA); Cheyne-Stokes (waxing-and-waning with apnea) is seen in advanced heart failure and end-of-life states." },
        { h: "Blood Pressure", p: "Per ACC/AHA 2017 guidelines: Normal <120/80 mmHg; Elevated 120–129/<80; Stage 1 HTN 130–139/80–89; Stage 2 HTN ≥140/≥90; Hypertensive crisis ≥180/≥120. Use a cuff that covers ~80% of arm circumference — an undersized cuff falsely elevates readings. Patient should be seated 5 minutes, feet flat, arm at heart level. Avoid taking BP on the side of mastectomy, AV fistula, or affected limb after stroke." },
        { h: "Pulse Oximetry (SpO₂)", p: "Often considered the 'sixth vital sign'. Normal adult: 95–100% on room air. SpO₂ 90–94% needs evaluation; <90% is hypoxemic and usually requires intervention. Accuracy degrades with poor perfusion, nail polish, carbon monoxide poisoning (falsely high), and dark skin pigmentation in some devices. Target SpO₂ for COPD with chronic CO₂ retention: 88–92% to avoid suppressing hypoxic drive." },
        { h: "Pain — The Fifth Vital Sign", p: "Self-report is the gold standard. Numeric Rating Scale (0–10) for alert adults; Wong-Baker FACES for children and patients with cognitive impairment; FLACC (Face, Legs, Activity, Cry, Consolability) for non-verbal patients. PQRST mnemonic for pain history: Provocation/Palliation, Quality, Region/Radiation, Severity, Timing. Pain should be reassessed after every intervention — typically within 30 minutes for IV analgesics, 60 minutes for oral." },
        { h: "Frequency & Documentation", p: "Stable ward patients: every 4–8 hours per local policy. Post-op: every 15 minutes × 4, then every 30 minutes × 4, then hourly × 4, then routinely. ICU: continuous + hourly charting. Document every reading with date, time, and your initials. Trends — not isolated numbers — drive clinical decisions, so chart contemporaneously, not at end-of-shift." },
        { h: "Early Warning & Escalation", p: "Many hospitals use a Modified Early Warning Score (MEWS) or NEWS (UK) where each vital is scored 0–3 based on deviation. Total score ≥5, or any single parameter scoring 3, triggers escalation — usually senior nurse review and consideration of medical team. Learn your unit's escalation pathway by name. Common red flags: SBP <90 or >180, HR <40 or >130, RR <8 or >25, SpO₂ <90% on room air, new altered consciousness." },
        { h: "Common Measurement Pitfalls", p: "Wrong cuff size remains the most common BP error — small cuff falsely raises, large cuff falsely lowers. White-coat hypertension affects ~20% of patients; consider home BP or ambulatory monitoring if readings are inconsistent. Counting respirations while still holding the radial pulse hides the act from the patient. Avoid taking tympanic temperature on the same side as a hearing aid or ear infection. Always recheck any abnormal value before acting." }
      ],
      checkIn: [
        { id: "msn-t-vs-q1", subject: "fundamental-nursing", stem: "Normal adult oral body temperature range is:", options: ["35.0–36.0 °C","36.5–37.5 °C","37.5–38.5 °C","38.0–39.0 °C"], answer: 1, explanation: "36.5–37.5 °C is the standard reference range for oral temperature." },
        { id: "msn-t-vs-q2", subject: "fundamental-nursing", stem: "Which artery is most commonly used for routine pulse assessment in adults?", options: ["Carotid","Radial","Brachial","Femoral"], answer: 1, explanation: "The radial pulse at the wrist is the routine assessment site." },
        { id: "msn-t-vs-q3", subject: "fundamental-nursing", stem: "A blood pressure of 144/96 mmHg in an adult is classified as:", options: ["Normal","Elevated","Stage 1 HTN","Stage 2 HTN"], answer: 3, explanation: "Per ACC/AHA 2017: ≥140/≥90 mmHg is Stage 2 hypertension." },
        { id: "msn-t-vs-q4", subject: "fundamental-nursing", stem: "Respirations should be counted:", options: ["While the patient watches and counts along","Without telling the patient","Only when the patient is asleep","For 15 seconds and multiplied by 4"], answer: 1, explanation: "Voluntary control distorts the rate, so the patient should be unaware. Count for a full minute when irregular." },
        { id: "msn-t-vs-q5", subject: "fundamental-nursing", stem: "The most reliable pain assessment tool for an alert adult is:", options: ["Vital sign changes","Facial grimacing","Numeric Rating Scale (0–10) self-report","Nurse's clinical judgment"], answer: 2, explanation: "Self-report on a 0–10 NRS is the gold standard. Pain is whatever the patient says it is." },
        { id: "msn-t-vs-q6", subject: "fundamental-nursing", stem: "An undersized BP cuff will most likely cause:", options: ["Falsely low reading","Falsely high reading","Accurate reading","No reading at all"], answer: 1, explanation: "An undersized cuff requires excessive pressure to occlude the artery, producing a falsely elevated reading." },
        { id: "msn-t-vs-q7", subject: "fundamental-nursing", stem: "Hyperpyrexia is defined as body temperature exceeding:", options: ["38 °C","39 °C","40 °C","41 °C"], answer: 3, explanation: "Hyperpyrexia (≥41 °C) is a medical emergency with risk of CNS injury." },
        { id: "msn-t-vs-q8", subject: "fundamental-nursing", stem: "The normal resting respiratory rate for an adult is:", options: ["8–10 breaths/min","12–20 breaths/min","22–28 breaths/min","30–40 breaths/min"], answer: 1, explanation: "The normal adult respiratory rate is 12–20 breaths per minute." },
        { id: "msn-t-vs-q9", subject: "fundamental-nursing", stem: "Normal oxygen saturation (SpO₂) on room air for a healthy adult is:", options: ["80–84%","85–89%","90–94%","95–100%"], answer: 3, explanation: "A normal SpO₂ on room air is 95–100%; below 90% indicates hypoxaemia needing intervention." },
        { id: "msn-t-vs-q10", subject: "fundamental-nursing", stem: "To obtain an accurate blood pressure, the cuff bladder should cover about:", options: ["20% of arm circumference","40% of arm circumference","80% of arm circumference","100% of arm circumference"], answer: 2, explanation: "A cuff bladder covering ~80% of arm circumference gives accurate readings; too small a cuff falsely elevates the result." }
      ]
    },

    {
      id: "msn-t-infection-control",
      title: "Infection Control & Asepsis",
      subject: "fundamental-nursing",
      readMinutes: 12,
      summary: "Chain of infection, standard and transmission-based precautions, PPE technique, surgical asepsis, and post-exposure protocol.",
      content: [
        { h: "Chain of Infection", p: "Six interlinked stages: (1) infectious agent → (2) reservoir → (3) portal of exit → (4) mode of transmission → (5) portal of entry → (6) susceptible host. Breaking any single link prevents infection. As a nurse you most often break links 3-4 (hand hygiene, PPE) and 6 (immunization, nutrition, glycemic control)." },
        { h: "Standard Precautions", p: "Applied to ALL patients regardless of suspected or confirmed diagnosis. Five core components: (1) hand hygiene; (2) PPE based on anticipated exposure to blood, body fluid, or non-intact skin; (3) safe injection and sharps practices; (4) respiratory hygiene/cough etiquette; (5) safe handling of contaminated equipment and surfaces. CDC has reinforced these as the foundation of all healthcare infection prevention." },
        { h: "Hand Hygiene — WHO's 5 Moments", p: "The single most effective intervention against healthcare-associated infections. WHO's 5 Moments: (1) before patient contact; (2) before aseptic task; (3) after body-fluid exposure risk; (4) after patient contact; (5) after contact with patient surroundings. Use alcohol-based hand rub (20–30 seconds) for routinely soiled hands; soap and water (40–60 seconds) when visibly soiled, after restroom use, before eating, and after C. difficile or norovirus exposure (alcohol does not kill spores)." },
        { h: "Transmission-Based Precautions", p: "Added on top of standard precautions when a specific transmission route is suspected. (a) Contact — gloves + gown for all entry; MRSA, VRE, C. difficile, scabies, RSV. (b) Droplet — surgical mask within 1–2 m; influenza, pertussis, meningococcal disease, mumps. (c) Airborne — fit-tested N95 respirator + negative-pressure single room; tuberculosis, measles, varicella, COVID-19 aerosol-generating procedures. Some pathogens (e.g., disseminated zoster) need contact + airborne combined." },
        { h: "PPE — Donning Sequence", p: "Don in this order: hand hygiene → gown → mask/respirator → eye protection (goggles/face shield) → gloves (over gown cuff). Gown ties at the back, mask covers nose-to-chin, respirator must be fit-tested annually." },
        { h: "PPE — Doffing Sequence (most errors happen here)", p: "Doff in reverse, treating outer surfaces as contaminated: gloves first (pinch-and-peel inside-out) → hand hygiene → gown (untie, peel away rolling inside-out) → hand hygiene → eye protection (from the strap, not the front) → mask/respirator (from straps, not the front) → final hand hygiene. Step out of the room between mask and final hand hygiene if PPE is heavily contaminated." },
        { h: "Surgical Asepsis", p: "Required for procedures that breach skin or sterile body cavities: urinary catheterization, central/peripheral IV insertion, surgical wound dressing, lumbar puncture, paracentesis. Principles: sterile-to-sterile only, 1-inch border at edges of sterile field is considered non-sterile, anything below waist or out of sight is considered contaminated, never reach across a sterile field, moisture wicks contamination. If in doubt, it's contaminated — start over." },
        { h: "Needle-Stick & Sharps Injury Protocol", p: "Immediate action: (1) encourage bleeding by gentle pressure under running water, do NOT squeeze the wound aggressively; (2) wash with soap and water (mucous membranes: irrigate with saline); (3) report to occupational health within the hour. Baseline serology for HBV, HCV, HIV from both source patient (with consent) and exposed worker. HIV PEP if indicated should start within 2 hours, ideally within 72 hours. HBV: hepatitis B immune globulin + vaccination if not immune." },
        { h: "Outbreak Recognition & Reporting", p: "Two or more linked cases of an unusual infection, or any case of a notifiable disease, triggers outbreak protocol. Cluster recognition is often nurse-initiated. Document and report through the line manager and Infection Prevention & Control team. Notifiable diseases in Bangladesh include cholera, plague, yellow fever, polio, viral haemorrhagic fevers — list varies by jurisdiction; know yours." },
        { h: "Antimicrobial Stewardship", p: "Inappropriate antibiotic use drives resistance. Nurse contributions: ensure cultures are drawn before first dose, give scheduled doses on time (delays reduce efficacy and promote resistance), monitor for adverse effects, advocate for IV-to-oral switch when criteria met, and challenge unclear or prolonged prescriptions. Hand hygiene remains the cheapest, most effective stewardship intervention." }
      ],
      checkIn: [
        { id: "msn-t-ic-q1", subject: "fundamental-nursing", stem: "The single most effective measure to prevent healthcare-associated infections is:", options: ["Wearing gloves continuously","Hand hygiene","Disinfecting all surfaces","Isolating every patient"], answer: 1, explanation: "Hand hygiene remains universally the most important single intervention." },
        { id: "msn-t-ic-q2", subject: "fundamental-nursing", stem: "A patient with active pulmonary tuberculosis requires:", options: ["Contact precautions","Droplet precautions","Airborne precautions with N95 and negative-pressure room","Standard precautions only"], answer: 2, explanation: "TB transmits via droplet nuclei <5 µm that remain suspended; airborne precautions with N95 and negative-pressure isolation are required." },
        { id: "msn-t-ic-q3", subject: "fundamental-nursing", stem: "Standard precautions should be used:", options: ["Only with known infectious patients","Only for bloodborne disease","With every patient, every encounter","Only in isolation rooms"], answer: 2, explanation: "Standard precautions apply universally regardless of suspected or confirmed diagnosis." },
        { id: "msn-t-ic-q4", subject: "fundamental-nursing", stem: "Alcohol-based hand rub is NOT appropriate when hands are:", options: ["Routinely dirty between patients","Visibly soiled or contaminated with C. difficile","After removing gloves","Before patient contact"], answer: 1, explanation: "Soap and water are required when hands are visibly soiled and after exposure to C. difficile (alcohol does not kill spores) or norovirus." },
        { id: "msn-t-ic-q5", subject: "fundamental-nursing", stem: "The FIRST link in the chain of infection is:", options: ["Reservoir","Infectious agent","Portal of exit","Susceptible host"], answer: 1, explanation: "The infectious agent (microorganism) initiates the chain." },
        { id: "msn-t-ic-q6", subject: "fundamental-nursing", stem: "Sterile technique is required for:", options: ["Oral medication administration","Routine bed bath","Urinary catheterization","Taking blood pressure"], answer: 2, explanation: "Catheterization breaches the urinary tract sterile field and requires aseptic technique." },
        { id: "msn-t-ic-q7", subject: "fundamental-nursing", stem: "Standard precautions should be applied to:", options: ["Only patients with a known infection","All patients regardless of diagnosis","Only patients in isolation rooms","Only during surgical procedures"], answer: 1, explanation: "Standard precautions are used for every patient at all times, because infection status is often unknown." },
        { id: "msn-t-ic-q8", subject: "fundamental-nursing", stem: "Tuberculosis requires which type of transmission-based precaution?", options: ["Contact","Droplet","Airborne","Standard only"], answer: 2, explanation: "TB spreads via airborne droplet nuclei, requiring airborne precautions and an N95 respirator." },
        { id: "msn-t-ic-q9", subject: "fundamental-nursing", stem: "After removing personal protective equipment, which item is generally removed last?", options: ["Gloves","Gown","Mask/respirator","Apron"], answer: 2, explanation: "The mask or respirator is removed last (outside the room), as the face remains protected until other items are off." },
        { id: "msn-t-ic-q10", subject: "fundamental-nursing", stem: "Sharps such as used needles should be disposed of by:", options: ["Recapping then binning","Placing in a puncture-proof sharps container","Throwing in general waste","Bending before disposal"], answer: 1, explanation: "Used sharps go straight into a puncture-proof container without recapping, to prevent needlestick injury." }
      ]
    },

    {
      id: "msn-t-cardiac",
      title: "Cardiovascular Assessment & Cardiac Emergencies",
      subject: "adult-health",
      readMinutes: 14,
      summary: "Heart anatomy refresher, key ECG patterns, ACS recognition and management, heart failure classification, and BLS algorithm.",
      content: [
        { h: "Cardiac Cycle Essentials", p: "Right atrium → tricuspid valve → right ventricle → pulmonary valve → pulmonary artery → lungs (gas exchange) → pulmonary veins → left atrium → mitral valve → left ventricle → aortic valve → aorta → systemic circulation. Systole: ventricles contract and eject (S1 marks start). Diastole: ventricles relax and fill (S2 marks start). At resting heart rate, diastole occupies ~2/3 of the cycle — this is when coronary perfusion happens, so tachycardia compromises myocardial blood supply." },
        { h: "Heart Sounds", p: "S1 ('lub') = closure of AV valves (mitral + tricuspid), heard loudest at apex, marks start of systole. S2 ('dub') = closure of semilunar valves (aortic + pulmonary), heard loudest at base, marks start of diastole. S3 (early diastole, 'Kentucky') is normal in children/young athletes but suggests volume overload or heart failure in adults. S4 (late diastole, 'Tennessee') reflects stiff non-compliant ventricle — hypertension, aortic stenosis, recent MI. Murmurs are graded 1–6 by intensity." },
        { h: "ECG Lead Placement & Basics", p: "12-lead ECG has 10 electrodes: 4 limb (RA, LA, RL, LL) and 6 precordial (V1–V6). V1: 4th intercostal space right of sternum. V2: 4th ICS left. V4: 5th ICS midclavicular. V3 midway between V2 and V4. V5 horizontal to V4 at anterior axillary line. V6 mid-axillary line. Inferior leads (II, III, aVF) → right coronary territory. Anterior (V1–V4) → LAD. Lateral (I, aVL, V5–V6) → circumflex. Posterior (V7–V9, mirror in V1–V3) → posterior descending." },
        { h: "Recognising Acute Coronary Syndrome", p: "Classic chest pain: substernal, crushing or 'heavy', may radiate to left arm, jaw, back, epigastrium. Associated: diaphoresis, nausea, dyspnea, impending doom. Atypical presentations are common in women, elderly, and patients with diabetes — they may report only fatigue, epigastric burning, or shortness of breath. ECG: ST elevation ≥1 mm in two contiguous leads = STEMI; ST depression or T-wave inversion = NSTEMI/unstable angina until troponin clarifies. Serial troponin (0, 1, 3 h depending on assay) is required to confirm." },
        { h: "MONA-B + Time-Critical Management", p: "Initial bundle (in indicated order): chewable Aspirin 162–325 mg, Nitroglycerin sublingual unless SBP <90 mmHg or right ventricular infarct suspected, Oxygen only if SpO₂ <90% (routine O₂ is no longer recommended), Morphine for pain not relieved by nitrates (use cautiously — recent evidence suggests possible adverse outcomes in NSTEMI), Beta-blocker once hemodynamically stable. Door-to-ECG within 10 minutes. Door-to-balloon (PCI) ≤90 minutes for STEMI; door-to-needle (thrombolytic) ≤30 minutes if PCI unavailable." },
        { h: "Heart Failure — Left vs Right", p: "Left HF: pulmonary congestion — exertional dyspnea, orthopnea, paroxysmal nocturnal dyspnea, bibasal crackles, pink frothy sputum (pulmonary edema). Right HF: systemic congestion — peripheral pitting edema, jugular venous distension, hepatomegaly, ascites, weight gain. Most chronic HF is biventricular. Acute decompensation often presents with rapid weight gain (>2 kg in 3 days) — train patients to weigh daily." },
        { h: "NYHA Functional Classification", p: "Class I: no symptoms with ordinary activity. Class II: slight limitation; symptoms with ordinary activity (climbing two flights). Class III: marked limitation; symptoms with less-than-ordinary activity (one flight, dressing). Class IV: symptoms at rest or with any activity. Used to guide therapy intensity and prognosis. Patients can transition between classes as treatment is optimized or disease progresses." },
        { h: "Common Cardiac Medications — Nursing Implications", p: "ACE inhibitors / ARBs: monitor potassium and renal function, watch for dry cough (ACEi). Beta-blockers: hold for HR <50 or SBP <90; never abruptly discontinue. Loop diuretics: monitor K+, watch for ototoxicity at high IV doses. Digoxin: hold if apical pulse <60; therapeutic 0.5–2.0 ng/mL; toxicity worsened by hypokalemia. Anticoagulants: monitor INR (warfarin) or aPTT (heparin); educate on bleeding signs." },
        { h: "Adult BLS — Simplified Algorithm", p: "Check responsiveness and breathing simultaneously (≤10 s). If unresponsive and not breathing normally: shout for help and activate emergency response (call cardiac arrest team, fetch defibrillator/AED). Start CPR — chest compressions first (C-A-B). Compression rate 100–120/min, depth 5–6 cm, allow full recoil, minimize interruptions. 30 compressions : 2 breaths if single rescuer with airway adjunct; continuous compressions with asynchronous ventilation once advanced airway placed. Attach AED/defibrillator as soon as available — shock for VF/pulseless VT, continue CPR otherwise." },
        { h: "Cardiogenic Shock — Red Flags", p: "SBP <90 mmHg sustained, cool peripheries, altered mental status, urine output <0.5 mL/kg/h, lactate rising. Most common cause: extensive anterior MI. Management is time-critical — vasopressors, inotropes, often mechanical circulatory support (IABP, LVAD). Nursing priorities: continuous BP and rhythm monitoring, strict I/O, prepare for invasive lines and possible catheterization lab transfer." }
      ],
      checkIn: [
        { id: "msn-t-ca-q1", subject: "adult-health", stem: "S1 heart sound corresponds to closure of the:", options: ["Aortic and pulmonary valves","Mitral and tricuspid valves","Mitral valve only","Tricuspid valve only"], answer: 1, explanation: "S1 ('lub') = closure of AV valves (mitral + tricuspid) at the start of systole." },
        { id: "msn-t-ca-q2", subject: "adult-health", stem: "Classic anginal pain typically radiates to the:", options: ["Right shoulder","Left arm, jaw, or back","Lumbar spine","Right flank"], answer: 1, explanation: "Cardiac pain commonly radiates to the left arm, jaw, neck, or back due to shared dermatomal innervation." },
        { id: "msn-t-ca-q3", subject: "adult-health", stem: "First nursing action for a patient reporting crushing chest pain:", options: ["Call family","Administer aspirin and obtain 12-lead ECG immediately","Reassure and observe","Encourage ambulation"], answer: 1, explanation: "Time-critical: ECG within 10 minutes + aspirin (chewed) if no contraindication. Door-to-balloon ≤90 min for STEMI." },
        { id: "msn-t-ca-q4", subject: "adult-health", stem: "Pink frothy sputum is most characteristic of:", options: ["Acute left ventricular failure / pulmonary edema","Tuberculosis","Pneumonia","Pulmonary embolism"], answer: 0, explanation: "Pink frothy sputum is the hallmark of acute pulmonary edema due to left HF — alveolar fluid mixed with blood." },
        { id: "msn-t-ca-q5", subject: "adult-health", stem: "Nitroglycerin is contraindicated when systolic BP is below:", options: ["140 mmHg","120 mmHg","100 mmHg","90 mmHg"], answer: 3, explanation: "SBP <90 mmHg is the threshold — nitrates can cause profound hypotension. Also avoid with recent PDE-5 inhibitor use." },
        { id: "msn-t-ca-q6", subject: "adult-health", stem: "Jugular venous distention with peripheral edema and hepatomegaly suggests:", options: ["Left heart failure","Right heart failure","Mitral stenosis","Pericarditis"], answer: 1, explanation: "Right HF causes systemic venous congestion: JVD, peripheral edema, ascites, hepatomegaly." },
        { id: "msn-t-ca-q7", subject: "adult-health", stem: "Door-to-balloon time target for STEMI is:", options: ["≤30 minutes","≤60 minutes","≤90 minutes","≤180 minutes"], answer: 2, explanation: "The AHA guideline is door-to-balloon ≤90 minutes from first medical contact." },
        { id: "msn-t-ca-q8", subject: "adult-health", stem: "The most specific blood marker for diagnosing a myocardial infarction is:", options: ["White cell count","Cardiac troponin","Blood glucose","Serum sodium"], answer: 1, explanation: "Cardiac troponin (T or I) is the most sensitive and specific biomarker for myocardial injury; it rises within a few hours of an MI." },
        { id: "msn-t-ca-q9", subject: "adult-health", stem: "During adult CPR, the recommended chest compression rate is:", options: ["60–80 per minute","100–120 per minute","140–160 per minute","As fast as possible"], answer: 1, explanation: "High-quality CPR uses a compression rate of 100–120 per minute at a depth of 5–6 cm." },
        { id: "msn-t-ca-q10", subject: "adult-health", stem: "A patient on furosemide for heart failure should be monitored for:", options: ["Hyperkalaemia","Hypokalaemia","Hypercalcaemia","Hypernatraemia"], answer: 1, explanation: "Loop diuretics such as furosemide cause potassium loss, risking hypokalaemia and arrhythmias." }
      ]
    },

    {
      id: "msn-t-pharmacology",
      title: "High-Yield Pharmacology",
      subject: "pharmacology",
      readMinutes: 13,
      summary: "The rights of administration, critical antidotes, anticoagulant and insulin profiles, special populations, and therapeutic drug monitoring.",
      content: [
        { h: "The Ten Rights of Medication Administration", p: "Original five: right patient (use 2 identifiers — name + DOB or hospital ID), right drug, right dose, right route, right time. Modern additions: right documentation, right reason (indication), right response (re-assess effect), right to refuse, right education. Before each administration: read the label three times — when retrieving, when preparing, before administering. High-alert medications (insulin, heparin, opioids, KCl, chemo) require independent double-check." },
        { h: "Routes of Administration & Onset", p: "IV: immediate onset, 100% bioavailability. IM (deltoid/ventrogluteal): 10–20 min onset, 90% bioavailable. Subcutaneous: 15–30 min onset. Oral: 30–60 min, variable bioavailability due to first-pass metabolism. Sublingual / buccal: 1–5 min (bypasses first-pass — used for nitroglycerin). Rectal: 30–60 min (used when NPO or vomiting). Inhaled: seconds–minutes. Topical / transdermal: hours, continuous release." },
        { h: "Critical Antidotes — Memorize", p: "Heparin → Protamine sulfate. Warfarin → Vitamin K (oral or IV depending on urgency); for life-threatening bleed, prothrombin complex concentrate. Opioids → Naloxone (Narcan) — 0.04–0.4 mg IV titrated; short half-life so may need repeat dosing. Benzodiazepines → Flumazenil (caution: can precipitate seizures in chronic users). Acetaminophen / paracetamol → N-acetylcysteine — most effective within 8 h of ingestion. Iron → Deferoxamine. Digoxin → Digoxin-specific immune Fab fragments (Digibind). Methotrexate → Leucovorin (folinic acid rescue). Beta-blockers → Glucagon. Calcium channel blockers → IV calcium + glucagon ± high-dose insulin. Organophosphates → Atropine + pralidoxime." },
        { h: "Digoxin — Therapeutic Window", p: "Therapeutic level 0.5–2.0 ng/mL — narrow window. Hold dose if apical pulse <60 bpm in adults, <70 in children, <90–110 in infants. Toxicity signs: anorexia, nausea, vomiting, blurred vision with yellow-green halos (chromatopsia), bradyarrhythmias including any new heart block. Hypokalemia, hypomagnesemia, and hypercalcemia all potentiate toxicity. Loop diuretics + digoxin is a classic risk pair — monitor K+ closely." },
        { h: "Anticoagulant Monitoring", p: "Unfractionated heparin → aPTT (activated partial thromboplastin time), target 1.5–2.5× control. Reversal: protamine sulfate (1 mg neutralizes ~100 units heparin). Low molecular weight heparin (enoxaparin) → no routine monitoring, anti-Xa in renal impairment, pregnancy, or extremes of weight. Warfarin → INR; target 2.0–3.0 for AF and DVT/PE, 2.5–3.5 for mechanical mitral valve. DOACs (apixaban, rivaroxaban, dabigatran) → no routine INR/aPTT monitoring; specific reversal: idarucizumab for dabigatran, andexanet alfa for factor Xa inhibitors." },
        { h: "Insulin Action Profiles", p: "Rapid-acting (lispro, aspart, glulisine): onset 10–20 min, peak 30 min–3 h, duration 3–5 h — give within 15 minutes of eating. Short-acting (regular): onset 30 min, peak 2–4 h, duration 5–8 h. Intermediate (NPH): onset 1–2 h, peak 4–12 h, duration 12–18 h — cloudy, must roll to mix. Long-acting (glargine, detemir, degludec): onset 1–2 h, no significant peak, duration 20–24+ h — clear, never mix with other insulins. When mixing in one syringe: clear (rapid/short) before cloudy (NPH)." },
        { h: "Special Populations", p: "Elderly: reduced renal and hepatic clearance, polypharmacy risk, lower doses often appropriate ('start low, go slow'). Pregnancy: avoid ACE inhibitors/ARBs (renal teratogenicity), warfarin (fetal warfarin syndrome — heparin preferred), most antiepileptics (folate supplementation), tetracyclines, fluoroquinolones. Lactation: most drugs cross into milk in small amounts — check Hale's lactation categories. Pediatrics: weight-based dosing in mg/kg, narrower margin for error. Renal impairment: many drugs need dose reduction (e.g., metformin contraindicated when eGFR <30)." },
        { h: "Therapeutic Drug Monitoring", p: "Some drugs need serum-level monitoring because of narrow therapeutic indices. Digoxin: 0.5–2.0 ng/mL (trough). Lithium: 0.6–1.2 mEq/L (trough, 12 h post-dose). Phenytoin: 10–20 mcg/mL total (correct for albumin). Vancomycin: trough 15–20 mcg/mL for serious infections. Gentamicin (once-daily dosing): trough <1 mcg/mL. Theophylline: 10–20 mcg/mL. Timing matters — peaks are taken 30 min after IV infusion, troughs immediately before next dose." },
        { h: "High-Alert Medications", p: "ISMP-identified high-alert drugs cause disproportionate patient harm when error occurs: insulin (units, not 'U'), heparin and other anticoagulants, opioids, neuromuscular blockers, concentrated electrolytes (especially KCl — never IV push), chemotherapy. Required safeguards: independent double-check, smart-pump library, standardized concentrations, separated storage. Never store KCl on general wards in concentrated form." },
        { h: "Common Adverse Drug Reactions to Recognize", p: "Anaphylaxis: minutes after exposure — rash, swelling, wheeze, hypotension. Treatment: IM adrenaline 0.5 mg (1:1000) into anterolateral thigh, repeat every 5 min. Stevens-Johnson syndrome: target lesions, mucosal involvement, often with sulfa drugs, allopurinol, lamotrigine. Serotonin syndrome (SSRIs + tramadol/MAOIs): tremor, hyperreflexia, hyperthermia. Neuroleptic malignant syndrome (antipsychotics): rigidity, hyperthermia, autonomic instability. Red-man syndrome: rapid vancomycin infusion → histamine release, slow the rate." }
      ],
      checkIn: [
        { id: "msn-t-ph-q1", subject: "pharmacology", stem: "The antidote for warfarin overdose is:", options: ["Protamine sulfate","Vitamin K","Naloxone","Flumazenil"], answer: 1, explanation: "Vitamin K reverses warfarin (oral vitamin-K antagonist). Protamine sulfate reverses heparin." },
        { id: "msn-t-ph-q2", subject: "pharmacology", stem: "Therapeutic INR range for most warfarin patients is:", options: ["1.0–1.5","2.0–3.0","3.0–4.5","4.5–6.0"], answer: 1, explanation: "INR 2.0–3.0 is the target for atrial fibrillation, DVT/PE, and most other indications." },
        { id: "msn-t-ph-q3", subject: "pharmacology", stem: "Before giving digoxin, the nurse must:", options: ["Check the apical pulse for one full minute","Check the BP","Auscultate the lungs","Check the temperature"], answer: 0, explanation: "Hold if apical pulse <60 bpm (adults). Apical, full minute, before each dose." },
        { id: "msn-t-ph-q4", subject: "pharmacology", stem: "Opioid overdose is reversed with:", options: ["Flumazenil","Naloxone","Acetylcysteine","Atropine"], answer: 1, explanation: "Naloxone (Narcan) is a competitive opioid receptor antagonist. Flumazenil reverses benzodiazepines." },
        { id: "msn-t-ph-q5", subject: "pharmacology", stem: "Which insulin has NO peak action and lasts about 24 hours?", options: ["Regular","NPH","Lispro","Glargine"], answer: 3, explanation: "Glargine (Lantus) is a long-acting basal insulin with relatively flat absorption and ~24-h duration." },
        { id: "msn-t-ph-q6", subject: "pharmacology", stem: "A patient on furosemide is most at risk for:", options: ["Hyperkalemia","Hypokalemia","Hypernatremia","Hyperglycemia"], answer: 1, explanation: "Loop diuretics cause potassium wasting → hypokalemia. Monitor K+ and supplement as needed." },
        { id: "msn-t-ph-q7", subject: "pharmacology", stem: "The therapeutic serum digoxin level is:", options: ["0.1–0.5 ng/mL","0.5–2.0 ng/mL","2.5–4.0 ng/mL","5.0–7.0 ng/mL"], answer: 1, explanation: "0.5–2.0 ng/mL is therapeutic; >2.0 ng/mL is toxic." },
        { id: "msn-t-ph-q8", subject: "pharmacology", stem: "The 'rights' of medication administration include all EXCEPT:", options: ["Right patient","Right dose","Right brand name preference","Right route"], answer: 2, explanation: "The rights include patient, drug, dose, route, time, and documentation — not brand preference." },
        { id: "msn-t-ph-q9", subject: "pharmacology", stem: "The antidote for paracetamol (acetaminophen) overdose is:", options: ["N-acetylcysteine","Naloxone","Flumazenil","Protamine"], answer: 0, explanation: "N-acetylcysteine is the antidote for paracetamol poisoning; it replenishes glutathione and prevents liver damage." },
        { id: "msn-t-ph-q10", subject: "pharmacology", stem: "A patient on warfarin has anticoagulation monitored using the:", options: ["aPTT","INR","Blood glucose","Serum sodium"], answer: 1, explanation: "Warfarin therapy is monitored with the INR; vitamin K is its reversal agent." }
      ]
    },

    {
      id: "msn-t-maternal",
      title: "Maternal & Newborn Care",
      subject: "midwifery",
      readMinutes: 14,
      summary: "Antenatal milestones, labour stages, intrapartum monitoring, APGAR, common complications, postpartum care, and newborn resuscitation basics.",
      content: [
        { h: "WHO 2016 Antenatal Care Model", p: "Minimum 8 contacts (replacing the older 4-visit focused ANC model): booking visit before 12 weeks, then 20, 26, 30, 34, 36, 38, and 40 weeks. Every visit: BP, weight, fundal height (after 20 weeks should roughly match gestational age in cm), fetal heart sounds (audible by Doppler ~10–12 wk, Pinard ~20 wk), urine for protein and sugar. Booking labs: blood group + Rh, Hb, HIV/HBV/syphilis, urinalysis, blood sugar, ultrasound for dating." },
        { h: "Pregnancy Physiological Changes", p: "Blood volume rises ~40–50% by third trimester — Hb falls modestly (physiological haemodilution; <11 g/dL is true anemia). Cardiac output rises ~30–50%. Tidal volume increases (mild respiratory alkalosis is normal). GFR rises ~50%. Bladder compression increases urinary frequency. Insulin resistance peaks in third trimester (basis of gestational diabetes screening at 24–28 wk). Hypercoagulable state — VTE risk persists 6 weeks postpartum." },
        { h: "Stages of Labour", p: "Stage 1 (onset of regular contractions to full dilation): latent phase 0–6 cm, active phase 6–10 cm. Average duration: 8–12 h nullipara, 6–8 h multipara. Stage 2 (full dilation to delivery of baby): up to 3 h nullipara with epidural, 2 h multipara. Stage 3 (delivery of placenta): active management with oxytocin, controlled cord traction, fundal massage — completes within 30 minutes. Stage 4 (first 1–2 h postpartum): highest haemorrhage risk — vigilant fundus, lochia, vitals monitoring every 15 minutes." },
        { h: "Intrapartum Fetal Monitoring", p: "Normal fetal heart rate: 110–160 bpm. Categories of CTG (NICE): Reassuring (all parameters normal), Non-reassuring (one parameter abnormal — observe and address reversible causes), Abnormal (≥2 non-reassuring features or any single abnormal — urgent obstetric review). Accelerations: reassuring sign of fetal wellbeing. Decelerations: early (head compression — usually benign), variable (cord compression — needs assessment), late (uteroplacental insufficiency — concerning, often requires intervention)." },
        { h: "APGAR Score", p: "Assess at 1 and 5 minutes; repeat at 10 minutes if 5-minute score <7. Five parameters (each 0–2): Appearance (color), Pulse (heart rate), Grimace (reflex response), Activity (tone), Respiration. Total 7–10 = reassuring; 4–6 = moderate distress, may need stimulation/oxygen; 0–3 = severe distress, immediate full resuscitation. APGAR is a clinical descriptor, not a basis for resuscitation decisions — start resuscitation based on breathing, heart rate, and tone immediately at birth." },
        { h: "Newborn Resuscitation — Helping Babies Breathe", p: "Within 30 seconds of birth: dry, stimulate, keep warm, position airway. If not breathing or gasping: positive pressure ventilation with bag-mask at 40–60 breaths/min, room air for term, blended O₂ for preterm. Reassess heart rate every 30 s. If HR <60 despite effective PPV for 30 s: add chest compressions at 3:1 ratio with ventilation, switch to 100% O₂. If HR remains <60: IV adrenaline 0.01–0.03 mg/kg via umbilical vein. Delayed cord clamping (≥1 minute) improves iron stores in vigorous newborns." },
        { h: "Common Antenatal Complications", p: "Hyperemesis gravidarum: severe vomiting + weight loss + ketonuria — hospitalize, IV fluids, antiemetics. Gestational diabetes: screened 24–28 wk by OGTT; diet first, insulin if glycaemic targets not met. Anaemia (<11 g/dL): iron + folic acid; severe (<7 g/dL) may require transfusion. Placenta praevia: painless bleeding, low-lying placenta on ultrasound — avoid vaginal exam, plan caesarean. Placental abruption: painful bleeding, tender rigid uterus — obstetric emergency." },
        { h: "Pre-eclampsia & Eclampsia", p: "Pre-eclampsia: new-onset BP ≥140/90 after 20 weeks + proteinuria (≥300 mg/24 h or 1+ on dipstick) or end-organ dysfunction. Severe features: BP ≥160/110, persistent headache, visual changes, epigastric pain (HELLP), thrombocytopenia, elevated creatinine, pulmonary edema. Eclampsia: pre-eclampsia + seizures. First-line anticonvulsant and seizure prevention: magnesium sulfate 4 g IV loading, 1 g/hour infusion. Monitor: respiratory rate ≥12, urine output ≥30 mL/h, patellar reflex present, serum Mg 4–7 mEq/L. Antidote: 10 mL of 10% calcium gluconate IV." },
        { h: "Postpartum Haemorrhage", p: "Blood loss >500 mL vaginal or >1000 mL caesarean. The 4 T's of cause: Tone (atony — ~70%, the commonest), Trauma (lacerations, episiotomy, uterine rupture), Tissue (retained placenta/clots), Thrombin (coagulopathy — DIC, HELLP, anticoagulants). Initial response: call for help, massage fundus, ensure bladder is empty, ensure two large-bore IV cannulas, send group-and-crossmatch + coagulation, start oxytocin (10 IU IM or 20–40 IU/L IV infusion). Second line: ergometrine, misoprostol, carboprost. Surgical: bimanual compression, balloon tamponade, brace sutures, hysterectomy if life-threatening." },
        { h: "Postpartum Mood Disorders", p: "Baby blues: mild transient sadness in first 2 weeks, affects up to 80%, self-limited, supportive care only. Postpartum depression: persistent depressed mood beyond 2 weeks, affects 10–15%, screen with Edinburgh Postnatal Depression Scale (EPDS) at 6-week postnatal visit and 6-month wellbaby visit — score ≥10 prompts further evaluation. Postpartum psychosis: hallucinations, delusions, suicide/infanticide risk — psychiatric emergency, hospitalize. SSRIs generally compatible with breastfeeding (sertraline preferred)." },
        { h: "Postpartum Family Planning", p: "Counselling should begin antenatally. Lactational Amenorrhea Method (LAM): >98% effective only if all three: exclusively breastfeeding, amenorrheic, <6 months postpartum. Progestin-only methods (POP, implant, DMPA) safe during breastfeeding from 6 weeks. Combined hormonal methods generally avoided in first 6 weeks (VTE risk) and during exclusive breastfeeding (milk supply). IUD can be inserted immediately postpartum or after 4–6 weeks. Sterilization (BTL, vasectomy) is a permanent option — emphasize informed, non-coerced consent." }
      ],
      checkIn: [
        { id: "msn-t-mn-q1", subject: "midwifery", stem: "WHO recommends a minimum number of antenatal contacts of:", options: ["4","6","8","10"], answer: 2, explanation: "WHO 2016 ANC model: 8 contacts to reduce perinatal mortality and improve experience of care." },
        { id: "msn-t-mn-q2", subject: "midwifery", stem: "The first stage of labour ends when:", options: ["Membranes rupture","Cervix dilates to 10 cm","Baby is delivered","Placenta is delivered"], answer: 1, explanation: "Stage 1 ends at full cervical dilation (10 cm). Stage 2 is delivery of baby; Stage 3 is delivery of placenta." },
        { id: "msn-t-mn-q3", subject: "midwifery", stem: "APGAR is assessed at:", options: ["Immediately at birth and at 10 minutes","1 minute and 5 minutes","Only at 5 minutes","Every 15 minutes for the first hour"], answer: 1, explanation: "APGAR is scored at 1 and 5 minutes post-birth; repeat at 10 min if 5-min score is <7." },
        { id: "msn-t-mn-q4", subject: "midwifery", stem: "The most common cause of postpartum haemorrhage is:", options: ["Uterine atony","Retained placenta","Birth trauma","Coagulopathy"], answer: 0, explanation: "Tone (atony) accounts for ~70% of PPH. First action: fundal massage. First-line drug: oxytocin." },
        { id: "msn-t-mn-q5", subject: "midwifery", stem: "First-line drug to prevent seizures in severe pre-eclampsia is:", options: ["Diazepam","Phenytoin","Magnesium sulfate","Phenobarbital"], answer: 2, explanation: "Magnesium sulfate is the gold standard. Monitor: respiratory rate ≥12, urine output ≥30 mL/h, patellar reflex present." },
        { id: "msn-t-mn-q6", subject: "midwifery", stem: "Pre-eclampsia is diagnosed after 20 weeks with:", options: ["BP ≥120/80","BP ≥140/90 + proteinuria","Proteinuria alone","Edema alone"], answer: 1, explanation: "Pre-eclampsia: new-onset hypertension ≥140/90 plus proteinuria (or end-organ dysfunction) after 20 weeks gestation." },
        { id: "msn-t-mn-q7", subject: "midwifery", stem: "The recommended time to initiate breastfeeding after a normal birth is:", options: ["Within the first hour","After 6 hours","After 24 hours","After the first bath"], answer: 0, explanation: "Early initiation within the first hour ('the golden hour') gives the baby colostrum and promotes bonding and uterine contraction." },
        { id: "msn-t-mn-q8", subject: "midwifery", stem: "The antidote for magnesium sulfate toxicity is:", options: ["Naloxone","Calcium gluconate","Vitamin K","Atropine"], answer: 1, explanation: "Calcium gluconate reverses magnesium sulfate toxicity; monitor reflexes, respiratory rate, and urine output during MgSO4 therapy." },
        { id: "msn-t-mn-q9", subject: "midwifery", stem: "The normal duration of a full-term pregnancy is approximately:", options: ["34 weeks","37 weeks","40 weeks","44 weeks"], answer: 2, explanation: "A full-term pregnancy lasts about 40 weeks (term is 37–42 weeks) from the last menstrual period." },
        { id: "msn-t-mn-q10", subject: "midwifery", stem: "Immediate care of the newborn at birth includes:", options: ["Delayed drying and cooling","Drying, warmth, and assessing breathing","Routine suctioning of all babies","Immediate bathing"], answer: 1, explanation: "Immediate newborn care is to dry, keep warm, and ensure the baby is breathing — the first steps of essential newborn care." }
      ]
    },

    {
      id: "msn-t-mental-health",
      title: "Mental Health Essentials",
      subject: "psychiatric",
      readMinutes: 13,
      summary: "Psychiatric disorders, mental status examination, therapeutic communication, suicide assessment, de-escalation, substance use, and restraint policy.",
      content: [
        { h: "Mental Status Examination (MSE)", p: "Structured cross-section of current mental functioning. Components: Appearance & behavior (grooming, eye contact, motor activity), Speech (rate, volume, fluency), Mood (subjective) & Affect (observed — congruent? restricted? labile?), Thought process (linear, tangential, flight of ideas, blocking) & Thought content (delusions, obsessions, suicidal ideation), Perception (hallucinations — auditory most common in psychosis; visual suggests organic cause), Cognition (orientation, attention, memory, abstract reasoning), Insight & Judgment. Document MSE on admission and after significant change." },
        { h: "Schizophrenia — Positive vs Negative Symptoms", p: "Positive symptoms (added to normal experience): hallucinations (auditory most common), delusions, disorganized speech, grossly disorganized or catatonic behavior. Negative symptoms (loss of normal function): blunted affect, alogia (poverty of speech), avolition, anhedonia, social withdrawal. Antipsychotics — particularly typicals (haloperidol) — treat positive symptoms more reliably; atypicals (olanzapine, risperidone, clozapine) provide better coverage for negative symptoms with different side-effect profiles." },
        { h: "Mood Disorders Overview", p: "Major depression: ≥2 weeks of depressed mood OR anhedonia plus 4+ other symptoms (SIG-E-CAPS: Sleep, Interest, Guilt, Energy, Concentration, Appetite, Psychomotor, Suicide). Persistent depressive disorder: depressed mood most days for ≥2 years. Bipolar I: at least one manic episode (≥7 days, often with psychosis). Bipolar II: hypomania + major depression, no full mania. Lithium (0.6–1.2 mEq/L therapeutic) remains gold standard for bipolar maintenance; valproate or atypical antipsychotic for acute mania. SSRIs first-line for unipolar depression — full effect takes 4–6 weeks, suicidality risk increases briefly in first 2 weeks (especially adolescents)." },
        { h: "Anxiety Disorders", p: "GAD: excessive worry on more days than not for ≥6 months. Panic disorder: recurrent unexpected panic attacks + ≥1 month of anticipatory anxiety or behavioral change. Social anxiety disorder: fear of social/performance scrutiny. PTSD (DSM-5 criteria): exposure to threatened death/serious injury + intrusion symptoms + avoidance + negative cognition/mood + hyperarousal lasting >1 month. First-line for all: SSRIs/SNRIs + CBT. Benzodiazepines for short-term acute use only — dependence risk." },
        { h: "Therapeutic Communication", p: "Use: open-ended questions, reflection ('It sounds like you felt unheard'), silence (allows processing), focusing ('Tell me more about that argument'), validation, summarizing. Avoid: false reassurance ('Everything will be fine'), giving advice, 'Why' questions (feel accusatory), changing the subject, defending staff, expressing personal judgment. Acknowledge feelings before solving — patients need to feel heard before they can engage in problem-solving." },
        { h: "Suicide Risk Assessment", p: "Direct questioning does NOT plant the idea or increase risk — repeatedly shown in evidence. Ask: 'Are you having thoughts of harming yourself or ending your life?' If yes, assess: Ideation (passive vs active), Plan (specific?), Means (lethal? accessible?), Intent (do they intend to act?), History of attempts, Protective factors (children, faith, future plans). Risk stratify (low/medium/high) and document. Implement safety: 1:1 observation for high risk, remove sharps/cords/medications, restrict ligature points. 'No-harm contracts' are not evidence-based as a sole intervention." },
        { h: "De-escalation of Agitation", p: "Verbal de-escalation is first-line before any chemical or physical restraint. Approach: maintain safe distance (≥2 arm-lengths), one staff member speaks at a time, low calm voice, non-threatening posture (hands visible, slight angle), respect personal space, offer choices ('Would you prefer to sit here or walk with me?'), acknowledge feelings, set clear limits without threats. Always have an exit route and back-up team aware. Avoid: cornering, prolonged eye contact, multiple voices, condescension." },
        { h: "Substance Use Disorders & Withdrawal", p: "Alcohol withdrawal timeline: 6–24 h tremor/anxiety; 12–48 h hallucinations (auditory/visual); 24–48 h seizures; 48–96 h delirium tremens (5–25% mortality untreated). Use CIWA-Ar to score severity and guide benzodiazepine dosing. Always give thiamine BEFORE glucose to prevent Wernicke's encephalopathy. Opioid withdrawal: COWS scale; symptoms uncomfortable but not life-threatening — yawning, lacrimation, GI upset, piloerection. Methadone or buprenorphine for medication-assisted treatment. Benzodiazepine withdrawal: life-threatening with seizures — taper slowly." },
        { h: "Restraints — Last Resort", p: "Use only when there is imminent danger to patient or others AND less restrictive measures have failed. Categories: physical (manual hold, mechanical), chemical (medication), environmental (locked area, seclusion). Requirements: physician order (often time-limited 1–4 h depending on age and jurisdiction), continuous observation, vital signs and circulation checks per policy, regular re-evaluation, documentation of behavior, intervention, response. Remove restraints as soon as safe. Restraints have been associated with serious injury and death — they are not therapeutic." },
        { h: "Self-Care for Mental Health Nurses", p: "Vicarious trauma, compassion fatigue, and burnout are occupational hazards. Warning signs in yourself: irritability, emotional numbing, intrusive thoughts about patients, declining work satisfaction, sleep disturbance. Protective practices: peer supervision, clear work-home boundaries, debrief after critical incidents, regular use of leave, professional supervision. Encourage workplace cultures that normalize asking for help — care for the carer is care for the patient." }
      ],
      checkIn: [
        { id: "msn-t-mh-q1", subject: "psychiatric", stem: "A patient with schizophrenia hears voices commanding harm. This is:", options: ["A delusion","An auditory hallucination — a positive symptom","Flat affect","Negative symptom"], answer: 1, explanation: "Hallucinations are sensory perceptions without external stimulus; auditory is most common in schizophrenia and is a positive symptom." },
        { id: "msn-t-mh-q2", subject: "psychiatric", stem: "First-line mood stabilizer for bipolar I disorder is:", options: ["Sertraline","Lithium","Lorazepam","Risperidone"], answer: 1, explanation: "Lithium remains gold standard for acute mania and maintenance in bipolar disorder. Therapeutic 0.6–1.2 mEq/L." },
        { id: "msn-t-mh-q3", subject: "psychiatric", stem: "A suicidal patient says, 'I won't be a burden anymore.' Best nurse response:", options: ["'You'll feel better tomorrow.'","'Are you thinking of killing yourself?'","'Don't talk like that.'","'Tell me about something positive.'"], answer: 1, explanation: "Direct questioning is essential. Asking does NOT plant the idea — it opens assessment and safety planning." },
        { id: "msn-t-mh-q4", subject: "psychiatric", stem: "Tardive dyskinesia is associated with long-term use of:", options: ["SSRIs","Typical antipsychotics","Benzodiazepines","Lithium"], answer: 1, explanation: "TD (involuntary repetitive movements, often orofacial) is a serious side effect of prolonged typical (and to a lesser extent atypical) antipsychotic use." },
        { id: "msn-t-mh-q5", subject: "psychiatric", stem: "Which is a NEGATIVE symptom of schizophrenia?", options: ["Auditory hallucinations","Delusions","Flat affect","Disorganized speech"], answer: 2, explanation: "Negative symptoms = absence of normal function: flat affect, alogia, avolition, anhedonia, social withdrawal." },
        { id: "msn-t-mh-q6", subject: "psychiatric", stem: "Therapeutic lithium level is:", options: ["0.1–0.5 mEq/L","0.6–1.2 mEq/L","1.5–2.5 mEq/L","3.0–4.0 mEq/L"], answer: 1, explanation: "0.6–1.2 mEq/L is therapeutic. >1.5 toxic. Monitor renal function, thyroid, and sodium balance." },
        { id: "msn-t-mh-q7", subject: "psychiatric", stem: "The nurse's priority when caring for a patient expressing suicidal thoughts is to:", options: ["Leave them alone to rest","Ensure safety and provide close observation","Avoid discussing their feelings","Discharge them quickly"], answer: 1, explanation: "Patient safety is the priority — ask directly about intent and plan, remove means, and provide close observation." },
        { id: "msn-t-mh-q8", subject: "psychiatric", stem: "Which is a recognised feature of schizophrenia?", options: ["Hallucinations and delusions","Elevated blood glucose","Joint swelling","Productive cough"], answer: 0, explanation: "Hallucinations and delusions are positive symptoms of schizophrenia; negative symptoms include flat affect and social withdrawal." },
        { id: "msn-t-mh-q9", subject: "psychiatric", stem: "A therapeutic communication technique is:", options: ["Giving false reassurance","Active listening and open-ended questions","Changing the subject","Being judgemental"], answer: 1, explanation: "Active listening, open-ended questions, and empathy build trust; false reassurance and judgement are barriers." },
        { id: "msn-t-mh-q10", subject: "psychiatric", stem: "Early features of lithium toxicity include:", options: ["Constipation and dry skin","Nausea, tremor, and diarrhoea","Weight gain only","Hair loss"], answer: 1, explanation: "Early lithium toxicity causes nausea, coarse tremor, diarrhoea, and drowsiness; ataxia and seizures occur later." }
      ]
    },

    {
      id: "msn-t-community-health",
      title: "Community Health & Public Health Programs",
      subject: "community-health",
      readMinutes: 13,
      summary: "EPI schedule, Primary Health Care pillars, family planning, key indicators, prevention levels, epidemiology basics, and outbreak response.",
      content: [
        { h: "Bangladesh EPI Schedule (under-1)", p: "At birth: BCG (left deltoid, intradermal), OPV-0. 6 weeks: Pentavalent-1 (DPT-HepB-Hib), OPV-1, PCV-1, IPV-1, Rota-1. 10 weeks: Pentavalent-2, OPV-2, PCV-2, Rota-2. 14 weeks: Pentavalent-3, OPV-3, PCV-3, IPV-2. 9 months: Measles-Rubella 1 (MR-1). 15 months: MR-2. Td (tetanus-diphtheria) given to pregnant women. The exact schedule is reviewed periodically; always verify against current EPI guidance from Directorate General of Health Services." },
        { h: "Cold Chain & Vaccine Handling", p: "Vaccines lose potency outside +2 to +8 °C (most). OPV is highly heat-sensitive — keep frozen in central stores, +2 to +8 °C at peripheral level. Never refreeze a vaccine that has been thawed. Vaccine Vial Monitor (VVM) on each vial changes color with cumulative heat exposure — discard at VVM stage 3 or 4. Open-vial policy: reconstituted vaccines (BCG, measles) used within 6 hours, then discarded. Multi-dose vials with preservative (OPV, DPT, HepB) can be used up to 28 days if conditions met (WHO MDVP)." },
        { h: "Pillars of Primary Health Care (Alma-Ata 1978)", p: "PHC is essential healthcare made universally accessible, acceptable, affordable, appropriate, and available. Eight essential elements: (1) health education, (2) food and nutrition, (3) safe water and sanitation, (4) maternal-child health and family planning, (5) immunization against major infectious diseases, (6) prevention of locally endemic disease, (7) appropriate treatment of common illnesses and injury, (8) essential drugs. Reaffirmed in the 2018 Astana Declaration with renewed emphasis on PHC as the foundation of universal health coverage." },
        { h: "Bangladesh Health Service Tiers", p: "Primary tier: Community Clinic (1 per ~6,000 population — closest to community), Union Health & Family Welfare Centre, Upazila Health Complex (31-50 beds, basic surgical and obstetric services). Secondary tier: District Hospital (100-250 beds, specialist services). Tertiary tier: Medical College Hospital, specialized institutes (NICVD, NIKDU, NICRH). Community workforce: Community Health Care Provider (CHCP), Health Assistant (HA), Family Welfare Assistant (FWA), Family Welfare Visitor (FWV)." },
        { h: "Family Planning — Hierarchy of Effectiveness", p: "Tier 1 (most effective, <1% failure): subdermal implant, copper or LNG IUD, female and male sterilization. Tier 2 (6-9% typical failure): injectable (DMPA), combined oral contraceptive pill, progestin-only pill, patch, ring. Tier 3 (12-24% typical failure): male and female condoms, diaphragm with spermicide. Tier 4 (highest failure): withdrawal, fertility awareness methods. Emergency contraception: levonorgestrel up to 72 h, ulipristal up to 120 h, copper IUD insertion up to 5 days (most effective and provides ongoing contraception)." },
        { h: "Indicators You Must Know", p: "MMR (Maternal Mortality Ratio): per 100,000 live births. IMR (Infant Mortality Rate): under-1 deaths per 1,000 live births. U5MR: under-5 deaths per 1,000 live births. CBR (Crude Birth Rate): live births per 1,000 population. CDR (Crude Death Rate): deaths per 1,000 population. TFR (Total Fertility Rate): average live births per woman. NMR (Neonatal Mortality Rate): deaths under 28 days per 1,000 live births. Disability-Adjusted Life Year (DALY): a year of life lost to ill-health, disability, or early death." },
        { h: "Levels of Prevention", p: "Primary: prevent occurrence in healthy people — immunization, safe water, health education, helmet use. Secondary: early detection and treatment in asymptomatic or pre-symptomatic — cervical screening, blood pressure measurement, antenatal care. Tertiary: limit disability after disease has occurred — cardiac rehabilitation, occupational therapy after stroke, diabetic foot care. Some authors add Primordial prevention: act on underlying social conditions (poverty, education) that drive risk factor development." },
        { h: "Epidemiology — Incidence vs Prevalence", p: "Incidence: number of new cases in a defined population over a specified time period — captures disease 'flow' and risk. Prevalence: number of all (new + existing) cases at a given point or period — captures disease 'pool'. Acute short-duration diseases (influenza, measles) have similar incidence and low prevalence. Chronic long-duration diseases (diabetes, HIV) have low incidence but high prevalence. Mortality rate, attack rate, case fatality rate, and crude vs age-standardized rates are key derivatives." },
        { h: "Outbreak Investigation — Ten Steps", p: "(1) Confirm the outbreak (verify cases and exclude pseudo-outbreaks from improved surveillance). (2) Establish a case definition. (3) Identify cases and obtain information. (4) Describe by time (epidemic curve), place (spot map), person (age/sex). (5) Develop hypotheses about source and transmission. (6) Test hypotheses (often case-control or cohort studies). (7) Refine hypotheses and undertake further studies. (8) Implement control measures (often parallel with investigation). (9) Communicate findings. (10) Maintain surveillance. Nurses are often the first to notice unusual clustering — speak up early." },
        { h: "Health Education Methods", p: "Individual methods: counselling, home visit. Group methods: lecture, group discussion, demonstration, role play, simulation. Mass methods: TV/radio campaigns, posters, social media, mobile phone messaging. Choose method by audience, message complexity, and resources. Always combine information with skill-building (demonstration + return demonstration) and a behavior-change framework (Health Belief Model, Transtheoretical / Stages of Change). Evaluate both reach and behavior change, not just attendance." }
      ],
      checkIn: [
        { id: "msn-t-co-q1", subject: "community-health", stem: "Bangladesh's EPI gives BCG at:", options: ["Birth","6 weeks","9 months","15 months"], answer: 0, explanation: "BCG is given at birth as part of the Bangladesh EPI schedule." },
        { id: "msn-t-co-q2", subject: "community-health", stem: "Measles-Rubella second dose is scheduled at:", options: ["9 months","12 months","15 months","18 months"], answer: 2, explanation: "MR-2 at 15 months in the current Bangladesh EPI schedule." },
        { id: "msn-t-co-q3", subject: "community-health", stem: "Immunization is an example of which level of prevention?", options: ["Primary","Secondary","Tertiary","Quaternary"], answer: 0, explanation: "Primary prevention aims to prevent occurrence of disease in healthy individuals; immunization is a classic example." },
        { id: "msn-t-co-q4", subject: "community-health", stem: "Most effective reversible contraceptive method is:", options: ["Combined OCP","Male condom","Contraceptive implant","Withdrawal"], answer: 2, explanation: "Subdermal implants and IUDs are tier-1 LARC methods with <1% failure rate, much more effective than user-dependent methods." },
        { id: "msn-t-co-q5", subject: "community-health", stem: "Alma-Ata declaration year:", options: ["1948","1958","1978","1988"], answer: 2, explanation: "The Alma-Ata Declaration on Primary Health Care was adopted in 1978." },
        { id: "msn-t-co-q6", subject: "community-health", stem: "Screening for cervical cancer is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Health promotion"], answer: 1, explanation: "Screening for early detection in asymptomatic individuals is secondary prevention." },
        { id: "msn-t-co-q7", subject: "community-health", stem: "Immunization to prevent disease before it occurs is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Rehabilitation"], answer: 0, explanation: "Primary prevention stops disease before it starts — immunization and health promotion are key examples." },
        { id: "msn-t-co-q8", subject: "community-health", stem: "The leading cause of under-five mortality that ORS targets is:", options: ["Measles","Dehydration from diarrhoea","Malaria","Anaemia"], answer: 1, explanation: "Oral rehydration solution prevents death from dehydration, a leading consequence of childhood diarrhoea." },
        { id: "msn-t-co-q9", subject: "community-health", stem: "The crude birth rate is expressed per:", options: ["100 population","1,000 population","10,000 population","100,000 population"], answer: 1, explanation: "Crude birth rate is the number of live births per 1,000 population in a year." },
        { id: "msn-t-co-q10", subject: "community-health", stem: "Maternal mortality ratio is conventionally expressed per:", options: ["1,000 live births","10,000 live births","100,000 live births","1,000,000 live births"], answer: 2, explanation: "The maternal mortality ratio is the number of maternal deaths per 100,000 live births." }
      ]
    },

    {
      id: "msn-t-research",
      title: "Research Methodology & Statistics Basics",
      subject: "research",
      readMinutes: 14,
      summary: "Study designs, validity, reliability, sampling, hypothesis testing, statistical tests, ethics, and critical appraisal — the toolkit for evidence-based practice.",
      content: [
        { h: "Hierarchy of Evidence", p: "From strongest to weakest: systematic review / meta-analysis of RCTs → individual RCTs → controlled non-randomized trials → cohort studies → case-control studies → cross-sectional studies → case series and case reports → expert opinion and traditional belief. The strength of a recommendation depends both on the level of evidence and on the consistency and applicability of findings. GRADE methodology now widely used to rate quality (high / moderate / low / very low)." },
        { h: "Quantitative vs Qualitative Designs", p: "Quantitative: numerical data, deductive, tests hypotheses, generalizable when sampling is sound — useful when you have a measurable outcome. Subtypes: descriptive, correlational, quasi-experimental, experimental. Qualitative: text/image data, inductive, generates theory, deep contextual understanding — useful for 'why' and 'how' questions. Subtypes: phenomenology, grounded theory, ethnography, narrative inquiry, case study. Mixed methods combine both, often sequentially (QUAL→QUAN or vice versa)." },
        { h: "Validity vs Reliability", p: "Validity = the instrument measures what it claims to measure. Types: content (covers the construct's full domain), construct (relates to other measures of the same idea), criterion (correlates with a gold standard — concurrent or predictive), face (looks right). Reliability = consistency of repeated measurement. Types: test-retest (same measurement at two times), inter-rater (two observers agree, Cohen's kappa), internal consistency (items in a scale measure the same thing, Cronbach's alpha ≥0.7). A test can be reliable without being valid; cannot be valid without being reliable." },
        { h: "Sampling Methods", p: "Probability sampling (supports statistical generalization): simple random, systematic (every kth element), stratified (proportional or disproportional across strata), cluster (sampling units are groups). Non-probability (used when probability not feasible, generalization is limited): convenience, purposive (key informants), snowball (chain referral), quota (proportional but non-random). Sample size calculation depends on effect size, alpha (usually 0.05), power (usually 0.80), and variance. Underpowered studies risk false negatives." },
        { h: "Hypothesis Testing", p: "Null hypothesis (H₀): no difference or no association. Alternative hypothesis (H₁ or Hₐ): a difference exists. p-value: probability of obtaining the observed result (or more extreme) if H₀ were true. p < α (conventionally 0.05) → reject H₀. Type I error (α): false positive — wrongly rejecting a true null. Type II error (β): false negative — failing to reject a false null. Statistical power = 1 − β; conventional target 0.80 (i.e., 80% chance of detecting a real effect). Confidence interval (95%) is increasingly preferred over isolated p-values because it conveys precision and clinical importance." },
        { h: "Common Statistical Tests", p: "Comparing means: t-test (two groups), ANOVA (three or more groups), paired t-test (same subjects, two time points). Comparing proportions: chi-square, Fisher's exact (small samples). Correlation: Pearson (continuous, normal), Spearman (ordinal or non-normal). Regression: linear (continuous outcome), logistic (binary outcome — gives odds ratios), Cox proportional hazards (survival/time-to-event — gives hazard ratios). Non-parametric tests (Mann-Whitney, Wilcoxon, Kruskal-Wallis) are used when assumptions of parametric tests are violated." },
        { h: "Critical Appraisal of a Paper", p: "Use a structured tool — CASP for qualitative, CONSORT for RCTs, STROBE for observational, PRISMA for systematic reviews. Key questions: Was the research question clear? Was the design appropriate? Was selection bias minimized? Was measurement reliable and valid? Were confounders accounted for? Are the results clinically (not just statistically) significant? Are findings applicable to my patient population? Conflict of interest disclosed? Reading abstracts only is insufficient — read methods carefully." },
        { h: "Research Ethics — Belmont & Beyond", p: "Belmont Report (1979) principles: respect for persons (autonomy + extra protection for those with diminished autonomy), beneficence (maximize benefit, minimize harm), justice (fair selection, equitable distribution of benefits and burdens). Required for ethical research: ethics review board (IRB / IEC) approval, informed consent (voluntary, informed, competent), confidentiality and data security, right to withdraw without penalty. Vulnerable populations — children, pregnant women, prisoners, mentally impaired, refugees, employees — need additional safeguards." },
        { h: "Informed Consent — Practical", p: "Three core elements: information (full disclosure of purpose, procedures, risks, benefits, alternatives, right to withdraw), comprehension (in language and literacy level the participant can understand — use teach-back; translate if needed; consider audio-visual aids for low-literacy populations), voluntariness (free from coercion, undue inducement; particularly important in hierarchical settings like nursing students or hospitalized patients). Document in writing and witnessed where required. Consent is a process, not a single signature." },
        { h: "Writing a Research Proposal", p: "Standard structure: Title (≤15 words, descriptive), Abstract (≤300 words, structured), Introduction & background, Statement of the problem, Significance, Literature review, Conceptual / theoretical framework, Research questions & hypotheses, Methods (design, setting, sample, instruments, data collection, analysis plan), Ethical considerations, Timeline & budget, References (use a consistent style — APA, Vancouver), Appendices (instruments, consent forms). Iterate with your supervisor. The clearer the proposal, the smoother the study." }
      ],
      checkIn: [
        { id: "msn-t-rs-q1", subject: "research", stem: "The strongest study design for establishing causation is:", options: ["Cross-sectional study","Cohort study","Randomized controlled trial","Case report"], answer: 2, explanation: "RCTs control for confounding through randomization and are the gold standard for evaluating intervention efficacy." },
        { id: "msn-t-rs-q2", subject: "research", stem: "Cronbach's alpha measures:", options: ["Construct validity","Internal consistency reliability","Sample adequacy","Statistical significance"], answer: 1, explanation: "Cronbach's α assesses how closely a set of items in a scale measure the same underlying construct. Acceptable ≥0.7." },
        { id: "msn-t-rs-q3", subject: "research", stem: "A Type I error means:", options: ["Failing to reject a false null hypothesis","Rejecting a true null hypothesis","Selecting too small a sample","Using the wrong statistical test"], answer: 1, explanation: "Type I (α) error: false positive — concluding a difference exists when it does not. Type II (β): false negative." },
        { id: "msn-t-rs-q4", subject: "research", stem: "Stratified random sampling is preferred when:", options: ["The population is homogeneous","Researchers want representation across subgroups","Time is severely limited","No sampling frame exists"], answer: 1, explanation: "Stratified sampling ensures key subgroups (e.g., age, sex) are proportionally represented." },
        { id: "msn-t-rs-q5", subject: "research", stem: "The Belmont Report identifies three core ethical principles:", options: ["Respect, beneficence, justice","Autonomy, equity, confidentiality","Privacy, safety, integrity","Consent, anonymity, validity"], answer: 0, explanation: "Belmont Report (1979): respect for persons, beneficence (do no harm + maximize benefit), and justice." },
        { id: "msn-t-rs-q6", subject: "research", stem: "Statistical power is conventionally set at:", options: ["50%","60%","80%","99%"], answer: 2, explanation: "Power = 1 − β; the convention is 80% (i.e., β = 0.20)." },
        { id: "msn-t-rs-q7", subject: "research", stem: "The p-value threshold conventionally used to declare statistical significance is:", options: ["0.5","0.05","0.01","0.10"], answer: 1, explanation: "By convention, p < 0.05 is taken as statistically significant, meaning a <5% probability the result arose by chance under the null hypothesis." },
        { id: "msn-t-rs-q8", subject: "research", stem: "Which sampling method gives every member of the population an equal and independent chance of selection?", options: ["Convenience sampling","Quota sampling","Simple random sampling","Snowball sampling"], answer: 2, explanation: "Simple random sampling gives each population member an equal, independent probability of selection, minimizing selection bias." },
        { id: "msn-t-rs-q9", subject: "research", stem: "The dependent variable in a study is best described as the:", options: ["Variable the researcher manipulates","Outcome that is measured","Confounding factor","Sampling frame"], answer: 1, explanation: "The dependent variable is the measured outcome that may change in response to the independent (manipulated) variable." },
        { id: "msn-t-rs-q10", subject: "research", stem: "Qualitative research is MOST appropriate when the aim is to:", options: ["Measure the prevalence of a disease","Test a drug against placebo","Explore lived experiences and meanings","Establish a numerical correlation"], answer: 2, explanation: "Qualitative methods explore experiences, perceptions, and meanings in depth, rather than quantifying or testing numerical relationships." }
      ]
    },

    /* ============================================================
       NEW HIGH-YIELD TOPICS (Phase 2 expansion)
       ============================================================ */
    {
      id: "msn-t-fluid-electrolyte",
      title: "Fluid, Electrolyte & Acid–Base Balance",
      subject: "adult-health",
      readMinutes: 12,
      summary: "Body fluid compartments, the major electrolytes and their danger signs, dehydration vs. overload, and a simple way to read arterial blood gases.",
      content: [
        { h: "Body Fluid Compartments", p: "Total body water is about 60% of adult body weight. Two-thirds sits inside cells (intracellular fluid, ICF) and one-third outside (extracellular fluid, ECF). The ECF is split into interstitial fluid (between cells) and intravascular fluid (plasma). Water moves between compartments by osmosis, following solutes — mainly sodium in the ECF and potassium in the ICF. Infants have a higher proportion of body water and lose it faster, so they dehydrate more quickly than adults." },
        { h: "Sodium (135–145 mmol/L)", p: "Sodium is the main ECF cation and the chief determinant of serum osmolality and fluid distribution. Hyponatremia (<135) causes headache, confusion, seizures, and, if corrected too fast, central pontine myelinolysis — correct slowly. Hypernatremia (>145) causes thirst, dry mucous membranes, restlessness, and neurological signs. Sodium and water balance are tightly linked: assess fluid status alongside any sodium abnormality." },
        { h: "Potassium (3.5–5.0 mmol/L)", p: "Potassium is the main ICF cation and is critical for cardiac and neuromuscular function. Hypokalemia (<3.5) causes muscle weakness, flat T waves, U waves, and arrhythmias; common with diuretics, vomiting, and diarrhea. Hyperkalemia (>5.0) causes peaked T waves, widened QRS, and risk of cardiac arrest. Never give IV potassium as a rapid push — it can stop the heart; always dilute and infuse slowly with cardiac monitoring." },
        { h: "Calcium (8.5–10.5 mg/dL)", p: "Calcium supports bone, clotting, and neuromuscular activity. Hypocalcemia causes tetany — Chvostek's sign (facial twitch on tapping the facial nerve) and Trousseau's sign (carpal spasm with BP cuff inflation). Hypercalcemia causes 'stones, bones, groans, and psychiatric moans' — renal stones, bone pain, abdominal upset, and confusion. Calcium balance is closely tied to phosphate and to parathyroid hormone." },
        { h: "Magnesium & Phosphate", p: "Magnesium (1.5–2.5 mg/dL) stabilizes nerves and muscle; low levels often accompany hypokalemia and hypocalcemia and must be corrected for those to resolve. Hypomagnesemia causes tremors, hyperreflexia, and torsades de pointes. Phosphate moves inversely with calcium. These 'minor' electrolytes are common exam distractors — remember magnesium's link to refractory low potassium." },
        { h: "Dehydration vs. Fluid Overload", p: "Fluid volume deficit (dehydration): dry mucous membranes, poor skin turgor, sunken eyes, tachycardia, low BP, concentrated urine, raised hematocrit. Fluid volume excess (overload): edema, raised JVP, bounding pulse, crackles in the lungs, weight gain, shortness of breath. Daily weight is the single most reliable measure of fluid status — 1 kg change roughly equals 1 litre of fluid." },
        { h: "IV Fluids — The Basics", p: "Isotonic fluids (0.9% normal saline, Ringer's lactate) stay in the ECF and expand circulating volume — used for resuscitation and dehydration. Hypotonic fluids (0.45% saline) shift water into cells — used for cellular dehydration; risk of cerebral edema if overused. Hypertonic fluids (3% saline, D10) pull water out of cells — used cautiously for severe hyponatremia. Always check the prescription, rate, and the patient's heart and kidney status before infusing." },
        { h: "Reading an Arterial Blood Gas", p: "Normal values: pH 7.35–7.45, PaCO₂ 35–45 mmHg, HCO₃⁻ 22–26 mmol/L. Step 1: is the pH acidic (<7.35) or alkaline (>7.45)? Step 2: look at CO₂ — if it moves opposite to pH, the cause is respiratory; if HCO₃⁻ moves with pH, the cause is metabolic. Step 3: check whether the other system has compensated. Acronym: ROME — Respiratory Opposite (pH up, CO₂ down), Metabolic Equal (pH up, HCO₃⁻ up)." },
        { h: "Common Acid–Base Pictures", p: "Respiratory acidosis: low pH, high CO₂ — hypoventilation (COPD, sedation, respiratory failure). Respiratory alkalosis: high pH, low CO₂ — hyperventilation (anxiety, pain, early sepsis). Metabolic acidosis: low pH, low HCO₃⁻ — diarrhea, DKA, renal failure, shock (lactate). Metabolic alkalosis: high pH, high HCO₃⁻ — vomiting, excessive antacids, diuretics. Treat the cause, not just the number." },
        { h: "Nursing Priorities", p: "Monitor intake and output accurately, weigh daily at the same time, and track trends in electrolytes. Watch the ECG in any potassium, calcium, or magnesium disturbance. Infuse potassium only when diluted and never by push. Correct sodium slowly. Report new confusion, muscle weakness, arrhythmias, or seizures promptly — these are the danger signs that an electrolyte problem has become an emergency." }
      ],
      checkIn: [
        { id: "msn-t-fe-q1", subject: "adult-health", stem: "The normal serum potassium range in adults is:", options: ["1.5–2.5 mmol/L","3.5–5.0 mmol/L","8.5–10.5 mmol/L","135–145 mmol/L"], answer: 1, explanation: "Normal serum potassium is 3.5–5.0 mmol/L. Values outside this range threaten cardiac rhythm." },
        { id: "msn-t-fe-q2", subject: "adult-health", stem: "Which ECG change is classically associated with hyperkalemia?", options: ["Flat T waves","Peaked (tall) T waves","Prominent U waves","Shortened PR interval"], answer: 1, explanation: "Hyperkalemia produces tall, peaked T waves and, as it worsens, a widened QRS and risk of arrest." },
        { id: "msn-t-fe-q3", subject: "adult-health", stem: "Intravenous potassium chloride should NEVER be:", options: ["Diluted before infusion","Given by rapid IV push","Given with cardiac monitoring","Infused slowly"], answer: 1, explanation: "Rapid IV push of potassium can cause fatal cardiac arrest. It must always be diluted and infused slowly." },
        { id: "msn-t-fe-q4", subject: "adult-health", stem: "Trousseau's sign (carpal spasm on inflating a BP cuff) indicates:", options: ["Hypercalcemia","Hypocalcemia","Hyperkalemia","Hypernatremia"], answer: 1, explanation: "Trousseau's and Chvostek's signs are signs of neuromuscular irritability from hypocalcemia." },
        { id: "msn-t-fe-q5", subject: "adult-health", stem: "Which finding suggests fluid volume excess (overload) rather than deficit?", options: ["Poor skin turgor","Sunken eyes","Lung crackles and raised JVP","Concentrated urine"], answer: 2, explanation: "Crackles, raised jugular venous pressure, edema, and weight gain indicate fluid overload." },
        { id: "msn-t-fe-q6", subject: "adult-health", stem: "Which IV fluid is isotonic and used for volume resuscitation?", options: ["0.45% saline","3% saline","0.9% normal saline","D10 water"], answer: 2, explanation: "0.9% normal saline is isotonic, stays in the extracellular space, and expands circulating volume." },
        { id: "msn-t-fe-q7", subject: "adult-health", stem: "Normal arterial blood pH is:", options: ["7.15–7.25","7.35–7.45","7.50–7.60","6.95–7.05"], answer: 1, explanation: "Normal arterial pH is 7.35–7.45. Below is acidosis; above is alkalosis." },
        { id: "msn-t-fe-q8", subject: "adult-health", stem: "A patient with COPD has pH 7.30 and PaCO₂ 55 mmHg. This represents:", options: ["Respiratory acidosis","Respiratory alkalosis","Metabolic acidosis","Metabolic alkalosis"], answer: 0, explanation: "Low pH with high CO₂ from hypoventilation is respiratory acidosis — typical of COPD." },
        { id: "msn-t-fe-q9", subject: "adult-health", stem: "The single most reliable bedside measure of a patient's fluid status is:", options: ["Blood pressure","Daily weight","Skin colour","Respiratory rate"], answer: 1, explanation: "Daily weight, taken at the same time on the same scale, best tracks fluid gain or loss — about 1 kg per litre." },
        { id: "msn-t-fe-q10", subject: "adult-health", stem: "Persistent vomiting most commonly leads to which acid–base disturbance?", options: ["Metabolic acidosis","Metabolic alkalosis","Respiratory acidosis","Respiratory alkalosis"], answer: 1, explanation: "Loss of gastric acid (HCl) through vomiting raises bicarbonate, producing metabolic alkalosis." }
      ]
    },
    {
      id: "msn-t-respiratory",
      title: "Respiratory Assessment & Common Disorders",
      subject: "adult-health",
      readMinutes: 11,
      summary: "Respiratory assessment, oxygen therapy and safety, and the nursing essentials of asthma, COPD, pneumonia, and tuberculosis.",
      content: [
        { h: "Respiratory Assessment", p: "Inspect rate, depth, rhythm, symmetry of chest movement, use of accessory muscles, and skin colour (cyanosis is a late sign). Palpate for expansion and tactile fremitus. Percuss for resonance (dull = consolidation or fluid; hyper-resonant = trapped air). Auscultate systematically: normal breath sounds, then added sounds — crackles (fluid/secretions), wheeze (narrowed airways), stridor (upper-airway obstruction, an emergency), and pleural rub. Always compare side to side." },
        { h: "Oxygen Therapy & Safety", p: "Oxygen is a drug and needs a prescription and a target saturation. Devices: nasal cannula (1–4 L/min, ~24–40%), simple face mask (5–10 L/min), Venturi mask (precise fixed concentrations — best for COPD), and non-rebreather (10–15 L/min, up to ~90% for emergencies). In COPD with chronic CO₂ retention, target SpO₂ 88–92% to avoid removing the hypoxic drive. Oxygen supports combustion — no smoking or open flames near it." },
        { h: "Asthma", p: "Asthma is reversible airway narrowing from inflammation and bronchospasm. Triggers: allergens, cold air, exercise, infection, smoke. Signs: wheeze, cough, chest tightness, prolonged expiration. A 'silent chest' with exhaustion is ominous — air is barely moving. Reliever inhalers (short-acting beta-2 agonists such as salbutamol) open airways quickly; preventer inhalers (inhaled corticosteroids) reduce inflammation and must be taken daily even when well. Teach inhaler technique and trigger avoidance." },
        { h: "COPD", p: "Chronic obstructive pulmonary disease (chronic bronchitis + emphysema) is largely irreversible airflow limitation, usually from smoking. Patients have chronic cough, sputum, breathlessness, and a barrel chest. Care: smoking cessation (the single most important step), bronchodilators, controlled low-flow oxygen, breathing techniques (pursed-lip breathing), pulmonary rehabilitation, and vaccination. Watch for infective exacerbations — increased breathlessness with change in sputum colour or volume." },
        { h: "Pneumonia", p: "Pneumonia is infection of the lung parenchyma. Signs: fever, productive cough, pleuritic chest pain, breathlessness, crackles, and dullness to percussion over the affected area. Nursing care: antibiotics on time, oxygen, fluids, positioning upright, chest physiotherapy and encouraging deep breathing and coughing, and monitoring for sepsis. Prevention in hospital: mobilize early, elevate the head of the bed, and provide good oral and respiratory hygiene." },
        { h: "Tuberculosis", p: "TB is caused by Mycobacterium tuberculosis and spreads by airborne droplets. Classic signs: cough for more than two to three weeks, night sweats, weight loss, low-grade fever, and sometimes blood-streaked sputum. Diagnosis includes sputum for acid-fast bacilli/GeneXpert and chest X-ray. Treatment is a months-long multidrug regimen — DOTS (directly observed therapy) supports adherence and prevents drug resistance. Isolate suspected cases and use airborne precautions with an N95 respirator." },
        { h: "Positioning & Airway Clearance", p: "Sitting upright or in high-Fowler's position improves lung expansion and eases breathing. Encourage deep breathing and effective coughing, use incentive spirometry after surgery, and ensure adequate hydration to loosen secretions. For unilateral lung disease, positioning the 'good lung down' often improves oxygenation. Suction only when secretions are present and the patient cannot clear them — over-suctioning damages mucosa and drops oxygen levels." },
        { h: "Danger Signs & Escalation", p: "Escalate urgently for: SpO₂ below 90% on room air not responding to oxygen, respiratory rate under 8 or over 25, stridor, a silent chest, exhaustion, confusion, central cyanosis, or one-word answers due to breathlessness. These suggest impending respiratory failure. Stay with the patient, sit them upright, give prescribed oxygen, and call for senior help immediately." },
        { h: "Patient Education", p: "Teach correct inhaler and spacer technique and check it at every opportunity — poor technique is a common cause of 'treatment failure'. Reinforce smoking cessation, vaccination (influenza, pneumococcal), recognizing early exacerbation signs, and adherence to the full course of TB or antibiotic therapy. For chronic disease, written action plans help patients respond early and avoid hospital admission." }
      ],
      checkIn: [
        { id: "msn-t-resp-q1", subject: "adult-health", stem: "The target oxygen saturation for a patient with COPD and chronic CO₂ retention is usually:", options: ["95–100%","88–92%","80–85%","Above 99%"], answer: 1, explanation: "In COPD with CO₂ retention, target SpO₂ 88–92% to avoid suppressing the hypoxic respiratory drive." },
        { id: "msn-t-resp-q2", subject: "adult-health", stem: "Stridor on inspiration most likely indicates:", options: ["Lower airway fluid","Upper airway obstruction","Normal breath sounds","Pleural inflammation"], answer: 1, explanation: "Stridor is a high-pitched sound of upper-airway obstruction and is a medical emergency." },
        { id: "msn-t-resp-q3", subject: "adult-health", stem: "Which inhaler is the 'reliever' used for rapid relief of asthma symptoms?", options: ["Inhaled corticosteroid","Short-acting beta-2 agonist (salbutamol)","Long-acting muscarinic antagonist","Leukotriene receptor antagonist"], answer: 1, explanation: "Short-acting beta-2 agonists such as salbutamol relax bronchial smooth muscle quickly to relieve acute symptoms." },
        { id: "msn-t-resp-q4", subject: "adult-health", stem: "A 'silent chest' in a patient with acute severe asthma indicates:", options: ["The attack has resolved","Minimal air movement and impending respiratory failure","A normal finding in asthma","Successful bronchodilation"], answer: 1, explanation: "A silent chest means air is barely moving — an ominous sign of life-threatening asthma needing urgent help." },
        { id: "msn-t-resp-q5", subject: "adult-health", stem: "The single most important intervention to slow COPD progression is:", options: ["Daily antibiotics","Smoking cessation","Bed rest","High-flow oxygen at all times"], answer: 1, explanation: "Stopping smoking is the most effective measure to slow the decline in lung function in COPD." },
        { id: "msn-t-resp-q6", subject: "adult-health", stem: "Which precaution is required when caring for a patient with active pulmonary tuberculosis?", options: ["Contact precautions only","Droplet precautions with a surgical mask","Airborne precautions with an N95 respirator","No special precautions"], answer: 2, explanation: "TB spreads by airborne droplet nuclei, requiring airborne precautions and a fitted N95 respirator." },
        { id: "msn-t-resp-q7", subject: "adult-health", stem: "Crackles heard on auscultation usually suggest:", options: ["Narrowed airways","Fluid or secretions in the airways/alveoli","Upper airway obstruction","Pleural inflammation"], answer: 1, explanation: "Crackles (rales) are produced by air passing through fluid or secretions, as in pneumonia or heart failure." },
        { id: "msn-t-resp-q8", subject: "adult-health", stem: "Which position best promotes lung expansion in a breathless patient?", options: ["Supine flat","High-Fowler's (sitting upright)","Trendelenburg","Left lateral"], answer: 1, explanation: "Sitting upright in high-Fowler's position maximizes lung expansion and eases the work of breathing." },
        { id: "msn-t-resp-q9", subject: "adult-health", stem: "DOTS in tuberculosis care refers to:", options: ["A diagnostic blood test","Directly observed treatment, short-course","A type of oxygen mask","A surgical procedure"], answer: 1, explanation: "DOTS (directly observed therapy) supports adherence to the long TB regimen and prevents drug resistance." },
        { id: "msn-t-resp-q10", subject: "adult-health", stem: "Cyanosis as a sign of hypoxia is best described as:", options: ["An early, sensitive sign","A late sign","Unrelated to oxygenation","Only seen in children"], answer: 1, explanation: "Central cyanosis is a late sign of hypoxia; saturation monitoring detects falling oxygen much earlier." }
      ]
    },
    {
      id: "msn-t-endocrine",
      title: "Endocrine Disorders & Diabetes Nursing",
      subject: "adult-health",
      readMinutes: 12,
      summary: "Diabetes types and complications, recognising and treating hypo- and hyperglycaemia, insulin safety, and the basics of thyroid disorders.",
      content: [
        { h: "Diabetes Mellitus — Types", p: "Type 1 diabetes results from autoimmune destruction of pancreatic beta cells — little or no insulin is produced, onset is usually young, and insulin is essential for life. Type 2 diabetes involves insulin resistance with relative deficiency, is linked to obesity and lifestyle, and is managed with diet, exercise, oral agents, and sometimes insulin. Gestational diabetes appears in pregnancy and raises later type 2 risk. Diagnosis: fasting glucose ≥7.0 mmol/L, random ≥11.1, or HbA1c ≥6.5%." },
        { h: "Hypoglycaemia — The Acute Emergency", p: "Blood glucose below 4 mmol/L ('four is the floor'). Causes: too much insulin, missed meals, extra exercise, alcohol. Signs: sweating, trembling, hunger, palpitations, confusion, irritability, and, if untreated, seizures and coma. Treatment of the conscious patient: 15 g of fast-acting carbohydrate (glucose tablets, juice), recheck after 15 minutes, then follow with a longer-acting snack. If unconscious: IM glucagon or IV dextrose — never give anything by mouth to an unconscious patient." },
        { h: "Hyperglycaemia & DKA", p: "Sustained high glucose causes thirst, frequent urination, fatigue, and blurred vision. Diabetic ketoacidosis (mainly type 1) is a life-threatening state of hyperglycaemia, ketosis, and acidosis — signs include deep rapid (Kussmaul) breathing, fruity-smelling breath, dehydration, abdominal pain, and drowsiness. Management: IV fluids first, then insulin infusion, careful potassium replacement, and hourly monitoring. The hyperosmolar hyperglycaemic state (type 2) has very high glucose without significant ketones." },
        { h: "Insulin — Types & Safety", p: "Rapid-acting (e.g., aspart) works within minutes — give with food. Short-acting (regular) starts in about 30 minutes. Intermediate (NPH) and long-acting (glargine) provide background cover. Insulin is a high-alert medication: always use an insulin syringe or pen, check the dose with a second nurse where policy requires, never abbreviate 'units' as 'U', rotate injection sites to prevent lipohypertrophy, and store in-use pens correctly. When mixing, draw up clear (short-acting) before cloudy (NPH) — 'clear before cloudy'." },
        { h: "Long-Term Complications", p: "Chronic high glucose damages blood vessels and nerves. Microvascular: retinopathy (a leading cause of blindness), nephropathy (kidney failure), and neuropathy (loss of sensation, especially feet). Macrovascular: heart attack, stroke, peripheral vascular disease. Diabetic foot care is vital — daily inspection, well-fitting shoes, never walking barefoot, and prompt treatment of any wound, because reduced sensation and poor circulation lead to ulcers and amputation." },
        { h: "Glycaemic Monitoring", p: "Capillary blood glucose gives a real-time reading; HbA1c reflects average glucose over roughly the previous three months and guides long-term control (target individualized, often around 7%). Teach patients self-monitoring, how to keep a log, and the pattern of testing relevant to their treatment. Recognize that illness, steroids, and infection raise glucose, while exercise and missed meals lower it." },
        { h: "Thyroid — Hypothyroidism", p: "An underactive thyroid slows metabolism: fatigue, weight gain, cold intolerance, constipation, dry skin, bradycardia, and low mood. It is confirmed by a high TSH with low thyroid hormones. Treatment is lifelong levothyroxine, taken on an empty stomach, with periodic TSH checks. Myxoedema coma is the rare, severe extreme — hypothermia and reduced consciousness — and is a medical emergency." },
        { h: "Thyroid — Hyperthyroidism", p: "An overactive thyroid speeds metabolism: weight loss despite good appetite, heat intolerance, sweating, tremor, palpitations, anxiety, and sometimes bulging eyes (Graves' disease). It shows a low TSH with high thyroid hormones. Treatment options: anti-thyroid drugs (carbimazole), radioactive iodine, or surgery. 'Thyroid storm' is the dangerous extreme with high fever, tachycardia, and agitation — a medical emergency." },
        { h: "Patient Education & Self-Care", p: "Education is the cornerstone of diabetes care: balanced diet and carbohydrate awareness, regular activity, medication and insulin technique, glucose self-monitoring, sick-day rules (do not stop insulin when ill), and foot care. Teach the patient and family to recognize and treat hypoglycaemia. Empowered, well-informed patients have far fewer complications and emergency admissions." }
      ],
      checkIn: [
        { id: "msn-t-endo-q1", subject: "adult-health", stem: "The immediate treatment for a conscious patient with hypoglycaemia is:", options: ["A long-acting insulin dose","15 g of fast-acting carbohydrate","IV antibiotics","Nil by mouth and observe"], answer: 1, explanation: "Give 15 g of fast-acting carbohydrate, recheck in 15 minutes, then a longer-acting snack — the '15/15 rule'." },
        { id: "msn-t-endo-q2", subject: "adult-health", stem: "Which type of diabetes always requires insulin for survival?", options: ["Type 2","Gestational","Type 1","Pre-diabetes"], answer: 2, explanation: "Type 1 diabetes results from near-total loss of insulin production, so exogenous insulin is essential for life." },
        { id: "msn-t-endo-q3", subject: "adult-health", stem: "Deep, rapid (Kussmaul) breathing with fruity-smelling breath suggests:", options: ["Hypoglycaemia","Diabetic ketoacidosis","Hypothyroidism","Thyroid storm"], answer: 1, explanation: "Kussmaul breathing and a fruity (acetone) odour are classic signs of diabetic ketoacidosis." },
        { id: "msn-t-endo-q4", subject: "adult-health", stem: "When mixing short-acting and NPH insulin in one syringe, the nurse should:", options: ["Draw up cloudy (NPH) first","Draw up clear (short-acting) first","Shake both vials vigorously","Never mix insulins"], answer: 1, explanation: "Draw clear before cloudy to avoid contaminating the short-acting vial with intermediate insulin." },
        { id: "msn-t-endo-q5", subject: "adult-health", stem: "An unconscious hypoglycaemic patient should receive:", options: ["Oral glucose gel","Glucose tablets by mouth","IM glucagon or IV dextrose","A normal meal"], answer: 2, explanation: "Never give oral substances to an unconscious patient; treat with IM glucagon or IV dextrose." },
        { id: "msn-t-endo-q6", subject: "adult-health", stem: "HbA1c primarily reflects average blood glucose over approximately:", options: ["The past 24 hours","The past week","The past 3 months","The past year"], answer: 2, explanation: "HbA1c reflects average glycaemia over roughly the preceding 2–3 months." },
        { id: "msn-t-endo-q7", subject: "adult-health", stem: "Which finding is typical of hypothyroidism?", options: ["Weight loss and heat intolerance","Fatigue, weight gain, and cold intolerance","Tremor and palpitations","Bulging eyes"], answer: 1, explanation: "An underactive thyroid slows metabolism, causing fatigue, weight gain, and cold intolerance." },
        { id: "msn-t-endo-q8", subject: "adult-health", stem: "The first priority in managing diabetic ketoacidosis is:", options: ["IV insulin push","IV fluid replacement","Oral hypoglycaemics","Potassium-free fluids"], answer: 1, explanation: "DKA management begins with IV fluid resuscitation, followed by an insulin infusion and careful potassium replacement." },
        { id: "msn-t-endo-q9", subject: "adult-health", stem: "Key advice for diabetic foot care includes:", options: ["Walking barefoot to toughen the skin","Daily foot inspection and well-fitting shoes","Soaking feet in hot water daily","Ignoring small cuts"], answer: 1, explanation: "Daily inspection, proper footwear, and prompt wound care prevent ulcers and amputation in diabetic neuropathy." },
        { id: "msn-t-endo-q10", subject: "adult-health", stem: "Why is insulin classed as a 'high-alert' medication?", options: ["It is very cheap","Dosing errors can cause serious harm or death","It has no side effects","It is given only orally"], answer: 1, explanation: "Insulin errors can cause severe hypo- or hyperglycaemia, so it requires extra safety checks." }
      ]
    },
    {
      id: "msn-t-child-health",
      title: "Child Health, Growth & Immunization",
      subject: "child-health",
      readMinutes: 10,
      summary: "Growth and development milestones, paediatric vital sign ranges, immunization principles, IMCI danger signs, and managing childhood diarrhoea.",
      content: [
        { h: "Growth & Development", p: "Growth (increase in size) and development (gaining function) follow a predictable, head-to-toe (cephalocaudal) and centre-to-periphery (proximodistal) pattern. Weight roughly doubles by about 5 months and triples by one year. Key milestones: social smile by 6–8 weeks, sitting unsupported by about 6 months, first words and pincer grasp by around one year, walking by 12–15 months. Persistent failure to meet milestones warrants developmental assessment." },
        { h: "Paediatric Vital Signs", p: "Children's normal ranges differ from adults and shift with age. Newborn: heart rate 100–160, respiration 30–60. Infant: heart rate 90–160, respiration 25–50. Toddler: heart rate 80–130, respiration 20–30. School-age: heart rate 70–110, respiration 18–24. Blood pressure is lower than in adults and rises with age — always use an appropriately sized cuff. Tachypnoea and tachycardia are early, important warning signs in a sick child." },
        { h: "Immunization — Principles", p: "Vaccines prime the immune system to recognize and fight specific organisms, protecting the individual and, through herd immunity, the community. Live vaccines (BCG, measles, OPV) are generally avoided in significant immunodeficiency and pregnancy. Cold chain — keeping vaccines within a safe temperature range from manufacture to administration — is essential; a broken cold chain renders vaccines ineffective. Record every dose and counsel parents on mild expected reactions such as low fever or local soreness." },
        { h: "The EPI Schedule (Bangladesh)", p: "The Expanded Programme on Immunization protects against major childhood diseases. At birth: BCG and OPV-0. At 6, 10, and 14 weeks: pentavalent (DPT-HepB-Hib), OPV, and PCV, with IPV given alongside. Measles–Rubella (MR) is given at 9 months and again at 15 months. Tetanus-containing vaccine is given to women of child-bearing age to prevent maternal and neonatal tetanus. Knowing the schedule and catch-up rules is core community-health knowledge." },
        { h: "IMCI Danger Signs", p: "Integrated Management of Childhood Illness teaches rapid identification of seriously ill children. General danger signs requiring urgent referral: inability to drink or breastfeed, vomiting everything, convulsions, and lethargy or unconsciousness. Then assess the main symptoms — cough/difficult breathing, diarrhoea, fever, ear problems — and nutritional status. Fast breathing and chest indrawing point to pneumonia. IMCI classifies children into colour-coded categories to guide treatment and referral." },
        { h: "Diarrhoea & Dehydration", p: "Diarrhoea is a leading cause of child death, largely through dehydration. Assess hydration: sunken eyes, dry mouth, reduced skin turgor, lethargy, and reduced urine. Oral rehydration solution (ORS) is the cornerstone of treatment for mild to moderate dehydration; severe dehydration needs IV fluids. Zinc supplementation for 10–14 days reduces severity and duration. Continue feeding and breastfeeding throughout. Teach caregivers ORS preparation and danger signs." },
        { h: "Childhood Nutrition", p: "Exclusive breastfeeding is recommended for the first 6 months — no water, no other foods — because breast milk provides ideal nutrition and immune protection. Complementary feeding begins at 6 months alongside continued breastfeeding. Watch for malnutrition: marasmus (severe wasting) and kwashiorkor (oedema, often with a swollen abdomen and skin/hair changes). Growth monitoring with a growth chart detects faltering early, when intervention is most effective." },
        { h: "Family-Centred & Atraumatic Care", p: "Care of a child is care of a family. Involve parents, explain procedures in age-appropriate language, allow comfort objects, and minimize pain and fear (atraumatic care) — for example, clustering blood tests and using distraction. Hospitalized children regress and become anxious; familiar routines and a parent's presence ease this. Always weigh children accurately, as paediatric drug doses are calculated per kilogram of body weight." }
      ],
      checkIn: [
        { id: "msn-t-ch2-q1", subject: "child-health", stem: "An infant's birth weight normally triples by approximately:", options: ["3 months","6 months","12 months","24 months"], answer: 2, explanation: "Birth weight roughly doubles by ~5 months and triples by about one year." },
        { id: "msn-t-ch2-q2", subject: "child-health", stem: "The normal heart rate range for a newborn is approximately:", options: ["60–100/min","70–110/min","100–160/min","40–60/min"], answer: 2, explanation: "A newborn's normal heart rate is about 100–160 beats per minute, faster than an adult's." },
        { id: "msn-t-ch2-q3", subject: "child-health", stem: "In the Bangladesh EPI schedule, BCG is given at:", options: ["Birth","6 weeks","9 months","15 months"], answer: 0, explanation: "BCG and OPV-0 are given at birth in the EPI schedule." },
        { id: "msn-t-ch2-q4", subject: "child-health", stem: "Which is a general IMCI danger sign requiring urgent referral?", options: ["Mild runny nose","Inability to drink or breastfeed","Slight irritability","A single loose stool"], answer: 1, explanation: "Inability to drink/breastfeed, vomiting everything, convulsions, and lethargy/unconsciousness are general danger signs." },
        { id: "msn-t-ch2-q5", subject: "child-health", stem: "The cornerstone of treatment for mild-to-moderate dehydration from diarrhoea is:", options: ["IV antibiotics","Oral rehydration solution (ORS)","Anti-diarrhoeal drugs","Withholding all fluids"], answer: 1, explanation: "ORS replaces lost fluid and electrolytes and is the first-line treatment for mild-to-moderate dehydration." },
        { id: "msn-t-ch2-q6", subject: "child-health", stem: "Exclusive breastfeeding is recommended for the first:", options: ["3 months","6 months","9 months","12 months"], answer: 1, explanation: "WHO recommends exclusive breastfeeding for the first 6 months, then complementary feeding with continued breastfeeding." },
        { id: "msn-t-ch2-q7", subject: "child-health", stem: "Maintaining the 'cold chain' for vaccines refers to:", options: ["Keeping the child cool after vaccination","Storing vaccines within a safe temperature range","Giving vaccines only in winter","Cooling the injection site"], answer: 1, explanation: "The cold chain keeps vaccines at safe temperatures from manufacture to use; breaking it makes them ineffective." },
        { id: "msn-t-ch2-q8", subject: "child-health", stem: "Kwashiorkor is a form of malnutrition characterized by:", options: ["Severe wasting with no oedema","Oedema with a swollen abdomen","Obesity","Normal growth"], answer: 1, explanation: "Kwashiorkor features oedema, a swollen abdomen, and skin/hair changes; marasmus features severe wasting." },
        { id: "msn-t-ch2-q9", subject: "child-health", stem: "Zinc supplementation in childhood diarrhoea is given to:", options: ["Stop the diarrhoea instantly","Reduce severity and duration of the illness","Replace breastfeeding","Treat fever"], answer: 1, explanation: "Zinc for 10–14 days reduces the severity and duration of diarrhoea and the risk of future episodes." },
        { id: "msn-t-ch2-q10", subject: "child-health", stem: "Paediatric medication doses are most commonly calculated based on:", options: ["The child's age in years","Body weight in kilograms","Height alone","A fixed adult dose"], answer: 1, explanation: "Paediatric doses are calculated per kilogram of body weight, so accurate weighing is essential." }
      ]
    },
    {
      id: "msn-t-ethics-leadership",
      title: "Nursing Ethics, Law & Leadership",
      subject: "nursing-mgmt",
      readMinutes: 10,
      summary: "Core ethical principles, informed consent and confidentiality, delegation and prioritization, leadership styles, and quality and safety in nursing management.",
      content: [
        { h: "Core Ethical Principles", p: "Four principles guide nursing decisions. Autonomy: respecting the patient's right to make their own informed choices. Beneficence: acting in the patient's best interest. Non-maleficence: 'first, do no harm'. Justice: treating patients fairly and distributing care and resources equitably. Two principles often conflict — for example, a competent patient's autonomy to refuse treatment versus the nurse's wish to do good. Ethical reasoning is the skill of weighing them thoughtfully." },
        { h: "Informed Consent", p: "Valid consent has three elements: it must be informed (the patient understands the purpose, benefits, risks, and alternatives), voluntary (free from coercion), and given by a person with capacity to decide. The nurse's role is often to confirm understanding, witness, and advocate — not to obtain consent for a procedure they are not performing. A competent adult may refuse even life-saving treatment. In emergencies where the patient cannot consent, care proceeds under the principle of necessity." },
        { h: "Confidentiality & Privacy", p: "Patients' health information is confidential and shared only on a need-to-know basis for their care. Breaches — discussing patients in lifts, leaving records visible, or posting on social media — damage trust and may be unlawful. Confidentiality has limits: disclosure may be justified to protect the patient or others from serious harm, or where the law requires it (e.g., notifiable diseases). When in doubt, seek senior advice before disclosing." },
        { h: "Accountability & Scope of Practice", p: "Nurses are professionally and legally accountable for their own actions and omissions. Practice within your competence and scope; if asked to do something beyond it, say so and seek support. Documentation is a legal record — accurate, timely, signed, and never falsified; 'not documented, not done'. Negligence requires a duty of care, a breach of the expected standard, and resulting harm. Good practice and honest records are the best protection for patients and nurses alike." },
        { h: "Delegation", p: "Delegation is entrusting a task to another while retaining accountability for the outcome. Use the 'five rights': the right task, the right circumstances, the right person, the right direction/communication, and the right supervision. Delegate tasks that are routine and within the delegatee's competence; do not delegate assessment, evaluation, or clinical judgement. Clear instructions and follow-up are essential — delegation is not abandonment of responsibility." },
        { h: "Prioritization", p: "When everything seems urgent, prioritize systematically. Use ABC — airway, breathing, circulation — first. Maslow's hierarchy helps: physiological needs before psychological. Distinguish actual problems from potential ones, and unstable patients from stable ones. Frameworks such as 'acute before chronic' and 'unexpected before expected' guide quick decisions. The skill of prioritization is heavily tested in nursing exams through 'what does the nurse do first?' questions." },
        { h: "Leadership & Management Styles", p: "Leadership influences a team toward goals. Autocratic leaders decide alone — useful in emergencies. Democratic leaders involve the team — good for engagement and complex decisions. Laissez-faire leaders give freedom — suits skilled, motivated teams but risks drift. Transformational leaders inspire and develop people; transactional leaders manage through structure and rewards. Effective nurse leaders flex their style to the situation and people in front of them." },
        { h: "Quality, Safety & Change", p: "Nursing management aims for safe, high-quality care. Quality improvement uses cycles such as Plan-Do-Study-Act to test and refine changes. A 'just culture' encourages reporting of errors and near-misses to learn rather than blame, improving safety. Clinical audit measures practice against standards and closes the loop with action. Managing change well — explaining the why, involving staff, and supporting them through it — turns good ideas into lasting improvement." }
      ],
      checkIn: [
        { id: "msn-t-eth-q1", subject: "nursing-mgmt", stem: "The ethical principle of 'autonomy' refers to:", options: ["Acting in the patient's best interest","Respecting the patient's right to make their own informed choices","Distributing resources fairly","Doing no harm"], answer: 1, explanation: "Autonomy is respect for the patient's right to make their own informed decisions about care." },
        { id: "msn-t-eth-q2", subject: "nursing-mgmt", stem: "'First, do no harm' is the principle of:", options: ["Beneficence","Justice","Non-maleficence","Autonomy"], answer: 2, explanation: "Non-maleficence is the duty to avoid causing harm to the patient." },
        { id: "msn-t-eth-q3", subject: "nursing-mgmt", stem: "A competent adult patient refuses a life-saving blood transfusion. The nurse should:", options: ["Give it anyway","Respect the informed refusal and inform the team","Ignore the patient's wishes","Wait until the patient is unconscious"], answer: 1, explanation: "A competent adult has the right to refuse treatment; autonomy must be respected and the team informed." },
        { id: "msn-t-eth-q4", subject: "nursing-mgmt", stem: "Which task is appropriate to delegate to a nursing assistant?", options: ["Initial patient assessment","Routine vital signs on a stable patient","Evaluating response to treatment","Developing the care plan"], answer: 1, explanation: "Routine tasks within competence (e.g., vital signs on a stable patient) may be delegated; assessment and evaluation may not." },
        { id: "msn-t-eth-q5", subject: "nursing-mgmt", stem: "Using the ABC framework, the nurse's first priority is always:", options: ["Circulation","Breathing","Airway","Comfort"], answer: 2, explanation: "Airway comes first in the ABC prioritization sequence, then breathing, then circulation." },
        { id: "msn-t-eth-q6", subject: "nursing-mgmt", stem: "The principle 'not documented, not done' emphasizes that:", options: ["Documentation is optional","Care must be recorded accurately as a legal record","Verbal reports are enough","Only doctors document"], answer: 1, explanation: "Accurate, timely documentation is a legal record; care that is not recorded may be treated as not provided." },
        { id: "msn-t-eth-q7", subject: "nursing-mgmt", stem: "An autocratic leadership style is MOST appropriate in:", options: ["A long-term quality project","An emergency requiring rapid decisions","A staff brainstorming session","Routine team building"], answer: 1, explanation: "Autocratic, directive leadership is useful in emergencies where rapid, clear decisions are needed." },
        { id: "msn-t-eth-q8", subject: "nursing-mgmt", stem: "When delegating, retaining accountability for the outcome means the nurse:", options: ["Is no longer responsible once the task is handed over","Remains responsible for ensuring the task is done safely","Must perform the task personally","Cannot delegate at all"], answer: 1, explanation: "Delegation transfers the task but not accountability; the delegating nurse must supervise and ensure safe completion." },
        { id: "msn-t-eth-q9", subject: "nursing-mgmt", stem: "A 'just culture' in patient safety encourages staff to:", options: ["Hide errors to avoid blame","Report errors and near-misses to learn from them","Punish all mistakes equally","Avoid documentation"], answer: 1, explanation: "A just culture promotes open reporting of errors and near-misses so the system can learn and improve." },
        { id: "msn-t-eth-q10", subject: "nursing-mgmt", stem: "The Plan-Do-Study-Act (PDSA) cycle is a tool for:", options: ["Disciplining staff","Testing and refining quality improvements","Calculating drug doses","Scheduling shifts"], answer: 1, explanation: "PDSA is a structured cycle for testing small changes and refining them to improve quality of care." }
      ]
    }
  ];

  /* ============================================================
     QUESTION BANK
     Re-uses the 70 questions from the original msn-data.js
     plus additional questions across all MSN subjects.
     ============================================================ */
  const questionBank = [
    /* ---------- FUNDAMENTAL NURSING (30 from prior bank) ---------- */
    { id: "fn-001", subject: "fundamental-nursing", stem: "What is the normal range of adult oral body temperature in degrees Celsius?", options: ["35.0 - 36.0 °C","36.5 - 37.5 °C","37.5 - 38.5 °C","38.0 - 39.0 °C"], answer: 1, explanation: "Normal adult oral temperature ranges from 36.5 °C to 37.5 °C." },
    { id: "fn-002", subject: "fundamental-nursing", stem: "The nurse is preparing to take a patient's pulse. Which artery is most commonly used for routine pulse assessment in adults?", options: ["Carotid artery","Radial artery","Brachial artery","Femoral artery"], answer: 1, explanation: "The radial artery at the wrist is the most accessible and commonly used site for routine pulse assessment." },
    { id: "fn-003", subject: "fundamental-nursing", stem: "Which of the following is the FIRST link in the chain of infection?", options: ["Reservoir","Infectious agent","Portal of exit","Susceptible host"], answer: 1, explanation: "The chain of infection begins with the infectious agent." },
    { id: "fn-004", subject: "fundamental-nursing", stem: "The most effective method of preventing the spread of infection in a hospital setting is:", options: ["Wearing gloves at all times","Hand hygiene","Using disinfectants on surfaces","Isolating all patients"], answer: 1, explanation: "Hand hygiene is universally recognized as the single most effective measure to prevent healthcare-associated infections." },
    { id: "fn-005", subject: "fundamental-nursing", stem: "A patient's blood pressure is recorded as 140/90 mmHg. This reading is classified as:", options: ["Normal","Elevated","Stage 1 Hypertension","Stage 2 Hypertension"], answer: 3, explanation: "Per ACC/AHA 2017, a reading of ≥140/90 mmHg is Stage 2 hypertension (Stage 1 is 130–139/80–89 mmHg)." },
    { id: "fn-006", subject: "fundamental-nursing", stem: "When transferring a patient from bed to wheelchair, the chair should be positioned:", options: ["At a 90-degree angle to the bed","At a 45-degree angle on the patient's stronger side","Parallel to the foot of the bed","Facing away from the bed"], answer: 1, explanation: "45-degree angle on stronger side allows safe pivot transfer." },
    { id: "fn-007", subject: "fundamental-nursing", stem: "Which position is BEST for a patient in acute respiratory distress?", options: ["Supine","Trendelenburg","High Fowler's (semi-sitting upright)","Prone"], answer: 2, explanation: "High Fowler's maximizes lung expansion." },
    { id: "fn-008", subject: "fundamental-nursing", stem: "Sterile technique is required when:", options: ["Administering oral medication","Inserting a urinary catheter","Taking a blood pressure","Feeding a patient"], answer: 1, explanation: "Catheterization breaches a sterile cavity and requires aseptic technique." },
    { id: "fn-009", subject: "fundamental-nursing", stem: "The five rights of medication administration include all EXCEPT:", options: ["Right patient","Right drug","Right dose","Right cost"], answer: 3, explanation: "The five rights: patient, drug, dose, route, time." },
    { id: "fn-010", subject: "fundamental-nursing", stem: "A pressure ulcer that presents as intact skin with non-blanchable redness is:", options: ["Stage 1","Stage 2","Stage 3","Stage 4"], answer: 0, explanation: "Stage 1: intact skin with non-blanchable erythema." },
    { id: "fn-011", subject: "fundamental-nursing", stem: "The most appropriate site for an IM injection in an adult is the:", options: ["Deltoid","Ventrogluteal","Dorsogluteal","Vastus lateralis"], answer: 1, explanation: "Ventrogluteal: large muscle, low neurovascular risk — preferred in adults." },
    { id: "fn-012", subject: "fundamental-nursing", stem: "Normal urine output for an adult is approximately:", options: ["10-20 mL/hr","30-50 mL/hr","100-150 mL/hr","200-300 mL/hr"], answer: 1, explanation: "Normal adult urine output is roughly 1 mL/kg/hr; oliguria <30 mL/hr." },
    { id: "fn-013", subject: "fundamental-nursing", stem: "Which nursing diagnosis takes priority for an unconscious postoperative patient?", options: ["Acute pain","Risk for infection","Ineffective airway clearance","Anxiety"], answer: 2, explanation: "ABC: airway always takes priority." },
    { id: "fn-014", subject: "fundamental-nursing", stem: "Nursing documentation should be:", options: ["Done at the end of the shift only","Factual, accurate, complete, and timely","Limited to abnormal findings","Written in pencil"], answer: 1, explanation: "FACT: factual, accurate, complete, timely." },
    { id: "fn-015", subject: "fundamental-nursing", stem: "When obtaining informed consent, the nurse's primary role is to:", options: ["Explain the procedure in detail","Obtain the patient's signature","Witness the signature and ensure understanding","Discuss alternatives"], answer: 2, explanation: "Physician explains; nurse witnesses signature and confirms understanding." },
    { id: "fn-016", subject: "fundamental-nursing", stem: "A sign of dehydration is:", options: ["Bounding pulse","Increased urine output","Dry mucous membranes","Bradycardia"], answer: 2, explanation: "Dry mucous membranes, decreased UOP, tachycardia, poor turgor." },
    { id: "fn-017", subject: "fundamental-nursing", stem: "An IV site is red, warm, and tender. The most likely complication is:", options: ["Infiltration","Phlebitis","Air embolism","Speed shock"], answer: 1, explanation: "Phlebitis: vein inflammation — redness, warmth, tenderness along the vein." },
    { id: "fn-018", subject: "fundamental-nursing", stem: "Maslow's hierarchy places which at the most basic level?", options: ["Self-esteem","Love and belonging","Physiological needs","Self-actualization"], answer: 2, explanation: "Physiological needs form the base of Maslow's pyramid." },
    { id: "fn-019", subject: "fundamental-nursing", stem: "The most important factor in pain assessment is:", options: ["Grimacing","Vital sign changes","The patient's self-report","Nurse's clinical judgment"], answer: 2, explanation: "Pain is whatever the patient says it is — self-report is the gold standard." },
    { id: "fn-020", subject: "fundamental-nursing", stem: "Correct technique when removing soiled gloves:", options: ["Pull from the fingertips outward","Grasp outside one glove, peel inside-out, slip fingers under the second","Rinse first","Remove both simultaneously"], answer: 1, explanation: "Pinch outside-at-wrist, peel inside-out, then slip ungloved fingers under second glove." },
    { id: "fn-021", subject: "fundamental-nursing", stem: "After delegation, the registered nurse remains responsible for:", options: ["Nothing","Documentation only","Supervision and outcomes","Only if there is an error"], answer: 2, explanation: "RN retains accountability for assessment, supervision, and outcomes after delegating." },
    { id: "fn-022", subject: "fundamental-nursing", stem: "Standard precautions should be used:", options: ["Only with infected patients","Only with bloodborne disease","With every patient, every encounter","Only in isolation rooms"], answer: 2, explanation: "Standard precautions apply to ALL patients regardless of diagnosis." },
    { id: "fn-023", subject: "fundamental-nursing", stem: "The first step of the nursing process is:", options: ["Diagnosis","Planning","Assessment","Evaluation"], answer: 2, explanation: "ADPIE: Assessment, Diagnosis, Planning, Implementation, Evaluation." },
    { id: "fn-024", subject: "fundamental-nursing", stem: "An advance directive:", options: ["Authorizes organ donation only","Specifies patient wishes for end-of-life care","Releases the hospital from liability","Names the primary physician"], answer: 1, explanation: "Specifies preferences when the patient cannot communicate (living will, durable POA for healthcare)." },
    { id: "fn-025", subject: "fundamental-nursing", stem: "A cane should be held:", options: ["On the affected (weaker) side","On the unaffected (stronger) side","In the dominant hand","In front"], answer: 1, explanation: "Cane on the strong side; advanced with the affected leg for wider base of support." },
    { id: "fn-026", subject: "fundamental-nursing", stem: "Greatest risk of bed rest:", options: ["Hypertension","DVT","Hyperthermia","Hyperglycemia"], answer: 1, explanation: "Immobility → venous stasis → DVT." },
    { id: "fn-027", subject: "fundamental-nursing", stem: "Coarse, low-pitched snoring or gurgling sounds that often clear with coughing are:", options: ["Wheezes","Fine crackles","Rhonchi","Stridor"], answer: 2, explanation: "Rhonchi are coarse, low-pitched, snoring/gurgling sounds from secretions in the larger airways that often clear with coughing." },
    { id: "fn-028", subject: "fundamental-nursing", stem: "Therapeutic communication uses:", options: ["Giving advice","'Why' questions","Active listening and open-ended questions","False reassurance"], answer: 2, explanation: "Active listening, open-ended questions, silence, reflection, validation." },
    { id: "fn-029", subject: "fundamental-nursing", stem: "Before digoxin, the nurse must check the patient's:", options: ["BP","Respiratory rate","Apical pulse for one full minute","Temperature"], answer: 2, explanation: "Hold if apical pulse <60 bpm (adults)." },
    { id: "fn-030", subject: "fundamental-nursing", stem: "A patient refuses prescribed medication. The nurse should:", options: ["Administer anyway","Document refusal and notify physician","Hide in food","Insist"], answer: 1, explanation: "Patients have the right to refuse. Document and notify prescriber." },

    /* ---------- ANATOMY (8) ---------- */
    { id: "an-001", subject: "anatomy", stem: "The functional unit of the kidney is the:", options: ["Glomerulus","Nephron","Loop of Henle","Bowman's capsule"], answer: 1, explanation: "The nephron is the functional unit; includes glomerulus, Bowman's capsule, tubules, and loop of Henle." },
    { id: "an-002", subject: "anatomy", stem: "Which chamber pumps oxygenated blood to systemic circulation?", options: ["Right atrium","Right ventricle","Left atrium","Left ventricle"], answer: 3, explanation: "Left ventricle → aorta → systemic circulation." },
    { id: "an-003", subject: "anatomy", stem: "How many pairs of cranial nerves originate from the brain?", options: ["10","12","14","31"], answer: 1, explanation: "12 pairs of cranial nerves." },
    { id: "an-004", subject: "anatomy", stem: "The largest organ of the human body is the:", options: ["Liver","Lungs","Skin","Small intestine"], answer: 2, explanation: "Skin: ~1.5-2 m² in adults." },
    { id: "an-005", subject: "anatomy", stem: "Insulin is secreted by which pancreatic cells?", options: ["Alpha","Beta","Delta","Acinar"], answer: 1, explanation: "Beta cells of the islets of Langerhans secrete insulin." },
    { id: "an-006", subject: "anatomy", stem: "The longest bone in the human body is the:", options: ["Tibia","Humerus","Femur","Fibula"], answer: 2, explanation: "Femur (thigh bone) is the longest, strongest, and heaviest bone." },
    { id: "an-007", subject: "anatomy", stem: "Normal adult total blood volume is approximately:", options: ["2–3 litres","3–4 litres","5–6 litres","8–10 litres"], answer: 2, explanation: "Adult blood volume is approximately 5–6 L (~7-8% of body weight)." },
    { id: "an-008", subject: "anatomy", stem: "The brain region responsible for balance and coordination is the:", options: ["Cerebrum","Cerebellum","Medulla","Hypothalamus"], answer: 1, explanation: "Cerebellum coordinates voluntary movement, balance, and posture." },

    /* ---------- NUTRITION (8) ---------- */
    { id: "nu-001", subject: "nutrition", stem: "Vitamin essential for blood clotting:", options: ["Vitamin A","Vitamin C","Vitamin K","Vitamin D"], answer: 2, explanation: "Vitamin K is required for synthesis of clotting factors II, VII, IX, X." },
    { id: "nu-002", subject: "nutrition", stem: "Marasmus is a deficiency of:", options: ["Protein only","Calories and protein","Iron","Vitamin D"], answer: 1, explanation: "Marasmus: severe protein-energy malnutrition (calorie + protein deficit)." },
    { id: "nu-003", subject: "nutrition", stem: "Richest dietary source of vitamin C is:", options: ["Milk","Egg yolk","Citrus fruits and amla","Red meat"], answer: 2, explanation: "Citrus fruits, amla, guava, and green leafy vegetables are rich in vitamin C." },
    { id: "nu-004", subject: "nutrition", stem: "A patient with chronic kidney disease should restrict:", options: ["Carbohydrates","Potassium and phosphorus","Vitamin C","Fiber"], answer: 1, explanation: "CKD diet: restrict K, P, Na, and protein." },
    { id: "nu-005", subject: "nutrition", stem: "1 gram of fat provides:", options: ["4 kcal","7 kcal","9 kcal","12 kcal"], answer: 2, explanation: "Fat: 9 kcal/g. Protein/CHO: 4 kcal/g. Alcohol: 7 kcal/g." },
    { id: "nu-006", subject: "nutrition", stem: "Kwashiorkor is primarily caused by deficiency of:", options: ["Protein","Iodine","Calcium","Vitamin A"], answer: 0, explanation: "Kwashiorkor: protein deficiency with adequate calories — edema, hair changes, fatty liver." },
    { id: "nu-007", subject: "nutrition", stem: "Iron absorption is enhanced by:", options: ["Tea","Calcium","Vitamin C","Coffee"], answer: 2, explanation: "Vitamin C converts ferric iron to absorbable ferrous form." },
    { id: "nu-008", subject: "nutrition", stem: "Recommended daily protein intake for healthy adult (g/kg):", options: ["0.4","0.8","1.5","2.5"], answer: 1, explanation: "WHO RDA: 0.8 g/kg/day for healthy adults. Higher for pregnancy, lactation, athletes." },

    /* ---------- MICROBIOLOGY (6) ---------- */
    { id: "mb-001", subject: "microbiology", stem: "Causative organism of tuberculosis:", options: ["Streptococcus pneumoniae","Mycobacterium tuberculosis","Staphylococcus aureus","Klebsiella pneumoniae"], answer: 1, explanation: "M. tuberculosis — acid-fast bacillus." },
    { id: "mb-002", subject: "microbiology", stem: "Which is NOT a method of sterilization?", options: ["Autoclaving","Dry heat oven","Boiling at 100°C","Ethylene oxide"], answer: 2, explanation: "Boiling at 100°C is disinfection — does not kill spores." },
    { id: "mb-003", subject: "microbiology", stem: "Hepatitis B virus transmission:", options: ["Fecal-oral","Respiratory droplets","Blood and body fluids","Insect vectors"], answer: 2, explanation: "HBV: blood, sexual contact, vertical transmission." },
    { id: "mb-004", subject: "microbiology", stem: "Gram-positive bacteria stain:", options: ["Pink","Purple/violet","Blue","Red"], answer: 1, explanation: "Gram+ retain crystal violet → purple. Gram− appear pink after counterstain." },
    { id: "mb-005", subject: "microbiology", stem: "Malaria is caused by:", options: ["A bacterium","A virus","A protozoan","A fungus"], answer: 2, explanation: "Plasmodium species — protozoan, transmitted by Anopheles mosquito." },
    { id: "mb-006", subject: "microbiology", stem: "The single most important measure to prevent surgical site infection is:", options: ["Prophylactic antibiotics for 7 days","Proper hand and surgical-field antisepsis","Shaving the site immediately before surgery","Sterilising the room daily"], answer: 1, explanation: "Surgical hand antisepsis + appropriate skin prep are foundational. Avoid pre-op shaving (microabrasions)." },

    /* ---------- PHARMACOLOGY (6) ---------- */
    { id: "ph-001", subject: "pharmacology", stem: "Antidote for warfarin overdose:", options: ["Protamine sulfate","Vitamin K","Naloxone","Flumazenil"], answer: 1, explanation: "Vitamin K reverses warfarin. Protamine reverses heparin." },
    { id: "ph-002", subject: "pharmacology", stem: "A patient on furosemide should be monitored for:", options: ["Hyperkalemia","Hypokalemia","Hypernatremia","Hyperglycemia"], answer: 1, explanation: "Loop diuretics waste potassium → hypokalemia." },
    { id: "ph-003", subject: "pharmacology", stem: "Most rapid onset route:", options: ["Oral","Subcutaneous","Intramuscular","Intravenous"], answer: 3, explanation: "IV → direct bloodstream → immediate onset." },
    { id: "ph-004", subject: "pharmacology", stem: "Aspirin in children with viral illness risks:", options: ["Reye's syndrome","Cushing's","Marfan","Down"], answer: 0, explanation: "Reye's: encephalopathy + liver failure." },
    { id: "ph-005", subject: "pharmacology", stem: "Therapeutic digoxin level:", options: ["0.1–0.5 ng/mL","0.5–2.0 ng/mL","2.5–4.0 ng/mL","5.0–7.0 ng/mL"], answer: 1, explanation: "0.5–2.0 ng/mL therapeutic; >2.0 toxic." },
    { id: "ph-006", subject: "pharmacology", stem: "Opioid overdose is reversed with:", options: ["Flumazenil","Naloxone","N-acetylcysteine","Atropine"], answer: 1, explanation: "Naloxone is a competitive μ-opioid receptor antagonist." },

    /* ---------- ADULT HEALTH (8) ---------- */
    { id: "ah-001", subject: "adult-health", stem: "First-line ECG sign of acute STEMI:", options: ["T-wave inversion","ST-segment elevation in contiguous leads","Q-wave only","Prolonged QT"], answer: 1, explanation: "ST elevation ≥1 mm in ≥2 contiguous leads = STEMI." },
    { id: "ah-002", subject: "adult-health", stem: "Fasting plasma glucose diagnostic of diabetes:", options: ["≥100 mg/dL","≥126 mg/dL","≥140 mg/dL","≥200 mg/dL"], answer: 1, explanation: "ADA: FPG ≥126 mg/dL on two occasions diagnoses DM." },
    { id: "ah-003", subject: "adult-health", stem: "Cushing's triad of raised ICP:", options: ["Hypertension, bradycardia, irregular respiration","Hypotension, tachycardia, tachypnea","Fever, rash, joint pain","Pallor, sweating, hypotension"], answer: 0, explanation: "Cushing's triad: hypertension (widened pulse pressure), bradycardia, irregular respirations — late sign of ↑ICP." },
    { id: "ah-004", subject: "adult-health", stem: "Hallmark of pulmonary embolism:", options: ["Bradycardia","Sudden dyspnea and pleuritic chest pain","Productive cough","Hypothermia"], answer: 1, explanation: "Sudden-onset dyspnea, pleuritic chest pain, tachycardia, hypoxia." },
    { id: "ah-005", subject: "adult-health", stem: "Hba1c target for most adults with diabetes:", options: ["<5.7%","<6.5%","<7.0%","<8.5%"], answer: 2, explanation: "ADA: HbA1c <7% is the general target for most non-pregnant adults." },
    { id: "ah-006", subject: "adult-health", stem: "Glasgow Coma Scale total range:", options: ["0–10","3–15","5–25","10–30"], answer: 1, explanation: "GCS scores Eye (1–4) + Verbal (1–5) + Motor (1–6) = 3 to 15." },
    { id: "ah-007", subject: "adult-health", stem: "First action for unresponsive adult, not breathing normally:", options: ["Open airway","Call for help / activate emergency response, then start CPR","Check pulse for 60 seconds","Give two rescue breaths"], answer: 1, explanation: "AHA: activate emergency response, get AED, begin chest compressions (C-A-B)." },
    { id: "ah-008", subject: "adult-health", stem: "Most common cause of upper GI bleed:", options: ["Esophageal varices","Peptic ulcer disease","Mallory-Weiss tear","Gastric cancer"], answer: 1, explanation: "Peptic ulcer disease accounts for ~50% of upper GI bleeds." },

    /* ---------- CHILD HEALTH (8) ---------- */
    { id: "ch-001", subject: "child-health", stem: "Anterior fontanelle normally closes by:", options: ["3 months","6 months","12-18 months","3 years"], answer: 2, explanation: "Anterior fontanelle: 12–18 months. Posterior: ~2 months." },
    { id: "ch-002", subject: "child-health", stem: "A 6-month-old should weigh approximately:", options: ["Birth weight","1.5× birth weight","2× birth weight","3× birth weight"], answer: 2, explanation: "Double by 6 mo, triple by 12 mo." },
    { id: "ch-003", subject: "child-health", stem: "BCG vaccine protects against:", options: ["Polio","Tuberculosis","Measles","Hepatitis"], answer: 1, explanation: "BCG protects against TB; given at birth in Bangladesh EPI." },
    { id: "ch-004", subject: "child-health", stem: "Exclusive breastfeeding recommended duration:", options: ["3 months","6 months","9 months","12 months"], answer: 1, explanation: "WHO/UNICEF: exclusive breastfeeding for the first 6 months." },
    { id: "ch-005", subject: "child-health", stem: "IM injection site in infants:", options: ["Deltoid","Vastus lateralis (anterolateral thigh)","Dorsogluteal","Ventrogluteal"], answer: 1, explanation: "Vastus lateralis preferred — gluteals underdeveloped in infants." },
    { id: "ch-006", subject: "child-health", stem: "ORS for childhood diarrhea works primarily by:", options: ["Killing pathogens","Coupling sodium and glucose transport to absorb water","Increasing intestinal motility","Replacing potassium"], answer: 1, explanation: "Glucose-sodium co-transport (SGLT-1) drives water absorption — the basis of ORT." },
    { id: "ch-007", subject: "child-health", stem: "Pediatric dose calculation by weight requires knowing:", options: ["Patient's height only","Patient's exact body weight in kg","Patient's age only","Patient's BMI"], answer: 1, explanation: "Pediatric dosing is weight-based (mg/kg) — always confirm current weight." },
    { id: "ch-008", subject: "child-health", stem: "Hallmark sign of severe dehydration in a child:", options: ["Mild thirst","Decreased skin turgor, sunken eyes, lethargy","Normal urine output","Bounding pulse"], answer: 1, explanation: "Severe dehydration: sunken eyes, decreased turgor, lethargy, sunken fontanelle, weak pulse, decreased UOP." },

    /* ---------- PSYCHIATRIC (6) ---------- */
    { id: "ps-001", subject: "psychiatric", stem: "A patient with schizophrenia reports hearing voices. This is:", options: ["Delusion","Auditory hallucination","Illusion","Confabulation"], answer: 1, explanation: "Hallucination: sensory perception without external stimulus." },
    { id: "ps-002", subject: "psychiatric", stem: "First-line mood stabilizer for acute mania:", options: ["Lithium","Diazepam","Sertraline","Fluoxetine"], answer: 0, explanation: "Lithium is the gold-standard mood stabilizer for mania; the other options are a benzodiazepine and antidepressants." },
    { id: "ps-003", subject: "psychiatric", stem: "Positive symptom of schizophrenia:", options: ["Apathy","Flat affect","Hallucinations","Social withdrawal"], answer: 2, explanation: "Positives: hallucinations, delusions, disorganization." },
    { id: "ps-004", subject: "psychiatric", stem: "Best response to a suicidal patient who says 'I won't be a problem anymore':", options: ["'You will feel better tomorrow'","'Are you thinking of harming yourself?'","'Don't talk like that'","'Let's discuss something positive'"], answer: 1, explanation: "Direct questioning is essential for assessment." },
    { id: "ps-005", subject: "psychiatric", stem: "Tardive dyskinesia results from:", options: ["SSRIs","Long-term antipsychotics","Benzodiazepines","Lithium"], answer: 1, explanation: "Chronic dopamine-receptor blockade by typical antipsychotics." },
    { id: "ps-006", subject: "psychiatric", stem: "Therapeutic lithium serum level:", options: ["0.1–0.5 mEq/L","0.6–1.2 mEq/L","1.5–2.5 mEq/L","3.0–4.0 mEq/L"], answer: 1, explanation: "0.6–1.2 mEq/L therapeutic; >1.5 mEq/L toxic." },

    /* ---------- COMMUNITY HEALTH (6) ---------- */
    { id: "co-001", subject: "community-health", stem: "Primary prevention example:", options: ["Cancer screening","Immunization","Cardiac rehabilitation","ICU monitoring"], answer: 1, explanation: "Primary = prevent occurrence (vaccines, health education)." },
    { id: "co-002", subject: "community-health", stem: "Maternal mortality ratio (MMR) is measured per:", options: ["1000 live births","10,000 live births","100,000 live births","1 million live births"], answer: 2, explanation: "MMR: maternal deaths per 100,000 live births." },
    { id: "co-003", subject: "community-health", stem: "Bangladesh EPI: MR-1 is given at:", options: ["Birth","6 weeks","9 months","15 months"], answer: 2, explanation: "Measles-Rubella 1st dose at 9 months." },
    { id: "co-004", subject: "community-health", stem: "Alma-Ata Declaration on Primary Health Care year:", options: ["1948","1968","1978","1988"], answer: 2, explanation: "WHO/UNICEF Alma-Ata Declaration: 1978." },
    { id: "co-005", subject: "community-health", stem: "Most effective reversible contraceptive (tier 1):", options: ["Combined OCP","Condom","Subdermal implant","Withdrawal"], answer: 2, explanation: "LARC (implants/IUDs) have <1% failure rate." },
    { id: "co-006", subject: "community-health", stem: "Infant Mortality Rate is defined as deaths in the first:", options: ["7 days","28 days","6 months","1 year"], answer: 3, explanation: "IMR: deaths under 1 year of age per 1000 live births." },

    /* ---------- MIDWIFERY (6) ---------- */
    { id: "mw-001", subject: "midwifery", stem: "WHO ANC model minimum contacts:", options: ["4","6","8","10"], answer: 2, explanation: "8 contacts in the 2016 WHO ANC model." },
    { id: "mw-002", subject: "midwifery", stem: "Stage 1 of labour ends at:", options: ["Rupture of membranes","Full cervical dilation (10 cm)","Delivery of baby","Delivery of placenta"], answer: 1, explanation: "Stage 1: latent + active to full dilation." },
    { id: "mw-003", subject: "midwifery", stem: "Most common cause of postpartum haemorrhage:", options: ["Atony","Retained placenta","Trauma","Coagulopathy"], answer: 0, explanation: "Uterine atony ~70% of PPH (4 T's: Tone, Trauma, Tissue, Thrombin)." },
    { id: "mw-004", subject: "midwifery", stem: "First-line for seizure prevention in severe pre-eclampsia:", options: ["Diazepam","Phenytoin","Magnesium sulfate","Phenobarbital"], answer: 2, explanation: "MgSO4 is gold standard." },
    { id: "mw-005", subject: "midwifery", stem: "APGAR is scored at:", options: ["Immediately and 10 min","1 and 5 minutes","Only 5 min","Every 15 min for first hour"], answer: 1, explanation: "1 and 5 minutes." },
    { id: "mw-006", subject: "midwifery", stem: "Pre-eclampsia diagnostic criteria after 20 weeks include:", options: ["BP ≥120/80 alone","BP ≥140/90 with proteinuria","Edema alone","Headache alone"], answer: 1, explanation: "New-onset HTN ≥140/90 with proteinuria (or end-organ dysfunction) after 20 wk." },

    /* ---------- NURSING MANAGEMENT (6) ---------- */
    { id: "nm-001", subject: "nursing-mgmt", stem: "The four functions of management are:", options: ["Plan, Direct, Train, Audit","Plan, Organize, Lead, Control","Hire, Train, Evaluate, Promote","Forecast, Budget, Document, Report"], answer: 1, explanation: "Fayol's four functions: Planning, Organizing, Leading, Controlling (POLC)." },
    { id: "nm-002", subject: "nursing-mgmt", stem: "Transformational leadership emphasizes:", options: ["Strict rules and rewards","Inspiring vision and individual development","Status quo","Authority and hierarchy"], answer: 1, explanation: "Transformational leaders inspire shared vision, develop followers, intellectually stimulate, and individually consider." },
    { id: "nm-003", subject: "nursing-mgmt", stem: "The Nursing Process applied at unit level for quality improvement is called:", options: ["SWOT","PDCA cycle","Six Sigma only","ABCDE"], answer: 1, explanation: "Plan-Do-Check-Act (Deming cycle) parallels ADPIE for continuous quality improvement." },
    { id: "nm-004", subject: "nursing-mgmt", stem: "Five rights of delegation include all EXCEPT:", options: ["Right task","Right circumstance","Right person","Right cost"], answer: 3, explanation: "Five rights: Task, Circumstance, Person, Direction/Communication, Supervision/Evaluation." },
    { id: "nm-005", subject: "nursing-mgmt", stem: "Root cause analysis (RCA) is performed:", options: ["Before every shift","After a sentinel event","Only by physicians","Annually"], answer: 1, explanation: "RCA is a systematic process performed after a sentinel/adverse event to identify underlying causes." },
    { id: "nm-006", subject: "nursing-mgmt", stem: "Magnet Recognition Program recognizes excellence in:", options: ["Hospital architecture","Nursing services and outcomes","Financial performance","Research output only"], answer: 1, explanation: "Magnet (ANCC) credentials hospitals for excellence in nursing practice, leadership, and patient outcomes." },

    /* ---------- RESEARCH (6) ---------- */
    { id: "rm-001", subject: "research", stem: "Highest level of research evidence:", options: ["Case report","Cohort study","RCT","Systematic review/meta-analysis"], answer: 3, explanation: "SR/meta-analysis of RCTs sits at the top of evidence hierarchy." },
    { id: "rm-002", subject: "research", stem: "Statistical power conventionally set at:", options: ["50%","60%","80%","99%"], answer: 2, explanation: "Power = 1 − β; convention 80%." },
    { id: "rm-003", subject: "research", stem: "Type I error means:", options: ["False negative","False positive — rejecting a true null","Sampling bias","Confounding"], answer: 1, explanation: "Type I (α): rejecting H0 when it is true." },
    { id: "rm-004", subject: "research", stem: "Cronbach's α ≥0.7 indicates acceptable:", options: ["Validity","Internal consistency reliability","Power","Effect size"], answer: 1, explanation: "Internal consistency reliability of a scale." },
    { id: "rm-005", subject: "research", stem: "Belmont Report principles:", options: ["Autonomy, equity, transparency","Respect for persons, beneficence, justice","Consent, anonymity, validity","Privacy, integrity, accuracy"], answer: 1, explanation: "Three pillars guiding research ethics with human subjects." },
    { id: "rm-006", subject: "research", stem: "p-value < 0.05 conventionally means:", options: ["The hypothesis is proven","Reject the null hypothesis at 5% significance","No difference exists","Sample size is too small"], answer: 1, explanation: "Reject H0 at α = 0.05; observed difference is unlikely (≤5%) under the null." },

    /* ---------- ENGLISH (8) ---------- */
    { id: "en-001", subject: "english", stem: "Correctly spelled word:", options: ["Recieve","Receive","Receeve","Recive"], answer: 1, explanation: "'Receive' — i before e except after c." },
    { id: "en-002", subject: "english", stem: "Synonym of 'prudent':", options: ["Careless","Wise / cautious","Foolish","Hasty"], answer: 1, explanation: "Prudent = wise, cautious, thoughtful." },
    { id: "en-003", subject: "english", stem: "Correct sentence:", options: ["She don't like coffee","She doesn't likes coffee","She doesn't like coffee","She not like coffee"], answer: 2, explanation: "Third-person singular negative: 'doesn't + base verb'." },
    { id: "en-004", subject: "english", stem: "Antonym of 'transparent':", options: ["Clear","Opaque","Visible","Bright"], answer: 1, explanation: "Opaque = not see-through." },
    { id: "en-005", subject: "english", stem: "Preposition: 'She is good ___ mathematics.'", options: ["in","at","on","with"], answer: 1, explanation: "'Good at' is the standard collocation." },
    { id: "en-006", subject: "english", stem: "Identify the noun in the sentence: 'The patient slept peacefully.'", options: ["slept","peacefully","patient","the"], answer: 2, explanation: "'Patient' is the noun (subject)." },
    { id: "en-007", subject: "english", stem: "Plural of 'phenomenon' is:", options: ["phenomenons","phenomenas","phenomena","phenomenoms"], answer: 2, explanation: "Phenomenon (singular) → phenomena (plural)." },
    { id: "en-008", subject: "english", stem: "Active to passive: 'The nurse administered the medication.'", options: ["The medication was administered by the nurse","The medication administered the nurse","The medication is administering the nurse","The nurse is administering medication"], answer: 0, explanation: "Passive: object + 'was/were' + past participle + by + agent." },

    /* ---------- GENERAL KNOWLEDGE (8) ---------- */
    { id: "gk-001", subject: "gk", stem: "Capital of Bangladesh:", options: ["Chittagong","Dhaka","Sylhet","Khulna"], answer: 1, explanation: "Dhaka is the capital and largest city." },
    { id: "gk-002", subject: "gk", stem: "Bangladesh's victory day:", options: ["26 March 1971","16 December 1971","21 February 1952","17 April 1971"], answer: 1, explanation: "Victory Day: 16 December 1971. Independence Day: 26 March 1971." },
    { id: "gk-003", subject: "gk", stem: "WHO headquarters location:", options: ["New York","Geneva","Paris","London"], answer: 1, explanation: "Geneva, Switzerland." },
    { id: "gk-004", subject: "gk", stem: "International Nurses Day:", options: ["April 7","May 12","July 1","October 24"], answer: 1, explanation: "12 May — birthday of Florence Nightingale." },
    { id: "gk-005", subject: "gk", stem: "The widest river in Bangladesh is the:", options: ["Padma","Jamuna","Meghna","Brahmaputra"], answer: 2, explanation: "The Meghna is the widest river in Bangladesh." },
    { id: "gk-006", subject: "gk", stem: "Florence Nightingale is associated with the:", options: ["First World War","Crimean War","American Civil War","Boer War"], answer: 1, explanation: "Crimean War (1853-56) — laid foundations of modern nursing." },
    { id: "gk-007", subject: "gk", stem: "World Health Day observed on:", options: ["April 7","May 12","July 1","October 16"], answer: 0, explanation: "7 April — anniversary of WHO founding (1948)." },
    { id: "gk-008", subject: "gk", stem: "The International Council of Nurses (ICN) is headquartered in:", options: ["Geneva, Switzerland","New York, USA","London, UK","Washington, DC"], answer: 0, explanation: "The International Council of Nurses (ICN), the global federation of national nurses' associations, is headquartered in Geneva, Switzerland." }
  ];

  /* ============================================================
     TESTS — 20 model tests (30 Q each) + 2 full models (100 Q each)
     Mostly scaffolds; admin populates remaining tests via panel.
     ============================================================ */

  /* Helper: build a balanced 30-Q test from the bank. */
  function pickIds(prefix, slices) {
    return slices.map(function (id) { return id; });
  }

  const tests = [];

  /* Model Test 01 — fully populated, all 30 Qs */
  tests.push({
    id: "msn-mt-01",
    title: "MSN Model Test 01",
    type: "model",
    duration: 30,
    intendedCount: 30,
    status: "live",
    questionIds: [
      "fn-001","fn-003","fn-007","fn-011","fn-019",
      "an-001","an-002","an-005",
      "nu-001","nu-005",
      "mb-001","mb-002",
      "ph-001","ph-002","ph-005",
      "ah-001","ah-003","ah-005",
      "ch-003","ch-004",
      "ps-002","ps-005",
      "co-001","co-004",
      "mw-002","mw-003",
      "nm-001","rm-001",
      "en-002","gk-002"
    ]
  });

  /* Model Test 02 — fully populated */
  tests.push({
    id: "msn-mt-02",
    title: "MSN Model Test 02",
    type: "model",
    duration: 30,
    intendedCount: 30,
    status: "live",
    questionIds: [
      "fn-005","fn-008","fn-014","fn-022","fn-026",
      "an-003","an-006","an-008",
      "nu-002","nu-007",
      "mb-003","mb-005",
      "ph-003","ph-004","ph-006",
      "ah-002","ah-004","ah-006",
      "ch-001","ch-006",
      "ps-001","ps-006",
      "co-002","co-005",
      "mw-001","mw-005",
      "nm-002","rm-002",
      "en-004","gk-004"
    ]
  });

  /* Model Test 03 — fully populated */
  tests.push({
    id: "msn-mt-03",
    title: "MSN Model Test 03",
    type: "model",
    duration: 30,
    intendedCount: 30,
    status: "live",
    questionIds: [
      "fn-009","fn-013","fn-018","fn-023","fn-029",
      "an-004","an-007",
      "nu-003","nu-006","nu-008",
      "mb-004","mb-006",
      "ph-002","ph-005",
      "ah-007","ah-008",
      "ch-002","ch-005","ch-008",
      "ps-003","ps-004",
      "co-003","co-006",
      "mw-004","mw-006",
      "nm-003","nm-005",
      "rm-003","en-007","gk-008"
    ]
  });

  /* Add topic check-in questions to the bank first so tests 04-10 can draw from them. */
  topics.forEach(function (t) {
    t.checkIn.forEach(function (q) {
      if (!questionBank.find(function (x) { return x.id === q.id; })) {
        questionBank.push(q);
      }
    });
  });

  /* Look up each question by id, and derive a "fact key" (subject + correct-answer
     text) so a single test never repeats the same fact via two different items. */
  const bankById = {};
  questionBank.forEach(function (q) { bankById[q.id] = q; });
  function factKey(id) {
    const q = bankById[id];
    if (!q) return id;
    return q.subject + "|" + String(q.options[q.answer]).toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  /* Auto-populate Model Tests 04 – 10 (live) with deterministic varied selections.
     Skips any question whose fact is already in the test. */
  function pickIdsForTest(testNum) {
    const ids = questionBank.map(function (q) { return q.id; });
    const n = ids.length;
    if (n === 0) return [];
    const offset = ((testNum * 17) + 11) % n;
    const step = (n % 3 === 0) ? 4 : 3;
    const picks = [];
    const seen = {};
    const seenFact = {};
    let i = offset;
    let safety = n * 6;
    while (picks.length < 30 && safety-- > 0) {
      const id = ids[i % n];
      const fk = factKey(id);
      if (!seen[id] && !seenFact[fk]) { picks.push(id); seen[id] = true; seenFact[fk] = true; }
      i += step;
    }
    let backfill = 0;
    while (picks.length < 30 && backfill < n) {
      const id = ids[backfill++];
      if (!seen[id]) { picks.push(id); seen[id] = true; }
    }
    return picks;
  }

  for (let i = 4; i <= 10; i++) {
    tests.push({
      id: "msn-mt-" + String(i).padStart(2, "0"),
      title: "MSN Model Test " + String(i).padStart(2, "0"),
      type: "model",
      duration: 30,
      intendedCount: 30,
      status: "live",
      questionIds: pickIdsForTest(i)
    });
  }

  /* Model Tests 11 – 20 — now live, auto-populated from the expanded bank. */
  for (let i = 11; i <= 20; i++) {
    tests.push({
      id: "msn-mt-" + String(i).padStart(2, "0"),
      title: "MSN Model Test " + String(i).padStart(2, "0"),
      type: "model",
      duration: 30,
      intendedCount: 30,
      status: "live",
      questionIds: pickIdsForTest(i)
    });
  }

  /* Pick `count` questions spread evenly across the whole bank (good subject mix),
     skipping any question whose fact is already chosen for this test. */
  function pickSpread(count, seed) {
    const ids = questionBank.map(function (q) { return q.id; });
    const n = ids.length;
    if (n === 0) return [];
    const step = Math.max(1, Math.floor(n / count));
    const picks = [];
    const seen = {};
    const seenFact = {};
    let i = seed % n;
    let safety = n * 10;
    while (picks.length < count && safety-- > 0) {
      const id = ids[i % n];
      const fk = factKey(id);
      if (!seen[id] && !seenFact[fk]) { picks.push(id); seen[id] = true; seenFact[fk] = true; }
      i += step + (picks.length % 2); /* nudge to avoid landing on the same stride */
    }
    /* Relaxed backfill (fact guard dropped) only if the strict pass fell short. */
    let backfill = 0;
    while (picks.length < count && backfill < n) {
      const id = ids[backfill++];
      if (!seen[id]) { picks.push(id); seen[id] = true; }
    }
    return picks;
  }

  /* Three full model tests — 100 Q each, evenly spread across all subjects. */
  tests.push({
    id: "msn-fmt-01",
    title: "MSN Full Model Test 01 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 0)
  });
  tests.push({
    id: "msn-fmt-02",
    title: "MSN Full Model Test 02 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 5)
  });
  tests.push({
    id: "msn-fmt-03",
    title: "MSN Full Model Test 03 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 11)
  });

  /* Topic check-ins are exposed as quick "tests" too. */
  topics.forEach(function (t) {
    tests.push({
      id: "msn-topic-" + t.id,
      title: t.title + " — Check-in",
      type: "topic-checkin",
      topicId: t.id,
      duration: Math.max(5, t.checkIn.length),
      intendedCount: t.checkIn.length,
      status: "live",
      questionIds: t.checkIn.map(function (q) { return q.id; })
    });
  });

  window.PulsePrograms["msn"] = {
    topics: topics,
    questionBank: questionBank,
    tests: tests
  };
})();
