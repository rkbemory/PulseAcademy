/* ============================================================
   Diploma in Midwifery (ICM standard) · DM112 Basic Science
   — 16 topics. Aligned to the BNMC Diploma in Midwifery syllabus
   (foundation biology, chemistry & physics for the midwife):
   cell, tissues, genetics & heredity, microbiology & infection,
   immunity; matter, solutions, acids/bases & pH, biochemistry,
   fluid & electrolytes; units, pressure & blood pressure, heat &
   thermoregulation, light, sound, electricity, radiation & ultrasound.
   Every topic is framed around the childbearing woman, the fetus,
   the newborn and the midwife's role.
   Grounded in standard texts:
     • Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier.
     • Standard foundation biology and chemistry references for health science.
     • Standard foundation physics references for nursing/midwifery.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_BSC = [
  "Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier.",
  "Standard foundation biology and chemistry references for health science.",
  "Standard foundation physics references for nursing/midwifery."
];

window.Academic.topics["diploma-midwifery/basic-science"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "bsc-01-cell",
    unit: "Unit 1 · Biology for the Midwife",
    title: "The Cell — Structure, Function & Division",
    readMinutes: 17,
    summary: "The cell as the basic unit of life, its main structures and functions, transport across the membrane, and how cell division underlies growth of the fetus and formation of the gametes.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — the cell as the unit of life", p: "The cell is the smallest unit of living matter that can carry out all the activities of life. The cell theory states that all living things are made of cells, that the cell is the basic unit of structure and function, and that all cells arise from pre-existing cells. The whole of a childbearing woman's body, and the new human being growing inside her, is built from cells — a single fertilised egg (zygote) divides again and again to form the fetus." },
      { h: "Importance for midwifery", p: "Understanding the cell explains how the fertilised ovum grows into a baby, how the placenta exchanges nutrients and oxygen between mother and fetus across cell membranes, why drugs and infections can cross to the fetus, and how the body heals after birth. It is the foundation for genetics, microbiology and physiology that the midwife uses every day." },
      { h: "Main cell structures", list: [
        "Cell (plasma) membrane — the thin outer boundary that controls what enters and leaves the cell.",
        "Cytoplasm — the jelly-like fluid in which the organelles sit and reactions occur.",
        "Nucleus — the control centre; contains the chromosomes (DNA) that carry the genetic instructions.",
        "Mitochondria — the 'power houses' that release energy (ATP) by aerobic respiration; very many in active tissue such as the uterine muscle.",
        "Ribosomes — make proteins.",
        "Endoplasmic reticulum (rough and smooth) — transport and synthesis of proteins and fats.",
        "Golgi apparatus — packages and exports cell products such as hormones.",
        "Lysosomes — contain enzymes that digest worn-out parts and bacteria."
      ] },
      { h: "Functions of the cell", p: "Cells take in nutrients and oxygen, release energy by respiration, build proteins, remove waste, respond to stimuli, and reproduce. Specialised cells perform specialised work — for example, muscle cells of the uterus contract in labour, and red blood cells (increased in pregnancy) carry oxygen to the placenta." },
      { h: "Transport across the cell membrane", list: [
        "Diffusion — movement of substances from high to low concentration (e.g. oxygen and carbon dioxide across the placenta).",
        "Osmosis — movement of water across a semipermeable membrane from low to high solute concentration.",
        "Active transport — movement against the concentration gradient using energy (e.g. glucose and amino acids actively pumped to the fetus).",
        "Facilitated diffusion — carrier-assisted movement down a gradient.",
        "Filtration — fluid pushed through a membrane by pressure (e.g. in the kidney glomerulus)."
      ] },
      { h: "Cell division — mitosis and meiosis", p: "Mitosis is ordinary cell division producing two daughter cells identical to the parent (46 chromosomes each); it is responsible for growth of the fetus and repair of tissues. Meiosis is a special reduction division occurring only in the ovary and testis that produces the gametes (ovum and sperm), each with 23 chromosomes. At fertilisation the two gametes join to restore 46 chromosomes — the genetic blueprint of the new baby.", figure: {
        caption: "Mitosis (growth/repair, 46→46) versus meiosis (gamete formation, 46→23); fertilisation restores 46.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of mitosis and meiosis with chromosome numbers."><rect x="20" y="30" width="240" height="150" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><rect x="300" y="30" width="240" height="150" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="140" y="55" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#831843">MITOSIS</text><text x="140" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">growth &amp; repair</text><text x="140" y="115" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">46 &#8594; 46 + 46</text><text x="140" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">2 identical cells</text><text x="140" y="165" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">builds the fetus</text><text x="420" y="55" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#BE185D">MEIOSIS</text><text x="420" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#BE185D">forms gametes</text><text x="420" y="115" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">46 &#8594; 23</text><text x="420" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#BE185D">ovum &amp; sperm</text><text x="420" y="165" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#BE185D">23 + 23 &#8594; 46 at fertilisation</text></svg>'
      } },
      { h: "Application in midwifery", p: "Knowing how substances cross the membrane explains placental exchange and why both helpful nutrients and harmful agents (alcohol, some drugs, viruses) can reach the fetus. Knowing meiosis explains why the baby inherits half its genes from each parent and why errors in meiosis cause chromosomal conditions such as Down syndrome." },
      { h: "Roles & key terms", list: [
        "Zygote — the single cell formed when sperm fertilises ovum.",
        "Gamete — a sex cell (ovum or sperm) with 23 chromosomes.",
        "Organelle — a specialised structure inside the cell.",
        "Diploid (46) and haploid (23) — full and half chromosome numbers.",
        "ATP — the energy currency made by mitochondria."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Describe the structure of a typical cell and the function of its main organelles.",
      "Explain diffusion, osmosis and active transport, giving an example of each across the placenta.",
      "Differentiate between mitosis and meiosis and state the importance of each in childbearing.",
      "How does an understanding of the cell membrane help the midwife understand placental transfer of drugs?",
      "Explain how a single fertilised ovum develops into a fetus made of many specialised cells."
    ],
    assessment: [
      { type: "mcq", q: "The control centre of the cell that contains the chromosomes is the:", options: ["Mitochondrion", "Nucleus", "Ribosome", "Lysosome"], answer: 1, rationale: "The nucleus contains the DNA (chromosomes) and directs all cell activities." },
      { type: "mcq", q: "The 'power house' of the cell that releases energy as ATP is the:", options: ["Mitochondrion", "Golgi apparatus", "Nucleus", "Cell membrane"], answer: 0, rationale: "Mitochondria carry out aerobic respiration and produce ATP energy." },
      { type: "mcq", q: "Movement of water across a semipermeable membrane from low to high solute concentration is called:", options: ["Active transport", "Filtration", "Osmosis", "Phagocytosis"], answer: 2, rationale: "Osmosis is the diffusion of water across a semipermeable membrane down its water gradient." },
      { type: "mcq", q: "Oxygen and carbon dioxide cross the placenta mainly by:", options: ["Active transport", "Diffusion", "Filtration", "Mitosis"], answer: 1, rationale: "Gases move down their concentration gradients by simple diffusion across the placental membrane." },
      { type: "mcq", q: "The type of cell division that produces gametes with 23 chromosomes is:", options: ["Mitosis", "Meiosis", "Binary fission", "Budding"], answer: 1, rationale: "Meiosis is the reduction division that halves the chromosome number to form ova and sperm." },
      { type: "mcq", q: "Mitosis produces daughter cells that are:", options: ["Genetically different and haploid", "Identical to the parent with 46 chromosomes", "Always sex cells", "Smaller and non-living"], answer: 1, rationale: "Mitosis produces two identical diploid (46-chromosome) cells for growth and repair." },
      { type: "mcq", q: "The single cell formed at fertilisation is called the:", options: ["Gamete", "Embryo", "Zygote", "Blastocyst"], answer: 2, rationale: "The fertilised ovum is the zygote, the first cell of the new individual." },
      { type: "mcq", q: "Movement of a substance against its concentration gradient using energy is:", options: ["Diffusion", "Osmosis", "Active transport", "Filtration"], answer: 2, rationale: "Active transport uses ATP to move substances from low to high concentration." },
      { type: "mcq", q: "Which organelle makes proteins?", options: ["Ribosome", "Lysosome", "Golgi apparatus", "Mitochondrion"], answer: 0, rationale: "Ribosomes are the site of protein synthesis." },
      { type: "mcq", q: "A normal human body cell contains how many chromosomes?", options: ["23", "46", "92", "48"], answer: 1, rationale: "Body (somatic) cells are diploid and contain 46 chromosomes; gametes have 23." }
      , { type: "fill", q: "The structure that controls what enters and leaves the cell is the cell ____.", accept: ["membrane", "plasma membrane"], rationale: "The cell (plasma) membrane is selectively permeable and controls transport." }
      , { type: "fill", q: "The special reduction division that forms ova and sperm is called ____.", accept: ["meiosis"], rationale: "Meiosis halves the chromosome number to 23 in the gametes." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "bsc-02-tissues",
    unit: "Unit 1 · Biology for the Midwife",
    title: "Tissues & Levels of Body Organization",
    readMinutes: 16,
    summary: "How cells group into the four basic tissue types, how tissues form organs and systems, and the tissues most relevant to pregnancy, labour and the newborn.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — levels of organization", p: "The body is organised in a hierarchy of increasing complexity: atoms → molecules → cells → tissues → organs → organ systems → the whole organism. A tissue is a group of similar cells working together to perform a particular function. Understanding tissues helps the midwife understand how the uterus stretches, how the cervix dilates, and how wounds heal after birth." },
      { h: "Importance for midwifery", p: "The reproductive organs, placenta and newborn body are all built from the four basic tissues. Pregnancy and labour involve dramatic tissue change — muscle of the uterus grows enormously, the cervix softens and connective tissue remodels, and the breast glandular tissue develops to produce milk. Recognising healthy versus abnormal tissue underpins safe care." },
      { h: "The four basic tissue types", list: [
        "Epithelial tissue — covers surfaces and lines cavities; forms glands. Examples: skin, lining of the uterus (endometrium), lining of the breast ducts.",
        "Connective tissue — supports and binds; includes blood, bone, cartilage, fat and fibrous tissue. The cervix and pelvic ligaments are rich in connective tissue.",
        "Muscle tissue — contracts to produce movement: smooth (uterus, blood vessels, gut), cardiac (heart), and skeletal (voluntary muscle used in pushing).",
        "Nervous tissue — conducts impulses; brain, spinal cord and nerves; carries pain and controls reflexes in labour."
      ] },
      { h: "Epithelial tissue in childbearing", p: "Epithelium lines the genital tract and forms the secretory cells of the breast. The single layer of cells covering the chorionic villi of the placenta is specialised epithelium across which exchange between mother and fetus takes place. Glandular epithelium of the breast produces colostrum and milk." },
      { h: "Muscle tissue in childbearing", p: "The myometrium (smooth muscle of the uterus) is the most important muscle in midwifery: during pregnancy its cells grow (hypertrophy) and multiply, and in labour they contract rhythmically and retract to expel the baby and, after birth, to compress blood vessels and prevent haemorrhage. The mother also uses skeletal (voluntary) muscle of the abdominal wall and diaphragm to push in the second stage." },
      { h: "Connective tissue and the cervix", p: "The cervix is largely connective tissue. Under hormonal influence near term it softens (cervical ripening) as the collagen fibres loosen, allowing it to efface and dilate in labour. Blood — a fluid connective tissue — increases in volume in pregnancy to meet the needs of mother and fetus." },
      { h: "From tissue to system", p: "Tissues combine to form organs (the uterus contains muscle, connective, epithelial and nervous tissue), and organs form systems (the reproductive system). The midwife cares for the whole woman, so understanding how systems interact — for example, how the circulatory and respiratory systems supply the placenta — is essential.", figure: {
        caption: "Levels of organization from cell to organism.",
        svg: '<svg viewBox="0 0 560 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Levels of body organization: cell, tissue, organ, system, organism."><defs><marker id="bsc2a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#BE185D"/></marker></defs><rect x="6" y="30" width="90" height="34" rx="7" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="51" y="52" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Cell</text><rect x="118" y="30" width="90" height="34" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="163" y="52" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Tissue</text><rect x="230" y="30" width="90" height="34" rx="7" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="275" y="52" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Organ</text><rect x="342" y="30" width="100" height="34" rx="7" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="392" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">System</text><rect x="464" y="30" width="90" height="34" rx="7" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="509" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Organism</text><line x1="96" y1="47" x2="114" y2="47" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc2a)"/><line x1="208" y1="47" x2="226" y2="47" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc2a)"/><line x1="320" y1="47" x2="338" y2="47" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc2a)"/><line x1="442" y1="47" x2="460" y2="47" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc2a)"/></svg>'
      } },
      { h: "Roles & key terms", list: [
        "Tissue — a group of similar cells with a common function.",
        "Myometrium — the smooth-muscle layer of the uterus.",
        "Endometrium — the epithelial lining of the uterus.",
        "Hypertrophy — increase in size of cells (seen in the pregnant uterus).",
        "Effacement and dilatation — thinning and opening of the cervix in labour."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Name the four basic tissue types and give an example of each in the childbearing woman.",
      "Describe the structure and function of muscle tissue and its role in labour.",
      "Explain how connective tissue change allows the cervix to dilate.",
      "Trace the levels of body organization from cell to organism using the uterus as an example.",
      "Discuss the importance of epithelial tissue in the placenta and breast."
    ],
    assessment: [
      { type: "mcq", q: "A group of similar cells working together to perform a function is called a:", options: ["Tissue", "Organ", "System", "Organelle"], answer: 0, rationale: "A tissue is a group of similar cells with a common function." },
      { type: "mcq", q: "The smooth muscle layer of the uterus is the:", options: ["Endometrium", "Myometrium", "Perimetrium", "Epithelium"], answer: 1, rationale: "The myometrium is the muscular layer responsible for uterine contraction." },
      { type: "mcq", q: "Which tissue type lines the breast ducts and the genital tract?", options: ["Muscle", "Nervous", "Epithelial", "Connective"], answer: 2, rationale: "Epithelial tissue covers surfaces and lines cavities and ducts." },
      { type: "mcq", q: "Blood is classified as which type of tissue?", options: ["Epithelial", "Muscle", "Connective", "Nervous"], answer: 2, rationale: "Blood is a fluid connective tissue." },
      { type: "mcq", q: "The cervix is able to dilate in labour mainly because of changes in its:", options: ["Nervous tissue", "Connective tissue", "Cardiac muscle", "Bone"], answer: 1, rationale: "Cervical ripening involves softening of the connective tissue (collagen)." },
      { type: "mcq", q: "Which sequence shows increasing complexity correctly?", options: ["Organ → Tissue → Cell", "Cell → Tissue → Organ → System", "System → Cell → Tissue", "Tissue → Cell → Organ"], answer: 1, rationale: "Cells form tissues, tissues form organs, organs form systems." },
      { type: "mcq", q: "Tissue that conducts impulses and carries pain in labour is:", options: ["Muscle tissue", "Nervous tissue", "Epithelial tissue", "Adipose tissue"], answer: 1, rationale: "Nervous tissue conducts electrical impulses." },
      { type: "mcq", q: "The increase in size of uterine muscle cells during pregnancy is called:", options: ["Atrophy", "Hyperplasia only", "Hypertrophy", "Necrosis"], answer: 2, rationale: "Hypertrophy is enlargement of existing cells; the pregnant uterus shows both hypertrophy and hyperplasia." },
      { type: "mcq", q: "The voluntary muscle a woman uses to push in the second stage is:", options: ["Smooth muscle", "Cardiac muscle", "Skeletal muscle", "Endometrium"], answer: 2, rationale: "Skeletal (voluntary) muscle of the abdominal wall and diaphragm is used for pushing." },
      { type: "mcq", q: "The epithelial lining of the uterus is the:", options: ["Myometrium", "Perimetrium", "Endometrium", "Peritoneum"], answer: 2, rationale: "The endometrium is the inner epithelial lining of the uterus." }
      , { type: "fill", q: "The four basic tissue types are epithelial, connective, nervous and ____.", accept: ["muscle", "muscular"], rationale: "Muscle is the fourth basic tissue type." }
      , { type: "fill", q: "Thinning of the cervix in labour is called ____.", accept: ["effacement"], rationale: "Effacement is the shortening and thinning of the cervix; dilatation is its opening." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "bsc-03-genetics",
    unit: "Unit 1 · Biology for the Midwife",
    title: "Genetics, Heredity & Congenital Conditions",
    readMinutes: 18,
    summary: "DNA, genes and chromosomes, how traits are inherited, sex determination, common patterns of inheritance, and the genetic and chromosomal conditions a midwife should recognise.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — genetics and heredity", p: "Genetics is the study of how characteristics are passed from parents to children. Heredity is the transmission of these characteristics through the genes. Each new baby inherits half of its genetic material from the mother (in the ovum) and half from the father (in the sperm), which is why children resemble both parents." },
      { h: "DNA, genes and chromosomes", p: "DNA (deoxyribonucleic acid) is the molecule that carries the genetic code. A gene is a length of DNA that codes for a particular protein or trait. Genes are packaged on chromosomes — thread-like structures in the nucleus. Humans have 46 chromosomes arranged in 23 pairs: 22 pairs of autosomes and one pair of sex chromosomes (XX in females, XY in males)." },
      { h: "Sex determination", p: "The mother's ovum always carries an X chromosome. The father's sperm carries either an X or a Y. If an X-carrying sperm fertilises the ovum the baby is female (XX); if a Y-carrying sperm fertilises it the baby is male (XY). Thus the sex of the baby is determined by the father's sperm — an important point for the midwife when counselling families.", figure: {
        caption: "Sex determination: the father's sperm (X or Y) decides the baby's sex.",
        svg: '<svg viewBox="0 0 540 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Punnett-style diagram showing sex determination by the father."><text x="270" y="24" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Mother XX  &#215;  Father XY</text><rect x="150" y="45" width="110" height="55" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="205" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">X + X</text><text x="205" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Girl (XX)</text><rect x="290" y="45" width="110" height="55" rx="8" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="345" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">X + Y</text><text x="345" y="90" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">Boy (XY)</text><text x="270" y="135" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#831843">Ovum always carries X</text><text x="270" y="158" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#831843">Sperm carries X or Y &#8594; decides sex</text><text x="270" y="182" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Expected ratio about 1 : 1</text></svg>'
      } },
      { h: "Patterns of inheritance", list: [
        "Dominant — a single copy of the gene shows its effect (e.g. some forms of polydactyly).",
        "Recessive — the trait appears only when both copies are present (e.g. thalassaemia, sickle-cell disease, cystic fibrosis).",
        "Sex-linked — genes on the X chromosome; conditions such as haemophilia mostly affect males and are carried by females.",
        "Multifactorial — caused by several genes plus environment (e.g. neural-tube defects, cleft lip)."
      ] },
      { h: "Chromosomal conditions", p: "Errors during meiosis can give the baby the wrong number of chromosomes. The best-known is Down syndrome (trisomy 21 — an extra chromosome 21), whose risk rises with increasing maternal age. Others include Edwards syndrome (trisomy 18) and Turner syndrome (a single X). The midwife should understand these to support screening, counselling and care of affected families." },
      { h: "Congenital conditions and prevention", list: [
        "Some congenital conditions are inherited; others result from the environment in the womb (infections, alcohol, certain drugs, poor nutrition).",
        "Folic acid before conception and in early pregnancy greatly reduces neural-tube defects such as spina bifida.",
        "Avoiding alcohol, smoking and unnecessary drugs protects the developing baby.",
        "Rubella immunisation before pregnancy prevents congenital rubella syndrome.",
        "Good control of conditions such as diabetes lowers the risk of malformation."
      ] },
      { h: "Application in midwifery", p: "The midwife takes a family history, identifies couples at higher risk (e.g. both partners carrying the thalassaemia trait, advanced maternal age, previous affected child), explains screening tests, and refers for genetic counselling. She also gives preconception advice — folic acid, rubella status, avoiding teratogens — to reduce preventable congenital conditions." },
      { h: "Roles & key terms", list: [
        "Gene — a unit of inheritance; a length of DNA coding for a trait.",
        "Genotype and phenotype — the genetic make-up and its visible expression.",
        "Homozygous and heterozygous — two same or two different copies of a gene.",
        "Carrier — a person with one copy of a recessive gene who is healthy but can pass it on.",
        "Teratogen — an agent that causes a congenital malformation (e.g. alcohol, rubella virus)."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Explain the terms gene, chromosome and DNA, and state how many chromosomes a human body cell contains.",
      "Describe how the sex of a baby is determined.",
      "Outline the common patterns of inheritance with one example of each.",
      "Discuss Down syndrome and the role of the midwife in screening and counselling.",
      "How can the midwife help to prevent congenital conditions through preconception advice?"
    ],
    assessment: [
      { type: "mcq", q: "The molecule that carries the genetic code is:", options: ["ATP", "DNA", "Glucose", "Haemoglobin"], answer: 1, rationale: "DNA carries the inherited genetic information." },
      { type: "mcq", q: "How many pairs of chromosomes are found in a normal human body cell?", options: ["21 pairs", "22 pairs", "23 pairs", "46 pairs"], answer: 2, rationale: "There are 23 pairs (46 chromosomes) including one pair of sex chromosomes." },
      { type: "mcq", q: "The sex of the baby is determined by:", options: ["The mother's ovum", "The father's sperm", "The placenta", "Maternal age"], answer: 1, rationale: "The sperm carries either X or Y; the ovum always carries X, so the father's sperm decides the sex." },
      { type: "mcq", q: "A male has which pair of sex chromosomes?", options: ["XX", "XY", "YY", "XO"], answer: 1, rationale: "Males are XY; females are XX." },
      { type: "mcq", q: "Down syndrome is caused by an extra copy of chromosome:", options: ["18", "21", "13", "23"], answer: 1, rationale: "Down syndrome is trisomy 21 — three copies of chromosome 21." },
      { type: "mcq", q: "Thalassaemia and sickle-cell disease are examples of which inheritance pattern?", options: ["Dominant", "Recessive", "Sex-linked dominant", "Acquired"], answer: 1, rationale: "These are autosomal recessive conditions requiring two affected copies." },
      { type: "mcq", q: "A healthy person who carries one copy of a recessive gene and can pass it on is a:", options: ["Mutant", "Carrier", "Homozygote", "Hybrid"], answer: 1, rationale: "A carrier has one recessive allele and is usually unaffected." },
      { type: "mcq", q: "The risk of which condition rises with increasing maternal age?", options: ["Sickle-cell disease", "Down syndrome", "Haemophilia", "Cystic fibrosis"], answer: 1, rationale: "Down syndrome risk increases with advancing maternal age." },
      { type: "mcq", q: "An agent that causes a congenital malformation is called a:", options: ["Carcinogen", "Teratogen", "Allergen", "Mutagen"], answer: 1, rationale: "A teratogen (e.g. alcohol, rubella) causes malformation of the developing fetus." },
      { type: "mcq", q: "Which supplement taken before and in early pregnancy reduces neural-tube defects?", options: ["Vitamin C", "Folic acid", "Calcium", "Vitamin K"], answer: 1, rationale: "Folic acid greatly reduces the risk of neural-tube defects such as spina bifida." }
      , { type: "fill", q: "A length of DNA that codes for a particular trait is called a ____.", accept: ["gene"], rationale: "A gene is the basic unit of inheritance." }
      , { type: "fill", q: "Conditions carried on the X chromosome, such as haemophilia, are described as ____ inheritance.", accept: ["sex-linked", "x-linked", "sex linked"], rationale: "Sex-linked (X-linked) genes are carried on the X chromosome." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "bsc-04-microorganisms",
    unit: "Unit 1 · Biology for the Midwife",
    title: "Microorganisms & Infection in Maternal-Newborn Care",
    readMinutes: 18,
    summary: "The main groups of microorganisms, how infection is caused and spread, the chain of infection, and the infections that most threaten the childbearing woman and newborn.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — what microorganisms are", p: "Microorganisms (microbes) are living things too small to see without a microscope. The main groups are bacteria, viruses, fungi and parasites (protozoa and helminths). Many are harmless or helpful (the normal flora), but pathogens cause disease. In midwifery, infection is a leading cause of maternal and newborn illness and death, so understanding microbes is central to safe practice." },
      { h: "Classification of microorganisms", list: [
        "Bacteria — single-celled organisms classified by shape (cocci, bacilli, spiral) and by Gram stain (Gram-positive / Gram-negative); e.g. group B streptococcus, E. coli, Clostridium tetani.",
        "Viruses — much smaller; can only multiply inside a host cell; e.g. rubella, hepatitis B, HIV, herpes.",
        "Fungi — yeasts and moulds; e.g. Candida causing vaginal thrush and oral thrush in the newborn.",
        "Parasites — protozoa (e.g. Plasmodium causing malaria, Toxoplasma) and worms (helminths)."
      ] },
      { h: "Causes & risk factors for infection in childbearing", list: [
        "Prolonged or obstructed labour and prolonged rupture of membranes.",
        "Frequent vaginal examinations and unclean delivery practices.",
        "Retained products after birth or miscarriage; operative and instrumental birth.",
        "Anaemia and poor nutrition lowering resistance.",
        "Untreated sexually transmitted infections and poor hand hygiene."
      ] },
      { h: "The chain of infection", p: "Infection spreads through a chain of six links: the causative agent, a reservoir, a portal of exit, a mode of transmission, a portal of entry, and a susceptible host. Breaking any link prevents infection — the basis of all infection-prevention practice in the labour ward.", figure: {
        caption: "The chain of infection — break any link to prevent spread.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The six links of the chain of infection."><defs><marker id="bsc4a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#BE185D"/></marker></defs><rect x="10" y="20" width="120" height="40" rx="8" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="70" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Agent</text><rect x="220" y="20" width="120" height="40" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="280" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Reservoir</text><rect x="430" y="20" width="120" height="40" rx="8" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="490" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Portal of exit</text><rect x="430" y="95" width="120" height="40" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="490" y="119" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Transmission</text><rect x="220" y="95" width="120" height="40" rx="8" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="280" y="119" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Portal of entry</text><rect x="10" y="95" width="120" height="40" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="70" y="119" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Susceptible host</text><line x1="130" y1="40" x2="216" y2="40" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc4a)"/><line x1="340" y1="40" x2="426" y2="40" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc4a)"/><line x1="490" y1="60" x2="490" y2="92" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc4a)"/><line x1="430" y1="115" x2="344" y2="115" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc4a)"/><line x1="220" y1="115" x2="134" y2="115" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc4a)"/></svg>'
      } },
      { h: "Modes of transmission", list: [
        "Direct contact and droplets (e.g. coughing, hands).",
        "Vertical transmission — from mother to baby across the placenta, during birth, or through breast milk (e.g. HIV, hepatitis B, syphilis, rubella).",
        "Sexual transmission (e.g. gonorrhoea, chlamydia, syphilis).",
        "Vehicle (contaminated instruments, fluids) and vector (mosquito-borne malaria)."
      ] },
      { h: "Important infections in maternal-newborn care", list: [
        "Group B streptococcus and E. coli — major causes of newborn sepsis.",
        "Tetanus — Clostridium tetani entering through an unclean cord; prevented by maternal tetanus toxoid.",
        "Rubella, syphilis, hepatitis B, HIV, herpes, toxoplasmosis, cytomegalovirus — can cross to the fetus and cause congenital infection.",
        "Candida — vaginal thrush in the mother and oral thrush in the baby.",
        "Malaria — particularly dangerous in pregnancy."
      ] },
      { h: "Midwifery prevention & care", list: [
        "Hand hygiene before and after every contact — the single most effective measure.",
        "Clean birth practices: clean hands, clean surface, clean cord care, clean cutting instrument.",
        "Aseptic technique for examinations, catheterisation and wound care; limit vaginal examinations.",
        "Screening and treating infections in pregnancy; maternal tetanus and other immunisations.",
        "Recognising early signs of infection (fever, offensive lochia, tachycardia) and acting promptly; health education on hygiene."
      ] },
      { h: "Roles & key terms", list: [
        "Pathogen — a microorganism that causes disease.",
        "Normal flora — harmless microbes that live on/in the body.",
        "Vertical transmission — mother-to-baby spread.",
        "Asepsis — practices that keep an area free of pathogens.",
        "Sepsis — life-threatening organ dysfunction from infection."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Name the four main groups of microorganisms and give a midwifery example of each.",
      "Describe the chain of infection and explain how each link can be broken in the labour ward.",
      "List the routes by which infection may pass from mother to baby.",
      "Discuss five risk factors for puerperal infection and how the midwife reduces them.",
      "Explain the role of hand hygiene and clean birth practices in preventing newborn infection."
    ],
    assessment: [
      { type: "mcq", q: "Microorganisms that can multiply ONLY inside a living host cell are:", options: ["Bacteria", "Viruses", "Fungi", "Protozoa"], answer: 1, rationale: "Viruses are obligate intracellular parasites and need a host cell to reproduce." },
      { type: "mcq", q: "Candida, which causes vaginal thrush, is a:", options: ["Bacterium", "Virus", "Fungus", "Helminth"], answer: 2, rationale: "Candida is a yeast (fungus)." },
      { type: "mcq", q: "Spread of infection from mother to baby across the placenta or during birth is called:", options: ["Horizontal transmission", "Vertical transmission", "Vector transmission", "Airborne spread"], answer: 1, rationale: "Mother-to-baby spread is termed vertical transmission." },
      { type: "mcq", q: "The single most effective measure to prevent the spread of infection is:", options: ["Antibiotics for everyone", "Hand hygiene", "Wearing a gown", "Isolation rooms"], answer: 1, rationale: "Hand hygiene is the most effective and basic infection-control measure." },
      { type: "mcq", q: "Tetanus of the newborn is caused by:", options: ["Candida albicans", "Clostridium tetani", "E. coli", "Plasmodium"], answer: 1, rationale: "Clostridium tetani entering through an unclean cord causes neonatal tetanus." },
      { type: "mcq", q: "Which is NOT a link in the chain of infection?", options: ["Reservoir", "Portal of exit", "Susceptible host", "Antibody titre"], answer: 3, rationale: "The links are agent, reservoir, portal of exit, transmission, portal of entry and susceptible host." },
      { type: "mcq", q: "Harmless microorganisms that normally live on or in the body are called the:", options: ["Pathogens", "Normal flora", "Spores", "Vectors"], answer: 1, rationale: "Normal flora are the commensal microbes that usually cause no harm." },
      { type: "mcq", q: "Which infection is prevented by giving the mother tetanus toxoid in pregnancy?", options: ["Neonatal tetanus", "Malaria", "Thrush", "Rubella"], answer: 0, rationale: "Maternal tetanus toxoid protects the newborn against neonatal tetanus." },
      { type: "mcq", q: "A major bacterial cause of newborn sepsis is:", options: ["Group B streptococcus", "Candida", "Rubella virus", "Plasmodium vivax"], answer: 0, rationale: "Group B streptococcus (and E. coli) are leading causes of neonatal sepsis." },
      { type: "mcq", q: "Practices that keep an area free of pathogens are known as:", options: ["Sepsis", "Asepsis", "Symbiosis", "Colonisation"], answer: 1, rationale: "Asepsis means the absence of pathogens, achieved by aseptic technique." }
      , { type: "fill", q: "A microorganism capable of causing disease is called a ____.", accept: ["pathogen"], rationale: "A pathogen is a disease-causing microbe." }
      , { type: "fill", q: "Bacteria are commonly classified by shape and by the ____ stain into positive and negative groups.", accept: ["gram", "gram's"], rationale: "The Gram stain divides bacteria into Gram-positive and Gram-negative groups." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "bsc-05-immunity",
    unit: "Unit 1 · Biology for the Midwife",
    title: "Immunity & Immunization",
    readMinutes: 17,
    summary: "How the body defends itself against infection, the difference between innate and adaptive immunity, active and passive immunity, and immunization in pregnancy and the newborn.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — what immunity is", p: "Immunity is the body's ability to resist and overcome infection. It protects the childbearing woman and, through transfer of antibodies, the newborn baby. The midwife uses an understanding of immunity to explain immunisation, breastfeeding, and why some women and babies are more vulnerable to infection." },
      { h: "Innate (non-specific) defences", list: [
        "Physical barriers — skin, mucous membranes, the acidic vagina and the cervical mucus plug that protects the pregnant uterus.",
        "Chemical barriers — stomach acid, tears, lysozyme.",
        "Phagocytes — white cells that engulf and destroy microbes.",
        "Inflammation and fever — the body's general response to injury and infection.",
        "Natural killer cells and the complement system."
      ] },
      { h: "Adaptive (specific) immunity", p: "Adaptive immunity is targeted at a particular pathogen and has memory. Lymphocytes are the key cells: B-lymphocytes produce antibodies (humoral immunity), and T-lymphocytes attack infected cells and coordinate the response (cell-mediated immunity). After meeting a pathogen, memory cells allow a faster, stronger response next time — the principle behind vaccination." },
      { h: "Antigens and antibodies", p: "An antigen is any substance the body recognises as foreign and reacts against. An antibody (immunoglobulin) is a protein made by B-lymphocytes that binds specifically to an antigen and helps destroy it. In midwifery, the Rhesus (Rh) antigen is vitally important: an Rh-negative mother may make antibodies against an Rh-positive baby's red cells, causing haemolytic disease — prevented by anti-D." },
      { h: "Types of immunity — active and passive", p: "Active immunity is produced by the person's own body and is long-lasting; passive immunity is borrowed ready-made antibodies and is temporary.", figure: {
        caption: "Active versus passive immunity, with natural and artificial examples.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Active and passive immunity table."><rect x="20" y="30" width="250" height="150" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><rect x="290" y="30" width="250" height="150" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="145" y="55" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">ACTIVE</text><text x="145" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">body makes its own antibodies</text><text x="145" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">long-lasting</text><text x="145" y="128" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Natural: having the disease</text><text x="145" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Artificial: vaccine</text><text x="415" y="55" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#BE185D">PASSIVE</text><text x="415" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#BE185D">ready-made antibodies given</text><text x="415" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">temporary</text><text x="415" y="128" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#BE185D">Natural: across placenta / milk</text><text x="415" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#BE185D">Artificial: antiserum / Ig</text></svg>'
      } },
      { h: "Immunity in pregnancy and the newborn", list: [
        "Maternal IgG antibodies cross the placenta in the last trimester, giving the baby passive protection in early life.",
        "Colostrum and breast milk supply IgA antibodies that protect the baby's gut against infection.",
        "Pregnancy slightly lowers immunity, so some infections (e.g. malaria, influenza) can be more severe.",
        "The newborn's immune system is immature, making early infection dangerous."
      ] },
      { h: "Immunization in maternal care", list: [
        "Tetanus toxoid in pregnancy protects mother and newborn against tetanus (active immunity to the mother, passive to the baby).",
        "Rubella vaccination before pregnancy prevents congenital rubella syndrome (not given during pregnancy as it is a live vaccine).",
        "Hepatitis B vaccine for the newborn of an infected mother, often with hepatitis B immunoglobulin (passive + active).",
        "Anti-D immunoglobulin for Rh-negative mothers prevents Rhesus sensitisation.",
        "The midwife educates families about the childhood immunisation schedule (BCG, DPT, polio, measles, etc.)."
      ] },
      { h: "Roles & key terms", list: [
        "Antigen — a foreign substance that triggers an immune response.",
        "Antibody (immunoglobulin) — a protein that binds and neutralises an antigen.",
        "Vaccine — a preparation that produces active immunity.",
        "Immunoglobulin / antiserum — ready-made antibodies giving passive immunity.",
        "Memory cells — long-lived lymphocytes giving lasting protection."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Differentiate between innate and adaptive immunity.",
      "Explain active and passive immunity, giving a natural and an artificial example of each.",
      "Describe how the newborn receives passive immunity from the mother.",
      "Discuss the immunizations relevant to pregnancy and the newborn.",
      "Explain the importance of the Rhesus antigen and anti-D in midwifery."
    ],
    assessment: [
      { type: "mcq", q: "Cells that engulf and destroy microbes as part of innate immunity are:", options: ["Phagocytes", "Red blood cells", "Platelets", "Osteocytes"], answer: 0, rationale: "Phagocytes ingest and digest pathogens — a non-specific innate defence." },
      { type: "mcq", q: "A protein made by B-lymphocytes that binds specifically to an antigen is a/an:", options: ["Enzyme", "Antibody", "Hormone", "Vitamin"], answer: 1, rationale: "Antibodies (immunoglobulins) are produced by B-lymphocytes and bind antigens." },
      { type: "mcq", q: "Immunity produced by giving a vaccine is best described as:", options: ["Natural passive", "Artificial passive", "Natural active", "Artificial active"], answer: 3, rationale: "A vaccine makes the body produce its own antibodies — artificial active immunity." },
      { type: "mcq", q: "Antibodies passed from mother to baby across the placenta give the baby:", options: ["Artificial active immunity", "Natural passive immunity", "Natural active immunity", "No immunity"], answer: 1, rationale: "Ready-made maternal antibodies crossing the placenta provide natural passive immunity." },
      { type: "mcq", q: "Which immunoglobulin in colostrum protects the newborn's gut?", options: ["IgG", "IgA", "IgM", "IgE"], answer: 1, rationale: "Secretory IgA in colostrum and breast milk protects the infant's gut mucosa." },
      { type: "mcq", q: "Anti-D immunoglobulin is given to prevent:", options: ["Neonatal tetanus", "Rhesus sensitisation", "Rubella", "Thrush"], answer: 1, rationale: "Anti-D prevents an Rh-negative mother from forming antibodies against Rh-positive fetal cells." },
      { type: "mcq", q: "A substance the body recognises as foreign and reacts against is a/an:", options: ["Antibody", "Antigen", "Antitoxin", "Allergen only"], answer: 1, rationale: "An antigen is any foreign substance that triggers an immune response." },
      { type: "mcq", q: "Which vaccine is AVOIDED during pregnancy because it is a live vaccine?", options: ["Tetanus toxoid", "Rubella vaccine", "Hepatitis B vaccine", "Inactivated influenza vaccine"], answer: 1, rationale: "The live rubella vaccine is given before, not during, pregnancy." },
      { type: "mcq", q: "Long-lived lymphocytes that give faster protection on re-exposure are:", options: ["Memory cells", "Red cells", "Mast cells", "Platelets"], answer: 0, rationale: "Memory cells underlie the rapid secondary response and the success of vaccination." },
      { type: "mcq", q: "Tetanus toxoid given to a pregnant woman provides:", options: ["No protection to the baby", "Active immunity to the mother and passive to the baby", "Passive immunity to the mother only", "Immunity against malaria"], answer: 1, rationale: "The mother makes antibodies (active) which cross to the baby (passive), protecting both." }
      , { type: "fill", q: "Immunity that is borrowed as ready-made antibodies and is only temporary is called ____ immunity.", accept: ["passive"], rationale: "Passive immunity uses transferred antibodies and is short-lived." }
      , { type: "fill", q: "A preparation given to produce active immunity against a specific disease is a ____.", accept: ["vaccine"], rationale: "A vaccine stimulates the body to make its own protective antibodies." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "bsc-06-matter-atom",
    unit: "Unit 2 · Chemistry for the Midwife",
    title: "Matter & Atomic Structure",
    readMinutes: 16,
    summary: "States of matter, elements, atoms and molecules, atomic structure, chemical bonding and ions, and why these basics matter for fluids, electrolytes and drugs in midwifery.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — what matter is", p: "Matter is anything that has mass and occupies space. The human body, the fluids the midwife gives, the oxygen a labouring woman breathes and the drugs she receives are all matter. Chemistry is the study of matter and its changes, and it underpins fluid balance, drug action and laboratory tests." },
      { h: "States of matter", list: [
        "Solid — fixed shape and volume (e.g. bone, a tablet).",
        "Liquid — fixed volume but takes the shape of its container (e.g. blood, intravenous fluid, amniotic fluid).",
        "Gas — no fixed shape or volume (e.g. oxygen, carbon dioxide, nitrous oxide used for pain relief).",
        "Changes of state — melting, freezing, evaporation and condensation occur with changes in temperature."
      ] },
      { h: "Elements, atoms and molecules", p: "An element is a pure substance made of only one kind of atom (e.g. oxygen, hydrogen, sodium, iron, calcium). An atom is the smallest particle of an element that retains its properties. A molecule is two or more atoms joined together (e.g. water, H2O; oxygen gas, O2). The body is built mainly from a few elements — oxygen, carbon, hydrogen, nitrogen, plus calcium, sodium, potassium, iron and others." },
      { h: "Structure of the atom", p: "An atom has a central nucleus containing positively charged protons and uncharged neutrons, surrounded by negatively charged electrons in shells. The number of protons (atomic number) defines the element. In a neutral atom the number of electrons equals the number of protons, so the charges balance.", figure: {
        caption: "Basic atomic structure: nucleus of protons and neutrons with electrons in shells.",
        svg: '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Atom with nucleus and electron shells."><circle cx="180" cy="110" r="90" fill="none" stroke="#F472B6" stroke-width="2"/><circle cx="180" cy="110" r="55" fill="none" stroke="#F472B6" stroke-width="2"/><circle cx="180" cy="110" r="26" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="180" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Nucleus</text><text x="180" y="122" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">p+ , n</text><circle cx="180" cy="55" r="7" fill="#BE185D"/><circle cx="180" cy="20" r="7" fill="#BE185D"/><circle cx="270" cy="110" r="7" fill="#BE185D"/><text x="305" y="114" font-family="sans-serif" font-size="10" fill="#831843">electron (e-)</text><text x="180" y="212" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">Electrons orbit in shells</text></svg>'
      } },
      { h: "Ions and electrolytes", p: "When an atom gains or loses electrons it becomes charged and is called an ion. Positive ions (cations) such as Na+, K+, Ca2+ have lost electrons; negative ions (anions) such as Cl-, HCO3- have gained electrons. Ions dissolved in body fluid are called electrolytes — sodium, potassium, calcium and chloride are vital for nerve and muscle function, including the uterine contractions of labour." },
      { h: "Chemical bonds and compounds", list: [
        "Ionic bond — formed by transfer of electrons (e.g. sodium chloride, NaCl — common salt and the main solute in normal saline).",
        "Covalent bond — formed by sharing electrons (e.g. water, oxygen, glucose).",
        "Compound — a substance made of two or more elements chemically joined (e.g. water, glucose, sodium bicarbonate)."
      ] },
      { h: "Application in midwifery", p: "These basics explain intravenous fluids (water plus electrolytes such as Na+ and Cl- in normal saline), why electrolyte balance matters for the heart and uterine muscle, how oxygen and carbon dioxide behave as gases in respiration, and how drugs as chemical compounds act in the body. The midwife reads and acts on electrolyte results and gives fluids safely on this foundation." },
      { h: "Roles & key terms", list: [
        "Element / atom / molecule / compound — building blocks of matter.",
        "Proton, neutron, electron — the subatomic particles.",
        "Ion — a charged atom; cation (+) and anion (-).",
        "Electrolyte — an ion in solution that conducts electricity.",
        "Ionic and covalent bonds — transfer versus sharing of electrons."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Define matter and describe the three states of matter with a clinical example of each.",
      "Distinguish between an element, an atom, a molecule and a compound.",
      "Describe the structure of an atom and name the three subatomic particles.",
      "Explain what an ion and an electrolyte are, and name four electrolytes important in the body.",
      "Differentiate between ionic and covalent bonding with an example of each."
    ],
    assessment: [
      { type: "mcq", q: "Anything that has mass and occupies space is called:", options: ["Energy", "Matter", "Force", "An ion"], answer: 1, rationale: "Matter is defined as anything having mass and occupying space." },
      { type: "mcq", q: "The smallest particle of an element that retains its properties is the:", options: ["Molecule", "Atom", "Compound", "Cell"], answer: 1, rationale: "An atom is the smallest unit of an element." },
      { type: "mcq", q: "The particles found in the nucleus of an atom are:", options: ["Protons and electrons", "Protons and neutrons", "Electrons and neutrons", "Ions and molecules"], answer: 1, rationale: "The nucleus contains protons (positive) and neutrons (neutral); electrons orbit outside." },
      { type: "mcq", q: "An atom that has lost or gained electrons and carries a charge is a/an:", options: ["Isotope", "Ion", "Molecule", "Element"], answer: 1, rationale: "A charged atom is an ion — a cation if positive, an anion if negative." },
      { type: "mcq", q: "Which of the following is a positively charged ion (cation)?", options: ["Cl-", "Na+", "HCO3-", "OH-"], answer: 1, rationale: "Na+ has lost an electron and is positively charged (a cation)." },
      { type: "mcq", q: "Sodium chloride (table salt / the solute in normal saline) is held together by a/an:", options: ["Covalent bond", "Ionic bond", "Hydrogen bond only", "No bond"], answer: 1, rationale: "NaCl is formed by transfer of an electron from sodium to chlorine — an ionic bond." },
      { type: "mcq", q: "Water (H2O) is an example of a:", options: ["Element", "Compound", "Mixture", "Ion"], answer: 1, rationale: "Water is a compound of hydrogen and oxygen chemically combined." },
      { type: "mcq", q: "Ions dissolved in body fluid that conduct electricity are called:", options: ["Enzymes", "Electrolytes", "Hormones", "Antibodies"], answer: 1, rationale: "Dissolved ions such as Na+, K+ and Cl- are electrolytes." },
      { type: "mcq", q: "The gas used by a labouring woman for breathing is an example of which state of matter?", options: ["Solid", "Liquid", "Gas", "Plasma state of matter"], answer: 2, rationale: "Oxygen is a gas, having no fixed shape or volume." },
      { type: "mcq", q: "The number of which particle defines the identity of an element (its atomic number)?", options: ["Neutrons", "Electrons", "Protons", "Molecules"], answer: 2, rationale: "The number of protons (atomic number) determines which element an atom is." }
      , { type: "fill", q: "A pure substance made of only one kind of atom is called an ____.", accept: ["element"], rationale: "An element contains only one type of atom." }
      , { type: "fill", q: "A negatively charged ion is called an ____.", accept: ["anion"], rationale: "An anion is a negatively charged ion that has gained electrons." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "bsc-07-mixtures-solutions",
    unit: "Unit 2 · Chemistry for the Midwife",
    title: "Mixtures, Solutions & Concentration",
    readMinutes: 16,
    summary: "Pure substances versus mixtures, solutions and their parts, concentration and tonicity, and why isotonic, hypotonic and hypertonic fluids matter in maternity care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — pure substances and mixtures", p: "A pure substance (element or compound) has a fixed composition. A mixture contains two or more substances physically combined but not chemically joined, and can be separated by physical means. Blood, urine, amniotic fluid and intravenous fluids are all mixtures the midwife deals with daily." },
      { h: "Types of mixtures", list: [
        "Solution — a homogeneous mixture where the solute is fully dissolved (e.g. salt in water, glucose in saline).",
        "Suspension — particles are large and settle on standing (e.g. some medicines that must be shaken).",
        "Colloid — particles are intermediate and do not settle (e.g. plasma proteins; some plasma-expander fluids).",
        "Emulsion — tiny droplets of one liquid in another (e.g. fat in milk)."
      ] },
      { h: "Parts of a solution", p: "A solution has two parts: the solute, the substance that dissolves (e.g. salt, glucose, a drug), and the solvent, the liquid in which it dissolves. Water is the body's universal solvent, and most intravenous fluids are water-based solutions. The amount of solute in a given amount of solvent is the concentration." },
      { h: "Concentration", p: "Concentration tells how much solute is present. It may be expressed as a percentage (e.g. 0.9% sodium chloride, 5% dextrose), as grams per litre, or as moles per litre (molarity). Drug doses and IV fluid strengths are concentrations, so the midwife must understand them to calculate and check fluids and medicines safely." },
      { h: "Tonicity — isotonic, hypotonic, hypertonic", p: "Tonicity compares the solute concentration of a fluid with that of body cells, and decides how water moves by osmosis.", figure: {
        caption: "Effect of solution tonicity on a red blood cell.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isotonic, hypotonic and hypertonic effects on a cell."><text x="95" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">Isotonic</text><circle cx="95" cy="90" r="35" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="95" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">no net change</text><text x="280" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#BE185D">Hypotonic</text><circle cx="280" cy="90" r="45" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="280" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">water in &#8594; swells / bursts</text><text x="465" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Hypertonic</text><circle cx="465" cy="90" r="24" fill="#FCE7F3" stroke="#7C2D12" stroke-width="2"/><text x="465" y="150" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">water out &#8594; shrinks</text></svg>'
      } },
      { h: "Tonicity in maternity care", list: [
        "Isotonic fluids (e.g. 0.9% normal saline, Ringer's lactate) have the same tonicity as plasma and stay in the circulation — used for resuscitation and to replace blood loss after birth.",
        "Hypotonic fluids have fewer solutes; water moves into cells, which may swell.",
        "Hypertonic fluids have more solutes; water moves out of cells, which shrink.",
        "Giving the wrong tonicity can damage cells, so the midwife checks the fluid before administration."
      ] },
      { h: "Application in midwifery", p: "Understanding solutions and tonicity lets the midwife give intravenous fluids safely (for haemorrhage, dehydration or before a caesarean), interpret fluid balance, and prepare and dilute medicines correctly. It also explains how the kidney and placenta move water and solutes by osmosis." },
      { h: "Roles & key terms", list: [
        "Solute and solvent — the dissolved substance and the dissolving liquid.",
        "Concentration — amount of solute per unit of solution.",
        "Isotonic, hypotonic, hypertonic — tonicity relative to body cells.",
        "Suspension and colloid — mixtures whose particles differ in size.",
        "Solubility — how much solute can dissolve in a solvent."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Distinguish between a pure substance and a mixture, with examples from maternity care.",
      "Define solute, solvent and solution, and explain concentration.",
      "Explain isotonic, hypotonic and hypertonic solutions and their effect on cells.",
      "Why must the midwife understand tonicity when giving intravenous fluids?",
      "Differentiate between a solution, a suspension and a colloid."
    ],
    assessment: [
      { type: "mcq", q: "A homogeneous mixture in which the solute is fully dissolved is a:", options: ["Suspension", "Solution", "Emulsion", "Compound"], answer: 1, rationale: "A solution is a homogeneous mixture of solute fully dissolved in a solvent." },
      { type: "mcq", q: "In a salt-water solution, the salt is the ____ and the water is the ____.", options: ["solvent; solute", "solute; solvent", "compound; element", "anion; cation"], answer: 1, rationale: "The dissolved substance (salt) is the solute; the dissolving liquid (water) is the solvent." },
      { type: "mcq", q: "Normal saline 0.9% has the same tonicity as plasma and is therefore:", options: ["Hypertonic", "Hypotonic", "Isotonic", "Non-ionic"], answer: 2, rationale: "0.9% sodium chloride is isotonic with plasma and stays in the circulation." },
      { type: "mcq", q: "A cell placed in a hypotonic solution will:", options: ["Shrink", "Swell and may burst", "Stay the same", "Turn into a solute"], answer: 1, rationale: "Water moves into the cell down the osmotic gradient, causing it to swell." },
      { type: "mcq", q: "A cell placed in a hypertonic solution will:", options: ["Swell", "Burst", "Shrink", "Divide"], answer: 2, rationale: "Water leaves the cell into the more concentrated solution, so the cell shrinks." },
      { type: "mcq", q: "The body's universal solvent is:", options: ["Glucose", "Water", "Sodium", "Plasma protein"], answer: 1, rationale: "Water dissolves more substances than any other liquid and is the body's main solvent." },
      { type: "mcq", q: "A mixture whose large particles settle out on standing is a:", options: ["Solution", "Suspension", "Element", "Compound"], answer: 1, rationale: "In a suspension the particles are large and settle under gravity." },
      { type: "mcq", q: "The amount of solute present in a given amount of solution is its:", options: ["Tonicity", "Concentration", "Solubility", "Density"], answer: 1, rationale: "Concentration is the quantity of solute per unit of solution." },
      { type: "mcq", q: "Which fluid is suitable for replacing blood loss to maintain circulating volume after birth?", options: ["Hypotonic water", "Isotonic normal saline", "Hypertonic glucose 50%", "Pure distilled water"], answer: 1, rationale: "Isotonic fluids such as 0.9% saline stay in the circulation and help maintain volume." },
      { type: "mcq", q: "Tiny droplets of one liquid dispersed in another (such as fat in milk) form a/an:", options: ["Emulsion", "Solution", "Crystal", "Gas"], answer: 0, rationale: "An emulsion is a mixture of immiscible liquids as fine droplets, e.g. fat in milk." }
      , { type: "fill", q: "A solution that has the same solute concentration as body cells is described as ____.", accept: ["isotonic"], rationale: "Isotonic solutions cause no net movement of water across the cell membrane." }
      , { type: "fill", q: "In a solution, the liquid that does the dissolving is the ____.", accept: ["solvent"], rationale: "The solvent is the dissolving medium; the solute is what dissolves in it." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "bsc-08-acids-bases-ph",
    unit: "Unit 2 · Chemistry for the Midwife",
    title: "Acids, Bases, pH & Buffers",
    readMinutes: 16,
    summary: "What acids and bases are, the pH scale, buffers, normal body pH and acid-base balance, and the importance of pH in pregnancy, labour and the assessment of the newborn.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — acids and bases", p: "An acid is a substance that releases hydrogen ions (H+) in solution; a base (alkali) accepts hydrogen ions or releases hydroxide ions (OH-). The balance between them determines how acidic or alkaline a fluid is. The body keeps this balance within very narrow limits, and the midwife uses pH to judge the wellbeing of mother and baby." },
      { h: "The pH scale", p: "pH measures the acidity or alkalinity of a solution on a scale from 0 to 14. A pH of 7 is neutral (pure water); below 7 is acidic; above 7 is alkaline. The scale is logarithmic, so each unit represents a tenfold change in hydrogen-ion concentration.", figure: {
        caption: "The pH scale from acidic to alkaline, with body reference points.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="pH scale showing acidic, neutral and alkaline ranges."><rect x="20" y="40" width="180" height="30" fill="#FCE7F3" stroke="#831843" stroke-width="1.5"/><rect x="200" y="40" width="60" height="30" fill="#FDF2F8" stroke="#831843" stroke-width="1.5"/><rect x="260" y="40" width="280" height="30" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="110" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">ACIDIC (0-7)</text><text x="230" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">7</text><text x="400" y="60" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">ALKALINE (7-14)</text><text x="40" y="95" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">stomach ~2</text><text x="160" y="95" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">vagina ~4</text><text x="300" y="95" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">blood ~7.4</text><text x="280" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">each step = 10&#215; change in H+</text></svg>'
      } },
      { h: "Examples in the body and clinic", list: [
        "Strongly acidic: stomach (hydrochloric acid, pH about 1.5-3).",
        "Acidic: the healthy vagina (pH about 3.8-4.5), which protects against infection.",
        "Slightly alkaline: blood (pH about 7.35-7.45) — kept within a narrow range.",
        "Alkaline: pancreatic juice and bile.",
        "Urine pH varies with diet and health."
      ] },
      { h: "Buffers and acid-base balance", p: "A buffer is a substance that resists changes in pH by mopping up extra acid or base. The main blood buffer is the bicarbonate system. Together with the lungs (which remove carbon dioxide) and the kidneys (which excrete acid), buffers keep blood pH steady. If acid builds up the result is acidosis; if it falls the result is alkalosis." },
      { h: "pH in pregnancy and labour", list: [
        "The acidic vaginal pH helps prevent infection; a rise toward neutral may signal rupture of membranes or bacterial vaginosis.",
        "In labour, if the baby is short of oxygen, carbon dioxide and lactic acid build up and fetal blood pH falls (fetal acidosis).",
        "Fetal scalp blood sampling and umbilical cord blood pH are used to assess how well the baby has coped in labour.",
        "A low cord-blood pH at birth indicates the baby has been acidotic and may need resuscitation."
      ] },
      { h: "Application in midwifery", p: "The midwife uses pH testing of vaginal fluid to help confirm rupture of membranes, recognises that a healthy acidic vagina protects against infection, understands that prolonged poor oxygen supply makes the fetus acidotic, and interprets cord-blood gas and pH results that guide care of the newborn at birth." },
      { h: "Roles & key terms", list: [
        "Acid / base (alkali) — donors and acceptors of hydrogen ions.",
        "pH — measure of acidity/alkalinity, 0-14, neutral at 7.",
        "Buffer — resists changes in pH.",
        "Acidosis / alkalosis — abnormally low/high body pH.",
        "Fetal acidosis — low fetal blood pH from poor oxygen supply."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Define an acid and a base and describe the pH scale.",
      "Explain what a buffer is and how the body maintains blood pH.",
      "Why is the acidic pH of the vagina important, and how is pH used in labour ward practice?",
      "Explain fetal acidosis and how cord-blood pH is used at birth.",
      "Give the approximate pH of stomach contents, the vagina and blood."
    ],
    assessment: [
      { type: "mcq", q: "A substance that releases hydrogen ions (H+) in solution is a/an:", options: ["Base", "Acid", "Buffer", "Salt"], answer: 1, rationale: "An acid donates hydrogen ions in solution." },
      { type: "mcq", q: "On the pH scale, a value of 7 is:", options: ["Strongly acidic", "Neutral", "Strongly alkaline", "Impossible"], answer: 1, rationale: "pH 7 is neutral, the value of pure water." },
      { type: "mcq", q: "The approximate pH of normal arterial blood is:", options: ["2.0", "5.5", "7.4", "9.0"], answer: 2, rationale: "Blood pH is tightly maintained at about 7.35-7.45." },
      { type: "mcq", q: "The healthy vagina is normally:", options: ["Strongly alkaline", "Acidic", "Neutral", "pH 9"], answer: 1, rationale: "A vaginal pH of about 3.8-4.5 helps protect against infection." },
      { type: "mcq", q: "A substance that resists changes in pH is called a:", options: ["Solvent", "Buffer", "Catalyst", "Solute"], answer: 1, rationale: "Buffers absorb excess acid or base to keep pH stable." },
      { type: "mcq", q: "A fall in blood pH below the normal range is called:", options: ["Alkalosis", "Acidosis", "Neutrality", "Hypoxia only"], answer: 1, rationale: "Acidosis is an abnormally low blood pH (excess acid)." },
      { type: "mcq", q: "During labour, if the baby is short of oxygen, the fetal blood pH will:", options: ["Rise", "Stay exactly the same", "Fall", "Become 14"], answer: 2, rationale: "Carbon dioxide and lactic acid accumulate, lowering fetal pH (acidosis)." },
      { type: "mcq", q: "A change of one pH unit represents how big a change in hydrogen-ion concentration?", options: ["Two times", "Ten times", "One hundred times", "No change"], answer: 1, rationale: "The pH scale is logarithmic; each unit is a tenfold change in H+." },
      { type: "mcq", q: "A rise in vaginal pH toward neutral in a pregnant woman may suggest:", options: ["Normal finding always", "Rupture of the membranes", "Dehydration", "High blood sugar"], answer: 1, rationale: "Amniotic fluid is alkaline, so leaking membranes raise vaginal pH — used to help confirm rupture." },
      { type: "mcq", q: "Which organs, with buffers, help to keep blood pH normal?", options: ["Lungs and kidneys", "Liver and spleen", "Skin and bone", "Uterus and ovaries"], answer: 0, rationale: "The lungs remove CO2 and the kidneys excrete acid, working with blood buffers." }
      , { type: "fill", q: "A pH value below 7 indicates that a solution is ____.", accept: ["acidic", "acid"], rationale: "Values below 7 are acidic; above 7 are alkaline." }
      , { type: "fill", q: "Low fetal blood pH caused by poor oxygen supply in labour is called fetal ____.", accept: ["acidosis"], rationale: "Fetal acidosis reflects accumulation of acid when the baby is short of oxygen." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "bsc-09-biochemistry-nutrients",
    unit: "Unit 2 · Chemistry for the Midwife",
    title: "Biochemistry — Carbohydrates, Proteins, Lipids & Enzymes",
    readMinutes: 18,
    summary: "The major biological molecules — carbohydrates, proteins, lipids and enzymes — their functions, and their special importance in pregnancy, fetal growth and lactation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — biochemistry of life", p: "Biochemistry is the chemistry of living things. The body is built and fuelled by four main classes of organic molecule — carbohydrates, proteins, lipids and nucleic acids — with water and minerals. In pregnancy the demand for all of these rises to build the fetus, placenta and extra maternal tissue, and later to make breast milk." },
      { h: "Carbohydrates", p: "Carbohydrates (sugars and starches) are the body's main source of energy. They are built of monosaccharides such as glucose, which is the fuel cells use in respiration. Glucose is especially important in pregnancy: it crosses the placenta to feed the fetus, and disturbed glucose handling causes gestational diabetes. The midwife monitors blood glucose and gives dietary advice." },
      { h: "Proteins", p: "Proteins are made of amino acids joined by peptide bonds. They build and repair tissue, form enzymes, antibodies and many hormones, and help transport substances (e.g. haemoglobin). Extra protein is needed in pregnancy for the growing fetus, uterus, placenta and increased blood volume, and for milk production. Protein in the urine (proteinuria) is an important warning sign of pre-eclampsia." },
      { h: "Lipids (fats)", p: "Lipids include fats, oils, phospholipids and cholesterol. They store energy, cushion and insulate the body, form the cell membrane, and are the basis of steroid hormones such as oestrogen and progesterone. Fetal fat stores laid down late in pregnancy help the newborn keep warm. Essential fatty acids support fetal brain development; the fat in breast milk is a key energy source for the baby." },
      { h: "Enzymes", p: "Enzymes are biological catalysts — usually proteins — that speed up chemical reactions without being used up. Each enzyme is specific to its substrate (the lock-and-key idea) and works best at the body's normal temperature and pH. Enzymes in saliva, stomach, pancreas and gut digest food; lactase in the baby's gut digests milk sugar.", figure: {
        caption: "Enzyme action: enzyme binds substrate at the active site, forms product, and is reused.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Enzyme and substrate forming product."><defs><marker id="bsc9a" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#BE185D"/></marker></defs><rect x="20" y="50" width="120" height="50" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="80" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Enzyme +</text><text x="80" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">Substrate</text><rect x="220" y="50" width="120" height="50" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="280" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Enzyme-substrate</text><text x="280" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">complex</text><rect x="420" y="50" width="120" height="50" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="480" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Product +</text><text x="480" y="90" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">enzyme reused</text><line x1="140" y1="75" x2="216" y2="75" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc9a)"/><line x1="340" y1="75" x2="416" y2="75" stroke="#BE185D" stroke-width="2.5" marker-end="url(#bsc9a)"/></svg>'
      } },
      { h: "Vitamins and minerals", list: [
        "Iron and folic acid — needed for red-cell production; deficiency causes anaemia, common in pregnancy.",
        "Calcium and vitamin D — for fetal bone development and maternal bone health.",
        "Folic acid before and in early pregnancy — prevents neural-tube defects.",
        "Vitamin K — given to the newborn to prevent bleeding.",
        "Iodine — needed for the baby's brain and thyroid development."
      ] },
      { h: "Application in midwifery", p: "This biochemistry underpins maternal nutrition advice: enough energy (carbohydrate and fat), good-quality protein, and key vitamins and minerals (iron, folic acid, calcium, iodine). It explains gestational diabetes (glucose), pre-eclampsia (proteinuria), anaemia (iron and folate), and the value of breast milk, whose balanced nutrients are ideal for the baby." },
      { h: "Roles & key terms", list: [
        "Carbohydrate / glucose — main energy source; crosses to the fetus.",
        "Protein / amino acid — building and repair; enzymes and antibodies.",
        "Lipid / essential fatty acid — energy store, membranes, steroid hormones, brain development.",
        "Enzyme / substrate / active site — biological catalyst and what it acts on.",
        "Proteinuria — protein in urine, a sign of pre-eclampsia."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Name the four main classes of biological molecule and give the function of each.",
      "Explain why glucose is especially important in pregnancy.",
      "Describe the functions of proteins and the significance of proteinuria in pregnancy.",
      "What is an enzyme? Explain how it works and the conditions it needs.",
      "Discuss the key vitamins and minerals needed in pregnancy and their roles."
    ],
    assessment: [
      { type: "mcq", q: "The body's main and most readily used source of energy is:", options: ["Protein", "Carbohydrate", "Lipid", "Vitamin"], answer: 1, rationale: "Carbohydrate (glucose) is the body's primary energy fuel." },
      { type: "mcq", q: "Proteins are built from sub-units called:", options: ["Monosaccharides", "Amino acids", "Fatty acids", "Nucleotides"], answer: 1, rationale: "Amino acids are the building blocks of protein, joined by peptide bonds." },
      { type: "mcq", q: "Steroid hormones such as oestrogen and progesterone are made from:", options: ["Carbohydrate", "Protein", "Lipid (cholesterol)", "Water"], answer: 2, rationale: "Steroid hormones are derived from cholesterol, a lipid." },
      { type: "mcq", q: "Biological catalysts that speed up reactions without being used up are:", options: ["Hormones", "Enzymes", "Antibodies", "Vitamins"], answer: 1, rationale: "Enzymes are catalysts, usually proteins, that accelerate reactions and are reused." },
      { type: "mcq", q: "Protein found in the urine (proteinuria) in pregnancy is an important sign of:", options: ["Gestational diabetes", "Pre-eclampsia", "Anaemia", "Normal pregnancy"], answer: 1, rationale: "Proteinuria with raised blood pressure suggests pre-eclampsia." },
      { type: "mcq", q: "Disturbed glucose handling first appearing in pregnancy is called:", options: ["Gestational diabetes", "Pre-eclampsia", "Anaemia", "Thrush"], answer: 0, rationale: "Glucose intolerance arising in pregnancy is gestational diabetes." },
      { type: "mcq", q: "Which nutrients are most needed to prevent anaemia in pregnancy?", options: ["Vitamin C and zinc", "Iron and folic acid", "Calcium and vitamin D", "Vitamin K and iodine"], answer: 1, rationale: "Iron and folic acid are essential for red-cell formation; deficiency causes anaemia." },
      { type: "mcq", q: "Enzymes work best at the body's normal:", options: ["pH and temperature", "Blood pressure", "Heart rate", "Pulse pressure"], answer: 0, rationale: "Enzyme activity is highest at the body's optimum pH (about 7.4) and temperature (about 37 C)." },
      { type: "mcq", q: "The specific molecule on which an enzyme acts is called the:", options: ["Product", "Substrate", "Coenzyme", "Solvent"], answer: 1, rationale: "The substrate binds the enzyme's active site and is converted to product." },
      { type: "mcq", q: "Late-pregnancy fetal fat stores are important mainly to help the newborn to:", options: ["Digest milk", "Keep warm", "Make antibodies", "Grow taller"], answer: 1, rationale: "Brown and white fat laid down late in pregnancy help the newborn maintain body heat." }
      , { type: "fill", q: "The simple sugar that is the body's main fuel and crosses the placenta to the fetus is ____.", accept: ["glucose"], rationale: "Glucose is the chief respiratory fuel and the main sugar transferred to the fetus." }
      , { type: "fill", q: "Biological catalysts that speed up reactions without being changed are called ____.", accept: ["enzymes", "enzyme"], rationale: "Enzymes catalyse reactions and are not consumed." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "bsc-10-water-electrolytes",
    unit: "Unit 2 · Chemistry for the Midwife",
    title: "Water, Electrolytes & Fluid Balance in Pregnancy",
    readMinutes: 17,
    summary: "The role of water and the main electrolytes, the body fluid compartments, fluid balance in pregnancy and labour, and the midwife's role in recognising and managing dehydration and fluid loss.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — water, the basis of body fluid", p: "Water makes up about 60% of the adult body and is the medium in which all reactions take place. It transports nutrients, oxygen and wastes, helps regulate temperature, and forms blood, amniotic fluid and breast milk. In pregnancy total body water rises substantially to support the increased blood volume, the fetus and the amniotic fluid." },
      { h: "Importance for midwifery", p: "Fluid and electrolyte balance is central to safe maternity care: blood volume expands in pregnancy, large amounts of fluid can be lost in vomiting, diarrhoea, prolonged labour or haemorrhage, and intravenous fluids are frequently given. The midwife monitors intake and output and recognises imbalance early." },
      { h: "Body fluid compartments", list: [
        "Intracellular fluid (ICF) — inside the cells; about two-thirds of body water.",
        "Extracellular fluid (ECF) — outside the cells; about one-third, divided into:",
        "Interstitial fluid — between the cells/tissues.",
        "Plasma — the fluid part of blood within the vessels.",
        "Amniotic fluid is a special extracellular fluid surrounding the fetus."
      ] },
      { h: "The main electrolytes and their roles", list: [
        "Sodium (Na+) — chief ECF cation; controls fluid balance and blood volume.",
        "Potassium (K+) — chief ICF cation; vital for nerve and muscle function, including the heart.",
        "Calcium (Ca2+) — muscle contraction (including the uterus), bone formation and blood clotting.",
        "Chloride (Cl-) — main ECF anion; works with sodium.",
        "Bicarbonate (HCO3-) — the main buffer maintaining blood pH."
      ] },
      { h: "Fluid balance — intake and output", p: "Fluid balance means matching what comes in (drinks, food, IV fluids) with what goes out (urine, sweat, breathing, faeces, and in childbearing also blood loss, vomiting and lochia). Movement of water between compartments occurs by osmosis, driven mainly by sodium. The midwife keeps a fluid balance chart for women who are unwell, in prolonged labour, or after operative birth.", figure: {
        caption: "Fluid balance: intake should match output; childbearing adds extra routes of loss.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fluid balance between intake and output."><rect x="30" y="40" width="180" height="80" rx="10" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="120" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">INTAKE</text><text x="120" y="88" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">drinks, food, IV fluids</text><rect x="350" y="40" width="180" height="80" rx="10" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="440" y="62" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#831843">OUTPUT</text><text x="440" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">urine, sweat, breathing</text><text x="440" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">+ blood loss, vomit, lochia</text><line x1="210" y1="80" x2="346" y2="80" stroke="#15803D" stroke-width="3"/><text x="280" y="70" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">balance</text></svg>'
      } },
      { h: "Dehydration and fluid loss in childbearing", list: [
        "Causes: hyperemesis (severe vomiting in pregnancy), diarrhoea, prolonged labour with little drinking, sweating, and haemorrhage after birth.",
        "Signs: thirst, dry mouth, reduced and concentrated urine, sunken eyes, fast pulse, low blood pressure and, if severe, confusion.",
        "Management: oral fluids if able, intravenous fluids (isotonic) when needed, treat the cause, and monitor closely.",
        "After major blood loss, replacing volume quickly with isotonic fluid (and blood) is life-saving."
      ] },
      { h: "Application in midwifery", p: "The midwife encourages fluids in labour, keeps an accurate fluid balance chart, watches urine output as a guide to circulation, recognises dehydration and shock, gives prescribed IV fluids safely, and understands why electrolytes such as potassium and calcium must be kept within range for the heart and uterine muscle to work normally." },
      { h: "Roles & key terms", list: [
        "Intracellular and extracellular fluid — water inside and outside cells.",
        "Electrolyte — ion in solution (Na+, K+, Ca2+, Cl-, HCO3-).",
        "Fluid balance — intake matching output.",
        "Dehydration — excessive loss of body water.",
        "Oedema — abnormal accumulation of fluid in the tissues."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Describe the body fluid compartments and the proportion of water in each.",
      "Name the main electrolytes and state the role of each.",
      "Explain fluid balance and list the routes of fluid loss important in childbearing.",
      "Describe the causes, signs and management of dehydration in a pregnant woman.",
      "Why must the midwife monitor fluid balance and urine output in labour?"
    ],
    assessment: [
      { type: "mcq", q: "Approximately what proportion of the adult body is water?", options: ["20%", "40%", "60%", "90%"], answer: 2, rationale: "Water makes up about 60% of adult body weight." },
      { type: "mcq", q: "The fluid found INSIDE the cells is called:", options: ["Plasma", "Interstitial fluid", "Intracellular fluid", "Amniotic fluid"], answer: 2, rationale: "Intracellular fluid (ICF) is the water within cells, about two-thirds of body water." },
      { type: "mcq", q: "The chief cation of the extracellular fluid, controlling fluid balance, is:", options: ["Potassium", "Sodium", "Calcium", "Chloride"], answer: 1, rationale: "Sodium (Na+) is the main extracellular cation governing fluid and volume balance." },
      { type: "mcq", q: "The main intracellular cation, vital for nerve and muscle (including heart) function, is:", options: ["Sodium", "Potassium", "Bicarbonate", "Chloride"], answer: 1, rationale: "Potassium (K+) is the chief intracellular cation essential for excitable tissue." },
      { type: "mcq", q: "Which electrolyte is essential for uterine muscle contraction, bone formation and clotting?", options: ["Chloride", "Bicarbonate", "Calcium", "Sodium"], answer: 2, rationale: "Calcium (Ca2+) is needed for muscle contraction, bone and coagulation." },
      { type: "mcq", q: "Severe vomiting in early pregnancy causing fluid loss is called:", options: ["Pre-eclampsia", "Hyperemesis", "Proteinuria", "Lochia"], answer: 1, rationale: "Hyperemesis gravidarum is severe vomiting that can cause dehydration." },
      { type: "mcq", q: "An early and useful guide to a woman's circulating volume in labour is her:", options: ["Hair colour", "Urine output", "Height", "Blood group"], answer: 1, rationale: "Falling urine output is an early sign of reduced circulating volume." },
      { type: "mcq", q: "Which is a sign of dehydration?", options: ["Bounding strong pulse", "Increased dilute urine", "Dry mouth and reduced urine", "Raised blood pressure"], answer: 2, rationale: "Dehydration causes thirst, a dry mouth and reduced, concentrated urine." },
      { type: "mcq", q: "Movement of water between fluid compartments occurs mainly by:", options: ["Active transport", "Osmosis", "Filtration only", "Phagocytosis"], answer: 1, rationale: "Water moves between compartments by osmosis, driven largely by sodium." },
      { type: "mcq", q: "Abnormal accumulation of fluid in the tissues is called:", options: ["Dehydration", "Oedema", "Acidosis", "Anaemia"], answer: 1, rationale: "Oedema is excess fluid in the interstitial space." }
      , { type: "fill", q: "Matching fluid intake with fluid output is known as fluid ____.", accept: ["balance"], rationale: "Fluid balance means intake equals output." }
      , { type: "fill", q: "The main extracellular cation that controls body fluid balance is ____.", accept: ["sodium", "na", "na+"], rationale: "Sodium is the principal extracellular cation regulating fluid volume." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "bsc-11-units-measurement",
    unit: "Unit 3 · Physics for the Midwife",
    title: "Units, Measurement & Clinical Calculations",
    readMinutes: 16,
    summary: "Physical quantities and SI units, common clinical units, measurement of length, mass, volume and time, accuracy, and safe drug and fluid calculations in midwifery.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — measurement in midwifery", p: "Physics begins with measurement. A measurement has a number and a unit. Accurate measurement is essential in midwifery — weighing the newborn, measuring blood loss, giving the right dose of a drug, and timing contractions all depend on correct units and careful technique." },
      { h: "The SI system and base quantities", list: [
        "Length — metre (m); also centimetre (cm) and millimetre (mm).",
        "Mass — kilogram (kg); also gram (g) and milligram (mg).",
        "Time — second (s); also minute and hour.",
        "Temperature — kelvin (K); in practice degrees Celsius (C).",
        "Amount of substance — mole (mol)."
      ] },
      { h: "Common clinical units", list: [
        "Newborn weight in grams/kilograms; maternal weight in kilograms.",
        "Length/height in centimetres; symphysis-fundal height in centimetres.",
        "Blood pressure in millimetres of mercury (mmHg).",
        "Drug doses in milligrams (mg), micrograms (mcg) and millilitres (mL).",
        "Blood loss and urine output in millilitres (mL); fluids in litres (L)."
      ] },
      { h: "Prefixes and conversions", p: "Metric prefixes scale units by powers of ten: kilo- (x1000), centi- (1/100), milli- (1/1000), micro- (1/1,000,000). So 1 kg = 1000 g, 1 g = 1000 mg, 1 mg = 1000 mcg, and 1 L = 1000 mL. The midwife must convert confidently between units to avoid dangerous dose errors.", figure: {
        caption: "Common metric conversions used in maternity care.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Metric conversion ladder for clinical units."><rect x="40" y="30" width="200" height="32" rx="6" fill="#FDF2F8" stroke="#831843" stroke-width="1.5"/><text x="140" y="51" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">1 kg = 1000 g</text><rect x="40" y="70" width="200" height="32" rx="6" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="140" y="91" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">1 g = 1000 mg</text><rect x="300" y="30" width="220" height="32" rx="6" fill="#FCE7F3" stroke="#BE185D" stroke-width="1.5"/><text x="410" y="51" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">1 mg = 1000 mcg</text><rect x="300" y="70" width="220" height="32" rx="6" fill="#FDF2F8" stroke="#831843" stroke-width="1.5"/><text x="410" y="91" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">1 L = 1000 mL</text><text x="280" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Always check units before giving a drug or fluid</text></svg>'
      } },
      { h: "Accuracy, precision and errors", p: "Accuracy means how close a measurement is to the true value; precision means how consistent repeated measurements are. Errors arise from faulty equipment, wrong technique or misreading scales. The midwife reduces error by using calibrated, working equipment, reading at eye level, and double-checking critical values such as drug doses and blood pressure." },
      { h: "Simple clinical calculations", p: "A common, safe formula for a drug dose is: dose required = (what you want / what you have) x the volume it is in. Always work in the same units, calculate carefully, and have a second person check high-risk drugs (such as oxytocics or magnesium sulphate). Estimating blood loss accurately, rather than guessing, guides timely treatment of postpartum haemorrhage." },
      { h: "Application in midwifery", p: "Correct measurement and calculation keep women and babies safe: weighing the baby to judge growth and dosing, measuring fundal height to assess fetal growth, recording blood pressure to detect pre-eclampsia, quantifying blood loss to recognise haemorrhage, and calculating drug doses precisely." },
      { h: "Roles & key terms", list: [
        "SI units — the international system of units.",
        "Prefixes — kilo, centi, milli, micro.",
        "Accuracy and precision — closeness to truth and consistency.",
        "Conversion — changing between units of the same quantity.",
        "Calibration — checking an instrument against a known standard."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "State the SI base units for length, mass, time and temperature.",
      "Explain the metric prefixes kilo-, milli- and micro- with conversions.",
      "Differentiate between accuracy and precision and state how errors are reduced.",
      "Describe the units commonly used to measure newborn weight, blood pressure and drug doses.",
      "Why is accurate measurement and calculation important for safe midwifery practice?"
    ],
    assessment: [
      { type: "mcq", q: "The SI base unit of mass is the:", options: ["Gram", "Kilogram", "Pound", "Litre"], answer: 1, rationale: "The kilogram is the SI base unit of mass." },
      { type: "mcq", q: "Blood pressure is measured in:", options: ["Millilitres", "Millimetres of mercury (mmHg)", "Grams", "Kelvin"], answer: 1, rationale: "Blood pressure is recorded in millimetres of mercury (mmHg)." },
      { type: "mcq", q: "1 gram is equal to how many milligrams?", options: ["10", "100", "1000", "1,000,000"], answer: 2, rationale: "1 g = 1000 mg." },
      { type: "mcq", q: "How many millilitres are there in 1 litre?", options: ["10", "100", "1000", "10000"], answer: 2, rationale: "1 L = 1000 mL." },
      { type: "mcq", q: "1 milligram equals how many micrograms?", options: ["10", "100", "1000", "100000"], answer: 2, rationale: "1 mg = 1000 mcg (micrograms)." },
      { type: "mcq", q: "How close a measurement is to the true value is called:", options: ["Precision", "Accuracy", "Calibration", "Conversion"], answer: 1, rationale: "Accuracy is closeness to the true value; precision is consistency of repeats." },
      { type: "mcq", q: "Symphysis-fundal height in pregnancy is usually measured in:", options: ["Millilitres", "Centimetres", "Kilograms", "mmHg"], answer: 1, rationale: "Fundal height is measured in centimetres to assess fetal growth." },
      { type: "mcq", q: "Checking an instrument against a known standard is called:", options: ["Conversion", "Calibration", "Estimation", "Titration"], answer: 1, rationale: "Calibration ensures the instrument reads correctly against a standard." },
      { type: "mcq", q: "Which practice most reduces the risk of a drug-dose error?", options: ["Guessing the dose", "Working in mixed units", "Double-checking high-risk drugs with another person", "Reading scales from an angle"], answer: 2, rationale: "Independent double-checking of high-risk drugs reduces dosing errors." },
      { type: "mcq", q: "A newborn baby's weight is most appropriately recorded in:", options: ["Grams/kilograms", "Millimetres", "mmHg", "Moles"], answer: 0, rationale: "Newborn weight is measured in grams/kilograms." }
      , { type: "fill", q: "The prefix 'milli-' means one ____ of the base unit.", accept: ["thousandth", "1/1000", "thousand"], rationale: "Milli- denotes one thousandth (1/1000)." }
      , { type: "fill", q: "A measurement always consists of a number together with a ____.", accept: ["unit"], rationale: "Every measurement needs both a number and a unit to have meaning." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "bsc-12-pressure-bp",
    unit: "Unit 3 · Physics for the Midwife",
    title: "Pressure & Blood Pressure",
    readMinutes: 17,
    summary: "What pressure is, how it is measured, atmospheric and fluid pressure, blood pressure and its measurement, and the importance of blood pressure in detecting pre-eclampsia and shock.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — what pressure is", p: "Pressure is the force acting on a unit area (pressure = force / area). The same force spread over a small area gives high pressure, and over a large area gives low pressure. Pressure explains how blood is pushed around the body, how the sphygmomanometer measures blood pressure, and how oxygen and gases move in respiration." },
      { h: "Units of pressure", p: "The SI unit of pressure is the pascal (Pa). In clinical work pressure is usually given in millimetres of mercury (mmHg) — for blood pressure and for atmospheric pressure — because mercury manometers were the traditional measuring devices. Higher columns of mercury indicate higher pressure." },
      { h: "Atmospheric and fluid pressure", list: [
        "Atmospheric pressure — the weight of air pressing on us, about 760 mmHg at sea level; it drives air into the lungs when the chest expands.",
        "Fluid (hydrostatic) pressure — pressure exerted by a liquid; it increases with depth and is the same in all directions.",
        "Blood is a fluid under pressure generated by the pumping heart.",
        "Pressure differences move air in breathing and fluids across capillary walls."
      ] },
      { h: "Blood pressure", p: "Blood pressure (BP) is the pressure the blood exerts on the walls of the arteries. It is written as two numbers: the systolic pressure (when the heart contracts) over the diastolic pressure (when the heart relaxes), e.g. 120/80 mmHg. BP depends on the strength of the heartbeat, the volume of blood and the resistance of the vessels.", figure: {
        caption: "Blood pressure: systolic over diastolic, measured in mmHg.",
        svg: '<svg viewBox="0 0 460 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Systolic over diastolic blood pressure."><rect x="120" y="35" width="220" height="40" rx="8" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="230" y="61" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">Systolic 120 (heart contracts)</text><rect x="120" y="85" width="220" height="40" rx="8" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="230" y="111" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">Diastolic 80 (heart relaxes)</text><text x="230" y="22" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#7C2D12">BP = 120 / 80 mmHg</text></svg>'
      } },
      { h: "Measuring blood pressure", list: [
        "A sphygmomanometer with a cuff and a stethoscope (or an automated machine) is used.",
        "The cuff is inflated to stop the flow, then slowly released; the first sound heard is systolic, the point where sound disappears is diastolic.",
        "Use the correct cuff size, the right arm position (at heart level), and a rested, seated woman.",
        "In pregnancy, measure carefully and repeat if raised, as accurate readings are vital."
      ] },
      { h: "Blood pressure in midwifery", list: [
        "Raised BP (hypertension) in pregnancy may indicate pre-eclampsia, especially with proteinuria — a leading cause of maternal and fetal harm.",
        "A BP of 140/90 mmHg or above in pregnancy needs careful assessment and monitoring.",
        "Low BP (hypotension) may follow haemorrhage or occur when a woman lies flat in late pregnancy (the uterus presses on the major vein — relieved by lying on the side).",
        "A falling BP with a fast pulse is a danger sign of shock after blood loss."
      ] },
      { h: "Application in midwifery", p: "Blood pressure measurement is one of the most important routine observations in maternity care. Accurate, correctly performed readings allow the midwife to detect pre-eclampsia early, recognise shock from haemorrhage, and advise women in late pregnancy to avoid lying flat on their back. Understanding pressure also explains how to control bleeding by applying pressure and how respiration moves air." },
      { h: "Roles & key terms", list: [
        "Pressure = force / area; SI unit pascal, clinically mmHg.",
        "Systolic and diastolic pressure — heart contracting and relaxing.",
        "Hypertension and hypotension — high and low blood pressure.",
        "Sphygmomanometer — the device used to measure BP.",
        "Hydrostatic pressure — pressure exerted by a fluid."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Define pressure and state its formula and units.",
      "Explain systolic and diastolic blood pressure and how BP is measured.",
      "Discuss the significance of a raised blood pressure in pregnancy.",
      "Why should a woman in late pregnancy avoid lying flat on her back? Explain using pressure.",
      "Describe how blood pressure changes in shock after a postpartum haemorrhage."
    ],
    assessment: [
      { type: "mcq", q: "Pressure is defined as:", options: ["Force times area", "Force divided by area", "Mass times volume", "Area divided by force"], answer: 1, rationale: "Pressure = force / area." },
      { type: "mcq", q: "Blood pressure is conventionally measured in:", options: ["Pascals", "Millimetres of mercury (mmHg)", "Litres", "Newtons"], answer: 1, rationale: "Clinically, blood pressure is recorded in mmHg." },
      { type: "mcq", q: "In a reading of 120/80 mmHg, the figure 120 is the:", options: ["Diastolic pressure", "Pulse pressure", "Systolic pressure", "Mean pressure"], answer: 2, rationale: "The systolic (higher) value is recorded first, during heart contraction." },
      { type: "mcq", q: "The instrument used to measure blood pressure is the:", options: ["Thermometer", "Sphygmomanometer", "Stethoscope alone", "Barometer"], answer: 1, rationale: "A sphygmomanometer (with cuff) measures blood pressure." },
      { type: "mcq", q: "A blood pressure of 140/90 mmHg or above in pregnancy should prompt assessment for:", options: ["Anaemia", "Pre-eclampsia", "Thrush", "Dehydration only"], answer: 1, rationale: "Hypertension of 140/90 mmHg or more raises concern for pre-eclampsia." },
      { type: "mcq", q: "A woman lying flat on her back in late pregnancy may become faint because the uterus presses on the:", options: ["Aorta only", "Major vein (inferior vena cava)", "Lungs", "Stomach"], answer: 1, rationale: "The heavy uterus compresses the inferior vena cava, reducing venous return and BP (supine hypotension)." },
      { type: "mcq", q: "After a large postpartum haemorrhage, the typical change in vital signs is:", options: ["Rising BP and slow pulse", "Falling BP and fast pulse", "No change", "Falling pulse only"], answer: 1, rationale: "Blood loss causes hypotension with a compensatory tachycardia — signs of shock." },
      { type: "mcq", q: "The diastolic blood pressure represents the pressure when the heart is:", options: ["Contracting", "Relaxing", "Stopped", "Beating fastest"], answer: 1, rationale: "Diastolic pressure is the arterial pressure during cardiac relaxation (filling)." },
      { type: "mcq", q: "Atmospheric pressure at sea level is approximately:", options: ["76 mmHg", "760 mmHg", "7600 mmHg", "7.6 mmHg"], answer: 1, rationale: "Standard atmospheric pressure is about 760 mmHg at sea level." },
      { type: "mcq", q: "Which factor does NOT directly raise blood pressure?", options: ["Increased blood volume", "Increased vessel resistance", "Stronger heartbeat", "Lower body temperature alone"], answer: 3, rationale: "BP depends on cardiac force, blood volume and vascular resistance; body temperature is not a direct determinant." }
      , { type: "fill", q: "The higher of the two blood-pressure numbers, recorded when the heart contracts, is the ____ pressure.", accept: ["systolic"], rationale: "Systolic pressure occurs during ventricular contraction." },
      { type: "fill", q: "The device used to measure blood pressure is called a ____.", accept: ["sphygmomanometer"], rationale: "A sphygmomanometer with an inflatable cuff measures arterial blood pressure." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "bsc-13-heat-temperature",
    unit: "Unit 3 · Physics for the Midwife",
    title: "Heat, Temperature & Thermoregulation",
    readMinutes: 17,
    summary: "The difference between heat and temperature, how heat is transferred, body temperature regulation, and the special problem of keeping the newborn warm and preventing hypothermia.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — heat and temperature", p: "Heat is a form of energy that flows from a hotter to a cooler object; temperature measures how hot or cold something is. Heat always moves from high to low temperature until they are equal. This principle explains body temperature, fever, and why a newborn loses heat so easily to a cool environment." },
      { h: "Measuring temperature", p: "Temperature is measured with a thermometer in degrees Celsius (C). Normal body temperature is about 36.5-37.5 C. It can be taken in the axilla (armpit), mouth or, with care, the rectum. The midwife uses temperature to detect fever (a sign of infection) in the mother and dangerous low temperature (hypothermia) in the newborn." },
      { h: "Methods of heat transfer", list: [
        "Conduction — heat passes by direct contact (e.g. a baby on a cold surface loses heat).",
        "Convection — heat carried away by moving air or fluid (e.g. a draught over a wet baby).",
        "Radiation — heat lost to nearby cooler surfaces without contact (e.g. cold walls and windows).",
        "Evaporation — heat lost as water turns to vapour (e.g. a wet newborn drying off, sweating)."
      ] },
      { h: "Body temperature regulation", p: "The body keeps a steady core temperature (homeostasis) controlled by the hypothalamus. When too hot, the body sweats and widens skin vessels to lose heat; when too cold, it shivers and narrows skin vessels to conserve heat. Maintaining temperature needs energy, which is why a cold baby uses up its limited reserves quickly.", figure: {
        caption: "Four routes of heat loss in the newborn.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conduction, convection, radiation and evaporation heat loss."><rect x="15" y="50" width="125" height="55" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="77" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Conduction</text><text x="77" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">cold surface</text><rect x="155" y="50" width="125" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="217" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Convection</text><text x="217" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">draught</text><rect x="295" y="50" width="125" height="55" rx="9" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="357" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Radiation</text><text x="357" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">cold walls</text><rect x="435" y="50" width="125" height="55" rx="9" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="497" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#831843">Evaporation</text><text x="497" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#831843">wet skin</text><text x="280" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Dry, cover and keep baby skin-to-skin to prevent loss</text></svg>'
      } },
      { h: "The newborn and heat loss", list: [
        "Newborns lose heat very easily: large surface area for their weight, thin skin, little fat, and often wet at birth.",
        "Cold stress makes the baby use oxygen and glucose to make heat, risking low blood sugar and breathing problems.",
        "The 'warm chain' prevents this: dry the baby immediately, remove wet cloths, skin-to-skin contact with the mother, a hat, warm room, delay the first bath, and warm transport.",
        "Hypothermia (low body temperature) is dangerous and is prevented far more easily than treated."
      ] },
      { h: "Application in midwifery", p: "Understanding heat transfer lets the midwife protect the newborn from each route of heat loss — drying (evaporation), skin-to-skin and warm surfaces (conduction), covering and a warm draught-free room (convection), and keeping away from cold walls (radiation). In the mother, measuring temperature detects fever from infection and guides care." },
      { h: "Roles & key terms", list: [
        "Heat vs temperature — energy flow vs degree of hotness.",
        "Conduction, convection, radiation, evaporation — routes of heat transfer.",
        "Thermoregulation — keeping a steady core temperature.",
        "Hypothermia and pyrexia (fever) — low and high body temperature.",
        "Warm chain — steps to keep the newborn warm."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Distinguish between heat and temperature and state the normal range of body temperature.",
      "Describe the four methods of heat transfer with a newborn example of each.",
      "Explain how the body regulates its core temperature.",
      "Why do newborns lose heat easily, and how does the warm chain prevent hypothermia?",
      "Explain the dangers of cold stress in the newborn."
    ],
    assessment: [
      { type: "mcq", q: "Heat always flows from:", options: ["Cold to hot", "Hot to cold", "Both directions equally", "Low to high pressure"], answer: 1, rationale: "Heat energy flows from a hotter to a cooler object until temperatures equalise." },
      { type: "mcq", q: "Normal human body temperature is approximately:", options: ["30 C", "33 C", "37 C", "40 C"], answer: 2, rationale: "Normal body temperature is about 36.5-37.5 C (around 37 C)." },
      { type: "mcq", q: "A wet newborn losing heat as water evaporates from the skin is an example of:", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: 3, rationale: "Heat lost as water turns to vapour from wet skin is evaporation." },
      { type: "mcq", q: "Heat lost from a baby placed on a cold weighing scale is by:", options: ["Conduction", "Radiation", "Evaporation", "Convection"], answer: 0, rationale: "Direct contact with a cold surface transfers heat by conduction." },
      { type: "mcq", q: "Heat lost to cold walls and windows nearby, without contact, is by:", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: 2, rationale: "Radiation transfers heat to cooler surfaces without direct contact." },
      { type: "mcq", q: "The part of the brain that controls body temperature is the:", options: ["Cerebellum", "Hypothalamus", "Medulla", "Pituitary"], answer: 1, rationale: "The hypothalamus is the body's thermostat." },
      { type: "mcq", q: "Why do newborns lose heat more easily than adults?", options: ["Thick fat layer", "Small surface area", "Large surface area for weight and thin skin", "They sweat a lot"], answer: 2, rationale: "A large surface-area-to-weight ratio, thin skin and little fat make newborns prone to heat loss." },
      { type: "mcq", q: "An abnormally LOW body temperature is called:", options: ["Pyrexia", "Hypothermia", "Hyperthermia", "Fever"], answer: 1, rationale: "Hypothermia is a dangerously low body temperature, a serious risk in newborns." },
      { type: "mcq", q: "The FIRST step of the warm chain immediately after birth is to:", options: ["Bath the baby", "Dry the baby and remove wet cloths", "Weigh the baby", "Leave the baby uncovered"], answer: 1, rationale: "Drying the baby at once and removing wet cloths prevents evaporative heat loss." },
      { type: "mcq", q: "Cold stress in a newborn can lead to:", options: ["High blood sugar", "Low blood sugar and breathing problems", "Faster growth", "No effect"], answer: 1, rationale: "Generating heat uses glucose and oxygen, risking hypoglycaemia and respiratory distress." }
      , { type: "fill", q: "Keeping a steady core body temperature is called ____.", accept: ["thermoregulation", "temperature regulation"], rationale: "Thermoregulation maintains a constant core temperature." }
      , { type: "fill", q: "Drying the baby at once prevents heat loss by ____.", accept: ["evaporation"], rationale: "Drying removes surface water, preventing evaporative heat loss." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "bsc-14-light-optics",
    unit: "Unit 3 · Physics for the Midwife",
    title: "Light, Optics & the Microscope",
    readMinutes: 16,
    summary: "The nature of light, reflection and refraction, lenses and how the eye works, the light microscope used in the laboratory, and clinical uses of light such as phototherapy for newborn jaundice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — what light is", p: "Light is a form of energy that travels in straight lines as waves at very high speed. It lets us see, allows the microscope to reveal microorganisms, and is used in treatment such as phototherapy for newborn jaundice. Understanding light helps the midwife use lighting and equipment correctly and explain treatments to families." },
      { h: "Reflection and refraction", list: [
        "Reflection — light bouncing off a surface (e.g. a mirror, an examination lamp directed onto the perineum).",
        "Refraction — light bending as it passes from one medium to another (e.g. from air into glass or the eye); this is how lenses focus light.",
        "Absorption — some surfaces take in light energy (used in phototherapy, where the skin absorbs blue light).",
        "Light travels in straight lines, so a shadow forms when an object blocks it."
      ] },
      { h: "Lenses", p: "A lens is a shaped piece of glass that bends (refracts) light to form an image. A convex (converging) lens brings light rays together and can magnify — used in the eye, in spectacles for long sight, and in the microscope. A concave (diverging) lens spreads rays apart and is used for short sight. The amount a lens bends light is its power." },
      { h: "The eye and vision", p: "Light enters the eye through the cornea and lens, which focus it onto the retina at the back. The retina turns light into nerve signals sent to the brain. Good light is essential for the midwife to assess skin colour (e.g. jaundice or cyanosis in the newborn), examine the perineum, and read instruments accurately — best judged in natural daylight." },
      { h: "The light microscope", p: "The light microscope uses lenses and a light source to magnify tiny objects such as bacteria and blood cells. Light passes through a thin specimen on a slide, then through the objective and eyepiece lenses, which together magnify the image. It is the basic tool for examining specimens — blood films, urine, and stained smears — in the laboratory the midwife sends samples to.", figure: {
        caption: "Light microscope: light passes through the specimen and is magnified by two lenses.",
        svg: '<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Light path through a microscope."><circle cx="210" cy="170" r="14" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="245" y="174" font-family="sans-serif" font-size="10" fill="#831843">light source</text><rect x="160" y="120" width="100" height="14" fill="#FDF2F8" stroke="#831843" stroke-width="1.5"/><text x="265" y="131" font-family="sans-serif" font-size="10" fill="#831843">specimen (slide)</text><rect x="185" y="80" width="50" height="22" rx="5" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="280" y="95" font-family="sans-serif" font-size="10" fill="#831843">objective lens</text><rect x="190" y="35" width="40" height="22" rx="5" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="275" y="50" font-family="sans-serif" font-size="10" fill="#831843">eyepiece lens</text><line x1="210" y1="156" x2="210" y2="58" stroke="#7C2D12" stroke-width="2" stroke-dasharray="4 3"/><text x="210" y="20" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">to the eye</text></svg>'
      } },
      { h: "Clinical uses of light — phototherapy", p: "Phototherapy uses blue light to treat jaundice in the newborn. Jaundice is caused by bilirubin (a yellow pigment); blue light changes the bilirubin in the skin into a form the baby can excrete easily. During phototherapy the baby's eyes are protected, fluids and temperature are watched, and the response is monitored — a clear example of light energy used in care." },
      { h: "Application in midwifery", p: "Light underlies seeing and assessing the woman and baby (skin colour, jaundice, cyanosis), the laboratory microscopy that identifies infection, and the phototherapy that treats newborn jaundice. Good, preferably natural, lighting improves the accuracy of clinical observation, and understanding lenses helps the midwife use a microscope and explain vision aids." },
      { h: "Roles & key terms", list: [
        "Reflection and refraction — bouncing and bending of light.",
        "Convex and concave lens — converging and diverging lenses.",
        "Retina — light-sensitive layer of the eye.",
        "Microscope — magnifies tiny specimens using lenses.",
        "Phototherapy — blue-light treatment of newborn jaundice."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Explain reflection and refraction of light with an example of each.",
      "Differentiate between a convex and a concave lens and give a use of each.",
      "Describe how a light microscope magnifies a specimen.",
      "Explain how phototherapy treats jaundice in the newborn.",
      "Why is good lighting important when assessing a newborn baby?"
    ],
    assessment: [
      { type: "mcq", q: "The bending of light as it passes from one medium to another is called:", options: ["Reflection", "Refraction", "Absorption", "Diffraction only"], answer: 1, rationale: "Refraction is the bending of light when it changes medium; it allows lenses to focus." },
      { type: "mcq", q: "A lens that converges light rays and can magnify is a:", options: ["Concave lens", "Convex lens", "Plane mirror", "Prism only"], answer: 1, rationale: "A convex (converging) lens brings rays together and magnifies." },
      { type: "mcq", q: "Light bouncing off a mirror or examination lamp is an example of:", options: ["Refraction", "Reflection", "Absorption", "Conduction"], answer: 1, rationale: "Reflection is light bouncing off a surface." },
      { type: "mcq", q: "The light-sensitive layer at the back of the eye is the:", options: ["Cornea", "Lens", "Retina", "Iris"], answer: 2, rationale: "The retina converts light into nerve signals sent to the brain." },
      { type: "mcq", q: "A light microscope magnifies an image using its light source and:", options: ["Mirrors only", "Lenses (objective and eyepiece)", "A battery", "Sound waves"], answer: 1, rationale: "The objective and eyepiece lenses together magnify the specimen." },
      { type: "mcq", q: "Phototherapy for newborn jaundice uses:", options: ["Red light", "Blue light", "Ultraviolet sunlight directly", "Infrared heat lamps"], answer: 1, rationale: "Blue light converts skin bilirubin into a form that is easily excreted." },
      { type: "mcq", q: "The yellow pigment responsible for jaundice is:", options: ["Haemoglobin", "Bilirubin", "Melanin", "Keratin"], answer: 1, rationale: "Bilirubin accumulation causes the yellow colour of jaundice." },
      { type: "mcq", q: "During phototherapy, which part of the baby must be specially protected?", options: ["The feet", "The eyes", "The hair", "The nails"], answer: 1, rationale: "The baby's eyes are shielded from the bright light during phototherapy." },
      { type: "mcq", q: "Light normally travels in:", options: ["Curved paths", "Straight lines", "Circles", "Zig-zags by itself"], answer: 1, rationale: "Light travels in straight lines, which is why shadows form." },
      { type: "mcq", q: "Best assessment of a newborn's skin colour for jaundice is made in:", options: ["Dim red light", "Natural daylight", "Darkness", "Blue phototherapy light"], answer: 1, rationale: "Natural daylight gives the truest view of skin colour for detecting jaundice." }
      , { type: "fill", q: "The treatment of newborn jaundice using blue light is called ____.", accept: ["phototherapy"], rationale: "Phototherapy uses light to convert bilirubin for excretion." }
      , { type: "fill", q: "A ____ lens converges light rays and is used in the eye and the microscope.", accept: ["convex", "converging"], rationale: "A convex (converging) lens brings light rays to a focus." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "bsc-15-sound-electricity",
    unit: "Unit 3 · Physics for the Midwife",
    title: "Sound & Electricity in Maternity Care",
    readMinutes: 16,
    summary: "What sound is and how it is used to hear the fetal heart, the basics of electricity and its safe use, and the electrical principles behind equipment such as the CTG and resuscitation devices.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — sound", p: "Sound is a form of energy that travels as vibrations (waves) through a medium such as air, fluid or tissue. It needs a medium and cannot travel through a vacuum. In midwifery, sound is used to listen to the body — the fetal heart, breath sounds and the heart — and ultrasound (very high-frequency sound) is used for imaging." },
      { h: "Properties of sound", list: [
        "Frequency (pitch) — number of vibrations per second, measured in hertz (Hz); high frequency = high pitch.",
        "Amplitude (loudness) — the size of the vibration; larger = louder.",
        "Sound travels well through fluid and soft tissue — useful in pregnancy where the fetus lies in fluid.",
        "Audible sound for humans is roughly 20 Hz to 20,000 Hz; ultrasound is above this range."
      ] },
      { h: "Listening to the fetal heart", p: "The midwife listens to (auscultates) the fetal heart to confirm fetal wellbeing. A Pinard fetal stethoscope conducts the sound directly to the ear, while a hand-held Doppler uses ultrasound to detect the heartbeat and make it audible. The normal fetal heart rate is about 110-160 beats per minute. Listening regularly in labour is a key safety check." },
      { h: "Concept — electricity", p: "Electricity is a flow of electric charge (current). A complete path (circuit) is needed for current to flow, driven by a voltage (the 'push') and opposed by resistance. Much maternity equipment runs on electricity — the cardiotocograph (CTG), suction, infusion pumps, incubators, phototherapy units and resuscitation equipment.", figure: {
        caption: "A simple electric circuit: a source drives current around a complete loop.",
        svg: '<svg viewBox="0 0 360 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple electric circuit with source and device."><rect x="40" y="40" width="280" height="100" rx="8" fill="none" stroke="#831843" stroke-width="3"/><rect x="20" y="75" width="40" height="30" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="40" y="125" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">source</text><rect x="300" y="75" width="40" height="30" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="320" y="125" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">device</text><text x="180" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Complete circuit needed for current to flow</text></svg>'
      } },
      { h: "Electrical safety in maternity care", list: [
        "Check equipment is in good order with no frayed wires before use.",
        "Keep electrical equipment away from water and fluids; have dry hands.",
        "Ensure equipment is properly earthed and serviced; do not overload sockets.",
        "Report and remove faulty equipment; know where the emergency power and resuscitation equipment are.",
        "Electric shock can stop the heart and breathing, so safe practice protects mother, baby and staff."
      ] },
      { h: "Application in midwifery", p: "Sound lets the midwife hear the fetal heart with a Pinard or Doppler and assess the mother's chest and heart. Electricity powers the monitoring and life-saving equipment used in labour and the newborn unit. Knowing the basics of both allows safe, confident use of devices such as the CTG, suction and incubators, and safe handling of electrical equipment around fluids." },
      { h: "Roles & key terms", list: [
        "Frequency (Hz) and amplitude — pitch and loudness of sound.",
        "Auscultation — listening to body sounds.",
        "Pinard stethoscope and Doppler — devices to hear the fetal heart.",
        "Current, voltage, resistance, circuit — basics of electricity.",
        "Earthing — safety connection that prevents electric shock."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Explain what sound is and the properties of frequency and amplitude.",
      "Describe two methods of listening to the fetal heart and state the normal fetal heart rate.",
      "Define current, voltage and resistance and explain what a circuit is.",
      "List five rules for the safe use of electrical equipment in maternity care.",
      "Why can sound travel well to detect the fetal heart through the pregnant abdomen?"
    ],
    assessment: [
      { type: "mcq", q: "Sound is a form of energy that travels as:", options: ["Vibrations (waves) through a medium", "Heat rays", "Light waves in a vacuum", "Electric current"], answer: 0, rationale: "Sound travels as vibrations through a medium and cannot pass through a vacuum." },
      { type: "mcq", q: "The pitch of a sound is determined by its:", options: ["Amplitude", "Frequency", "Colour", "Temperature"], answer: 1, rationale: "Frequency (Hz) determines pitch; amplitude determines loudness." },
      { type: "mcq", q: "The normal fetal heart rate is approximately:", options: ["60-80 beats/min", "40-60 beats/min", "110-160 beats/min", "180-220 beats/min"], answer: 2, rationale: "The normal fetal heart rate is about 110-160 beats per minute." },
      { type: "mcq", q: "A hand-held device that uses ultrasound to make the fetal heartbeat audible is a:", options: ["Pinard stethoscope", "Doppler", "Sphygmomanometer", "Thermometer"], answer: 1, rationale: "The Doppler uses ultrasound to detect and sound the fetal heartbeat." },
      { type: "mcq", q: "Listening to body sounds such as the fetal heart is called:", options: ["Palpation", "Percussion", "Auscultation", "Inspection"], answer: 2, rationale: "Auscultation is listening to internal body sounds." },
      { type: "mcq", q: "For an electric current to flow there must be a complete:", options: ["Vacuum", "Circuit", "Battery only", "Magnet"], answer: 1, rationale: "Current flows only around a complete circuit." },
      { type: "mcq", q: "The 'push' that drives an electric current around a circuit is the:", options: ["Voltage", "Resistance", "Frequency", "Amplitude"], answer: 0, rationale: "Voltage is the driving force (electromotive force) that pushes current." },
      { type: "mcq", q: "Which is an important electrical safety measure in maternity care?", options: ["Use frayed wires if working", "Handle plugs with wet hands", "Keep equipment away from water", "Overload sockets"], answer: 2, rationale: "Keeping electrical equipment away from water prevents short circuits and shock." },
      { type: "mcq", q: "Sound that is above the range of human hearing and used for imaging is called:", options: ["Infrasound", "Echo only", "Ultrasound", "Radio wave"], answer: 2, rationale: "Ultrasound is sound above about 20,000 Hz, used in obstetric imaging." },
      { type: "mcq", q: "A safety connection that helps prevent electric shock from equipment is:", options: ["Insulation removal", "Higher voltage", "Removing the fuse", "Earthing"], answer: 3, rationale: "Earthing safely carries away stray current and helps prevent shock." }
      , { type: "fill", q: "The simple fetal stethoscope held against the abdomen and ear to hear the fetal heart is the ____ stethoscope.", accept: ["pinard"], rationale: "The Pinard stethoscope conducts the fetal heart sound directly to the ear." }
      , { type: "fill", q: "Listening to internal body sounds such as the fetal heart is called ____.", accept: ["auscultation"], rationale: "Auscultation is the act of listening to body sounds." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "bsc-16-radiation-ultrasound",
    unit: "Unit 3 · Physics for the Midwife",
    title: "Radiation & Ultrasound in Obstetrics",
    readMinutes: 17,
    summary: "What radiation is, the difference between ionising and non-ionising radiation, the principles and uses of obstetric ultrasound, radiation safety in pregnancy, and the midwife's role in imaging.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept — what radiation is", p: "Radiation is energy that travels through space as waves or particles. Some types are part of everyday imaging and treatment. For the midwife the key distinction is between ionising radiation (such as X-rays), which can damage cells and the fetus, and non-ionising radiation (such as ultrasound), which is considered safe in pregnancy when used appropriately." },
      { h: "Ionising versus non-ionising radiation", list: [
        "Ionising radiation — high energy that can knock electrons off atoms and damage DNA; includes X-rays, CT scans and gamma rays. It can harm the developing fetus.",
        "Non-ionising radiation — lower energy that does not ionise atoms; includes ultrasound, visible light, infrared and radio waves; ultrasound is used safely in pregnancy.",
        "The fetus is most vulnerable to ionising radiation in early pregnancy when organs are forming.",
        "Because of this risk, ultrasound rather than X-ray is the routine imaging method in pregnancy."
      ] },
      { h: "Principles of ultrasound", p: "Ultrasound uses very high-frequency sound waves (above the range of human hearing) sent into the body by a probe (transducer). The waves bounce back (echo) from tissues of different density, and a computer turns these echoes into an image on a screen. Because it uses sound, not ionising radiation, it is the safe imaging tool of choice in pregnancy.", figure: {
        caption: "Ultrasound: the probe sends sound waves that echo back to build an image.",
        svg: '<svg viewBox="0 0 480 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ultrasound probe sending and receiving echoes."><rect x="20" y="60" width="70" height="40" rx="6" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="55" y="84" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#831843">Probe</text><path d="M90 75 H260" stroke="#BE185D" stroke-width="2"/><text x="175" y="68" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#BE185D">sound wave &#8594;</text><path d="M260 95 H90" stroke="#7C2D12" stroke-width="2" stroke-dasharray="5 3"/><text x="175" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">&#8592; echo back</text><ellipse cx="300" cy="80" rx="35" ry="45" fill="#FDF2F8" stroke="#831843" stroke-width="2"/><text x="300" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#831843">tissue</text><rect x="370" y="50" width="90" height="60" rx="6" fill="#FCE7F3" stroke="#BE185D" stroke-width="2"/><text x="415" y="84" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#831843">image</text></svg>'
      } },
      { h: "Uses of ultrasound in obstetrics", list: [
        "Confirming pregnancy and the number of fetuses (e.g. twins).",
        "Dating the pregnancy and assessing fetal growth.",
        "Checking the position of the placenta (e.g. detecting placenta praevia) and the amount of amniotic fluid.",
        "Detecting some congenital abnormalities at the anomaly scan.",
        "Confirming fetal presentation, position and viability, and guiding some procedures."
      ] },
      { h: "Radiation safety in pregnancy", list: [
        "Avoid X-rays and CT scans in pregnancy unless essential, especially in the first trimester.",
        "If imaging with ionising radiation is unavoidable, the abdomen is shielded and the lowest dose used.",
        "Ultrasound is preferred because it uses non-ionising sound waves.",
        "Even with ultrasound, scans are done for a clinical reason and kept as short as needed (the ALARA principle — as low as reasonably achievable).",
        "Staff who work with X-rays use shielding, distance and monitoring to limit their own exposure."
      ] },
      { h: "The midwife's role in imaging", p: "The midwife prepares and supports the woman for ultrasound, explains the purpose simply, helps interpret findings with the team, and ensures pregnant women are not exposed to unnecessary ionising radiation. She advises any woman who might be pregnant to tell radiology before an X-ray, and reassures families that routine obstetric ultrasound is safe." },
      { h: "Roles & key terms", list: [
        "Ionising vs non-ionising radiation — harmful vs safer energy.",
        "X-ray — ionising radiation, avoided in pregnancy when possible.",
        "Ultrasound / transducer — safe high-frequency sound imaging.",
        "Anomaly scan — ultrasound to check fetal structure.",
        "ALARA — keep exposure as low as reasonably achievable."
      ] }
    ],
    references: REF_BSC,
    examQuestions: [
      "Differentiate between ionising and non-ionising radiation with examples.",
      "Explain the principle of ultrasound imaging.",
      "List five uses of ultrasound in obstetrics.",
      "Discuss radiation safety in pregnancy and why ultrasound is preferred to X-ray.",
      "Describe the midwife's role when a woman is having an ultrasound scan."
    ],
    assessment: [
      { type: "mcq", q: "Which type of radiation can damage DNA and harm the fetus?", options: ["Ultrasound", "Visible light", "Ionising radiation (X-rays)", "Radio waves"], answer: 2, rationale: "Ionising radiation such as X-rays can damage cells and DNA, harming the fetus." },
      { type: "mcq", q: "Obstetric ultrasound is considered safe in pregnancy because it uses:", options: ["X-rays", "Gamma rays", "Non-ionising sound waves", "Radioactive dye"], answer: 2, rationale: "Ultrasound uses non-ionising high-frequency sound, not ionising radiation." },
      { type: "mcq", q: "The part of an ultrasound machine that sends and receives sound waves is the:", options: ["Monitor", "Transducer (probe)", "Keyboard", "Printer"], answer: 1, rationale: "The transducer (probe) emits sound waves and detects the returning echoes." },
      { type: "mcq", q: "An ultrasound image is built from sound waves that:", options: ["Are absorbed completely", "Echo back from tissues", "Turn into X-rays", "Heat the tissue"], answer: 1, rationale: "Echoes reflected from tissues of different density are converted into an image." },
      { type: "mcq", q: "Which is a use of ultrasound in obstetrics?", options: ["Treating jaundice", "Checking placental position", "Measuring blood pressure", "Sterilising instruments"], answer: 1, rationale: "Ultrasound can locate the placenta and detect placenta praevia, among many uses." },
      { type: "mcq", q: "The fetus is MOST vulnerable to ionising radiation during:", options: ["Early pregnancy (organ formation)", "Only at term", "Only during labour", "After birth"], answer: 0, rationale: "Organogenesis in early pregnancy is the period of greatest radiation sensitivity." },
      { type: "mcq", q: "The principle of keeping radiation exposure 'as low as reasonably achievable' is abbreviated:", options: ["APGAR", "ALARA", "BMI", "EDD"], answer: 1, rationale: "ALARA means keeping exposure as low as reasonably achievable." },
      { type: "mcq", q: "Which imaging method is preferred in pregnancy?", options: ["X-ray", "CT scan", "Ultrasound", "Bone scan"], answer: 2, rationale: "Ultrasound is preferred because it avoids ionising radiation." },
      { type: "mcq", q: "An ultrasound scan that checks the structure of the fetus for abnormalities is the:", options: ["Dating scan only", "Anomaly scan", "Doppler of the leg", "Chest X-ray"], answer: 1, rationale: "The anomaly scan examines fetal structures for congenital abnormalities." },
      { type: "mcq", q: "A woman who might be pregnant should, before an X-ray, always:", options: ["Say nothing", "Inform the radiology staff", "Take a painkiller", "Drink more water"], answer: 1, rationale: "Telling staff allows the X-ray to be avoided or the fetus shielded." }
      , { type: "fill", q: "Radiation that does NOT knock electrons off atoms, such as ultrasound, is called ____ radiation.", accept: ["non-ionising", "non ionising", "nonionising"], rationale: "Non-ionising radiation lacks the energy to ionise atoms and is safer in pregnancy." }
      , { type: "fill", q: "The probe of an ultrasound machine that emits and detects sound waves is called the ____.", accept: ["transducer", "probe"], rationale: "The transducer (probe) both sends and receives the ultrasound waves." }
    ]
  }
];
