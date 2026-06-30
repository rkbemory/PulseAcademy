/* ============================================================
   Diploma in Nursing · D331 Midwifery (Year 3)
   — 22 topics. Aligned to the BNMC diploma midwifery syllabus
   (foundations & antenatal care, high-risk pregnancy, labour &
   birth, complications & postnatal/newborn care). Grounded in
   standard midwifery texts:
     • Macdonald S, Magill-Cuerden J. Mayes' Midwifery. Bailliere Tindall/Elsevier.
     • Jacob A. A Comprehensive Textbook of Midwifery & Gynaecological Nursing. Jaypee Brothers Medical Publishers.
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_MID = [
  "Macdonald S, Magill-Cuerden J. Mayes' Midwifery. Bailliere Tindall/Elsevier.",
  "Jacob A. A Comprehensive Textbook of Midwifery & Gynaecological Nursing. Jaypee Brothers Medical Publishers.",
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier."
];

window.Academic.topics["diploma-nursing/midwifery"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "mid-01-intro",
    unit: "Unit 1 · Foundations & Antenatal",
    title: "Introduction to Midwifery & Maternity Care",
    readMinutes: 16,
    summary: "The meaning and scope of midwifery, the role and responsibilities of the midwife, the concept of safe motherhood, and key midwifery terminology.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is midwifery?", p: "Midwifery is the profession concerned with the care of women during pregnancy, labour and the postnatal period, and the care of the newborn. A midwife is a responsible and accountable professional who works in partnership with women to give the necessary support, care and advice during pregnancy, labour and the puerperium, conducts births on her own responsibility, and cares for the newborn and the infant. Midwifery is centred on normal physiological childbirth while remaining alert to deviations from normal." },
      { h: "Aims of maternity care", list: [
        "Ensure that every pregnancy is wanted and every birth is safe for mother and baby.",
        "Promote and maintain the physical, mental and social health of the mother and family during the childbearing cycle.",
        "Detect deviations from normal early and refer or manage appropriately.",
        "Reduce maternal and newborn morbidity and mortality.",
        "Provide health education so that families can care for themselves."
      ] },
      { h: "Role and responsibilities of the midwife", list: [
        "Provide antenatal care, including assessment, screening and health education.",
        "Conduct normal labour and birth, monitoring mother and fetus throughout.",
        "Recognise warning signs and obstetric emergencies and refer in time.",
        "Provide immediate newborn care and support breastfeeding.",
        "Give postnatal care to mother and baby and family-planning advice.",
        "Maintain accurate records and work within legal and ethical limits.",
        "Act as counsellor, health educator and advocate for the woman and family."
      ] },
      { h: "The concept of safe motherhood", p: "Safe motherhood means ensuring that all women receive the care they need to be safe and healthy throughout pregnancy and childbirth. Its essential pillars are family planning, antenatal care, clean and safe delivery by a skilled birth attendant, essential and emergency obstetric care, and postnatal care. These are supported by a basic foundation of equity, primary health care and community participation.", figure: {
        caption: "The pillars of safe motherhood, resting on primary health care and equity, supporting the goal of safe pregnancy and childbirth.",
        svg: '<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pillars of safe motherhood diagram."><rect x="40" y="20" width="520" height="36" rx="8" fill="#7C2D12"/><text x="300" y="44" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#FFF7ED">SAFE MOTHERHOOD</text><rect x="40" y="70" width="96" height="100" rx="6" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="88" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Family</text><text x="88" y="132" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">planning</text><rect x="146" y="70" width="96" height="100" rx="6" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="194" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Antenatal</text><text x="194" y="132" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">care</text><rect x="252" y="70" width="96" height="100" rx="6" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="300" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Clean/safe</text><text x="300" y="126" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">delivery</text><text x="300" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">(skilled BA)</text><rect x="358" y="70" width="96" height="100" rx="6" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="406" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Emergency</text><text x="406" y="126" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">obstetric</text><text x="406" y="140" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">care</text><rect x="464" y="70" width="96" height="100" rx="6" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="512" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Postnatal</text><text x="512" y="132" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">care</text><rect x="40" y="184" width="520" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="300" y="204" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400E">Foundation: primary health care, equity, community participation</text><text x="300" y="220" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">female education and empowerment</text></svg>'
      } },
      { h: "Influences on maternal and newborn health", p: "Maternal and newborn health is shaped by more than clinical care. Family and community culture, beliefs and values, the economic status of the family, the woman's education, nutrition, access to transport and health facilities, and the status of women in society all influence outcomes. The midwife must understand these influences and provide culturally sensitive, family-centred care." },
      { h: "Law and ethics in midwifery", p: "The midwife practises within a legal scope of practice defined by the regulatory body (in Bangladesh, the BNMC). She must obtain informed consent, maintain confidentiality, keep accurate records, respect the woman's autonomy and dignity, and refer when a situation is beyond her scope. Ethical principles of autonomy, beneficence, non-maleficence and justice guide all decisions." },
      { h: "Common midwifery terminology", list: [
        "Gravida — a pregnant woman; gravidity is the number of times she has been pregnant.",
        "Para (parity) — the number of pregnancies carried to a viable gestation (about 24 weeks or more).",
        "Primigravida — a woman pregnant for the first time; primipara — has given birth once.",
        "Multigravida / multipara — pregnant or delivered more than once.",
        "Antenatal (prenatal) — before birth; intranatal — during labour; postnatal — after birth.",
        "Viability — the gestation at which a fetus is capable of surviving outside the uterus.",
        "Skilled birth attendant — a trained health professional (midwife, nurse, doctor) competent to manage normal birth and recognise complications."
      ] }
    ],
    references: REF_MID,
    examQuestions: [
      "Define midwifery and describe the role and responsibilities of the midwife.",
      "Explain the concept of safe motherhood and list its essential pillars.",
      "Discuss the factors that influence maternal and newborn health in the community.",
      "Describe the legal and ethical responsibilities of a midwife.",
      "Define the following terms: gravida, para, primigravida, viability, skilled birth attendant."
    ],
    assessment: [
      { type: "mcq", q: "A woman who is pregnant for the first time is called a:", options: ["Multigravida", "Primigravida", "Primipara", "Nulligravida"], answer: 1, rationale: "Primigravida means pregnant for the first time; primipara has already given birth once." },
      { type: "mcq", q: "Parity refers to the number of:", options: ["Living children", "Times a woman has been pregnant", "Pregnancies carried to a viable gestation", "Antenatal visits"], answer: 2, rationale: "Parity counts pregnancies carried to a viable gestation, not the number of pregnancies (gravidity) or living children." },
      { type: "mcq", q: "Which of the following is NOT an essential pillar of safe motherhood?", options: ["Family planning", "Antenatal care", "Cosmetic surgery", "Postnatal care"], answer: 2, rationale: "The pillars are family planning, antenatal care, clean/safe delivery, emergency obstetric care and postnatal care; cosmetic surgery is unrelated." },
      { type: "mcq", q: "A skilled birth attendant is best described as a:", options: ["Traditional birth attendant without training", "Trained health professional competent to manage normal birth and recognise complications", "Family member who has had many children", "Pharmacist"], answer: 1, rationale: "A skilled birth attendant is an accredited trained professional able to conduct normal birth and identify complications for referral." },
      { type: "mcq", q: "The period of care given after birth is called the ____ period.", options: ["Antenatal", "Intranatal", "Postnatal", "Preconception"], answer: 2, rationale: "Postnatal (postpartum) refers to the period after birth; antenatal is before and intranatal is during labour." },
      { type: "mcq", q: "An ethical principle that means 'do no harm' is:", options: ["Autonomy", "Beneficence", "Non-maleficence", "Justice"], answer: 2, rationale: "Non-maleficence is the duty to avoid causing harm; beneficence is doing good." },
      { type: "mcq", q: "Which body regulates the scope of midwifery practice in Bangladesh?", options: ["WHO", "BNMC", "UNICEF", "FIGO"], answer: 1, rationale: "The Bangladesh Nursing and Midwifery Council (BNMC) defines and regulates the legal scope of practice." },
      { type: "mcq", q: "The main focus of midwifery care is on:", options: ["Surgical delivery", "Normal physiological childbirth while remaining alert to deviations", "Treating infertility", "Performing caesarean sections"], answer: 1, rationale: "Midwifery centres on supporting normal birth while detecting and referring deviations from normal." },
      { type: "mcq", q: "Gravidity means the number of times a woman has:", options: ["Given birth", "Been pregnant", "Breastfed", "Had a miscarriage"], answer: 1, rationale: "Gravidity is the total number of pregnancies, regardless of outcome; parity counts births at viable gestation." },
      { type: "mcq", q: "Culturally sensitive care means the midwife:", options: ["Ignores the family's beliefs", "Imposes her own values", "Respects and works within the family's culture and beliefs", "Refuses to involve the family"], answer: 2, rationale: "Culturally sensitive, family-centred care respects the woman's and family's culture, values and beliefs." }
      , { type: "fill", q: "A woman who is currently pregnant is called a ____.", accept: ["gravida"], rationale: "Gravida denotes a pregnant woman; gravidity is the number of pregnancies." }
      , { type: "fill", q: "____ motherhood ensures all women receive the care needed to be safe and healthy through pregnancy and childbirth.", accept: ["safe"], rationale: "Safe motherhood is the global initiative built on family planning, antenatal, delivery, emergency and postnatal care." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "mid-02-repro-pelvis",
    unit: "Unit 1 · Foundations & Antenatal",
    title: "Review of the Female Reproductive System & the Female Pelvis",
    readMinutes: 17,
    summary: "Anatomy of the female reproductive organs, the menstrual cycle, and the structure and types of the female (obstetric) pelvis relevant to childbirth.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "External genitalia (vulva)", p: "The external female genitalia, collectively the vulva, include the mons pubis, labia majora and minora, clitoris, vestibule, urethral and vaginal openings, and the Bartholin's glands which lubricate the vaginal opening. The perineum is the area between the vaginal opening and the anus, important during birth and for episiotomy and repair." },
      { h: "Internal reproductive organs", list: [
        "Vagina — a muscular canal connecting the vulva to the cervix; the birth canal.",
        "Uterus — a muscular, pear-shaped organ where the fetus develops; parts are the fundus, body (corpus) and cervix; layers are perimetrium, myometrium and endometrium.",
        "Cervix — the lower narrow part of the uterus that dilates in labour.",
        "Fallopian tubes (oviducts) — carry the ovum from the ovary to the uterus; fertilisation usually occurs in the ampulla.",
        "Ovaries — the female gonads that produce ova and the hormones oestrogen and progesterone."
      ] },
      { h: "The menstrual cycle", p: "The menstrual cycle averages about 28 days and prepares the body for pregnancy. It has an ovarian cycle (follicular phase, ovulation around day 14, and luteal phase) and a uterine (endometrial) cycle (menstrual, proliferative and secretory phases). It is controlled by the hypothalamus and pituitary (GnRH, FSH, LH) and the ovarian hormones oestrogen and progesterone. Ovulation is the release of the mature ovum; if fertilisation does not occur, the corpus luteum regresses, hormone levels fall and menstruation occurs.", figure: {
        caption: "Phases of the menstrual cycle (about 28 days): menstruation, proliferative phase, ovulation near day 14, and secretory phase.",
        svg: '<svg viewBox="0 0 600 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phases of the menstrual cycle timeline."><line x1="40" y1="120" x2="560" y2="120" stroke="#7C2D12" stroke-width="2"/><rect x="40" y="80" width="90" height="40" fill="#FEE2E2" stroke="#7C2D12" stroke-width="1.5"/><text x="85" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Menses</text><text x="85" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Day 1-5</text><rect x="130" y="80" width="150" height="40" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="205" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Proliferative</text><text x="205" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">Day 6-13</text><circle cx="295" cy="100" r="16" fill="#FB923C" stroke="#7C2D12" stroke-width="1.5"/><text x="295" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#7C2D12">OVUL</text><text x="295" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">~Day 14</text><rect x="320" y="80" width="240" height="40" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="440" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">Secretory phase</text><text x="440" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Day 15-28</text><text x="300" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">The Menstrual Cycle (~28 days)</text></svg>'
      } },
      { h: "The female (obstetric) pelvis", p: "The bony pelvis forms the birth canal. It is made of four bones: two innominate (hip) bones, the sacrum and the coccyx, joined at the two sacro-iliac joints, the symphysis pubis and the sacro-coccygeal joint. The pelvis is divided by the brim into the false pelvis (above) and the true pelvis (below), which is the part of importance in childbirth." },
      { h: "The true pelvis: brim, cavity and outlet", list: [
        "Pelvic brim (inlet) — the upper boundary of the true pelvis; landmarks include the sacral promontory, ilio-pectineal lines and the upper border of the symphysis pubis.",
        "Pelvic cavity — the curved canal between the brim and outlet, deeper behind than in front.",
        "Pelvic outlet — the lower boundary, bounded by the lower border of the symphysis pubis, ischial tuberosities and tip of the sacrum.",
        "Diameters of the brim — anteroposterior (true conjugate ~11 cm), oblique (~12 cm) and transverse (~13 cm) are assessed clinically."
      ] },
      { h: "Types of the female pelvis", list: [
        "Gynaecoid — the typical, ideal female pelvis with a rounded brim; most favourable for normal birth.",
        "Android — heart-shaped (male-type) brim; associated with difficult labour.",
        "Anthropoid — long oval brim (anteroposterior diameter greater than transverse).",
        "Platypelloid — flat, wide and shallow brim with a reduced anteroposterior diameter."
      ] },
      { h: "Pelvic floor", p: "The pelvic floor is a muscular diaphragm (mainly the levator ani muscles) that supports the pelvic organs, helps maintain continence, and aids rotation of the fetal head during birth. It is stretched during the second stage of labour and may be protected by an episiotomy where indicated." }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the internal organs of the female reproductive system and their functions.",
      "Explain the phases of the menstrual cycle and the hormones that control it.",
      "Describe the bones, joints and divisions of the female pelvis.",
      "Name and describe the four types of female pelvis and their significance in labour.",
      "What is the pelvic floor? Describe its importance in childbirth."
    ],
    assessment: [
      { type: "mcq", q: "Fertilisation of the ovum usually occurs in the:", options: ["Uterus", "Ampulla of the fallopian tube", "Cervix", "Ovary"], answer: 1, rationale: "The ovum is usually fertilised in the ampulla (outer third) of the fallopian tube." },
      { type: "mcq", q: "The inner lining of the uterus that is shed during menstruation is the:", options: ["Myometrium", "Perimetrium", "Endometrium", "Parametrium"], answer: 2, rationale: "The endometrium is the inner mucosal layer that thickens and is shed each cycle." },
      { type: "mcq", q: "The type of pelvis most favourable for normal childbirth is the:", options: ["Android", "Anthropoid", "Platypelloid", "Gynaecoid"], answer: 3, rationale: "The gynaecoid pelvis, with its rounded brim, is the ideal shape for vaginal birth." },
      { type: "mcq", q: "Ovulation in a typical 28-day cycle occurs around day:", options: ["7", "14", "21", "28"], answer: 1, rationale: "Ovulation usually occurs around the middle of the cycle, about day 14." },
      { type: "mcq", q: "Which hormone surge directly triggers ovulation?", options: ["FSH", "LH", "Progesterone", "Oestrogen"], answer: 1, rationale: "A surge of luteinising hormone (LH) triggers release of the mature ovum." },
      { type: "mcq", q: "The bones of the pelvis include all of the following EXCEPT the:", options: ["Innominate bones", "Sacrum", "Coccyx", "Femur"], answer: 3, rationale: "The pelvis is formed by two innominate bones, the sacrum and the coccyx; the femur is the thigh bone." },
      { type: "mcq", q: "The lower part of the uterus that dilates during labour is the:", options: ["Fundus", "Body", "Cervix", "Cornu"], answer: 2, rationale: "The cervix is the lower narrow portion that effaces and dilates in labour." },
      { type: "mcq", q: "The gland that lubricates the vaginal opening is the:", options: ["Bartholin's gland", "Thyroid gland", "Adrenal gland", "Pituitary gland"], answer: 0, rationale: "Bartholin's glands secrete mucus that lubricates the vaginal vestibule." },
      { type: "mcq", q: "The flat, wide and shallow pelvis with a reduced anteroposterior diameter is the:", options: ["Gynaecoid", "Android", "Anthropoid", "Platypelloid"], answer: 3, rationale: "The platypelloid pelvis is flattened with a short anteroposterior and wide transverse diameter." },
      { type: "mcq", q: "The pelvic floor is formed mainly by the:", options: ["Rectus abdominis", "Levator ani muscles", "Psoas muscles", "Gluteus maximus"], answer: 1, rationale: "The levator ani muscles form the main support of the pelvic floor and aid rotation of the fetal head." }
      , { type: "fill", q: "The female gonads that produce ova and the hormones oestrogen and progesterone are the ____.", accept: ["ovaries", "ovary"], rationale: "The ovaries produce ova and the main female sex hormones." }
      , { type: "fill", q: "The part of the pelvis below the brim, important in childbirth, is the ____ pelvis.", accept: ["true"], rationale: "The true pelvis lies below the brim and forms the bony birth canal." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "mid-03-conception-fetal",
    unit: "Unit 1 · Foundations & Antenatal",
    title: "Conception, Fetal Development & Fetal Circulation",
    readMinutes: 17,
    summary: "Fertilisation and implantation, embryonic and fetal growth, the placenta and fetal membranes, amniotic fluid, and the special features of the fetal circulation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Fertilisation (conception)", p: "Fertilisation is the union of a sperm and an ovum, usually in the ampulla of the fallopian tube, to form a single cell called the zygote, which carries 46 chromosomes (23 from each parent). The zygote begins to divide as it travels towards the uterus, forming a morula and then a fluid-filled blastocyst." },
      { h: "Implantation", p: "About 6 to 10 days after fertilisation the blastocyst embeds itself into the prepared endometrium (now called the decidua), a process called implantation, usually in the upper part of the uterus. The outer cell layer (trophoblast) will form the placenta and membranes; the inner cell mass forms the embryo." },
      { h: "Embryonic and fetal development", list: [
        "Pre-embryonic period (weeks 1-2) — fertilisation, cleavage and implantation.",
        "Embryonic period (weeks 3-8) — all major organs and systems form; the embryo is most vulnerable to harmful agents (teratogens).",
        "Fetal period (week 9 to birth) — growth and maturation of organs; movements (quickening) felt by the mother around 18-20 weeks in a first pregnancy.",
        "By full term (about 40 weeks) the fetus is mature and ready for extrauterine life."
      ] },
      { h: "The placenta", p: "The placenta is the organ of exchange between mother and fetus. It develops from the trophoblast and the decidua and is fully formed by about 12 weeks. Its functions are respiration (oxygen and carbon dioxide exchange), nutrition, excretion, protection (a barrier and passage of some antibodies), and an endocrine function producing hormones such as hCG, oestrogen, progesterone and human placental lactogen. At term it weighs about one-sixth of the baby's weight." },
      { h: "Fetal membranes and amniotic fluid", p: "Two membranes enclose the fetus: the outer chorion and the inner amnion, together forming the 'bag of waters'. They contain the amniotic fluid, which at term is about 800-1000 mL. Amniotic fluid protects the fetus from injury and infection, allows free movement and symmetrical growth, maintains a constant temperature, and aids lung development. Too much fluid is polyhydramnios; too little is oligohydramnios." },
      { h: "The umbilical cord", p: "The umbilical cord connects the fetus to the placenta. It normally contains two arteries and one vein, surrounded by a protective jelly (Wharton's jelly). The vein carries oxygenated blood from the placenta to the fetus, and the two arteries carry deoxygenated blood from the fetus to the placenta. The cord is usually about 50 cm long at term." },
      { h: "Fetal circulation", p: "The fetal circulation differs from that of the newborn because the lungs are not used for breathing and the placenta performs gas exchange. Oxygenated blood passes from the placenta through the umbilical vein, much of it bypassing the liver via the ductus venosus. Special shunts allow blood to bypass the non-functioning lungs: the foramen ovale (an opening between the two atria) and the ductus arteriosus (between the pulmonary artery and the aorta). After birth, these structures close and the circulation changes to the adult pattern.", figure: {
        caption: "The three fetal shunts that bypass the liver and lungs: ductus venosus, foramen ovale and ductus arteriosus.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fetal circulation shunts diagram."><rect x="20" y="80" width="120" height="44" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="80" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">PLACENTA</text><text x="80" y="116" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">gas exchange</text><rect x="200" y="20" width="130" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="265" y="38" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">Ductus venosus</text><text x="265" y="52" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">bypasses liver</text><rect x="200" y="80" width="130" height="40" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="265" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#92400E">Foramen ovale</text><text x="265" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400E">RA to LA</text><rect x="200" y="140" width="130" height="40" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="265" y="158" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#92400E">Ductus arteriosus</text><text x="265" y="172" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400E">bypasses lungs</text><rect x="400" y="80" width="130" height="44" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="465" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">FETUS</text><text x="465" y="116" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">body tissues</text><line x1="140" y1="100" x2="198" y2="100" stroke="#7C2D12" stroke-width="2"/><line x1="330" y1="100" x2="398" y2="100" stroke="#7C2D12" stroke-width="2"/></svg>'
      } }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the process of fertilisation and implantation.",
      "Outline the stages of embryonic and fetal development.",
      "Describe the structure and functions of the placenta.",
      "What is amniotic fluid? Describe its functions and the meaning of polyhydramnios and oligohydramnios.",
      "Describe the fetal circulation and the three fetal shunts, and explain what happens to them after birth."
    ],
    assessment: [
      { type: "mcq", q: "The single cell formed by the union of sperm and ovum is the:", options: ["Morula", "Zygote", "Blastocyst", "Embryo"], answer: 1, rationale: "Fertilisation forms the zygote, which then divides into the morula and blastocyst." },
      { type: "mcq", q: "The placenta is normally fully formed by about:", options: ["4 weeks", "8 weeks", "12 weeks", "20 weeks"], answer: 2, rationale: "The placenta is fully developed by approximately 12 weeks of gestation." },
      { type: "mcq", q: "The umbilical cord normally contains:", options: ["Two veins and one artery", "Two arteries and one vein", "One artery and one vein", "Three arteries"], answer: 1, rationale: "The cord has two arteries (carrying deoxygenated blood to the placenta) and one vein (carrying oxygenated blood to the fetus)." },
      { type: "mcq", q: "The fetal shunt between the two atria of the heart is the:", options: ["Ductus arteriosus", "Ductus venosus", "Foramen ovale", "Umbilical vein"], answer: 2, rationale: "The foramen ovale allows blood to pass from the right atrium to the left atrium, bypassing the lungs." },
      { type: "mcq", q: "The period when all major organs form and the embryo is most vulnerable to teratogens is:", options: ["Weeks 1-2", "Weeks 3-8", "Weeks 9-20", "Weeks 30-40"], answer: 1, rationale: "Organogenesis occurs in the embryonic period (weeks 3-8), making it the most vulnerable time." },
      { type: "mcq", q: "An excessive amount of amniotic fluid is called:", options: ["Oligohydramnios", "Polyhydramnios", "Anhydramnios", "Hydrops"], answer: 1, rationale: "Polyhydramnios is too much amniotic fluid; oligohydramnios is too little." },
      { type: "mcq", q: "The umbilical vein carries blood that is:", options: ["Deoxygenated, from fetus to placenta", "Oxygenated, from placenta to fetus", "Deoxygenated, from placenta to fetus", "Oxygenated, from fetus to placenta"], answer: 1, rationale: "The umbilical vein carries oxygenated, nutrient-rich blood from the placenta to the fetus." },
      { type: "mcq", q: "Implantation of the blastocyst usually occurs in the:", options: ["Cervix", "Lower uterine segment", "Upper part of the uterus", "Fallopian tube"], answer: 2, rationale: "Normal implantation occurs in the upper part (fundus) of the uterine cavity." },
      { type: "mcq", q: "The protective jelly surrounding the vessels in the umbilical cord is:", options: ["Vernix caseosa", "Wharton's jelly", "Meconium", "Lanugo"], answer: 1, rationale: "Wharton's jelly cushions and protects the cord vessels." },
      { type: "mcq", q: "Which is NOT a function of the placenta?", options: ["Respiration (gas exchange)", "Nutrition", "Production of hormones", "Digestion of solid food"], answer: 3, rationale: "The placenta provides gas exchange, nutrition, excretion, protection and hormone production, but does not digest solid food." }
      , { type: "fill", q: "The shunt that allows fetal blood to bypass the non-functioning lungs between the pulmonary artery and aorta is the ductus ____.", accept: ["arteriosus"], rationale: "The ductus arteriosus connects the pulmonary artery to the aorta in fetal life." }
      , { type: "fill", q: "The amount of amniotic fluid at term is about ____ mL.", accept: ["800-1000", "1000", "800", "800 to 1000"], rationale: "Amniotic fluid at term is approximately 800-1000 mL." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "mid-04-physio-changes",
    unit: "Unit 1 · Foundations & Antenatal",
    title: "Physiological Changes During Pregnancy",
    readMinutes: 16,
    summary: "The adaptations of the reproductive, cardiovascular, respiratory, gastrointestinal, urinary, musculoskeletal and other body systems during pregnancy.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "During pregnancy the woman's body undergoes profound changes, mainly driven by hormones (oestrogen, progesterone, hCG, human placental lactogen) and by the mechanical effect of the growing uterus. These adaptations support the growth of the fetus and prepare the mother for labour and breastfeeding. Understanding them helps the midwife distinguish normal changes from signs of complications." },
      { h: "Reproductive system", list: [
        "Uterus — enlarges enormously, from about 60 g to about 1000 g at term; muscle fibres hypertrophy.",
        "Cervix — softens (Goodell's sign) and a mucus plug (operculum) seals the canal.",
        "Vagina — softens, becomes violet (Chadwick's sign) and secretions increase.",
        "Breasts — enlarge, become tender; nipples and areolae darken; colostrum may appear in later pregnancy."
      ] },
      { h: "Cardiovascular system", p: "Blood volume increases by about 40-50%, but plasma increases more than red cells, causing a physiological (dilutional) anaemia. Cardiac output rises by about 30-40%. The heart rate increases by about 10-15 beats per minute. Blood pressure tends to fall slightly in mid-pregnancy and returns to normal near term. In late pregnancy, lying flat can compress the inferior vena cava (supine hypotensive syndrome), so a left-lateral tilt is advised." },
      { h: "Respiratory system", p: "Oxygen consumption increases by about 15-20%. Tidal volume rises and the woman breathes more deeply, often with a feeling of breathlessness. The diaphragm is pushed up by the growing uterus but compensated by flaring of the ribs." },
      { h: "Gastrointestinal system", list: [
        "Nausea and vomiting ('morning sickness') are common in early pregnancy.",
        "Progesterone relaxes smooth muscle, slowing gut motility, leading to constipation.",
        "Relaxation of the cardiac sphincter causes heartburn (reflux).",
        "Gums may become soft and bleed; saliva may increase."
      ] },
      { h: "Urinary system", p: "The kidneys work harder; the glomerular filtration rate rises. Frequency of micturition is common in early pregnancy (pressure of the uterus on the bladder) and again near term when the head engages. There may be mild physiological dilatation of the ureters." },
      { h: "Musculoskeletal and skin changes", list: [
        "The hormone relaxin softens the pelvic ligaments and joints in preparation for birth.",
        "The growing abdomen alters posture, increasing the curve of the lower back (lordosis) and causing backache.",
        "Skin pigmentation increases: linea nigra (dark line on the abdomen), chloasma (mask of pregnancy) and striae gravidarum (stretch marks)."
      ] },
      { h: "Metabolic and weight changes", p: "Average total weight gain in pregnancy is about 10-12 kg. Metabolism rises to support the fetus. There is increased need for protein, iron, folic acid, calcium and other nutrients. Glucose handling changes; some women develop gestational diabetes. Water retention is normal but excessive oedema may signal pre-eclampsia." }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the changes in the reproductive system during pregnancy.",
      "Explain the cardiovascular changes in pregnancy and why physiological anaemia occurs.",
      "List the gastrointestinal changes of pregnancy and their causes.",
      "Describe the skin and musculoskeletal changes during pregnancy.",
      "What is supine hypotensive syndrome and how is it prevented?"
    ],
    assessment: [
      { type: "mcq", q: "The physiological (dilutional) anaemia of pregnancy occurs because:", options: ["Red cells decrease", "Plasma volume increases more than red cell mass", "Iron stores rise", "Blood pressure falls"], answer: 1, rationale: "Plasma volume rises more than the red cell mass, diluting the haemoglobin concentration." },
      { type: "mcq", q: "The dark line that appears on the abdomen in pregnancy is called:", options: ["Striae gravidarum", "Chloasma", "Linea nigra", "Chadwick's sign"], answer: 2, rationale: "The linea nigra is the pigmented vertical line on the abdomen during pregnancy." },
      { type: "mcq", q: "Blood volume in pregnancy increases by approximately:", options: ["10%", "20%", "40-50%", "70%"], answer: 2, rationale: "Total blood volume rises by about 40-50% during pregnancy." },
      { type: "mcq", q: "Supine hypotensive syndrome is best prevented by:", options: ["Lying flat on the back", "Standing for long periods", "Lying in a left-lateral position or with a left tilt", "Sitting upright only"], answer: 2, rationale: "A left-lateral position relieves caval compression by the gravid uterus." },
      { type: "mcq", q: "Constipation in pregnancy is mainly due to:", options: ["Increased gut motility", "Progesterone relaxing smooth muscle and slowing the gut", "Reduced fluid intake only", "Iron deficiency"], answer: 1, rationale: "Progesterone relaxes smooth muscle, slowing gut motility and causing constipation." },
      { type: "mcq", q: "The bluish-violet discoloration of the vagina in pregnancy is:", options: ["Goodell's sign", "Chadwick's sign", "Hegar's sign", "Linea nigra"], answer: 1, rationale: "Chadwick's sign is the violet/blue discolouration of the vagina and cervix due to increased blood flow." },
      { type: "mcq", q: "The hormone mainly responsible for softening the pelvic ligaments is:", options: ["Oxytocin", "Relaxin", "Prolactin", "Cortisol"], answer: 1, rationale: "Relaxin softens ligaments and joints in preparation for birth." },
      { type: "mcq", q: "The average total weight gain in a normal pregnancy is about:", options: ["2-4 kg", "10-12 kg", "20-25 kg", "30 kg"], answer: 1, rationale: "A normal total weight gain is approximately 10-12 kg." },
      { type: "mcq", q: "Heartburn (reflux) in pregnancy is caused by:", options: ["Increased stomach acid only", "Relaxation of the cardiac (oesophageal) sphincter", "Reduced uterine size", "Dehydration"], answer: 1, rationale: "Progesterone relaxes the cardiac sphincter, allowing acid reflux and heartburn." },
      { type: "mcq", q: "Cardiac output during pregnancy:", options: ["Falls by 30%", "Stays the same", "Rises by about 30-40%", "Doubles by 8 weeks"], answer: 2, rationale: "Cardiac output increases by approximately 30-40% to meet the demands of pregnancy." }
      , { type: "fill", q: "The 'mask of pregnancy', a brownish facial pigmentation, is called ____.", accept: ["chloasma", "melasma"], rationale: "Chloasma (melasma) is the increased facial pigmentation of pregnancy." }
      , { type: "fill", q: "Softening of the cervix in early pregnancy is known as ____ sign.", accept: ["goodell", "goodell's"], rationale: "Goodell's sign is the softening of the cervix in early pregnancy." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "mid-05-diagnosis-edd",
    unit: "Unit 1 · Foundations & Antenatal",
    title: "Diagnosis of Pregnancy & Antenatal Care (EDD)",
    readMinutes: 16,
    summary: "Presumptive, probable and positive signs of pregnancy, calculation of the expected date of delivery using Naegele's rule, and the aims and organisation of antenatal care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Signs and symptoms of pregnancy", p: "The diagnosis of pregnancy is based on signs grouped into three categories according to certainty: presumptive (felt by the woman), probable (observed by the examiner) and positive (proof of a fetus). Only positive signs confirm pregnancy with certainty." },
      { h: "Presumptive signs (subjective)", list: [
        "Amenorrhoea (absence of menstruation).",
        "Nausea and vomiting ('morning sickness').",
        "Breast changes — tenderness and enlargement.",
        "Frequency of micturition.",
        "Fatigue and quickening (first felt fetal movements)."
      ] },
      { h: "Probable signs (objective)", list: [
        "Enlargement of the abdomen and uterus.",
        "Hegar's sign — softening of the lower uterine segment.",
        "Goodell's sign (cervix softening) and Chadwick's sign (violet vagina).",
        "Braxton Hicks contractions (painless practice contractions).",
        "A positive pregnancy test (detecting hCG in urine or blood) — highly suggestive but technically a probable sign."
      ] },
      { h: "Positive signs (diagnostic)", list: [
        "Fetal heart sounds heard (by Doppler from about 10-12 weeks, by Pinard stethoscope from about 20-24 weeks).",
        "Fetal movements felt by the examiner.",
        "Visualisation of the fetus on ultrasound."
      ] },
      { h: "Calculating the expected date of delivery (EDD)", p: "Pregnancy lasts about 280 days (40 weeks) from the first day of the last menstrual period (LMP). Naegele's rule is used to estimate the expected date of delivery: take the first day of the LMP, add 7 days, subtract 3 months, and add 1 year. For example, an LMP of 10 January gives an EDD of 17 October. The rule assumes a regular 28-day cycle; it is adjusted for longer or shorter cycles, and an early ultrasound gives a more accurate date.", figure: {
        caption: "Naegele's rule for estimating the expected date of delivery from the last menstrual period.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Naegele rule formula box."><rect x="20" y="20" width="520" height="110" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="48" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#7C2D12">NAEGELE\'S RULE (EDD)</text><text x="280" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#92400E">First day of LMP + 7 days - 3 months + 1 year</text><text x="280" y="110" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#15803D">e.g. LMP 10 Jan &#8594; EDD 17 Oct (same year)</text></svg>'
      } },
      { h: "Aims of antenatal care", list: [
        "Promote and maintain the health of mother and fetus throughout pregnancy.",
        "Detect and treat complications (e.g. anaemia, hypertension, infection) early.",
        "Prepare the woman physically and psychologically for labour, birth and parenting.",
        "Give health education on nutrition, hygiene, danger signs, breastfeeding and family planning.",
        "Build a trusting relationship and plan a safe place of birth."
      ] },
      { h: "Schedule of antenatal visits", p: "A woman should book early (in the first trimester). The WHO recommends a minimum of eight antenatal contacts for a positive pregnancy experience. At each visit the midwife checks weight, blood pressure, urine, fundal height, fetal heart and the woman's wellbeing, and provides health education and any needed investigations or immunisation (e.g. tetanus toxoid)." }
    ],
    references: REF_MID,
    examQuestions: [
      "Classify and describe the presumptive, probable and positive signs of pregnancy.",
      "State Naegele's rule and calculate the EDD for a woman whose LMP was 10 January.",
      "Describe the aims and importance of antenatal care.",
      "What is checked at each routine antenatal visit?",
      "Differentiate between probable and positive signs of pregnancy with examples."
    ],
    assessment: [
      { type: "mcq", q: "Which of the following is a POSITIVE (diagnostic) sign of pregnancy?", options: ["Amenorrhoea", "Positive urine pregnancy test", "Fetal heart sounds heard by the examiner", "Nausea and vomiting"], answer: 2, rationale: "Hearing the fetal heart is a positive sign because it proves a fetus is present; the others are presumptive or probable." },
      { type: "mcq", q: "Using Naegele's rule, the EDD for an LMP of 10 January is:", options: ["3 October", "17 October", "17 September", "10 November"], answer: 1, rationale: "10 Jan + 7 days = 17 Jan; minus 3 months = 17 Oct; plus 1 year gives 17 October." },
      { type: "mcq", q: "Naegele's rule assumes a menstrual cycle of:", options: ["21 days", "28 days", "35 days", "40 days"], answer: 1, rationale: "Naegele's rule is based on a regular 28-day cycle and is adjusted for other cycle lengths." },
      { type: "mcq", q: "The normal duration of pregnancy from the first day of the LMP is about:", options: ["240 days", "260 days", "280 days", "300 days"], answer: 2, rationale: "Pregnancy lasts about 280 days (40 weeks) from the first day of the LMP." },
      { type: "mcq", q: "Softening of the lower uterine segment in early pregnancy is:", options: ["Chadwick's sign", "Goodell's sign", "Hegar's sign", "Braxton Hicks sign"], answer: 2, rationale: "Hegar's sign is softening of the lower uterine segment, a probable sign." },
      { type: "mcq", q: "Painless practice contractions felt during pregnancy are called:", options: ["Braxton Hicks contractions", "Labour pains", "Show", "Quickening"], answer: 0, rationale: "Braxton Hicks are intermittent painless uterine contractions, a probable sign." },
      { type: "mcq", q: "Quickening refers to:", options: ["Rapid labour", "The first fetal movements felt by the mother", "Fast fetal heart rate", "Sudden weight gain"], answer: 1, rationale: "Quickening is the first perception of fetal movements by the mother." },
      { type: "mcq", q: "The hormone detected by a pregnancy test is:", options: ["Oestrogen", "Progesterone", "Human chorionic gonadotropin (hCG)", "Prolactin"], answer: 2, rationale: "Pregnancy tests detect hCG produced by the trophoblast." },
      { type: "mcq", q: "The WHO currently recommends a minimum number of antenatal contacts of:", options: ["Four", "Six", "Eight", "Twelve"], answer: 2, rationale: "WHO recommends a minimum of eight antenatal contacts for a positive pregnancy experience." },
      { type: "mcq", q: "Which is NOT routinely checked at every antenatal visit?", options: ["Blood pressure", "Urine for protein", "Fundal height", "Skull X-ray"], answer: 3, rationale: "BP, urine and fundal height are routine; an X-ray is not part of routine antenatal checks." }
      , { type: "fill", q: "To find the EDD by Naegele's rule, add 7 days, subtract 3 months and add ____ year to the first day of the LMP.", accept: ["1", "one"], rationale: "Naegele's rule adds 1 year (and 7 days, minus 3 months) to the LMP." }
      , { type: "fill", q: "The absence of menstruation, an early presumptive sign of pregnancy, is called ____.", accept: ["amenorrhoea", "amenorrhea"], rationale: "Amenorrhoea is a presumptive sign of pregnancy." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "mid-06-antenatal-assessment",
    unit: "Unit 1 · Foundations & Antenatal",
    title: "Antenatal Assessment, Screening & Health Education",
    readMinutes: 17,
    summary: "History taking, general and abdominal examination (inspection, palpation and auscultation), routine investigations and screening, and health education during pregnancy.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of antenatal assessment", p: "Antenatal assessment establishes a baseline, confirms fetal wellbeing and growth, and detects deviations from normal early. It combines history taking, physical examination and investigations at the booking visit and at each subsequent visit." },
      { h: "History taking", list: [
        "Personal and social history — age, occupation, support, habits.",
        "Menstrual history and LMP to calculate the EDD.",
        "Obstetric history — previous pregnancies, births and any complications.",
        "Medical and surgical history — diabetes, hypertension, heart disease, operations.",
        "Family history — twins, hereditary disease, diabetes.",
        "Present pregnancy — symptoms, danger signs, fetal movements."
      ] },
      { h: "General examination", p: "General examination includes height and weight, vital signs (blood pressure, pulse, temperature), checking for pallor (anaemia), jaundice, oedema, and examination of the breasts, heart, lungs and legs (for varicose veins or oedema). Significant findings are documented and acted upon." },
      { h: "Abdominal examination", p: "Abdominal examination is carried out by inspection, palpation and auscultation (percussion is not routine). It assesses uterine size, fetal lie, presentation, position, engagement and the fetal heart.", list: [
        "Inspection — size and shape of the abdomen, scars, linea nigra, striae, fetal movements.",
        "Palpation — fundal height (compared with gestation), fundal, lateral and pelvic palpation to determine lie, presentation, position and engagement.",
        "Auscultation — listening to the fetal heart (normal rate 110-160 beats per minute)."
      ] },
      { h: "Fundal height and growth", p: "From about 20-36 weeks the fundal height in centimetres approximately equals the gestation in weeks. The fundus reaches the umbilicus at about 20-22 weeks and the xiphisternum at about 36 weeks. A fundal height much larger or smaller than expected may indicate problems such as multiple pregnancy, polyhydramnios or growth restriction and warrants further assessment." },
      { h: "Routine investigations and screening", list: [
        "Blood — haemoglobin (anaemia), blood group and Rh, blood sugar, VDRL (syphilis), HIV, hepatitis B.",
        "Urine — protein (pre-eclampsia), sugar (diabetes) and for infection.",
        "Ultrasound — to confirm dates, number of fetuses, position of the placenta and fetal growth and anomalies.",
        "Tetanus toxoid immunisation as per schedule."
      ] },
      { h: "Health education in pregnancy", list: [
        "Nutrition — a balanced diet rich in protein, iron, folic acid and calcium; iron and folic acid supplements.",
        "Personal hygiene, rest, sleep, suitable exercise and avoidance of smoking, alcohol and unprescribed drugs.",
        "Recognition of danger signs — bleeding, severe headache, blurred vision, swelling of face/hands, reduced fetal movements, fever, leaking of fluid.",
        "Preparation for breastfeeding, birth and parenthood, and birth and emergency planning."
      ] }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the components of history taking at the antenatal booking visit.",
      "Explain how abdominal examination is performed and what it assesses.",
      "Describe the relationship between fundal height and gestation.",
      "List the routine investigations carried out during antenatal care.",
      "Outline the health education a midwife should give to a pregnant woman, including danger signs."
    ],
    assessment: [
      { type: "mcq", q: "The normal fetal heart rate at term is:", options: ["60-90 beats/min", "110-160 beats/min", "170-200 beats/min", "40-60 beats/min"], answer: 1, rationale: "The normal fetal heart rate is 110-160 beats per minute." },
      { type: "mcq", q: "Abdominal examination in pregnancy routinely includes all EXCEPT:", options: ["Inspection", "Palpation", "Auscultation", "Percussion"], answer: 3, rationale: "Percussion is not a routine part of obstetric abdominal examination; inspection, palpation and auscultation are." },
      { type: "mcq", q: "Between about 20 and 36 weeks the fundal height in centimetres roughly equals the:", options: ["Number of previous births", "Gestation in weeks", "Maternal weight", "Number of fetuses"], answer: 1, rationale: "Symphysis-fundal height in cm approximates the gestational age in weeks during this period." },
      { type: "mcq", q: "The fundus usually reaches the level of the umbilicus at about:", options: ["12 weeks", "16 weeks", "20-22 weeks", "36 weeks"], answer: 2, rationale: "The fundus reaches the umbilicus at about 20-22 weeks." },
      { type: "mcq", q: "Protein in the urine during pregnancy is an important screening sign for:", options: ["Diabetes", "Pre-eclampsia", "Anaemia", "Twins"], answer: 1, rationale: "Proteinuria with raised blood pressure suggests pre-eclampsia." },
      { type: "mcq", q: "Pallor of the conjunctiva on examination most likely indicates:", options: ["Jaundice", "Anaemia", "Infection", "Dehydration"], answer: 1, rationale: "Pallor suggests anaemia, which is common in pregnancy and must be treated." },
      { type: "mcq", q: "Which danger sign should a woman be taught to report immediately?", options: ["Mild fatigue", "Occasional Braxton Hicks contractions", "Severe headache with blurred vision", "Frequency of micturition"], answer: 2, rationale: "Severe headache with blurred vision may indicate pre-eclampsia and must be reported at once." },
      { type: "mcq", q: "Palpation that determines lie, presentation and position is part of:", options: ["General examination", "Abdominal examination", "Vaginal examination", "Auscultation"], answer: 1, rationale: "Obstetric abdominal palpation (fundal, lateral and pelvic) determines lie, presentation and position." },
      { type: "mcq", q: "Which supplement is routinely given in pregnancy to prevent anaemia and neural tube defects?", options: ["Vitamin C and zinc", "Iron and folic acid", "Calcium only", "Vitamin A"], answer: 1, rationale: "Iron and folic acid are routinely given; folic acid also reduces neural tube defects." },
      { type: "mcq", q: "Immunisation routinely offered in pregnancy to protect mother and baby is:", options: ["Polio vaccine", "Tetanus toxoid", "BCG", "Measles vaccine"], answer: 1, rationale: "Tetanus toxoid is given to prevent maternal and neonatal tetanus." }
      , { type: "fill", q: "Listening to the fetal heart during antenatal examination is called ____.", accept: ["auscultation"], rationale: "Auscultation is listening, usually to the fetal heart, with a stethoscope or Doppler." }
      , { type: "fill", q: "Reduced ____ movements is a danger sign the woman should report during pregnancy.", accept: ["fetal", "foetal", "baby"], rationale: "Reduced fetal movements may indicate fetal compromise and must be reported." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "mid-07-minor-disorders",
    unit: "Unit 1 · Foundations & Antenatal",
    title: "Minor Disorders of Pregnancy",
    readMinutes: 15,
    summary: "The common minor (but distressing) discomforts of pregnancy, their causes, and the advice and care the midwife gives to relieve them.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are minor disorders?", p: "Minor disorders are common discomforts of pregnancy caused by hormonal changes and the growing uterus. They are not dangerous in themselves but can distress the woman. The midwife should reassure her, advise on relief, and remain alert because some symptoms can resemble serious complications." },
      { h: "Nausea and vomiting ('morning sickness')", p: "Common in the first trimester, due to rising hCG and oestrogen. Advice: take small frequent meals, a dry biscuit before rising, avoid fatty and spicy foods, and take adequate fluids. If vomiting is severe and persistent with weight loss and dehydration it becomes hyperemesis gravidarum and needs medical care." },
      { h: "Heartburn and constipation", list: [
        "Heartburn — caused by relaxation of the cardiac sphincter and pressure from the uterus; advise small frequent meals, avoiding spicy/fatty food, not lying down soon after eating, and antacids if prescribed.",
        "Constipation — due to progesterone slowing the gut and iron supplements; advise high-fibre diet, plenty of fluids and regular exercise."
      ] },
      { h: "Backache and leg cramps", list: [
        "Backache — from softened ligaments (relaxin) and altered posture; advise good posture, low-heeled shoes, rest and gentle exercise.",
        "Leg cramps — possibly related to calcium/electrolyte changes and circulation; advise stretching, massage and avoiding pointing the toes."
      ] },
      { h: "Frequency of micturition and varicose veins", list: [
        "Frequency of micturition — from pressure of the uterus on the bladder; reassure, but exclude urinary infection if there is pain or burning.",
        "Varicose veins and haemorrhoids — from pressure on veins and progesterone; advise rest with legs elevated, avoid prolonged standing, and support stockings."
      ] },
      { h: "Other minor disorders", list: [
        "Fatigue and sleep disturbance — advise rest and reassurance.",
        "Breast tenderness — supportive well-fitting bra.",
        "Increased vaginal discharge — normal if white and non-itchy; treat if it is itchy, offensive or coloured.",
        "Fainting and dizziness — avoid prolonged standing and sudden position changes; avoid lying flat in late pregnancy.",
        "Excessive salivation, nasal stuffiness and bleeding gums — reassure and advise good oral hygiene."
      ] },
      { h: "Role of the midwife", p: "The midwife listens, reassures, explains the cause, gives practical advice, and teaches the woman to distinguish minor discomforts from danger signs. She must never dismiss a complaint without assessment, because a symptom such as severe vomiting, severe headache or excessive swelling can signal a serious condition." }
    ],
    references: REF_MID,
    examQuestions: [
      "List the common minor disorders of pregnancy and their causes.",
      "Describe the advice a midwife gives for nausea and vomiting in early pregnancy.",
      "How would you advise a woman with constipation and heartburn in pregnancy?",
      "Explain the management of backache and varicose veins during pregnancy.",
      "Why must a midwife never dismiss a minor complaint without assessment?"
    ],
    assessment: [
      { type: "mcq", q: "Morning sickness in early pregnancy is mainly related to rising levels of:", options: ["Insulin", "hCG and oestrogen", "Cortisol", "Thyroxine"], answer: 1, rationale: "Nausea and vomiting in early pregnancy are linked to rising hCG and oestrogen." },
      { type: "mcq", q: "Severe, persistent vomiting with dehydration and weight loss in pregnancy is called:", options: ["Morning sickness", "Hyperemesis gravidarum", "Heartburn", "Reflux"], answer: 1, rationale: "Excessive vomiting causing dehydration and weight loss is hyperemesis gravidarum, which needs medical care." },
      { type: "mcq", q: "Constipation in pregnancy is best managed by:", options: ["Reducing fluids", "A high-fibre diet, plenty of fluids and exercise", "Bed rest only", "Stopping all food"], answer: 1, rationale: "A high-fibre diet, adequate fluids and exercise relieve constipation." },
      { type: "mcq", q: "Backache in pregnancy is mainly caused by:", options: ["Infection", "Softened ligaments and altered posture", "Low blood sugar", "Anaemia"], answer: 1, rationale: "Relaxin softens ligaments and the changed centre of gravity causes backache." },
      { type: "mcq", q: "Appropriate advice for varicose veins in pregnancy is to:", options: ["Stand for long periods", "Rest with the legs elevated and use support stockings", "Massage with hot water", "Apply tight garters"], answer: 1, rationale: "Elevating the legs and using support stockings, while avoiding prolonged standing, relieve varicose veins." },
      { type: "mcq", q: "Heartburn in pregnancy can be relieved by:", options: ["Lying down immediately after eating", "Large heavy meals", "Small frequent meals and avoiding spicy/fatty food", "Skipping all meals"], answer: 2, rationale: "Small frequent meals and avoiding triggers reduce reflux; lying down after eating worsens it." },
      { type: "mcq", q: "Frequency of micturition with burning or pain should make the midwife suspect:", options: ["Normal pregnancy change", "Urinary tract infection", "Constipation", "Backache"], answer: 1, rationale: "Painful frequency suggests a urinary tract infection rather than the normal pressure effect." },
      { type: "mcq", q: "Vaginal discharge in pregnancy is considered abnormal when it is:", options: ["White and non-itchy", "Itchy, offensive or coloured", "Slightly increased", "Odourless"], answer: 1, rationale: "Itchy, offensive or coloured discharge suggests infection and needs treatment." },
      { type: "mcq", q: "Leg cramps in pregnancy may be relieved by:", options: ["Pointing the toes downward", "Stretching and massaging the muscle", "Standing still for long periods", "Restricting all fluids"], answer: 1, rationale: "Stretching and massaging the calf relieves cramp; pointing the toes can trigger it." },
      { type: "mcq", q: "The most important responsibility of the midwife regarding minor disorders is to:", options: ["Ignore all complaints", "Prescribe strong drugs", "Distinguish minor discomforts from danger signs", "Advise complete bed rest for all"], answer: 2, rationale: "The midwife must assess each complaint to distinguish minor discomforts from serious complications." }
      , { type: "fill", q: "Excessive vomiting in pregnancy causing dehydration is called hyperemesis ____.", accept: ["gravidarum"], rationale: "Hyperemesis gravidarum is severe pregnancy vomiting with dehydration." }
      , { type: "fill", q: "The hormone ____ relaxes smooth muscle and is responsible for both heartburn and constipation in pregnancy.", accept: ["progesterone"], rationale: "Progesterone relaxes smooth muscle, slowing the gut and the cardiac sphincter." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "mid-08-early-bleeding",
    unit: "Unit 2 · High-Risk Pregnancy",
    title: "Bleeding in Early Pregnancy (Abortion, Ectopic, Hydatidiform Mole)",
    readMinutes: 18,
    summary: "Causes of bleeding in the first half of pregnancy: spontaneous abortion and its types, ectopic pregnancy and hydatidiform mole, with their features, management and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Bleeding in early pregnancy (before 24 weeks) is an emergency that frightens the woman and may threaten her life and the pregnancy. The three main causes are spontaneous abortion (miscarriage), ectopic pregnancy and hydatidiform mole. The midwife must assess, resuscitate if needed, and refer for definitive care." },
      { h: "Abortion (miscarriage) — definition and types", p: "Abortion is the loss of a pregnancy before viability (commonly taken as before 24 weeks or fetus under 500 g). Types include:", list: [
        "Threatened — slight bleeding, closed cervix; pregnancy may continue.",
        "Inevitable — bleeding with pain and an open cervix; pregnancy cannot continue.",
        "Incomplete — some products of conception expelled, some retained; bleeding continues.",
        "Complete — all products expelled; bleeding and pain settle.",
        "Missed — fetus dead but retained in the uterus.",
        "Septic — abortion complicated by infection.",
        "Recurrent (habitual) — three or more consecutive spontaneous abortions."
      ] },
      { h: "Abortion — causes and management", p: "Causes include chromosomal/genetic abnormalities, maternal infections, hormonal problems, uterine or cervical abnormalities (incompetent cervix) and trauma. Management depends on the type: rest and observation for threatened abortion; evacuation of the uterus (MVA or D&C) for incomplete or missed abortion; antibiotics and evacuation for septic abortion. Blood loss is corrected and anti-D is given to Rh-negative women." },
      { h: "Ectopic pregnancy", p: "An ectopic pregnancy is implantation of the fertilised ovum outside the uterine cavity, most commonly in the fallopian tube. Risk factors include previous pelvic infection (PID), tubal surgery, previous ectopic and IUCD use. Classic features are amenorrhoea, lower abdominal pain and slight vaginal bleeding; a ruptured ectopic causes severe pain, signs of internal haemorrhage and shock — a life-threatening emergency. Diagnosis is by ultrasound and hCG. Management is urgent: resuscitation and surgery (often salpingectomy) or, in selected early cases, medical treatment.", figure: {
        caption: "Common causes of bleeding in early pregnancy.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causes of early pregnancy bleeding."><rect x="20" y="20" width="520" height="34" rx="8" fill="#7C2D12"/><text x="280" y="43" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FFF7ED">BLEEDING IN EARLY PREGNANCY</text><rect x="20" y="74" width="160" height="60" rx="8" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="100" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Abortion</text><text x="100" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">miscarriage</text><rect x="200" y="74" width="160" height="60" rx="8" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="280" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Ectopic</text><text x="280" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">implant outside uterus</text><rect x="380" y="74" width="160" height="60" rx="8" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="460" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Hydatidiform</text><text x="460" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">mole</text></svg>'
      } },
      { h: "Hydatidiform mole (molar pregnancy)", p: "A hydatidiform mole is an abnormal pregnancy in which the chorionic villi degenerate into grape-like vesicles and there is usually no normal fetus. Features include vaginal bleeding (often brownish), a uterus larger than the dates, severe vomiting, very high hCG levels, and sometimes early pre-eclampsia. Diagnosis is by ultrasound ('snowstorm' appearance) and hCG. Management is evacuation of the uterus and careful follow-up of hCG, because a mole can rarely become a malignant choriocarcinoma." },
      { h: "Nursing management", list: [
        "Assess and record vital signs; watch for signs of shock (rapid weak pulse, low BP, pallor).",
        "Establish IV access, give fluids/blood as ordered, and keep the woman nil by mouth if surgery is likely.",
        "Save and assess all pads and any passed products; estimate blood loss accurately.",
        "Prepare the woman physically and emotionally for any procedure and obtain consent.",
        "Give prescribed medication (analgesia, antibiotics, anti-D, oxytocics) and monitor response.",
        "Provide emotional support for grief and loss, and give clear discharge advice and follow-up."
      ] },
      { h: "Complications", p: "Complications of early-pregnancy bleeding include haemorrhage and hypovolaemic shock, infection (sepsis), tubal rupture in ectopic pregnancy, and, with a mole, persistent trophoblastic disease or choriocarcinoma. Prompt recognition, resuscitation and referral save lives." }
    ],
    references: REF_MID,
    examQuestions: [
      "Define abortion and describe its different types.",
      "Describe the signs, symptoms and management of ectopic pregnancy.",
      "What is a hydatidiform mole? Describe its features and management.",
      "Outline the nursing management of a woman with bleeding in early pregnancy.",
      "List the complications of bleeding in early pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "Loss of pregnancy before viability is called:", options: ["Antepartum haemorrhage", "Abortion", "Preterm labour", "Stillbirth"], answer: 1, rationale: "Abortion is the loss of a pregnancy before the fetus is viable." },
      { type: "mcq", q: "In a threatened abortion the cervix is:", options: ["Open with heavy bleeding", "Closed with slight bleeding", "Fully dilated", "Replaced by products"], answer: 1, rationale: "In threatened abortion there is slight bleeding but the cervix remains closed and the pregnancy may continue." },
      { type: "mcq", q: "The most common site of an ectopic pregnancy is the:", options: ["Ovary", "Cervix", "Fallopian tube", "Abdominal cavity"], answer: 2, rationale: "Most ectopic pregnancies implant in the fallopian tube." },
      { type: "mcq", q: "A ruptured ectopic pregnancy typically presents with:", options: ["Painless bleeding only", "Severe pain and signs of internal haemorrhage and shock", "No symptoms", "High fever alone"], answer: 1, rationale: "Tubal rupture causes severe pain, internal bleeding and shock, a surgical emergency." },
      { type: "mcq", q: "Three or more consecutive spontaneous abortions are termed:", options: ["Missed abortion", "Septic abortion", "Recurrent (habitual) abortion", "Complete abortion"], answer: 2, rationale: "Recurrent or habitual abortion is three or more consecutive spontaneous losses." },
      { type: "mcq", q: "A uterus larger than the dates with very high hCG and grape-like vesicles suggests:", options: ["Twin pregnancy", "Hydatidiform mole", "Ectopic pregnancy", "Threatened abortion"], answer: 1, rationale: "A hydatidiform mole causes a large-for-dates uterus, very high hCG and vesicular (molar) tissue." },
      { type: "mcq", q: "Abortion complicated by infection is called:", options: ["Complete abortion", "Threatened abortion", "Septic abortion", "Missed abortion"], answer: 2, rationale: "Septic abortion is abortion with infection and requires antibiotics and evacuation." },
      { type: "mcq", q: "A rare malignant complication that can follow a hydatidiform mole is:", options: ["Fibroid", "Choriocarcinoma", "Ovarian cyst", "Endometriosis"], answer: 1, rationale: "A mole can rarely progress to choriocarcinoma, so hCG follow-up is essential." },
      { type: "mcq", q: "Anti-D immunoglobulin after abortion is given to women who are:", options: ["Rh positive", "Rh negative", "Blood group O", "Diabetic"], answer: 1, rationale: "Anti-D is given to Rh-negative women to prevent isoimmunisation." },
      { type: "mcq", q: "The first priority in caring for a woman with heavy early-pregnancy bleeding and shock is to:", options: ["Send her home with advice", "Resuscitate (IV fluids, monitor vitals) and refer urgently", "Give oral iron and wait", "Reassure and observe only"], answer: 1, rationale: "Resuscitation with IV fluids and urgent referral takes priority in haemorrhagic shock." }
      , { type: "fill", q: "An abortion in which the fetus has died but is retained in the uterus is called a ____ abortion.", accept: ["missed"], rationale: "In a missed abortion the dead fetus is retained in the uterus." }
      , { type: "fill", q: "Implantation of the fertilised ovum outside the uterine cavity is called an ____ pregnancy.", accept: ["ectopic"], rationale: "An ectopic pregnancy implants outside the uterus, most often in the fallopian tube." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "mid-09-aph",
    unit: "Unit 2 · High-Risk Pregnancy",
    title: "Antepartum Haemorrhage (Placenta Praevia & Abruptio Placentae)",
    readMinutes: 18,
    summary: "Bleeding from the genital tract after 24 weeks: the two main causes — placenta praevia and abruptio placentae — with their types, features, differences, management and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Antepartum haemorrhage (APH) is bleeding from the genital tract after the 24th week of pregnancy and before the birth of the baby. It is a serious cause of maternal and fetal morbidity and mortality. The two major causes are placenta praevia and abruptio (premature separation of a normally situated) placentae." },
      { h: "Placenta praevia — definition and types", p: "In placenta praevia the placenta is wholly or partly implanted in the lower uterine segment, near or over the cervical os. It is graded by how much of the os is covered (from a low-lying placenta to a major praevia that completely covers the os). Risk factors include previous caesarean section, multiparity, multiple pregnancy and previous praevia." },
      { h: "Placenta praevia — features and management", p: "The classic feature is painless, recurrent, bright-red vaginal bleeding, usually with a soft, non-tender uterus and often a high or malpresenting fetal head. A vaginal examination must NOT be done if praevia is suspected, as it can provoke torrential bleeding; diagnosis is by ultrasound. Management depends on the amount of bleeding and gestation: conservative care with hospital admission and rest if bleeding is slight and the fetus is preterm; delivery (usually by caesarean section for major praevia) if bleeding is heavy or at term." },
      { h: "Abruptio placentae", p: "Abruptio placentae is premature separation of a normally situated placenta after 24 weeks. It may be revealed (blood escapes through the vagina), concealed (blood trapped behind the placenta) or mixed. Risk factors include hypertension/pre-eclampsia, trauma, previous abruption, multiparity and sudden uterine decompression. Features are abdominal pain with a tense, tender, 'woody-hard' uterus, dark vaginal bleeding (which may be slight or absent if concealed), and signs of shock that may be out of proportion to the visible blood loss. The fetus is often distressed or dead.", figure: {
        caption: "Comparison of placenta praevia and abruptio placentae.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of placenta praevia and abruptio placentae."><rect x="20" y="20" width="250" height="150" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="145" y="44" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Placenta praevia</text><text x="35" y="72" font-family="sans-serif" font-size="11" fill="#7C2D12">- Painless bleeding</text><text x="35" y="92" font-family="sans-serif" font-size="11" fill="#7C2D12">- Bright red blood</text><text x="35" y="112" font-family="sans-serif" font-size="11" fill="#7C2D12">- Soft, non-tender uterus</text><text x="35" y="132" font-family="sans-serif" font-size="11" fill="#7C2D12">- Placenta in lower segment</text><text x="35" y="152" font-family="sans-serif" font-size="11" fill="#7C2D12">- NO vaginal exam</text><rect x="290" y="20" width="250" height="150" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="415" y="44" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#92400E">Abruptio placentae</text><text x="305" y="72" font-family="sans-serif" font-size="11" fill="#92400E">- Painful bleeding</text><text x="305" y="92" font-family="sans-serif" font-size="11" fill="#92400E">- Dark blood (may be hidden)</text><text x="305" y="112" font-family="sans-serif" font-size="11" fill="#92400E">- Tense, tender, hard uterus</text><text x="305" y="132" font-family="sans-serif" font-size="11" fill="#92400E">- Normally sited placenta</text><text x="305" y="152" font-family="sans-serif" font-size="11" fill="#92400E">- Shock &gt; visible loss</text></svg>'
      } },
      { h: "Management of abruptio placentae", p: "Abruption is an obstetric emergency. Management is resuscitation (IV fluids and blood), close monitoring of mother and fetus, and prompt delivery — vaginal birth if the fetus is dead and the mother is stable, or caesarean section if the fetus is alive and distressed or the mother is unstable. Coagulation must be watched, because abruption can cause disseminated intravascular coagulation (DIC)." },
      { h: "Nursing management of APH", list: [
        "Admit, reassure and keep the woman on bed rest; do NOT perform a vaginal examination.",
        "Assess and record vital signs frequently; watch for signs of shock and estimate blood loss from pads.",
        "Establish IV access, give fluids and arrange/administer blood as ordered; send blood for grouping and cross-match and clotting.",
        "Monitor the fetal heart and uterine activity; report changes promptly.",
        "Prepare for delivery (caesarean or vaginal) and obtain consent; give anti-D to Rh-negative women.",
        "Provide emotional support and accurate information to the woman and family."
      ] },
      { h: "Complications", p: "Complications of APH include hypovolaemic shock, disseminated intravascular coagulation, acute kidney injury, postpartum haemorrhage, fetal distress and death, and maternal death. Early recognition and rapid management are essential." }
    ],
    references: REF_MID,
    examQuestions: [
      "Define antepartum haemorrhage and name its two main causes.",
      "Describe placenta praevia, its types and management.",
      "Describe abruptio placentae and differentiate it from placenta praevia.",
      "Outline the nursing management of a woman with antepartum haemorrhage.",
      "List the complications of antepartum haemorrhage."
    ],
    assessment: [
      { type: "mcq", q: "Antepartum haemorrhage is bleeding from the genital tract after:", options: ["12 weeks", "20 weeks", "24 weeks", "37 weeks"], answer: 2, rationale: "APH is bleeding after the 24th week and before birth." },
      { type: "mcq", q: "Placenta praevia means the placenta is implanted in the:", options: ["Fundus", "Lower uterine segment", "Fallopian tube", "Cervix only"], answer: 1, rationale: "In placenta praevia the placenta lies wholly or partly in the lower uterine segment." },
      { type: "mcq", q: "The classic feature of placenta praevia is:", options: ["Painful dark bleeding with a hard uterus", "Painless, bright-red, recurrent bleeding", "No bleeding at all", "High fever"], answer: 1, rationale: "Placenta praevia typically causes painless, recurrent, bright-red bleeding with a soft uterus." },
      { type: "mcq", q: "A 'woody-hard', tense and tender uterus with pain suggests:", options: ["Placenta praevia", "Abruptio placentae", "Normal labour", "Hydatidiform mole"], answer: 1, rationale: "Abruptio placentae causes a tense, tender, hard uterus with pain." },
      { type: "mcq", q: "In suspected placenta praevia, the midwife must NOT perform:", options: ["Abdominal palpation", "A vaginal (digital) examination", "Blood pressure check", "Fetal heart monitoring"], answer: 1, rationale: "A vaginal examination in praevia can provoke torrential, life-threatening bleeding." },
      { type: "mcq", q: "Abruptio placentae in which blood is trapped behind the placenta is called:", options: ["Revealed", "Concealed", "Marginal", "Minor"], answer: 1, rationale: "In concealed abruption the blood is trapped behind the placenta, so visible loss is small but shock may be severe." },
      { type: "mcq", q: "A serious clotting complication of severe abruptio placentae is:", options: ["Anaemia only", "Disseminated intravascular coagulation (DIC)", "Jaundice", "Diabetes"], answer: 1, rationale: "Severe abruption can cause DIC, a dangerous coagulation failure." },
      { type: "mcq", q: "A major risk factor specifically associated with abruptio placentae is:", options: ["Previous caesarean section", "Pre-eclampsia / hypertension", "Twin pregnancy alone", "Low-lying placenta"], answer: 1, rationale: "Hypertension and pre-eclampsia are strongly linked with placental abruption." },
      { type: "mcq", q: "The investigation of choice to diagnose placenta praevia is:", options: ["Vaginal examination", "Ultrasound", "X-ray", "Urine test"], answer: 1, rationale: "Ultrasound safely locates the placenta and confirms praevia." },
      { type: "mcq", q: "In APH with heavy bleeding and shock, the immediate priority is to:", options: ["Discharge the woman", "Resuscitate with IV fluids/blood and prepare for delivery", "Give oral iron only", "Perform a vaginal examination"], answer: 1, rationale: "Resuscitation and prompt delivery are the priorities in heavy APH with shock." }
      , { type: "fill", q: "Premature separation of a normally situated placenta is called ____ placentae.", accept: ["abruptio", "abruption"], rationale: "Abruptio placentae is premature separation of a normally sited placenta." }
      , { type: "fill", q: "In placenta praevia the placenta lies in the ____ uterine segment.", accept: ["lower"], rationale: "Placenta praevia is implantation in the lower uterine segment." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "mid-10-hypertensive",
    unit: "Unit 2 · High-Risk Pregnancy",
    title: "Hypertensive Disorders of Pregnancy (Pre-eclampsia & Eclampsia)",
    readMinutes: 18,
    summary: "Classification of hypertensive disorders in pregnancy, the features and management of pre-eclampsia and eclampsia, the role of magnesium sulphate, and detailed nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Classification", list: [
        "Chronic hypertension — high blood pressure present before pregnancy or before 20 weeks.",
        "Gestational hypertension — new hypertension after 20 weeks without proteinuria.",
        "Pre-eclampsia — hypertension after 20 weeks with proteinuria (and/or other organ involvement).",
        "Eclampsia — pre-eclampsia complicated by convulsions (fits).",
        "Pre-eclampsia superimposed on chronic hypertension."
      ] },
      { h: "Pre-eclampsia — definition and risk factors", p: "Pre-eclampsia is a multisystem disorder of pregnancy characterised by new hypertension (blood pressure 140/90 mmHg or more) after 20 weeks, usually with proteinuria. Risk factors include first pregnancy, extremes of maternal age, multiple pregnancy, obesity, diabetes, chronic hypertension or kidney disease, and a previous or family history of pre-eclampsia." },
      { h: "Pathophysiology (brief)", p: "Pre-eclampsia is thought to begin with abnormal development of the placental blood vessels, leading to a poorly perfused placenta. This triggers widespread damage to the lining of the mother's blood vessels (endothelial dysfunction), causing vasoconstriction (raised blood pressure), leaky vessels (oedema and proteinuria) and reduced blood flow to organs including the kidneys, liver, brain and placenta." },
      { h: "Clinical features", list: [
        "Raised blood pressure (140/90 mmHg or more).",
        "Proteinuria.",
        "Oedema, especially of the face and hands.",
        "Severe features (imminent eclampsia): severe headache, blurred vision/flashing lights, epigastric or right-upper-quadrant pain, vomiting, reduced urine output, and brisk reflexes/clonus."
      ] },
      { h: "Eclampsia", p: "Eclampsia is the occurrence of one or more convulsions (tonic-clonic fits) in a woman with pre-eclampsia, not caused by another condition. It can occur before, during or after labour and is a life-threatening emergency. Management aims to control the fit, prevent further fits, control blood pressure and deliver the baby once the mother is stabilised." },
      { h: "Management", list: [
        "Antihypertensive drugs to control severe high blood pressure (e.g. labetalol, hydralazine, methyldopa as prescribed).",
        "Magnesium sulphate is the drug of choice to prevent and treat eclamptic convulsions; give as prescribed and monitor for toxicity (loss of patellar reflexes, slow respiration below 12-16/min, low urine output) — the antidote is calcium gluconate.",
        "Monitor blood pressure, urine output, reflexes and fetal condition closely.",
        "The definitive cure of pre-eclampsia/eclampsia is delivery of the baby and placenta; timing depends on severity and gestation."
      ] },
      { h: "Nursing management", list: [
        "Provide a quiet, calm environment with minimal stimulation; keep emergency equipment and drugs (magnesium sulphate, calcium gluconate) ready.",
        "Monitor blood pressure, pulse, respiration, deep tendon reflexes and fetal heart regularly; record fluid intake and output.",
        "Test urine for protein; observe for signs of imminent eclampsia (headache, visual disturbance, epigastric pain).",
        "During a fit: protect the airway, position on the side, prevent injury, give oxygen and magnesium sulphate as ordered, and call for help.",
        "Administer prescribed drugs accurately and watch for magnesium toxicity.",
        "Give emotional support and continue careful observation into the postnatal period, as eclampsia can occur after birth."
      ] },
      { h: "Complications", p: "Complications include eclampsia, HELLP syndrome (Haemolysis, Elevated Liver enzymes, Low Platelets), cerebral haemorrhage, kidney and liver failure, pulmonary oedema, abruptio placentae, fetal growth restriction, preterm birth and death of mother or baby." }
    ],
    references: REF_MID,
    examQuestions: [
      "Classify the hypertensive disorders of pregnancy.",
      "Define pre-eclampsia and describe its clinical features.",
      "Describe the management of eclampsia, including the role of magnesium sulphate.",
      "Outline the nursing management of a woman with severe pre-eclampsia.",
      "List the complications of pre-eclampsia and eclampsia."
    ],
    assessment: [
      { type: "mcq", q: "Pre-eclampsia is defined as hypertension after 20 weeks together with:", options: ["Glycosuria", "Proteinuria", "Ketonuria", "Haematuria"], answer: 1, rationale: "Pre-eclampsia is new hypertension after 20 weeks usually accompanied by proteinuria." },
      { type: "mcq", q: "The blood pressure level used to define hypertension in pregnancy is:", options: ["120/80 mmHg or more", "130/85 mmHg or more", "140/90 mmHg or more", "160/110 mmHg or more"], answer: 2, rationale: "A blood pressure of 140/90 mmHg or more defines hypertension in pregnancy." },
      { type: "mcq", q: "Pre-eclampsia complicated by convulsions is called:", options: ["Gestational hypertension", "Eclampsia", "Chronic hypertension", "HELLP syndrome"], answer: 1, rationale: "Eclampsia is pre-eclampsia with fits (convulsions)." },
      { type: "mcq", q: "The drug of choice to prevent and treat eclamptic convulsions is:", options: ["Diazepam", "Magnesium sulphate", "Phenytoin", "Hydralazine"], answer: 1, rationale: "Magnesium sulphate is the drug of choice for preventing and controlling eclamptic fits." },
      { type: "mcq", q: "The antidote for magnesium sulphate toxicity is:", options: ["Calcium gluconate", "Naloxone", "Vitamin K", "Atropine"], answer: 0, rationale: "Calcium gluconate is the antidote for magnesium sulphate toxicity." },
      { type: "mcq", q: "An early sign of magnesium sulphate toxicity is:", options: ["Brisk reflexes", "Loss of patellar (knee) reflexes", "High urine output", "Rapid breathing"], answer: 1, rationale: "Loss of deep tendon (patellar) reflexes is an early warning of magnesium toxicity, with respiratory depression and low urine output." },
      { type: "mcq", q: "Which is a symptom of imminent (impending) eclampsia?", options: ["Mild ankle swelling", "Severe headache with blurred vision and epigastric pain", "Frequency of micturition", "Backache"], answer: 1, rationale: "Severe headache, visual disturbance and epigastric pain warn of impending eclampsia." },
      { type: "mcq", q: "The only definitive cure for pre-eclampsia/eclampsia is:", options: ["Bed rest", "Salt restriction", "Delivery of the baby and placenta", "Diuretics"], answer: 2, rationale: "Pre-eclampsia resolves after delivery of the baby and placenta; other measures only control it." },
      { type: "mcq", q: "HELLP syndrome stands for haemolysis, elevated liver enzymes and:", options: ["Low platelets", "Low potassium", "Low protein", "Low pulse"], answer: 0, rationale: "HELLP = Haemolysis, Elevated Liver enzymes, Low Platelets." },
      { type: "mcq", q: "During an eclamptic fit, the first nursing priority is to:", options: ["Take the blood pressure", "Protect the airway, position on the side and prevent injury", "Start oral feeding", "Leave the woman alone"], answer: 1, rationale: "Airway protection, side-lying position and injury prevention come first during a convulsion." }
      , { type: "fill", q: "The presence of convulsions in a woman with pre-eclampsia is called ____.", accept: ["eclampsia"], rationale: "Eclampsia is pre-eclampsia complicated by fits." }
      , { type: "fill", q: "The drug ____ sulphate is used to prevent and control eclamptic convulsions.", accept: ["magnesium"], rationale: "Magnesium sulphate is the anticonvulsant of choice in eclampsia." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "mid-11-medical-disorders",
    unit: "Unit 2 · High-Risk Pregnancy",
    title: "Other Medical Disorders in Pregnancy (Anaemia, Diabetes, Hyperemesis)",
    readMinutes: 18,
    summary: "Common medical conditions complicating pregnancy — anaemia, gestational diabetes mellitus, and hyperemesis gravidarum — with their effects, management and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Anaemia in pregnancy — definition", p: "Anaemia in pregnancy is commonly defined as a haemoglobin level below 11 g/dL. The commonest type is iron-deficiency anaemia; folic acid deficiency also occurs. The increased blood volume of pregnancy causes a physiological fall in haemoglobin, but true anaemia is a deficiency that needs treatment." },
      { h: "Anaemia — causes, effects and management", list: [
        "Causes — poor iron/folate intake, repeated or closely spaced pregnancies, blood loss, infection and worm infestation (hookworm).",
        "Effects on the mother — fatigue, breathlessness, poor resistance to infection, poor tolerance of blood loss at birth and risk of heart failure if severe.",
        "Effects on the fetus — growth restriction, prematurity and low birth weight.",
        "Management — iron and folic acid supplements, a diet rich in iron and vitamin C, treating the cause (e.g. deworming), and blood transfusion only for severe anaemia near term.",
        "Prevention — routine iron and folic acid, good nutrition and early antenatal screening."
      ] },
      { h: "Diabetes in pregnancy", p: "Diabetes may be pre-existing (type 1 or 2) or gestational diabetes mellitus (GDM) — glucose intolerance first recognised in pregnancy. Pregnancy increases insulin resistance, so blood sugar can rise. Screening is by blood glucose testing, often an oral glucose tolerance test in at-risk women." },
      { h: "Diabetes — effects and management", list: [
        "Effects on the mother — polyhydramnios, infections, pre-eclampsia, and higher rates of operative and difficult births.",
        "Effects on the baby — macrosomia (large baby), risk of shoulder dystocia and birth injury, neonatal hypoglycaemia, respiratory distress, and (with poor control in early pregnancy) congenital abnormalities.",
        "Management — diet, monitoring of blood glucose, insulin if needed (oral hypoglycaemics generally avoided/used selectively), and careful timing and conduct of birth.",
        "Nursing care — teach diet and glucose monitoring, watch for hypo- and hyperglycaemia, and observe the baby for hypoglycaemia after birth (early feeding)."
      ] },
      { h: "Hyperemesis gravidarum", p: "Hyperemesis gravidarum is severe, persistent vomiting in early pregnancy that causes dehydration, weight loss, and electrolyte and metabolic disturbance. It is more than ordinary morning sickness. Features include intractable vomiting, dehydration (dry tongue, sunken eyes, reduced urine), weight loss, ketonuria and, if severe, electrolyte imbalance.", figure: {
        caption: "Three common medical disorders complicating pregnancy.",
        svg: '<svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Common medical disorders in pregnancy."><rect x="20" y="20" width="160" height="100" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="100" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Anaemia</text><text x="100" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Hb &lt; 11 g/dL</text><text x="100" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">iron &amp; folic acid</text><rect x="200" y="20" width="160" height="100" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#92400E">Diabetes</text><text x="280" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">GDM</text><text x="280" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">large baby risk</text><rect x="380" y="20" width="160" height="100" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="460" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Hyperemesis</text><text x="460" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">severe vomiting</text><text x="460" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">dehydration</text></svg>'
      } },
      { h: "Hyperemesis — management and nursing care", list: [
        "Admit; rest the gut and correct dehydration with intravenous fluids and electrolytes as prescribed.",
        "Give prescribed antiemetics and, where indicated, thiamine (vitamin B1) to prevent deficiency.",
        "Keep accurate intake/output records, monitor weight and test urine for ketones.",
        "Reintroduce small, frequent, light meals gradually as vomiting settles.",
        "Provide a calm environment and emotional support; exclude other causes such as molar pregnancy or infection."
      ] },
      { h: "Role of the midwife", p: "For all medical disorders the midwife screens early, educates the woman about diet and danger signs, monitors mother and fetus, administers treatment accurately, recognises deterioration, and refers for specialist obstetric and medical care while supporting the woman throughout." }
    ],
    references: REF_MID,
    examQuestions: [
      "Define anaemia in pregnancy and describe its causes, effects and management.",
      "Describe the effects of diabetes on pregnancy for both mother and baby.",
      "What is hyperemesis gravidarum? Describe its features and management.",
      "Outline the nursing care of a woman with hyperemesis gravidarum.",
      "Describe the role of the midwife in caring for women with medical disorders in pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "Anaemia in pregnancy is commonly defined as a haemoglobin level below:", options: ["9 g/dL", "11 g/dL", "13 g/dL", "15 g/dL"], answer: 1, rationale: "A haemoglobin below 11 g/dL is the common cut-off for anaemia in pregnancy." },
      { type: "mcq", q: "The most common type of anaemia in pregnancy is:", options: ["Sickle cell anaemia", "Iron-deficiency anaemia", "Aplastic anaemia", "Haemolytic anaemia"], answer: 1, rationale: "Iron-deficiency anaemia is the commonest type in pregnancy." },
      { type: "mcq", q: "Glucose intolerance first recognised during pregnancy is called:", options: ["Type 1 diabetes", "Type 2 diabetes", "Gestational diabetes mellitus", "Diabetes insipidus"], answer: 2, rationale: "Gestational diabetes mellitus (GDM) is glucose intolerance first detected in pregnancy." },
      { type: "mcq", q: "A baby of a diabetic mother is at particular risk of being:", options: ["Very small (growth-restricted only)", "Large (macrosomic) with risk of shoulder dystocia", "Premature only", "Anaemic only"], answer: 1, rationale: "Maternal diabetes commonly causes macrosomia, increasing the risk of shoulder dystocia and birth injury." },
      { type: "mcq", q: "After birth, the baby of a diabetic mother should be observed especially for:", options: ["Hyperglycaemia", "Hypoglycaemia", "Hypertension", "Jaundice only"], answer: 1, rationale: "These babies are prone to neonatal hypoglycaemia, so early feeding and glucose monitoring are needed." },
      { type: "mcq", q: "Hyperemesis gravidarum differs from ordinary morning sickness because it causes:", options: ["Mild nausea only", "Dehydration, weight loss and ketonuria", "Increased appetite", "No symptoms"], answer: 1, rationale: "Hyperemesis is severe vomiting causing dehydration, weight loss and ketonuria." },
      { type: "mcq", q: "The first step in managing hyperemesis gravidarum is to:", options: ["Force large meals", "Correct dehydration with IV fluids and electrolytes", "Give iron tablets", "Encourage exercise"], answer: 1, rationale: "Rehydration with IV fluids and electrolytes is the priority in hyperemesis." },
      { type: "mcq", q: "Vitamin commonly given in severe hyperemesis to prevent deficiency is:", options: ["Vitamin C", "Thiamine (B1)", "Vitamin D", "Vitamin K"], answer: 1, rationale: "Thiamine (vitamin B1) is given to prevent Wernicke's encephalopathy in prolonged vomiting." },
      { type: "mcq", q: "Severe anaemia at term increases the mother's risk of:", options: ["Better tolerance of blood loss", "Heart failure and poor tolerance of blood loss", "Faster labour", "Higher haemoglobin"], answer: 1, rationale: "Severe anaemia can lead to heart failure and poor tolerance of even normal blood loss at birth." },
      { type: "mcq", q: "Iron absorption from the diet is improved by taking iron with:", options: ["Tea", "Milk", "Vitamin C (e.g. citrus fruit)", "Antacids"], answer: 2, rationale: "Vitamin C enhances iron absorption, whereas tea, milk and antacids reduce it." }
      , { type: "fill", q: "Severe persistent vomiting of early pregnancy with dehydration is called hyperemesis ____.", accept: ["gravidarum"], rationale: "Hyperemesis gravidarum is severe pregnancy vomiting with dehydration." }
      , { type: "fill", q: "The most common type of anaemia in pregnancy is ____-deficiency anaemia.", accept: ["iron"], rationale: "Iron-deficiency anaemia is the commonest anaemia in pregnancy." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "mid-12-normal-labour",
    unit: "Unit 3 · Labour & Birth",
    title: "Normal Labour — Physiology, Mechanism & Stages",
    readMinutes: 18,
    summary: "The definition and signs of labour, the factors of labour (powers, passage, passenger), the stages of labour, and the mechanism of normal labour.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and onset of labour", p: "Labour is the process by which the products of conception (fetus, placenta and membranes) are expelled from the uterus after the 24th week of pregnancy. Normal (eutocic) labour occurs at term (37-42 weeks), with a single fetus presenting by the vertex, completed spontaneously through the vagina without complication. The exact trigger is not fully understood but involves hormonal changes (a fall in the progesterone effect, a rise in oestrogen, prostaglandins and oxytocin) and uterine stretch." },
      { h: "Signs of the onset of labour", list: [
        "Regular, painful uterine contractions that increase in strength, frequency and duration.",
        "'Show' — a blood-stained mucus discharge as the cervix begins to dilate.",
        "Rupture of the membranes with escape of amniotic fluid (may occur before or during labour).",
        "Progressive effacement (thinning) and dilatation of the cervix on examination."
      ] },
      { h: "The factors of labour: the 3 Ps", list: [
        "Powers — the forces that expel the fetus: uterine contractions (involuntary) and maternal pushing efforts in the second stage (voluntary).",
        "Passage — the bony pelvis and the soft tissues (cervix, vagina, pelvic floor) through which the fetus passes.",
        "Passenger — the fetus, including its size, lie, presentation, position and attitude, plus the placenta and membranes."
      ] },
      { h: "Key terms (lie, presentation, position, attitude)", list: [
        "Lie — the relationship of the long axis of the fetus to the long axis of the uterus (longitudinal, transverse or oblique).",
        "Presentation — the part of the fetus that lies at the pelvic brim (vertex, breech, shoulder, face or brow); vertex is normal.",
        "Position — the relationship of a fixed point on the presenting part (e.g. the occiput) to the mother's pelvis.",
        "Attitude — the relationship of the fetal parts to one another; the normal attitude is full flexion.",
        "Engagement — when the widest part of the presenting part has passed through the pelvic brim."
      ] },
      { h: "The stages of labour", p: "Labour is divided into stages.", list: [
        "First stage — from the onset of regular contractions to full dilatation of the cervix (10 cm); it has a latent phase (slow early dilatation) and an active phase.",
        "Second stage — from full dilatation to the birth of the baby.",
        "Third stage — from the birth of the baby to the delivery of the placenta and membranes.",
        "Fourth stage (some texts) — the first 1-2 hours after delivery, a period of close observation for haemorrhage."
      ] },
      { h: "Mechanism of normal labour", p: "The mechanism of labour is the series of passive movements the fetus makes to pass through the birth canal in a vertex presentation.", list: [
        "Engagement and descent of the head.",
        "Flexion of the head (chin onto chest) to present the smallest diameter.",
        "Internal rotation of the head so the occiput turns to the front.",
        "Extension of the head as it is born (crowning).",
        "Restitution and external rotation as the head realigns with the shoulders.",
        "Lateral flexion as the shoulders and body are born."
      ], figure: {
        caption: "The stages of labour from onset of contractions to delivery of the placenta.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of labour."><defs><marker id="midArrL" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="15" y="40" width="150" height="55" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="90" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">1st stage</text><text x="90" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">onset to full dilatation</text><rect x="205" y="40" width="150" height="55" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400E">2nd stage</text><text x="280" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">full dilatation to birth</text><rect x="395" y="40" width="150" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="470" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">3rd stage</text><text x="470" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">birth to placenta</text><line x1="165" y1="67" x2="201" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#midArrL)"/><line x1="355" y1="67" x2="391" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#midArrL)"/></svg>'
      } },
      { h: "Physiological and psychological changes in labour", p: "During labour the maternal pulse, blood pressure and temperature may rise slightly; metabolism and oxygen consumption increase. The uterus contracts and retracts, the upper segment thickens to push the fetus down while the lower segment and cervix thin and dilate. The woman may feel anxious, fearful or excited; continuous support, information and reassurance help her cope." }
    ],
    references: REF_MID,
    examQuestions: [
      "Define normal labour and describe the signs of its onset.",
      "Explain the three factors of labour (the 3 Ps).",
      "Describe the stages of labour.",
      "Describe the mechanism of normal labour in a vertex presentation.",
      "Define lie, presentation, position and attitude with examples."
    ],
    assessment: [
      { type: "mcq", q: "The first stage of labour ends with:", options: ["The show", "Full dilatation of the cervix", "Birth of the baby", "Delivery of the placenta"], answer: 1, rationale: "The first stage extends from onset of labour to full dilatation (10 cm) of the cervix." },
      { type: "mcq", q: "The third stage of labour is from the birth of the baby to:", options: ["Full dilatation", "Crowning", "Delivery of the placenta and membranes", "Onset of contractions"], answer: 2, rationale: "The third stage is from delivery of the baby to expulsion of the placenta and membranes." },
      { type: "mcq", q: "The normal presentation for vaginal birth is the:", options: ["Breech", "Shoulder", "Face", "Vertex"], answer: 3, rationale: "The vertex (well-flexed head) presentation is normal and most favourable for birth." },
      { type: "mcq", q: "The relationship of the long axis of the fetus to the long axis of the uterus is the:", options: ["Attitude", "Lie", "Position", "Presentation"], answer: 1, rationale: "Lie describes the relationship of the fetal long axis to the uterine long axis (e.g. longitudinal)." },
      { type: "mcq", q: "The 'powers' in the factors of labour refer to:", options: ["The pelvis", "Uterine contractions and maternal pushing", "The fetus", "The placenta"], answer: 1, rationale: "Powers are the expulsive forces: uterine contractions and the mother's pushing efforts." },
      { type: "mcq", q: "The blood-stained mucus discharge at the onset of labour is called the:", options: ["Liquor", "Show", "Caul", "Operculum plug only"], answer: 1, rationale: "The 'show' is the blood-stained mucus plug released as the cervix dilates." },
      { type: "mcq", q: "During the mechanism of labour, the head flexes in order to:", options: ["Present the largest diameter", "Present the smallest diameter", "Slow descent", "Cause extension early"], answer: 1, rationale: "Flexion brings the chin onto the chest so the smallest diameter of the head presents." },
      { type: "mcq", q: "The normal fetal attitude in labour is one of:", options: ["Full extension", "Full flexion", "Deflexion", "Lateral flexion"], answer: 1, rationale: "The normal attitude is full flexion, which presents the smallest diameters." },
      { type: "mcq", q: "Engagement of the fetal head means that:", options: ["The head is floating", "The widest part has passed through the pelvic brim", "The cervix is fully dilated", "The membranes have ruptured"], answer: 1, rationale: "Engagement occurs when the widest diameter of the presenting part passes the pelvic brim." },
      { type: "mcq", q: "Normal labour at term occurs between:", options: ["28 and 32 weeks", "33 and 36 weeks", "37 and 42 weeks", "43 and 45 weeks"], answer: 2, rationale: "Term labour occurs between 37 and 42 weeks of gestation." }
      , { type: "fill", q: "The second stage of labour is from full dilatation of the cervix to the ____ of the baby.", accept: ["birth", "delivery"], rationale: "The second stage runs from full dilatation to the birth of the baby." }
      , { type: "fill", q: "The three factors of labour are the powers, the passage and the ____.", accept: ["passenger"], rationale: "The 3 Ps are powers, passage and passenger." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "mid-13-first-stage-partograph",
    unit: "Unit 3 · Labour & Birth",
    title: "Management of the First Stage & the Partograph",
    readMinutes: 18,
    summary: "Care of the woman in the first stage of labour, monitoring of maternal and fetal wellbeing, and the use of the partograph to record progress and detect abnormal labour.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Aims of first-stage care", p: "The aims of care in the first stage are to support the woman, monitor the progress of labour and the wellbeing of mother and fetus, detect deviations from normal early, and prepare for a safe birth. Good observation and clear recording are central." },
      { h: "Admission and assessment", list: [
        "Welcome and reassure the woman; take a focused history and review the antenatal record.",
        "Carry out a general examination, vital signs and abdominal examination (lie, presentation, descent, fetal heart).",
        "Perform a vaginal examination (with consent and asepsis) to assess cervical effacement and dilatation, the presenting part, position and the membranes.",
        "Test urine and explain the plan of care to the woman."
      ] },
      { h: "Ongoing maternal observations", list: [
        "Contractions — frequency, duration and strength (commonly assessed each half hour).",
        "Pulse, blood pressure and temperature at regular intervals.",
        "Bladder care — encourage regular voiding; a full bladder slows progress.",
        "Fluids and light diet as appropriate; provide comfort, position changes and emotional support.",
        "Vaginal examination usually about every 4 hours to assess progress (unless indicated sooner)."
      ] },
      { h: "Fetal observations", p: "The fetal heart rate is monitored regularly (the normal range is 110-160 beats per minute), listening during and just after a contraction to detect decelerations. The colour of the amniotic fluid is observed; thick meconium-stained fluid or an abnormal heart rate suggests fetal distress and the need for action and referral." },
      { h: "The partograph", p: "The partograph (partogram) is a single chart used to record the progress of labour and the condition of mother and fetus over time. It gives an at-a-glance picture and helps detect abnormal (slow or obstructed) labour early so that timely action can be taken. It is started in the active phase of labour.", figure: {
        caption: "Main sections recorded on a partograph during the first stage of labour.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sections of a partograph."><rect x="20" y="15" width="520" height="30" rx="6" fill="#7C2D12"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">THE PARTOGRAPH RECORDS</text><rect x="20" y="55" width="120" height="90" rx="8" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="80" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Fetal</text><text x="80" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">heart rate</text><text x="80" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">liquor, moulding</text><rect x="150" y="55" width="120" height="90" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="210" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400E">Progress</text><text x="210" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">cervical dilatation</text><text x="210" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">descent, contractions</text><rect x="280" y="55" width="120" height="90" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="340" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Maternal</text><text x="340" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">BP, pulse, temp</text><text x="340" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">urine</text><rect x="410" y="55" width="130" height="90" rx="8" fill="#FFF7ED" stroke="#B45309" stroke-width="2"/><text x="475" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Alert &amp;</text><text x="475" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">action lines</text><text x="475" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">detect delay</text></svg>'
      } },
      { h: "Reading the partograph (alert and action lines)", p: "Cervical dilatation in the active phase normally progresses at roughly 1 cm per hour. The partograph has an alert line: if the plotted dilatation crosses to the right of the alert line, progress is slow and the woman should be observed closely or referred. If it crosses the action line, intervention is required. The partograph also records descent of the head, contractions, the fetal heart and maternal observations, giving an early warning of obstructed labour." },
      { h: "Nursing responsibilities", list: [
        "Make accurate, timely recordings and plot the partograph correctly.",
        "Recognise and report slow progress, fetal distress, or maternal deterioration early.",
        "Maintain comfort, hygiene, hydration and emotional support throughout.",
        "Keep the woman and family informed and involved in decisions."
      ] }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the management of a woman in the first stage of labour.",
      "What observations are made on the mother and fetus during the first stage?",
      "What is a partograph? Describe its purpose and the main things it records.",
      "Explain the alert line and action line on the partograph.",
      "List the nursing responsibilities during the first stage of labour."
    ],
    assessment: [
      { type: "mcq", q: "The partograph is mainly used to:", options: ["Calculate the EDD", "Record the progress of labour and condition of mother and fetus", "Measure the pelvis", "Diagnose pregnancy"], answer: 1, rationale: "The partograph records labour progress and maternal and fetal condition over time." },
      { type: "mcq", q: "In the active phase, cervical dilatation normally progresses at about:", options: ["0.1 cm per hour", "1 cm per hour", "5 cm per hour", "10 cm per hour"], answer: 1, rationale: "Active-phase dilatation progresses at roughly 1 cm per hour." },
      { type: "mcq", q: "Crossing the action line on the partograph indicates the need for:", options: ["Discharge home", "Intervention", "Reduced observation", "Nothing"], answer: 1, rationale: "Plotting to the right of the action line signals that intervention is required." },
      { type: "mcq", q: "The fetal heart rate during the first stage is normally:", options: ["60-90 beats/min", "110-160 beats/min", "170-200 beats/min", "40-60 beats/min"], answer: 1, rationale: "The normal fetal heart rate is 110-160 beats per minute." },
      { type: "mcq", q: "A full bladder in labour can:", options: ["Speed up labour", "Slow the progress of labour", "Improve descent", "Have no effect"], answer: 1, rationale: "A full bladder can obstruct descent and slow labour, so regular voiding is encouraged." },
      { type: "mcq", q: "Thick meconium-stained amniotic fluid suggests:", options: ["Normal labour", "Possible fetal distress", "Twin pregnancy", "Anaemia"], answer: 1, rationale: "Thick meconium-stained liquor may indicate fetal distress and needs prompt attention." },
      { type: "mcq", q: "Vaginal examination in normal first-stage labour is usually performed about every:", options: ["30 minutes", "1 hour", "4 hours", "12 hours"], answer: 2, rationale: "Routine vaginal examination is usually about every 4 hours unless indicated sooner." },
      { type: "mcq", q: "The partograph is generally started in the:", options: ["Latent phase", "Active phase of labour", "Third stage", "Postnatal period"], answer: 1, rationale: "The partograph is plotted from the active phase of the first stage." },
      { type: "mcq", q: "Crossing to the right of the ALERT line means progress is:", options: ["Faster than normal", "Slow, needing close observation or referral", "Complete", "Normal"], answer: 1, rationale: "Crossing the alert line warns of slow progress, prompting closer observation or referral." },
      { type: "mcq", q: "The fetal heart should be listened to especially:", options: ["Only before labour", "During and just after a contraction", "Only after birth", "Only if bleeding occurs"], answer: 1, rationale: "Listening during and just after a contraction helps detect decelerations indicating distress." }
      , { type: "fill", q: "The chart used to record the progress of labour is called the ____.", accept: ["partograph", "partogram"], rationale: "The partograph (partogram) records the progress of labour and maternal/fetal condition." }
      , { type: "fill", q: "In the active phase, the cervix normally dilates about ____ cm per hour.", accept: ["1", "one"], rationale: "Active-phase cervical dilatation is roughly 1 cm per hour." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "mid-14-second-third-stage",
    unit: "Unit 3 · Labour & Birth",
    title: "Management of the Second & Third Stages of Labour",
    readMinutes: 18,
    summary: "Conduct of the second stage and the birth of the baby, episiotomy, and the active management of the third stage to deliver the placenta and prevent haemorrhage.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The second stage of labour", p: "The second stage extends from full dilatation of the cervix to the birth of the baby. It is divided into a passive phase (full dilatation before the urge to push) and an active phase (the woman bears down with contractions). Signs that the second stage has begun include an expulsive urge to push, the perineum bulging, the anus gaping and the appearance of the presenting part at the vulva." },
      { h: "Conduct of the birth", list: [
        "Position the woman comfortably and encourage spontaneous pushing with contractions.",
        "Maintain strict asepsis and continue to monitor the fetal heart after each contraction.",
        "As the head crowns, guard the perineum and control the birth of the head slowly to prevent tears.",
        "Check for the cord around the neck; allow restitution and external rotation.",
        "Deliver the shoulders (anterior then posterior) and then the body, and note the time of birth."
      ] },
      { h: "Immediate care at birth", p: "Dry the baby quickly, assess breathing, place the baby skin-to-skin on the mother for warmth, and clamp and cut the cord (delayed cord clamping for about 1-3 minutes is recommended in a healthy baby). Record the Apgar score and start early breastfeeding." },
      { h: "Episiotomy", p: "An episiotomy is a deliberate surgical incision of the perineum, made under local anaesthesia at the height of a contraction when birth is imminent, to enlarge the vaginal outlet. Indications include a rigid perineum, an imminent severe tear, fetal distress requiring quicker birth, and instrumental or breech delivery. It is NOT done routinely; it is repaired in layers after the birth." },
      { h: "The third stage of labour", p: "The third stage is from the birth of the baby to the complete delivery of the placenta and membranes. It involves separation of the placenta from the uterine wall (shown by lengthening of the cord, a gush of blood and the uterus becoming firm and globular) and its expulsion. This stage carries the main risk of postpartum haemorrhage.", figure: {
        caption: "Active management of the third stage of labour to prevent postpartum haemorrhage.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Active management of third stage."><defs><marker id="midArr3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="10" y="40" width="160" height="55" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="90" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Uterotonic</text><text x="90" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">oxytocin after birth</text><rect x="200" y="40" width="160" height="55" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#92400E">Controlled cord</text><text x="280" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">traction</text><rect x="390" y="40" width="160" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="470" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Uterine massage</text><text x="470" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">check tone</text><line x1="170" y1="67" x2="196" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#midArr3)"/><line x1="360" y1="67" x2="386" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#midArr3)"/></svg>'
      } },
      { h: "Active management of the third stage", list: [
        "Give a uterotonic drug (oxytocin is the drug of choice) soon after the birth of the baby.",
        "Deliver the placenta by controlled cord traction with counter-pressure (guarding) on the uterus.",
        "Massage the uterine fundus after the placenta is delivered to ensure it is well contracted.",
        "Active management reduces the length of the third stage and the risk of postpartum haemorrhage."
      ] },
      { h: "Examination after the third stage", p: "After delivery the midwife examines the placenta and membranes to ensure they are complete (retained pieces cause bleeding and infection), estimates the blood loss, checks that the uterus is well contracted, and inspects the perineum and vagina for tears, which are repaired. The mother is observed closely for haemorrhage in the immediate postpartum period." }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the conduct of a normal birth in the second stage of labour.",
      "What is an episiotomy? State its indications.",
      "Describe the signs of placental separation.",
      "Explain the active management of the third stage of labour.",
      "Why is examination of the placenta and membranes important after the third stage?"
    ],
    assessment: [
      { type: "mcq", q: "The second stage of labour ends with:", options: ["Full dilatation", "Birth of the baby", "Delivery of the placenta", "The show"], answer: 1, rationale: "The second stage runs from full dilatation to the birth of the baby." },
      { type: "mcq", q: "A deliberate surgical incision of the perineum to enlarge the outlet is called:", options: ["Episiotomy", "Caesarean section", "Curettage", "Amniotomy"], answer: 0, rationale: "An episiotomy is a planned incision of the perineum to enlarge the vaginal outlet." },
      { type: "mcq", q: "The drug of choice for active management of the third stage is:", options: ["Magnesium sulphate", "Oxytocin", "Diazepam", "Hydralazine"], answer: 1, rationale: "Oxytocin is the recommended uterotonic for active management of the third stage." },
      { type: "mcq", q: "A sign of placental separation is:", options: ["Shortening of the cord", "Lengthening of the cord with a gush of blood", "The uterus becoming soft and flat", "Falling fundal height before separation"], answer: 1, rationale: "Lengthening of the cord, a gush of blood and a firm globular uterus indicate placental separation." },
      { type: "mcq", q: "Controlled cord traction must always be accompanied by:", options: ["Pulling hard on the cord", "Counter-pressure (guarding) on the uterus", "Massaging the cord", "Cutting the cord first"], answer: 1, rationale: "Counter-pressure on the uterus during controlled cord traction prevents uterine inversion." },
      { type: "mcq", q: "Examination of the placenta and membranes after birth is done to:", options: ["Estimate the EDD", "Ensure they are complete (no retained pieces)", "Measure the baby", "Diagnose anaemia"], answer: 1, rationale: "Retained placental fragments or membranes cause bleeding and infection, so completeness is checked." },
      { type: "mcq", q: "When the head crowns, the midwife should:", options: ["Pull the head out quickly", "Guard the perineum and control the birth slowly", "Press hard on the fundus", "Cut the cord"], answer: 1, rationale: "Guarding the perineum and slow, controlled birth of the head reduce perineal trauma." },
      { type: "mcq", q: "Delayed cord clamping in a healthy newborn is recommended for about:", options: ["Immediately (0 seconds)", "1-3 minutes", "10 minutes", "30 minutes"], answer: 1, rationale: "Delayed cord clamping for about 1-3 minutes benefits the healthy newborn's iron stores." },
      { type: "mcq", q: "The stage of labour with the greatest risk of postpartum haemorrhage is the:", options: ["First stage", "Second stage", "Third stage", "Latent phase"], answer: 2, rationale: "The third stage carries the main risk of postpartum haemorrhage." },
      { type: "mcq", q: "After the placenta is delivered, the midwife should:", options: ["Leave the uterus alone", "Massage the fundus to ensure it is well contracted", "Encourage the mother to walk immediately", "Give a diuretic"], answer: 1, rationale: "Uterine (fundal) massage ensures the uterus is contracted and prevents haemorrhage." }
      , { type: "fill", q: "A planned surgical incision of the perineum during birth is called an ____.", accept: ["episiotomy"], rationale: "An episiotomy enlarges the vaginal outlet to assist birth." }
      , { type: "fill", q: "The uterotonic drug of choice for active management of the third stage is ____.", accept: ["oxytocin"], rationale: "Oxytocin is the recommended uterotonic to prevent postpartum haemorrhage." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "mid-15-pain-relief",
    unit: "Unit 3 · Labour & Birth",
    title: "Pain Relief in Labour",
    readMinutes: 15,
    summary: "The nature of labour pain, non-pharmacological methods of relief, pharmacological analgesia and regional anaesthesia, and the midwife's role in supporting the woman.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nature of labour pain", p: "Pain in labour comes mainly from uterine contractions and dilatation of the cervix in the first stage, and from stretching of the vagina, pelvic floor and perineum in the second stage. The amount of pain experienced varies between women and is influenced by fear, anxiety, fatigue, culture and the support available. Reducing fear and giving support can reduce the perception of pain." },
      { h: "Aims of pain relief", list: [
        "Relieve suffering and help the woman cope with labour.",
        "Allow the woman to remain as much in control as possible.",
        "Use methods that are safe for both mother and baby.",
        "Respect the woman's wishes and informed choice."
      ] },
      { h: "Non-pharmacological methods", list: [
        "Continuous emotional support, reassurance, information and the presence of a companion.",
        "Relaxation and breathing techniques learned in antenatal classes.",
        "Position changes, walking, upright postures and use of a birthing ball.",
        "Massage, warm or cold compresses, and a warm bath or shower.",
        "A calm, private environment.",
        "These methods are safe, have no harmful effects on the baby and can be very effective."
      ] },
      { h: "Pharmacological analgesia", list: [
        "Inhalational analgesia — Entonox (a mix of nitrous oxide and oxygen) inhaled with contractions; quick-acting, self-administered and safe.",
        "Systemic opioids (e.g. pethidine/meperidine) given by injection; they relieve pain but can cause maternal drowsiness/nausea and, if given close to birth, respiratory depression in the newborn.",
        "Simple analgesics and antispasmodics in early labour as prescribed."
      ] },
      { h: "Regional and local anaesthesia", list: [
        "Epidural analgesia — a local anaesthetic injected into the epidural space gives effective pain relief for labour; it requires monitoring of blood pressure and the fetal heart and can reduce the urge to push.",
        "Spinal anaesthesia — used mainly for caesarean section and some instrumental births.",
        "Local infiltration / pudendal block — used for episiotomy, repair and some instrumental deliveries."
      ], figure: {
        caption: "Methods of pain relief in labour, from non-drug measures to regional anaesthesia.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Methods of pain relief in labour."><rect x="15" y="35" width="170" height="65" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="100" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Non-drug</text><text x="100" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">support, breathing,</text><text x="100" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">position, massage</text><rect x="195" y="35" width="170" height="65" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400E">Systemic drugs</text><text x="280" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">Entonox,</text><text x="280" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">opioids</text><rect x="375" y="35" width="170" height="65" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="460" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Regional</text><text x="460" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">epidural, spinal,</text><text x="460" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">local block</text></svg>'
      } },
      { h: "Role of the midwife", p: "The midwife assesses the woman's pain and wishes, explains the options and their effects, supports non-pharmacological methods, administers prescribed analgesia safely, monitors mother and fetus for side effects (for example watching for neonatal respiratory depression if an opioid was given near birth), and provides continuous reassurance. Good support is itself a powerful form of pain relief." }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the causes of pain in the first and second stages of labour.",
      "Describe the non-pharmacological methods of pain relief in labour.",
      "Discuss the pharmacological methods of pain relief and their effects on mother and baby.",
      "What is epidural analgesia? State its advantages and points to monitor.",
      "Describe the role of the midwife in relieving labour pain."
    ],
    assessment: [
      { type: "mcq", q: "Pain in the first stage of labour comes mainly from:", options: ["Stretching of the perineum", "Uterine contractions and cervical dilatation", "The episiotomy", "The placenta"], answer: 1, rationale: "First-stage pain arises chiefly from contractions and dilatation of the cervix." },
      { type: "mcq", q: "Entonox used for labour pain is a mixture of:", options: ["Oxygen and carbon dioxide", "Nitrous oxide and oxygen", "Nitrogen and oxygen", "Air and helium"], answer: 1, rationale: "Entonox is a 50:50 mixture of nitrous oxide and oxygen, inhaled with contractions." },
      { type: "mcq", q: "A possible effect on the newborn when an opioid like pethidine is given close to birth is:", options: ["Hyperactivity", "Respiratory depression", "High temperature", "Jaundice"], answer: 1, rationale: "Opioids given near birth can cross the placenta and cause neonatal respiratory depression." },
      { type: "mcq", q: "Which of the following is a non-pharmacological method of pain relief?", options: ["Epidural", "Pethidine", "Massage and breathing techniques", "Spinal block"], answer: 2, rationale: "Massage, breathing techniques and support are non-drug methods of pain relief." },
      { type: "mcq", q: "Epidural analgesia involves injecting a local anaesthetic into the:", options: ["Muscle", "Vein", "Epidural space of the spine", "Uterus"], answer: 2, rationale: "An epidural delivers local anaesthetic into the epidural space to relieve labour pain." },
      { type: "mcq", q: "An important observation after an epidural is started is the mother's:", options: ["Hair colour", "Blood pressure and fetal heart rate", "Appetite", "Weight"], answer: 1, rationale: "Epidurals can lower blood pressure, so BP and fetal heart must be monitored closely." },
      { type: "mcq", q: "Anaesthesia commonly used for caesarean section is:", options: ["Entonox", "Pudendal block", "Spinal anaesthesia", "Massage"], answer: 2, rationale: "Spinal anaesthesia is commonly used for caesarean section." },
      { type: "mcq", q: "The most important and safest 'tool' a midwife has for reducing labour pain is:", options: ["A strong sedative", "Continuous support and reassurance", "Bright lights and noise", "Restricting fluids"], answer: 1, rationale: "Continuous emotional support reduces fear and anxiety and is a powerful, safe form of pain relief." },
      { type: "mcq", q: "Local infiltration or a pudendal block is typically used for:", options: ["The whole first stage", "Episiotomy and instrumental delivery", "Inducing labour", "Treating anaemia"], answer: 1, rationale: "Local infiltration/pudendal block provides anaesthesia for episiotomy, repair and some instrumental births." },
      { type: "mcq", q: "Labour pain is increased by:", options: ["Relaxation", "Fear, anxiety and fatigue", "Support from a companion", "A calm environment"], answer: 1, rationale: "Fear, anxiety and fatigue increase the perception of labour pain." }
      , { type: "fill", q: "The inhaled gas mixture of nitrous oxide and oxygen used in labour is called ____.", accept: ["entonox", "gas and air"], rationale: "Entonox (nitrous oxide and oxygen) is a common inhalational analgesia in labour." }
      , { type: "fill", q: "Injection of local anaesthetic into the epidural space for labour pain is called ____ analgesia.", accept: ["epidural"], rationale: "Epidural analgesia provides regional pain relief in labour." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "mid-16-newborn-resus",
    unit: "Unit 3 · Labour & Birth",
    title: "Immediate Newborn Care & Neonatal Resuscitation (APGAR)",
    readMinutes: 17,
    summary: "Care of the baby at birth, the Apgar score, the steps of neonatal resuscitation (Helping Babies Breathe), and essential newborn care including warmth and early breastfeeding.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Immediate care at birth", p: "At birth the baby must adapt rapidly to life outside the uterus, chiefly by establishing breathing and maintaining temperature. The midwife dries the baby thoroughly, assesses breathing, keeps the baby warm (skin-to-skin with the mother and covered), clamps and cuts the cord, and promotes early bonding and breastfeeding. Most babies breathe and cry within seconds of birth." },
      { h: "The Apgar score", p: "The Apgar score is a quick assessment of the newborn's condition at 1 minute and 5 minutes after birth (and repeated if needed). Five signs are each scored 0, 1 or 2, giving a total out of 10. A score of 7-10 is normal; 4-6 indicates moderate depression needing help; 0-3 indicates severe depression needing urgent resuscitation.", figure: {
        caption: "The five components of the Apgar score, each scored 0, 1 or 2.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apgar score components."><rect x="20" y="15" width="520" height="30" rx="6" fill="#7C2D12"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">APGAR SCORE (0-10)</text><rect x="20" y="55" width="100" height="120" rx="6" fill="#FFF7ED" stroke="#B45309" stroke-width="1.5"/><text x="70" y="85" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#7C2D12">A</text><text x="70" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Appearance</text><text x="70" y="124" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">(colour)</text><rect x="125" y="55" width="100" height="120" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="175" y="85" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#92400E">P</text><text x="175" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">Pulse</text><text x="175" y="124" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400E">(heart rate)</text><rect x="230" y="55" width="100" height="120" rx="6" fill="#FFF7ED" stroke="#B45309" stroke-width="1.5"/><text x="280" y="85" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#7C2D12">G</text><text x="280" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Grimace</text><text x="280" y="124" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">(reflex)</text><rect x="335" y="55" width="100" height="120" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="385" y="85" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#92400E">A</text><text x="385" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">Activity</text><text x="385" y="124" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400E">(muscle tone)</text><rect x="440" y="55" width="100" height="120" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="490" y="85" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#15803D">R</text><text x="490" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Respiration</text><text x="490" y="124" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">(breathing)</text></svg>'
      } },
      { h: "Newborn needing resuscitation", p: "A baby who does not breathe well, is limp, blue or has a slow heart rate after birth needs help to breathe. The single most important action is to establish effective breathing (ventilation). Programmes such as 'Helping Babies Breathe' teach a simple, life-saving approach for every birth attendant." },
      { h: "Steps of basic neonatal resuscitation", list: [
        "Keep the baby warm and dry; stimulate by drying and rubbing the back.",
        "Position the head in a neutral ('sniffing') position to open the airway; clear the airway by suction only if needed.",
        "If the baby is not breathing within about one minute (the 'Golden Minute'), begin ventilation with a bag and mask using room air or oxygen.",
        "Reassess breathing and heart rate; if the heart rate stays very low (below 60/min) despite good ventilation, start chest compressions while continuing ventilation.",
        "Continue, call for help, and refer; reassess regularly."
      ] },
      { h: "Essential newborn care", list: [
        "Thermal protection — dry, wrap, skin-to-skin contact and a cap to prevent hypothermia.",
        "Early and exclusive breastfeeding, ideally within the first hour.",
        "Cord care — keep the cord clean and dry.",
        "Eye care and vitamin K as per local policy.",
        "Immunisation as per the national schedule (e.g. BCG, OPV, hepatitis B at birth).",
        "Identification, weighing and a full examination of the baby."
      ] },
      { h: "Danger signs in the newborn", p: "The midwife teaches the mother to recognise danger signs that need urgent care: not feeding well, fast or difficult breathing, severe chest in-drawing, fever or low temperature, convulsions, lethargy or unconsciousness, jaundice in the first day, and a red or discharging cord. Early recognition saves newborn lives." }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the immediate care of a baby at birth.",
      "What is the Apgar score? Describe its components and interpretation.",
      "Describe the steps of basic neonatal resuscitation.",
      "List the elements of essential newborn care.",
      "What danger signs in a newborn should be taught to the mother?"
    ],
    assessment: [
      { type: "mcq", q: "The Apgar score is normally assessed at:", options: ["5 and 10 minutes", "1 and 5 minutes", "10 and 20 minutes", "Only at 1 hour"], answer: 1, rationale: "The Apgar score is routinely assessed at 1 minute and 5 minutes after birth." },
      { type: "mcq", q: "The maximum (best) total Apgar score is:", options: ["5", "8", "10", "12"], answer: 2, rationale: "Each of the five signs scores up to 2, giving a maximum total of 10." },
      { type: "mcq", q: "Which is NOT one of the five Apgar components?", options: ["Heart rate (pulse)", "Respiration", "Birth weight", "Muscle tone (activity)"], answer: 2, rationale: "Apgar assesses colour, pulse, grimace (reflex), activity (tone) and respiration; not birth weight." },
      { type: "mcq", q: "An Apgar score of 0-3 at one minute indicates:", options: ["A normal baby", "Mild depression", "Severe depression needing urgent resuscitation", "No action needed"], answer: 2, rationale: "A score of 0-3 shows severe depression and the baby needs urgent resuscitation." },
      { type: "mcq", q: "The single most important action in resuscitating a non-breathing newborn is to:", options: ["Give chest compressions first", "Establish effective breathing (ventilation)", "Give intravenous fluids", "Take the temperature"], answer: 1, rationale: "Effective ventilation to establish breathing is the key, life-saving step in newborn resuscitation." },
      { type: "mcq", q: "The 'Golden Minute' in newborn resuscitation means that ventilation should begin within about:", options: ["10 seconds", "1 minute of birth if not breathing", "5 minutes", "10 minutes"], answer: 1, rationale: "If the baby is not breathing, effective ventilation should start within the first minute ('Golden Minute')." },
      { type: "mcq", q: "Chest compressions in a newborn are started when, despite good ventilation, the heart rate stays below:", options: ["100/min", "80/min", "60/min", "40/min"], answer: 2, rationale: "Chest compressions are added if the heart rate remains below 60/min despite effective ventilation." },
      { type: "mcq", q: "To prevent hypothermia in a newborn the midwife should:", options: ["Bathe the baby immediately", "Dry, wrap and place skin-to-skin with a cap", "Leave the baby uncovered", "Place near a fan"], answer: 1, rationale: "Drying, wrapping, skin-to-skin contact and a cap prevent heat loss in the newborn." },
      { type: "mcq", q: "Exclusive breastfeeding should ideally be started:", options: ["After 24 hours", "Within the first hour of birth", "After 3 days", "Only after the first bath"], answer: 1, rationale: "Early breastfeeding within the first hour is recommended for the newborn." },
      { type: "mcq", q: "Which is a newborn danger sign requiring urgent care?", options: ["Sleeping after a feed", "Fast or difficult breathing with chest in-drawing", "Passing meconium", "Mild hiccups"], answer: 1, rationale: "Fast or difficult breathing with chest in-drawing is a serious danger sign needing urgent care." }
      , { type: "fill", q: "The five-sign score used to assess a newborn at 1 and 5 minutes is the ____ score.", accept: ["apgar"], rationale: "The Apgar score assesses appearance, pulse, grimace, activity and respiration." }
      , { type: "fill", q: "The most important step in newborn resuscitation is to establish effective ____.", accept: ["breathing", "ventilation"], rationale: "Establishing breathing (ventilation) is the key step in newborn resuscitation." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "mid-17-complicated-labour",
    unit: "Unit 4 · Complications & Postnatal",
    title: "Complicated Labour (Malpresentation, Prolonged & Obstructed Labour, Induction)",
    readMinutes: 18,
    summary: "Abnormalities of labour: malpresentations and malpositions, prolonged and obstructed labour, the induction and augmentation of labour, and the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Labour is abnormal when it deviates from the normal pattern — for example when the fetus is in an abnormal presentation or position, when progress is too slow (prolonged), or when descent is prevented (obstructed). These situations increase the risk to mother and baby and require careful monitoring, timely referral and often medical or surgical management." },
      { h: "Malpresentations and malpositions", list: [
        "Occipito-posterior position — the occiput lies towards the mother's back; often causes a longer, more painful (backache) labour.",
        "Breech presentation — the buttocks or feet present instead of the head; carries higher risks and often needs caesarean section.",
        "Face and brow presentations — the head is extended; brow especially may obstruct labour.",
        "Shoulder presentation (transverse lie) — the shoulder presents; vaginal birth is impossible and caesarean section is required.",
        "Cord presentation/prolapse — the cord lies below the presenting part, an emergency."
      ] },
      { h: "Prolonged labour", p: "Prolonged labour is labour that lasts longer than expected, usually because of inadequate uterine contractions (the powers), a large baby or malposition (the passenger), or a small or abnormal pelvis (the passage). It is detected on the partograph when progress crosses the alert and action lines. Causes are remembered as the 3 Ps: powers, passenger and passage." },
      { h: "Obstructed labour", p: "Obstructed labour occurs when, despite good contractions, the fetus cannot descend through the birth canal because of a mechanical barrier such as cephalo-pelvic disproportion (the head is too big for the pelvis), malpresentation, or a pelvic tumour. Signs include failure to progress, a tense and continuously contracting uterus, a Bandl's ring, maternal exhaustion and distress, dehydration, a full bladder, fetal distress, and, if untreated, uterine rupture. It is an obstetric emergency.", figure: {
        caption: "Causes of abnormal labour grouped by the three factors (3 Ps).",
        svg: '<svg viewBox="0 0 560 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causes of abnormal labour - the 3 Ps."><rect x="20" y="20" width="160" height="100" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="100" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Powers</text><text x="100" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">weak or</text><text x="100" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">incoordinate</text><text x="100" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">contractions</text><rect x="200" y="20" width="160" height="100" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#92400E">Passenger</text><text x="280" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">big baby,</text><text x="280" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">malpresentation,</text><text x="280" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">malposition</text><rect x="380" y="20" width="160" height="100" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="460" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Passage</text><text x="460" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">small/abnormal</text><text x="460" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">pelvis (CPD),</text><text x="460" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">soft-tissue block</text></svg>'
      } },
      { h: "Induction and augmentation of labour", p: "Induction of labour is the artificial starting of labour before it begins on its own, for medical reasons such as post-term pregnancy, pre-eclampsia, prolonged rupture of membranes or diabetes. Augmentation is speeding up a labour that has already started but is slow. Methods include prostaglandins to ripen the cervix, artificial rupture of the membranes (amniotomy), and an oxytocin infusion. Contractions and the fetal heart must be monitored closely, because over-stimulation can cause fetal distress or uterine rupture." },
      { h: "Nursing management", list: [
        "Monitor labour carefully using the partograph; recognise slow or obstructed progress early.",
        "Observe maternal vital signs, hydration, bladder and signs of exhaustion or shock.",
        "Monitor the fetal heart and report distress; observe contractions during induction/augmentation.",
        "Keep the woman nil by mouth and prepared if operative birth is likely; explain and obtain consent.",
        "Provide pain relief, comfort and emotional support; refer in time for medical or surgical care."
      ] },
      { h: "Complications", p: "Untreated complicated labour can lead to uterine rupture, postpartum haemorrhage, infection, obstetric fistula, maternal exhaustion and death, and fetal distress, birth asphyxia or stillbirth. Early detection with the partograph and timely referral are the keys to prevention." }
    ],
    references: REF_MID,
    examQuestions: [
      "Define and give examples of malpresentation and malposition.",
      "What is obstructed labour? Describe its signs and dangers.",
      "Differentiate between prolonged and obstructed labour.",
      "Define induction and augmentation of labour and describe the methods used.",
      "Outline the nursing management of a woman with complicated labour."
    ],
    assessment: [
      { type: "mcq", q: "When the buttocks or feet present instead of the head, the presentation is:", options: ["Breech", "Vertex", "Face", "Brow"], answer: 0, rationale: "A breech presentation is when the buttocks or feet present at the pelvic brim." },
      { type: "mcq", q: "A transverse lie with the shoulder presenting requires:", options: ["Normal vaginal birth", "Forceps delivery", "Caesarean section", "No intervention"], answer: 2, rationale: "Vaginal birth is impossible with a shoulder presentation; caesarean section is needed." },
      { type: "mcq", q: "Obstructed labour means that, despite good contractions, the fetus:", options: ["Is born quickly", "Is in vertex position", "Stops moving entirely", "Cannot descend because of a mechanical barrier"], answer: 3, rationale: "In obstructed labour a mechanical barrier (e.g. CPD) prevents descent despite adequate contractions." },
      { type: "mcq", q: "Cephalo-pelvic disproportion (CPD) means the:", options: ["Uterus is too small", "Fetal head is too big for the mother's pelvis", "Cervix will not dilate", "Placenta is low"], answer: 1, rationale: "CPD is a mismatch where the fetal head is too large to pass through the pelvis." },
      { type: "mcq", q: "Artificially starting labour before it begins spontaneously is called:", options: ["Induction", "Augmentation", "Episiotomy", "Version"], answer: 0, rationale: "Induction is the artificial initiation of labour; augmentation speeds up labour already started." },
      { type: "mcq", q: "Artificial rupture of the membranes is also called:", options: ["Episiotomy", "Curettage", "Amniotomy", "Version"], answer: 2, rationale: "Amniotomy is artificial rupture of the membranes, sometimes used to induce or augment labour." },
      { type: "mcq", q: "A serious risk of over-stimulation with oxytocin during induction is:", options: ["Slow labour", "No effect", "Lower blood pressure only", "Uterine rupture and fetal distress"], answer: 3, rationale: "Excessive contractions from oxytocin can cause fetal distress and uterine rupture." },
      { type: "mcq", q: "An occipito-posterior position commonly causes:", options: ["A very rapid, painless labour", "A longer labour with backache", "Immediate caesarean always", "No symptoms"], answer: 1, rationale: "In the OP position labour is often longer and associated with backache." },
      { type: "mcq", q: "A late and dangerous complication of untreated obstructed labour is:", options: ["Uterine rupture", "Mild anaemia", "Constipation", "Faster birth"], answer: 0, rationale: "Untreated obstructed labour can lead to uterine rupture, a life-threatening emergency." },
      { type: "mcq", q: "Prolonged and obstructed labour are best detected early using the:", options: ["Pregnancy test", "X-ray", "Partograph", "Blood film"], answer: 2, rationale: "The partograph detects slow or obstructed progress early so action can be taken." }
      , { type: "fill", q: "Speeding up a slow labour that has already started is called ____ of labour.", accept: ["augmentation"], rationale: "Augmentation enhances contractions in an established but slow labour." }
      , { type: "fill", q: "A mismatch where the fetal head is too large for the pelvis is called cephalo-____ disproportion.", accept: ["pelvic"], rationale: "Cephalo-pelvic disproportion (CPD) is a common cause of obstructed labour." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "mid-18-obstetric-emergencies",
    unit: "Unit 4 · Complications & Postnatal",
    title: "Obstetric Emergencies (PPH, Retained Placenta, Shoulder Dystocia, Cord Prolapse, Uterine Rupture)",
    readMinutes: 18,
    summary: "Recognition and emergency management of life-threatening obstetric situations: postpartum haemorrhage, retained placenta, shoulder dystocia, cord prolapse and uterine rupture.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Postpartum haemorrhage (PPH) — definition and causes", p: "Postpartum haemorrhage is blood loss of 500 mL or more after vaginal birth (or 1000 mL after caesarean), or any loss that affects the mother's condition. Primary PPH occurs within 24 hours of birth; secondary PPH occurs from 24 hours to 6 weeks. The causes are remembered as the 4 Ts: Tone (uterine atony — the commonest), Tissue (retained placenta/products), Trauma (tears of the genital tract) and Thrombin (clotting disorders).", figure: {
        caption: "The 4 Ts: causes of postpartum haemorrhage.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The 4 Ts causes of postpartum haemorrhage."><rect x="15" y="35" width="125" height="65" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="77" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Tone</text><text x="77" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">uterine atony</text><rect x="150" y="35" width="125" height="65" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="212" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#92400E">Tissue</text><text x="212" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">retained products</text><rect x="285" y="35" width="125" height="65" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="347" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Trauma</text><text x="347" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">genital tract tears</text><rect x="420" y="35" width="125" height="65" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="482" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Thrombin</text><text x="482" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">clotting failure</text></svg>'
      } },
      { h: "PPH — management", list: [
        "Call for help; rub up a contraction by massaging the uterine fundus.",
        "Give a uterotonic drug (oxytocin; ergometrine or misoprostol as ordered).",
        "Empty the bladder; give IV fluids and arrange blood; monitor vital signs.",
        "Examine for and repair any tears; check the placenta is complete.",
        "If atony persists, use bimanual compression and proceed to further measures (e.g. balloon tamponade, surgery) as needed."
      ] },
      { h: "Retained placenta", p: "The placenta is retained if it is not delivered within about 30 minutes of the birth (with active management). Causes include uterine atony, a trapped placenta behind a closed cervix, or an abnormally adherent placenta (accreta). It risks haemorrhage and infection. Management is to empty the bladder, ensure a uterotonic has been given, attempt controlled cord traction, and if it remains undelivered, arrange manual removal of the placenta under anaesthesia." },
      { h: "Shoulder dystocia", p: "Shoulder dystocia is an emergency in which, after the head is born, the anterior shoulder becomes stuck behind the symphysis pubis and the body does not deliver with normal traction. It is more likely with a large baby (e.g. of a diabetic mother). Management uses a sequence of manoeuvres: call for help, McRoberts' manoeuvre (sharp flexion of the mother's thighs onto the abdomen), suprapubic pressure, and internal manoeuvres — never excessive traction or fundal pressure, which cause injury." },
      { h: "Cord prolapse", p: "Cord prolapse is when the umbilical cord descends below the presenting part after the membranes have ruptured, so it can be compressed, cutting off the baby's oxygen. It is an emergency. Management: call for urgent help; relieve pressure on the cord by positioning the mother (knee-chest or exaggerated Sims/head-down) and/or by pushing the presenting part up with a gloved hand; keep the cord warm and moist and handle it minimally; and arrange immediate delivery, usually by caesarean section." },
      { h: "Uterine rupture", p: "Uterine rupture is tearing of the uterine wall, most often in obstructed labour or in a uterus scarred by previous caesarean section. Signs include severe abdominal pain (which may suddenly ease after rupture), cessation of contractions, vaginal bleeding, signs of shock, an easily palpable fetus and loss of the fetal heart. It is a life-threatening emergency needing immediate resuscitation and surgery (repair or hysterectomy)." },
      { h: "Nursing role in emergencies", list: [
        "Recognise the emergency early and call for help immediately.",
        "Resuscitate: airway, oxygen, IV fluids/blood, and continuous monitoring of vital signs.",
        "Act on the specific cause (massage and uterotonics for PPH, positioning for cord prolapse, manoeuvres for dystocia).",
        "Prepare for surgery and obtain consent; keep accurate records.",
        "Communicate clearly with the team and support the woman and family."
      ] }
    ],
    references: REF_MID,
    examQuestions: [
      "Define postpartum haemorrhage and describe its causes (the 4 Ts) and management.",
      "What is a retained placenta? Describe its management.",
      "Describe shoulder dystocia and the steps used to manage it.",
      "What is cord prolapse? Describe its emergency management.",
      "Describe the signs and management of uterine rupture."
    ],
    assessment: [
      { type: "mcq", q: "Primary postpartum haemorrhage is blood loss of 500 mL or more within:", options: ["1 hour of birth", "24 hours of birth", "1 week of birth", "6 weeks of birth"], answer: 1, rationale: "Primary PPH is significant blood loss within 24 hours of birth." },
      { type: "mcq", q: "The commonest cause of postpartum haemorrhage is:", options: ["Trauma", "Uterine atony (poor tone)", "Clotting disorder", "Retained tissue"], answer: 1, rationale: "Uterine atony (Tone) is the most common cause of PPH." },
      { type: "mcq", q: "The '4 Ts' of postpartum haemorrhage are Tone, Tissue, Trauma and:", options: ["Time", "Thrombin", "Temperature", "Toxin"], answer: 1, rationale: "The 4 Ts are Tone, Tissue, Trauma and Thrombin (clotting)." },
      { type: "mcq", q: "The first action in managing uterine atony PPH is to:", options: ["Start oral iron", "Massage (rub up) the uterine fundus and give a uterotonic", "Discharge the woman", "Wait and observe"], answer: 1, rationale: "Rubbing up a contraction and giving a uterotonic are the first steps in atonic PPH." },
      { type: "mcq", q: "The placenta is considered retained if not delivered within about:", options: ["5 minutes", "30 minutes of birth", "2 hours", "6 hours"], answer: 1, rationale: "With active management, a placenta undelivered within about 30 minutes is retained." },
      { type: "mcq", q: "The manoeuvre involving sharp flexion of the mother's thighs onto her abdomen for shoulder dystocia is:", options: ["McRoberts' manoeuvre", "Crede's manoeuvre", "Valsalva manoeuvre", "Brandt-Andrews method"], answer: 0, rationale: "McRoberts' manoeuvre (hyperflexion of the thighs) is a first-line manoeuvre for shoulder dystocia." },
      { type: "mcq", q: "In shoulder dystocia the midwife must AVOID:", options: ["Calling for help", "Suprapubic pressure", "Excessive traction and fundal pressure", "McRoberts' position"], answer: 2, rationale: "Excessive traction and fundal pressure cause injury and worsen impaction; they must be avoided." },
      { type: "mcq", q: "Cord prolapse is dangerous because the cord may be:", options: ["Too long", "Compressed, cutting off the baby's oxygen", "Too short", "Knotted only"], answer: 1, rationale: "A prolapsed cord can be compressed by the presenting part, causing fetal hypoxia." },
      { type: "mcq", q: "A helpful position to relieve pressure in cord prolapse is the:", options: ["Supine flat position", "Knee-chest (or head-down) position", "Standing position", "Lithotomy only"], answer: 1, rationale: "Knee-chest or head-down positions reduce pressure on the prolapsed cord." },
      { type: "mcq", q: "A classic sign of uterine rupture is:", options: ["Stronger contractions", "Sudden severe pain, cessation of contractions and shock", "Lower blood pressure with no pain", "Faster labour"], answer: 1, rationale: "Uterine rupture causes severe pain, often ceasing contractions, bleeding and shock." }
      , { type: "fill", q: "Blood loss of 500 mL or more after vaginal birth is called postpartum ____.", accept: ["haemorrhage", "hemorrhage", "bleeding"], rationale: "Postpartum haemorrhage is excessive blood loss after birth." }
      , { type: "fill", q: "Descent of the umbilical cord below the presenting part after the membranes rupture is called cord ____.", accept: ["prolapse"], rationale: "Cord prolapse is an emergency that can compress the cord and cause fetal hypoxia." }
    ]
  },

  /* ============ TOPIC 19 ============ */
  {
    id: "mid-19-operative-delivery",
    unit: "Unit 4 · Complications & Postnatal",
    title: "Operative & Assisted Delivery (Forceps, Vacuum, Caesarean Section)",
    readMinutes: 17,
    summary: "Assisted vaginal birth with forceps and vacuum extraction, caesarean section with its indications and types, and the nursing care before and after operative delivery.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "When a normal vaginal birth is not possible or is unsafe for mother or baby, the birth may be assisted by instruments (forceps or vacuum) or completed by caesarean section. The midwife assists the obstetrician, prepares the woman, and provides skilled care before, during and after the procedure." },
      { h: "Assisted vaginal delivery — indications", list: [
        "Delay in the second stage with the head low in the pelvis.",
        "Fetal distress in the second stage when birth can be safely hastened.",
        "Maternal exhaustion or a medical condition where prolonged pushing is unwise.",
        "Conditions required before instrumental birth: the cervix fully dilated, membranes ruptured, head engaged and not too high, the bladder empty, adequate analgesia and consent."
      ] },
      { h: "Forceps and vacuum (ventouse)", list: [
        "Forceps — two curved metal blades applied around the fetal head to guide and gently pull it out with contractions.",
        "Vacuum extraction (ventouse) — a suction cup is applied to the fetal head and traction is applied with contractions and maternal pushing.",
        "Both may cause minor trauma: forceps can cause facial marks; vacuum can cause a chignon (swelling) or cephalhaematoma.",
        "An episiotomy is often needed; the baby and mother are examined for injury afterwards."
      ] },
      { h: "Caesarean section — definition and types", p: "Caesarean section is the birth of the baby through incisions in the abdominal wall and uterus. The common type is the lower (uterine) segment caesarean section (LSCS), which has fewer complications than the older classical (upper segment) operation. It may be elective (planned in advance) or emergency (done urgently during pregnancy or labour).", figure: {
        caption: "Methods of operative and assisted delivery.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Methods of operative and assisted delivery."><rect x="20" y="35" width="160" height="65" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="100" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Forceps</text><text x="100" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">curved blades</text><rect x="200" y="35" width="160" height="65" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400E">Vacuum</text><text x="280" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">suction cup (ventouse)</text><rect x="380" y="35" width="160" height="65" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="460" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Caesarean</text><text x="460" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">abdominal birth</text></svg>'
      } },
      { h: "Indications for caesarean section", list: [
        "Cephalo-pelvic disproportion or obstructed labour.",
        "Placenta praevia or severe antepartum haemorrhage.",
        "Severe pre-eclampsia/eclampsia or other maternal disease where labour is unsafe.",
        "Fetal distress not safe for vaginal birth, malpresentations (e.g. transverse lie), and some previous caesarean scars.",
        "Failed induction or failure to progress."
      ] },
      { h: "Nursing care before operative delivery", list: [
        "Explain the procedure, answer questions and ensure informed consent.",
        "Prepare the woman: nil by mouth, baseline observations, IV line, blood grouping/cross-match, catheterise the bladder, and skin preparation for caesarean.",
        "Give prescribed pre-operative medication; reassure and support the woman and partner.",
        "Prepare resuscitation equipment for the baby."
      ] },
      { h: "Nursing care after operative delivery", list: [
        "Monitor vital signs, the wound, lochia and the uterus for haemorrhage or infection.",
        "Manage pain, encourage early mobilisation and deep breathing to prevent thromboembolism and chest infection.",
        "Observe fluid balance and the urinary catheter; care for the IV line.",
        "Support and assist breastfeeding and bonding; observe the baby for any injury.",
        "Give health education on wound care, danger signs and follow-up before discharge."
      ] }
    ],
    references: REF_MID,
    examQuestions: [
      "What are the indications for assisted vaginal delivery and the conditions that must be met first?",
      "Differentiate between forceps and vacuum (ventouse) delivery.",
      "Define caesarean section and describe its types and indications.",
      "Describe the nursing care of a woman before a caesarean section.",
      "Outline the post-operative nursing care after a caesarean section."
    ],
    assessment: [
      { type: "mcq", q: "The commonest and safest type of caesarean section is the:", options: ["Lower (uterine) segment caesarean section", "Classical (upper segment)", "Vaginal caesarean", "Postmortem caesarean"], answer: 0, rationale: "The lower segment caesarean section (LSCS) is the usual type and has fewer complications than the classical operation." },
      { type: "mcq", q: "A vacuum (ventouse) delivery uses a:", options: ["Pair of metal blades", "Scalpel", "Suction cup on the fetal head", "Forceps and scissors"], answer: 2, rationale: "Vacuum extraction applies a suction cup to the fetal head to assist birth." },
      { type: "mcq", q: "Which condition must be met before an instrumental vaginal delivery?", options: ["Cervix half dilated", "Full bladder", "Membranes intact", "Cervix fully dilated and head engaged"], answer: 3, rationale: "Instrumental birth requires full dilatation, ruptured membranes, an engaged head and an empty bladder, with consent." },
      { type: "mcq", q: "A caesarean section planned in advance before labour is termed:", options: ["Emergency", "Elective", "Classical only", "Trial"], answer: 1, rationale: "An elective caesarean section is planned ahead; an emergency one is done urgently." },
      { type: "mcq", q: "Which is an indication for caesarean section?", options: ["Placenta praevia", "Normal vertex at term", "Mild backache", "Singleton in cephalic position"], answer: 0, rationale: "Placenta praevia is a clear indication for caesarean section." },
      { type: "mcq", q: "A swelling on the baby's scalp from a vacuum cup is called a:", options: ["Caput from labour only", "Cephalhaematoma always", "Chignon", "Moulding"], answer: 2, rationale: "The artificial swelling produced by the ventouse cup is called a chignon." },
      { type: "mcq", q: "Before a caesarean section, the bladder should be:", options: ["Left full", "Filled with fluid", "Ignored", "Emptied (catheterised)"], answer: 3, rationale: "The bladder is catheterised and kept empty to avoid injury and improve access." },
      { type: "mcq", q: "Early mobilisation after caesarean section helps to prevent:", options: ["Breastfeeding", "Thromboembolism and chest infection", "Wound healing", "Bonding"], answer: 1, rationale: "Early mobilisation and breathing exercises reduce the risk of thromboembolism and chest infection." },
      { type: "mcq", q: "Forceps are best described as:", options: ["Two curved blades applied around the fetal head", "A suction device", "A surgical knife", "A monitor"], answer: 0, rationale: "Obstetric forceps are paired curved blades applied around the fetal head to assist delivery." },
      { type: "mcq", q: "An important post-caesarean observation for haemorrhage is checking the:", options: ["Hair", "Appetite", "Uterus, lochia and wound", "Hearing"], answer: 2, rationale: "Observing the uterus, lochia and wound detects postpartum haemorrhage or infection early." }
      , { type: "fill", q: "Birth of the baby through incisions in the abdominal wall and uterus is called ____ section.", accept: ["caesarean", "cesarean"], rationale: "Caesarean section is abdominal/uterine surgical birth." }
      , { type: "fill", q: "The assisted-delivery method that uses a suction cup on the fetal head is called ____ extraction.", accept: ["vacuum", "ventouse"], rationale: "Vacuum (ventouse) extraction uses a suction cup applied to the fetal head." }
    ]
  },

  /* ============ TOPIC 20 ============ */
  {
    id: "mid-20-puerperium",
    unit: "Unit 4 · Complications & Postnatal",
    title: "Normal Puerperium & Postnatal Care",
    readMinutes: 16,
    summary: "The physiological changes of the normal puerperium (involution and lochia), postnatal assessment of the mother, and the daily care and health education of the postnatal woman.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of the puerperium", p: "The puerperium is the period of about six weeks after birth during which the mother's body, especially the reproductive organs, returns to its non-pregnant state. It is a time of major physical and emotional adjustment and of establishing breastfeeding and the mother-baby relationship." },
      { h: "Involution of the uterus", p: "Involution is the process by which the uterus returns to its pre-pregnant size and position. Immediately after birth the fundus is at about the level of the umbilicus; it descends by roughly one finger-breadth per day and is no longer palpable abdominally by about 10-12 days. The uterus reduces from about 1000 g to about 60 g by the end of the puerperium. Slow involution (subinvolution) suggests retained products or infection." },
      { h: "Lochia", p: "Lochia is the vaginal discharge after birth, made of blood, decidua and tissue. It changes colour over time:", list: [
        "Lochia rubra — red, for the first few days.",
        "Lochia serosa — pinkish-brown, from about days 4-10.",
        "Lochia alba — whitish/yellow, from about day 10 onward.",
        "Offensive-smelling, heavy or persistently red lochia suggests infection or retained products and must be reported."
      ] },
      { h: "Other physiological changes", list: [
        "Breasts — colostrum is produced first, then milk 'comes in' around the third day; breastfeeding establishes lactation.",
        "Afterpains — cramping from uterine contractions, especially in multiparae and during breastfeeding.",
        "Bladder and bowel — diuresis clears extra fluid; constipation is common.",
        "Cardiovascular and other systems gradually return to the non-pregnant state.",
        "Emotions — many women have transient 'baby blues' around days 3-5."
      ], figure: {
        caption: "Changes in the colour of lochia during the puerperium.",
        svg: '<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of lochia."><defs><marker id="midArrLo" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="20" y="35" width="150" height="55" rx="8" fill="#FEE2E2" stroke="#7C2D12" stroke-width="2"/><text x="95" y="58" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Rubra</text><text x="95" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">red, days 1-3</text><rect x="205" y="35" width="150" height="55" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="58" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400E">Serosa</text><text x="280" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">pink-brown, 4-10</text><rect x="390" y="35" width="150" height="55" rx="8" fill="#FFF7ED" stroke="#15803D" stroke-width="2"/><text x="465" y="58" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Alba</text><text x="465" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">white, day 10+</text><line x1="170" y1="62" x2="201" y2="62" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#midArrLo)"/><line x1="355" y1="62" x2="386" y2="62" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#midArrLo)"/></svg>'
      } },
      { h: "Postnatal assessment of the mother", list: [
        "Vital signs — temperature, pulse and blood pressure (fever may indicate infection).",
        "Uterus — check the fundal height and that it is well contracted (involution).",
        "Lochia — amount, colour and smell.",
        "Perineum — check any episiotomy or tear for healing and signs of infection.",
        "Breasts and nipples — for engorgement, cracks or signs of mastitis.",
        "Legs — for signs of thromboembolism (calf pain, swelling).",
        "Bladder and bowel function, and the mother's emotional state."
      ] },
      { h: "Daily care and health education", list: [
        "Rest, good nutrition (including iron and adequate fluids), and personal and perineal hygiene.",
        "Encourage early mobilisation and postnatal (pelvic floor) exercises.",
        "Support exclusive breastfeeding and correct positioning and attachment.",
        "Teach danger signs to report — heavy bleeding, fever, offensive lochia, severe headache, calf pain, breast pain.",
        "Discuss postpartum family planning and arrange follow-up and immunisation for the baby."
      ] }
    ],
    references: REF_MID,
    examQuestions: [
      "Define the puerperium and describe the process of involution of the uterus.",
      "Describe lochia and its normal changes during the puerperium.",
      "What is assessed during postnatal examination of the mother?",
      "Describe the daily care and health education for a postnatal woman.",
      "List the postnatal danger signs a mother should be taught to report."
    ],
    assessment: [
      { type: "mcq", q: "The puerperium lasts about:", options: ["1 week", "6 weeks", "3 months", "6 months"], answer: 1, rationale: "The puerperium is the roughly six-week period after birth when the body returns to its non-pregnant state." },
      { type: "mcq", q: "Involution refers to the:", options: ["Production of breast milk", "Return of the uterus to its pre-pregnant size", "Onset of menstruation", "Healing of the perineum"], answer: 1, rationale: "Involution is the return of the uterus to its non-pregnant size and position." },
      { type: "mcq", q: "Immediately after birth the fundus of the uterus is at about the level of the:", options: ["Symphysis pubis", "Umbilicus", "Xiphisternum", "Mid-thigh"], answer: 1, rationale: "After birth the fundus is at about the level of the umbilicus and then descends daily." },
      { type: "mcq", q: "The earliest, red lochia is called lochia:", options: ["Alba", "Serosa", "Rubra", "Nigra"], answer: 2, rationale: "Lochia rubra is the red discharge of the first few days after birth." },
      { type: "mcq", q: "Whitish lochia from about day 10 onward is called lochia:", options: ["Rubra", "Serosa", "Alba", "Cruenta"], answer: 2, rationale: "Lochia alba is the whitish discharge from around day 10." },
      { type: "mcq", q: "Offensive-smelling lochia with fever most likely indicates:", options: ["Normal involution", "Puerperal infection", "Engorgement", "Constipation"], answer: 1, rationale: "Offensive lochia with fever suggests puerperal (genital tract) infection." },
      { type: "mcq", q: "The first breast secretion after birth, rich in antibodies, is:", options: ["Mature milk", "Colostrum", "Foremilk only", "Whey"], answer: 1, rationale: "Colostrum is the first secretion, rich in antibodies and protective for the newborn." },
      { type: "mcq", q: "Cramping uterine pains during the puerperium, especially while breastfeeding, are called:", options: ["Braxton Hicks", "Afterpains", "Show", "Quickening"], answer: 1, rationale: "Afterpains are the cramping uterine contractions felt in the puerperium." },
      { type: "mcq", q: "Postnatal calf pain and swelling should make the midwife suspect:", options: ["Normal change", "Thromboembolism (clot)", "Engorgement", "Afterpains"], answer: 1, rationale: "Calf pain and swelling may indicate deep vein thrombosis/thromboembolism." },
      { type: "mcq", q: "Slow return of the uterus to normal size (subinvolution) may be caused by:", options: ["Early mobilisation", "Retained products or infection", "Breastfeeding", "Good involution"], answer: 1, rationale: "Subinvolution suggests retained products of conception or infection." }
      , { type: "fill", q: "The process by which the uterus returns to its pre-pregnant size is called ____.", accept: ["involution"], rationale: "Involution is the return of the uterus to its non-pregnant state." }
      , { type: "fill", q: "The vaginal discharge after birth, changing from red to white, is called ____.", accept: ["lochia"], rationale: "Lochia is the postnatal discharge that changes colour over the puerperium." }
    ]
  },

  /* ============ TOPIC 21 ============ */
  {
    id: "mid-21-postnatal-complications",
    unit: "Unit 4 · Complications & Postnatal",
    title: "Postnatal Complications (Puerperal Sepsis, Mastitis, Thromboembolism) & Breastfeeding",
    readMinutes: 18,
    summary: "Complications of the puerperium — puerperal sepsis, mastitis and thromboembolism — and the promotion and management of breastfeeding.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Puerperal sepsis (puerperal infection)", p: "Puerperal sepsis is infection of the genital tract occurring after birth, classically associated with fever (a temperature of 38°C or more) on any two of the first ten days after birth. Causes include unclean delivery, retained products, prolonged labour and prolonged rupture of membranes. Features are fever with chills, offensive lochia, lower abdominal pain, a tender uterus, and a rising pulse. It can progress to septic shock. Management is antibiotics, removal of any retained products, fluids and supportive care; prevention is by clean delivery and good hygiene." },
      { h: "Mastitis", p: "Mastitis is inflammation of the breast, usually during breastfeeding, often from milk stasis (a blocked duct) with or without infection. Features are a red, hot, painful, swollen area of the breast, often with fever and flu-like symptoms. Management is to continue frequent breastfeeding or expressing from the affected breast (to relieve stasis), warmth, rest, fluids, analgesia, and antibiotics if infection is present. If untreated it can form a breast abscess, which may need drainage.", figure: {
        caption: "Three important complications of the puerperium.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Postnatal complications."><rect x="20" y="30" width="160" height="75" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="100" y="58" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Puerperal</text><text x="100" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">sepsis</text><text x="100" y="93" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">genital tract infection</text><rect x="200" y="30" width="160" height="75" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="66" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400E">Mastitis</text><text x="280" y="86" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400E">breast inflammation</text><rect x="380" y="30" width="160" height="75" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="460" y="58" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Thrombo-</text><text x="460" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">embolism</text><text x="460" y="93" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">DVT / clot</text></svg>'
      } },
      { h: "Thromboembolism", p: "Pregnancy and the puerperium increase the tendency of the blood to clot, so deep vein thrombosis (DVT) and pulmonary embolism are risks, especially after caesarean section, with immobility or obesity. A DVT shows as a painful, swollen, warm calf; a pulmonary embolism causes sudden breathlessness and chest pain and is life-threatening. Prevention is by early mobilisation, hydration and, where indicated, anticoagulants and support stockings. Suspected thromboembolism needs urgent medical care." },
      { h: "Other postnatal complications", list: [
        "Secondary postpartum haemorrhage — bleeding from 24 hours to 6 weeks, often from retained products or infection.",
        "Postpartum depression — persistent low mood, distinct from the transient 'baby blues', needing recognition and support.",
        "Urinary problems — retention or infection.",
        "Perineal wound infection or breakdown."
      ] },
      { h: "Breastfeeding — benefits", list: [
        "For the baby — ideal nutrition, antibodies that protect against infection, easy digestion and bonding.",
        "For the mother — helps the uterus contract, aids return to pre-pregnant weight, provides some birth spacing, and reduces some cancer risks.",
        "Practical — clean, ready, the right temperature and free."
      ] },
      { h: "Promoting successful breastfeeding", list: [
        "Start early (within the first hour) and feed on demand; practise exclusive breastfeeding for the first six months.",
        "Ensure correct positioning and attachment (the baby takes a large mouthful of areola, not just the nipple) to prevent sore nipples and ensure good milk transfer.",
        "Avoid unnecessary supplements and bottles; support the mother and build her confidence.",
        "Manage common problems — sore/cracked nipples (check attachment), engorgement (frequent feeding/expression), and reassure about milk supply."
      ] }
    ],
    references: REF_MID,
    examQuestions: [
      "Define puerperal sepsis and describe its causes, features and management.",
      "What is mastitis? Describe its features and management.",
      "Describe thromboembolism in the puerperium and how it is prevented.",
      "List the benefits of breastfeeding for mother and baby.",
      "How would you help a mother to breastfeed successfully?"
    ],
    assessment: [
      { type: "mcq", q: "Puerperal sepsis is infection of the:", options: ["Urinary tract only", "Genital tract after birth", "Respiratory tract", "Breast"], answer: 1, rationale: "Puerperal sepsis is infection of the genital tract occurring after birth." },
      { type: "mcq", q: "Inflammation of the breast during breastfeeding is called:", options: ["Mastitis", "Engorgement", "Galactorrhoea", "Involution"], answer: 0, rationale: "Mastitis is inflammation of the breast, often from milk stasis with or without infection." },
      { type: "mcq", q: "An untreated breast infection can progress to a breast:", options: ["Cyst only", "Abscess", "Fibroid", "Tumour"], answer: 1, rationale: "Untreated mastitis can develop into a breast abscess that may need drainage." },
      { type: "mcq", q: "For a mother with mastitis, breastfeeding from the affected breast should usually be:", options: ["Stopped completely", "Continued frequently to relieve stasis", "Replaced by formula always", "Avoided for a week"], answer: 1, rationale: "Continuing to feed or express from the affected breast relieves milk stasis and helps recovery." },
      { type: "mcq", q: "A painful, swollen, warm calf in the puerperium suggests:", options: ["Mastitis", "Deep vein thrombosis", "Afterpains", "Engorgement"], answer: 1, rationale: "These are classic features of a deep vein thrombosis (DVT)." },
      { type: "mcq", q: "Sudden breathlessness and chest pain after birth may indicate:", options: ["Pulmonary embolism", "Constipation", "Lochia rubra", "Engorgement"], answer: 0, rationale: "Sudden breathlessness and chest pain suggest a pulmonary embolism, a life-threatening emergency." },
      { type: "mcq", q: "The best way to prevent thromboembolism in the puerperium is:", options: ["Strict bed rest", "Early mobilisation and hydration", "Restricting fluids", "Avoiding all movement"], answer: 1, rationale: "Early mobilisation and good hydration help prevent venous thrombosis." },
      { type: "mcq", q: "Exclusive breastfeeding is recommended for the first:", options: ["6 weeks", "3 months", "6 months", "1 year"], answer: 2, rationale: "Exclusive breastfeeding is recommended for the first six months of life." },
      { type: "mcq", q: "Sore and cracked nipples in a breastfeeding mother are most often due to:", options: ["Too much milk", "Poor positioning and attachment", "Drinking water", "Wearing a bra"], answer: 1, rationale: "Incorrect attachment is the usual cause of sore, cracked nipples; correcting it relieves the problem." },
      { type: "mcq", q: "A benefit of breastfeeding for the mother is that it:", options: ["Delays uterine involution", "Helps the uterus contract and aids involution", "Increases bleeding", "Causes weight gain"], answer: 1, rationale: "Suckling releases oxytocin, which helps the uterus contract and involute." }
      , { type: "fill", q: "Infection of the genital tract after childbirth is called puerperal ____.", accept: ["sepsis", "infection"], rationale: "Puerperal sepsis (infection) is genital tract infection after birth." }
      , { type: "fill", q: "Correct ____ and attachment of the baby at the breast prevent sore nipples and ensure good feeding.", accept: ["positioning", "position"], rationale: "Good positioning and attachment are key to successful, pain-free breastfeeding." }
    ]
  },

  /* ============ TOPIC 22 ============ */
  {
    id: "mid-22-newborn-at-risk-fp",
    unit: "Unit 4 · Complications & Postnatal",
    title: "Care of the Newborn & At-Risk Neonate (LBW, Jaundice) & Postpartum Family Planning",
    readMinutes: 18,
    summary: "Routine care of the normal newborn, care of at-risk neonates (low birth weight and neonatal jaundice), and the methods of postpartum family planning.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Care of the normal newborn", list: [
        "Maintain a clear airway and ensure the baby is breathing well.",
        "Maintain a stable body temperature — dry, wrap, skin-to-skin contact and a cap.",
        "Protect from infection — clean cord care, hand hygiene, eye care and immunisation.",
        "Provide optimal nutrition — early and exclusive breastfeeding.",
        "Promote parent-infant attachment and observe the baby daily.",
        "Prepare the family for discharge and home care, including danger signs."
      ] },
      { h: "Low birth weight (LBW) baby", p: "A low-birth-weight baby weighs less than 2500 g at birth, whether from prematurity (born before 37 weeks) or growth restriction (small for gestational age). These babies are at risk of hypothermia, hypoglycaemia, infection, feeding difficulty and breathing problems. Care focuses on warmth, feeding and protection from infection.", figure: {
        caption: "Priorities in caring for a low-birth-weight or at-risk newborn.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Care priorities for low-birth-weight baby."><rect x="15" y="35" width="130" height="65" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="80" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Warmth</text><text x="80" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">kangaroo care</text><rect x="155" y="35" width="130" height="65" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="220" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400E">Feeding</text><text x="220" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400E">breast milk</text><rect x="295" y="35" width="130" height="65" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="360" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Infection</text><text x="360" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">prevention</text><rect x="435" y="35" width="110" height="65" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="490" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Monitor</text><text x="490" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">breathing, sugar</text></svg>'
      } },
      { h: "Kangaroo mother care", p: "Kangaroo mother care is continuous skin-to-skin contact between the mother (or another carer) and a stable low-birth-weight baby, held upright against the bare chest, with exclusive breastfeeding. It keeps the baby warm, promotes breastfeeding and bonding, reduces infection, and is especially valuable where incubators are limited." },
      { h: "Neonatal jaundice", p: "Neonatal jaundice is yellow discolouration of the skin and eyes from raised bilirubin. Physiological jaundice is common, appears after the first 24 hours, peaks around days 3-5 and settles by about a week — it is usually harmless. Pathological jaundice is more serious: it appears within the first 24 hours, is deep or prolonged, and may be due to blood group (Rh/ABO) incompatibility, infection or other causes. Very high bilirubin can damage the brain (kernicterus). Treatment is phototherapy and, in severe cases, exchange transfusion; the cause is treated and feeding continued." },
      { h: "Postpartum family planning — purpose", p: "Postpartum family planning helps space pregnancies for the health of mother and baby (a healthy interval of about two years between births is advised). The midwife counsels the couple on the methods available, their effects on breastfeeding, and helps them choose a suitable method." },
      { h: "Methods of family planning", list: [
        "Natural methods — the lactational amenorrhoea method (LAM, effective only when fully breastfeeding, the mother has no periods and the baby is under six months), calendar/rhythm and withdrawal.",
        "Barrier methods — condoms (which also protect against sexually transmitted infections) and diaphragms.",
        "Hormonal methods — progestogen-only pills/injectables/implants (suitable while breastfeeding) and combined oral contraceptives (usually delayed in breastfeeding mothers).",
        "Intrauterine devices (IUCD) — long-acting and effective.",
        "Permanent methods (surgical) — tubal ligation for the woman and vasectomy for the man.",
        "Emergency contraception for unprotected intercourse."
      ] },
      { h: "Role of the midwife", p: "The midwife provides newborn care and teaches the mother, recognises and refers at-risk babies (LBW, jaundice, sepsis), supports breastfeeding, and gives non-judgemental family-planning counselling so the couple can make an informed, voluntary choice of method suited to their needs and breastfeeding status." }
    ],
    references: REF_MID,
    examQuestions: [
      "Describe the routine care of a normal newborn.",
      "Define low birth weight and describe the care of an LBW baby, including kangaroo mother care.",
      "Differentiate between physiological and pathological neonatal jaundice and describe the management.",
      "Describe the methods of postpartum family planning.",
      "What is the lactational amenorrhoea method (LAM) and its conditions for effectiveness?"
    ],
    assessment: [
      { type: "mcq", q: "A low-birth-weight baby is defined as one weighing less than:", options: ["1500 g", "2000 g", "2500 g", "3000 g"], answer: 2, rationale: "Low birth weight is a birth weight below 2500 g." },
      { type: "mcq", q: "Kangaroo mother care involves:", options: ["Bottle feeding only", "Continuous skin-to-skin contact with breastfeeding", "Keeping the baby in a cot away from the mother", "Cold sponging"], answer: 1, rationale: "Kangaroo care is continuous skin-to-skin contact with exclusive breastfeeding for a stable LBW baby." },
      { type: "mcq", q: "Physiological neonatal jaundice typically appears:", options: ["Within the first 24 hours", "After the first 24 hours", "Only after one month", "At birth"], answer: 1, rationale: "Physiological jaundice appears after 24 hours; jaundice within 24 hours is pathological." },
      { type: "mcq", q: "Jaundice appearing within the first 24 hours of life is:", options: ["Always normal", "Pathological and needs investigation", "Caused by breastfeeding only", "Of no concern"], answer: 1, rationale: "Jaundice in the first 24 hours is pathological and must be investigated." },
      { type: "mcq", q: "The main treatment for significant neonatal jaundice is:", options: ["Antibiotics", "Phototherapy", "Iron tablets", "Cold exposure"], answer: 1, rationale: "Phototherapy is the main treatment for raised bilirubin, with exchange transfusion in severe cases." },
      { type: "mcq", q: "Brain damage from very high bilirubin in a newborn is called:", options: ["Kernicterus", "Caput", "Cephalhaematoma", "Hypoglycaemia"], answer: 0, rationale: "Kernicterus is bilirubin-induced brain damage, the serious danger of untreated severe jaundice." },
      { type: "mcq", q: "Low-birth-weight babies are particularly at risk of:", options: ["Obesity", "Hypothermia, hypoglycaemia and infection", "High birth weight", "Excess muscle tone"], answer: 1, rationale: "LBW babies are prone to hypothermia, hypoglycaemia, infection and feeding/breathing problems." },
      { type: "mcq", q: "A recommended healthy birth-to-birth spacing interval is about:", options: ["6 months", "1 year", "2 years", "5 years"], answer: 2, rationale: "An interval of about two years between births is advised for maternal and child health." },
      { type: "mcq", q: "Which contraceptive method also protects against sexually transmitted infections?", options: ["IUCD", "Condom", "Implant", "Tubal ligation"], answer: 1, rationale: "Condoms (barrier method) also protect against sexually transmitted infections." },
      { type: "mcq", q: "The lactational amenorrhoea method (LAM) is effective only when the mother is:", options: ["Partly breastfeeding with periods returned", "Fully breastfeeding, no periods, and baby under 6 months", "Bottle feeding", "Breastfeeding a 1-year-old"], answer: 1, rationale: "LAM works only when breastfeeding is full/exclusive, menses have not returned and the baby is under six months." }
      , { type: "fill", q: "A baby weighing less than 2500 g at birth is called a ____ birth weight baby.", accept: ["low"], rationale: "Birth weight under 2500 g is defined as low birth weight." }
      , { type: "fill", q: "The main treatment for raised bilirubin causing neonatal jaundice is ____.", accept: ["phototherapy"], rationale: "Phototherapy lowers bilirubin levels in neonatal jaundice." }
    ]
  }
];
