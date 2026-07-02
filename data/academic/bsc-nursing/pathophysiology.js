/* ============================================================
   B.Sc. Nursing (BNMC 2018) · Year 3 · B331 Paper I
   — Pathophysiology (degree level). 16 topics.
   Aligned to the BNMC B.Sc. syllabus (Medical & Surgical
   Nursing-2, Paper I). Authored fresh from standard texts:
     • McCance KL, Huether SE. Pathophysiology: The Biologic
       Basis for Disease in Adults and Children. Elsevier.
     • Porth CM, Grossman S. Porth's Essentials of
       Pathophysiology. Wolters Kluwer.
     • Kumar V, Abbas AK, Aster JC. Robbins & Cotran Pathologic
       Basis of Disease. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_PPH = [
  "McCance KL, Huether SE. Pathophysiology: The Biologic Basis for Disease in Adults and Children. Elsevier.",
  "Porth CM, Grossman S. Porth's Essentials of Pathophysiology. Wolters Kluwer.",
  "Kumar V, Abbas AK, Aster JC. Robbins & Cotran Pathologic Basis of Disease. Elsevier."
];

window.Academic.topics["bsc-nursing/pathophysiology"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "pph-01-intro",
    unit: "Unit 1 · General Pathophysiology",
    title: "Introduction to Pathophysiology & Concepts of Disease",
    readMinutes: 24,
    summary: "The scope of pathophysiology; core terminology (etiology, pathogenesis, morphology, clinical manifestations); concepts of health and disease; acute vs chronic disease; risk factors, natural history, and how disturbed function explains the signs nurses observe.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is pathophysiology?", p: "Pathophysiology is the study of the functional (physiological) changes that occur in the body as a result of disease or injury. It bridges normal physiology and clinical medicine: it explains WHY a diseased organ behaves the way it does and HOW those disturbed mechanisms produce the signs and symptoms a nurse detects at the bedside. For the nurse it is the scientific reasoning behind every observation, assessment finding and intervention." },
      { h: "Key terminology", list: [
        "Etiology — the cause(s) of a disease. May be intrinsic (genetic) or extrinsic/acquired (infection, chemicals, trauma, nutrition). 'Idiopathic' means the cause is unknown.",
        "Pathogenesis — the step-by-step sequence of events (mechanism) from the initial stimulus to the final expression of the disease.",
        "Morphology — the structural changes in cells, tissues and organs (gross and microscopic) that are characteristic of a disease.",
        "Clinical manifestations — the signs (objective, measurable, e.g. fever, cyanosis) and symptoms (subjective, felt by the patient, e.g. pain, nausea).",
        "Complications — new pathological events arising secondary to the original disease.",
        "Sequelae — lasting effects that persist after the acute disease resolves.",
        "Prognosis — the predicted outcome or course of the disease."
      ] },
      { h: "Health and disease", p: "Health is a dynamic state of physical, mental and social well-being in which the body maintains homeostasis — a stable internal environment achieved through continuous self-regulation. Disease is a failure of homeostatic adaptation: cellular or organ function is disturbed beyond the body's capacity to compensate, producing structural and functional abnormalities. Understanding disease as 'failed adaptation' explains why early compensatory signs (tachycardia, tachypnoea) appear before overt organ failure." },
      { h: "Homeostasis and compensation", p: "The body defends set-points (e.g. pH 7.35-7.45, core temperature ~37 degrees C, mean arterial pressure ~70-100 mmHg) through negative-feedback loops. When a disease stresses a system, compensatory mechanisms (baroreceptor reflex, renin-angiotensin-aldosterone system, hyperventilation) are recruited first. Clinically, a 'compensated' patient may have near-normal values but abnormal effort; 'decompensation' occurs when reserves are exhausted and values become frankly abnormal." },
      { h: "Levels of disturbed function", list: [
        "Molecular / genetic — abnormal proteins, enzymes or receptors.",
        "Cellular — injury, adaptation, altered metabolism.",
        "Tissue / organ — inflammation, degeneration, fibrosis.",
        "Systemic — organ failure, shock, metabolic derangement.",
        "Whole-person — disability and the illness experience."
      ] },
      { h: "Classification of disease by cause", list: [
        "Congenital / genetic — present from birth (e.g. Down syndrome, cystic fibrosis).",
        "Inflammatory / infective — bacteria, viruses, fungi, parasites.",
        "Immunological — hypersensitivity, autoimmunity, immunodeficiency.",
        "Neoplastic — benign and malignant tumours.",
        "Metabolic / nutritional / endocrine — diabetes, deficiency states.",
        "Degenerative — wear-and-tear and ageing (osteoarthritis).",
        "Traumatic / physical / chemical — mechanical, thermal, radiation, toxins.",
        "Iatrogenic — caused by medical treatment; idiopathic — unknown cause."
      ] },
      { h: "Acute versus chronic disease", p: "Acute disease has a sudden onset, short duration and usually a clear cause and resolution (e.g. acute appendicitis). Chronic disease develops slowly, lasts months to years, often has multiple interacting causes, periods of remission and exacerbation, and may cause progressive disability (e.g. COPD, diabetes). Nursing priorities differ: acute care emphasises rescue and stabilisation, chronic care emphasises self-management, monitoring and prevention of complications." },
      { h: "Natural history and stages of disease", p: "Most diseases pass through: (1) exposure to the cause; (2) a latent or incubation period with no symptoms; (3) a prodromal stage with early non-specific signs (malaise, low fever); (4) the clinical stage of full manifestations; and (5) resolution, chronicity, disability or death. Screening acts in the pre-clinical stage, allowing earlier intervention." },
      { h: "Risk factors and levels of prevention", list: [
        "Modifiable risk factors — smoking, diet, physical inactivity, obesity, hypertension.",
        "Non-modifiable risk factors — age, sex, ethnicity, family history/genetics.",
        "Primary prevention — stops disease before it starts (immunisation, health education).",
        "Secondary prevention — early detection and treatment (screening, blood-pressure checks).",
        "Tertiary prevention — limits disability and prevents complications in established disease (rehabilitation)."
      ] },
      { h: "Manifestations: local vs systemic", p: "Local manifestations are confined to the affected site (redness, swelling, pain of a wound). Systemic (whole-body) manifestations reflect widespread mediator effects (fever, malaise, weight loss, tachycardia). Recognising that a local infection is becoming systemic (rising temperature, tachycardia, hypotension) is a core nursing early-warning skill." },
      { h: "Epidemiological terms", list: [
        "Incidence — number of NEW cases in a population over a period.",
        "Prevalence — total (new + existing) cases at a point in time.",
        "Morbidity — the burden/rate of illness in a population.",
        "Mortality — the rate of death from a disease.",
        "Epidemic, endemic and pandemic — describe disease occurrence relative to expected levels and geography."
      ] },
      { h: "Normal values / key figures", list: [
        "Arterial pH 7.35-7.45; core body temperature ~36.5-37.5 degrees C.",
        "Mean arterial pressure ~70-100 mmHg; resting heart rate 60-100/min.",
        "Respiratory rate 12-20/min; blood glucose (fasting) 70-100 mg/dL (3.9-5.6 mmol/L).",
        "These set-points define the homeostatic 'normal' against which disease is measured."
      ] },
      { h: "Clinical relevance for nursing", p: "Pathophysiological reasoning lets the nurse anticipate rather than merely react: knowing that heart failure raises pulmonary capillary pressure predicts crackles and breathlessness; knowing that sepsis causes vasodilation predicts warm skin then hypotension. This underpins focused assessment, timely escalation, safe medication administration and effective patient education.", figure: {
        caption: "Chain of disease: etiology (cause) leads through pathogenesis (mechanism) to morphological change and finally to the clinical manifestations the nurse observes.",
        svg: '<svg viewBox="0 0 640 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain from etiology to pathogenesis to morphology to clinical manifestations."><defs><marker id="pphArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="50" width="130" height="55" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="75" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">ETIOLOGY</text><text x="75" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">the cause</text><rect x="170" y="50" width="130" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="235" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">PATHOGENESIS</text><text x="235" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">mechanism</text><rect x="330" y="50" width="130" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="395" y="74" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">MORPHOLOGY</text><text x="395" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">structural change</text><rect x="490" y="45" width="140" height="65" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="560" y="70" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">CLINICAL</text><text x="560" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">SIGNS</text><text x="560" y="101" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">nurse observes</text><line x1="140" y1="77" x2="166" y2="77" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#pphArr1)"/><line x1="300" y1="77" x2="326" y2="77" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#pphArr1)"/><line x1="460" y1="77" x2="486" y2="77" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#pphArr1)"/></svg>'
      } }
    ],
    references: REF_PPH,
    examQuestions: [
      "Define pathophysiology and explain its importance in nursing practice.",
      "Differentiate between etiology, pathogenesis and clinical manifestations with an example.",
      "Explain the concept of homeostasis, compensation and decompensation in disease.",
      "Distinguish acute from chronic disease and outline how nursing priorities differ.",
      "Describe the natural history of disease and relate it to the three levels of prevention."
    ],
    assessment: [
      { type: "mcq", q: "A nurse notes tachycardia and tachypnoea in a patient whose blood pressure is still normal. This pattern best illustrates:", options: ["Decompensation", "Compensation", "Idiopathic disease", "Sequelae"], answer: 1, rationale: "Recruited reflexes (raised heart and respiratory rate) maintain a near-normal pressure — the compensated stage before reserves are exhausted." },
      { type: "mcq", q: "The step-by-step mechanism by which a cause produces disease is termed the:", options: ["Etiology", "Prognosis", "Pathogenesis", "Morphology"], answer: 2, rationale: "Pathogenesis is the sequence of events from initial stimulus to final disease expression; etiology is the cause itself." },
      { type: "mcq", q: "A disease with no identifiable cause is described as:", options: ["Iatrogenic", "Idiopathic", "Congenital", "Endemic"], answer: 1, rationale: "Idiopathic = unknown cause. Iatrogenic disease is caused by medical treatment." },
      { type: "mcq", q: "Immunisation of well children against measles is an example of:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Rehabilitation"], answer: 0, rationale: "Primary prevention acts before disease occurs; screening is secondary and rehabilitation is tertiary." },
      { type: "mcq", q: "Which finding is a SIGN rather than a symptom?", options: ["Nausea", "Pain", "Fever of 39 degrees C", "Fatigue"], answer: 2, rationale: "A measured fever is objective (a sign); nausea, pain and fatigue are subjective symptoms reported by the patient." },
      { type: "mcq", q: "The total number of existing and new cases of diabetes in a district at a given time is the:", options: ["Incidence", "Prevalence", "Mortality", "Morbidity rate"], answer: 1, rationale: "Prevalence counts all cases present; incidence counts only new cases arising over a period." },
      { type: "mcq", q: "A key nursing implication of chronic disease compared with acute disease is greater emphasis on:", options: ["Immediate rescue and stabilisation", "Self-management and prevention of complications", "Single-cause elimination", "Short hospital stay only"], answer: 1, rationale: "Chronic disease is long-term with exacerbations, so nursing focuses on self-management, monitoring and preventing complications." },
      { type: "mcq", q: "Lasting effects that persist after an acute illness has resolved are called:", options: ["Complications", "Sequelae", "Prodrome", "Etiology"], answer: 1, rationale: "Sequelae are residual, lasting consequences; complications are new events arising during the disease." },
      { type: "mcq", q: "The early, non-specific stage with vague symptoms such as malaise and low-grade fever is the:", options: ["Latent stage", "Prodromal stage", "Convalescent stage", "Terminal stage"], answer: 1, rationale: "The prodrome is the early symptomatic phase preceding full clinical manifestations." },
      { type: "mcq", q: "Recognising that a localised wound infection is becoming systemic is BEST supported by noting:", options: ["Only local redness", "Rising temperature, tachycardia and falling blood pressure", "Wound dressing colour", "The patient's food preferences"], answer: 1, rationale: "Systemic spread produces whole-body mediator effects — fever, tachycardia and hypotension — the basis of nursing early warning." }
      , { type: "fill", q: "A stable internal environment maintained by self-regulation is called ____.", accept: ["homeostasis"], rationale: "Disease represents a failure of homeostatic adaptation." }
      , { type: "fill", q: "Objective, measurable findings are ____ whereas subjective experiences reported by the patient are symptoms.", accept: ["signs", "sign"], rationale: "Signs are observed and measured; symptoms are felt and reported." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "pph-02-cell-injury",
    unit: "Unit 1 · General Pathophysiology",
    title: "Cellular Injury, Adaptation & Cell Death",
    readMinutes: 26,
    summary: "How cells respond to stress: reversible and irreversible injury, the major causes and mechanisms (hypoxia, free radicals, calcium overload), cellular adaptations (atrophy, hypertrophy, hyperplasia, metaplasia, dysplasia), and the two forms of cell death — necrosis and apoptosis.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The cell under stress", p: "Cells continuously adjust to their environment to maintain a steady internal state. When a stressor exceeds the cell's ability to adapt, injury results. If the stress is mild or brief the injury is reversible; if severe or prolonged it becomes irreversible and the cell dies. Understanding this continuum explains why early, timely intervention (restoring oxygen and perfusion) can rescue tissue before permanent loss." },
      { h: "Causes of cell injury", list: [
        "Hypoxia and ischaemia — the commonest and most important cause; reduced oxygen delivery (from anaemia, poor perfusion or airway obstruction).",
        "Physical agents — trauma, extremes of temperature, radiation, electric shock.",
        "Chemical agents and drugs — poisons, alcohol, therapeutic drug toxicity.",
        "Infectious agents — bacteria, viruses, fungi, parasites.",
        "Immunological reactions — hypersensitivity and autoimmune injury.",
        "Genetic derangements — inborn errors, enzyme defects.",
        "Nutritional imbalances — deficiency (protein-energy) or excess (obesity)."
      ] },
      { h: "Mechanism 1: ATP depletion (hypoxia/ischaemia)", p: "Oxygen is needed for oxidative phosphorylation. When it falls, ATP production collapses. The energy-dependent sodium-potassium pump fails, so sodium and water enter the cell — this causes CELLULAR SWELLING, the earliest and a reversible change. Anaerobic glycolysis raises lactic acid, lowering intracellular pH. Ribosomes detach, reducing protein synthesis. If oxygen returns quickly the cell recovers; if not, damage progresses." },
      { h: "Mechanism 2: mitochondrial damage & calcium influx", p: "Persistent injury damages mitochondria and membranes, allowing a massive influx of calcium into the cytosol. High calcium activates destructive enzymes — phospholipases (attack membranes), proteases (attack the cytoskeleton and proteins), endonucleases (attack DNA) and ATPases (worsen ATP loss). This is a key point of NO RETURN toward irreversible injury." },
      { h: "Mechanism 3: free-radical / oxidative injury", p: "Reactive oxygen species (superoxide, hydrogen peroxide, hydroxyl radical) are unstable molecules that damage lipids (lipid peroxidation of membranes), proteins and DNA. They are generated by ischaemia-reperfusion, radiation, toxins and inflammation. The body defends with antioxidants (superoxide dismutase, catalase, glutathione, vitamins C and E). Oxidative stress is central to ageing, atherosclerosis and reperfusion injury." },
      { h: "Reversible vs irreversible injury", list: [
        "Reversible — cellular (hydropic) swelling, fatty change, blebbing of the membrane, ribosome detachment; the cell can recover if the stimulus is removed.",
        "Irreversible — severe mitochondrial damage, profound membrane defects, massive calcium entry and enzyme leakage; the cell cannot recover and dies.",
        "The hallmarks of irreversibility are inability to restore mitochondrial function and profound membrane damage."
      ] },
      { h: "Cellular adaptations — overview", p: "Before dying, cells often ADAPT to persistent stress by changing size, number or type, reaching a new but altered steady state. Adaptations are usually reversible when the stimulus is removed. The five classic adaptations are atrophy, hypertrophy, hyperplasia, metaplasia and dysplasia.", figure: {
        caption: "Cellular adaptations: change in cell size (atrophy/hypertrophy), number (hyperplasia) and type (metaplasia), compared with the normal cell.",
        svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram of cellular adaptations."><rect x="20" y="30" width="110" height="150" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="75" y="24" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">NORMAL</text><circle cx="75" cy="105" r="26" fill="#22C55E" stroke="#0F4C3A" stroke-width="1.5"/><rect x="145" y="30" width="110" height="150" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="200" y="24" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">ATROPHY</text><circle cx="200" cy="105" r="15" fill="#22C55E" stroke="#0F4C3A" stroke-width="1.5"/><text x="200" y="168" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">smaller</text><rect x="270" y="30" width="110" height="150" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="325" y="24" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">HYPERTROPHY</text><circle cx="325" cy="105" r="34" fill="#22C55E" stroke="#0F4C3A" stroke-width="1.5"/><text x="325" y="168" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">bigger</text><rect x="395" y="30" width="110" height="150" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="450" y="24" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">HYPERPLASIA</text><circle cx="432" cy="90" r="13" fill="#22C55E" stroke="#0F4C3A" stroke-width="1.2"/><circle cx="468" cy="90" r="13" fill="#22C55E" stroke="#0F4C3A" stroke-width="1.2"/><circle cx="432" cy="125" r="13" fill="#22C55E" stroke="#0F4C3A" stroke-width="1.2"/><circle cx="468" cy="125" r="13" fill="#22C55E" stroke="#0F4C3A" stroke-width="1.2"/><text x="450" y="168" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">more cells</text><rect x="520" y="30" width="110" height="150" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="575" y="24" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">METAPLASIA</text><rect x="560" y="88" width="30" height="34" rx="4" fill="#15803D" stroke="#0F4C3A" stroke-width="1.5"/><text x="575" y="168" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">new type</text></svg>'
      } },
      { h: "Atrophy", p: "Atrophy is a DECREASE in cell size (and hence organ size) due to loss of cell substance. Causes: disuse (immobilised limb in a cast), denervation, reduced blood supply, loss of hormonal/nutritional stimulation, and ageing. Nursing relevance: prolonged bed rest causes muscle atrophy — the rationale for early mobilisation, positioning and physiotherapy." },
      { h: "Hypertrophy and hyperplasia", list: [
        "Hypertrophy — INCREASE in cell SIZE, enlarging the organ; occurs in cells that cannot divide. Example: left-ventricular hypertrophy from chronic hypertension; skeletal muscle enlargement with exercise.",
        "Hyperplasia — INCREASE in the NUMBER of cells; occurs only in dividing tissues. Example: endometrial hyperplasia from excess oestrogen; prostatic hyperplasia (BPH); callus formation.",
        "The two often occur together (e.g. the pregnant uterus enlarges by both)."
      ] },
      { h: "Metaplasia and dysplasia", p: "Metaplasia is the REVERSIBLE replacement of one mature cell type by another better able to withstand the stress. The classic example: the ciliated columnar epithelium of the bronchi is replaced by squamous epithelium in smokers. Although protective, metaplasia loses the original function (mucus clearance) and may progress to DYSPLASIA — disordered, atypical cell growth that is a pre-cancerous change. Dysplasia (e.g. cervical dysplasia) can revert if the stimulus is removed but may progress to carcinoma if it persists." },
      { h: "Cell death: necrosis", p: "Necrosis is unregulated (pathological) cell death following severe injury, always associated with loss of membrane integrity and leakage of cell contents, which triggers surrounding INFLAMMATION. Types include: coagulative (ischaemic organs, e.g. myocardial infarction), liquefactive (brain, abscesses), caseous ('cheese-like', tuberculosis), fat necrosis (pancreatitis) and gangrenous (limb ischaemia). Leaked enzymes (troponin, CK-MB, transaminases) become clinical markers of tissue death." },
      { h: "Cell death: apoptosis", p: "Apoptosis is programmed, regulated, energy-requiring cell death that removes unwanted, aged or damaged cells NEATLY, WITHOUT inflammation — the cell shrinks and fragments into membrane-bound apoptotic bodies that are phagocytosed. It is physiological (fetal webbing removal, endometrial shedding) and also occurs in disease (viral hepatitis, tumour cell removal). Too little apoptosis contributes to cancer; too much contributes to neurodegeneration." },
      { h: "Necrosis versus apoptosis — key contrasts", list: [
        "Necrosis: pathological, many adjacent cells, cell SWELLING, membrane rupture, contents leak, INFLAMMATION present, energy-independent.",
        "Apoptosis: often physiological, single cells, cell SHRINKAGE, membrane intact, no leakage, NO inflammation, energy (ATP) required.",
        "Clinical clue: rising serum enzymes signal necrosis; apoptosis leaves no such 'spill'."
      ] },
      { h: "Intracellular accumulations & calcification", p: "Injured cells may accumulate substances: fat (fatty liver in alcohol/obesity), protein, glycogen, and pigments (lipofuscin of ageing, haemosiderin from iron overload, bilirubin in jaundice). Pathological calcification includes dystrophic calcification (in dead/damaged tissue with normal calcium, e.g. atheromatous plaques, TB lesions) and metastatic calcification (in normal tissue when serum calcium is high, e.g. hyperparathyroidism)." },
      { h: "Clinical relevance for nursing", p: "Because hypoxia is the leading cause of cell injury, the nurse's core protective actions — ensuring a patent airway, adequate oxygenation, maintaining perfusion and blood pressure, repositioning to prevent pressure ischaemia, and early mobilisation to prevent atrophy — are all direct applications of cellular pathophysiology. Recognising serum enzyme rises (troponin, liver enzymes) as evidence of necrosis guides urgent escalation." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Describe the mechanisms of hypoxic (ischaemic) cell injury, explaining why cellular swelling occurs first.",
      "Define atrophy, hypertrophy, hyperplasia and metaplasia, giving one clinical example of each.",
      "Differentiate between necrosis and apoptosis under the headings mechanism, morphology and inflammation.",
      "Explain free-radical injury and list the body's antioxidant defences.",
      "Discuss the nursing measures that protect cells from hypoxic and disuse injury, with their pathophysiological rationale."
    ],
    assessment: [
      { type: "mcq", q: "The earliest and reversible change in a hypoxic cell is cellular swelling. It occurs primarily because:", options: ["Calcium is pumped out faster", "Failure of the ATP-dependent sodium-potassium pump lets sodium and water enter", "Free radicals are neutralised", "Protein synthesis increases"], answer: 1, rationale: "ATP depletion disables the Na+/K+ pump, so sodium and water accumulate intracellularly, causing hydropic swelling." },
      { type: "mcq", q: "The bronchial epithelium of a chronic smoker changes from ciliated columnar to squamous type. This adaptation is:", options: ["Hypertrophy", "Atrophy", "Metaplasia", "Necrosis"], answer: 2, rationale: "Metaplasia is reversible replacement of one mature cell type by another more resistant one — but mucus clearance is lost." },
      { type: "mcq", q: "Left-ventricular enlargement in long-standing hypertension is an example of:", options: ["Hyperplasia", "Hypertrophy", "Dysplasia", "Aplasia"], answer: 1, rationale: "Cardiac myocytes cannot divide, so they enlarge (increase in size) — hypertrophy — to meet the increased workload." },
      { type: "mcq", q: "A patient's limb muscles waste after 6 weeks in a plaster cast. This is BEST described as:", options: ["Disuse hypertrophy", "Disuse atrophy", "Compensatory hyperplasia", "Coagulative necrosis"], answer: 1, rationale: "Loss of use reduces cell size and muscle bulk — disuse atrophy — the rationale for early mobilisation." },
      { type: "mcq", q: "Which feature distinguishes apoptosis from necrosis?", options: ["Apoptosis triggers strong inflammation", "Apoptosis causes cell swelling and rupture", "Apoptosis is regulated and does NOT cause inflammation", "Apoptosis is energy-independent"], answer: 2, rationale: "Apoptosis is programmed, ATP-dependent, affects single cells and is non-inflammatory; necrosis is the opposite." },
      { type: "mcq", q: "The type of necrosis characteristic of tuberculosis is:", options: ["Coagulative", "Liquefactive", "Caseous", "Fat"], answer: 2, rationale: "Caseous ('cheese-like') necrosis is the hallmark of tuberculous granulomas; coagulative typifies infarcts." },
      { type: "mcq", q: "A massive rise in cytosolic calcium promotes irreversible injury mainly by:", options: ["Inhibiting all enzymes", "Activating phospholipases, proteases and endonucleases", "Increasing ATP production", "Neutralising free radicals"], answer: 1, rationale: "Calcium overload activates destructive enzymes that degrade membranes, cytoskeleton and DNA — a point of no return." },
      { type: "mcq", q: "Rising serum troponin after chest pain indicates that cardiac cells have undergone:", options: ["Apoptosis without leakage", "Necrosis with membrane rupture and enzyme leakage", "Atrophy", "Metaplasia"], answer: 1, rationale: "Necrosis breaks the cell membrane, spilling intracellular proteins such as troponin into the blood — a marker of infarction." },
      { type: "mcq", q: "Disordered, atypical cell growth that is regarded as a pre-cancerous change is:", options: ["Hyperplasia", "Metaplasia", "Dysplasia", "Hypertrophy"], answer: 2, rationale: "Dysplasia is disordered growth with cellular atypia; if the stimulus persists it may progress to carcinoma." },
      { type: "mcq", q: "Which is the single most important and common cause of cell injury?", options: ["Radiation", "Hypoxia / ischaemia", "Genetic mutation", "Nutritional excess"], answer: 1, rationale: "Reduced oxygen delivery (hypoxia/ischaemia) is the commonest and most important cause, underlying infarction and shock." }
      , { type: "fill", q: "Programmed, non-inflammatory, energy-requiring cell death is called ____.", accept: ["apoptosis"], rationale: "Apoptosis neatly removes cells without spilling contents, unlike necrosis." }
      , { type: "fill", q: "Deposition of calcium salts in previously damaged or dead tissue with normal serum calcium is called ____ calcification.", accept: ["dystrophic"], rationale: "Dystrophic calcification occurs in injured tissue; metastatic calcification occurs with high serum calcium." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "pph-03-inflammation-healing",
    unit: "Unit 1 · General Pathophysiology",
    title: "Inflammation, Tissue Healing & Repair",
    readMinutes: 26,
    summary: "The protective inflammatory response: the five cardinal signs and their mechanisms; vascular and cellular events of acute inflammation; chemical mediators; outcomes and chronic inflammation; and the process of tissue healing by regeneration and repair, wound types and factors affecting healing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is inflammation?", p: "Inflammation is the body's protective response of vascularised tissue to injury or infection. Its purpose is to eliminate the initial cause of injury, remove damaged cells and tissue, and initiate repair. It is fundamentally beneficial, but if excessive or misdirected it also causes tissue damage (as in hypersensitivity and autoimmune disease). It is classified as acute (rapid, short-lived) or chronic (prolonged)." },
      { h: "The five cardinal signs", list: [
        "Rubor (redness) — from increased blood flow (vasodilation).",
        "Calor (heat) — from increased blood flow to the area.",
        "Tumor (swelling) — from fluid exudate leaking into tissue.",
        "Dolor (pain) — from mediators (bradykinin, prostaglandins) and pressure on nerves.",
        "Functio laesa (loss of function) — from pain and swelling limiting movement.",
        "These local signs are the direct clinical expression of the underlying vascular changes."
      ] },
      { h: "Vascular events of acute inflammation", p: "After a brief transient vasoconstriction, arterioles DILATE, increasing blood flow (causing redness and heat). Capillary permeability INCREASES: endothelial cells contract, opening gaps so protein-rich fluid (exudate) escapes into tissue, causing swelling. Loss of fluid raises blood viscosity and slows flow (stasis), allowing leukocytes to line up along the vessel wall (margination) ready to exit." },
      { h: "Cellular events: leukocyte recruitment", p: "Neutrophils are recruited first in acute inflammation through a sequence: (1) MARGINATION along the endothelium; (2) ROLLING (loose adhesion via selectins); (3) firm ADHESION (integrins); (4) TRANSMIGRATION (diapedesis) between endothelial cells into tissue; (5) CHEMOTAXIS — movement along a chemical gradient toward the injury; (6) PHAGOCYTOSIS and killing of microbes. A rising neutrophil count (neutrophilia) reflects this acute response." },
      { h: "Chemical mediators", list: [
        "Histamine (from mast cells) — early vasodilation and increased permeability.",
        "Prostaglandins — vasodilation, pain, fever (blocked by NSAIDs/aspirin).",
        "Leukotrienes — increased permeability, chemotaxis, bronchospasm.",
        "Bradykinin — pain and increased permeability.",
        "Cytokines (TNF, IL-1, IL-6) — fever, leukocyte activation, acute-phase response.",
        "Complement system — opsonisation, chemotaxis, cell lysis.",
        "Nitric oxide — vasodilation and antimicrobial action."
      ] },
      { h: "Systemic effects (acute-phase response)", p: "Mediators (especially IL-1, IL-6, TNF) act on the whole body: FEVER (prostaglandin E2 raises the hypothalamic set-point), leukocytosis, malaise and anorexia, and increased acute-phase proteins from the liver — C-reactive protein (CRP) and fibrinogen (which raises the ESR). Nurses monitor temperature, pulse, white cell count and CRP as markers of the inflammatory burden and its response to treatment." },
      { h: "Types of exudate", list: [
        "Serous — watery, protein-poor (blister fluid).",
        "Fibrinous — rich in fibrin (pericarditis, forms adhesions).",
        "Purulent (suppurative) — pus: dead neutrophils, debris, microbes (abscess).",
        "Haemorrhagic — contains red cells (severe injury).",
        "The character of wound drainage guides nursing assessment of infection."
      ] },
      { h: "Outcomes of acute inflammation", p: "Acute inflammation may end in: (1) complete RESOLUTION — return to normal when injury is limited; (2) HEALING by fibrosis (scarring) when there is substantial tissue destruction; (3) ABSCESS formation; or (4) progression to CHRONIC inflammation if the agent persists." },
      { h: "Chronic inflammation", p: "Chronic inflammation is prolonged inflammation (weeks to years) in which active inflammation, tissue destruction and repair proceed simultaneously. It is driven by MACROPHAGES, lymphocytes and plasma cells rather than neutrophils. Causes include persistent infection (tuberculosis), prolonged toxin exposure and autoimmune disease. A special pattern is GRANULOMATOUS inflammation — collections of activated macrophages (epithelioid cells) forming granulomas, seen in TB, leprosy and sarcoidosis." },
      { h: "Healing: regeneration vs repair", list: [
        "Regeneration — replacement of lost cells by the SAME type, restoring normal structure and function; possible in labile tissues (skin, gut lining, bone marrow) and stable tissues (liver, kidney tubules).",
        "Repair (fibrosis) — replacement by CONNECTIVE tissue (scar) when the tissue cannot regenerate or damage is extensive; occurs in permanent tissues (cardiac muscle, neurons). A scar restores continuity but not function."
      ] },
      { h: "Steps of wound healing", p: "Healing proceeds through overlapping phases: (1) HAEMOSTASIS — clot formation stops bleeding; (2) INFLAMMATION — neutrophils then macrophages clear debris (days 1-3); (3) PROLIFERATION — GRANULATION TISSUE forms (new capillaries + fibroblasts), collagen is laid down, and epithelium migrates across (days 3-21); (4) MATURATION / REMODELLING — collagen is reorganised and the scar contracts and strengthens (weeks to months, reaching ~70-80% of original strength).", figure: {
        caption: "Overlapping phases of wound healing: haemostasis, inflammation, proliferation (granulation) and maturation/remodelling.",
        svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phases of wound healing timeline."><defs><marker id="pphArr3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><line x1="20" y1="130" x2="620" y2="130" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#pphArr3)"/><rect x="20" y="40" width="130" height="55" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="85" y="63" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">HAEMOSTASIS</text><text x="85" y="82" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">clot, minutes</text><rect x="165" y="40" width="130" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="230" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">INFLAMMATION</text><text x="230" y="82" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">days 1-3</text><rect x="310" y="40" width="140" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="380" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">PROLIFERATION</text><text x="380" y="82" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">granulation, d3-21</text><rect x="465" y="40" width="150" height="55" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="540" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">MATURATION</text><text x="540" y="82" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">remodel, weeks-mo</text><text x="320" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">time</text></svg>'
      } },
      { h: "Primary vs secondary intention", list: [
        "Healing by PRIMARY intention — clean surgical wound, edges apposed (sutured); minimal tissue loss, small scar, rapid.",
        "Healing by SECONDARY intention — large, open or contaminated wound with tissue loss; heals from the base up with abundant granulation tissue, marked wound contraction and a larger scar; slower.",
        "Delayed (tertiary) intention — wound left open then closed later once infection is controlled."
      ] },
      { h: "Factors affecting healing", list: [
        "Local — infection (the most important cause of delay), poor blood supply, foreign body, wound tension, movement.",
        "Systemic — age, poor nutrition (protein and vitamin C for collagen, zinc), diabetes, anaemia and hypoxia, steroids/immunosuppression, smoking."
      ] },
      { h: "Complications of healing", list: [
        "Deficient scar — wound dehiscence (bursting) or chronic ulcer.",
        "Excessive scar — hypertrophic scar or keloid.",
        "Contractures — excessive contraction limiting movement, especially over joints and after burns.",
        "Adhesions — fibrous bands between organs after peritoneal inflammation."
      ] },
      { h: "Clinical relevance for nursing", p: "Nursing care applies these mechanisms directly: aseptic technique prevents infection (the leading barrier to healing); optimising nutrition, oxygenation, perfusion and glycaemic control supports collagen synthesis and granulation; pressure relief and positioning maintain blood supply; and monitoring temperature, wound exudate, redness and CRP detects complications early. Understanding why steroids and diabetes impair healing guides risk assessment and patient education." }
    ],
    references: REF_PPH,
    examQuestions: [
      "List the five cardinal signs of inflammation and explain the vascular mechanism behind each.",
      "Describe the sequence of leukocyte recruitment in acute inflammation.",
      "Differentiate healing by primary and secondary intention.",
      "Explain the four phases of wound healing.",
      "Discuss the local and systemic factors that delay wound healing and the related nursing measures."
    ],
    assessment: [
      { type: "mcq", q: "The redness and heat of acute inflammation are caused primarily by:", options: ["Vasoconstriction", "Vasodilation and increased blood flow", "Decreased permeability", "Neutrophil death"], answer: 1, rationale: "Arteriolar vasodilation increases blood flow to the area, producing rubor (redness) and calor (heat)." },
      { type: "mcq", q: "The swelling (tumor) of inflammation results from:", options: ["Increased capillary permeability with exudate escaping into tissue", "Reduced blood flow", "Collagen deposition", "Bone growth"], answer: 0, rationale: "Increased vascular permeability lets protein-rich fluid (exudate) leak into the interstitium, causing swelling." },
      { type: "mcq", q: "Which cell predominates in ACUTE inflammation?", options: ["Lymphocyte", "Plasma cell", "Neutrophil", "Macrophage"], answer: 2, rationale: "Neutrophils are the first responders in acute inflammation; macrophages and lymphocytes dominate chronic inflammation." },
      { type: "mcq", q: "Movement of leukocytes along a chemical gradient toward the site of injury is called:", options: ["Margination", "Diapedesis", "Chemotaxis", "Opsonisation"], answer: 2, rationale: "Chemotaxis is directed migration toward chemoattractants; diapedesis is squeezing through the vessel wall." },
      { type: "mcq", q: "Fever in inflammation is mediated mainly by prostaglandin E2 acting on the:", options: ["Liver", "Kidney", "Hypothalamus", "Adrenal gland"], answer: 2, rationale: "Pyrogenic cytokines raise PGE2, which resets the hypothalamic thermostat to a higher temperature — fever." },
      { type: "mcq", q: "A clean sutured surgical incision heals by:", options: ["Secondary intention", "Primary intention", "Tertiary intention", "Granulomatous repair"], answer: 1, rationale: "Apposed, clean wound edges heal by primary intention with minimal granulation and a small scar." },
      { type: "mcq", q: "New tissue that is red and granular, made of capillaries and fibroblasts, filling an open wound is:", options: ["Keloid", "Granulation tissue", "Caseous necrosis", "Purulent exudate"], answer: 1, rationale: "Granulation tissue (new capillaries + fibroblasts + collagen) fills wounds healing by secondary intention." },
      { type: "mcq", q: "Which factor is the single most important LOCAL cause of delayed wound healing?", options: ["Old age", "Wound infection", "Diabetes", "Steroid therapy"], answer: 1, rationale: "Infection is the most important local factor delaying healing; age, diabetes and steroids are systemic influences." },
      { type: "mcq", q: "Granulomatous inflammation with collections of activated macrophages is characteristic of:", options: ["Acute appendicitis", "Tuberculosis", "Blister formation", "First-degree burn"], answer: 1, rationale: "Granulomas (epithelioid macrophages) typify TB, leprosy and sarcoidosis — a form of chronic inflammation." },
      { type: "mcq", q: "Pus (dead neutrophils, debris and microbes) is which type of exudate?", options: ["Serous", "Fibrinous", "Purulent", "Haemorrhagic"], answer: 2, rationale: "Purulent (suppurative) exudate is pus; serous is watery and fibrinous is fibrin-rich." }
      , { type: "fill", q: "Replacement of destroyed tissue by connective (scar) tissue is called ____.", accept: ["repair", "fibrosis"], rationale: "Repair/fibrosis restores continuity but not the original specialised function." }
      , { type: "fill", q: "The acute-phase protein commonly measured to monitor inflammation is ____.", accept: ["c-reactive protein", "crp", "c reactive protein"], rationale: "CRP rises rapidly with inflammation and falls as it resolves, making it a useful monitoring marker." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "pph-04-fluid-electrolyte",
    unit: "Unit 1 · General Pathophysiology",
    title: "Fluid, Electrolyte & Acid-Base Imbalances",
    readMinutes: 27,
    summary: "Body fluid compartments and their regulation; volume disorders (dehydration and overload/oedema); the major electrolyte imbalances (sodium, potassium, calcium) with their causes, ECG/clinical effects and nursing implications; and the four primary acid-base disorders with compensation and ABG interpretation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Body fluid compartments", p: "Total body water is about 60% of body weight in an adult male. It is divided into: INTRACELLULAR fluid (ICF, ~two-thirds, ~40% of body weight) and EXTRACELLULAR fluid (ECF, ~one-third, ~20%), which is further split into interstitial fluid (~15%) and plasma (~5%, the intravascular volume). Water moves between compartments by OSMOSIS, following solutes; sodium is the main determinant of ECF volume." },
      { h: "Regulation of fluid balance", list: [
        "Thirst — stimulated by rising osmolality and hypovolaemia.",
        "Antidiuretic hormone (ADH) — from the posterior pituitary; conserves water by increasing renal reabsorption.",
        "Renin-angiotensin-aldosterone system (RAAS) — aldosterone retains sodium (and thus water) and excretes potassium.",
        "Atrial natriuretic peptide (ANP) — promotes sodium and water excretion when volume is high.",
        "The kidney is the master organ balancing intake with output."
      ] },
      { h: "Fluid volume DEFICIT (dehydration/hypovolaemia)", p: "Causes: vomiting, diarrhoea, haemorrhage, burns, excessive diuresis, inadequate intake, fever/sweating. Pathophysiology: loss of ECF reduces circulating volume and tissue perfusion. Clinical features: thirst, dry mucous membranes, reduced skin turgor, sunken eyes, TACHYCARDIA, POSTURAL HYPOTENSION, oliguria (urine < 0.5 mL/kg/hr), concentrated urine, weight loss, and in severe cases hypovolaemic shock. Nursing: accurate intake/output charting, daily weights, vital signs, fluid replacement, mouth care." },
      { h: "Fluid volume EXCESS & oedema", p: "Causes: heart failure, renal failure, cirrhosis, excessive IV fluids, high sodium intake. OEDEMA is accumulation of fluid in the interstitial space; it arises from increased hydrostatic pressure (heart failure), decreased plasma oncotic pressure (low albumin — nephrotic syndrome, liver failure, malnutrition), increased capillary permeability (inflammation), or lymphatic obstruction (lymphoedema). Features: weight gain, oedema (pitting, sacral, pulmonary), raised JVP, crackles, hypertension. Nursing: fluid/sodium restriction, daily weights, diuretic monitoring, skin care." },
      { h: "Sodium imbalance", list: [
        "Normal serum sodium 135-145 mmol/L; sodium controls ECF osmolality and volume.",
        "HYPONATRAEMIA (< 135) — from water excess (SIADH, heart/renal failure) or sodium loss; effects are neurological: confusion, headache, lethargy, seizures (from cerebral oedema).",
        "HYPERNATRAEMIA (> 145) — from water loss or sodium gain; effects are thirst, dry mucosae, restlessness, and neurological changes from cellular dehydration.",
        "Correction must be GRADUAL to avoid cerebral injury."
      ] },
      { h: "Potassium imbalance", list: [
        "Normal serum potassium 3.5-5.0 mmol/L; the main INTRACELLULAR cation, critical for cardiac and neuromuscular excitability.",
        "HYPOKALAEMIA (< 3.5) — from vomiting, diarrhoea, diuretics; causes muscle weakness, cramps, ileus, and ECG changes: flattened T waves, U waves, ST depression; risk of arrhythmia and digoxin toxicity.",
        "HYPERKALAEMIA (> 5.0) — from renal failure, tissue damage, potassium-sparing drugs; causes weakness and DANGEROUS arrhythmias with ECG changes: PEAKED T waves, widened QRS, then cardiac arrest.",
        "Potassium is a HIGH-ALERT electrolyte; IV potassium is never given undiluted or as a rapid push."
      ] },
      { h: "Calcium imbalance", list: [
        "Normal total serum calcium 8.5-10.5 mg/dL (2.1-2.6 mmol/L); regulated by parathyroid hormone and vitamin D.",
        "HYPOCALCAEMIA — from hypoparathyroidism, vitamin D deficiency, renal failure; causes increased neuromuscular excitability: tetany, muscle spasm, positive Trousseau's and Chvostek's signs, prolonged QT.",
        "HYPERCALCAEMIA — from hyperparathyroidism, malignancy; causes 'stones, bones, groans and psychiatric moans' — renal stones, bone pain, constipation, and confusion."
      ] },
      { h: "Acid-base balance basics", p: "Normal arterial pH is 7.35-7.45, defended by buffers (chiefly bicarbonate), the LUNGS (excreting CO2 — an acid, fast response) and the KIDNEYS (excreting H+ and reabsorbing bicarbonate — slow, powerful response). The relationship: pH depends on the ratio of bicarbonate (HCO3-, metabolic/renal) to carbon dioxide (PaCO2, respiratory). Acidosis is pH < 7.35; alkalosis is pH > 7.45." },
      { h: "The four primary acid-base disorders", list: [
        "RESPIRATORY ACIDOSIS — CO2 retention (raised PaCO2); from hypoventilation, COPD, respiratory depression. Low pH, high PaCO2.",
        "RESPIRATORY ALKALOSIS — CO2 loss (low PaCO2); from hyperventilation, anxiety, high fever. High pH, low PaCO2.",
        "METABOLIC ACIDOSIS — low bicarbonate; from diarrhoea, renal failure, diabetic ketoacidosis, lactic acidosis (shock). Low pH, low HCO3-; compensatory hyperventilation (Kussmaul breathing).",
        "METABOLIC ALKALOSIS — high bicarbonate; from vomiting, excess antacids, diuretics. High pH, high HCO3-."
      ] },
      { h: "Compensation", p: "The body attempts to return pH toward normal: in metabolic disorders the LUNGS compensate quickly (hyperventilation in acidosis to blow off CO2; hypoventilation in alkalosis). In respiratory disorders the KIDNEYS compensate slowly over 1-3 days (retaining or excreting bicarbonate). Compensation shifts the OTHER value in the same direction to normalise the ratio. If pH is back in the normal range the disorder is 'fully compensated'; if not it is partial or uncompensated." },
      { h: "Reading an ABG (systematic approach)", p: "Step 1 — check pH: acidosis or alkalosis? Step 2 — check PaCO2 (respiratory): if it moves opposite to pH it is the cause (raised CO2 with low pH = respiratory acidosis). Step 3 — check HCO3- (metabolic): if it moves the SAME way as pH it is the cause (low HCO3- with low pH = metabolic acidosis). Step 4 — is the other value shifting to compensate? This structured method lets the nurse quickly identify the primary problem.", figure: {
        caption: "ABG decision box: use pH to find acidosis vs alkalosis, then PaCO2 (respiratory) and HCO3- (metabolic) to identify the primary disorder.",
        svg: '<svg viewBox="0 0 620 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arterial blood gas interpretation box."><rect x="10" y="10" width="600" height="190" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="310" y="34" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">ABG interpretation</text><rect x="30" y="50" width="180" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="120" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">pH</text><text x="120" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">&lt;7.35 acidosis</text><text x="120" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">&gt;7.45 alkalosis</text><rect x="220" y="50" width="180" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">PaCO2 (lungs)</text><text x="310" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">35-45 mmHg</text><text x="310" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">opposite pH = cause</text><rect x="410" y="50" width="180" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="500" y="72" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">HCO3- (kidney)</text><text x="500" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">22-26 mmol/L</text><text x="500" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">same as pH = cause</text><rect x="30" y="130" width="560" height="55" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="310" y="152" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Normal pH 7.35-7.45</text><text x="310" y="172" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Then check whether the other value is compensating</text></svg>'
      } },
      { h: "Normal values / key figures", list: [
        "Serum sodium 135-145 mmol/L; potassium 3.5-5.0 mmol/L; total calcium 8.5-10.5 mg/dL.",
        "Arterial pH 7.35-7.45; PaCO2 35-45 mmHg; HCO3- 22-26 mmol/L; PaO2 80-100 mmHg.",
        "Urine output (adult) at least 0.5 mL/kg/hour."
      ] },
      { h: "Clinical relevance for nursing", p: "Fluid and electrolyte assessment is core nursing work: accurate intake-output records, daily weights (1 kg change ~1 litre of fluid), vital-sign trends, skin turgor, mucous membranes, oedema and level of consciousness. Recognising the ECG danger of hyperkalaemia (peaked T waves) and the arrhythmia risk of hypokalaemia, handling IV potassium safely, and monitoring the breathing pattern (Kussmaul respiration signalling metabolic acidosis) are direct clinical applications of this pathophysiology." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Describe the body fluid compartments and the hormones that regulate fluid balance.",
      "Compare fluid volume deficit and fluid volume excess in terms of causes, signs and nursing care.",
      "Explain the mechanisms of oedema formation with clinical examples.",
      "Describe the causes, ECG effects and nursing precautions for hypokalaemia and hyperkalaemia.",
      "Outline the four primary acid-base disorders and explain how to interpret an arterial blood gas."
    ],
    assessment: [
      { type: "mcq", q: "In a healthy adult, intracellular fluid represents approximately what fraction of total body water?", options: ["One-third", "Two-thirds", "One-half", "One-quarter"], answer: 1, rationale: "About two-thirds of total body water is intracellular; one-third is extracellular (interstitial + plasma)." },
      { type: "mcq", q: "A patient with severe diarrhoea shows tachycardia, postural hypotension and oliguria. These indicate:", options: ["Fluid volume deficit", "Fluid volume excess", "Metabolic alkalosis only", "Hypercalcaemia"], answer: 0, rationale: "Loss of ECF reduces circulating volume, producing compensatory tachycardia, postural drop and reduced urine output." },
      { type: "mcq", q: "Peaked T waves and a widening QRS on ECG most strongly suggest:", options: ["Hypokalaemia", "Hypocalcaemia", "Hyperkalaemia", "Hypernatraemia"], answer: 2, rationale: "Hyperkalaemia produces peaked T waves and QRS widening, risking fatal arrhythmia — a medical emergency." },
      { type: "mcq", q: "Oedema due to low serum albumin (as in nephrotic syndrome) is caused by:", options: ["Increased capillary hydrostatic pressure", "Lymphatic obstruction", "Decreased plasma oncotic pressure", "Increased sodium excretion"], answer: 2, rationale: "Low albumin lowers plasma oncotic pressure, so fluid is not held in the vessels and leaks into the interstitium." },
      { type: "mcq", q: "A patient with prolonged vomiting is most likely to develop:", options: ["Metabolic acidosis", "Respiratory acidosis", "Respiratory alkalosis", "Metabolic alkalosis"], answer: 3, rationale: "Loss of gastric acid (H+ and chloride) through vomiting raises bicarbonate — metabolic alkalosis." },
      { type: "mcq", q: "Deep, rapid Kussmaul breathing in diabetic ketoacidosis is a compensatory response to:", options: ["Metabolic acidosis", "Respiratory alkalosis", "Hypernatraemia", "Fluid overload"], answer: 0, rationale: "In metabolic acidosis the lungs hyperventilate to blow off CO2 and raise pH — Kussmaul respiration." },
      { type: "mcq", q: "ABG: pH 7.30, PaCO2 60 mmHg, HCO3- 24 mmol/L. This is:", options: ["Metabolic acidosis", "Respiratory acidosis", "Respiratory alkalosis", "Metabolic alkalosis"], answer: 1, rationale: "Low pH with a HIGH PaCO2 (moving opposite to pH) and normal bicarbonate = uncompensated respiratory acidosis." },
      { type: "mcq", q: "A positive Trousseau's sign and carpopedal spasm suggest:", options: ["Hyperkalaemia", "Hypernatraemia", "Hypocalcaemia", "Hypercalcaemia"], answer: 2, rationale: "Low calcium increases neuromuscular excitability, producing tetany and positive Trousseau's/Chvostek's signs." },
      { type: "mcq", q: "The safest nursing practice when administering intravenous potassium chloride is to:", options: ["Give it as a rapid IV push", "Give undiluted through a peripheral line", "Add it to blood products", "Always dilute it and infuse slowly via a pump"], answer: 3, rationale: "Potassium is high-alert; it must be diluted and infused slowly with a pump — never a rapid or undiluted push (risk of cardiac arrest)." },
      { type: "mcq", q: "Confusion and seizures from cerebral oedema are the classic effect of which imbalance?", options: ["Hyponatraemia", "Hypernatraemia", "Hypokalaemia", "Hypercalcaemia"], answer: 0, rationale: "Low serum sodium lowers ECF osmolality, drawing water into brain cells and causing cerebral oedema — confusion and seizures." }
      , { type: "fill", q: "The main hormone that conserves body water by increasing renal reabsorption is ____.", accept: ["adh", "antidiuretic hormone", "vasopressin"], rationale: "ADH (vasopressin) from the posterior pituitary reduces water loss when osmolality rises or volume falls." }
      , { type: "fill", q: "Normal arterial pH lies between 7.35 and ____.", accept: ["7.45"], rationale: "A pH below 7.35 is acidosis and above 7.45 is alkalosis." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "pph-05-immunity-hypersensitivity",
    unit: "Unit 2 · Immunity, Genetics & Neoplasia",
    title: "Immunity, Hypersensitivity & Immunodeficiency",
    readMinutes: 26,
    summary: "The innate and adaptive immune systems; humoral and cell-mediated immunity; the four types of hypersensitivity reaction with clinical examples; autoimmunity; and primary and secondary immunodeficiency including HIV/AIDS, linked to nursing observation and management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of the immune system", p: "The immune system protects the body against pathogens, removes damaged and abnormal (e.g. cancer) cells, and distinguishes 'self' from 'non-self'. It has two arms that work together: INNATE (natural, non-specific, immediate) and ADAPTIVE (acquired, specific, with memory). Disorders arise when immunity is deficient (infection), excessive (hypersensitivity/allergy) or misdirected against self (autoimmunity)." },
      { h: "Innate immunity", list: [
        "Physical/chemical barriers — skin, mucous membranes, gastric acid, lysozyme in tears.",
        "Phagocytes — neutrophils and macrophages engulf and kill microbes.",
        "Natural killer (NK) cells — kill virus-infected and tumour cells.",
        "Complement system and inflammation.",
        "It is fast (minutes to hours), non-specific and has NO memory."
      ] },
      { h: "Adaptive immunity", p: "Adaptive immunity is specific and remembers previous exposure (the basis of vaccination). It has two components: HUMORAL immunity, mediated by B lymphocytes that produce antibodies, and CELL-MEDIATED immunity, mediated by T lymphocytes. It is slower on first exposure (primary response) but rapid and strong on re-exposure (secondary/memory response)." },
      { h: "Humoral immunity and antibodies", list: [
        "B cells mature into plasma cells that secrete antibodies (immunoglobulins).",
        "IgG — most abundant; crosses the placenta; long-term immunity.",
        "IgM — first antibody produced in an acute infection.",
        "IgA — protects mucosal surfaces and is in breast milk.",
        "IgE — mediates allergy and antiparasitic responses.",
        "IgD — on B-cell surfaces; helps activate them.",
        "Antibodies neutralise toxins, opsonise microbes and activate complement."
      ] },
      { h: "Cell-mediated immunity", list: [
        "Helper T cells (CD4) — 'orchestrators' that activate B cells and other T cells (destroyed in HIV).",
        "Cytotoxic T cells (CD8) — directly kill virus-infected and tumour cells.",
        "Regulatory T cells — dampen the response and maintain self-tolerance.",
        "Memory T cells — provide long-lasting immunity."
      ] },
      { h: "Active vs passive immunity", list: [
        "Active — the body makes its OWN antibodies; natural (after infection) or artificial (vaccination); slow to develop but long-lasting.",
        "Passive — READY-MADE antibodies are received; natural (placenta, breast milk) or artificial (immunoglobulin injection, antitoxin); immediate but short-lived."
      ] },
      { h: "Hypersensitivity — overview", p: "Hypersensitivity is an exaggerated or inappropriate immune response causing tissue damage. There are four classic types (Gell and Coombs). Types I-III are ANTIBODY-mediated; type IV is CELL (T-cell)-mediated and delayed.", figure: {
        caption: "The four types of hypersensitivity: I immediate/IgE, II antibody against cells, III immune complexes, IV delayed T-cell mediated.",
        svg: '<svg viewBox="0 0 620 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four types of hypersensitivity reactions."><rect x="15" y="30" width="140" height="140" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="85" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">TYPE I</text><text x="85" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Immediate</text><text x="85" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">IgE, mast cells</text><text x="85" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">anaphylaxis,</text><text x="85" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">asthma, allergy</text><rect x="165" y="30" width="140" height="140" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="235" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">TYPE II</text><text x="235" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Antibody vs cells</text><text x="235" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">IgG / IgM</text><text x="235" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">transfusion rxn,</text><text x="235" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">haemolytic disease</text><rect x="315" y="30" width="140" height="140" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="385" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">TYPE III</text><text x="385" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Immune complexes</text><text x="385" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">SLE,</text><text x="385" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">glomerulonephritis</text><rect x="465" y="30" width="140" height="140" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="535" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">TYPE IV</text><text x="535" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Delayed, T-cell</text><text x="535" y="124" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">TB skin test,</text><text x="535" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">contact dermatitis</text></svg>'
      } },
      { h: "Type I (immediate / anaphylactic)", p: "IgE bound to mast cells and basophils recognises an allergen; on re-exposure the cells DEGRANULATE, releasing histamine and other mediators within minutes. Local forms: allergic rhinitis, urticaria, asthma. Systemic form: ANAPHYLAXIS — a life-threatening reaction with bronchospasm, laryngeal oedema, hypotension and shock. Nursing: recognise early, administer adrenaline (epinephrine), oxygen and IV fluids; maintain the airway." },
      { h: "Type II (antibody-mediated cytotoxic)", p: "IgG or IgM antibodies bind antigens on the surface of the body's own cells, marking them for destruction by complement or phagocytes. Examples: ABO-incompatible blood transfusion reaction, haemolytic disease of the newborn (Rh incompatibility), autoimmune haemolytic anaemia. Nursing: strict blood-group checking and transfusion safety prevent type II reactions." },
      { h: "Type III (immune-complex)", p: "Antigen-antibody (immune) complexes form in the blood and DEPOSIT in tissues (blood vessels, joints, kidney glomeruli), activating complement and inflammation. Examples: systemic lupus erythematosus (SLE), post-streptococcal glomerulonephritis, rheumatoid arthritis. Damage is widespread rather than organ-specific." },
      { h: "Type IV (delayed, cell-mediated)", p: "Sensitised T cells, NOT antibodies, drive the reaction, which peaks at 24-72 hours (hence 'delayed'). Examples: the tuberculin (Mantoux) skin test, contact dermatitis (nickel, latex), and transplant rejection. This is the basis of TB screening and of latex-allergy precautions in nursing." },
      { h: "Autoimmunity", p: "Autoimmune disease occurs when self-tolerance fails and the immune system attacks the body's own tissues. It may be organ-specific (type 1 diabetes, Hashimoto's thyroiditis, myasthenia gravis) or systemic (SLE, rheumatoid arthritis). Contributing factors include genetic predisposition, infection (molecular mimicry) and hormonal influences (commoner in women). Treatment relies on immunosuppression, requiring vigilant infection surveillance by nurses." },
      { h: "Immunodeficiency", list: [
        "PRIMARY (congenital) — inherited defects in immune components (e.g. severe combined immunodeficiency); present early in life with recurrent infections.",
        "SECONDARY (acquired) — far commoner; caused by malnutrition, ageing, diabetes, cancer/chemotherapy, corticosteroids/immunosuppressants, and HIV.",
        "The key clinical clue is recurrent, severe or unusual (opportunistic) infections."
      ] },
      { h: "HIV/AIDS", p: "Human immunodeficiency virus (HIV) is a retrovirus that infects and destroys CD4 helper T cells, progressively crippling cell-mediated immunity. As the CD4 count falls (normal ~500-1500 cells/mm3), the patient becomes vulnerable to OPPORTUNISTIC infections (Pneumocystis pneumonia, TB, candidiasis) and certain cancers (Kaposi's sarcoma). AIDS is diagnosed when the CD4 count falls below 200/mm3 or an AIDS-defining illness occurs. Antiretroviral therapy suppresses viral replication and restores immunity. Nursing: standard precautions, adherence support, infection prevention and psychosocial care." },
      { h: "Clinical relevance for nursing", p: "Immunological pathophysiology guides everyday nursing safety: rigorous transfusion checks prevent type II reactions; readiness to treat anaphylaxis after drugs, contrast or vaccines addresses type I; standard precautions protect immunocompromised patients; and monitoring for opportunistic infection, fever and neutropenia in patients on chemotherapy or steroids reflects the recognition of secondary immunodeficiency." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Differentiate innate and adaptive immunity, and humoral from cell-mediated immunity.",
      "Describe the four types of hypersensitivity with a clinical example of each.",
      "Explain the pathophysiology and emergency management of anaphylaxis.",
      "Discuss the causes of secondary immunodeficiency.",
      "Describe the pathophysiology of HIV/AIDS and outline the related nursing care."
    ],
    assessment: [
      { type: "mcq", q: "Anaphylaxis to penicillin is which type of hypersensitivity?", options: ["Type I", "Type II", "Type III", "Type IV"], answer: 0, rationale: "Anaphylaxis is an immediate IgE-mediated (type I) reaction with mast-cell degranulation within minutes." },
      { type: "mcq", q: "An ABO-incompatible blood transfusion reaction is mediated by:", options: ["IgE on mast cells", "IgG/IgM antibodies against red-cell antigens (type II)", "Immune complexes (type III)", "Sensitised T cells (type IV)"], answer: 1, rationale: "Pre-formed antibodies bind red-cell surface antigens, causing complement-mediated haemolysis — type II." },
      { type: "mcq", q: "The tuberculin (Mantoux) skin test reads at 48-72 hours because it is a:", options: ["Type I immediate reaction", "Type II reaction", "Type III reaction", "Type IV delayed cell-mediated reaction"], answer: 3, rationale: "The Mantoux test is a delayed (type IV) T-cell reaction, which peaks at 24-72 hours." },
      { type: "mcq", q: "The immunoglobulin responsible for allergic (type I) reactions is:", options: ["IgG", "IgA", "IgE", "IgM"], answer: 2, rationale: "IgE binds mast cells and basophils and mediates immediate hypersensitivity and antiparasitic responses." },
      { type: "mcq", q: "The FIRST antibody produced in a new (acute) infection is:", options: ["IgG", "IgM", "IgA", "IgE"], answer: 1, rationale: "IgM appears first in the primary response; IgG predominates later and in the secondary response." },
      { type: "mcq", q: "HIV causes immunodeficiency mainly by destroying:", options: ["Neutrophils", "CD4 helper T cells", "Red blood cells", "Platelets"], answer: 1, rationale: "HIV infects and destroys CD4 helper T cells, crippling cell-mediated immunity and inviting opportunistic infection." },
      { type: "mcq", q: "Antibodies passed from mother to infant through breast milk provide:", options: ["Natural active immunity", "Artificial active immunity", "Natural passive immunity", "Artificial passive immunity"], answer: 2, rationale: "Ready-made maternal antibodies via milk/placenta are natural passive immunity — immediate but short-lived." },
      { type: "mcq", q: "Systemic lupus erythematosus (SLE), with immune-complex deposition in kidneys and joints, is which type of hypersensitivity?", options: ["Type I", "Type II", "Type III", "Type IV"], answer: 2, rationale: "SLE is a type III immune-complex disease; complexes deposit in tissues and trigger complement-mediated inflammation." },
      { type: "mcq", q: "A CD4 count falling below 200 cells/mm3 in an HIV-positive patient signifies:", options: ["Full recovery", "Progression to AIDS", "Type I allergy", "Autoimmunity"], answer: 1, rationale: "A CD4 count under 200/mm3 (or an AIDS-defining illness) marks progression from HIV infection to AIDS." },
      { type: "mcq", q: "The correct first-line drug for anaphylactic shock is:", options: ["Oral antihistamine only", "Intramuscular adrenaline (epinephrine)", "Oral corticosteroid alone", "Intravenous potassium"], answer: 1, rationale: "Adrenaline reverses bronchospasm and vasodilation and is the immediate life-saving treatment in anaphylaxis." }
      , { type: "fill", q: "Immunity in which the body produces its own antibodies after infection or vaccination is called ____ immunity.", accept: ["active"], rationale: "Active immunity is self-produced and long-lasting; passive immunity is received ready-made and short-lived." }
      , { type: "fill", q: "The immune-cell type directly destroyed by the HIV virus is the ____ T cell.", accept: ["cd4", "helper", "cd4 helper", "t helper"], rationale: "HIV destroys CD4 (helper) T cells, undermining coordination of the immune response." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "pph-06-genetic-congenital",
    unit: "Unit 2 · Immunity, Genetics & Neoplasia",
    title: "Genetic & Congenital Disorders",
    readMinutes: 24,
    summary: "Basic genetics; chromosomal disorders (numerical and structural, e.g. Down syndrome); single-gene (Mendelian) inheritance patterns with examples; multifactorial and congenital disorders; the role of teratogens; and the principles of genetic counselling and nursing support.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Basic genetics", p: "Genetic information is carried in DNA, organised into GENES along 46 chromosomes (23 pairs: 22 autosome pairs and one pair of sex chromosomes, XX in females, XY in males). A gene is the unit of inheritance coding for a protein. A mutation is a permanent change in the DNA sequence; a person's genetic make-up is the GENOTYPE, and its physical expression is the PHENOTYPE. Genetic disease may result from chromosomal, single-gene or multifactorial abnormalities." },
      { h: "Chromosomal disorders — numerical", list: [
        "Aneuploidy — an abnormal chromosome NUMBER, usually from non-disjunction during cell division.",
        "Trisomy 21 (Down syndrome) — an extra chromosome 21; features include intellectual disability, characteristic facies, single palmar crease, hypotonia and congenital heart disease; risk rises with maternal age.",
        "Trisomy 18 (Edwards) and 13 (Patau) — severe, often lethal.",
        "Turner syndrome (45,X) — one X, in females: short stature, webbed neck, ovarian failure.",
        "Klinefelter syndrome (47,XXY) — in males: tall, small testes, infertility."
      ] },
      { h: "Chromosomal disorders — structural", p: "Structural abnormalities involve rearrangement of chromosome material: DELETION (loss of a segment), DUPLICATION (extra copy), TRANSLOCATION (a segment moves to another chromosome — a cause of some Down syndrome and leukaemias), and INVERSION. The Philadelphia chromosome (a translocation) is characteristic of chronic myeloid leukaemia." },
      { h: "Single-gene (Mendelian) inheritance", p: "Single-gene disorders follow predictable Mendelian patterns determined by whether the gene is dominant or recessive and its chromosome location.", figure: {
        caption: "Mendelian inheritance patterns: autosomal dominant, autosomal recessive and X-linked recessive.",
        svg: '<svg viewBox="0 0 620 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mendelian inheritance patterns."><rect x="15" y="25" width="190" height="130" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="110" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">AUTOSOMAL DOMINANT</text><text x="110" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">one copy enough</text><text x="110" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">every generation</text><text x="110" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Huntington,</text><text x="110" y="136" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Marfan</text><rect x="215" y="25" width="190" height="130" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="310" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">AUTOSOMAL RECESSIVE</text><text x="310" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">two copies needed</text><text x="310" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">carriers healthy</text><text x="310" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">sickle cell,</text><text x="310" y="136" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">thalassaemia, CF</text><rect x="415" y="25" width="190" height="130" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="510" y="48" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">X-LINKED RECESSIVE</text><text x="510" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">mainly affects males</text><text x="510" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">females carriers</text><text x="510" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">haemophilia,</text><text x="510" y="136" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Duchenne</text></svg>'
      } },
      { h: "Autosomal dominant disorders", p: "Only ONE abnormal copy is needed to cause disease; an affected person has a 50% chance of passing it to each child, and the disorder appears in every generation. Examples: Huntington disease, Marfan syndrome, familial hypercholesterolaemia, adult polycystic kidney disease, neurofibromatosis." },
      { h: "Autosomal recessive disorders", p: "TWO abnormal copies (one from each parent) are needed to cause disease; heterozygous CARRIERS are healthy. Two carrier parents have a 25% chance of an affected child with each pregnancy. Examples: sickle-cell disease, thalassaemia, cystic fibrosis, phenylketonuria. Consanguineous marriage increases the risk — important in genetic counselling." },
      { h: "X-linked recessive disorders", p: "The abnormal gene is on the X chromosome. MALES (XY) are affected because they have only one X; FEMALES (XX) are usually healthy carriers. An affected father cannot pass it to sons but all his daughters are carriers; a carrier mother passes it to half her sons. Examples: haemophilia A and B, Duchenne muscular dystrophy, red-green colour blindness, G6PD deficiency." },
      { h: "Multifactorial disorders", p: "Multifactorial (polygenic) disorders result from the combined effect of several genes plus environmental factors. They do not follow simple Mendelian ratios but cluster in families. Examples: hypertension, type 2 diabetes, coronary heart disease, neural tube defects (spina bifida), cleft lip/palate, and many common cancers. Prevention targets the modifiable environmental component (e.g. folic acid to prevent neural tube defects)." },
      { h: "Congenital disorders and teratogens", list: [
        "Congenital means present at birth; it may be genetic OR acquired in utero.",
        "Teratogens are agents that cause structural defects in the developing fetus, most dangerous in the first trimester (organogenesis).",
        "Infections (TORCH: toxoplasma, rubella, cytomegalovirus, herpes), drugs (thalidomide, phenytoin, warfarin, alcohol - fetal alcohol syndrome), radiation, and maternal disease (uncontrolled diabetes) are important teratogens.",
        "Folic-acid deficiency contributes to neural tube defects."
      ] },
      { h: "Prenatal detection", list: [
        "Ultrasound — detects structural anomalies.",
        "Maternal serum screening (e.g. triple/quadruple test).",
        "Amniocentesis and chorionic villus sampling — karyotyping for chromosomal disorders.",
        "Newborn screening (heel-prick) — for treatable conditions such as phenylketonuria and congenital hypothyroidism."
      ] },
      { h: "Genetic counselling", p: "Genetic counselling helps families understand the nature, inheritance and recurrence risk of a genetic condition and the reproductive options available, in a non-directive, supportive way. It is especially relevant for couples with a family history, consanguinity, advanced maternal age, or a previously affected child. Nurses often identify at-risk families, provide information and emotional support, and reinforce screening and prevention (e.g. preconception folic acid)." },
      { h: "Clinical relevance for nursing", p: "Nurses contribute to genetic health through taking accurate family histories, supporting prenatal and newborn screening, educating about preventable causes (folic acid, avoiding alcohol and teratogenic drugs, controlling maternal diabetes), and providing sensitive, non-judgemental care and referral. Understanding inheritance patterns lets the nurse answer families' questions about recurrence risk appropriately and refer for counselling." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Describe the chromosomal basis and clinical features of Down syndrome.",
      "Differentiate autosomal dominant, autosomal recessive and X-linked recessive inheritance with examples.",
      "Explain what multifactorial disorders are and give three examples.",
      "Define teratogens and list the major categories with examples.",
      "Discuss the principles of genetic counselling and the nurse's role."
    ],
    assessment: [
      { type: "mcq", q: "Down syndrome is most commonly caused by:", options: ["Deletion of chromosome 5", "Trisomy 21 (an extra chromosome 21)", "Monosomy X", "An extra Y chromosome"], answer: 1, rationale: "Down syndrome usually results from trisomy 21 due to non-disjunction; risk rises with maternal age." },
      { type: "mcq", q: "In an autosomal recessive disorder, two carrier parents have what chance of an affected child in each pregnancy?", options: ["100%", "50%", "25%", "0%"], answer: 2, rationale: "Two heterozygous carriers have a 25% chance of an affected (homozygous) child with each pregnancy." },
      { type: "mcq", q: "Haemophilia A predominantly affects males because it is:", options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Mitochondrial"], answer: 2, rationale: "The gene is on the X chromosome; males (XY) with one abnormal X are affected, while females are usually carriers." },
      { type: "mcq", q: "Which is an example of a MULTIFACTORIAL disorder?", options: ["Cystic fibrosis", "Down syndrome", "Type 2 diabetes mellitus", "Haemophilia"], answer: 2, rationale: "Type 2 diabetes results from multiple genes plus environment (polygenic/multifactorial), unlike single-gene or chromosomal disorders." },
      { type: "mcq", q: "A disorder that appears in every generation and needs only one abnormal gene copy is inherited as:", options: ["Autosomal recessive", "Autosomal dominant", "X-linked recessive", "Multifactorial"], answer: 1, rationale: "Autosomal dominant disorders manifest with a single copy and appear in successive generations (e.g. Huntington disease)." },
      { type: "mcq", q: "The teratogenic risk to the fetus is GREATEST during:", options: ["The first trimester (organogenesis)", "The second trimester", "The third trimester", "Labour"], answer: 0, rationale: "Organ formation occurs in the first trimester, when teratogens cause the most severe structural defects." },
      { type: "mcq", q: "Turner syndrome results from which chromosomal abnormality?", options: ["47,XXY", "45,X (monosomy X)", "Trisomy 18", "Trisomy 13"], answer: 1, rationale: "Turner syndrome (45,X) in females causes short stature, webbed neck and ovarian failure." },
      { type: "mcq", q: "Preconception folic acid is recommended chiefly to prevent:", options: ["Down syndrome", "Neural tube defects", "Haemophilia", "Turner syndrome"], answer: 1, rationale: "Folic acid supplementation reduces the risk of neural tube defects such as spina bifida (a multifactorial condition)." },
      { type: "mcq", q: "A healthy person who carries one copy of a recessive disease gene is a:", options: ["Homozygote", "Carrier (heterozygote)", "Mutant phenotype", "Trisomic"], answer: 1, rationale: "A heterozygous carrier has one normal and one abnormal allele and is clinically healthy but can transmit the gene." },
      { type: "mcq", q: "Which prenatal test provides fetal cells for chromosome (karyotype) analysis?", options: ["Blood pressure measurement", "Amniocentesis", "Urinalysis", "Chest X-ray"], answer: 1, rationale: "Amniocentesis (and chorionic villus sampling) obtains fetal cells for karyotyping to detect chromosomal disorders." }
      , { type: "fill", q: "The physical, observable expression of a person's genes is called the ____.", accept: ["phenotype"], rationale: "The genotype is the genetic make-up; the phenotype is its physical expression." }
      , { type: "fill", q: "An agent that causes structural defects in the developing fetus is called a ____.", accept: ["teratogen"], rationale: "Teratogens (drugs, infections, radiation) are most harmful during first-trimester organogenesis." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "pph-07-neoplasia",
    unit: "Unit 2 · Immunity, Genetics & Neoplasia",
    title: "Neoplasia — Cancer Biology, Grading & Staging",
    readMinutes: 27,
    summary: "The biology of neoplasia: benign vs malignant tumours; nomenclature; carcinogenesis (oncogenes, tumour-suppressor genes, carcinogens); local invasion and metastasis; grading and staging (TNM); paraneoplastic effects; and the pathophysiological basis of cancer's clinical features and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is neoplasia?", p: "Neoplasia means 'new growth' — an abnormal mass of tissue whose growth is uncontrolled, excessive, purposeless and continues after the stimulus that provoked it has stopped. It arises from a loss of normal control over cell proliferation and death. Neoplasms (tumours) are classified as BENIGN or MALIGNANT (cancer). The study of tumours is oncology." },
      { h: "Benign versus malignant", list: [
        "Benign — slow-growing, well differentiated (resemble the tissue of origin), encapsulated, do NOT invade or metastasise; usually harmful only by pressure or location.",
        "Malignant (cancer) — grow rapidly, are poorly differentiated (anaplastic), invade surrounding tissue, and METASTASISE to distant sites; usually fatal if untreated.",
        "Differentiation = how closely tumour cells resemble normal cells; loss of differentiation (anaplasia) is a hallmark of malignancy."
      ] },
      { h: "Nomenclature", list: [
        "Benign tumours generally end in '-oma' (e.g. adenoma, lipoma, fibroma).",
        "Malignant tumours of epithelium are CARCINOMAS (e.g. adenocarcinoma, squamous cell carcinoma).",
        "Malignant tumours of connective tissue/mesenchyme are SARCOMAS (e.g. osteosarcoma).",
        "Cancers of blood-forming cells are leukaemias; of lymphoid tissue, lymphomas.",
        "Some '-oma' names are misleadingly malignant (melanoma, lymphoma)."
      ] },
      { h: "Characteristics of cancer cells", list: [
        "Self-sufficiency in growth signals (independent proliferation).",
        "Insensitivity to growth-inhibiting signals.",
        "Evasion of apoptosis (avoiding programmed cell death).",
        "Limitless replicative potential (immortality).",
        "Sustained angiogenesis (making new blood vessels to feed the tumour).",
        "Ability to invade and metastasise.",
        "Altered metabolism and evasion of immune destruction."
      ] },
      { h: "Carcinogenesis — the genetic basis", p: "Cancer is fundamentally a genetic disease of somatic cells: accumulated mutations disturb genes that control growth. Three gene classes matter: (1) ONCOGENES — mutated 'accelerator' genes (from proto-oncogenes) that drive excess growth; (2) TUMOUR-SUPPRESSOR GENES — 'brake' genes (e.g. p53, RB) whose loss removes growth restraint; and (3) DNA-repair genes whose failure allows further mutations to accumulate. Carcinogenesis is a MULTI-STEP process requiring several such mutations." },
      { h: "Carcinogens (causes)", list: [
        "Chemical — tobacco smoke, aromatic amines, aflatoxin, asbestos.",
        "Physical — ultraviolet light (skin cancer), ionising radiation.",
        "Biological — viruses (HPV → cervical cancer; hepatitis B/C → liver cancer; EBV), Helicobacter pylori (gastric cancer).",
        "Hormonal and dietary factors, and inherited predisposition.",
        "Many carcinogens act over long latent periods."
      ] },
      { h: "Local growth and spread", p: "Malignant tumours enlarge and INVADE adjacent tissues, destroying normal structures (unlike the pushing margin of benign tumours). They spread by three main routes.", figure: {
        caption: "Routes of cancer spread: local invasion, lymphatic spread to nodes, and haematogenous (blood) spread to distant organs.",
        svg: '<svg viewBox="0 0 620 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Routes of cancer spread."><rect x="20" y="35" width="180" height="120" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="110" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">LOCAL INVASION</text><text x="110" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">grows into and</text><text x="110" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">destroys adjacent</text><text x="110" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">tissue</text><rect x="220" y="35" width="180" height="120" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="310" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">LYMPHATIC</text><text x="310" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">spreads to regional</text><text x="310" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">lymph nodes</text><text x="310" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">(carcinomas)</text><rect x="420" y="35" width="180" height="120" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="510" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">HAEMATOGENOUS</text><text x="510" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">via blood to lung,</text><text x="510" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">liver, bone, brain</text><text x="510" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">(sarcomas)</text></svg>'
      } },
      { h: "Metastasis", p: "Metastasis is the spread of cancer to a site physically discontinuous from the primary tumour and is the defining feature of malignancy and the main cause of cancer death. Steps: local invasion → entry into a vessel (intravasation) → survival in the circulation → exit into tissue (extravasation) → growth of a secondary deposit with new angiogenesis. Common metastatic sites are the lymph nodes, liver, lungs, bones and brain — explaining features such as bone pain and pathological fracture." },
      { h: "Grading and staging", list: [
        "GRADING describes how aggressive the tumour looks under the microscope — how well or poorly differentiated it is (low grade = well differentiated, high grade = anaplastic and aggressive).",
        "STAGING describes how far the cancer has SPREAD in the body and guides treatment and prognosis.",
        "The TNM system: T = size/extent of the primary Tumour; N = regional lymph Node involvement; M = distant Metastasis. Higher numbers mean more advanced disease."
      ] },
      { h: "Clinical features of cancer", list: [
        "Local — a lump, ulcer, obstruction, bleeding or pain from the tumour or metastases.",
        "Systemic — unexplained weight loss, fatigue and CACHEXIA (profound wasting), anaemia, fever.",
        "PARANEOPLASTIC syndromes — remote effects from tumour-secreted hormones/substances (e.g. hypercalcaemia, SIADH, Cushing-like features).",
        "Warning signs (CAUTION): Change in bowel/bladder habit, A sore that won't heal, Unusual bleeding, Thickening or lump, Indigestion/dysphagia, Obvious change in a wart/mole, Nagging cough/hoarseness."
      ] },
      { h: "Diagnosis and treatment principles", list: [
        "Diagnosis — biopsy and histopathology (the gold standard), cytology, imaging (CT/MRI/PET), and tumour markers (e.g. PSA, CA-125, AFP).",
        "Treatment modalities — surgery, radiotherapy, chemotherapy, hormonal therapy, targeted and immunotherapy, often combined.",
        "Treatment intent may be curative, adjuvant, or palliative."
      ] },
      { h: "Normal values / key figures", list: [
        "TNM stages are grouped 0-IV; stage IV indicates distant metastasis.",
        "Anaplasia (loss of differentiation) and a high mitotic rate indicate high-grade malignancy.",
        "Metastasis, not the primary tumour, is the commonest cause of cancer death."
      ] },
      { h: "Clinical relevance for nursing", p: "Cancer pathophysiology directs nursing priorities: early recognition of warning signs and prompt referral; safe handling and monitoring of chemotherapy (bone-marrow suppression → infection, bleeding, anaemia); management of pain, cachexia, nausea and mucositis; skin care during radiotherapy; recognising oncological emergencies (neutropenic sepsis, hypercalcaemia, spinal cord compression); and holistic, palliative and psychological support for patient and family." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Differentiate benign and malignant tumours under six headings.",
      "Explain the roles of oncogenes and tumour-suppressor genes in carcinogenesis.",
      "Describe the routes and steps of metastasis.",
      "Explain the difference between grading and staging, and describe the TNM system.",
      "Discuss the systemic effects of cancer and the corresponding nursing management."
    ],
    assessment: [
      { type: "mcq", q: "The single feature that best defines a tumour as malignant is:", options: ["It is encapsulated", "It grows slowly", "It invades and metastasises", "It resembles normal tissue closely"], answer: 2, rationale: "Invasion of surrounding tissue and metastasis to distant sites are the defining features of malignancy." },
      { type: "mcq", q: "A malignant tumour arising from epithelial tissue is called a:", options: ["Carcinoma", "Sarcoma", "Lipoma", "Adenoma"], answer: 0, rationale: "Carcinomas arise from epithelium; sarcomas from connective/mesenchymal tissue; '-oma' alone usually denotes benign." },
      { type: "mcq", q: "Loss of function of the p53 gene contributes to cancer because p53 is a:", options: ["Oncogene (accelerator)", "Structural protein", "Tumour-suppressor gene (brake)", "Clotting factor"], answer: 2, rationale: "p53 is a tumour-suppressor ('brake'); its loss removes a key restraint on abnormal cell growth and impairs apoptosis." },
      { type: "mcq", q: "In the TNM staging system, 'N' refers to:", options: ["Size of the primary tumour", "Number of mitoses", "Regional lymph node involvement", "Distant metastasis"], answer: 2, rationale: "T = tumour size/extent, N = regional node spread, M = distant metastasis." },
      { type: "mcq", q: "How well a tumour resembles its tissue of origin, assessed microscopically, is its:", options: ["Grade (differentiation)", "Stage", "TNM score", "Marker level"], answer: 0, rationale: "Grading reflects differentiation/aggressiveness on histology; staging reflects the extent of spread." },
      { type: "mcq", q: "Human papillomavirus (HPV) is most strongly linked to which cancer?", options: ["Liver cancer", "Osteosarcoma", "Cervical cancer", "Leukaemia"], answer: 2, rationale: "HPV is a biological carcinogen causing most cervical cancers; hepatitis B/C are linked to liver cancer." },
      { type: "mcq", q: "Profound weight loss and muscle wasting in advanced cancer is termed:", options: ["Cachexia", "Anaplasia", "Angiogenesis", "Metaplasia"], answer: 0, rationale: "Cancer cachexia is severe systemic wasting driven by tumour-related metabolic and cytokine effects." },
      { type: "mcq", q: "The commonest cause of death from cancer is:", options: ["The primary tumour itself", "Metastasis", "Benign transformation", "Chemotherapy"], answer: 1, rationale: "Metastatic disease, not the primary tumour, is the leading cause of cancer death." },
      { type: "mcq", q: "A neutropenic patient on chemotherapy who develops a fever should be treated as having:", options: ["A trivial cold", "A possible neutropenic sepsis emergency", "An allergic reaction", "Simple dehydration"], answer: 1, rationale: "Chemotherapy suppresses the bone marrow; fever with neutropenia is a medical emergency requiring urgent antibiotics." },
      { type: "mcq", q: "Remote effects of a tumour caused by substances it secretes (e.g. hypercalcaemia, SIADH) are called:", options: ["Metastases", "Paraneoplastic syndromes", "Grading", "Local invasion"], answer: 1, rationale: "Paraneoplastic syndromes are systemic effects from tumour-secreted hormones or mediators, distinct from metastasis." }
      , { type: "fill", q: "The spread of cancer to a distant, discontinuous site is called ____.", accept: ["metastasis"], rationale: "Metastasis is the defining feature of malignancy and the chief cause of cancer death." }
      , { type: "fill", q: "The most reliable (gold-standard) method to diagnose cancer is ____ with histopathology.", accept: ["biopsy"], rationale: "Tissue biopsy examined microscopically confirms malignancy and provides grade and type." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "pph-08-haemodynamic",
    unit: "Unit 2 · Immunity, Genetics & Neoplasia",
    title: "Haemodynamic Disorders — Oedema, Thrombosis, Embolism, Infarction & Shock",
    readMinutes: 27,
    summary: "Disorders of blood flow and fluid distribution: hyperaemia and congestion; oedema; haemorrhage; the pathogenesis of thrombosis (Virchow's triad); embolism; infarction; disseminated intravascular coagulation; and the types, stages and pathophysiology of shock, with nursing implications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Normal cell and tissue health depends on adequate blood flow, an intact circulation, and balanced fluid distribution. Haemodynamic disorders are disturbances of these — excess or reduced blood in tissue, abnormal fluid leakage, bleeding, inappropriate clotting, blockage of vessels, tissue death from ischaemia, and finally circulatory collapse (shock). They underlie many acute medical and surgical emergencies." },
      { h: "Hyperaemia and congestion", list: [
        "HYPERAEMIA — ACTIVE increase in blood in a tissue from arteriolar dilation (e.g. exercising muscle, inflammation); the tissue is red and warm.",
        "CONGESTION — PASSIVE increase from impaired venous outflow (e.g. heart failure, venous obstruction); the tissue is blue-red (cyanotic) and often cool.",
        "Chronic congestion (e.g. 'nutmeg liver', pulmonary congestion in left heart failure) can cause tissue damage and oedema."
      ] },
      { h: "Oedema (recap of mechanisms)", p: "Oedema is excess fluid in the interstitial space. It results from increased capillary HYDROSTATIC pressure (heart failure, venous obstruction), decreased plasma ONCOTIC pressure (low albumin), increased capillary PERMEABILITY (inflammation), sodium/water retention (renal disease), or LYMPHATIC obstruction (lymphoedema). Pulmonary oedema and cerebral oedema are life-threatening; peripheral pitting oedema is a common nursing observation." },
      { h: "Haemorrhage", list: [
        "Haemorrhage is the escape of blood from vessels, external or internal.",
        "Causes: trauma, vessel disease, clotting disorders, ruptured aneurysm.",
        "Effects depend on volume and speed: rapid loss of >20% of blood volume causes hypovolaemic shock; chronic slow loss causes iron-deficiency anaemia.",
        "Nursing: recognise early signs of concealed bleeding (tachycardia, falling BP, restlessness, pallor) and monitor haemoglobin."
      ] },
      { h: "Haemostasis (normal clotting)", p: "Normal haemostasis stops bleeding through: (1) vasoconstriction; (2) PRIMARY haemostasis — platelet adhesion and aggregation forming a plug; and (3) SECONDARY haemostasis — the coagulation cascade producing fibrin to stabilise the clot. It is balanced by fibrinolysis, which dissolves clots. Thrombosis is pathological, inappropriate activation of this system inside intact vessels." },
      { h: "Thrombosis and Virchow's triad", p: "A thrombus is a solid mass of blood constituents formed within the circulation. Three factors predispose to it — VIRCHOW'S TRIAD.", figure: {
        caption: "Virchow's triad: the three predisposing factors for thrombosis — endothelial injury, abnormal blood flow (stasis/turbulence) and hypercoagulability.",
        svg: '<svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Virchow triad triangle."><polygon points="260,30 70,220 450,220" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2.5"/><rect x="170" y="8" width="180" height="46" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="260" y="28" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">ENDOTHELIAL</text><text x="260" y="44" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">INJURY</text><rect x="10" y="225" width="185" height="46" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="102" y="245" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">ABNORMAL FLOW</text><text x="102" y="261" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">stasis / turbulence</text><rect x="325" y="225" width="185" height="46" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="417" y="245" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">HYPER-</text><text x="417" y="261" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">COAGULABILITY</text><text x="260" y="150" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">THROMBOSIS</text></svg>'
      } },
      { h: "Consequences of thrombosis", list: [
        "Arterial thrombus — often on an atherosclerotic plaque; causes ischaemia and infarction (MI, stroke).",
        "Venous thrombus — from stasis (immobility, surgery, pregnancy); deep vein thrombosis (DVT) of the leg is common.",
        "A thrombus may: resolve, organise into the vessel wall, occlude the vessel, or EMBOLISE.",
        "DVT prophylaxis (early mobilisation, anticoagulants, compression) is a key nursing responsibility."
      ] },
      { h: "Embolism", p: "An embolus is any detached intravascular mass carried by the blood to a distant site where it lodges and obstructs a vessel. Most (>95%) are thromboemboli. A venous (leg/pelvic) thrombus travels to the lungs → PULMONARY EMBOLISM (breathlessness, pleuritic pain, hypoxia, collapse). An arterial embolus causes systemic infarction (brain, limb). Other emboli: fat (long-bone fracture), air, amniotic fluid, and septic emboli." },
      { h: "Infarction", p: "Infarction is an area of tissue necrosis caused by loss of blood supply (ischaemia), usually from arterial occlusion by a thrombus or embolus. Examples: myocardial infarction, cerebral infarction (ischaemic stroke), bowel infarction. The tissue undergoes (usually coagulative) necrosis; leaked enzymes and inflammation follow. Susceptibility depends on the tissue's oxygen demand and whether it has a dual/collateral blood supply." },
      { h: "Disseminated intravascular coagulation (DIC)", p: "DIC is a serious acquired disorder in which widespread activation of clotting consumes platelets and clotting factors, forming microthrombi that block small vessels (causing ischaemia) while the CONSUMPTION of clotting factors then causes paradoxical BLEEDING. Triggers include sepsis, major trauma, obstetric complications and malignancy. It is a life-threatening emergency demanding treatment of the underlying cause and replacement of blood products." },
      { h: "Shock — definition and types", list: [
        "Shock is a state of inadequate tissue PERFUSION, so cells receive too little oxygen for their needs, leading to cellular injury and, if uncorrected, death.",
        "HYPOVOLAEMIC — loss of blood/fluid (haemorrhage, burns, dehydration).",
        "CARDIOGENIC — pump failure (massive MI, arrhythmia).",
        "DISTRIBUTIVE — massive vasodilation (SEPTIC, anaphylactic, neurogenic shock).",
        "OBSTRUCTIVE — mechanical obstruction to flow (massive pulmonary embolism, cardiac tamponade)."
      ] },
      { h: "Stages and pathophysiology of shock", p: "Shock progresses through: (1) COMPENSATED (non-progressive) — reflexes (sympathetic activation, RAAS) maintain blood pressure; the patient is tachycardic, cool and anxious with normal/near-normal BP. (2) PROGRESSIVE (decompensated) — compensation fails; hypotension, tissue hypoxia, LACTIC ACIDOSIS, oliguria and confusion develop. (3) IRREVERSIBLE — widespread cell and organ damage (multi-organ failure) unresponsive to treatment. Early recognition in the compensated stage is critical." },
      { h: "Clinical relevance for nursing", p: "Haemodynamic pathophysiology underlies core acute-care nursing: DVT/PE prophylaxis through early mobilisation and anticoagulation; vigilant monitoring for concealed haemorrhage; recognising the EARLY (compensated) signs of shock — tachycardia, cool clammy skin, restlessness, narrowing pulse pressure and falling urine output — BEFORE the blood pressure drops; and managing shock with airway support, oxygen, fluid resuscitation, positioning and urgent escalation. Warm skin with hypotension suggests septic (distributive) shock." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Differentiate hyperaemia from congestion.",
      "Describe Virchow's triad and relate it to the prevention of deep vein thrombosis.",
      "Explain the difference between a thrombus and an embolus, and describe pulmonary embolism.",
      "Define shock, classify its types, and describe its three stages.",
      "Discuss the early nursing recognition and management of hypovolaemic shock."
    ],
    assessment: [
      { type: "mcq", q: "The three components of Virchow's triad are endothelial injury, hypercoagulability and:", options: ["High blood pressure", "Abnormal blood flow (stasis/turbulence)", "Anaemia", "Fever"], answer: 1, rationale: "Virchow's triad = endothelial injury + abnormal flow (stasis/turbulence) + hypercoagulability, the basis of thrombosis." },
      { type: "mcq", q: "A detached thrombus from a leg vein most commonly lodges in the:", options: ["Brain", "Coronary artery", "Kidney", "Lungs (pulmonary embolism)"], answer: 3, rationale: "Venous emboli travel through the right heart to the pulmonary arteries, causing pulmonary embolism." },
      { type: "mcq", q: "An area of tissue necrosis due to loss of blood supply is a/an:", options: ["Infarct", "Embolus", "Thrombus", "Haematoma"], answer: 0, rationale: "Infarction is ischaemic necrosis from arterial occlusion (e.g. myocardial infarction)." },
      { type: "mcq", q: "A trauma patient is tachycardic with cool, clammy skin but a still-normal blood pressure. This represents:", options: ["Irreversible shock", "No shock", "Compensated (early) shock", "Cardiogenic pulmonary oedema"], answer: 2, rationale: "In compensated shock, sympathetic reflexes keep BP near normal while producing tachycardia and cool, clammy skin — the window for early intervention." },
      { type: "mcq", q: "Passive congestion of a tissue is caused by:", options: ["Impaired venous outflow", "Arteriolar dilation", "Increased oxygen delivery", "Fibrinolysis"], answer: 0, rationale: "Congestion is passive, from reduced venous drainage; hyperaemia is active, from arteriolar dilation." },
      { type: "mcq", q: "Warm, flushed skin with hypotension in a septic patient reflects which type of shock?", options: ["Hypovolaemic", "Cardiogenic", "Distributive (septic)", "Obstructive"], answer: 2, rationale: "Septic shock is distributive: widespread vasodilation initially gives warm skin despite falling blood pressure." },
      { type: "mcq", q: "In disseminated intravascular coagulation (DIC), bleeding occurs because:", options: ["Too many platelets are made", "Clotting factors and platelets are consumed by widespread clotting", "Fibrinolysis is switched off", "Blood pressure is high"], answer: 1, rationale: "Widespread microthrombi consume platelets and clotting factors, leaving too few for haemostasis — hence paradoxical bleeding." },
      { type: "mcq", q: "The most important nursing measure to prevent deep vein thrombosis in an immobile post-operative patient is:", options: ["Bed rest without moving", "Early mobilisation and prescribed prophylaxis", "Restricting fluids", "High-salt diet"], answer: 1, rationale: "Early mobilisation, anticoagulant prophylaxis and compression counter the stasis limb of Virchow's triad." },
      { type: "mcq", q: "Shock is fundamentally a state of:", options: ["High tissue oxygen", "Inadequate tissue perfusion and oxygen delivery", "Excess clotting only", "Raised blood pressure"], answer: 1, rationale: "Shock is inadequate perfusion, so cells lack oxygen, causing injury and, if uncorrected, organ failure and death." },
      { type: "mcq", q: "Lactic acidosis developing during shock indicates that cells are:", options: ["Using aerobic metabolism efficiently", "Undergoing anaerobic metabolism from hypoxia", "Fully perfused", "Producing extra bicarbonate"], answer: 1, rationale: "Inadequate oxygen forces anaerobic glycolysis, producing lactic acid — a marker of worsening (progressive) shock." }
      , { type: "fill", q: "A solid mass formed from blood constituents within an intact vessel is a ____.", accept: ["thrombus"], rationale: "A thrombus forms in situ; if it detaches and travels it becomes an embolus." }
      , { type: "fill", q: "Shock caused by massive vasodilation, as in sepsis or anaphylaxis, is classified as ____ shock.", accept: ["distributive"], rationale: "Distributive shock (septic, anaphylactic, neurogenic) results from widespread vasodilation and maldistribution of blood." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "pph-09-cardiovascular",
    unit: "Unit 3 · Systemic Pathophysiology I",
    title: "Cardiovascular Pathophysiology — Atherosclerosis, Hypertension, IHD & Heart Failure",
    readMinutes: 28,
    summary: "The major cardiovascular disorders: atherosclerosis and its mechanism; hypertension (types, effects on target organs); ischaemic heart disease (angina and myocardial infarction); and heart failure (left vs right, systolic vs diastolic), each linked to their clinical signs and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Cardiovascular disease is a leading cause of death worldwide. Most serious conditions share a common thread: atherosclerosis narrows arteries, hypertension increases cardiac workload, and both lead to ischaemic heart disease and, ultimately, heart failure. Understanding these linked mechanisms lets the nurse anticipate complications and interpret vital signs and symptoms." },
      { h: "Atherosclerosis — pathogenesis", p: "Atherosclerosis is the progressive build-up of lipid-rich plaques (atheromas) in the intima of large and medium arteries. Steps: (1) ENDOTHELIAL injury (from hypertension, smoking, high LDL, diabetes) → (2) LDL cholesterol enters and is oxidised → (3) monocytes enter and become macrophage FOAM cells → (4) a fatty streak forms → (5) smooth-muscle proliferation and a FIBROUS CAP over a lipid core form a mature plaque → (6) the plaque narrows the lumen (ischaemia) and may RUPTURE, triggering thrombosis and acute occlusion (MI, stroke)." },
      { h: "Risk factors for atherosclerosis", list: [
        "Non-modifiable — age, male sex, family history.",
        "Modifiable — smoking, hypertension, high LDL/low HDL cholesterol, diabetes mellitus, obesity, physical inactivity, unhealthy diet.",
        "Control of modifiable factors is the basis of both primary and secondary prevention."
      ] },
      { h: "Hypertension — definition and classification", list: [
        "Hypertension is persistently raised arterial pressure, generally >=140/90 mmHg (definitions vary; normal ~<120/80 mmHg).",
        "PRIMARY (essential) hypertension — ~90-95%, no single identifiable cause; multifactorial (genetics, salt, obesity, stress).",
        "SECONDARY hypertension — due to an identifiable cause: renal disease, endocrine disorders (phaeochromocytoma, Conn's, Cushing's), coarctation, drugs.",
        "It is often called the 'silent killer' because it is usually asymptomatic until target-organ damage appears."
      ] },
      { h: "Effects of hypertension (target-organ damage)", list: [
        "Heart — left-ventricular hypertrophy, heart failure, ischaemic heart disease.",
        "Brain — stroke (ischaemic and haemorrhagic), hypertensive encephalopathy.",
        "Kidneys — nephrosclerosis and chronic kidney disease.",
        "Eyes — hypertensive retinopathy.",
        "Vessels — accelerated atherosclerosis, aneurysm.",
        "These explain why blood-pressure control protects multiple organs."
      ] },
      { h: "Ischaemic heart disease — angina", p: "Ischaemic (coronary) heart disease arises when atherosclerosis reduces coronary blood flow so myocardial oxygen SUPPLY cannot meet DEMAND. STABLE ANGINA is chest pain on exertion, relieved by rest or nitrates, from a fixed narrowing — a reversible, temporary ischaemia with NO cell death. UNSTABLE ANGINA (pain at rest, from plaque disruption with partial thrombus) is an acute coronary syndrome and a warning of impending infarction.", figure: {
        caption: "Myocardial oxygen supply-demand balance: ischaemia (angina) occurs when demand exceeds the supply limited by coronary narrowing; total occlusion causes infarction.",
        svg: '<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Myocardial oxygen supply and demand balance."><rect x="40" y="40" width="200" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="140" y="66" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">O2 SUPPLY</text><text x="140" y="86" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">coronary flow (limited)</text><rect x="360" y="40" width="200" height="60" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="460" y="66" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">O2 DEMAND</text><text x="460" y="86" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">heart rate, workload</text><line x1="240" y1="70" x2="360" y2="70" stroke="#0F4C3A" stroke-width="2"/><circle cx="300" cy="70" r="10" fill="#22C55E"/><rect x="150" y="140" width="300" height="45" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="300" y="162" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Demand &gt; Supply = ISCHAEMIA (angina)</text><text x="300" y="178" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">total occlusion = INFARCTION</text></svg>'
      } },
      { h: "Myocardial infarction (MI)", p: "MI is death (necrosis) of heart muscle from PROLONGED, complete interruption of coronary blood flow, usually when an atherosclerotic plaque ruptures and a thrombus totally occludes the artery. Features: severe, crushing central chest pain (may radiate to the arm/jaw), NOT relieved by rest/nitrates, with sweating, nausea, breathlessness and anxiety. Diagnosis: ECG changes (ST elevation in STEMI) and rising cardiac TROPONIN. Necrosis is irreversible, so 'time is muscle' — urgent reperfusion (thrombolysis or angioplasty) limits the damage." },
      { h: "Complications of MI", list: [
        "Arrhythmias — the commonest early cause of death.",
        "Heart failure and cardiogenic shock.",
        "Cardiac rupture, mural thrombus and embolism.",
        "Pericarditis.",
        "These justify continuous cardiac monitoring in the acute phase."
      ] },
      { h: "Heart failure — definition and types", p: "Heart failure is the inability of the heart to pump enough blood to meet the body's needs. Types: LEFT-sided (commonest; from MI, hypertension, valve disease) causes blood to back up into the LUNGS; RIGHT-sided (often secondary to left failure or lung disease) causes back-up into the SYSTEMIC veins. SYSTOLIC failure is reduced contractility (low ejection fraction); DIASTOLIC failure is a stiff ventricle that fills poorly (preserved ejection fraction)." },
      { h: "Pathophysiology and compensation in heart failure", p: "When cardiac output falls, the body compensates by: sympathetic activation (tachycardia, vasoconstriction), the RENIN-ANGIOTENSIN-ALDOSTERONE system (sodium and water retention, raising preload), and ventricular hypertrophy/dilation. These help initially but eventually WORSEN failure — the retained fluid causes congestion and the extra workload strains the failing heart (a vicious cycle). This explains why ACE inhibitors, beta-blockers and diuretics are central to treatment." },
      { h: "Clinical features of heart failure", list: [
        "LEFT failure (pulmonary congestion) — breathlessness (dyspnoea), orthopnoea, paroxysmal nocturnal dyspnoea, cough with frothy sputum, bilateral crackles, fatigue.",
        "RIGHT failure (systemic congestion) — raised jugular venous pressure, dependent/pitting oedema (ankles, sacrum), hepatomegaly, ascites, weight gain.",
        "These signs directly reflect where the blood is 'backing up'."
      ] },
      { h: "Normal values / key figures", list: [
        "Normal BP ~<120/80 mmHg; hypertension commonly >=140/90 mmHg.",
        "Normal resting heart rate 60-100/min; ejection fraction normally 55-70%.",
        "Cardiac troponin rises within hours of myocardial infarction and is highly specific for cardiac necrosis."
      ] },
      { h: "Clinical relevance for nursing", p: "Nursing care follows directly from the mechanisms: recognising the crushing, unrelieved chest pain of MI and acting urgently (oxygen, aspirin, ECG, escalate); continuous cardiac monitoring for arrhythmia; for heart failure — positioning upright to ease breathing, daily weights and strict fluid balance to detect congestion, monitoring the response to diuretics (and watching for hypokalaemia), sodium and fluid restriction, and education on medication adherence, salt reduction and recognising worsening symptoms." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Describe the step-by-step pathogenesis of atherosclerosis and its risk factors.",
      "Differentiate primary and secondary hypertension and list the target-organ effects.",
      "Compare stable angina, unstable angina and myocardial infarction.",
      "Explain the pathophysiology and compensatory mechanisms of heart failure.",
      "Differentiate left-sided from right-sided heart failure by clinical features and relate them to nursing care."
    ],
    assessment: [
      { type: "mcq", q: "The initiating event in atherosclerosis is:", options: ["Foam-cell death", "Endothelial injury", "Fibrous-cap rupture", "Calcification"], answer: 1, rationale: "Endothelial injury (from hypertension, smoking, high LDL, diabetes) begins the atherosclerotic process, allowing LDL entry." },
      { type: "mcq", q: "Chest pain that occurs on exertion and is relieved by rest or nitrates, with no cell death, is:", options: ["Myocardial infarction", "Pericarditis", "Stable angina", "Heart failure"], answer: 2, rationale: "Stable angina is reversible ischaemia from a fixed coronary narrowing, relieved by rest/nitrates, without necrosis." },
      { type: "mcq", q: "The blood test most specific for myocardial cell death is:", options: ["Serum troponin", "Haemoglobin", "Serum sodium", "White cell count"], answer: 0, rationale: "Cardiac troponin leaks from necrotic myocytes and is the most specific marker of myocardial infarction." },
      { type: "mcq", q: "In LEFT-sided heart failure, blood backs up into the lungs, producing:", options: ["Ankle oedema and raised JVP", "Ascites and hepatomegaly", "Dyspnoea, orthopnoea and lung crackles", "Splenomegaly"], answer: 2, rationale: "Left failure causes pulmonary congestion — breathlessness, orthopnoea and crackles; right failure causes systemic congestion." },
      { type: "mcq", q: "Raised JVP, ankle oedema and hepatomegaly are classic features of:", options: ["Left-sided heart failure", "Stable angina", "Right-sided heart failure", "Hypertensive retinopathy"], answer: 2, rationale: "Right heart failure causes systemic venous congestion — raised JVP, dependent oedema, hepatomegaly and ascites." },
      { type: "mcq", q: "Hypertension is called the 'silent killer' mainly because it:", options: ["Always causes severe headache", "Only affects young people", "Cannot be measured", "Is usually asymptomatic until target-organ damage occurs"], answer: 3, rationale: "Hypertension typically produces no symptoms until it has damaged the heart, brain, kidneys or eyes." },
      { type: "mcq", q: "Activation of the renin-angiotensin-aldosterone system in heart failure initially helps but ultimately worsens failure by:", options: ["Reducing blood volume", "Retaining sodium and water, increasing congestion and workload", "Lowering blood pressure excessively", "Stopping the heartbeat"], answer: 1, rationale: "RAAS retains salt and water, raising preload; while compensatory at first, it eventually increases congestion and cardiac load." },
      { type: "mcq", q: "The commonest EARLY cause of death after acute myocardial infarction is:", options: ["Cardiac arrhythmia", "Wound infection", "Anaemia", "Constipation"], answer: 0, rationale: "Arrhythmias (especially ventricular fibrillation) are the leading early cause of death, so continuous cardiac monitoring is essential." },
      { type: "mcq", q: "About 90-95% of hypertension cases are classified as:", options: ["Secondary hypertension", "Primary (essential) hypertension", "Malignant hypertension only", "White-coat hypertension"], answer: 1, rationale: "Most hypertension is primary (essential) with no single identifiable cause; secondary hypertension has an identifiable cause." },
      { type: "mcq", q: "A key nursing action for a patient with acute pulmonary oedema from left heart failure is to:", options: ["Lay the patient flat", "Encourage a high-salt diet", "Sit the patient upright, give oxygen and monitor fluid balance", "Restrict all monitoring"], answer: 2, rationale: "An upright position and oxygen ease breathing; fluid balance and daily weights track congestion and diuretic response." }
      , { type: "fill", q: "Death of heart muscle caused by prolonged interruption of coronary blood flow is called myocardial ____.", accept: ["infarction", "infarct"], rationale: "Complete coronary occlusion causes irreversible myocardial necrosis — myocardial infarction." }
      , { type: "fill", q: "Enlargement of the left ventricle wall due to the chronic pressure load of hypertension is called left-ventricular ____.", accept: ["hypertrophy"], rationale: "The pressure-loaded ventricle hypertrophies (cells enlarge) to cope, a step toward heart failure." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "pph-10-respiratory",
    unit: "Unit 3 · Systemic Pathophysiology I",
    title: "Respiratory Pathophysiology — Obstructive vs Restrictive, COPD, Asthma, Pneumonia & Respiratory Failure",
    readMinutes: 27,
    summary: "Disorders of ventilation and gas exchange: obstructive versus restrictive patterns; asthma and COPD (chronic bronchitis and emphysema); pneumonia; and acute respiratory failure (type I and type II), each explained mechanistically and linked to the nurse's respiratory assessment.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of respiratory function", p: "The lungs perform VENTILATION (moving air in and out) and GAS EXCHANGE (oxygen into blood, carbon dioxide out) across the alveolar-capillary membrane. Respiratory disease disrupts one or both, causing HYPOXAEMIA (low blood oxygen) and/or HYPERCAPNIA (raised carbon dioxide). The commonest way to classify chronic lung disease is into obstructive and restrictive patterns." },
      { h: "Obstructive vs restrictive disease", list: [
        "OBSTRUCTIVE — narrowed/blocked airways make it hard to get air OUT; expiration is slowed and air is trapped; the FEV1/FVC ratio is REDUCED. Examples: asthma, COPD, bronchiectasis.",
        "RESTRICTIVE — the lungs cannot expand fully, so total lung volume is reduced; both FEV1 and FVC fall but the RATIO is preserved or increased. Examples: pulmonary fibrosis, pleural effusion, chest-wall deformity, neuromuscular weakness.",
        "Spirometry (FEV1/FVC) distinguishes the two patterns."
      ] },
      { h: "Asthma", p: "Asthma is a chronic INFLAMMATORY airway disorder with REVERSIBLE bronchoconstriction and airway hyper-responsiveness to triggers (allergens, cold air, exercise, infection, irritants). Pathophysiology: trigger → mast-cell and eosinophil-driven inflammation → three changes — BRONCHOSPASM (smooth-muscle contraction), airway OEDEMA, and excess MUCUS — that narrow the airways. Features: episodic wheeze, breathlessness, chest tightness and cough, often worse at night; expiration is prolonged. Because it is reversible, bronchodilators and inhaled steroids control it." },
      { h: "COPD — overview", p: "Chronic obstructive pulmonary disease (COPD) is a progressive, largely IRREVERSIBLE airflow limitation, most often caused by SMOKING. It combines two overlapping conditions — chronic bronchitis and emphysema.", figure: {
        caption: "COPD comprises chronic bronchitis (airway inflammation, mucus) and emphysema (alveolar wall destruction), both causing airflow limitation.",
        svg: '<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Components of COPD."><rect x="200" y="10" width="200" height="42" rx="9" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="300" y="37" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#F0FDF4">COPD</text><rect x="30" y="95" width="230" height="70" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="145" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">CHRONIC BRONCHITIS</text><text x="145" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">airway inflammation,</text><text x="145" y="155" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">mucus, productive cough</text><rect x="340" y="95" width="230" height="70" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="455" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">EMPHYSEMA</text><text x="455" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">alveolar wall</text><text x="455" y="155" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">destruction, air trapping</text><line x1="250" y1="52" x2="145" y2="93" stroke="#0F4C3A" stroke-width="2"/><line x1="350" y1="52" x2="455" y2="93" stroke="#0F4C3A" stroke-width="2"/></svg>'
      } },
      { h: "Chronic bronchitis and emphysema", list: [
        "CHRONIC BRONCHITIS — defined clinically as a productive cough for >=3 months in 2 consecutive years; there is airway inflammation, mucus-gland hypertrophy and excess mucus; patients are often cyanotic with cough ('blue bloaters').",
        "EMPHYSEMA — permanent destruction of alveolar walls, reducing surface area for gas exchange and elastic recoil, causing air trapping and hyperinflation; patients are breathless with a 'barrel chest' ('pink puffers').",
        "Most COPD patients have features of both."
      ] },
      { h: "Pneumonia", p: "Pneumonia is acute infection and inflammation of the lung PARENCHYMA (alveoli), which fill with inflammatory EXUDATE (consolidation), impairing gas exchange. Causes: bacteria (Streptococcus pneumoniae commonest), viruses, fungi; classified as community-acquired, hospital-acquired (nosocomial) or aspiration pneumonia. Features: fever, cough with purulent sputum, pleuritic chest pain, breathlessness, tachypnoea, and on examination crackles, bronchial breathing and dullness over the consolidated area. Hypoxaemia results from the consolidated alveoli." },
      { h: "Respiratory failure — types", list: [
        "TYPE I (hypoxaemic) — LOW oxygen (PaO2 < 60 mmHg) with NORMAL or low CO2; caused by problems of gas exchange (pneumonia, pulmonary oedema, PE, ARDS).",
        "TYPE II (hypercapnic) — LOW oxygen WITH HIGH CO2 (PaCO2 > 45-50 mmHg) and respiratory acidosis; caused by failure of ventilation (severe COPD, respiratory-muscle weakness, drug-induced depression).",
        "Recognising the type guides oxygen therapy — cautious controlled oxygen in type II COPD to avoid removing the hypoxic drive."
      ] },
      { h: "Signs of hypoxaemia and hypercapnia", list: [
        "Hypoxaemia — restlessness, confusion, tachycardia, tachypnoea, CYANOSIS (late), falling SpO2.",
        "Hypercapnia (CO2 retention) — headache, drowsiness, warm flushed skin, bounding pulse, flapping tremor (asterixis), and eventually CO2 narcosis.",
        "Pulse oximetry (SpO2, normally >=95%) and arterial blood gases quantify these."
      ] },
      { h: "Mechanisms of hypoxaemia", list: [
        "Ventilation-perfusion (V/Q) mismatch — the commonest cause; alveoli are perfused but poorly ventilated (pneumonia, asthma).",
        "Hypoventilation — inadequate air movement raises CO2 and lowers O2 (drug overdose, muscle weakness).",
        "Impaired diffusion — thickened alveolar-capillary membrane (pulmonary oedema, fibrosis).",
        "Right-to-left shunt — blood bypasses ventilated alveoli.",
        "Understanding the mechanism guides whether oxygen alone, ventilation or treating the cause is needed."
      ] },
      { h: "General management principles", list: [
        "Ensure a patent airway and adequate oxygenation (targeted SpO2).",
        "Bronchodilators and steroids for asthma/COPD; antibiotics for bacterial pneumonia.",
        "Chest physiotherapy, positioning and secretion clearance.",
        "Non-invasive or mechanical ventilation for respiratory failure.",
        "Smoking cessation and vaccination (influenza, pneumococcal) for prevention."
      ] },
      { h: "Normal values / key figures", list: [
        "Normal respiratory rate 12-20/min; SpO2 normally 95-100%.",
        "PaO2 80-100 mmHg; PaCO2 35-45 mmHg (respiratory failure: PaO2 < 60; type II PaCO2 > 45-50).",
        "FEV1/FVC reduced (< ~70%) indicates an obstructive pattern."
      ] },
      { h: "Clinical relevance for nursing", p: "Respiratory pathophysiology underpins the nurse's assessment: counting the respiratory rate (an early, sensitive sign of deterioration), observing effort, accessory-muscle use and cyanosis, auscultating for wheeze or crackles, and monitoring SpO2. Key actions include positioning upright, controlled oxygen (especially cautious in type II COPD), teaching inhaler technique and pursed-lip breathing, encouraging expectoration and hydration, and recognising when rising respiratory rate, falling SpO2 or drowsiness (CO2 narcosis) demand urgent escalation." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Differentiate obstructive and restrictive lung disease using spirometry and examples.",
      "Explain the pathophysiology of asthma and why it is reversible.",
      "Compare chronic bronchitis and emphysema within COPD.",
      "Describe the pathophysiology and clinical features of pneumonia.",
      "Differentiate type I and type II respiratory failure and outline the nursing implications for oxygen therapy."
    ],
    assessment: [
      { type: "mcq", q: "A reduced FEV1/FVC ratio on spirometry indicates:", options: ["A restrictive pattern", "An obstructive pattern", "Normal lungs", "Pleural effusion"], answer: 1, rationale: "Obstructive disease slows expiration, lowering the FEV1/FVC ratio; in restrictive disease the ratio is preserved." },
      { type: "mcq", q: "The three airway changes that narrow the airways in an acute asthma attack are bronchospasm, mucus and:", options: ["Alveolar destruction", "Pleural effusion", "Airway wall oedema", "Pulmonary embolism"], answer: 2, rationale: "Asthma narrows airways by bronchospasm, inflammatory oedema of the wall and excess mucus — all reversible." },
      { type: "mcq", q: "Permanent destruction of alveolar walls with loss of elastic recoil describes:", options: ["Emphysema", "Chronic bronchitis", "Pneumonia", "Asthma"], answer: 0, rationale: "Emphysema destroys alveolar walls, reducing gas-exchange surface and causing air trapping and hyperinflation." },
      { type: "mcq", q: "Consolidation heard as crackles and dullness with fever and purulent sputum suggests:", options: ["Asthma", "Emphysema", "Pneumonia", "Pulmonary embolism"], answer: 2, rationale: "Pneumonia fills alveoli with exudate (consolidation), giving crackles, dullness, fever and purulent sputum." },
      { type: "mcq", q: "Type II respiratory failure is characterised by:", options: ["Low O2 with normal CO2", "High O2 with low CO2", "Normal gases", "Low O2 with HIGH CO2 and respiratory acidosis"], answer: 3, rationale: "Type II (ventilatory) failure has hypoxaemia PLUS hypercapnia and respiratory acidosis, e.g. in severe COPD." },
      { type: "mcq", q: "Caution with high-flow oxygen in a patient with severe type II COPD is advised because it may:", options: ["Cure the disease", "Remove the hypoxic respiratory drive and worsen CO2 retention", "Lower the heart rate only", "Cause hypocalcaemia"], answer: 1, rationale: "Some CO2-retaining COPD patients rely on hypoxic drive; uncontrolled oxygen can blunt ventilation and raise CO2 dangerously." },
      { type: "mcq", q: "Which is the EARLIEST and most sensitive sign of respiratory deterioration a nurse should monitor?", options: ["Rising respiratory rate", "Cyanosis", "Clubbing", "Barrel chest"], answer: 0, rationale: "A rising respiratory rate is an early, sensitive warning; cyanosis is a late sign of severe hypoxaemia." },
      { type: "mcq", q: "A flapping tremor (asterixis), headache and drowsiness in a breathless patient suggest:", options: ["Hypocapnia", "Carbon dioxide retention (hypercapnia)", "Hyperoxia", "Anaemia"], answer: 1, rationale: "Hypercapnia (CO2 retention) causes headache, warm skin, bounding pulse, asterixis and eventually CO2 narcosis." },
      { type: "mcq", q: "Which lung disease is characterised by REVERSIBLE airflow limitation?", options: ["Emphysema", "Pulmonary fibrosis", "Asthma", "Bronchiectasis"], answer: 2, rationale: "Asthma features reversible bronchoconstriction; COPD and fibrosis cause largely irreversible limitation." },
      { type: "mcq", q: "A restrictive pattern (reduced volumes, preserved FEV1/FVC ratio) is typical of:", options: ["Asthma", "COPD", "Pulmonary fibrosis", "Chronic bronchitis"], answer: 2, rationale: "Pulmonary fibrosis stiffens the lungs, reducing expansion and volumes while preserving the FEV1/FVC ratio." }
      , { type: "fill", q: "Filling of alveoli with inflammatory exudate in pneumonia is called ____.", accept: ["consolidation"], rationale: "Consolidation impairs gas exchange and produces dullness and crackles on examination." }
      , { type: "fill", q: "Low blood oxygen with a normal carbon dioxide level is called type ____ respiratory failure.", accept: ["i", "1", "one"], rationale: "Type I is hypoxaemic failure (gas-exchange problem); type II adds hypercapnia (ventilatory failure)." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "pph-11-renal",
    unit: "Unit 4 · Systemic Pathophysiology II",
    title: "Renal & Urinary Pathophysiology — AKI, CKD, Glomerular & Tubular Disorders",
    readMinutes: 27,
    summary: "Disorders of the kidney and urinary tract: acute kidney injury (pre-renal, intrinsic, post-renal) and its phases; chronic kidney disease and uraemia; glomerular disease (nephritic vs nephrotic syndromes); tubular injury; and the pathophysiological basis of the nurse's fluid, electrolyte and monitoring role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Normal renal function", p: "The kidneys filter blood to remove wastes (urea, creatinine), regulate fluid and electrolyte balance, control acid-base balance, maintain blood pressure (renin), stimulate red-cell production (erythropoietin) and activate vitamin D. The functional unit is the NEPHRON (glomerulus + tubule). Renal function is assessed by the glomerular filtration rate (GFR), serum creatinine, urea and urine output. When function fails, wastes accumulate and homeostasis is lost." },
      { h: "Acute kidney injury (AKI) — definition and causes", p: "AKI is a rapid (hours to days) decline in renal function, shown by rising creatinine/urea and usually falling urine output. It is classified by the site of the problem.", figure: {
        caption: "Causes of acute kidney injury: pre-renal (reduced perfusion), intrinsic/renal (kidney tissue damage) and post-renal (obstruction to outflow).",
        svg: '<svg viewBox="0 0 620 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Causes of acute kidney injury."><rect x="15" y="35" width="185" height="120" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="107" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">PRE-RENAL</text><text x="107" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">reduced perfusion</text><text x="107" y="106" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">hypovolaemia,</text><text x="107" y="122" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">shock, dehydration</text><rect x="217" y="35" width="185" height="120" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="309" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">INTRINSIC (RENAL)</text><text x="309" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">kidney tissue damage</text><text x="309" y="106" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">acute tubular necrosis,</text><text x="309" y="122" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">glomerulonephritis</text><rect x="419" y="35" width="185" height="120" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="511" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">POST-RENAL</text><text x="511" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">outflow obstruction</text><text x="511" y="106" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">stones, enlarged</text><text x="511" y="122" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">prostate, tumour</text></svg>'
      } },
      { h: "Three categories of AKI", list: [
        "PRE-RENAL — reduced blood flow to the kidney (hypovolaemia, haemorrhage, shock, heart failure); the kidney tissue is initially normal and function recovers if perfusion is restored quickly.",
        "INTRINSIC (RENAL) — direct damage to kidney tissue; ACUTE TUBULAR NECROSIS (from prolonged ischaemia or nephrotoxins) is the commonest; also glomerulonephritis.",
        "POST-RENAL — obstruction to urine outflow (stones, enlarged prostate, tumour); relieving the obstruction can restore function."
      ] },
      { h: "Phases of AKI", list: [
        "Onset/initiating phase — the injury occurs.",
        "OLIGURIC phase — urine output falls (< 400 mL/day); waste products, potassium and fluid accumulate, risking hyperkalaemia, fluid overload and acidosis.",
        "DIURETIC phase — urine output rises as tubules recover; risk of dehydration and electrolyte loss.",
        "RECOVERY phase — function gradually normalises over weeks to months."
      ] },
      { h: "Chronic kidney disease (CKD)", p: "CKD is a progressive, IRREVERSIBLE loss of nephrons and renal function over months to years, staged by GFR (stages 1-5; stage 5 = end-stage renal disease requiring dialysis or transplant). Common causes: DIABETES mellitus (the leading cause), HYPERTENSION, chronic glomerulonephritis and polycystic kidney disease. Surviving nephrons hyperfilter to compensate, but this accelerates their own destruction — a vicious cycle." },
      { h: "Uraemia — effects of renal failure", list: [
        "Fluid overload — oedema, hypertension, pulmonary oedema.",
        "Electrolyte/acid-base — HYPERKALAEMIA (dangerous arrhythmias), metabolic acidosis, hyperphosphataemia and hypocalcaemia.",
        "Waste accumulation (uraemia) — nausea, anorexia, fatigue, itching, confusion, pericarditis.",
        "Anaemia — from reduced erythropoietin.",
        "Renal bone disease — from disturbed calcium/phosphate and vitamin D activation.",
        "These systemic effects explain the many-system care needs of renal patients."
      ] },
      { h: "Glomerular disease — nephritic vs nephrotic", list: [
        "NEPHRITIC syndrome — glomerular INFLAMMATION (e.g. post-streptococcal glomerulonephritis); features: HAEMATURIA (blood in urine), mild-moderate proteinuria, hypertension, oliguria and oedema.",
        "NEPHROTIC syndrome — greatly INCREASED glomerular permeability; features: HEAVY PROTEINURIA (>3.5 g/day), HYPOALBUMINAEMIA, generalised OEDEMA and hyperlipidaemia.",
        "The distinction guides diagnosis and management."
      ] },
      { h: "Tubular and other disorders", list: [
        "Acute tubular necrosis (ATN) — the main intrinsic AKI; tubular cells die from ischaemia or toxins (aminoglycosides, contrast, myoglobin).",
        "Urinary tract infection — infection of bladder (cystitis) or kidney (pyelonephritis).",
        "Urolithiasis (renal stones) — can cause severe colicky pain and post-renal obstruction.",
        "Urinary tract obstruction — leads to hydronephrosis and post-renal failure."
      ] },
      { h: "Investigations", list: [
        "Blood — serum creatinine and urea (rise with failure), electrolytes (especially potassium), GFR estimation.",
        "Urine — urinalysis (protein, blood, casts), output measurement, culture.",
        "Imaging — ultrasound (obstruction, kidney size), and renal biopsy for glomerular disease."
      ] },
      { h: "Management principles", list: [
        "Treat the cause — restore perfusion in pre-renal AKI, remove nephrotoxins, relieve obstruction in post-renal AKI.",
        "Careful fluid balance — replace deficits but avoid overload; strict intake-output and daily weights.",
        "Correct electrolyte and acid-base disturbances, urgently treating hyperkalaemia.",
        "Adjust or avoid nephrotoxic and renally-excreted drugs.",
        "Renal replacement therapy (dialysis) for severe/refractory failure; long-term dialysis or transplant in end-stage disease."
      ] },
      { h: "Normal values / key figures", list: [
        "Normal GFR ~90-120 mL/min/1.73m2; end-stage renal disease is GFR < 15.",
        "Serum creatinine ~0.6-1.2 mg/dL; urea ~7-20 mg/dL (values vary by lab).",
        "Oliguria = urine output < 400 mL/day (or < 0.5 mL/kg/hr); nephrotic proteinuria > 3.5 g/day.",
        "Serum potassium > 5.0 mmol/L (hyperkalaemia) is the most immediately dangerous derangement."
      ] },
      { h: "Clinical relevance for nursing", p: "Renal pathophysiology directs meticulous nursing surveillance: accurate intake-output charting and daily weights to detect fluid overload; monitoring for hyperkalaemia (ECG changes, muscle weakness) as the most life-threatening complication; managing fluid and dietary restrictions (fluid, sodium, potassium, protein as prescribed); recognising uraemic symptoms; supporting dialysis and vascular-access care; and avoiding nephrotoxic drugs. Early recognition of falling urine output in an at-risk patient can prevent progression of AKI." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Classify acute kidney injury into its three categories with examples.",
      "Describe the four phases of acute kidney injury and their nursing implications.",
      "Explain the causes and systemic effects (uraemia) of chronic kidney disease.",
      "Differentiate nephritic from nephrotic syndrome.",
      "Discuss the nursing monitoring of a patient with acute kidney injury, emphasising hyperkalaemia and fluid balance."
    ],
    assessment: [
      { type: "mcq", q: "AKI caused by severe hypovolaemic shock, with initially normal kidney tissue, is classified as:", options: ["Post-renal", "Intrinsic (renal)", "Pre-renal", "Chronic"], answer: 2, rationale: "Reduced renal perfusion causes pre-renal AKI; prompt restoration of blood flow can reverse it before tissue damage occurs." },
      { type: "mcq", q: "The commonest cause of intrinsic acute kidney injury is:", options: ["Renal stones", "Acute tubular necrosis", "Enlarged prostate", "Bladder tumour"], answer: 1, rationale: "Acute tubular necrosis (from prolonged ischaemia or nephrotoxins) is the most common intrinsic/renal cause of AKI." },
      { type: "mcq", q: "During the OLIGURIC phase of AKI, the most immediately life-threatening complication is:", options: ["Dehydration", "Hyperkalaemia", "Hypernatraemia", "Weight loss"], answer: 1, rationale: "Failure to excrete potassium causes hyperkalaemia, risking fatal cardiac arrhythmia — the priority to monitor." },
      { type: "mcq", q: "The leading cause of chronic kidney disease is:", options: ["Diabetes mellitus", "Renal stones", "Urinary infection", "Dehydration"], answer: 0, rationale: "Diabetic nephropathy is the commonest cause of CKD worldwide, followed by hypertension." },
      { type: "mcq", q: "Heavy proteinuria (>3.5 g/day), hypoalbuminaemia and generalised oedema define:", options: ["Nephritic syndrome", "Nephrotic syndrome", "Acute tubular necrosis", "Cystitis"], answer: 1, rationale: "Nephrotic syndrome features massive protein loss, low albumin and oedema; nephritic syndrome features haematuria and hypertension." },
      { type: "mcq", q: "Anaemia in chronic kidney disease is mainly due to reduced production of:", options: ["Renin", "Erythropoietin", "Vitamin D", "Albumin"], answer: 1, rationale: "Damaged kidneys make less erythropoietin, reducing red-cell production and causing anaemia." },
      { type: "mcq", q: "Post-renal AKI is caused by:", options: ["Reduced kidney perfusion", "Direct tubular damage", "Obstruction to urine outflow", "Loss of erythropoietin"], answer: 2, rationale: "Post-renal AKI results from outflow obstruction (stones, prostate, tumour); relieving it can restore function." },
      { type: "mcq", q: "Haematuria, hypertension and mild proteinuria after a streptococcal throat infection suggest:", options: ["Nephrotic syndrome", "Post-streptococcal (nephritic) glomerulonephritis", "Renal stone", "Acute tubular necrosis"], answer: 1, rationale: "Post-streptococcal glomerulonephritis is a nephritic (inflammatory) picture — haematuria, hypertension and oliguria." },
      { type: "mcq", q: "Oliguria is best defined as a urine output of less than:", options: ["2000 mL/day", "1000 mL/day", "400 mL/day", "no limit"], answer: 2, rationale: "Oliguria is urine output < 400 mL/day (or < 0.5 mL/kg/hr), signalling reduced renal function." },
      { type: "mcq", q: "In chronic kidney disease, surviving nephrons hyperfilter to compensate, which over time:", options: ["Cures the disease", "Accelerates further nephron loss", "Raises erythropoietin", "Lowers blood pressure permanently"], answer: 1, rationale: "Compensatory hyperfiltration damages the remaining nephrons, driving progressive decline — a vicious cycle." }
      , { type: "fill", q: "The functional unit of the kidney is the ____.", accept: ["nephron"], rationale: "Each kidney contains about a million nephrons (glomerulus plus tubule)." }
      , { type: "fill", q: "The most immediately dangerous electrolyte disturbance in oliguric renal failure is ____.", accept: ["hyperkalaemia", "hyperkalemia", "high potassium"], rationale: "Retained potassium causes hyperkalaemia and life-threatening cardiac arrhythmia." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "pph-12-gi-hepatobiliary",
    unit: "Unit 4 · Systemic Pathophysiology II",
    title: "Gastrointestinal & Hepatobiliary Pathophysiology — PUD, IBD, Cirrhosis & Jaundice",
    readMinutes: 27,
    summary: "Disorders of the gut and liver: peptic ulcer disease; inflammatory bowel disease (Crohn's vs ulcerative colitis); liver cirrhosis and portal hypertension with its complications; and the pathophysiology and classification of jaundice, all connected to clinical features and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The gastrointestinal tract digests and absorbs nutrients while the liver performs metabolism, detoxification, protein synthesis (albumin, clotting factors) and bile production. Disease disturbs the balance between protective and damaging factors (as in peptic ulcer), triggers chronic inflammation (IBD), or destroys liver architecture (cirrhosis). Because the liver has so many roles, its failure produces wide-ranging, multi-system effects." },
      { h: "Peptic ulcer disease (PUD)", p: "A peptic ulcer is a break in the mucosa of the stomach or duodenum exposed to acid and pepsin. It results from an IMBALANCE between AGGRESSIVE factors (gastric acid, pepsin, Helicobacter pylori infection, NSAIDs) and PROTECTIVE factors (mucus, bicarbonate, mucosal blood flow, prostaglandins). The two commonest causes are H. PYLORI infection and NSAID use (which inhibit protective prostaglandins). Features: burning epigastric pain (relieved or worsened by food), nausea; complications include bleeding (haematemesis, melaena), perforation and obstruction." },
      { h: "Inflammatory bowel disease (IBD)", p: "IBD is chronic relapsing inflammation of the gut of uncertain (immune-mediated) cause, comprising Crohn's disease and ulcerative colitis.", figure: {
        caption: "Crohn's disease vs ulcerative colitis: Crohn's affects any part of the gut in skip lesions and is transmural; ulcerative colitis affects only the colon, continuously, and is mucosal.",
        svg: '<svg viewBox="0 0 600 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crohn disease versus ulcerative colitis."><rect x="20" y="25" width="270" height="135" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="155" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">CROHN\'S DISEASE</text><text x="155" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">mouth to anus (any part)</text><text x="155" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">skip lesions, patchy</text><text x="155" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">transmural (full thickness)</text><text x="155" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">fistulae, strictures</text><rect x="310" y="25" width="270" height="135" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="445" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">ULCERATIVE COLITIS</text><text x="445" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">colon and rectum only</text><text x="445" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">continuous inflammation</text><text x="445" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">mucosal (superficial)</text><text x="445" y="138" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">bloody diarrhoea</text></svg>'
      } },
      { h: "Crohn's vs ulcerative colitis", list: [
        "CROHN'S DISEASE — can affect ANY part of the gut (mouth to anus), in patchy 'SKIP LESIONS', with TRANSMURAL (full-thickness) inflammation; complications: fistulae, strictures, abscesses; diarrhoea often non-bloody.",
        "ULCERATIVE COLITIS — affects the COLON and rectum only, CONTINUOUSLY, with MUCOSAL (superficial) inflammation; typical feature is BLOODY diarrhoea with mucus; risk of toxic megacolon and colon cancer.",
        "Both cause chronic diarrhoea, abdominal pain, weight loss and extra-intestinal features."
      ] },
      { h: "Cirrhosis of the liver", p: "Cirrhosis is the end stage of chronic liver injury: progressive death of liver cells with FIBROSIS (scarring) and REGENERATIVE NODULES that destroy the normal architecture. Common causes: chronic alcohol use, chronic viral hepatitis (B and C), and non-alcoholic fatty liver disease. The scarring impairs the liver's functions AND obstructs blood flow through it, causing PORTAL HYPERTENSION." },
      { h: "Consequences of cirrhosis & portal hypertension", list: [
        "Portal hypertension → OESOPHAGEAL VARICES (which can bleed catastrophically), splenomegaly and caput medusae.",
        "Reduced albumin synthesis → hypoalbuminaemia → oedema and ASCITES (fluid in the peritoneal cavity).",
        "Reduced clotting-factor synthesis → bleeding tendency.",
        "Failure to detoxify → HEPATIC ENCEPHALOPATHY (confusion, asterixis, coma from ammonia build-up).",
        "Reduced bilirubin handling → JAUNDICE.",
        "Hepatorenal and hepatopulmonary syndromes."
      ] },
      { h: "Jaundice — definition and mechanism", p: "Jaundice (icterus) is yellow discolouration of the skin, sclerae and mucous membranes due to raised serum BILIRUBIN (clinically visible when bilirubin exceeds ~2-3 mg/dL). Bilirubin is a breakdown product of haemoglobin; it is normally taken up by the liver, CONJUGATED (made water-soluble) and excreted in bile. Jaundice is classified by where the problem lies." },
      { h: "Classification of jaundice", list: [
        "PRE-HEPATIC (haemolytic) — excess bilirubin from increased red-cell breakdown (haemolysis); mostly UNCONJUGATED bilirubin; normal-coloured stools and urine.",
        "HEPATIC (hepatocellular) — liver cell damage (hepatitis, cirrhosis) impairs uptake, conjugation and excretion; both conjugated and unconjugated rise.",
        "POST-HEPATIC (obstructive/cholestatic) — obstruction of bile flow (gallstones, tumour of head of pancreas); CONJUGATED bilirubin backs up; PALE stools, DARK urine and itching (pruritus)."
      ] },
      { h: "Gallstones and cholecystitis", p: "Gallstones (cholelithiasis) form from imbalance of bile constituents (cholesterol, bile salts, bilirubin). They may be asymptomatic, cause biliary colic, or obstruct the cystic or common bile duct → CHOLECYSTITIS (inflammation of the gallbladder) or obstructive jaundice. Classic risk factors: 'fat, female, forty, fertile'." },
      { h: "Investigations", list: [
        "Liver function tests — bilirubin (total, conjugated), ALT/AST (hepatocellular damage), ALP and GGT (cholestasis/obstruction), albumin and prothrombin time (synthetic function).",
        "Endoscopy — for peptic ulcer, varices, IBD; H. pylori tests.",
        "Imaging — ultrasound (gallstones, liver, ascites), CT/MRI.",
        "Biopsy — for cirrhosis and IBD."
      ] },
      { h: "Complications of chronic liver disease", list: [
        "Variceal haemorrhage — massive upper-GI bleeding, a leading cause of death.",
        "Spontaneous bacterial peritonitis — infection of ascitic fluid.",
        "Hepatic encephalopathy and coma from ammonia accumulation.",
        "Coagulopathy and bleeding from reduced clotting-factor synthesis.",
        "Hepatocellular carcinoma developing on a cirrhotic liver."
      ] },
      { h: "Clinical relevance for nursing", p: "GI and hepatobiliary pathophysiology guides key nursing actions: recognising and urgently managing upper-GI bleeding (haematemesis, melaena from ulcers or ruptured varices) with airway protection, fluids and escalation; monitoring for the confusion of hepatic encephalopathy and reducing protein/ammonia load as prescribed; managing ascites (daily weight, girth, sodium restriction, monitoring after paracentesis); protecting the itchy, jaundiced patient's skin; watching for bleeding due to clotting-factor loss; and supporting nutrition, alcohol cessation and hepatitis prevention." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Explain the balance of aggressive and protective factors in the pathogenesis of peptic ulcer disease.",
      "Compare Crohn's disease and ulcerative colitis.",
      "Describe the pathophysiology of cirrhosis and the complications of portal hypertension.",
      "Classify jaundice into its three types with the biochemical and clinical differences.",
      "Discuss the nursing management of a patient with cirrhosis and its complications."
    ],
    assessment: [
      { type: "mcq", q: "The two commonest causes of peptic ulcer disease are NSAID use and:", options: ["Helicobacter pylori infection", "Vitamin C deficiency", "High-fibre diet", "Dehydration"], answer: 0, rationale: "H. pylori infection and NSAIDs (which reduce protective prostaglandins) are the leading causes of peptic ulcers." },
      { type: "mcq", q: "Which feature is characteristic of Crohn's disease rather than ulcerative colitis?", options: ["Continuous colonic inflammation", "Transmural, patchy 'skip lesions' affecting any part of the gut", "Confined to the rectum and colon", "Only mucosal inflammation"], answer: 1, rationale: "Crohn's is transmural and patchy (skip lesions) anywhere from mouth to anus; ulcerative colitis is continuous, mucosal and colonic." },
      { type: "mcq", q: "Bloody diarrhoea with continuous inflammation limited to the colon and rectum is typical of:", options: ["Crohn's disease", "Ulcerative colitis", "Peptic ulcer", "Cholecystitis"], answer: 1, rationale: "Ulcerative colitis causes continuous mucosal colonic inflammation with bloody, mucoid diarrhoea." },
      { type: "mcq", q: "Oesophageal varices in cirrhosis are a direct consequence of:", options: ["Low blood sugar", "Portal hypertension", "Anaemia", "Hyperkalaemia"], answer: 1, rationale: "Fibrosis obstructs portal blood flow, raising portal pressure and diverting blood into distended, fragile varices." },
      { type: "mcq", q: "Confusion and asterixis in a patient with cirrhosis, due to ammonia accumulation, indicate:", options: ["Hepatic encephalopathy", "Portal hypertension only", "Gallstones", "Peptic ulcer"], answer: 0, rationale: "A failing liver cannot detoxify ammonia, which accumulates and causes hepatic encephalopathy (confusion, asterixis, coma)." },
      { type: "mcq", q: "Pale stools, dark urine and itching in a jaundiced patient suggest which type of jaundice?", options: ["Pre-hepatic (haemolytic)", "Post-hepatic (obstructive)", "Physiological", "Neonatal"], answer: 1, rationale: "Obstructive (post-hepatic) jaundice blocks bile flow: conjugated bilirubin backs up, giving dark urine, pale stools and pruritus." },
      { type: "mcq", q: "Ascites in cirrhosis is largely explained by reduced hepatic synthesis of:", options: ["Bilirubin", "Albumin", "Glucose", "Bile salts"], answer: 1, rationale: "Low albumin reduces plasma oncotic pressure, which, with portal hypertension, drives fluid into the peritoneal cavity." },
      { type: "mcq", q: "Excess unconjugated bilirubin from increased red-cell breakdown causes which jaundice?", options: ["Post-hepatic", "Hepatic", "Pre-hepatic (haemolytic)", "Obstructive"], answer: 2, rationale: "Haemolysis overwhelms hepatic conjugation, raising unconjugated bilirubin — pre-hepatic jaundice." },
      { type: "mcq", q: "A cirrhotic patient bleeds easily mainly because the liver fails to produce enough:", options: ["Red blood cells", "Clotting factors", "White cells", "Platelets in the marrow"], answer: 1, rationale: "The liver synthesises most clotting factors; in cirrhosis their deficiency causes a bleeding tendency (prolonged PT)." },
      { type: "mcq", q: "A patient with a peptic ulcer who develops black, tarry stools (melaena) most likely has:", options: ["Improved healing", "Upper gastrointestinal bleeding", "Constipation only", "A urinary infection"], answer: 1, rationale: "Melaena indicates digested blood from upper-GI bleeding (e.g. a bleeding peptic ulcer) — an urgent finding." }
      , { type: "fill", q: "Yellow discolouration of skin and sclerae from raised serum bilirubin is called ____.", accept: ["jaundice", "icterus"], rationale: "Jaundice becomes clinically visible when serum bilirubin rises above about 2-3 mg/dL." }
      , { type: "fill", q: "Accumulation of fluid within the peritoneal cavity in cirrhosis is called ____.", accept: ["ascites"], rationale: "Ascites results from portal hypertension plus low albumin (reduced oncotic pressure)." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "pph-13-endocrine",
    unit: "Unit 5 · Systemic Pathophysiology III",
    title: "Endocrine & Metabolic Pathophysiology — Diabetes Mellitus & Thyroid Disorders",
    readMinutes: 27,
    summary: "Principles of endocrine dysfunction; diabetes mellitus (type 1 and type 2, pathophysiology, acute emergencies DKA and hypoglycaemia, and chronic complications); and thyroid disorders (hyperthyroidism and hypothyroidism), each linked to their mechanisms and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Principles of endocrine disorders", p: "The endocrine system uses HORMONES released into the blood to regulate metabolism, growth, reproduction and the stress response, controlled by NEGATIVE FEEDBACK. Endocrine disease results from HYPERfunction (too much hormone), HYPOfunction (too little), or hormone RESISTANCE (target tissues fail to respond). Because hormones act body-wide, their disorders produce diverse, multi-system effects." },
      { h: "Diabetes mellitus — overview", p: "Diabetes mellitus is a group of metabolic disorders characterised by chronic HYPERGLYCAEMIA due to defects in INSULIN secretion, insulin action, or both. Insulin normally lowers blood glucose by promoting its uptake into cells and storage; without effective insulin, glucose cannot enter cells, so it accumulates in the blood while the cells 'starve'." },
      { h: "Type 1 vs type 2 diabetes", list: [
        "TYPE 1 — AUTOIMMUNE destruction of pancreatic beta cells → ABSOLUTE insulin deficiency; usually younger onset, lean, prone to ketoacidosis, requires INSULIN for life.",
        "TYPE 2 — INSULIN RESISTANCE plus a relative insulin deficiency; usually older, associated with obesity and inactivity; commonest type; managed by lifestyle, oral agents and sometimes insulin.",
        "Gestational diabetes occurs in pregnancy."
      ] },
      { h: "Pathophysiology and classic symptoms", p: "Hyperglycaemia produces the classic triad through an osmotic mechanism: when blood glucose exceeds the renal threshold (~180 mg/dL) glucose spills into urine (glycosuria), dragging water with it → POLYURIA (excess urine) → dehydration → POLYDIPSIA (excess thirst). Because cells cannot use glucose, hunger increases → POLYPHAGIA, yet weight is lost as fat and protein are broken down for energy. Fatigue, blurred vision and poor wound healing also occur.", figure: {
        caption: "How hyperglycaemia produces the classic symptoms: glucose exceeds the renal threshold, causing an osmotic diuresis (polyuria), thirst (polydipsia) and, with cellular starvation, hunger (polyphagia).",
        svg: '<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pathway from hyperglycaemia to the classic diabetes symptoms."><defs><marker id="pphArr13" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="80" width="150" height="55" rx="9" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="95" y="103" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">HYPERGLYCAEMIA</text><text x="95" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">glucose in urine</text><rect x="230" y="20" width="160" height="48" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="42" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">POLYURIA</text><text x="310" y="59" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">osmotic diuresis</text><rect x="230" y="86" width="160" height="48" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">POLYDIPSIA</text><text x="310" y="125" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">thirst from dehydration</text><rect x="230" y="152" width="160" height="42" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="173" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">POLYPHAGIA</text><text x="310" y="188" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">cells starve</text><line x1="170" y1="100" x2="226" y2="46" stroke="#0F4C3A" stroke-width="2" marker-end="url(#pphArr13)"/><line x1="170" y1="107" x2="226" y2="108" stroke="#0F4C3A" stroke-width="2" marker-end="url(#pphArr13)"/><line x1="170" y1="115" x2="226" y2="170" stroke="#0F4C3A" stroke-width="2" marker-end="url(#pphArr13)"/></svg>'
      } },
      { h: "Diabetic ketoacidosis (DKA)", p: "DKA is an acute, life-threatening emergency, mainly of TYPE 1 diabetes. With no insulin, cells burn FAT for energy, producing acidic KETONE bodies → METABOLIC ACIDOSIS. Features: severe hyperglycaemia, dehydration, deep rapid KUSSMAUL breathing (compensating for acidosis), acetone (fruity) breath, nausea/vomiting, abdominal pain and drowsiness progressing to coma. Management: IV fluids, insulin infusion, and careful POTASSIUM replacement (insulin drives potassium into cells)." },
      { h: "Hypoglycaemia", p: "Hypoglycaemia (blood glucose < ~70 mg/dL) is a common acute complication of diabetes treatment (too much insulin/sulfonylurea, missed meals, extra exercise). Because the brain depends on glucose, it causes: early ADRENERGIC signs (sweating, tremor, palpitations, hunger, anxiety) then NEUROGLYCOPENIC signs (confusion, slurred speech, seizures, coma). It develops quickly and is rapidly reversed with fast-acting glucose (or glucagon/IV dextrose if unconscious). 'When in doubt, treat as hypoglycaemia.'" },
      { h: "Chronic complications of diabetes", list: [
        "MICROVASCULAR (small vessel) — retinopathy (blindness), nephropathy (leading cause of CKD), and neuropathy (numbness, foot ulcers).",
        "MACROVASCULAR (large vessel) — accelerated atherosclerosis → coronary heart disease, stroke, peripheral vascular disease.",
        "Increased infections and poor wound healing; the DIABETIC FOOT (neuropathy + ischaemia + infection) is a major cause of amputation.",
        "Good glycaemic control reduces these complications — the basis of patient education."
      ] },
      { h: "Thyroid — normal control", p: "The thyroid gland produces T3 and T4, which set the body's METABOLIC RATE, controlled by pituitary TSH via negative feedback. Too much hormone (hyperthyroidism) speeds metabolism; too little (hypothyroidism) slows it — so the two conditions are largely mirror images." },
      { h: "Hyperthyroidism", p: "Hyperthyroidism is excess thyroid hormone (commonest cause: Graves' disease, an autoimmune stimulation of the gland). The raised metabolic rate causes: weight LOSS despite good appetite, heat intolerance and sweating, tachycardia/palpitations and atrial fibrillation, anxiety, tremor, diarrhoea, and goitre; Graves' adds exophthalmos (protruding eyes). A THYROID STORM is a dangerous acute exacerbation. Management: antithyroid drugs, radioiodine or surgery." },
      { h: "Hypothyroidism", p: "Hypothyroidism is deficient thyroid hormone (commonest cause: autoimmune Hashimoto's thyroiditis or iodine deficiency). The slowed metabolic rate causes: weight GAIN, cold intolerance, fatigue and slowness, bradycardia, constipation, dry skin, hair loss and depression; severe untreated disease causes MYXOEDEMA and, acutely, myxoedema coma. In infants, deficiency causes cretinism. Treatment is lifelong thyroxine replacement." },
      { h: "Normal values / key figures", list: [
        "Fasting plasma glucose: normal < 100 mg/dL; diabetes >= 126 mg/dL; HbA1c >= 6.5% diagnoses diabetes.",
        "Renal threshold for glucose ~180 mg/dL (glycosuria above this).",
        "Hypoglycaemia: blood glucose < ~70 mg/dL.",
        "TSH is high in primary hypothyroidism and low in hyperthyroidism (negative feedback)."
      ] },
      { h: "Clinical relevance for nursing", p: "Endocrine pathophysiology drives everyday nursing: safe insulin administration and blood-glucose monitoring; rapid recognition and treatment of hypoglycaemia (fast the danger, treat first) and DKA (fluids, insulin, potassium watch, Kussmaul breathing); diabetic foot inspection and education on diet, exercise, medication and complication prevention; and, for thyroid disease, monitoring pulse and rhythm (AF in hyperthyroidism), weight, temperature tolerance and post-thyroidectomy complications (bleeding, airway, hypocalcaemia)." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Differentiate type 1 and type 2 diabetes mellitus by pathophysiology and management.",
      "Explain how hyperglycaemia produces polyuria, polydipsia and polyphagia.",
      "Describe the pathophysiology, features and management of diabetic ketoacidosis.",
      "Compare hyperthyroidism and hypothyroidism in terms of clinical features.",
      "Discuss the chronic complications of diabetes and the related nursing education."
    ],
    assessment: [
      { type: "mcq", q: "Type 1 diabetes mellitus is caused by:", options: ["Insulin resistance in obese adults", "Autoimmune destruction of pancreatic beta cells causing absolute insulin deficiency", "Excess thyroid hormone", "Kidney failure"], answer: 1, rationale: "Type 1 results from autoimmune beta-cell destruction and an absolute lack of insulin, requiring lifelong insulin therapy." },
      { type: "mcq", q: "Polyuria in uncontrolled diabetes occurs because:", options: ["The kidneys make less urine", "Insulin is too high", "Glucose exceeds the renal threshold and causes an osmotic diuresis", "Blood pressure falls"], answer: 2, rationale: "When glucose exceeds ~180 mg/dL it spills into urine and osmotically drags water, causing polyuria and then thirst." },
      { type: "mcq", q: "Deep, rapid Kussmaul breathing and a fruity acetone breath in a type 1 diabetic indicate:", options: ["Diabetic ketoacidosis", "Hypoglycaemia", "Hypothyroidism", "Thyroid storm"], answer: 0, rationale: "In DKA, fat breakdown produces ketones and metabolic acidosis, triggering compensatory Kussmaul breathing and acetone breath." },
      { type: "mcq", q: "Sweating, tremor, palpitations and confusion developing rapidly in a patient on insulin suggest:", options: ["Hyperglycaemia", "Ketoacidosis", "Hypoglycaemia", "Hyperthyroidism"], answer: 2, rationale: "These adrenergic and neuroglycopenic signs indicate hypoglycaemia; treat immediately with fast-acting glucose." },
      { type: "mcq", q: "During treatment of DKA with insulin, the electrolyte that must be monitored and replaced carefully is:", options: ["Calcium", "Magnesium", "Chloride", "Potassium"], answer: 3, rationale: "Insulin drives potassium into cells, so serum potassium can fall dangerously and must be monitored and replaced." },
      { type: "mcq", q: "Diabetic nephropathy and retinopathy are examples of which type of complication?", options: ["Macrovascular", "Microvascular", "Autoimmune", "Infective"], answer: 1, rationale: "Retinopathy, nephropathy and neuropathy are microvascular (small-vessel) complications of chronic hyperglycaemia." },
      { type: "mcq", q: "Weight loss despite a good appetite, heat intolerance, tremor and tachycardia suggest:", options: ["Hypothyroidism", "Hyperthyroidism", "Type 2 diabetes", "Hypoglycaemia"], answer: 1, rationale: "An increased metabolic rate from excess thyroid hormone causes weight loss, heat intolerance, tremor and tachycardia." },
      { type: "mcq", q: "Weight gain, cold intolerance, constipation and bradycardia are typical of:", options: ["Hyperthyroidism", "Diabetic ketoacidosis", "Hypothyroidism", "Graves' disease"], answer: 2, rationale: "A reduced metabolic rate in hypothyroidism slows the body — weight gain, cold intolerance, constipation and bradycardia." },
      { type: "mcq", q: "In primary hypothyroidism, the serum TSH level is usually:", options: ["Low", "High", "Absent", "Unchanged"], answer: 1, rationale: "Low thyroid hormone removes negative feedback, so the pituitary raises TSH — high TSH in primary hypothyroidism." },
      { type: "mcq", q: "The safest immediate nursing response to a conscious patient with suspected hypoglycaemia is to:", options: ["Give long-acting insulin", "Give fast-acting oral glucose/sugar", "Withhold all treatment", "Give extra thyroxine"], answer: 1, rationale: "Fast-acting glucose rapidly reverses hypoglycaemia; when in doubt, treat as hypoglycaemia because the brain needs glucose urgently." }
      , { type: "fill", q: "Excess thirst caused by dehydration in uncontrolled diabetes is called ____.", accept: ["polydipsia"], rationale: "Polyuria causes dehydration, which stimulates thirst — polydipsia." }
      , { type: "fill", q: "The acute acidotic emergency of type 1 diabetes caused by ketone production is called diabetic ____.", accept: ["ketoacidosis", "dka"], rationale: "Absolute insulin lack forces fat breakdown to ketones, producing metabolic acidosis (DKA)." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "pph-14-neurological",
    unit: "Unit 5 · Systemic Pathophysiology III",
    title: "Neurological Pathophysiology — Stroke, Raised Intracranial Pressure & Seizures",
    readMinutes: 27,
    summary: "Disorders of the nervous system: stroke (ischaemic and haemorrhagic); raised intracranial pressure and its compensation and herniation; and seizures/epilepsy, each explained mechanistically and linked to neurological assessment and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The brain is highly dependent on a constant supply of oxygen and glucose and is enclosed in the rigid skull, so neurological disease often reflects either interrupted blood supply (stroke), rising pressure within a fixed space (raised intracranial pressure), or abnormal electrical activity (seizures). Neurons are permanent cells with very limited regeneration, so damage is often lasting — making prevention and rapid treatment vital." },
      { h: "Stroke — definition and types", p: "A stroke (cerebrovascular accident) is a sudden neurological deficit from disrupted cerebral blood flow lasting more than 24 hours. There are two main types.", figure: {
        caption: "The two types of stroke: ischaemic (a blocked artery from thrombosis or embolism, ~85%) and haemorrhagic (a ruptured vessel bleeding into the brain, ~15%).",
        svg: '<svg viewBox="0 0 600 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ischaemic versus haemorrhagic stroke."><rect x="20" y="25" width="270" height="125" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="155" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">ISCHAEMIC (~85%)</text><text x="155" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">artery BLOCKED</text><text x="155" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">thrombosis / embolism</text><text x="155" y="122" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">infarction of brain tissue</text><rect x="310" y="25" width="270" height="125" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="445" y="50" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">HAEMORRHAGIC (~15%)</text><text x="445" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">vessel RUPTURES</text><text x="445" y="98" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">bleeds into brain</text><text x="445" y="122" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">hypertension, aneurysm</text></svg>'
      } },
      { h: "Ischaemic and haemorrhagic stroke", list: [
        "ISCHAEMIC (~85%) — a blocked cerebral artery (thrombosis on atherosclerosis, or an embolus, often from the heart in atrial fibrillation) starves brain tissue of oxygen → infarction. A TIA (transient ischaemic attack) is a brief, fully reversible warning episode.",
        "HAEMORRHAGIC (~15%) — a ruptured vessel bleeds into the brain (intracerebral, often from hypertension) or around it (subarachnoid, often from a ruptured aneurysm), damaging tissue and raising intracranial pressure.",
        "Distinguishing them (by CT) is essential, because thrombolysis helps ischaemic but is dangerous in haemorrhagic stroke."
      ] },
      { h: "Clinical features of stroke", p: "Features depend on the artery and area affected but classically appear SUDDENLY: one-sided weakness or paralysis (HEMIPLEGIA) and sensory loss, facial droop, slurred or lost speech (dysarthria/aphasia), visual disturbance, and impaired balance. The public FAST tool (Face, Arm, Speech, Time) aids early recognition. 'Time is brain' — rapid treatment saves the ischaemic penumbra (at-risk tissue around the core)." },
      { h: "Raised intracranial pressure (ICP) — the Monro-Kellie doctrine", p: "The skull is a rigid box containing three components: brain tissue, blood and cerebrospinal fluid (CSF). Their total volume is fixed, so an increase in any one (a tumour, bleed, oedema, or excess CSF) must be offset by a decrease in another, or ICP rises. Initially CSF and venous blood are displaced to COMPENSATE; once this is exhausted, small further volume increases cause STEEP rises in ICP." },
      { h: "Effects of raised ICP", list: [
        "Reduced cerebral blood flow — rising ICP opposes perfusion pressure, causing ischaemia.",
        "The CUSHING'S TRIAD (a LATE, ominous sign): RISING blood pressure (widening pulse pressure), BRADYCARDIA (slow pulse) and IRREGULAR breathing.",
        "Early signs: headache, vomiting, reduced consciousness (the EARLIEST and most sensitive sign), pupil changes.",
        "HERNIATION — brain tissue is forced through openings (e.g. through the tentorium or foramen magnum), compressing vital centres — often fatal."
      ] },
      { h: "Seizures and epilepsy", p: "A seizure is a sudden, excessive, disorderly ELECTRICAL discharge of neurons producing transient changes in behaviour, movement, sensation or consciousness. EPILEPSY is a tendency to recurrent, unprovoked seizures. Causes include idiopathic/genetic, brain injury, tumour, stroke, infection (meningitis), metabolic disturbance (hypoglycaemia, hyponatraemia), fever (in children) and drug/alcohol withdrawal." },
      { h: "Types of seizure", list: [
        "GENERALISED — involve both hemispheres from the start with loss of consciousness; e.g. TONIC-CLONIC (stiffening then jerking), and absence seizures (brief blank staring).",
        "FOCAL (partial) — begin in one area; may be with or without impaired awareness, and can spread to become generalised.",
        "STATUS EPILEPTICUS — a prolonged seizure (>5 min) or repeated seizures without recovery; a medical emergency risking brain injury."
      ] },
      { h: "Nursing care during and after a seizure", list: [
        "DURING — protect from injury (do NOT restrain or put anything in the mouth), cushion the head, note time and description, and place in the recovery position when jerking stops to protect the airway.",
        "AFTER — maintain the airway, observe the post-ictal (drowsy, confused) period, reassure, and document.",
        "Prevent status epilepticus and ensure anticonvulsant adherence."
      ] },
      { h: "Complications of stroke", list: [
        "Aspiration pneumonia — from impaired swallowing (dysphagia); assess swallow before oral intake.",
        "Contractures, pressure injuries and deep vein thrombosis — from immobility.",
        "Communication difficulty (aphasia) and depression.",
        "Recurrent stroke and raised intracranial pressure from cerebral oedema.",
        "These guide nursing priorities: swallow screening, positioning, mobilisation and rehabilitation."
      ] },
      { h: "Normal values / key figures", list: [
        "Normal intracranial pressure ~5-15 mmHg (raised is > 20 mmHg).",
        "Glasgow Coma Scale ranges 3 (deep coma) to 15 (fully alert); a falling GCS signals deterioration.",
        "Cushing's triad (hypertension + bradycardia + irregular breathing) is a LATE sign of critically raised ICP.",
        "Status epilepticus is a seizure lasting > 5 minutes or recurrent seizures without recovery."
      ] },
      { h: "Clinical relevance for nursing", p: "Neurological pathophysiology guides vigilant assessment: recognising stroke immediately (FAST) and ensuring rapid CT and treatment; frequent neurological observations (GCS, pupils, limb power) where a FALLING conscious level is the earliest sign of rising ICP; nursing to reduce ICP (head elevated ~30 degrees, avoiding neck flexion, preventing hypoxia and straining); recognising Cushing's triad as a late danger sign; safe seizure management; and preventing complications of immobility and impaired swallowing (aspiration) in stroke patients." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Differentiate ischaemic and haemorrhagic stroke and explain why the distinction matters for treatment.",
      "Explain the Monro-Kellie doctrine and the compensation for raised intracranial pressure.",
      "Describe the early and late signs of raised intracranial pressure, including Cushing's triad.",
      "Classify seizures and describe status epilepticus.",
      "Outline the nursing care of a patient during and after a generalised tonic-clonic seizure."
    ],
    assessment: [
      { type: "mcq", q: "About 85% of strokes are:", options: ["Haemorrhagic", "Ischaemic", "Subarachnoid", "Traumatic"], answer: 1, rationale: "Most strokes (~85%) are ischaemic, from arterial thrombosis or embolism; ~15% are haemorrhagic." },
      { type: "mcq", q: "Distinguishing ischaemic from haemorrhagic stroke by CT is essential mainly because:", options: ["They have identical treatment", "Thrombolysis helps ischaemic stroke but is dangerous in haemorrhagic stroke", "Only haemorrhagic stroke causes weakness", "CT cannot show either"], answer: 1, rationale: "Clot-busting thrombolysis benefits ischaemic stroke but would worsen bleeding in haemorrhagic stroke — so CT must come first." },
      { type: "mcq", q: "According to the Monro-Kellie doctrine, the three intracranial components are brain, cerebrospinal fluid and:", options: ["Bone", "Blood", "Muscle", "Air"], answer: 1, rationale: "The fixed skull contains brain tissue, CSF and blood; a rise in one must be offset or ICP increases." },
      { type: "mcq", q: "The EARLIEST and most sensitive indicator of rising intracranial pressure is:", options: ["Cushing's triad", "A falling level of consciousness", "Fixed dilated pupils", "Cardiac arrest"], answer: 1, rationale: "A declining conscious level (GCS) is the earliest sign; Cushing's triad and fixed pupils are late, ominous findings." },
      { type: "mcq", q: "Cushing's triad consists of rising blood pressure, irregular breathing and:", options: ["Tachycardia", "Bradycardia", "Hypotension", "Fever"], answer: 1, rationale: "Cushing's triad = hypertension (widening pulse pressure) + bradycardia + irregular respiration — a late sign of critical ICP." },
      { type: "mcq", q: "A prolonged seizure lasting more than 5 minutes or repeated seizures without recovery is called:", options: ["A focal seizure", "An absence seizure", "Status epilepticus", "A TIA"], answer: 2, rationale: "Status epilepticus is a neurological emergency risking permanent brain injury and requires urgent treatment." },
      { type: "mcq", q: "The correct nursing action DURING a tonic-clonic seizure is to:", options: ["Restrain the limbs firmly", "Insert a spoon into the mouth", "Protect from injury and cushion the head", "Give oral medication immediately"], answer: 2, rationale: "Protect the patient from injury and cushion the head; never restrain or place objects in the mouth (risk of injury/aspiration)." },
      { type: "mcq", q: "A brief neurological deficit that resolves completely within 24 hours is a:", options: ["Completed stroke", "Transient ischaemic attack (TIA)", "Seizure", "Status epilepticus"], answer: 1, rationale: "A TIA is a temporary, fully reversible ischaemic episode and an important warning of future stroke." },
      { type: "mcq", q: "To help reduce intracranial pressure, the nurse should position the patient with the:", options: ["Head flat and neck flexed", "Head elevated about 30 degrees with the neck neutral", "Body prone", "Head lower than the feet"], answer: 1, rationale: "Head elevation (~30 degrees) with a neutral neck promotes venous drainage and lowers ICP; neck flexion impedes it." },
      { type: "mcq", q: "Right-sided facial droop, right arm weakness and slurred speech of sudden onset are best recognised using:", options: ["The FAST tool for stroke", "The Glasgow Coma Scale only", "A urine dipstick", "Spirometry"], answer: 0, rationale: "FAST (Face, Arm, Speech, Time) rapidly identifies stroke so that time-critical treatment can begin." }
      , { type: "fill", q: "One-sided paralysis following a stroke is called ____.", accept: ["hemiplegia"], rationale: "Damage to one hemisphere weakens or paralyses the opposite side of the body (hemiplegia)." }
      , { type: "fill", q: "The normal range of intracranial pressure is about 5-15 mmHg; it is considered raised above ____ mmHg.", accept: ["20"], rationale: "ICP above 20 mmHg is abnormal and needs intervention." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "pph-15-haematologic",
    unit: "Unit 6 · Systemic Pathophysiology IV",
    title: "Haematologic Pathophysiology — Anaemia, Bleeding Disorders & Leukaemia",
    readMinutes: 26,
    summary: "Disorders of blood cells and haemostasis: the anaemias (classification and mechanisms, including iron-deficiency, megaloblastic, haemolytic and aplastic); bleeding disorders (platelet and clotting-factor defects, including haemophilia and thrombocytopenia); and the leukaemias, linked to their clinical features and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of blood", p: "Blood consists of PLASMA and cellular elements: red cells (erythrocytes) carry oxygen using haemoglobin; white cells (leukocytes) defend against infection; and platelets (thrombocytes) with clotting factors achieve haemostasis. All are made in the bone marrow. Haematologic disease arises from too few or abnormal cells (anaemia, leucopenia, thrombocytopenia), uncontrolled proliferation (leukaemia), or defective clotting (bleeding disorders)." },
      { h: "Anaemia — definition", p: "Anaemia is a reduction in the oxygen-carrying capacity of the blood, defined as a low HAEMOGLOBIN concentration (below ~13 g/dL in men, ~12 g/dL in women). Because tissues receive less oxygen, general features (regardless of cause) include: PALLOR, fatigue and weakness, breathlessness on exertion, tachycardia and palpitations (compensatory), dizziness and, if severe, high-output heart failure." },
      { h: "Classification of anaemia by mechanism", list: [
        "REDUCED production — iron, B12 or folate deficiency; bone-marrow failure (aplastic anaemia); chronic disease/CKD (low erythropoietin).",
        "INCREASED destruction (haemolysis) — sickle-cell disease, thalassaemia, autoimmune haemolysis, malaria.",
        "BLOOD LOSS — acute (haemorrhage) or chronic (menstrual, GI bleeding causing iron deficiency).",
        "This mechanistic classification guides investigation and treatment."
      ] },
      { h: "Common types of anaemia", list: [
        "IRON-DEFICIENCY — the commonest; MICROCYTIC (small pale cells); from blood loss, poor intake or increased need (pregnancy); treat with iron.",
        "MEGALOBLASTIC — B12 or folate deficiency; MACROCYTIC (large cells); B12 deficiency (pernicious anaemia) also causes neurological signs.",
        "HAEMOLYTIC — increased red-cell breakdown; jaundice, splenomegaly, raised bilirubin.",
        "APLASTIC — bone-marrow failure affecting ALL cell lines (pancytopenia): anaemia + infections + bleeding.",
        "SICKLE-CELL — abnormal haemoglobin distorts cells, causing painful vaso-occlusive crises."
      ] },
      { h: "Normal haemostasis and its disorders", p: "Haemostasis needs adequate PLATELETS, functioning CLOTTING FACTORS and intact vessels. Bleeding disorders result from defects in any of these.", figure: {
        caption: "Bleeding disorders arise from problems with platelets (number or function), clotting factors, or blood vessels.",
        svg: '<svg viewBox="0 0 600 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Categories of bleeding disorders."><rect x="15" y="35" width="180" height="115" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="105" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">PLATELET</text><text x="105" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">low number or</text><text x="105" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">poor function</text><text x="105" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">thrombocytopenia</text><rect x="210" y="35" width="180" height="115" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="300" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">CLOTTING FACTOR</text><text x="300" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">factor deficiency</text><text x="300" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">haemophilia,</text><text x="300" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">liver disease</text><rect x="405" y="35" width="180" height="115" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="495" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">VESSEL</text><text x="495" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">fragile vessels</text><text x="495" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">vitamin C lack,</text><text x="495" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">vasculitis</text></svg>'
      } },
      { h: "Platelet disorders (thrombocytopenia)", p: "Thrombocytopenia is a low platelet count (normal ~150,000-400,000/mm3). Causes: reduced production (marrow failure, chemotherapy), increased destruction (immune thrombocytopenia), or sequestration (splenomegaly). Features are SUPERFICIAL bleeding: petechiae, purpura, bruising, mucosal bleeding (gums, nose), and heavy menstruation. Spontaneous bleeding risk rises sharply below ~20,000/mm3." },
      { h: "Clotting-factor disorders (haemophilia)", p: "Haemophilia is an X-LINKED recessive deficiency of a clotting factor — haemophilia A (factor VIII) or B (factor IX) — so mainly affects males. Because the coagulation cascade is impaired, bleeding is DEEP and prolonged: into joints (HAEMARTHROSIS, causing pain and joint damage), muscles and after trauma or surgery. Treatment is factor replacement. (Contrast: platelet disorders cause superficial bleeding; factor disorders cause deep bleeding.) Liver disease and vitamin K deficiency also impair clotting-factor production." },
      { h: "Leukaemia — overview", p: "Leukaemia is a malignant, uncontrolled proliferation of abnormal, immature WHITE blood cells (blasts) in the bone marrow. These crowd out normal marrow, so despite a high white-cell count the cells are non-functional, and production of normal red cells, platelets and mature white cells FALLS. This bone-marrow failure explains the classic triad of features." },
      { h: "Types and features of leukaemia", list: [
        "Classified as ACUTE (rapid, immature blasts — ALL, AML) or CHRONIC (slower, more mature cells — CLL, CML); and lymphocytic or myeloid by cell line.",
        "Features from marrow failure: ANAEMIA (fatigue, pallor), INFECTIONS (from lack of normal white cells), and BLEEDING/bruising (from thrombocytopenia).",
        "Plus: bone pain, lymphadenopathy, hepatosplenomegaly, fever and weight loss.",
        "Diagnosis: blood film and bone-marrow examination; treatment: chemotherapy, targeted therapy, and sometimes stem-cell transplant."
      ] },
      { h: "Lymphoma", list: [
        "Lymphoma is a malignancy of lymphoid tissue (lymph nodes, spleen), distinct from leukaemia which is marrow-based.",
        "HODGKIN lymphoma — characterised by Reed-Sternberg cells; often localised, good prognosis.",
        "NON-HODGKIN lymphoma — a diverse group, more often widespread.",
        "Features: painless lymph-node enlargement, 'B symptoms' (fever, night sweats, weight loss).",
        "Diagnosis is by lymph-node biopsy; treated with chemotherapy and/or radiotherapy."
      ] },
      { h: "Normal values / key figures", list: [
        "Haemoglobin: men ~13-17 g/dL, women ~12-15 g/dL (anaemia below these).",
        "Platelet count ~150,000-400,000/mm3; spontaneous bleeding risk high below ~20,000.",
        "White cell count ~4,000-11,000/mm3; neutropenia (< ~1,500) raises infection risk.",
        "Microcytic = iron deficiency; macrocytic = B12/folate deficiency (a useful diagnostic clue)."
      ] },
      { h: "Clinical relevance for nursing", p: "Haematologic pathophysiology directs nursing priorities: for anaemia, monitoring haemoglobin and oxygenation, pacing activity, and supporting iron/B12/folate replacement and transfusion; for bleeding disorders, preventing injury, avoiding intramuscular injections and NSAIDs, applying pressure, and observing for petechiae and mucosal or joint bleeding; and for leukaemia and chemotherapy, strict infection precautions (neutropenic care), bleeding precautions, mouth care, and recognising neutropenic sepsis as an emergency, alongside psychological support." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Define anaemia and classify it by underlying mechanism with examples.",
      "Differentiate the bleeding patterns of platelet disorders and clotting-factor disorders.",
      "Explain the inheritance and pathophysiology of haemophilia.",
      "Describe the pathophysiology of leukaemia and explain why patients develop anaemia, infection and bleeding.",
      "Discuss the nursing care of a neutropenic patient receiving chemotherapy."
    ],
    assessment: [
      { type: "mcq", q: "The commonest type of anaemia worldwide is:", options: ["Aplastic anaemia", "Iron-deficiency anaemia", "Sickle-cell anaemia", "Pernicious anaemia"], answer: 1, rationale: "Iron-deficiency anaemia (microcytic) is the most common, from blood loss, poor intake or increased demand." },
      { type: "mcq", q: "Deep bleeding into joints (haemarthrosis) is characteristic of:", options: ["Thrombocytopenia", "Iron-deficiency anaemia", "Haemophilia (clotting-factor deficiency)", "Vitamin C deficiency"], answer: 2, rationale: "Clotting-factor deficiencies such as haemophilia cause deep bleeding into joints and muscles, unlike the superficial bleeding of platelet disorders." },
      { type: "mcq", q: "Petechiae, purpura and mucosal (gum/nose) bleeding are typical of:", options: ["Haemophilia", "Megaloblastic anaemia", "Thrombocytopenia (platelet disorder)", "Leukaemia remission"], answer: 2, rationale: "Low or dysfunctional platelets cause superficial bleeding — petechiae, purpura and mucosal bleeds." },
      { type: "mcq", q: "In leukaemia, patients develop anaemia, infections and bleeding because:", options: ["The spleen makes too many red cells", "Abnormal blasts crowd out the marrow, reducing normal red cells, platelets and functional white cells", "There are too many clotting factors", "Iron is too high"], answer: 1, rationale: "Malignant blasts fill the marrow, causing failure of normal haematopoiesis — anaemia, thrombocytopenia and functional leucopenia." },
      { type: "mcq", q: "Macrocytic (large-cell) anaemia most typically results from deficiency of:", options: ["Iron", "Vitamin C", "Calcium", "Vitamin B12 or folate"], answer: 3, rationale: "B12/folate deficiency impairs DNA synthesis, producing large (macrocytic/megaloblastic) red cells; iron deficiency is microcytic." },
      { type: "mcq", q: "Haemophilia A predominantly affects males because it is:", options: ["X-linked recessive", "Autosomal dominant", "Autosomal recessive", "Acquired only"], answer: 0, rationale: "The factor VIII gene is on the X chromosome; males with one abnormal X are affected while females are usually carriers." },
      { type: "mcq", q: "Bone-marrow failure affecting all three cell lines (red cells, white cells and platelets) is:", options: ["Iron-deficiency anaemia", "Aplastic anaemia (pancytopenia)", "Haemophilia", "Sickle-cell disease"], answer: 1, rationale: "Aplastic anaemia is failure of the whole marrow, causing pancytopenia — anaemia, infection risk and bleeding." },
      { type: "mcq", q: "A key nursing precaution for a patient with severe thrombocytopenia is to:", options: ["Encourage vigorous tooth-brushing", "Give aspirin for comfort", "Avoid intramuscular injections and use a soft toothbrush, applying pressure to any bleeding", "Encourage contact sports"], answer: 2, rationale: "Bleeding precautions minimise trauma; avoid IM injections and NSAIDs/aspirin, use a soft toothbrush and apply pressure to bleeds." },
      { type: "mcq", q: "A fever in a patient with chemotherapy-induced neutropenia should be regarded as:", options: ["A minor issue", "A medical emergency (neutropenic sepsis)", "An allergic reaction", "Normal after chemotherapy"], answer: 1, rationale: "Neutropenia removes the body's main defence; fever signals possible neutropenic sepsis needing urgent antibiotics." },
      { type: "mcq", q: "General features common to ALL anaemias, regardless of cause, include:", options: ["Jaundice and dark urine", "Joint bleeding", "Pallor, fatigue and exertional breathlessness", "High platelet count"], answer: 2, rationale: "Reduced oxygen-carrying capacity causes pallor, fatigue, breathlessness and compensatory tachycardia in any anaemia." }
      , { type: "fill", q: "A low platelet count that predisposes to superficial bleeding is called ____.", accept: ["thrombocytopenia"], rationale: "Thrombocytopenia (platelets below ~150,000/mm3) causes petechiae, purpura and mucosal bleeding." }
      , { type: "fill", q: "Iron-deficiency anaemia produces red cells that are small in size, described as ____.", accept: ["microcytic"], rationale: "Iron deficiency yields small, pale (microcytic hypochromic) red cells, unlike the macrocytic cells of B12/folate deficiency." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "pph-16-infection-sepsis",
    unit: "Unit 6 · Systemic Pathophysiology IV",
    title: "Infectious Disease Pathophysiology & Sepsis",
    readMinutes: 26,
    summary: "How infection causes disease: pathogens and their mechanisms; the chain of infection; the body's response (fever and the acute-phase reaction); the spectrum from local infection to systemic inflammatory response, sepsis and septic shock; and the pathophysiological basis of early recognition and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "Infectious disease results from the invasion and multiplication of pathogenic microorganisms in the body and the host's response to them. Whether infection produces disease depends on the balance between the PATHOGEN'S virulence and load and the HOST'S defences. When a local infection is not contained, it can trigger a dangerous, body-wide inflammatory response — sepsis — a leading cause of preventable death in hospitals." },
      { h: "Types of pathogen", list: [
        "Bacteria — e.g. Streptococcus, Staphylococcus, E. coli, Mycobacterium tuberculosis.",
        "Viruses — e.g. influenza, hepatitis, HIV, SARS-CoV-2.",
        "Fungi — e.g. Candida, Aspergillus (often opportunistic).",
        "Parasites — protozoa (malaria, amoeba) and helminths (worms).",
        "Prions — abnormal proteins (rare)."
      ] },
      { h: "How pathogens cause damage", list: [
        "Direct invasion and destruction of host cells.",
        "TOXINS — exotoxins (secreted, e.g. tetanus, cholera) and endotoxins (part of Gram-negative bacterial walls, released on cell death, triggering severe inflammation).",
        "Provoking a damaging immune/inflammatory response (immunopathology).",
        "The nature of the damage shapes the clinical picture."
      ] },
      { h: "The chain of infection", p: "Infection spreads through a six-link chain, and breaking any link prevents transmission — the rationale for infection control.", figure: {
        caption: "The chain of infection: agent, reservoir, portal of exit, mode of transmission, portal of entry and susceptible host. Breaking any link prevents infection.",
        svg: '<svg viewBox="0 0 620 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The chain of infection."><rect x="15" y="20" width="180" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="105" y="47" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">1. AGENT (pathogen)</text><rect x="220" y="20" width="180" height="45" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="310" y="47" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">2. RESERVOIR</text><rect x="425" y="20" width="180" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="515" y="47" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">3. PORTAL OF EXIT</text><rect x="425" y="130" width="180" height="45" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="515" y="157" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">4. TRANSMISSION</text><rect x="220" y="130" width="180" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="157" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">5. PORTAL OF ENTRY</text><rect x="15" y="130" width="180" height="45" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="1.5"/><text x="105" y="152" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">6. SUSCEPTIBLE</text><text x="105" y="167" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">HOST</text><line x1="195" y1="42" x2="218" y2="42" stroke="#0F4C3A" stroke-width="2"/><line x1="400" y1="42" x2="423" y2="42" stroke="#0F4C3A" stroke-width="2"/><line x1="515" y1="65" x2="515" y2="128" stroke="#0F4C3A" stroke-width="2"/><line x1="423" y1="152" x2="402" y2="152" stroke="#0F4C3A" stroke-width="2"/><line x1="218" y1="152" x2="197" y2="152" stroke="#0F4C3A" stroke-width="2"/></svg>'
      } },
      { h: "Stages of an infectious disease", list: [
        "INCUBATION — from exposure to first symptoms (pathogen multiplying, no symptoms).",
        "PRODROMAL — early, vague symptoms (malaise, low fever); often most infectious.",
        "ILLNESS (acute) — full, specific manifestations.",
        "CONVALESCENCE — recovery and repair."
      ] },
      { h: "The body's response and fever", p: "Infection activates innate and adaptive immunity (see Immunity topic). A hallmark is FEVER: pathogen products (pyrogens) trigger cytokines (IL-1, IL-6, TNF) that raise prostaglandin E2, which resets the hypothalamic thermostat UPWARD. The body then feels cold and shivers (RIGORS) to reach the new set-point. Fever is largely protective (impairs pathogen growth, enhances immunity). The acute-phase response also raises white cells and CRP." },
      { h: "Local infection to systemic response", p: "A LOCAL infection (e.g. a wound, urinary or chest infection) is normally contained. If it spreads or the response becomes excessive, the patient develops a SYSTEMIC INFLAMMATORY RESPONSE with signs such as fever or hypothermia, tachycardia, tachypnoea and abnormal white-cell count. Recognising this transition early — the deteriorating vital-sign trend — is a central nursing skill." },
      { h: "Sepsis", p: "Sepsis is life-threatening ORGAN DYSFUNCTION caused by a DYSREGULATED host response to infection. The overwhelming release of inflammatory mediators causes widespread VASODILATION, increased capillary permeability (fluid leaks out, reducing effective circulating volume), microvascular clotting and impaired oxygen use by tissues. The result is inadequate perfusion and failing organs. Early features: fever/hypothermia, tachycardia, tachypnoea, confusion, and reduced urine output." },
      { h: "Septic shock", p: "Septic shock is the severe end of the spectrum — a subset of sepsis with profound circulatory and cellular/metabolic derangement and persistent HYPOTENSION requiring support, plus a raised LACTATE (from anaerobic metabolism), carrying a high mortality. It is a form of DISTRIBUTIVE shock: massive vasodilation and capillary leak mean that, unlike other shocks, the skin may initially be WARM and flushed before later becoming cold as it decompensates. Rapid recognition and treatment save lives." },
      { h: "Management principles (the 'sepsis six' concept)", list: [
        "Give high-flow OXYGEN; take BLOOD CULTURES (before antibiotics if possible); give broad-spectrum ANTIBIOTICS early.",
        "Give IV FLUIDS to restore circulating volume; measure LACTATE; monitor URINE OUTPUT (catheter).",
        "Identify and control the source of infection.",
        "Early recognition and prompt treatment within the first hour dramatically improve survival — 'time-critical'."
      ] },
      { h: "Normal values / key figures", list: [
        "Normal temperature ~36.5-37.5 degrees C; fever is usually > 38 degrees C.",
        "Warning vital signs: heart rate > 90/min, respiratory rate > 20/min, altered mental state, low urine output.",
        "A raised serum LACTATE (> 2 mmol/L) signals tissue hypoperfusion in sepsis.",
        "Infection-control basics: hand hygiene is the single most effective measure to break the chain of infection."
      ] },
      { h: "Clinical relevance for nursing", p: "Infection and sepsis pathophysiology sits at the heart of safe nursing: rigorous infection-control (hand hygiene, aseptic technique, isolation) breaks the chain of transmission; vigilant vital-sign monitoring and early-warning scoring detect the deterioration from local infection to sepsis; and prompt escalation with oxygen, blood cultures, antibiotics, IV fluids, lactate and urine-output monitoring (the sepsis-six approach) delivers the time-critical treatment that saves lives. Understanding fever as a protective response guides balanced management." }
    ],
    references: REF_PPH,
    examQuestions: [
      "Describe the mechanisms by which pathogens cause tissue damage, including exotoxins and endotoxins.",
      "Explain the chain of infection and how breaking each link prevents transmission.",
      "Explain the pathophysiology of fever.",
      "Define sepsis and septic shock and describe their pathophysiology.",
      "Discuss the early recognition and the 'sepsis six' nursing management of a septic patient."
    ],
    assessment: [
      { type: "mcq", q: "Endotoxins are:", options: ["Secreted proteins from living bacteria", "Components of Gram-negative bacterial cell walls released on cell death that trigger severe inflammation", "Produced by the host liver", "Antibodies"], answer: 1, rationale: "Endotoxins (lipopolysaccharide) are part of the Gram-negative wall, released when bacteria die, driving strong inflammation and sepsis." },
      { type: "mcq", q: "Fever is produced when pyrogens and cytokines raise prostaglandin E2, which acts on the hypothalamus to:", options: ["Lower the thermostat set-point", "Raise the thermostat set-point", "Stop all metabolism", "Cause vasodilation only"], answer: 1, rationale: "PGE2 resets the hypothalamic set-point upward, so the body shivers (rigors) to reach the higher temperature — fever." },
      { type: "mcq", q: "Sepsis is best defined as:", options: ["Any minor local infection", "A normal fever", "Life-threatening organ dysfunction due to a dysregulated host response to infection", "An allergic reaction"], answer: 2, rationale: "Sepsis is organ dysfunction from a dysregulated, excessive host response to infection — far more than a simple infection." },
      { type: "mcq", q: "Septic shock is a form of which type of shock?", options: ["Hypovolaemic", "Cardiogenic", "Distributive", "Obstructive"], answer: 2, rationale: "Septic shock is distributive: widespread vasodilation and capillary leak reduce effective perfusion despite a normal blood volume." },
      { type: "mcq", q: "A raised serum lactate in a septic patient indicates:", options: ["Tissue hypoperfusion and anaerobic metabolism", "Good tissue oxygenation", "Low blood sugar", "Recovery"], answer: 0, rationale: "Inadequate perfusion forces anaerobic metabolism, raising lactate — a marker of severity in sepsis and septic shock." },
      { type: "mcq", q: "The single most effective measure to break the chain of infection is:", options: ["Antibiotics for everyone", "Hand hygiene", "Bed rest", "High-protein diet"], answer: 1, rationale: "Hand hygiene interrupts transmission (mode of transmission link) and is the most effective infection-control practice." },
      { type: "mcq", q: "In early septic shock, the skin is often warm and flushed because of:", options: ["Vasoconstriction", "Anaemia", "Massive vasodilation", "Dehydration alone"], answer: 2, rationale: "Distributive (septic) shock causes widespread vasodilation, so the skin is warm early, before decompensation makes it cold." },
      { type: "mcq", q: "Which set of findings should most raise suspicion of sepsis in an infected patient?", options: ["Normal vital signs", "Slow pulse and high urine output", "Isolated skin rash only", "Fever/hypothermia, tachycardia, tachypnoea, confusion and low urine output"], answer: 3, rationale: "This deteriorating pattern reflects the systemic response and organ dysfunction of sepsis, warranting urgent action." },
      { type: "mcq", q: "In the 'sepsis six', blood cultures should ideally be taken:", options: ["After a week of antibiotics", "Before giving antibiotics where possible", "Only if the patient recovers", "Never"], answer: 1, rationale: "Cultures taken before antibiotics identify the organism and guide therapy, without delaying the time-critical first-hour treatment." },
      { type: "mcq", q: "The stage of infection from exposure until the first symptoms appear is the:", options: ["Incubation period", "Prodromal stage", "Convalescence", "Illness stage"], answer: 0, rationale: "The incubation period is the symptom-free interval during which the pathogen multiplies before illness begins." }
      , { type: "fill", q: "Life-threatening organ dysfunction from a dysregulated host response to infection is called ____.", accept: ["sepsis"], rationale: "Sepsis is the dangerous systemic response to infection; septic shock is its most severe form with hypotension and raised lactate." }
      , { type: "fill", q: "The single most effective action to break the chain of infection is ____.", accept: ["hand hygiene", "hand washing", "handwashing", "hand-washing"], rationale: "Hand hygiene interrupts transmission and is the cornerstone of infection prevention." }
    ]
  }
];
