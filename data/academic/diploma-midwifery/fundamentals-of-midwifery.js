/* ============================================================
   Diploma in Midwifery (ICM standard) · DM135 Fundamentals of Midwifery
   — 20 topics. Aligned to the BNMC Diploma in Midwifery syllabus
   (concept & scope of midwifery, the childbearing continuum,
   antenatal care & assessment, normal labour & birth overview,
   newborn & postnatal care, and core practice skills). Grounded
   in standard midwifery texts:
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
     • Macdonald S, Magill-Cuerden J. Mayes' Midwifery. Bailliere Tindall/Elsevier.
     • Jacob A. A Comprehensive Textbook of Midwifery & Gynaecological Nursing. Jaypee Brothers.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_FDM = [
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.",
  "Macdonald S, Magill-Cuerden J. Mayes' Midwifery. Bailliere Tindall/Elsevier.",
  "Jacob A. A Comprehensive Textbook of Midwifery & Gynaecological Nursing. Jaypee Brothers."
];

window.Academic.topics["diploma-midwifery/fundamentals-of-midwifery"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "fdm-01-concept-scope",
    unit: "Unit 1 · Foundations of Midwifery",
    title: "Concept, Philosophy & Scope of Midwifery Care",
    readMinutes: 16,
    summary: "What midwifery is, who a midwife is (ICM definition), the philosophy of woman-centred care, the scope of midwifery practice, and the midwife's roles across the childbearing continuum.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept of midwifery", p: "Midwifery is the skilled, knowledgeable and compassionate care of childbearing women, newborn infants and families across the continuum of preconception, pregnancy, birth, the postnatal period and the early weeks of life. It is a distinct profession built on a partnership between the woman and the midwife, with an emphasis on supporting normal physiological processes and protecting them from unnecessary intervention." },
      { h: "Who is a midwife? (ICM definition)", p: "According to the International Confederation of Midwives (ICM), a midwife is a person who has successfully completed a recognised midwifery education programme, has acquired the requisite qualifications to be registered and/or legally licensed to practise midwifery, and demonstrates competency in the practice of midwifery. The midwife is recognised as a responsible and accountable professional who works in partnership with women." },
      { h: "Philosophy of midwifery care", list: [
        "Pregnancy and birth are normal physiological life events for most women.",
        "Care is woman-centred — the woman is the central decision-maker.",
        "Care is built on partnership, respect, continuity and informed choice.",
        "The midwife promotes, protects and supports normal birth and intervenes only when needed.",
        "Care is holistic — addressing physical, emotional, social, cultural and spiritual needs.",
        "Care is evidence-based, safe and equitable for all women."
      ] },
      { h: "Scope of midwifery practice", p: "The scope defines what a midwife is educated, competent and authorised to do. The midwife provides care during the antenatal, intrapartum and postnatal periods, conducts normal (spontaneous) births on her own responsibility, cares for the newborn, recognises deviations from normal, performs emergency measures, and refers to medical care when complications arise. The scope also includes health promotion, family planning counselling, and community and public-health work for mothers and children." },
      { h: "Roles of the midwife", list: [
        "Care provider — antenatal, intrapartum, postnatal and newborn care.",
        "Health educator — teaching mothers about pregnancy, nutrition, breastfeeding and self-care.",
        "Counsellor — emotional support, family planning and informed choice.",
        "Advocate — protecting the woman's rights, dignity and preferences.",
        "Manager — organising care, records and resources.",
        "Researcher — using and contributing to evidence for practice.",
        "Member of the health team — collaborating with and referring to doctors and other professionals."
      ] },
      { h: "The childbearing continuum", p: "Midwifery care follows a continuum: preconception → pregnancy (antenatal) → labour and birth (intrapartum) → puerperium (postnatal) → early newborn period. Continuity of carer across this continuum improves outcomes and the woman's experience, and is a core value of midwifery.", figure: {
        caption: "The childbearing continuum across which the midwife provides care.",
        svg: '<svg viewBox="0 0 620 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Childbearing continuum: preconception, antenatal, intrapartum, postnatal, newborn."><defs><marker id="fdmArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="10" y="45" width="105" height="42" rx="8" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="62" y="71" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Preconception</text><rect x="135" y="45" width="105" height="42" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="187" y="71" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Antenatal</text><rect x="260" y="45" width="105" height="42" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="312" y="71" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Intrapartum</text><rect x="385" y="45" width="105" height="42" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="437" y="71" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Postnatal</text><rect x="510" y="45" width="100" height="42" rx="8" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="560" y="71" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Newborn</text><line x1="115" y1="66" x2="133" y2="66" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr1)"/><line x1="240" y1="66" x2="258" y2="66" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr1)"/><line x1="365" y1="66" x2="383" y2="66" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr1)"/><line x1="490" y1="66" x2="508" y2="66" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr1)"/></svg>'
      } },
      { h: "Key terms", list: [
        "Woman-centred care — care planned around the individual woman's needs and wishes.",
        "Partnership — a relationship of trust and shared decision-making between woman and midwife.",
        "Continuity of carer — being looked after by the same midwife or small team throughout.",
        "Autonomy — the midwife's professional responsibility to practise within her scope.",
        "Referral — directing the woman to medical or specialist care when a deviation is found."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define midwifery and a midwife according to the ICM. Explain the philosophy of midwifery care.",
      "Describe the scope of midwifery practice with examples.",
      "Discuss the various roles of the midwife in maternity care.",
      "Explain the childbearing continuum and the importance of continuity of carer.",
      "What is woman-centred care? Why is partnership central to midwifery?"
    ],
    assessment: [
      { type: "mcq", q: "According to the ICM, a midwife is best described as a person who has:", options: ["Worked as a nurse for ten years", "Completed a recognised midwifery education programme and is registered/licensed to practise", "Delivered at least 50 babies at home", "Trained as a traditional birth attendant"], answer: 1, rationale: "The ICM defines a midwife by completion of a recognised education programme plus registration/licensure and demonstrated competency." },
      { type: "mcq", q: "The central philosophy of midwifery care is that pregnancy and birth are:", options: ["Always high-risk events", "Diseases needing treatment", "Normal physiological life events for most women", "Best managed only by doctors"], answer: 2, rationale: "Midwifery treats childbearing as a normal physiological process, supporting it and intervening only when needed." },
      { type: "mcq", q: "Which of the following falls WITHIN the normal scope of midwifery practice?", options: ["Performing a caesarean section", "Conducting a normal spontaneous birth on her own responsibility", "Prescribing chemotherapy", "Carrying out major abdominal surgery"], answer: 1, rationale: "The midwife conducts normal births independently; operative deliveries are outside the midwife's scope and require referral." },
      { type: "mcq", q: "'Woman-centred care' means care is planned around:", options: ["The hospital's routine", "The doctor's preference", "The individual woman's needs and wishes", "The cheapest available option"], answer: 2, rationale: "Woman-centred care places the woman and her individual needs and choices at the centre." },
      { type: "mcq", q: "When the midwife detects a deviation from normal, the appropriate action is to:", options: ["Ignore it and continue", "Refer the woman for medical/specialist care", "Send the woman home", "Wait until after the birth"], answer: 1, rationale: "Recognising deviations and referring promptly to medical care is a core midwifery responsibility." },
      { type: "mcq", q: "Being looked after by the same midwife or small team throughout pregnancy and birth is called:", options: ["Continuity of carer", "Task allocation", "Shift work", "Triage"], answer: 0, rationale: "Continuity of carer means care by the same midwife/team across the continuum and improves outcomes and experience." },
      { type: "mcq", q: "Which is NOT one of the recognised roles of the midwife?", options: ["Health educator", "Advocate", "Surgeon performing hysterectomy", "Counsellor"], answer: 2, rationale: "Performing major surgery such as hysterectomy is outside the midwife's role and scope." },
      { type: "mcq", q: "The relationship of trust and shared decision-making between the woman and midwife is termed:", options: ["Supervision", "Partnership", "Delegation", "Hierarchy"], answer: 1, rationale: "Partnership describes the trusting, shared-decision relationship at the heart of midwifery." },
      { type: "mcq", q: "Holistic midwifery care addresses the woman's:", options: ["Physical needs only", "Financial needs only", "Physical, emotional, social, cultural and spiritual needs", "Medical needs only"], answer: 2, rationale: "Holistic care considers the whole person across all dimensions of need." },
      { type: "mcq", q: "The correct order of the childbearing continuum is:", options: ["Postnatal → antenatal → intrapartum", "Preconception → antenatal → intrapartum → postnatal", "Intrapartum → preconception → postnatal", "Antenatal → postnatal → intrapartum"], answer: 1, rationale: "The continuum flows preconception → pregnancy (antenatal) → labour/birth (intrapartum) → postnatal/newborn." }
      , { type: "fill", q: "The professional body that provides the international definition of a midwife is the ____ (abbreviation).", accept: ["ICM", "International Confederation of Midwives"], rationale: "The ICM provides the globally recognised definition of the midwife." }
      , { type: "fill", q: "Care planned around the individual woman's needs and wishes is called ____ care.", accept: ["woman-centred", "woman centred", "woman-centered", "woman centered"], rationale: "Woman-centred care is a foundational principle of midwifery." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "fdm-02-safe-motherhood",
    unit: "Unit 1 · Foundations of Midwifery",
    title: "The Childbearing Continuum & Safe Motherhood",
    readMinutes: 16,
    summary: "The concept of safe motherhood, its pillars, maternal and neonatal mortality, key indicators, and the midwife's contribution to making childbirth safe.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is safe motherhood?", p: "Safe motherhood means ensuring that all women receive the care they need to be safe and healthy throughout pregnancy and childbirth. Its goal is to reduce maternal and newborn death, illness and disability and to give every woman a positive birth experience. The midwife is central to safe motherhood because skilled care at birth is one of the most effective ways to save mothers' and babies' lives." },
      { h: "Why safe motherhood matters", p: "Every day, women die from causes related to pregnancy and childbirth, and many of these deaths are preventable. Most maternal deaths occur during labour, birth and the first 24 hours after birth, so skilled care at this time is critical. Newborn deaths are also concentrated in the first hours and days of life." },
      { h: "Pillars of safe motherhood", list: [
        "Family planning — to space and limit pregnancies and avoid unwanted pregnancy.",
        "Antenatal care — to detect and manage problems early.",
        "Clean and safe delivery (skilled birth attendance) — care by a skilled provider.",
        "Essential / emergency obstetric care — for women who develop complications.",
        "Postnatal and newborn care — care in the days after birth.",
        "Post-abortion care and prevention of unsafe abortion."
      ] },
      { h: "Main causes of maternal death", p: "The leading direct causes of maternal death are severe bleeding (haemorrhage), infection (sepsis), high blood pressure in pregnancy (pre-eclampsia/eclampsia), obstructed labour, and complications of unsafe abortion. Indirect causes include anaemia, malaria, heart disease and other illnesses worsened by pregnancy. Recognising and acting on these is the basis of safe care." },
      { h: "Key maternal and newborn indicators", list: [
        "Maternal Mortality Ratio (MMR) — maternal deaths per 100,000 live births.",
        "Neonatal Mortality Rate (NMR) — newborn deaths in the first 28 days per 1,000 live births.",
        "Infant Mortality Rate (IMR) — deaths under 1 year per 1,000 live births.",
        "Skilled birth attendance rate — proportion of births attended by a skilled provider.",
        "Antenatal care coverage — proportion of women receiving ANC."
      ] },
      { h: "The midwife's contribution to safe motherhood", list: [
        "Provides quality antenatal care and detects problems early.",
        "Attends births as a skilled provider, keeping them clean and safe.",
        "Recognises and manages or refers obstetric and newborn emergencies.",
        "Promotes breastfeeding, immunisation and postnatal care.",
        "Counsels on family planning and birth spacing.",
        "Educates women, families and communities and promotes care-seeking."
      ] },
      { h: "The three delays model", p: "Many preventable deaths happen because of three delays: delay in deciding to seek care, delay in reaching a health facility, and delay in receiving appropriate care once there. Understanding these delays helps the midwife and community plan to overcome them — for example through health education, birth-preparedness plans and timely referral." }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define safe motherhood and explain its importance.",
      "Describe the pillars of safe motherhood.",
      "List the main direct causes of maternal death and how the midwife can help prevent them.",
      "Explain the 'three delays' model with examples.",
      "Define MMR and NMR. How does the midwife contribute to improving these indicators?"
    ],
    assessment: [
      { type: "mcq", q: "The main goal of safe motherhood is to:", options: ["Increase the birth rate", "Reduce maternal and newborn death, illness and disability", "Encourage home births only", "Replace doctors with midwives"], answer: 1, rationale: "Safe motherhood aims to reduce maternal and neonatal mortality and morbidity and ensure a positive experience." },
      { type: "mcq", q: "Which is a pillar of safe motherhood?", options: ["Cosmetic surgery", "Clean and safe delivery (skilled birth attendance)", "Reducing food intake", "Avoiding all hospitals"], answer: 1, rationale: "Clean/safe delivery with a skilled attendant is a core pillar of safe motherhood." },
      { type: "mcq", q: "The single leading direct cause of maternal death worldwide is:", options: ["Severe bleeding (haemorrhage)", "Diabetes", "Backache", "Common cold"], answer: 0, rationale: "Obstetric haemorrhage is the most common direct cause of maternal death globally." },
      { type: "mcq", q: "Maternal Mortality Ratio (MMR) is expressed per:", options: ["1,000 live births", "10,000 population", "100,000 live births", "100 deliveries"], answer: 2, rationale: "MMR is the number of maternal deaths per 100,000 live births." },
      { type: "mcq", q: "Most maternal deaths occur:", options: ["In early pregnancy only", "During labour, birth and the first 24 hours after birth", "Several years after birth", "Before conception"], answer: 1, rationale: "The peak risk period is labour, birth and the immediate postnatal period, making skilled care then vital." },
      { type: "mcq", q: "The 'three delays' model includes delay in deciding to seek care, delay in reaching care, and delay in:", options: ["Paying the bill", "Receiving appropriate care at the facility", "Naming the baby", "Registering the birth"], answer: 1, rationale: "The third delay is in receiving adequate, timely care once the facility is reached." },
      { type: "mcq", q: "Neonatal Mortality Rate (NMR) counts newborn deaths within the first:", options: ["7 days", "28 days", "12 months", "24 hours"], answer: 1, rationale: "NMR counts deaths in the first 28 days of life per 1,000 live births." },
      { type: "mcq", q: "Which midwifery action most directly contributes to safe motherhood?", options: ["Ignoring danger signs", "Attending births as a skilled provider and referring complications", "Discouraging antenatal care", "Avoiding immunisation"], answer: 1, rationale: "Skilled attendance with timely referral is the most powerful midwifery contribution to safe motherhood." },
      { type: "mcq", q: "Family planning contributes to safe motherhood mainly by:", options: ["Increasing the number of pregnancies", "Spacing/limiting pregnancies and reducing unwanted pregnancy", "Replacing antenatal care", "Causing infertility"], answer: 1, rationale: "Family planning spaces and limits pregnancies, lowering exposure to pregnancy-related risk." },
      { type: "mcq", q: "An 'indirect' cause of maternal death is:", options: ["Postpartum haemorrhage", "Eclampsia", "Anaemia worsened by pregnancy", "Obstructed labour"], answer: 2, rationale: "Indirect causes are pre-existing or general conditions (e.g. anaemia, heart disease) aggravated by pregnancy." }
      , { type: "fill", q: "The number of maternal deaths per 100,000 live births is called the maternal mortality ____ (MMR).", accept: ["ratio"], rationale: "MMR is the maternal mortality ratio per 100,000 live births." }
      , { type: "fill", q: "A birth attended by a trained, competent provider is called a ____ birth attendance.", accept: ["skilled"], rationale: "Skilled birth attendance is a key pillar of safe motherhood." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "fdm-03-preconception-care",
    unit: "Unit 1 · Foundations of Midwifery",
    title: "Preconception Care",
    readMinutes: 15,
    summary: "The concept and importance of preconception care, its components, risk assessment, folic acid and lifestyle advice, and the midwife's role in preparing women for a healthy pregnancy.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Preconception care is the care given to a woman (and ideally her partner) before pregnancy to identify and reduce risks to her health and to the health of a future baby. It aims to ensure the woman enters pregnancy in the best possible physical, nutritional and emotional state." },
      { h: "Importance", p: "Many of the events that shape a pregnancy happen in the first weeks, often before a woman knows she is pregnant. Acting before conception — for example by correcting anaemia, controlling diabetes, starting folic acid and stopping harmful habits — can prevent miscarriage, birth defects and complications more effectively than waiting until antenatal care begins." },
      { h: "Components of preconception care", list: [
        "Health assessment and history — medical, surgical, obstetric, family and genetic history.",
        "Risk identification — chronic illness, infections, medications, age, previous pregnancy problems.",
        "Nutrition assessment and advice, including correction of anaemia.",
        "Folic acid supplementation to prevent neural tube defects.",
        "Immunisation review (e.g. rubella, tetanus) before pregnancy.",
        "Lifestyle advice — stopping smoking, alcohol and harmful substances.",
        "Family planning to allow adequate birth spacing.",
        "Counselling and emotional preparation for pregnancy."
      ] },
      { h: "Folic acid", p: "Folic acid taken before conception and in early pregnancy reduces the risk of neural tube defects such as spina bifida. The principle is to begin supplementation at least one month before conception and continue through the first trimester; women with a higher risk (for example a previous affected baby) need a higher dose as advised by a clinician." },
      { h: "Risk groups needing special attention", list: [
        "Women with diabetes, hypertension, heart disease or epilepsy.",
        "Women who are very young or of advanced maternal age.",
        "Women who are underweight, overweight or anaemic.",
        "Women with previous pregnancy loss, stillbirth or a baby with a defect.",
        "Women taking medicines that may harm a fetus.",
        "Women exposed to infections (e.g. rubella) or harmful substances."
      ] },
      { h: "Midwifery/nursing role in preconception care", list: [
        "Raise awareness in the community that care should begin before pregnancy.",
        "Take a thorough history and identify risks early.",
        "Advise on folic acid, nutrition and correction of anaemia.",
        "Counsel on stopping smoking, alcohol and unsafe drugs.",
        "Refer women with chronic illness for stabilisation before pregnancy.",
        "Support birth spacing and family planning.",
        "Provide emotional support and answer the couple's questions."
      ] },
      { h: "Health education points", p: "Key messages for the woman planning pregnancy: eat a balanced, iron- and folate-rich diet; start folic acid before trying to conceive; reach a healthy weight; avoid alcohol, smoking and unprescribed drugs; get chronic conditions under control; and attend for early antenatal care once pregnant." }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define preconception care and explain why it is important.",
      "Describe the components of preconception care.",
      "Explain the role of folic acid in preconception care.",
      "List the groups of women who need special attention before pregnancy.",
      "Discuss the midwife's role in preconception care."
    ],
    assessment: [
      { type: "mcq", q: "Preconception care is care given:", options: ["Before pregnancy", "During labour", "Only after delivery", "Only to newborns"], answer: 0, rationale: "Preconception care is provided before pregnancy to optimise the woman's health and reduce risks." },
      { type: "mcq", q: "Folic acid is recommended before and in early pregnancy mainly to prevent:", options: ["Anaemia only", "Neural tube defects", "Diabetes", "High blood pressure"], answer: 1, rationale: "Folic acid reduces the risk of neural tube defects such as spina bifida." },
      { type: "mcq", q: "Ideally, folic acid supplementation should begin:", options: ["After the baby is born", "Only in the third trimester", "At least one month before conception", "During labour"], answer: 2, rationale: "Starting at least a month before conception ensures adequate levels during early neural tube formation." },
      { type: "mcq", q: "Which woman most needs preconception stabilisation before pregnancy?", options: ["A woman with poorly controlled diabetes", "A healthy 25-year-old", "A woman with no medical history", "A woman who exercises regularly"], answer: 0, rationale: "Chronic conditions such as diabetes should be controlled before pregnancy to reduce risks." },
      { type: "mcq", q: "A key reason preconception care is effective is that:", options: ["Pregnancy lasts only a few weeks", "Critical fetal development happens early, often before pregnancy is recognised", "Babies are born within a month", "It replaces antenatal care entirely"], answer: 1, rationale: "Many decisive developmental events occur in early weeks, so acting beforehand is protective." },
      { type: "mcq", q: "Which is a component of preconception care?", options: ["Conducting the birth", "Newborn resuscitation", "Immunisation review such as rubella status", "Postnatal perineal care"], answer: 2, rationale: "Reviewing and updating immunisation (e.g. rubella) before pregnancy is part of preconception care." },
      { type: "mcq", q: "Appropriate lifestyle advice in preconception care includes:", options: ["Continue smoking", "Skip meals", "Avoid all exercise", "Stop alcohol and smoking"], answer: 3, rationale: "Stopping smoking and alcohol improves pregnancy outcomes and is core lifestyle advice." },
      { type: "mcq", q: "Adequate birth spacing in preconception care is achieved through:", options: ["Avoiding antenatal care", "Family planning", "Bed rest", "Fasting"], answer: 1, rationale: "Family planning enables healthy spacing between pregnancies." },
      { type: "mcq", q: "Correcting which condition before pregnancy reduces risk to mother and baby?", options: ["Good eyesight", "Anaemia", "Tall height", "Normal weight"], answer: 1, rationale: "Anaemia should be detected and corrected before pregnancy to reduce maternal and fetal risk." },
      { type: "mcq", q: "The midwife's FIRST step in preconception care is usually to:", options: ["Perform surgery", "Take a thorough history and identify risks", "Induce labour", "Give an epidural"], answer: 1, rationale: "A careful history identifies the risks that the rest of preconception care will address." }
      , { type: "fill", q: "The vitamin taken before and in early pregnancy to prevent neural tube defects is ____ acid.", accept: ["folic"], rationale: "Folic acid reduces the risk of neural tube defects." }
      , { type: "fill", q: "Care given to a woman before pregnancy to reduce risks is called ____ care.", accept: ["preconception", "pre-conception", "preconceptional"], rationale: "Preconception care prepares the woman for a healthy pregnancy." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "fdm-04-physiology-pregnancy",
    unit: "Unit 2 · Pregnancy & Its Diagnosis",
    title: "Physiology of Normal Pregnancy",
    readMinutes: 17,
    summary: "The maternal physiological adaptations of normal pregnancy across body systems, the role of pregnancy hormones, and how these changes underpin antenatal assessment and the minor disorders of pregnancy.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Pregnancy produces profound but normal adaptations in almost every maternal body system. These changes meet the demands of the growing fetus, prepare the mother for labour and lactation, and protect her own health. Understanding them helps the midwife distinguish normal pregnancy changes from signs of disease." },
      { h: "Reproductive system changes", list: [
        "Uterus enlarges greatly — from about 60 g to around 1,000 g at term — as muscle fibres grow.",
        "Cervix softens (Goodell's sign), becomes bluish from increased vascularity (Chadwick's sign), and a mucus plug (the operculum) forms in the cervical canal.",
        "Vagina becomes more vascular and bluish (Chadwick's sign); secretions increase.",
        "Breasts enlarge, become tender, the areola darkens and Montgomery's tubercles appear."
      ] },
      { h: "Hormones of pregnancy", list: [
        "Human chorionic gonadotrophin (hCG) — maintains the corpus luteum early on; basis of pregnancy tests.",
        "Progesterone — relaxes smooth muscle, maintains the pregnancy and softens tissues.",
        "Oestrogen — promotes uterine and breast growth and increased blood supply.",
        "Human placental lactogen (hPL) — alters maternal metabolism to supply the fetus.",
        "Relaxin — softens ligaments and the pelvic joints.",
        "Prolactin and oxytocin — prepare for and support lactation and uterine contraction."
      ] },
      { h: "Cardiovascular changes", p: "Blood volume rises by about 40–50%, and cardiac output increases to supply the uterus and placenta. Because plasma volume rises more than red cell mass, the haemoglobin concentration falls slightly — the 'physiological anaemia of pregnancy'. Blood pressure tends to fall in mid-pregnancy and returns towards normal near term. In late pregnancy, lying flat can compress the vena cava and cause faintness (supine hypotension)." },
      { h: "Respiratory and metabolic changes", p: "Oxygen demand rises, so tidal volume increases and many women feel mildly breathless. Basal metabolic rate increases. There is a tendency to retain water and to feel warm. Weight increases due to the fetus, placenta, fluid, blood volume, uterus, breasts and fat stores." },
      { h: "Gastrointestinal and urinary changes", list: [
        "Nausea and vomiting are common early (linked to hCG).",
        "Progesterone slows gut motility, causing constipation and heartburn.",
        "The growing uterus and increased blood flow cause more frequent urination, especially early and late in pregnancy.",
        "Kidney filtration increases to clear the products of pregnancy."
      ] },
      { h: "Musculoskeletal and skin changes", p: "Relaxin and the growing abdomen alter posture, causing the characteristic lordosis (curved lower back) and sometimes backache. Pelvic joints loosen in readiness for birth. Skin changes include increased pigmentation — the linea nigra, chloasma (mask of pregnancy) and darkening of the areola — and stretch marks (striae gravidarum)." },
      { h: "Relevance to midwifery care", p: "These normal changes explain many of the symptoms women report and the findings the midwife observes — for example mild breathlessness, a slightly low haemoglobin, frequent urination and skin pigmentation. Recognising them as normal prevents unnecessary alarm, while a change beyond the normal range (e.g. very high blood pressure or severe vomiting) prompts further assessment." }
    ],
    references: REF_FDM,
    examQuestions: [
      "Describe the physiological changes in the reproductive system during pregnancy.",
      "Name the main hormones of pregnancy and state the function of each.",
      "Explain the cardiovascular changes of pregnancy and the physiological anaemia of pregnancy.",
      "Describe the gastrointestinal and urinary changes of pregnancy and relate them to common discomforts.",
      "How does knowledge of normal pregnancy physiology help the midwife distinguish normal from abnormal findings?"
    ],
    assessment: [
      { type: "mcq", q: "The hormone detected by pregnancy tests is:", options: ["Progesterone", "Human chorionic gonadotrophin (hCG)", "Insulin", "Relaxin"], answer: 1, rationale: "hCG is produced by the trophoblast and is the basis of pregnancy testing." },
      { type: "mcq", q: "The slight fall in haemoglobin concentration in normal pregnancy is mainly because:", options: ["The fetus eats red cells", "Plasma volume rises more than red cell mass", "The mother stops making blood", "Iron is no longer needed"], answer: 1, rationale: "Plasma volume increases proportionally more than red cell mass, diluting the haemoglobin (physiological anaemia)." },
      { type: "mcq", q: "Which hormone relaxes smooth muscle and helps maintain the pregnancy?", options: ["Oxytocin", "Adrenaline", "Progesterone", "Thyroxine"], answer: 2, rationale: "Progesterone relaxes smooth muscle, softens tissues and supports the pregnancy." },
      { type: "mcq", q: "The bluish discolouration of the vagina in early pregnancy is called:", options: ["Goodell's sign", "Chadwick's sign", "Linea nigra", "Chloasma"], answer: 1, rationale: "Chadwick's sign is the bluish colour of the vagina/cervix due to increased vascularity." },
      { type: "mcq", q: "Lying flat in late pregnancy can cause faintness due to:", options: ["Low blood sugar", "Compression of the vena cava (supine hypotension)", "Excess oxygen", "High haemoglobin"], answer: 1, rationale: "The heavy uterus compresses the inferior vena cava, reducing venous return and blood pressure." },
      { type: "mcq", q: "Constipation and heartburn in pregnancy are largely due to:", options: ["Increased gut speed", "Progesterone slowing gut motility", "Too much exercise", "Reduced food intake"], answer: 1, rationale: "Progesterone relaxes gut smooth muscle, slowing motility and causing constipation and reflux." },
      { type: "mcq", q: "The dark line that may appear down the middle of the abdomen in pregnancy is the:", options: ["Striae gravidarum", "Linea nigra", "Chadwick's sign", "Operculum"], answer: 1, rationale: "The linea nigra is a pigmented midline of the abdomen caused by increased pigmentation." },
      { type: "mcq", q: "Blood volume in pregnancy increases by approximately:", options: ["5%", "10%", "40–50%", "90%"], answer: 2, rationale: "Total blood volume rises by roughly 40–50% to meet the demands of pregnancy." },
      { type: "mcq", q: "Many pregnant women feel mildly breathless because:", options: ["The lungs shrink", "Oxygen demand rises and tidal volume increases", "They have asthma", "Their heart stops working"], answer: 1, rationale: "Increased oxygen demand raises tidal volume, producing a normal sensation of breathlessness." },
      { type: "mcq", q: "Softening of the cervix in early pregnancy is known as:", options: ["Goodell's sign", "Chadwick's sign", "Hegar's reflex", "Striae"], answer: 0, rationale: "Goodell's sign is the softening of the cervix in early pregnancy." }
      , { type: "fill", q: "The mild fall in haemoglobin caused by plasma dilution in pregnancy is called the physiological ____ of pregnancy.", accept: ["anaemia", "anemia"], rationale: "Plasma expands more than red cell mass, causing physiological anaemia." }
      , { type: "fill", q: "The hormone ____ relaxes ligaments and the pelvic joints in readiness for birth.", accept: ["relaxin"], rationale: "Relaxin softens ligaments and pelvic joints." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "fdm-05-diagnosis-pregnancy",
    unit: "Unit 2 · Pregnancy & Its Diagnosis",
    title: "Diagnosis of Pregnancy (Signs, LMP, EDD, Gravida & Parity)",
    readMinutes: 16,
    summary: "How pregnancy is diagnosed — presumptive, probable and positive signs — the calculation of EDD from the LMP, and the meaning of gravida, parity and related obstetric terms.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Introduction", p: "Diagnosing pregnancy depends on a combination of symptoms reported by the woman, signs found on examination, and tests. The signs are traditionally grouped into presumptive (felt by the woman), probable (found by the examiner) and positive (absolutely certain) signs." },
      { h: "Presumptive (possible) signs", list: [
        "Amenorrhoea — a missed period in a woman of childbearing age.",
        "Nausea and vomiting ('morning sickness').",
        "Breast changes — tenderness, enlargement, darkened areola.",
        "Frequent urination.",
        "Fatigue.",
        "Quickening — the woman's first feeling of fetal movements (felt later)."
      ] },
      { h: "Probable signs", list: [
        "Enlargement of the abdomen and uterus.",
        "Changes in the uterus and cervix — softening (Goodell's), Hegar's sign, Chadwick's sign.",
        "Braxton Hicks contractions (painless practice contractions).",
        "A positive pregnancy test (detecting hCG in urine or blood)."
      ] },
      { h: "Positive (certain) signs", list: [
        "Hearing the fetal heart beat.",
        "Feeling fetal movements by the examiner.",
        "Seeing the fetus and fetal heart on ultrasound."
      ] },
      { h: "LMP and EDD", p: "The Last Menstrual Period (LMP) is the first day of the woman's last normal period. The Expected Date of Delivery (EDD) is usually calculated using Naegele's rule: add 7 days to the first day of the LMP, subtract 3 months, and add 1 year. Pregnancy is counted as about 280 days (40 weeks) from the LMP. Naegele's rule assumes a regular 28-day cycle; ultrasound dating is used to confirm or correct the date.", figure: {
        caption: "Naegele's rule for estimating the Expected Date of Delivery from the LMP.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Naegele rule: LMP plus 7 days minus 3 months plus 1 year equals EDD."><rect x="10" y="50" width="120" height="48" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="70" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">LMP</text><text x="70" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">first day</text><rect x="160" y="50" width="115" height="48" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="217" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">+ 7 days</text><text x="217" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">to the date</text><rect x="305" y="50" width="115" height="48" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="362" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">− 3 months</text><text x="362" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">+ 1 year</text><rect x="450" y="50" width="100" height="48" rx="9" fill="#FDF2F8" stroke="#15803D" stroke-width="2"/><text x="500" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">EDD</text><text x="500" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">due date</text><text x="143" y="78" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#831843">→</text><text x="290" y="78" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#831843">→</text><text x="435" y="78" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#831843">→</text></svg>'
      } },
      { h: "Gravida and parity", list: [
        "Gravida — the number of times a woman has been pregnant, including the current pregnancy (regardless of outcome).",
        "Primigravida — pregnant for the first time.",
        "Multigravida — pregnant two or more times.",
        "Para (parity) — the number of pregnancies carried to a viable gestation (births), whether live or stillborn. Parity counts the number of pregnancies carried to a viable gestation (≥ the age of viability), regardless of the number of babies born in each — so a twin pregnancy delivered counts as parity 1.",
        "Nulligravida — never been pregnant; Nullipara — never given birth to a viable baby.",
        "Grand multipara — has given birth five or more times."
      ] },
      { h: "Worked example", p: "If the LMP is 10 January 2025: add 7 days = 17 January; subtract 3 months = 17 October; add 1 year = 17 October 2025. The EDD is therefore 17 October 2025. The midwife should record the LMP, confirm the woman's cycle is regular, and note that ultrasound may revise the date." },
      { h: "Midwifery role", list: [
        "Take an accurate menstrual and obstetric history.",
        "Confirm the LMP and calculate the EDD.",
        "Perform or arrange a pregnancy test where needed.",
        "Explain findings sensitively and respect the woman's response.",
        "Record gravida and parity correctly for safe care planning."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Classify the signs of pregnancy into presumptive, probable and positive with examples.",
      "State Naegele's rule and calculate the EDD for a given LMP.",
      "Define gravida, parity, primigravida and multipara.",
      "List the positive (certain) signs of pregnancy.",
      "Describe the midwife's role in the diagnosis of pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "Which of the following is a POSITIVE (certain) sign of pregnancy?", options: ["Amenorrhoea", "Nausea", "Hearing the fetal heart beat", "A positive urine pregnancy test"], answer: 2, rationale: "Hearing the fetal heart is a positive sign; amenorrhoea/nausea are presumptive and a positive test is probable." },
      { type: "mcq", q: "Naegele's rule for the EDD is: first day of LMP plus 7 days, then:", options: ["Add 3 months and subtract 1 year", "Subtract 3 months and add 1 year", "Add 9 months exactly", "Subtract 7 months"], answer: 1, rationale: "Naegele's rule: LMP + 7 days − 3 months + 1 year." },
      { type: "mcq", q: "A woman pregnant for the first time is a:", options: ["Multigravida", "Primigravida", "Grand multipara", "Nullipara"], answer: 1, rationale: "Primigravida means pregnant for the first time." },
      { type: "mcq", q: "Parity refers to the number of:", options: ["Times pregnant including now", "Pregnancies carried to a viable gestation (births)", "Living children only", "Antenatal visits"], answer: 1, rationale: "Parity counts pregnancies carried to viability (live or stillborn), not the number of pregnancies." },
      { type: "mcq", q: "Pregnancy is counted as approximately how many weeks from the LMP?", options: ["28 weeks", "32 weeks", "40 weeks", "44 weeks"], answer: 2, rationale: "A term pregnancy is about 280 days, i.e. 40 weeks from the LMP." },
      { type: "mcq", q: "Painless 'practice' contractions felt in pregnancy are called:", options: ["Braxton Hicks contractions", "True labour pains", "Quickening", "Lightening"], answer: 0, rationale: "Braxton Hicks contractions are painless, irregular practice contractions — a probable sign." },
      { type: "mcq", q: "The woman's first awareness of fetal movements is called:", options: ["Lightening", "Quickening", "Engagement", "Effacement"], answer: 1, rationale: "Quickening is the mother's first perception of fetal movements." },
      { type: "mcq", q: "If the LMP is 10 January, by Naegele's rule the EDD is about:", options: ["17 October", "3 October", "10 September", "24 December"], answer: 0, rationale: "10 Jan + 7 days = 17 Jan; − 3 months = 17 Oct (+1 year)." },
      { type: "mcq", q: "A pregnancy test works by detecting:", options: ["Progesterone", "hCG", "Oestrogen", "Glucose"], answer: 1, rationale: "Pregnancy tests detect human chorionic gonadotrophin (hCG)." },
      { type: "mcq", q: "A woman who has given birth five or more times is described as:", options: ["Primipara", "Nullipara", "Grand multipara", "Primigravida"], answer: 2, rationale: "Grand multipara denotes five or more births." }
      , { type: "fill", q: "The rule used to estimate the expected date of delivery from the LMP is ____ rule.", accept: ["Naegele's", "Naegele", "Naegeles", "Nagele's", "Nagele"], rationale: "Naegele's rule estimates the EDD from the first day of the LMP." }
      , { type: "fill", q: "The total number of times a woman has been pregnant, including the present pregnancy, is her ____.", accept: ["gravida", "gravidity"], rationale: "Gravida counts all pregnancies including the current one." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "fdm-06-antenatal-care",
    unit: "Unit 3 · Antenatal Care",
    title: "Antenatal Care & the Antenatal Visit",
    readMinutes: 17,
    summary: "The aims and importance of antenatal care, the schedule of visits, what happens at the booking and follow-up visits, danger signs to teach, and the midwife's role in providing woman-centred ANC.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and aims", p: "Antenatal care (ANC) is the care given to a woman during pregnancy to keep her and her baby healthy, to detect and manage problems early, and to prepare her for birth, breastfeeding and parenthood. It is a key pillar of safe motherhood." },
      { h: "Objectives of antenatal care", list: [
        "Promote and maintain the physical and mental health of mother and baby.",
        "Detect 'high-risk' pregnancies and complications early and refer them.",
        "Prepare the woman for labour, birth and breastfeeding.",
        "Provide health education, including nutrition and danger signs.",
        "Give preventive care — iron/folate, tetanus immunisation, malaria prevention where relevant.",
        "Build a trusting relationship and a birth-preparedness plan."
      ] },
      { h: "Schedule of antenatal visits", p: "Care should start as early as possible. A widely used pattern is the first (booking) visit in the first trimester, then visits roughly every 4 weeks until 28 weeks, every 2 weeks from 28 to 36 weeks, and weekly from 36 weeks to term. Current WHO guidance recommends a minimum of eight contacts for a positive pregnancy experience. The schedule is increased if problems are found." },
      { h: "The booking (first) visit", list: [
        "Full history — personal, menstrual, obstetric, medical, surgical, family and social.",
        "Calculate the EDD and confirm gestation.",
        "Complete physical examination and baseline vital signs.",
        "Baseline investigations — blood group and Rh, haemoglobin, blood sugar, urine, HIV/syphilis and others as indicated.",
        "Risk assessment and a plan of care.",
        "Health education and start of preventive measures (iron/folate, tetanus)."
      ] },
      { h: "Follow-up (return) visits", list: [
        "Ask about well-being, fetal movements and any danger signs.",
        "Check weight, blood pressure and urine (for protein and sugar).",
        "Abdominal examination — fundal height, lie, presentation and fetal heart.",
        "Review investigations and give results.",
        "Continue iron/folate and other preventive care.",
        "Update the birth plan and reinforce health education."
      ] },
      { h: "Danger signs to teach every woman", list: [
        "Vaginal bleeding.",
        "Severe headache, blurred vision or swelling of face/hands (signs of pre-eclampsia).",
        "Reduced or absent fetal movements.",
        "Fever.",
        "Severe abdominal pain.",
        "Draining of fluid from the vagina before labour.",
        "Convulsions (fits)."
      ] },
      { h: "Midwifery role in antenatal care", list: [
        "Provide respectful, woman-centred, continuous care.",
        "Conduct thorough assessment and recognise deviations early.",
        "Educate the woman about pregnancy, nutrition, danger signs and birth preparedness.",
        "Give preventive care and accurate records.",
        "Refer promptly when risk factors or complications appear.",
        "Support emotional well-being and involve the family."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define antenatal care and state its objectives.",
      "Describe the schedule of antenatal visits.",
      "What is done at the booking (first) antenatal visit?",
      "List the danger signs of pregnancy every woman should be taught.",
      "Discuss the role of the midwife in antenatal care."
    ],
    assessment: [
      { type: "mcq", q: "The main purpose of antenatal care is to:", options: ["Increase hospital income", "Keep mother and baby healthy and detect problems early", "Replace the booking visit", "Diagnose pregnancy only"], answer: 1, rationale: "ANC maintains maternal and fetal health and detects and manages problems early." },
      { type: "mcq", q: "Antenatal care should ideally begin:", options: ["As early as possible in pregnancy", "Only at 28 weeks", "Only when labour starts", "After delivery"], answer: 0, rationale: "Early booking allows timely assessment, dating and preventive care." },
      { type: "mcq", q: "The current WHO recommended minimum number of antenatal contacts is:", options: ["Four", "Eight", "Two", "Twelve"], answer: 1, rationale: "WHO recommends a minimum of eight ANC contacts for a positive pregnancy experience." },
      { type: "mcq", q: "Which investigation is part of the booking visit?", options: ["Blood group and Rh", "Newborn hearing test", "Apgar score", "Lochia assessment"], answer: 0, rationale: "Blood group and Rh, haemoglobin, urine and infection screening are baseline booking investigations." },
      { type: "mcq", q: "At every follow-up antenatal visit the midwife routinely checks:", options: ["Liver biopsy", "Blood pressure, weight and urine", "Bone density", "Eye colour"], answer: 1, rationale: "Blood pressure, weight and urinalysis are core routine checks at each visit." },
      { type: "mcq", q: "Severe headache with blurred vision and facial swelling in pregnancy may indicate:", options: ["Normal pregnancy", "Pre-eclampsia", "Hunger", "Quickening"], answer: 1, rationale: "These are warning signs of pre-eclampsia and require urgent assessment." },
      { type: "mcq", q: "From 36 weeks to term, antenatal visits are usually scheduled:", options: ["Every 4 weeks", "Every 2 weeks", "Weekly", "Once only"], answer: 2, rationale: "Visits are weekly from 36 weeks to term in the common schedule." },
      { type: "mcq", q: "Which is a danger sign the woman should report immediately?", options: ["Mild backache", "Vaginal bleeding", "Occasional heartburn", "Tiredness in the evening"], answer: 1, rationale: "Vaginal bleeding is a danger sign needing urgent assessment." },
      { type: "mcq", q: "Preventive care commonly started in antenatal care includes:", options: ["Antibiotics for all", "Iron/folate and tetanus immunisation", "Routine surgery", "Strict bed rest for all"], answer: 1, rationale: "Iron/folate supplementation and tetanus immunisation are standard preventive ANC measures." },
      { type: "mcq", q: "A key midwifery action when a risk factor is detected during ANC is to:", options: ["Continue without change", "Refer promptly for further care", "Stop all visits", "Delay until labour"], answer: 1, rationale: "Recognising risk and referring promptly is essential to safe antenatal care." }
      , { type: "fill", q: "The first comprehensive antenatal visit, when history and baseline tests are done, is called the ____ visit.", accept: ["booking", "first", "initial"], rationale: "The booking (first) visit establishes baseline data and the plan of care." }
      , { type: "fill", q: "Reduced or absent ____ movements is a danger sign that should be reported.", accept: ["fetal", "foetal", "baby's", "baby"], rationale: "Reduced fetal movements may indicate fetal compromise and must be assessed." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "fdm-07-antenatal-assessment",
    unit: "Unit 3 · Antenatal Care",
    title: "Antenatal Assessment: Abdominal Examination & Fetal Assessment",
    readMinutes: 18,
    summary: "How the midwife assesses the pregnant abdomen — inspection, palpation (fundal height, lateral, pelvic), auscultation — together with the terms lie, presentation, position and engagement, and methods of assessing fetal wellbeing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of abdominal examination", p: "Abdominal examination in pregnancy is performed to estimate gestational age, assess fetal growth, determine the lie, presentation and position of the fetus, check whether the head is engaged, and listen to the fetal heart. It is a fundamental midwifery skill carried out gently with the woman's consent and an empty bladder, with privacy and a comfortable position." },
      { h: "Key terms", list: [
        "Lie — the relationship of the long axis of the fetus to that of the uterus (longitudinal, transverse or oblique).",
        "Presentation — the part of the fetus that lies over the pelvic brim (cephalic/head, breech, shoulder).",
        "Presenting part — the lowest part felt on vaginal examination (e.g. the vertex).",
        "Position — the relationship of a chosen point on the presenting part to the maternal pelvis (e.g. left occipito-anterior).",
        "Attitude — the relationship of fetal parts to one another (flexion or extension).",
        "Engagement — when the widest part of the presenting part has passed the pelvic brim."
      ] },
      { h: "Inspection", p: "The midwife first looks at the abdomen, noting its size and shape, the lie suggested by its contour, fetal movements, the skin (linea nigra, striae, scars from previous surgery) and any obvious asymmetry. Inspection guides the palpation that follows." },
      { h: "Palpation", list: [
        "Fundal height — measured to estimate gestation; from about 24 weeks the height in centimetres roughly equals the weeks of gestation.",
        "Fundal palpation — to identify which fetal pole (head or breech) is in the fundus.",
        "Lateral palpation — to locate the fetal back and limbs and confirm the lie.",
        "Pelvic palpation (Pawlik's grip and deep pelvic palpation) — to identify the presenting part and assess engagement."
      ] },
      { h: "Auscultation", p: "The fetal heart is listened to with a Pinard stethoscope or a hand-held Doppler over the fetal back, below the umbilicus in a cephalic presentation. The normal fetal heart rate is about 110–160 beats per minute. Auscultation confirms a live fetus and helps assess wellbeing.", figure: {
        caption: "Steps of antenatal abdominal examination.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Abdominal examination steps: inspection, palpation, auscultation."><defs><marker id="fdmArr7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="45" width="140" height="48" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="90" y="67" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">1. Inspection</text><text x="90" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">look: size, shape</text><rect x="210" y="45" width="140" height="48" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="280" y="67" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">2. Palpation</text><text x="280" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">fundal, lateral, pelvic</text><rect x="400" y="45" width="140" height="48" rx="9" fill="#FDF2F8" stroke="#15803D" stroke-width="2"/><text x="470" y="67" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">3. Auscultation</text><text x="470" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">fetal heart</text><line x1="160" y1="69" x2="206" y2="69" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr7)"/><line x1="350" y1="69" x2="396" y2="69" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr7)"/></svg>'
      } },
      { h: "Assessing fetal wellbeing", list: [
        "Fetal movements — the mother's report of regular movements (kick counts) is a simple indicator.",
        "Fundal height and growth pattern — to detect growth restriction or excess.",
        "Fetal heart rate by auscultation.",
        "Ultrasound scan — for growth, liquor volume and biophysical assessment.",
        "Cardiotocography (CTG) where indicated, in facilities that have it."
      ] },
      { h: "Midwifery care during examination", list: [
        "Explain the procedure and obtain consent; ensure privacy and dignity.",
        "Ask the woman to empty her bladder and lie comfortably (avoid prolonged supine position).",
        "Wash hands and warm them; palpate gently.",
        "Watch the woman's comfort throughout.",
        "Record findings clearly and discuss them with the woman.",
        "Refer if an abnormal lie, growth concern or abnormal fetal heart is found."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Describe the steps of antenatal abdominal examination.",
      "Define lie, presentation, position and engagement.",
      "How is the fetal heart auscultated and what is the normal rate?",
      "Describe the methods of assessing fetal wellbeing in pregnancy.",
      "Outline the midwifery care given to a woman during abdominal examination."
    ],
    assessment: [
      { type: "mcq", q: "The relationship of the long axis of the fetus to the long axis of the uterus is the:", options: ["Position", "Lie", "Attitude", "Presentation"], answer: 1, rationale: "Lie describes the fetal long axis relative to the uterine long axis (longitudinal/transverse/oblique)." },
      { type: "mcq", q: "The part of the fetus lying over the pelvic brim is the:", options: ["Position", "Lie", "Presentation", "Attitude"], answer: 2, rationale: "Presentation is the fetal part overlying the pelvic brim (cephalic, breech, shoulder)." },
      { type: "mcq", q: "From about 24 weeks, the fundal height in centimetres roughly equals the:", options: ["Maternal weight", "Number of weeks of gestation", "Fetal heart rate", "Number of antenatal visits"], answer: 1, rationale: "After ~24 weeks fundal height in cm approximates gestational age in weeks." },
      { type: "mcq", q: "The normal fetal heart rate is approximately:", options: ["60–90 bpm", "110–160 bpm", "180–220 bpm", "40–60 bpm"], answer: 1, rationale: "The normal fetal heart rate range is about 110–160 beats per minute." },
      { type: "mcq", q: "Before abdominal examination the woman should be asked to:", options: ["Drink one litre of water", "Empty her bladder", "Eat a large meal", "Stand for 30 minutes"], answer: 1, rationale: "An empty bladder makes palpation more comfortable and accurate." },
      { type: "mcq", q: "Pawlik's grip is used to:", options: ["Listen to the fetal heart", "Assess the presenting part in the pelvis", "Measure blood pressure", "Inspect the cervix"], answer: 1, rationale: "Pawlik's grip is a pelvic palpation manoeuvre to assess the presenting part and engagement." },
      { type: "mcq", q: "Engagement means the:", options: ["Fetus has died", "Widest part of the presenting part has passed the pelvic brim", "Cervix is fully dilated", "Membranes have ruptured"], answer: 1, rationale: "Engagement is descent of the widest diameter of the presenting part through the pelvic brim." },
      { type: "mcq", q: "Lateral palpation of the abdomen mainly helps to locate the:", options: ["Placenta", "Fetal back and limbs", "Cervix", "Bladder"], answer: 1, rationale: "Lateral palpation identifies the fetal back and small parts (limbs), confirming the lie." },
      { type: "mcq", q: "A simple way the mother can help monitor fetal wellbeing at home is by:", options: ["Taking her own blood pressure", "Counting fetal movements", "Doing an ultrasound", "Measuring fundal height"], answer: 1, rationale: "Counting fetal movements (kick counts) is a simple maternal indicator of wellbeing." },
      { type: "mcq", q: "In a cephalic presentation the fetal heart is best heard:", options: ["Above the umbilicus on the right", "Over the fetal back, below the umbilicus", "Over the maternal heart", "At the fundus only"], answer: 1, rationale: "In cephalic presentation the heart is heard over the fetal back, below the umbilicus." }
      , { type: "fill", q: "The relationship of a chosen point on the presenting part to the maternal pelvis is the fetal ____.", accept: ["position"], rationale: "Position relates a denominator on the presenting part to the maternal pelvis." }
      , { type: "fill", q: "The instrument traditionally used to listen to the fetal heart is the ____ stethoscope.", accept: ["Pinard", "Pinard's", "fetal"], rationale: "The Pinard stethoscope is used to auscultate the fetal heart." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "fdm-08-nutrition-pregnancy",
    unit: "Unit 3 · Antenatal Care",
    title: "Nutrition & Health in Pregnancy",
    readMinutes: 16,
    summary: "The importance of good nutrition in pregnancy, the nutrients of special importance, weight gain, anaemia prevention, food safety, and the midwife's role in nutritional counselling.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Importance of nutrition in pregnancy", p: "Good nutrition supports fetal growth and brain development, maintains maternal health, builds stores for labour and lactation, and reduces the risk of low birth weight, anaemia and birth defects. Poor nutrition is linked to miscarriage, growth restriction, anaemia and complications, so nutritional care is a core part of antenatal care." },
      { h: "A balanced diet in pregnancy", p: "The pregnant woman needs a varied diet containing energy foods (carbohydrates and fats), body-building foods (proteins), and protective foods (fruits and vegetables for vitamins, minerals and fibre), plus adequate fluids. Energy and protein needs increase modestly; the emphasis is on quality and variety rather than 'eating for two'." },
      { h: "Key nutrients of special importance", list: [
        "Iron — to prevent and treat anaemia and meet the increased blood volume; found in meat, liver, green leafy vegetables, pulses.",
        "Folic acid (folate) — to prevent neural tube defects; in green leafy vegetables and given as a supplement.",
        "Calcium and vitamin D — for fetal bones and teeth; in milk, dairy and small fish.",
        "Protein — for growth of maternal and fetal tissues.",
        "Iodine — for fetal brain and thyroid development; use iodised salt.",
        "Vitamin A and C — protective vitamins (vitamin A from food, not high-dose supplements)."
      ] },
      { h: "Weight gain in pregnancy", p: "A steady, healthy weight gain reflects good nutrition and fetal growth. The recommended total gain depends on the woman's pre-pregnancy weight (more for underweight women, less for overweight women). Sudden excessive gain with swelling may suggest fluid retention and should be assessed. Poor or no gain may indicate undernutrition or a growth problem." },
      { h: "Preventing anaemia", list: [
        "Encourage iron-rich foods and foods rich in vitamin C (which aids iron absorption).",
        "Give routine iron and folic acid supplements as per protocol.",
        "Advise taking tea/coffee away from meals, as they reduce iron absorption.",
        "Deworming and malaria prevention where relevant.",
        "Check haemoglobin and treat anaemia promptly."
      ] },
      { h: "Food safety and special advice", list: [
        "Eat freshly cooked, well-washed and well-cooked food to avoid infection.",
        "Avoid alcohol and limit caffeine.",
        "Use iodised salt; avoid excessive salt if advised.",
        "Maintain good hand and food hygiene.",
        "Continue small, frequent meals if nausea or heartburn is a problem."
      ] },
      { h: "Midwifery role in nutrition", list: [
        "Assess the woman's diet, weight and haemoglobin.",
        "Counsel on a balanced, locally available, affordable diet.",
        "Provide and explain iron/folate supplements.",
        "Identify and refer undernutrition, severe anaemia or excessive weight gain.",
        "Respect cultural food practices and involve the family.",
        "Reinforce food safety and danger signs."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Explain the importance of good nutrition in pregnancy.",
      "Describe the key nutrients of special importance in pregnancy and their food sources.",
      "How can anaemia be prevented in pregnancy?",
      "Discuss weight gain in pregnancy and its significance.",
      "Outline the midwife's role in nutritional counselling of a pregnant woman."
    ],
    assessment: [
      { type: "mcq", q: "The nutrient most important for preventing neural tube defects is:", options: ["Iron", "Folic acid", "Calcium", "Vitamin C"], answer: 1, rationale: "Folic acid prevents neural tube defects such as spina bifida." },
      { type: "mcq", q: "Iron in the diet is mainly needed in pregnancy to:", options: ["Build bones", "Prevent and treat anaemia", "Improve eyesight", "Aid digestion"], answer: 1, rationale: "Iron meets the increased blood volume and prevents/treats anaemia." },
      { type: "mcq", q: "Which substance, taken with meals, reduces iron absorption?", options: ["Vitamin C", "Tea and coffee", "Lemon juice", "Water"], answer: 1, rationale: "Tannins in tea and coffee reduce iron absorption, so they are best taken away from meals." },
      { type: "mcq", q: "Vitamin C is encouraged in the diet because it:", options: ["Blocks iron absorption", "Aids the absorption of iron", "Causes anaemia", "Reduces protein"], answer: 1, rationale: "Vitamin C enhances absorption of dietary (non-haem) iron." },
      { type: "mcq", q: "To prevent iodine deficiency in pregnancy, the woman should use:", options: ["Extra sugar", "Iodised salt", "More tea", "Less water"], answer: 1, rationale: "Iodised salt supplies iodine needed for fetal brain and thyroid development." },
      { type: "mcq", q: "'Protective foods' in the diet refer mainly to:", options: ["Rice and bread", "Oil and butter", "Fruits and vegetables", "Sugar"], answer: 2, rationale: "Fruits and vegetables provide vitamins, minerals and fibre — the protective foods." },
      { type: "mcq", q: "Recommended weight gain in pregnancy depends mainly on the woman's:", options: ["Height only", "Pre-pregnancy weight", "Blood group", "Age of partner"], answer: 1, rationale: "Recommended gain varies with pre-pregnancy weight/BMI category." },
      { type: "mcq", q: "Sudden excessive weight gain with swelling in late pregnancy may indicate:", options: ["Good nutrition", "Fluid retention needing assessment", "Twin pregnancy only", "Normal appetite"], answer: 1, rationale: "Rapid gain with oedema may reflect fluid retention (e.g. pre-eclampsia) and needs assessment." },
      { type: "mcq", q: "Which advice is correct for a pregnant woman with nausea?", options: ["Eat one large meal a day", "Take small, frequent meals", "Skip breakfast", "Fast until evening"], answer: 1, rationale: "Small, frequent meals help reduce nausea and maintain intake." },
      { type: "mcq", q: "Calcium and vitamin D in pregnancy are mainly needed for:", options: ["Fetal bones and teeth", "Eye colour", "Hair growth only", "Reducing blood volume"], answer: 0, rationale: "Calcium and vitamin D support fetal bone and tooth development and maternal bone health." }
      , { type: "fill", q: "Routine supplements given in pregnancy to prevent anaemia and neural tube defects are ____ and folic acid.", accept: ["iron"], rationale: "Iron and folic acid are the standard routine antenatal supplements." }
      , { type: "fill", q: "Foods rich in protein are sometimes called ____-building foods.", accept: ["body", "body-building"], rationale: "Proteins are the body-building foods needed for tissue growth." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "fdm-09-minor-disorders",
    unit: "Unit 3 · Antenatal Care",
    title: "Minor Disorders (Common Discomforts) of Pregnancy",
    readMinutes: 16,
    summary: "The common minor discomforts of pregnancy by system, their physiological causes, simple relief measures, and how the midwife distinguishes them from danger signs.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are minor disorders?", p: "Minor disorders of pregnancy are common discomforts that arise from the normal physiological and hormonal changes of pregnancy. They are not dangerous in themselves, but they cause distress and can occasionally mask or resemble serious conditions, so the midwife must advise relief while remaining alert to danger signs." },
      { h: "Nausea and vomiting ('morning sickness')", p: "Common in early pregnancy and linked to rising hCG. Relief: small frequent meals, dry carbohydrate (e.g. a biscuit) before rising, avoiding fatty or strong-smelling foods, plenty of fluids. Severe, persistent vomiting with weight loss and dehydration (hyperemesis gravidarum) is NOT minor and needs referral." },
      { h: "Digestive discomforts", list: [
        "Heartburn — due to progesterone relaxing the cardiac sphincter; relief: small frequent meals, avoid spicy/fatty food, sit up after eating, antacids if prescribed.",
        "Constipation — due to slowed gut motility and iron; relief: more fluids, fibre, fruit and gentle exercise.",
        "Excess salivation and altered taste — reassurance.",
        "Flatulence — small meals, avoid gas-forming foods."
      ] },
      { h: "Circulatory discomforts", list: [
        "Varicose veins and leg swelling — due to pressure of the uterus and progesterone; relief: avoid prolonged standing, elevate legs, supportive stockings.",
        "Haemorrhoids — relief: avoid constipation, local measures.",
        "Fainting/dizziness — avoid lying flat and standing up quickly; eat regularly.",
        "Leg cramps — stretching, adequate calcium and hydration."
      ] },
      { h: "Urinary and musculoskeletal discomforts", list: [
        "Frequency of micturition — due to pressure on the bladder; reassurance, but rule out infection if pain or burning.",
        "Backache — due to posture and relaxin; relief: good posture, correct lifting, gentle exercise, supportive shoes.",
        "Pelvic girdle pain — supportive measures and physiotherapy advice."
      ] },
      { h: "Other discomforts", list: [
        "Breast tenderness — supportive well-fitting bra.",
        "Fatigue — rest and adequate sleep, especially early and late pregnancy.",
        "Insomnia — comfortable position (left side), relaxation.",
        "Itching of the skin — mild is common; widespread severe itching needs assessment (may indicate liver problems)."
      ] },
      { h: "Distinguishing minor from serious", p: "The midwife must always ask herself whether a complaint is a normal minor disorder or a sign of something serious. For example, mild ankle swelling is common, but swelling of the face and hands with headache suggests pre-eclampsia; mild itching is common, but severe widespread itching needs assessment. When in doubt, assess fully and refer." },
      { h: "Midwifery role", list: [
        "Listen, take the discomfort seriously and reassure the woman.",
        "Explain the cause in simple terms.",
        "Advise safe, non-pharmacological relief first.",
        "Avoid unnecessary medicines; give only those prescribed/permitted.",
        "Recognise and refer when a 'minor' complaint may be serious.",
        "Document the complaint and the advice given."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define minor disorders of pregnancy and explain why they occur.",
      "Describe the causes and relief of nausea, heartburn and constipation in pregnancy.",
      "List the circulatory discomforts of pregnancy and their management.",
      "How does the midwife distinguish a minor disorder from a danger sign? Give examples.",
      "Outline the midwife's role in managing the minor disorders of pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "Minor disorders of pregnancy are mainly caused by:", options: ["Serious disease", "Normal physiological and hormonal changes", "Poor hygiene only", "Always infection"], answer: 1, rationale: "Minor disorders arise from the normal physiological/hormonal adaptations of pregnancy." },
      { type: "mcq", q: "Heartburn in pregnancy is mainly due to:", options: ["Increased gut speed", "Progesterone relaxing the cardiac sphincter", "Eating too little", "High haemoglobin"], answer: 1, rationale: "Progesterone relaxes the lower oesophageal (cardiac) sphincter, allowing reflux." },
      { type: "mcq", q: "Severe, persistent vomiting with dehydration and weight loss in pregnancy is called:", options: ["Morning sickness", "Hyperemesis gravidarum", "Heartburn", "Pica"], answer: 1, rationale: "Hyperemesis gravidarum is severe vomiting that is NOT minor and needs referral." },
      { type: "mcq", q: "Appropriate first advice for constipation in pregnancy is:", options: ["More fluids, fibre and gentle exercise", "Strong laxatives for all", "Less water", "Bed rest"], answer: 0, rationale: "Increasing fluids, fibre and activity is the safe first-line approach." },
      { type: "mcq", q: "Which finding is NOT a minor disorder and requires urgent assessment?", options: ["Mild ankle swelling", "Occasional heartburn", "Swelling of face and hands with headache", "Mild backache"], answer: 2, rationale: "Facial/hand swelling with headache suggests pre-eclampsia — a danger sign, not minor." },
      { type: "mcq", q: "Relief for varicose veins in pregnancy includes:", options: ["Standing for long periods", "Elevating the legs and avoiding prolonged standing", "Crossing the legs tightly", "Wearing tight garters"], answer: 1, rationale: "Leg elevation and avoiding prolonged standing reduce venous pooling." },
      { type: "mcq", q: "Frequency of micturition in early pregnancy is mainly due to:", options: ["Infection always", "Pressure on the bladder and increased blood flow", "Dehydration", "Diabetes always"], answer: 1, rationale: "Pressure from the uterus and increased renal blood flow cause frequency; burning/pain suggests infection." },
      { type: "mcq", q: "Backache in pregnancy is largely caused by:", options: ["Posture changes and relaxin loosening joints", "Low blood pressure", "Too much sleep", "Vitamin C excess"], answer: 0, rationale: "Altered posture and relaxin-induced joint laxity cause backache." },
      { type: "mcq", q: "Severe, widespread itching in late pregnancy should be:", options: ["Ignored as always normal", "Assessed, as it may indicate a liver problem", "Treated only with perfume", "Managed by fasting"], answer: 1, rationale: "Widespread severe itching can signal obstetric cholestasis and needs assessment." },
      { type: "mcq", q: "The midwife's first approach to a minor disorder should be to:", options: ["Prescribe strong drugs", "Reassure and advise safe non-drug relief", "Admit to hospital", "Stop antenatal visits"], answer: 1, rationale: "Reassurance and safe non-pharmacological measures are first-line for minor disorders." }
      , { type: "fill", q: "Severe vomiting in pregnancy with dehydration and weight loss is called hyperemesis ____.", accept: ["gravidarum"], rationale: "Hyperemesis gravidarum is severe pregnancy vomiting requiring referral." }
      , { type: "fill", q: "Nausea and vomiting in early pregnancy is commonly called ____ sickness.", accept: ["morning"], rationale: "Morning sickness is the common term for early-pregnancy nausea and vomiting." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "fdm-10-vital-signs",
    unit: "Unit 4 · Core Practice Skills",
    title: "Vital Signs & Physical Assessment in Pregnancy",
    readMinutes: 17,
    summary: "The four vital signs and their normal ranges, correct measurement of temperature, pulse, respiration and blood pressure, urinalysis, and the relevance of these observations to the pregnant woman.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are vital signs?", p: "Vital signs are the basic measurements that show how the body's vital functions are working: temperature, pulse, respiration and blood pressure (often abbreviated TPR and BP). They are a core midwifery practice skill, taken at every antenatal visit and frequently in labour and after birth, and are the first indicators of a change in the woman's condition." },
      { h: "Temperature", p: "Body temperature reflects the balance between heat produced and heat lost. The normal oral temperature is about 36.1–37.2°C (around 37°C). It can be measured orally, in the axilla or using a tympanic or digital thermometer. A raised temperature (pyrexia) may indicate infection — important after rupture of membranes or after birth. The midwife reads, records and acts on the result." },
      { h: "Pulse", p: "The pulse is the wave of blood felt over an artery (usually the radial) each time the heart beats. It is counted for a full minute, noting rate, rhythm and volume. The normal adult resting pulse is about 60–100 beats per minute; in pregnancy it tends to be slightly higher. A fast, weak pulse may signal bleeding or shock — a key warning sign in obstetrics." },
      { h: "Respiration", p: "Respiration is the act of breathing — one breath is one inspiration plus one expiration. It is counted unobtrusively for a full minute, noting rate, depth and rhythm. The normal adult rate is about 12–20 breaths per minute. Pregnancy increases oxygen demand, so a mild rise is normal; a marked rise may indicate distress." },
      { h: "Blood pressure", p: "Blood pressure (BP) is the force of blood against the artery walls, recorded as systolic over diastolic (e.g. 120/80 mmHg). It is measured with the woman seated and rested, using the correct cuff size. In pregnancy, BP usually falls in mid-pregnancy and rises towards term. A BP of 140/90 mmHg or more is significant and, with protein in the urine, suggests pre-eclampsia. Correct, repeated measurement is therefore essential.", figure: {
        caption: "Approximate normal adult ranges for the four vital signs.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal vital sign ranges table."><rect x="15" y="15" width="530" height="32" fill="#831843"/><text x="280" y="36" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">Normal Vital Sign Ranges (adult)</text><rect x="15" y="47" width="265" height="28" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="66" font-family="sans-serif" font-size="12" fill="#831843">Temperature</text><rect x="280" y="47" width="265" height="28" fill="#FDF2F8" stroke="#BE185D"/><text x="290" y="66" font-family="sans-serif" font-size="12" fill="#831843">36.1–37.2 °C (~37 °C)</text><rect x="15" y="75" width="265" height="28" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="94" font-family="sans-serif" font-size="12" fill="#831843">Pulse</text><rect x="280" y="75" width="265" height="28" fill="#FDF2F8" stroke="#BE185D"/><text x="290" y="94" font-family="sans-serif" font-size="12" fill="#831843">60–100 beats/min</text><rect x="15" y="103" width="265" height="28" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="122" font-family="sans-serif" font-size="12" fill="#831843">Respiration</text><rect x="280" y="103" width="265" height="28" fill="#FDF2F8" stroke="#BE185D"/><text x="290" y="122" font-family="sans-serif" font-size="12" fill="#831843">12–20 breaths/min</text><rect x="15" y="131" width="265" height="28" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="150" font-family="sans-serif" font-size="12" fill="#831843">Blood pressure</text><rect x="280" y="131" width="265" height="28" fill="#FDF2F8" stroke="#BE185D"/><text x="290" y="150" font-family="sans-serif" font-size="12" fill="#831843">~120/80 mmHg</text></svg>'
      } },
      { h: "Urinalysis", p: "Testing the urine is a quick, important antenatal check, usually with a dipstick on a fresh midstream specimen. The midwife looks for protein (which with raised BP suggests pre-eclampsia), glucose (which may suggest gestational diabetes), ketones (suggesting poor intake or vomiting), and signs of infection (nitrites, leucocytes). Findings are recorded and acted upon." },
      { h: "Principles of accurate measurement", list: [
        "Explain the procedure and gain consent.",
        "Wash hands; use clean, working, correctly calibrated equipment.",
        "Ensure the woman is rested and in the correct position.",
        "Use the right technique and the correct cuff/thermometer.",
        "Count pulse and respiration for a full minute.",
        "Record accurately and immediately, and report abnormal findings."
      ] },
      { h: "Why vital signs matter in midwifery", p: "Vital signs are an early-warning system. A rising pulse with falling BP may mean haemorrhage; a high BP with proteinuria may mean pre-eclampsia; a raised temperature may mean infection. Regular, accurate observation allows the midwife to detect deterioration early and act or refer promptly — central to safe maternity care." }
    ],
    references: REF_FDM,
    examQuestions: [
      "Name the four vital signs and state their normal adult ranges.",
      "Describe the correct method of taking blood pressure in a pregnant woman.",
      "What does the midwife look for on urinalysis and why?",
      "Explain how vital signs act as an early-warning system in midwifery.",
      "List the principles of accurate measurement of vital signs."
    ],
    assessment: [
      { type: "mcq", q: "The four vital signs are temperature, pulse, respiration and:", options: ["Weight", "Blood pressure", "Height", "Urine output"], answer: 1, rationale: "The four classic vital signs are temperature, pulse, respiration and blood pressure." },
      { type: "mcq", q: "The normal adult resting pulse rate is about:", options: ["20–40 bpm", "60–100 bpm", "110–160 bpm", "150–200 bpm"], answer: 1, rationale: "The normal adult resting pulse is approximately 60–100 beats per minute." },
      { type: "mcq", q: "A blood pressure of 140/90 mmHg or more in pregnancy is significant because it may indicate:", options: ["Normal pregnancy", "Pre-eclampsia (especially with proteinuria)", "Low blood volume", "Dehydration only"], answer: 1, rationale: "BP ≥140/90 mmHg, particularly with proteinuria, suggests pre-eclampsia." },
      { type: "mcq", q: "Pulse and respiration should each be counted for:", options: ["10 seconds", "15 seconds", "30 seconds", "A full minute"], answer: 3, rationale: "Counting for a full minute improves accuracy, especially if the rate is irregular." },
      { type: "mcq", q: "Protein in the urine together with a raised blood pressure suggests:", options: ["Gestational diabetes", "Pre-eclampsia", "Anaemia", "Normal findings"], answer: 1, rationale: "Proteinuria with hypertension is a hallmark of pre-eclampsia." },
      { type: "mcq", q: "The normal adult respiratory rate is approximately:", options: ["4–6 breaths/min", "12–20 breaths/min", "30–40 breaths/min", "50–60 breaths/min"], answer: 1, rationale: "The normal adult respiratory rate is about 12–20 breaths per minute." },
      { type: "mcq", q: "Glucose found in the urine during pregnancy may suggest:", options: ["Infection", "Gestational diabetes", "Anaemia", "Dehydration"], answer: 1, rationale: "Glycosuria may indicate gestational diabetes and warrants further testing." },
      { type: "mcq", q: "A fast, weak pulse with falling blood pressure in obstetrics most suggests:", options: ["Good health", "Haemorrhage/shock", "Normal labour", "Constipation"], answer: 1, rationale: "Tachycardia with hypotension is a classic warning of bleeding and shock." },
      { type: "mcq", q: "The normal oral body temperature is about:", options: ["34 °C", "37 °C", "39 °C", "41 °C"], answer: 1, rationale: "Normal oral temperature is around 37 °C (36.1–37.2 °C)." },
      { type: "mcq", q: "Blood pressure should be measured with the woman:", options: ["Running on the spot", "Seated and rested, with the correct cuff size", "Lying flat for one hour first", "Standing for ten minutes"], answer: 1, rationale: "BP is measured when rested and seated, using a correctly sized cuff, for accuracy." }
      , { type: "fill", q: "Blood pressure is recorded as systolic over ____ pressure.", accept: ["diastolic"], rationale: "BP is written as systolic/diastolic, e.g. 120/80 mmHg." }
      , { type: "fill", q: "The presence of ____ in the urine with raised blood pressure is a key sign of pre-eclampsia.", accept: ["protein", "proteinuria"], rationale: "Proteinuria with hypertension indicates pre-eclampsia." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "fdm-11-infection-prevention",
    unit: "Unit 4 · Core Practice Skills",
    title: "Infection Prevention & Control",
    readMinutes: 16,
    summary: "The principles of infection prevention and control in maternity care, the chain of infection, standard (universal) precautions, the use of personal protective equipment, and safe handling of sharps and waste.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why infection prevention matters in midwifery", p: "Childbirth carries a real risk of infection for both mother and baby — for example puerperal sepsis and neonatal infection, which are important causes of maternal and newborn death. Infection prevention and control (IPC) protects the woman, her baby, the midwife and others. It is one of the most basic and powerful safe-motherhood practices." },
      { h: "The chain of infection", p: "Infection spreads through a 'chain' with six links: the infectious agent (germ), a reservoir (where it lives), a portal of exit, a mode of transmission, a portal of entry, and a susceptible host. IPC works by breaking this chain — for example, hand hygiene interrupts transmission, and asepsis blocks the portal of entry.", figure: {
        caption: "The chain of infection — breaking any link prevents spread.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of infection: agent, reservoir, exit, transmission, entry, host."><defs><marker id="fdmArr11" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#831843"/></marker></defs><rect x="10" y="55" width="80" height="40" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="50" y="79" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Agent</text><rect x="100" y="55" width="80" height="40" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="140" y="79" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Reservoir</text><rect x="190" y="55" width="80" height="40" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="230" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Portal of</text><text x="230" y="86" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">exit</text><rect x="280" y="55" width="90" height="40" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="325" y="79" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Transmission</text><rect x="380" y="55" width="80" height="40" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="420" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Portal of</text><text x="420" y="86" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">entry</text><rect x="470" y="55" width="80" height="40" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="510" y="79" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Host</text><line x1="90" y1="75" x2="98" y2="75" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr11)"/><line x1="180" y1="75" x2="188" y2="75" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr11)"/><line x1="270" y1="75" x2="278" y2="75" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr11)"/><line x1="370" y1="75" x2="378" y2="75" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr11)"/><line x1="460" y1="75" x2="468" y2="75" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr11)"/><text x="280" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">Break any link → prevent infection</text></svg>'
      } },
      { h: "Standard (universal) precautions", p: "Standard precautions are a set of practices used for ALL women and all body fluids, whether or not an infection is known, on the assumption that any blood or body fluid may be infectious. They protect both the woman and the health worker and are the foundation of IPC in maternity care." },
      { h: "Key elements of standard precautions", list: [
        "Hand hygiene before and after every contact.",
        "Use of personal protective equipment (PPE) — gloves, apron/gown, mask and eye protection as needed.",
        "Safe handling and disposal of sharps.",
        "Safe handling, cleaning and disinfection of equipment.",
        "Proper segregation and disposal of clinical waste.",
        "Decontamination of surfaces and spills.",
        "Safe management of linen."
      ] },
      { h: "Levels of decontamination", list: [
        "Cleaning — physical removal of dirt and organic matter (always the first step).",
        "Disinfection — reduces the number of micro-organisms (e.g. high-level disinfection of instruments).",
        "Sterilisation — destroys all micro-organisms including spores (e.g. by autoclave), used for instruments that enter sterile body areas."
      ] },
      { h: "Sharps and waste safety", list: [
        "Never recap needles by two hands; use a sharps container immediately.",
        "Dispose of sharps in a puncture-proof, sealed container.",
        "Segregate waste (general vs infectious/clinical) by colour-coded bins.",
        "Report any needle-stick injury at once and follow post-exposure protocol."
      ] },
      { h: "Midwifery responsibilities in IPC", list: [
        "Practise hand hygiene and standard precautions consistently.",
        "Keep the birth environment and equipment clean and, where needed, sterile.",
        "Apply aseptic technique for births, examinations and procedures.",
        "Protect the newborn (clean cord care, clean hands before handling).",
        "Recognise signs of infection in mother and baby and act early.",
        "Teach the woman and family hygiene and danger signs."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Explain why infection prevention and control is important in maternity care.",
      "Describe the chain of infection and how it can be broken.",
      "What are standard (universal) precautions? List their key elements.",
      "Differentiate between cleaning, disinfection and sterilisation.",
      "Describe safe handling and disposal of sharps and clinical waste."
    ],
    assessment: [
      { type: "mcq", q: "Standard (universal) precautions are applied:", options: ["Only to known infected women", "To all women and all body fluids", "Only in the operating theatre", "Only after birth"], answer: 1, rationale: "Standard precautions treat all blood/body fluids as potentially infectious for every woman." },
      { type: "mcq", q: "Breaking the chain of infection by hand hygiene mainly interrupts the:", options: ["Susceptible host", "Mode of transmission", "Infectious agent's genes", "Portal of exit only"], answer: 1, rationale: "Hand hygiene chiefly interrupts transmission between reservoir and host." },
      { type: "mcq", q: "The process that destroys ALL micro-organisms including spores is:", options: ["Cleaning", "Disinfection", "Sterilisation", "Rinsing"], answer: 2, rationale: "Sterilisation (e.g. autoclaving) destroys all micro-organisms, including spores." },
      { type: "mcq", q: "The FIRST step before disinfection or sterilisation is always:", options: ["Cleaning", "Drying only", "Wrapping", "Labelling"], answer: 0, rationale: "Cleaning removes organic matter so that disinfection/sterilisation can work." },
      { type: "mcq", q: "After use, a needle should be:", options: ["Recapped with two hands", "Placed in a puncture-proof sharps container", "Left on the trolley", "Put in the general bin"], answer: 1, rationale: "Used sharps go directly into a puncture-proof container to prevent injury." },
      { type: "mcq", q: "Personal protective equipment (PPE) includes:", options: ["Stethoscope only", "Gloves, apron/gown, mask and eye protection", "Patient notes", "A thermometer"], answer: 1, rationale: "PPE comprises gloves, gowns/aprons, masks and eye protection as needed." },
      { type: "mcq", q: "A common serious infection of the mother after childbirth is:", options: ["Puerperal sepsis", "Hay fever", "Common cold", "Conjunctivitis only"], answer: 0, rationale: "Puerperal sepsis is a major postpartum infection and cause of maternal death." },
      { type: "mcq", q: "Disinfection differs from sterilisation in that disinfection:", options: ["Destroys all spores", "Reduces micro-organisms but may not kill all spores", "Is only for skin", "Is the same as cleaning"], answer: 1, rationale: "Disinfection reduces micro-organisms but does not reliably destroy spores." },
      { type: "mcq", q: "Clinical (infectious) waste should be:", options: ["Mixed with general waste", "Segregated into colour-coded bins and disposed of safely", "Burned in the open ward", "Left uncovered"], answer: 1, rationale: "Infectious waste must be segregated and disposed of by the correct route." },
      { type: "mcq", q: "After a needle-stick injury the midwife should FIRST:", options: ["Ignore it", "Report it at once and follow the post-exposure protocol", "Continue working only", "Wait until the next day"], answer: 1, rationale: "Immediate reporting and following the post-exposure protocol protect the worker." }
      , { type: "fill", q: "The set of precautions used for ALL women regardless of known infection status is called ____ precautions.", accept: ["standard", "universal", "standard (universal)"], rationale: "Standard (universal) precautions apply to all patients and body fluids." }
      , { type: "fill", q: "The process that destroys all micro-organisms including spores, often by autoclave, is ____.", accept: ["sterilisation", "sterilization"], rationale: "Sterilisation destroys all micro-organisms including spores." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "fdm-12-hand-hygiene-asepsis",
    unit: "Unit 4 · Core Practice Skills",
    title: "Hand Hygiene & Aseptic Technique",
    readMinutes: 15,
    summary: "Hand hygiene as the single most important infection-control measure — the WHO Five Moments, methods and steps of handwashing and hand rubbing, gloving and gowning, and the principles of asepsis in midwifery.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Importance of hand hygiene", p: "Hand hygiene is the single most important and effective measure to prevent the spread of infection in health care. The hands of carers are the main route by which germs are carried from one person or surface to another. In maternity care, clean hands protect the woman from puerperal infection and the vulnerable newborn from serious infection." },
      { h: "WHO 'Five Moments' for hand hygiene", list: [
        "Before touching a patient.",
        "Before a clean/aseptic procedure.",
        "After body fluid exposure risk.",
        "After touching a patient.",
        "After touching the patient's surroundings."
      ] },
      { h: "Methods of hand hygiene", p: "There are two main methods: (1) handwashing with soap and running water, used when hands are visibly soiled or after contact with body fluids; and (2) hand rubbing with an alcohol-based hand rub, used when hands are not visibly dirty, which is quicker and effective for routine decontamination. A surgical scrub (longer, more thorough) is used before operative procedures." },
      { h: "Steps of effective handwashing", list: [
        "Wet hands with running water and apply soap.",
        "Rub palms together, then palm over the back of each hand.",
        "Interlace fingers and rub between them.",
        "Rub the backs of the fingers, then each thumb.",
        "Rub the fingertips in the palm of the other hand.",
        "Rinse, then dry thoroughly with a clean towel; turn off the tap with the towel.",
        "The whole process should take about 40–60 seconds."
      ] },
      { h: "Gloving and gowning", p: "Sterile gloves are worn for births and aseptic procedures to protect the woman from the midwife's hand flora and to protect the midwife from body fluids. Gowning and gloving must keep the sterile surfaces sterile — the midwife touches glove-to-glove and gown-to-gown only. Gloves are NOT a substitute for hand hygiene: hands are cleaned before gloving and after removing gloves." },
      { h: "Principles of aseptic technique", list: [
        "Asepsis means the absence of disease-causing micro-organisms; aseptic technique aims to prevent their introduction.",
        "Sterile to sterile only — a sterile item touched by a non-sterile item is no longer sterile.",
        "Keep sterile fields in view and above waist level; never turn your back on them.",
        "Open packs without contaminating the contents.",
        "Use a 'no-touch' technique where possible.",
        "If in doubt about sterility, discard and start again."
      ] },
      { h: "Application in midwifery", p: "Aseptic technique is used for conducting births, vaginal examinations, perineal repair, cord care of the newborn, catheterisation, and any procedure entering a sterile area. Clean hands and asepsis at birth are central to clean delivery and to preventing puerperal and neonatal sepsis." },
      { h: "Midwifery responsibilities", list: [
        "Perform hand hygiene at the Five Moments, every time.",
        "Choose the correct method (wash vs rub vs surgical scrub).",
        "Maintain short clean nails; remove rings and watches.",
        "Don and remove gloves correctly; never reuse single-use gloves.",
        "Set up and maintain a sterile field correctly.",
        "Role-model and teach hand hygiene to students, mothers and families."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Why is hand hygiene the single most important infection-control measure?",
      "State the WHO Five Moments for hand hygiene.",
      "Describe the steps of effective handwashing.",
      "Differentiate handwashing, hand rubbing and the surgical scrub.",
      "Explain the principles of aseptic technique and their application in midwifery."
    ],
    assessment: [
      { type: "mcq", q: "The single most important measure to prevent the spread of infection is:", options: ["Hand hygiene", "Wearing a mask", "Taking antibiotics", "Closing windows"], answer: 0, rationale: "Hand hygiene is the single most effective measure against cross-infection." },
      { type: "mcq", q: "Which is one of the WHO Five Moments for hand hygiene?", options: ["Before going home only", "Before a clean/aseptic procedure", "Once per shift", "Only after lunch"], answer: 1, rationale: "'Before a clean/aseptic procedure' is one of the WHO Five Moments." },
      { type: "mcq", q: "When hands are visibly soiled, the correct method is:", options: ["Alcohol hand rub only", "Wiping on the gown", "Handwashing with soap and running water", "Doing nothing"], answer: 2, rationale: "Visibly soiled hands must be washed with soap and water, not just hand-rubbed." },
      { type: "mcq", q: "Effective handwashing should take approximately:", options: ["5 seconds", "5 minutes", "40–60 seconds", "15 minutes"], answer: 2, rationale: "The recommended handwash takes about 40–60 seconds." },
      { type: "mcq", q: "Wearing gloves:", options: ["Replaces hand hygiene", "Does NOT replace hand hygiene", "Means hands never need washing", "Is only for cleaning floors"], answer: 1, rationale: "Gloves are not a substitute for hand hygiene; hands are cleaned before and after gloving." },
      { type: "mcq", q: "Asepsis means:", options: ["Presence of many germs", "Absence of disease-causing micro-organisms", "A type of antibiotic", "A surgical instrument"], answer: 1, rationale: "Asepsis is the absence of disease-causing micro-organisms." },
      { type: "mcq", q: "A key rule of maintaining a sterile field is:", options: ["Turn your back to it to protect it", "Sterile touches sterile only", "Place it below waist level", "Leave packs open for hours"], answer: 1, rationale: "Only sterile items may touch sterile items; contact with non-sterile breaks sterility." },
      { type: "mcq", q: "Alcohol-based hand rub is appropriate when hands are:", options: ["Visibly dirty", "Not visibly soiled", "Covered in blood", "Wet with body fluid"], answer: 1, rationale: "Hand rub is used when hands are not visibly soiled; washing is needed otherwise." },
      { type: "mcq", q: "A longer, more thorough hand cleaning before operative procedures is the:", options: ["Routine hand rub", "Social wash", "Dry wipe", "Surgical scrub"], answer: 3, rationale: "The surgical scrub is the thorough hand antisepsis used before operative procedures." },
      { type: "mcq", q: "If a midwife is in doubt about whether an item is still sterile, she should:", options: ["Discard it and start again", "Use it anyway", "Wipe it on her gown", "Ask the woman to decide"], answer: 0, rationale: "If sterility is in doubt, the item is considered contaminated and must be discarded." }
      , { type: "fill", q: "The absence of disease-causing micro-organisms is called ____.", accept: ["asepsis", "aseptic"], rationale: "Asepsis is the absence of pathogenic micro-organisms." }
      , { type: "fill", q: "The WHO framework summarising when to clean hands is the Five ____ for hand hygiene.", accept: ["Moments", "Moment"], rationale: "The WHO 'Five Moments' guide the timing of hand hygiene." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "fdm-13-normal-labour",
    unit: "Unit 5 · Birth, Newborn & Postnatal Fundamentals",
    title: "Principles of Normal Labour & Birth (Overview)",
    readMinutes: 18,
    summary: "An overview of normal labour — its definition and onset, the three (or four) stages, the factors of labour (powers, passage, passenger, position, psyche), signs of labour, and the midwife's role in supporting normal birth.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of normal labour", p: "Labour is the process by which the products of conception (the fetus, placenta and membranes) are expelled from the uterus after the age of viability. Normal (physiological) labour is labour that begins spontaneously at term (37–42 weeks), with the fetus in a cephalic (head-down) presentation, progresses without complication, and ends in the spontaneous vaginal birth of a healthy baby and the safe delivery of the placenta." },
      { h: "Signs that labour is beginning", list: [
        "Regular, painful uterine contractions that increase in strength, length and frequency.",
        "A 'show' — the blood-stained mucus plug from the cervix.",
        "Rupture of the membranes ('breaking of the waters').",
        "Progressive dilatation and effacement (thinning) of the cervix on examination.",
        "Sometimes a backache or low abdominal discomfort beforehand."
      ] },
      { h: "True versus false labour", p: "In true labour, contractions are regular, grow stronger and closer together, are felt in the back and abdomen, and cause progressive cervical dilatation. In false labour (Braxton Hicks), contractions are irregular, do not increase, are felt mainly in the lower abdomen, and do not dilate the cervix. The midwife distinguishes the two by assessment over time." },
      { h: "The stages of labour", list: [
        "First stage — from the onset of regular contractions to full dilatation of the cervix (10 cm); has a latent phase (slow early dilatation) and an active phase.",
        "Second stage — from full dilatation to the birth of the baby.",
        "Third stage — from the birth of the baby to delivery of the placenta and membranes.",
        "Fourth stage (sometimes counted) — the first 1–2 hours after delivery, a period of close observation."
      ], figure: {
        caption: "The stages of normal labour.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of labour: first, second, third, fourth."><defs><marker id="fdmArr13" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="10" y="40" width="125" height="52" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="72" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">1st stage</text><text x="72" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">onset → full dilatation</text><rect x="150" y="40" width="125" height="52" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="212" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">2nd stage</text><text x="212" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">full dil. → birth</text><rect x="290" y="40" width="125" height="52" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="352" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">3rd stage</text><text x="352" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">birth → placenta</text><rect x="430" y="40" width="120" height="52" rx="8" fill="#FDF2F8" stroke="#15803D" stroke-width="2"/><text x="490" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">4th stage</text><text x="490" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">1–2 h observation</text><line x1="135" y1="66" x2="148" y2="66" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr13)"/><line x1="275" y1="66" x2="288" y2="66" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr13)"/><line x1="415" y1="66" x2="428" y2="66" stroke="#831843" stroke-width="2.5" marker-end="url(#fdmArr13)"/></svg>'
      } },
      { h: "Factors of labour — the 'P's", list: [
        "Powers — the uterine contractions and, in the second stage, maternal pushing.",
        "Passage — the bony pelvis and the soft tissues through which the baby passes.",
        "Passenger — the fetus, especially the size, lie, presentation and position of the head.",
        "Position — the woman's position, which influences comfort and progress.",
        "Psyche — the woman's emotional state, support and confidence."
      ] },
      { h: "Monitoring progress and wellbeing", p: "During labour the midwife monitors the mother (contractions, pulse, BP, temperature, bladder, hydration and emotional state) and the fetus (fetal heart rate, liquor). Progress is assessed by the descent of the head and the dilatation of the cervix, often charted on a partograph in facilities that use one. Deviations from normal prompt action or referral." },
      { h: "Midwifery support in normal birth", list: [
        "Provide continuous, kind, reassuring presence and emotional support.",
        "Encourage mobility, upright positions, hydration and emptying the bladder.",
        "Offer non-pharmacological comfort measures and respect the woman's choices.",
        "Monitor mother and fetus and keep accurate records.",
        "Conduct a clean, controlled birth and support the perineum.",
        "Recognise deviations early and refer or summon help promptly."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define normal labour and list the signs that labour is beginning.",
      "Differentiate between true and false labour.",
      "Describe the stages of labour.",
      "Explain the factors of labour (the 'P's).",
      "Outline the midwife's role in supporting a woman through normal labour."
    ],
    assessment: [
      { type: "mcq", q: "Normal labour begins spontaneously at:", options: ["Less than 28 weeks", "Term (37–42 weeks)", "After 43 weeks always", "Any time before 30 weeks"], answer: 1, rationale: "Normal labour starts spontaneously at term, i.e. 37–42 weeks of gestation." },
      { type: "mcq", q: "The first stage of labour ends with:", options: ["Birth of the baby", "Full dilatation of the cervix (10 cm)", "Delivery of the placenta", "Rupture of membranes"], answer: 1, rationale: "The first stage runs from onset of labour to full cervical dilatation (10 cm)." },
      { type: "mcq", q: "The third stage of labour is from the birth of the baby to:", options: ["Full dilatation", "Delivery of the placenta and membranes", "The first feed", "Discharge home"], answer: 1, rationale: "The third stage covers the birth of the baby to delivery of the placenta and membranes." },
      { type: "mcq", q: "The blood-stained mucus plug passed at the onset of labour is called the:", options: ["Liquor", "Show", "Lochia", "Caput"], answer: 1, rationale: "The 'show' is the blood-stained cervical mucus plug, a sign of approaching labour." },
      { type: "mcq", q: "In TRUE labour, contractions:", options: ["Are irregular and fade", "Become regular, stronger and cause cervical dilatation", "Are felt only in the lower abdomen and do nothing", "Stop with walking"], answer: 1, rationale: "True-labour contractions are regular, intensify and produce progressive cervical dilatation." },
      { type: "mcq", q: "Among the 'P' factors of labour, 'passenger' refers to the:", options: ["Uterine contractions", "Bony pelvis", "Fetus", "Woman's emotions"], answer: 2, rationale: "'Passenger' is the fetus — its size, lie, presentation and position." },
      { type: "mcq", q: "The 'powers' of labour are mainly the:", options: ["Maternal pelvis", "Uterine contractions (and maternal pushing in the 2nd stage)", "Fetal heart", "Membranes"], answer: 1, rationale: "The powers are the uterine contractions plus maternal effort in the second stage." },
      { type: "mcq", q: "Progress in the first stage of labour is mainly assessed by:", options: ["Fetal weight", "Cervical dilatation and descent of the head", "Maternal age", "Number of antenatal visits"], answer: 1, rationale: "Cervical dilatation and descent of the presenting part indicate progress." },
      { type: "mcq", q: "The chart often used to monitor progress of labour is the:", options: ["Apgar chart", "Partograph", "Growth chart", "Immunisation card"], answer: 1, rationale: "The partograph is used to record and monitor the progress of labour." },
      { type: "mcq", q: "A key element of midwifery support in normal labour is:", options: ["Leaving the woman alone", "Continuous, kind presence and emotional support", "Insisting she lie flat throughout", "Withholding fluids"], answer: 1, rationale: "Continuous supportive presence improves comfort, progress and experience in labour." }
      , { type: "fill", q: "The stage of labour from full dilatation to the birth of the baby is the ____ stage.", accept: ["second", "2nd"], rationale: "The second stage runs from full dilatation to the birth of the baby." }
      , { type: "fill", q: "The chart used to monitor the progress of labour over time is the ____.", accept: ["partograph", "partogram"], rationale: "The partograph records progress and wellbeing in labour." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "fdm-14-newborn-care",
    unit: "Unit 5 · Birth, Newborn & Postnatal Fundamentals",
    title: "Immediate Care of the Newborn",
    readMinutes: 17,
    summary: "The essential newborn care given at birth — establishing breathing, warmth and the Apgar score, cord care, early breastfeeding, eye and vitamin K care, identification, and the danger signs of the newborn.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Aims of immediate newborn care", p: "Immediate newborn care aims to help the baby adapt safely to life outside the womb: to establish and maintain breathing, keep the baby warm, prevent infection, support early bonding and breastfeeding, and detect any problems early. The first minutes and hours are critical and are a core midwifery responsibility." },
      { h: "Essential steps at birth", list: [
        "Dry the baby thoroughly and remove the wet cloth (drying also stimulates breathing).",
        "Keep the baby warm — skin-to-skin contact with the mother and a cap; maintain the 'warm chain'.",
        "Assess breathing; most babies cry and breathe with drying and stimulation.",
        "Clamp and cut the cord with a sterile instrument after delaying clamping where appropriate.",
        "Place the baby skin-to-skin and initiate breastfeeding within the first hour.",
        "Carry out identification, weighing and a brief examination at an appropriate time."
      ] },
      { h: "The Apgar score", p: "The Apgar score is a quick assessment of the newborn's condition at 1 minute and 5 minutes after birth. It scores five signs — heart rate, respiratory effort, muscle tone, reflex response, and colour — each from 0 to 2, giving a total out of 10. A higher score indicates better condition; a low score guides the need for resuscitation and continued support.", figure: {
        caption: "The five components of the Apgar score (each scored 0–2).",
        svg: '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apgar score components table."><rect x="15" y="12" width="530" height="30" fill="#831843"/><text x="280" y="32" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">APGAR Score (each sign 0–2, total /10)</text><rect x="15" y="42" width="380" height="25" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="60" font-family="sans-serif" font-size="11" fill="#831843">A — Appearance (colour)</text><rect x="395" y="42" width="150" height="25" fill="#FDF2F8" stroke="#BE185D"/><text x="405" y="60" font-family="sans-serif" font-size="11" fill="#831843">0 / 1 / 2</text><rect x="15" y="67" width="380" height="25" fill="#FDF2F8" stroke="#BE185D"/><text x="25" y="85" font-family="sans-serif" font-size="11" fill="#831843">P — Pulse (heart rate)</text><rect x="395" y="67" width="150" height="25" fill="#FCE7F3" stroke="#BE185D"/><text x="405" y="85" font-family="sans-serif" font-size="11" fill="#831843">0 / 1 / 2</text><rect x="15" y="92" width="380" height="25" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="110" font-family="sans-serif" font-size="11" fill="#831843">G — Grimace (reflex response)</text><rect x="395" y="92" width="150" height="25" fill="#FDF2F8" stroke="#BE185D"/><text x="405" y="110" font-family="sans-serif" font-size="11" fill="#831843">0 / 1 / 2</text><rect x="15" y="117" width="380" height="25" fill="#FDF2F8" stroke="#BE185D"/><text x="25" y="135" font-family="sans-serif" font-size="11" fill="#831843">A — Activity (muscle tone)</text><rect x="395" y="117" width="150" height="25" fill="#FCE7F3" stroke="#BE185D"/><text x="405" y="135" font-family="sans-serif" font-size="11" fill="#831843">0 / 1 / 2</text><rect x="15" y="142" width="380" height="25" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="160" font-family="sans-serif" font-size="11" fill="#831843">R — Respiration (effort)</text><rect x="395" y="142" width="150" height="25" fill="#FDF2F8" stroke="#BE185D"/><text x="405" y="160" font-family="sans-serif" font-size="11" fill="#831843">0 / 1 / 2</text></svg>'
      } },
      { h: "Maintaining warmth (the warm chain)", p: "Newborns lose heat quickly and can become dangerously cold (hypothermia). The 'warm chain' keeps the baby warm: a warm birth room, immediate drying, skin-to-skin contact, a cap, delayed bathing, warm transport, and keeping mother and baby together. Hypothermia increases the risk of illness and death, so warmth is a priority." },
      { h: "Cord care, eye care and vitamin K", list: [
        "Cut the cord with a clean/sterile blade; tie or clamp it; keep the cord stump clean and dry.",
        "Avoid applying harmful substances to the cord (use chlorhexidine where recommended).",
        "Give eye care/prophylaxis as per local protocol to prevent eye infection.",
        "Give vitamin K to prevent haemorrhagic disease of the newborn, as per protocol.",
        "Watch the cord for redness, discharge or bleeding (signs of infection)."
      ] },
      { h: "Early breastfeeding and bonding", p: "Skin-to-skin contact immediately after birth keeps the baby warm, calms mother and baby, and supports breastfeeding. The first breastfeed should be encouraged within the first hour; the first milk (colostrum) is rich in protective factors. Early, exclusive breastfeeding protects the newborn from infection and supports bonding." },
      { h: "Newborn danger signs", list: [
        "Not breathing or gasping; fast or difficult breathing.",
        "Too cold or too hot.",
        "Poor feeding or not feeding.",
        "Lethargy, floppiness or convulsions.",
        "Yellow skin (jaundice) appearing early or severe.",
        "Redness, pus or bleeding at the cord; fever."
      ] },
      { h: "Midwifery responsibilities", list: [
        "Provide essential newborn care promptly and gently.",
        "Assess with the Apgar score and be ready to resuscitate.",
        "Maintain the warm chain and prevent infection.",
        "Support immediate skin-to-skin contact and early breastfeeding.",
        "Examine the baby, give prophylaxis and identification.",
        "Teach the mother newborn care and danger signs; record all care."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Describe the essential steps of immediate newborn care at birth.",
      "Explain the Apgar score and its five components.",
      "What is the 'warm chain' and why is it important?",
      "Describe cord care, eye care and vitamin K for the newborn.",
      "List the danger signs of the newborn that the mother should be taught."
    ],
    assessment: [
      { type: "mcq", q: "The Apgar score is assessed at:", options: ["1 minute and 5 minutes after birth", "Birth and at 1 hour", "Only at discharge", "Daily for a week"], answer: 0, rationale: "The Apgar score is taken at 1 minute and 5 minutes after birth (and repeated if low)." },
      { type: "mcq", q: "The Apgar score assesses heart rate, respiratory effort, muscle tone, reflex response and:", options: ["Weight", "Colour (appearance)", "Length", "Head circumference"], answer: 1, rationale: "The five Apgar signs are heart rate, respiration, tone, reflex and colour." },
      { type: "mcq", q: "The FIRST step of essential newborn care after birth is usually to:", options: ["Bathe the baby", "Give a bottle feed", "Dry the baby thoroughly and keep it warm", "Weigh the baby immediately"], answer: 2, rationale: "Drying and keeping the baby warm (and stimulating breathing) come first." },
      { type: "mcq", q: "The chain of practices that keeps a newborn warm is called the:", options: ["Cold chain", "Food chain", "Supply chain", "Warm chain"], answer: 3, rationale: "The 'warm chain' is the series of measures preventing newborn hypothermia." },
      { type: "mcq", q: "Vitamin K is given to the newborn mainly to prevent:", options: ["Jaundice", "Haemorrhagic disease of the newborn (bleeding)", "Infection of the eye", "Low blood sugar"], answer: 1, rationale: "Vitamin K prevents vitamin K deficiency bleeding (haemorrhagic disease of the newborn)." },
      { type: "mcq", q: "The first breastfeed should ideally be initiated:", options: ["After 24 hours", "Within the first hour of birth", "Only after the first bath", "After 3 days"], answer: 1, rationale: "Early initiation within the first hour supports warmth, bonding and breastfeeding." },
      { type: "mcq", q: "The first milk, rich in protective factors, is called:", options: ["Foremilk", "Colostrum", "Hindmilk", "Formula"], answer: 1, rationale: "Colostrum is the protective first milk produced in the early days." },
      { type: "mcq", q: "Which is a newborn DANGER sign?", options: ["Crying when hungry", "Fast or difficult breathing", "Passing urine", "Sleeping after a feed"], answer: 1, rationale: "Fast or difficult breathing is a serious newborn danger sign." },
      { type: "mcq", q: "Skin-to-skin contact after birth helps mainly by:", options: ["Cooling the baby", "Keeping the baby warm and supporting breastfeeding", "Replacing vitamin K", "Cleaning the cord"], answer: 1, rationale: "Skin-to-skin contact maintains warmth and promotes early breastfeeding and bonding." },
      { type: "mcq", q: "Correct cord care includes:", options: ["Keeping the stump clean and dry", "Applying soil or ash", "Covering it tightly with a wet cloth", "Pulling on it daily"], answer: 0, rationale: "The cord stump should be kept clean and dry; harmful substances must be avoided." }
      , { type: "fill", q: "The quick newborn assessment scored at 1 and 5 minutes is the ____ score.", accept: ["Apgar", "APGAR"], rationale: "The Apgar score assesses the newborn at 1 and 5 minutes." }
      , { type: "fill", q: "The protective first breast milk produced in the early days is called ____.", accept: ["colostrum"], rationale: "Colostrum is the antibody-rich first milk." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "fdm-15-puerperium",
    unit: "Unit 5 · Birth, Newborn & Postnatal Fundamentals",
    title: "Normal Puerperium & Postnatal Care",
    readMinutes: 17,
    summary: "The normal puerperium and its physiological changes (involution, lochia, lactation), the components and schedule of postnatal care, postnatal danger signs, and the midwife's role in caring for mother and baby after birth.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "The puerperium (postnatal period) is the time from the delivery of the placenta until the maternal body has largely returned to its non-pregnant state, traditionally about six weeks. It is a period of major physical and emotional adjustment, of bonding and establishing feeding, and a time when serious complications can arise — so good postnatal care is essential." },
      { h: "Involution of the uterus", p: "Involution is the return of the uterus to its non-pregnant size and position. After birth the uterus contracts; the fundus is felt at about the level of the umbilicus and descends roughly one finger-breadth (about 1 cm) each day, becoming a pelvic organ by about the tenth to twelfth day. A poorly contracted uterus (subinvolution) may bleed and is assessed by the midwife." },
      { h: "Lochia", list: [
        "Lochia is the discharge from the uterus after birth.",
        "Lochia rubra — red, for the first few days (blood and tissue).",
        "Lochia serosa — pinkish-brown, in the following days.",
        "Lochia alba — whitish/yellow, in the later days to weeks.",
        "Offensive-smelling, heavy or persistently red lochia may indicate infection or retained tissue and needs assessment."
      ] },
      { h: "Other normal changes", list: [
        "Lactation — milk 'comes in' after the first days; breastfeeding stimulates supply.",
        "Afterpains — cramping as the uterus contracts, especially during feeding.",
        "Diuresis and sweating — the body excretes the extra fluid of pregnancy.",
        "Gradual return of the abdominal wall and pelvic floor tone.",
        "Emotional changes — 'baby blues' are common and usually settle; persistent low mood may be postnatal depression."
      ] },
      { h: "Components of postnatal care", list: [
        "Assess the mother — vital signs, uterine involution, lochia, perineum/wound, breasts, bladder and bowels.",
        "Assess the baby — feeding, warmth, breathing, cord, colour (jaundice), weight and danger signs.",
        "Support and observe breastfeeding.",
        "Health education — hygiene, nutrition, rest, danger signs, baby care and immunisation.",
        "Family planning counselling.",
        "Emotional support and screening for low mood."
      ] },
      { h: "Schedule and danger signs", p: "Postnatal contacts should occur soon after birth and continue over the following days and weeks (for example within the first 24 hours, around day 3, around days 7–14, and at about 6 weeks). Maternal danger signs include heavy or offensive bleeding, fever, severe headache, calf pain/swelling, breast pain with fever, and signs of severe low mood. These require prompt assessment and referral." },
      { h: "Midwifery role in the puerperium", list: [
        "Provide regular postnatal assessment of mother and baby.",
        "Support successful breastfeeding and bonding.",
        "Detect and act on complications such as haemorrhage, sepsis and depression.",
        "Educate the mother on self-care, baby care and danger signs.",
        "Counsel on family planning and birth spacing.",
        "Ensure immunisation and follow-up are arranged; keep clear records."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define the puerperium and describe involution of the uterus.",
      "Describe the types of lochia and what an abnormal lochia might indicate.",
      "List the components of postnatal care of the mother and baby.",
      "State the postnatal danger signs in the mother.",
      "Discuss the role of the midwife during the puerperium."
    ],
    assessment: [
      { type: "mcq", q: "The puerperium traditionally lasts about:", options: ["1 week", "6 weeks", "6 months", "1 year"], answer: 1, rationale: "The puerperium is traditionally about six weeks, until the body returns to its non-pregnant state." },
      { type: "mcq", q: "Involution refers to the:", options: ["Growth of the uterus", "Return of the uterus to its non-pregnant size", "Production of milk", "Onset of labour"], answer: 1, rationale: "Involution is the return of the uterus to its pre-pregnant size and position." },
      { type: "mcq", q: "After birth, the uterine fundus descends approximately:", options: ["One finger-breadth (about 1 cm) per day", "5 cm per day", "It rises each day", "It does not change"], answer: 0, rationale: "The fundus descends roughly one finger-breadth (about 1 cm) per day during involution." },
      { type: "mcq", q: "The red lochia in the first few days after birth is called lochia:", options: ["Alba", "Serosa", "Rubra", "Nigra"], answer: 2, rationale: "Lochia rubra is the red discharge of the first few days." },
      { type: "mcq", q: "Offensive-smelling, heavy lochia after birth may indicate:", options: ["Normal recovery", "Infection or retained tissue", "Good involution", "Successful breastfeeding"], answer: 1, rationale: "Foul, heavy or persistently red lochia suggests infection or retained products." },
      { type: "mcq", q: "Cramping pains as the uterus contracts, especially during breastfeeding, are called:", options: ["Afterpains", "Braxton Hicks", "Show", "Engorgement"], answer: 0, rationale: "Afterpains are uterine contractions felt in the puerperium, often during feeding." },
      { type: "mcq", q: "A common, usually self-limiting low mood in the first days after birth is called:", options: ["Postnatal psychosis", "Baby blues", "Mania", "Eclampsia"], answer: 1, rationale: "The 'baby blues' are common and usually settle; persistent low mood may be depression." },
      { type: "mcq", q: "Which is a postnatal DANGER sign in the mother?", options: ["Mild tiredness", "Heavy or offensive bleeding with fever", "Producing colostrum", "Passing urine normally"], answer: 1, rationale: "Heavy/offensive bleeding with fever suggests haemorrhage or sepsis — a danger sign." },
      { type: "mcq", q: "Part of routine postnatal assessment of the mother is checking:", options: ["Shoe size", "Uterine involution and lochia", "Eye colour", "Hair length"], answer: 1, rationale: "Assessing involution and lochia is core to detecting postnatal complications." },
      { type: "mcq", q: "A recommended postnatal contact schedule typically includes a visit at about:", options: ["Only once at 1 year", "Within 24 hours, then over the following days and weeks", "Only after 3 months", "Never, unless ill"], answer: 1, rationale: "Postnatal contacts begin within 24 hours and continue over the following days and weeks." }
      , { type: "fill", q: "The vaginal discharge after childbirth is called ____.", accept: ["lochia"], rationale: "Lochia is the postnatal uterine discharge (rubra, serosa, alba)." }
      , { type: "fill", q: "The return of the uterus to its non-pregnant size after birth is called ____.", accept: ["involution"], rationale: "Involution is the postnatal shrinking of the uterus." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "fdm-16-breastfeeding",
    unit: "Unit 5 · Birth, Newborn & Postnatal Fundamentals",
    title: "Breastfeeding & Lactation Support",
    readMinutes: 17,
    summary: "The physiology of lactation, the benefits of breastfeeding, correct positioning and attachment, signs of effective feeding, common breastfeeding problems, and the midwife's role in supporting breastfeeding.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Physiology of lactation", p: "Lactation is controlled mainly by two hormones. Prolactin, released when the baby suckles, stimulates the breast to produce milk. Oxytocin, also released by suckling, causes the 'let-down' (milk ejection) reflex, squeezing milk towards the nipple. The more the baby feeds, the more milk is produced — supply follows demand. Colostrum is produced first, followed by mature milk." },
      { h: "Benefits of breastfeeding", list: [
        "For the baby — ideal nutrition, protection against infection (antibodies), easy digestion, and support for growth and brain development.",
        "For the mother — helps the uterus contract, aids return to pre-pregnant weight, gives some natural birth-spacing, and lowers some long-term risks.",
        "Promotes bonding between mother and baby.",
        "Safe, clean, always available and free."
      ] },
      { h: "Exclusive breastfeeding", p: "Exclusive breastfeeding means the baby receives only breast milk (no water, other fluids or foods) and is recommended for the first six months of life, after which appropriate complementary foods are added while breastfeeding continues. Early initiation within the first hour and exclusive breastfeeding protect the newborn from infection and undernutrition." },
      { h: "Correct positioning and attachment", list: [
        "The baby's body is turned towards the mother, head and body in a straight line, close to her, supported.",
        "The baby's mouth is wide open, taking a large mouthful of breast, not just the nipple.",
        "The chin touches the breast, the lower lip is turned out, and more areola shows above than below.",
        "Good attachment allows effective feeding and prevents sore, cracked nipples."
      ], figure: {
        caption: "Signs of good attachment at the breast.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Signs of good attachment in breastfeeding."><rect x="15" y="12" width="530" height="28" fill="#831843"/><text x="280" y="31" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Four signs of GOOD attachment</text><rect x="15" y="44" width="265" height="38" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="62" font-family="sans-serif" font-size="11" fill="#831843">1. Mouth wide open</text><text x="25" y="76" font-family="sans-serif" font-size="11" fill="#831843">2. Chin touches breast</text><rect x="280" y="44" width="265" height="38" fill="#FDF2F8" stroke="#BE185D"/><text x="290" y="62" font-family="sans-serif" font-size="11" fill="#831843">3. Lower lip turned out</text><text x="290" y="76" font-family="sans-serif" font-size="11" fill="#831843">4. More areola above than below</text><rect x="15" y="90" width="530" height="28" fill="#FDF2F8" stroke="#15803D"/><text x="280" y="109" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">Good attachment → effective feeding, no sore nipples</text></svg>'
      } },
      { h: "Signs of effective feeding", list: [
        "Slow, deep sucks with pauses and audible/visible swallowing.",
        "The baby feeds contentedly and comes off the breast satisfied.",
        "Adequate wet and dirty nappies.",
        "Steady weight gain after the initial newborn weight loss.",
        "Breasts feel softer after a feed."
      ] },
      { h: "Common breastfeeding problems", list: [
        "Sore or cracked nipples — usually from poor attachment; correct the latch.",
        "Engorgement — over-full, tense breasts; frequent feeding and comfort measures help.",
        "Blocked duct and mastitis — a tender, red, sometimes painful area; continue feeding and seek care if fever develops.",
        "Insufficient milk (often perceived) — usually improved by more frequent, effective feeding.",
        "Flat or inverted nipples — positioning support helps."
      ] },
      { h: "Midwifery role in supporting breastfeeding", list: [
        "Promote skin-to-skin contact and early initiation within the first hour.",
        "Teach and check positioning and attachment.",
        "Encourage exclusive, on-demand breastfeeding for six months.",
        "Identify and help solve breastfeeding problems early.",
        "Build the mother's confidence and avoid unnecessary supplements.",
        "Support the principles of baby-friendly care and counsel the family."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Describe the physiology of lactation, including the roles of prolactin and oxytocin.",
      "List the benefits of breastfeeding for the baby and the mother.",
      "Describe correct positioning and attachment at the breast.",
      "What are the signs of effective breastfeeding?",
      "Discuss common breastfeeding problems and the midwife's role in supporting breastfeeding."
    ],
    assessment: [
      { type: "mcq", q: "The hormone that stimulates milk production is:", options: ["Oxytocin", "Prolactin", "Progesterone", "Insulin"], answer: 1, rationale: "Prolactin stimulates the breast to produce milk in response to suckling." },
      { type: "mcq", q: "The 'let-down' (milk ejection) reflex is caused by:", options: ["Prolactin", "Oxytocin", "Oestrogen", "Adrenaline"], answer: 1, rationale: "Oxytocin causes contraction of the cells that eject milk — the let-down reflex." },
      { type: "mcq", q: "Exclusive breastfeeding is recommended for the first:", options: ["6 weeks", "3 months", "6 months", "12 months"], answer: 2, rationale: "Exclusive breastfeeding is recommended for the first six months of life." },
      { type: "mcq", q: "A sign of GOOD attachment is that the baby:", options: ["Takes only the nipple", "Has a wide-open mouth with chin touching the breast", "Has lips tucked inward", "Shows more areola below than above"], answer: 1, rationale: "Good attachment shows a wide-open mouth, chin to breast and more areola above." },
      { type: "mcq", q: "Milk production largely follows the principle of:", options: ["Less feeding, more milk", "Supply follows demand", "Milk is fixed and cannot change", "Only formula increases supply"], answer: 1, rationale: "The more the baby feeds, the more milk is produced — supply follows demand." },
      { type: "mcq", q: "Sore or cracked nipples are most often caused by:", options: ["Too much milk", "Poor positioning and attachment", "Feeding too rarely only", "Drinking water"], answer: 1, rationale: "Poor attachment is the usual cause of sore, cracked nipples; correcting the latch helps." },
      { type: "mcq", q: "A red, tender, painful area of the breast with fever suggests:", options: ["Normal engorgement only", "Mastitis", "Good attachment", "Colostrum"], answer: 1, rationale: "A red, tender area with fever suggests mastitis and needs care; feeding usually continues." },
      { type: "mcq", q: "A reliable sign of effective feeding is:", options: ["Constant crying after feeds", "Steady weight gain and adequate wet nappies", "No swallowing heard", "Breasts always hard"], answer: 1, rationale: "Steady weight gain and adequate nappies indicate effective milk transfer." },
      { type: "mcq", q: "Engorgement of the breasts is best helped by:", options: ["Stopping breastfeeding", "Frequent effective feeding and comfort measures", "Tight binding only", "Restricting fluids"], answer: 1, rationale: "Frequent, effective feeding relieves engorgement; stopping feeds worsens it." },
      { type: "mcq", q: "The midwife should encourage the first breastfeed:", options: ["After 24 hours", "Within the first hour of birth", "Only after the first bath", "After mature milk comes in"], answer: 1, rationale: "Early initiation within the first hour supports successful breastfeeding." }
      , { type: "fill", q: "The hormone responsible for the milk ejection (let-down) reflex is ____.", accept: ["oxytocin"], rationale: "Oxytocin triggers the let-down/milk ejection reflex." }
      , { type: "fill", q: "Giving the baby only breast milk for the first six months is called ____ breastfeeding.", accept: ["exclusive"], rationale: "Exclusive breastfeeding means breast milk only for the first six months." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "fdm-17-immunization",
    unit: "Unit 6 · Health Promotion & Safe Practice",
    title: "Immunization in Pregnancy & Childhood (EPI)",
    readMinutes: 16,
    summary: "The concept of immunity and immunization, tetanus immunization in pregnancy, the Expanded Programme on Immunization (EPI) childhood schedule, the cold chain, and the midwife's role in immunization.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Immunity and immunization", p: "Immunity is the body's ability to resist infection. Immunization is the process of making a person immune, usually by giving a vaccine that stimulates the body to produce protective antibodies (active immunity). Immunization is one of the most cost-effective ways to prevent illness and death in mothers and children." },
      { h: "Types of immunity", list: [
        "Active immunity — the body makes its own antibodies, e.g. after infection or vaccination; long-lasting.",
        "Passive immunity — ready-made antibodies are given, e.g. from mother to baby across the placenta and in breast milk, or by injection; short-lived but immediate."
      ] },
      { h: "Tetanus immunization in pregnancy", p: "Tetanus immunization of the mother protects both the mother and the newborn against tetanus (including neonatal tetanus, a serious cause of newborn death). Tetanus toxoid (or Td) is given to pregnant women according to the national schedule; antibodies cross the placenta and protect the baby in the first weeks of life. This is a key reason maternal tetanus immunization is part of antenatal care." },
      { h: "The Expanded Programme on Immunization (EPI)", p: "EPI is the national programme that provides routine childhood vaccines to protect against major preventable diseases. Vaccines commonly included are BCG (tuberculosis), oral polio and inactivated polio, the pentavalent vaccine (diphtheria, pertussis, tetanus, hepatitis B and Hib), pneumococcal vaccine, rotavirus and measles/measles-rubella, with doses given from birth through infancy. The exact schedule follows the national programme.", figure: {
        caption: "Examples of vaccines and the diseases they protect against (national schedule applies).",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vaccines and diseases prevented table."><rect x="15" y="12" width="530" height="28" fill="#831843"/><text x="280" y="31" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">Vaccine → Disease prevented</text><rect x="15" y="40" width="200" height="26" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="58" font-family="sans-serif" font-size="11" fill="#831843">BCG</text><rect x="215" y="40" width="330" height="26" fill="#FDF2F8" stroke="#BE185D"/><text x="225" y="58" font-family="sans-serif" font-size="11" fill="#831843">Tuberculosis</text><rect x="15" y="66" width="200" height="26" fill="#FDF2F8" stroke="#BE185D"/><text x="25" y="84" font-family="sans-serif" font-size="11" fill="#831843">OPV / IPV</text><rect x="215" y="66" width="330" height="26" fill="#FCE7F3" stroke="#BE185D"/><text x="225" y="84" font-family="sans-serif" font-size="11" fill="#831843">Poliomyelitis</text><rect x="15" y="92" width="200" height="26" fill="#FCE7F3" stroke="#BE185D"/><text x="25" y="110" font-family="sans-serif" font-size="11" fill="#831843">Pentavalent</text><rect x="215" y="92" width="330" height="26" fill="#FDF2F8" stroke="#BE185D"/><text x="225" y="110" font-family="sans-serif" font-size="11" fill="#831843">Diphtheria, pertussis, tetanus, hepB, Hib</text><rect x="15" y="118" width="200" height="26" fill="#FDF2F8" stroke="#BE185D"/><text x="25" y="136" font-family="sans-serif" font-size="11" fill="#831843">Measles / MR</text><rect x="215" y="118" width="330" height="26" fill="#FCE7F3" stroke="#BE185D"/><text x="225" y="136" font-family="sans-serif" font-size="11" fill="#831843">Measles (and rubella)</text></svg>'
      } },
      { h: "The cold chain", p: "Vaccines must be kept at the correct temperature from manufacture to administration — this is the 'cold chain'. If vaccines become too warm (or some too cold/frozen) they lose their potency and may not protect. The midwife checks storage temperatures, uses a vaccine carrier with ice packs in the field, and discards vaccines that have been exposed to wrong temperatures." },
      { h: "Safe immunization practice", list: [
        "Check the vaccine, dose, route, site and expiry, and that the cold chain was maintained.",
        "Use a sterile, single-use needle and syringe for each injection.",
        "Give the correct vaccine by the correct route (e.g. BCG intradermal, others as specified).",
        "Record the immunization on the child's card and register.",
        "Advise the mother on minor side-effects and the next due date.",
        "Dispose of sharps safely."
      ] },
      { h: "Midwifery role in immunization", list: [
        "Give tetanus immunization to pregnant women as part of antenatal care.",
        "Educate mothers on the importance and schedule of childhood immunization.",
        "Administer vaccines correctly and safely, maintaining the cold chain.",
        "Keep accurate immunization records and follow up defaulters.",
        "Reassure parents and manage minor reactions.",
        "Promote immunization in the community."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define immunity and immunization, and differentiate active and passive immunity.",
      "Explain the importance of tetanus immunization in pregnancy.",
      "What is the EPI? Name vaccines included and the diseases they prevent.",
      "What is the cold chain and why is it important?",
      "Describe the midwife's role in immunization."
    ],
    assessment: [
      { type: "mcq", q: "Immunization that makes the body produce its own antibodies gives:", options: ["Passive immunity", "Active immunity", "No immunity", "Temporary passive immunity only"], answer: 1, rationale: "Vaccines stimulate the body to make its own antibodies — active immunity." },
      { type: "mcq", q: "Antibodies passed from mother to baby across the placenta are an example of:", options: ["Active immunity", "Passive immunity", "Auto-immunity", "Allergy"], answer: 1, rationale: "Maternal antibodies crossing the placenta give the baby passive immunity." },
      { type: "mcq", q: "Tetanus immunization of the pregnant woman protects:", options: ["Only the mother", "Both the mother and the newborn", "Only the father", "Neither"], answer: 1, rationale: "Maternal tetanus immunization protects the mother and, via placental antibodies, the newborn." },
      { type: "mcq", q: "The system of keeping vaccines at the correct temperature is the:", options: ["Warm chain", "Cold chain", "Food chain", "Supply line"], answer: 1, rationale: "The cold chain keeps vaccines potent from manufacture to administration." },
      { type: "mcq", q: "BCG vaccine protects against:", options: ["Measles", "Tuberculosis", "Polio", "Tetanus"], answer: 1, rationale: "BCG protects against tuberculosis." },
      { type: "mcq", q: "The pentavalent vaccine protects against diphtheria, pertussis, tetanus, hepatitis B and:", options: ["Measles", "Hib (Haemophilus influenzae type b)", "Polio only", "Rotavirus"], answer: 1, rationale: "Pentavalent covers diphtheria, pertussis, tetanus, hepatitis B and Hib." },
      { type: "mcq", q: "A vaccine that has been exposed to the wrong temperature should be:", options: ["Used quickly", "Discarded", "Frozen again", "Given at double dose"], answer: 1, rationale: "Vaccines exposed to incorrect temperatures lose potency and must be discarded." },
      { type: "mcq", q: "For each injection, the midwife must use:", options: ["The same needle for several children", "A sterile, single-use needle and syringe", "A reused syringe", "Any available needle"], answer: 1, rationale: "A sterile, single-use needle and syringe per injection prevents infection transmission." },
      { type: "mcq", q: "EPI stands for the Expanded Programme on:", options: ["Infection", "Immunization", "Inspection", "Investigation"], answer: 1, rationale: "EPI is the Expanded Programme on Immunization." },
      { type: "mcq", q: "Neonatal tetanus is largely prevented by:", options: ["Maternal tetanus immunization and clean cord care", "Giving water to the baby", "Early bathing", "Avoiding breastfeeding"], answer: 0, rationale: "Maternal tetanus immunization plus clean delivery and cord care prevent neonatal tetanus." }
      , { type: "fill", q: "The system that keeps vaccines at the correct temperature from manufacture to use is the ____ chain.", accept: ["cold"], rationale: "The cold chain preserves vaccine potency." }
      , { type: "fill", q: "Immunity in which the body makes its own antibodies after vaccination is called ____ immunity.", accept: ["active"], rationale: "Vaccination produces active immunity." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "fdm-18-medication-dosage",
    unit: "Unit 6 · Health Promotion & Safe Practice",
    title: "Medication Administration Basics & Dosage",
    readMinutes: 16,
    summary: "Safe medication administration in midwifery — the rights of medication, routes, common drugs in maternity, basic dosage calculation, and the prevention of medication errors.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Importance of safe medication", p: "Giving medicines safely is a core midwifery skill and a legal and professional responsibility. Errors can harm the mother, the fetus or the newborn. The midwife must understand what she is giving, why, how, and the possible effects, and must always work within her scope and the prescriber's instructions." },
      { h: "The 'rights' of medication administration", list: [
        "Right patient — confirm the woman's identity.",
        "Right drug — the correct medicine, checked against the prescription.",
        "Right dose — the correct amount, calculated and double-checked.",
        "Right route — the correct way to give it (oral, IM, IV, etc.).",
        "Right time — at the prescribed time and frequency.",
        "Right documentation — record what was given immediately after.",
        "(Also taught: right reason, right response, right to refuse.)"
      ] },
      { h: "Routes of administration", list: [
        "Oral (by mouth) — tablets, capsules, syrups; common and convenient.",
        "Intramuscular (IM) — into a muscle, e.g. some uterotonics and vaccines.",
        "Intravenous (IV) — into a vein, for rapid effect, e.g. fluids and some drugs.",
        "Subcutaneous (SC) — under the skin.",
        "Topical, vaginal, rectal — local routes.",
        "Each route has its own technique, onset and precautions."
      ] },
      { h: "Common medicines in maternity care", list: [
        "Iron and folic acid — to prevent and treat anaemia.",
        "Tetanus toxoid — immunization in pregnancy.",
        "Uterotonics (e.g. oxytocin) — to contract the uterus and prevent/treat haemorrhage, as per protocol.",
        "Analgesics — for pain relief, used appropriately.",
        "Antibiotics — for infection, as prescribed.",
        "Vitamin K and eye prophylaxis — for the newborn."
      ] },
      { h: "Basic dosage calculation", p: "The midwife must be able to work out a dose accurately. A common rule is: dose to give = (dose required ÷ dose available) × quantity of the available form. For example, if 250 mg is required and the tablets are 125 mg each, then 250 ÷ 125 = 2 tablets. For liquids, if 250 mg is required and the syrup contains 125 mg in 5 mL, then (250 ÷ 125) × 5 = 10 mL. Always check units and have calculations verified for high-risk drugs.", figure: {
        caption: "Basic dosage formula.",
        svg: '<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dose to give equals dose required over dose available times quantity."><rect x="40" y="30" width="480" height="60" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="280" y="58" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#831843">Dose to give =</text><text x="280" y="80" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#BE185D">(Dose required ÷ Dose available) × Quantity of form</text></svg>'
      } },
      { h: "Preventing medication errors", list: [
        "Always read the prescription carefully and clarify if unclear.",
        "Check the drug name, strength, expiry and appearance.",
        "Calculate and double-check the dose, especially for the newborn.",
        "Follow the rights of administration every time.",
        "Never give an unlabelled or expired drug.",
        "Observe for the effect and for adverse reactions, and report and record."
      ] },
      { h: "Midwifery responsibilities", list: [
        "Give only medicines that are prescribed or within agreed protocols and scope.",
        "Know the action, dose, route, and side-effects of drugs she administers.",
        "Apply the rights of medication and safe technique.",
        "Educate the woman about her medicines and how to take them.",
        "Record administration accurately and promptly.",
        "Report errors and adverse drug reactions honestly."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "List and explain the 'rights' of medication administration.",
      "Describe the common routes of drug administration with examples.",
      "Name medicines commonly used in maternity care and their purpose.",
      "State the basic dosage formula and give a worked example.",
      "How can the midwife prevent medication errors?"
    ],
    assessment: [
      { type: "mcq", q: "Which is one of the classic 'rights' of medication administration?", options: ["Right dose", "Right colour", "Right shelf", "Right packaging only"], answer: 0, rationale: "'Right dose' is one of the core rights of medication administration." },
      { type: "mcq", q: "If 250 mg is required and each tablet is 125 mg, the number of tablets to give is:", options: ["1", "2", "3", "4"], answer: 1, rationale: "250 ÷ 125 = 2 tablets." },
      { type: "mcq", q: "Giving a drug 'IM' means giving it:", options: ["By mouth", "Into a vein", "Into a muscle", "Under the skin"], answer: 2, rationale: "IM = intramuscular, i.e. into a muscle." },
      { type: "mcq", q: "Iron and folic acid are commonly given in maternity care to:", options: ["Contract the uterus", "Relieve pain", "Prevent tetanus", "Prevent and treat anaemia"], answer: 3, rationale: "Iron and folic acid prevent and treat anaemia in pregnancy." },
      { type: "mcq", q: "The basic dosage formula is: dose to give = (dose required ÷ dose available) ×:", options: ["Patient weight", "Quantity of the available form", "Number of days", "Body temperature"], answer: 1, rationale: "The formula multiplies the ratio by the quantity of the available form (e.g. mL or tablets)." },
      { type: "mcq", q: "If 250 mg is required and the syrup is 125 mg in 5 mL, the volume to give is:", options: ["5 mL", "10 mL", "2.5 mL", "15 mL"], answer: 1, rationale: "(250 ÷ 125) × 5 mL = 10 mL." },
      { type: "mcq", q: "A uterotonic such as oxytocin is used mainly to:", options: ["Contract the uterus and prevent/treat haemorrhage", "Relieve heartburn", "Prevent anaemia", "Treat the common cold"], answer: 0, rationale: "Uterotonics contract the uterus to prevent and treat postpartum haemorrhage." },
      { type: "mcq", q: "Before giving any drug, the midwife should check the drug name, strength, expiry and:", options: ["Brand colour only", "Appearance and the prescription", "Manufacturer's logo", "Price"], answer: 1, rationale: "Checking the prescription and the drug's appearance/expiry helps prevent errors." },
      { type: "mcq", q: "A safe rule for medication is to NEVER give:", options: ["A prescribed, in-date drug", "An unlabelled or expired drug", "A drug after checking the dose", "A drug within your scope"], answer: 1, rationale: "Unlabelled or expired drugs must never be administered." },
      { type: "mcq", q: "After giving a medicine, the midwife should:", options: ["Record it later if she remembers", "Record it immediately and observe for effects", "Not record routine drugs", "Only record if there is a problem"], answer: 1, rationale: "Immediate documentation and observation are part of safe administration." }
      , { type: "fill", q: "The route of administration abbreviated 'IV' means into a ____.", accept: ["vein", "intravenous"], rationale: "IV (intravenous) means into a vein." }
      , { type: "fill", q: "Drugs that contract the uterus to prevent or treat bleeding are called ____.", accept: ["uterotonics", "uterotonic", "oxytocics", "oxytocic"], rationale: "Uterotonics (oxytocics) contract the uterus." }
    ]
  },

  /* ============ TOPIC 19 ============ */
  {
    id: "fdm-19-documentation",
    unit: "Unit 6 · Health Promotion & Safe Practice",
    title: "Record-Keeping & Documentation",
    readMinutes: 15,
    summary: "The purpose and principles of accurate record-keeping in midwifery, common maternity records, the qualities of good documentation, confidentiality, and the legal importance of records.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is record-keeping?", p: "Record-keeping is the accurate, timely writing down of the care given to a woman and her baby and of the observations made. Records are a permanent account of assessment, decisions, care and outcomes. Good documentation is a professional, legal and ethical duty and is essential for safe, continuous care." },
      { h: "Purpose of records", list: [
        "Communication — sharing information among members of the care team.",
        "Continuity of care — others can see what has been done and plan ahead.",
        "Evidence of care given and decisions made.",
        "Legal protection for the woman and the midwife.",
        "Audit, research and improving the quality of care.",
        "Statistics and reporting for the health system."
      ] },
      { h: "Common maternity records", list: [
        "Antenatal card/record — history, examinations, investigations and plan.",
        "Partograph — progress of labour.",
        "Delivery/birth record — details of the birth and the baby.",
        "Postnatal record — care of mother and baby after birth.",
        "Newborn/child health card — weight, feeding and immunization.",
        "Referral notes, drug charts and registers."
      ] },
      { h: "Qualities of good documentation", list: [
        "Accurate and factual — record what was actually observed and done.",
        "Legible and clear — readable handwriting, approved abbreviations only.",
        "Timely — written as soon as possible after the event.",
        "Complete — all relevant information included.",
        "Dated, timed and signed — with the writer's name.",
        "Objective — facts, not opinions or judgements about the woman.",
        "Errors corrected by a single line, with the correction signed and dated (never erased or hidden)."
      ] },
      { h: "Confidentiality and consent", p: "Records contain private information and must be kept confidential and secure. Information should be shared only with those involved in the woman's care or where the law requires it. The woman has a right to privacy; her consent should be respected, and records must be stored and disposed of safely." },
      { h: "Legal importance of records", p: "Records are legal documents. In any complaint, investigation or court case, the records are key evidence of what care was given. A common principle is that 'if it is not documented, it is regarded as not done'. Poor, late or altered records can harm both the woman and the midwife, while clear records protect both." },
      { h: "Midwifery responsibilities", list: [
        "Document care fully, accurately and promptly for every contact.",
        "Use approved formats, abbreviations and signatures.",
        "Keep records confidential and secure.",
        "Correct errors honestly and transparently.",
        "Never falsify, backdate or alter records improperly.",
        "Use records to plan, hand over and improve care."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define record-keeping and state its purposes in midwifery.",
      "List the common maternity records.",
      "Describe the qualities of good documentation.",
      "Explain confidentiality in relation to records.",
      "Discuss the legal importance of records in midwifery."
    ],
    assessment: [
      { type: "mcq", q: "A key principle highlighting the legal importance of records is:", options: ["Records do not matter", "'If it is not documented, it is regarded as not done'", "Only doctors keep records", "Records can be changed freely"], answer: 1, rationale: "Undocumented care is treated as not having been given — records are legal evidence." },
      { type: "mcq", q: "Good documentation should be:", options: ["Vague and brief", "Accurate, legible, timely and signed", "Written from memory days later", "Full of personal opinions"], answer: 1, rationale: "Quality records are accurate, legible, timely, complete and signed." },
      { type: "mcq", q: "An error in a record should be:", options: ["Erased completely", "Covered with correction fluid", "Crossed out with a single line, then corrected, signed and dated", "Left as it is"], answer: 2, rationale: "Errors are struck through once, corrected, and the correction signed and dated." },
      { type: "mcq", q: "The chart used to record the progress of labour is the:", options: ["Antenatal card", "Partograph", "Immunization card", "Referral note"], answer: 1, rationale: "The partograph records the progress of labour." },
      { type: "mcq", q: "Which is a purpose of record-keeping?", options: ["To confuse the team", "To support communication and continuity of care", "To replace patient care", "To increase errors"], answer: 1, rationale: "Records support communication, continuity, evidence and quality of care." },
      { type: "mcq", q: "Records should be shared:", options: ["With anyone who asks", "Only with those involved in care or where the law requires", "On social media", "With the public"], answer: 1, rationale: "Confidentiality limits sharing to the care team or where legally required." },
      { type: "mcq", q: "Documentation should be written:", options: ["As soon as possible after the event", "Only at the end of the month", "Whenever convenient", "Never"], answer: 0, rationale: "Timely recording, soon after care, improves accuracy and safety." },
      { type: "mcq", q: "Each record entry should be dated, timed and:", options: ["Anonymous", "Signed with the writer's name", "Written in pencil", "Left unsigned"], answer: 1, rationale: "Entries must be signed (and named) so the author is identifiable and accountable." },
      { type: "mcq", q: "Falsifying or backdating records is:", options: ["Acceptable if busy", "A serious professional and legal offence", "Encouraged to save time", "Required practice"], answer: 1, rationale: "Falsifying records is dishonest and a serious professional/legal breach." },
      { type: "mcq", q: "Documentation should be objective, meaning it records:", options: ["Personal judgements about the woman", "Facts and observations, not opinions", "Rumours", "Guesses"], answer: 1, rationale: "Objective records state facts and observations rather than opinions." }
      , { type: "fill", q: "The principle that undocumented care is regarded as not having been done is summarised as: if it is not documented, it is not ____.", accept: ["done"], rationale: "'Not documented = not done' underlines the legal weight of records." }
      , { type: "fill", q: "Keeping a woman's record information private and shared only with the care team is called ____.", accept: ["confidentiality", "confidential"], rationale: "Confidentiality protects private record information." }
    ]
  },

  /* ============ TOPIC 20 ============ */
  {
    id: "fdm-20-first-aid-bls-ethics",
    unit: "Unit 6 · Health Promotion & Safe Practice",
    title: "First Aid, Basic Life Support & Ethical, Evidence-Based Fundamentals",
    readMinutes: 18,
    summary: "The principles of first aid and basic life support (DRSABC and CPR), recovery position and choking, together with the ethical and evidence-based fundamentals of woman-centred midwifery practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "First aid principles", p: "First aid is the immediate, temporary care given to a sick or injured person before professional help is available. Its aims are to preserve life, prevent the condition from worsening, and promote recovery. In maternity settings the midwife may need to give first aid for collapse, bleeding, fainting, fits, choking or burns while summoning help." },
      { h: "Assessing an emergency — DRSABC", list: [
        "D — Danger: check the scene is safe for you and the person.",
        "R — Response: check whether the person responds to voice or touch.",
        "S — Shout/Send for help: call for assistance early.",
        "A — Airway: open and clear the airway (head tilt, chin lift).",
        "B — Breathing: look, listen and feel for normal breathing.",
        "C — Circulation/CPR: if not breathing normally, start chest compressions."
      ], figure: {
        caption: "The DRSABC sequence for assessing an emergency.",
        svg: '<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DRSABC emergency sequence."><defs><marker id="fdmArr20" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#831843"/></marker></defs><rect x="8" y="45" width="74" height="40" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="45" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">D</text><text x="45" y="77" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">Danger</text><rect x="98" y="45" width="74" height="40" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="135" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">R</text><text x="135" y="77" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">Response</text><rect x="188" y="45" width="74" height="40" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="225" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">S</text><text x="225" y="77" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">Shout/help</text><rect x="278" y="45" width="74" height="40" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.5"/><text x="315" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">A</text><text x="315" y="77" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">Airway</text><rect x="368" y="45" width="74" height="40" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="405" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">B</text><text x="405" y="77" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">Breathing</text><rect x="458" y="45" width="74" height="40" rx="7" fill="#FDF2F8" stroke="#15803D" stroke-width="1.5"/><text x="495" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">C</text><text x="495" y="77" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#15803D">CPR</text><line x1="82" y1="65" x2="96" y2="65" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr20)"/><line x1="172" y1="65" x2="186" y2="65" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr20)"/><line x1="262" y1="65" x2="276" y2="65" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr20)"/><line x1="352" y1="65" x2="366" y2="65" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr20)"/><line x1="442" y1="65" x2="456" y2="65" stroke="#831843" stroke-width="2" marker-end="url(#fdmArr20)"/></svg>'
      } },
      { h: "Basic life support (CPR)", p: "If an adult is unresponsive and not breathing normally, basic life support is started: give chest compressions in the centre of the chest at a rate of about 100–120 per minute and a depth of about 5–6 cm, combined with rescue breaths (commonly 30 compressions to 2 breaths) where trained and equipped. Continue until help or recovery. In late pregnancy, the uterus is displaced to the left to relieve pressure on the major vessels during CPR." },
      { h: "Recovery position and choking", list: [
        "Recovery position — for an unconscious person who IS breathing, turn them onto their side to keep the airway open and prevent inhalation of vomit.",
        "Choking (conscious adult) — encourage coughing; if ineffective, give back blows and abdominal thrusts.",
        "Always call for help and reassess breathing."
      ] },
      { h: "Common first-aid situations in maternity", list: [
        "Fainting — lay flat, raise the legs, ensure airway and fresh air.",
        "Severe bleeding — apply firm direct pressure, summon help urgently.",
        "Fits (e.g. eclampsia) — protect from injury, do not restrain, place on the side, call for urgent help.",
        "Burns — cool with running water, cover with a clean cloth.",
        "Always summon professional help and continue care."
      ] },
      { h: "Ethical fundamentals of midwifery", list: [
        "Respect for autonomy — the woman's right to make informed choices.",
        "Beneficence — acting for the woman's good.",
        "Non-maleficence — doing no harm.",
        "Justice — fair, equitable care for all women.",
        "Informed consent — explaining and obtaining agreement before care.",
        "Confidentiality, dignity and respectful, non-discriminatory care."
      ] },
      { h: "Evidence-based, woman-centred practice", p: "Evidence-based practice means combining the best available research evidence with the midwife's skill and the woman's own values and preferences to guide care. Together with woman-centred, ethical practice, it ensures that care is safe, effective, respectful and tailored to each woman — the foundation of good fundamental midwifery and a fitting close to this subject." },
      { h: "Midwifery responsibilities", list: [
        "Maintain current first-aid and basic-life-support skills.",
        "Act quickly and calmly in emergencies, summoning help early.",
        "Practise ethically, respecting autonomy, consent and confidentiality.",
        "Base care on the best available evidence and the woman's preferences.",
        "Provide respectful, non-discriminatory, woman-centred care.",
        "Reflect on and continually improve her practice."
      ] }
    ],
    references: REF_FDM,
    examQuestions: [
      "Define first aid and state its aims.",
      "Describe the DRSABC sequence for assessing an emergency.",
      "Outline the steps of basic life support (CPR) in an adult, noting the modification in late pregnancy.",
      "Explain the recovery position and the management of choking.",
      "Discuss the ethical principles and evidence-based, woman-centred fundamentals of midwifery practice."
    ],
    assessment: [
      { type: "mcq", q: "The main aims of first aid are to preserve life, prevent worsening and:", options: ["Replace hospital care", "Promote recovery", "Diagnose disease", "Prescribe drugs"], answer: 1, rationale: "First aid aims to preserve life, prevent deterioration and promote recovery." },
      { type: "mcq", q: "In the DRSABC sequence, the FIRST step 'D' stands for:", options: ["Drugs", "Danger", "Diagnosis", "Defibrillation"], answer: 1, rationale: "'D' is Danger — ensuring the scene is safe before approaching." },
      { type: "mcq", q: "Chest compressions in adult CPR are given at a rate of about:", options: ["20–40 per minute", "60–80 per minute", "100–120 per minute", "150–180 per minute"], answer: 2, rationale: "The recommended compression rate is about 100–120 per minute." },
      { type: "mcq", q: "The common compression-to-breath ratio in adult CPR is:", options: ["5:1", "15:1", "30:2", "50:5"], answer: 2, rationale: "Standard adult CPR uses 30 compressions to 2 rescue breaths." },
      { type: "mcq", q: "The recovery position is used for a person who is:", options: ["Not breathing", "Unconscious but breathing normally", "Fully awake", "Having chest compressions"], answer: 1, rationale: "The recovery position keeps the airway open in an unconscious but breathing person." },
      { type: "mcq", q: "During CPR in late pregnancy, the uterus should be:", options: ["Pressed down hard", "Displaced to the left", "Ignored", "Lifted upward"], answer: 1, rationale: "Left displacement of the uterus relieves pressure on the major vessels, improving CPR effectiveness." },
      { type: "mcq", q: "The ethical principle of 'non-maleficence' means:", options: ["Doing good", "Doing no harm", "Treating fairly", "Respecting choice"], answer: 1, rationale: "Non-maleficence is the duty to do no harm." },
      { type: "mcq", q: "Obtaining the woman's agreement after explaining care is called:", options: ["Confidentiality", "Informed consent", "Justice", "Autonomy"], answer: 1, rationale: "Informed consent is agreement given after explanation of the proposed care." },
      { type: "mcq", q: "For a woman having a fit (convulsion), the first aider should:", options: ["Restrain her tightly", "Protect her from injury and place her on her side, call for help", "Put fingers in her mouth", "Leave her alone"], answer: 1, rationale: "Protect from injury, do not restrain, position on the side and summon urgent help." },
      { type: "mcq", q: "Evidence-based practice combines the best research evidence, the midwife's skill and the:", options: ["Hospital's profit", "Woman's values and preferences", "Doctor's convenience", "Cheapest option"], answer: 1, rationale: "Evidence-based practice integrates research, clinical expertise and the woman's values." }
      , { type: "fill", q: "The emergency assessment sequence Danger, Response, Shout, Airway, Breathing, Circulation is abbreviated ____.", accept: ["DRSABC", "DRS ABC", "DR ABC", "DRABC"], rationale: "DRSABC is the standard emergency assessment sequence." }
      , { type: "fill", q: "The ethical principle respecting the woman's right to make her own informed choices is called ____.", accept: ["autonomy"], rationale: "Autonomy is the right to self-determination and informed choice." }
    ]
  }
];
