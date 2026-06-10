/* BNMC Registered Nurse Licensing Exam Preparation.
   Foundational-level content: 8th–12th grade biology + nursing fundamentals.
   Designed for diploma graduates sitting the BNMC RN exam. */
(function () {
  if (!window.PulsePrograms) window.PulsePrograms = {};

  const topics = [
    {
      id: "rn-t-vital-signs",
      title: "Vital Signs — The Basics",
      subject: "fundamental-nursing",
      readMinutes: 9,
      summary: "Step-by-step technique and normal ranges for temperature, pulse, respiration, blood pressure, and SpO₂ — plus how and when to report.",
      content: [
        { h: "Why Vital Signs Matter", p: "Vital signs are the simplest, fastest way to know if your patient is stable or getting worse. Always compare today's reading to the patient's own baseline. A slow upward drift in heart rate, or a quiet downward drift in blood pressure, is often the first sign of something wrong — long before the patient looks unwell." },
        { h: "Temperature", p: "Normal adult: 36.5–37.5 °C oral. Take after 15 minutes rest, away from hot or cold drinks. Rectal reading is about 0.5 °C higher than oral; axillary about 0.5 °C lower. Tympanic (ear) is quick but technique-sensitive. Fever in adults: >38 °C; very high (>40 °C) is an emergency. Low temperature (<36 °C) can also signal sepsis, especially in elderly or newborn." },
        { h: "Pulse", p: "Adult: 60–100 beats per minute. Use two fingers (not thumb) on radial artery at the wrist. Count for 30 seconds and multiply by 2 if the pulse is regular; count the full minute if irregular. Check rate, rhythm, and strength (weak / normal / bounding). In children: 80-130; infants: 100-160. Carotid pulse is used only during emergencies (e.g., cardiac arrest)." },
        { h: "Respiration", p: "Adult: 12–20 breaths per minute. Count while you appear to still be taking the pulse — if the patient knows you're watching the breaths, they change their breathing. Look for rise of the chest. Note depth (shallow/normal/deep), rhythm (regular/irregular), and any effort (use of accessory muscles, nasal flaring). Children breathe faster than adults; infants 30-60." },
        { h: "Blood Pressure", p: "Normal <120/80 mmHg. Patient seated 5 minutes, feet flat, back supported, arm at heart level. Cuff bladder should cover about 80% of arm circumference — too small a cuff gives a falsely high reading. Inflate to 30 mmHg above expected systolic, deflate at 2-3 mmHg/second. Systolic = first Korotkoff sound. Diastolic = sound disappears. Always retake if abnormal, and check both arms if first reading is concerning." },
        { h: "Pulse Oximetry (SpO₂)", p: "Often called the 'sixth vital sign'. Normal: 95–100% on room air. Below 90% needs intervention — usually oxygen. The probe needs good blood flow — remove nail polish, warm cold fingers, try the ear lobe if fingers are poor. In COPD patients with chronic CO₂ retention, target SpO₂ is lower (88-92%) so oxygen does not suppress their drive to breathe. Always combine the number with how the patient looks and is breathing." },
        { h: "Pediatric Normal Ranges", p: "Children's vitals change with age. Newborn: HR 100-160, RR 30-60. Infant (1-12 mo): HR 90-160, RR 25-50. Toddler (1-3 yr): HR 80-130, RR 20-30. Pre-school (3-5 yr): HR 80-120, RR 20-25. School-age (6-12 yr): HR 70-110, RR 18-24. Adolescent: nearly adult. Blood pressure is lower in children — always use a pediatric cuff and refer to age/height-based norms." },
        { h: "How to Take Each Vital Sign — Quick Drill", p: "Wash hands. Explain to the patient. Position correctly. Use the right equipment — clean and calibrated. Take the reading without rushing. Record immediately with date, time, and your initials. If any value is outside the expected range, recheck before reporting. Always report unexpected changes promptly to the senior nurse or doctor — do not wait for the next round." },
        { h: "When to Report Immediately", p: "Adults: HR <40 or >130, RR <8 or >30, SBP <90 or >180, DBP >110, SpO₂ <90% on room air, temperature >39.5 °C or <35 °C, sudden change in consciousness. Children: use age-appropriate ranges and any signs of poor perfusion (cold extremities, mottling, prolonged capillary refill). When in doubt, ask. Reporting quickly is always the right call — patient safety comes first." }
      ],
      checkIn: [
        { id: "rn-t-vs-q1", subject: "fundamental-nursing", stem: "Normal adult oral temperature:", options: ["35.0–36.0 °C","36.5–37.5 °C","37.5–38.5 °C","38.0–39.0 °C"], answer: 1, explanation: "36.5–37.5 °C is normal." },
        { id: "rn-t-vs-q2", subject: "fundamental-nursing", stem: "Adult resting pulse range:", options: ["40–60","60–100","100–140","Above 140"], answer: 1, explanation: "60–100 bpm normal." },
        { id: "rn-t-vs-q3", subject: "fundamental-nursing", stem: "Normal adult respiratory rate:", options: ["8–10","12–20","20–28","30–40"], answer: 1, explanation: "12–20 breaths/min." },
        { id: "rn-t-vs-q4", subject: "fundamental-nursing", stem: "Normal blood pressure is:", options: ["Less than 120/80","120/80","140/90","160/100"], answer: 0, explanation: "Normal: <120/80 mmHg." },
        { id: "rn-t-vs-q5", subject: "fundamental-nursing", stem: "Pulse is best counted for one full minute when it is:", options: ["Regular","Strong","Irregular","Fast"], answer: 2, explanation: "Irregular pulse requires a full-minute count for accuracy." },
        { id: "rn-t-vs-q6", subject: "fundamental-nursing", stem: "Normal oxygen saturation (SpO₂) on room air for a healthy adult is:", options: ["80–84%","85–89%","90–94%","95–100%"], answer: 3, explanation: "Normal SpO₂ on room air is 95–100%; below 90% needs attention." },
        { id: "rn-t-vs-q7", subject: "fundamental-nursing", stem: "Respirations should be counted:", options: ["While telling the patient","Without the patient being aware","Only when asleep","For 10 seconds × 6"], answer: 1, explanation: "Awareness changes the breathing rate, so count discreetly." },
        { id: "rn-t-vs-q8", subject: "fundamental-nursing", stem: "Fever in an adult is usually defined as a temperature above:", options: ["37 °C","38 °C","39 °C","40 °C"], answer: 1, explanation: "A temperature above 38 °C is generally considered fever." },
        { id: "rn-t-vs-q9", subject: "fundamental-nursing", stem: "An undersized blood pressure cuff will most likely give a:", options: ["Falsely low reading","Falsely high reading","Accurate reading","No reading"], answer: 1, explanation: "A too-small cuff requires extra pressure, falsely raising the reading." },
        { id: "rn-t-vs-q10", subject: "fundamental-nursing", stem: "The radial pulse is felt at the:", options: ["Neck","Wrist","Groin","Ankle"], answer: 1, explanation: "The radial pulse is felt at the wrist and is the routine site for checking pulse." }
      ]
    },
    {
      id: "rn-t-bedmaking",
      title: "Bed Making & Patient Positioning",
      subject: "fundamental-nursing",
      readMinutes: 9,
      summary: "Patient positions, why each one is used, bed-making types, pressure ulcer prevention, and safe lifting.",
      content: [
        { h: "Common Positions", p: "Supine: flat on back — examination, post-spinal-anaesthesia. Prone: lying on stomach — back examination, certain respiratory cases. Lateral (side-lying): unconscious recovery, prevents aspiration. Fowler's: head of bed 45–60° — breathing comfort, feeding. Semi-Fowler's: 30–45° — most ward patients, prevents ventilator-associated pneumonia. High Fowler's: 60–90° — severe shortness of breath. Sims' position: semi-prone, left side, top leg flexed — used for enemas and rectal exams. Trendelenburg: head down, feet up — historic shock position, now rarely used." },
        { h: "Position-Specific Indications", p: "Choose position by the patient's need. Breathing trouble → high Fowler's. Unconscious or post-operative still drowsy → lateral (recovery) position to keep airway clear. After spinal surgery → log-roll while keeping spine aligned. After hip replacement → avoid crossing legs, keep affected hip in abduction. Pulmonary edema → upright with legs dangling helps reduce venous return. Always explain the position to the patient and ask if it is comfortable." },
        { h: "Pressure Ulcer Prevention", p: "Reposition bed-bound patients every 2 hours, chair-bound every 1 hour. Inspect skin at every reposition, paying attention to bony points (sacrum, heels, hips, shoulders, elbows). Keep skin clean and dry. Use pressure-relieving mattress for at-risk patients. Heel protectors or pillows under calves to float heels off mattress. Adequate nutrition (protein, vitamin C, zinc) supports skin integrity. Use a validated risk tool such as Braden or Waterlow on admission and at any condition change." },
        { h: "Pressure Ulcer Staging", p: "Stage 1: intact skin with non-blanchable redness over bony point. Stage 2: partial-thickness loss, looks like a shallow open ulcer or blister. Stage 3: full-thickness loss, fat may be visible but not bone or tendon. Stage 4: full-thickness loss with exposed bone, tendon, or muscle. Unstageable: covered by slough/eschar so depth cannot be seen. Deep tissue injury: purple or maroon discoloration of intact skin. Document stage, size, and appearance on every dressing change." },
        { h: "Bed Making", p: "Closed bed: clean, empty bed with all linen tucked in — ready for a new admission. Open bed: closed bed with top sheet and blanket folded down — ready to receive a patient who is up or returning to the room. Occupied bed: patient stays in bed during linen change — roll the patient to one side, change half, roll to the other side, change the other half. Anaesthetic / post-op bed: top linen folded to one side, ready to slide a patient in from a trolley." },
        { h: "Moving & Lifting Safely", p: "Protect your own back. Wide base of support (feet shoulder-width apart). Bend at the knees, not the waist. Keep the load close to your body. Avoid twisting — pivot your feet. Push rather than pull when possible. Use mechanical lifts (hoist, slide sheet, transfer board) for any patient who cannot support their own weight or weighs more than you can safely manage alone. Never lift alone if uncertain — call for help. A back injury ends nursing careers; spend the extra 30 seconds." },
        { h: "Transferring a Patient — Steps", p: "Plan: explain to the patient, gather equipment, lock all wheels (bed and wheelchair). Position the chair on the patient's stronger side at a 45° angle to the bed. Help the patient to sitting; let them dangle their legs a moment to prevent dizziness. Stand close, support under the arms or use a transfer belt. Have the patient push off the bed; pivot on your feet, lower them into the chair. Always reassess: is the patient comfortable, safe, and at the right height? Two staff for any uncertain transfer." }
      ],
      checkIn: [
        { id: "rn-t-bm-q1", subject: "fundamental-nursing", stem: "Fowler's position elevates the head to:", options: ["15–20°","30–45°","45–60°","90°"], answer: 2, explanation: "Fowler's = 45–60°." },
        { id: "rn-t-bm-q2", subject: "fundamental-nursing", stem: "Best position for breathing difficulty:", options: ["Supine","Prone","High Fowler's","Trendelenburg"], answer: 2, explanation: "High Fowler's (60–90°) maximizes chest expansion." },
        { id: "rn-t-bm-q3", subject: "fundamental-nursing", stem: "Repositioning to prevent pressure ulcer is recommended every:", options: ["30 minutes","2 hours","4 hours","8 hours"], answer: 1, explanation: "Every 2 hours minimum." },
        { id: "rn-t-bm-q4", subject: "fundamental-nursing", stem: "Sims' position is used for:", options: ["Postural drainage","Enema administration","Spinal procedures","CPR"], answer: 1, explanation: "Sims' (semi-prone) is the position for rectal procedures and enemas." },
        { id: "rn-t-bm-q5", subject: "fundamental-nursing", stem: "An empty bed ready for a new admission is called:", options: ["Open bed","Closed bed","Occupied bed","Anesthetic bed"], answer: 1, explanation: "Closed bed = made, covered, ready." },
        { id: "rn-t-bm-q6", subject: "fundamental-nursing", stem: "An early sign of a developing pressure ulcer is:", options: ["Redness that does not fade when pressed","Increased appetite","Faster pulse","Clear urine"], answer: 0, explanation: "Non-blanching redness over a bony area is an early warning of a pressure ulcer." },
        { id: "rn-t-bm-q7", subject: "fundamental-nursing", stem: "When lifting a heavy object, the nurse should:", options: ["Bend at the waist","Keep the load away from the body","Bend the knees and use the leg muscles","Twist while lifting"], answer: 2, explanation: "Bend the knees, keep the load close, and use the strong leg muscles to protect the back." },
        { id: "rn-t-bm-q8", subject: "fundamental-nursing", stem: "The best position for an unconscious patient to keep the airway clear is:", options: ["Supine flat","Recovery (lateral) position","Prone","Sitting upright"], answer: 1, explanation: "The recovery (lateral) position lets secretions drain and keeps the airway open." },
        { id: "rn-t-bm-q9", subject: "fundamental-nursing", stem: "A pressure sore most commonly develops over:", options: ["The abdomen","Bony prominences such as the sacrum and heels","The palms","The forehead"], answer: 1, explanation: "Pressure ulcers form over bony prominences (sacrum, heels, hips) where pressure is greatest." },
        { id: "rn-t-bm-q10", subject: "fundamental-nursing", stem: "Hand hygiene before and after patient contact is done to:", options: ["Save time","Prevent the spread of infection","Replace gloves","Warm the hands"], answer: 1, explanation: "Hand hygiene is the most effective way to prevent the spread of infection between patients." }
      ]
    },
    {
      id: "rn-t-anatomy",
      title: "Anatomy Basics for RN",
      subject: "anatomy",
      readMinutes: 10,
      summary: "Numbers and facts you should be able to recite — bones, teeth, blood, heart, brain, plus key glands and muscles.",
      content: [
        { h: "Skeleton", p: "Adult: 206 bones. Newborn: ~270 bones (some fuse with growth). Two divisions: axial skeleton (80 bones — skull, vertebrae, ribs, sternum) and appendicular (126 — arms, legs, shoulder and hip girdles). Vertebrae: 33 total — 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), 4 coccygeal (fused). Longest bone: femur. Smallest bones: ossicles of the middle ear (malleus, incus, stapes)." },
        { h: "Teeth", p: "Adults have 32 permanent teeth: 8 incisors, 4 canines, 8 premolars, 12 molars (including 4 wisdom teeth, which may or may not erupt). Children have 20 deciduous (milk) teeth: 8 incisors, 4 canines, 8 molars. Milk teeth begin to come in at ~6 months, all in by ~3 years. First permanent tooth (first molar) appears at ~6 years." },
        { h: "Heart", p: "4 chambers: 2 atria (top) and 2 ventricles (bottom). 4 valves: tricuspid (between right atrium and right ventricle), pulmonary (between right ventricle and pulmonary artery), mitral or bicuspid (between left atrium and left ventricle), aortic (between left ventricle and aorta). Cardiac output ≈ 5 L/min at rest (heart rate × stroke volume = 70 × 70 mL)." },
        { h: "Blood", p: "Total blood volume ≈ 5–6 L in an adult — about 7-8% of body weight. Three cell types: red blood cells (RBC) carry oxygen — 4-6 million/μL, contain haemoglobin; white blood cells (WBC) fight infection — 4,000–11,000/μL; platelets help clotting — 150,000–400,000/μL. Blood plasma is the liquid part — 55% of blood volume. Blood groups: A, B, AB, O; each can be Rh-positive or Rh-negative. O-negative is universal donor; AB-positive is universal recipient." },
        { h: "Brain & Nervous System", p: "Brain has three main parts: cerebrum (largest — thinking, memory, sensation, voluntary movement), cerebellum (balance and coordination), brainstem (vital functions — breathing, heart rate, blood pressure). Cerebrum has four lobes: frontal (planning, movement), parietal (sensation), temporal (hearing, memory), occipital (vision). 12 pairs of cranial nerves and 31 pairs of spinal nerves. Autonomic nervous system has two branches: sympathetic ('fight or flight') and parasympathetic ('rest and digest')." },
        { h: "Digestive System", p: "Tract: mouth → pharynx → esophagus → stomach → small intestine (duodenum, jejunum, ileum) → large intestine (ascending, transverse, descending colon → sigmoid → rectum) → anus. Accessory organs: liver, gallbladder, pancreas, salivary glands. The liver is the largest internal organ and has many roles: bile production, glucose storage as glycogen, drug breakdown, protein production. Small intestine is where most absorption happens. Large intestine reabsorbs water and forms stool." },
        { h: "Muscular System", p: "About 600 muscles in the body, making up ~40% of body weight. Three types: skeletal (striped, voluntary — moves bones), smooth (involuntary — in walls of organs and blood vessels), cardiac (only in heart, involuntary). Muscles attach to bones by tendons. Muscles work in pairs — when one contracts, its partner relaxes (e.g., biceps and triceps). Movements: flexion (bending), extension (straightening), abduction (away from body), adduction (toward body), rotation." },
        { h: "Endocrine Glands at a Glance", p: "Pituitary ('master gland' at base of brain): controls many other glands. Thyroid (neck): T3 and T4 control metabolism; calcitonin lowers calcium. Parathyroid (4 small glands behind thyroid): PTH raises blood calcium. Adrenal glands (on top of kidneys): cortex makes cortisol and aldosterone; medulla makes adrenaline. Pancreas: insulin (beta cells) lowers blood sugar; glucagon (alpha cells) raises it. Ovaries / testes: sex hormones." }
      ],
      checkIn: [
        { id: "rn-t-an-q1", subject: "anatomy", stem: "Adult skeleton has how many bones?", options: ["198","206","216","270"], answer: 1, explanation: "206 in adult; ~270 at birth." },
        { id: "rn-t-an-q2", subject: "anatomy", stem: "How many cranial nerves?", options: ["10","12","14","31"], answer: 1, explanation: "12 pairs." },
        { id: "rn-t-an-q3", subject: "anatomy", stem: "Adults have how many permanent teeth?", options: ["20","28","32","36"], answer: 2, explanation: "32 permanent (including wisdom teeth)." },
        { id: "rn-t-an-q4", subject: "anatomy", stem: "Number of chambers in the heart:", options: ["2","3","4","6"], answer: 2, explanation: "Four: 2 atria, 2 ventricles." },
        { id: "rn-t-an-q5", subject: "anatomy", stem: "Cerebellum controls:", options: ["Vision","Balance and coordination","Memory","Speech only"], answer: 1, explanation: "Cerebellum coordinates movement, balance, posture." },
        { id: "rn-t-an-q6", subject: "anatomy", stem: "The functional unit of the kidney is the:", options: ["Alveolus","Nephron","Neuron","Hepatocyte"], answer: 1, explanation: "The nephron is the microscopic filtering unit of the kidney." },
        { id: "rn-t-an-q7", subject: "anatomy", stem: "The largest organ of the human body is the:", options: ["Liver","Brain","Skin","Heart"], answer: 2, explanation: "The skin is the body's largest organ." },
        { id: "rn-t-an-q8", subject: "anatomy", stem: "Insulin is produced by the:", options: ["Liver","Beta cells of the pancreas","Kidney","Thyroid gland"], answer: 1, explanation: "The beta cells of the pancreas produce insulin." },
        { id: "rn-t-an-q9", subject: "anatomy", stem: "Which chamber of the heart pumps oxygenated blood to the whole body?", options: ["Right atrium","Right ventricle","Left atrium","Left ventricle"], answer: 3, explanation: "The left ventricle pumps oxygenated blood into the aorta and systemic circulation." },
        { id: "rn-t-an-q10", subject: "anatomy", stem: "The gas exchange unit of the lung is the:", options: ["Bronchus","Trachea","Alveolus","Pleura"], answer: 2, explanation: "Gas exchange occurs across the walls of the alveoli." }
      ]
    },
    {
      id: "rn-t-nutrition",
      title: "Nutrition Essentials",
      subject: "nutrition",
      readMinutes: 9,
      summary: "Macronutrients, vitamins, minerals, deficiency diseases, special diets, and nutrition in pregnancy and childhood.",
      content: [
        { h: "Macronutrients", p: "Energy value per gram: Carbohydrate 4 kcal, Protein 4 kcal, Fat 9 kcal, Alcohol 7 kcal. A balanced diet for an adult: ~50-60% carbohydrate, ~10-15% protein, ~25-30% fat. Average adult needs ~2000-2500 kcal/day depending on age, sex, and activity. Carbs provide quick energy. Protein builds and repairs tissue — important sources: fish, eggs, pulses, milk, meat. Fats are needed for vitamin absorption and cell membranes — prefer unsaturated (fish, nuts, vegetable oils) over saturated and trans fats." },
        { h: "Vitamins", p: "Vitamin A: vision, immune function — deficiency causes night blindness and dry eyes. Vitamin B1 (thiamin): nervous system — deficiency causes beri-beri. Vitamin B12: red blood cell formation, nerves — deficiency causes pernicious anaemia. Vitamin C: collagen, immunity — deficiency causes scurvy. Vitamin D: bone health, immunity — deficiency causes rickets in children and osteomalacia in adults; produced in skin with sunlight. Vitamin K: blood clotting. Niacin (B3): deficiency causes pellagra (dermatitis, diarrhoea, dementia). Folate: needed in pregnancy to prevent neural tube defects." },
        { h: "Minerals", p: "Iron: deficiency causes anaemia — pale, tired, breathless; sources include red meat, liver, dark green leaves, fortified cereals. Iodine: deficiency causes goitre and cretinism in fetus — iodized salt is the main public health intervention. Calcium: bones and teeth, muscle and nerve function — sources include milk, small fish with bones, dark green leaves. Zinc: growth and immunity — important in diarrhoea management of children. Sodium: fluid balance — excess raises blood pressure." },
        { h: "Common Deficiency Diseases", p: "Protein-energy malnutrition: marasmus (calorie + protein deficit — wasted, no edema) and kwashiorkor (mainly protein deficit — edema, hair changes, fatty liver). Iron-deficiency anaemia: most common globally; treat with iron supplementation + improved diet. Vitamin A deficiency: night blindness, severe leads to xerophthalmia and blindness. Iodine deficiency: goitre, cretinism, miscarriage. Rickets: bowed legs, soft skull, beaded ribs. Beri-beri: dry (neurological) and wet (cardiac) forms." },
        { h: "Therapeutic Diets", p: "Diabetic diet: complex carbohydrates, more fibre, less refined sugar, regular meal times. Cardiac (DASH) diet: low sodium, low saturated and trans fat, rich in fruits, vegetables, whole grains. Renal diet (CKD): restrict potassium, phosphorus, sodium, and (in advanced disease) protein. Hepatic encephalopathy: lower protein to reduce ammonia load. Hypertension: salt reduction (<5 g/day), DASH approach. Post-operative: usually starts with clear fluids and progresses as tolerance returns." },
        { h: "Nutrition in Pregnancy & Lactation", p: "Pregnancy increases energy needs by ~300 kcal/day in the second and third trimesters. Protein, iron, folate, calcium, and iodine needs all rise. Folate supplementation 400 mcg/day from preconception to 12 weeks reduces neural tube defects. Iron supplementation (60 mg) + folate is routine. Avoid alcohol, raw fish, undercooked meat, and limit caffeine. Lactation increases energy needs by ~500 kcal/day; continue iron-folate; stay well hydrated. Most medications are compatible with breastfeeding — check before stopping." },
        { h: "Nutrition in Childhood", p: "Exclusive breastfeeding for first 6 months. Introduce complementary feeding from 6 months alongside continued breastfeeding up to 2 years. By 12 months, child eats family foods with appropriate texture. Variety from all food groups every day. Limit added sugar and salt. Watch for failure to thrive — plot weight on growth chart at every visit. Iron-rich complementary foods (meat, eggs, fortified cereals) help prevent the typical 6-24 month iron-deficiency window." },
        { h: "Practical Tips for Counselling", p: "Use the patient's own food language. Ask what they typically eat in a day before giving advice. Suggest small, achievable changes — replacing one item is more sustainable than a complete overhaul. Cultural and religious preferences must be respected. For low-income families, focus on cheap nutrient-dense foods: pulses, eggs, seasonal vegetables, small fish. Always check for food allergies before suggesting specific items." }
      ],
      checkIn: [
        { id: "rn-t-nu-q1", subject: "nutrition", stem: "1 g fat provides:", options: ["4 kcal","7 kcal","9 kcal","12 kcal"], answer: 2, explanation: "Fat = 9 kcal/g." },
        { id: "rn-t-nu-q2", subject: "nutrition", stem: "Scurvy is caused by deficiency of:", options: ["Vitamin A","Vitamin B12","Vitamin C","Vitamin D"], answer: 2, explanation: "Vitamin C deficiency → scurvy." },
        { id: "rn-t-nu-q3", subject: "nutrition", stem: "Pernicious anemia results from deficiency of:", options: ["Iron","Folate","Vitamin B12","Vitamin C"], answer: 2, explanation: "B12 deficiency (lack of intrinsic factor)." },
        { id: "rn-t-nu-q4", subject: "nutrition", stem: "Goiter is caused by deficiency of:", options: ["Iron","Iodine","Calcium","Zinc"], answer: 1, explanation: "Iodine deficiency." },
        { id: "rn-t-nu-q5", subject: "nutrition", stem: "Vitamin K is needed for:", options: ["Vision","Blood clotting","Calcium absorption","Cell division"], answer: 1, explanation: "Vitamin K activates clotting factors II, VII, IX, X." },
        { id: "rn-t-nu-q6", subject: "nutrition", stem: "Vitamin A deficiency causes:", options: ["Scurvy","Night blindness","Rickets","Goitre"], answer: 1, explanation: "Vitamin A deficiency causes night blindness and impairs immunity." },
        { id: "rn-t-nu-q7", subject: "nutrition", stem: "Kwashiorkor is mainly caused by a deficiency of:", options: ["Carbohydrate","Protein","Fat","Water"], answer: 1, explanation: "Kwashiorkor is protein deficiency, causing oedema and a swollen abdomen." },
        { id: "rn-t-nu-q8", subject: "nutrition", stem: "Vitamin C helps the absorption of:", options: ["Calcium","Iron","Sodium","Potassium"], answer: 1, explanation: "Vitamin C enhances the absorption of dietary iron." },
        { id: "rn-t-nu-q9", subject: "nutrition", stem: "Carbohydrates provide how many kilocalories per gram?", options: ["2 kcal","4 kcal","7 kcal","9 kcal"], answer: 1, explanation: "Carbohydrate and protein each provide about 4 kcal/g; fat provides 9 kcal/g." },
        { id: "rn-t-nu-q10", subject: "nutrition", stem: "The recommended infant feeding for the first six months is:", options: ["Formula milk","Exclusive breastfeeding","Cow's milk","Solid food"], answer: 1, explanation: "Exclusive breastfeeding is recommended for the first six months." }
      ]
    },
    {
      id: "rn-t-comm-health",
      title: "Community Health Basics",
      subject: "community-health",
      readMinutes: 9,
      summary: "EPI schedule, family planning, PHC components, health indicators, communicable disease control, and the role of community workers.",
      content: [
        { h: "EPI Schedule (Bangladesh)", p: "At birth: BCG (left arm) + OPV-0. At 6 weeks: Pentavalent (DPT-HepB-Hib) + OPV + PCV + IPV + Rota. At 10 weeks: same series (except no IPV). At 14 weeks: same series + IPV. At 9 months: MR-1 (measles-rubella). At 15 months: MR-2. Td (tetanus-diphtheria) for pregnant women. Always check the most current EPI schedule from DGHS — it is reviewed periodically." },
        { h: "Cold Chain — Vaccine Storage", p: "Vaccines need to be kept between +2 °C and +8 °C in the refrigerator. Some vaccines (like OPV at central level) can be frozen. Never refreeze a vaccine that has been thawed. Each vial has a Vaccine Vial Monitor (VVM) that changes colour with heat exposure — discard at VVM stage 3 or 4. Reconstituted BCG and measles must be used within 6 hours. Multi-dose vials with preservative can be used up to 28 days if kept cold and uncontaminated." },
        { h: "Family Planning Methods", p: "Most effective reversible methods: subdermal implant (3-5 yr), copper IUD (10 yr). Hormonal: combined oral pill, progestin-only pill, injectable (DMPA every 3 months). Barrier methods: male condom (also protects against STIs), female condom, diaphragm. Permanent: tubal ligation for women, vasectomy for men. Natural: lactational amenorrhea (only if fully exclusive breastfeeding + amenorrhea + <6 months postpartum), calendar rhythm, withdrawal — least reliable. Emergency contraception: levonorgestrel pill up to 72 hours after intercourse." },
        { h: "PHC — Alma-Ata 1978", p: "Primary Health Care made universally accessible. Eight essential elements: (1) health education, (2) food and nutrition, (3) safe water and basic sanitation, (4) maternal and child health including family planning, (5) immunization, (6) prevention and control of locally endemic diseases, (7) treatment of common conditions, (8) provision of essential drugs. PHC is the foundation of the entire health system. It works because it brings care close to where people live, in a way they can use." },
        { h: "Key Health Indicators", p: "MMR (Maternal Mortality Ratio): maternal deaths per 100,000 live births. IMR (Infant Mortality Rate): under-1 deaths per 1,000 live births. U5MR: under-5 deaths per 1,000 live births. NMR (Neonatal Mortality Rate): deaths under 28 days per 1,000 live births. CBR (Crude Birth Rate): live births per 1,000 population. CDR (Crude Death Rate): deaths per 1,000 population. TFR (Total Fertility Rate): average live births per woman. Life expectancy at birth: years a newborn is expected to live on current rates." },
        { h: "Role of Community Health Workers", p: "Community Health Care Provider (CHCP): runs the Community Clinic at ward level — basic curative care, immunization, MCH services, health education. Health Assistant (HA): outreach, immunization, surveillance, growth monitoring. Family Welfare Assistant (FWA): family planning, MCH services, home visits. Family Welfare Visitor (FWV): more senior — limited curative care, family planning, antenatal care. Together they bring services to communities that would otherwise have no access." },
        { h: "Safe Water & Sanitation", p: "Safe water is fundamental for preventing diarrhoeal disease. Tube-well water is generally safer than surface water but may contain arsenic — wells should be tested. Methods to make water safe at home: boiling (rolling boil for 1 minute), chlorination, filtration, solar disinfection (SODIS — clear bottle in sun for 6 hours). Sanitation: hygienic latrines, hand-washing with soap at 5 critical times (after defecation, after cleaning a child, before cooking, before eating, before feeding a child)." },
        { h: "Communicable Disease Control", p: "Tuberculosis: DOTS (Directly Observed Therapy, Short-course) — 6-month regimen, treatment supporter watches each dose. Cholera: ORS + zinc, refer severe cases; oral cholera vaccine in outbreak. Dengue: vector control (eliminate stagnant water), supportive care, avoid NSAIDs. Diarrhoea: ORS, zinc, continue feeding. Pneumonia: amoxicillin for non-severe. Always notify your supervisor of any cluster of unusual illness — early outbreak recognition saves lives." }
      ],
      checkIn: [
        { id: "rn-t-co-q1", subject: "community-health", stem: "BCG is given at:", options: ["Birth","6 weeks","9 months","15 months"], answer: 0, explanation: "Birth." },
        { id: "rn-t-co-q2", subject: "community-health", stem: "MR-1 is given at:", options: ["6 weeks","10 weeks","9 months","15 months"], answer: 2, explanation: "9 months." },
        { id: "rn-t-co-q3", subject: "community-health", stem: "Alma-Ata Declaration year:", options: ["1948","1968","1978","1988"], answer: 2, explanation: "1978." },
        { id: "rn-t-co-q4", subject: "community-health", stem: "Most effective reversible contraceptive:", options: ["Condom","Pill","Implant","Withdrawal"], answer: 2, explanation: "Implant — LARC with <1% failure rate." },
        { id: "rn-t-co-q5", subject: "community-health", stem: "Infant Mortality Rate is per:", options: ["100","1,000","10,000","100,000"], answer: 1, explanation: "Per 1,000 live births." },
        { id: "rn-t-co-q6", subject: "community-health", stem: "Maternal Mortality Ratio is expressed per:", options: ["1,000 live births","10,000 live births","100,000 live births","1,000,000 live births"], answer: 2, explanation: "Maternal mortality ratio is the number of maternal deaths per 100,000 live births." },
        { id: "rn-t-co-q7", subject: "community-health", stem: "Immunization to prevent disease before it occurs is an example of:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Rehabilitation"], answer: 0, explanation: "Primary prevention stops disease before it starts — immunization is a key example." },
        { id: "rn-t-co-q8", subject: "community-health", stem: "Screening to detect disease early in people without symptoms is:", options: ["Primary prevention","Secondary prevention","Tertiary prevention","Health promotion"], answer: 1, explanation: "Secondary prevention is early detection through screening." },
        { id: "rn-t-co-q9", subject: "community-health", stem: "Safe drinking water and sanitation mainly help prevent:", options: ["Diabetes","Diarrhoeal and water-borne diseases","Heart disease","Cancer"], answer: 1, explanation: "Clean water and sanitation prevent water-borne diseases such as cholera, typhoid, and diarrhoea." },
        { id: "rn-t-co-q10", subject: "community-health", stem: "The cold chain for vaccines refers to:", options: ["Keeping the child cool","Keeping vaccines at a safe temperature from storage to use","Giving vaccines in winter","Cooling the injection site"], answer: 1, explanation: "The cold chain keeps vaccines effective by maintaining safe temperatures throughout storage and transport." }
      ]
    },
    {
      id: "rn-t-child-care",
      title: "Child Care — High-Yield",
      subject: "child-health",
      readMinutes: 10,
      summary: "Breastfeeding, growth, ORS, IMCI danger signs, growth monitoring, common illnesses, and vaccine side effects.",
      content: [
        { h: "Breastfeeding", p: "Exclusive breastfeeding for the first 6 months (no water, no other foods or fluids — only breast milk). Continue alongside complementary feeding up to 2 years and beyond. First feed within 1 hour of birth — colostrum is rich in antibodies. Feed on demand, at least 8 times in 24 hours. Signs of good attachment: chin touching breast, mouth wide open, lower lip turned out, more areola visible above than below. Audible swallowing means baby is feeding well." },
        { h: "Growth Milestones", p: "Birth weight: doubles by ~6 months, triples by 1 year, quadruples by 2 years. Length: ~50 cm at birth, +25 cm in year 1, +12 cm in year 2. Anterior fontanelle (soft spot on top of head): 4-6 cm at birth, closes between 12-18 months. Posterior fontanelle: closes by ~2 months. Sit without support: ~6 months. Crawl: ~9 months. Pull to stand: ~9-10 months. First word: ~12 months. Walk independently: 12-15 months. Always plot on growth chart at every visit." },
        { h: "Growth Monitoring", p: "Weigh and plot at every visit using the WHO growth standards (z-score charts in Bangladesh EPI). Identify malnutrition by weight-for-height (wasting), height-for-age (stunting), and weight-for-age (underweight). Mid-upper arm circumference (MUAC) for children 6-59 months: <11.5 cm = severe acute malnutrition, 11.5-12.5 = moderate. Plotting once is a number; plotting over time is a story — a child crossing percentiles down is more concerning than a small but tracking child." },
        { h: "Diarrhoea Management", p: "Most common cause of preventable child death globally. Always give ORS (oral rehydration solution) and zinc (10-20 mg/day for 10-14 days — zinc shortens the episode and prevents the next one). Continue feeding throughout — never starve a child with diarrhoea. No routine antibiotics for acute watery diarrhoea; use only for dysentery (blood in stool) or cholera. Counsel families on the three rules: more fluids than usual, continue feeding, return immediately if any danger sign." },
        { h: "IMCI Danger Signs", p: "Any one of these = urgent classification (pink) and immediate referral: not able to drink or breastfeed, vomits everything, convulsions (now or with this illness), lethargic or unconscious. Before referring, give first dose of antibiotic, treat low blood sugar, prevent and treat shock, keep the child warm. Send a referral note describing condition and treatment given. These signs do not let you 'wait and see' — act now." },
        { h: "Common Childhood Illnesses", p: "Acute respiratory infection: assess for fast breathing (>50/min in 2-12 months, >40 in 1-5 years), chest in-drawing. Non-severe pneumonia: oral amoxicillin 5-7 days. Severe (any danger sign): referral + first dose antibiotic. Fever: identify cause — malaria where endemic, measles, common viral. Ear problem: check for tender mastoid (severe) or discharge. Malnutrition + anaemia: screen all sick children." },
        { h: "Common Vaccine Reactions", p: "Most reactions are mild and short-lived. BCG: small ulcer at site at 2-3 weeks, leaves a scar — normal. DPT/Pentavalent: fever, fussiness, soreness for 1-2 days. MR (measles-rubella): mild rash and fever 7-10 days after the dose. Counsel parents in advance so they are not alarmed. Paracetamol can be given for fever or pain. Serious reactions (high fever >40 °C, persistent crying >3 hours, seizures, anaphylaxis) are rare but must be reported through the adverse event following immunization (AEFI) system." },
        { h: "Counselling the Mother", p: "After every sick-child visit, the IMCI strategy ends with counselling. Use simple words. Show, not just tell — demonstrate how to give ORS, prepare food, position for breastfeeding. Ask the mother to repeat back what she will do at home (teach-back). Set a clear follow-up date. Praise small wins. Mothers who feel respected by the health worker are more likely to follow advice and bring their child back when needed." }
      ],
      checkIn: [
        { id: "rn-t-ch-q1", subject: "child-health", stem: "Exclusive breastfeeding duration:", options: ["3 mo","6 mo","9 mo","12 mo"], answer: 1, explanation: "6 months exclusive." },
        { id: "rn-t-ch-q2", subject: "child-health", stem: "ORS plus what mineral for diarrhea?", options: ["Iron","Zinc","Iodine","Calcium"], answer: 1, explanation: "Zinc 10-20 mg/day × 10-14 days." },
        { id: "rn-t-ch-q3", subject: "child-health", stem: "A child should walk independently by approximately:", options: ["6 mo","9 mo","12 mo","18 mo"], answer: 2, explanation: "Most walk by 12 mo (range 9-15)." },
        { id: "rn-t-ch-q4", subject: "child-health", stem: "Anterior fontanelle closes by:", options: ["3 mo","6 mo","12-18 mo","3 yr"], answer: 2, explanation: "12-18 mo." },
        { id: "rn-t-ch-q5", subject: "child-health", stem: "IMCI danger sign:", options: ["Mild cough","Convulsions","Mild fever","Normal feeding"], answer: 1, explanation: "Convulsions = urgent danger sign." },
        { id: "rn-t-ch-q6", subject: "child-health", stem: "BCG vaccine, given at birth, protects against:", options: ["Measles","Tuberculosis","Polio","Tetanus"], answer: 1, explanation: "BCG protects against tuberculosis and is given at birth in the EPI schedule." },
        { id: "rn-t-ch-q7", subject: "child-health", stem: "A newborn's normal respiratory rate is approximately:", options: ["12–20/min","20–30/min","30–60/min","60–80/min"], answer: 2, explanation: "Newborns breathe faster than adults — about 30–60 breaths per minute." },
        { id: "rn-t-ch-q8", subject: "child-health", stem: "The first-line treatment for mild-to-moderate dehydration from diarrhoea is:", options: ["IV fluids","Oral rehydration solution (ORS)","Antibiotics","Anti-diarrhoeal drugs"], answer: 1, explanation: "ORS is first-line for mild-to-moderate dehydration, with zinc to reduce severity." },
        { id: "rn-t-ch-q9", subject: "child-health", stem: "A newborn's normal heart rate is approximately:", options: ["40–60 bpm","60–100 bpm","100–160 bpm","160–200 bpm"], answer: 2, explanation: "A newborn's normal heart rate is about 100–160 beats per minute." },
        { id: "rn-t-ch-q10", subject: "child-health", stem: "Breastfeeding should ideally begin:", options: ["Within the first hour of birth","After 24 hours","After the first bath","Only when milk comes in"], answer: 0, explanation: "Early initiation within the first hour gives the baby colostrum and supports bonding." }
      ]
    },
    {
      id: "rn-t-english",
      title: "English Grammar Refresher",
      subject: "english",
      readMinutes: 9,
      summary: "Parts of speech, tenses, articles, common errors, nursing vocabulary, and exam-question strategies.",
      content: [
        { h: "Parts of Speech", p: "Noun: person, place, thing, or idea (nurse, hospital, courage). Pronoun: replaces a noun (he, she, it, they). Verb: action or state of being (run, is, become). Adjective: describes a noun (good, three, blue). Adverb: describes a verb, adjective, or another adverb (quickly, very, well). Preposition: shows relationship (in, on, at, by, with). Conjunction: joins words/phrases (and, but, or, because). Interjection: expresses emotion (oh!, wow!)." },
        { h: "Tenses Quick Map", p: "Simple present: 'She works at the hospital.' Present continuous: 'She is working now.' Present perfect: 'She has worked here for 3 years.' Simple past: 'She worked yesterday.' Past continuous: 'She was working when the bell rang.' Past perfect: 'She had worked before lunch.' Simple future: 'She will work tomorrow.' Future continuous: 'She will be working at 8 PM.' Modal verbs (can, could, should, must, may, might) change meaning — should = advice; must = obligation." },
        { h: "Articles", p: "'A' before words starting with a consonant sound: a nurse, a hospital, a university (the 'u' here sounds like 'you'). 'An' before words starting with a vowel sound: an apple, an honest answer (silent h), an X-ray (sounds 'ex'). 'The' for specific known things: 'the nurse on duty', 'the patient in bed 3'. No article before plural general nouns: 'Nurses work hard.' Proper nouns usually take no article: 'Dhaka', 'India'." },
        { h: "Common Errors", p: "Subject-verb agreement: 'Neither of them is here' (singular). 'Everyone has a name' (everyone is singular). Double negatives: avoid — 'I don't have nothing' should be 'I don't have anything'. 'Less' for uncountable (less water), 'fewer' for countable (fewer patients). 'Between' for two things, 'among' for three or more. 'Lay' (to put down — takes object) vs 'lie' (to recline — no object). 'Their / there / they're' confusions — write the full form if unsure." },
        { h: "Sentence Structure", p: "A complete sentence needs a subject and a verb. Subject + verb + object: 'The nurse [subject] administered [verb] the medication [object].' Watch for sentence fragments (missing verb) and run-on sentences (two complete ideas joined without proper punctuation). Use commas to separate items in a list, after introductory clauses, and before coordinating conjunctions joining two complete sentences. Capital letters at the start of sentences and for proper nouns." },
        { h: "Nursing Vocabulary", p: "Common words you'll meet in nursing questions: administer (give), assess (check carefully), notify (inform), monitor (watch closely), intervene (take action), document (record in writing), evaluate (judge how well something worked), implement (carry out), assist (help), educate (teach), prioritize (decide what to do first), refer (send to another professional), advocate (speak up for). Knowing these saves time on test day." },
        { h: "Reading Comprehension Tips", p: "Read the question first, then the passage. Underline keywords. Look for direct evidence in the text — your answer must be supported by what is written, not what you assume. Beware of options that are partly true but answer a different question. If two options look correct, pick the one that more completely answers the question. For inference questions, choose the option that is most reasonable given the passage, even if not stated directly." },
        { h: "Common MCQ Mistakes", p: "Watch for words like 'always', 'never', 'only' — these absolute words are often (not always) wrong in nursing. Look for 'best', 'first', 'most likely' — they tell you that more than one answer may be reasonable but you must pick the single best. Read all options before answering. Don't change your first instinct unless you find clear evidence to reconsider. Skip and return if stuck — don't lose time on one question." }
      ],
      checkIn: [
        { id: "rn-t-en-q1", subject: "english", stem: "Choose correct: 'She ___ a nurse.'", options: ["are","is","am","be"], answer: 1, explanation: "Singular third person → 'is'." },
        { id: "rn-t-en-q2", subject: "english", stem: "Correct article: '___ honest man.'", options: ["A","An","The","No article"], answer: 1, explanation: "'An' before silent 'h' (vowel sound)." },
        { id: "rn-t-en-q3", subject: "english", stem: "Past tense of 'go':", options: ["goed","went","gone","going"], answer: 1, explanation: "Irregular: go → went → gone." },
        { id: "rn-t-en-q4", subject: "english", stem: "Synonym of 'happy':", options: ["Sad","Joyful","Tired","Angry"], answer: 1, explanation: "Joyful." },
        { id: "rn-t-en-q5", subject: "english", stem: "Identify the verb: 'The nurse cared for the patient.'", options: ["nurse","cared","for","patient"], answer: 1, explanation: "'Cared' is the verb." },
        { id: "rn-t-en-q6", subject: "english", stem: "Choose the correctly spelled word:", options: ["Recieve","Receive","Receeve","Receve"], answer: 1, explanation: "'Receive' follows the rule 'i before e except after c'." },
        { id: "rn-t-en-q7", subject: "english", stem: "Choose the correct sentence:", options: ["She do not like tea.","She does not likes tea.","She does not like tea.","She not like tea."], answer: 2, explanation: "With 'does not', the main verb stays in its base form: 'does not like'." },
        { id: "rn-t-en-q8", subject: "english", stem: "The plural of 'child' is:", options: ["Childs","Childes","Children","Childrens"], answer: 2, explanation: "'Children' is the irregular plural of 'child'." },
        { id: "rn-t-en-q9", subject: "english", stem: "Choose the correct preposition: 'The patient is allergic ___ penicillin.'", options: ["with","to","for","on"], answer: 1, explanation: "The correct phrase is 'allergic to'." },
        { id: "rn-t-en-q10", subject: "english", stem: "The opposite (antonym) of 'acute' is:", options: ["Sudden","Severe","Chronic","Sharp"], answer: 2, explanation: "'Chronic' (long-lasting) is the opposite of 'acute' (sudden, short-term)." }
      ]
    },
    {
      id: "rn-t-gk",
      title: "General Knowledge for RN",
      subject: "gk",
      readMinutes: 9,
      summary: "Bangladesh history and geography, nursing milestones, key authorities, and international health organizations.",
      content: [
        { h: "Bangladesh National Days", p: "Independence Day: 26 March 1971 — declaration of independence. Victory Day: 16 December 1971 — surrender of Pakistani forces. Language Martyrs' Day / International Mother Language Day: 21 February — recognized by UNESCO after Bangladesh's 1952 Language Movement. National Mourning Day: 15 August — anniversary of the assassination of Bangabandhu Sheikh Mujibur Rahman in 1975. Pohela Boishakh (Bengali New Year): 14 April." },
        { h: "Nursing & Health Observances", p: "International Nurses Day: 12 May — Florence Nightingale's birthday. International Day of the Midwife: 5 May. World Health Day: 7 April — anniversary of WHO founding in 1948. World No Tobacco Day: 31 May. World Mental Health Day: 10 October. World AIDS Day: 1 December. World Diabetes Day: 14 November. World Tuberculosis Day: 24 March. World Hand Hygiene Day: 5 May." },
        { h: "Bangladesh Geography", p: "Capital: Dhaka. Total area: ~147,570 km². Population: ~170 million. 8 administrative divisions (Dhaka, Chattogram, Rajshahi, Khulna, Barishal, Sylhet, Rangpur, Mymensingh) and 64 districts. Major rivers: Padma, Jamuna, Meghna — the Meghna is the longest within Bangladesh. The country shares borders with India (longest) and Myanmar (in the southeast). Coastline of about 580 km on the Bay of Bengal. Sundarbans — the world's largest mangrove forest — is a UNESCO World Heritage Site." },
        { h: "Health Authorities — Bangladesh", p: "Ministry of Health and Family Welfare (MoHFW): policy and overall direction. Directorate General of Health Services (DGHS): general medical services. Directorate General of Nursing and Midwifery (DGNM): nursing service administration. Bangladesh Nursing and Midwifery Council (BNMC): regulates nursing and midwifery profession — registration, licensing, education standards. Institute of Public Health (IPH). icddr,b (International Centre for Diarrhoeal Disease Research, Bangladesh) — world-renowned research institution." },
        { h: "International Health Organizations", p: "World Health Organization (WHO): UN specialized agency for international public health, headquartered in Geneva, Switzerland, founded 7 April 1948. UNICEF: child welfare, headquartered in New York. UNFPA: population and reproductive health. International Council of Nurses (ICN): global federation of nursing associations, headquartered in Geneva. International Confederation of Midwives (ICM): The Hague. World Bank: financial institution that funds many health projects. Global Fund: AIDS, TB, malaria funding." },
        { h: "Nursing History Highlights", p: "Florence Nightingale (1820-1910): considered the founder of modern nursing. Worked in the Crimean War (1853-56) and reduced mortality dramatically through hygiene, sanitation, and organized care. Founded the first nursing school at St Thomas' Hospital, London (1860). Pioneered statistical visualization with the polar area diagram. Her book Notes on Nursing (1859) is foundational. Nursing as a regulated profession in Bangladesh dates back to the colonial period at Mitford Hospital (then under British India)." },
        { h: "Bangladesh History — Quick", p: "1947: Partition of British India — East Bengal becomes East Pakistan. 1952: Language Movement martyrs killed on 21 February. 1971: Liberation War — Independence declared 26 March, victory on 16 December after 9 months of war. 1972: First Constitution. 1975: Assassination of Bangabandhu Sheikh Mujibur Rahman. Bangladesh has since had elected governments, periods of military rule, and a major focus on poverty reduction, primary health, microfinance (Nobel Peace Prize to Grameen Bank, 2006), and garment industry growth." },
        { h: "Useful Numbers to Know", p: "WHO founded: 1948. UN founded: 1945. UNICEF founded: 1946. Bangladesh independence: 1971. Alma-Ata Declaration: 1978. Bangladesh districts: 64. Bangladesh divisions: 8. Adult bones: 206. Cranial nerves: 12 pairs. Permanent teeth: 32. Heart chambers: 4. Number of EPI antigens currently given in Bangladesh schedule: 10+ (verify current list)." }
      ],
      checkIn: [
        { id: "rn-t-gk-q1", subject: "gk", stem: "Bangladesh Victory Day:", options: ["26 March","21 February","16 December","17 April"], answer: 2, explanation: "16 December 1971." },
        { id: "rn-t-gk-q2", subject: "gk", stem: "International Nurses Day:", options: ["7 April","5 May","12 May","16 December"], answer: 2, explanation: "12 May — Florence Nightingale's birthday." },
        { id: "rn-t-gk-q3", subject: "gk", stem: "WHO headquarters:", options: ["New York","Geneva","Paris","Dhaka"], answer: 1, explanation: "Geneva, Switzerland." },
        { id: "rn-t-gk-q4", subject: "gk", stem: "Capital of Bangladesh:", options: ["Chittagong","Sylhet","Dhaka","Khulna"], answer: 2, explanation: "Dhaka." },
        { id: "rn-t-gk-q5", subject: "gk", stem: "BNMC regulates:", options: ["Medical doctors","Nursing and midwifery profession","Pharmacy","Dental practice"], answer: 1, explanation: "Bangladesh Nursing & Midwifery Council." },
        { id: "rn-t-gk-q6", subject: "gk", stem: "The founder of modern nursing, the 'Lady with the Lamp', is:", options: ["Florence Nightingale","Clara Barton","Virginia Henderson","Mother Teresa"], answer: 0, explanation: "Florence Nightingale founded modern nursing during the Crimean War." },
        { id: "rn-t-gk-q7", subject: "gk", stem: "World Health Day is observed on:", options: ["April 7","May 12","July 1","December 16"], answer: 0, explanation: "World Health Day is on 7 April, the anniversary of WHO's founding in 1948." },
        { id: "rn-t-gk-q8", subject: "gk", stem: "The headquarters of the United Nations (UN) is in:", options: ["Geneva","New York","London","Paris"], answer: 1, explanation: "The UN is headquartered in New York City, USA." },
        { id: "rn-t-gk-q9", subject: "gk", stem: "The national flower of Bangladesh is the:", options: ["Rose","Water lily (Shapla)","Marigold","Sunflower"], answer: 1, explanation: "The water lily (Shapla) is the national flower of Bangladesh." },
        { id: "rn-t-gk-q10", subject: "gk", stem: "The ancient physician known as the 'Father of Medicine' is:", options: ["Aristotle","Hippocrates","Galen","Avicenna"], answer: 1, explanation: "Hippocrates is regarded as the 'Father of Medicine', after whom the Hippocratic Oath is named." }
      ]
    },

    /* ============================================================
       NEW TOPICS (Phase 3 expansion) — foundational RN level
       ============================================================ */
    {
      id: "rn-t-infection",
      title: "Infection Prevention & Control",
      subject: "fundamental-nursing",
      readMinutes: 8,
      summary: "Hand hygiene, the chain of infection, standard and isolation precautions, PPE, and safe sharps disposal.",
      content: [
        { h: "Why Infection Control Matters", p: "Patients in hospital can easily pick up new infections. Good infection control protects patients, their families, and you as a nurse. The most important habit is clean hands. Simple, consistent practice prevents most hospital-acquired infections." },
        { h: "The Chain of Infection", p: "Infection spreads through a chain: the germ, where it lives (reservoir), how it leaves, how it travels, how it enters a new person, and a person who can catch it. Break any link and you stop the infection. Hand hygiene, cleaning, and immunization each break a different link." },
        { h: "Hand Hygiene", p: "Wash your hands with soap and water for 40–60 seconds when they are dirty or after caring for a patient with diarrhoea. Use alcohol hand rub (20–30 seconds) when hands are not visibly soiled. Clean your hands before touching a patient, before a clean procedure, after contact with body fluids, after touching the patient, and after touching their surroundings." },
        { h: "Standard Precautions", p: "Use standard precautions for every patient, because you cannot always tell who is infectious. Treat all blood and body fluids as if they could spread infection. Wear gloves and an apron when contact with body fluids is likely, and always clean your hands afterwards." },
        { h: "Isolation Precautions", p: "Some infections need extra care. Contact precautions (gloves and gown) stop germs spread by touch. Droplet precautions (a surgical mask) stop germs spread by coughs and sneezes nearby. Airborne precautions (a special N95 mask and, ideally, a separate room) are needed for tuberculosis, measles, and chickenpox." },
        { h: "Personal Protective Equipment", p: "Put on PPE in this order: gown, mask, eye protection, then gloves. Take it off in this order: gloves, eye protection, gown, then mask last — because the front is dirty and the face stays protected until the end. Clean your hands straight after removing PPE." },
        { h: "Sharps & Waste", p: "Put used needles straight into a puncture-proof sharps box. Never recap a needle by hand — this causes many needlestick injuries. Keep infectious waste separate from ordinary waste. If you get a needlestick injury, make it bleed, wash with soap and water, and report it at once." }
      ],
      checkIn: [
        { id: "rn-t-inf-q1", subject: "fundamental-nursing", stem: "The single most effective way to prevent the spread of infection is:", options: ["Wearing gloves always","Hand hygiene","Daily antibiotics","Isolating all patients"], answer: 1, explanation: "Hand hygiene is the most effective measure to prevent infection spread." },
        { id: "rn-t-inf-q2", subject: "fundamental-nursing", stem: "Standard precautions should be used for:", options: ["Only known infected patients","Every patient","Only patients in isolation","Only during surgery"], answer: 1, explanation: "Standard precautions apply to all patients, since infection status is often unknown." },
        { id: "rn-t-inf-q3", subject: "fundamental-nursing", stem: "Tuberculosis requires which type of precaution?", options: ["Contact","Droplet","Airborne","None"], answer: 2, explanation: "TB spreads through the air and needs airborne precautions with an N95 mask." },
        { id: "rn-t-inf-q4", subject: "fundamental-nursing", stem: "Used needles should be:", options: ["Recapped then binned","Placed in a puncture-proof sharps box","Put in general waste","Bent first"], answer: 1, explanation: "Dispose of sharps directly without recapping to avoid needlestick injury." },
        { id: "rn-t-inf-q5", subject: "fundamental-nursing", stem: "When removing PPE, which item is taken off last?", options: ["Gloves","Gown","Eye protection","Mask"], answer: 3, explanation: "The mask is removed last, keeping the face protected until the end." },
        { id: "rn-t-inf-q6", subject: "fundamental-nursing", stem: "Alcohol hand rub should NOT be used when:", options: ["Before touching a patient","Hands are visibly soiled","After touching surroundings","Before a clean procedure"], answer: 1, explanation: "When hands are visibly dirty, wash with soap and water instead of alcohol rub." },
        { id: "rn-t-inf-q7", subject: "fundamental-nursing", stem: "Droplet precautions require the nurse to wear a:", options: ["N95 respirator","Surgical mask","Sterile gown only","Nothing extra"], answer: 1, explanation: "Droplet precautions need a surgical mask when working close to the patient." },
        { id: "rn-t-inf-q8", subject: "fundamental-nursing", stem: "The correct order for putting on PPE is:", options: ["Gloves, gown, mask","Gown, mask, eye protection, gloves","Mask, gloves, gown","Eye protection, gloves, gown"], answer: 1, explanation: "Don PPE as gown, mask, eye protection, then gloves." },
        { id: "rn-t-inf-q9", subject: "fundamental-nursing", stem: "After a needlestick injury, the first action is to:", options: ["Ignore it","Make it bleed and wash with soap and water","Apply a tight bandage only","Wait until the shift ends"], answer: 1, explanation: "Encourage bleeding, wash the area, then report immediately." },
        { id: "rn-t-inf-q10", subject: "fundamental-nursing", stem: "Treating all blood and body fluids as potentially infectious is part of:", options: ["Airborne precautions","Standard precautions","Contact precautions only","No precautions"], answer: 1, explanation: "Standard precautions treat all blood and body fluids as potentially infectious." }
      ]
    },
    {
      id: "rn-t-medication",
      title: "Medication Administration Basics",
      subject: "pharmacology",
      readMinutes: 8,
      summary: "The rights of medication administration, common routes, safe practice, and a few key drug facts.",
      content: [
        { h: "The Rights of Medication", p: "Before giving any medicine, check the rights: the right patient, right drug, right dose, right route, right time, and right documentation. Confirm the patient's identity with two identifiers such as name and date of birth. Checking carefully every single time prevents most medication errors." },
        { h: "Routes of Administration", p: "Medicines can be given by mouth (oral), under the tongue (sublingual), into a muscle (intramuscular), under the skin (subcutaneous), into a vein (intravenous), or onto the skin (topical). The intravenous route works fastest and is used in emergencies. The oral route is the most common and convenient when the patient can swallow safely." },
        { h: "Safe Practice", p: "Read the label three times: when you pick the medicine up, when you prepare it, and before you give it. Never give a medicine you did not prepare yourself. Do not leave medicines at the bedside — watch the patient take them. Report and record any medicine refused or omitted, and never document a dose before it is given." },
        { h: "High-Alert Medicines", p: "Some medicines can cause serious harm if given wrongly — insulin, heparin, strong opioids, and potassium chloride. These need extra care, often an independent check by a second nurse. Never give potassium chloride as a rapid injection into a vein, as it can stop the heart." },
        { h: "Injections & Sites", p: "Intramuscular injections are commonly given into the deltoid (upper arm) or the vastus lateralis (thigh, preferred in infants). Subcutaneous injections such as insulin go into the fatty layer under the skin; rotate the sites to protect the tissue. Always use a new sterile needle and syringe and dispose of them safely." },
        { h: "Common Antidotes", p: "Know a few key antidotes: naloxone reverses opioid overdose, vitamin K reverses warfarin, protamine reverses heparin, and pyridoxine (vitamin B6) prevents the nerve damage caused by the TB drug isoniazid. Recognising these quickly can save a life." },
        { h: "Patient Education", p: "Teach patients the name of each medicine, why they take it, how and when to take it, and any common side effects. Stress finishing the full course of antibiotics. Good teaching improves adherence and reduces complications and readmissions." }
      ],
      checkIn: [
        { id: "rn-t-med-q1", subject: "pharmacology", stem: "Which is NOT one of the 'rights' of medication administration?", options: ["Right patient","Right dose","Right cost","Right route"], answer: 2, explanation: "The rights are patient, drug, dose, route, time, and documentation — not cost." },
        { id: "rn-t-med-q2", subject: "pharmacology", stem: "The fastest route for medication in an emergency is:", options: ["Oral","Intramuscular","Intravenous","Topical"], answer: 2, explanation: "The intravenous route delivers medication into the blood fastest." },
        { id: "rn-t-med-q3", subject: "pharmacology", stem: "The antidote for an opioid overdose is:", options: ["Flumazenil","Naloxone","Vitamin K","Atropine"], answer: 1, explanation: "Naloxone reverses opioid-induced respiratory depression." },
        { id: "rn-t-med-q4", subject: "pharmacology", stem: "Patient identity before giving medicine should be confirmed with:", options: ["Bed number only","Two identifiers such as name and date of birth","Room number","The diagnosis"], answer: 1, explanation: "Use two identifiers (e.g., name and date of birth) to confirm the right patient." },
        { id: "rn-t-med-q5", subject: "pharmacology", stem: "Which medicine must NEVER be given by rapid intravenous push?", options: ["Normal saline","Potassium chloride","Paracetamol","Vitamin C"], answer: 1, explanation: "Rapid IV potassium chloride can cause fatal cardiac arrest; it must be diluted and infused slowly." },
        { id: "rn-t-med-q6", subject: "pharmacology", stem: "The preferred intramuscular injection site in infants is the:", options: ["Deltoid","Vastus lateralis (thigh)","Buttock","Forearm"], answer: 1, explanation: "The vastus lateralis (thigh) is preferred for IM injection in infants." },
        { id: "rn-t-med-q7", subject: "pharmacology", stem: "The antidote for warfarin overdose is:", options: ["Protamine sulfate","Vitamin K","Naloxone","Calcium"], answer: 1, explanation: "Vitamin K reverses warfarin; protamine reverses heparin." },
        { id: "rn-t-med-q8", subject: "pharmacology", stem: "Insulin is given by which route?", options: ["Intravenous push routinely","Subcutaneous","Oral","Rectal"], answer: 1, explanation: "Insulin is normally given subcutaneously into the fatty layer under the skin." },
        { id: "rn-t-med-q9", subject: "pharmacology", stem: "High-alert medicines such as insulin and heparin should be:", options: ["Given quickly without checks","Independently double-checked by two nurses","Left at the bedside","Given by any staff"], answer: 1, explanation: "High-alert drugs need an independent double-check to prevent serious harm." },
        { id: "rn-t-med-q10", subject: "pharmacology", stem: "Pyridoxine (vitamin B6) is given with isoniazid (TB drug) to prevent:", options: ["Liver failure","Peripheral neuropathy","Deafness","Kidney stones"], answer: 1, explanation: "Pyridoxine prevents the peripheral neuropathy that isoniazid can cause." }
      ]
    },
    {
      id: "rn-t-firstaid",
      title: "First Aid & Emergency Care",
      subject: "adult-health",
      readMinutes: 8,
      summary: "ABC assessment, basic life support, recovery position, and first aid for bleeding, burns, choking, and shock.",
      content: [
        { h: "First, Keep Safe & Check ABC", p: "In any emergency, make sure the scene is safe, then check ABC: Airway (is it open?), Breathing (is the person breathing?), Circulation (is there a pulse, is there bleeding?). ABC tells you what to treat first. Call for help early." },
        { h: "Basic Life Support", p: "If a person is unresponsive and not breathing normally, call for help and start CPR. Push hard and fast in the centre of the chest at 100–120 compressions per minute, about 5–6 cm deep, allowing the chest to come back up between pushes. Continue until help or a defibrillator arrives." },
        { h: "Recovery Position", p: "An unconscious person who is breathing should be placed in the recovery position — on their side. This keeps the airway open and lets fluids or vomit drain out instead of being inhaled. Keep checking that they are still breathing." },
        { h: "Bleeding", p: "Control bleeding by applying firm, direct pressure on the wound with a clean cloth and raising the injured part if possible. Keep pressing; add more dressings on top rather than removing soaked ones. Severe, uncontrolled bleeding can quickly lead to shock." },
        { h: "Burns", p: "Cool a burn with clean, cool (not ice-cold) running water for about 20 minutes. Remove jewellery or tight clothing before swelling starts, unless stuck to the burn. Cover loosely with a clean, non-fluffy cloth or cling film. Do not apply toothpaste, butter, or oil." },
        { h: "Choking", p: "If a choking person cannot cough, speak, or breathe, give firm back blows between the shoulder blades, then abdominal thrusts (the Heimlich manoeuvre) in adults. Alternate until the object comes out or the person becomes unconscious — then start CPR and call for help." },
        { h: "Shock", p: "Shock is dangerously low blood flow to the body, often from severe bleeding, fluid loss, or infection. Signs are a fast weak pulse, cold pale clammy skin, fast breathing, and confusion. Lay the person down, keep them warm, control any bleeding, and get urgent medical help." }
      ],
      checkIn: [
        { id: "rn-t-fa-q1", subject: "adult-health", stem: "In an emergency, ABC stands for:", options: ["Assess, Bandage, Call","Airway, Breathing, Circulation","Alert, Breathe, Compress","Airway, Bleeding, CPR"], answer: 1, explanation: "ABC = Airway, Breathing, Circulation — the priority sequence in any emergency." },
        { id: "rn-t-fa-q2", subject: "adult-health", stem: "The chest compression rate in adult CPR is:", options: ["40–60 per minute","60–80 per minute","100–120 per minute","140–160 per minute"], answer: 2, explanation: "High-quality CPR uses 100–120 compressions per minute, 5–6 cm deep." },
        { id: "rn-t-fa-q3", subject: "adult-health", stem: "An unconscious person who is breathing should be placed in the:", options: ["Supine position","Recovery (side) position","Sitting position","Prone position"], answer: 1, explanation: "The recovery position keeps the airway open and lets fluids drain." },
        { id: "rn-t-fa-q4", subject: "adult-health", stem: "The first action to control external bleeding is:", options: ["Apply a tourniquet immediately","Apply firm direct pressure","Give water to drink","Remove all clothing"], answer: 1, explanation: "Firm direct pressure on the wound is the first step to control bleeding." },
        { id: "rn-t-fa-q5", subject: "adult-health", stem: "A burn should first be cooled with:", options: ["Ice","Cool running water for about 20 minutes","Butter","Toothpaste"], answer: 1, explanation: "Cool the burn with cool running water for ~20 minutes; never use ice, butter, or toothpaste." },
        { id: "rn-t-fa-q6", subject: "adult-health", stem: "For an adult who is choking and cannot breathe, you should give:", options: ["Water to drink","Back blows and abdominal thrusts","A hard slap on the cheek","Nothing, just wait"], answer: 1, explanation: "Alternate back blows and abdominal thrusts until the object clears." },
        { id: "rn-t-fa-q7", subject: "adult-health", stem: "Signs of shock include:", options: ["Slow strong pulse and warm skin","Fast weak pulse and cold clammy skin","High fever only","Normal vital signs"], answer: 1, explanation: "Shock causes a fast weak pulse, cold pale clammy skin, and confusion." },
        { id: "rn-t-fa-q8", subject: "adult-health", stem: "Before starting CPR, the rescuer should first:", options: ["Give water","Check that the scene is safe and the person is unresponsive","Apply a bandage","Take the blood pressure"], answer: 1, explanation: "Ensure the scene is safe and check responsiveness and breathing before starting CPR." },
        { id: "rn-t-fa-q9", subject: "adult-health", stem: "If a wound dressing becomes soaked with blood, you should:", options: ["Remove it and look","Add more dressings on top and keep pressing","Stop pressing","Wash the wound with soap"], answer: 1, explanation: "Add more dressings over the soaked one and maintain pressure; removing it disturbs clotting." },
        { id: "rn-t-fa-q10", subject: "adult-health", stem: "A person in shock should be:", options: ["Made to sit upright","Laid down and kept warm","Given a large meal","Left alone"], answer: 1, explanation: "Lay the person down, keep them warm, control bleeding, and get urgent help." }
      ]
    },
    {
      id: "rn-t-maternal",
      title: "Maternal & Newborn Care Basics",
      subject: "midwifery",
      readMinutes: 8,
      summary: "Antenatal care, danger signs in pregnancy, stages of labour, postpartum bleeding, and newborn care.",
      content: [
        { h: "Antenatal Care", p: "Antenatal care keeps mother and baby healthy and finds problems early. WHO recommends at least eight antenatal visits. Checks include blood pressure, weight, urine for protein and sugar, the baby's growth and heartbeat, tetanus vaccine, and iron and folic acid tablets. Folic acid early in pregnancy helps prevent birth defects of the spine." },
        { h: "Danger Signs in Pregnancy", p: "Teach every pregnant woman to seek care urgently for: severe headache or blurred vision, swelling of the face and hands, vaginal bleeding, severe abdominal pain, reduced baby movements, high fever, or fits. These may mean serious problems such as pre-eclampsia or bleeding." },
        { h: "Stages of Labour", p: "Labour has three stages. The first stage is from the start of regular contractions until the cervix is fully open (10 cm) — this is the longest. The second stage is from full opening to the birth of the baby. The third stage is the delivery of the placenta." },
        { h: "Pre-eclampsia", p: "Pre-eclampsia is high blood pressure (140/90 or more) with protein in the urine after 20 weeks of pregnancy, often with headache and swelling. If untreated it can cause fits (eclampsia), which are very dangerous. Magnesium sulfate is the main drug used to prevent and treat these fits." },
        { h: "Postpartum Bleeding", p: "Heavy bleeding after birth (postpartum haemorrhage) is a leading cause of mother's death. The commonest cause is a uterus that does not contract well (atony). If it happens: call for help, rub up the uterus, give a drug such as oxytocin, set up a drip, and watch the vital signs closely." },
        { h: "Newborn Care", p: "At birth, dry the baby, keep it warm against the mother's skin, and make sure it is breathing. Start breastfeeding within the first hour to give the baby colostrum, the first protective milk. Keep the cord clean and dry. Watch for danger signs: poor feeding, fast or difficult breathing, fever or cold body, and yellow colour in the first day." },
        { h: "Breastfeeding", p: "Exclusive breastfeeding — only breast milk, nothing else — is recommended for the first six months. Help the mother position the baby so its mouth covers most of the dark area around the nipple. Feed on demand. Breast milk is the perfect food and protects the baby from infection." }
      ],
      checkIn: [
        { id: "rn-t-mat-q1", subject: "midwifery", stem: "WHO recommends a minimum number of antenatal visits of:", options: ["2","4","8","12"], answer: 2, explanation: "WHO recommends a minimum of eight antenatal care contacts." },
        { id: "rn-t-mat-q2", subject: "midwifery", stem: "The first stage of labour ends when:", options: ["Contractions begin","The cervix is fully (10 cm) open","The baby is born","The placenta is delivered"], answer: 1, explanation: "The first stage runs from onset of labour to full cervical dilatation." },
        { id: "rn-t-mat-q3", subject: "midwifery", stem: "The commonest cause of bleeding after birth is:", options: ["Retained placenta","Uterus not contracting (atony)","A small tear","Clotting problems"], answer: 1, explanation: "Uterine atony — a poorly contracting uterus — is the leading cause of postpartum haemorrhage." },
        { id: "rn-t-mat-q4", subject: "midwifery", stem: "The main drug used to prevent fits in severe pre-eclampsia is:", options: ["Diazepam","Magnesium sulfate","Paracetamol","Aspirin"], answer: 1, explanation: "Magnesium sulfate prevents and treats eclamptic fits." },
        { id: "rn-t-mat-q5", subject: "midwifery", stem: "Breastfeeding should ideally start:", options: ["Within the first hour of birth","After 12 hours","After the first bath","On the second day"], answer: 0, explanation: "Early initiation within the first hour gives the baby colostrum and helps bonding." },
        { id: "rn-t-mat-q6", subject: "midwifery", stem: "A danger sign in pregnancy needing urgent care is:", options: ["Mild back ache","Severe headache with blurred vision","Mild nausea","Occasional heartburn"], answer: 1, explanation: "Severe headache with blurred vision can signal pre-eclampsia and needs urgent care." },
        { id: "rn-t-mat-q7", subject: "midwifery", stem: "The first protective milk produced after birth is called:", options: ["Foremilk","Colostrum","Hindmilk","Formula"], answer: 1, explanation: "Colostrum is the first thick milk, rich in antibodies that protect the baby." },
        { id: "rn-t-mat-q8", subject: "midwifery", stem: "Immediate care of the newborn at birth includes:", options: ["Delayed drying","Drying, warmth, and checking breathing","Immediate bathing","Routine deep suction for all"], answer: 1, explanation: "Dry the baby, keep it warm, and make sure it is breathing." },
        { id: "rn-t-mat-q9", subject: "midwifery", stem: "Pre-eclampsia is diagnosed after 20 weeks with high blood pressure plus:", options: ["Swelling alone","Protein in the urine","Headache alone","Nausea"], answer: 1, explanation: "Pre-eclampsia is BP ≥140/90 with proteinuria after 20 weeks." },
        { id: "rn-t-mat-q10", subject: "midwifery", stem: "Iron and folic acid are given in pregnancy mainly to prevent:", options: ["Diabetes","Anaemia (and neural tube defects)","High blood pressure","Infection"], answer: 1, explanation: "Iron prevents anaemia and folic acid prevents neural tube defects." }
      ]
    },
    {
      id: "rn-t-medsurg",
      title: "Common Medical–Surgical Conditions",
      subject: "adult-health",
      readMinutes: 9,
      summary: "Everyday care points for diabetes, hypertension, asthma/COPD, and basic pre- and post-operative nursing.",
      content: [
        { h: "Diabetes Care", p: "Diabetes means high blood sugar. Watch for low blood sugar (hypoglycaemia) — sweating, shaking, confusion — and treat a conscious patient quickly with sugar or juice. High blood sugar causes thirst, frequent urination, and tiredness. Teach foot care: check feet daily, wear good shoes, never walk barefoot, because poor sensation leads to ulcers." },
        { h: "High Blood Pressure", p: "Hypertension is blood pressure of 140/90 mmHg or more (Stage 2). It often has no symptoms but raises the risk of stroke and heart disease. Care includes a low-salt diet, regular activity, taking medicines as prescribed, and regular blood-pressure checks. Encourage patients not to stop their tablets when they feel well." },
        { h: "Asthma & COPD", p: "These cause narrowed airways and breathlessness. Reliever inhalers (such as salbutamol) open the airways quickly. In COPD with long-term carbon-dioxide retention, give oxygen carefully and aim for an oxygen level of 88–92%. Sit the breathless patient upright, stay calm, and give prescribed treatment. A 'silent chest' in asthma is an emergency." },
        { h: "Heart Failure", p: "In heart failure the heart pumps poorly, so fluid builds up — causing breathlessness, swollen ankles, and tiredness. Care includes a low-salt diet, daily weighing to spot fluid gain, fluid limits if prescribed, and water tablets (diuretics) such as furosemide. Watch for low potassium with these tablets." },
        { h: "Pre-operative Care", p: "Before surgery: confirm consent, keep the patient nil by mouth as instructed, remove jewellery and dentures, check the surgical site is marked, and give any pre-operative medicines. Explain what will happen to reduce fear. A 'time-out' confirms the right patient, right site, and right operation before starting." },
        { h: "Post-operative Care", p: "After surgery: check vital signs often, watch the wound for bleeding, manage pain, and monitor fluids. Encourage early movement, deep breathing, and leg exercises to prevent chest infection and blood clots in the legs (DVT). Report heavy bleeding, fever, or sudden breathlessness at once." },
        { h: "Wound Care", p: "Use clean or sterile technique as needed. A healthy healing wound has pink or red tissue; yellow or black tissue suggests slough or dead tissue needing review. Good nutrition (protein and vitamin C), control of blood sugar, and keeping the wound clean all help healing." }
      ],
      checkIn: [
        { id: "rn-t-ms-q1", subject: "adult-health", stem: "The immediate treatment for a conscious patient with low blood sugar is:", options: ["Insulin","Fast-acting sugar such as juice","Antibiotics","Nil by mouth"], answer: 1, explanation: "Give a conscious hypoglycaemic patient fast-acting sugar, then recheck." },
        { id: "rn-t-ms-q2", subject: "adult-health", stem: "Stage 2 hypertension begins at a blood pressure of:", options: ["120/80","130/80","140/90","160/100"], answer: 2, explanation: "Per ACC/AHA, Stage 2 hypertension is ≥140/90 mmHg." },
        { id: "rn-t-ms-q3", subject: "adult-health", stem: "The target oxygen level for a COPD patient who retains CO₂ is:", options: ["95–100%","88–92%","80–85%","Above 99%"], answer: 1, explanation: "Aim for SpO₂ 88–92% in COPD to avoid removing the breathing drive." },
        { id: "rn-t-ms-q4", subject: "adult-health", stem: "Important advice for a diabetic patient's foot care is:", options: ["Walk barefoot to toughen the skin","Check the feet daily and wear good shoes","Soak feet in hot water daily","Ignore small cuts"], answer: 1, explanation: "Daily inspection and proper footwear prevent diabetic foot ulcers." },
        { id: "rn-t-ms-q5", subject: "adult-health", stem: "The best position for a breathless patient is:", options: ["Lying flat","Sitting upright (Fowler's)","On the stomach","Head down"], answer: 1, explanation: "Sitting upright eases breathing by allowing fuller lung expansion." },
        { id: "rn-t-ms-q6", subject: "adult-health", stem: "To prevent blood clots in the legs after surgery, the nurse should encourage:", options: ["Strict bed rest","Early movement and leg exercises","A high-salt diet","Restricting fluids"], answer: 1, explanation: "Early mobilization and leg exercises reduce the risk of deep vein thrombosis." },
        { id: "rn-t-ms-q7", subject: "adult-health", stem: "A patient on furosemide (a water tablet) should be watched for low:", options: ["Potassium","Calcium","Sodium","Glucose"], answer: 0, explanation: "Furosemide causes potassium loss, risking hypokalaemia." },
        { id: "rn-t-ms-q8", subject: "adult-health", stem: "The reliever inhaler for sudden asthma symptoms is:", options: ["An inhaled steroid","Salbutamol","An antibiotic","A water tablet"], answer: 1, explanation: "Salbutamol, a short-acting reliever, opens the airways quickly." },
        { id: "rn-t-ms-q9", subject: "adult-health", stem: "The best daily measure to detect fluid build-up in heart failure is:", options: ["Temperature","Daily weighing","Skin colour","Pulse only"], answer: 1, explanation: "Daily weight at the same time best detects fluid retention." },
        { id: "rn-t-ms-q10", subject: "adult-health", stem: "Before surgery, the nurse must ensure the patient has:", options: ["Eaten a large meal","Signed informed consent and is nil by mouth as instructed","Removed the ID band","Walked a long distance"], answer: 1, explanation: "Confirm consent and that the patient is appropriately nil by mouth before surgery." }
      ]
    }
  ];

  /* Foundational question bank */
  const questionBank = [
    /* Fundamental */
    { id: "rn-fn-001", subject: "fundamental-nursing", stem: "The five rights of medication administration do NOT include:", options: ["Right patient","Right route","Right time","Right colour"], answer: 3, explanation: "Right colour is not a 'right'. The five: patient, drug, dose, route, time." },
    { id: "rn-fn-002", subject: "fundamental-nursing", stem: "First step in CPR (adult, unresponsive):", options: ["Check breathing","Call for help and start chest compressions","Give two rescue breaths","Open airway"], answer: 1, explanation: "Activate emergency response, start chest compressions (C-A-B sequence)." },
    { id: "rn-fn-003", subject: "fundamental-nursing", stem: "Most important measure against infection spread:", options: ["Antibiotics","Hand washing","Gloves","Masks"], answer: 1, explanation: "Hand hygiene." },
    { id: "rn-fn-004", subject: "fundamental-nursing", stem: "Adult normal respiratory rate:", options: ["8-10","12-20","20-28","30-40"], answer: 1, explanation: "12-20 breaths/min." },
    { id: "rn-fn-005", subject: "fundamental-nursing", stem: "Best position for unconscious patient (recovery position):", options: ["Supine","Side-lying / lateral","Prone","Fowler's"], answer: 1, explanation: "Recovery (lateral) position prevents aspiration and maintains airway." },
    { id: "rn-fn-006", subject: "fundamental-nursing", stem: "Glove technique: when do you replace gloves?", options: ["Once a shift","Between patients and after contamination","Only when visibly soiled","Never"], answer: 1, explanation: "Change between each patient and any time contaminated/torn." },
    { id: "rn-fn-007", subject: "fundamental-nursing", stem: "Sterile technique is needed for:", options: ["Bed bath","IV insertion","Feeding","Bedmaking"], answer: 1, explanation: "IV insertion breaches skin barrier — requires aseptic technique." },
    { id: "rn-fn-008", subject: "fundamental-nursing", stem: "Pulse site routinely used in adults:", options: ["Femoral","Radial","Carotid","Temporal"], answer: 1, explanation: "Radial." },
    { id: "rn-fn-009", subject: "fundamental-nursing", stem: "Documentation must be:", options: ["Brief and vague","Factual, accurate, complete, timely","Subjective only","In pencil"], answer: 1, explanation: "FACT documentation." },
    { id: "rn-fn-010", subject: "fundamental-nursing", stem: "Greatest risk of prolonged bed rest:", options: ["Hypertension","Deep vein thrombosis","Hyperthermia","Hyperglycemia"], answer: 1, explanation: "Immobility → venous stasis → DVT." },
    /* Anatomy */
    { id: "rn-an-001", subject: "anatomy", stem: "Total number of bones in adult:", options: ["198","206","216","270"], answer: 1, explanation: "206." },
    { id: "rn-an-002", subject: "anatomy", stem: "Number of cranial nerves:", options: ["10","12","14","30"], answer: 1, explanation: "12 pairs." },
    { id: "rn-an-003", subject: "anatomy", stem: "Largest organ:", options: ["Liver","Skin","Lung","Heart"], answer: 1, explanation: "Skin." },
    { id: "rn-an-004", subject: "anatomy", stem: "Heart has how many chambers?", options: ["2","3","4","5"], answer: 2, explanation: "4 — 2 atria, 2 ventricles." },
    { id: "rn-an-005", subject: "anatomy", stem: "Functional unit of kidney:", options: ["Glomerulus","Nephron","Tubule","Pelvis"], answer: 1, explanation: "Nephron." },
    { id: "rn-an-006", subject: "anatomy", stem: "Insulin is secreted by:", options: ["Alpha cells","Beta cells","Delta cells","Acinar cells"], answer: 1, explanation: "Beta cells." },
    { id: "rn-an-007", subject: "anatomy", stem: "Normal adult blood volume:", options: ["1-2 L","3-4 L","5-6 L","9-10 L"], answer: 2, explanation: "5-6 L." },
    { id: "rn-an-008", subject: "anatomy", stem: "Cerebellum is responsible for:", options: ["Vision","Balance/coordination","Memory","Smell"], answer: 1, explanation: "Coordination, balance, posture." },
    /* Nutrition */
    { id: "rn-nu-001", subject: "nutrition", stem: "1 g protein =", options: ["4 kcal","7 kcal","9 kcal","2 kcal"], answer: 0, explanation: "4 kcal/g." },
    { id: "rn-nu-002", subject: "nutrition", stem: "Vitamin C richest source:", options: ["Milk","Citrus fruits","Rice","Egg"], answer: 1, explanation: "Citrus, amla, guava." },
    { id: "rn-nu-003", subject: "nutrition", stem: "Vitamin essential for blood clotting:", options: ["A","B12","C","K"], answer: 3, explanation: "Vitamin K." },
    { id: "rn-nu-004", subject: "nutrition", stem: "Vitamin A deficiency causes:", options: ["Scurvy","Night blindness","Rickets","Beri-beri"], answer: 1, explanation: "Night blindness; severe → xerophthalmia." },
    { id: "rn-nu-005", subject: "nutrition", stem: "Iodine deficiency causes:", options: ["Anemia","Goiter","Scurvy","Pellagra"], answer: 1, explanation: "Goiter and (severe, in fetus) cretinism." },
    { id: "rn-nu-006", subject: "nutrition", stem: "Beri-beri is caused by deficiency of:", options: ["B1 (thiamin)","B2","B6","B12"], answer: 0, explanation: "Thiamin deficiency." },
    /* Community */
    { id: "rn-co-001", subject: "community-health", stem: "BCG given at:", options: ["Birth","6 wk","9 mo","15 mo"], answer: 0, explanation: "Birth." },
    { id: "rn-co-002", subject: "community-health", stem: "MR-1 given at:", options: ["6 wk","10 wk","9 mo","15 mo"], answer: 2, explanation: "9 months." },
    { id: "rn-co-003", subject: "community-health", stem: "MR-2 given at:", options: ["12 mo","15 mo","18 mo","24 mo"], answer: 1, explanation: "15 months." },
    { id: "rn-co-004", subject: "community-health", stem: "Alma-Ata Declaration year:", options: ["1948","1968","1978","1988"], answer: 2, explanation: "1978." },
    { id: "rn-co-005", subject: "community-health", stem: "WHO headquarters:", options: ["New York","Geneva","Dhaka","Rome"], answer: 1, explanation: "Geneva." },
    /* Child */
    { id: "rn-ch-001", subject: "child-health", stem: "Exclusive breastfeeding duration:", options: ["3 mo","6 mo","9 mo","12 mo"], answer: 1, explanation: "6 mo." },
    { id: "rn-ch-002", subject: "child-health", stem: "ORS + zinc for diarrhea: zinc duration:", options: ["3 days","5 days","10-14 days","30 days"], answer: 2, explanation: "10-14 days." },
    { id: "rn-ch-003", subject: "child-health", stem: "Birth weight is approximately doubled by:", options: ["3 mo","6 mo","9 mo","12 mo"], answer: 1, explanation: "6 mo." },
    { id: "rn-ch-004", subject: "child-health", stem: "BCG injection route:", options: ["Subcutaneous","Intramuscular","Intradermal","Intravenous"], answer: 2, explanation: "Intradermal in left deltoid." },
    { id: "rn-ch-005", subject: "child-health", stem: "Most appropriate IM site in <1 yr:", options: ["Deltoid","Vastus lateralis","Dorsogluteal","Ventrogluteal"], answer: 1, explanation: "Vastus lateralis." },
    /* English */
    { id: "rn-en-001", subject: "english", stem: "Antonym of 'big':", options: ["Large","Small","Huge","Tall"], answer: 1, explanation: "Small." },
    { id: "rn-en-002", subject: "english", stem: "Plural of 'child':", options: ["Childs","Childrens","Children","Childes"], answer: 2, explanation: "Children." },
    { id: "rn-en-003", subject: "english", stem: "Correct: 'He ___ to school every day.'", options: ["go","goes","going","gone"], answer: 1, explanation: "Third-person singular → 'goes'." },
    { id: "rn-en-004", subject: "english", stem: "Article: '___ apple a day keeps the doctor away.'", options: ["A","An","The","No article"], answer: 1, explanation: "'An' before vowel sound." },
    { id: "rn-en-005", subject: "english", stem: "Past tense of 'eat':", options: ["eated","ate","eaten","eating"], answer: 1, explanation: "Eat → ate → eaten (irregular)." },
    /* GK */
    { id: "rn-gk-001", subject: "gk", stem: "Independence Day of Bangladesh:", options: ["21 February","26 March","17 April","16 December"], answer: 1, explanation: "26 March 1971." },
    { id: "rn-gk-002", subject: "gk", stem: "Florence Nightingale's birthday is celebrated as:", options: ["World Health Day","International Nurses Day","World Cancer Day","International Women's Day"], answer: 1, explanation: "12 May — Nurses Day." },
    { id: "rn-gk-003", subject: "gk", stem: "Capital of Bangladesh:", options: ["Sylhet","Chittagong","Dhaka","Rajshahi"], answer: 2, explanation: "Dhaka." },
    { id: "rn-gk-004", subject: "gk", stem: "BNMC stands for:", options: ["Bangladesh Nursing & Midwifery Council","Bangladesh National Medical Council","Bangladesh Nursing Mission Council","Bangladesh Nurse Membership Committee"], answer: 0, explanation: "Bangladesh Nursing & Midwifery Council." },
    { id: "rn-gk-005", subject: "gk", stem: "International Mother Language Day:", options: ["21 February","26 March","16 December","12 May"], answer: 0, explanation: "21 February — UNESCO recognized after Bangladesh's Language Movement of 1952." }
  ];

  const tests = [];

  /* Model Test 01 — fully populated */
  tests.push({
    id: "rn-mt-01",
    title: "BNMC RN Model Test 01",
    type: "model",
    duration: 30,
    intendedCount: 30,
    status: "live",
    questionIds: [
      "rn-fn-001","rn-fn-002","rn-fn-003","rn-fn-005","rn-fn-007","rn-fn-009",
      "rn-an-001","rn-an-002","rn-an-004","rn-an-005",
      "rn-nu-001","rn-nu-003",
      "rn-co-001","rn-co-002","rn-co-004",
      "rn-ch-001","rn-ch-002","rn-ch-004",
      "rn-en-001","rn-en-003",
      "rn-gk-001","rn-gk-002","rn-gk-004",
      "rn-fn-004","rn-fn-008","rn-an-006","rn-an-008",
      "rn-nu-005","rn-co-005","rn-gk-005"
    ]
  });

  /* Model Test 02 — fully populated */
  tests.push({
    id: "rn-mt-02",
    title: "BNMC RN Model Test 02",
    type: "model",
    duration: 30,
    intendedCount: 30,
    status: "live",
    questionIds: [
      "rn-fn-002","rn-fn-006","rn-fn-010",
      "rn-an-003","rn-an-007",
      "rn-nu-002","rn-nu-004","rn-nu-006",
      "rn-co-003",
      "rn-ch-004","rn-ch-005",
      "rn-en-002","rn-en-004","rn-en-005",
      "rn-gk-003",
      "rn-fn-001","rn-fn-005",
      "rn-an-001","rn-an-002",
      "rn-co-001","rn-co-002",
      "rn-ch-001","rn-ch-002",
      "rn-en-001","rn-en-003",
      "rn-gk-001","rn-gk-002",
      "rn-nu-001","rn-nu-003","rn-nu-005"
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

  /* Look up each question by id and derive fact/stem keys so a single test never
     repeats the same fact or an identical stem via two different items. */
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
     from the bank with a per-test rotation. Skips same-fact / same-stem collisions. */
  function pickIdsForTest(testNum) {
    const ids = questionBank.map(function (q) { return q.id; });
    const n = ids.length;
    if (n === 0) return [];
    const offset = ((testNum * 11) + 5) % n;
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

  /* Pick `count` questions spread evenly across the bank, skipping same-fact /
     same-stem collisions — used for the full model tests. */
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
      id: "rn-mt-" + String(i).padStart(2, "0"),
      title: "BNMC RN Model Test " + String(i).padStart(2, "0"),
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
      id: "rn-mt-" + String(i).padStart(2, "0"),
      title: "BNMC RN Model Test " + String(i).padStart(2, "0"),
      type: "model",
      duration: 30,
      intendedCount: 30,
      status: "live",
      questionIds: pickIdsForTest(i)
    });
  }

  /* Three full model tests — 100 Q each, evenly spread across subjects. */
  tests.push({
    id: "rn-fmt-01",
    title: "BNMC RN Full Model Test 01 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 0)
  });
  tests.push({
    id: "rn-fmt-02",
    title: "BNMC RN Full Model Test 02 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 5)
  });
  tests.push({
    id: "rn-fmt-03",
    title: "BNMC RN Full Model Test 03 (100 Q)",
    type: "full-model",
    duration: 100,
    intendedCount: 100,
    status: "live",
    questionIds: pickSpread(100, 11)
  });

  /* Register the topic check-in tests (questions already in bank above). */
  topics.forEach(function (t) {
    tests.push({
      id: "rn-topic-" + t.id,
      title: t.title + " — Check-in",
      type: "topic-checkin",
      topicId: t.id,
      duration: Math.max(5, t.checkIn.length),
      intendedCount: t.checkIn.length,
      status: "live",
      questionIds: t.checkIn.map(function (q) { return q.id; })
    });
  });

  window.PulsePrograms["rn"] = {
    topics: topics,
    questionBank: questionBank,
    tests: tests
  };
})();
