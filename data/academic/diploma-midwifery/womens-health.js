/* ============================================================
   Diploma in Midwifery (ICM standard) · Year 2
   DM233 Women's Health — 16 topics.
   Aligned to the BNMC Diploma in Midwifery syllabus
   (women's health across the lifespan, women's rights,
   family planning, gynaecological conditions, screening,
   safe/unsafe abortion & post-abortion care, and the
   midwife's role in women's health). Authored fresh and
   grounded in standard texts:
     • Dutta DC. DC Dutta's Textbook of Gynecology. CBS/Jaypee.
     • Jacob A. A Comprehensive Textbook of Midwifery &
       Gynaecological Nursing. Jaypee Brothers.
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_WH = [
  "Dutta DC. DC Dutta's Textbook of Gynecology. CBS Publishers / Jaypee.",
  "Jacob A. A Comprehensive Textbook of Midwifery & Gynaecological Nursing. Jaypee Brothers.",
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier."
];

window.Academic.topics["diploma-midwifery/womens-health"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "wh-01-concept",
    unit: "Unit 1 · Women's Health & Society",
    title: "Concept of Women's Health & Wellbeing",
    readMinutes: 16,
    summary: "What women's health means across the lifespan, dimensions of wellbeing, the difference between health and reproductive health, and why women's health is central to midwifery and to Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is women's health?", p: "Women's health is more than the absence of disease of the reproductive organs. Following the WHO definition of health, it is a state of complete physical, mental and social wellbeing throughout a woman's life — girlhood, adolescence, the childbearing years, and the years after menopause. It includes conditions unique to women (pregnancy, menstruation, menopause), conditions more common or more serious in women, and the social conditions that shape a woman's ability to be healthy." },
      { h: "Health across the lifespan", p: "A woman's health needs change with each stage of life. The midwife who understands the whole lifespan can give woman-centred care and anticipate needs at every stage.", list: [
        "Infancy and childhood — growth, nutrition, immunisation, protection.",
        "Adolescence — puberty, menstruation, reproductive health information, safety.",
        "Reproductive years — contraception, pregnancy, childbirth, gynaecological health.",
        "Perimenopause and menopause — symptom relief, bone and heart health.",
        "Older age — screening, chronic disease, dignity and independence."
      ] },
      { h: "Dimensions of wellbeing", list: [
        "Physical — the body is well and free of preventable disease.",
        "Mental / emotional — freedom from distress; ability to cope.",
        "Social — supportive relationships, safety and a valued role.",
        "Spiritual — meaning, values and inner peace.",
        "Reproductive and sexual — a safe, satisfying and responsible sexual and reproductive life."
      ] },
      { h: "Health, reproductive health and sexual health", p: "Reproductive health (ICPD, Cairo 1994) is a state of complete wellbeing in all matters relating to the reproductive system — including the ability to have a safe and satisfying sex life, to reproduce, and the freedom to decide if, when and how often to do so. Sexual health is the positive and respectful approach to sexuality free of coercion, discrimination and violence. Women's health is the broadest of the three and contains both." },
      { h: "Why women's health matters", list: [
        "Women's health directly affects the survival and health of children and families.",
        "A healthy mother is more likely to have a healthy pregnancy and newborn.",
        "Women are often the main carers, so their illness affects the whole household.",
        "Investing in women's health reduces maternal and newborn deaths and strengthens communities.",
        "Health is a human right — every woman is entitled to it."
      ] },
      { h: "Women's health in Bangladesh — key issues", list: [
        "Early marriage and early childbearing.",
        "High workload, poor nutrition and anaemia.",
        "Limited decision-making power over her own health.",
        "Unmet need for family planning in some groups.",
        "Maternal deaths from haemorrhage, eclampsia, obstructed labour, sepsis and unsafe abortion.",
        "Reproductive tract infections and limited screening for cervical and breast cancer."
      ] },
      { h: "The midwife's contribution", p: "The midwife is often a woman's first and closest contact with the health system. By giving respectful, woman-centred, evidence-based care and health education, and by knowing when to refer, the midwife promotes wellbeing at every stage of life — not only during pregnancy and birth." },
      { h: "Key terms", list: [
        "Wellbeing — feeling and functioning well in body and mind.",
        "Woman-centred care — care planned around the individual woman's needs, wishes and circumstances.",
        "Lifespan approach — considering health needs at every age.",
        "Reproductive health — wellbeing in all matters of the reproductive system."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Define women's health and describe its dimensions of wellbeing.",
      "Explain a lifespan approach to women's health with examples from each stage.",
      "Differentiate between health, reproductive health and sexual health.",
      "Why is women's health important for families and for Bangladesh? Give five reasons.",
      "Describe the midwife's contribution to promoting women's wellbeing across the lifespan."
    ],
    assessment: [
      { type: "mcq", q: "According to the WHO concept, women's health is best defined as:", options: ["The absence of reproductive disease", "Complete physical, mental and social wellbeing across life", "Being able to bear children", "Freedom from menstrual pain"], answer: 1, rationale: "Women's health follows the WHO definition — complete physical, mental and social wellbeing across the whole lifespan, not merely absence of disease." },
      { type: "mcq", q: "Which framework first defined reproductive health for all matters of the reproductive system?", options: ["Alma-Ata 1978", "ICPD Cairo 1994", "MDG 2000", "Beijing 1995"], answer: 1, rationale: "The 1994 International Conference on Population and Development (Cairo/ICPD) set out the reproductive health concept." },
      { type: "mcq", q: "A lifespan approach to women's health means the midwife:", options: ["Cares only during pregnancy", "Considers health needs at every stage from girlhood to old age", "Focuses only on menopause", "Treats only reproductive organs"], answer: 1, rationale: "A lifespan approach anticipates and addresses needs at every life stage." },
      { type: "mcq", q: "Which of the following is a SOCIAL dimension of wellbeing?", options: ["Freedom from infection", "Supportive relationships and a valued role", "Normal blood pressure", "Regular menstruation"], answer: 1, rationale: "The social dimension concerns relationships, safety and a valued role in the community." },
      { type: "mcq", q: "Sexual health is best described as:", options: ["Only the ability to reproduce", "A respectful approach to sexuality free of coercion and violence", "Absence of menstruation", "The use of contraception"], answer: 1, rationale: "Sexual health is a positive, respectful approach to sexuality, free of coercion, discrimination and violence." },
      { type: "mcq", q: "Why does a woman's ill health affect the whole household?", options: ["Women rarely work", "Women are often the main carers of the family", "Men cannot cook", "Children do not need mothers"], answer: 1, rationale: "Women are frequently the primary carers, so their illness affects children and the whole family." },
      { type: "mcq", q: "Which is a common women's health issue in Bangladesh?", options: ["Excess screening", "Early marriage and early childbearing", "Overuse of contraception", "Low workload"], answer: 1, rationale: "Early marriage and early childbearing remain major challenges to women's health in Bangladesh." },
      { type: "mcq", q: "Woman-centred care means care that is:", options: ["Decided only by the doctor", "Planned around the individual woman's needs and wishes", "The same for every woman", "Focused on hospital routine"], answer: 1, rationale: "Woman-centred care is planned around the individual woman's needs, wishes and circumstances." },
      { type: "mcq", q: "The narrowest of these three concepts is:", options: ["Women's health", "Reproductive health", "Sexual health", "General wellbeing"], answer: 2, rationale: "Sexual health is a specific component; reproductive health is broader and women's health broader still." },
      { type: "mcq", q: "The midwife is important in women's health mainly because she is:", options: ["The most senior doctor", "Often the woman's first and closest contact with the health system", "Only involved at delivery", "Responsible for surgery"], answer: 1, rationale: "The midwife is frequently the woman's first and most trusted point of contact, well placed to promote wellbeing." },
      { type: "fill", q: "The 1994 conference that defined reproductive health was held in ____.", accept: ["cairo", "icpd", "icpd cairo"], rationale: "The International Conference on Population and Development was held in Cairo in 1994." },
      { type: "fill", q: "Care planned around the individual woman's needs and wishes is called ____ care.", accept: ["woman-centred", "woman centred", "woman-centered", "woman centered"], rationale: "Woman-centred care places the woman at the centre of decision-making." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "wh-02-determinants",
    unit: "Unit 1 · Women's Health & Society",
    title: "Factors Impacting Women's Health",
    readMinutes: 17,
    summary: "Social, cultural, economic and gender determinants of women's health; the role and status of women in Bangladesh; and how these factors shape access to care and health outcomes.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are determinants of health?", p: "Determinants of health are the conditions in which women are born, grow, live, work and age. Most of what makes a woman healthy or unhealthy lies outside the clinic — in her income, education, family, culture and gender role. Understanding these helps the midwife see the whole woman and advocate for her." },
      { h: "Social determinants", list: [
        "Education — an educated woman marries later, uses health services more, and has healthier children.",
        "Housing, water and sanitation — affect infection and nutrition.",
        "Family and social support — protect against stress and neglect.",
        "Access to health services — distance, transport and staffing.",
        "Literacy and health information — the ability to understand and act on advice."
      ] },
      { h: "Cultural determinants", list: [
        "Beliefs about menstruation, pregnancy and childbirth.",
        "Food taboos that worsen nutrition in pregnancy.",
        "Preference for home birth or traditional birth attendants.",
        "Stigma around contraception, infertility or abortion.",
        "Practices such as early marriage and, in some communities, female genital cutting."
      ] },
      { h: "Economic determinants", list: [
        "Poverty limits food, transport, and money for care.",
        "Dependence on others for money to pay for services.",
        "Unpaid domestic and care work that is not valued.",
        "Loss of income during illness or pregnancy.",
        "Out-of-pocket costs that delay or prevent care."
      ] },
      { h: "Gender as a determinant", p: "Sex refers to biological differences; gender refers to the socially constructed roles, behaviours and expectations for women and men. Gender inequality is one of the strongest influences on women's health.", list: [
        "Limited decision-making power over her own body and health.",
        "Less access to education, income and property.",
        "Heavier workload with poorer nutrition.",
        "Exposure to violence and early marriage.",
        "Son preference affecting a girl's care and nutrition."
      ] },
      { h: "The 'three delays' model", p: "Many maternal deaths follow three delays that are rooted in these determinants: (1) delay in deciding to seek care, (2) delay in reaching a facility, and (3) delay in receiving adequate care once there. Social, economic and gender factors drive each delay." },
      { h: "Status of women in Bangladesh", list: [
        "Improvements in girls' education and contraceptive use.",
        "Growing female employment (for example in garments).",
        "Persisting early marriage, dowry and gender-based violence in places.",
        "Uneven decision-making power within households.",
        "Continued need to strengthen women's empowerment and rights."
      ] },
      { h: "Midwifery implications", p: "Because so much of health lies in these determinants, the midwife must assess the woman's circumstances, give respectful non-judgemental care, involve her in decisions, connect her with social support, and advocate for her within the family and the health system. Health education and empowerment are core midwifery tools." },
      { h: "Key terms", list: [
        "Determinant of health — a condition that influences health.",
        "Sex — biological difference between female and male.",
        "Gender — socially constructed roles and expectations.",
        "Empowerment — increasing a woman's control over decisions affecting her life.",
        "Equity — fairness so that everyone can reach their health potential."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "List and explain four social determinants of women's health.",
      "Differentiate between sex and gender, and explain how gender affects women's health.",
      "Describe the 'three delays' model and its link to the determinants of health.",
      "Discuss economic factors that limit women's access to health care.",
      "Explain the midwife's role in addressing the social determinants of a woman's health."
    ],
    assessment: [
      { type: "mcq", q: "Determinants of health are best described as:", options: ["Only genetic factors", "The conditions in which women live, work and age", "Hospital treatments", "Types of medicine"], answer: 1, rationale: "Determinants are the social, economic and environmental conditions in which people live, work and age." },
      { type: "mcq", q: "The difference between sex and gender is that gender refers to:", options: ["Biological anatomy", "Socially constructed roles and expectations", "Chromosomes", "Hormone levels"], answer: 1, rationale: "Sex is biological; gender is the socially constructed set of roles and expectations." },
      { type: "mcq", q: "Which social determinant most strongly improves women's health outcomes?", options: ["Female education", "Owning a television", "Living in a city", "Having many children"], answer: 0, rationale: "Female education consistently improves health service use and child and maternal outcomes." },
      { type: "mcq", q: "The FIRST of the 'three delays' in maternal care is delay in:", options: ["Reaching a facility", "Deciding to seek care", "Receiving care at the facility", "Discharge"], answer: 1, rationale: "The first delay is in the decision to seek care, often shaped by cost, distance and gender roles." },
      { type: "mcq", q: "A cultural determinant of women's health is:", options: ["Blood pressure", "Food taboos in pregnancy", "The price of transport", "Distance to hospital"], answer: 1, rationale: "Food taboos are cultural beliefs that can worsen nutrition — a cultural determinant." },
      { type: "mcq", q: "Which is an ECONOMIC determinant of women's health?", options: ["Poverty limiting money for care", "Belief about menstruation", "Chromosomal sex", "Immunisation status"], answer: 0, rationale: "Poverty and out-of-pocket cost are economic determinants that delay or prevent care." },
      { type: "mcq", q: "Empowerment of women means:", options: ["Giving them more chores", "Increasing their control over decisions affecting their lives", "Reducing their education", "Removing their choices"], answer: 1, rationale: "Empowerment increases a woman's control over decisions that affect her life and health." },
      { type: "mcq", q: "Health equity means:", options: ["Everyone gets exactly the same care", "Fairness so all can reach their health potential", "Only the rich get care", "Care is free for none"], answer: 1, rationale: "Equity is fairness that allows everyone the opportunity to reach their full health potential." },
      { type: "mcq", q: "Son preference can harm a girl's health by:", options: ["Improving her nutrition", "Reducing the care and food she receives", "Increasing her education", "Delaying her marriage"], answer: 1, rationale: "Son preference can lead to less food, care and schooling for girls." },
      { type: "mcq", q: "The midwife's key role in addressing determinants is to:", options: ["Ignore the woman's circumstances", "Assess circumstances, educate and advocate for the woman", "Prescribe only medicine", "Refuse care to poor women"], answer: 1, rationale: "The midwife assesses social circumstances, gives health education and advocates for the woman." },
      { type: "fill", q: "Biological difference between female and male is called ____, while socially constructed roles are called gender.", accept: ["sex"], rationale: "Sex is biological; gender is socially constructed." },
      { type: "fill", q: "The maternal-death model describing delays in deciding, reaching and receiving care is the ____ delays model.", accept: ["three", "3"], rationale: "The three delays model links determinants to maternal mortality." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "wh-03-repro-cycle",
    unit: "Unit 2 · Reproductive Health Foundations",
    title: "Female Reproductive System & the Menstrual Cycle",
    readMinutes: 18,
    summary: "A review of the female reproductive organs and the hormonal control of the ovarian and menstrual (uterine) cycles — the essential foundation for understanding women's health and fertility.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why the midwife needs this", p: "Understanding normal reproductive anatomy and the menstrual cycle is the foundation for teaching contraception, recognising menstrual disorders, supporting fertility, and explaining changes at puberty, pregnancy and menopause." },
      { h: "External genitalia (vulva)", list: [
        "Mons pubis — fatty pad over the pubic bone.",
        "Labia majora and minora — protective folds.",
        "Clitoris — sensitive erectile organ.",
        "Vestibule — contains the urethral and vaginal openings.",
        "Bartholin's glands — secrete lubricating mucus."
      ] },
      { h: "Internal organs", list: [
        "Vagina — muscular canal for menstruation, intercourse and birth.",
        "Uterus — muscular organ where the fetus develops; has the endometrium (lining), myometrium (muscle) and perimetrium.",
        "Cervix — neck of the uterus opening into the vagina.",
        "Fallopian (uterine) tubes — carry the egg and are the usual site of fertilisation.",
        "Ovaries — produce ova (eggs) and the hormones oestrogen and progesterone."
      ] },
      { h: "Hormones of the cycle", list: [
        "GnRH — from the hypothalamus; stimulates the pituitary.",
        "FSH (follicle-stimulating hormone) — grows the ovarian follicle.",
        "LH (luteinising hormone) — the LH surge triggers ovulation.",
        "Oestrogen — from the growing follicle; thickens the endometrium.",
        "Progesterone — from the corpus luteum; maintains and prepares the endometrium."
      ] },
      { h: "The ovarian cycle", p: "The ovarian cycle has three phases: the follicular phase (a follicle matures under FSH), ovulation (the mature egg is released at about day 14 of a 28-day cycle after the LH surge), and the luteal phase (the empty follicle becomes the corpus luteum, which secretes progesterone). If the egg is not fertilised the corpus luteum breaks down.", figure: {
        caption: "The menstrual cycle over about 28 days: menstruation, the follicular/proliferative phase, ovulation near day 14, and the luteal/secretory phase.",
        svg: '<svg viewBox="0 0 620 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of the 28-day menstrual cycle."><rect x="20" y="70" width="90" height="46" rx="8" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="65" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff">Menses</text><text x="65" y="107" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FCE7F3">Day 1-5</text><rect x="120" y="70" width="150" height="46" rx="8" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="195" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Follicular /</text><text x="195" y="107" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Proliferative 6-13</text><rect x="280" y="62" width="70" height="62" rx="8" fill="#831843" stroke="#831843" stroke-width="2"/><text x="315" y="88" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">Ovulation</text><text x="315" y="105" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FCE7F3">~Day 14</text><rect x="360" y="70" width="160" height="46" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="440" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Luteal /</text><text x="440" y="107" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Secretory 15-28</text><line x1="20" y1="140" x2="560" y2="140" stroke="#831843" stroke-width="2"/><text x="20" y="160" font-family="sans-serif" font-size="10" fill="#831843">Day 1</text><text x="300" y="160" font-family="sans-serif" font-size="10" fill="#831843">Day 14</text><text x="520" y="160" font-family="sans-serif" font-size="10" fill="#831843">Day 28</text><text x="310" y="185" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">LH surge triggers ovulation</text></svg>'
      } },
      { h: "The menstrual (uterine) cycle", p: "In step with the ovary, the endometrium changes: the menstrual phase (days 1-5, the lining is shed), the proliferative phase (oestrogen rebuilds the lining), and the secretory phase (progesterone from the corpus luteum makes the lining rich and ready for implantation). Without fertilisation, hormone levels fall and menstruation begins again." },
      { h: "Normal menstruation", list: [
        "Menarche (first period) usually at about 11-15 years.",
        "Cycle length about 21-35 days (average 28).",
        "Bleeding lasts about 2-7 days.",
        "Normal blood loss is small; heavy loss can cause anaemia.",
        "Ovulation occurs about 14 days before the next period."
      ] },
      { h: "Fertile window and fertilisation", p: "The egg survives about 24 hours after ovulation and sperm can live up to about 5 days, so the fertile window is the days around ovulation. Fertilisation normally occurs in the fallopian tube; the fertilised egg then implants in the endometrium. This knowledge underpins natural family planning and fertility advice." },
      { h: "Key terms", list: [
        "Menarche — the first menstrual period.",
        "Ovulation — release of a mature egg from the ovary.",
        "Corpus luteum — the structure that secretes progesterone after ovulation.",
        "Endometrium — the lining of the uterus that is shed at menstruation."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Name the internal organs of the female reproductive system and give one function of each.",
      "Describe the hormonal control of the menstrual cycle.",
      "Explain the phases of the ovarian cycle with the events of each.",
      "What is the fertile window? How is this knowledge used in family planning?",
      "Describe the features of a normal menstrual cycle."
    ],
    assessment: [
      { type: "mcq", q: "The usual site of fertilisation is the:", options: ["Uterus", "Cervix", "Fallopian tube", "Vagina"], answer: 2, rationale: "Fertilisation normally occurs in the fallopian (uterine) tube; the embryo then implants in the uterus." },
      { type: "mcq", q: "The hormone surge that directly triggers ovulation is:", options: ["FSH", "LH", "Progesterone", "Oestrogen"], answer: 1, rationale: "A mid-cycle surge of luteinising hormone (LH) triggers release of the mature egg." },
      { type: "mcq", q: "After ovulation, the empty follicle becomes the:", options: ["Corpus albicans", "Corpus luteum", "Graafian follicle", "Endometrium"], answer: 1, rationale: "The corpus luteum forms after ovulation and secretes progesterone." },
      { type: "mcq", q: "The lining of the uterus that is shed at menstruation is the:", options: ["Myometrium", "Perimetrium", "Endometrium", "Peritoneum"], answer: 2, rationale: "The endometrium is the inner lining shed during menstruation." },
      { type: "mcq", q: "In a typical 28-day cycle, ovulation usually occurs at about day:", options: ["7", "14", "21", "28"], answer: 1, rationale: "Ovulation occurs about 14 days before the next period — roughly day 14 in a 28-day cycle." },
      { type: "mcq", q: "The first menstrual period is called:", options: ["Menopause", "Menarche", "Menorrhagia", "Menstruation"], answer: 1, rationale: "Menarche is the first menstrual period, usually at 11-15 years." },
      { type: "mcq", q: "Which hormone from the corpus luteum prepares the endometrium for implantation?", options: ["Oestrogen", "FSH", "Progesterone", "LH"], answer: 2, rationale: "Progesterone from the corpus luteum makes the endometrium secretory and ready for implantation." },
      { type: "mcq", q: "The proliferative phase of the endometrium is driven mainly by:", options: ["Progesterone", "Oestrogen", "GnRH", "Prolactin"], answer: 1, rationale: "Oestrogen from the growing follicle rebuilds (proliferates) the endometrium after menstruation." },
      { type: "mcq", q: "Normal menstrual bleeding usually lasts:", options: ["About 2-7 days", "About 10-14 days", "Less than 1 hour", "About 20 days"], answer: 0, rationale: "Normal menstruation lasts approximately 2-7 days." },
      { type: "mcq", q: "Which organ produces both ova and the hormones oestrogen and progesterone?", options: ["Uterus", "Ovary", "Cervix", "Vagina"], answer: 1, rationale: "The ovaries produce ova and secrete oestrogen and progesterone." },
      { type: "fill", q: "The first menstrual period is called ____.", accept: ["menarche"], rationale: "Menarche marks the onset of menstruation." },
      { type: "fill", q: "The empty follicle after ovulation becomes the corpus ____.", accept: ["luteum"], rationale: "The corpus luteum secretes progesterone after ovulation." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "wh-04-puberty",
    unit: "Unit 2 · Reproductive Health Foundations",
    title: "Puberty & Adolescent Reproductive Health",
    readMinutes: 16,
    summary: "The physical and emotional changes of puberty, the sequence of pubertal development, common adolescent reproductive health concerns, and the midwife's role in supporting adolescents.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is puberty?", p: "Puberty is the period of transition from childhood to sexual maturity, when the reproductive organs mature and the body becomes capable of reproduction. It is driven by the reactivation of GnRH from the hypothalamus, which stimulates the pituitary and ovaries to raise oestrogen. In girls it usually begins between 8 and 13 years." },
      { h: "Sequence of changes in girls", list: [
        "Thelarche — breast development (usually the first sign).",
        "Adrenarche / pubarche — growth of pubic and axillary hair.",
        "Growth spurt — rapid increase in height.",
        "Menarche — the first menstrual period (usually about 2-3 years after breast budding).",
        "Establishment of regular ovulatory cycles over the next 1-2 years."
      ] },
      { h: "Emotional and social changes", list: [
        "Search for identity and independence.",
        "Increased interest in relationships and sexuality.",
        "Mood changes and sensitivity to peer opinion.",
        "Risk-taking behaviour and need for accurate information.",
        "Need for privacy, respect and confidentiality."
      ] },
      { h: "Adolescent reproductive health concerns", list: [
        "Menstrual problems — painful or irregular periods, anxiety about menstruation.",
        "Early marriage and early pregnancy, with higher risks.",
        "Sexually transmitted infections and lack of information.",
        "Unmet need for contraception among sexually active adolescents.",
        "Poor nutrition and anaemia, worsened by menstruation.",
        "Menstrual hygiene management and access to sanitary materials."
      ] },
      { h: "Why adolescent pregnancy carries higher risk", list: [
        "Immature pelvis increasing risk of obstructed labour.",
        "Higher risk of pre-eclampsia and eclampsia.",
        "Higher risk of preterm birth and low birthweight.",
        "Greater risk of anaemia and poor nutrition.",
        "Social consequences — interrupted education and stigma."
      ] },
      { h: "Assessment and support", p: "The midwife should provide a private, confidential and non-judgemental space, use simple respectful language, address the adolescent directly, and give accurate age-appropriate information. Assess growth, menstrual pattern, nutrition, safety, and psychosocial wellbeing, and screen sensitively for coercion or abuse." },
      { h: "Health education for adolescents", list: [
        "Normal pubertal changes and menstrual hygiene.",
        "Balanced nutrition and iron-rich foods to prevent anaemia.",
        "The risks of early marriage and early pregnancy.",
        "Prevention of sexually transmitted infections.",
        "Where and how to seek confidential help."
      ] },
      { h: "When to refer", p: "Refer if there is no breast development by age 13 or no menstruation by age 15 (possible delayed puberty), signs of very early puberty before age 8, severe menstrual problems, suspected pregnancy, or any sign of abuse or coercion." },
      { h: "Key terms", list: [
        "Thelarche — onset of breast development.",
        "Menarche — first menstrual period.",
        "Adolescence — the transition from childhood to adulthood.",
        "Adolescent-friendly services — confidential, respectful, accessible care for young people."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Describe the sequence of physical changes during puberty in girls.",
      "Explain why adolescent pregnancy carries higher risks than adult pregnancy.",
      "List five adolescent reproductive health concerns and how the midwife can help.",
      "What features make a health service 'adolescent-friendly'?",
      "State the warning signs of delayed puberty that require referral."
    ],
    assessment: [
      { type: "mcq", q: "The usual FIRST sign of puberty in girls is:", options: ["Menarche", "Breast development (thelarche)", "Growth spurt completion", "Menopause"], answer: 1, rationale: "Breast budding (thelarche) is usually the first visible sign of puberty in girls." },
      { type: "mcq", q: "Menarche typically occurs how long after breast development begins?", options: ["The same day", "About 2-3 years later", "About 10 years later", "Before breast development"], answer: 1, rationale: "The first period usually follows breast budding by about 2-3 years." },
      { type: "mcq", q: "Adolescent pregnancy carries higher risk of obstructed labour mainly because of:", options: ["A large pelvis", "An immature pelvis", "Old age", "Too much iron"], answer: 1, rationale: "The adolescent pelvis may be immature, increasing the risk of obstructed labour." },
      { type: "mcq", q: "Puberty is triggered by reactivation of:", options: ["Insulin", "GnRH from the hypothalamus", "Thyroxine", "Cortisol"], answer: 1, rationale: "Puberty begins with reactivation of hypothalamic GnRH, stimulating the pituitary-ovarian axis." },
      { type: "mcq", q: "An adolescent-friendly service is above all:", options: ["Confidential and non-judgemental", "Open only to adults", "Expensive", "Located far away"], answer: 0, rationale: "Adolescent-friendly care is confidential, respectful, accessible and non-judgemental." },
      { type: "mcq", q: "Which is a common cause of anaemia in adolescent girls?", options: ["Overeating", "Menstrual blood loss with poor nutrition", "Too much rest", "Excess iron"], answer: 1, rationale: "Menstrual loss combined with poor iron intake commonly causes anaemia in adolescents." },
      { type: "mcq", q: "No menstruation by which age suggests delayed puberty needing referral?", options: ["Age 10", "Age 12", "Age 15", "Age 18"], answer: 2, rationale: "Absence of menstruation by about age 15 (or no breast development by 13) warrants referral." },
      { type: "mcq", q: "Growth of pubic and axillary hair in puberty is called:", options: ["Thelarche", "Menarche", "Adrenarche (pubarche)", "Menopause"], answer: 2, rationale: "Adrenarche/pubarche is the appearance of pubic and axillary hair." },
      { type: "mcq", q: "When counselling an adolescent, the midwife should:", options: ["Speak only to the parent", "Address the adolescent directly and keep confidentiality", "Refuse to answer questions", "Share her secrets with the family"], answer: 1, rationale: "The adolescent should be addressed directly with respect and confidentiality." },
      { type: "mcq", q: "A key health education message for adolescent girls is:", options: ["Avoid all food", "Eat iron-rich foods to prevent anaemia", "Marry early", "Avoid sanitary care"], answer: 1, rationale: "Iron-rich nutrition helps prevent the anaemia common in menstruating adolescents." },
      { type: "fill", q: "The onset of breast development at puberty is called ____.", accept: ["thelarche"], rationale: "Thelarche is usually the first sign of puberty." },
      { type: "fill", q: "Confidential, respectful and accessible care for young people is called ____-friendly services.", accept: ["adolescent", "youth"], rationale: "Adolescent-friendly services encourage young people to seek help." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "wh-05-menstrual-disorders",
    unit: "Unit 2 · Reproductive Health Foundations",
    title: "Menstrual Disorders",
    readMinutes: 18,
    summary: "Common disorders of menstruation — dysmenorrhoea, menorrhagia, amenorrhoea and premenstrual syndrome — their causes, features, assessment, management and midwifery care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Menstrual disorders are among the most common reasons women seek gynaecological help. They cause distress, absence from work or school, and sometimes anaemia. The midwife must recognise them, give first-line advice and education, and refer when needed." },
      { h: "Classification", list: [
        "Dysmenorrhoea — painful menstruation.",
        "Menorrhagia (heavy menstrual bleeding) — excessive or prolonged flow.",
        "Amenorrhoea — absence of menstruation.",
        "Oligomenorrhoea — infrequent periods; polymenorrhoea — too frequent.",
        "Premenstrual syndrome (PMS) — physical and emotional symptoms before menstruation.",
        "Metrorrhagia / intermenstrual bleeding — bleeding between periods."
      ] },
      { h: "Dysmenorrhoea", p: "Painful cramping in the lower abdomen during menstruation. Primary dysmenorrhoea has no underlying disease and is due to prostaglandins causing uterine contractions; it often improves with age or after childbirth. Secondary dysmenorrhoea is caused by pelvic disease such as endometriosis, fibroids or pelvic inflammatory disease.", list: [
        "Features — cramping pain, sometimes with nausea, headache or backache.",
        "Management — reassurance, heat, exercise; NSAIDs such as ibuprofen; combined oral contraceptives may help.",
        "Refer — if severe, not relieved, or if secondary cause is suspected."
      ] },
      { h: "Menorrhagia (heavy menstrual bleeding)", p: "Excessive menstrual loss that interferes with the woman's quality of life or causes anaemia. Causes include fibroids, endometrial polyps, hormonal imbalance, thyroid disease, clotting disorders and use of a copper IUD.", list: [
        "Features — soaking pads, passing clots, prolonged bleeding, tiredness and pallor from anaemia.",
        "Assessment — history, examination, haemoglobin, and referral for ultrasound and investigation.",
        "Management — treat anaemia with iron; medical options include tranexamic acid, NSAIDs and hormonal treatment; refer for cause."
      ] },
      { h: "Amenorrhoea", list: [
        "Primary amenorrhoea — no menstruation by age 15-16 despite normal growth.",
        "Secondary amenorrhoea — periods stop for 3-6 months or more in a woman who previously menstruated.",
        "The commonest cause of secondary amenorrhoea in a woman of reproductive age is PREGNANCY — always exclude this first.",
        "Other causes — breastfeeding, menopause, PCOS, thyroid disease, excessive exercise or weight loss, and stress."
      ] },
      { h: "Premenstrual syndrome (PMS)", p: "A cluster of physical and emotional symptoms that appear in the days before menstruation and settle when it starts.", list: [
        "Physical — bloating, breast tenderness, headache, fatigue.",
        "Emotional — irritability, low mood, anxiety, poor concentration.",
        "Management — lifestyle advice, exercise, balanced diet, reducing salt and caffeine; severe cases may need medical treatment.",
        "Severe form (PMDD) with marked mood symptoms needs referral."
      ] },
      { h: "Midwifery care & referral", p: "Take a careful menstrual and general history, keep a menstrual diary, check for anaemia and always exclude pregnancy where relevant. Give reassurance and health education, advise simple self-care, and refer for heavy bleeding causing anaemia, severe or worsening pain, amenorrhoea of unknown cause, or bleeding after menopause or between periods (which may signal serious disease)." },
      { h: "Complications & prevention", list: [
        "Iron-deficiency anaemia from heavy loss.",
        "Missed serious disease (fibroids, cancer) if warning signs ignored.",
        "Emotional distress and lost schooling or work.",
        "Prevention — health education, good nutrition, early help-seeking and prompt treatment of anaemia."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Classify menstrual disorders and define each type.",
      "Differentiate between primary and secondary dysmenorrhoea, including causes and management.",
      "Describe the causes, assessment and management of menorrhagia.",
      "List the causes of secondary amenorrhoea and state the first cause to exclude.",
      "Describe the midwife's role and referral criteria in menstrual disorders."
    ],
    assessment: [
      { type: "mcq", q: "Painful menstruation is called:", options: ["Amenorrhoea", "Dysmenorrhoea", "Menorrhagia", "Oligomenorrhoea"], answer: 1, rationale: "Dysmenorrhoea means painful menstruation." },
      { type: "mcq", q: "The commonest cause of secondary amenorrhoea in a woman of reproductive age is:", options: ["Fibroids", "Pregnancy", "Thyroid disease", "Stress"], answer: 1, rationale: "Pregnancy must always be excluded first in secondary amenorrhoea." },
      { type: "mcq", q: "Primary dysmenorrhoea is mainly caused by:", options: ["Fibroids", "Prostaglandins causing uterine contractions", "Endometriosis", "Infection"], answer: 1, rationale: "Primary dysmenorrhoea has no underlying disease and is due to prostaglandin-driven contractions." },
      { type: "mcq", q: "Excessive or prolonged menstrual bleeding is called:", options: ["Dysmenorrhoea", "Menorrhagia", "Amenorrhoea", "PMS"], answer: 1, rationale: "Menorrhagia (heavy menstrual bleeding) is excessive or prolonged flow." },
      { type: "mcq", q: "A frequent complication of untreated menorrhagia is:", options: ["Iron-deficiency anaemia", "Hypertension", "Diabetes", "Weight gain"], answer: 0, rationale: "Chronic heavy loss commonly leads to iron-deficiency anaemia." },
      { type: "mcq", q: "Secondary dysmenorrhoea is typically caused by:", options: ["No disease at all", "Pelvic disease such as endometriosis or fibroids", "Prostaglandins only", "Pregnancy"], answer: 1, rationale: "Secondary dysmenorrhoea results from underlying pelvic pathology." },
      { type: "mcq", q: "Premenstrual syndrome symptoms typically:", options: ["Occur before menstruation and settle when it starts", "Occur only after menopause", "Occur only during pregnancy", "Last all month"], answer: 0, rationale: "PMS symptoms appear in the days before menstruation and resolve once bleeding begins." },
      { type: "mcq", q: "A first-line drug for the pain of primary dysmenorrhoea is:", options: ["An NSAID such as ibuprofen", "Insulin", "An antibiotic", "A diuretic"], answer: 0, rationale: "NSAIDs reduce prostaglandin production and relieve dysmenorrhoea." },
      { type: "mcq", q: "Which finding after menopause always requires referral?", options: ["Occasional headache", "Any vaginal bleeding", "Mild bloating", "Dry skin"], answer: 1, rationale: "Postmenopausal bleeding must be referred to exclude serious disease including cancer." },
      { type: "mcq", q: "Absence of menstruation by age 15-16 despite normal growth is called:", options: ["Secondary amenorrhoea", "Primary amenorrhoea", "Menorrhagia", "Polymenorrhoea"], answer: 1, rationale: "Primary amenorrhoea is failure to menstruate by about 15-16 years." },
      { type: "fill", q: "Painful menstruation is medically termed ____.", accept: ["dysmenorrhoea", "dysmenorrhea"], rationale: "Dysmenorrhoea is painful menstruation." },
      { type: "fill", q: "In a woman of reproductive age with secondary amenorrhoea, the first cause to exclude is ____.", accept: ["pregnancy"], rationale: "Pregnancy is the commonest cause and must be ruled out first." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "wh-06-rti-sti",
    unit: "Unit 3 · Common Gynaecological Conditions",
    title: "Reproductive Tract & Sexually Transmitted Infections",
    readMinutes: 18,
    summary: "Reproductive tract infections (RTIs) and sexually transmitted infections (STIs) — types, features, syndromic approach, complications, treatment, prevention and the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "A reproductive tract infection (RTI) is any infection of the reproductive tract. RTIs include endogenous infections (from an overgrowth of organisms normally present, e.g. candidiasis, bacterial vaginosis), iatrogenic infections (introduced during a medical procedure), and sexually transmitted infections (STIs) passed on through sexual contact. All STIs are RTIs, but not all RTIs are sexually transmitted." },
      { h: "Common STIs", list: [
        "Gonorrhoea and chlamydia — bacterial; cause discharge, pelvic pain, and infertility if untreated.",
        "Syphilis — bacterial; causes a painless ulcer, then rash; harms the fetus in pregnancy.",
        "Trichomoniasis — a protozoan causing frothy discharge and itching.",
        "Genital herpes — viral; painful blisters and ulcers.",
        "Genital warts and cervical cancer — caused by human papillomavirus (HPV).",
        "HIV — attacks the immune system; can pass to the baby (mother-to-child transmission)."
      ] },
      { h: "Endogenous RTIs", list: [
        "Bacterial vaginosis — greyish, fishy-smelling discharge.",
        "Vulvovaginal candidiasis (thrush) — thick white discharge with itching.",
        "These are not usually sexually transmitted but are common and treatable."
      ] },
      { h: "Clinical features", list: [
        "Abnormal vaginal discharge (colour, smell, amount).",
        "Itching, burning or soreness of the genitals.",
        "Lower abdominal or pelvic pain.",
        "Pain or bleeding during or after intercourse.",
        "Genital ulcers, blisters or warts.",
        "Some infections (e.g. chlamydia) are often symptomless."
      ] },
      { h: "Syndromic management", p: "Where laboratory tests are limited, WHO recommends syndromic management: treating according to the group of symptoms (syndrome) the woman presents with — for example vaginal discharge, genital ulcer, or lower abdominal pain — using standard treatment protocols. This allows prompt treatment at first contact.", figure: {
        caption: "The RTI/STI care pathway used by the midwife: assess, treat by syndrome or refer, treat the partner, educate and follow up.",
        svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RTI and STI care pathway flow."><defs><marker id="whArr6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="10" y="75" width="110" height="50" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="65" y="97" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">History &amp;</text><text x="65" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">examination</text><rect x="150" y="75" width="110" height="50" rx="8" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="205" y="97" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Identify</text><text x="205" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">syndrome</text><rect x="290" y="75" width="110" height="50" rx="8" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="345" y="97" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">Treat or</text><text x="345" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">refer</text><rect x="430" y="75" width="110" height="50" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="485" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Treat partner,</text><text x="485" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">educate, follow up</text><line x1="120" y1="100" x2="146" y2="100" stroke="#831843" stroke-width="2.5" marker-end="url(#whArr6)"/><line x1="260" y1="100" x2="286" y2="100" stroke="#831843" stroke-width="2.5" marker-end="url(#whArr6)"/><line x1="400" y1="100" x2="426" y2="100" stroke="#831843" stroke-width="2.5" marker-end="url(#whArr6)"/></svg>'
      } },
      { h: "Complications", list: [
        "Pelvic inflammatory disease (PID) from untreated gonorrhoea/chlamydia.",
        "Infertility and ectopic pregnancy from tubal damage.",
        "Chronic pelvic pain.",
        "Pregnancy complications — miscarriage, preterm birth, congenital infection (e.g. syphilis, herpes, HIV).",
        "Increased risk of HIV transmission with other STIs and cervical cancer from HPV."
      ] },
      { h: "Midwifery care & referral", p: "The midwife assesses privately and without judgement, follows the syndromic protocol or refers, ensures partner treatment (essential to prevent re-infection), promotes condom use, and in pregnancy screens for syphilis and HIV so the baby can be protected. Refer any woman with a genital ulcer, suspected PID, suspected syphilis or HIV, treatment failure, or infection in pregnancy needing specific care." },
      { h: "Prevention & health education", list: [
        "Correct and consistent condom use.",
        "Mutual faithfulness and reducing number of partners.",
        "Early help-seeking and completing treatment.",
        "Treating the partner and avoiding sex until both are cured.",
        "Antenatal screening for syphilis and HIV; HPV vaccination where available."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Differentiate between reproductive tract infections and sexually transmitted infections.",
      "Describe the syndromic approach to managing STIs and its advantages.",
      "List the complications of untreated gonorrhoea and chlamydia.",
      "Explain why partner treatment is essential in STI management.",
      "Describe the midwife's role in the prevention and care of RTIs/STIs in pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "Which statement is correct?", options: ["All RTIs are sexually transmitted", "All STIs are RTIs but not all RTIs are STIs", "STIs and RTIs are unrelated", "RTIs never affect pregnancy"], answer: 1, rationale: "STIs are a subset of RTIs; endogenous and iatrogenic RTIs are not sexually transmitted." },
      { type: "mcq", q: "Syndromic management of STIs means treating on the basis of:", options: ["Laboratory culture only", "The group of symptoms the woman presents with", "The woman's age", "Ultrasound findings"], answer: 1, rationale: "Syndromic management treats according to the recognised symptom group (syndrome) at first contact." },
      { type: "mcq", q: "Untreated gonorrhoea and chlamydia commonly lead to:", options: ["Diabetes", "Pelvic inflammatory disease and infertility", "Hypertension", "Weight gain"], answer: 1, rationale: "These infections ascend to cause PID, tubal damage, infertility and ectopic pregnancy." },
      { type: "mcq", q: "Which STI is caused by human papillomavirus (HPV)?", options: ["Syphilis", "Genital warts and cervical cancer", "Trichomoniasis", "Gonorrhoea"], answer: 1, rationale: "HPV causes genital warts and is the main cause of cervical cancer." },
      { type: "mcq", q: "A painless genital ulcer that can harm the fetus in pregnancy suggests:", options: ["Candidiasis", "Syphilis", "Bacterial vaginosis", "Thrush"], answer: 1, rationale: "Primary syphilis causes a painless ulcer and can cause congenital syphilis." },
      { type: "mcq", q: "Partner treatment in STI care is important mainly to:", options: ["Reduce cost", "Prevent re-infection of the woman", "Please the family", "Avoid paperwork"], answer: 1, rationale: "Treating the partner prevents the woman being re-infected." },
      { type: "mcq", q: "A thick white vaginal discharge with itching is typical of:", options: ["Gonorrhoea", "Vulvovaginal candidiasis (thrush)", "Syphilis", "HIV"], answer: 1, rationale: "Candidiasis produces a thick white curd-like discharge with itching." },
      { type: "mcq", q: "Which STI is often symptomless yet causes serious tubal damage?", options: ["Chlamydia", "Genital herpes", "Candidiasis", "Trichomoniasis"], answer: 0, rationale: "Chlamydia is frequently asymptomatic but can silently damage the fallopian tubes." },
      { type: "mcq", q: "In pregnancy, routine antenatal screening should include:", options: ["Only blood group", "Syphilis and HIV", "Only weight", "Only urine colour"], answer: 1, rationale: "Screening for syphilis and HIV in pregnancy protects the baby from congenital/vertical infection." },
      { type: "mcq", q: "The most effective barrier method to prevent STI transmission is:", options: ["The pill", "Condoms used correctly and consistently", "Withdrawal", "An IUD"], answer: 1, rationale: "Only condoms, used correctly and consistently, reduce STI transmission." },
      { type: "fill", q: "Treating STIs according to the group of symptoms rather than laboratory tests is called ____ management.", accept: ["syndromic"], rationale: "Syndromic management allows prompt treatment where tests are limited." },
      { type: "fill", q: "The virus responsible for genital warts and most cervical cancer is ____.", accept: ["hpv", "human papillomavirus"], rationale: "HPV causes genital warts and cervical cancer." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "wh-07-family-planning",
    unit: "Unit 3 · Common Gynaecological Conditions",
    title: "Family Planning & Contraception",
    readMinutes: 19,
    summary: "The concept and benefits of family planning, all methods of contraception with their mechanisms and suitability, contraceptive counselling and the GATHER approach, and the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept and benefits", p: "Family planning allows individuals and couples to decide freely the number and spacing of their children and the means to achieve this. It is a basic reproductive right and one of the most cost-effective ways to improve health.", list: [
        "Reduces maternal deaths by preventing unwanted and high-risk pregnancies.",
        "Improves child survival through birth spacing.",
        "Prevents unsafe abortion.",
        "Supports women's education, work and empowerment.",
        "Improves family wellbeing and economic security."
      ] },
      { h: "Classification of methods", list: [
        "Natural (fertility awareness) — calendar, cervical mucus, symptothermal, lactational amenorrhoea method (LAM).",
        "Barrier — male and female condoms, diaphragm.",
        "Hormonal — combined oral pills, progestogen-only pills, injectables, implants.",
        "Intrauterine — copper IUD, hormonal IUD (also PPIUD after birth).",
        "Long-acting reversible contraception (LARC) — implants and IUDs.",
        "Permanent (surgical) — female tubal ligation, male vasectomy.",
        "Emergency contraception — after unprotected sex."
      ] },
      { h: "How the main methods work", list: [
        "Combined pills / injectables / implants — mainly prevent ovulation and thicken cervical mucus.",
        "Progestogen-only methods — thicken mucus, thin the endometrium, may suppress ovulation.",
        "Copper IUD — prevents fertilisation and implantation; also works as emergency contraception.",
        "Condoms — a physical barrier; also protect against STIs.",
        "LAM — full breastfeeding suppresses ovulation for up to 6 months if periods have not returned.",
        "Sterilisation — permanently blocks the tubes (female) or vas deferens (male)."
      ] },
      { h: "Choosing a method", p: "The best method is the one the woman chooses freely and can use correctly and consistently. Consider her wishes, health, whether she wants more children, breastfeeding status, risk of STIs, and access to services. WHO Medical Eligibility Criteria guide safety in specific conditions (for example, combined hormonal methods are generally avoided with high blood pressure or a history of blood clots)." },
      { h: "Contraceptive counselling — the GATHER approach", list: [
        "G — Greet the client respectfully and ensure privacy.",
        "A — Ask about her needs, plans and history.",
        "T — Tell her about the available methods.",
        "H — Help her make an informed choice.",
        "E — Explain how to use the chosen method correctly.",
        "R — Return / Refer for follow-up or further care."
      ] },
      { h: "Postpartum and post-abortion family planning", p: "The midwife has key opportunities to offer contraception after birth (including PPIUD and progestogen-only methods that are safe in breastfeeding) and immediately after abortion or miscarriage, when fertility returns quickly. Counselling should begin during antenatal care and after any pregnancy loss." },
      { h: "Midwifery care & referral", p: "The midwife provides accurate information, ensures voluntary informed choice free of coercion, supplies suitable methods within her scope (condoms, pills, injectables, and counselling), teaches correct use, manages minor side effects, and refers for IUD/implant insertion, sterilisation, or when a medical condition needs specialist assessment." },
      { h: "Health education", list: [
        "No single method is best for everyone; choice is personal.",
        "Only condoms protect against STIs — dual protection may be needed.",
        "Emergency contraception is a backup, not a regular method.",
        "Side effects are usually minor and often settle; return if worried.",
        "Fertility returns after stopping most methods."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Define family planning and list its benefits for the woman and family.",
      "Classify contraceptive methods and give one example of each.",
      "Describe the mechanism of action of hormonal contraceptives and the copper IUD.",
      "Explain the GATHER approach to contraceptive counselling.",
      "Discuss the midwife's role in postpartum and post-abortion family planning."
    ],
    assessment: [
      { type: "mcq", q: "Family planning is best defined as:", options: ["Preventing all pregnancies permanently", "Deciding freely the number and spacing of children", "A method used only by men", "Treating infertility only"], answer: 1, rationale: "Family planning is the free decision on the number and spacing of children and the means to achieve it." },
      { type: "mcq", q: "Which is an example of a long-acting reversible contraceptive (LARC)?", options: ["Condom", "Contraceptive implant", "Withdrawal", "Emergency pill"], answer: 1, rationale: "Implants and IUDs are LARCs — long-acting yet reversible." },
      { type: "mcq", q: "The main way combined oral contraceptive pills prevent pregnancy is by:", options: ["Killing sperm in the uterus", "Preventing ovulation", "Blocking the tubes permanently", "Causing abortion"], answer: 1, rationale: "Combined pills chiefly suppress ovulation and thicken cervical mucus." },
      { type: "mcq", q: "Which method also protects against sexually transmitted infections?", options: ["Combined pill", "Condom", "Injectable", "IUD"], answer: 1, rationale: "Only condoms provide protection against STIs as well as pregnancy." },
      { type: "mcq", q: "In the GATHER approach, the 'H' stands for:", options: ["Hide information", "Help the client make an informed choice", "Hurry the visit", "Hospitalise the client"], answer: 1, rationale: "H = Help the client make an informed, voluntary choice." },
      { type: "mcq", q: "The lactational amenorrhoea method (LAM) can be effective only if:", options: ["The woman is fully breastfeeding, amenorrhoeic and baby under 6 months", "The baby is over one year", "Menstruation has returned", "Feeds are given rarely"], answer: 0, rationale: "LAM requires full/near-full breastfeeding, no return of menses and infant under 6 months." },
      { type: "mcq", q: "A permanent method of contraception is:", options: ["The combined pill", "Tubal ligation (female sterilisation)", "The condom", "The injectable"], answer: 1, rationale: "Tubal ligation and vasectomy are permanent (surgical) methods." },
      { type: "mcq", q: "Which method can also be used as emergency contraception after unprotected sex?", options: ["Combined pill packet", "Copper IUD", "Diaphragm", "Vasectomy"], answer: 1, rationale: "A copper IUD is highly effective emergency contraception if inserted within the recommended window." },
      { type: "mcq", q: "The most important principle of contraceptive counselling is:", options: ["Choosing for the woman", "Voluntary informed choice free of coercion", "Recommending only the cheapest method", "Persuading her to be sterilised"], answer: 1, rationale: "Contraceptive choice must be voluntary and informed, free of any coercion." },
      { type: "mcq", q: "Combined hormonal methods are generally AVOIDED in a woman with:", options: ["Normal blood pressure", "High blood pressure or history of blood clots", "A healthy diet", "Regular periods"], answer: 1, rationale: "WHO eligibility criteria caution against combined hormonal methods with hypertension or thromboembolic history." },
      { type: "fill", q: "The counselling framework Greet, Ask, Tell, Help, Explain, Return is known by the acronym ____.", accept: ["gather"], rationale: "GATHER structures good contraceptive counselling." },
      { type: "fill", q: "Implants and IUDs are together known as ____ (long-acting reversible contraception).", accept: ["larc", "larcs"], rationale: "LARC methods are long-acting yet reversible." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "wh-08-infertility",
    unit: "Unit 3 · Common Gynaecological Conditions",
    title: "Subfertility & Infertility",
    readMinutes: 17,
    summary: "The definition and types of infertility, male and female causes, investigations, management options, and the sensitive supportive role of the midwife for the couple.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Infertility (subfertility) is the failure of a couple to conceive after one year of regular unprotected sexual intercourse. Fecundity is the ability to conceive; the term subfertility is often preferred because many couples conceive later with help." },
      { h: "Types", list: [
        "Primary infertility — the woman has never conceived.",
        "Secondary infertility — the couple has conceived before but cannot now.",
        "Infertility is a shared concern of the couple — both partners must be assessed."
      ] },
      { h: "Female causes", list: [
        "Ovulatory disorders — polycystic ovary syndrome (PCOS), thyroid disease, hyperprolactinaemia.",
        "Tubal damage — blockage from pelvic inflammatory disease or previous infection.",
        "Uterine and cervical factors — fibroids, adhesions, cervical mucus problems.",
        "Endometriosis.",
        "Age — fertility declines with increasing maternal age."
      ] },
      { h: "Male causes", list: [
        "Low sperm count (oligospermia) or absent sperm (azoospermia).",
        "Poor sperm motility or abnormal shape.",
        "Blockage of the male ducts.",
        "Infection, varicocele, hormonal problems.",
        "Erectile or ejaculatory difficulties."
      ] },
      { h: "Combined and unexplained factors", p: "In many couples both partners have contributing factors, and in some no cause is found (unexplained infertility). This is why both partners are always investigated together." },
      { h: "Investigations", list: [
        "History of both partners and general examination.",
        "Semen analysis for the man (a key first test).",
        "Confirming ovulation — menstrual history, mid-luteal progesterone.",
        "Checking the tubes — hysterosalpingography or laparoscopy.",
        "Hormone tests and pelvic ultrasound as indicated.",
        "Screening for infections such as chlamydia."
      ] },
      { h: "Management", list: [
        "Advice on the fertile window, timing of intercourse, weight and lifestyle, stopping smoking and alcohol.",
        "Treating the cause — ovulation induction, treating infection, surgery for tubal or uterine problems.",
        "Assisted reproduction where available — intrauterine insemination (IUI) or in-vitro fertilisation (IVF).",
        "Counselling and support throughout; consideration of adoption if appropriate."
      ] },
      { h: "Midwifery care & referral", p: "Infertility causes deep emotional distress, stigma and marital strain, especially for women who may be unfairly blamed. The midwife listens without judgement, corrects myths (that infertility is always the woman's 'fault'), gives basic advice on the fertile window and healthy living, and refers the couple together for specialist investigation. Confidentiality and emotional support are central." },
      { h: "Prevention & health education", list: [
        "Prompt treatment of STIs and PID to protect the tubes.",
        "Awareness that fertility declines with age.",
        "Healthy weight, stopping smoking, and safe sex.",
        "Knowing the fertile window.",
        "Seeking help together after about one year of trying (earlier if the woman is older)."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Define infertility and differentiate primary from secondary infertility.",
      "List the female and male causes of infertility.",
      "Describe the investigations used to assess an infertile couple.",
      "Outline the management options available to an infertile couple.",
      "Discuss the midwife's supportive role for a couple with infertility."
    ],
    assessment: [
      { type: "mcq", q: "Infertility is usually defined as failure to conceive after:", options: ["One month of trying", "Six months of trying", "One year of regular unprotected intercourse", "Five years of trying"], answer: 2, rationale: "The standard definition is failure to conceive after one year of regular unprotected intercourse." },
      { type: "mcq", q: "A couple who has never achieved a pregnancy has:", options: ["Secondary infertility", "Primary infertility", "Fecundity", "Subfecundity"], answer: 1, rationale: "Primary infertility means no previous conception has ever occurred." },
      { type: "mcq", q: "A key FIRST investigation for the male partner is:", options: ["Laparoscopy", "Semen analysis", "Hysterosalpingography", "Endometrial biopsy"], answer: 1, rationale: "Semen analysis is a simple, essential early test for male-factor infertility." },
      { type: "mcq", q: "A common ovulatory cause of female infertility is:", options: ["Polycystic ovary syndrome", "Appendicitis", "Migraine", "Asthma"], answer: 0, rationale: "PCOS is a leading cause of ovulatory (anovulatory) infertility." },
      { type: "mcq", q: "Tubal damage causing infertility most often results from:", options: ["Pelvic inflammatory disease", "Regular exercise", "A healthy diet", "Vitamin intake"], answer: 0, rationale: "PID and prior infection commonly scar and block the fallopian tubes." },
      { type: "mcq", q: "Which is a male factor in infertility?", options: ["Endometriosis", "Low sperm count (oligospermia)", "Fibroids", "Cervical mucus problem"], answer: 1, rationale: "Oligospermia (low sperm count) is a male-factor cause." },
      { type: "mcq", q: "Both partners are investigated together because:", options: ["It is cheaper", "Either or both may contribute to infertility", "The man is never affected", "The woman is always to blame"], answer: 1, rationale: "Infertility is a shared concern; causes may lie with either or both partners." },
      { type: "mcq", q: "An important sensitive role of the midwife in infertility is to:", options: ["Blame the woman", "Listen without judgement and correct myths", "Refuse to discuss it", "Recommend divorce"], answer: 1, rationale: "The midwife offers non-judgemental support and dispels the myth that infertility is always the woman's fault." },
      { type: "mcq", q: "IVF stands for:", options: ["Intra-vaginal fertilisation", "In-vitro fertilisation", "Internal fertility factor", "Injection for fertility"], answer: 1, rationale: "IVF is in-vitro fertilisation, an assisted reproduction technique." },
      { type: "mcq", q: "Which health education message helps prevent infertility?", options: ["Ignore STIs", "Prompt treatment of STIs and PID", "Delay all pregnancies to old age", "Avoid all doctors"], answer: 1, rationale: "Treating STIs/PID promptly protects the tubes and preserves fertility." },
      { type: "fill", q: "Infertility in a couple who has previously conceived is called ____ infertility.", accept: ["secondary"], rationale: "Secondary infertility follows a previous conception." },
      { type: "fill", q: "The key laboratory test for the male partner in infertility is ____ analysis.", accept: ["semen", "sperm"], rationale: "Semen analysis assesses count, motility and morphology." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "wh-09-gynae-conditions",
    unit: "Unit 3 · Common Gynaecological Conditions",
    title: "Common Gynaecological Conditions",
    readMinutes: 19,
    summary: "Fibroids, ovarian cysts, endometriosis, pelvic inflammatory disease and uterovaginal prolapse — their features, complications, management and the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Uterine fibroids (leiomyomas)", p: "Benign muscle tumours of the uterus, very common in women of reproductive age and often oestrogen-dependent.", list: [
        "Features — often symptomless; may cause heavy or prolonged periods, pelvic pressure, a mass, and subfertility.",
        "Complications — anaemia from heavy bleeding, pressure on bladder or bowel, and problems in pregnancy.",
        "Management — observation if small and symptomless; medical treatment for bleeding; surgery (myomectomy or hysterectomy) for large or symptomatic fibroids."
      ] },
      { h: "Ovarian cysts", p: "Fluid-filled sacs in or on the ovary.", list: [
        "Functional cysts (follicular, corpus luteum) are common and usually resolve on their own.",
        "Features — often none; may cause pelvic pain, bloating or menstrual changes.",
        "Complications — rupture, torsion (twisting, causing sudden severe pain — an emergency), and rarely malignancy.",
        "Management — many are watched with ultrasound; surgery for large, persistent, painful or suspicious cysts."
      ] },
      { h: "Endometriosis", p: "The presence of endometrial-like tissue outside the uterus (on ovaries, tubes, pelvic lining), which bleeds cyclically and causes inflammation and scarring.", list: [
        "Features — painful periods, chronic pelvic pain, pain during intercourse, and subfertility.",
        "Diagnosis — usually confirmed by laparoscopy.",
        "Management — pain relief, hormonal treatment to suppress the tissue, and surgery in some cases."
      ] },
      { h: "Pelvic inflammatory disease (PID)", p: "Infection and inflammation of the upper genital tract (uterus, tubes, ovaries), usually from ascending STIs such as gonorrhoea and chlamydia.", list: [
        "Features — lower abdominal pain, fever, abnormal discharge, pain during intercourse, and tenderness on examination.",
        "Complications — infertility, ectopic pregnancy, chronic pelvic pain and tubo-ovarian abscess.",
        "Management — prompt antibiotics (often for both partners), rest, and referral; a medical emergency if severe."
      ] },
      { h: "Uterovaginal prolapse", p: "Descent of the uterus and/or vaginal walls due to weakened pelvic floor support, often after childbirth, with age and raised abdominal pressure.", list: [
        "Types — cystocele (bladder), rectocele (rectum), and uterine descent (1st to 3rd degree / procidentia).",
        "Features — a feeling of something coming down, backache, urinary symptoms and difficulty with intercourse.",
        "Management — pelvic floor exercises for mild cases, a pessary, or surgical repair for severe cases.",
        "Prevention — good intrapartum care, avoiding prolonged bearing down, pelvic floor exercises and treating constipation and chronic cough."
      ], figure: {
        caption: "Common gynaecological conditions grouped by the organ affected — a study aid, not to scale.",
        svg: '<svg viewBox="0 0 600 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of common gynaecological conditions."><rect x="10" y="20" width="180" height="40" rx="8" fill="#831843"/><text x="100" y="45" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#ffffff">Gynae conditions</text><rect x="10" y="80" width="180" height="34" rx="6" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="100" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Uterus: fibroids</text><rect x="10" y="122" width="180" height="34" rx="6" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="100" y="144" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Ovary: cysts</text><rect x="210" y="80" width="180" height="34" rx="6" fill="#F472B6" stroke="#831843" stroke-width="1.5"/><text x="300" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Pelvis: endometriosis</text><rect x="210" y="122" width="180" height="34" rx="6" fill="#F472B6" stroke="#831843" stroke-width="1.5"/><text x="300" y="144" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Upper tract: PID</text><rect x="410" y="80" width="180" height="76" rx="6" fill="#BE185D" stroke="#831843" stroke-width="1.5"/><text x="500" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">Support: prolapse</text><text x="500" y="132" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FCE7F3">cystocele, rectocele,</text><text x="500" y="146" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FCE7F3">uterine descent</text><line x1="100" y1="60" x2="100" y2="78" stroke="#831843" stroke-width="2"/><line x1="300" y1="60" x2="300" y2="78" stroke="#831843" stroke-width="2"/><line x1="500" y1="60" x2="500" y2="78" stroke="#831843" stroke-width="2"/><line x1="100" y1="60" x2="500" y2="60" stroke="#831843" stroke-width="2"/></svg>'
      } },
      { h: "Midwifery care & referral", p: "The midwife recognises warning features (heavy bleeding, severe or sudden pelvic pain, a pelvic mass, prolapse symptoms), gives supportive care and health education, checks for and treats anaemia, and refers for diagnosis and specialist management. Sudden severe pain (possible torsion or ruptured ectopic) is an emergency needing urgent referral." },
      { h: "Prevention & health education", list: [
        "Prevent and promptly treat STIs and PID to protect fertility.",
        "Report heavy bleeding, persistent pelvic pain or a lump early.",
        "Pelvic floor exercises and good intrapartum care to prevent prolapse.",
        "Attend for follow-up and complete treatment."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Describe uterine fibroids — features, complications and management.",
      "What is endometriosis? Describe its features and management.",
      "Describe pelvic inflammatory disease, its complications and treatment.",
      "Classify uterovaginal prolapse and outline its prevention.",
      "State the warning features of gynaecological conditions that require urgent referral."
    ],
    assessment: [
      { type: "mcq", q: "Uterine fibroids are:", options: ["Malignant tumours", "Benign muscle tumours of the uterus", "Ovarian infections", "Cervical ulcers"], answer: 1, rationale: "Fibroids (leiomyomas) are common benign smooth-muscle tumours of the uterus." },
      { type: "mcq", q: "Endometriosis is the presence of endometrial-like tissue:", options: ["Only inside the uterus", "Outside the uterus", "In the lungs only", "In the stomach"], answer: 1, rationale: "Endometriosis is endometrial-like tissue located outside the uterine cavity." },
      { type: "mcq", q: "Pelvic inflammatory disease is most often caused by:", options: ["Ascending STIs such as gonorrhoea and chlamydia", "High blood pressure", "Diabetes", "Anaemia"], answer: 0, rationale: "PID usually results from ascending sexually transmitted infections." },
      { type: "mcq", q: "A serious complication of untreated PID is:", options: ["Weight gain", "Infertility and ectopic pregnancy", "Better fertility", "Hypertension"], answer: 1, rationale: "PID scars the tubes, causing infertility and ectopic pregnancy." },
      { type: "mcq", q: "Sudden severe pelvic pain from a twisted ovarian cyst is called:", options: ["Rupture", "Ovarian torsion", "Prolapse", "Menorrhagia"], answer: 1, rationale: "Ovarian torsion (twisting) causes sudden severe pain and is a surgical emergency." },
      { type: "mcq", q: "Descent of the bladder into the vaginal wall is called:", options: ["Rectocele", "Cystocele", "Enterocele", "Procidentia"], answer: 1, rationale: "A cystocele is prolapse of the bladder into the anterior vaginal wall." },
      { type: "mcq", q: "The main way to prevent uterovaginal prolapse is:", options: ["Good intrapartum care and pelvic floor exercises", "Frequent heavy lifting", "Chronic constipation", "Avoiding all exercise"], answer: 0, rationale: "Good intrapartum care and pelvic floor exercises strengthen support and prevent prolapse." },
      { type: "mcq", q: "A common complication of fibroids is:", options: ["Anaemia from heavy bleeding", "Improved vision", "Weight loss", "Better sleep"], answer: 0, rationale: "Heavy menstrual bleeding from fibroids commonly causes iron-deficiency anaemia." },
      { type: "mcq", q: "Endometriosis is usually confirmed by:", options: ["Blood pressure", "Laparoscopy", "Urine test", "Weighing the patient"], answer: 1, rationale: "Laparoscopy allows direct visualisation and confirmation of endometriosis." },
      { type: "mcq", q: "Which is a gynaecological EMERGENCY needing urgent referral?", options: ["Mild premenstrual bloating", "Sudden severe pelvic pain (possible torsion or ruptured ectopic)", "Occasional headache", "Dry skin"], answer: 1, rationale: "Sudden severe pelvic pain may indicate torsion or ruptured ectopic and needs urgent referral." },
      { type: "fill", q: "Benign muscle tumours of the uterus are called ____.", accept: ["fibroids", "leiomyomas", "leiomyoma", "myomas"], rationale: "Fibroids (leiomyomas) are benign uterine muscle tumours." },
      { type: "fill", q: "Infection of the upper genital tract, usually from ascending STIs, is called ____ (abbreviation).", accept: ["pid", "pelvic inflammatory disease"], rationale: "PID is pelvic inflammatory disease." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "wh-10-cancer-screening",
    unit: "Unit 4 · Screening, Menopause & Wellbeing",
    title: "Cervical & Breast Cancer Awareness & Screening",
    readMinutes: 18,
    summary: "Cervical and breast cancer — risk factors, warning signs, screening methods (VIA, Pap smear, HPV test, breast self-examination and clinical breast examination), and the midwife's role in awareness and early detection.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why screening matters", p: "Cervical and breast cancer are leading cancers in women. Both can be detected early — when treatment is far more effective — through screening and awareness. In low-resource settings many women present late; the midwife is well placed to raise awareness and provide simple screening." },
      { h: "Cervical cancer — causes and risk factors", list: [
        "Persistent infection with high-risk human papillomavirus (HPV) is the main cause.",
        "Early sexual activity and multiple partners.",
        "Early or many pregnancies.",
        "Smoking and a weakened immune system (e.g. HIV).",
        "Lack of screening."
      ] },
      { h: "Cervical cancer — warning signs", list: [
        "Bleeding between periods, after intercourse or after menopause.",
        "Foul-smelling or blood-stained vaginal discharge.",
        "Pelvic pain in advanced disease.",
        "Early precancer usually has NO symptoms — hence the need for screening."
      ] },
      { h: "Cervical screening methods", list: [
        "VIA (Visual Inspection with Acetic acid) — the cervix is painted with dilute acetic acid; abnormal areas turn white. Simple, low-cost, and used widely in Bangladesh.",
        "Pap smear (cervical cytology) — cells scraped from the cervix are examined for early changes.",
        "HPV DNA testing — detects the high-risk virus.",
        "'Screen and treat' — VIA-positive women may be treated immediately (e.g. cryotherapy).",
        "HPV vaccination of girls before sexual debut prevents most cervical cancer."
      ] },
      { h: "Breast cancer — risk factors and warning signs", list: [
        "Risk factors — increasing age, family history, early menarche, late menopause, no or late childbirth, and obesity.",
        "Warning signs — a painless lump in the breast or armpit, change in size or shape, skin dimpling, nipple retraction or discharge, and skin changes (peau d'orange).",
        "Most breast lumps are benign, but any new lump must be assessed."
      ] },
      { h: "Breast screening methods", list: [
        "Breast self-examination (BSE) — monthly self-checking to know what is normal and notice change.",
        "Clinical breast examination (CBE) — by a trained health worker.",
        "Mammography — X-ray screening, used mainly in older women where available.",
        "Prompt referral of any suspicious finding for triple assessment."
      ], figure: {
        caption: "Early-detection pathway for women's cancers: raise awareness, screen, and refer any positive finding promptly.",
        svg: '<svg viewBox="0 0 580 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cancer early-detection pathway."><defs><marker id="whArr10" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="60" width="120" height="50" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="75" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Awareness &amp;</text><text x="75" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">education</text><rect x="170" y="60" width="120" height="50" rx="8" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="230" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Screen: VIA,</text><text x="230" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Pap, BSE/CBE</text><rect x="325" y="60" width="120" height="50" rx="8" fill="#BE185D" stroke="#831843" stroke-width="2"/><text x="385" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">Positive?</text><text x="385" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">Refer / treat</text><rect x="480" y="60" width="90" height="50" rx="8" fill="#15803D" stroke="#0f5c2e" stroke-width="2"/><text x="525" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">Early</text><text x="525" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#ffffff">treatment</text><line x1="135" y1="85" x2="166" y2="85" stroke="#831843" stroke-width="2.5" marker-end="url(#whArr10)"/><line x1="290" y1="85" x2="321" y2="85" stroke="#831843" stroke-width="2.5" marker-end="url(#whArr10)"/><line x1="445" y1="85" x2="476" y2="85" stroke="#831843" stroke-width="2.5" marker-end="url(#whArr10)"/></svg>'
      } },
      { h: "Midwifery care & referral", p: "The midwife educates women about risk and warning signs, teaches breast self-examination, offers or arranges cervical screening (VIA/Pap), reassures anxious women, and refers promptly for any suspicious symptom or positive screen. She promotes HPV vaccination for girls and screening at the recommended ages, and offers screening during other contacts such as antenatal or family-planning visits." },
      { h: "Prevention & health education", list: [
        "HPV vaccination of girls before sexual debut.",
        "Regular cervical screening from the recommended age.",
        "Safe sexual behaviour and not smoking.",
        "Monthly breast self-examination and reporting any lump early.",
        "The key message: early detection saves lives."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "List the risk factors and warning signs of cervical cancer.",
      "Describe the methods of cervical cancer screening, including VIA.",
      "Describe the warning signs of breast cancer and the methods of breast screening.",
      "How can cervical cancer be prevented?",
      "Explain the midwife's role in cancer awareness and early detection."
    ],
    assessment: [
      { type: "mcq", q: "The main cause of cervical cancer is:", options: ["High blood pressure", "Persistent high-risk HPV infection", "Anaemia", "Diabetes"], answer: 1, rationale: "Persistent infection with high-risk HPV is the principal cause of cervical cancer." },
      { type: "mcq", q: "VIA screening for cervical cancer uses:", options: ["Iodine only", "Dilute acetic acid painted on the cervix", "A blood test", "An X-ray"], answer: 1, rationale: "Visual Inspection with Acetic acid turns abnormal cervical areas white." },
      { type: "mcq", q: "A classic warning sign of cervical cancer is:", options: ["Bleeding after intercourse or after menopause", "Weight gain", "Headache", "Dry skin"], answer: 0, rationale: "Postcoital and postmenopausal bleeding are important warning signs of cervical cancer." },
      { type: "mcq", q: "Cervical cancer can be largely PREVENTED by:", options: ["Antibiotics", "HPV vaccination of girls before sexual debut", "Iron tablets", "Bed rest"], answer: 1, rationale: "HPV vaccination before sexual activity prevents most cervical cancer." },
      { type: "mcq", q: "Breast self-examination (BSE) is best performed:", options: ["Once a year", "Monthly", "Only in old age", "Only when in pain"], answer: 1, rationale: "Monthly BSE helps a woman know her normal breasts and notice change early." },
      { type: "mcq", q: "A worrying breast sign that needs referral is:", options: ["A painless new lump", "Occasional itching of the arm", "Mild fatigue", "A common cold"], answer: 0, rationale: "Any new painless breast lump requires assessment to exclude cancer." },
      { type: "mcq", q: "The Pap smear detects cervical cancer by examining:", options: ["Blood cells", "Cells scraped from the cervix", "Urine", "Hair"], answer: 1, rationale: "Cervical cytology (Pap smear) examines cells taken from the cervix for early changes." },
      { type: "mcq", q: "Which is a risk factor for breast cancer?", options: ["Family history and increasing age", "Regular exercise", "Young age only", "Low weight only"], answer: 0, rationale: "Family history and older age are established breast cancer risk factors." },
      { type: "mcq", q: "In a 'screen and treat' approach, a VIA-positive woman may be:", options: ["Sent home untreated", "Treated immediately, e.g. with cryotherapy", "Given antibiotics only", "Told to ignore it"], answer: 1, rationale: "Screen-and-treat allows immediate treatment (e.g. cryotherapy) of VIA-positive lesions." },
      { type: "mcq", q: "The overall key message of cancer screening is:", options: ["Cancer cannot be treated", "Early detection saves lives", "Screening is harmful", "Only doctors matter"], answer: 1, rationale: "Screening and awareness detect cancer early when it is most treatable — early detection saves lives." },
      { type: "fill", q: "The low-cost cervical screening method using acetic acid is abbreviated ____.", accept: ["via", "visual inspection with acetic acid"], rationale: "VIA is Visual Inspection with Acetic acid." },
      { type: "fill", q: "The vaccine that prevents most cervical cancer targets the ____ virus.", accept: ["hpv", "human papillomavirus"], rationale: "The HPV vaccine prevents the infection that causes most cervical cancer." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "wh-11-menopause",
    unit: "Unit 4 · Screening, Menopause & Wellbeing",
    title: "Menopause & Post-Reproductive Health",
    readMinutes: 16,
    summary: "The definition and stages of menopause, hormonal changes, symptoms and long-term effects, management including lifestyle and HRT, and the midwife's role in supporting older women.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "Menopause is the permanent stopping of menstruation due to loss of ovarian activity, confirmed after 12 consecutive months without a period. It usually occurs at about 45-55 years (average around 50). The years of hormonal change around it are the perimenopause (climacteric); the years afterwards are the postmenopause." },
      { h: "Hormonal changes", p: "The ovaries gradually stop responding, so oestrogen and progesterone fall while FSH and LH rise. The fall in oestrogen is responsible for most menopausal symptoms and long-term effects." },
      { h: "Stages", list: [
        "Premenopause — normal reproductive years.",
        "Perimenopause (climacteric) — irregular cycles and symptoms begin.",
        "Menopause — the final menstrual period (confirmed after 12 months).",
        "Postmenopause — the years after menopause."
      ] },
      { h: "Symptoms", list: [
        "Vasomotor — hot flushes and night sweats.",
        "Menstrual — irregular then absent periods.",
        "Genitourinary — vaginal dryness, discomfort during intercourse, urinary symptoms.",
        "Psychological — mood changes, irritability, poor sleep, difficulty concentrating.",
        "General — tiredness, joint aches."
      ] },
      { h: "Long-term effects of oestrogen loss", list: [
        "Osteoporosis — thinning of the bones with increased fracture risk.",
        "Increased cardiovascular risk.",
        "Genitourinary atrophy.",
        "Prevention through nutrition, exercise and sometimes treatment is important."
      ] },
      { h: "Management", list: [
        "Reassurance and explanation that menopause is a natural stage, not a disease.",
        "Lifestyle — calcium- and vitamin-D-rich diet, weight-bearing exercise, stopping smoking, limiting alcohol.",
        "Symptom relief — vaginal moisturisers/lubricants; layered clothing for flushes.",
        "Hormone replacement therapy (HRT) may relieve symptoms in suitable women; it has benefits and risks and needs individual medical assessment.",
        "Continued screening — cervical and breast screening, and blood-pressure and bone health checks."
      ] },
      { h: "Midwifery / health-worker role & referral", p: "Although menopause is outside pregnancy care, the midwife often supports women across the lifespan. She gives accurate information, dispels myths, promotes healthy living and continued screening, and provides emotional support. She refers women with heavy or irregular bleeding, any bleeding AFTER menopause (which must always be investigated to exclude cancer), severe symptoms, or those considering HRT." },
      { h: "Health education", list: [
        "Menopause is normal, not an illness.",
        "Any bleeding after menopause must be reported at once.",
        "Diet, exercise and not smoking protect bones and the heart.",
        "Continue cervical and breast screening.",
        "Contraception is still needed for a while during perimenopause."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Define menopause and describe its stages.",
      "Describe the hormonal changes and symptoms of the menopause.",
      "Explain the long-term effects of oestrogen loss and how they can be reduced.",
      "Outline the management of a woman with menopausal symptoms.",
      "State why postmenopausal bleeding must always be investigated."
    ],
    assessment: [
      { type: "mcq", q: "Menopause is confirmed after how many months without a period?", options: ["3 months", "6 months", "12 months", "24 months"], answer: 2, rationale: "Menopause is confirmed after 12 consecutive months of amenorrhoea." },
      { type: "mcq", q: "Most menopausal symptoms are caused by a fall in:", options: ["Insulin", "Oestrogen", "FSH", "Thyroxine"], answer: 1, rationale: "Declining oestrogen from failing ovaries produces most menopausal symptoms." },
      { type: "mcq", q: "The years of hormonal change around the menopause are called the:", options: ["Postmenopause", "Perimenopause (climacteric)", "Menarche", "Premenarche"], answer: 1, rationale: "The perimenopause/climacteric is the transition around the menopause." },
      { type: "mcq", q: "A typical vasomotor symptom of menopause is:", options: ["Hot flushes and night sweats", "Increased fertility", "Weight loss", "Improved eyesight"], answer: 0, rationale: "Hot flushes and night sweats are classic vasomotor symptoms." },
      { type: "mcq", q: "A serious long-term effect of oestrogen loss is:", options: ["Osteoporosis", "Better bone density", "Lower fracture risk", "Thicker hair"], answer: 0, rationale: "Oestrogen loss accelerates bone thinning, causing osteoporosis and fracture risk." },
      { type: "mcq", q: "At the menopause, which hormones RISE?", options: ["Oestrogen and progesterone", "FSH and LH", "Insulin and glucagon", "None"], answer: 1, rationale: "As ovarian hormones fall, pituitary FSH and LH rise." },
      { type: "mcq", q: "Which finding after menopause ALWAYS needs investigation?", options: ["Hot flushes", "Any vaginal bleeding", "Joint aches", "Dry skin"], answer: 1, rationale: "Postmenopausal bleeding must always be investigated to exclude endometrial cancer." },
      { type: "mcq", q: "A helpful lifestyle measure for menopausal women is:", options: ["Smoking more", "Calcium-rich diet and weight-bearing exercise", "Avoiding all movement", "Skipping meals"], answer: 1, rationale: "Calcium/vitamin D and weight-bearing exercise protect bone health." },
      { type: "mcq", q: "HRT (hormone replacement therapy) should be:", options: ["Given to every woman automatically", "Considered individually with medical assessment of benefits and risks", "Refused to all women", "Used as contraception"], answer: 1, rationale: "HRT has benefits and risks and requires individual medical assessment." },
      { type: "mcq", q: "During perimenopause a woman should be advised that:", options: ["She can never conceive", "Contraception is still needed for a while", "Screening should stop", "Bleeding never matters"], answer: 1, rationale: "Fertility declines gradually, so contraception is still needed during perimenopause." },
      { type: "fill", q: "Menopause is confirmed after ____ consecutive months without menstruation.", accept: ["12", "twelve"], rationale: "Twelve months of amenorrhoea confirms menopause." },
      { type: "fill", q: "The transition phase of hormonal change around menopause is called the ____.", accept: ["perimenopause", "climacteric"], rationale: "The perimenopause (climacteric) surrounds the menopause." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "wh-12-gbv",
    unit: "Unit 5 · Rights, Safety & the Midwife's Role",
    title: "Violence Against Women & Gender-Based Violence",
    readMinutes: 18,
    summary: "The concept and types of gender-based violence, its causes and health effects, the midwife's first-line response (LIVES), safe enquiry, documentation, referral and prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "Gender-based violence (GBV) is any harmful act directed at a person because of their gender. Violence against women is the most common form, defined by the UN as any act of gender-based violence that results in physical, sexual or psychological harm, including threats, coercion and deprivation of liberty, whether in public or private life. Intimate partner violence (IPV) is violence by a current or former partner." },
      { h: "Types", list: [
        "Physical — hitting, beating, burning, use of weapons.",
        "Sexual — rape, coerced sex, sexual harassment.",
        "Psychological / emotional — threats, humiliation, controlling behaviour, isolation.",
        "Economic — controlling money, preventing work or education.",
        "Harmful practices — early/forced marriage, dowry violence, so-called 'honour' crimes, and female genital cutting."
      ] },
      { h: "Causes and risk factors", list: [
        "Gender inequality and beliefs that accept male control over women.",
        "Poverty, unemployment and stress.",
        "Alcohol and substance misuse.",
        "Childhood exposure to violence.",
        "Weak legal protection and social acceptance of violence."
      ] },
      { h: "Health effects", list: [
        "Injuries, disability and death.",
        "Sexual and reproductive harm — unwanted pregnancy, STIs/HIV, unsafe abortion.",
        "In pregnancy — miscarriage, preterm birth, low birthweight, and maternal death.",
        "Mental health — depression, anxiety, post-traumatic stress and suicide.",
        "Chronic pain and long-term ill health."
      ] },
      { h: "Recognising GBV", p: "Signs may include unexplained or repeated injuries, injuries not matching the story, a controlling partner who answers for her, late or missed antenatal visits, depression, and vague physical complaints. The midwife should be alert and enquire sensitively." },
      { h: "First-line support: LIVES", p: "WHO recommends the LIVES approach as first-line support when a woman discloses violence.", list: [
        "L — Listen with empathy and without judgement.",
        "I — Inquire about needs and concerns.",
        "V — Validate: believe her and affirm that the violence is not her fault.",
        "E — Enhance safety: help her make a safety plan.",
        "S — Support: connect her with information, services and social support."
      ], figure: {
        caption: "The WHO LIVES first-line response the midwife uses when a woman discloses violence.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LIVES first-line support boxes."><rect x="10" y="70" width="100" height="55" rx="8" fill="#831843"/><text x="60" y="94" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#ffffff">L</text><text x="60" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">Listen</text><rect x="120" y="70" width="100" height="55" rx="8" fill="#BE185D"/><text x="170" y="94" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#ffffff">I</text><text x="170" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">Inquire</text><rect x="230" y="70" width="100" height="55" rx="8" fill="#F472B6"/><text x="280" y="94" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#831843">V</text><text x="280" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">Validate</text><rect x="340" y="70" width="100" height="55" rx="8" fill="#BE185D"/><text x="390" y="94" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#ffffff">E</text><text x="390" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">Enhance safety</text><rect x="450" y="70" width="100" height="55" rx="8" fill="#831843"/><text x="500" y="94" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#ffffff">S</text><text x="500" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">Support</text><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">WHO LIVES first-line support</text></svg>'
      } },
      { h: "Midwifery care, documentation & referral", p: "Enquire only in privacy and safety (never in front of the partner), keep confidentiality, do not pressure her to leave or to report — respect her decisions. Treat injuries, offer emergency contraception and STI/HIV prophylaxis after sexual assault where appropriate, document findings carefully and factually (which may be needed as evidence), and refer to medical, legal, police and social/shelter services according to her wishes and local pathways. Always assess immediate danger." },
      { h: "Prevention & health education", list: [
        "Promoting gender equality and women's empowerment.",
        "Community education that violence is never acceptable.",
        "Supporting girls' education and delaying marriage.",
        "Ensuring women know their rights and where to get help.",
        "Training health workers to recognise and respond safely."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Define gender-based violence and list its types.",
      "Describe the health effects of violence against women, including in pregnancy.",
      "Explain the WHO LIVES first-line support approach.",
      "How should a midwife safely enquire about and document suspected violence?",
      "Discuss measures to prevent gender-based violence."
    ],
    assessment: [
      { type: "mcq", q: "Gender-based violence is any harmful act directed at a person because of their:", options: ["Gender", "Age", "Height", "Job"], answer: 0, rationale: "GBV is violence directed at a person on the basis of gender." },
      { type: "mcq", q: "Violence by a current or former partner is called:", options: ["Sexual harassment", "Intimate partner violence", "Economic growth", "Peer pressure"], answer: 1, rationale: "Intimate partner violence (IPV) is abuse by a current or former partner." },
      { type: "mcq", q: "In the WHO LIVES approach, the 'V' stands for:", options: ["Verify with police", "Vaccinate", "Validate — believe her and affirm it is not her fault", "Visit later"], answer: 2, rationale: "V = Validate: believe the woman and make clear the violence is not her fault." },
      { type: "mcq", q: "Controlling a woman's money and preventing her from working is:", options: ["Physical violence", "Good budgeting", "Economic violence", "Sexual violence"], answer: 2, rationale: "Economic violence includes controlling finances and blocking work or education." },
      { type: "mcq", q: "When enquiring about violence, the midwife must ensure:", options: ["Privacy, safety and confidentiality", "The partner is present", "Other patients can hear", "The police are in the room"], answer: 0, rationale: "Enquiry must be in private, safe and confidential — never in front of the partner." },
      { type: "mcq", q: "A key principle when a woman discloses violence is to:", options: ["Force her to leave immediately", "Blame her", "Ignore her", "Respect her decisions and not pressure her"], answer: 3, rationale: "The midwife supports the woman's autonomy and does not pressure or blame her." },
      { type: "mcq", q: "After sexual assault, appropriate care may include:", options: ["Doing nothing", "Emergency contraception and STI/HIV prophylaxis where indicated", "Only rest", "Refusing treatment"], answer: 1, rationale: "Post-assault care can include emergency contraception and STI/HIV prophylaxis, plus support." },
      { type: "mcq", q: "Violence during pregnancy can lead to:", options: ["Larger babies", "Faster labour with no risk", "Miscarriage, preterm birth and low birthweight", "Better outcomes"], answer: 2, rationale: "GBV in pregnancy is linked to miscarriage, preterm birth, low birthweight and maternal death." },
      { type: "mcq", q: "Careful factual documentation of injuries is important because it:", options: ["May be needed as evidence and guides care", "Wastes time", "Should be hidden", "Is never used"], answer: 0, rationale: "Accurate documentation supports care and may serve as legal evidence." },
      { type: "mcq", q: "A root cause of gender-based violence is:", options: ["Gender equality", "Women's education", "Gender inequality and acceptance of male control", "Economic independence"], answer: 2, rationale: "Gender inequality and social acceptance of male dominance drive GBV." },
      { type: "fill", q: "The WHO first-line support approach for violence is remembered by the acronym ____.", accept: ["lives"], rationale: "LIVES = Listen, Inquire, Validate, Enhance safety, Support." },
      { type: "fill", q: "Violence by a current or former partner is abbreviated ____.", accept: ["ipv", "intimate partner violence"], rationale: "IPV is intimate partner violence." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "wh-13-fgm",
    unit: "Unit 5 · Rights, Safety & the Midwife's Role",
    title: "Female Genital Mutilation / Cutting",
    readMinutes: 15,
    summary: "The definition and types of female genital mutilation/cutting (FGM/C), its harms, the WHO classification, obstetric complications, deinfibulation, care of affected women and the midwife's role in prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Female genital mutilation/cutting (FGM/C) comprises all procedures that involve partial or total removal of the external female genitalia, or other injury to the female genital organs, for non-medical reasons. It has no health benefits and is recognised as a violation of the human rights of girls and women." },
      { h: "WHO classification (types)", list: [
        "Type I — partial or total removal of the clitoral glans (clitoridectomy).",
        "Type II — removal of the clitoral glans and the labia minora, with or without the labia majora (excision).",
        "Type III — narrowing of the vaginal opening by creating a seal (infibulation), the most severe form.",
        "Type IV — all other harmful procedures (pricking, piercing, cauterising)."
      ] },
      { h: "Why it is practised", list: [
        "Social and cultural tradition and pressure.",
        "Mistaken beliefs about cleanliness, marriageability and controlling sexuality.",
        "It is often carried out on girls before puberty.",
        "None of these are valid — FGM/C has no benefit and causes serious harm."
      ] },
      { h: "Immediate complications", list: [
        "Severe pain and shock.",
        "Haemorrhage.",
        "Infection, including tetanus and blood-borne infection from shared instruments.",
        "Injury to nearby tissues and urinary retention.",
        "Death in severe cases."
      ] },
      { h: "Long-term and obstetric complications", list: [
        "Chronic pain, scarring and recurrent infections.",
        "Difficulty passing urine and menstrual blood; cysts.",
        "Painful intercourse and sexual and psychological problems.",
        "In labour — obstruction, prolonged second stage, tearing, fistula and increased risk to mother and baby (especially with Type III).",
        "This is why deinfibulation may be needed."
      ] },
      { h: "Deinfibulation and obstetric care", p: "Deinfibulation is the surgical opening of an infibulated (Type III) scar to allow normal urination, menstruation, intercourse or childbirth. It may be done before or during pregnancy, or in the second stage of labour by a trained provider. Re-infibulation (re-stitching to close the opening again) should NEVER be performed. The midwife caring for a woman with FGM/C provides sensitive, non-judgemental care, plans birth carefully and involves an experienced team." },
      { h: "Midwifery care & referral", p: "Ask sensitively and record the type during antenatal booking, explain complications and the benefit of deinfibulation, plan for a birth attended by a skilled provider, give good perineal care, and provide emotional and psychological support. Refer for deinfibulation and to specialist services, and report according to child-protection law where a girl is at risk. Never carry out or agree to re-infibulation." },
      { h: "Prevention & health education", list: [
        "Community education that FGM/C is harmful and has no benefit.",
        "Working with families, elders and religious leaders to change attitudes.",
        "Protecting girls at risk through law and safeguarding.",
        "Empowering women and girls with knowledge of their rights.",
        "Health worker training to care for affected women and prevent the practice."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Define FGM/C and describe the WHO classification of its types.",
      "List the immediate and long-term complications of FGM/C.",
      "Describe the obstetric complications of FGM/C and the role of deinfibulation.",
      "Explain why re-infibulation should never be performed.",
      "Discuss the midwife's role in caring for affected women and preventing FGM/C."
    ],
    assessment: [
      { type: "mcq", q: "FGM/C is best defined as procedures that injure the female genitalia for:", options: ["Medical treatment", "Non-medical reasons with no health benefit", "Cancer surgery", "Childbirth"], answer: 1, rationale: "FGM/C is injury to the genitalia for non-medical reasons and has no health benefit." },
      { type: "mcq", q: "The most severe form of FGM/C, narrowing the vaginal opening, is:", options: ["Type I", "Type II", "Type III (infibulation)", "Type IV"], answer: 2, rationale: "Type III (infibulation) narrows the vaginal opening and is the most severe form." },
      { type: "mcq", q: "Surgical opening of an infibulated scar to allow birth or urination is called:", options: ["Re-infibulation", "Deinfibulation", "Episiotomy", "Circumcision"], answer: 1, rationale: "Deinfibulation opens the Type III scar; it is the correct management." },
      { type: "mcq", q: "Re-stitching to close the opening again after birth (re-infibulation) should be:", options: ["Always done", "Never performed", "Done on request only", "Done by anyone"], answer: 1, rationale: "Re-infibulation is harmful and must never be performed." },
      { type: "mcq", q: "An immediate complication of FGM/C is:", options: ["Haemorrhage and severe pain", "Improved health", "Weight gain", "Better fertility"], answer: 0, rationale: "Immediate complications include severe pain, haemorrhage, shock and infection." },
      { type: "mcq", q: "In labour, Type III FGM/C increases the risk of:", options: ["Faster easy birth", "Obstruction, tearing and fistula", "No complications", "Lower blood loss"], answer: 1, rationale: "Infibulation can cause obstruction, severe tearing, fistula and harm to mother and baby." },
      { type: "mcq", q: "Type I FGM/C involves removal of the:", options: ["Whole uterus", "Clitoral glans (clitoridectomy)", "Ovaries", "Cervix"], answer: 1, rationale: "Type I is partial or total removal of the clitoral glans." },
      { type: "mcq", q: "FGM/C is recognised internationally as:", options: ["A beneficial tradition", "A violation of the human rights of girls and women", "A medical necessity", "A form of contraception"], answer: 1, rationale: "FGM/C violates the human rights of girls and women." },
      { type: "mcq", q: "During antenatal care of a woman with FGM/C, the midwife should:", options: ["Ignore it", "Record the type and plan a skilled birth with support", "Perform re-infibulation", "Refuse to care for her"], answer: 1, rationale: "The type should be recorded and a safe, supported birth planned with a skilled team." },
      { type: "mcq", q: "A key prevention strategy for FGM/C is:", options: ["Community education and changing attitudes", "Performing it in hospitals", "Keeping it secret", "Ignoring the law"], answer: 0, rationale: "Community education, working with leaders and safeguarding help end the practice." },
      { type: "fill", q: "Surgical opening of a Type III (infibulated) scar is called ____.", accept: ["deinfibulation", "de-infibulation"], rationale: "Deinfibulation opens the infibulation scar for urination, intercourse or birth." },
      { type: "fill", q: "The most severe WHO type of FGM/C, involving narrowing the vaginal opening, is Type ____.", accept: ["iii", "3", "three"], rationale: "Type III (infibulation) is the most severe form." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "wh-14-abortion-pac",
    unit: "Unit 5 · Rights, Safety & the Midwife's Role",
    title: "Reproductive Rights, Safe & Unsafe Abortion & Post-Abortion Care",
    readMinutes: 19,
    summary: "Women's reproductive rights; safe versus unsafe abortion; menstrual regulation (MR), MVA and MRM; the complications of unsafe abortion; and the elements of post-abortion care (PAC).",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Reproductive rights", p: "Reproductive rights are human rights. They include the right to decide freely the number, spacing and timing of children; the right to information and means to do so; the right to the highest attainable standard of sexual and reproductive health; and the right to make decisions free of discrimination, coercion and violence. Respecting these rights is central to woman-centred midwifery." },
      { h: "Safe versus unsafe abortion", list: [
        "Safe abortion — carried out by a trained provider using a recommended method in a clean, appropriate setting.",
        "Unsafe abortion — carried out by an unskilled person, or in an unsafe environment, or by dangerous methods.",
        "Unsafe abortion is a major, preventable cause of maternal death and injury worldwide."
      ] },
      { h: "Menstrual Regulation (MR) in Bangladesh", p: "Menstrual Regulation is a procedure to regulate the menstrual cycle when a period is late, using vacuum aspiration or medication, offered within the permitted early period. It is an established part of reproductive health services in Bangladesh and is provided by trained midwives and other providers.", list: [
        "MVA — Manual Vacuum Aspiration: gentle suction to empty the uterus using a hand-held syringe and cannula.",
        "MRM — Menstrual Regulation with Medication: use of approved drugs to complete the process early in pregnancy.",
        "Both require correct assessment, infection prevention, pain control and follow-up."
      ] },
      { h: "Complications of unsafe abortion", list: [
        "Haemorrhage.",
        "Sepsis (infection).",
        "Injury to the uterus, cervix or bowel (perforation).",
        "Incomplete abortion with retained products.",
        "Long-term — chronic pelvic infection, infertility and death."
      ] },
      { h: "Recognising an incomplete/unsafe abortion", list: [
        "Bleeding, sometimes heavy, with clots or products of conception.",
        "Lower abdominal pain and cramping.",
        "Fever, offensive discharge and tenderness suggest infection.",
        "Signs of shock in severe blood loss.",
        "This is a medical emergency needing prompt treatment."
      ] },
      { h: "Post-abortion care (PAC)", p: "PAC is a package of care given after abortion (spontaneous or induced) to save lives and protect future health. Its recognised elements are:", list: [
        "Emergency treatment of complications (bleeding, infection, shock) and uterine evacuation, often by MVA.",
        "Counselling — emotional support and information.",
        "Post-abortion family planning — offered before she leaves, as fertility returns quickly.",
        "Links to other reproductive and health services.",
        "Community and provider partnership."
      ], figure: {
        caption: "The core elements of post-abortion care (PAC) provided by the midwifery team.",
        svg: '<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Elements of post-abortion care."><circle cx="290" cy="100" r="46" fill="#831843"/><text x="290" y="96" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#ffffff">PAC</text><text x="290" y="114" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">core elements</text><rect x="10" y="20" width="150" height="40" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="85" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Emergency treatment</text><rect x="420" y="20" width="150" height="40" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="495" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Counselling</text><rect x="10" y="140" width="150" height="40" rx="8" fill="#F472B6" stroke="#831843" stroke-width="1.5"/><text x="85" y="165" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Family planning</text><rect x="420" y="140" width="150" height="40" rx="8" fill="#F472B6" stroke="#831843" stroke-width="1.5"/><text x="495" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Links to services</text><text x="495" y="174" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">&amp; community</text><line x1="160" y1="45" x2="248" y2="80" stroke="#831843" stroke-width="1.5"/><line x1="420" y1="45" x2="332" y2="80" stroke="#831843" stroke-width="1.5"/><line x1="160" y1="160" x2="248" y2="120" stroke="#831843" stroke-width="1.5"/><line x1="420" y1="160" x2="332" y2="120" stroke="#831843" stroke-width="1.5"/></svg>'
      } },
      { h: "Midwifery care & referral", p: "The midwife provides respectful, confidential, non-judgemental care to every woman regardless of the circumstances of the abortion. She recognises and gives first-line treatment of complications (assess and manage shock and bleeding, start IV fluids, keep her warm), performs uterine evacuation by MVA where trained and permitted, prevents infection, controls pain, and provides post-abortion family planning and counselling. She refers or transfers urgently for severe haemorrhage, sepsis, suspected perforation or shock." },
      { h: "Prevention & health education", list: [
        "Preventing unwanted pregnancy through family planning is the best prevention.",
        "Timely, safe MR/MVA services reduce unsafe abortion.",
        "Post-abortion family planning prevents repeat unintended pregnancy.",
        "Community awareness of where to seek safe, confidential care.",
        "Prompt help-seeking for bleeding or fever after any abortion."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "What are reproductive rights? List their key components.",
      "Differentiate between safe and unsafe abortion and list the complications of unsafe abortion.",
      "Describe menstrual regulation, including MVA and MRM.",
      "Describe the essential elements of post-abortion care (PAC).",
      "Explain the midwife's role in the emergency management of incomplete abortion."
    ],
    assessment: [
      { type: "mcq", q: "Reproductive rights include the right to:", options: ["Be forced into pregnancy", "Decide freely the number and spacing of children", "Have no information", "Be coerced by others"], answer: 1, rationale: "A core reproductive right is to decide freely and responsibly the number, spacing and timing of children." },
      { type: "mcq", q: "Unsafe abortion is best described as one carried out:", options: ["By a trained provider in a clean setting", "By an unskilled person or in an unsafe environment", "With recommended methods", "With full follow-up"], answer: 1, rationale: "Unsafe abortion is performed by unskilled persons or in unsafe conditions." },
      { type: "mcq", q: "MVA stands for:", options: ["Multiple Vaginal Assessment", "Manual Vacuum Aspiration", "Maternal Vital Assessment", "Medical Vaginal Antibiotic"], answer: 1, rationale: "MVA is Manual Vacuum Aspiration — suction evacuation of the uterus." },
      { type: "mcq", q: "A common life-threatening complication of unsafe abortion is:", options: ["Weight gain", "Haemorrhage and sepsis", "Improved fertility", "Hypertension"], answer: 1, rationale: "Haemorrhage and sepsis are leading complications of unsafe abortion." },
      { type: "mcq", q: "Post-abortion care always includes offering:", options: ["Nothing further", "Post-abortion family planning before she leaves", "Only bed rest", "Only painkillers"], answer: 1, rationale: "Family planning is offered before discharge because fertility returns quickly." },
      { type: "mcq", q: "MRM (Menstrual Regulation with Medication) uses:", options: ["Surgery only", "Approved drugs early in pregnancy", "Antibiotics only", "Blood transfusion"], answer: 1, rationale: "MRM uses approved medication to regulate menstruation early in pregnancy." },
      { type: "mcq", q: "A woman with fever, offensive discharge and lower abdominal pain after abortion likely has:", options: ["Normal recovery", "Sepsis (infection)", "Pregnancy", "Anaemia only"], answer: 1, rationale: "Fever, offensive discharge and tenderness indicate post-abortion sepsis." },
      { type: "mcq", q: "The best way to prevent unsafe abortion is:", options: ["Preventing unwanted pregnancy with family planning", "Banning all care", "Ignoring the problem", "Delaying treatment"], answer: 0, rationale: "Preventing unintended pregnancy through family planning is the most effective prevention." },
      { type: "mcq", q: "When a woman presents with incomplete abortion and shock, the midwife should FIRST:", options: ["Send her home", "Assess and treat shock, start IV fluids and get urgent help", "Give her food", "Delay all action"], answer: 1, rationale: "Immediate management of shock with IV fluids and urgent referral is life-saving." },
      { type: "mcq", q: "Care after abortion should be provided to every woman in a manner that is:", options: ["Judgemental", "Respectful, confidential and non-judgemental", "Public", "Delayed"], answer: 1, rationale: "PAC must be respectful, confidential and non-judgemental regardless of circumstances." },
      { type: "fill", q: "Suction evacuation of the uterus using a hand-held syringe is abbreviated ____.", accept: ["mva", "manual vacuum aspiration"], rationale: "MVA is Manual Vacuum Aspiration." },
      { type: "fill", q: "The package of care after abortion that includes treatment, counselling and family planning is abbreviated ____.", accept: ["pac", "post-abortion care", "post abortion care"], rationale: "PAC is post-abortion care." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "wh-15-early-pregnancy",
    unit: "Unit 5 · Rights, Safety & the Midwife's Role",
    title: "Early Pregnancy Conditions",
    readMinutes: 18,
    summary: "Common problems of early pregnancy — hyperemesis gravidarum, miscarriage, ectopic pregnancy and molar pregnancy — their features, danger signs, management and the midwife's role in early recognition and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The midwife often meets women in early pregnancy. Recognising the conditions that threaten early pregnancy — and knowing which are emergencies — allows prompt care and referral that saves lives." },
      { h: "Hyperemesis gravidarum", p: "Severe, persistent vomiting in pregnancy (beyond normal 'morning sickness') causing dehydration, weight loss and electrolyte imbalance.", list: [
        "Features — repeated vomiting, unable to keep food or fluids down, weight loss, ketones in urine, signs of dehydration.",
        "Management — admission, IV fluids to correct dehydration, antiemetics, and monitoring; small frequent bland meals when tolerated.",
        "Refer/admit any woman who cannot keep fluids down or shows dehydration."
      ] },
      { h: "Miscarriage (spontaneous abortion)", p: "Loss of a pregnancy before viability (before 24 weeks; commonly before 20 weeks).", list: [
        "Types — threatened, inevitable, incomplete, complete, missed and septic miscarriage.",
        "Features — vaginal bleeding and lower abdominal pain in early pregnancy.",
        "Management — assessment, ultrasound; incomplete miscarriage may need MVA or medical treatment; treat blood loss and infection.",
        "The midwife gives emotional support for the grief of pregnancy loss."
      ] },
      { h: "Ectopic pregnancy", p: "Implantation of the pregnancy outside the uterine cavity, most often in the fallopian tube. It is a life-threatening emergency because the tube can rupture and cause severe internal bleeding.", list: [
        "Features — lower abdominal pain (often one-sided), scanty dark vaginal bleeding, and a history of a missed period; with rupture, severe pain, shoulder-tip pain, fainting and shock.",
        "Risk factors — previous PID, tubal surgery, previous ectopic, IUD in place.",
        "Management — URGENT referral; treat shock; surgery or medical treatment. This is a true emergency."
      ] },
      { h: "Molar pregnancy (gestational trophoblastic disease)", p: "Abnormal growth of placental tissue instead of a normal pregnancy.", list: [
        "Features — a uterus larger than expected for dates, severe vomiting, high blood pressure early, and dark 'grape-like' vaginal loss.",
        "Diagnosis — very high hCG and characteristic ultrasound ('snowstorm').",
        "Management — uterine evacuation and careful follow-up of hCG because of a small risk of persistent trophoblastic disease.",
        "Refer for specialist management."
      ] },
      { h: "Early pregnancy danger signs", p: "The midwife teaches every woman to report these at once: vaginal bleeding, severe or one-sided lower abdominal pain, fainting, severe persistent vomiting, and fever. These may signal miscarriage, ectopic pregnancy, molar pregnancy or infection.", figure: {
        caption: "Early-pregnancy danger signs the midwife teaches women to report immediately.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Early pregnancy danger signs box."><rect x="20" y="20" width="520" height="140" rx="12" fill="#FDF2F8" stroke="#BE185D" stroke-width="2.5"/><text x="280" y="48" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">Early pregnancy — report at once</text><text x="45" y="78" font-family="sans-serif" font-size="12" fill="#7C2D12">• Vaginal bleeding</text><text x="45" y="102" font-family="sans-serif" font-size="12" fill="#7C2D12">• Severe or one-sided lower abdominal pain</text><text x="45" y="126" font-family="sans-serif" font-size="12" fill="#7C2D12">• Fainting or dizziness</text><text x="320" y="78" font-family="sans-serif" font-size="12" fill="#7C2D12">• Severe persistent vomiting</text><text x="320" y="102" font-family="sans-serif" font-size="12" fill="#7C2D12">• Fever</text><text x="320" y="126" font-family="sans-serif" font-size="12" fill="#831843" font-weight="700">→ May be an emergency</text></svg>'
      } },
      { h: "Midwifery care & referral", p: "The midwife takes a careful menstrual and pregnancy history, checks vital signs for shock, gives first-line care (IV fluids and warmth if shocked), provides emotional support especially in pregnancy loss, and refers urgently. Ectopic pregnancy and heavy bleeding are emergencies; hyperemesis and molar pregnancy need admission and specialist care." },
      { h: "Prevention & health education", list: [
        "Early antenatal booking so problems are found early.",
        "Prompt treatment of STIs/PID to reduce ectopic risk.",
        "Teaching all women the early-pregnancy danger signs.",
        "Encouraging quick help-seeking for bleeding or severe pain.",
        "Emotional support and follow-up after any pregnancy loss."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Describe hyperemesis gravidarum and its management.",
      "List the types of miscarriage and outline the management of incomplete miscarriage.",
      "Why is ectopic pregnancy a medical emergency? Describe its features and management.",
      "Describe the features of a molar pregnancy.",
      "List the early-pregnancy danger signs the midwife should teach every woman."
    ],
    assessment: [
      { type: "mcq", q: "Severe persistent vomiting in pregnancy causing dehydration is called:", options: ["Morning sickness", "Hyperemesis gravidarum", "Miscarriage", "Molar pregnancy"], answer: 1, rationale: "Hyperemesis gravidarum is severe vomiting causing dehydration and weight loss." },
      { type: "mcq", q: "An ectopic pregnancy most commonly implants in the:", options: ["Uterine cavity", "Fallopian tube", "Cervix", "Vagina"], answer: 1, rationale: "Most ectopic pregnancies implant in the fallopian tube." },
      { type: "mcq", q: "Ectopic pregnancy is a medical emergency because:", options: ["It causes mild nausea", "The tube can rupture causing severe internal bleeding", "It always resolves", "It improves fertility"], answer: 1, rationale: "Tubal rupture causes life-threatening internal haemorrhage." },
      { type: "mcq", q: "Loss of a pregnancy before viability is called:", options: ["Ectopic pregnancy", "Miscarriage (spontaneous abortion)", "Molar pregnancy", "Hyperemesis"], answer: 1, rationale: "Miscarriage is spontaneous loss of pregnancy before viability." },
      { type: "mcq", q: "A molar pregnancy typically shows:", options: ["A uterus smaller than dates", "A uterus larger than dates with 'grape-like' loss", "Normal hCG", "No symptoms ever"], answer: 1, rationale: "Molar pregnancy often causes a large-for-dates uterus, very high hCG and grape-like vaginal loss." },
      { type: "mcq", q: "Shoulder-tip pain with fainting in early pregnancy suggests:", options: ["Normal pregnancy", "Ruptured ectopic pregnancy", "Hyperemesis", "Molar pregnancy"], answer: 1, rationale: "Shoulder-tip pain and collapse suggest intra-abdominal bleeding from a ruptured ectopic." },
      { type: "mcq", q: "First-line treatment for a shocked woman with bleeding in early pregnancy includes:", options: ["Sending her home", "IV fluids, keeping her warm and urgent referral", "Only oral fluids", "Waiting overnight"], answer: 1, rationale: "IV fluids, warmth and urgent referral are life-saving in hypovolaemic shock." },
      { type: "mcq", q: "A risk factor for ectopic pregnancy is:", options: ["Previous pelvic inflammatory disease", "Regular exercise", "Good nutrition", "Young age alone"], answer: 0, rationale: "Previous PID and tubal damage increase the risk of ectopic pregnancy." },
      { type: "mcq", q: "An incomplete miscarriage with retained products may be treated by:", options: ["Antibiotics only", "MVA or medical evacuation", "Bed rest only", "Doing nothing"], answer: 1, rationale: "Incomplete miscarriage often needs uterine evacuation by MVA or medication." },
      { type: "mcq", q: "Which is an early-pregnancy danger sign to report immediately?", options: ["Mild tiredness", "Vaginal bleeding or severe abdominal pain", "Occasional hunger", "Normal appetite"], answer: 1, rationale: "Bleeding and severe abdominal pain are danger signs that may indicate an emergency." },
      { type: "fill", q: "A pregnancy implanted outside the uterine cavity is called an ____ pregnancy.", accept: ["ectopic"], rationale: "Ectopic pregnancy is implantation outside the uterus." },
      { type: "fill", q: "Severe vomiting in pregnancy causing dehydration is called hyperemesis ____.", accept: ["gravidarum"], rationale: "Hyperemesis gravidarum is severe pregnancy vomiting." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "wh-16-health-promotion",
    unit: "Unit 5 · Rights, Safety & the Midwife's Role",
    title: "Health Promotion & the Midwife's Role in Women's Health",
    readMinutes: 16,
    summary: "The principles of health promotion, levels of prevention, well-woman assessment and screening, effective health education and counselling, and the midwife's role as advocate for women across the lifespan.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is health promotion?", p: "Health promotion is the process of enabling women to increase control over, and to improve, their health. It goes beyond treating disease to empowering women, building supportive environments and strengthening community action. For the midwife it means promoting wellbeing at every contact — not only during pregnancy." },
      { h: "Levels of prevention", list: [
        "Primary prevention — stopping disease before it starts (immunisation, nutrition, HPV vaccine, family planning, safe sex).",
        "Secondary prevention — early detection and prompt treatment (cervical and breast screening, antenatal screening, treating anaemia).",
        "Tertiary prevention — reducing the impact of established disease (rehabilitation, support, preventing complications)."
      ], figure: {
        caption: "The three levels of prevention with examples from women's health.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three levels of prevention."><rect x="20" y="60" width="160" height="90" rx="10" fill="#15803D"/><text x="100" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff">Primary</text><text x="100" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#ffffff">immunisation,</text><text x="100" y="126" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#ffffff">family planning</text><rect x="200" y="60" width="160" height="90" rx="10" fill="#BE185D"/><text x="280" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff">Secondary</text><text x="280" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">screening (VIA,</text><text x="280" y="126" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">BSE), early Rx</text><rect x="380" y="60" width="160" height="90" rx="10" fill="#831843"/><text x="460" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#ffffff">Tertiary</text><text x="460" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">rehabilitation,</text><text x="460" y="126" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FCE7F3">support</text><text x="280" y="36" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Levels of prevention</text></svg>'
      } },
      { h: "The well-woman check", list: [
        "History — menstrual, obstetric, contraceptive, sexual and general health.",
        "General assessment — blood pressure, weight, and nutrition (anaemia).",
        "Breast awareness and examination.",
        "Cervical screening at the recommended ages.",
        "Screening for infections and, in pregnancy, syphilis and HIV.",
        "Mental health and safety (including gentle enquiry about violence)."
      ] },
      { h: "Effective health education", list: [
        "Assess what the woman already knows and her needs.",
        "Use simple, respectful, local language and visual aids.",
        "Give small amounts of clear, accurate information.",
        "Check understanding and encourage questions.",
        "Involve the family or community where helpful.",
        "Follow up and reinforce the message."
      ] },
      { h: "Counselling skills", list: [
        "Provide privacy and confidentiality.",
        "Listen actively and show empathy.",
        "Be non-judgemental and respect the woman's choices.",
        "Give balanced, accurate information for informed decisions.",
        "Support the woman's own decision rather than deciding for her."
      ] },
      { h: "The midwife's role in women's health", list: [
        "Care provider — safe, competent, evidence-based care across the lifespan.",
        "Health educator — promoting wellbeing and prevention.",
        "Counsellor — supporting informed choice.",
        "Advocate — speaking up for women's rights and needs.",
        "Referral link — recognising limits of her scope and referring appropriately.",
        "Team member — working within a multidisciplinary team.",
        "Role model and change agent in the community."
      ] },
      { h: "Working in partnership and knowing when to refer", p: "Woman-centred midwifery is a partnership between the woman and the midwife. The competent midwife knows the boundaries of her scope of practice, communicates clearly, makes sound decisions, and refers or transfers promptly and safely to the multidisciplinary team when a condition is beyond her scope — always keeping the woman informed and involved." },
      { h: "Key terms", list: [
        "Health promotion — enabling women to improve their health.",
        "Prevention — primary, secondary and tertiary actions to avoid or limit disease.",
        "Advocacy — acting and speaking to support a woman's rights and needs.",
        "Scope of practice — the range of care a midwife is trained and authorised to give."
      ] }
    ],
    references: REF_WH,
    examQuestions: [
      "Define health promotion and describe the three levels of prevention with women's-health examples.",
      "Describe the components of a well-woman check.",
      "List the principles of effective health education for women.",
      "Describe the counselling skills required by a midwife.",
      "Discuss the roles of the midwife in promoting women's health across the lifespan."
    ],
    assessment: [
      { type: "mcq", q: "Health promotion is best described as:", options: ["Only treating disease", "Enabling women to increase control over and improve their health", "Giving medicines only", "Performing surgery"], answer: 1, rationale: "Health promotion enables women to gain more control over, and improve, their health." },
      { type: "mcq", q: "Immunisation and family planning are examples of:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "No prevention"], answer: 0, rationale: "Primary prevention stops disease before it starts (e.g. immunisation, family planning)." },
      { type: "mcq", q: "Cervical and breast screening are examples of:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Rehabilitation"], answer: 1, rationale: "Screening for early detection is secondary prevention." },
      { type: "mcq", q: "Reducing complications and rehabilitating a woman with established disease is:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "No prevention"], answer: 2, rationale: "Tertiary prevention limits the impact of established disease." },
      { type: "mcq", q: "A key principle of effective health education is to:", options: ["Use complicated technical words", "Use simple respectful language and check understanding", "Give all information at once", "Ignore what she already knows"], answer: 1, rationale: "Simple language, small amounts of information and checking understanding make education effective." },
      { type: "mcq", q: "In counselling, the midwife should:", options: ["Decide for the woman", "Support the woman's own informed decision", "Judge her choices", "Share her secrets"], answer: 1, rationale: "Counselling supports the woman's own informed, voluntary decision without judgement." },
      { type: "mcq", q: "Acting and speaking to support a woman's rights and needs is called:", options: ["Advocacy", "Diagnosis", "Prescribing", "Referral"], answer: 0, rationale: "Advocacy is speaking and acting for the woman's rights and needs." },
      { type: "mcq", q: "The range of care a midwife is trained and authorised to give is her:", options: ["Salary", "Scope of practice", "Roster", "Uniform"], answer: 1, rationale: "Scope of practice defines the care a midwife is competent and authorised to provide." },
      { type: "mcq", q: "A competent midwife refers a woman when:", options: ["The condition is beyond her scope of practice", "She is busy", "The woman asks a question", "It is late"], answer: 0, rationale: "Prompt, safe referral is made when a condition is beyond the midwife's scope." },
      { type: "mcq", q: "A well-woman check should include:", options: ["Only weight", "History, blood pressure, breast awareness, screening and safety", "Only a chat", "Only medicine"], answer: 1, rationale: "A well-woman check is comprehensive: history, examination, screening and psychosocial assessment." },
      { type: "fill", q: "Immunisation and family planning are examples of ____ prevention.", accept: ["primary"], rationale: "Primary prevention stops disease before it starts." },
      { type: "fill", q: "Acting and speaking to support a woman's rights and needs is called ____.", accept: ["advocacy"], rationale: "Advocacy supports the woman's rights and needs." }
    ]
  }
];
