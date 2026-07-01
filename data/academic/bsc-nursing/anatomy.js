/* ============================================================
   B.Sc. Nursing (4-yr, 2018) · Year 1 · B123 Paper I — ANATOMY
   — 16 topics, degree level, DEEPENED to advanced textbook depth.
   Focus on gross & microscopic STRUCTURE (function is covered in
   the Physiology paper). Aligned to the BNMC B.Sc. Nursing
   syllabus (Anatomy, Paper I). Original wording, grounded in:
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
    readMinutes: 24,
    summary: "Definition and subdivisions of anatomy, anatomical position, directional terms, body planes and sections, regions and cavities, serous membranes, and the levels of structural organization that frame all later study.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and scope", p: "Anatomy is the scientific study of the structure of the body and the relationships between its parts; the companion science, physiology, studies function. Its major subdivisions include gross (macroscopic) anatomy — structures visible to the naked eye, studied regionally (by body region) or systemically (by organ system); microscopic anatomy — histology (tissues) and cytology (cells); developmental anatomy and embryology (structure from conception to death); and surface, radiographic and clinical (applied) anatomy. Nurses use anatomical knowledge to interpret assessment findings, localize pain and lesions, perform procedures safely (injections, catheterization, auscultation) and communicate precisely using a shared, unambiguous terminology." },
      { h: "The anatomical position", p: "All anatomical descriptions assume the anatomical position: the body erect, head and eyes facing forward, feet together and flat on the floor, upper limbs by the sides with the palms turned forward (forearms supinated) and thumbs pointing away from the body. This is a fixed reference so that terms such as 'anterior' or 'lateral' always carry the same meaning regardless of how the patient is actually lying, sitting or standing. The prone position (lying face down) and supine position (lying face up) are the two common clinical reference postures." },
      { h: "Directional terms", list: [
        "Superior (cranial) / inferior (caudal) — toward the head / toward the feet.",
        "Anterior (ventral) / posterior (dorsal) — toward the front / toward the back.",
        "Medial / lateral — toward / away from the midline.",
        "Intermediate — between a more medial and a more lateral structure.",
        "Proximal / distal — nearer to / farther from the trunk or the point of origin of a limb.",
        "Superficial (external) / deep (internal) — toward / away from the body surface.",
        "Ipsilateral / contralateral — on the same side / on the opposite side of the body.",
        "Parietal / visceral — pertaining to the wall of a cavity / to the organ within it."
      ] },
      { h: "Planes and sections", p: "The body is described in three mutually perpendicular planes. The sagittal plane divides it into right and left parts (a midsagittal/median plane passes through the midline into equal halves; a parasagittal plane gives unequal parts). The frontal (coronal) plane divides it into anterior and posterior parts. The transverse (horizontal/axial/cross-sectional) plane divides it into superior and inferior parts and is the plane of most CT and MRI images. Oblique planes pass at an angle between two of these.", figure: {
        caption: "Figure 1.1 — The three principal anatomical planes.",
        svg: '<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Body planes"><g fill="#DCFCE7" stroke="#0F4C3A" stroke-width="1.5"><circle cx="160" cy="40" r="22"/><rect x="132" y="62" width="56" height="90" rx="14"/><rect x="138" y="150" width="20" height="80" rx="9"/><rect x="162" y="150" width="20" height="80" rx="9"/></g><line x1="160" y1="12" x2="160" y2="244" stroke="#7C2D12" stroke-width="2" stroke-dasharray="5 4"/><text x="166" y="20" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Sagittal</text><line x1="96" y1="118" x2="224" y2="118" stroke="#15803D" stroke-width="2" stroke-dasharray="5 4"/><text x="226" y="116" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Transverse</text><ellipse cx="160" cy="118" rx="70" ry="118" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="5 4"/><text x="40" y="210" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Frontal</text></svg>'
      } },
      { h: "Body cavities", p: "Internal organs (viscera) lie within body cavities that protect them and permit movement. The dorsal (posterior) cavity contains the cranial cavity (brain) and the vertebral (spinal) canal (spinal cord). The ventral (anterior) cavity is subdivided by the diaphragm into the thoracic cavity — the two lateral pleural cavities around the lungs and the central mediastinum, which contains the pericardial cavity and heart, oesophagus, trachea and great vessels — and the abdominopelvic cavity (an abdominal part and a continuous pelvic part). Smaller cavities include the oral, nasal, orbital, middle-ear and synovial cavities." },
      { h: "Serous membranes of the ventral cavity", p: "The walls of the ventral cavity and the surfaces of the organs within it are lined by serous membranes — thin, double-layered membranes of simple squamous epithelium (mesothelium) on connective tissue. The parietal layer lines the cavity wall; the visceral layer covers the organ; between them a thin film of serous fluid reduces friction during movement. The three are the pleura (lungs), pericardium (heart) and peritoneum (abdominal organs). Inflammation of these membranes produces pleurisy, pericarditis and peritonitis." },
      { h: "Regions and quadrants of the abdomen", p: "The abdomen is mapped for clinical description either into nine regions (right/left hypochondriac and central epigastric superiorly; right/left lumbar and central umbilical in the middle; right/left iliac (inguinal) and central hypogastric (pubic) inferiorly) using two vertical (midclavicular) and two horizontal (subcostal and transtubercular) planes, or more simply into four quadrants (RUQ, LUQ, RLQ, LLQ) by a vertical and a horizontal line through the umbilicus. Nurses use these to record the site of pain, masses or tenderness — for example RLQ/right iliac pain in appendicitis, or RUQ pain in cholecystitis." },
      { h: "Body regions and terms", p: "The body is divided into an axial part (head, neck and trunk) and an appendicular part (the limbs). Common regional (anatomical) terms every nurse should recognize include cephalic (head), cervical (neck), thoracic (chest), brachial (arm), antebrachial (forearm), carpal (wrist), abdominal, lumbar (loin), gluteal (buttock), femoral (thigh), popliteal (back of knee), sural (calf) and plantar (sole). Using these terms with directional terms allows any point on the body to be located precisely." },
      { h: "Levels of structural organization", p: "The body is built in a hierarchy of increasing complexity: chemical level (atoms and molecules) → cellular level (cells, the smallest living units) → tissue level (groups of similar cells) → organ level (two or more tissue types working together) → system level (organs cooperating in a function) → organismal level (the whole living person). Each level provides the structural basis for the next, and structure at every level is matched to function — the unifying principle of 'form follows function' that underlies all of anatomy.", figure: {
        caption: "Figure 1.2 — Levels of structural organization, simplest to most complex.",
        svg: '<svg viewBox="0 0 720 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Levels of organization"><defs><marker id="anaAr1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="6" y="18" width="98" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="55" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Chemical</text><line x1="104" y1="35" x2="118" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="120" y="18" width="90" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="165" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Cell</text><line x1="210" y1="35" x2="224" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="226" y="18" width="90" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="271" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Tissue</text><line x1="316" y1="35" x2="330" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="332" y="18" width="90" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="377" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Organ</text><line x1="422" y1="35" x2="436" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="438" y="18" width="96" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="486" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">System</text><line x1="534" y1="35" x2="548" y2="35" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr1)"/><rect x="550" y="18" width="104" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="602" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Organism</text></svg>'
      } },
      { h: "The eleven organ systems", p: "The body is conventionally organized into eleven cooperating organ systems: integumentary, skeletal, muscular, nervous, endocrine, cardiovascular, lymphatic (immune), respiratory, digestive, urinary and reproductive. No system works in isolation — for example, the cardiovascular system delivers oxygen taken up by the respiratory system, and the nervous and endocrine systems coordinate all the others. This paper studies the STRUCTURE of these systems; their FUNCTION is taken in the Physiology paper." },
      { h: "Anatomical variation", p: "Textbook descriptions present the most common ('typical') pattern, but individuals vary. Anatomical variations — differences in size, shape, position or branching that are still within the normal range — are extremely common (for example, variable coronary-artery branching, a retrocaecal appendix, or accessory spleens). They must be distinguished from anomalies or congenital malformations, which lie outside the normal range. Awareness of variation prevents diagnostic error and surgical injury." },
      { h: "Clinical relevance", p: "Precise terminology prevents error: a wound described as '3 cm proximal to the medial malleolus' is unambiguous to any clinician anywhere. Cavity and serous-membrane anatomy explains conditions nurses meet daily — pleural effusion (fluid in the pleural cavity), cardiac tamponade (fluid in the pericardial cavity), and peritonitis. Regional mapping guides referral of pain, the site for procedures such as paracentesis (RLQ/LLQ), lumbar puncture and intramuscular injection (upper outer/ventrogluteal region), and the correct interpretation of imaging planes." },
      { h: "Key terms", list: [
        "Anatomical position — the standard erect reference posture with palms forward.",
        "Serous membrane — double-layered (parietal + visceral) membrane lining a ventral cavity.",
        "Mediastinum — the central compartment of the thoracic cavity between the pleural cavities.",
        "Histology — microscopic study of tissues; cytology — of cells.",
        "Anatomical variation — a normal difference between individuals, distinct from an anomaly."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Define anatomy and describe its major subdivisions, distinguishing it from physiology.",
      "Describe the anatomical position and list eight directional terms with examples.",
      "Draw and label the three principal anatomical planes and give an imaging example of each.",
      "Name the body cavities and describe the serous membranes that line the ventral cavity.",
      "Explain the nine abdominal regions and four quadrants and their usefulness in nursing assessment."
    ],
    assessment: [
      { type: "mcq", q: "A nurse documents a lesion using the anatomical position. In this position the palms are:", options: ["Facing backward", "Facing forward (supinated)", "Facing the thighs", "Facing upward"], answer: 1, rationale: "The anatomical position specifies palms turned forward (forearms supinated) so all directional terms are consistent." },
      { type: "mcq", q: "A CT slice showing a cross-section through the abdomen at the level of L3 is taken in which plane?", options: ["Sagittal", "Frontal", "Transverse", "Oblique"], answer: 2, rationale: "Cross-sectional (axial) CT images are taken in the transverse/horizontal plane." },
      { type: "mcq", q: "The wrist is ____ to the elbow, and the elbow is ____ to the wrist:", options: ["proximal; distal", "distal; proximal", "medial; lateral", "superficial; deep"], answer: 1, rationale: "Distal means farther from the limb's attachment (wrist), proximal means nearer (elbow)." },
      { type: "mcq", q: "A stab wound just below the ribs on the right could injure organs of which cavity, entered below the diaphragm?", options: ["Cranial cavity", "Thoracic cavity", "Abdominopelvic cavity", "Vertebral canal"], answer: 2, rationale: "The diaphragm separates the thoracic from the abdominopelvic cavity, which lies below it." },
      { type: "mcq", q: "Fluid accumulating around the heart and compressing it lies within the:", options: ["Pleural cavity", "Peritoneal cavity", "Pericardial cavity", "Mediastinal fat"], answer: 2, rationale: "The pericardial cavity lies between the parietal and visceral pericardium; effusion here can cause tamponade." },
      { type: "mcq", q: "The layer of a serous membrane that directly covers an organ is the:", options: ["Parietal layer", "Visceral layer", "Fibrous layer", "Basement membrane"], answer: 1, rationale: "The visceral layer covers the organ; the parietal layer lines the cavity wall." },
      { type: "mcq", q: "Arranged from simplest to most complex, the correct sequence is:", options: ["Cell → chemical → tissue → organ", "Chemical → cell → tissue → organ → system → organism", "Tissue → cell → organ → system", "Organ → system → cell → tissue"], answer: 1, rationale: "Complexity increases: chemical, cellular, tissue, organ, system, organism." },
      { type: "mcq", q: "A patient reports pain in the right iliac (right lower) region. This is the classic location of:", options: ["Cholecystitis", "Appendicitis", "Gastric ulcer", "Splenic rupture"], answer: 1, rationale: "The appendix lies in the right iliac region (RLQ), where appendicitis pain classically localizes." },
      { type: "mcq", q: "A drug given into the same side as a lesion is delivered to the ____ side:", options: ["Contralateral", "Ipsilateral", "Intermediate", "Distal"], answer: 1, rationale: "Ipsilateral = same side; contralateral = opposite side." },
      { type: "mcq", q: "During abdominal surgery the surgeon incises the serous membrane lining the abdominal wall — the:", options: ["Visceral pleura", "Parietal pericardium", "Parietal peritoneum", "Meninges"], answer: 2, rationale: "The parietal peritoneum lines the abdominal wall; the visceral peritoneum covers the organs." }
      , { type: "fill", q: "The plane that divides the body into anterior and posterior parts is the ____ plane.", accept: ["frontal", "coronal"], rationale: "The frontal (coronal) plane separates front from back." }
      , { type: "fill", q: "The central compartment of the thoracic cavity, containing the heart and great vessels, is the ____.", accept: ["mediastinum"], rationale: "The mediastinum lies between the two pleural cavities." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ana-02-cell",
    unit: "Unit 1 · Introduction to Anatomy",
    title: "Structure of the Cell",
    readMinutes: 25,
    summary: "The generalized eukaryotic cell — plasma membrane, cytoplasm, cytoskeleton and organelles, and the nucleus — described at degree level as the structural unit of the body, with cell junctions, the cell cycle and clinical correlation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The cell as the structural unit", p: "The cell is the smallest independently living structural and functional unit of the body. The human body contains an estimated 30–40 trillion cells of about 200 differentiated types, all sharing a common generalized plan: a plasma membrane enclosing cytoplasm (cytosol plus organelles) and, in most cells, a nucleus. A typical cell is 10–30 micrometres across, though sizes range widely (a red cell ~7.5 µm; an oocyte ~120 µm; a motor-neuron axon over a metre long). Cell shape and organelle content vary with the work the cell does — the principle of structural specialization." },
      { h: "The plasma membrane — fluid-mosaic model", p: "The plasma membrane is a phospholipid bilayer about 7–10 nm thick arranged as a fluid mosaic: amphipathic phospholipids form the bilayer with hydrophilic phosphate heads facing the watery interior and exterior and hydrophobic fatty-acid tails pointing inward; cholesterol (up to ~20% of membrane lipid) is wedged between phospholipids to regulate fluidity; and integral (transmembrane) and peripheral proteins act as channels, carriers, receptors, enzymes, linkers and cell-identity markers. Glycoproteins and glycolipids form the glycocalyx on the outer surface, giving cells their molecular 'fingerprint'.", figure: {
        caption: "Figure 2.1 — Fluid-mosaic plasma membrane: a phospholipid bilayer with embedded proteins.",
        svg: '<svg viewBox="0 0 420 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Plasma membrane bilayer"><text x="8" y="20" font-family="sans-serif" font-size="11" fill="#0F4C3A">Extracellular fluid</text><g fill="#22C55E" stroke="#15803D"><circle cx="40" cy="40" r="8"/><circle cx="80" cy="40" r="8"/><circle cx="120" cy="40" r="8"/><circle cx="220" cy="40" r="8"/><circle cx="260" cy="40" r="8"/><circle cx="300" cy="40" r="8"/><circle cx="340" cy="40" r="8"/><circle cx="380" cy="40" r="8"/><circle cx="40" cy="110" r="8"/><circle cx="80" cy="110" r="8"/><circle cx="120" cy="110" r="8"/><circle cx="220" cy="110" r="8"/><circle cx="260" cy="110" r="8"/><circle cx="300" cy="110" r="8"/><circle cx="340" cy="110" r="8"/><circle cx="380" cy="110" r="8"/></g><rect x="150" y="30" width="30" height="90" rx="10" fill="#0F4C3A"/><text x="165" y="82" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#fff">protein</text><text x="8" y="140" font-family="sans-serif" font-size="11" fill="#0F4C3A">Cytoplasm</text></svg>'
      } },
      { h: "Membrane transport (structural basis)", p: "Membrane structure explains transport. Small non-polar molecules (O2, CO2) and lipid-soluble substances cross the bilayer directly by simple diffusion; water and specific ions pass through protein channels (facilitated diffusion) or aquaporins; carrier proteins move larger polar molecules; and pumps such as the sodium–potassium ATPase move ions against a gradient using ATP. Bulk transport uses vesicles — endocytosis (phagocytosis, pinocytosis, receptor-mediated) brings material in, exocytosis exports secretions. This structural knowledge underlies drug absorption and fluid/electrolyte movement." },
      { h: "Cytoplasm, cytosol and cytoskeleton", p: "The cytoplasm is everything between the plasma membrane and the nucleus. It consists of the cytosol — a gel-like intracellular fluid of water (~75–90%), ions, nutrients, wastes and dissolved enzymes — the organelles suspended within it, and inclusions (stored glycogen, lipid droplets, pigment). The cytoskeleton is a protein framework of microfilaments (actin, ~7 nm), intermediate filaments (~10 nm, tension-bearing) and microtubules (~25 nm, tubulin) that gives shape, anchors organelles, forms tracks for transport and enables cell movement and division." },
      { h: "Membranous organelles", list: [
        "Endoplasmic reticulum — rough ER (studded with ribosomes) synthesizes and folds proteins destined for secretion or membranes; smooth ER makes lipids and steroids, detoxifies drugs, and stores calcium.",
        "Golgi apparatus — a stack of cisternae that modifies (e.g. glycosylates), sorts and packages proteins and lipids into vesicles for secretion, lysosomes or the membrane.",
        "Lysosomes — membrane sacs of ~50 acidic hydrolytic enzymes (pH ~5) for intracellular digestion, autophagy and destruction of engulfed bacteria.",
        "Peroxisomes — contain oxidases and catalase; neutralize free radicals (hydrogen peroxide) and detoxify alcohol and other substances.",
        "Mitochondria — double-membraned 'powerhouses'; the folded inner membrane (cristae) and matrix are the structural site of aerobic ATP production; they contain their own DNA."
      ] },
      { h: "Non-membranous organelles", list: [
        "Ribosomes — sites of protein synthesis; free ribosomes make cytosolic proteins, membrane-bound (rough-ER) ribosomes make secreted and membrane proteins.",
        "Cytoskeleton — microfilaments (actin), intermediate filaments (support/keratin) and microtubules (tracks, spindle).",
        "Centrosome and centrioles — a pair of centrioles in a region of pericentriolar material that organizes microtubules and forms the mitotic spindle.",
        "Cilia and flagella — motile microtubule projections in a 9+2 arrangement (cilia move fluid/mucus over the cell surface; a single flagellum propels the sperm); non-motile primary cilia act as sensors."
      ] },
      { h: "The nucleus", p: "The nucleus is the control centre and usually the largest organelle (~5 µm). A double nuclear envelope, continuous with the rough ER and perforated by nuclear pores (which regulate traffic in and out), separates it from the cytoplasm. Within lie the nucleoplasm, one or more nucleoli (dense sites of ribosomal-subunit assembly), and chromatin — DNA wound around histone proteins. During division chromatin condenses into visible chromosomes; a human somatic cell is diploid with 46 chromosomes (23 pairs), while gametes are haploid with 23. Some cells are anucleate (mature red cells) and some multinucleate (skeletal muscle fibres, osteoclasts)." },
      { h: "Cell junctions", p: "Where cells contact one another they are held by specialized junctions whose structure suits their role: tight junctions seal adjacent membranes to prevent leakage (intestinal, bladder epithelium); adherens junctions and desmosomes rivet cells together to resist mechanical stress (skin, cardiac muscle); hemidesmosomes anchor cells to the basement membrane; and gap junctions form protein channels (connexons) that let ions and small molecules pass directly between cells, allowing synchronized activity in cardiac and smooth muscle." },
      { h: "The cell cycle and division (structural view)", p: "Most body cells divide by mitosis. The cell cycle comprises interphase (G1 growth, S phase — DNA replication, G2) and the mitotic (M) phase — mitosis (prophase, metaphase, anaphase, telophase) followed by cytokinesis, producing two genetically identical diploid daughter cells. Gametes are produced by meiosis, which halves the chromosome number to 23. Structural changes during mitosis — chromatin condensing into chromosomes, the spindle forming from centrioles — are visible microscopically and underlie both normal growth/repair and the uncontrolled division of cancer." },
      { h: "Structural specialization — examples", p: "Structure predicts function: cells rich in mitochondria (cardiac muscle, renal tubule, hepatocytes) are metabolically active; cells with abundant rough ER and a large Golgi (plasma cells, pancreatic acinar cells) are secretory; cells with microvilli (intestinal, renal tubular) maximize absorptive surface area; ciliated cells (respiratory tract, uterine tube) move fluid or mucus; and long branched cells (neurons) suit communication over distance." },
      { h: "Normal values / key figures", list: [
        "Cell number in the adult body: roughly 30–40 trillion.",
        "Typical cell diameter: 10–30 µm (red cell ~7.5 µm).",
        "Plasma-membrane thickness: about 7–10 nm.",
        "Somatic chromosome number: 46 (23 pairs); gamete: 23 (haploid).",
        "Lysosomal internal pH: about 5 (acidic)."
      ] },
      { h: "Clinical relevance", p: "Organelle structure explains disease: lysosomal enzyme defects cause storage disorders (e.g. Tay–Sachs); mitochondrial DNA abnormalities cause fatigable multisystem disease; and many antibiotics selectively target bacterial ribosomes (which differ from human ones), sparing human cells. Understanding the membrane underlies drug absorption, fluid and electrolyte therapy, and why cell injury from hypoxia rapidly disrupts membrane pumps, causing cell swelling and death (necrosis). Uncontrolled mitosis is the basis of cancer, and chemotherapy exploits the vulnerability of dividing cells." },
      { h: "Key terms", list: [
        "Organelle — a specialized subcellular structure with a defined role.",
        "Fluid mosaic — model of the plasma membrane as a mobile lipid–protein sheet.",
        "Cristae — folds of the inner mitochondrial membrane.",
        "Chromatin — the DNA–histone complex within the nucleus.",
        "Gap junction — a channel junction allowing direct cell-to-cell communication."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Draw and label a generalized cell and its principal organelles.",
      "Describe the fluid-mosaic structure of the plasma membrane and relate it to membrane transport.",
      "Compare the structure and role of rough and smooth endoplasmic reticulum.",
      "Describe the structure of the nucleus and the chromatin it contains, and state the human chromosome number.",
      "Describe the types of cell junction and give an example of the tissue in which each is important."
    ],
    assessment: [
      { type: "mcq", q: "A drug that is lipid-soluble and non-polar is most likely to enter a cell by:", options: ["Receptor-mediated endocytosis", "Simple diffusion across the bilayer", "The sodium–potassium pump", "A protein channel"], answer: 1, rationale: "Small lipid-soluble/non-polar molecules cross the phospholipid bilayer directly by simple diffusion." },
      { type: "mcq", q: "A plasma cell secretes large amounts of antibody. Which organelles will be especially abundant?", options: ["Lysosomes and peroxisomes", "Rough ER and Golgi apparatus", "Centrioles and cilia", "Only the nucleolus"], answer: 1, rationale: "Secretory cells have abundant rough ER (protein synthesis) and Golgi (packaging)." },
      { type: "mcq", q: "The folded inner membrane of a mitochondrion, the structural site of ATP production, is the:", options: ["Cristae", "Cisternae", "Glycocalyx", "Chromatin"], answer: 0, rationale: "Cristae are the inner-membrane folds increasing surface area for ATP generation." },
      { type: "mcq", q: "An inherited defect in a hydrolytic enzyme causing accumulation of undigested material points to a disorder of the:", options: ["Ribosome", "Lysosome", "Centriole", "Nucleolus"], answer: 1, rationale: "Lysosomes hold hydrolytic enzymes; their deficiency causes storage disorders." },
      { type: "mcq", q: "Cardiac muscle cells contract in synchrony because ions pass directly between them through:", options: ["Tight junctions", "Desmosomes only", "Gap junctions", "Hemidesmosomes"], answer: 2, rationale: "Gap junctions (connexons) permit direct ionic flow, allowing coordinated contraction." },
      { type: "mcq", q: "Many antibiotics kill bacteria without harming human cells because they target bacterial:", options: ["Mitochondria", "Nuclei", "Ribosomes", "Lysosomes"], answer: 2, rationale: "Bacterial ribosomes differ structurally from human ribosomes, allowing selective toxicity." },
      { type: "mcq", q: "During the S phase of the cell cycle the cell:", options: ["Divides its cytoplasm", "Replicates its DNA", "Forms the spindle", "Condenses chromosomes"], answer: 1, rationale: "DNA is replicated during the S (synthesis) phase of interphase." },
      { type: "mcq", q: "A mature human red blood cell can carry maximal haemoglobin because it:", options: ["Has many nuclei", "Lacks a nucleus", "Has cilia", "Has extra mitochondria"], answer: 1, rationale: "Mature erythrocytes are anucleate, freeing space for haemoglobin." },
      { type: "mcq", q: "The normal diploid chromosome number of a human somatic cell is:", options: ["23", "44", "46", "48"], answer: 2, rationale: "Somatic cells are diploid with 46 chromosomes (23 pairs); gametes have 23." },
      { type: "mcq", q: "The epithelium lining the intestine prevents leakage between cells chiefly by means of:", options: ["Gap junctions", "Tight junctions", "Gap in the basement membrane", "Microvilli"], answer: 1, rationale: "Tight junctions seal adjacent membranes, preventing paracellular leakage." }
      , { type: "fill", q: "The gel-like intracellular fluid of the cytoplasm surrounding the organelles is the ____.", accept: ["cytosol"], rationale: "Cytosol is the fluid portion of the cytoplasm." }
      , { type: "fill", q: "The dense nuclear structure that assembles ribosomal subunits is the ____.", accept: ["nucleolus", "nucleoli"], rationale: "The nucleolus assembles ribosomal subunits." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ana-03-tissues",
    unit: "Unit 1 · Introduction to Anatomy",
    title: "Tissues, Membranes & Glands",
    readMinutes: 25,
    summary: "The four primary tissue types — epithelial, connective, muscular and nervous — their detailed structural classification, cell junctions, body membranes, glands, and tissue repair, with clinical correlation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a tissue?", p: "A tissue is a group of cells of similar structure and embryological origin, together with their extracellular matrix, that work together to perform a common function. Histology (from the Greek histos, tissue) recognizes four primary tissue types: epithelial, connective, muscular and nervous. Every organ is built by combining these four in characteristic proportions — the intestine, for example, has an epithelial lining, connective-tissue support, muscular walls and a nerve supply." },
      { h: "Epithelial tissue — general features", p: "Epithelium covers body surfaces, lines cavities, tubes and ducts, and forms glands. Its distinguishing features are: cells closely packed with very little intercellular matrix; distinct polarity (a free/apical surface and a basal surface); attachment to a basement membrane (a thin extracellular sheet of basal lamina + reticular lamina) that anchors it to underlying connective tissue; and it is avascular — nourished by diffusion from vessels in the connective tissue beneath. Its high rate of cell division allows rapid regeneration." },
      { h: "Classification of epithelium", p: "Covering and lining epithelia are named by two criteria. By number of layers: simple (a single layer, for diffusion/secretion/absorption), stratified (many layers, for protection), and pseudostratified (a single layer that looks layered). By cell shape: squamous (flat), cuboidal, and columnar (tall). Special types include transitional (urothelium), which changes shape to allow stretch in the urinary tract, and keratinized stratified squamous epithelium (the epidermis). Examples: simple squamous — alveoli and capillary lining; simple columnar — stomach and intestine; ciliated pseudostratified columnar — airways." },
      { h: "Connective tissue — general structure", p: "Connective tissue is the most abundant and widely distributed; its defining feature is an abundant extracellular matrix (ground substance + protein fibres) with relatively few, scattered cells. Ground substance ranges from fluid (blood) to gel (cartilage) to solid (bone). The three fibre types are collagen (strong, resists tension), elastic (recoils), and reticular (fine branching networks that form supporting frameworks). Resident cells include fibroblasts (make fibres and matrix), macrophages, mast cells, adipocytes and plasma cells." },
      { h: "Types of connective tissue", list: [
        "Loose connective tissue — areolar (packing/support), adipose (fat storage, insulation), reticular (framework of nodes/marrow).",
        "Dense connective tissue — regular (parallel collagen: tendons, ligaments), irregular (interwoven collagen: dermis, capsules), and elastic (aorta wall, some ligaments).",
        "Cartilage — hyaline (glassy, most common), elastic (external ear, epiglottis) and fibrocartilage (discs, menisci); firm gel matrix, avascular, chondrocytes in lacunae.",
        "Bone (osseous) — mineralized (hydroxyapatite) matrix in osteons; hard and rigid.",
        "Blood — cells and platelets suspended in fluid plasma matrix; a fluid connective tissue."
      ] },
      { h: "Muscular tissue — structure", p: "Muscle tissue is specialized for contraction and is composed of elongated cells (fibres) containing the contractile proteins actin and myosin. The three types are structurally distinct: skeletal (striated, cylindrical, multinucleate, voluntary; attached to bone); cardiac (striated, branched, one or two central nuclei, joined by intercalated discs, involuntary; in the heart wall); and smooth (non-striated, spindle-shaped, single central nucleus, involuntary; in the walls of vessels and hollow viscera)." },
      { h: "Nervous tissue — structure", p: "Nervous tissue consists of neurons — excitable cells with a cell body, several dendrites and a single axon, specialized to generate and conduct electrical impulses — and far more numerous neuroglia (supporting cells) that protect, insulate, nourish and defend neurons. It forms the brain, spinal cord, nerves and ganglia and is examined further in the nervous-system topic." },
      { h: "Epithelial membranes", list: [
        "Mucous membranes — line body cavities that open to the exterior (respiratory, digestive, urinary, reproductive tracts) and are kept moist by mucus.",
        "Serous membranes — line closed ventral cavities and cover their organs; a parietal + visceral layer of mesothelium secreting serous fluid (pleura, pericardium, peritoneum).",
        "Cutaneous membrane — the skin: keratinized stratified squamous epithelium (epidermis) on connective tissue (dermis); a dry membrane."
      ] },
      { h: "Synovial membranes", p: "Synovial membranes differ from epithelial membranes in that they are composed of connective tissue (not epithelium). They line the cavities of freely movable (synovial) joints, tendon sheaths and bursae, and secrete synovial fluid, which lubricates and nourishes the articular cartilage. Their inflammation (synovitis) is central to rheumatoid arthritis." },
      { h: "Glands — structure and classification", p: "A gland is one or more epithelial cells that manufacture and secrete a product. Endocrine glands are ductless and release hormones directly into the blood. Exocrine glands retain ducts and secrete onto an epithelial surface (sweat, salivary, mucous, digestive glands). Exocrine glands are classified structurally as unicellular (the goblet cell) or multicellular; multicellular glands are further classified by duct branching (simple vs compound) and by the shape of their secretory portion (tubular, acinar/alveolar, tubuloacinar). They are also classified by mode of secretion: merocrine (exocytosis, e.g. salivary), apocrine (apical portion pinched off), and holocrine (whole cell disintegrates, e.g. sebaceous).", figure: {
        caption: "Figure 3.1 — Classification of glands by secretion route.",
        svg: '<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gland classification"><rect x="180" y="12" width="120" height="34" rx="8" fill="#0F4C3A"/><text x="240" y="34" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#fff">GLANDS</text><line x1="240" y1="46" x2="120" y2="80" stroke="#15803D" stroke-width="2"/><line x1="240" y1="46" x2="360" y2="80" stroke="#15803D" stroke-width="2"/><rect x="40" y="80" width="160" height="70" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="120" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Endocrine</text><text x="120" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">ductless</text><text x="120" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">hormone to blood</text><rect x="280" y="80" width="160" height="70" rx="8" fill="#F0FDF4" stroke="#15803D"/><text x="360" y="102" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Exocrine</text><text x="360" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">has ducts</text><text x="360" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">secretes onto surface</text></svg>'
      } },
      { h: "Tissue repair", p: "Damaged tissue is repaired by regeneration (replacement with the same tissue type, restoring function) or by fibrosis (replacement with scar/fibrous tissue). Regenerative capacity depends on structure: epithelium and bone regenerate well; cartilage and cardiac/nervous tissue regenerate poorly, so healing produces scar. Repair proceeds through inflammation, formation of vascular granulation tissue, and remodelling. This explains why a skin graze heals cleanly but a myocardial infarct or a spinal-cord injury leaves permanent deficit.", figure: {
        caption: "Figure 3.2 — The four primary tissue types.",
        svg: '<svg viewBox="0 0 480 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four tissue types"><rect x="10" y="28" width="105" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="62" y="46" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Epithelial</text><text x="62" y="60" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">cover/line</text><rect x="125" y="28" width="105" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="177" y="46" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Connective</text><text x="177" y="60" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">support/bind</text><rect x="240" y="28" width="105" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="292" y="46" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Muscular</text><text x="292" y="60" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">contract</text><rect x="355" y="28" width="115" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="412" y="46" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Nervous</text><text x="412" y="60" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">conduct</text></svg>'
      } },
      { h: "Clinical relevance", p: "Tissue structure underpins healing and disease: epithelium regenerates but cartilage does not; metaplasia (respiratory epithelium changing in smokers) and dysplasia are recognized on biopsy and may precede cancer. Serous-membrane inflammation causes pleurisy or peritonitis; synovial inflammation causes the joint disease of rheumatoid arthritis. Recognizing gland types explains cystic fibrosis (an exocrine problem of thick secretions) versus endocrine disorders such as goitre or diabetes." },
      { h: "Key terms", list: [
        "Basement membrane — extracellular sheet anchoring epithelium to connective tissue.",
        "Extracellular matrix — ground substance plus fibres surrounding connective-tissue cells.",
        "Intercalated disc — junction between cardiac muscle cells.",
        "Neuroglia — supporting cells of nervous tissue.",
        "Holocrine / merocrine / apocrine — modes of exocrine secretion."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Name the four primary tissue types and give one location and function of each.",
      "Classify epithelial tissue by number of layers and by cell shape, with examples.",
      "Describe the general structure of connective tissue and list its main types.",
      "Differentiate endocrine and exocrine glands and classify exocrine glands structurally and by mode of secretion.",
      "Explain tissue repair by regeneration and fibrosis, relating the outcome to tissue type."
    ],
    assessment: [
      { type: "mcq", q: "The lining of the alveoli and capillaries is a single layer of flat cells, ideal for diffusion — this is:", options: ["Simple squamous epithelium", "Stratified squamous epithelium", "Transitional epithelium", "Simple columnar epithelium"], answer: 0, rationale: "Simple squamous epithelium is a single flat-cell layer suited to rapid diffusion." },
      { type: "mcq", q: "The defining structural feature that distinguishes connective tissue from epithelium is:", options: ["Striations", "Excitability", "Abundant extracellular matrix", "A free apical surface"], answer: 2, rationale: "Connective tissue has abundant matrix with scattered cells; epithelium has little matrix." },
      { type: "mcq", q: "The urinary bladder must stretch as it fills; it is therefore lined by:", options: ["Simple squamous epithelium", "Keratinized epithelium", "Transitional epithelium", "Ciliated columnar epithelium"], answer: 2, rationale: "Transitional epithelium (urothelium) changes shape to accommodate stretch." },
      { type: "mcq", q: "A sebaceous gland secretes by the whole cell breaking down. This mode of secretion is:", options: ["Merocrine", "Apocrine", "Holocrine", "Endocrine"], answer: 2, rationale: "Sebaceous glands are holocrine — the entire secretory cell disintegrates to form the product." },
      { type: "mcq", q: "Which membrane lines closed ventral cavities and secretes serous fluid?", options: ["Serous membrane", "Mucous membrane", "Synovial membrane", "Cutaneous membrane"], answer: 0, rationale: "Serous membranes (pleura, pericardium, peritoneum) line closed cavities." },
      { type: "mcq", q: "Tendons transmit strong one-directional pull because they are made of:", options: ["Loose areolar tissue", "Hyaline cartilage", "Dense regular connective tissue", "Adipose tissue"], answer: 2, rationale: "Dense regular connective tissue has parallel collagen fibres for tensile strength." },
      { type: "mcq", q: "After a myocardial infarction the dead muscle is replaced by scar rather than new muscle because cardiac tissue:", options: ["Regenerates rapidly", "Regenerates poorly", "Is avascular", "Is epithelial"], answer: 1, rationale: "Cardiac muscle regenerates poorly, so infarcted tissue heals by fibrosis (scar)." },
      { type: "mcq", q: "The membrane lining a synovial joint differs from other membranes in that it is composed of:", options: ["Epithelium only", "Connective tissue (no epithelium)", "Smooth muscle", "Nervous tissue"], answer: 1, rationale: "Synovial membranes are connective tissue and lack an epithelial layer." },
      { type: "mcq", q: "In a long-term smoker, respiratory ciliated epithelium may be replaced by stratified squamous epithelium. This change is called:", options: ["Hyperplasia", "Metaplasia", "Atrophy", "Necrosis"], answer: 1, rationale: "Metaplasia is the reversible replacement of one mature tissue type by another." },
      { type: "mcq", q: "A goblet cell that secretes mucus onto the intestinal surface is an example of a:", options: ["Multicellular endocrine gland", "Serous membrane", "Unicellular exocrine gland", "Neuroglial cell"], answer: 2, rationale: "The goblet cell is a unicellular exocrine gland." }
      , { type: "fill", q: "Skeletal and cardiac muscle appear striped and are described as ____ muscle.", accept: ["striated"], rationale: "Skeletal and cardiac muscle are striated; smooth muscle is not." }
      , { type: "fill", q: "The thin extracellular sheet that anchors epithelium to underlying connective tissue is the ____ membrane.", accept: ["basement", "basal"], rationale: "The basement membrane anchors epithelium and lacks blood vessels." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ana-04-skeletal",
    unit: "Unit 2 · Musculoskeletal System (Structure)",
    title: "Structure of the Skeletal System: Bones & Cartilage",
    readMinutes: 26,
    summary: "The skeleton and its divisions, classification of bones by shape, the gross and microscopic structure of bone, bone development and growth, surface markings, cartilage, and the organization of the axial and appendicular skeleton.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and functions of the skeleton", p: "The adult skeleton has 206 named bones and forms the rigid framework of the body. Its structural functions are: support (framework and attachment for soft tissues); protection of vital organs (skull–brain, ribcage–heart/lungs, vertebrae–spinal cord, pelvis–pelvic viscera); movement (bones act as levers moved by muscles across joints); mineral homeostasis (storage of ~99% of body calcium and much phosphate); blood-cell formation (haemopoiesis in red marrow); and energy storage (yellow marrow fat). It is divided into the axial skeleton (skull, vertebral column, ribs, sternum — 80 bones) and the appendicular skeleton (limbs and their girdles — 126 bones)." },
      { h: "Classification of bones by shape", list: [
        "Long bones — longer than wide, with a shaft and two ends; act as levers (femur, humerus, tibia, phalanges).",
        "Short bones — roughly cube-shaped, giving stability with limited movement (carpals, tarsals).",
        "Flat bones — thin, often curved, for protection and broad muscle attachment (skull vault, sternum, ribs, scapula).",
        "Irregular bones — complex shapes not fitting other classes (vertebrae, facial bones, hip bone).",
        "Sesamoid bones — develop within tendons where they cross joints (patella).",
        "Sutural (wormian) bones — small bones within skull sutures."
      ] },
      { h: "Gross structure of a long bone", p: "A typical long bone has a diaphysis (shaft) of compact bone surrounding a central medullary (marrow) cavity; two epiphyses (ends) of spongy bone with a thin compact shell, covered by articular (hyaline) cartilage where they form joints; the metaphysis, the region between diaphysis and epiphysis containing the epiphyseal (growth) plate in the young and the epiphyseal line in adults; the periosteum, a tough double-layered connective-tissue sheath (fibrous outer + osteogenic inner layer) covering the outer surface except at joints; and the endosteum lining internal (medullary and canal) surfaces.", figure: {
        caption: "Figure 4.1 — Regions of a long bone (schematic).",
        svg: '<svg viewBox="0 0 220 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Long bone regions"><rect x="90" y="20" width="40" height="220" rx="18" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><ellipse cx="110" cy="30" rx="34" ry="20" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><ellipse cx="110" cy="230" rx="34" ry="20" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="150" y="34" font-family="sans-serif" font-size="11" fill="#0F4C3A">Epiphysis</text><text x="150" y="130" font-family="sans-serif" font-size="11" fill="#0F4C3A">Diaphysis</text><text x="150" y="234" font-family="sans-serif" font-size="11" fill="#0F4C3A">Epiphysis</text><line x1="110" y1="60" x2="110" y2="200" stroke="#15803D" stroke-width="6"/><text x="4" y="130" font-family="sans-serif" font-size="11" fill="#15803D">Medullary</text><text x="4" y="144" font-family="sans-serif" font-size="11" fill="#15803D">cavity</text></svg>'
      } },
      { h: "Microscopic structure of compact bone", p: "Compact (cortical) bone is built of osteons (Haversian systems): concentric rings (lamellae) of mineralized matrix around a central (Haversian) canal that carries blood vessels and nerves. Osteocytes (mature bone cells) lie in small spaces called lacunae between the lamellae and communicate through tiny channels (canaliculi) that also carry nutrients. Perforating (Volkmann's) canals run at right angles connecting the Haversian canals to the periosteum and marrow. This organized layout combines great strength with relative lightness." },
      { h: "Spongy bone and bone cells", p: "Spongy (cancellous/trabecular) bone consists of an open lattice of trabeculae — bony struts aligned along lines of mechanical stress — with red marrow filling the spaces. It is found in the epiphyses and the interior of flat/irregular bones and provides strength with minimal weight. Four bone-cell types remodel bone continuously: osteogenic (stem) cells; osteoblasts (build new bone matrix); osteocytes (mature cells that maintain matrix); and osteoclasts (large multinucleate cells that resorb bone). The balance of osteoblast and osteoclast activity determines bone mass." },
      { h: "Bone matrix", p: "Bone matrix combines an organic component — about 35% by weight, mainly type I collagen fibres plus ground substance, giving flexibility and tensile strength — with an inorganic component — about 65%, chiefly calcium-phosphate crystals (hydroxyapatite) deposited on the collagen, giving hardness and compressive strength. This composite is why children's collagen-rich bones bend (greenstick fractures) whereas elderly, mineral-depleted bones become brittle and fracture easily (osteoporosis)." },
      { h: "Bone development and growth (ossification)", p: "Bone forms by ossification. Intramembranous ossification forms flat bones (skull, clavicle) directly within a fibrous membrane. Endochondral ossification forms most bones by replacing a hyaline-cartilage model, starting at a primary ossification centre in the diaphysis and later secondary centres in the epiphyses. Growth in length occurs at the epiphyseal (growth) plate until it closes (roughly 18–21 years); growth in width (appositional growth) occurs at the periosteum. Bone is remodelled throughout life in response to stress and calcium demand." },
      { h: "Surface markings of bone", list: [
        "Projections for muscle/ligament attachment — tuberosity, trochanter, tubercle, crest, spine, epicondyle, process.",
        "Projections that form joints — head, condyle, facet, ramus.",
        "Depressions and openings — fossa (hollow), foramen (hole for vessels/nerves), meatus (canal), sinus (air cavity), fissure and groove.",
        "These markings, learned by palpation, are the landmarks nurses use for surface anatomy and injection sites."
      ] },
      { h: "Cartilage — structure and types", p: "Cartilage is avascular, nerveless connective tissue of chondrocytes housed in lacunae within a firm gel matrix, usually covered by a fibrous perichondrium from which it gains nutrients by diffusion. The three types are: hyaline cartilage (most common; articular surfaces, costal cartilages, respiratory tract, the fetal skeleton), elastic cartilage (external ear, epiglottis; contains elastic fibres for flexibility), and fibrocartilage (intervertebral discs, menisci, pubic symphysis; densely collagenous to resist compression). Cartilage precedes bone in endochondral ossification and heals slowly because it is avascular." },
      { h: "The axial and appendicular skeleton", p: "Axial skeleton (80 bones): 22 skull bones (8 cranial + 14 facial), the hyoid bone, 6 ear ossicles, 26 vertebrae (7 cervical, 12 thoracic, 5 lumbar, the sacrum and coccyx), 24 ribs (12 pairs) and the sternum. Appendicular skeleton (126 bones): the pectoral (shoulder) girdle (clavicle and scapula) and upper limbs; the pelvic girdle (two hip bones) and lower limbs. The girdles attach the limbs to the axial skeleton." },
      { h: "Normal values / key figures", list: [
        "Number of bones in the adult skeleton: 206.",
        "Bone matrix composition: about 65% mineral (hydroxyapatite), 35% organic (mostly collagen).",
        "Body calcium stored in bone: about 99%.",
        "Vertebrae: 7 cervical, 12 thoracic, 5 lumbar, sacrum, coccyx (26 total).",
        "Epiphyseal plate closure: roughly 18–21 years of age."
      ] },
      { h: "Clinical relevance", p: "Bone structure explains fracture types and the healing sequence (haematoma → soft/fibrocartilaginous callus → bony callus → remodelling). The epiphyseal plate is a point of weakness in children, so growth-plate (Salter–Harris) fractures may disturb growth. Osteoporosis produces fragility fractures of the hip, wrist and vertebrae in the elderly. Red-marrow sites (sternum, iliac crest) are used for marrow aspiration. Nurses apply this in traction and cast care, fall prevention, and calcium/vitamin-D health education." },
      { h: "Key terms", list: [
        "Osteon (Haversian system) — the structural unit of compact bone.",
        "Diaphysis / epiphysis / metaphysis — shaft / end / growth region of a long bone.",
        "Periosteum — connective-tissue sheath covering the outer bone surface.",
        "Trabeculae — bony struts of spongy bone aligned along stress lines.",
        "Hydroxyapatite — the calcium-phosphate mineral of bone matrix."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Classify bones by shape and give an example of each; state the functions of the skeleton.",
      "Describe the gross structure of a long bone with a labelled diagram.",
      "Describe the microscopic structure of compact bone (the osteon).",
      "Compare intramembranous and endochondral ossification and explain how a long bone grows in length.",
      "Name the three types of cartilage with their locations and structural features."
    ],
    assessment: [
      { type: "mcq", q: "A child sustains a fracture through the growth region of the femur near the knee. This site is the:", options: ["Diaphysis", "Periosteum", "Epiphyseal plate", "Medullary cavity"], answer: 2, rationale: "The epiphyseal (growth) plate is a weak point in children and its injury may disturb growth." },
      { type: "mcq", q: "The central canal of an osteon carries:", options: ["Only calcium crystals", "Blood vessels and nerves", "Synovial fluid", "Yellow marrow only"], answer: 1, rationale: "The Haversian (central) canal transmits blood vessels and nerves through compact bone." },
      { type: "mcq", q: "Elderly osteoporotic bone fractures easily because it has lost:", options: ["Collagen only", "Mineral (bone mass)", "Periosteum", "Its medullary cavity"], answer: 1, rationale: "Osteoporosis reduces bone mineral density (mass), making bone brittle." },
      { type: "mcq", q: "Cells responsible for resorbing bone during remodelling are:", options: ["Osteoblasts", "Osteocytes", "Osteoclasts", "Chondrocytes"], answer: 2, rationale: "Osteoclasts resorb bone; osteoblasts build it." },
      { type: "mcq", q: "The flat bones of the skull vault form directly within a fibrous membrane by:", options: ["Endochondral ossification", "Intramembranous ossification", "Appositional growth only", "Fibrosis"], answer: 1, rationale: "Flat bones such as the skull form by intramembranous ossification." },
      { type: "mcq", q: "The composite that makes bone both hard and slightly flexible is:", options: ["Collagen alone", "Hydroxyapatite crystals deposited on collagen", "Elastin and keratin", "Synovial fluid"], answer: 1, rationale: "Mineral (hydroxyapatite) on a collagen framework gives hardness plus tensile strength." },
      { type: "mcq", q: "The intervertebral discs, which resist compression, are made of:", options: ["Hyaline cartilage", "Elastic cartilage", "Fibrocartilage", "Compact bone"], answer: 2, rationale: "Fibrocartilage forms discs and menisci, resisting compressive load." },
      { type: "mcq", q: "Which of the following is part of the appendicular skeleton?", options: ["Sternum", "Vertebral column", "Scapula", "A rib"], answer: 2, rationale: "The scapula belongs to the pectoral girdle (appendicular); sternum, ribs and vertebrae are axial." },
      { type: "mcq", q: "Growth in the width (thickness) of a long bone occurs by deposition at the:", options: ["Epiphyseal plate", "Periosteum (appositional growth)", "Medullary cavity", "Articular cartilage"], answer: 1, rationale: "Appositional growth at the periosteum increases bone diameter." },
      { type: "mcq", q: "A hole in a bone that transmits a nerve or vessel is termed a:", options: ["Fossa", "Foramen", "Tuberosity", "Condyle"], answer: 1, rationale: "A foramen is an opening for the passage of vessels or nerves." }
      , { type: "fill", q: "The tough connective-tissue sheath covering the outer surface of a bone is the ____.", accept: ["periosteum"], rationale: "The periosteum covers bone and supports repair and appositional growth." }
      , { type: "fill", q: "Mature bone cells housed in spaces called lacunae are ____.", accept: ["osteocytes", "osteocyte"], rationale: "Osteocytes are mature bone cells that maintain the matrix." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ana-05-joints",
    unit: "Unit 2 · Musculoskeletal System (Structure)",
    title: "Structure of Joints & Ligaments",
    readMinutes: 25,
    summary: "Classification of joints by structure and function, the detailed anatomy of a synovial joint, the six types of synovial joint, movements permitted, ligaments, tendons and bursae, and the factors governing joint stability.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a joint?", p: "A joint (articulation or arthrosis) is the site where two or more bones, or bone and cartilage, or bone and teeth, meet. Joints hold the skeleton together and, in most cases, permit movement; the study of joints is arthrology. Joints are classified structurally by the material that unites the bones and by whether a joint cavity is present, and functionally by the amount of movement they allow. The two schemes overlap but do not exactly correspond." },
      { h: "Structural classification", list: [
        "Fibrous joints — bones united directly by fibrous connective tissue, with no joint cavity. Sub-types: sutures (skull), syndesmoses (distal tibiofibular joint, held by an interosseous membrane), and gomphoses (peg-in-socket, as a tooth in its alveolus).",
        "Cartilaginous joints — bones united by cartilage, with no cavity. Sub-types: synchondroses (united by hyaline cartilage, e.g. the epiphyseal plate and the first sternocostal joint) and symphyses (united by fibrocartilage, e.g. the pubic symphysis and intervertebral discs).",
        "Synovial joints — bones separated by a fluid-filled cavity and united by a capsule; freely movable and by far the most common and functionally important type."
      ] },
      { h: "Functional classification", list: [
        "Synarthrosis — an immovable joint (skull sutures, gomphoses).",
        "Amphiarthrosis — a slightly movable joint (pubic symphysis, intervertebral joints, distal tibiofibular joint).",
        "Diarthrosis — a freely movable joint; all synovial joints are diarthroses."
      ] },
      { h: "Structure of a synovial joint", p: "Synovial joints share distinguishing features: articular (hyaline) cartilage capping the bone ends (reduces friction and absorbs shock but has no perichondrium); a joint (synovial) cavity — the space that defines a synovial joint; a two-layered articular capsule (a tough fibrous outer layer continuous with the periosteum, and an inner synovial membrane); synovial fluid, a viscous filtrate that lubricates, nourishes the cartilage and contains phagocytes; and reinforcing ligaments (capsular, extracapsular and intracapsular). Some joints contain accessory structures — articular discs (menisci), fat pads and labra that deepen sockets.", figure: {
        caption: "Figure 5.1 — Components of a synovial joint.",
        svg: '<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Synovial joint"><rect x="60" y="15" width="180" height="55" rx="12" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><rect x="60" y="140" width="180" height="55" rx="12" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><rect x="70" y="66" width="160" height="10" fill="#22C55E"/><rect x="70" y="134" width="160" height="10" fill="#22C55E"/><rect x="90" y="78" width="120" height="54" fill="#F0FDF4" stroke="#15803D" stroke-dasharray="4 3"/><line x1="60" y1="70" x2="35" y2="70" stroke="#0F4C3A"/><text x="0" y="60" font-family="sans-serif" font-size="10" fill="#0F4C3A">Articular</text><text x="0" y="73" font-family="sans-serif" font-size="10" fill="#0F4C3A">cartilage</text><text x="112" y="108" font-family="sans-serif" font-size="10" fill="#15803D">Joint cavity</text><text x="242" y="108" font-family="sans-serif" font-size="10" fill="#0F4C3A">Capsule</text></svg>'
      } },
      { h: "Types of synovial joints", list: [
        "Plane (gliding) — flat surfaces slide; nonaxial (intercarpal, intertarsal, acromioclavicular).",
        "Hinge — a convex surface fits a concave one, allowing angular motion in one plane; uniaxial (elbow, knee, ankle, interphalangeal).",
        "Pivot — a rounded process rotates within a ring; uniaxial rotation (atlanto-axial, proximal radioulnar).",
        "Condyloid (ellipsoid) — an oval condyle in an elliptical socket; biaxial (wrist/radiocarpal, metacarpophalangeal).",
        "Saddle — reciprocally saddle-shaped surfaces; biaxial with a wide range (thumb carpometacarpal — allows opposition).",
        "Ball-and-socket — a spherical head in a cup; multiaxial and freest (shoulder, hip)."
      ] },
      { h: "Movements at synovial joints", list: [
        "Angular — flexion/extension, abduction/adduction, circumduction.",
        "Rotation — medial (internal) and lateral (external) rotation about a long axis.",
        "Special movements — supination/pronation (forearm), inversion/eversion (foot), dorsiflexion/plantarflexion (ankle), protraction/retraction, elevation/depression, and opposition (thumb).",
        "The movements possible depend on the joint type and the shape of the articulating surfaces."
      ] },
      { h: "Ligaments, tendons, bursae and tendon sheaths", p: "Ligaments are bands or cords of dense regular connective tissue (mainly collagen with some elastic fibres) that connect bone to bone and stabilize joints. Tendons connect muscle to bone and transmit muscle pull; a flattened tendon is an aponeurosis. Bursae are flattened synovial sacs filled with fluid that cushion movement between structures (skin over bone, tendon over bone, muscle over muscle). Tendon (synovial) sheaths are elongated bursae wrapping heavily used tendons (e.g. at the wrist and ankle) to reduce friction." },
      { h: "Factors influencing joint stability and mobility", p: "Three structural factors determine how stable and how mobile a joint is: (1) the shape of the articulating surfaces — deep, closely fitting sockets (hip) are stable, shallow ones (shoulder) are mobile but unstable; (2) the number, strength and position of the ligaments and capsule; and (3) the tone of the muscles and tendons crossing the joint, often the most important factor. There is an inherent trade-off between stability and mobility, illustrated by the mobile-but-unstable shoulder versus the stable-but-less-mobile hip." },
      { h: "Examples of major joints", list: [
        "Shoulder (glenohumeral) — ball-and-socket; shallow glenoid deepened by a labrum; very mobile, commonly dislocated anteriorly.",
        "Hip — ball-and-socket; deep acetabulum + labrum; very stable; a common fracture site (neck of femur) in the elderly.",
        "Knee — largest and most complex; primarily hinge; stabilized by cruciate and collateral ligaments and cushioned by menisci.",
        "Elbow — hinge (humero-ulnar) plus a pivot (proximal radioulnar) for pronation/supination."
      ] },
      { h: "Normal values / key figures", list: [
        "Three structural classes: fibrous, cartilaginous, synovial.",
        "Three functional classes: synarthrosis (immovable), amphiarthrosis (slight), diarthrosis (free).",
        "Six synovial types: plane, hinge, pivot, condyloid, saddle, ball-and-socket.",
        "Ligament = bone to bone; tendon = muscle to bone.",
        "Stability determined by surface shape, ligaments and muscle tone."
      ] },
      { h: "Clinical relevance", p: "Joint structure explains common injuries and disease: sprains (overstretch/tear of a ligament), strains (muscle/tendon), dislocation (loss of articular contact — most often the mobile shoulder), meniscal and cruciate tears at the knee, and bursitis. In osteoarthritis the articular cartilage wears away; in rheumatoid arthritis the synovial membrane inflames and destroys the joint. Nurses apply this in joint positioning, range-of-motion exercises to prevent contractures, care of the joint after replacement (arthroplasty), and aseptic technique for joint aspiration." },
      { h: "Key terms", list: [
        "Articulation — a joint.",
        "Synovial fluid — viscous lubricating and nourishing fluid of a synovial cavity.",
        "Diarthrosis — a freely movable joint.",
        "Bursa — a fluid-filled synovial sac reducing friction.",
        "Meniscus (articular disc) — fibrocartilage pad within certain synovial joints."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Classify joints structurally and functionally with examples of each type.",
      "Describe the structure of a typical synovial joint with a labelled diagram.",
      "List the six types of synovial joint and give an example and the movement of each.",
      "Differentiate ligaments, tendons, aponeuroses, bursae and tendon sheaths.",
      "Explain the structural factors that determine joint stability, contrasting the shoulder and hip."
    ],
    assessment: [
      { type: "mcq", q: "A tooth held in its bony socket is united by which type of fibrous joint?", options: ["Suture", "Syndesmosis", "Gomphosis", "Symphysis"], answer: 2, rationale: "A gomphosis is a peg-in-socket fibrous joint, as with a tooth in the alveolus." },
      { type: "mcq", q: "All synovial joints are functionally classified as:", options: ["Synarthroses", "Amphiarthroses", "Diarthroses", "Synchondroses"], answer: 2, rationale: "Synovial joints are diarthroses — freely movable." },
      { type: "mcq", q: "The feature that structurally defines a synovial joint and no other is the presence of a:", options: ["Joint (synovial) cavity", "Fibrous capsule", "Ligament", "Cartilage"], answer: 0, rationale: "A fluid-filled joint cavity is the defining feature of a synovial joint." },
      { type: "mcq", q: "The freely mobile shoulder is easily dislocated mainly because its socket (glenoid) is:", options: ["Deep and fitting", "Shallow", "Fused", "Fibrous"], answer: 1, rationale: "The shallow glenoid favours mobility at the expense of stability." },
      { type: "mcq", q: "Pronation and supination of the forearm occur at a ____ joint:", options: ["Hinge", "Saddle", "Pivot", "Plane"], answer: 2, rationale: "The proximal radioulnar joint is a pivot allowing rotation (pronation/supination)." },
      { type: "mcq", q: "A structure that connects muscle to bone and transmits the pull of contraction is a:", options: ["Ligament", "Bursa", "Tendon", "Meniscus"], answer: 2, rationale: "Tendons join muscle to bone; ligaments join bone to bone." },
      { type: "mcq", q: "The deep, stable acetabulum of the hip is deepened further by a rim of fibrocartilage called the:", options: ["Meniscus", "Labrum", "Bursa", "Synovium"], answer: 1, rationale: "The acetabular labrum deepens the socket, adding to hip stability." },
      { type: "mcq", q: "In rheumatoid arthritis the structure primarily inflamed is the:", options: ["Articular cartilage first", "Bone marrow", "Synovial membrane", "Ligament only"], answer: 2, rationale: "Rheumatoid arthritis is a synovial inflammation (synovitis) that then destroys the joint." },
      { type: "mcq", q: "The thumb can be brought to touch the fingertips (opposition) because its carpometacarpal joint is a:", options: ["Hinge", "Pivot", "Plane joint", "Saddle joint"], answer: 3, rationale: "The saddle joint at the thumb base permits opposition." },
      { type: "mcq", q: "A fluid-filled sac that cushions a tendon as it passes over bone is a:", options: ["Meniscus", "Bursa", "Lacuna", "Osteon"], answer: 1, rationale: "Bursae reduce friction between moving structures near joints." }
      , { type: "fill", q: "The fibrocartilage discs that cushion and stabilize the knee joint are the ____.", accept: ["menisci", "meniscus"], rationale: "The menisci are fibrocartilage pads within the knee." }
      , { type: "fill", q: "The cartilage capping the bone ends within a synovial joint is ____ (hyaline) cartilage.", accept: ["articular", "hyaline"], rationale: "Articular (hyaline) cartilage covers the articulating bone surfaces." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "ana-06-muscular",
    unit: "Unit 2 · Musculoskeletal System (Structure)",
    title: "Structure of the Muscular System",
    readMinutes: 26,
    summary: "The three types of muscle, the connective-tissue and microscopic structure of skeletal muscle, the sarcomere and myofilaments, the neuromuscular junction, muscle attachments and naming, muscle actions and major muscle groups.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and types of muscle", p: "Muscle tissue makes up about 40% of body mass and is specialized for contraction, converting chemical energy into mechanical work. Its properties are excitability, contractility, extensibility and elasticity. The three structurally distinct types are skeletal muscle (striated, voluntary, attached mainly to bones), cardiac muscle (striated, involuntary, in the heart wall) and smooth muscle (non-striated, involuntary, in the walls of hollow organs and vessels). This topic emphasizes structure; the mechanism of contraction belongs to the Physiology paper." },
      { h: "Connective-tissue organization of skeletal muscle", p: "A skeletal muscle is a discrete organ. It is wrapped externally by the epimysium; within it, bundles of muscle fibres called fascicles are surrounded by perimysium; and each individual muscle fibre (cell) is surrounded by delicate endomysium. These connective-tissue sheaths are continuous with one another and merge beyond the muscle to form the tendon (or aponeurosis) that transmits the pull of contraction to bone. Blood vessels and nerves reach each fibre by travelling within these sheaths.", figure: {
        caption: "Figure 6.1 — Connective-tissue sheaths of skeletal muscle (whole muscle to fibre).",
        svg: '<svg viewBox="0 0 480 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Muscle connective tissue"><defs><marker id="anaAr6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="45" width="120" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="70" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Muscle</text><text x="70" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">epimysium</text><line x1="130" y1="65" x2="158" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr6)"/><rect x="160" y="45" width="120" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="220" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Fascicle</text><text x="220" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">perimysium</text><line x1="280" y1="65" x2="308" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr6)"/><rect x="310" y="45" width="130" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="375" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Fibre (cell)</text><text x="375" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">endomysium</text></svg>'
      } },
      { h: "Microscopic structure of a muscle fibre", p: "A skeletal muscle fibre is a very long, cylindrical, multinucleate cell (the nuclei lie just beneath the membrane) formed by fusion of embryonic myoblasts. It is bounded by the sarcolemma (plasma membrane), filled with sarcoplasm, and packed with hundreds to thousands of rod-like myofibrils. The sarcoplasmic reticulum (specialized smooth ER) stores and releases calcium, and transverse (T) tubules — invaginations of the sarcolemma — carry the electrical excitation deep into the fibre so all myofibrils contract together. Numerous mitochondria and stored myoglobin (an oxygen store) support the fibre's high energy demand." },
      { h: "The sarcomere and myofilaments", p: "Each myofibril is a chain of sarcomeres, the contractile units, arranged end to end between adjacent Z discs. A sarcomere contains overlapping thick filaments (myosin, forming the dark A band) and thin filaments (actin, associated with the regulatory proteins troponin and tropomyosin, forming the light I band and anchored at the Z disc). The regular overlap of thick and thin filaments produces the striated (banded) appearance. During contraction the thin filaments slide over the thick filaments (the sliding-filament model), so the sarcomere and hence the whole fibre shortens." },
      { h: "The neuromuscular junction (structure)", p: "Each skeletal muscle fibre is stimulated at a neuromuscular junction (motor end plate), the synapse between the axon terminal of a somatic motor neuron and the sarcolemma. The axon terminal contains synaptic vesicles of the neurotransmitter acetylcholine; a synaptic cleft separates it from the highly folded motor end plate of the sarcolemma, which bears acetylcholine receptors. A motor neuron and all the fibres it supplies form a motor unit. This structure is the target of muscle relaxants used in anaesthesia and is disrupted in myasthenia gravis." },
      { h: "Cardiac and smooth muscle structure (contrast)", list: [
        "Cardiac — striated, short branched cells with usually one central nucleus, joined end-to-end by intercalated discs (containing desmosomes for adhesion and gap junctions for electrical coupling) so the myocardium contracts as a coordinated unit; rich in mitochondria; self-excitable.",
        "Smooth — non-striated, spindle-shaped cells with a single central nucleus; actin and myosin are present but not arranged in ordered sarcomeres; cells are arranged in sheets in the walls of vessels, gut, airways, bladder and uterus and contract slowly and sustainedly."
      ] },
      { h: "Muscle attachments and lever action", p: "A muscle usually attaches to bone at two points: the origin (the more fixed, usually proximal attachment) and the insertion (the more movable, usually distal attachment); when the muscle contracts, the insertion is pulled toward the origin. Muscles act across joints as levers. In a given movement muscles cooperate: the prime mover (agonist) produces the action, the antagonist opposes/relaxes, synergists assist and stabilize, and fixators steady the origin." },
      { h: "Naming of muscles", p: "Muscles are named systematically by one or more criteria: shape (deltoid, trapezius), relative size (gluteus maximus, minimus), location (tibialis anterior, temporalis), direction of fibres (rectus = straight, oblique, transversus), number of heads/origins (biceps = two, triceps = three, quadriceps = four), points of attachment (sternocleidomastoid), and action (flexor, extensor, adductor, levator). Recognizing these clues makes muscle names largely self-explanatory." },
      { h: "Major muscle groups (survey)", list: [
        "Head and neck — muscles of facial expression, muscles of mastication (masseter, temporalis, pterygoids), and the sternocleidomastoid.",
        "Trunk — pectoralis major, the intercostals and diaphragm (respiration), the abdominal wall (rectus abdominis, external/internal oblique, transversus), and the erector spinae group of the back.",
        "Upper limb — deltoid, biceps and triceps brachii, and the forearm flexor/extensor groups.",
        "Lower limb — the gluteal muscles, quadriceps femoris and hamstrings of the thigh, and gastrocnemius/soleus of the calf."
      ] },
      { h: "Normal values / key figures", list: [
        "Muscle as a proportion of body mass: about 40%.",
        "Number of named skeletal muscles: roughly 600.",
        "Neurotransmitter at the neuromuscular junction: acetylcholine.",
        "Preferred adult IM injection sites: ventrogluteal, vastus lateralis, deltoid.",
        "Thick filament = myosin; thin filament = actin (+ troponin, tropomyosin)."
      ] },
      { h: "Clinical relevance", p: "Muscle structure guides safe intramuscular injection: the ventrogluteal region, vastus lateralis and deltoid are chosen for adequate muscle bulk and distance from major nerves and vessels (the deltoid takes small volumes; the vastus lateralis is preferred in infants). Knowledge of muscle groups underlies positioning, prevention of contractures and pressure injury, gait and strength assessment, and rehabilitation. Disuse causes muscle atrophy; the loss of muscle protein occurs in muscular dystrophy; and neuromuscular-junction disease (myasthenia gravis) or blockade produces weakness." },
      { h: "Key terms", list: [
        "Sarcolemma — the plasma membrane of a muscle fibre.",
        "Sarcomere — the contractile unit between two Z discs.",
        "Myofibril — a contractile thread (chain of sarcomeres) within a muscle fibre.",
        "Origin / insertion — the fixed / movable attachment of a muscle.",
        "Motor unit — a motor neuron and all the muscle fibres it innervates."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Name the three types of muscle and compare them structurally.",
      "Describe the connective-tissue organization of a skeletal muscle from whole muscle to fibre.",
      "Describe the microscopic structure of a skeletal muscle fibre and the sarcomere.",
      "Describe the structure of the neuromuscular junction and define a motor unit.",
      "Explain origin and insertion and the criteria used to name muscles; relate muscle bulk to IM injection sites."
    ],
    assessment: [
      { type: "mcq", q: "During an IM injection the needle passes through the connective-tissue coat surrounding the whole muscle, the:", options: ["Endomysium", "Perimysium", "Epimysium", "Sarcolemma"], answer: 2, rationale: "Epimysium wraps the whole muscle; perimysium a fascicle; endomysium a fibre." },
      { type: "mcq", q: "The contractile unit lying between two Z discs is the:", options: ["Sarcomere", "Sarcolemma", "Fascicle", "Motor unit"], answer: 0, rationale: "The sarcomere is the contractile unit of the myofibril." },
      { type: "mcq", q: "The thick filaments that occupy the A band of the sarcomere are composed of:", options: ["Actin", "Myosin", "Troponin", "Collagen"], answer: 1, rationale: "Thick filaments are myosin; thin filaments are actin." },
      { type: "mcq", q: "The neurotransmitter released at the neuromuscular junction to trigger contraction is:", options: ["Noradrenaline", "Acetylcholine", "Dopamine", "GABA"], answer: 1, rationale: "Somatic motor neurons release acetylcholine at the motor end plate." },
      { type: "mcq", q: "Cardiac muscle contracts as a coordinated unit because its cells are joined by intercalated discs containing:", options: ["Only desmosomes", "Gap junctions", "Tendons", "Basement membranes"], answer: 1, rationale: "Gap junctions in intercalated discs electrically couple cardiac cells." },
      { type: "mcq", q: "In flexing the elbow, biceps brachii is the prime mover; the muscle that must relax as the antagonist is:", options: ["Brachialis", "Triceps brachii", "Deltoid", "Pronator teres"], answer: 1, rationale: "Triceps brachii (an extensor) is the antagonist to elbow flexion." },
      { type: "mcq", q: "Calcium needed to initiate contraction is stored within the muscle fibre's:", options: ["Sarcoplasmic reticulum", "Golgi apparatus", "Nucleus", "Mitochondria"], answer: 0, rationale: "The sarcoplasmic reticulum stores and releases calcium." },
      { type: "mcq", q: "The muscle name 'triceps brachii' tells you the muscle has:", options: ["Three points of insertion", "Three heads of origin", "A triangular shape", "Three actions"], answer: 1, rationale: "'Triceps' means three heads of origin." },
      { type: "mcq", q: "The preferred IM injection site in an infant, chosen for muscle bulk and safety, is the:", options: ["Deltoid", "Vastus lateralis", "Gastrocnemius", "Rectus abdominis"], answer: 1, rationale: "The vastus lateralis is preferred in infants because of its bulk and lack of major nerves." },
      { type: "mcq", q: "Prolonged disuse of a limb in a cast typically leads to muscle:", options: ["Hypertrophy", "Atrophy", "Metaplasia", "Striation loss due to dystrophy"], answer: 1, rationale: "Disuse reduces muscle fibre size, causing atrophy." }
      , { type: "fill", q: "Skeletal muscle appears striped because of the ordered overlap of actin and ____ filaments.", accept: ["myosin"], rationale: "Overlapping actin and myosin filaments create the striated pattern." }
      , { type: "fill", q: "A motor neuron together with all the muscle fibres it supplies is called a motor ____.", accept: ["unit"], rationale: "A motor unit is one motor neuron and the fibres it innervates." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "ana-07-cvs",
    unit: "Unit 3 · Cardiovascular System (Structure)",
    title: "Structure of the Heart & Blood Vessels",
    readMinutes: 27,
    summary: "Position and coverings of the heart, its chambers, valves and wall layers, the fibrous skeleton, the coronary circulation, the conducting system, and the structure of arteries, veins and capillaries with the main circuits.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Position and coverings", p: "The heart is a hollow muscular organ about the size of a closed fist (~250–350 g), lying obliquely in the mediastinum between the lungs, resting on the diaphragm, with about two-thirds of its mass to the left of the midline. Its broad base faces up and to the right (where the great vessels enter) and its apex points down and to the left, reaching roughly the 5th intercostal space in the midclavicular line — the site of the palpable apex beat. It is enclosed in the pericardium: a tough outer fibrous pericardium (anchoring the heart and preventing overfilling) and an inner serous pericardium with parietal and visceral (epicardial) layers, between which pericardial fluid reduces friction." },
      { h: "Layers of the heart wall", list: [
        "Epicardium — the visceral layer of serous pericardium; the smooth outer surface, containing coronary vessels and fat.",
        "Myocardium — the thick middle layer of cardiac muscle arranged in spiralling bundles; performs the pumping and is thickest in the left ventricle.",
        "Endocardium — the smooth inner endothelial lining, continuous with the lining of the great vessels and covering the valves; its smoothness reduces the risk of clotting."
      ] },
      { h: "Chambers and great vessels", p: "The heart has four chambers: two thin-walled atria (receiving chambers) superiorly and two thicker-walled ventricles (pumping chambers) inferiorly, separated by the interatrial and interventricular septa. The right heart handles deoxygenated blood: venae cavae → right atrium → right ventricle → pulmonary trunk → lungs. The left heart handles oxygenated blood: pulmonary veins → left atrium → left ventricle → aorta → body. The left ventricular wall is roughly three times thicker than the right, matching the far higher systemic pressure it must generate.", figure: {
        caption: "Figure 7.1 — Blood flow through the four chambers (structural pathway).",
        svg: '<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heart chambers flow"><defs><marker id="anaAr7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="20" width="100" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="60" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Right atrium</text><rect x="10" y="90" width="100" height="40" rx="8" fill="#DCFCE7" stroke="#0F4C3A"/><text x="60" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Right ventricle</text><rect x="390" y="20" width="100" height="40" rx="8" fill="#F0FDF4" stroke="#0F4C3A"/><text x="440" y="45" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Left atrium</text><rect x="390" y="90" width="100" height="40" rx="8" fill="#F0FDF4" stroke="#0F4C3A"/><text x="440" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Left ventricle</text><line x1="60" y1="60" x2="60" y2="88" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7)"/><line x1="110" y1="110" x2="200" y2="110" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7)"/><text x="150" y="102" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">lungs</text><line x1="300" y1="40" x2="388" y2="40" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7)"/><line x1="440" y1="60" x2="440" y2="88" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7)"/></svg>'
      } },
      { h: "Valves and the fibrous skeleton", p: "Four valves ensure one-way flow. The atrioventricular (AV) valves lie between atria and ventricles: the tricuspid (three cusps) on the right and the bicuspid/mitral (two cusps) on the left; their cusps are tethered by chordae tendineae to papillary muscles projecting from the ventricular walls, which contract to prevent the cusps prolapsing during systole. The semilunar valves guard the arterial outflows: the pulmonary valve (right ventricle → pulmonary trunk) and the aortic valve (left ventricle → aorta), each with three pocket-like cusps. A dense fibrous skeleton of connective-tissue rings anchors all four valves, provides muscle attachment and electrically insulates the atria from the ventricles." },
      { h: "Coronary circulation", p: "The myocardium has its own blood supply, the coronary circulation. The right and left coronary arteries arise from the aortic sinuses just above the aortic valve. The left coronary artery divides into the anterior interventricular (left anterior descending, LAD) branch — supplying much of the left ventricle and the interventricular septum — and the circumflex branch. The right coronary artery supplies the right chambers and, in most people, the inferior wall and the SA/AV nodes. Cardiac venous blood drains mainly into the coronary sinus, which empties into the right atrium. This anatomy determines which region of myocardium dies in a myocardial infarction and which ECG leads change." },
      { h: "Conducting system", p: "Specialized (non-contractile) cardiac muscle forms the conducting system that initiates and coordinates the heartbeat: the sinoatrial (SA) node — the pacemaker, in the wall of the right atrium near the superior vena cava; the atrioventricular (AV) node, at the base of the interatrial septum, which delays the impulse; the AV bundle (of His), the only electrical link across the insulating fibrous skeleton; the right and left bundle branches running down the interventricular septum; and the Purkinje fibres spreading through the ventricular walls. This structure produces the coordinated atria-then-ventricles contraction recorded on the ECG.", figure: {
        caption: "Figure 7.2 — Order of impulse spread through the conducting system.",
        svg: '<svg viewBox="0 0 500 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conducting system"><defs><marker id="anaAr7b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="4" y="20" width="70" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="39" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">SA node</text><rect x="94" y="20" width="70" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="129" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">AV node</text><rect x="184" y="20" width="90" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="229" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Bundle of His</text><rect x="294" y="20" width="100" height="34" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="344" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Bundle branches</text><rect x="414" y="20" width="82" height="34" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="455" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Purkinje</text><line x1="74" y1="37" x2="92" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7b)"/><line x1="164" y1="37" x2="182" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7b)"/><line x1="274" y1="37" x2="292" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7b)"/><line x1="394" y1="37" x2="412" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr7b)"/></svg>'
      } },
      { h: "General structure of blood vessels", p: "The walls of arteries and veins have three concentric coats (tunics): the tunica intima (a smooth inner endothelium on a basement membrane, minimizing resistance and clotting); the tunica media (the middle coat of smooth muscle and elastic fibres, controlling vessel diameter); and the tunica externa/adventitia (the outer connective-tissue coat that anchors the vessel and carries its own tiny vessels, the vasa vasorum). Capillaries have only a tunica intima." },
      { h: "Arteries, veins and capillaries compared", list: [
        "Arteries — carry blood away from the heart; a thick, muscular and elastic tunica media resists and smooths the high pulsatile pressure; large elastic arteries (aorta) recoil, muscular arteries distribute, and arterioles regulate flow.",
        "Veins — return blood to the heart; thinner walls, larger lumen, lower pressure; many (especially in the limbs) contain valves that, with skeletal-muscle pumping, prevent backflow.",
        "Capillaries — a single endothelial layer only; the site of exchange, thin enough for diffusion of gases, nutrients and wastes; classified as continuous, fenestrated or sinusoidal."
      ] },
      { h: "The circulatory circuits", p: "The cardiovascular system is a double circuit. The pulmonary circuit carries deoxygenated blood from the right ventricle to the lungs and returns oxygenated blood to the left atrium. The systemic circuit carries oxygenated blood from the left ventricle to all body tissues and returns deoxygenated blood to the right atrium. Special systemic subsystems include the coronary circulation (to the heart itself) and the hepatic portal system (carrying nutrient-rich blood from the gut to the liver). The two circuits are structurally in series, so the same volume passes through each." },
      { h: "Normal values / key figures", list: [
        "Heart weight: about 250–350 g; apex at the 5th intercostal space, midclavicular line.",
        "Left ventricular wall roughly three times thicker than the right.",
        "AV valves: tricuspid (right), mitral/bicuspid (left); semilunar: pulmonary and aortic.",
        "Impulse order: SA node → AV node → bundle of His → bundle branches → Purkinje fibres.",
        "Vessel coats (inner to outer): tunica intima, media, externa; capillaries have intima only."
      ] },
      { h: "Clinical relevance", p: "Chamber and valve anatomy explains murmurs and the auscultation areas nurses use, and the apex position guides finding the apex beat and mitral area. Coronary anatomy maps the site of infarction to the affected ECG leads and guides stenting. Vein structure and valves underlie varicose veins and the choice of superficial veins for cannulation and venepuncture; arterial wall structure explains atherosclerosis, aneurysm and the palpable pulse points (radial, brachial, carotid, femoral). Pericardial anatomy underlies pericarditis and tamponade." },
      { h: "Key terms", list: [
        "Myocardium — the cardiac-muscle layer of the heart wall.",
        "Chordae tendineae — cords tethering the AV valve cusps to papillary muscles.",
        "Coronary sinus — the main venous drainage channel of the heart.",
        "SA node — the heart's natural pacemaker.",
        "Tunica media — the muscular/elastic middle coat of a blood vessel."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the position, coverings and three wall layers of the heart.",
      "Name the four chambers and four valves and trace blood flow through the heart.",
      "Describe the coronary circulation and explain its importance in myocardial infarction.",
      "Outline the components of the cardiac conducting system in order.",
      "Compare the structure of arteries, veins and capillaries and relate structure to function."
    ],
    assessment: [
      { type: "mcq", q: "The left ventricular wall is much thicker than the right ventricular wall because the left ventricle:", options: ["Holds more blood", "Pumps against higher systemic pressure", "Contains the SA node", "Receives the coronary arteries"], answer: 1, rationale: "The left ventricle generates high systemic pressure, requiring a thicker myocardium." },
      { type: "mcq", q: "During ventricular contraction the mitral valve cusps are prevented from prolapsing into the atrium by the:", options: ["Fibrous skeleton", "Chordae tendineae and papillary muscles", "Semilunar cusps", "Coronary sinus"], answer: 1, rationale: "Papillary muscles pulling on chordae tendineae hold the AV cusps closed." },
      { type: "mcq", q: "A patient has an inferior-wall myocardial infarction. The artery most commonly responsible is the:", options: ["Left anterior descending", "Circumflex", "Right coronary artery", "Coronary sinus"], answer: 2, rationale: "In most people the right coronary artery supplies the inferior wall of the heart." },
      { type: "mcq", q: "The natural pacemaker that normally initiates each heartbeat is the:", options: ["AV node", "SA node", "Bundle of His", "Purkinje fibres"], answer: 1, rationale: "The SA node in the right atrium sets the pace of the heart." },
      { type: "mcq", q: "Oxygenated blood returns from the lungs to the heart via the:", options: ["Superior vena cava", "Pulmonary artery", "Pulmonary veins", "Coronary sinus"], answer: 2, rationale: "Pulmonary veins carry oxygenated blood from the lungs to the left atrium." },
      { type: "mcq", q: "A nurse selects a superficial forearm vein for cannulation; the feature of veins that makes them suitable and prevents backflow is the presence of:", options: ["A thick tunica media", "Valves", "Vasa vasorum only", "Fenestrations"], answer: 1, rationale: "Limb veins contain valves that, with the muscle pump, prevent backflow." },
      { type: "mcq", q: "Exchange of gases and nutrients between blood and tissues occurs across the:", options: ["Artery wall", "Arteriole wall", "Capillary wall (single endothelial layer)", "Vein wall"], answer: 2, rationale: "Capillaries have only an endothelial layer thin enough for diffusion." },
      { type: "mcq", q: "The coronary arteries that supply the myocardium arise from the:", options: ["Pulmonary trunk", "Aortic sinuses just above the aortic valve", "Right atrium", "Coronary sinus"], answer: 1, rationale: "The coronary arteries originate at the aortic sinuses above the aortic valve." },
      { type: "mcq", q: "Blood in the pulmonary circuit leaves the heart from the:", options: ["Left ventricle", "Right ventricle", "Left atrium", "Right atrium"], answer: 1, rationale: "The right ventricle ejects blood into the pulmonary trunk toward the lungs." },
      { type: "mcq", q: "From lumen outward, the three coats of a typical blood vessel are:", options: ["Media, intima, externa", "Intima, media, externa", "Externa, media, intima", "Endocardium, myocardium, epicardium"], answer: 1, rationale: "The order from the lumen is tunica intima, tunica media, tunica externa." }
      , { type: "fill", q: "The main venous channel that drains the heart's own blood into the right atrium is the coronary ____.", accept: ["sinus"], rationale: "The coronary sinus returns cardiac venous blood to the right atrium." }
      , { type: "fill", q: "The right atrioventricular valve, which has three cusps, is the ____ valve.", accept: ["tricuspid"], rationale: "The tricuspid valve is the right AV valve." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "ana-08-respiratory",
    unit: "Unit 4 · Visceral Systems (Structure)",
    title: "Structure of the Respiratory System",
    readMinutes: 26,
    summary: "The upper and lower respiratory tracts, the conducting and respiratory zones, the structure of the nose, pharynx, larynx, trachea and bronchial tree, the lungs, pleura, alveoli and the respiratory membrane.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and divisions", p: "The respiratory system is divided functionally into a conducting zone (from the nose to the terminal bronchioles) that warms, moistens, filters and channels air but takes no part in gas exchange, and a respiratory zone (respiratory bronchioles, alveolar ducts and alveoli) where gas exchange occurs. Anatomically it is split into an upper respiratory tract (nose, pharynx and larynx) and a lower respiratory tract (trachea, bronchi and lungs). Its structures are lined chiefly by ciliated pseudostratified columnar (respiratory) epithelium with mucus-secreting goblet cells." },
      { h: "Nose and paranasal sinuses", p: "The external nose and internal nasal cavity are lined by respiratory epithelium over a rich vascular bed. The nasal septum divides the cavity, and three curved conchae (turbinates) on each lateral wall increase surface area, so that inspired air is warmed and humidified while hairs (vibrissae) and mucus trap particles. The olfactory epithelium in the roof carries the receptors for smell. Four pairs of air-filled paranasal sinuses (frontal, maxillary, ethmoid, sphenoid) lie in the surrounding bones, lighten the skull, add resonance to the voice and drain into the nasal cavity." },
      { h: "Pharynx", p: "The pharynx (throat) is a muscular tube extending from the base of the skull to the level of the larynx and oesophagus, in three parts: the nasopharynx (behind the nose; air only; contains the pharyngeal tonsil/adenoid and the openings of the auditory/Eustachian tubes); the oropharynx (behind the mouth; shared by air and food; contains the palatine and lingual tonsils); and the laryngopharynx (opening into both the larynx and the oesophagus). It is a crossing point of the respiratory and digestive tracts." },
      { h: "Larynx", p: "The larynx (voice box) connects the laryngopharynx to the trachea and has three functions: an open airway, a switching mechanism to route air and food correctly, and voice production. Its framework is nine cartilages, including the large shield-like thyroid cartilage (laryngeal prominence/Adam's apple), the ring-like cricoid cartilage, and the leaf-shaped epiglottis, which folds down to close the laryngeal inlet during swallowing so food enters the oesophagus. The vocal folds (true cords) stretched across the lumen vibrate to produce sound, the gap between them being the glottis." },
      { h: "Trachea and bronchial tree", p: "The trachea (windpipe) is a tube about 10–12 cm long and 2–2.5 cm wide, held permanently open by 16–20 C-shaped rings of hyaline cartilage (incomplete posteriorly, where the trachealis muscle and the oesophagus lie). It is lined by ciliated respiratory epithelium that, with goblet-cell mucus, forms the mucociliary escalator sweeping trapped debris upward. The trachea bifurcates at the carina into the right and left main (primary) bronchi; the right is wider, shorter and more vertical, so inhaled foreign bodies lodge there more often. Bronchi branch repeatedly into secondary (lobar), tertiary (segmental) bronchi and then bronchioles; as the airways narrow, cartilage disappears and smooth muscle becomes dominant.", figure: {
        caption: "Figure 8.1 — Branching of the airway (conducting to respiratory zone).",
        svg: '<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Airway branching"><defs><marker id="anaAr8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="50" width="80" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="50" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Trachea</text><rect x="110" y="50" width="80" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="150" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Bronchi</text><rect x="210" y="50" width="90" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="255" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Bronchioles</text><rect x="320" y="50" width="80" height="36" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="360" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Alveolar</text><rect x="420" y="50" width="70" height="36" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="455" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Alveoli</text><line x1="90" y1="68" x2="108" y2="68" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8)"/><line x1="190" y1="68" x2="208" y2="68" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8)"/><line x1="300" y1="68" x2="318" y2="68" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8)"/><line x1="400" y1="68" x2="418" y2="68" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8)"/></svg>'
      } },
      { h: "The lungs", p: "The two lungs are light, spongy, elastic organs occupying most of the thoracic cavity, each with an apex above the clavicle and a concave base on the diaphragm. The right lung has three lobes (superior, middle, inferior) separated by oblique and horizontal fissures; the left lung has two lobes (superior, inferior) and a cardiac notch that accommodates the heart. The hilum (root) on the medial surface is where the main bronchus, pulmonary vessels, nerves and lymphatics enter and leave. Each lobe is divided into bronchopulmonary segments, each supplied by its own segmental bronchus and artery — the surgical units for resection." },
      { h: "Pleura", p: "Each lung is enclosed by a serous membrane, the pleura: the visceral pleura adheres closely to the lung surface (dipping into the fissures), and the parietal pleura lines the thoracic wall, diaphragm and mediastinum; the two are continuous at the hilum. Between them the pleural cavity contains only a thin film of pleural fluid, which lubricates and, by surface tension, holds the lung expanded against the chest wall. If air (pneumothorax) or fluid (effusion/haemothorax) enters this space the seal is broken and the elastic lung recoils and collapses." },
      { h: "Alveoli and the respiratory membrane", p: "Alveoli are the microscopic, cup-shaped air sacs where gas exchange occurs — around 300 million in the two lungs, giving a huge surface area (roughly 70 m2). The alveolar wall contains type I pneumocytes (extremely thin squamous cells across which gases diffuse), type II pneumocytes (cuboidal cells that secrete pulmonary surfactant, a lipoprotein that lowers surface tension and stops the alveoli collapsing), and alveolar macrophages (dust cells) that remove debris. Gas crosses the respiratory (blood–air) membrane — the fused alveolar epithelium, its basement membrane and the capillary endothelium — which is only about 0.5 µm thick.", figure: {
        caption: "Figure 8.2 — Layers of the respiratory (blood–air) membrane crossed by gases.",
        svg: '<svg viewBox="0 0 480 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Respiratory membrane"><defs><marker id="anaAr8b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="8" y="20" width="120" height="34" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="68" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Alveolar wall</text><rect x="150" y="20" width="150" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="225" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Fused basement membranes</text><rect x="322" y="20" width="150" height="34" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="397" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Capillary endothelium</text><line x1="128" y1="37" x2="148" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8b)"/><line x1="300" y1="37" x2="320" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr8b)"/></svg>'
      } },
      { h: "Epithelial lining and defence", p: "The lining of the respiratory tract changes along its length to suit function. Most of the conducting airway (nose to bronchi) is lined by ciliated pseudostratified columnar epithelium with mucus-secreting goblet cells; the mucus traps particles and microbes and the cilia beat them upward — the mucociliary escalator — to the throat to be swallowed. As bronchioles narrow, the epithelium becomes simple columnar then cuboidal and cilia decrease, while the alveoli are lined by very thin simple squamous epithelium (type I pneumocytes) for gas exchange. Alveolar macrophages provide a final line of defence within the air sacs." },
      { h: "Normal values / key figures", list: [
        "Trachea: about 10–12 cm long, 2–2.5 cm wide; 16–20 C-shaped cartilage rings.",
        "Lobes: right lung 3, left lung 2.",
        "Number of alveoli: about 300 million; total surface area roughly 70 m2.",
        "Respiratory-membrane thickness: about 0.5 µm.",
        "Right main bronchus: wider, shorter and more vertical than the left."
      ] },
      { h: "Clinical relevance", p: "Airway anatomy guides suctioning, oral versus nasal airways and endotracheal intubation, and explains why aspirated objects usually enter the right bronchus. The mucociliary escalator explains impaired clearance in smokers and the value of humidified oxygen. Pleural anatomy underlies chest-drain insertion for pneumothorax or effusion; bronchopulmonary-segment anatomy guides postural drainage and physiotherapy positioning. Surfactant deficiency in the premature neonate causes respiratory distress syndrome; loss of alveolar wall (emphysema) reduces the exchange surface." },
      { h: "Key terms", list: [
        "Carina — the ridge at which the trachea bifurcates into the main bronchi.",
        "Hilum (root) — where bronchi, vessels and nerves enter and leave the lung.",
        "Surfactant — lipoprotein from type II pneumocytes that lowers alveolar surface tension.",
        "Respiratory (blood–air) membrane — the thin barrier across which gases diffuse.",
        "Pleural cavity — the potential space between the visceral and parietal pleura."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Distinguish the conducting and respiratory zones and the upper and lower respiratory tracts.",
      "Describe the structure of the larynx and its cartilages, including the epiglottis.",
      "Describe the structure of the trachea and the branching of the bronchial tree.",
      "Describe the lobes, hilum and bronchopulmonary segments of the lungs and the pleura.",
      "Describe the structure of an alveolus and the layers of the respiratory membrane."
    ],
    assessment: [
      { type: "mcq", q: "During swallowing, food is prevented from entering the airway by the:", options: ["Thyroid cartilage", "Cricoid cartilage", "Epiglottis", "Vocal folds"], answer: 2, rationale: "The epiglottis folds down to close the laryngeal inlet during swallowing." },
      { type: "mcq", q: "A toddler aspirates a peanut, which most commonly lodges in the right main bronchus because it is:", options: ["Longer and narrower", "Wider, shorter and more vertical", "More horizontal", "Made of muscle only"], answer: 1, rationale: "The right main bronchus is wider, shorter and more vertical, so aspirated objects enter it more readily." },
      { type: "mcq", q: "The C-shaped cartilage rings of the trachea are incomplete posteriorly to allow room for the:", options: ["Aorta", "Spinal cord", "Oesophagus", "Thymus"], answer: 2, rationale: "The gap posteriorly accommodates the oesophagus lying just behind the trachea." },
      { type: "mcq", q: "The right lung differs from the left in having:", options: ["Two lobes", "A cardiac notch", "Three lobes", "No hilum"], answer: 2, rationale: "The right lung has three lobes; the left has two and a cardiac notch." },
      { type: "mcq", q: "A premature baby develops respiratory distress from a deficiency of surfactant, which is normally secreted by:", options: ["Type I pneumocytes", "Type II pneumocytes", "Alveolar macrophages", "Goblet cells"], answer: 1, rationale: "Type II pneumocytes secrete surfactant, which lowers surface tension and prevents alveolar collapse." },
      { type: "mcq", q: "Air entering the pleural space (pneumothorax) causes lung collapse because it abolishes the:", options: ["Cartilage support", "Mucociliary escalator", "Surface tension holding the lung expanded", "Cardiac notch"], answer: 2, rationale: "Pleural fluid surface tension normally keeps the lung expanded; breaking the seal lets it recoil." },
      { type: "mcq", q: "Gases diffuse across the respiratory membrane, which is composed of the alveolar epithelium, fused basement membranes and the:", options: ["Pleura", "Capillary endothelium", "Bronchial cartilage", "Surfactant layer only"], answer: 1, rationale: "The blood–air membrane comprises alveolar epithelium, fused basement membranes and capillary endothelium." },
      { type: "mcq", q: "The ridge at the bifurcation of the trachea, a sensitive cough trigger, is the:", options: ["Hilum", "Glottis", "Vestibule", "Carina"], answer: 3, rationale: "The carina lies where the trachea divides into the two main bronchi." },
      { type: "mcq", q: "Inspired air is warmed and humidified largely by the increased surface provided by the nasal:", options: ["Vocal folds", "Conchae (turbinates)", "Sinuses only", "Adenoids"], answer: 1, rationale: "The conchae greatly increase mucosal surface to condition inspired air." },
      { type: "mcq", q: "The only part of the pharynx that conducts air but never food is the:", options: ["Oropharynx", "Laryngopharynx", "Nasopharynx", "Glottis"], answer: 2, rationale: "The nasopharynx carries air only; the lower parts are shared with food." }
      , { type: "fill", q: "The point on the medial surface of the lung where the bronchi and vessels enter is the ____.", accept: ["hilum", "hilus", "root"], rationale: "The hilum (root) is the entry/exit point of the lung." }
      , { type: "fill", q: "The thin fluid-filled space between the visceral and parietal pleura is the ____ cavity.", accept: ["pleural"], rationale: "The pleural cavity contains lubricating pleural fluid." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "ana-09-digestive",
    unit: "Unit 4 · Visceral Systems (Structure)",
    title: "Structure of the Digestive System",
    readMinutes: 27,
    summary: "The alimentary canal and accessory organs, the general four-layer gut wall and its nerve plexuses, and the structure of the mouth, teeth, salivary glands, oesophagus, stomach, small and large intestine, liver, gallbladder, pancreas and peritoneum.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and organization", p: "The digestive system consists of the alimentary (gastrointestinal, GI) canal — a continuous muscular tube from mouth to anus (mouth, pharynx, oesophagus, stomach, small intestine, large intestine, anal canal) — and the accessory digestive organs (teeth, tongue, salivary glands, liver, gallbladder, pancreas) that lie outside the tube and pour secretions into it via ducts. The whole tract is around 5–7 metres long in the relaxed cadaver (shorter in life)." },
      { h: "General structure of the gut wall", p: "From the oesophagus to the anal canal the wall has the same four concentric layers. The mucosa (innermost, facing the lumen) has a lining epithelium, a lamina propria of loose connective tissue, and a thin muscularis mucosae. The submucosa is dense connective tissue carrying larger blood and lymph vessels, glands and the submucosal (Meissner's) nerve plexus. The muscularis externa is usually an inner circular and an outer longitudinal layer of smooth muscle, with the myenteric (Auerbach's) nerve plexus between them, producing peristalsis. The outer layer is a serosa (visceral peritoneum) where the organ is intraperitoneal, or an adventitia where it is retroperitoneal.", figure: {
        caption: "Figure 9.1 — The four layers of the gastrointestinal wall (lumen outward).",
        svg: '<svg viewBox="0 0 480 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="GI wall layers"><defs><marker id="anaAr9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="45" width="100" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="60" y="69" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Mucosa</text><rect x="130" y="45" width="100" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="180" y="69" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Submucosa</text><rect x="250" y="45" width="110" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="305" y="63" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Muscularis</text><text x="305" y="78" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">externa</text><rect x="380" y="45" width="90" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="425" y="69" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Serosa</text><line x1="110" y1="65" x2="128" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr9)"/><line x1="230" y1="65" x2="248" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr9)"/><line x1="360" y1="65" x2="378" y2="65" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr9)"/></svg>'
      } },
      { h: "Mouth, tongue and teeth", p: "The oral (buccal) cavity is bounded by the lips, cheeks, hard and soft palate and tongue. The tongue is a muscular organ covered by mucosa bearing papillae, many of which carry taste buds, and it manipulates food and aids speech. Humans have two dentitions: 20 deciduous (milk) teeth and 32 permanent teeth (incisors, canines, premolars, molars). Each tooth has a crown (above the gum), neck and root(s), and is built of enamel (the hardest body tissue, covering the crown), dentine (bulk of the tooth), a central pulp cavity (vessels and nerves) and cementum anchoring the root in its socket." },
      { h: "Salivary glands", p: "Three pairs of major salivary glands secrete saliva into the mouth: the parotid glands (largest, in front of the ear, draining opposite the upper second molar), the submandibular glands (below the jaw), and the sublingual glands (under the tongue). Saliva moistens food, begins starch digestion and protects the mouth. Numerous minor salivary glands are scattered in the oral mucosa." },
      { h: "Pharynx and oesophagus", p: "The pharynx conveys the food bolus from the mouth to the oesophagus. The oesophagus is a collapsible muscular tube about 25 cm long that descends through the thorax behind the trachea, pierces the diaphragm and joins the stomach. Its upper third is skeletal muscle, the lower third smooth muscle, and the middle mixed. The lower oesophageal (cardiac) sphincter and the anatomy of the diaphragmatic hiatus normally prevent reflux of gastric contents." },
      { h: "Stomach", p: "The stomach is a J-shaped dilated organ in the upper left abdomen (epigastric, umbilical and left hypochondriac regions). Its regions are the cardia (around the oesophageal opening), the dome-shaped fundus, the large body, and the pylorus, which ends at the pyloric sphincter guarding the exit into the duodenum. The empty mucosa is thrown into folds called rugae that flatten as the stomach fills. Gastric glands in the mucosa contain parietal (oxyntic) cells (secreting hydrochloric acid and intrinsic factor), chief (zymogenic) cells (secreting pepsinogen) and mucous cells; a third, oblique muscle layer in the wall aids churning." },
      { h: "Small and large intestine", list: [
        "Small intestine (about 6 m) — duodenum (C-shaped, receives bile and pancreatic juice at the hepatopancreatic ampulla), jejunum and ileum. Its wall is specialized for absorption with three levels of folding — circular folds (plicae), villi and microvilli (brush border) — that vastly increase surface area, and lacteals within villi absorb fat.",
        "Large intestine (about 1.5 m) — caecum (with the vermiform appendix), ascending, transverse, descending and sigmoid colon, rectum and anal canal. It has three distinctive features — teniae coli (longitudinal muscle bands), haustra (pouches) and epiploic appendages (fat tags) — abundant goblet cells but no villi, and it reabsorbs water and forms and stores faeces."
      ] },
      { h: "Liver and gallbladder", p: "The liver, the largest gland and second-largest organ, lies in the right upper quadrant under the diaphragm, with a large right and smaller left lobe. Its microscopic functional units are hexagonal lobules of plates of hepatocytes radiating around a central vein, with portal triads (branches of the hepatic artery, portal vein and a bile duct) at the corners; bile made by hepatocytes drains into tiny bile canaliculi flowing toward the ducts. The gallbladder, a pear-shaped sac on the liver's underside, stores and concentrates bile and releases it via the cystic and common bile ducts into the duodenum." },
      { h: "Pancreas", p: "The pancreas lies retroperitoneally across the posterior abdominal wall, with a head cradled by the duodenal C, a body and a tail reaching the spleen. It is a dual gland: the exocrine pancreas (the bulk) consists of acini of cells that secrete digestive enzymes into the pancreatic duct, which joins the bile duct at the ampulla; the endocrine pancreas is the scattered islets of Langerhans, which secrete insulin, glucagon and other hormones into the blood." },
      { h: "Peritoneum", p: "The peritoneum is the largest serous membrane, with a parietal layer lining the abdominal wall and a visceral layer covering the organs, enclosing the potential peritoneal cavity. Double folds of peritoneum form the mesenteries (which suspend the intestine and carry its vessels and nerves) and the greater and lesser omenta (fatty aprons; the greater omentum can wall off infection). Organs largely covered by peritoneum are intraperitoneal; those behind it (kidneys, most of the pancreas and duodenum, the ascending and descending colon) are retroperitoneal." },
      { h: "Normal values / key figures", list: [
        "Permanent teeth: 32; deciduous teeth: 20.",
        "Oesophagus length: about 25 cm.",
        "Small intestine: about 6 m; large intestine: about 1.5 m.",
        "Three pairs of major salivary glands: parotid, submandibular, sublingual.",
        "Gastric parietal cells secrete HCl and intrinsic factor; chief cells secrete pepsinogen."
      ] },
      { h: "Clinical relevance", p: "Gut structure explains disorders nurses manage: GORD (an incompetent lower oesophageal sphincter/hiatus hernia), peptic ulceration (parietal-cell acid eroding the mucosa), appendicitis, and the absorptive/nutritional consequences of bowel resection or coeliac villous atrophy. Liver-lobule and portal anatomy underlies jaundice and portal hypertension with varices; gallbladder and duct anatomy explains gallstones and obstructive jaundice. This anatomy guides NG-tube placement (oesophagus/stomach), stoma siting and care, and nutritional assessment." },
      { h: "Key terms", list: [
        "Rugae — folds of the empty stomach mucosa.",
        "Villi / microvilli — mucosal projections increasing intestinal absorptive surface.",
        "Hepatic lobule — the structural/functional unit of the liver.",
        "Sphincter — a muscular ring controlling passage (e.g. pyloric).",
        "Retroperitoneal — situated behind the peritoneum."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the four layers of the gastrointestinal wall and the two nerve plexuses.",
      "Describe the structure and regions of the stomach and its gastric-gland cell types.",
      "Compare the structural features of the small and large intestine.",
      "Describe the structure of the liver, including the lobule, portal triad and biliary passages.",
      "Explain the peritoneum, mesentery and omenta and distinguish intraperitoneal from retroperitoneal organs."
    ],
    assessment: [
      { type: "mcq", q: "A biopsy needle passes from the gut lumen outward. The correct order of the four layers it crosses is:", options: ["Serosa, muscularis, submucosa, mucosa", "Mucosa, submucosa, muscularis externa, serosa", "Submucosa, mucosa, serosa, muscularis", "Mucosa, muscularis, serosa, submucosa"], answer: 1, rationale: "From the lumen outward the order is mucosa, submucosa, muscularis externa, serosa." },
      { type: "mcq", q: "Peristalsis is generated mainly by the nerve plexus lying between the two muscle layers of the muscularis externa, the:", options: ["Submucosal (Meissner's) plexus", "Myenteric (Auerbach's) plexus", "Sympathetic chain", "Lamina propria"], answer: 1, rationale: "The myenteric (Auerbach's) plexus between the muscle layers controls gut motility." },
      { type: "mcq", q: "A patient with a peptic ulcer has excess acid produced by the gastric:", options: ["Chief cells", "Goblet cells", "Parietal cells", "Mucous neck cells"], answer: 2, rationale: "Parietal (oxyntic) cells secrete hydrochloric acid and intrinsic factor." },
      { type: "mcq", q: "Bile and pancreatic juice enter the small intestine at the:", options: ["Jejunum", "Ileum", "Duodenum", "Caecum"], answer: 2, rationale: "The duodenum receives bile and pancreatic juice via the hepatopancreatic ampulla." },
      { type: "mcq", q: "Which feature is characteristic of the large intestine but not the small intestine?", options: ["Villi", "Circular folds (plicae)", "Microvilli", "Teniae coli and haustra"], answer: 3, rationale: "Teniae coli and haustra distinguish the large intestine; it lacks villi." },
      { type: "mcq", q: "At the corner of a liver lobule, the portal triad consists of branches of the bile duct, the hepatic artery and the:", options: ["Central vein", "Hepatic portal vein", "Coronary sinus", "Cystic duct"], answer: 1, rationale: "The portal triad contains a bile duct, hepatic artery branch and hepatic portal vein branch." },
      { type: "mcq", q: "Bile is stored and concentrated between meals in the:", options: ["Pancreas", "Duodenum", "Gallbladder", "Spleen"], answer: 2, rationale: "The gallbladder stores and concentrates bile." },
      { type: "mcq", q: "A patient with diabetes has impaired function of pancreatic tissue that secretes hormones into the blood, the:", options: ["Acini", "Rugae", "Islets of Langerhans", "Villi"], answer: 2, rationale: "The islets of Langerhans are the endocrine (hormone-secreting) pancreatic tissue." },
      { type: "mcq", q: "Fat absorbed in the small intestine is taken up by lymphatic vessels within the villi called:", options: ["Rugae", "Lacteals", "Haustra", "Canaliculi"], answer: 1, rationale: "Lacteals are the central lymphatic vessels of villi that absorb dietary fat." },
      { type: "mcq", q: "The kidneys and most of the pancreas lie behind the peritoneum and are therefore described as:", options: ["Intraperitoneal", "Serosal", "Mesenteric", "Retroperitoneal"], answer: 3, rationale: "Retroperitoneal organs lie behind the peritoneum against the posterior wall." }
      , { type: "fill", q: "Finger-like mucosal projections that increase the absorptive surface of the small intestine are ____.", accept: ["villi", "villus"], rationale: "Villi (with microvilli) greatly enlarge the absorptive surface." }
      , { type: "fill", q: "The muscular ring controlling emptying of the stomach into the duodenum is the ____ sphincter.", accept: ["pyloric", "pylorus"], rationale: "The pyloric sphincter controls gastric emptying." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "ana-10-urinary",
    unit: "Unit 4 · Visceral Systems (Structure)",
    title: "Structure of the Urinary System",
    readMinutes: 26,
    summary: "The organs of the urinary system, the position, coverings, gross and internal structure of the kidney, the nephron and its blood supply, the juxtaglomerular apparatus, and the ureters, bladder and urethra.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The urinary (renal) system consists of two kidneys, two ureters, one urinary bladder and one urethra. The kidneys form urine and regulate the volume and composition of body fluids; the ureters convey urine to the bladder by peristalsis; the bladder stores it; and the urethra carries it out. This topic emphasizes structure; urine formation is covered in the Physiology paper." },
      { h: "Position and coverings of the kidney", p: "The kidneys are paired, bean-shaped, reddish-brown organs lying retroperitoneally against the posterior abdominal wall, one on each side of the vertebral column between about T12 and L3; the right kidney sits slightly lower than the left because the large right lobe of the liver lies above it. Each adult kidney is about 11 cm long, 6 cm wide and 3 cm thick. Three protective layers surround it (from within out): the tough fibrous renal capsule, a cushion of perirenal (adipose) fat, and the renal fascia anchoring it to the wall." },
      { h: "Gross internal structure of the kidney", p: "A coronal section shows an outer cortex and an inner medulla containing 8–18 cone-shaped renal pyramids; the striated pyramids point inward, their apices (renal papillae) projecting into cup-shaped minor calyces. Several minor calyces unite into 2–3 major calyces, which open into the funnel-shaped renal pelvis, the expanded upper end of the ureter. The medial concave border, the hilum, transmits the renal artery (entering), and the renal vein, ureter and nerves (leaving), opening into an internal space, the renal sinus.", figure: {
        caption: "Figure 10.1 — Internal regions of the kidney and flow of urine to the ureter.",
        svg: '<svg viewBox="0 0 480 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kidney regions"><defs><marker id="anaAr10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="50" width="80" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="50" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Cortex</text><rect x="110" y="50" width="80" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="150" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Medulla</text><rect x="210" y="50" width="80" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="250" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Calyces</text><rect x="310" y="50" width="80" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="350" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Pelvis</text><rect x="410" y="50" width="60" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="440" y="74" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Ureter</text><line x1="90" y1="70" x2="108" y2="70" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr10)"/><line x1="190" y1="70" x2="208" y2="70" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr10)"/><line x1="290" y1="70" x2="308" y2="70" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr10)"/><line x1="390" y1="70" x2="408" y2="70" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr10)"/></svg>'
      } },
      { h: "The nephron — structural unit", p: "Each kidney contains about one million nephrons, the microscopic structural and functional units that make urine. A nephron has two main parts. The renal corpuscle — a tuft of capillaries (the glomerulus) cupped within the double-walled glomerular (Bowman's) capsule, where filtration begins — lies in the cortex. The renal tubule leads from the capsule through the proximal convoluted tubule, the hairpin loop of Henle (descending and ascending limbs, dipping into the medulla), and the distal convoluted tubule, which empties into a collecting duct shared by many nephrons. Cortical nephrons have short loops; juxtamedullary nephrons have long loops that create the medullary concentration gradient." },
      { h: "Blood supply and the juxtaglomerular apparatus", p: "Blood reaches each glomerulus through an afferent arteriole and, unusually, leaves through an efferent arteriole rather than a venule — an arteriole-to-arteriole arrangement that maintains the high pressure needed for filtration. The efferent arteriole then breaks up into the peritubular capillaries (and, in juxtamedullary nephrons, the vasa recta) around the tubules. Where the distal convoluted tubule touches the afferent arteriole of its own corpuscle, the juxtaglomerular apparatus forms — the macula densa (tubule cells sensing filtrate) plus juxtaglomerular (granular) cells (secreting renin) — a structure central to the control of blood pressure and filtration." },
      { h: "Ureters", p: "The ureters are paired muscular tubes about 25–30 cm long that carry urine from the renal pelvis down the posterior abdominal wall to the bladder, propelling it by peristaltic waves of their smooth-muscle wall. The wall has three coats: a mucosa of transitional epithelium, a smooth-muscle layer, and a fibrous adventitia. Each ureter enters the bladder obliquely through its wall, an arrangement that acts as a valve compressed by bladder filling to prevent reflux of urine. Three normal constrictions — at the pelviureteric junction, the pelvic brim, and the bladder entry — are the common sites where kidney stones lodge." },
      { h: "Urinary bladder", p: "The bladder is a distensible muscular reservoir in the pelvis, lying behind the pubic symphysis (and, in the female, in front of the uterus and vagina). Its wall contains the detrusor, a three-layered smooth muscle, lined by transitional epithelium thrown into rugae that flatten as it fills (capacity roughly 400–600 mL). The trigone is a smooth triangular area on the posterior floor, bounded by the two ureteric orifices above and the internal urethral orifice below. Emptying is controlled by an involuntary internal urethral sphincter (smooth muscle) and a voluntary external urethral sphincter (skeletal muscle of the pelvic floor)." },
      { h: "Urethra", p: "The urethra conveys urine from the bladder to the exterior and differs markedly between the sexes. The female urethra is short (about 4 cm), purely urinary, and opens into the vestibule anterior to the vaginal orifice — its shortness and proximity to the anus predispose to ascending urinary infection. The male urethra is long (about 18–20 cm), passes through the prostate, the pelvic floor and the penis in three parts (prostatic, membranous and spongy/penile), and is shared by the urinary and reproductive systems." },
      { h: "Structure–function correlation", p: "Renal architecture matches its work. The million nephrons and the vast surface of their tubules give the kidney enormous filtering and reabsorbing capacity, so a person can lose one kidney or much nephron mass before failure appears. The cortex-versus-medulla organization, with long juxtamedullary loops of Henle dipping deep into the medulla, creates the concentration gradient that lets the kidney conserve water and produce concentrated urine. The arteriole-to-arteriole glomerular arrangement sustains the pressure needed for filtration, and the peristaltic muscular ureters and the distensible bladder store and move urine efficiently." },
      { h: "Normal values / key figures", list: [
        "Nephrons per kidney: about 1 million.",
        "Kidney position: about T12–L3, retroperitoneal; right slightly lower than left.",
        "Ureter length: about 25–30 cm; three normal constrictions.",
        "Bladder capacity: roughly 400–600 mL.",
        "Urethra length: female about 4 cm; male about 18–20 cm."
      ] },
      { h: "Clinical relevance", p: "Structural knowledge underpins urinary catheterization (its technique and the higher UTI risk from the short female urethra), the three ureteric constrictions that explain where renal-colic pain arises when a calculus lodges, and the oblique ureteric entry whose failure causes vesicoureteric reflux in children. Trigone and sphincter anatomy underlies continence and its disorders (stress and urge incontinence). The retroperitoneal position guides flank/loin assessment and renal-angle (costovertebral) tenderness in pyelonephritis." },
      { h: "Key terms", list: [
        "Nephron — the structural and functional unit of the kidney.",
        "Glomerulus — the capillary tuft where filtration begins.",
        "Renal pelvis — the funnel collecting urine before the ureter.",
        "Detrusor — the smooth muscle of the bladder wall.",
        "Trigone — the smooth triangular region of the bladder floor."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the position, coverings and gross internal structure of the kidney.",
      "Draw and label a nephron and name each of its parts.",
      "Describe the blood supply of the nephron and the structure and role of the juxtaglomerular apparatus.",
      "Describe the structure of the ureters and the urinary bladder, including the trigone and sphincters.",
      "Compare the male and female urethra and explain the clinical significance of the difference."
    ],
    assessment: [
      { type: "mcq", q: "A stone (calculus) causing severe colicky loin-to-groin pain is most likely lodged in the:", options: ["Renal cortex", "Ureter (at a constriction)", "Bladder trigone", "Urethra"], answer: 1, rationale: "Ureteric constrictions are the usual sites where stones impact, causing renal colic." },
      { type: "mcq", q: "Filtration of blood begins at the capillary tuft called the:", options: ["Glomerulus", "Loop of Henle", "Collecting duct", "Minor calyx"], answer: 0, rationale: "The glomerulus within Bowman's capsule is the filtering capillary tuft." },
      { type: "mcq", q: "The kidneys can be examined for tenderness at the loin because they lie:", options: ["Within the peritoneal cavity", "Retroperitoneally against the posterior wall", "In the pelvis", "In the thorax"], answer: 1, rationale: "The kidneys are retroperitoneal, so renal-angle (loin) tenderness is assessed posteriorly." },
      { type: "mcq", q: "High pressure for glomerular filtration is maintained because blood leaves the glomerulus through an:", options: ["Efferent arteriole (arteriole-to-arteriole)", "Ordinary venule", "Peritubular capillary directly", "Vasa recta only"], answer: 0, rationale: "The efferent arteriole (not a venule) maintains high glomerular pressure." },
      { type: "mcq", q: "During bladder catheterization the balloon rests near the smooth triangular area bounded by the ureteric and urethral orifices, the:", options: ["Trigone", "Fundus", "Rugae", "Detrusor"], answer: 0, rationale: "The trigone is the triangular region of the bladder floor between these orifices." },
      { type: "mcq", q: "Voluntary control of micturition is exerted through the ____ urethral sphincter of skeletal muscle:", options: ["Internal", "External", "Detrusor", "Pyloric"], answer: 1, rationale: "The external urethral sphincter is skeletal muscle under voluntary control." },
      { type: "mcq", q: "The epithelium lining the ureter and bladder, which permits stretch, is:", options: ["Simple squamous", "Transitional", "Ciliated columnar", "Keratinized stratified squamous"], answer: 1, rationale: "Transitional epithelium (urothelium) accommodates stretching in the urinary tract." },
      { type: "mcq", q: "A young woman develops recurrent cystitis. The main anatomical reason women are more prone to UTI is that the female urethra is:", options: ["Very long", "Short and close to the anus", "Shared with the reproductive tract", "Lined by cartilage"], answer: 1, rationale: "The short female urethra near the anus allows easier ascent of bacteria." },
      { type: "mcq", q: "Reflux of urine back toward the kidneys in children is normally prevented by the ureters entering the bladder:", options: ["Vertically", "Obliquely through the wall", "Through the trigone directly", "Via the urethra"], answer: 1, rationale: "The oblique intramural course of the ureter acts as a valve preventing reflux." },
      { type: "mcq", q: "On imaging, the right kidney lies slightly lower than the left because of the overlying:", options: ["Spleen", "Liver", "Stomach", "Pancreas"], answer: 1, rationale: "The large right lobe of the liver displaces the right kidney inferiorly." }
      , { type: "fill", q: "The double-walled cup enclosing the glomerulus is the glomerular (____) capsule.", accept: ["bowman", "bowman's", "bowmans"], rationale: "Bowman's (glomerular) capsule surrounds the glomerulus." }
      , { type: "fill", q: "The apex of a renal pyramid that projects into a minor calyx is the renal ____.", accept: ["papilla", "papillae"], rationale: "The renal papilla drains urine into a minor calyx." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "ana-11-nervous",
    unit: "Unit 5 · Nervous, Endocrine & Sensory (Structure)",
    title: "Structure of the Nervous System: CNS, PNS & ANS",
    readMinutes: 28,
    summary: "Organization of the nervous system, the structure of neurons and neuroglia, the brain and its regions, ventricles and CSF, the spinal cord, the meninges, and the peripheral and autonomic nervous systems.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Organization of the nervous system", p: "The nervous system is divided anatomically into the central nervous system (CNS) — the brain and spinal cord, which integrate and process information — and the peripheral nervous system (PNS) — the cranial and spinal nerves and ganglia that link the CNS to the rest of the body. Functionally the PNS has a sensory (afferent) division carrying impulses to the CNS and a motor (efferent) division carrying impulses out; the motor division is further split into a somatic nervous system (voluntary, to skeletal muscle) and an autonomic nervous system (ANS, involuntary, to smooth and cardiac muscle and glands), the ANS comprising sympathetic and parasympathetic parts.", figure: {
        caption: "Figure 11.1 — Structural and functional divisions of the nervous system.",
        svg: '<svg viewBox="0 0 480 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nervous system divisions"><rect x="180" y="10" width="120" height="34" rx="8" fill="#0F4C3A"/><text x="240" y="32" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">Nervous system</text><rect x="60" y="70" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="120" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">CNS</text><rect x="300" y="70" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="360" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">PNS</text><line x1="240" y1="44" x2="120" y2="68" stroke="#15803D" stroke-width="2"/><line x1="240" y1="44" x2="360" y2="68" stroke="#15803D" stroke-width="2"/><rect x="250" y="130" width="90" height="34" rx="8" fill="#F0FDF4" stroke="#15803D"/><text x="295" y="152" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Somatic</text><rect x="350" y="130" width="90" height="34" rx="8" fill="#F0FDF4" stroke="#15803D"/><text x="395" y="152" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Autonomic</text><line x1="360" y1="104" x2="295" y2="128" stroke="#15803D" stroke-width="2"/><line x1="360" y1="104" x2="395" y2="128" stroke="#15803D" stroke-width="2"/></svg>'
      } },
      { h: "The neuron", p: "The neuron is the excitable, impulse-conducting cell. It has a cell body (soma) containing the nucleus and clumps of rough ER called Nissl bodies; multiple dendrites that receive signals and carry them toward the soma; and a single axon that conducts impulses away, ending in synaptic terminals. Many axons are wrapped in a myelin sheath (formed by Schwann cells in the PNS and oligodendrocytes in the CNS) with gaps called nodes of Ranvier that speed conduction by allowing the impulse to jump (saltatory conduction). Structurally, neurons are classed as multipolar (most CNS neurons), bipolar (retina, olfactory) and unipolar (most sensory neurons)." },
      { h: "Neuroglia (supporting cells)", list: [
        "Astrocytes (CNS) — star-shaped; support neurons, regulate the chemical environment and help form the blood–brain barrier.",
        "Oligodendrocytes (CNS) — form the myelin sheaths of central axons.",
        "Microglia (CNS) — small phagocytic defence cells (the CNS macrophages).",
        "Ependymal cells (CNS) — line the ventricles and central canal and help make/circulate CSF.",
        "Schwann cells (PNS) — form myelin around peripheral axons; and satellite cells surround cell bodies in ganglia."
      ] },
      { h: "The brain — major regions", list: [
        "Cerebrum — the largest part; two hemispheres of folded cortex (gyri and sulci) of grey matter over white matter, in frontal, parietal, temporal and occipital lobes, with the basal ganglia (nuclei) deep within.",
        "Diencephalon — the thalamus (a sensory relay station) and the hypothalamus (control of the ANS, endocrine system, temperature, hunger, thirst).",
        "Brainstem — midbrain, pons and medulla oblongata; contains vital centres (cardiovascular, respiratory) and gives origin to most cranial nerves; the medulla connects to the spinal cord.",
        "Cerebellum — behind the brainstem; coordinates movement, posture and balance."
      ] },
      { h: "Grey matter and white matter", p: "Nervous tissue in the CNS is arranged as grey matter — collections of neuron cell bodies, dendrites and synapses — and white matter — bundles (tracts) of myelinated axons, whose lipid myelin gives the white colour. In the cerebrum and cerebellum grey matter forms the outer cortex with white matter beneath, whereas in the spinal cord the arrangement is reversed (grey matter inside, white matter outside). Ascending tracts carry sensory information up and descending tracts carry motor commands down." },
      { h: "Ventricles and cerebrospinal fluid", p: "Within the brain are four fluid-filled ventricles — two lateral ventricles, the third and the fourth — lined by ependyma and continuous with the central canal of the cord. The choroid plexuses in the ventricles produce cerebrospinal fluid (CSF), a clear plasma-like fluid (~150 mL total) that circulates through the ventricles and out into the subarachnoid space, cushioning and supporting the CNS and removing wastes, before being reabsorbed into venous blood at the arachnoid granulations. Obstruction of CSF flow causes hydrocephalus." },
      { h: "Spinal cord", p: "The spinal cord runs within the vertebral canal from the medulla oblongata (at the foramen magnum) down to about the level of L1–L2 in the adult, tapering as the conus medullaris; below this the lumbar and sacral nerve roots hang as the cauda equina. In cross-section it shows a central butterfly/H-shaped area of grey matter (with dorsal, lateral and ventral horns) around the central canal, surrounded by white-matter tracts. Thirty-one pairs of spinal nerves arise, each formed by a dorsal (posterior, sensory) root bearing a dorsal root ganglion and a ventral (anterior, motor) root." },
      { h: "Meninges", p: "Three connective-tissue membranes, the meninges, cover and protect the brain and spinal cord. From outside in they are: the tough, fibrous dura mater; the web-like arachnoid mater; and the delicate pia mater, which adheres to the surface of the nervous tissue. CSF circulates in the subarachnoid space between the arachnoid and pia. The related spaces — the epidural (extradural) space, the potential subdural space and the subarachnoid/lumbar cistern below the cord — are the anatomical basis for extradural and subdural haematomas and for epidural anaesthesia and lumbar puncture.", figure: {
        caption: "Figure 11.2 — The three meninges from the skull inward.",
        svg: '<svg viewBox="0 0 480 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Meninges"><defs><marker id="anaAr11" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="20" y="20" width="120" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="80" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Dura mater</text><rect x="180" y="20" width="120" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="240" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Arachnoid mater</text><rect x="340" y="20" width="120" height="34" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="400" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Pia mater</text><line x1="140" y1="37" x2="178" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr11)"/><line x1="300" y1="37" x2="338" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr11)"/></svg>'
      } },
      { h: "Peripheral nervous system", p: "The PNS comprises 12 pairs of cranial nerves arising from the brain (mixed, sensory or motor; e.g. the optic, facial and vagus nerves) and 31 pairs of spinal nerves arising from the cord (8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal), all of which are mixed. Spinal nerves emerge, then divide into branches (rami) and form the cervical, brachial, lumbar and sacral plexuses that supply the limbs and trunk. A ganglion is a collection of nerve-cell bodies located in the PNS." },
      { h: "Autonomic nervous system (structure)", p: "The ANS uses a two-neuron motor chain: a preganglionic neuron in the CNS synapses in a ganglion with a postganglionic neuron that reaches the effector. The two divisions differ structurally. The sympathetic division has a thoracolumbar outflow (T1–L2) with ganglia in the paravertebral sympathetic chain close to the cord (so short preganglionic, long postganglionic fibres). The parasympathetic division has a craniosacral outflow (certain cranial nerves, e.g. the vagus, and sacral segments S2–S4) with ganglia in or near the target organ (long preganglionic, short postganglionic fibres). These differences have important functional and pharmacological consequences." },
      { h: "Normal values / key figures", list: [
        "Cranial nerves: 12 pairs; spinal nerves: 31 pairs.",
        "Adult spinal cord ends at about L1–L2 (conus medullaris).",
        "Total CSF volume: about 150 mL.",
        "Sympathetic outflow: thoracolumbar (T1–L2); parasympathetic: craniosacral.",
        "Ventricles: two lateral, third and fourth."
      ] },
      { h: "Clinical relevance", p: "Meningeal anatomy underlies lumbar puncture (safely performed below L1–L2 to avoid the cord) and epidural analgesia, and it explains why a torn meningeal artery causes an extradural haematoma while a torn bridging vein causes a subdural haematoma. Cortical localization explains the focal deficits (hemiplegia, aphasia) seen after a stroke; spinal-cord and tract anatomy explains the level and pattern of loss after cord injury. ANS anatomy underlies the autonomic effects of drugs and the assessment of neurogenic bladder and orthostatic (postural) hypotension." },
      { h: "Key terms", list: [
        "Neuron — the conducting cell of the nervous system.",
        "Myelin — the insulating sheath that speeds impulse conduction.",
        "Grey / white matter — cell bodies / myelinated tracts.",
        "CSF — cerebrospinal fluid that cushions the CNS.",
        "Ganglion — a collection of nerve-cell bodies in the PNS."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the structural and functional divisions of the nervous system.",
      "Describe the structure of a neuron and name the five types of neuroglia and their roles.",
      "Describe the major regions of the brain and the ventricular system and CSF circulation.",
      "Describe the structure of the spinal cord and the three meninges.",
      "Compare the structural organization of the sympathetic and parasympathetic divisions of the ANS."
    ],
    assessment: [
      { type: "mcq", q: "A lumbar puncture in an adult is performed below L1–L2 to avoid injuring the:", options: ["Spinal cord (which ends there)", "Cauda equina", "Sacrum", "Dura mater"], answer: 0, rationale: "The cord ends at about L1–L2; below this only the mobile cauda equina roots remain, so puncture is safer." },
      { type: "mcq", q: "After a head injury a torn artery bleeds between the skull and dura, forming a/an:", options: ["Subdural haematoma", "Extradural (epidural) haematoma", "Subarachnoid haemorrhage into CSF", "Intraventricular bleed"], answer: 1, rationale: "Arterial bleeding into the epidural space forms an extradural haematoma." },
      { type: "mcq", q: "Conduction along a myelinated axon is fast because the impulse jumps between gaps in the myelin called:", options: ["Nissl bodies", "Synapses", "Nodes of Ranvier", "Dendrites"], answer: 2, rationale: "Saltatory conduction occurs at the nodes of Ranvier." },
      { type: "mcq", q: "The blood–brain barrier is formed largely by which neuroglial cell?", options: ["Astrocytes", "Microglia", "Ependymal cells", "Schwann cells"], answer: 0, rationale: "Astrocyte foot processes help form and regulate the blood–brain barrier." },
      { type: "mcq", q: "Cerebrospinal fluid is produced by the:", options: ["Choroid plexus", "Arachnoid granulations", "Pia mater", "Dura mater"], answer: 0, rationale: "The choroid plexuses in the ventricles produce CSF; granulations reabsorb it." },
      { type: "mcq", q: "In the spinal cord the arrangement of grey and white matter is:", options: ["Grey outside, white inside", "All grey matter", "Grey (H-shaped) inside, white outside", "All white matter"], answer: 2, rationale: "The cord has central H-shaped grey matter surrounded by white-matter tracts (reverse of the cerebrum)." },
      { type: "mcq", q: "Sensory fibres enter the spinal cord through the ____ root, which bears a ganglion:", options: ["Ventral (anterior)", "Dorsal (posterior)", "Lateral", "Sympathetic"], answer: 1, rationale: "The dorsal (posterior) root carries sensory fibres and bears the dorsal root ganglion." },
      { type: "mcq", q: "The part of the diencephalon that controls the autonomic nervous system, temperature and the endocrine link is the:", options: ["Thalamus", "Cerebellum", "Hypothalamus", "Medulla"], answer: 2, rationale: "The hypothalamus regulates the ANS, temperature, appetite and links to the pituitary." },
      { type: "mcq", q: "The sympathetic division of the ANS has its outflow from the:", options: ["Craniosacral region", "Thoracolumbar region (T1–L2)", "Cervical region only", "Coccygeal region"], answer: 1, rationale: "Sympathetic outflow is thoracolumbar; parasympathetic is craniosacral." },
      { type: "mcq", q: "A patient with a cerebellar lesion is most likely to show:", options: ["Loss of vision", "Deafness", "Excess hormone release", "Incoordination and unsteady balance"], answer: 3, rationale: "The cerebellum coordinates movement and balance, so lesions cause ataxia." }
      , { type: "fill", q: "The tough, fibrous outermost meningeal layer is the ____ mater.", accept: ["dura"], rationale: "The dura mater is the tough outer meninx." }
      , { type: "fill", q: "A collection of nerve-cell bodies located outside the CNS is called a ____.", accept: ["ganglion", "ganglia"], rationale: "Ganglia are PNS collections of nerve-cell bodies." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "ana-12-endocrine",
    unit: "Unit 5 · Nervous, Endocrine & Sensory (Structure)",
    title: "Structure of the Endocrine Glands",
    readMinutes: 25,
    summary: "The location and gross/microscopic structure of the pituitary, pineal, thyroid, parathyroid, adrenal glands, the pancreatic islets, the gonads and the thymus as ductless glands of the endocrine system.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of the endocrine system", p: "The endocrine system is a collection of ductless glands and hormone-secreting cells that release hormones directly into the bloodstream to act on distant target cells. Its major glands are the pituitary, pineal, thyroid, parathyroids, thymus, two adrenals, the pancreatic islets and the gonads (testes/ovaries); the hypothalamus links the nervous and endocrine systems. Unlike exocrine glands, endocrine glands have no ducts; instead their secretory cells are arranged in cords, clusters or follicles surrounded by a rich capillary network. This topic emphasizes gross and microscopic structure and location; hormone actions belong to Physiology." },
      { h: "Hypothalamus and pituitary gland", p: "The pituitary gland (hypophysis) is a pea-sized gland (~0.5 g) hanging by a stalk, the infundibulum, from the hypothalamus and lodged in the sella turcica, a bony hollow of the sphenoid bone at the skull base. It has two structurally distinct lobes. The anterior lobe (adenohypophysis) is glandular epithelium, connected to the hypothalamus by a hypophyseal portal blood system that carries releasing/inhibiting hormones. The posterior lobe (neurohypophysis) is nervous tissue — axons of hypothalamic neurons that store and release their hormones. Its bony, closed enclosure explains why a pituitary tumour compresses the overlying optic chiasm and causes visual loss.", figure: {
        caption: "Figure 12.1 — The two lobes of the pituitary gland linked to the hypothalamus.",
        svg: '<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pituitary lobes"><rect x="110" y="10" width="120" height="34" rx="8" fill="#0F4C3A"/><text x="170" y="32" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#fff">Hypothalamus</text><line x1="170" y1="44" x2="170" y2="70" stroke="#15803D" stroke-width="3"/><text x="176" y="62" font-family="sans-serif" font-size="9" fill="#15803D">stalk</text><rect x="40" y="72" width="120" height="50" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="100" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Anterior lobe</text><text x="100" y="108" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">glandular</text><rect x="180" y="72" width="120" height="50" rx="8" fill="#F0FDF4" stroke="#15803D"/><text x="240" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Posterior lobe</text><text x="240" y="108" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">nervous</text><line x1="150" y1="66" x2="100" y2="72" stroke="#15803D" stroke-width="2"/><line x1="190" y1="66" x2="240" y2="72" stroke="#15803D" stroke-width="2"/></svg>'
      } },
      { h: "Thyroid gland", p: "The thyroid is a butterfly-shaped gland with two lateral lobes joined across the midline by an isthmus, lying in the anterior neck over the trachea just below the larynx (about C5–T1). It is the largest purely endocrine gland (~25 g) and is highly vascular. Microscopically it is unique: it is made of spherical follicles, each a ring of cuboidal follicular cells enclosing a store of protein-rich colloid (the only gland that stores its hormone extracellularly). Between the follicles lie parafollicular (C) cells that secrete calcitonin." },
      { h: "Parathyroid glands", p: "The parathyroid glands are usually four small (rice-grain-sized) glands embedded in the connective tissue on the posterior surface of the thyroid lobes — typically two superior and two inferior. Each is composed mainly of chief (principal) cells, which secrete parathyroid hormone, with some larger oxyphil cells. Their intimate relation to the thyroid means they can be accidentally removed or devascularized during thyroid surgery, causing hypocalcaemia." },
      { h: "Adrenal (suprarenal) glands", p: "The two adrenal glands cap the superior pole of each kidney, lying retroperitoneally within the renal fascia. Each gland has two structurally and developmentally distinct parts. The outer adrenal cortex (about 80–90% of the gland) is glandular tissue in three concentric zones — the zona glomerulosa (secreting mineralocorticoids, e.g. aldosterone), zona fasciculata (glucocorticoids, e.g. cortisol) and zona reticularis (androgens). The inner adrenal medulla is modified sympathetic neural tissue containing chromaffin cells that secrete the catecholamines adrenaline and noradrenaline." },
      { h: "Pancreatic islets and pineal gland", list: [
        "Pancreatic islets (islets of Langerhans) — about a million spherical clusters of endocrine cells scattered among the exocrine acini; the main cell types are alpha cells (glucagon), beta cells (insulin, the most numerous), delta cells (somatostatin) and PP cells. The pancreas is thus both endocrine and exocrine in one organ.",
        "Pineal gland — a tiny (~8 mm) cone-shaped gland projecting from the roof of the third ventricle in the diencephalon, composed of pinealocytes that secrete melatonin; it often calcifies with age and then serves as a midline radiographic landmark."
      ] },
      { h: "Gonads and thymus", p: "The gonads are endocrine as well as reproductive. The testes contain interstitial (Leydig) cells lying between the seminiferous tubules that secrete testosterone. The ovaries contain the developing follicles and the corpus luteum, which secrete oestrogen and progesterone. The thymus, a bilobed lymphoid-endocrine organ in the superior mediastinum behind the sternum, is large and active in childhood, secretes thymic hormones for T-lymphocyte maturation, and involutes (shrinks and is replaced by fat) after puberty." },
      { h: "Structure–function relationship", p: "Endocrine glands share features suited to hormone secretion: a very rich blood supply and secretory cells arranged as cords, clusters or follicles to maximize contact with capillaries, rather than duct systems. Their storage arrangements differ — the thyroid uniquely stores a large hormone reserve extracellularly as colloid, whereas most glands store little and synthesize on demand. Some endocrine tissue is embedded within a larger organ (islets in the pancreas, Leydig cells in the testis). These structural facts explain patterns of gland enlargement (e.g. goitre) and the appearance of endocrine organs on imaging." },
      { h: "Endocrine tissues within other organs", p: "Besides the discrete endocrine glands, several organs contain scattered hormone-secreting tissue, showing that endocrine cells need not form a separate gland. Examples include the pancreatic islets embedded among the exocrine acini; the interstitial (Leydig) cells of the testis and the follicles and corpus luteum of the ovary; the kidney (which secretes renin and erythropoietin); the heart atria (natriuretic peptide); the gastrointestinal mucosa (gastrin and other gut hormones); and the placenta in pregnancy. Structurally these are groups of secretory cells set close to capillaries within a larger, differently functioning organ." },
      { h: "Normal values / key figures", list: [
        "Pituitary weight: about 0.5 g; sits in the sella turcica of the sphenoid.",
        "Thyroid weight: about 25 g; made of follicles storing colloid.",
        "Parathyroids: usually 4, on the posterior thyroid surface.",
        "Adrenal cortex zones: glomerulosa, fasciculata, reticularis (outer to inner).",
        "Islet cells: alpha (glucagon), beta (insulin), delta (somatostatin)."
      ] },
      { h: "Clinical relevance", p: "Location matters clinically: a pituitary tumour compresses the optic chiasm (bitemporal visual loss) and may disturb hormone output; the parathyroids can be injured in thyroidectomy, causing hypocalcaemic tetany; and the cortex-versus-medulla structure of the adrenal distinguishes Cushing's syndrome and Addison's disease (cortex) from phaeochromocytoma (medulla). Islet-cell structure underlies diabetes mellitus. Nurses use this anatomy in the care of neck surgery, blood-glucose monitoring, steroid replacement and the interpretation of endocrine imaging." },
      { h: "Key terms", list: [
        "Adenohypophysis / neurohypophysis — the anterior (glandular) / posterior (nervous) pituitary.",
        "Follicle — the colloid-storing structural unit of the thyroid.",
        "Chromaffin cell — the catecholamine-secreting cell of the adrenal medulla.",
        "Islet of Langerhans — an endocrine cell cluster of the pancreas.",
        "Sella turcica — the bony seat of the pituitary gland in the sphenoid."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "List the major endocrine glands and their locations.",
      "Describe the structure of the pituitary gland and its two lobes and relationship to the hypothalamus.",
      "Describe the microscopic structure of the thyroid gland and the position of the parathyroids.",
      "Describe the structure of the adrenal gland, naming the cortical zones and the medulla.",
      "Describe the pancreatic islets and explain the dual (endocrine and exocrine) nature of the pancreas."
    ],
    assessment: [
      { type: "mcq", q: "A patient with a pituitary tumour develops loss of the outer (temporal) visual fields because the gland lies just below the:", options: ["Cerebellum", "Optic chiasm", "Foramen magnum", "Fourth ventricle"], answer: 1, rationale: "The pituitary sits beneath the optic chiasm, which an enlarging tumour compresses." },
      { type: "mcq", q: "The pituitary gland is housed in a bony hollow of the sphenoid bone, the:", options: ["Sella turcica", "Foramen magnum", "Mastoid process", "Cribriform plate"], answer: 0, rationale: "The sella turcica of the sphenoid houses the pituitary." },
      { type: "mcq", q: "The posterior lobe of the pituitary is composed of:", options: ["Glandular epithelium", "Cartilage", "Nervous tissue", "Colloid"], answer: 2, rationale: "The neurohypophysis (posterior lobe) is nervous tissue storing hypothalamic hormones." },
      { type: "mcq", q: "The thyroid gland is structurally unique among endocrine glands because it:", options: ["Has ducts", "Stores its hormone extracellularly as colloid in follicles", "Is made of chromaffin cells", "Lies in the mediastinum"], answer: 1, rationale: "Thyroid follicles store hormone precursor extracellularly as colloid — unusual for an endocrine gland." },
      { type: "mcq", q: "After a total thyroidectomy a patient develops tetany from hypocalcaemia. This is because surgery has injured the:", options: ["Adrenal glands", "Parathyroid glands on the posterior thyroid", "Pineal gland", "Pancreatic islets"], answer: 1, rationale: "The parathyroids lie on the posterior thyroid and can be damaged during thyroidectomy." },
      { type: "mcq", q: "A phaeochromocytoma is a catecholamine-secreting tumour arising from chromaffin cells of the:", options: ["Adrenal cortex", "Adrenal medulla", "Thyroid follicles", "Islets of Langerhans"], answer: 1, rationale: "Chromaffin cells of the adrenal medulla secrete catecholamines." },
      { type: "mcq", q: "Insulin is secreted by which cells of the pancreatic islets?", options: ["Beta cells", "Alpha cells", "Delta cells", "Acinar cells"], answer: 0, rationale: "Beta cells of the islets secrete insulin (alpha cells secrete glucagon)." },
      { type: "mcq", q: "Cortisol is produced by which zone of the adrenal cortex?", options: ["Zona glomerulosa", "Zona fasciculata", "Zona reticularis", "The medulla"], answer: 1, rationale: "The zona fasciculata secretes glucocorticoids such as cortisol." },
      { type: "mcq", q: "Testosterone is secreted by the ____ cells lying between the seminiferous tubules:", options: ["Sertoli", "Chief", "Parafollicular", "Interstitial (Leydig)"], answer: 3, rationale: "Interstitial (Leydig) cells produce testosterone." },
      { type: "mcq", q: "The endocrine organ that is prominent in childhood and involutes (shrinks) after puberty is the:", options: ["Pituitary", "Thymus", "Adrenal", "Thyroid"], answer: 1, rationale: "The thymus is large in childhood and involutes after puberty." }
      , { type: "fill", q: "The two lobes of the thyroid gland are joined across the midline by the ____.", accept: ["isthmus"], rationale: "The isthmus connects the two thyroid lobes." }
      , { type: "fill", q: "The endocrine cell clusters scattered through the pancreas are the islets of ____.", accept: ["langerhans"], rationale: "The islets of Langerhans are the pancreatic endocrine tissue." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "ana-13-special-senses",
    unit: "Unit 5 · Nervous, Endocrine & Sensory (Structure)",
    title: "Structure of the Special Sense Organs: Eye & Ear",
    readMinutes: 26,
    summary: "The structure of the eye — its three coats, refractive media, chambers and accessory structures — and the structure of the ear — external, middle and inner divisions, including the receptors for hearing and balance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of the special senses", p: "The special senses — sight, hearing, equilibrium (balance), smell and taste — depend on receptors housed in complex sense organs, in contrast to the general senses (touch, pressure, temperature, pain), whose receptors are widely scattered. This topic covers the structural anatomy of the eye (vision) and the ear (hearing and balance); the sensory mechanisms (how images focus and sound is transduced) are examined in Physiology." },
      { h: "The three coats of the eyeball", list: [
        "Fibrous (outer) coat — the opaque, tough white sclera, which protects and maintains eye shape and gives muscle attachment, and the transparent anterior cornea, the main light-refracting surface (it has no blood vessels).",
        "Vascular (middle) coat / uvea — the pigmented, vascular choroid that nourishes the retina and absorbs stray light; the ciliary body, which suspends the lens (by zonules), changes lens shape for focusing and secretes aqueous humour; and the iris, the coloured muscular diaphragm with the central pupil that controls light entry.",
        "Nervous (inner) coat — the retina, containing the photoreceptors: rods (dim light, peripheral vision) and cones (colour, sharp vision). The macula lutea with its central fovea is the point of sharpest vision (cones only); the optic disc, where the optic nerve and vessels leave, has no receptors and is the blind spot."
      ] },
      { h: "Refractive media and chambers", p: "Light passes through, in order: the cornea; the aqueous humour, a watery fluid filling the anterior segment (the anterior and posterior chambers, in front of the lens); the biconvex, elastic lens, held by suspensory ligaments (zonules) from the ciliary body and able to change its curvature to focus (accommodation); and the vitreous humour, a clear gel filling the large posterior segment behind the lens, which also holds the retina against the choroid. Aqueous humour is continuously secreted by the ciliary body and drained at the iridocorneal angle; if drainage is blocked, intraocular pressure rises (glaucoma).", figure: {
        caption: "Figure 13.1 — Path of light through the refractive media of the eye.",
        svg: '<svg viewBox="0 0 500 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Refractive media of eye"><defs><marker id="anaAr13" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="40" width="80" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="50" y="61" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Cornea</text><rect x="110" y="40" width="90" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="155" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Aqueous</text><rect x="220" y="40" width="70" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="255" y="61" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Lens</text><rect x="310" y="40" width="90" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="355" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Vitreous</text><rect x="420" y="40" width="70" height="34" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="455" y="61" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Retina</text><line x1="90" y1="57" x2="108" y2="57" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13)"/><line x1="200" y1="57" x2="218" y2="57" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13)"/><line x1="290" y1="57" x2="308" y2="57" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13)"/><line x1="400" y1="57" x2="418" y2="57" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13)"/></svg>'
      } },
      { h: "Accessory structures of the eye", p: "Protective and supporting structures surround the eyeball: the bony orbit (a cone-shaped socket); the eyelids (palpebrae) and eyelashes with tarsal (Meibomian) glands; the conjunctiva, a thin transparent mucous membrane covering the sclera and lining the inner eyelids; the lacrimal apparatus (the lacrimal gland producing tears that wash across the eye and drain through the lacrimal puncta and nasolacrimal duct into the nose); and the six extraocular (extrinsic) muscles — four recti and two obliques — that move the eyeball in all directions." },
      { h: "The external ear", p: "The ear is divided into external, middle and inner parts and serves both hearing and balance. The external ear consists of the auricle (pinna) — elastic cartilage covered by skin that collects sound — and the external acoustic (auditory) meatus, a canal lined by skin containing ceruminous glands that produce protective wax (cerumen). The canal ends at the tympanic membrane (eardrum), which vibrates in response to sound waves." },
      { h: "The middle ear", p: "The middle ear (tympanic cavity) is a small air-filled space within the temporal bone. It contains the three tiny auditory ossicles — the malleus (hammer, attached to the eardrum), the incus (anvil) and the stapes (stirrup, whose footplate fits the oval window) — which form a lever chain that transmits and amplifies vibrations from the eardrum to the inner ear. The auditory (Eustachian/pharyngotympanic) tube connects the middle ear to the nasopharynx, equalizing air pressure across the eardrum; it also provides a route by which throat infection can spread to cause otitis media, especially in the child, whose tube is short and horizontal." },
      { h: "The inner ear", p: "The inner ear (labyrinth), deep in the temporal bone, has two parts. The bony labyrinth — the cochlea (a spiral tube), the vestibule and the three semicircular canals — is filled with perilymph and encloses the membranous labyrinth, which is filled with endolymph. The snail-shaped cochlea houses the spiral organ (of Corti), the receptor for hearing. The vestibule (containing the utricle and saccule) detects head position and linear acceleration, and the semicircular canals detect rotational movement — together the receptors for equilibrium (balance).", figure: {
        caption: "Figure 13.2 — The three divisions of the ear (sound pathway inward).",
        svg: '<svg viewBox="0 0 480 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ear divisions"><defs><marker id="anaAr13b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="20" y="20" width="120" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="80" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">External ear</text><rect x="180" y="20" width="120" height="34" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="240" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Middle ear</text><rect x="340" y="20" width="120" height="34" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="400" y="41" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Inner ear</text><line x1="140" y1="37" x2="178" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13b)"/><line x1="300" y1="37" x2="338" y2="37" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr13b)"/></svg>'
      } },
      { h: "Structure–function correlation", p: "Each structure suits its role: the transparent, curved cornea and the shape-changing lens focus light; the pigmented choroid absorbs stray light; the muscular iris regulates light entry; and the fovea, packed with cones, gives high-acuity vision. In the ear, the funnel-shaped auricle gathers sound, the ossicular chain amplifies weak air vibrations enough to move the denser fluid of the inner ear, and the coiled cochlea maps different sound frequencies along its length. Recognizing these relationships underpins the assessment of vision and hearing." },
      { h: "The eyeball as a whole", p: "The eyeball is a roughly spherical organ about 2.5 cm in diameter, occupying the anterior part of the bony orbit and cushioned by orbital fat. It is divided by the lens into a smaller anterior segment (in front of the lens, filled with watery aqueous humour and subdivided by the iris into anterior and posterior chambers) and a larger posterior segment (behind the lens, filled with the gel-like vitreous humour). The wall's three coats — fibrous, vascular and nervous — surround these fluid-filled compartments, and the eyeball is moved by the six extraocular muscles anchored to the sclera and orbit." },
      { h: "Normal values / key figures", list: [
        "Three coats of the eye: fibrous (sclera/cornea), vascular (uvea), nervous (retina).",
        "Photoreceptors: rods (dim light) and cones (colour, sharp vision, at the fovea).",
        "Refractive media in order: cornea, aqueous humour, lens, vitreous humour.",
        "Auditory ossicles: malleus, incus, stapes.",
        "Inner-ear fluids: perilymph (bony labyrinth) and endolymph (membranous labyrinth)."
      ] },
      { h: "Clinical relevance", p: "Eye structure underlies common problems: cataract (opacity of the lens), glaucoma (raised intraocular pressure from impaired aqueous drainage), retinal detachment (separation of the retina) and conjunctivitis. Ear structure explains otitis media (middle-ear infection, common in children because the Eustachian tube is short and horizontal), the distinction between conductive deafness (external/middle ear) and sensorineural deafness (cochlea/nerve), and vertigo from inner-ear (labyrinth) disorders. This anatomy guides eye and ear examination, instillation of drops, and hearing assessment." },
      { h: "Key terms", list: [
        "Sclera / cornea — the opaque / transparent parts of the fibrous coat of the eye.",
        "Retina — the light-sensitive inner coat containing rods and cones.",
        "Aqueous / vitreous humour — fluids of the anterior / posterior segment of the eye.",
        "Ossicles — the malleus, incus and stapes of the middle ear.",
        "Organ of Corti — the hearing receptor within the cochlea."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the three coats of the eyeball and their components.",
      "Describe the refractive media of the eye in the order light passes through them, and the chambers.",
      "Describe the accessory structures of the eye, including the lacrimal apparatus and extraocular muscles.",
      "Describe the structure of the external, middle and inner ear.",
      "Explain the clinical significance of the Eustachian tube and the middle-ear ossicles."
    ],
    assessment: [
      { type: "mcq", q: "A patient with glaucoma has raised intraocular pressure because of impaired drainage of the:", options: ["Vitreous humour", "Aqueous humour", "Tears", "Endolymph"], answer: 1, rationale: "Glaucoma results from obstructed drainage of aqueous humour, raising intraocular pressure." },
      { type: "mcq", q: "The main light-refracting, transparent, avascular front of the fibrous coat is the:", options: ["Cornea", "Sclera", "Choroid", "Retina"], answer: 0, rationale: "The cornea is the transparent anterior refracting part of the fibrous coat." },
      { type: "mcq", q: "A patient reports a small area of absent vision at one spot; this normal blind spot corresponds to the:", options: ["Fovea centralis", "Optic disc (no photoreceptors)", "Macula lutea", "Ciliary body"], answer: 1, rationale: "The optic disc has no photoreceptors, creating the physiological blind spot." },
      { type: "mcq", q: "The clear gel that fills the large posterior segment and holds the retina in place is the:", options: ["Aqueous humour", "Perilymph", "Vitreous humour", "Endolymph"], answer: 2, rationale: "The vitreous humour fills the posterior segment behind the lens." },
      { type: "mcq", q: "Vibrations reach the inner ear when the footplate of the ____ rocks in the oval window:", options: ["Malleus", "Incus", "Stapes", "Cochlea"], answer: 2, rationale: "The stapes footplate transmits vibration to the oval window of the inner ear." },
      { type: "mcq", q: "A child develops otitis media after a sore throat because infection ascends the:", options: ["Nasolacrimal duct", "External acoustic meatus", "Eustachian (auditory) tube", "Cochlear duct"], answer: 2, rationale: "The Eustachian tube links the nasopharynx to the middle ear, a route for infection." },
      { type: "mcq", q: "The receptor organ for hearing, located in the cochlea, is the:", options: ["Semicircular canals", "Organ of Corti", "Vestibule", "Vitreous body"], answer: 1, rationale: "The spiral organ of Corti in the cochlea is the hearing receptor." },
      { type: "mcq", q: "A cataract that blurs vision is an opacity of the:", options: ["Cornea", "Lens", "Retina", "Sclera"], answer: 1, rationale: "A cataract is clouding of the normally transparent lens." },
      { type: "mcq", q: "Aqueous humour is continuously secreted by the:", options: ["Retina", "Lens", "Cornea", "Ciliary body"], answer: 3, rationale: "The ciliary body secretes aqueous humour and also alters lens shape." },
      { type: "mcq", q: "A patient with vertigo and unsteadiness likely has a disorder of the balance receptors in the:", options: ["Cochlea only", "Semicircular canals and vestibule", "Tympanic membrane", "Optic disc"], answer: 1, rationale: "The semicircular canals and vestibule house the equilibrium (balance) receptors." }
      , { type: "fill", q: "The coloured muscular diaphragm of the eye surrounding the pupil is the ____.", accept: ["iris"], rationale: "The iris controls pupil size and gives the eye its colour." }
      , { type: "fill", q: "The fluid contained within the membranous labyrinth of the inner ear is called ____.", accept: ["endolymph"], rationale: "Endolymph fills the membranous labyrinth; perilymph surrounds it in the bony labyrinth." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "ana-14-integumentary",
    unit: "Unit 6 · Integumentary, Lymphatic & Reproductive (Structure)",
    title: "Structure of the Integumentary System",
    readMinutes: 25,
    summary: "The layers of the skin (epidermis and dermis), the epidermal cell types and strata, the hypodermis, the epidermal appendages (hair, nails, glands), blood supply, nerves and pigmentation, with clinical correlation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The integumentary system comprises the skin (integument) and its appendages — hair, nails and cutaneous glands. The skin is the largest organ of the body, covering about 1.5–2 m2 and forming roughly 7% of body weight in an adult. It consists of two firmly attached layers — the superficial epidermis (epithelium) and the deeper dermis (connective tissue) — resting on the subcutaneous hypodermis. The skin protects, senses, regulates temperature and fluid, synthesizes vitamin D and excretes small amounts of waste." },
      { h: "Structure of the epidermis", p: "The epidermis is avascular keratinized stratified squamous epithelium that is constantly renewed from below. In thick skin (palms, soles) it has five strata; from deep to superficial: the stratum basale (germinativum), a single layer of dividing cells attached to the basement membrane; the stratum spinosum (several layers of 'prickly' cells); the stratum granulosum (cells accumulating keratin granules and beginning to die); the stratum lucidum (a clear layer present only in thick skin); and the stratum corneum, 20–30 layers of flat dead keratin-filled cells that form the tough waterproof surface. Thin skin (most of the body) lacks the stratum lucidum.", figure: {
        caption: "Figure 14.1 — Layers of the skin (epidermis, dermis) and hypodermis.",
        svg: '<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Skin layers"><rect x="20" y="20" width="380" height="40" fill="#DCFCE7" stroke="#0F4C3A"/><text x="30" y="45" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Epidermis</text><rect x="20" y="60" width="380" height="80" fill="#F0FDF4" stroke="#0F4C3A"/><text x="30" y="104" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Dermis (vessels, nerves, glands, follicles)</text><rect x="20" y="140" width="380" height="45" fill="#DCFCE7" stroke="#0F4C3A"/><text x="30" y="167" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Hypodermis (subcutaneous fat)</text></svg>'
      } },
      { h: "Cells of the epidermis", list: [
        "Keratinocytes — the great majority; produce keratin, the tough fibrous protein that waterproofs and protects.",
        "Melanocytes — in the stratum basale; produce the pigment melanin, which is passed to keratinocytes and shields against ultraviolet radiation.",
        "Langerhans (dendritic) cells — immune cells that detect and present antigens.",
        "Merkel cells — at the epidermal–dermal junction; associated with nerve endings for the sense of light touch."
      ] },
      { h: "Structure of the dermis", p: "The dermis is the tough connective-tissue layer beneath the epidermis that gives the skin its strength, elasticity and toughness. It has two regions: the superficial papillary layer of loose (areolar) connective tissue, whose dermal papillae interlock with the epidermis and raise the ridges that form fingerprints and contain capillaries and touch receptors; and the deeper, thicker reticular layer of dense irregular connective tissue, rich in interwoven collagen (strength) and elastic fibres (recoil). The dermis houses blood vessels, nerves and sensory receptors, hair follicles and glands." },
      { h: "The hypodermis", p: "The hypodermis (subcutaneous layer or superficial fascia) lies beneath the dermis and, strictly, is not part of the skin. It is composed mainly of adipose tissue and loose connective tissue that anchors the skin to underlying muscle and bone while allowing it to slide, and it insulates the body, stores energy and cushions against mechanical shock. Because it is loose and vascular but relatively insensitive, it is the site used for subcutaneous injection (insulin, heparin)." },
      { h: "Hair and nails", list: [
        "Hair — a flexible keratinized structure with a shaft projecting above the surface and a root anchored in a follicle; the hair grows from the matrix in the hair bulb at its base, which is nourished by a dermal papilla. A small arrector pili smooth muscle attaches to the follicle and, on contraction, raises the hair ('goose bumps').",
        "Nails — plates of hard keratin protecting the dorsal tips of the fingers and toes; parts include the nail body, free edge, hidden nail root, the underlying nail bed, the whitish crescent (lunula) and the cuticle (eponychium). Growth occurs from the nail matrix under the lunula."
      ] },
      { h: "Cutaneous glands", list: [
        "Sebaceous (oil) glands — usually open into hair follicles and secrete sebum, an oily substance that softens and waterproofs hair and skin and is mildly antibacterial (they are holocrine glands).",
        "Eccrine (merocrine) sweat glands — widespread, opening directly onto the skin surface via pores; produce watery sweat and are the main sweat glands for cooling (thermoregulation).",
        "Apocrine sweat glands — in the axilla, groin and areolae; open into hair follicles, produce a richer secretion, and become active at puberty.",
        "Modified sweat glands — ceruminous glands (ear wax) and the mammary glands (milk)."
      ] },
      { h: "Blood supply, nerves and pigmentation", p: "The dermis is richly vascular, but the epidermis is avascular and is nourished by diffusion from dermal vessels; this dermal circulation also serves thermoregulation by dilating or constricting. The skin is densely supplied with sensory receptors for touch, pressure, vibration, temperature and pain (e.g. Meissner's and Pacinian corpuscles, free nerve endings). Skin colour is determined mainly by melanin (all people have similar melanocyte numbers but differ in melanin amount and type), with contributions from yellow carotene and the red of dermal blood (haemoglobin); melanin protects the deeper cells from ultraviolet damage." },
      { h: "Structural basis of skin functions", p: "Each of the skin's roles is grounded in its structure. Protection comes from the keratinized, tightly joined stratum corneum (a physical and waterproof barrier), the acidic sebum, and melanin's shielding of deeper cells from ultraviolet light. Sensation depends on the dense sensory receptors and free nerve endings in the dermis. Thermoregulation is achieved by the dermal blood vessels (dilating or constricting) and the eccrine sweat glands. The skin also synthesizes vitamin D in the epidermis under sunlight and, through the hypodermis, insulates and stores energy. This structure–function match makes the skin a barrier organ whose breakdown (burns, pressure injury) has wide-ranging effects." },
      { h: "Normal values / key figures", list: [
        "Skin surface area: about 1.5–2 m2; about 7% of body weight.",
        "Epidermal strata (thick skin): basale, spinosum, granulosum, lucidum, corneum.",
        "New epidermal cells arise in the stratum basale; the surface is the stratum corneum.",
        "Melanin is produced by melanocytes; keratin by keratinocytes.",
        "Subcutaneous (SC) injection site: the hypodermis."
      ] },
      { h: "Clinical relevance", p: "Skin structure underpins nursing care. The epidermal barrier and dermal blood supply explain pressure-injury staging — from non-blanching erythema of intact skin (Stage 1), through partial-thickness loss into the dermis, to full-thickness loss exposing fat, muscle or bone — and wound-healing principles. The hypodermis is the target for subcutaneous injection. Melanin content affects the assessment of pallor, cyanosis and jaundice across skin tones (best judged at mucous membranes, nail beds and conjunctivae). The appendages guide assessment of hydration (skin turgor), perfusion (capillary refill) and chronic hypoxia (nail clubbing)." },
      { h: "Key terms", list: [
        "Keratinocyte — the main epidermal cell, producing keratin.",
        "Melanocyte — the pigment (melanin)-producing cell of the epidermis.",
        "Stratum corneum — the outermost, dead, keratinized epidermal layer.",
        "Dermal papillae — projections of the dermis that raise the ridges forming fingerprints.",
        "Sebum — the oily, protective secretion of the sebaceous glands."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the layers of the skin with a labelled diagram.",
      "Describe the strata of the epidermis and the four epidermal cell types.",
      "Describe the structure of the dermis and its two regions.",
      "Describe the epidermal appendages — hair, nails and the cutaneous glands.",
      "Explain how skin structure relates to pressure-injury development and staging."
    ],
    assessment: [
      { type: "mcq", q: "The waterproof, tough outer surface of the skin is formed by the layer of dead keratin-filled cells, the:", options: ["Stratum basale", "Stratum spinosum", "Stratum corneum", "Stratum granulosum"], answer: 2, rationale: "The stratum corneum of dead keratinized cells forms the tough waterproof surface." },
      { type: "mcq", q: "After a superficial abrasion, new epidermal cells that resurface the wound arise from the:", options: ["Stratum corneum", "Stratum basale (germinativum)", "Hypodermis", "Reticular dermis"], answer: 1, rationale: "The stratum basale is the dividing layer that regenerates the epidermis." },
      { type: "mcq", q: "In a patient with a suntan, the increased pigment is produced by:", options: ["Keratinocytes", "Melanocytes", "Merkel cells", "Fibroblasts"], answer: 1, rationale: "Melanocytes produce melanin, which is transferred to keratinocytes." },
      { type: "mcq", q: "The skin's strength and elasticity, which resist tearing, come mainly from collagen and elastic fibres in the:", options: ["Epidermis", "Dermis", "Stratum corneum", "Hypodermis"], answer: 1, rationale: "The dermis, rich in collagen and elastic fibres, provides strength and elasticity." },
      { type: "mcq", q: "A nurse gives insulin subcutaneously. The layer injected into is the:", options: ["Epidermis", "Papillary dermis", "Hypodermis (subcutaneous fat)", "Stratum lucidum"], answer: 2, rationale: "SC injections deposit into the hypodermis (subcutaneous adipose layer)." },
      { type: "mcq", q: "Sebum, which softens and helps waterproof the skin, is secreted by:", options: ["Eccrine sweat glands", "Sebaceous glands", "Apocrine glands", "Ceruminous glands"], answer: 1, rationale: "Sebaceous glands secrete oily sebum, usually into hair follicles." },
      { type: "mcq", q: "The main sweat glands responsible for cooling the body by evaporation are the:", options: ["Apocrine glands", "Eccrine (merocrine) glands", "Sebaceous glands", "Ceruminous glands"], answer: 1, rationale: "Widespread eccrine glands produce watery sweat for thermoregulation." },
      { type: "mcq", q: "A Stage 1 pressure injury is best described structurally as:", options: ["Full-thickness loss exposing bone", "Non-blanching redness of intact skin", "Loss of the dermis only", "A blister of the hypodermis"], answer: 1, rationale: "Stage 1 is non-blanchable erythema of intact skin, before any tissue loss." },
      { type: "mcq", q: "Fingerprints are formed by ridges raised by projections of the dermis called:", options: ["Rugae", "Villi", "Dermal papillae", "Trabeculae"], answer: 2, rationale: "Dermal papillae ridge the overlying epidermis, producing fingerprints." },
      { type: "mcq", q: "The epidermis has no blood vessels of its own; it obtains nutrients by:", options: ["Its own capillaries", "Diffusion from the dermis", "The sweat glands", "The hair follicles"], answer: 1, rationale: "The avascular epidermis is nourished by diffusion from dermal vessels." }
      , { type: "fill", q: "The whitish crescent at the base of a nail, overlying the matrix, is the ____.", accept: ["lunula"], rationale: "The lunula is the pale crescent over the nail matrix." }
      , { type: "fill", q: "The small smooth muscle that raises a hair to produce 'goose bumps' is the arrector ____.", accept: ["pili"], rationale: "The arrector pili muscle elevates the hair." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "ana-15-lymphatic",
    unit: "Unit 6 · Integumentary, Lymphatic & Reproductive (Structure)",
    title: "Structure of the Lymphatic (Immune) System",
    readMinutes: 25,
    summary: "The lymphatic vessels and lymph, the primary (central) lymphoid organs (bone marrow and thymus), and the secondary (peripheral) lymphoid organs — lymph nodes, spleen and mucosa-associated lymphoid tissue.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview and components", p: "The lymphatic system is a one-way drainage network of lymphatic vessels, the fluid lymph they carry, and the lymphoid tissues and organs where immune cells reside. Structurally it has three main functions: it returns excess interstitial fluid and leaked plasma proteins to the blood (helping maintain blood volume), it absorbs digested dietary fats from the intestine, and it houses lymphocytes and other cells that provide immune defence. Its organs are classified as primary (central) — where lymphocytes are produced and mature — and secondary (peripheral) — where immune responses are actually mounted against antigens." },
      { h: "Lymphatic vessels and lymph", p: "Lymphatic capillaries are blind-ended, highly permeable microvessels whose overlapping endothelial cells act as one-way flap valves, admitting interstitial fluid — now called lymph — but not letting it out. They drain into progressively larger collecting lymphatic vessels, which resemble veins with valves and depend on the skeletal-muscle pump for flow. Lymph finally drains into two ducts: the thoracic duct (the larger; drains the left side of the head/chest and the whole lower body, beginning at the cisterna chyli, into the left subclavian vein) and the right lymphatic duct (drains the right upper quadrant into the right subclavian vein). Lymph is a clear fluid resembling plasma and carries lymphocytes; that from the gut, laden with absorbed fat, is milky (chyle).", figure: {
        caption: "Figure 15.1 — Flow of fluid: interstitial fluid → lymphatic capillary → node → duct → vein.",
        svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lymph flow"><defs><marker id="anaAr15" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="10" y="40" width="100" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="60" y="58" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Interstitial</text><text x="60" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">fluid</text><rect x="130" y="40" width="100" height="40" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="180" y="58" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Lymphatic</text><text x="180" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">capillary</text><rect x="250" y="40" width="90" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="295" y="64" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Lymph node</text><rect x="360" y="40" width="60" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="390" y="64" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Duct</text><rect x="440" y="40" width="50" height="40" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="465" y="64" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Vein</text><line x1="110" y1="60" x2="128" y2="60" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr15)"/><line x1="230" y1="60" x2="248" y2="60" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr15)"/><line x1="340" y1="60" x2="358" y2="60" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr15)"/><line x1="420" y1="60" x2="438" y2="60" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr15)"/></svg>'
      } },
      { h: "Primary (central) lymphoid organs", list: [
        "Red bone marrow — the soft tissue in the spaces of spongy bone (sternum, iliac crest, vertebrae, ends of long bones) where all blood cells, including lymphocytes, originate from stem cells; B lymphocytes also complete their maturation here.",
        "Thymus — a bilobed gland in the superior mediastinum behind the sternum, large and most active in childhood and involuting after puberty; T lymphocytes mature within its cortex and medulla under the influence of its epithelial cells and thymic hormones."
      ] },
      { h: "Lymph nodes", p: "Lymph nodes are small (1–25 mm), bean-shaped organs positioned along lymphatic vessels, clustered where vessels converge — in the neck (cervical), armpit (axillary), groin (inguinal), and within the thorax and abdomen (mesenteric). Each node is enclosed in a fibrous capsule (with inward extensions, trabeculae) and organized into an outer cortex containing lymphoid follicles with germinal centres rich in B cells, a deeper paracortex rich in T cells, and an inner medulla. Lymph enters through several afferent vessels, percolates slowly through internal sinuses where macrophages filter out and destroy microbes, debris and cancer cells, and leaves through a single efferent vessel at the indented hilum. Nodes enlarge (lymphadenopathy) during infection and in malignancy." },
      { h: "Spleen", p: "The spleen is the largest lymphoid organ, lying in the left upper quadrant (left hypochondrium) behind the stomach and protected by the lower left ribs. It is soft, richly vascular and enclosed in a thin capsule. Its internal tissue is of two kinds: white pulp — sleeves of lymphoid tissue around the arteries, where lymphocytes mount immune responses and monitor the blood — and red pulp — a meshwork of venous sinusoids and splenic cords where macrophages remove worn-out red blood cells and platelets, and which stores blood and forms a reservoir of cells. Its fragile capsule and heavy blood flow make it liable to rupture and severe bleeding in abdominal trauma." },
      { h: "Mucosa-associated lymphoid tissue (MALT)", p: "Large amounts of diffuse lymphoid tissue guard the mucous membranes exposed to the outside world. This mucosa-associated lymphoid tissue (MALT) includes the tonsils (a protective ring around the entrance to the throat — palatine, pharyngeal/adenoid and lingual tonsils), the aggregated lymphoid follicles (Peyer's patches) in the wall of the ileum, the appendix, and scattered lymphoid nodules throughout the respiratory, digestive and urinary tracts. Structurally these are unencapsulated collections of lymphocytes positioned to intercept pathogens at their commonest points of entry." },
      { h: "Distribution of lymph-node groups", p: "Lymph nodes are grouped predictably, which is why nurses palpate specific regions. Superficial groups include the cervical nodes (draining the head and neck), the axillary nodes (draining the upper limb and breast), and the inguinal nodes (draining the lower limb and perineum). Deep groups include the tracheobronchial nodes at the lung roots and the mesenteric and para-aortic nodes in the abdomen. Each region of the body drains to particular nodes, so an enlarged node points to disease in the area it drains — the basis for tracing infection or the spread of cancer." },
      { h: "Comparison with the cardiovascular system", p: "The lymphatic system resembles the venous side of the cardiovascular system but differs in key structural ways: it is a one-way, open-ended drainage network (not a closed loop), beginning as blind lymphatic capillaries in the tissues rather than continuing from arterioles; it has no central pump, relying instead on the skeletal-muscle pump, respiratory movements and numerous valves to move lymph slowly toward the neck veins; and it is interrupted by filtering lymph nodes along its course. Ultimately it returns its fluid to the bloodstream at the subclavian veins, closing the loop of fluid balance." },
      { h: "Structure–function correlation", p: "The lymphatic architecture matches its roles. Blind-ended, flap-valved capillaries permit fluid and large particles to enter but not leave; valves and the muscle pump drive one-way flow against low pressure; and the strategic placement of filtering nodes along vessels and of MALT at mucosal surfaces ensures that lymph and incoming pathogens are screened before reaching the blood. The separation of a node into B-cell (follicle) and T-cell (paracortex) zones reflects the division of labour in the immune response." },
      { h: "Normal values / key figures", list: [
        "Primary lymphoid organs: red bone marrow and thymus.",
        "Secondary lymphoid organs: lymph nodes, spleen and MALT.",
        "Two main lymph ducts: thoracic duct and right lymphatic duct.",
        "Lymph node cortex = B cells (follicles); paracortex = T cells.",
        "Spleen: white pulp (immune) and red pulp (removes old red cells)."
      ] },
      { h: "Clinical relevance", p: "Node distribution guides physical assessment (palpating cervical, axillary and inguinal nodes) and the staging of cancers that spread via the lymphatics, including sentinel-node biopsy. Thymic and marrow anatomy underlies immunodeficiency and the immunosuppressive effect of chemotherapy and radiotherapy on rapidly dividing lymphoid cells. Splenic structure explains the serious infection risk after splenectomy (needing vaccination and prophylaxis). Obstruction or removal of lymphatics causes lymphoedema — for example arm swelling after axillary node clearance in breast cancer surgery — a major focus of nursing arm care and education." },
      { h: "Key terms", list: [
        "Lymph — the fluid carried within lymphatic vessels.",
        "Primary / secondary lymphoid organ — site of lymphocyte production/maturation vs. immune response.",
        "Germinal centre — the B-cell proliferation site within a lymphoid follicle.",
        "White / red pulp — the lymphoid / blood-filtering regions of the spleen.",
        "MALT — mucosa-associated lymphoid tissue guarding mucosal surfaces."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the components and functions of the lymphatic system.",
      "Trace the flow of lymph from the tissues back to the venous circulation.",
      "Distinguish primary and secondary lymphoid organs with examples.",
      "Describe the structure of a lymph node, including its cortex, paracortex and sinuses.",
      "Describe the structure of the spleen and explain the clinical importance of its blood supply."
    ],
    assessment: [
      { type: "mcq", q: "A patient develops arm swelling (lymphoedema) after removal of axillary lymph nodes for breast cancer. This is due to obstruction of:", options: ["Arteries", "Veins only", "Lymphatic drainage", "Nerves"], answer: 2, rationale: "Impaired lymphatic drainage after node clearance causes lymphoedema." },
      { type: "mcq", q: "Most of the body's lymph is returned to the blood via the large lymphatic vessel called the:", options: ["Right lymphatic duct", "Thoracic duct", "Cisterna chyli only", "Subclavian vein"], answer: 1, rationale: "The thoracic duct drains most of the body into the left subclavian vein." },
      { type: "mcq", q: "T lymphocytes complete their maturation in the:", options: ["Spleen", "Thymus", "Lymph node", "Tonsils"], answer: 1, rationale: "T cells mature in the thymus, a primary lymphoid organ." },
      { type: "mcq", q: "Which of the following is a primary (central) lymphoid organ?", options: ["Lymph node", "Spleen", "Red bone marrow", "Tonsil"], answer: 2, rationale: "Red bone marrow and the thymus are the primary lymphoid organs." },
      { type: "mcq", q: "Lymph enters a lymph node through several ____ vessels and leaves through one efferent vessel:", options: ["Efferent", "Afferent", "Venous", "Arterial"], answer: 1, rationale: "Multiple afferent vessels deliver lymph in; a single efferent vessel drains it out." },
      { type: "mcq", q: "A patient with a ruptured spleen after trauma bleeds heavily; the spleen is prone to this because it is:", options: ["Poorly vascular", "Highly vascular with a fragile capsule", "Made of bone", "Retroperitoneal and fixed"], answer: 1, rationale: "The spleen's rich blood flow and thin capsule make traumatic rupture and haemorrhage likely." },
      { type: "mcq", q: "Old and damaged red blood cells are removed by macrophages in the ____ of the spleen:", options: ["White pulp", "Red pulp", "Cortex", "Germinal centre"], answer: 1, rationale: "The red pulp of the spleen removes worn-out erythrocytes." },
      { type: "mcq", q: "Aggregated lymphoid follicles (Peyer's patches) that protect against gut pathogens are located in the:", options: ["Ileum", "Trachea", "Kidney", "Brain"], answer: 0, rationale: "Peyer's patches are MALT in the wall of the ileum." },
      { type: "mcq", q: "The germinal centres seen within lymphoid follicles are sites of ____ proliferation:", options: ["Erythrocyte", "B lymphocyte", "Platelet", "Neuron"], answer: 1, rationale: "Germinal centres are sites of B-cell proliferation and antibody production." },
      { type: "mcq", q: "In staging a cancer, tumour cells commonly spread first to the nearest lymph node because the node acts as a:", options: ["Blood reservoir", "Filter of lymph draining that region", "Hormone gland", "Site of red-cell production"], answer: 1, rationale: "Nodes filter lymph from their drainage region, trapping spreading tumour cells (the basis of sentinel-node biopsy)." }
      , { type: "fill", q: "The lymphoid gland in the superior mediastinum that involutes after puberty is the ____.", accept: ["thymus"], rationale: "The thymus is large in childhood and involutes after puberty." }
      , { type: "fill", q: "The small bean-shaped organs that filter lymph along its vessels are lymph ____.", accept: ["nodes", "node"], rationale: "Lymph nodes filter lymph and house immune cells." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "ana-16-reproductive",
    unit: "Unit 6 · Integumentary, Lymphatic & Reproductive (Structure)",
    title: "Structure of the Male & Female Reproductive Systems",
    readMinutes: 27,
    summary: "The structure of the male reproductive organs (testes, duct system, accessory glands, penis) and the female reproductive organs (ovaries, uterine tubes, uterus, cervix, vagina, external genitalia and mammary glands), with clinical correlation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview", p: "The reproductive systems produce gametes (sperm and ova), secrete sex hormones and, in the female, receive the fertilized ovum and support the developing offspring. Each system has gonads (the primary sex organs, producing gametes and hormones) and accessory ducts, glands and external genitalia (secondary sex organs). This topic covers gross and microscopic STRUCTURE; the hormonal control, spermatogenesis and the menstrual cycle belong to the Physiology paper." },
      { h: "Male — testes and scrotum", p: "The two testes are the male gonads, oval organs suspended in the scrotum, a skin-and-muscle pouch that holds them outside the body cavity at about 2–3 °C below core temperature, which is required for sperm production. Each testis is enclosed by the tough tunica albuginea, whose septa divide it into 200–300 lobules packed with tightly coiled seminiferous tubules; the tubule walls contain spermatogenic cells (developing sperm) and supporting Sertoli cells (which nourish sperm and form the blood–testis barrier). Between the tubules lie the interstitial (Leydig) cells that secrete testosterone. Sperm leave the tubules and collect in the rete testis." },
      { h: "Male — duct system", p: "From the rete testis, sperm pass through efferent ductules into the epididymis, a long (about 6 m coiled) comma-shaped duct on the posterior testis where sperm mature, gain motility and are stored. From the tail of the epididymis the ductus (vas) deferens ascends within the spermatic cord, loops over the bladder, and joins the duct of the seminal vesicle to form the ejaculatory duct, which pierces the prostate to open into the prostatic urethra. Thereafter the urethra (prostatic, membranous and spongy parts) is the common final path for both urine and semen.", figure: {
        caption: "Figure 16.1 — Pathway of sperm through the male duct system.",
        svg: '<svg viewBox="0 0 500 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Male duct system"><defs><marker id="anaAr16" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="8" y="40" width="90" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="53" y="62" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Seminiferous</text><rect x="118" y="40" width="90" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="163" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Epididymis</text><rect x="228" y="40" width="90" height="36" rx="7" fill="#DCFCE7" stroke="#0F4C3A"/><text x="273" y="62" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Vas deferens</text><rect x="338" y="40" width="80" height="36" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="378" y="62" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">Ejac. duct</text><rect x="438" y="40" width="55" height="36" rx="7" fill="#F0FDF4" stroke="#0F4C3A"/><text x="465" y="62" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Urethra</text><line x1="98" y1="58" x2="116" y2="58" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr16)"/><line x1="208" y1="58" x2="226" y2="58" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr16)"/><line x1="318" y1="58" x2="336" y2="58" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr16)"/><line x1="418" y1="58" x2="436" y2="58" stroke="#15803D" stroke-width="2" marker-end="url(#anaAr16)"/></svg>'
      } },
      { h: "Male — accessory glands", p: "Three accessory glands add secretions that, with sperm, form semen. The paired seminal vesicles behind the bladder contribute about 60% of semen volume — a viscous, alkaline, fructose-rich fluid that nourishes and activates sperm. The single prostate gland, about the size of a walnut, encircles the urethra just below the bladder and adds a milky, slightly acidic fluid containing enzymes. The paired bulbourethral (Cowper's) glands secrete mucus that lubricates and neutralizes acidic urine in the urethra before ejaculation." },
      { h: "Male — penis and spermatic cord", p: "The penis is the male copulatory organ, delivering semen and conveying urine. It contains three cylinders of erectile tissue that fill with blood during erection: two dorsal corpora cavernosa and a single ventral corpus spongiosum, which surrounds the spongy (penile) urethra and expands distally to form the glans, covered by the prepuce (foreskin). The spermatic cord suspends each testis and contains the ductus deferens, the testicular artery and pampiniform venous plexus, nerves and lymphatics, passing through the inguinal canal." },
      { h: "Female — ovaries and uterine tubes", p: "The two ovaries are the female gonads, almond-shaped organs held in the pelvis by the ovarian and broad ligaments. Their cortex contains ovarian follicles at various stages of development within a connective-tissue stroma, each follicle enclosing a developing oocyte; after ovulation the ruptured follicle becomes the corpus luteum. The paired uterine (fallopian) tubes extend medially from near each ovary to the uterus; the funnel-shaped infundibulum with its finger-like fimbriae drapes over the ovary and, aided by cilia and peristalsis, sweeps the released ovum into the tube; the wide ampulla is the usual site of fertilization; the narrow isthmus joins the uterus." },
      { h: "Female — uterus and cervix", p: "The uterus is a hollow, pear-shaped muscular organ lying in the pelvis between the bladder in front and the rectum behind, usually tilted forward (anteverted, anteflexed). Its parts are the domed fundus, the main body, and the narrow neck, the cervix, which projects into the vagina. Its wall has three layers: the outer serous perimetrium; the thick muscular myometrium (smooth muscle that contracts in labour); and the inner endometrium, a mucosa with a functional layer that thickens and is shed as menstruation each cycle and, in pregnancy, supports implantation and forms part of the placenta. The cervix opens into the vagina at the external os." },
      { h: "Female — vagina and external genitalia", p: "The vagina is a fibromuscular, distensible canal about 8–10 cm long extending from the cervix to the exterior; it receives the penis and semen, is the birth canal and the channel for menstrual flow, and is lined by stratified squamous epithelium kept acidic to resist infection. The external genitalia (vulva) comprise the mons pubis, the labia majora and labia minora, the clitoris (erectile tissue), and the vestibule, into which open the urethral and vaginal orifices and the ducts of the greater vestibular (Bartholin's) glands, which lubricate." },
      { h: "Female — mammary glands", p: "The mammary glands are modified sweat glands within the breasts, present in both sexes but functional in the female for lactation. Each breast contains 15–20 lobes of glandular (alveolar) tissue separated by fibrous suspensory (Cooper's) ligaments and adipose tissue; milk secreted by the alveoli drains through lactiferous ducts, which converge and, near the nipple, widen into lactiferous sinuses before opening at the nipple. The pigmented areola surrounds the nipple. Full development occurs under hormonal influence at puberty and in pregnancy." },
      { h: "Normal values / key figures", list: [
        "Testes lie in the scrotum at about 2–3 °C below core temperature (needed for spermatogenesis).",
        "Seminal vesicles contribute about 60% of semen volume (fructose-rich, alkaline).",
        "Usual site of fertilization: the ampulla of the uterine tube.",
        "Uterine wall layers: perimetrium, myometrium, endometrium.",
        "Each breast: about 15–20 lobes draining via lactiferous ducts to the nipple."
      ] },
      { h: "Clinical relevance", p: "In the male, testicular lobule anatomy underlies self-examination and the emergency of testicular torsion (twisting of the spermatic cord), and the prostate's position encircling the urethra explains the urinary obstruction of benign prostatic hyperplasia and the effects of prostate cancer. In the female, tubal anatomy explains ectopic pregnancy (commonly implanting in the ampulla) and the infertility that follows tubal blockage; the layered uterus underlies menstruation, labour contractions and postpartum involution; cervical structure (the transformation zone) guides cervical (Pap) screening; and the mammary/lactiferous-duct anatomy guides breastfeeding support, mastitis care and breast examination." },
      { h: "Key terms", list: [
        "Seminiferous tubule — the site of sperm production within the testis.",
        "Epididymis — the duct where sperm mature and are stored.",
        "Endometrium — the inner uterine lining shed at menstruation.",
        "Fimbriae — the finger-like fringes of the uterine tube that capture the ovum.",
        "Lactiferous duct — the duct draining milk from a breast lobe to the nipple."
      ] }
    ],
    references: REF_ANA,
    examQuestions: [
      "Describe the structure of the testis and the male duct system, tracing the path of sperm.",
      "Describe the three accessory glands of the male reproductive system and their contributions to semen.",
      "Describe the structure of the ovary and the uterine tube, indicating the site of fertilization.",
      "Describe the layers of the uterine wall and the structure of the cervix and vagina.",
      "Describe the structure of the mammary gland and its clinical relevance to lactation."
    ],
    assessment: [
      { type: "mcq", q: "The testes are held in the scrotum outside the body cavity because sperm production requires a temperature that is:", options: ["Above core temperature", "About 2–3 °C below core temperature", "Exactly core temperature", "Highly variable"], answer: 1, rationale: "Spermatogenesis needs a temperature slightly below core, which the scrotum provides." },
      { type: "mcq", q: "After leaving the seminiferous tubules, sperm mature and are stored in the:", options: ["Prostate", "Seminal vesicle", "Epididymis", "Urethra"], answer: 2, rationale: "The epididymis is the site of sperm maturation and storage." },
      { type: "mcq", q: "An elderly man with difficulty passing urine has enlargement of the gland that encircles the urethra below the bladder, the:", options: ["Seminal vesicle", "Prostate", "Bulbourethral gland", "Epididymis"], answer: 1, rationale: "The prostate surrounds the urethra; its enlargement (BPH) obstructs urine flow." },
      { type: "mcq", q: "The greatest proportion of semen volume, a fructose-rich alkaline fluid, is contributed by the:", options: ["Prostate", "Bulbourethral glands", "Seminal vesicles", "Testes"], answer: 2, rationale: "The seminal vesicles contribute about 60% of semen, rich in fructose." },
      { type: "mcq", q: "An ectopic pregnancy most commonly implants in the ____ of the uterine tube, its usual site of fertilization:", options: ["Fimbriae", "Ampulla", "Isthmus", "Infundibulum"], answer: 1, rationale: "Fertilization and most ectopic implantations occur in the ampulla of the uterine tube." },
      { type: "mcq", q: "The uterine layer that contracts powerfully during labour is the:", options: ["Perimetrium", "Endometrium", "Myometrium", "Peritoneum"], answer: 2, rationale: "The myometrium is the thick smooth-muscle layer that contracts in labour." },
      { type: "mcq", q: "The uterine layer that thickens and is shed as menstruation each cycle is the:", options: ["Perimetrium", "Myometrium", "Endometrium", "Serosa"], answer: 2, rationale: "The endometrium is shed at menstruation and supports implantation in pregnancy." },
      { type: "mcq", q: "The ovulated oocyte is captured and swept into the uterine tube by the finger-like:", options: ["Fimbriae", "Villi", "Rugae", "Papillae"], answer: 0, rationale: "The fimbriae of the infundibulum sweep the oocyte into the tube." },
      { type: "mcq", q: "Structurally, the mammary glands are modified:", options: ["Sebaceous glands", "Salivary glands", "Endocrine glands", "Sweat glands"], answer: 3, rationale: "Mammary glands are modified sweat glands producing milk." },
      { type: "mcq", q: "During erection, the column of the penis that surrounds the urethra and forms the glans is the:", options: ["Corpus cavernosum", "Corpus spongiosum", "Tunica albuginea", "Spermatic cord"], answer: 1, rationale: "The corpus spongiosum surrounds the urethra and expands to form the glans." }
      , { type: "fill", q: "The duct that carries sperm from the epididymis upward within the spermatic cord is the vas (ductus) ____.", accept: ["deferens"], rationale: "The vas (ductus) deferens conveys sperm from the epididymis toward the urethra." }
      , { type: "fill", q: "The lower narrow neck of the uterus that projects into the vagina is the ____.", accept: ["cervix"], rationale: "The cervix is the neck of the uterus opening into the vagina." }
    ]
  }
];
