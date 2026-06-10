/* NCLEX-RN® Preparation — topics, difficulty-tagged question bank,
   model question sets, and NCLEX-style adaptive practice exams.
   Original content written for Pulse for Nurses, grounded in standard
   public references (normal lab values, ACC/AHA, ADA, CDC, WHO) — not
   reproduced from any commercial review product.
   Each question carries `diff`: 1 = easy, 2 = medium, 3 = hard,
   used by the adaptive exam engine. Last updated 2026-06. */
(function () {
  if (!window.PulsePrograms) window.PulsePrograms = {};

  const topics = [
    {
      id: "ncx-t-safety",
      title: "Safety & Infection Control",
      subject: "fundamental-nursing",
      readMinutes: 9,
      summary: "Standard and transmission-based precautions, the chain of infection, patient-identification and error-prevention safety, and a high-yield look at what NCLEX tests on safe care.",
      content: [
        { h: "Why Safety Leads the NCLEX", p: "A large share of the NCLEX-RN comes from the 'Safe and Effective Care Environment' category — safety, infection control, and management of care. The exam constantly asks what the nurse does first to keep a patient safe. When two answers seem right, the safest action usually wins." },
        { h: "Standard Precautions", p: "Standard precautions apply to every patient, every time, because you cannot always know who is infectious. Treat all blood and body fluids as potentially infectious: perform hand hygiene, wear gloves and other PPE when exposure is likely, and handle sharps, linen, and waste safely." },
        { h: "Transmission-Based Precautions", p: "Layer these on top of standard precautions. Contact (gloves and gown) for organisms spread by touch such as MRSA and C. difficile. Droplet (surgical mask within about a metre) for influenza, pertussis, and meningitis. Airborne (N95 respirator and a negative-pressure room) for tuberculosis, measles, and varicella. A memory aid for airborne is 'My Chicken Hez TB' — Measles, Chickenpox, Herpes zoster (disseminated), TB." },
        { h: "Hand Hygiene", p: "Hand hygiene is the single most effective way to prevent healthcare-associated infection. Use alcohol-based rub when hands are not visibly soiled; wash with soap and water when soiled or when caring for a patient with C. difficile or other spore-forming organisms, since alcohol does not kill spores." },
        { h: "Patient Identification & Error Prevention", p: "Use at least two identifiers (for example name and date of birth) before any medication, procedure, or specimen. A pre-procedure 'time-out' confirms the right patient, right site, and right procedure. Report and document errors honestly; a 'just culture' learns from mistakes instead of hiding them." },
        { h: "Safe Environment", p: "Prevent falls by assessing risk, keeping the bed low with the call bell in reach, and clearing clutter. Use the least restrictive measures and obtain an order for restraints, checking the patient frequently. Know fire safety (RACE: Rescue, Alarm, Confine, Extinguish) and how to handle hazardous materials." },
        { h: "Prioritizing for Safety", p: "When choosing what to do first, think airway-breathing-circulation, then the most unstable or unexpected finding. A new or rapidly changing problem usually outranks a chronic, expected one. Safety questions reward the action that prevents harm right now." }
      ],
      checkIn: [
        { id: "ncx-safety-q1", subject: "fundamental-nursing", diff: 1, stem: "Standard precautions should be used for:", options: ["Only patients with a known infection","Every patient","Only patients in isolation rooms","Only during invasive procedures"], answer: 1, explanation: "Standard precautions apply to all patients at all times, because infection status is often unknown." },
        { id: "ncx-safety-q2", subject: "fundamental-nursing", diff: 1, stem: "The single most effective measure to prevent healthcare-associated infection is:", options: ["Wearing gloves at all times","Hand hygiene","Routine antibiotics","Patient isolation"], answer: 1, explanation: "Hand hygiene is the most effective way to prevent the spread of infection." },
        { id: "ncx-safety-q3", subject: "fundamental-nursing", diff: 2, stem: "A client with active pulmonary tuberculosis requires which type of precaution?", options: ["Contact","Droplet","Airborne","Standard only"], answer: 2, explanation: "TB spreads by airborne droplet nuclei, requiring an N95 respirator and a negative-pressure room." },
        { id: "ncx-safety-q4", subject: "fundamental-nursing", diff: 2, stem: "Which client requires soap-and-water hand washing rather than alcohol rub?", options: ["A client with hypertension","A client with C. difficile diarrhea","A post-operative client","A client receiving oxygen"], answer: 1, explanation: "Alcohol does not kill C. difficile spores; wash with soap and water." },
        { id: "ncx-safety-q5", subject: "fundamental-nursing", diff: 2, stem: "Before giving a medication, the nurse should identify the client using:", options: ["The room number","The bed tag","At least two identifiers such as name and date of birth","The diagnosis"], answer: 2, explanation: "Two identifiers (e.g., name and date of birth) confirm the right client." },
        { id: "ncx-safety-q6", subject: "fundamental-nursing", diff: 3, stem: "The nurse enters a room and finds the client on the floor. The FIRST action is to:", options: ["Call the physician","Assess the client's airway, breathing, and responsiveness","Complete an incident report","Help the client back to bed"], answer: 1, explanation: "Assess the client first (ABC and responsiveness) before moving them or notifying others." },
        { id: "ncx-safety-q7", subject: "fundamental-nursing", diff: 2, stem: "In the RACE fire-safety sequence, the 'R' stands for:", options: ["Run","Rescue","Report","Restrain"], answer: 1, explanation: "RACE = Rescue, Alarm, Confine, Extinguish; rescue anyone in immediate danger first." },
        { id: "ncx-safety-q8", subject: "fundamental-nursing", diff: 3, stem: "Which client should the nurse assess FIRST?", options: ["A stable client awaiting discharge","A client reporting new shortness of breath","A client requesting pain medication","A client wanting help to the bathroom"], answer: 1, explanation: "New shortness of breath is an airway/breathing concern and an unexpected change — assess first." },
        { id: "ncx-safety-q9", subject: "fundamental-nursing", diff: 2, stem: "When applying restraints, the nurse should:", options: ["Use the most restrictive type available","Use the least restrictive measure and obtain an order","Tie restraints to the bed rails","Check the client once per shift"], answer: 1, explanation: "Use the least restrictive option, obtain an order, and monitor the client frequently." },
        { id: "ncx-safety-q10", subject: "fundamental-nursing", diff: 1, stem: "Used needles should be:", options: ["Recapped then discarded","Placed in a puncture-proof sharps container without recapping","Placed in general waste","Bent before disposal"], answer: 1, explanation: "Dispose of sharps directly without recapping to prevent needlestick injury." }
      ]
    },
    {
      id: "ncx-t-priority",
      title: "Prioritization, Delegation & Management of Care",
      subject: "fundamental-nursing",
      readMinutes: 9,
      summary: "Frameworks the NCLEX rewards — ABC, Maslow, the nursing process, acute vs. chronic — plus the five rights of delegation and how to choose what to do first.",
      content: [
        { h: "The Big Frameworks", p: "When a question asks what the nurse does first, apply a framework. ABC: airway, then breathing, then circulation. Maslow: physiological needs before safety, then psychological. Nursing process: assess before you act. Safety and the unstable client come before the stable one." },
        { h: "Acute vs. Chronic, Expected vs. Unexpected", p: "A new, acute, or unexpected finding usually outranks a chronic or expected one. A client whose condition is changing needs attention before one who is stable, even if the stable client's numbers look worse on paper. Ask which client could deteriorate fastest." },
        { h: "Assessment Comes First", p: "Many 'what does the nurse do first' answers are to assess or gather more data — unless the situation is an emergency that demands immediate action (such as starting CPR or suctioning a blocked airway). If the client is stable, assess before intervening." },
        { h: "Delegation — The Five Rights", p: "Delegate the right task, under the right circumstances, to the right person, with the right direction, and the right supervision. Delegate routine, stable, predictable tasks. Never delegate assessment, teaching, evaluation, or the care of an unstable client to unlicensed assistive personnel." },
        { h: "What to Delegate to Whom", p: "Unlicensed assistive personnel can do basic care: vital signs on stable clients, hygiene, feeding, ambulating, intake and output. Licensed practical nurses can do many stable, routine tasks and some medications. The registered nurse keeps assessment, the unstable client, the care plan, IV-push medications (per policy), and client teaching." },
        { h: "The Five Rights of Medication Too", p: "Right patient, drug, dose, route, and time (with documentation). Prioritization and safety overlap constantly on the NCLEX — the safest, most stabilizing action for the most at-risk client is usually correct." },
        { h: "Reading the Question", p: "Watch for key words: 'first', 'priority', 'most important', 'initial'. Rule out answers that are unsafe or outside the nurse's scope. When all options are correct actions, choose the one that addresses the greatest risk to life." }
      ],
      checkIn: [
        { id: "ncx-priority-q1", subject: "fundamental-nursing", diff: 1, stem: "Using the ABC framework, the nurse's first priority is always:", options: ["Circulation","Breathing","Airway","Comfort"], answer: 2, explanation: "Airway comes first, then breathing, then circulation." },
        { id: "ncx-priority-q2", subject: "fundamental-nursing", diff: 2, stem: "Which task is appropriate to delegate to unlicensed assistive personnel?", options: ["Initial client assessment","Vital signs on a stable client","Client teaching","Evaluating response to treatment"], answer: 1, explanation: "Routine tasks such as vital signs on stable clients may be delegated; assessment, teaching, and evaluation may not." },
        { id: "ncx-priority-q3", subject: "fundamental-nursing", diff: 1, stem: "In Maslow's hierarchy, which need is met first?", options: ["Self-esteem","Physiological needs","Love and belonging","Safety"], answer: 1, explanation: "Physiological needs (airway, oxygen, fluids, nutrition) form the base and are met first." },
        { id: "ncx-priority-q4", subject: "fundamental-nursing", diff: 3, stem: "The nurse receives report on four clients. Who should be seen FIRST?", options: ["A client with a chronic stable wound","A client with new-onset confusion and an O2 saturation of 86%","A client due for routine medications","A client awaiting physical therapy"], answer: 1, explanation: "New confusion with hypoxia is an unexpected, airway/breathing emergency — assess first." },
        { id: "ncx-priority-q5", subject: "fundamental-nursing", diff: 2, stem: "Which may NOT be delegated to a licensed practical nurse?", options: ["Reinforcing teaching","Administering routine oral medication","The initial assessment and care plan of a new unstable client","Recording intake and output"], answer: 2, explanation: "The initial assessment, care planning, and unstable clients remain the registered nurse's responsibility." },
        { id: "ncx-priority-q6", subject: "fundamental-nursing", diff: 2, stem: "When all four answer options are appropriate nursing actions, the nurse should choose the one that:", options: ["Takes the least time","Addresses the greatest risk to life","Is easiest to perform","Was ordered most recently"], answer: 1, explanation: "Prioritize the action that addresses the greatest threat to life or safety." },
        { id: "ncx-priority-q7", subject: "fundamental-nursing", diff: 3, stem: "A stable client is short of breath and a second client's cardiac monitor shows ventricular fibrillation. The nurse should FIRST:", options: ["Reposition the breathless client","Begin CPR and call for the defibrillator on the VF client","Document both findings","Call the physician"], answer: 1, explanation: "Ventricular fibrillation is a lethal arrhythmia; start CPR/defibrillation immediately." },
        { id: "ncx-priority-q8", subject: "fundamental-nursing", diff: 1, stem: "The first step of the nursing process is:", options: ["Diagnosis","Assessment","Planning","Evaluation"], answer: 1, explanation: "Assessment comes first — gather data before diagnosing or acting." },
        { id: "ncx-priority-q9", subject: "fundamental-nursing", diff: 2, stem: "A new finding that is acute and unexpected generally takes priority over one that is:", options: ["Life-threatening","Chronic and expected","Sudden","Affecting the airway"], answer: 1, explanation: "Acute, unexpected changes outrank chronic, expected findings." },
        { id: "ncx-priority-q10", subject: "fundamental-nursing", diff: 2, stem: "In delegation, the registered nurse who delegates a task:", options: ["Transfers all accountability","Remains accountable for the outcome","Cannot supervise the task","Must perform it personally as well"], answer: 1, explanation: "Delegation transfers the task but not accountability; the RN supervises and remains responsible." }
      ]
    },
    {
      id: "ncx-t-medsafety",
      title: "Pharmacological Safety & High-Alert Drugs",
      subject: "pharmacology",
      readMinutes: 9,
      summary: "Medication rights, high-alert drugs, key antidotes, and the monitoring parameters NCLEX expects you to check before and after giving common medicines.",
      content: [
        { h: "The Rights and Safe Practice", p: "Confirm the right patient, drug, dose, route, and time, and document after giving. Check allergies, verify high-alert drugs with a second nurse, and never give a medicine you did not prepare. Question any order that seems unsafe — the nurse is the last safeguard before harm reaches the patient." },
        { h: "High-Alert Medications", p: "Some drugs cause serious harm if given wrongly: insulin, heparin and other anticoagulants, opioids, and concentrated electrolytes such as potassium chloride. Potassium chloride is never given by IV push — it can stop the heart. High-alert drugs need independent double-checks." },
        { h: "Key Antidotes", p: "Memorize the common reversal agents: naloxone for opioids, flumazenil for benzodiazepines, vitamin K for warfarin, protamine for heparin, N-acetylcysteine for acetaminophen, and digoxin immune Fab for digoxin toxicity. Calcium gluconate counters magnesium toxicity." },
        { h: "Monitoring Before Giving", p: "Check the apical pulse for a full minute before digoxin and hold if it is under 60. Check blood pressure before antihypertensives, blood sugar before insulin, and the INR before warfarin. Hold and report when a parameter is outside the safe range, then notify the prescriber." },
        { h: "Therapeutic Levels", p: "Know narrow-therapeutic-range drugs: digoxin 0.5–2.0 ng/mL, lithium 0.6–1.2 mEq/L, and the warfarin INR target of about 2–3. Levels above these signal toxicity and demand action. Teach clients on these drugs the signs of toxicity to report." },
        { h: "Routes and Onset", p: "Intravenous is fastest and is used in emergencies; oral is slowest but most common. Give insulin and heparin subcutaneously, rotating sites. When mixing insulins, draw up the clear (short-acting) before the cloudy (intermediate) — 'clear before cloudy'." },
        { h: "Client Teaching", p: "Teach the drug name, purpose, how and when to take it, and what to report. Stress finishing antibiotics, not stopping antihypertensives or antidepressants abruptly, and avoiding alcohol with sedatives. Good teaching prevents toxicity, resistance, and readmission." }
      ],
      checkIn: [
        { id: "ncx-med-q1", subject: "pharmacology", diff: 1, stem: "Which medication must NEVER be given by IV push?", options: ["Normal saline","Potassium chloride","Paracetamol","Vitamin C"], answer: 1, explanation: "IV-push potassium chloride can cause fatal cardiac arrest; it must be diluted and infused slowly." },
        { id: "ncx-med-q2", subject: "pharmacology", diff: 1, stem: "The antidote for opioid overdose is:", options: ["Flumazenil","Naloxone","Vitamin K","Protamine"], answer: 1, explanation: "Naloxone reverses opioid-induced respiratory depression." },
        { id: "ncx-med-q3", subject: "pharmacology", diff: 2, stem: "Before administering digoxin, the nurse must check the client's:", options: ["Temperature","Apical pulse for one full minute","Respiratory rate","Blood glucose"], answer: 1, explanation: "Check the apical pulse for a full minute; hold and report if it is below 60 in an adult." },
        { id: "ncx-med-q4", subject: "pharmacology", diff: 2, stem: "Warfarin therapy is monitored using the:", options: ["aPTT","INR","Blood glucose","Serum sodium"], answer: 1, explanation: "Warfarin is monitored with the INR (target ~2–3); vitamin K is its reversal agent." },
        { id: "ncx-med-q5", subject: "pharmacology", diff: 2, stem: "The antidote for acetaminophen (paracetamol) overdose is:", options: ["N-acetylcysteine","Naloxone","Flumazenil","Atropine"], answer: 0, explanation: "N-acetylcysteine replenishes glutathione and prevents liver injury in acetaminophen poisoning." },
        { id: "ncx-med-q6", subject: "pharmacology", diff: 2, stem: "When mixing regular (clear) and NPH (cloudy) insulin, the nurse draws up:", options: ["Cloudy first","Clear first","Either order","Never mixes them"], answer: 1, explanation: "Draw clear before cloudy to avoid contaminating the regular insulin vial." },
        { id: "ncx-med-q7", subject: "pharmacology", diff: 1, stem: "The therapeutic serum lithium range is:", options: ["0.1–0.5 mEq/L","0.6–1.2 mEq/L","1.5–2.5 mEq/L","3.0–4.0 mEq/L"], answer: 1, explanation: "Therapeutic lithium is 0.6–1.2 mEq/L; above 1.5 mEq/L is toxic." },
        { id: "ncx-med-q8", subject: "pharmacology", diff: 3, stem: "A client on heparin has an antidote ordered for an emergency. The nurse expects:", options: ["Vitamin K","Protamine sulfate","Naloxone","Calcium gluconate"], answer: 1, explanation: "Protamine sulfate reverses heparin; vitamin K reverses warfarin." },
        { id: "ncx-med-q9", subject: "pharmacology", diff: 3, stem: "A digoxin level of 2.8 ng/mL with nausea and visual changes indicates:", options: ["A therapeutic level","Digoxin toxicity","A subtherapeutic level","A normal finding"], answer: 1, explanation: "A level above the therapeutic range (generally >2.0 ng/mL) with nausea and yellow-green vision indicates digoxin toxicity; hold the drug and notify the prescriber." },
        { id: "ncx-med-q10", subject: "pharmacology", diff: 2, stem: "Which class of medication requires an independent double-check as a high-alert drug?", options: ["Oral vitamins","Insulin","Stool softeners","Saline nasal spray"], answer: 1, explanation: "Insulin is a high-alert medication; errors can cause severe hypo- or hyperglycemia." }
      ]
    },
    {
      id: "ncx-t-pharmclasses",
      title: "Common Drug Classes & Side Effects",
      subject: "pharmacology",
      readMinutes: 9,
      summary: "The everyday drug classes NCLEX loves — antihypertensives, diuretics, anticoagulants, antibiotics, steroids — with their signature side effects and teaching points.",
      content: [
        { h: "Antihypertensives", p: "ACE inhibitors (names ending in -pril) can cause a dry cough and, rarely, angioedema; watch potassium. Beta-blockers (-olol) slow the heart — hold for a low pulse and use cautiously in asthma. Calcium channel blockers may cause ankle swelling and constipation. Teach clients to rise slowly to avoid orthostatic dizziness and never to stop suddenly." },
        { h: "Diuretics", p: "Loop diuretics such as furosemide remove fluid fast and lower potassium — watch for hypokalemia and ototoxicity. Thiazides also lower potassium. Potassium-sparing diuretics such as spironolactone raise potassium — avoid potassium supplements. Give diuretics in the morning so sleep is not disturbed by urination." },
        { h: "Anticoagulants & Antiplatelets", p: "Heparin is monitored by aPTT and reversed by protamine; warfarin by INR and reversed by vitamin K. Both increase bleeding risk — watch for bruising, bleeding gums, and dark stools. Teach clients to use a soft toothbrush, avoid injury, and keep lab appointments. Aspirin and clopidogrel are antiplatelets used to prevent clots." },
        { h: "Antibiotics", p: "Finish the full course even when feeling better, to prevent resistance. Watch for allergic reactions, especially to penicillins. Aminoglycosides can damage hearing and kidneys. Many antibiotics reduce the effect of oral contraceptives and can cause diarrhea or yeast infections by disturbing normal flora." },
        { h: "Corticosteroids", p: "Steroids (names often ending in -sone) reduce inflammation but raise blood sugar and infection risk, thin bones, and cause mood changes and fluid retention. Never stop them abruptly — taper to avoid adrenal crisis. Take with food and monitor for the 'Cushingoid' picture with long use." },
        { h: "Diabetes & Respiratory Drugs", p: "Insulin and oral hypoglycemics lower blood sugar — watch for hypoglycemia. Metformin is held around contrast dye to protect the kidneys. For asthma, short-acting beta-agonists such as albuterol are relievers; inhaled corticosteroids are daily preventers — rinse the mouth after to prevent thrush." },
        { h: "Reading Side-Effect Questions", p: "Match the signature effect to the class: dry cough (ACE inhibitor), low potassium (loop diuretic), bleeding (anticoagulant), high blood sugar (steroid). NCLEX often asks which finding to report — choose the one signaling toxicity or a serious adverse effect." }
      ],
      checkIn: [
        { id: "ncx-pc-q1", subject: "pharmacology", diff: 1, stem: "A dry, persistent cough is a classic side effect of:", options: ["Beta-blockers","ACE inhibitors","Calcium channel blockers","Diuretics"], answer: 1, explanation: "ACE inhibitors cause a bradykinin-mediated dry cough; switch to an ARB if intolerable." },
        { id: "ncx-pc-q2", subject: "pharmacology", diff: 2, stem: "A client on furosemide should be monitored for low:", options: ["Potassium","Calcium","Sodium","Glucose"], answer: 0, explanation: "Loop diuretics cause potassium loss, risking hypokalemia and arrhythmias." },
        { id: "ncx-pc-q3", subject: "pharmacology", diff: 2, stem: "Spironolactone, a potassium-sparing diuretic, can cause:", options: ["Hypokalemia","Hyperkalemia","Hyperglycemia","Hypernatremia"], answer: 1, explanation: "Potassium-sparing diuretics raise potassium; avoid potassium supplements and salt substitutes." },
        { id: "ncx-pc-q4", subject: "pharmacology", diff: 1, stem: "Clients taking warfarin should be taught to:", options: ["Use a hard toothbrush","Watch for unusual bleeding or bruising","Take extra aspirin","Skip INR checks"], answer: 1, explanation: "Anticoagulants raise bleeding risk; report bruising, bleeding gums, or dark stools and keep INR appointments." },
        { id: "ncx-pc-q5", subject: "pharmacology", diff: 2, stem: "A client on long-term corticosteroids should be monitored for:", options: ["Low blood sugar","High blood sugar and increased infection risk","Weight loss","Bradycardia"], answer: 1, explanation: "Steroids raise blood glucose and infection risk and cause fluid retention; never stop abruptly." },
        { id: "ncx-pc-q6", subject: "pharmacology", diff: 1, stem: "Diuretics are best given:", options: ["At bedtime","In the morning","Only at night","Every 2 hours"], answer: 1, explanation: "Give diuretics in the morning so increased urination does not disturb sleep." },
        { id: "ncx-pc-q7", subject: "pharmacology", diff: 3, stem: "Metformin is usually held before and after a procedure using IV contrast dye to prevent:", options: ["Hypoglycemia","Kidney injury (lactic acidosis risk)","Hypertension","Constipation"], answer: 1, explanation: "Metformin is held around iodinated contrast to reduce the risk of kidney injury and lactic acidosis." },
        { id: "ncx-pc-q8", subject: "pharmacology", diff: 2, stem: "After using an inhaled corticosteroid, the client should:", options: ["Hold the breath for 1 minute","Rinse the mouth with water","Drink milk","Lie flat"], answer: 1, explanation: "Rinsing the mouth prevents oral thrush (candidiasis) from inhaled steroids." },
        { id: "ncx-pc-q9", subject: "pharmacology", diff: 2, stem: "Before giving a beta-blocker such as metoprolol, the nurse checks the:", options: ["Temperature","Apical pulse and blood pressure","Blood glucose","Urine output"], answer: 1, explanation: "Hold a beta-blocker for a low heart rate or low blood pressure and notify the prescriber." },
        { id: "ncx-pc-q10", subject: "pharmacology", diff: 1, stem: "Clients on antibiotics should be taught to:", options: ["Stop when symptoms improve","Complete the full prescribed course","Share leftover doses","Double the dose if late"], answer: 1, explanation: "Completing the full course prevents antibiotic resistance and relapse." }
      ]
    },
    {
      id: "ncx-t-fluid",
      title: "Fluid, Electrolyte & Acid–Base Balance",
      subject: "adult-health",
      readMinutes: 10,
      summary: "Normal electrolyte ranges, the danger signs of common imbalances, IV fluid basics, and a simple method for reading arterial blood gases — a heavily tested NCLEX area.",
      content: [
        { h: "Fluid Balance", p: "Assess fluid status by daily weight (the most reliable measure — about 1 kg per litre), intake and output, skin turgor, mucous membranes, and lung sounds. Deficit shows dry membranes, poor turgor, low blood pressure, and concentrated urine; excess shows edema, crackles, raised neck veins, and weight gain." },
        { h: "Sodium and Potassium", p: "Sodium (135–145 mEq/L) drives water balance; low sodium causes confusion and seizures, high sodium causes thirst and neurologic changes. Potassium (3.5–5.0 mEq/L) is critical for the heart: low potassium causes flat T waves and arrhythmias, high potassium causes peaked T waves and cardiac arrest. Give IV potassium only diluted and slowly." },
        { h: "Calcium and Magnesium", p: "Calcium (about 8.5–10.5 mg/dL) supports nerves, muscle, and clotting; low calcium causes tetany with positive Chvostek and Trousseau signs. Magnesium stabilizes nerves and the heart; low magnesium often accompanies low potassium and must be corrected for potassium to normalize." },
        { h: "IV Fluids", p: "Isotonic fluids (0.9% saline, lactated Ringer's) stay in the vessels and expand volume for dehydration and shock. Hypotonic fluids (0.45% saline) move water into cells. Hypertonic fluids (3% saline) pull water out of cells and are used cautiously. Always check the order, rate, and the client's heart and kidney status." },
        { h: "Reading a Blood Gas", p: "Normal values: pH 7.35–7.45, PaCO2 35–45 mmHg, HCO3 22–26 mEq/L. Decide if the pH is acidic or alkalotic. If CO2 moves opposite to pH it is respiratory; if HCO3 moves with pH it is metabolic. Remember ROME: Respiratory Opposite, Metabolic Equal." },
        { h: "Common Acid–Base Pictures", p: "Respiratory acidosis: low pH, high CO2 — hypoventilation (COPD, sedation). Respiratory alkalosis: high pH, low CO2 — hyperventilation (anxiety, pain). Metabolic acidosis: low pH, low HCO3 — diarrhea, DKA, shock. Metabolic alkalosis: high pH, high HCO3 — vomiting, excess antacids." },
        { h: "Nursing Priorities", p: "Watch the cardiac monitor in any potassium, calcium, or magnesium imbalance. Track daily weight and strict intake and output. Correct sodium slowly to avoid brain injury. Report new confusion, weakness, arrhythmias, or seizures — these mark an imbalance turning into an emergency." }
      ],
      checkIn: [
        { id: "ncx-fluid-q1", subject: "adult-health", diff: 1, stem: "The normal serum potassium range is:", options: ["1.5–2.5 mEq/L","3.5–5.0 mEq/L","8.5–10.5 mEq/L","135–145 mEq/L"], answer: 1, explanation: "Normal potassium is 3.5–5.0 mEq/L; values outside threaten cardiac rhythm." },
        { id: "ncx-fluid-q2", subject: "adult-health", diff: 2, stem: "A peaked (tall) T wave on the ECG suggests:", options: ["Hypokalemia","Hyperkalemia","Hypocalcemia","Hypernatremia"], answer: 1, explanation: "Hyperkalemia produces tall, peaked T waves and risks cardiac arrest." },
        { id: "ncx-fluid-q3", subject: "adult-health", diff: 1, stem: "The most reliable bedside measure of fluid status is:", options: ["Blood pressure","Daily weight","Skin color","Heart rate"], answer: 1, explanation: "Daily weight at the same time best tracks fluid gain or loss — about 1 kg per litre." },
        { id: "ncx-fluid-q4", subject: "adult-health", diff: 2, stem: "Which IV fluid is isotonic and used for volume resuscitation?", options: ["0.45% saline","3% saline","0.9% normal saline","D10W"], answer: 2, explanation: "0.9% normal saline is isotonic, stays in the vascular space, and expands volume." },
        { id: "ncx-fluid-q5", subject: "adult-health", diff: 1, stem: "Normal arterial blood pH is:", options: ["7.15–7.25","7.35–7.45","7.50–7.60","6.95–7.05"], answer: 1, explanation: "Normal pH is 7.35–7.45; below is acidosis, above is alkalosis." },
        { id: "ncx-fluid-q6", subject: "adult-health", diff: 3, stem: "A client with COPD has pH 7.30 and PaCO2 55 mmHg. This indicates:", options: ["Respiratory acidosis","Respiratory alkalosis","Metabolic acidosis","Metabolic alkalosis"], answer: 0, explanation: "Low pH with high CO2 from hypoventilation is respiratory acidosis." },
        { id: "ncx-fluid-q7", subject: "adult-health", diff: 3, stem: "Persistent vomiting most commonly leads to:", options: ["Metabolic acidosis","Metabolic alkalosis","Respiratory acidosis","Respiratory alkalosis"], answer: 1, explanation: "Loss of gastric acid raises bicarbonate, causing metabolic alkalosis." },
        { id: "ncx-fluid-q8", subject: "adult-health", diff: 2, stem: "Chvostek and Trousseau signs indicate:", options: ["Hyperkalemia","Hypocalcemia","Hypernatremia","Hyperglycemia"], answer: 1, explanation: "These signs of neuromuscular irritability point to hypocalcemia." },
        { id: "ncx-fluid-q9", subject: "adult-health", diff: 2, stem: "IV potassium chloride should be:", options: ["Given by rapid push","Diluted and infused slowly with cardiac monitoring","Given undiluted","Given intramuscularly"], answer: 1, explanation: "Rapid IV potassium can be fatal; always dilute and infuse slowly with monitoring." },
        { id: "ncx-fluid-q10", subject: "adult-health", diff: 3, stem: "Low serum potassium that will not correct despite replacement is often caused by low:", options: ["Sodium","Magnesium","Calcium","Chloride"], answer: 1, explanation: "Hypomagnesemia causes refractory hypokalemia; correct the magnesium for potassium to normalize." }
      ]
    },
    {
      id: "ncx-t-cardiac",
      title: "Cardiovascular Disorders",
      subject: "adult-health",
      readMinutes: 9,
      summary: "Chest pain and myocardial infarction, heart failure, hypertension, and the priority nursing actions and teaching the NCLEX expects.",
      content: [
        { h: "Chest Pain & MI", p: "Classic myocardial infarction pain is central and crushing, radiating to the left arm, neck, or jaw, with sweating, nausea, and shortness of breath; women and people with diabetes may have atypical or silent symptoms. Remember MONA elements of care — morphine, oxygen if hypoxic, nitroglycerin, and aspirin — guided by the provider." },
        { h: "Cardiac Markers & ECG", p: "Troponin is the most specific marker of heart-muscle injury and rises within a few hours of an MI. The ECG may show ST-segment elevation in a STEMI. The priority is to restore blood flow quickly — clot-dissolving drugs or cardiac catheterization with a door-to-balloon target of about 90 minutes." },
        { h: "Nitroglycerin Teaching", p: "For chest pain, the client sits down and takes one sublingual tablet, repeating every 5 minutes up to three doses; if pain persists after the first dose, emergency help should be called. Hold for a systolic blood pressure under 90. Store tablets in their dark glass bottle and expect a brief headache." },
        { h: "Heart Failure", p: "In heart failure the heart pumps poorly and fluid backs up. Left-sided failure causes breathlessness and lung crackles; right-sided causes peripheral edema, weight gain, and raised neck veins. Care includes a low-salt diet, daily weight, fluid limits, diuretics, and reporting a weight gain of 2–3 pounds in a day." },
        { h: "Hypertension", p: "Per ACC/AHA, a reading of 140/90 mmHg or higher is Stage 2 hypertension. It is often silent but raises stroke and heart-attack risk. Teach a low-salt diet, regular activity, weight control, limiting alcohol, taking medicines as prescribed, and not stopping them when feeling well." },
        { h: "Positioning & Priorities", p: "Sit a breathless cardiac client upright to ease the work of breathing. Apply oxygen if saturation is low. For new chest pain, stop activity, assess, obtain an ECG, and notify the provider. A lethal rhythm such as ventricular fibrillation requires immediate CPR and defibrillation." },
        { h: "Risk Reduction", p: "Modifiable risks include smoking, high cholesterol, high blood pressure, diabetes, obesity, and inactivity. Teach smoking cessation, a heart-healthy diet, and adherence to medication. Prevention questions reward lifestyle change plus consistent control of blood pressure and blood sugar." }
      ],
      checkIn: [
        { id: "ncx-card-q1", subject: "adult-health", diff: 1, stem: "The most specific blood marker for myocardial infarction is:", options: ["White blood cell count","Cardiac troponin","Blood glucose","Serum sodium"], answer: 1, explanation: "Troponin is the most sensitive and specific marker of heart-muscle injury." },
        { id: "ncx-card-q2", subject: "adult-health", diff: 2, stem: "Classic myocardial infarction chest pain:", options: ["Is sharp and worse on inspiration","Is central and crushing, radiating to the arm or jaw","Is localized to the right flank","Only occurs after eating"], answer: 1, explanation: "MI pain is typically central, crushing, and radiates to the left arm, neck, or jaw." },
        { id: "ncx-card-q3", subject: "adult-health", diff: 2, stem: "Sublingual nitroglycerin for chest pain may be repeated every:", options: ["1 minute, up to 10 doses","5 minutes, up to 3 doses","30 minutes, up to 2 doses","Hour, as needed"], answer: 1, explanation: "Take one tablet every 5 minutes up to three doses; seek emergency help if pain persists." },
        { id: "ncx-card-q4", subject: "adult-health", diff: 2, stem: "A client with heart failure should report a weight gain of:", options: ["Any amount over a week","2–3 pounds in a day","Only over 10 pounds","Weight changes are not important"], answer: 1, explanation: "A rapid gain of 2–3 pounds in a day signals fluid retention and should be reported." },
        { id: "ncx-card-q5", subject: "adult-health", diff: 1, stem: "Stage 2 hypertension begins at a blood pressure of:", options: ["120/80","130/80","140/90","160/100"], answer: 2, explanation: "Per ACC/AHA, Stage 2 hypertension is ≥140/90 mmHg." },
        { id: "ncx-card-q6", subject: "adult-health", diff: 3, stem: "Before giving sublingual nitroglycerin, the nurse should check that the systolic blood pressure is:", options: ["Below 90","At least 90","Above 180","Any value"], answer: 1, explanation: "Hold nitroglycerin for systolic BP under 90, since it lowers blood pressure further." },
        { id: "ncx-card-q7", subject: "adult-health", diff: 2, stem: "Lung crackles and breathlessness in heart failure indicate which side is failing?", options: ["Right-sided","Left-sided","Neither","Both equally"], answer: 1, explanation: "Left-sided failure backs fluid into the lungs, causing crackles and dyspnea." },
        { id: "ncx-card-q8", subject: "adult-health", diff: 1, stem: "The best position for a breathless cardiac client is:", options: ["Flat on the back","Upright (high-Fowler's)","Trendelenburg","Prone"], answer: 1, explanation: "Sitting upright reduces venous return and eases the work of breathing." },
        { id: "ncx-card-q9", subject: "adult-health", diff: 3, stem: "A client's monitor shows ventricular fibrillation and no pulse. The nurse FIRST:", options: ["Gives oral aspirin","Starts CPR and prepares to defibrillate","Documents the rhythm","Checks the blood pressure"], answer: 1, explanation: "Pulseless VF is a lethal rhythm; begin CPR immediately and defibrillate." },
        { id: "ncx-card-q10", subject: "adult-health", diff: 1, stem: "Which is a modifiable cardiovascular risk factor?", options: ["Age","Family history","Smoking","Gender"], answer: 2, explanation: "Smoking is modifiable; age, gender, and family history are not." }
      ]
    },
    {
      id: "ncx-t-respiratory",
      title: "Respiratory Disorders",
      subject: "adult-health",
      readMinutes: 9,
      summary: "Oxygen therapy and safety, asthma and COPD, pneumonia, and the airway-first priorities the NCLEX tests again and again.",
      content: [
        { h: "Airway First", p: "Breathing problems are airway-and-breathing emergencies, so respiratory questions are high priority. Assess rate, effort, breath sounds, and oxygen saturation. Sit the breathless client upright, apply prescribed oxygen, stay with them, and call for help when deterioration is rapid." },
        { h: "Oxygen Therapy & Safety", p: "Oxygen is a drug needing an order and a target saturation. Devices range from nasal cannula (low flow) to non-rebreather masks (high flow for emergencies) and Venturi masks (precise concentrations). Oxygen supports combustion — no smoking or open flames. In most adults target a saturation above 94%." },
        { h: "COPD Caution", p: "In COPD with chronic carbon-dioxide retention, target a saturation of 88–92%, because too much oxygen can blunt the drive to breathe. Teach pursed-lip breathing, energy conservation, infection prevention, and recognizing an exacerbation by increased breathlessness and a change in sputum." },
        { h: "Asthma", p: "Asthma is reversible airway narrowing from inflammation and bronchospasm. Short-acting beta-agonists such as albuterol are quick relievers; inhaled corticosteroids are daily preventers. A 'silent chest' with exhaustion means almost no air is moving — a life-threatening emergency needing immediate help." },
        { h: "Pneumonia", p: "Pneumonia causes fever, productive cough, breathlessness, and crackles. Care includes antibiotics on time, oxygen, fluids, sitting the client upright, encouraging deep breathing and coughing, and using incentive spirometry. Prevent hospital pneumonia by mobilizing early, elevating the head of the bed, and good oral care." },
        { h: "Tuberculosis", p: "TB causes a cough lasting weeks, night sweats, weight loss, and low-grade fever. It needs airborne precautions with an N95 respirator and a negative-pressure room, and months of multidrug therapy. Stress completing the full course and giving pyridoxine with isoniazid to prevent nerve damage." },
        { h: "Recognizing Deterioration", p: "Escalate urgently for a saturation under 90 not responding to oxygen, a very high or very low respiratory rate, stridor, a silent chest, confusion, or one-word answers. These signal impending respiratory failure — keep the client upright, give oxygen, and get help at once." }
      ],
      checkIn: [
        { id: "ncx-resp-q1", subject: "adult-health", diff: 2, stem: "The target oxygen saturation for a COPD client who retains CO2 is:", options: ["95–100%","88–92%","80–85%","Above 99%"], answer: 1, explanation: "Aim for 88–92% in CO2-retaining COPD to avoid suppressing the hypoxic drive." },
        { id: "ncx-resp-q2", subject: "adult-health", diff: 1, stem: "The quick-relief inhaler for acute asthma symptoms is:", options: ["An inhaled corticosteroid","Albuterol (short-acting beta-agonist)","A leukotriene blocker","An antibiotic"], answer: 1, explanation: "Short-acting beta-agonists such as albuterol relieve bronchospasm quickly." },
        { id: "ncx-resp-q3", subject: "adult-health", diff: 3, stem: "A 'silent chest' in acute severe asthma indicates:", options: ["The attack is resolving","Minimal air movement and impending respiratory failure","A normal finding","Successful treatment"], answer: 1, explanation: "A silent chest means air is barely moving — a life-threatening emergency." },
        { id: "ncx-resp-q4", subject: "adult-health", diff: 2, stem: "A client with active TB requires:", options: ["Contact precautions","Droplet precautions","Airborne precautions with an N95 respirator","Standard precautions only"], answer: 2, explanation: "TB spreads by airborne nuclei; use airborne precautions and an N95 respirator." },
        { id: "ncx-resp-q5", subject: "adult-health", diff: 1, stem: "Which position best eases breathing in a dyspneic client?", options: ["Supine flat","High-Fowler's (sitting upright)","Trendelenburg","Left lateral"], answer: 1, explanation: "Sitting upright maximizes lung expansion and eases breathing." },
        { id: "ncx-resp-q6", subject: "adult-health", diff: 2, stem: "Crackles heard on auscultation usually indicate:", options: ["Narrowed airways","Fluid or secretions in the airways","Upper-airway obstruction","Pleural inflammation"], answer: 1, explanation: "Crackles are produced by air moving through fluid or secretions, as in pneumonia or heart failure." },
        { id: "ncx-resp-q7", subject: "adult-health", diff: 1, stem: "A safety teaching point for home oxygen is:", options: ["Smoking nearby is fine","No smoking or open flames near oxygen","Store the tank near a heater","Oxygen is not flammable"], answer: 1, explanation: "Oxygen supports combustion; keep it away from smoking, flames, and heat." },
        { id: "ncx-resp-q8", subject: "adult-health", diff: 2, stem: "Pyridoxine (vitamin B6) is given with isoniazid to prevent:", options: ["Liver failure","Peripheral neuropathy","Hearing loss","Kidney stones"], answer: 1, explanation: "Pyridoxine prevents the peripheral neuropathy that isoniazid can cause." },
        { id: "ncx-resp-q9", subject: "adult-health", diff: 3, stem: "Which device delivers the most precise oxygen concentration, useful in COPD?", options: ["Nasal cannula","Simple face mask","Venturi mask","Non-rebreather mask"], answer: 2, explanation: "The Venturi mask delivers a precise, fixed oxygen concentration, ideal for COPD." },
        { id: "ncx-resp-q10", subject: "adult-health", diff: 2, stem: "A daily preventer for asthma that should be used even when well is:", options: ["Albuterol","An inhaled corticosteroid","Oral antibiotics","A decongestant"], answer: 1, explanation: "Inhaled corticosteroids reduce airway inflammation and are taken daily to prevent attacks." }
      ]
    },
    {
      id: "ncx-t-endocrine",
      title: "Endocrine & Diabetes Nursing",
      subject: "adult-health",
      readMinutes: 9,
      summary: "Recognizing and treating hypo- and hyperglycemia, insulin safety, diabetic emergencies, and thyroid disorders — frequent NCLEX territory.",
      content: [
        { h: "Diabetes Basics", p: "Type 1 diabetes needs insulin for life; type 2 is managed with lifestyle, oral drugs, and sometimes insulin. Diagnosis includes a fasting glucose of 126 mg/dL or higher, or an HbA1c of 6.5% or higher, which reflects average glucose over about three months." },
        { h: "Hypoglycemia — The Acute Emergency", p: "Blood glucose under 70 mg/dL causes sweating, shaking, hunger, confusion, and, if untreated, seizures. Treat a conscious client with 15 grams of fast-acting carbohydrate, recheck in 15 minutes, then give a longer-acting snack. For an unconscious client give IM glucagon or IV dextrose — never anything by mouth." },
        { h: "Hyperglycemia & DKA", p: "High glucose causes thirst, frequent urination, and fatigue. Diabetic ketoacidosis (mainly type 1) brings deep rapid Kussmaul breathing, a fruity breath odor, dehydration, and drowsiness. Management starts with IV fluids, then an insulin infusion with careful potassium replacement and hourly monitoring." },
        { h: "Insulin Safety", p: "Insulin is high-alert. Rapid-acting insulin is given with food; long-acting provides steady background coverage. Rotate injection sites, and when mixing, draw clear before cloudy. Match the insulin's peak to the risk of hypoglycemia, and teach clients sick-day rules — never stop insulin when ill." },
        { h: "Long-Term Complications & Foot Care", p: "Chronic high glucose damages eyes, kidneys, nerves, and vessels. Foot care is vital: inspect feet daily, wear well-fitting shoes, never go barefoot, and treat any wound promptly, because reduced sensation and poor circulation lead to ulcers and amputation." },
        { h: "Thyroid Disorders", p: "Hypothyroidism slows metabolism — fatigue, weight gain, cold intolerance, and constipation — and is treated with lifelong levothyroxine taken on an empty stomach. Hyperthyroidism speeds it up — weight loss, heat intolerance, tremor, and palpitations. Thyroid storm and myxedema coma are the dangerous extremes." },
        { h: "Teaching & Monitoring", p: "Teach balanced eating, activity, medication use, glucose self-monitoring, and recognizing and treating lows. HbA1c guides long-term control. Empowered clients with good self-care have far fewer emergencies and complications." }
      ],
      checkIn: [
        { id: "ncx-endo-q1", subject: "adult-health", diff: 1, stem: "The immediate treatment for a conscious client with hypoglycemia is:", options: ["A dose of long-acting insulin","15 grams of fast-acting carbohydrate","IV antibiotics","Nothing by mouth"], answer: 1, explanation: "Give 15 g of fast-acting carbohydrate, recheck in 15 minutes, then a snack (the 15/15 rule)." },
        { id: "ncx-endo-q2", subject: "adult-health", diff: 2, stem: "Deep, rapid breathing with a fruity breath odor suggests:", options: ["Hypoglycemia","Diabetic ketoacidosis","Hypothyroidism","Thyroid storm"], answer: 1, explanation: "Kussmaul breathing and a fruity (acetone) odor are classic signs of DKA." },
        { id: "ncx-endo-q3", subject: "adult-health", diff: 2, stem: "An unconscious hypoglycemic client should receive:", options: ["Oral glucose gel","Glucose tablets by mouth","IM glucagon or IV dextrose","A normal meal"], answer: 2, explanation: "Never give oral substances to an unconscious client; use IM glucagon or IV dextrose." },
        { id: "ncx-endo-q4", subject: "adult-health", diff: 1, stem: "An HbA1c diagnostic of diabetes is:", options: ["≥5.0%","≥5.7%","≥6.5%","≥8.0%"], answer: 2, explanation: "An HbA1c of 6.5% or higher is diagnostic of diabetes." },
        { id: "ncx-endo-q5", subject: "adult-health", diff: 3, stem: "The FIRST priority in managing diabetic ketoacidosis is:", options: ["IV insulin push","IV fluid replacement","Oral hypoglycemics","Potassium-free fluids"], answer: 1, explanation: "DKA management begins with IV fluids, followed by an insulin infusion and careful potassium replacement." },
        { id: "ncx-endo-q6", subject: "adult-health", diff: 2, stem: "Which finding is typical of hypothyroidism?", options: ["Weight loss and heat intolerance","Fatigue, weight gain, and cold intolerance","Tremor and palpitations","Bulging eyes"], answer: 1, explanation: "An underactive thyroid slows metabolism, causing fatigue, weight gain, and cold intolerance." },
        { id: "ncx-endo-q7", subject: "adult-health", diff: 1, stem: "Blood glucose below which value defines hypoglycemia?", options: ["110 mg/dL","100 mg/dL","70 mg/dL","140 mg/dL"], answer: 2, explanation: "Hypoglycemia is generally a blood glucose under 70 mg/dL." },
        { id: "ncx-endo-q8", subject: "adult-health", diff: 2, stem: "Levothyroxine for hypothyroidism is best taken:", options: ["With a large meal","On an empty stomach in the morning","At bedtime with milk","Only when symptomatic"], answer: 1, explanation: "Levothyroxine is taken on an empty stomach for proper absorption." },
        { id: "ncx-endo-q9", subject: "adult-health", diff: 2, stem: "Key teaching for diabetic foot care includes:", options: ["Walking barefoot to toughen skin","Daily foot inspection and well-fitting shoes","Soaking feet in hot water daily","Ignoring minor cuts"], answer: 1, explanation: "Daily inspection and proper footwear prevent ulcers in diabetic neuropathy." },
        { id: "ncx-endo-q10", subject: "adult-health", diff: 3, stem: "During illness ('sick days'), a client with type 1 diabetes should:", options: ["Stop insulin","Continue insulin and monitor glucose closely","Double all oral medicines","Fast completely"], answer: 1, explanation: "Insulin is continued during illness, with frequent monitoring, because illness raises glucose and risks DKA." }
      ]
    },
    {
      id: "ncx-t-maternal",
      title: "Maternal & Newborn Health",
      subject: "midwifery",
      readMinutes: 9,
      summary: "Prenatal care, danger signs, labor stages, postpartum hemorrhage, pre-eclampsia, and essential newborn care for the NCLEX maternity questions.",
      content: [
        { h: "Prenatal Care", p: "Prenatal visits monitor mother and baby and catch problems early. Care includes blood pressure and weight checks, urine testing, measuring fundal height, listening to the fetal heart, and supplements of folic acid and iron. Folic acid before and in early pregnancy reduces neural-tube defects." },
        { h: "Danger Signs", p: "Teach every pregnant client to seek urgent care for severe headache or blurred vision, facial or hand swelling, vaginal bleeding, severe abdominal pain, reduced fetal movement, fever, or seizures. These can signal pre-eclampsia, hemorrhage, infection, or fetal distress." },
        { h: "Labor Stages", p: "The first stage runs from regular contractions to full (10 cm) cervical dilation and is the longest. The second stage is from full dilation to the birth of the baby. The third stage is delivery of the placenta. Monitor the fetal heart rate; late decelerations suggest poor placental oxygen and need intervention." },
        { h: "Pre-eclampsia", p: "Pre-eclampsia is new high blood pressure of 140/90 or more with protein in the urine after 20 weeks, often with headache, visual changes, and swelling. Untreated it can progress to eclampsia (seizures). Magnesium sulfate prevents and treats seizures; calcium gluconate is its antidote. Monitor reflexes, breathing, and urine output." },
        { h: "Postpartum Hemorrhage", p: "Blood loss over 500 mL after vaginal birth is hemorrhage; the leading cause is uterine atony — a poorly contracting uterus. The first actions are to massage the fundus, give a uterotonic such as oxytocin, ensure IV access, and monitor vital signs. Remember the four T's: tone, trauma, tissue, thrombin." },
        { h: "Essential Newborn Care", p: "At birth, dry the baby, keep it warm skin-to-skin, and ensure breathing. Initiate breastfeeding within the first hour for colostrum and bonding. The Apgar score is assessed at 1 and 5 minutes. Watch for danger signs: poor feeding, fast or labored breathing, fever or low temperature, and early jaundice." },
        { h: "Breastfeeding", p: "Exclusive breastfeeding is recommended for the first six months. Good latch means the baby's mouth covers much of the areola, preventing sore nipples and ensuring intake. Colostrum, the first thick milk, is rich in antibodies. Feed on demand to build the milk supply." }
      ],
      checkIn: [
        { id: "ncx-mat-q1", subject: "midwifery", diff: 2, stem: "The most common cause of postpartum hemorrhage is:", options: ["Retained placenta","Uterine atony","Cervical laceration","Clotting disorder"], answer: 1, explanation: "Uterine atony — a poorly contracting uterus — is the leading cause of postpartum hemorrhage." },
        { id: "ncx-mat-q2", subject: "midwifery", diff: 2, stem: "The first-line drug to prevent and treat eclamptic seizures is:", options: ["Diazepam","Magnesium sulfate","Phenytoin","Calcium gluconate"], answer: 1, explanation: "Magnesium sulfate is first-line; calcium gluconate is its antidote." },
        { id: "ncx-mat-q3", subject: "midwifery", diff: 1, stem: "The Apgar score is assessed at:", options: ["Birth and 30 minutes","1 and 5 minutes","5 and 10 minutes","10 and 20 minutes"], answer: 1, explanation: "Apgar is scored at 1 and 5 minutes after birth." },
        { id: "ncx-mat-q4", subject: "midwifery", diff: 2, stem: "Pre-eclampsia is diagnosed after 20 weeks with:", options: ["BP ≥120/80","BP ≥140/90 plus proteinuria","Proteinuria alone","Swelling alone"], answer: 1, explanation: "Pre-eclampsia is new hypertension ≥140/90 with proteinuria after 20 weeks." },
        { id: "ncx-mat-q5", subject: "midwifery", diff: 1, stem: "The first stage of labor ends when:", options: ["Contractions begin","The cervix is fully (10 cm) dilated","The baby is born","The placenta is delivered"], answer: 1, explanation: "The first stage runs from onset of labor to full cervical dilation." },
        { id: "ncx-mat-q6", subject: "midwifery", diff: 3, stem: "The FIRST nursing action for a boggy uterus with heavy bleeding after birth is to:", options: ["Give pain medication","Massage the fundus","Start oral fluids","Document the finding"], answer: 1, explanation: "Massage the fundus first to stimulate contraction, then give a uterotonic and monitor." },
        { id: "ncx-mat-q7", subject: "midwifery", diff: 2, stem: "A danger sign in pregnancy requiring urgent care is:", options: ["Mild back ache","Severe headache with blurred vision","Mild nausea","Occasional heartburn"], answer: 1, explanation: "Severe headache with visual changes suggests pre-eclampsia and needs urgent assessment." },
        { id: "ncx-mat-q8", subject: "midwifery", diff: 1, stem: "Breastfeeding should ideally be initiated:", options: ["Within the first hour of birth","After 6 hours","After 24 hours","After the first bath"], answer: 0, explanation: "Early initiation within the first hour provides colostrum and promotes bonding." },
        { id: "ncx-mat-q9", subject: "midwifery", diff: 3, stem: "During magnesium sulfate therapy, the nurse must monitor for toxicity by checking:", options: ["Blood glucose","Deep tendon reflexes, respirations, and urine output","Pupil size","Bowel sounds"], answer: 1, explanation: "Loss of reflexes, slow respirations, or low urine output signal magnesium toxicity; have calcium gluconate ready." },
        { id: "ncx-mat-q10", subject: "midwifery", diff: 2, stem: "Late decelerations of the fetal heart rate suggest:", options: ["A normal finding","Uteroplacental insufficiency needing intervention","Maternal anxiety","Fetal sleep"], answer: 1, explanation: "Late decelerations indicate poor placental oxygen delivery and require prompt intervention." }
      ]
    },
    {
      id: "ncx-t-pediatric",
      title: "Pediatric Nursing",
      subject: "child-health",
      readMinutes: 8,
      summary: "Growth and vital-sign norms, immunization, dehydration, respiratory illness, and the safety priorities of caring for children on the NCLEX.",
      content: [
        { h: "Growth & Development", p: "Children develop head-to-toe and in a predictable order. Birth weight roughly doubles by about six months and triples by one year. Match care and teaching to the developmental stage — for example, give a toddler simple choices and allow a school-age child to ask questions." },
        { h: "Pediatric Vital Signs", p: "Children's normal ranges differ from adults and change with age. A newborn's heart rate is about 100–160 and respirations 30–60; rates slow toward adult values with age. Always use an appropriately sized blood-pressure cuff, and remember that fast breathing and a fast heart rate are early warning signs in a sick child." },
        { h: "Immunization", p: "Vaccines protect the child and, through herd immunity, the community. Keep the cold chain so vaccines stay effective, and record every dose. Live vaccines are generally avoided in significant immunodeficiency. Counsel parents that mild fever or soreness after vaccination is common and expected." },
        { h: "Dehydration & Diarrhea", p: "Diarrhea causes dangerous dehydration in children. Assess for sunken eyes, dry mouth, poor skin turgor, lethargy, and reduced urine and tears. Oral rehydration solution is first-line for mild-to-moderate dehydration; severe dehydration needs IV fluids. Zinc reduces the severity and duration of diarrhea." },
        { h: "Respiratory Illness", p: "Respiratory infections are common and can worsen fast. Signs of distress include fast breathing, nasal flaring, grunting, and chest retractions. Position the child for comfort and airway, give oxygen as ordered, and avoid examining the throat in suspected epiglottitis, which can trigger airway obstruction." },
        { h: "Safety", p: "Injury is a leading cause of childhood harm. Teach safe sleep for infants (on the back, no loose bedding), car-seat use, poison and burn prevention, and supervision near water. Match safety teaching to the child's mobility and curiosity at each age." },
        { h: "Atraumatic, Family-Centered Care", p: "Involve parents, explain in age-appropriate words, allow a comfort object, and reduce pain and fear — for example by clustering blood draws and using distraction. Weigh children accurately, since pediatric drug doses are calculated per kilogram of body weight." }
      ],
      checkIn: [
        { id: "ncx-ped-q1", subject: "child-health", diff: 1, stem: "An infant's birth weight normally triples by about:", options: ["3 months","6 months","12 months","24 months"], answer: 2, explanation: "Birth weight roughly doubles by about 6 months and triples by about one year." },
        { id: "ncx-ped-q2", subject: "child-health", diff: 1, stem: "A newborn's normal heart rate is approximately:", options: ["60–100 bpm","70–110 bpm","100–160 bpm","40–60 bpm"], answer: 2, explanation: "A newborn's normal heart rate is about 100–160 beats per minute." },
        { id: "ncx-ped-q3", subject: "child-health", diff: 2, stem: "The first-line treatment for mild-to-moderate dehydration from diarrhea is:", options: ["IV antibiotics","Oral rehydration solution","Anti-diarrheal drugs","Withholding all fluids"], answer: 1, explanation: "Oral rehydration solution replaces fluid and electrolytes and is first-line." },
        { id: "ncx-ped-q4", subject: "child-health", diff: 2, stem: "Signs of respiratory distress in a child include:", options: ["Slow deep breathing","Nasal flaring, grunting, and retractions","Pink skin and calm behavior","A strong cry"], answer: 1, explanation: "Nasal flaring, grunting, and chest retractions indicate increased work of breathing." },
        { id: "ncx-ped-q5", subject: "child-health", diff: 3, stem: "For a child with suspected epiglottitis, the nurse should avoid:", options: ["Giving oxygen","Examining the throat with a tongue depressor","Keeping the child calm","Sitting the child upright"], answer: 1, explanation: "Examining the throat can trigger complete airway obstruction in epiglottitis." },
        { id: "ncx-ped-q6", subject: "child-health", diff: 1, stem: "Maintaining the 'cold chain' for vaccines means:", options: ["Keeping the child cool","Keeping vaccines within a safe temperature range","Vaccinating only in winter","Cooling the injection site"], answer: 1, explanation: "The cold chain keeps vaccines effective; breaking it makes them useless." },
        { id: "ncx-ped-q7", subject: "child-health", diff: 1, stem: "Safe infant sleep position is:", options: ["On the stomach","On the back","On the side","Propped upright"], answer: 1, explanation: "Placing infants on the back to sleep reduces the risk of sudden infant death." },
        { id: "ncx-ped-q8", subject: "child-health", diff: 2, stem: "Zinc supplementation in childhood diarrhea is given to:", options: ["Stop diarrhea instantly","Reduce the severity and duration","Replace breastfeeding","Treat fever"], answer: 1, explanation: "Zinc reduces the severity and duration of diarrhea and the risk of future episodes." },
        { id: "ncx-ped-q9", subject: "child-health", diff: 2, stem: "Pediatric medication doses are most commonly calculated based on:", options: ["Age in years","Body weight in kilograms","Height alone","A fixed adult dose"], answer: 1, explanation: "Pediatric doses are calculated per kilogram, so accurate weighing is essential." },
        { id: "ncx-ped-q10", subject: "child-health", diff: 3, stem: "Which dehydrated child should the nurse assess FIRST?", options: ["A child with moist mouth and normal play","A lethargic child with sunken eyes and no tears","A child with one loose stool","A child drinking ORS well"], answer: 1, explanation: "Lethargy, sunken eyes, and absent tears signal severe dehydration — the highest priority." }
      ]
    },
    {
      id: "ncx-t-psych",
      title: "Psychosocial Integrity & Mental Health",
      subject: "psychiatric",
      readMinutes: 8,
      summary: "Therapeutic communication, suicide-risk priority, key psychiatric conditions and medications, and the safety focus the NCLEX brings to mental-health care.",
      content: [
        { h: "Therapeutic Communication", p: "The NCLEX rewards answers that use open-ended questions, active listening, silence, reflection, and validation. It penalizes false reassurance ('Don't worry, it will be fine'), giving advice, asking 'why', changing the subject, and being judgmental. The best response usually focuses on the client's feelings." },
        { h: "Suicide Risk Is Priority", p: "Take every expression of suicidal thinking seriously. Ask directly whether the client is thinking of harming themselves — asking does not plant the idea. Assess intent, plan, and means. Safety is the priority: provide close observation, remove dangerous objects, and never leave a high-risk client alone." },
        { h: "Anxiety & Depression", p: "Mild anxiety can sharpen focus, but severe anxiety and panic impair function — stay with the client, use a calm voice, and keep instructions simple. Depression brings low mood, loss of interest, and changes in sleep and appetite; always screen for suicide. Watch for a sudden lift in mood, which can mean the client has decided on a plan." },
        { h: "Schizophrenia", p: "Positive symptoms add experiences — hallucinations and delusions; negative symptoms remove function — flat affect and withdrawal. Do not argue about delusions; acknowledge feelings and focus on reality and safety. Auditory hallucinations are the most common; ask directly whether voices are telling the client to harm anyone." },
        { h: "Psychiatric Medications", p: "Antidepressants (SSRIs) take two to four weeks to work — counsel clients not to stop early. Lithium needs blood-level monitoring (0.6–1.2 mEq/L), with early toxicity causing nausea, tremor, and diarrhea. Antipsychotics can cause movement disorders, including tardive dyskinesia with long-term use; watch for neuroleptic malignant syndrome (high fever, rigidity), a medical emergency." },
        { h: "Therapeutic Environment & Boundaries", p: "Provide a safe, structured, non-judgmental environment. Maintain professional boundaries while showing empathy and consistency. Set limits calmly and respect the client's dignity. For escalating behavior, ensure safety first, reduce stimulation, and use the least restrictive measures." },
        { h: "Substance Withdrawal", p: "Alcohol withdrawal can be dangerous — tremor, sweating, agitation, and, at its worst, seizures and delirium tremens. Provide a calm environment, monitor closely, and give medication as ordered. Approach all substance-use clients without judgment and connect them to support and treatment." }
      ],
      checkIn: [
        { id: "ncx-psy-q1", subject: "psychiatric", diff: 2, stem: "The best response to a client who says 'I won't be a burden much longer' is:", options: ["'You'll feel better tomorrow'","'Are you thinking of harming yourself?'","'Don't talk like that'","'Let's discuss something positive'"], answer: 1, explanation: "Direct questioning assesses suicidal intent and shows concern; it does not plant the idea." },
        { id: "ncx-psy-q2", subject: "psychiatric", diff: 1, stem: "A therapeutic communication technique is:", options: ["Giving false reassurance","Active listening and open-ended questions","Changing the subject","Giving advice"], answer: 1, explanation: "Active listening and open-ended questions build trust; false reassurance is a barrier." },
        { id: "ncx-psy-q3", subject: "psychiatric", diff: 1, stem: "The priority when caring for a suicidal client is:", options: ["Encouraging hobbies","Ensuring safety and close observation","Avoiding the topic","Quick discharge"], answer: 1, explanation: "Safety is the priority — assess intent, remove means, and observe closely." },
        { id: "ncx-psy-q4", subject: "psychiatric", diff: 1, stem: "The therapeutic serum lithium range is:", options: ["0.1–0.5 mEq/L","0.6–1.2 mEq/L","1.5–2.5 mEq/L","3.0–4.0 mEq/L"], answer: 1, explanation: "Therapeutic lithium is 0.6–1.2 mEq/L; above 1.5 mEq/L is toxic." },
        { id: "ncx-psy-q5", subject: "psychiatric", diff: 2, stem: "When a client states a fixed false belief (delusion), the nurse should:", options: ["Argue to correct it","Acknowledge the feeling without reinforcing the belief","Agree with the belief","Ignore the client"], answer: 1, explanation: "Do not argue or agree with delusions; acknowledge feelings and gently focus on reality." },
        { id: "ncx-psy-q6", subject: "psychiatric", diff: 2, stem: "SSRIs typically take how long to reach full effect?", options: ["A few hours","1–2 days","2–4 weeks","6 months"], answer: 2, explanation: "Antidepressants usually take 2–4 weeks; counsel clients not to stop early." },
        { id: "ncx-psy-q7", subject: "psychiatric", diff: 3, stem: "High fever, muscle rigidity, and altered consciousness in a client on antipsychotics suggest:", options: ["Tardive dyskinesia","Neuroleptic malignant syndrome","Normal side effects","Lithium toxicity"], answer: 1, explanation: "Neuroleptic malignant syndrome is a life-threatening emergency — stop the drug and get help." },
        { id: "ncx-psy-q8", subject: "psychiatric", diff: 2, stem: "Early signs of lithium toxicity include:", options: ["Constipation and dry skin","Nausea, tremor, and diarrhea","Weight gain only","Hair loss"], answer: 1, explanation: "Early lithium toxicity causes nausea, coarse tremor, and diarrhea." },
        { id: "ncx-psy-q9", subject: "psychiatric", diff: 3, stem: "A dangerous feature of alcohol withdrawal is:", options: ["Mild headache","Seizures and delirium tremens","Increased appetite","Drowsiness only"], answer: 1, explanation: "Severe alcohol withdrawal can cause seizures and delirium tremens, which can be fatal." },
        { id: "ncx-psy-q10", subject: "psychiatric", diff: 2, stem: "A sudden lift in mood and energy in a severely depressed client may indicate:", options: ["Full recovery","Increased suicide risk as energy returns","A medication side effect only","Nothing significant"], answer: 1, explanation: "A sudden improvement can mean the client has the energy to act on a suicide plan — increase vigilance." }
      ]
    },
    {
      id: "ncx-t-labs",
      title: "Lab Values & Diagnostics",
      subject: "adult-health",
      readMinutes: 8,
      summary: "The normal lab values and critical results the NCLEX expects you to recognize and act on — electrolytes, blood counts, kidney and glucose markers, and key drug levels.",
      content: [
        { h: "Why Lab Values Matter", p: "The NCLEX expects you to recognize an abnormal or critical value and know what to do — usually to hold a drug, notify the prescriber, or assess the client. Learn the common ranges and the few 'critical' results that demand immediate action." },
        { h: "Electrolytes", p: "Sodium 135–145 mEq/L; potassium 3.5–5.0 mEq/L; calcium about 8.5–10.5 mg/dL; magnesium about 1.5–2.5 mg/dL. Potassium is the most dangerous when abnormal — both high and low values cause life-threatening arrhythmias, so always check the monitor and the most recent value." },
        { h: "Blood Counts", p: "Hemoglobin is roughly 12–16 g/dL in women and 14–18 in men; platelets 150,000–400,000; white blood cells 4,500–11,000. Low platelets raise bleeding risk; a very low white count (neutropenia) raises infection risk and calls for protective measures. A low hemoglobin signals anemia or bleeding." },
        { h: "Kidney & Glucose Markers", p: "Creatinine (about 0.6–1.2 mg/dL) and blood urea nitrogen reflect kidney function; rising values mean worsening kidneys and the need to review nephrotoxic or renally cleared drugs. Fasting glucose is 70–99 mg/dL normally; an HbA1c of 6.5% or higher is diagnostic of diabetes." },
        { h: "Coagulation & Drug Levels", p: "Warfarin is monitored by INR (target about 2–3) and heparin by aPTT. Narrow-range drug levels: digoxin 0.5–2.0 ng/mL and lithium 0.6–1.2 mEq/L. A value above the range is toxic — hold the drug, assess the client, and notify the prescriber." },
        { h: "Critical Values & Action", p: "Some results require action now: a potassium above about 6 or below 2.5, a glucose under 70 or very high with ketones, an INR far above target with bleeding, or a platelet count that is dangerously low. The nurse holds relevant drugs, protects the client, and reports immediately." },
        { h: "Reading Lab Questions", p: "When a question gives a lab value, first decide if it is normal, high, or low, then choose the safest action — often to notify the prescriber or hold a medication. Do not pick an answer that ignores a critical value or gives a drug that the value contraindicates." }
      ],
      checkIn: [
        { id: "ncx-lab-q1", subject: "adult-health", diff: 1, stem: "The normal range for serum sodium is:", options: ["120–130 mEq/L","135–145 mEq/L","150–160 mEq/L","100–110 mEq/L"], answer: 1, explanation: "Normal serum sodium is 135–145 mEq/L." },
        { id: "ncx-lab-q2", subject: "adult-health", diff: 2, stem: "A client's potassium is 6.5 mEq/L. The nurse should FIRST:", options: ["Give a potassium supplement","Assess the client and cardiac monitor and notify the prescriber","Encourage a banana","Ignore it"], answer: 1, explanation: "Hyperkalemia is critical; assess the client and ECG and notify the prescriber immediately." },
        { id: "ncx-lab-q3", subject: "adult-health", diff: 1, stem: "A normal fasting blood glucose is:", options: ["40–60 mg/dL","70–99 mg/dL","120–140 mg/dL","150–180 mg/dL"], answer: 1, explanation: "A normal fasting glucose is about 70–99 mg/dL." },
        { id: "ncx-lab-q4", subject: "adult-health", diff: 2, stem: "A very low white blood cell count (neutropenia) puts the client at greatest risk for:", options: ["Bleeding","Infection","Clotting","Dehydration"], answer: 1, explanation: "Neutropenia raises infection risk and calls for protective (neutropenic) precautions." },
        { id: "ncx-lab-q5", subject: "adult-health", diff: 2, stem: "Rising serum creatinine indicates worsening function of the:", options: ["Liver","Kidneys","Heart","Lungs"], answer: 1, explanation: "Creatinine reflects kidney function; a rising value signals declining kidneys." },
        { id: "ncx-lab-q6", subject: "adult-health", diff: 1, stem: "The therapeutic INR target for most clients on warfarin is about:", options: ["0.5–1.0","2.0–3.0","5.0–6.0","8.0–9.0"], answer: 1, explanation: "The usual warfarin INR target is about 2.0–3.0." },
        { id: "ncx-lab-q7", subject: "adult-health", diff: 3, stem: "A client on warfarin has an INR of 6.5 with bleeding gums. The nurse anticipates:", options: ["Increasing the warfarin dose","Holding warfarin and giving vitamin K","Giving heparin","No change"], answer: 1, explanation: "A high INR with bleeding requires holding warfarin and giving vitamin K." },
        { id: "ncx-lab-q8", subject: "adult-health", diff: 2, stem: "A low platelet count places the client at greatest risk for:", options: ["Infection","Bleeding","Clots","Seizures"], answer: 1, explanation: "Low platelets impair clotting and raise bleeding risk; use bleeding precautions." },
        { id: "ncx-lab-q9", subject: "adult-health", diff: 1, stem: "The normal adult platelet count is:", options: ["20,000–50,000/µL","150,000–400,000/µL","500,000–700,000/µL","1–4 million/µL"], answer: 1, explanation: "A normal platelet count is 150,000–400,000/µL; low values raise bleeding risk." },
        { id: "ncx-lab-q10", subject: "adult-health", diff: 3, stem: "When a question presents a critical lab value, the nurse's safest action is usually to:", options: ["Document and continue","Hold the relevant drug, assess the client, and notify the prescriber","Repeat the test next week","Give the scheduled medication anyway"], answer: 1, explanation: "Critical values require holding relevant drugs, assessing the client, and notifying the prescriber promptly." }
      ]
    }
  ];

  /* ============================================================
     QUESTION BANK — standalone items deepen the pool for model sets
     and adaptive exams. Topic check-ins are merged in below.
     ============================================================ */
  const questionBank = [
    { id: "ncx-fn-001", subject: "fundamental-nursing", diff: 1, stem: "The nurse's priority in any emergency is to assess:", options: ["Level of pain","Airway, breathing, and circulation","Family concerns","Documentation"], answer: 1, explanation: "Airway, breathing, and circulation (ABC) guide emergency priorities." },
    { id: "ncx-fn-002", subject: "fundamental-nursing", diff: 2, stem: "Which client can the charge nurse assign to a new graduate RN?", options: ["An unstable client just back from surgery","A stable client awaiting discharge teaching review","A client in active deterioration","A complex multi-system client"], answer: 1, explanation: "Assign the most stable, predictable client to a less-experienced nurse." },
    { id: "ncx-fn-003", subject: "fundamental-nursing", diff: 2, stem: "A nurse notices a colleague preparing a wrong dose. The best action is to:", options: ["Say nothing","Stop the error and speak up before it reaches the client","Report it only after the fact","Document it later"], answer: 1, explanation: "Patient safety requires speaking up to prevent the error before harm occurs." },
    { id: "ncx-fn-004", subject: "fundamental-nursing", diff: 1, stem: "Informed consent for surgery must be obtained by the:", options: ["Nurse","Provider performing the procedure","Family","Pharmacist"], answer: 1, explanation: "The provider performing the procedure obtains informed consent; the nurse may witness and confirm understanding." },
    { id: "ncx-fn-005", subject: "fundamental-nursing", diff: 2, stem: "A neutropenic client needs which type of precaution?", options: ["Airborne","Protective (neutropenic) precautions","Droplet","None"], answer: 1, explanation: "Neutropenic clients need protective measures to shield them from infection." },
    { id: "ncx-ah-001", subject: "adult-health", diff: 2, stem: "A post-operative client has not voided for 8 hours and feels bladder fullness. The nurse should first:", options: ["Insert a catheter immediately","Assess and try non-invasive measures to promote voiding","Restrict fluids","Ignore it"], answer: 1, explanation: "Assess first and try measures (privacy, warm water, ambulation) before invasive catheterization." },
    { id: "ncx-ah-002", subject: "adult-health", diff: 2, stem: "The earliest sign of hypoxia is often:", options: ["Cyanosis","Restlessness or anxiety","Bradycardia","Clubbing"], answer: 1, explanation: "Restlessness and anxiety are early signs of hypoxia; cyanosis is late." },
    { id: "ncx-ah-003", subject: "adult-health", diff: 3, stem: "A client with a chest tube has continuous bubbling in the water-seal chamber. This suggests:", options: ["Normal function","An air leak in the system","The lung has fully re-expanded","The tube should be clamped"], answer: 1, explanation: "Continuous bubbling in the water-seal chamber signals an air leak to investigate." },
    { id: "ncx-ah-004", subject: "adult-health", diff: 2, stem: "To prevent deep vein thrombosis after surgery, the nurse encourages:", options: ["Strict bed rest","Early ambulation and leg exercises","High-fat meals","Fluid restriction"], answer: 1, explanation: "Early mobilization and leg exercises reduce the risk of DVT." },
    { id: "ncx-ah-005", subject: "adult-health", diff: 3, stem: "A client with cirrhosis becomes confused and drowsy. The nurse suspects rising:", options: ["Blood glucose","Ammonia (hepatic encephalopathy)","Calcium","Sodium"], answer: 1, explanation: "Failing liver function raises ammonia, causing hepatic encephalopathy; lactulose is used to lower it." },
    { id: "ncx-ph-001", subject: "pharmacology", diff: 2, stem: "A client taking an ACE inhibitor should avoid salt substitutes because they may cause:", options: ["Hyponatremia","Hyperkalemia","Hypoglycemia","Hypercalcemia"], answer: 1, explanation: "ACE inhibitors retain potassium; salt substitutes (potassium chloride) can cause hyperkalemia." },
    { id: "ncx-ph-002", subject: "pharmacology", diff: 1, stem: "The fastest route for medication in an emergency is:", options: ["Oral","Intramuscular","Intravenous","Topical"], answer: 2, explanation: "The intravenous route delivers medication into the blood fastest." },
    { id: "ncx-ph-003", subject: "pharmacology", diff: 3, stem: "A client on an aminoglycoside antibiotic should be monitored for:", options: ["Improved vision","Hearing loss and kidney injury","Weight gain","Hair growth"], answer: 1, explanation: "Aminoglycosides are ototoxic and nephrotoxic; monitor hearing and kidney function." },
    { id: "ncx-co-001", subject: "community-health", diff: 1, stem: "Immunization to prevent disease before it occurs is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Rehabilitation"], answer: 0, explanation: "Primary prevention stops disease before it starts — immunization is a key example." },
    { id: "ncx-co-002", subject: "community-health", diff: 2, stem: "Screening a population for early cancer is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Health promotion"], answer: 1, explanation: "Secondary prevention detects disease early through screening." },
    { id: "ncx-co-003", subject: "community-health", diff: 2, stem: "Cardiac rehabilitation after a heart attack is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Immunization"], answer: 2, explanation: "Tertiary prevention limits disability and complications after disease has occurred." },
    { id: "ncx-nu-001", subject: "nutrition", diff: 2, stem: "A client on warfarin should keep intake of which nutrient consistent?", options: ["Vitamin C","Vitamin K (leafy greens)","Iron","Calcium"], answer: 1, explanation: "Vitamin K opposes warfarin; keep intake of leafy greens steady rather than fluctuating." },
    { id: "ncx-nu-002", subject: "nutrition", diff: 1, stem: "A client with chronic kidney disease should usually restrict:", options: ["Potassium and phosphorus","Vitamin C","Fiber","Water-soluble vitamins"], answer: 0, explanation: "CKD diets restrict potassium and phosphorus with controlled protein." },
    { id: "ncx-nu-003", subject: "nutrition", diff: 2, stem: "A client on an MAOI antidepressant must avoid foods high in:", options: ["Tyramine (aged cheese, cured meats)","Vitamin C","Fiber","Calcium"], answer: 0, explanation: "Tyramine-rich foods with an MAOI can cause a dangerous hypertensive crisis." },
    { id: "ncx-ch-001", subject: "child-health", diff: 1, stem: "Exclusive breastfeeding is recommended for the first:", options: ["3 months","6 months","9 months","12 months"], answer: 1, explanation: "Exclusive breastfeeding is recommended for the first six months." },
    { id: "ncx-ch-002", subject: "child-health", diff: 2, stem: "A general danger sign in a young child requiring urgent referral is:", options: ["Mild runny nose","Inability to drink or breastfeed","One loose stool","Slight fussiness"], answer: 1, explanation: "Inability to drink/breastfeed, vomiting everything, convulsions, and lethargy are danger signs." },
    { id: "ncx-mw-001", subject: "midwifery", diff: 2, stem: "A laboring client's membranes rupture and the fetal heart rate drops. The nurse FIRST:", options: ["Documents the finding","Repositions the client and checks for cord prolapse","Gives oxytocin","Discharges the client"], answer: 1, explanation: "After rupture with a heart-rate drop, reposition and assess for umbilical cord prolapse immediately." },
    { id: "ncx-mw-002", subject: "midwifery", diff: 1, stem: "Folic acid in early pregnancy helps prevent:", options: ["Anemia only","Neural tube defects","Gestational diabetes","Hypertension"], answer: 1, explanation: "Folic acid reduces the risk of neural tube defects such as spina bifida." },
    { id: "ncx-psy-b1", subject: "psychiatric", diff: 2, stem: "When a client is having a panic attack, the nurse should:", options: ["Leave them alone","Stay with the client and use a calm, simple voice","Give detailed instructions","Encourage caffeine"], answer: 1, explanation: "Stay with the client, remain calm, and use short, simple directions to reduce panic." }
  ];

  /* ---- Merge topic check-ins into the bank ---- */
  topics.forEach(function (t) {
    t.checkIn.forEach(function (q) {
      if (!questionBank.find(function (x) { return x.id === q.id; })) questionBank.push(q);
    });
  });

  /* ---- Helpers: avoid repeating a fact or stem within one test ---- */
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

  const tests = [];

  /* ---- 20 model question sets, 20 Q each, with fact/stem guards ---- */
  function pickIdsForTest(testNum, count) {
    const ids = questionBank.map(function (q) { return q.id; });
    const n = ids.length;
    if (n === 0) return [];
    const offset = ((testNum * 19) + 7) % n;
    const step = (n % 3 === 0) ? 4 : 3;
    const picks = [];
    const seen = {};
    const seenFact = {};
    const seenStem = {};
    let i = offset;
    let safety = n * 8;
    while (picks.length < count && safety-- > 0) {
      const id = ids[i % n];
      const fk = factKey(id), sk = stemKey(id);
      if (!seen[id] && !seenFact[fk] && !seenStem[sk]) { picks.push(id); seen[id] = true; seenFact[fk] = true; seenStem[sk] = true; }
      i += step;
    }
    let backfill = 0;
    while (picks.length < count && backfill < n) {
      const id = ids[backfill++];
      if (!seen[id]) { picks.push(id); seen[id] = true; }
    }
    return picks;
  }

  for (let i = 1; i <= 20; i++) {
    tests.push({
      id: "ncx-mt-" + String(i).padStart(2, "0"),
      title: "NCLEX-RN Question Set " + String(i).padStart(2, "0"),
      type: "model",
      duration: 25,
      intendedCount: 20,
      status: "live",
      questionIds: pickIdsForTest(i, 20)
    });
  }

  /* ---- 2 NCLEX-style adaptive exams ----
     The runner draws adaptively from `pool` using each question's `diff`,
     starting at medium and stepping difficulty up/down by performance,
     then estimates a pass probability. minQ/maxQ bound the exam length. */
  const adaptivePool = questionBank.map(function (q) { return q.id; });
  for (let i = 1; i <= 2; i++) {
    tests.push({
      id: "ncx-adaptive-" + String(i).padStart(2, "0"),
      title: "NCLEX-Style Adaptive Exam " + String(i).padStart(2, "0"),
      type: "adaptive",
      adaptive: true,
      duration: 90,
      minQ: 30,
      maxQ: 60,
      intendedCount: 60,
      status: "live",
      pool: adaptivePool.slice()
    });
  }

  /* ---- Topic check-in quizzes ---- */
  topics.forEach(function (t) {
    tests.push({
      id: "ncx-topic-" + t.id,
      title: t.title + " — Check-in",
      type: "topic-checkin",
      topicId: t.id,
      duration: Math.max(5, t.checkIn.length),
      intendedCount: t.checkIn.length,
      status: "live",
      questionIds: t.checkIn.map(function (q) { return q.id; })
    });
  });

  window.PulsePrograms["nclex"] = {
    topics: topics,
    questionBank: questionBank,
    tests: tests
  };
})();
