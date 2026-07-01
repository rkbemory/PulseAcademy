/* ============================================================
   Diploma in Midwifery (ICM standard) · DM331 Newborn Complications
   — 16 topics. Aligned to the BNMC Diploma in Midwifery syllabus
   (the unwell newborn: risk, assessment, transition, asphyxia/HIE,
   respiratory & cardiac conditions, hypoglycaemia, seizures,
   jaundice, sepsis, growth restriction, LBW, preterm, thermal care,
   anomalies & birth injury, safe transport/feeding/bereavement).
   Grounded in standard texts:
     • Rennie JM. Rennie & Roberton's Textbook of Neonatology. Elsevier.
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
     • Ghai OP, Paul VK, Bagga A. Ghai Essential Pediatrics. CBS Publishers.
   Doses/scores/thresholds given as standard values only.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_NPC = [
  "Rennie JM. Rennie & Roberton's Textbook of Neonatology. Elsevier.",
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.",
  "Ghai OP, Paul VK, Bagga A. Ghai Essential Pediatrics. CBS Publishers."
];

window.Academic.topics["diploma-midwifery/newborn-complications"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "npc-01-newborn-at-risk",
    unit: "Unit 1 · The Newborn at Risk & Assessment",
    title: "Introduction to the Newborn at Risk & Assessment of the Unwell Newborn",
    readMinutes: 16,
    summary: "The meaning of the newborn 'at risk', antenatal/intrapartum/neonatal risk factors, early warning signs of the sick baby, a structured approach to assessing the unwell newborn, and the midwife's role in recognition and timely referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Who is the newborn 'at risk'?", p: "A newborn 'at risk' is one who, because of factors before, during or after birth, has a higher-than-normal chance of becoming ill, being disabled or dying in the neonatal period (the first 28 days). Recognising risk allows the midwife to watch such babies more closely, anticipate problems and act early rather than waiting for collapse." },
      { h: "Categories of risk", list: [
        "Antenatal (maternal) — young or older mother, poor nutrition, anaemia, pre-eclampsia, diabetes, infection, no antenatal care, multiple pregnancy, Rh incompatibility.",
        "Intrapartum — prolonged or obstructed labour, fetal distress, meconium-stained liquor, cord prolapse, instrumental or difficult birth, maternal fever in labour.",
        "Fetal/neonatal — prematurity, low birth weight, congenital anomaly, birth asphyxia, birth injury, multiple birth.",
        "Postnatal/social — no skilled care at birth, poverty, unhygienic cord care, delayed or absent breastfeeding, cold environment."
      ] },
      { h: "Why the newborn is vulnerable", p: "The newborn has immature organ systems, limited energy (glycogen) stores, poor temperature control, an immature immune system and a small blood volume. Illness can therefore progress very quickly, and the signs are often non-specific. A baby who is 'not feeding well' or 'not himself' may be seriously ill." },
      { h: "Danger signs in the newborn", list: [
        "Not feeding well or refusing to feed.",
        "Lethargy, floppiness, or reduced movement / difficult to wake.",
        "Convulsions or abnormal movements.",
        "Fast breathing (60 or more per minute), grunting, chest in-drawing.",
        "Central cyanosis (blue tongue/lips) or persistent pallor.",
        "Fever (37.5 C or above) or hypothermia (below 36.5 C).",
        "Severe jaundice, especially on day 1 or reaching palms and soles.",
        "Umbilical redness/discharge, skin pustules, or bulging fontanelle."
      ] },
      { h: "Structured assessment of the unwell newborn", p: "Assessment follows a logical order so that life-threatening problems are found first.", list: [
        "History — pregnancy, labour and birth, risk factors, feeding and behaviour since birth.",
        "General observation (before touching) — colour, tone, activity, breathing effort, cry.",
        "Airway & Breathing — rate, chest movement, grunting, in-drawing, cyanosis.",
        "Circulation — heart rate, colour, capillary refill, peripheral warmth.",
        "Temperature — measured, not just felt.",
        "Head-to-toe examination — fontanelles, eyes, mouth, cord, abdomen, limbs, spine, hips, genitalia.",
        "Feeding and elimination — passing urine and meconium, feeding pattern."
      ] },
      { h: "Bedside observations & investigations", p: "Simple bedside checks guide the midwife: respiratory rate, heart rate, temperature, oxygen saturation (pulse oximetry) and blood glucose. Where referral is needed, further tests (blood counts, cultures, bilirubin, X-ray) are done at the referral centre. The midwife records baseline observations before referral." },
      { h: "The midwife's role & when to refer", p: "The midwife's core role is to recognise the sick newborn early, give immediate stabilising care (warmth, airway, oxygen, blood-glucose support, start of resuscitation if needed), keep the baby warm and, importantly, with the mother where safe, and arrange prompt referral. Refer any baby with one or more danger signs, and communicate clearly with the receiving unit.", figure: {
        caption: "Recognise-stabilise-refer pathway for the unwell newborn.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recognise, stabilise, refer pathway"><defs><marker id="npcA1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="50" width="150" height="55" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="90" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">RECOGNISE</text><text x="90" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">danger signs</text><rect x="205" y="50" width="150" height="55" rx="10" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="280" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">STABILISE</text><text x="280" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">warmth, airway, glucose</text><rect x="395" y="50" width="150" height="55" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="470" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">REFER</text><text x="470" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">warm, safe transport</text><line x1="165" y1="77" x2="201" y2="77" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA1)"/><line x1="355" y1="77" x2="391" y2="77" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA1)"/></svg>'
      } },
      { h: "Health education & support for the family", p: "Parents are taught the danger signs and told to return immediately if any appear. The midwife supports the family emotionally, explains why the baby is being watched or referred, encourages breastfeeding and skin-to-skin care where possible, and involves parents in care to reduce anxiety." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define the newborn 'at risk' and classify the factors that place a newborn at risk.",
      "List the danger signs in a newborn and explain why early recognition is important.",
      "Describe a structured approach to assessing the unwell newborn.",
      "Explain the midwife's role in recognition, stabilisation and referral of the sick newborn.",
      "Why is the newborn especially vulnerable to rapid deterioration? Discuss."
    ],
    assessment: [
      { type: "mcq", q: "The neonatal period is defined as the first ____ days of life.", options: ["7", "14", "28", "42"], answer: 2, rationale: "The neonatal period covers the first 28 days after birth." },
      { type: "mcq", q: "Which of the following is an INTRAPARTUM risk factor for the newborn?", options: ["Maternal anaemia in pregnancy", "Meconium-stained liquor", "Unhygienic cord care at home", "Poverty"], answer: 1, rationale: "Meconium-stained liquor occurs during labour/birth, making it an intrapartum risk factor." },
      { type: "mcq", q: "A respiratory rate that should raise concern in a newborn is:", options: ["30 per minute", "40 per minute", "50 per minute", "60 or more per minute"], answer: 3, rationale: "A rate of 60 or more per minute (tachypnoea) is a danger sign of respiratory distress." },
      { type: "mcq", q: "The FIRST step when assessing an unwell newborn should be:", options: ["Take blood for culture", "General observation of colour, tone, breathing and activity", "Start intravenous fluids", "Weigh the baby"], answer: 1, rationale: "Observation before touching gives vital information on colour, tone, breathing effort and activity." },
      { type: "mcq", q: "Which sign in a newborn is a recognised danger sign?", options: ["Passing meconium on day 1", "Central cyanosis (blue tongue and lips)", "Weight of 3 kg", "Sneezing occasionally"], answer: 1, rationale: "Central cyanosis indicates poor oxygenation and is a serious danger sign." },
      { type: "mcq", q: "Newborns deteriorate quickly mainly because they have:", options: ["Large glycogen stores", "Mature immune systems", "Immature organ systems and limited reserves", "A large blood volume"], answer: 2, rationale: "Immature organs, poor temperature control and limited energy/immune reserves make illness progress fast." },
      { type: "mcq", q: "The midwife's core role for the sick newborn is best summarised as:", options: ["Diagnose and give definitive treatment alone", "Recognise, stabilise and refer promptly", "Wait for signs to worsen before acting", "Send the baby home with advice only"], answer: 1, rationale: "The midwife recognises the sick baby early, stabilises, and refers promptly with clear communication." },
      { type: "mcq", q: "Which is an ANTENATAL (maternal) risk factor?", options: ["Cord prolapse", "Instrumental birth", "Pre-eclampsia", "Difficult birth"], answer: 2, rationale: "Pre-eclampsia is a maternal condition arising in pregnancy — an antenatal risk factor." },
      { type: "mcq", q: "A vague but important early sign of serious illness in a newborn is:", options: ["Not feeding well / poor feeding", "A strong cry", "Good weight gain", "Passing urine normally"], answer: 0, rationale: "Poor feeding is often the first and only sign that a newborn is becoming seriously unwell." },
      { type: "mcq", q: "Before referring a sick newborn, the midwife should FIRST ensure the baby is:", options: ["Bathed", "Kept warm and airway is clear", "Given a full bottle feed", "Dressed in many clothes and covered face"], answer: 1, rationale: "Warmth and a clear airway are immediate stabilising priorities before and during transfer." }
      , { type: "fill", q: "A newborn temperature below 36.5 C is called ____.", accept: ["hypothermia", "cold stress"], rationale: "Normal neonatal axillary temperature is 36.5-37.5 C; below this is hypothermia." }
      , { type: "fill", q: "The three-step pathway for a sick newborn is recognise, ____ and refer.", accept: ["stabilise", "stabilize"], rationale: "The midwife recognises danger signs, stabilises the baby, then refers." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "npc-02-gestational-age-exam",
    unit: "Unit 1 · The Newborn at Risk & Assessment",
    title: "Assessment of Gestational Age & Systematic Examination of the Newborn",
    readMinutes: 17,
    summary: "Why gestational age matters, methods of assessing gestational age (dates, scan, New Ballard Score), classification of the newborn by gestation and weight, and a systematic head-to-toe examination of the newborn.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why assess gestational age?", p: "Gestational age tells us how mature the baby is and predicts the problems the baby is likely to face. A baby may be preterm, term or post-term, and may be appropriately grown or growth-restricted. Combining gestation with weight helps plan care — for example, a preterm baby needs thermal support and feeding help, while a growth-restricted term baby needs blood-glucose monitoring." },
      { h: "Definitions by gestation", list: [
        "Preterm — born before 37 completed weeks of gestation.",
        "Term — born from 37 to before 42 completed weeks.",
        "Post-term — born at 42 completed weeks or more."
      ] },
      { h: "Methods of assessing gestational age", list: [
        "Menstrual dates — from the first day of the last menstrual period (accurate only if periods regular and remembered).",
        "Early ultrasound scan — the most reliable clinical method, best in the first trimester.",
        "Postnatal examination — the New Ballard Score, which scores physical (skin, ear, breast, genitalia, sole creases) and neuromuscular signs (posture, square window, arm recoil, popliteal angle) to estimate weeks of gestation when dates are unknown."
      ] },
      { h: "Classification by weight and gestation", p: "Plotting weight against gestation on a growth chart classifies the baby.", list: [
        "Appropriate for gestational age (AGA) — weight between the 10th and 90th centiles.",
        "Small for gestational age (SGA) — weight below the 10th centile.",
        "Large for gestational age (LGA) — weight above the 90th centile.",
        "Low birth weight (LBW) — under 2500 g regardless of gestation."
      ] },
      { h: "Preparing for the newborn examination", p: "Examine in a warm, well-lit place, with clean hands and, where possible, with the parents present so findings can be explained. Undress the baby only as needed to prevent cold stress. Observe first, then handle. Explain to parents that a full examination checks the baby is healthy and helps find problems early." },
      { h: "Systematic head-to-toe examination", list: [
        "General — colour, tone, activity, cry, breathing, obvious anomaly.",
        "Head — shape, fontanelles, sutures, moulding, caput or cephalhaematoma.",
        "Face and eyes — symmetry, red reflex, discharge; ears — position and shape.",
        "Mouth — cleft lip/palate (look and feel the palate), tongue, sucking.",
        "Chest — breathing, heart sounds, breasts.",
        "Abdomen and cord — shape, cord (two arteries, one vein), any distension.",
        "Genitalia and anus — normal appearance, patent anus, testes descended.",
        "Spine — straight, no swelling or dimple (neural tube defect).",
        "Limbs and hips — movement, digits (extra/fused), hip examination (developmental dysplasia).",
        "Skin — colour, birthmarks, rash, jaundice."
      ] },
      { h: "Reflexes and behaviour", p: "Normal primitive reflexes (rooting, sucking, grasp, Moro/startle) show an intact nervous system. Their absence, weakness or asymmetry can indicate illness or birth injury and should prompt closer assessment and referral if abnormal." },
      { h: "Midwifery role, documentation & referral", p: "The midwife performs and records the examination accurately, discusses findings with parents, gives feeding and cord-care advice, and refers any baby with an abnormality (for example a heart murmur, dislocatable hip, or absent red reflex) for specialist assessment.", figure: {
        caption: "Newborn classification by gestation and birth weight.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Newborn classification by gestation and weight"><rect x="20" y="20" width="520" height="130" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">Classifying the newborn</text><text x="40" y="75" font-family="sans-serif" font-size="12" fill="#7C2D12">By gestation: Preterm (&lt;37 wk) | Term (37-&lt;42 wk) | Post-term (&#8805;42 wk)</text><text x="40" y="100" font-family="sans-serif" font-size="12" fill="#7C2D12">By weight-for-age: SGA (&lt;10th) | AGA (10th-90th) | LGA (&gt;90th)</text><text x="40" y="125" font-family="sans-serif" font-size="12" fill="#831843" font-weight="700">Low birth weight = &lt; 2500 g (any gestation)</text></svg>'
      } }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define preterm, term and post-term. Why is gestational age assessment important?",
      "Describe the methods used to assess gestational age, including the New Ballard Score.",
      "Explain the classification of the newborn by weight for gestational age (SGA, AGA, LGA).",
      "Describe a systematic head-to-toe examination of the newborn.",
      "What is the midwife's responsibility in newborn examination and documentation?"
    ],
    assessment: [
      { type: "mcq", q: "A baby born before 37 completed weeks of gestation is termed:", options: ["Term", "Post-term", "Preterm", "Post-mature"], answer: 2, rationale: "Preterm means birth before 37 completed weeks." },
      { type: "mcq", q: "The most reliable clinical method of dating a pregnancy is:", options: ["Menstrual dates", "Early ultrasound scan", "Fundal height", "Maternal recall of quickening"], answer: 1, rationale: "An early (first-trimester) ultrasound scan is the most reliable dating method." },
      { type: "mcq", q: "The New Ballard Score is used to:", options: ["Measure jaundice", "Estimate gestational age after birth", "Assess pain", "Grade a heart murmur"], answer: 1, rationale: "The New Ballard Score estimates gestational age from physical and neuromuscular maturity signs." },
      { type: "mcq", q: "Low birth weight is defined as a birth weight less than:", options: ["3500 g", "3000 g", "2500 g", "2000 g"], answer: 2, rationale: "Low birth weight is a birth weight under 2500 g, regardless of gestation." },
      { type: "mcq", q: "A baby whose weight falls below the 10th centile for gestation is:", options: ["AGA", "LGA", "SGA", "Post-term"], answer: 2, rationale: "Weight below the 10th centile is small for gestational age (SGA)." },
      { type: "mcq", q: "During examination, the palate should be checked to exclude:", options: ["Cleft palate", "Hip dysplasia", "Jaundice", "Undescended testis"], answer: 0, rationale: "Feeling and looking at the palate detects a cleft palate, which can be missed on inspection alone." },
      { type: "mcq", q: "A normal umbilical cord contains:", options: ["Two veins and one artery", "One artery and one vein", "Two arteries and one vein", "Three arteries"], answer: 2, rationale: "The normal cord has two arteries and one vein; a single artery may signal anomaly." },
      { type: "mcq", q: "An absent red reflex on newborn eye examination should prompt:", options: ["Reassurance only", "Referral for specialist assessment", "Repeat in one year", "No action"], answer: 1, rationale: "An absent red reflex may indicate cataract or other eye disease and needs prompt referral." },
      { type: "mcq", q: "Term gestation is from 37 to before ____ completed weeks.", options: ["40", "41", "42", "44"], answer: 2, rationale: "Term is 37 to before 42 completed weeks; 42 weeks and beyond is post-term." },
      { type: "mcq", q: "The Moro (startle) reflex is examined to assess:", options: ["Hearing", "Vision", "An intact nervous system", "Blood glucose"], answer: 2, rationale: "A symmetrical Moro reflex indicates an intact neurological response; asymmetry may indicate injury." }
      , { type: "fill", q: "A birth weight above the 90th centile for gestation is termed ____ for gestational age.", accept: ["large", "LGA"], rationale: "Weight above the 90th centile is large for gestational age (LGA)." }
      , { type: "fill", q: "The postnatal maturity assessment that estimates gestational age is the New ____ Score.", accept: ["Ballard"], rationale: "The New Ballard Score estimates gestational age from physical and neuromuscular signs." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "npc-03-transition",
    unit: "Unit 2 · Transition, Asphyxia & Resuscitation",
    title: "Transition to Extrauterine Life (Fetal to Neonatal Circulation)",
    readMinutes: 16,
    summary: "The fetal circulation and its shunts, the events at birth that establish breathing and change the circulation, closure of the fetal shunts, and why failure of transition leads to problems in the newborn.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The challenge of birth", p: "Before birth the fetus depends completely on the placenta for oxygen and nutrients, and the lungs are fluid-filled and non-functional. At birth the baby must, within minutes, fill the lungs with air, begin gas exchange in the lungs and switch the circulation from a placental to a lung-based pattern. This is the transition to extrauterine life." },
      { h: "Fetal circulation & its shunts", p: "In fetal life oxygenated blood comes from the placenta and is directed around the non-working lungs and liver by three shunts.", list: [
        "Ductus venosus — carries blood from the umbilical vein past the liver to the inferior vena cava.",
        "Foramen ovale — an opening between the right and left atria, letting blood bypass the lungs.",
        "Ductus arteriosus — connects the pulmonary artery to the aorta, bypassing the lungs."
      ] },
      { h: "Events at the first breath", p: "The first breaths are driven by cold, touch, light, sound and the fall in oxygen and rise in carbon dioxide at cord clamping. Powerful first breaths open the alveoli, lung fluid is absorbed, and oxygen enters the blood. This causes the pulmonary blood vessels to relax, so blood now flows freely through the lungs." },
      { h: "Changes in the circulation", p: "As the lungs expand and the cord is clamped, pressures in the heart change: pressure rises on the left side and falls on the right. This reverses the flow across the shunts and starts their closure.", figure: {
        caption: "Closure of the fetal shunts after birth.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Closure of fetal shunts at birth"><rect x="20" y="20" width="520" height="130" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">Fetal shunts close after birth</text><text x="40" y="75" font-family="sans-serif" font-size="12" fill="#7C2D12">Foramen ovale &#8594; closes (functionally soon after birth)</text><text x="40" y="100" font-family="sans-serif" font-size="12" fill="#7C2D12">Ductus arteriosus &#8594; closes (usually within a few days)</text><text x="40" y="125" font-family="sans-serif" font-size="12" fill="#7C2D12">Ductus venosus &#8594; closes as the cord is clamped</text></svg>'
      } },
      { h: "Closure of the shunts", list: [
        "Foramen ovale closes functionally as left atrial pressure rises above right atrial pressure.",
        "Ductus arteriosus constricts in response to the rise in oxygen and fall in prostaglandins, usually closing within the first few days.",
        "Ductus venosus closes when the umbilical cord blood flow stops after clamping."
      ] },
      { h: "Thermoregulation at transition", p: "The wet newborn loses heat rapidly at birth. Cold stress increases oxygen and glucose use and can slow the fall in lung vessel pressure, hindering transition. Drying the baby, skin-to-skin contact and covering the head help maintain the temperature that supports a smooth transition." },
      { h: "When transition fails", p: "If the lungs do not fill, if the baby stays hypoxic, cold or acidotic, the pulmonary vessels stay constricted and the shunts may stay open — blood keeps bypassing the lungs. This can lead to persistent low oxygen (persistent pulmonary hypertension), and underlies conditions such as birth asphyxia and respiratory distress. The ductus arteriosus may also stay open (patent) in preterm babies." },
      { h: "Midwifery care to support transition", p: "The midwife supports transition by drying the baby immediately, keeping it warm (skin-to-skin), keeping the airway clear, delaying cord clamping when appropriate, and watching breathing, colour and tone. If the baby does not breathe, resuscitation is started at once. Early breastfeeding supports blood glucose and warmth." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Describe the fetal circulation and the function of the three fetal shunts.",
      "Explain the events that occur at the first breath and how they change the circulation.",
      "Describe the closure of the foramen ovale, ductus arteriosus and ductus venosus.",
      "Why does cold stress interfere with a newborn's transition to extrauterine life?",
      "Outline the midwifery care that supports a smooth transition to extrauterine life."
    ],
    assessment: [
      { type: "mcq", q: "The fetal shunt that connects the pulmonary artery to the aorta is the:", options: ["Foramen ovale", "Ductus venosus", "Ductus arteriosus", "Umbilical vein"], answer: 2, rationale: "The ductus arteriosus links the pulmonary artery to the aorta, bypassing the fetal lungs." },
      { type: "mcq", q: "In fetal life, the organ that performs gas exchange is the:", options: ["Lungs", "Placenta", "Liver", "Heart"], answer: 1, rationale: "The placenta is the fetal organ of gas exchange; the lungs are fluid-filled and non-functional." },
      { type: "mcq", q: "The foramen ovale is an opening between the:", options: ["Two ventricles", "Right and left atria", "Aorta and pulmonary artery", "Liver and IVC"], answer: 1, rationale: "The foramen ovale is the atrial opening that lets blood bypass the fetal lungs." },
      { type: "mcq", q: "After birth, the ductus arteriosus mainly closes in response to:", options: ["A fall in oxygen", "A rise in oxygen and fall in prostaglandins", "Cold stress", "Increased carbon dioxide"], answer: 1, rationale: "Rising oxygen and falling prostaglandins cause the ductus arteriosus to constrict and close." },
      { type: "mcq", q: "The functional closure of the foramen ovale is caused by:", options: ["Left atrial pressure rising above right atrial pressure", "Right atrial pressure rising", "Cord clamping alone", "The first cry only"], answer: 0, rationale: "Once left atrial pressure exceeds right, the flap of the foramen ovale is pushed shut." },
      { type: "mcq", q: "Which stimulus helps trigger the newborn's first breath?", options: ["Warmth and darkness", "Cold, touch and rising carbon dioxide", "Falling carbon dioxide", "Continued placental oxygen"], answer: 1, rationale: "Cold, tactile stimulation, and the rise in CO2 with cord clamping stimulate the first breaths." },
      { type: "mcq", q: "The ductus venosus closes when:", options: ["The lungs expand", "Cold stress occurs", "The umbilical cord blood flow stops", "The baby cries"], answer: 2, rationale: "The ductus venosus closes once umbilical (cord) blood flow ceases after clamping." },
      { type: "mcq", q: "Persistent hypoxia and cold at birth tend to keep the pulmonary vessels:", options: ["Dilated", "Constricted", "Absent", "Unaffected"], answer: 1, rationale: "Hypoxia, acidosis and cold keep pulmonary vessels constricted, hindering transition." },
      { type: "mcq", q: "In fetal life, blood bypasses the liver via the:", options: ["Ductus arteriosus", "Foramen ovale", "Ductus venosus", "Coronary sinus"], answer: 2, rationale: "The ductus venosus shunts umbilical blood past the liver to the inferior vena cava." },
      { type: "mcq", q: "A key midwifery action that supports transition is:", options: ["Bathing the baby immediately", "Drying and keeping the baby warm", "Cooling the baby", "Leaving the airway unchecked"], answer: 1, rationale: "Immediate drying and warmth prevent cold stress that would impair transition." }
      , { type: "fill", q: "Failure of the pulmonary vessels to relax after birth can cause persistent pulmonary ____ of the newborn.", accept: ["hypertension"], rationale: "Persistent pulmonary hypertension of the newborn results when pulmonary vessels stay constricted." }
      , { type: "fill", q: "The atrial opening in the fetal heart that bypasses the lungs is the foramen ____.", accept: ["ovale"], rationale: "The foramen ovale allows fetal blood to bypass the lungs at the atrial level." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "npc-04-asphyxia-hie-resus",
    unit: "Unit 2 · Transition, Asphyxia & Resuscitation",
    title: "Birth Asphyxia, Hypoxic-Ischaemic Encephalopathy & Neonatal Resuscitation",
    readMinutes: 18,
    summary: "Definition and causes of birth asphyxia, the Apgar score, the concept and staging of hypoxic-ischaemic encephalopathy (HIE), and step-by-step neonatal resuscitation using the ABC / Helping Babies Breathe approach.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is birth asphyxia?", p: "Birth (perinatal) asphyxia is a failure to establish adequate breathing at or shortly after birth, leading to lack of oxygen (hypoxia) and poor blood flow (ischaemia) to the tissues. It is a major cause of newborn death and long-term disability, and much of it is preventable with skilled care at birth." },
      { h: "Causes and risk factors", list: [
        "Maternal — pre-eclampsia, haemorrhage, infection, hypotension, sedation/anaesthesia.",
        "Placental/cord — placental abruption, placenta praevia, cord prolapse, tight cord round the neck.",
        "Labour — prolonged/obstructed labour, uterine rupture, fetal distress.",
        "Fetal/neonatal — prematurity, growth restriction, congenital anomaly, meconium aspiration, infection."
      ] },
      { h: "The Apgar score", p: "The Apgar score assesses the newborn at 1 and 5 minutes (and every 5 minutes if low). Five signs are each scored 0, 1 or 2: Appearance (colour), Pulse (heart rate), Grimace (reflex response), Activity (muscle tone), Respiration (breathing). A total of 7-10 is normal; 4-6 is moderate depression; 0-3 is severe depression. The score guides but does not delay resuscitation.", figure: {
        caption: "The Apgar score: five signs, each 0-2, assessed at 1 and 5 minutes.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Apgar score components"><rect x="20" y="15" width="520" height="160" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">APGAR (each scored 0, 1 or 2)</text><text x="45" y="68" font-family="sans-serif" font-size="12" fill="#7C2D12">A - Appearance (colour)</text><text x="45" y="90" font-family="sans-serif" font-size="12" fill="#7C2D12">P - Pulse (heart rate)</text><text x="45" y="112" font-family="sans-serif" font-size="12" fill="#7C2D12">G - Grimace (reflex response)</text><text x="45" y="134" font-family="sans-serif" font-size="12" fill="#7C2D12">A - Activity (muscle tone)</text><text x="45" y="156" font-family="sans-serif" font-size="12" fill="#7C2D12">R - Respiration (breathing)</text><text x="330" y="112" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">7-10 normal</text><text x="330" y="134" font-family="sans-serif" font-size="12" fill="#831843">4-6 moderate</text><text x="330" y="156" font-family="sans-serif" font-size="12" fill="#831843">0-3 severe</text></svg>'
      } },
      { h: "Hypoxic-ischaemic encephalopathy (HIE)", p: "When the brain is deprived of oxygen and blood flow, it is injured — this is hypoxic-ischaemic encephalopathy. It is graded as mild, moderate or severe (Sarnat staging) based on level of consciousness, tone, reflexes, and the presence of seizures. HIE can lead to long-term problems such as cerebral palsy, learning difficulty and epilepsy." },
      { h: "Clinical features of HIE", list: [
        "Mild — irritability, jitteriness, staring, feeds poorly; usually recovers.",
        "Moderate — lethargy, reduced tone and reflexes, may have seizures.",
        "Severe — coma, flaccid tone, absent reflexes, prolonged seizures, breathing problems."
      ] },
      { h: "Preparing for every birth", p: "Because asphyxia can be sudden, every birth should be attended by someone skilled in newborn resuscitation, with a clean, warm area and working equipment ready: a firm surface, warmth, a suction device, and a self-inflating bag and correctly sized mask. Anticipation and preparation save lives." },
      { h: "Neonatal resuscitation (ABC / Helping Babies Breathe)", p: "Resuscitation follows a clear sequence. The Golden Minute means an effective breath should be given within the first minute if the baby is not breathing.", list: [
        "Dry, keep warm, stimulate, position the airway (neutral 'sniffing' position) and clear it only if needed.",
        "If not breathing or gasping — start bag-and-mask ventilation with air/oxygen (the single most important step).",
        "Check the heart rate; if it is below 100 and not rising, improve ventilation (check seal, position, airway).",
        "If the heart rate stays below 60 despite good ventilation, begin chest compressions (3 compressions to 1 breath).",
        "Consider medications (adrenaline) and further help only after effective ventilation is established."
      ] },
      { h: "Care after resuscitation & referral", p: "A baby who has needed resuscitation is watched closely for breathing, temperature, blood glucose and signs of HIE (tone, feeding, seizures). Keep the baby warm — but avoid overheating, since controlled cooling may be offered for HIE at referral centres. Support the parents honestly and refer for ongoing neonatal care." },
      { h: "Prevention", p: "Most birth asphyxia is prevented by good antenatal and intrapartum care: monitoring the fetus in labour, timely management of obstructed labour and fetal distress, skilled birth attendance, and readiness to resuscitate at every birth." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define birth asphyxia and list its causes and risk factors.",
      "Describe the Apgar score and explain how it is interpreted.",
      "What is hypoxic-ischaemic encephalopathy? Describe its clinical grades.",
      "Describe the steps of neonatal resuscitation using the ABC / Helping Babies Breathe approach.",
      "How can birth asphyxia be prevented? Discuss the midwife's role."
    ],
    assessment: [
      { type: "mcq", q: "The single MOST important step in resuscitating a baby who is not breathing is:", options: ["Chest compressions", "Effective bag-and-mask ventilation", "Giving adrenaline", "Suctioning the stomach"], answer: 1, rationale: "Establishing effective ventilation of the lungs is the key life-saving step in newborn resuscitation." },
      { type: "mcq", q: "The Apgar score is routinely assessed at:", options: ["Birth and 30 minutes", "1 and 5 minutes", "5 and 30 minutes", "10 and 20 minutes"], answer: 1, rationale: "The Apgar score is assessed at 1 and 5 minutes (and every 5 minutes if it remains low)." },
      { type: "mcq", q: "In the Apgar score, 'G' stands for:", options: ["Growth", "Grimace (reflex response)", "Glucose", "Grunting"], answer: 1, rationale: "G = Grimace, the reflex response to stimulation." },
      { type: "mcq", q: "Chest compressions in a newborn are started when the heart rate stays below:", options: ["100", "80", "60", "40"], answer: 2, rationale: "Compressions are started if the heart rate remains below 60 despite effective ventilation." },
      { type: "mcq", q: "The ratio of chest compressions to breaths in newborn resuscitation is:", options: ["1:1", "3:1", "5:1", "15:2"], answer: 1, rationale: "Newborn resuscitation uses 3 compressions to 1 breath." },
      { type: "mcq", q: "The 'Golden Minute' in newborn resuscitation refers to:", options: ["Delayed cord clamping for one minute", "Giving an effective breath within the first minute if not breathing", "Waiting one minute before acting", "Bathing within one minute"], answer: 1, rationale: "An effective ventilation breath should be delivered within the first minute of life if the baby is not breathing." },
      { type: "mcq", q: "Brain injury from lack of oxygen and blood flow around birth is called:", options: ["Meningitis", "Hypoxic-ischaemic encephalopathy", "Hydrocephalus", "Kernicterus"], answer: 1, rationale: "Hypoxic-ischaemic encephalopathy (HIE) is brain injury from perinatal hypoxia and ischaemia." },
      { type: "mcq", q: "An Apgar total of 0-3 indicates:", options: ["Normal baby", "Mild depression", "Moderate depression", "Severe depression"], answer: 3, rationale: "0-3 indicates severe depression; 4-6 moderate; 7-10 normal." },
      { type: "mcq", q: "The correct airway position for newborn resuscitation is:", options: ["Neck fully flexed", "Neck fully extended", "Neutral 'sniffing' position", "Head turned to the side"], answer: 2, rationale: "A neutral 'sniffing' position opens the airway; over-flexion or over-extension obstructs it." },
      { type: "mcq", q: "A long-term consequence of severe HIE may be:", options: ["Perfect development", "Cerebral palsy", "Extra height", "Faster growth"], answer: 1, rationale: "Severe HIE can result in cerebral palsy, learning difficulty and epilepsy." }
      , { type: "fill", q: "The scoring system assessing colour, pulse, grimace, activity and respiration is the ____ score.", accept: ["Apgar"], rationale: "The Apgar score rates these five signs at 1 and 5 minutes." },
      { type: "fill", q: "Effective ventilation of a non-breathing newborn should be achieved within the first minute, called the ____ Minute.", accept: ["Golden"], rationale: "The 'Golden Minute' emphasises establishing ventilation within the first minute of life." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "npc-05-respiratory",
    unit: "Unit 2 · Transition, Asphyxia & Resuscitation",
    title: "Respiratory Conditions of the Newborn (RDS, Meconium Aspiration, TTN)",
    readMinutes: 18,
    summary: "Recognising respiratory distress in the newborn, and the causes, features and management of respiratory distress syndrome (RDS), meconium aspiration syndrome (MAS) and transient tachypnoea of the newborn (TTN), with the midwife's supportive and referral role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Recognising respiratory distress", p: "Respiratory distress means the baby is working hard to breathe. Signs are tachypnoea (60 or more breaths/minute), grunting, nasal flaring, chest in-drawing (recession), see-saw breathing and central cyanosis. Any newborn with these signs is unwell and needs assessment, oxygen if hypoxic, and referral." },
      { h: "Common causes", list: [
        "Respiratory distress syndrome (RDS) — surfactant deficiency, mainly in preterm babies.",
        "Meconium aspiration syndrome (MAS) — inhaled meconium-stained liquor, mainly in term/post-term babies.",
        "Transient tachypnoea of the newborn (TTN) — delayed clearance of lung fluid.",
        "Pneumonia/sepsis, pneumothorax, and congenital problems."
      ] },
      { h: "Respiratory distress syndrome (RDS)", p: "RDS is caused by a lack of surfactant, the substance that keeps the alveoli open. Without it the alveoli collapse with each breath, so the baby must work very hard to breathe. It mainly affects preterm babies; the more preterm, the greater the risk. Features begin soon after birth and worsen over the first hours: tachypnoea, grunting, recession and cyanosis." },
      { h: "Management & prevention of RDS", list: [
        "Antenatal corticosteroids to the mother before preterm birth speed lung maturity and reduce RDS.",
        "Oxygen and respiratory support (CPAP or ventilation) at a neonatal unit.",
        "Surfactant replacement therapy where available.",
        "Warmth, careful fluids and feeding, and treatment of infection.",
        "Midwife: recognise early, give oxygen, keep warm, support blood glucose, refer."
      ] },
      { h: "Meconium aspiration syndrome (MAS)", p: "When a stressed fetus passes meconium into the liquor and gasps, it may inhale meconium-stained fluid into the lungs. This blocks airways, irritates the lungs and inactivates surfactant, causing respiratory distress in a term or post-term baby. Thick meconium and a depressed, non-vigorous baby are warning signs." },
      { h: "Management of MAS", p: "A vigorous baby with meconium liquor needs routine care and observation. A non-vigorous baby (poor tone, not breathing) may need airway clearance and resuscitation; do not delay ventilation. Affected babies need oxygen/respiratory support, warmth and often referral. Prevention lies in good intrapartum care to avoid fetal distress." },
      { h: "Transient tachypnoea of the newborn (TTN)", p: "TTN results from slow absorption of fetal lung fluid, so the baby breathes fast (tachypnoea) after birth. It is commoner after caesarean birth (no labour to help clear lung fluid). It is usually mild and self-limiting, settling within a day or two, but the baby still needs observation, oxygen if needed, and exclusion of more serious causes such as infection.", figure: {
        caption: "Common newborn respiratory conditions at a glance.",
        svg: '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of RDS, MAS and TTN"><rect x="20" y="15" width="520" height="150" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">RDS vs MAS vs TTN</text><text x="40" y="68" font-family="sans-serif" font-size="11" fill="#7C2D12">RDS: surfactant lack; PRETERM; worsens over hours</text><text x="40" y="95" font-family="sans-serif" font-size="11" fill="#7C2D12">MAS: inhaled meconium; TERM/POST-TERM; airway block</text><text x="40" y="122" font-family="sans-serif" font-size="11" fill="#7C2D12">TTN: retained lung fluid; often after caesarean; self-limiting</text><text x="40" y="149" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">All show: tachypnoea, grunting, recession, cyanosis</text></svg>'
      } },
      { h: "Midwifery care & referral", p: "For any baby in respiratory distress the midwife keeps the baby warm, positions the airway, gives oxygen if oxygen levels are low, monitors breathing, heart rate, saturation and blood glucose, supports feeding (may need tube or intravenous feeds), records observations, and refers promptly. Parents are kept informed and encouraged to be involved and to express milk." }
    ],
    references: REF_NPC,
    examQuestions: [
      "List the signs of respiratory distress in a newborn.",
      "Describe the cause, features and management of respiratory distress syndrome.",
      "What is meconium aspiration syndrome? How is it managed and prevented?",
      "Describe transient tachypnoea of the newborn and its usual course.",
      "Outline the midwifery care of a newborn with respiratory distress."
    ],
    assessment: [
      { type: "mcq", q: "Respiratory distress syndrome (RDS) is caused by a lack of:", options: ["Bilirubin", "Surfactant", "Glucose", "Insulin"], answer: 1, rationale: "RDS results from surfactant deficiency, causing alveolar collapse." },
      { type: "mcq", q: "RDS mainly affects which babies?", options: ["Post-term babies", "Term babies", "Preterm babies", "Large babies"], answer: 2, rationale: "Surfactant deficiency is greatest in preterm babies, so RDS mainly affects them." },
      { type: "mcq", q: "A sign of respiratory distress in a newborn is:", options: ["Slow breathing at 20/min", "Grunting and chest in-drawing", "Pink tongue", "Strong feeding"], answer: 1, rationale: "Grunting, recession, flaring and tachypnoea indicate respiratory distress." },
      { type: "mcq", q: "Meconium aspiration syndrome mainly occurs in:", options: ["Very preterm babies", "Term or post-term babies", "Babies born by planned caesarean", "Babies under 1000 g"], answer: 1, rationale: "MAS affects term/post-term babies who pass and inhale meconium-stained liquor." },
      { type: "mcq", q: "Transient tachypnoea of the newborn is due to:", options: ["Surfactant deficiency", "Delayed clearance of lung fluid", "Inhaled meconium", "Heart failure"], answer: 1, rationale: "TTN is caused by slow absorption of retained fetal lung fluid." },
      { type: "mcq", q: "TTN is more common after:", options: ["Vaginal birth", "Caesarean birth", "Water birth", "Home birth"], answer: 1, rationale: "Without labour to help clear lung fluid, caesarean birth is associated with more TTN." },
      { type: "mcq", q: "Giving the mother antenatal corticosteroids before preterm birth helps by:", options: ["Speeding fetal lung maturity", "Increasing birth weight", "Preventing jaundice", "Curing infection"], answer: 0, rationale: "Antenatal steroids accelerate surfactant production and reduce RDS." },
      { type: "mcq", q: "A non-vigorous baby born through thick meconium liquor should FIRST have:", options: ["A bath", "Airway attention and, if not breathing, ventilation", "Oral feeds", "Delayed care"], answer: 1, rationale: "Airway management and prompt ventilation take priority in a depressed, non-vigorous baby." },
      { type: "mcq", q: "The usual course of transient tachypnoea of the newborn is:", options: ["Lifelong illness", "Rapid death", "Self-limiting, settling within a day or two", "Progressive worsening over weeks"], answer: 2, rationale: "TTN is usually mild and self-limiting, resolving within one to two days." },
      { type: "mcq", q: "A key midwifery action for a baby in respiratory distress is to:", options: ["Cool the baby", "Keep warm, give oxygen if hypoxic and refer", "Feed a large bottle immediately", "Delay all observations"], answer: 1, rationale: "Warmth, oxygen when hypoxic, monitoring and prompt referral are core midwifery actions." }
      , { type: "fill", q: "The substance that keeps the alveoli open and is deficient in RDS is ____.", accept: ["surfactant"], rationale: "Surfactant lowers surface tension and keeps alveoli open; its lack causes RDS." },
      { type: "fill", q: "A newborn respiratory rate of ____ or more per minute is called tachypnoea.", accept: ["60", "sixty"], rationale: "Tachypnoea in the newborn is a rate of 60 or more breaths per minute." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "npc-06-congenital-heart",
    unit: "Unit 3 · Cardiac, Metabolic & Neurological Conditions",
    title: "Congenital Heart Disease (Classification & Effects)",
    readMinutes: 17,
    summary: "Congenital heart disease in the newborn: acyanotic and cyanotic types, common defects (VSD, ASD, PDA, tetralogy of Fallot, transposition), how they present, the effects on the baby, and the midwife's role in recognition and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is congenital heart disease?", p: "Congenital heart disease (CHD) is a structural abnormality of the heart or great vessels present from birth. It is the commonest group of major congenital anomalies. Some defects are mild and cause no problems; others are life-threatening and need early recognition and specialist care." },
      { h: "Classification", p: "CHD is broadly divided into acyanotic and cyanotic types depending on whether the baby appears blue (cyanosed).", list: [
        "Acyanotic — the baby is usually pink; blood shunts from the left (oxygenated) side to the right, or an obstruction is present. Examples: ventricular septal defect (VSD), atrial septal defect (ASD), patent ductus arteriosus (PDA), coarctation and pulmonary/aortic stenosis.",
        "Cyanotic — the baby is blue because deoxygenated blood reaches the body (right-to-left shunt or mixing). Examples: tetralogy of Fallot, transposition of the great arteries."
      ], figure: {
        caption: "Congenital heart disease: acyanotic vs cyanotic groups.",
        svg: '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Acyanotic and cyanotic congenital heart disease"><rect x="20" y="15" width="250" height="150" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><rect x="290" y="15" width="250" height="150" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="145" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">ACYANOTIC (pink)</text><text x="415" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">CYANOTIC (blue)</text><text x="40" y="68" font-family="sans-serif" font-size="11" fill="#7C2D12">VSD - ventricular septal defect</text><text x="40" y="90" font-family="sans-serif" font-size="11" fill="#7C2D12">ASD - atrial septal defect</text><text x="40" y="112" font-family="sans-serif" font-size="11" fill="#7C2D12">PDA - patent ductus arteriosus</text><text x="40" y="134" font-family="sans-serif" font-size="11" fill="#7C2D12">Coarctation, stenosis</text><text x="310" y="68" font-family="sans-serif" font-size="11" fill="#7C2D12">Tetralogy of Fallot</text><text x="310" y="90" font-family="sans-serif" font-size="11" fill="#7C2D12">Transposition of great arteries</text><text x="310" y="134" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Right-to-left / mixing</text></svg>'
      } },
      { h: "Common defects (in brief)", list: [
        "VSD — a hole between the ventricles; commonest CHD; may cause a murmur and, if large, heart failure.",
        "ASD — a hole between the atria; often few symptoms in the newborn.",
        "PDA — the ductus arteriosus fails to close; common in preterm babies.",
        "Tetralogy of Fallot — four defects together causing cyanosis, especially with 'spells'.",
        "Transposition of the great arteries — the aorta and pulmonary artery are switched; causes severe cyanosis soon after birth."
      ] },
      { h: "Effects on the baby", p: "The effects depend on the defect. Cyanotic lesions cause low oxygen (blueness, especially of the tongue). Lesions with big left-to-right shunts cause heart failure — fast breathing, sweating (especially with feeds), poor feeding, poor weight gain and an enlarged liver. Duct-dependent lesions may collapse when the ductus arteriosus closes in the first days of life." },
      { h: "Clinical features & recognition", list: [
        "Central cyanosis not corrected by oxygen.",
        "Fast or laboured breathing, especially with feeds.",
        "Poor feeding, sweating, tiredness, poor weight gain (signs of heart failure).",
        "A heart murmur (may be absent early).",
        "Weak or absent femoral pulses (coarctation).",
        "Sudden collapse in the first days (duct-dependent lesion)."
      ] },
      { h: "Assessment & investigations", p: "Pulse oximetry screening can detect low oxygen from cyanotic CHD before it is obvious. Diagnosis is confirmed at the referral centre by echocardiography, with chest X-ray and ECG. The midwife's job is to notice the warning signs and refer, not to make the diagnosis." },
      { h: "Management principles", p: "Management is at a specialist centre and may include medicines for heart failure, keeping the ductus open with prostaglandin in duct-dependent lesions, and surgery or catheter procedures. Some small defects (many VSDs) close on their own and only need monitoring." },
      { h: "Midwifery role, referral & family support", p: "The midwife recognises cyanosis, respiratory distress, feeding difficulty or a murmur, keeps the baby warm and stable, supports feeding (small frequent feeds, expressed breast milk), and refers promptly. Suspected duct-dependent collapse is an emergency. Parents need clear, sensitive information and support, and encouragement to bond and breastfeed where possible." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define congenital heart disease and classify it into acyanotic and cyanotic types.",
      "Name the common congenital heart defects and describe each briefly.",
      "Describe the effects and clinical features of congenital heart disease in the newborn.",
      "How is congenital heart disease detected and confirmed?",
      "Discuss the midwife's role in recognition, referral and family support for a baby with CHD."
    ],
    assessment: [
      { type: "mcq", q: "The commonest congenital heart defect is:", options: ["Ventricular septal defect", "Atrial septal defect", "Tetralogy of Fallot", "Transposition of the great arteries"], answer: 0, rationale: "Ventricular septal defect (VSD) is the most common congenital heart defect." },
      { type: "mcq", q: "Tetralogy of Fallot is classified as a ____ heart defect.", options: ["Acyanotic", "Non-structural", "Cyanotic", "Acquired"], answer: 2, rationale: "Tetralogy of Fallot causes right-to-left shunting and cyanosis, so it is cyanotic." },
      { type: "mcq", q: "Central cyanosis that does NOT improve with oxygen suggests:", options: ["Normal newborn", "Simple jaundice", "Cyanotic congenital heart disease", "Cold stress only"], answer: 2, rationale: "Cyanosis unresponsive to oxygen points to a cyanotic cardiac cause." },
      { type: "mcq", q: "Signs of heart failure in a newborn include:", options: ["Strong feeding and rapid weight gain", "Sweating with feeds, fast breathing and poor weight gain", "A slow heart rate only", "Bright pink colour"], answer: 1, rationale: "Sweating during feeds, tachypnoea, poor feeding and poor weight gain indicate heart failure." },
      { type: "mcq", q: "Weak or absent femoral pulses in a newborn suggest:", options: ["Transposition", "ASD", "PDA", "Coarctation of the aorta"], answer: 3, rationale: "Coarctation of the aorta classically causes weak or absent femoral pulses." },
      { type: "mcq", q: "In a duct-dependent lesion, the baby may collapse when the:", options: ["Ductus arteriosus closes", "Foramen ovale opens", "Baby feeds", "Cord is clamped"], answer: 0, rationale: "Duct-dependent lesions depend on the ductus arteriosus; closure causes collapse in the first days." },
      { type: "mcq", q: "The test that confirms the diagnosis of congenital heart disease is:", options: ["Blood glucose", "Bilirubin level", "Echocardiography", "Urine test"], answer: 2, rationale: "Echocardiography visualises the heart structure and confirms CHD." },
      { type: "mcq", q: "The screening tool that can detect cyanotic CHD early is:", options: ["Weighing scale", "Pulse oximetry", "Tape measure", "Thermometer"], answer: 1, rationale: "Pulse oximetry screening detects low oxygen saturation before visible cyanosis." },
      { type: "mcq", q: "Patent ductus arteriosus is especially common in:", options: ["Post-term babies", "Large babies", "Preterm babies", "Term girls only"], answer: 2, rationale: "PDA is common in preterm babies because the ductus is slower to close." },
      { type: "mcq", q: "The midwife's main role when a baby shows signs of CHD is to:", options: ["Perform cardiac surgery", "Prescribe heart medicines", "Recognise signs, stabilise and refer promptly", "Reassure and discharge"], answer: 2, rationale: "The midwife recognises warning signs, keeps the baby stable, and refers to specialist care." }
      , { type: "fill", q: "A congenital heart defect in which the baby appears blue is called a ____ defect.", accept: ["cyanotic"], rationale: "Cyanotic defects allow deoxygenated blood into the systemic circulation, making the baby blue." },
      { type: "fill", q: "The commonest congenital heart defect, a hole between the ventricles, is the ____ septal defect.", accept: ["ventricular", "VSD"], rationale: "A ventricular septal defect (VSD) is the most common congenital heart defect." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "npc-07-hypoglycaemia",
    unit: "Unit 3 · Cardiac, Metabolic & Neurological Conditions",
    title: "Neonatal Hypoglycaemia (Recognition & Blood-Glucose Management)",
    readMinutes: 16,
    summary: "What neonatal hypoglycaemia is, which babies are at risk, its causes and signs, blood-glucose testing, and the prevention and management of low blood glucose, with emphasis on early feeding and the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is neonatal hypoglycaemia?", p: "Neonatal hypoglycaemia is an abnormally low blood glucose level in the newborn. Glucose is the main fuel for the brain, so persistent or severe hypoglycaemia can injure the developing brain. A commonly used operational threshold is a blood glucose below 2.6 mmol/L, though thresholds vary; the key is to recognise babies at risk and act early." },
      { h: "Why newborns are prone to low glucose", p: "At birth the baby loses the steady glucose supply from the placenta and must maintain its own level from limited glycogen stores and by feeding. Babies with small stores (preterm, growth-restricted), high glucose use (sick, cold, infected) or high insulin (infant of a diabetic mother) are at particular risk." },
      { h: "Babies at risk", list: [
        "Preterm and small-for-gestational-age / growth-restricted babies (small stores).",
        "Infant of a diabetic mother and large-for-gestational-age babies (high insulin).",
        "Sick babies — asphyxia, infection, respiratory distress (high glucose use).",
        "Cold-stressed babies (hypothermia increases glucose use).",
        "Babies who feed poorly or whose feeding is delayed."
      ] },
      { h: "Clinical features", p: "Many hypoglycaemic babies have no signs, which is why at-risk babies are screened. When present, signs are non-specific.", list: [
        "Jitteriness or tremors.",
        "Lethargy, poor feeding, floppiness.",
        "Apnoea (pauses in breathing) or fast breathing.",
        "Temperature instability.",
        "Irritability, high-pitched cry, and in severe cases convulsions or coma."
      ] },
      { h: "Blood-glucose testing", p: "Blood glucose is measured at the bedside from a heel-prick sample using a reagent strip/glucometer, with laboratory confirmation for very low or borderline results. At-risk babies are screened before feeds according to local protocol; the midwife records values and acts on them. Warm the heel and use good technique to get an accurate sample.", figure: {
        caption: "Neonatal hypoglycaemia: at-risk to action pathway.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hypoglycaemia identify, test, feed, refer"><defs><marker id="npcA7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="10" y="50" width="120" height="50" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="70" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">IDENTIFY</text><text x="70" y="89" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">at-risk baby</text><rect x="150" y="50" width="120" height="50" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="210" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">TEST</text><text x="210" y="89" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">blood glucose</text><rect x="290" y="50" width="120" height="50" rx="9" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="350" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">FEED</text><text x="350" y="89" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">early/frequent</text><rect x="430" y="50" width="120" height="50" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="490" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">REFER</text><text x="490" y="89" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">if persistent</text><line x1="130" y1="75" x2="146" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA7)"/><line x1="270" y1="75" x2="286" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA7)"/><line x1="410" y1="75" x2="426" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA7)"/></svg>'
      } },
      { h: "Prevention", list: [
        "Early and frequent feeding — breastfeed within the first hour and on demand.",
        "Skin-to-skin contact and warmth to reduce glucose use.",
        "Identify at-risk babies and screen them before feeds.",
        "Avoid unnecessary separation of mother and baby."
      ] },
      { h: "Management", p: "For a mildly low result in a well baby, feed (breast or expressed milk) and recheck. If glucose stays low, the baby is symptomatic, or the level is very low, the baby needs intravenous glucose (dextrose) and referral to a neonatal unit. Never rely on 'the baby looks fine' in an at-risk baby — measure. Treat the underlying cause (warmth for cold stress, treat infection)." },
      { h: "Midwifery role & complications", p: "The midwife identifies at-risk babies, supports and protects breastfeeding, tests and records glucose, feeds early, keeps the baby warm, escalates and refers when levels remain low or the baby is symptomatic. Untreated severe hypoglycaemia can cause seizures and permanent brain injury, so prompt action is essential." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define neonatal hypoglycaemia and explain why glucose is important for the newborn.",
      "List the babies at risk of hypoglycaemia and give the reason for each.",
      "Describe the clinical features of neonatal hypoglycaemia.",
      "How is neonatal hypoglycaemia prevented and managed?",
      "Discuss the midwife's role in screening and managing hypoglycaemia."
    ],
    assessment: [
      { type: "mcq", q: "Neonatal hypoglycaemia means the blood glucose is abnormally:", options: ["High", "Low", "Normal", "Absent"], answer: 1, rationale: "Hypoglycaemia is an abnormally low blood glucose level." },
      { type: "mcq", q: "A commonly used operational threshold for neonatal hypoglycaemia is a blood glucose below:", options: ["2.6 mmol/L", "5.5 mmol/L", "7.0 mmol/L", "10 mmol/L"], answer: 0, rationale: "A blood glucose below about 2.6 mmol/L is a commonly used operational threshold." },
      { type: "mcq", q: "Which baby is at increased risk of hypoglycaemia because of HIGH insulin?", options: ["Post-term baby", "Infant of a diabetic mother", "Baby with a birthmark", "Baby with jaundice"], answer: 1, rationale: "The infant of a diabetic mother has high insulin levels, predisposing to hypoglycaemia." },
      { type: "mcq", q: "The main fuel for the newborn brain is:", options: ["Protein", "Fat", "Glucose", "Calcium"], answer: 2, rationale: "Glucose is the brain's main energy source, so hypoglycaemia can injure the brain." },
      { type: "mcq", q: "A common non-specific sign of neonatal hypoglycaemia is:", options: ["Jitteriness and poor feeding", "A loud, strong cry", "Rapid weight gain", "Deep sleep only"], answer: 0, rationale: "Jitteriness, lethargy and poor feeding are typical, though many babies have no signs." },
      { type: "mcq", q: "The BEST first measure to prevent hypoglycaemia in a healthy at-risk baby is:", options: ["Give intravenous glucose routinely", "Early and frequent breastfeeding with warmth", "Cool the baby", "Delay feeding"], answer: 1, rationale: "Early, frequent feeding and warmth (skin-to-skin) prevent most hypoglycaemia." },
      { type: "mcq", q: "Blood glucose in the newborn is usually first measured from a:", options: ["Heel-prick sample with a glucometer", "24-hour urine collection", "Lumbar puncture", "Cord blood only"], answer: 0, rationale: "A heel-prick reagent-strip/glucometer test is the standard bedside method." },
      { type: "mcq", q: "A baby with a very low glucose or symptoms such as convulsions needs:", options: ["Only reassurance", "Intravenous glucose and referral", "Cooling", "A delayed feed"], answer: 1, rationale: "Severe or symptomatic hypoglycaemia requires IV glucose and referral to a neonatal unit." },
      { type: "mcq", q: "Cold stress affects blood glucose by:", options: ["Lowering glucose use", "Increasing glucose use and lowering the level", "Raising the glucose level", "Having no effect"], answer: 1, rationale: "Hypothermia increases glucose consumption, worsening hypoglycaemia." },
      { type: "mcq", q: "Untreated severe neonatal hypoglycaemia can cause:", options: ["Permanent brain injury", "Better development", "Faster growth", "No harm"], answer: 0, rationale: "Prolonged severe hypoglycaemia can cause seizures and permanent brain damage." }
      , { type: "fill", q: "The single most important measure to prevent hypoglycaemia in a well newborn is early and frequent ____.", accept: ["feeding", "breastfeeding"], rationale: "Early, frequent breastfeeding maintains blood glucose in the newborn." },
      { type: "fill", q: "Blood glucose is commonly sampled from a newborn by a ____-prick.", accept: ["heel"], rationale: "A warmed heel-prick provides the bedside blood-glucose sample." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "npc-08-seizures",
    unit: "Unit 3 · Cardiac, Metabolic & Neurological Conditions",
    title: "Neonatal Convulsions / Seizures & Anticonvulsants",
    readMinutes: 17,
    summary: "What neonatal seizures are, how they differ from jitteriness, their causes and clinical types, investigations, immediate and drug management (anticonvulsants as standard agents), and the midwife's role in recognition and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are neonatal convulsions?", p: "A neonatal convulsion (seizure) is an abnormal, involuntary electrical discharge in the brain, showing as abnormal movements, behaviour or autonomic changes in the newborn. Seizures are a sign of an underlying problem, not a diagnosis in themselves, and they are a neurological emergency requiring urgent assessment and referral." },
      { h: "Jitteriness versus seizures", p: "Jitteriness is common and benign; it must be told apart from seizures.", list: [
        "Jitteriness — fine, rapid tremor; stimulus-sensitive (starts with handling); STOPS when the limb is gently held; no eye or autonomic changes; baby otherwise well.",
        "Seizure — often not stimulus-related; does NOT stop when the limb is held; may have eye deviation, lip-smacking, apnoea or colour change; baby often unwell."
      ] },
      { h: "Causes of neonatal seizures", list: [
        "Hypoxic-ischaemic encephalopathy (birth asphyxia) — the commonest cause.",
        "Metabolic — hypoglycaemia, low calcium, low sodium.",
        "Infection — meningitis, sepsis, congenital infection.",
        "Intracranial bleeding or birth injury.",
        "Structural brain malformation.",
        "Rarely, inborn errors of metabolism or drug withdrawal."
      ] },
      { h: "Clinical types", list: [
        "Subtle — eye deviation, blinking, lip-smacking, cycling/pedalling movements, apnoea (commonest in newborns and easily missed).",
        "Clonic — rhythmic jerking of a limb or side.",
        "Tonic — stiffening of the body or a limb.",
        "Myoclonic — sudden single jerks."
      ] },
      { h: "Investigations", p: "Because seizures signal an underlying cause, urgent tests are done (usually after referral): blood glucose (at once, at the bedside), calcium and electrolytes, infection screen (including lumbar puncture for meningitis), and, where available, cranial ultrasound and EEG. Bedside blood glucose is the first, quick, reversible thing to check and correct." },
      { h: "Immediate management", p: "Airway, breathing and circulation come first — position the airway, give oxygen, and support breathing (apnoea is common). Check and correct blood glucose immediately. Keep the baby warm and refer urgently. Note the time, type and duration of the seizure.", figure: {
        caption: "First steps in a newborn seizure.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Seizure first steps ABC, glucose, drug, refer"><defs><marker id="npcA8" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="10" y="50" width="120" height="50" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="70" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">ABC + O2</text><text x="70" y="89" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">airway, breathing</text><rect x="150" y="50" width="120" height="50" rx="9" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="210" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">CHECK GLUCOSE</text><text x="210" y="89" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">correct if low</text><rect x="290" y="50" width="120" height="50" rx="9" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="350" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">ANTICONVULSANT</text><text x="350" y="89" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">as prescribed</text><rect x="430" y="50" width="120" height="50" rx="9" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="490" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">REFER</text><text x="490" y="89" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">urgently</text><line x1="130" y1="75" x2="146" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA8)"/><line x1="270" y1="75" x2="286" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA8)"/><line x1="410" y1="75" x2="426" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA8)"/></svg>'
      } },
      { h: "Anticonvulsant drugs", p: "If seizures continue after correcting glucose and calcium, anticonvulsants are given under medical supervision at a referral centre. Phenobarbital (phenobarbitone) is the standard first-line drug for neonatal seizures; phenytoin and benzodiazepines (such as midazolam) are used as further agents. The midwife's role is to recognise seizures, give immediate stabilising care, and refer — not to prescribe alone." },
      { h: "Midwifery role, complications & family support", p: "The midwife recognises and describes the seizure accurately, protects the airway, checks glucose, keeps the baby safe and warm, and refers urgently. Prolonged or repeated seizures can worsen brain injury, so speed matters. Parents are frightened; the midwife explains calmly, involves them, and keeps them informed during referral." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define neonatal convulsions and explain how they differ from jitteriness.",
      "List the causes of neonatal seizures.",
      "Describe the clinical types of neonatal seizures.",
      "Outline the immediate management of a newborn having a seizure.",
      "Name the anticonvulsant drugs used in neonatal seizures and describe the midwife's role."
    ],
    assessment: [
      { type: "mcq", q: "The commonest cause of neonatal seizures is:", options: ["Hypoxic-ischaemic encephalopathy", "Down syndrome", "Cleft palate", "Physiological jaundice"], answer: 0, rationale: "Birth asphyxia (HIE) is the most common cause of neonatal seizures." },
      { type: "mcq", q: "A key feature that distinguishes jitteriness from a seizure is that jitteriness:", options: ["Does not stop when the limb is held", "Stops when the limb is gently held", "Has eye deviation", "Causes apnoea"], answer: 1, rationale: "Jitteriness stops when the limb is held; a seizure does not." },
      { type: "mcq", q: "The commonest and most easily missed type of neonatal seizure is:", options: ["Tonic", "Clonic", "Subtle", "Myoclonic"], answer: 2, rationale: "Subtle seizures (eye deviation, lip-smacking, apnoea) are common and easily missed." },
      { type: "mcq", q: "The FIRST bedside investigation to check and correct during a neonatal seizure is:", options: ["Chest X-ray", "Blood glucose", "Full blood count", "Bilirubin"], answer: 1, rationale: "Blood glucose is a quick, reversible cause and should be checked and corrected first." },
      { type: "mcq", q: "The standard first-line anticonvulsant for neonatal seizures is:", options: ["Paracetamol", "Phenobarbital (phenobarbitone)", "Ibuprofen", "Amoxicillin"], answer: 1, rationale: "Phenobarbital is the standard first-line anticonvulsant for neonatal seizures." },
      { type: "mcq", q: "During a neonatal seizure the FIRST priority is:", options: ["Weighing the baby", "Airway, breathing and circulation", "Bathing the baby", "Feeding the baby"], answer: 1, rationale: "As with any emergency, ABC comes first, since apnoea is common in seizures." },
      { type: "mcq", q: "Which is a metabolic cause of neonatal seizures?", options: ["Low calcium", "Cleft lip", "Extra digit", "Birthmark"], answer: 0, rationale: "Hypocalcaemia (low calcium), like hypoglycaemia, is a metabolic cause of seizures." },
      { type: "mcq", q: "Rhythmic jerking of one limb or one side of the body is a ____ seizure.", options: ["Subtle", "Clonic", "Tonic", "Myoclonic"], answer: 1, rationale: "Clonic seizures are rhythmic jerking movements." },
      { type: "mcq", q: "To exclude meningitis as a cause of seizures, the investigation used is:", options: ["Lumbar puncture", "Blood glucose only", "Weighing", "Skin swab"], answer: 0, rationale: "A lumbar puncture examines the cerebrospinal fluid to diagnose meningitis." },
      { type: "mcq", q: "The midwife's main responsibility for a seizing newborn is to:", options: ["Prescribe anticonvulsants independently", "Recognise, stabilise (ABC, glucose) and refer urgently", "Reassure and discharge", "Delay action until seizures stop"], answer: 1, rationale: "The midwife recognises, gives immediate stabilising care and refers; drugs are given under medical supervision." }
      , { type: "fill", q: "A benign fine tremor that stops when the limb is held, and must be distinguished from a seizure, is called ____.", accept: ["jitteriness"], rationale: "Jitteriness is stimulus-sensitive and stops on holding the limb, unlike a seizure." },
      { type: "fill", q: "The standard first-line anticonvulsant drug for neonatal seizures is ____.", accept: ["phenobarbital", "phenobarbitone"], rationale: "Phenobarbital (phenobarbitone) is the first-line neonatal anticonvulsant." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "npc-09-jaundice",
    unit: "Unit 3 · Cardiac, Metabolic & Neurological Conditions",
    title: "Neonatal Jaundice (Hyperbilirubinaemia) & Phototherapy",
    readMinutes: 18,
    summary: "Physiological and pathological jaundice, the causes and dangers of high bilirubin (kernicterus), assessment of jaundice, phototherapy and exchange transfusion, and the midwife's role in recognition, feeding support and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is neonatal jaundice?", p: "Jaundice is the yellow discolouration of the skin and eyes caused by a raised level of bilirubin (hyperbilirubinaemia) in the blood. Bilirubin comes from the breakdown of red blood cells. Jaundice is very common in newborns; most is harmless (physiological), but some is dangerous and needs treatment." },
      { h: "Physiological versus pathological jaundice", list: [
        "Physiological — appears AFTER 24 hours (usually day 2-3), is mild, and fades by the end of the first week (later in preterm/breastfed babies). It is due to normal red-cell breakdown and immature liver.",
        "Pathological — appears within the first 24 hours, rises quickly or very high, lasts beyond 2 weeks (prolonged), or the baby is unwell. This always needs investigation."
      ] },
      { h: "Causes of pathological jaundice", list: [
        "Blood group incompatibility — Rh or ABO haemolytic disease (rapid red-cell breakdown).",
        "Infection / sepsis.",
        "Bruising or cephalhaematoma (extra red cells to break down).",
        "Prematurity.",
        "G6PD deficiency and other haemolytic conditions.",
        "Prolonged jaundice — breast-milk jaundice, hypothyroidism, or biliary problems (needs work-up)."
      ] },
      { h: "The danger: kernicterus", p: "Very high unconjugated bilirubin can cross into the brain and cause acute bilirubin encephalopathy and permanent brain damage called kernicterus (leading to cerebral palsy, deafness and learning difficulty). This is a preventable tragedy — the reason severe jaundice must be found and treated promptly." },
      { h: "Assessment of jaundice", p: "Jaundice is assessed in good (preferably natural) daylight, pressing the skin to see the yellow colour, which spreads head-downwards as it worsens (face first, then trunk, then palms and soles). Visual assessment is only a guide; the level must be confirmed by measuring bilirubin (transcutaneous meter or blood). Note the age of onset, feeding, wet nappies and whether the baby is well.", figure: {
        caption: "Physiological vs pathological jaundice by timing.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timing of physiological and pathological jaundice"><rect x="20" y="15" width="520" height="130" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">When did the jaundice appear?</text><text x="40" y="70" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">&lt; 24 hours &#8594; PATHOLOGICAL (always investigate)</text><text x="40" y="98" font-family="sans-serif" font-size="12" fill="#7C2D12">Day 2-3, mild, fades in a week &#8594; usually physiological</text><text x="40" y="126" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">&gt; 2 weeks (prolonged) &#8594; investigate</text></svg>'
      } },
      { h: "Phototherapy", p: "Phototherapy is the main treatment. Blue-spectrum light changes bilirubin in the skin into a form the baby can excrete. The baby is nursed undressed under the light with the eyes protected, kept warm, and hydrated (continue frequent breastfeeding). Bilirubin is monitored; the decision to start and stop phototherapy is based on the bilirubin level plotted against the baby's age in hours and gestation on a treatment chart." },
      { h: "Exchange transfusion & other care", p: "If bilirubin is very high or rising despite phototherapy (for example in severe haemolytic disease), an exchange transfusion may be needed at a specialist centre to rapidly lower bilirubin and prevent kernicterus. The underlying cause (for example infection) is also treated. Good feeding and hydration are important throughout." },
      { h: "Midwifery role, prevention & referral", p: "The midwife examines every baby for jaundice, checks the age of onset, ensures effective frequent feeding (which helps clear bilirubin), measures/arranges measurement of bilirubin, and refers babies with jaundice in the first 24 hours, deep or rapidly rising jaundice, jaundice reaching palms/soles, an unwell baby, or prolonged jaundice. Rh-negative mothers should receive anti-D prophylaxis to prevent Rh disease. Parents are taught how to check for jaundice at home and when to seek help." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Differentiate physiological from pathological jaundice.",
      "List the causes of pathological neonatal jaundice.",
      "What is kernicterus and why must severe jaundice be treated promptly?",
      "Describe phototherapy and the nursing care of a baby under phototherapy.",
      "Discuss the midwife's role in the recognition, feeding support and referral of the jaundiced newborn."
    ],
    assessment: [
      { type: "mcq", q: "The yellow colour of jaundice is due to a raised level of:", options: ["Glucose", "Bilirubin", "Calcium", "Sodium"], answer: 1, rationale: "Jaundice is caused by hyperbilirubinaemia — a raised blood bilirubin level." },
      { type: "mcq", q: "Jaundice appearing within the first 24 hours of life is:", options: ["Always physiological", "Always pathological and must be investigated", "Normal and ignored", "Due to breast milk"], answer: 1, rationale: "Jaundice within 24 hours is pathological and always needs investigation." },
      { type: "mcq", q: "Physiological jaundice usually appears on:", options: ["Day 1 (first 24 hours)", "Day 2-3", "Day 10", "Day 21"], answer: 1, rationale: "Physiological jaundice typically appears on day 2-3 and fades within the first week." },
      { type: "mcq", q: "The permanent brain damage caused by very high bilirubin is called:", options: ["Kernicterus", "Meningitis", "Hydrocephalus", "Cerebral oedema"], answer: 0, rationale: "Kernicterus is bilirubin-induced brain damage from very high unconjugated bilirubin." },
      { type: "mcq", q: "The main treatment for neonatal jaundice is:", options: ["Antibiotics", "Phototherapy", "Insulin", "Cooling"], answer: 1, rationale: "Phototherapy converts bilirubin in the skin to an excretable form and is the main treatment." },
      { type: "mcq", q: "During phototherapy the baby's ____ must be protected.", options: ["Feet", "Eyes", "Ears", "Fingers"], answer: 1, rationale: "The eyes are covered to protect them from the phototherapy light." },
      { type: "mcq", q: "A cause of pathological jaundice from rapid red-cell breakdown is:", options: ["Rh or ABO incompatibility", "Physiological anaemia", "Normal feeding", "Weight gain"], answer: 0, rationale: "Rh/ABO haemolytic disease causes rapid red-cell breakdown and high bilirubin." },
      { type: "mcq", q: "Jaundice is best assessed:", options: ["In dim light", "In good natural daylight, pressing the skin", "By smell", "By listening"], answer: 1, rationale: "Jaundice is assessed in good daylight by blanching the skin; level must be confirmed by measurement." },
      { type: "mcq", q: "If bilirubin is very high or rising despite phototherapy, the next treatment may be:", options: ["Exchange transfusion", "Cold bathing", "Stopping feeds", "Vitamin K only"], answer: 0, rationale: "Exchange transfusion rapidly lowers dangerous bilirubin levels to prevent kernicterus." },
      { type: "mcq", q: "To prevent Rh haemolytic disease, an Rh-negative mother should receive:", options: ["Anti-D prophylaxis", "Extra iron", "Phototherapy", "Antibiotics"], answer: 0, rationale: "Anti-D immunoglobulin prevents Rh sensitisation and Rh haemolytic disease of the newborn." }
      , { type: "fill", q: "Jaundice that appears in the first ____ hours of life is always pathological.", accept: ["24", "twenty-four", "twenty four"], rationale: "Jaundice within the first 24 hours must always be investigated." },
      { type: "fill", q: "The main treatment that uses blue light to lower bilirubin is called ____.", accept: ["phototherapy"], rationale: "Phototherapy converts skin bilirubin into an excretable form." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "npc-10-sepsis",
    unit: "Unit 4 · Growth, Prematurity & Infection",
    title: "Neonatal Infections & Sepsis (Detection, Management, Referral)",
    readMinutes: 18,
    summary: "How newborns acquire infection, early- and late-onset sepsis, common organisms and congenital infections, the non-specific signs of neonatal sepsis, investigations, management principles and prevention, with the midwife's role in detection and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why infection is so serious in the newborn", p: "The newborn's immune system is immature, so infection spreads quickly and can be fatal within hours. Sepsis is infection that has spread to the bloodstream and body. Because early signs are subtle and non-specific, a high index of suspicion and early treatment save lives. Neonatal infection is a major cause of newborn death, much of it preventable." },
      { h: "How infection is acquired", list: [
        "Before birth (congenital) — organisms cross the placenta (the 'TORCH' group: toxoplasmosis, rubella, cytomegalovirus, herpes, and others such as syphilis and HIV).",
        "During birth — from the birth canal (for example Group B streptococcus, gonorrhoea, chlamydia, hepatitis B, HIV) or prolonged rupture of membranes.",
        "After birth — from hands, equipment, unclean cord care, or contact with infected people (hospital-acquired or community)."
      ] },
      { h: "Early- and late-onset sepsis", list: [
        "Early-onset (within the first 72 hours) — usually acquired around birth from the mother; often Group B streptococcus or E. coli; frequently presents as respiratory distress.",
        "Late-onset (after 72 hours) — often acquired from the environment/hospital; may present as poor feeding, lethargy or temperature change."
      ] },
      { h: "Signs of neonatal sepsis (non-specific)", list: [
        "Poor feeding, lethargy, floppiness, 'not himself'.",
        "Temperature instability — fever (37.5 C or more) OR low temperature (below 36.5 C).",
        "Fast breathing, grunting, apnoea, cyanosis.",
        "Vomiting, abdominal distension, diarrhoea.",
        "Jaundice, pallor, mottled skin, poor perfusion.",
        "Convulsions, bulging fontanelle (meningitis).",
        "Local signs — red/discharging cord, skin pustules, eye discharge."
      ] },
      { h: "Investigations", p: "At the referral centre, a 'septic screen' is done: full blood count, C-reactive protein, blood culture (the gold standard), and, if meningitis is suspected, a lumbar puncture. Urine culture, chest X-ray and blood glucose may be added. The midwife records the danger signs and baseline observations before referral; treatment should not be delayed waiting for results.", figure: {
        caption: "Routes by which the newborn acquires infection.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Routes of neonatal infection: before, during, after birth"><rect x="20" y="20" width="520" height="120" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">How the newborn gets infected</text><text x="40" y="75" font-family="sans-serif" font-size="12" fill="#7C2D12">BEFORE birth &#8594; across placenta (TORCH, syphilis, HIV)</text><text x="40" y="100" font-family="sans-serif" font-size="12" fill="#7C2D12">DURING birth &#8594; birth canal (Group B strep, gonorrhoea)</text><text x="40" y="125" font-family="sans-serif" font-size="12" fill="#7C2D12">AFTER birth &#8594; hands, equipment, unclean cord care</text></svg>'
      } },
      { h: "Management principles", p: "Suspected sepsis is a medical emergency needing referral. Treatment is with intravenous antibiotics (chosen by local protocol, usually a broad-spectrum combination), started promptly after cultures. Supportive care includes warmth, oxygen and respiratory support, blood-glucose support, fluids/feeding and treatment of complications. Antibiotics are reviewed once culture results are known." },
      { h: "Prevention", list: [
        "Strict hand hygiene — the single most effective measure.",
        "Clean birth practices and clean, dry cord care.",
        "Screening and treating maternal infections; intrapartum antibiotics for Group B strep risk.",
        "Early and exclusive breastfeeding (protective antibodies).",
        "Eye prophylaxis at birth where indicated; immunisation (for example hepatitis B, tetanus toxoid to mother).",
        "Avoiding unnecessary separation and invasive procedures."
      ] },
      { h: "Midwifery role & referral", p: "The midwife maintains strict hand hygiene and clean practices, watches every at-risk baby for the non-specific signs, keeps the baby warm and stable, and refers promptly at the first suspicion of sepsis — never waiting for the baby to look obviously ill. Support breastfeeding, keep mother and baby together where safe, and give parents clear information and the danger signs to watch for." }
    ],
    references: REF_NPC,
    examQuestions: [
      "How does the newborn acquire infection? Describe the routes.",
      "Differentiate early-onset from late-onset neonatal sepsis.",
      "List the signs of neonatal sepsis and explain why they are described as non-specific.",
      "Outline the investigation and management of neonatal sepsis.",
      "Discuss the prevention of neonatal infection and the midwife's role in detection and referral."
    ],
    assessment: [
      { type: "mcq", q: "The single most effective measure to prevent neonatal infection is:", options: ["Antibiotics for every baby", "Strict hand hygiene", "Bathing the baby often", "Isolation of all babies"], answer: 1, rationale: "Hand hygiene is the single most effective way to prevent the spread of neonatal infection." },
      { type: "mcq", q: "Early-onset neonatal sepsis occurs within the first:", options: ["72 hours", "7 days", "14 days", "28 days"], answer: 0, rationale: "Early-onset sepsis presents within the first 72 hours and is usually acquired around birth." },
      { type: "mcq", q: "A common organism causing early-onset sepsis acquired from the birth canal is:", options: ["Group B streptococcus", "Rhinovirus", "Malaria parasite", "Head lice"], answer: 0, rationale: "Group B streptococcus (and E. coli) are common causes of early-onset sepsis." },
      { type: "mcq", q: "Signs of neonatal sepsis are described as 'non-specific' because they:", options: ["Are always dramatic", "Overlap with many other conditions and can be subtle", "Only occur in the eyes", "Never appear"], answer: 1, rationale: "Sepsis signs (poor feeding, lethargy, temperature change) are subtle and overlap with other illness." },
      { type: "mcq", q: "The gold-standard investigation for neonatal sepsis is:", options: ["Blood glucose", "Blood culture", "Weighing", "Skin swab only"], answer: 1, rationale: "Blood culture confirms bloodstream infection and identifies the organism." },
      { type: "mcq", q: "The 'TORCH' group refers to infections acquired:", options: ["After discharge only", "Before birth, across the placenta", "From bathing", "From immunisation"], answer: 1, rationale: "TORCH infections (toxoplasmosis, rubella, CMV, herpes and others) cross the placenta before birth." },
      { type: "mcq", q: "Temperature instability in sepsis means the baby may have:", options: ["Only high fever", "Either fever or a low temperature", "Only a low temperature", "A normal temperature always"], answer: 1, rationale: "Newborns with sepsis may be febrile OR hypothermic — both indicate instability." },
      { type: "mcq", q: "The main treatment of suspected neonatal sepsis is:", options: ["Oral vitamins", "Prompt intravenous antibiotics after cultures", "Phototherapy", "Cooling"], answer: 1, rationale: "Prompt IV antibiotics, started after cultures, are the mainstay of treatment." },
      { type: "mcq", q: "A protective factor against neonatal infection is:", options: ["Delayed feeding", "Early exclusive breastfeeding", "Frequent bottle feeds", "Cold environment"], answer: 1, rationale: "Breast milk provides protective antibodies; early exclusive breastfeeding reduces infection." },
      { type: "mcq", q: "When sepsis is suspected, the midwife should:", options: ["Wait until the baby looks very sick", "Refer promptly and keep the baby warm and stable", "Discharge with reassurance", "Stop feeds and observe for a week"], answer: 1, rationale: "Suspected sepsis is an emergency; prompt referral and stabilisation save lives." }
      , { type: "fill", q: "Neonatal infection that has spread to the bloodstream and body is called ____.", accept: ["sepsis"], rationale: "Sepsis is a bloodstream/systemic infection in the newborn." },
      { type: "fill", q: "The single most effective way to prevent the spread of neonatal infection is ____ hygiene.", accept: ["hand"], rationale: "Hand hygiene is the most effective infection-prevention measure." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "npc-11-fgr-sga",
    unit: "Unit 4 · Growth, Prematurity & Infection",
    title: "Fetal Growth Restriction / Small-for-Gestational-Age",
    readMinutes: 17,
    summary: "The meaning of fetal growth restriction (FGR) and small-for-gestational-age (SGA), the difference between them and from prematurity, symmetrical vs asymmetrical growth, causes, the problems these babies face, and their midwifery care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key definitions", list: [
        "Small for gestational age (SGA) — a birth weight below the 10th centile for gestational age. It is a size label; some SGA babies are simply small and healthy ('constitutionally small').",
        "Fetal growth restriction (FGR) / IUGR — the fetus has failed to reach its genetic growth potential because of a pathological process. Not all SGA babies are growth-restricted, and a growth-restricted baby may be above the 10th centile.",
        "The difference from prematurity — a preterm baby is born early but may be appropriately grown; an SGA/FGR baby is small for its age regardless of when it is born."
      ] },
      { h: "Symmetrical versus asymmetrical growth restriction", list: [
        "Symmetrical — the whole baby (head, length and weight) is proportionately small; usually from an early, long-standing cause (chromosomal problem, congenital infection, early placental problem).",
        "Asymmetrical — the abdomen/weight is reduced but the head is relatively spared ('head-sparing'); usually from a later cause such as placental insufficiency or pre-eclampsia."
      ] },
      { h: "Causes and risk factors", list: [
        "Maternal — hypertension/pre-eclampsia, poor nutrition, smoking, alcohol, chronic disease, small maternal size.",
        "Placental — placental insufficiency, infarction, abruption.",
        "Fetal — chromosomal abnormality, congenital infection, multiple pregnancy.",
        "No antenatal care, so poor growth is not detected."
      ] },
      { h: "How the baby looks", p: "The growth-restricted baby is thin with loose, dry, sometimes peeling skin, little subcutaneous fat, a scaphoid (sunken) abdomen and an alert, 'worried' look. In asymmetrical FGR the head looks relatively large for the thin body. This appearance helps distinguish an SGA/FGR baby from a preterm baby, who looks small but proportionate and immature.", figure: {
        caption: "SGA vs FGR vs preterm — how they differ.",
        svg: '<svg viewBox="0 0 560 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Difference between SGA, FGR and preterm"><rect x="20" y="15" width="520" height="140" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">SGA vs FGR vs Preterm</text><text x="40" y="70" font-family="sans-serif" font-size="11" fill="#7C2D12">SGA = weight &lt; 10th centile (a SIZE label; may be healthy)</text><text x="40" y="95" font-family="sans-serif" font-size="11" fill="#7C2D12">FGR/IUGR = failed to reach growth potential (a PROCESS)</text><text x="40" y="120" font-family="sans-serif" font-size="11" fill="#7C2D12">Preterm = born early, may be appropriately grown</text><text x="40" y="145" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Symmetrical (all small) vs Asymmetrical (head-sparing)</text></svg>'
      } },
      { h: "Problems these babies face", list: [
        "Hypoglycaemia — small glycogen and fat stores.",
        "Hypothermia — little insulating fat, large surface area.",
        "Perinatal asphyxia and meconium aspiration — poor placental reserve in labour.",
        "Polycythaemia (too many red cells) and its effects.",
        "Feeding difficulties and poor weight gain.",
        "Longer-term risk of poorer growth and developmental problems (especially symmetrical FGR)."
      ] },
      { h: "Assessment", p: "Antenatally, growth is monitored by fundal-height measurement, ultrasound growth scans and Doppler studies. After birth, the baby is weighed and measured (weight, length, head circumference) and plotted on a growth chart, examined for the causes and signs above, and screened for hypoglycaemia and, where indicated, infection and anomaly." },
      { h: "Midwifery care & referral", p: "Care focuses on the predictable risks: keep the baby warm (skin-to-skin, warm environment), feed early and frequently and monitor blood glucose, watch for infection and respiratory problems, and support breastfeeding. Anticipate a difficult transition at birth and be ready to resuscitate. Refer babies who are unwell, very small, hypoglycaemic or not feeding, and where an underlying cause needs investigation." },
      { h: "Prevention & health education", p: "Prevention lies in good antenatal care: managing maternal disease and pre-eclampsia, good nutrition, and stopping smoking and alcohol, with monitoring of growth to detect FGR early and plan timely birth. Parents are supported and taught feeding, warmth and danger signs." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define SGA and FGR/IUGR and explain the difference between them.",
      "Differentiate symmetrical from asymmetrical growth restriction.",
      "How does a growth-restricted baby differ in appearance from a preterm baby?",
      "List the problems faced by small-for-gestational-age babies and explain each.",
      "Describe the midwifery care of the small-for-gestational-age / growth-restricted baby."
    ],
    assessment: [
      { type: "mcq", q: "Small for gestational age (SGA) is defined as a birth weight below the:", options: ["50th centile", "25th centile", "10th centile", "3rd centile"], answer: 2, rationale: "SGA is a birth weight below the 10th centile for gestational age." },
      { type: "mcq", q: "Fetal growth restriction (FGR) means the fetus has:", options: ["Grown too fast", "Failed to reach its genetic growth potential", "A normal size", "An early birth only"], answer: 1, rationale: "FGR/IUGR is failure to reach the genetic growth potential due to a pathological process." },
      { type: "mcq", q: "In asymmetrical growth restriction, the part relatively spared is the:", options: ["Abdomen", "Head", "Legs", "Weight"], answer: 1, rationale: "Asymmetrical FGR is 'head-sparing' — the head is relatively preserved while weight/abdomen fall." },
      { type: "mcq", q: "Symmetrical growth restriction is usually caused by:", options: ["A late placental problem", "An early, long-standing cause such as infection or chromosomal problem", "Post-term birth", "Overfeeding"], answer: 1, rationale: "Symmetrical FGR follows an early, prolonged insult affecting the whole baby proportionately." },
      { type: "mcq", q: "A major early problem for the SGA baby is:", options: ["Hyperglycaemia", "Hypoglycaemia", "Obesity", "High temperature"], answer: 1, rationale: "Small glycogen and fat stores make hypoglycaemia a key risk for SGA babies." },
      { type: "mcq", q: "Which best distinguishes an SGA/FGR baby from a preterm baby?", options: ["The SGA baby looks small but is thin/wasted; the preterm looks small and immature/proportionate", "They look identical", "The SGA baby is always heavier", "The preterm baby is always thinner"], answer: 0, rationale: "An FGR baby is wasted with loose skin; a preterm baby is small but proportionate and immature." },
      { type: "mcq", q: "A maternal cause of fetal growth restriction is:", options: ["Pre-eclampsia", "Good nutrition", "Regular exercise", "Rest"], answer: 0, rationale: "Pre-eclampsia reduces placental blood flow, a common cause of FGR." },
      { type: "mcq", q: "SGA babies are prone to hypothermia because they have:", options: ["Extra insulating fat", "Little insulating fat and a large surface area", "A small surface area", "Slow metabolism"], answer: 1, rationale: "Little subcutaneous fat and a large surface-to-volume ratio cause rapid heat loss." },
      { type: "mcq", q: "Antenatally, fetal growth is monitored mainly by:", options: ["Blood glucose", "Fundal height and ultrasound growth scans", "Skin colour", "Apgar score"], answer: 1, rationale: "Fundal-height measurement and ultrasound growth/Doppler scans monitor fetal growth." },
      { type: "mcq", q: "A key midwifery priority for the SGA baby at birth is to:", options: ["Cool the baby", "Keep warm, feed early and monitor blood glucose", "Delay feeding", "Bathe immediately"], answer: 1, rationale: "Warmth, early feeding and glucose monitoring address the SGA baby's main risks." }
      , { type: "fill", q: "A birth weight below the 10th centile for gestational age is termed ____ for gestational age.", accept: ["small", "SGA"], rationale: "Weight below the 10th centile defines small for gestational age (SGA)." },
      { type: "fill", q: "Growth restriction in which the head is relatively spared is called ____ growth restriction.", accept: ["asymmetrical", "asymmetric"], rationale: "Asymmetrical (head-sparing) FGR usually follows a later cause such as placental insufficiency." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "npc-12-low-birth-weight",
    unit: "Unit 4 · Growth, Prematurity & Infection",
    title: "Low Birth Weight Babies",
    readMinutes: 16,
    summary: "The definition and classification of low birth weight (LBW), the two overlapping causes (prematurity and growth restriction), the associated morbidity and mortality, the problems LBW babies face, indications for hospitalisation, and their midwifery care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is low birth weight?", p: "Low birth weight (LBW) is a birth weight of less than 2500 g, regardless of gestational age. It is a simple but powerful predictor of newborn survival: the lower the weight, the higher the risk. LBW is very common in low-resource settings and is a leading factor in newborn illness and death." },
      { h: "Classification by weight", list: [
        "Low birth weight (LBW) — less than 2500 g.",
        "Very low birth weight (VLBW) — less than 1500 g.",
        "Extremely low birth weight (ELBW) — less than 1000 g."
      ], figure: {
        caption: "Low birth weight categories.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Low birth weight categories"><rect x="20" y="20" width="520" height="110" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Birth-weight categories</text><text x="45" y="75" font-family="sans-serif" font-size="12" fill="#7C2D12">LBW  = &lt; 2500 g</text><text x="45" y="98" font-family="sans-serif" font-size="12" fill="#7C2D12">VLBW = &lt; 1500 g</text><text x="45" y="121" font-family="sans-serif" font-size="12" fill="#7C2D12">ELBW = &lt; 1000 g</text><text x="300" y="98" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">Lower weight = higher risk</text></svg>'
      } },
      { h: "Two causes (which may overlap)", list: [
        "Preterm birth — the baby is born early, so it has had less time to grow.",
        "Growth restriction (SGA/FGR) — the baby is small for its age.",
        "A baby may be BOTH preterm AND growth-restricted, which carries the highest risk."
      ] },
      { h: "Associated morbidity and mortality", p: "LBW babies have much higher rates of illness and death than normal-weight babies. They are more likely to suffer breathing problems, infection, hypothermia, hypoglycaemia, jaundice and feeding difficulty, and are at greater risk of long-term developmental problems. Simple, low-cost care (warmth, feeding, infection prevention) dramatically improves their survival." },
      { h: "Problems associated with low birth weight", list: [
        "Hypothermia — large surface area, little fat, thin skin.",
        "Hypoglycaemia — small energy stores.",
        "Respiratory problems — especially in preterm LBW (RDS, apnoea).",
        "Infection — immature immune system.",
        "Feeding difficulty — weak suck and swallow; may need cup, spoon or tube feeding.",
        "Jaundice; and in the smallest, complications of prematurity (see preterm topic)."
      ] },
      { h: "Management principles", p: "The pillars of LBW care are warmth, feeding, infection prevention and early recognition of problems. Kangaroo mother care (continuous skin-to-skin contact with the mother, with frequent breastfeeding) is a proven, low-cost method that keeps the baby warm, supports feeding and bonding, and reduces infection. Breast milk (direct, expressed, cup or tube fed as needed) is the best feed." },
      { h: "Indications for hospitalisation / referral", list: [
        "Very low birth weight (under about 1500 g) or very preterm.",
        "Respiratory distress, apnoea or cyanosis.",
        "Poor feeding, unable to feed, or persistent hypoglycaemia.",
        "Signs of infection or temperature that cannot be maintained.",
        "Jaundice needing treatment, seizures, or any danger sign."
      ] },
      { h: "Midwifery care & health education", p: "The midwife weighs and classifies the baby, keeps it warm (skin-to-skin/kangaroo care), supports and protects breastfeeding (helping with expressing and cup feeding if the suck is weak), prevents infection with strict hygiene, monitors temperature, glucose, feeding and breathing, and refers when hospitalisation is indicated. Parents are taught kangaroo care, feeding, hygiene, keeping the baby warm at home, and the danger signs that mean 'return at once'." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define low birth weight and classify LBW by weight.",
      "Explain the two overlapping causes of low birth weight.",
      "Describe the problems associated with low birth weight babies.",
      "List the indications for hospitalisation of a low birth weight baby.",
      "Discuss the midwifery care of the low birth weight baby, including kangaroo mother care."
    ],
    assessment: [
      { type: "mcq", q: "Low birth weight is defined as a birth weight less than:", options: ["1500 g", "2000 g", "2500 g", "3000 g"], answer: 2, rationale: "Low birth weight is a birth weight under 2500 g, regardless of gestation." },
      { type: "mcq", q: "Very low birth weight (VLBW) is a birth weight less than:", options: ["2500 g", "2000 g", "1500 g", "1000 g"], answer: 2, rationale: "VLBW is a birth weight under 1500 g." },
      { type: "mcq", q: "Extremely low birth weight (ELBW) is a birth weight less than:", options: ["2000 g", "1500 g", "1000 g", "500 g"], answer: 2, rationale: "ELBW is a birth weight under 1000 g." },
      { type: "mcq", q: "The two main overlapping causes of low birth weight are:", options: ["Prematurity and growth restriction", "Jaundice and infection", "Cold and heat", "Diabetes and anaemia"], answer: 0, rationale: "LBW results from being born early (preterm) and/or being small for age (growth restriction)." },
      { type: "mcq", q: "A proven low-cost method of keeping an LBW baby warm and supporting feeding is:", options: ["Kangaroo mother care", "Cool bathing", "Formula only", "Isolation"], answer: 0, rationale: "Kangaroo mother care (continuous skin-to-skin) keeps the baby warm and supports breastfeeding." },
      { type: "mcq", q: "LBW babies lose heat easily because they have:", options: ["Thick fat and small surface area", "Little fat, thin skin and a large surface area", "Slow metabolism", "Extra brown fat"], answer: 1, rationale: "Little insulating fat, thin skin and a large surface-to-volume ratio cause rapid heat loss." },
      { type: "mcq", q: "The best feed for a low birth weight baby is:", options: ["Cow's milk", "Sugar water", "Breast milk (direct or expressed)", "Diluted formula"], answer: 2, rationale: "Breast milk, given directly or expressed by cup/spoon/tube, is the best feed." },
      { type: "mcq", q: "An indication for hospitalising an LBW baby is:", options: ["A weight of 2400 g and feeding well", "Respiratory distress or inability to feed", "Being pink and active", "Passing urine normally"], answer: 1, rationale: "Respiratory distress, poor feeding, infection or very low weight indicate hospitalisation." },
      { type: "mcq", q: "The four pillars of low birth weight care are warmth, feeding, infection prevention and:", options: ["Early recognition of problems", "Bathing", "Cooling", "Isolation from mother"], answer: 0, rationale: "Warmth, feeding, infection prevention and early recognition/referral are the pillars of LBW care." },
      { type: "mcq", q: "The baby at HIGHEST risk is one who is:", options: ["Term and normal weight", "Both preterm and growth-restricted", "Post-term and large", "Term and large"], answer: 1, rationale: "A baby who is both preterm and growth-restricted carries the highest risk." }
      , { type: "fill", q: "Low birth weight is a birth weight of less than ____ grams.", accept: ["2500", "2500g", "2.5 kg"], rationale: "LBW is a birth weight below 2500 g regardless of gestation." },
      { type: "fill", q: "Continuous skin-to-skin contact with the mother to keep an LBW baby warm is called ____ mother care.", accept: ["kangaroo"], rationale: "Kangaroo mother care uses skin-to-skin contact plus frequent breastfeeding." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "npc-13-preterm-complications",
    unit: "Unit 4 · Growth, Prematurity & Infection",
    title: "Preterm Babies & Their Complications",
    readMinutes: 18,
    summary: "The definition and features of the preterm baby, who is at risk, and the major complications of prematurity — RDS, PDA, intraventricular haemorrhage, necrotizing enterocolitis, retinopathy of prematurity, apnoea and anaemia — with the midwife's role and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a preterm baby?", p: "A preterm baby is one born before 37 completed weeks of gestation. The earlier the birth, the more immature the organs and the greater the risk of complications. Prematurity is a leading cause of newborn death, but many preterm babies survive well with good supportive care." },
      { h: "Who is at risk of preterm birth", list: [
        "Previous preterm birth.",
        "Multiple pregnancy (twins, triplets).",
        "Infection (for example urinary or genital tract), and prolonged rupture of membranes.",
        "Pre-eclampsia and other maternal illness.",
        "Cervical weakness, uterine or placental problems (praevia, abruption).",
        "Poor nutrition, smoking, young or short-interval pregnancies, no antenatal care."
      ] },
      { h: "Features of the preterm baby", list: [
        "Small size and low weight; head large in proportion to body.",
        "Thin, red, shiny skin with visible veins and little subcutaneous fat.",
        "Abundant lanugo (fine hair); few sole creases; soft ears.",
        "Poor muscle tone (lies with limbs extended), weak cry and reflexes.",
        "Immature genitalia; breast tissue not developed.",
        "Weak suck and swallow; poor temperature control."
      ] },
      { h: "Major complications of prematurity", list: [
        "Respiratory distress syndrome (RDS) — surfactant deficiency (see respiratory topic).",
        "Apnoea of prematurity — pauses in breathing from an immature breathing centre.",
        "Patent ductus arteriosus (PDA) — the ductus fails to close, straining the heart and lungs.",
        "Intraventricular haemorrhage (IVH) — bleeding into the fragile brain ventricles.",
        "Necrotizing enterocolitis (NEC) — serious bowel inflammation, more likely with formula feeding.",
        "Retinopathy of prematurity (ROP) — abnormal eye-vessel growth (linked to high oxygen), can cause blindness.",
        "Anaemia of prematurity, jaundice, hypothermia, hypoglycaemia and infection."
      ], figure: {
        caption: "Major complications of prematurity by system.",
        svg: '<svg viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Complications of prematurity by system"><rect x="20" y="15" width="520" height="150" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Complications of prematurity</text><text x="40" y="68" font-family="sans-serif" font-size="11" fill="#7C2D12">Lungs: RDS, apnoea</text><text x="40" y="90" font-family="sans-serif" font-size="11" fill="#7C2D12">Heart: patent ductus arteriosus (PDA)</text><text x="40" y="112" font-family="sans-serif" font-size="11" fill="#7C2D12">Brain: intraventricular haemorrhage (IVH)</text><text x="40" y="134" font-family="sans-serif" font-size="11" fill="#7C2D12">Gut: necrotizing enterocolitis (NEC)</text><text x="40" y="156" font-family="sans-serif" font-size="11" fill="#7C2D12">Eye: retinopathy of prematurity (ROP); Blood: anaemia</text></svg>'
      } },
      { h: "Why oxygen must be used carefully", p: "Preterm babies need oxygen when hypoxic, but too much oxygen is harmful — it increases the risk of retinopathy of prematurity (which can cause blindness) and lung injury. Oxygen is therefore given only as needed and, where possible, guided by pulse oximetry to keep saturations in the target range, not higher." },
      { h: "Management principles", p: "Preterm care is supportive: maintain warmth (incubator or kangaroo care), give respiratory support (oxygen/CPAP/ventilation) as needed, feed with breast milk (tube/cup if suck is weak) and advance feeds cautiously to reduce NEC risk, prevent infection with strict hygiene, monitor closely, and treat complications. Antenatal steroids given to the mother before preterm birth reduce RDS, IVH and NEC." },
      { h: "Midwifery role, prevention & family support", p: "The midwife identifies women at risk of preterm labour and refers for antenatal steroids and birth in a unit with newborn care where possible. At birth she is ready to resuscitate, keeps the baby warm, supports breastfeeding and expressing, prevents infection, monitors for complications and refers/keeps the baby in specialist care as needed. She supports parents through a frightening time, encourages kangaroo care and involvement, and prepares them for follow-up (including eye screening for ROP)." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Define a preterm baby and describe the physical features of prematurity.",
      "Who is at risk of preterm birth?",
      "Describe the major complications of prematurity.",
      "Why must oxygen be used carefully in preterm babies?",
      "Discuss the midwifery care and family support for the preterm baby."
    ],
    assessment: [
      { type: "mcq", q: "A preterm baby is one born before ____ completed weeks of gestation.", options: ["34", "37", "40", "42"], answer: 1, rationale: "Preterm birth is before 37 completed weeks of gestation." },
      { type: "mcq", q: "'NEC' in the preterm baby stands for:", options: ["Neonatal eye condition", "Necrotizing enterocolitis", "New enteral care", "Neonatal ear condition"], answer: 1, rationale: "NEC = necrotizing enterocolitis, a serious inflammatory bowel disease of preterm babies." },
      { type: "mcq", q: "Bleeding into the fragile ventricles of the preterm brain is called:", options: ["Retinopathy of prematurity", "Intraventricular haemorrhage", "Necrotizing enterocolitis", "Patent ductus arteriosus"], answer: 1, rationale: "Intraventricular haemorrhage (IVH) is bleeding into the brain's ventricles in preterm babies." },
      { type: "mcq", q: "Too much oxygen in a preterm baby increases the risk of:", options: ["Retinopathy of prematurity (and can cause blindness)", "Better vision", "Faster growth", "Jaundice only"], answer: 0, rationale: "Excess oxygen contributes to retinopathy of prematurity and lung injury, so oxygen is used carefully." },
      { type: "mcq", q: "A physical feature of a preterm baby is:", options: ["Thick fat and deep sole creases", "Thin shiny red skin with abundant lanugo", "Firm ear cartilage", "Strong suck"], answer: 1, rationale: "Preterm babies have thin, shiny, red skin, abundant lanugo, few sole creases and poor tone." },
      { type: "mcq", q: "Pauses in breathing from an immature breathing centre in a preterm baby are called:", options: ["Grunting", "Apnoea of prematurity", "Hiccups", "Sneezing"], answer: 1, rationale: "Apnoea of prematurity is due to the immature respiratory control centre." },
      { type: "mcq", q: "The feed that reduces the risk of necrotizing enterocolitis is:", options: ["Formula milk", "Breast milk", "Cow's milk", "Sugar water"], answer: 1, rationale: "Breast milk protects the preterm gut and reduces NEC risk compared with formula." },
      { type: "mcq", q: "Giving the mother antenatal corticosteroids before preterm birth reduces:", options: ["RDS, IVH and NEC", "Birth weight", "Head size", "Length"], answer: 0, rationale: "Antenatal steroids mature the lungs and reduce RDS, IVH and NEC." },
      { type: "mcq", q: "A risk factor for preterm birth is:", options: ["Multiple pregnancy", "Good antenatal care", "Adequate rest", "Balanced nutrition"], answer: 0, rationale: "Multiple pregnancy (and infection, pre-eclampsia, previous preterm birth) increases preterm-birth risk." },
      { type: "mcq", q: "The midwife's role for a preterm baby at birth includes being ready to:", options: ["Resuscitate and keep the baby warm", "Bathe the baby immediately", "Delay all care", "Cool the baby"], answer: 0, rationale: "Readiness to resuscitate, warmth, feeding support and infection prevention are core midwifery roles." }
      , { type: "fill", q: "Abnormal growth of eye blood vessels in a preterm baby, linked to high oxygen, is called ____ of prematurity.", accept: ["retinopathy"], rationale: "Retinopathy of prematurity (ROP) can cause blindness and is linked to excess oxygen." },
      { type: "fill", q: "In a preterm baby the ductus arteriosus may fail to close, remaining ____.", accept: ["patent", "open"], rationale: "A patent (open) ductus arteriosus is common in preterm babies." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "npc-14-thermoregulation",
    unit: "Unit 5 · Thermal Care, Anomalies & Safe Transport",
    title: "Thermoregulation, Cold Stress, Hypothermia & Kangaroo Mother Care",
    readMinutes: 17,
    summary: "Normal newborn temperature and why babies lose heat easily, the four routes of heat loss, cold stress and hypothermia, prevention (the warm chain), rewarming, and kangaroo mother care, with the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Normal temperature and why it matters", p: "The normal axillary temperature of a newborn is 36.5-37.5 C. Newborns cannot control their temperature well and lose heat rapidly. Keeping a baby warm is not a comfort measure alone — cold stress increases oxygen and glucose use and can cause hypoglycaemia, worsen breathing, impair transition and, if severe, cause death. Warmth is a core, life-saving part of newborn care." },
      { h: "Why newborns lose heat easily", list: [
        "Large body surface area relative to weight.",
        "Little insulating subcutaneous fat (especially preterm/SGA).",
        "Thin skin and blood vessels close to the surface.",
        "Wet at birth; cannot shiver; limited ability to move to warmth."
      ] },
      { h: "The four routes of heat loss", list: [
        "Evaporation — from a wet body/wet linen (for example not drying at birth).",
        "Conduction — to a cold surface the baby lies on (cold scales, cold table).",
        "Convection — to cool moving air (draughts, fans, open windows).",
        "Radiation — to nearby cold surfaces (cold walls or windows) without touching them."
      ], figure: {
        caption: "The four routes of newborn heat loss.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four routes of newborn heat loss"><rect x="20" y="20" width="520" height="120" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">How the newborn loses heat</text><text x="45" y="75" font-family="sans-serif" font-size="12" fill="#7C2D12">Evaporation - wet skin/linen</text><text x="300" y="75" font-family="sans-serif" font-size="12" fill="#7C2D12">Conduction - cold surface</text><text x="45" y="105" font-family="sans-serif" font-size="12" fill="#7C2D12">Convection - cool draughts</text><text x="300" y="105" font-family="sans-serif" font-size="12" fill="#7C2D12">Radiation - cold walls/windows</text></svg>'
      } },
      { h: "Cold stress and hypothermia", p: "Cold stress is the body's response to cooling before the temperature falls; the baby uses extra energy to stay warm. Hypothermia is a temperature below 36.5 C: mild (36.0-36.4 C), moderate (32.0-35.9 C) and severe (below 32 C). Signs include cool skin, lethargy, poor feeding, weak cry, and in severe cases hardened skin (sclerema), slow breathing and heart rate." },
      { h: "Preventing heat loss — the warm chain", list: [
        "Warm birth room; dry the baby immediately and remove wet linen.",
        "Skin-to-skin contact with the mother straight after birth; cover both; cover the baby's head.",
        "Delay bathing (bath only when temperature is stable and the baby is well).",
        "Keep mother and baby together; feed early and frequently.",
        "Use warm hands, warm surfaces and equipment; avoid draughts.",
        "Keep the baby warm during any transport or referral."
      ] },
      { h: "Rewarming a cold baby", p: "A hypothermic baby is rewarmed gradually. Skin-to-skin (kangaroo) contact is ideal for mild hypothermia; a warm room, warm covers, a radiant warmer or incubator are used for lower temperatures. Check and support blood glucose (cold babies become hypoglycaemic), watch breathing, and refer moderate/severe hypothermia or any unwell baby." },
      { h: "Kangaroo mother care (KMC)", p: "Kangaroo mother care is continuous skin-to-skin contact between the baby (dressed only in a nappy and cap) and the mother's (or another carer's) bare chest, with frequent breastfeeding. It keeps the baby warm, stabilises breathing and heart rate, supports feeding and weight gain, reduces infection, promotes bonding, and is especially valuable for low birth weight and preterm babies. It is a proven, low-cost life-saver." },
      { h: "Midwifery role & health education", p: "The midwife measures temperature (not just feels it), practises the warm chain at every birth, promotes skin-to-skin and KMC, prevents the four routes of heat loss, rewarms cold babies and monitors glucose, and refers moderate/severe hypothermia. Parents are taught how to keep the baby warm at home, that a cold or hot baby is a danger sign, and how to give kangaroo care." }
    ],
    references: REF_NPC,
    examQuestions: [
      "State the normal newborn temperature and explain why keeping a baby warm is life-saving.",
      "Describe the four routes of heat loss in the newborn with an example of each.",
      "Define cold stress and hypothermia and describe the signs of hypothermia.",
      "Describe the 'warm chain' used to prevent heat loss.",
      "What is kangaroo mother care and what are its benefits?"
    ],
    assessment: [
      { type: "mcq", q: "The normal axillary temperature of a newborn is:", options: ["35.0-36.0 C", "36.5-37.5 C", "37.5-38.5 C", "38.0-39.0 C"], answer: 1, rationale: "Normal newborn axillary temperature is 36.5-37.5 C." },
      { type: "mcq", q: "Heat loss from a wet body or wet linen is by:", options: ["Conduction", "Convection", "Evaporation", "Radiation"], answer: 2, rationale: "Evaporation is heat loss from moisture on a wet body or linen." },
      { type: "mcq", q: "Heat loss to a cold surface the baby lies on is by:", options: ["Conduction", "Convection", "Evaporation", "Radiation"], answer: 0, rationale: "Conduction is direct heat loss to a cold surface in contact with the baby." },
      { type: "mcq", q: "Hypothermia in a newborn is a temperature below:", options: ["37.5 C", "37.0 C", "36.5 C", "35.0 C"], answer: 2, rationale: "Hypothermia is an axillary temperature below 36.5 C." },
      { type: "mcq", q: "A cold-stressed newborn is at particular risk of developing:", options: ["Hyperglycaemia", "Hypoglycaemia", "Obesity", "High blood pressure"], answer: 1, rationale: "Cold stress increases glucose use, causing hypoglycaemia." },
      { type: "mcq", q: "Heat loss to cool moving air (draughts) is by:", options: ["Radiation", "Convection", "Conduction", "Evaporation"], answer: 1, rationale: "Convection is heat loss to cool moving air such as draughts or fans." },
      { type: "mcq", q: "The single best way to keep a healthy newborn warm right after birth is:", options: ["Immediate bathing", "Skin-to-skin contact with the mother", "Placing near a window", "A cool room"], answer: 1, rationale: "Skin-to-skin contact after drying is the best way to keep the baby warm." },
      { type: "mcq", q: "Kangaroo mother care involves:", options: ["Continuous skin-to-skin contact with frequent breastfeeding", "Keeping the baby in a cot away from mother", "Bottle feeding only", "Cool bathing"], answer: 0, rationale: "KMC is continuous skin-to-skin contact plus frequent breastfeeding." },
      { type: "mcq", q: "Which is part of the 'warm chain'?", options: ["Bathing the baby immediately", "Drying the baby at once and delaying the bath", "Keeping the room cold", "Separating mother and baby"], answer: 1, rationale: "Drying at birth and delaying the bath are key steps of the warm chain." },
      { type: "mcq", q: "A hypothermic baby should be rewarmed:", options: ["Rapidly with very hot water", "Gradually, e.g. by skin-to-skin or a warmer, with glucose support", "By placing in a cold room", "With ice packs"], answer: 1, rationale: "Gradual rewarming (skin-to-skin/warmer) with glucose monitoring is correct; rapid heating is harmful." }
      , { type: "fill", q: "The normal axillary temperature of a newborn is 36.5 to ____ C.", accept: ["37.5", "37.5 C"], rationale: "Normal newborn axillary temperature is 36.5-37.5 C." },
      { type: "fill", q: "Continuous skin-to-skin contact with the mother plus frequent breastfeeding is called ____ mother care.", accept: ["kangaroo"], rationale: "Kangaroo mother care keeps the baby warm and supports feeding and bonding." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "npc-15-anomalies-birth-injuries",
    unit: "Unit 5 · Thermal Care, Anomalies & Safe Transport",
    title: "Congenital Anomalies & Birth Injuries",
    readMinutes: 18,
    summary: "Common congenital anomalies the midwife must recognise (cleft lip/palate, neural tube defects, developmental dysplasia of the hip, imperforate anus, gut-wall defects, Down syndrome) and birth injuries (caput, cephalhaematoma, fractures, nerve palsies), with recognition, immediate care and referral.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Congenital anomalies overview", p: "A congenital anomaly is a structural or functional abnormality present at birth. Some are obvious at birth; others are found on careful examination or later. The midwife's tasks are to recognise the anomaly, give safe immediate care, refer for specialist assessment, and support the family sensitively. Many anomalies can be corrected or managed with good outcomes." },
      { h: "Common structural anomalies to recognise", list: [
        "Cleft lip and/or palate — feeding difficulty; feed upright, may need special teats; refer for surgery.",
        "Neural tube defects (spina bifida, meningomyelocele) — spinal swelling; cover the lesion with a sterile, moist dressing, prevent injury and infection, refer urgently; folic acid before/early pregnancy prevents these.",
        "Developmental dysplasia of the hip (DDH) — detected by hip examination; refer for ultrasound and treatment.",
        "Talipes (club foot) — abnormal foot position; refer for early treatment.",
        "Imperforate anus — no anal opening / no meconium passed; a surgical emergency; refer.",
        "Exomphalos / gastroschisis — gut protruding through the abdominal wall; cover with sterile warm cling film/dressing, keep warm and hydrated, refer urgently.",
        "Oesophageal atresia — drooling, choking with feeds; do NOT feed, refer.",
        "Down syndrome — recognised by facial and other features; needs gentle counselling and screening for associated problems (for example heart defects)."
      ], figure: {
        caption: "Recognise, protect, refer for congenital anomalies.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Recognise, protect, refer pathway for anomalies"><defs><marker id="npcA15" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="50" width="150" height="55" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="95" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">RECOGNISE</text><text x="95" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">on examination</text><rect x="205" y="50" width="150" height="55" rx="10" fill="#F472B6" stroke="#831843" stroke-width="2"/><text x="280" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">PROTECT</text><text x="280" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">cover/warm/no feed</text><rect x="390" y="50" width="150" height="55" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="465" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">REFER</text><text x="465" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">+ support family</text><line x1="170" y1="77" x2="201" y2="77" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA15)"/><line x1="355" y1="77" x2="386" y2="77" stroke="#831843" stroke-width="2.5" marker-end="url(#npcA15)"/></svg>'
      } },
      { h: "Immediate midwifery care of anomalies", list: [
        "Keep the baby warm and stable; support breathing and glucose.",
        "For open lesions (neural tube, gut defects) — cover with sterile, moist/warm dressing; handle gently; prevent infection and heat/fluid loss.",
        "For feeding-related anomalies (cleft, oesophageal atresia) — position safely, avoid aspiration; withhold oral feeds where indicated.",
        "Do not delay referral for surgical emergencies (imperforate anus, gut defects, oesophageal atresia)."
      ] },
      { h: "Birth injuries overview", p: "A birth injury is damage to the baby occurring during labour and birth, more common after difficult, instrumental or breech births, large babies and shoulder dystocia. Most are mild and resolve, but some need referral." },
      { h: "Common birth injuries", list: [
        "Caput succedaneum — soft scalp swelling from pressure; crosses suture lines; resolves in days.",
        "Cephalhaematoma — bleeding under the scalp bone covering; does NOT cross suture lines; resolves over weeks; watch for jaundice.",
        "Fractured clavicle — from shoulder dystocia; reduced arm movement; usually heals well with gentle handling.",
        "Brachial plexus injury (Erb's palsy) — arm nerve injury from shoulder dystocia; arm held limp; refer for physiotherapy.",
        "Facial nerve palsy — from pressure/forceps; usually recovers.",
        "Bruising and, rarely, intracranial bleeding — needs assessment."
      ] },
      { h: "Recognition and care of birth injuries", p: "The midwife recognises the injury on examination, distinguishes caput from cephalhaematoma, handles the baby gently (especially with fractures/nerve injuries), watches cephalhaematoma babies for jaundice, refers nerve injuries and fractures for follow-up, and reassures parents about the likely course." },
      { h: "Prevention & family support", p: "Prevention lies in good intrapartum care: skilled management of labour, instrumental birth and shoulder dystocia, and folic acid to prevent neural tube defects. When an anomaly or injury is found, the midwife breaks the news gently, honestly and without blame, allows parents to see and hold their baby, supports bonding and breastfeeding, and links them with specialist care and, where needed, genetic counselling. Sensitivity protects the parents' mental health." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Name common congenital anomalies the midwife should recognise and describe the immediate care of two of them.",
      "Describe the emergency care of a baby with a neural tube defect or an abdominal wall defect.",
      "Differentiate caput succedaneum from cephalhaematoma.",
      "Describe common birth injuries and their midwifery care.",
      "How should a midwife support parents when a congenital anomaly is discovered?"
    ],
    assessment: [
      { type: "mcq", q: "Caput succedaneum differs from cephalhaematoma in that caput:", options: ["Crosses suture lines and resolves in days", "Does not cross suture lines", "Takes weeks to resolve", "Is bleeding under bone"], answer: 0, rationale: "Caput is soft oedema that crosses sutures and resolves quickly; cephalhaematoma does not cross sutures." },
      { type: "mcq", q: "A cephalhaematoma is important to watch because it can lead to:", options: ["Hypoglycaemia", "Fracture", "Jaundice", "Cold stress"], answer: 2, rationale: "Reabsorption of blood from a cephalhaematoma can worsen jaundice." },
      { type: "mcq", q: "The immediate care of a baby with an open neural tube defect is to:", options: ["Feed immediately", "Bathe the baby", "Leave the lesion open", "Cover the lesion with a sterile moist dressing and refer urgently"], answer: 3, rationale: "The lesion is covered with a sterile, moist dressing to prevent infection and drying; refer urgently." },
      { type: "mcq", q: "Folic acid taken before and in early pregnancy helps prevent:", options: ["Cleft lip", "Neural tube defects", "Club foot", "Down syndrome"], answer: 1, rationale: "Peri-conceptional folic acid reduces the risk of neural tube defects." },
      { type: "mcq", q: "Imperforate anus is a:", options: ["Surgical emergency requiring referral", "Minor issue needing no action", "Cause of jaundice", "Normal variant"], answer: 0, rationale: "Imperforate anus (no anal opening / no meconium) is a surgical emergency." },
      { type: "mcq", q: "Erb's palsy (brachial plexus injury) usually results from:", options: ["Phototherapy", "Cold stress", "Shoulder dystocia at birth", "Infection"], answer: 2, rationale: "Erb's palsy follows stretching of the brachial plexus, classically with shoulder dystocia." },
      { type: "mcq", q: "For a baby with gastroschisis (gut protruding through the abdominal wall), the midwife should:", options: ["Push the gut back and feed", "Cover with sterile warm cling film/dressing, keep warm and refer urgently", "Bathe the baby", "Leave exposed"], answer: 1, rationale: "The exposed gut is covered to prevent heat/fluid loss and infection; refer urgently for surgery." },
      { type: "mcq", q: "A baby with oesophageal atresia typically shows:", options: ["Good feeding", "Jaundice only", "Drooling and choking with feeds", "Fast growth"], answer: 2, rationale: "Oesophageal atresia causes drooling and choking; the baby should not be fed and must be referred." },
      { type: "mcq", q: "A fractured clavicle from birth is usually managed by:", options: ["Gentle handling; it usually heals well", "Immediate surgery", "Phototherapy", "Cooling"], answer: 0, rationale: "A fractured clavicle usually heals well with gentle handling and analgesia if needed." },
      { type: "mcq", q: "When telling parents about a congenital anomaly, the midwife should:", options: ["Blame the parents", "Hide the baby", "Break the news gently and honestly and support bonding", "Refuse to discuss it"], answer: 2, rationale: "Sensitive, honest communication and support for bonding protect the family's wellbeing." }
      , { type: "fill", q: "A scalp swelling that does NOT cross suture lines and is bleeding under the bone covering is a ____.", accept: ["cephalhaematoma", "cephalohaematoma"], rationale: "A cephalhaematoma is subperiosteal bleeding that does not cross sutures." },
      { type: "fill", q: "Peri-conceptional ____ acid reduces the risk of neural tube defects.", accept: ["folic"], rationale: "Folic acid before and in early pregnancy helps prevent neural tube defects." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "npc-16-transport-feeding-bereavement",
    unit: "Unit 5 · Thermal Care, Anomalies & Safe Transport",
    title: "Care & Safe Transport of the Sick Newborn, Feeding, Bereavement & Ethics",
    readMinutes: 18,
    summary: "Stabilising and safely transporting the sick newborn (STABLE principles), feeding the at-risk baby (breastfeeding support, expressing, cup and tube feeding), neonatal loss and bereavement care, and ethics and referral in newborn care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Stabilise before transport", p: "A sick newborn must be stabilised before and kept stable during transfer — 'stabilise, then transport'. A useful memory aid is STABLE: Sugar (blood glucose), Temperature (keep warm), Airway (clear and supported), Blood pressure/circulation, Lab work/monitoring, and Emotional support for the family. A pre-transfer check prevents the baby deteriorating on the way." },
      { h: "Principles of safe transport", list: [
        "Keep the baby WARM throughout (skin-to-skin/kangaroo transport, warm wraps, transport incubator if available) — but never cover the face.",
        "Maintain a clear airway and give oxygen if hypoxic; watch breathing and colour.",
        "Support blood glucose; secure any IV line; do not feed if unstable or if a surgical problem is suspected.",
        "Monitor throughout; carry equipment to resuscitate.",
        "Communicate with the receiving unit before and on arrival; send a clear referral note and the mother/family with the baby where possible.",
        "Involve and inform the parents; consent and support."
      ], figure: {
        caption: "STABLE aide-memoire for the sick newborn before transport.",
        svg: '<svg viewBox="0 0 560 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="STABLE principles"><rect x="20" y="15" width="520" height="160" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">STABLE before transport</text><text x="45" y="68" font-family="sans-serif" font-size="12" fill="#7C2D12">S - Sugar (blood glucose)</text><text x="45" y="90" font-family="sans-serif" font-size="12" fill="#7C2D12">T - Temperature (keep warm)</text><text x="45" y="112" font-family="sans-serif" font-size="12" fill="#7C2D12">A - Airway (clear, oxygen)</text><text x="320" y="68" font-family="sans-serif" font-size="12" fill="#7C2D12">B - Blood pressure/circulation</text><text x="320" y="90" font-family="sans-serif" font-size="12" fill="#7C2D12">L - Lab work / monitoring</text><text x="320" y="112" font-family="sans-serif" font-size="12" fill="#7C2D12">E - Emotional support</text><text x="280" y="150" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Stabilise first, then transport warm</text></svg>'
      } },
      { h: "Feeding the at-risk baby", p: "Breast milk is the best feed for the sick or small newborn — protective, digestible and free. The method depends on the baby's condition and ability to suck.", list: [
        "Direct breastfeeding — for babies who can suck and are stable; support positioning and attachment.",
        "Expressed breast milk by cup or spoon — for babies who tire easily or have a weak suck (a cleft, preterm).",
        "Nasogastric (tube) feeding with expressed milk — for babies too small or unwell to feed orally (a named practice skill).",
        "Intravenous fluids — when oral/enteral feeding is not safe (severe illness, surgical problems).",
        "Protect the milk supply — teach the mother to express regularly (about 8 times a day) to keep her supply while the baby cannot feed directly."
      ] },
      { h: "Practical feeding-related skills", p: "The midwife supports the mother to express and store breast milk safely, feeds by cup/spoon or tube as needed, checks tube position and gives feeds slowly, watches for feed intolerance (vomiting, distension — possible NEC), and progresses towards direct breastfeeding as the baby improves. Oxygen and suction may be needed and are named practical skills." },
      { h: "Neonatal loss & bereavement care", p: "Stillbirth and neonatal death are devastating. Bereavement care is a core, skilled part of midwifery.", list: [
        "Be present, honest and compassionate; use the baby's name; avoid clichés.",
        "Offer the parents the chance to see, hold and name their baby, and to create memories (photographs, hand/footprints, a lock of hair) if they wish.",
        "Respect cultural and religious wishes for the baby and for rituals.",
        "Explain what happened simply; support decisions about a post-mortem sensitively.",
        "Support the mother's physical recovery and lactation (suppression advice).",
        "Recognise grief and perinatal mental illness; offer follow-up and refer to counselling/mental-health support where needed."
      ] },
      { h: "Mental-health sensitivity & the midwife's limits", p: "Losing a baby, or caring for a very sick baby, greatly raises the risk of perinatal depression, anxiety and, rarely, severe illness. The midwife recognises warning signs (low mood, hopelessness, not coping, thoughts of self-harm), listens, supports and refers to appropriate mental-health services and safeguarding pathways where there is risk. The midwife supports and refers — she does not diagnose or treat severe mental illness alone." },
      { h: "Ethics, consent & referral", p: "Newborn care raises ethical issues — honest communication, informed consent from parents (who act in the baby's best interests), confidentiality, equitable care, and difficult decisions about very sick or very preterm babies made with the family and senior team. The midwife works within her scope, keeps accurate records, seeks consent, advocates for the baby and family, and refers promptly and clearly — knowing when a problem is beyond her scope is itself good, safe practice." },
      { h: "Midwifery role summary & health education", p: "Across all these situations the midwife stabilises and safely transports the sick baby, protects and supports breastfeeding, gives compassionate bereavement care, watches for perinatal mental illness and refers, and practises ethically within her scope. She teaches families danger signs, safe feeding and warmth, and links them to follow-up and support services." }
    ],
    references: REF_NPC,
    examQuestions: [
      "Describe the principles of stabilising and safely transporting a sick newborn (STABLE).",
      "Describe the methods of feeding the at-risk baby and how the milk supply is protected.",
      "Discuss the midwife's role in bereavement care after stillbirth or neonatal death.",
      "How does the midwife recognise and respond to perinatal mental illness within her scope?",
      "Discuss the ethical issues and the importance of consent and referral in newborn care."
    ],
    assessment: [
      { type: "mcq", q: "The correct principle for a sick newborn needing higher-level care is:", options: ["Stabilise first, then transport", "Transport first, stabilise later", "Feed a large meal then transport", "Delay transport indefinitely"], answer: 0, rationale: "The baby must be stabilised before, and kept stable during, transfer." },
      { type: "mcq", q: "In the STABLE aide-memoire, the 'T' stands for:", options: ["Transport", "Testing", "Temperature", "Time"], answer: 2, rationale: "T = Temperature — keeping the baby warm is a core pre-transport priority." },
      { type: "mcq", q: "During transport, the sick newborn should be:", options: ["Cooled", "Kept warm with the face uncovered", "Fed continuously if unstable", "Left unmonitored"], answer: 1, rationale: "The baby must be kept warm and monitored, but the face is never covered." },
      { type: "mcq", q: "The best feed for a sick or small newborn is:", options: ["Cow's milk", "Sugar water", "Breast milk", "Diluted formula"], answer: 2, rationale: "Breast milk is protective, digestible and the best feed for the at-risk baby." },
      { type: "mcq", q: "A baby too small or unwell to feed orally is best fed by:", options: ["Forcing the breast", "Bottle only", "Withholding all milk", "Nasogastric (tube) feeding with expressed breast milk"], answer: 3, rationale: "Nasogastric tube feeding with expressed breast milk is used when the baby cannot feed orally." },
      { type: "mcq", q: "To protect her milk supply while the baby cannot feed directly, the mother should:", options: ["Express regularly (about 8 times a day)", "Stop expressing", "Drink less fluid", "Wait until discharge"], answer: 0, rationale: "Regular expressing (about 8 times/day) maintains the milk supply until direct feeding resumes." },
      { type: "mcq", q: "Good bereavement care after neonatal death includes:", options: ["Avoiding the baby's name and hiding the baby", "Offering parents the chance to see, hold and name their baby and make memories", "Refusing to discuss what happened", "Rushing the parents"], answer: 1, rationale: "Compassionate care offers seeing/holding/naming the baby and creating memories, respecting parents' wishes." },
      { type: "mcq", q: "Regarding severe perinatal mental illness, the midwife's role is to:", options: ["Diagnose and treat it alone", "Ignore it", "Recognise, support and refer to mental-health services", "Tell the mother to cope"], answer: 2, rationale: "The midwife recognises, supports and refers; she does not diagnose or treat severe mental illness alone." },
      { type: "mcq", q: "Feed intolerance in a fed preterm baby (vomiting, abdominal distension) may indicate:", options: ["Normal feeding", "Good progress", "Necrotizing enterocolitis", "Cold stress"], answer: 2, rationale: "Vomiting and distension can signal NEC and must be acted on." },
      { type: "mcq", q: "A key ethical principle in newborn care is:", options: ["Withholding information from parents", "Ignoring cultural wishes", "Acting outside one's scope", "Honest communication and informed consent from parents"], answer: 3, rationale: "Honest communication, informed parental consent and working within scope are core ethical principles." }
      , { type: "fill", q: "The aide-memoire for stabilising a sick newborn before transport is ____ (Sugar, Temperature, Airway, Blood pressure, Lab work, Emotional support).", accept: ["STABLE"], rationale: "STABLE summarises the key pre-transport stabilisation priorities." },
      { type: "fill", q: "To protect an unwell baby who cannot feed directly, the mother should express breast milk about ____ times a day.", accept: ["8", "eight"], rationale: "Expressing about 8 times a day maintains the milk supply until direct feeding resumes." }
    ]
  }
];
