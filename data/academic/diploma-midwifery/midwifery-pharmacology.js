/* ============================================================
   Diploma in Midwifery (ICM standard) · DM126 Midwifery Pharmacology
   — 12 topics. Aligned to the BNMC midwifery syllabus: principles of
   pharmacology, drug forms & routes, dosage calculation & safe
   administration, drug safety in pregnancy, then the obstetric
   pharmacopeia — oxytocics, tocolytics, antihypertensives & magnesium
   sulphate, analgesia in labour, antibiotics in obstetrics, anti-D &
   vaccines, supplements, drugs & breastfeeding, and resuscitation
   drugs. Grounded in standard texts:
     • Jordan S. Pharmacology for Midwives: The Evidence Base for Safe Practice. Palgrave Macmillan.
     • Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.
     • British National Formulary (BNF). BMJ Group & Pharmaceutical Press.
   Doses are standard, widely-published values or usual ranges; the
   emphasis throughout is on safe practice in childbearing women.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_MPH = [
  "Jordan S. Pharmacology for Midwives: The Evidence Base for Safe Practice. Palgrave Macmillan.",
  "Fraser DM, Cooper MA. Myles Textbook for Midwives. Elsevier.",
  "British National Formulary (BNF). BMJ Group & Pharmaceutical Press."
];

window.Academic.topics["diploma-midwifery/midwifery-pharmacology"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "mph-01-principles",
    unit: "Unit 1 · Principles of Pharmacology",
    title: "Principles of Pharmacology: Pharmacokinetics & Pharmacodynamics in the Childbearing Woman",
    readMinutes: 17,
    summary: "What pharmacology is, key terms, the phases of drug action, ADME, and how the physiological changes of pregnancy and lactation alter the way a woman handles and responds to drugs.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is pharmacology and why it matters to the midwife", p: "Pharmacology is the study of drugs — how they are given, what they do to the body, and what the body does to them. For the midwife the goal is practical: to give and recommend drugs safely to women across pregnancy, labour and the postnatal period, to recognise expected and unwanted effects, and to teach and monitor the woman and her baby. Because two patients (mother and fetus or breastfed baby) are often affected at once, the midwife must think about drug effects in both." },
      { h: "Key terms", list: [
        "Pharmacology — the overall science of drugs and their effects.",
        "Pharmacokinetics — what the body does to the drug (absorption, distribution, metabolism, excretion).",
        "Pharmacodynamics — what the drug does to the body (mechanism of action and effects).",
        "Therapeutic effect — the desired, intended effect; adverse drug reaction (ADR) — a harmful, unintended response.",
        "Indication — a reason a drug is given; contraindication — a reason it must not be given.",
        "Generic vs brand name — e.g. oxytocin (generic) sold under trade names; the midwife works from the generic name to avoid error."
      ] },
      { h: "Phases of drug action", p: "An oral drug passes through three phases: in the pharmaceutic phase a tablet disintegrates and dissolves; in the pharmacokinetic phase the drug is absorbed, distributed, metabolised and excreted; in the pharmacodynamic phase it reaches its site of action and produces an effect.", figure: {
        caption: "Three phases of drug action for an oral drug given in pregnancy.",
        svg: '<svg viewBox="0 0 580 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three phases of drug action."><defs><marker id="mphArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="14" y="45" width="160" height="60" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="94" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">PHARMACEUTIC</text><text x="94" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">tablet dissolves</text><rect x="210" y="45" width="160" height="60" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="290" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">PHARMACOKINETIC</text><text x="290" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">A · D · M · E</text><rect x="406" y="45" width="160" height="60" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="486" y="70" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">PHARMACODYNAMIC</text><text x="486" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">drug acts → effect</text><line x1="174" y1="75" x2="206" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr1)"/><line x1="370" y1="75" x2="402" y2="75" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr1)"/></svg>'
      } },
      { h: "Pharmacokinetics — ADME", list: [
        "Absorption — movement of drug from the site of administration into the blood; affected by route, drug form and blood flow.",
        "Distribution — the drug is carried by the blood to tissues; in pregnancy the larger plasma volume and lower albumin change distribution and protein binding.",
        "Metabolism (biotransformation) — mainly in the liver; some enzyme pathways are more active in pregnancy.",
        "Excretion — mainly via the kidneys; the raised renal blood flow and glomerular filtration of pregnancy speed elimination of some drugs."
      ] },
      { h: "Pharmacodynamics — how drugs act", p: "Most drugs act by binding to receptors, enzymes or ion channels. An agonist binds and activates a receptor (e.g. oxytocin at the oxytocin receptor causing uterine contraction); an antagonist binds but blocks the receptor (e.g. naloxone blocking opioid receptors). The size of effect depends on the dose and on receptor numbers and sensitivity — uterine oxytocin receptors increase markedly towards term, which is why the uterus becomes responsive to oxytocics in labour." },
      { h: "How pregnancy changes drug handling", list: [
        "Increased plasma volume dilutes water-soluble drugs, sometimes lowering blood levels.",
        "Lower plasma albumin means more free (active) drug for highly protein-bound drugs.",
        "Delayed gastric emptying and slowed gut transit can alter oral absorption.",
        "Increased renal blood flow and GFR speed excretion of renally cleared drugs.",
        "The placenta allows transfer of many drugs to the fetus, especially small, fat-soluble, un-ionised molecules."
      ] },
      { h: "Excretion through breast milk", p: "Many drugs pass into breast milk, usually in small amounts. Lipid-soluble, low-molecular-weight, poorly protein-bound drugs cross most readily. For most maternal medicines the amount reaching the baby is small and breastfeeding can continue, but the midwife should check each drug (e.g. in the BNF) and watch the baby for effects such as drowsiness." },
      { h: "Role of the midwife", list: [
        "Know the indication, action, usual dose, route and main adverse effects of every drug used in midwifery.",
        "Consider effects on both mother and fetus/newborn before giving or advising any drug.",
        "Use the generic name and an approved reference (BNF) and never assume a drug is safe simply because it is common.",
        "Observe, record and report the woman's and baby's response."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "Define pharmacokinetics and pharmacodynamics and give a midwifery example of each.",
      "Explain the four processes of ADME and how pregnancy alters each.",
      "Describe the three phases of drug action for an oral drug.",
      "How do the physiological changes of pregnancy affect drug handling in a childbearing woman?",
      "Explain how drugs are excreted in breast milk and the midwife's responsibilities when a mother is breastfeeding."
    ],
    assessment: [
      { type: "mcq", q: "Pharmacokinetics is best described as:", options: ["What the drug does to the body", "What the body does to the drug", "The cost of a drug", "The brand name of a drug"], answer: 1, rationale: "Pharmacokinetics (ADME) is what the body does to the drug; pharmacodynamics is what the drug does to the body." },
      { type: "mcq", q: "The four processes of pharmacokinetics (ADME) are:", options: ["Action, dose, metabolism, effect", "Absorption, distribution, metabolism, excretion", "Agonist, dose, mechanism, elimination", "Absorption, dilution, mixing, excretion"], answer: 1, rationale: "ADME = Absorption, Distribution, Metabolism, Excretion." },
      { type: "mcq", q: "Oxytocin causing uterine contraction by activating its receptor is an example of a drug acting as a(n):", options: ["Agonist", "Antagonist", "Enzyme inhibitor", "Placebo"], answer: 0, rationale: "An agonist binds and activates a receptor; oxytocin activates the oxytocin receptor." },
      { type: "mcq", q: "A change in pregnancy that tends to increase the free (active) fraction of a highly protein-bound drug is:", options: ["Higher albumin", "Lower plasma albumin", "Slower kidneys", "Reduced blood volume"], answer: 1, rationale: "Lower plasma albumin leaves more unbound, active drug." },
      { type: "mcq", q: "Drugs that cross the placenta most readily are typically:", options: ["Large and water-soluble", "Highly protein-bound", "Small, fat-soluble and un-ionised", "Ionised and heavy"], answer: 2, rationale: "Small, lipid-soluble, un-ionised molecules cross membranes including the placenta most easily." },
      { type: "mcq", q: "Increased renal blood flow and glomerular filtration in pregnancy tend to:", options: ["Slow excretion of renally cleared drugs", "Speed excretion of renally cleared drugs", "Stop drug metabolism", "Prevent absorption"], answer: 1, rationale: "Raised GFR speeds elimination of drugs cleared by the kidney." },
      { type: "mcq", q: "Which drug feature makes it MORE likely to pass into breast milk?", options: ["High molecular weight", "Strong protein binding", "Lipid solubility", "Being ionised"], answer: 2, rationale: "Lipid-soluble, low-molecular-weight, poorly protein-bound drugs cross into milk most readily." },
      { type: "mcq", q: "The desired, intended effect of a drug is the:", options: ["Adverse effect", "Therapeutic effect", "Contraindication", "First-pass effect"], answer: 1, rationale: "The therapeutic effect is the intended benefit; an adverse effect is unwanted." },
      { type: "mcq", q: "Naloxone, which blocks opioid receptors, is an example of a(n):", options: ["Agonist", "Antagonist", "Uterotonic", "Vitamin"], answer: 1, rationale: "An antagonist binds a receptor but blocks its activation; naloxone blocks opioid receptors." },
      { type: "mcq", q: "Why must the midwife consider two patients when giving a drug in pregnancy?", options: ["The drug costs more", "Many drugs cross the placenta to the fetus", "Drugs only act on the mother", "The fetus has no circulation"], answer: 1, rationale: "Many drugs cross the placenta, so both mother and fetus may be affected." },
      { type: "fill", q: "The branch of pharmacology describing what the drug does to the body is ____.", accept: ["pharmacodynamics"], rationale: "Pharmacodynamics is the drug's action on the body; pharmacokinetics is the reverse." },
      { type: "fill", q: "The four pharmacokinetic processes are summarised by the acronym ____.", accept: ["ADME", "adme"], rationale: "ADME = Absorption, Distribution, Metabolism, Excretion." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "mph-02-forms-routes",
    unit: "Unit 1 · Principles of Pharmacology",
    title: "Drug Forms, Preparations & Routes of Administration",
    readMinutes: 16,
    summary: "The main forms of drugs, the routes by which they are given, their advantages and disadvantages, and how route choice is made in pregnancy, labour and the postnatal period.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why form and route matter", p: "The form of a drug (tablet, injection, pessary) and the route by which it is given decide how fast and how completely it is absorbed, and therefore how quickly it acts. In midwifery the right choice can be life-saving — for example, an intravenous or intramuscular oxytocic acts within minutes in postpartum haemorrhage, whereas a tablet would be far too slow." },
      { h: "Common drug forms", list: [
        "Solid oral — tablets, capsules (e.g. iron, folic acid).",
        "Liquid oral — syrups, suspensions, elixirs (easy for those who cannot swallow tablets).",
        "Injections (parenteral) — solutions in ampoules/vials for IM, IV or SC use (e.g. oxytocin, magnesium sulphate).",
        "Topical — creams, ointments and gels applied to skin.",
        "Pessaries and vaginal preparations — e.g. prostaglandin pessary for induction of labour.",
        "Suppositories — rectal forms (e.g. misoprostol or diclofenac).",
        "Inhalational — gases and aerosols (e.g. Entonox in labour)."
      ] },
      { h: "Enteral routes", list: [
        "Oral (PO) — most common, convenient and cheap; slower onset; affected by gut and first-pass metabolism; unsuitable if the woman is vomiting or nil-by-mouth.",
        "Sublingual / buccal — under the tongue or in the cheek; absorbed fast, bypasses first-pass (e.g. some misoprostol regimens).",
        "Rectal (PR) — useful when the woman cannot take oral drugs or is vomiting (e.g. analgesic or antiemetic suppository)."
      ] },
      { h: "Parenteral routes", list: [
        "Intravenous (IV) — straight into a vein; fastest onset, 100% bioavailable, allows titration (e.g. oxytocin infusion); needs care as effect is immediate.",
        "Intramuscular (IM) — into muscle; fairly rapid (e.g. oxytocin/ergometrine for active management of third stage).",
        "Subcutaneous (SC) — into fatty tissue; slower, steady absorption (e.g. low-molecular-weight heparin in pregnancy).",
        "Intradermal — into the skin (e.g. some vaccines/test doses)."
      ] },
      { h: "Other routes used in midwifery", list: [
        "Vaginal — local action for induction/ripening (prostaglandin) or infection.",
        "Inhalational — Entonox (nitrous oxide/oxygen) for labour analgesia; rapid on and off.",
        "Topical/transdermal — local effect or slow systemic delivery.",
        "Epidural/intrathecal — drug placed near the spinal nerves for regional analgesia in labour."
      ] },
      { h: "Choosing a route", p: "The midwife (with the prescriber) chooses a route based on how quickly the drug must act, whether the woman can take oral drugs, the drug's properties, and the clinical situation. In an emergency such as PPH or eclampsia, IV or IM routes are chosen for speed; for prophylaxis and supplements, oral routes are preferred for convenience.", figure: {
        caption: "Routes of administration grouped as enteral, parenteral and other.",
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of routes of administration."><rect x="200" y="12" width="160" height="40" rx="9" fill="#831843"/><text x="280" y="37" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FDF2F8">ROUTES</text><rect x="20" y="95" width="150" height="110" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="95" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Enteral</text><text x="95" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Oral</text><text x="95" y="156" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Sublingual</text><text x="95" y="174" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Rectal</text><rect x="205" y="95" width="150" height="110" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="280" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#BE185D">Parenteral</text><text x="280" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">IV · IM</text><text x="280" y="156" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">SC · ID</text><rect x="390" y="95" width="150" height="110" rx="9" fill="#FDF2F8" stroke="#7C2D12" stroke-width="2"/><text x="465" y="116" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Other</text><text x="465" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Vaginal</text><text x="465" y="156" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Inhaled</text><text x="465" y="174" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Epidural</text><line x1="280" y1="52" x2="95" y2="93" stroke="#831843" stroke-width="2"/><line x1="280" y1="52" x2="280" y2="93" stroke="#831843" stroke-width="2"/><line x1="280" y1="52" x2="465" y2="93" stroke="#831843" stroke-width="2"/></svg>'
      } },
      { h: "Role of the midwife", list: [
        "Use the correct form and route exactly as prescribed; never substitute a route.",
        "Know which routes act fastest for emergencies (IV, IM, sublingual).",
        "Check the woman can use the chosen route (e.g. not vomiting for oral).",
        "Observe for the expected speed and effect and report problems."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "List the main forms of drugs used in midwifery with one example of each.",
      "Compare enteral and parenteral routes of administration with examples.",
      "Why is the intravenous route chosen in obstetric emergencies?",
      "Describe routes used specifically in labour and explain their advantages.",
      "What factors guide the choice of route for a childbearing woman?"
    ],
    assessment: [
      { type: "mcq", q: "Which route gives the FASTEST onset and 100% bioavailability?", options: ["Oral", "Intravenous", "Subcutaneous", "Rectal"], answer: 1, rationale: "IV delivers drug directly to the blood, giving immediate effect and full bioavailability." },
      { type: "mcq", q: "Entonox used for pain in labour is given by which route?", options: ["Oral", "Inhalational", "Intramuscular", "Rectal"], answer: 1, rationale: "Entonox (nitrous oxide/oxygen) is inhaled, giving rapid onset and offset." },
      { type: "mcq", q: "A prostaglandin used to ripen the cervix for induction is typically given as a:", options: ["Vaginal pessary/gel", "Subcutaneous injection", "Eye drop", "Inhaler"], answer: 0, rationale: "Prostaglandin for cervical ripening is given vaginally for local action." },
      { type: "mcq", q: "Which route is best when a woman is vomiting and cannot keep tablets down?", options: ["Oral tablets", "Rectal or parenteral", "Sublingual gum only", "No drug can be given"], answer: 1, rationale: "Rectal or parenteral routes bypass the gut when oral intake is not tolerated." },
      { type: "mcq", q: "IM oxytocin/ergometrine in the third stage of labour is given because IM is:", options: ["Slow over days", "Fairly rapid and reliable without IV access", "Only for vaccines", "Painless and oral"], answer: 1, rationale: "IM gives a fairly rapid, reliable effect suitable for routine active management." },
      { type: "mcq", q: "An advantage of the oral route is that it is:", options: ["Fastest acting", "Convenient and inexpensive", "Unaffected by vomiting", "Free of first-pass metabolism"], answer: 1, rationale: "Oral is convenient and cheap but slower and subject to first-pass metabolism." },
      { type: "mcq", q: "Low-molecular-weight heparin in pregnancy is commonly given:", options: ["Orally", "Subcutaneously", "Rectally", "By inhalation"], answer: 1, rationale: "LMWH is given subcutaneously for steady absorption." },
      { type: "mcq", q: "Regional analgesia for labour placing drug near the spinal nerves uses the ____ route.", options: ["Topical", "Epidural", "Oral", "Inhalational"], answer: 1, rationale: "Epidural/intrathecal placement gives regional analgesia." },
      { type: "mcq", q: "Which is a SOLID oral dosage form?", options: ["Syrup", "Tablet", "Pessary", "Ampoule"], answer: 1, rationale: "Tablets and capsules are solid oral forms." },
      { type: "mcq", q: "The sublingual route is useful because it:", options: ["Is the slowest route", "Bypasses first-pass metabolism and acts quickly", "Requires a needle", "Can only give vaccines"], answer: 1, rationale: "Sublingual absorption is rapid and avoids hepatic first-pass." },
      { type: "fill", q: "Drugs given by injection (IV, IM, SC) are described as ____ routes.", accept: ["parenteral"], rationale: "Parenteral = bypassing the gut, i.e. by injection." },
      { type: "fill", q: "A drug form inserted into the vagina is called a ____.", accept: ["pessary"], rationale: "A pessary is a vaginal dosage form, used e.g. for induction." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "mph-03-dosage-safety",
    unit: "Unit 1 · Principles of Pharmacology",
    title: "Dosage Calculation & Principles of Safe Drug Administration",
    readMinutes: 17,
    summary: "How to calculate drug doses correctly, the rights of medication administration, double-checking high-alert drugs, and the midwife's legal and professional responsibilities.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why safe administration is critical", p: "Medication errors can seriously harm a woman or her baby. In midwifery some drugs are high-alert (oxytocin, magnesium sulphate, opioids, insulin) where a small error can be dangerous. Safe practice means correct calculation, careful checking, and clear recording — every time." },
      { h: "The 'rights' of medication administration", list: [
        "Right patient — confirm identity (name and identifiers).",
        "Right drug — check the generic name against the prescription.",
        "Right dose — calculate and double-check; question an unusual dose.",
        "Right route — exactly as prescribed.",
        "Right time / frequency — including the correct interval.",
        "Right documentation — record immediately after giving.",
        "Right reason and right response — know why it is given and check the effect."
      ] },
      { h: "Basic dose calculation", p: "The standard formula for a single dose is: dose required = (what you want ÷ what you have) × the volume/stock unit. For example, to give 5 mg from a stock of 10 mg in 2 mL: (5 ÷ 10) × 2 = 1 mL. Always work in the same units (convert mg/mcg/g first) and have the calculation independently checked for high-alert drugs.", figure: {
        caption: "The basic dose calculation formula.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dose calculation formula box."><rect x="30" y="30" width="460" height="90" rx="12" fill="#FDF2F8" stroke="#831843" stroke-width="2.5"/><text x="260" y="62" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#831843">Volume to give =</text><text x="200" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#BE185D">(Want ÷ Have)</text><text x="335" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#BE185D">× Stock volume</text></svg>'
      } },
      { h: "Infusion rate calculation", p: "For infusions the midwife may calculate the rate in mL per hour or drops per minute. A useful principle: drops/min = (volume in mL × drop factor of the giving set) ÷ time in minutes. Oxytocin infusions are usually given by a controlled infusion pump and titrated against contractions; magnesium sulphate is given as a loading dose then a maintenance infusion using a pump." },
      { h: "Checking and high-alert drugs", list: [
        "Independent double-check of drug, dose and calculation for high-alert drugs (oxytocin, magnesium sulphate, insulin, opioids).",
        "Check expiry date, label, ampoule strength and that the solution is clear.",
        "Use a pump for controlled infusions and label the infusion.",
        "Never be distracted during preparation; never give a drug someone else prepared without checking."
      ] },
      { h: "Application in midwifery", list: [
        "Calculate oxytocin infusion concentrations and titrate to contractions.",
        "Prepare magnesium sulphate loading and maintenance doses accurately.",
        "Calculate weight-based neonatal drug doses with a colleague.",
        "Recognise that small volume errors with concentrated drugs can be dangerous."
      ] },
      { h: "Legal and professional responsibilities", list: [
        "Give drugs only on a valid prescription/standing order or within the midwife's scope and the local SOP.",
        "The midwife who gives the drug is accountable for checking it is correct.",
        "Record the drug, dose, route, time and the woman's response; report and document any error or reaction.",
        "Store, handle and dispose of medicines (especially controlled drugs) according to law and policy."
      ] },
      { h: "Role of the midwife", list: [
        "Apply the rights of administration at every drug round.",
        "Double-check calculations and high-alert drugs with a second person.",
        "Educate the woman about her medicines and obtain consent.",
        "Document accurately and report errors honestly so they can be learned from."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "State the 'rights' of medication administration and explain each.",
      "Using the standard formula, show how to calculate a single drug dose with an example.",
      "What is a high-alert drug? Name those important in midwifery and the precautions required.",
      "Describe the legal and professional responsibilities of the midwife in drug administration.",
      "Explain how an oxytocin or magnesium sulphate infusion is administered safely."
    ],
    assessment: [
      { type: "mcq", q: "The standard formula to find the volume to give is:", options: ["(Want ÷ Have) × stock volume", "(Have ÷ Want) × time", "Want × Have × volume", "Have − Want"], answer: 0, rationale: "Volume = (what you want ÷ what you have) × the stock volume." },
      { type: "mcq", q: "To give 5 mg from a stock of 10 mg in 2 mL, you draw up:", options: ["0.5 mL", "1 mL", "2 mL", "4 mL"], answer: 1, rationale: "(5 ÷ 10) × 2 = 1 mL." },
      { type: "mcq", q: "Which is a high-alert drug in midwifery requiring an independent double-check?", options: ["Paracetamol tablet", "Normal saline flush", "Magnesium sulphate", "Folic acid"], answer: 2, rationale: "Magnesium sulphate is high-alert; errors can cause respiratory depression." },
      { type: "mcq", q: "Confirming the woman's identity before giving a drug satisfies the right of:", options: ["Right drug", "Right patient", "Right route", "Right time"], answer: 1, rationale: "Identifying the correct woman is the 'right patient'." },
      { type: "mcq", q: "Before drawing up an injection the midwife should check the ampoule for:", options: ["Brand colour only", "Strength, expiry date and clarity of solution", "The price", "Nothing if it is common"], answer: 1, rationale: "Strength, expiry and appearance must all be verified." },
      { type: "mcq", q: "When should the administration be documented?", options: ["At the end of the shift", "Immediately after giving the drug", "Only if there is a reaction", "The next day"], answer: 1, rationale: "Recording immediately after giving prevents omission and duplication errors." },
      { type: "mcq", q: "An oxytocin infusion in labour is best controlled by:", options: ["Free-flow gravity drip", "Oral dosing", "A controlled infusion pump, titrated to contractions", "A single IM bolus only"], answer: 2, rationale: "An infusion pump allows safe, titrated delivery against contractions." },
      { type: "mcq", q: "If a midwife is unsure about an unusually large prescribed dose, she should:", options: ["Give it anyway", "Question and verify before giving", "Halve it herself", "Ignore the prescription"], answer: 1, rationale: "An unusual dose must be questioned and verified before administration." },
      { type: "mcq", q: "Before converting units in a calculation, the midwife should ensure all values are in:", options: ["Different units", "The same units", "Brand names", "Drops only"], answer: 1, rationale: "Values must be in the same units (e.g. all mg) before calculating." },
      { type: "mcq", q: "Accountability for checking a drug is correct lies with:", options: ["Only the doctor", "The pharmacy alone", "The woman", "The midwife who administers it"], answer: 3, rationale: "The midwife giving the drug is accountable for checking its correctness." },
      { type: "fill", q: "Drugs such as oxytocin and magnesium sulphate, where small errors are dangerous, are called ____ drugs.", accept: ["high-alert", "high alert"], rationale: "High-alert drugs require extra checks such as an independent double-check." },
      { type: "fill", q: "Confirming the correct medication against the prescription satisfies the right ____.", accept: ["drug", "medication"], rationale: "The 'right drug' check matches the medication to the prescription." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "mph-04-pregnancy-safety",
    unit: "Unit 2 · Drug Safety in Pregnancy",
    title: "Drug Safety in Pregnancy: Teratogenicity & Pregnancy Risk Categories",
    readMinutes: 17,
    summary: "How drugs can harm the developing fetus, the critical periods of pregnancy, teratogenic drugs to avoid, risk-category systems, and the midwife's role in promoting safe medicine use.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The problem of drugs in pregnancy", p: "Almost any drug taken by a pregnant woman can reach the fetus across the placenta. Some drugs are teratogens — they can cause structural malformations or functional harm to the developing baby. The midwife must help women weigh the benefit of treating the mother against possible risk to the fetus, and must never assume a familiar drug is automatically safe in pregnancy." },
      { h: "Critical periods of development", list: [
        "Pre-implantation (first ~2 weeks) — an 'all-or-nothing' period; severe insult may cause loss, otherwise no malformation.",
        "Embryonic period (~weeks 3–8) — organs are forming; this is the period of GREATEST risk of structural malformation.",
        "Fetal period (week 9 to birth) — growth and functional maturation; drugs may affect growth, brain and organ function rather than gross structure."
      ], figure: {
        caption: "Timing of fetal vulnerability across pregnancy.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Critical periods of pregnancy timeline."><line x1="30" y1="80" x2="530" y2="80" stroke="#831843" stroke-width="3"/><rect x="30" y="60" width="90" height="40" rx="6" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><text x="75" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">Wk 0-2</text><rect x="120" y="55" width="160" height="50" rx="6" fill="#BE185D"/><text x="200" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#FDF2F8">Wk 3-8 ORGANS</text><text x="200" y="94" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FDF2F8">highest risk</text><rect x="280" y="60" width="250" height="40" rx="6" fill="#FDF2F8" stroke="#831843" stroke-width="1.5"/><text x="405" y="84" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">Wk 9-birth: growth &amp; function</text><text x="75" y="48" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">all-or-nothing</text></svg>'
      } },
      { h: "What is a teratogen?", p: "A teratogen is any agent (drug, chemical, infection, radiation) that can disturb fetal development and cause a birth defect. Whether harm occurs depends on the drug, the dose, the timing (which organs are forming), and individual susceptibility." },
      { h: "Examples of drugs to avoid or use with great caution", list: [
        "Warfarin — can cause fetal abnormalities and bleeding; heparin is preferred in pregnancy.",
        "ACE inhibitors / ARBs — cause fetal kidney damage and other harm, especially later in pregnancy.",
        "Sodium valproate and some other antiepileptics — high risk of neural tube and developmental defects.",
        "Retinoids (isotretinoin) — powerful teratogen; pregnancy must be avoided during use.",
        "Tetracyclines — discolour developing teeth and affect bone; avoid in pregnancy.",
        "Live vaccines (e.g. MMR, rubella) — generally avoided in pregnancy.",
        "Alcohol — causes fetal alcohol spectrum disorder; no safe amount is established."
      ] },
      { h: "Pregnancy risk-category systems", p: "Different references group drugs by the level of evidence and risk in pregnancy. The traditional letter system (for example A, B, C, D, X) ranks from drugs with no demonstrated risk through to those clearly harmful and contraindicated. Newer systems (and the BNF) instead give a narrative summary of the evidence by trimester. Whatever system is used, the principle is the same: prescribe only when the benefit outweighs the risk, at the lowest effective dose for the shortest time." },
      { h: "General principles for safe use", list: [
        "Avoid all non-essential drugs, especially in the first trimester.",
        "Use a well-established drug with a good safety record in preference to a new one.",
        "Use the lowest effective dose for the shortest necessary time.",
        "Always check an approved reference (e.g. BNF) before giving any drug in pregnancy.",
        "Continue essential treatment (e.g. epilepsy, asthma) — stopping abruptly may harm both mother and fetus."
      ] },
      { h: "Role of the midwife", list: [
        "Take a full drug history including over-the-counter, herbal and recreational substances.",
        "Advise women planning pregnancy to review medicines and take folic acid before conception.",
        "Counsel about avoiding alcohol, smoking and unprescribed drugs.",
        "Refer to the prescriber/specialist when a woman on a teratogenic drug becomes or wishes to become pregnant.",
        "Never start or stop a chronic medicine without medical advice."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "Define teratogen and list four factors that determine whether a drug harms the fetus.",
      "Describe the critical periods of pregnancy and state which carries the greatest risk of malformation.",
      "Name five drugs that should be avoided in pregnancy and state why.",
      "Explain the pregnancy risk-category systems and the principle of benefit versus risk.",
      "Outline the midwife's role in promoting safe medicine use in pregnancy."
    ],
    assessment: [
      { type: "mcq", q: "The period of GREATEST risk of structural malformation is:", options: ["Weeks 0–2 (pre-implantation)", "Weeks 3–8 (organogenesis)", "Weeks 30–40", "After birth"], answer: 1, rationale: "Organs form during weeks 3–8, so this is the period of highest malformation risk." },
      { type: "mcq", q: "A teratogen is an agent that:", options: ["Improves fetal growth", "Can disturb fetal development and cause defects", "Only affects the mother", "Increases milk supply"], answer: 1, rationale: "A teratogen can disturb development and cause birth defects." },
      { type: "mcq", q: "Which anticoagulant is preferred in pregnancy instead of warfarin?", options: ["Aspirin only", "Heparin", "Warfarin is safest", "No anticoagulant exists"], answer: 1, rationale: "Heparin does not cross the placenta and is preferred over teratogenic warfarin." },
      { type: "mcq", q: "ACE inhibitors are avoided in pregnancy chiefly because they can cause:", options: ["Better fetal kidneys", "Fetal renal damage and harm", "Increased milk", "Tooth whitening"], answer: 1, rationale: "ACE inhibitors/ARBs damage the fetal kidneys, especially in later pregnancy." },
      { type: "mcq", q: "Which antiepileptic carries a high risk of neural tube and developmental defects?", options: ["Sodium valproate", "Paracetamol", "Folic acid", "Iron"], answer: 0, rationale: "Sodium valproate is strongly associated with neural tube and developmental defects." },
      { type: "mcq", q: "The 'all-or-nothing' effect refers to drug exposure during:", options: ["The pre-implantation period", "The third trimester", "Labour", "Breastfeeding"], answer: 0, rationale: "In the first ~2 weeks an insult either causes loss or no malformation." },
      { type: "mcq", q: "Tetracyclines are avoided in pregnancy because they:", options: ["Strengthen fetal teeth", "Discolour developing teeth and affect bone", "Cause excess folate", "Are inactive"], answer: 1, rationale: "Tetracyclines stain developing teeth and affect bone growth." },
      { type: "mcq", q: "A core principle of prescribing in pregnancy is to use:", options: ["The newest drug available", "The lowest effective dose for the shortest time", "As many drugs as possible", "Only injections"], answer: 1, rationale: "Minimise exposure: lowest effective dose, shortest duration, only when benefit exceeds risk." },
      { type: "mcq", q: "A woman with epilepsy on regular medication who becomes pregnant should:", options: ["Stop all drugs at once", "Continue and be referred for specialist review", "Double her dose herself", "Switch to alcohol"], answer: 1, rationale: "Stopping antiepileptics abruptly risks seizures; specialist review balances risks." },
      { type: "mcq", q: "Which substance has no established safe amount in pregnancy?", options: ["Folic acid", "Alcohol", "Iron", "Calcium"], answer: 1, rationale: "Alcohol causes fetal alcohol spectrum disorder; no safe level is established." },
      { type: "fill", q: "An agent that can cause a structural defect in the developing fetus is a ____.", accept: ["teratogen"], rationale: "Teratogens disturb development and cause malformations." },
      { type: "fill", q: "Most major organs form during the ____ period of pregnancy (about weeks 3–8).", accept: ["embryonic", "organogenesis"], rationale: "Organogenesis in the embryonic period is the most vulnerable window." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "mph-05-oxytocics",
    unit: "Unit 3 · Drugs in Labour & Childbirth",
    title: "Oxytocics & Uterotonics: Oxytocin, Ergometrine & Misoprostol",
    readMinutes: 18,
    summary: "The drugs that make the uterus contract — their actions, uses in labour and for postpartum haemorrhage, doses in principle, adverse effects and the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are oxytocics / uterotonics?", p: "Oxytocics (uterotonics) are drugs that stimulate the uterus to contract. They are central to midwifery: they are used to induce or augment labour, for active management of the third stage to prevent postpartum haemorrhage (PPH), and to treat PPH once it occurs. The three most important are oxytocin, ergometrine and the prostaglandin misoprostol." },
      { h: "Oxytocin", list: [
        "Action — a synthetic form of the natural posterior-pituitary hormone; binds uterine oxytocin receptors (which rise towards term) to cause rhythmic contractions.",
        "Uses — induction and augmentation of labour (IV infusion, titrated), active management of third stage (IM), and treatment of PPH (IV/IM).",
        "Adverse effects — uterine hyperstimulation with fetal distress, and with high doses water intoxication (it has a mild antidiuretic effect); rapid IV bolus can cause hypotension.",
        "Midwifery points — give labour infusions by pump titrated to contractions; monitor the fetal heart and contraction frequency closely."
      ] },
      { h: "Ergometrine (ergometrine maleate)", list: [
        "Action — causes sustained, forceful uterine contraction (a tonic contraction).",
        "Uses — prevention and treatment of PPH; often combined with oxytocin as Syntometrine for the third stage.",
        "Adverse effects — nausea and vomiting, and importantly a RISE in blood pressure — so it is CONTRAINDICATED in hypertension, pre-eclampsia and eclampsia and in heart disease.",
        "Midwifery points — check blood pressure status before use; do not use the IV route routinely because of severe hypertension/vasospasm risk."
      ] },
      { h: "Misoprostol (a prostaglandin E1 analogue)", list: [
        "Action — a prostaglandin that causes the uterus to contract and the cervix to ripen.",
        "Uses — prevention and treatment of PPH (especially where oxytocin/cold chain is unavailable, as it is heat-stable and given orally, sublingually or rectally), induction of labour and management of incomplete miscarriage.",
        "Adverse effects — shivering and pyrexia (fever), diarrhoea, nausea; uterine hyperstimulation if doses are too high.",
        "Midwifery points — valuable in low-resource settings; never use higher induction doses where a scarred uterus risks rupture."
      ] },
      { h: "Why uterotonics stop PPH", p: "The commonest cause of PPH is uterine atony — the uterus fails to contract after birth, so the open blood vessels at the placental site keep bleeding. Uterotonics make the uterus contract firmly, clamping these vessels and controlling the bleeding. This is why a uterotonic is the first-line drug treatment for PPH.", figure: {
        caption: "Uterotonics contract the uterus to clamp placental-site vessels and control bleeding.",
        svg: '<svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Uterotonic action in PPH."><defs><marker id="mphArr5" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="55" width="140" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="90" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Uterine atony</text><text x="90" y="96" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">vessels bleed</text><rect x="200" y="55" width="140" height="55" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="270" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Uterotonic</text><text x="270" y="96" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">uterus contracts</text><rect x="380" y="55" width="140" height="55" rx="9" fill="#FDF2F8" stroke="#15803D" stroke-width="2"/><text x="450" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Vessels clamped</text><text x="450" y="96" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">bleeding controlled</text><line x1="160" y1="82" x2="196" y2="82" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr5)"/><line x1="340" y1="82" x2="376" y2="82" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr5)"/></svg>'
      } },
      { h: "Choosing the uterotonic", p: "Oxytocin is the first-choice uterotonic for routine prevention of PPH and for treatment, because it is effective and well tolerated. Ergometrine adds a strong, sustained contraction but is avoided in hypertensive women. Misoprostol is a valuable alternative where oxytocin cannot be kept cold or given by injection." },
      { h: "Role of the midwife", list: [
        "Offer active management of the third stage with a uterotonic to reduce PPH.",
        "Check contraindications (hypertension for ergometrine) before giving.",
        "Give oxytocin infusions by pump, monitoring contractions and the fetal heart.",
        "Observe for hyperstimulation, blood pressure changes, nausea and shivering.",
        "Record drug, dose, route and time, and the woman's response and blood loss."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "Define oxytocics and list their uses in midwifery.",
      "Compare oxytocin, ergometrine and misoprostol in action, use and adverse effects.",
      "Why is ergometrine contraindicated in pre-eclampsia?",
      "Explain how uterotonics control postpartum haemorrhage caused by atony.",
      "Describe the midwife's responsibilities when giving a uterotonic for the third stage."
    ],
    assessment: [
      { type: "mcq", q: "Oxytocics (uterotonics) are drugs that:", options: ["Relax the uterus", "Cause the uterus to contract", "Lower blood pressure", "Treat infection"], answer: 1, rationale: "Uterotonics stimulate uterine contraction." },
      { type: "mcq", q: "The first-choice uterotonic for routine prevention of PPH is:", options: ["Ergometrine", "Oxytocin", "Misoprostol", "Magnesium sulphate"], answer: 1, rationale: "Oxytocin is first-line for prevention and treatment of PPH." },
      { type: "mcq", q: "Ergometrine is CONTRAINDICATED in:", options: ["Anaemia", "Hypertension / pre-eclampsia", "Twin pregnancy alone", "Normal blood pressure"], answer: 1, rationale: "Ergometrine raises blood pressure, so it is avoided in hypertensive disorders." },
      { type: "mcq", q: "A key advantage of misoprostol in low-resource settings is that it:", options: ["Must be kept frozen", "Is heat-stable and can be given without injection", "Only works intravenously", "Has no effect on the uterus"], answer: 1, rationale: "Misoprostol is heat-stable and can be given orally, sublingually or rectally." },
      { type: "mcq", q: "The commonest cause of postpartum haemorrhage is:", options: ["Uterine atony", "High blood pressure", "Anaemia", "Infection"], answer: 0, rationale: "Atony (failure of the uterus to contract) is the leading cause of PPH." },
      { type: "mcq", q: "Common side effects of misoprostol include:", options: ["Bradycardia and constipation", "Shivering, fever and diarrhoea", "Weight gain only", "No side effects"], answer: 1, rationale: "Misoprostol commonly causes shivering, pyrexia and diarrhoea." },
      { type: "mcq", q: "An oxytocin infusion for augmentation of labour should be:", options: ["Given as a rapid IV bolus", "Titrated by infusion pump against contractions with fetal monitoring", "Given orally", "Never monitored"], answer: 1, rationale: "It is titrated by pump while monitoring contractions and the fetal heart." },
      { type: "mcq", q: "A serious risk of excessive oxytocin during labour is:", options: ["Uterine hyperstimulation and fetal distress", "Increased fetal weight", "Lower maternal pulse only", "Improved cervical dilatation guaranteed"], answer: 0, rationale: "Excess oxytocin can cause hyperstimulation with fetal compromise." },
      { type: "mcq", q: "Syntometrine combines oxytocin with:", options: ["Misoprostol", "Ergometrine", "Magnesium", "Heparin"], answer: 1, rationale: "Syntometrine is a combination of oxytocin and ergometrine." },
      { type: "mcq", q: "How do uterotonics control bleeding after birth?", options: ["By thinning the blood", "By contracting the uterus to clamp placental-site vessels", "By raising blood pressure", "By dilating vessels"], answer: 1, rationale: "Firm uterine contraction compresses the open vessels at the placental site." },
      { type: "fill", q: "Failure of the uterus to contract after birth, the main cause of PPH, is called uterine ____.", accept: ["atony"], rationale: "Atony leaves placental-site vessels open and bleeding." },
      { type: "fill", q: "The uterotonic that must be avoided in hypertension because it raises blood pressure is ____.", accept: ["ergometrine"], rationale: "Ergometrine causes vasoconstriction and a rise in blood pressure." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "mph-06-tocolytics",
    unit: "Unit 3 · Drugs in Labour & Childbirth",
    title: "Tocolytics: Drugs to Suppress Preterm Labour",
    readMinutes: 16,
    summary: "Drugs that relax the uterus to delay preterm birth, their main types and actions, why they are given, adverse effects, and the midwife's role in their use.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are tocolytics?", p: "Tocolytics are drugs that suppress uterine contractions to delay preterm labour. Unlike uterotonics (which make the uterus contract), tocolytics relax the uterus. They do not usually stop preterm birth altogether but can delay it for a short time — and that short delay is valuable." },
      { h: "Why delay preterm birth?", list: [
        "To allow time for a course of antenatal corticosteroids (e.g. betamethasone/dexamethasone) to mature the baby's lungs.",
        "To allow magnesium sulphate to be given for fetal neuroprotection in very preterm labour.",
        "To allow transfer of the mother to a unit with neonatal intensive care (in-utero transfer)."
      ] },
      { h: "Main groups of tocolytics", list: [
        "Calcium-channel blockers (e.g. nifedipine) — relax uterine muscle; widely used and given orally.",
        "Oxytocin-receptor antagonists (e.g. atosiban) — block oxytocin receptors; well tolerated.",
        "Beta-2 agonists (e.g. salbutamol/terbutaline) — relax smooth muscle but cause more maternal side effects (used less now).",
        "Magnesium sulphate — has some uterine-relaxant effect and is used mainly for neuroprotection.",
        "Prostaglandin inhibitors (e.g. indometacin) — reduce contractions; used cautiously and short-term because of fetal effects."
      ] },
      { h: "Adverse effects", list: [
        "Nifedipine — flushing, headache, low blood pressure, tachycardia.",
        "Beta-2 agonists — maternal tachycardia, palpitations, tremor, hyperglycaemia and, rarely, pulmonary oedema.",
        "Indometacin — can affect the fetal ductus arteriosus and reduce fetal urine output, so it is limited to short use before about 32 weeks.",
        "All — careful fluid balance is needed to avoid pulmonary oedema."
      ] },
      { h: "Contraindications", p: "Tocolysis is not used when continuing the pregnancy would be more dangerous than preterm birth — for example in severe pre-eclampsia/eclampsia, significant antepartum haemorrhage, chorioamnionitis (infection), a dead fetus, or a fetus already severely compromised. In these situations birth, not delay, is appropriate." },
      { h: "Role of the midwife", list: [
        "Recognise and report signs of preterm labour promptly.",
        "Ensure antenatal corticosteroids are given when preterm birth is expected.",
        "Monitor maternal pulse, blood pressure, respiration and fluid balance during tocolysis.",
        "Watch for pulmonary oedema (breathlessness, crackles) — a key danger with beta-2 agonists.",
        "Monitor the fetal heart and support the woman, who is often anxious.",
        "Prepare for possible preterm birth and neonatal care despite tocolysis."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "Define tocolytics and explain how they differ from uterotonics.",
      "Why is it useful to delay preterm birth even for a short time?",
      "Name the main groups of tocolytic drugs with an example of each.",
      "Describe the adverse effects of beta-2 agonists used as tocolytics.",
      "State the contraindications to tocolysis and the midwife's monitoring role."
    ],
    assessment: [
      { type: "mcq", q: "Tocolytics are drugs that:", options: ["Make the uterus contract", "Relax the uterus to suppress contractions", "Treat infection", "Raise blood pressure"], answer: 1, rationale: "Tocolytics relax the uterus, the opposite of uterotonics." },
      { type: "mcq", q: "A main reason to delay preterm birth with tocolysis is to allow time for:", options: ["A holiday", "Antenatal corticosteroids to mature fetal lungs", "The placenta to detach", "More contractions"], answer: 1, rationale: "Delay buys time for steroids to mature the lungs and for in-utero transfer." },
      { type: "mcq", q: "Which calcium-channel blocker is commonly used as a tocolytic?", options: ["Nifedipine", "Oxytocin", "Ergometrine", "Heparin"], answer: 0, rationale: "Nifedipine relaxes uterine muscle and is a widely used tocolytic." },
      { type: "mcq", q: "Atosiban works as a tocolytic by:", options: ["Activating oxytocin receptors", "Blocking oxytocin receptors", "Raising calcium", "Causing infection"], answer: 1, rationale: "Atosiban is an oxytocin-receptor antagonist." },
      { type: "mcq", q: "A serious adverse effect to watch for with beta-2 agonist tocolytics is:", options: ["Pulmonary oedema", "Constipation", "Hair loss", "Improved vision"], answer: 0, rationale: "Beta-2 agonists can cause pulmonary oedema; fluid balance must be watched." },
      { type: "mcq", q: "Indometacin is limited to short-term use mainly because it can:", options: ["Whiten the teeth", "Affect the fetal ductus arteriosus and reduce fetal urine", "Increase milk supply", "Cure infection"], answer: 1, rationale: "Prostaglandin inhibitors can constrict the ductus and reduce fetal urine output." },
      { type: "mcq", q: "Tocolysis is CONTRAINDICATED when:", options: ["The woman is well", "There is chorioamnionitis or severe pre-eclampsia", "It is the first pregnancy", "The fetus is healthy"], answer: 1, rationale: "When continuing pregnancy is dangerous (infection, severe pre-eclampsia), birth is preferred." },
      { type: "mcq", q: "Tocolytics generally:", options: ["Stop preterm birth permanently", "Delay birth for a short, useful time", "Have no purpose", "Always cause labour"], answer: 1, rationale: "They typically delay rather than prevent preterm birth, allowing key interventions." },
      { type: "mcq", q: "Common side effects of nifedipine tocolysis include:", options: ["Flushing, headache and low blood pressure", "Deafness", "Jaundice", "Constipation only"], answer: 0, rationale: "Nifedipine causes vasodilatation — flushing, headache and hypotension." },
      { type: "mcq", q: "Besides delaying birth, in very preterm labour magnesium sulphate is also given for:", options: ["Pain relief", "Fetal neuroprotection", "Inducing labour", "Treating anaemia"], answer: 1, rationale: "Magnesium sulphate is used for fetal neuroprotection in very preterm labour." },
      { type: "fill", q: "Drugs that suppress uterine contractions to delay preterm labour are called ____.", accept: ["tocolytics", "tocolytic"], rationale: "Tocolytics relax the uterus and delay preterm birth." },
      { type: "fill", q: "Tocolysis buys time to give antenatal ____ to mature the preterm baby's lungs.", accept: ["corticosteroids", "steroids"], rationale: "Antenatal corticosteroids reduce neonatal respiratory complications." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "mph-07-antihtn-mgso4",
    unit: "Unit 3 · Drugs in Labour & Childbirth",
    title: "Antihypertensives in Pregnancy & Magnesium Sulphate for Pre-eclampsia/Eclampsia",
    readMinutes: 18,
    summary: "Drugs to control blood pressure in pregnancy, magnesium sulphate to prevent and treat eclamptic fits, the signs of magnesium toxicity and calcium gluconate as the antidote.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Hypertension in pregnancy", p: "Raised blood pressure in pregnancy (gestational hypertension, pre-eclampsia, chronic hypertension) endangers both mother and baby. Pre-eclampsia is high blood pressure with protein in the urine and multi-organ involvement after 20 weeks; eclampsia is the occurrence of seizures. Treatment has two aims: control the blood pressure, and (in severe pre-eclampsia/eclampsia) prevent and treat fits." },
      { h: "Antihypertensive drugs used in pregnancy", list: [
        "Labetalol (a beta-blocker with alpha effect) — a common first-line agent, oral or IV.",
        "Methyldopa — a centrally acting drug long used in pregnancy and considered safe.",
        "Nifedipine (calcium-channel blocker) — used to lower blood pressure (and as a tocolytic).",
        "Hydralazine — a vasodilator used IV for acute severe hypertension.",
        "AVOID — ACE inhibitors and ARBs (fetal harm), and avoid sudden, excessive lowering that reduces placental blood flow."
      ] },
      { h: "Magnesium sulphate — uses", p: "Magnesium sulphate is the drug of choice to PREVENT eclamptic fits in severe pre-eclampsia and to TREAT and stop fits in eclampsia. It also provides fetal neuroprotection in very preterm birth. It is a high-alert drug given by a loading dose followed by a maintenance infusion, usually with an infusion pump." },
      { h: "Magnesium sulphate — monitoring and toxicity", p: "Because magnesium is excreted by the kidneys and has a narrow margin of safety, the woman must be monitored closely for signs of toxicity, which appear in order as the level rises.", list: [
        "Loss of the patellar (knee) reflex — an early warning sign.",
        "Respiratory depression (respiratory rate falling, e.g. below 12–16 per minute).",
        "Reduced urine output (less than ~25–30 mL/hour), which causes magnesium to accumulate.",
        "Later, low pulse, low blood pressure and cardiac effects.",
        "Monitor reflexes, respiratory rate, urine output and oxygen saturation regularly during the infusion."
      ] },
      { h: "Calcium gluconate — the antidote", p: "If magnesium toxicity occurs, the infusion is STOPPED and the antidote, calcium gluconate, is given slowly intravenously to reverse the effects. The midwife must always have calcium gluconate immediately available whenever magnesium sulphate is being given.", figure: {
        caption: "Magnesium sulphate monitoring: rising level removes reflexes first, then respiration; calcium gluconate is the antidote.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Magnesium sulphate toxicity sequence and antidote."><rect x="20" y="20" width="520" height="35" rx="8" fill="#831843"/><text x="280" y="43" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FDF2F8">Rising magnesium level — watch in this order</text><rect x="20" y="70" width="160" height="45" rx="8" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="100" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Knee reflex lost</text><text x="100" y="106" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">early sign</text><rect x="200" y="70" width="160" height="45" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="280" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Respiration falls</text><text x="280" y="106" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">RR low</text><rect x="380" y="70" width="160" height="45" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="460" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Low urine output</text><text x="460" y="106" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">accumulation</text><rect x="140" y="135" width="280" height="35" rx="8" fill="#15803D"/><text x="280" y="158" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Antidote: CALCIUM GLUCONATE (IV)</text></svg>'
      } },
      { h: "Role of the midwife", list: [
        "Measure and record blood pressure accurately; test urine for protein.",
        "Recognise the signs of severe pre-eclampsia (severe headache, visual disturbance, epigastric pain, brisk reflexes, oedema).",
        "Give antihypertensives as prescribed and monitor for excessive falls in blood pressure.",
        "Administer magnesium sulphate by pump; check reflexes, respiratory rate and urine output regularly.",
        "Keep calcium gluconate ready; stop the infusion and call for help if toxicity is suspected.",
        "Maintain a calm, quiet environment and be prepared to manage a seizure and the airway."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "Name the antihypertensive drugs used in pregnancy and state which must be avoided.",
      "Explain the uses of magnesium sulphate in pre-eclampsia and eclampsia.",
      "Describe the signs of magnesium sulphate toxicity in order of appearance.",
      "What is the antidote to magnesium sulphate and how is it given?",
      "Outline the midwife's role in caring for a woman receiving magnesium sulphate."
    ],
    assessment: [
      { type: "mcq", q: "The drug of choice to prevent and treat eclamptic fits is:", options: ["Ergometrine", "Magnesium sulphate", "Oxytocin", "Heparin"], answer: 1, rationale: "Magnesium sulphate prevents and controls eclamptic seizures." },
      { type: "mcq", q: "The antidote for magnesium sulphate toxicity is:", options: ["Calcium gluconate", "Vitamin K", "Naloxone", "Protamine"], answer: 0, rationale: "Calcium gluconate is given IV to reverse magnesium toxicity." },
      { type: "mcq", q: "An EARLY sign of magnesium sulphate toxicity is:", options: ["Loss of the patellar (knee) reflex", "Bright red bleeding", "High fever", "Hair loss"], answer: 0, rationale: "Loss of deep tendon reflexes is an early warning of rising magnesium." },
      { type: "mcq", q: "Which antihypertensive must be AVOIDED in pregnancy?", options: ["Labetalol", "Methyldopa", "ACE inhibitors", "Nifedipine"], answer: 2, rationale: "ACE inhibitors (and ARBs) cause fetal harm and are avoided in pregnancy." },
      { type: "mcq", q: "A vasodilator used IV for acute severe hypertension in pregnancy is:", options: ["Hydralazine", "Oxytocin", "Insulin", "Iron"], answer: 0, rationale: "Hydralazine is used IV to lower acutely severe blood pressure." },
      { type: "mcq", q: "During a magnesium sulphate infusion the midwife regularly checks reflexes, urine output and:", options: ["Respiratory rate", "Hair growth", "Blood group", "Appetite"], answer: 0, rationale: "Respiratory depression is a key toxicity sign, so respiratory rate is monitored." },
      { type: "mcq", q: "Reduced urine output during magnesium therapy is dangerous because magnesium is excreted by the:", options: ["Lungs", "Kidneys", "Skin", "Liver"], answer: 1, rationale: "Magnesium is renally excreted; oliguria leads to accumulation and toxicity." },
      { type: "mcq", q: "Pre-eclampsia is defined as hypertension after 20 weeks with:", options: ["Protein in the urine / organ involvement", "Low blood sugar", "Anaemia only", "Twins only"], answer: 0, rationale: "Pre-eclampsia is hypertension plus proteinuria/multi-organ involvement after 20 weeks." },
      { type: "mcq", q: "A long-established, centrally acting antihypertensive considered safe in pregnancy is:", options: ["Methyldopa", "Warfarin", "Misoprostol", "Atosiban"], answer: 0, rationale: "Methyldopa has a long record of safe use in pregnancy." },
      { type: "mcq", q: "If magnesium toxicity is suspected, the midwife should FIRST:", options: ["Increase the infusion", "Stop the infusion and call for help", "Give more magnesium", "Do nothing"], answer: 1, rationale: "Stop the infusion immediately, summon help and prepare calcium gluconate." },
      { type: "fill", q: "The seizure that may complicate severe pre-eclampsia is called ____.", accept: ["eclampsia"], rationale: "Eclampsia is the occurrence of convulsions in pre-eclampsia." },
      { type: "fill", q: "The antidote that must always be available when giving magnesium sulphate is ____.", accept: ["calcium gluconate", "calcium"], rationale: "Calcium gluconate reverses magnesium toxicity." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "mph-08-analgesia",
    unit: "Unit 4 · Anti-infectives, Analgesia & Supportive Drugs",
    title: "Analgesia & Anaesthesia in Labour",
    readMinutes: 17,
    summary: "The drugs and methods used to relieve pain in labour — simple analgesics, opioids, Entonox and regional (epidural) anaesthesia — their actions, effects on mother and baby, and the midwife's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Pain relief in labour", p: "Labour pain is severe and individual. The midwife offers a range of options from non-drug methods (support, position, breathing, water) through to drugs, helping the woman make an informed choice. Drug analgesia must relieve the mother's pain while keeping both mother and baby safe — many analgesics cross the placenta." },
      { h: "Non-opioid analgesics", list: [
        "Paracetamol — useful for mild pain and in early labour; safe in pregnancy at recommended doses.",
        "NSAIDs (e.g. ibuprofen, diclofenac) — useful AFTER birth for afterpains and perineal pain, but generally AVOIDED in the third trimester because they can affect the fetal ductus arteriosus and kidneys."
      ] },
      { h: "Inhalational analgesia — Entonox", list: [
        "Entonox is a 50:50 mixture of nitrous oxide and oxygen, self-administered by the woman through a mouthpiece.",
        "Action — provides quick, short-lasting analgesia; it works fast and wears off fast.",
        "Advantages — the woman controls it, it does not accumulate, and it has no lasting effect on the baby.",
        "Side effects — light-headedness, nausea, dry mouth; she should breathe it with the start of a contraction for best effect."
      ] },
      { h: "Opioid analgesia", list: [
        "Examples — pethidine, morphine and diamorphine (given IM or IV), and remifentanil by patient-controlled IV in some units.",
        "Action — bind opioid receptors to reduce pain perception.",
        "Maternal side effects — sedation, nausea and vomiting (an antiemetic is often given), and slowed gastric emptying.",
        "Effect on the baby — opioids cross the placenta and can cause neonatal respiratory depression and drowsiness, especially if given close to birth; naloxone is the opioid antidote and may be used for the newborn.",
        "Midwifery point — time opioids so the baby is not born at the drug's peak; watch the newborn's breathing."
      ] },
      { h: "Regional anaesthesia — epidural", list: [
        "An epidural delivers local anaesthetic (often with a small dose of opioid) into the epidural space to block pain from the lower body; it gives the most effective pain relief in labour.",
        "It is sited and managed by an anaesthetist; the midwife monitors closely.",
        "Side effects/risks — low blood pressure (so IV fluids and BP monitoring are needed), reduced ability to feel the urge to push or to pass urine (a catheter may be needed), and a longer second stage.",
        "It has little direct sedative effect on the baby because little drug reaches the circulation."
      ], figure: {
        caption: "Labour analgesia options from simple to regional.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ladder of labour analgesia options."><rect x="15" y="45" width="120" height="55" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="75" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Simple</text><text x="75" y="87" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">paracetamol</text><rect x="150" y="45" width="120" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="210" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Inhaled</text><text x="210" y="87" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">Entonox</text><rect x="285" y="45" width="120" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="345" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Opioid</text><text x="345" y="87" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">pethidine</text><rect x="420" y="45" width="125" height="55" rx="9" fill="#831843"/><text x="482" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#FDF2F8">Regional</text><text x="482" y="87" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#FDF2F8">epidural</text></svg>'
      } },
      { h: "Role of the midwife", list: [
        "Discuss options early and support informed choice and consent.",
        "Encourage non-drug methods and offer Entonox as labour progresses.",
        "Give opioids with an antiemetic and time them away from imminent birth.",
        "For epidurals, monitor blood pressure, the fetal heart, the block level and the bladder.",
        "Observe the newborn for respiratory depression after maternal opioids and have naloxone available."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "List the methods of pain relief in labour from simple to regional.",
      "Describe Entonox, its action and its advantages for labour analgesia.",
      "Discuss the effects of opioid analgesia on mother and newborn.",
      "Explain the benefits and risks of epidural analgesia in labour.",
      "What is the midwife's role in pain management during labour?"
    ],
    assessment: [
      { type: "mcq", q: "Entonox used in labour is a mixture of:", options: ["Oxygen and carbon dioxide", "Nitrous oxide and oxygen (50:50)", "Air and pethidine", "Oxygen and ergometrine"], answer: 1, rationale: "Entonox is a 50:50 nitrous oxide/oxygen mixture, self-administered." },
      { type: "mcq", q: "The MOST effective form of pain relief in labour is:", options: ["Paracetamol", "Entonox", "Epidural analgesia", "A warm bath"], answer: 2, rationale: "Regional (epidural) analgesia provides the most effective labour pain relief." },
      { type: "mcq", q: "A major concern when giving an opioid close to birth is:", options: ["Maternal weight gain", "Neonatal respiratory depression", "Faster labour", "Increased milk"], answer: 1, rationale: "Opioids cross the placenta and may depress the newborn's breathing." },
      { type: "mcq", q: "The antidote for opioid-induced respiratory depression in the newborn is:", options: ["Calcium gluconate", "Naloxone", "Vitamin K", "Magnesium"], answer: 1, rationale: "Naloxone reverses opioid effects." },
      { type: "mcq", q: "NSAIDs are generally AVOIDED in the third trimester because they can:", options: ["Increase milk", "Affect the fetal ductus arteriosus and kidneys", "Cause twins", "Whiten teeth"], answer: 1, rationale: "NSAIDs can close the ductus prematurely and impair fetal kidneys near term." },
      { type: "mcq", q: "An important side effect of epidural analgesia the midwife monitors for is:", options: ["High blood pressure", "Low blood pressure (hypotension)", "Hair loss", "Increased fetal weight"], answer: 1, rationale: "Epidurals can cause hypotension, so BP and IV fluids are monitored." },
      { type: "mcq", q: "An advantage of Entonox is that it:", options: ["Accumulates over hours", "Is controlled by the woman and wears off quickly", "Always sedates the baby", "Needs an anaesthetist"], answer: 1, rationale: "Entonox is self-administered, acts and clears quickly, and does not accumulate." },
      { type: "mcq", q: "Opioids in labour are often given together with an:", options: ["Antiemetic", "Antibiotic", "Anticoagulant", "Antihypertensive"], answer: 0, rationale: "Opioids cause nausea/vomiting, so an antiemetic is commonly given." },
      { type: "mcq", q: "A woman with an epidural may need a urinary catheter because she:", options: ["Drinks too much", "May not feel the urge to pass urine", "Has an infection", "Is dehydrated"], answer: 1, rationale: "The block reduces bladder sensation, risking retention." },
      { type: "mcq", q: "Which is a SIMPLE analgesic suitable for early labour?", options: ["Pethidine", "Paracetamol", "Epidural", "Diamorphine"], answer: 1, rationale: "Paracetamol is a simple non-opioid analgesic for mild pain." },
      { type: "fill", q: "The 50:50 nitrous oxide and oxygen gas self-administered in labour is called ____.", accept: ["Entonox", "entonox"], rationale: "Entonox gives rapid, short-lasting inhalational analgesia." },
      { type: "fill", q: "Local anaesthetic placed in the epidural space to relieve labour pain provides ____ analgesia.", accept: ["epidural", "regional"], rationale: "An epidural is a form of regional analgesia." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "mph-09-antibiotics",
    unit: "Unit 4 · Anti-infectives, Analgesia & Supportive Drugs",
    title: "Antibiotics & Anti-infectives in Obstetrics",
    readMinutes: 17,
    summary: "Common antibiotic groups, their safe use in pregnancy and the puerperium, treatment of obstetric infections and STIs, antibiotic resistance, and the midwife's responsibilities.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Infection in childbearing women", p: "Infection is a major cause of maternal and newborn illness and death — for example sepsis after birth or after abortion, urinary infection, chorioamnionitis, mastitis and sexually transmitted infections. Antibiotics are used to treat and sometimes to prevent these infections, but they must be chosen carefully because some are unsafe in pregnancy and breastfeeding." },
      { h: "How antibiotics work", p: "Antibiotics either kill bacteria (bactericidal) or stop them multiplying so the body can clear them (bacteriostatic). They act on targets bacteria have but human cells do not — for example the bacterial cell wall (penicillins) or bacterial protein synthesis (macrolides). They have no effect on viruses." },
      { h: "Common groups and safety in pregnancy", list: [
        "Penicillins (e.g. amoxicillin, benzylpenicillin) — widely used and considered safe in pregnancy; watch for allergy.",
        "Cephalosporins (e.g. cefuroxime) — generally safe; broad-spectrum.",
        "Macrolides (e.g. erythromycin, azithromycin) — useful, especially in penicillin allergy.",
        "Metronidazole — used for anaerobic and certain protozoal infections (e.g. bacterial vaginosis, trichomonas).",
        "AVOID in pregnancy — tetracyclines (affect fetal teeth and bone) and, generally, aminoglycosides and certain others except when essential.",
        "Nitrofurantoin — used for UTI but avoided near term."
      ] },
      { h: "Antibiotics in obstetric situations", list: [
        "Maternal/puerperal sepsis — prompt broad-spectrum antibiotics save lives ('treat early').",
        "Post-abortion care (PAC) and septic abortion — antibiotics plus removal of retained products.",
        "Preterm prelabour rupture of membranes — antibiotics to reduce infection.",
        "Caesarean section — prophylactic antibiotic to prevent wound and uterine infection.",
        "Group B streptococcus — intrapartum penicillin to protect the newborn.",
        "Mastitis — antibiotics (often flucloxacillin) while continuing breastfeeding."
      ] },
      { h: "Sexually transmitted infections in pregnancy", list: [
        "Syphilis — treated with penicillin; screening and treatment prevent congenital syphilis.",
        "Gonorrhoea and chlamydia — treated to prevent neonatal eye infection and other harm.",
        "Trichomonas and bacterial vaginosis — treated with metronidazole.",
        "Partners should be treated and the woman counselled to prevent reinfection."
      ] },
      { h: "Antibiotic resistance and good practice", p: "Overuse and misuse of antibiotics breed resistant bacteria that no longer respond to treatment. Good antibiotic stewardship means using antibiotics only when truly needed, choosing the right drug, giving the full course, and not using them for viral illnesses.", figure: {
        caption: "Antibiotic stewardship — right drug, right dose, full course, only when needed.",
        svg: '<svg viewBox="0 0 520 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Antibiotic stewardship principles."><rect x="15" y="40" width="115" height="55" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="72" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Only when</text><text x="72" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">needed</text><rect x="145" y="40" width="115" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="202" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Right drug</text><text x="202" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">&amp; dose</text><rect x="275" y="40" width="115" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="332" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Full course</text><rect x="405" y="40" width="115" height="55" rx="9" fill="#FDF2F8" stroke="#15803D" stroke-width="2"/><text x="462" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">Not for</text><text x="462" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">viruses</text></svg>'
      } },
      { h: "Role of the midwife", list: [
        "Recognise signs of sepsis early (fever, tachycardia, offensive lochia, abdominal pain) and act fast.",
        "Take specimens (e.g. swabs, urine) before antibiotics where possible.",
        "Give antibiotics on time, ask about allergy, and watch for reactions.",
        "Teach the woman to complete the full course and to continue breastfeeding when safe.",
        "Promote infection prevention and rational antibiotic use."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "Name the common antibiotic groups and comment on their safety in pregnancy.",
      "Differentiate bactericidal and bacteriostatic antibiotics and explain why antibiotics do not treat viruses.",
      "Describe the use of antibiotics in maternal sepsis and post-abortion care.",
      "How are sexually transmitted infections in pregnancy managed and why is this important?",
      "Explain antibiotic resistance and the midwife's role in good antibiotic practice."
    ],
    assessment: [
      { type: "mcq", q: "Which antibiotic group is widely used and considered safe in pregnancy?", options: ["Tetracyclines", "Penicillins", "Aminoglycosides routinely", "None are safe"], answer: 1, rationale: "Penicillins have a long record of safe use in pregnancy (allergy aside)." },
      { type: "mcq", q: "Tetracyclines are avoided in pregnancy because they affect fetal:", options: ["Teeth and bone", "Hearing only", "Eyes only", "Hair"], answer: 0, rationale: "Tetracyclines stain teeth and affect developing bone." },
      { type: "mcq", q: "An antibiotic that KILLS bacteria is described as:", options: ["Bacteriostatic", "Bactericidal", "Antiviral", "Antifungal"], answer: 1, rationale: "Bactericidal drugs kill bacteria; bacteriostatic ones stop them multiplying." },
      { type: "mcq", q: "Congenital infection of the newborn is prevented by treating maternal ____ with penicillin.", options: ["Asthma", "Syphilis", "Anaemia", "Diabetes"], answer: 1, rationale: "Maternal syphilis treated with penicillin prevents congenital syphilis." },
      { type: "mcq", q: "Antibiotics have NO effect on:", options: ["Bacteria", "Viruses", "Their cell wall", "Protein synthesis"], answer: 1, rationale: "Antibiotics target bacteria, not viruses." },
      { type: "mcq", q: "For penicillin-allergic women, a useful alternative group is the:", options: ["Macrolides (e.g. erythromycin)", "Tetracyclines", "Sulfonamides only", "No alternative"], answer: 0, rationale: "Macrolides are a common alternative when penicillin cannot be used." },
      { type: "mcq", q: "Metronidazole is typically used to treat:", options: ["Asthma", "Anaerobic and certain protozoal infections", "Hypertension", "Anaemia"], answer: 1, rationale: "Metronidazole treats anaerobes and protozoa such as trichomonas." },
      { type: "mcq", q: "In suspected maternal sepsis the key principle is to:", options: ["Wait and watch for days", "Give appropriate antibiotics early", "Avoid antibiotics", "Give vitamins only"], answer: 1, rationale: "Early antibiotics in sepsis save lives ('treat early')." },
      { type: "mcq", q: "Antibiotic resistance is worsened by:", options: ["Completing the full course", "Overuse and misuse of antibiotics", "Treating only proven infection", "Using narrow-spectrum drugs appropriately"], answer: 1, rationale: "Overuse/misuse selects for resistant bacteria." },
      { type: "mcq", q: "Mastitis in a breastfeeding mother is treated with antibiotics while she should:", options: ["Stop breastfeeding permanently", "Continue breastfeeding", "Avoid all fluids", "Take tetracycline"], answer: 1, rationale: "Continuing breastfeeding/expressing aids drainage and recovery." },
      { type: "fill", q: "An antibiotic that stops bacteria multiplying without killing them is called ____.", accept: ["bacteriostatic"], rationale: "Bacteriostatic drugs inhibit multiplication so the body can clear the infection." },
      { type: "fill", q: "Using antibiotics wisely to slow resistance is called antibiotic ____.", accept: ["stewardship"], rationale: "Stewardship means right drug, right dose, full course, only when needed." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "mph-10-antid-vaccines",
    unit: "Unit 4 · Anti-infectives, Analgesia & Supportive Drugs",
    title: "Anti-D Immunoglobulin & Vaccines in Pregnancy",
    readMinutes: 16,
    summary: "How anti-D prevents rhesus disease of the newborn, the vaccines recommended and avoided in pregnancy, and the midwife's role in immunisation and informed consent.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Rhesus (Rh) disease — the problem", p: "If a Rh-negative woman carries a Rh-positive baby, fetal Rh-positive cells can enter her blood and make her produce anti-D antibodies (sensitisation). In a later Rh-positive pregnancy these antibodies cross the placenta and destroy the baby's red cells, causing haemolytic disease of the newborn (anaemia, jaundice, in severe cases hydrops). The aim is to PREVENT the mother becoming sensitised." },
      { h: "Anti-D immunoglobulin — how it works", p: "Anti-D immunoglobulin is a preparation of ready-made antibody given to a Rh-negative woman. It mops up any fetal Rh-positive cells in her circulation before her own immune system can react to them, so she does not make her own lasting anti-D antibodies. It is given by intramuscular injection.", figure: {
        caption: "Anti-D removes fetal Rh-positive cells before the mother is sensitised.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Anti-D prophylaxis mechanism."><defs><marker id="mphArr10" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="50" width="150" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="90" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Fetal Rh+ cells</text><text x="90" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">enter mother</text><rect x="195" y="50" width="150" height="55" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="270" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Anti-D given</text><text x="270" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">mops up cells</text><rect x="375" y="50" width="150" height="55" rx="9" fill="#FDF2F8" stroke="#15803D" stroke-width="2"/><text x="450" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">No sensitisation</text><text x="450" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">baby protected</text><line x1="165" y1="77" x2="191" y2="77" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr10)"/><line x1="345" y1="77" x2="371" y2="77" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr10)"/></svg>'
      } },
      { h: "When anti-D is given", list: [
        "Routine antenatal prophylaxis in the third trimester for Rh-negative women.",
        "After birth if the baby is found to be Rh-positive (given within 72 hours).",
        "After any potentially sensitising event — miscarriage, ectopic pregnancy, termination, antepartum bleeding, amniocentesis, external cephalic version or abdominal trauma.",
        "It is NOT useful once the woman is already sensitised (already has anti-D antibodies)."
      ] },
      { h: "Vaccines RECOMMENDED in pregnancy", list: [
        "Tetanus toxoid — protects mother and prevents neonatal tetanus (very important in many settings).",
        "Inactivated influenza vaccine — protects the mother from severe flu.",
        "Pertussis (whooping cough) vaccine — given in pregnancy so antibodies protect the newborn.",
        "These are inactivated (killed) vaccines and are safe in pregnancy."
      ] },
      { h: "Vaccines to AVOID in pregnancy", list: [
        "Live vaccines such as MMR (measles, mumps, rubella), varicella and yellow fever are generally avoided because of a theoretical risk to the fetus.",
        "Rubella vaccine should be given before pregnancy or in the postnatal period, and pregnancy avoided for a short time afterwards.",
        "If a non-immune woman is exposed, advice is sought rather than vaccinating in pregnancy."
      ] },
      { h: "Role of the midwife", list: [
        "Check and record the woman's blood group and antibody status early.",
        "Identify Rh-negative women and ensure anti-D is given at the right times, including after sensitising events.",
        "Take a Kleihauer/cord blood sample after birth as policy requires.",
        "Offer recommended vaccines (tetanus, influenza, pertussis) and explain their benefits.",
        "Advise that live vaccines are deferred and arrange rubella vaccination postnatally for non-immune women.",
        "Obtain informed consent and record all immunisations."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "Explain how rhesus disease of the newborn develops and how it is prevented.",
      "Describe how anti-D immunoglobulin works and when it should be given.",
      "List the vaccines recommended in pregnancy and explain their benefits.",
      "Which vaccines are avoided in pregnancy and why?",
      "Outline the midwife's role in anti-D administration and immunisation."
    ],
    assessment: [
      { type: "mcq", q: "Anti-D immunoglobulin is given to women who are:", options: ["Rh-positive", "Rh-negative", "Blood group O only", "Diabetic"], answer: 1, rationale: "Rh-negative women are at risk of sensitisation and receive anti-D." },
      { type: "mcq", q: "Anti-D works by:", options: ["Boosting the woman's own anti-D production", "Removing fetal Rh-positive cells before the mother reacts", "Killing bacteria", "Lowering blood pressure"], answer: 1, rationale: "It clears fetal Rh-positive cells, preventing maternal sensitisation." },
      { type: "mcq", q: "After birth, anti-D should be given to an eligible woman within:", options: ["72 hours", "2 weeks", "1 hour exactly", "30 days"], answer: 0, rationale: "Postnatal anti-D is given within 72 hours of birth of a Rh-positive baby." },
      { type: "mcq", q: "Anti-D is NOT useful when the woman:", options: ["Has had a miscarriage", "Is already sensitised (already has anti-D antibodies)", "Is Rh-negative", "Has had bleeding"], answer: 1, rationale: "Once sensitised, prophylaxis cannot reverse existing antibodies." },
      { type: "mcq", q: "Which vaccine given in pregnancy prevents neonatal tetanus?", options: ["MMR", "Tetanus toxoid", "Yellow fever", "Varicella"], answer: 1, rationale: "Tetanus toxoid protects the mother and prevents neonatal tetanus." },
      { type: "mcq", q: "Which vaccine is AVOIDED in pregnancy?", options: ["Inactivated influenza", "Tetanus toxoid", "MMR (live)", "Pertussis"], answer: 2, rationale: "MMR is a live vaccine and is avoided in pregnancy." },
      { type: "mcq", q: "Pertussis vaccine is given in pregnancy mainly to:", options: ["Treat the mother's infection", "Pass protective antibodies to the newborn", "Lower blood pressure", "Prevent anaemia"], answer: 1, rationale: "Maternal pertussis vaccination passes antibodies that protect the newborn." },
      { type: "mcq", q: "Haemolytic disease of the newborn in rhesus disease results from antibodies that:", options: ["Increase red cells", "Destroy the baby's red cells", "Treat jaundice", "Prevent infection"], answer: 1, rationale: "Maternal anti-D crosses the placenta and destroys fetal red cells." },
      { type: "mcq", q: "Rubella vaccination for a non-immune woman is best given:", options: ["In the first trimester", "Before pregnancy or postnatally", "During labour", "Never"], answer: 1, rationale: "Being live, rubella vaccine is given pre-conception or after birth, not in pregnancy." },
      { type: "mcq", q: "A potentially sensitising event requiring anti-D in a Rh-negative woman is:", options: ["A normal blood pressure", "Antepartum haemorrhage or amniocentesis", "Taking folic acid", "Eating well"], answer: 1, rationale: "Bleeding and invasive procedures can cause feto-maternal haemorrhage needing anti-D." },
      { type: "fill", q: "Anti-D is given to prevent ____ of a Rh-negative woman against the D antigen.", accept: ["sensitisation", "sensitization", "isoimmunisation", "isoimmunization"], rationale: "Anti-D prevents the woman forming her own lasting anti-D antibodies." },
      { type: "fill", q: "Live vaccines such as ____ are avoided in pregnancy because of theoretical fetal risk.", accept: ["MMR", "rubella"], rationale: "Live vaccines (MMR/rubella) are deferred until after pregnancy." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "mph-11-supplements",
    unit: "Unit 4 · Anti-infectives, Analgesia & Supportive Drugs",
    title: "Iron, Folic Acid, Calcium & Nutritional Supplements in Pregnancy",
    readMinutes: 16,
    summary: "The supplements used in pregnancy — iron and folic acid for anaemia and neural tube defect prevention, calcium and vitamin D, and the midwife's role in advice and adherence.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why supplements matter in pregnancy", p: "Pregnancy increases the need for several nutrients. The growing baby, the larger maternal blood volume and the placenta all demand extra iron, folate and other nutrients. Deficiencies are common and can harm both mother and baby, so supplements are an important, simple and cheap part of antenatal care." },
      { h: "Iron", list: [
        "Why — iron is needed to make haemoglobin; demand rises greatly in pregnancy, and deficiency causes iron-deficiency anaemia (the commonest anaemia in pregnancy).",
        "Effects of anaemia — tiredness, breathlessness, poor tolerance of blood loss at birth, and risk of low birth weight and preterm birth.",
        "Forms — oral ferrous salts (e.g. ferrous sulphate) are first-line; intravenous iron or, rarely, transfusion is used for severe cases.",
        "Side effects — nausea, constipation, dark stools; taking with vitamin C (e.g. citrus) aids absorption, while tea, calcium and antacids reduce it.",
        "Iron can be fatal in overdose, especially to children — store safely."
      ] },
      { h: "Folic acid", list: [
        "Why — folate is needed for cell division and for the baby's developing neural tube.",
        "Key fact — folic acid taken BEFORE conception and in the first trimester reduces the risk of neural tube defects (such as spina bifida).",
        "Practice — a standard dose is recommended for all women planning pregnancy and in early pregnancy; a higher dose is used for higher-risk women (e.g. previous affected baby, diabetes, or on certain antiepileptics).",
        "It is also given with iron to help treat anaemia."
      ] },
      { h: "Calcium and vitamin D", list: [
        "Calcium — important for the baby's bones and teeth and for maternal bone health; calcium supplementation is recommended where dietary intake is low and may reduce the risk of pre-eclampsia.",
        "Vitamin D — needed for calcium absorption and bone health; supplementation is advised for many pregnant women, especially those with little sun exposure.",
        "Iodine and other micronutrients — important in some settings for fetal brain development."
      ] },
      { h: "Putting it together", p: "In many programmes pregnant women routinely receive iron and folic acid together, with calcium and vitamin D as indicated. The midwife tailors advice to the woman's diet, haemoglobin and local guidelines.", figure: {
        caption: "Core antenatal supplements and their main purpose.",
        svg: '<svg viewBox="0 0 540 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Antenatal supplements and purposes."><rect x="15" y="40" width="120" height="60" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="75" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Iron</text><text x="75" y="83" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">anaemia</text><rect x="150" y="40" width="120" height="60" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="210" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Folic acid</text><text x="210" y="83" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">neural tube</text><rect x="285" y="40" width="120" height="60" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="345" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#BE185D">Calcium</text><text x="345" y="83" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">bones/pre-eclampsia</text><rect x="420" y="40" width="105" height="60" rx="9" fill="#FDF2F8" stroke="#15803D" stroke-width="2"/><text x="472" y="64" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Vitamin D</text><text x="472" y="83" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">Ca absorption</text></svg>'
      } },
      { h: "Role of the midwife", list: [
        "Check haemoglobin and assess for anaemia at antenatal visits.",
        "Prescribe/dispense iron and folic acid per guidelines and explain why they matter.",
        "Teach how to take iron (with vitamin C, away from tea/antacids) and manage side effects to improve adherence.",
        "Stress folic acid BEFORE and in early pregnancy for neural tube defect prevention.",
        "Advise on a balanced diet and safe storage of supplements away from children.",
        "Refer severe anaemia for further treatment."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "Explain why iron requirements rise in pregnancy and the consequences of iron-deficiency anaemia.",
      "Describe how to take oral iron to maximise absorption and minimise side effects.",
      "Why is folic acid important before and in early pregnancy?",
      "Discuss the role of calcium and vitamin D supplementation in pregnancy.",
      "Outline the midwife's role in promoting supplement use and adherence."
    ],
    assessment: [
      { type: "mcq", q: "The commonest cause of anaemia in pregnancy is deficiency of:", options: ["Calcium", "Iron", "Vitamin D", "Iodine"], answer: 1, rationale: "Iron-deficiency anaemia is the commonest anaemia in pregnancy." },
      { type: "mcq", q: "Folic acid taken before and in early pregnancy reduces the risk of:", options: ["Neural tube defects", "Diabetes", "Hypertension", "Twins"], answer: 0, rationale: "Folic acid prevents neural tube defects such as spina bifida." },
      { type: "mcq", q: "Oral iron absorption is IMPROVED when taken with:", options: ["Tea", "Vitamin C (e.g. citrus)", "Antacids", "Milk"], answer: 1, rationale: "Vitamin C enhances iron absorption; tea, calcium and antacids reduce it." },
      { type: "mcq", q: "A common side effect of oral iron is:", options: ["Diarrhoea always", "Constipation and dark stools", "Hair loss", "Fever"], answer: 1, rationale: "Iron commonly causes constipation, nausea and dark stools." },
      { type: "mcq", q: "Calcium supplementation in pregnancy may help reduce the risk of:", options: ["Pre-eclampsia", "Infection", "Bleeding", "Diabetes"], answer: 0, rationale: "Calcium supplementation, where intake is low, may lower pre-eclampsia risk." },
      { type: "mcq", q: "Vitamin D is supplemented mainly because it is needed for:", options: ["Calcium absorption and bone health", "Making haemoglobin", "Pain relief", "Clotting"], answer: 0, rationale: "Vitamin D aids calcium absorption and bone health." },
      { type: "mcq", q: "Iron is needed in pregnancy chiefly to make:", options: ["Bile", "Haemoglobin", "Insulin", "Folate"], answer: 1, rationale: "Iron is essential for haemoglobin synthesis, which rises in pregnancy." },
      { type: "mcq", q: "Women at higher risk (e.g. previous neural tube defect) are given:", options: ["No folic acid", "A higher dose of folic acid", "Iron only", "Calcium only"], answer: 1, rationale: "Higher-risk women receive a higher dose of folic acid." },
      { type: "mcq", q: "An important safety message about iron tablets is that they:", options: ["Are harmless in overdose", "Can be fatal in overdose, especially to children", "Should be shared", "Whiten teeth"], answer: 1, rationale: "Iron overdose is dangerous, particularly for young children — store safely." },
      { type: "mcq", q: "Severe iron-deficiency anaemia at term increases the risk at birth of:", options: ["Better blood loss tolerance", "Poor tolerance of blood loss", "No effect", "Excess milk"], answer: 1, rationale: "Anaemia reduces reserve and worsens tolerance of haemorrhage at birth." },
      { type: "fill", q: "Folic acid before conception and in early pregnancy prevents ____ defects such as spina bifida.", accept: ["neural tube", "neural-tube"], rationale: "Folate is essential for closure of the neural tube." },
      { type: "fill", q: "Oral iron should be taken away from tea and antacids and ideally with ____ to aid absorption.", accept: ["vitamin C", "vitamin c", "ascorbic acid"], rationale: "Vitamin C enhances absorption of dietary and supplemental iron." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "mph-12-breastfeeding-resus",
    unit: "Unit 4 · Anti-infectives, Analgesia & Supportive Drugs",
    title: "Drugs & Breastfeeding and Emergency / Neonatal Resuscitation Drugs",
    readMinutes: 17,
    summary: "How drugs pass into breast milk and which are safe or avoided while breastfeeding, plus the key drugs used in obstetric and neonatal emergencies including resuscitation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Drugs and breastfeeding — the principle", p: "Most maternal medicines pass into breast milk only in small amounts, and for the great majority breastfeeding can safely continue. The benefits of breastfeeding are large, so a drug should be stopped or breastfeeding interrupted only when there is a real risk. The midwife checks each drug (e.g. in the BNF) rather than assuming, and helps the mother continue feeding wherever possible." },
      { h: "What makes a drug pass into milk", list: [
        "Lipid (fat) solubility — fat-soluble drugs cross more easily.",
        "Low molecular weight — small molecules pass more readily.",
        "Low protein binding — only free drug crosses into milk.",
        "Long half-life — drugs that linger can accumulate in the baby.",
        "Timing — taking a drug just after a feed lowers the amount the baby receives at the next feed."
      ] },
      { h: "Drugs usually SAFE in breastfeeding", list: [
        "Paracetamol and most penicillins/cephalosporins.",
        "Most antihypertensives used in pregnancy and many common medicines in normal doses.",
        "Iron, folic acid, calcium and vitamins."
      ] },
      { h: "Drugs to AVOID or use with caution while breastfeeding", list: [
        "Repeated or high-dose opioids — can cause drowsiness and poor feeding in the baby; watch the baby.",
        "Some sedatives and certain psychiatric drugs — seek advice.",
        "Cytotoxic (anticancer) drugs, radioactive agents and some others — breastfeeding is usually contraindicated.",
        "Tetracyclines and a few specific antibiotics — generally avoided.",
        "Always check the drug and observe the baby for drowsiness, poor feeding or unusual signs."
      ] },
      { h: "Emergency drugs in obstetrics — quick reference", list: [
        "Postpartum haemorrhage — uterotonics first: oxytocin, ergometrine, misoprostol (and tranexamic acid to reduce bleeding).",
        "Eclampsia / severe pre-eclampsia — magnesium sulphate (antidote calcium gluconate) and antihypertensives.",
        "Anaphylaxis — adrenaline (epinephrine) IM, plus oxygen and fluids.",
        "Opioid overdose / neonatal opioid depression — naloxone.",
        "These drugs and the means to give them should be ready on every labour ward."
      ] },
      { h: "Neonatal resuscitation drugs", p: "Most newborns who need help respond to drying, warmth, stimulation and effective ventilation (airway and breathing). Drugs are needed only rarely and only after the airway and breathing have been managed.", list: [
        "Oxygen / air with effective ventilation — the FIRST and most important step; ventilation, not drugs, revives most babies.",
        "Adrenaline (epinephrine) — used if the heart rate stays very low despite good ventilation and chest compressions.",
        "Volume expansion (e.g. normal saline) — if blood loss/shock is suspected.",
        "Vitamin K — given to all newborns after birth to prevent haemorrhagic disease (vitamin K deficiency bleeding), not a resuscitation drug but a key newborn medicine.",
        "Naloxone — may be considered for a baby depressed by maternal opioids, only after the airway and breathing are secured."
      ], figure: {
        caption: "Newborn resuscitation: airway and breathing first; drugs are rarely needed.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Order of newborn resuscitation."><defs><marker id="mphArr12" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="15" y="55" width="120" height="50" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="75" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">Warm, dry</text><text x="75" y="94" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">stimulate</text><rect x="155" y="55" width="120" height="50" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="215" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Airway</text><text x="215" y="94" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">+ ventilation</text><rect x="295" y="55" width="120" height="50" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="355" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#BE185D">Compressions</text><text x="355" y="94" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#BE185D">if HR very low</text><rect x="435" y="55" width="95" height="50" rx="9" fill="#FDF2F8" stroke="#7C2D12" stroke-width="2"/><text x="482" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#7C2D12">Drugs</text><text x="482" y="94" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">rarely</text><line x1="135" y1="80" x2="151" y2="80" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr12)"/><line x1="275" y1="80" x2="291" y2="80" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr12)"/><line x1="415" y1="80" x2="431" y2="80" stroke="#831843" stroke-width="2.5" marker-end="url(#mphArr12)"/></svg>'
      } },
      { h: "Role of the midwife", list: [
        "Check whether a mother's medicine is compatible with breastfeeding and support her to continue feeding.",
        "Advise taking medicines just after a feed and observing the baby.",
        "Keep emergency drugs and resuscitation equipment checked and ready.",
        "In newborn resuscitation, prioritise warmth, airway and effective ventilation before any drug.",
        "Give vitamin K to the newborn as policy and consent allow, and record all drugs given."
      ] }
    ],
    references: REF_MPH,
    examQuestions: [
      "What factors determine how much of a drug passes into breast milk?",
      "Name drugs that are generally safe and those to avoid during breastfeeding.",
      "List the key emergency drugs used in obstetrics and their indications.",
      "Describe the priorities of newborn resuscitation and the place of drugs.",
      "Explain why vitamin K is given to the newborn and the midwife's responsibilities."
    ],
    assessment: [
      { type: "mcq", q: "For most maternal medicines taken while breastfeeding, the midwife should advise the mother to:", options: ["Stop breastfeeding immediately", "Continue breastfeeding, checking each drug", "Switch to formula always", "Stop the drug without advice"], answer: 1, rationale: "Most drugs pass in small amounts; breastfeeding usually continues after checking the drug." },
      { type: "mcq", q: "A drug passes into breast milk MORE readily if it is:", options: ["Highly protein-bound", "Large in size", "Lipid-soluble with low molecular weight", "Strongly ionised"], answer: 2, rationale: "Fat-soluble, small, poorly protein-bound drugs cross most easily into milk." },
      { type: "mcq", q: "Which drug class is usually considered safe during breastfeeding?", options: ["Cytotoxic drugs", "Penicillins", "Radioactive agents", "Tetracyclines"], answer: 1, rationale: "Penicillins are generally safe in breastfeeding; cytotoxics and radioisotopes are not." },
      { type: "mcq", q: "The FIRST and most important step in newborn resuscitation is:", options: ["Give adrenaline", "Warm, dry, stimulate and establish airway/ventilation", "Give naloxone", "Chest compressions immediately"], answer: 1, rationale: "Most babies respond to warmth, stimulation and effective ventilation, not drugs." },
      { type: "mcq", q: "Adrenaline is used in neonatal resuscitation when:", options: ["The baby cries at once", "The heart rate stays very low despite good ventilation and compressions", "The baby is pink", "Breastfeeding begins"], answer: 1, rationale: "Adrenaline is reserved for persistent severe bradycardia despite ventilation and compressions." },
      { type: "mcq", q: "The first-line drugs for postpartum haemorrhage are:", options: ["Antibiotics", "Uterotonics (oxytocin, ergometrine, misoprostol)", "Vitamins", "Sedatives"], answer: 1, rationale: "Uterotonics contract the uterus to control PPH; tranexamic acid is an adjunct." },
      { type: "mcq", q: "The drug of choice for anaphylaxis is:", options: ["Adrenaline (epinephrine) IM", "Oxytocin", "Folic acid", "Magnesium"], answer: 0, rationale: "Intramuscular adrenaline is first-line for anaphylaxis." },
      { type: "mcq", q: "Vitamin K is given to the newborn to prevent:", options: ["Anaemia", "Vitamin K deficiency bleeding (haemorrhagic disease)", "Jaundice", "Infection"], answer: 1, rationale: "Vitamin K prevents vitamin K deficiency bleeding of the newborn." },
      { type: "mcq", q: "Naloxone may be considered for a newborn who is depressed by:", options: ["Iron", "Maternal opioids", "Calcium", "Folic acid"], answer: 1, rationale: "Naloxone reverses opioid effects, but only after airway and breathing are secured." },
      { type: "mcq", q: "A practical tip to reduce the drug a breastfed baby receives is to take medicine:", options: ["Just before a feed", "Just after a feed", "During the feed", "Only at night regardless"], answer: 1, rationale: "Taking a drug just after a feed lowers the level at the next feed." },
      { type: "fill", q: "All newborns are given ____ after birth to prevent haemorrhagic disease of the newborn.", accept: ["vitamin K", "vitamin k"], rationale: "Vitamin K prevents vitamin K deficiency bleeding." },
      { type: "fill", q: "In newborn resuscitation, effective ____ of the lungs revives most babies before any drug is needed.", accept: ["ventilation", "breathing"], rationale: "Establishing breathing/ventilation is the key step in newborn resuscitation." }
    ]
  }
];





