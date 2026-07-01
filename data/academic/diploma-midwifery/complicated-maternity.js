/* ============================================================
   Diploma in Midwifery (ICM standard) · DM234 Complicated
   Maternity Experience — Year 2. 18 deep, syllabus-aligned
   topics on high-risk & complicated maternity, obstetric
   emergencies, operative birth and the peri-operative
   continuum. Authored fresh from the BNMC midwifery syllabus
   and grounded in standard texts:
     • Dutta DC. DC Dutta's Textbook of Obstetrics. CBS/Jaypee.
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
     • Macdonald S, Magill-Cuerden J. Mayes' Midwifery. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_CME = [
  "Dutta DC. DC Dutta's Textbook of Obstetrics. CBS Publishers / Jaypee.",
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.",
  "Macdonald S, Magill-Cuerden J. Mayes' Midwifery. Bailliere Tindall/Elsevier."
];

window.Academic.topics["diploma-midwifery/complicated-maternity"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "cme-01-high-risk-pregnancy",
    unit: "Unit 1 · Introduction to Complicated Maternity",
    title: "High-Risk Pregnancy & Risk Assessment",
    readMinutes: 17,
    summary: "The concept of high-risk pregnancy, maternal mortality and the 'big five' causes, predisposing and risk factors, systematic risk assessment and screening, and the midwife's role in early identification, the three-delays model and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept of high-risk pregnancy", p: "A high-risk pregnancy is one in which the mother, the fetus or the newborn is at increased chance of illness or death, before, during or after birth, because of a factor arising from the pregnancy itself, from a pre-existing condition, or from the woman's social and environmental circumstances. Most pregnancies are normal; the midwife's task is to keep watch across the whole childbearing journey so that the small number that deviate are recognised early and referred appropriately." },
      { h: "Maternal mortality and the 'big five'", p: "Maternal death is the death of a woman while pregnant or within 42 days of the end of pregnancy, from any cause related to or aggravated by the pregnancy or its management. The maternal mortality ratio expresses these deaths per 100,000 live births. Worldwide most maternal deaths are preventable and cluster into five leading direct causes." },
      { h: "The 'big five' direct causes", list: [
        "Haemorrhage — antepartum and especially postpartum bleeding.",
        "Hypertensive disorders — pre-eclampsia and eclampsia.",
        "Sepsis — puerperal and pregnancy-related infection.",
        "Obstructed / prolonged labour — including uterine rupture.",
        "Complications of unsafe abortion."
      ] },
      { h: "Predisposing and risk factors", list: [
        "Age extremes — under 18 or over 35 years.",
        "Parity extremes — first pregnancy (primigravida) or grand multipara.",
        "Poor obstetric history — previous stillbirth, caesarean, PPH, pre-eclampsia.",
        "Short stature and contracted pelvis; malnutrition and anaemia.",
        "Medical disorders — cardiac disease, diabetes, hypertension, kidney disease.",
        "Multiple pregnancy, malpresentation and previous uterine surgery.",
        "Social factors — poverty, illiteracy, poor access to care, no antenatal care."
      ] },
      { h: "Systematic risk assessment", p: "Risk assessment is continuous, not a single event. It begins at booking with a full history, examination and baseline investigations, and is repeated at every contact because risk status can change (for example, a woman booking as low-risk who later develops pre-eclampsia). The midwife uses history, clinical findings, growth monitoring and screening tests to decide who can continue midwifery-led care and who needs consultant or referral-level care." },
      { h: "The 'three delays' model", p: "Many maternal deaths follow avoidable delays: (1) delay in the family deciding to seek care; (2) delay in reaching a health facility (transport, distance, cost); and (3) delay in receiving adequate care once at the facility. Understanding these delays helps the midwife act on the causes she can influence — health education, birth-preparedness plans and prompt referral.", figure: {
        caption: "The three-delays model — the delays between recognising a problem and receiving effective care.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three delays model of maternal mortality."><defs><marker id="cmeArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="70" width="160" height="70" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="95" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">DELAY 1</text><text x="95" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">deciding to seek care</text><rect x="200" y="70" width="160" height="70" rx="10" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="280" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">DELAY 2</text><text x="280" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">reaching the facility</text><rect x="385" y="70" width="160" height="70" rx="10" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="465" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FDF2F8">DELAY 3</text><text x="465" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDF2F8">receiving care</text><line x1="175" y1="105" x2="196" y2="105" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr1)"/><line x1="360" y1="105" x2="381" y2="105" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr1)"/></svg>'
      } },
      { h: "Midwifery care and referral", p: "The midwife promotes safe motherhood by providing focused antenatal care, identifying danger signs, teaching women and families to recognise them, and making timely, professional referrals with clear documentation and handover. The International Confederation of Midwives (ICM) frames midwifery as woman-centred, evidence-based partnership; the Lancet Series on Midwifery showed that skilled midwifery care could prevent a large proportion of maternal and newborn deaths." },
      { h: "Health education and prevention", list: [
        "Early booking and regular antenatal attendance.",
        "Birth-preparedness and complication-readiness plan.",
        "Recognition of obstetric danger signs (bleeding, severe headache, convulsion, fever, reduced fetal movement).",
        "Nutrition, iron-folate supplementation and rest.",
        "Skilled attendance at birth and access to emergency obstetric care."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Define high-risk pregnancy and maternal mortality ratio.",
      "List and briefly explain the 'big five' causes of maternal death.",
      "Describe the risk factors that make a pregnancy high-risk.",
      "Explain the 'three delays' model and the midwife's role in reducing each delay.",
      "Discuss the process of continuous risk assessment in antenatal care."
    ],
    assessment: [
      { type: "mcq", q: "A maternal death is defined as death during pregnancy or within how many days of the end of pregnancy?", options: ["7 days", "28 days", "42 days", "90 days"], answer: 2, rationale: "The standard definition covers death during pregnancy or within 42 days of its termination from a related cause." },
      { type: "mcq", q: "Which is NOT one of the 'big five' direct causes of maternal death?", options: ["Haemorrhage", "Hypertensive disorders", "Road traffic injury", "Sepsis"], answer: 2, rationale: "The big five are haemorrhage, hypertensive disorders, sepsis, obstructed labour and unsafe abortion; injury is an indirect/incidental cause." },
      { type: "mcq", q: "The maternal mortality ratio is expressed per:", options: ["1,000 live births", "10,000 live births", "100,000 live births", "1,000 pregnancies"], answer: 2, rationale: "By convention the maternal mortality ratio is reported per 100,000 live births." },
      { type: "mcq", q: "Which maternal age range is associated with higher pregnancy risk?", options: ["20–24 years", "Under 18 or over 35 years", "25–29 years", "22–28 years"], answer: 1, rationale: "Age extremes — adolescence and advanced maternal age — carry increased obstetric risk." },
      { type: "mcq", q: "Risk assessment in pregnancy should be:", options: ["Done only at booking", "Done only in labour", "Continuous at every contact", "Done only if the woman complains"], answer: 2, rationale: "Risk status can change, so assessment is repeated at every antenatal contact." },
      { type: "mcq", q: "The FIRST delay in the three-delays model refers to delay in:", options: ["Reaching the facility", "Deciding to seek care", "Receiving care at the facility", "Diagnosing the problem"], answer: 1, rationale: "The first delay is at household level — recognising the problem and deciding to seek care." },
      { type: "mcq", q: "A grand multipara is a woman who has:", options: ["Had no births", "Had one birth", "Had a high number of previous births", "A multiple pregnancy"], answer: 2, rationale: "Grand multiparity (many previous births) raises risks such as atonic PPH and malpresentation." },
      { type: "mcq", q: "Which organisation frames midwifery as woman-centred, evidence-based partnership globally?", options: ["ICM", "IMF", "WTO", "FIFA"], answer: 0, rationale: "The International Confederation of Midwives (ICM) sets the global standard for midwifery practice." },
      { type: "mcq", q: "The most important midwifery action once a serious complication is identified is to:", options: ["Wait and observe overnight", "Reassure and send home", "Refer promptly with documentation and handover", "Repeat the booking history"], answer: 2, rationale: "Timely referral with clear communication saves lives when a complication exceeds the midwife's scope." },
      { type: "mcq", q: "Birth-preparedness and complication-readiness planning mainly helps reduce which delay?", options: ["No delay", "Delay in deciding and reaching care", "Delay caused by the disease itself", "Delay in laboratory testing"], answer: 1, rationale: "Advance planning for transport, funds and decision-making tackles the first and second delays." }
      , { type: "fill", q: "Death of a woman within 42 days of the end of pregnancy from a related cause is called a ____ death.", accept: ["maternal"], rationale: "This is the definition of a maternal death." }
      , { type: "fill", q: "The model describing delays in deciding, reaching and receiving care is the ____ delays model.", accept: ["three", "3"], rationale: "The three-delays model explains preventable maternal deaths." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "cme-02-early-bleeding",
    unit: "Unit 2 · Bleeding & Hyperemesis in Pregnancy",
    title: "Bleeding in Early Pregnancy: Miscarriage, Ectopic & Molar Pregnancy",
    readMinutes: 18,
    summary: "Causes of bleeding in early pregnancy — types of miscarriage (abortion), ectopic pregnancy and hydatidiform mole — with clinical features, investigations, management principles and the midwife's role in recognition, resuscitation and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and importance", p: "Bleeding in early pregnancy is vaginal bleeding before 24 weeks (viability). It is common and frightening for the woman; while some causes are minor, others — ectopic pregnancy in particular — are life-threatening. The midwife must always take early-pregnancy bleeding seriously, assess for shock, and refer for accurate diagnosis." },
      { h: "Main causes", list: [
        "Miscarriage (spontaneous abortion) — loss before 24 weeks.",
        "Ectopic pregnancy — implantation outside the uterine cavity.",
        "Hydatidiform mole (molar pregnancy / gestational trophoblastic disease).",
        "Implantation bleeding and local causes (cervical polyp, infection)."
      ] },
      { h: "Miscarriage — types", list: [
        "Threatened — bleeding, closed cervix, pregnancy may continue.",
        "Inevitable — bleeding with open cervix; loss cannot be prevented.",
        "Incomplete — some products passed, some retained; bleeding continues.",
        "Complete — all products expelled; bleeding and pain settle.",
        "Missed — fetus has died but is retained; uterus not growing.",
        "Septic — miscarriage complicated by infection.",
        "Recurrent — three or more consecutive spontaneous losses."
      ] },
      { h: "Ectopic pregnancy", p: "In ectopic pregnancy the embryo implants outside the uterus, most often in the fallopian tube. As it grows it can rupture, causing severe internal (intra-abdominal) haemorrhage. Classic features are amenorrhoea followed by lower abdominal pain and slight vaginal bleeding; rupture presents with sudden severe pain, collapse, shoulder-tip pain and signs of shock. It is a surgical emergency — the midwife arranges urgent transfer while treating for shock.", figure: {
        caption: "Types of miscarriage classified by cervical os and outcome.",
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of miscarriage."><rect x="180" y="10" width="200" height="40" rx="8" fill="#831843"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FDF2F8">MISCARRIAGE</text><rect x="20" y="90" width="150" height="48" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="95" y="110" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Threatened</text><text x="95" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">os closed</text><rect x="205" y="90" width="150" height="48" rx="8" fill="#F9A8D4" stroke="#831843" stroke-width="1.5"/><text x="280" y="110" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Inevitable</text><text x="280" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">os open</text><rect x="390" y="90" width="150" height="48" rx="8" fill="#BE185D" stroke="#831843" stroke-width="1.5"/><text x="465" y="110" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FDF2F8">Missed</text><text x="465" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDF2F8">fetus retained</text><rect x="112" y="165" width="150" height="45" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="187" y="185" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Incomplete</text><text x="187" y="202" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">some retained</text><rect x="300" y="165" width="150" height="45" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="375" y="185" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Complete</text><text x="375" y="202" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">all expelled</text></svg>'
      } },
      { h: "Hydatidiform mole", p: "A molar pregnancy is an abnormal proliferation of trophoblast (placental tissue) with no normal fetus (complete mole) or with an abnormal fetus (partial mole). Features include heavy or brownish bleeding, a uterus larger than expected for dates, exaggerated pregnancy symptoms (severe vomiting, early pre-eclampsia) and very high hCG. Ultrasound shows a characteristic 'snowstorm' appearance. Treatment is evacuation, followed by hCG follow-up because of a small risk of persistent trophoblastic disease." },
      { h: "Clinical features and assessment", list: [
        "Amount, colour and duration of bleeding; passage of clots or products.",
        "Pain — site, type and severity (cramping vs sudden severe).",
        "Amenorrhoea and pregnancy test / gestational age.",
        "Signs of shock — pallor, fast weak pulse, low blood pressure, cold clammy skin.",
        "Shoulder-tip pain, fainting — suggest ruptured ectopic."
      ] },
      { h: "Investigations", list: [
        "Urine and serum pregnancy test (beta-hCG); serial hCG for ectopic/mole.",
        "Ultrasound scan — intrauterine sac, retained products, adnexal mass or 'snowstorm'.",
        "Full blood count and blood group with cross-match.",
        "Assessment of Rh status (for anti-D where indicated)."
      ] },
      { h: "Management principles", list: [
        "Threatened miscarriage — rest, reassurance, observation; scan to confirm viability.",
        "Inevitable/incomplete — may need medical or surgical evacuation of the uterus.",
        "Ectopic — urgent surgical or medical management; treat shock, cross-match blood.",
        "Molar — suction evacuation and hCG surveillance.",
        "Give anti-D to Rh-negative women where indicated; offer analgesia and antibiotics if infected."
      ] },
      { h: "Midwifery care and referral", p: "The midwife stays calm, assesses vital signs, estimates blood loss and looks for shock. She keeps the woman nil by mouth if surgery is likely, secures IV access, gives fluids as directed, saves any pads or passed tissue, and arranges urgent referral for suspected ectopic, heavy bleeding or shock. Emotional support and sensitive communication are essential — early pregnancy loss is a bereavement. Follow-up includes contraception advice and, for molar pregnancy, avoiding pregnancy until hCG has normalised." }
    ],
    references: REF_CME,
    examQuestions: [
      "Classify the types of miscarriage and describe their clinical features.",
      "Describe the clinical features and management of a ruptured ectopic pregnancy.",
      "What is a hydatidiform mole? Outline its features, diagnosis and follow-up.",
      "Explain the midwife's role in the emergency care of a woman bleeding in early pregnancy.",
      "List the investigations used in early-pregnancy bleeding and their purpose."
    ],
    assessment: [
      { type: "mcq", q: "Bleeding in early pregnancy is defined as bleeding before:", options: ["12 weeks", "20 weeks", "24 weeks", "28 weeks"], answer: 2, rationale: "Early-pregnancy bleeding is bleeding before the accepted age of viability (24 weeks)." },
      { type: "mcq", q: "In a threatened miscarriage the cervical os is:", options: ["Open with heavy loss", "Closed and the pregnancy may continue", "Fully dilated", "Absent"], answer: 1, rationale: "Threatened miscarriage: bleeding with a closed os; the pregnancy may still continue." },
      { type: "mcq", q: "The most common site of an ectopic pregnancy is the:", options: ["Ovary", "Cervix", "Fallopian tube", "Abdominal cavity"], answer: 2, rationale: "Around most ectopic pregnancies implant in the fallopian tube." },
      { type: "mcq", q: "Sudden severe abdominal pain, collapse and shoulder-tip pain suggest:", options: ["Threatened miscarriage", "Complete miscarriage", "Ruptured ectopic pregnancy", "Molar pregnancy"], answer: 2, rationale: "These are classic features of tubal rupture with intra-abdominal bleeding." },
      { type: "mcq", q: "A uterus larger than dates with very high hCG and a 'snowstorm' scan suggests:", options: ["Ectopic pregnancy", "Hydatidiform mole", "Missed miscarriage", "Twin pregnancy"], answer: 1, rationale: "These are characteristic of a hydatidiform (molar) pregnancy." },
      { type: "mcq", q: "In an incomplete miscarriage:", options: ["Nothing has been passed", "All products have been expelled", "Some products remain in the uterus", "The fetus is alive"], answer: 2, rationale: "Incomplete miscarriage means some products are retained and bleeding continues." },
      { type: "mcq", q: "A key immediate midwifery action for suspected ruptured ectopic is to:", options: ["Send home with analgesia", "Secure IV access, treat shock and refer urgently", "Give oral iron and review in a week", "Perform a vaginal delivery"], answer: 1, rationale: "It is a surgical emergency; resuscitate and arrange urgent transfer." },
      { type: "mcq", q: "After evacuation of a molar pregnancy, follow-up is by monitoring:", options: ["Blood pressure only", "Serum hCG levels", "Fundal height", "Fetal heart rate"], answer: 1, rationale: "Serial hCG detects persistent trophoblastic disease after mole evacuation." },
      { type: "mcq", q: "Which blood test guides the need for anti-D after early-pregnancy bleeding?", options: ["Blood glucose", "Rhesus (Rh) group", "Serum uric acid", "Liver enzymes"], answer: 1, rationale: "Rh-negative women may need anti-D to prevent isoimmunisation." },
      { type: "mcq", q: "Three or more consecutive spontaneous pregnancy losses are termed:", options: ["Missed miscarriage", "Septic miscarriage", "Recurrent miscarriage", "Threatened miscarriage"], answer: 2, rationale: "Recurrent miscarriage is defined as three or more consecutive losses." }
      , { type: "fill", q: "Implantation of the embryo outside the uterine cavity is called a(n) ____ pregnancy.", accept: ["ectopic"], rationale: "Ectopic pregnancy most commonly occurs in the fallopian tube." }
      , { type: "fill", q: "A miscarriage in which the fetus has died but is retained in the uterus is a ____ miscarriage.", accept: ["missed"], rationale: "In a missed miscarriage the non-viable pregnancy is retained." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "cme-03-hyperemesis",
    unit: "Unit 2 · Bleeding & Hyperemesis in Pregnancy",
    title: "Hyperemesis Gravidarum",
    readMinutes: 15,
    summary: "Excessive vomiting in pregnancy — distinguishing normal nausea from hyperemesis gravidarum, causes, effects of dehydration and electrolyte imbalance, investigations, management and the midwife's supportive role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Hyperemesis gravidarum is severe, persistent nausea and vomiting in pregnancy that is so intense it causes dehydration, weight loss (classically more than 5% of body weight), electrolyte imbalance and ketosis. It is far more severe than the common 'morning sickness' of early pregnancy and usually needs medical treatment." },
      { h: "Normal nausea versus hyperemesis", list: [
        "Normal nausea/vomiting — mild, self-limiting, no dehydration; eases by the second trimester.",
        "Hyperemesis — repeated vomiting, unable to keep food or fluids down, weight loss, ketones in urine, signs of dehydration."
      ] },
      { h: "Causes and risk factors", list: [
        "High levels of pregnancy hormones (hCG and oestrogen).",
        "Multiple pregnancy and molar pregnancy (higher hCG).",
        "First pregnancy and previous hyperemesis.",
        "History of motion sickness or migraine.",
        "Psychological and social stress may contribute."
      ] },
      { h: "Effects of severe vomiting", list: [
        "Dehydration — dry mouth, reduced urine, fast pulse, low blood pressure.",
        "Electrolyte imbalance — low sodium, potassium and chloride.",
        "Ketosis and metabolic disturbance from starvation.",
        "Weight loss and nutritional deficiency; rarely vitamin B1 (thiamine) deficiency.",
        "Emotional distress, anxiety and low mood."
      ] },
      { h: "Investigations", list: [
        "Urinalysis — ketones (a key sign of starvation), specific gravity, infection.",
        "Blood tests — urea and electrolytes, full blood count.",
        "Ultrasound — confirm gestation, exclude multiple or molar pregnancy.",
        "Weight and fluid balance monitoring."
      ] },
      { h: "Management", list: [
        "Admit if dehydrated or unable to tolerate oral fluids.",
        "Intravenous fluids to correct dehydration and electrolytes.",
        "Anti-emetic drugs as prescribed.",
        "Thiamine and vitamin supplementation to prevent deficiency.",
        "Small, frequent, bland meals and fluids once tolerated; rest.",
        "Thromboprophylaxis may be considered due to dehydration and immobility."
      ] },
      { h: "Midwifery care and referral", p: "The midwife recognises when vomiting has crossed from normal to hyperemesis by testing urine for ketones, checking for weight loss and assessing hydration. She refers for medical review and admission when the woman is dehydrated or ketotic, keeps an accurate fluid-balance chart, offers frequent mouth care, provides a calm restful environment, and gives reassurance and emotional support. She teaches self-help measures (eating little and often, dry foods, ginger, avoiding triggers) and explains that the condition usually improves as pregnancy advances." },
      { h: "Health education", list: [
        "Reassure that hyperemesis usually settles by mid-pregnancy.",
        "Eat small, frequent, dry, bland snacks; avoid an empty stomach.",
        "Sip fluids often; identify and avoid trigger smells and foods.",
        "Report reduced urine, inability to keep fluids down, or fainting.",
        "Rest and seek help early — do not suffer in silence."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Define hyperemesis gravidarum and distinguish it from normal morning sickness.",
      "Describe the effects of hyperemesis gravidarum on the mother.",
      "Outline the investigations and management of hyperemesis gravidarum.",
      "Explain the midwife's role in caring for a woman with hyperemesis gravidarum.",
      "What health education would you give a woman with early-pregnancy nausea?"
    ],
    assessment: [
      { type: "mcq", q: "Hyperemesis gravidarum is best described as:", options: ["Mild morning sickness", "Severe vomiting causing dehydration and weight loss", "Vomiting only after meals", "Vomiting in the third trimester"], answer: 1, rationale: "Hyperemesis is severe persistent vomiting with dehydration, weight loss and ketosis." },
      { type: "mcq", q: "Which urine finding is a key sign of starvation in hyperemesis?", options: ["Glucose", "Protein", "Ketones", "Nitrites"], answer: 2, rationale: "Ketonuria indicates the body is breaking down fat because of inadequate intake." },
      { type: "mcq", q: "Hyperemesis is more common in which condition due to higher hCG?", options: ["Oligohydramnios", "Multiple or molar pregnancy", "Post-term pregnancy", "Breech presentation"], answer: 1, rationale: "Higher hCG in multiple and molar pregnancies increases the risk of hyperemesis." },
      { type: "mcq", q: "The classic weight-loss threshold used to define hyperemesis is more than:", options: ["1% of body weight", "5% of body weight", "20% of body weight", "50% of body weight"], answer: 1, rationale: "Loss of more than about 5% of pre-pregnancy weight is a classic marker of hyperemesis." },
      { type: "mcq", q: "The first-line treatment for a dehydrated woman with hyperemesis is:", options: ["Oral iron", "Intravenous fluids and electrolyte correction", "High-fat diet", "Immediate delivery"], answer: 1, rationale: "IV rehydration and electrolyte correction is the priority in dehydrated hyperemesis." },
      { type: "mcq", q: "Which vitamin is given to prevent deficiency in prolonged vomiting?", options: ["Vitamin C", "Vitamin D", "Thiamine (B1)", "Vitamin K"], answer: 2, rationale: "Thiamine replacement prevents neurological complications of prolonged vomiting." },
      { type: "mcq", q: "A key midwifery record for a woman with hyperemesis is the:", options: ["Partograph", "Fluid-balance chart", "Bishop score", "Apgar chart"], answer: 1, rationale: "Accurate fluid-balance charting monitors hydration and response to treatment." },
      { type: "mcq", q: "Which self-help measure is appropriate advice for early-pregnancy nausea?", options: ["Long fasting periods", "Small, frequent, dry meals", "Only large fatty meals", "Skipping breakfast"], answer: 1, rationale: "Eating little and often, with dry bland foods, helps reduce nausea." },
      { type: "mcq", q: "An important complication of dehydration and immobility in hyperemesis is:", options: ["Venous thromboembolism", "Macrosomia", "Polyhydramnios", "Hypertension of the newborn"], answer: 0, rationale: "Dehydration and reduced mobility increase the risk of thromboembolism." },
      { type: "mcq", q: "Compared with hyperemesis, normal nausea of pregnancy is:", options: ["Associated with ketosis", "Mild and self-limiting without dehydration", "Always needs admission", "Causes major weight loss"], answer: 1, rationale: "Normal nausea is mild, does not cause dehydration, and usually settles by the second trimester." }
      , { type: "fill", q: "The presence of ____ in the urine is an important sign of starvation in hyperemesis.", accept: ["ketones", "ketone", "ketonuria"], rationale: "Ketonuria reflects fat breakdown from inadequate intake." }
      , { type: "fill", q: "Severe vomiting in pregnancy causing dehydration and weight loss is called hyperemesis ____.", accept: ["gravidarum"], rationale: "The full term is hyperemesis gravidarum." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "cme-04-aph",
    unit: "Unit 2 · Bleeding & Hyperemesis in Pregnancy",
    title: "Antepartum Haemorrhage: Placenta Praevia & Abruptio Placentae",
    readMinutes: 19,
    summary: "Bleeding from the genital tract after 24 weeks and before birth — the two major causes (placenta praevia and abruptio placentae), their features, grading, complications, and the midwife's emergency role in assessment, resuscitation and safe referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Antepartum haemorrhage (APH) is bleeding from the genital tract after the 24th week of pregnancy (viability) and before the birth of the baby. It is an obstetric emergency because it threatens both mother and fetus, and blood loss may be much greater than what is seen externally (concealed bleeding)." },
      { h: "Causes", list: [
        "Placenta praevia — placenta lying wholly or partly in the lower uterine segment.",
        "Abruptio placentae (placental abruption) — premature separation of a normally sited placenta.",
        "Local causes — cervical polyp, cervical erosion, infection, trauma, show.",
        "Indeterminate / unclassified bleeding."
      ] },
      { h: "Placenta praevia", p: "In placenta praevia the placenta implants in the lower uterine segment, near or over the internal cervical os. As the lower segment forms and the cervix begins to change, the placenta partially separates, causing bleeding. The bleeding is classically painless, bright red, recurrent and unprovoked, and the uterus is soft and non-tender. Malpresentation and a high, non-engaged head are common. Vaginal examination must NOT be performed as it may provoke torrential haemorrhage." },
      { h: "Placenta praevia — grading", list: [
        "Grade I (low-lying) — placenta in lower segment but not reaching the os.",
        "Grade II (marginal) — placenta reaches the edge of the os.",
        "Grade III (partial) — placenta partly covers the os.",
        "Grade IV (complete/major) — placenta completely covers the os."
      ] },
      { h: "Abruptio placentae", p: "In placental abruption a normally situated placenta separates prematurely, and bleeding occurs behind the placenta (retroplacental). Bleeding may be revealed (seen vaginally), concealed (trapped behind the placenta), or mixed. Classic features are constant abdominal pain, a tense, hard, tender ('woody') uterus, dark bleeding that is less than the degree of shock, and fetal distress or absent fetal heart. Risk factors include hypertension/pre-eclampsia, trauma, previous abruption, and sudden uterine decompression.", figure: {
        caption: "Placenta praevia versus abruptio placentae — key contrasting features.",
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of placenta praevia and abruptio placentae."><rect x="20" y="15" width="250" height="200" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><rect x="290" y="15" width="250" height="200" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="145" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">Placenta praevia</text><text x="415" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#BE185D">Abruptio placentae</text><text x="35" y="70" font-family="sans-serif" font-size="11" fill="#831843">Pain: painless</text><text x="35" y="95" font-family="sans-serif" font-size="11" fill="#831843">Blood: bright red</text><text x="35" y="120" font-family="sans-serif" font-size="11" fill="#831843">Uterus: soft, relaxed</text><text x="35" y="145" font-family="sans-serif" font-size="11" fill="#831843">Bleeding: revealed</text><text x="35" y="170" font-family="sans-serif" font-size="11" fill="#831843">Fetus: usually alive</text><text x="35" y="195" font-family="sans-serif" font-size="11" fill="#831843">No PV exam</text><text x="305" y="70" font-family="sans-serif" font-size="11" fill="#7C2D12">Pain: constant, severe</text><text x="305" y="95" font-family="sans-serif" font-size="11" fill="#7C2D12">Blood: dark</text><text x="305" y="120" font-family="sans-serif" font-size="11" fill="#7C2D12">Uterus: hard, tender</text><text x="305" y="145" font-family="sans-serif" font-size="11" fill="#7C2D12">Bleeding: may be concealed</text><text x="305" y="170" font-family="sans-serif" font-size="11" fill="#7C2D12">Fetus: often distressed</text><text x="305" y="195" font-family="sans-serif" font-size="11" fill="#7C2D12">Shock &gt; visible loss</text></svg>'
      } },
      { h: "Complications", list: [
        "Maternal — hypovolaemic shock, disseminated intravascular coagulation (DIC), acute kidney injury, PPH, death.",
        "Couvelaire uterus (bruising of uterine muscle) in severe abruption.",
        "Fetal — hypoxia, intrauterine growth restriction, preterm birth, stillbirth.",
        "Recurrence in future pregnancies."
      ] },
      { h: "Assessment and investigations", list: [
        "Rapid assessment of blood loss and signs of shock; NO vaginal examination until praevia excluded.",
        "Gentle abdominal palpation — tone, tenderness, fetal lie and fetal heart.",
        "Full blood count, blood group and cross-match, clotting studies.",
        "Ultrasound to locate the placenta.",
        "Continuous fetal monitoring (CTG) where available."
      ] },
      { h: "Management principles", list: [
        "Treat shock — IV access (large-bore), fluids and blood as prescribed.",
        "Placenta praevia — conservative if minor and preterm; caesarean for major praevia or heavy bleeding.",
        "Abruption — often needs urgent birth (caesarean or vaginal) and correction of clotting.",
        "Anti-D for Rh-negative women; steroids for fetal lung maturity if preterm and time permits.",
        "Monitor urine output and clotting; anticipate PPH after birth."
      ] },
      { h: "Midwifery care and referral", p: "APH is an emergency. The midwife calls for help, positions the woman, gives high-flow oxygen, secures IV access, starts fluids, monitors vital signs and blood loss, checks the fetal heart, and arranges urgent transfer to a facility with theatre and blood. She must never perform a vaginal or rectal examination when placenta praevia is possible. She keeps the woman and family informed, provides reassurance, documents carefully, saves pads to estimate loss, and prepares for possible caesarean and neonatal resuscitation." }
    ],
    references: REF_CME,
    examQuestions: [
      "Define antepartum haemorrhage and list its causes.",
      "Compare and contrast placenta praevia and abruptio placentae.",
      "Describe the grading of placenta praevia.",
      "Discuss the emergency midwifery management of a woman with APH.",
      "What are the maternal and fetal complications of placental abruption?"
    ],
    assessment: [
      { type: "mcq", q: "Antepartum haemorrhage is genital-tract bleeding after which gestation?", options: ["12 weeks", "20 weeks", "24 weeks", "37 weeks"], answer: 2, rationale: "APH is bleeding after 24 weeks (viability) and before birth." },
      { type: "mcq", q: "The classic bleeding of placenta praevia is:", options: ["Painful and dark", "Painless, bright red and recurrent", "Only after trauma", "Always concealed"], answer: 1, rationale: "Placenta praevia typically causes painless, bright red, recurrent bleeding." },
      { type: "mcq", q: "Which examination must be AVOIDED when placenta praevia is suspected?", options: ["Abdominal palpation", "Vaginal (PV) examination", "Blood pressure check", "Urinalysis"], answer: 1, rationale: "A PV examination may provoke catastrophic haemorrhage in praevia." },
      { type: "mcq", q: "A tense, hard, tender 'woody' uterus with constant pain suggests:", options: ["Placenta praevia", "Abruptio placentae", "Cervical polyp", "Normal labour"], answer: 1, rationale: "A rigid, tender uterus with constant pain is characteristic of abruption." },
      { type: "mcq", q: "In placenta praevia grade IV, the placenta:", options: ["Is in the upper segment", "Reaches the edge of the os", "Partly covers the os", "Completely covers the internal os"], answer: 3, rationale: "Grade IV (complete/major) praevia fully covers the internal cervical os." },
      { type: "mcq", q: "In placental abruption, shock is often:", options: ["Less than expected from visible blood", "Greater than expected from visible blood", "Absent always", "Only after delivery"], answer: 1, rationale: "Concealed retroplacental bleeding means shock can exceed the visible loss." },
      { type: "mcq", q: "A serious clotting complication of severe abruption is:", options: ["Polycythaemia", "Disseminated intravascular coagulation (DIC)", "Thrombocytosis", "Leukaemia"], answer: 1, rationale: "Massive abruption can trigger DIC, a life-threatening coagulopathy." },
      { type: "mcq", q: "The FIRST priority in managing a woman with heavy APH is to:", options: ["Perform a vaginal examination", "Treat shock with IV access, fluids and blood", "Send her home to rest", "Give oral iron"], answer: 1, rationale: "Resuscitation — restoring circulating volume — takes priority in heavy APH." },
      { type: "mcq", q: "Bruising of the uterine muscle in severe abruption is called a:", options: ["Bandl's ring", "Couvelaire uterus", "Retraction ring", "Braxton Hicks uterus"], answer: 1, rationale: "A Couvelaire uterus is myometrial bleeding seen in severe abruption." },
      { type: "mcq", q: "Which condition is a major risk factor for placental abruption?", options: ["Hypertension / pre-eclampsia", "Iron supplementation", "Left-lateral position", "Adequate hydration"], answer: 0, rationale: "Hypertensive disorders strongly predispose to placental abruption." }
      , { type: "fill", q: "A placenta implanted in the lower uterine segment near or over the os is called placenta ____.", accept: ["praevia", "previa"], rationale: "Placenta praevia lies in the lower segment." }
      , { type: "fill", q: "Premature separation of a normally situated placenta is called abruptio ____.", accept: ["placentae", "placenta"], rationale: "Abruptio placentae is premature placental separation." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "cme-05-hypertensive-disorders",
    unit: "Unit 3 · Medical & Systemic Disorders in Pregnancy",
    title: "Hypertensive Disorders of Pregnancy: Pre-eclampsia & Eclampsia",
    readMinutes: 20,
    summary: "Classification of hypertension in pregnancy, pathophysiology and features of pre-eclampsia, warning signs of impending eclampsia, eclamptic fit management, magnesium sulphate therapy, and the midwife's key role in detection and emergency care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept and definition", p: "Hypertension in pregnancy is a blood pressure of at least 140/90 mmHg. Hypertensive disorders are among the leading causes of maternal and perinatal death worldwide, yet many complications are preventable through good antenatal surveillance. The midwife's routine checks of blood pressure and urine are central to early detection." },
      { h: "Classification", list: [
        "Chronic (pre-existing) hypertension — present before pregnancy or before 20 weeks.",
        "Gestational hypertension — new hypertension after 20 weeks without proteinuria.",
        "Pre-eclampsia — hypertension after 20 weeks with proteinuria and/or organ involvement.",
        "Eclampsia — pre-eclampsia complicated by convulsions (fits).",
        "Chronic hypertension with superimposed pre-eclampsia."
      ] },
      { h: "Pathophysiology (brief)", p: "Pre-eclampsia is thought to arise from abnormal development of the placental blood supply, leading to widespread blood-vessel damage and vasospasm, leaky capillaries and reduced blood flow to organs. This produces the raised blood pressure, protein leakage into urine, oedema, and, in severe cases, damage to the brain, liver, kidneys and clotting system." },
      { h: "Clinical features", list: [
        "Hypertension — BP at least 140/90 mmHg (severe if at least 160/110).",
        "Proteinuria — protein in the urine.",
        "Oedema — face, hands, and rapid weight gain (not sufficient alone).",
        "Severe features (warning signs): severe headache, blurred vision/flashing lights, epigastric or right-upper-quadrant pain, vomiting, brisk reflexes and clonus, and reduced urine output."
      ] },
      { h: "Investigations", list: [
        "Blood pressure (correct technique) and urinalysis for protein at every visit.",
        "Blood tests — full blood count, platelets, liver and kidney function, uric acid.",
        "Assessment of fetal wellbeing — growth scan, CTG, liquor volume.",
        "Watch for HELLP syndrome (Haemolysis, Elevated Liver enzymes, Low Platelets)."
      ] },
      { h: "Management of pre-eclampsia", list: [
        "Regular monitoring of BP, urine, reflexes, symptoms and fetal wellbeing.",
        "Antihypertensive drugs to control blood pressure as prescribed.",
        "Corticosteroids for fetal lung maturity if preterm birth is likely.",
        "Magnesium sulphate to prevent/treat convulsions in severe cases.",
        "Birth is the only cure — timing balances maternal and fetal condition."
      ] },
      { h: "Eclampsia and its emergency management", p: "Eclampsia is the occurrence of one or more convulsions on the background of pre-eclampsia. It is a life-threatening emergency. Immediate care: call for help; protect the airway and prevent injury; place the woman in the recovery (left-lateral) position; give oxygen; do NOT restrain or put anything in the mouth; secure IV access; and give magnesium sulphate as the drug of choice to control and prevent further fits. Control blood pressure, monitor the fetus, and plan birth once the mother is stabilised.", figure: {
        caption: "Magnesium sulphate — key safety points in eclampsia care.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Magnesium sulphate monitoring and antidote box."><rect x="20" y="15" width="520" height="180" rx="12" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="280" y="42" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#831843">MAGNESIUM SULPHATE (MgSO4)</text><text x="45" y="72" font-family="sans-serif" font-size="12" fill="#7C2D12">Drug of choice to prevent and treat eclamptic fits</text><text x="45" y="100" font-family="sans-serif" font-size="12" fill="#7C2D12">Monitor for toxicity every hour:</text><text x="65" y="122" font-family="sans-serif" font-size="11" fill="#831843">• Respiratory rate (at least 12–16/min)</text><text x="65" y="142" font-family="sans-serif" font-size="11" fill="#831843">• Deep tendon (knee) reflexes present</text><text x="65" y="162" font-family="sans-serif" font-size="11" fill="#831843">• Urine output adequate (at least 30 mL/hr)</text><rect x="330" y="95" width="195" height="80" rx="8" fill="#15803D"/><text x="427" y="122" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">ANTIDOTE</text><text x="427" y="146" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FFFFFF">Calcium gluconate</text><text x="427" y="164" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FFFFFF">give if signs of toxicity</text></svg>'
      } },
      { h: "Magnesium sulphate — monitoring and antidote", p: "Magnesium sulphate (MgSO4) is the drug of choice to prevent and control eclamptic convulsions. Because it can accumulate and cause toxicity, the midwife monitors, at least hourly, the respiratory rate, the deep-tendon (knee) reflexes and the urine output. Warning signs of toxicity are loss of reflexes, slow breathing (respiratory depression) and reduced urine output. The antidote is calcium gluconate, which must be immediately available whenever MgSO4 is given." },
      { h: "Midwifery care and referral", p: "The midwife detects hypertensive disorders early through careful BP measurement and urine testing at every antenatal contact, and refers any woman with a BP of 140/90 or more, proteinuria, or warning symptoms. In severe pre-eclampsia or eclampsia she initiates emergency care (airway, position, oxygen, MgSO4 as directed), controls blood pressure, keeps a strict fluid-balance chart, watches for toxicity, and arranges urgent referral to a facility able to deliver the baby and manage complications. She provides calm reassurance and clear health education about danger signs." }
    ],
    references: REF_CME,
    examQuestions: [
      "Classify the hypertensive disorders of pregnancy.",
      "Describe the clinical features and warning signs of severe pre-eclampsia.",
      "Outline the emergency management of an eclamptic fit.",
      "Explain the use and monitoring of magnesium sulphate, including its antidote.",
      "Discuss the midwife's role in the detection and management of pre-eclampsia."
    ],
    assessment: [
      { type: "mcq", q: "Hypertension in pregnancy is defined as a blood pressure of at least:", options: ["120/80 mmHg", "130/85 mmHg", "140/90 mmHg", "160/110 mmHg"], answer: 2, rationale: "The threshold for hypertension in pregnancy is 140/90 mmHg." },
      { type: "mcq", q: "Pre-eclampsia is distinguished from gestational hypertension by the presence of:", options: ["Oedema alone", "Proteinuria and/or organ involvement", "A single high reading", "Fetal movements"], answer: 1, rationale: "Pre-eclampsia adds proteinuria and/or organ dysfunction to hypertension after 20 weeks." },
      { type: "mcq", q: "Eclampsia is pre-eclampsia complicated by:", options: ["Anaemia", "Convulsions (fits)", "Twins", "Glycosuria"], answer: 1, rationale: "Eclampsia is the occurrence of seizures in a woman with pre-eclampsia." },
      { type: "mcq", q: "Which is a warning sign of impending eclampsia?", options: ["Mild backache", "Severe headache with visual disturbance and epigastric pain", "Leg cramps", "Increased appetite"], answer: 1, rationale: "Severe headache, visual changes and epigastric pain warn of severe pre-eclampsia." },
      { type: "mcq", q: "The drug of choice to prevent and control eclamptic convulsions is:", options: ["Diazepam", "Magnesium sulphate", "Oxytocin", "Paracetamol"], answer: 1, rationale: "Magnesium sulphate is the recommended anticonvulsant for eclampsia." },
      { type: "mcq", q: "The antidote for magnesium sulphate toxicity is:", options: ["Vitamin K", "Calcium gluconate", "Naloxone", "Atropine"], answer: 1, rationale: "Calcium gluconate reverses magnesium toxicity and must be available." },
      { type: "mcq", q: "Which is NOT routinely monitored to detect magnesium sulphate toxicity?", options: ["Respiratory rate", "Deep-tendon reflexes", "Urine output", "Fundal height"], answer: 3, rationale: "Toxicity is monitored by respiration, reflexes and urine output — not fundal height." },
      { type: "mcq", q: "During an eclamptic fit, the midwife should:", options: ["Restrain the woman firmly", "Insert a spoon in the mouth", "Protect from injury, position on the side and give oxygen", "Leave her alone until it stops"], answer: 2, rationale: "Airway protection, left-lateral position and oxygen are the priorities; never restrain or force the mouth." },
      { type: "mcq", q: "HELLP syndrome includes haemolysis, low platelets and:", options: ["Elevated liver enzymes", "High blood glucose", "Elevated white cells", "Low sodium"], answer: 0, rationale: "HELLP = Haemolysis, Elevated Liver enzymes, Low Platelets." },
      { type: "mcq", q: "The definitive cure for pre-eclampsia is:", options: ["Bed rest", "Birth of the baby and placenta", "Iron therapy", "Salt restriction"], answer: 1, rationale: "Delivery of the baby and placenta is the only cure for pre-eclampsia." }
      , { type: "fill", q: "The antidote for magnesium sulphate toxicity is calcium ____.", accept: ["gluconate"], rationale: "Calcium gluconate reverses magnesium toxicity." }
      , { type: "fill", q: "Pre-eclampsia complicated by convulsions is called ____.", accept: ["eclampsia"], rationale: "Eclampsia is defined by convulsions on a background of pre-eclampsia." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "cme-06-anaemia",
    unit: "Unit 3 · Medical & Systemic Disorders in Pregnancy",
    title: "Anaemia in Pregnancy",
    readMinutes: 17,
    summary: "The commonest medical disorder of pregnancy — definition and grading, iron-deficiency and other types, causes and physiological changes, effects on mother and fetus, investigations, treatment and the midwife's preventive role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and grading", p: "Anaemia in pregnancy is a haemoglobin (Hb) concentration below the accepted threshold for pregnancy (commonly taken as below 11 g/dL). It is the most common medical disorder of pregnancy, especially in low-resource settings, and it contributes to maternal and perinatal death, mainly by reducing the woman's reserve to withstand haemorrhage. Anaemia is graded as mild, moderate or severe according to the Hb level, with severe anaemia being a major danger." },
      { h: "Physiological anaemia of pregnancy", p: "In normal pregnancy the plasma (fluid) volume increases more than the red-cell mass, so the blood becomes more dilute and the Hb falls slightly. This 'physiological' or dilutional fall is normal and must be distinguished from true anaemia caused by a lack of iron or other nutrients." },
      { h: "Types and causes", list: [
        "Iron-deficiency anaemia — by far the commonest; poor diet, increased demand, poor absorption, repeated pregnancies.",
        "Folate (folic acid) deficiency — megaloblastic anaemia.",
        "Vitamin B12 deficiency.",
        "Anaemia from blood loss — bleeding, hookworm, malaria.",
        "Haemolytic and inherited anaemias — thalassaemia, sickle-cell disease."
      ] },
      { h: "Effects on the mother", list: [
        "Tiredness, breathlessness, palpitations, dizziness, pallor.",
        "Reduced resistance to infection and poor wound healing.",
        "Poor tolerance of even normal blood loss at birth.",
        "Increased risk of heart failure in severe anaemia.",
        "Higher risk of postpartum haemorrhage complications and death."
      ] },
      { h: "Effects on the fetus and newborn", list: [
        "Intrauterine growth restriction and low birth weight.",
        "Preterm birth.",
        "Increased perinatal mortality.",
        "Reduced iron stores in the newborn."
      ] },
      { h: "Investigations", list: [
        "Haemoglobin estimation (routine at booking and later pregnancy).",
        "Full blood count and blood film (to show the type of anaemia).",
        "Serum ferritin / iron studies for iron deficiency.",
        "Screening for malaria, hookworm and haemoglobinopathies where relevant."
      ] },
      { h: "Management", list: [
        "Prevention and treatment with oral iron and folic acid supplementation.",
        "Dietary advice — iron-rich foods with vitamin C to aid absorption.",
        "Treat the underlying cause (deworming, antimalarials as indicated).",
        "Parenteral iron if oral iron is not tolerated or absorption is poor.",
        "Blood transfusion only for severe anaemia near term or with symptoms, as prescribed."
      ] },
      { h: "Midwifery care and referral", p: "The midwife checks haemoglobin routinely, gives and explains iron-folate prophylaxis, and teaches good nutrition. She recognises when anaemia is moderate or severe and refers for investigation and treatment, giving special attention to women near term because severe anaemia greatly increases the danger of haemorrhage at birth. During labour she anticipates and actively prevents PPH, ensures cross-matched blood is available for severe cases, and continues iron therapy in the postnatal period." },
      { h: "Prevention and health education", list: [
        "Routine iron and folic acid supplementation in pregnancy.",
        "Eat iron-rich foods (green leafy vegetables, pulses, meat, eggs) with vitamin-C foods.",
        "Avoid tea/coffee with meals as they reduce iron absorption.",
        "Deworming and malaria prevention where endemic.",
        "Adequate birth spacing to allow iron stores to recover."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Define anaemia in pregnancy and explain physiological anaemia.",
      "List the causes and types of anaemia in pregnancy.",
      "Describe the effects of anaemia on the mother and the fetus.",
      "Outline the management and prevention of iron-deficiency anaemia in pregnancy.",
      "Explain the midwife's role in preventing and managing anaemia."
    ],
    assessment: [
      { type: "mcq", q: "Anaemia in pregnancy is commonly defined as a haemoglobin below:", options: ["7 g/dL", "9 g/dL", "11 g/dL", "13 g/dL"], answer: 2, rationale: "A haemoglobin below 11 g/dL is the common threshold for anaemia in pregnancy." },
      { type: "mcq", q: "The commonest type of anaemia in pregnancy is:", options: ["Folate deficiency", "Iron-deficiency anaemia", "Sickle-cell anaemia", "Aplastic anaemia"], answer: 1, rationale: "Iron-deficiency anaemia is by far the most common in pregnancy." },
      { type: "mcq", q: "Physiological anaemia of pregnancy is due to:", options: ["Blood loss", "Plasma volume rising more than red-cell mass", "Iron overload", "Infection"], answer: 1, rationale: "Greater plasma expansion than red-cell increase dilutes the haemoglobin." },
      { type: "mcq", q: "Deficiency of which vitamin causes megaloblastic anaemia in pregnancy?", options: ["Vitamin C", "Folic acid", "Vitamin K", "Vitamin D"], answer: 1, rationale: "Folate (folic acid) deficiency produces megaloblastic anaemia." },
      { type: "mcq", q: "The main danger of severe anaemia at birth is that the woman:", options: ["Cannot breastfeed", "Tolerates blood loss poorly and may develop heart failure or die", "Will have a large baby", "Will not go into labour"], answer: 1, rationale: "Anaemia reduces reserve, so even normal blood loss can be dangerous or fatal." },
      { type: "mcq", q: "Which food helps improve absorption of dietary iron?", options: ["Tea", "Coffee", "Vitamin-C-rich foods", "Milk"], answer: 2, rationale: "Vitamin C enhances iron absorption; tea and coffee reduce it." },
      { type: "mcq", q: "A fetal effect of maternal anaemia is:", options: ["Macrosomia", "Low birth weight and preterm birth", "Post-term pregnancy", "Polycythaemia"], answer: 1, rationale: "Maternal anaemia is linked to growth restriction, low birth weight and prematurity." },
      { type: "mcq", q: "First-line prevention and treatment of iron-deficiency anaemia is:", options: ["Blood transfusion", "Oral iron and folic acid with dietary advice", "Bed rest only", "Vitamin K"], answer: 1, rationale: "Oral iron-folate supplementation plus nutrition is first-line management." },
      { type: "mcq", q: "Blood transfusion for anaemia in pregnancy is generally reserved for:", options: ["All pregnant women", "Mild anaemia at booking", "Severe symptomatic anaemia near term", "Physiological anaemia"], answer: 2, rationale: "Transfusion is used for severe or symptomatic anaemia, especially near term." },
      { type: "mcq", q: "Which is a preventive measure for anaemia in endemic areas?", options: ["Avoiding all iron", "Deworming and malaria prevention", "Frequent pregnancies", "Skipping antenatal care"], answer: 1, rationale: "Controlling hookworm and malaria prevents blood loss and anaemia." }
      , { type: "fill", q: "The commonest type of anaemia in pregnancy is ____-deficiency anaemia.", accept: ["iron"], rationale: "Iron deficiency is the leading cause." }
      , { type: "fill", q: "Routine supplementation to prevent anaemia in pregnancy uses iron and ____ acid.", accept: ["folic", "folate"], rationale: "Iron and folic acid are given together for prophylaxis." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "cme-07-diabetes",
    unit: "Unit 3 · Medical & Systemic Disorders in Pregnancy",
    title: "Diabetes in Pregnancy: Gestational & Pre-existing",
    readMinutes: 19,
    summary: "Gestational and pre-existing diabetes — definitions, pathophysiology, risk factors, screening and diagnosis, effects on mother and baby, management across pregnancy, birth and postpartum, and the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "Diabetes in pregnancy may be pre-existing (type 1 or type 2 diabetes present before pregnancy) or gestational diabetes mellitus (GDM) — carbohydrate intolerance first recognised during pregnancy. Both raise blood glucose, which crosses the placenta and affects the fetus. GDM usually resolves after birth but marks a lifelong risk of developing type 2 diabetes." },
      { h: "Pathophysiology (brief)", p: "Pregnancy is naturally 'diabetogenic': placental hormones make the mother's tissues more resistant to insulin so that more glucose is available for the fetus. If the pancreas cannot make enough extra insulin to overcome this resistance, blood glucose rises and gestational diabetes develops. Excess maternal glucose crosses to the fetus, which responds by producing more insulin and growing large (macrosomia)." },
      { h: "Risk factors", list: [
        "Previous gestational diabetes or a previous large baby (macrosomia).",
        "Family history of diabetes.",
        "Obesity / high BMI.",
        "Advanced maternal age.",
        "Previous unexplained stillbirth.",
        "Polyhydramnios or glycosuria in the current pregnancy.",
        "Certain ethnic backgrounds (including South Asian)."
      ] },
      { h: "Screening and diagnosis", list: [
        "Screening of at-risk women (and, in many settings, all women).",
        "Oral glucose tolerance test (OGTT) — the standard diagnostic test.",
        "Fasting and random blood glucose measurements.",
        "Urine testing for glucose (glycosuria) — a screening prompt, not diagnostic."
      ] },
      { h: "Effects on the mother", list: [
        "Increased risk of pre-eclampsia and infection (urinary, wound).",
        "Polyhydramnios.",
        "Higher rates of induction, instrumental birth and caesarean.",
        "Increased risk of obstructed labour (large baby) and PPH.",
        "Future risk of type 2 diabetes."
      ] },
      { h: "Effects on the fetus and newborn", list: [
        "Macrosomia (large baby) with risk of shoulder dystocia and birth injury.",
        "Congenital abnormalities (higher with poorly controlled pre-existing diabetes).",
        "Polyhydramnios and preterm birth.",
        "Neonatal hypoglycaemia, jaundice and respiratory distress.",
        "Increased risk of stillbirth if control is poor."
      ] },
      { h: "Management across the childbearing journey", list: [
        "Preconception and early control (especially in pre-existing diabetes) with high-dose folic acid.",
        "Diet and exercise are the first-line treatment for GDM.",
        "Blood glucose monitoring to keep levels within target.",
        "Insulin (or approved oral agents) when diet alone is not enough.",
        "Serial growth and wellbeing surveillance; planned timing of birth.",
        "Careful intrapartum glucose control; anticipate shoulder dystocia and neonatal hypoglycaemia.",
        "Postpartum: glucose normally falls (GDM); breastfeeding encouraged; check for persistent diabetes."
      ] },
      { h: "Midwifery care and referral", p: "The midwife identifies risk factors at booking, arranges screening, and supports the woman with diet, exercise and glucose monitoring. She refers women with diabetes to consultant-led (shared) care while continuing midwifery support. During labour she monitors maternal glucose and fetal wellbeing, prepares for a large baby and possible shoulder dystocia, and after birth watches the newborn closely for hypoglycaemia (early feeding and blood-sugar checks). She promotes breastfeeding and gives advice on future health, weight and diabetes prevention." }
    ],
    references: REF_CME,
    examQuestions: [
      "Define gestational diabetes and distinguish it from pre-existing diabetes.",
      "Explain why pregnancy is described as 'diabetogenic'.",
      "List the risk factors for and methods of screening for gestational diabetes.",
      "Describe the effects of maternal diabetes on the fetus and newborn.",
      "Discuss the midwife's role in caring for a woman with diabetes in pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "Gestational diabetes mellitus is:", options: ["Diabetes present before pregnancy", "Carbohydrate intolerance first recognised in pregnancy", "A newborn condition", "Only type 1 diabetes"], answer: 1, rationale: "GDM is glucose intolerance first detected during pregnancy." },
      { type: "mcq", q: "The standard diagnostic test for gestational diabetes is the:", options: ["Full blood count", "Oral glucose tolerance test (OGTT)", "Ultrasound scan", "Urine culture"], answer: 1, rationale: "The OGTT is the standard test to diagnose gestational diabetes." },
      { type: "mcq", q: "Excess maternal glucose typically causes the fetus to become:", options: ["Growth-restricted", "Macrosomic (large)", "Anaemic", "Preterm only"], answer: 1, rationale: "Fetal hyperinsulinaemia from excess glucose leads to macrosomia." },
      { type: "mcq", q: "A large baby from maternal diabetes increases the risk of which intrapartum emergency?", options: ["Cord presentation", "Shoulder dystocia", "Placenta praevia", "Amniotic fluid embolism"], answer: 1, rationale: "Macrosomia predisposes to shoulder dystocia during birth." },
      { type: "mcq", q: "Which is the first-line treatment for gestational diabetes?", options: ["Insulin immediately", "Diet and exercise", "Caesarean section", "Blood transfusion"], answer: 1, rationale: "Diet and exercise are first-line; insulin is added if targets are not met." },
      { type: "mcq", q: "A common neonatal complication after maternal diabetes is:", options: ["Hyperglycaemia", "Neonatal hypoglycaemia", "Polycythaemia only", "Hypertension"], answer: 1, rationale: "The baby's high insulin levels cause hypoglycaemia after the cord is cut." },
      { type: "mcq", q: "Pregnancy is called 'diabetogenic' because placental hormones cause:", options: ["Increased insulin sensitivity", "Insulin resistance", "Loss of the pancreas", "Reduced glucose"], answer: 1, rationale: "Placental hormones increase insulin resistance, raising glucose demand." },
      { type: "mcq", q: "Which is a maternal risk factor for gestational diabetes?", options: ["Low BMI", "Previous macrosomic baby", "Young age", "First pregnancy only"], answer: 1, rationale: "A previous large baby is a recognised risk factor for GDM." },
      { type: "mcq", q: "In pre-existing diabetes, good control is especially important before and in early pregnancy to reduce:", options: ["Congenital abnormalities", "Twin pregnancy", "Anaemia", "Hyperemesis"], answer: 0, rationale: "Poor early glucose control raises the risk of congenital malformation." },
      { type: "mcq", q: "After birth in gestational diabetes, the mother should be advised that she:", options: ["Can never breastfeed", "Has a future risk of type 2 diabetes", "Is cured permanently with no follow-up", "Must stay on insulin for life"], answer: 1, rationale: "GDM usually resolves but signals a lifelong risk of type 2 diabetes." }
      , { type: "fill", q: "Excess maternal glucose causes the fetus to grow large, a condition called ____.", accept: ["macrosomia"], rationale: "Fetal overgrowth from hyperinsulinaemia is macrosomia." }
      , { type: "fill", q: "The standard diagnostic test for gestational diabetes is the oral ____ tolerance test.", accept: ["glucose"], rationale: "The OGTT is the oral glucose tolerance test." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "cme-08-medical-disorders",
    unit: "Unit 3 · Medical & Systemic Disorders in Pregnancy",
    title: "Medical Disorders in Pregnancy: Cardiac Disease & Infections (Hepatitis, HIV)",
    readMinutes: 19,
    summary: "Pre-existing and pregnancy-related medical conditions — cardiac disease and its effect on the childbearing woman, and important infections including hepatitis B, HIV and other perinatal infections — with management principles and the midwife's role in prevention of mother-to-child transmission.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept", p: "Some women enter pregnancy with pre-existing medical conditions, and some acquire infections during pregnancy, that increase risk for mother and baby. Pregnancy places extra demands on the body (especially the heart and immune system), so conditions that were stable can worsen. The midwife works within shared (consultant-led) care, providing continuity, education and vigilance." },
      { h: "Cardiac disease in pregnancy", p: "The normal cardiovascular changes of pregnancy — a large rise in blood volume and cardiac output — greatly increase the workload of the heart. In a woman with heart disease this can precipitate heart failure, most dangerously around late pregnancy, during labour and in the early postpartum period when fluid shifts are greatest. Care aims to reduce cardiac workload." },
      { h: "Cardiac disease — management principles", list: [
        "Shared care with a cardiologist and obstetrician; assess functional severity.",
        "Prevent and treat anaemia and infection (both stress the heart).",
        "Adequate rest; avoid excessive weight gain and fluid overload.",
        "In labour: nurse in an upright/propped position, provide effective pain relief, limit pushing, monitor closely.",
        "Watch closely in the third stage and early postpartum for heart failure.",
        "Antibiotic prophylaxis and thromboprophylaxis as prescribed."
      ] },
      { h: "Infections in pregnancy — overview", p: "Infections can harm the fetus by crossing the placenta, during birth, or through breastfeeding. Key perinatal infections include hepatitis B, HIV, syphilis, rubella, and the TORCH group (toxoplasmosis, others, rubella, cytomegalovirus, herpes). Routine antenatal screening allows early treatment and steps to prevent mother-to-child transmission." },
      { h: "Hepatitis B in pregnancy", list: [
        "A viral infection of the liver, transmitted through blood and body fluids.",
        "Can be passed to the baby mainly at birth (vertical transmission).",
        "Screened for at booking.",
        "Prevention of transmission: give the newborn hepatitis B vaccine (and immunoglobulin where indicated) soon after birth.",
        "Breastfeeding is generally supported once the baby is immunised."
      ] },
      { h: "HIV in pregnancy and PMTCT", p: "HIV can be transmitted from mother to child during pregnancy, at birth, and through breastfeeding. Prevention of mother-to-child transmission (PMTCT) is highly effective and involves: antenatal HIV testing with counselling; antiretroviral therapy for the mother; safe birth practices; antiretroviral treatment for the newborn; and infant feeding counselling. With good management the risk of passing HIV to the baby becomes very low. Universal (standard) precautions protect staff and prevent infection spread.", figure: {
        caption: "PMTCT — the four elements of preventing mother-to-child transmission of HIV.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four elements of prevention of mother to child transmission of HIV."><rect x="15" y="60" width="125" height="80" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="77" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Test &amp;</text><text x="77" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">counsel</text><rect x="155" y="60" width="125" height="80" rx="9" fill="#F9A8D4" stroke="#831843" stroke-width="2"/><text x="217" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Maternal</text><text x="217" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">ART</text><rect x="295" y="60" width="125" height="80" rx="9" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="357" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">Safe</text><text x="357" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">birth</text><rect x="435" y="60" width="110" height="80" rx="9" fill="#831843" stroke="#831843" stroke-width="2"/><text x="490" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">Infant ART</text><text x="490" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">&amp; feeding</text></svg>'
      } },
      { h: "Other important infections", list: [
        "Syphilis — screened and treated in pregnancy to prevent congenital syphilis.",
        "Rubella — can cause serious fetal abnormality if caught in early pregnancy (prevented by vaccination before pregnancy).",
        "Urinary tract infection — common; treat to prevent preterm labour.",
        "Malaria — dangerous in pregnancy; prevention and prompt treatment in endemic areas.",
        "Group B streptococcus — can cause serious newborn infection."
      ] },
      { h: "Midwifery care and referral", p: "The midwife offers and explains routine antenatal screening, gives non-judgemental counselling and support, and refers women with cardiac disease or serious infection for specialist shared care while maintaining continuity. She practises standard (universal) precautions at all times, ensures newborn immunisation and antiretroviral treatment where indicated, supports informed infant-feeding choices, and educates the family about danger signs, hygiene and follow-up. Confidentiality and respect are essential." }
    ],
    references: REF_CME,
    examQuestions: [
      "Explain why cardiac disease is dangerous in pregnancy and outline its management.",
      "Describe the prevention of mother-to-child transmission of HIV (PMTCT).",
      "How is hepatitis B transmission to the newborn prevented?",
      "List important perinatal infections and their significance.",
      "Discuss the midwife's role in caring for women with medical disorders and infections."
    ],
    assessment: [
      { type: "mcq", q: "The most dangerous times for heart failure in a woman with cardiac disease are:", options: ["Only in the first trimester", "Late pregnancy, labour and early postpartum", "Only before conception", "Only during breastfeeding"], answer: 1, rationale: "The greatest cardiac demands and fluid shifts occur in late pregnancy, labour and the early puerperium." },
      { type: "mcq", q: "A key aim in caring for a pregnant woman with heart disease is to:", options: ["Increase her workload", "Reduce cardiac workload and prevent anaemia and infection", "Encourage rapid weight gain", "Avoid all rest"], answer: 1, rationale: "Reducing cardiac strain and treating anaemia and infection protect the heart." },
      { type: "mcq", q: "Hepatitis B is mainly transmitted to the baby:", options: ["Before conception", "Through the placenta in early pregnancy", "At the time of birth", "Only through food"], answer: 2, rationale: "Vertical transmission of hepatitis B occurs mainly at birth." },
      { type: "mcq", q: "Transmission of hepatitis B to the newborn is prevented by:", options: ["Avoiding all contact with the baby", "Newborn hepatitis B vaccine (and immunoglobulin where indicated)", "Withholding all feeds", "Immediate caesarean only"], answer: 1, rationale: "Timely newborn vaccination (plus immunoglobulin when indicated) prevents transmission." },
      { type: "mcq", q: "PMTCT stands for prevention of:", options: ["Preterm maternal transfer of care", "Mother-to-child transmission", "Postpartum mental trauma care", "Placental membrane tissue culture"], answer: 1, rationale: "PMTCT = prevention of mother-to-child transmission (of HIV)." },
      { type: "mcq", q: "Which is NOT one of the routes of mother-to-child HIV transmission?", options: ["During pregnancy", "During birth", "Through breastfeeding", "Through eye contact"], answer: 3, rationale: "HIV passes in pregnancy, at birth or via breast milk — not by casual contact." },
      { type: "mcq", q: "Standard (universal) precautions are used to:", options: ["Diagnose diabetes", "Prevent transmission of blood-borne infections", "Induce labour", "Treat anaemia"], answer: 1, rationale: "Standard precautions protect staff and prevent spread of blood-borne infection." },
      { type: "mcq", q: "Rubella infection is most dangerous to the fetus when caught in:", options: ["Early pregnancy", "The postnatal period", "Labour only", "The second stage"], answer: 0, rationale: "Early-pregnancy rubella can cause serious congenital defects." },
      { type: "mcq", q: "Untreated urinary tract infection in pregnancy can lead to:", options: ["Post-term pregnancy", "Preterm labour", "Macrosomia", "Twin pregnancy"], answer: 1, rationale: "UTI is associated with preterm labour, so it should be treated promptly." },
      { type: "mcq", q: "For a woman living with HIV on effective treatment, a core midwifery duty is to:", options: ["Disclose her status to visitors", "Maintain confidentiality and provide non-judgemental care", "Refuse to care for her", "Stop all medication"], answer: 1, rationale: "Confidential, respectful, non-judgemental care is an ethical and professional duty." }
      , { type: "fill", q: "Prevention of mother-to-child transmission of HIV is abbreviated as ____.", accept: ["PMTCT", "pmtct"], rationale: "PMTCT covers testing, maternal ART, safe birth and infant treatment/feeding." }
      , { type: "fill", q: "In a woman with heart disease, the aim of care is to reduce the ____ workload.", accept: ["cardiac", "heart"], rationale: "Reducing cardiac workload prevents heart failure." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "cme-09-multiple-pregnancy",
    unit: "Unit 4 · Complications of Late Pregnancy & the Fetus",
    title: "Multiple Pregnancy",
    readMinutes: 17,
    summary: "Twin and higher-order pregnancy — types (dizygotic and monozygotic), diagnosis, complications for mother and babies, antenatal and intrapartum management, and the midwife's role in these higher-risk births.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and types", p: "A multiple pregnancy is the presence of more than one fetus in the uterus (twins, triplets or more). Twins are either dizygotic (non-identical) — from two eggs fertilised by two sperm, each with its own placenta and membranes — or monozygotic (identical) — from a single fertilised egg that divides, which may share a placenta. Monozygotic twins carry higher risks, including twin-to-twin transfusion syndrome." },
      { h: "Diagnosis", list: [
        "Uterus larger than expected for dates.",
        "Multiple fetal parts and more than one fetal heartbeat on examination.",
        "Excessive nausea/vomiting and marked pregnancy symptoms.",
        "Ultrasound scan — the definitive method, also determining chorionicity."
      ] },
      { h: "Maternal complications", list: [
        "Exaggerated pregnancy symptoms and hyperemesis.",
        "Anaemia (greater iron and folate demand).",
        "Pre-eclampsia and polyhydramnios.",
        "Preterm labour and birth.",
        "Malpresentation, cord prolapse, and postpartum haemorrhage (over-distended uterus).",
        "Higher rates of operative and assisted birth."
      ] },
      { h: "Fetal and neonatal complications", list: [
        "Prematurity and low birth weight.",
        "Intrauterine growth restriction and discordant growth.",
        "Twin-to-twin transfusion syndrome (in shared-placenta twins).",
        "Increased perinatal mortality.",
        "Congenital abnormality and cord entanglement in some monozygotic types."
      ] },
      { h: "Antenatal management", list: [
        "Confirm number and chorionicity by early scan.",
        "More frequent antenatal visits and closer surveillance.",
        "Iron and folic acid to prevent anaemia; monitor for pre-eclampsia.",
        "Serial growth scans to detect discordant growth.",
        "Plan the place, mode and timing of birth in advance."
      ] },
      { h: "Intrapartum management", list: [
        "Birth planned in a facility with theatre and neonatal support.",
        "IV access, cross-matched blood available; continuous fetal monitoring.",
        "Presentation of the first twin largely guides the mode of birth.",
        "After the first birth, check the lie/presentation of the second twin before it is born.",
        "Active management of the third stage — high risk of atonic PPH."
      ] },
      { h: "Midwifery care and referral", p: "The midwife recognises the signs of multiple pregnancy and refers for scan confirmation and shared care. She supports the woman with nutrition, iron therapy, rest and monitoring for pre-eclampsia and preterm labour, and helps the family prepare practically and emotionally for more than one baby. Birth is arranged in a well-equipped facility; the midwife anticipates malpresentation, cord prolapse and, above all, postpartum haemorrhage from the over-distended uterus, ensuring active third-stage management and having help and blood ready." },
      { h: "Health education", list: [
        "Attend all antenatal appointments and scans.",
        "Take iron and folic acid; eat well and rest more.",
        "Recognise danger signs — bleeding, severe headache, contractions before term.",
        "Plan for a facility birth with neonatal support.",
        "Prepare for feeding and caring for more than one baby."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Differentiate between dizygotic and monozygotic twins.",
      "Describe how a multiple pregnancy is diagnosed.",
      "List the maternal and fetal complications of multiple pregnancy.",
      "Outline the antenatal and intrapartum management of twin pregnancy.",
      "Explain the midwife's role in the care of a woman with a multiple pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "Dizygotic (non-identical) twins arise from:", options: ["One egg that divides", "Two eggs fertilised by two sperm", "One egg and no sperm", "A molar pregnancy"], answer: 1, rationale: "Dizygotic twins come from two separate eggs and two sperm." },
      { type: "mcq", q: "The definitive method of diagnosing multiple pregnancy is:", options: ["Abdominal palpation", "Ultrasound scan", "Urine test", "Blood pressure"], answer: 1, rationale: "Ultrasound confirms the number of fetuses and chorionicity." },
      { type: "mcq", q: "Twin-to-twin transfusion syndrome occurs mainly in twins who:", options: ["Have separate placentas", "Share a placenta (monozygotic)", "Are dizygotic", "Are post-term"], answer: 1, rationale: "TTTS results from vascular connections in a shared (monochorionic) placenta." },
      { type: "mcq", q: "Which is a common maternal complication of multiple pregnancy?", options: ["Post-term pregnancy", "Anaemia and pre-eclampsia", "Oligohydramnios always", "Reduced uterine size"], answer: 1, rationale: "Higher demand and over-distension predispose to anaemia and pre-eclampsia." },
      { type: "mcq", q: "The over-distended uterus of a twin pregnancy increases the risk of:", options: ["Postpartum haemorrhage", "Post-term birth", "Macrosomia of the mother", "Low blood volume"], answer: 0, rationale: "An over-distended uterus contracts poorly, increasing atonic PPH risk." },
      { type: "mcq", q: "After the birth of the first twin, the midwife must first check the:", options: ["Mother's weight", "Lie and presentation of the second twin", "Placental weight", "Newborn's length"], answer: 1, rationale: "The second twin's lie/presentation must be confirmed before it is born." },
      { type: "mcq", q: "Multiple pregnancy is strongly associated with which birth outcome?", options: ["Post-term birth", "Preterm birth and low birth weight", "Always large babies", "No increased risk"], answer: 1, rationale: "Prematurity and low birth weight are common in multiple pregnancy." },
      { type: "mcq", q: "Monozygotic twins arise from:", options: ["Two eggs", "One fertilised egg that divides", "Three eggs", "An unfertilised egg"], answer: 1, rationale: "Monozygotic (identical) twins come from a single fertilised egg that splits." },
      { type: "mcq", q: "Which is an essential intrapartum preparation for twin birth?", options: ["No IV access", "IV access, cross-matched blood and neonatal support ready", "Home birth", "Avoiding fetal monitoring"], answer: 1, rationale: "Twin births need facility care with IV access, blood and neonatal backup." },
      { type: "mcq", q: "Active management of the third stage in twin birth is important mainly to prevent:", options: ["Anaemia in the baby", "Postpartum haemorrhage", "Neonatal jaundice", "Maternal hyperglycaemia"], answer: 1, rationale: "Active third-stage management reduces the high PPH risk of an over-distended uterus." }
      , { type: "fill", q: "Twins from two separate eggs and two sperm are called ____ twins.", accept: ["dizygotic", "non-identical", "fraternal"], rationale: "Two eggs and two sperm produce dizygotic (non-identical) twins." }
      , { type: "fill", q: "The over-distended twin uterus contracts poorly, raising the risk of postpartum ____.", accept: ["haemorrhage", "hemorrhage", "bleeding"], rationale: "Poor uterine tone predisposes to atonic PPH." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "cme-10-preterm-prom",
    unit: "Unit 4 · Complications of Late Pregnancy & the Fetus",
    title: "Preterm Labour & Prelabour Rupture of Membranes",
    readMinutes: 18,
    summary: "Labour and membrane rupture before term — definitions, causes and risk factors, diagnosis, management including tocolysis, steroids and prevention of infection, and the midwife's role in preventing preterm birth and caring for mother and preterm baby.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "Preterm labour is the onset of labour before 37 completed weeks of pregnancy. Prelabour rupture of membranes (PROM) is rupture of the membranes before labour begins; when this happens before 37 weeks it is called preterm prelabour rupture of membranes (PPROM). Preterm birth is a leading cause of newborn illness and death, so its recognition and prevention are central to midwifery." },
      { h: "Causes and risk factors", list: [
        "Infection — urinary, genital tract and chorioamnionitis.",
        "Previous preterm birth.",
        "Multiple pregnancy and polyhydramnios (uterine over-distension).",
        "Cervical weakness (incompetence).",
        "Antepartum haemorrhage and pre-eclampsia.",
        "Maternal illness, smoking, poor nutrition and heavy work.",
        "Short interval between pregnancies."
      ] },
      { h: "Diagnosis of preterm labour", list: [
        "Regular painful uterine contractions before 37 weeks.",
        "Progressive cervical change (dilatation and effacement).",
        "Possible show or ruptured membranes.",
        "Exclude other causes of pain (UTI, abruption)."
      ] },
      { h: "Prelabour rupture of membranes (PROM/PPROM)", p: "The woman reports a gush or continuous leak of clear fluid from the vagina. Diagnosis is by history and a sterile speculum examination to see amniotic fluid pooling — digital examination is avoided to reduce infection risk. The main danger of PPROM is infection (chorioamnionitis) for mother and baby, together with the risks of prematurity and cord prolapse if the presenting part is high." },
      { h: "Management of preterm labour", list: [
        "Confirm gestation and fetal wellbeing.",
        "Corticosteroids to mature the fetal lungs and reduce complications.",
        "Tocolytic drugs to delay birth briefly (to allow steroids and transfer).",
        "Magnesium sulphate for fetal neuroprotection at very early gestations, as prescribed.",
        "Treat any infection; antibiotics in PPROM.",
        "Transfer to a unit with neonatal (special-care) facilities before birth ('in-utero transfer')."
      ] },
      { h: "Care during preterm birth", list: [
        "Gentle birth to minimise trauma to the fragile baby.",
        "Skilled newborn resuscitation ready; keep the baby warm.",
        "Delayed cord clamping where appropriate.",
        "Immediate access to neonatal care; support kangaroo mother care and breast-milk feeding."
      ] },
      { h: "Midwifery care and referral", p: "The midwife identifies women at risk, treats infection early, and teaches recognition of preterm labour and ruptured membranes so women present promptly. When preterm labour or PPROM is suspected she confirms the situation gently (sterile speculum for PROM, no digital exam), monitors mother and fetus, arranges corticosteroids and in-utero transfer to a facility with neonatal care, and watches for infection and cord prolapse. She prepares for newborn resuscitation, keeps the baby warm, supports breast-milk feeding and kangaroo care, and gives the family clear information and emotional support." },
      { h: "Prevention and health education", list: [
        "Early detection and treatment of infections (especially urinary and genital).",
        "Adequate spacing between pregnancies and good nutrition.",
        "Stop smoking; reduce heavy physical strain where possible.",
        "Attend antenatal care so risk factors are found early.",
        "Report leaking fluid, bleeding or regular contractions before term at once."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Define preterm labour, PROM and PPROM.",
      "List the causes and risk factors for preterm labour.",
      "How is prelabour rupture of membranes diagnosed and what is its main danger?",
      "Outline the management of preterm labour, including the role of corticosteroids.",
      "Describe the midwife's role in preventing preterm birth and caring for the preterm baby."
    ],
    assessment: [
      { type: "mcq", q: "Preterm labour is the onset of labour before:", options: ["34 weeks", "37 completed weeks", "40 weeks", "42 weeks"], answer: 1, rationale: "Labour before 37 completed weeks is preterm." },
      { type: "mcq", q: "PPROM stands for:", options: ["Postpartum rupture of membranes", "Preterm prelabour rupture of membranes", "Prolonged premature obstructed membranes", "Placental premature rupture of membranes"], answer: 1, rationale: "PPROM is preterm prelabour rupture of membranes (before 37 weeks)." },
      { type: "mcq", q: "Corticosteroids are given in threatened preterm birth mainly to:", options: ["Stop contractions permanently", "Mature the fetal lungs", "Raise maternal blood pressure", "Treat maternal anaemia"], answer: 1, rationale: "Antenatal steroids accelerate fetal lung maturation and reduce complications." },
      { type: "mcq", q: "The main danger of prolonged PPROM is:", options: ["Macrosomia", "Infection (chorioamnionitis)", "Post-term pregnancy", "Polycythaemia"], answer: 1, rationale: "Once membranes rupture, ascending infection threatens mother and baby." },
      { type: "mcq", q: "To diagnose PROM safely, the midwife performs a:", options: ["Digital vaginal examination", "Sterile speculum examination", "Rectal examination", "No examination at all"], answer: 1, rationale: "A sterile speculum sees fluid pooling while avoiding infection from digital exam." },
      { type: "mcq", q: "Tocolytic drugs are used in preterm labour to:", options: ["Speed up the birth", "Briefly delay birth to allow steroids and transfer", "Induce labour", "Treat infection"], answer: 1, rationale: "Tocolysis buys time for steroids to work and for in-utero transfer." },
      { type: "mcq", q: "Which is a recognised risk factor for preterm labour?", options: ["Single low-risk pregnancy", "Previous preterm birth", "Advanced maternal rest", "Low uric acid"], answer: 1, rationale: "A previous preterm birth strongly predicts recurrence." },
      { type: "mcq", q: "'In-utero transfer' means:", options: ["Transferring the placenta", "Transferring the mother before birth to a unit with neonatal care", "Transferring the baby after birth", "Transfusing the fetus"], answer: 1, rationale: "The safest transfer for a preterm baby is inside the mother, before birth." },
      { type: "mcq", q: "A high presenting part with ruptured membranes increases the risk of:", options: ["Cord prolapse", "Macrosomia", "Post-term pregnancy", "Hyperglycaemia"], answer: 0, rationale: "When the presenting part is not fitting the pelvis, the cord can prolapse after rupture." },
      { type: "mcq", q: "An important preventive measure against preterm labour is:", options: ["Ignoring infections", "Early detection and treatment of infection", "Frequent heavy lifting", "Skipping antenatal care"], answer: 1, rationale: "Treating infection early reduces a major cause of preterm labour." }
      , { type: "fill", q: "Labour beginning before 37 completed weeks is called ____ labour.", accept: ["preterm", "premature"], rationale: "Preterm labour begins before 37 weeks." }
      , { type: "fill", q: "Antenatal corticosteroids are given before preterm birth to mature the fetal ____.", accept: ["lungs", "lung"], rationale: "Steroids accelerate fetal lung maturation." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "cme-11-postterm-iugr",
    unit: "Unit 4 · Complications of Late Pregnancy & the Fetus",
    title: "Post-term Pregnancy, Fetal Wellbeing & Intrauterine Growth Restriction",
    readMinutes: 18,
    summary: "Prolonged (post-term) pregnancy and the small-for-gestational-age / growth-restricted fetus — assessment of fetal wellbeing, causes and risks, monitoring, management, and the midwife's role in surveillance and timely referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "A post-term (prolonged) pregnancy is one that continues beyond 42 completed weeks. Intrauterine growth restriction (IUGR) means the fetus has not achieved its growth potential and is smaller than expected; small-for-gestational-age (SGA) describes a fetus or baby below the expected weight for its gestation. Both post-term pregnancy and poor fetal growth increase the risk to the fetus, so fetal wellbeing must be watched carefully." },
      { h: "Assessing fetal wellbeing", list: [
        "Fetal movements — the mother's perception of her baby's movements.",
        "Symphysis-fundal height — standardised measurement to track growth.",
        "Fetal heart rate — auscultation and, where indicated, cardiotocography (CTG).",
        "Ultrasound — growth measurements, liquor (amniotic fluid) volume and Doppler blood flow.",
        "Amniotic fluid assessment — reduced fluid (oligohydramnios) is a warning sign."
      ] },
      { h: "Risks of post-term pregnancy", list: [
        "Placental function declines, reducing oxygen and nutrients to the fetus.",
        "Meconium-stained liquor and meconium aspiration.",
        "Fetal distress in labour and increased perinatal mortality.",
        "Oligohydramnios and cord compression.",
        "Larger baby with a risk of difficult birth."
      ] },
      { h: "IUGR — causes and types", list: [
        "Placental insufficiency — the commonest cause (often with hypertension/pre-eclampsia).",
        "Maternal factors — hypertension, smoking, malnutrition, anaemia, infection.",
        "Fetal factors — congenital abnormality, infection, multiple pregnancy.",
        "Symmetrical IUGR (whole body small, often early cause) versus asymmetrical (head-sparing, later placental cause)."
      ] },
      { h: "Consequences of IUGR", list: [
        "Reduced fetal reserve and risk of intrauterine hypoxia and death.",
        "Fetal distress and meconium in labour.",
        "Preterm birth (if early delivery is needed).",
        "Neonatal hypoglycaemia, hypothermia and polycythaemia.",
        "Long-term developmental effects."
      ] },
      { h: "Management", list: [
        "Confirm and monitor growth with serial scans and Doppler.",
        "Increased surveillance of fetal wellbeing (movements, CTG, liquor).",
        "Treat or control maternal causes (e.g. hypertension); advise stopping smoking.",
        "Plan timing and mode of birth — deliver before the fetus becomes compromised.",
        "For post-term pregnancy: monitoring and offer of induction of labour after term.",
        "Prepare for possible fetal distress, meconium and neonatal care at birth."
      ] },
      { h: "Midwifery care and referral", p: "The midwife promotes maternal awareness of fetal movements and teaches women to report any reduction promptly. She measures and plots fundal height accurately, listens to the fetal heart, and refers any woman with reduced movements, poor growth, reduced liquor or a pregnancy going beyond term for specialist assessment and a plan for birth. At the birth she anticipates meconium and fetal distress, ensures skilled newborn care, and keeps the small or post-mature baby warm and fed, watching for hypoglycaemia." },
      { h: "Health education", list: [
        "Be aware of your baby's usual pattern of movements and report any reduction at once.",
        "Attend antenatal appointments for growth monitoring.",
        "Stop smoking and eat well to support fetal growth.",
        "Understand why induction may be offered after term.",
        "Sleeping on the side in late pregnancy is advised."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Define post-term pregnancy, SGA and IUGR.",
      "Describe the methods used to assess fetal wellbeing.",
      "Explain the risks of a prolonged (post-term) pregnancy.",
      "Discuss the causes and consequences of intrauterine growth restriction.",
      "What is the midwife's role in monitoring fetal growth and wellbeing?"
    ],
    assessment: [
      { type: "mcq", q: "A post-term (prolonged) pregnancy is one continuing beyond:", options: ["37 weeks", "40 weeks", "42 completed weeks", "44 weeks"], answer: 2, rationale: "Post-term pregnancy is defined as continuing beyond 42 completed weeks." },
      { type: "mcq", q: "IUGR means the fetus is:", options: ["Larger than expected", "Not achieving its growth potential", "Post-term", "In breech position"], answer: 1, rationale: "Intrauterine growth restriction means the fetus is smaller than its growth potential." },
      { type: "mcq", q: "The commonest cause of intrauterine growth restriction is:", options: ["Macrosomia", "Placental insufficiency", "Polyhydramnios", "Gestational diabetes"], answer: 1, rationale: "Placental insufficiency, often with hypertension, is the leading cause of IUGR." },
      { type: "mcq", q: "Which is used to track fetal growth clinically at each visit?", options: ["Blood pressure", "Symphysis-fundal height measurement", "Urine protein", "Maternal weight only"], answer: 1, rationale: "Standardised fundal-height measurement monitors fetal growth." },
      { type: "mcq", q: "Reduced amniotic fluid is called:", options: ["Polyhydramnios", "Oligohydramnios", "Hydatidiform", "Hydrops"], answer: 1, rationale: "Oligohydramnios (reduced liquor) is a warning sign of fetal compromise." },
      { type: "mcq", q: "A major risk of post-term pregnancy for the fetus is:", options: ["Declining placental function and hypoxia", "Excess amniotic fluid", "Early preterm birth", "Hyperglycaemia"], answer: 0, rationale: "Placental ageing reduces oxygen supply, risking hypoxia and meconium." },
      { type: "mcq", q: "What should a woman be taught to report promptly in late pregnancy?", options: ["Mild indigestion", "Reduced fetal movements", "Occasional hiccups", "Normal appetite"], answer: 1, rationale: "Reduced fetal movements may signal fetal compromise and need urgent review." },
      { type: "mcq", q: "Asymmetrical IUGR classically shows:", options: ["A uniformly small baby", "Head-sparing with a relatively larger head", "Macrosomia", "No effect on the baby"], answer: 1, rationale: "In asymmetrical (late, placental) IUGR the head is relatively spared." },
      { type: "mcq", q: "A common neonatal problem in a growth-restricted baby is:", options: ["Hyperglycaemia", "Hypoglycaemia and hypothermia", "Obesity", "High birth weight"], answer: 1, rationale: "Small babies have poor reserves and are prone to low blood sugar and cold." },
      { type: "mcq", q: "For post-term pregnancy, a common management option after term is:", options: ["Ignore and wait indefinitely", "Increased surveillance and offer of induction", "Immediate caesarean for all", "Stop antenatal care"], answer: 1, rationale: "Monitoring and offering induction reduces the risks of prolonged pregnancy." }
      , { type: "fill", q: "A pregnancy continuing beyond 42 completed weeks is called ____.", accept: ["post-term", "postterm", "prolonged", "post term"], rationale: "Beyond 42 weeks the pregnancy is post-term (prolonged)." }
      , { type: "fill", q: "Reduced amniotic fluid volume is called ____.", accept: ["oligohydramnios"], rationale: "Oligohydramnios is a marker of possible fetal compromise." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "cme-12-malpresentation",
    unit: "Unit 5 · Complications of Labour & Birth",
    title: "Malpresentations & Malpositions: Breech, Transverse Lie & Occipitoposterior",
    readMinutes: 19,
    summary: "Abnormal presentations and positions of the fetus — breech, transverse/oblique lie, and occipitoposterior position — with types, causes, diagnosis, dangers, management and the midwife's role in recognition and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "In a normal labour the fetus lies longitudinally, presents by the head (cephalic) and its occiput is anterior. A malpresentation is any presentation other than the vertex (for example breech, face, brow or shoulder). A malposition is when the head presents but the occiput is not anterior (for example occipitoposterior). These deviations can make labour longer and more difficult and carry risks for mother and baby." },
      { h: "Breech presentation", p: "In breech presentation the buttocks or feet present first instead of the head. Types are: complete (flexed) breech — hips and knees flexed; frank (extended) breech — hips flexed, knees extended (legs up); and footling breech — one or both feet presenting. Breech is normal earlier in pregnancy but should usually turn to cephalic by term.", figure: {
        caption: "Types of breech presentation.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of breech presentation."><rect x="20" y="30" width="160" height="120" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><rect x="200" y="30" width="160" height="120" rx="10" fill="#F9A8D4" stroke="#831843" stroke-width="2"/><rect x="380" y="30" width="160" height="120" rx="10" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="100" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Complete</text><text x="100" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">hips &amp; knees</text><text x="100" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">flexed</text><text x="280" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Frank</text><text x="280" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">hips flexed,</text><text x="280" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">knees extended</text><text x="460" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FDF2F8">Footling</text><text x="460" y="95" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FDF2F8">foot/feet</text><text x="460" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#FDF2F8">present</text></svg>'
      } },
      { h: "Breech — causes and management", list: [
        "Causes — prematurity, multiple pregnancy, polyhydramnios, placenta praevia, uterine or fetal abnormality, contracted pelvis.",
        "Diagnosis — palpation (head felt at the fundus), auscultation (fetal heart high), confirmed by scan.",
        "External cephalic version (ECV) may be offered at term to turn the baby.",
        "Planned caesarean or careful assisted vaginal breech birth by a skilled attendant.",
        "Dangers — cord prolapse, head entrapment, birth trauma and hypoxia."
      ] },
      { h: "Transverse and oblique lie", p: "In a transverse lie the fetus lies across the uterus and the shoulder presents; in an oblique lie it lies diagonally. Vaginal birth is impossible with a persistent transverse lie, and if the membranes rupture there is a serious danger of cord prolapse and, if labour continues, obstructed labour and uterine rupture. A persistent transverse lie at term requires referral and usually caesarean birth." },
      { h: "Occipitoposterior (OP) position", p: "In the occipitoposterior position the fetal occiput points towards the mother's back. Most OP positions rotate to occipitoanterior during labour, but some do not. OP labour is often longer and more painful, with severe backache, early rupture of membranes and a tendency to prolonged labour. Many rotate and birth normally; some need assisted (instrumental) birth or caesarean." },
      { h: "General dangers of malpresentation/malposition", list: [
        "Prolonged and obstructed labour.",
        "Cord prolapse (especially transverse lie and footling breech).",
        "Increased operative and assisted birth.",
        "Fetal hypoxia and birth trauma.",
        "Maternal exhaustion and higher PPH risk."
      ] },
      { h: "Midwifery care and referral", p: "The midwife detects abnormal lie and presentation by careful abdominal palpation and auscultation at antenatal visits and confirms with a scan. She refers women with breech, transverse lie or other malpresentation at term for a planned mode of birth and does not attempt a vaginal breech or transverse birth without a skilled attendant and facilities. She watches closely for cord prolapse when membranes rupture, supports the woman through the longer, more painful OP labour, and prepares for possible assisted or operative birth and neonatal care." }
    ],
    references: REF_CME,
    examQuestions: [
      "Differentiate between malpresentation and malposition.",
      "Describe the types, causes and dangers of breech presentation.",
      "Why is a persistent transverse lie dangerous, and how is it managed?",
      "Explain the features and course of an occipitoposterior labour.",
      "Discuss the midwife's role in recognising and managing malpresentations."
    ],
    assessment: [
      { type: "mcq", q: "A malposition refers to an abnormal position of the:", options: ["Fetal head (occiput not anterior)", "Placenta", "Umbilical cord", "Uterus"], answer: 0, rationale: "Malposition means the head presents but the occiput is not anterior (e.g. OP)." },
      { type: "mcq", q: "In a frank breech, the:", options: ["Feet present first", "Hips are flexed and knees extended", "Head presents", "Shoulder presents"], answer: 1, rationale: "Frank (extended) breech: hips flexed, knees extended with legs up." },
      { type: "mcq", q: "A serious danger of footling breech and transverse lie is:", options: ["Post-term pregnancy", "Cord prolapse", "Macrosomia", "Hyperglycaemia"], answer: 1, rationale: "A poorly fitting presenting part allows the cord to prolapse when membranes rupture." },
      { type: "mcq", q: "In breech presentation, the fetal head is usually felt:", options: ["In the pelvis", "At the fundus (top of the uterus)", "In the vagina", "Below the symphysis"], answer: 1, rationale: "In breech the hard round head is palpated at the fundus." },
      { type: "mcq", q: "A persistent transverse lie at term usually requires:", options: ["Normal vaginal birth", "Induction of labour", "Caesarean section", "No intervention"], answer: 2, rationale: "Vaginal birth is impossible with a persistent transverse lie; caesarean is needed." },
      { type: "mcq", q: "In the occipitoposterior position, the fetal occiput points towards the mother's:", options: ["Front (abdomen)", "Back", "Right side only", "Left side only"], answer: 1, rationale: "In OP the occiput lies posteriorly, towards the maternal back." },
      { type: "mcq", q: "A characteristic feature of occipitoposterior labour is:", options: ["Painless labour", "Severe backache and a longer labour", "Very rapid birth", "No membrane rupture"], answer: 1, rationale: "OP labour is typically longer and marked by severe backache." },
      { type: "mcq", q: "The procedure that may be offered to turn a breech baby to cephalic at term is:", options: ["Amniotomy", "External cephalic version (ECV)", "Episiotomy", "Version by forceps"], answer: 1, rationale: "ECV is an attempt to turn the breech baby to a head-down position." },
      { type: "mcq", q: "Which is a cause of breech presentation?", options: ["Post-term pregnancy", "Polyhydramnios and prematurity", "Maternal anaemia", "Gestational diabetes"], answer: 1, rationale: "Prematurity and polyhydramnios allow the fetus more room to lie breech." },
      { type: "mcq", q: "The safe midwifery action for a diagnosed transverse lie at term is to:", options: ["Attempt vaginal birth at home", "Reassure and discharge", "Perform amniotomy", "Refer for planned facility birth (usually caesarean)"], answer: 3, rationale: "Transverse lie needs referral and facility birth to prevent obstruction and rupture." }
      , { type: "fill", q: "When the fetus lies across the uterus and the shoulder presents, the lie is ____.", accept: ["transverse"], rationale: "A transverse lie presents the shoulder and cannot deliver vaginally." }
      , { type: "fill", q: "A breech in which one or both feet present is called a ____ breech.", accept: ["footling"], rationale: "In a footling breech the feet present, with a high cord-prolapse risk." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "cme-13-obstructed-labour",
    unit: "Unit 5 · Complications of Labour & Birth",
    title: "Prolonged & Obstructed Labour",
    readMinutes: 19,
    summary: "Failure of labour to progress and mechanical obstruction — causes (the three Ps), the partograph, signs of obstruction, complications including uterine rupture and fistula, management and the midwife's role in prevention and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "Prolonged labour is labour that lasts abnormally long with slow or no progress in cervical dilatation and descent. Obstructed labour is when the fetus cannot pass through the birth canal despite good uterine contractions, because of a mechanical barrier. Obstructed labour is a major cause of maternal and perinatal death and morbidity, especially in low-resource settings." },
      { h: "Causes — the three Ps", list: [
        "Power — inefficient (weak or uncoordinated) uterine contractions.",
        "Passage — a contracted or abnormal pelvis, or soft-tissue obstruction (e.g. fibroid).",
        "Passenger — a large baby, malpresentation, malposition or fetal abnormality (e.g. hydrocephalus)."
      ] },
      { h: "The partograph", p: "The partograph is a graphical record used to monitor the progress of labour, plotting cervical dilatation against time, together with descent, contractions, fetal heart, and maternal condition. It has alert and action lines: crossing the alert line warns that progress is slow, and crossing the action line signals the need for intervention or referral. Correct use of the partograph is one of the most effective ways to detect prolonged and obstructed labour early." },
      { h: "Signs of obstructed labour", list: [
        "Slow or no progress despite strong contractions.",
        "Maternal exhaustion, dehydration and ketosis; rising pulse and temperature.",
        "A full bladder and scanty, concentrated urine.",
        "Large caput and moulding of the fetal head.",
        "A Bandl's ring (a visible/palpable ridge as the upper segment retracts) — a sign of impending uterine rupture.",
        "Signs of fetal distress or fetal death."
      ] },
      { h: "Complications", list: [
        "Maternal — uterine rupture, postpartum haemorrhage, sepsis, shock and death.",
        "Obstetric fistula (vesicovaginal or rectovaginal) from prolonged pressure necrosis.",
        "Fetal — hypoxia, birth trauma and stillbirth.",
        "Puerperal sepsis and long-term morbidity."
      ] },
      { h: "Management", list: [
        "Recognise early using the partograph — do not allow labour to become obstructed.",
        "Correct dehydration and ketosis with IV fluids; empty the bladder.",
        "Give antibiotics if infection is suspected.",
        "Relieve obstruction by the appropriate route — usually caesarean section (or, rarely, assisted birth if criteria are met).",
        "Never give oxytocin to augment labour when obstruction is suspected — it can cause rupture.",
        "Anticipate and manage PPH and neonatal resuscitation."
      ] },
      { h: "Midwifery care and referral", p: "The midwife prevents obstructed labour by monitoring every labour with the partograph, keeping the woman hydrated, ensuring the bladder is emptied, and referring promptly when progress crosses the action line. She never augments a labour she suspects is obstructed. When obstruction is present she resuscitates the woman, arranges urgent transfer for caesarean, communicates clearly, and prepares for PPH and newborn resuscitation. She provides support and, later, sensitive care and referral for any woman who develops a fistula." },
      { h: "Prevention and health education", list: [
        "Routine use of the partograph in every labour.",
        "Skilled attendance and access to emergency obstetric care.",
        "Early booking and identification of at-risk women (small stature, previous obstructed labour).",
        "Prompt referral when labour is prolonged.",
        "Community awareness so women reach care before labour becomes obstructed."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Differentiate between prolonged and obstructed labour.",
      "Explain the 'three Ps' as causes of prolonged/obstructed labour.",
      "Describe the use and importance of the partograph.",
      "List the signs and complications of obstructed labour.",
      "Discuss the midwife's role in preventing and managing obstructed labour."
    ],
    assessment: [
      { type: "mcq", q: "Obstructed labour is when the fetus cannot pass through the birth canal despite:", options: ["Weak contractions", "Good uterine contractions", "No contractions", "An empty uterus"], answer: 1, rationale: "In obstruction there is a mechanical barrier despite effective contractions." },
      { type: "mcq", q: "Which is NOT one of the 'three Ps'?", options: ["Power", "Passage", "Passenger", "Placenta"], answer: 3, rationale: "The three Ps are power, passage and passenger; placenta is not one of them." },
      { type: "mcq", q: "The partograph plots cervical dilatation against:", options: ["Blood pressure", "Time", "Weight", "Temperature only"], answer: 1, rationale: "The partograph charts cervical dilatation over time to monitor progress." },
      { type: "mcq", q: "Crossing the action line on the partograph indicates the need for:", options: ["Reassurance only", "Intervention or referral", "Discharge home", "Stopping monitoring"], answer: 1, rationale: "The action line signals that intervention or referral is required." },
      { type: "mcq", q: "A Bandl's ring is a warning sign of impending:", options: ["Normal birth", "Uterine rupture", "Placenta praevia", "Twin birth"], answer: 1, rationale: "A rising Bandl's ring warns of impending uterine rupture in obstructed labour." },
      { type: "mcq", q: "In suspected obstructed labour, oxytocin augmentation is:", options: ["Recommended", "Contraindicated because it can cause rupture", "Harmless", "The first-line treatment"], answer: 1, rationale: "Augmenting an obstructed labour can rupture the uterus and must be avoided." },
      { type: "mcq", q: "A long-term complication of neglected obstructed labour is:", options: ["Obstetric fistula", "Gestational diabetes", "Hyperemesis", "Polyhydramnios"], answer: 0, rationale: "Prolonged pressure causes tissue necrosis and vesicovaginal/rectovaginal fistula." },
      { type: "mcq", q: "The usual definitive treatment for obstructed labour is:", options: ["Bed rest", "Caesarean section", "Oral fluids only", "Induction"], answer: 1, rationale: "Obstruction is relieved by caesarean section in most cases." },
      { type: "mcq", q: "Which is a sign of obstructed labour on examination?", options: ["Rapid easy progress", "Large caput and marked moulding", "Empty uterus", "Falling maternal pulse"], answer: 1, rationale: "Excessive caput and moulding reflect the head being pushed against an obstruction." },
      { type: "mcq", q: "The single most effective tool to detect prolonged/obstructed labour early is the:", options: ["Bishop score", "Partograph", "Apgar score", "Blood film"], answer: 1, rationale: "Correct partograph use detects abnormal labour progress early." }
      , { type: "fill", q: "The graphical record used to monitor the progress of labour is the ____.", accept: ["partograph", "partogram"], rationale: "The partograph charts labour progress with alert and action lines." }
      , { type: "fill", q: "The three causes of difficult labour are the power, the passage and the ____.", accept: ["passenger"], rationale: "The three Ps are power, passage and passenger." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "cme-14-pph-shoulder-dystocia",
    unit: "Unit 6 · Obstetric Emergencies",
    title: "Obstetric Emergencies I: Postpartum Haemorrhage & Shoulder Dystocia",
    readMinutes: 20,
    summary: "Two major intrapartum/postpartum emergencies — postpartum haemorrhage (the four Ts, active management and step-wise treatment) and shoulder dystocia (recognition and the sequence of manoeuvres) — with the midwife's immediate emergency actions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Postpartum haemorrhage — definition", p: "Postpartum haemorrhage (PPH) is excessive bleeding from the genital tract after birth — classically a blood loss of 500 mL or more after vaginal birth (or any loss causing haemodynamic compromise). Primary PPH occurs within the first 24 hours; secondary PPH occurs from 24 hours up to 6 weeks after birth. PPH is a leading cause of maternal death, but most cases are preventable and treatable." },
      { h: "Causes of PPH — the four Ts", list: [
        "Tone — atonic uterus (the commonest cause): the uterus fails to contract.",
        "Trauma — tears of the genital tract, episiotomy, uterine rupture.",
        "Tissue — retained placenta or placental fragments.",
        "Thrombin — clotting disorders (coagulopathy)."
      ] },
      { h: "Prevention and management of PPH", list: [
        "Active management of the third stage — a uterotonic (e.g. oxytocin), controlled cord traction and uterine assessment.",
        "Call for help; rub up a contraction (uterine massage) and give uterotonic drugs.",
        "Empty the bladder; check the placenta is complete; examine for and repair tears.",
        "Resuscitate — IV access, fluids, cross-matched blood, keep warm, monitor vital signs.",
        "Bimanual compression and, if needed, surgical measures (balloon, sutures, ligation, hysterectomy) at referral level.",
        "Misoprostol may be used where injectable uterotonics are not available."
      ] },
      { h: "Shoulder dystocia — definition", p: "Shoulder dystocia is an obstetric emergency in which, after the fetal head is born, the anterior shoulder becomes stuck behind the mother's pubic bone and cannot be delivered with normal gentle traction. It is largely unpredictable. It threatens the baby with hypoxia and nerve/bone injury and the mother with trauma and PPH, so a calm, well-drilled response is vital.", figure: {
        caption: "The four Ts — causes of postpartum haemorrhage.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four Ts causes of postpartum haemorrhage."><rect x="15" y="45" width="128" height="80" rx="9" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="79" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FDF2F8">TONE</text><text x="79" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDF2F8">atonic uterus</text><rect x="152" y="45" width="128" height="80" rx="9" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="216" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">TRAUMA</text><text x="216" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">tears / rupture</text><rect x="289" y="45" width="128" height="80" rx="9" fill="#F9A8D4" stroke="#831843" stroke-width="2"/><text x="353" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">TISSUE</text><text x="353" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">retained placenta</text><rect x="426" y="45" width="120" height="80" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="486" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">THROMBIN</text><text x="486" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">clotting problem</text></svg>'
      } },
      { h: "Shoulder dystocia — management (HELPERR)", list: [
        "H — call for Help.",
        "E — Evaluate for Episiotomy (to make room for manoeuvres).",
        "L — Legs (McRoberts manoeuvre: hips sharply flexed onto the abdomen).",
        "P — suprapubic Pressure (to dislodge the anterior shoulder).",
        "E — Enter manoeuvres (internal rotational manoeuvres).",
        "R — Remove the posterior arm.",
        "R — Roll the woman onto all fours.",
        "Never apply fundal pressure — it worsens the impaction and can rupture the uterus."
      ] },
      { h: "Complications", list: [
        "PPH — hypovolaemic shock, DIC, kidney injury, death if untreated.",
        "Shoulder dystocia — fetal hypoxia, brachial plexus injury (Erb's palsy), fractured clavicle/humerus.",
        "Maternal — perineal and vaginal trauma, PPH.",
        "Psychological trauma for the woman and family."
      ] },
      { h: "Midwifery care and referral", p: "The midwife prevents PPH by practising active management of the third stage and by identifying at-risk women (over-distended uterus, prolonged labour, previous PPH). If PPH occurs she immediately calls for help, rubs up a contraction, gives uterotonics, empties the bladder, resuscitates, and refers for surgical measures if bleeding continues. For shoulder dystocia she recognises it at once, calls for help, and works calmly through McRoberts, suprapubic pressure and internal manoeuvres without fundal pressure, then examines both mother and baby for injury and documents the event fully." }
    ],
    references: REF_CME,
    examQuestions: [
      "Define postpartum haemorrhage and classify it into primary and secondary.",
      "Explain the four Ts as causes of PPH and their management.",
      "Describe active management of the third stage of labour.",
      "Define shoulder dystocia and outline the HELPERR sequence of management.",
      "What complications can follow PPH and shoulder dystocia?"
    ],
    assessment: [
      { type: "mcq", q: "Primary postpartum haemorrhage is bleeding within the first:", options: ["1 hour", "24 hours", "7 days", "6 weeks"], answer: 1, rationale: "Primary PPH occurs within the first 24 hours after birth." },
      { type: "mcq", q: "PPH after vaginal birth is classically defined as a blood loss of at least:", options: ["100 mL", "250 mL", "500 mL", "2000 mL"], answer: 2, rationale: "A loss of 500 mL or more after vaginal birth is the classic definition of PPH." },
      { type: "mcq", q: "The commonest cause of primary PPH is:", options: ["Trauma", "Atonic uterus (Tone)", "Retained tissue", "Clotting disorder"], answer: 1, rationale: "Uterine atony (poor Tone) is the leading cause of primary PPH." },
      { type: "mcq", q: "Which is NOT one of the four Ts of PPH?", options: ["Tone", "Trauma", "Tissue", "Temperature"], answer: 3, rationale: "The four Ts are Tone, Trauma, Tissue and Thrombin." },
      { type: "mcq", q: "Active management of the third stage includes giving a:", options: ["Diuretic", "Uterotonic drug", "Sedative", "Antacid"], answer: 1, rationale: "A uterotonic (e.g. oxytocin) is the key drug in active third-stage management." },
      { type: "mcq", q: "Shoulder dystocia is impaction of the anterior shoulder behind the mother's:", options: ["Sacrum", "Pubic bone (symphysis)", "Coccyx", "Ischial spine"], answer: 1, rationale: "The anterior shoulder is caught behind the symphysis pubis." },
      { type: "mcq", q: "The McRoberts manoeuvre involves:", options: ["Fundal pressure", "Sharp flexion of the mother's hips onto her abdomen", "Vacuum extraction", "Deep sedation"], answer: 1, rationale: "McRoberts hyper-flexes the hips to widen the pelvic outlet." },
      { type: "mcq", q: "Which action must NEVER be used in shoulder dystocia?", options: ["Calling for help", "Suprapubic pressure", "Fundal pressure", "McRoberts manoeuvre"], answer: 2, rationale: "Fundal pressure worsens impaction and risks uterine rupture." },
      { type: "mcq", q: "A common fetal injury from shoulder dystocia is:", options: ["Erb's palsy (brachial plexus injury)", "Cleft palate", "Hip dislocation only", "Cataract"], answer: 0, rationale: "Stretching of the brachial plexus can cause Erb's palsy." },
      { type: "mcq", q: "If uterine massage and uterotonics fail to control PPH, the next step is to:", options: ["Discharge the woman", "Resuscitate and refer for surgical measures", "Give oral iron only", "Wait 24 hours"], answer: 1, rationale: "Ongoing PPH needs resuscitation and referral for surgical control." }
      , { type: "fill", q: "The four causes of PPH are Tone, Trauma, Tissue and ____.", accept: ["thrombin"], rationale: "Thrombin (coagulation failure) completes the four Ts." }
      , { type: "fill", q: "The manoeuvre of sharply flexing the mother's hips onto her abdomen in shoulder dystocia is the ____ manoeuvre.", accept: ["McRoberts", "mcroberts"], rationale: "The McRoberts manoeuvre widens the pelvic outlet." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "cme-15-emergencies-two",
    unit: "Unit 6 · Obstetric Emergencies",
    title: "Obstetric Emergencies II: Cord Prolapse, Uterine Rupture, Amniotic Fluid Embolism & Uterine Inversion",
    readMinutes: 19,
    summary: "Further life-threatening emergencies — umbilical cord prolapse, uterine rupture, amniotic fluid embolism and acute uterine inversion — with recognition, immediate management and the midwife's role in each.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Umbilical cord prolapse", p: "Cord prolapse is descent of the umbilical cord below the presenting part after the membranes have ruptured, so the cord is exposed to cold and compression. This cuts off the baby's oxygen supply and is an acute emergency. Risk factors include a high or ill-fitting presenting part, malpresentation (footling breech, transverse lie), prematurity, polyhydramnios and multiple pregnancy." },
      { h: "Cord prolapse — immediate management", list: [
        "Call for urgent help; note the time.",
        "Relieve pressure on the cord — position the woman knee-chest or in exaggerated Sims/head-down (Trendelenburg) position; the midwife may hold the presenting part up off the cord.",
        "Do not handle the cord unnecessarily; keep it warm and moist.",
        "Fill the bladder (as instructed) to lift the presenting part if transfer is needed.",
        "Arrange immediate birth — usually emergency caesarean (or assisted birth if fully dilated).",
        "Monitor the fetal heart; prepare for neonatal resuscitation."
      ] },
      { h: "Uterine rupture", p: "Uterine rupture is a tear in the wall of the uterus, most often at the site of a previous caesarean scar, or following obstructed labour or excessive oxytocin. It is catastrophic for mother and baby. Warning signs include severe continuous abdominal pain, a Bandl's ring, scar tenderness, fetal distress, and then — with complete rupture — sudden severe pain, cessation of contractions, easily palpable fetal parts, vaginal bleeding and maternal collapse (shock). It requires immediate resuscitation and surgery.", figure: {
        caption: "Cord prolapse — the emergency chain of immediate actions.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cord prolapse emergency actions flow."><defs><marker id="cmeArr15" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="80" width="115" height="55" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="77" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Call for</text><text x="77" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">help</text><rect x="160" y="80" width="115" height="55" rx="9" fill="#F9A8D4" stroke="#831843" stroke-width="2"/><text x="217" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Relieve cord</text><text x="217" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">pressure</text><rect x="300" y="80" width="115" height="55" rx="9" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="357" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">Position</text><text x="357" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">knee-chest</text><rect x="440" y="80" width="105" height="55" rx="9" fill="#831843" stroke="#831843" stroke-width="2"/><text x="492" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">Urgent</text><text x="492" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">birth</text><line x1="135" y1="107" x2="156" y2="107" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr15)"/><line x1="275" y1="107" x2="296" y2="107" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr15)"/><line x1="415" y1="107" x2="436" y2="107" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr15)"/></svg>'
      } },
      { h: "Amniotic fluid embolism (AFE)", p: "Amniotic fluid embolism is a rare but often fatal emergency in which amniotic fluid and fetal cells enter the maternal circulation, usually around labour or birth, triggering sudden collapse, severe breathing difficulty, low blood pressure, and, characteristically, a rapidly developing coagulation failure (DIC) with haemorrhage. It is unpredictable and unpreventable; management is immediate resuscitation, oxygen, circulatory support and correction of clotting, with a whole team and blood products." },
      { h: "Acute uterine inversion", p: "Uterine inversion is when the uterus turns inside out, usually in the third stage, often linked to mismanaged cord traction on a poorly contracted uterus or a fundal placenta. It causes sudden severe lower abdominal pain, profound shock (out of proportion to any blood loss) and often haemorrhage. Immediate management is to call for help, attempt to replace the uterus promptly, treat shock aggressively, and give uterotonics only after the uterus is replaced." },
      { h: "Common principles across emergencies", list: [
        "Call for help early and note the time.",
        "Airway, breathing, circulation — resuscitate the mother.",
        "IV access, fluids, cross-matched blood; monitor vital signs.",
        "Prepare for urgent birth and neonatal resuscitation as relevant.",
        "Clear communication, documentation and family support."
      ] },
      { h: "Midwifery care and referral", p: "In every one of these emergencies the midwife's role is to recognise the danger immediately, summon skilled help, begin resuscitation, and act on the specific first steps — relieving cord pressure and positioning for prolapse; resuscitating and preparing for surgery in rupture; full resuscitation and clotting support in AFE; and prompt replacement plus shock treatment in inversion. She arranges urgent transfer to a facility with theatre, blood and neonatal care, documents accurately, and supports the woman and family through a frightening experience." }
    ],
    references: REF_CME,
    examQuestions: [
      "Define cord prolapse and describe its immediate management.",
      "Describe the warning signs and management of uterine rupture.",
      "What is amniotic fluid embolism and how is it managed?",
      "Explain the causes and management of acute uterine inversion.",
      "Outline the common principles the midwife follows in any obstetric emergency."
    ],
    assessment: [
      { type: "mcq", q: "Cord prolapse is descent of the cord below the presenting part after:", options: ["Rupture of the membranes", "Full dilatation only", "The placenta is delivered", "Crowning"], answer: 0, rationale: "The cord can prolapse once the membranes have ruptured and the presenting part is high." },
      { type: "mcq", q: "A helpful position to relieve cord compression is:", options: ["Flat on the back", "Standing upright", "Knee-chest position", "Sitting"], answer: 2, rationale: "The knee-chest position uses gravity to take pressure off the cord." },
      { type: "mcq", q: "The definitive management for cord prolapse when birth is not imminent is usually:", options: ["Wait and observe", "Oral fluids", "Induction", "Emergency caesarean section"], answer: 3, rationale: "Immediate birth, usually by emergency caesarean, is needed to save the baby." },
      { type: "mcq", q: "Uterine rupture most often occurs at the site of a previous:", options: ["Caesarean scar", "Episiotomy", "Blood test", "Cervical smear"], answer: 0, rationale: "A previous caesarean scar is the commonest site of uterine rupture." },
      { type: "mcq", q: "Sudden severe pain, cessation of contractions and maternal collapse suggest:", options: ["Normal labour", "Complete uterine rupture", "Threatened miscarriage", "Hyperemesis"], answer: 1, rationale: "These are classic signs of complete uterine rupture." },
      { type: "mcq", q: "Amniotic fluid embolism characteristically causes sudden collapse with:", options: ["Slow gradual recovery", "Breathing difficulty and coagulation failure (DIC)", "High blood pressure only", "No effect on clotting"], answer: 1, rationale: "AFE causes cardiorespiratory collapse and rapid DIC." },
      { type: "mcq", q: "Acute uterine inversion classically causes:", options: ["Mild discomfort", "Profound shock out of proportion to blood loss", "No pain", "A slow onset over days"], answer: 1, rationale: "Inversion produces severe pain and shock disproportionate to visible loss." },
      { type: "mcq", q: "In uterine inversion, uterotonic drugs should be given:", options: ["Before replacing the uterus", "Only after the uterus is replaced", "Never at all", "In place of resuscitation"], answer: 1, rationale: "Uterotonics before replacement make the inverted uterus harder to replace." },
      { type: "mcq", q: "A common risk factor for cord prolapse is:", options: ["A well-fitting engaged head", "A high or ill-fitting presenting part / malpresentation", "Post-term pregnancy", "Oligohydramnios"], answer: 1, rationale: "A poorly fitting presenting part leaves space for the cord to slip down." },
      { type: "mcq", q: "The FIRST action in any obstetric emergency is to:", options: ["Complete the paperwork", "Call for help and begin resuscitation", "Send the woman home", "Wait to see if it resolves"], answer: 1, rationale: "Summoning help and starting resuscitation are the immediate priorities." }
      , { type: "fill", q: "Descent of the umbilical cord below the presenting part after rupture of membranes is called cord ____.", accept: ["prolapse"], rationale: "Cord prolapse compresses the cord and endangers the baby." }
      , { type: "fill", q: "A tear in the wall of the uterus, often at a previous scar, is called uterine ____.", accept: ["rupture"], rationale: "Uterine rupture is a catastrophic tear of the uterine wall." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "cme-16-operative-birth",
    unit: "Unit 7 · Operative Birth & the Peri-operative Continuum",
    title: "Operative & Assisted Birth: Induction, Augmentation, Forceps, Vacuum & Caesarean",
    readMinutes: 20,
    summary: "Interventions to start, speed or assist birth — induction and augmentation of labour (with the Bishop score), instrumental birth by forceps and vacuum, and caesarean section — with indications, risks, and the midwife's role across the peri-operative continuum.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Induction of labour", p: "Induction of labour is the artificial starting of labour before it begins spontaneously, when continuing the pregnancy poses more risk than birth. Indications include post-term pregnancy, pre-eclampsia, prelabour rupture of membranes, diabetes, and intrauterine growth restriction. Methods include cervical ripening (prostaglandins or a mechanical balloon), artificial rupture of membranes (amniotomy) and an oxytocin infusion." },
      { h: "The Bishop score", p: "The Bishop score assesses how favourable (ready) the cervix is for induction, scoring cervical dilatation, effacement (length), consistency, position and the station of the presenting part. A higher (more favourable) score predicts an easier, more successful induction; a low score suggests cervical ripening is needed first." },
      { h: "Augmentation of labour", p: "Augmentation is the stimulation of a labour that has already started but is progressing too slowly, using amniotomy and/or an oxytocin infusion. It is used only when obstruction has been excluded. The oxytocin infusion must be carefully titrated and the fetal heart continuously monitored, because over-stimulation (hyperstimulation) can cause fetal distress and, rarely, uterine rupture." },
      { h: "Instrumental (assisted vaginal) birth", list: [
        "Forceps — curved blades applied to the fetal head to assist birth.",
        "Vacuum extractor (ventouse) — a cup applied to the fetal head using suction.",
        "Indications — delay in the second stage, fetal distress, maternal exhaustion or a maternal condition needing a shortened second stage.",
        "Conditions must be met — fully dilated cervix, ruptured membranes, engaged head, empty bladder, adequate analgesia and a skilled operator.",
        "Risks — maternal trauma (tears), and fetal marks or injury."
      ] },
      { h: "Caesarean section", p: "Caesarean section is the birth of the baby through an incision in the abdominal and uterine walls. It may be elective (planned) or emergency. Common indications include previous caesarean or uterine surgery, cephalopelvic disproportion/obstructed labour, malpresentation, placenta praevia, severe pre-eclampsia/eclampsia, fetal distress, cord prolapse and failed instrumental birth. As major surgery it carries risks of haemorrhage, infection, thromboembolism, anaesthetic complications and effects on future pregnancies.", figure: {
        caption: "The peri-operative continuum for caesarean birth.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pre-operative, intra-operative and post-operative continuum."><defs><marker id="cmeArr16" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="55" width="150" height="70" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="95" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">PRE-OP</text><text x="95" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">consent, checklist</text><rect x="205" y="55" width="150" height="70" rx="10" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="280" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FDF2F8">INTRA-OP</text><text x="280" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDF2F8">asepsis, theatre</text><rect x="390" y="55" width="150" height="70" rx="10" fill="#F9A8D4" stroke="#831843" stroke-width="2"/><text x="465" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">POST-OP</text><text x="465" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">obs, pain, feeding</text><line x1="170" y1="90" x2="201" y2="90" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr16)"/><line x1="355" y1="90" x2="386" y2="90" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr16)"/></svg>'
      } },
      { h: "The peri-operative continuum", list: [
        "Pre-operative — informed consent, checklist, fasting, IV access, blood tests, catheter, and physical and psychological preparation; safe handover to theatre.",
        "Intra-operative — surgical asepsis, correct positioning, monitoring, teamwork, and readiness to resuscitate the newborn.",
        "Post-operative — observation of vital signs, wound and lochia, pain relief, fluid balance, early mobilisation and thromboprophylaxis, and support to establish breastfeeding after caesarean."
      ] },
      { h: "Midwifery care and referral", p: "The midwife explains procedures, gains informed consent, and provides physical and emotional preparation and support. For induction/augmentation she monitors contractions and the fetal heart closely and watches for hyperstimulation. Instrumental and caesarean births are performed by the appropriate practitioner, but the midwife prepares the woman, assists, cares for the newborn, and gives skilled peri-operative care. After caesarean she monitors recovery, controls pain, watches for haemorrhage, infection and thromboembolism, and actively helps the woman breastfeed and bond with her baby." }
    ],
    references: REF_CME,
    examQuestions: [
      "Define induction and augmentation of labour and give their indications.",
      "What is the Bishop score and why is it used?",
      "Compare forceps and vacuum-assisted birth, including the conditions that must be met.",
      "List the indications for and risks of caesarean section.",
      "Describe the midwife's role across the peri-operative continuum of caesarean birth."
    ],
    assessment: [
      { type: "mcq", q: "Induction of labour means:", options: ["Artificially starting labour before it begins spontaneously", "Speeding up a labour already started", "Stopping labour", "Delivering the placenta"], answer: 0, rationale: "Induction artificially initiates labour; augmentation speeds an established labour." },
      { type: "mcq", q: "The Bishop score assesses the readiness (favourability) of the:", options: ["Uterine fundus", "Placenta", "Cervix for induction", "Fetal lungs"], answer: 2, rationale: "The Bishop score rates cervical favourability for induction." },
      { type: "mcq", q: "Augmentation of labour should only be used after excluding:", options: ["Twin pregnancy", "Obstruction", "Anaemia", "Diabetes"], answer: 1, rationale: "Augmenting an obstructed labour risks uterine rupture, so obstruction must be excluded." },
      { type: "mcq", q: "A vacuum extractor (ventouse) assists birth using a cup applied to the head with:", options: ["Metal blades", "Suction", "Sutures", "A balloon"], answer: 1, rationale: "The ventouse uses suction on a cup applied to the fetal head." },
      { type: "mcq", q: "Which condition must be met before an instrumental vaginal birth?", options: ["Closed cervix", "Fully dilated cervix and engaged head", "High unengaged head", "Intact membranes required"], answer: 1, rationale: "Full dilatation, ruptured membranes and an engaged head are prerequisites." },
      { type: "mcq", q: "Which is an indication for emergency caesarean section?", options: ["Normal progress", "Cord prolapse or fetal distress", "Mild backache", "Braxton Hicks contractions"], answer: 1, rationale: "Cord prolapse and fetal distress are common emergency caesarean indications." },
      { type: "mcq", q: "Over-stimulation of the uterus with oxytocin can cause:", options: ["Slow labour", "Fetal distress and uterine rupture", "Post-term pregnancy", "Reduced contractions"], answer: 1, rationale: "Hyperstimulation reduces fetal oxygenation and can rupture the uterus." },
      { type: "mcq", q: "Pre-operative midwifery care includes:", options: ["Ignoring consent", "Informed consent, checklist and preparation", "Immediate mobilisation only", "Withholding all information"], answer: 1, rationale: "Consent, safety checklist and physical/psychological preparation are pre-op essentials." },
      { type: "mcq", q: "An important post-caesarean complication to watch for is:", options: ["Post-term pregnancy", "Haemorrhage, infection and thromboembolism", "Macrosomia", "Hyperemesis"], answer: 1, rationale: "Bleeding, infection and clots are key risks after caesarean surgery." },
      { type: "mcq", q: "After a caesarean, the midwife should actively help the woman to:", options: ["Avoid her baby", "Stay flat and still for days", "Skip pain relief", "Establish breastfeeding and bond"], answer: 3, rationale: "Supporting breastfeeding and bonding is a key post-caesarean midwifery role." }
      , { type: "fill", q: "The score used to assess cervical favourability before induction is the ____ score.", accept: ["Bishop", "bishop"], rationale: "The Bishop score predicts induction success." }
      , { type: "fill", q: "Birth of the baby through an incision in the abdominal and uterine walls is a ____ section.", accept: ["caesarean", "cesarean", "caesarian"], rationale: "Caesarean section is abdominal delivery." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "cme-17-postnatal-complications",
    unit: "Unit 7 · Operative Birth & the Peri-operative Continuum",
    title: "Postnatal Complications: Puerperal Sepsis, Thromboembolism, Secondary PPH & Perinatal Mental Health",
    readMinutes: 19,
    summary: "Complications of the puerperium — puerperal sepsis, venous thromboembolism, secondary postpartum haemorrhage, and perinatal mental-health problems — with features, management and the midwife's role in recognition and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The puerperium and its dangers", p: "The puerperium is the period of about six weeks after birth during which the body returns towards its non-pregnant state. Although mostly a time of recovery, serious complications can arise — infection, blood clots, delayed bleeding and mental-health problems. Careful postnatal assessment for deviations from normal saves lives." },
      { h: "Puerperal sepsis", p: "Puerperal sepsis is infection of the genital tract occurring after birth, classically presenting with fever, offensive (foul-smelling) lochia, lower abdominal pain, a tender poorly contracted uterus, and a raised pulse. It can progress to septic shock. Predisposing factors include prolonged labour, prolonged rupture of membranes, retained products, operative birth and poor hygiene. Management is prompt antibiotics, resuscitation, and removal of any infected retained tissue." },
      { h: "Venous thromboembolism (VTE)", p: "Pregnancy and the puerperium increase the tendency of blood to clot. Deep vein thrombosis (DVT) presents with a painful, swollen, warm calf; if a clot travels to the lungs (pulmonary embolism) it causes sudden breathlessness, chest pain and collapse — a life-threatening emergency. Risk factors include caesarean birth, immobility, obesity, dehydration and previous clots. Prevention includes early mobilisation, hydration and thromboprophylaxis for at-risk women.", figure: {
        caption: "Danger signs of the puerperium the midwife must recognise.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Puerperal danger signs box."><rect x="20" y="15" width="520" height="170" rx="12" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="280" y="42" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">POSTNATAL DANGER SIGNS — REFER</text><text x="45" y="72" font-family="sans-serif" font-size="12" fill="#7C2D12">• Fever and offensive lochia (sepsis)</text><text x="45" y="98" font-family="sans-serif" font-size="12" fill="#7C2D12">• Heavy or fresh vaginal bleeding (secondary PPH)</text><text x="45" y="124" font-family="sans-serif" font-size="12" fill="#7C2D12">• Painful, swollen, warm calf (DVT)</text><text x="45" y="150" font-family="sans-serif" font-size="12" fill="#7C2D12">• Sudden breathlessness or chest pain (PE)</text><text x="45" y="176" font-family="sans-serif" font-size="12" fill="#7C2D12">• Low mood, anxiety or unusual thoughts (mental health)</text></svg>'
      } },
      { h: "Secondary postpartum haemorrhage", p: "Secondary PPH is abnormal or excessive bleeding from the genital tract between 24 hours and 6 weeks after birth. It is most often caused by retained placental fragments or infection (endometritis). Features are heavier or fresh red bleeding, often with a tender uterus, fever or offensive lochia. Management includes assessment for retained tissue, antibiotics, uterotonics, and evacuation of the uterus if needed." },
      { h: "Perinatal mental health", list: [
        "'Baby blues' — a common, mild, self-limiting low mood in the first days after birth.",
        "Postnatal (postpartum) depression — persistent low mood, tearfulness, loss of interest, guilt and poor bonding, lasting weeks; needs support and treatment.",
        "Postpartum psychosis — a rare but serious emergency with confusion, hallucinations, delusions or risk of harm to self or baby; needs urgent psychiatric referral.",
        "Anxiety disorders are also common."
      ] },
      { h: "Assessment in the postnatal period", list: [
        "Vital signs — temperature, pulse, blood pressure.",
        "Uterine involution and tone; lochia (amount, colour, smell).",
        "Perineum/wound healing; breasts and legs.",
        "Bladder and bowel function; general wellbeing.",
        "Emotional state and mother–baby bonding."
      ] },
      { h: "Midwifery care and referral", p: "The midwife performs systematic postnatal checks, teaches the woman and family the danger signs, and acts promptly on any deviation from normal. She refers women with fever and offensive lochia (sepsis), signs of DVT or breathlessness (thromboembolism), heavy or offensive delayed bleeding (secondary PPH), or significant mental-health concerns. She promotes prevention through hygiene, early mobilisation, hydration and breastfeeding support, listens with compassion about emotional wellbeing, and ensures urgent referral for postpartum psychosis or any risk of harm." },
      { h: "Prevention and health education", list: [
        "Strict hygiene and hand-washing; care of the perineum/wound.",
        "Early mobilisation and adequate hydration to reduce clot risk.",
        "Report fever, heavy or offensive bleeding, calf pain or breathlessness at once.",
        "Talk openly about feelings; seek help for persistent low mood.",
        "Attend postnatal follow-up appointments."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Define the puerperium and list its major complications.",
      "Describe the features and management of puerperal sepsis.",
      "Explain the risk factors, presentation and prevention of venous thromboembolism after birth.",
      "What is secondary postpartum haemorrhage and how is it managed?",
      "Distinguish baby blues, postnatal depression and postpartum psychosis, and the midwife's role."
    ],
    assessment: [
      { type: "mcq", q: "The puerperium is the period after birth of about:", options: ["1 week", "6 weeks", "3 months", "1 year"], answer: 1, rationale: "The puerperium lasts about six weeks as the body returns to the non-pregnant state." },
      { type: "mcq", q: "Puerperal sepsis is infection of the:", options: ["Urinary tract only", "Genital tract after birth", "Respiratory tract", "Breast only"], answer: 1, rationale: "Puerperal sepsis is genital-tract infection following childbirth." },
      { type: "mcq", q: "A classic sign of puerperal sepsis is:", options: ["Sweet-smelling lochia", "Fever with offensive lochia and abdominal pain", "Fresh painless bleeding", "No temperature change"], answer: 1, rationale: "Fever, offensive lochia and a tender uterus suggest puerperal sepsis." },
      { type: "mcq", q: "A painful, swollen, warm calf after birth suggests:", options: ["Deep vein thrombosis", "Mastitis", "Anaemia", "Postnatal depression"], answer: 0, rationale: "These are the classic features of a deep vein thrombosis (DVT)." },
      { type: "mcq", q: "Sudden breathlessness and chest pain in the puerperium may indicate:", options: ["Pulmonary embolism", "Baby blues", "Secondary PPH", "Normal recovery"], answer: 0, rationale: "A pulmonary embolism is a life-threatening cause of sudden breathlessness after birth." },
      { type: "mcq", q: "Secondary postpartum haemorrhage occurs between:", options: ["Birth and 24 hours", "24 hours and 6 weeks after birth", "6 weeks and 3 months", "Only during labour"], answer: 1, rationale: "Secondary PPH occurs from 24 hours up to 6 weeks after birth." },
      { type: "mcq", q: "The commonest cause of secondary PPH is:", options: ["Retained placental fragments or infection", "Twin pregnancy", "Pre-eclampsia", "Hyperemesis"], answer: 0, rationale: "Retained products and endometritis are the usual causes of secondary PPH." },
      { type: "mcq", q: "Postpartum psychosis is best described as a:", options: ["Mild self-limiting low mood", "Rare psychiatric emergency needing urgent referral", "Normal part of the puerperium", "Type of infection"], answer: 1, rationale: "Postpartum psychosis is a serious emergency requiring urgent psychiatric care." },
      { type: "mcq", q: "'Baby blues' are typically:", options: ["Severe and long-lasting", "Mild, common and self-limiting in the first days", "A psychiatric emergency", "A sign of sepsis"], answer: 1, rationale: "Baby blues are common, mild and settle within days without treatment." },
      { type: "mcq", q: "A key preventive measure against thromboembolism after birth is:", options: ["Prolonged bed rest", "Early mobilisation and hydration", "Dehydration", "Avoiding movement"], answer: 1, rationale: "Early mobilisation and good hydration reduce venous stasis and clot risk." }
      , { type: "fill", q: "Genital-tract infection occurring after birth is called puerperal ____.", accept: ["sepsis", "infection"], rationale: "Puerperal sepsis is postnatal genital-tract infection." }
      , { type: "fill", q: "A rare but serious postnatal psychiatric emergency is postpartum ____.", accept: ["psychosis"], rationale: "Postpartum psychosis needs urgent psychiatric referral." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "cme-18-midwife-role-referral",
    unit: "Unit 7 · Operative Birth & the Peri-operative Continuum",
    title: "The Midwife's Role in Complications: Recognition, Initial Management & the Referral Pathway",
    readMinutes: 18,
    summary: "Bringing the course together — the midwife's scope of practice in complications, recognising danger signs, initial (first-line) management and emergency obstetric care, the referral pathway and safe transfer, and communication, documentation and reflection.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Scope of midwifery practice", p: "The midwife is the skilled professional who provides care throughout normal pregnancy, birth and the puerperium, and who is the first to recognise when the maternity experience deviates from normal. In complications her role is to recognise the problem early, begin appropriate initial management within her scope, and refer or consult promptly. Knowing the boundaries of midwifery care — when to act and when to call for help — is a mark of competent, safe practice." },
      { h: "Recognition of danger signs", list: [
        "Antenatal — vaginal bleeding, severe headache/visual disturbance, convulsions, high fever, severe abdominal pain, reduced fetal movements, leaking fluid before term.",
        "Intrapartum — prolonged labour, abnormal fetal heart, meconium, malpresentation, cord prolapse, heavy bleeding.",
        "Postnatal — heavy or offensive bleeding, fever, calf pain or breathlessness, severe low mood or unusual thoughts.",
        "Any sign of shock — pallor, fast weak pulse, low blood pressure, cold clammy skin."
      ] },
      { h: "Initial (first-line) management", list: [
        "Call for help early and stay with the woman.",
        "Rapid assessment — airway, breathing, circulation and level of consciousness.",
        "Treat shock — position, oxygen, IV access, fluids and keep warm.",
        "Specific first steps for the emergency (e.g. uterine massage for PPH; left-lateral position for eclampsia; relieve cord pressure for prolapse).",
        "Monitor vital signs and the fetal heart; record findings and times.",
        "Prepare for transfer and, where relevant, for birth and neonatal resuscitation."
      ] },
      { h: "Emergency obstetric care (EmOC)", p: "Emergency obstetric care is the set of life-saving interventions that treat the major direct causes of maternal death. Basic EmOC includes giving antibiotics, uterotonics and anticonvulsants, manual removal of the placenta, removal of retained products, and assisted vaginal birth. Comprehensive EmOC adds caesarean section and blood transfusion. The midwife's referral pathway aims to get the woman to the right level of EmOC in time." },
      { h: "The referral pathway and safe transfer", list: [
        "Decide to refer promptly — do not delay to 'wait and see' in an emergency.",
        "Communicate with the receiving facility before or during transfer.",
        "Stabilise the woman as far as possible before and during transfer.",
        "Arrange appropriate transport and, ideally, escort by a skilled attendant.",
        "Send a clear referral note with history, findings, treatment given and reason for referral.",
        "Continue monitoring and care throughout the journey."
      ] },
      { h: "Communication and documentation", p: "Clear communication saves lives. A structured handover (for example situation, background, assessment and recommendation) ensures the receiving team quickly understands the woman's condition. Accurate, timed, contemporaneous documentation of assessments, treatments and decisions is a professional and legal duty and supports continuity of care. The midwife also keeps the woman and family informed and involved in decisions.", figure: {
        caption: "The midwife's emergency response chain: recognise, act, refer.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recognise, initial management, refer chain."><defs><marker id="cmeArr18" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="70" width="140" height="60" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="90" y="96" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">RECOGNISE</text><text x="90" y="115" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">danger signs</text><rect x="205" y="70" width="150" height="60" rx="10" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="280" y="92" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FDF2F8">ACT</text><text x="280" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FDF2F8">resuscitate + first steps</text><rect x="400" y="70" width="140" height="60" rx="10" fill="#F9A8D4" stroke="#831843" stroke-width="2"/><text x="470" y="96" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">REFER</text><text x="470" y="115" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">safe transfer to EmOC</text><line x1="160" y1="100" x2="201" y2="100" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr18)"/><line x1="355" y1="100" x2="396" y2="100" stroke="#831843" stroke-width="2.5" marker-end="url(#cmeArr18)"/></svg>'
      } },
      { h: "Partnership, ethics and reflection", p: "Even in an emergency the midwife works in partnership with the woman and family, respecting dignity, consent and confidentiality, and offering honest information and emotional support. After the event she debriefs, supports the woman, and reflects on her own practice — using reflection, case review and mock 'skills and drills' to keep her emergency skills sharp. Woman-centred, evidence-based, collaborative practice underpins safe care in every complication." },
      { h: "Key take-home principles", list: [
        "Most pregnancies are normal — but be alert for the few that are not.",
        "Early recognition and prompt referral prevent maternal and newborn death.",
        "Resuscitate first, then refer; never delay in an emergency.",
        "Communicate clearly and document accurately.",
        "Practise emergency skills regularly and reflect on care."
      ] }
    ],
    references: REF_CME,
    examQuestions: [
      "Describe the midwife's scope of practice when the maternity experience becomes complicated.",
      "List the antenatal, intrapartum and postnatal danger signs a midwife must recognise.",
      "Outline the initial (first-line) management of an obstetric emergency.",
      "Explain the referral pathway and the principles of safe transfer.",
      "Discuss the importance of communication, documentation and reflection in complicated maternity care."
    ],
    assessment: [
      { type: "mcq", q: "The midwife's primary role when a complication arises is to:", options: ["Perform major surgery alone", "Recognise it early, give initial management and refer promptly", "Ignore it until it worsens", "Send the woman home"], answer: 1, rationale: "Recognition, first-line care and timely referral define the midwife's safe role." },
      { type: "mcq", q: "In an obstetric emergency, the correct sequence is generally to:", options: ["Refer first, then assess", "Resuscitate first, then refer", "Document first, then act", "Wait, then reassess in an hour"], answer: 1, rationale: "Stabilising the woman comes first; referral follows without delay." },
      { type: "mcq", q: "Comprehensive emergency obstetric care includes which of these that basic EmOC does not?", options: ["Giving antibiotics", "Caesarean section and blood transfusion", "Uterotonics", "Manual removal of placenta"], answer: 1, rationale: "Comprehensive EmOC adds caesarean section and blood transfusion to basic EmOC." },
      { type: "mcq", q: "A structured handover at referral should mainly ensure the receiving team:", options: ["Is impressed", "Quickly understands the woman's condition and needs", "Does less work", "Delays care"], answer: 1, rationale: "Clear structured communication conveys the situation so care continues seamlessly." },
      { type: "mcq", q: "Which is a general danger sign requiring urgent action in any period?", options: ["Mild tiredness", "Signs of shock (pallor, fast weak pulse, low BP)", "Normal appetite", "Occasional Braxton Hicks"], answer: 1, rationale: "Signs of shock always signal a serious, time-critical problem." },
      { type: "mcq", q: "Before transferring a woman in an emergency, the midwife should:", options: ["Delay to complete all paperwork", "Stabilise her as far as possible and inform the receiving facility", "Send her without any note", "Wait for spontaneous recovery"], answer: 1, rationale: "Stabilisation and advance communication make transfer safer and faster." },
      { type: "mcq", q: "Contemporaneous documentation means recording:", options: ["From memory next week", "At or close to the time events occur", "Only if there is a complaint", "After discharge only"], answer: 1, rationale: "Contemporaneous notes are made at the time, ensuring accuracy and legal validity." },
      { type: "mcq", q: "Mock 'skills and drills' are used to:", options: ["Replace real care", "Keep emergency skills sharp through practice", "Avoid teamwork", "Reduce documentation"], answer: 1, rationale: "Regular drills maintain competence and confidence for real emergencies." },
      { type: "mcq", q: "Even during an emergency, the midwife should still uphold:", options: ["Dignity, consent and confidentiality", "Only speed, ignoring the woman", "Secrecy from the family", "Refusal to explain anything"], answer: 0, rationale: "Respect, consent and confidentiality remain essential even under pressure." },
      { type: "mcq", q: "The overall key principle of complicated maternity care is that:", options: ["All pregnancies are dangerous", "Early recognition and prompt referral prevent deaths", "Referral should always be delayed", "Midwives should work alone"], answer: 1, rationale: "Timely recognition and referral are the heart of preventing maternal and newborn death." }
      , { type: "fill", q: "The life-saving services treating major causes of maternal death are called emergency ____ care (EmOC).", accept: ["obstetric"], rationale: "EmOC is emergency obstetric care." }
      , { type: "fill", q: "In an emergency the midwife should resuscitate first and then ____ the woman promptly.", accept: ["refer", "transfer"], rationale: "Stabilise, then refer without delay." }
    ]
  }
];
