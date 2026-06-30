/* ============================================================
   Diploma in Nursing · D123 Anatomy & Physiology — 20 topics.
   Topics 1–5 authored at undergraduate depth (expanded notes,
   figures, 10+ MCQs, references); 6–20 are structured
   placeholders. Content original, grounded in standard texts:
     • Tortora GJ, Derrickson B. Principles of Anatomy & Physiology, 15e.
     • Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness, 13e.
     • Marieb EN, Hoehn K. Human Anatomy & Physiology, 11e.
     • Hall JE. Guyton and Hall Textbook of Medical Physiology, 14e.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_AP = [
  "Tortora GJ, Derrickson B. Principles of Anatomy & Physiology. 15th ed. Wiley.",
  "Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. 13th ed. Elsevier.",
  "Marieb EN, Hoehn K. Human Anatomy & Physiology. 11th ed. Pearson."
];

/* ---- reusable schematic figures (original, simplified, label-accurate) ---- */
var FIG_LEVELS = {
  caption: "Figure 1.1 — Levels of structural organization, simplest to most complex.",
  svg: "<svg viewBox='0 0 760 70' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Levels of organization'>" +
    "<defs><marker id='ar' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
    ["Chemical","Cellular","Tissue","Organ","System","Organism"].map(function(t,i){var x=10+i*125;return "<rect x='"+x+"' y='18' width='104' height='34' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+52)+"' y='39' text-anchor='middle' font-family='Inter,sans-serif' font-size='13' font-weight='700' fill='#14387A'>"+t+"</text>"+(i<5?"<line x1='"+(x+104)+"' y1='35' x2='"+(x+121)+"' y2='35' stroke='#2E63B8' stroke-width='2' marker-end='url(#ar)'/>":"");}).join("") +
    "</svg>"
};
var FIG_PLANES = {
  caption: "Figure 1.2 — The three principal anatomical planes (sagittal, frontal, transverse).",
  svg: "<svg viewBox='0 0 320 260' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Body planes'>" +
    "<g fill='#EDF2F4' stroke='#6B7785' stroke-width='1.5'><circle cx='160' cy='40' r='22'/><rect x='132' y='62' width='56' height='90' rx='14'/><rect x='138' y='150' width='20' height='80' rx='9'/><rect x='162' y='150' width='20' height='80' rx='9'/></g>" +
    "<line x1='160' y1='12' x2='160' y2='244' stroke='#B85C5C' stroke-width='2' stroke-dasharray='5 4'/><text x='166' y='20' font-family='Inter' font-size='12' font-weight='700' fill='#B85C5C'>Sagittal</text>" +
    "<line x1='96' y1='118' x2='224' y2='118' stroke='#2E63B8' stroke-width='2' stroke-dasharray='5 4'/><text x='226' y='116' font-family='Inter' font-size='12' font-weight='700' fill='#2E63B8'>Transverse</text>" +
    "<ellipse cx='160' cy='118' rx='70' ry='118' fill='none' stroke='#C99A50' stroke-width='2' stroke-dasharray='5 4'/><text x='60' y='210' font-family='Inter' font-size='12' font-weight='700' fill='#A47B36'>Frontal</text>" +
    "</svg>"
};
var FIG_FEEDBACK = {
  caption: "Figure 1.3 — A negative-feedback loop, the core mechanism of homeostasis.",
  svg: "<svg viewBox='0 0 720 130' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Negative feedback loop'>" +
    "<defs><marker id='ar2' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
    [["Stimulus\\n(change)",10],["Receptor\\n(sensor)",150],["Control\\ncentre",300],["Effector",450],["Response\\n(reverses change)",580]].map(function(p,i){var x=p[1];var lines=p[0].split("\\n");var txt=lines.map(function(l,k){return "<tspan x='"+(x+60)+"' dy='"+(k===0?0:14)+"'>"+l+"</tspan>";}).join("");return "<rect x='"+x+"' y='30' width='120' height='44' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text y='52' text-anchor='middle' font-family='Inter' font-size='11.5' font-weight='700' fill='#14387A'>"+txt+"</text>"+(i<4?"<line x1='"+(x+120)+"' y1='52' x2='"+(x+ (i===3?130:150) )+"' y2='52' stroke='#2E63B8' stroke-width='2' marker-end='url(#ar2)'/>":"");}).join("") +
    "<path d='M640,74 L640,108 L70,108 L70,74' fill='none' stroke='#B85C5C' stroke-width='2' stroke-dasharray='5 4' marker-end='url(#ar2)'/><text x='300' y='124' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#B85C5C'>Feedback inhibits the original stimulus</text>" +
    "</svg>"
};
var FIG_BILAYER = {
  caption: "Figure 2.1 — Fluid-mosaic plasma membrane: a phospholipid bilayer with embedded proteins.",
  svg: "<svg viewBox='0 0 420 150' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Plasma membrane bilayer'>" +
    "<text x='8' y='20' font-family='Inter' font-size='11' fill='#6B7785'>Extracellular fluid</text>" +
    (function(){var s="";for(var i=0;i<14;i++){var x=18+i*28;s+="<circle cx='"+x+"' cy='40' r='9' fill='#C99A50'/><line x1='"+(x-3)+"' y1='49' x2='"+(x-3)+"' y2='70' stroke='#C99A50' stroke-width='2'/><line x1='"+(x+3)+"' y1='49' x2='"+(x+3)+"' y2='70' stroke='#C99A50' stroke-width='2'/>";s+="<circle cx='"+x+"' cy='110' r='9' fill='#C99A50'/><line x1='"+(x-3)+"' y1='101' x2='"+(x-3)+"' y2='80' stroke='#C99A50' stroke-width='2'/><line x1='"+(x+3)+"' y1='101' x2='"+(x+3)+"' y2='80' stroke='#C99A50' stroke-width='2'/>";}return s;})() +
    "<rect x='150' y='30' width='30' height='90' rx='10' fill='#2E63B8'/><text x='165' y='80' text-anchor='middle' font-family='Inter' font-size='9' fill='#fff'>protein</text>" +
    "<text x='8' y='140' font-family='Inter' font-size='11' fill='#6B7785'>Cytoplasm</text>" +
    "<text x='250' y='18' font-family='Inter' font-size='10' fill='#A47B36'>○ hydrophilic head · | hydrophobic tails</text>" +
    "</svg>"
};
var FIG_SKIN = {
  caption: "Figure 4.1 — The skin (epidermis + dermis) and the underlying hypodermis (schematic). Replace with a labelled histology image if available.",
  svg: "<svg viewBox='0 0 420 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Skin layers'>" +
    "<rect x='20' y='20' width='380' height='40' fill='#F1E9DC' stroke='#6B7785'/><text x='30' y='45' font-family='Inter' font-size='13' font-weight='700' fill='#14387A'>Epidermis</text>" +
    "<rect x='20' y='60' width='380' height='80' fill='#FBEFE0' stroke='#6B7785'/><text x='30' y='104' font-family='Inter' font-size='13' font-weight='700' fill='#A47B36'>Dermis (vessels, nerves, glands, follicles)</text>" +
    "<rect x='20' y='140' width='380' height='48' fill='#FCE9D2' stroke='#6B7785'/><text x='30' y='168' font-family='Inter' font-size='13' font-weight='700' fill='#7C2D12'>Hypodermis (subcutaneous fat)</text>" +
    "</svg>"
};
var FIG_BONE = {
  caption: "Figure 5.1 — Gross structure of a typical long bone (schematic).",
  svg: "<svg viewBox='0 0 360 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Long bone structure'>" +
    "<path d='M70,30 q-30,0 -30,28 q0,22 28,26 l0,32 q-26,4 -26,26 q0,28 30,28 q30,0 34,-26 l192,0 q4,26 34,26 q30,0 30,-28 q0,-22 -26,-26 l0,-32 q28,-4 28,-26 q0,-28 -30,-28 q-30,0 -34,26 l-192,0 q-4,-26 -34,-26 Z' fill='#F5EFE2' stroke='#6B7785' stroke-width='1.5'/>" +
    "<rect x='120' y='86' width='120' height='28' fill='#FBEFE0' stroke='#C99A50'/><text x='180' y='105' text-anchor='middle' font-family='Inter' font-size='11' fill='#A47B36'>medullary cavity</text>" +
    "<text x='180' y='30' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>Diaphysis (shaft)</text>" +
    "<text x='40' y='180' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>Epiphysis</text><text x='270' y='180' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>Epiphysis</text>" +
    "</svg>"
};

window.Academic.topics["diploma-nursing/anatomy-physiology"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "anp-01-intro",
    unit: "Unit 1 · Introduction & Structural Organization",
    title: "Introduction to Anatomy & Physiology",
    readMinutes: 22,
    summary: "Scope of anatomy and physiology, levels of organization, the organ systems, anatomical position, directional terms, planes, body cavities, and homeostasis with feedback control.",
    youtubeId: "",
    tutor: "",
    notes: [
      { h: "What are Anatomy and Physiology?", p: "Anatomy (from the Greek 'ana' = apart, 'tome' = to cut) is the study of the structure of body parts and their relationships to one another. Physiology is the study of the function of those parts — how they work and cooperate to keep the body alive. The two sciences are inseparable because of the principle of complementarity of structure and function: what a structure can do depends on its specific form. For example, the bony thorax is shaped as a protective cage because it must shield the heart and lungs." },
      { h: "Subdivisions of the two sciences", list: [
        "Gross (macroscopic) anatomy — structures seen with the naked eye; studied regionally, systemically, or as surface anatomy.",
        "Microscopic anatomy — cytology (the study of cells) and histology (the study of tissues).",
        "Developmental anatomy — changes across the lifespan, including embryology.",
        "Physiology subfields — e.g. cell physiology, neurophysiology, cardiovascular physiology, and pathophysiology (function in disease)."
      ] },
      { h: "Levels of structural organization", p: "The body is built in a hierarchy of increasing complexity. Atoms combine into molecules; molecules form organelles and then cells; similar cells form tissues; two or more tissues form an organ; organs that share a function form an organ system; and all systems together make up the organism.", figure: FIG_LEVELS },
      { h: "The eleven organ systems", p: "Nurses must recognise the eleven organ systems and their broad roles, because illness in one system usually affects others.", list: [
        "Integumentary — skin; protection and temperature regulation.",
        "Skeletal — bones and joints; support, protection, movement, blood-cell formation.",
        "Muscular — movement, posture, heat.",
        "Nervous — fast control via electrical signals.",
        "Endocrine — slower control via hormones.",
        "Cardiovascular — blood transport by the heart and vessels.",
        "Lymphatic / immune — fluid return and defence.",
        "Respiratory — gas exchange.",
        "Digestive — breakdown and absorption of food.",
        "Urinary — excretion of wastes and fluid balance.",
        "Reproductive — production of offspring."
      ] },
      { h: "Anatomical position", p: "All anatomical descriptions assume the body is in the anatomical position: standing erect, facing the observer, head level, feet flat and slightly apart, arms at the sides with the palms turned forward (supinated). Because this reference is fixed, the terms 'right' and 'left' always refer to the patient's own right and left — not the observer's." },
      { h: "Directional terms", list: [
        "Superior (cranial) / Inferior (caudal) — toward the head / toward the feet.",
        "Anterior (ventral) / Posterior (dorsal) — toward the front / toward the back.",
        "Medial / Lateral — toward / away from the body's midline.",
        "Proximal / Distal — nearer to / farther from the trunk or point of attachment of a limb.",
        "Superficial / Deep — toward the surface / farther from the surface.",
        "Ipsilateral / Contralateral — on the same side / on opposite sides of the body."
      ] },
      { h: "Body planes", p: "A plane is an imaginary flat surface used to make sectional views. The sagittal plane runs vertically and divides the body into right and left parts (a midsagittal/median plane gives equal halves; a parasagittal plane gives unequal parts). The frontal (coronal) plane divides the body into anterior and posterior parts. The transverse (horizontal/cross-sectional) plane divides it into superior and inferior parts. An oblique plane lies at an angle. Sectional imaging such as CT uses these planes.", figure: FIG_PLANES },
      { h: "Body cavities", p: "The body has two major closed cavities. The dorsal cavity contains the cranial cavity (brain) and the vertebral canal (spinal cord). The larger ventral cavity is divided by the diaphragm into the thoracic cavity above (containing the two pleural cavities, and the mediastinum which holds the pericardial cavity and heart) and the abdominopelvic cavity below (abdominal + pelvic portions). Internal organs in the ventral cavity are cushioned by double-layered serous membranes — the parietal layer lines the cavity wall and the visceral layer covers the organ." },
      { h: "Abdominopelvic regions and quadrants", p: "For description and clinical examination, the abdomen is mapped either into four quadrants (right and left, upper and lower — RUQ, LUQ, RLQ, LLQ) by two lines through the umbilicus, or into nine regions (e.g. epigastric, umbilical, hypogastric, and the right/left hypochondriac, lumbar, and iliac regions). Locating pain or a mass within these areas helps identify the organ involved (for example, RLQ pain may suggest appendicitis)." },
      { h: "Homeostasis", p: "Homeostasis is the maintenance of relatively stable internal conditions despite continuous changes in the internal and external environment. Variables such as body temperature, blood pH, blood glucose, and fluid and electrolyte levels are each held within a narrow range. Every homeostatic control system has three components: a receptor that detects change, a control centre (often the brain or an endocrine gland) that sets the acceptable range and decides the response, and an effector that carries out the corrective action.", figure: FIG_FEEDBACK },
      { h: "Negative and positive feedback", p: "Most control is by negative feedback, in which the response reverses the original change and so shuts off the stimulus — for example, sweating and skin-vessel dilation cool a body that has become too warm, and insulin lowers a rising blood glucose. Positive feedback is less common and amplifies the change until a specific event ends it; examples include the oxytocin-driven contractions of labour, blood clotting, and the surge of luteinising hormone before ovulation." },
      { h: "Clinical & nursing relevance", p: "Disease is largely a state of homeostatic imbalance. This is why nurses repeatedly measure vital signs and laboratory values and compare them against normal reference ranges: a deviation is an early warning that a control system is failing. Understanding anatomical terms also lets the nurse document findings precisely and communicate unambiguously with the health-care team." }
    ],
    references: REF_AP,
    examQuestions: [
      "Define anatomy and physiology and explain the principle of complementarity of structure and function.",
      "List the six levels of structural organization with an example of each.",
      "Describe the anatomical position and define any six directional terms.",
      "Name the three principal body planes and state how each divides the body.",
      "Define homeostasis. Compare negative and positive feedback with one physiological example of each."
    ],
    assessment: [
      { type: "mcq", q: "The plane that divides the body into equal right and left halves is the:", options: ["Frontal plane", "Midsagittal plane", "Transverse plane", "Oblique plane"], answer: 1, rationale: "The midsagittal (median) plane lies in the midline and produces equal right and left halves." },
      { type: "mcq", q: "In the anatomical position, the forearms are:", options: ["Pronated (palms back)", "Supinated (palms forward)", "Crossed", "Raised overhead"], answer: 1, rationale: "The anatomical position specifies palms facing forward — the forearms are supinated." },
      { type: "mcq", q: "Which term means 'nearer to the point of attachment of a limb to the trunk'?", options: ["Distal", "Proximal", "Superficial", "Lateral"], answer: 1, rationale: "Proximal = closer to the trunk/attachment; distal = farther away." },
      { type: "mcq", q: "The diaphragm separates the thoracic cavity from the:", options: ["Cranial cavity", "Pleural cavity", "Abdominopelvic cavity", "Vertebral canal"], answer: 2, rationale: "The muscular diaphragm divides the ventral cavity into the thoracic and abdominopelvic cavities." },
      { type: "mcq", q: "The serous membrane that directly covers an organ is the:", options: ["Parietal layer", "Visceral layer", "Mucous membrane", "Synovial membrane"], answer: 1, rationale: "The visceral layer adheres to the organ; the parietal layer lines the cavity wall." },
      { type: "mcq", q: "Which is the correct sequence from simplest to most complex?", options: ["Tissue → cell → organ → system", "Cell → tissue → organ → system", "Organ → tissue → cell → system", "Cell → organ → tissue → system"], answer: 1, rationale: "Organization runs chemical → cellular → tissue → organ → organ system → organism." },
      { type: "mcq", q: "Childbirth (uterine contractions driven by oxytocin) is an example of:", options: ["Negative feedback", "Positive feedback", "A reflex arc", "Active transport"], answer: 1, rationale: "Labour is a classic positive-feedback loop: contractions intensify until delivery occurs." },
      { type: "mcq", q: "Pain in the right lower quadrant (RLQ) most classically suggests:", options: ["Appendicitis", "Splenic rupture", "Gastric ulcer", "Cholecystitis"], answer: 0, rationale: "The appendix lies in the RLQ, so appendicitis typically presents with RLQ pain." },
      { type: "mcq", q: "Which structure is found in the dorsal body cavity?", options: ["Heart", "Lungs", "Spinal cord", "Stomach"], answer: 2, rationale: "The dorsal cavity contains the brain (cranial cavity) and spinal cord (vertebral canal)." },
      { type: "mcq", q: "In a negative-feedback loop, the component that detects the change is the:", options: ["Effector", "Control centre", "Receptor", "Stimulus"], answer: 2, rationale: "The receptor (sensor) detects the change and sends input to the control centre." },
      { type: "fill", q: "The study of tissues is called ______.", accept: ["histology"], rationale: "Histology is microscopic study of tissues; cytology is the study of cells." },
      { type: "fill", q: "The maintenance of a stable internal environment is called ______.", accept: ["homeostasis"], rationale: "Homeostasis keeps variables such as temperature and glucose within narrow ranges." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "anp-02-cell",
    unit: "Unit 1 · Introduction & Structural Organization",
    title: "Cell Biology",
    readMinutes: 22,
    summary: "Cell theory, the generalized cell, plasma-membrane structure, organelles, membrane transport and tonicity (with IV-fluid relevance), and the cell cycle and division.",
    youtubeId: "",
    tutor: "",
    notes: [
      { h: "The cell theory", p: "The cell is the basic structural and functional unit of life. Modern cell theory states that all living organisms are composed of one or more cells, that the cell is the smallest unit that can carry out life processes, and that all cells arise from pre-existing cells by division. The human body contains an estimated 30–40 trillion cells of over 200 specialised types." },
      { h: "The generalized cell", p: "Although cells vary widely, a 'generalised' human cell has three basic parts: the plasma membrane (the outer boundary), the cytoplasm (cytosol plus organelles), and the nucleus (the control centre). Studying this model makes it easier to understand how specialised cells differ." },
      { h: "Structure of the plasma membrane", p: "The plasma membrane is described by the fluid-mosaic model: a flexible phospholipid bilayer in which proteins are embedded like tiles in a mosaic. Each phospholipid has a hydrophilic (water-loving) phosphate 'head' facing the watery fluid and two hydrophobic (water-fearing) fatty-acid 'tails' facing inward. Cholesterol molecules stabilise the bilayer, while integral and peripheral proteins act as channels, carriers, receptors, enzymes and cell-identity markers. The membrane is selectively (semi-) permeable, controlling what enters and leaves.", figure: FIG_BILAYER },
      { h: "Major organelles and their functions", list: [
        "Nucleus — contains DNA (as chromatin) and the nucleolus (which makes ribosomes); directs protein synthesis and cell division.",
        "Ribosomes — sites of protein synthesis; free in cytosol or attached to rough ER.",
        "Rough endoplasmic reticulum — synthesises and transports proteins for export or membranes.",
        "Smooth endoplasmic reticulum — synthesises lipids, stores calcium, and detoxifies drugs.",
        "Golgi apparatus — modifies, sorts and packages proteins into vesicles.",
        "Mitochondria — the 'powerhouse'; produce most ATP by aerobic respiration.",
        "Lysosomes — contain digestive enzymes that break down worn organelles, debris and pathogens.",
        "Peroxisomes — neutralise free radicals and detoxify harmful substances.",
        "Cytoskeleton & centrioles — provide shape, support and movement, and organise cell division."
      ] },
      { h: "Passive membrane transport", p: "Passive processes need no cellular energy because particles move down their concentration gradient (from high to low). Simple diffusion moves small, lipid-soluble molecules (O₂, CO₂) directly through the bilayer. Facilitated diffusion moves glucose and ions through specific carrier or channel proteins. Osmosis is the diffusion of water across a selectively permeable membrane toward the area of higher solute concentration. Filtration uses hydrostatic pressure to push fluid and solutes across a membrane (as in the kidney)." },
      { h: "Active membrane transport", p: "Active processes require ATP because substances move against their gradient. In primary active transport the sodium–potassium pump expels 3 Na⁺ and imports 2 K⁺ per cycle, maintaining the cell's resting membrane potential. Secondary active transport harnesses an existing ion gradient. Bulk transport moves large particles in vesicles: endocytosis (phagocytosis = 'cell eating'; pinocytosis = 'cell drinking') brings material in, while exocytosis releases secretions such as hormones." },
      { h: "Tonicity and IV fluids", p: "Tonicity describes how a solution affects cell volume by osmosis. In an isotonic solution (e.g. 0.9% normal saline) cells neither swell nor shrink. A hypotonic solution (e.g. 0.45% saline) has fewer solutes, so water enters the cell and it may swell and burst (lyse). A hypertonic solution (e.g. 3% saline) draws water out, so the cell shrinks (crenates). Nurses must understand tonicity because giving the wrong intravenous fluid can damage cells — for example, rapid infusion of a hypotonic fluid can cause dangerous cell swelling, including cerebral oedema." },
      { h: "The cell cycle and division", p: "Most body cells spend the majority of their life in interphase (G₁ growth, S — DNA replication, G₂ growth), then divide by mitosis. Mitosis proceeds through prophase, metaphase, anaphase and telophase, and is followed by cytokinesis, producing two genetically identical diploid (46-chromosome) daughter cells — the basis of growth and tissue repair. Meiosis is a special division confined to the gonads; it produces four genetically varied haploid (23-chromosome) gametes so that the normal chromosome number is restored at fertilisation." },
      { h: "Clinical & nursing relevance", p: "Mitochondrial number reflects a tissue's energy demand (cardiac and muscle cells are mitochondria-rich). Because mitosis underlies repair, tissues with high turnover (skin, gut lining, bone marrow) heal quickly but are also most damaged by chemotherapy and radiation, which target dividing cells. Cancer is fundamentally a disorder of uncontrolled cell division." }
    ],
    references: REF_AP,
    examQuestions: [
      "State the modern cell theory and name the three basic parts of a generalised cell.",
      "Describe the fluid-mosaic model of the plasma membrane.",
      "Differentiate passive and active transport, giving two examples of each.",
      "Define isotonic, hypotonic and hypertonic solutions and relate them to intravenous fluid therapy.",
      "Compare mitosis and meiosis with respect to purpose, number of daughter cells, and chromosome number."
    ],
    assessment: [
      { type: "mcq", q: "Most of the cell's ATP is produced by the:", options: ["Ribosomes", "Mitochondria", "Golgi apparatus", "Lysosomes"], answer: 1, rationale: "Mitochondria carry out aerobic respiration, generating most cellular ATP." },
      { type: "mcq", q: "The model that best describes the plasma membrane is the:", options: ["Lock-and-key model", "Fluid-mosaic model", "Sliding-filament model", "Cell theory"], answer: 1, rationale: "The fluid-mosaic model describes a fluid phospholipid bilayer with embedded proteins." },
      { type: "mcq", q: "Diffusion of water across a selectively permeable membrane is called:", options: ["Filtration", "Osmosis", "Active transport", "Exocytosis"], answer: 1, rationale: "Osmosis is specifically the diffusion of water down its concentration gradient." },
      { type: "mcq", q: "The sodium–potassium pump moves:", options: ["3 K⁺ in and 2 Na⁺ out", "2 Na⁺ in and 3 K⁺ out", "3 Na⁺ out and 2 K⁺ in", "Equal Na⁺ and K⁺ both ways"], answer: 2, rationale: "Each cycle pumps 3 Na⁺ out and 2 K⁺ in, using ATP." },
      { type: "mcq", q: "A red blood cell placed in a hypotonic solution will:", options: ["Shrink (crenate)", "Stay the same", "Swell and possibly lyse", "Become isotonic"], answer: 2, rationale: "A hypotonic solution drives water into the cell, causing it to swell and potentially burst." },
      { type: "mcq", q: "0.9% sodium chloride (normal saline) is:", options: ["Hypotonic", "Isotonic", "Hypertonic", "Non-osmotic"], answer: 1, rationale: "Normal saline is isotonic to body fluids, so it does not shift water into or out of cells." },
      { type: "mcq", q: "Protein synthesis occurs at the:", options: ["Lysosomes", "Centrioles", "Ribosomes", "Peroxisomes"], answer: 2, rationale: "Ribosomes assemble amino acids into proteins, free in cytosol or on rough ER." },
      { type: "mcq", q: "Which process uses ATP to engulf a large particle such as a bacterium?", options: ["Simple diffusion", "Osmosis", "Phagocytosis", "Facilitated diffusion"], answer: 2, rationale: "Phagocytosis is energy-requiring bulk transport ('cell eating')." },
      { type: "mcq", q: "Meiosis produces:", options: ["Two diploid cells", "Two haploid cells", "Four diploid cells", "Four haploid cells"], answer: 3, rationale: "Meiosis yields four genetically varied haploid gametes." },
      { type: "mcq", q: "DNA replication occurs during which phase of the cell cycle?", options: ["G₁ phase", "S phase", "G₂ phase", "Telophase"], answer: 1, rationale: "DNA is copied during the S (synthesis) phase of interphase." },
      { type: "fill", q: "The selectively permeable outer boundary of the cell is the ______ membrane.", accept: ["plasma", "cell"], rationale: "The plasma (cell) membrane controls movement of substances in and out." },
      { type: "fill", q: "Cell division that produces two identical body cells for growth and repair is called ______.", accept: ["mitosis"], rationale: "Mitosis produces two genetically identical diploid daughter cells." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "anp-03-tissues",
    unit: "Unit 1 · Introduction & Structural Organization",
    title: "Tissues of the Body",
    readMinutes: 20,
    summary: "The four primary tissues — epithelial, connective, muscle and nervous — their classification and functions, body membranes, and tissue repair.",
    youtubeId: "",
    tutor: "",
    notes: [
      { h: "What is a tissue?", p: "A tissue is a group of structurally similar cells, together with their extracellular material, that perform a common function. The study of tissues is histology. The body's four primary tissue types — epithelial, connective, muscle and nervous — combine in varying proportions to build every organ." },
      { h: "Epithelial tissue — features", p: "Epithelium covers external and internal surfaces, lines hollow organs and cavities, and forms glands. Its defining features are: closely packed cells with little matrix; apical–basal polarity; attachment to a basement membrane; an avascular nature (it has no blood vessels and is nourished by diffusion from the underlying connective tissue); and a high capacity for regeneration. Its roles include protection, absorption, secretion, filtration and sensation." },
      { h: "Classification of epithelium", p: "Epithelium is named by the number of cell layers and by cell shape. Layers: simple (one layer, for absorption/filtration), stratified (many layers, for protection), and pseudostratified. Shapes: squamous (flat), cuboidal (cube-like) and columnar (tall). Combining these gives types such as simple squamous (alveoli, capillaries), simple columnar (gut lining), and stratified squamous (epidermis, oesophagus). Glandular epithelium forms exocrine glands (secrete via ducts, e.g. sweat) and endocrine glands (secrete hormones into blood).", figure: { caption: "Figure 3.1 — Epithelial classification by layers and cell shape. Add a labelled histology image for detail.", placeholder: true } },
      { h: "Connective tissue — the most diverse tissue", p: "Connective tissue is the most abundant and widely distributed tissue. Unlike epithelium, its cells are sparse and separated by an abundant extracellular matrix of protein fibres (collagen for strength, elastic for stretch, reticular for support) within a ground substance. It binds, supports, protects, insulates and transports." },
      { h: "Types of connective tissue", list: [
        "Connective tissue proper — loose (areolar, adipose/fat, reticular) and dense (regular = tendons & ligaments; irregular = dermis).",
        "Cartilage — hyaline (most common; joint surfaces, trachea), elastic (external ear, epiglottis) and fibrocartilage (intervertebral discs, knee menisci).",
        "Bone (osseous tissue) — a hard, mineralised matrix giving support and protection.",
        "Blood — a fluid connective tissue whose matrix is plasma; it transports cells and dissolved substances."
      ] },
      { h: "Muscle tissue", p: "Muscle tissue is specialised to contract and generate force. There are three types: skeletal muscle (striated, voluntary, attached to bones for movement); cardiac muscle (striated, involuntary, only in the heart wall, with intercalated discs that synchronise the heartbeat); and smooth muscle (non-striated, involuntary, in the walls of blood vessels and hollow organs such as the gut, bladder and uterus)." },
      { h: "Nervous tissue", p: "Nervous tissue detects stimuli and rapidly transmits electrical impulses to coordinate body activities. It consists of neurons, which generate and conduct impulses, and supporting neuroglia (glial cells), which protect, insulate and nourish the neurons." },
      { h: "Body membranes", p: "Sheets of tissue line or cover body structures. Epithelial membranes include the cutaneous membrane (skin), mucous membranes (line cavities open to the exterior, e.g. respiratory and digestive tracts, and secrete mucus), and serous membranes (line closed cavities, e.g. pleura, pericardium, peritoneum, and secrete lubricating serous fluid). Synovial membranes (connective tissue) line joint cavities and secrete synovial fluid." },
      { h: "Tissue repair & clinical relevance", p: "Damaged tissue heals by regeneration (replacement with the same tissue type, restoring function) or by fibrosis (replacement with scar tissue) when the original cells cannot divide. Epithelium and bone regenerate well; cardiac muscle and nervous tissue regenerate poorly, which is why myocardial infarction and spinal-cord injury often cause permanent loss of function. Knowledge of tissue type therefore helps the nurse anticipate healing time and outcomes." }
    ],
    references: REF_AP,
    examQuestions: [
      "Name the four primary tissue types and give one function and one location of each.",
      "Classify epithelial tissue by layers and cell shape, with an example of each combination.",
      "List the types of connective tissue and give an example of each.",
      "Differentiate skeletal, cardiac and smooth muscle.",
      "Distinguish regeneration from fibrosis and explain why some tissues heal poorly."
    ],
    assessment: [
      { type: "mcq", q: "Which tissue covers body surfaces, lines cavities and forms glands?", options: ["Connective", "Epithelial", "Muscle", "Nervous"], answer: 1, rationale: "Epithelial tissue covers/lines surfaces and forms glands." },
      { type: "mcq", q: "A distinctive feature of epithelium is that it is:", options: ["Highly vascular", "Avascular", "Always single-layered", "Made mostly of matrix"], answer: 1, rationale: "Epithelium is avascular and is nourished by diffusion from underlying connective tissue." },
      { type: "mcq", q: "The single layer of flat cells forming the walls of alveoli and capillaries is:", options: ["Simple squamous", "Stratified squamous", "Simple columnar", "Transitional"], answer: 0, rationale: "Simple squamous epithelium is thin, allowing rapid diffusion/filtration." },
      { type: "mcq", q: "The most abundant and widely distributed tissue type is:", options: ["Epithelial", "Connective", "Muscle", "Nervous"], answer: 1, rationale: "Connective tissue is the most abundant and varied tissue in the body." },
      { type: "mcq", q: "Which is a fluid connective tissue?", options: ["Hyaline cartilage", "Blood", "Tendon", "Adipose"], answer: 1, rationale: "Blood is connective tissue with a fluid matrix (plasma)." },
      { type: "mcq", q: "Intercalated discs are characteristic of:", options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Nervous tissue"], answer: 2, rationale: "Intercalated discs join cardiac muscle cells and synchronise contraction." },
      { type: "mcq", q: "Tendons that attach muscle to bone are made of:", options: ["Dense regular connective tissue", "Loose areolar tissue", "Hyaline cartilage", "Adipose tissue"], answer: 0, rationale: "Tendons (and ligaments) are dense regular connective tissue with parallel collagen fibres." },
      { type: "mcq", q: "Serous membranes line:", options: ["Cavities open to the exterior", "Closed ventral body cavities", "Joint cavities", "The skin surface"], answer: 1, rationale: "Serous membranes (pleura, pericardium, peritoneum) line closed cavities; mucous membranes line cavities open to the exterior." },
      { type: "mcq", q: "Cartilage found in the intervertebral discs is:", options: ["Hyaline cartilage", "Elastic cartilage", "Fibrocartilage", "Calcified cartilage"], answer: 2, rationale: "Fibrocartilage resists compression and is found in intervertebral discs and knee menisci." },
      { type: "mcq", q: "Replacement of damaged tissue by scar (non-functional) tissue is called:", options: ["Regeneration", "Fibrosis", "Hyperplasia", "Atrophy"], answer: 1, rationale: "Fibrosis forms scar tissue when original cells cannot regenerate." },
      { type: "fill", q: "The basic impulse-conducting cell of nervous tissue is the ______.", accept: ["neuron", "neurone"], rationale: "Neurons conduct impulses; neuroglia support them." },
      { type: "fill", q: "Epithelium composed of a single layer of cells is described as ______ epithelium.", accept: ["simple"], rationale: "Simple = one layer; stratified = many layers." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "anp-04-integumentary",
    unit: "Unit 2 · Support and Movement",
    title: "The Integumentary System",
    readMinutes: 21,
    summary: "Skin functions, the layers of the epidermis and dermis, skin colour, appendages, thermoregulation, and clinical care of burns and pressure injuries.",
    youtubeId: "",
    tutor: "",
    notes: [
      { h: "Overview & functions", p: "The integumentary system comprises the skin and its appendages (hair, nails, and sweat and sebaceous glands). The skin is the largest organ of the body, covering about 1.5–2 m² in an adult.", list: [
        "Protection — a physical, chemical and biological barrier against injury, microbes, UV radiation and water loss.",
        "Thermoregulation — sweating and changes in skin blood flow release or conserve heat.",
        "Sensation — receptors detect touch, pressure, temperature and pain.",
        "Vitamin D synthesis — UVB light converts a cholesterol derivative in the skin to vitamin D₃.",
        "Excretion — small amounts of water, salts and urea are lost in sweat.",
        "Blood reservoir — the dermal vessels can hold a large volume of blood.",
        "Immune defence — Langerhans cells alert the immune system to invaders."
      ] },
      { h: "Layers of the epidermis", p: "The epidermis is keratinised stratified squamous epithelium and is avascular. From deep to superficial its strata are: stratum basale (germinativum) where mitosis occurs; stratum spinosum; stratum granulosum; stratum lucidum (present only in thick, hairless skin of palms and soles); and stratum corneum, the tough, dead, keratin-filled surface layer. Key cells are keratinocytes (produce keratin), melanocytes (produce the pigment melanin), Langerhans cells (immune) and Merkel cells (touch).", figure: FIG_SKIN },
      { h: "The dermis", p: "Beneath the epidermis lies the dermis, a strong layer of connective tissue with two regions. The superficial papillary layer has dermal papillae that form fingerprints and contains capillaries and touch receptors. The deeper reticular layer is dense irregular connective tissue containing collagen and elastic fibres (giving strength and stretch), blood vessels, nerves, hair follicles, and sweat and sebaceous glands." },
      { h: "The hypodermis", p: "The hypodermis (subcutaneous layer or superficial fascia) lies below the dermis. It is mostly adipose tissue; it stores fat for insulation and energy, cushions the body, and anchors the skin to underlying muscle and bone. It is a common site for subcutaneous injections." },
      { h: "Skin colour", p: "Three pigments determine skin colour: melanin (brown–black, protective against UV), carotene (yellow–orange, from the diet), and the red of oxygenated haemoglobin in dermal capillaries. Changes in colour have diagnostic value: pallor suggests anaemia or poor perfusion; cyanosis (bluish) indicates low oxygen; jaundice (yellow) suggests liver disease or haemolysis; erythema (redness) indicates inflammation, fever or embarrassment." },
      { h: "Appendages of the skin", list: [
        "Hair — protects, insulates and senses light touch.",
        "Nails — protect the distal fingers and toes and aid fine grip.",
        "Sebaceous (oil) glands — secrete sebum that softens skin and hair and is mildly bactericidal.",
        "Sweat glands — eccrine glands open onto the skin surface for thermoregulatory sweating; apocrine glands (axillae, groin) become active at puberty."
      ] },
      { h: "Thermoregulation", p: "The skin is central to maintaining core temperature near 37 °C. When the body is too hot, dermal blood vessels dilate (vasodilation) to radiate heat and eccrine glands produce sweat that cools by evaporation. When the body is too cold, vessels constrict (vasoconstriction) to conserve heat and the arrector pili muscles contract (causing 'goose bumps'); shivering generates additional heat." },
      { h: "Clinical care — burns and pressure injuries", p: "Because the skin prevents fluid loss and infection, extensive burns are life-threatening. Burn severity is judged by depth (superficial, partial-thickness, full-thickness) and by the percentage of body surface area, estimated in adults by the 'rule of nines'. Prolonged pressure over bony prominences (sacrum, heels, hips) compresses blood vessels and causes pressure injuries (bed sores); the earliest sign is non-blanching redness. Core nursing measures include repositioning at least every 2 hours, keeping skin clean and dry, relieving pressure, and ensuring good nutrition and hydration." }
    ],
    references: REF_AP,
    examQuestions: [
      "List six functions of the skin.",
      "Name the layers of the epidermis from deep to superficial and state where mitosis occurs.",
      "Describe the two layers of the dermis and their contents.",
      "Explain how the skin regulates body temperature.",
      "Describe the nursing measures used to prevent pressure injuries."
    ],
    assessment: [
      { type: "mcq", q: "The epidermis is composed of:", options: ["Simple squamous epithelium", "Keratinised stratified squamous epithelium", "Dense connective tissue", "Smooth muscle"], answer: 1, rationale: "The epidermis is keratinised stratified squamous epithelium." },
      { type: "mcq", q: "Cell division in the epidermis occurs mainly in the:", options: ["Stratum corneum", "Stratum lucidum", "Stratum basale", "Stratum granulosum"], answer: 2, rationale: "The stratum basale (germinativum) is the actively dividing layer." },
      { type: "mcq", q: "The stratum lucidum is found only in:", options: ["The face", "Thick skin of palms and soles", "The scalp", "Mucous membranes"], answer: 1, rationale: "Stratum lucidum occurs only in thick, hairless skin of the palms and soles." },
      { type: "mcq", q: "Which pigment protects the skin against ultraviolet radiation?", options: ["Carotene", "Melanin", "Haemoglobin", "Bilirubin"], answer: 1, rationale: "Melanin, made by melanocytes, absorbs UV and protects deeper cells." },
      { type: "mcq", q: "A bluish discolouration of skin indicating low oxygen is called:", options: ["Pallor", "Jaundice", "Cyanosis", "Erythema"], answer: 2, rationale: "Cyanosis reflects deoxygenated haemoglobin and poor oxygenation." },
      { type: "mcq", q: "Sebum is produced by the:", options: ["Eccrine sweat glands", "Sebaceous glands", "Ceruminous glands", "Mammary glands"], answer: 1, rationale: "Sebaceous (oil) glands secrete sebum that lubricates skin and hair." },
      { type: "mcq", q: "Which layer is mainly adipose tissue and a site for subcutaneous injection?", options: ["Epidermis", "Papillary dermis", "Reticular dermis", "Hypodermis"], answer: 3, rationale: "The hypodermis (subcutaneous layer) is mostly fat and is used for SC injections." },
      { type: "mcq", q: "During cooling of an overheated body, dermal blood vessels:", options: ["Constrict", "Dilate", "Rupture", "Do not change"], answer: 1, rationale: "Vasodilation increases skin blood flow so heat radiates away; sweating adds evaporative cooling." },
      { type: "mcq", q: "The earliest sign of a developing pressure injury is:", options: ["A deep open wound", "Black eschar", "Non-blanching redness over a bony area", "Yellow slough"], answer: 2, rationale: "Persistent non-blanching erythema over a bony prominence is a stage-1 pressure injury." },
      { type: "mcq", q: "Vitamin D synthesis in the skin is triggered by:", options: ["Infrared light", "UVB light", "Cold temperature", "Friction"], answer: 1, rationale: "UVB light converts 7-dehydrocholesterol in the skin to vitamin D₃ (cholecalciferol)." },
      { type: "fill", q: "The tough, dead, keratin-filled surface layer of the epidermis is the stratum ______.", accept: ["corneum"], rationale: "The stratum corneum is the outermost protective layer." },
      { type: "fill", q: "Repositioning an immobile patient at least every ______ hours helps prevent pressure injuries.", accept: ["2", "two"], rationale: "Two-hourly repositioning relieves pressure and restores blood flow to at-risk areas." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "anp-05-skeletal",
    unit: "Unit 2 · Support and Movement",
    title: "The Skeletal System (Bones & Joints)",
    readMinutes: 22,
    summary: "Functions of bone, bone classification and structure, bone tissue and cells, the axial and appendicular skeleton, calcium homeostasis, and joint classification.",
    youtubeId: "",
    tutor: "",
    notes: [
      { h: "Functions of the skeletal system", list: [
        "Support — a rigid framework that supports the body and cradles soft organs.",
        "Protection — the skull protects the brain; the vertebrae protect the spinal cord; the thoracic cage protects the heart and lungs.",
        "Movement — bones act as levers that skeletal muscles pull on at joints.",
        "Mineral storage — bone stores about 99% of the body's calcium plus phosphorus, releasing them to the blood as needed.",
        "Blood-cell formation (haematopoiesis) — red bone marrow produces red cells, white cells and platelets.",
        "Triglyceride (energy) storage — yellow bone marrow stores fat."
      ] },
      { h: "Classification of bones by shape", list: [
        "Long bones — longer than wide, e.g. femur, humerus, phalanges.",
        "Short bones — roughly cube-shaped, e.g. carpals and tarsals.",
        "Flat bones — thin and often curved, e.g. sternum, ribs, skull bones.",
        "Irregular bones — complex shapes, e.g. vertebrae and hip bones.",
        "Sesamoid bones — small bones within tendons, e.g. the patella."
      ] },
      { h: "Structure of a long bone", p: "A typical long bone has a tubular shaft, the diaphysis, made of compact bone surrounding a central medullary (marrow) cavity. The expanded ends are the epiphyses, made of spongy bone covered by articular (hyaline) cartilage where they form joints. Between them lies the metaphysis, which in a growing child contains the epiphyseal (growth) plate. The outer surface is covered by the periosteum (a tough vascular membrane) and the internal surfaces are lined by endosteum.", figure: FIG_BONE },
      { h: "Bone tissue and cells", p: "Bone exists as compact (dense) bone, organised into structural units called osteons (Haversian systems), and spongy (cancellous) bone, made of a lattice of trabeculae that house red marrow. Four cell types remodel bone throughout life: osteogenic (stem) cells, osteoblasts (build new bone matrix), osteocytes (mature cells that maintain bone) and osteoclasts (large cells that break bone down). The matrix combines collagen (flexibility) with calcium phosphate as hydroxyapatite (hardness)." },
      { h: "Divisions of the skeleton", p: "The adult skeleton has 206 bones in two divisions. The axial skeleton (80 bones) forms the central axis — the skull, vertebral column, and thoracic cage (ribs and sternum). The appendicular skeleton (126 bones) comprises the bones of the upper and lower limbs and the pectoral (shoulder) and pelvic girdles that attach them to the axial skeleton." },
      { h: "Calcium homeostasis", p: "Blood calcium must be tightly controlled because it is essential for nerve impulses, muscle contraction and blood clotting. When blood calcium falls, parathyroid hormone (PTH) stimulates osteoclasts to release calcium from bone, increases reabsorption in the kidney, and activates vitamin D to boost intestinal absorption. When calcium is high, calcitonin from the thyroid promotes its deposition into bone. Bone therefore acts as the body's calcium 'bank'." },
      { h: "Classification of joints", p: "Joints (articulations) are classified structurally and functionally. Structurally there are fibrous joints (bones joined by fibrous tissue), cartilaginous joints (joined by cartilage) and synovial joints (separated by a fluid-filled cavity). Functionally there are synarthroses (immovable, e.g. skull sutures), amphiarthroses (slightly movable, e.g. the pubic symphysis and intervertebral joints) and diarthroses (freely movable, all synovial joints)." },
      { h: "Synovial joints", p: "Freely movable synovial joints — the most common type — share key features: articular cartilage on the bone ends, a joint cavity enclosed by an articular capsule, a synovial membrane that secretes lubricating synovial fluid, and often ligaments and bursae. Types include hinge (elbow, knee), ball-and-socket (shoulder, hip), pivot (atlas–axis), gliding (intercarpal), saddle (thumb) and condyloid (wrist) joints, each allowing a characteristic range of movement." },
      { h: "Clinical & nursing relevance", p: "In osteoporosis the bone matrix is lost faster than it is replaced, making bones porous and fragile and increasing fracture risk — especially of the hip, wrist and vertebrae in older adults. Fracture healing passes through haematoma formation, soft (fibrocartilaginous) callus, hard (bony) callus and remodelling. Because red marrow forms blood cells, marrow disorders can cause anaemia or impaired immunity. Nurses support bone health through adequate calcium and vitamin D, weight-bearing activity, and falls prevention." }
    ],
    references: REF_AP,
    examQuestions: [
      "List the functions of the skeletal system.",
      "Classify bones by shape with an example of each.",
      "Draw and label the gross structure of a long bone.",
      "Describe how parathyroid hormone and calcitonin regulate blood calcium.",
      "Classify joints functionally and structurally, giving an example of each, and list the features of a synovial joint."
    ],
    assessment: [
      { type: "mcq", q: "The adult human skeleton normally contains how many bones?", options: ["186", "196", "206", "216"], answer: 2, rationale: "There are 206 bones in the adult skeleton." },
      { type: "mcq", q: "The shaft of a long bone is the:", options: ["Epiphysis", "Diaphysis", "Metaphysis", "Periosteum"], answer: 1, rationale: "The diaphysis is the tubular shaft enclosing the medullary cavity." },
      { type: "mcq", q: "Which cells break down bone matrix?", options: ["Osteoblasts", "Osteocytes", "Osteoclasts", "Osteogenic cells"], answer: 2, rationale: "Osteoclasts resorb bone, releasing calcium to the blood." },
      { type: "mcq", q: "Which bone belongs to the axial skeleton?", options: ["Femur", "Sternum", "Humerus", "Scapula"], answer: 1, rationale: "The sternum is part of the thoracic cage (axial skeleton); the others are appendicular." },
      { type: "mcq", q: "The patella is an example of a/an:", options: ["Long bone", "Flat bone", "Irregular bone", "Sesamoid bone"], answer: 3, rationale: "The patella is a sesamoid bone formed within the quadriceps tendon." },
      { type: "mcq", q: "Freely movable joints such as the hip and shoulder are classified as:", options: ["Fibrous", "Cartilaginous", "Synovial", "Sutures"], answer: 2, rationale: "Freely movable joints are synovial; functionally they are diarthroses." },
      { type: "mcq", q: "Which hormone raises blood calcium by stimulating osteoclasts?", options: ["Calcitonin", "Parathyroid hormone", "Insulin", "Thyroxine"], answer: 1, rationale: "PTH raises blood calcium; calcitonin lowers it." },
      { type: "mcq", q: "The structural unit of compact bone is the:", options: ["Trabecula", "Osteon (Haversian system)", "Lamella", "Lacuna"], answer: 1, rationale: "Compact bone is organised into osteons (Haversian systems)." },
      { type: "mcq", q: "The growth in length of a child's long bone occurs at the:", options: ["Periosteum", "Medullary cavity", "Epiphyseal (growth) plate", "Articular cartilage"], answer: 2, rationale: "The epiphyseal plate is the site of lengthwise growth until it ossifies." },
      { type: "mcq", q: "A ball-and-socket joint is found at the:", options: ["Elbow", "Knee", "Shoulder", "Wrist"], answer: 2, rationale: "The shoulder and hip are ball-and-socket joints allowing movement in all planes." },
      { type: "fill", q: "Blood-cell formation in red bone marrow is called ______.", accept: ["haematopoiesis", "hematopoiesis", "haemopoiesis", "hemopoiesis"], rationale: "Haematopoiesis is the production of blood cells in red marrow." },
      { type: "fill", q: "The condition of porous, fragile bone common in older adults is called ______.", accept: ["osteoporosis"], rationale: "Osteoporosis is loss of bone mass leading to fragility fractures." }
    ]
  },

  /* ---------- Placeholders: structured, ready to author ---------- */
  {
    id: "anp-06-muscular",
    unit: "Unit 2 · Support and Movement",
    title: "The Muscular System",
    readMinutes: 22,
    summary: "Muscle types and functions, skeletal-muscle structure, the sliding-filament mechanism, the neuromuscular junction, energy sources, types of contraction and major muscle groups.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of muscle", p: "Muscle tissue makes up about 40% of body mass and is specialised to contract. Its functions are movement of the body and of substances within it (blood, food, urine), maintenance of posture and body position, stabilisation of joints, and the generation of heat (thermogenesis) — shivering can raise heat production several-fold. Muscle has four key properties: excitability, contractility, extensibility and elasticity." },
      { h: "The three types of muscle", list: [
        "Skeletal muscle — striated, voluntary, attached to bone; moves the skeleton.",
        "Cardiac muscle — striated, involuntary, only in the heart; self-exciting and fatigue-resistant.",
        "Smooth muscle — non-striated, involuntary; in the walls of hollow organs and vessels, producing slow sustained contractions (e.g. peristalsis)."
      ] },
      { h: "Levels of skeletal-muscle structure", p: "A whole muscle is wrapped in epimysium and divided into bundles called fascicles (perimysium); each fascicle contains many muscle fibres (cells) surrounded by endomysium. Within each fibre are rod-like myofibrils made of repeating contractile units, the sarcomeres. The sarcomere — bounded by two Z-lines — is the functional unit of contraction.", figure: {
        caption: "Figure 6.1 — A sarcomere: thin (actin) and thick (myosin) filaments between two Z-lines.",
        svg: "<svg viewBox='0 0 460 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Sarcomere'>" +
          "<line x1='60' y1='15' x2='60' y2='105' stroke='#14387A' stroke-width='4'/><line x1='400' y1='15' x2='400' y2='105' stroke='#14387A' stroke-width='4'/>" +
          "<text x='60' y='118' text-anchor='middle' font-family='Inter' font-size='11' fill='#14387A'>Z</text><text x='400' y='118' text-anchor='middle' font-family='Inter' font-size='11' fill='#14387A'>Z</text>" +
          (function(){var s="";for(var k=0;k<4;k++){var y=32+k*16;s+="<line x1='60' y1='"+y+"' x2='210' y2='"+y+"' stroke='#C99A50' stroke-width='2.5'/><line x1='400' y1='"+y+"' x2='250' y2='"+y+"' stroke='#C99A50' stroke-width='2.5'/>";}return s;})() +
          "<rect x='175' y='34' width='110' height='52' rx='6' fill='#2E63B8'/>" +
          "<text x='230' y='64' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#fff'>myosin (thick)</text>" +
          "<text x='120' y='100' text-anchor='middle' font-family='Inter' font-size='11' fill='#A47B36'>actin (thin)</text>" +
          "</svg>"
      } },
      { h: "The sliding-filament mechanism", p: "During contraction the thin (actin) filaments slide over the thick (myosin) filaments, pulling the Z-lines closer and shortening the sarcomere — the filaments themselves do not shorten. Myosin heads form cross-bridges with actin, pivot (the power stroke), detach, and re-attach further along, ratcheting the filaments. This cross-bridge cycle repeats as long as calcium and ATP are present." },
      { h: "Role of calcium, troponin and tropomyosin", p: "At rest, tropomyosin covers the binding sites on actin. When a nerve impulse arrives, calcium ions are released from the sarcoplasmic reticulum and bind to troponin, which moves tropomyosin aside and exposes the binding sites, allowing cross-bridges to form. When stimulation stops, calcium is pumped back and the muscle relaxes." },
      { h: "The neuromuscular junction (NMJ)", p: "A motor neuron meets a muscle fibre at the neuromuscular junction. The nerve impulse triggers release of the neurotransmitter acetylcholine (ACh) into the synaptic cleft; ACh binds receptors on the motor end-plate and depolarises the fibre, initiating contraction. A motor unit is one motor neuron plus all the fibres it supplies; fine-control muscles (e.g. of the eye) have small motor units." },
      { h: "Energy for contraction", p: "Muscles obtain ATP from three sources: stored ATP and creatine phosphate (immediate, a few seconds); anaerobic glycolysis (fast, but produces lactic acid and causes the burning sensation of intense exercise); and aerobic respiration (slow but sustained, the main source during rest and moderate activity). 'Oxygen debt' is the extra oxygen needed afterwards to restore reserves and clear lactic acid." },
      { h: "Types of contraction", list: [
        "Isotonic — the muscle changes length and moves a load: concentric (shortening, e.g. lifting) and eccentric (lengthening under tension, e.g. lowering).",
        "Isometric — tension rises but length does not change (e.g. holding a posture or pushing an immovable wall)."
      ] },
      { h: "Major muscle groups", p: "Important named muscles a nurse should recognise include the deltoid (shoulder), biceps and triceps brachii (arm), pectoralis major (chest), the diaphragm and intercostals (breathing), rectus abdominis (abdomen), gluteus maximus and medius (hip), quadriceps and hamstrings (thigh), and gastrocnemius (calf). Muscles usually work in antagonistic pairs (one flexes, the other extends)." },
      { h: "Clinical & nursing relevance", p: "Disuse causes muscle atrophy, while training causes hypertrophy; immobile patients therefore need passive exercises and early mobilisation. Common intramuscular (IM) injection sites are the vastus lateralis, deltoid and ventrogluteal muscles. After death the lack of ATP prevents cross-bridge detachment, producing the stiffness of rigor mortis. Conditions such as muscular dystrophy and myasthenia gravis (an NMJ disorder) impair contraction." }
    ],
    references: REF_AP,
    examQuestions: [
      "Name the three types of muscle and compare their structure and control.",
      "Describe the sliding-filament theory of muscle contraction.",
      "Explain the role of calcium, troponin and tropomyosin in contraction.",
      "Describe the events at the neuromuscular junction.",
      "Differentiate isotonic and isometric contraction and name three IM injection sites."
    ],
    assessment: [
      { type: "mcq", q: "The functional (contractile) unit of skeletal muscle is the:", options: ["Myofibril", "Sarcomere", "Fascicle", "Myosin head"], answer: 1, rationale: "The sarcomere, bounded by two Z-lines, is the functional unit of contraction." },
      { type: "mcq", q: "According to the sliding-filament theory, during contraction:", options: ["Thick filaments shorten", "Thin filaments slide over thick filaments", "Z-lines move apart", "Actin disappears"], answer: 1, rationale: "Thin (actin) filaments slide over thick (myosin) filaments, shortening the sarcomere without the filaments shortening." },
      { type: "mcq", q: "The neurotransmitter released at the neuromuscular junction is:", options: ["Dopamine", "Noradrenaline", "Acetylcholine", "Serotonin"], answer: 2, rationale: "Acetylcholine is released at the NMJ to depolarise the muscle fibre." },
      { type: "mcq", q: "Which ion directly triggers muscle contraction by binding troponin?", options: ["Sodium", "Potassium", "Calcium", "Chloride"], answer: 2, rationale: "Calcium binds troponin, moving tropomyosin to expose actin binding sites." },
      { type: "mcq", q: "The thick filament of the sarcomere is made of:", options: ["Actin", "Myosin", "Troponin", "Tropomyosin"], answer: 1, rationale: "Myosin forms the thick filament; actin forms the thin filament." },
      { type: "mcq", q: "The immediate reserve that quickly regenerates ATP in muscle is:", options: ["Glycogen", "Creatine phosphate", "Fatty acids", "Lactic acid"], answer: 1, rationale: "Creatine phosphate rapidly rephosphorylates ADP to ATP for the first few seconds of activity." },
      { type: "mcq", q: "Holding a heavy box still, without moving it, is an example of a/an:", options: ["Concentric isotonic contraction", "Eccentric isotonic contraction", "Isometric contraction", "Passive stretch"], answer: 2, rationale: "Isometric contraction generates tension without a change in muscle length." },
      { type: "mcq", q: "A recommended intramuscular injection site in adults is the:", options: ["Biceps brachii", "Vastus lateralis", "Rectus abdominis", "Gastrocnemius"], answer: 1, rationale: "The vastus lateralis, deltoid and ventrogluteal sites are preferred for IM injections." },
      { type: "mcq", q: "Rigor mortis after death occurs because of:", options: ["Excess calcium release", "Depletion of ATP", "Lactic acid build-up", "Loss of acetylcholine"], answer: 1, rationale: "Without ATP, myosin cross-bridges cannot detach from actin, so the muscles stiffen." },
      { type: "mcq", q: "One motor neuron together with all the muscle fibres it stimulates is called a:", options: ["Sarcomere", "Motor unit", "Fascicle", "Myofibril"], answer: 1, rationale: "A motor unit is a motor neuron plus all the fibres it innervates." },
      { type: "fill", q: "The protein that covers actin's binding sites at rest is ______.", accept: ["tropomyosin"], rationale: "Tropomyosin blocks the binding sites until calcium-bound troponin moves it aside." },
      { type: "fill", q: "A whole muscle is divided into bundles of fibres called ______.", accept: ["fascicles", "fascicle"], rationale: "Fascicles are bundles of muscle fibres wrapped in perimysium." }
    ]
  },
  {
    id: "anp-07-cns",
    unit: "Unit 3 · Control and Regulation",
    title: "The Nervous System (CNS)",
    readMinutes: 23,
    summary: "Organization of the nervous system, the neuron and nerve impulse, the brain regions, the spinal cord, meninges and cerebrospinal fluid, the reflex arc, and key neurological nursing applications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Organization of the nervous system", p: "The nervous system is the body's fast control network. It is divided structurally into the central nervous system (CNS) — the brain and spinal cord — and the peripheral nervous system (PNS) — all nerves outside the CNS. Functionally it has a sensory (afferent) division that carries information to the CNS, and a motor (efferent) division that carries commands out to muscles and glands." },
      { h: "The neuron", p: "The neuron is the basic functional cell. It has a cell body (containing the nucleus), dendrites that receive signals, and a single axon that conducts impulses away. Many axons are wrapped in a fatty myelin sheath (formed by Schwann cells in the PNS and oligodendrocytes in the CNS) that speeds conduction; gaps called nodes of Ranvier let impulses 'jump' (saltatory conduction). Supporting neuroglia (glial cells) are very numerous and protect, insulate and nourish the neurons." },
      { h: "The nerve impulse", p: "A resting neuron is polarised (negative inside) because of the sodium-potassium pump. A stimulus opens sodium channels, causing depolarisation; if it reaches threshold an all-or-none action potential travels along the axon. At the synapse the impulse triggers release of neurotransmitters that carry the signal to the next cell." },
      { h: "The cerebrum", p: "The cerebrum is the largest brain part, divided into two hemispheres with a folded cortex. Its four lobes have distinct roles: the frontal lobe (voluntary movement, personality, reasoning, and speech via Broca's area), the parietal lobe (touch, temperature, body awareness), the temporal lobe (hearing, memory, and language comprehension via Wernicke's area), and the occipital lobe (vision)." },
      { h: "Diencephalon, brainstem and cerebellum", list: [
        "Diencephalon — the thalamus (relay station for sensory input) and hypothalamus (controls temperature, hunger, thirst, the autonomic system and the pituitary).",
        "Brainstem — midbrain, pons and medulla oblongata; the medulla houses the vital centres for heart rate, breathing and blood pressure.",
        "Cerebellum — coordinates movement, balance and posture."
      ], figure: { caption: "Figure 7.1 — Major regions of the brain. Add a labelled brain image for detail.", placeholder: true } },
      { h: "The spinal cord", p: "The spinal cord runs from the medulla to about the first or second lumbar vertebra. In cross-section it has central grey matter (cell bodies, in an 'H' shape) surrounded by white matter (myelinated tracts). It has two roles: conducting impulses to and from the brain, and acting as the integration centre for spinal reflexes." },
      { h: "Meninges and cerebrospinal fluid", p: "Three protective membranes — the meninges — cover the CNS: the tough outer dura mater, the middle arachnoid mater, and the delicate inner pia mater. Cerebrospinal fluid (CSF), produced by the choroid plexuses, circulates in the ventricles and the subarachnoid space, cushioning the brain and spinal cord, supporting their weight and removing wastes." },
      { h: "The reflex arc", p: "A reflex is a rapid, involuntary, protective response. Its pathway, the reflex arc, lets the spinal cord respond before the brain is even aware — for example, withdrawing a hand from a hot object.", figure: {
        caption: "Figure 7.2 — The reflex arc: stimulus to response without waiting for the brain.",
        svg: "<svg viewBox='0 0 720 90' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Reflex arc'>" +
          "<defs><marker id='ra7' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          [["Receptor",6,96],["Sensory neuron",150,120],["Spinal cord (integration)",312,150],["Motor neuron",506,108],["Effector",640,80]].map(function(p,i){var x=p[1];var w=p[2];return "<rect x='"+x+"' y='28' width='"+w+"' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+w/2)+"' y='52' text-anchor='middle' font-family='Inter' font-size='10.5' font-weight='700' fill='#14387A'>"+p[0]+"</text>"+(i<4?"<line x1='"+(x+w)+"' y1='48' x2='"+(x+w+12)+"' y2='48' stroke='#2E63B8' stroke-width='2' marker-end='url(#ra7)'/>":"");}).join("") +
          "</svg>"
      } },
      { h: "Clinical & nursing relevance", p: "Neurological assessment is central to nursing. The Glasgow Coma Scale (eye, verbal and motor responses) tracks level of consciousness. Raised intracranial pressure (from bleeding or swelling) is an emergency, classically causing a falling pulse with rising blood pressure (Cushing's reflex), headache and altered pupils. A stroke interrupts blood flow to part of the brain, causing loss of the function that area controlled. CSF is sampled by lumbar puncture (below the cord's end) to diagnose meningitis." }
    ],
    references: REF_AP,
    examQuestions: [
      "Draw and label a neuron and state the function of each part.",
      "Name the four lobes of the cerebrum and give one function of each.",
      "Describe the structure and functions of the spinal cord.",
      "Name the meninges and describe the formation, circulation and functions of CSF.",
      "Describe the components of a reflex arc with an example."
    ],
    assessment: [
      { type: "mcq", q: "The central nervous system consists of the:", options: ["Brain and cranial nerves", "Brain and spinal cord", "Spinal cord and spinal nerves", "Brain and autonomic nerves"], answer: 1, rationale: "The CNS is the brain and spinal cord; nerves outside form the PNS." },
      { type: "mcq", q: "Which lobe of the cerebrum is responsible for vision?", options: ["Frontal", "Parietal", "Temporal", "Occipital"], answer: 3, rationale: "The occipital lobe processes visual information." },
      { type: "mcq", q: "The vital centres controlling heart rate and breathing are located in the:", options: ["Cerebellum", "Thalamus", "Medulla oblongata", "Frontal lobe"], answer: 2, rationale: "The medulla oblongata contains the cardiac, respiratory and vasomotor centres." },
      { type: "mcq", q: "The part of the brain that coordinates balance and movement is the:", options: ["Cerebrum", "Cerebellum", "Hypothalamus", "Pons"], answer: 1, rationale: "The cerebellum coordinates voluntary movement, balance and posture." },
      { type: "mcq", q: "The outermost, toughest meningeal layer is the:", options: ["Pia mater", "Arachnoid mater", "Dura mater", "Choroid plexus"], answer: 2, rationale: "The dura mater is the tough outer meninx; pia is the delicate inner layer." },
      { type: "mcq", q: "Cerebrospinal fluid is produced by the:", options: ["Choroid plexus", "Pituitary gland", "Arachnoid villi", "Thalamus"], answer: 0, rationale: "The choroid plexuses in the ventricles produce CSF." },
      { type: "mcq", q: "The hypothalamus controls all of the following EXCEPT:", options: ["Body temperature", "Hunger and thirst", "The pituitary gland", "Visual acuity"], answer: 3, rationale: "Vision is an occipital-lobe function; the hypothalamus governs temperature, appetite, autonomic activity and the pituitary." },
      { type: "mcq", q: "In a withdrawal reflex, integration occurs in the:", options: ["Cerebrum", "Spinal cord", "Cerebellum", "Medulla"], answer: 1, rationale: "Spinal reflexes are integrated in the spinal cord, allowing a response before the brain is aware." },
      { type: "mcq", q: "A lumbar puncture to sample CSF is performed:", options: ["Above the brainstem", "In a cerebral ventricle", "Below the end of the spinal cord", "In the dural venous sinus"], answer: 2, rationale: "LP is done below the cord's termination (around L3-L4) to avoid injuring the cord." },
      { type: "mcq", q: "The Glasgow Coma Scale assesses:", options: ["Blood pressure", "Level of consciousness", "Reflexes only", "Pupil colour"], answer: 1, rationale: "The GCS scores eye, verbal and motor responses to gauge consciousness." },
      { type: "fill", q: "Myelinated gaps along an axon that speed conduction are the nodes of ______.", accept: ["ranvier"], rationale: "At the nodes of Ranvier the impulse jumps (saltatory conduction), increasing speed." },
      { type: "fill", q: "The motor speech area in the frontal lobe is called ______ area.", accept: ["broca's", "brocas", "broca"], rationale: "Broca's area governs the motor production of speech; Wernicke's area governs comprehension." }
    ]
  },
  {
    id: "anp-08-pns",
    unit: "Unit 3 · Control and Regulation",
    title: "The Nervous System (PNS & ANS)",
    readMinutes: 20,
    summary: "Cranial and spinal nerves, the somatic nervous system, and the autonomic nervous system — sympathetic vs parasympathetic divisions and their clinical effects.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The peripheral nervous system", p: "The peripheral nervous system (PNS) is all neural tissue outside the brain and spinal cord. It connects the CNS to the rest of the body through cranial and spinal nerves and is divided functionally into the somatic nervous system (voluntary control of skeletal muscle) and the autonomic nervous system (involuntary control of internal organs)." },
      { h: "Cranial nerves", p: "There are 12 pairs of cranial nerves arising mainly from the brainstem, numbered I to XII. Some are purely sensory (I olfactory - smell, II optic - vision, VIII vestibulocochlear - hearing and balance), some purely motor, and some mixed. The vagus nerve (X) is especially important to nurses: it carries parasympathetic fibres to the heart, lungs and digestive organs." },
      { h: "Spinal nerves", p: "There are 31 pairs of spinal nerves, each formed from a dorsal (sensory) root and a ventral (motor) root, making them mixed nerves. They are grouped as 8 cervical, 12 thoracic, 5 lumbar, 5 sacral and 1 coccygeal. Branches interlace to form plexuses (e.g. the brachial plexus supplying the arm, and the sacral plexus, source of the sciatic nerve)." },
      { h: "Somatic vs autonomic", p: "The somatic system produces conscious, voluntary movement of skeletal muscle via a single motor neuron using acetylcholine. The autonomic nervous system (ANS) acts automatically on cardiac muscle, smooth muscle and glands, usually via a two-neuron chain, to maintain homeostasis without conscious effort." },
      { h: "The two divisions of the ANS", p: "The ANS has two opposing divisions that keep organs in balance. The sympathetic division (thoracolumbar outflow) prepares the body for 'fight or flight'; the parasympathetic division (craniosacral outflow) promotes 'rest and digest'. Most organs receive both, allowing fine control." },
      { h: "Sympathetic effects ('fight or flight')", list: [
        "Heart rate and force increase; blood pressure rises.",
        "Bronchioles dilate to take in more air.",
        "Pupils dilate; the person becomes more alert.",
        "Blood is diverted to skeletal muscle; digestion slows.",
        "The liver releases glucose; sweating increases.",
        "The main transmitter at target organs is noradrenaline (norepinephrine)."
      ] },
      { h: "Parasympathetic effects ('rest and digest')", list: [
        "Heart rate slows.",
        "Bronchioles constrict.",
        "Pupils constrict.",
        "Digestive activity and secretions increase.",
        "The bladder contracts to empty.",
        "The transmitter is acetylcholine."
      ], figure: { caption: "Figure 8.1 — Sympathetic vs parasympathetic effects on major organs. Add a comparison diagram if available.", placeholder: true } },
      { h: "Clinical & nursing relevance", p: "Many drugs and disease states act through the ANS. Sympathetic stimulation (or stress, pain, or drugs like adrenaline) raises pulse, blood pressure and blood glucose. Anticholinergic (antimuscarinic) drugs block parasympathetic action, causing dry mouth, flushing, blurred vision, confusion, fast heart rate and urinary retention. Beta-blockers blunt sympathetic effects on the heart. Understanding these helps the nurse anticipate drug effects and interpret vital signs." }
    ],
    references: REF_AP,
    examQuestions: [
      "Differentiate the somatic and autonomic nervous systems.",
      "How many pairs of cranial and spinal nerves are there? Name the functions of any three cranial nerves.",
      "Compare the sympathetic and parasympathetic divisions of the ANS.",
      "List the body responses produced by sympathetic stimulation.",
      "Explain the effects of anticholinergic drugs in terms of autonomic physiology."
    ],
    assessment: [
      { type: "mcq", q: "How many pairs of spinal nerves are there?", options: ["12", "24", "31", "33"], answer: 2, rationale: "There are 31 pairs of spinal nerves." },
      { type: "mcq", q: "How many pairs of cranial nerves are there?", options: ["10", "12", "20", "31"], answer: 1, rationale: "There are 12 pairs of cranial nerves." },
      { type: "mcq", q: "The cranial nerve carrying parasympathetic fibres to the heart and gut is the:", options: ["Optic (II)", "Facial (VII)", "Vagus (X)", "Hypoglossal (XII)"], answer: 2, rationale: "The vagus nerve (X) supplies parasympathetic fibres to thoracic and abdominal organs." },
      { type: "mcq", q: "The sympathetic division is also called the ______ outflow.", options: ["Craniosacral", "Thoracolumbar", "Cervical", "Coccygeal"], answer: 1, rationale: "Sympathetic fibres emerge from the thoracic and lumbar cord (thoracolumbar)." },
      { type: "mcq", q: "Which is a 'fight or flight' (sympathetic) response?", options: ["Pupil constriction", "Increased heart rate", "Increased digestion", "Bladder contraction"], answer: 1, rationale: "Sympathetic activation raises heart rate; the others are parasympathetic." },
      { type: "mcq", q: "The main neurotransmitter released by the parasympathetic system at target organs is:", options: ["Noradrenaline", "Dopamine", "Acetylcholine", "Adrenaline"], answer: 2, rationale: "Parasympathetic effects are mediated by acetylcholine." },
      { type: "mcq", q: "Sympathetic stimulation causes the bronchioles to:", options: ["Constrict", "Dilate", "Fill with mucus", "Collapse"], answer: 1, rationale: "Bronchodilation increases airflow during 'fight or flight'." },
      { type: "mcq", q: "Spinal nerves are 'mixed' because they contain:", options: ["Only sensory fibres", "Only motor fibres", "Both sensory and motor fibres", "Only autonomic fibres"], answer: 2, rationale: "Each spinal nerve has a dorsal (sensory) and ventral (motor) root, making it mixed." },
      { type: "mcq", q: "An anticholinergic drug would most likely cause:", options: ["Bradycardia and sweating", "Dry mouth and urinary retention", "Pupil constriction", "Increased salivation"], answer: 1, rationale: "Blocking parasympathetic action causes dry mouth, urinary retention, blurred vision and fast heart rate." },
      { type: "mcq", q: "The sciatic nerve arises from the:", options: ["Cervical plexus", "Brachial plexus", "Sacral plexus", "Cardiac plexus"], answer: 2, rationale: "The sciatic nerve, the largest nerve, arises from the sacral plexus." },
      { type: "fill", q: "The autonomic division that promotes 'rest and digest' is the ______ division.", accept: ["parasympathetic"], rationale: "The parasympathetic division conserves energy and supports digestion." },
      { type: "fill", q: "Voluntary control of skeletal muscle is carried out by the ______ nervous system.", accept: ["somatic"], rationale: "The somatic nervous system controls voluntary skeletal-muscle movement." }
    ]
  },
  {
    id: "anp-09-senses",
    unit: "Unit 3 · Control and Regulation",
    title: "Special Senses (Vision & Hearing)",
    readMinutes: 21,
    summary: "Anatomy and physiology of the eye (vision) and the ear (hearing and balance), with common disorders relevant to nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of the special senses", p: "The special senses — vision, hearing, balance (equilibrium), taste and smell — depend on specialised receptors housed in complex organs. This topic focuses on the two most clinically important organs: the eye and the ear." },
      { h: "Layers of the eye", p: "The eyeball has three layers (tunics). The outer fibrous tunic is the tough white sclera, continuous in front with the transparent cornea, which bends (refracts) light. The middle vascular tunic (uvea) includes the choroid, the ciliary body (which adjusts the lens) and the iris, whose central pupil controls the amount of light entering. The inner nervous tunic is the retina, which contains the photoreceptors.", figure: { caption: "Figure 9.1 — Sagittal section of the eye. Add a labelled image for detail.", placeholder: true } },
      { h: "The retina and photoreceptors", p: "The retina holds two kinds of photoreceptor: rods, which work in dim light and detect black-and-white and movement, and cones, which need bright light and provide colour and sharp detail. Cones are concentrated at the macula and its central fovea (the point of sharpest vision). Nerve signals leave through the optic nerve; the optic disc, where it exits, has no receptors and forms the 'blind spot'." },
      { h: "How we see", p: "Light is refracted by the cornea and lens to focus a sharp, inverted image on the retina. The lens changes shape for near and far focus — a process called accommodation. Photoreceptors convert light into nerve impulses that travel along the optic nerve, partly cross at the optic chiasma, and reach the occipital lobe, where the image is interpreted the right way up." },
      { h: "Common eye disorders", list: [
        "Myopia (short-sight) — the image focuses in front of the retina; corrected with concave lenses.",
        "Hyperopia (long-sight) — the image focuses behind the retina; corrected with convex lenses.",
        "Cataract — clouding of the lens, causing blurred vision.",
        "Glaucoma — raised intra-ocular pressure that can damage the optic nerve and cause blindness if untreated."
      ] },
      { h: "Structure of the ear", p: "The ear has three parts. The outer ear (pinna and ear canal) channels sound to the tympanic membrane (eardrum). The middle ear is an air-filled cavity holding three tiny bones (the ossicles: malleus, incus and stapes) that amplify vibrations; it connects to the throat by the Eustachian (auditory) tube, which equalises pressure. The inner ear contains the fluid-filled cochlea (hearing) and the vestibular apparatus (balance).", figure: { caption: "Figure 9.2 — The outer, middle and inner ear. Add a labelled image for detail.", placeholder: true } },
      { h: "Hearing and balance", p: "Sound vibrations pass from the eardrum through the ossicles to the cochlea, where the spiral organ (of Corti) converts them into nerve impulses carried by the vestibulocochlear nerve (VIII) to the temporal lobe. Balance is monitored by the three semicircular canals (which detect rotation) and the vestibule (which detects head position and linear movement)." },
      { h: "Clinical & nursing relevance", p: "Hearing loss is either conductive (a problem of the outer or middle ear, e.g. wax or middle-ear infection) or sensorineural (damage to the cochlea or nerve, e.g. from age or ototoxic drugs such as gentamicin). Otitis media (middle-ear infection) is common in children because their Eustachian tubes are short and horizontal. Glaucoma and cataract are leading causes of preventable blindness, so nurses promote regular eye checks, especially for people with diabetes and the elderly." }
    ],
    references: REF_AP,
    examQuestions: [
      "Name the three layers of the eye and the main structures in each.",
      "Differentiate rods and cones.",
      "Explain how an image is formed on the retina, including accommodation.",
      "Describe the structure of the ear from outer to inner.",
      "Differentiate conductive and sensorineural hearing loss with examples."
    ],
    assessment: [
      { type: "mcq", q: "The transparent front part of the eye that refracts most incoming light is the:", options: ["Lens", "Cornea", "Retina", "Sclera"], answer: 1, rationale: "The cornea performs most refraction; the lens fine-tunes focus." },
      { type: "mcq", q: "Photoreceptors responsible for colour vision are the:", options: ["Rods", "Cones", "Bipolar cells", "Ganglion cells"], answer: 1, rationale: "Cones provide colour and sharp vision in bright light; rods work in dim light." },
      { type: "mcq", q: "The point of sharpest vision on the retina is the:", options: ["Optic disc", "Fovea (macula)", "Blind spot", "Ora serrata"], answer: 1, rationale: "The fovea within the macula has the highest density of cones." },
      { type: "mcq", q: "Adjustment of lens shape for near and far vision is called:", options: ["Refraction", "Accommodation", "Convergence", "Adaptation"], answer: 1, rationale: "Accommodation changes lens curvature to focus on objects at different distances." },
      { type: "mcq", q: "Raised intra-ocular pressure that can damage the optic nerve is:", options: ["Cataract", "Glaucoma", "Myopia", "Conjunctivitis"], answer: 1, rationale: "Glaucoma is increased intra-ocular pressure threatening the optic nerve." },
      { type: "mcq", q: "The three ossicles of the middle ear are the:", options: ["Malleus, incus, stapes", "Cochlea, vestibule, canals", "Pinna, canal, drum", "Hammer, vestibule, cochlea"], answer: 0, rationale: "The ossicles are the malleus, incus and stapes." },
      { type: "mcq", q: "The organ of hearing within the cochlea is the:", options: ["Vestibule", "Semicircular canal", "Organ of Corti", "Eustachian tube"], answer: 2, rationale: "The spiral organ (of Corti) converts vibrations into nerve impulses." },
      { type: "mcq", q: "Balance is monitored mainly by the:", options: ["Cochlea", "Semicircular canals and vestibule", "Tympanic membrane", "Ossicles"], answer: 1, rationale: "The semicircular canals detect rotation and the vestibule detects head position." },
      { type: "mcq", q: "The auditory (Eustachian) tube connects the middle ear to the:", options: ["Inner ear", "Throat (pharynx)", "Brain", "Outer ear"], answer: 1, rationale: "The Eustachian tube links the middle ear to the pharynx and equalises pressure." },
      { type: "mcq", q: "Damage to the cochlea or auditory nerve causes ______ hearing loss.", options: ["Conductive", "Sensorineural", "Temporary", "Mixed only"], answer: 1, rationale: "Sensorineural loss involves the cochlea or nerve; conductive loss involves the outer/middle ear." },
      { type: "fill", q: "The coloured part of the eye that controls pupil size is the ______.", accept: ["iris"], rationale: "The iris adjusts the pupil to regulate light entering the eye." },
      { type: "fill", q: "The cranial nerve carrying impulses for both hearing and balance is the ______ nerve.", accept: ["vestibulocochlear", "viii", "auditory", "8th"], rationale: "The vestibulocochlear nerve (VIII) carries hearing and balance information." }
    ]
  },
  {
    id: "anp-10-endocrine",
    unit: "Unit 3 · Control and Regulation",
    title: "The Endocrine System",
    readMinutes: 23,
    summary: "Hormones and feedback control, the hypothalamus and pituitary, the thyroid, parathyroids, adrenals, pancreas and gonads, and the endocrine disorders nurses encounter most.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Endocrine vs nervous control", p: "The endocrine system is the body's slower, longer-acting control network. Ductless endocrine glands release chemical messengers called hormones directly into the bloodstream, which carries them to distant target cells bearing specific receptors. Compared with the fast, brief actions of the nervous system, hormonal effects are slower in onset but more sustained." },
      { h: "How hormones work and are controlled", p: "Hormones are mostly either steroid (lipid-soluble, e.g. cortisol and sex hormones) or protein/amine (water-soluble, e.g. insulin and adrenaline). Their secretion is governed largely by negative feedback: a rising hormone level (or its effect) switches off further release. For example, rising thyroid hormone inhibits the pituitary's TSH output, keeping levels stable." },
      { h: "The hypothalamus and pituitary", p: "The hypothalamus links the nervous and endocrine systems and controls the pituitary gland (the 'master gland'). The anterior pituitary secretes growth hormone (GH), thyroid-stimulating hormone (TSH), adrenocorticotrophic hormone (ACTH), follicle-stimulating hormone (FSH), luteinising hormone (LH) and prolactin. The posterior pituitary stores and releases two hypothalamic hormones: antidiuretic hormone (ADH) and oxytocin.", figure: {
        caption: "Figure 10.1 — Hypothalamic-pituitary control with negative feedback.",
        svg: "<svg viewBox='0 0 560 150' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Hypothalamic pituitary axis'>" +
          "<defs><marker id='hp10' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          [["Hypothalamus",20,150],["Anterior pituitary",215,150],["Target gland",410,130]].map(function(p,i){var x=p[1];var w=p[2];return "<rect x='"+x+"' y='30' width='"+w+"' height='44' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+w/2)+"' y='57' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>"+p[0]+"</text>"+(i<2?"<line x1='"+(x+w)+"' y1='52' x2='"+(x+w+15)+"' y2='52' stroke='#2E63B8' stroke-width='2' marker-end='url(#hp10)'/>":"");}).join("") +
          "<path d='M475,74 L475,120 L95,120 L95,74' fill='none' stroke='#B85C5C' stroke-width='2' stroke-dasharray='5 4' marker-end='url(#hp10)'/><text x='287' y='137' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#B85C5C'>Hormone feeds back to inhibit release</text>" +
          "</svg>"
      } },
      { h: "Thyroid and parathyroid glands", p: "The thyroid gland secretes thyroxine (T4) and tri-iodothyronine (T3), which set the body's metabolic rate, and calcitonin, which lowers blood calcium. The four parathyroid glands secrete parathyroid hormone (PTH), the main hormone raising blood calcium (by acting on bone, kidney and gut). Iodine is essential for making thyroid hormone." },
      { h: "The adrenal glands", p: "Each adrenal gland has two parts. The adrenal cortex secretes steroid hormones: cortisol (a glucocorticoid that raises blood glucose and helps the body cope with stress), aldosterone (a mineralocorticoid that conserves sodium and water and supports blood pressure), and small amounts of sex hormones. The adrenal medulla secretes adrenaline (epinephrine) and noradrenaline, reinforcing the sympathetic 'fight or flight' response." },
      { h: "The pancreas (endocrine role)", p: "The islets of Langerhans in the pancreas regulate blood glucose with two opposing hormones: insulin (from beta cells) lowers blood glucose by driving it into cells, while glucagon (from alpha cells) raises blood glucose by releasing it from the liver. Together they keep blood glucose within a narrow range." },
      { h: "Gonads and other glands", p: "The ovaries secrete oestrogen and progesterone, and the testes secrete testosterone, driving reproductive development and function. The pineal gland secretes melatonin, which regulates the sleep-wake cycle, and the thymus secretes hormones important for immune (T-cell) development." },
      { h: "Clinical & nursing relevance", list: [
        "Diabetes mellitus — lack of insulin (type 1) or insulin resistance (type 2) raises blood glucose; nurses monitor glucose, give insulin and teach self-care.",
        "Hypothyroidism (slow metabolism: tiredness, weight gain, cold intolerance) vs hyperthyroidism (fast metabolism: weight loss, tachycardia, heat intolerance).",
        "Cushing's syndrome (excess cortisol) vs Addison's disease (cortisol deficiency).",
        "ADH problems — too little causes diabetes insipidus (large volumes of dilute urine); too much (SIADH) causes water retention."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "Differentiate endocrine and nervous control of the body.",
      "Name the hormones of the anterior and posterior pituitary and one function of each.",
      "Describe how blood calcium and blood glucose are each regulated by hormones.",
      "Compare the hormones and effects of the adrenal cortex and medulla.",
      "Compare hypothyroidism and hyperthyroidism."
    ],
    assessment: [
      { type: "mcq", q: "Endocrine glands release their hormones into the:", options: ["Ducts", "Bloodstream", "Digestive tract", "Air sacs"], answer: 1, rationale: "Endocrine (ductless) glands secrete hormones directly into the blood." },
      { type: "mcq", q: "The 'master gland' controlled by the hypothalamus is the:", options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"], answer: 1, rationale: "The pituitary is the master gland, itself controlled by the hypothalamus." },
      { type: "mcq", q: "Which hormone lowers blood glucose?", options: ["Glucagon", "Insulin", "Cortisol", "Adrenaline"], answer: 1, rationale: "Insulin from pancreatic beta cells lowers blood glucose; glucagon raises it." },
      { type: "mcq", q: "Parathyroid hormone (PTH) acts to:", options: ["Lower blood calcium", "Raise blood calcium", "Lower blood glucose", "Raise blood potassium"], answer: 1, rationale: "PTH raises blood calcium; calcitonin lowers it." },
      { type: "mcq", q: "Aldosterone, from the adrenal cortex, mainly causes the body to retain:", options: ["Potassium", "Sodium and water", "Calcium", "Glucose"], answer: 1, rationale: "Aldosterone conserves sodium and water, supporting blood pressure." },
      { type: "mcq", q: "Which hormone is released by the posterior pituitary?", options: ["TSH", "Growth hormone", "Antidiuretic hormone (ADH)", "ACTH"], answer: 2, rationale: "The posterior pituitary releases ADH and oxytocin; the others are anterior pituitary hormones." },
      { type: "mcq", q: "The hormones of the adrenal medulla are:", options: ["Cortisol and aldosterone", "Adrenaline and noradrenaline", "Insulin and glucagon", "T3 and T4"], answer: 1, rationale: "The adrenal medulla secretes adrenaline and noradrenaline (catecholamines)." },
      { type: "mcq", q: "A deficiency of insulin or insulin resistance leads to:", options: ["Diabetes insipidus", "Diabetes mellitus", "Addison's disease", "Goitre"], answer: 1, rationale: "Diabetes mellitus is caused by insufficient insulin (type 1) or insulin resistance (type 2)." },
      { type: "mcq", q: "Weight loss, rapid heart rate and heat intolerance suggest:", options: ["Hypothyroidism", "Hyperthyroidism", "Cushing's disease", "Diabetes insipidus"], answer: 1, rationale: "Excess thyroid hormone speeds metabolism, causing weight loss, tachycardia and heat intolerance." },
      { type: "mcq", q: "The element essential for the synthesis of thyroid hormones is:", options: ["Iron", "Calcium", "Iodine", "Zinc"], answer: 2, rationale: "Iodine is required to make T3 and T4; deficiency can cause goitre." },
      { type: "fill", q: "The pancreatic hormone that raises blood glucose is ______.", accept: ["glucagon"], rationale: "Glucagon from alpha cells raises blood glucose; insulin lowers it." },
      { type: "fill", q: "Most hormone secretion is controlled by ______ feedback.", accept: ["negative"], rationale: "Negative feedback keeps hormone levels within a stable range." }
    ]
  },
  {
    id: "anp-11-blood",
    unit: "Unit 4 · Transport and Defense",
    title: "Hematology (Blood)",
    readMinutes: 23,
    summary: "Functions and composition of blood, red and white cells, platelets and haemostasis, and the ABO and Rh blood groups with their transfusion rules.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of blood", p: "Blood is a fluid connective tissue, about 5 litres in an adult. It performs three broad functions: transport (oxygen, carbon dioxide, nutrients, hormones and wastes), regulation (of body temperature, pH and fluid balance), and protection (clotting to prevent blood loss, and white cells and antibodies to fight infection)." },
      { h: "Composition of blood", p: "When spun, blood separates into about 55% plasma and 45% formed elements. Plasma is over 90% water and carries plasma proteins — albumin (maintains osmotic pressure), globulins (antibodies and transport) and fibrinogen (clotting) — plus nutrients, wastes, hormones and electrolytes. The formed elements are red blood cells, white blood cells and platelets.", figure: {
        caption: "Figure 11.1 — Blood separates into ~55% plasma and ~45% formed elements.",
        svg: "<svg viewBox='0 0 200 230' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Blood composition'>" +
          "<rect x='70' y='10' width='60' height='210' rx='8' fill='none' stroke='#6B7785' stroke-width='2'/>" +
          "<rect x='72' y='12' width='56' height='115' fill='#F1E9DC'/><text x='100' y='66' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#A47B36'>Plasma</text><text x='100' y='82' text-anchor='middle' font-family='Inter' font-size='10' fill='#A47B36'>~55%</text>" +
          "<rect x='72' y='127' width='56' height='8' fill='#EDF2F4'/><text x='138' y='134' font-family='Inter' font-size='8' fill='#6B7785'>WBC + platelets</text>" +
          "<rect x='72' y='135' width='56' height='83' fill='#B85C5C'/><text x='100' y='180' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#fff'>RBCs</text><text x='100' y='196' text-anchor='middle' font-family='Inter' font-size='10' fill='#fff'>~45%</text>" +
          "</svg>"
      } },
      { h: "Red blood cells (erythrocytes)", p: "Red cells are biconcave discs without a nucleus, packed with the protein haemoglobin, which binds oxygen for transport and gives blood its red colour. Their production (erythropoiesis) in red bone marrow is stimulated by the hormone erythropoietin from the kidney when oxygen is low. Red cells live about 120 days and are then broken down in the spleen and liver; the iron is recycled and the haem is converted to bilirubin." },
      { h: "White blood cells (leucocytes)", p: "White cells defend the body against infection. Granulocytes have granules: neutrophils (the most numerous; phagocytose bacteria), eosinophils (attack parasites and moderate allergy) and basophils (release histamine in inflammation). Agranulocytes are lymphocytes (T and B cells of specific immunity) and monocytes (which become macrophages, the body's large phagocytes)." },
      { h: "Platelets and haemostasis", p: "Platelets (thrombocytes) are cell fragments essential for stopping bleeding. Haemostasis occurs in three steps: vascular spasm (the vessel constricts), platelet plug formation (platelets stick to the injury), and coagulation (a cascade of clotting factors converts fibrinogen into fibrin threads that trap cells to form a clot). Vitamin K and calcium are needed for several clotting factors made by the liver." },
      { h: "ABO blood groups", p: "Red cells carry surface antigens that define blood groups. In the ABO system: group A has A antigens (and anti-B antibodies), group B has B antigens (anti-A), group AB has both antigens (no antibodies — the universal recipient), and group O has neither antigen (both antibodies — the universal donor). Giving incompatible blood causes the recipient's antibodies to clump (agglutinate) the donor cells, a dangerous transfusion reaction.", figure: {
        caption: "Figure 11.2 — ABO antigens and antibodies.",
        svg: "<svg viewBox='0 0 460 150' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='ABO blood groups'>" +
          [["A","A antigen","anti-B"],["B","B antigen","anti-A"],["AB","A and B","none"],["O","none","anti-A & anti-B"]].map(function(g,i){var x=10+i*112;return "<rect x='"+x+"' y='12' width='100' height='118' rx='10' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+50)+"' y='44' text-anchor='middle' font-family='Inter' font-size='22' font-weight='800' fill='#14387A'>"+g[0]+"</text><text x='"+(x+50)+"' y='78' text-anchor='middle' font-family='Inter' font-size='10' fill='#1F2A33'>Ag: "+g[1]+"</text><text x='"+(x+50)+"' y='102' text-anchor='middle' font-family='Inter' font-size='10' fill='#B85C5C'>Ab: "+g[2]+"</text>";}).join("") +
          "</svg>"
      } },
      { h: "The Rh system", p: "The Rh (Rhesus) system depends on the D antigen: people are Rh-positive if they have it and Rh-negative if they do not. Rh matters in pregnancy: an Rh-negative mother carrying an Rh-positive baby can form anti-D antibodies that attack the red cells of a future Rh-positive baby (haemolytic disease of the newborn). This is prevented by giving anti-D immunoglobulin. Overall, O-negative is the universal donor and AB-positive the universal recipient." },
      { h: "Clinical & nursing relevance", list: [
        "Anaemia — too few red cells or too little haemoglobin, causing fatigue and pallor (iron-deficiency is the commonest).",
        "Leukaemia — cancer of white cells.",
        "Thrombocytopenia / haemophilia — bleeding disorders from too few platelets or missing clotting factors.",
        "Blood transfusion — always confirm ABO and Rh compatibility and check the patient's identity to prevent fatal reactions."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "List the functions of blood and describe its composition.",
      "Describe the structure, function and life cycle of red blood cells.",
      "Classify white blood cells and give the function of each type.",
      "Describe the steps of haemostasis (clotting).",
      "Explain the ABO and Rh blood-group systems and the principles of safe transfusion."
    ],
    assessment: [
      { type: "mcq", q: "The oxygen-carrying protein of red blood cells is:", options: ["Albumin", "Haemoglobin", "Fibrinogen", "Globulin"], answer: 1, rationale: "Haemoglobin binds and transports oxygen and gives blood its red colour." },
      { type: "mcq", q: "Approximately what percentage of blood is plasma?", options: ["25%", "45%", "55%", "75%"], answer: 2, rationale: "Plasma is about 55% of blood; formed elements about 45%." },
      { type: "mcq", q: "The most numerous white blood cells, which phagocytose bacteria, are:", options: ["Lymphocytes", "Neutrophils", "Eosinophils", "Basophils"], answer: 1, rationale: "Neutrophils are the most abundant WBCs and are key bacterial phagocytes." },
      { type: "mcq", q: "Erythropoietin, which stimulates red-cell production, is released by the:", options: ["Liver", "Kidney", "Spleen", "Bone marrow"], answer: 1, rationale: "The kidney releases erythropoietin when blood oxygen is low." },
      { type: "mcq", q: "During coagulation, fibrinogen is converted to:", options: ["Albumin", "Fibrin", "Globulin", "Platelets"], answer: 1, rationale: "Fibrinogen is converted to fibrin threads that form the clot meshwork." },
      { type: "mcq", q: "The universal blood donor group is:", options: ["A positive", "AB positive", "O negative", "B negative"], answer: 2, rationale: "O negative has no A, B or D antigens, so it is the universal donor." },
      { type: "mcq", q: "Blood group AB is the universal recipient because it has:", options: ["Both antibodies", "No antigens", "No antibodies", "Only anti-A"], answer: 2, rationale: "Group AB has no anti-A or anti-B antibodies, so it can receive any ABO group." },
      { type: "mcq", q: "The average lifespan of a red blood cell is about:", options: ["7 days", "30 days", "120 days", "1 year"], answer: 2, rationale: "Red cells circulate for about 120 days before being recycled in the spleen and liver." },
      { type: "mcq", q: "Which vitamin is required by the liver to make several clotting factors?", options: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"], answer: 2, rationale: "Vitamin K is needed for synthesis of several clotting factors." },
      { type: "mcq", q: "A shortage of platelets leading to easy bruising and bleeding is called:", options: ["Anaemia", "Leukaemia", "Thrombocytopenia", "Polycythaemia"], answer: 2, rationale: "Thrombocytopenia is a low platelet count, impairing clotting." },
      { type: "fill", q: "The first step of haemostasis, in which the injured vessel narrows, is vascular ______.", accept: ["spasm", "constriction"], rationale: "Vascular spasm (constriction) is the immediate first response to vessel injury." },
      { type: "fill", q: "The plasma protein chiefly responsible for osmotic pressure is ______.", accept: ["albumin"], rationale: "Albumin maintains plasma (oncotic) osmotic pressure, holding fluid in vessels." }
    ]
  },
  {
    id: "anp-12-heart",
    unit: "Unit 4 · Transport and Defense",
    title: "Cardiovascular System (Heart)",
    readMinutes: 23,
    summary: "Heart location and layers, chambers and valves, the pathway of blood flow, coronary circulation, the conduction system and cardiac cycle, and key cardiac conditions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Location and covering", p: "The heart is a muscular pump about the size of a fist, lying in the mediastinum between the lungs, with its apex pointing down and to the left. It is enclosed in a double-layered sac, the pericardium, which contains a little lubricating fluid that lets the heart beat without friction." },
      { h: "Layers of the heart wall", list: [
        "Epicardium — the thin outer layer (visceral pericardium).",
        "Myocardium — the thick middle layer of cardiac muscle that does the pumping.",
        "Endocardium — the smooth inner lining continuous with the vessels."
      ] },
      { h: "Chambers and valves", p: "The heart has four chambers: two upper atria (receiving chambers) and two lower ventricles (pumping chambers). Valves keep blood moving one way. The atrioventricular (AV) valves lie between atria and ventricles — the tricuspid valve on the right and the bicuspid (mitral) valve on the left. The semilunar valves guard the exits — the pulmonary valve into the pulmonary artery and the aortic valve into the aorta. The heart sounds 'lub-dub' are the valves closing." },
      { h: "Pathway of blood through the heart", p: "Deoxygenated blood from the body enters the right atrium, passes the tricuspid valve to the right ventricle, and is pumped through the pulmonary valve and pulmonary arteries to the lungs. Oxygenated blood returns by the pulmonary veins to the left atrium, passes the mitral valve to the left ventricle, and is pumped through the aortic valve into the aorta to the whole body. The left ventricle has the thickest wall because it pumps against the highest pressure.", figure: {
        caption: "Figure 12.1 — One-way pathway of blood through the heart and lungs.",
        svg: "<svg viewBox='0 0 720 100' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Blood flow pathway'>" +
          "<defs><marker id='hf12' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          [["Body","#B85C5C"],["Right atrium","#B85C5C"],["Right ventricle","#B85C5C"],["Lungs","#2E63B8"],["Left atrium","#2E63B8"],["Left ventricle","#2E63B8"]].map(function(p,i){var x=6+i*118;return "<rect x='"+x+"' y='34' width='104' height='38' rx='8' fill='#fff' stroke='"+p[1]+"' stroke-width='2'/><text x='"+(x+52)+"' y='58' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='"+p[1]+"'>"+p[0]+"</text>"+(i<5?"<line x1='"+(x+104)+"' y1='53' x2='"+(x+118)+"' y2='53' stroke='#2E63B8' stroke-width='2' marker-end='url(#hf12)'/>":"");}).join("") +
          "<text x='150' y='90' font-family='Inter' font-size='10' fill='#B85C5C'>deoxygenated</text><text x='470' y='90' font-family='Inter' font-size='10' fill='#2E63B8'>oxygenated → back to body</text>" +
          "</svg>"
      } },
      { h: "Coronary circulation", p: "The heart muscle has its own blood supply: the coronary arteries branch from the base of the aorta to feed the myocardium, and the cardiac veins drain it. If a coronary artery is blocked (e.g. by a clot on atherosclerotic plaque), that part of the heart muscle is starved of oxygen — a myocardial infarction (heart attack)." },
      { h: "The conduction system", p: "The heartbeat is generated by the heart itself. The sino-atrial (SA) node in the right atrium is the natural pacemaker; its impulse spreads across the atria (making them contract), reaches the atrio-ventricular (AV) node, then travels down the bundle of His, the bundle branches and the Purkinje fibres to make the ventricles contract. This electrical activity is recorded as the ECG (P wave = atrial depolarisation, QRS = ventricular depolarisation, T wave = ventricular repolarisation); depolarisation triggers the contraction that follows it." },
      { h: "The cardiac cycle and output", p: "One heartbeat is a cardiac cycle of contraction (systole) and relaxation (diastole). Cardiac output — the blood pumped by each ventricle per minute — equals heart rate multiplied by stroke volume (CO = HR x SV). A typical resting value is about 5 litres per minute. Heart rate is modified by the autonomic nervous system: sympathetic stimulation speeds it, parasympathetic (vagal) slows it." },
      { h: "Clinical & nursing relevance", list: [
        "Myocardial infarction — central crushing chest pain; needs urgent treatment.",
        "Heart failure — the heart cannot pump enough, causing breathlessness and oedema.",
        "Arrhythmias — abnormal rhythms (e.g. atrial fibrillation) detected on ECG.",
        "Valve disease — narrowing (stenosis) or leaking (regurgitation) causing murmurs."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "Name the layers of the heart wall and the four chambers.",
      "Name the heart valves and state their positions and function.",
      "Trace the pathway of a drop of blood through the heart, lungs and body.",
      "Describe the conduction system of the heart and relate it to the ECG.",
      "Define cardiac output and state the factors that determine it."
    ],
    assessment: [
      { type: "mcq", q: "The natural pacemaker of the heart is the:", options: ["AV node", "SA node", "Bundle of His", "Purkinje fibres"], answer: 1, rationale: "The sino-atrial (SA) node sets the heart rate." },
      { type: "mcq", q: "The valve between the left atrium and left ventricle is the:", options: ["Tricuspid valve", "Mitral (bicuspid) valve", "Pulmonary valve", "Aortic valve"], answer: 1, rationale: "The mitral (bicuspid) valve lies on the left side; the tricuspid is on the right." },
      { type: "mcq", q: "The chamber with the thickest muscular wall is the:", options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"], answer: 3, rationale: "The left ventricle pumps against the highest (systemic) pressure, so its wall is thickest." },
      { type: "mcq", q: "Oxygenated blood returns to the heart from the lungs via the:", options: ["Pulmonary arteries", "Pulmonary veins", "Superior vena cava", "Coronary sinus"], answer: 1, rationale: "The pulmonary veins carry oxygenated blood from the lungs to the left atrium." },
      { type: "mcq", q: "The thick, pumping middle layer of the heart wall is the:", options: ["Epicardium", "Myocardium", "Endocardium", "Pericardium"], answer: 1, rationale: "The myocardium is the cardiac-muscle layer that contracts." },
      { type: "mcq", q: "Cardiac output equals:", options: ["Heart rate + stroke volume", "Heart rate x stroke volume", "Stroke volume / heart rate", "Blood pressure x heart rate"], answer: 1, rationale: "CO = HR x SV; at rest about 5 L/min." },
      { type: "mcq", q: "A heart attack (myocardial infarction) results from blockage of a:", options: ["Pulmonary vein", "Coronary artery", "Vena cava", "Cardiac valve"], answer: 1, rationale: "Occlusion of a coronary artery starves part of the myocardium of oxygen." },
      { type: "mcq", q: "On the ECG, ventricular contraction corresponds to the:", options: ["P wave", "QRS complex", "T wave", "PR interval"], answer: 1, rationale: "The QRS complex reflects ventricular depolarisation (contraction)." },
      { type: "mcq", q: "Blood is pumped from the right ventricle to the lungs through the:", options: ["Aorta", "Pulmonary artery", "Pulmonary vein", "Coronary artery"], answer: 1, rationale: "The right ventricle ejects blood via the pulmonary valve into the pulmonary artery." },
      { type: "mcq", q: "Parasympathetic (vagal) stimulation of the heart causes the rate to:", options: ["Increase", "Decrease", "Stay the same", "Become irregular"], answer: 1, rationale: "Vagal/parasympathetic activity slows the heart rate; sympathetic speeds it." },
      { type: "fill", q: "The double-layered sac enclosing the heart is the ______.", accept: ["pericardium"], rationale: "The pericardium surrounds the heart and reduces friction during beating." },
      { type: "fill", q: "The right atrioventricular valve is the ______ valve.", accept: ["tricuspid"], rationale: "The tricuspid valve lies between the right atrium and right ventricle." }
    ]
  },
  {
    id: "anp-13-vessels",
    unit: "Unit 4 · Transport and Defense",
    title: "Cardiovascular System (Vessels & Circulation)",
    readMinutes: 22,
    summary: "Types of blood vessels, the systemic and pulmonary circuits, capillary exchange, blood pressure and its regulation, pulse points, and vascular disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Types of blood vessel", list: [
        "Arteries — carry blood away from the heart; thick, elastic, muscular walls to withstand high pressure. (Most carry oxygenated blood, except the pulmonary artery.)",
        "Arterioles — small arteries that regulate flow and resistance.",
        "Capillaries — microscopic, one-cell-thick vessels where exchange of gases, nutrients and wastes occurs.",
        "Venules and veins — carry blood back to the heart; thinner walls, larger lumen, and valves that prevent backflow. (Most carry deoxygenated blood, except the pulmonary veins.)"
      ] },
      { h: "Artery vs vein", p: "Arteries have thick muscular and elastic walls and a narrow lumen, and carry blood under high pressure in pulsatile flow; unlike veins, they have no valves along their length. Veins have thinner walls and a wide lumen, carry blood under low pressure, and rely on valves and the 'skeletal muscle pump' (contracting limb muscles) to push blood back to the heart against gravity.", figure: { caption: "Figure 13.1 — Comparison of artery, capillary and vein walls. Add a labelled image if available.", placeholder: true } },
      { h: "The two circuits", p: "Blood travels in two linked circuits. The pulmonary circulation carries blood from the right side of the heart to the lungs and back, for gas exchange. The systemic circulation carries oxygenated blood from the left side of the heart to all body tissues and returns deoxygenated blood to the right side. Special systemic routes include the hepatic portal system (carrying nutrient-rich blood from the gut to the liver)." },
      { h: "Capillary exchange", p: "Exchange between blood and tissues happens only in capillaries. At the arterial end, high hydrostatic (blood) pressure pushes fluid and nutrients out to the cells; at the venous end, osmotic pressure from plasma proteins draws most of the fluid and wastes back in. Excess tissue fluid is collected by the lymphatic system. Disturbance of this balance (e.g. low albumin or high venous pressure) causes oedema." },
      { h: "Blood pressure", p: "Blood pressure (BP) is the force of blood against arterial walls, written as systolic over diastolic (e.g. 120/80 mmHg). Systolic pressure is the peak during ventricular contraction; diastolic is the lowest during relaxation. BP depends mainly on cardiac output and peripheral resistance (BP is proportional to CO x resistance) plus blood volume and vessel elasticity." },
      { h: "Regulation of blood pressure", p: "BP is kept stable by several mechanisms. Baroreceptors in the carotid arteries and aorta sense pressure and signal the medulla, which adjusts heart rate and vessel diameter within seconds. Over the longer term, the kidneys regulate BP through the renin-angiotensin-aldosterone system (RAAS) and by controlling blood volume; antidiuretic hormone also conserves water. These systems explain why kidney disease and fluid status strongly affect BP." },
      { h: "Pulse points and major vessels", p: "A pulse is the pressure wave felt where an artery lies near the surface over a bone. Common sites are the radial (wrist), carotid (neck), brachial (arm), femoral (groin) and dorsalis pedis (foot). The largest artery is the aorta; the largest veins are the superior and inferior venae cavae. Knowing pulse points is essential for checking circulation and giving emergency care." },
      { h: "Clinical & nursing relevance", list: [
        "Hypertension (high BP) — the 'silent killer'; a major risk for stroke, heart and kidney disease.",
        "Atherosclerosis — fatty plaques narrow and harden arteries.",
        "Varicose veins — incompetent venous valves cause pooling.",
        "Deep vein thrombosis (DVT) — a clot in a deep leg vein that can travel to the lungs (pulmonary embolism); prevented by early mobilisation.",
        "Shock — dangerously low BP and tissue perfusion."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "Differentiate arteries, capillaries and veins in structure and function.",
      "Compare the systemic and pulmonary circulations.",
      "Explain capillary exchange and how oedema develops.",
      "Define blood pressure and describe how it is regulated.",
      "Name five pulse points and explain their clinical importance."
    ],
    assessment: [
      { type: "mcq", q: "Vessels that carry blood away from the heart are:", options: ["Veins", "Arteries", "Venules", "Lymphatics"], answer: 1, rationale: "Arteries carry blood away from the heart; veins carry it back." },
      { type: "mcq", q: "Exchange of gases and nutrients between blood and tissues occurs in the:", options: ["Arteries", "Arterioles", "Capillaries", "Veins"], answer: 2, rationale: "Thin-walled capillaries are the only site of exchange." },
      { type: "mcq", q: "Which feature is characteristic of veins but not arteries?", options: ["Thick muscular walls", "Valves", "High pressure", "Pulsatile flow"], answer: 1, rationale: "Veins contain valves that prevent backflow of low-pressure blood." },
      { type: "mcq", q: "The pulmonary artery is unusual because it carries:", options: ["Oxygenated blood", "Deoxygenated blood", "Lymph", "Plasma only"], answer: 1, rationale: "The pulmonary artery carries deoxygenated blood from the heart to the lungs." },
      { type: "mcq", q: "A normal adult blood pressure is approximately:", options: ["90/60 mmHg", "120/80 mmHg", "150/100 mmHg", "180/120 mmHg"], answer: 1, rationale: "Around 120/80 mmHg is the normal reference; 180/120 is a hypertensive crisis." },
      { type: "mcq", q: "Blood pressure is most directly determined by cardiac output and:", options: ["Blood colour", "Peripheral resistance", "Body temperature", "Red-cell count"], answer: 1, rationale: "BP is proportional to cardiac output x peripheral resistance." },
      { type: "mcq", q: "Pressure-sensing receptors that help regulate BP are the:", options: ["Chemoreceptors", "Baroreceptors", "Photoreceptors", "Nociceptors"], answer: 1, rationale: "Baroreceptors in the carotid sinus and aortic arch sense BP and trigger reflex adjustment." },
      { type: "mcq", q: "The long-term hormonal system regulating BP through the kidney is the:", options: ["RAAS", "ANS", "GCS", "CSF"], answer: 0, rationale: "The renin-angiotensin-aldosterone system (RAAS) regulates BP and blood volume." },
      { type: "mcq", q: "The pulse felt at the wrist is the ______ pulse.", options: ["Carotid", "Radial", "Femoral", "Brachial"], answer: 1, rationale: "The radial artery at the wrist gives the radial pulse." },
      { type: "mcq", q: "A clot forming in a deep vein of the leg is called a:", options: ["Varicose vein", "Deep vein thrombosis", "Aneurysm", "Embolus"], answer: 1, rationale: "Deep vein thrombosis (DVT) can dislodge and cause pulmonary embolism." },
      { type: "fill", q: "The largest artery in the body is the ______.", accept: ["aorta"], rationale: "The aorta is the body's largest artery, leaving the left ventricle." },
      { type: "fill", q: "Accumulation of excess fluid in the tissues is called ______.", accept: ["oedema", "edema"], rationale: "Oedema results when capillary fluid balance is disturbed or lymph drainage fails." }
    ]
  },
  {
    id: "anp-14-lymphatic",
    unit: "Unit 4 · Transport and Defense",
    title: "Lymphatic & Immune System",
    readMinutes: 22,
    summary: "Lymphatic vessels and organs, innate vs adaptive immunity, antibodies, types of acquired immunity and vaccination, and immune-related disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The lymphatic system", p: "The lymphatic system is a one-way drainage network that works alongside the cardiovascular system. It has three main jobs: returning excess tissue fluid (now called lymph) to the bloodstream to maintain fluid balance, absorbing dietary fats from the small intestine (via lacteals), and providing immune defence. Lymph is moved by skeletal-muscle contraction and one-way valves, and is filtered as it passes through lymph nodes." },
      { h: "Lymphatic organs", list: [
        "Lymph nodes — small filters along lymph vessels that trap pathogens and house lymphocytes; they swell during infection.",
        "Spleen — filters blood, removes old red cells, and stores platelets and white cells.",
        "Thymus — where T-lymphocytes mature (most active in childhood).",
        "Tonsils and other lymphoid tissue (e.g. in the gut) — guard the entrances to the body."
      ] },
      { h: "Two lines of immune defence", p: "Immunity is the body's ability to resist disease. It has two arms. Innate (non-specific) immunity is present from birth and responds the same way to any threat. Adaptive (specific) immunity is learned, targets particular pathogens, and remembers them.", figure: { caption: "Figure 14.1 — Innate vs adaptive immunity. Add a comparison diagram if available.", placeholder: true } },
      { h: "Innate (non-specific) immunity", list: [
        "Physical and chemical barriers — intact skin, mucous membranes, stomach acid, lysozyme in tears.",
        "Phagocytes — neutrophils and macrophages that engulf pathogens.",
        "Inflammation — redness, heat, swelling and pain that wall off and clear injury or infection.",
        "Fever — a raised body temperature that slows microbial growth.",
        "Natural killer (NK) cells and protective proteins (interferons, complement)."
      ] },
      { h: "Adaptive (specific) immunity", p: "Adaptive immunity is carried out by lymphocytes and has two branches. In cell-mediated immunity, T-lymphocytes act directly: helper T cells coordinate the response and cytotoxic T cells destroy infected or abnormal cells. In humoral (antibody-mediated) immunity, B-lymphocytes become plasma cells that secrete antibodies against a specific antigen. Memory cells remain afterwards, giving a faster, stronger response on re-exposure — the basis of immunity and vaccination." },
      { h: "Antibodies (immunoglobulins)", p: "Antibodies are Y-shaped proteins that bind specific antigens to neutralise them or mark them for destruction. The five classes are IgG (most abundant; crosses the placenta to protect the newborn), IgM (first produced in a new infection), IgA (in secretions such as saliva, tears and breast milk), IgE (allergy and parasites) and IgD (on B cells)." },
      { h: "Types of acquired immunity", list: [
        "Active natural — antibodies made after catching an infection (long-lasting).",
        "Active artificial — antibodies made after vaccination (long-lasting).",
        "Passive natural — ready-made antibodies received from mother across the placenta or in breast milk (temporary).",
        "Passive artificial — ready-made antibodies given as an injection, e.g. anti-tetanus immunoglobulin (temporary)."
      ] },
      { h: "Clinical & nursing relevance", list: [
        "Lymphoedema — swelling when lymph drainage is blocked or nodes are removed (e.g. after breast surgery).",
        "HIV/AIDS — the virus destroys helper T cells, crippling adaptive immunity.",
        "Allergy / hypersensitivity — an exaggerated IgE response; severe form is anaphylaxis.",
        "Autoimmune disease — immunity mistakenly attacks the body's own tissues.",
        "Immunisation — nurses deliver vaccines, a cornerstone of public-health nursing."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "State the functions of the lymphatic system and name its main organs.",
      "Differentiate innate and adaptive immunity.",
      "Compare cell-mediated and humoral immunity.",
      "Name the five classes of antibody and a function of each.",
      "Classify the types of acquired immunity with examples."
    ],
    assessment: [
      { type: "mcq", q: "A major function of the lymphatic system is to:", options: ["Pump blood", "Return excess tissue fluid to the blood", "Produce bile", "Exchange gases"], answer: 1, rationale: "Lymphatics drain excess tissue fluid back into the circulation, maintaining fluid balance." },
      { type: "mcq", q: "Lymph nodes function mainly to:", options: ["Make red cells", "Filter lymph and trap pathogens", "Store bile", "Produce insulin"], answer: 1, rationale: "Lymph nodes filter lymph and house lymphocytes that fight infection." },
      { type: "mcq", q: "T-lymphocytes mature in the:", options: ["Spleen", "Thymus", "Liver", "Tonsils"], answer: 1, rationale: "The thymus is where T cells mature; it is most active in childhood." },
      { type: "mcq", q: "Which is part of innate (non-specific) immunity?", options: ["Antibody production", "Memory cells", "Inflammation and phagocytosis", "Cytotoxic T cells"], answer: 2, rationale: "Inflammation and phagocytosis are non-specific innate defences." },
      { type: "mcq", q: "Antibodies are produced by:", options: ["Neutrophils", "Plasma cells (B lymphocytes)", "Cytotoxic T cells", "Macrophages"], answer: 1, rationale: "Activated B cells become plasma cells that secrete antibodies." },
      { type: "mcq", q: "The most abundant antibody, which crosses the placenta, is:", options: ["IgA", "IgE", "IgG", "IgM"], answer: 2, rationale: "IgG is the most abundant immunoglobulin and crosses the placenta to protect the fetus." },
      { type: "mcq", q: "Immunity from a vaccine is an example of:", options: ["Active artificial immunity", "Passive artificial immunity", "Active natural immunity", "Passive natural immunity"], answer: 0, rationale: "Vaccination makes the body produce its own antibodies — active artificial immunity." },
      { type: "mcq", q: "Antibodies passed from mother to baby in breast milk provide:", options: ["Active natural immunity", "Active artificial immunity", "Passive natural immunity", "No immunity"], answer: 2, rationale: "Ready-made maternal antibodies give temporary passive natural immunity." },
      { type: "mcq", q: "HIV mainly destroys which immune cells?", options: ["Red blood cells", "Helper T cells", "Platelets", "Neutrophils"], answer: 1, rationale: "HIV targets helper (CD4) T cells, crippling adaptive immunity." },
      { type: "mcq", q: "A severe, life-threatening allergic reaction is called:", options: ["Inflammation", "Anaphylaxis", "Autoimmunity", "Fever"], answer: 1, rationale: "Anaphylaxis is a severe systemic IgE-mediated hypersensitivity reaction." },
      { type: "fill", q: "The antibody produced first (earliest) in a new infection is ______.", accept: ["igm"], rationale: "IgM is the first antibody class produced in a primary immune response." },
      { type: "fill", q: "Cells that remain after an infection and give faster future protection are ______ cells.", accept: ["memory"], rationale: "Memory B and T cells provide the rapid secondary response and underlie vaccination." }
    ]
  },
  {
    id: "anp-15-respiratory",
    unit: "Unit 5 · Maintenance and Continuity",
    title: "The Respiratory System",
    readMinutes: 22,
    summary: "The upper and lower airways, mechanics of breathing, gas exchange and transport, lung volumes, control of breathing, and respiratory nursing applications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions and organization", p: "The respiratory system supplies oxygen and removes carbon dioxide, and also helps regulate blood pH and enables speech and smell. It is divided into the upper respiratory tract (nose, pharynx and larynx) and the lower respiratory tract (trachea, bronchi, bronchioles and alveoli). A conducting zone warms, moistens and filters air, while the respiratory zone (alveoli) performs gas exchange." },
      { h: "The airways", p: "Air enters through the nose, where it is warmed, humidified and filtered by hairs and mucus. It passes the pharynx and the larynx (voice box, guarded by the epiglottis which prevents food entering). The trachea (windpipe), held open by C-shaped cartilage rings, divides into two bronchi, which branch into ever-smaller bronchioles, ending in clusters of alveoli.", figure: {
        caption: "Figure 15.1 — Pathway of air from nose to alveoli.",
        svg: "<svg viewBox='0 0 720 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Airway pathway'>" +
          "<defs><marker id='rp15' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          ["Nose","Pharynx","Larynx","Trachea","Bronchi","Bronchioles","Alveoli"].map(function(t,i){var x=4+i*102;return "<rect x='"+x+"' y='24' width='90' height='34' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+45)+"' y='46' text-anchor='middle' font-family='Inter' font-size='10.5' font-weight='700' fill='#14387A'>"+t+"</text>"+(i<6?"<line x1='"+(x+90)+"' y1='41' x2='"+(x+102)+"' y2='41' stroke='#2E63B8' stroke-width='2' marker-end='url(#rp15)'/>":"");}).join("") +
          "</svg>"
      } },
      { h: "The alveoli and the respiratory membrane", p: "Alveoli are millions of tiny air sacs that give the lungs an enormous surface area (about 70 m²) for gas exchange. Each alveolus has walls only one cell thick, wrapped in capillaries; together this thin barrier is the respiratory membrane. A fluid called surfactant lowers surface tension and stops the alveoli collapsing. The lungs are covered by the pleura, a double membrane with lubricating pleural fluid." },
      { h: "Mechanics of breathing", p: "Breathing (pulmonary ventilation) works by pressure changes (Boyle's law: volume up, pressure down). In inspiration the diaphragm flattens and the external intercostal muscles lift the ribs, enlarging the thorax; pressure falls and air flows in. Expiration is usually passive — the muscles relax, the thorax recoils, pressure rises and air flows out. Forced expiration uses the abdominal and internal intercostal muscles." },
      { h: "Gas exchange and transport", p: "Gases move by diffusion from high to low partial pressure. In external respiration (in the lungs) oxygen diffuses from alveoli into blood and carbon dioxide diffuses out. In internal respiration (at the tissues) the reverse occurs. Most oxygen is carried bound to haemoglobin (as oxyhaemoglobin); most carbon dioxide is transported as bicarbonate ions (formed from CO₂ inside the red cells and carried in the plasma), with smaller amounts bound to haemoglobin or dissolved." },
      { h: "Lung volumes and control of breathing", p: "Tidal volume is the air moved in a normal breath (~500 mL); vital capacity is the maximum that can be exhaled after a maximal inhalation; residual volume always remains. Breathing is controlled automatically by respiratory centres in the medulla and pons. Chemoreceptors are the main drivers: a rise in blood carbon dioxide (and fall in pH) is the strongest stimulus to breathe faster and deeper." },
      { h: "Clinical & nursing relevance", list: [
        "Asthma — reversible bronchoconstriction causing wheeze and breathlessness.",
        "COPD — chronic airflow limitation (chronic bronchitis and emphysema), often from smoking.",
        "Pneumonia — infection filling alveoli with fluid, impairing gas exchange.",
        "Hypoxia — low tissue oxygen; cyanosis is a late sign.",
        "Pulse oximetry (SpO2) and respiratory rate are key nursing observations; normal SpO2 is 95-100%."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "Differentiate the upper and lower respiratory tracts and name their parts.",
      "Describe the structure of the alveoli and the respiratory membrane.",
      "Explain the mechanics of inspiration and expiration.",
      "How are oxygen and carbon dioxide transported in the blood?",
      "Describe the control of breathing and the role of carbon dioxide."
    ],
    assessment: [
      { type: "mcq", q: "Gas exchange in the lungs takes place in the:", options: ["Bronchi", "Trachea", "Alveoli", "Larynx"], answer: 2, rationale: "Thin-walled alveoli are the site of gas exchange with pulmonary capillaries." },
      { type: "mcq", q: "The flap that prevents food entering the airway during swallowing is the:", options: ["Uvula", "Epiglottis", "Glottis", "Soft palate"], answer: 1, rationale: "The epiglottis covers the laryngeal opening during swallowing." },
      { type: "mcq", q: "During quiet inspiration the diaphragm:", options: ["Relaxes and rises", "Contracts and flattens", "Stays still", "Moves sideways"], answer: 1, rationale: "The diaphragm contracts and flattens, enlarging the thorax so air flows in." },
      { type: "mcq", q: "Most oxygen in the blood is transported:", options: ["Dissolved in plasma", "Bound to haemoglobin", "As bicarbonate", "On white cells"], answer: 1, rationale: "Most oxygen travels bound to haemoglobin as oxyhaemoglobin." },
      { type: "mcq", q: "Most carbon dioxide is carried in the blood as:", options: ["Bicarbonate ions in plasma", "Dissolved gas only", "Carboxyhaemoglobin only", "Carbonic acid crystals"], answer: 0, rationale: "The majority of CO2 is transported as bicarbonate ions in plasma." },
      { type: "mcq", q: "The substance that reduces surface tension and keeps alveoli open is:", options: ["Mucus", "Surfactant", "Bile", "Histamine"], answer: 1, rationale: "Surfactant lowers alveolar surface tension and prevents collapse." },
      { type: "mcq", q: "The strongest normal stimulus to increase breathing is a rise in blood:", options: ["Oxygen", "Carbon dioxide", "Glucose", "Calcium"], answer: 1, rationale: "Rising CO2 (and falling pH) is the most powerful drive to breathe." },
      { type: "mcq", q: "The respiratory control centres are located in the:", options: ["Cerebrum", "Cerebellum", "Medulla and pons", "Spinal cord"], answer: 2, rationale: "The medulla and pons house the respiratory rhythm and control centres." },
      { type: "mcq", q: "The volume of air in a normal quiet breath is the:", options: ["Vital capacity", "Tidal volume", "Residual volume", "Total lung capacity"], answer: 1, rationale: "Tidal volume (~500 mL) is the air moved in a normal breath." },
      { type: "mcq", q: "A normal oxygen saturation (SpO2) reading is:", options: ["75-85%", "85-90%", "95-100%", "60-70%"], answer: 2, rationale: "Normal SpO2 is 95-100%; lower values indicate hypoxaemia." },
      { type: "fill", q: "The windpipe, held open by C-shaped cartilage rings, is the ______.", accept: ["trachea"], rationale: "The trachea conducts air from the larynx to the bronchi." },
      { type: "fill", q: "The double membrane covering the lungs is the ______.", accept: ["pleura"], rationale: "The pleura, with pleural fluid, reduces friction as the lungs expand." }
    ]
  },
  {
    id: "anp-16-digestive",
    unit: "Unit 5 · Maintenance and Continuity",
    title: "The Digestive System (GIT)",
    readMinutes: 22,
    summary: "Functions and wall layers of the GI tract, the organs from mouth to anus, mechanical and chemical digestion, absorption, and common digestive disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the digestive system", p: "The digestive system breaks food down into molecules small enough to be absorbed and used by the body. Its processes are ingestion (taking in food), propulsion (swallowing and peristalsis), mechanical digestion (chewing, churning), chemical digestion (enzymes splitting nutrients), absorption (into blood/lymph) and defecation (eliminating waste)." },
      { h: "Layers of the GI tract wall", list: [
        "Mucosa — the inner lining that secretes and absorbs.",
        "Submucosa — connective tissue with blood vessels and nerves.",
        "Muscularis — smooth muscle that produces peristalsis.",
        "Serosa — the outer protective covering."
      ] },
      { h: "The pathway of food", p: "Food passes along the alimentary canal in order: mouth, pharynx, oesophagus, stomach, small intestine and large intestine, ending at the rectum and anus.", figure: {
        caption: "Figure 16.1 — The route of food through the alimentary canal.",
        svg: "<svg viewBox='0 0 720 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='GI tract pathway'>" +
          "<defs><marker id='gi16' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          ["Mouth","Oesophagus","Stomach","Small intestine","Large intestine","Rectum/Anus"].map(function(t,i){var x=4+i*119;return "<rect x='"+x+"' y='24' width='106' height='34' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+53)+"' y='46' text-anchor='middle' font-family='Inter' font-size='10' font-weight='700' fill='#14387A'>"+t+"</text>"+(i<5?"<line x1='"+(x+106)+"' y1='41' x2='"+(x+119)+"' y2='41' stroke='#2E63B8' stroke-width='2' marker-end='url(#gi16)'/>":"");}).join("") +
          "</svg>"
      } },
      { h: "Mouth, pharynx and oesophagus", p: "In the mouth, teeth chew food (mechanical digestion) and saliva moistens it; salivary amylase begins starch digestion. The tongue forms the food into a bolus and swallowing pushes it through the pharynx into the oesophagus, a muscular tube that moves it to the stomach by waves of peristalsis." },
      { h: "The stomach", p: "The stomach is a muscular bag that stores food and continues digestion. Gastric glands secrete gastric juice containing hydrochloric acid (which kills microbes and activates enzymes) and the enzyme pepsin (which begins protein digestion). Churning mixes food with juice to form a creamy liquid called chyme, released slowly into the small intestine. A mucus layer protects the stomach lining from its own acid." },
      { h: "The small intestine", p: "The small intestine (duodenum, jejunum and ileum, about 6 m long) is where most chemical digestion and almost all absorption occur. Bile from the liver emulsifies fats and pancreatic enzymes plus intestinal enzymes complete digestion of carbohydrates, proteins and fats. Its lining is folded into millions of finger-like villi (each with a capillary network and a lacteal) that hugely increase the surface area for absorption of nutrients into the blood and lymph." },
      { h: "The large intestine", p: "The large intestine (colon) receives undigested residue. It absorbs most of the remaining water and electrolytes, houses helpful bacteria (gut flora) that make some vitamins (e.g. vitamin K), and forms and stores faeces until they are eliminated through the rectum and anus." },
      { h: "Clinical & nursing relevance", list: [
        "GERD — acid reflux into the oesophagus causing heartburn.",
        "Peptic ulcer — erosion of the stomach or duodenal lining, often linked to Helicobacter pylori.",
        "Diarrhoea and constipation — disturbances of water absorption and motility; diarrhoea risks dehydration.",
        "Appendicitis — inflammation of the appendix, classically RLQ pain.",
        "Good nutrition, hydration and fibre support healthy digestion."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "List the processes carried out by the digestive system.",
      "Name the four layers of the GI tract wall.",
      "Describe digestion in the stomach, including the role of gastric juice.",
      "Explain how the structure of the small intestine suits absorption.",
      "State the functions of the large intestine."
    ],
    assessment: [
      { type: "mcq", q: "Most absorption of nutrients occurs in the:", options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"], answer: 1, rationale: "The small intestine, with its villi, is the main site of nutrient absorption." },
      { type: "mcq", q: "The enzyme in saliva that begins starch digestion is:", options: ["Pepsin", "Amylase", "Lipase", "Trypsin"], answer: 1, rationale: "Salivary amylase starts the chemical digestion of starch in the mouth." },
      { type: "mcq", q: "Hydrochloric acid in the stomach is secreted to:", options: ["Absorb water", "Kill microbes and activate enzymes", "Emulsify fat", "Neutralise chyme"], answer: 1, rationale: "Gastric HCl kills ingested microbes and activates pepsin for protein digestion." },
      { type: "mcq", q: "The finger-like projections that increase absorptive surface area are the:", options: ["Rugae", "Villi", "Haustra", "Papillae"], answer: 1, rationale: "Villi (and microvilli) greatly increase the small intestine's surface area." },
      { type: "mcq", q: "The main function of the large intestine is to:", options: ["Digest protein", "Absorb water and form faeces", "Produce bile", "Secrete insulin"], answer: 1, rationale: "The colon absorbs water and electrolytes and forms/stores faeces." },
      { type: "mcq", q: "The wavelike muscular movement that propels food along the gut is:", options: ["Segmentation", "Peristalsis", "Mastication", "Deglutition"], answer: 1, rationale: "Peristalsis is the coordinated muscular wave that moves contents along the tract." },
      { type: "mcq", q: "The semi-liquid mixture of food and gastric juice is called:", options: ["Bolus", "Chyme", "Bile", "Faeces"], answer: 1, rationale: "Churning in the stomach produces chyme, released into the duodenum." },
      { type: "mcq", q: "The three parts of the small intestine are the:", options: ["Cardia, body, pylorus", "Duodenum, jejunum, ileum", "Caecum, colon, rectum", "Fundus, antrum, pylorus"], answer: 1, rationale: "The small intestine is the duodenum, jejunum and ileum." },
      { type: "mcq", q: "The protein-digesting enzyme produced in the stomach is:", options: ["Amylase", "Pepsin", "Lipase", "Maltase"], answer: 1, rationale: "Pepsin (from pepsinogen activated by HCl) begins protein digestion." },
      { type: "mcq", q: "Gut bacteria in the large intestine help produce:", options: ["Vitamin C", "Vitamin K", "Insulin", "Bile"], answer: 1, rationale: "Colonic flora synthesise some vitamin K and B vitamins." },
      { type: "fill", q: "The innermost layer of the GI tract wall is the ______.", accept: ["mucosa"], rationale: "The mucosa lines the lumen and carries out secretion and absorption." },
      { type: "fill", q: "Emulsification of fats in the small intestine is carried out by ______.", accept: ["bile"], rationale: "Bile from the liver emulsifies fats into small droplets for enzyme action." }
    ]
  },
  {
    id: "anp-17-accessory",
    unit: "Unit 5 · Maintenance and Continuity",
    title: "Accessory Organs of Digestion",
    readMinutes: 20,
    summary: "The liver, gallbladder and pancreas — their roles in bile, fat digestion and metabolism — plus nutrient fate and related disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Accessory organs overview", p: "The accessory digestive organs — the liver, gallbladder and pancreas — sit outside the alimentary canal but pour their secretions into it (mainly into the duodenum) to make digestion possible. Food never passes through them, yet digestion could not proceed without them." },
      { h: "The liver", p: "The liver is the body's largest internal organ and its main chemical factory. Its many functions include: producing bile for fat digestion; metabolising carbohydrates (storing and releasing glucose as glycogen), proteins and fats; detoxifying drugs, alcohol and ammonia (converting ammonia to urea); making plasma proteins such as albumin and clotting factors; storing iron and vitamins A, D and B12; and breaking down old red blood cells to form bilirubin.", figure: { caption: "Figure 17.1 — Liver, gallbladder and pancreas and their ducts to the duodenum. Add a labelled image for detail.", placeholder: true } },
      { h: "Bile and the gallbladder", p: "Bile is a greenish fluid made by the liver that contains bile salts, bilirubin and cholesterol. Bile salts emulsify fats — breaking large fat globules into tiny droplets so that enzymes (lipases) can digest them efficiently. Between meals, bile is stored and concentrated in the gallbladder; when fatty food enters the duodenum, the gallbladder contracts and releases bile through the bile duct." },
      { h: "The pancreas", p: "The pancreas has two roles. Its exocrine part (the bulk of the gland) secretes pancreatic juice into the duodenum, containing powerful digestive enzymes — amylase (carbohydrate), lipase (fat) and proteases such as trypsin (protein) — plus bicarbonate that neutralises stomach acid. Its endocrine part, the islets of Langerhans, secretes insulin and glucagon to control blood glucose." },
      { h: "Fate of absorbed nutrients", p: "After absorption, most nutrients travel in the blood through the hepatic portal vein straight to the liver, which processes and stores them and regulates what is released into the general circulation. Absorbed fats, however, enter lymphatic lacteals first before reaching the blood. This 'first pass' through the liver also processes many oral drugs." },
      { h: "Clinical & nursing relevance", list: [
        "Jaundice — yellowing of skin and eyes from excess bilirubin (liver disease, bile obstruction or haemolysis).",
        "Hepatitis — inflammation of the liver, often viral (A, B, C).",
        "Cirrhosis — scarring of the liver, commonly from alcohol or chronic hepatitis.",
        "Gallstones — hardened bile that can block the bile duct and cause severe pain.",
        "Pancreatitis — inflammation of the pancreas; and diabetes mellitus when islet function fails."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "Name the accessory organs of digestion and state how their secretions reach the gut.",
      "List the major functions of the liver.",
      "Describe bile, its production, storage and role in digestion.",
      "Describe the exocrine and endocrine functions of the pancreas.",
      "Explain the role of the hepatic portal system in handling absorbed nutrients."
    ],
    assessment: [
      { type: "mcq", q: "Bile is produced by the:", options: ["Gallbladder", "Liver", "Pancreas", "Stomach"], answer: 1, rationale: "The liver produces bile; the gallbladder only stores and concentrates it." },
      { type: "mcq", q: "The main digestive role of bile salts is to:", options: ["Digest protein", "Emulsify fats", "Neutralise acid", "Absorb glucose"], answer: 1, rationale: "Bile salts emulsify fats into small droplets so lipase can digest them." },
      { type: "mcq", q: "Which organ stores and concentrates bile?", options: ["Liver", "Gallbladder", "Spleen", "Duodenum"], answer: 1, rationale: "The gallbladder stores and concentrates bile between meals." },
      { type: "mcq", q: "Pancreatic juice neutralises stomach acid in the duodenum using:", options: ["Hydrochloric acid", "Bicarbonate", "Bile salts", "Pepsin"], answer: 1, rationale: "Pancreatic bicarbonate neutralises acidic chyme entering the duodenum." },
      { type: "mcq", q: "The fat-digesting enzyme secreted by the pancreas is:", options: ["Amylase", "Lipase", "Pepsin", "Maltase"], answer: 1, rationale: "Pancreatic lipase digests fats; amylase digests carbohydrate; proteases digest protein." },
      { type: "mcq", q: "The liver converts toxic ammonia into:", options: ["Glucose", "Urea", "Bile", "Albumin"], answer: 1, rationale: "The liver converts ammonia to urea for safe excretion by the kidneys." },
      { type: "mcq", q: "Carbohydrate is stored in the liver as:", options: ["Glucose", "Glycogen", "Starch", "Lactose"], answer: 1, rationale: "The liver stores glucose as glycogen and releases it when blood glucose falls." },
      { type: "mcq", q: "Yellowing of the skin and eyes due to excess bilirubin is called:", options: ["Cyanosis", "Jaundice", "Pallor", "Erythema"], answer: 1, rationale: "Jaundice reflects raised bilirubin from liver disease, bile obstruction or haemolysis." },
      { type: "mcq", q: "Most absorbed nutrients travel first to the liver via the:", options: ["Pulmonary vein", "Hepatic portal vein", "Inferior vena cava", "Aorta"], answer: 1, rationale: "The hepatic portal vein delivers nutrient-rich blood from the gut to the liver." },
      { type: "mcq", q: "The endocrine cells of the pancreas that secrete insulin are the:", options: ["Goblet cells", "Islets of Langerhans", "Chief cells", "Kupffer cells"], answer: 1, rationale: "The islets of Langerhans contain the beta cells that secrete insulin." },
      { type: "fill", q: "Hardened bile that may block the bile duct is called a ______.", accept: ["gallstone", "gallstones"], rationale: "Gallstones can obstruct the bile duct, causing pain and jaundice." },
      { type: "fill", q: "A major plasma protein made by the liver is ______.", accept: ["albumin"], rationale: "The liver synthesises albumin and clotting factors." }
    ]
  },
  {
    id: "anp-18-urinary",
    unit: "Unit 5 · Maintenance and Continuity",
    title: "The Urinary System",
    readMinutes: 22,
    summary: "Functions of the urinary system, kidney and nephron structure, the three steps of urine formation, hormonal control of water and electrolytes, micturition, and renal nursing applications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Functions of the urinary system", list: [
        "Excretion of metabolic wastes (urea, creatinine, uric acid).",
        "Regulation of fluid balance and blood volume (and so blood pressure).",
        "Regulation of electrolytes (sodium, potassium) and blood pH (acid-base balance).",
        "Endocrine roles — releasing renin (blood pressure) and erythropoietin (red-cell production), and activating vitamin D."
      ] },
      { h: "Organs of the urinary system", p: "The system comprises two kidneys, which make urine; two ureters, which carry urine to the bladder; the urinary bladder, which stores it; and the urethra, which expels it. The kidneys lie at the back of the abdomen on either side of the spine; each has an outer cortex, an inner medulla containing pyramids, and a funnel-shaped pelvis that collects urine." },
      { h: "The nephron", p: "Each kidney contains about a million nephrons, the microscopic functional units that make urine. A nephron has a renal corpuscle (the glomerulus, a tuft of capillaries, sitting in the cup-shaped Bowman's capsule) and a renal tubule with three parts: the proximal convoluted tubule, the loop of Henle, and the distal convoluted tubule, which drains into a collecting duct.", figure: { caption: "Figure 18.1 — Structure of a nephron. Add a labelled image for detail.", placeholder: true } },
      { h: "Urine formation: three steps", p: "Urine is formed in three stages.", figure: {
        caption: "Figure 18.2 — The three processes of urine formation.",
        svg: "<svg viewBox='0 0 600 90' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Urine formation'>" +
          "<defs><marker id='ur18' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          [["1. Filtration","glomerulus"],["2. Reabsorption","tubules → blood"],["3. Secretion","blood → tubules"]].map(function(p,i){var x=10+i*195;return "<rect x='"+x+"' y='22' width='170' height='46' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+85)+"' y='44' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>"+p[0]+"</text><text x='"+(x+85)+"' y='60' text-anchor='middle' font-family='Inter' font-size='9.5' fill='#6B7785'>"+p[1]+"</text>"+(i<2?"<line x1='"+(x+170)+"' y1='45' x2='"+(x+195)+"' y2='45' stroke='#2E63B8' stroke-width='2' marker-end='url(#ur18)'/>":"");}).join("") +
          "</svg>"
      } },
      { h: "Filtration, reabsorption, secretion", list: [
        "Glomerular filtration — high pressure in the glomerulus forces water and small solutes into Bowman's capsule, forming filtrate (but keeping blood cells and proteins in the blood). The rate is the GFR.",
        "Tubular reabsorption — useful substances (most water, glucose, salts, amino acids) are reabsorbed from the tubules back into the blood. Normally all glucose is reabsorbed.",
        "Tubular secretion — extra wastes, drugs and excess ions (e.g. hydrogen and potassium) are added from the blood into the tubule. What remains is urine."
      ] },
      { h: "Hormonal control of water and salt", p: "The kidney fine-tunes the body's water and electrolytes under hormonal control. Antidiuretic hormone (ADH) makes the collecting ducts reabsorb more water, concentrating urine when the body is short of water. Aldosterone makes the tubules reabsorb sodium (and water follows), raising blood volume and pressure. Atrial natriuretic peptide does the opposite, promoting sodium and water loss." },
      { h: "Micturition (passing urine)", p: "Urine drains continuously from the kidneys through the ureters to the bladder, a muscular sac that stretches to store about 400-600 mL. When it fills, stretch receptors trigger the micturition reflex: the bladder wall (detrusor muscle) contracts and the internal sphincter relaxes, while the external sphincter is under voluntary control. Normal urine output is about 0.5-1 mL/kg/hour (roughly 1-1.5 L/day)." },
      { h: "Clinical & nursing relevance", list: [
        "Urinary tract infection (UTI) — common, especially in women; causes burning and frequency.",
        "Acute or chronic kidney failure — rising urea and creatinine; may need dialysis.",
        "Kidney stones — crystallised minerals causing severe loin pain.",
        "Monitoring fluid balance and urine output is a core nursing task; output below ~0.5 mL/kg/hr signals possible kidney injury."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "List the functions of the urinary system.",
      "Name the parts of a nephron and the organs of the urinary system.",
      "Describe the three processes of urine formation.",
      "Explain how ADH and aldosterone regulate water and sodium.",
      "Describe micturition and state the normal range of urine output."
    ],
    assessment: [
      { type: "mcq", q: "The functional unit of the kidney is the:", options: ["Nephron", "Alveolus", "Sarcomere", "Osteon"], answer: 0, rationale: "The nephron is the microscopic functional unit that forms urine." },
      { type: "mcq", q: "Filtration of blood takes place in the:", options: ["Loop of Henle", "Glomerulus", "Collecting duct", "Ureter"], answer: 1, rationale: "The glomerulus filters blood into Bowman's capsule under high pressure." },
      { type: "mcq", q: "Which substance is normally completely reabsorbed by the renal tubules?", options: ["Urea", "Creatinine", "Glucose", "Excess hydrogen ions"], answer: 2, rationale: "Glucose is normally fully reabsorbed; its appearance in urine suggests diabetes." },
      { type: "mcq", q: "Antidiuretic hormone (ADH) causes the kidney to:", options: ["Excrete more water", "Reabsorb more water", "Reabsorb potassium", "Stop filtration"], answer: 1, rationale: "ADH increases water reabsorption in the collecting ducts, concentrating urine." },
      { type: "mcq", q: "Aldosterone promotes reabsorption of:", options: ["Potassium", "Sodium and water", "Glucose", "Calcium"], answer: 1, rationale: "Aldosterone increases sodium (and water) reabsorption, raising blood volume." },
      { type: "mcq", q: "The tubes carrying urine from the kidneys to the bladder are the:", options: ["Urethra", "Ureters", "Collecting ducts", "Renal pelvis"], answer: 1, rationale: "The ureters transport urine from each kidney to the bladder; the urethra empties the bladder." },
      { type: "mcq", q: "Adding wastes, drugs and excess ions from blood into the tubule is called tubular:", options: ["Filtration", "Reabsorption", "Secretion", "Excretion"], answer: 2, rationale: "Tubular secretion moves substances from blood into the tubule for elimination." },
      { type: "mcq", q: "The hormone the kidney releases to stimulate red-cell production is:", options: ["Renin", "Erythropoietin", "Aldosterone", "ADH"], answer: 1, rationale: "The kidney releases erythropoietin, which stimulates red-cell production in marrow." },
      { type: "mcq", q: "Normal adult urine output is approximately:", options: ["0.5-1 mL/kg/hour", "5 mL/kg/hour", "10 mL/kg/hour", "0.05 mL/kg/hour"], answer: 0, rationale: "About 0.5-1 mL/kg/hour (1-1.5 L/day) is normal; lower may indicate kidney injury." },
      { type: "mcq", q: "The muscular wall of the bladder that contracts to expel urine is the:", options: ["Detrusor muscle", "Diaphragm", "Sphincter of Oddi", "Psoas muscle"], answer: 0, rationale: "The detrusor muscle contracts during micturition to empty the bladder." },
      { type: "fill", q: "The cup-shaped structure surrounding the glomerulus is ______ capsule.", accept: ["bowman's", "bowmans", "bowman", "glomerular"], rationale: "Bowman's (glomerular) capsule receives the filtrate from the glomerulus." },
      { type: "fill", q: "The rate at which blood is filtered by the kidneys is abbreviated ______.", accept: ["gfr"], rationale: "Glomerular filtration rate (GFR) measures kidney filtering capacity." }
    ]
  },
  {
    id: "anp-19-male-repro",
    unit: "Unit 5 · Maintenance and Continuity",
    title: "Male Reproductive System",
    readMinutes: 19,
    summary: "Male reproductive organs, spermatogenesis, semen, and the hormonal control of male reproduction, with relevant disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The male reproductive system produces and delivers sperm and secretes male sex hormones. It consists of the testes (the gonads), a system of ducts, accessory glands, and the penis. Unlike the female system, most of it lies outside the body, which keeps the testes slightly cooler than core temperature — essential for sperm production." },
      { h: "The testes", p: "The two testes are held in the scrotum. Inside are coiled seminiferous tubules where sperm are made (spermatogenesis), supported by Sertoli cells. Between the tubules lie the interstitial (Leydig) cells, which secrete the male hormone testosterone.", figure: { caption: "Figure 19.1 — Male reproductive organs. Add a labelled image for detail.", placeholder: true } },
      { h: "The duct system and glands", list: [
        "Epididymis — sits on each testis; sperm mature and are stored here.",
        "Vas (ductus) deferens — carries sperm from the epididymis toward the urethra (and is cut in a vasectomy).",
        "Seminal vesicles — add a fructose-rich fluid that nourishes sperm.",
        "Prostate gland — adds a milky alkaline fluid that helps sperm survive the acidic vagina.",
        "Bulbo-urethral glands — secrete lubricating mucus.",
        "Urethra — the shared passage (within the penis) for both semen and urine."
      ] },
      { h: "Spermatogenesis", p: "Sperm formation begins at puberty and continues through life. By meiosis, cells in the seminiferous tubules produce haploid spermatozoa (23 chromosomes). A mature sperm has a head (with the nucleus and an enzyme-filled acrosome to penetrate the egg), a midpiece packed with mitochondria for energy, and a tail (flagellum) for swimming. Production takes about 64-72 days." },
      { h: "Semen", p: "Semen is the fluid ejaculated at orgasm. It is a mixture of sperm (only a small fraction of the volume) plus the secretions of the seminal vesicles, prostate and bulbo-urethral glands. These secretions nourish and protect the sperm, provide energy, and make the fluid alkaline to neutralise vaginal acidity." },
      { h: "Hormonal control", p: "Male reproduction is controlled by the hypothalamus and pituitary. The hypothalamus releases GnRH, which makes the anterior pituitary secrete FSH (which stimulates sperm production via Sertoli cells) and LH (which stimulates Leydig cells to make testosterone). Testosterone drives sperm production, the male secondary sexual characteristics (deeper voice, facial and body hair, muscle growth) and libido, and feeds back to keep its level stable." },
      { h: "Clinical & nursing relevance", list: [
        "Benign prostatic hyperplasia (BPH) — enlargement of the prostate in older men, obstructing urine flow.",
        "Prostate cancer — a common male cancer; screened by examination and PSA blood test.",
        "Cryptorchidism — undescended testis; needs correction to protect fertility.",
        "Male infertility — may relate to low sperm count or motility.",
        "Vasectomy — surgical division of the vas deferens for contraception."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "Name the organs of the male reproductive system and the function of each.",
      "Describe spermatogenesis and the structure of a mature sperm.",
      "What is semen and what do the accessory glands contribute?",
      "Explain the hormonal control of male reproduction.",
      "Describe the effects of testosterone."
    ],
    assessment: [
      { type: "mcq", q: "Sperm are produced in the:", options: ["Prostate gland", "Seminiferous tubules", "Epididymis", "Seminal vesicles"], answer: 1, rationale: "Spermatogenesis occurs in the seminiferous tubules of the testes." },
      { type: "mcq", q: "The main male sex hormone is:", options: ["Oestrogen", "Progesterone", "Testosterone", "Prolactin"], answer: 2, rationale: "Testosterone, from Leydig cells, is the principal male sex hormone." },
      { type: "mcq", q: "Testosterone is secreted by the:", options: ["Sertoli cells", "Interstitial (Leydig) cells", "Prostate", "Epididymis"], answer: 1, rationale: "Interstitial (Leydig) cells between the tubules secrete testosterone." },
      { type: "mcq", q: "Sperm mature and are stored in the:", options: ["Vas deferens", "Epididymis", "Urethra", "Prostate"], answer: 1, rationale: "The epididymis is the site of sperm maturation and storage." },
      { type: "mcq", q: "The testes are located in the scrotum to:", options: ["Increase their temperature", "Keep them slightly cooler than body core", "Protect them from hormones", "Aid urine flow"], answer: 1, rationale: "A slightly lower temperature is required for normal sperm production." },
      { type: "mcq", q: "The pituitary hormone that stimulates sperm production is:", options: ["LH", "FSH", "ADH", "Prolactin"], answer: 1, rationale: "FSH stimulates Sertoli cells to support spermatogenesis; LH drives testosterone." },
      { type: "mcq", q: "The structure of a sperm that contains enzymes to penetrate the egg is the:", options: ["Tail", "Midpiece", "Acrosome", "Flagellum"], answer: 2, rationale: "The acrosome on the sperm head releases enzymes to penetrate the ovum." },
      { type: "mcq", q: "The gland that adds alkaline fluid to help sperm survive vaginal acidity is the:", options: ["Prostate", "Thyroid", "Adrenal", "Pineal"], answer: 0, rationale: "The prostate adds a milky alkaline secretion that protects sperm." },
      { type: "mcq", q: "A vasectomy involves cutting the:", options: ["Urethra", "Vas deferens", "Epididymis", "Seminiferous tubule"], answer: 1, rationale: "The vas (ductus) deferens is divided in a vasectomy to prevent sperm passage." },
      { type: "mcq", q: "Enlargement of the prostate in older men is called:", options: ["Cryptorchidism", "Benign prostatic hyperplasia", "Orchitis", "Phimosis"], answer: 1, rationale: "BPH obstructs urine flow and is common with ageing." },
      { type: "fill", q: "An undescended testis is called ______.", accept: ["cryptorchidism"], rationale: "Cryptorchidism requires correction to protect fertility and reduce cancer risk." },
      { type: "fill", q: "The duct that carries sperm from the epididymis toward the urethra is the vas ______.", accept: ["deferens"], rationale: "The vas deferens conveys sperm and is divided in vasectomy." }
    ]
  },
  {
    id: "anp-20-female-repro",
    unit: "Unit 5 · Maintenance and Continuity",
    title: "Female Reproductive System",
    readMinutes: 23,
    summary: "Female reproductive organs, oogenesis, the ovarian and menstrual cycles with their hormones, fertilization and early pregnancy, and reproductive nursing applications.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The female reproductive system produces eggs (ova) and female sex hormones, receives sperm, and provides the site for fertilization, pregnancy and birth. Unlike the male system it works in monthly cycles and, in pregnancy, nurtures the developing baby. Its organs are the ovaries, fallopian (uterine) tubes, uterus, cervix, vagina, external genitalia and the breasts (mammary glands)." },
      { h: "The organs", list: [
        "Ovaries — the female gonads; produce ova and secrete oestrogen and progesterone.",
        "Fallopian tubes — carry the ovum toward the uterus; fertilization usually occurs here.",
        "Uterus — a muscular organ where the fertilized egg implants and the fetus develops; its lining is the endometrium.",
        "Cervix — the neck of the uterus opening into the vagina.",
        "Vagina — the birth canal and the passage that receives sperm.",
        "Breasts — produce milk (lactation) after birth."
      ], figure: { caption: "Figure 20.1 — Female reproductive organs. Add a labelled image for detail.", placeholder: true } },
      { h: "Oogenesis", p: "Egg formation (oogenesis) begins before birth: a female is born with all her immature eggs already present in the ovaries. From puberty, usually one matures and is released each month until menopause. Oogenesis by meiosis produces a haploid ovum (23 chromosomes), which at fertilization combines with a sperm to restore 46." },
      { h: "The ovarian cycle", p: "Each month the ovary passes through three phases: the follicular phase, in which a follicle ripens an egg under FSH; ovulation, the release of the mature egg (about day 14 of a 28-day cycle), triggered by a surge of LH; and the luteal phase, in which the empty follicle becomes the corpus luteum and secretes progesterone to prepare for possible pregnancy." },
      { h: "The menstrual (uterine) cycle", p: "While the ovary cycles, the uterine lining changes in step.", figure: {
        caption: "Figure 20.2 — Phases of the ~28-day menstrual cycle (ovulation around day 14).",
        svg: "<svg viewBox='0 0 600 86' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Menstrual cycle phases'>" +
          "<rect x='10' y='28' width='110' height='34' rx='6' fill='#B85C5C'/><text x='65' y='49' text-anchor='middle' font-family='Inter' font-size='10' font-weight='700' fill='#fff'>Menstrual (1-5)</text>" +
          "<rect x='124' y='28' width='160' height='34' rx='6' fill='#C99A50'/><text x='204' y='49' text-anchor='middle' font-family='Inter' font-size='10' font-weight='700' fill='#fff'>Proliferative (6-14)</text>" +
          "<rect x='288' y='28' width='18' height='34' rx='4' fill='#16A34A'/><text x='297' y='20' text-anchor='middle' font-family='Inter' font-size='9' font-weight='700' fill='#16A34A'>ovulation</text>" +
          "<rect x='310' y='28' width='280' height='34' rx='6' fill='#2E63B8'/><text x='450' y='49' text-anchor='middle' font-family='Inter' font-size='10' font-weight='700' fill='#fff'>Secretory (15-28)</text>" +
          "</svg>"
      } },
      { h: "Phases of the menstrual cycle", list: [
        "Menstrual phase (days 1-5) — the thickened lining is shed as the period when no pregnancy occurs.",
        "Proliferative phase (days 6-14) — rising oestrogen rebuilds and thickens the endometrium, ending at ovulation.",
        "Secretory phase (days 15-28) — progesterone from the corpus luteum makes the lining glandular and ready for implantation; if no pregnancy, hormone levels fall and menstruation begins again."
      ] },
      { h: "Hormones, fertilization and pregnancy", p: "The cycle is driven by the hypothalamus and pituitary (GnRH, FSH, LH) acting on the ovary, which secretes oestrogen and progesterone. Oestrogen also produces the female secondary sexual characteristics. If a sperm fertilizes the ovum in the fallopian tube, the resulting zygote travels to the uterus and implants in the endometrium. The developing placenta then secretes hormones (including hCG, detected by pregnancy tests) that maintain the pregnancy, and the corpus luteum persists rather than breaking down." },
      { h: "Clinical & nursing relevance", list: [
        "Menstrual disorders — e.g. dysmenorrhoea (painful periods), amenorrhoea (absent periods), menorrhagia (heavy bleeding).",
        "Polycystic ovary syndrome (PCOS) — a common cause of irregular cycles and infertility.",
        "Menopause — the natural end of cycles (around age 45-55) as ovarian hormones fall.",
        "Contraception and antenatal care — central to community and midwifery nursing.",
        "Cervical screening and breast awareness help detect cancers early."
      ] }
    ],
    references: REF_AP,
    examQuestions: [
      "Name the organs of the female reproductive system and the function of each.",
      "Describe oogenesis and how it differs from spermatogenesis.",
      "Describe the phases of the ovarian and menstrual cycles.",
      "Explain the roles of oestrogen and progesterone in the cycle.",
      "Outline fertilization, implantation and the role of the placenta."
    ],
    assessment: [
      { type: "mcq", q: "The female gonads that produce ova and hormones are the:", options: ["Ovaries", "Fallopian tubes", "Uterus", "Cervix"], answer: 0, rationale: "The ovaries produce ova and secrete oestrogen and progesterone." },
      { type: "mcq", q: "Fertilization of the ovum normally occurs in the:", options: ["Uterus", "Fallopian tube", "Vagina", "Cervix"], answer: 1, rationale: "Fertilization usually occurs in the fallopian (uterine) tube." },
      { type: "mcq", q: "In a typical 28-day cycle, ovulation occurs around day:", options: ["Day 1", "Day 7", "Day 14", "Day 28"], answer: 2, rationale: "Ovulation occurs about mid-cycle (around day 14), triggered by the LH surge." },
      { type: "mcq", q: "The surge of which hormone triggers ovulation?", options: ["FSH", "LH", "Progesterone", "Prolactin"], answer: 1, rationale: "A sharp rise (surge) in luteinising hormone (LH) triggers ovulation." },
      { type: "mcq", q: "The lining of the uterus that thickens and is shed is the:", options: ["Myometrium", "Endometrium", "Perimetrium", "Peritoneum"], answer: 1, rationale: "The endometrium thickens to receive an embryo and is shed as menstruation if none implants." },
      { type: "mcq", q: "After ovulation, the empty follicle becomes the corpus luteum, which secretes:", options: ["Oestrogen only", "Progesterone", "FSH", "Testosterone"], answer: 1, rationale: "The corpus luteum secretes progesterone to maintain the endometrium." },
      { type: "mcq", q: "A female is born with:", options: ["No eggs", "All her immature eggs already present", "Eggs that form monthly", "Eggs made only after puberty"], answer: 1, rationale: "Unlike sperm, a female's immature eggs are all present at birth." },
      { type: "mcq", q: "The hormone detected by pregnancy tests is:", options: ["LH", "hCG", "FSH", "ADH"], answer: 1, rationale: "Human chorionic gonadotrophin (hCG) from the placenta is detected by pregnancy tests." },
      { type: "mcq", q: "The natural cessation of menstrual cycles in mid-life is called:", options: ["Menarche", "Menopause", "Menorrhagia", "Amenorrhoea"], answer: 1, rationale: "Menopause is the permanent end of menstruation as ovarian hormones decline." },
      { type: "mcq", q: "Rising oestrogen in the proliferative phase causes the endometrium to:", options: ["Shed", "Thicken and rebuild", "Stop growing", "Become acidic"], answer: 1, rationale: "Oestrogen rebuilds and thickens the endometrium after menstruation." },
      { type: "fill", q: "Painful menstruation is termed ______.", accept: ["dysmenorrhoea", "dysmenorrhea"], rationale: "Dysmenorrhoea means painful periods." },
      { type: "fill", q: "The structure that nourishes the fetus and secretes pregnancy hormones is the ______.", accept: ["placenta"], rationale: "The placenta supplies the fetus and secretes hormones such as hCG and progesterone." }
    ]
  }
];
