/* ============================================================
   Diploma in Midwifery (ICM standard) · DM123 Anatomy & Physiology
   — 20 topics. Aligned to the BNMC Diploma in Midwifery syllabus
   (general A&P with a strong reproductive, pelvic, fetal and
   lactation emphasis for the childbearing woman and the midwife).
   Grounded in standard texts:
     • Coad J, Dunstall M. Anatomy and Physiology for Midwives. Elsevier.
     • Tortora GJ, Derrickson B. Principles of Anatomy and Physiology. Wiley.
     • Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_ANP = [
  "Coad J, Dunstall M. Anatomy and Physiology for Midwives. Elsevier.",
  "Tortora GJ, Derrickson B. Principles of Anatomy and Physiology. Wiley.",
  "Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier."
];

window.Academic.topics["diploma-midwifery/anatomy-physiology"] = [
  {
    "id": "anp-01-intro",
    "unit": "Unit 1 · Foundations of Anatomy & Physiology",
    "title": "Introduction to Anatomy & Physiology for Midwifery",
    "readMinutes": 16,
    "summary": "The meaning and significance of anatomy and physiology for midwives, anatomical terminology and position, levels of structural organisation, body cavities, and homeostasis in the childbearing woman.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What are anatomy and physiology?",
        "p": "Anatomy is the study of the structure of the body and the relationships between its parts; physiology is the study of how those parts work and function. The two are studied together because structure and function are always linked — for example, the wide, basin-shaped female pelvis is shaped (anatomy) to allow a baby to pass through during birth (physiology). A midwife who understands normal A&P can recognise when a childbearing woman moves from normal to abnormal."
      },
      {
        "h": "Significance for the midwife",
        "list": [
          "Recognising normal pregnancy, labour and the puerperium, so deviations are detected early.",
          "Understanding the physiological adaptations of pregnancy in every body system.",
          "Performing accurate abdominal and pelvic assessment and interpreting findings.",
          "Understanding fetal growth, fetal circulation and adaptation at birth.",
          "Giving sound health education on nutrition, breastfeeding and body changes.",
          "Communicating clearly with women and the wider health-care team using correct terms."
        ]
      },
      {
        "h": "Levels of structural organisation",
        "p": "The body is organised from simple to complex: chemical level (atoms and molecules) → cells (the smallest living units) → tissues (groups of similar cells) → organs (e.g. the uterus) → organ systems (e.g. the reproductive system) → the whole organism. Each level builds on the one below it."
      },
      {
        "h": "The anatomical position and directional terms",
        "p": "All anatomical descriptions assume the anatomical position: standing erect, facing forward, arms at the sides with palms facing forward. Directional terms are then used consistently.",
        "list": [
          "Superior (above) / Inferior (below) — the fundus of the uterus is superior to the cervix.",
          "Anterior (front) / Posterior (back) — the bladder lies anterior to the uterus.",
          "Medial (toward the midline) / Lateral (away from the midline).",
          "Proximal (nearer the trunk) / Distal (farther from the trunk).",
          "Superficial (nearer the surface) / Deep (farther in)."
        ]
      },
      {
        "h": "Planes of the body",
        "list": [
          "Sagittal plane — divides the body into right and left parts (a midsagittal cut passes through the midline).",
          "Coronal (frontal) plane — divides the body into anterior and posterior parts.",
          "Transverse (horizontal) plane — divides the body into superior and inferior parts."
        ]
      },
      {
        "h": "Body cavities and the abdominopelvic regions",
        "p": "The body has a dorsal cavity (cranial and spinal) and a ventral cavity (thoracic and abdominopelvic). The pelvic cavity, the lower part of the abdominopelvic cavity, contains the uterus, ovaries, uterine tubes, bladder and rectum — the organs central to childbearing. The gravid (pregnant) uterus eventually rises out of the pelvis into the abdominal cavity, displacing other organs."
      },
      {
        "h": "Homeostasis",
        "p": "Homeostasis is the maintenance of a relatively stable internal environment (temperature, pH, blood glucose, fluid and electrolytes) despite changes outside. It works mainly through negative feedback: a change is detected by a receptor, a control centre responds, and an effector reverses the change. Pregnancy resets many homeostatic 'set points' (for example, blood volume and respiration rise), and the midwife monitors these adapted normals."
      },
      {
        "h": "Positive feedback in childbirth",
        "p": "Occasionally the body uses positive feedback, where a change drives further change in the same direction until an end point is reached. Two classic midwifery examples are the release of oxytocin during labour (stretching of the cervix stimulates more oxytocin and stronger contractions until the baby is born) and the let-down (milk ejection) reflex during breastfeeding.",
        "figure": {
          "caption": "Negative feedback restores a set point (e.g. body temperature); positive feedback amplifies a change to an end point (e.g. labour contractions).",
          "svg": "<svg viewBox=\"0 0 560 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Negative versus positive feedback loops.\"><rect x=\"15\" y=\"20\" width=\"255\" height=\"160\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"142\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#831843\">Negative feedback</text><text x=\"142\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Change detected</text><text x=\"142\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8595;</text><text x=\"142\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Body REVERSES it</text><text x=\"142\" y=\"136\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8595;</text><text x=\"142\" y=\"158\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#15803D\">Set point restored</text><rect x=\"290\" y=\"20\" width=\"255\" height=\"160\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"417\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#831843\">Positive feedback</text><text x=\"417\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Cervix stretches</text><text x=\"417\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8595;</text><text x=\"417\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">More oxytocin &amp; contractions</text><text x=\"417\" y=\"136\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8595;</text><text x=\"417\" y=\"158\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#BE185D\">End point: birth of baby</text></svg>"
        }
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Define anatomy and physiology and explain their significance for the practising midwife.",
      "Describe the levels of structural organisation of the human body with examples from the reproductive system.",
      "Explain the anatomical position and list the main directional terms and body planes.",
      "Define homeostasis and explain negative feedback using a maternal example.",
      "Give two examples of positive feedback in midwifery and explain how each works."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The study of the FUNCTION of body parts is called:",
        "options": [
          "Anatomy",
          "Physiology",
          "Pathology",
          "Histology"
        ],
        "answer": 1,
        "rationale": "Physiology is the study of how body parts work; anatomy studies their structure."
      },
      {
        "type": "mcq",
        "q": "Which sequence shows the levels of organisation from simplest to most complex?",
        "options": [
          "Organ → tissue → cell → system",
          "Cell → tissue → organ → system",
          "Tissue → cell → system → organ",
          "System → organ → cell → tissue"
        ],
        "answer": 1,
        "rationale": "Cells form tissues, tissues form organs, and organs form organ systems."
      },
      {
        "type": "mcq",
        "q": "In the anatomical position, the palms face:",
        "options": [
          "Backward",
          "Toward the body",
          "Forward",
          "Downward"
        ],
        "answer": 2,
        "rationale": "The anatomical position has the body erect, facing forward, with arms at the sides and palms facing forward."
      },
      {
        "type": "mcq",
        "q": "The fundus of the uterus is ____ to the cervix.",
        "options": [
          "inferior",
          "superior",
          "lateral",
          "distal"
        ],
        "answer": 1,
        "rationale": "The fundus is the upper part, so it lies superior (above) the cervix."
      },
      {
        "type": "mcq",
        "q": "A plane that divides the body into anterior and posterior parts is the:",
        "options": [
          "Sagittal plane",
          "Transverse plane",
          "Coronal (frontal) plane",
          "Oblique plane"
        ],
        "answer": 2,
        "rationale": "The coronal/frontal plane separates front (anterior) from back (posterior)."
      },
      {
        "type": "mcq",
        "q": "The uterus, ovaries and bladder lie mainly within the:",
        "options": [
          "Thoracic cavity",
          "Cranial cavity",
          "Pelvic cavity",
          "Spinal cavity"
        ],
        "answer": 2,
        "rationale": "These reproductive and urinary organs occupy the pelvic cavity, the lower abdominopelvic cavity."
      },
      {
        "type": "mcq",
        "q": "Homeostasis is BEST described as:",
        "options": [
          "Constant rapid change of internal conditions",
          "Maintaining a stable internal environment",
          "Growth of new tissue",
          "Loss of body heat"
        ],
        "answer": 1,
        "rationale": "Homeostasis keeps the internal environment relatively constant despite external change."
      },
      {
        "type": "mcq",
        "q": "Which is an example of POSITIVE feedback in midwifery?",
        "options": [
          "Regulation of body temperature",
          "Control of blood glucose",
          "Oxytocin release in labour",
          "Maintenance of blood pH"
        ],
        "answer": 2,
        "rationale": "Oxytocin release in labour amplifies contractions until birth — a positive feedback loop."
      },
      {
        "type": "mcq",
        "q": "The bladder lies ____ to the uterus.",
        "options": [
          "posterior",
          "anterior",
          "superior",
          "lateral"
        ],
        "answer": 1,
        "rationale": "The bladder sits in front of (anterior to) the uterus."
      },
      {
        "type": "mcq",
        "q": "The smallest living structural and functional unit of the body is the:",
        "options": [
          "Tissue",
          "Organ",
          "Cell",
          "Molecule"
        ],
        "answer": 2,
        "rationale": "The cell is the smallest unit that is alive; molecules are at the chemical level below it."
      },
      {
        "type": "fill",
        "q": "The maintenance of a stable internal environment is called ____.",
        "accept": [
          "homeostasis"
        ],
        "rationale": "Homeostasis keeps internal conditions within narrow limits, mostly by negative feedback."
      },
      {
        "type": "fill",
        "q": "The ____ plane divides the body into right and left parts.",
        "accept": [
          "sagittal",
          "median sagittal",
          "midsagittal"
        ],
        "rationale": "A sagittal plane separates the body into right and left portions."
      }
    ]
  },
  {
    "id": "anp-02-cell",
    "unit": "Unit 1 · Foundations of Anatomy & Physiology",
    "title": "The Cell: Structure, Function & Division",
    "readMinutes": 16,
    "summary": "Structure of the human cell and its organelles, transport across the cell membrane, cell metabolism, and cell division (mitosis and meiosis) as the basis of growth and gamete formation.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "The cell as the basic unit of life",
        "p": "The cell is the smallest living unit of the body. All the tissues and organs of the mother and the developing baby are built from cells. A typical human cell has three main parts: the cell (plasma) membrane, the cytoplasm with its organelles, and the nucleus. The fertilised egg (zygote) is a single cell that divides repeatedly to form the whole fetus."
      },
      {
        "h": "The cell membrane",
        "p": "The plasma membrane is a phospholipid bilayer with embedded proteins. It is selectively permeable — it controls what enters and leaves the cell, separating the internal environment from the outside. This selective control is vital for the placenta, where substances pass between the mother and the fetus."
      },
      {
        "h": "Cytoplasm and organelles",
        "list": [
          "Mitochondria — the 'powerhouse', producing energy (ATP) by aerobic respiration; abundant in active cells such as muscle.",
          "Ribosomes — make proteins.",
          "Endoplasmic reticulum (ER) — rough ER (with ribosomes) makes proteins; smooth ER makes lipids and steroids (e.g. hormones).",
          "Golgi apparatus — packages and exports secretions such as hormones and enzymes.",
          "Lysosomes — contain enzymes that digest worn-out parts and foreign material.",
          "Nucleus — the control centre, containing DNA (genetic material) arranged as chromosomes."
        ]
      },
      {
        "h": "Chromosomes and the genetic basis of inheritance",
        "p": "Human body (somatic) cells contain 46 chromosomes in 23 pairs — this is the diploid number. One pair are the sex chromosomes: XX in a female and XY in a male. Gametes (the ovum and sperm) carry only 23 chromosomes — the haploid number — so that fertilisation restores 46. The sperm determines the sex of the baby because it carries either an X or a Y chromosome."
      },
      {
        "h": "Transport across the cell membrane",
        "list": [
          "Diffusion — movement of substances from high to low concentration (e.g. oxygen and carbon dioxide across the placenta).",
          "Osmosis — diffusion of water across a semipermeable membrane.",
          "Facilitated diffusion — diffusion with the help of carrier proteins (e.g. glucose to the fetus).",
          "Active transport — movement against the concentration gradient using energy (e.g. iron and calcium to the fetus).",
          "Endocytosis and exocytosis — bulk transport of large particles into or out of the cell (e.g. transfer of maternal antibodies)."
        ]
      },
      {
        "h": "Mitosis — growth and repair",
        "p": "Mitosis is the division of a body cell into two identical daughter cells, each with the full 46 chromosomes. It is the basis of growth, tissue repair and the rapid increase in cell number after fertilisation. The stages are prophase, metaphase, anaphase and telophase."
      },
      {
        "h": "Meiosis — formation of gametes",
        "p": "Meiosis is a special division that occurs only in the ovaries and testes to produce gametes. It involves two divisions and halves the chromosome number from 46 to 23 (haploid). It also reshuffles genetic material (through crossing over and independent assortment), giving each ovum and sperm a unique combination of genes — the reason no two children (except identical twins) are alike.",
        "figure": {
          "caption": "Mitosis keeps the chromosome number at 46 for growth; meiosis halves it to 23 to make ova and sperm.",
          "svg": "<svg viewBox=\"0 0 560 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Comparison of mitosis and meiosis chromosome numbers.\"><rect x=\"15\" y=\"20\" width=\"255\" height=\"140\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"142\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#831843\">MITOSIS</text><text x=\"142\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#7C2D12\">1 cell (46) &#8594; 2 cells (46)</text><text x=\"142\" y=\"96\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Identical daughter cells</text><text x=\"142\" y=\"122\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#15803D\">Growth &amp; repair</text><rect x=\"290\" y=\"20\" width=\"255\" height=\"140\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"417\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#831843\">MEIOSIS</text><text x=\"417\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" fill=\"#7C2D12\">1 cell (46) &#8594; 4 cells (23)</text><text x=\"417\" y=\"96\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Genetically unique gametes</text><text x=\"417\" y=\"122\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#BE185D\">Forms ova &amp; sperm</text></svg>"
        }
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Draw and label a typical human cell and state the function of any four organelles.",
      "Describe the structure of the cell membrane and explain how substances cross it.",
      "Differentiate between mitosis and meiosis and state the importance of each.",
      "Explain how the number of chromosomes is restored to 46 at fertilisation.",
      "Describe four methods of transport across the cell membrane with placental examples."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The 'powerhouse' of the cell that produces energy (ATP) is the:",
        "options": [
          "Nucleus",
          "Mitochondrion",
          "Ribosome",
          "Lysosome"
        ],
        "answer": 1,
        "rationale": "Mitochondria carry out aerobic respiration, producing most of the cell's ATP."
      },
      {
        "type": "mcq",
        "q": "How many chromosomes are present in a normal human body cell?",
        "options": [
          "23",
          "46",
          "44",
          "48"
        ],
        "answer": 1,
        "rationale": "Somatic cells are diploid, with 46 chromosomes in 23 pairs."
      },
      {
        "type": "mcq",
        "q": "The chromosome number of a mature ovum or sperm is:",
        "options": [
          "46",
          "92",
          "23",
          "22"
        ],
        "answer": 2,
        "rationale": "Gametes are haploid (23) so that fertilisation restores the diploid number of 46."
      },
      {
        "type": "mcq",
        "q": "The sex chromosome combination of a normal female is:",
        "options": [
          "XY",
          "XX",
          "YY",
          "XO"
        ],
        "answer": 1,
        "rationale": "A female has two X chromosomes (XX); a male is XY."
      },
      {
        "type": "mcq",
        "q": "Movement of water across a semipermeable membrane is called:",
        "options": [
          "Active transport",
          "Osmosis",
          "Phagocytosis",
          "Exocytosis"
        ],
        "answer": 1,
        "rationale": "Osmosis is the diffusion of water across a semipermeable membrane."
      },
      {
        "type": "mcq",
        "q": "Transfer of iron and calcium to the fetus against a concentration gradient is by:",
        "options": [
          "Simple diffusion",
          "Osmosis",
          "Active transport",
          "Filtration"
        ],
        "answer": 2,
        "rationale": "Active transport moves substances against the gradient using energy (ATP)."
      },
      {
        "type": "mcq",
        "q": "Cell division that produces two genetically IDENTICAL daughter cells is:",
        "options": [
          "Meiosis",
          "Mitosis",
          "Fertilisation",
          "Crossing over"
        ],
        "answer": 1,
        "rationale": "Mitosis produces two identical diploid daughter cells for growth and repair."
      },
      {
        "type": "mcq",
        "q": "Meiosis occurs in the:",
        "options": [
          "Liver and kidney",
          "Skin and muscle",
          "Ovaries and testes",
          "Heart and lungs"
        ],
        "answer": 2,
        "rationale": "Meiosis (gamete formation) takes place only in the gonads — ovaries and testes."
      },
      {
        "type": "mcq",
        "q": "The structure that controls the cell and contains DNA is the:",
        "options": [
          "Cell membrane",
          "Cytoplasm",
          "Nucleus",
          "Golgi apparatus"
        ],
        "answer": 2,
        "rationale": "The nucleus is the control centre and holds the genetic material (DNA)."
      },
      {
        "type": "mcq",
        "q": "The sex of the baby is determined by the chromosome carried in the:",
        "options": [
          "Ovum",
          "Sperm",
          "Placenta",
          "Amniotic fluid"
        ],
        "answer": 1,
        "rationale": "The sperm carries either an X or a Y chromosome, so it determines the baby's sex."
      },
      {
        "type": "fill",
        "q": "The diffusion of water across a semipermeable membrane is called ____.",
        "accept": [
          "osmosis"
        ],
        "rationale": "Osmosis is water movement down its concentration gradient across a semipermeable membrane."
      },
      {
        "type": "fill",
        "q": "Cell division that halves the chromosome number to form gametes is called ____.",
        "accept": [
          "meiosis"
        ],
        "rationale": "Meiosis reduces 46 to 23 chromosomes to form ova and sperm."
      }
    ]
  },
  {
    "id": "anp-03-tissues",
    "unit": "Unit 1 · Foundations of Anatomy & Physiology",
    "title": "Tissues, Membranes & Glands",
    "readMinutes": 16,
    "summary": "The four primary tissue types, the structure and roles of membranes, and exocrine and endocrine glands, with examples drawn from the reproductive tract and the changes of pregnancy.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is a tissue?",
        "p": "A tissue is a group of similar cells, with their surrounding material, that work together to perform a particular function. There are four primary tissue types: epithelial, connective, muscle and nervous tissue. The reproductive organs are built from all four — for example, the uterus has an epithelial lining (endometrium), a thick muscle layer (myometrium) and a rich blood and nerve supply."
      },
      {
        "h": "Epithelial tissue",
        "p": "Epithelium covers body surfaces, lines cavities and forms glands. It protects, secretes and absorbs. Examples in midwifery include the simple columnar lining of the uterine tubes (with cilia that move the ovum), the stratified squamous lining of the vagina, and the secretory epithelium of the breast that makes milk."
      },
      {
        "h": "Connective tissue",
        "p": "Connective tissue supports, binds and protects other tissues, and is the most widespread tissue type. It includes loose and dense fibrous tissue, cartilage, bone, blood and adipose (fat) tissue. The pelvic ligaments are dense connective tissue; under the influence of the hormone relaxin they soften in pregnancy to allow slight movement of the pelvic joints."
      },
      {
        "h": "Muscle tissue",
        "list": [
          "Skeletal (voluntary, striated) muscle — moves the skeleton; used in maternal pushing in the second stage of labour.",
          "Cardiac muscle — found only in the heart wall; contracts rhythmically and automatically.",
          "Smooth (involuntary) muscle — found in the walls of hollow organs; the myometrium of the uterus is smooth muscle that contracts in labour and after birth to control bleeding."
        ]
      },
      {
        "h": "Nervous tissue",
        "p": "Nervous tissue is made of neurones, which carry electrical impulses, and supporting neuroglia. It detects changes and coordinates rapid responses. Nervous tissue carries the pain of labour and triggers reflexes such as the milk-ejection reflex during breastfeeding."
      },
      {
        "h": "Membranes",
        "list": [
          "Mucous membranes — line cavities that open to the exterior and secrete mucus (e.g. the lining of the uterus, vagina and respiratory tract).",
          "Serous membranes — line closed cavities and cover organs, secreting fluid that reduces friction (e.g. the peritoneum, which covers the uterus and other pelvic organs).",
          "Synovial membranes — line freely movable joints and secrete synovial fluid.",
          "Cutaneous membrane — the skin."
        ]
      },
      {
        "h": "Glands: exocrine and endocrine",
        "p": "A gland is a cell or group of cells that makes and releases a secretion. Exocrine glands release their secretion through a duct onto a surface (e.g. sweat glands, salivary glands, and the milk-producing glands of the breast). Endocrine glands are ductless and release hormones directly into the blood (e.g. the pituitary, thyroid and ovaries). Many reproductive functions depend on endocrine secretions such as oestrogen, progesterone and oxytocin.",
        "figure": {
          "caption": "Exocrine glands secrete through a duct onto a surface; endocrine glands are ductless and secrete hormones into the blood.",
          "svg": "<svg viewBox=\"0 0 560 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Exocrine versus endocrine glands.\"><rect x=\"15\" y=\"20\" width=\"255\" height=\"130\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"142\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#831843\">EXOCRINE</text><text x=\"142\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Has a DUCT</text><text x=\"142\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Secretes onto a surface</text><text x=\"142\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#15803D\">e.g. milk, sweat, saliva</text><rect x=\"290\" y=\"20\" width=\"255\" height=\"130\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"417\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#831843\">ENDOCRINE</text><text x=\"417\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Ductless</text><text x=\"417\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Secretes into the BLOOD</text><text x=\"417\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#BE185D\">e.g. oestrogen, oxytocin</text></svg>"
        }
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Name the four primary tissue types and give a reproductive example of each.",
      "Differentiate between exocrine and endocrine glands with examples.",
      "Describe the types of body membranes and their functions.",
      "Explain the role of smooth muscle in the uterus during and after labour.",
      "Describe the structure of the uterine wall in terms of its tissue layers."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The tissue that COVERS surfaces and lines cavities is:",
        "options": [
          "Connective tissue",
          "Epithelial tissue",
          "Muscle tissue",
          "Nervous tissue"
        ],
        "answer": 1,
        "rationale": "Epithelial tissue covers body surfaces, lines cavities and forms glands."
      },
      {
        "type": "mcq",
        "q": "The myometrium of the uterus is made of:",
        "options": [
          "Skeletal muscle",
          "Cardiac muscle",
          "Smooth muscle",
          "Cartilage"
        ],
        "answer": 2,
        "rationale": "The myometrium is involuntary (smooth) muscle that contracts in labour and after birth."
      },
      {
        "type": "mcq",
        "q": "Which is the MOST widespread tissue type, supporting and binding other tissues?",
        "options": [
          "Epithelial",
          "Connective",
          "Nervous",
          "Muscle"
        ],
        "answer": 1,
        "rationale": "Connective tissue (including blood, bone, cartilage and fat) is the most abundant and supportive."
      },
      {
        "type": "mcq",
        "q": "An endocrine gland is BEST described as one that:",
        "options": [
          "Has a duct",
          "Secretes onto the skin surface",
          "Is ductless and secretes into the blood",
          "Produces only mucus"
        ],
        "answer": 2,
        "rationale": "Endocrine glands are ductless and release hormones directly into the bloodstream."
      },
      {
        "type": "mcq",
        "q": "The peritoneum that covers the pelvic organs is an example of a:",
        "options": [
          "Mucous membrane",
          "Serous membrane",
          "Synovial membrane",
          "Cutaneous membrane"
        ],
        "answer": 1,
        "rationale": "Serous membranes line closed cavities and cover organs, reducing friction."
      },
      {
        "type": "mcq",
        "q": "The milk-producing glands of the breast are:",
        "options": [
          "Endocrine glands",
          "Exocrine glands",
          "Serous membranes",
          "Lymph nodes"
        ],
        "answer": 1,
        "rationale": "The breast's milk glands secrete through ducts onto a surface, so they are exocrine glands."
      },
      {
        "type": "mcq",
        "q": "Cilia that help move the ovum along the uterine tube are found on:",
        "options": [
          "Smooth muscle",
          "Columnar epithelium",
          "Connective tissue",
          "Nervous tissue"
        ],
        "answer": 1,
        "rationale": "The tube is lined by ciliated columnar epithelium that wafts the ovum toward the uterus."
      },
      {
        "type": "mcq",
        "q": "The hormone that softens pelvic ligaments (connective tissue) in pregnancy is:",
        "options": [
          "Insulin",
          "Relaxin",
          "Thyroxine",
          "Adrenaline"
        ],
        "answer": 1,
        "rationale": "Relaxin softens ligaments and the symphysis pubis, allowing slight pelvic give in labour."
      },
      {
        "type": "mcq",
        "q": "Which tissue carries the electrical impulses of the milk-ejection reflex?",
        "options": [
          "Epithelial tissue",
          "Connective tissue",
          "Nervous tissue",
          "Adipose tissue"
        ],
        "answer": 2,
        "rationale": "Nervous tissue conducts impulses that trigger reflexes such as milk ejection."
      },
      {
        "type": "mcq",
        "q": "Mucous membranes are found lining the:",
        "options": [
          "Heart wall",
          "Knee joint",
          "Vagina and uterus",
          "Outer skin"
        ],
        "answer": 2,
        "rationale": "Mucous membranes line cavities open to the exterior, including the reproductive tract."
      },
      {
        "type": "fill",
        "q": "Glands that secrete hormones directly into the blood are called ____ glands.",
        "accept": [
          "endocrine"
        ],
        "rationale": "Endocrine glands are ductless and release hormones into the bloodstream."
      },
      {
        "type": "fill",
        "q": "The muscular middle layer of the uterine wall is the ____.",
        "accept": [
          "myometrium"
        ],
        "rationale": "The myometrium is the thick smooth-muscle layer that contracts in labour."
      }
    ]
  },
  {
    "id": "anp-04-skeletal",
    "unit": "Unit 2 · Support, Movement & the Pelvis",
    "title": "The Skeletal System: Bones, Joints & Changes in Pregnancy",
    "readMinutes": 16,
    "summary": "Functions and structure of bone, classification of bones and joints, cartilage and ligaments, and the changes in the maternal skeleton during pregnancy.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Functions of the skeleton",
        "list": [
          "Support — provides the framework that supports the body and the growing uterus.",
          "Protection — the bony pelvis protects the pelvic organs, and in pregnancy it cradles and protects the fetus.",
          "Movement — bones act as levers for muscles, allowing posture and walking.",
          "Mineral store — stores calcium and phosphorus, drawn on for the fetal skeleton in pregnancy.",
          "Blood cell formation — red bone marrow makes red and white blood cells and platelets."
        ]
      },
      {
        "h": "Structure of bone",
        "p": "Bone is a connective tissue made of cells (osteoblasts that build, osteocytes that maintain, and osteoclasts that break down bone) within a matrix of collagen and calcium salts. Compact bone is dense and forms the outer shell; spongy (cancellous) bone is lighter and contains red marrow. Long bones have a shaft (diaphysis) and ends (epiphyses), with the periosteum covering the surface."
      },
      {
        "h": "Classification of bones by shape",
        "list": [
          "Long bones — longer than wide (femur, humerus).",
          "Short bones — roughly cube-shaped (wrist and ankle bones).",
          "Flat bones — thin and often curved (skull bones, sternum, the ilium of the pelvis).",
          "Irregular bones — complex shapes (vertebrae, the sacrum).",
          "Sesamoid bones — small bones within tendons (the patella)."
        ]
      },
      {
        "h": "The axial and appendicular skeleton",
        "p": "The skeleton has two parts. The axial skeleton is the central axis — the skull, vertebral column and thoracic cage. The appendicular skeleton is the limbs and the girdles (shoulder and pelvic girdles) that attach them. The pelvic girdle is of special importance to the midwife because the baby must pass through it during birth."
      },
      {
        "h": "Cartilage and ligaments",
        "p": "Cartilage is a firm but flexible connective tissue. Hyaline cartilage covers the ends of bones at joints and forms much of the fetal skeleton before it ossifies. Fibrocartilage forms shock-absorbing structures such as the intervertebral discs and the pad of the symphysis pubis. Ligaments are tough bands of fibrous connective tissue that join bone to bone and stabilise joints."
      },
      {
        "h": "Classification of joints",
        "list": [
          "Fibrous (fixed) joints — almost no movement (the sutures of the fetal skull).",
          "Cartilaginous (slightly movable) joints — limited movement (the symphysis pubis and sacro-iliac joints of the pelvis).",
          "Synovial (freely movable) joints — wide range of movement, with a joint cavity and synovial fluid (the hip and knee)."
        ]
      },
      {
        "h": "Changes in the maternal skeleton during pregnancy",
        "p": "Under the influence of relaxin and progesterone, the ligaments of the pelvis soften and relax, and the cartilage of the symphysis pubis and sacro-iliac joints loosens. This gives slightly more room at birth but can cause pelvic girdle pain and a waddling gait. The growing uterus shifts the woman's centre of gravity forward, increasing the lumbar curve (lordosis) and often causing backache. The midwife advises on posture, gentle exercise, and adequate calcium and vitamin D."
      },
      {
        "h": "Calcium balance in pregnancy",
        "p": "The fetal skeleton needs a large amount of calcium, especially in the third trimester. Maternal intestinal absorption of calcium increases (helped by vitamin D) to meet this demand, so that the mother's own bones are normally protected. The midwife encourages a calcium-rich diet (milk, dairy, green vegetables, small fish with bones) and, where indicated, supplements."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "List and explain five functions of the skeletal system.",
      "Classify joints with examples relevant to childbirth.",
      "Describe the structure of a typical long bone.",
      "Explain the changes that occur in the maternal skeleton during pregnancy.",
      "Discuss calcium balance in pregnancy and the midwife's health-education role."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Which bone cell BREAKS DOWN bone tissue?",
        "options": [
          "Osteoblast",
          "Osteocyte",
          "Osteoclast",
          "Chondrocyte"
        ],
        "answer": 2,
        "rationale": "Osteoclasts resorb (break down) bone; osteoblasts build it and osteocytes maintain it."
      },
      {
        "type": "mcq",
        "q": "The symphysis pubis is an example of a:",
        "options": [
          "Synovial joint",
          "Cartilaginous (slightly movable) joint",
          "Fibrous (fixed) joint",
          "Ball-and-socket joint"
        ],
        "answer": 1,
        "rationale": "The symphysis pubis is a slightly movable cartilaginous joint with a fibrocartilage pad."
      },
      {
        "type": "mcq",
        "q": "Red bone marrow is the site of:",
        "options": [
          "Calcium storage only",
          "Blood cell formation",
          "Fat storage only",
          "Hormone production"
        ],
        "answer": 1,
        "rationale": "Red marrow produces red cells, white cells and platelets (haemopoiesis)."
      },
      {
        "type": "mcq",
        "q": "The hormone mainly responsible for softening the pelvic joints in pregnancy is:",
        "options": [
          "Relaxin",
          "Insulin",
          "Thyroxine",
          "Cortisol"
        ],
        "answer": 0,
        "rationale": "Relaxin loosens pelvic ligaments and the symphysis pubis to allow slight give in labour."
      },
      {
        "type": "mcq",
        "q": "The sutures of the fetal skull are which type of joint?",
        "options": [
          "Synovial",
          "Cartilaginous",
          "Fibrous",
          "Pivot"
        ],
        "answer": 2,
        "rationale": "Skull sutures are fibrous joints; in the fetus they allow moulding during birth."
      },
      {
        "type": "mcq",
        "q": "Which is part of the AXIAL skeleton?",
        "options": [
          "Femur",
          "Vertebral column",
          "Humerus",
          "Pelvic girdle"
        ],
        "answer": 1,
        "rationale": "The axial skeleton is the skull, vertebral column and thoracic cage."
      },
      {
        "type": "mcq",
        "q": "The increased forward lumbar curve in late pregnancy is called:",
        "options": [
          "Kyphosis",
          "Scoliosis",
          "Lordosis",
          "Spondylosis"
        ],
        "answer": 2,
        "rationale": "The shifted centre of gravity exaggerates the lumbar curve (lordosis), often causing backache."
      },
      {
        "type": "mcq",
        "q": "Fibrocartilage is found in the:",
        "options": [
          "Outer ear",
          "Intervertebral discs",
          "Trachea",
          "Nasal septum"
        ],
        "answer": 1,
        "rationale": "Fibrocartilage forms shock-absorbing structures such as the intervertebral discs and symphysis pubis."
      },
      {
        "type": "mcq",
        "q": "The fetal skeleton draws calcium mainly from:",
        "options": [
          "Amniotic fluid",
          "The maternal blood and stores",
          "The placenta only",
          "Fetal urine"
        ],
        "answer": 1,
        "rationale": "Calcium crosses the placenta from the maternal blood; absorption rises to protect the mother's bones."
      },
      {
        "type": "mcq",
        "q": "Tough fibrous bands that join bone to bone are:",
        "options": [
          "Tendons",
          "Ligaments",
          "Cartilage",
          "Fascia"
        ],
        "answer": 1,
        "rationale": "Ligaments connect bone to bone; tendons connect muscle to bone."
      },
      {
        "type": "fill",
        "q": "The slightly movable joint at the front of the pelvis is the ____.",
        "accept": [
          "symphysis pubis",
          "pubic symphysis"
        ],
        "rationale": "The symphysis pubis is the cartilaginous joint joining the two pubic bones."
      },
      {
        "type": "fill",
        "q": "The hormone that softens ligaments and the symphysis pubis in pregnancy is ____.",
        "accept": [
          "relaxin"
        ],
        "rationale": "Relaxin increases the give of the pelvic joints to assist birth."
      }
    ]
  },
  {
    "id": "anp-05-bony-pelvis",
    "unit": "Unit 2 · Support, Movement & the Pelvis",
    "title": "The Bony Pelvis: Planes, Diameters & Pelvic Types",
    "readMinutes": 18,
    "summary": "Detailed anatomy of the female bony pelvis for midwifery — the pelvic bones, true and false pelvis, the brim/cavity/outlet with their diameters, pelvic inclination, and the four pelvic types and their effect on labour.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Bones of the pelvis",
        "p": "The pelvis is formed by four bones: two innominate (hip) bones, the sacrum, and the coccyx. Each innominate bone is made of three fused parts — the ilium (the large flared upper part), the ischium (the lower, weight-bearing part with the ischial tuberosity and the ischial spine), and the pubis (at the front). The two pubic bones meet at the symphysis pubis; the innominate bones join the sacrum at the sacro-iliac joints behind."
      },
      {
        "h": "The true and false pelvis",
        "p": "The pelvis is divided by the pelvic brim into two parts. The false (greater) pelvis lies above the brim; it is shallow, formed by the flare of the iliac bones, and supports the gravid uterus and abdominal organs. The true (lesser) pelvis lies below the brim; it is the bony canal through which the fetus must pass during birth. The midwife's interest is mainly in the true pelvis."
      },
      {
        "h": "The pelvic brim (inlet)",
        "p": "The brim is the upper boundary of the true pelvis. It is bounded by the sacral promontory behind, the iliopectineal lines at the sides, and the upper border of the symphysis pubis in front. In a normal gynaecoid pelvis the brim is rounded or slightly oval. Its diameters are important for engagement of the fetal head.",
        "list": [
          "Anteroposterior (true conjugate) — about 11 cm, from sacral promontory to the upper inner border of the symphysis pubis.",
          "Oblique diameter — about 12 cm, from one sacro-iliac joint to the opposite iliopectineal eminence.",
          "Transverse diameter — about 13 cm, the widest distance across the brim."
        ]
      },
      {
        "h": "Conjugates of the brim",
        "p": "Three antero-posterior measurements at the brim are described. The anatomical (true) conjugate is about 11 cm. The obstetric conjugate (the shortest and most important, from the sacral promontory to the most projecting inner point of the symphysis) is about 10.5 cm and is the real space available for the fetal head. The diagonal conjugate (from the lower border of the symphysis to the sacral promontory, about 12.5 cm) can be estimated on vaginal examination to assess the brim."
      },
      {
        "h": "The pelvic cavity and outlet",
        "p": "The cavity is the curved canal between the brim and the outlet; it is almost round and its diameters are about 12 cm in all directions, giving the fetus room to rotate. The outlet is the lower boundary, bounded by the lower border of the symphysis in front, the ischial tuberosities at the sides, and the tip of the sacrum/coccyx behind. The anteroposterior diameter of the outlet is about 13 cm and the transverse (between the ischial tuberosities) about 11 cm. The ischial spines, which project into the cavity, are the landmark for assessing descent (station) of the fetal head.",
        "figure": {
          "caption": "Approximate diameters of the female pelvis: brim, cavity and outlet (gynaecoid type).",
          "svg": "<svg viewBox=\"0 0 560 220\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diameters of the pelvic brim, cavity and outlet.\"><rect x=\"20\" y=\"20\" width=\"170\" height=\"180\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"105\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">BRIM</text><text x=\"105\" y=\"74\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">AP (true) 11 cm</text><text x=\"105\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Oblique 12 cm</text><text x=\"105\" y=\"122\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Transverse 13 cm</text><text x=\"105\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">Obstetric conj. 10.5 cm</text><rect x=\"200\" y=\"20\" width=\"160\" height=\"180\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"280\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">CAVITY</text><text x=\"280\" y=\"78\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Almost round</text><text x=\"280\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">~12 cm in all</text><text x=\"280\" y=\"126\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">diameters</text><text x=\"280\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">Allows rotation</text><rect x=\"370\" y=\"20\" width=\"170\" height=\"180\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"455\" y=\"44\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">OUTLET</text><text x=\"455\" y=\"78\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">AP 13 cm</text><text x=\"455\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Transverse 11 cm</text><text x=\"455\" y=\"138\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">Ischial spines =</text><text x=\"455\" y=\"156\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">station landmark</text></svg>"
        }
      },
      {
        "h": "Pelvic inclination and axis",
        "p": "When a woman stands, the pelvis is tilted: the brim makes an angle of about 55–60 degrees with the horizontal and the outlet about 15 degrees. The curved line joining the centres of the brim, cavity and outlet is the pelvic axis (the curve of Carus); the fetus follows this curved path during birth, which is why the head descends, then turns upward to be born. Understanding this curve guides the midwife in positioning and in delivery technique."
      },
      {
        "h": "The four pelvic types (Caldwell–Moloy)",
        "list": [
          "Gynaecoid — the typical female pelvis (about half of women); rounded brim, generous cavity, blunt ischial spines, wide pubic arch — most favourable for vaginal birth.",
          "Android — male/funnel-shaped; heart-shaped brim, prominent ischial spines, narrow pubic arch — associated with deep transverse arrest and difficult labour.",
          "Anthropoid — long oval brim with a large anteroposterior diameter; favours occipito-posterior position; birth often possible.",
          "Platypelloid — flat, with a wide transverse but short anteroposterior brim; the head may have difficulty engaging."
        ]
      },
      {
        "h": "Clinical importance for the midwife",
        "p": "Pelvic shape and size influence whether labour is likely to be straightforward. A small or abnormally shaped pelvis (contracted pelvis) may cause cephalo-pelvic disproportion (CPD), obstructed labour and the need for caesarean birth. The midwife assesses the pelvis through history (e.g. previous difficult births, short stature, rickets), abdominal and vaginal examination, and careful monitoring of descent in labour, referring promptly when progress is poor."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the bones that form the female pelvis and the joints between them.",
      "Differentiate between the true and false pelvis and state the importance of each.",
      "Describe the diameters of the pelvic brim and explain the obstetric conjugate.",
      "Name and describe the four types of pelvis and their effect on labour.",
      "Explain the clinical importance of pelvic assessment for the midwife."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The female pelvis is formed by the two innominate bones, the coccyx and the:",
        "options": [
          "Lumbar vertebrae",
          "Sacrum",
          "Femur",
          "Sternum"
        ],
        "answer": 1,
        "rationale": "The pelvis = two innominate (hip) bones + sacrum + coccyx."
      },
      {
        "type": "mcq",
        "q": "Each innominate bone is formed by fusion of the ilium, ischium and:",
        "options": [
          "Sacrum",
          "Pubis",
          "Coccyx",
          "Femur"
        ],
        "answer": 1,
        "rationale": "The three fused parts of the innominate bone are the ilium, ischium and pubis."
      },
      {
        "type": "mcq",
        "q": "The part of the pelvis through which the fetus passes during birth is the:",
        "options": [
          "False (greater) pelvis",
          "True (lesser) pelvis",
          "Iliac fossa",
          "Sacro-iliac joint"
        ],
        "answer": 1,
        "rationale": "The true pelvis below the brim forms the bony birth canal."
      },
      {
        "type": "mcq",
        "q": "The shortest and most important antero-posterior diameter at the brim is the:",
        "options": [
          "Anatomical conjugate",
          "Diagonal conjugate",
          "Obstetric conjugate",
          "Transverse diameter"
        ],
        "answer": 2,
        "rationale": "The obstetric conjugate (~10.5 cm) is the true space available for the fetal head at the brim."
      },
      {
        "type": "mcq",
        "q": "The widest diameter of the pelvic brim is the:",
        "options": [
          "Anteroposterior",
          "Oblique",
          "Transverse",
          "Diagonal"
        ],
        "answer": 2,
        "rationale": "At the brim the transverse diameter (~13 cm) is the widest."
      },
      {
        "type": "mcq",
        "q": "The bony landmark used to assess descent (station) of the fetal head is the:",
        "options": [
          "Sacral promontory",
          "Ischial spines",
          "Symphysis pubis",
          "Coccyx"
        ],
        "answer": 1,
        "rationale": "The ischial spines mark station 0; descent is measured relative to them."
      },
      {
        "type": "mcq",
        "q": "The pelvic type MOST favourable for normal vaginal birth is:",
        "options": [
          "Android",
          "Anthropoid",
          "Platypelloid",
          "Gynaecoid"
        ],
        "answer": 3,
        "rationale": "The gynaecoid pelvis has a rounded brim, roomy cavity and wide arch — best for birth."
      },
      {
        "type": "mcq",
        "q": "A funnel-shaped pelvis with prominent ischial spines and a narrow pubic arch is the:",
        "options": [
          "Gynaecoid",
          "Android",
          "Anthropoid",
          "Platypelloid"
        ],
        "answer": 1,
        "rationale": "The android (male-type) pelvis funnels and is associated with difficult labour."
      },
      {
        "type": "mcq",
        "q": "The diagonal conjugate is measured from the lower border of the symphysis to the:",
        "options": [
          "Ischial tuberosity",
          "Sacral promontory",
          "Coccyx tip",
          "Ischial spine"
        ],
        "answer": 1,
        "rationale": "The diagonal conjugate runs from the lower symphysis to the sacral promontory (~12.5 cm)."
      },
      {
        "type": "mcq",
        "q": "The curved path the fetus follows through the pelvis is the:",
        "options": [
          "Pelvic brim",
          "Pelvic axis (curve of Carus)",
          "Iliopectineal line",
          "Pubic arch"
        ],
        "answer": 1,
        "rationale": "The pelvic axis (curve of Carus) joins the centres of brim, cavity and outlet."
      },
      {
        "type": "fill",
        "q": "The pelvic brim divides the pelvis into the true pelvis and the ____ pelvis.",
        "accept": [
          "false",
          "greater"
        ],
        "rationale": "Above the brim is the false (greater) pelvis; below it is the true (lesser) pelvis."
      },
      {
        "type": "fill",
        "q": "The obstetric conjugate measures approximately ____ cm.",
        "accept": [
          "10.5",
          "10.5 cm",
          "10.5cm"
        ],
        "rationale": "The obstetric conjugate, the true space at the brim, is about 10.5 cm."
      }
    ]
  },
  {
    "id": "anp-06-muscular-pelvic-floor",
    "unit": "Unit 2 · Support, Movement & the Pelvis",
    "title": "The Muscular System & the Pelvic Floor",
    "readMinutes": 17,
    "summary": "Types and functions of muscle, the abdominal muscles used in labour, and detailed anatomy of the pelvic floor — its muscles, functions, role in birth, and the importance of pelvic floor exercises.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Types of muscle",
        "list": [
          "Skeletal (voluntary, striated) muscle — attached to bones; used in posture, walking and maternal pushing.",
          "Cardiac muscle — only in the heart; striated but involuntary and self-stimulating.",
          "Smooth (involuntary) muscle — in the walls of hollow organs such as the uterus, gut, blood vessels and bladder."
        ]
      },
      {
        "h": "Functions of muscle",
        "list": [
          "Movement of the body and of substances within it.",
          "Maintenance of posture and position.",
          "Stabilisation of joints.",
          "Production of heat (important for the newborn's temperature regulation through shivering in the adult).",
          "Support of pelvic and abdominal organs."
        ]
      },
      {
        "h": "Properties of muscle tissue",
        "p": "Muscle has four key properties: excitability (responds to a stimulus), contractility (shortens to produce force), extensibility (can be stretched, as the uterus stretches greatly in pregnancy), and elasticity (returns to its resting length, as the uterus does after birth — involution)."
      },
      {
        "h": "Abdominal muscles in childbearing",
        "p": "The anterior abdominal wall muscles (rectus abdominis, external and internal obliques, transversus abdominis) support the gravid uterus and are the muscles a woman uses for voluntary pushing (the secondary powers) in the second stage of labour. In pregnancy the two rectus muscles may separate at the midline (diastasis recti); the midwife checks for this postnatally and advises gentle progressive exercise."
      },
      {
        "h": "The pelvic floor",
        "p": "The pelvic floor is a muscular and fascial 'hammock' slung across the outlet of the bony pelvis. It is made up mainly of the levator ani muscles (pubococcygeus, iliococcygeus and ischiococcygeus) together with the coccygeus, covered by fascia. It has openings (hiatuses) for the urethra, the vagina and the rectum, and is reinforced below by the muscles of the perineum, including the perineal body — the wedge of muscle and fibrous tissue between the vagina and the anus."
      },
      {
        "h": "Functions of the pelvic floor",
        "list": [
          "Supports the pelvic organs — bladder, uterus and rectum — keeping them in position.",
          "Maintains continence by helping to control the urethral and anal sphincters.",
          "Resists rises in intra-abdominal pressure (coughing, lifting).",
          "Plays a key part in the mechanism of labour — its slope and resistance help the fetal head to flex and rotate.",
          "Contributes to sexual function."
        ]
      },
      {
        "h": "The pelvic floor in labour and birth",
        "p": "During the second stage, the descending fetal head distends and thins the pelvic floor and perineum. The midwife guards the perineum to allow gradual stretching and reduce the risk of tearing; a perineal tear or episiotomy may involve the perineal body. Overstretching or injury can later contribute to prolapse and incontinence. Careful, controlled birth of the head and good perineal care help to protect the pelvic floor.",
        "figure": {
          "caption": "The pelvic floor: a muscular hammock with openings for the urethra, vagina and rectum, supporting the pelvic organs.",
          "svg": "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Schematic of the pelvic floor and its openings.\"><ellipse cx=\"260\" cy=\"110\" rx=\"210\" ry=\"70\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2.5\"/><text x=\"260\" y=\"40\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#831843\">PELVIC FLOOR (levator ani)</text><circle cx=\"170\" cy=\"110\" r=\"16\" fill=\"#FDF2F8\" stroke=\"#831843\" stroke-width=\"2\"/><text x=\"170\" y=\"145\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">Urethra</text><circle cx=\"260\" cy=\"110\" r=\"22\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"260\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">Vagina</text><circle cx=\"355\" cy=\"110\" r=\"18\" fill=\"#FDF2F8\" stroke=\"#831843\" stroke-width=\"2\"/><text x=\"355\" y=\"147\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">Rectum</text><text x=\"260\" y=\"190\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">Supports bladder, uterus &amp; rectum; aids continence</text></svg>"
        }
      },
      {
        "h": "Pelvic floor exercises (Kegel exercises)",
        "p": "Pelvic floor exercises strengthen the levator ani and help to prevent and treat stress incontinence and prolapse. The woman tightens the muscles as if stopping the flow of urine or holding back wind, holds for a few seconds, then relaxes, repeating in sets several times a day. The midwife teaches these exercises antenatally and postnatally as a key part of health education."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Name the three types of muscle and give a midwifery example of each.",
      "Describe the structure of the pelvic floor and name its main muscles.",
      "List the functions of the pelvic floor.",
      "Explain how the pelvic floor is involved in labour and how it may be injured.",
      "Describe pelvic floor exercises and the midwife's role in teaching them."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The main muscle group forming the pelvic floor is the:",
        "options": [
          "Rectus abdominis",
          "Levator ani",
          "Gluteus maximus",
          "Psoas major"
        ],
        "answer": 1,
        "rationale": "The levator ani (with coccygeus) forms the muscular pelvic floor."
      },
      {
        "type": "mcq",
        "q": "The muscle used for voluntary pushing in the second stage of labour is mainly:",
        "options": [
          "Cardiac muscle",
          "Smooth muscle of the uterus",
          "Abdominal (skeletal) muscle",
          "Levator ani only"
        ],
        "answer": 2,
        "rationale": "Voluntary maternal effort uses the abdominal (skeletal) muscles — the secondary powers."
      },
      {
        "type": "mcq",
        "q": "The wedge of muscle and fibrous tissue between the vagina and anus is the:",
        "options": [
          "Perineal body",
          "Symphysis pubis",
          "Ischial spine",
          "Coccyx"
        ],
        "answer": 0,
        "rationale": "The perineal body is the central tendon of the perineum, often involved in tears."
      },
      {
        "type": "mcq",
        "q": "Which is NOT a function of the pelvic floor?",
        "options": [
          "Supporting pelvic organs",
          "Maintaining continence",
          "Pumping blood",
          "Aiding rotation of the fetal head"
        ],
        "answer": 2,
        "rationale": "Pumping blood is the heart's job; the pelvic floor supports organs, aids continence and labour."
      },
      {
        "type": "mcq",
        "q": "The property of muscle that lets the uterus stretch greatly in pregnancy is:",
        "options": [
          "Excitability",
          "Extensibility",
          "Contractility",
          "Conductivity"
        ],
        "answer": 1,
        "rationale": "Extensibility is the ability to be stretched; elasticity then returns it to shape after birth."
      },
      {
        "type": "mcq",
        "q": "Separation of the rectus abdominis muscles at the midline in pregnancy is called:",
        "options": [
          "Episiotomy",
          "Diastasis recti",
          "Prolapse",
          "Lordosis"
        ],
        "answer": 1,
        "rationale": "Diastasis recti is midline separation of the two rectus muscles."
      },
      {
        "type": "mcq",
        "q": "The pelvic floor has openings (hiatuses) for the urethra, rectum and:",
        "options": [
          "Ureter",
          "Vagina",
          "Appendix",
          "Sacrum"
        ],
        "answer": 1,
        "rationale": "The three midline openings are for the urethra, vagina and rectum."
      },
      {
        "type": "mcq",
        "q": "Pelvic floor (Kegel) exercises are taught mainly to prevent:",
        "options": [
          "Anaemia",
          "Stress incontinence and prolapse",
          "Backache",
          "Heartburn"
        ],
        "answer": 1,
        "rationale": "Strengthening the pelvic floor helps prevent and treat stress incontinence and prolapse."
      },
      {
        "type": "mcq",
        "q": "Heart muscle is described as:",
        "options": [
          "Voluntary and striated",
          "Involuntary and striated",
          "Voluntary and smooth",
          "Involuntary and smooth"
        ],
        "answer": 1,
        "rationale": "Cardiac muscle is striated like skeletal muscle but works involuntarily."
      },
      {
        "type": "mcq",
        "q": "Guarding the perineum during birth of the head aims mainly to:",
        "options": [
          "Speed up the contractions",
          "Reduce perineal trauma by allowing gradual stretching",
          "Stop the fetal heartbeat",
          "Deliver the placenta"
        ],
        "answer": 1,
        "rationale": "Controlled birth of the head lets the perineum stretch gradually, reducing tearing."
      },
      {
        "type": "fill",
        "q": "The main muscle of the pelvic floor is the ____.",
        "accept": [
          "levator ani"
        ],
        "rationale": "The levator ani forms the bulk of the pelvic floor."
      },
      {
        "type": "fill",
        "q": "Exercises to strengthen the pelvic floor are commonly called ____ exercises.",
        "accept": [
          "kegel",
          "pelvic floor"
        ],
        "rationale": "Pelvic floor (Kegel) exercises strengthen the levator ani."
      }
    ]
  },
  {
    "id": "anp-07-nervous",
    "unit": "Unit 3 · Control & Regulation",
    "title": "The Nervous System",
    "readMinutes": 16,
    "summary": "Organisation of the nervous system, the neurone and nerve impulse, the central and peripheral nervous systems, the autonomic nervous system, and reflexes relevant to childbearing and the newborn.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Organisation of the nervous system",
        "p": "The nervous system is the body's rapid control and communication system. It is divided into the central nervous system (CNS) — the brain and spinal cord — and the peripheral nervous system (PNS) — all the nerves outside the CNS. The PNS has a somatic (voluntary) part and an autonomic (involuntary) part, the latter divided into sympathetic and parasympathetic divisions."
      },
      {
        "h": "The neurone and nerve impulse",
        "p": "The neurone (nerve cell) is the functional unit. It has a cell body, dendrites that receive signals, and an axon that carries the impulse away; many axons are insulated by a myelin sheath that speeds conduction. A nerve impulse is an electrical signal; it passes from one neurone to the next across a tiny gap called a synapse, using chemical messengers (neurotransmitters)."
      },
      {
        "h": "The brain",
        "list": [
          "Cerebrum — the largest part; controls thought, voluntary movement, sensation and emotion.",
          "Cerebellum — coordinates movement and balance.",
          "Brain stem — controls vital automatic functions: breathing, heart rate and blood pressure.",
          "Hypothalamus — links the nervous and endocrine systems; controls the pituitary gland and produces oxytocin (vital in labour and lactation)."
        ]
      },
      {
        "h": "The spinal cord",
        "p": "The spinal cord runs from the brain stem down the vertebral canal. It carries sensory impulses up to the brain and motor impulses down to the body, and is the centre for reflexes. In midwifery the spinal cord is important for understanding regional analgesia: spinal and epidural blocks are placed around the lower spinal cord and nerve roots to relieve the pain of labour and for caesarean birth."
      },
      {
        "h": "The autonomic nervous system (ANS)",
        "p": "The ANS controls involuntary functions of internal organs. The sympathetic division prepares the body for 'fight or flight' (raising heart rate, dilating airways, releasing glucose), while the parasympathetic division promotes 'rest and digest'. Both influence the uterus, blood vessels and other organs; severe maternal stress and pain can, through sympathetic activity, reduce uterine blood flow, which is one reason supportive, calm care in labour matters."
      },
      {
        "h": "Reflexes and pain pathways",
        "p": "A reflex is a rapid, automatic response to a stimulus that passes through a reflex arc (receptor → sensory neurone → CNS → motor neurone → effector). The pain of the first stage of labour is carried by nerves from the uterus and cervix and is felt in the lower abdomen and back; second-stage pain from the distending vagina and perineum is more localised. Understanding these pathways helps the midwife use positioning, support and analgesia effectively.",
        "figure": {
          "caption": "A simple reflex arc: stimulus is detected and an automatic motor response is produced through the spinal cord.",
          "svg": "<svg viewBox=\"0 0 560 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Reflex arc pathway.\"><defs><marker id=\"anpRef7\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#831843\"/></marker></defs><rect x=\"10\" y=\"55\" width=\"95\" height=\"44\" rx=\"8\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"57\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Receptor</text><rect x=\"135\" y=\"55\" width=\"105\" height=\"44\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"187\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Sensory neurone</text><rect x=\"270\" y=\"55\" width=\"95\" height=\"44\" rx=\"8\" fill=\"#FDF2F8\" stroke=\"#831843\" stroke-width=\"2\"/><text x=\"317\" y=\"76\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Spinal</text><text x=\"317\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">cord</text><rect x=\"395\" y=\"55\" width=\"100\" height=\"44\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"445\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Motor neurone</text><rect x=\"500\" y=\"55\" width=\"55\" height=\"44\" rx=\"8\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"527\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Muscle</text><line x1=\"105\" y1=\"77\" x2=\"133\" y2=\"77\" stroke=\"#831843\" stroke-width=\"2\" marker-end=\"url(#anpRef7)\"/><line x1=\"240\" y1=\"77\" x2=\"268\" y2=\"77\" stroke=\"#831843\" stroke-width=\"2\" marker-end=\"url(#anpRef7)\"/><line x1=\"365\" y1=\"77\" x2=\"393\" y2=\"77\" stroke=\"#831843\" stroke-width=\"2\" marker-end=\"url(#anpRef7)\"/><line x1=\"495\" y1=\"77\" x2=\"499\" y2=\"77\" stroke=\"#831843\" stroke-width=\"2\" marker-end=\"url(#anpRef7)\"/></svg>"
        }
      },
      {
        "h": "Newborn reflexes",
        "p": "The healthy newborn shows primitive reflexes that the midwife checks because they indicate an intact nervous system: the rooting and sucking reflexes (essential for feeding), the Moro (startle) reflex, the grasp reflex, and the stepping reflex. Absence or asymmetry of these reflexes may signal a problem and prompts referral."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the divisions of the nervous system with a diagram.",
      "Describe the structure of a neurone and explain how a nerve impulse is transmitted.",
      "State the main parts of the brain and their functions.",
      "Explain the role of the autonomic nervous system in pregnancy and labour.",
      "List four newborn reflexes and explain why the midwife checks them."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The central nervous system consists of the:",
        "options": [
          "Brain and spinal cord",
          "Brain and peripheral nerves",
          "Spinal cord and autonomic nerves",
          "Sense organs and nerves"
        ],
        "answer": 0,
        "rationale": "The CNS is the brain and spinal cord; the PNS is the nerves outside it."
      },
      {
        "type": "mcq",
        "q": "The functional unit of the nervous system is the:",
        "options": [
          "Nephron",
          "Neurone",
          "Myocyte",
          "Osteocyte"
        ],
        "answer": 1,
        "rationale": "The neurone (nerve cell) is the basic functional unit of the nervous system."
      },
      {
        "type": "mcq",
        "q": "The part of the brain that produces oxytocin is the:",
        "options": [
          "Cerebellum",
          "Hypothalamus",
          "Cerebrum",
          "Brain stem"
        ],
        "answer": 1,
        "rationale": "The hypothalamus produces oxytocin (stored in the posterior pituitary), vital in labour and lactation."
      },
      {
        "type": "mcq",
        "q": "The gap between two neurones across which an impulse passes is the:",
        "options": [
          "Axon",
          "Synapse",
          "Dendrite",
          "Node"
        ],
        "answer": 1,
        "rationale": "The synapse is the junction where neurotransmitters carry the signal to the next neurone."
      },
      {
        "type": "mcq",
        "q": "The division of the ANS responsible for 'fight or flight' is the:",
        "options": [
          "Parasympathetic",
          "Somatic",
          "Sympathetic",
          "Sensory"
        ],
        "answer": 2,
        "rationale": "The sympathetic division prepares the body for stress (fight or flight)."
      },
      {
        "type": "mcq",
        "q": "Vital automatic functions such as breathing and heart rate are controlled by the:",
        "options": [
          "Cerebrum",
          "Cerebellum",
          "Brain stem",
          "Spinal cord"
        ],
        "answer": 2,
        "rationale": "The brain stem controls vital involuntary functions like respiration and heart rate."
      },
      {
        "type": "mcq",
        "q": "The newborn reflex essential for feeding, in which the baby turns toward a touch on the cheek, is the:",
        "options": [
          "Moro reflex",
          "Grasp reflex",
          "Rooting reflex",
          "Stepping reflex"
        ],
        "answer": 2,
        "rationale": "The rooting reflex turns the baby toward the stimulus to locate the nipple for feeding."
      },
      {
        "type": "mcq",
        "q": "Spinal and epidural analgesia for labour act on the:",
        "options": [
          "Cerebrum",
          "Lower spinal cord and nerve roots",
          "Cerebellum",
          "Sympathetic chain only"
        ],
        "answer": 1,
        "rationale": "Regional blocks are placed around the lower spinal cord and nerve roots to block pain."
      },
      {
        "type": "mcq",
        "q": "The sheath that insulates an axon and speeds conduction is the:",
        "options": [
          "Synapse",
          "Myelin sheath",
          "Dendrite",
          "Cell body"
        ],
        "answer": 1,
        "rationale": "The myelin sheath insulates axons and greatly speeds impulse conduction."
      },
      {
        "type": "mcq",
        "q": "Coordination of movement and balance is mainly the role of the:",
        "options": [
          "Cerebrum",
          "Cerebellum",
          "Medulla",
          "Hypothalamus"
        ],
        "answer": 1,
        "rationale": "The cerebellum coordinates voluntary movement and maintains balance."
      },
      {
        "type": "fill",
        "q": "The part of the brain that links the nervous and endocrine systems and makes oxytocin is the ____.",
        "accept": [
          "hypothalamus"
        ],
        "rationale": "The hypothalamus controls the pituitary and produces oxytocin."
      },
      {
        "type": "fill",
        "q": "The startle reflex of the newborn is called the ____ reflex.",
        "accept": [
          "moro",
          "moro reflex",
          "startle"
        ],
        "rationale": "The Moro (startle) reflex is a normal newborn reflex."
      }
    ]
  },
  {
    "id": "anp-08-endocrine",
    "unit": "Unit 3 · Control & Regulation",
    "title": "The Endocrine System & Reproductive Hormones",
    "readMinutes": 17,
    "summary": "The endocrine glands and their hormones, the pituitary and hypothalamus, the reproductive hormones and their control, and the major endocrine changes of pregnancy including the role of the placenta.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is the endocrine system?",
        "p": "The endocrine system is a network of ductless glands that secrete hormones directly into the blood. Hormones are chemical messengers that travel to target organs and regulate growth, metabolism, fluid balance and reproduction. Compared with the nervous system, endocrine control is slower but longer-lasting — well suited to the prolonged changes of pregnancy."
      },
      {
        "h": "The pituitary gland and hypothalamus",
        "p": "The pituitary, controlled by the hypothalamus, is the 'master gland'. The anterior pituitary secretes growth hormone, thyroid-stimulating hormone (TSH), adrenocorticotrophic hormone (ACTH), prolactin (stimulates milk production), and the gonadotrophins FSH and LH (which control the ovaries). The posterior pituitary stores and releases oxytocin (uterine contractions and milk ejection) and antidiuretic hormone (ADH, water balance)."
      },
      {
        "h": "Other major endocrine glands",
        "list": [
          "Thyroid — secretes thyroxine (T4) and T3, which control metabolic rate; demand rises in pregnancy.",
          "Parathyroid glands — secrete parathyroid hormone, raising blood calcium (important for the fetal skeleton).",
          "Adrenal glands — the cortex secretes cortisol (stress, metabolism) and aldosterone (sodium and water), and the medulla secretes adrenaline.",
          "Pancreas (islets of Langerhans) — insulin lowers and glucagon raises blood glucose.",
          "Ovaries — secrete oestrogen and progesterone; testes secrete testosterone.",
          "Pineal gland — secretes melatonin, regulating sleep-wake rhythm."
        ]
      },
      {
        "h": "The female reproductive hormones",
        "list": [
          "FSH (follicle-stimulating hormone) — stimulates growth of ovarian follicles.",
          "LH (luteinising hormone) — triggers ovulation and formation of the corpus luteum.",
          "Oestrogen — develops female characteristics, thickens the endometrium, and in pregnancy grows the uterus and breasts.",
          "Progesterone — maintains the endometrium and pregnancy, relaxes smooth muscle, and prepares the breasts.",
          "Oxytocin — stimulates uterine contractions in labour and the let-down of milk.",
          "Prolactin — stimulates the breast to produce milk."
        ]
      },
      {
        "h": "Control by negative feedback",
        "p": "Most hormones are controlled by negative feedback: a rising hormone level switches off the gland that stimulated it. For example, rising oestrogen from the ovary reduces FSH from the pituitary. Oxytocin in labour is an important exception, being controlled by positive feedback until birth."
      },
      {
        "h": "Endocrine changes in pregnancy and the placenta",
        "p": "Pregnancy is a time of major hormonal change. After fertilisation the early embryo and then the placenta secrete human chorionic gonadotrophin (hCG), which maintains the corpus luteum and is the basis of pregnancy tests. The placenta becomes a major endocrine organ, producing large amounts of oestrogen and progesterone (which take over from the corpus luteum), human placental lactogen (which alters maternal metabolism to favour the fetus and can contribute to gestational diabetes), and relaxin. After birth, the fall in placental hormones allows prolactin to act fully and milk to be produced.",
        "figure": {
          "caption": "Key pregnancy hormones and their main roles: hCG, progesterone, oestrogen, oxytocin and prolactin.",
          "svg": "<svg viewBox=\"0 0 560 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Major hormones of pregnancy and their roles.\"><rect x=\"15\" y=\"20\" width=\"170\" height=\"56\" rx=\"8\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"100\" y=\"42\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">hCG</text><text x=\"100\" y=\"62\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">maintains corpus luteum</text><rect x=\"195\" y=\"20\" width=\"170\" height=\"56\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"280\" y=\"42\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Progesterone</text><text x=\"280\" y=\"62\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">maintains pregnancy</text><rect x=\"375\" y=\"20\" width=\"170\" height=\"56\" rx=\"8\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"460\" y=\"42\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Oestrogen</text><text x=\"460\" y=\"62\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">grows uterus &amp; breasts</text><rect x=\"110\" y=\"110\" width=\"170\" height=\"56\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"195\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Oxytocin</text><text x=\"195\" y=\"152\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">contractions &amp; let-down</text><rect x=\"290\" y=\"110\" width=\"170\" height=\"56\" rx=\"8\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"375\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Prolactin</text><text x=\"375\" y=\"152\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">milk production</text><text x=\"280\" y=\"195\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">The placenta is a major endocrine organ in pregnancy</text></svg>"
        }
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Define a hormone and describe the general functions of the endocrine system.",
      "Describe the hormones of the anterior and posterior pituitary gland.",
      "Explain the roles of oestrogen and progesterone in pregnancy.",
      "Describe the endocrine functions of the placenta.",
      "Explain how negative feedback controls hormone secretion, with an example."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Hormones are transported around the body in the:",
        "options": [
          "Lymph only",
          "Blood",
          "Cerebrospinal fluid",
          "Nerves"
        ],
        "answer": 1,
        "rationale": "Endocrine glands are ductless and release hormones directly into the blood."
      },
      {
        "type": "mcq",
        "q": "The 'master gland' of the endocrine system is the:",
        "options": [
          "Thyroid",
          "Pituitary",
          "Adrenal",
          "Pancreas"
        ],
        "answer": 1,
        "rationale": "The pituitary, controlled by the hypothalamus, regulates many other glands."
      },
      {
        "type": "mcq",
        "q": "The hormone that stimulates milk PRODUCTION by the breast is:",
        "options": [
          "Oxytocin",
          "Prolactin",
          "Oestrogen",
          "FSH"
        ],
        "answer": 1,
        "rationale": "Prolactin from the anterior pituitary stimulates the alveoli to produce milk."
      },
      {
        "type": "mcq",
        "q": "The hormone released by the posterior pituitary that causes uterine contractions is:",
        "options": [
          "Prolactin",
          "Progesterone",
          "Oxytocin",
          "ACTH"
        ],
        "answer": 2,
        "rationale": "Oxytocin stimulates uterine contraction in labour and milk ejection (let-down)."
      },
      {
        "type": "mcq",
        "q": "The basis of most urine and blood pregnancy tests is detection of:",
        "options": [
          "Oestrogen",
          "Progesterone",
          "Human chorionic gonadotrophin (hCG)",
          "Prolactin"
        ],
        "answer": 2,
        "rationale": "hCG, secreted by the early placenta, is detected by pregnancy tests."
      },
      {
        "type": "mcq",
        "q": "Which hormone mainly MAINTAINS the pregnancy by keeping the endometrium and relaxing the uterus?",
        "options": [
          "Progesterone",
          "FSH",
          "LH",
          "Adrenaline"
        ],
        "answer": 0,
        "rationale": "Progesterone maintains the endometrium and quietens the myometrium during pregnancy."
      },
      {
        "type": "mcq",
        "q": "Insulin, which lowers blood glucose, is secreted by the:",
        "options": [
          "Thyroid",
          "Adrenal cortex",
          "Islets of Langerhans (pancreas)",
          "Parathyroid"
        ],
        "answer": 2,
        "rationale": "Beta cells of the pancreatic islets secrete insulin."
      },
      {
        "type": "mcq",
        "q": "Ovulation is triggered by a surge of:",
        "options": [
          "FSH",
          "LH (luteinising hormone)",
          "Prolactin",
          "ADH"
        ],
        "answer": 1,
        "rationale": "A mid-cycle LH surge triggers release of the ovum (ovulation)."
      },
      {
        "type": "mcq",
        "q": "The placental hormone that alters maternal metabolism and can contribute to gestational diabetes is:",
        "options": [
          "Human placental lactogen",
          "Melatonin",
          "Aldosterone",
          "TSH"
        ],
        "answer": 0,
        "rationale": "Human placental lactogen (hPL) has anti-insulin effects, contributing to gestational diabetes."
      },
      {
        "type": "mcq",
        "q": "In negative feedback, a rising hormone level usually:",
        "options": [
          "Increases its own secretion further",
          "Switches off the gland that stimulated it",
          "Has no effect",
          "Destroys the target organ"
        ],
        "answer": 1,
        "rationale": "Negative feedback turns off the stimulating gland once hormone levels are adequate."
      },
      {
        "type": "fill",
        "q": "The hormone secreted by the early placenta and detected by pregnancy tests is ____.",
        "accept": [
          "hcg",
          "human chorionic gonadotrophin",
          "human chorionic gonadotropin"
        ],
        "rationale": "hCG maintains the corpus luteum and is the marker used in pregnancy testing."
      },
      {
        "type": "fill",
        "q": "The posterior pituitary hormone responsible for milk let-down is ____.",
        "accept": [
          "oxytocin"
        ],
        "rationale": "Oxytocin causes both uterine contraction and the milk-ejection (let-down) reflex."
      }
    ]
  },
  {
    "id": "anp-09-blood",
    "unit": "Unit 4 · Transport, Respiration & Defence",
    "title": "Blood: Composition, Groups & Clotting",
    "readMinutes": 17,
    "summary": "Composition and functions of blood, the blood cells, blood groups and the Rhesus factor, haemostasis and clotting, and the haematological changes and concerns of pregnancy.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Composition and functions of blood",
        "p": "Blood is a connective tissue made of plasma (about 55%) and cells (about 45%). Plasma is mostly water with proteins, nutrients, hormones, wastes and clotting factors. Blood transports oxygen, carbon dioxide, nutrients, hormones and wastes; it helps regulate temperature, pH and fluid balance; and it defends the body and forms clots. In pregnancy a healthy circulation supplies the placenta and growing fetus."
      },
      {
        "h": "The blood cells",
        "list": [
          "Red blood cells (erythrocytes) — carry oxygen using haemoglobin; they have no nucleus and are made in red bone marrow.",
          "White blood cells (leucocytes) — defend against infection (e.g. neutrophils, lymphocytes, monocytes).",
          "Platelets (thrombocytes) — cell fragments essential for clotting."
        ]
      },
      {
        "h": "Haemoglobin, iron and anaemia in pregnancy",
        "p": "Haemoglobin is the iron-containing pigment in red cells that carries oxygen. Pregnancy greatly increases iron demand for the mother's expanded red cell mass and for the fetus and placenta. If demand outstrips supply the woman becomes anaemic; iron-deficiency anaemia is the commonest medical disorder of pregnancy. The midwife checks haemoglobin, advises an iron-rich diet (and supplements where indicated) and recognises that anaemia increases the risks of preterm birth, poor fetal growth and difficulty coping with blood loss at delivery."
      },
      {
        "h": "Blood groups (ABO system)",
        "p": "The ABO system classifies blood by antigens on the red cells: group A has A antigens, group B has B antigens, group AB has both, and group O has neither. Plasma contains antibodies against the missing antigens. Knowing the blood group is essential before transfusion, which may be needed for postpartum haemorrhage; mismatched transfusion causes a dangerous reaction."
      },
      {
        "h": "The Rhesus (Rh) factor",
        "p": "The Rhesus factor is another red-cell antigen; people are Rh-positive (have it) or Rh-negative (do not). Rh incompatibility is a major midwifery concern: if an Rh-negative mother carries an Rh-positive fetus, fetal cells entering her blood (especially at birth, miscarriage or trauma) can make her produce anti-D antibodies. In a later pregnancy these antibodies can cross the placenta and destroy the fetal red cells (haemolytic disease of the newborn). This is prevented by giving anti-D immunoglobulin to Rh-negative women at the appropriate times.",
        "figure": {
          "caption": "Rhesus incompatibility: an Rh-negative mother may form anti-D antibodies against an Rh-positive fetus; anti-D prophylaxis prevents this.",
          "svg": "<svg viewBox=\"0 0 560 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rhesus incompatibility and anti-D prophylaxis.\"><rect x=\"15\" y=\"30\" width=\"160\" height=\"120\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"95\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Mother Rh&#8722;</text><text x=\"95\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">carries Rh+ fetus</text><text x=\"95\" y=\"105\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">fetal cells enter</text><text x=\"95\" y=\"125\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">mother&#39;s blood</text><rect x=\"200\" y=\"30\" width=\"160\" height=\"120\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"280\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Sensitisation</text><text x=\"280\" y=\"88\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">mother makes</text><text x=\"280\" y=\"108\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">anti-D antibodies</text><rect x=\"385\" y=\"30\" width=\"160\" height=\"120\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#15803D\" stroke-width=\"2.5\"/><text x=\"465\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">Prevention</text><text x=\"465\" y=\"88\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">give anti-D</text><text x=\"465\" y=\"108\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">immunoglobulin</text></svg>"
        }
      },
      {
        "h": "Haemostasis and clotting",
        "p": "Haemostasis is the stopping of bleeding. It happens in steps: the vessel constricts; platelets stick together to form a plug; and a cascade of clotting factors converts fibrinogen into fibrin, forming a stable clot. After birth, contraction of the uterine muscle plus clotting at the placental site control bleeding; failure of either can cause postpartum haemorrhage. Pregnancy is a 'hypercoagulable' state (clotting is enhanced), which protects against bleeding at birth but raises the risk of venous thrombosis."
      },
      {
        "h": "Coagulation and the puerperium",
        "p": "Because clotting is increased in pregnancy and the early postnatal period, the midwife is alert to the risk of deep vein thrombosis and encourages early mobilisation, leg exercises and hydration. The midwife also recognises signs of clotting disorders such as disseminated intravascular coagulation, which can complicate severe haemorrhage or pre-eclampsia."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the composition and functions of blood.",
      "Describe the ABO and Rhesus blood group systems and their importance in midwifery.",
      "Explain Rhesus incompatibility and how haemolytic disease of the newborn is prevented.",
      "Describe the process of haemostasis (blood clotting).",
      "Discuss iron-deficiency anaemia in pregnancy and the midwife's role."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The liquid part of blood is called:",
        "options": [
          "Serum only",
          "Plasma",
          "Lymph",
          "Bile"
        ],
        "answer": 1,
        "rationale": "Plasma is the fluid portion of blood, making up about 55%."
      },
      {
        "type": "mcq",
        "q": "The oxygen-carrying pigment in red blood cells is:",
        "options": [
          "Myoglobin",
          "Haemoglobin",
          "Bilirubin",
          "Melanin"
        ],
        "answer": 1,
        "rationale": "Haemoglobin, an iron-containing protein, carries oxygen in red cells."
      },
      {
        "type": "mcq",
        "q": "The commonest medical disorder of pregnancy is:",
        "options": [
          "Diabetes",
          "Iron-deficiency anaemia",
          "Asthma",
          "Epilepsy"
        ],
        "answer": 1,
        "rationale": "Iron-deficiency anaemia is the most common medical condition in pregnancy."
      },
      {
        "type": "mcq",
        "q": "A person with blood group O has:",
        "options": [
          "Both A and B antigens",
          "A antigen only",
          "B antigen only",
          "Neither A nor B antigen"
        ],
        "answer": 3,
        "rationale": "Group O red cells carry neither A nor B antigen (but plasma has both antibodies)."
      },
      {
        "type": "mcq",
        "q": "Rhesus incompatibility is a risk when the mother is:",
        "options": [
          "Rh-positive and fetus Rh-negative",
          "Rh-negative and fetus Rh-positive",
          "Rh-positive and fetus Rh-positive",
          "Group O"
        ],
        "answer": 1,
        "rationale": "An Rh-negative mother carrying an Rh-positive fetus may become sensitised and form anti-D."
      },
      {
        "type": "mcq",
        "q": "Haemolytic disease of the newborn from Rh incompatibility is PREVENTED by giving:",
        "options": [
          "Iron tablets",
          "Anti-D immunoglobulin",
          "Folic acid",
          "Vitamin K"
        ],
        "answer": 1,
        "rationale": "Anti-D immunoglobulin prevents the Rh-negative mother from making anti-D antibodies."
      },
      {
        "type": "mcq",
        "q": "Blood cells essential for clotting are the:",
        "options": [
          "Red blood cells",
          "Lymphocytes",
          "Platelets",
          "Monocytes"
        ],
        "answer": 2,
        "rationale": "Platelets (thrombocytes) form the plug and support the clotting cascade."
      },
      {
        "type": "mcq",
        "q": "During clotting, fibrinogen is converted into:",
        "options": [
          "Albumin",
          "Fibrin",
          "Globulin",
          "Haemoglobin"
        ],
        "answer": 1,
        "rationale": "The clotting cascade converts soluble fibrinogen into insoluble fibrin, forming the clot."
      },
      {
        "type": "mcq",
        "q": "After birth, bleeding from the placental site is controlled mainly by:",
        "options": [
          "Contraction of the uterine muscle",
          "Cooling of the abdomen",
          "The bladder filling",
          "Deep breathing"
        ],
        "answer": 0,
        "rationale": "Myometrial contraction compresses the vessels at the placental site, with clotting, to stop bleeding."
      },
      {
        "type": "mcq",
        "q": "Pregnancy is described as a hypercoagulable state, which raises the risk of:",
        "options": [
          "Bleeding gums",
          "Venous thrombosis",
          "Low blood pressure",
          "Dehydration"
        ],
        "answer": 1,
        "rationale": "Enhanced clotting protects against birth haemorrhage but increases thrombosis risk."
      },
      {
        "type": "fill",
        "q": "The iron-containing pigment in red cells that carries oxygen is ____.",
        "accept": [
          "haemoglobin",
          "hemoglobin"
        ],
        "rationale": "Haemoglobin binds and transports oxygen."
      },
      {
        "type": "fill",
        "q": "An Rh-negative mother is given ____ immunoglobulin to prevent sensitisation.",
        "accept": [
          "anti-d",
          "anti d"
        ],
        "rationale": "Anti-D immunoglobulin prevents formation of anti-D antibodies."
      }
    ]
  },
  {
    "id": "anp-10-cardiovascular",
    "unit": "Unit 4 · Transport, Respiration & Defence",
    "title": "Cardiovascular System & Maternal Adaptations",
    "readMinutes": 17,
    "summary": "Structure of the heart, the cardiac cycle and blood pressure, the blood vessels and circulation, and the major cardiovascular changes of pregnancy that the midwife monitors.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Structure of the heart",
        "p": "The heart is a muscular pump with four chambers: two upper atria that receive blood and two lower ventricles that pump it out. The right side handles deoxygenated blood (to the lungs) and the left side oxygenated blood (to the body). Valves (tricuspid, pulmonary, mitral and aortic) keep blood flowing one way. The thick-walled left ventricle pumps blood through the whole body, including the placenta in pregnancy."
      },
      {
        "h": "The cardiac cycle",
        "p": "The cardiac cycle is one complete heartbeat. In systole the chambers contract and eject blood; in diastole they relax and fill. The heartbeat is started by the sino-atrial (SA) node, the natural pacemaker, and spreads through the conducting system. The resting adult heart beats about 60–100 times per minute; the 'lub-dub' heart sounds are the valves closing."
      },
      {
        "h": "Blood pressure",
        "p": "Blood pressure is the force of blood against the artery walls, written as systolic over diastolic (e.g. about 120/80 mmHg in a resting adult). It depends on cardiac output and the resistance of the vessels. The midwife measures blood pressure at every antenatal visit, because a rise is a key sign of pre-eclampsia, while a fall may indicate shock from haemorrhage."
      },
      {
        "h": "Blood vessels and circulation",
        "list": [
          "Arteries — carry blood away from the heart; thick, elastic walls (carry oxygenated blood except the pulmonary artery).",
          "Veins — carry blood back to the heart; thinner walls with valves (carry deoxygenated blood except the pulmonary veins).",
          "Capillaries — tiny, thin-walled vessels where exchange of gases, nutrients and wastes takes place, including in the placenta.",
          "Pulmonary circulation — heart to lungs and back.",
          "Systemic circulation — heart to the rest of the body and back."
        ]
      },
      {
        "h": "Cardiovascular changes in pregnancy",
        "p": "Pregnancy places major demands on the circulation. Blood volume rises by about 40–50%, with plasma increasing more than red cells, producing the 'physiological anaemia' of pregnancy. Cardiac output rises (heart rate and stroke volume both increase) to perfuse the placenta. Peripheral resistance falls, so blood pressure tends to drop slightly in mid-pregnancy before returning toward normal near term. The midwife interprets vital signs against these altered normals.",
        "figure": {
          "caption": "Major cardiovascular changes in normal pregnancy.",
          "svg": "<svg viewBox=\"0 0 560 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cardiovascular changes in pregnancy.\"><rect x=\"15\" y=\"25\" width=\"170\" height=\"120\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"100\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Blood volume</text><text x=\"100\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"700\" fill=\"#15803D\">&#8593; 40&#8211;50%</text><text x=\"100\" y=\"115\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">plasma &gt; red cells</text><rect x=\"195\" y=\"25\" width=\"170\" height=\"120\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"280\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Cardiac output</text><text x=\"280\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"20\" font-weight=\"700\" fill=\"#15803D\">&#8593;</text><text x=\"280\" y=\"115\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">HR &amp; stroke volume up</text><rect x=\"375\" y=\"25\" width=\"170\" height=\"120\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"460\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Blood pressure</text><text x=\"460\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"18\" font-weight=\"700\" fill=\"#7C2D12\">&#8595; mid, then &#8594;</text><text x=\"460\" y=\"115\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">resistance falls</text></svg>"
        }
      },
      {
        "h": "Aortocaval compression (supine hypotension)",
        "p": "In late pregnancy, if the woman lies flat on her back, the heavy uterus presses on the inferior vena cava and aorta, reducing venous return and cardiac output. This can cause supine hypotensive syndrome — dizziness, pallor and a fall in blood pressure — and reduces placental blood flow. The midwife prevents it by positioning the woman in a lateral (side) tilt rather than fully supine."
      },
      {
        "h": "Midwifery monitoring",
        "p": "The midwife uses knowledge of the normal and adapted circulation to monitor pulse, blood pressure and signs of perfusion. A rising blood pressure suggests pre-eclampsia; a rising pulse with falling blood pressure suggests hypovolaemia from haemorrhage. Accurate, regular observations allow early recognition and prompt referral."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the structure of the heart and the function of its valves.",
      "Explain the cardiac cycle and what is meant by systole and diastole.",
      "Differentiate between arteries, veins and capillaries.",
      "Describe the cardiovascular changes that occur in normal pregnancy.",
      "Explain supine hypotensive syndrome and how the midwife prevents it."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The natural pacemaker of the heart is the:",
        "options": [
          "AV node",
          "SA (sino-atrial) node",
          "Bundle of His",
          "Purkinje fibres"
        ],
        "answer": 1,
        "rationale": "The sino-atrial node initiates each heartbeat and sets the rhythm."
      },
      {
        "type": "mcq",
        "q": "The chamber that pumps oxygenated blood to the whole body is the:",
        "options": [
          "Right atrium",
          "Right ventricle",
          "Left atrium",
          "Left ventricle"
        ],
        "answer": 3,
        "rationale": "The thick-walled left ventricle pumps oxygenated blood into the systemic circulation."
      },
      {
        "type": "mcq",
        "q": "The phase of the cardiac cycle when the heart muscle CONTRACTS is:",
        "options": [
          "Diastole",
          "Systole",
          "Repolarisation",
          "Filling"
        ],
        "answer": 1,
        "rationale": "Systole is contraction and ejection; diastole is relaxation and filling."
      },
      {
        "type": "mcq",
        "q": "Blood vessels where exchange of gases and nutrients occurs are the:",
        "options": [
          "Arteries",
          "Veins",
          "Capillaries",
          "Venules"
        ],
        "answer": 2,
        "rationale": "Thin-walled capillaries allow exchange of gases, nutrients and wastes."
      },
      {
        "type": "mcq",
        "q": "In pregnancy, blood volume increases by approximately:",
        "options": [
          "5–10%",
          "20%",
          "40–50%",
          "80%"
        ],
        "answer": 2,
        "rationale": "Maternal blood volume rises about 40–50% to supply the placenta and fetus."
      },
      {
        "type": "mcq",
        "q": "The 'physiological anaemia' of pregnancy occurs because:",
        "options": [
          "Red cells are destroyed",
          "Plasma volume rises more than red cell mass",
          "Iron is not absorbed",
          "The bone marrow stops working"
        ],
        "answer": 1,
        "rationale": "Plasma increases proportionally more than red cells, diluting the haemoglobin concentration."
      },
      {
        "type": "mcq",
        "q": "A persistently raised blood pressure in the second half of pregnancy is a key sign of:",
        "options": [
          "Anaemia",
          "Pre-eclampsia",
          "Gestational diabetes",
          "Hyperemesis"
        ],
        "answer": 1,
        "rationale": "Hypertension is a cardinal feature of pre-eclampsia, checked at every visit."
      },
      {
        "type": "mcq",
        "q": "Supine hypotensive syndrome in late pregnancy is caused by the uterus pressing on the:",
        "options": [
          "Pulmonary artery",
          "Inferior vena cava",
          "Carotid artery",
          "Renal vein"
        ],
        "answer": 1,
        "rationale": "The gravid uterus compresses the inferior vena cava (and aorta), reducing venous return."
      },
      {
        "type": "mcq",
        "q": "The midwife prevents aortocaval compression by positioning the woman:",
        "options": [
          "Flat on her back",
          "In a lateral (side) tilt",
          "Sitting bolt upright only",
          "Head down"
        ],
        "answer": 1,
        "rationale": "A lateral tilt relieves pressure on the great vessels and restores venous return."
      },
      {
        "type": "mcq",
        "q": "Arteries differ from veins in that they:",
        "options": [
          "Always carry deoxygenated blood",
          "Carry blood away from the heart with thick elastic walls",
          "Have valves along their length",
          "Are the site of gas exchange"
        ],
        "answer": 1,
        "rationale": "Arteries carry blood away from the heart and have thick, elastic, muscular walls."
      },
      {
        "type": "fill",
        "q": "The natural pacemaker of the heart is the ____ node.",
        "accept": [
          "sa",
          "sino-atrial",
          "sinoatrial",
          "sino atrial"
        ],
        "rationale": "The SA (sino-atrial) node sets the heart rhythm."
      },
      {
        "type": "fill",
        "q": "To prevent supine hypotension in late pregnancy the woman should be positioned in a ____ tilt.",
        "accept": [
          "lateral",
          "side",
          "left lateral"
        ],
        "rationale": "A lateral (side) tilt relieves compression of the inferior vena cava."
      }
    ]
  },
  {
    "id": "anp-11-fetal-circulation",
    "unit": "Unit 4 · Transport, Respiration & Defence",
    "title": "Fetal Circulation & Adaptation at Birth",
    "readMinutes": 17,
    "summary": "The placenta and umbilical cord, the special features (shunts) of fetal circulation, the path of blood in the fetus, and the dramatic changes that occur in the circulation at birth.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Why fetal circulation is different",
        "p": "In the fetus the lungs are collapsed and do not breathe; oxygen and nutrients are obtained from the mother through the placenta, not from the lungs and gut. Fetal circulation therefore has special features that direct most blood AWAY from the non-functioning lungs and toward the placenta. After birth, when the baby breathes and the cord is cut, the circulation must change rapidly."
      },
      {
        "h": "The placenta and umbilical cord",
        "p": "The placenta is the organ of exchange between mother and fetus: oxygen, nutrients and antibodies pass to the fetus, and carbon dioxide and wastes pass back to the mother, without the two bloodstreams mixing. The umbilical cord links the fetus to the placenta and contains two umbilical arteries (carrying deoxygenated blood from the fetus to the placenta) and one umbilical vein (carrying oxygenated blood from the placenta to the fetus)."
      },
      {
        "h": "The fetal shunts and special structures",
        "list": [
          "Ductus venosus — allows oxygenated blood from the umbilical vein to bypass the liver and go to the inferior vena cava.",
          "Foramen ovale — an opening between the right and left atria that lets blood bypass the lungs.",
          "Ductus arteriosus — a vessel joining the pulmonary artery to the aorta, diverting blood away from the lungs.",
          "Umbilical vein — carries oxygenated blood from the placenta to the fetus.",
          "Umbilical arteries (two) — carry deoxygenated blood from the fetus to the placenta."
        ]
      },
      {
        "h": "Path of blood in the fetus",
        "p": "Oxygenated blood travels from the placenta along the umbilical vein, through the ductus venosus to the inferior vena cava and right atrium. Much of it passes through the foramen ovale to the left atrium, then to the left ventricle and aorta to supply the head and brain with the best-oxygenated blood. Blood that does enter the right ventricle and pulmonary artery is largely diverted through the ductus arteriosus into the aorta. Blood returns to the placenta via the umbilical arteries to be re-oxygenated.",
        "figure": {
          "caption": "Fetal circulation: the three shunts (ductus venosus, foramen ovale, ductus arteriosus) bypass the liver and lungs.",
          "svg": "<svg viewBox=\"0 0 560 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"The three shunts of fetal circulation.\"><rect x=\"15\" y=\"30\" width=\"170\" height=\"130\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"100\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Ductus venosus</text><text x=\"100\" y=\"85\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">bypasses the</text><text x=\"100\" y=\"103\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">LIVER</text><rect x=\"195\" y=\"30\" width=\"170\" height=\"130\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"280\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Foramen ovale</text><text x=\"280\" y=\"85\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">right atrium &#8594;</text><text x=\"280\" y=\"103\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">left atrium</text><text x=\"280\" y=\"123\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">bypasses LUNGS</text><rect x=\"375\" y=\"30\" width=\"170\" height=\"130\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"460\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Ductus arteriosus</text><text x=\"460\" y=\"85\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">pulmonary artery</text><text x=\"460\" y=\"103\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8594; aorta</text><text x=\"460\" y=\"123\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">bypasses LUNGS</text></svg>"
        }
      },
      {
        "h": "Changes at birth",
        "p": "At birth the baby takes its first breath; the lungs expand and pulmonary blood flow rises sharply, and pressure in the left atrium increases. Clamping the cord removes the low-resistance placental circulation. These pressure changes cause the foramen ovale to close (it becomes the fossa ovalis), and rising oxygen levels make the ductus arteriosus constrict and close (becoming the ligamentum arteriosum). The ductus venosus and umbilical vessels also close. The circulation switches to the adult pattern, with blood now flowing through the lungs."
      },
      {
        "h": "Fate of the fetal structures",
        "list": [
          "Umbilical vein → ligamentum teres of the liver.",
          "Ductus venosus → ligamentum venosum.",
          "Foramen ovale → fossa ovalis.",
          "Ductus arteriosus → ligamentum arteriosum.",
          "Umbilical arteries → medial umbilical ligaments."
        ]
      },
      {
        "h": "Midwifery significance",
        "p": "The midwife supports the newborn's adaptation by encouraging effective breathing (drying, stimulation and, if needed, resuscitation), keeping the baby warm, and timing cord clamping appropriately. Knowledge of fetal circulation explains why birth asphyxia or failure of the shunts to close (e.g. persistent ductus arteriosus) causes problems, and underpins observation of the newborn's colour, breathing and heart rate."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the structure and functions of the placenta and umbilical cord.",
      "Name the three fetal shunts and state the purpose of each.",
      "Trace the path of oxygenated blood from the placenta to the fetal brain.",
      "Describe the changes that occur in the circulation at birth.",
      "State the adult remnants (fate) of the main fetal circulatory structures."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The umbilical VEIN carries:",
        "options": [
          "Oxygenated blood to the fetus",
          "Deoxygenated blood to the placenta",
          "Deoxygenated blood to the fetal lungs",
          "Oxygenated blood to the placenta"
        ],
        "answer": 0,
        "rationale": "The single umbilical vein carries oxygenated blood from the placenta to the fetus."
      },
      {
        "type": "mcq",
        "q": "How many umbilical ARTERIES are there in the normal cord?",
        "options": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "answer": 1,
        "rationale": "There are two umbilical arteries carrying deoxygenated blood to the placenta."
      },
      {
        "type": "mcq",
        "q": "The fetal shunt that allows blood to pass directly from the right atrium to the left atrium is the:",
        "options": [
          "Ductus arteriosus",
          "Ductus venosus",
          "Foramen ovale",
          "Umbilical vein"
        ],
        "answer": 2,
        "rationale": "The foramen ovale lets blood bypass the lungs by crossing between the atria."
      },
      {
        "type": "mcq",
        "q": "The shunt that diverts blood from the pulmonary artery to the aorta is the:",
        "options": [
          "Ligamentum teres",
          "Foramen ovale",
          "Ductus venosus",
          "Ductus arteriosus"
        ],
        "answer": 3,
        "rationale": "The ductus arteriosus connects the pulmonary artery to the aorta, bypassing the lungs."
      },
      {
        "type": "mcq",
        "q": "The ductus venosus allows blood to bypass the fetal:",
        "options": [
          "Liver",
          "Lungs",
          "Kidneys",
          "Brain"
        ],
        "answer": 0,
        "rationale": "The ductus venosus shunts oxygenated blood past the liver to the inferior vena cava."
      },
      {
        "type": "mcq",
        "q": "In the fetus, gas exchange takes place at the:",
        "options": [
          "Lungs",
          "Placenta",
          "Liver",
          "Kidneys"
        ],
        "answer": 1,
        "rationale": "The placenta is the organ of gas and nutrient exchange in fetal life."
      },
      {
        "type": "mcq",
        "q": "After birth, the foramen ovale closes to become the:",
        "options": [
          "Ligamentum arteriosum",
          "Ligamentum teres",
          "Fossa ovalis",
          "Ligamentum venosum"
        ],
        "answer": 2,
        "rationale": "The closed foramen ovale leaves a depression called the fossa ovalis."
      },
      {
        "type": "mcq",
        "q": "What event most directly triggers the changes in circulation at birth?",
        "options": [
          "Cutting the hair",
          "Bathing the baby",
          "Feeding the baby",
          "The baby's first breath and lung expansion"
        ],
        "answer": 3,
        "rationale": "The first breath expands the lungs and changes pressures, closing the fetal shunts."
      },
      {
        "type": "mcq",
        "q": "After birth, the ductus arteriosus becomes the:",
        "options": [
          "Ligamentum arteriosum",
          "Fossa ovalis",
          "Ligamentum teres",
          "Medial umbilical ligament"
        ],
        "answer": 0,
        "rationale": "The closed ductus arteriosus persists as the ligamentum arteriosum."
      },
      {
        "type": "mcq",
        "q": "The best-oxygenated fetal blood is directed mainly to the:",
        "options": [
          "Lower limbs",
          "Head and brain",
          "Lungs",
          "Placenta"
        ],
        "answer": 1,
        "rationale": "Through the foramen ovale and aorta, the most oxygenated blood supplies the head and brain."
      },
      {
        "type": "fill",
        "q": "The fetal shunt between the right and left atria is the foramen ____.",
        "accept": [
          "ovale",
          "foramen ovale"
        ],
        "rationale": "The foramen ovale lets blood bypass the fetal lungs."
      },
      {
        "type": "fill",
        "q": "The normal umbilical cord contains two arteries and ____ vein(s).",
        "accept": [
          "one",
          "1"
        ],
        "rationale": "There are two umbilical arteries and one umbilical vein."
      }
    ]
  },
  {
    "id": "anp-12-respiratory",
    "unit": "Unit 4 · Transport, Respiration & Defence",
    "title": "The Respiratory System & Acid-Base Balance",
    "readMinutes": 16,
    "summary": "Structure of the respiratory tract, mechanics of breathing, gas exchange and transport, the lung's role in acid-base balance, and the respiratory changes of pregnancy and the newborn's first breath.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Structure of the respiratory system",
        "p": "The respiratory system supplies oxygen and removes carbon dioxide. Air passes through the nose and pharynx, the larynx (voice box), the trachea, the bronchi and smaller bronchioles, and finally into the alveoli — tiny air sacs surrounded by capillaries where gas exchange occurs. The lungs are covered by the pleura, a double serous membrane with fluid that reduces friction during breathing."
      },
      {
        "h": "Mechanics of breathing",
        "p": "Breathing has two phases. In inspiration the diaphragm contracts and flattens and the intercostal muscles lift the ribs, enlarging the chest so air is drawn in. In expiration these muscles relax, the chest recoils and air is pushed out; at rest, expiration is largely passive. Breathing is controlled by the respiratory centre in the brain stem, which responds chiefly to the level of carbon dioxide in the blood."
      },
      {
        "h": "Gas exchange and transport",
        "p": "In the alveoli, oxygen diffuses from the air into the blood and carbon dioxide diffuses from the blood into the air, each moving from high to low concentration. Oxygen is carried mainly bound to haemoglobin in red cells; carbon dioxide is carried mostly as bicarbonate in the plasma. At the tissues the gases exchange in the opposite direction. The same principle of diffusion operates at the placenta between mother and fetus."
      },
      {
        "h": "The lung and acid-base balance",
        "p": "The body must keep blood pH within a narrow range (about 7.35–7.45). The lungs help control pH by adjusting how much carbon dioxide is exhaled: CO2 dissolves to form carbonic acid, so breathing out more CO2 raises pH (less acid) and retaining CO2 lowers pH (more acid). The kidneys provide slower control by handling bicarbonate and hydrogen ions. Together the lungs and kidneys, with chemical buffers, maintain acid-base balance.",
        "figure": {
          "caption": "The lungs control pH by altering carbon dioxide; the kidneys adjust bicarbonate. Normal blood pH is about 7.35–7.45.",
          "svg": "<svg viewBox=\"0 0 560 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Lungs and kidneys in acid-base balance.\"><rect x=\"20\" y=\"30\" width=\"220\" height=\"110\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"130\" y=\"56\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">LUNGS (fast)</text><text x=\"130\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">adjust carbon dioxide</text><text x=\"130\" y=\"106\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8593; breathe out CO&#8322; &#8594; &#8593; pH</text><rect x=\"320\" y=\"30\" width=\"220\" height=\"110\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"430\" y=\"56\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">KIDNEYS (slow)</text><text x=\"430\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">adjust bicarbonate &amp; H&#8314;</text><text x=\"430\" y=\"106\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#15803D\">normal pH 7.35&#8211;7.45</text></svg>"
        }
      },
      {
        "h": "Respiratory changes in pregnancy",
        "p": "Progesterone increases the depth of breathing (tidal volume), so the mother breathes out more carbon dioxide; this creates a small respiratory alkalosis that helps carbon dioxide pass from the fetus to the mother. Oxygen consumption rises to meet the needs of the fetus, uterus and placenta. The growing uterus pushes up the diaphragm, but the rib cage flares so lung function is maintained; many women experience a sense of breathlessness, which the midwife reassures is usually normal."
      },
      {
        "h": "The newborn's first breath",
        "p": "Before birth the lungs are fluid-filled and non-functioning. At birth the stimuli of cold, touch, and rising carbon dioxide and falling oxygen drive the baby to take a strong first breath that expands the alveoli; surfactant (made in late pregnancy) lowers surface tension and keeps the alveoli open. The midwife supports this transition by drying and stimulating the baby, keeping it warm, and providing resuscitation if breathing is not established."
      },
      {
        "h": "Midwifery significance",
        "p": "Understanding respiration helps the midwife recognise normal breathlessness versus abnormal signs (such as severe dyspnoea or cyanosis), interpret oxygen saturation, support the newborn's first breaths, and recognise respiratory distress in the baby (grunting, nasal flaring, recession) that requires urgent help. Preterm babies are at risk because surfactant may be insufficient."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the structure of the respiratory tract from the nose to the alveoli.",
      "Explain the mechanism of inspiration and expiration.",
      "Describe how the lungs help to maintain acid-base balance.",
      "Discuss the respiratory changes that occur in pregnancy.",
      "Explain the physiology of the newborn's first breath and the role of surfactant."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Gas exchange in the lungs takes place in the:",
        "options": [
          "Trachea",
          "Bronchi",
          "Alveoli",
          "Larynx"
        ],
        "answer": 2,
        "rationale": "Alveoli are the thin-walled air sacs where oxygen and carbon dioxide are exchanged."
      },
      {
        "type": "mcq",
        "q": "During inspiration, the diaphragm:",
        "options": [
          "Relaxes and rises",
          "Contracts and flattens",
          "Does not move",
          "Closes the airway"
        ],
        "answer": 1,
        "rationale": "The diaphragm contracts and flattens to enlarge the chest and draw air in."
      },
      {
        "type": "mcq",
        "q": "Oxygen is carried in the blood mainly bound to:",
        "options": [
          "Plasma proteins",
          "Haemoglobin",
          "Platelets",
          "White cells"
        ],
        "answer": 1,
        "rationale": "Most oxygen is transported bound to haemoglobin in red blood cells."
      },
      {
        "type": "mcq",
        "q": "The respiratory centre in the brain stem responds chiefly to the blood level of:",
        "options": [
          "Oxygen",
          "Carbon dioxide",
          "Glucose",
          "Calcium"
        ],
        "answer": 1,
        "rationale": "Rising carbon dioxide is the main stimulus to breathe."
      },
      {
        "type": "mcq",
        "q": "Normal arterial blood pH is approximately:",
        "options": [
          "6.8–7.0",
          "7.0–7.2",
          "7.35–7.45",
          "7.6–7.8"
        ],
        "answer": 2,
        "rationale": "Blood pH is normally maintained between about 7.35 and 7.45."
      },
      {
        "type": "mcq",
        "q": "The lungs raise blood pH by:",
        "options": [
          "Retaining carbon dioxide",
          "Breathing out more carbon dioxide",
          "Producing bicarbonate",
          "Excreting hydrogen ions"
        ],
        "answer": 1,
        "rationale": "Exhaling more CO2 removes carbonic acid, raising pH; the kidneys handle bicarbonate."
      },
      {
        "type": "mcq",
        "q": "Carbon dioxide is transported in the blood mostly as:",
        "options": [
          "Dissolved gas only",
          "Bicarbonate",
          "Bound to platelets",
          "Carbonic anhydrase"
        ],
        "answer": 1,
        "rationale": "Most CO2 is carried as bicarbonate ions in the plasma."
      },
      {
        "type": "mcq",
        "q": "The substance that lowers surface tension and keeps the newborn's alveoli open is:",
        "options": [
          "Mucus",
          "Surfactant",
          "Bile",
          "Meconium"
        ],
        "answer": 1,
        "rationale": "Surfactant reduces alveolar surface tension, preventing collapse after the first breath."
      },
      {
        "type": "mcq",
        "q": "The double membrane covering the lungs is the:",
        "options": [
          "Peritoneum",
          "Pericardium",
          "Pleura",
          "Meninges"
        ],
        "answer": 2,
        "rationale": "The pleura is the serous membrane surrounding each lung."
      },
      {
        "type": "mcq",
        "q": "In pregnancy, progesterone causes the mother to:",
        "options": [
          "Breathe more shallowly",
          "Breathe more deeply and exhale more CO2",
          "Stop breathing during sleep",
          "Retain more CO2"
        ],
        "answer": 1,
        "rationale": "Progesterone increases tidal volume, causing a mild respiratory alkalosis that aids fetal CO2 transfer."
      },
      {
        "type": "fill",
        "q": "The tiny air sacs of the lungs where gas exchange occurs are the ____.",
        "accept": [
          "alveoli",
          "alveolus"
        ],
        "rationale": "Alveoli are the site of gas exchange in the lungs."
      },
      {
        "type": "fill",
        "q": "The substance that keeps the newborn's alveoli open by lowering surface tension is ____.",
        "accept": [
          "surfactant"
        ],
        "rationale": "Surfactant prevents alveolar collapse after the first breath."
      }
    ]
  },
  {
    "id": "anp-13-digestive",
    "unit": "Unit 5 · Maintenance, Reproduction & Continuity",
    "title": "The Digestive System & Nutrition in Pregnancy",
    "readMinutes": 16,
    "summary": "Structure of the alimentary canal and accessory organs, the processes of digestion and absorption, the liver, and the digestive changes and nutritional needs of pregnancy.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Overview of the digestive system",
        "p": "The digestive system breaks food down into small molecules the body can absorb and use, and removes the waste. It consists of the alimentary canal — mouth, pharynx, oesophagus, stomach, small intestine and large intestine — and the accessory organs: salivary glands, liver, gall bladder and pancreas. Good nutrition through this system supports both the mother and the growing fetus."
      },
      {
        "h": "The mouth, oesophagus and stomach",
        "p": "In the mouth, teeth chew food (mastication) and saliva begins to digest starch and lubricates the food. The tongue forms it into a bolus that is swallowed. The oesophagus carries the bolus to the stomach by waves of muscle contraction (peristalsis). The stomach is a muscular bag that churns food and secretes gastric juice containing hydrochloric acid and the enzyme pepsin, which begins protein digestion, forming a semi-liquid called chyme."
      },
      {
        "h": "The small and large intestine",
        "p": "The small intestine (duodenum, jejunum, ileum) is where most digestion and absorption occur. Bile and pancreatic enzymes complete digestion, and nutrients are absorbed through finger-like villi into the blood. The large intestine absorbs water and salts, forms faeces, and houses helpful bacteria; the waste is then eliminated. Slower gut transit in pregnancy allows more absorption but also predisposes to constipation."
      },
      {
        "h": "Accessory organs: liver, gall bladder and pancreas",
        "list": [
          "Liver — has many roles: it processes absorbed nutrients, stores glycogen and vitamins, makes bile and plasma proteins, detoxifies drugs and breaks down old red cells (forming bilirubin).",
          "Gall bladder — stores and concentrates bile, which it releases to emulsify fats.",
          "Pancreas — secretes digestive enzymes into the duodenum and the hormones insulin and glucagon into the blood."
        ]
      },
      {
        "h": "Digestion and absorption",
        "p": "Digestion is partly mechanical (chewing and churning) and partly chemical (enzymes breaking food into simpler molecules): carbohydrates into glucose, proteins into amino acids, and fats into fatty acids and glycerol. These products are absorbed across the gut wall into the blood and lymph and carried to the cells, where they are used for energy, growth and repair — including the building of fetal tissues.",
        "figure": {
          "caption": "Digestion breaks the three major nutrients into absorbable units.",
          "svg": "<svg viewBox=\"0 0 560 160\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Breakdown of carbohydrates, proteins and fats.\"><rect x=\"15\" y=\"30\" width=\"170\" height=\"100\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"100\" y=\"56\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Carbohydrate</text><text x=\"100\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8594; glucose</text><rect x=\"195\" y=\"30\" width=\"170\" height=\"100\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"280\" y=\"56\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Protein</text><text x=\"280\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8594; amino acids</text><rect x=\"375\" y=\"30\" width=\"170\" height=\"100\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"460\" y=\"56\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Fat</text><text x=\"460\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&#8594; fatty acids</text><text x=\"460\" y=\"104\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">&amp; glycerol</text></svg>"
        }
      },
      {
        "h": "Digestive changes in pregnancy",
        "list": [
          "Nausea and vomiting (morning sickness) in early pregnancy, linked to hormonal changes.",
          "Heartburn from relaxation of the stomach sphincter (progesterone) and pressure from the uterus.",
          "Constipation from slower gut motility and pressure of the uterus.",
          "Increased appetite and changed taste, sometimes with unusual cravings (pica).",
          "Gums may become softer and bleed more easily."
        ]
      },
      {
        "h": "Nutrition and the midwife's role",
        "p": "Good maternal nutrition is essential for fetal growth and maternal health. The midwife advises a balanced diet with adequate protein, energy, iron, calcium and vitamins; emphasises folic acid (best started before conception) to prevent neural tube defects; encourages fibre and fluids to prevent constipation; advises small frequent meals for nausea and heartburn; and promotes food safety. The midwife also recognises excessive vomiting (hyperemesis gravidarum) that needs medical care."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the structure of the alimentary canal from mouth to anus.",
      "Explain the functions of the liver.",
      "Describe the processes of digestion and absorption of the three major nutrients.",
      "Discuss the common digestive changes of pregnancy and their causes.",
      "Explain the midwife's role in promoting good nutrition in pregnancy."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Most digestion and absorption of nutrients occur in the:",
        "options": [
          "Stomach",
          "Small intestine",
          "Large intestine",
          "Oesophagus"
        ],
        "answer": 1,
        "rationale": "The small intestine is the main site of chemical digestion and nutrient absorption."
      },
      {
        "type": "mcq",
        "q": "The enzyme in the stomach that begins protein digestion is:",
        "options": [
          "Amylase",
          "Pepsin",
          "Lipase",
          "Bile"
        ],
        "answer": 1,
        "rationale": "Pepsin, activated by gastric acid, begins protein digestion in the stomach."
      },
      {
        "type": "mcq",
        "q": "The main function of the large intestine is to:",
        "options": [
          "Digest proteins",
          "Absorb water and form faeces",
          "Produce bile",
          "Secrete insulin"
        ],
        "answer": 1,
        "rationale": "The large intestine absorbs water and electrolytes and forms faeces."
      },
      {
        "type": "mcq",
        "q": "Bile, which emulsifies fats, is produced by the:",
        "options": [
          "Pancreas",
          "Stomach",
          "Liver",
          "Gall bladder"
        ],
        "answer": 2,
        "rationale": "Bile is made by the liver and stored/concentrated in the gall bladder."
      },
      {
        "type": "mcq",
        "q": "Wave-like muscular movement that moves food along the gut is called:",
        "options": [
          "Diffusion",
          "Peristalsis",
          "Osmosis",
          "Absorption"
        ],
        "answer": 1,
        "rationale": "Peristalsis is the rhythmic contraction that propels food through the canal."
      },
      {
        "type": "mcq",
        "q": "Carbohydrates are finally digested to:",
        "options": [
          "Amino acids",
          "Fatty acids",
          "Glucose",
          "Glycerol"
        ],
        "answer": 2,
        "rationale": "Carbohydrates are broken down into simple sugars such as glucose for absorption."
      },
      {
        "type": "mcq",
        "q": "Constipation is common in pregnancy mainly because of:",
        "options": [
          "Increased gut motility",
          "Slower gut motility and pressure of the uterus",
          "Lack of bile",
          "Too much pepsin"
        ],
        "answer": 1,
        "rationale": "Progesterone slows gut motility and the uterus presses on the bowel, causing constipation."
      },
      {
        "type": "mcq",
        "q": "Heartburn in pregnancy is largely due to relaxation of the stomach sphincter by:",
        "options": [
          "Insulin",
          "Progesterone",
          "Adrenaline",
          "Thyroxine"
        ],
        "answer": 1,
        "rationale": "Progesterone relaxes the cardiac sphincter, allowing acid reflux (heartburn)."
      },
      {
        "type": "mcq",
        "q": "Which nutrient is especially advised before and in early pregnancy to prevent neural tube defects?",
        "options": [
          "Vitamin C",
          "Folic acid",
          "Vitamin K",
          "Calcium"
        ],
        "answer": 1,
        "rationale": "Folic acid taken pre-conceptually and early in pregnancy helps prevent neural tube defects."
      },
      {
        "type": "mcq",
        "q": "Severe, persistent vomiting in pregnancy needing medical care is called:",
        "options": [
          "Heartburn",
          "Pica",
          "Hyperemesis gravidarum",
          "Reflux"
        ],
        "answer": 2,
        "rationale": "Hyperemesis gravidarum is excessive vomiting that can cause dehydration and needs treatment."
      },
      {
        "type": "fill",
        "q": "The wave-like muscular movement that propels food along the gut is called ____.",
        "accept": [
          "peristalsis"
        ],
        "rationale": "Peristalsis moves the bolus and chyme through the alimentary canal."
      },
      {
        "type": "fill",
        "q": "The vitamin advised before and in early pregnancy to prevent neural tube defects is ____.",
        "accept": [
          "folic acid",
          "folate"
        ],
        "rationale": "Folic acid (folate) reduces the risk of neural tube defects."
      }
    ]
  },
  {
    "id": "anp-14-urinary",
    "unit": "Unit 5 · Maintenance, Reproduction & Continuity",
    "title": "The Urinary System & Fluid Regulation",
    "readMinutes": 16,
    "summary": "Structure of the kidneys and urinary tract, the nephron and urine formation, the regulation of fluid and blood pressure, and the urinary changes and concerns of pregnancy.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Functions and structure of the urinary system",
        "p": "The urinary system removes waste, controls water and electrolyte balance, helps regulate blood pressure and pH, and produces hormones. It consists of two kidneys, two ureters, the bladder and the urethra. The kidneys filter the blood and make urine; the ureters carry urine to the bladder, which stores it; and the urethra carries urine out. In the woman the urethra is short and opens just in front of the vagina."
      },
      {
        "h": "The nephron — the working unit",
        "p": "Each kidney contains about a million nephrons. A nephron has a glomerulus (a knot of capillaries) inside a cup-shaped Bowman's capsule, leading into a long tubule. Blood is filtered in the glomerulus, and the tubule then reabsorbs the useful substances and water and secretes extra wastes, leaving urine. This is how the kidney finely controls the body's internal environment."
      },
      {
        "h": "Urine formation",
        "list": [
          "Filtration — in the glomerulus, water and small molecules are forced out of the blood into the capsule, forming filtrate.",
          "Reabsorption — useful substances (glucose, amino acids, most water and salts) are reabsorbed back into the blood from the tubule.",
          "Secretion — additional wastes and hydrogen ions are added from the blood into the tubule.",
          "The remaining fluid is urine, which drains to the bladder."
        ]
      },
      {
        "h": "Hormones and regulation of fluid",
        "p": "Several hormones act on the kidney. Antidiuretic hormone (ADH) makes the tubules reabsorb more water, concentrating the urine and conserving fluid. Aldosterone makes the kidney retain sodium (and therefore water), raising blood volume and pressure. The kidney itself releases renin, which (through the renin-angiotensin system) raises blood pressure, and erythropoietin, which stimulates red cell production. These mechanisms help keep fluid balance and blood pressure stable.",
        "figure": {
          "caption": "The three steps of urine formation in the nephron: filtration, reabsorption and secretion.",
          "svg": "<svg viewBox=\"0 0 560 160\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Steps of urine formation.\"><defs><marker id=\"anpUr14\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#831843\"/></marker></defs><rect x=\"20\" y=\"45\" width=\"140\" height=\"60\" rx=\"9\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"90\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">Filtration</text><text x=\"90\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">glomerulus</text><rect x=\"210\" y=\"45\" width=\"140\" height=\"60\" rx=\"9\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"280\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">Reabsorption</text><text x=\"280\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">useful items back</text><rect x=\"400\" y=\"45\" width=\"140\" height=\"60\" rx=\"9\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"470\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">Secretion</text><text x=\"470\" y=\"92\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">extra wastes added</text><line x1=\"160\" y1=\"75\" x2=\"206\" y2=\"75\" stroke=\"#831843\" stroke-width=\"2.5\" marker-end=\"url(#anpUr14)\"/><line x1=\"350\" y1=\"75\" x2=\"396\" y2=\"75\" stroke=\"#831843\" stroke-width=\"2.5\" marker-end=\"url(#anpUr14)\"/><text x=\"280\" y=\"135\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">Result: urine drains to the bladder</text></svg>"
        }
      },
      {
        "h": "Urinary changes in pregnancy",
        "list": [
          "Increased frequency of urination, especially early (uterus pressing on the bladder) and late (the fetal head pressing on the bladder).",
          "The kidneys work harder; blood flow and filtration rise, and a little glucose may appear in the urine.",
          "The ureters dilate and urine flow slows (progesterone and pressure), increasing the risk of urinary tract infection.",
          "Mild ankle oedema is common from fluid retention and pressure on the leg veins."
        ]
      },
      {
        "h": "Midwifery significance",
        "p": "The midwife tests the urine at every antenatal visit. Protein in the urine (proteinuria) may signal pre-eclampsia or infection; glucose may suggest gestational diabetes; ketones may indicate poor intake or hyperemesis. Because urinary infection is common and can trigger preterm labour, the midwife teaches good fluid intake and hygiene and arranges treatment of infections. After birth, the midwife ensures the woman passes urine, as a full bladder can prevent the uterus contracting and cause haemorrhage."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the structure of the urinary system and the functions of the kidney.",
      "Describe the structure of a nephron and the three steps of urine formation.",
      "Explain how ADH and aldosterone regulate fluid balance.",
      "Discuss the urinary changes that occur in pregnancy.",
      "Explain the importance of routine urine testing in antenatal care."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The functional unit of the kidney is the:",
        "options": [
          "Nephron",
          "Neurone",
          "Alveolus",
          "Villus"
        ],
        "answer": 0,
        "rationale": "The nephron is the microscopic functional unit that forms urine."
      },
      {
        "type": "mcq",
        "q": "Filtration of the blood in the nephron takes place in the:",
        "options": [
          "Bladder",
          "Glomerulus",
          "Ureter",
          "Urethra"
        ],
        "answer": 1,
        "rationale": "The glomerulus is the capillary knot where blood is filtered into Bowman's capsule."
      },
      {
        "type": "mcq",
        "q": "Which step returns useful substances such as glucose and water to the blood?",
        "options": [
          "Filtration",
          "Secretion",
          "Reabsorption",
          "Excretion"
        ],
        "answer": 2,
        "rationale": "Tubular reabsorption returns needed substances from the filtrate to the blood."
      },
      {
        "type": "mcq",
        "q": "The hormone that makes the kidney reabsorb more WATER is:",
        "options": [
          "Aldosterone",
          "Insulin",
          "Renin",
          "Antidiuretic hormone (ADH)"
        ],
        "answer": 3,
        "rationale": "ADH increases water reabsorption, concentrating urine and conserving fluid."
      },
      {
        "type": "mcq",
        "q": "The kidney hormone that stimulates red blood cell production is:",
        "options": [
          "Erythropoietin",
          "Renin",
          "Aldosterone",
          "ADH"
        ],
        "answer": 0,
        "rationale": "Erythropoietin from the kidney stimulates the bone marrow to make red cells."
      },
      {
        "type": "mcq",
        "q": "Protein in the urine of a pregnant woman may be a sign of:",
        "options": [
          "Normal pregnancy",
          "Pre-eclampsia",
          "Good hydration",
          "High calcium"
        ],
        "answer": 1,
        "rationale": "Proteinuria is a key sign of pre-eclampsia (or urinary infection) and must be acted on."
      },
      {
        "type": "mcq",
        "q": "Pregnant women are more prone to urinary tract infection partly because:",
        "options": [
          "Urine becomes more acidic",
          "The bladder shrinks",
          "The ureters dilate and urine flow slows",
          "The kidneys stop filtering"
        ],
        "answer": 2,
        "rationale": "Dilated ureters and slower flow (progesterone and pressure) favour infection."
      },
      {
        "type": "mcq",
        "q": "Frequency of urination in early pregnancy is mainly due to:",
        "options": [
          "Kidney failure",
          "Reduced blood flow",
          "Loss of ADH",
          "The uterus pressing on the bladder"
        ],
        "answer": 3,
        "rationale": "The enlarging uterus presses on the bladder, causing frequency early (and again late) in pregnancy."
      },
      {
        "type": "mcq",
        "q": "After birth, a full bladder is important to empty because it can:",
        "options": [
          "Prevent the uterus contracting and cause haemorrhage",
          "Improve milk supply",
          "Raise the blood pressure",
          "Cause constipation"
        ],
        "answer": 0,
        "rationale": "A full bladder displaces the uterus and hinders contraction, risking postpartum haemorrhage."
      },
      {
        "type": "mcq",
        "q": "The hormone that makes the kidney retain SODIUM (and water) is:",
        "options": [
          "Erythropoietin",
          "Aldosterone",
          "Prolactin",
          "Pepsin"
        ],
        "answer": 1,
        "rationale": "Aldosterone promotes sodium (and water) retention, raising blood volume and pressure."
      },
      {
        "type": "fill",
        "q": "The microscopic functional unit of the kidney is the ____.",
        "accept": [
          "nephron"
        ],
        "rationale": "Each kidney has about a million nephrons that form urine."
      },
      {
        "type": "fill",
        "q": "Protein in the urine of a pregnant woman, called ____, may indicate pre-eclampsia.",
        "accept": [
          "proteinuria"
        ],
        "rationale": "Proteinuria is a cardinal sign of pre-eclampsia."
      }
    ]
  },
  {
    "id": "anp-15-female-repro",
    "unit": "Unit 5 · Maintenance, Reproduction & Continuity",
    "title": "The Female Reproductive System",
    "readMinutes": 18,
    "summary": "Detailed anatomy of the external and internal female reproductive organs — the vulva, vagina, uterus, uterine tubes and ovaries — their blood and nerve supply, and changes during pregnancy.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Overview",
        "p": "The female reproductive system produces ova, receives sperm, provides the site of fertilisation, nurtures the developing fetus and gives birth. It is divided into the external genitalia (the vulva) and the internal organs (vagina, uterus, two uterine tubes and two ovaries). The midwife must know this anatomy thoroughly to perform examinations, conduct birth and recognise abnormality."
      },
      {
        "h": "The external genitalia (vulva)",
        "list": [
          "Mons pubis — the fatty pad over the symphysis pubis, covered with hair after puberty.",
          "Labia majora — two outer folds of skin enclosing the other structures.",
          "Labia minora — two inner folds enclosing the vestibule.",
          "Clitoris — a small, highly sensitive erectile organ at the front.",
          "Vestibule — the area enclosed by the labia minora, into which the urethra and vagina open.",
          "Bartholin's glands — paired glands that secrete mucus for lubrication.",
          "Perineum — the area between the vaginal opening and the anus, important in childbirth."
        ]
      },
      {
        "h": "The vagina",
        "p": "The vagina is a muscular, distensible tube about 7.5–10 cm long, lying between the bladder and the rectum. It runs upward and backward from the vulva to the cervix. Its walls are lined by stratified squamous epithelium and lie in folds (rugae) that allow great stretching during birth. The vagina is normally acidic, which protects against infection. It receives the penis, allows menstrual flow to escape and forms the lower part of the birth canal."
      },
      {
        "h": "The uterus",
        "p": "The uterus is a hollow, pear-shaped muscular organ in the pelvis, where the fertilised ovum implants and the fetus grows. It has three parts: the fundus (the rounded top above the tubes), the body (corpus) and the cervix (the narrow neck that opens into the vagina). Its wall has three layers: the perimetrium (outer serous covering), the myometrium (thick smooth muscle that contracts in labour and after birth), and the endometrium (the inner lining that thickens each cycle and is shed as menstruation, or supports a pregnancy). The uterus is normally anteverted and anteflexed.",
        "figure": {
          "caption": "The uterus: fundus, body and cervix, with the three wall layers (perimetrium, myometrium, endometrium).",
          "svg": "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Parts and layers of the uterus.\"><rect x=\"20\" y=\"25\" width=\"230\" height=\"150\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"135\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">Parts</text><text x=\"135\" y=\"78\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Fundus (top)</text><text x=\"135\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Body (corpus)</text><text x=\"135\" y=\"126\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Cervix (neck)</text><rect x=\"270\" y=\"25\" width=\"230\" height=\"150\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"385\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">Wall layers</text><text x=\"385\" y=\"78\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Perimetrium (outer)</text><text x=\"385\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Myometrium (muscle)</text><text x=\"385\" y=\"126\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Endometrium (lining)</text></svg>"
        }
      },
      {
        "h": "The cervix",
        "p": "The cervix is the lower, neck-like part of the uterus that projects into the vagina. Its canal has an internal os (opening into the uterine cavity) and an external os (opening into the vagina). Cervical glands secrete mucus that changes with the cycle and forms a protective plug in pregnancy. In labour the cervix softens (ripens), thins (effaces) and opens (dilates) to allow the baby to be born — changes the midwife assesses to monitor progress."
      },
      {
        "h": "The uterine (fallopian) tubes",
        "p": "The two uterine tubes extend from the upper uterus toward the ovaries. Each has a funnel-shaped end (the infundibulum) with finger-like fimbriae that draw in the released ovum, a wide ampulla (the usual site of fertilisation), and a narrow isthmus joining the uterus. The lining is ciliated and muscular, moving the ovum (or early embryo) toward the uterus. Damage or blockage can cause infertility or a dangerous tubal (ectopic) pregnancy."
      },
      {
        "h": "The ovaries",
        "p": "The two ovaries are almond-shaped glands on either side of the uterus. They have two functions: producing ova (one usually matures and is released each cycle) and secreting the hormones oestrogen and progesterone. At birth the ovaries already contain all the immature follicles a woman will have; from puberty to the menopause one matures each month under the control of pituitary hormones."
      },
      {
        "h": "Blood, nerve supply and changes in pregnancy",
        "p": "The uterus is supplied mainly by the uterine arteries (with the ovarian arteries) and drained by corresponding veins; this rich supply enlarges greatly in pregnancy to nourish the fetus and is the reason haemorrhage can be rapid. In pregnancy the uterus grows from about 50 g to around 1000 g, rising out of the pelvis into the abdomen; its blood flow multiplies; the cervix softens and forms a mucus plug; and the vagina becomes more vascular and distensible ready for birth. The midwife uses these landmarks (e.g. fundal height) to assess growth."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the external genitalia (vulva) of the female.",
      "Describe the structure of the uterus, including its parts and wall layers.",
      "Describe the structure and functions of the uterine (fallopian) tubes.",
      "State the functions of the ovaries.",
      "Describe the changes that occur in the uterus and cervix during pregnancy."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The thick muscular layer of the uterine wall is the:",
        "options": [
          "Perimetrium",
          "Myometrium",
          "Endometrium",
          "Parametrium"
        ],
        "answer": 1,
        "rationale": "The myometrium is the smooth-muscle layer that contracts in labour and after birth."
      },
      {
        "type": "mcq",
        "q": "The inner lining of the uterus that is shed as menstruation is the:",
        "options": [
          "Endometrium",
          "Myometrium",
          "Perimetrium",
          "Peritoneum"
        ],
        "answer": 0,
        "rationale": "The endometrium thickens each cycle and is shed if pregnancy does not occur."
      },
      {
        "type": "mcq",
        "q": "The usual site of fertilisation is the:",
        "options": [
          "Uterus",
          "Cervix",
          "Ampulla of the uterine tube",
          "Vagina"
        ],
        "answer": 2,
        "rationale": "Fertilisation normally occurs in the ampulla (wide part) of the uterine tube."
      },
      {
        "type": "mcq",
        "q": "The two main functions of the ovary are producing ova and secreting:",
        "options": [
          "Insulin and glucagon",
          "Oestrogen and progesterone",
          "Oxytocin and prolactin",
          "Renin and ADH"
        ],
        "answer": 1,
        "rationale": "The ovaries produce ova and the hormones oestrogen and progesterone."
      },
      {
        "type": "mcq",
        "q": "The rounded top of the uterus above the entry of the tubes is the:",
        "options": [
          "Cervix",
          "Body",
          "Fundus",
          "Isthmus"
        ],
        "answer": 2,
        "rationale": "The fundus is the dome above the openings of the uterine tubes."
      },
      {
        "type": "mcq",
        "q": "The finger-like processes that draw the released ovum into the tube are the:",
        "options": [
          "Villi",
          "Rugae",
          "Fimbriae",
          "Cilia"
        ],
        "answer": 2,
        "rationale": "The fimbriae at the infundibulum sweep the ovum into the uterine tube."
      },
      {
        "type": "mcq",
        "q": "The folds in the vaginal wall that allow it to stretch during birth are called:",
        "options": [
          "Villi",
          "Rugae",
          "Septa",
          "Crypts"
        ],
        "answer": 1,
        "rationale": "Rugae are transverse folds that let the vagina distend during childbirth."
      },
      {
        "type": "mcq",
        "q": "In labour, the opening of the cervix is called:",
        "options": [
          "Effacement",
          "Dilatation",
          "Involution",
          "Engagement"
        ],
        "answer": 1,
        "rationale": "Dilatation is the opening of the cervix; effacement is its thinning."
      },
      {
        "type": "mcq",
        "q": "A pregnancy implanted in the uterine tube is called a/an:",
        "options": [
          "Molar pregnancy",
          "Ectopic (tubal) pregnancy",
          "Multiple pregnancy",
          "Normal pregnancy"
        ],
        "answer": 1,
        "rationale": "An ectopic pregnancy implants outside the uterus, most often in the tube, and is dangerous."
      },
      {
        "type": "mcq",
        "q": "By the end of pregnancy the uterus weighs approximately:",
        "options": [
          "50 g",
          "200 g",
          "1000 g",
          "5000 g"
        ],
        "answer": 2,
        "rationale": "The uterus grows from about 50 g to around 1000 g at term."
      },
      {
        "type": "fill",
        "q": "The narrow neck of the uterus that opens into the vagina is the ____.",
        "accept": [
          "cervix"
        ],
        "rationale": "The cervix dilates and effaces in labour."
      },
      {
        "type": "fill",
        "q": "The usual site of fertilisation is the ____ of the uterine tube.",
        "accept": [
          "ampulla"
        ],
        "rationale": "Fertilisation normally occurs in the ampulla of the uterine tube."
      }
    ]
  },
  {
    "id": "anp-16-menstrual-cycle",
    "unit": "Unit 5 · Maintenance, Reproduction & Continuity",
    "title": "The Ovarian & Menstrual Cycle",
    "readMinutes": 17,
    "summary": "The phases of the ovarian and uterine (menstrual) cycle, the hormones that control them, ovulation and the fertile period, and the relevance of cycle knowledge to midwifery and family planning.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is the menstrual cycle?",
        "p": "The menstrual cycle is the monthly series of changes, controlled by hormones, that prepares the woman's body for a possible pregnancy. It runs from the first day of one menstruation to the first day of the next — about 28 days on average, though it varies. It involves coordinated changes in the ovary (the ovarian cycle) and in the uterine lining (the uterine or menstrual cycle)."
      },
      {
        "h": "Hormonal control",
        "p": "The cycle is driven by the hypothalamus and pituitary acting on the ovaries. The hypothalamus releases GnRH, which makes the pituitary secrete FSH and LH. FSH stimulates ovarian follicles to grow; the growing follicle secretes oestrogen. A mid-cycle surge of LH triggers ovulation. The empty follicle becomes the corpus luteum, which secretes progesterone (and some oestrogen). These ovarian hormones in turn control the uterine lining and, by feedback, the pituitary."
      },
      {
        "h": "The ovarian cycle",
        "list": [
          "Follicular phase — FSH stimulates several follicles; one becomes dominant and matures, secreting oestrogen.",
          "Ovulation — about day 14, the LH surge causes the mature follicle to release its ovum.",
          "Luteal phase — the corpus luteum forms and secretes progesterone; if there is no pregnancy it degenerates after about 12–14 days, and hormone levels fall."
        ]
      },
      {
        "h": "The uterine (menstrual) cycle",
        "list": [
          "Menstrual phase (about days 1–5) — the endometrium is shed as the menstrual flow because hormone levels have fallen.",
          "Proliferative phase (about days 6–14) — oestrogen rebuilds and thickens the endometrium.",
          "Secretory phase (about days 15–28) — progesterone makes the endometrium glandular and rich in nutrients, ready to receive an embryo.",
          "If fertilisation does not occur, the corpus luteum dies, hormones fall, and the cycle begins again with menstruation."
        ]
      },
      {
        "h": "Ovulation and the fertile period",
        "p": "Ovulation is the release of the mature ovum, usually around day 14 of a 28-day cycle, about 14 days before the next period. The ovum survives about 24 hours and sperm can survive a few days in the female tract, so the 'fertile window' spans several days around ovulation. Signs of ovulation include a small rise in basal body temperature and clearer, stretchy cervical mucus. This knowledge underpins natural family planning and helps couples trying to conceive.",
        "figure": {
          "caption": "The 28-day cycle: menstruation, proliferative phase, ovulation (~day 14), and secretory phase.",
          "svg": "<svg viewBox=\"0 0 560 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Phases of the menstrual cycle across 28 days.\"><rect x=\"20\" y=\"40\" width=\"90\" height=\"50\" rx=\"6\" fill=\"#BE185D\" stroke=\"#831843\" stroke-width=\"1.5\"/><text x=\"65\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#FFFFFF\">Menstrual</text><text x=\"65\" y=\"78\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#FFFFFF\">day 1&#8211;5</text><rect x=\"115\" y=\"40\" width=\"160\" height=\"50\" rx=\"6\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"1.5\"/><text x=\"195\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#831843\">Proliferative</text><text x=\"195\" y=\"78\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">day 6&#8211;14 (oestrogen)</text><rect x=\"280\" y=\"32\" width=\"30\" height=\"66\" rx=\"4\" fill=\"#15803D\"/><text x=\"295\" y=\"115\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803D\">Ovulation ~14</text><rect x=\"315\" y=\"40\" width=\"225\" height=\"50\" rx=\"6\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"1.5\"/><text x=\"427\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#831843\">Secretory</text><text x=\"427\" y=\"78\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">day 15&#8211;28 (progesterone)</text></svg>"
        }
      },
      {
        "h": "If pregnancy occurs",
        "p": "If the ovum is fertilised and implants, the developing placenta secretes hCG, which keeps the corpus luteum alive so it continues to produce progesterone. Progesterone maintains the endometrium, so menstruation does not occur — the missed period is often the first sign of pregnancy. Later the placenta itself takes over hormone production."
      },
      {
        "h": "Relevance to midwifery",
        "p": "Knowledge of the cycle lets the midwife estimate the date of conception and the expected date of delivery from the last menstrual period, advise on the fertile period for couples planning or avoiding pregnancy, explain natural family planning, recognise menstrual disorders, and counsel women on contraception after birth. It also underpins understanding of how hormonal contraceptives work by preventing ovulation."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the hormonal control of the menstrual cycle.",
      "Describe the phases of the ovarian cycle.",
      "Describe the changes in the uterine lining during the menstrual cycle.",
      "Explain ovulation and the fertile period.",
      "Discuss the relevance of menstrual cycle knowledge to midwifery practice."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The average length of the menstrual cycle is about:",
        "options": [
          "14 days",
          "21 days",
          "28 days",
          "40 days"
        ],
        "answer": 2,
        "rationale": "The cycle averages about 28 days, counted from the first day of one period to the next."
      },
      {
        "type": "mcq",
        "q": "Ovulation is triggered by a surge of:",
        "options": [
          "FSH",
          "Oestrogen",
          "LH (luteinising hormone)",
          "Progesterone"
        ],
        "answer": 2,
        "rationale": "A mid-cycle LH surge causes the mature follicle to release its ovum."
      },
      {
        "type": "mcq",
        "q": "After ovulation, the empty follicle becomes the:",
        "options": [
          "Corpus albicans",
          "Corpus luteum",
          "Graafian follicle",
          "Endometrium"
        ],
        "answer": 1,
        "rationale": "The ruptured follicle forms the corpus luteum, which secretes progesterone."
      },
      {
        "type": "mcq",
        "q": "The hormone that rebuilds and thickens the endometrium in the proliferative phase is:",
        "options": [
          "Progesterone",
          "Oestrogen",
          "LH",
          "hCG"
        ],
        "answer": 1,
        "rationale": "Oestrogen from the growing follicle drives proliferation of the endometrium."
      },
      {
        "type": "mcq",
        "q": "The phase of the uterine cycle dominated by progesterone, preparing the lining for implantation, is the:",
        "options": [
          "Menstrual phase",
          "Proliferative phase",
          "Secretory phase",
          "Follicular phase"
        ],
        "answer": 2,
        "rationale": "Progesterone from the corpus luteum makes the secretory (glandular) endometrium."
      },
      {
        "type": "mcq",
        "q": "In a regular 28-day cycle, ovulation usually occurs around day:",
        "options": [
          "7",
          "14",
          "21",
          "28"
        ],
        "answer": 1,
        "rationale": "Ovulation typically occurs about 14 days before the next period — around day 14."
      },
      {
        "type": "mcq",
        "q": "Menstruation occurs because, in the absence of pregnancy, levels of ____ fall.",
        "options": [
          "FSH and LH only",
          "oestrogen and progesterone",
          "insulin and glucagon",
          "ADH and aldosterone"
        ],
        "answer": 1,
        "rationale": "The corpus luteum dies, oestrogen and progesterone fall, and the endometrium is shed."
      },
      {
        "type": "mcq",
        "q": "If pregnancy occurs, the corpus luteum is kept alive by:",
        "options": [
          "FSH",
          "hCG from the early placenta",
          "LH",
          "Prolactin"
        ],
        "answer": 1,
        "rationale": "hCG from the developing placenta maintains the corpus luteum and its progesterone output."
      },
      {
        "type": "mcq",
        "q": "A released ovum can usually be fertilised for about:",
        "options": [
          "1 hour",
          "24 hours",
          "7 days",
          "14 days"
        ],
        "answer": 1,
        "rationale": "The ovum survives roughly 24 hours, though the fertile window is wider because sperm survive longer."
      },
      {
        "type": "mcq",
        "q": "Most hormonal contraceptives prevent pregnancy mainly by:",
        "options": [
          "Thickening the endometrium",
          "Preventing ovulation",
          "Increasing FSH",
          "Causing menstruation"
        ],
        "answer": 1,
        "rationale": "Combined hormonal contraceptives chiefly suppress the LH surge and prevent ovulation."
      },
      {
        "type": "fill",
        "q": "The release of the mature ovum from the ovary is called ____.",
        "accept": [
          "ovulation"
        ],
        "rationale": "Ovulation, triggered by the LH surge, releases the ovum around day 14."
      },
      {
        "type": "fill",
        "q": "After ovulation the empty follicle forms the corpus ____, which secretes progesterone.",
        "accept": [
          "luteum",
          "corpus luteum"
        ],
        "rationale": "The corpus luteum produces progesterone in the luteal phase."
      }
    ]
  },
  {
    "id": "anp-17-male-repro",
    "unit": "Unit 5 · Maintenance, Reproduction & Continuity",
    "title": "The Male Reproductive System",
    "readMinutes": 15,
    "summary": "Brief anatomy of the male reproductive organs, spermatogenesis, the structure of the sperm, and hormonal control, in the context of the couple's fertility and conception.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Overview and relevance",
        "p": "The male reproductive system produces sperm and the male hormone testosterone and delivers sperm into the female tract. Although the midwife cares chiefly for the woman, a basic understanding of male reproduction is needed to advise couples on conception and fertility, and because the sperm contributes half of the baby's genes and determines its sex."
      },
      {
        "h": "The testes and scrotum",
        "p": "The two testes are the male gonads, held in the scrotum outside the body. The scrotal position keeps the testes a little cooler than core temperature, which is necessary for healthy sperm production. Inside each testis, the seminiferous tubules produce sperm, and the interstitial (Leydig) cells produce testosterone."
      },
      {
        "h": "The duct system and accessory glands",
        "list": [
          "Epididymis — a coiled tube on each testis where sperm mature and are stored.",
          "Vas deferens (ductus deferens) — carries sperm from the epididymis toward the urethra.",
          "Seminal vesicles — add a nutrient-rich fluid that nourishes the sperm.",
          "Prostate gland — adds an alkaline fluid that helps protect sperm in the acidic vagina.",
          "Urethra — the final passage, shared with the urinary system, carrying semen out through the penis."
        ]
      },
      {
        "h": "Spermatogenesis",
        "p": "Spermatogenesis is the formation of sperm in the seminiferous tubules. By meiosis, the chromosome number is halved so each sperm is haploid (23 chromosomes), carrying either an X or a Y chromosome. Production is continuous from puberty and takes about 70 days for each sperm to mature. Millions of sperm are produced and released in each ejaculation, but only one fertilises the ovum."
      },
      {
        "h": "Structure of the sperm",
        "p": "A mature sperm is a tiny motile cell with three parts: a head (containing the nucleus with the genetic material, capped by the acrosome that helps it penetrate the ovum), a midpiece (packed with mitochondria for energy), and a tail (flagellum) that lashes to propel it forward. This streamlined design lets the sperm swim through the female tract to reach the ovum.",
        "figure": {
          "caption": "The sperm: head (genetic material and acrosome), midpiece (energy) and tail (for movement).",
          "svg": "<svg viewBox=\"0 0 560 130\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Parts of a sperm cell.\"><rect x=\"20\" y=\"35\" width=\"160\" height=\"60\" rx=\"8\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"100\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">HEAD</text><text x=\"100\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">nucleus + acrosome</text><rect x=\"195\" y=\"35\" width=\"160\" height=\"60\" rx=\"8\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"275\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">MIDPIECE</text><text x=\"275\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">mitochondria (energy)</text><rect x=\"370\" y=\"35\" width=\"170\" height=\"60\" rx=\"8\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"455\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">TAIL</text><text x=\"455\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">flagellum (movement)</text></svg>"
        }
      },
      {
        "h": "Hormonal control",
        "p": "The same pituitary hormones that control the ovary also control the testis. FSH stimulates the seminiferous tubules to make sperm, and LH stimulates the Leydig cells to make testosterone. Testosterone is responsible for male sexual development, the secondary sexual characteristics, and the drive that maintains sperm production. The system is regulated by negative feedback on the pituitary."
      },
      {
        "h": "Conception and the midwife's role",
        "p": "Conception requires healthy sperm to be deposited near the cervix around the time of ovulation, to swim up and fertilise the ovum in the uterine tube. Male factors (low sperm count or poor motility) account for a significant share of infertility, so the midwife considers both partners when advising couples. Healthy lifestyle advice — avoiding excess heat, smoking, alcohol and certain drugs — supports sperm health."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the structure of the testis and the function of the scrotum.",
      "Name the parts of the male duct system and accessory glands and their functions.",
      "Describe the process of spermatogenesis.",
      "Describe the structure of a sperm and the function of each part.",
      "Explain the hormonal control of male reproduction."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Sperm are produced in the:",
        "options": [
          "Prostate gland",
          "Seminiferous tubules of the testis",
          "Epididymis",
          "Seminal vesicles"
        ],
        "answer": 1,
        "rationale": "The seminiferous tubules within the testes produce sperm."
      },
      {
        "type": "mcq",
        "q": "The scrotum keeps the testes:",
        "options": [
          "Warmer than the body",
          "Slightly cooler than the body",
          "At exactly body temperature",
          "Inside the abdomen"
        ],
        "answer": 1,
        "rationale": "A slightly cooler temperature is needed for healthy sperm production."
      },
      {
        "type": "mcq",
        "q": "Sperm mature and are stored in the:",
        "options": [
          "Vas deferens",
          "Epididymis",
          "Prostate",
          "Urethra"
        ],
        "answer": 1,
        "rationale": "The epididymis is the coiled tube where sperm mature and are stored."
      },
      {
        "type": "mcq",
        "q": "The male hormone testosterone is produced by the:",
        "options": [
          "Seminiferous tubules",
          "Leydig (interstitial) cells",
          "Prostate gland",
          "Seminal vesicles"
        ],
        "answer": 1,
        "rationale": "The interstitial (Leydig) cells of the testis secrete testosterone."
      },
      {
        "type": "mcq",
        "q": "The chromosome number of a mature sperm is:",
        "options": [
          "46",
          "23",
          "44",
          "22"
        ],
        "answer": 1,
        "rationale": "Sperm are haploid (23 chromosomes), formed by meiosis."
      },
      {
        "type": "mcq",
        "q": "The part of the sperm that provides energy for movement is the:",
        "options": [
          "Head",
          "Acrosome",
          "Midpiece",
          "Tail"
        ],
        "answer": 2,
        "rationale": "The midpiece is packed with mitochondria that supply energy for the tail."
      },
      {
        "type": "mcq",
        "q": "The gland that adds alkaline fluid to protect sperm in the acidic vagina is the:",
        "options": [
          "Prostate",
          "Thyroid",
          "Adrenal",
          "Pituitary"
        ],
        "answer": 0,
        "rationale": "The prostate adds alkaline secretion that helps neutralise vaginal acidity."
      },
      {
        "type": "mcq",
        "q": "The pituitary hormone that stimulates sperm production is:",
        "options": [
          "FSH",
          "Prolactin",
          "ADH",
          "Oxytocin"
        ],
        "answer": 0,
        "rationale": "FSH stimulates the seminiferous tubules to make sperm, as it does follicles in the female."
      },
      {
        "type": "mcq",
        "q": "The cap on the head of the sperm that helps it penetrate the ovum is the:",
        "options": [
          "Flagellum",
          "Acrosome",
          "Midpiece",
          "Nucleus"
        ],
        "answer": 1,
        "rationale": "The acrosome contains enzymes that help the sperm penetrate the ovum."
      },
      {
        "type": "mcq",
        "q": "Roughly how long does it take for a sperm to mature?",
        "options": [
          "About 24 hours",
          "About 7 days",
          "About 70 days",
          "About 1 year"
        ],
        "answer": 2,
        "rationale": "Spermatogenesis takes approximately 70 days for each sperm to mature."
      },
      {
        "type": "fill",
        "q": "The male hormone produced by the Leydig cells of the testis is ____.",
        "accept": [
          "testosterone"
        ],
        "rationale": "Testosterone drives male development and maintains sperm production."
      },
      {
        "type": "fill",
        "q": "Sperm mature and are stored in the ____.",
        "accept": [
          "epididymis"
        ],
        "rationale": "The epididymis is the site of sperm maturation and storage."
      }
    ]
  },
  {
    "id": "anp-18-breast-lactation",
    "unit": "Unit 5 · Maintenance, Reproduction & Continuity",
    "title": "The Breast & Physiology of Lactation",
    "readMinutes": 17,
    "summary": "Structure of the breast, changes in pregnancy, the hormonal control of milk production and ejection, the composition and stages of breast milk, and the midwife's role in supporting breastfeeding.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Structure of the breast",
        "p": "The breast (mammary gland) is a modified sweat gland that produces milk. Each breast contains 15–20 lobes, divided into lobules made of clusters of milk-secreting sacs called alveoli. Milk drains from the alveoli through small ducts (lactiferous ducts) that converge toward the nipple. The nipple is surrounded by the darker areola, which contains small glands (Montgomery's tubercles) that lubricate and protect the skin. Supporting fat and fibrous tissue give the breast its shape."
      },
      {
        "h": "Changes during pregnancy",
        "p": "Under the influence of oestrogen, progesterone and other hormones, the breasts prepare for feeding. The ducts and alveoli grow and multiply, the breasts enlarge and become tender, the areola darkens, Montgomery's tubercles enlarge, and the blood supply increases. From about mid-pregnancy the breasts can produce colostrum, the first milk. Prolactin is rising, but high placental progesterone prevents full milk production until after birth."
      },
      {
        "h": "Hormonal control of lactation",
        "p": "Two hormones are central. Prolactin, from the anterior pituitary, stimulates the alveoli to PRODUCE milk; after birth, the fall in placental hormones lets prolactin act fully, and the baby's suckling keeps prolactin high (the more the baby feeds, the more milk is made). Oxytocin, from the posterior pituitary, causes the let-down (milk-ejection) reflex: suckling triggers oxytocin, which makes cells around the alveoli contract and squeeze milk down the ducts to the nipple.",
        "figure": {
          "caption": "Lactation: prolactin makes the milk; oxytocin lets it down. Suckling drives both, on a supply-and-demand basis.",
          "svg": "<svg viewBox=\"0 0 560 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Hormonal control of lactation.\"><rect x=\"20\" y=\"30\" width=\"240\" height=\"120\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"140\" y=\"56\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">PROLACTIN</text><text x=\"140\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">anterior pituitary</text><text x=\"140\" y=\"108\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">makes the milk</text><text x=\"140\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">supply &amp; demand</text><rect x=\"300\" y=\"30\" width=\"240\" height=\"120\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"420\" y=\"56\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">OXYTOCIN</text><text x=\"420\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">posterior pituitary</text><text x=\"420\" y=\"108\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">lets the milk down</text><text x=\"420\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">milk-ejection reflex</text></svg>"
        }
      },
      {
        "h": "Composition and stages of breast milk",
        "list": [
          "Colostrum — the first milk (days 1–3), thick and yellowish; small in volume but rich in protein and protective antibodies, and slightly laxative to help pass meconium.",
          "Transitional milk — follows colostrum as volume increases over the first week or two.",
          "Mature milk — established milk; foremilk at the start of a feed is more watery to quench thirst, hindmilk later is richer in fat and energy.",
          "Breast milk contains the right balance of nutrients, water, antibodies and enzymes for the baby and changes to meet the baby's needs."
        ]
      },
      {
        "h": "Benefits of breastfeeding",
        "list": [
          "For the baby — ideal nutrition, protection against infection (passive immunity), easy digestion, and reduced risk of allergy and later disease.",
          "For the mother — helps the uterus contract (oxytocin) and reduces bleeding, aids return to pre-pregnancy weight, provides some natural child spacing, and lowers the risk of certain cancers.",
          "Practical — always available, at the right temperature, clean and free."
        ]
      },
      {
        "h": "The midwife's role in supporting breastfeeding",
        "p": "The midwife promotes and supports breastfeeding from pregnancy onward: encouraging early skin-to-skin contact and a first feed soon after birth, teaching correct positioning and attachment (latch) to prevent sore nipples and ensure effective feeding, advising feeding on demand to build supply, and reassuring the mother. The midwife recognises and helps with problems such as engorgement, blocked ducts and mastitis, and supports mothers who cannot or choose not to breastfeed."
      },
      {
        "h": "Suppression and common problems",
        "p": "If breastfeeding does not take place, milk production naturally settles as the breasts are not emptied (feedback inhibition). Common problems include engorgement (overfull, tense breasts), sore or cracked nipples (usually from poor attachment), blocked ducts, and mastitis (inflammation, sometimes with infection, causing a red, painful area and fever) — which the midwife manages with continued feeding/expressing, support and, where needed, medical treatment."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the structure of the breast.",
      "Explain the hormonal control of milk production and the let-down reflex.",
      "Describe colostrum and the stages of breast milk.",
      "Discuss the benefits of breastfeeding for mother and baby.",
      "Explain the midwife's role in supporting successful breastfeeding."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Milk is produced in the breast by the:",
        "options": [
          "Alveoli",
          "Lactiferous ducts",
          "Nipple",
          "Areola"
        ],
        "answer": 0,
        "rationale": "The alveoli (milk-secreting sacs) produce milk, which drains via the ducts."
      },
      {
        "type": "mcq",
        "q": "The hormone that stimulates milk PRODUCTION is:",
        "options": [
          "Oxytocin",
          "Prolactin",
          "Oestrogen",
          "Progesterone"
        ],
        "answer": 1,
        "rationale": "Prolactin from the anterior pituitary drives milk synthesis in the alveoli."
      },
      {
        "type": "mcq",
        "q": "The let-down (milk-ejection) reflex is caused by:",
        "options": [
          "Prolactin",
          "FSH",
          "Oxytocin",
          "Insulin"
        ],
        "answer": 2,
        "rationale": "Oxytocin contracts cells around the alveoli, ejecting milk into the ducts."
      },
      {
        "type": "mcq",
        "q": "The first milk, rich in antibodies, is called:",
        "options": [
          "Hindmilk",
          "Foremilk",
          "Transitional milk",
          "Colostrum"
        ],
        "answer": 3,
        "rationale": "Colostrum is the antibody-rich first milk produced in the first few days."
      },
      {
        "type": "mcq",
        "q": "Milk production largely works on a principle of:",
        "options": [
          "Supply and demand (suckling)",
          "Fixed daily amount",
          "Random secretion",
          "Once-a-day release"
        ],
        "answer": 0,
        "rationale": "The more the baby suckles, the more prolactin and milk are produced."
      },
      {
        "type": "mcq",
        "q": "Which is a benefit of breastfeeding FOR THE MOTHER?",
        "options": [
          "Increases blood pressure",
          "Helps the uterus contract and reduces bleeding",
          "Causes weight gain",
          "Increases infection risk"
        ],
        "answer": 1,
        "rationale": "Suckling releases oxytocin, which helps the uterus contract and reduces postpartum bleeding."
      },
      {
        "type": "mcq",
        "q": "The richer, higher-fat milk released later in a feed is called:",
        "options": [
          "Foremilk",
          "Colostrum",
          "Hindmilk",
          "Whey"
        ],
        "answer": 2,
        "rationale": "Hindmilk is higher in fat and energy; foremilk early in the feed is more watery."
      },
      {
        "type": "mcq",
        "q": "Sore or cracked nipples are most often caused by:",
        "options": [
          "Too much milk",
          "Early skin-to-skin contact",
          "Drinking water",
          "Poor positioning and attachment"
        ],
        "answer": 3,
        "rationale": "Incorrect latch is the usual cause of sore nipples; correcting attachment helps."
      },
      {
        "type": "mcq",
        "q": "Inflammation of the breast, often with a red painful area and fever, is called:",
        "options": [
          "Mastitis",
          "Engorgement",
          "Colostrum",
          "Galactosaemia"
        ],
        "answer": 0,
        "rationale": "Mastitis is breast inflammation (sometimes infected); feeding continues with support and treatment."
      },
      {
        "type": "mcq",
        "q": "The small glands on the areola that lubricate the skin are:",
        "options": [
          "Bartholin's glands",
          "Montgomery's tubercles",
          "Sebaceous follicles",
          "Lymph nodes"
        ],
        "answer": 1,
        "rationale": "Montgomery's tubercles on the areola secrete lubricant that protects the skin in feeding."
      },
      {
        "type": "fill",
        "q": "The hormone responsible for the milk-ejection (let-down) reflex is ____.",
        "accept": [
          "oxytocin"
        ],
        "rationale": "Oxytocin contracts the cells around the alveoli to release milk."
      },
      {
        "type": "fill",
        "q": "The antibody-rich first milk produced in the first few days is called ____.",
        "accept": [
          "colostrum"
        ],
        "rationale": "Colostrum gives the newborn protective antibodies and is mildly laxative."
      }
    ]
  },
  {
    "id": "anp-19-fertilisation-fetal-skull",
    "unit": "Unit 5 · Maintenance, Reproduction & Continuity",
    "title": "Fertilisation, Early Development & the Fetal Skull",
    "readMinutes": 18,
    "summary": "Fertilisation and implantation, the development of the embryo and the membranes, the formation and functions of the placenta and amniotic fluid, and the anatomy of the fetal skull relevant to birth.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Fertilisation",
        "p": "Fertilisation is the fusion of an ovum and a sperm to form a single cell, the zygote. It normally occurs in the ampulla of the uterine tube within about a day of ovulation. Many sperm reach the ovum but only one penetrates it; the ovum then forms a barrier preventing other sperm entering. The 23 chromosomes of the ovum join the 23 of the sperm, restoring the full 46 and determining the baby's genetic make-up and sex."
      },
      {
        "h": "Cleavage and implantation",
        "p": "The zygote divides repeatedly (cleavage) as it travels down the tube to the uterus, becoming a solid ball (morula) and then a hollow ball of cells (blastocyst). About a week after fertilisation, the blastocyst implants into the prepared endometrium, now called the decidua. The outer cells (trophoblast) will form the placenta and membranes; the inner cell mass will become the embryo. Implantation marks the start of hormone production (hCG) that maintains the pregnancy."
      },
      {
        "h": "Embryonic and fetal development",
        "p": "The embryonic period (up to about 8 weeks) is when the major organs and body systems form; this is the time the developing baby is most vulnerable to harmful influences (teratogens) such as certain drugs, infections and alcohol. From about 9 weeks the baby is called a fetus, and development is mainly growth and maturation of the organs already formed. Knowledge of these stages guides the midwife's advice on safe behaviour, especially in early pregnancy."
      },
      {
        "h": "The placenta, membranes and umbilical cord",
        "p": "The placenta develops from the trophoblast and the maternal decidua and is fully formed by about 12 weeks. It is the organ of exchange (oxygen, nutrients, antibodies to the fetus; carbon dioxide and wastes back to the mother), a barrier against some harmful substances, and a major endocrine gland. The fetus is enclosed in two membranes — the inner amnion and the outer chorion — that contain the amniotic fluid, and is joined to the placenta by the umbilical cord (one vein, two arteries)."
      },
      {
        "h": "Amniotic fluid",
        "list": [
          "Cushions and protects the fetus from injury.",
          "Allows the fetus to move freely, helping muscle and limb development.",
          "Maintains an even temperature.",
          "Allows symmetrical growth and prevents the membranes sticking to the fetus.",
          "Has mild antibacterial action; during labour the 'fore-waters' help dilate the cervix.",
          "The amount (about 500–1000 mL near term) is assessed by the midwife — too much (polyhydramnios) or too little (oligohydramnios) may signal a problem."
        ]
      },
      {
        "h": "The fetal skull: bones, sutures and fontanelles",
        "p": "The fetal skull is of great importance because the head is usually the largest part to be born and largely determines whether labour is straightforward. The vault is made of several bones (two frontal, two parietal, two temporal and the occipital) joined by soft membranous sutures, with wider soft areas called fontanelles where sutures meet. The anterior fontanelle (bregma) is diamond-shaped and the posterior fontanelle is small and triangular. These soft joints let the bones move and overlap (moulding) so the head can adapt to the pelvis during birth, and let the midwife identify the position of the head on vaginal examination.",
        "figure": {
          "caption": "The fetal skull vault: sutures and the diamond-shaped anterior fontanelle and triangular posterior fontanelle.",
          "svg": "<svg viewBox=\"0 0 520 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sutures and fontanelles of the fetal skull.\"><rect x=\"20\" y=\"25\" width=\"230\" height=\"150\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"135\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">Fontanelles</text><text x=\"135\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Anterior (bregma):</text><text x=\"135\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">diamond-shaped</text><text x=\"135\" y=\"126\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">Posterior:</text><text x=\"135\" y=\"144\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">small, triangular</text><rect x=\"270\" y=\"25\" width=\"230\" height=\"150\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"385\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#831843\">Moulding</text><text x=\"385\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">soft sutures let the</text><text x=\"385\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">bones overlap</text><text x=\"385\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#15803D\">head adapts to pelvis</text></svg>"
        }
      },
      {
        "h": "Midwifery significance",
        "p": "Understanding fertilisation and early development underpins preconception and early-pregnancy advice (folic acid, avoiding teratogens), estimation of gestational age, and explanation of the placenta and waters to women. Knowledge of the fetal skull is essential for assessing the position and descent of the head in labour, understanding moulding and caput, and recognising when the head is too large for the pelvis (disproportion) — all central to safe care in labour."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe fertilisation and implantation.",
      "Outline the development of the embryo into a fetus and explain the significance of the embryonic period.",
      "Describe the formation and functions of the placenta.",
      "State the functions of amniotic fluid.",
      "Describe the bones, sutures and fontanelles of the fetal skull and explain their importance in labour."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Fertilisation normally takes place in the:",
        "options": [
          "Uterus",
          "Ovary",
          "Ampulla of the uterine tube",
          "Cervix"
        ],
        "answer": 2,
        "rationale": "The ovum and sperm usually fuse in the ampulla of the uterine tube."
      },
      {
        "type": "mcq",
        "q": "The single cell formed by the fusion of ovum and sperm is the:",
        "options": [
          "Morula",
          "Blastocyst",
          "Zygote",
          "Embryo"
        ],
        "answer": 2,
        "rationale": "Fertilisation produces a zygote, which then divides by cleavage."
      },
      {
        "type": "mcq",
        "q": "Implantation of the blastocyst occurs in the:",
        "options": [
          "Myometrium",
          "Endometrium (decidua)",
          "Cervix",
          "Uterine tube"
        ],
        "answer": 1,
        "rationale": "The blastocyst implants into the prepared endometrium, then called the decidua."
      },
      {
        "type": "mcq",
        "q": "The period when the major organs form and the baby is most vulnerable to teratogens is the:",
        "options": [
          "Fetal period",
          "Embryonic period",
          "Neonatal period",
          "Luteal phase"
        ],
        "answer": 1,
        "rationale": "Organogenesis occurs in the embryonic period (up to about 8 weeks)."
      },
      {
        "type": "mcq",
        "q": "Which is NOT a function of amniotic fluid?",
        "options": [
          "Cushioning the fetus",
          "Allowing fetal movement",
          "Producing fetal blood cells",
          "Maintaining an even temperature"
        ],
        "answer": 2,
        "rationale": "Amniotic fluid protects and supports the fetus; it does not make blood cells."
      },
      {
        "type": "mcq",
        "q": "The two membranes surrounding the fetus are the amnion and the:",
        "options": [
          "Decidua",
          "Chorion",
          "Peritoneum",
          "Pleura"
        ],
        "answer": 1,
        "rationale": "The inner amnion and outer chorion enclose the fetus and amniotic fluid."
      },
      {
        "type": "mcq",
        "q": "The diamond-shaped soft area at the junction of sutures at the front of the fetal skull is the:",
        "options": [
          "Posterior fontanelle",
          "Anterior fontanelle (bregma)",
          "Lambda",
          "Glabella"
        ],
        "answer": 1,
        "rationale": "The anterior fontanelle (bregma) is diamond-shaped; the posterior is small and triangular."
      },
      {
        "type": "mcq",
        "q": "The overlapping of the fetal skull bones during birth is called:",
        "options": [
          "Caput",
          "Moulding",
          "Engagement",
          "Effacement"
        ],
        "answer": 1,
        "rationale": "Moulding is the overlapping of skull bones at the sutures, letting the head adapt to the pelvis."
      },
      {
        "type": "mcq",
        "q": "The placenta is usually fully formed by about:",
        "options": [
          "4 weeks",
          "12 weeks",
          "24 weeks",
          "36 weeks"
        ],
        "answer": 1,
        "rationale": "The placenta is essentially complete by about 12 weeks of pregnancy."
      },
      {
        "type": "mcq",
        "q": "The fetal skull is important in labour mainly because the head:",
        "options": [
          "Is the smallest part",
          "Is usually the largest part to be born",
          "Cannot change shape",
          "Has no bones"
        ],
        "answer": 1,
        "rationale": "The head is generally the largest presenting part and must pass through the pelvis."
      },
      {
        "type": "fill",
        "q": "The single cell formed when an ovum and sperm fuse is called the ____.",
        "accept": [
          "zygote"
        ],
        "rationale": "Fertilisation forms the zygote, which divides to begin development."
      },
      {
        "type": "fill",
        "q": "The overlapping of the fetal skull bones to adapt to the pelvis is called ____.",
        "accept": [
          "moulding",
          "molding"
        ],
        "rationale": "Moulding lets the head reduce its diameters to fit through the pelvis."
      }
    ]
  },
  {
    "id": "anp-20-fluid-electrolyte",
    "unit": "Unit 5 · Maintenance, Reproduction & Continuity",
    "title": "Fluid, Electrolyte & Acid-Base Balance",
    "readMinutes": 16,
    "summary": "Body fluid compartments and water balance, the major electrolytes and their roles, the regulation of fluid and acid-base balance, and the relevance to pregnancy, labour and the newborn.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Body water and fluid compartments",
        "p": "Water makes up about 60% of the adult body. It is found inside the cells (intracellular fluid, about two-thirds) and outside the cells (extracellular fluid, about one-third), the latter including the fluid between cells (interstitial fluid) and the plasma in blood vessels. Water moves between these compartments by osmosis. Keeping the right amount and distribution of water is essential for cell function, circulation and the supply of the placenta."
      },
      {
        "h": "Water balance",
        "p": "Normally water gained equals water lost. Water is gained from drinks, food and a little from metabolism; it is lost in urine, faeces, sweat and exhaled air (insensible loss). The body adjusts mainly through thirst and through the action of antidiuretic hormone (ADH) on the kidneys, which conserves water when the body is short of it. In pregnancy total body water rises substantially to support the increased blood volume, the fetus and the amniotic fluid."
      },
      {
        "h": "The major electrolytes",
        "list": [
          "Sodium (Na+) — the main extracellular ion; controls fluid volume and is needed for nerve and muscle function.",
          "Potassium (K+) — the main intracellular ion; vital for nerve impulses and the heartbeat.",
          "Calcium (Ca2+) — needed for muscle contraction (including the uterus), nerve function, clotting and the fetal skeleton.",
          "Chloride (Cl-) — works with sodium in fluid balance and helps form stomach acid.",
          "Bicarbonate (HCO3-) — the main buffer that helps control acid-base balance."
        ]
      },
      {
        "h": "Regulation of fluid and electrolytes",
        "p": "Fluid and electrolyte balance is regulated mainly by the kidneys under hormonal control. ADH controls water reabsorption; aldosterone controls sodium (and so water) retention; and the thirst mechanism drives intake. These systems keep blood volume and pressure stable. Disturbances — such as the vomiting of hyperemesis, blood loss at birth, or the fluid shifts of pre-eclampsia — can upset this balance, which the midwife monitors through intake, output, weight and vital signs."
      },
      {
        "h": "Acid-base balance",
        "p": "The body keeps blood pH within about 7.35–7.45 using three lines of defence: chemical buffers (especially the bicarbonate system) act instantly; the lungs adjust carbon dioxide within minutes; and the kidneys adjust bicarbonate and hydrogen ions over hours to days. When pH falls below normal it is called acidosis, and when it rises it is called alkalosis.",
        "figure": {
          "caption": "Three defences against pH change: buffers (instant), lungs (CO2, minutes) and kidneys (bicarbonate, slow).",
          "svg": "<svg viewBox=\"0 0 560 160\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Three lines of acid-base defence.\"><rect x=\"15\" y=\"35\" width=\"170\" height=\"100\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"100\" y=\"62\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Buffers</text><text x=\"100\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">instant</text><text x=\"100\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">bicarbonate system</text><rect x=\"195\" y=\"35\" width=\"170\" height=\"100\" rx=\"10\" fill=\"#FCE7F3\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"280\" y=\"62\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Lungs</text><text x=\"280\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">minutes</text><text x=\"280\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">adjust carbon dioxide</text><rect x=\"375\" y=\"35\" width=\"170\" height=\"100\" rx=\"10\" fill=\"#FDF2F8\" stroke=\"#BE185D\" stroke-width=\"2\"/><text x=\"460\" y=\"62\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#831843\">Kidneys</text><text x=\"460\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">hours&#8211;days</text><text x=\"460\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">adjust bicarbonate</text></svg>"
        }
      },
      {
        "h": "Relevance to pregnancy, labour and the newborn",
        "p": "Fluid and electrolyte balance matters throughout childbearing. Severe vomiting (hyperemesis) can cause dehydration and electrolyte loss; prolonged labour without fluids can cause ketosis; and haemorrhage causes loss of fluid and electrolytes that may need replacement. The midwife monitors hydration, encourages fluids in labour where appropriate, watches fluid balance carefully in pre-eclampsia (where fluid can shift into the tissues), and recognises that the newborn — with a high water content and immature kidneys — is especially prone to fluid imbalance and must be kept well hydrated and warm."
      },
      {
        "h": "Midwifery monitoring",
        "p": "The midwife assesses fluid and electrolyte status by recording fluid intake and output, observing for signs of dehydration (dry mouth, reduced urine, concentrated urine) or overload (oedema, breathlessness), checking urine for ketones, monitoring vital signs, and weighing where indicated. Careful balance is especially important when intravenous fluids are given, to avoid both under- and over-hydration."
      }
    ],
    "references": REF_ANP,
    "examQuestions": [
      "Describe the body fluid compartments and how water moves between them.",
      "Explain how water balance is maintained in the body.",
      "Name the major electrolytes and state the function of each.",
      "Describe the three lines of defence that maintain acid-base balance.",
      "Discuss the importance of fluid and electrolyte balance in pregnancy, labour and the newborn."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Approximately what percentage of the adult body is water?",
        "options": [
          "20%",
          "40%",
          "60%",
          "90%"
        ],
        "answer": 2,
        "rationale": "Water makes up about 60% of the adult body weight."
      },
      {
        "type": "mcq",
        "q": "The largest proportion of body water is found:",
        "options": [
          "In the plasma",
          "Inside the cells (intracellular)",
          "In the bladder",
          "In the gut"
        ],
        "answer": 1,
        "rationale": "About two-thirds of body water is intracellular (inside the cells)."
      },
      {
        "type": "mcq",
        "q": "The main electrolyte in the EXTRAcellular fluid is:",
        "options": [
          "Potassium",
          "Sodium",
          "Calcium",
          "Magnesium"
        ],
        "answer": 1,
        "rationale": "Sodium is the chief extracellular ion, controlling fluid volume."
      },
      {
        "type": "mcq",
        "q": "The main electrolyte INSIDE cells, vital for the heartbeat, is:",
        "options": [
          "Sodium",
          "Chloride",
          "Potassium",
          "Bicarbonate"
        ],
        "answer": 2,
        "rationale": "Potassium is the main intracellular ion and is essential for cardiac function."
      },
      {
        "type": "mcq",
        "q": "The hormone that conserves water by increasing its reabsorption in the kidney is:",
        "options": [
          "Aldosterone",
          "Antidiuretic hormone (ADH)",
          "Insulin",
          "Prolactin"
        ],
        "answer": 1,
        "rationale": "ADH increases water reabsorption when the body needs to conserve fluid."
      },
      {
        "type": "mcq",
        "q": "Normal blood pH is approximately:",
        "options": [
          "6.8",
          "7.0",
          "7.4",
          "8.0"
        ],
        "answer": 2,
        "rationale": "Blood pH is kept around 7.35–7.45 (about 7.4)."
      },
      {
        "type": "mcq",
        "q": "The FASTEST line of defence against a change in blood pH is the:",
        "options": [
          "Kidneys",
          "Chemical buffers",
          "Liver",
          "Skin"
        ],
        "answer": 1,
        "rationale": "Chemical buffers act instantly; the lungs act in minutes and the kidneys over hours to days."
      },
      {
        "type": "mcq",
        "q": "A blood pH below the normal range is called:",
        "options": [
          "Alkalosis",
          "Acidosis",
          "Homeostasis",
          "Hypoxia"
        ],
        "answer": 1,
        "rationale": "A fall in pH is acidosis; a rise is alkalosis."
      },
      {
        "type": "mcq",
        "q": "Prolonged labour without adequate fluids can lead to:",
        "options": [
          "Polyhydramnios",
          "Ketosis",
          "Hypertension",
          "Anaemia"
        ],
        "answer": 1,
        "rationale": "Without enough fluid and energy the woman may develop ketosis in labour."
      },
      {
        "type": "mcq",
        "q": "The newborn is especially prone to fluid imbalance because it has:",
        "options": [
          "A low water content",
          "A high water content and immature kidneys",
          "Fully mature kidneys",
          "No insensible loss"
        ],
        "answer": 1,
        "rationale": "The newborn's high water content and immature kidneys make fluid balance precarious."
      },
      {
        "type": "fill",
        "q": "The main electrolyte found inside the cells is ____.",
        "accept": [
          "potassium",
          "k+",
          "k"
        ],
        "rationale": "Potassium (K+) is the principal intracellular ion."
      },
      {
        "type": "fill",
        "q": "A blood pH below the normal range is called ____.",
        "accept": [
          "acidosis"
        ],
        "rationale": "Acidosis is an abnormally low blood pH; alkalosis is an abnormally high pH."
      }
    ]
  }
];
