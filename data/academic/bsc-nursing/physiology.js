/* ============================================================
   B.Sc. Nursing (4-year, 2018) · Year 1 · B123 Paper II — Physiology
   — 16 topics. Degree-level FUNCTION & mechanisms, aligned to the
   BNMC 2018 B.Sc. syllabus (Physiology paper). Adapted and deepened
   from the diploma Anatomy & Physiology base; gross structure is left
   to the Anatomy paper. Grounded in standard texts:
     • Hall JE, Hall ME. Guyton and Hall Textbook of Medical Physiology. Elsevier.
     • Tortora GJ, Derrickson B. Principles of Anatomy and Physiology. Wiley.
     • Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_PHY = [
  "Hall JE, Hall ME. Guyton and Hall Textbook of Medical Physiology. Elsevier.",
  "Tortora GJ, Derrickson B. Principles of Anatomy and Physiology. Wiley.",
  "Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier."
];

window.Academic.topics["bsc-nursing/physiology"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "phy-01-intro-homeostasis",
    unit: "Unit 1 · General & Cellular Physiology",
    title: "Introduction to Physiology & Homeostasis",
    readMinutes: 17,
    summary: "Physiology as the study of function; levels of organisation; the internal environment; homeostasis and its regulation by negative and positive feedback; control systems; and the central relevance of homeostasis to nursing assessment and patient care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is physiology?", p: "Physiology is the science of how living organisms and their parts function — the mechanisms by which cells, tissues, organs and systems work, and how they are regulated and integrated to sustain life. Where anatomy asks 'what is it and where is it?', physiology asks 'how does it work and how is it controlled?'. For nursing, physiology is the foundation for understanding normal function, recognising when function is disturbed (pathophysiology), and interpreting vital signs and investigations." },
      { h: "Levels of structural organisation", list: [
        "Chemical level — atoms and molecules (water, ions, proteins, nucleic acids) that form the basis of function.",
        "Cellular level — the cell is the smallest living, functional unit of the body.",
        "Tissue level — groups of similar cells performing a common function (epithelial, connective, muscle, nervous).",
        "Organ level — different tissues combined into a structure with a specific function.",
        "System level — organs working together (e.g. cardiovascular, respiratory).",
        "Organismal level — all systems integrated into a living person."
      ] },
      { h: "The internal environment", p: "Claude Bernard described the 'milieu intérieur' — the extracellular fluid (ECF) that bathes every cell. Cells do not contact the outside world directly; they live in the ECF, from which they take oxygen and nutrients and into which they release waste. Life depends on keeping the composition of this internal environment (its temperature, pH, oxygen, glucose, ions and osmolality) within narrow limits, so that cellular enzymes and processes can work optimally." },
      { h: "Homeostasis", p: "Homeostasis (Walter Cannon) is the maintenance of a relatively stable internal environment despite continuous change inside and outside the body. It is a dynamic steady state, not a fixed one: controlled variables oscillate around a set point. Almost every organ and system contributes to homeostasis — for example, the lungs and kidneys regulate pH, the kidneys regulate fluid and electrolytes, and the endocrine system regulates glucose." },
      { h: "Components of a control system", p: "A homeostatic control system has three parts working in a loop.", list: [
        "Receptor (sensor) — detects change in the controlled variable (the stimulus) and sends input.",
        "Control centre (integrator) — often the brain or an endocrine gland; compares the input with the set point and decides the response.",
        "Effector — a muscle or gland that carries out the response (output) to correct the change."
      ], figure: {
        caption: "A negative-feedback homeostatic loop: a receptor detects change, the control centre compares it with the set point, and the effector restores the variable toward normal.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Negative feedback loop with receptor, control centre and effector."><defs><marker id="phArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="80" width="130" height="55" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="85" y="103" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">RECEPTOR</text><text x="85" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">detects change</text><rect x="215" y="80" width="130" height="55" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="103" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">CONTROL CENTRE</text><text x="280" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">compares to set point</text><rect x="410" y="80" width="130" height="55" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="475" y="103" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">EFFECTOR</text><text x="475" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">restores normal</text><line x1="150" y1="107" x2="211" y2="107" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr1)"/><line x1="345" y1="107" x2="406" y2="107" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr1)"/><path d="M475 135 L475 175 L85 175 L85 137" fill="none" stroke="#22C55E" stroke-width="2.5" marker-end="url(#phArr1)"/><text x="280" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">feedback: corrected variable re-sensed</text></svg>'
      } },
      { h: "Negative feedback", p: "Negative feedback is the main mechanism of homeostasis: the response opposes (reverses) the original change and returns the variable toward its set point, then switches off. Examples: a rise in body temperature triggers sweating and vasodilation to cool the body; a rise in blood glucose triggers insulin release, which lowers glucose; a fall in blood pressure triggers reflexes that raise it. Negative feedback keeps variables stable and self-limiting." },
      { h: "Positive feedback", p: "In positive feedback the response reinforces (amplifies) the original change, driving the variable further from the starting point until a definite end-point is reached. It is used for events that must go rapidly to completion: uterine contractions in labour (oxytocin), the clotting cascade, and the nerve action potential. Positive feedback is normally short-lived and controlled; uncontrolled positive feedback (e.g. in severe shock) can be dangerous." },
      { h: "Feedforward and set-point changes", p: "Feedforward control anticipates change and acts before the variable is disturbed (e.g. heart rate rising at the start of exercise). Set points can be reset physiologically — for example, in fever the hypothalamic 'thermostat' is reset to a higher temperature by pyrogens, so the body actively warms itself; understanding this explains why a feverish patient shivers." },
      { h: "Nursing application", list: [
        "Vital signs (temperature, pulse, respiration, blood pressure, oxygen saturation) are direct readings of homeostatic status.",
        "Illness is largely a failure of homeostasis; nursing care often aims to support or restore it (oxygen, fluids, warming/cooling, electrolyte correction).",
        "Recognising loss of homeostatic reserve — for example in the very young, the elderly, or the critically ill — guides closer monitoring.",
        "Understanding feedback explains treatment effects and adverse effects (e.g. why abrupt steroid withdrawal is harmful)."
      ] },
      { h: "Key terms", list: [
        "Set point — the ideal value the body defends.",
        "Extracellular fluid (ECF) — the internal environment of the cells.",
        "Dynamic steady state — stable overall despite constant small change.",
        "Negative feedback — response opposes the change (stabilising).",
        "Positive feedback — response amplifies the change (to an end-point)."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Define physiology and homeostasis. Explain the components of a homeostatic control system with a labelled diagram.",
      "Differentiate between negative and positive feedback, giving two physiological examples of each.",
      "Describe the concept of the internal environment and its importance in maintaining life.",
      "Explain how the body regulates a named variable (e.g. body temperature or blood glucose) by negative feedback.",
      "Discuss the relevance of homeostasis to nursing assessment and patient care."
    ],
    assessment: [
      { type: "mcq", q: "Physiology is best defined as the study of:", options: ["The structure of body parts", "How the body and its parts function", "The naming of body regions", "Disease-causing organisms"], answer: 1, rationale: "Physiology studies function and its regulation; anatomy studies structure." },
      { type: "mcq", q: "The maintenance of a relatively stable internal environment is called:", options: ["Metabolism", "Homeostasis", "Catabolism", "Diffusion"], answer: 1, rationale: "Homeostasis is the dynamic maintenance of a stable internal environment." },
      { type: "mcq", q: "The fluid that constitutes the 'internal environment' of the cells is the:", options: ["Intracellular fluid", "Extracellular fluid", "Cerebrospinal fluid only", "Digestive juice"], answer: 1, rationale: "Cells are bathed in extracellular fluid, from which they exchange substances." },
      { type: "mcq", q: "In a homeostatic control system, the part that carries out the corrective response is the:", options: ["Receptor", "Control centre", "Effector", "Stimulus"], answer: 2, rationale: "The effector (muscle or gland) executes the response ordered by the control centre." },
      { type: "mcq", q: "Which is the main mechanism that keeps homeostatic variables stable?", options: ["Positive feedback", "Negative feedback", "Feedforward only", "No control"], answer: 1, rationale: "Negative feedback opposes change and returns variables toward the set point." },
      { type: "mcq", q: "A classic example of positive feedback in the body is:", options: ["Regulation of blood glucose by insulin", "Sweating when hot", "Uterine contractions during labour", "Baroreflex control of blood pressure"], answer: 2, rationale: "Oxytocin-driven uterine contractions amplify until birth — a positive-feedback loop." },
      { type: "mcq", q: "In fever, the body actively warms itself because:", options: ["The set point of the hypothalamus is reset higher", "Negative feedback has stopped", "The skin loses all receptors", "Insulin levels rise"], answer: 0, rationale: "Pyrogens raise the hypothalamic set point, so the body warms toward the new (higher) target." },
      { type: "mcq", q: "The correct sequence of structural organisation from simplest to most complex is:", options: ["Cell → chemical → tissue → organ", "Chemical → cell → tissue → organ → system", "Organ → system → tissue → cell", "Tissue → cell → chemical → organ"], answer: 1, rationale: "Organisation rises chemical → cellular → tissue → organ → system → organism." },
      { type: "mcq", q: "Vital signs such as temperature and blood pressure are clinically useful mainly because they:", options: ["Show the patient's mood", "Indicate homeostatic status", "Measure body height", "Detect infection only"], answer: 1, rationale: "Vital signs are direct indicators of how well homeostasis is being maintained." },
      { type: "mcq", q: "Control that acts in anticipation, before a variable is actually disturbed, is called:", options: ["Negative feedback", "Positive feedback", "Feedforward control", "Set-point failure"], answer: 2, rationale: "Feedforward control anticipates change (e.g. heart rate rising as exercise begins)." },
      { type: "fill", q: "A control loop in which the response opposes the original change is called ____ feedback.", accept: ["negative"], rationale: "Negative feedback reverses change and is the basis of homeostasis." },
      { type: "fill", q: "The ideal value that the body defends in a control system is called the ____.", accept: ["set point", "setpoint"], rationale: "The set point is the target value compared against by the control centre." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "phy-02-cell-transport",
    unit: "Unit 1 · General & Cellular Physiology",
    title: "Cell Physiology & Transport Across the Cell Membrane",
    readMinutes: 18,
    summary: "Functional cell biology: the plasma membrane and fluid-mosaic model, functions of organelles, the resting membrane potential, and the mechanisms of transport across membranes — diffusion, osmosis, facilitated diffusion, active transport, and bulk transport — with their nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The cell as a functional unit", p: "The cell is the smallest unit that can carry out all life processes — metabolism, growth, response to stimuli, and reproduction. Physiologically the cell must obtain nutrients and oxygen, produce energy (ATP), synthesise proteins, remove wastes, and communicate with other cells. All of this depends on a selectively permeable plasma membrane that separates the intracellular fluid from the extracellular fluid and controls what enters and leaves." },
      { h: "The plasma membrane — fluid-mosaic model", p: "The membrane is a phospholipid bilayer (hydrophilic heads outward, hydrophobic tails inward) in which proteins float like a mosaic. This structure makes it selectively permeable: small, lipid-soluble and uncharged molecules (O2, CO2, steroids) cross easily, while ions and large water-soluble molecules need protein channels or carriers. Membrane proteins act as channels, carriers (pumps), receptors, enzymes, and cell-identity markers; cholesterol stabilises fluidity; glycoproteins form the glycocalyx for recognition." },
      { h: "Functions of major organelles", list: [
        "Nucleus — stores DNA; controls cell activity and protein synthesis (transcription).",
        "Ribosomes — sites of protein synthesis (translation).",
        "Rough endoplasmic reticulum — synthesises and folds membrane/secretory proteins.",
        "Smooth endoplasmic reticulum — lipid and steroid synthesis; calcium storage; detoxification.",
        "Golgi apparatus — modifies, packages and dispatches proteins in vesicles.",
        "Mitochondria — 'powerhouse'; aerobic respiration producing ATP.",
        "Lysosomes — digest worn organelles and engulfed material (autophagy, defence).",
        "Cytoskeleton — shape, movement and intracellular transport."
      ] },
      { h: "Composition of body fluids and gradients", p: "The intracellular fluid (ICF) is rich in potassium (K+), magnesium and phosphate/proteins; the extracellular fluid (ECF) is rich in sodium (Na+), chloride and bicarbonate. These concentration differences (gradients) are maintained by the membrane and by pumps, and they store potential energy that the cell uses for transport, signalling and excitability." },
      { h: "Passive transport — no ATP needed", p: "Passive processes move substances DOWN their concentration or electrochemical gradient, using the energy already stored in the gradient.", list: [
        "Simple diffusion — movement of a substance from high to low concentration until evenly spread; gases and lipid-soluble molecules diffuse directly through the bilayer.",
        "Facilitated diffusion — down-gradient movement of ions or polar molecules (e.g. glucose) through specific channel or carrier proteins; still passive but needs a protein.",
        "Osmosis — diffusion of water across a selectively permeable membrane from a region of lower solute (higher water) to higher solute (lower water) concentration.",
        "Filtration — movement of fluid and solutes through a membrane by hydrostatic pressure (e.g. in the renal glomerulus and capillaries)."
      ], figure: {
        caption: "Membrane transport: passive processes move substances down the gradient (no ATP); active transport uses ATP to move against the gradient.",
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classification of membrane transport into passive and active."><rect x="200" y="15" width="160" height="42" rx="9" fill="#0F4C3A"/><text x="280" y="41" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">MEMBRANE TRANSPORT</text><rect x="40" y="95" width="200" height="46" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="140" y="115" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">PASSIVE (no ATP)</text><text x="140" y="132" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">down the gradient</text><rect x="320" y="95" width="200" height="46" rx="9" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="420" y="115" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">ACTIVE (ATP)</text><text x="420" y="132" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">against the gradient</text><line x1="280" y1="57" x2="140" y2="93" stroke="#0F4C3A" stroke-width="2"/><line x1="280" y1="57" x2="420" y2="93" stroke="#0F4C3A" stroke-width="2"/><text x="140" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">diffusion · osmosis</text><text x="140" y="186" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">facilitated diffusion · filtration</text><text x="420" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Na+/K+ pump (primary)</text><text x="420" y="186" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">endo/exocytosis (bulk)</text></svg>'
      } },
      { h: "Tonicity — clinical importance", p: "Tonicity describes how a solution affects cell volume by osmosis. In an isotonic solution (e.g. 0.9% saline) cells neither swell nor shrink. In a hypotonic solution water enters and cells swell and may burst (haemolysis of red cells). In a hypertonic solution water leaves and cells shrink (crenation). This directly governs the choice of intravenous fluids and is a key reason nurses must give the prescribed fluid at the prescribed rate." },
      { h: "Active transport — ATP required", p: "Active transport moves substances AGAINST their gradient, so it needs energy (ATP). In primary active transport a pump hydrolyses ATP directly — the sodium–potassium pump (Na+/K+-ATPase) expels 3 Na+ and imports 2 K+ per ATP, maintaining the gradients essential for cell volume and excitability. In secondary active transport (co-transport) the energy stored in the Na+ gradient drives another substance uphill — for example glucose and amino-acid absorption in the intestine and kidney." },
      { h: "Bulk transport", list: [
        "Endocytosis — the membrane engulfs material into a vesicle: phagocytosis ('cell eating', e.g. white cells engulfing bacteria) and pinocytosis ('cell drinking' of fluid).",
        "Exocytosis — a vesicle fuses with the membrane to release its contents (e.g. secretion of hormones, enzymes and neurotransmitters)."
      ] },
      { h: "The resting membrane potential", p: "A living cell membrane is polarised: the inside is negative relative to the outside (about −70 mV in neurons). This resting membrane potential arises from the unequal distribution of ions (high K+ inside, high Na+ outside), the membrane's greater permeability to K+ at rest, and the Na+/K+ pump. This stored electrical energy allows nerve and muscle cells to generate action potentials." },
      { h: "Nursing application", list: [
        "IV fluid selection depends on tonicity — the wrong fluid can cause dangerous cell swelling or shrinkage.",
        "The Na+/K+ pump underlies excitability, so disturbances of sodium and potassium affect the heart, nerves and muscle.",
        "Phagocytosis is central to the inflammatory and immune response to infection.",
        "Understanding diffusion and osmosis explains oedema, dehydration, and drug movement across membranes."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the fluid-mosaic model of the plasma membrane and explain how it makes the membrane selectively permeable.",
      "Compare passive and active transport. Explain the working and importance of the sodium–potassium pump.",
      "Define osmosis and tonicity. Explain the effect of isotonic, hypotonic and hypertonic solutions on cells, with nursing relevance to IV fluids.",
      "List the main cell organelles and state one physiological function of each.",
      "Explain how the resting membrane potential is generated and why it matters for nerve and muscle."
    ],
    assessment: [
      { type: "mcq", q: "The 'powerhouse' of the cell that produces most ATP by aerobic respiration is the:", options: ["Ribosome", "Mitochondrion", "Lysosome", "Golgi apparatus"], answer: 1, rationale: "Mitochondria generate ATP through aerobic cellular respiration." },
      { type: "mcq", q: "Movement of water across a selectively permeable membrane from lower to higher solute concentration is:", options: ["Filtration", "Osmosis", "Active transport", "Phagocytosis"], answer: 1, rationale: "Osmosis is the diffusion of water toward the higher solute (lower water) side." },
      { type: "mcq", q: "The sodium–potassium pump transports, per ATP used:", options: ["2 Na+ out and 3 K+ in", "3 Na+ out and 2 K+ in", "3 Na+ in and 2 K+ out", "1 Na+ out and 1 K+ in"], answer: 1, rationale: "Na+/K+-ATPase expels 3 sodium ions and imports 2 potassium ions per ATP." },
      { type: "mcq", q: "Which process does NOT require cellular energy (ATP)?", options: ["Simple diffusion", "Primary active transport", "Exocytosis", "Phagocytosis"], answer: 0, rationale: "Simple diffusion is passive, using the concentration gradient rather than ATP." },
      { type: "mcq", q: "A red blood cell placed in a hypotonic solution will:", options: ["Shrink (crenate)", "Stay the same", "Swell and may burst", "Divide"], answer: 2, rationale: "Water enters the cell down its osmotic gradient, causing swelling and possible haemolysis." },
      { type: "mcq", q: "Absorption of glucose in the intestine coupled to the sodium gradient is an example of:", options: ["Simple diffusion", "Secondary active transport (co-transport)", "Osmosis", "Filtration"], answer: 1, rationale: "The Na+ gradient (set up by the pump) drives glucose uphill — secondary active transport." },
      { type: "mcq", q: "The engulfing of bacteria by a white blood cell is termed:", options: ["Pinocytosis", "Exocytosis", "Phagocytosis", "Diffusion"], answer: 2, rationale: "Phagocytosis ('cell eating') is endocytosis of solid particles such as microbes." },
      { type: "mcq", q: "The resting membrane potential of a typical neuron is approximately:", options: ["0 mV", "+70 mV", "−70 mV", "−200 mV"], answer: 2, rationale: "The inside is about −70 mV relative to the outside at rest." },
      { type: "mcq", q: "The intracellular fluid is characteristically high in:", options: ["Sodium", "Potassium", "Chloride", "Bicarbonate"], answer: 1, rationale: "ICF is rich in potassium, whereas ECF is rich in sodium." },
      { type: "mcq", q: "Which intravenous fluid is isotonic and will not, by itself, cause red cells to swell or shrink?", options: ["Pure water", "0.9% sodium chloride (normal saline)", "5% hypertonic saline", "Distilled water"], answer: 1, rationale: "0.9% saline is isotonic with plasma, so it does not shift water into or out of cells." },
      { type: "fill", q: "The membrane pump that maintains ion gradients by moving sodium out and potassium in using ATP is the ____ pump.", accept: ["sodium-potassium", "sodium potassium", "na+/k+", "na/k"], rationale: "The Na+/K+-ATPase maintains the resting gradients essential for excitability." },
      { type: "fill", q: "A solution with the same effective osmotic concentration as body cells is described as ____.", accept: ["isotonic"], rationale: "Isotonic solutions cause no net water movement, so cell volume is unchanged." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "phy-03-fluids-acidbase",
    unit: "Unit 1 · General & Cellular Physiology",
    title: "Body Fluids, Electrolytes & Acid-Base Balance",
    readMinutes: 18,
    summary: "Distribution and composition of body fluid compartments; regulation of water and the major electrolytes; the concept of pH; the bicarbonate buffer system; respiratory and renal control of acid-base balance; and reading a normal arterial blood gas — with clinical and nursing application.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Body fluid compartments", p: "Water makes up roughly 60% of adult body weight. It is distributed in two main compartments: about two-thirds is intracellular fluid (ICF) and one-third extracellular fluid (ECF). The ECF is subdivided into interstitial fluid (between cells) and plasma (in blood vessels), with small transcellular fluids (CSF, synovial, digestive juices). Water moves between compartments by osmosis, following solute (mainly sodium) and protein concentrations." },
      { h: "Electrolytes and their functions", p: "Electrolytes are ions that carry charge and are crucial for fluid balance, excitability and enzyme activity.", list: [
        "Sodium (Na+) — chief ECF cation; determines ECF volume and osmolality; vital for nerve/muscle excitability.",
        "Potassium (K+) — chief ICF cation; sets resting membrane potential; critical for cardiac rhythm.",
        "Calcium (Ca2+) — muscle contraction, clotting, nerve function, bone.",
        "Chloride (Cl−) — main ECF anion; acid–base and fluid balance.",
        "Bicarbonate (HCO3−) — major buffer of the ECF.",
        "Magnesium and phosphate — enzyme cofactors and energy (ATP) metabolism."
      ] },
      { h: "Regulation of water and sodium balance", p: "Water balance is regulated chiefly by antidiuretic hormone (ADH, vasopressin), which is released when plasma osmolality rises or volume falls and makes the kidney reabsorb water. Thirst adds intake. Sodium balance is regulated by aldosterone (from the adrenal cortex, via the renin–angiotensin–aldosterone system), which makes the kidney reabsorb sodium (and water follows). Atrial natriuretic peptide opposes this by promoting sodium and water loss when the heart is stretched." },
      { h: "Fluid balance and its disturbances", p: "Intake (drink, food, metabolic water) must match output (urine, faeces, skin, breath). A negative balance causes dehydration and hypovolaemia; a positive balance causes overload and oedema. Nurses monitor fluid balance charts, daily weight, skin turgor, mucous membranes, urine output and blood pressure to detect these states early." },
      { h: "The concept of pH and acids/bases", p: "pH is the negative logarithm of the hydrogen-ion (H+) concentration; a lower pH means more H+ (more acidic). Normal arterial blood pH is tightly held at 7.35–7.45 — slightly alkaline. Even small deviations impair enzyme function; pH below 6.8 or above 8.0 is generally incompatible with life. Acids donate H+ (e.g. carbonic acid); bases accept H+ (e.g. bicarbonate)." },
      { h: "Line 1: chemical buffers", p: "Buffers act within seconds to resist pH change by binding or releasing H+. The most important is the bicarbonate/carbonic-acid buffer system: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3−. When acid is added, bicarbonate mops up H+; when base is added, carbonic acid releases H+. Other buffers include phosphate and proteins (haemoglobin in red cells).", figure: {
        caption: "Three lines of acid–base defence: chemical buffers (seconds), the lungs adjusting CO2 (minutes), and the kidneys adjusting H+/HCO3− (hours to days).",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three lines of acid-base defence."><defs><marker id="phArr3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="70" width="150" height="70" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="95" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">BUFFERS</text><text x="95" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">seconds</text><rect x="205" y="70" width="150" height="70" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">LUNGS</text><text x="280" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">adjust CO2 · minutes</text><rect x="390" y="70" width="150" height="70" rx="10" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="465" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">KIDNEYS</text><text x="465" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">H+/HCO3- · hours-days</text><line x1="170" y1="105" x2="201" y2="105" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr3)"/><line x1="355" y1="105" x2="386" y2="105" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr3)"/><text x="280" y="30" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Defence of blood pH (7.35-7.45)</text></svg>'
      } },
      { h: "Line 2: respiratory control", p: "The lungs regulate pH within minutes by adjusting the amount of CO2 (an acid) exhaled. If blood is too acidic (high H+/CO2), the respiratory centre increases ventilation to blow off CO2 and raise pH; if too alkaline, breathing slows to retain CO2. This is why respiratory rate and depth change in acid–base disturbances." },
      { h: "Line 3: renal control", p: "The kidneys give the most powerful but slowest control (hours to days) by excreting H+ into the urine and reabsorbing or generating bicarbonate. They can also excrete ammonium and titratable acids. Renal compensation is the mechanism that eventually corrects a metabolic or a chronic respiratory disturbance." },
      { h: "Acid-base disturbances and the ABG", p: "There are four primary disorders: respiratory acidosis (CO2 retention, e.g. hypoventilation/COPD), respiratory alkalosis (CO2 loss, e.g. hyperventilation), metabolic acidosis (acid gain or bicarbonate loss, e.g. diabetic ketoacidosis, diarrhoea), and metabolic alkalosis (acid loss/bicarbonate gain, e.g. vomiting). A normal arterial blood gas shows pH about 7.35–7.45, PaCO2 about 35–45 mmHg, and HCO3− about 22–26 mmol/L; reading these three together tells whether the problem is respiratory or metabolic and whether it is being compensated." },
      { h: "Nursing application", list: [
        "Maintain accurate intake–output charts and daily weights to track fluid balance.",
        "Recognise signs of dehydration (dry mucosa, low urine output, tachycardia) and overload (oedema, raised JVP, breathlessness).",
        "Monitor and report electrolyte results — especially potassium, because of its effect on the heart.",
        "Interpret ABG trends to help detect deteriorating respiratory or metabolic status and evaluate oxygen/ventilation therapy."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the distribution of body fluids into compartments and explain how water moves between them.",
      "Explain the physiological regulation of water and sodium balance by ADH and aldosterone.",
      "Describe the bicarbonate buffer system and the three lines of defence that maintain acid–base balance.",
      "Classify the four primary acid–base disturbances and give one cause of each.",
      "State the normal values of arterial blood pH, PaCO2 and bicarbonate, and explain the nurse's role in fluid and electrolyte monitoring."
    ],
    assessment: [
      { type: "mcq", q: "Approximately what proportion of total body water is intracellular?", options: ["One-third", "One-half", "Two-thirds", "Nine-tenths"], answer: 2, rationale: "About two-thirds of body water is intracellular and one-third extracellular." },
      { type: "mcq", q: "The chief cation of the extracellular fluid is:", options: ["Potassium", "Sodium", "Calcium", "Magnesium"], answer: 1, rationale: "Sodium is the main ECF cation and determines ECF volume and osmolality." },
      { type: "mcq", q: "The hormone that increases renal water reabsorption when plasma osmolality rises is:", options: ["Aldosterone", "Antidiuretic hormone (ADH)", "Insulin", "Atrial natriuretic peptide"], answer: 1, rationale: "ADH (vasopressin) promotes water reabsorption to conserve water." },
      { type: "mcq", q: "Normal arterial blood pH lies in the range:", options: ["6.8–7.0", "7.35–7.45", "7.8–8.0", "5.0–6.0"], answer: 1, rationale: "Arterial pH is tightly maintained between 7.35 and 7.45 (slightly alkaline)." },
      { type: "mcq", q: "The most important buffer system in the extracellular fluid is the:", options: ["Phosphate system", "Protein system", "Bicarbonate/carbonic-acid system", "Ammonia system"], answer: 2, rationale: "The bicarbonate–carbonic acid pair is the principal ECF buffer." },
      { type: "mcq", q: "Which organ provides the fastest (minutes) adjustment of pH by altering CO2?", options: ["Kidneys", "Lungs", "Liver", "Skin"], answer: 1, rationale: "The lungs adjust CO2 (an acid) within minutes by changing ventilation." },
      { type: "mcq", q: "Prolonged vomiting with loss of gastric acid is most likely to cause:", options: ["Metabolic acidosis", "Respiratory acidosis", "Metabolic alkalosis", "Respiratory alkalosis"], answer: 2, rationale: "Loss of acid (H+) from the stomach raises pH — metabolic alkalosis." },
      { type: "mcq", q: "Diabetic ketoacidosis is an example of:", options: ["Respiratory alkalosis", "Metabolic acidosis", "Metabolic alkalosis", "Respiratory acidosis"], answer: 1, rationale: "Accumulation of ketoacids lowers pH — a metabolic acidosis." },
      { type: "mcq", q: "The electrolyte most closely associated with dangerous cardiac rhythm disturbances is:", options: ["Chloride", "Potassium", "Phosphate", "Magnesium"], answer: 1, rationale: "Potassium sets the resting potential of cardiac cells; abnormal levels cause arrhythmias." },
      { type: "mcq", q: "The slow but most powerful long-term control of acid–base balance is provided by the:", options: ["Buffers", "Lungs", "Kidneys", "Spleen"], answer: 2, rationale: "The kidneys excrete H+ and regenerate bicarbonate over hours to days." },
      { type: "fill", q: "The extracellular fluid is subdivided into plasma and ____ fluid.", accept: ["interstitial"], rationale: "Interstitial fluid surrounds the cells; with plasma it makes up the ECF." },
      { type: "fill", q: "A blood pH below 7.35 is termed ____.", accept: ["acidosis", "acidaemia"], rationale: "A fall in pH below the normal range indicates acidosis/acidaemia." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "phy-04-blood-haemostasis",
    unit: "Unit 2 · Blood & Cardiovascular Physiology",
    title: "Physiology of Blood & Haemostasis",
    readMinutes: 18,
    summary: "Functions and composition of blood; the roles of plasma proteins; erythrocyte function and oxygen carriage; leucocyte defence; platelet function; the stages of haemostasis and the clotting cascade; fibrinolysis; blood groups and transfusion — with strong nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of blood", p: "Blood is a specialised connective tissue and the body's main transport medium. Its functions fall into three groups: transport (oxygen, carbon dioxide, nutrients, hormones, wastes, heat), regulation (of pH, temperature and fluid balance), and protection (clotting to prevent blood loss, and white cells and antibodies to fight infection). An average adult has about 5 litres of blood." },
      { h: "Composition of blood", p: "Blood is about 55% plasma and 45% formed elements. Plasma is mostly water with dissolved plasma proteins, electrolytes, nutrients, gases and wastes. The formed elements are erythrocytes (red cells), leucocytes (white cells) and thrombocytes (platelets). All are produced from stem cells in red bone marrow (haemopoiesis)." },
      { h: "Plasma proteins", list: [
        "Albumin — the most abundant; maintains plasma osmotic (oncotic) pressure that holds fluid in vessels; carries substances.",
        "Globulins — include antibodies (immunoglobulins) for defence and transport proteins.",
        "Fibrinogen — the precursor of fibrin, essential for clotting.",
        "Clotting factors and complement — further defence and haemostatic proteins."
      ] },
      { h: "Erythrocytes and oxygen carriage", p: "Red cells are biconcave discs without a nucleus, packed with haemoglobin, and living about 120 days. Their shape maximises surface area for gas exchange and flexibility in capillaries. Haemoglobin binds oxygen where it is plentiful (lungs) and releases it where it is scarce (tissues); each gram of haemoglobin carries about 1.34 mL of oxygen. Red cell production (erythropoiesis) is stimulated by the hormone erythropoietin from the kidney in response to low oxygen, and needs iron, vitamin B12 and folate. Reduced haemoglobin causes anaemia." },
      { h: "Leucocytes — defence", p: "White cells defend against infection and foreign material.", list: [
        "Neutrophils — most numerous; first responders that phagocytose bacteria.",
        "Lymphocytes — B cells (antibodies) and T cells (cell-mediated immunity).",
        "Monocytes — become macrophages that engulf debris and microbes.",
        "Eosinophils — act against parasites and in allergy.",
        "Basophils — release histamine in inflammation and allergy."
      ] },
      { h: "Haemostasis — stopping bleeding", p: "Haemostasis is the process that stops blood loss from a damaged vessel. It occurs in three overlapping stages.", list: [
        "1. Vascular spasm — the injured vessel constricts immediately to reduce blood flow.",
        "2. Platelet plug formation — platelets adhere to exposed collagen, become activated, and aggregate into a temporary plug (helped by von Willebrand factor).",
        "3. Coagulation (blood clotting) — a cascade of clotting factors converts soluble fibrinogen into insoluble fibrin threads that trap cells and form a firm clot."
      ], figure: {
        caption: "The three stages of haemostasis: vascular spasm, platelet plug, then coagulation forming a fibrin clot.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three stages of haemostasis."><defs><marker id="phArr4" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="75" width="150" height="60" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="90" y="99" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">1. VASCULAR SPASM</text><text x="90" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">vessel constricts</text><rect x="205" y="75" width="150" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="99" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">2. PLATELET PLUG</text><text x="280" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">platelets aggregate</text><rect x="395" y="75" width="150" height="60" rx="10" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="470" y="99" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">3. COAGULATION</text><text x="470" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">fibrin clot forms</text><line x1="165" y1="105" x2="201" y2="105" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr4)"/><line x1="355" y1="105" x2="391" y2="105" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr4)"/></svg>'
      } },
      { h: "The coagulation cascade and fibrinolysis", p: "Coagulation proceeds by two pathways that converge: the intrinsic pathway (triggered by contact with damaged vessel surfaces) and the extrinsic pathway (triggered by tissue factor from injured tissue). Both reach a common pathway that activates prothrombin to thrombin; thrombin converts fibrinogen to fibrin and is a positive-feedback amplifier. Many factors need vitamin K and calcium. Once healing is under way, fibrinolysis dissolves the clot: plasmin (from plasminogen) digests fibrin. Balance between clotting and fibrinolysis prevents both bleeding and unwanted thrombosis." },
      { h: "Blood groups and transfusion", p: "The ABO system classifies blood by A and B antigens on red cells and the matching antibodies in plasma (group O has no antigens — 'universal donor'; group AB has no antibodies — 'universal recipient'). The Rh (D) system is important in pregnancy: an Rh-negative mother carrying an Rh-positive fetus may form anti-D antibodies (haemolytic disease of the newborn), prevented by anti-D prophylaxis. Transfusing incompatible blood causes a dangerous haemolytic reaction, so correct grouping, cross-matching and bedside identity checks are essential." },
      { h: "Nursing application", list: [
        "Recognise and monitor anaemia (pallor, fatigue, breathlessness) and bleeding tendencies.",
        "Perform the full safety checks before and during blood transfusion and observe for reactions.",
        "Understand anticoagulant therapy (e.g. warfarin acts on vitamin-K-dependent factors; heparin) and monitor for bleeding.",
        "Apply knowledge of haemostasis to wound care, pressure to bleeding sites, and post-procedure observation."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the composition and functions of blood, including the roles of the main plasma proteins.",
      "Explain the structure–function relationship of the red blood cell and the regulation of erythropoiesis.",
      "Describe the three stages of haemostasis and outline the coagulation cascade.",
      "Explain the ABO and Rh blood group systems and their importance in transfusion and pregnancy.",
      "Discuss the nurse's responsibilities during a blood transfusion."
    ],
    assessment: [
      { type: "mcq", q: "The most abundant plasma protein, responsible for plasma oncotic pressure, is:", options: ["Albumin", "Fibrinogen", "Globulin", "Haemoglobin"], answer: 0, rationale: "Albumin is the chief plasma protein and maintains oncotic pressure that keeps fluid in vessels." },
      { type: "mcq", q: "The average lifespan of a red blood cell is about:", options: ["10 days", "30 days", "120 days", "1 year"], answer: 2, rationale: "Erythrocytes circulate for roughly 120 days before being removed." },
      { type: "mcq", q: "The hormone that stimulates red cell production in response to low oxygen is:", options: ["Insulin", "Thyroxine", "Erythropoietin", "Aldosterone"], answer: 2, rationale: "Erythropoietin from the kidney drives erythropoiesis when oxygen is low." },
      { type: "mcq", q: "The first, immediate response to injury of a small blood vessel is:", options: ["Vascular spasm", "Fibrinolysis", "Fibrin clot formation", "Antibody release"], answer: 0, rationale: "Vascular (vasoconstrictor) spasm rapidly narrows the vessel to limit blood loss." },
      { type: "mcq", q: "In the coagulation cascade, thrombin converts:", options: ["Fibrin to fibrinogen", "Plasminogen to plasmin", "Fibrinogen to fibrin", "Prothrombin to fibrin"], answer: 2, rationale: "Thrombin converts soluble fibrinogen into insoluble fibrin threads." },
      { type: "mcq", q: "The white cell that is most numerous and acts as the first responder to bacterial infection is the:", options: ["Lymphocyte", "Neutrophil", "Eosinophil", "Basophil"], answer: 1, rationale: "Neutrophils are the most abundant leucocytes and phagocytose bacteria early." },
      { type: "mcq", q: "A person with blood group O is called a 'universal donor' because their red cells:", options: ["Have both A and B antigens", "Have Rh antigen only", "Have no A or B antigens", "Have no plasma"], answer: 2, rationale: "Group O red cells carry neither A nor B antigen, so they are less likely to be attacked." },
      { type: "mcq", q: "The enzyme that dissolves a fibrin clot during fibrinolysis is:", options: ["Thrombin", "Fibrinogen", "Prothrombin", "Plasmin"], answer: 3, rationale: "Plasmin (formed from plasminogen) digests fibrin to break down the clot." },
      { type: "mcq", q: "Vitamin K is required for the synthesis of several clotting factors; the drug that antagonises it is:", options: ["Warfarin", "Heparin", "Aspirin", "Insulin"], answer: 0, rationale: "Warfarin inhibits vitamin-K-dependent clotting factor synthesis." },
      { type: "mcq", q: "Haemolytic disease of the newborn can occur when:", options: ["An Rh-positive mother carries an Rh-negative baby", "Both parents are group O", "An Rh-negative mother carries an Rh-positive baby", "The baby has group AB blood"], answer: 2, rationale: "An Rh-negative mother may form anti-D against an Rh-positive fetus's cells." },
      { type: "fill", q: "The soluble plasma protein converted into insoluble threads to form a clot is ____.", accept: ["fibrinogen"], rationale: "Fibrinogen is converted by thrombin into fibrin, the clot's mesh." },
      { type: "fill", q: "A group AB, Rh-positive person is often called the universal ____ of blood.", accept: ["recipient"], rationale: "Group AB has no anti-A/anti-B antibodies, so can receive most ABO types." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "phy-05-muscle-physiology",
    unit: "Unit 2 · Blood & Cardiovascular Physiology",
    title: "Muscle Physiology & the Mechanism of Contraction",
    readMinutes: 17,
    summary: "Types and properties of muscle; the sliding-filament mechanism of skeletal muscle contraction; the neuromuscular junction and excitation–contraction coupling; the role of calcium and ATP; muscle energetics and fatigue; and features of smooth and cardiac muscle — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Types and functions of muscle", p: "Muscle tissue converts chemical energy (ATP) into mechanical work. There are three types: skeletal muscle (striated, voluntary, moves the skeleton and maintains posture), cardiac muscle (striated, involuntary, pumps blood), and smooth muscle (non-striated, involuntary, in the walls of hollow organs and vessels). Together they enable movement, posture, heat production, and propulsion of substances." },
      { h: "Properties of muscle tissue", list: [
        "Excitability (irritability) — responds to a stimulus by generating an electrical impulse.",
        "Contractility — shortens and generates force.",
        "Extensibility — can be stretched.",
        "Elasticity — returns to its resting length after stretch or contraction."
      ] },
      { h: "Structure relevant to function", p: "A skeletal muscle fibre contains many myofibrils made of repeating units called sarcomeres — the functional unit of contraction. Each sarcomere contains overlapping thick filaments (myosin) and thin filaments (actin, with regulatory troponin and tropomyosin). Their orderly overlap gives skeletal and cardiac muscle their striped (striated) appearance. The sarcoplasmic reticulum stores calcium." },
      { h: "The neuromuscular junction", p: "Skeletal muscle contracts only when stimulated by a motor neuron. The nerve ending releases the neurotransmitter acetylcholine, which crosses the synaptic cleft and binds receptors on the muscle membrane (motor end plate). This opens ion channels, depolarises the membrane, and triggers a muscle action potential. Acetylcholinesterase then breaks down acetylcholine to end the signal. Curare and some drugs act here, and the disease myasthenia gravis damages these receptors, causing weakness." },
      { h: "Excitation–contraction coupling", p: "The muscle action potential spreads along the membrane and down T-tubules into the fibre, triggering the sarcoplasmic reticulum to release calcium into the sarcoplasm. Calcium binds troponin, which moves tropomyosin off the binding sites on actin — exposing them for myosin. Thus the electrical signal is 'coupled' to mechanical contraction through calcium." },
      { h: "The sliding-filament mechanism", p: "Contraction occurs because the filaments slide past one another, shortening the sarcomere, without the filaments themselves shortening.", list: [
        "Myosin heads bind exposed sites on actin, forming cross-bridges.",
        "The 'power stroke' pulls the thin filaments toward the sarcomere centre.",
        "ATP binds myosin, releasing it from actin (detachment).",
        "ATP is split, re-cocking the head for another cycle while calcium is present.",
        "Cross-bridge cycling repeats, progressively shortening the muscle."
      ], figure: {
        caption: "Sliding-filament mechanism: calcium exposes actin sites, myosin cross-bridges pull the thin filaments inward, shortening the sarcomere.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sliding filament contraction of a sarcomere."><text x="280" y="24" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Sarcomere shortens as filaments slide</text><text x="30" y="55" font-family="sans-serif" font-size="11" fill="#15803D">RELAXED</text><line x1="120" y1="60" x2="440" y2="60" stroke="#0F4C3A" stroke-width="2"/><rect x="230" y="52" width="100" height="16" fill="#15803D"/><line x1="120" y1="60" x2="240" y2="60" stroke="#22C55E" stroke-width="4"/><line x1="320" y1="60" x2="440" y2="60" stroke="#22C55E" stroke-width="4"/><text x="30" y="120" font-family="sans-serif" font-size="11" fill="#7C2D12">CONTRACTED</text><line x1="180" y1="125" x2="380" y2="125" stroke="#0F4C3A" stroke-width="2"/><rect x="230" y="117" width="100" height="16" fill="#15803D"/><line x1="180" y1="125" x2="285" y2="125" stroke="#22C55E" stroke-width="4"/><line x1="275" y1="125" x2="380" y2="125" stroke="#22C55E" stroke-width="4"/><text x="280" y="165" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">thick (myosin) = dark bar · thin (actin) = light lines</text></svg>'
      } },
      { h: "Relaxation, ATP and calcium", p: "When nerve stimulation stops, calcium is actively pumped back into the sarcoplasmic reticulum (using ATP). Tropomyosin re-covers the binding sites, cross-bridges cannot form, and the muscle relaxes. ATP is therefore needed both to contract (cross-bridge cycling) and to relax (calcium pumping and detaching myosin). This explains rigor mortis after death, when ATP is exhausted and cross-bridges lock." },
      { h: "Muscle energetics and fatigue", p: "Muscles obtain ATP from stored creatine phosphate (immediate), aerobic respiration (sustained, needs oxygen), and anaerobic glycolysis (fast but produces lactic acid and little ATP). Muscle fatigue is the decline in force with prolonged activity, from factors such as depleted energy stores and ionic changes. Oxygen debt is the extra oxygen taken up afterward to restore reserves and clear lactic acid. A single stimulus gives a twitch; repeated rapid stimuli sum to a smooth, stronger contraction (tetanus); sustained partial contraction gives muscle tone." },
      { h: "Smooth and cardiac muscle", p: "Smooth muscle contracts slowly and can sustain tone with little energy; it is controlled by the autonomic nervous system, hormones and stretch, and produces movements such as peristalsis and vasoconstriction. Cardiac muscle is striated but involuntary, its cells joined by intercalated discs with gap junctions that let the heart contract as a unit; it is self-exciting (automaticity) and does not fatigue. Both rely on the same basic actin–myosin–calcium principle." },
      { h: "Nursing application", list: [
        "Understanding calcium's role explains muscle cramps, tetany in low calcium, and the effect of electrolyte imbalance on muscle and heart.",
        "Immobility leads to muscle wasting (atrophy); early mobilisation and exercise preserve function.",
        "Knowledge of the neuromuscular junction underpins care in myasthenia gravis and the action of muscle relaxants in anaesthesia.",
        "Understanding fatigue and energetics guides activity planning for cardiac and respiratory patients."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Name the three types of muscle and compare their structure, control and function.",
      "Describe the sliding-filament mechanism of skeletal muscle contraction.",
      "Explain the role of the neuromuscular junction and calcium in excitation–contraction coupling.",
      "Discuss the sources of energy for muscle contraction and the causes of muscle fatigue.",
      "Explain why ATP is required for both contraction and relaxation, with reference to rigor mortis."
    ],
    assessment: [
      { type: "mcq", q: "The functional (contractile) unit of skeletal muscle is the:", options: ["Myofibril", "Sarcomere", "Motor unit", "T-tubule"], answer: 1, rationale: "The sarcomere is the repeating unit between Z-lines where contraction occurs." },
      { type: "mcq", q: "The neurotransmitter released at the skeletal neuromuscular junction is:", options: ["Noradrenaline", "Acetylcholine", "Dopamine", "GABA"], answer: 1, rationale: "Motor neurons release acetylcholine to excite skeletal muscle fibres." },
      { type: "mcq", q: "The ion released from the sarcoplasmic reticulum that triggers contraction is:", options: ["Sodium", "Potassium", "Calcium", "Chloride"], answer: 2, rationale: "Calcium binds troponin, exposing actin sites so cross-bridges can form." },
      { type: "mcq", q: "During the sliding-filament mechanism, contraction occurs because:", options: ["The actin filaments themselves shorten", "The filaments slide past one another, shortening the sarcomere", "The myosin dissolves", "The Z-lines disappear"], answer: 1, rationale: "Filaments slide over each other; their length is unchanged but the sarcomere shortens." },
      { type: "mcq", q: "ATP is required in muscle for:", options: ["Contraction only", "Relaxation only", "Both contraction and relaxation", "Neither"], answer: 2, rationale: "ATP powers cross-bridge cycling (contraction) and calcium pumping/detachment (relaxation)." },
      { type: "mcq", q: "The type of muscle that is striated, involuntary and self-exciting is:", options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Tendon"], answer: 2, rationale: "Cardiac muscle is striated, involuntary and shows automaticity." },
      { type: "mcq", q: "A sustained, smooth, maximal contraction produced by rapid repeated stimulation is called:", options: ["A twitch", "Tetanus", "Tone", "Atrophy"], answer: 1, rationale: "Rapid stimuli summate into a fused, sustained contraction (tetanus)." },
      { type: "mcq", q: "Rigor mortis occurs after death because:", options: ["Calcium is pumped away", "ATP is exhausted so cross-bridges cannot detach", "Acetylcholine is released continuously", "Muscle fibres regenerate"], answer: 1, rationale: "Without ATP, myosin cannot release actin, so muscles stiffen." },
      { type: "mcq", q: "The autoimmune disease that destroys acetylcholine receptors, causing muscle weakness, is:", options: ["Myasthenia gravis", "Anaemia", "Diabetes", "Osteoporosis"], answer: 0, rationale: "Myasthenia gravis targets neuromuscular junction receptors, weakening muscle." },
      { type: "mcq", q: "The extra oxygen consumed after strenuous exercise to restore reserves and clear lactic acid is the:", options: ["Tidal volume", "Oxygen debt", "Residual volume", "Vital capacity"], answer: 1, rationale: "Oxygen debt is the post-exercise oxygen uptake used for recovery." },
      { type: "fill", q: "The protein that must bind calcium to move tropomyosin off the actin binding sites is ____.", accept: ["troponin"], rationale: "Calcium binds troponin, shifting tropomyosin to expose the myosin-binding sites." },
      { type: "fill", q: "The type of muscle found in the walls of the intestines and blood vessels is ____ muscle.", accept: ["smooth", "involuntary"], rationale: "Smooth (involuntary, non-striated) muscle lines hollow organs and vessels." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "phy-06-cardiac-cycle",
    unit: "Unit 2 · Blood & Cardiovascular Physiology",
    title: "Cardiac Physiology & the Cardiac Cycle",
    readMinutes: 18,
    summary: "The heart as a pump; the conducting system and origin of the heartbeat; the cardiac cycle and heart sounds; cardiac output and its determinants (preload, afterload, contractility, heart rate); the Frank–Starling law; regulation of heart action; and the basis of the ECG — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The heart as a double pump", p: "The heart is a muscular pump that drives blood through two circuits. The right side receives deoxygenated blood and pumps it to the lungs (pulmonary circulation); the left side receives oxygenated blood and pumps it to the whole body (systemic circulation). The two sides beat together, and one-way valves (atrioventricular and semilunar) ensure blood flows in a single direction." },
      { h: "Automaticity and the conducting system", p: "Cardiac muscle is myogenic — it generates its own rhythm without nerves. Specialised cells form the conducting system.", list: [
        "Sinoatrial (SA) node — the pacemaker; sets the rhythm (about 60–100/min at rest).",
        "Atrioventricular (AV) node — delays the impulse, letting the atria empty before the ventricles contract.",
        "Bundle of His and its branches — carry the impulse into the ventricular septum.",
        "Purkinje fibres — spread the impulse rapidly through the ventricles for a coordinated contraction."
      ] },
      { h: "The cardiac cycle", p: "The cardiac cycle is one complete heartbeat — the sequence of contraction (systole) and relaxation (diastole) of the atria and ventricles, lasting about 0.8 second at 75 beats/min. It has three phases: atrial systole (atria contract, topping up the ventricles), ventricular systole (ventricles contract, closing the AV valves and ejecting blood through the semilunar valves), and complete diastole (all chambers relax and fill). Pressure changes open and close the valves, ensuring one-way flow.", figure: {
        caption: "The cardiac cycle: atrial systole, ventricular systole, then diastole — coordinated by valve opening and closing.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phases of the cardiac cycle."><defs><marker id="phArr6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="75" width="150" height="60" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="90" y="99" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">ATRIAL SYSTOLE</text><text x="90" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">atria contract</text><rect x="205" y="75" width="150" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">VENTRICULAR SYSTOLE</text><text x="280" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">blood ejected</text><rect x="395" y="75" width="150" height="60" rx="10" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="470" y="99" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">DIASTOLE</text><text x="470" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">chambers fill</text><line x1="165" y1="105" x2="201" y2="105" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr6)"/><line x1="355" y1="105" x2="391" y2="105" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr6)"/><path d="M470 135 L470 165 L90 165 L90 137" fill="none" stroke="#22C55E" stroke-width="2" marker-end="url(#phArr6)"/><text x="280" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">cycle repeats (~0.8 s)</text></svg>'
      } },
      { h: "Heart sounds", p: "Two main sounds are heard with a stethoscope. The first sound ('lub', S1) is the closure of the atrioventricular valves at the start of ventricular systole. The second sound ('dub', S2) is the closure of the semilunar (aortic and pulmonary) valves at the start of diastole. Extra sounds or murmurs may indicate turbulent flow through diseased or leaking valves." },
      { h: "Cardiac output and stroke volume", p: "Cardiac output (CO) is the volume of blood pumped by each ventricle per minute: CO = stroke volume × heart rate. Stroke volume is the volume ejected per beat (about 70 mL); heart rate is beats per minute. At rest CO is about 5 L/min but can rise several-fold in exercise. CO must match the body's metabolic needs; a falling CO underlies shock and heart failure.", figure: {
        caption: "Determinants of cardiac output.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cardiac output equals stroke volume times heart rate."><rect x="40" y="55" width="150" height="46" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="115" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">STROKE VOLUME</text><text x="115" y="93" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">~70 mL/beat</text><text x="215" y="84" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#0F4C3A">&#215;</text><rect x="245" y="55" width="150" height="46" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="320" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">HEART RATE</text><text x="320" y="93" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">~75 beats/min</text><text x="420" y="84" text-anchor="middle" font-family="sans-serif" font-size="22" font-weight="700" fill="#0F4C3A">=</text><rect x="445" y="55" width="100" height="46" rx="9" fill="#0F4C3A"/><text x="495" y="76" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">CO</text><text x="495" y="93" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">~5 L/min</text></svg>'
      } },
      { h: "Determinants of stroke volume", list: [
        "Preload — the degree of stretch of the ventricle before contraction, set by venous return (end-diastolic volume).",
        "Afterload — the resistance the ventricle must overcome to eject blood (mainly arterial pressure).",
        "Contractility — the intrinsic strength of contraction, increased by sympathetic stimulation and adrenaline."
      ] },
      { h: "The Frank–Starling law", p: "The Frank–Starling law of the heart states that, within limits, the greater the stretch of cardiac muscle during filling (greater preload), the stronger the following contraction and the larger the stroke volume. This lets the heart automatically match its output to the amount of blood returning to it (venous return), and balances the output of the two ventricles." },
      { h: "Regulation of heart action", p: "Although the heart is myogenic, its rate and force are adjusted by the autonomic nervous system from the cardiac centre in the medulla: sympathetic nerves and adrenaline increase rate and contractility (via noradrenaline), while parasympathetic (vagal) activity slows the rate. Baroreceptors sense blood pressure, chemoreceptors sense blood gases, and factors such as temperature, emotion, exercise and electrolytes (especially potassium and calcium) also influence heart action." },
      { h: "The electrocardiogram (ECG)", p: "The ECG records the electrical activity of the heart from the body surface. The P wave represents atrial depolarisation, the QRS complex ventricular depolarisation, and the T wave ventricular repolarisation. The ECG shows heart rate and rhythm and helps detect conduction problems, ischaemia and the effects of electrolyte disturbances — knowledge nurses use in cardiac monitoring." },
      { h: "Nursing application", list: [
        "Pulse rate, rhythm and blood pressure reflect cardiac function and are core nursing observations.",
        "Understanding cardiac output explains the signs of shock and heart failure and the rationale for their treatment.",
        "Knowledge of the conducting system and ECG underpins safe cardiac monitoring and recognition of arrhythmias.",
        "Awareness of how potassium and calcium affect the heart guides electrolyte monitoring and cautious IV administration."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the conducting system of the heart and explain how the heartbeat is initiated and coordinated.",
      "Describe the phases of the cardiac cycle and explain the origin of the two heart sounds.",
      "Define cardiac output and stroke volume. Explain the factors (preload, afterload, contractility) that determine them.",
      "State and explain the Frank–Starling law of the heart and its physiological importance.",
      "Explain how the rate and force of the heart are regulated, and outline what the ECG measures."
    ],
    assessment: [
      { type: "mcq", q: "The natural pacemaker of the heart is the:", options: ["SA node", "AV node", "Bundle of His", "Purkinje fibres"], answer: 0, rationale: "The sinoatrial node sets the intrinsic heart rhythm." },
      { type: "mcq", q: "The delay at the atrioventricular node allows:", options: ["The ventricles to contract first", "The valves to stay shut", "The atria to empty into the ventricles before ventricular contraction", "Blood to flow backward"], answer: 2, rationale: "The AV delay ensures atrial emptying precedes ventricular systole." },
      { type: "mcq", q: "Cardiac output is calculated as:", options: ["Heart rate ÷ stroke volume", "Stroke volume × heart rate", "Blood pressure × heart rate", "Stroke volume + heart rate"], answer: 1, rationale: "CO = stroke volume × heart rate." },
      { type: "mcq", q: "The first heart sound ('lub', S1) is produced by closure of the:", options: ["Semilunar valves", "Aortic valve only", "Coronary sinus", "Atrioventricular valves"], answer: 3, rationale: "S1 is the closure of the AV valves at the start of ventricular systole." },
      { type: "mcq", q: "According to the Frank–Starling law, increasing preload (venous return) will:", options: ["Increase the force of contraction and stroke volume", "Decrease stroke volume", "Stop the heart", "Close the SA node"], answer: 0, rationale: "Greater stretch during filling produces a stronger contraction and larger stroke volume." },
      { type: "mcq", q: "On the ECG, the QRS complex represents:", options: ["Atrial depolarisation", "Ventricular depolarisation", "Ventricular repolarisation", "Valve closure"], answer: 1, rationale: "The QRS complex reflects depolarisation (contraction) of the ventricles." },
      { type: "mcq", q: "Parasympathetic (vagal) stimulation of the heart causes it to:", options: ["Speed up", "Stop permanently", "Slow down", "Enlarge"], answer: 2, rationale: "Vagal activity reduces heart rate; sympathetic activity increases it." },
      { type: "mcq", q: "The resistance against which the ventricle must eject blood is termed:", options: ["Preload", "Contractility", "Afterload", "Stroke volume"], answer: 2, rationale: "Afterload is the arterial resistance the ventricle overcomes during ejection." },
      { type: "mcq", q: "Approximate cardiac output at rest in a healthy adult is:", options: ["1 L/min", "20 L/min", "5 L/min", "50 L/min"], answer: 2, rationale: "Resting cardiac output is about 5 litres per minute." },
      { type: "mcq", q: "The cardiac control centre that adjusts heart rate through autonomic nerves is located in the:", options: ["Cerebellum", "Pituitary gland", "SA node", "Medulla oblongata"], answer: 3, rationale: "The medullary cardiac centre modulates rate and force via the autonomic nerves." },
      { type: "fill", q: "The volume of blood ejected by a ventricle in one beat is called the ____.", accept: ["stroke volume"], rationale: "Stroke volume multiplied by heart rate gives cardiac output." },
      { type: "fill", q: "The period of contraction of a heart chamber is called ____.", accept: ["systole"], rationale: "Systole is contraction; diastole is relaxation and filling." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "phy-07-circulation-bp",
    unit: "Unit 2 · Blood & Cardiovascular Physiology",
    title: "Blood Circulation & Regulation of Blood Pressure",
    readMinutes: 18,
    summary: "Functions of blood vessels; the physics of blood flow, pressure and resistance; capillary exchange and oedema; venous return; the systemic, pulmonary and fetal circulations; and the short- and long-term regulation of arterial blood pressure — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functional roles of blood vessels", list: [
        "Arteries — carry blood away from the heart under high pressure; elastic recoil smooths flow.",
        "Arterioles — the main resistance vessels; their diameter is adjusted to control blood pressure and distribute flow.",
        "Capillaries — the exchange vessels; thin walls allow gases, nutrients and wastes to pass between blood and tissues.",
        "Venules and veins — collect blood and return it to the heart at low pressure; contain valves and act as a blood reservoir."
      ] },
      { h: "Blood flow, pressure and resistance", p: "Blood flows from an area of high pressure to low pressure. Flow through the circulation depends on the pressure gradient and the resistance to flow: Flow = pressure gradient ÷ resistance. Resistance rises steeply as vessel radius falls (a small narrowing greatly increases resistance), so arterioles are the key controllers. Blood viscosity and vessel length also affect resistance. Understanding this explains why vasoconstriction raises blood pressure and why anaemia or polycythaemia alters flow." },
      { h: "Arterial blood pressure", p: "Blood pressure is the force exerted by blood on vessel walls. Arterial pressure rises during ventricular systole (systolic pressure, about 120 mmHg) and falls during diastole (diastolic pressure, about 80 mmHg); the difference is the pulse pressure. Mean arterial pressure (MAP) is the average pressure driving flow to the tissues. Blood pressure is determined mainly by cardiac output and peripheral (arteriolar) resistance: BP = CO × peripheral resistance." },
      { h: "Capillary exchange and oedema", p: "Exchange across capillary walls occurs by diffusion, and by bulk flow driven by two opposing pressures. Hydrostatic (blood) pressure pushes fluid out at the arterial end; plasma oncotic pressure (from albumin) pulls fluid back in at the venous end. Normally most fluid is reabsorbed and the small excess is drained by the lymphatics. Oedema (fluid accumulation) results if capillary pressure rises (heart failure), oncotic pressure falls (low albumin), capillaries leak (inflammation), or lymphatic drainage is blocked." },
      { h: "Venous return", p: "Because venous pressure is low, blood is helped back to the heart by the skeletal muscle pump (contracting muscles squeeze veins, with valves ensuring one-way flow), the respiratory pump (pressure changes in breathing), venous tone, and gravity. Adequate venous return is essential because, by the Frank–Starling law, it sets preload and therefore cardiac output. Prolonged standing or immobility reduces venous return and can cause fainting or venous stasis and thrombosis." },
      { h: "The systemic and pulmonary circulations", p: "The pulmonary circulation carries deoxygenated blood from the right ventricle to the lungs and returns oxygenated blood to the left atrium; it is a low-pressure circuit for gas exchange. The systemic circulation carries oxygenated blood from the left ventricle to all body tissues and returns deoxygenated blood to the right atrium; it is a high-pressure circuit. Special regional circulations (coronary, cerebral, hepatic portal) have particular features." },
      { h: "Fetal circulation", p: "Before birth the lungs are non-functional, so the fetal circulation bypasses them. The placenta oxygenates fetal blood; three shunts divert blood away from the lungs and liver: the ductus venosus (bypasses the liver), the foramen ovale (a hole between the atria) and the ductus arteriosus (between the pulmonary artery and aorta). At birth, with the first breaths, the lungs expand, pressures change, and these shunts close — the foramen ovale and ductus arteriosus becoming fibrous remnants. Failure to close causes congenital heart defects.", figure: {
        caption: "Fetal shunts that bypass the lungs and liver, and what they normally become after birth.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fetal circulatory shunts."><text x="280" y="24" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Fetal shunts (close at birth)</text><rect x="20" y="45" width="165" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="102" y="68" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Ductus venosus</text><text x="102" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">bypasses liver</text><rect x="197" y="45" width="165" height="55" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="279" y="68" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Foramen ovale</text><text x="279" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">right to left atrium</text><rect x="374" y="45" width="165" height="55" rx="9" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="456" y="68" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Ductus arteriosus</text><text x="456" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">pulm. artery to aorta</text><text x="280" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">All bypass the non-functioning fetal lungs</text><text x="280" y="158" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">At birth lungs expand &#8594; shunts close</text></svg>'
      } },
      { h: "Short-term regulation of blood pressure", p: "Blood pressure is controlled minute-to-minute by the baroreceptor reflex. Baroreceptors in the carotid sinus and aortic arch sense stretch (pressure). A fall in pressure reduces their firing; the vasomotor and cardiac centres in the medulla respond by increasing heart rate, contractility and vasoconstriction to restore pressure — and the opposite for a rise. Chemoreceptors and hormones such as adrenaline also contribute. This reflex explains why blood pressure is briefly maintained when a person stands up." },
      { h: "Long-term regulation of blood pressure", p: "Over hours to days, blood pressure is controlled mainly by the kidneys through blood volume. The renin–angiotensin–aldosterone system (RAAS) responds to low pressure/volume: renin leads to angiotensin II (a powerful vasoconstrictor) and to aldosterone (which retains sodium and water), raising volume and pressure. ADH also retains water. Many antihypertensive drugs act on these systems, which is why understanding them matters for nursing." },
      { h: "Nursing application", list: [
        "Accurate blood pressure measurement and interpretation are core nursing skills; recognise hypertension and hypotension.",
        "Understanding the baroreflex explains postural (orthostatic) hypotension — advise patients to rise slowly.",
        "Knowledge of capillary dynamics explains oedema and guides positioning, fluid management and skin care.",
        "Encourage leg movement and mobilisation to promote venous return and prevent deep vein thrombosis."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the functional differences between arteries, capillaries and veins and relate them to structure.",
      "Explain the factors that determine arterial blood pressure and the physics of blood flow and resistance.",
      "Describe capillary fluid exchange and explain the mechanisms that produce oedema.",
      "Explain the baroreceptor reflex and the renin–angiotensin–aldosterone system in blood pressure regulation.",
      "Describe the fetal circulation and the changes that occur at birth."
    ],
    assessment: [
      { type: "mcq", q: "The vessels that offer the greatest resistance and are the main controllers of blood pressure are the:", options: ["Arterioles", "Capillaries", "Large veins", "Venules"], answer: 0, rationale: "Arterioles regulate resistance by changing diameter, controlling blood pressure and flow." },
      { type: "mcq", q: "Exchange of gases, nutrients and wastes between blood and tissues occurs in the:", options: ["Arteries", "Capillaries", "Veins", "Arterioles"], answer: 1, rationale: "Thin-walled capillaries are the exchange vessels of the circulation." },
      { type: "mcq", q: "Arterial blood pressure is determined mainly by:", options: ["Blood colour and viscosity", "Cardiac output and peripheral resistance", "Number of red cells only", "Body temperature only"], answer: 1, rationale: "BP = cardiac output × peripheral (arteriolar) resistance." },
      { type: "mcq", q: "Oedema due to a fall in plasma oncotic pressure is most often caused by:", options: ["High albumin", "Increased lymph drainage", "Low plasma albumin", "Vasoconstriction"], answer: 2, rationale: "Low albumin reduces the pull holding fluid in vessels, so fluid accumulates in tissues." },
      { type: "mcq", q: "The pressure receptors that provide short-term (minute-to-minute) blood pressure control are the:", options: ["Chemoreceptors", "Osmoreceptors", "Baroreceptors", "Photoreceptors"], answer: 2, rationale: "Baroreceptors in the carotid sinus and aortic arch drive the reflex control of pressure." },
      { type: "mcq", q: "In the fetus, the foramen ovale allows blood to pass:", options: ["From aorta to pulmonary artery", "From liver to placenta", "Through the ductus venosus", "Between the two atria"], answer: 3, rationale: "The foramen ovale shunts blood from the right atrium to the left atrium, bypassing the lungs." },
      { type: "mcq", q: "The system that provides long-term blood pressure control by adjusting blood volume is the:", options: ["Renin–angiotensin–aldosterone system", "Baroreceptor reflex", "Neuromuscular junction", "Sliding-filament system"], answer: 0, rationale: "The RAAS retains sodium and water and causes vasoconstriction to raise pressure over hours to days." },
      { type: "mcq", q: "Venous return to the heart is assisted mainly by:", options: ["High arterial pressure alone", "Capillary diffusion", "The skeletal muscle pump and venous valves", "Red cell shape"], answer: 2, rationale: "Contracting skeletal muscles with one-way valves push venous blood back to the heart." },
      { type: "mcq", q: "The pulmonary circulation carries blood:", options: ["From the left ventricle to the body", "From the aorta to the kidneys", "From the right ventricle to the lungs", "From the liver to the gut"], answer: 2, rationale: "The pulmonary circuit takes deoxygenated blood from the right ventricle to the lungs." },
      { type: "mcq", q: "Angiotensin II raises blood pressure mainly by:", options: ["Dilating arterioles", "Lowering blood volume", "Slowing the heart", "Powerful vasoconstriction and stimulating aldosterone"], answer: 3, rationale: "Angiotensin II is a strong vasoconstrictor and triggers sodium-retaining aldosterone." },
      { type: "fill", q: "The difference between systolic and diastolic blood pressure is called the ____ pressure.", accept: ["pulse"], rationale: "Pulse pressure = systolic minus diastolic pressure." },
      { type: "fill", q: "The fetal shunt connecting the pulmonary artery to the aorta is the ductus ____.", accept: ["arteriosus"], rationale: "The ductus arteriosus diverts blood from the pulmonary artery to the aorta before birth." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "phy-08-respiratory-physiology",
    unit: "Unit 3 · Respiration, Digestion & Excretion",
    title: "Respiratory Physiology: Ventilation, Gas Exchange & Transport",
    readMinutes: 18,
    summary: "Functions of the respiratory system; the mechanics of breathing and lung volumes; gas exchange by diffusion at the alveoli and tissues; transport of oxygen and carbon dioxide in blood; the control of breathing; the lung's role in acid-base balance; and reading a normal arterial blood gas — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of respiration", p: "Respiration supplies oxygen for cellular energy production and removes carbon dioxide, a waste of metabolism. It has several steps: pulmonary ventilation (breathing), external respiration (gas exchange in the lungs), transport of gases in the blood, and internal respiration (gas exchange at the tissues). The system also helps regulate blood pH, warms and humidifies air, defends against inhaled particles, and enables speech and smell." },
      { h: "Mechanics of breathing", p: "Air moves in and out of the lungs because of pressure differences created by changing thoracic volume (Boyle's law: volume up, pressure down).", list: [
        "Inspiration (active) — the diaphragm and external intercostal muscles contract, enlarging the thorax; intrapulmonary pressure falls below atmospheric, so air flows in.",
        "Expiration (passive at rest) — the muscles relax, the elastic lungs recoil, thoracic volume falls, pressure rises, and air flows out; forced expiration uses abdominal and internal intercostal muscles.",
        "Compliance — the ease with which the lungs stretch; reduced in stiff (fibrotic) lungs.",
        "Surfactant — reduces surface tension in the alveoli, preventing collapse; its lack causes respiratory distress in the newborn."
      ] },
      { h: "Lung volumes and capacities", p: "Spirometry measures the air moved in breathing.", list: [
        "Tidal volume — air moved in a normal quiet breath (about 500 mL).",
        "Inspiratory and expiratory reserve volumes — extra air that can be inhaled or exhaled forcibly.",
        "Residual volume — air remaining after maximal expiration (keeps alveoli open).",
        "Vital capacity — the maximum air exhaled after a maximal inspiration.",
        "Total lung capacity — vital capacity plus residual volume.",
        "Dead space — air in the conducting airways that takes no part in gas exchange."
      ] },
      { h: "Gas exchange (external and internal respiration)", p: "Gases move by diffusion from high to low partial pressure across the thin respiratory membrane. In the lungs, oxygen diffuses from alveolar air (high PO2) into blood, and carbon dioxide diffuses from blood into the alveoli to be exhaled (external respiration). At the tissues the gradients reverse: oxygen leaves the blood for the cells and carbon dioxide enters the blood (internal respiration). Efficient exchange needs a large, thin, moist surface and a good match of ventilation to blood flow (perfusion).", figure: {
        caption: "Gas exchange follows partial-pressure gradients: O2 into blood and CO2 out at the lungs; the reverse at the tissues.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="External and internal respiration."><defs><marker id="phArr8" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="30" y="55" width="180" height="80" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="120" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">LUNGS (alveoli)</text><text x="120" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">O2 in &#8594; blood</text><text x="120" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">CO2 out &#8592; blood</text><rect x="350" y="55" width="180" height="80" rx="10" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="440" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">TISSUES (cells)</text><text x="440" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">O2 out &#8594; cells</text><text x="440" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">CO2 in &#8592; cells</text><line x1="210" y1="80" x2="348" y2="80" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr8)"/><text x="280" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">O2 carried</text><line x1="350" y1="115" x2="212" y2="115" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#phArr8)"/><text x="280" y="132" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">CO2 carried</text></svg>'
      } },
      { h: "Transport of oxygen", p: "About 98% of oxygen is carried bound to haemoglobin as oxyhaemoglobin; a small amount is dissolved in plasma. Loading and unloading follow the S-shaped oxygen–haemoglobin dissociation curve: haemoglobin saturates fully in the lungs and readily releases oxygen in the tissues. Unloading is increased where tissues are active — by low pH, high CO2, and high temperature (the Bohr effect) — delivering more oxygen where it is most needed." },
      { h: "Transport of carbon dioxide", p: "Carbon dioxide is carried in three forms: mostly (about 70%) as bicarbonate ions formed in red cells (CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3−, catalysed by carbonic anhydrase), about 20% bound to haemoglobin (carbaminohaemoglobin), and a small amount dissolved in plasma. This link between CO2 and bicarbonate is why the lungs are central to acid-base balance." },
      { h: "Control of breathing", p: "Breathing is controlled automatically by respiratory centres in the medulla and pons, which set the rhythm. The strongest stimulus to breathe is a rise in blood CO2 (and the resulting fall in pH), detected by central chemoreceptors. Peripheral chemoreceptors (carotid and aortic bodies) respond to a large fall in oxygen. Stretch receptors protect against over-inflation. Breathing can also be influenced voluntarily and by emotion, temperature and exercise." },
      { h: "The lung, acid-base balance and the ABG", p: "By adjusting how much CO2 (an acid) is exhaled, the lungs regulate blood pH within minutes: faster, deeper breathing lowers CO2 and raises pH; slower breathing retains CO2 and lowers pH. A normal arterial blood gas shows PaO2 about 80–100 mmHg, oxygen saturation about 95–100%, PaCO2 about 35–45 mmHg, pH 7.35–7.45 and bicarbonate about 22–26 mmol/L. Reading these together shows oxygenation and whether an acid-base disturbance is respiratory or metabolic." },
      { h: "Nursing application", list: [
        "Assess respiratory rate, depth, effort and oxygen saturation; recognise hypoxia and respiratory distress.",
        "Understand why patients with chronic lung disease may rely on hypoxic drive when giving oxygen.",
        "Position patients to improve ventilation and encourage deep breathing to prevent atelectasis and chest infection.",
        "Interpret ABG and pulse oximetry to guide and evaluate oxygen therapy."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the mechanics of inspiration and expiration, including the roles of the diaphragm, pressure changes and surfactant.",
      "Explain external and internal respiration and the factors that make gas exchange efficient.",
      "Describe how oxygen and carbon dioxide are transported in the blood.",
      "Explain the nervous and chemical control of breathing.",
      "Describe the lung's role in acid-base balance and state the normal values of an arterial blood gas."
    ],
    assessment: [
      { type: "mcq", q: "During quiet inspiration, the diaphragm:", options: ["Relaxes and moves up", "Contracts and moves down, enlarging the thorax", "Plays no part", "Closes the airway"], answer: 1, rationale: "Diaphragm contraction increases thoracic volume, lowering pressure so air flows in." },
      { type: "mcq", q: "The substance that reduces alveolar surface tension and prevents collapse is:", options: ["Mucus", "Surfactant", "Bile", "Haemoglobin"], answer: 1, rationale: "Surfactant lowers surface tension; its deficiency causes newborn respiratory distress." },
      { type: "mcq", q: "Most oxygen in the blood is transported:", options: ["Dissolved in plasma", "Bound to haemoglobin as oxyhaemoglobin", "As bicarbonate", "Bound to albumin"], answer: 1, rationale: "About 98% of oxygen is carried on haemoglobin." },
      { type: "mcq", q: "The greatest proportion of carbon dioxide is carried in the blood as:", options: ["Dissolved gas", "Carbaminohaemoglobin", "Bicarbonate ions", "Carbon monoxide"], answer: 2, rationale: "About 70% of CO2 is transported as bicarbonate formed in red cells." },
      { type: "mcq", q: "Gases cross the respiratory membrane by:", options: ["Active transport", "Diffusion down partial-pressure gradients", "Osmosis", "Filtration"], answer: 1, rationale: "O2 and CO2 diffuse from high to low partial pressure." },
      { type: "mcq", q: "The strongest normal stimulus that drives breathing is a rise in blood:", options: ["Oxygen", "Carbon dioxide", "Glucose", "Sodium"], answer: 1, rationale: "A rise in CO2 (and fall in pH) sensed by central chemoreceptors is the main drive to breathe." },
      { type: "mcq", q: "The volume of air moved in a normal quiet breath is the:", options: ["Vital capacity", "Residual volume", "Tidal volume", "Total lung capacity"], answer: 2, rationale: "Tidal volume (about 500 mL) is the air of one normal breath." },
      { type: "mcq", q: "The main respiratory control centres are located in the:", options: ["Cerebellum", "Medulla and pons", "Spinal cord only", "Hypothalamus"], answer: 1, rationale: "The medullary and pontine centres set the automatic breathing rhythm." },
      { type: "mcq", q: "Increased unloading of oxygen from haemoglobin in active tissues (by high CO2, low pH, heat) is called the:", options: ["Bohr effect", "Frank–Starling law", "Boyle's law", "Bernoulli effect"], answer: 0, rationale: "The Bohr effect enhances oxygen release where tissues are metabolically active." },
      { type: "mcq", q: "The lungs help regulate blood pH within minutes by adjusting the exhalation of:", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Water only"], answer: 1, rationale: "Changing CO2 (an acid) exhalation shifts pH rapidly." },
      { type: "fill", q: "The maximum volume of air a person can exhale after a maximal inspiration is the ____ capacity.", accept: ["vital"], rationale: "Vital capacity is the largest breath a person can move." },
      { type: "fill", q: "The enzyme in red cells that speeds the conversion of CO2 and water to carbonic acid is carbonic ____.", accept: ["anhydrase"], rationale: "Carbonic anhydrase catalyses CO2 + H2O to H2CO3, aiding CO2 transport." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "phy-09-digestive-physiology",
    unit: "Unit 3 · Respiration, Digestion & Excretion",
    title: "Digestive Physiology: Digestion, Absorption & Metabolism",
    readMinutes: 18,
    summary: "Functions of the digestive system; mechanical and chemical digestion along the tract; the roles of saliva, gastric, pancreatic, intestinal and biliary secretions; absorption of nutrients; the functions of the liver; and an overview of metabolism — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the digestive system", p: "The digestive system breaks food down into small molecules the body can absorb and use for energy, growth and repair. Its processes are: ingestion (taking in food), mechanical and chemical digestion, secretion of enzymes and juices, absorption of nutrients into the blood and lymph, and elimination of undigested waste. It also has endocrine and immune functions and hosts helpful gut bacteria." },
      { h: "Mechanical digestion and motility", p: "Mechanical digestion physically breaks food up and mixes it with secretions.", list: [
        "Mastication (chewing) and the tongue form the food into a bolus.",
        "Deglutition (swallowing) moves the bolus to the stomach.",
        "Peristalsis — waves of smooth-muscle contraction that propel contents along the tract.",
        "Segmentation — mixing movements in the small intestine that increase contact with enzymes.",
        "Gastric churning mixes food with gastric juice to form chyme."
      ] },
      { h: "Chemical digestion — mouth and stomach", p: "Chemical digestion uses enzymes to split large molecules. In the mouth, salivary amylase begins starch digestion and saliva lubricates food. In the stomach, gastric glands secrete hydrochloric acid (which kills microbes and activates enzymes), pepsinogen (activated to pepsin to begin protein digestion), and intrinsic factor (needed to absorb vitamin B12). Mucus protects the stomach lining from its own acid. Gastric emptying is regulated so the small intestine is not overwhelmed." },
      { h: "Chemical digestion — small intestine", p: "Most digestion is completed in the small intestine, aided by two accessory glands.", list: [
        "Pancreatic juice — contains amylase (starch), lipase (fats), and proteases (trypsin, chymotrypsin) plus bicarbonate to neutralise gastric acid.",
        "Bile — from the liver, stored in the gallbladder; bile salts emulsify fats into small droplets so lipase can act (they do not contain enzymes).",
        "Intestinal enzymes (brush border) — complete digestion of sugars and peptides.",
        "Hormones (e.g. gastrin, secretin, cholecystokinin) coordinate the timing and amount of secretions."
      ] },
      { h: "Absorption of nutrients", p: "Absorption occurs mainly in the small intestine, whose huge surface area (folds, villi and microvilli) is ideal for uptake. Digested carbohydrates (as glucose) and proteins (as amino acids) are absorbed into blood capillaries, largely by secondary active transport with sodium. Fats (as fatty acids and glycerol) are absorbed into lacteals (lymph) as chylomicrons. Water, electrolytes and vitamins are also absorbed; the large intestine absorbs most of the remaining water and electrolytes, forming faeces.", figure: {
        caption: "Digestion converts large nutrients to absorbable units; the small intestine absorbs them into blood or lymph.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Digestion and absorption of the three main nutrients."><rect x="20" y="30" width="160" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="100" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Carbohydrate &#8594; glucose</text><rect x="20" y="80" width="160" height="40" rx="8" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="100" y="105" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Protein &#8594; amino acids</text><rect x="20" y="130" width="160" height="40" rx="8" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="100" y="155" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Fat &#8594; fatty acids</text><rect x="330" y="55" width="200" height="42" rx="9" fill="#22C55E"/><text x="430" y="81" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">absorbed to BLOOD</text><rect x="330" y="120" width="200" height="42" rx="9" fill="#0F4C3A"/><text x="430" y="146" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">fat &#8594; LYMPH (lacteals)</text><line x1="180" y1="50" x2="328" y2="70" stroke="#15803D" stroke-width="2"/><line x1="180" y1="100" x2="328" y2="80" stroke="#0F4C3A" stroke-width="2"/><line x1="180" y1="150" x2="328" y2="140" stroke="#7C2D12" stroke-width="2"/></svg>'
      } },
      { h: "Functions of the liver", p: "The liver is the body's chief metabolic organ.", list: [
        "Carbohydrate metabolism — stores glucose as glycogen and releases it to keep blood glucose stable.",
        "Protein metabolism — makes plasma proteins (albumin, clotting factors) and converts toxic ammonia to urea.",
        "Fat metabolism and production of bile for fat digestion.",
        "Detoxification — of drugs, alcohol and hormones.",
        "Storage — of vitamins (A, D, B12) and iron.",
        "Warmth production and, in the fetus, blood cell formation."
      ] },
      { h: "Overview of metabolism", p: "Metabolism is the sum of all chemical reactions in the body. Catabolism breaks molecules down to release energy (e.g. glucose oxidation yielding ATP); anabolism uses energy to build molecules (e.g. protein synthesis). Cellular respiration converts glucose, fats and proteins into ATP, mostly in the mitochondria. The basal metabolic rate is the energy used at rest and is influenced by thyroid hormones. Balanced metabolism keeps blood glucose and energy supply stable." },
      { h: "Regulation of blood glucose", p: "Blood glucose is a key homeostatic variable. After a meal, insulin (from the pancreatic islets) lowers glucose by promoting its uptake and storage as glycogen and fat. Between meals, glucagon raises glucose by breaking glycogen down and forming new glucose. This balance keeps a steady supply for the brain, and its failure underlies diabetes mellitus — an essential link between digestive physiology and clinical nursing." },
      { h: "Nursing application", list: [
        "Understand why nutritional status, appetite and bowel function are important nursing observations.",
        "Recognise how liver disease affects clotting, drug handling, and fluid balance (low albumin causing oedema/ascites).",
        "Relate diabetes care to the insulin–glucagon balance and the role of diet.",
        "Apply knowledge of absorption and motility to the management of vomiting, diarrhoea, constipation and malabsorption."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe mechanical and chemical digestion along the gastrointestinal tract.",
      "Explain the roles of gastric juice, pancreatic juice and bile in digestion.",
      "Describe how the products of digestion are absorbed and where absorption occurs.",
      "List and explain the major metabolic functions of the liver.",
      "Explain the hormonal regulation of blood glucose and its relevance to nursing care of diabetes."
    ],
    assessment: [
      { type: "mcq", q: "The enzyme in saliva that begins the digestion of starch is:", options: ["Salivary amylase", "Pepsin", "Lipase", "Trypsin"], answer: 0, rationale: "Salivary amylase starts carbohydrate (starch) digestion in the mouth." },
      { type: "mcq", q: "Hydrochloric acid in the stomach mainly serves to:", options: ["Digest fat directly", "Emulsify fats", "Kill microbes and activate pepsin", "Absorb glucose"], answer: 2, rationale: "Gastric acid provides a low pH that kills microbes and converts pepsinogen to active pepsin." },
      { type: "mcq", q: "Bile aids fat digestion by:", options: ["Splitting fat with enzymes", "Emulsifying fat into small droplets", "Absorbing glucose", "Neutralising saliva"], answer: 1, rationale: "Bile salts emulsify fat, increasing the surface area for lipase; bile contains no digestive enzymes." },
      { type: "mcq", q: "Wave-like smooth-muscle contractions that propel food along the tract are called:", options: ["Segmentation", "Mastication", "Peristalsis", "Deglutition"], answer: 2, rationale: "Peristalsis is the propulsive movement along the gastrointestinal tract." },
      { type: "mcq", q: "Most digested nutrients are absorbed in the:", options: ["Stomach", "Large intestine", "Small intestine", "Oesophagus"], answer: 2, rationale: "The small intestine, with villi and microvilli, is the main site of absorption." },
      { type: "mcq", q: "Digested fats are absorbed mainly into:", options: ["Lacteals (lymph)", "Blood capillaries", "The stomach wall", "The liver directly"], answer: 0, rationale: "Fats enter lacteals as chylomicrons and travel in the lymph." },
      { type: "mcq", q: "The gastric factor needed for the later absorption of vitamin B12 is:", options: ["Pepsin", "Bile salt", "Gastrin", "Intrinsic factor"], answer: 3, rationale: "Intrinsic factor from the stomach is required to absorb vitamin B12 in the ileum." },
      { type: "mcq", q: "Which is NOT a function of the liver?", options: ["Storing glucose as glycogen", "Producing bile", "Producing insulin", "Converting ammonia to urea"], answer: 2, rationale: "Insulin is made by the pancreatic islets, not the liver." },
      { type: "mcq", q: "The hormone that lowers blood glucose after a meal is:", options: ["Glucagon", "Insulin", "Adrenaline", "Cortisol"], answer: 1, rationale: "Insulin promotes glucose uptake and storage, lowering blood glucose." },
      { type: "mcq", q: "The main function of the large intestine is to:", options: ["Absorb most remaining water and electrolytes", "Digest proteins", "Produce bile", "Secrete insulin"], answer: 0, rationale: "The large intestine absorbs water and electrolytes, forming faeces." },
      { type: "fill", q: "Metabolic reactions that build up larger molecules from smaller ones are called ____.", accept: ["anabolism", "anabolic"], rationale: "Anabolism builds molecules and uses energy; catabolism breaks them down." },
      { type: "fill", q: "The pancreatic enzyme that digests fats is ____.", accept: ["lipase", "pancreatic lipase"], rationale: "Lipase splits emulsified fats into fatty acids and glycerol." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "phy-10-renal-physiology",
    unit: "Unit 3 · Respiration, Digestion & Excretion",
    title: "Renal Physiology: Urine Formation & Regulation",
    readMinutes: 18,
    summary: "Functions of the kidney; the nephron as the functional unit; the three processes of urine formation — glomerular filtration, tubular reabsorption and secretion; the counter-current mechanism and urine concentration; hormonal regulation of water, sodium and blood pressure; micturition; and the kidney's endocrine roles — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the kidney", p: "The kidneys do far more than make urine. They regulate the volume and composition of body fluids, excrete metabolic wastes (urea, creatinine, uric acid) and drugs, maintain electrolyte and acid-base balance, help control blood pressure, and act as endocrine organs (producing erythropoietin and activating vitamin D). By adjusting what is kept and what is lost, the kidney is central to homeostasis of the internal environment." },
      { h: "The nephron — the functional unit", p: "Each kidney has about a million nephrons. A nephron has two parts: the renal corpuscle (glomerulus, a tuft of capillaries, within Bowman's capsule) where filtration occurs, and the renal tubule (proximal convoluted tubule, loop of Henle, distal convoluted tubule, joining a collecting duct) where the filtrate is processed. This arrangement lets the kidney first filter a large volume, then reclaim what the body needs." },
      { h: "Three processes of urine formation", p: "Urine is formed by three sequential processes.", list: [
        "Glomerular filtration — blood pressure forces water and small solutes from the glomerulus into Bowman's capsule, forming filtrate; large proteins and cells stay in the blood.",
        "Tubular reabsorption — most of the filtrate (water, glucose, amino acids, ions) is reabsorbed from the tubule back into the blood, so useful substances are conserved.",
        "Tubular secretion — additional wastes, drugs and excess ions (e.g. H+, K+) are added from blood to the tubule for excretion."
      ], figure: {
        caption: "Urine formation: filtration at the glomerulus, then reabsorption of useful substances and secretion of wastes along the tubule.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three processes of urine formation."><defs><marker id="phArr10" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="70" width="150" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="90" y="94" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">1. FILTRATION</text><text x="90" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">at glomerulus</text><rect x="205" y="70" width="150" height="60" rx="10" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="94" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">2. REABSORPTION</text><text x="280" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">useful back to blood</text><rect x="395" y="70" width="150" height="60" rx="10" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="470" y="94" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">3. SECRETION</text><text x="470" y="113" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">wastes into tubule</text><line x1="165" y1="100" x2="201" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr10)"/><line x1="355" y1="100" x2="391" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr10)"/><text x="280" y="30" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Filtrate &#8594; final urine</text></svg>'
      } },
      { h: "Glomerular filtration in detail", p: "Filtration depends on pressure. The high glomerular hydrostatic (blood) pressure pushes fluid out; it is opposed by the blood oncotic pressure and the capsular pressure. The net filtration pressure drives the glomerular filtration rate (GFR) — normally about 120 mL/min, or around 180 litres of filtrate per day, of which over 99% is reabsorbed so only about 1–1.5 L of urine is passed. GFR is kept steady by autoregulation and is a key clinical measure of kidney function; a fall in GFR signals kidney impairment." },
      { h: "Tubular reabsorption and secretion in detail", p: "The proximal tubule reabsorbs the bulk of filtrate — nearly all glucose and amino acids (by secondary active transport with sodium), most sodium, and water. If blood glucose is very high (as in diabetes), the reabsorption limit is exceeded and glucose 'spills' into urine (glycosuria). The distal tubule and collecting duct perform fine, hormonally-controlled adjustment of sodium, potassium, water and H+, allowing precise regulation of body fluids and pH." },
      { h: "Concentrating the urine — the counter-current mechanism", p: "The loop of Henle sets up a concentration gradient in the kidney medulla (the counter-current mechanism), making the interstitium increasingly salty toward the tip. When water must be conserved, this gradient draws water out of the collecting duct (under the control of ADH), producing small volumes of concentrated urine. When water is plentiful, ADH is low and dilute urine is passed. This is how the kidney adjusts water balance so precisely." },
      { h: "Hormonal regulation by the kidney", list: [
        "Antidiuretic hormone (ADH) — increases water reabsorption in the collecting duct, concentrating urine when the body needs water.",
        "Aldosterone — increases sodium reabsorption (and potassium excretion) in the distal nephron, so water follows and blood volume rises.",
        "Renin–angiotensin system — the kidney releases renin when blood pressure/flow falls, leading to angiotensin II and aldosterone, raising blood pressure.",
        "Atrial natriuretic peptide — promotes sodium and water loss to lower blood volume when the heart is over-filled."
      ] },
      { h: "Micturition (passing urine)", p: "Urine drains from the collecting ducts through the ureters (by peristalsis) into the bladder, which stores it. As the bladder fills, stretch receptors trigger the micturition reflex (a spinal reflex): the bladder wall (detrusor) contracts and the internal sphincter relaxes. In the toilet-trained person, the external sphincter is under voluntary control, allowing urination to be delayed or initiated. Damage to these nerves or the spinal cord causes incontinence or retention." },
      { h: "The kidney as an endocrine organ", p: "Beyond fluid regulation, the kidney secretes erythropoietin, which stimulates red cell production in the bone marrow — so kidney failure often causes anaemia. It also activates vitamin D (to its active form) for calcium absorption and bone health. These roles explain some of the wide-ranging effects of chronic kidney disease that nurses must monitor." },
      { h: "Nursing application", list: [
        "Monitor and record urine output; low output (oliguria) can be an early sign of shock or kidney injury.",
        "Understand fluid and electrolyte balance to care for patients on IV fluids, diuretics or dialysis.",
        "Recognise that kidney disease can cause anaemia, bone disease, hypertension and acid-base disturbance.",
        "Apply knowledge of micturition to the management of catheters, retention and incontinence."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the structure of the nephron and relate its parts to the three processes of urine formation.",
      "Explain glomerular filtration, the factors affecting it, and the significance of the glomerular filtration rate.",
      "Describe tubular reabsorption and secretion, and explain how the counter-current mechanism concentrates urine.",
      "Explain the hormonal regulation of water, sodium and blood pressure by the kidney.",
      "Describe the micturition reflex and the endocrine functions of the kidney."
    ],
    assessment: [
      { type: "mcq", q: "The functional unit of the kidney is the:", options: ["Nephron", "Alveolus", "Sarcomere", "Villus"], answer: 0, rationale: "The nephron is the microscopic filtering-and-processing unit of the kidney." },
      { type: "mcq", q: "Filtration of blood in the kidney takes place at the:", options: ["Loop of Henle", "Collecting duct", "Glomerulus", "Ureter"], answer: 2, rationale: "The glomerulus filters plasma into Bowman's capsule under blood pressure." },
      { type: "mcq", q: "The process by which useful substances are returned from the tubule to the blood is:", options: ["Filtration", "Reabsorption", "Secretion", "Micturition"], answer: 1, rationale: "Tubular reabsorption conserves water, glucose, amino acids and ions." },
      { type: "mcq", q: "A normal glomerular filtration rate is approximately:", options: ["12 mL/min", "1200 mL/min", "120 mL/min", "12 L/min"], answer: 2, rationale: "GFR is about 120 mL/min (roughly 180 L of filtrate per day)." },
      { type: "mcq", q: "Glucose appears in the urine (glycosuria) when:", options: ["The kidney stops filtering", "ADH rises", "The bladder is full", "Blood glucose exceeds the tubular reabsorption limit"], answer: 3, rationale: "When filtered glucose exceeds the reabsorptive capacity, the excess is excreted." },
      { type: "mcq", q: "Antidiuretic hormone (ADH) concentrates urine by increasing reabsorption of:", options: ["Water", "Sodium", "Glucose", "Protein"], answer: 0, rationale: "ADH makes the collecting duct more permeable to water, conserving it." },
      { type: "mcq", q: "Aldosterone acts on the distal nephron to increase reabsorption of:", options: ["Potassium", "Sodium", "Glucose", "Urea"], answer: 1, rationale: "Aldosterone promotes sodium reabsorption (and potassium loss), raising blood volume." },
      { type: "mcq", q: "The kidney hormone that stimulates red blood cell production is:", options: ["Insulin", "Aldosterone", "Renin", "Erythropoietin"], answer: 3, rationale: "Erythropoietin from the kidney drives erythropoiesis; its lack causes renal anaemia." },
      { type: "mcq", q: "The gradient that allows the kidney to produce concentrated urine is set up by the:", options: ["Glomerulus", "Bladder", "Loop of Henle (counter-current mechanism)", "Ureter"], answer: 2, rationale: "The loop of Henle creates the medullary osmotic gradient used to concentrate urine." },
      { type: "mcq", q: "During the micturition reflex, the bladder empties when the detrusor muscle:", options: ["Relaxes and the sphincter contracts", "Contracts and the internal sphincter relaxes", "Filters blood", "Secretes renin"], answer: 1, rationale: "Detrusor contraction with internal sphincter relaxation expels urine." },
      { type: "fill", q: "The rate at which the kidneys filter plasma is called the glomerular filtration ____.", accept: ["rate", "gfr"], rationale: "GFR (about 120 mL/min) is a key index of kidney function." },
      { type: "fill", q: "Abnormally low urine output is termed ____.", accept: ["oliguria"], rationale: "Oliguria can be an early warning of shock or acute kidney injury." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "phy-11-nerve-synapse-reflex",
    unit: "Unit 4 · Neural, Endocrine & Sensory Physiology",
    title: "Neurophysiology: Nerve Impulse, Synapse & Reflexes",
    readMinutes: 18,
    summary: "Functions of the nervous system; the neuron and the resting potential; generation and conduction of the nerve impulse (action potential); synaptic transmission and neurotransmitters; the reflex arc; and an overview of the autonomic nervous system — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions and organisation of the nervous system", p: "The nervous system is the body's rapid control and communication network. It has three basic functions: sensory input (detecting changes inside and outside the body), integration (processing and deciding), and motor output (responding through muscles and glands). Structurally it is divided into the central nervous system (brain and spinal cord) and the peripheral nervous system (nerves), with the peripheral part further divided into somatic (voluntary) and autonomic (involuntary) divisions." },
      { h: "The neuron and neuroglia", p: "The neuron is the functional unit of the nervous system, specialised for excitability and conduction. It has dendrites (receive signals), a cell body (contains the nucleus), and an axon (conducts impulses away). Many axons are wrapped in a myelin sheath, which speeds conduction. Neuroglia (supporting cells) nourish, insulate and protect neurons. Neurons communicate by electrical impulses along their membranes and by chemical signals at synapses." },
      { h: "The resting membrane potential", p: "At rest the neuron membrane is polarised — about −70 mV inside relative to outside — because of the unequal distribution of ions (high K+ inside, high Na+ outside) maintained by the sodium–potassium pump and the membrane's selective permeability. This stored electrical energy is 'ready' to be released as a nerve impulse when the neuron is stimulated." },
      { h: "The action potential (nerve impulse)", p: "A nerve impulse is an action potential — a brief, self-propagating reversal of the membrane potential.", list: [
        "A stimulus that reaches threshold opens voltage-gated sodium channels; Na+ rushes in and the inside becomes positive (depolarisation).",
        "Sodium channels close and potassium channels open; K+ leaves and the membrane returns to negative (repolarisation).",
        "The pump restores the original ion distribution (recovery).",
        "It is all-or-none — it either fires fully or not at all — and self-propagates along the axon.",
        "A refractory period follows, during which another impulse cannot start, ensuring one-way travel and limiting frequency."
      ], figure: {
        caption: "The action potential: threshold triggers Na+ influx (depolarisation), then K+ efflux (repolarisation), returning to the resting potential.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Action potential curve."><line x1="60" y1="30" x2="60" y2="170" stroke="#0F4C3A" stroke-width="1.5"/><line x1="60" y1="150" x2="540" y2="150" stroke="#0F4C3A" stroke-width="1.5"/><text x="30" y="55" font-family="sans-serif" font-size="10" fill="#0F4C3A">+30</text><text x="20" y="153" font-family="sans-serif" font-size="10" fill="#0F4C3A">-70 mV</text><polyline points="70,140 150,140 200,50 250,150 290,165 340,140 540,140" fill="none" stroke="#15803D" stroke-width="3"/><line x1="60" y1="128" x2="540" y2="128" stroke="#7C2D12" stroke-width="1" stroke-dasharray="4 4"/><text x="145" y="122" font-family="sans-serif" font-size="9" fill="#7C2D12">threshold</text><text x="205" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">depolarise (Na+ in)</text><text x="300" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">repolarise (K+ out)</text></svg>'
      } },
      { h: "Conduction and myelin", p: "In an unmyelinated fibre the impulse travels as a continuous wave, relatively slowly. In a myelinated fibre the impulse jumps from one node of Ranvier to the next (saltatory conduction), which is much faster and more energy-efficient. This is why loss of myelin (as in multiple sclerosis) slows or blocks conduction and impairs function. Larger-diameter and myelinated fibres conduct fastest." },
      { h: "The synapse and neurotransmitters", p: "A synapse is the junction where a neuron communicates with the next neuron (or a muscle/gland). Transmission is usually chemical: the arriving impulse triggers calcium entry, which releases neurotransmitter from vesicles into the synaptic cleft; the transmitter crosses and binds receptors on the next cell, producing an excitatory or inhibitory effect. The transmitter is then removed (by reuptake or enzymes) to reset the synapse. Common transmitters include acetylcholine, noradrenaline, dopamine, serotonin and GABA. Many drugs (and poisons) act at synapses." },
      { h: "The reflex arc", p: "A reflex is a rapid, automatic, protective response to a stimulus. It travels over a reflex arc with five parts: receptor (detects stimulus) → sensory (afferent) neuron → integrating centre (in the spinal cord or brain) → motor (efferent) neuron → effector (muscle or gland). Because a simple spinal reflex bypasses the brain, the response is very fast (for example, withdrawing the hand from a hot object). Reflexes such as the knee-jerk and pupillary reflex are tested clinically to assess the nervous system." },
      { h: "Overview of the autonomic nervous system", p: "The autonomic nervous system controls involuntary functions (heart rate, blood pressure, digestion, glands). It has two divisions with opposing effects: the sympathetic ('fight or flight') division prepares the body for action (faster heart, dilated pupils, diverted blood to muscles) using mainly noradrenaline; the parasympathetic ('rest and digest') division conserves energy (slower heart, active digestion) using acetylcholine. Balance between them maintains homeostasis of the internal organs." },
      { h: "Nursing application", list: [
        "Neurological assessment (conscious level, pupils, reflexes, movement) relies on understanding nerve function.",
        "Knowledge of synaptic transmission explains how many drugs work (analgesics, anti-epileptics, anti-Parkinson agents).",
        "Understanding autonomic control explains vital-sign changes in stress, pain and shock.",
        "Recognise how demyelinating disease and nerve injury impair sensation and movement."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the structure of a neuron and explain how the resting membrane potential is maintained.",
      "Describe the generation and conduction of the action potential, including the role of myelin.",
      "Explain synaptic transmission and the role of neurotransmitters.",
      "Draw and describe the reflex arc, and explain the physiological value of reflexes.",
      "Compare the sympathetic and parasympathetic divisions of the autonomic nervous system."
    ],
    assessment: [
      { type: "mcq", q: "The functional unit of the nervous system is the:", options: ["Neuroglia", "Neuron", "Nephron", "Synapse"], answer: 1, rationale: "The neuron is the excitable, conducting functional unit of nervous tissue." },
      { type: "mcq", q: "During depolarisation of the nerve impulse, which ion rushes into the neuron?", options: ["Sodium", "Potassium", "Calcium", "Chloride"], answer: 0, rationale: "Sodium influx makes the inside positive, producing depolarisation." },
      { type: "mcq", q: "The nerve impulse is described as 'all-or-none', which means it:", options: ["Varies in size with the stimulus", "Always travels backward", "Either fires fully or not at all", "Needs no threshold"], answer: 2, rationale: "Once threshold is reached the action potential fires completely; below threshold it does not fire." },
      { type: "mcq", q: "Rapid, jumping conduction along a myelinated nerve fibre is called:", options: ["Continuous conduction", "Reabsorption", "Diffusion", "Saltatory conduction"], answer: 3, rationale: "In saltatory conduction the impulse leaps between nodes of Ranvier, speeding transmission." },
      { type: "mcq", q: "Chemical messengers released at a synapse are called:", options: ["Hormones", "Neurotransmitters", "Enzymes", "Antibodies"], answer: 1, rationale: "Neurotransmitters cross the synaptic cleft to signal the next cell." },
      { type: "mcq", q: "The correct order of components in a reflex arc is:", options: ["Receptor → sensory neuron → integrating centre → motor neuron → effector", "Effector → motor neuron → centre → sensory neuron → receptor", "Receptor → motor neuron → sensory neuron → effector", "Sensory neuron → receptor → effector → centre"], answer: 0, rationale: "The reflex arc runs receptor → afferent → centre → efferent → effector." },
      { type: "mcq", q: "The 'fight or flight' responses (raised heart rate, dilated pupils) are produced by the:", options: ["Parasympathetic division", "Somatic system", "Sympathetic division", "Reflex arc only"], answer: 2, rationale: "The sympathetic division prepares the body for action." },
      { type: "mcq", q: "The resting membrane potential of a neuron is maintained mainly by the:", options: ["Sodium–potassium pump", "Glomerulus", "Sarcomere", "Bile"], answer: 0, rationale: "The Na+/K+ pump keeps the ion gradients that create the resting potential." },
      { type: "mcq", q: "Loss of the myelin sheath, as in multiple sclerosis, will:", options: ["Speed up conduction", "Have no effect", "Increase reflex speed", "Slow or block nerve conduction"], answer: 3, rationale: "Demyelination impairs saltatory conduction, slowing or blocking impulses." },
      { type: "mcq", q: "The main neurotransmitter of the parasympathetic ('rest and digest') division is:", options: ["Noradrenaline", "Acetylcholine", "Dopamine", "Insulin"], answer: 1, rationale: "The parasympathetic division uses acetylcholine at its target organs." },
      { type: "fill", q: "The junction between two neurons where chemical transmission occurs is called a ____.", accept: ["synapse"], rationale: "At the synapse, neurotransmitter carries the signal across the cleft." },
      { type: "fill", q: "The brief reversal of membrane charge that constitutes the nerve impulse is called the ____ potential.", accept: ["action"], rationale: "The action potential is the propagated nerve impulse." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "phy-12-endocrine-physiology",
    unit: "Unit 4 · Neural, Endocrine & Sensory Physiology",
    title: "Endocrine Physiology: Hormone Action & Feedback",
    readMinutes: 18,
    summary: "The endocrine system as a chemical control system; hormone types and mechanisms of action; the hypothalamic–pituitary axis; the actions of the major endocrine glands and their hormones; control by negative feedback; and comparison with the nervous system — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The endocrine system", p: "The endocrine system is the body's slower, longer-acting chemical control system. Ductless (endocrine) glands secrete hormones directly into the blood, which carries them to distant target cells that bear specific receptors. Compared with the fast, brief action of nerves, hormonal effects are generally slower in onset but longer-lasting and more widespread. Together the nervous and endocrine systems coordinate almost all body functions and maintain homeostasis." },
      { h: "Hormones and their mechanisms of action", p: "Hormones act only on cells with the correct receptors ('lock and key'), which is why one hormone affects some tissues and not others.", list: [
        "Water-soluble hormones (peptides, catecholamines) cannot cross the cell membrane; they bind surface receptors and act through second messengers (e.g. cyclic AMP), giving rapid effects.",
        "Lipid-soluble hormones (steroids, thyroid hormone) cross the membrane and act on receptors inside the cell to alter gene expression and protein synthesis, giving slower, longer effects.",
        "Hormone levels are controlled so that too little or too much both cause disease (hypo- and hyper-secretion)."
      ] },
      { h: "The hypothalamic–pituitary axis", p: "The hypothalamus links the nervous and endocrine systems and controls the pituitary gland ('master gland'). The posterior pituitary stores and releases hormones made in the hypothalamus (ADH and oxytocin). The anterior pituitary is controlled by hypothalamic releasing/inhibiting hormones and secretes tropic hormones that direct other glands — for example thyroid-stimulating hormone (TSH), adrenocorticotropic hormone (ACTH), the gonadotropins (FSH and LH), growth hormone and prolactin. This axis is the central control of much of the endocrine system." },
      { h: "Major glands and their hormones", list: [
        "Thyroid — thyroxine (T4) and T3 set the basal metabolic rate; calcitonin lowers blood calcium.",
        "Parathyroid — parathyroid hormone raises blood calcium (the main calcium regulator).",
        "Adrenal cortex — cortisol (stress, glucose, anti-inflammatory), aldosterone (sodium/water and blood pressure), and sex steroids.",
        "Adrenal medulla — adrenaline and noradrenaline for 'fight or flight'.",
        "Pancreatic islets — insulin lowers and glucagon raises blood glucose.",
        "Ovaries and testes — oestrogen/progesterone and testosterone for reproduction and secondary sexual characteristics.",
        "Pineal gland — melatonin, regulating sleep–wake rhythm."
      ] },
      { h: "Control by negative feedback", p: "Most hormones are regulated by negative feedback, which keeps their levels within limits. For example, when blood thyroid hormone is high, it inhibits the hypothalamus and pituitary, reducing TSH and thus thyroid output; when it is low, TSH rises to stimulate the thyroid. This self-correcting loop stabilises hormone levels and, in turn, the body functions they control. A few processes use positive feedback (e.g. oxytocin in labour).", figure: {
        caption: "Negative feedback in an endocrine axis: a rise in the final hormone inhibits the hypothalamus and pituitary, reducing further stimulation.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Endocrine negative feedback axis."><defs><marker id="phArr12" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="200" y="20" width="160" height="40" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Hypothalamus</text><rect x="200" y="80" width="160" height="40" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="105" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Pituitary (tropic hormone)</text><rect x="200" y="140" width="160" height="40" rx="9" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="280" y="165" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Target gland &#8594; hormone</text><line x1="280" y1="60" x2="280" y2="78" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr12)"/><line x1="280" y1="120" x2="280" y2="138" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr12)"/><path d="M360 160 L470 160 L470 40 L362 40" fill="none" stroke="#22C55E" stroke-width="2.5" marker-end="url(#phArr12)"/><text x="500" y="103" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D" transform="rotate(90 500 103)">negative feedback</text></svg>'
      } },
      { h: "Endocrine response to stress", p: "Stress activates two systems: rapidly, the sympathetic nerves and adrenal medulla release adrenaline for immediate 'fight or flight'; more slowly, the hypothalamus–pituitary–adrenal axis raises cortisol, which mobilises glucose, supports blood pressure and dampens inflammation. This coordinated response helps the body cope, but prolonged stress and high cortisol can be harmful — relevant to the care of acutely and chronically ill patients." },
      { h: "Nervous versus endocrine control", p: "Both systems maintain homeostasis but differ: the nervous system uses electrical impulses and neurotransmitters for rapid, brief, precisely targeted responses; the endocrine system uses blood-borne hormones for slower, longer, more widespread responses. They overlap and cooperate — the hypothalamus is the key link — so that control can be both fast and sustained." },
      { h: "Nursing application", list: [
        "Understand common endocrine disorders (diabetes, thyroid disease, adrenal insufficiency) and their signs.",
        "Recognise why steroid therapy must not be stopped abruptly (feedback suppression of the adrenal axis).",
        "Relate hormone actions to observations — for example calcium and PTH to tetany, cortisol to healing and infection risk.",
        "Support patients on hormone replacement (thyroxine, insulin) and teach adherence and monitoring."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Explain how hormones act on target cells, distinguishing water-soluble from lipid-soluble hormones.",
      "Describe the hypothalamic–pituitary axis and the main hormones of the anterior and posterior pituitary.",
      "List the major endocrine glands and state one key hormone and function of each.",
      "Explain how negative feedback regulates hormone secretion, using the thyroid axis as an example.",
      "Compare nervous and endocrine control of body functions."
    ],
    assessment: [
      { type: "mcq", q: "Hormones are transported to their target tissues by the:", options: ["Bloodstream", "Nerves", "Lymph only", "Ducts"], answer: 0, rationale: "Endocrine glands are ductless and secrete hormones directly into the blood." },
      { type: "mcq", q: "A hormone affects only certain target cells because those cells have specific:", options: ["Enzymes", "Receptors", "Nuclei", "Mitochondria"], answer: 1, rationale: "Only cells with matching receptors can respond to a given hormone." },
      { type: "mcq", q: "The gland often called the 'master gland' because it controls other endocrine glands is the:", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], answer: 2, rationale: "The anterior pituitary secretes tropic hormones that direct other glands." },
      { type: "mcq", q: "Lipid-soluble (steroid) hormones typically act by:", options: ["Binding surface receptors and using cyclic AMP", "Being destroyed instantly", "Entering the cell and altering gene expression", "Travelling along nerves"], answer: 2, rationale: "Steroids cross the membrane and act on intracellular receptors to change gene expression." },
      { type: "mcq", q: "Most hormone secretion is regulated by:", options: ["Positive feedback", "Negative feedback", "No control", "Digestion"], answer: 1, rationale: "Negative feedback keeps hormone levels within a normal range." },
      { type: "mcq", q: "The hormone that sets the basal metabolic rate is:", options: ["Insulin", "Aldosterone", "Melatonin", "Thyroxine"], answer: 3, rationale: "Thyroid hormone (thyroxine) controls the body's metabolic rate." },
      { type: "mcq", q: "The main regulator that raises blood calcium is:", options: ["Calcitonin", "Parathyroid hormone", "Insulin", "Cortisol"], answer: 1, rationale: "Parathyroid hormone increases blood calcium; calcitonin lowers it." },
      { type: "mcq", q: "The 'stress hormone' from the adrenal cortex that raises blood glucose and reduces inflammation is:", options: ["Adrenaline", "Glucagon", "Cortisol", "Oxytocin"], answer: 2, rationale: "Cortisol mobilises glucose, supports blood pressure and has anti-inflammatory effects." },
      { type: "mcq", q: "Compared with nervous control, endocrine control is generally:", options: ["Faster and briefer", "Purely electrical", "Confined to one cell", "Slower and longer-lasting"], answer: 3, rationale: "Hormonal effects are slower in onset but more prolonged and widespread than nerve signals." },
      { type: "mcq", q: "The posterior pituitary releases:", options: ["TSH and ACTH", "ADH and oxytocin", "Insulin and glucagon", "Cortisol and aldosterone"], answer: 1, rationale: "The posterior pituitary stores and releases hypothalamic ADH and oxytocin." },
      { type: "fill", q: "Ductless glands that secrete hormones directly into the blood are called ____ glands.", accept: ["endocrine"], rationale: "Endocrine glands have no ducts and release hormones into the bloodstream." },
      { type: "fill", q: "The gland that links the nervous and endocrine systems and controls the pituitary is the ____.", accept: ["hypothalamus"], rationale: "The hypothalamus governs the pituitary and integrates neural and endocrine control." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "phy-13-reproductive-menstrual",
    unit: "Unit 4 · Neural, Endocrine & Sensory Physiology",
    title: "Reproductive Physiology & the Menstrual Cycle",
    readMinutes: 18,
    summary: "Functions of the male and female reproductive systems; the hormonal control of reproduction; spermatogenesis and oogenesis; the ovarian and menstrual cycles; fertilisation, pregnancy and lactation; and the physiology of puberty and menopause — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the reproductive systems", p: "The reproductive systems ensure the continuation of the species. Their functions are to produce gametes (sperm and ova), to bring the gametes together (fertilisation), to provide hormones that drive sexual development and reproductive function, and, in the female, to support pregnancy and nourish the newborn through lactation. Reproduction is under close hormonal control by the hypothalamus, pituitary and gonads." },
      { h: "Male reproductive physiology and spermatogenesis", p: "The testes have two roles: producing sperm and secreting testosterone. Spermatogenesis is the formation of sperm in the seminiferous tubules, a continuous process from puberty onward, needing a temperature slightly below body core (hence the scrotum). It is controlled by pituitary FSH (which supports sperm production) and LH (which stimulates testosterone). Testosterone drives sperm maturation, male secondary sexual characteristics, libido and muscle/bone growth. Sperm are stored and matured in the epididymis and mixed with secretions to form semen." },
      { h: "Female reproductive physiology and oogenesis", p: "The ovaries produce ova and secrete oestrogen and progesterone. Unlike sperm production, a female is born with a fixed number of immature ova; from puberty, usually one matures and is released each cycle (ovulation) until menopause. Oestrogen drives female secondary sexual characteristics and prepares the reproductive tract; progesterone prepares and maintains the uterine lining for pregnancy. The cyclical activity of the ovaries and uterus makes up the female reproductive cycle." },
      { h: "Hormonal control of reproduction", p: "Reproduction is governed by the hypothalamic–pituitary–gonadal axis. The hypothalamus releases gonadotropin-releasing hormone, which makes the anterior pituitary secrete FSH and LH. In both sexes these gonadotropins act on the gonads to produce gametes and sex hormones. Sex hormones feed back (mostly negatively) on the hypothalamus and pituitary to regulate their own levels — the same feedback principle seen throughout the endocrine system." },
      { h: "The ovarian and menstrual cycles", p: "The roughly 28-day female cycle has two linked cycles controlled by hormones.", list: [
        "Follicular phase — FSH stimulates a follicle to grow; the follicle secretes rising oestrogen, which begins to rebuild the uterine lining.",
        "Ovulation — a surge of LH (triggered by high oestrogen, a positive-feedback event) releases the ovum, about mid-cycle (day 14).",
        "Luteal phase — the empty follicle becomes the corpus luteum, secreting progesterone (and oestrogen), which thickens and maintains the uterine lining ready for a fertilised ovum.",
        "Menstruation — if fertilisation does not occur, the corpus luteum degenerates, progesterone and oestrogen fall, and the lining is shed as the menstrual flow, beginning a new cycle."
      ], figure: {
        caption: "The menstrual cycle: follicular phase and endometrial repair, ovulation at mid-cycle, luteal phase, then menstruation if no pregnancy.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Phases of the menstrual cycle."><defs><marker id="phArr13" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="75" width="120" height="55" rx="9" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="70" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Menstruation</text><text x="70" y="116" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">days 1-5</text><rect x="150" y="75" width="120" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="210" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Follicular</text><text x="210" y="116" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">FSH, oestrogen</text><rect x="290" y="75" width="110" height="55" rx="9" fill="#22C55E"/><text x="345" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">Ovulation</text><text x="345" y="116" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#DCFCE7">LH surge, ~day 14</text><rect x="420" y="75" width="130" height="55" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="485" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Luteal</text><text x="485" y="116" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">progesterone</text><line x1="130" y1="102" x2="148" y2="102" stroke="#0F4C3A" stroke-width="2" marker-end="url(#phArr13)"/><line x1="270" y1="102" x2="288" y2="102" stroke="#0F4C3A" stroke-width="2" marker-end="url(#phArr13)"/><line x1="400" y1="102" x2="418" y2="102" stroke="#0F4C3A" stroke-width="2" marker-end="url(#phArr13)"/></svg>'
      } },
      { h: "Fertilisation and early pregnancy", p: "Fertilisation is the fusion of a sperm and an ovum, normally in the fallopian tube, restoring the full chromosome number and determining sex. The fertilised ovum (zygote) divides as it travels to the uterus and implants in the prepared lining. The developing placenta secretes human chorionic gonadotropin, which maintains the corpus luteum (and its progesterone) so the pregnancy is sustained and menstruation does not occur — the basis of pregnancy testing. Later the placenta itself produces the hormones of pregnancy." },
      { h: "Lactation", p: "Pregnancy hormones (oestrogen and progesterone) prepare the breasts for milk production. After birth, the hormone prolactin (from the anterior pituitary) stimulates milk production, while oxytocin (from the posterior pituitary) causes the 'let-down' (ejection) of milk in response to suckling — a neuroendocrine reflex and an example of positive feedback. Breast milk provides ideal nutrition and passive immunity to the infant, which nurses actively promote and support." },
      { h: "Puberty and menopause", p: "Puberty is the maturation of the reproductive system driven by rising gonadotropins and sex hormones, producing the secondary sexual characteristics and fertility. Menopause is the natural cessation of ovarian activity and menstruation, as the ovaries stop responding to FSH and LH; falling oestrogen causes symptoms and long-term effects such as bone loss. Understanding these transitions supports appropriate health education and care." },
      { h: "Nursing application", list: [
        "Provide accurate reproductive health education, including menstrual health, contraception and fertility.",
        "Understand the hormonal basis of pregnancy tests, contraception and hormone therapy.",
        "Support antenatal, intrapartum and postnatal care, including the physiology of labour (oxytocin) and lactation.",
        "Recognise and support women through the physical and emotional effects of puberty and menopause."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Describe the hormonal control of the male reproductive system and the process of spermatogenesis.",
      "Explain the events and hormonal control of the ovarian and menstrual cycles.",
      "Describe the process of fertilisation and how early pregnancy is hormonally maintained.",
      "Explain the physiology of lactation, including the roles of prolactin and oxytocin.",
      "Describe the hormonal changes of puberty and menopause and their effects."
    ],
    assessment: [
      { type: "mcq", q: "The male hormone responsible for sperm maturation and secondary sexual characteristics is:", options: ["Testosterone", "Oestrogen", "Progesterone", "Prolactin"], answer: 0, rationale: "Testosterone from the testes drives male characteristics and supports spermatogenesis." },
      { type: "mcq", q: "Ovulation is triggered by a mid-cycle surge of:", options: ["FSH", "Progesterone", "Luteinising hormone (LH)", "Prolactin"], answer: 2, rationale: "A surge of LH (driven by high oestrogen) triggers release of the ovum." },
      { type: "mcq", q: "After ovulation, the structure that secretes progesterone is the:", options: ["Follicle", "Corpus luteum", "Endometrium", "Placenta"], answer: 1, rationale: "The corpus luteum (from the ruptured follicle) secretes progesterone in the luteal phase." },
      { type: "mcq", q: "Fertilisation normally occurs in the:", options: ["Uterus", "Ovary", "Fallopian tube", "Cervix"], answer: 2, rationale: "Sperm usually meets and fertilises the ovum in the fallopian (uterine) tube." },
      { type: "mcq", q: "Menstruation occurs because, in the absence of pregnancy:", options: ["Oestrogen rises sharply", "Ovulation is repeated", "The follicle enlarges", "Progesterone and oestrogen fall and the uterine lining is shed"], answer: 3, rationale: "Falling hormones after the corpus luteum degenerates cause the lining to shed." },
      { type: "mcq", q: "The hormone detected by pregnancy tests, which maintains the corpus luteum early in pregnancy, is:", options: ["Human chorionic gonadotropin (hCG)", "Insulin", "Thyroxine", "Aldosterone"], answer: 0, rationale: "hCG from the developing placenta maintains progesterone and is the basis of pregnancy tests." },
      { type: "mcq", q: "The hormone that stimulates milk production after birth is:", options: ["Oxytocin", "Prolactin", "Oestrogen", "FSH"], answer: 1, rationale: "Prolactin from the anterior pituitary stimulates milk synthesis." },
      { type: "mcq", q: "The hormone responsible for the milk 'let-down' (ejection) reflex is:", options: ["Prolactin", "Progesterone", "LH", "Oxytocin"], answer: 3, rationale: "Oxytocin causes milk ejection in response to suckling — a positive-feedback reflex." },
      { type: "mcq", q: "The natural cessation of ovarian function and menstruation is called:", options: ["Puberty", "Ovulation", "Menopause", "Menarche"], answer: 2, rationale: "Menopause is the permanent end of menstrual cycles due to declining ovarian function." },
      { type: "mcq", q: "In the female cycle, the hormone that rebuilds the uterine lining during the follicular phase is:", options: ["Progesterone", "Oestrogen", "Prolactin", "Testosterone"], answer: 1, rationale: "Rising oestrogen from the growing follicle regenerates the endometrium." },
      { type: "fill", q: "The release of a mature ovum from the ovary is called ____.", accept: ["ovulation"], rationale: "Ovulation, triggered by the LH surge, occurs around mid-cycle." },
      { type: "fill", q: "The formation of sperm in the seminiferous tubules of the testis is called ____.", accept: ["spermatogenesis"], rationale: "Spermatogenesis is continuous sperm production from puberty onward." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "phy-14-special-senses",
    unit: "Unit 4 · Neural, Endocrine & Sensory Physiology",
    title: "Physiology of the Special Senses",
    readMinutes: 17,
    summary: "How sensory receptors convert stimuli into nerve impulses; the physiology of vision (image formation, the retina, and light detection); hearing and balance; and the chemical senses of taste and smell, and touch — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Sensation and receptors", p: "Sensation begins when a specialised sensory receptor detects a stimulus and converts (transduces) it into a nerve impulse. The impulse travels along a sensory pathway to a specific area of the cerebral cortex, where it is interpreted as a conscious sensation. Receptors are classified by the stimulus they detect (photoreceptors for light, mechanoreceptors for touch/sound, chemoreceptors for taste/smell, thermoreceptors for temperature, nociceptors for pain). Receptors often adapt — their response declines with a constant stimulus." },
      { h: "The eye and image formation", p: "The eye works like a camera. Light passes through the transparent cornea and lens, which bend (refract) it to focus a sharp, inverted image on the retina at the back of the eye. The cornea does most of the focusing; the lens fine-tunes it. The iris controls the amount of light entering through the pupil (a reflex). Accommodation is the change in lens shape (by the ciliary muscle) to focus on near or far objects; loss of this ability with age causes presbyopia." },
      { h: "The retina and vision", p: "The retina contains the photoreceptors that detect light.", list: [
        "Rods — very sensitive, working in dim light and giving black-and-white (night) vision.",
        "Cones — work in bright light and give sharp, colour vision; concentrated at the macula (fovea) for detailed central vision.",
        "Light bleaches visual pigments (rhodopsin in rods) generating impulses.",
        "Impulses pass via the optic nerve to the visual cortex, where the brain interprets and 'corrects' the inverted image.",
        "Vitamin A is needed for the visual pigments; deficiency causes night blindness."
      ], figure: {
        caption: "Vision pathway: light is refracted and focused on the retina, where rods and cones transduce it into impulses sent via the optic nerve to the brain.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pathway of vision."><defs><marker id="phArr14" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="60" width="120" height="50" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="75" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Cornea + Lens</text><text x="75" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">focus light</text><rect x="165" y="60" width="120" height="50" rx="9" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="225" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Retina</text><text x="225" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">rods &amp; cones</text><rect x="315" y="60" width="120" height="50" rx="9" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="375" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Optic nerve</text><rect x="460" y="60" width="90" height="50" rx="9" fill="#0F4C3A"/><text x="505" y="82" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFFFFF">Brain</text><text x="505" y="99" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#DCFCE7">interprets</text><line x1="135" y1="85" x2="163" y2="85" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr14)"/><line x1="285" y1="85" x2="313" y2="85" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr14)"/><line x1="435" y1="85" x2="458" y2="85" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#phArr14)"/></svg>'
      } },
      { h: "Hearing", p: "Sound is a vibration of air. The outer ear collects sound and channels it to the eardrum (tympanic membrane), which vibrates. The three tiny bones (ossicles) of the middle ear amplify and transmit these vibrations to the fluid-filled cochlea of the inner ear. There, the vibrations move fluid and stimulate hair cells (mechanoreceptors) on the basilar membrane, which convert them into nerve impulses carried by the auditory nerve to the brain, where they are interpreted as sound. Different pitches stimulate hair cells at different points along the cochlea." },
      { h: "Balance (equilibrium)", p: "The inner ear also houses the organs of balance. The semicircular canals detect rotational (angular) movements of the head, while the vestibule (utricle and saccule) detects the position of the head and linear movement (including gravity). Hair cells in these structures send impulses via the vestibular nerve to the brain, which uses this information (with vision and proprioception) to maintain posture and balance. Disturbance causes dizziness and vertigo." },
      { h: "Taste and smell — the chemical senses", p: "Taste (gustation) and smell (olfaction) are chemoreceptor senses that respond to dissolved or airborne chemicals. Taste buds on the tongue detect the basic tastes (sweet, sour, salty, bitter, umami). Smell receptors high in the nasal cavity detect a vast range of odour molecules and send impulses directly to the brain. Much of what we call 'flavour' is really smell, which is why food seems tasteless with a blocked nose. Both senses warn against spoiled food and danger and stimulate appetite and digestion." },
      { h: "Touch and the skin senses", p: "The skin contains a variety of receptors for touch, pressure, vibration, temperature (warmth and cold) and pain. These provide information about the external environment and protect the body. Pain (from nociceptors) is a protective warning of actual or threatened tissue damage. The density of receptors varies — fingertips and lips are highly sensitive, the back much less so." },
      { h: "Nursing application", list: [
        "Assess sensory function (vision, hearing, sensation) as part of holistic and neurological care.",
        "Adapt care and communication for patients with sensory impairment to keep them safe and oriented.",
        "Understand pain physiology to assess and manage pain effectively.",
        "Relate loss of taste and smell to poor appetite and nutrition, and protect patients who lack protective sensation (e.g. in diabetes)."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Explain how a sensory receptor converts a stimulus into a conscious sensation.",
      "Describe how the eye forms an image on the retina and the roles of rods and cones.",
      "Describe the physiology of hearing from sound wave to nerve impulse.",
      "Explain how the inner ear contributes to balance.",
      "Describe the chemical senses of taste and smell and their importance."
    ],
    assessment: [
      { type: "mcq", q: "The conversion of a stimulus into a nerve impulse by a receptor is called:", options: ["Transduction", "Adaptation", "Refraction", "Accommodation"], answer: 0, rationale: "Sensory transduction converts stimulus energy into an electrical impulse." },
      { type: "mcq", q: "The retinal photoreceptors responsible for colour and sharp vision in bright light are the:", options: ["Rods", "Cones", "Hair cells", "Taste buds"], answer: 1, rationale: "Cones provide colour and high-acuity vision, concentrated at the fovea." },
      { type: "mcq", q: "Adjusting the lens to focus on near or distant objects is called:", options: ["Refraction", "Transduction", "Accommodation", "Adaptation"], answer: 2, rationale: "Accommodation changes lens shape via the ciliary muscle to focus." },
      { type: "mcq", q: "A deficiency of vitamin A characteristically causes:", options: ["Deafness", "Loss of smell", "Vertigo", "Night blindness"], answer: 3, rationale: "Vitamin A is needed for rod pigment; deficiency impairs dim-light (night) vision." },
      { type: "mcq", q: "Sound vibrations are converted into nerve impulses by hair cells in the:", options: ["Eardrum", "Cochlea", "Semicircular canals", "Retina"], answer: 1, rationale: "Hair cells of the cochlea transduce fluid vibrations into auditory impulses." },
      { type: "mcq", q: "Rotational movements of the head are detected by the:", options: ["Cochlea", "Retina", "Semicircular canals", "Taste buds"], answer: 2, rationale: "The semicircular canals sense angular (rotational) acceleration for balance." },
      { type: "mcq", q: "Taste and smell are classified as ____ senses.", options: ["Photoreceptor", "Mechanoreceptor", "Chemoreceptor", "Thermoreceptor"], answer: 2, rationale: "Both respond to chemicals, so they are chemoreceptor senses." },
      { type: "mcq", q: "Most of the focusing (refraction) of light entering the eye is done by the:", options: ["Retina", "Cornea", "Iris", "Optic nerve"], answer: 1, rationale: "The cornea provides most refraction; the lens fine-tunes the focus." },
      { type: "mcq", q: "Receptors that warn of actual or potential tissue damage are:", options: ["Photoreceptors", "Baroreceptors", "Chemoreceptors", "Nociceptors"], answer: 3, rationale: "Nociceptors detect painful, potentially damaging stimuli." },
      { type: "mcq", q: "The tiny bones of the middle ear function to:", options: ["Detect light", "Amplify and transmit sound vibrations", "Control balance only", "Produce earwax"], answer: 1, rationale: "The ossicles amplify eardrum vibrations and pass them to the cochlea." },
      { type: "fill", q: "The light-sensitive layer at the back of the eye is the ____.", accept: ["retina"], rationale: "The retina holds the rods and cones that detect light." },
      { type: "fill", q: "The decline in a receptor's response to a continuous stimulus is called sensory ____.", accept: ["adaptation"], rationale: "Adaptation reduces the response to an unchanging stimulus." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "phy-15-temperature-regulation",
    unit: "Unit 5 · Temperature Regulation & Immunity",
    title: "Regulation of Body Temperature",
    readMinutes: 16,
    summary: "Body temperature as a homeostatic variable; heat production and heat loss; the hypothalamus as the thermostat; mechanisms of temperature regulation by negative feedback; the physiology of fever, hyperthermia and hypothermia; and nursing implications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Body temperature and homeostasis", p: "Core body temperature is normally held around 37 degrees Celsius, within a narrow range, because the body's enzymes and metabolic reactions work best at this temperature. Temperature regulation (thermoregulation) is a classic example of homeostasis by negative feedback: heat production is balanced against heat loss so that core temperature stays stable despite changes in activity and environment. The core (deep organs) is kept constant, while the shell (skin) temperature varies." },
      { h: "Heat production", p: "The body generates heat mainly as a by-product of metabolism.", list: [
        "Basal metabolism of all cells, especially the liver, produces continuous heat.",
        "Muscle activity greatly increases heat production; shivering is involuntary muscle contraction to generate heat.",
        "The action of hormones — thyroxine raises metabolic rate, and adrenaline gives a rapid boost.",
        "The 'thermic effect' of digesting food adds some heat."
      ] },
      { h: "Heat loss", p: "Heat is lost mainly from the skin surface by four physical mechanisms.", list: [
        "Radiation — heat given off as infrared waves to cooler surroundings (the main route at rest).",
        "Conduction — heat transferred to cooler objects in direct contact.",
        "Convection — heat carried away by moving air or water over the skin.",
        "Evaporation — heat used to turn sweat (and moisture from breath) into vapour; the main route when it is hot or during exercise."
      ] },
      { h: "The hypothalamus — the body's thermostat", p: "The hypothalamus contains the thermoregulatory centre, which acts like a thermostat with a set point of about 37 degrees. It receives information from central thermoreceptors (sensing blood temperature) and peripheral thermoreceptors (in the skin). When the temperature moves away from the set point, the hypothalamus triggers responses through the autonomic nervous system, endocrine system and behaviour to restore it — negative feedback in action.", figure: {
        caption: "Thermoregulation by negative feedback: the hypothalamus responds to a rise or fall in temperature with heat-losing or heat-conserving mechanisms.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Negative feedback control of body temperature."><rect x="200" y="80" width="160" height="45" rx="9" fill="#0F4C3A"/><text x="280" y="100" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">HYPOTHALAMUS</text><text x="280" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">set point ~37&#176;C</text><rect x="20" y="30" width="150" height="45" rx="9" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="95" y="50" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">TOO HOT</text><text x="95" y="67" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">sweat, vasodilate</text><rect x="20" y="130" width="150" height="45" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="95" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">TOO COLD</text><text x="95" y="167" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">shiver, vasoconstrict</text><line x1="170" y1="52" x2="205" y2="88" stroke="#7C2D12" stroke-width="2"/><line x1="170" y1="152" x2="205" y2="118" stroke="#15803D" stroke-width="2"/><text x="430" y="106" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">restores 37&#176;C</text></svg>'
      } },
      { h: "Response to heat (cooling)", p: "When core temperature rises, the hypothalamus promotes heat loss: skin blood vessels dilate (vasodilation) so warm blood reaches the surface to lose heat, and the sweat glands secrete sweat that cools the body by evaporation. Behaviourally, the person seeks shade, removes clothing and drinks fluids. Metabolic heat production is also reduced. These responses bring temperature back toward the set point." },
      { h: "Response to cold (warming)", p: "When core temperature falls, the hypothalamus conserves and generates heat: skin blood vessels constrict (vasoconstriction) to keep warm blood in the core, sweating stops, and shivering (and increased metabolism via thyroxine and adrenaline) produces heat. Erector muscles raise body hair ('goose bumps' — more useful in furry animals). Behaviourally, the person adds clothing and seeks warmth. These responses restore the set point." },
      { h: "Fever, hyperthermia and hypothermia", p: "In fever (pyrexia), pyrogens released during infection reset the hypothalamic thermostat to a higher level; the body then feels cold and actively warms itself (shivering, feeling chilled) until it reaches the new set point — which is why antipyretics work by lowering the set point. Hyperthermia (e.g. heat stroke) is a dangerous rise when heat gain overwhelms heat loss and control fails. Hypothermia is a fall in core temperature below normal when heat loss exceeds production, impairing the brain and heart; both extremes are medical emergencies." },
      { h: "Nursing application", list: [
        "Measure temperature accurately and recognise fever, hyperthermia and hypothermia.",
        "Understand that a feverish patient who is shivering is still warming toward a raised set point — use appropriate measures.",
        "Prevent hypothermia in vulnerable patients (newborns, the elderly, the anaesthetised) and heat illness in hot conditions.",
        "Apply the physiology of heat loss to cooling or warming interventions and to fluid replacement."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Explain how body temperature is regulated by negative feedback, naming the control centre.",
      "Describe the main sources of heat production and the four mechanisms of heat loss.",
      "Describe the body's responses to a rise and to a fall in core temperature.",
      "Explain the physiology of fever and how antipyretic treatment works.",
      "Distinguish hyperthermia from hypothermia and outline the nursing implications of each."
    ],
    assessment: [
      { type: "mcq", q: "Normal core body temperature is approximately:", options: ["30 °C", "37 °C", "40 °C", "42 °C"], answer: 1, rationale: "Core temperature is normally held around 37 degrees Celsius." },
      { type: "mcq", q: "The control centre for body temperature (the 'thermostat') is the:", options: ["Cerebellum", "Medulla", "Hypothalamus", "Thyroid"], answer: 2, rationale: "The hypothalamus contains the thermoregulatory centre with the temperature set point." },
      { type: "mcq", q: "When the body is too hot, the skin blood vessels:", options: ["Dilate to lose heat", "Constrict", "Disappear", "Stop carrying blood"], answer: 0, rationale: "Vasodilation brings warm blood to the surface to lose heat." },
      { type: "mcq", q: "The main mechanism of heat loss during vigorous exercise or in hot weather is:", options: ["Radiation", "Conduction", "Evaporation of sweat", "Shivering"], answer: 2, rationale: "Evaporation of sweat becomes the dominant cooling route when it is hot." },
      { type: "mcq", q: "Involuntary muscle contraction that generates heat when cold is called:", options: ["Sweating", "Vasodilation", "Shivering", "Radiation"], answer: 2, rationale: "Shivering produces heat through rapid muscle contractions." },
      { type: "mcq", q: "In fever, the hypothalamic set point is:", options: ["Reset lower", "Reset higher by pyrogens", "Unchanged", "Removed"], answer: 1, rationale: "Pyrogens raise the set point, so the body warms itself toward the higher target." },
      { type: "mcq", q: "Antipyretic drugs reduce fever mainly by:", options: ["Raising the set point", "Stopping sweating", "Increasing shivering", "Lowering the hypothalamic set point"], answer: 3, rationale: "Antipyretics lower the raised set point, allowing the body to cool." },
      { type: "mcq", q: "A dangerous fall in core body temperature below normal is called:", options: ["Hyperthermia", "Hypothermia", "Fever", "Pyrexia"], answer: 1, rationale: "Hypothermia is subnormal core temperature that impairs vital organs." },
      { type: "mcq", q: "Which hormone increases metabolic heat production over the longer term?", options: ["Insulin", "Aldosterone", "Thyroxine", "ADH"], answer: 2, rationale: "Thyroid hormone raises basal metabolic rate and therefore heat production." },
      { type: "mcq", q: "Loss of heat as infrared waves to cooler surroundings is called:", options: ["Radiation", "Convection", "Conduction", "Evaporation"], answer: 0, rationale: "Radiation is heat emitted as infrared waves and is the main route at rest." },
      { type: "fill", q: "The regulation of body temperature within a narrow range is an example of homeostasis by ____ feedback.", accept: ["negative"], rationale: "Thermoregulation opposes deviations from the set point (negative feedback)." },
      { type: "fill", q: "Narrowing of skin blood vessels to conserve heat in the cold is called ____.", accept: ["vasoconstriction"], rationale: "Vasoconstriction keeps warm blood in the core, reducing heat loss." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "phy-16-immunity",
    unit: "Unit 5 · Temperature Regulation & Immunity",
    title: "Physiology of Immunity & Body Defence",
    readMinutes: 18,
    summary: "The body's defence against infection; innate (non-specific) defences including barriers, phagocytosis and inflammation; adaptive (specific) immunity — cell-mediated and antibody-mediated; the role of the lymphatic system; types of immunity and immunisation; and nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The need for defence", p: "The body is constantly exposed to pathogens (bacteria, viruses, fungi, parasites) and harmful substances. The immune system is the coordinated defence that recognises, neutralises and remembers these threats while sparing the body's own tissues. Defence works at two levels: innate (non-specific) immunity, which is present from birth and responds the same way to any threat, and adaptive (specific) immunity, which is learned, targeted and has memory. The lymphatic system provides the network in which much of this occurs." },
      { h: "First line of innate defence — barriers", p: "The first line stops pathogens entering.", list: [
        "Skin — a physical barrier; its acidity and dryness discourage microbes.",
        "Mucous membranes — trap microbes; cilia sweep them out of the airways.",
        "Secretions — tears, saliva and sweat contain the antibacterial enzyme lysozyme.",
        "Gastric acid — kills many swallowed microbes.",
        "Normal (commensal) flora — harmless resident microbes compete with pathogens."
      ] },
      { h: "Second line of innate defence", p: "If pathogens get past the barriers, non-specific internal defences act quickly against any invader.", list: [
        "Phagocytosis — neutrophils and macrophages engulf and destroy microbes.",
        "Inflammation — redness, heat, swelling and pain that isolate injury, bring in defensive cells, and start repair.",
        "Fever — a raised temperature that slows microbial growth and speeds defence.",
        "Natural killer cells — destroy virus-infected and abnormal cells.",
        "Complement and interferons — proteins that damage microbes and interfere with viral replication."
      ] },
      { h: "The lymphatic system in immunity", p: "The lymphatic system drains excess tissue fluid (lymph) and filters it through lymph nodes, where microbes are trapped and immune cells are concentrated. Lymphoid organs are divided into central (primary) — the bone marrow (where all blood cells, including lymphocytes, are made) and the thymus (where T lymphocytes mature) — and peripheral (secondary) — the lymph nodes, spleen and lymphoid tissue of the gut, where immune responses are mounted. Swollen lymph nodes during infection show this system at work." },
      { h: "Adaptive (specific) immunity — an overview", p: "Adaptive immunity is carried out by lymphocytes that recognise specific antigens (foreign markers). It is specific (targets a particular antigen), has memory (responds faster and stronger on re-exposure), and can distinguish self from non-self. There are two arms: cell-mediated immunity (T lymphocytes) and antibody-mediated or humoral immunity (B lymphocytes). Both are triggered when an antigen is recognised.", figure: {
        caption: "Two arms of adaptive immunity: T cells (cell-mediated) act on infected cells; B cells (humoral) produce antibodies against antigens.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two arms of adaptive immunity."><rect x="200" y="15" width="160" height="40" rx="9" fill="#0F4C3A"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFFFFF">ANTIGEN detected</text><rect x="30" y="95" width="210" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="135" y="118" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">CELL-MEDIATED</text><text x="135" y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">T lymphocytes attack cells</text><rect x="320" y="95" width="210" height="60" rx="10" fill="#F0FDF4" stroke="#7C2D12" stroke-width="2"/><text x="425" y="118" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">HUMORAL</text><text x="425" y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">B cells make antibodies</text><line x1="250" y1="55" x2="150" y2="93" stroke="#0F4C3A" stroke-width="2"/><line x1="310" y1="55" x2="410" y2="93" stroke="#0F4C3A" stroke-width="2"/></svg>'
      } },
      { h: "Cell-mediated immunity (T lymphocytes)", p: "T lymphocytes mature in the thymus and act directly against cells. Helper T cells recognise antigen (presented by other cells) and orchestrate the whole immune response, releasing chemical signals (cytokines) that activate other cells; they are the cells destroyed by HIV. Cytotoxic (killer) T cells destroy body cells that are infected by viruses or that have become cancerous. Memory T cells remain to give a faster response on re-exposure. Cell-mediated immunity is vital against intracellular pathogens and in transplant rejection." },
      { h: "Antibody-mediated (humoral) immunity", p: "B lymphocytes deal mainly with pathogens in body fluids. When a B cell recognises its specific antigen (helped by helper T cells), it multiplies and matures into plasma cells that secrete antibodies (immunoglobulins). Antibodies bind the antigen specifically and neutralise it — by clumping microbes, marking them for phagocytosis, neutralising toxins and activating complement. Memory B cells remain for years, so a second exposure produces a rapid, powerful antibody response — the basis of long-lasting immunity and vaccination." },
      { h: "Types of immunity and immunisation", p: "Immunity is classified by how it is acquired.", list: [
        "Active immunity — the person's own body makes antibodies, giving long-lasting protection; it is natural (after infection) or artificial (after vaccination).",
        "Passive immunity — ready-made antibodies are received, giving immediate but temporary protection; it is natural (from mother to baby across the placenta and in breast milk) or artificial (antibody injections).",
        "Immunisation (vaccination) uses harmless antigens to trigger active immunity and memory without causing the disease — a cornerstone of public health that nurses deliver and promote."
      ] },
      { h: "Nursing application", list: [
        "Apply infection-prevention and control measures (hand hygiene, asepsis) to support the body's defences.",
        "Understand and administer immunisation programmes and explain them to patients.",
        "Recognise the immunocompromised patient (e.g. very young, elderly, on chemotherapy, HIV) and take protective precautions.",
        "Relate signs of inflammation and fever to the underlying immune response when assessing infection."
      ] }
    ],
    references: REF_PHY,
    examQuestions: [
      "Distinguish innate (non-specific) from adaptive (specific) immunity.",
      "Describe the first and second lines of innate defence, including phagocytosis and inflammation.",
      "Explain the roles of T and B lymphocytes in adaptive immunity.",
      "Describe how antibodies are produced and how they protect the body.",
      "Classify the types of immunity and explain the principle of immunisation."
    ],
    assessment: [
      { type: "mcq", q: "Innate (non-specific) immunity is characterised by being:", options: ["Learned and specific", "Present from birth and responding the same way to any threat", "Only from vaccination", "Only antibody-based"], answer: 1, rationale: "Innate immunity is inborn and non-specific, acting the same against any invader." },
      { type: "mcq", q: "The engulfing and destruction of microbes by neutrophils and macrophages is called:", options: ["Phagocytosis", "Vaccination", "Inflammation", "Filtration"], answer: 0, rationale: "Phagocytosis is a key second-line innate defence against microbes." },
      { type: "mcq", q: "The classic signs of inflammation are:", options: ["Pallor and cold", "Redness, heat, swelling and pain", "Weight loss only", "Dry skin"], answer: 1, rationale: "Inflammation produces redness, heat, swelling and pain as it isolates injury and recruits defence." },
      { type: "mcq", q: "T lymphocytes mature in the:", options: ["Liver", "Kidney", "Thymus", "Stomach"], answer: 2, rationale: "T cells mature in the thymus (a central lymphoid organ)." },
      { type: "mcq", q: "Antibodies are produced by:", options: ["Cytotoxic T cells", "Red blood cells", "Platelets", "Plasma cells (from B lymphocytes)"], answer: 3, rationale: "Activated B lymphocytes become plasma cells that secrete antibodies." },
      { type: "mcq", q: "Immunity produced when a person's own body makes antibodies after vaccination is:", options: ["Natural passive", "Artificial active", "Natural active", "Artificial passive"], answer: 1, rationale: "Vaccination triggers the body to make its own antibodies — artificial active immunity." },
      { type: "mcq", q: "Antibodies passed from mother to baby in breast milk provide:", options: ["Artificial active immunity", "Natural active immunity", "Natural passive immunity", "No immunity"], answer: 2, rationale: "Ready-made maternal antibodies give the infant temporary natural passive immunity." },
      { type: "mcq", q: "The immune cells destroyed by HIV, crippling the immune response, are the:", options: ["Red cells", "Platelets", "Plasma cells", "Helper T cells"], answer: 3, rationale: "HIV destroys helper T cells, which coordinate immune responses." },
      { type: "mcq", q: "The main function of the lymph nodes in immunity is to:", options: ["Produce insulin", "Filter lymph and trap microbes for immune cells", "Store fat", "Pump blood"], answer: 1, rationale: "Lymph nodes filter lymph and are sites where immune responses are mounted." },
      { type: "mcq", q: "The rapid, powerful antibody response on a second exposure to an antigen is due to:", options: ["Fever", "Phagocytosis", "Gastric acid", "Memory cells"], answer: 3, rationale: "Memory B and T cells enable a faster, stronger secondary response — the basis of vaccination." },
      { type: "fill", q: "Specific proteins produced against antigens, also called immunoglobulins, are ____.", accept: ["antibodies", "antibody"], rationale: "Antibodies (immunoglobulins) bind antigens specifically to neutralise them." },
      { type: "fill", q: "Protection using ready-made antibodies, giving immediate but temporary immunity, is called ____ immunity.", accept: ["passive"], rationale: "Passive immunity supplies antibodies directly, so it is immediate but short-lived." }
    ]
  }
];




