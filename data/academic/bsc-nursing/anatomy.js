/* ============================================================
   B.Sc. Nursing (4-yr, 2018) · Year 1 · B123 Paper I — ANATOMY
   — 16 topics, degree level. Focus on gross & microscopic
   STRUCTURE (function is covered in the Physiology paper).
   Aligned to the BNMC B.Sc. Nursing syllabus (Anatomy, Paper I).
   Adapted & deepened from the diploma A&P base. Original wording,
   grounded in standard texts:
     • Tortora GJ, Derrickson B. Principles of Anatomy and Physiology. Wiley.
     • Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier.
     • Snell RS. Clinical Anatomy by Regions. Wolters Kluwer.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_ANA = [
  "Tortora GJ, Derrickson B. Principles of Anatomy and Physiology. Wiley.",
  "Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier.",
  "Snell RS. Clinical Anatomy by Regions. Wolters Kluwer."
];

window.Academic.topics["bsc-nursing/anatomy"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "ana-01-intro",
    unit: "Unit 1 · Introduction to Anatomy",
    title: "Introduction to Anatomy: Terminology, Planes & Levels of Organization",
    readMinutes: 17,
    summary: "Definition and subdivisions of anatomy, anatomical position, directional terms, body planes and sections, regions and cavities, and the levels of structural organization that frame all later study.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and scope", p: "Anatomy is the scientific study of the structure of the body and the relationships between its parts. Its major subdivisions include gross (macroscopic) anatomy — structures visible to the naked eye; microscopic anatomy — histology (tissues) and cytology (cells); developmental anatomy and embryology; and surface, radiographic and clinical (applied) anatomy. Nurses use anatomical knowledge to interpret assessment findings, localize pain and lesions, perform procedures safely (injections, catheterization, auscultation) and communicate precisely using shared terminology." },
      { h: "The anatomical position", p: "All anatomical descriptions assume the anatomical position: the body erect, head and eyes facing forward, feet together and flat, upper limbs by the sides with the palms turned forward (supinated). This is a fixed reference so that terms such as 'anterior' or 'lateral' always mean the same thing regardless of how the patient is actually lying." },
      { h: "Directional terms", list: [
        "Superior (cranial) / inferior (caudal) — toward the head / toward the feet.",
        "Anterior (ventral) / posterior (dorsal) — toward the front / toward the back.",
        "Medial / lateral — toward / away from the midline.",
        "Proximal / distal — nearer to / farther from the trunk or point of origin of a limb.",
        "Superficial / deep — toward / away from the body surface.",
        "Ipsilateral / contralateral — on the same side / on the opposite side of the body."
      ] },
      { h: "Planes and sections", p: "The body is described in three principal planes. The sagittal plane divides it into right and left parts (a midsagittal plane passes through the midline into equal halves). The frontal (coronal) plane divides it into anterior and posterior parts. The transverse (horizontal/axial) plane divides it into superior and inferior parts and is the plane of most CT images. Oblique planes lie at an angle.", figure: {
        caption: "Figure 1.1 — The three principal anatomical planes.",
        svg: '<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Body planes"><g fill="#DCFCE7" stroke="#0F4C3A" stroke-width="1.5"><circle cx="160" cy="40" r="22"/><rect x="132" y="62" width="56" height="90" rx="14"/><rect x="138" y="150" width="20" height="80" rx="9"/><rect x="162" y="150" width="20" height="80" rx="9"/></g><line x1="160" y1="12" x2="160" y2="244" stroke="#7C2D12" stroke-width="2" stroke-dasharray="5 4"/><text x="166" y="20" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Sagittal</text><line x1="96" y1="118" x2="224" y2="118" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4"/><text x="226" y="116" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Transverse</text><ellipse cx="160" cy="118" rx="70" ry="118" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="5 4"/><text x="40" y="210" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Frontal</text></svg>'
      } },
      { h: "Body cavities", p: "Internal organs lie within body cavities that protect them. The dorsal cavity contains the cranial cavity (brain) and vertebral canal (spinal cord). The ventral cavity is subdivided by the diaphragm into the thoracic cavity (right and left pleural cavities around the lungs, and the mediastinum containing the pericardial cavity and heart) and the abdominopelvic cavity (abdominal + pelvic). Serous membranes — pleura, pericardium and peritoneum — line these cavities and reduce friction." },
      { h: "Regions and quadrants", p: "The abdomen is mapped for clinical description either into nine regions (right/left hypochondriac, epigastric; right/left lumbar, umbilical; right/left iliac, hypogastric) by two vertical and two horizontal planes, or into four quadrants (RUQ, LUQ, RLQ, LLQ) by lines through the umbilicus. Nurses use these to record the site of pain, masses or tenderness (for example, RLQ pain in appendicitis)." },
      { h: "Levels of structural organization", p: "The body is built in a hierarchy: chemical (atoms, molecules) → cellular (cells) → tissue → organ → organ system → organism. Each level provides the structural basis for the next, and structure at every level is matched to function — the principle of 'form follows function' that underlies all of anatomy.", figure: {
        caption: "Figure 1.2 — Levels of structural organization, simplest to most complex.",
        svg: '<svg viewBox="0 0 720 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Levels of organization"><defs><marker id="anaAr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="6" y="18" width="98" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="55" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Chemical</text><line x1="104" y1="35" x2="118" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="120" y="18" width="90" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="165" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Cell</text><line x1="210" y1="35" x2="224" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="226" y="18" width="90" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="271" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Tissue</text><line x1="316" y1="35" x2="330" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="332" y="18" width="90" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="377" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Organ</text><line x1="422" y1="35" x2="436" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="438" y="18" width="96" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="486" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">System</text><line x1="534" y1="35" x2="548" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="550" y="18" width="104" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="602" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Organism</text></svg>'
      } },
      { h: "Clinical and nursing application", p: "Precise terminology prevents error: a wound described as '3 cm proximal to the medial malleolus' is unambiguous. Cavity and membrane anatomy explains conditions nurses meet — pleural effusion, cardiac tamponade, peritonitis. Regional mapping guides referral of pain and the site for procedures such as paracentesis (RLQ/LLQ) and intramuscular injection (upper outer quadrant of the gluteal region)." },
      { h: "Key terms", list: [
        "Anatomical position — the standard reference posture.",
        "Serous membrane — double-layered membrane lining a ventral cavity.",
        "Mediastinum — the central compartment of the thoracic cavity.",
        "Histology — microscopic study of tissues.",
        "Anatomical variation — normal differences between individuals."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Define anatomy and describe its major subdivisions.",
      "Describe the anatomical position and list six directional terms with examples.",
      "Draw and label the three principal anatomical planes.",
      "Name the body cavities and the serous membranes that line them.",
      "Explain the nine abdominal regions and their clinical usefulness in nursing assessment."
    ],
    assessment: [
      { type: "mcq", q: "In the anatomical position the palms are:", options: ["Facing backward", "Facing forward (supinated)", "Facing the thighs", "Facing upward"], answer: 1, rationale: "The anatomical position specifies palms turned forward (forearms supinated)." },
      { type: "mcq", q: "A plane dividing the body into right and left parts is:", options: ["Sagittal", "Frontal", "Transverse", "Oblique"], answer: 0, rationale: "The sagittal plane divides into right and left; the midsagittal gives equal halves." },
      { type: "mcq", q: "The term meaning nearer to the point of attachment of a limb is:", options: ["Distal", "Superficial", "Proximal", "Lateral"], answer: 2, rationale: "Proximal is nearer the trunk/origin; distal is farther." },
      { type: "mcq", q: "The diaphragm separates the:", options: ["Cranial from vertebral cavity", "Thoracic from abdominopelvic cavity", "Pleural from pericardial cavity", "Abdominal from pelvic cavity"], answer: 1, rationale: "The muscular diaphragm divides the ventral cavity into thoracic and abdominopelvic parts." },
      { type: "mcq", q: "The central compartment of the thoracic cavity containing the heart is the:", options: ["Pleura", "Peritoneum", "Mediastinum", "Retroperitoneum"], answer: 2, rationale: "The mediastinum lies between the pleural cavities and contains the pericardial cavity and heart." },
      { type: "mcq", q: "The transverse plane is the plane of most images produced by:", options: ["Chest X-ray", "CT scan", "Standard ECG", "Photography"], answer: 1, rationale: "CT (axial) images are taken in the transverse/horizontal plane." },
      { type: "mcq", q: "The correct order of structural organization is:", options: ["Cell → chemical → tissue → organ", "Chemical → cell → tissue → organ → system", "Tissue → cell → organ → system", "Organ → system → cell → tissue"], answer: 1, rationale: "Complexity increases: chemical, cellular, tissue, organ, system, organism." },
      { type: "mcq", q: "Appendicitis pain is classically located in which abdominal region/quadrant?", options: ["Right upper quadrant", "Left lumbar region", "Right iliac / right lower quadrant", "Epigastric region"], answer: 2, rationale: "The appendix lies in the right iliac region (RLQ)." },
      { type: "mcq", q: "'Contralateral' means:", options: ["On the same side", "On the opposite side", "Toward the head", "Away from the surface"], answer: 1, rationale: "Contralateral = opposite side; ipsilateral = same side." },
      { type: "mcq", q: "The serous membrane lining the abdominal cavity is the:", options: ["Pleura", "Pericardium", "Peritoneum", "Meninges"], answer: 2, rationale: "The peritoneum lines the abdominopelvic cavity; pleura and pericardium line the thorax." }
      , { type: "fill", q: "The plane that divides the body into anterior and posterior parts is the ____ plane.", accept: ["frontal", "coronal"], rationale: "The frontal (coronal) plane separates front from back." }
      , { type: "fill", q: "The microscopic study of tissues is called ____.", accept: ["histology"], rationale: "Histology studies tissues; cytology studies cells." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ana-02-cell",
    unit: "Unit 1 · Introduction to Anatomy",
    title: "Structure of the Cell",
    readMinutes: 17,
    summary: "The generalized eukaryotic cell — plasma membrane, cytoplasm and organelles, and the nucleus — described at degree level as the structural unit of the body.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The cell as the structural unit", p: "The cell is the smallest independently living structural and functional unit of the body. The human body contains an estimated tens of trillions of cells of about 200 types, all sharing a common generalized plan: a plasma membrane enclosing cytoplasm (cytosol plus organelles) and, in most cells, a nucleus. Cell shape and organelle content vary with the work the cell does — a principle of structural specialization." },
      { h: "The plasma membrane", p: "The plasma membrane is a phospholipid bilayer arranged as a fluid mosaic: amphipathic phospholipids form the bilayer with hydrophilic heads facing the watery interior and exterior and hydrophobic tails inward; cholesterol stabilizes fluidity; and integral and peripheral proteins act as channels, carriers, receptors, enzymes and cell-identity markers. Glycoproteins and glycolipids form the glycocalyx on the outer surface.", figure: {
        caption: "Figure 2.1 — Fluid-mosaic plasma membrane: a phospholipid bilayer with embedded proteins.",
        svg: '<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plasma membrane bilayer"><text x="8" y="20" font-family="sans-serif" font-size="11" fill="#0F4C3A">Extracellular fluid</text><g fill="#22C55E" stroke="#15803D"><circle cx="40" cy="40" r="8"/><circle cx="80" cy="40" r="8"/><circle cx="120" cy="40" r="8"/><circle cx="220" cy="40" r="8"/><circle cx="260" cy="40" r="8"/><circle cx="300" cy="40" r="8"/><circle cx="340" cy="40" r="8"/><circle cx="380" cy="40" r="8"/><circle cx="40" cy="110" r="8"/><circle cx="80" cy="110" r="8"/><circle cx="120" cy="110" r="8"/><circle cx="220" cy="110" r="8"/><circle cx="260" cy="110" r="8"/><circle cx="300" cy="110" r="8"/><circle cx="340" cy="110" r="8"/><circle cx="380" cy="110" r="8"/></g><rect x="150" y="30" width="30" height="90" rx="10" fill="#0F4C3A"/><text x="165" y="82" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#fff">protein</text><text x="8" y="140" font-family="sans-serif" font-size="11" fill="#0F4C3A">Cytoplasm</text></svg>'
      } },
      { h: "Cytoplasm and cytosol", p: "The cytoplasm is everything between the plasma membrane and the nucleus. It consists of the cytosol — a gel-like intracellular fluid of water, ions, nutrients and enzymes — the organelles suspended within it, and the cytoskeleton, a protein framework of microfilaments, intermediate filaments and microtubules that gives shape, anchors organelles and enables movement." },
      { h: "Membranous organelles", list: [
        "Endoplasmic reticulum — rough ER (studded with ribosomes) synthesizes and folds proteins; smooth ER makes lipids, detoxifies and stores calcium.",
        "Golgi apparatus — modifies, sorts and packages proteins and lipids into vesicles for secretion or delivery.",
        "Lysosomes — membrane sacs of digestive (hydrolytic) enzymes for intracellular digestion and autophagy.",
        "Peroxisomes — contain oxidases and catalase; neutralize free radicals and detoxify.",
        "Mitochondria — double-membraned 'powerhouses'; the folded inner membrane (cristae) is the structural site of ATP production."
      ] },
      { h: "Non-membranous organelles", list: [
        "Ribosomes — sites of protein synthesis; free ribosomes make cytosolic proteins, bound ribosomes make secreted/membrane proteins.",
        "Cytoskeleton — microfilaments (actin), intermediate filaments (support) and microtubules (tracks, mitotic spindle).",
        "Centrosome and centrioles — organize microtubules and form the mitotic spindle.",
        "Cilia and flagella — motile microtubule projections (cilia move fluid over the surface; a flagellum propels the sperm)."
      ] },
      { h: "The nucleus", p: "The nucleus is the control centre. A double nuclear envelope perforated by nuclear pores separates it from the cytoplasm; within lie the nucleoplasm, one or more nucleoli (sites of ribosome subunit assembly), and chromatin — DNA wound around histone proteins. During division chromatin condenses into visible chromosomes (46 in a human somatic cell). Some cells are anucleate (mature red cells) and some multinucleate (skeletal muscle fibres)." },
      { h: "Structural specialization — examples", p: "Structure predicts function: cells rich in mitochondria (cardiac muscle, renal tubule) are metabolically active; cells with abundant rough ER and Golgi (plasma cells, pancreatic acinar cells) are secretory; cells with microvilli (intestinal, renal) maximize surface area; ciliated cells (respiratory tract) move mucus." },
      { h: "Clinical and nursing application", p: "Organelle structure explains disease: lysosomal enzyme defects cause storage disorders; mitochondrial abnormalities cause fatigable multisystem disease; many antibiotics selectively target bacterial ribosomes, sparing human cells. Understanding the membrane underlies drug absorption, fluid and electrolyte movement, and why cell injury (hypoxia) rapidly disrupts the membrane and organelles." },
      { h: "Key terms", list: [
        "Organelle — a specialized subcellular structure with a defined role.",
        "Fluid mosaic — model of the plasma membrane.",
        "Cristae — folds of the inner mitochondrial membrane.",
        "Chromatin — the DNA-protein complex within the nucleus.",
        "Glycocalyx — carbohydrate coat on the cell surface."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Draw and label a generalized cell and its principal organelles.",
      "Describe the fluid-mosaic structure of the plasma membrane.",
      "Compare the structure and role of rough and smooth endoplasmic reticulum.",
      "Describe the structure of the nucleus and the chromatin it contains.",
      "Give three examples of structural specialization of cells and relate structure to function."
    ],
    assessment: [
      { type: "mcq", q: "The plasma membrane is best described as a:", options: ["Single protein sheet", "Rigid lipid wall", "Fluid-mosaic phospholipid bilayer", "Carbohydrate mesh"], answer: 2, rationale: "The fluid-mosaic model describes a phospholipid bilayer with embedded proteins." },
      { type: "mcq", q: "Ribosomes are the site of:", options: ["Lipid synthesis", "Protein synthesis", "ATP production", "DNA replication"], answer: 1, rationale: "Ribosomes assemble amino acids into proteins." },
      { type: "mcq", q: "The folded inner membrane of a mitochondrion is called the:", options: ["Cristae", "Cisternae", "Glycocalyx", "Chromatin"], answer: 0, rationale: "Cristae are the inner-membrane folds where ATP is generated." },
      { type: "mcq", q: "Digestive (hydrolytic) enzymes for intracellular digestion are contained in:", options: ["Ribosomes", "Lysosomes", "Centrioles", "Nucleolus"], answer: 1, rationale: "Lysosomes hold hydrolytic enzymes for intracellular digestion and autophagy." },
      { type: "mcq", q: "Rough endoplasmic reticulum is distinguished by attached:", options: ["Lysosomes", "Centrioles", "Ribosomes", "Cilia"], answer: 2, rationale: "Ribosomes stud the rough ER, giving it its granular appearance." },
      { type: "mcq", q: "The Golgi apparatus mainly:", options: ["Produces ATP", "Modifies, sorts and packages proteins", "Stores genetic material", "Synthesizes ribosomes"], answer: 1, rationale: "The Golgi processes, sorts and packages secretory products into vesicles." },
      { type: "mcq", q: "The nucleolus is the site of:", options: ["Lipid detoxification", "Ribosome subunit assembly", "ATP synthesis", "Phagocytosis"], answer: 1, rationale: "The nucleolus assembles ribosomal subunits." },
      { type: "mcq", q: "A mature human red blood cell is unusual because it:", options: ["Has many nuclei", "Lacks a nucleus", "Has cilia", "Has cristae only"], answer: 1, rationale: "Mature erythrocytes are anucleate, maximizing space for haemoglobin." },
      { type: "mcq", q: "The number of chromosomes in a normal human somatic cell is:", options: ["23", "44", "46", "48"], answer: 2, rationale: "Somatic cells are diploid with 46 chromosomes (23 pairs)." },
      { type: "mcq", q: "Microvilli on intestinal and renal cells primarily:", options: ["Move mucus", "Increase absorptive surface area", "Produce ATP", "Store calcium"], answer: 1, rationale: "Microvilli greatly increase surface area for absorption." }
      , { type: "fill", q: "The gel-like intracellular fluid of the cytoplasm is the ____.", accept: ["cytosol"], rationale: "Cytosol is the fluid portion of the cytoplasm surrounding the organelles." }
      , { type: "fill", q: "The double-membraned organelle known as the powerhouse of the cell is the ____.", accept: ["mitochondrion", "mitochondria"], rationale: "Mitochondria generate most cellular ATP." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ana-03-tissues",
    unit: "Unit 1 · Introduction to Anatomy",
    title: "Tissues, Membranes & Glands",
    readMinutes: 18,
    summary: "The four primary tissue types — epithelial, connective, muscular and nervous — their structural classification, body membranes, and the structure of exocrine and endocrine glands.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a tissue?", p: "A tissue is a group of similar cells, together with their extracellular matrix, that share a common origin and perform a common function. Histology recognizes four primary tissue types: epithelial, connective, muscular and nervous. Organs are built by combining these tissues in characteristic proportions." },
      { h: "Epithelial tissue — structure", p: "Epithelium covers surfaces, lines cavities and forms glands. Its cells are closely packed with little matrix, are polarized (apical and basal surfaces), rest on a basement membrane, and are avascular (nourished by diffusion). It is classified by cell layers — simple (one layer), stratified (many), pseudostratified — and by cell shape — squamous (flat), cuboidal, columnar. Transitional epithelium stretches (urinary tract)." },
      { h: "Connective tissue — structure", p: "Connective tissue is the most abundant and diverse; its defining feature is abundant extracellular matrix (ground substance + fibres) with relatively few, scattered cells. Fibres are collagen (strength), elastic (recoil) and reticular (fine networks).", list: [
        "Loose connective tissue — areolar, adipose, reticular.",
        "Dense connective tissue — regular (tendons, ligaments), irregular (dermis), elastic.",
        "Cartilage — hyaline, elastic, fibrocartilage (firm gel matrix, avascular).",
        "Bone (osseous) — mineralized matrix arranged in osteons.",
        "Blood — cells and platelets suspended in fluid plasma matrix."
      ] },
      { h: "Muscular tissue — structure", p: "Muscle tissue is specialized for contraction and is composed of elongated cells (fibres) containing actin and myosin. The three types are structurally distinct: skeletal (striated, multinucleate, voluntary), cardiac (striated, branched, single nucleus, joined by intercalated discs, involuntary) and smooth (non-striated, spindle-shaped, single central nucleus, involuntary — in vessel and viscus walls)." },
      { h: "Nervous tissue — structure", p: "Nervous tissue consists of neurons — excitable cells with a cell body, dendrites and a single axon that conduct impulses — and neuroglia (supporting cells) that protect, insulate and nourish neurons. It forms the brain, spinal cord and nerves." },
      { h: "Body membranes", list: [
        "Epithelial membranes — mucous (line cavities open to the exterior; secrete mucus), serous (line closed cavities; secrete serous fluid — pleura, pericardium, peritoneum), cutaneous (the skin).",
        "Synovial membranes — connective-tissue membranes lining joint cavities and secreting synovial fluid; contain no epithelium."
      ] },
      { h: "Glands — structure and classification", p: "A gland is one or more epithelial cells that secrete a product. Endocrine glands are ductless and release hormones directly into the blood. Exocrine glands retain ducts and secrete onto a surface (sweat, salivary, digestive glands). Exocrine glands are classified structurally as unicellular (goblet cell) or multicellular, and by duct branching (simple/compound) and secretory shape (tubular, acinar/alveolar, tubuloacinar).", figure: {
        caption: "Figure 3.1 — Classification of glands by secretion route.",
        svg: '<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gland classification"><rect x="180" y="12" width="120" height="34" rx="8" fill="#0F4C3A"/><text x="240" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#fff">GLANDS</text><line x1="240" y1="46" x2="120" y2="80" stroke="#15803D" stroke-width="2"/><line x1="240" y1="46" x2="360" y2="80" stroke="#15803D" stroke-width="2"/><rect x="40" y="80" width="160" height="70" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="120" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Endocrine</text><text x="120" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">ductless</text><text x="120" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">hormone to blood</text><rect x="280" y="80" width="160" height="70" rx="8" fill="#F0FDF4" stroke="#15803D"/><text x="360" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Exocrine</text><text x="360" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">has ducts</text><text x="360" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">secretes onto surface</text></svg>'
      } },
      { h: "Clinical and nursing application", p: "Tissue structure underpins healing and injury: epithelium regenerates well, cartilage poorly (avascular). Metaplasia (e.g. respiratory epithelium changing in smokers) and dysplasia are recognized on biopsy. Serous-membrane inflammation causes pleurisy or peritonitis; synovial inflammation causes synovitis in arthritis. Recognizing gland types explains cystic fibrosis (exocrine) versus endocrine disease such as goitre." },
      { h: "Key terms", list: [
        "Basement membrane — thin layer anchoring epithelium to underlying tissue.",
        "Extracellular matrix — non-living material surrounding connective-tissue cells.",
        "Intercalated disc — junction between cardiac muscle cells.",
        "Neuroglia — supporting cells of nervous tissue.",
        "Serous fluid — lubricant secreted by serous membranes."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Name the four primary tissue types and give one location and function of each.",
      "Classify epithelial tissue by number of layers and cell shape, with examples.",
      "Describe the general structure of connective tissue and list its main types.",
      "Compare skeletal, cardiac and smooth muscle structurally.",
      "Differentiate endocrine and exocrine glands and classify exocrine glands structurally."
    ],
    assessment: [
      { type: "mcq", q: "Which tissue covers surfaces and lines cavities?", options: ["Epithelial", "Connective", "Muscular", "Nervous"], answer: 0, rationale: "Epithelial tissue covers and lines body surfaces and forms glands." },
      { type: "mcq", q: "The defining feature of connective tissue is:", options: ["Striations", "Excitability", "Abundant extracellular matrix", "Closely packed cells with no matrix"], answer: 2, rationale: "Connective tissue has abundant extracellular matrix with scattered cells." },
      { type: "mcq", q: "Epithelium that stretches, lining the urinary bladder, is:", options: ["Simple squamous", "Stratified columnar", "Transitional", "Pseudostratified"], answer: 2, rationale: "Transitional epithelium accommodates stretching in the urinary tract." },
      { type: "mcq", q: "Cardiac muscle cells are joined by:", options: ["Basement membranes", "Synovial fluid", "Neuroglia", "Intercalated discs"], answer: 3, rationale: "Intercalated discs electrically and mechanically couple cardiac cells." },
      { type: "mcq", q: "Which membrane lines closed body cavities and secretes serous fluid?", options: ["Serous membrane", "Mucous membrane", "Synovial membrane", "Cutaneous membrane"], answer: 0, rationale: "Serous membranes (pleura, pericardium, peritoneum) line closed cavities." },
      { type: "mcq", q: "Endocrine glands are characterized by being:", options: ["Ductless, secreting into blood", "Duct-bearing, secreting to a surface", "Non-secretory", "Made of muscle"], answer: 0, rationale: "Endocrine glands lack ducts and release hormones into the blood." },
      { type: "mcq", q: "Tendons and ligaments are composed mainly of:", options: ["Loose areolar tissue", "Hyaline cartilage", "Dense regular connective tissue", "Adipose tissue"], answer: 2, rationale: "Dense regular connective tissue has parallel collagen fibres for tensile strength." },
      { type: "mcq", q: "Neuroglia are cells that:", options: ["Conduct impulses", "Contract", "Secrete hormones", "Support and protect neurons"], answer: 3, rationale: "Neuroglia support, insulate and nourish neurons but do not conduct impulses." },
      { type: "mcq", q: "Cartilage heals poorly mainly because it is:", options: ["Avascular", "Highly vascular", "Striated", "Excitable"], answer: 0, rationale: "Cartilage is avascular, so nutrient delivery and repair are slow." },
      { type: "mcq", q: "A goblet cell is an example of a:", options: ["Multicellular endocrine gland", "Serous membrane", "Unicellular exocrine gland", "Neuroglial cell"], answer: 2, rationale: "The goblet cell is a unicellular exocrine gland secreting mucus." }
      , { type: "fill", q: "Skeletal and cardiac muscle appear striped and are described as ____ muscle.", accept: ["striated"], rationale: "Skeletal and cardiac muscle are striated; smooth muscle is not." }
      , { type: "fill", q: "The connective-tissue membrane lining a joint cavity is the ____ membrane.", accept: ["synovial"], rationale: "Synovial membranes secrete synovial fluid into joint cavities." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ana-04-skeletal",
    unit: "Unit 2 · Musculoskeletal System (Structure)",
    title: "Structure of the Skeletal System: Bones & Cartilage",
    readMinutes: 18,
    summary: "The skeleton and its divisions, classification of bones by shape, the gross and microscopic structure of bone, cartilage, and the organization of the axial and appendicular skeleton.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of the skeleton", p: "The adult skeleton has 206 named bones and provides the rigid framework of the body — support, protection of organs, levers for movement, mineral (calcium/phosphate) storage, and a site of blood-cell formation (haemopoiesis) in red marrow. It is divided into the axial skeleton (skull, vertebral column, ribs, sternum — 80 bones) and the appendicular skeleton (limbs and their girdles — 126 bones)." },
      { h: "Classification of bones by shape", list: [
        "Long bones — longer than wide, with a shaft and two ends (femur, humerus, phalanges).",
        "Short bones — roughly cube-shaped (carpals, tarsals).",
        "Flat bones — thin and often curved for protection (skull vault, sternum, ribs, scapula).",
        "Irregular bones — complex shapes (vertebrae, facial bones, hip bone).",
        "Sesamoid bones — develop within tendons (patella)."
      ] },
      { h: "Gross structure of a long bone", p: "A typical long bone has a diaphysis (shaft) of compact bone surrounding a medullary (marrow) cavity; two epiphyses (ends) of spongy bone covered by articular (hyaline) cartilage; the metaphysis, containing the epiphyseal (growth) plate in the young and the epiphyseal line in adults; the periosteum, a tough outer connective-tissue sheath; and the endosteum lining internal surfaces.", figure: {
        caption: "Figure 4.1 — Regions of a long bone (schematic).",
        svg: '<svg viewBox="0 0 220 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Long bone regions"><rect x="90" y="20" width="40" height="220" rx="18" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><ellipse cx="110" cy="30" rx="34" ry="20" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><ellipse cx="110" cy="230" rx="34" ry="20" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="150" y="34" font-family="sans-serif" font-size="11" fill="#0F4C3A">Epiphysis</text><text x="150" y="130" font-family="sans-serif" font-size="11" fill="#0F4C3A">Diaphysis</text><text x="150" y="234" font-family="sans-serif" font-size="11" fill="#0F4C3A">Epiphysis</text><line x1="110" y1="60" x2="110" y2="200" stroke="#15803D" stroke-width="6"/><text x="4" y="130" font-family="sans-serif" font-size="11" fill="#15803D">Medullary</text><text x="4" y="144" font-family="sans-serif" font-size="11" fill="#15803D">cavity</text></svg>'
      } },
      { h: "Microscopic structure of bone", p: "Compact bone is built of osteons (Haversian systems): concentric lamellae of mineralized matrix around a central (Haversian) canal carrying vessels and nerves. Osteocytes lie in lacunae connected by canaliculi. Spongy (cancellous) bone consists of a lattice of trabeculae aligned along lines of stress, with red marrow in the spaces. Bone cells are osteoblasts (form bone), osteocytes (mature, maintain matrix), and osteoclasts (resorb bone)." },
      { h: "Bone matrix", p: "Bone matrix combines an organic component — mainly type I collagen and ground substance, giving flexibility and tensile strength — with an inorganic component of calcium phosphate crystals (hydroxyapatite), giving hardness and compressive strength. The balance explains why children's bones bend (greenstick fractures) and elderly bones become brittle (osteoporosis)." },
      { h: "Cartilage — structure", p: "Cartilage is avascular connective tissue of chondrocytes in lacunae within a firm matrix, covered by perichondrium. Types: hyaline (most common; articular surfaces, costal cartilage, respiratory tract), elastic (external ear, epiglottis), and fibrocartilage (intervertebral discs, menisci, pubic symphysis — resists compression). Cartilage precedes bone in endochondral ossification." },
      { h: "The axial and appendicular skeleton", p: "Axial: 22 skull bones (8 cranial + 14 facial), the hyoid, 6 ear ossicles, 26 vertebrae (7 cervical, 12 thoracic, 5 lumbar, sacrum, coccyx), 12 pairs of ribs and the sternum. Appendicular: the pectoral girdle (clavicle, scapula) and upper limb; the pelvic girdle (hip bones) and lower limb." },
      { h: "Clinical and nursing application", p: "Bone structure explains fracture types and healing (haematoma → callus → remodelling), the vulnerability of the epiphyseal plate in children, and osteoporotic fragility fractures. Red marrow sites (sternum, iliac crest) are used for marrow aspiration. Nurses apply this in traction and cast care, fall prevention, and calcium/vitamin-D health education." },
      { h: "Key terms", list: [
        "Osteon — structural unit of compact bone.",
        "Diaphysis / epiphysis — shaft / end of a long bone.",
        "Periosteum — connective-tissue sheath covering bone.",
        "Trabeculae — bony struts of spongy bone.",
        "Hydroxyapatite — calcium-phosphate mineral of bone matrix."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Classify bones by shape and give an example of each.",
      "Describe the gross structure of a long bone with a labelled diagram.",
      "Describe the microscopic structure of compact bone.",
      "Compare the organic and inorganic components of bone matrix.",
      "Name the three types of cartilage with their locations and structural features."
    ],
    assessment: [
      { type: "mcq", q: "The number of bones in the adult human skeleton is:", options: ["186", "206", "216", "246"], answer: 1, rationale: "The adult skeleton has 206 named bones." },
      { type: "mcq", q: "The shaft of a long bone is the:", options: ["Epiphysis", "Metaphysis", "Diaphysis", "Periosteum"], answer: 2, rationale: "The diaphysis is the tubular shaft; the epiphyses are the ends." },
      { type: "mcq", q: "The structural unit of compact bone is the:", options: ["Trabecula", "Osteon", "Lacuna", "Sarcomere"], answer: 1, rationale: "The osteon (Haversian system) is compact bone's structural unit." },
      { type: "mcq", q: "Bone-resorbing cells are:", options: ["Osteoblasts", "Osteocytes", "Osteoclasts", "Chondrocytes"], answer: 2, rationale: "Osteoclasts resorb bone; osteoblasts build it." },
      { type: "mcq", q: "The patella is an example of a/an:", options: ["Long bone", "Flat bone", "Sesamoid bone", "Irregular bone"], answer: 2, rationale: "The patella develops within a tendon, making it a sesamoid bone." },
      { type: "mcq", q: "The inorganic mineral giving bone its hardness is:", options: ["Collagen", "Hydroxyapatite (calcium phosphate)", "Keratin", "Elastin"], answer: 1, rationale: "Hydroxyapatite crystals provide compressive strength and hardness." },
      { type: "mcq", q: "Fibrocartilage is found in the:", options: ["External ear", "Trachea", "Intervertebral discs", "Articular surface of the knee condyles"], answer: 2, rationale: "Fibrocartilage forms intervertebral discs and menisci, resisting compression." },
      { type: "mcq", q: "Which is part of the axial skeleton?", options: ["Femur", "Scapula", "Vertebral column", "Clavicle"], answer: 2, rationale: "The vertebral column is axial; scapula, clavicle and femur are appendicular." },
      { type: "mcq", q: "Growth in length of a long bone occurs at the:", options: ["Periosteum", "Epiphyseal plate", "Medullary cavity", "Endosteum"], answer: 1, rationale: "The epiphyseal (growth) plate enables lengthwise growth in the young." },
      { type: "mcq", q: "The number of cervical vertebrae is:", options: ["5", "7", "12", "26"], answer: 1, rationale: "There are 7 cervical vertebrae." }
      , { type: "fill", q: "The tough connective-tissue sheath covering the outer surface of a bone is the ____.", accept: ["periosteum"], rationale: "The periosteum covers bone and supports repair and growth." }
      , { type: "fill", q: "Mature bone cells housed in lacunae are called ____.", accept: ["osteocytes", "osteocyte"], rationale: "Osteocytes are mature bone cells maintaining the matrix." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ana-05-joints",
    unit: "Unit 2 · Musculoskeletal System (Structure)",
    title: "Structure of Joints & Ligaments",
    readMinutes: 17,
    summary: "Classification of joints by structure and function, the detailed anatomy of a synovial joint, types of synovial joint, and the structure of ligaments and bursae.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a joint?", p: "A joint (articulation) is the site where two or more bones, or bone and cartilage, meet. Joints hold the skeleton together and, in most cases, permit movement. They are classified structurally by the material uniting the bones and functionally by the degree of movement they allow." },
      { h: "Structural classification", list: [
        "Fibrous joints — bones united by fibrous tissue, no joint cavity (sutures of the skull, syndesmoses, gomphoses).",
        "Cartilaginous joints — united by cartilage, no cavity (synchondroses such as the epiphyseal plate; symphyses such as the pubic symphysis and intervertebral discs).",
        "Synovial joints — bones separated by a fluid-filled cavity; freely movable and the most common type."
      ] },
      { h: "Functional classification", list: [
        "Synarthrosis — immovable (skull sutures).",
        "Amphiarthrosis — slightly movable (pubic symphysis, intervertebral joints).",
        "Diarthrosis — freely movable (all synovial joints)."
      ] },
      { h: "Structure of a synovial joint", p: "The distinguishing features of a synovial joint are: articular (hyaline) cartilage capping the bone ends; a joint (synovial) cavity; a two-layered articular capsule (fibrous outer layer + synovial membrane inner layer); synovial fluid lubricating and nourishing the cartilage; and reinforcing ligaments. Some contain accessory structures — articular discs/menisci, and bursae.", figure: {
        caption: "Figure 5.1 — Components of a synovial joint.",
        svg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Synovial joint"><rect x="60" y="15" width="180" height="55" rx="12" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><rect x="60" y="140" width="180" height="55" rx="12" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><rect x="70" y="66" width="160" height="10" fill="#22C55E"/><rect x="70" y="134" width="160" height="10" fill="#22C55E"/><rect x="90" y="78" width="120" height="54" fill="#F0FDF4" stroke="#15803D" stroke-dasharray="4 3"/><line x1="60" y1="70" x2="35" y2="70" stroke="#0F4C3A"/><text x="0" y="60" font-family="sans-serif" font-size="10" fill="#0F4C3A">Articular</text><text x="0" y="73" font-family="sans-serif" font-size="10" fill="#0F4C3A">cartilage</text><line x1="150" y1="105" x2="150" y2="105" stroke="#15803D"/><text x="112" y="108" font-family="sans-serif" font-size="10" fill="#15803D">Joint cavity</text><text x="242" y="108" font-family="sans-serif" font-size="10" fill="#0F4C3A">Capsule</text></svg>'
      } },
      { h: "Types of synovial joints", list: [
        "Plane (gliding) — flat surfaces slide (intercarpal joints).",
        "Hinge — angular motion in one plane (elbow, knee, ankle).",
        "Pivot — rotation around a long axis (atlanto-axial, proximal radioulnar).",
        "Condyloid (ellipsoid) — biaxial (wrist, metacarpophalangeal).",
        "Saddle — biaxial with greater range (thumb carpometacarpal).",
        "Ball-and-socket — multiaxial, freest movement (shoulder, hip)."
      ] },
      { h: "Ligaments, tendons and bursae", p: "Ligaments are bands of dense regular connective tissue (mainly collagen with some elastic fibres) that connect bone to bone and stabilize joints. Tendons connect muscle to bone. Bursae are flattened, fluid-filled synovial sacs that cushion movement between structures (e.g. between skin and bone, or tendon and bone); tendon sheaths are elongated bursae wrapping tendons." },
      { h: "Factors influencing joint stability and movement", p: "Stability depends on the shape of articulating surfaces (deep sockets are more stable), the number and position of ligaments, and muscle tone crossing the joint. There is a structural trade-off: the shoulder's shallow socket gives great mobility but least stability, whereas the hip's deep acetabulum favours stability." },
      { h: "Clinical and nursing application", p: "Joint structure explains injuries and disease: sprains (ligament tears), dislocation (loss of articular contact, common at the mobile shoulder), meniscal tears, bursitis, and arthritis (osteoarthritis erodes articular cartilage; rheumatoid arthritis inflames the synovial membrane). Nurses apply this in joint positioning, range-of-motion exercises to prevent contractures, and post-operative care after joint replacement." },
      { h: "Key terms", list: [
        "Articulation — a joint.",
        "Synovial fluid — lubricating fluid of a synovial cavity.",
        "Diarthrosis — a freely movable joint.",
        "Bursa — fluid-filled sac reducing friction.",
        "Meniscus — fibrocartilage disc within some synovial joints."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Classify joints structurally and functionally with examples.",
      "Describe the structure of a typical synovial joint with a labelled diagram.",
      "List the six types of synovial joint and give an example and movement of each.",
      "Differentiate ligaments, tendons and bursae.",
      "Explain the structural factors that determine joint stability, using the shoulder and hip as examples."
    ],
    assessment: [
      { type: "mcq", q: "Skull sutures are examples of which structural joint type?", options: ["Synovial", "Cartilaginous", "Fibrous", "Saddle"], answer: 2, rationale: "Sutures are fibrous joints uniting skull bones by fibrous tissue." },
      { type: "mcq", q: "A freely movable joint is functionally classified as a:", options: ["Synarthrosis", "Amphiarthrosis", "Diarthrosis", "Synchondrosis"], answer: 2, rationale: "Diarthroses are freely movable — all synovial joints." },
      { type: "mcq", q: "The inner layer of the articular capsule that secretes synovial fluid is the:", options: ["Periosteum", "Synovial membrane", "Articular cartilage", "Fibrous layer"], answer: 1, rationale: "The synovial membrane lines the capsule and secretes synovial fluid." },
      { type: "mcq", q: "The shoulder and hip are examples of which synovial joint type?", options: ["Hinge", "Pivot", "Ball-and-socket", "Plane"], answer: 2, rationale: "Ball-and-socket joints are multiaxial, allowing the greatest range." },
      { type: "mcq", q: "The elbow is an example of a:", options: ["Hinge joint", "Saddle joint", "Pivot joint", "Condyloid joint"], answer: 0, rationale: "The elbow is a hinge joint allowing flexion/extension in one plane." },
      { type: "mcq", q: "Structures that connect bone to bone are:", options: ["Tendons", "Ligaments", "Bursae", "Menisci"], answer: 1, rationale: "Ligaments join bone to bone; tendons join muscle to bone." },
      { type: "mcq", q: "The pubic symphysis is an example of a:", options: ["Fibrous joint", "Cartilaginous joint (symphysis)", "Ball-and-socket joint", "Pivot joint"], answer: 1, rationale: "A symphysis is a cartilaginous joint united by fibrocartilage." },
      { type: "mcq", q: "A small fluid-filled sac that reduces friction near a joint is a:", options: ["Meniscus", "Bursa", "Lacuna", "Osteon"], answer: 1, rationale: "Bursae cushion movement between structures around joints." },
      { type: "mcq", q: "The joint at the thumb base allowing opposition is a:", options: ["Hinge", "Saddle", "Pivot", "Plane"], answer: 1, rationale: "The carpometacarpal joint of the thumb is a saddle joint." },
      { type: "mcq", q: "The shoulder is highly mobile but easily dislocated mainly because its socket is:", options: ["Deep", "Shallow", "Fused", "Fibrous"], answer: 1, rationale: "The shallow glenoid cavity favours mobility over stability." }
      , { type: "fill", q: "The fibrocartilage disc within the knee joint is the ____.", accept: ["meniscus", "menisci"], rationale: "The menisci are fibrocartilage discs cushioning the knee." }
      , { type: "fill", q: "Cartilage covering the bone ends within a synovial joint is ____ cartilage.", accept: ["articular", "hyaline"], rationale: "Articular (hyaline) cartilage caps the bone ends." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "ana-06-muscular",
    unit: "Unit 2 · Musculoskeletal System (Structure)",
    title: "Structure of the Muscular System",
    readMinutes: 18,
    summary: "The three types of muscle, the gross and microscopic structure of skeletal muscle, the sarcomere and myofilaments, muscle attachments and naming, and major muscle groups.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and types of muscle", p: "Muscle tissue makes up about 40% of body mass and is specialized for contraction. The three structurally distinct types are skeletal muscle (striated, voluntary, attached to bones), cardiac muscle (striated, involuntary, in the heart wall) and smooth muscle (non-striated, involuntary, in the walls of hollow organs and vessels). This topic emphasizes structure; contraction mechanics belong to the Physiology paper." },
      { h: "Connective-tissue organization of skeletal muscle", p: "A skeletal muscle is wrapped by the epimysium; within it, bundles of fibres (fascicles) are surrounded by perimysium; each individual muscle fibre (cell) is surrounded by endomysium. These sheaths are continuous with the tendon, transmitting the pull of contraction to bone. Blood vessels and nerves travel in the connective-tissue layers.", figure: {
        caption: "Figure 6.1 — Connective-tissue sheaths of skeletal muscle (whole muscle to fibre).",
        svg: '<svg viewBox="0 0 480 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Muscle connective tissue"><defs><marker id="anaAr6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="45" width="120" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="70" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Muscle</text><text x="70" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">epimysium</text><line x1="130" y1="65" x2="158" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr6)"/><rect x="160" y="45" width="120" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="220" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Fascicle</text><text x="220" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">perimysium</text><line x1="280" y1="65" x2="308" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr6)"/><rect x="310" y="45" width="130" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="375" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Fibre (cell)</text><text x="375" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">endomysium</text></svg>'
      } },
      { h: "Microscopic structure of a muscle fibre", p: "A skeletal muscle fibre is a long multinucleate cell bounded by the sarcolemma, filled with sarcoplasm and packed with myofibrils. The sarcoplasmic reticulum stores calcium and transverse (T) tubules carry excitation into the cell. Numerous mitochondria and stored myoglobin support its energy demand." },
      { h: "The sarcomere and myofilaments", p: "The myofibril is a chain of sarcomeres, the contractile unit, running between two Z discs. Each sarcomere contains thick filaments (myosin) in the A band and thin filaments (actin, with troponin and tropomyosin) anchored at the Z disc; their overlap produces the striated (banded) appearance. Sliding of thin over thick filaments shortens the sarcomere during contraction." },
      { h: "Cardiac and smooth muscle structure (contrast)", list: [
        "Cardiac — striated, branched, uninucleate cells joined by intercalated discs (with gap junctions and desmosomes) that allow synchronized contraction.",
        "Smooth — non-striated, spindle-shaped cells with a single central nucleus; actin and myosin present but not arranged in sarcomeres; arranged in sheets in organ walls."
      ] },
      { h: "Muscle attachments and actions", p: "A muscle usually attaches to bone at an origin (the more fixed/proximal point) and an insertion (the more movable/distal point), pulling the insertion toward the origin. Muscles are named by criteria such as shape (deltoid), size (gluteus maximus), location (tibialis anterior), fibre direction (rectus, oblique), number of heads (biceps, triceps) and action (flexor, extensor)." },
      { h: "Major muscle groups (survey)", list: [
        "Head/neck — facial muscles of expression, muscles of mastication (masseter, temporalis), sternocleidomastoid.",
        "Trunk — pectoralis major, intercostals, diaphragm, abdominal wall (rectus abdominis, obliques), erector spinae.",
        "Upper limb — deltoid, biceps and triceps brachii, forearm flexors/extensors.",
        "Lower limb — gluteals, quadriceps femoris, hamstrings, gastrocnemius and soleus."
      ] },
      { h: "Clinical and nursing application", p: "Muscle structure guides safe intramuscular injection sites — the vastus lateralis, deltoid, and ventrogluteal region are chosen for adequate muscle mass and distance from major nerves/vessels. Knowledge of muscle groups underlies positioning, prevention of contractures and pressure injury, gait assessment, and rehabilitation. Muscle atrophy from disuse and the striation loss in muscular dystrophy are understood at the fibre level." },
      { h: "Key terms", list: [
        "Sarcolemma — muscle-cell membrane.",
        "Sarcomere — contractile unit between two Z discs.",
        "Myofibril — contractile thread within a muscle fibre.",
        "Origin / insertion — fixed / movable muscle attachment.",
        "Fascicle — a bundle of muscle fibres."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Name the three types of muscle and compare them structurally.",
      "Describe the connective-tissue organization of a skeletal muscle.",
      "Describe the microscopic structure of a skeletal muscle fibre and the sarcomere.",
      "Explain the terms origin and insertion and the criteria used to name muscles.",
      "List the major muscle groups of the limbs and their clinical relevance to injection sites."
    ],
    assessment: [
      { type: "mcq", q: "The connective-tissue sheath surrounding a whole skeletal muscle is the:", options: ["Endomysium", "Perimysium", "Epimysium", "Sarcolemma"], answer: 2, rationale: "Epimysium wraps the whole muscle; perimysium the fascicle; endomysium the fibre." },
      { type: "mcq", q: "The contractile unit of a myofibril is the:", options: ["Sarcomere", "Sarcolemma", "Fascicle", "Osteon"], answer: 0, rationale: "The sarcomere, between two Z discs, is the contractile unit." },
      { type: "mcq", q: "Thick filaments of the sarcomere are composed of:", options: ["Actin", "Myosin", "Troponin", "Collagen"], answer: 1, rationale: "Thick filaments are myosin; thin filaments are actin." },
      { type: "mcq", q: "Cardiac muscle cells are joined by:", options: ["Sarcomeres", "Intercalated discs", "Tendons", "Z discs"], answer: 1, rationale: "Intercalated discs couple cardiac cells for synchronized contraction." },
      { type: "mcq", q: "The membrane of a muscle fibre is called the:", options: ["Sarcoplasm", "Sarcolemma", "Endomysium", "Periosteum"], answer: 1, rationale: "The sarcolemma is the plasma membrane of the muscle fibre." },
      { type: "mcq", q: "Smooth muscle is described as:", options: ["Striated and voluntary", "Non-striated and involuntary", "Striated and branched", "Multinucleate and voluntary"], answer: 1, rationale: "Smooth muscle lacks striations and is involuntary." },
      { type: "mcq", q: "The more movable attachment of a muscle is its:", options: ["Origin", "Insertion", "Belly", "Aponeurosis"], answer: 1, rationale: "The insertion is the more movable point pulled toward the origin." },
      { type: "mcq", q: "The muscle name 'biceps' refers to its:", options: ["Location", "Number of heads", "Action", "Shape"], answer: 1, rationale: "'Biceps' means two heads of origin." },
      { type: "mcq", q: "Calcium for contraction is stored in the muscle fibre's:", options: ["Sarcoplasmic reticulum", "Golgi apparatus", "Nucleus", "Mitochondria"], answer: 0, rationale: "The sarcoplasmic reticulum stores and releases calcium." },
      { type: "mcq", q: "A commonly used site for intramuscular injection in the thigh is the:", options: ["Gastrocnemius", "Vastus lateralis", "Sartorius", "Rectus abdominis"], answer: 1, rationale: "The vastus lateralis is a safe, large IM injection site." }
      , { type: "fill", q: "Skeletal muscle fibres appear striped because of the overlap of actin and ____ filaments.", accept: ["myosin"], rationale: "Overlapping actin and myosin produce the striated pattern." }
      , { type: "fill", q: "The bundle of muscle fibres wrapped by perimysium is called a ____.", accept: ["fascicle"], rationale: "A fascicle is a bundle of muscle fibres." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "ana-07-cvs",
    unit: "Unit 3 · Cardiovascular System (Structure)",
    title: "Structure of the Heart & Blood Vessels",
    readMinutes: 18,
    summary: "Position and coverings of the heart, its chambers, valves and wall layers, the coronary circulation, the conducting system, and the structure of arteries, veins and capillaries.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Position and coverings", p: "The heart is a hollow muscular organ about the size of a fist, lying in the mediastinum between the lungs, resting on the diaphragm, with about two-thirds to the left of the midline and its apex pointing down and to the left (roughly the 5th intercostal space, mid-clavicular line — the apex beat). It is enclosed in the pericardium: an outer fibrous pericardium and an inner serous pericardium (parietal and visceral/epicardial layers) with pericardial fluid between them reducing friction." },
      { h: "Layers of the heart wall", list: [
        "Epicardium — the visceral serous pericardium; outer layer.",
        "Myocardium — thick middle layer of cardiac muscle; performs the pumping; thickest in the left ventricle.",
        "Endocardium — smooth inner endothelial lining continuous with the vessels and covering the valves."
      ] },
      { h: "Chambers and great vessels", p: "The heart has four chambers: two thin-walled atria (receiving) superiorly and two thicker ventricles (pumping) inferiorly, separated by the interatrial and interventricular septa. The right side handles deoxygenated blood (from venae cavae → right atrium → right ventricle → pulmonary trunk); the left side handles oxygenated blood (from pulmonary veins → left atrium → left ventricle → aorta). The left ventricular wall is much thicker, matching the higher systemic pressure it generates.", figure: {
        caption: "Figure 7.1 — Blood flow through the four chambers (structural pathway).",
        svg: '<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heart chambers flow"><defs><marker id="anaAr7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="20" width="100" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="60" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Right atrium</text><rect x="10" y="90" width="100" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="60" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Right ventricle</text><rect x="390" y="20" width="100" height="40" rx="8" fill="#F0FDF4" stroke="#0F4C3A"/><text x="440" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Left atrium</text><rect x="390" y="90" width="100" height="40" rx="8" fill="#F0FDF4" stroke="#0F4C3A"/><text x="440" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Left ventricle</text><line x1="60" y1="60" x2="60" y2="88" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7)"/><line x1="110" y1="110" x2="200" y2="110" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7)"/><text x="150" y="102" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">lungs</text><line x1="300" y1="40" x2="388" y2="40" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7)"/><line x1="440" y1="60" x2="440" y2="88" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7)"/></svg>'
      } },
      { h: "Valves", p: "Four valves ensure one-way flow. The atrioventricular (AV) valves lie between atria and ventricles: the tricuspid (right) and the bicuspid/mitral (left); their cusps are tethered by chordae tendineae to papillary muscles, preventing prolapse. The semilunar valves guard the outflows: the pulmonary valve (right ventricle → pulmonary trunk) and the aortic valve (left ventricle → aorta)." },
      { h: "Coronary circulation", p: "The myocardium is supplied by the right and left coronary arteries arising from the aortic root just above the aortic valve. The left divides into the anterior interventricular (LAD) and circumflex branches; the right supplies the right chambers and, in most people, the inferior wall. Cardiac veins drain into the coronary sinus, which empties into the right atrium. This structural anatomy explains the territory affected in myocardial infarction." },
      { h: "Conducting system", p: "Specialized cardiac muscle forms the conducting system: the sinoatrial (SA) node (pacemaker, in the right atrial wall), the atrioventricular (AV) node, the AV bundle (of His), the right and left bundle branches, and the Purkinje fibres spreading through the ventricular walls. Its structure underlies the coordinated, sequential contraction recorded on the ECG." },
      { h: "Structure of blood vessels", list: [
        "Arteries — carry blood away from the heart; thick tunica media rich in elastic and smooth muscle to withstand and smooth high pressure.",
        "Veins — return blood to the heart; thinner walls, larger lumen, and valves (especially in limbs) to prevent backflow.",
        "Capillaries — single endothelial layer (tunica intima only), the site of exchange; walls thin enough for diffusion.",
        "All vessels except capillaries share three coats: tunica intima (endothelium), tunica media (smooth muscle/elastic), tunica externa (connective tissue)."
      ] },
      { h: "Clinical and nursing application", p: "Chamber and valve anatomy explains murmurs and the auscultation areas nurses use; the apex position guides locating the apex beat and mitral area. Coronary anatomy maps infarct location to the ECG leads. Vein structure and valves underlie varicose veins and the choice of veins for cannulation and venepuncture; arterial wall structure explains atherosclerosis and pulse points." },
      { h: "Key terms", list: [
        "Myocardium — cardiac muscle layer of the heart wall.",
        "Chordae tendineae — cords tethering AV valve cusps.",
        "Coronary sinus — main venous drainage of the heart.",
        "SA node — the heart's natural pacemaker.",
        "Tunica media — the muscular/elastic middle coat of a vessel."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the position, coverings and wall layers of the heart.",
      "Name the four chambers and four valves and trace blood flow through the heart.",
      "Describe the coronary circulation and its clinical importance.",
      "Outline the components of the cardiac conducting system.",
      "Compare the structure of arteries, veins and capillaries and relate it to function."
    ],
    assessment: [
      { type: "mcq", q: "The thickest layer of the heart wall, forming the pump, is the:", options: ["Epicardium", "Myocardium", "Endocardium", "Pericardium"], answer: 1, rationale: "The myocardium is the thick contractile cardiac-muscle layer." },
      { type: "mcq", q: "The valve between the left atrium and left ventricle is the:", options: ["Tricuspid valve", "Pulmonary valve", "Mitral (bicuspid) valve", "Aortic valve"], answer: 2, rationale: "The mitral (bicuspid) valve is the left AV valve." },
      { type: "mcq", q: "Chordae tendineae attach the AV valve cusps to the:", options: ["Papillary muscles", "SA node", "Coronary sinus", "Pericardium"], answer: 0, rationale: "Chordae tendineae connect cusps to papillary muscles, preventing prolapse." },
      { type: "mcq", q: "The natural pacemaker of the heart is the:", options: ["AV node", "SA node", "Bundle of His", "Purkinje fibres"], answer: 1, rationale: "The SA node initiates the heartbeat." },
      { type: "mcq", q: "The left ventricular wall is thicker than the right because it:", options: ["Holds more blood", "Pumps against higher systemic pressure", "Contains the SA node", "Receives coronary blood"], answer: 1, rationale: "The left ventricle generates high systemic pressure, so its wall is thicker." },
      { type: "mcq", q: "Which vessel returns oxygenated blood to the left atrium?", options: ["Superior vena cava", "Pulmonary artery", "Pulmonary vein", "Coronary sinus"], answer: 2, rationale: "The pulmonary veins carry oxygenated blood from lungs to the left atrium." },
      { type: "mcq", q: "The site of exchange between blood and tissues is the:", options: ["Artery", "Arteriole", "Capillary", "Vein"], answer: 2, rationale: "Capillaries have a single endothelial layer permitting exchange." },
      { type: "mcq", q: "Valves that prevent backflow are found chiefly in:", options: ["Arteries", "Capillaries", "Veins", "The aorta"], answer: 2, rationale: "Veins (especially of the limbs) contain valves preventing backflow." },
      { type: "mcq", q: "The coronary arteries arise from the:", options: ["Pulmonary trunk", "Aortic root", "Right atrium", "Coronary sinus"], answer: 1, rationale: "The coronary arteries originate just above the aortic valve at the aortic root." },
      { type: "mcq", q: "The three coats of a typical blood vessel, from inner to outer, are:", options: ["Media, intima, externa", "Intima, media, externa", "Externa, media, intima", "Endocardium, myocardium, epicardium"], answer: 1, rationale: "From lumen outward: tunica intima, tunica media, tunica externa." }
      , { type: "fill", q: "The main vein draining the heart itself into the right atrium is the coronary ____.", accept: ["sinus"], rationale: "The coronary sinus collects cardiac venous blood into the right atrium." }
      , { type: "fill", q: "The right atrioventricular valve is the ____ valve.", accept: ["tricuspid"], rationale: "The tricuspid valve is the right AV valve." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "ana-08-respiratory",
    unit: "Unit 4 · Visceral Systems (Structure)",
    title: "Structure of the Respiratory System",
    readMinutes: 17,
    summary: "The upper and lower respiratory tracts, the conducting and respiratory zones, the structure of the nose, pharynx, larynx, trachea and bronchial tree, and the lungs, pleura and alveoli.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and divisions", p: "The respiratory system is divided functionally into a conducting zone (nose to terminal bronchioles) that warms, moistens, filters and channels air, and a respiratory zone (respiratory bronchioles, alveolar ducts and alveoli) where gas exchange occurs. Anatomically it is split into the upper respiratory tract (nose, pharynx, larynx) and the lower tract (trachea, bronchi and lungs)." },
      { h: "Nose and paranasal sinuses", p: "The external nose and nasal cavity are lined by respiratory epithelium (ciliated pseudostratified columnar with goblet cells) over a rich vascular bed; the conchae (turbinates) increase surface area to warm and humidify air, while hairs and mucus trap particles. The olfactory epithelium in the roof carries smell receptors. Air-filled paranasal sinuses (frontal, maxillary, ethmoid, sphenoid) lighten the skull and drain into the nasal cavity." },
      { h: "Pharynx and larynx", p: "The pharynx is a muscular tube in three parts: the nasopharynx (air only; contains the pharyngeal tonsil and Eustachian tube openings), oropharynx and laryngopharynx (shared by air and food). The larynx (voice box) connects the pharynx to the trachea; its cartilages include the thyroid, cricoid and the epiglottis, which closes over the airway during swallowing. The vocal folds (cords) stretched across the larynx produce voice." },
      { h: "Trachea and bronchial tree", p: "The trachea (windpipe) is held open by about 16–20 C-shaped rings of hyaline cartilage (incomplete posteriorly where the oesophagus lies); it is lined by ciliated respiratory epithelium forming the mucociliary escalator. It divides at the carina into the right and left main (primary) bronchi. The right main bronchus is wider, shorter and more vertical, so inhaled foreign bodies lodge there more often. Bronchi branch repeatedly into secondary (lobar), tertiary (segmental) bronchi and bronchioles; as they narrow, cartilage disappears and smooth muscle predominates.", figure: {
        caption: "Figure 8.1 — Branching of the airway (conducting to respiratory zone).",
        svg: '<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Airway branching"><defs><marker id="anaAr8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="50" width="80" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="50" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Trachea</text><rect x="110" y="50" width="80" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="150" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Bronchi</text><rect x="210" y="50" width="90" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="255" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Bronchioles</text><rect x="320" y="50" width="80" height="36" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="360" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Alveolar</text><rect x="420" y="50" width="70" height="36" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="455" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Alveoli</text><line x1="90" y1="68" x2="108" y2="68" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8)"/><line x1="190" y1="68" x2="208" y2="68" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8)"/><line x1="300" y1="68" x2="318" y2="68" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8)"/><line x1="400" y1="68" x2="418" y2="68" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8)"/></svg>'
      } },
      { h: "The lungs", p: "The two lungs occupy most of the thoracic cavity. The right lung has three lobes (upper, middle, lower) and the left lung two lobes (upper, lower) with a cardiac notch accommodating the heart. The hilum is where bronchi, vessels and nerves enter (the root of the lung). Lungs are light, spongy and elastic; each lobe is divided into bronchopulmonary segments — the units used in surgical resection." },
      { h: "Pleura", p: "Each lung is enclosed by a serous pleura: the visceral pleura adheres to the lung surface, the parietal pleura lines the thoracic wall, and between them the pleural cavity contains a thin film of pleural fluid providing lubrication and surface tension that keeps the lung expanded against the chest wall. Loss of this seal (pneumothorax) allows the elastic lung to collapse." },
      { h: "Alveoli and the respiratory membrane", p: "Alveoli are the microscopic air sacs where gas exchange occurs — hundreds of millions provide an enormous surface area. The alveolar wall is composed of type I pneumocytes (thin, for gas diffusion) and type II pneumocytes (secrete surfactant, which lowers surface tension). The respiratory membrane — alveolar epithelium, fused basement membranes and capillary endothelium — is extremely thin to allow rapid diffusion; alveolar macrophages remove debris." },
      { h: "Clinical and nursing application", p: "Airway anatomy guides suctioning, endotracheal intubation and the reason foreign bodies enter the right bronchus. The mucociliary escalator explains impaired clearance in smokers and the value of humidification. Pleural anatomy underlies chest-drain insertion for pneumothorax/effusion; segmental anatomy guides postural drainage and physiotherapy positioning; surfactant deficiency explains neonatal respiratory distress." },
      { h: "Key terms", list: [
        "Carina — the ridge where the trachea bifurcates.",
        "Hilum — the root of the lung where structures enter/leave.",
        "Surfactant — lipid lowering alveolar surface tension.",
        "Respiratory membrane — the thin barrier for gas diffusion.",
        "Pleural cavity — potential space between the pleural layers."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Distinguish the conducting and respiratory zones of the respiratory tract.",
      "Describe the structure of the trachea and the bronchial tree.",
      "Describe the lobes, hilum and bronchopulmonary segments of the lungs.",
      "Describe the pleura and the pleural cavity and their clinical importance.",
      "Describe the structure of an alveolus and the respiratory membrane."
    ],
    assessment: [
      { type: "mcq", q: "The cartilage that closes over the larynx during swallowing is the:", options: ["Thyroid cartilage", "Cricoid cartilage", "Epiglottis", "Arytenoid cartilage"], answer: 2, rationale: "The epiglottis covers the laryngeal opening during swallowing." },
      { type: "mcq", q: "The trachea is kept open by rings of:", options: ["Elastic cartilage", "Fibrocartilage", "C-shaped hyaline cartilage", "Bone"], answer: 2, rationale: "Incomplete C-shaped hyaline cartilage rings hold the trachea open." },
      { type: "mcq", q: "Inhaled foreign bodies more often enter the right main bronchus because it is:", options: ["Longer and narrower", "Wider, shorter and more vertical", "More horizontal", "Lined with cartilage"], answer: 1, rationale: "The right main bronchus is wider, shorter and more vertical." },
      { type: "mcq", q: "The number of lobes in the right lung is:", options: ["One", "Two", "Three", "Four"], answer: 2, rationale: "The right lung has three lobes; the left has two." },
      { type: "mcq", q: "Surfactant is secreted by:", options: ["Type I pneumocytes", "Type II pneumocytes", "Alveolar macrophages", "Goblet cells"], answer: 1, rationale: "Type II pneumocytes secrete surfactant, reducing surface tension." },
      { type: "mcq", q: "The membrane covering the surface of the lung is the:", options: ["Parietal pleura", "Visceral pleura", "Pericardium", "Peritoneum"], answer: 1, rationale: "The visceral pleura adheres to the lung; the parietal pleura lines the wall." },
      { type: "mcq", q: "Gas exchange occurs mainly in the:", options: ["Bronchi", "Trachea", "Alveoli", "Larynx"], answer: 2, rationale: "Alveoli are the site of gas exchange." },
      { type: "mcq", q: "The ridge marking the division of the trachea into main bronchi is the:", options: ["Hilum", "Carina", "Glottis", "Vestibule"], answer: 1, rationale: "The carina lies at the tracheal bifurcation." },
      { type: "mcq", q: "The nasal conchae (turbinates) mainly serve to:", options: ["Produce voice", "Increase surface area to warm and humidify air", "Store air", "Filter blood"], answer: 1, rationale: "Conchae increase mucosal surface to condition inspired air." },
      { type: "mcq", q: "The part of the pharynx that conducts air only is the:", options: ["Oropharynx", "Laryngopharynx", "Nasopharynx", "Hypopharynx"], answer: 2, rationale: "The nasopharynx carries air only; the lower parts are shared with food." }
      , { type: "fill", q: "The point where the bronchi, vessels and nerves enter the lung is the ____.", accept: ["hilum", "hilus", "root"], rationale: "The hilum (root) is the entry/exit point of the lung." }
      , { type: "fill", q: "The thin fluid-filled space between the two pleural layers is the ____ cavity.", accept: ["pleural"], rationale: "The pleural cavity contains lubricating pleural fluid." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "ana-09-digestive",
    unit: "Unit 4 · Visceral Systems (Structure)",
    title: "Structure of the Digestive System",
    readMinutes: 18,
    summary: "The alimentary canal and accessory organs, the general four-layer wall of the gut, and the structure of the mouth, pharynx, oesophagus, stomach, small and large intestine, liver, gallbladder and pancreas.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and organization", p: "The digestive system consists of the alimentary (gastrointestinal) canal — a continuous muscular tube from mouth to anus (mouth, pharynx, oesophagus, stomach, small intestine, large intestine, anus) — and the accessory organs (teeth, tongue, salivary glands, liver, gallbladder, pancreas) that aid digestion. Total length in the living body is several metres." },
      { h: "General structure of the gut wall", p: "From the oesophagus to the anal canal the wall has four layers: the mucosa (epithelium + lamina propria + muscularis mucosae, facing the lumen); the submucosa (connective tissue with vessels, glands and the submucosal nerve plexus); the muscularis externa (usually inner circular and outer longitudinal smooth muscle, with the myenteric plexus between them); and the serosa/adventitia (outer covering — peritoneum where present).", figure: {
        caption: "Figure 9.1 — The four layers of the gastrointestinal wall (lumen outward).",
        svg: '<svg viewBox="0 0 480 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GI wall layers"><defs><marker id="anaAr9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="45" width="100" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="60" y="69" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Mucosa</text><rect x="130" y="45" width="100" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="180" y="69" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Submucosa</text><rect x="250" y="45" width="110" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="305" y="63" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Muscularis</text><text x="305" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">externa</text><rect x="380" y="45" width="90" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="425" y="69" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Serosa</text><line x1="110" y1="65" x2="128" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr9)"/><line x1="230" y1="65" x2="248" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr9)"/><line x1="360" y1="65" x2="378" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr9)"/></svg>'
      } },
      { h: "Mouth, tongue, teeth and salivary glands", p: "The oral cavity is bounded by the lips, cheeks, hard and soft palate and tongue. The tongue is a muscular organ bearing papillae with taste buds. Humans have 32 permanent teeth (incisors, canines, premolars, molars), each with a crown, neck and root, built of enamel, dentine, pulp and cementum. Three pairs of salivary glands — parotid, submandibular and sublingual — pour saliva into the mouth." },
      { h: "Pharynx and oesophagus", p: "The pharynx conveys the food bolus to the oesophagus, a muscular tube about 25 cm long descending through the thorax and piercing the diaphragm to reach the stomach. Its upper part is skeletal and lower part smooth muscle. The lower oesophageal (cardiac) sphincter guards the entry to the stomach and normally prevents reflux." },
      { h: "Stomach", p: "The stomach is a J-shaped dilated organ in the upper left abdomen with regions: cardia, fundus, body and pylorus (ending in the pyloric sphincter). Its mucosa is thrown into folds called rugae that flatten on filling, and contains gastric glands with parietal cells (acid, intrinsic factor), chief cells (pepsinogen) and mucous cells. A third, oblique layer of muscle in the wall aids churning." },
      { h: "Small and large intestine", list: [
        "Small intestine (about 6 m) — duodenum, jejunum, ileum; its mucosa bears circular folds, villi and microvilli that hugely increase absorptive surface area; the duodenum receives bile and pancreatic juice.",
        "Large intestine (about 1.5 m) — caecum (with appendix), ascending, transverse, descending and sigmoid colon, rectum and anal canal; it has haustra, teniae coli and epiploic appendages, abundant goblet cells and no villi; it reabsorbs water and forms faeces."
      ] },
      { h: "Accessory organs — liver, gallbladder, pancreas", p: "The liver, the largest gland, lies in the right upper quadrant with right and left lobes; its functional units are hexagonal lobules of hepatocytes around a central vein, supplied by the hepatic artery and portal vein and drained by bile canaliculi. Bile passes via hepatic ducts to the gallbladder (a pear-shaped sac beneath the liver that stores and concentrates bile) and via the common bile duct to the duodenum. The pancreas is both exocrine (acini secreting digestive enzymes via the pancreatic duct) and endocrine (islets of Langerhans)." },
      { h: "Peritoneum", p: "The peritoneum is the serous membrane of the abdomen — parietal (lining the wall) and visceral (covering organs) — with the peritoneal cavity between them. Folds such as the mesentery, greater and lesser omenta suspend organs, carry vessels and nerves, and store fat. Organs behind the peritoneum (kidneys, most of the pancreas, duodenum) are retroperitoneal." },
      { h: "Clinical and nursing application", p: "Gut structure explains common disorders nurses manage: GORD (incompetent lower oesophageal sphincter), peptic ulcer (parietal-cell acid), appendicitis, and the absorptive loss in bowel resection. Liver lobule and portal anatomy underlies jaundice and portal hypertension; gallbladder anatomy explains gallstones. This anatomy guides NG-tube placement, stoma care, and nutritional assessment." },
      { h: "Key terms", list: [
        "Rugae — folds of the empty stomach mucosa.",
        "Villi — mucosal projections increasing intestinal surface area.",
        "Lobule — functional unit of the liver.",
        "Sphincter — a muscular ring controlling passage.",
        "Retroperitoneal — situated behind the peritoneum."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the four layers of the gastrointestinal wall.",
      "Describe the structure of the stomach and its regions.",
      "Compare the structure of the small and large intestine.",
      "Describe the structure of the liver, including the lobule and biliary passages.",
      "Explain the peritoneum and its folds and their clinical significance."
    ],
    assessment: [
      { type: "mcq", q: "From lumen outward, the layers of the gut wall are:", options: ["Serosa, muscularis, submucosa, mucosa", "Mucosa, submucosa, muscularis externa, serosa", "Submucosa, mucosa, serosa, muscularis", "Mucosa, muscularis, serosa, submucosa"], answer: 1, rationale: "The order from the lumen is mucosa, submucosa, muscularis externa, serosa." },
      { type: "mcq", q: "The folds of the empty stomach lining are called:", options: ["Rugae", "Villi", "Haustra", "Teniae"], answer: 0, rationale: "Rugae are gastric mucosal folds that flatten as the stomach fills." },
      { type: "mcq", q: "Gastric acid is secreted by:", options: ["Chief cells", "Goblet cells", "Parietal cells", "Mucous neck cells"], answer: 2, rationale: "Parietal (oxyntic) cells secrete hydrochloric acid and intrinsic factor." },
      { type: "mcq", q: "The first part of the small intestine is the:", options: ["Jejunum", "Ileum", "Duodenum", "Caecum"], answer: 2, rationale: "The duodenum is the first part, receiving bile and pancreatic juice." },
      { type: "mcq", q: "Which feature is characteristic of the large intestine, not the small?", options: ["Villi", "Circular folds", "Microvilli", "Teniae coli and haustra"], answer: 3, rationale: "Teniae coli and haustra are distinctive of the large intestine." },
      { type: "mcq", q: "The functional microscopic unit of the liver is the:", options: ["Lobule", "Nephron", "Acinus", "Alveolus"], answer: 0, rationale: "The hepatic lobule is the liver's structural/functional unit." },
      { type: "mcq", q: "Bile is stored and concentrated in the:", options: ["Pancreas", "Duodenum", "Gallbladder", "Spleen"], answer: 2, rationale: "The gallbladder stores and concentrates bile." },
      { type: "mcq", q: "The endocrine portion of the pancreas consists of the:", options: ["Acini", "Rugae", "Islets of Langerhans", "Villi"], answer: 2, rationale: "The islets of Langerhans are the endocrine tissue of the pancreas." },
      { type: "mcq", q: "The number of permanent teeth in an adult is:", options: ["32", "20", "28", "36"], answer: 0, rationale: "There are 32 permanent teeth." },
      { type: "mcq", q: "An organ situated behind the peritoneum is described as:", options: ["Intraperitoneal", "Serosal", "Mesenteric", "Retroperitoneal"], answer: 3, rationale: "Retroperitoneal organs (e.g. kidneys) lie behind the peritoneum." }
      , { type: "fill", q: "Finger-like mucosal projections that increase absorptive surface area in the small intestine are called ____.", accept: ["villi", "villus"], rationale: "Villi (with microvilli) greatly enlarge the absorptive surface." }
      , { type: "fill", q: "The muscular ring controlling stomach emptying into the duodenum is the ____ sphincter.", accept: ["pyloric", "pylorus"], rationale: "The pyloric sphincter controls gastric emptying." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "ana-10-urinary",
    unit: "Unit 4 · Visceral Systems (Structure)",
    title: "Structure of the Urinary System",
    readMinutes: 17,
    summary: "The organs of the urinary system, the gross and internal structure of the kidney, the nephron as the structural unit, and the ureters, urinary bladder and urethra.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The urinary system consists of two kidneys, two ureters, one urinary bladder and one urethra. The kidneys form urine; the ureters convey it to the bladder, which stores it; and the urethra carries it out. This topic emphasizes structure; urine formation is covered in Physiology." },
      { h: "Position and gross structure of the kidney", p: "The kidneys are paired, bean-shaped, retroperitoneal organs lying against the posterior abdominal wall at about T12–L3; the right kidney sits slightly lower because of the liver. Each has an outer cortex and inner medulla containing 8–18 renal pyramids whose apices (papillae) project into minor calyces; these join into major calyces and the funnel-shaped renal pelvis, which continues as the ureter. The medial hilum transmits the renal artery, vein, nerves and ureter. Surrounding it are the fibrous capsule, perirenal fat and renal fascia.", figure: {
        caption: "Figure 10.1 — Internal regions of the kidney and flow of urine to the ureter.",
        svg: '<svg viewBox="0 0 480 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kidney regions"><defs><marker id="anaAr10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="50" width="80" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="50" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Cortex</text><rect x="110" y="50" width="80" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="150" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Medulla</text><rect x="210" y="50" width="80" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="250" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Calyces</text><rect x="310" y="50" width="80" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="350" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Pelvis</text><rect x="410" y="50" width="60" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="440" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Ureter</text><line x1="90" y1="70" x2="108" y2="70" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr10)"/><line x1="190" y1="70" x2="208" y2="70" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr10)"/><line x1="290" y1="70" x2="308" y2="70" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr10)"/><line x1="390" y1="70" x2="408" y2="70" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr10)"/></svg>'
      } },
      { h: "The nephron — structural unit", p: "Each kidney contains about one million nephrons, the microscopic structural and functional units. A nephron has a renal corpuscle (a tuft of capillaries, the glomerulus, enclosed by the double-walled glomerular/Bowman's capsule) and a renal tubule: the proximal convoluted tubule, the loop of Henle (descending and ascending limbs), and the distal convoluted tubule, which drains into a collecting duct. Cortical and juxtamedullary nephrons differ in the depth of their loops." },
      { h: "Blood supply and the juxtaglomerular apparatus", p: "Blood reaches the glomerulus via an afferent arteriole and leaves via an efferent arteriole (a rare arteriole-to-arteriole arrangement that maintains high glomerular pressure for filtration); efferent blood then supplies the peritubular capillaries. Where the distal tubule contacts its own afferent arteriole, the juxtaglomerular apparatus (macula densa + juxtaglomerular cells) forms — a structure central to blood-pressure regulation." },
      { h: "Ureters", p: "The ureters are paired muscular tubes about 25–30 cm long that carry urine from the renal pelvis to the bladder by peristalsis. Their wall has a transitional-epithelium mucosa, smooth muscle and fibrous coat. They enter the bladder obliquely, a structural arrangement that acts as a physiological valve preventing reflux. Three anatomical constrictions are common sites for stones to lodge." },
      { h: "Urinary bladder", p: "The bladder is a distensible muscular reservoir in the pelvis behind the pubic symphysis. Its wall contains the detrusor smooth muscle and a mucosa of transitional epithelium thrown into rugae that flatten as it fills. The smooth triangular trigone is bounded by the two ureteric openings and the internal urethral orifice. An internal (involuntary) and external (voluntary skeletal muscle) urethral sphincter control emptying." },
      { h: "Urethra", p: "The urethra conveys urine from the bladder to the exterior. The female urethra is short (about 4 cm) and purely urinary, opening anterior to the vaginal orifice — its shortness predisposes to ascending urinary infection. The male urethra is longer (about 18–20 cm), passes through the prostate and penis, and is shared by the urinary and reproductive tracts (prostatic, membranous and spongy/penile parts)." },
      { h: "Clinical and nursing application", p: "Structural knowledge underpins catheterization technique and the higher UTI risk from the short female urethra; the ureteric constrictions explain the site of renal-colic pain from calculi; the oblique ureteric entry explains vesicoureteric reflux in children; trigone and sphincter anatomy underlies continence and its disorders. The retroperitoneal position guides flank (loin) assessment and renal-angle tenderness." },
      { h: "Key terms", list: [
        "Nephron — structural and functional unit of the kidney.",
        "Glomerulus — capillary tuft where filtration begins.",
        "Renal pelvis — funnel collecting urine before the ureter.",
        "Detrusor — smooth muscle of the bladder wall.",
        "Trigone — smooth triangular region of the bladder floor."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the position and gross internal structure of the kidney.",
      "Draw and label a nephron and name its parts.",
      "Describe the blood supply of the nephron and the juxtaglomerular apparatus.",
      "Describe the structure of the ureters and the urinary bladder.",
      "Compare the male and female urethra and explain the clinical significance of the difference."
    ],
    assessment: [
      { type: "mcq", q: "The structural and functional unit of the kidney is the:", options: ["Lobule", "Nephron", "Alveolus", "Osteon"], answer: 1, rationale: "The nephron is the kidney's microscopic functional unit." },
      { type: "mcq", q: "The capillary tuft where filtration begins is the:", options: ["Glomerulus", "Loop of Henle", "Collecting duct", "Calyx"], answer: 0, rationale: "The glomerulus is the filtering capillary tuft within Bowman's capsule." },
      { type: "mcq", q: "The kidneys are located:", options: ["Within the peritoneal cavity", "Retroperitoneally", "In the pelvis", "In the thorax"], answer: 1, rationale: "The kidneys are retroperitoneal against the posterior abdominal wall." },
      { type: "mcq", q: "Vessel carrying blood into the glomerulus is the:", options: ["Efferent arteriole", "Afferent arteriole", "Renal vein", "Peritubular capillary"], answer: 1, rationale: "The afferent arteriole delivers blood to the glomerulus." },
      { type: "mcq", q: "The smooth triangular region on the bladder floor is the:", options: ["Trigone", "Fundus", "Rugae", "Detrusor"], answer: 0, rationale: "The trigone is bounded by the ureteric orifices and the urethral opening." },
      { type: "mcq", q: "The smooth muscle forming the bladder wall is the:", options: ["Detrusor", "Sphincter urethrae", "Psoas", "Rugae"], answer: 0, rationale: "The detrusor muscle contracts to empty the bladder." },
      { type: "mcq", q: "The epithelium lining the ureter and bladder is:", options: ["Simple squamous", "Transitional", "Ciliated columnar", "Stratified keratinized"], answer: 1, rationale: "Transitional epithelium permits stretching in the urinary tract." },
      { type: "mcq", q: "The female urethra predisposes to urinary infection mainly because it is:", options: ["Very long", "Short", "Shared with the reproductive tract", "Lined by cartilage"], answer: 1, rationale: "The short female urethra allows easier ascent of bacteria." },
      { type: "mcq", q: "Urine passes from the renal pelvis to the bladder along the:", options: ["Urethra", "Ureter", "Collecting duct", "Calyx"], answer: 1, rationale: "The ureter conveys urine from pelvis to bladder by peristalsis." },
      { type: "mcq", q: "The right kidney lies slightly lower than the left because of the:", options: ["Spleen", "Liver", "Stomach", "Pancreas"], answer: 1, rationale: "The large right lobe of the liver displaces the right kidney inferiorly." }
      , { type: "fill", q: "The double-walled cup enclosing the glomerulus is the glomerular (____) capsule.", accept: ["bowman", "bowman's", "bowmans"], rationale: "Bowman's (glomerular) capsule surrounds the glomerulus." }
      , { type: "fill", q: "The apex of a renal pyramid that projects into a minor calyx is the renal ____.", accept: ["papilla", "papillae"], rationale: "The renal papilla drains urine into a minor calyx." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "ana-11-nervous",
    unit: "Unit 5 · Nervous, Endocrine & Sensory (Structure)",
    title: "Structure of the Nervous System: CNS, PNS & ANS",
    readMinutes: 18,
    summary: "Organization of the nervous system, the structure of nervous tissue (neurons and neuroglia), the brain and spinal cord, the peripheral and autonomic nervous systems, and the meninges.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Organization of the nervous system", p: "The nervous system is divided anatomically into the central nervous system (CNS) — brain and spinal cord — and the peripheral nervous system (PNS) — cranial and spinal nerves and ganglia. Functionally the PNS has a somatic division (voluntary, to skeletal muscle) and an autonomic division (ANS, involuntary, to smooth/cardiac muscle and glands), the latter comprising sympathetic and parasympathetic parts.", figure: {
        caption: "Figure 11.1 — Structural and functional divisions of the nervous system.",
        svg: '<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nervous system divisions"><rect x="180" y="10" width="120" height="34" rx="8" fill="#0F4C3A"/><text x="240" y="32" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">Nervous system</text><rect x="60" y="70" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="120" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">CNS</text><rect x="300" y="70" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="360" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">PNS</text><line x1="240" y1="44" x2="120" y2="68" stroke="#15803D" stroke-width="2"/><line x1="240" y1="44" x2="360" y2="68" stroke="#15803D" stroke-width="2"/><rect x="250" y="130" width="90" height="34" rx="8" fill="#F0FDF4" stroke="#15803D"/><text x="295" y="152" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Somatic</text><rect x="350" y="130" width="90" height="34" rx="8" fill="#F0FDF4" stroke="#15803D"/><text x="395" y="152" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Autonomic</text><line x1="360" y1="104" x2="295" y2="128" stroke="#15803D" stroke-width="2"/><line x1="360" y1="104" x2="395" y2="128" stroke="#15803D" stroke-width="2"/></svg>'
      } },
      { h: "Structure of nervous tissue", p: "The neuron is the excitable conducting cell: a cell body (soma) with the nucleus and Nissl bodies, several dendrites that receive impulses, and one axon that conducts impulses away, often insulated by a myelin sheath with gaps (nodes of Ranvier) that speed conduction. Neurons are classified structurally as multipolar, bipolar and unipolar. Neuroglia support them — in the CNS: astrocytes (support, blood-brain barrier), oligodendrocytes (myelin), microglia (defence), ependymal cells (line ventricles); in the PNS: Schwann cells (myelin) and satellite cells." },
      { h: "The brain — major regions", list: [
        "Cerebrum — two hemispheres of folded cortex (grey matter over white matter) divided into frontal, parietal, temporal and occipital lobes; contains the basal ganglia deep within.",
        "Diencephalon — thalamus (relay) and hypothalamus (autonomic/endocrine control).",
        "Brainstem — midbrain, pons and medulla oblongata; contains vital centres and the origin of most cranial nerves.",
        "Cerebellum — posterior, coordinates movement and balance."
      ] },
      { h: "Ventricles and cerebrospinal fluid", p: "The brain contains four fluid-filled ventricles (two lateral, third and fourth) lined by ependyma. The choroid plexuses produce cerebrospinal fluid (CSF), which circulates through the ventricles and the subarachnoid space, cushioning the CNS, and is reabsorbed into venous blood. Obstruction of CSF flow causes hydrocephalus." },
      { h: "Spinal cord", p: "The spinal cord runs within the vertebral canal from the medulla to about L1–L2, ending as the conus medullaris; below it the nerve roots form the cauda equina. In cross-section it shows central H-shaped grey matter (cell bodies) around the central canal, surrounded by white matter (ascending and descending tracts). Thirty-one pairs of spinal nerves arise via dorsal (sensory) and ventral (motor) roots." },
      { h: "Meninges", p: "Three connective-tissue membranes protect the CNS: the tough outer dura mater, the middle arachnoid mater, and the delicate inner pia mater adherent to the surface. CSF lies in the subarachnoid space between arachnoid and pia. The (potential) subdural and (real) epidural/extradural spaces and the lumbar cistern below the cord are the anatomical basis for haematomas and for safe lumbar puncture." },
      { h: "Peripheral and autonomic nervous systems", p: "The PNS comprises 12 pairs of cranial nerves and 31 pairs of spinal nerves with their ganglia. The ANS uses a two-neuron chain (preganglionic and postganglionic). Structurally, the sympathetic outflow is thoracolumbar with ganglia in the paravertebral chain close to the cord, while the parasympathetic outflow is craniosacral with ganglia in or near the target organ — differences with important functional and pharmacological consequences." },
      { h: "Clinical and nursing application", p: "Meningeal anatomy underlies lumbar puncture (performed below L1–L2 to avoid the cord), epidural analgesia, and the recognition of extradural versus subdural haematoma. Cortical localization explains focal deficits after stroke; spinal-tract anatomy explains sensory/motor loss after cord injury. ANS anatomy underlies autonomic effects of drugs and the assessment of neurogenic bladder and orthostatic changes." },
      { h: "Key terms", list: [
        "Neuron — the conducting cell of the nervous system.",
        "Myelin — insulating sheath speeding conduction.",
        "Grey / white matter — cell bodies / myelinated tracts.",
        "CSF — cerebrospinal fluid cushioning the CNS.",
        "Ganglion — a collection of nerve-cell bodies in the PNS."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the structural and functional divisions of the nervous system.",
      "Describe the structure of a neuron and name the types of neuroglia.",
      "Describe the major regions of the brain and their location.",
      "Describe the structure of the spinal cord and the meninges.",
      "Compare the structural organization of the sympathetic and parasympathetic nervous systems."
    ],
    assessment: [
      { type: "mcq", q: "The central nervous system consists of the:", options: ["Cranial and spinal nerves", "Brain and spinal cord", "Sympathetic and parasympathetic nerves", "Ganglia only"], answer: 1, rationale: "The CNS is the brain and spinal cord; nerves and ganglia are the PNS." },
      { type: "mcq", q: "The part of a neuron that conducts impulses away from the cell body is the:", options: ["Dendrite", "Axon", "Soma", "Nissl body"], answer: 1, rationale: "The axon carries impulses away from the cell body." },
      { type: "mcq", q: "Myelination of axons in the CNS is produced by:", options: ["Schwann cells", "Oligodendrocytes", "Astrocytes", "Microglia"], answer: 1, rationale: "Oligodendrocytes myelinate CNS axons; Schwann cells do so in the PNS." },
      { type: "mcq", q: "Cerebrospinal fluid is produced by the:", options: ["Choroid plexus", "Arachnoid granulations", "Pia mater", "Dura mater"], answer: 0, rationale: "The choroid plexuses in the ventricles produce CSF." },
      { type: "mcq", q: "The outermost, toughest meningeal layer is the:", options: ["Pia mater", "Arachnoid mater", "Dura mater", "Ependyma"], answer: 2, rationale: "The dura mater is the tough outer meninx." },
      { type: "mcq", q: "The spinal cord in an adult usually ends at about the level of:", options: ["T6", "L1–L2", "L4", "S2"], answer: 1, rationale: "The cord ends near L1–L2 as the conus medullaris." },
      { type: "mcq", q: "The number of pairs of spinal nerves is:", options: ["12", "24", "31", "33"], answer: 2, rationale: "There are 31 pairs of spinal nerves." },
      { type: "mcq", q: "CSF circulates in the space between the arachnoid and pia mater, the:", options: ["Subdural space", "Epidural space", "Subarachnoid space", "Central canal only"], answer: 2, rationale: "CSF occupies the subarachnoid space." },
      { type: "mcq", q: "The sympathetic nervous system has a ____ outflow.", options: ["Craniosacral", "Thoracolumbar", "Cervical", "Coccygeal"], answer: 1, rationale: "Sympathetic outflow is thoracolumbar; parasympathetic is craniosacral." },
      { type: "mcq", q: "The cerebellum is chiefly concerned with:", options: ["Vision", "Coordination and balance", "Hearing", "Hormone release"], answer: 1, rationale: "The cerebellum coordinates movement and maintains balance." }
      , { type: "fill", q: "The gaps in the myelin sheath that speed impulse conduction are the nodes of ____.", accept: ["ranvier"], rationale: "Nodes of Ranvier allow saltatory conduction." }
      , { type: "fill", q: "A collection of nerve-cell bodies located outside the CNS is called a ____.", accept: ["ganglion", "ganglia"], rationale: "Ganglia are PNS collections of nerve-cell bodies." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "ana-12-endocrine",
    unit: "Unit 5 · Nervous, Endocrine & Sensory (Structure)",
    title: "Structure of the Endocrine Glands",
    readMinutes: 17,
    summary: "The location and structure of the pituitary, thyroid, parathyroid, adrenal, pineal glands, the pancreatic islets and the gonads, as ductless glands of the endocrine system.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of the endocrine system", p: "The endocrine system is a collection of ductless glands and hormone-secreting tissues that release hormones directly into the blood. Its major glands are the pituitary, pineal, thyroid, parathyroids, thymus, adrenals, pancreatic islets and gonads; the hypothalamus links the nervous and endocrine systems. This topic emphasizes gross and microscopic structure and location; hormone actions belong to Physiology." },
      { h: "Hypothalamus and pituitary gland", p: "The pituitary (hypophysis) is a pea-sized gland hanging by the infundibulum (stalk) from the hypothalamus and lying in the sella turcica of the sphenoid bone. It has two structurally distinct lobes: the anterior lobe (adenohypophysis) of glandular epithelium, connected to the hypothalamus by a portal blood system; and the posterior lobe (neurohypophysis) of nervous tissue, storing hormones made in hypothalamic neurons. Its bony enclosure explains the visual and endocrine effects of pituitary tumours.", figure: {
        caption: "Figure 12.1 — The two lobes of the pituitary gland linked to the hypothalamus.",
        svg: '<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pituitary lobes"><rect x="110" y="10" width="120" height="34" rx="8" fill="#0F4C3A"/><text x="170" y="32" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">Hypothalamus</text><line x1="170" y1="44" x2="170" y2="70" stroke="#15803D" stroke-width="3"/><text x="176" y="62" font-family="sans-serif" font-size="9" fill="#15803D">stalk</text><rect x="40" y="72" width="120" height="50" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="100" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Anterior lobe</text><text x="100" y="108" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">glandular</text><rect x="180" y="72" width="120" height="50" rx="8" fill="#F0FDF4" stroke="#15803D"/><text x="240" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Posterior lobe</text><text x="240" y="108" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">nervous</text><line x1="150" y1="66" x2="100" y2="72" stroke="#15803D" stroke-width="2"/><line x1="190" y1="66" x2="240" y2="72" stroke="#15803D" stroke-width="2"/></svg>'
      } },
      { h: "Thyroid and parathyroid glands", p: "The thyroid gland is a butterfly-shaped gland with two lobes joined by an isthmus, lying in the neck anterior to the trachea below the larynx. Microscopically it is composed of follicles — spheres of cuboidal follicular cells around a colloid store — with parafollicular (C) cells between them. On its posterior surface lie the four small parathyroid glands, embedded in the thyroid capsule, composed mainly of chief cells. Their close relation is important during thyroid surgery." },
      { h: "Adrenal (suprarenal) glands", p: "The two adrenal glands cap the upper pole of each kidney, retroperitoneally. Each has two structurally and developmentally distinct parts: the outer cortex (glandular tissue in three zones — zona glomerulosa, fasciculata and reticularis) and the inner medulla (modified sympathetic neural tissue containing chromaffin cells). The cortex secretes steroid hormones; the medulla secretes catecholamines." },
      { h: "Pancreatic islets and pineal gland", list: [
        "Pancreatic islets (islets of Langerhans) — about a million clusters of endocrine cells scattered among the exocrine acini, mainly alpha (glucagon), beta (insulin) and delta (somatostatin) cells; the endocrine and exocrine pancreas share the same organ.",
        "Pineal gland — a tiny cone-shaped gland attached to the roof of the third ventricle, composed of pinealocytes; often calcifies with age (a radiographic landmark)."
      ] },
      { h: "Gonads and thymus", p: "The gonads are endocrine as well as reproductive: the testes contain interstitial (Leydig) cells between the seminiferous tubules that secrete testosterone, and the ovaries contain follicular and corpus-luteum cells secreting oestrogen and progesterone. The thymus, in the superior mediastinum, is a lymphoid-endocrine organ prominent in childhood that involutes after puberty." },
      { h: "Structure–function relationship", p: "Endocrine glands share a rich blood supply and a structure that maximizes contact between secretory cells and capillaries — cords, follicles or clusters rather than duct systems. Storage arrangements differ: the thyroid uniquely stores hormone extracellularly as colloid, whereas most glands store little and synthesize on demand. These structural facts explain gland enlargement (goitre) and the imaging appearance of endocrine organs." },
      { h: "Clinical and nursing application", p: "Location matters: pituitary tumours compress the optic chiasm; parathyroids may be injured in thyroidectomy, causing hypocalcaemia; adrenal cortex versus medulla distinguishes Cushing's/Addison's from phaeochromocytoma. Islet-cell structure underlies diabetes. Nurses use this anatomy in neck-surgery care, glucose monitoring, steroid management and interpretation of endocrine imaging." },
      { h: "Key terms", list: [
        "Adenohypophysis / neurohypophysis — anterior / posterior pituitary.",
        "Follicle — structural unit of the thyroid storing colloid.",
        "Chromaffin cell — catecholamine-secreting cell of the adrenal medulla.",
        "Islet of Langerhans — endocrine cluster of the pancreas.",
        "Sella turcica — bony seat of the pituitary gland."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "List the major endocrine glands and their locations.",
      "Describe the structure of the pituitary gland and its relationship to the hypothalamus.",
      "Describe the microscopic structure of the thyroid gland and the position of the parathyroids.",
      "Describe the structure of the adrenal gland (cortex and medulla).",
      "Describe the pancreatic islets and explain the dual nature of the pancreas."
    ],
    assessment: [
      { type: "mcq", q: "Endocrine glands are best described as:", options: ["Ductless, secreting hormones into blood", "Duct-bearing, secreting onto surfaces", "Non-secretory", "Composed of muscle"], answer: 0, rationale: "Endocrine glands lack ducts and release hormones into the blood." },
      { type: "mcq", q: "The pituitary gland lies in the ____ of the sphenoid bone.", options: ["Sella turcica", "Foramen magnum", "Mastoid process", "Cribriform plate"], answer: 0, rationale: "The sella turcica houses the pituitary gland." },
      { type: "mcq", q: "The posterior lobe of the pituitary is composed of:", options: ["Glandular epithelium", "Cartilage", "Nervous tissue", "Colloid"], answer: 2, rationale: "The neurohypophysis (posterior lobe) is nervous tissue storing hypothalamic hormones." },
      { type: "mcq", q: "The structural unit of the thyroid gland storing colloid is the:", options: ["Islet", "Acinus", "Follicle", "Lobule"], answer: 2, rationale: "Thyroid follicles store colloid surrounded by follicular cells." },
      { type: "mcq", q: "The parathyroid glands are located:", options: ["On the kidneys", "In the brain", "In the pelvis", "Behind the thyroid gland"], answer: 3, rationale: "The four parathyroids lie on the posterior thyroid surface." },
      { type: "mcq", q: "The adrenal medulla contains hormone-secreting:", options: ["Chief cells", "Chromaffin cells", "Follicular cells", "Leydig cells"], answer: 1, rationale: "Chromaffin cells of the medulla secrete catecholamines." },
      { type: "mcq", q: "Insulin is secreted by which cells of the pancreatic islets?", options: ["Beta cells", "Alpha cells", "Delta cells", "Acinar cells"], answer: 0, rationale: "Beta cells of the islets secrete insulin." },
      { type: "mcq", q: "The adrenal glands are located:", options: ["Within the thyroid", "In the mediastinum", "Capping the upper poles of the kidneys", "In the pelvis"], answer: 2, rationale: "The adrenal (suprarenal) glands sit on the upper pole of each kidney." },
      { type: "mcq", q: "Testosterone is secreted by the ____ cells of the testis.", options: ["Sertoli", "Chief", "Parafollicular", "Interstitial (Leydig)"], answer: 3, rationale: "Interstitial (Leydig) cells between seminiferous tubules produce testosterone." },
      { type: "mcq", q: "The pineal gland is attached to the roof of the:", options: ["Third ventricle", "Lateral ventricle", "Fourth ventricle", "Central canal"], answer: 0, rationale: "The pineal gland projects from the roof of the third ventricle." }
      , { type: "fill", q: "The two lobes of the thyroid gland are joined across the midline by the ____.", accept: ["isthmus"], rationale: "The isthmus connects the two thyroid lobes." }
      , { type: "fill", q: "The endocrine cell clusters of the pancreas are the islets of ____.", accept: ["langerhans"], rationale: "The islets of Langerhans are the pancreatic endocrine tissue." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "ana-13-special-senses",
    unit: "Unit 5 · Nervous, Endocrine & Sensory (Structure)",
    title: "Structure of the Special Sense Organs: Eye & Ear",
    readMinutes: 18,
    summary: "The structure of the eye — its three coats, refractive media and accessory structures — and the structure of the ear — external, middle and inner divisions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of the special senses", p: "The special senses (sight, hearing, balance, smell and taste) depend on specialized receptor organs. This topic covers the structural anatomy of the eye (vision) and the ear (hearing and balance); the receptor mechanisms are examined in Physiology." },
      { h: "The three coats of the eyeball", list: [
        "Fibrous (outer) coat — the opaque, protective sclera ('white') and the transparent anterior cornea, the main refracting surface.",
        "Vascular (middle) coat / uvea — the choroid (pigmented, nourishing), the ciliary body (suspends the lens, secretes aqueous humour) and the iris (coloured diaphragm with the central pupil).",
        "Nervous (inner) coat — the retina, containing photoreceptors (rods and cones); the macula lutea with the fovea centralis is the point of sharpest vision, and the optic disc (blind spot) is where the optic nerve leaves."
      ] },
      { h: "Refractive media and chambers", p: "Light passes through, in order: the cornea, the aqueous humour (in the anterior and posterior chambers, in front of the lens), the biconvex lens (held by suspensory ligaments/zonules from the ciliary body and able to change shape for focusing), and the vitreous humour (gel filling the large posterior segment). Aqueous humour is continually formed and drained; obstruction raises intraocular pressure (glaucoma).", figure: {
        caption: "Figure 13.1 — Path of light through the refractive media of the eye.",
        svg: '<svg viewBox="0 0 500 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Refractive media of eye"><defs><marker id="anaAr13" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="40" width="80" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="50" y="61" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Cornea</text><rect x="110" y="40" width="90" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="155" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Aqueous</text><rect x="220" y="40" width="70" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="255" y="61" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Lens</text><rect x="310" y="40" width="90" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="355" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Vitreous</text><rect x="420" y="40" width="70" height="34" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="455" y="61" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Retina</text><line x1="90" y1="57" x2="108" y2="57" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13)"/><line x1="200" y1="57" x2="218" y2="57" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13)"/><line x1="290" y1="57" x2="308" y2="57" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13)"/><line x1="400" y1="57" x2="418" y2="57" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13)"/></svg>'
      } },
      { h: "Accessory structures of the eye", p: "Protective and supporting structures include the bony orbit, the eyelids and eyelashes, the conjunctiva (a thin membrane covering the sclera and inner eyelid), the lacrimal apparatus (gland producing tears that drain via the nasolacrimal duct), and the six extraocular muscles that move the eyeball." },
      { h: "The external and middle ear", p: "The external ear comprises the auricle (pinna) and the external acoustic (auditory) meatus, ending at the tympanic membrane (eardrum). The middle ear is an air-filled cavity in the temporal bone containing the three auditory ossicles — the malleus, incus and stapes — which transmit vibrations from the eardrum to the oval window. The auditory (Eustachian/pharyngotympanic) tube connects it to the nasopharynx, equalizing pressure — a route by which infection can spread." },
      { h: "The inner ear", p: "The inner ear (labyrinth) lies within the temporal bone. The bony labyrinth (cochlea, vestibule and three semicircular canals) contains perilymph and encloses the membranous labyrinth containing endolymph. The cochlea houses the spiral organ (of Corti), the receptor for hearing; the semicircular canals and the vestibule (utricle and saccule) house receptors for balance and head position." },
      { h: "Clinical and nursing application", p: "Eye structure underlies common problems nurses meet — cataract (lens opacity), glaucoma (raised intraocular pressure), retinal detachment, and conjunctivitis. Ear structure explains otitis media (middle-ear infection spreading via the short child's Eustachian tube), conductive versus sensorineural deafness, and vertigo from labyrinth disorders. This anatomy guides eye and ear examination, drop instillation, and hearing assessment." },
      { h: "Key terms", list: [
        "Sclera / cornea — opaque / transparent fibrous coat of the eye.",
        "Retina — light-sensitive inner coat with rods and cones.",
        "Aqueous / vitreous humour — fluids of the anterior / posterior segment.",
        "Ossicles — malleus, incus and stapes of the middle ear.",
        "Organ of Corti — the hearing receptor within the cochlea."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the three coats of the eyeball and their components.",
      "Describe the refractive media of the eye in the order light passes through them.",
      "Describe the accessory structures of the eye.",
      "Describe the structure of the external, middle and inner ear.",
      "Explain the clinical significance of the Eustachian tube and the middle-ear ossicles."
    ],
    assessment: [
      { type: "mcq", q: "The transparent anterior part of the fibrous coat of the eye is the:", options: ["Cornea", "Sclera", "Choroid", "Retina"], answer: 0, rationale: "The cornea is the transparent anterior refracting part of the fibrous coat." },
      { type: "mcq", q: "The light-sensitive inner coat of the eye is the:", options: ["Sclera", "Choroid", "Retina", "Iris"], answer: 2, rationale: "The retina contains the photoreceptors (rods and cones)." },
      { type: "mcq", q: "The point of sharpest vision on the retina is the:", options: ["Optic disc", "Ora serrata", "Fovea centralis", "Blind spot"], answer: 2, rationale: "The fovea centralis in the macula lutea gives the sharpest vision." },
      { type: "mcq", q: "The gel filling the posterior segment of the eye is the:", options: ["Aqueous humour", "Perilymph", "Vitreous humour", "Endolymph"], answer: 2, rationale: "The vitreous humour fills the large posterior segment." },
      { type: "mcq", q: "The three auditory ossicles are the malleus, incus and:", options: ["Cochlea", "Utricle", "Vestibule", "Stapes"], answer: 3, rationale: "The ossicles are malleus, incus and stapes." },
      { type: "mcq", q: "The eardrum is also called the:", options: ["Tympanic membrane", "Oval window", "Round window", "Auricle"], answer: 0, rationale: "The tympanic membrane (eardrum) separates external from middle ear." },
      { type: "mcq", q: "The receptor organ for hearing is located in the:", options: ["Semicircular canals", "Cochlea (organ of Corti)", "Vestibule", "Vitreous body"], answer: 1, rationale: "The spiral organ of Corti in the cochlea is the hearing receptor." },
      { type: "mcq", q: "The tube connecting the middle ear to the nasopharynx is the:", options: ["Nasolacrimal duct", "External acoustic meatus", "Eustachian (auditory) tube", "Cochlear duct"], answer: 2, rationale: "The Eustachian tube equalizes middle-ear pressure and can transmit infection." },
      { type: "mcq", q: "Aqueous humour is secreted by the:", options: ["Retina", "Lens", "Cornea", "Ciliary body"], answer: 3, rationale: "The ciliary body secretes aqueous humour." },
      { type: "mcq", q: "Receptors for balance and head position are found in the:", options: ["Cochlea only", "Semicircular canals and vestibule", "Tympanic membrane", "Optic disc"], answer: 1, rationale: "The semicircular canals and vestibule house equilibrium receptors." }
      , { type: "fill", q: "The coloured diaphragm of the eye surrounding the pupil is the ____.", accept: ["iris"], rationale: "The iris controls pupil size and gives the eye its colour." }
      , { type: "fill", q: "The fluid within the membranous labyrinth of the inner ear is called ____.", accept: ["endolymph"], rationale: "Endolymph fills the membranous labyrinth; perilymph surrounds it." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "ana-14-integumentary",
    unit: "Unit 6 · Integumentary, Lymphatic & Reproductive (Structure)",
    title: "Structure of the Integumentary System",
    readMinutes: 17,
    summary: "The layers of the skin (epidermis and dermis), the underlying hypodermis, and the epidermal appendages — hair, nails, and sebaceous and sweat glands.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The integumentary system comprises the skin and its appendages (hair, nails, and cutaneous glands). The skin is the largest organ of the body, covering about 1.5–2 m2 in an adult, and consists of two layers — the superficial epidermis and the deeper dermis — resting on the subcutaneous hypodermis." },
      { h: "Structure of the epidermis", p: "The epidermis is avascular keratinized stratified squamous epithelium. In thick skin (palms, soles) it has five strata; from deep to superficial: stratum basale (germinativum) where cells divide, stratum spinosum, stratum granulosum, stratum lucidum (only in thick skin) and stratum corneum of dead keratin-filled cells. Its main cells are keratinocytes (keratin), melanocytes (melanin pigment), Langerhans cells (immune) and Merkel cells (touch).", figure: {
        caption: "Figure 14.1 — Layers of the skin (epidermis, dermis) and hypodermis.",
        svg: '<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Skin layers"><rect x="20" y="20" width="380" height="40" fill="#DCFCE7" stroke="#0F4C3A"/><text x="30" y="45" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Epidermis</text><rect x="20" y="60" width="380" height="80" fill="#F0FDF4" stroke="#0F4C3A"/><text x="30" y="104" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Dermis (vessels, nerves, glands, follicles)</text><rect x="20" y="140" width="380" height="45" fill="#DCFCE7" stroke="#0F4C3A"/><text x="30" y="167" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Hypodermis (subcutaneous fat)</text></svg>'
      } },
      { h: "Structure of the dermis", p: "The dermis is tough connective tissue below the epidermis, giving the skin its strength and elasticity. It has two regions: the superficial papillary layer of loose connective tissue forming dermal papillae (which produce fingerprints), and the deeper reticular layer of dense irregular connective tissue rich in collagen and elastic fibres. The dermis contains blood vessels, nerves and sensory receptors, hair follicles and glands." },
      { h: "The hypodermis", p: "The hypodermis (subcutaneous layer / superficial fascia) lies beneath the dermis. It is not truly part of the skin but anchors it to underlying structures; it is composed mainly of adipose and loose connective tissue, insulating, storing energy and absorbing shock. It is the site used for subcutaneous injection." },
      { h: "Hair and nails", list: [
        "Hair — a keratinized structure with a shaft (above the surface) and a root within a follicle; growth occurs at the hair bulb/matrix. The arrector pili smooth muscle raises the hair.",
        "Nails — plates of hard keratin over the dorsal fingertips; parts include the nail body, free edge, root, nail bed, lunula and cuticle (eponychium); growth occurs at the nail matrix."
      ] },
      { h: "Cutaneous glands", list: [
        "Sebaceous (oil) glands — usually open into hair follicles and secrete sebum, which lubricates hair and skin.",
        "Eccrine (merocrine) sweat glands — widespread; open directly onto the surface; important in cooling.",
        "Apocrine sweat glands — in the axilla and groin; open into hair follicles; active from puberty.",
        "Ceruminous glands (ear) and mammary glands are modified sweat glands."
      ] },
      { h: "Blood supply, nerves and pigmentation", p: "The skin is richly vascular (in the dermis) but the epidermis is avascular and nourished by diffusion. Cutaneous sensory receptors detect touch, pressure, temperature and pain. Skin colour is determined mainly by melanin (produced by melanocytes and taken up by keratinocytes), with contributions from carotene and dermal blood; melanin protects against ultraviolet radiation." },
      { h: "Clinical and nursing application", p: "Skin structure underpins nursing care: the epidermal barrier and blood supply explain pressure-injury staging (from intact-skin erythema to full-thickness tissue loss) and wound healing; the hypodermis is the site for subcutaneous injection (insulin, heparin); melanin explains variation in assessing pallor, cyanosis and jaundice across skin tones; and the appendages guide assessment of hydration, perfusion and clubbing of nails." },
      { h: "Key terms", list: [
        "Keratinocyte — the main epidermal cell producing keratin.",
        "Melanocyte — pigment-producing cell of the epidermis.",
        "Stratum corneum — outermost dead keratinized layer.",
        "Dermal papillae — projections of dermis forming fingerprints.",
        "Sebum — oily secretion of the sebaceous gland."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the layers of the skin with a labelled diagram.",
      "Describe the structure and strata of the epidermis.",
      "Describe the structure of the dermis and its two regions.",
      "Describe the epidermal appendages (hair, nails and cutaneous glands).",
      "Explain how skin structure relates to pressure-injury development and staging."
    ],
    assessment: [
      { type: "mcq", q: "The epidermis is composed of:", options: ["Dense connective tissue", "Keratinized stratified squamous epithelium", "Adipose tissue", "Smooth muscle"], answer: 1, rationale: "The epidermis is keratinized stratified squamous epithelium." },
      { type: "mcq", q: "The outermost layer of dead keratinized cells is the:", options: ["Stratum basale", "Stratum spinosum", "Stratum corneum", "Stratum granulosum"], answer: 2, rationale: "The stratum corneum is the tough outermost keratinized layer." },
      { type: "mcq", q: "New epidermal cells are produced in the:", options: ["Stratum corneum", "Stratum basale", "Dermis", "Hypodermis"], answer: 1, rationale: "The stratum basale (germinativum) is the dividing layer." },
      { type: "mcq", q: "The pigment melanin is produced by:", options: ["Keratinocytes", "Melanocytes", "Merkel cells", "Fibroblasts"], answer: 1, rationale: "Melanocytes produce melanin, taken up by keratinocytes." },
      { type: "mcq", q: "The layer giving skin its strength and elasticity is the:", options: ["Epidermis", "Dermis", "Stratum corneum", "Hypodermis"], answer: 1, rationale: "The dermis, rich in collagen and elastic fibres, provides strength and elasticity." },
      { type: "mcq", q: "The subcutaneous layer used for insulin injection is the:", options: ["Epidermis", "Papillary dermis", "Hypodermis", "Stratum lucidum"], answer: 2, rationale: "The hypodermis (subcutaneous fat) is the site of SC injection." },
      { type: "mcq", q: "Sebum is secreted by:", options: ["Eccrine sweat glands", "Sebaceous glands", "Apocrine glands", "Ceruminous glands"], answer: 1, rationale: "Sebaceous glands secrete oily sebum, usually into hair follicles." },
      { type: "mcq", q: "The small muscle that raises a hair is the:", options: ["Detrusor", "Arrector pili", "Sphincter", "Erector spinae"], answer: 1, rationale: "The arrector pili smooth muscle elevates the hair." },
      { type: "mcq", q: "Fingerprints are produced by projections of the dermis called:", options: ["Rugae", "Villi", "Dermal papillae", "Trabeculae"], answer: 2, rationale: "Dermal papillae ridge the overlying epidermis, forming fingerprints." },
      { type: "mcq", q: "The epidermis receives its nutrients by:", options: ["Its own capillaries", "Diffusion from the dermis", "The hypodermis directly", "Sweat glands"], answer: 1, rationale: "The epidermis is avascular and is nourished by diffusion from dermal vessels." }
      , { type: "fill", q: "The white crescent at the base of a nail is the ____.", accept: ["lunula"], rationale: "The lunula is the pale crescent over the nail matrix." }
      , { type: "fill", q: "The widespread sweat glands important for cooling the body are the ____ glands.", accept: ["eccrine", "merocrine"], rationale: "Eccrine (merocrine) sweat glands are widespread and aid thermoregulation." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "ana-15-lymphatic",
    unit: "Unit 6 · Integumentary, Lymphatic & Reproductive (Structure)",
    title: "Structure of the Lymphatic (Immune) System",
    readMinutes: 17,
    summary: "The lymphatic vessels and lymph, the primary (central) lymphoid organs (bone marrow and thymus), and the secondary (peripheral) lymphoid organs — lymph nodes, spleen and mucosa-associated tissue.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and components", p: "The lymphatic system is a network of lymphatic vessels, the fluid lymph they carry, and lymphoid tissues and organs. Structurally it drains excess tissue fluid, absorbs dietary fats, and houses immune cells. Its organs are classified as primary (central) — where lymphocytes are produced and mature — and secondary (peripheral) — where immune responses are mounted." },
      { h: "Lymphatic vessels and lymph", p: "Lymphatic capillaries are blind-ended, highly permeable vessels that pick up interstitial fluid (then called lymph). They drain into larger lymphatic vessels (which contain valves, like veins) and then into two main ducts: the thoracic duct (draining most of the body into the left subclavian vein) and the right lymphatic duct (draining the right upper quadrant). Lymph is a clear fluid resembling plasma, carrying lymphocytes and, from the gut, absorbed fat (chyle).", figure: {
        caption: "Figure 15.1 — Flow of fluid: blood capillary → interstitial fluid → lymphatic capillary → node → duct → vein.",
        svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lymph flow"><defs><marker id="anaAr15" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="40" width="100" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="60" y="58" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Interstitial</text><text x="60" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">fluid</text><rect x="130" y="40" width="100" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="180" y="58" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Lymphatic</text><text x="180" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">capillary</text><rect x="250" y="40" width="90" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="295" y="64" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Lymph node</text><rect x="360" y="40" width="60" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="390" y="64" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Duct</text><rect x="440" y="40" width="50" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="465" y="64" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Vein</text><line x1="110" y1="60" x2="128" y2="60" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr15)"/><line x1="230" y1="60" x2="248" y2="60" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr15)"/><line x1="340" y1="60" x2="358" y2="60" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr15)"/><line x1="420" y1="60" x2="438" y2="60" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr15)"/></svg>'
      } },
      { h: "Primary (central) lymphoid organs", list: [
        "Red bone marrow — soft tissue in spongy bone (sternum, iliac crest, vertebrae) where all blood cells, including lymphocytes, originate; B lymphocytes also mature here.",
        "Thymus — a bilobed gland in the superior mediastinum, large in childhood and involuting after puberty; T lymphocytes mature within its cortex and medulla under the influence of its epithelial cells."
      ] },
      { h: "Lymph nodes", p: "Lymph nodes are small, bean-shaped organs situated along lymphatic vessels, clustered in the neck, axilla, groin, thorax and abdomen. Each is enclosed in a capsule and organized into an outer cortex (containing lymphoid follicles with germinal centres rich in B cells), a deeper paracortex (T cells) and an inner medulla. Lymph enters via several afferent vessels, filters through sinuses where macrophages remove debris and antigens, and leaves via a single efferent vessel at the hilum. Nodes enlarge (lymphadenopathy) in infection and malignancy." },
      { h: "Spleen", p: "The spleen is the largest lymphoid organ, in the left upper quadrant behind the stomach. Structurally it contains white pulp (lymphoid tissue around arteries, for immune surveillance) and red pulp (blood-filled sinusoids where old red cells are removed by macrophages and blood is stored). Its rich blood supply and fragile capsule make it prone to rupture in abdominal trauma." },
      { h: "Mucosa-associated lymphoid tissue (MALT)", p: "Diffuse lymphoid tissue guards mucosal surfaces exposed to the environment: the tonsils (ring around the pharynx), Peyer's patches in the ileum, the appendix, and scattered lymphoid nodules in the respiratory, digestive and urinary tracts. Structurally these are unencapsulated collections of lymphocytes positioned to intercept pathogens at points of entry." },
      { h: "Clinical and nursing application", p: "Node distribution guides physical assessment (palpating cervical, axillary and inguinal nodes) and cancer staging via lymphatic spread and the sentinel node. Thymic and marrow anatomy underlies immunodeficiency and the effects of chemotherapy on immunity; splenic structure explains post-splenectomy infection risk. Lymphatic obstruction explains lymphoedema (for example, after axillary node clearance in breast surgery) — a key focus of nursing arm care." },
      { h: "Key terms", list: [
        "Lymph — fluid within lymphatic vessels.",
        "Primary / secondary lymphoid organ — site of lymphocyte production/maturation vs. immune response.",
        "Germinal centre — B-cell proliferation site in a follicle.",
        "White / red pulp — lymphoid / blood-filtering regions of the spleen.",
        "MALT — mucosa-associated lymphoid tissue."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the components of the lymphatic system.",
      "Trace the flow of lymph from tissues to the venous circulation.",
      "Distinguish primary and secondary lymphoid organs with examples.",
      "Describe the structure of a lymph node.",
      "Describe the structure of the spleen and explain the clinical importance of its blood supply."
    ],
    assessment: [
      { type: "mcq", q: "The fluid carried within lymphatic vessels is called:", options: ["Plasma", "Lymph", "Serum", "Bile"], answer: 1, rationale: "Interstitial fluid entering lymphatic capillaries is called lymph." },
      { type: "mcq", q: "The largest lymphatic vessel, draining most of the body, is the:", options: ["Right lymphatic duct", "Thoracic duct", "Cisterna chyli", "Subclavian vein"], answer: 1, rationale: "The thoracic duct drains most of the body into the left subclavian vein." },
      { type: "mcq", q: "T lymphocytes mature in the:", options: ["Spleen", "Thymus", "Lymph node", "Tonsils"], answer: 1, rationale: "T lymphocytes mature in the thymus (a primary lymphoid organ)." },
      { type: "mcq", q: "A primary (central) lymphoid organ is the:", options: ["Lymph node", "Spleen", "Red bone marrow", "Tonsil"], answer: 2, rationale: "Red bone marrow and thymus are primary lymphoid organs." },
      { type: "mcq", q: "Lymph enters a lymph node through ____ vessels.", options: ["Efferent", "Afferent", "Venous", "Arterial"], answer: 1, rationale: "Several afferent vessels bring lymph in; one efferent vessel drains it." },
      { type: "mcq", q: "The largest lymphoid organ in the body is the:", options: ["Thymus", "Spleen", "Liver", "Appendix"], answer: 1, rationale: "The spleen is the largest lymphoid organ." },
      { type: "mcq", q: "Old red blood cells are removed in the ____ of the spleen.", options: ["White pulp", "Red pulp", "Cortex", "Germinal centre"], answer: 1, rationale: "The red pulp macrophages remove aged erythrocytes." },
      { type: "mcq", q: "Peyer's patches are lymphoid tissue found in the:", options: ["Ileum", "Trachea", "Kidney", "Brain"], answer: 0, rationale: "Peyer's patches are MALT in the wall of the ileum." },
      { type: "mcq", q: "Germinal centres within lymphoid follicles are sites of ____ proliferation.", options: ["Erythrocyte", "B lymphocyte", "Platelet", "Neuron"], answer: 1, rationale: "Germinal centres are sites of B-cell proliferation." },
      { type: "mcq", q: "Swelling of the arm after axillary node removal is due to obstruction of:", options: ["Arteries", "Veins only", "Lymphatic drainage", "Nerves"], answer: 2, rationale: "Impaired lymphatic drainage causes lymphoedema after node clearance." }
      , { type: "fill", q: "The lymphoid gland in the mediastinum that involutes after puberty is the ____.", accept: ["thymus"], rationale: "The thymus enlarges in childhood and involutes after puberty." }
      , { type: "fill", q: "Small bean-shaped organs that filter lymph along its vessels are lymph ____.", accept: ["nodes", "node"], rationale: "Lymph nodes filter lymph and house immune cells." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "ana-16-reproductive",
    unit: "Unit 6 · Integumentary, Lymphatic & Reproductive (Structure)",
    title: "Structure of the Male & Female Reproductive Systems",
    readMinutes: 18,
    summary: "The structure of the male reproductive organs (testes, duct system, accessory glands, penis) and the female reproductive organs (ovaries, uterine tubes, uterus, vagina, external genitalia and mammary glands).",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The reproductive systems produce gametes and (in the female) support the developing offspring. Each has gonads (primary sex organs producing gametes and sex hormones) and accessory ducts, glands and external genitalia. This topic covers structure; hormonal control and the menstrual cycle belong to Physiology." },
      { h: "Male — testes and scrotum", p: "The two testes are oval organs suspended in the scrotum, a skin pouch that keeps them below core temperature for sperm production. Each testis is divided by septa into lobules packed with seminiferous tubules, whose walls contain spermatogenic cells and supporting Sertoli cells; interstitial (Leydig) cells lie between the tubules and secrete testosterone. Sperm pass from the tubules into the rete testis." },
      { h: "Male — duct system and accessory glands", p: "Sperm travel through the epididymis (a coiled duct on the testis where they mature and are stored), the ductus (vas) deferens (ascending in the spermatic cord), the ejaculatory duct, and the urethra. Accessory glands add secretions to form semen: the paired seminal vesicles (fructose-rich fluid), the single prostate gland (encircling the urethra below the bladder, adding a milky alkaline fluid), and the bulbourethral (Cowper's) glands (mucus).", figure: {
        caption: "Figure 16.1 — Pathway of sperm through the male duct system.",
        svg: '<svg viewBox="0 0 500 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Male duct system"><defs><marker id="anaAr16" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="8" y="40" width="90" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="53" y="62" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Seminiferous</text><rect x="118" y="40" width="90" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="163" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Epididymis</text><rect x="228" y="40" width="90" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="273" y="62" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Vas deferens</text><rect x="338" y="40" width="80" height="36" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="378" y="62" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Ejac. duct</text><rect x="438" y="40" width="55" height="36" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="465" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Urethra</text><line x1="98" y1="58" x2="116" y2="58" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr16)"/><line x1="208" y1="58" x2="226" y2="58" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr16)"/><line x1="318" y1="58" x2="336" y2="58" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr16)"/><line x1="418" y1="58" x2="436" y2="58" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr16)"/></svg>'
      } },
      { h: "Male — penis and spermatic cord", p: "The penis is the copulatory organ, containing three columns of erectile tissue — two dorsal corpora cavernosa and the ventral corpus spongiosum surrounding the urethra and expanding as the glans. The spermatic cord suspends the testis and carries the vas deferens, testicular vessels and nerves. Spermatogenesis (sperm formation) proceeds within the seminiferous tubules." },
      { h: "Female — ovaries and uterine tubes", p: "The two ovaries are almond-shaped organs held by ligaments in the pelvis, containing ovarian follicles at various stages within a connective-tissue stroma; each follicle houses a developing oocyte. The uterine (fallopian) tubes extend from near each ovary to the uterus; their fringed fimbriated ends and ciliated infundibulum sweep the released ovum into the tube, whose ampulla is the usual site of fertilization." },
      { h: "Female — uterus, cervix and vagina", p: "The uterus is a pear-shaped muscular organ (fundus, body and cervix) lying between the bladder and rectum. Its wall has three layers: the outer perimetrium, the thick muscular myometrium, and the inner endometrium, which is shed at menstruation and supports implantation. The cervix projects into the vagina, a fibromuscular canal that receives the penis and forms the birth canal." },
      { h: "Female — external genitalia and mammary glands", p: "The external genitalia (vulva) include the mons pubis, labia majora and minora, clitoris (erectile), and the vestibule (containing the urethral and vaginal openings and the greater vestibular/Bartholin's glands). The mammary glands are modified sweat glands within the breasts: lobes of glandular (alveolar) tissue drain via lactiferous ducts to the nipple, supported by fibrous and adipose tissue, and develop fully under hormonal influence for lactation." },
      { h: "Clinical and nursing application", p: "Testicular lobule anatomy underlies self-examination and torsion; prostate position around the urethra explains urinary obstruction in benign prostatic hyperplasia. In the female, tubal anatomy explains ectopic pregnancy (commonly in the ampulla) and the effect of tubal blockage on fertility; the layered uterus underlies menstruation and labour; cervical structure guides cervical screening; and mammary/lactiferous duct anatomy guides breastfeeding support and breast assessment." },
      { h: "Key terms", list: [
        "Seminiferous tubule — site of sperm production in the testis.",
        "Epididymis — duct where sperm mature and are stored.",
        "Endometrium — inner uterine lining shed at menstruation.",
        "Fimbriae — finger-like projections of the uterine tube.",
        "Lactiferous duct — duct draining milk to the nipple."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the structure of the testis and the male duct system.",
      "Describe the accessory glands of the male reproductive system.",
      "Describe the structure of the ovary and the uterine tube.",
      "Describe the layers of the uterine wall and the structure of the cervix and vagina.",
      "Describe the structure of the mammary gland and its clinical relevance to lactation."
    ],
    assessment: [
      { type: "mcq", q: "Sperm are produced within the ____ of the testis.", options: ["Seminiferous tubules", "Rete testis", "Epididymis", "Vas deferens"], answer: 0, rationale: "Spermatogenesis occurs in the seminiferous tubules." },
      { type: "mcq", q: "Sperm mature and are stored in the:", options: ["Prostate", "Seminal vesicle", "Epididymis", "Urethra"], answer: 2, rationale: "The epididymis is the site of sperm maturation and storage." },
      { type: "mcq", q: "The gland encircling the male urethra below the bladder is the:", options: ["Seminal vesicle", "Prostate", "Bulbourethral gland", "Cowper's gland"], answer: 1, rationale: "The prostate surrounds the urethra just below the bladder." },
      { type: "mcq", q: "Testosterone is secreted by the ____ cells of the testis.", options: ["Sertoli", "Spermatogenic", "Chief", "Interstitial (Leydig)"], answer: 3, rationale: "Interstitial (Leydig) cells secrete testosterone." },
      { type: "mcq", q: "The usual site of fertilization is the ____ of the uterine tube.", options: ["Fimbriae", "Ampulla", "Isthmus", "Infundibulum"], answer: 1, rationale: "Fertilization typically occurs in the ampulla of the uterine tube." },
      { type: "mcq", q: "The thick muscular layer of the uterus is the:", options: ["Perimetrium", "Endometrium", "Myometrium", "Peritoneum"], answer: 2, rationale: "The myometrium is the muscular middle layer of the uterine wall." },
      { type: "mcq", q: "The uterine layer shed during menstruation is the:", options: ["Perimetrium", "Myometrium", "Endometrium", "Serosa"], answer: 2, rationale: "The endometrium is shed at menstruation and supports implantation." },
      { type: "mcq", q: "The finger-like projections at the end of the uterine tube are the:", options: ["Fimbriae", "Villi", "Rugae", "Papillae"], answer: 0, rationale: "The fimbriae sweep the ovulated oocyte into the tube." },
      { type: "mcq", q: "The mammary glands are modified:", options: ["Sebaceous glands", "Salivary glands", "Endocrine glands", "Sweat glands"], answer: 3, rationale: "Mammary glands are modified sweat glands producing milk." },
      { type: "mcq", q: "The erectile column of the penis surrounding the urethra is the:", options: ["Corpus cavernosum", "Corpus spongiosum", "Tunica albuginea", "Spermatic cord"], answer: 1, rationale: "The corpus spongiosum surrounds the urethra and forms the glans." }
      , { type: "fill", q: "The duct that carries sperm from the epididymis upward in the spermatic cord is the vas (ductus) ____.", accept: ["deferens"], rationale: "The vas (ductus) deferens conveys sperm from the epididymis." }
      , { type: "fill", q: "The lower narrow part of the uterus projecting into the vagina is the ____.", accept: ["cervix"], rationale: "The cervix is the neck of the uterus opening into the vagina." }
    ]
  }
];
