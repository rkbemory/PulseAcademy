/* ============================================================
   Diploma in Midwifery · DM232 The Art & Science of Midwifery
   — 20 topics. Aligned to the BNMC Diploma in Midwifery (ICM
   standard) Year-2 syllabus: the art & science of NORMAL
   childbearing — anatomy & physiology of childbearing, embryology
   & fetal development, antenatal care & screening, physiology &
   care in labour, third stage, newborn transition, puerperium and
   breastfeeding. Grounded in standard midwifery/obstetric texts:
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
     • Macdonald S, Magill-Cuerden J. Mayes' Midwifery. Bailliere Tindall/Elsevier.
     • Coad J, Dunstall M. Anatomy and Physiology for Midwives. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_ASM = [
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.",
  "Macdonald S, Magill-Cuerden J. Mayes' Midwifery. Bailliere Tindall/Elsevier.",
  "Coad J, Dunstall M. Anatomy and Physiology for Midwives. Elsevier."
];

window.Academic.topics["diploma-midwifery/art-science-midwifery"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "asm-01-art-science",
    unit: "Unit 1 · Foundations & Anatomy of Childbearing",
    title: "Woman-Centred Care & the Art and Science of Midwifery",
    readMinutes: 16,
    summary: "What midwifery is, the balance of art and science, the philosophy of woman-centred care, partnership and normality, the scope of the midwife and when to refer.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is midwifery?", p: "Midwifery is the professional care of women and their babies during pregnancy, labour, birth and the postnatal period, together with care of the newborn. The midwife is defined by the International Confederation of Midwives (ICM) as a responsible, accountable professional who works in partnership with women to give the necessary support, care and advice, to conduct births on her own responsibility, and to provide care for the newborn and infant." },
      { h: "The art AND the science", p: "Midwifery has two inseparable strands. The SCIENCE is the evidence base — anatomy, physiology, pathophysiology, research and clinical skills that keep women and babies safe. The ART is the human, relational side — presence, kindness, communication, intuition, hands-on skill and the confidence to support normal birth. Safe practice needs both: knowledge without compassion is cold, and compassion without knowledge is unsafe." },
      { h: "Philosophy of woman-centred care", list: [
        "The woman, not the illness or the system, is the focus of care.",
        "Pregnancy and birth are normal life events, not primarily illnesses.",
        "Care is individualised, holistic and respectful of the woman's values, culture and choices.",
        "The woman is an active partner and decision-maker in her own care (informed choice and consent).",
        "Continuity of carer and a trusting relationship improve experience and outcomes."
      ] },
      { h: "Partnership and normality", p: "Working IN PARTNERSHIP means sharing information honestly, listening, and making decisions with — not for — the woman. Promoting NORMALITY means protecting the physiological process, avoiding unnecessary intervention, and using a 'watchful waiting' or masterly inactivity approach while remaining alert for deviations from normal." },
      { h: "Scope of the midwife", p: "The midwife is the lead professional and autonomous practitioner for healthy women with straightforward ('low-risk') pregnancies. She provides antenatal, intrapartum and postnatal care, conducts normal births, examines the newborn, supports breastfeeding, gives health education, and administers medicines within agreed protocols. Practice must stay within her competence and legal scope." },
      { h: "Recognising deviations and when to refer", p: "A core midwifery skill is recognising when events deviate from normal and referring appropriately. The midwife REFERS to, or consults with, an obstetrician or the wider team when risk factors or complications arise — for example raised blood pressure, abnormal bleeding, abnormal fetal heart rate, poor progress in labour, or a sick newborn. Referral is a strength, not a failure, and protects the woman and baby.", figure: {
        caption: "The two strands of midwifery working together within woman-centred care.",
        svg: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Art and science of midwifery combining in woman-centred care."><rect x="20" y="30" width="200" height="70" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="120" y="58" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#831843">ART</text><text x="120" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">presence, kindness, skill</text><rect x="300" y="30" width="200" height="70" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="400" y="58" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#831843">SCIENCE</text><text x="400" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">evidence, skills, safety</text><rect x="140" y="140" width="240" height="55" rx="12" fill="#831843"/><text x="260" y="166" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FDF2F8">WOMAN-CENTRED CARE</text><text x="260" y="185" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FCE7F3">safe, respectful, in partnership</text><line x1="120" y1="100" x2="220" y2="140" stroke="#BE185D" stroke-width="2.5"/><line x1="400" y1="100" x2="300" y2="140" stroke="#BE185D" stroke-width="2.5"/></svg>'
      } },
      { h: "Health education role", p: "The midwife is a key health educator, helping women make informed decisions about nutrition, rest, danger signs, birth preparation, infant feeding and family planning. Education is tailored to the woman's understanding, language and circumstances, and empowers her to care for herself and her baby." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Define midwifery and describe the ICM concept of the midwife.",
      "Explain what is meant by the 'art' and the 'science' of midwifery, with examples of each.",
      "Discuss the principles of woman-centred care.",
      "Describe the scope of the midwife and give five situations in which she should refer.",
      "Explain how promoting normality and working in partnership improve outcomes for women."
    ],
    assessment: [
      { type: "mcq", q: "Woman-centred care means that care is focused primarily on the:", options: ["Woman and her needs, values and choices", "Hospital routine", "Doctor's preferences", "Insurance requirements"], answer: 0, rationale: "Woman-centred care places the woman, her needs and choices at the centre of all decisions." },
      { type: "mcq", q: "The 'science' of midwifery refers mainly to:", options: ["Kindness and presence", "The evidence base, physiology and clinical skills", "Cultural rituals only", "Hospital paperwork"], answer: 1, rationale: "Science is the knowledge and evidence base that keeps women and babies safe; the art is the relational, human side." },
      { type: "mcq", q: "Promoting 'normality' in childbirth mainly involves:", options: ["Routine caesarean birth", "Always inducing labour", "Protecting the physiological process and avoiding unnecessary intervention", "Restricting the woman's movement"], answer: 2, rationale: "Promoting normality protects physiological birth and limits unnecessary intervention while watching for deviations." },
      { type: "mcq", q: "According to ICM, the midwife is best described as:", options: ["An assistant who only follows doctors' orders", "A hospital clerk", "A traditional birth attendant with no training", "A responsible, accountable professional who works in partnership with women"], answer: 3, rationale: "The ICM defines the midwife as a responsible, accountable autonomous professional working in partnership with women." },
      { type: "mcq", q: "For which woman is the midwife normally the LEAD professional?", options: ["A woman with severe pre-eclampsia", "A healthy woman with a straightforward pregnancy", "A woman needing emergency caesarean", "A woman with major cardiac disease"], answer: 1, rationale: "The midwife leads care for healthy women with straightforward pregnancies and refers when risk arises." },
      { type: "mcq", q: "Referral to an obstetrician when a deviation from normal is found is best regarded as:", options: ["An appropriate professional action that protects safety", "A sign of the midwife's failure", "Unnecessary interference", "Optional and rarely needed"], answer: 0, rationale: "Timely referral is a core competence and a safety strength, not a failure." },
      { type: "mcq", q: "'Partnership' in midwifery means decisions are made:", options: ["For the woman by staff", "Only by the doctor", "With the woman, sharing information", "By the woman's family alone"], answer: 2, rationale: "Partnership means shared, informed decision-making with the woman." },
      { type: "mcq", q: "Which is an example of the ART of midwifery?", options: ["Calculating a drug dose", "Being present and reassuring during a contraction", "Interpreting a blood result", "Measuring blood pressure"], answer: 1, rationale: "The art is the relational, supportive presence; the others are examples of the science." },
      { type: "mcq", q: "Informed consent requires that the woman:", options: ["Signs without explanation", "Is told only after the procedure", "Is given clear information and freely agrees", "Follows staff instructions without question"], answer: 2, rationale: "Informed consent means the woman understands the information and freely agrees to care." },
      { type: "mcq", q: "The midwife's health-education role is important because it:", options: ["Replaces medical care", "Is only for doctors", "Is optional in pregnancy", "Empowers women to make informed decisions and self-care"], answer: 3, rationale: "Education empowers women to make informed choices and care for themselves and their babies." }
      , { type: "fill", q: "Care that places the woman and her choices at the centre is called ____ care.", accept: ["woman-centred", "woman centred", "woman-centered"], rationale: "Woman-centred care focuses on the woman's needs, values and choices." }
      , { type: "fill", q: "When events deviate from normal, the midwife must ____ to an obstetrician or the wider team.", accept: ["refer", "refer/consult", "consult"], rationale: "Recognising deviations and referring appropriately is a core midwifery skill." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "asm-02-pelvic-floor",
    unit: "Unit 1 · Foundations & Anatomy of Childbearing",
    title: "The Pelvic Floor: Structure and Function",
    readMinutes: 17,
    summary: "The muscles and layers of the pelvic floor, their functions, changes in childbearing, prevention of damage during birth, and the midwife's role in pelvic-floor health.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is the pelvic floor?", p: "The pelvic floor is a hammock or sling of muscles and fascia that closes the lower outlet of the bony pelvis. It stretches from the pubic bone in front to the coccyx behind, and from side to side between the ischial tuberosities. It is pierced by the urethra, the vagina and the anal canal." },
      { h: "Layers and muscles", list: [
        "Superficial (perineal) layer — includes the bulbospongiosus, ischiocavernosus, superficial and deep transverse perineal muscles and the external anal sphincter; they meet at the perineal body.",
        "Deep layer — the levator ani, a large muscle made of pubococcygeus, iliococcygeus and puborectalis, together with the coccygeus muscle.",
        "The levator ani is the main muscle of the pelvic floor and gives most of its support."
      ] },
      { h: "The perineal body", p: "The perineal body is a fibromuscular structure between the vagina and the anus where several muscles meet. It is an important point of support and is the site most often torn or cut (episiotomy) during birth. Protecting and, when needed, correctly repairing the perineal body is an important midwifery skill." },
      { h: "Functions of the pelvic floor", list: [
        "Supports the pelvic organs — bladder, uterus and bowel — against gravity and abdominal pressure.",
        "Helps maintain continence of urine and faeces by supporting the sphincters.",
        "Assists in the mechanism of labour by guiding the rotation and descent of the fetal head.",
        "Contributes to sexual function.",
        "Withstands increases in intra-abdominal pressure (coughing, lifting)."
      ] },
      { h: "Changes in childbearing", p: "In pregnancy the hormone relaxin and progesterone soften and relax the pelvic-floor and ligamentous tissues. During the second stage of labour the pelvic floor and perineum stretch greatly to allow the fetus to pass; the muscles may be overstretched, bruised or torn. Repeated or difficult births can weaken the pelvic floor.", figure: {
        caption: "The pelvic floor as a supportive sling pierced by the urethra, vagina and anal canal.",
        svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pelvic floor sling with three openings."><ellipse cx="230" cy="110" rx="180" ry="70" fill="#FCE7F3" stroke="#BE185D" stroke-width="2.5"/><text x="230" y="45" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Pelvic floor (muscular sling)</text><circle cx="155" cy="110" r="14" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="155" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">urethra</text><circle cx="230" cy="110" r="18" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="230" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">vagina</text><circle cx="305" cy="110" r="14" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="305" y="145" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">anal canal</text></svg>'
      } },
      { h: "Prevention of pelvic-floor damage during birth", list: [
        "Encourage upright and mobile positions and spontaneous (not forced) pushing.",
        "Support a slow, controlled birth of the head to allow the perineum to stretch gradually.",
        "Use warm compresses and perineal support techniques ('hands-on' or 'hands-poised') as per protocol.",
        "Perform episiotomy only when clinically indicated, never routinely.",
        "Recognise and correctly repair perineal trauma; refer complex (third/fourth-degree) tears."
      ] },
      { h: "Pelvic-floor health and the midwife's role", p: "The midwife teaches pelvic-floor (Kegel) exercises in the antenatal and postnatal periods to strengthen the muscles, prevent and treat stress incontinence and support recovery after birth. She assesses perineal healing postnatally and gives advice on hygiene, exercise and when to seek help for ongoing problems such as incontinence or prolapse." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Describe the structure of the pelvic floor, including its layers and main muscles.",
      "List the functions of the pelvic floor.",
      "What is the perineal body and why is it clinically important in midwifery?",
      "Describe measures a midwife can take to prevent pelvic-floor damage during birth.",
      "Explain the role of pelvic-floor exercises before and after birth."
    ],
    assessment: [
      { type: "mcq", q: "The main muscle of the pelvic floor is the:", options: ["Bulbospongiosus", "Levator ani", "Rectus abdominis", "Psoas major"], answer: 1, rationale: "The levator ani is the large deep muscle providing most pelvic-floor support." },
      { type: "mcq", q: "The three structures that pass through the pelvic floor are the:", options: ["Ureters, vagina and rectum", "Urethra, vagina and anal canal", "Urethra, cervix and colon", "Bladder, uterus and bowel"], answer: 1, rationale: "The urethra, vagina and anal canal pierce the pelvic floor." },
      { type: "mcq", q: "The fibromuscular structure between the vagina and anus most often torn in birth is the:", options: ["Perineal body", "Coccyx", "Symphysis pubis", "Clitoris"], answer: 0, rationale: "The perineal body is where perineal muscles meet and is the common site of tears and episiotomy." },
      { type: "mcq", q: "Which hormone softens pelvic ligaments and tissues in pregnancy?", options: ["Insulin", "Relaxin", "Thyroxine", "Cortisol"], answer: 1, rationale: "Relaxin, with progesterone, softens and relaxes pelvic tissues in pregnancy." },
      { type: "mcq", q: "A key function of the pelvic floor is to:", options: ["Produce hormones", "Support the pelvic organs and aid continence", "Digest food", "Pump blood"], answer: 1, rationale: "The pelvic floor supports the pelvic organs and helps maintain continence." },
      { type: "mcq", q: "During the second stage of labour the pelvic floor mainly:", options: ["Contracts to stop descent", "Stretches and helps guide rotation and descent of the head", "Produces oxytocin", "Closes the birth canal"], answer: 1, rationale: "The pelvic floor stretches and its shape helps rotate and guide the descending head." },
      { type: "mcq", q: "Episiotomy should be performed:", options: ["Routinely in every birth", "Only when clinically indicated", "Never under any circumstances", "Only after the baby is born"], answer: 1, rationale: "Episiotomy is selective and performed only when clinically indicated, not routinely." },
      { type: "mcq", q: "Pelvic-floor (Kegel) exercises are taught mainly to:", options: ["Increase milk supply", "Strengthen the pelvic-floor muscles and prevent incontinence", "Lower blood pressure", "Speed up labour"], answer: 1, rationale: "Kegel exercises strengthen the pelvic floor and help prevent/treat stress incontinence." },
      { type: "mcq", q: "Which measure helps protect the perineum at birth?", options: ["Rapid forced pushing", "A slow, controlled birth of the head", "Routine episiotomy", "Keeping the woman flat and still"], answer: 1, rationale: "A slow controlled birth of the head lets the perineum stretch gradually and reduces trauma." },
      { type: "mcq", q: "A third- or fourth-degree perineal tear should be:", options: ["Left without repair", "Repaired only by the woman", "Referred for repair by an appropriately skilled practitioner", "Ignored if bleeding stops"], answer: 2, rationale: "Complex (third/fourth-degree) tears require repair by a suitably skilled practitioner; the midwife refers." }
      , { type: "fill", q: "The large deep muscle that provides most pelvic-floor support is the ____.", accept: ["levator ani", "levator ani muscle"], rationale: "The levator ani is the principal pelvic-floor muscle." }
      , { type: "fill", q: "Exercises taught to strengthen the pelvic-floor muscles are called ____ exercises.", accept: ["pelvic-floor", "pelvic floor", "kegel", "kegel/pelvic-floor"], rationale: "Pelvic-floor (Kegel) exercises strengthen the muscles and aid continence." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "asm-03-breast-lactation",
    unit: "Unit 1 · Foundations & Anatomy of Childbearing",
    title: "The Breast, Initiation and Maintenance of Lactation",
    readMinutes: 18,
    summary: "Anatomy of the breast, changes in pregnancy, composition of breast milk, the hormones of lactation, the prolactin and oxytocin (let-down) reflexes, and how milk supply is maintained.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Anatomy of the breast", p: "Each breast is a modified sweat (mammary) gland lying on the chest wall. Inside are 15–20 lobes, each made of many lobules containing milk-producing alveoli. Milk drains from the alveoli through ductules and lactiferous ducts to the nipple. The nipple is surrounded by the darker areola, on which Montgomery's tubercles secrete a protective, lubricating fluid. Supporting (Cooper's) ligaments and fat give the breast its shape." },
      { h: "Changes during pregnancy", list: [
        "The breasts enlarge and feel heavier and more nodular as glandular tissue grows.",
        "The nipple and areola darken and Montgomery's tubercles become prominent.",
        "The blood supply increases and surface veins become visible.",
        "From about mid-pregnancy the breasts can produce colostrum.",
        "These changes prepare the breast for lactation (lactogenesis I)."
      ] },
      { h: "Composition of breast milk", list: [
        "Colostrum — the first milk; thick, yellowish, rich in antibodies (especially IgA), protein and vitamin A; small in volume but ideal for the newborn.",
        "Transitional milk — follows colostrum over the first days as volume increases.",
        "Mature milk — appears from about day 10–14; foremilk at the start of a feed is thirst-quenching, hindmilk later is richer in fat and energy.",
        "Breast milk contains the right balance of protein, fat, lactose, vitamins, minerals, water, antibodies and living cells for the baby."
      ] },
      { h: "Hormones of lactation", p: "Two key hormones drive lactation. PROLACTIN, from the anterior pituitary, stimulates the alveoli to PRODUCE milk. OXYTOCIN, from the posterior pituitary, causes the tiny muscle (myoepithelial) cells around the alveoli to contract and EJECT milk down the ducts — the 'let-down' or milk-ejection reflex." },
      { h: "The prolactin (milk production) reflex", p: "When the baby suckles, sensory impulses travel from the nipple to the mother's brain and stimulate prolactin release. Prolactin then acts on the alveoli to make more milk. More suckling means more prolactin and more milk — the basis of supply and demand. Prolactin levels are higher at night, so night feeds help build supply.", figure: {
        caption: "The two reflexes of lactation: suckling triggers prolactin (production) and oxytocin (let-down).",
        svg: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prolactin and oxytocin reflexes of lactation."><defs><marker id="asmArr3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#BE185D"/></marker></defs><rect x="20" y="80" width="120" height="50" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="80" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Baby suckles</text><text x="80" y="119" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">nipple stimulation</text><rect x="200" y="20" width="150" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="275" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">PROLACTIN</text><text x="275" y="60" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">milk production</text><rect x="200" y="135" width="150" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="275" y="157" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">OXYTOCIN</text><text x="275" y="175" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">let-down / ejection</text><rect x="410" y="80" width="95" height="50" rx="9" fill="#831843"/><text x="457" y="109" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FDF2F8">Milk to baby</text><line x1="140" y1="95" x2="196" y2="55" stroke="#BE185D" stroke-width="2.5" marker-end="url(#asmArr3)"/><line x1="140" y1="115" x2="196" y2="160" stroke="#BE185D" stroke-width="2.5" marker-end="url(#asmArr3)"/><line x1="350" y1="48" x2="405" y2="90" stroke="#BE185D" stroke-width="2.5" marker-end="url(#asmArr3)"/><line x1="350" y1="162" x2="405" y2="120" stroke="#BE185D" stroke-width="2.5" marker-end="url(#asmArr3)"/></svg>'
      } },
      { h: "The oxytocin (let-down) reflex", p: "Suckling, and also the sight, sound or thought of the baby, triggers oxytocin release, which ejects milk so it flows for the baby. This reflex can be HELPED by confidence, relaxation, skin-to-skin contact and a comfortable position, and HINDERED by pain, anxiety, embarrassment or doubt. The midwife supports let-down by helping the mother feel calm and confident." },
      { h: "Maintaining supply and the midwife's role", list: [
        "Milk supply works on demand: the more milk removed, the more is made; unremoved milk signals the breast to slow production.",
        "Encourage early, frequent, unrestricted feeding and correct attachment.",
        "Support skin-to-skin contact and rooming-in.",
        "Avoid unnecessary supplements, teats and dummies that reduce suckling.",
        "Reassure the mother, protect her confidence, and observe a feed to check attachment and effective feeding."
      ] }
    ],
    references: REF_ASM,
    examQuestions: [
      "Describe the anatomy of the lactating breast.",
      "Explain the changes that occur in the breast during pregnancy.",
      "Describe the composition and value of colostrum and mature breast milk.",
      "Explain the prolactin and oxytocin reflexes and their role in lactation.",
      "How does the midwife help a mother initiate and maintain a good milk supply?"
    ],
    assessment: [
      { type: "mcq", q: "The hormone that stimulates milk PRODUCTION by the alveoli is:", options: ["Oxytocin", "Prolactin", "Oestrogen", "Relaxin"], answer: 1, rationale: "Prolactin from the anterior pituitary stimulates the alveoli to produce milk." },
      { type: "mcq", q: "The 'let-down' or milk-ejection reflex is caused by:", options: ["Prolactin", "Oxytocin", "Progesterone", "Insulin"], answer: 1, rationale: "Oxytocin contracts the myoepithelial cells to eject milk — the let-down reflex." },
      { type: "mcq", q: "The first milk, rich in antibodies, is called:", options: ["Hindmilk", "Foremilk", "Colostrum", "Transitional milk"], answer: 2, rationale: "Colostrum is the first milk, rich in IgA antibodies, protein and vitamin A." },
      { type: "mcq", q: "Milk-producing sacs within the breast lobules are the:", options: ["Ducts", "Alveoli", "Tubercles", "Ligaments"], answer: 1, rationale: "Alveoli in the lobules are the milk-producing units of the breast." },
      { type: "mcq", q: "The principle of milk 'supply and demand' means:", options: ["Milk is made on a fixed schedule", "The more milk removed, the more is produced", "Formula increases milk supply", "Supply is unrelated to feeding"], answer: 1, rationale: "Frequent, effective removal of milk stimulates greater production." },
      { type: "mcq", q: "The let-down reflex is HINDERED by:", options: ["Relaxation", "Skin-to-skin contact", "Pain and anxiety", "Confidence"], answer: 2, rationale: "Pain, anxiety and doubt inhibit oxytocin release and the let-down reflex." },
      { type: "mcq", q: "Prolactin secretion is highest:", options: ["In the morning only", "At night", "During pregnancy only", "After weaning"], answer: 1, rationale: "Prolactin is higher at night, so night feeds help establish and maintain supply." },
      { type: "mcq", q: "The richer, higher-fat milk near the end of a feed is called:", options: ["Foremilk", "Colostrum", "Hindmilk", "Transitional milk"], answer: 2, rationale: "Hindmilk, later in a feed, is higher in fat and energy than foremilk." },
      { type: "mcq", q: "The darker area around the nipple is the:", options: ["Areola", "Lobule", "Alveolus", "Ductule"], answer: 0, rationale: "The areola is the pigmented area around the nipple containing Montgomery's tubercles." },
      { type: "mcq", q: "To maintain a good milk supply the midwife should encourage:", options: ["Timed, restricted feeds", "Early, frequent, unrestricted feeding with good attachment", "Routine formula top-ups", "Use of dummies between feeds"], answer: 1, rationale: "Frequent unrestricted feeding with correct attachment best establishes and maintains supply." }
      , { type: "fill", q: "The milk-ejection or 'let-down' reflex is caused by the hormone ____.", accept: ["oxytocin"], rationale: "Oxytocin ejects milk by contracting the myoepithelial cells." }
      , { type: "fill", q: "The thick, antibody-rich first milk is called ____.", accept: ["colostrum"], rationale: "Colostrum is the first milk, rich in protective antibodies." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "asm-04-embryology",
    unit: "Unit 2 · Embryology & Fetal Development",
    title: "Embryology and Detailed Fetal Development",
    readMinutes: 18,
    summary: "Fertilisation, implantation, the germinal, embryonic and fetal periods, formation of the germ layers, and the main milestones of development from conception to term.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Fertilisation and the zygote", p: "Fertilisation is the union of a sperm and an ovum, usually in the outer (ampulla) part of the uterine tube, to form a single cell called the zygote with a full set of 46 chromosomes. The zygote begins to divide (cleavage) as it travels toward the uterus, becoming a solid ball of cells (morula) and then a fluid-filled ball (blastocyst)." },
      { h: "Implantation", p: "About 6–10 days after fertilisation the blastocyst embeds itself into the prepared lining (endometrium/decidua) of the uterus — this is implantation. The outer layer of the blastocyst (the trophoblast) will form the placenta and membranes; the inner cell mass will form the embryo." },
      { h: "Stages of prenatal development", list: [
        "Germinal (pre-embryonic) period — from fertilisation to about the end of the 2nd week: cleavage, blastocyst formation and implantation.",
        "Embryonic period — from about week 3 to the end of week 8: the major organs and body systems form (organogenesis). This is the most vulnerable time for structural defects.",
        "Fetal period — from week 9 until birth: growth, maturation and refinement of organs already formed."
      ] },
      { h: "The three germ layers", p: "Early in the embryonic period the inner cell mass forms three primary germ layers, each giving rise to particular tissues.", list: [
        "Ectoderm — skin, hair, nails and the nervous system.",
        "Mesoderm — muscle, bone, connective tissue, heart, blood and kidneys.",
        "Endoderm — the lining of the gut, respiratory tract and many glands."
      ] },
      { h: "Milestones of development", list: [
        "By the end of week 4 — the heart begins to beat and the neural tube (future brain and spinal cord) is forming.",
        "By week 8 — the embryo has a recognisably human form with limbs, facial features and all major organs begun.",
        "By week 12 — sex is distinguishable, fingernails form, and fetal movements begin (not yet felt).",
        "By 20–24 weeks — the fetus is at the threshold of viability; lungs and surfactant are developing.",
        "Third trimester — rapid weight gain, fat deposition, brain and lung maturation in preparation for extrauterine life."
      ] },
      { h: "Supporting structures", p: "The AMNION forms the fluid-filled amniotic sac that cushions and protects the fetus. The UMBILICAL CORD (with two arteries and one vein) links the fetus to the placenta. The YOLK SAC provides early blood cells before being replaced by fetal organs. These structures develop alongside the embryo.", figure: {
        caption: "The three periods of prenatal development along the pregnancy timeline.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of germinal, embryonic and fetal periods."><line x1="30" y1="80" x2="510" y2="80" stroke="#831843" stroke-width="3"/><rect x="30" y="55" width="70" height="30" rx="6" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="65" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">Germinal</text><text x="65" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">wk 1-2</text><rect x="110" y="55" width="120" height="30" rx="6" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="170" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">Embryonic (organs)</text><text x="170" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">wk 3-8</text><rect x="240" y="55" width="255" height="30" rx="6" fill="#F472B6" stroke="#BE185D" stroke-width="2"/><text x="367" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">Fetal (growth &amp; maturation)</text><text x="367" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">wk 9 to birth</text><text x="270" y="35" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Prenatal development timeline</text></svg>'
      } },
      { h: "Clinical relevance for the midwife", p: "Knowing that organs form in the embryonic period explains why exposure to harmful agents in the first 8 weeks carries the greatest risk of structural malformation, and why folic acid before and in early pregnancy helps prevent neural-tube defects. This knowledge underpins preconception and early antenatal advice." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Describe the process of fertilisation and implantation.",
      "Name and describe the three periods of prenatal development.",
      "List the three primary germ layers and one structure each forms.",
      "Outline the main milestones of fetal development from conception to term.",
      "Why is the embryonic period the most vulnerable time for structural defects?"
    ],
    assessment: [
      { type: "mcq", q: "Fertilisation normally occurs in the:", options: ["Uterine cavity", "Outer (ampulla) part of the uterine tube", "Cervix", "Vagina"], answer: 1, rationale: "Fertilisation usually takes place in the ampulla of the uterine (fallopian) tube." },
      { type: "mcq", q: "The single cell formed by union of sperm and ovum is the:", options: ["Morula", "Blastocyst", "Zygote", "Embryo"], answer: 2, rationale: "The zygote is the single fertilised cell with 46 chromosomes." },
      { type: "mcq", q: "Organ formation (organogenesis) mainly occurs during the:", options: ["Germinal period", "Embryonic period (weeks 3–8)", "Fetal period", "Neonatal period"], answer: 1, rationale: "Major organs form in the embryonic period, weeks 3 to 8." },
      { type: "mcq", q: "The germ layer that forms the nervous system and skin is the:", options: ["Endoderm", "Mesoderm", "Ectoderm", "Trophoblast"], answer: 2, rationale: "Ectoderm gives rise to the skin and nervous system." },
      { type: "mcq", q: "Implantation of the blastocyst usually occurs about:", options: ["1 day after fertilisation", "6–10 days after fertilisation", "3 weeks after fertilisation", "At the end of the first trimester"], answer: 1, rationale: "The blastocyst implants in the endometrium roughly 6–10 days after fertilisation." },
      { type: "mcq", q: "The layer of the blastocyst that forms the placenta is the:", options: ["Inner cell mass", "Trophoblast", "Yolk sac", "Amnion"], answer: 1, rationale: "The trophoblast (outer layer) forms the placenta and membranes." },
      { type: "mcq", q: "Muscle, bone and the heart develop mainly from the:", options: ["Ectoderm", "Mesoderm", "Endoderm", "Amnion"], answer: 1, rationale: "Mesoderm forms muscle, bone, connective tissue and the heart." },
      { type: "mcq", q: "The fetal heart begins to beat by about the end of:", options: ["Week 2", "Week 4", "Week 12", "Week 20"], answer: 1, rationale: "The heart starts to beat by around the end of the fourth week." },
      { type: "mcq", q: "The normal umbilical cord contains:", options: ["Two veins and one artery", "Two arteries and one vein", "Three arteries", "One artery and one vein"], answer: 1, rationale: "The umbilical cord normally has two arteries and one vein." },
      { type: "mcq", q: "The fluid-filled sac that cushions the fetus is the:", options: ["Yolk sac", "Amniotic sac", "Placenta", "Decidua"], answer: 1, rationale: "The amnion forms the amniotic sac whose fluid cushions and protects the fetus." }
      , { type: "fill", q: "Formation of the major organs during weeks 3–8 is called ____.", accept: ["organogenesis"], rationale: "Organogenesis is organ formation during the embryonic period." }
      , { type: "fill", q: "The outer layer of the blastocyst that forms the placenta is the ____.", accept: ["trophoblast"], rationale: "The trophoblast develops into the placenta and membranes." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "asm-05-fetal-growth-factors",
    unit: "Unit 2 · Embryology & Fetal Development",
    title: "Factors Affecting Fetal Growth: Smoking, Drugs, Environment and Medicines",
    readMinutes: 17,
    summary: "Maternal, placental and fetal factors influencing growth; teratogens; the effects of smoking, alcohol, recreational and prescribed drugs; environmental and psychological influences; and the midwife's health-education role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What influences fetal growth?", p: "Fetal growth depends on genetic potential and on the supply of oxygen and nutrients across the placenta. Anything that reduces this supply, damages developing tissues, or alters development can affect the size and health of the baby. Influences are grouped as maternal, placental and fetal, plus external exposures." },
      { h: "Maternal factors", list: [
        "Nutrition — undernutrition or obesity, and specific deficiencies (iron, folate).",
        "Health conditions — anaemia, hypertension, diabetes, infection.",
        "Age and parity, and short interpregnancy intervals.",
        "Substance use — smoking, alcohol and other drugs.",
        "Psychological stress and social circumstances."
      ] },
      { h: "Teratogens", p: "A TERATOGEN is any agent that can cause a structural or functional abnormality in the developing embryo or fetus — for example certain drugs, infections, alcohol, radiation and some chemicals. The effect depends on the agent, the DOSE and especially the TIMING: exposure during the embryonic period (organ formation) is most likely to cause structural defects." },
      { h: "Effects of smoking", list: [
        "Nicotine causes vasoconstriction and carbon monoxide reduces oxygen delivery to the fetus.",
        "Associated with low birth weight and fetal growth restriction.",
        "Increased risk of miscarriage, preterm birth, placental problems (praevia, abruption) and sudden infant death.",
        "The midwife offers non-judgemental smoking-cessation support and referral."
      ] },
      { h: "Alcohol and recreational drugs", list: [
        "Alcohol is a teratogen; there is no known safe amount — heavy use can cause fetal alcohol spectrum disorder (growth restriction, facial features and learning difficulties).",
        "Opioids and other drugs can cause growth restriction, preterm birth and neonatal withdrawal (neonatal abstinence syndrome).",
        "Care is non-judgemental, with referral to specialist and social support."
      ] },
      { h: "Prescribed medicines", p: "Some prescribed medicines can harm the fetus (for example certain anticonvulsants, warfarin, some antibiotics and retinoids). The principle is to use medicines in pregnancy only when the benefit outweighs the risk, at the lowest effective dose, and to check safety before prescribing or advising. Women should not stop essential medication (such as for epilepsy) without medical advice. The midwife checks what the woman is taking and refers when there is doubt.", figure: {
        caption: "Categories of factors that can affect fetal growth and development.",
        svg: '<svg viewBox="0 0 520 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Factors affecting fetal growth."><rect x="200" y="20" width="120" height="45" rx="10" fill="#831843"/><text x="260" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FDF2F8">FETAL GROWTH</text><text x="260" y="56" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">affected by</text><rect x="15" y="120" width="110" height="50" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="70" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Maternal</text><text x="70" y="158" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">nutrition, disease</text><rect x="135" y="120" width="110" height="50" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="190" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Placental</text><text x="190" y="158" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">function, supply</text><rect x="255" y="120" width="110" height="50" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="310" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Substances</text><text x="310" y="158" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">smoking, drugs</text><rect x="375" y="120" width="120" height="50" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="435" y="142" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Environment</text><text x="435" y="158" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#831843">toxins, stress</text><line x1="230" y1="65" x2="70" y2="118" stroke="#BE185D" stroke-width="2"/><line x1="248" y1="65" x2="190" y2="118" stroke="#BE185D" stroke-width="2"/><line x1="272" y1="65" x2="310" y2="118" stroke="#BE185D" stroke-width="2"/><line x1="290" y1="65" x2="435" y2="118" stroke="#BE185D" stroke-width="2"/></svg>'
      } },
      { h: "Environmental and psychological effects", p: "Exposure to environmental toxins (lead, some pesticides, high-dose radiation) and severe or chronic psychological stress can affect growth and wellbeing. The midwife assesses the woman's home, work and social environment and offers appropriate advice and support." },
      { h: "The midwife's health-education role", p: "The midwife promotes a healthy pregnancy: balanced nutrition and folic-acid/iron supplementation, avoiding smoking, alcohol and unprescribed drugs, safe use of medicines, reducing harmful exposures, and managing stress. Advice is given sensitively and without judgement, with referral to specialist services where needed." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Define a teratogen and explain how timing of exposure affects its impact.",
      "Describe the effects of maternal smoking on fetal growth and pregnancy.",
      "Discuss the risks of alcohol and recreational drug use in pregnancy.",
      "Explain the principles of safe medicine use in pregnancy.",
      "Outline the midwife's health-education role in promoting healthy fetal growth."
    ],
    assessment: [
      { type: "mcq", q: "A teratogen is an agent that can cause:", options: ["Increased milk supply", "Abnormality in the developing embryo or fetus", "Faster labour", "Higher maternal blood pressure only"], answer: 1, rationale: "A teratogen causes structural or functional abnormalities in the developing embryo/fetus." },
      { type: "mcq", q: "The effect of a teratogen depends most critically on:", options: ["The mother's height", "The timing of exposure in development", "The season of the year", "The baby's sex"], answer: 1, rationale: "Timing is critical; exposure during organ formation causes the greatest structural risk." },
      { type: "mcq", q: "Maternal smoking in pregnancy is strongly associated with:", options: ["Macrosomia (large baby)", "Low birth weight and growth restriction", "Post-term birth", "Higher amniotic fluid"], answer: 1, rationale: "Nicotine and carbon monoxide reduce fetal oxygen supply, causing low birth weight and growth restriction." },
      { type: "mcq", q: "The safe amount of alcohol in pregnancy is:", options: ["One drink a day", "Two drinks a week", "There is no known safe amount", "Only spirits are unsafe"], answer: 2, rationale: "Alcohol is a teratogen with no established safe level; abstinence is advised." },
      { type: "mcq", q: "Newborn withdrawal after maternal opioid use is called:", options: ["Fetal alcohol syndrome", "Neonatal abstinence syndrome", "Respiratory distress syndrome", "Hypoglycaemia"], answer: 1, rationale: "Neonatal abstinence syndrome is withdrawal in the newborn after in-utero drug exposure." },
      { type: "mcq", q: "The guiding principle for medicines in pregnancy is to use them:", options: ["Freely for any symptom", "Only when benefit outweighs risk, at the lowest effective dose", "Never, in any circumstances", "Only in the first trimester"], answer: 1, rationale: "Medicines are used only when benefit outweighs risk, at the lowest effective dose." },
      { type: "mcq", q: "A woman with epilepsy on essential medication should:", options: ["Stop it immediately when pregnant", "Continue and seek medical review, not stop without advice", "Double the dose", "Switch to alcohol"], answer: 1, rationale: "Essential medication should not be stopped abruptly; the woman is reviewed rather than left unprotected." },
      { type: "mcq", q: "Carbon monoxide from smoking harms the fetus mainly by:", options: ["Increasing oxygen delivery", "Reducing oxygen delivery to the fetus", "Raising fetal blood sugar", "Improving placental flow"], answer: 1, rationale: "Carbon monoxide binds haemoglobin and reduces oxygen delivery to the fetus." },
      { type: "mcq", q: "Which is a MATERNAL factor affecting fetal growth?", options: ["Umbilical cord length", "Maternal anaemia and nutrition", "Fetal heart rate", "Colour of the amniotic fluid"], answer: 1, rationale: "Maternal nutrition and conditions such as anaemia directly affect fetal growth." },
      { type: "mcq", q: "When advising a woman who smokes, the midwife should:", options: ["Judge and criticise her", "Offer non-judgemental cessation support and referral", "Ignore the issue", "Tell her it does not matter"], answer: 1, rationale: "Support is non-judgemental, offering cessation help and referral." }
      , { type: "fill", q: "Any agent that can cause a fetal abnormality is called a ____.", accept: ["teratogen"], rationale: "A teratogen causes developmental abnormalities." }
      , { type: "fill", q: "The vitamin recommended before and in early pregnancy to help prevent neural-tube defects is ____.", accept: ["folic acid", "folate", "folic acid/folate"], rationale: "Folic acid/folate reduces the risk of neural-tube defects." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "asm-06-placenta",
    unit: "Unit 2 · Embryology & Fetal Development",
    title: "Physiology of the Fetal-Maternal Relationship & the Placenta",
    readMinutes: 18,
    summary: "Development, structure and functions of the placenta, fetal circulation, the placental barrier and what crosses it, and the midwife's examination of the placenta.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The placenta: a link between mother and fetus", p: "The placenta is the organ of exchange between the mother and the fetus. It develops from the trophoblast and the underlying decidua, is fully formed by about 12 weeks, and grows with the pregnancy. At term it is a round, flat, dark-red organ about 20 cm across and 2.5 cm thick, weighing roughly one-sixth of the baby's weight." },
      { h: "Structure", list: [
        "Maternal (uterine) surface — dull, dark red, divided into 15–20 lobes (cotyledons).",
        "Fetal surface — shiny and smooth, covered by the amnion, with branching blood vessels radiating from the cord.",
        "The umbilical cord (two arteries, one vein) inserts, usually centrally, on the fetal surface.",
        "Chorionic villi — tree-like projections bathed in maternal blood in the intervillous spaces, where exchange occurs."
      ] },
      { h: "Functions of the placenta", list: [
        "Respiration — oxygen passes from mother to fetus and carbon dioxide the other way.",
        "Nutrition — glucose, amino acids, fatty acids, vitamins and minerals pass to the fetus.",
        "Excretion — fetal waste products (e.g. urea) pass to the mother for removal.",
        "Protection (barrier) — a partial barrier against some, though not all, harmful substances and organisms; it also passes maternal antibodies (IgG) for passive immunity.",
        "Endocrine — produces hormones: hCG, human placental lactogen (hPL), oestrogen and progesterone, which maintain the pregnancy."
      ] },
      { h: "The placental 'barrier'", p: "Exchange occurs across a thin membrane between maternal and fetal blood; the two circulations do NOT normally mix. Small molecules (oxygen, carbon dioxide, glucose, water, some drugs, alcohol, nicotine and some viruses) cross easily, while large molecules (most bacteria, heparin) do not. Because many substances cross, the mother's exposures directly affect the fetus.", figure: {
        caption: "The placenta as the organ of exchange between maternal and fetal circulations.",
        svg: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placental exchange between mother and fetus."><rect x="20" y="60" width="130" height="80" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="85" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">MOTHER</text><text x="85" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">O2, nutrients, IgG</text><rect x="200" y="45" width="120" height="110" rx="12" fill="#831843"/><text x="260" y="95" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FDF2F8">PLACENTA</text><text x="260" y="115" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">exchange &amp; hormones</text><rect x="370" y="60" width="130" height="80" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="435" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">FETUS</text><text x="435" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">CO2, waste out</text><line x1="150" y1="90" x2="198" y2="90" stroke="#15803D" stroke-width="3"/><text x="174" y="82" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#15803D">to fetus</text><line x1="320" y1="110" x2="368" y2="110" stroke="#15803D" stroke-width="3"/><line x1="368" y1="120" x2="322" y2="120" stroke="#7C2D12" stroke-width="3"/><text x="345" y="145" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#7C2D12">waste back</text></svg>'
      } },
      { h: "Fetal circulation (in brief)", p: "Oxygenated blood returns from the placenta in the umbilical VEIN. Special shunts allow blood to bypass the not-yet-working lungs and liver: the ductus venosus (past the liver), the foramen ovale (right to left atrium) and the ductus arteriosus (pulmonary artery to aorta). Deoxygenated blood returns to the placenta in the two umbilical ARTERIES. These shunts close after birth." },
      { h: "Placental hormones", p: "Human chorionic gonadotrophin (hCG) maintains the corpus luteum in early pregnancy and is the basis of pregnancy tests. Human placental lactogen (hPL) alters maternal metabolism to supply the fetus. Oestrogen and progesterone maintain the uterus and prepare the breasts. Falling placental function or hormone output can signal fetal compromise." },
      { h: "The midwife's examination of the placenta", p: "After the third stage the midwife examines the placenta and membranes to confirm they are complete, because retained tissue can cause haemorrhage or infection. She checks the maternal surface (cotyledons), the membranes, the cord vessels (two arteries, one vein) and any abnormalities, and records and refers appropriately." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Describe the structure of the placenta at term.",
      "List and explain the functions of the placenta.",
      "Explain what is meant by the placental barrier and give examples of what does and does not cross it.",
      "Describe the special features of the fetal circulation and what happens to them after birth.",
      "Why and how does the midwife examine the placenta and membranes after birth?"
    ],
    assessment: [
      { type: "mcq", q: "The placenta is normally fully formed by about:", options: ["4 weeks", "12 weeks", "24 weeks", "36 weeks"], answer: 1, rationale: "The placenta is functionally complete by around 12 weeks and grows thereafter." },
      { type: "mcq", q: "Exchange between maternal and fetal blood takes place at the:", options: ["Umbilical cord", "Chorionic villi", "Amnion", "Cervix"], answer: 1, rationale: "The chorionic villi, bathed in maternal blood, are the sites of exchange." },
      { type: "mcq", q: "The hormone that forms the basis of pregnancy tests is:", options: ["Progesterone", "hCG", "Oxytocin", "Prolactin"], answer: 1, rationale: "Human chorionic gonadotrophin (hCG) is detected by pregnancy tests." },
      { type: "mcq", q: "In the fetus, oxygenated blood is carried from the placenta by the:", options: ["Umbilical arteries", "Umbilical vein", "Ductus arteriosus", "Aorta"], answer: 1, rationale: "The umbilical vein carries oxygenated blood from the placenta to the fetus." },
      { type: "mcq", q: "The maternal surface of the placenta is divided into lobes called:", options: ["Villi", "Cotyledons", "Alveoli", "Lobules"], answer: 1, rationale: "The maternal surface is divided into 15–20 cotyledons." },
      { type: "mcq", q: "Which passive immunity is transferred across the placenta to the fetus?", options: ["IgA", "IgG antibodies", "IgM", "White cells"], answer: 1, rationale: "Maternal IgG crosses the placenta to give the fetus passive immunity." },
      { type: "mcq", q: "The fetal shunt between the two atria is the:", options: ["Ductus arteriosus", "Ductus venosus", "Foramen ovale", "Umbilical vein"], answer: 2, rationale: "The foramen ovale shunts blood from the right atrium to the left atrium, bypassing the lungs." },
      { type: "mcq", q: "The midwife examines the placenta after birth mainly to:", options: ["Weigh the baby", "Confirm it is complete and no tissue is retained", "Measure blood pressure", "Assess Apgar score"], answer: 1, rationale: "Retained placental tissue can cause haemorrhage or infection, so completeness must be checked." },
      { type: "mcq", q: "Which substance readily crosses the placental barrier and can harm the fetus?", options: ["Heparin", "Alcohol and nicotine", "Large bacteria", "Maternal red cells only"], answer: 1, rationale: "Small molecules like alcohol and nicotine cross readily and can harm the fetus." },
      { type: "mcq", q: "An endocrine (hormone) function of the placenta is production of:", options: ["Insulin", "Progesterone and oestrogen", "Thyroxine", "Adrenaline"], answer: 1, rationale: "The placenta produces progesterone, oestrogen, hCG and hPL." }
      , { type: "fill", q: "The blood vessels in the umbilical cord are two ____ and one vein.", accept: ["arteries", "artery"], rationale: "The cord contains two arteries and one vein." }
      , { type: "fill", q: "The lobes on the maternal surface of the placenta are called ____.", accept: ["cotyledons", "cotyledon"], rationale: "The maternal surface is divided into cotyledons." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "asm-07-neurohormonal",
    unit: "Unit 2 · Embryology & Fetal Development",
    title: "Neuro-Hormonal Feedback: Pregnancy, Birth, Breastfeeding and Postpartum",
    readMinutes: 17,
    summary: "The key hormones of the childbearing continuum, positive and negative feedback loops, the hormonal physiology of labour and breastfeeding, and how care can support or disturb these systems.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The hormonal orchestra of childbearing", p: "Pregnancy, labour, breastfeeding and recovery are controlled by a finely balanced set of hormones from the hypothalamus, pituitary, ovaries and placenta. Understanding these helps the midwife support the physiological process and understand why calm, undisturbed care matters." },
      { h: "Feedback: negative and positive", p: "In NEGATIVE feedback a rising level of a hormone switches off its own production, keeping things stable (most body systems). In POSITIVE feedback the response increases the original stimulus, driving a process to completion — this is the pattern of labour and the let-down reflex, where the effect feeds back to produce more of the trigger." },
      { h: "Hormones in pregnancy", list: [
        "Progesterone — relaxes smooth muscle, keeps the uterus quiet, and maintains the pregnancy.",
        "Oestrogen — promotes uterine and breast growth and prepares the uterus to respond to oxytocin near term.",
        "hCG — maintains the corpus luteum early on.",
        "Relaxin — softens ligaments and the cervix.",
        "Prolactin rises through pregnancy but milk production is held back by high progesterone."
      ] },
      { h: "The positive-feedback loop of labour", p: "As labour nears, oestrogen rises and the uterus becomes more sensitive to oxytocin. Pressure of the fetal head on the cervix sends signals that release more oxytocin (the Ferguson reflex); oxytocin causes stronger contractions, which push the head harder onto the cervix, releasing yet more oxytocin. This positive-feedback cycle intensifies contractions until birth. Prostaglandins also ripen the cervix and aid contractions.", figure: {
        caption: "The positive-feedback cycle driving labour (the Ferguson reflex).",
        svg: '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Positive feedback loop of labour."><defs><marker id="asmArr7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="130" y="15" width="160" height="45" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="210" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Head presses on cervix</text><rect x="255" y="90" width="150" height="45" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="330" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Oxytocin released</text><text x="330" y="126" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">(pituitary)</text><rect x="130" y="165" width="160" height="45" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="210" y="191" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Stronger contractions</text><rect x="15" y="90" width="150" height="45" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="90" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">More descent</text><line x1="290" y1="45" x2="320" y2="88" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr7)"/><line x1="330" y1="135" x2="270" y2="168" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr7)"/><line x1="150" y1="185" x2="95" y2="137" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr7)"/><line x1="90" y1="90" x2="150" y2="52" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr7)"/></svg>'
      } },
      { h: "Hormones at birth and the 'cocktail'", p: "Around birth, high oxytocin, a surge of catecholamines (adrenaline) in the second stage giving the urge to push, endorphins (natural pain relief and calm) and, soon after, prolactin all work together. Oxytocin and prolactin promote bonding and attachment. This natural hormonal cascade works best when the woman feels safe, warm, private and unrushed." },
      { h: "Hormones of breastfeeding", p: "After the placenta is delivered, progesterone falls sharply and the brake on milk production is released, so prolactin can act (lactogenesis II — the milk 'coming in'). Ongoing supply is driven by suckling: prolactin makes milk (production reflex) and oxytocin ejects it (let-down reflex), each on a feedback loop with the baby's demand." },
      { h: "Supporting the hormonal physiology: the midwife's role", list: [
        "Provide a calm, private, warm environment; minimise unnecessary disturbance and observation.",
        "Support the woman's confidence and reduce fear and pain, which raise adrenaline and can slow labour.",
        "Encourage early skin-to-skin contact and breastfeeding to boost oxytocin and prolactin.",
        "Understand that fear, stress and cold can inhibit oxytocin and disturb labour and let-down."
      ] }
    ],
    references: REF_ASM,
    examQuestions: [
      "Distinguish between negative and positive feedback with an example of each from childbearing.",
      "Explain the positive-feedback loop that drives labour (the Ferguson reflex).",
      "Describe the roles of progesterone and oestrogen in pregnancy.",
      "Explain why progesterone falling after birth allows lactation to begin.",
      "How can the midwife support the hormonal physiology of birth and breastfeeding?"
    ],
    assessment: [
      { type: "mcq", q: "Positive feedback differs from negative feedback in that it:", options: ["Switches off the process", "Increases the original stimulus, driving the process on", "Keeps hormone levels constant", "Only occurs before pregnancy"], answer: 1, rationale: "In positive feedback the response amplifies the stimulus, as in labour and let-down." },
      { type: "mcq", q: "The hormone that keeps the uterus quiet and maintains pregnancy is:", options: ["Oxytocin", "Progesterone", "Adrenaline", "Prolactin"], answer: 1, rationale: "Progesterone relaxes uterine smooth muscle and maintains the pregnancy." },
      { type: "mcq", q: "The reflex where pressure of the fetal head on the cervix releases more oxytocin is the:", options: ["Let-down reflex", "Ferguson reflex", "Moro reflex", "Rooting reflex"], answer: 1, rationale: "The Ferguson reflex is the positive-feedback release of oxytocin from cervical/fetal head pressure." },
      { type: "mcq", q: "Milk production is held back during pregnancy mainly by high levels of:", options: ["Progesterone", "Oxytocin", "Endorphins", "Relaxin"], answer: 0, rationale: "High progesterone inhibits milk production until it falls after the placenta is delivered." },
      { type: "mcq", q: "After birth, the 'milk coming in' (lactogenesis II) is triggered by:", options: ["A rise in progesterone", "A sharp fall in progesterone", "A fall in prolactin", "A rise in oestrogen"], answer: 1, rationale: "The sharp fall in progesterone after placental delivery releases prolactin's effect, so milk comes in." },
      { type: "mcq", q: "High levels of fear and adrenaline in labour tend to:", options: ["Speed up labour", "Inhibit oxytocin and can slow labour", "Increase milk supply", "Have no effect"], answer: 1, rationale: "Adrenaline (fear/stress) can inhibit oxytocin and slow labour." },
      { type: "mcq", q: "Endorphins released around birth mainly provide:", options: ["Extra bleeding", "Natural pain relief and a sense of calm", "Higher blood pressure", "Faster digestion"], answer: 1, rationale: "Endorphins give natural analgesia and a sense of calm during labour." },
      { type: "mcq", q: "Skin-to-skin contact after birth helps by boosting:", options: ["Adrenaline only", "Oxytocin and prolactin, aiding bonding and feeding", "Progesterone", "Cortisol"], answer: 1, rationale: "Skin-to-skin raises oxytocin and prolactin, supporting bonding and breastfeeding." },
      { type: "mcq", q: "Which environment best supports the hormonal physiology of labour?", options: ["Bright, noisy and busy", "Calm, warm, private and unrushed", "Cold and exposed", "Constant interruption"], answer: 1, rationale: "A calm, warm, private environment supports oxytocin and endorphin release." },
      { type: "mcq", q: "Which hormone is released by both labour and the let-down reflex through positive feedback?", options: ["Progesterone", "Oxytocin", "Insulin", "hCG"], answer: 1, rationale: "Oxytocin drives both labour contractions and milk let-down via positive feedback." }
      , { type: "fill", q: "The positive-feedback release of oxytocin from fetal head pressure on the cervix is the ____ reflex.", accept: ["ferguson", "ferguson's"], rationale: "The Ferguson reflex is the positive-feedback loop of labour." }
      , { type: "fill", q: "Milk production is held back in pregnancy by high levels of ____.", accept: ["progesterone"], rationale: "High progesterone inhibits lactation until it falls after birth." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "asm-08-antenatal-care",
    unit: "Unit 3 · Antenatal Care & Screening",
    title: "Antenatal Care and Antenatal Decision Points",
    readMinutes: 18,
    summary: "Aims and pattern of antenatal care, the booking visit and history, routine assessments, recognising danger signs and decision points, and the midwife's role in continuity and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Aims of antenatal care", list: [
        "Promote and maintain the health and wellbeing of the mother and fetus.",
        "Detect and manage, or refer, deviations from normal early.",
        "Prepare the woman for labour, birth, breastfeeding and parenthood.",
        "Provide information, education and emotional support for informed choice.",
        "Build a trusting relationship (continuity of carer)."
      ] },
      { h: "The booking (first) visit", p: "The first, or booking, visit is ideally early in pregnancy. The midwife takes a full history, carries out baseline assessments and screening, gives information, and plans care. It sets the pattern for the pregnancy and identifies women who need extra care or referral." },
      { h: "History taking", list: [
        "Personal and social details, and this pregnancy (last menstrual period, expected date of delivery).",
        "Past obstetric history — previous pregnancies, births and outcomes.",
        "Medical and surgical history — e.g. hypertension, diabetes, cardiac or renal disease.",
        "Family and genetic history.",
        "Current medicines, allergies, and use of tobacco, alcohol or drugs."
      ] },
      { h: "Routine antenatal assessments", list: [
        "Blood pressure and urinalysis (for protein and glucose) at every visit.",
        "Weight and general examination.",
        "Abdominal examination — fundal height, lie, presentation and fetal heart from appropriate gestation.",
        "Blood tests — blood group and Rhesus, full blood count (anaemia), and infection screening.",
        "Ultrasound for dating and fetal anomaly as available."
      ] },
      { h: "Antenatal decision points", p: "Throughout pregnancy the midwife makes decisions with the woman: confirming and dating the pregnancy, planning place of birth, offering and interpreting screening, responding to symptoms, and deciding when to consult or refer. Each contact is an opportunity to reassess risk and adjust the plan.", figure: {
        caption: "Danger signs in pregnancy that require the woman to seek care and the midwife to refer.",
        svg: '<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Antenatal danger signs box."><rect x="20" y="20" width="480" height="145" rx="12" fill="#FDF2F8" stroke="#831843" stroke-width="2.5"/><text x="260" y="45" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">ANTENATAL DANGER SIGNS — refer</text><text x="45" y="72" font-family="sans-serif" font-size="11" fill="#831843">• Vaginal bleeding</text><text x="45" y="94" font-family="sans-serif" font-size="11" fill="#831843">• Severe headache / blurred vision</text><text x="45" y="116" font-family="sans-serif" font-size="11" fill="#831843">• Swelling of face and hands</text><text x="45" y="138" font-family="sans-serif" font-size="11" fill="#831843">• Reduced fetal movements</text><text x="290" y="72" font-family="sans-serif" font-size="11" fill="#831843">• Fever</text><text x="290" y="94" font-family="sans-serif" font-size="11" fill="#831843">• Severe abdominal pain</text><text x="290" y="116" font-family="sans-serif" font-size="11" fill="#831843">• Fluid leaking from vagina</text><text x="290" y="138" font-family="sans-serif" font-size="11" fill="#831843">• Convulsions / fits</text></svg>'
      } },
      { h: "Recognising deviations from normal", p: "The midwife is alert for warning signs: rising blood pressure and proteinuria (pre-eclampsia — commonly defined as BP 140/90 mmHg or higher), oedema, anaemia, abnormal fundal growth, bleeding, reduced fetal movements, and signs of infection. Finding these triggers timely consultation or referral." },
      { h: "Health education and preparation", p: "The midwife advises on nutrition and supplements (iron, folate), rest and activity, danger signs, birth preparation and infant feeding. Education is ongoing and tailored to the woman's needs, culture and understanding." },
      { h: "Continuity, documentation and referral", p: "Good antenatal care depends on accurate records, clear communication and, where possible, continuity of carer. The midwife documents findings and decisions, and refers promptly and appropriately when care is needed beyond her scope, keeping the woman informed throughout." }
    ],
    references: REF_ASM,
    examQuestions: [
      "State the aims of antenatal care.",
      "Describe the components of a booking history.",
      "List the routine assessments carried out at antenatal visits.",
      "Identify the danger signs in pregnancy that require referral.",
      "Explain the importance of continuity, documentation and timely referral in antenatal care."
    ],
    assessment: [
      { type: "mcq", q: "The main aim of antenatal care is to:", options: ["Increase the number of hospital admissions", "Promote maternal and fetal health and detect problems early", "Reduce the length of pregnancy", "Replace the need for birth attendance"], answer: 1, rationale: "Antenatal care aims to keep mother and fetus healthy and to detect and refer problems early." },
      { type: "mcq", q: "The first antenatal visit is called the:", options: ["Booking visit", "Discharge visit", "Postnatal visit", "Referral visit"], answer: 0, rationale: "The first, comprehensive antenatal visit is the booking visit." },
      { type: "mcq", q: "Which two checks are carried out at EVERY antenatal visit?", options: ["X-ray and ECG", "Blood pressure and urinalysis", "Amniocentesis and biopsy", "Hearing and vision tests"], answer: 1, rationale: "Blood pressure and urinalysis are routine at every antenatal visit." },
      { type: "mcq", q: "Pre-eclampsia is commonly identified by:", options: ["Low blood pressure and glucose", "Raised blood pressure (about 140/90 or higher) and proteinuria", "Low temperature", "Rapid weight loss"], answer: 1, rationale: "Pre-eclampsia features raised BP (commonly 140/90 mmHg or more) with proteinuria." },
      { type: "mcq", q: "Which is an antenatal DANGER sign requiring referral?", options: ["Mild backache", "Vaginal bleeding", "Occasional heartburn", "Increased appetite"], answer: 1, rationale: "Vaginal bleeding is a danger sign needing urgent assessment and referral." },
      { type: "mcq", q: "Reduced fetal movements should prompt the midwife to:", options: ["Reassure and ignore", "Assess and refer for further evaluation", "Advise more exercise only", "Wait two weeks"], answer: 1, rationale: "Reduced fetal movements can indicate fetal compromise and require assessment/referral." },
      { type: "mcq", q: "Measuring the fundal height helps assess:", options: ["Maternal blood pressure", "Fetal growth and gestation", "Maternal blood group", "Urine protein"], answer: 1, rationale: "Fundal height is used to monitor fetal growth against gestation." },
      { type: "mcq", q: "Determining the mother's blood group and Rhesus factor is important to:", options: ["Predict the baby's eye colour", "Identify Rhesus issues and plan management", "Measure fetal heart rate", "Assess fundal height"], answer: 1, rationale: "Knowing blood group and Rhesus status guides management of Rhesus incompatibility." },
      { type: "mcq", q: "Supplements routinely advised in pregnancy include:", options: ["Iron and folic acid", "Vitamin C only", "Antibiotics", "Sedatives"], answer: 0, rationale: "Iron and folic acid are routinely advised to prevent anaemia and neural-tube defects." },
      { type: "mcq", q: "When a problem is beyond the midwife's scope she should:", options: ["Manage it herself regardless", "Refer promptly and keep the woman informed", "Discharge the woman", "Wait for the next visit"], answer: 1, rationale: "Timely, appropriate referral with clear communication protects safety." }
      , { type: "fill", q: "The first comprehensive antenatal visit is known as the ____ visit.", accept: ["booking"], rationale: "The booking visit is the first, comprehensive antenatal visit." }
      , { type: "fill", q: "Raised blood pressure with protein in the urine in pregnancy suggests ____.", accept: ["pre-eclampsia", "preeclampsia", "pre eclampsia"], rationale: "Hypertension with proteinuria in pregnancy suggests pre-eclampsia." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "asm-09-antenatal-screening",
    unit: "Unit 3 · Antenatal Care & Screening",
    title: "Antenatal Screening: Pathophysiology, Screening and Prevention (Syphilis, Rubella)",
    readMinutes: 18,
    summary: "Principles of antenatal screening; syphilis and rubella as examples — their effects in pregnancy, screening, treatment and prevention; and the midwife's role in offering and following up screening.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is screening?", p: "Screening is testing apparently healthy people to identify those who may have, or be at higher risk of, a condition, so that it can be confirmed and managed early. A screening test is not a diagnosis: positive ('screen-positive') results need a confirming (diagnostic) test. Antenatal screening protects the mother and helps prevent harm to the fetus." },
      { h: "Principles of good screening", list: [
        "The condition is important and understood, with a recognisable early stage.",
        "A suitable, acceptable, safe test exists.",
        "Effective treatment or intervention is available.",
        "Early detection improves outcome.",
        "The programme is offered with informed consent and good follow-up."
      ] },
      { h: "Syphilis in pregnancy", p: "Syphilis is a sexually transmitted infection caused by the bacterium Treponema pallidum. In pregnancy it can cross the placenta and cause congenital syphilis, miscarriage, stillbirth, preterm birth or serious neonatal disease. It is screened for by a blood test at booking; if positive, the woman (and partner) is treated with penicillin, which also prevents fetal infection when given in good time. This makes syphilis a highly preventable cause of harm." },
      { h: "Rubella (German measles)", p: "Rubella is a viral infection. Infection in early pregnancy, especially the first trimester, can cause congenital rubella syndrome — deafness, eye defects, heart defects and learning difficulties. There is no treatment once infection occurs, so PREVENTION through vaccination (MMR) before pregnancy is key. Antenatal testing checks immunity; non-immune women are advised to avoid contact and are offered vaccination after birth (the vaccine is not given during pregnancy).", figure: {
        caption: "Screening pathway: a positive screening test leads to a confirming test and then treatment or referral.",
        svg: '<svg viewBox="0 0 540 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Antenatal screening pathway."><defs><marker id="asmArr9" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="45" width="115" height="50" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="72" y="68" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Offer screening</text><text x="72" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">(informed consent)</text><rect x="165" y="45" width="115" height="50" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="222" y="68" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Screening test</text><rect x="315" y="45" width="115" height="50" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="372" y="68" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Confirming test</text><rect x="465" y="45" width="70" height="50" rx="9" fill="#831843"/><text x="500" y="68" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#FDF2F8">Treat /</text><text x="500" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#FDF2F8">refer</text><line x1="130" y1="70" x2="162" y2="70" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr9)"/><line x1="280" y1="70" x2="312" y2="70" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr9)"/><line x1="430" y1="70" x2="462" y2="70" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr9)"/></svg>'
      } },
      { h: "Other routine antenatal screens", list: [
        "Blood group and Rhesus antibodies.",
        "Anaemia (full blood count / haemoglobin).",
        "Blood-borne infections — hepatitis B, HIV.",
        "Bacteriuria / urinary infection.",
        "Fetal anomaly and, where offered, chromosomal screening."
      ] },
      { h: "Prevention and treatment principles", p: "For treatable infections (syphilis), early detection and treatment prevent harm. For preventable infections (rubella), immunisation before pregnancy is the key. General prevention includes safer sex, good hygiene, up-to-date vaccination and early antenatal booking." },
      { h: "The midwife's role in screening", list: [
        "Explain each test clearly and obtain informed consent — including the right to decline.",
        "Take samples correctly and ensure results are followed up.",
        "Give results sensitively and arrange treatment or referral for screen-positive women.",
        "Provide information, support and health education, and maintain confidentiality."
      ] }
    ],
    references: REF_ASM,
    examQuestions: [
      "Define screening and explain the principles of a good screening programme.",
      "Describe the effects of syphilis in pregnancy and how it is screened for and treated.",
      "Explain why rubella is dangerous in early pregnancy and how it is prevented.",
      "List the routine infections and conditions screened for in pregnancy.",
      "Discuss the midwife's role in antenatal screening, including consent and follow-up."
    ],
    assessment: [
      { type: "mcq", q: "A screening test is used to:", options: ["Confirm a diagnosis", "Identify those who may have or be at risk of a condition", "Treat an illness", "Replace history taking"], answer: 1, rationale: "Screening identifies those who may have or be at risk; diagnosis needs a confirming test." },
      { type: "mcq", q: "Syphilis is caused by the organism:", options: ["Treponema pallidum", "Rubella virus", "Hepatitis B virus", "Escherichia coli"], answer: 0, rationale: "Syphilis is caused by the bacterium Treponema pallidum." },
      { type: "mcq", q: "The treatment of choice for syphilis in pregnancy is:", options: ["Penicillin", "Vaccination", "Antiviral tablets", "No treatment"], answer: 0, rationale: "Penicillin treats maternal syphilis and helps prevent congenital infection." },
      { type: "mcq", q: "Rubella infection is most dangerous to the fetus when it occurs in the:", options: ["Third trimester", "First trimester (early pregnancy)", "Labour", "Postnatal period"], answer: 1, rationale: "Early (first-trimester) rubella causes congenital rubella syndrome." },
      { type: "mcq", q: "The key way to prevent rubella in pregnancy is:", options: ["Antibiotics", "Vaccination (MMR) before pregnancy", "Bed rest", "Vitamin supplements"], answer: 1, rationale: "Rubella has no treatment once acquired; prevention is by vaccination before pregnancy." },
      { type: "mcq", q: "The rubella (MMR) vaccine is:", options: ["Given during pregnancy", "Not given during pregnancy; offered after birth to non-immune women", "Given only in labour", "Given to the newborn at birth"], answer: 1, rationale: "As a live vaccine, MMR is avoided in pregnancy and offered postnatally to non-immune women." },
      { type: "mcq", q: "A screen-positive result should be followed by:", options: ["Immediate treatment without confirmation", "A confirming (diagnostic) test", "Ignoring the result", "Repeating the screen only once"], answer: 1, rationale: "Screen-positive results need a confirming diagnostic test before management." },
      { type: "mcq", q: "Congenital syphilis can result in:", options: ["Only mild rash", "Stillbirth and serious neonatal disease", "Improved fetal growth", "No effect on the baby"], answer: 1, rationale: "Untreated syphilis in pregnancy can cause stillbirth and severe congenital disease." },
      { type: "mcq", q: "Before any antenatal screening test, the midwife must:", options: ["Obtain informed consent", "Perform it secretly", "Skip explanation to save time", "Force the woman to accept"], answer: 0, rationale: "Screening is offered with informed consent, including the right to decline." },
      { type: "mcq", q: "A feature of a GOOD screening programme is that:", options: ["No treatment is available", "Effective treatment/intervention exists and early detection helps", "The test is unsafe", "Results are never followed up"], answer: 1, rationale: "Screening is worthwhile when effective intervention exists and early detection improves outcome." }
      , { type: "fill", q: "Syphilis is caused by the bacterium Treponema ____.", accept: ["pallidum"], rationale: "The organism is Treponema pallidum." }
      , { type: "fill", q: "Rubella in early pregnancy can cause congenital rubella ____.", accept: ["syndrome"], rationale: "Early rubella causes congenital rubella syndrome." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "asm-10-mechanism-labour",
    unit: "Unit 4 · Physiology & Care in Labour",
    title: "Physiology and Mechanism of Normal Labour",
    readMinutes: 18,
    summary: "Definition and onset of labour, the powers-passage-passenger framework, uterine action, and the mechanism of normal labour for a vertex presentation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition of labour", p: "Labour is the process by which the products of conception (fetus, placenta and membranes) are expelled from the uterus after 24 weeks of pregnancy. NORMAL labour is spontaneous in onset, at term (37–42 weeks), with the fetus presenting by the vertex, completed within a reasonable time without complications, and with a healthy mother and baby." },
      { h: "Onset of labour", p: "Labour begins through a combination of hormonal changes (falling progesterone effect, rising oestrogen, oxytocin and prostaglandins) and stretching of the uterus and cervix. Signs of onset include regular painful contractions, a 'show' (blood-stained mucus plug), and sometimes rupture of the membranes." },
      { h: "The three P's", p: "Progress in labour depends on three interacting factors:", list: [
        "Powers — uterine contractions and, in the second stage, maternal effort.",
        "Passage — the bony pelvis and the soft tissues (cervix, vagina, pelvic floor).",
        "Passenger — the fetus, its size, presentation, position and attitude."
      ] },
      { h: "Uterine action (the powers)", p: "In labour the uterus contracts and RETRACTS: with each contraction the upper segment shortens and thickens and does not fully relax, so the fetus is gradually pushed down while the lower segment thins and the cervix effaces (thins) and dilates (opens) to full dilatation (about 10 cm). Contractions are involuntary, intermittent and rhythmic, allowing blood flow to recover between them." },
      { h: "Effacement and dilatation", p: "EFFACEMENT is the taking-up (shortening and thinning) of the cervix. DILATATION is the opening of the cervical os. In a first labour effacement often precedes dilatation; in later labours they may occur together. Progress is assessed by these changes together with descent of the presenting part." },
      { h: "The mechanism of normal labour", p: "For a vertex presentation the fetus makes a series of passive movements to negotiate the pelvis, described in order.", list: [
        "Descent — the head moves down through the pelvis.",
        "Flexion — the head flexes so the smallest diameter presents.",
        "Internal rotation — the occiput rotates forward under the symphysis pubis.",
        "Extension (crowning and birth of the head) — the head is born by extension.",
        "Restitution — the head realigns with the shoulders.",
        "External rotation — the shoulders rotate to the anteroposterior diameter.",
        "Lateral flexion — the body is born as the shoulders and trunk are delivered."
      ], figure: {
        caption: "The mechanism of normal labour: the sequence of passive movements of the fetus.",
        svg: '<svg viewBox="0 0 540 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sequence of the mechanism of labour."><defs><marker id="asmArr10" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#831843"/></marker></defs><rect x="10" y="45" width="80" height="45" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.8"/><text x="50" y="72" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">Descent</text><rect x="100" y="45" width="80" height="45" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/><text x="140" y="72" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">Flexion</text><rect x="190" y="45" width="90" height="45" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.8"/><text x="235" y="66" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">Internal</text><text x="235" y="79" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">rotation</text><rect x="290" y="45" width="80" height="45" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/><text x="330" y="72" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">Extension</text><rect x="380" y="45" width="70" height="45" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.8"/><text x="415" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">Restitution</text><rect x="460" y="45" width="70" height="45" rx="7" fill="#831843"/><text x="495" y="66" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FDF2F8">Ext. rot.</text><text x="495" y="79" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">&amp; birth</text><line x1="90" y1="67" x2="99" y2="67" stroke="#831843" stroke-width="2" marker-end="url(#asmArr10)"/><line x1="180" y1="67" x2="189" y2="67" stroke="#831843" stroke-width="2" marker-end="url(#asmArr10)"/><line x1="280" y1="67" x2="289" y2="67" stroke="#831843" stroke-width="2" marker-end="url(#asmArr10)"/><line x1="370" y1="67" x2="379" y2="67" stroke="#831843" stroke-width="2" marker-end="url(#asmArr10)"/><line x1="450" y1="67" x2="459" y2="67" stroke="#831843" stroke-width="2" marker-end="url(#asmArr10)"/></svg>'
      } },
      { h: "The midwife's role", p: "The midwife supports the physiology of labour: encouraging mobility and upright positions, offering food and fluids, providing reassurance and comfort, monitoring maternal and fetal wellbeing and progress, and recognising and referring deviations such as poor progress, malpresentation or fetal distress." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Define normal labour and list its features.",
      "Explain the 'three P's' that influence progress in labour.",
      "Describe uterine action in labour, including retraction, effacement and dilatation.",
      "Describe, in order, the mechanism of normal labour for a vertex presentation.",
      "Outline the midwife's role in supporting the physiology of normal labour."
    ],
    assessment: [
      { type: "mcq", q: "Normal labour is defined as spontaneous onset at term with the fetus presenting by the:", options: ["Breech", "Vertex", "Shoulder", "Face"], answer: 1, rationale: "Normal labour is spontaneous, at term, with a vertex presentation and good outcome." },
      { type: "mcq", q: "The 'three P's' of labour are powers, passage and:", options: ["Position", "Passenger", "Perineum", "Placenta"], answer: 1, rationale: "The three P's are powers, passage and passenger." },
      { type: "mcq", q: "The 'powers' of labour refer mainly to:", options: ["The bony pelvis", "Uterine contractions and maternal effort", "The fetal skull", "The placenta"], answer: 1, rationale: "The powers are the uterine contractions and, later, maternal pushing effort." },
      { type: "mcq", q: "Full dilatation of the cervix is about:", options: ["4 cm", "6 cm", "10 cm", "15 cm"], answer: 2, rationale: "Full cervical dilatation is approximately 10 cm." },
      { type: "mcq", q: "The shortening and thinning of the cervix is called:", options: ["Dilatation", "Effacement", "Retraction", "Restitution"], answer: 1, rationale: "Effacement is the taking-up (thinning) of the cervix." },
      { type: "mcq", q: "'Retraction' of the uterus means that after each contraction the upper segment:", options: ["Fully relaxes to its former length", "Stays partly shortened and thickened", "Stops working", "Dilates the cervix directly"], answer: 1, rationale: "Retraction means the upper segment does not fully relax, progressively pushing the fetus down." },
      { type: "mcq", q: "In the mechanism of labour, flexion of the head allows:", options: ["A larger diameter to present", "The smallest diameter to present", "The head to be born first by the face", "The shoulders to be born first"], answer: 1, rationale: "Flexion presents the smallest (suboccipitobregmatic) diameter to the pelvis." },
      { type: "mcq", q: "The head is born by which movement?", options: ["Flexion", "Extension", "Internal rotation", "Descent"], answer: 1, rationale: "The head is born by extension as it passes under the symphysis pubis." },
      { type: "mcq", q: "Realignment of the head with the shoulders after birth of the head is called:", options: ["Restitution", "Crowning", "Effacement", "Descent"], answer: 0, rationale: "Restitution is the head untwisting to realign with the shoulders." },
      { type: "mcq", q: "A 'show' in labour is:", options: ["Rupture of the uterus", "Blood-stained mucus plug from the cervix", "The placenta being expelled", "The baby's head visible"], answer: 1, rationale: "A show is the blood-stained operculum (mucus plug) released as the cervix changes." }
      , { type: "fill", q: "The opening of the cervix during labour is called ____.", accept: ["dilatation", "dilation"], rationale: "Dilatation is the opening of the cervical os to full dilatation (~10 cm)." }
      , { type: "fill", q: "The three P's of labour are powers, passage and ____.", accept: ["passenger"], rationale: "The passenger is the fetus and its characteristics." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "asm-11-stages-labour",
    unit: "Unit 4 · Physiology & Care in Labour",
    title: "The Stages of Labour and Care in Each",
    readMinutes: 18,
    summary: "The three (four) stages of labour, the phases of the first stage, physiological features and the midwife's care and observations in each stage.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The stages of labour", list: [
        "First stage — from the onset of established labour to full dilatation of the cervix (10 cm).",
        "Second stage — from full dilatation to the birth of the baby.",
        "Third stage — from the birth of the baby to the expulsion of the placenta and membranes.",
        "Some describe a 'fourth stage' — the first hour or so after birth, a critical time for observation."
      ] },
      { h: "Phases of the first stage", list: [
        "Latent phase — slow, often irregular contractions with early cervical change (effacement and dilatation to a few centimetres).",
        "Active (established) phase — regular, stronger contractions with more rapid, progressive dilatation.",
        "Transition — the end of the first stage, often intense, as full dilatation is reached."
      ] },
      { h: "Care in the first stage", list: [
        "Welcome the woman, take a history and provide continuous support.",
        "Monitor maternal wellbeing — pulse, temperature, blood pressure, hydration, bladder care.",
        "Monitor fetal wellbeing — fetal heart rate, colour of the liquor.",
        "Assess progress — contractions, cervical dilatation and descent, recorded on the partograph.",
        "Encourage mobility, comfort measures, food and fluids, and offer pain relief."
      ] },
      { h: "The second stage", p: "The second stage runs from full dilatation to birth. It has a passive phase (the head descends before the urge to push) and an active phase (the woman pushes with contractions). Signs include an expulsive urge, bulging perineum, and the head advancing and crowning. The midwife supports spontaneous pushing, protects the perineum, and monitors the fetal heart closely.", figure: {
        caption: "The stages of labour from onset to expulsion of the placenta.",
        svg: '<svg viewBox="0 0 540 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of labour timeline."><line x1="20" y1="70" x2="520" y2="70" stroke="#831843" stroke-width="3"/><rect x="20" y="48" width="230" height="44" rx="7" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="135" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">FIRST STAGE</text><text x="135" y="82" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#831843">onset to full dilatation</text><rect x="255" y="48" width="150" height="44" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="330" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">SECOND STAGE</text><text x="330" y="82" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#831843">full dilatation to birth</text><rect x="410" y="48" width="110" height="44" rx="7" fill="#F472B6" stroke="#BE185D" stroke-width="2"/><text x="465" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">THIRD STAGE</text><text x="465" y="82" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#831843">placenta</text><text x="270" y="35" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">The stages of labour</text></svg>'
      } },
      { h: "Care in the second stage", list: [
        "Support the woman's chosen position and spontaneous pushing.",
        "Monitor the fetal heart rate after contractions (more frequently than in the first stage).",
        "Keep the perineum in view; support a slow, controlled birth of the head.",
        "Note the time of birth; place the baby skin-to-skin and assess condition (Apgar)."
      ] },
      { h: "The third stage", p: "The third stage is the separation and expulsion of the placenta and membranes. It may be managed actively (with a uterotonic, controlled cord traction and clamping) or physiologically. The midwife watches for signs of separation, delivers the placenta safely, checks it is complete, assesses blood loss, and ensures the uterus is well contracted to prevent haemorrhage." },
      { h: "The 'fourth stage' and immediate care", p: "In the first hour after birth the midwife observes the mother closely for bleeding, checks the fundus and blood pressure, promotes skin-to-skin contact and early breastfeeding, and cares for the newborn. This period is critical for detecting early postpartum haemorrhage." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Name the stages of labour and define each.",
      "Describe the phases of the first stage of labour.",
      "Outline the midwife's care and observations in the first stage.",
      "Describe the signs of the second stage and the midwife's care during it.",
      "Explain the importance of observation in the first hour after birth."
    ],
    assessment: [
      { type: "mcq", q: "The first stage of labour ends when:", options: ["The membranes rupture", "The cervix is fully dilated", "The baby is born", "The placenta is delivered"], answer: 1, rationale: "The first stage ends at full cervical dilatation (about 10 cm)." },
      { type: "mcq", q: "The second stage of labour is from full dilatation to:", options: ["The onset of contractions", "Rupture of the membranes", "Birth of the baby", "Delivery of the placenta"], answer: 2, rationale: "The second stage runs from full dilatation to the birth of the baby." },
      { type: "mcq", q: "The third stage of labour involves:", options: ["Cervical dilatation", "Birth of the baby", "Separation and expulsion of the placenta", "The latent phase"], answer: 2, rationale: "The third stage is delivery of the placenta and membranes." },
      { type: "mcq", q: "The slow, early part of the first stage with irregular contractions is the:", options: ["Latent phase", "Active phase", "Transition", "Second stage"], answer: 0, rationale: "The latent phase is the early first stage with slow cervical change." },
      { type: "mcq", q: "In the second stage the fetal heart should be monitored:", options: ["Less often than in the first stage", "More frequently, e.g. after each contraction", "Only once", "Not at all"], answer: 1, rationale: "The fetal heart is monitored more frequently in the second stage." },
      { type: "mcq", q: "A sign of the second stage of labour is:", options: ["A show only", "An expulsive urge and advancing/crowning head", "Cervix 4 cm dilated", "Delivery of the placenta"], answer: 1, rationale: "The urge to push and an advancing, crowning head indicate the second stage." },
      { type: "mcq", q: "Progress in the first stage is recorded on the:", options: ["Apgar chart", "Partograph", "Growth chart", "Prescription chart"], answer: 1, rationale: "The partograph records progress and maternal/fetal observations in labour." },
      { type: "mcq", q: "After the placenta is delivered, the midwife must ensure the uterus is:", options: ["Relaxed and soft", "Well contracted", "Removed", "Still full"], answer: 1, rationale: "A well-contracted uterus prevents postpartum haemorrhage after the third stage." },
      { type: "mcq", q: "The 'fourth stage' refers to:", options: ["The latent phase", "The first hour or so after birth", "Full dilatation", "The show"], answer: 1, rationale: "The fourth stage is the immediate hour(s) after birth, a critical observation period." },
      { type: "mcq", q: "Immediately after birth the midwife should promote:", options: ["Separation of mother and baby", "Skin-to-skin contact and early breastfeeding", "Immediate bathing of the baby", "Delayed observation of the mother"], answer: 1, rationale: "Skin-to-skin contact and early breastfeeding support bonding, warmth and feeding." }
      , { type: "fill", q: "The stage of labour from full dilatation to birth of the baby is the ____ stage.", accept: ["second", "2nd"], rationale: "The second stage runs from full dilatation to birth." }
      , { type: "fill", q: "The early, slow part of the first stage is the ____ phase.", accept: ["latent"], rationale: "The latent phase is the early first stage with slow cervical change." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "asm-12-partograph",
    unit: "Unit 4 · Physiology & Care in Labour",
    title: "The Partograph and Monitoring in Labour",
    readMinutes: 17,
    summary: "Purpose and components of the partograph, how progress and maternal/fetal wellbeing are recorded, the alert and action lines, and the midwife's use of it to detect deviations early.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is the partograph?", p: "The partograph (partogram) is a single pre-printed chart used to record the progress of labour and the condition of the mother and fetus over time. It gives an at-a-glance picture, helps detect slow progress or problems early, and supports timely decisions and referral. It is a key WHO-recommended tool for safe labour care." },
      { h: "Purpose", list: [
        "Provide a clear visual record of labour on one page.",
        "Monitor progress of labour (cervical dilatation and descent).",
        "Monitor fetal and maternal wellbeing.",
        "Give early warning of abnormal (slow) progress.",
        "Guide decisions about intervention and referral."
      ] },
      { h: "When to start the partograph", p: "The partograph is generally started when the woman is in established (active) labour. Recordings are then made at regular intervals set by local protocol. Starting and plotting it correctly is important so that progress can be judged accurately." },
      { h: "The fetal section", list: [
        "Fetal heart rate — recorded regularly to detect distress.",
        "State of the membranes and colour of the liquor (clear, meconium-stained, blood-stained).",
        "Moulding of the fetal skull bones."
      ] },
      { h: "The progress section", p: "The centre of the partograph plots CERVICAL DILATATION (usually as X) and DESCENT of the head over time, plus the frequency and duration of contractions. Two reference lines guide interpretation.", list: [
        "Alert line — plotted from the start of active labour; if dilatation crosses to the right of it, progress is slower than expected and closer attention/plans are needed.",
        "Action line — set a few hours to the right of the alert line; reaching it prompts definite action or referral for management."
      ], figure: {
        caption: "The partograph: cervical dilatation plotted against time with alert and action lines.",
        svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified partograph with alert and action lines."><rect x="55" y="20" width="380" height="150" fill="#FDF2F8" stroke="#831843" stroke-width="1.8"/><line x1="55" y1="20" x2="55" y2="170" stroke="#831843" stroke-width="1.5"/><line x1="55" y1="170" x2="435" y2="170" stroke="#831843" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" font-size="9" fill="#831843">10</text><text x="24" y="168" font-family="sans-serif" font-size="9" fill="#831843">4</text><text x="15" y="100" font-family="sans-serif" font-size="9" fill="#831843" transform="rotate(-90 15 100)">Dilatation (cm)</text><text x="200" y="190" font-family="sans-serif" font-size="9" fill="#831843">Time (hours)</text><line x1="55" y1="170" x2="255" y2="25" stroke="#BE185D" stroke-width="2.2"/><text x="150" y="70" font-family="sans-serif" font-size="9" fill="#BE185D">Alert line</text><line x1="145" y1="170" x2="345" y2="25" stroke="#7C2D12" stroke-width="2.2" stroke-dasharray="6 4"/><text x="300" y="70" font-family="sans-serif" font-size="9" fill="#7C2D12">Action line</text><circle cx="80" cy="150" r="3.5" fill="#15803D"/><circle cx="130" cy="120" r="3.5" fill="#15803D"/><circle cx="180" cy="80" r="3.5" fill="#15803D"/><text x="90" y="205" font-family="sans-serif" font-size="9" fill="#15803D">plotted dilatation (progress to left of alert line = normal)</text></svg>'
      } },
      { h: "The maternal section", list: [
        "Maternal pulse, blood pressure and temperature.",
        "Contractions — frequency and duration (often shaded per 10 minutes).",
        "Urine output and tests (volume, protein, glucose, ketones).",
        "Oxytocin and drugs given, and fluids."
      ] },
      { h: "The midwife's use of the partograph", p: "The midwife records accurately and at the correct intervals, interprets the plotted progress against the alert and action lines, and acts on deviations — for example poor progress, fetal heart abnormalities or maternal signs — by reviewing care and referring in good time. Accurate use supports safe, timely decisions." }
    ],
    references: REF_ASM,
    examQuestions: [
      "What is a partograph and what is its purpose?",
      "List the maternal and fetal observations recorded on the partograph.",
      "Explain the alert line and action line and their significance.",
      "When should the partograph be started and how is progress plotted?",
      "How does the midwife use the partograph to detect and act on deviations from normal?"
    ],
    assessment: [
      { type: "mcq", q: "The partograph is used to record the:", options: ["Progress of labour and maternal/fetal condition", "Baby's immunisations", "Antenatal booking history only", "Postnatal diet"], answer: 0, rationale: "The partograph records progress of labour and maternal and fetal wellbeing on one chart." },
      { type: "mcq", q: "On the partograph, cervical dilatation is plotted against:", options: ["Blood pressure", "Time", "Fetal weight", "Maternal age"], answer: 1, rationale: "Cervical dilatation is plotted against time to show progress." },
      { type: "mcq", q: "If plotted dilatation crosses to the RIGHT of the alert line, it suggests:", options: ["Faster than normal progress", "The labour is complete", "Slower than expected progress needing closer attention", "The baby is well"], answer: 2, rationale: "Crossing right of the alert line means progress is slower than expected." },
      { type: "mcq", q: "Reaching the ACTION line usually prompts the midwife to:", options: ["Do nothing", "Discharge the woman", "Stop recording", "Take definite action or refer for management"], answer: 3, rationale: "The action line signals the need for definite intervention or referral." },
      { type: "mcq", q: "The partograph is generally started when the woman is in:", options: ["The latent phase", "Established (active) labour", "The postnatal period", "Early pregnancy"], answer: 1, rationale: "Plotting normally begins in established (active) labour." },
      { type: "mcq", q: "Meconium-stained liquor recorded on the partograph may indicate:", options: ["Possible fetal compromise needing attention", "Normal findings always", "Full dilatation", "A large baby"], answer: 0, rationale: "Meconium-stained liquor can be a sign of fetal compromise and needs closer monitoring." },
      { type: "mcq", q: "Which is recorded in the FETAL section of the partograph?", options: ["Maternal blood pressure", "Fetal heart rate and liquor", "Maternal urine output", "Drugs given to the mother"], answer: 1, rationale: "The fetal section records fetal heart rate, liquor and moulding." },
      { type: "mcq", q: "Contractions on the partograph are recorded by their:", options: ["Colour only", "Cost", "Frequency and duration", "Number of attendants"], answer: 2, rationale: "Contraction frequency and duration are recorded (often shaded per 10 minutes)." },
      { type: "mcq", q: "A key benefit of the partograph is that it:", options: ["Replaces the midwife", "Gives early warning of abnormal progress", "Guarantees a normal birth", "Measures the baby's weight"], answer: 1, rationale: "The partograph gives an early warning of slow or abnormal progress." },
      { type: "mcq", q: "Accurate partograph recording depends on:", options: ["Guessing values", "Filling it after birth only", "Recording once at admission", "Recording correctly at the right intervals"], answer: 3, rationale: "Correct, timely recording is essential for accurate interpretation." }
      , { type: "fill", q: "The line on the partograph that warns of slow progress is the ____ line.", accept: ["alert"], rationale: "The alert line warns of slower-than-expected progress." }
      , { type: "fill", q: "The chart used to record progress of labour on one page is the ____.", accept: ["partograph", "partogram"], rationale: "The partograph (partogram) records labour progress and observations." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "asm-13-pain-relief",
    unit: "Unit 4 · Physiology & Care in Labour",
    title: "Pain Relief in Labour: Non-Pharmacological and Pharmacological",
    readMinutes: 18,
    summary: "The nature of labour pain, principles of supporting women with pain, non-pharmacological methods, pharmacological options and their considerations, and the midwife's role in informed choice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The nature of labour pain", p: "Labour pain is a normal, purposeful pain that varies between women. In the first stage it comes mainly from uterine contractions and cervical dilatation; in the second stage from stretching of the vagina, pelvic floor and perineum. Pain is influenced by physical, psychological, cultural and environmental factors, so support must be individualised." },
      { h: "Principles of working with women and their pain", list: [
        "Support the woman's own coping and choices rather than 'treating' pain automatically.",
        "Provide continuous, kind, one-to-one support.",
        "Create a calm, private environment that supports the body's own endorphins.",
        "Give clear information so the woman can make informed choices.",
        "Offer a range of methods and respect the woman's decisions."
      ] },
      { h: "Non-pharmacological methods", list: [
        "Continuous support and reassurance (a known, kind companion).",
        "Freedom to move, upright positions and position changes.",
        "Breathing and relaxation techniques.",
        "Water (warm bath or shower) and warmth.",
        "Massage, touch and counter-pressure.",
        "Heat or cold application.",
        "TENS (transcutaneous electrical nerve stimulation).",
        "A supportive environment (dim light, quiet, privacy)."
      ] },
      { h: "Why non-pharmacological methods matter", p: "These methods have few or no side-effects for mother or baby, support the woman's sense of control, and work with — rather than against — the physiology of labour. They are the first line of support and can be used alongside pharmacological methods.", figure: {
        caption: "A ladder of pain-relief options from simple support to pharmacological methods.",
        svg: '<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ladder of pain relief options in labour."><rect x="30" y="140" width="420" height="35" rx="6" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.8"/><text x="240" y="162" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Support, position, breathing, water, massage (non-pharmacological)</text><rect x="70" y="95" width="340" height="35" rx="6" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/><text x="240" y="117" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Inhalational analgesia (nitrous oxide / Entonox)</text><rect x="110" y="50" width="260" height="35" rx="6" fill="#F472B6" stroke="#BE185D" stroke-width="1.8"/><text x="240" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Opioid analgesia (systemic)</text><rect x="150" y="10" width="180" height="30" rx="6" fill="#831843"/><text x="240" y="30" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#FDF2F8">Regional (epidural)</text></svg>'
      } },
      { h: "Pharmacological methods", list: [
        "Inhalational analgesia — nitrous oxide with oxygen (Entonox); self-administered, short-acting, quickly cleared.",
        "Systemic opioids — injectable analgesics that reduce pain but can cause drowsiness and, near birth, may cause respiratory depression in the newborn.",
        "Regional analgesia — epidural, which gives effective pain relief but requires an anaesthetist, closer monitoring and reduces mobility.",
        "Local anaesthetic — used for perineal infiltration and repair."
      ] },
      { h: "Considerations and safety", p: "Each method has benefits and drawbacks that the woman should understand. Opioids given close to birth can depress the newborn's breathing; epidurals need monitoring and can affect progress and mobility. The midwife assesses suitability, follows protocols, monitors mother and baby, and refers for methods (such as epidural) that need medical/anaesthetic involvement." },
      { h: "The midwife's role", p: "The midwife discusses options antenatally and in labour, respects the woman's choices, provides continuous support, administers or arranges pain relief safely within her scope, monitors effects on mother and baby, and documents care. Above all she reassures and stays present, which itself reduces pain and fear." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Describe the sources of pain in the first and second stages of labour.",
      "List and explain non-pharmacological methods of pain relief in labour.",
      "Describe the pharmacological methods of pain relief and their main considerations.",
      "Why are non-pharmacological methods considered a first line of support?",
      "Explain the midwife's role in helping a woman make an informed choice about pain relief."
    ],
    assessment: [
      { type: "mcq", q: "Pain in the FIRST stage of labour arises mainly from:", options: ["Stretching of the perineum", "Uterine contractions and cervical dilatation", "The placenta", "The umbilical cord"], answer: 1, rationale: "First-stage pain comes mainly from contractions and cervical dilatation." },
      { type: "mcq", q: "A non-pharmacological method of pain relief is:", options: ["Epidural", "Pethidine injection", "Massage and position change", "Entonox"], answer: 2, rationale: "Massage, movement and position change are non-pharmacological methods." },
      { type: "mcq", q: "Entonox is a form of:", options: ["Regional analgesia", "Inhalational analgesia (nitrous oxide with oxygen)", "Systemic opioid", "Local anaesthetic"], answer: 1, rationale: "Entonox is inhalational analgesia — nitrous oxide with oxygen." },
      { type: "mcq", q: "A drawback of systemic opioids given close to birth is:", options: ["They increase milk supply", "They may cause respiratory depression in the newborn", "They speed up the placenta", "They have no effect on the baby"], answer: 1, rationale: "Opioids near birth can depress the newborn's breathing." },
      { type: "mcq", q: "The most effective pharmacological pain relief that needs an anaesthetist is:", options: ["TENS", "Warm bath", "Epidural (regional analgesia)", "Breathing exercises"], answer: 2, rationale: "An epidural gives effective relief but requires anaesthetic involvement and monitoring." },
      { type: "mcq", q: "Non-pharmacological methods are preferred first because they:", options: ["Are expensive", "Have few side-effects and support the woman's control", "Always remove all pain", "Require a doctor"], answer: 1, rationale: "They have few side-effects and support control and normal physiology." },
      { type: "mcq", q: "Continuous one-to-one support during labour:", options: ["Increases pain", "Reduces pain and fear", "Has no effect", "Is only for the second stage"], answer: 1, rationale: "Continuous supportive presence reduces pain and fear." },
      { type: "mcq", q: "Which method uses warm water for comfort in labour?", options: ["Epidural", "A warm bath or shower", "Pethidine", "Local anaesthetic"], answer: 1, rationale: "Immersion in warm water (bath/shower) is a non-pharmacological comfort measure." },
      { type: "mcq", q: "An epidural in labour typically:", options: ["Increases mobility", "Reduces mobility and needs closer monitoring", "Speeds up labour always", "Removes the need for monitoring"], answer: 1, rationale: "An epidural reduces mobility and requires closer monitoring." },
      { type: "mcq", q: "Before giving pain relief the midwife should:", options: ["Decide for the woman", "Give clear information for informed choice", "Withhold information", "Ignore the woman's wishes"], answer: 1, rationale: "Informed choice requires clear information and respect for the woman's decision." }
      , { type: "fill", q: "Inhalational analgesia using nitrous oxide with oxygen is commonly known as ____.", accept: ["entonox", "gas and air", "nitrous oxide"], rationale: "Entonox (gas and air) is nitrous oxide with oxygen." }
      , { type: "fill", q: "Regional analgesia that requires an anaesthetist and gives effective pain relief is an ____.", accept: ["epidural"], rationale: "An epidural is a regional analgesic technique needing anaesthetic involvement." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "asm-14-third-stage",
    unit: "Unit 4 · Physiology & Care in Labour",
    title: "Physiology and Management of the Third Stage",
    readMinutes: 18,
    summary: "Physiology of placental separation, signs of separation, active versus physiological management, cord clamping, examination of the placenta, and prevention of postpartum haemorrhage.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The third stage", p: "The third stage of labour is the period from the birth of the baby to the complete expulsion of the placenta and membranes. It is a critical time because most cases of primary postpartum haemorrhage occur here. Skilled care makes it safer." },
      { h: "Physiology of separation", p: "After the baby is born the uterus continues to contract and RETRACT, so the placental site becomes much smaller. Because the placenta cannot shrink, it shears away from the uterine wall. A small amount of blood collects behind it, completing separation, and the contracting uterus then expels the placenta. Contraction of the uterine muscle fibres clamps the blood vessels ('living ligatures'), controlling bleeding." },
      { h: "Signs of placental separation", list: [
        "A small gush of blood from the vagina.",
        "Lengthening of the umbilical cord at the vulva.",
        "The uterus becomes firm, rounded and rises in the abdomen.",
        "The woman may feel an urge to push."
      ] },
      { h: "Active management of the third stage", p: "Active management is recommended to reduce blood loss. It comprises three components.", list: [
        "A uterotonic drug (e.g. oxytocin) given after birth to make the uterus contract.",
        "Controlled cord traction to deliver the placenta while guarding the uterus.",
        "Ensuring the uterus is well contracted (assessment, and uterine massage if needed)."
      ], figure: {
        caption: "The three components of active management of the third stage.",
        svg: '<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Active management of the third stage."><defs><marker id="asmArr14" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="45" width="150" height="55" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="90" y="68" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Uterotonic</text><text x="90" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">(e.g. oxytocin)</text><rect x="185" y="45" width="150" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="260" y="68" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Controlled cord</text><text x="260" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">traction</text><rect x="355" y="45" width="150" height="55" rx="9" fill="#831843"/><text x="430" y="68" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#FDF2F8">Uterus well</text><text x="430" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">contracted</text><line x1="165" y1="72" x2="182" y2="72" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr14)"/><line x1="335" y1="72" x2="352" y2="72" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr14)"/></svg>'
      } },
      { h: "Physiological management", p: "In physiological (expectant) management no routine uterotonic is given, the cord is left unclamped until pulsation stops, and the placenta is delivered by maternal effort and gravity. This may be chosen by low-risk women who understand it; it needs a skilled attendant and is not appropriate if bleeding occurs or risk factors are present, when active management is used." },
      { h: "Cord clamping and cutting", p: "Current evidence supports DELAYED (deferred) cord clamping — waiting at least a minute or until pulsation ceases in the healthy newborn — which improves the baby's iron stores. The cord is then clamped and cut with sterile equipment. Immediate clamping may be needed if the baby requires resuscitation." },
      { h: "Examination of the placenta and blood loss", p: "The midwife examines the placenta and membranes to confirm completeness (retained tissue causes bleeding and infection), checks the cord vessels, and estimates blood loss. Postpartum haemorrhage is commonly defined as blood loss of 500 mL or more after vaginal birth; the midwife measures loss and acts early." },
      { h: "Prevention of postpartum haemorrhage and the midwife's role", list: [
        "Practise active management and ensure a well-contracted uterus.",
        "Empty the bladder, as a full bladder hinders contraction.",
        "Estimate and record blood loss accurately.",
        "Recognise atony and other causes early; massage the uterus and give uterotonics per protocol.",
        "Call for help and refer urgently for excessive bleeding."
      ] }
    ],
    references: REF_ASM,
    examQuestions: [
      "Describe the physiology of placental separation.",
      "List the signs of placental separation.",
      "Compare active and physiological management of the third stage.",
      "Explain the importance of examining the placenta and estimating blood loss.",
      "Describe how the midwife helps prevent postpartum haemorrhage."
    ],
    assessment: [
      { type: "mcq", q: "The third stage of labour is from birth of the baby to:", options: ["Full dilatation", "Delivery of the placenta and membranes", "Rupture of the membranes", "The first feed"], answer: 1, rationale: "The third stage ends with complete expulsion of the placenta and membranes." },
      { type: "mcq", q: "The contracting uterine muscle fibres that clamp the blood vessels are called the:", options: ["Cotyledons", "Living ligatures", "Chorionic villi", "Deciduae"], answer: 1, rationale: "The muscle fibres act as 'living ligatures', compressing vessels to control bleeding." },
      { type: "mcq", q: "A sign of placental separation is:", options: ["The uterus becoming soft and flat", "Lengthening of the cord and a small gush of blood", "The cord shortening", "No change at all"], answer: 1, rationale: "Cord lengthening and a small gush of blood indicate separation." },
      { type: "mcq", q: "Active management of the third stage includes giving a:", options: ["Pain killer only", "Uterotonic such as oxytocin", "Sedative", "Diuretic"], answer: 1, rationale: "A uterotonic (e.g. oxytocin) is a component of active management." },
      { type: "mcq", q: "Delayed cord clamping in a healthy newborn mainly:", options: ["Increases infection", "Improves the baby's iron stores", "Causes jaundice always", "Reduces birth weight"], answer: 1, rationale: "Deferred clamping improves the baby's iron stores." },
      { type: "mcq", q: "Postpartum haemorrhage after vaginal birth is commonly defined as blood loss of:", options: ["100 mL or more", "500 mL or more", "50 mL or more", "2000 mL or more"], answer: 1, rationale: "PPH is commonly defined as 500 mL or more of blood loss after vaginal birth." },
      { type: "mcq", q: "A full bladder in the third stage can:", options: ["Help the uterus contract", "Hinder uterine contraction and increase bleeding", "Speed placental delivery", "Have no effect"], answer: 1, rationale: "A full bladder impedes uterine contraction and can worsen bleeding." },
      { type: "mcq", q: "The placenta is examined after delivery mainly to:", options: ["Weigh the baby", "Confirm it is complete with no retained tissue", "Assess Apgar", "Measure the cord length only"], answer: 1, rationale: "Retained placental tissue causes haemorrhage and infection, so completeness is checked." },
      { type: "mcq", q: "The most common cause of primary postpartum haemorrhage is:", options: ["Uterine atony (poor contraction)", "Cord around the neck", "A large placenta only", "Maternal age"], answer: 0, rationale: "Uterine atony (failure to contract) is the commonest cause of primary PPH." },
      { type: "mcq", q: "If a woman bleeds excessively after birth the midwife should:", options: ["Wait and observe only", "Massage the uterus, give a uterotonic per protocol, call for help and refer", "Discharge her", "Give oral fluids only"], answer: 1, rationale: "Prompt uterine massage, uterotonics and urgent help/referral are needed for PPH." }
      , { type: "fill", q: "Blood loss of 500 mL or more after a vaginal birth is called postpartum ____.", accept: ["haemorrhage", "hemorrhage", "haemorrhage (pph)"], rationale: "This defines postpartum haemorrhage (PPH)." }
      , { type: "fill", q: "Failure of the uterus to contract, the main cause of PPH, is called uterine ____.", accept: ["atony", "atonia"], rationale: "Uterine atony is the commonest cause of primary PPH." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "asm-15-newborn-transition",
    unit: "Unit 5 · Newborn, Puerperium & Breastfeeding",
    title: "Immediate Newborn Care and Transition to Extrauterine Life",
    readMinutes: 18,
    summary: "The physiological changes at birth, initiation of breathing, circulatory changes, the Apgar score, immediate care including warmth and skin-to-skin, and recognising the baby who needs help.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Transition to extrauterine life", p: "At birth the newborn must rapidly change from depending on the placenta to breathing air and circulating blood through the lungs. The first breaths expand the lungs, and the fetal circulatory shunts close. This transition is the most dramatic physiological change in life and usually happens smoothly in a healthy term baby." },
      { h: "Initiation of breathing", p: "Stimuli such as cooling, handling, and rising carbon dioxide trigger the first breath. Air enters the lungs and expands the alveoli; SURFACTANT keeps the alveoli open so they do not collapse. With aeration, the lungs' blood vessels open and blood flows through the lungs to be oxygenated." },
      { h: "Circulatory changes", list: [
        "As the lungs expand, pressure in the right side of the heart falls and left-side pressure rises.",
        "The foramen ovale closes as left atrial pressure exceeds right.",
        "The ductus arteriosus constricts and closes.",
        "The ductus venosus and umbilical vessels close after the cord stops pulsating and is clamped.",
        "The circulation changes from the fetal pattern to the adult pattern."
      ] },
      { h: "The Apgar score", p: "The Apgar score assesses the newborn's condition at 1 and 5 minutes (and repeated if needed). Five signs are each scored 0, 1 or 2, giving a total out of 10.", list: [
        "Appearance (colour).",
        "Pulse (heart rate).",
        "Grimace (reflex response).",
        "Activity (muscle tone).",
        "Respiration (breathing effort)."
      ], figure: {
        caption: "The five components of the Apgar score (each scored 0–2).",
        svg: '<svg viewBox="0 0 480 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apgar score components."><rect x="20" y="15" width="440" height="145" rx="12" fill="#FDF2F8" stroke="#831843" stroke-width="2.5"/><text x="240" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">APGAR SCORE (each 0–2, total /10)</text><text x="45" y="66" font-family="sans-serif" font-size="11" fill="#831843">A — Appearance (colour)</text><text x="45" y="88" font-family="sans-serif" font-size="11" fill="#831843">P — Pulse (heart rate)</text><text x="45" y="110" font-family="sans-serif" font-size="11" fill="#831843">G — Grimace (reflex)</text><text x="45" y="132" font-family="sans-serif" font-size="11" fill="#831843">A — Activity (muscle tone)</text><text x="45" y="154" font-family="sans-serif" font-size="11" fill="#831843">R — Respiration (breathing)</text><text x="300" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#BE185D">Assess at 1 &amp; 5 minutes</text></svg>'
      } },
      { h: "Immediate care of the newborn", list: [
        "Dry the baby quickly and remove wet towels to prevent heat loss.",
        "Assess breathing, tone and colour; note the time of birth.",
        "Keep the baby warm — skin-to-skin with the mother, covered, in a warm room.",
        "Support early breastfeeding within the first hour.",
        "Apply cord care and identify the baby correctly.",
        "Give routine measures per protocol (e.g. vitamin K, eye care) with consent."
      ] },
      { h: "Thermal protection", p: "Newborns lose heat quickly and cannot shiver effectively; hypothermia is dangerous and can lead to hypoglycaemia and distress. The 'warm chain' includes a warm birth room, immediate drying, skin-to-skin contact, delayed bathing, and keeping the baby covered. Maintaining warmth is a key midwifery task." },
      { h: "Recognising the baby who needs help", p: "Most babies breathe within the first minute. A baby who is not breathing, is floppy, or has a slow heart rate needs immediate help: stimulate, keep warm, clear the airway if needed and start assisted ventilation (bag-and-mask) per resuscitation guidance, calling for skilled help. Early, effective action saves lives." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Describe the changes that allow the newborn to breathe at birth.",
      "Explain the circulatory changes that occur as the baby is born.",
      "Describe the Apgar score and how it is used.",
      "Outline the immediate care of a healthy newborn.",
      "Explain the importance of thermal protection and how the midwife maintains it."
    ],
    assessment: [
      { type: "mcq", q: "The substance that keeps the newborn's alveoli open is:", options: ["Meconium", "Surfactant", "Colostrum", "Bilirubin"], answer: 1, rationale: "Surfactant reduces surface tension and keeps alveoli open after the first breaths." },
      { type: "mcq", q: "The Apgar score is normally assessed at:", options: ["Birth only", "1 and 5 minutes", "10 and 20 minutes", "1 hour and 2 hours"], answer: 1, rationale: "Apgar is assessed at 1 and 5 minutes, repeated if needed." },
      { type: "mcq", q: "Which is NOT a component of the Apgar score?", options: ["Colour (appearance)", "Heart rate (pulse)", "Birth weight", "Respiration"], answer: 2, rationale: "Birth weight is not part of Apgar; the five signs are colour, pulse, grimace, activity, respiration." },
      { type: "mcq", q: "After the lungs expand at birth, the foramen ovale closes because:", options: ["Right atrial pressure rises", "Left atrial pressure exceeds right atrial pressure", "The cord is cut", "The baby cries"], answer: 1, rationale: "As lung blood flow rises, left atrial pressure exceeds right, closing the foramen ovale." },
      { type: "mcq", q: "The FIRST immediate step to prevent heat loss in the newborn is to:", options: ["Bathe the baby", "Dry the baby and remove wet towels", "Weigh the baby", "Give a feed"], answer: 1, rationale: "Drying immediately and removing wet linen prevents rapid heat loss." },
      { type: "mcq", q: "Skin-to-skin contact after birth helps to:", options: ["Cool the baby", "Keep the baby warm and promote bonding and feeding", "Increase infection", "Delay breathing"], answer: 1, rationale: "Skin-to-skin keeps the baby warm and supports bonding and breastfeeding." },
      { type: "mcq", q: "Newborn hypothermia is dangerous partly because it can lead to:", options: ["Hypertension", "Hypoglycaemia and distress", "Weight gain", "Faster breathing that is beneficial"], answer: 1, rationale: "Cold stress can cause hypoglycaemia and respiratory distress in the newborn." },
      { type: "mcq", q: "A total Apgar score is out of:", options: ["5", "8", "10", "12"], answer: 2, rationale: "Five signs each scored 0–2 give a maximum of 10." },
      { type: "mcq", q: "A baby who is not breathing and is floppy at birth needs:", options: ["Only observation", "Immediate stimulation, warmth and assisted ventilation as needed", "A bath first", "To be left alone"], answer: 1, rationale: "A non-breathing, floppy baby needs prompt resuscitation with skilled help." },
      { type: "mcq", q: "Early breastfeeding is best supported:", options: ["After 24 hours", "Within the first hour after birth", "Only after bathing", "After the baby sleeps"], answer: 1, rationale: "Early breastfeeding within the first hour is recommended for the healthy newborn." }
      , { type: "fill", q: "The score assessing the newborn's condition at 1 and 5 minutes is the ____ score.", accept: ["apgar"], rationale: "The Apgar score assesses newborn condition after birth." }
      , { type: "fill", q: "The substance that keeps the newborn's alveoli from collapsing is ____.", accept: ["surfactant"], rationale: "Surfactant keeps the alveoli open after birth." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "asm-16-puerperium",
    unit: "Unit 5 · Newborn, Puerperium & Breastfeeding",
    title: "The Normal Puerperium and Postnatal Care",
    readMinutes: 18,
    summary: "Definition and physiology of the puerperium, involution of the uterus and lochia, other bodily changes, postnatal assessment, danger signs and the midwife's postnatal care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is the puerperium?", p: "The puerperium is the period after childbirth, usually about six weeks, during which the reproductive organs return to their non-pregnant state and the woman adjusts physically and emotionally to motherhood. Good postnatal care protects the health of both mother and baby during this vulnerable time." },
      { h: "Involution of the uterus", p: "INVOLUTION is the process by which the uterus returns to its pre-pregnant size and position. Immediately after birth the fundus is around the level of the umbilicus; it then descends by roughly a finger-breadth (about 1 cm) each day and is usually no longer palpable abdominally by about 10–12 days. Afterpains (contractions) aid involution, especially during breastfeeding as oxytocin is released." },
      { h: "Lochia", list: [
        "Lochia rubra — red, for the first few days (blood and debris).",
        "Lochia serosa — pinkish-brown, over the following days.",
        "Lochia alba — pale/whitish, in the later days until it ceases.",
        "Lochia should reduce and change colour over time; offensive smell, heavy loss or a return to bright red bleeding is abnormal and needs assessment."
      ] },
      { h: "Other physiological changes", list: [
        "Breasts — colostrum then milk 'comes in'; lactation is established.",
        "Cardiovascular and fluid changes — extra pregnancy fluid is lost (diuresis and sweating).",
        "The bladder and bowel return to normal function; constipation is common early.",
        "The perineum heals; any sutures are assessed.",
        "Menstruation returns later (delayed by breastfeeding)."
      ] },
      { h: "Postnatal assessment of the mother", list: [
        "General wellbeing, temperature, pulse and blood pressure.",
        "Fundus — height, firmness and position (involution).",
        "Lochia — amount, colour and smell.",
        "Perineum and any wound healing.",
        "Breasts and feeding.",
        "Bladder and bowel function; legs for signs of thrombosis.",
        "Emotional and psychological wellbeing."
      ], figure: {
        caption: "Involution: descent of the uterine fundus after birth.",
        svg: '<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Descent of the fundus during involution."><line x1="40" y1="30" x2="420" y2="30" stroke="#831843" stroke-width="1.5" stroke-dasharray="4 3"/><text x="40" y="22" font-family="sans-serif" font-size="9" fill="#831843">umbilicus (day 0)</text><circle cx="70" cy="30" r="5" fill="#BE185D"/><circle cx="150" cy="55" r="5" fill="#BE185D"/><circle cx="230" cy="80" r="5" fill="#BE185D"/><circle cx="310" cy="105" r="5" fill="#BE185D"/><circle cx="390" cy="125" r="5" fill="#BE185D"/><line x1="70" y1="30" x2="390" y2="125" stroke="#BE185D" stroke-width="2"/><text x="70" y="145" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">day 0</text><text x="230" y="98" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">~1 cm/day</text><text x="390" y="145" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">~day 10-12</text><text x="230" y="18" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Uterine involution</text></svg>'
      } },
      { h: "Danger signs in the puerperium", list: [
        "Fever or offensive lochia (possible infection/sepsis).",
        "Heavy or renewed bright-red bleeding (secondary postpartum haemorrhage).",
        "Severe headache, visual changes or high blood pressure.",
        "Calf pain, redness or swelling (possible thrombosis).",
        "Breast pain with fever (mastitis).",
        "Low mood, tearfulness or thoughts of self-harm (mental health concerns)."
      ] },
      { h: "The midwife's postnatal care", p: "The midwife makes postnatal visits, assesses mother and baby, supports breastfeeding and infant care, teaches self-care and danger signs, promotes pelvic-floor exercises, discusses family planning, and provides emotional support. She recognises deviations and refers promptly — for example for sepsis, haemorrhage, thrombosis or postnatal depression." },
      { h: "Emotional wellbeing", p: "Mild 'baby blues' around days 3–5 are common and usually settle. Persistent low mood, loss of interest, or thoughts of harm suggest postnatal depression and need assessment and referral. The midwife listens, normalises feelings where appropriate, and ensures serious concerns are acted upon." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Define the puerperium and describe involution of the uterus.",
      "Describe the types of lochia and how they should change.",
      "List the components of a postnatal assessment of the mother.",
      "Identify the danger signs in the puerperium that require referral.",
      "Discuss the midwife's role in supporting the mother's emotional wellbeing after birth."
    ],
    assessment: [
      { type: "mcq", q: "The puerperium usually lasts about:", options: ["1 week", "6 weeks", "6 months", "1 year"], answer: 1, rationale: "The puerperium is about six weeks, until the reproductive organs return to normal." },
      { type: "mcq", q: "Involution is the process by which the uterus:", options: ["Enlarges", "Returns to its pre-pregnant size", "Produces milk", "Ruptures"], answer: 1, rationale: "Involution is the return of the uterus to its non-pregnant state." },
      { type: "mcq", q: "The fundus descends after birth by approximately:", options: ["5 cm per day", "1 cm (a finger-breadth) per day", "No descent", "10 cm per day"], answer: 1, rationale: "The fundus descends about a finger-breadth (~1 cm) each day." },
      { type: "mcq", q: "The first, red vaginal loss after birth is called:", options: ["Lochia alba", "Lochia serosa", "Lochia rubra", "Colostrum"], answer: 2, rationale: "Lochia rubra is the red loss of the first few days." },
      { type: "mcq", q: "Afterpains that aid involution are stronger during breastfeeding because of release of:", options: ["Insulin", "Oxytocin", "Progesterone", "Cortisol"], answer: 1, rationale: "Suckling releases oxytocin, causing uterine contractions (afterpains) that aid involution." },
      { type: "mcq", q: "Offensive-smelling lochia with fever suggests:", options: ["Normal recovery", "Possible infection/sepsis needing assessment", "Good involution", "Successful lactation"], answer: 1, rationale: "Offensive lochia with fever suggests infection and requires assessment/referral." },
      { type: "mcq", q: "Calf pain, redness and swelling in the puerperium may indicate:", options: ["Mastitis", "Thrombosis (blood clot)", "Normal healing", "Constipation"], answer: 1, rationale: "These signs suggest venous thrombosis, a puerperal danger sign." },
      { type: "mcq", q: "Mild 'baby blues' typically:", options: ["Occur around days 3–5 and usually settle", "Always become depression", "Never occur", "Last for a year"], answer: 0, rationale: "Baby blues around days 3–5 are common and usually resolve; persistent low mood needs review." },
      { type: "mcq", q: "Persistent low mood with thoughts of self-harm after birth should be:", options: ["Ignored", "Assessed and referred", "Treated with rest only", "Considered normal"], answer: 1, rationale: "Such symptoms suggest postnatal depression and need assessment and referral." },
      { type: "mcq", q: "During postnatal care the midwife should assess the fundus for:", options: ["Colour only", "Height, firmness and position (involution)", "Weight of the baby", "Blood group"], answer: 1, rationale: "Fundal height, firmness and position indicate progress of involution." }
      , { type: "fill", q: "The return of the uterus to its pre-pregnant size is called ____.", accept: ["involution"], rationale: "Involution is the shrinking of the uterus after birth." }
      , { type: "fill", q: "The vaginal loss after birth is called ____.", accept: ["lochia"], rationale: "Lochia is the vaginal discharge of the puerperium." }
    ]
  },

  /* ============ TOPIC 17 ============ */
  {
    id: "asm-17-breastfeeding-support",
    unit: "Unit 5 · Newborn, Puerperium & Breastfeeding",
    title: "Breastfeeding Support and Common Problems",
    readMinutes: 18,
    summary: "Benefits of breastfeeding, positioning and attachment, signs of effective feeding, common problems and their management, and the midwife's role in supporting exclusive breastfeeding.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Benefits of breastfeeding", list: [
        "For the baby — ideal nutrition, protection against infection (antibodies), easy digestion, and links to better long-term health.",
        "For the mother — helps the uterus contract, aids bonding, may reduce some cancers, and is convenient and economical.",
        "Exclusive breastfeeding for the first six months is recommended, with continued breastfeeding alongside other foods thereafter."
      ] },
      { h: "Positioning and attachment", p: "Good ATTACHMENT (latch) is the key to successful breastfeeding. In good attachment the baby takes a large mouthful of breast, with the chin touching the breast, mouth wide open, lower lip turned out, and more areola visible above than below the mouth. The baby, not just the nipple, should be brought to the breast. Poor attachment causes sore nipples and poor milk transfer.", figure: {
        caption: "Signs of good attachment at the breast.",
        svg: '<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Signs of good attachment."><rect x="20" y="15" width="440" height="130" rx="12" fill="#FDF2F8" stroke="#831843" stroke-width="2.5"/><text x="240" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">SIGNS OF GOOD ATTACHMENT</text><text x="45" y="66" font-family="sans-serif" font-size="11" fill="#831843">• Mouth wide open</text><text x="45" y="88" font-family="sans-serif" font-size="11" fill="#831843">• Chin touching the breast</text><text x="45" y="110" font-family="sans-serif" font-size="11" fill="#831843">• Lower lip turned outward</text><text x="45" y="132" font-family="sans-serif" font-size="11" fill="#831843">• More areola seen above than below</text><text x="300" y="88" font-family="sans-serif" font-size="11" fill="#BE185D">Bring baby to breast,</text><text x="300" y="108" font-family="sans-serif" font-size="11" fill="#BE185D">not breast to baby</text></svg>'
      } },
      { h: "Signs of effective feeding", list: [
        "The baby suckles with slow, deep sucks and audible swallowing.",
        "Feeding is comfortable and pain-free for the mother.",
        "The baby feeds frequently (on demand) and comes off content.",
        "Adequate wet and dirty nappies and appropriate weight gain over time."
      ] },
      { h: "Common problem — sore or cracked nipples", p: "Usually caused by POOR ATTACHMENT rather than length of feeding. Management: correct the attachment, avoid taking the baby off abruptly (break the suction first), keep nipples dry, and reassure the mother. Correcting the latch is the main remedy." },
      { h: "Common problem — engorgement", p: "Painful, over-full, tight breasts, often around the time milk 'comes in' or when feeds are missed. Management: feed frequently and effectively with good attachment, ensure milk is removed (hand expression if needed), warmth before and cool compresses after feeds for comfort. Untreated engorgement can hinder feeding and lead to blocked ducts or mastitis." },
      { h: "Other common problems", list: [
        "Blocked duct — a tender lump; continue feeding, gentle massage and vary position.",
        "Mastitis — a red, painful, hot area with flu-like symptoms and fever; continue breastfeeding, ensure milk removal, rest and fluids, and seek treatment (antibiotics may be needed) — refer as required.",
        "Perceived low supply — often reassurance and improving frequency/attachment; check the baby's output and weight.",
        "Sleepy baby or difficulty latching — skin-to-skin, responsive feeding, expressing and seeking support."
      ] },
      { h: "Protecting breastfeeding", p: "Avoid unnecessary supplements, teats and dummies, which reduce suckling and undermine supply. The WHO Code restricts inappropriate marketing of breast-milk substitutes. Support skin-to-skin contact, rooming-in and demand feeding to establish breastfeeding." },
      { h: "The midwife's role", p: "The midwife helps the mother position and attach the baby, observes a full feed, gives practical and emotional support, teaches how to hand express, addresses problems early, and builds the mother's confidence. She refers persistent problems (e.g. severe mastitis, faltering weight) appropriately." }
    ],
    references: REF_ASM,
    examQuestions: [
      "State the benefits of breastfeeding for the mother and baby.",
      "Describe the signs of good attachment at the breast.",
      "List the signs of effective breastfeeding.",
      "Describe the causes and management of sore nipples and engorgement.",
      "Explain the midwife's role in supporting exclusive breastfeeding."
    ],
    assessment: [
      { type: "mcq", q: "Exclusive breastfeeding is recommended for the first:", options: ["6 weeks", "3 months", "6 months", "12 months"], answer: 2, rationale: "Exclusive breastfeeding is recommended for the first six months." },
      { type: "mcq", q: "The key to successful breastfeeding is good:", options: ["Attachment (latch)", "Formula supply", "Feeding schedule", "Use of a dummy"], answer: 0, rationale: "Correct attachment is the key to effective, comfortable breastfeeding." },
      { type: "mcq", q: "A sign of GOOD attachment is:", options: ["Mouth barely open on the nipple", "Chin touching breast, mouth wide, lower lip turned out", "Sharp nipple pain throughout", "More areola visible below than above"], answer: 1, rationale: "Good attachment shows a wide mouth, chin to breast and everted lower lip." },
      { type: "mcq", q: "The commonest cause of sore, cracked nipples is:", options: ["Feeding too often", "Poor attachment", "Drinking too much water", "Using cool compresses"], answer: 1, rationale: "Sore/cracked nipples are usually due to poor attachment." },
      { type: "mcq", q: "Breast engorgement is best managed by:", options: ["Stopping feeding", "Frequent effective feeding and milk removal", "Binding the breasts tightly", "Giving formula only"], answer: 1, rationale: "Frequent effective feeding and milk removal relieve engorgement." },
      { type: "mcq", q: "A red, hot, painful area of the breast with fever suggests:", options: ["Normal let-down", "Mastitis", "Good attachment", "Engorgement resolved"], answer: 1, rationale: "These features suggest mastitis, which needs milk removal and possibly antibiotics." },
      { type: "mcq", q: "In mastitis the mother should usually:", options: ["Stop breastfeeding completely", "Continue breastfeeding and ensure milk removal", "Bind the breast", "Restrict fluids"], answer: 1, rationale: "Continuing to breastfeed and removing milk is advised, with treatment as needed." },
      { type: "mcq", q: "A sign of effective breastfeeding is:", options: ["Painful feeding", "Slow deep sucks with audible swallowing", "No wet nappies", "Baby always unsettled"], answer: 1, rationale: "Slow, deep sucks with swallowing indicate effective milk transfer." },
      { type: "mcq", q: "Which practice PROTECTS breastfeeding?", options: ["Routine dummies and teats", "Avoiding unnecessary supplements and supporting demand feeding", "Scheduled restricted feeds", "Early formula top-ups"], answer: 1, rationale: "Avoiding supplements/teats and supporting demand feeding protect supply." },
      { type: "mcq", q: "To correct sore nipples the midwife should first:", options: ["Advise stopping feeds", "Correct the baby's attachment", "Give painkillers only", "Recommend formula"], answer: 1, rationale: "Correcting attachment addresses the underlying cause of sore nipples." }
      , { type: "fill", q: "The way the baby takes the breast into its mouth is called the ____ or attachment.", accept: ["latch", "attachment"], rationale: "Latch/attachment is how the baby takes the breast." }
      , { type: "fill", q: "Painful, over-full breasts when milk comes in or feeds are missed is called ____.", accept: ["engorgement"], rationale: "Engorgement is painful over-fullness of the breasts." }
    ]
  },

  /* ============ TOPIC 18 ============ */
  {
    id: "asm-18-promoting-normality",
    unit: "Unit 5 · Newborn, Puerperium & Breastfeeding",
    title: "Promoting Normality and the Midwife's Role",
    readMinutes: 16,
    summary: "The concept of normal birth, why promoting normality matters, evidence-based practices that support physiological birth, avoiding unnecessary intervention, and safe recognition of deviations.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is 'normal birth'?", p: "Normal birth is spontaneous in onset and progress, at term, with the baby born vaginally in the vertex position, without significant intervention, and with a healthy mother and baby. Promoting normality means supporting this physiological process while staying alert for any need to act." },
      { h: "Why promote normality?", list: [
        "Physiological birth is usually safest for healthy women and babies.",
        "Unnecessary intervention can start a 'cascade' of further interventions.",
        "It supports the woman's confidence, satisfaction and bonding.",
        "It uses resources wisely.",
        "It respects the woman's body and choices."
      ] },
      { h: "Evidence-based practices that support normality", list: [
        "Continuity of carer and continuous labour support.",
        "Freedom of movement and upright positions.",
        "Eating and drinking as desired in normal labour.",
        "Watchful waiting ('masterly inactivity') rather than routine intervention.",
        "Non-pharmacological comfort and pain relief first.",
        "Delayed cord clamping, skin-to-skin contact and early breastfeeding.",
        "A calm, private, unhurried environment."
      ], figure: {
        caption: "The intervention 'cascade': one unnecessary intervention can lead to another.",
        svg: '<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Intervention cascade diagram."><defs><marker id="asmArr18" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="15" y="50" width="120" height="45" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="1.8"/><text x="75" y="70" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">Unnecessary</text><text x="75" y="84" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">intervention</text><rect x="165" y="50" width="120" height="45" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.8"/><text x="225" y="70" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">Side-effect /</text><text x="225" y="84" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">disturbance</text><rect x="315" y="50" width="120" height="45" rx="8" fill="#F472B6" stroke="#BE185D" stroke-width="1.8"/><text x="375" y="70" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">Further</text><text x="375" y="84" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#831843">intervention</text><rect x="455" y="50" width="55" height="45" rx="8" fill="#831843"/><text x="482" y="76" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#FDF2F8">...</text><line x1="135" y1="72" x2="162" y2="72" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#asmArr18)"/><line x1="285" y1="72" x2="312" y2="72" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#asmArr18)"/><line x1="435" y1="72" x2="452" y2="72" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#asmArr18)"/></svg>'
      } },
      { h: "Avoiding unnecessary intervention", p: "Routine interventions without a clear indication (for example unnecessary continuous monitoring, restricting movement, or routine episiotomy) can disturb physiology and lead to further intervention. The midwife uses interventions only when they are genuinely needed and beneficial, explaining them to the woman." },
      { h: "Balancing normality with safety", p: "Promoting normality never means ignoring risk. The midwife continuously assesses mother and baby and is ready to act or refer if events deviate from normal. Safe promotion of normality is the art of doing enough — no more and no less — and knowing when watchful waiting must give way to action." },
      { h: "The midwife's role", list: [
        "Provide continuous, kind, one-to-one support.",
        "Protect a calm, private environment that supports physiology.",
        "Use evidence to guide practice and explain choices to the woman.",
        "Monitor wellbeing and progress, recognising deviations early.",
        "Refer appropriately and support the woman if intervention becomes necessary."
      ] }
    ],
    references: REF_ASM,
    examQuestions: [
      "Define normal birth and explain what is meant by promoting normality.",
      "Give reasons why promoting normality is important.",
      "Describe evidence-based practices that support physiological birth.",
      "Explain the 'cascade of intervention' and how it can be avoided.",
      "Discuss how the midwife balances promoting normality with maintaining safety."
    ],
    assessment: [
      { type: "mcq", q: "Normal birth is best described as:", options: ["Any hospital birth", "Spontaneous vaginal vertex birth at term with little intervention and a healthy outcome", "A planned caesarean", "An instrumental birth"], answer: 1, rationale: "Normal birth is spontaneous, vaginal, vertex, at term with minimal intervention and good outcome." },
      { type: "mcq", q: "Promoting normality means:", options: ["Supporting physiology while staying alert to the need to act", "Never assessing risk", "Always intervening", "Ignoring the woman's wishes"], answer: 0, rationale: "Promoting normality supports physiology while remaining vigilant for deviations." },
      { type: "mcq", q: "The 'cascade of intervention' means that:", options: ["Interventions always help", "Interventions have no consequences", "One unnecessary intervention can lead to further ones", "Only doctors intervene"], answer: 2, rationale: "One unnecessary intervention can trigger a chain of further interventions." },
      { type: "mcq", q: "Which practice supports normal birth?", options: ["Routine episiotomy", "Keeping the woman flat", "Restricting all fluids", "Continuous one-to-one support and freedom to move"], answer: 3, rationale: "Continuous support and mobility support physiological birth." },
      { type: "mcq", q: "'Masterly inactivity' (watchful waiting) means:", options: ["Doing nothing ever", "Observing and not intervening unnecessarily while staying alert", "Leaving the woman alone", "Refusing to refer"], answer: 1, rationale: "Watchful waiting avoids unnecessary intervention while monitoring closely." },
      { type: "mcq", q: "Which is an evidence-based practice that supports normality?", options: ["Immediate cord clamping routinely", "Delayed cord clamping and skin-to-skin contact", "Routine formula feeding", "Restricting movement"], answer: 1, rationale: "Delayed cord clamping and skin-to-skin support physiology and the newborn." },
      { type: "mcq", q: "Promoting normality benefits the woman by:", options: ["Reducing her confidence", "Increasing intervention", "Supporting confidence, satisfaction and bonding", "Delaying breastfeeding"], answer: 2, rationale: "It supports confidence, satisfaction and bonding." },
      { type: "mcq", q: "An unnecessary intervention should be:", options: ["Used routinely", "Given without explanation", "Preferred over support", "Avoided unless clearly indicated and beneficial"], answer: 3, rationale: "Interventions are used only when genuinely indicated and beneficial." },
      { type: "mcq", q: "Balancing normality with safety requires the midwife to:", options: ["Ignore deviations", "Continuously assess and be ready to act or refer", "Never intervene", "Avoid all monitoring"], answer: 1, rationale: "Safe promotion of normality means continuous assessment and readiness to act or refer." },
      { type: "mcq", q: "A calm, private, unhurried environment in labour supports:", options: ["Higher adrenaline", "The body's own oxytocin and endorphins", "Slower breastfeeding", "More intervention"], answer: 1, rationale: "Such an environment supports oxytocin and endorphins, aiding physiological birth." }
      , { type: "fill", q: "The chain of one intervention leading to another is called the ____ of intervention.", accept: ["cascade"], rationale: "The cascade of intervention describes interventions leading to further ones." }
      , { type: "fill", q: "Observing without intervening unnecessarily while staying alert is called masterly ____.", accept: ["inactivity", "inactivity (watchful waiting)"], rationale: "Masterly inactivity is watchful waiting without unnecessary intervention." }
    ]
  },

  /* ============ TOPIC 19 ============ */
  {
    id: "asm-19-documentation-continuity",
    unit: "Unit 5 · Newborn, Puerperium & Breastfeeding",
    title: "Documentation, Continuity and Partnership",
    readMinutes: 16,
    summary: "The importance of accurate record keeping, principles of good documentation, continuity of carer, working in partnership with women and the team, and communication and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why documentation matters", list: [
        "Records what care was assessed, planned, given and evaluated.",
        "Supports safe, continuous care and communication between carers.",
        "Provides a legal record and evidence of the standard of care.",
        "Helps audit, learning and quality improvement.",
        "Protects both the woman and the midwife."
      ] },
      { h: "Principles of good record keeping", list: [
        "Accurate, factual, clear and objective.",
        "Made at the time or as soon as possible after the event (contemporaneous).",
        "Dated, timed and signed, with the writer identifiable.",
        "Legible and free of unexplained abbreviations.",
        "No gaps or falsification; corrections made openly (single line, initialled).",
        "Confidential and stored securely."
      ] },
      { h: "Continuity of carer", p: "Continuity means the woman is cared for by the same midwife or a small, familiar team throughout pregnancy, birth and the postnatal period. It builds trust, improves communication and is linked with better experiences and outcomes. Good records support continuity when different carers are involved.", figure: {
        caption: "Continuity of carer across the childbearing continuum.",
        svg: '<svg viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Continuity of carer across pregnancy, birth and postnatal."><defs><marker id="asmArr19" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="35" width="130" height="45" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="85" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Antenatal</text><rect x="195" y="35" width="130" height="45" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="260" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Labour &amp; birth</text><rect x="370" y="35" width="130" height="45" rx="9" fill="#F472B6" stroke="#BE185D" stroke-width="2"/><text x="435" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Postnatal</text><line x1="150" y1="57" x2="192" y2="57" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr19)"/><line x1="325" y1="57" x2="367" y2="57" stroke="#831843" stroke-width="2.5" marker-end="url(#asmArr19)"/><text x="260" y="22" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Same midwife / small team throughout</text></svg>'
      } },
      { h: "Working in partnership with the woman", p: "Partnership means sharing information honestly, listening to the woman's views, respecting her choices, and making decisions together (informed consent). The woman is the expert on herself and her family; the midwife brings professional knowledge. Together they plan care that is right for her." },
      { h: "Working in partnership with the team", p: "Safe care also depends on partnership with the wider maternity team — obstetricians, paediatricians, and others. Clear, respectful communication, timely referral and good handover ensure the woman gets the right care at the right time, especially when events deviate from normal." },
      { h: "Communication and referral", list: [
        "Use clear, structured handover (e.g. a systematic approach: situation, background, assessment, recommendation).",
        "Refer promptly and appropriately, giving relevant information.",
        "Keep the woman informed and involved in decisions.",
        "Document what was communicated, to whom and when."
      ] },
      { h: "Professionalism and accountability", p: "The midwife is professionally accountable for her practice and records. Being accountable means being able to justify decisions, working within scope, maintaining confidentiality and continuing to learn. Good documentation, partnership and communication are central to professional, safe, woman-centred midwifery." }
    ],
    references: REF_ASM,
    examQuestions: [
      "Explain why accurate documentation is important in midwifery.",
      "List the principles of good record keeping.",
      "Define continuity of carer and describe its benefits.",
      "Explain what is meant by working in partnership with the woman and the team.",
      "Describe the key elements of safe communication and referral."
    ],
    assessment: [
      { type: "mcq", q: "A key purpose of documentation is to:", options: ["Fill time", "Provide a clear, legal record and support continuous care", "Replace the woman's consent", "Impress managers"], answer: 1, rationale: "Records provide a legal record and support safe, continuous care." },
      { type: "mcq", q: "Records should ideally be made:", options: ["Weeks later", "At the time or as soon as possible (contemporaneously)", "Only if something goes wrong", "By anyone available"], answer: 1, rationale: "Contemporaneous records are accurate and reliable." },
      { type: "mcq", q: "A correction in a record should be made by:", options: ["Erasing completely", "Using correction fluid", "A single line through the error, initialled", "Rewriting the whole page secretly"], answer: 2, rationale: "Corrections are made openly with a single line, initialled and dated." },
      { type: "mcq", q: "Continuity of carer means the woman is cared for by:", options: ["A different person each time", "The same midwife or small familiar team throughout", "Only doctors", "No named carer"], answer: 1, rationale: "Continuity means care by the same midwife or a small, familiar team." },
      { type: "mcq", q: "Working in partnership with the woman means decisions are:", options: ["Made for her", "Made together, with informed consent", "Made by the family only", "Never discussed"], answer: 1, rationale: "Partnership means shared, informed decision-making with the woman." },
      { type: "mcq", q: "Good records should be:", options: ["Vague and general", "Accurate, factual, dated, timed and signed", "Written in code", "Full of unexplained abbreviations"], answer: 1, rationale: "Records must be accurate, factual, dated, timed, signed and legible." },
      { type: "mcq", q: "A structured handover helps to:", options: ["Confuse the team", "Communicate clearly and safely", "Hide information", "Avoid referral"], answer: 1, rationale: "Structured handover supports clear, safe communication." },
      { type: "mcq", q: "Accountability in midwifery means the midwife:", options: ["Never has to explain decisions", "Can justify decisions and works within her scope", "Works beyond her competence freely", "Ignores confidentiality"], answer: 1, rationale: "Accountability means justifying decisions and practising within scope." },
      { type: "mcq", q: "Partnership with the wider team is especially important when:", options: ["Everything is normal", "Events deviate from normal and referral is needed", "The woman is asleep", "Records are complete"], answer: 1, rationale: "Team partnership and referral are vital when events deviate from normal." },
      { type: "mcq", q: "Confidentiality of records means they should be:", options: ["Shared with anyone", "Kept secure and shared only appropriately", "Left in public areas", "Discussed openly with others"], answer: 1, rationale: "Records are confidential and must be stored securely and shared only appropriately." }
      , { type: "fill", q: "Records made at the time of care are described as ____.", accept: ["contemporaneous", "contemporaneous records"], rationale: "Contemporaneous records are made at or close to the time of the event." }
      , { type: "fill", q: "Care given by the same midwife or small team throughout is called continuity of ____.", accept: ["carer", "care"], rationale: "Continuity of carer means care by the same midwife/team throughout." }
    ]
  },

  /* ============ TOPIC 20 ============ */
  {
    id: "asm-20-antenatal-education",
    unit: "Unit 5 · Newborn, Puerperium & Breastfeeding",
    title: "Antenatal Education and Common Discomforts of Pregnancy",
    readMinutes: 17,
    summary: "Purpose and principles of antenatal education, its content, teaching strategies, common minor discomforts of pregnancy and their management, and distinguishing normal discomforts from danger signs.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of antenatal education", list: [
        "Prepare the woman and her partner for pregnancy, birth and parenthood.",
        "Give information for informed choices and reduce fear.",
        "Promote health-supporting behaviours (nutrition, avoiding harm).",
        "Teach recognition of danger signs and when to seek help.",
        "Build confidence in coping with labour and caring for the baby."
      ] },
      { h: "Principles of antenatal education", list: [
        "Woman-centred and responsive to the woman's needs and questions.",
        "Accurate and evidence-based.",
        "Culturally sensitive and in language the woman understands.",
        "Interactive and practical, not just lecturing.",
        "Ongoing throughout pregnancy, not a single session."
      ] },
      { h: "Content of antenatal education", list: [
        "Healthy pregnancy — nutrition, supplements, rest, activity and avoiding harm.",
        "Danger signs and when to seek care.",
        "Preparation for labour and birth, including coping and pain relief.",
        "Birth preparedness and complication readiness (plan, transport, funds).",
        "Newborn care and breastfeeding.",
        "Postnatal self-care and family planning."
      ] },
      { h: "Teaching strategies", list: [
        "Group discussions and one-to-one talks.",
        "Demonstrations and practice (e.g. positions, breathing, attachment).",
        "Simple visual aids and printed materials.",
        "Encouraging questions and checking understanding.",
        "Involving partners and family where appropriate."
      ] },
      { h: "Common minor discomforts and their management", list: [
        "Nausea and vomiting — small frequent meals, avoid triggers; seek help if severe (persistent vomiting).",
        "Heartburn — small meals, avoid lying flat after eating.",
        "Constipation — fluids, fibre and activity.",
        "Backache — posture, gentle exercise and support.",
        "Varicose veins and leg cramps — movement, elevation and support.",
        "Frequency of urine — normal; but pain or fever suggests infection.",
        "Tiredness — rest and support."
      ], figure: {
        caption: "Distinguishing normal minor discomforts from danger signs that need referral.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Minor discomforts versus danger signs."><rect x="20" y="25" width="230" height="110" rx="10" fill="#FCE7F3" stroke="#15803D" stroke-width="2.2"/><text x="135" y="48" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Normal discomforts</text><text x="40" y="72" font-family="sans-serif" font-size="10" fill="#831843">• Mild nausea, heartburn</text><text x="40" y="92" font-family="sans-serif" font-size="10" fill="#831843">• Constipation, backache</text><text x="40" y="112" font-family="sans-serif" font-size="10" fill="#831843">• Urinary frequency, tiredness</text><rect x="270" y="25" width="230" height="110" rx="10" fill="#FDF2F8" stroke="#7C2D12" stroke-width="2.2"/><text x="385" y="48" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Danger signs — refer</text><text x="290" y="72" font-family="sans-serif" font-size="10" fill="#831843">• Bleeding, severe pain</text><text x="290" y="92" font-family="sans-serif" font-size="10" fill="#831843">• Severe headache, fits</text><text x="290" y="112" font-family="sans-serif" font-size="10" fill="#831843">• Fever, reduced movements</text></svg>'
      } },
      { h: "Normal discomfort or danger sign?", p: "A key aim of education is helping the woman tell the difference between the normal minor discomforts of pregnancy and danger signs that need urgent care — such as vaginal bleeding, severe headache or visual changes, fits, fever, severe abdominal pain, reduced fetal movements or fluid leaking from the vagina. When in doubt, she should seek help." },
      { h: "The midwife's role", p: "The midwife plans and delivers education tailored to each woman, uses clear and respectful communication, checks understanding, reassures about normal discomforts, and ensures the woman knows danger signs and how to seek help. Education empowers the woman and supports safe, positive childbearing." }
    ],
    references: REF_ASM,
    examQuestions: [
      "State the purpose of antenatal education.",
      "Describe the principles of effective antenatal education.",
      "Outline the content that should be included in antenatal education.",
      "Describe common minor discomforts of pregnancy and their management.",
      "Explain how the midwife helps women distinguish normal discomforts from danger signs."
    ],
    assessment: [
      { type: "mcq", q: "A main purpose of antenatal education is to:", options: ["Increase fear", "Prepare the woman for birth and parenthood and support informed choice", "Replace antenatal check-ups", "Sell products"], answer: 1, rationale: "Antenatal education prepares the woman and supports informed choices." },
      { type: "mcq", q: "Antenatal education should be:", options: ["A single lecture", "Ongoing, woman-centred and evidence-based", "Only for doctors", "In technical language only"], answer: 1, rationale: "Good education is ongoing, woman-centred, evidence-based and understandable." },
      { type: "mcq", q: "Which is a common minor discomfort of pregnancy?", options: ["Vaginal bleeding", "Heartburn", "Convulsions", "Severe headache with visual changes"], answer: 1, rationale: "Heartburn is a common minor discomfort; the others are danger signs." },
      { type: "mcq", q: "Constipation in pregnancy is best managed by:", options: ["Reducing fluids", "Fluids, fibre and activity", "Bed rest only", "Stopping all food"], answer: 1, rationale: "Fluids, fibre and activity relieve constipation." },
      { type: "mcq", q: "Which is a DANGER sign, not a minor discomfort?", options: ["Mild backache", "Urinary frequency", "Vaginal bleeding", "Occasional nausea"], answer: 2, rationale: "Vaginal bleeding is a danger sign requiring urgent care." },
      { type: "mcq", q: "Nausea and vomiting are often eased by:", options: ["Large heavy meals", "Small frequent meals and avoiding triggers", "Skipping all meals", "Lying flat after eating"], answer: 1, rationale: "Small frequent meals and avoiding triggers help nausea; severe vomiting needs review." },
      { type: "mcq", q: "An effective teaching strategy in antenatal education is:", options: ["Reading in complex jargon", "Interactive demonstration and checking understanding", "Talking without questions", "Ignoring the partner"], answer: 1, rationale: "Interactive, practical teaching with checking understanding is effective." },
      { type: "mcq", q: "Birth preparedness and complication readiness includes planning:", options: ["Only the baby's name", "Place of birth, transport and funds in case of emergency", "The wallpaper colour", "Nothing in advance"], answer: 1, rationale: "Birth preparedness includes plans for place of birth, transport and funds for emergencies." },
      { type: "mcq", q: "Urinary frequency in pregnancy is usually normal, but should be reviewed if there is:", options: ["No other symptom", "Pain or fever (possible infection)", "Increased appetite", "Mild tiredness"], answer: 1, rationale: "Pain or fever with urinary symptoms suggests infection and needs assessment." },
      { type: "mcq", q: "A key aim of education about symptoms is to help the woman:", options: ["Ignore all symptoms", "Distinguish normal discomforts from danger signs and know when to seek help", "Self-treat everything", "Avoid all antenatal visits"], answer: 1, rationale: "Education helps women tell normal discomforts from danger signs and seek help when needed." }
      , { type: "fill", q: "Vaginal bleeding, severe headache and fits in pregnancy are ____ signs requiring urgent care.", accept: ["danger", "warning"], rationale: "These are danger (warning) signs needing urgent care." }
      , { type: "fill", q: "Education given during pregnancy to prepare the woman for birth and parenthood is ____ education.", accept: ["antenatal", "antenatal/prenatal", "prenatal"], rationale: "Antenatal (prenatal) education prepares the woman for birth and parenthood." }
    ]
  }
];








