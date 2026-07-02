/* ============================================================
   B.Sc. in Nursing (BNMC 2018) · Year 4 · B431-II
   Gynaecological & Obstetrical Nursing (Paper II) — 16 topics.
   Aligned to the BNMC 4-year B.Sc. Nursing (2018) Year-4 syllabus:
   obstetric risk & emergencies and the Bangladesh referral system;
   gynaecological disorders (menstrual cycle, inflammatory disease,
   menstrual disorders, abortion, menopause, benign & malignant
   growths, uterine displacement/prolapse); and high-risk pregnancy
   (abnormal obstetric conditions, hypertensive disorders & APH,
   anaemia/thalassaemia, medical disorders, high-risk intrapartum
   care and induction/assisted delivery).
   Degree-level depth: pathophysiology, classifications, drug
   principles and nursing management, with Bangladesh context.
   Grounded in standard texts:
     • Dutta DC. DC Dutta's Textbook of Obstetrics. CBS / Jaypee.
     • Dutta DC. DC Dutta's Textbook of Gynecology. CBS / Jaypee.
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
     • Howkins & Bourne. Shaw's Textbook of Gynaecology. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_GYN = [
  "Dutta DC. DC Dutta's Textbook of Obstetrics. CBS Publishers / Jaypee.",
  "Dutta DC. DC Dutta's Textbook of Gynecology. CBS Publishers / Jaypee.",
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.",
  "Howkins & Bourne. Shaw's Textbook of Gynaecology. Elsevier."
];

window.Academic.topics["bsc-nursing/gynae-obstetrical"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "gyn-01-intro-obs",
    unit: "Unit 1 · Obstetric Risk & Emergencies",
    title: "Introduction to Obstetrical Nursing & Common Abnormal Obstetrics",
    readMinutes: 22,
    summary: "The scope and philosophy of obstetrical nursing, what makes an obstetric condition 'abnormal', the factors that predispose to complications, and the midwife-nurse's role and the legal/ethical framework governing obstetric emergency care in Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Scope of obstetrical nursing", p: "Obstetrical nursing is the specialised care of women through pregnancy (antenatal), labour and birth (intranatal), and the six weeks after birth (postnatal), together with care of the newborn. It blends promotive and preventive care of normal childbearing with the early recognition and management of deviations from normal. At degree level the nurse is expected not only to give hands-on care but to lead assessment, triage, referral, health education and audit, working within a multidisciplinary team and the wider maternal-health system." },
      { h: "Philosophy and aims", p: "Care is woman-centred, evidence-based, continuous and respectful. The overarching aim is a safe and satisfying childbirth for mother and baby with the fewest possible interventions, while being ready to escalate rapidly when danger arises. The nurse promotes normality, protects the woman's rights and dignity, and supports the family unit." },
      { h: "What is 'abnormal' obstetrics?", p: "An obstetric condition is abnormal when it deviates from the expected physiological course of pregnancy, labour or the puerperium and threatens the wellbeing of the mother, fetus or newborn. Abnormality may arise before pregnancy (pre-existing disease), during pregnancy (e.g. pre-eclampsia), during labour (e.g. obstructed labour), or after birth (e.g. postpartum haemorrhage). Recognising the boundary between normal and abnormal is the central clinical skill of the obstetric nurse." },
      { h: "Common abnormal obstetric conditions", p: "The major conditions studied in this course cluster into a few groups.", list: [
        "Haemorrhage — early-pregnancy bleeding (abortion, ectopic, molar), antepartum haemorrhage (placenta praevia, abruptio placentae) and postpartum haemorrhage.",
        "Hypertensive disorders — gestational hypertension, pre-eclampsia, eclampsia and HELLP.",
        "Abnormal labour — preterm, post-term, prolonged, obstructed and precipitate labour; malpresentation.",
        "Infection — chorioamnionitis, puerperal sepsis and septic abortion.",
        "Medical disorders complicating pregnancy — anaemia, diabetes, cardiac disease, thyroid, hepatitis, HIV.",
        "Emergencies — cord prolapse, ruptured uterus, shoulder dystocia, amniotic-fluid embolism, shock."
      ] },
      { h: "Factors influencing obstetric complications", p: "Complications rarely have a single cause; several predisposing factors interact.", list: [
        "Maternal age — teenage (<18 y) and elderly (>35 y) pregnancy carry higher risk.",
        "Parity — the primigravida and the grand multipara (para ≥5) are both at risk.",
        "Nutrition — anaemia and undernutrition, very common in Bangladesh, worsen outcomes.",
        "Obstetric history — previous caesarean, stillbirth, PPH, pre-eclampsia or preterm birth.",
        "Existing disease — hypertension, diabetes, heart or kidney disease, infection.",
        "Socio-economic and system factors — poverty, illiteracy, early marriage, distance from care, and the 'three delays' in seeking, reaching and receiving care."
      ] },
      { h: "The three-delays model", p: "Maternal deaths are usefully analysed through Thaddeus and Maine's three delays: (1) delay in deciding to seek care (lack of awareness, cost, gender norms); (2) delay in reaching a facility (transport, distance, roads); and (3) delay in receiving adequate care once at the facility (staffing, supplies, skills). Nursing action — health education, birth-preparedness planning and efficient triage — reduces all three." },
      { h: "Role of the obstetric nurse in abnormal obstetrics", p: "The nurse's role spans the whole pathway of an abnormal case.", list: [
        "Screening and risk assessment at booking and each antenatal contact.",
        "Vigilant monitoring to detect early deviations (vital signs, urine, fetal heart, labour progress).",
        "First-line/first-aid management of emergencies before medical help arrives.",
        "Timely, well-documented referral and safe transport to emergency obstetric care.",
        "Health education, counselling and psychological support of woman and family.",
        "Accurate record-keeping and participation in maternal-death and near-miss review."
      ] },
      { h: "Levels of care & EmOC", p: "Maternal services are organised in levels. Basic Emergency Obstetric Care (BEmOC) provides seven signal functions: parenteral antibiotics, parenteral uterotonics, parenteral anticonvulsants (MgSO4), manual removal of placenta, removal of retained products, assisted vaginal birth, and basic newborn resuscitation. Comprehensive EmOC (CEmOC) adds caesarean section and blood transfusion. Knowing what each level can and cannot do determines where a complicated case must be referred." },
      { h: "The maternal-health system in Bangladesh", p: "Care is delivered through community clinics and family-welfare centres at ward/union level, upazila health complexes (many providing CEmOC), district and medical-college hospitals, alongside a large private and NGO sector. Community skilled birth attendants and health assistants link women to facilities. The obstetric nurse must understand this pyramid so referrals move a woman up to the right level without delay." },
      { h: "Legal issues in obstetric emergencies", p: "Legally the nurse must obtain valid informed consent (except in a life-threatening emergency where implied consent to preserve life applies), practise only within her scope and competence, maintain confidentiality, and keep contemporaneous, accurate records — which are legal documents admissible in court. Negligence (a breach of the duty of care causing harm) and failure to refer are the commonest grounds for medico-legal claims in maternity." },
      { h: "Ethical principles", p: "The four bioethical principles guide practice: autonomy (the woman decides, having been informed), beneficence (act in her best interest), non-maleficence (do no harm) and justice (fair, equitable care regardless of wealth or status). In emergencies these can conflict — e.g. a refusal of a life-saving caesarean pits autonomy against beneficence — and must be worked through with the team, respecting the competent woman's decision." },
      { h: "Respectful maternity care & rights", p: "Every woman has a right to dignified, respectful care free of abuse, discrimination and neglect; to information and choice; to privacy and confidentiality; and to companionship in labour where possible. Disrespect and abuse are themselves a barrier that deters women from facility birth, so respectful care is both an ethical duty and a public-health strategy." },
      { h: "Documentation & the partograph", p: "Sound documentation underpins safe abnormal-obstetric care: the antenatal card, the partograph (which plots cervical dilatation against time with alert and action lines to detect abnormal labour early), fluid-balance and drug charts, and the referral note. Complete records support continuity, medico-legal defence and quality audit." },
      { h: "Key figures to remember", list: [
        "Teenage pregnancy = age <18–20 y; elderly primigravida = first pregnancy at ≥35 y; grand multipara = para ≥5.",
        "BEmOC = 7 signal functions; CEmOC = 9 (adds caesarean + transfusion).",
        "Three delays: deciding to seek, reaching, receiving care.",
        "Four bioethical principles: autonomy, beneficence, non-maleficence, justice.",
        "The partograph action line signals the need to intervene or refer."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Define obstetrical nursing and outline its scope and guiding philosophy.",
      "Enumerate the factors that predispose a woman to obstetric complications and relate them to the Bangladesh context.",
      "Explain the 'three delays' model and describe nursing actions that reduce each delay.",
      "Differentiate BEmOC from CEmOC and explain how knowledge of levels of care guides referral.",
      "Discuss the legal and ethical responsibilities of the nurse in an obstetric emergency."
    ],
    assessment: [
      { type: "mcq", q: "A woman is described as a 'grand multipara' when her parity is:", options: ["2 or more", "3 or more", "5 or more", "7 or more"], answer: 2, rationale: "Grand multipara conventionally denotes a woman who has given birth 5 or more times." },
      { type: "mcq", q: "Which of the following is a signal function of Comprehensive EmOC but NOT of Basic EmOC?", options: ["Parenteral MgSO4", "Manual removal of placenta", "Caesarean section", "Assisted vaginal birth"], answer: 2, rationale: "CEmOC adds caesarean section and blood transfusion to the seven basic signal functions." },
      { type: "mcq", q: "The 'second delay' in the three-delays model refers to a delay in:", options: ["Deciding to seek care", "Reaching a health facility", "Receiving adequate care at the facility", "Being discharged"], answer: 1, rationale: "The second delay is in reaching care — transport, distance and roads." },
      { type: "mcq", q: "The ethical principle most directly challenged when a competent woman refuses a life-saving caesarean is:", options: ["Justice", "Autonomy versus beneficence", "Non-maleficence only", "Confidentiality"], answer: 1, rationale: "Her right to decide (autonomy) conflicts with the duty to act in her interest (beneficence)." },
      { type: "mcq", q: "The tool that plots cervical dilatation against time to detect abnormal labour early is the:", options: ["Bishop score", "Partograph", "Apgar chart", "Growth chart"], answer: 1, rationale: "The partograph graphs labour progress with alert and action lines." },
      { type: "mcq", q: "An 'elderly primigravida' is a woman having her first baby at age:", options: ["≥25 years", "≥30 years", "≥35 years", "≥40 years"], answer: 2, rationale: "First pregnancy at 35 years or older defines the elderly primigravida." },
      { type: "mcq", q: "Which condition is a cause of antepartum haemorrhage?", options: ["Threatened abortion", "Placenta praevia", "Postpartum haemorrhage", "Puerperal sepsis"], answer: 1, rationale: "Placenta praevia (with abruptio placentae) is a classic cause of antepartum haemorrhage." },
      { type: "mcq", q: "In a life-threatening emergency when the woman cannot consent, the nurse proceeds under:", options: ["Written consent", "Implied consent to preserve life", "No legal basis", "Family veto only"], answer: 1, rationale: "Life-saving treatment may proceed under the doctrine of implied/emergency consent." },
      { type: "mcq", q: "Respectful maternity care is important because disrespect and abuse:", options: ["Speed up labour", "Deter women from facility birth", "Reduce infection", "Are legally required"], answer: 1, rationale: "Disrespectful care is a barrier that keeps women away from skilled facility birth." },
      { type: "mcq", q: "Which is NOT one of the four classic bioethical principles?", options: ["Autonomy", "Beneficence", "Profitability", "Justice"], answer: 2, rationale: "The four principles are autonomy, beneficence, non-maleficence and justice." },
      { type: "fill", q: "Basic Emergency Obstetric Care comprises ____ signal functions.", accept: ["seven", "7"], rationale: "BEmOC has seven signal functions; CEmOC adds two more." },
      { type: "fill", q: "The parenteral anticonvulsant used for eclampsia as a BEmOC signal function is ____.", accept: ["magnesium sulphate", "MgSO4", "magnesium sulfate"], rationale: "Magnesium sulphate is the drug of choice for eclampsia and a signal function of BEmOC." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "gyn-02-risk-detection",
    unit: "Unit 1 · Obstetric Risk & Emergencies",
    title: "Risk Assessment & Early Detection of Obstetric Complications",
    readMinutes: 22,
    summary: "How to screen for high-risk pregnancy, apply risk-scoring, recognise the antenatal and intrapartum danger signs, and use antenatal surveillance and structured escalation to detect and act on complications early.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept of risk in pregnancy", p: "A 'high-risk pregnancy' is one in which a factor in the mother, fetus or pregnancy increases the likelihood of an adverse outcome for either mother or baby. Because up to a third of complications arise in women with no identifiable risk factor, risk assessment must be continuous — repeated at every contact — and coupled with universal readiness for emergencies, not a one-off label at booking." },
      { h: "Purposes of risk assessment", list: [
        "Identify women needing closer surveillance or specialist care.",
        "Decide the appropriate place of birth (home, BEmOC or CEmOC facility).",
        "Plan timing and mode of birth.",
        "Focus scarce resources on those most likely to benefit.",
        "Empower the woman and family through birth-preparedness and complication-readiness planning."
      ] },
      { h: "History-based risk factors", p: "A thorough history at booking uncovers most known risks.", list: [
        "Demographic — age <18 or >35 y, short stature (<145 cm), very low or high BMI.",
        "Obstetric — previous caesarean, stillbirth, neonatal death, PPH, pre-eclampsia, preterm birth, or three or more miscarriages.",
        "Medical — hypertension, diabetes, cardiac, renal or thyroid disease, epilepsy, anaemia, thalassaemia.",
        "Current pregnancy — multiple pregnancy, malpresentation, Rh-negative, bleeding, reduced fetal movements.",
        "Social — poverty, illiteracy, domestic violence, substance use, no antenatal care."
      ] },
      { h: "Examination and investigation findings", p: "Clinical assessment adds objective risk markers.", list: [
        "Blood pressure ≥140/90 mmHg or a rise from booking.",
        "Proteinuria, glycosuria or oedema of the face and hands.",
        "Fundal height discordant with dates (large- or small-for-dates).",
        "Pallor, low haemoglobin (anaemia), abnormal blood group.",
        "Abnormal lie or presentation after 36 weeks, or an unengaged head in a primigravida at term."
      ] },
      { h: "Risk-scoring systems", p: "Formal scoring tools (for example those attaching weighted points to factors such as previous caesarean, hypertension or grand multiparity) sum a woman's factors into a low/medium/high category to guide referral. Scoring aids consistency and communication, but has limited sensitivity and specificity — many high scorers deliver normally and some low scorers develop emergencies — so it supplements, never replaces, ongoing clinical judgement." },
      { h: "Antenatal danger signs", p: "Every pregnant woman and family must be taught the danger signs that demand immediate attention.", list: [
        "Vaginal bleeding at any time in pregnancy.",
        "Severe headache, blurred vision or convulsions (pre-eclampsia/eclampsia).",
        "High fever.",
        "Severe abdominal pain.",
        "Reduced or absent fetal movements.",
        "Sudden gush or continuous leaking of fluid from the vagina.",
        "Swelling of the face, hands or fingers; persistent vomiting."
      ] },
      { h: "Intrapartum warning signs", p: "During labour, deviations signalling danger include prolonged labour (partograph crossing the action line), maternal fever or tachycardia, hypertension, heavy bleeding, meconium-stained liquor, an abnormal fetal heart rate (<110 or >160 bpm, or decelerations), and a poorly progressing or arrested descent — each prompting reassessment and possible referral." },
      { h: "Postnatal warning signs", p: "Early puerperal danger signs include heavy or offensive lochia, fever, calf pain or swelling (thromboembolism), severe headache or seizures (late eclampsia), breast infection, and low mood or thoughts of self-harm. Teaching these before discharge enables timely return." },
      { h: "Antenatal surveillance methods", p: "Ongoing surveillance detects the fetus or mother whose condition is deteriorating.", list: [
        "Serial blood-pressure and urine testing for pre-eclampsia.",
        "Symphysis-fundal height measurement and, where available, growth ultrasound for fetal growth.",
        "Fetal-movement counting ('kick chart').",
        "Auscultation of the fetal heart; cardiotocography (CTG) in high-risk cases.",
        "Doppler ultrasound of umbilical artery in growth restriction.",
        "Repeat haemoglobin and blood-sugar screening."
      ] },
      { h: "Early identification and escalation", p: "Early detection is worthless without a reliable response. Structured escalation uses a defined chain: recognise the abnormal sign → increase monitoring → inform the senior/medical officer → prepare for referral or intervention → act within a defined time. Delays at this step are a leading contributor to the 'third delay'." },
      { h: "Modified obstetric early-warning score (MEOWS)", p: "MEOWS is a colour-coded chart that tracks maternal respiratory rate, oxygen saturation, temperature, blood pressure, heart rate, level of consciousness and urine output. A single markedly abnormal ('red') value, or two 'amber' values, triggers urgent senior review. It standardises the detection of the deteriorating mother and reduces reliance on individual intuition.", figure: {
        caption: "Principle of an early-warning trigger: normal (green) parameters need routine observation; a single red or two amber values trigger urgent escalation.",
        svg: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Early warning score escalation"><rect x="20" y="30" width="140" height="90" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="90" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">GREEN</text><text x="90" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Normal —</text><text x="90" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">routine obs</text><rect x="190" y="30" width="140" height="90" rx="8" fill="#FEF9C3" stroke="#CA8A04"/><text x="260" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#854D0E">AMBER</text><text x="260" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#854D0E">2 values →</text><text x="260" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#854D0E">review</text><rect x="360" y="30" width="140" height="90" rx="8" fill="#FEE2E2" stroke="#B91C1C"/><text x="430" y="60" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#991B1B">RED</text><text x="430" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991B1B">1 value →</text><text x="430" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#991B1B">urgent escalation</text><text x="260" y="150" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#334155">Trigger → inform senior → act</text></svg>'
      } },
      { h: "Birth-preparedness & complication-readiness", p: "A key preventive nursing intervention is helping each family make a plan: identify the place of birth and a skilled attendant, save money, arrange transport, name a blood donor, and know the danger signs and where to go. This planning directly attacks the first two delays and is standard antenatal counselling in Bangladesh's community programmes." },
      { h: "Nursing responsibilities in risk assessment", list: [
        "Take a complete history and perform systematic examination at each visit.",
        "Apply the local risk-screening tool and reassess continuously.",
        "Teach danger signs and confirm the woman can recite them.",
        "Maintain the antenatal card and communicate risk clearly at handover.",
        "Ensure the woman with risk factors is booked at an appropriate facility."
      ] },
      { h: "Key values to remember", list: [
        "Booking BP ≥140/90 mmHg = hypertension; investigate for pre-eclampsia.",
        "Fetal heart normal range 110–160 bpm.",
        "Short stature <145 cm is a marker for cephalopelvic disproportion.",
        "Three or more consecutive miscarriages = recurrent (habitual) abortion.",
        "MEOWS: one red or two amber parameters triggers urgent review."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Define high-risk pregnancy and explain why risk assessment must be continuous rather than a single event.",
      "List the antenatal danger signs every pregnant woman should be taught and the action for each.",
      "Discuss the value and limitations of formal risk-scoring systems in antenatal care.",
      "Describe the methods of antenatal fetal surveillance available in Bangladesh.",
      "Explain birth-preparedness and complication-readiness and its role in reducing maternal delays."
    ],
    assessment: [
      { type: "mcq", q: "The normal fetal heart rate range at term is:", options: ["80–100 bpm", "110–160 bpm", "160–200 bpm", "60–80 bpm"], answer: 1, rationale: "A normal baseline fetal heart rate is 110–160 beats per minute." },
      { type: "mcq", q: "Which antenatal sign most strongly suggests pre-eclampsia?", options: ["Mild ankle oedema", "Severe headache with blurred vision", "Occasional heartburn", "Backache"], answer: 1, rationale: "Severe headache and visual disturbance are warning signs of severe pre-eclampsia/imminent eclampsia." },
      { type: "mcq", q: "Short maternal stature that flags possible cephalopelvic disproportion is defined as height below:", options: ["135 cm", "140 cm", "145 cm", "155 cm"], answer: 2, rationale: "Height under about 145 cm is a recognised risk marker for CPD." },
      { type: "mcq", q: "A major limitation of formal risk-scoring in pregnancy is that:", options: ["It is too expensive", "Many complications occur in low-scoring women", "It requires ultrasound", "It cannot be used antenatally"], answer: 1, rationale: "Scoring has limited sensitivity — a large share of emergencies arise in apparently low-risk women." },
      { type: "mcq", q: "Recurrent (habitual) abortion is defined as consecutive spontaneous losses numbering:", options: ["Two or more", "Three or more", "Four or more", "Five or more"], answer: 1, rationale: "Three or more consecutive spontaneous miscarriages define recurrent abortion." },
      { type: "mcq", q: "In a MEOWS chart, urgent senior review is triggered by:", options: ["Any one green value", "One red or two amber values", "Only three red values", "A normal urine output"], answer: 1, rationale: "A single red parameter or two amber parameters triggers escalation." },
      { type: "mcq", q: "Booking blood pressure that defines hypertension in pregnancy is:", options: ["≥120/80 mmHg", "≥130/85 mmHg", "≥140/90 mmHg", "≥160/110 mmHg"], answer: 2, rationale: "A BP of 140/90 mmHg or higher defines hypertension; 160/110 defines severe." },
      { type: "mcq", q: "Birth-preparedness planning most directly reduces which delays?", options: ["Only the third delay", "The first and second delays", "None of the delays", "Only postnatal delays"], answer: 1, rationale: "Planning place of birth, money and transport addresses the delays in deciding and reaching care." },
      { type: "mcq", q: "Reduced fetal movements should be regarded as:", options: ["A normal late-pregnancy finding needing no action", "A danger sign requiring assessment", "A sign of labour onset only", "Evidence of twins"], answer: 1, rationale: "Reduced or absent fetal movements is a danger sign warranting fetal assessment." },
      { type: "mcq", q: "Which is an appropriate method of antenatal fetal surveillance?", options: ["Symphysis-fundal height measurement", "Routine caesarean", "Oxytocin infusion", "Episiotomy"], answer: 0, rationale: "Serial SFH measurement monitors fetal growth as part of surveillance." },
      { type: "fill", q: "Up to about one-____ of obstetric complications occur in women with no identifiable risk factor, so readiness must be universal.", accept: ["third", "3rd"], rationale: "A substantial share of complications arise in apparently low-risk women, justifying universal preparedness." },
      { type: "fill", q: "A colour-coded maternal chart tracking vital signs to detect deterioration is the ____ (abbreviation).", accept: ["MEOWS", "modified obstetric early warning score"], rationale: "MEOWS = Modified Obstetric Early Warning Score." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "gyn-03-emergency-referral",
    unit: "Unit 1 · Obstetric Risk & Emergencies",
    title: "Management of Obstetric Emergencies & the Bangladesh Referral System",
    readMinutes: 24,
    summary: "The recognition and first-line management of the major life-threatening obstetric emergencies — PPH, eclampsia, obstructed labour, sepsis, ruptured uterus and shock — and the principles of EmOC, the Bangladesh referral chain, safe transport and documentation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is an obstetric emergency?", p: "An obstetric emergency is a sudden, life-threatening condition arising in pregnancy, labour or the puerperium that demands immediate action to save the mother, fetus or both. The leading direct causes of maternal death worldwide and in Bangladesh — haemorrhage, hypertensive disorders (eclampsia), sepsis, obstructed labour and complications of abortion — are all emergencies whose outcome depends on how fast and how well the first responder acts." },
      { h: "General principles of first response", p: "Whatever the emergency, a common structured approach saves lives.", list: [
        "Call for help immediately — never manage a serious emergency alone.",
        "Rapid ABC assessment — airway, breathing, circulation.",
        "Position, keep warm, give oxygen and start large-bore IV access.",
        "Treat the specific cause while resuscitating.",
        "Arrange urgent referral to EmOC if the facility cannot manage it.",
        "Communicate with and support the woman and family; document everything."
      ] },
      { h: "Postpartum haemorrhage (PPH)", p: "PPH is blood loss of ≥500 mL after vaginal birth (≥1000 mL after caesarean) or any loss causing haemodynamic compromise. The commonest cause is uterine atony (the '4 Ts' — Tone, Trauma, Tissue, Thrombin). First-line management: call for help, rub up a contraction (uterine massage), give a uterotonic (oxytocin 10 IU IM/IV, then infusion; misoprostol where oxytocin unavailable), empty the bladder, ensure the placenta is complete, start IV fluids, and apply bimanual compression while arranging transfusion or theatre." },
      { h: "Eclampsia", p: "Eclampsia is the occurrence of generalised convulsions in a woman with pre-eclampsia. Management: protect the airway and prevent injury during the fit, place in the left lateral position, give oxygen, and control seizures with magnesium sulphate (loading then maintenance regimen). Control severe hypertension (e.g. with labetalol, hydralazine or nifedipine), monitor for MgSO4 toxicity, and expedite birth once the mother is stabilised — the definitive treatment is delivery." },
      { h: "Obstructed labour", p: "Obstructed labour occurs when, despite good contractions, the fetus cannot descend because of cephalopelvic disproportion, malpresentation or a pelvic obstruction. Signs include prolonged labour, a distressed and dehydrated mother, a tonically contracted uterus with a Bandl's ring, and fetal distress. Management is not to push oxytocin but to rehydrate, catheterise, give antibiotics and refer urgently for caesarean; unrelieved obstruction leads to ruptured uterus and obstetric fistula." },
      { h: "Ruptured uterus", p: "Rupture of the uterus — most often from obstructed labour or a scarred (previous caesarean) uterus — presents with sudden severe abdominal pain, cessation of contractions, easily palpable fetal parts, vaginal bleeding, fetal death and maternal shock. It is a surgical emergency: resuscitate aggressively with fluids and blood, give antibiotics and refer/operate immediately for laparotomy (repair or hysterectomy)." },
      { h: "Puerperal & maternal sepsis", p: "Maternal sepsis is life-threatening organ dysfunction from infection during pregnancy, birth or the puerperium, classically presenting with fever, tachycardia, offensive lochia, abdominal pain and a rising respiratory rate. The 'Sepsis Six' principle — take blood cultures and lactate, measure urine output, give oxygen, IV broad-spectrum antibiotics and IV fluids — must be started within the first hour ('golden hour'), alongside source control and referral." },
      { h: "Obstetric shock", p: "Shock is acute circulatory failure with inadequate tissue perfusion. In obstetrics it is usually hypovolaemic (from haemorrhage) but may be septic, cardiogenic or, rarely, from amniotic-fluid embolism. Signs: pallor, cold clammy skin, rapid thready pulse, falling blood pressure, air hunger and reduced urine output. Management: lay flat with legs raised, keep warm, high-flow oxygen, two large-bore cannulae with rapid crystalloid then blood, treat the cause, and refer for CEmOC." },
      { h: "The estimation-of-blood-loss trap", p: "Blood loss is habitually underestimated by eye. The young, fit obstetric patient compensates well and maintains her blood pressure until she has lost a large volume, then collapses suddenly. The nurse should therefore watch the pulse and respiratory rate (which rise early), use the shock index (pulse rate ÷ systolic BP; >0.9 is concerning) and weigh swabs where possible, rather than waiting for hypotension." },
      { h: "Concept of EmOC in the emergency", p: "Effective emergency care requires the signal functions of EmOC to be immediately available. A BEmOC facility can give uterotonics, anticonvulsants and antibiotics, remove a placenta and perform assisted birth; a case needing caesarean, laparotomy or transfusion must reach a CEmOC facility. Recognising which signal function a woman needs tells the nurse whether to treat on site or refer up." },
      { h: "The Bangladesh referral chain", p: "Referral moves the woman up the service pyramid to the level that can manage her.", list: [
        "Community clinic / family-welfare centre — first contact; stabilise and refer.",
        "Union health & family-welfare centre — some provide BEmOC.",
        "Upazila health complex — many provide CEmOC (caesarean, transfusion).",
        "District hospital and medical-college hospital — full comprehensive and specialist care.",
        "Private and NGO facilities supplement the public system throughout."
      ] },
      { h: "Principles of safe referral & transport", p: "A safe referral is stabilise-and-transfer, not 'scoop and run'.", list: [
        "Resuscitate and stabilise as far as possible before moving.",
        "Communicate ahead so the receiving unit is ready ('call before you send').",
        "Send a trained escort who can continue care en route.",
        "Continue IV fluids, oxygen and monitoring during transport; keep warm and left-lateral.",
        "Carry a complete referral note and the antenatal record.",
        "Use the fastest safe transport available and reassess on arrival."
      ], figure: {
        caption: "The stabilise-and-refer pathway from community level up to comprehensive emergency obstetric care.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Obstetric referral pathway"><rect x="10" y="70" width="110" height="46" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="65" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Community</text><text x="65" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">clinic</text><rect x="150" y="70" width="110" height="46" rx="6" fill="#BBF7D0" stroke="#15803D"/><text x="205" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Union centre</text><text x="205" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">(BEmOC)</text><rect x="290" y="70" width="110" height="46" rx="6" fill="#86EFAC" stroke="#15803D"/><text x="345" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Upazila HC</text><text x="345" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">(CEmOC)</text><rect x="430" y="70" width="120" height="46" rx="6" fill="#22C55E" stroke="#0F4C3A"/><text x="490" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">District /</text><text x="490" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">medical college</text><polygon points="120,93 150,93 142,87 142,99" fill="#0F4C3A"/><polygon points="260,93 290,93 282,87 282,99" fill="#0F4C3A"/><polygon points="400,93 430,93 422,87 422,99" fill="#0F4C3A"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Stabilise → communicate ahead → escort → transport</text></svg>'
      } },
      { h: "Documentation of the emergency", p: "Every emergency must be documented contemporaneously: the time and nature of onset, observations, drugs (name, dose, route, time), fluids, procedures, who was informed and when, the referral decision and the woman's condition on transfer. This record supports continuity, medico-legal defence and later maternal-death or near-miss review." },
      { h: "Prevention & preparedness", p: "Emergencies are best managed by preventing them (antenatal care, danger-sign education, birth planning) and by being ready when they occur — emergency drills, a stocked emergency tray/box (uterotonics, MgSO4, IV fluids, cannulae), clear protocols, and a functioning referral and blood-supply system. Regular skills-and-drills training sharpens the whole team's response." },
      { h: "Key values to remember", list: [
        "PPH = blood loss ≥500 mL (vaginal) / ≥1000 mL (caesarean) or any loss causing compromise.",
        "Oxytocin for PPH: 10 IU IM/IV, then infusion; misoprostol as an alternative.",
        "MgSO4 is first-line for eclampsia; monitor reflexes, respiration, urine output.",
        "Shock index = pulse ÷ systolic BP; >0.9 is concerning.",
        "Sepsis Six should be delivered within the first (golden) hour."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Outline the general structured first-response to any obstetric emergency.",
      "Describe the immediate management of postpartum haemorrhage due to uterine atony.",
      "Explain the emergency management of a woman having an eclamptic fit.",
      "Discuss the principles of safe obstetric referral and transport in Bangladesh.",
      "Why is blood loss commonly underestimated, and how can the nurse detect early shock?"
    ],
    assessment: [
      { type: "mcq", q: "The commonest cause of primary postpartum haemorrhage is:", options: ["Genital tract trauma", "Retained tissue", "Uterine atony", "Coagulation failure"], answer: 2, rationale: "Atony (poor 'Tone', the first of the 4 Ts) causes most PPH." },
      { type: "mcq", q: "The first-line drug for controlling eclamptic convulsions is:", options: ["Diazepam", "Phenytoin", "Magnesium sulphate", "Hydralazine"], answer: 2, rationale: "Magnesium sulphate is the anticonvulsant of choice in eclampsia." },
      { type: "mcq", q: "In obstructed labour, a tonically retracted upper segment with a visible depression is called:", options: ["Braxton-Hicks ring", "Bandl's ring", "Constriction ring", "Retraction ring of Schroeder"], answer: 1, rationale: "Bandl's ring, a pathological retraction ring, warns of impending uterine rupture in obstruction." },
      { type: "mcq", q: "Postpartum haemorrhage after vaginal birth is defined as blood loss of at least:", options: ["250 mL", "500 mL", "750 mL", "1500 mL"], answer: 1, rationale: "PPH after vaginal birth is defined as ≥500 mL." },
      { type: "mcq", q: "The correct position for a woman during an eclamptic convulsion is:", options: ["Supine flat", "Left lateral", "Sitting upright", "Prone"], answer: 1, rationale: "The left lateral position protects the airway and improves placental perfusion." },
      { type: "mcq", q: "The shock index is calculated as:", options: ["Systolic BP ÷ pulse", "Pulse ÷ systolic BP", "Pulse × BP", "Diastolic BP ÷ pulse"], answer: 1, rationale: "Shock index = heart rate divided by systolic blood pressure; >0.9 suggests significant compromise." },
      { type: "mcq", q: "Which facility level is required for a woman needing an emergency caesarean and transfusion?", options: ["Community clinic", "BEmOC facility", "CEmOC facility", "Family-welfare centre"], answer: 2, rationale: "Caesarean and blood transfusion are functions of Comprehensive EmOC." },
      { type: "mcq", q: "A key principle of safe referral is to:", options: ["Send the woman alone to save staff", "Transport before any resuscitation", "Stabilise and communicate ahead before transfer", "Delay until daylight"], answer: 2, rationale: "Safe referral means stabilise, call ahead, and escort — not 'scoop and run'." },
      { type: "mcq", q: "In young obstetric patients, blood pressure typically falls:", options: ["Very early in haemorrhage", "Only after substantial blood loss", "Never in haemorrhage", "Before the pulse rises"], answer: 1, rationale: "Fit women compensate and maintain BP until large losses, then decompensate suddenly." },
      { type: "mcq", q: "The 'Sepsis Six' should ideally be completed within:", options: ["The first hour", "Six hours", "Twelve hours", "Twenty-four hours"], answer: 0, rationale: "The Sepsis Six bundle is delivered within the first ('golden') hour of recognition." },
      { type: "fill", q: "The four causes of PPH are remembered as the four ____: Tone, Trauma, Tissue and Thrombin.", accept: ["Ts", "T's", "T"], rationale: "The 4 Ts summarise the causes of postpartum haemorrhage." },
      { type: "fill", q: "Unrelieved obstructed labour can rupture the uterus and later cause an obstetric ____ (abnormal opening leaking urine or faeces).", accept: ["fistula", "vesicovaginal fistula"], rationale: "Prolonged pressure necrosis in obstructed labour causes obstetric fistula." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "gyn-04-gynae-menstrual",
    unit: "Unit 2 · Gynaecological Disorders",
    title: "Concept of Gynaecology & the Menstrual Cycle",
    readMinutes: 22,
    summary: "The scope of gynaecological nursing, a review of female reproductive anatomy, and the physiology of the menstrual cycle — its ovarian and endometrial phases and hormonal control — together with menarche, normal menstruation and menstrual hygiene.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Scope of gynaecology & gynaecological nursing", p: "Gynaecology is the branch of medicine dealing with the health of the female reproductive system outside pregnancy. Gynaecological nursing cares for women with disorders of menstruation, infection, benign and malignant tumours, infertility, prolapse and the changes of menopause, across the lifespan. It integrates physical care with counselling, health education, screening and support around often sensitive, private concerns." },
      { h: "Review of female reproductive anatomy", p: "The internal organs are the two ovaries, two fallopian tubes, the uterus and the vagina; the external genitalia (vulva) comprise the mons pubis, labia majora and minora, clitoris and vestibule.", list: [
        "Ovary — produces ova and the hormones oestrogen and progesterone.",
        "Fallopian tube — captures the ovum and is the usual site of fertilisation.",
        "Uterus — a muscular organ with fundus, body and cervix; its lining (endometrium) sheds as menstruation.",
        "Cervix — the neck of the uterus; site of Pap smear and of most cervical cancer.",
        "Vagina — the birth canal and organ of coitus."
      ] },
      { h: "The hypothalamic-pituitary-ovarian axis", p: "Menstruation is governed by a hormonal cascade. The hypothalamus releases gonadotrophin-releasing hormone (GnRH) in pulses; this stimulates the anterior pituitary to secrete follicle-stimulating hormone (FSH) and luteinising hormone (LH); these act on the ovary to develop follicles and produce oestrogen and progesterone, which in turn feed back to the brain. Disruption anywhere along this axis disturbs the cycle." },
      { h: "Overview of the menstrual cycle", p: "The menstrual cycle is the recurring, roughly 28-day (range 21–35 day) sequence that prepares the body for a possible pregnancy. It is described in two parallel sets of changes — in the ovary (follicular, ovulatory, luteal) and in the endometrium (menstrual, proliferative, secretory) — driven by the same hormones. Day 1 is the first day of bleeding." },
      { h: "Ovarian cycle — follicular phase", p: "In the follicular (pre-ovulatory) phase, rising FSH stimulates several ovarian follicles, of which one becomes dominant. The developing follicle secretes increasing oestrogen. This phase is variable in length and accounts for most of the variation in cycle length between women." },
      { h: "Ovarian cycle — ovulation & luteal phase", p: "A surge of LH (triggered by high oestrogen) ruptures the mature (Graafian) follicle, releasing the ovum about day 14 — ovulation. The empty follicle becomes the corpus luteum, which secretes progesterone (and oestrogen) to maintain the endometrium. The luteal phase is fairly constant at about 14 days; if no pregnancy occurs the corpus luteum regresses, hormone levels fall and menstruation follows." },
      { h: "Endometrial cycle", p: "The endometrium changes in step with the ovary.", list: [
        "Menstrual phase (days 1–5) — the endometrium is shed as menstrual flow when hormones fall.",
        "Proliferative phase (days 6–14) — oestrogen makes the endometrium regrow and thicken.",
        "Secretory phase (days 15–28) — progesterone from the corpus luteum makes the endometrium glandular and rich in nutrients, ready for implantation."
      ], figure: {
        caption: "The menstrual cycle: pituitary hormones (FSH/LH), the ovarian follicle→corpus luteum sequence, and the endometrial thickness across ~28 days.",
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Menstrual cycle phases"><line x1="40" y1="200" x2="540" y2="200" stroke="#334155" stroke-width="1.5"/><text x="40" y="220" font-family="sans-serif" font-size="10" fill="#334155">Day 1</text><text x="280" y="220" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#334155">Day 14 (ovulation)</text><text x="540" y="220" text-anchor="end" font-family="sans-serif" font-size="10" fill="#334155">Day 28</text><path d="M40 150 Q160 60 280 70" fill="none" stroke="#22C55E" stroke-width="2.5"/><text x="90" y="70" font-family="sans-serif" font-size="10" fill="#15803D">Oestrogen</text><path d="M300 150 Q380 60 440 90 Q500 110 540 150" fill="none" stroke="#0F4C3A" stroke-width="2.5"/><text x="420" y="60" font-family="sans-serif" font-size="10" fill="#0F4C3A">Progesterone</text><line x1="280" y1="40" x2="280" y2="200" stroke="#B91C1C" stroke-dasharray="4 3"/><rect x="40" y="175" width="60" height="25" fill="#FEE2E2" stroke="#B91C1C"/><text x="70" y="192" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#991B1B">Menses</text><rect x="100" y="165" width="180" height="35" fill="#DCFCE7"/><text x="190" y="187" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">Proliferative</text><rect x="280" y="160" width="260" height="40" fill="#BBF7D0"/><text x="410" y="184" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">Secretory</text></svg>'
      } },
      { h: "Hormonal control summary", p: "Oestrogen dominates the first half of the cycle (proliferation, the LH surge and ovulation); progesterone dominates the second half (secretory endometrium, raised basal body temperature). Falling oestrogen and progesterone at the end of an unfertilised cycle trigger menstruation. If fertilisation occurs, the embryo's hCG rescues the corpus luteum so progesterone is maintained and menstruation is suppressed." },
      { h: "Menarche", p: "Menarche is the first menstrual period, occurring around 12–13 years (range 10–16) as part of puberty, after the development of breasts and pubic hair. Early cycles are often anovulatory and irregular. Menarche much before 8 years (precocious) or absence of periods by 16 years (primary amenorrhoea) needs evaluation." },
      { h: "Characteristics of normal menstruation", list: [
        "Cycle length — 21 to 35 days (average 28).",
        "Duration of flow — 2 to 7 days (average 4–5).",
        "Blood loss — about 30–80 mL per period; loss over 80 mL is abnormal.",
        "The blood is usually non-clotting owing to fibrinolysins in the endometrium.",
        "Menstruation continues from menarche to menopause except during pregnancy and lactation."
      ] },
      { h: "Menstrual hygiene", p: "Good menstrual hygiene prevents infection and preserves dignity. It includes using a clean absorbent (sanitary pad or clean cloth) changed 4–6 hourly, washing the genitals with clean water and drying front to back, safe disposal of used materials, adequate rest and normal activity. In Bangladesh, taboos, poverty and lack of facilities and information make menstrual-hygiene education a priority nursing role for adolescents." },
      { h: "Menstrual disorders overview", p: "Deviations from normal menstruation — absence (amenorrhoea), excessive or prolonged flow (menorrhagia), irregular bleeding (metrorrhagia), painful periods (dysmenorrhoea) and infrequent periods (oligomenorrhoea) — are common gynaecological complaints and are studied in detail in a later topic. They reflect disturbance of the hormonal axis, structural lesions or systemic disease." },
      { h: "Nursing role in menstrual health", list: [
        "Teach adolescents the normal facts of menstruation and dispel myths.",
        "Promote menstrual hygiene and access to sanitary materials.",
        "Take a careful menstrual history (LMP, cycle, flow, pain).",
        "Recognise and refer abnormal patterns.",
        "Provide reassurance and confidential, non-judgemental counselling."
      ] },
      { h: "Key values to remember", list: [
        "Cycle 21–35 days; flow 2–7 days; loss 30–80 mL.",
        "Ovulation ~day 14; the luteal phase is fixed at ~14 days.",
        "Menarche ~12–13 y; menopause ~45–55 y.",
        "LH surge triggers ovulation; hCG maintains the corpus luteum in pregnancy.",
        "Progesterone raises basal body temperature after ovulation."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Describe the hypothalamic-pituitary-ovarian axis and its control of the menstrual cycle.",
      "Explain the ovarian and endometrial phases of the menstrual cycle with their governing hormones.",
      "State the characteristics of normal menstruation.",
      "Discuss menstrual hygiene and the nurse's educational role among adolescents in Bangladesh.",
      "Define menarche and outline what is meant by precocious puberty and primary amenorrhoea."
    ],
    assessment: [
      { type: "mcq", q: "Ovulation is triggered by a surge of:", options: ["FSH", "LH", "Progesterone", "hCG"], answer: 1, rationale: "A mid-cycle LH surge ruptures the Graafian follicle to release the ovum." },
      { type: "mcq", q: "The hormone that dominates the secretory phase of the endometrium is:", options: ["Oestrogen", "FSH", "Progesterone", "GnRH"], answer: 2, rationale: "Progesterone from the corpus luteum produces the secretory endometrium." },
      { type: "mcq", q: "The average normal menstrual cycle length is about:", options: ["21 days", "28 days", "35 days", "40 days"], answer: 1, rationale: "The average cycle is 28 days, with a normal range of 21–35 days." },
      { type: "mcq", q: "In pregnancy, the corpus luteum is maintained by:", options: ["LH", "FSH", "hCG", "Oxytocin"], answer: 2, rationale: "Embryonic hCG rescues the corpus luteum so progesterone continues." },
      { type: "mcq", q: "Normal menstrual blood loss per period is approximately:", options: ["5–15 mL", "30–80 mL", "100–150 mL", "200–250 mL"], answer: 1, rationale: "Normal loss is about 30–80 mL; more than 80 mL is menorrhagia." },
      { type: "mcq", q: "The dominant follicle secretes increasing amounts of:", options: ["Progesterone", "Oestrogen", "hCG", "Prolactin"], answer: 1, rationale: "The developing follicle secretes rising oestrogen in the follicular phase." },
      { type: "mcq", q: "The luteal phase of the cycle is usually fixed at about:", options: ["7 days", "10 days", "14 days", "21 days"], answer: 2, rationale: "The luteal phase is relatively constant at around 14 days." },
      { type: "mcq", q: "Menarche most commonly occurs at the age of:", options: ["6–8 years", "9–10 years", "12–13 years", "17–18 years"], answer: 2, rationale: "The first period usually occurs around 12–13 years (range 10–16)." },
      { type: "mcq", q: "Which organ is the usual site of fertilisation?", options: ["Ovary", "Fallopian tube", "Uterine body", "Cervix"], answer: 1, rationale: "Fertilisation normally occurs in the ampulla of the fallopian tube." },
      { type: "mcq", q: "Basal body temperature after ovulation typically:", options: ["Falls", "Rises slightly", "Is unchanged", "Becomes irregular"], answer: 1, rationale: "Progesterone in the luteal phase causes a slight rise in basal body temperature." },
      { type: "fill", q: "The first menstrual period in a girl's life is called ____.", accept: ["menarche"], rationale: "Menarche is the onset of menstruation at puberty." },
      { type: "fill", q: "The hormone released in pulses by the hypothalamus to drive the cycle is ____ (abbreviation).", accept: ["GnRH", "gonadotrophin-releasing hormone", "gonadotropin-releasing hormone"], rationale: "GnRH from the hypothalamus stimulates pituitary FSH and LH release." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "gyn-05-inflammatory",
    unit: "Unit 2 · Gynaecological Disorders",
    title: "Inflammatory Gynaecological Disorders: Vulvitis, Vaginitis & PID",
    readMinutes: 22,
    summary: "The causes, clinical features, complications and management of infections of the lower genital tract (vulvitis, vaginitis, cervicitis) and of pelvic inflammatory disease, with the nurse's role in treatment, prevention and health education.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview & natural defences", p: "The lower genital tract normally resists infection through its acidic vaginal pH (about 3.8–4.5) maintained by lactobacilli, an intact epithelium and cervical mucus. Infection arises when these defences are disturbed — by antibiotics, douching, poor hygiene, sexual transmission, foreign bodies or oestrogen deficiency after menopause. Inflammation may involve the vulva (vulvitis), vagina (vaginitis), cervix (cervicitis) or ascend to the upper tract (PID)." },
      { h: "Vulvitis", p: "Vulvitis is inflammation of the vulva, presenting with itching, burning, redness, swelling and soreness. Causes include infection (candida, trichomonas), contact irritants (soaps, synthetic underwear), poor or over-vigorous hygiene, diabetes, and low oestrogen after menopause. Management targets the cause, keeps the area clean and dry, avoids irritants, and relieves itch." },
      { h: "Candidal vaginitis (thrush)", p: "Caused by the yeast Candida albicans, thrush produces intense vulvar itching with a thick, white, curdy ('cottage-cheese') non-offensive discharge and vulval redness; the vaginal pH stays normal. It is favoured by pregnancy, diabetes, antibiotics and immunosuppression. Treatment is with topical or oral antifungals (e.g. clotrimazole pessary, oral fluconazole), plus control of predisposing factors." },
      { h: "Bacterial vaginosis", p: "Bacterial vaginosis is an overgrowth of anaerobes (e.g. Gardnerella) replacing the normal lactobacilli, not a true inflammation. It gives a thin, grey-white, homogeneous discharge with a characteristic fishy odour, a raised vaginal pH (>4.5) and 'clue cells' on microscopy, usually without much itch. It is treated with metronidazole and is associated with preterm birth in pregnancy." },
      { h: "Trichomonal vaginitis", p: "Trichomonas vaginalis, a sexually transmitted flagellate protozoan, causes a profuse, frothy, greenish-yellow, offensive discharge with itching, soreness and sometimes a 'strawberry' cervix and raised pH. Both partners are treated with metronidazole; because it is sexually transmitted, partner treatment and screening for other STIs are essential." },
      { h: "Comparing the common vaginal infections", p: "Distinguishing the three common causes of abnormal discharge guides treatment.", list: [
        "Candida — thick white curdy discharge, intense itch, normal pH, treat with antifungal.",
        "Bacterial vaginosis — thin grey fishy discharge, pH >4.5, clue cells, treat with metronidazole.",
        "Trichomonas — frothy greenish offensive discharge, itch, raised pH, STI — treat both partners.",
        "Physiological discharge — clear/white, non-offensive, no itch, needs only reassurance."
      ], figure: {
        caption: "Ascending genital-tract infection: lower-tract infection (vaginitis/cervicitis) may ascend through the cervix to cause pelvic inflammatory disease of the uterus, tubes and ovaries.",
        svg: '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ascending genital tract infection"><path d="M180 190 L180 130 Q180 90 150 70 L120 55" fill="none" stroke="#0F4C3A" stroke-width="3"/><path d="M240 190 L240 130 Q240 90 270 70 L300 55" fill="none" stroke="#0F4C3A" stroke-width="3"/><rect x="180" y="120" width="60" height="70" rx="8" fill="#BBF7D0" stroke="#15803D"/><text x="210" y="160" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Uterus</text><circle cx="118" cy="52" r="12" fill="#86EFAC" stroke="#15803D"/><circle cx="302" cy="52" r="12" fill="#86EFAC" stroke="#15803D"/><text x="90" y="52" text-anchor="end" font-family="sans-serif" font-size="9" fill="#15803D">Ovary</text><rect x="195" y="190" width="30" height="20" fill="#FEE2E2" stroke="#B91C1C"/><text x="210" y="204" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#991B1B">Cervix</text><line x1="210" y1="215" x2="210" y2="120" stroke="#B91C1C" stroke-width="2" stroke-dasharray="4 3"/><polygon points="210,118 205,128 215,128" fill="#B91C1C"/><text x="330" y="150" font-family="sans-serif" font-size="10" fill="#B91C1C">Ascent → PID</text></svg>'
      } },
      { h: "Cervicitis", p: "Cervicitis is inflammation of the cervix, often from the sexually transmitted organisms Neisseria gonorrhoeae and Chlamydia trachomatis, or from other infections and trauma. It may be silent or cause a mucopurulent discharge, contact (post-coital) bleeding and a reddened, friable cervix. Untreated STI cervicitis is a chief cause of ascending PID and infertility, so it must be treated and partners notified." },
      { h: "Pelvic inflammatory disease (PID)", p: "PID is infection and inflammation of the upper genital tract — the uterus (endometritis), tubes (salpingitis) and ovaries (oophoritis) — and adjacent pelvic peritoneum. It usually results from sexually transmitted organisms (gonorrhoea, chlamydia) ascending from the lower tract, but may follow childbirth, abortion or instrumentation. It is a major preventable cause of infertility." },
      { h: "PID — risk factors & clinical features", p: "Risk factors include young age, multiple partners, previous PID, recent instrumentation (IUCD insertion, D&C) and unsafe abortion or delivery.", list: [
        "Lower abdominal/pelvic pain, often bilateral.",
        "Fever and malaise; abnormal, offensive vaginal discharge.",
        "Deep dyspareunia and abnormal bleeding.",
        "Cervical-motion ('excitation') tenderness and adnexal tenderness on examination.",
        "In severe cases, a tubo-ovarian abscess or peritonitis."
      ] },
      { h: "Complications of PID", p: "PID damages the delicate tubal lining, leading to long-term sequelae.", list: [
        "Tubal-factor infertility (risk rises with each episode).",
        "Ectopic pregnancy from tubal scarring.",
        "Chronic pelvic pain.",
        "Tubo-ovarian abscess and pelvic peritonitis.",
        "Fitz-Hugh-Curtis syndrome (perihepatic adhesions causing right-upper-quadrant pain)."
      ] },
      { h: "Investigations", p: "Assessment includes vaginal and endocervical swabs for gonorrhoea and chlamydia, wet-mount microscopy, a raised white-cell count and inflammatory markers, a pregnancy test (to exclude ectopic), and pelvic ultrasound to detect an abscess. A low threshold for treatment is advised because delay causes tubal damage." },
      { h: "Medical & surgical management", p: "Treatment is prompt broad-spectrum antibiotics covering gonorrhoea, chlamydia and anaerobes (typically a combination such as ceftriaxone plus doxycycline plus metronidazole), given early and completed fully. Severe illness, abscess, pregnancy or failure of oral therapy needs admission and IV antibiotics; a tubo-ovarian abscess may require drainage. The partner must be treated and intercourse avoided until both are cured." },
      { h: "Nursing management", list: [
        "Administer and teach completion of antibiotics; explain the importance of the full course.",
        "Provide analgesia, rest and comfort; encourage fluids and nutrition.",
        "Educate on abstinence during treatment and on partner treatment.",
        "Give sensitive counselling about the STI link, future fertility and safe sex.",
        "Advise follow-up and reporting of persisting symptoms."
      ] },
      { h: "Prevention & health education", p: "Prevention centres on safe sexual practice (condoms, limiting partners), prompt treatment of lower-tract STIs before they ascend, partner notification, aseptic technique during any uterine procedure, and safe delivery and abortion care. Community education about genital hygiene and the danger of unsafe abortion is a core nursing responsibility in Bangladesh." },
      { h: "Key facts to remember", list: [
        "Normal vaginal pH 3.8–4.5, kept acidic by lactobacilli.",
        "Candida: curdy white, itchy, normal pH; BV: fishy, pH >4.5, clue cells; trichomonas: frothy green, STI.",
        "PID = infection of uterus + tubes + ovaries, usually from ascending STI.",
        "Cervical-motion tenderness is a classic sign of PID.",
        "PID is a leading preventable cause of infertility and ectopic pregnancy."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Describe the natural defences of the lower genital tract and how their disturbance leads to infection.",
      "Compare candidal, bacterial and trichomonal vaginitis by cause, discharge, pH and treatment.",
      "Define pelvic inflammatory disease, list its causes and describe its clinical features.",
      "Discuss the complications of PID and its impact on future fertility.",
      "Outline the nursing management and prevention of pelvic inflammatory disease."
    ],
    assessment: [
      { type: "mcq", q: "The thick, white, curdy, itchy discharge with a normal vaginal pH is typical of:", options: ["Candidiasis", "Bacterial vaginosis", "Trichomoniasis", "Gonorrhoea"], answer: 0, rationale: "Candida albicans causes a curdy white discharge and intense itch with normal pH." },
      { type: "mcq", q: "A fishy-smelling, thin grey discharge with vaginal pH above 4.5 and clue cells indicates:", options: ["Candidiasis", "Bacterial vaginosis", "Trichomoniasis", "Physiological discharge"], answer: 1, rationale: "Bacterial vaginosis gives a fishy odour, raised pH and clue cells." },
      { type: "mcq", q: "Trichomonal vaginitis is best treated with:", options: ["Clotrimazole", "Fluconazole", "Metronidazole", "Aciclovir"], answer: 2, rationale: "Metronidazole treats trichomoniasis; both partners must be treated." },
      { type: "mcq", q: "The normal acidic vaginal pH is maintained mainly by:", options: ["Lactobacilli", "Gardnerella", "Candida", "Trichomonas"], answer: 0, rationale: "Lactobacilli produce lactic acid keeping the vaginal pH around 3.8–4.5." },
      { type: "mcq", q: "Pelvic inflammatory disease involves infection of the:", options: ["Vulva and vagina only", "Bladder only", "Uterus, fallopian tubes and ovaries", "Cervix only"], answer: 2, rationale: "PID is infection of the upper genital tract — uterus, tubes and ovaries." },
      { type: "mcq", q: "The classic examination sign of PID is:", options: ["Strawberry cervix", "Cervical-motion tenderness", "Clue cells", "Curdy discharge"], answer: 1, rationale: "Cervical-motion (excitation) tenderness strongly suggests PID." },
      { type: "mcq", q: "Which is a recognised long-term complication of PID?", options: ["Improved fertility", "Lower blood pressure", "Ectopic pregnancy", "Weight gain"], answer: 2, rationale: "Tubal scarring from PID predisposes to ectopic pregnancy and infertility." },
      { type: "mcq", q: "The commonest sexually transmitted organisms causing PID are:", options: ["Gonorrhoea and chlamydia", "Candida and Gardnerella", "E. coli and Proteus", "Trichomonas and Candida"], answer: 0, rationale: "Neisseria gonorrhoeae and Chlamydia trachomatis are the usual causes of PID." },
      { type: "mcq", q: "A frothy, greenish, offensive discharge with a 'strawberry' cervix suggests:", options: ["Candidiasis", "Trichomoniasis", "Bacterial vaginosis", "Cervical polyp"], answer: 1, rationale: "Trichomonas causes a frothy greenish discharge and punctate 'strawberry' cervix." },
      { type: "mcq", q: "An essential part of managing sexually transmitted vaginitis and PID is:", options: ["Treating the woman only", "Avoiding antibiotics", "Immediate hysterectomy", "Treating the partner as well"], answer: 3, rationale: "Partner treatment prevents re-infection in sexually transmitted disease." },
      { type: "fill", q: "Perihepatic adhesions complicating PID are known as ____ syndrome.", accept: ["Fitz-Hugh-Curtis", "Fitz Hugh Curtis"], rationale: "Fitz-Hugh-Curtis syndrome is perihepatic inflammation associated with PID." },
      { type: "fill", q: "Infection of the fallopian tube, a component of PID, is called ____.", accept: ["salpingitis"], rationale: "Salpingitis is inflammation of the fallopian tube." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "gyn-06-menstrual-disorders",
    unit: "Unit 2 · Gynaecological Disorders",
    title: "Disorders of Menstruation: Metrorrhagia, Menorrhagia & Dysmenorrhoea",
    readMinutes: 22,
    summary: "Definitions, causes, assessment and management of the common menstrual disorders — menorrhagia, metrorrhagia, dysmenorrhoea and amenorrhoea — together with an overview of premenstrual syndrome and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Terminology of abnormal menstruation", p: "Precise terms describe the pattern of abnormal bleeding.", list: [
        "Menorrhagia — regular but excessive and/or prolonged menstrual loss (>80 mL or >7 days).",
        "Metrorrhagia — irregular bleeding between periods.",
        "Menometrorrhagia — frequent, heavy and irregular bleeding combined.",
        "Polymenorrhoea — cycles too frequent (<21 days).",
        "Oligomenorrhoea — infrequent periods (cycles >35 days).",
        "Amenorrhoea — absence of menstruation.",
        "Dysmenorrhoea — painful menstruation."
      ] },
      { h: "Abnormal uterine bleeding & the PALM-COEIN system", p: "'Abnormal uterine bleeding' (AUB) is the umbrella term. Causes are classified by FIGO as structural (PALM — Polyp, Adenomyosis, Leiomyoma/fibroid, Malignancy/hyperplasia) and non-structural (COEIN — Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not-yet-classified). This framework helps target investigation and treatment." },
      { h: "Menorrhagia — causes", p: "Heavy menstrual bleeding may be organic or dysfunctional.", list: [
        "Structural — uterine fibroids, adenomyosis, endometrial polyps, endometrial hyperplasia or cancer.",
        "Systemic — hypothyroidism, coagulation disorders (e.g. von Willebrand disease), liver disease.",
        "Iatrogenic — copper IUCD, anticoagulants.",
        "Dysfunctional uterine bleeding (DUB) — heavy bleeding with no organic cause, usually from anovulation at the extremes of reproductive life (adolescence, perimenopause)."
      ] },
      { h: "Menorrhagia — assessment & management", p: "Assessment covers a menstrual history, examination, haemoglobin (for anaemia), thyroid and coagulation screening, and pelvic ultrasound or endometrial biopsy (especially over 40 or with risk factors, to exclude cancer). Medical treatment includes tranexamic acid and NSAIDs (mefenamic acid) for cyclical control, and hormonal options (combined pill, progestogens, or the levonorgestrel intrauterine system, which is highly effective). Surgery (endometrial ablation, myomectomy or hysterectomy) is reserved for failed medical therapy or structural disease. Anaemia is corrected with iron." },
      { h: "Metrorrhagia — causes", p: "Bleeding between periods or irregular bleeding suggests a local or hormonal lesion.", list: [
        "Cervical or endometrial polyps.",
        "Cervical erosion, cervicitis or cervical cancer.",
        "Endometrial hyperplasia or carcinoma.",
        "Hormonal contraception (breakthrough bleeding).",
        "Ovulation bleeding; pregnancy-related bleeding (must be excluded)."
      ] },
      { h: "Postcoital & postmenopausal bleeding — red flags", p: "Bleeding after intercourse (postcoital) or any bleeding after the menopause must be regarded as cancer until proven otherwise and referred for prompt evaluation (speculum examination, Pap smear, endometrial assessment). Postmenopausal bleeding is the cardinal symptom of endometrial carcinoma." },
      { h: "Dysmenorrhoea — types", p: "Dysmenorrhoea is painful menstruation, of two types.", list: [
        "Primary — cramping lower-abdominal pain from the start of menstrual life, with no pelvic pathology, caused by excess prostaglandins producing uterine contractions and ischaemia; common in young nulliparous women.",
        "Secondary — pain appearing later in life due to pelvic disease such as endometriosis, adenomyosis, fibroids, PID or an IUCD; often accompanied by other symptoms."
      ] },
      { h: "Dysmenorrhoea — features & management", p: "Primary dysmenorrhoea gives crampy suprapubic pain starting just before or with the period, sometimes with nausea, headache and backache. Management: reassurance and explanation, local heat, exercise, NSAIDs (which block prostaglandins — first-line) and, if needed, the combined oral contraceptive to suppress ovulation. Secondary dysmenorrhoea is managed by treating the underlying cause, so it must be investigated." },
      { h: "Amenorrhoea — classification", p: "Amenorrhoea is the absence of menstruation.", list: [
        "Primary — no menstruation by 16 years (or 14 with no secondary sexual characteristics); causes include gonadal dysgenesis (Turner syndrome), imperforate hymen, and outflow-tract or ovarian/pituitary defects.",
        "Secondary — cessation of previously normal periods for 6 months or three cycles; the commonest cause is pregnancy, then lactation, menopause, PCOS, thyroid disease, hyperprolactinaemia, excessive exercise/weight loss and stress."
      ] },
      { h: "Assessment of amenorrhoea", p: "Always exclude pregnancy first with a pregnancy test. Then take a history (weight change, stress, exercise, galactorrhoea, hirsutism, drugs), examine for secondary sexual characteristics, and investigate with hormone assays (FSH, LH, prolactin, thyroid function, testosterone) and pelvic ultrasound as indicated. Management treats the cause." },
      { h: "Premenstrual syndrome (PMS)", p: "PMS is a cluster of physical and psychological symptoms — breast tenderness, bloating, headache, irritability, mood swings, depression and poor concentration — that recur in the luteal (premenstrual) phase and resolve with menstruation. Severe PMS with marked mood disturbance is termed premenstrual dysphoric disorder. Management includes lifestyle measures (exercise, reduced salt/caffeine), a symptom diary, NSAIDs, the combined pill and, for severe mood symptoms, SSRIs." },
      { h: "Impact & psychological aspects", p: "Menstrual disorders cause anaemia, fatigue, absence from school or work, dyspareunia and infertility, and considerable anxiety and embarrassment — heightened where menstruation is taboo. The nurse must address both the physical problem and its psychosocial impact with empathy and confidentiality." },
      { h: "Nursing management", list: [
        "Take an accurate menstrual and symptom history and maintain a menstrual/symptom diary.",
        "Screen for and correct anaemia; give iron and dietary advice.",
        "Administer and teach medications (NSAIDs, tranexamic acid, hormones) and their use.",
        "Provide non-pharmacological relief — heat, rest, exercise, reassurance.",
        "Counsel on the condition, dispel myths, and refer red-flag symptoms promptly.",
        "Support women awaiting or recovering from surgery."
      ] },
      { h: "Key definitions to remember", list: [
        "Menorrhagia — heavy/prolonged loss (>80 mL or >7 days).",
        "Metrorrhagia — irregular inter-menstrual bleeding.",
        "Primary dysmenorrhoea — no pathology, prostaglandin-mediated; secondary — due to pelvic disease.",
        "Secondary amenorrhoea — no periods for 6 months; exclude pregnancy first.",
        "Postmenopausal bleeding = endometrial cancer until proven otherwise."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Define menorrhagia, metrorrhagia, oligomenorrhoea and amenorrhoea.",
      "Discuss the causes and management of menorrhagia, including the role of the levonorgestrel intrauterine system.",
      "Differentiate primary from secondary dysmenorrhoea and outline the management of each.",
      "Describe the classification, causes and assessment of amenorrhoea.",
      "Outline premenstrual syndrome and the nursing management of a woman with a menstrual disorder."
    ],
    assessment: [
      { type: "mcq", q: "Regular but excessively heavy or prolonged menstrual bleeding is termed:", options: ["Metrorrhagia", "Menorrhagia", "Oligomenorrhoea", "Amenorrhoea"], answer: 1, rationale: "Menorrhagia is heavy/prolonged loss of >80 mL or >7 days." },
      { type: "mcq", q: "Irregular bleeding occurring between periods is called:", options: ["Menorrhagia", "Metrorrhagia", "Polymenorrhoea", "Dysmenorrhoea"], answer: 1, rationale: "Metrorrhagia is inter-menstrual/irregular bleeding." },
      { type: "mcq", q: "Primary dysmenorrhoea is caused mainly by excess:", options: ["Prostaglandins", "Oestrogen", "Prolactin", "Insulin"], answer: 0, rationale: "Excess prostaglandins cause the painful uterine contractions of primary dysmenorrhoea." },
      { type: "mcq", q: "The first-line drug class for primary dysmenorrhoea is:", options: ["Antibiotics", "Corticosteroids", "NSAIDs", "Antifungals"], answer: 2, rationale: "NSAIDs inhibit prostaglandin synthesis and are first-line for primary dysmenorrhoea." },
      { type: "mcq", q: "The commonest cause of secondary amenorrhoea is:", options: ["Pregnancy", "Turner syndrome", "Imperforate hymen", "Fibroids"], answer: 0, rationale: "Pregnancy must always be excluded first as the leading cause of secondary amenorrhoea." },
      { type: "mcq", q: "Postmenopausal bleeding should be regarded as:", options: ["A normal variant", "Always due to fibroids", "Endometrial cancer until proven otherwise", "A sign of pregnancy"], answer: 2, rationale: "Postmenopausal bleeding is the cardinal warning symptom of endometrial carcinoma." },
      { type: "mcq", q: "Secondary dysmenorrhoea is commonly caused by:", options: ["No pelvic pathology", "Excess prostaglandins alone", "Endometriosis", "Menarche"], answer: 2, rationale: "Secondary dysmenorrhoea arises from pelvic disease such as endometriosis or fibroids." },
      { type: "mcq", q: "A highly effective device-based treatment for menorrhagia is the:", options: ["Copper IUCD", "Diaphragm", "Cervical cap", "Levonorgestrel intrauterine system"], answer: 3, rationale: "The levonorgestrel IUS markedly reduces menstrual blood loss." },
      { type: "mcq", q: "Secondary amenorrhoea is defined as no menstruation for at least:", options: ["1 month", "3 months (or 6 months)", "12 months", "24 months"], answer: 1, rationale: "Absence of periods for three cycles or six months defines secondary amenorrhoea." },
      { type: "mcq", q: "An antifibrinolytic drug used to reduce menstrual blood loss is:", options: ["Tranexamic acid", "Metronidazole", "Fluconazole", "Oxytocin"], answer: 0, rationale: "Tranexamic acid reduces menstrual bleeding by inhibiting fibrinolysis." },
      { type: "fill", q: "Painful menstruation is medically termed ____.", accept: ["dysmenorrhoea", "dysmenorrhea"], rationale: "Dysmenorrhoea means painful menstruation." },
      { type: "fill", q: "The FIGO classification of abnormal uterine bleeding uses the acronym ____-COEIN.", accept: ["PALM"], rationale: "PALM (structural) and COEIN (non-structural) classify causes of AUB." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "gyn-07-abortion",
    unit: "Unit 2 · Gynaecological Disorders",
    title: "Abortion: Types, Causes & Management",
    readMinutes: 24,
    summary: "The definition and classification of abortion (threatened, inevitable, incomplete, complete, missed, septic and recurrent), its causes, clinical features, investigations, complications and management, including menstrual regulation, MVA and post-abortion care in Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Abortion (miscarriage) is the termination or expulsion of the products of conception before the fetus is viable — conventionally before 24 weeks (in many settings before 20 weeks or a fetal weight under 500 g). It may be spontaneous (miscarriage) or induced (medical or surgical, safe or unsafe). Miscarriage is common, ending roughly 10–15% of recognised pregnancies, most in the first trimester." },
      { h: "Causes of spontaneous abortion", p: "Especially in the first trimester, chromosomal abnormality of the conceptus is the leading cause.", list: [
        "Genetic — chromosomal abnormalities (about half of early losses).",
        "Endocrine — luteal-phase (progesterone) deficiency, uncontrolled diabetes, thyroid disease.",
        "Anatomical — uterine anomalies, fibroids, cervical incompetence (a cause of mid-trimester loss).",
        "Infective — TORCH infections, syphilis, severe systemic infection.",
        "Immunological — antiphospholipid syndrome.",
        "Maternal — severe illness, malnutrition, trauma, smoking, alcohol, environmental toxins."
      ] },
      { h: "Clinical types of abortion", p: "Spontaneous abortion is classified by its clinical stage, which guides management.", list: [
        "Threatened — bleeding with a closed cervix and a viable pregnancy; may still continue.",
        "Inevitable — bleeding with an open cervix and cramping; loss is unavoidable.",
        "Incomplete — some products expelled but some retained; cervix open, bleeding continues.",
        "Complete — all products expelled; cervix closed, bleeding and pain settle.",
        "Missed — the fetus has died but is retained, with no expulsion; the uterus stops growing.",
        "Septic — any abortion complicated by infection of the uterus and its contents.",
        "Recurrent (habitual) — three or more consecutive spontaneous losses."
      ], figure: {
        caption: "Clinical types of abortion by cervical state and products retained.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of abortion"><rect x="15" y="30" width="120" height="140" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="75" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Threatened</text><text x="75" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Cervix closed</text><text x="75" y="106" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Fetus viable</text><text x="75" y="122" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Light bleeding</text><rect x="145" y="30" width="120" height="140" rx="8" fill="#FEF9C3" stroke="#CA8A04"/><text x="205" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#854D0E">Inevitable</text><text x="205" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#854D0E">Cervix open</text><text x="205" y="106" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#854D0E">Cramping</text><text x="205" y="122" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#854D0E">Loss unavoidable</text><rect x="275" y="30" width="120" height="140" rx="8" fill="#FED7AA" stroke="#C2410C"/><text x="335" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#9A3412">Incomplete</text><text x="335" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#9A3412">Cervix open</text><text x="335" y="106" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#9A3412">Products retained</text><text x="335" y="122" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#9A3412">Needs evacuation</text><rect x="405" y="30" width="120" height="140" rx="8" fill="#BBF7D0" stroke="#15803D"/><text x="465" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Complete</text><text x="465" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Cervix closed</text><text x="465" y="106" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">All expelled</text><text x="465" y="122" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Settling</text></svg>'
      } },
      { h: "Clinical features", p: "The cardinal features are vaginal bleeding and lower-abdominal cramping pain in early pregnancy, with a history of amenorrhoea and a positive pregnancy test. The state of the cervical os (open or closed), the amount of bleeding, the presence of expelled products and signs of infection (fever, offensive discharge) or shock distinguish the type and urgency." },
      { h: "Investigations", p: "Assessment includes confirming pregnancy (urine/serum hCG), pelvic ultrasound to establish viability and whether products remain, haemoglobin and blood group (with Rh status for anti-D need), and, in suspected sepsis, white-cell count and cultures. Serial hCG helps where ectopic pregnancy must be excluded." },
      { h: "Complications", p: "Abortion, particularly when incomplete, septic or unsafe, is dangerous.", list: [
        "Haemorrhage and hypovolaemic shock.",
        "Sepsis and septic shock (from retained products or unsafe procedures).",
        "Retained products of conception.",
        "Uterine perforation or cervical/bowel injury from unsafe instrumentation.",
        "Rh isoimmunisation in Rh-negative women.",
        "Long-term: Asherman's syndrome (intrauterine adhesions), infertility, and psychological grief."
      ] },
      { h: "Management by type", p: "Treatment follows the clinical type.", list: [
        "Threatened — reassurance, rest, avoid strenuous activity; most continue. No routine intervention.",
        "Inevitable/incomplete — resuscitate if bleeding, give uterotonics, and evacuate the uterus (MVA or medical evacuation with misoprostol).",
        "Complete — confirm empty uterus on scan; observe; usually no evacuation needed.",
        "Missed — evacuate medically (misoprostol ± mifepristone) or surgically after confirming fetal death.",
        "Septic — this is an emergency (see below).",
        "Recurrent — investigate the cause between pregnancies (karyotype, antiphospholipid screen, uterine imaging, cervical assessment) and treat accordingly (e.g. cervical cerclage for incompetence)."
      ] },
      { h: "Septic abortion — emergency management", p: "Septic abortion presents with fever, offensive vaginal discharge, lower-abdominal pain, tender uterus and, if severe, septic shock. Management is urgent: resuscitate (IV fluids, oxygen), take cultures, start IV broad-spectrum antibiotics without delay, evacuate the infected retained products once antibiotics are running, give tetanus prophylaxis, and monitor for shock and renal failure. Unsafe abortion is a preventable cause of maternal death." },
      { h: "Menstrual regulation (MR) & MVA", p: "In Bangladesh, menstrual regulation — evacuation of the uterus by manual vacuum aspiration (MVA) to ensure non-pregnancy after a missed period — is legally permitted and is an established service that reduces deaths from unsafe abortion. MVA uses a hand-held syringe and cannula under local analgesia; it is safe, quick and appropriate for early incomplete or induced uterine evacuation. Medical MR uses mifepristone and misoprostol." },
      { h: "Post-abortion care (PAC)", p: "Post-abortion care is a package that saves lives regardless of how the abortion occurred.", list: [
        "Emergency treatment of incomplete abortion and complications (bleeding, sepsis).",
        "Post-abortion family-planning counselling and provision (fertility returns quickly).",
        "Counselling and emotional support.",
        "Links to other reproductive-health services (STI screening, cervical screening).",
        "Community education to prevent unsafe abortion."
      ] },
      { h: "Rh prophylaxis", p: "An Rh-negative woman who aborts (spontaneously or induced) may become sensitised to Rh-positive fetal cells, endangering future pregnancies. Anti-D immunoglobulin should be given after abortion in Rh-negative, non-sensitised women to prevent isoimmunisation." },
      { h: "Nursing management", list: [
        "Assess and monitor bleeding, vital signs, pain and signs of shock or sepsis.",
        "Establish IV access, give fluids/blood and prescribed uterotonics and antibiotics.",
        "Prepare for and assist with MVA/evacuation; maintain asepsis.",
        "Provide analgesia, comfort and privacy.",
        "Give sensitive emotional support and grief counselling.",
        "Deliver post-abortion family-planning counselling and arrange follow-up; give anti-D if indicated."
      ] },
      { h: "Key facts to remember", list: [
        "Abortion = loss before viability (~24 weeks / fetal weight <500 g).",
        "Threatened = os closed; inevitable/incomplete = os open.",
        "Missed abortion = dead fetus retained, no expulsion.",
        "MVA/MR is legal in Bangladesh and reduces unsafe-abortion deaths.",
        "Give anti-D to Rh-negative women after abortion."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Define abortion and classify its clinical types by cervical state and retained products.",
      "Discuss the causes of spontaneous and recurrent abortion.",
      "Describe the emergency management of septic abortion.",
      "Explain menstrual regulation and post-abortion care and their importance in Bangladesh.",
      "Outline the nursing management of a woman admitted with incomplete abortion."
    ],
    assessment: [
      { type: "mcq", q: "In threatened abortion, the cervical os is:", options: ["Open with heavy bleeding", "Closed with a viable pregnancy", "Fully dilated", "Absent"], answer: 1, rationale: "Threatened abortion presents with a closed os and a still-viable pregnancy." },
      { type: "mcq", q: "A dead fetus retained in the uterus with no expulsion is termed:", options: ["Complete abortion", "Threatened abortion", "Missed abortion", "Inevitable abortion"], answer: 2, rationale: "Missed abortion is retention of a non-viable pregnancy without expulsion." },
      { type: "mcq", q: "The leading cause of early first-trimester spontaneous abortion is:", options: ["Chromosomal abnormality", "Cervical incompetence", "Trauma", "Fibroids"], answer: 0, rationale: "Chromosomal abnormalities account for about half of early miscarriages." },
      { type: "mcq", q: "Recurrent (habitual) abortion is defined as consecutive losses numbering:", options: ["Two or more", "Three or more", "Four or more", "Five or more"], answer: 1, rationale: "Three or more consecutive spontaneous losses define recurrent abortion." },
      { type: "mcq", q: "The uterine evacuation technique used for menstrual regulation in Bangladesh is:", options: ["Hysterectomy", "Manual vacuum aspiration", "Laparotomy", "Cervical cerclage"], answer: 1, rationale: "Manual vacuum aspiration (MVA) is used for MR and early evacuation." },
      { type: "mcq", q: "Cervical incompetence classically causes:", options: ["First-trimester loss", "Painless mid-trimester loss", "Missed abortion", "Ectopic pregnancy"], answer: 1, rationale: "An incompetent cervix causes painless second-trimester pregnancy loss." },
      { type: "mcq", q: "The most urgent priority in septic abortion is:", options: ["Discharge home", "Resuscitation and IV antibiotics", "Reassurance only", "Delay treatment for scan"], answer: 1, rationale: "Septic abortion needs immediate resuscitation and IV broad-spectrum antibiotics." },
      { type: "mcq", q: "After abortion, an Rh-negative unsensitised woman should receive:", options: ["Oxytocin", "Anti-D immunoglobulin", "Iron only", "Antifungal"], answer: 1, rationale: "Anti-D prevents Rh isoimmunisation after abortion." },
      { type: "mcq", q: "Intrauterine adhesions following repeated uterine evacuation are called:", options: ["Asherman's syndrome", "Turner syndrome", "Sheehan's syndrome", "Fitz-Hugh-Curtis syndrome"], answer: 0, rationale: "Asherman's syndrome is intrauterine adhesion causing amenorrhoea/infertility." },
      { type: "mcq", q: "An essential component of post-abortion care is:", options: ["Immediate hysterectomy", "Family-planning counselling", "Prolonged bed rest for weeks", "Avoiding all follow-up"], answer: 1, rationale: "Post-abortion contraceptive counselling prevents rapid repeat unintended pregnancy." },
      { type: "fill", q: "Abortion complicated by infection of the uterine contents is called ____ abortion.", accept: ["septic"], rationale: "Septic abortion is infection complicating abortion." },
      { type: "fill", q: "The medications commonly combined for medical evacuation/abortion are mifepristone and ____.", accept: ["misoprostol"], rationale: "Mifepristone with misoprostol is the standard medical regimen." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "gyn-08-menopause",
    unit: "Unit 2 · Gynaecological Disorders",
    title: "Menopause & the Climacteric",
    readMinutes: 20,
    summary: "The physiology of menopause and the climacteric, the vasomotor, urogenital and psychological symptoms, the long-term consequences of oestrogen deficiency (osteoporosis and cardiovascular disease), and management including the risks and benefits of hormone-replacement therapy.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "Menopause is the permanent cessation of menstruation resulting from loss of ovarian follicular activity, diagnosed retrospectively after 12 consecutive months of amenorrhoea. The climacteric (perimenopause) is the transitional phase around menopause — often several years — during which ovarian function declines and symptoms appear. The average age of natural menopause is about 45–55 years (around 51 in Western data; often a little earlier in South Asian women)." },
      { h: "Physiology of menopause", p: "With age the ovaries run out of responsive follicles. Oestrogen and progesterone production falls; the negative feedback on the pituitary is lost, so FSH and LH rise markedly (a high FSH is the biochemical marker of menopause). The endometrium is no longer stimulated, so menstruation ceases. It is the resulting oestrogen deficiency that produces the symptoms and long-term effects." },
      { h: "Premature & induced menopause", p: "Menopause before 40 years is premature ovarian insufficiency, which may be idiopathic, autoimmune, genetic or iatrogenic. Induced (surgical) menopause follows bilateral oophorectomy, or chemotherapy/radiotherapy; because oestrogen falls abruptly, symptoms are often sudden and severe, and these women particularly benefit from hormone therapy up to the natural age of menopause." },
      { h: "Vasomotor symptoms", p: "Hot flushes and night sweats are the hallmark and commonest symptoms — sudden sensations of heat over the face, neck and chest, with flushing and sweating, lasting a few minutes and often disturbing sleep. They result from oestrogen withdrawal destabilising the hypothalamic thermoregulatory centre. Palpitations and headaches may accompany them." },
      { h: "Urogenital symptoms", p: "Oestrogen deficiency thins and dries the vaginal and urethral epithelium ('genitourinary syndrome of menopause').", list: [
        "Vaginal dryness, itching, soreness and dyspareunia (painful intercourse).",
        "Increased susceptibility to vaginal and urinary infection.",
        "Urinary frequency, urgency and stress incontinence.",
        "Contribution to pelvic-floor weakness and prolapse."
      ] },
      { h: "Psychological & other symptoms", p: "Many women experience mood swings, irritability, anxiety, low mood, poor concentration, memory lapses, fatigue and reduced libido. Sleep is disturbed by night sweats. Skin becomes thinner and drier and hair may thin. Symptoms vary greatly between women and cultures; some have few or none." },
      { h: "Long-term effect: osteoporosis", p: "Oestrogen restrains bone resorption; its loss accelerates bone loss, so bone density falls fastest in the first years after menopause. This leads to osteoporosis — porous, fragile bone — and a rising risk of fragility fractures of the wrist, spine (leading to loss of height and kyphosis) and hip. Prevention centres on calcium and vitamin D, weight-bearing exercise, avoiding smoking and, when indicated, bone-protective drugs.", figure: {
        caption: "Consequences of post-menopausal oestrogen deficiency: short-term vasomotor and urogenital symptoms and long-term bone and cardiovascular effects.",
        svg: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Effects of oestrogen deficiency"><ellipse cx="120" cy="100" rx="90" ry="42" fill="#DCFCE7" stroke="#15803D"/><text x="120" y="96" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Oestrogen</text><text x="120" y="114" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">deficiency</text><line x1="210" y1="70" x2="290" y2="35" stroke="#15803D" stroke-width="2"/><line x1="210" y1="90" x2="290" y2="85" stroke="#15803D" stroke-width="2"/><line x1="210" y1="110" x2="290" y2="135" stroke="#15803D" stroke-width="2"/><line x1="210" y1="130" x2="290" y2="180" stroke="#15803D" stroke-width="2"/><rect x="290" y="18" width="220" height="34" rx="6" fill="#FEF9C3" stroke="#CA8A04"/><text x="300" y="40" font-family="sans-serif" font-size="10" fill="#854D0E">Hot flushes / night sweats</text><rect x="290" y="68" width="220" height="34" rx="6" fill="#FED7AA" stroke="#C2410C"/><text x="300" y="90" font-family="sans-serif" font-size="10" fill="#9A3412">Vaginal dryness / dyspareunia</text><rect x="290" y="118" width="220" height="34" rx="6" fill="#E0E7FF" stroke="#4338CA"/><text x="300" y="140" font-family="sans-serif" font-size="10" fill="#3730A3">Osteoporosis / fractures</text><rect x="290" y="163" width="220" height="34" rx="6" fill="#FEE2E2" stroke="#B91C1C"/><text x="300" y="185" font-family="sans-serif" font-size="10" fill="#991B1B">Cardiovascular disease</text></svg>'
      } },
      { h: "Long-term effect: cardiovascular disease", p: "Before menopause oestrogen offers some cardiovascular protection (favourable lipids, vascular effects). After menopause this protection wanes, LDL cholesterol rises, and the risk of ischaemic heart disease and stroke increases toward that of men. Lifestyle measures — healthy diet, exercise, no smoking, and control of blood pressure, lipids and glucose — are the mainstay of prevention." },
      { h: "Diagnosis & assessment", p: "Menopause is usually a clinical diagnosis in a woman of the right age with typical symptoms and amenorrhoea; a raised FSH supports it (and is more useful in younger or uncertain cases). Assessment excludes other causes of symptoms and screens for cardiovascular risk and, where available, bone density. Any postmenopausal bleeding must be investigated to exclude endometrial cancer." },
      { h: "General & non-hormonal management", p: "Many symptoms respond to lifestyle and simple measures.", list: [
        "Explanation and reassurance that this is a normal life stage.",
        "Lifestyle — regular exercise, healthy diet, adequate calcium and vitamin D, weight control, no smoking, reduced caffeine and alcohol.",
        "Vaginal lubricants/moisturisers or low-dose vaginal oestrogen for dryness.",
        "Non-hormonal drugs for flushes (e.g. certain SSRIs/SNRIs) where HRT is unsuitable.",
        "Bone-protective agents (bisphosphonates) for established osteoporosis."
      ] },
      { h: "Hormone-replacement therapy (HRT)", p: "HRT replaces oestrogen (with a progestogen added in women who still have a uterus, to protect the endometrium from oestrogen-driven hyperplasia and cancer). It is the most effective treatment for vasomotor and urogenital symptoms and helps prevent osteoporosis. It is given by tablet, patch, gel or vaginally, at the lowest effective dose for the shortest necessary time, individualised to the woman." },
      { h: "Risks & benefits of HRT", p: "The benefit-risk balance must be discussed.", list: [
        "Benefits — relief of flushes and urogenital symptoms, reduced fracture risk, improved quality of life; started near menopause it may benefit bone and possibly cardiovascular health.",
        "Risks — a small increased risk of breast cancer (mainly with combined, longer-term use), venous thromboembolism and stroke (higher with oral than transdermal routes), and gallbladder disease.",
        "Contraindications — oestrogen-dependent cancer, active thromboembolism, undiagnosed vaginal bleeding, severe liver disease.",
        "Unopposed oestrogen (no progestogen) in a woman with a uterus raises endometrial cancer risk — hence combined therapy."
      ] },
      { h: "Nursing support", list: [
        "Educate that menopause is a natural transition and dispel myths and fears.",
        "Assess symptoms and their impact on daily life and relationships.",
        "Counsel on lifestyle, diet, calcium/vitamin D and exercise for bones and heart.",
        "Explain the benefits, risks and correct use of HRT to support informed choice.",
        "Advise contraception until menopause is confirmed and stress reporting of any postmenopausal bleeding.",
        "Provide psychological support and involve the partner/family."
      ] },
      { h: "Key facts to remember", list: [
        "Menopause = 12 months' amenorrhoea; average ~45–55 y; premature if <40 y.",
        "FSH rises (biochemical marker); oestrogen falls.",
        "Hot flushes are the commonest symptom; osteoporosis and CVD are the key long-term effects.",
        "Add a progestogen to oestrogen in women with a uterus to protect the endometrium.",
        "Postmenopausal bleeding must always be investigated."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Define menopause and the climacteric and describe the underlying physiology.",
      "Describe the short-term symptoms and long-term effects of oestrogen deficiency at menopause.",
      "Discuss the benefits, risks and contraindications of hormone-replacement therapy.",
      "Explain the non-hormonal management of menopausal symptoms.",
      "Outline the nurse's role in supporting a woman through the menopause."
    ],
    assessment: [
      { type: "mcq", q: "Menopause is diagnosed after amenorrhoea lasting:", options: ["3 months", "6 months", "12 months", "24 months"], answer: 2, rationale: "Twelve consecutive months without menstruation confirms menopause." },
      { type: "mcq", q: "The biochemical marker that rises at menopause is:", options: ["Oestrogen", "Progesterone", "FSH", "hCG"], answer: 2, rationale: "Loss of ovarian feedback raises FSH markedly at menopause." },
      { type: "mcq", q: "The commonest symptom of menopause is:", options: ["Hot flushes", "Weight loss", "Hypertension", "Jaundice"], answer: 0, rationale: "Vasomotor hot flushes and night sweats are the hallmark symptoms." },
      { type: "mcq", q: "Menopause before which age is termed premature ovarian insufficiency?", options: ["45 years", "40 years", "50 years", "55 years"], answer: 1, rationale: "Menopause before 40 years is premature ovarian insufficiency." },
      { type: "mcq", q: "In a woman with a uterus, oestrogen-only HRT increases the risk of:", options: ["Endometrial cancer", "Anaemia", "Hot flushes", "Osteoporosis"], answer: 0, rationale: "Unopposed oestrogen causes endometrial hyperplasia and cancer, so a progestogen is added." },
      { type: "mcq", q: "A major long-term consequence of oestrogen deficiency is:", options: ["Improved bone density", "Osteoporosis", "Lower cardiovascular risk", "Increased fertility"], answer: 1, rationale: "Oestrogen loss accelerates bone resorption, causing osteoporosis." },
      { type: "mcq", q: "Which is a contraindication to systemic HRT?", options: ["Hot flushes", "Active venous thromboembolism", "Vaginal dryness", "Osteoporosis"], answer: 1, rationale: "Active thromboembolism, oestrogen-dependent cancer and undiagnosed bleeding contraindicate HRT." },
      { type: "mcq", q: "Genitourinary syndrome of menopause typically causes:", options: ["Vaginal dryness and dyspareunia", "Weight gain only", "Hyperthyroidism", "Amenorrhoea in youth"], answer: 0, rationale: "Oestrogen deficiency thins the urogenital epithelium causing dryness and dyspareunia." },
      { type: "mcq", q: "To reduce menopausal fracture risk, women are advised to take:", options: ["Extra caffeine", "Calcium and vitamin D with weight-bearing exercise", "Bed rest", "High-salt diet"], answer: 1, rationale: "Calcium, vitamin D and weight-bearing exercise protect bone." },
      { type: "mcq", q: "Transdermal (patch) oestrogen compared with oral is associated with:", options: ["Higher thromboembolism risk", "Lower thromboembolism risk", "No absorption", "Endometrial protection"], answer: 1, rationale: "Transdermal oestrogen carries a lower venous-thromboembolism risk than oral." },
      { type: "fill", q: "The transitional phase around the menopause is called the ____.", accept: ["climacteric", "perimenopause"], rationale: "The climacteric/perimenopause is the transition around menopause." },
      { type: "fill", q: "A progestogen is added to oestrogen HRT in women who still have a ____ to protect the endometrium.", accept: ["uterus", "womb"], rationale: "Women with an intact uterus need a progestogen to prevent endometrial cancer." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "gyn-09-growths",
    unit: "Unit 2 · Gynaecological Disorders",
    title: "Benign & Malignant Growths: Fibroids, Cysts, Molar Pregnancy & Breast Disorders",
    readMinutes: 24,
    summary: "Benign growths (uterine fibroids, ovarian cysts, cervical and endometrial polyps), gestational trophoblastic disease (hydatidiform mole), the features distinguishing benign from malignant tumours, common breast disorders, and screening (Pap smear, breast self-examination) with nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Benign versus malignant tumours", p: "Distinguishing benign from malignant growth guides urgency and treatment.", list: [
        "Benign — slow-growing, encapsulated, well-differentiated, do not invade or spread; e.g. fibroid, ovarian cyst, polyp.",
        "Malignant (cancer) — rapid, invasive, poorly differentiated, spread locally and to distant sites (metastasis), and recur; e.g. cervical, endometrial, ovarian and breast cancer.",
        "Warning features of malignancy — irregular abnormal bleeding, postmenopausal bleeding, rapid growth, a hard fixed irregular mass, weight loss and lymph-node enlargement."
      ] },
      { h: "Uterine fibroids (leiomyoma)", p: "Fibroids are benign tumours of uterine smooth muscle, the commonest pelvic tumour in women of reproductive age; they are oestrogen-dependent, so they grow in pregnancy and shrink after menopause. They are classified by site as submucous (projecting into the cavity), intramural (in the wall) and subserous (on the outer surface)." },
      { h: "Fibroids — features & complications", p: "Many fibroids are asymptomatic; symptoms depend on size and site.", list: [
        "Menorrhagia (especially submucous) and consequent anaemia.",
        "Pelvic pressure, mass, urinary frequency or constipation.",
        "Dysmenorrhoea and, sometimes, infertility or recurrent miscarriage.",
        "In pregnancy — red degeneration (painful), malpresentation, obstructed labour, PPH.",
        "Rarely, torsion of a pedunculated fibroid; malignant change (leiomyosarcoma) is very rare."
      ] },
      { h: "Fibroids — management", p: "Small asymptomatic fibroids are simply observed. Symptomatic fibroids are managed medically (tranexamic acid/NSAIDs for bleeding; GnRH analogues to shrink them temporarily before surgery) or surgically — myomectomy (removal preserving the uterus, for women wanting fertility) or hysterectomy (definitive, for completed families). Uterine-artery embolisation is an alternative where available. Anaemia is corrected." },
      { h: "Ovarian cysts", p: "Ovarian cysts are fluid-filled sacs in or on the ovary. Functional cysts (follicular and corpus-luteum cysts) arise from the normal cycle and usually resolve spontaneously. Other benign cysts include the dermoid cyst (mature teratoma) and endometriotic 'chocolate' cyst. Most are asymptomatic but may cause pelvic pain, a mass, or menstrual disturbance." },
      { h: "Ovarian cysts — complications & assessment", p: "Cysts can present acutely. Torsion (twisting of the ovarian pedicle) causes sudden severe pain and is a surgical emergency; a cyst may also rupture or bleed. Assessment uses pelvic ultrasound and, especially in older women or suspicious cysts, tumour markers (e.g. CA-125) to gauge malignancy risk. Persistent, large, solid, bilateral or postmenopausal cysts raise concern for ovarian cancer, which is often silent until advanced." },
      { h: "Cervical & endometrial polyps", p: "Polyps are benign pedunculated overgrowths. Cervical polyps are common, often causing intermenstrual or postcoital bleeding or discharge; they are usually removed easily and sent for histology. Endometrial polyps cause abnormal uterine or postmenopausal bleeding and are removed by hysteroscopy; histology excludes malignancy." },
      { h: "Hydatidiform (vesicular) mole", p: "Hydatidiform mole is a form of gestational trophoblastic disease in which the chorionic villi degenerate into grape-like vesicles with trophoblastic overgrowth. A complete mole has no fetus; a partial mole has some fetal tissue. It presents with amenorrhoea then irregular bleeding, a uterus large for dates, passage of grape-like vesicles, exaggerated pregnancy symptoms (severe hyperemesis, early pre-eclampsia) and very high hCG; ultrasound shows a 'snowstorm' pattern with no fetus.", figure: {
        caption: "Complete hydatidiform mole: the uterus is filled with grape-like vesicular villi and no fetus, with a 'snowstorm' ultrasound appearance and markedly raised hCG.",
        svg: '<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hydatidiform mole"><path d="M110 40 Q60 90 90 150 Q120 185 210 185 Q300 185 330 150 Q360 90 310 40 Q260 20 210 22 Q160 20 110 40 Z" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><circle cx="150" cy="80" r="12" fill="#BBF7D0" stroke="#15803D"/><circle cx="185" cy="70" r="10" fill="#BBF7D0" stroke="#15803D"/><circle cx="220" cy="85" r="14" fill="#BBF7D0" stroke="#15803D"/><circle cx="255" cy="72" r="11" fill="#BBF7D0" stroke="#15803D"/><circle cx="165" cy="115" r="13" fill="#BBF7D0" stroke="#15803D"/><circle cx="205" cy="125" r="11" fill="#BBF7D0" stroke="#15803D"/><circle cx="245" cy="118" r="12" fill="#BBF7D0" stroke="#15803D"/><circle cx="285" cy="105" r="10" fill="#BBF7D0" stroke="#15803D"/><circle cx="130" cy="120" r="10" fill="#BBF7D0" stroke="#15803D"/><text x="210" y="175" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Grape-like vesicles, no fetus</text></svg>'
      } },
      { h: "Molar pregnancy — management & follow-up", p: "The mole is evacuated (usually by suction curettage). Because trophoblastic tissue can persist or progress to choriocarcinoma (a malignant tumour), serial serum hCG is monitored until it returns to normal and remains so; pregnancy is avoided during follow-up (usually 6–12 months) because a new pregnancy's hCG would mask relapse. Rising or plateauing hCG indicates persistent trophoblastic disease requiring chemotherapy, to which choriocarcinoma is highly responsive." },
      { h: "Cervical cancer & Pap smear screening", p: "Cervical cancer, usually caused by persistent high-risk human papillomavirus (HPV), is a leading cancer in Bangladeshi women and is preventable. The Papanicolaou (Pap) smear (or HPV testing / visual inspection with acetic acid, VIA, used in Bangladesh) detects pre-cancerous changes so they can be treated before cancer develops. HPV vaccination of girls further prevents it. Warning symptoms include postcoital, intermenstrual or postmenopausal bleeding and offensive discharge." },
      { h: "Breast disorders — benign", p: "Common benign breast conditions include fibroadenoma (a smooth, mobile, firm 'breast mouse' in young women), fibrocystic change (lumpy, tender breasts varying with the cycle), simple cysts, and duct ectasia. Most breast lumps are benign, but every lump must be assessed to exclude cancer." },
      { h: "Mastitis & breast abscess", p: "Mastitis is inflammation of the breast, usually during lactation, from milk stasis with infection (commonly Staphylococcus aureus entering through a cracked nipple), giving a red, hot, painful, swollen wedge-shaped area with fever. Management: continue breastfeeding/expressing to drain the breast, warm compresses, analgesia and antibiotics. If it progresses to a fluctuant breast abscess, incision and drainage (or needle aspiration) is needed." },
      { h: "Breast cancer & self-examination", p: "Breast cancer typically presents as a hard, painless, irregular, fixed lump, sometimes with nipple retraction or discharge, skin dimpling ('peau d'orange') or an axillary node. Early detection through breast awareness, monthly breast self-examination (best done a few days after the period), clinical examination and, where available, mammography markedly improves survival. Any persistent breast lump must be referred for triple assessment (clinical, imaging, biopsy)." },
      { h: "Nursing management of growths", list: [
        "Careful history and examination; prepare women for investigations (ultrasound, biopsy, smear).",
        "Detect and correct anaemia in women with fibroids/heavy bleeding.",
        "Give pre- and post-operative care for myomectomy, cystectomy or hysterectomy.",
        "Teach breast self-examination and promote cervical screening (Pap/VIA) and HPV vaccination.",
        "Support molar-pregnancy patients through hCG follow-up and the need to postpone pregnancy.",
        "Provide sensitive counselling and psychological support, especially where cancer is suspected."
      ] },
      { h: "Key facts to remember", list: [
        "Fibroids are oestrogen-dependent; myomectomy preserves fertility, hysterectomy is definitive.",
        "Ovarian cyst torsion = sudden severe pain, a surgical emergency.",
        "Molar pregnancy = very high hCG, 'snowstorm' scan; follow hCG to exclude choriocarcinoma.",
        "Cervical cancer is HPV-related and preventable by screening (Pap/VIA) and vaccination.",
        "Any persistent breast lump needs triple assessment; postmenopausal breast lump is cancer until proven otherwise."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Differentiate benign from malignant tumours and list the warning features of malignancy.",
      "Describe the types, clinical features and management of uterine fibroids.",
      "Describe hydatidiform mole, its clinical features, management and hCG follow-up.",
      "Discuss cervical cancer screening and prevention in the Bangladesh context.",
      "Outline the management of mastitis and the teaching of breast self-examination."
    ],
    assessment: [
      { type: "mcq", q: "Uterine fibroids are tumours of:", options: ["Glandular endometrium", "Smooth muscle (myometrium)", "Cervical epithelium", "Ovarian follicles"], answer: 1, rationale: "Fibroids (leiomyomas) arise from uterine smooth muscle." },
      { type: "mcq", q: "Fibroids typically shrink after menopause because they are:", options: ["Oestrogen-dependent", "Progesterone-dependent", "Insulin-dependent", "hCG-dependent"], answer: 0, rationale: "Fibroids are oestrogen-dependent and regress when oestrogen falls." },
      { type: "mcq", q: "Sudden severe unilateral pelvic pain from a twisted ovarian cyst indicates:", options: ["Torsion", "Menorrhagia", "Fibroid", "Prolapse"], answer: 0, rationale: "Ovarian torsion is a surgical emergency causing acute severe pain." },
      { type: "mcq", q: "The classic ultrasound appearance of a complete hydatidiform mole is:", options: ["A visible fetus with heartbeat", "A 'snowstorm' pattern with no fetus", "An empty small uterus", "Twin pregnancy"], answer: 1, rationale: "A complete mole shows a snowstorm pattern and no fetus, with very high hCG." },
      { type: "mcq", q: "After evacuation of a molar pregnancy, follow-up chiefly monitors:", options: ["Haemoglobin", "Thyroid hormones", "Serum hCG", "Blood glucose"], answer: 2, rationale: "Serial hCG detects persistent trophoblastic disease/choriocarcinoma." },
      { type: "mcq", q: "The malignant tumour that may follow a hydatidiform mole is:", options: ["Fibroadenoma", "Leiomyoma", "Dermoid cyst", "Choriocarcinoma"], answer: 3, rationale: "Choriocarcinoma is a malignancy that can arise from molar pregnancy." },
      { type: "mcq", q: "The Pap smear is used to detect:", options: ["Ovarian cysts", "Pre-cancerous cervical changes", "Fibroids", "Breast lumps"], answer: 1, rationale: "The Pap smear screens for pre-malignant and malignant cervical cell changes." },
      { type: "mcq", q: "Cervical cancer is most strongly associated with persistent infection by:", options: ["Human papillomavirus", "Candida", "Trichomonas", "Gardnerella"], answer: 0, rationale: "High-risk HPV causes almost all cervical cancer." },
      { type: "mcq", q: "First-line management of lactational mastitis includes:", options: ["Stopping breastfeeding immediately", "Continued milk drainage, analgesia and antibiotics", "Immediate mastectomy", "Fluid restriction"], answer: 1, rationale: "Continued drainage plus antibiotics and analgesia treat mastitis; stopping feeding worsens stasis." },
      { type: "mcq", q: "A feature suggesting a breast lump is malignant is:", options: ["Soft, mobile and tender", "Varies with the cycle", "Hard, fixed and irregular with skin dimpling", "Disappears after the period"], answer: 2, rationale: "A hard, fixed, irregular lump with skin changes suggests malignancy." },
      { type: "fill", q: "A benign, smooth, mobile, firm breast lump common in young women is a ____.", accept: ["fibroadenoma"], rationale: "Fibroadenoma is the common benign breast tumour of young women." },
      { type: "fill", q: "Surgical removal of fibroids while preserving the uterus is called ____.", accept: ["myomectomy"], rationale: "Myomectomy removes fibroids and conserves fertility." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "gyn-10-displacement",
    unit: "Unit 2 · Gynaecological Disorders",
    title: "Uterine Displacement & Pelvic-Floor Relaxation: Prolapse, Cystocele, Rectocele",
    readMinutes: 20,
    summary: "The normal position of the uterus, retroversion, and the causes, degrees, clinical features and conservative and surgical management of genital prolapse (uterine descent, cystocele, rectocele, enterocele), with the nurse's role in prevention and care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Normal position & supports of the uterus", p: "The normal uterus is anteverted (tilted forward on the vagina) and anteflexed (bent forward on the cervix), resting over the bladder. It is held in place by the pelvic-floor muscles (chiefly levator ani), the endopelvic fascia, and ligaments — the transverse cervical (cardinal/Mackenrodt), uterosacral, round and broad ligaments. Weakness of these supports allows the uterus and vaginal walls to descend (prolapse)." },
      { h: "Uterine retroversion", p: "In about 20% of women the uterus is naturally retroverted (tilted backward). This is usually a harmless variant causing no symptoms and needing no treatment. Occasionally a fixed retroverted uterus (from endometriosis or adhesions) causes backache, dyspareunia or, rarely in pregnancy, incarceration; management addresses the cause." },
      { h: "Genital prolapse — definition", p: "Genital (pelvic organ) prolapse is the descent of the pelvic organs — uterus and/or the vaginal walls with the bladder, rectum or bowel — through a weakened pelvic floor toward or beyond the vaginal opening. It is common in older, parous women and, though not life-threatening, causes considerable discomfort and reduced quality of life." },
      { h: "Types of prolapse", p: "Prolapse is named by the organ that descends.", list: [
        "Cystocele — descent of the bladder into the anterior vaginal wall.",
        "Urethrocele — descent of the urethra (often with cystocele → cystourethrocele).",
        "Rectocele — bulging of the rectum into the posterior vaginal wall.",
        "Enterocele — herniation of small bowel into the upper posterior vaginal wall (pouch of Douglas).",
        "Uterine prolapse — descent of the uterus and cervix down the vagina.",
        "Vault prolapse — descent of the vaginal vault after hysterectomy."
      ], figure: {
        caption: "Sites of pelvic-organ prolapse: cystocele (anterior wall/bladder), rectocele (posterior wall/rectum), enterocele (upper posterior wall/bowel) and uterine descent.",
        svg: '<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of pelvic organ prolapse"><line x1="60" y1="20" x2="60" y2="200" stroke="#334155" stroke-width="2"/><text x="70" y="35" font-family="sans-serif" font-size="10" fill="#334155">Anterior</text><ellipse cx="120" cy="70" rx="40" ry="26" fill="#FEE2E2" stroke="#B91C1C"/><text x="120" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#991B1B">Cystocele</text><ellipse cx="120" cy="150" rx="40" ry="26" fill="#FED7AA" stroke="#C2410C"/><text x="120" y="154" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#9A3412">Rectocele</text><rect x="240" y="30" width="70" height="60" rx="8" fill="#BBF7D0" stroke="#15803D"/><text x="275" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Uterus ↓</text><path d="M275 90 L275 140" stroke="#15803D" stroke-width="2" stroke-dasharray="4 3"/><polygon points="275,150 270,138 280,138" fill="#15803D"/><text x="275" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Uterine prolapse</text><ellipse cx="380" cy="120" rx="38" ry="24" fill="#E0E7FF" stroke="#4338CA"/><text x="380" y="124" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#3730A3">Enterocele</text></svg>'
      } },
      { h: "Degrees of uterine prolapse", p: "Uterine descent is graded by how far the cervix has descended.", list: [
        "First degree — the cervix descends within the vagina but remains inside.",
        "Second degree — the cervix descends to or reaches the vaginal introitus (vaginal opening).",
        "Third degree (procidentia when complete) — the cervix and uterus protrude outside the vulva.",
        "(Modern staging uses the POP-Q system to quantify descent objectively.)"
      ] },
      { h: "Causes & risk factors", p: "Prolapse results from anything that weakens or overstretches the pelvic supports.", list: [
        "Childbirth — repeated vaginal births, prolonged or instrumental labour, large babies (the leading cause).",
        "Age and oestrogen deficiency after menopause (tissue atrophy).",
        "Chronically raised intra-abdominal pressure — chronic cough, constipation with straining, heavy lifting, obesity.",
        "Congenital connective-tissue weakness.",
        "Previous pelvic surgery (e.g. vault prolapse after hysterectomy)."
      ] },
      { h: "Clinical features", p: "Symptoms depend on the type and degree.", list: [
        "A sensation of 'something coming down' or a lump/bulge in the vagina, worse on standing or straining.",
        "Dragging pelvic or low-back discomfort relieved by lying down.",
        "Cystocele — urinary frequency, urgency, stress incontinence, incomplete emptying, recurrent infection.",
        "Rectocele — difficulty in defecation, needing to 'splint' the vagina to empty the bowel.",
        "With procidentia — a visible protruding mass, decubitus ulceration, discharge and difficulty walking.",
        "Dyspareunia and reduced sexual satisfaction."
      ] },
      { h: "Assessment", p: "Assessment includes a history of symptoms and risk factors, and examination — inspecting the prolapse at rest and on straining (Valsalva), often in the left-lateral position with a Sims speculum, and grading the descent. Urinary symptoms may need residual-volume and urodynamic assessment; screen for and treat any decubitus ulcer before surgery." },
      { h: "Conservative management", p: "Mild prolapse and women unfit or unwilling to have surgery are managed conservatively.", list: [
        "Pelvic-floor muscle (Kegel) exercises to strengthen the levator ani — most useful in mild cases and prevention.",
        "Vaginal pessaries (ring or shelf) that mechanically support the prolapse; they require regular cleaning/changing and monitoring for ulceration.",
        "Topical (vaginal) oestrogen in postmenopausal women to improve tissue quality.",
        "Weight reduction and treatment of chronic cough and constipation to lower intra-abdominal pressure."
      ] },
      { h: "Surgical management", p: "Surgery repairs the defect and, ideally, restores support. Options include anterior colporrhaphy (for cystocele), posterior colporrhaphy (for rectocele), and vaginal hysterectomy with pelvic-floor repair for uterine prolapse. Fothergill's (Manchester) operation conserves the uterus in selected younger women; sacrocolpopexy or sacrospinous fixation treats vault prolapse. The choice depends on the type, the woman's age and her wish to preserve fertility or the uterus." },
      { h: "Prevention", p: "Prolapse is largely preventable: good intrapartum care (avoiding prolonged pushing and difficult instrumental birth), postnatal pelvic-floor exercises, spacing of pregnancies, avoiding heavy lifting in the puerperium, treating chronic cough and constipation, weight control, and postmenopausal care of pelvic tissues. Teaching pelvic-floor exercises to all postnatal women is a key nursing intervention." },
      { h: "Nursing management", list: [
        "Teach and supervise pelvic-floor exercises and correct technique.",
        "Instruct on pessary care, hygiene and follow-up if a pessary is used.",
        "Advise on avoiding straining — manage constipation, cough and heavy lifting; encourage weight loss.",
        "Provide pre- and post-operative care for repair surgery (bladder/bowel care, wound and catheter care, avoiding early straining).",
        "Give sensitive counselling about body image, sexual function and prognosis."
      ] },
      { h: "Key facts to remember", list: [
        "Normal uterus = anteverted and anteflexed; ~20% are (usually harmless) retroverted.",
        "Cystocele = bladder; rectocele = rectum; enterocele = bowel; procidentia = whole uterus outside.",
        "Childbirth is the leading cause of prolapse.",
        "Pelvic-floor (Kegel) exercises and pessaries are the mainstays of conservative care.",
        "Anterior/posterior colporrhaphy and vaginal hysterectomy are common surgical repairs."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Describe the normal position and supports of the uterus and define retroversion.",
      "Classify genital prolapse and describe the degrees of uterine prolapse.",
      "Discuss the causes and clinical features of pelvic-organ prolapse.",
      "Compare conservative and surgical management of uterine prolapse.",
      "Explain the prevention of prolapse and the nurse's teaching role."
    ],
    assessment: [
      { type: "mcq", q: "The normal uterus is:", options: ["Retroverted and retroflexed", "Anteverted and anteflexed", "Prolapsed", "Fixed and immobile"], answer: 1, rationale: "The normal uterus lies anteverted and anteflexed over the bladder." },
      { type: "mcq", q: "Descent of the bladder into the anterior vaginal wall is a:", options: ["Rectocele", "Cystocele", "Enterocele", "Vault prolapse"], answer: 1, rationale: "A cystocele is anterior-wall descent of the bladder." },
      { type: "mcq", q: "Bulging of the rectum into the posterior vaginal wall is a:", options: ["Cystocele", "Urethrocele", "Rectocele", "Enterocele"], answer: 2, rationale: "A rectocele is posterior-wall descent of the rectum." },
      { type: "mcq", q: "Complete uterine prolapse with the uterus outside the vulva is called:", options: ["Cystocele", "First-degree prolapse", "Procidentia", "Retroversion"], answer: 2, rationale: "Procidentia is complete third-degree uterine prolapse outside the introitus." },
      { type: "mcq", q: "The leading cause of genital prolapse is:", options: ["Childbirth injury to the pelvic floor", "Hypertension", "Diabetes", "Anaemia"], answer: 0, rationale: "Repeated or traumatic vaginal childbirth is the chief cause of prolapse." },
      { type: "mcq", q: "The main conservative exercise for prolapse is:", options: ["Aerobic running", "Pelvic-floor (Kegel) exercises", "Sit-ups", "Breathing exercises"], answer: 1, rationale: "Pelvic-floor exercises strengthen the levator ani supports." },
      { type: "mcq", q: "A mechanical device inserted vaginally to support a prolapse is a:", options: ["Speculum", "Pessary", "Catheter", "Sound"], answer: 1, rationale: "A vaginal pessary (ring or shelf) mechanically supports the prolapse." },
      { type: "mcq", q: "Anterior colporrhaphy is the surgical repair for:", options: ["Rectocele", "Cystocele", "Enterocele", "Vault prolapse"], answer: 1, rationale: "Anterior colporrhaphy repairs the anterior wall (cystocele)." },
      { type: "mcq", q: "Which raises the risk of prolapse by increasing intra-abdominal pressure?", options: ["Chronic cough and constipation", "Bed rest", "Low body weight", "Nulliparity"], answer: 0, rationale: "Chronic cough, straining at stool and heavy lifting raise intra-abdominal pressure." },
      { type: "mcq", q: "About what proportion of women have a (usually harmless) retroverted uterus?", options: ["1%", "20%", "50%", "80%"], answer: 1, rationale: "Around 20% of women have a naturally retroverted uterus." },
      { type: "fill", q: "Herniation of small bowel into the upper posterior vaginal wall is called an ____.", accept: ["enterocele"], rationale: "An enterocele is a hernia of bowel through the pouch of Douglas." },
      { type: "fill", q: "Second-degree uterine prolapse means the cervix descends to the level of the ____ (vaginal opening).", accept: ["introitus", "vaginal introitus", "vaginal opening"], rationale: "In second-degree prolapse the cervix reaches the introitus." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "gyn-11-abnormal-complications",
    unit: "Unit 3 · High-Risk Pregnancy",
    title: "Pregnant Women with Abnormal Obstetric Complications",
    readMinutes: 24,
    summary: "Special high-risk groups and pregnancy-specific complications — teenage pregnancy, grand multiparity, elderly primigravida, multiple pregnancy, poly-/oligohydramnios, hyperemesis gravidarum and ectopic pregnancy — with their bio-psychosocial impact and nursing interventions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Certain maternal characteristics and pregnancy conditions raise the risk of an adverse outcome and demand closer surveillance and specialist care. This topic groups the common 'at-risk' categories and the pregnancy-specific complications the nurse must recognise, understand and help manage, always considering the physical, psychological and social dimensions together." },
      { h: "Teenage (adolescent) pregnancy", p: "Pregnancy under 18–20 years, very common in Bangladesh because of early marriage, carries higher risks: anaemia, pre-eclampsia, preterm birth, low birth weight, cephalopelvic disproportion (an immature pelvis), obstructed labour and obstetric fistula, and higher maternal and perinatal mortality. There is also a heavy psychosocial burden — interrupted education, poverty and stigma. Nursing focuses on early booking, nutrition, danger-sign education, emotional support and family-planning counselling." },
      { h: "Grand multipara", p: "A grand multipara (para ≥5) is at increased risk of anaemia, malpresentation, placenta praevia, uterine atony and postpartum haemorrhage, and, in labour, rapid or obstructed labour and uterine rupture (an overstretched, lax uterus). Nursing includes correction of anaemia, hospital birth with active management of the third stage, readiness for PPH, and postnatal contraception counselling." },
      { h: "Elderly primigravida", p: "A first pregnancy at 35 years or older carries higher rates of hypertension and pre-eclampsia, gestational diabetes, chromosomal abnormality (e.g. Down syndrome), placenta praevia, dysfunctional labour and caesarean birth. Careful antenatal screening (including for fetal anomaly and diabetes), a low threshold for intervention, and psychological support (these are often long-awaited or 'precious' pregnancies) are important." },
      { h: "Multiple pregnancy", p: "Multiple pregnancy (twins or more) may be monozygotic (from one ovum) or dizygotic (from two), the latter more common with older age, family history and ovulation-inducing treatment. The over-distended uterus and shared placental supply raise many risks.", list: [
        "Maternal — hyperemesis, anaemia, pre-eclampsia, polyhydramnios, preterm labour, APH and PPH.",
        "Fetal — prematurity, growth restriction, malpresentation, twin-to-twin transfusion (in monochorionic twins), higher perinatal mortality.",
        "Management — early diagnosis by ultrasound, extra iron/folate, closer surveillance, planned place and mode of birth, and readiness for PPH and neonatal care."
      ] },
      { h: "Polyhydramnios", p: "Polyhydramnios is an excess of amniotic fluid (amniotic fluid index >25 cm or deepest pool >8 cm). Causes include maternal diabetes, multiple pregnancy, and fetal anomalies that impair swallowing (e.g. oesophageal atresia, anencephaly). It causes maternal breathlessness and abdominal discomfort, and predisposes to malpresentation, cord prolapse, preterm labour, placental abruption on membrane rupture, and PPH. Management treats the cause and monitors closely." },
      { h: "Oligohydramnios", p: "Oligohydramnios is a deficiency of amniotic fluid (AFI <5 cm). It is associated with fetal renal anomalies, prolonged rupture of membranes, post-term pregnancy and placental insufficiency causing growth restriction. Consequences include cord compression, fetal distress, limb deformities and pulmonary hypoplasia in severe early cases. Management includes surveillance and planning timing of birth." },
      { h: "Hyperemesis gravidarum", p: "Hyperemesis gravidarum is severe, persistent vomiting of pregnancy (beyond ordinary 'morning sickness') causing dehydration, weight loss (>5%), electrolyte imbalance (hypokalaemia), ketosis and, if untreated, thiamine deficiency (Wernicke's encephalopathy). It is linked to high hCG (worse in molar and multiple pregnancy). Management: admit, rest the gut, correct fluids and electrolytes IV, give antiemetics and thiamine, monitor intake/output and weight, and provide reassurance." },
      { h: "Ectopic pregnancy", p: "Ectopic pregnancy is implantation outside the uterine cavity, most often in the fallopian tube. Risk factors include previous PID, tubal surgery or ectopic, and IUCD use. It classically presents with a period of amenorrhoea, then unilateral lower-abdominal pain and slight vaginal bleeding; a positive pregnancy test with an empty uterus on scan is key. Rupture is life-threatening.", figure: {
        caption: "Common sites of ectopic implantation, with the ampullary part of the fallopian tube being the most frequent.",
        svg: '<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sites of ectopic pregnancy"><rect x="185" y="90" width="70" height="80" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="220" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Uterus</text><path d="M185 105 Q120 70 70 90" fill="none" stroke="#0F4C3A" stroke-width="3"/><path d="M255 105 Q320 70 370 90" fill="none" stroke="#0F4C3A" stroke-width="3"/><circle cx="150" cy="82" r="9" fill="#FED7AA" stroke="#C2410C"/><text x="150" y="66" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#9A3412">Isthmic</text><circle cx="105" cy="82" r="11" fill="#FEE2E2" stroke="#B91C1C"/><text x="105" y="60" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#991B1B">Ampullary</text><circle cx="72" cy="90" r="8" fill="#E0E7FF" stroke="#4338CA"/><text x="60" y="112" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#3730A3">Fimbrial</text><circle cx="220" cy="180" r="8" fill="#FEF9C3" stroke="#CA8A04"/><text x="255" y="184" font-family="sans-serif" font-size="8" fill="#854D0E">Cervical</text></svg>'
      } },
      { h: "Ruptured ectopic — emergency", p: "Tubal rupture causes sudden severe abdominal pain, shoulder-tip pain (diaphragmatic irritation from blood), collapse and signs of hypovolaemic shock, often with only slight vaginal bleeding (bleeding is internal). It is a surgical emergency: resuscitate with fluids and blood and prepare for urgent laparotomy/laparoscopy (salpingectomy or salpingostomy). Early unruptured ectopics may be treated medically with methotrexate or expectantly under strict follow-up." },
      { h: "Bio-psychosocial impact", p: "These conditions affect the whole woman. Physically they threaten her life and her baby's; psychologically they bring fear, anxiety, grief (in loss), and, for teenagers and unmarried women, shame and isolation; socially they interact with poverty, education, gender norms and family pressure. Woman-centred nursing addresses all three dimensions, not the diagnosis alone." },
      { h: "General nursing interventions", list: [
        "Early identification through history, examination and risk screening at booking.",
        "Close monitoring of mother and fetus appropriate to the condition.",
        "Correct anaemia and optimise nutrition; give iron and folate.",
        "Prepare for and respond to emergencies (PPH, shock, rupture).",
        "Health education on danger signs, rest, diet and follow-up.",
        "Psychological support, confidentiality and family-planning counselling.",
        "Timely referral to the appropriate level of care."
      ] },
      { h: "Key facts to remember", list: [
        "Teenage pregnancy <18–20 y; elderly primigravida ≥35 y; grand multipara para ≥5.",
        "Polyhydramnios AFI >25 cm; oligohydramnios AFI <5 cm.",
        "Hyperemesis = dehydration, ketosis, weight loss >5%; give thiamine to prevent Wernicke's.",
        "Ectopic = amenorrhoea + pain + bleeding + empty uterus on scan; rupture causes shoulder-tip pain and shock.",
        "Ruptured ectopic is a surgical emergency needing resuscitation and laparotomy."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Discuss the risks of teenage pregnancy and the nursing care of the pregnant adolescent in Bangladesh.",
      "Describe the maternal and fetal risks of multiple pregnancy and its management.",
      "Differentiate polyhydramnios from oligohydramnios by cause and consequence.",
      "Describe the clinical features and emergency management of ruptured ectopic pregnancy.",
      "Outline the assessment and management of hyperemesis gravidarum."
    ],
    assessment: [
      { type: "mcq", q: "The commonest site of ectopic pregnancy is the:", options: ["Ovary", "Fallopian tube", "Cervix", "Abdominal cavity"], answer: 1, rationale: "Most ectopic pregnancies implant in the fallopian tube (usually the ampulla)." },
      { type: "mcq", q: "Shoulder-tip pain in early pregnancy with collapse suggests:", options: ["Threatened abortion", "Ruptured ectopic pregnancy", "Hyperemesis", "Polyhydramnios"], answer: 1, rationale: "Blood irritating the diaphragm in ruptured ectopic causes referred shoulder-tip pain." },
      { type: "mcq", q: "Polyhydramnios is defined by an amniotic fluid index above:", options: ["10 cm", "15 cm", "25 cm", "5 cm"], answer: 2, rationale: "An AFI over 25 cm indicates polyhydramnios." },
      { type: "mcq", q: "A grand multipara is at particular risk of:", options: ["Postpartum haemorrhage", "Oligohydramnios only", "Improved uterine tone", "Reduced bleeding"], answer: 0, rationale: "The overstretched lax uterus predisposes the grand multipara to atony and PPH." },
      { type: "mcq", q: "To prevent Wernicke's encephalopathy in hyperemesis gravidarum, the nurse ensures the woman receives:", options: ["Iron", "Thiamine (vitamin B1)", "Vitamin C", "Calcium"], answer: 1, rationale: "Thiamine supplementation prevents Wernicke's encephalopathy in prolonged vomiting." },
      { type: "mcq", q: "Twins arising from two separate ova are:", options: ["Monozygotic", "Dizygotic", "Conjoined", "Identical"], answer: 1, rationale: "Dizygotic (non-identical) twins arise from two ova fertilised separately." },
      { type: "mcq", q: "Oligohydramnios is associated with:", options: ["Fetal renal anomalies", "Maternal diabetes", "Oesophageal atresia", "Twin pregnancy"], answer: 0, rationale: "Reduced fetal urine (renal anomalies) or membrane rupture causes oligohydramnios." },
      { type: "mcq", q: "Teenage pregnancy is particularly associated with:", options: ["Cephalopelvic disproportion and obstructed labour", "Reduced anaemia", "Lower blood pressure", "Post-term pregnancy"], answer: 0, rationale: "An immature pelvis predisposes adolescents to CPD and obstructed labour." },
      { type: "mcq", q: "An early, unruptured ectopic pregnancy may be treated medically with:", options: ["Oxytocin", "Methotrexate", "Misoprostol", "Iron"], answer: 1, rationale: "Methotrexate can treat selected small, unruptured ectopic pregnancies." },
      { type: "mcq", q: "A first pregnancy in a woman aged 38 years increases the risk of:", options: ["Chromosomal abnormality such as Down syndrome", "Reduced caesarean rate", "Lower diabetes risk", "Fewer complications"], answer: 0, rationale: "Advanced maternal age raises the risk of chromosomal abnormalities and other complications." },
      { type: "fill", q: "Severe, persistent vomiting of pregnancy causing dehydration and ketosis is called ____ gravidarum.", accept: ["hyperemesis"], rationale: "Hyperemesis gravidarum is severe intractable vomiting of pregnancy." },
      { type: "fill", q: "Implantation of the pregnancy outside the uterine cavity is called an ____ pregnancy.", accept: ["ectopic"], rationale: "Ectopic pregnancy implants outside the uterine cavity, usually in the tube." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "gyn-12-htn-haemorrhage",
    unit: "Unit 3 · High-Risk Pregnancy",
    title: "Hypertensive Disorders of Pregnancy & Antepartum Haemorrhage",
    readMinutes: 26,
    summary: "Gestational hypertension, pre-eclampsia/eclampsia (including the magnesium-sulphate regimen and toxicity monitoring) and HELLP syndrome, and antepartum haemorrhage — distinguishing placenta praevia from abruptio placentae — with assessment and emergency nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Classification of hypertensive disorders", p: "Hypertension in pregnancy (BP ≥140/90 mmHg) is classified into four groups.", list: [
        "Gestational hypertension — new hypertension after 20 weeks without proteinuria.",
        "Pre-eclampsia — hypertension after 20 weeks with proteinuria or other organ involvement.",
        "Eclampsia — pre-eclampsia complicated by generalised convulsions.",
        "Chronic hypertension — present before pregnancy or before 20 weeks (± superimposed pre-eclampsia)."
      ] },
      { h: "Pathophysiology of pre-eclampsia", p: "Pre-eclampsia originates in abnormal placentation: inadequate remodelling of the spiral arteries causes placental ischaemia, which releases factors that damage the maternal vascular endothelium throughout the body. The result is widespread vasospasm, hypertension, increased vascular permeability (oedema, proteinuria) and activation of clotting — affecting the kidneys, liver, brain and placenta. Delivery of the placenta is the only cure." },
      { h: "Features & severity of pre-eclampsia", p: "Mild disease may be silent, found only on BP and urine checks. Features of severe pre-eclampsia signal danger.", list: [
        "BP ≥160/110 mmHg; heavy proteinuria.",
        "Severe headache, visual disturbance (flashing lights), drowsiness.",
        "Epigastric or right-upper-quadrant pain (liver involvement), vomiting.",
        "Rapidly increasing oedema of face and hands; reduced urine output.",
        "Brisk (hyper) reflexes and clonus — a warning of impending eclampsia.",
        "Fetal growth restriction and reduced movements."
      ] },
      { h: "Eclampsia", p: "Eclampsia is the occurrence of tonic-clonic convulsions in pre-eclampsia, which may occur antenatally, in labour or postnatally. It endangers mother (cerebral haemorrhage, aspiration, injury) and fetus (hypoxia). Management: protect the airway and prevent injury during the fit, left lateral position, oxygen, control seizures with magnesium sulphate, control BP, and expedite birth after stabilisation." },
      { h: "Magnesium sulphate regimen", p: "Magnesium sulphate (MgSO4) is the drug of choice to treat and prevent eclamptic seizures. A common regimen (Pritchard) gives a loading dose (e.g. 4 g IV slowly plus 10 g deep IM, 5 g into each buttock) followed by maintenance (5 g IM every 4 hours in alternate buttocks), continued for 24 hours after the last fit or after birth. The therapeutic serum level is about 4–7 mEq/L. MgSO4 is not an antihypertensive — separate agents control BP." },
      { h: "Monitoring for MgSO4 toxicity", p: "Because magnesium is excreted renally and has a narrow safety margin, toxicity must be watched for before each dose.", list: [
        "Deep tendon (patellar) reflexes must be present — loss of reflexes is the earliest sign of toxicity.",
        "Respiratory rate must be ≥12–16/min (respiratory depression is a serious sign).",
        "Urine output ≥30 mL/hour (25–30 mL/hr) — low output risks accumulation.",
        "If toxicity occurs, stop MgSO4 and give the antidote calcium gluconate (10 mL of 10% IV slowly)."
      ], figure: {
        caption: "Pre-dose safety checks before each maintenance dose of magnesium sulphate; loss of any one signals possible toxicity.",
        svg: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Magnesium sulphate monitoring checks"><rect x="20" y="45" width="150" height="80" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="95" y="75" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Reflexes</text><text x="95" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">present?</text><rect x="185" y="45" width="150" height="80" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="260" y="75" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Respiration</text><text x="260" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">≥12/min?</text><rect x="350" y="45" width="150" height="80" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="425" y="75" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Urine output</text><text x="425" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">≥30 mL/hr?</text><text x="260" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#991B1B">Any absent → withhold; antidote = calcium gluconate</text></svg>'
      } },
      { h: "Antihypertensive control", p: "Severe hypertension (≥160/110 mmHg) must be lowered to prevent maternal stroke, using labetalol (oral or IV), oral nifedipine or IV hydralazine, aiming for a controlled, gradual reduction (target around 140–150/90–100 mmHg) so as not to compromise placental perfusion. Methyldopa is a safe agent for less urgent, ongoing control." },
      { h: "HELLP syndrome", p: "HELLP is a severe variant of pre-eclampsia defined by Haemolysis, Elevated Liver enzymes and Low Platelets. The woman may have epigastric/right-upper-quadrant pain, nausea and malaise, sometimes with near-normal blood pressure. It carries a high risk of liver rupture, DIC, placental abruption and death, and requires stabilisation, correction of coagulation and prompt delivery." },
      { h: "Nursing management of pre-eclampsia/eclampsia", list: [
        "Monitor BP, urine (protein and output), reflexes, respiration, oxygen saturation and consciousness closely.",
        "Monitor the fetus (heart rate, movements, growth).",
        "Administer MgSO4 and antihypertensives safely with toxicity checks; keep calcium gluconate ready.",
        "Nurse in a quiet room; have suction, oxygen and emergency drugs at hand for seizure.",
        "Maintain strict fluid balance to avoid overload/pulmonary oedema.",
        "Prepare for birth; continue monitoring for 24–48 hours postpartum (fits can occur after birth)."
      ] },
      { h: "Antepartum haemorrhage (APH) — definition", p: "Antepartum haemorrhage is bleeding from the genital tract after 24 weeks (viability) and before birth. The two important causes are placenta praevia and abruptio placentae; other causes include local lesions and vasa praevia. APH threatens both mother (haemorrhage, shock) and fetus (hypoxia, death) and is an emergency." },
      { h: "Placenta praevia", p: "Placenta praevia is implantation of the placenta wholly or partly in the lower uterine segment, over or near the cervical os, graded I–IV by how much it covers the os. It causes recurrent, painless, bright-red bleeding with a soft, non-tender uterus and often a high or malpresenting fetal part. Vaginal examination is dangerous and must not be performed; diagnosis is by ultrasound. Management depends on gestation and bleeding — expectant if mild and preterm, caesarean birth for major degrees." },
      { h: "Abruptio placentae", p: "Abruptio placentae is premature separation of a normally situated placenta. It causes sudden, continuous, painful bleeding (which may be concealed) with a tense, tender, 'woody' hard uterus, and often fetal distress or death; the woman may be shocked out of proportion to visible loss. It is associated with hypertension, trauma and previous abruption, and may cause DIC (couvelaire uterus). Management is aggressive resuscitation and prompt delivery." },
      { h: "Distinguishing praevia from abruptio", p: "Rapid differentiation guides management.", list: [
        "Placenta praevia — painless, bright-red, recurrent bleeding; soft non-tender uterus; fetal condition usually good; NO vaginal examination.",
        "Abruptio placentae — painful, darker bleeding (may be concealed); tense tender hard uterus; fetal distress/death; shock may exceed visible loss; risk of DIC.",
        "Both need IV access, resuscitation, group-and-cross-match, fetal assessment and urgent obstetric care."
      ] },
      { h: "Emergency nursing management of APH", list: [
        "Never perform a vaginal examination in suspected APH until praevia is excluded.",
        "Call for help; lay the woman down, keep warm, give oxygen.",
        "Insert two large-bore IV lines; start fluids; take blood for grouping, cross-match and clotting.",
        "Monitor maternal vital signs and blood loss, and the fetal heart continuously.",
        "Prepare for possible transfusion and caesarean birth; give anti-D if Rh-negative.",
        "Provide reassurance and keep the woman and family informed."
      ] },
      { h: "Key values to remember", list: [
        "Hypertension = BP ≥140/90; severe = ≥160/110 mmHg.",
        "MgSO4 therapeutic level 4–7 mEq/L; antidote calcium gluconate; check reflexes, RR ≥12, urine ≥30 mL/hr.",
        "HELLP = Haemolysis, Elevated Liver enzymes, Low Platelets.",
        "Praevia = painless bright-red bleeding, soft uterus, NO PV exam; abruptio = painful bleeding, hard tender uterus.",
        "APH = bleeding after 24 weeks; delivery cures pre-eclampsia."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Classify the hypertensive disorders of pregnancy and describe the pathophysiology of pre-eclampsia.",
      "Describe the magnesium-sulphate regimen for eclampsia and the monitoring for toxicity.",
      "What is HELLP syndrome and why is it dangerous?",
      "Compare placenta praevia and abruptio placentae by clinical features.",
      "Outline the emergency nursing management of a woman with antepartum haemorrhage."
    ],
    assessment: [
      { type: "mcq", q: "Pre-eclampsia is defined as hypertension after 20 weeks together with:", options: ["Anaemia", "Proteinuria or organ involvement", "Twins", "Glycosuria"], answer: 1, rationale: "Pre-eclampsia is new hypertension after 20 weeks with proteinuria or other organ dysfunction." },
      { type: "mcq", q: "The earliest clinical sign of magnesium sulphate toxicity is:", options: ["Loss of deep tendon reflexes", "Hypertension", "Increased urine output", "Tachycardia"], answer: 0, rationale: "Loss of patellar reflexes is the first warning of magnesium toxicity." },
      { type: "mcq", q: "The antidote to magnesium sulphate toxicity is:", options: ["Calcium gluconate", "Sodium bicarbonate", "Naloxone", "Vitamin K"], answer: 0, rationale: "Calcium gluconate reverses magnesium toxicity." },
      { type: "mcq", q: "Before each maintenance dose of MgSO4, urine output should be at least:", options: ["10 mL/hr", "20 mL/hr", "30 mL/hr", "60 mL/hr"], answer: 2, rationale: "Urine output must be ≥30 mL/hr to avoid magnesium accumulation." },
      { type: "mcq", q: "Painless, recurrent, bright-red vaginal bleeding with a soft uterus in late pregnancy suggests:", options: ["Abruptio placentae", "Placenta praevia", "Uterine rupture", "Vasa praevia"], answer: 1, rationale: "Placenta praevia causes painless bright-red bleeding with a soft, non-tender uterus." },
      { type: "mcq", q: "A tense, tender, 'woody' hard uterus with painful bleeding indicates:", options: ["Placenta praevia", "Abruptio placentae", "Fibroid", "Normal labour"], answer: 1, rationale: "Abruptio placentae produces a rigid, tender uterus with painful bleeding." },
      { type: "mcq", q: "In suspected antepartum haemorrhage the nurse must NOT perform:", options: ["Fetal heart auscultation", "Vaginal (digital) examination", "IV cannulation", "Vital-sign monitoring"], answer: 1, rationale: "Vaginal examination can provoke catastrophic bleeding in placenta praevia." },
      { type: "mcq", q: "HELLP syndrome stands for haemolysis, elevated liver enzymes and:", options: ["Low platelets", "Low pressure", "Low protein", "Low potassium"], answer: 0, rationale: "The 'LP' in HELLP is Low Platelets." },
      { type: "mcq", q: "The definitive cure for pre-eclampsia is:", options: ["Magnesium sulphate", "Delivery of the placenta", "Bed rest", "Antihypertensives"], answer: 1, rationale: "Delivery of the fetus and placenta is the only definitive cure." },
      { type: "mcq", q: "Severe hypertension in pregnancy is defined as blood pressure of at least:", options: ["140/90 mmHg", "150/95 mmHg", "160/110 mmHg", "130/85 mmHg"], answer: 2, rationale: "A BP of 160/110 mmHg or more is severe hypertension requiring urgent treatment." },
      { type: "fill", q: "The drug of choice to prevent and control eclamptic convulsions is ____.", accept: ["magnesium sulphate", "MgSO4", "magnesium sulfate"], rationale: "Magnesium sulphate is first-line for eclampsia." },
      { type: "fill", q: "Premature separation of a normally situated placenta is called abruptio ____.", accept: ["placentae", "placenta"], rationale: "Abruptio placentae is premature placental separation." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "gyn-13-anaemia-thalassaemia",
    unit: "Unit 3 · High-Risk Pregnancy",
    title: "Anaemia, Thalassaemia & Nutritional Complications in Pregnancy",
    readMinutes: 22,
    summary: "Iron-deficiency anaemia in pregnancy (its high prevalence in Bangladesh, grading, effects and iron/folate management), thalassaemia and other nutritional deficiencies, their effects on mother and fetus, and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Physiological anaemia of pregnancy", p: "In pregnancy the plasma volume increases more (about 50%) than the red-cell mass (about 25%), so the blood is diluted and haemoglobin concentration falls — 'physiological (dilutional) anaemia'. This is normal. True anaemia in pregnancy is defined by the WHO as a haemoglobin below 11 g/dL; below 7 g/dL is severe." },
      { h: "Prevalence & importance in Bangladesh", p: "Anaemia in pregnancy is very common in Bangladesh and South Asia, affecting a large proportion of pregnant women, mainly from iron deficiency compounded by poor diet, closely spaced pregnancies, hookworm and malaria in some areas, and adolescent pregnancy. It is a major contributor to maternal death (directly and by worsening haemorrhage), so its prevention is a national priority." },
      { h: "Causes of anaemia in pregnancy", list: [
        "Iron deficiency — by far the commonest (increased demand, poor intake, blood loss, hookworm).",
        "Folate and vitamin B12 deficiency (megaloblastic anaemia).",
        "Haemoglobinopathies — thalassaemia and sickle-cell disease.",
        "Chronic blood loss and infection (malaria, chronic disease).",
        "Multiple pregnancy and grand multiparity increasing demand."
      ] },
      { h: "Grading of anaemia", p: "Severity is graded by haemoglobin level, which guides management.", list: [
        "Mild — Hb 10–10.9 g/dL.",
        "Moderate — Hb 7–9.9 g/dL.",
        "Severe — Hb 4–6.9 g/dL.",
        "Very severe — Hb below 4 g/dL (life-threatening, risk of cardiac failure)."
      ] },
      { h: "Clinical features", p: "Mild anaemia may be symptomless. As it worsens the woman develops fatigue, weakness, breathlessness on exertion, palpitations, dizziness and pallor of the conjunctiva, tongue, nail beds and palms. Severe anaemia causes tachycardia, oedema and, ultimately, high-output cardiac failure, particularly around labour and the early puerperium." },
      { h: "Effects on mother", list: [
        "Reduced capacity to withstand blood loss at delivery — even normal loss can precipitate shock.",
        "Increased risk of pre-eclampsia and infection (poor immunity, puerperal sepsis).",
        "Poor wound healing; heart failure in severe cases.",
        "Increased maternal mortality."
      ] },
      { h: "Effects on fetus", list: [
        "Intrauterine growth restriction and low birth weight.",
        "Preterm birth.",
        "Intrauterine hypoxia and increased perinatal mortality.",
        "Reduced fetal iron stores, predisposing the infant to anaemia."
      ] },
      { h: "Investigations", p: "Assessment includes haemoglobin and a full blood count with red-cell indices (iron deficiency gives a microcytic, hypochromic picture; folate/B12 deficiency a macrocytic one), a peripheral blood film, serum ferritin (the best marker of iron stores), and, where indicated, haemoglobin electrophoresis for thalassaemia and stool examination for hookworm." },
      { h: "Prevention & iron-folate supplementation", p: "Routine antenatal iron and folic-acid supplementation is the cornerstone of prevention. A common standard is one tablet daily containing about 60 mg elemental iron plus 400 micrograms folic acid throughout pregnancy (and into the postpartum period), begun early. Folic acid also prevents neural-tube defects and should ideally start pre-conceptionally. Dietary advice, deworming and malaria control support prevention.", figure: {
        caption: "Stepwise management of anaemia in pregnancy by severity of haemoglobin.",
        svg: '<svg viewBox="0 0 540 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Management of anaemia by severity"><rect x="15" y="55" width="150" height="70" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="90" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Mild (10-10.9)</text><text x="90" y="102" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Oral iron + diet</text><rect x="185" y="55" width="160" height="70" rx="8" fill="#FEF9C3" stroke="#CA8A04"/><text x="265" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#854D0E">Moderate (7-9.9)</text><text x="265" y="102" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#854D0E">Oral/parenteral iron</text><rect x="365" y="55" width="160" height="70" rx="8" fill="#FEE2E2" stroke="#B91C1C"/><text x="445" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#991B1B">Severe (&lt;7)</text><text x="445" y="102" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#991B1B">Refer; transfuse if needed</text><polygon points="165,90 185,90 177,84 177,96" fill="#334155"/><polygon points="345,90 365,90 357,84 357,96" fill="#334155"/><text x="270" y="30" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Treat by severity + find the cause</text></svg>'
      } },
      { h: "Treatment of established anaemia", p: "Mild-to-moderate iron-deficiency anaemia is treated with therapeutic oral iron (e.g. ferrous sulphate, taken with vitamin C, away from tea/antacids to improve absorption), continued for about three months after Hb normalises to replenish stores. Poor tolerance or absorption or moderate anaemia near term may need parenteral iron. Severe anaemia near term, or with cardiac compromise, may require blood transfusion, given cautiously to avoid overload. Folate/B12 deficiency is treated with the respective vitamin, and the underlying cause (e.g. hookworm) is treated." },
      { h: "Thalassaemia", p: "Thalassaemia is an inherited (autosomal recessive) disorder of haemoglobin-chain synthesis, common in Bangladesh, producing chronic haemolytic anaemia. Carriers (thalassaemia trait, e.g. beta-thalassaemia minor) have mild anaemia and are usually well but can pass the gene on; two carrier parents risk a severely affected child (thalassaemia major), who needs lifelong transfusions and iron-chelation. Importantly, iron therapy does NOT correct thalassaemia and iron overload must be avoided; management includes screening, transfusion for major disease, folic acid, and genetic counselling and carrier screening of couples." },
      { h: "Other nutritional complications", p: "Beyond iron, pregnancy demands extra energy, protein, folate, iodine, calcium and vitamins. Deficiencies contribute to problems.", list: [
        "Protein-energy undernutrition → low birth weight and poor maternal reserves.",
        "Folate deficiency → megaloblastic anaemia and neural-tube defects.",
        "Iodine deficiency → miscarriage, stillbirth and impaired fetal brain development (cretinism).",
        "Calcium/vitamin D deficiency → maternal bone loss; vitamin A must not be given in high dose (teratogenic)."
      ] },
      { h: "Nursing management", list: [
        "Screen haemoglobin at booking and again in the third trimester; identify high-risk women.",
        "Give and teach adherence to iron-folate; explain how to take iron and manage side-effects (constipation, dark stools).",
        "Provide dietary counselling — iron-rich foods (meat, liver, dark-green leaves, pulses) with vitamin-C sources.",
        "Arrange deworming and treat infections; refer severe anaemia.",
        "Anticipate and prepare for PPH in the anaemic woman (active third-stage management).",
        "Support thalassaemia carriers with genetic counselling and screening of the couple."
      ] },
      { h: "Key values to remember", list: [
        "Anaemia in pregnancy = Hb <11 g/dL; severe <7 g/dL; very severe <4 g/dL.",
        "Iron deficiency → microcytic hypochromic; folate/B12 → macrocytic.",
        "Standard supplement ~60 mg elemental iron + 400 µg folic acid daily.",
        "Ferritin is the best marker of iron stores.",
        "Iron does NOT treat thalassaemia; avoid iron overload; give genetic counselling."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Distinguish physiological anaemia of pregnancy from true anaemia and grade its severity.",
      "Discuss the causes and prevention of anaemia in pregnancy in the Bangladesh context.",
      "Describe the effects of severe anaemia on the mother and fetus.",
      "Explain the management of iron-deficiency anaemia in pregnancy.",
      "What is thalassaemia and why must iron overload be avoided; outline the nurse's role."
    ],
    assessment: [
      { type: "mcq", q: "Anaemia in pregnancy is defined by the WHO as a haemoglobin below:", options: ["9 g/dL", "10 g/dL", "11 g/dL", "12 g/dL"], answer: 2, rationale: "The WHO defines anaemia in pregnancy as Hb below 11 g/dL." },
      { type: "mcq", q: "The commonest cause of anaemia in pregnancy is:", options: ["Folate deficiency", "Iron deficiency", "Thalassaemia", "Vitamin B12 deficiency"], answer: 1, rationale: "Iron-deficiency anaemia is by far the commonest form in pregnancy." },
      { type: "mcq", q: "Iron-deficiency anaemia gives a blood picture that is:", options: ["Macrocytic", "Microcytic and hypochromic", "Normocytic normochromic only", "Haemolytic with spherocytes"], answer: 1, rationale: "Iron deficiency causes small, pale (microcytic, hypochromic) red cells." },
      { type: "mcq", q: "The best laboratory marker of iron stores is:", options: ["Haemoglobin", "Serum ferritin", "White-cell count", "Platelet count"], answer: 1, rationale: "Serum ferritin reflects body iron stores." },
      { type: "mcq", q: "Physiological anaemia of pregnancy is due to:", options: ["Bleeding", "Greater rise in plasma volume than red-cell mass", "Iron overload", "Infection"], answer: 1, rationale: "Plasma volume rises more than red-cell mass, diluting haemoglobin." },
      { type: "mcq", q: "Which is TRUE of thalassaemia?", options: ["It is corrected by iron therapy", "Iron overload must be avoided", "It is an infection", "It only affects men"], answer: 1, rationale: "Iron does not treat thalassaemia; affected patients risk iron overload." },
      { type: "mcq", q: "Folic acid in pregnancy also helps prevent:", options: ["Neural-tube defects", "Hypertension", "Diabetes", "Prolapse"], answer: 0, rationale: "Folic acid prevents fetal neural-tube defects and megaloblastic anaemia." },
      { type: "mcq", q: "Severe anaemia is defined as a haemoglobin of:", options: ["10-10.9 g/dL", "7-9.9 g/dL", "4-6.9 g/dL", "≥11 g/dL"], answer: 2, rationale: "Severe anaemia is Hb 4–6.9 g/dL; very severe is below 4 g/dL." },
      { type: "mcq", q: "Oral iron absorption is improved by taking it with:", options: ["Tea", "Vitamin C", "Antacids", "Milk"], answer: 1, rationale: "Vitamin C enhances iron absorption; tea and antacids reduce it." },
      { type: "mcq", q: "A dangerous outcome of severe anaemia around delivery is:", options: ["Improved clotting", "Poor tolerance of blood loss and cardiac failure", "Reduced infection", "Higher birth weight"], answer: 1, rationale: "The anaemic woman tolerates blood loss poorly and may develop heart failure." },
      { type: "fill", q: "The standard daily antenatal supplement combines elemental iron with ____ acid.", accept: ["folic"], rationale: "Iron plus folic acid is the standard antenatal supplement." },
      { type: "fill", q: "An inherited disorder of haemoglobin-chain synthesis common in Bangladesh is ____.", accept: ["thalassaemia", "thalassemia"], rationale: "Thalassaemia is an inherited haemoglobinopathy prevalent in the region." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "gyn-14-medical-conditions",
    unit: "Unit 3 · High-Risk Pregnancy",
    title: "Pregnancy with Underlying Medical Conditions",
    readMinutes: 26,
    summary: "How pre-existing and pregnancy-induced medical disorders — diabetes, heart disease, thyroid disorders, hepatitis, rubella, urinary infection, sexually transmitted infections, HIV/AIDS (with PMTCT) and respiratory disease — affect mother and fetus, and the principles of their nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "General principles", p: "Pregnancy alters the course of many medical diseases, and those diseases in turn threaten the pregnancy. The keys are pre-conception counselling and optimisation where possible, multidisciplinary shared care, careful surveillance of mother and fetus, medication review for safety in pregnancy, and planning the timing and place of birth. Many conditions require birth in a facility with specialist and neonatal support." },
      { h: "Gestational diabetes mellitus (GDM)", p: "GDM is glucose intolerance first recognised in pregnancy, arising from the diabetogenic (insulin-resistant) effect of placental hormones. It is screened for (e.g. an oral glucose tolerance test at 24–28 weeks) in at-risk women. It causes fetal macrosomia (large baby → shoulder dystocia, birth trauma), polyhydramnios, neonatal hypoglycaemia, and later maternal type-2 diabetes. Management: diet and exercise first, then insulin (or metformin) if targets are not met; monitor blood glucose and fetal growth." },
      { h: "Pre-existing (pregestational) diabetes", p: "Women with type-1 or type-2 diabetes before pregnancy face higher risks: congenital malformations and miscarriage (from poor first-trimester control), pre-eclampsia, macrosomia or growth restriction, stillbirth and worsening of retinopathy/nephropathy. Good glycaemic control before and throughout pregnancy, folic acid, tight monitoring and planned birth are essential; insulin requirements rise as pregnancy advances and fall sharply after birth." },
      { h: "Heart disease in pregnancy", p: "Pregnancy increases cardiac output by 30–50%, stressing a diseased heart (rheumatic valve disease is still important in Bangladesh, alongside congenital lesions). Decompensation is likeliest around 28–32 weeks, in labour and just after birth. The NYHA functional class guides prognosis. Management: rest, treat anaemia and infection, avoid fluid overload, careful pain relief and a short, assisted second stage; ergometrine is often avoided. Antibiotic prophylaxis may be needed for some lesions." },
      { h: "Thyroid disorders", p: "Thyroid disease affects fertility and pregnancy. Untreated hypothyroidism causes miscarriage, pre-eclampsia, anaemia and impaired fetal neurodevelopment — thyroxine needs usually increase in pregnancy and must be maintained. Hyperthyroidism (commonly Graves' disease) risks miscarriage, preterm birth, growth restriction and, if severe, thyroid storm; it is treated with antithyroid drugs (propylthiouracil in early pregnancy) at the lowest effective dose. Iodine sufficiency is vital for fetal brain development." },
      { h: "Viral hepatitis", p: "Hepatitis in pregnancy (especially hepatitis B, endemic in Bangladesh, and hepatitis E which can be severe in pregnancy) can cause acute liver failure and vertical transmission to the baby. Hepatitis B is screened for antenatally; a baby born to an HBsAg-positive mother should receive hepatitis-B immunoglobulin and vaccine at birth to prevent transmission. Standard infection-control precautions protect staff." },
      { h: "Rubella (German measles)", p: "Rubella infection in early pregnancy is teratogenic, causing congenital rubella syndrome — deafness, cataracts, cardiac defects and learning disability — with risk greatest in the first trimester. There is no treatment once infection occurs, so prevention is key: rubella vaccination of girls/women before pregnancy (the vaccine is a live vaccine and must NOT be given during pregnancy), and avoiding contact with infected people." },
      { h: "Urinary tract infection (UTI)", p: "UTI is common in pregnancy because of urinary stasis from progesterone and pressure. Even asymptomatic bacteriuria matters: untreated it may progress to pyelonephritis and precipitate preterm labour. It is therefore screened for and treated with a pregnancy-safe antibiotic, with good fluid intake and hygiene advice. Acute pyelonephritis (loin pain, high fever, rigors) needs admission and IV antibiotics." },
      { h: "Sexually transmitted infections (STIs)", p: "STIs in pregnancy threaten mother and baby.", list: [
        "Syphilis — screened for antenatally; untreated it causes miscarriage, stillbirth and congenital syphilis; treated with penicillin.",
        "Gonorrhoea/chlamydia — can cause preterm birth and neonatal eye infection (ophthalmia neonatorum).",
        "Genital herpes — active lesions at term may indicate caesarean birth to protect the baby.",
        "Partner treatment and safe-sex counselling accompany treatment."
      ] },
      { h: "HIV/AIDS and PMTCT", p: "HIV can be transmitted from mother to child during pregnancy, birth or breastfeeding. Prevention of mother-to-child transmission (PMTCT) dramatically reduces this and rests on several pillars.", list: [
        "Antenatal HIV testing with counselling (opt-out).",
        "Lifelong antiretroviral therapy (ART) for the mother, started as early as possible to suppress viral load.",
        "Safe birth practices and, in the newborn, antiretroviral prophylaxis.",
        "Infant-feeding counselling (exclusive feeding as advised) and follow-up testing of the infant.",
        "Standard precautions and confidentiality throughout."
      ], figure: {
        caption: "The pillars of prevention of mother-to-child transmission (PMTCT) of HIV.",
        svg: '<svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pillars of PMTCT"><rect x="20" y="40" width="110" height="80" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="75" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Test &amp;</text><text x="75" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">counsel</text><rect x="150" y="40" width="110" height="80" rx="8" fill="#BBF7D0" stroke="#15803D"/><text x="205" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Maternal</text><text x="205" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">ART</text><rect x="280" y="40" width="110" height="80" rx="8" fill="#86EFAC" stroke="#15803D"/><text x="335" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Safe birth +</text><text x="335" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">infant proph.</text><rect x="410" y="40" width="100" height="80" rx="8" fill="#22C55E" stroke="#0F4C3A"/><text x="460" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Feeding</text><text x="460" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">+ follow-up</text><text x="260" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">PMTCT of HIV</text></svg>'
      } },
      { h: "Respiratory disease", p: "Asthma is the commonest respiratory disorder in pregnancy; well-controlled asthma has a good outcome, and inhaled treatment should be continued because uncontrolled asthma (hypoxia) is more dangerous to the fetus than the medicines. Pneumonia and tuberculosis (important in Bangladesh) must be treated promptly; most anti-TB drugs are safe in pregnancy and treatment should not be delayed." },
      { h: "General nursing management", list: [
        "Take a full medical history at booking and identify pre-existing disease early.",
        "Facilitate multidisciplinary shared care and specialist referral.",
        "Monitor the specific disease and the pregnancy (fetal growth and wellbeing).",
        "Teach the woman about her condition, medication safety and danger signs.",
        "Support adherence (e.g. ART, insulin, thyroxine, anti-TB drugs) and attend to nutrition and infection control.",
        "Plan the timing, mode and place of birth with readiness for maternal and neonatal complications.",
        "Provide postnatal review and contraceptive advice suited to the condition."
      ] },
      { h: "Key facts to remember", list: [
        "GDM screening ~24–28 weeks; risks macrosomia, shoulder dystocia, neonatal hypoglycaemia.",
        "Cardiac output rises 30–50%; heart disease decompensates around 28–32 weeks, in labour and postpartum.",
        "Rubella vaccine is live — give before, never during, pregnancy.",
        "Hepatitis-B-exposed newborns need immunoglobulin plus vaccine at birth.",
        "PMTCT = testing + maternal ART + safe birth/infant prophylaxis + feeding counselling."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Describe gestational diabetes, its risks to mother and fetus, and its management.",
      "Discuss the effect of pregnancy on heart disease and the nursing care of a cardiac mother.",
      "Explain why rubella and hepatitis B are important in pregnancy and how each is prevented.",
      "Outline the components of PMTCT of HIV.",
      "Describe the general principles of nursing a woman with a pre-existing medical disorder in pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "Gestational diabetes is usually screened for at:", options: ["6-10 weeks", "12-16 weeks", "24-28 weeks", "38-40 weeks"], answer: 2, rationale: "An oral glucose tolerance test at 24–28 weeks screens for GDM." },
      { type: "mcq", q: "A characteristic fetal complication of maternal diabetes is:", options: ["Growth restriction only", "Macrosomia", "Anaemia", "Post-maturity"], answer: 1, rationale: "Fetal macrosomia (a large baby) is typical, raising shoulder-dystocia risk." },
      { type: "mcq", q: "Cardiac output in pregnancy rises by approximately:", options: ["5-10%", "30-50%", "70-90%", "100%"], answer: 1, rationale: "Cardiac output increases about 30–50%, stressing a diseased heart." },
      { type: "mcq", q: "Rubella vaccine in relation to pregnancy should be given:", options: ["During the first trimester", "During the third trimester", "Before pregnancy, never during it", "During labour"], answer: 2, rationale: "It is a live vaccine, contraindicated in pregnancy, so it is given beforehand." },
      { type: "mcq", q: "A baby born to a hepatitis-B-positive mother should receive at birth:", options: ["Nothing", "Hepatitis-B immunoglobulin and vaccine", "Antibiotics only", "Iron"], answer: 1, rationale: "HBIG plus hepatitis-B vaccine prevents perinatal transmission." },
      { type: "mcq", q: "The cornerstone of preventing mother-to-child HIV transmission is:", options: ["Elective caesarean for all", "Maternal antiretroviral therapy", "Avoiding antenatal care", "Iron supplements"], answer: 1, rationale: "Effective maternal ART suppressing viral load is central to PMTCT." },
      { type: "mcq", q: "Untreated asymptomatic bacteriuria in pregnancy may progress to:", options: ["Pyelonephritis and preterm labour", "Anaemia only", "Hypertension", "Macrosomia"], answer: 0, rationale: "Untreated bacteriuria can ascend to pyelonephritis and trigger preterm labour." },
      { type: "mcq", q: "Regarding asthma in pregnancy, the nurse should advise the woman to:", options: ["Stop all inhalers", "Continue prescribed inhaled treatment", "Avoid antenatal care", "Take antibiotics daily"], answer: 1, rationale: "Uncontrolled asthma harms the fetus more than the inhalers; treatment continues." },
      { type: "mcq", q: "Congenital rubella syndrome may cause:", options: ["Deafness, cataracts and cardiac defects", "Macrosomia", "Polyhydramnios", "Iron overload"], answer: 0, rationale: "Congenital rubella causes deafness, cataracts, heart defects and learning disability." },
      { type: "mcq", q: "Insulin requirements in a woman with pre-existing diabetes typically:", options: ["Fall throughout pregnancy", "Rise as pregnancy advances", "Stay exactly the same", "Disappear"], answer: 1, rationale: "Rising placental hormones increase insulin needs, which fall sharply after birth." },
      { type: "fill", q: "Glucose intolerance first recognised during pregnancy is called ____ diabetes mellitus.", accept: ["gestational"], rationale: "Gestational diabetes is first recognised in pregnancy." },
      { type: "fill", q: "The programme to stop HIV passing from mother to baby is abbreviated ____.", accept: ["PMTCT", "prevention of mother-to-child transmission"], rationale: "PMTCT = prevention of mother-to-child transmission of HIV." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "gyn-15-highrisk-intrapartum",
    unit: "Unit 3 · High-Risk Pregnancy",
    title: "High-Risk Intrapartum Care: Preterm/Post-term Labour, PROM, Cord Prolapse & Uterine Rupture",
    readMinutes: 24,
    summary: "The recognition and management of preterm labour (tocolysis and antenatal steroids), prelabour rupture of membranes, post-term pregnancy, precipitate and obstructed labour, cord prolapse (an acute emergency) and uterine rupture, with the nurse's role in each.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of high-risk labour", p: "Even a normal pregnancy can develop an intrapartum emergency, and high-risk pregnancies commonly do. The nurse must anticipate, recognise early and respond quickly to abnormal labour — abnormal in timing (preterm, post-term), in progress (precipitate, prolonged, obstructed) or by a sudden emergency (cord prolapse, rupture). Continuous assessment with the partograph and fetal monitoring underpins safe care." },
      { h: "Preterm labour", p: "Preterm labour is the onset of regular contractions with cervical change before 37 completed weeks. Prematurity is the leading cause of neonatal death. Risk factors include previous preterm birth, infection (UTI, chorioamnionitis, bacterial vaginosis), multiple pregnancy, polyhydramnios and cervical incompetence. It presents with regular painful contractions, low backache, pelvic pressure and a 'show' or leaking fluid before term." },
      { h: "Management of preterm labour", p: "Management aims to delay birth long enough to give steroids and to reach a facility with neonatal care, unless there is a reason to deliver.", list: [
        "Antenatal corticosteroids (e.g. dexamethasone or betamethasone) accelerate fetal lung maturity and reduce respiratory distress, given between ~24 and 34 weeks.",
        "Tocolytics (e.g. nifedipine) may suppress contractions for about 48 hours to allow steroids to act and transfer to occur — they do not prolong pregnancy long-term.",
        "Magnesium sulphate for fetal neuroprotection in very preterm labour.",
        "Treat any infection; consider antibiotics (e.g. in preterm ROM or GBS risk).",
        "Arrange birth in a facility with newborn-care capacity ('in-utero transfer')."
      ] },
      { h: "Prelabour rupture of membranes (PROM/PPROM)", p: "PROM is rupture of the membranes before labour begins at term; PPROM is the same before 37 weeks. It presents as a gush or continuous leak of clear fluid. The chief danger is ascending infection (chorioamnionitis) and, with PPROM, prematurity and cord prolapse. Management: confirm the diagnosis (avoid unnecessary vaginal examinations to limit infection), monitor for infection (temperature, pulse, offensive liquor, fetal tachycardia), give antibiotics and, in PPROM, steroids; the timing of birth balances infection risk against prematurity." },
      { h: "Post-term pregnancy", p: "Post-term (prolonged) pregnancy is one continuing beyond 42 completed weeks. Risks rise as the ageing placenta becomes less efficient: oligohydramnios, meconium-stained liquor and aspiration, macrosomia, fetal distress and stillbirth. Management is increased fetal surveillance from 40–41 weeks and offer of induction of labour around 41–42 weeks to prevent stillbirth." },
      { h: "Precipitate labour", p: "Precipitate labour is an unusually rapid labour completed in under about three hours. It risks maternal genital-tract lacerations and postpartum haemorrhage, and, for the baby, birth trauma, hypoxia and unattended (unplanned) delivery. The nurse stays calm, controls the delivery of the head to prevent tearing, keeps the baby warm, and watches closely for PPH." },
      { h: "Obstructed labour (intrapartum)", p: "Obstructed labour is failure of descent despite good contractions, from cephalopelvic disproportion, malpresentation or a pelvic mass. Warning signs are prolonged labour with the partograph crossing the action line, a distressed dehydrated mother, a full bladder, a Bandl's ring, and fetal distress. It must never be treated by pushing oxytocin; the woman is rehydrated, catheterised, given antibiotics and referred urgently for caesarean. Untreated, it leads to ruptured uterus and obstetric fistula." },
      { h: "Cord prolapse — recognition", p: "Cord prolapse is descent of the umbilical cord below the presenting part after the membranes rupture, so the cord is compressed and the fetal blood supply cut off — an acute emergency threatening the baby's life. It is more likely with a high or ill-fitting presenting part: malpresentation (breech, transverse), prematurity, polyhydramnios and multiple pregnancy. It is detected by seeing or feeling the cord, or by a sudden fetal bradycardia after membrane rupture." },
      { h: "Cord prolapse — emergency management", p: "Speed saves the baby. The aim is to relieve cord compression until immediate delivery (usually caesarean).", list: [
        "Call for urgent help and summon the obstetric/theatre team.",
        "Relieve pressure on the cord: place the woman in the knee-chest position or exaggerated Sims/Trendelenburg, or push the presenting part up with a gloved hand.",
        "If the cord is outside the vagina, handle it minimally and keep it warm and moist (do not force it back).",
        "Fill the bladder with saline (via catheter) to lift the presenting part if delivery is delayed.",
        "Give oxygen, monitor the fetal heart, and prepare for immediate caesarean (or assisted vaginal birth if fully dilated and imminent)."
      ], figure: {
        caption: "Cord prolapse: the cord lies below the presenting part and is compressed; the knee-chest position relieves pressure until urgent delivery.",
        svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cord prolapse and knee-chest position"><ellipse cx="160" cy="80" rx="70" ry="55" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><circle cx="160" cy="80" r="34" fill="#BBF7D0" stroke="#15803D"/><text x="160" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Head</text><path d="M150 115 Q120 150 150 180" fill="none" stroke="#B91C1C" stroke-width="4"/><text x="95" y="175" font-family="sans-serif" font-size="10" fill="#991B1B">Prolapsed cord</text><rect x="300" y="120" width="140" height="14" rx="6" fill="#334155"/><path d="M320 120 Q340 80 370 90 L390 70" fill="none" stroke="#0F4C3A" stroke-width="4"/><circle cx="398" cy="64" r="10" fill="#86EFAC" stroke="#15803D"/><text x="370" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Knee-chest position</text></svg>'
      } },
      { h: "Uterine rupture", p: "Uterine rupture is a tear through the uterine wall, most often from obstructed labour or dehiscence of a previous caesarean scar (or from injudicious oxytocin). It presents with sudden severe abdominal pain, cessation of contractions, easily palpable fetal parts, vaginal bleeding, fetal distress or death and rapid maternal shock. It is a surgical emergency: resuscitate with fluids and blood, give antibiotics, and proceed to immediate laparotomy for repair or hysterectomy. Prevention is timely relief of obstruction and cautious use of oxytocics, especially in a scarred uterus." },
      { h: "General intrapartum nursing responsibilities", list: [
        "Monitor labour progress with the partograph and act on the alert/action lines.",
        "Monitor the fetal heart and liquor; recognise fetal distress and meconium.",
        "Recognise the specific emergency and initiate first-line management at once.",
        "Prepare for assisted or operative birth and for neonatal resuscitation.",
        "Establish IV access and resuscitate; keep emergency drugs and equipment ready.",
        "Communicate with and support the woman and family; document accurately and refer promptly."
      ] },
      { h: "Key facts to remember", list: [
        "Preterm = before 37 weeks; post-term = beyond 42 weeks; precipitate = <3 hours.",
        "Antenatal steroids (24–34 weeks) mature fetal lungs; tocolytics buy ~48 hours.",
        "PROM's chief danger is ascending infection (chorioamnionitis).",
        "Cord prolapse: knee-chest position, relieve compression, urgent caesarean.",
        "Uterine rupture: sudden pain, contractions stop, shock — immediate laparotomy."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Define preterm labour and describe its management, including steroids and tocolysis.",
      "Discuss prelabour rupture of membranes and its main complications.",
      "Describe the emergency management of cord prolapse.",
      "Explain the causes, features and management of uterine rupture.",
      "Outline the risks of post-term pregnancy and its management."
    ],
    assessment: [
      { type: "mcq", q: "Preterm labour is defined as labour before:", options: ["34 weeks", "37 completed weeks", "40 weeks", "42 weeks"], answer: 1, rationale: "Preterm labour begins before 37 completed weeks of gestation." },
      { type: "mcq", q: "Antenatal corticosteroids are given in preterm labour mainly to:", options: ["Stop contractions", "Mature the fetal lungs", "Raise maternal blood pressure", "Treat infection"], answer: 1, rationale: "Steroids accelerate fetal lung maturity, reducing respiratory distress syndrome." },
      { type: "mcq", q: "The chief danger of prelabour rupture of membranes is:", options: ["Ascending infection", "Hypertension", "Macrosomia", "Anaemia"], answer: 0, rationale: "Ruptured membranes open a route for ascending infection (chorioamnionitis)." },
      { type: "mcq", q: "Post-term pregnancy is one continuing beyond:", options: ["40 weeks", "41 weeks", "42 completed weeks", "44 weeks"], answer: 2, rationale: "Post-term (prolonged) pregnancy extends beyond 42 completed weeks." },
      { type: "mcq", q: "The immediate priority in cord prolapse is to:", options: ["Perform an episiotomy", "Give oxytocin", "Relieve pressure on the cord and expedite delivery", "Reassure and wait"], answer: 2, rationale: "Relieving cord compression and urgent delivery save the fetus." },
      { type: "mcq", q: "A helpful position to relieve cord compression is the:", options: ["Supine flat position", "Knee-chest position", "Sitting position", "Lithotomy without tilt"], answer: 1, rationale: "The knee-chest (or Trendelenburg) position lifts the presenting part off the cord." },
      { type: "mcq", q: "Sudden severe abdominal pain with cessation of contractions and shock in labour suggests:", options: ["Normal labour", "PROM", "Precipitate labour", "Uterine rupture"], answer: 3, rationale: "These are classic features of uterine rupture, a surgical emergency." },
      { type: "mcq", q: "A labour completed in under about three hours is called:", options: ["Precipitate labour", "Prolonged labour", "Obstructed labour", "Latent labour"], answer: 0, rationale: "Precipitate labour is an unusually rapid labour under ~3 hours." },
      { type: "mcq", q: "Tocolytic drugs in preterm labour are used mainly to:", options: ["Prolong pregnancy to term", "Delay birth ~48 hours for steroids/transfer", "Induce labour", "Treat hypertension"], answer: 1, rationale: "Tocolysis buys about 48 hours for steroids to act and for transfer, not long-term prolongation." },
      { type: "mcq", q: "Cord prolapse is more likely when the:", options: ["Presenting part fits the pelvis snugly", "Presenting part is high or ill-fitting", "Membranes are intact", "Fetus is engaged"], answer: 1, rationale: "A high or ill-fitting presenting part (malpresentation, prematurity) allows the cord to slip past." },
      { type: "fill", q: "Rupture of the membranes before the onset of labour at term is called ____ (abbreviation).", accept: ["PROM", "prelabour rupture of membranes", "premature rupture of membranes"], rationale: "PROM = prelabour rupture of membranes at term." },
      { type: "fill", q: "The drug class given to mature the fetal lungs before preterm birth is antenatal ____.", accept: ["corticosteroids", "steroids", "glucocorticoids"], rationale: "Antenatal corticosteroids accelerate fetal lung maturity." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "gyn-16-assisted-delivery",
    unit: "Unit 3 · High-Risk Pregnancy",
    title: "Induction/Augmentation of Labour & Assisted Delivery",
    readMinutes: 24,
    summary: "The indications and methods of induction and augmentation of labour (Bishop score, prostaglandins, amniotomy, oxytocin), assisted vaginal birth (vacuum and forceps), caesarean section with pre- and post-operative nursing, assisted breech birth, and the complications and nursing care of each.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definitions", p: "Induction of labour is the artificial initiation of labour before it starts spontaneously, to achieve vaginal birth when continuing the pregnancy is more dangerous than ending it. Augmentation is the stimulation of contractions that have already begun but are inadequate (to correct slow progress). Assisted (operative) birth uses an instrument (vacuum or forceps) or surgery (caesarean) to complete delivery." },
      { h: "Indications for induction", list: [
        "Post-term pregnancy (≥41–42 weeks).",
        "Pre-eclampsia and other maternal hypertensive disease.",
        "Prelabour rupture of membranes without labour.",
        "Diabetes and other medical disorders where prolonging pregnancy is risky.",
        "Intrauterine growth restriction or reduced fetal wellbeing.",
        "Intrauterine fetal death."
      ] },
      { h: "Contraindications to induction/vaginal birth", p: "Induction is unsafe where vaginal birth itself is contraindicated: major placenta praevia, transverse lie, cord prolapse, a previous classical (vertical) caesarean or multiple uterine scars, active genital herpes, and cephalopelvic disproportion. In these situations caesarean birth is chosen instead." },
      { h: "The Bishop score", p: "The Bishop score assesses cervical 'ripeness' (favourability) before induction, scoring cervical dilatation, effacement, consistency, position and the station of the presenting part. A high score (favourable cervix, e.g. ≥6–8) predicts a successful induction with amniotomy and oxytocin; a low score (unfavourable cervix) calls first for cervical ripening with prostaglandins.", figure: {
        caption: "The Bishop score: a favourable (ripe) cervix predicts successful induction; an unfavourable cervix needs ripening first.",
        svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bishop score decision"><rect x="20" y="55" width="180" height="70" rx="8" fill="#FEE2E2" stroke="#B91C1C"/><text x="110" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#991B1B">Low score</text><text x="110" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#991B1B">Unfavourable → ripen (PGE)</text><rect x="300" y="55" width="180" height="70" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="390" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">High score</text><text x="390" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Favourable → ARM + oxytocin</text><line x1="200" y1="90" x2="300" y2="90" stroke="#334155" stroke-width="2"/><polygon points="300,90 288,84 288,96" fill="#334155"/><text x="250" y="30" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Assess cervix (Bishop score)</text></svg>'
      } },
      { h: "Methods of induction & augmentation", p: "Several methods are used, sometimes in sequence.", list: [
        "Membrane sweeping — a simple outpatient measure that may start labour.",
        "Prostaglandins (e.g. vaginal PGE2 or misoprostol) — ripen an unfavourable cervix and may induce labour.",
        "Amniotomy (artificial rupture of membranes, ARM) — done when the cervix is favourable to start or speed labour.",
        "Oxytocin infusion — titrated IV to produce adequate contractions (also the main agent for augmentation).",
        "Mechanical methods (e.g. balloon catheter) — an alternative for cervical ripening."
      ] },
      { h: "Risks of induction/augmentation", p: "Uterotonics must be used carefully. Over-stimulation (uterine hyperstimulation/tachysystole) can cause fetal distress and, rarely, uterine rupture — especially in a scarred or grand-multiparous uterus. Other risks are failed induction (ending in caesarean), cord prolapse at amniotomy, and, with prolonged high-dose oxytocin, water intoxication. Continuous fetal monitoring and careful titration are essential." },
      { h: "Vacuum extraction (ventouse)", p: "Vacuum extraction uses a cup applied to the fetal scalp with suction to assist descent during maternal pushing. Indications include delay in the second stage, fetal distress at full dilatation and maternal exhaustion or a condition needing a short second stage. Prerequisites: full dilatation, ruptured membranes, engaged head, known position, adequate pelvis and empty bladder. It may cause fetal scalp swelling (chignon), cephalhaematoma and, rarely, more serious injury; it is generally not used before ~34 weeks." },
      { h: "Forceps delivery", p: "Obstetric forceps are two blades applied around the fetal head to deliver it by traction. Indications are similar to vacuum (delay or distress in the second stage, need for a controlled short second stage, or the after-coming head of a breech). The same prerequisites apply, plus adequate analgesia. Risks include maternal genital-tract trauma (tears, extended episiotomy) and fetal facial marking or, rarely, nerve injury. Choice between vacuum and forceps depends on the situation and operator skill." },
      { h: "Caesarean section — indications", p: "Caesarean section is birth through incisions in the abdominal and uterine walls. It may be elective (planned) or emergency.", list: [
        "Cephalopelvic disproportion and obstructed labour.",
        "Fetal distress requiring rapid delivery.",
        "Major placenta praevia and severe abruption.",
        "Malpresentation (transverse lie; many breeches).",
        "Previous classical caesarean or repeated scars; failed induction or assisted birth.",
        "Cord prolapse and some maternal conditions (e.g. active herpes, severe pre-eclampsia not for vaginal birth)."
      ] },
      { h: "Caesarean — pre-operative nursing care", list: [
        "Confirm informed consent and explain the procedure; allay anxiety.",
        "Ensure fasting (for elective) or note last intake (emergency); give any prescribed antacid prophylaxis.",
        "Check blood group and cross-match; secure IV access; take baseline observations.",
        "Insert a urinary catheter; prepare (clip) and clean the abdomen; give prophylactic antibiotics as ordered.",
        "Prepare the theatre, neonatal resuscitation and receiving cot; complete the checklist."
      ] },
      { h: "Caesarean — post-operative nursing care", list: [
        "Monitor vital signs, the wound, uterine tone/fundus and lochia, and watch for haemorrhage.",
        "Assess and relieve pain; support early mobilisation to prevent thromboembolism.",
        "Maintain fluid balance and catheter care; reintroduce diet as tolerated.",
        "Watch for complications — bleeding, infection, ileus, deep-vein thrombosis.",
        "Support breastfeeding and mother-baby bonding; give discharge and contraceptive advice."
      ] },
      { h: "Assisted breech birth", p: "In a breech (buttocks- or feet-first) presentation, many babies are now delivered by caesarean, but assisted vaginal breech birth is still practised. The key principles are 'hands off the breech' (let it descend spontaneously to reduce the risk of extending the arms/head), support the body, deliver the arms with defined manoeuvres if needed, and deliver the after-coming head slowly and in a controlled way (e.g. Mauriceau-Smellie-Veit manoeuvre or forceps). External cephalic version may be offered before labour to turn the baby to cephalic." },
      { h: "Nursing role in assisted delivery", list: [
        "Prepare the woman physically and psychologically and obtain consent.",
        "Assemble and check the equipment (vacuum/forceps/theatre set) and neonatal resuscitation.",
        "Ensure an empty bladder and adequate analgesia; assist the operator and monitor mother and fetus.",
        "Anticipate and prepare for complications (PPH, perineal trauma, neonatal problems).",
        "Provide post-delivery care of mother and baby, examine the perineum, and document fully.",
        "Give emotional support and explanation, as instrumental/operative birth can be distressing."
      ] },
      { h: "Key facts to remember", list: [
        "Bishop score assesses cervical favourability; low score → ripen with prostaglandins first.",
        "Oxytocin augments/induces contractions; risk of hyperstimulation, distress and rupture.",
        "Vacuum and forceps need full dilatation, engaged head, ruptured membranes and empty bladder.",
        "Caesarean pre-op: consent, fasting, cross-match, catheter, antibiotics; post-op: watch bleeding, pain, VTE.",
        "Assisted breech: 'hands off the breech'; controlled after-coming head."
      ] }
    ],
    references: REF_GYN,
    examQuestions: [
      "Differentiate induction from augmentation of labour and list the indications for induction.",
      "Explain the Bishop score and how it guides the method of induction.",
      "Compare vacuum extraction and forceps delivery, including prerequisites and complications.",
      "Describe the pre- and post-operative nursing care of a woman having a caesarean section.",
      "Outline the principles of assisted vaginal breech birth."
    ],
    assessment: [
      { type: "mcq", q: "Stimulation of already-established but inadequate contractions is called:", options: ["Induction", "Augmentation", "Version", "Amniotomy"], answer: 1, rationale: "Augmentation strengthens contractions that have already begun." },
      { type: "mcq", q: "The Bishop score assesses:", options: ["Cervical favourability for induction", "Fetal weight", "Maternal blood pressure", "Amniotic fluid volume"], answer: 0, rationale: "The Bishop score grades cervical ripeness to predict induction success." },
      { type: "mcq", q: "An unfavourable (low Bishop score) cervix is best prepared for induction with:", options: ["Immediate forceps", "High-dose oxytocin alone", "Prostaglandins for ripening", "Caesarean only"], answer: 2, rationale: "Prostaglandins ripen the cervix before amniotomy and oxytocin." },
      { type: "mcq", q: "A serious risk of excessive oxytocin is:", options: ["Uterine hyperstimulation and rupture", "Hypotension only", "Hypothermia", "Anaemia"], answer: 0, rationale: "Over-stimulation can cause fetal distress and uterine rupture, especially in a scarred uterus." },
      { type: "mcq", q: "A prerequisite for vacuum or forceps delivery is:", options: ["Cervix 4 cm dilated", "Fully dilated cervix with engaged head", "Intact membranes", "Full bladder"], answer: 1, rationale: "Instrumental birth requires full dilatation, ruptured membranes and an engaged head." },
      { type: "mcq", q: "Scalp swelling produced by the vacuum cup is called a:", options: ["Caput only", "Chignon", "Cephalhaematoma always", "Moulding"], answer: 1, rationale: "The vacuum produces an artificial swelling called a chignon." },
      { type: "mcq", q: "Which is an indication for emergency caesarean section?", options: ["Post-term at 40 weeks", "Mild anaemia", "Fetal distress requiring rapid delivery", "Braxton-Hicks contractions"], answer: 2, rationale: "Fetal distress needing rapid delivery is a common indication for caesarean." },
      { type: "mcq", q: "A key pre-operative nursing action before caesarean is to:", options: ["Encourage a heavy meal", "Avoid consent", "Remove IV access", "Insert a urinary catheter and cross-match blood"], answer: 3, rationale: "Catheterisation, cross-match, IV access and consent are essential pre-op steps." },
      { type: "mcq", q: "In assisted vaginal breech birth, the guiding principle is:", options: ["Pull firmly on the breech early", "'Hands off the breech'", "Deliver the head rapidly", "Apply vacuum to the buttocks"], answer: 1, rationale: "'Hands off the breech' avoids extending the arms and head." },
      { type: "mcq", q: "A major post-operative complication to monitor for after caesarean is:", options: ["Improved clotting", "Haemorrhage, infection and thromboembolism", "Weight gain", "Hyperthyroidism"], answer: 1, rationale: "Bleeding, wound infection and DVT are key post-caesarean risks." },
      { type: "fill", q: "Artificial rupture of the membranes to induce or speed labour is called ____ (abbreviation).", accept: ["ARM", "amniotomy", "artificial rupture of membranes"], rationale: "ARM (amniotomy) ruptures the membranes to induce/augment labour." },
      { type: "fill", q: "The manoeuvre commonly used to deliver the after-coming head in a breech is the ____ manoeuvre.", accept: ["Mauriceau-Smellie-Veit", "Mauriceau Smellie Veit", "MSV"], rationale: "The Mauriceau-Smellie-Veit manoeuvre delivers the after-coming head." }
    ]
  }
];
