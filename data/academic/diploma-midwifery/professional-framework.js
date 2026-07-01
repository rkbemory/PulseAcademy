/* ============================================================
   Diploma in Midwifery (ICM standard) · DM124 Professional
   Framework & Communication in Midwifery — 14 topics.
   Aligned to the BNMC Diploma in Midwifery syllabus
   (history & frameworks, ethics & law, models of care,
   communication, advocacy & reflective practice).
   Grounded in standard references:
     • International Confederation of Midwives (ICM). Essential
       Competencies for Midwifery Practice & Global Standards.
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
     • Raynor MD, Marshall JE. Myles' Survival Guide /
       professional midwifery practice texts.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_PFC = [
  "International Confederation of Midwives (ICM). Essential Competencies for Midwifery Practice & Global Standards.",
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.",
  "Raynor MD, Marshall JE. Myles' Survival Guide / professional midwifery practice texts."
];

window.Academic.topics["diploma-midwifery/professional-framework"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "pfc-01-midwife-role-scope",
    unit: "Unit 1 · Introduction to the Midwifery Profession",
    title: "Definition, Role & Scope of the Midwife",
    readMinutes: 16,
    summary: "Who the midwife is, the breadth of the midwifery role across pregnancy, birth and the postnatal period, and the boundaries of the midwife's scope of practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Who is a midwife?", p: "A midwife is a responsible and accountable professional who works in partnership with women to give the necessary support, care and advice during pregnancy, labour and the postnatal period, to conduct births on the midwife's own responsibility, and to provide care for the newborn and the infant. Midwifery is a distinct profession with its own body of knowledge, skills and ethics — not simply a branch of nursing." },
      { h: "The scope of midwifery practice", p: "Scope of practice describes the range of roles, functions, responsibilities and activities a midwife is educated, competent and authorised to perform. It covers care of the healthy childbearing woman and newborn, detection of complications, accessing medical or other appropriate help, and carrying out emergency measures. Working within scope keeps women safe and protects the midwife professionally." },
      { h: "The breadth of the midwifery role", list: [
        "Promoting normal physiological pregnancy, labour and birth.",
        "Providing antenatal care, screening and health education.",
        "Conducting normal births on the midwife's own responsibility.",
        "Providing immediate and ongoing care of the newborn, including resuscitation when needed.",
        "Giving postnatal care to mother and baby, and supporting infant feeding.",
        "Detecting complications and deviations from normal, and referring appropriately.",
        "Carrying out emergency measures in the absence of medical help (e.g. managing postpartum haemorrhage, neonatal resuscitation).",
        "Health promotion, family planning advice and community/public-health work."
      ] },
      { h: "Settings of midwifery practice", p: "Midwives practise in hospitals, health centres, clinics, domiciliary (home) settings and the community. In Bangladesh, professional midwives are deployed especially in upazila and union-level facilities to expand access to skilled birth attendance for rural women." },
      { h: "Continuity of care", p: "A defining feature of good midwifery is continuity — the same midwife or small team caring for a woman through pregnancy, birth and the postnatal period. Continuity builds trust, improves communication, and is associated with better maternal and newborn outcomes and greater satisfaction." },
      { h: "Working within and beyond scope", p: "A midwife must recognise the limits of her competence. When care needs exceed her scope (for example, an obstetric complication requiring surgery), she refers promptly to a doctor or higher facility while continuing to support the woman. Practising beyond scope without authorisation is unsafe and exposes the midwife to legal and disciplinary action." },
      { h: "Why a clear role matters", list: [
        "Protects women and newborns by ensuring competent, appropriate care.",
        "Defines accountability — the midwife is answerable for her own decisions.",
        "Guides education and competency standards.",
        "Supports teamwork by clarifying who does what.",
        "Strengthens the profession's identity and status."
      ] }
    ],
    references: REF_PFC,
    examQuestions: [
      "Define a midwife and describe the scope of midwifery practice.",
      "List five core functions within the midwifery role.",
      "Explain what is meant by 'working within scope of practice' and why it matters.",
      "Describe the settings in which midwives practise in Bangladesh.",
      "Discuss the importance of continuity of care in midwifery."
    ],
    assessment: [
      { type: "mcq", q: "A midwife is best described as a professional who:", options: ["Only assists doctors during surgery", "Works in partnership with women through pregnancy, birth and the postnatal period", "Cares only for sick newborns", "Performs caesarean sections independently"], answer: 1, rationale: "The midwife works in partnership with women across pregnancy, labour and the postnatal period and cares for the newborn." },
      { type: "mcq", q: "'Scope of practice' refers to:", options: ["The salary a midwife earns", "The range of activities a midwife is educated, competent and authorised to perform", "The number of years of training", "The hospital where one works"], answer: 1, rationale: "Scope of practice defines the roles and activities a midwife is competent and authorised to carry out." },
      { type: "mcq", q: "Which action is clearly WITHIN the midwife's scope of practice?", options: ["Conducting a normal birth on her own responsibility", "Performing a caesarean section", "Administering general anaesthesia", "Carrying out hysterectomy"], answer: 0, rationale: "Conducting normal births on the midwife's own responsibility is a defining element of midwifery scope." },
      { type: "mcq", q: "When a woman develops a complication beyond the midwife's competence, the midwife should:", options: ["Continue alone and hope for the best", "Refer promptly while continuing to support the woman", "Discharge the woman immediately", "Ignore the complication"], answer: 1, rationale: "Recognising limits and referring promptly while supporting the woman keeps her safe." },
      { type: "mcq", q: "Continuity of care in midwifery means:", options: ["Seeing a different provider at every visit", "Care given only in hospital", "The same midwife or small team caring for a woman across pregnancy, birth and postnatal", "Care that never includes the newborn"], answer: 2, rationale: "Continuity is care provided by the same midwife or small team throughout the childbearing journey." },
      { type: "mcq", q: "Which of the following is a midwifery emergency measure that may be carried out in the absence of medical help?", options: ["Appendicectomy", "Neonatal resuscitation", "Caesarean section", "Blood transfusion cross-matching"], answer: 1, rationale: "Newborn resuscitation is an emergency skill within the midwife's competence when medical help is unavailable." },
      { type: "mcq", q: "Midwifery is best understood as:", options: ["A sub-specialty of surgery", "A distinct profession with its own knowledge, skills and ethics", "Identical to general nursing in every respect", "A non-clinical administrative role"], answer: 1, rationale: "Midwifery is a distinct profession with its own body of knowledge, skills and ethical base." },
      { type: "mcq", q: "A key reason for defining the midwife's role clearly is to:", options: ["Reduce the midwife's pay", "Protect women and newborns and define accountability", "Limit the number of women cared for", "Avoid teamwork"], answer: 1, rationale: "A clear role protects clients, defines accountability and guides competent practice." },
      { type: "mcq", q: "In Bangladesh, professional midwives are deployed especially to:", options: ["Tertiary cardiac centres only", "Upazila and union-level facilities to expand skilled birth attendance", "Private cosmetic clinics", "Research laboratories"], answer: 1, rationale: "Midwives are placed at upazila/union level to widen access to skilled care for rural women." },
      { type: "mcq", q: "Practising beyond one's authorised scope without competence:", options: ["Is encouraged to save time", "Has no consequences", "Is required of all midwives", "Is unsafe and exposes the midwife to legal and disciplinary action"], answer: 3, rationale: "Acting outside competence and authorisation is unsafe and can lead to legal/disciplinary action." }
      , { type: "fill", q: "The midwife works in ____ with women to provide care during pregnancy, birth and the postnatal period.", accept: ["partnership"], rationale: "Partnership with the woman is central to the definition of the midwife." }
      , { type: "fill", q: "The range of activities a midwife is educated and authorised to perform is called her ____ of practice.", accept: ["scope"], rationale: "Scope of practice defines authorised, competent activities." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "pfc-02-icm-definition-competencies",
    unit: "Unit 1 · Introduction to the Midwifery Profession",
    title: "The ICM Definition of the Midwife & Essential Competencies",
    readMinutes: 16,
    summary: "The internationally agreed ICM definition of the midwife and the categories of Essential Competencies that describe what every midwife must be able to do.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The International Confederation of Midwives (ICM)", p: "The ICM is the global professional body that represents midwives and midwifery associations worldwide. It sets the international definition of the midwife, the Essential Competencies for Midwifery Practice, the Global Standards for Midwifery Education and Regulation, and a Code of Ethics. National regulators such as the BNMC align their standards with ICM." },
      { h: "The ICM definition of the midwife", p: "The ICM defines the midwife as a person who has successfully completed a recognised midwifery education programme based on the ICM competencies and standards, who has acquired the required qualifications to be registered and/or legally licensed to practise midwifery, and who uses the title 'midwife' and demonstrates competency in the practice of midwifery. This definition links education, regulation and competence." },
      { h: "What 'competency' means", p: "A competency is the combination of knowledge, skills and professional behaviour (attitudes) that enables a midwife to perform a role safely and effectively. The ICM Essential Competencies describe the minimum that every midwife, anywhere in the world, must be able to do at the point of qualification." },
      { h: "Categories of Essential Competencies", list: [
        "General competencies — autonomous practice, accountability, partnership with women, ethical and culturally safe care, and use of research.",
        "Pre-pregnancy and antenatal care — assessment, health promotion, screening, and detection of complications.",
        "Care during labour and birth — monitoring progress, promoting normal birth, conducting birth, and managing complications/emergencies.",
        "Ongoing care of women and newborns — postnatal care of mother and baby, support for feeding, and detection of problems.",
        "Fundamental/abortion-related care where legal — including post-abortion care within the law and scope."
      ] },
      { h: "Knowledge, skills and behaviours", p: "Each competency is described in terms of the knowledge a midwife must have, the skills she must be able to perform, and the professional behaviours she must show. For example, in managing postpartum haemorrhage the midwife must KNOW the causes, be SKILLED in uterine massage and giving a uterotonic, and BEHAVE by communicating clearly and seeking help promptly." },
      { h: "Why the ICM framework matters", list: [
        "Provides a global benchmark so a midwife is competent wherever she practises.",
        "Guides the design of midwifery curricula and assessment.",
        "Supports regulation, registration and quality assurance.",
        "Defines the scope and autonomy of the profession.",
        "Protects women by ensuring a minimum standard of safe care."
      ] },
      { h: "Application in Bangladesh", p: "Bangladesh adopted the ICM standard when it established its professional (Diploma) midwifery programme. Curricula, competencies and the regulatory framework of the BNMC are mapped to ICM categories so that Bangladeshi midwives meet a recognised international benchmark." }
    ],
    references: REF_PFC,
    examQuestions: [
      "State the ICM definition of the midwife and explain its three key elements.",
      "What is a competency? Distinguish knowledge, skill and behaviour with an example.",
      "List the main categories of the ICM Essential Competencies for Midwifery Practice.",
      "Explain why a global competency framework is important for midwifery.",
      "Describe how the ICM standard is applied to midwifery education in Bangladesh."
    ],
    assessment: [
      { type: "mcq", q: "The ICM is best described as the:", options: ["National health ministry of Bangladesh", "Global professional body representing midwives and setting international standards", "A hospital chain", "A drug regulatory agency"], answer: 1, rationale: "The ICM is the worldwide professional body that sets midwifery definitions, competencies and standards." },
      { type: "mcq", q: "According to the ICM definition, a midwife must have completed an education programme that is:", options: ["Unregulated and informal", "Based on the ICM competencies and standards", "Only one month long", "Identical to a medical degree"], answer: 1, rationale: "The ICM definition requires a recognised programme based on ICM competencies and standards." },
      { type: "mcq", q: "A 'competency' combines:", options: ["Only theoretical knowledge", "Knowledge, skills and professional behaviours", "Salary and seniority", "Speed and strength"], answer: 1, rationale: "Competency is the integration of knowledge, skills and attitudes/behaviour." },
      { type: "mcq", q: "Which is a category of the ICM Essential Competencies?", options: ["Care during labour and birth", "Hospital accounting", "Building maintenance", "Pharmaceutical manufacturing"], answer: 0, rationale: "Care during labour and birth is one of the core ICM competency categories." },
      { type: "mcq", q: "The ICM general competencies emphasise that the midwife practises:", options: ["Only under constant direct supervision", "Autonomously and accountably, in partnership with women", "Without any ethical limits", "Without referring complications"], answer: 1, rationale: "General competencies stress autonomous, accountable, partnership-based and ethical practice." },
      { type: "mcq", q: "In managing postpartum haemorrhage, the SKILL component of competency is shown by:", options: ["Knowing the causes of bleeding", "Performing uterine massage and giving a uterotonic", "Feeling anxious", "Reading the policy", ], answer: 1, rationale: "The skill element is the actual performance — e.g. uterine massage and administering a uterotonic." },
      { type: "mcq", q: "A major benefit of the ICM Essential Competencies is that they:", options: ["Lower the standard of care", "Provide a global benchmark of safe minimum practice", "Replace the need for regulation", "Apply only to doctors"], answer: 1, rationale: "They set a worldwide minimum benchmark for safe midwifery practice." },
      { type: "mcq", q: "The ICM standards are used to:", options: ["Design midwifery curricula and support regulation", "Set petrol prices", "Manage airline schedules", "Determine voting rights"], answer: 0, rationale: "ICM standards guide curriculum design, assessment and regulation of midwifery." },
      { type: "mcq", q: "Bangladesh's professional midwifery programme was established to meet the standard of the:", options: ["World Bank only", "ICM (International Confederation of Midwives)", "A single private hospital", "An airline alliance"], answer: 1, rationale: "Bangladesh adopted the ICM standard for its professional midwifery education and regulation." },
      { type: "mcq", q: "The ICM definition links a midwife's education to her:", options: ["Registration/licensure and demonstrated competence", "Marital status", "Place of birth", "Family income"], answer: 0, rationale: "The definition ties recognised education to registration/licensure and competent practice." }
      , { type: "fill", q: "The international professional body that sets the definition of the midwife and the Essential Competencies is the ____.", accept: ["ICM", "International Confederation of Midwives"], rationale: "The ICM sets the global definition, competencies and standards." }
      , { type: "fill", q: "A competency combines knowledge, ____ and professional behaviour.", accept: ["skills", "skill"], rationale: "Competency integrates knowledge, skills and behaviour/attitudes." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "pfc-03-history-development",
    unit: "Unit 1 · Introduction to the Midwifery Profession",
    title: "History & Development of Midwifery (Global & Bangladesh)",
    readMinutes: 16,
    summary: "How midwifery developed from traditional birth attendance to a regulated profession internationally, and the recent emergence of professional midwifery in Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Midwifery through history", p: "Midwifery is one of the oldest caring roles. For most of history, childbirth was attended by experienced women in the community — traditional birth attendants (TBAs) — who learned by apprenticeship. Over time, the growth of scientific knowledge, the recognition of high maternal and newborn deaths, and the development of formal training transformed midwifery into a regulated profession." },
      { h: "Key milestones in global development", list: [
        "Traditional, community-based birth attendance handed down through generations.",
        "Early texts and the gradual recording of midwifery knowledge.",
        "Introduction of formal training and licensing of midwives.",
        "Statutory regulation — laws and councils created to register midwives and protect the public.",
        "Formation of the International Confederation of Midwives (ICM) as the global professional voice.",
        "Modern evidence-based, woman-centred midwifery with defined competencies and standards."
      ] },
      { h: "Why midwifery was professionalised", p: "Unregulated practice led to variable quality and avoidable maternal and newborn deaths. Formal education, registration and regulation were introduced to guarantee a minimum standard of safe care, to define accountability, and to give the public confidence that anyone using the title 'midwife' is properly qualified." },
      { h: "Traditional birth attendants and skilled birth attendants", p: "A traditional birth attendant assists births based on experience and custom, without formal accredited training. A skilled birth attendant (SBA) — such as a professional midwife — is trained and competent to manage normal birth and to identify, manage or refer complications. Global maternal-health strategy emphasises shifting from TBA-attended births to care by skilled attendants." },
      { h: "Development of midwifery in Bangladesh", p: "Bangladesh historically had high maternal mortality and most births were attended at home by family members or TBAs. To improve maternal and newborn survival, the Government of Bangladesh, with partners, established a professional (Diploma) midwifery cadre built to the ICM standard. Professional midwives are now educated and deployed to strengthen skilled birth attendance, especially in rural communities." },
      { h: "The Bangladesh Midwifery Society and professional voice", p: "Professional associations such as the Bangladesh Midwifery Society support midwives through advocacy, continuing education, networking and representation. A strong professional body helps raise standards, give midwives a collective voice, and connect national practice to global midwifery." },
      { h: "Significance of this history for today's midwife", list: [
        "Explains why registration and regulation exist — to protect women.",
        "Shows that midwifery is an evolving, evidence-based profession.",
        "Highlights the shift from custom-based to competency-based care.",
        "Underlines the midwife's role in reducing maternal and newborn mortality.",
        "Gives the new Bangladeshi midwife a sense of professional identity and purpose."
      ] }
    ],
    references: REF_PFC,
    examQuestions: [
      "Trace the development of midwifery from traditional birth attendance to a regulated profession.",
      "Differentiate between a traditional birth attendant and a skilled birth attendant.",
      "Why was midwifery professionalised? Give three reasons.",
      "Describe the development of professional midwifery in Bangladesh.",
      "Explain the role of a professional midwifery association such as the Bangladesh Midwifery Society."
    ],
    assessment: [
      { type: "mcq", q: "For most of history, childbirth was attended by:", options: ["Surgeons in operating theatres", "Experienced women in the community (traditional birth attendants)", "Pharmacists", "Laboratory technicians"], answer: 1, rationale: "Birth was traditionally attended by experienced community women learning by apprenticeship." },
      { type: "mcq", q: "A traditional birth attendant (TBA) is one who:", options: ["Holds an accredited midwifery qualification", "Assists births from experience and custom without formal accredited training", "Performs caesarean sections", "Works only in tertiary hospitals"], answer: 1, rationale: "A TBA assists births based on experience/custom without formal accredited training." },
      { type: "mcq", q: "A skilled birth attendant differs from a TBA because she is:", options: ["Older", "Trained and competent to manage normal birth and identify/refer complications", "Always male", "Unregulated"], answer: 1, rationale: "An SBA is trained and competent to manage normal birth and to manage or refer complications." },
      { type: "mcq", q: "The main reason midwifery was professionalised was to:", options: ["Increase paperwork", "Guarantee a minimum standard of safe care and protect the public", "Reduce the number of births", "Replace all doctors"], answer: 1, rationale: "Regulation and education were introduced to ensure safe care and protect the public." },
      { type: "mcq", q: "Bangladesh established its professional midwifery cadre mainly to:", options: ["Reduce the use of hospitals", "Strengthen skilled birth attendance and improve maternal/newborn survival", "Train traditional healers", "Increase home births without skilled care"], answer: 1, rationale: "The professional cadre was created to expand skilled attendance and reduce maternal/newborn deaths." },
      { type: "mcq", q: "The Bangladesh professional midwifery programme was built to the standard of the:", options: ["ICM", "Football federation", "Local custom only", "A single donor's preference"], answer: 0, rationale: "The Diploma midwifery cadre was developed to the ICM international standard." },
      { type: "mcq", q: "A professional midwifery association mainly provides:", options: ["Advocacy, continuing education and a collective voice", "Free housing for all members", "Medical insurance for the public", "Tax collection"], answer: 0, rationale: "Associations support advocacy, CPD, networking and representation of midwives." },
      { type: "mcq", q: "Global maternal-health strategy encourages shifting births from:", options: ["Skilled attendants to TBAs", "TBAs to skilled birth attendants", "Hospitals to streets", "Midwives to untrained relatives"], answer: 1, rationale: "Strategy promotes moving from TBA-attended births to care by skilled attendants." },
      { type: "mcq", q: "Statutory regulation of midwives was introduced to:", options: ["Register midwives and protect the public", "Lower the quality of care", "Remove the need for education", "Limit women's access to care"], answer: 0, rationale: "Statutory councils register midwives and protect the public through standards." },
      { type: "mcq", q: "Understanding midwifery history helps the new midwife to:", options: ["Ignore regulation", "Appreciate professional identity and the purpose of registration", "Avoid continuing education", "Reject evidence-based practice"], answer: 1, rationale: "History clarifies professional identity, the purpose of regulation and evidence-based practice." }
      , { type: "fill", q: "A birth attendant trained and competent to manage normal birth and refer complications is called a ____ birth attendant.", accept: ["skilled"], rationale: "A skilled birth attendant is formally trained and competent." }
      , { type: "fill", q: "Bangladesh's professional midwifery programme was developed to meet the ____ international standard.", accept: ["ICM", "International Confederation of Midwives"], rationale: "The programme follows the ICM standard." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "pfc-04-bnmc-regulation",
    unit: "Unit 2 · Regulation, Ethics & Law",
    title: "BNMC — Regulation, Registration, Licensure & Scope",
    readMinutes: 16,
    summary: "The role of the Bangladesh Nursing & Midwifery Council in regulating midwives through registration, licensure, standards and discipline, and how this protects the public.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is professional regulation?", p: "Regulation is the system by which a profession is controlled in the public interest. A statutory body sets the standards for education and practice, decides who may use the title and practise, keeps a register, and takes action against unsafe or unprofessional conduct. Regulation exists primarily to protect the public — not to serve the profession's own interests." },
      { h: "The Bangladesh Nursing & Midwifery Council (BNMC)", p: "The BNMC is the statutory regulatory body for nurses and midwives in Bangladesh. It approves training institutions and curricula, conducts or oversees examinations and registration, maintains the register of qualified midwives, sets standards and a code of conduct, and handles professional misconduct. By aligning with ICM standards, it ensures Bangladeshi midwives meet a recognised benchmark." },
      { h: "Registration", p: "Registration is the formal entry of a qualified midwife's name onto the official register kept by the BNMC after she has completed an approved programme and met the requirements. Only a registered person may lawfully use the title 'midwife' and practise. Registration is the public's assurance that the midwife is qualified and accountable." },
      { h: "Licensure and renewal", p: "Licensure is the legal authority to practise. A licence (and its periodic renewal) confirms the midwife remains fit and current to practise, often linked to continuing professional development. Practising without a valid registration/licence is unlawful and unsafe." },
      { h: "Functions of the BNMC", list: [
        "Approve and monitor midwifery education programmes and institutions.",
        "Set standards of education, competence and professional conduct.",
        "Conduct/oversee registration examinations and maintain the register.",
        "Issue and renew licences to practise.",
        "Define and uphold the scope of practice.",
        "Investigate complaints and take disciplinary action (e.g. caution, conditions, suspension, removal from the register).",
        "Protect the public and uphold confidence in the profession."
      ] },
      { h: "Regulation and scope of practice", p: "The regulator defines the scope within which a midwife may practise. Working within this scope is a legal and professional obligation. If a midwife practises outside it without authority, she may face disciplinary action and legal liability, and she puts women at risk." },
      { h: "How regulation protects women", list: [
        "Ensures only qualified, competent people practise as midwives.",
        "Sets minimum standards of education and care.",
        "Provides a route for complaints and accountability.",
        "Removes or restricts unsafe practitioners.",
        "Maintains public trust in midwifery."
      ] }
    ],
    references: REF_PFC,
    examQuestions: [
      "What is professional regulation and why does it exist?",
      "Describe the main functions of the Bangladesh Nursing & Midwifery Council.",
      "Differentiate between registration and licensure.",
      "Explain how regulation protects the public.",
      "What disciplinary actions may a regulator take against a midwife who is unsafe?"
    ],
    assessment: [
      { type: "mcq", q: "The primary purpose of professional regulation is to:", options: ["Increase midwives' salaries", "Protect the public in the public interest", "Reduce the number of midwives", "Promote a single hospital"], answer: 1, rationale: "Regulation exists chiefly to protect the public, not to serve the profession's own interests." },
      { type: "mcq", q: "The statutory body that regulates midwives in Bangladesh is the:", options: ["Ministry of Education", "Bangladesh Nursing & Midwifery Council (BNMC)", "World Health Organization", "Local municipality"], answer: 1, rationale: "The BNMC is the statutory regulator for nurses and midwives in Bangladesh." },
      { type: "mcq", q: "Registration means:", options: ["Paying hospital fees", "Formal entry of a qualified midwife's name on the official register", "Buying equipment", "Attending one workshop"], answer: 1, rationale: "Registration is the formal listing of a qualified midwife on the official register." },
      { type: "mcq", q: "Licensure is best defined as the:", options: ["Right to teach only", "Legal authority to practise, confirming the midwife is fit and current", "Permission to drive", "Ownership of a clinic"], answer: 1, rationale: "A licence is the legal authority to practise, confirming current fitness to practise." },
      { type: "mcq", q: "Which is a function of the BNMC?", options: ["Approving and monitoring midwifery education programmes", "Setting fuel prices", "Running airlines", "Issuing passports"], answer: 0, rationale: "Approving and monitoring midwifery education is a core BNMC function." },
      { type: "mcq", q: "Only a person who is ____ may lawfully use the title 'midwife':", options: ["Wealthy", "Registered with the council", "Older than 40", "A hospital owner"], answer: 1, rationale: "Lawful use of the title requires registration with the regulator." },
      { type: "mcq", q: "If a midwife is found guilty of serious professional misconduct, the regulator may:", options: ["Award her a prize", "Suspend or remove her from the register", "Give her a pay rise", "Ignore it"], answer: 1, rationale: "Disciplinary outcomes include conditions, suspension or removal from the register." },
      { type: "mcq", q: "Practising midwifery without valid registration/licence is:", options: ["Recommended", "Unlawful and unsafe", "Required by the council", "A minor formality"], answer: 1, rationale: "Practising without valid registration/licence is unlawful and endangers women." },
      { type: "mcq", q: "Licence renewal is often linked to:", options: ["Continuing professional development", "Marital status", "Place of residence", "Religion"], answer: 0, rationale: "Renewal commonly requires evidence of continuing professional development." },
      { type: "mcq", q: "The BNMC aligns its standards with the ICM in order to:", options: ["Lower standards", "Ensure Bangladeshi midwives meet a recognised international benchmark", "Avoid examinations", "Discourage training"], answer: 1, rationale: "Aligning with ICM ensures national standards meet an international benchmark." }
      , { type: "fill", q: "The legal authority to practise midwifery is granted through ____.", accept: ["licensure", "licence", "a licence", "license"], rationale: "Licensure confers the legal authority to practise." }
      , { type: "fill", q: "The statutory body regulating midwives in Bangladesh is the ____ (abbreviation).", accept: ["BNMC", "Bangladesh Nursing and Midwifery Council", "Bangladesh Nursing & Midwifery Council"], rationale: "The BNMC is the national regulator." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "pfc-05-framework-autonomy-accountability",
    unit: "Unit 2 · Regulation, Ethics & Law",
    title: "Professional Framework, Autonomy & Accountability",
    readMinutes: 16,
    summary: "The professional and theoretical frameworks that guide midwifery, and the linked concepts of autonomy, responsibility and accountability in everyday practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a professional framework?", p: "A professional framework is the set of standards, rules, values and structures that shape how a profession works. For midwifery it includes the regulator's standards and code, the ICM competencies and code of ethics, legal requirements, employer policies, and the profession's shared values. The framework tells the midwife what is expected and holds her to account." },
      { h: "Types of framework that inform midwifery", list: [
        "Professional framework — standards, codes and scope set by the regulator and ICM.",
        "Legal framework — laws on consent, negligence, confidentiality and registration.",
        "Ethical framework — principles and a code of ethics guiding right conduct.",
        "Theoretical/conceptual framework — models of midwifery care (e.g. partnership, woman-centred care) that guide practice.",
        "Organisational framework — local policies, guidelines and clinical protocols."
      ] },
      { h: "Autonomy", p: "Autonomy means the midwife has the authority and competence to make decisions and act on her own professional responsibility within her scope. The ICM describes the midwife as an autonomous practitioner. Autonomy is not 'doing whatever one likes' — it is exercised within the law, scope, evidence and the woman's wishes." },
      { h: "Responsibility", p: "Responsibility is the duty to carry out a task or role competently. When a midwife accepts the care of a woman, she takes on the responsibility to assess, plan, act and evaluate that care safely. Responsibility can be shared within a team, but each member remains answerable for her own part." },
      { h: "Accountability", p: "Accountability means being answerable for one's own decisions, actions and omissions, and able to justify them. A midwife is accountable to the woman, to her profession and regulator, to her employer, and to the law. With autonomy comes accountability — the more freedom to decide, the greater the duty to justify those decisions.", figure: {
        caption: "Accountability: a midwife is answerable to four directions — the woman, the profession/regulator, the employer, and the law.",
        svg: '<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four directions of midwifery accountability around the midwife."><circle cx="270" cy="120" r="48" fill="#FCE7F3" stroke="#831843" stroke-width="2.5"/><text x="270" y="116" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">MIDWIFE</text><text x="270" y="134" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">accountable</text><rect x="200" y="12" width="140" height="38" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="270" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">The woman / public</text><rect x="200" y="190" width="140" height="38" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="270" y="214" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">The law</text><rect x="10" y="100" width="150" height="40" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="85" y="119" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Profession /</text><text x="85" y="133" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">regulator</text><rect x="380" y="100" width="150" height="40" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="455" y="124" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">The employer</text><line x1="270" y1="72" x2="270" y2="52" stroke="#831843" stroke-width="2"/><line x1="270" y1="168" x2="270" y2="188" stroke="#831843" stroke-width="2"/><line x1="222" y1="120" x2="162" y2="120" stroke="#831843" stroke-width="2"/><line x1="318" y1="120" x2="378" y2="120" stroke="#831843" stroke-width="2"/></svg>'
      } },
      { h: "Autonomy and accountability together", p: "These concepts are two sides of the same coin. Because the midwife may decide and act independently (autonomy), she must be able to explain and defend what she did (accountability). Good documentation, evidence-based decisions and clear communication are how a midwife demonstrates accountability." },
      { h: "Applying the framework in practice", list: [
        "Make decisions within scope, the law and the evidence.",
        "Involve the woman in decisions (informed, woman-centred care).",
        "Follow standards, codes and local policies.",
        "Record care accurately to show what was done and why.",
        "Recognise limits and seek help or refer when needed."
      ] }
    ],
    references: REF_PFC,
    examQuestions: [
      "What is a professional framework? List the types of framework that inform midwifery.",
      "Define autonomy, responsibility and accountability and show how they relate.",
      "To whom is a midwife accountable? Explain with examples.",
      "Why do autonomy and accountability go together?",
      "Describe how a midwife demonstrates accountability in daily practice."
    ],
    assessment: [
      { type: "mcq", q: "A professional framework is:", options: ["A type of hospital bed", "The set of standards, rules, values and structures shaping how a profession works", "A salary scale", "A piece of equipment"], answer: 1, rationale: "A professional framework is the standards, codes, values and structures that govern practice." },
      { type: "mcq", q: "Autonomy in midwifery means the midwife:", options: ["Can ignore the law and the woman's wishes", "Has authority and competence to make decisions within her scope", "Never makes decisions", "Always needs a doctor to decide"], answer: 1, rationale: "Autonomy is decision-making authority within scope, law, evidence and the woman's wishes." },
      { type: "mcq", q: "Accountability means being:", options: ["Free of any duty", "Answerable for one's decisions, actions and omissions and able to justify them", "Paid more", "Senior in rank"], answer: 1, rationale: "Accountability is answerability for one's actions, with the ability to justify them." },
      { type: "mcq", q: "Responsibility differs from accountability in that responsibility is the:", options: ["Duty to carry out a task competently", "Right to a holiday", "Power to dismiss staff", "Ownership of a clinic"], answer: 0, rationale: "Responsibility is the duty to perform a role/task; accountability is answering for it." },
      { type: "mcq", q: "A midwife is accountable to all of the following EXCEPT:", options: ["The woman and public", "Her profession and regulator", "The law and her employer", "No one at all"], answer: 3, rationale: "A midwife is accountable to the woman, profession/regulator, employer and the law — not to no one." },
      { type: "mcq", q: "Which framework includes models such as partnership and woman-centred care?", options: ["Legal framework", "Theoretical/conceptual framework", "Financial framework", "Maintenance framework"], answer: 1, rationale: "Models of care belong to the theoretical/conceptual framework." },
      { type: "mcq", q: "Autonomy and accountability are described as:", options: ["Unrelated", "Two sides of the same coin", "The same as salary", "Opposites that cancel out"], answer: 1, rationale: "Freedom to decide (autonomy) brings the duty to justify decisions (accountability)." },
      { type: "mcq", q: "The best way a midwife demonstrates accountability is by:", options: ["Hiding her decisions", "Accurate documentation and evidence-based, justifiable decisions", "Avoiding the woman", "Refusing to record care"], answer: 1, rationale: "Clear records and evidence-based decisions show accountability." },
      { type: "mcq", q: "Working within scope, the law and the evidence is part of:", options: ["Ignoring the framework", "Applying the professional framework in practice", "Acting without limits", "Personal preference only"], answer: 1, rationale: "Practising within scope, law and evidence is applying the framework." },
      { type: "mcq", q: "The ICM describes the midwife as an ____ practitioner.", options: ["unqualified", "autonomous", "unaccountable", "untrained"], answer: 1, rationale: "The ICM characterises the midwife as an autonomous practitioner." }
      , { type: "fill", q: "Being answerable for one's own decisions and actions and able to justify them is called ____.", accept: ["accountability"], rationale: "Accountability is answerability for one's decisions and actions." }
      , { type: "fill", q: "The authority and competence to make decisions on one's own professional responsibility is called ____.", accept: ["autonomy"], rationale: "Autonomy is independent professional decision-making within scope." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "pfc-06-ethics-principles",
    unit: "Unit 2 · Regulation, Ethics & Law",
    title: "Ethics & Ethical Principles in Midwifery",
    readMinutes: 16,
    summary: "The meaning of ethics, the difference between ethics and law, and the four core ethical principles — autonomy, beneficence, non-maleficence and justice — applied to childbearing women.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is ethics?", p: "Ethics is the study of what is right and wrong and how we ought to act. In midwifery, ethics guides decisions about how to treat women, families and colleagues fairly, respectfully and safely. Ethical practice is about doing the right thing for the woman even when no one is watching and even when it is difficult." },
      { h: "Ethics and law — related but different", p: "Law is a system of rules enforced by the state, with legal penalties for breaches. Ethics is about moral right and wrong, guided by values and professional codes. Most of the time law and ethics agree, but not always: something can be legal yet still feel ethically wrong, or an ethical duty may go beyond the minimum the law requires. Midwives must satisfy both." },
      { h: "The four core ethical principles", p: "Modern health-care ethics is often summarised in four principles that should be balanced in every decision.", figure: {
        caption: "The four principles of biomedical ethics applied in midwifery.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four ethical principles: autonomy, beneficence, non-maleficence, justice."><rect x="15" y="30" width="120" height="120" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="75" y="78" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Autonomy</text><text x="75" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">respect the</text><text x="75" y="114" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">woman&#39;s choice</text><rect x="150" y="30" width="120" height="120" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="210" y="78" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">Beneficence</text><text x="210" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">do good</text><rect x="285" y="30" width="130" height="120" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="350" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Non-</text><text x="350" y="88" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">maleficence</text><text x="350" y="110" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">do no harm</text><rect x="430" y="30" width="95" height="120" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="477" y="78" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">Justice</text><text x="477" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">fairness</text></svg>'
      } },
      { h: "Autonomy (respect for persons)", p: "Respect the woman's right to make informed decisions about her own body and care, even if her choice differs from what the midwife would advise. This requires giving honest information, ensuring understanding, and not coercing. Example: a woman declining a recommended intervention after being fully informed." },
      { h: "Beneficence (do good)", p: "Act in the best interests of the woman and baby — provide care that benefits them. Example: encouraging early breastfeeding, giving a uterotonic to prevent postpartum haemorrhage, or supporting a physiological labour." },
      { h: "Non-maleficence (do no harm)", p: "Avoid causing harm, and weigh risks against benefits. Example: not performing unnecessary or unproven interventions, maintaining infection prevention, and being competent before performing a procedure. Beneficence and non-maleficence often work together as 'do good and avoid harm'." },
      { h: "Justice (fairness)", p: "Treat women fairly and without discrimination, and share resources and care equitably regardless of wealth, religion, ethnicity or status. Example: giving the same standard of respectful care to a poor rural woman as to a wealthy one." },
      { h: "Balancing the principles", p: "The principles can conflict. A woman's autonomous choice may differ from what the midwife sees as most beneficial. Ethical practice means weighing the principles, communicating openly, respecting the woman, documenting the discussion, and seeking advice when a dilemma is difficult. Other important ethical concepts include confidentiality, truth-telling (veracity) and keeping promises (fidelity)." }
    ],
    references: REF_PFC,
    examQuestions: [
      "Define ethics and distinguish it from law.",
      "Name and explain the four core ethical principles with a midwifery example of each.",
      "How do beneficence and non-maleficence relate to each other?",
      "Describe a situation where ethical principles might conflict and how a midwife should respond.",
      "Explain the principles of confidentiality, veracity and fidelity in midwifery."
    ],
    assessment: [
      { type: "mcq", q: "Ethics is best defined as the study of:", options: ["Anatomy", "What is right and wrong and how we ought to act", "Hospital finance", "Drug manufacture"], answer: 1, rationale: "Ethics concerns moral right and wrong and how one ought to act." },
      { type: "mcq", q: "Which statement about ethics and law is correct?", options: ["They are always identical", "Something can be legal yet still ethically wrong", "Law replaces ethics", "Ethics is enforced by the police"], answer: 1, rationale: "Law and ethics usually agree but can diverge; a legal act may still be ethically questionable." },
      { type: "mcq", q: "Respecting a woman's right to make an informed decision about her own care reflects:", options: ["Justice", "Autonomy", "Non-maleficence", "Fidelity"], answer: 1, rationale: "Autonomy is respect for the woman's self-determination." },
      { type: "mcq", q: "Giving a uterotonic to prevent postpartum haemorrhage is an example of:", options: ["Beneficence", "Injustice", "Coercion", "Negligence"], answer: 0, rationale: "Acting to benefit the woman (preventing harm from PPH) is beneficence." },
      { type: "mcq", q: "The principle 'do no harm' is called:", options: ["Justice", "Autonomy", "Non-maleficence", "Veracity"], answer: 2, rationale: "Non-maleficence is the duty to avoid causing harm." },
      { type: "mcq", q: "Providing the same standard of respectful care to a poor woman as to a wealthy woman reflects:", options: ["Autonomy", "Beneficence", "Justice", "Fidelity"], answer: 2, rationale: "Justice is fairness and non-discrimination in care and resources." },
      { type: "mcq", q: "When a woman, fully informed, declines a recommended intervention, the midwife should:", options: ["Force the intervention", "Respect her autonomous choice and document the discussion", "Discharge her at once", "Lie to her"], answer: 1, rationale: "Respecting an informed refusal honours autonomy; the discussion must be documented." },
      { type: "mcq", q: "Beneficence and non-maleficence together are often summarised as:", options: ["Earn more money", "Do good and avoid harm", "Work faster", "Follow orders blindly"], answer: 1, rationale: "These two principles combine as 'do good and avoid harm'." },
      { type: "mcq", q: "Truth-telling as an ethical duty is known as:", options: ["Veracity", "Justice", "Autonomy", "Fidelity"], answer: 0, rationale: "Veracity is the duty of truthfulness." },
      { type: "mcq", q: "When ethical principles conflict, the midwife should:", options: ["Ignore the woman", "Weigh the principles, communicate openly, document and seek advice", "Decide secretly", "Always choose the cheapest option"], answer: 1, rationale: "Dilemmas require balancing principles, open communication, documentation and seeking advice." }
      , { type: "fill", q: "The ethical principle of 'do no harm' is called ____.", accept: ["non-maleficence", "nonmaleficence"], rationale: "Non-maleficence means avoiding harm." }
      , { type: "fill", q: "Treating all women fairly and without discrimination reflects the principle of ____.", accept: ["justice"], rationale: "Justice is fairness and equity in care." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "pfc-07-legal-consent-negligence",
    unit: "Unit 2 · Regulation, Ethics & Law",
    title: "Legal Aspects, Consent, Negligence & Documentation",
    readMinutes: 17,
    summary: "The legal duties of the midwife, the elements of valid consent, what negligence means, and how good documentation protects both the woman and the midwife.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The midwife and the law", p: "Midwives work within a legal framework. The law imposes duties — to obtain consent, to keep information confidential, to practise competently within scope, and to keep accurate records. Breaching these duties can lead to civil liability (e.g. negligence), professional discipline, or in serious cases criminal proceedings." },
      { h: "Duty of care", p: "A midwife owes every woman in her care a duty of care — a legal obligation to provide care of a reasonable standard. The standard expected is that of a reasonably competent midwife in the same situation. Failing to meet this standard, and thereby causing harm, is the basis of a negligence claim." },
      { h: "Consent", p: "Consent is a woman's voluntary agreement to a procedure or treatment. No examination, procedure or treatment may normally be carried out without consent; doing so can amount to assault/battery in law. Consent may be verbal, written or implied, but for significant procedures written, documented consent is best practice." },
      { h: "Elements of valid consent", list: [
        "Informed — the woman is given enough understandable information about the nature, benefits, risks and alternatives.",
        "Voluntary — given freely, without coercion or undue pressure.",
        "Capacity — the woman is able to understand, retain, weigh the information and communicate a decision.",
        "Specific — consent is for a particular procedure, and the woman may withdraw it at any time."
      ] },
      { h: "Negligence", p: "Negligence in law generally requires four elements: a duty of care was owed; the duty was breached (care fell below the reasonable standard); the breach caused harm; and the harm was a foreseeable result. Examples relevant to midwifery include failing to recognise and act on fetal distress, medication errors, or failure to refer in time." },
      { h: "Documentation and record-keeping", p: "Records are a legal document and a tool for safe, continuous care. Good documentation should be: accurate, factual and objective; clear and legible; contemporaneous (made at the time or as soon as possible); signed, dated and timed; free of unexplained gaps or alterations; and confidential. The maxim 'if it was not recorded, it was not done' reflects how records are viewed in law." },
      { h: "How documentation protects the midwife and woman", list: [
        "Provides evidence of the care given and the reasoning behind decisions.",
        "Supports continuity and communication between team members.",
        "Demonstrates that consent was obtained and information given.",
        "Is the midwife's main defence if her practice is questioned.",
        "Protects the woman by ensuring an accurate, complete account of her care."
      ] },
      { h: "Confidentiality as a legal duty", p: "Women's information is confidential and may be shared only with those involved in their care or where the law requires/permits disclosure (for example, certain notifiable issues, or to prevent serious harm). Breaching confidentiality without justification is both an ethical breach and a legal risk." }
    ],
    references: REF_PFC,
    examQuestions: [
      "Explain the legal concept of 'duty of care' in midwifery.",
      "List and explain the elements of valid consent.",
      "Define negligence and state its four legal elements.",
      "Describe the criteria of good documentation and why records matter legally.",
      "Discuss confidentiality as both an ethical and a legal duty."
    ],
    assessment: [
      { type: "mcq", q: "A midwife's 'duty of care' is:", options: ["A choice she may decline", "A legal obligation to provide care of a reasonable standard", "Only owed to wealthy women", "Only relevant in court"], answer: 1, rationale: "Duty of care is a legal obligation to provide a reasonable standard of care to every woman in her care." },
      { type: "mcq", q: "Carrying out a procedure without the woman's consent may legally amount to:", options: ["Good practice", "Assault/battery", "Negligence only", "Nothing at all"], answer: 1, rationale: "Touching or treating without consent can constitute assault/battery in law." },
      { type: "mcq", q: "For consent to be valid it must be informed, voluntary, specific and given by a woman with:", options: ["Wealth", "Capacity to decide", "A medical degree", "Written permission from family"], answer: 1, rationale: "Valid consent requires capacity — the ability to understand, retain, weigh and communicate a decision." },
      { type: "mcq", q: "Which is NOT one of the four legal elements of negligence?", options: ["Duty of care", "Breach of duty", "Friendship with the patient", "Harm caused by the breach"], answer: 2, rationale: "The elements are duty, breach, causation and (foreseeable) harm — friendship is irrelevant." },
      { type: "mcq", q: "'Contemporaneous' documentation means records are:", options: ["Written months later", "Made at the time or as soon as possible after care", "Written by someone else", "Never signed"], answer: 1, rationale: "Contemporaneous means recorded at the time or as soon as possible afterwards." },
      { type: "mcq", q: "The maxim 'if it was not recorded, it was not done' highlights that:", options: ["Records do not matter", "Documentation is key legal evidence of care given", "Verbal accounts are enough in court", "Midwives need not write notes"], answer: 1, rationale: "Records are the main evidence of care; unrecorded care is hard to prove." },
      { type: "mcq", q: "A woman may withdraw her consent:", options: ["Never", "At any time", "Only before admission", "Only with a doctor's permission"], answer: 1, rationale: "Consent is ongoing and may be withdrawn at any time." },
      { type: "mcq", q: "Failure to recognise and act on fetal distress, causing harm, could constitute:", options: ["Good practice", "Negligence", "Beneficence", "Consent"], answer: 1, rationale: "A breach of the standard of care causing foreseeable harm is negligence." },
      { type: "mcq", q: "Good documentation should be all of the following EXCEPT:", options: ["Accurate and factual", "Signed, dated and timed", "Vague and easily altered", "Contemporaneous and legible"], answer: 2, rationale: "Records must not be vague or easily altered; they should be clear, factual and tamper-evident." },
      { type: "mcq", q: "A woman's health information may be shared:", options: ["With anyone who asks", "Only with those involved in her care or where law requires/permits", "Freely on social media", "With the whole ward for interest"], answer: 1, rationale: "Confidential information is shared only on a need-to-know basis or where lawfully required." }
      , { type: "fill", q: "A woman's voluntary agreement to a procedure after being given adequate information is called valid ____.", accept: ["consent"], rationale: "Valid consent is informed, voluntary agreement with capacity." }
      , { type: "fill", q: "Records made at the time of care or as soon as possible afterwards are described as ____.", accept: ["contemporaneous"], rationale: "Contemporaneous records are made at or close to the time of care." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "pfc-08-conduct-code-ethics",
    unit: "Unit 2 · Regulation, Ethics & Law",
    title: "Professional Conduct & the Code of Ethics",
    readMinutes: 15,
    summary: "What professional conduct means, the purpose and content of a midwifery code of ethics/conduct, and the standards of behaviour expected of the registered midwife.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is professional conduct?", p: "Professional conduct is the way a midwife behaves in her role — how she treats women, families, colleagues and the public, and how she upholds the values of the profession. Good conduct builds trust and protects the reputation of midwifery; misconduct can harm women and damage public confidence." },
      { h: "Purpose of a code of ethics / code of conduct", list: [
        "Sets out the standards of behaviour expected of every midwife.",
        "Protects the public by guiding safe, respectful practice.",
        "Provides a benchmark against which conduct is judged.",
        "Supports midwives in making difficult decisions.",
        "Strengthens trust in and the identity of the profession."
      ] },
      { h: "Core themes of a midwifery code", p: "The ICM Code of Ethics and national codes share common themes: respect women and their human and reproductive rights; provide safe, competent and compassionate care; work in partnership with women; maintain confidentiality; obtain informed consent; be honest and trustworthy; keep knowledge and skills up to date; and behave with integrity within the law." },
      { h: "Standards of expected behaviour", list: [
        "Treat every woman with dignity, respect and kindness, free from discrimination.",
        "Maintain competence through continuing professional development.",
        "Be honest and act with integrity; do not falsify records or qualifications.",
        "Maintain professional boundaries with women and colleagues.",
        "Keep information confidential and obtain consent.",
        "Report concerns about unsafe practice or risks to women (a duty of candour).",
        "Present and behave professionally; avoid conduct that brings the profession into disrepute."
      ] },
      { h: "Professional boundaries", p: "A professional relationship is centred on the woman's needs, not the midwife's. Maintaining boundaries means not exploiting the relationship for personal, financial or other gain, not forming inappropriate relationships, and keeping the focus on safe, respectful care." },
      { h: "Misconduct and its consequences", p: "Professional misconduct includes behaviour such as breaching confidentiality, dishonesty, abuse or disrespect, practising while unfit, or serious failures of care. The regulator (BNMC) can investigate and impose sanctions ranging from a caution to conditions, suspension, or removal from the register. Conduct can also have legal consequences." },
      { h: "Living the code in daily practice", p: "A code is not just a document to be read once; it is a guide for everyday decisions. Before acting, a midwife can ask: Is this safe? Is it respectful and in the woman's interest? Is it honest? Is it within my competence and the law? Would I be able to justify it? This habit keeps practice ethical and accountable." }
    ],
    references: REF_PFC,
    examQuestions: [
      "Define professional conduct and explain why it matters in midwifery.",
      "State the purposes of a code of ethics/conduct.",
      "List the core themes commonly found in a midwifery code of ethics.",
      "What are professional boundaries and why must a midwife maintain them?",
      "Describe examples of professional misconduct and their possible consequences."
    ],
    assessment: [
      { type: "mcq", q: "Professional conduct refers to:", options: ["The midwife's salary", "How a midwife behaves and upholds the values of the profession", "The hospital's location", "The colour of the uniform only"], answer: 1, rationale: "Professional conduct is the midwife's behaviour and upholding of professional values." },
      { type: "mcq", q: "A main purpose of a code of ethics is to:", options: ["Increase fees", "Set standards of behaviour and protect the public", "List equipment", "Replace the law"], answer: 1, rationale: "A code sets expected standards and protects the public." },
      { type: "mcq", q: "Which is a core theme of a midwifery code of ethics?", options: ["Respect women's rights and provide safe, compassionate care", "Maximise personal profit", "Keep women uninformed", "Avoid updating skills"], answer: 0, rationale: "Respect, safety and compassion toward women are central code themes." },
      { type: "mcq", q: "Maintaining professional boundaries means:", options: ["Exploiting the relationship for gain", "Keeping the focus on the woman's needs, not the midwife's", "Forming inappropriate relationships", "Ignoring the woman"], answer: 1, rationale: "Boundaries keep the relationship centred on the woman's needs, not personal gain." },
      { type: "mcq", q: "The duty of candour requires a midwife to:", options: ["Hide mistakes", "Be open and report concerns about unsafe practice or risks", "Blame colleagues", "Falsify records"], answer: 1, rationale: "Candour means being open and honest, including reporting risks and errors." },
      { type: "mcq", q: "Falsifying records or qualifications is an example of:", options: ["Good conduct", "Professional misconduct", "Beneficence", "Continuity of care"], answer: 1, rationale: "Dishonesty such as falsification is professional misconduct." },
      { type: "mcq", q: "Possible sanctions for serious misconduct include:", options: ["A prize", "Caution, conditions, suspension or removal from the register", "Automatic promotion", "Nothing at all"], answer: 1, rationale: "Regulators can impose a range of sanctions up to removal from the register." },
      { type: "mcq", q: "Continuing professional development supports the code by:", options: ["Wasting time", "Maintaining the midwife's competence", "Reducing safety", "Avoiding the woman"], answer: 1, rationale: "Keeping skills and knowledge current maintains competence as the code requires." },
      { type: "mcq", q: "A code of ethics is best used as:", options: ["A document read once and forgotten", "A guide for everyday decisions", "A legal loophole", "An optional extra"], answer: 1, rationale: "A code should guide daily decisions, not be read once and ignored." },
      { type: "mcq", q: "Treating every woman without discrimination reflects the code value of:", options: ["Dignity and respect", "Profit", "Speed", "Seniority"], answer: 0, rationale: "Non-discrimination is part of treating women with dignity and respect." }
      , { type: "fill", q: "The duty to be open and honest, including reporting errors and risks, is known as the duty of ____.", accept: ["candour", "candor"], rationale: "The duty of candour is openness and honesty about care and risks." }
      , { type: "fill", q: "Keeping the professional relationship centred on the woman's needs rather than the midwife's is called maintaining professional ____.", accept: ["boundaries"], rationale: "Professional boundaries keep care woman-centred and prevent exploitation." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "pfc-09-woman-centred-partnership",
    unit: "Unit 3 · Models of Midwifery Care",
    title: "Woman-Centred & Partnership Care",
    readMinutes: 16,
    summary: "The midwifery models of woman-centred and partnership care, what they mean in practice, and how respectful maternity care puts the woman at the heart of decisions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Models of midwifery care", p: "A model of care is a way of thinking about and organising how care is given. Midwifery is guided by particular models — especially woman-centred care and the partnership model — that place the woman, not the system or the professional, at the centre. These models distinguish midwifery from a purely medical, task-focused approach." },
      { h: "Woman-centred care", p: "Woman-centred care means care that is shaped around the individual woman's needs, expectations, values and circumstances. The woman is an active participant, not a passive recipient. It includes her social, emotional, physical, psychological, cultural and spiritual context, and recognises her family and community." },
      { h: "Key features of woman-centred care", list: [
        "Focuses on the woman as an individual, not just a 'case' or a condition.",
        "Involves the woman in all decisions about her care (shared decision-making).",
        "Respects her autonomy, choices, dignity and rights.",
        "Considers her whole context — physical, emotional, social, cultural and spiritual.",
        "Promotes continuity and a trusting relationship.",
        "Supports normal physiological processes where safe."
      ] },
      { h: "The partnership model", p: "Partnership describes the relationship between the woman and the midwife as one of equals working together, based on trust, shared power, reciprocity and respect. The midwife brings professional knowledge; the woman brings expertise about her own body, life and preferences. Decisions are made together rather than imposed by the professional." },
      { h: "Principles of partnership", list: [
        "Shared power and shared decision-making — 'with woman', not 'over woman'.",
        "Trust and honesty between woman and midwife.",
        "Reciprocity — both contribute and both gain.",
        "Respect for the woman's knowledge of herself.",
        "Negotiation and individualised care rather than rigid routine."
      ] },
      { h: "Respectful maternity care (RMC)", p: "Woman-centred, partnership care is expressed through respectful maternity care — care that maintains dignity, privacy and confidentiality, ensures freedom from harm and mistreatment, and enables informed choice and continuous support. RMC is a recognised right of every childbearing woman and a powerful way to improve experience and outcomes, especially important in settings where disrespect and abuse have been reported." },
      { h: "Why these models matter", list: [
        "Improve the woman's experience and satisfaction.",
        "Build trust, which improves communication and safety.",
        "Are associated with better maternal and newborn outcomes.",
        "Uphold women's rights and dignity.",
        "Define the professional identity and values of midwifery."
      ] },
      { h: "The midwife's word: 'with woman'", p: "The very meaning of 'midwife' is 'with woman'. Woman-centred and partnership care put this meaning into practice: the midwife is alongside the woman, supporting and empowering her through one of the most significant experiences of her life." }
    ],
    references: REF_PFC,
    examQuestions: [
      "What is a model of care? Name the main models that guide midwifery.",
      "Define woman-centred care and list its key features.",
      "Explain the partnership model and its principles.",
      "What is respectful maternity care and why is it important?",
      "Discuss why woman-centred, partnership care improves outcomes and experience."
    ],
    assessment: [
      { type: "mcq", q: "Woman-centred care places at the centre of care the:", options: ["Hospital system", "Individual woman and her needs", "Midwife's convenience", "Doctor's routine"], answer: 1, rationale: "Woman-centred care is shaped around the individual woman and her needs." },
      { type: "mcq", q: "In woman-centred care, the woman is:", options: ["A passive recipient", "An active participant in decisions", "Excluded from decisions", "Only a source of payment"], answer: 1, rationale: "The woman is an active participant in shared decision-making." },
      { type: "mcq", q: "The partnership model describes the woman-midwife relationship as:", options: ["The midwife in full control", "Equals working together with shared power and respect", "The woman following orders", "Purely transactional"], answer: 1, rationale: "Partnership is a relationship of equals with shared power, trust and respect." },
      { type: "mcq", q: "'Reciprocity' in partnership means:", options: ["Only the midwife benefits", "Both the woman and midwife contribute and both gain", "The woman pays more", "No information is shared"], answer: 1, rationale: "Reciprocity means mutual contribution and mutual benefit." },
      { type: "mcq", q: "Respectful maternity care includes:", options: ["Disregarding privacy", "Maintaining dignity, privacy and freedom from mistreatment", "Withholding information", "Ignoring consent"], answer: 1, rationale: "RMC maintains dignity, privacy, confidentiality, informed choice and freedom from harm." },
      { type: "mcq", q: "Considering a woman's cultural and spiritual context is part of:", options: ["Task-focused care", "Woman-centred care", "Ignoring the woman", "Routine-only care"], answer: 1, rationale: "Woman-centred care addresses the woman's whole context, including culture and spirituality." },
      { type: "mcq", q: "The word 'midwife' literally means:", options: ["With woman", "Above woman", "Without woman", "For the doctor"], answer: 0, rationale: "'Midwife' means 'with woman', the essence of partnership care." },
      { type: "mcq", q: "Shared decision-making means decisions are:", options: ["Imposed by the midwife", "Made together by the woman and midwife", "Made by the family alone", "Avoided entirely"], answer: 1, rationale: "Shared decision-making is collaborative between woman and midwife." },
      { type: "mcq", q: "A benefit associated with woman-centred, partnership care is:", options: ["Worse outcomes", "Improved experience, trust and outcomes", "Less safety", "More disrespect"], answer: 1, rationale: "These models improve experience, trust, safety and outcomes." },
      { type: "mcq", q: "Respectful maternity care is best understood as:", options: ["An optional favour", "A recognised right of every childbearing woman", "Only for wealthy women", "A medical procedure"], answer: 1, rationale: "RMC is recognised as a right of every woman during childbirth." }
      , { type: "fill", q: "Care shaped around the individual woman's needs, values and circumstances is called ____ care.", accept: ["woman-centred", "woman centred", "woman-centered", "woman centered"], rationale: "Woman-centred care focuses on the individual woman." }
      , { type: "fill", q: "The word 'midwife' literally means '____ woman'.", accept: ["with"], rationale: "'Midwife' means 'with woman'." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "pfc-10-communication-theory-skills",
    unit: "Unit 4 · Communication in Midwifery",
    title: "Communication Theory & Effective Communication Skills",
    readMinutes: 17,
    summary: "The concept and process of communication, types and levels of communication, verbal and non-verbal skills, barriers, and the qualities of a good communicator in midwifery.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is communication?", p: "Communication is the process of sending and receiving messages so that meaning is shared between people. In midwifery, effective communication is essential for building trust, giving information, gaining consent, supporting women in labour, working in teams, and keeping care safe. Poor communication is a leading cause of error and dissatisfaction." },
      { h: "The communication process", p: "Communication follows a process: a sender encodes a message and sends it through a channel to a receiver, who decodes it; the receiver gives feedback, confirming whether the message was understood. 'Noise' (anything that distorts the message) can occur at any stage.", figure: {
        caption: "The communication process: sender encodes a message, sends it via a channel to the receiver, who decodes it and gives feedback; noise can interfere.",
        svg: '<svg viewBox="0 0 580 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication process: sender, message, channel, receiver, feedback."><defs><marker id="pfcArr10" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="60" width="120" height="55" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="75" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">SENDER</text><text x="75" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">encodes</text><rect x="210" y="60" width="150" height="55" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="285" y="84" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">MESSAGE</text><text x="285" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">via channel</text><rect x="435" y="60" width="120" height="55" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="495" y="84" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">RECEIVER</text><text x="495" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">decodes</text><line x1="135" y1="87" x2="206" y2="87" stroke="#831843" stroke-width="2.5" marker-end="url(#pfcArr10)"/><line x1="360" y1="87" x2="431" y2="87" stroke="#831843" stroke-width="2.5" marker-end="url(#pfcArr10)"/><path d="M495 118 L495 160 L75 160 L75 118" fill="none" stroke="#7C2D12" stroke-width="2.2" stroke-dasharray="5 4" marker-end="url(#pfcArr10)"/><text x="285" y="178" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Feedback</text></svg>'
      } },
      { h: "Types of communication", list: [
        "Verbal — spoken or written words.",
        "Non-verbal — body language, facial expression, eye contact, posture, gesture, touch and tone of voice.",
        "Formal — structured, e.g. handover, reports, documentation.",
        "Informal — casual conversation that still builds rapport."
      ] },
      { h: "Verbal and non-verbal communication", p: "Verbal communication uses words and is shaped by clarity, simplicity, tone and pace. Non-verbal communication often carries more emotional meaning than words; a warm expression, eye contact and gentle touch can reassure a frightened woman more than any sentence. The midwife should ensure her words and body language give the same message (congruence)." },
      { h: "Levels of communication", list: [
        "Intrapersonal — within oneself (self-talk, reflection).",
        "Interpersonal — between two people (midwife and woman).",
        "Small group — within a team or family group.",
        "Public/organisational — to large groups, e.g. health education sessions."
      ] },
      { h: "Skills and tools for effective communication", list: [
        "Active listening — giving full attention, not interrupting, showing you have heard.",
        "Clear, simple language — avoiding jargon; checking understanding.",
        "Open and closed questions used appropriately.",
        "Empathy and warmth — showing you understand the woman's feelings.",
        "Appropriate non-verbal cues — eye contact, posture, touch where culturally acceptable.",
        "Summarising and clarifying to confirm shared meaning.",
        "Privacy, comfort and adequate time."
      ] },
      { h: "Barriers to effective communication", list: [
        "Physical — noise, lack of privacy, distance, interruptions.",
        "Language and literacy — different language, jargon, or low literacy.",
        "Psychological — fear, pain, anxiety, anger or distress.",
        "Cultural — different beliefs, customs and expectations.",
        "Attitudinal — disrespect, prejudice, being rushed or judgemental.",
        "Sensory — hearing or visual impairment."
      ] },
      { h: "Overcoming barriers and qualities of a good communicator", p: "Barriers can be reduced by ensuring privacy and quiet, using simple language and interpreters, allowing time, being respectful and patient, and checking understanding. A good communicator in midwifery is warm, respectful, honest, patient, a good listener, clear, non-judgemental and culturally sensitive." }
    ],
    references: REF_PFC,
    examQuestions: [
      "Define communication and describe the communication process with a diagram.",
      "List and explain the types and levels of communication.",
      "Differentiate verbal and non-verbal communication with midwifery examples.",
      "Identify the main barriers to effective communication and how to overcome them.",
      "What are the qualities of a good communicator in midwifery?"
    ],
    assessment: [
      { type: "mcq", q: "Communication is the process of:", options: ["Storing equipment", "Sending and receiving messages so that meaning is shared", "Writing prescriptions only", "Cleaning the ward"], answer: 1, rationale: "Communication is sharing meaning through sending and receiving messages." },
      { type: "mcq", q: "In the communication process, the receiver confirms understanding by giving:", options: ["Feedback", "Noise", "A channel", "Encoding"], answer: 0, rationale: "Feedback tells the sender whether the message was understood." },
      { type: "mcq", q: "Body language, facial expression and tone of voice are forms of:", options: ["Verbal communication", "Non-verbal communication", "Written communication", "Formal reporting"], answer: 1, rationale: "These are non-verbal forms of communication." },
      { type: "mcq", q: "'Noise' in the communication process refers to:", options: ["Loud music only", "The receiver", "Anything that distorts or interferes with the message", "Feedback"], answer: 2, rationale: "Noise is any interference that distorts the message at any stage." },
      { type: "mcq", q: "Communication between the midwife and one woman is at the ____ level:", options: ["intrapersonal", "interpersonal", "public", "organisational"], answer: 1, rationale: "Interpersonal communication is between two people." },
      { type: "mcq", q: "Active listening involves:", options: ["Interrupting often", "Giving full attention and showing you have heard", "Looking away", "Finishing the woman's sentences"], answer: 1, rationale: "Active listening means attentive, non-interrupting, responsive listening." },
      { type: "mcq", q: "When a midwife's words and body language give the same message, this is called:", options: ["Noise", "Congruence", "A barrier", "Jargon"], answer: 1, rationale: "Congruence is agreement between verbal and non-verbal messages." },
      { type: "mcq", q: "Which is a psychological barrier to communication?", options: ["Background noise", "Fear, pain or anxiety", "A locked door", "A long corridor"], answer: 1, rationale: "Fear, pain and anxiety are psychological barriers." },
      { type: "mcq", q: "A good way to overcome a language barrier is to:", options: ["Speak faster", "Use more jargon", "Give up", "Use simple language and an interpreter, and check understanding"], answer: 3, rationale: "Simple language, interpreters and checking understanding reduce language barriers." },
      { type: "mcq", q: "Self-talk and reflection are an example of ____ communication:", options: ["interpersonal", "intrapersonal", "public", "group"], answer: 1, rationale: "Intrapersonal communication occurs within oneself." }
      , { type: "fill", q: "In the communication process, the response that confirms the message was understood is called ____.", accept: ["feedback"], rationale: "Feedback confirms whether the message was understood." }
      , { type: "fill", q: "Communication through body language, facial expression and gesture is called ____ communication.", accept: ["non-verbal", "nonverbal", "non verbal"], rationale: "Non-verbal communication uses cues other than words." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "pfc-11-therapeutic-relationship-counselling",
    unit: "Unit 4 · Communication in Midwifery",
    title: "The Therapeutic Relationship & Counselling Skills",
    readMinutes: 16,
    summary: "Interpersonal and therapeutic communication, the phases and qualities of the therapeutic relationship, core counselling skills, and breaking bad news compassionately.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Interpersonal vs therapeutic communication", p: "Interpersonal communication is the general exchange between people. Therapeutic communication is purposeful communication used to help the woman — to build trust, give support, share information and promote her wellbeing. It is goal-directed and centred on the woman's needs, not on social chat." },
      { h: "The therapeutic relationship", p: "A therapeutic relationship is a professional, helping relationship between the midwife and the woman, built on trust, respect, empathy and clear boundaries. It is the foundation of effective care: a woman who trusts her midwife shares more, follows advice more readily, and feels safer." },
      { h: "Core qualities (Rogerian conditions)", list: [
        "Empathy — understanding and conveying that you grasp the woman's feelings and situation.",
        "Genuineness (congruence) — being real, honest and consistent.",
        "Unconditional positive regard / warmth — accepting and respecting the woman without judgement.",
        "Trust and respect — reliability and honouring the woman's dignity and choices."
      ] },
      { h: "Phases of the therapeutic relationship", list: [
        "Introductory/orientation phase — meeting, building rapport, agreeing roles and expectations.",
        "Working phase — the main work of care, support, problem-solving and information-sharing.",
        "Termination/ending phase — closing the relationship, summarising, and planning ongoing care."
      ] },
      { h: "Core counselling skills", list: [
        "Active listening and attending — full attention, open posture, eye contact.",
        "Empathy — reflecting back feelings ('It sounds as if you are frightened').",
        "Use of questions — open questions to explore, closed to confirm.",
        "Paraphrasing and reflecting — restating what the woman said to show understanding.",
        "Summarising — drawing the discussion together.",
        "Silence — allowing the woman time to think and feel.",
        "Avoiding premature advice or judgement — exploring before suggesting."
      ] },
      { h: "Counselling in midwifery", p: "Midwives use counselling skills in many situations: supporting a woman with an unplanned pregnancy, fear of birth, infant-feeding decisions, pregnancy loss, or postnatal distress. The aim is not to 'fix' the woman but to support her to understand her situation, express feelings, and make her own informed decisions." },
      { h: "Breaking bad news", p: "Breaking bad news (such as a stillbirth or a serious diagnosis) requires great sensitivity. Helpful steps: prepare and ensure privacy; find out what the woman already knows; give a warning that difficult news is coming; deliver the information clearly, honestly and gently; allow silence and emotion; respond with empathy; check understanding; and arrange support and follow-up. Honesty with compassion is essential — never give false reassurance." },
      { h: "Maintaining boundaries in the relationship", p: "While the relationship is warm and trusting, it remains professional. The midwife focuses on the woman's needs, keeps confidentiality, avoids over-involvement or dependency, and does not use the relationship for personal gain." }
    ],
    references: REF_PFC,
    examQuestions: [
      "Differentiate interpersonal and therapeutic communication.",
      "Describe the core qualities and phases of the therapeutic relationship.",
      "List and explain five core counselling skills.",
      "Outline the steps for breaking bad news compassionately.",
      "How are counselling skills used in midwifery practice?"
    ],
    assessment: [
      { type: "mcq", q: "Therapeutic communication is best described as:", options: ["Casual social chat", "Purposeful, goal-directed communication to help the woman", "Talking about the midwife's day", "Communication with equipment"], answer: 1, rationale: "Therapeutic communication is purposeful and centred on helping the woman." },
      { type: "mcq", q: "The foundation of a therapeutic relationship is:", options: ["Money", "Trust, respect and empathy", "Speed", "Authority over the woman"], answer: 1, rationale: "Trust, respect and empathy underpin the therapeutic relationship." },
      { type: "mcq", q: "Empathy means:", options: ["Feeling sorry for the woman from a distance", "Understanding and conveying that you grasp her feelings and situation", "Ignoring feelings", "Giving advice immediately"], answer: 1, rationale: "Empathy is understanding and communicating that you grasp the woman's experience." },
      { type: "mcq", q: "Which is the FIRST phase of the therapeutic relationship?", options: ["Working phase", "Termination phase", "Introductory/orientation phase", "Discharge"], answer: 2, rationale: "The relationship begins with the introductory/orientation phase of rapport-building." },
      { type: "mcq", q: "Restating in your own words what the woman has said is called:", options: ["Paraphrasing", "Interrupting", "Diagnosing", "Lecturing"], answer: 0, rationale: "Paraphrasing restates the woman's words to show understanding." },
      { type: "mcq", q: "In counselling, the appropriate use of silence:", options: ["Wastes time", "Gives the woman time to think and feel", "Shows the midwife is bored", "Should always be avoided"], answer: 1, rationale: "Silence allows the woman space to think and express feelings." },
      { type: "mcq", q: "When breaking bad news, the midwife should:", options: ["Give false reassurance", "Be honest and compassionate, allowing emotion and offering support", "Rush through it", "Avoid the woman afterwards"], answer: 1, rationale: "Bad news requires honesty with compassion, time, and follow-up support." },
      { type: "mcq", q: "'Unconditional positive regard' means:", options: ["Judging the woman", "Accepting and respecting the woman without judgement", "Agreeing with everything to please her", "Being cold and distant"], answer: 1, rationale: "It is non-judgemental acceptance and respect for the woman." },
      { type: "mcq", q: "The main aim of counselling in midwifery is to:", options: ["Make decisions for the woman", "Support the woman to understand and make her own informed decisions", "Tell the woman what to feel", "Avoid difficult topics"], answer: 1, rationale: "Counselling supports the woman's own understanding and decision-making." },
      { type: "mcq", q: "A therapeutic relationship, though warm, must remain:", options: ["Unprofessional", "Professional with clear boundaries", "Based on personal gain", "Free of confidentiality"], answer: 1, rationale: "It stays professional, confidential and bounded despite its warmth." }
      , { type: "fill", q: "Understanding and conveying that you grasp another person's feelings is called ____.", accept: ["empathy"], rationale: "Empathy is understanding and communicating grasp of another's feelings." }
      , { type: "fill", q: "Restating in your own words what the woman has said, to show you understood, is called ____.", accept: ["paraphrasing", "reflecting", "reflection"], rationale: "Paraphrasing/reflecting restates the message to confirm understanding." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "pfc-12-interprofessional-team",
    unit: "Unit 4 · Communication in Midwifery",
    title: "Interprofessional & Team Communication",
    readMinutes: 16,
    summary: "Communicating safely with other health professionals using structured tools such as ISBAR and SOAP, effective handover, and managing conflict within the team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why team communication matters", p: "Maternity care is delivered by a team — midwives, doctors, nurses, anaesthetists, paediatricians and support staff. Clear communication between professionals is essential for safe care; breakdowns in communication, especially at handover and in emergencies, are a major cause of avoidable harm to mothers and babies." },
      { h: "Structured communication tools", p: "Structured tools standardise how critical information is passed on so nothing important is missed, especially when a midwife is worried about a woman and needs help quickly." },
      { h: "ISBAR", p: "ISBAR is a structured way to communicate, particularly in urgent situations or referrals.", list: [
        "I — Identify: who you are, who the woman is, where you are.",
        "S — Situation: the current problem or concern in one or two sentences.",
        "B — Background: relevant history (e.g. gravida/para, gestation, antenatal events).",
        "A — Assessment: your findings and what you think is happening.",
        "R — Recommendation/Request: what you want — e.g. 'I need you to come and review her now.'"
      ] },
      { h: "SOAP", p: "SOAP is a structured way to document and present clinical information.", list: [
        "S — Subjective: what the woman reports (symptoms, concerns).",
        "O — Objective: measurable findings (observations, examination, results).",
        "A — Assessment: the midwife's interpretation/diagnosis.",
        "P — Plan: the plan of care and follow-up."
      ] },
      { h: "Effective handover", p: "Handover is the transfer of professional responsibility and information for a woman's care from one practitioner or shift to another. Good handover is structured (e.g. using ISBAR), accurate, complete, and allows questions. It should highlight key concerns, outstanding tasks, and any woman who is unwell or at risk." },
      { h: "Principles of good team communication", list: [
        "Be clear, concise and specific — state the concern and what you need.",
        "Use structured tools (ISBAR/SOAP) in referrals and handover.",
        "Practise 'closed-loop' communication — repeat back orders to confirm.",
        "Speak up about safety concerns, even to seniors (assertive, respectful escalation).",
        "Listen actively and respect each profession's contribution.",
        "Document what was communicated, to whom and when."
      ] },
      { h: "Conflict in the team", p: "Conflict can arise from differing views, poor communication, role confusion, workload or hierarchy. Sources include disagreement over a plan of care, or feeling unheard. Unmanaged conflict harms teamwork and can endanger women. Conflict is not always bad — handled well, it can lead to better decisions." },
      { h: "Managing conflict and ethical decisions", list: [
        "Stay calm, professional and respectful; focus on the issue, not the person.",
        "Listen to understand the other's view; communicate your own clearly and assertively.",
        "Keep the woman's safety and best interests central.",
        "Seek common ground and a solution; involve a senior or mediator if needed.",
        "Use an ethical and evidence-based approach to resolve disagreements about care.",
        "Document significant concerns and escalate unresolved safety issues."
      ] }
    ],
    references: REF_PFC,
    examQuestions: [
      "Why is interprofessional communication important for safe maternity care?",
      "Explain the ISBAR tool and when a midwife would use it.",
      "Describe the SOAP format for documentation.",
      "What makes a handover safe and effective?",
      "Identify sources of conflict in the clinical area and outline principles of conflict resolution."
    ],
    assessment: [
      { type: "mcq", q: "A major cause of avoidable harm in maternity care is:", options: ["Too much documentation", "Breakdown in communication between professionals", "Working in a team", "Using structured tools"], answer: 1, rationale: "Communication breakdowns, especially at handover and in emergencies, cause avoidable harm." },
      { type: "mcq", q: "In ISBAR, the 'R' stands for:", options: ["Report", "Recommendation/Request", "Result", "Routine"], answer: 1, rationale: "R is the Recommendation/Request — what you want the other professional to do." },
      { type: "mcq", q: "In ISBAR, stating 'she is 38 weeks, gravida 2, with a previous PPH' is the:", options: ["Situation", "Background", "Recommendation", "Identify"], answer: 1, rationale: "Relevant history such as gestation and previous events is the Background." },
      { type: "mcq", q: "In SOAP, blood pressure and pulse readings are recorded under:", options: ["Subjective", "Objective", "Assessment", "Plan"], answer: 1, rationale: "Measurable findings such as vital signs are Objective data." },
      { type: "mcq", q: "In SOAP, what the woman reports about her symptoms is the:", options: ["Subjective component", "Objective component", "Plan", "Assessment"], answer: 0, rationale: "The woman's reported symptoms/concerns are Subjective." },
      { type: "mcq", q: "Handover is best described as the transfer of:", options: ["Equipment only", "Professional responsibility and information for a woman's care", "Money", "Uniforms"], answer: 1, rationale: "Handover transfers responsibility and information between practitioners/shifts." },
      { type: "mcq", q: "'Closed-loop' communication means:", options: ["Ignoring instructions", "Repeating back an order to confirm it was understood", "Closing the door", "Saying nothing"], answer: 1, rationale: "Closed-loop communication confirms accuracy by reading/repeating back." },
      { type: "mcq", q: "When a midwife has a serious safety concern about a senior's plan, she should:", options: ["Stay silent", "Speak up assertively and respectfully (escalate)", "Walk away", "Argue aggressively in front of the woman"], answer: 1, rationale: "Patient safety requires respectful, assertive escalation of concerns." },
      { type: "mcq", q: "Which is a common source of conflict in the clinical area?", options: ["Agreement on everything", "Differing views, poor communication or role confusion", "Adequate staffing", "Clear plans"], answer: 1, rationale: "Conflict often stems from differing views, communication failures and role confusion." },
      { type: "mcq", q: "A key principle of conflict resolution is to:", options: ["Attack the person", "Focus on the issue and keep the woman's safety central", "Ignore the problem", "Always defer without question"], answer: 1, rationale: "Effective resolution focuses on the issue and prioritises the woman's safety." }
      , { type: "fill", q: "The structured tool used to communicate concerns in a referral — Identify, Situation, Background, Assessment, Recommendation — is called ____.", accept: ["ISBAR", "SBAR"], rationale: "ISBAR structures urgent clinical communication." }
      , { type: "fill", q: "In the SOAP format, measurable findings such as observations and examination are the ____ data.", accept: ["objective"], rationale: "Objective data are measurable findings." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "pfc-13-advocacy-consent-confidentiality",
    unit: "Unit 5 · Advocacy & Reflective Practice",
    title: "Advocacy, Informed Consent & Confidentiality",
    readMinutes: 16,
    summary: "The midwife's role as advocate, assertiveness in protecting women's rights, the principles of informed consent, and the duty of confidentiality.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is advocacy?", p: "Advocacy means supporting and speaking up for a woman to protect her rights, interests and wishes, and helping her to have a voice in her own care. The midwife as advocate ensures the woman is informed, heard and respected, and that her choices are honoured — especially when she is vulnerable, frightened or unable to speak for herself." },
      { h: "The midwife as advocate", list: [
        "Giving the woman full, honest information so she can decide.",
        "Ensuring her voice and choices are heard by the team.",
        "Protecting her from disrespect, harm or unsafe practice.",
        "Supporting her to ask questions and express her wishes.",
        "Standing up for her rights, including to dignity, privacy and respectful care."
      ] },
      { h: "Assertiveness and advocacy", p: "Effective advocacy requires assertiveness — communicating one's own and the woman's views honestly, clearly and respectfully, without being passive (giving in) or aggressive (hostile). An assertive midwife can raise concerns, decline unsafe requests, and protect a woman's rights while maintaining good relationships." },
      { h: "Assertive, passive and aggressive behaviour", figure: {
        caption: "Assertiveness sits between passive and aggressive behaviour: it respects both the woman and oneself.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Passive, assertive and aggressive communication styles."><rect x="15" y="40" width="150" height="70" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="90" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">PASSIVE</text><text x="90" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">gives in / silent</text><rect x="195" y="30" width="150" height="90" rx="10" fill="#15803D" stroke="#15803D" stroke-width="2"/><text x="270" y="64" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#ffffff">ASSERTIVE</text><text x="270" y="86" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FCE7F3">honest, clear,</text><text x="270" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FCE7F3">respectful</text><rect x="375" y="40" width="150" height="70" rx="10" fill="#7C2D12" stroke="#7C2D12" stroke-width="2"/><text x="450" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#ffffff">AGGRESSIVE</text><text x="450" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#FCE7F3">hostile / forceful</text></svg>'
      } },
      { h: "Informed consent", p: "Informed consent is consent given by a woman who has the capacity to decide, who has been given adequate understandable information (the nature, benefits, risks and alternatives of a procedure), and who agrees voluntarily without coercion. It is both an ethical duty (respect for autonomy) and a legal requirement. The midwife's role is to inform, check understanding, answer questions and respect the woman's decision — including refusal." },
      { h: "Principles of informed consent", list: [
        "Capacity — the woman can understand, retain, weigh and communicate a decision.",
        "Information — adequate, honest, understandable information including alternatives.",
        "Voluntariness — free choice, without pressure or coercion.",
        "Ongoing and specific — for a particular procedure, and can be withdrawn at any time.",
        "Documented — the discussion and the woman's decision are recorded."
      ] },
      { h: "Confidentiality", p: "Confidentiality is the duty to protect the woman's private information and to share it only with those involved in her care or where the law requires or permits disclosure. It is essential for trust: a woman will only share sensitive information if she believes it will be kept private. Examples of careless breaches include discussing a woman in public areas, leaving records visible, or talking about cases on social media." },
      { h: "Limits of confidentiality", p: "Confidentiality is not absolute. Information may be disclosed with the woman's consent, when sharing with the care team on a need-to-know basis, when the law requires it (e.g. certain notifications), or to prevent serious harm. Even then, only the minimum necessary information should be shared, and the reason should be justifiable and documented." }
    ],
    references: REF_PFC,
    examQuestions: [
      "Define advocacy and describe the midwife's role as an advocate.",
      "Distinguish assertive, passive and aggressive behaviour, and link assertiveness to advocacy.",
      "State the principles of informed consent.",
      "What is confidentiality and why is it essential in midwifery?",
      "When may confidentiality be lawfully breached?"
    ],
    assessment: [
      { type: "mcq", q: "Advocacy in midwifery means:", options: ["Making all decisions for the woman", "Supporting and speaking up to protect the woman's rights and wishes", "Ignoring the woman's views", "Promoting the hospital"], answer: 1, rationale: "Advocacy is supporting the woman and protecting her rights, voice and wishes." },
      { type: "mcq", q: "Assertiveness is communication that is:", options: ["Honest, clear and respectful without being hostile", "Passive and giving in", "Aggressive and forceful", "Silent"], answer: 0, rationale: "Assertiveness is honest, clear, respectful expression — neither passive nor aggressive." },
      { type: "mcq", q: "A passive communicator tends to:", options: ["Speak up clearly", "Give in and stay silent even when concerned", "Dominate others", "Protect the woman's rights firmly"], answer: 1, rationale: "Passive behaviour means giving in and not voicing concerns." },
      { type: "mcq", q: "Which is required for consent to be informed?", options: ["The woman is wealthy", "Adequate understandable information including risks and alternatives", "A relative signs instead", "The procedure is free"], answer: 1, rationale: "Informed consent requires adequate, understandable information including risks and alternatives." },
      { type: "mcq", q: "For valid consent, the woman must give it:", options: ["Under pressure", "Voluntarily, without coercion", "Only after the procedure", "Through a stranger"], answer: 1, rationale: "Consent must be voluntary and free from coercion." },
      { type: "mcq", q: "Confidentiality means information is shared:", options: ["With anyone curious", "Only with those involved in care or where law requires/permits", "On social media", "In public waiting areas"], answer: 1, rationale: "Confidential information is shared only on a need-to-know basis or where lawfully required." },
      { type: "mcq", q: "Discussing a named woman's case on social media is:", options: ["Good practice", "A breach of confidentiality", "Required by law", "Part of advocacy"], answer: 1, rationale: "Sharing identifiable information publicly breaches confidentiality." },
      { type: "mcq", q: "Confidentiality may lawfully be breached when:", options: ["A colleague is simply curious", "It is convenient", "The law requires it or to prevent serious harm", "A friend asks"], answer: 2, rationale: "Disclosure is justified by consent, legal requirement, need-to-know care, or preventing serious harm." },
      { type: "mcq", q: "A woman may withdraw her consent for a procedure:", options: ["Never", "At any time", "Only with family approval", "Only in writing months ahead"], answer: 1, rationale: "Consent is ongoing and may be withdrawn at any time." },
      { type: "mcq", q: "When disclosure of confidential information is justified, the midwife should share:", options: ["Everything she knows", "Nothing at all", "Details with the whole ward", "Only the minimum necessary information"], answer: 3, rationale: "Even when justified, only the minimum necessary information should be disclosed." }
      , { type: "fill", q: "Communicating one's own and the woman's views honestly and respectfully, without being passive or aggressive, is called ____.", accept: ["assertiveness", "being assertive", "assertive communication"], rationale: "Assertiveness balances respect for self and others." }
      , { type: "fill", q: "Consent given by a capable woman who has adequate information and agrees voluntarily is called ____ consent.", accept: ["informed"], rationale: "Informed consent requires capacity, information and voluntariness." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "pfc-14-cultural-competence-reflection",
    unit: "Unit 5 · Advocacy & Reflective Practice",
    title: "Cultural Competence & Reflective Practice",
    readMinutes: 16,
    summary: "Providing culturally safe, respectful care to women of all backgrounds, and using critical thinking and reflective practice to learn from experience and improve care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Culture and childbirth", p: "Culture shapes how women experience pregnancy, birth and the postnatal period — their beliefs, customs, diet, modesty, who supports them, and their views on practices and decisions. A midwife who understands and respects a woman's culture can give care that is acceptable, safe and trusted; one who ignores it may cause distress and lose the woman's confidence." },
      { h: "Cultural competence and cultural safety", list: [
        "Cultural awareness — recognising that people have different beliefs and customs, and being aware of one's own.",
        "Cultural sensitivity — respecting differences without judgement.",
        "Cultural competence — having the knowledge, attitudes and skills to care effectively for women of different cultures.",
        "Cultural safety — care defined by the woman as respectful of her identity, free from discrimination, where she feels safe."
      ] },
      { h: "Providing culturally safe care", list: [
        "Ask about and respect the woman's beliefs, customs and preferences.",
        "Avoid assumptions and stereotypes; treat each woman as an individual.",
        "Provide privacy and respect modesty.",
        "Use interpreters and clear language when there is a language barrier.",
        "Accommodate cultural practices where they are safe; explain gently where a practice is harmful.",
        "Examine and set aside one's own biases and prejudices."
      ] },
      { h: "Critical thinking", p: "Critical thinking is purposeful, reasoned thinking used to make sound clinical decisions: questioning, analysing information, weighing evidence and considering alternatives before acting. It helps the midwife recognise when something is not normal, avoid jumping to conclusions, and make safe, individualised decisions rather than following routine blindly." },
      { h: "What is reflective practice?", p: "Reflective practice is the process of thinking carefully about one's experiences — what happened, how one felt, what went well or badly, and what could be done differently — in order to learn and improve. It turns everyday experience into learning, and is a recognised way for midwives to develop and maintain competence." },
      { h: "A reflective cycle", p: "Reflection is often structured as a cycle, helping the midwife move from an experience to a plan for improvement.", figure: {
        caption: "A simple reflective cycle: describe the experience, examine feelings and what happened, learn, and plan to do differently.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reflective cycle: experience, feelings/evaluation, learning, action plan."><defs><marker id="pfcArr14" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="190" y="10" width="160" height="42" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="270" y="36" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">1. Experience</text><rect x="360" y="78" width="170" height="42" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="445" y="104" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">2. Feelings &amp; evaluate</text><rect x="190" y="150" width="160" height="42" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="270" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">3. Learn / analyse</text><rect x="10" y="78" width="160" height="42" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="90" y="104" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">4. Action plan</text><path d="M350 38 Q420 50 440 76" fill="none" stroke="#831843" stroke-width="2.2" marker-end="url(#pfcArr14)"/><path d="M430 120 Q360 150 352 160" fill="none" stroke="#831843" stroke-width="2.2" marker-end="url(#pfcArr14)"/><path d="M190 175 Q110 150 95 122" fill="none" stroke="#831843" stroke-width="2.2" marker-end="url(#pfcArr14)"/><path d="M95 78 Q120 40 188 33" fill="none" stroke="#831843" stroke-width="2.2" marker-end="url(#pfcArr14)"/></svg>'
      } },
      { h: "Why reflective practice matters in midwifery", list: [
        "Turns experience into learning and improves future care.",
        "Helps the midwife recognise strengths and areas to develop.",
        "Supports safe, evidence-based and individualised practice.",
        "Builds self-awareness, including of one's biases.",
        "Is part of continuing professional development and accountability."
      ] },
      { h: "Putting it together", p: "Cultural competence and reflective practice together make the midwife a thoughtful, respectful and continually improving professional. By reflecting on encounters with women of different backgrounds, examining her own assumptions, and planning to do better, the midwife provides care that is safe, respectful and truly woman-centred." }
    ],
    references: REF_PFC,
    examQuestions: [
      "Explain how culture influences a woman's experience of childbirth.",
      "Differentiate cultural awareness, sensitivity, competence and safety.",
      "Describe how a midwife can provide culturally safe care.",
      "Define critical thinking and reflective practice.",
      "Why is reflective practice important in midwifery? Outline a reflective cycle."
    ],
    assessment: [
      { type: "mcq", q: "Culture influences childbirth by shaping a woman's:", options: ["Blood group", "Beliefs, customs, modesty and views on practices", "Height only", "Bone density"], answer: 1, rationale: "Culture shapes beliefs, customs, modesty and views around birth and care." },
      { type: "mcq", q: "Cultural safety is care that is:", options: ["Defined by the midwife as adequate", "Experienced by the woman as respectful of her identity and free from discrimination", "The same for everyone regardless of culture", "Focused on the hospital's routine"], answer: 1, rationale: "Cultural safety is defined by the woman feeling respected and free from discrimination." },
      { type: "mcq", q: "Treating each woman as an individual rather than by stereotype is part of:", options: ["Cultural competence", "Discrimination", "Ignoring culture", "Routine-only care"], answer: 0, rationale: "Avoiding stereotypes and individualising care is part of cultural competence." },
      { type: "mcq", q: "When a cultural practice is genuinely harmful, the midwife should:", options: ["Force the woman to stop", "Explain gently and discuss safer alternatives, respecting the woman", "Ignore the harm", "Mock the practice"], answer: 1, rationale: "Harmful practices are addressed by gentle, respectful explanation and discussion, not force or ridicule." },
      { type: "mcq", q: "Critical thinking in midwifery means:", options: ["Following routine without question", "Reasoned questioning, analysing information and weighing evidence before acting", "Guessing", "Always agreeing with seniors"], answer: 1, rationale: "Critical thinking is purposeful, reasoned analysis before making decisions." },
      { type: "mcq", q: "Reflective practice is:", options: ["Looking in a mirror", "Thinking about experiences to learn and improve care", "Avoiding feedback", "Repeating mistakes"], answer: 1, rationale: "Reflective practice is structured thinking about experience to learn and improve." },
      { type: "mcq", q: "Which is the FIRST step in a typical reflective cycle?", options: ["Action plan", "Describing the experience", "Forgetting it", "Blaming others"], answer: 1, rationale: "Reflection usually begins by describing the experience that occurred." },
      { type: "mcq", q: "A key benefit of reflective practice is that it:", options: ["Wastes time", "Turns experience into learning and improves future care", "Reduces competence", "Encourages bias"], answer: 1, rationale: "Reflection converts experience into learning and improvement." },
      { type: "mcq", q: "Using an interpreter and simple language for a woman who speaks another language reflects:", options: ["Poor practice", "Culturally safe, respectful care", "Discrimination", "Breaking confidentiality"], answer: 1, rationale: "Overcoming language barriers respectfully is part of culturally safe care." },
      { type: "mcq", q: "Reflective practice supports the midwife's accountability by:", options: ["Hiding errors", "Being part of continuing professional development and self-improvement", "Avoiding learning", "Ignoring outcomes"], answer: 1, rationale: "Reflection is part of CPD and professional accountability." }
      , { type: "fill", q: "Care experienced by the woman as respectful of her identity and free from discrimination is called cultural ____.", accept: ["safety"], rationale: "Cultural safety is defined by the woman feeling respected and safe." }
      , { type: "fill", q: "Thinking carefully about one's experiences in order to learn and improve is called ____ practice.", accept: ["reflective"], rationale: "Reflective practice turns experience into learning." }
    ]
  }
];
