/* ============================================================
   B.Sc. in Nursing (2018) · Year 1 · B134 Paper-II Microbiology
   — 14 topics. Degree-level adaptation of the diploma
   Microbiology & Parasitology base, deepened with mechanism,
   immunology, laboratory diagnosis and antimicrobial resistance.
   Aligned to the BNMC 4-year B.Sc. syllabus (B134-II).
   Grounded in standard texts:
     • Ananthanarayan R, Paniker CKJ. Textbook of Microbiology.
     • Jawetz, Melnick & Adelberg's Medical Microbiology.
     • Tortora GJ, Funke BR, Case CL. Microbiology: An Introduction.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_MIB = [
  "Ananthanarayan R, Paniker CKJ. Textbook of Microbiology. Universities Press.",
  "Jawetz, Melnick & Adelberg's Medical Microbiology. McGraw-Hill.",
  "Tortora GJ, Funke BR, Case CL. Microbiology: An Introduction. Pearson."
];

window.Academic.topics["bsc-nursing/microbiology"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "mib-01-introduction",
    unit: "Unit 1 · Foundations of Microbiology",
    title: "Introduction to Microbiology & Its Relevance to Nursing",
    readMinutes: 17,
    summary: "The scope, branches and historical development of microbiology; the germ theory and Koch's postulates; classification of the microbial world; normal flora versus pathogens; emerging infections; and the scientific relevance of microbiology to professional nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and scope", p: "Microbiology is the science of micro-organisms — living forms too small to be seen with the unaided eye, generally below about 0.1 mm. It embraces bacteria, viruses, fungi, protozoa, helminths (studied under medical parasitology) and prions. Medical microbiology studies the micro-organisms that cause human disease, their mechanisms of pathogenesis, host defences against them, laboratory diagnosis, treatment and prevention. For the nurse it supplies the scientific rationale for asepsis, sterilization, immunization and rational antimicrobial use." },
      { h: "Branches of microbiology", list: [
        "Bacteriology — study of bacteria and bacterial disease.",
        "Virology — study of viruses and viral disease.",
        "Mycology — study of fungi and mycoses.",
        "Parasitology — study of protozoa, helminths and arthropod vectors.",
        "Immunology — study of host defence mechanisms and their disorders.",
        "Microbial genetics & genomics — inheritance, mutation and genetic engineering in microbes.",
        "Chemotherapy — the use of antimicrobial drugs against microbes.",
        "Epidemiology — distribution, determinants and control of infection in populations."
      ] },
      { h: "Historical development", p: "Antony van Leeuwenhoek (1670s) first observed 'animalcules' with simple lenses. Louis Pasteur disproved spontaneous generation, developed pasteurization and the earliest attenuated vaccines (anthrax, rabies). Robert Koch introduced solid culture media, pure-culture technique and staining, and identified the causative organisms of anthrax, tuberculosis and cholera. Joseph Lister founded antiseptic surgery; Edward Jenner had earlier pioneered smallpox vaccination; Fleming discovered penicillin (1928), opening the antibiotic era." },
      { h: "Germ theory and Koch's postulates", p: "The germ theory holds that specific micro-organisms cause specific communicable diseases. Koch's postulates are the classical criteria for proving causation.", figure: {
        caption: "Koch's postulates — the four criteria for proving a microbe causes a disease.",
        svg: '<svg viewBox="0 0 640 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Koch postulates: found in diseased hosts, isolated in pure culture, reproduces disease, re-isolated."><defs><marker id="mibA1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Organism found in all cases","Isolated in pure culture","Reproduces disease in host","Re-isolated from that host"].map(function(t,i){var x=6+i*158;return "<rect x=\'"+x+"\' y=\'24\' width=\'146\' height=\'44\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+73)+"\' y=\'50\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'10.5\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<3?"<line x1=\'"+(x+146)+"\' y1=\'46\' x2=\'"+(x+158)+"\' y2=\'46\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA1)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "Classification of the microbial world", p: "Living things are grouped into three domains — Bacteria and Archaea (both prokaryotic) and Eukarya (fungi, protozoa, helminths, plants, animals). Prokaryotes lack a membrane-bound nucleus and organelles; eukaryotes possess both. Viruses are acellular and are not placed in these domains. This classification explains why antibiotics selectively harm bacteria (prokaryotic targets) but not human cells or viruses." },
      { h: "Normal flora and pathogens", p: "The human body carries a vast resident microbiota (normal flora) on skin and mucosae and in the gut, which aids digestion, synthesises vitamin K and B-group vitamins, and resists colonisation by pathogens (colonisation resistance). A pathogen is a microbe capable of causing disease; an opportunistic pathogen causes disease only when host defences fall or normal flora are displaced (e.g. after broad-spectrum antibiotics). Understanding this balance underpins infection control." },
      { h: "Emerging and re-emerging infections", p: "New and resurgent infectious threats — HIV/AIDS, Ebola and other viral haemorrhagic fevers, novel influenza and coronaviruses, and multidrug-resistant tuberculosis — arise from factors such as urbanisation, travel, zoonotic spillover, ecological change and antimicrobial misuse. In Bangladesh, tuberculosis, cholera, typhoid, hepatitis, dengue and kala-azar remain of major public-health importance." },
      { h: "Relevance to nursing practice", p: "Microbiology gives nurses the evidence base for hand hygiene, standard and transmission-based precautions, sterilization and disinfection, safe specimen collection, immunization, and antimicrobial stewardship. Every action that breaks the chain of infection rests on microbiological understanding, making this subject foundational to safe patient care." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define microbiology and describe its main branches.",
      "Outline the contributions of Pasteur and Koch to microbiology.",
      "State and explain Koch's postulates.",
      "Differentiate normal flora and pathogens, and explain opportunistic infection.",
      "Discuss the relevance of microbiology to professional nursing practice."
    ],
    assessment: [
      { type: "mcq", q: "Medical microbiology is best defined as the study of:", options: ["All plants and animals", "Micro-organisms that cause human disease and host defences against them", "Only bacteria", "Chemical reactions in the body"], answer: 1, rationale: "Medical microbiology studies disease-causing microbes, pathogenesis, immunity, diagnosis and control." },
      { type: "mcq", q: "The scientist who introduced solid culture media, pure-culture technique and identified the tubercle bacillus was:", options: ["Louis Pasteur", "Robert Koch", "Edward Jenner", "Joseph Lister"], answer: 1, rationale: "Robert Koch pioneered solid media, pure cultures and identified M. tuberculosis and other agents." },
      { type: "mcq", q: "Which of Koch's postulates requires growing the organism away from the host?", options: ["The organism reproduces disease when inoculated", "The organism is isolated in pure culture", "The organism is found in all cases", "The organism is re-isolated"], answer: 1, rationale: "Isolation in pure culture removes the organism from host tissue to prove it is a distinct agent." },
      { type: "mcq", q: "Bacteria and Archaea are grouped together because both are:", options: ["Eukaryotic", "Acellular", "Prokaryotic (lack a true nucleus)", "Viruses"], answer: 2, rationale: "Both domains are prokaryotic, lacking a membrane-bound nucleus and organelles." },
      { type: "mcq", q: "Antibiotics can selectively harm bacteria but not human cells mainly because bacteria are:", options: ["Larger", "Prokaryotic with different targets", "Non-living", "Eukaryotic"], answer: 1, rationale: "Prokaryotic structures (e.g. peptidoglycan wall, 70S ribosomes) differ from human eukaryotic cells, allowing selective toxicity." },
      { type: "mcq", q: "Colonisation resistance provided by normal flora refers to their ability to:", options: ["Cause disease", "Prevent pathogens from establishing", "Produce antibiotics for the host", "Digest human cells"], answer: 1, rationale: "Normal flora compete with and inhibit incoming pathogens, resisting their colonisation." },
      { type: "mcq", q: "An opportunistic pathogen typically causes disease when:", options: ["The host is fully healthy", "Host defences fall or normal flora are displaced", "It is heat-killed", "It is in pure culture"], answer: 1, rationale: "Opportunists exploit weakened immunity or disturbed flora (e.g. after antibiotics)." },
      { type: "mcq", q: "Which is classified as an EMERGING/re-emerging infection?", options: ["Fracture", "Diabetes", "HIV/AIDS and Ebola", "Anaemia from bleeding"], answer: 2, rationale: "HIV/AIDS and Ebola are classic emerging infectious diseases." },
      { type: "mcq", q: "Viruses are NOT placed in the three-domain classification because they are:", options: ["Prokaryotic", "Eukaryotic", "Acellular (not cells)", "Fungi"], answer: 2, rationale: "Viruses are acellular obligate parasites and fall outside the cellular domains." },
      { type: "mcq", q: "The single most important nursing action grounded in microbiology to prevent cross-infection is:", options: ["Hand hygiene", "Taking blood pressure", "Charting fluids", "Bed making"], answer: 0, rationale: "Hand hygiene interrupts contact transmission and is the cornerstone of infection prevention." },
      { type: "fill", q: "The theory stating that specific microbes cause specific diseases is the ______ theory of disease.", accept: ["germ"], rationale: "The germ theory, established by Pasteur and Koch, links specific microbes to specific diseases." },
      { type: "fill", q: "Micro-organisms lacking a membrane-bound nucleus are called ______.", accept: ["prokaryotes", "prokaryote", "prokaryotic"], rationale: "Prokaryotes (bacteria, archaea) lack a true nucleus and membrane-bound organelles." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "mib-02-microscopy-staining",
    unit: "Unit 1 · Foundations of Microbiology",
    title: "Microscopy, Staining & Structure of the Microbial Cell",
    readMinutes: 17,
    summary: "Principles of light and electron microscopy, magnification and resolution, the physics of the oil-immersion lens, simple and differential staining (Gram and Ziehl-Neelsen) with their mechanisms, and the comparative structure of prokaryotic and eukaryotic microbial cells.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why microscopy is essential", p: "Most micro-organisms lie below the resolving power of the human eye and must be magnified to reveal size, shape, arrangement and internal structure. Microscopy remains a rapid, low-cost first step in diagnosing infection — for example demonstrating acid-fast bacilli in sputum or malarial parasites in a blood film — and is central to laboratory identification worldwide." },
      { h: "Magnification versus resolution", p: "Magnification is the degree of apparent enlargement (eyepiece power multiplied by objective power; e.g. 10x eyepiece x 100x objective = 1000x). Resolution (resolving power) is the ability to distinguish two adjacent points as separate and determines the true detail seen. Resolution improves with shorter wavelength and higher numerical aperture; empty (excess) magnification without adequate resolution merely produces a larger but blurred image." },
      { h: "The compound light microscope and oil immersion", p: "The compound light microscope passes visible light through a thin specimen, condenser and two lens systems (objective and eyepiece). Its limit of resolution is about 0.2 micrometre, set by the wavelength of light. The 100x oil-immersion objective uses immersion oil, whose refractive index matches glass, to prevent light rays bending away and being lost — this raises the numerical aperture and gives the resolution needed to see bacteria clearly." },
      { h: "Other forms of microscopy", list: [
        "Dark-field — bright organisms on a dark background; used for thin spirochaetes such as Treponema.",
        "Phase-contrast — visualises living, unstained cells by converting phase differences into contrast.",
        "Fluorescence — uses fluorochromes/antibodies (e.g. auramine for TB, immunofluorescence).",
        "Electron microscopy (TEM/SEM) — uses an electron beam; resolution to a fraction of a nanometre, enabling visualisation of viruses and fine cell ultrastructure."
      ] },
      { h: "Staining: principles", p: "Because microbes are nearly colourless and low in contrast, they are stained to be seen and classified. A smear is spread, air-dried and heat-fixed (which kills the organisms and adheres them to the slide) before dye is applied. Simple stains (single dye, e.g. methylene blue) show morphology; differential stains use more than one reagent to separate microbes into groups." },
      { h: "The Gram stain — steps and mechanism", p: "The Gram stain is the most important bacteriological stain. Crystal violet (primary) is fixed by Gram's iodine (mordant) as a large dye-iodine complex. Alcohol/acetone (decolouriser) dehydrates the thick, multilayered peptidoglycan of Gram-positive walls, trapping the complex so they stay purple; the thin peptidoglycan and outer lipid membrane of Gram-negative bacteria allow the complex to wash out, so they take the safranin counterstain and appear pink/red. Result guides identification and empirical antibiotic choice.", figure: {
        caption: "Gram stain sequence: crystal violet, iodine mordant, decolourise, safranin counterstain.",
        svg: '<svg viewBox="0 0 640 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gram stain steps"><defs><marker id="mibA2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Crystal violet","Iodine (mordant)","Alcohol decolourise","Safranin counterstain"].map(function(t,i){var x=6+i*158;return "<rect x=\'"+x+"\' y=\'22\' width=\'146\' height=\'40\' rx=\'8\' fill=\'#F0FDF4\' stroke=\'#22C55E\'/><text x=\'"+(x+73)+"\' y=\'46\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'10.5\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<3?"<line x1=\'"+(x+146)+"\' y1=\'42\' x2=\'"+(x+158)+"\' y2=\'42\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA2)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "The acid-fast (Ziehl-Neelsen) stain", p: "Mycobacteria have a waxy, mycolic-acid-rich wall that resists ordinary staining. In the Ziehl-Neelsen method carbol fuchsin is driven in with heat, then the smear resists decolourisation by acid-alcohol (hence 'acid-fast') and retains the red stain, while other organisms are decolourised and counterstained blue by methylene blue. Demonstrating acid-fast bacilli in sputum is a key, low-cost diagnostic step for tuberculosis in Bangladesh." },
      { h: "Comparative cell structure", p: "Prokaryotic (bacterial) cells have a peptidoglycan cell wall, a plasma membrane, 70S ribosomes and a single circular chromosome in a nucleoid with no nuclear membrane. Eukaryotic microbial cells (fungi, protozoa) have a membrane-bound nucleus, 80S ribosomes and organelles (mitochondria, endoplasmic reticulum); fungal walls contain chitin. These structural differences are the basis of selective antimicrobial action and of staining behaviour, which the nurse encounters in laboratory reports." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Differentiate magnification and resolution, and explain the role of the oil-immersion lens.",
      "List the different forms of microscopy and a use of each.",
      "Describe the steps and mechanism of the Gram stain.",
      "Explain the principle of the Ziehl-Neelsen stain and its clinical importance.",
      "Compare the structure of prokaryotic and eukaryotic microbial cells."
    ],
    assessment: [
      { type: "mcq", q: "The resolving power (resolution) of a microscope is best defined as the ability to:", options: ["Distinguish two close points as separate", "Enlarge an image", "Add colour", "Kill microbes"], answer: 0, rationale: "Resolution is the capacity to see two adjacent points as distinct; it determines true detail." },
      { type: "mcq", q: "Immersion oil is used with the 100x objective mainly to:", options: ["Colour the specimen", "Cool the lens", "Prevent light bending away and raise resolution", "Kill bacteria"], answer: 2, rationale: "Oil matches the refractive index of glass, increasing numerical aperture and resolution." },
      { type: "mcq", q: "The approximate limit of resolution of the light microscope is:", options: ["2 mm", "0.2 micrometre", "0.2 nanometre", "20 micrometre"], answer: 1, rationale: "Light microscopy resolves to about 0.2 micrometre, set by the wavelength of visible light." },
      { type: "mcq", q: "In the Gram stain, the reagent that acts as the mordant is:", options: ["Crystal violet", "Gram's iodine", "Alcohol", "Safranin"], answer: 1, rationale: "Iodine forms a large crystal-violet-iodine complex, fixing the dye within the cell." },
      { type: "mcq", q: "Gram-negative bacteria decolourise readily because their wall has:", options: ["Thick peptidoglycan", "No wall", "Mycolic acid", "Thin peptidoglycan plus an outer lipid membrane"], answer: 3, rationale: "Thin peptidoglycan and a lipid-rich outer membrane let the dye complex wash out during decolourisation." },
      { type: "mcq", q: "Acid-fastness of Mycobacterium is due to a wall rich in:", options: ["Mycolic acid (waxy lipids)", "Chitin", "Cellulose", "Peptidoglycan only"], answer: 0, rationale: "Mycolic acids make the wall waxy and resistant to acid-alcohol decolourisation." },
      { type: "mcq", q: "Dark-field microscopy is especially useful for viewing:", options: ["Thick Gram-positive rods", "Thin spirochaetes such as Treponema", "Fungal spores", "Malaria parasites"], answer: 1, rationale: "Dark-field shows thin, poorly staining spirochaetes as bright objects on a dark ground." },
      { type: "mcq", q: "The microscope able to visualise viruses is the:", options: ["Light microscope", "Dark-field microscope", "Electron microscope", "Hand lens"], answer: 2, rationale: "The electron microscope resolves to a fraction of a nanometre, revealing viruses and ultrastructure." },
      { type: "mcq", q: "Heat-fixing a smear before staining primarily serves to:", options: ["Magnify the cells", "Add colour", "Dissolve the wall", "Kill and adhere organisms to the slide"], answer: 3, rationale: "Heat fixation kills the microbes and attaches them so they are not washed off." },
      { type: "mcq", q: "Bacterial ribosomes differ from human ribosomes in being:", options: ["80S", "70S", "Absent", "Enclosed in a nucleus"], answer: 1, rationale: "Prokaryotes have 70S ribosomes; this difference allows selective antibiotic targeting." },
      { type: "fill", q: "The counterstain used in the Gram stain, giving Gram-negative bacteria a pink colour, is ______.", accept: ["safranin"], rationale: "Safranin counterstains decolourised Gram-negative cells pink/red." },
      { type: "fill", q: "Total magnification equals eyepiece power multiplied by ______ power.", accept: ["objective", "objective lens"], rationale: "Total magnification = eyepiece x objective (e.g. 10 x 100 = 1000x)." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "mib-03-bacteria",
    unit: "Unit 2 · The Microbial Agents",
    title: "Bacteria — Structure, Growth, Genetics & Common Pathogens",
    readMinutes: 19,
    summary: "Detailed bacterial anatomy and the functions of each component, classification by shape and Gram reaction, binary fission and the bacterial growth curve, requirements for growth, spores, genetic variation and the transfer of resistance, and the common bacterial pathogens of Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and general features", p: "Bacteria are unicellular prokaryotes lacking a membrane-bound nucleus. They range from about 0.2 to several micrometres, occur almost everywhere, and include commensals, opportunists and frank pathogens. Most bacterial infections are treatable with antibiotics, but their rapid multiplication and capacity for genetic change underlie both acute infection and the rise of resistance." },
      { h: "Structure and function of components", list: [
        "Cell wall — peptidoglycan layer giving shape and rigidity and determining the Gram reaction; the target of penicillins.",
        "Plasma membrane — selective barrier and site of energy generation (bacteria lack mitochondria).",
        "Cytoplasm with 70S ribosomes — site of protein synthesis; target of many antibiotics.",
        "Nucleoid — single circular chromosome with no nuclear membrane.",
        "Plasmids — small extra-chromosomal DNA circles that often carry resistance and virulence genes.",
        "Capsule/slime layer — polysaccharide coat that resists phagocytosis (a virulence factor).",
        "Flagella — provide motility; pili/fimbriae aid adhesion and (sex pilus) conjugation.",
        "Endospores — dormant, highly resistant forms produced by Bacillus and Clostridium."
      ] },
      { h: "Classification by shape and arrangement", p: "Bacteria are grouped morphologically as cocci (spherical), bacilli (rods) and spiral forms, with characteristic arrangements from the plane of division.", figure: {
        caption: "Bacterial morphology: cocci (pairs/chains/clusters), bacilli (rods) and spiral forms.",
        svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bacterial shapes"><circle cx="55" cy="42" r="11" fill="#15803D"/><circle cx="82" cy="42" r="11" fill="#15803D"/><circle cx="68" cy="66" r="11" fill="#15803D"/><text x="70" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Cocci</text><rect x="200" y="34" width="34" height="13" rx="6" fill="#22C55E"/><rect x="200" y="54" width="34" height="13" rx="6" fill="#22C55E"/><rect x="244" y="44" width="34" height="13" rx="6" fill="#22C55E"/><text x="238" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Bacilli</text><path d="M360,55 q12,-20 24,0 q12,20 24,0 q12,-20 24,0" fill="none" stroke="#7C2D12" stroke-width="6" stroke-linecap="round"/><text x="408" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Spiral</text></svg>'
      } },
      { h: "Reproduction and the growth curve", p: "Bacteria multiply asexually by binary fission; the generation (doubling) time may be as short as 20 minutes for E. coli. In a closed culture growth follows four phases: lag (adaptation, no increase), log/exponential (maximal division and greatest antibiotic susceptibility), stationary (nutrients fall, waste rises, spores may form) and decline/death. This kinetics explains how infection and food spoilage escalate quickly and why timely intervention matters." },
      { h: "Requirements and classification for growth", p: "Growth needs a source of carbon and energy, nitrogen, water and appropriate temperature and pH. By oxygen need, bacteria are obligate aerobes, obligate anaerobes (e.g. Clostridium tetani), facultative anaerobes (e.g. E. coli) or microaerophiles. By temperature they are psychrophiles, mesophiles (most human pathogens, optimum ~37 C) or thermophiles. Knowing these needs informs culture, storage and control." },
      { h: "Endospores and their significance", p: "When conditions become adverse, Bacillus and Clostridium species form endospores — metabolically dormant structures with a tough keratin-like coat and low water content that survive boiling, drying, many disinfectants and years of dormancy. They germinate when conditions improve. Spore resistance is why autoclaving (moist heat under pressure) is required for true sterilization and why tetanus follows contamination of wounds with soil spores." },
      { h: "Genetic variation and transfer of resistance", p: "Bacterial genetic change occurs by mutation and by horizontal gene transfer: transformation (uptake of free DNA), transduction (transfer by bacteriophage) and conjugation (plasmid transfer through a sex pilus). Resistance and virulence genes carried on plasmids and transposons can therefore spread rapidly between organisms, even across species — the genetic engine of antimicrobial resistance that nurses help contain through stewardship." },
      { h: "Common bacterial pathogens in Bangladesh", list: [
        "Diplococci — Streptococcus pneumoniae (pneumonia), Neisseria gonorrhoeae (gonorrhoea).",
        "Streptococci — pharyngitis, rheumatic fever, skin infection.",
        "Staphylococci — wound/skin infection, abscess, food poisoning; MRSA a resistance concern.",
        "Gram-positive spore-forming bacilli — Clostridium tetani (tetanus), C. botulinum (botulism), Bacillus anthracis (anthrax).",
        "Gram-negative bacilli — E. coli, Shigella (dysentery), Salmonella Typhi (typhoid).",
        "Acid-fast bacilli — Mycobacterium tuberculosis (TB), M. leprae (leprosy).",
        "Spiral forms — Vibrio cholerae (cholera), Treponema pallidum (syphilis), Helicobacter pylori (peptic ulcer)."
      ] },
      { h: "Nursing relevance", p: "Understanding bacterial structure and growth explains antibiotic targets and timing, why spore-formers demand autoclaving and immunization, and why rapid multiplication makes early aseptic wound care and prompt treatment critical. Awareness of plasmid-borne resistance reinforces the nurse's role in correct antibiotic administration and infection prevention." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Describe the structure of a bacterial cell and the function of each component.",
      "Classify bacteria by shape and arrangement with examples.",
      "Draw and describe the bacterial growth curve.",
      "What are endospores? Explain their structure and clinical significance.",
      "Explain the mechanisms of genetic transfer in bacteria and their link to antimicrobial resistance."
    ],
    assessment: [
      { type: "mcq", q: "The bacterial structure that determines the Gram reaction and is the target of penicillin is the:", options: ["Cell wall (peptidoglycan)", "Capsule", "Flagellum", "Nucleoid"], answer: 0, rationale: "The peptidoglycan cell wall governs Gram staining and is inhibited by penicillins." },
      { type: "mcq", q: "Small extra-chromosomal DNA circles that frequently carry resistance genes are:", options: ["Ribosomes", "Spores", "Plasmids", "Pili"], answer: 2, rationale: "Plasmids carry resistance and virulence genes and can transfer between bacteria." },
      { type: "mcq", q: "During which growth phase are bacteria dividing fastest and most susceptible to antibiotics?", options: ["Lag phase", "Log (exponential) phase", "Stationary phase", "Death phase"], answer: 1, rationale: "In log phase cells divide maximally, making cell-wall-active antibiotics most effective." },
      { type: "mcq", q: "Bacteria reproduce mainly by:", options: ["Meiosis", "Budding", "Binary fission", "Spore-only reproduction"], answer: 2, rationale: "Binary fission is asexual division of one cell into two identical cells." },
      { type: "mcq", q: "Transfer of bacterial DNA by a bacteriophage is called:", options: ["Transformation", "Transduction", "Conjugation", "Mutation"], answer: 1, rationale: "Transduction is gene transfer mediated by a bacteriophage." },
      { type: "mcq", q: "Clostridium tetani is an obligate anaerobe, meaning it:", options: ["Requires oxygen", "Grows equally with or without oxygen", "Needs high temperature", "Is killed by or cannot grow in oxygen"], answer: 3, rationale: "Obligate anaerobes cannot grow in the presence of oxygen." },
      { type: "mcq", q: "Endospores are important clinically because they:", options: ["Are easily killed by boiling", "Survive heat, drying and many disinfectants", "Cause allergy", "Are always harmless"], answer: 1, rationale: "Spores resist boiling and disinfectants, requiring autoclaving for sterilization (e.g. tetanus)." },
      { type: "mcq", q: "Typhoid fever is caused by the Gram-negative bacillus:", options: ["Salmonella Typhi", "Vibrio cholerae", "Staphylococcus aureus", "Treponema pallidum"], answer: 0, rationale: "Salmonella Typhi is the Gram-negative cause of typhoid fever." },
      { type: "mcq", q: "The polysaccharide capsule contributes to virulence by:", options: ["Aiding motility", "Producing energy", "Resisting phagocytosis", "Staining the cell"], answer: 2, rationale: "The capsule protects the bacterium from being engulfed by phagocytes." },
      { type: "mcq", q: "Plasmid transfer through direct cell-to-cell contact via a sex pilus is:", options: ["Transformation", "Transduction", "Conjugation", "Fission"], answer: 2, rationale: "Conjugation transfers plasmids between bacteria through a sex pilus." },
      { type: "fill", q: "Dormant, highly resistant survival forms produced by Bacillus and Clostridium are called ______.", accept: ["endospores", "spores", "endospore"], rationale: "Endospores survive extreme conditions and germinate when favourable." },
      { type: "fill", q: "The uptake of free (naked) DNA from the surroundings by a bacterium is called ______.", accept: ["transformation"], rationale: "Transformation is uptake of free environmental DNA." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "mib-04-viruses",
    unit: "Unit 2 · The Microbial Agents",
    title: "Viruses — Structure, Replication & Viral Diseases",
    readMinutes: 17,
    summary: "The nature and detailed structure of viruses, the stepwise replication cycle, key differences from bacteria, classification by genome and by tissue tropism, important viral diseases of Bangladesh including HIV/AIDS, antiviral principles and prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nature of viruses", p: "Viruses are the smallest infectious agents (about 20-300 nanometres), visible only by electron microscope. They are acellular and are obligate intracellular parasites: outside a host cell they are inert particles (virions). A virus contains a single type of nucleic acid — DNA or RNA, never both — so viruses are classified as DNA or RNA viruses." },
      { h: "Detailed structure", p: "A complete virion consists of a nucleic-acid genome (the core) enclosed in a protein coat, the capsid, built of repeating units called capsomeres; genome plus capsid is the nucleocapsid. Capsid symmetry may be icosahedral or helical. Some viruses have an outer lipid envelope derived from host membrane, bearing glycoprotein spikes used for attachment; enveloped viruses are more fragile and susceptible to lipid solvents and drying, while non-enveloped (naked) viruses are hardier in the environment." },
      { h: "Steps of viral replication", p: "Viral multiplication follows an ordered cycle within a host cell.", figure: {
        caption: "Viral replication cycle: attachment, penetration, uncoating, synthesis, assembly, release.",
        svg: '<svg viewBox="0 0 660 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Viral replication steps"><defs><marker id="mibA4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Attachment","Penetration","Uncoating","Synthesis","Assembly","Release"].map(function(t,i){var x=6+i*108;return "<rect x=\'"+x+"\' y=\'24\' width=\'96\' height=\'40\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+48)+"\' y=\'48\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'10\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<5?"<line x1=\'"+(x+96)+"\' y1=\'44\' x2=\'"+(x+108)+"\' y2=\'44\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA4)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "The replication cycle explained", p: "In attachment the virion binds specific receptors on the host cell, which determines tropism. Penetration follows (by fusion or endocytosis); uncoating releases the genome; synthesis uses the host's machinery, ribosomes and energy to make viral nucleic acid and proteins; new particles are assembled; and progeny are released by lysis (naked viruses) or budding (enveloped viruses), often over many cycles. Because viruses commandeer host processes, selective antiviral drugs are harder to design than antibiotics." },
      { h: "Viruses versus bacteria", p: "Viruses are far smaller, are not cells, contain only one type of nucleic acid, cannot generate their own energy or proteins, multiply only inside living cells, and are NOT killed by antibiotics. Consequently viral illness is managed chiefly by prevention (vaccines, hygiene, vector and blood-borne precautions), by the host immune response, and by specific antivirals where they exist." },
      { h: "Classification by tissue tropism", list: [
        "Pneumotropic — respiratory tract, e.g. influenza, viral pneumonia.",
        "Neurotropic — nervous tissue, e.g. poliovirus, rabies, encephalitis viruses.",
        "Viscerotropic — internal organs, e.g. hepatitis viruses (liver), dengue, yellow fever.",
        "Dermotropic — skin, e.g. measles, varicella (chickenpox), wart (papilloma) virus."
      ] },
      { h: "HIV and AIDS", p: "The human immunodeficiency virus (HIV) is an enveloped RNA retrovirus that uses reverse transcriptase to copy its RNA into DNA, which integrates into the host genome. It infects and progressively destroys CD4+ helper T-lymphocytes, crippling cell-mediated immunity and leading to AIDS with opportunistic infections and tumours. It spreads by unprotected sex, contaminated blood/sharps and from mother to child. Antiretroviral therapy suppresses replication but does not eradicate the integrated virus; prevention centres on safe sex, safe blood and injection practice, and prevention of mother-to-child transmission." },
      { h: "Prevention, control and nursing relevance", p: "As antibiotics are ineffective, prevention is paramount: immunization (measles, polio, hepatitis B, rabies post-exposure), respiratory and hand hygiene, safe blood and sharps handling for blood-borne viruses, and vector control (removing Aedes breeding sites for dengue). Nurses reduce viral spread through vaccination programmes, standard precautions, post-exposure management, and health education, while avoiding inappropriate antibiotic use in viral illness." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Describe the structure of a virus, distinguishing enveloped and naked viruses.",
      "Explain the steps of the viral replication cycle.",
      "How do viruses differ from bacteria?",
      "Classify viruses by tissue tropism with examples.",
      "Describe HIV, how it causes AIDS, its transmission and prevention."
    ],
    assessment: [
      { type: "mcq", q: "A virus is described as an obligate intracellular parasite because it:", options: ["Grows on agar plates", "Can only replicate inside living host cells", "Lives in soil", "Makes its own energy"], answer: 1, rationale: "Viruses lack their own metabolic machinery and multiply only within host cells." },
      { type: "mcq", q: "The protein coat surrounding the viral genome is the:", options: ["Envelope", "Capsid", "Cell wall", "Nucleoid"], answer: 1, rationale: "The capsid, made of capsomeres, encloses the nucleic-acid genome." },
      { type: "mcq", q: "A virus contains:", options: ["Both DNA and RNA", "No nucleic acid", "Only one type of nucleic acid (DNA or RNA)", "Only protein"], answer: 2, rationale: "Each virus has a single genome type, either DNA or RNA, never both." },
      { type: "mcq", q: "Which step of viral replication determines host and tissue tropism?", options: ["Attachment to specific receptors", "Release", "Assembly", "Uncoating"], answer: 0, rationale: "Specific binding of viral proteins to host receptors dictates which cells are infected." },
      { type: "mcq", q: "Enveloped viruses are generally more susceptible than naked viruses to:", options: ["Antibiotics", "Cold", "Lipid solvents and drying", "Water"], answer: 2, rationale: "The lipid envelope is disrupted by lipid solvents, detergents and drying." },
      { type: "mcq", q: "HIV primarily infects and destroys:", options: ["Red blood cells", "Platelets", "Neurons only", "CD4+ helper T-lymphocytes"], answer: 3, rationale: "HIV depletes CD4+ helper T cells, crippling cell-mediated immunity and causing AIDS." },
      { type: "mcq", q: "The enzyme HIV uses to copy its RNA into DNA is:", options: ["DNA polymerase", "Reverse transcriptase", "Lysozyme", "Protease only"], answer: 1, rationale: "Reverse transcriptase makes a DNA copy of the retroviral RNA genome for integration." },
      { type: "mcq", q: "Hepatitis and dengue viruses, which attack internal organs, are classified as:", options: ["Neurotropic", "Dermotropic", "Viscerotropic", "Pneumotropic"], answer: 2, rationale: "Viscerotropic viruses target internal organs such as the liver." },
      { type: "mcq", q: "Enveloped viruses are usually released from the host cell by:", options: ["Lysis only", "Budding through the cell membrane", "Binary fission", "Sporulation"], answer: 1, rationale: "Enveloped viruses acquire their envelope by budding through host membrane." },
      { type: "mcq", q: "Antibiotics are ineffective against viral infections because viruses:", options: ["Are too large", "Have thick walls", "Are fungi", "Lack the bacterial structures antibiotics target"], answer: 3, rationale: "Antibiotics act on bacterial structures/processes that viruses do not possess." },
      { type: "fill", q: "The genome together with its protein capsid is called the ______.", accept: ["nucleocapsid"], rationale: "Nucleocapsid = viral nucleic acid plus surrounding capsid." },
      { type: "fill", q: "Viruses classified as ______ attack nervous tissue, e.g. rabies and polio.", accept: ["neurotropic"], rationale: "Neurotropic viruses target nervous tissue." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "mib-05-fungi",
    unit: "Unit 2 · The Microbial Agents",
    title: "Fungi & Fungal Infections (Mycoses)",
    readMinutes: 15,
    summary: "The biology of fungi as eukaryotes, yeast and mould morphology, reproduction, the classification of mycoses from superficial to systemic, predisposing factors, antifungal principles and the nurse's role in prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nature of fungi", p: "Fungi are eukaryotic micro-organisms with a true membrane-bound nucleus, organelles, 80S ribosomes and a rigid cell wall containing chitin and glucans; their membranes contain ergosterol (the target of many antifungals). They are heterotrophic, absorbing nutrients from organic matter. Most fungi are saprophytes or commensals; a minority cause disease (mycoses)." },
      { h: "Morphological forms", p: "Fungi occur as unicellular yeasts (reproducing by budding, e.g. Candida), as filamentous moulds composed of branching threads called hyphae that form a mat (mycelium, e.g. dermatophytes), or as dimorphic fungi that grow as moulds in the environment and yeasts in tissue at body temperature. This yeast-mould duality is important in identification and pathogenesis.", figure: {
        caption: "Fungal forms: yeast (budding cells) and mould (branching hyphae forming mycelium).",
        svg: '<svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yeast and mould forms"><circle cx="80" cy="55" r="20" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><circle cx="104" cy="38" r="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="90" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Yeast (budding)</text><path d="M250,55 h40 m0,0 l24,-16 m-24,16 l24,16 m-24,-16 h40 l22,-14 m-22,14 l22,14" fill="none" stroke="#15803D" stroke-width="3" stroke-linecap="round"/><text x="330" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Mould (hyphae)</text></svg>'
      } },
      { h: "Reproduction and spread", p: "Fungi reproduce mainly by producing spores, sexually or asexually, that disperse readily through air and on surfaces and survive well in the environment. Growth is favoured by warmth, moisture and a slightly acid pH, which is why superficial fungal infections thrive in moist skin folds, between the toes and in the groin." },
      { h: "Classification of mycoses", list: [
        "Superficial and cutaneous — dermatophytes causing tinea (ringworm), athlete's foot and nail infection, affecting keratinised skin, hair and nails.",
        "Subcutaneous — deeper tissue infection after trauma (e.g. mycetoma).",
        "Candidiasis (opportunistic) — Candida albicans causing oral thrush, vulvovaginal thrush, intertrigo and, in the compromised, invasive disease.",
        "Systemic/deep mycoses — e.g. cryptococcosis (Cryptococcus neoformans meningitis), chiefly in the immunocompromised.",
        "Opportunistic mycoses — aspergillosis and others exploiting weakened hosts."
      ] },
      { h: "Predisposing (risk) factors", p: "Mycoses cluster where host defences or normal flora are disturbed: diabetes mellitus, broad-spectrum antibiotic use (which removes competing bacteria and allows Candida overgrowth), immunosuppression (HIV/AIDS, cancer, corticosteroids, chemotherapy), pregnancy, indwelling devices, and prolonged skin moisture. Systemic mycoses are almost confined to immunocompromised patients, making them useful markers of failing immunity." },
      { h: "Treatment principles", p: "Fungi are treated with antifungal drugs, not antibiotics. Many act on ergosterol or its synthesis (polyenes such as amphotericin B bind ergosterol; azoles inhibit its synthesis), exploiting a target absent from human membranes. Superficial infections are treated topically; serious or systemic infection requires systemic therapy, sometimes prolonged and with monitoring for toxicity." },
      { h: "Nursing relevance", p: "Nurses prevent and detect mycoses by keeping at-risk skin (especially folds and the perineum) clean and dry, providing meticulous mouth care in the seriously ill and immunosuppressed, promoting good glycaemic control, encouraging rational antibiotic use, and recognising and reporting thrush, ringworm and signs of deeper infection so treatment is not delayed." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Describe the biological features of fungi that distinguish them from bacteria.",
      "Differentiate yeasts, moulds and dimorphic fungi.",
      "Classify the mycoses with an example of each.",
      "List the factors that predispose to fungal infection and explain why.",
      "Outline the principles of antifungal treatment and the nurse's preventive role."
    ],
    assessment: [
      { type: "mcq", q: "Fungi are classified as ______ organisms.", options: ["Prokaryotic", "Eukaryotic", "Acellular", "Viral"], answer: 1, rationale: "Fungi are eukaryotes with a true nucleus, organelles and 80S ribosomes." },
      { type: "mcq", q: "The sterol in fungal membranes that is the target of many antifungal drugs is:", options: ["Cholesterol", "Peptidoglycan", "Ergosterol", "Chitin"], answer: 2, rationale: "Ergosterol is unique to fungal membranes; polyenes and azoles target it or its synthesis." },
      { type: "mcq", q: "Branching filaments that make up a mould are called:", options: ["Buds", "Hyphae", "Capsomeres", "Cocci"], answer: 1, rationale: "Hyphae are the filaments of moulds; a mass of them forms the mycelium." },
      { type: "mcq", q: "Ringworm (tinea) and athlete's foot are caused by:", options: ["Dermatophytes", "Candida", "Cryptococcus", "Aspergillus"], answer: 0, rationale: "Dermatophytes cause superficial infection of keratinised skin, hair and nails." },
      { type: "mcq", q: "Which factor most predisposes to invasive/systemic fungal infection?", options: ["Strong immunity", "Cold dry skin", "Good hygiene", "Immunosuppression (HIV, chemotherapy, steroids)"], answer: 3, rationale: "Systemic mycoses occur chiefly in immunocompromised hosts." },
      { type: "mcq", q: "Broad-spectrum antibiotics can precipitate candidiasis because they:", options: ["Feed Candida", "Remove competing normal flora, allowing Candida overgrowth", "Are antifungal", "Boost immunity"], answer: 1, rationale: "Suppressing bacterial flora releases Candida from competition, allowing overgrowth." },
      { type: "mcq", q: "Fungi reproduce mainly by producing:", options: ["Spores", "Eggs", "Live young", "Toxins"], answer: 0, rationale: "Fungi disperse by spores that survive in air and on surfaces." },
      { type: "mcq", q: "Cryptococcosis, a systemic mycosis causing meningitis, mainly affects people who are:", options: ["Healthy athletes", "Immunocompromised", "Well nourished", "Children only"], answer: 1, rationale: "Cryptococcal meningitis typically occurs in immunocompromised patients (e.g. AIDS)." },
      { type: "mcq", q: "Fungal cell walls characteristically contain:", options: ["Peptidoglycan", "Cholesterol only", "Chitin", "No wall"], answer: 2, rationale: "Fungal walls contain chitin and glucans, unlike bacterial peptidoglycan." },
      { type: "mcq", q: "To help prevent superficial fungal infection the nurse keeps the skin:", options: ["Warm and moist", "Tightly covered", "Unwashed", "Clean and dry, especially in folds"], answer: 3, rationale: "Keeping skin clean and dry, especially in folds, discourages fungal growth." },
      { type: "fill", q: "A fungus that grows as a mould in the environment but a yeast in tissue is called ______.", accept: ["dimorphic"], rationale: "Dimorphic fungi switch between mould and yeast forms with temperature." },
      { type: "fill", q: "Diseases caused by fungi are collectively called ______.", accept: ["mycoses", "mycosis"], rationale: "Mycoses are infections caused by fungi." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "mib-06-parasites",
    unit: "Unit 2 · The Microbial Agents",
    title: "Parasites — Protozoa & Helminths",
    readMinutes: 18,
    summary: "The concept of parasitism and host-parasite relationships, the medically important protozoa (malaria, kala-azar, amoebiasis, trichomoniasis) with their life cycles and pathogenesis, the major helminths, routes of transmission, laboratory diagnosis and prevention relevant to Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept of parasitism", p: "A parasite lives on or in a host and benefits at the host's expense. Endoparasites live inside the body (protozoa, helminths); ectoparasites live on the surface (lice, scabies mite). The definitive host harbours the adult/sexual stage, the intermediate host the larval/asexual stage, and a vector (often an arthropod) transmits the parasite. Medical parasitology covers the single-celled protozoa and the multicellular worms (helminths)." },
      { h: "Protozoa: general features", p: "Protozoa are microscopic, single-celled eukaryotes. Many alternate between an active feeding trophozoite and a resistant cyst that survives outside the host and transmits infection. They are grouped by locomotion into amoebae, flagellates, ciliates and sporozoa (apicomplexa). Several cause major disease in Bangladesh." },
      { h: "Key protozoal diseases", list: [
        "Malaria — Plasmodium falciparum, vivax, ovale, malariae; transmitted by the bite of the infected female Anopheles mosquito. Sporozoites infect liver then red cells; synchronous rupture of red cells causes periodic fever, chills and haemolytic anaemia; falciparum can cause fatal cerebral malaria.",
        "Kala-azar (visceral leishmaniasis) — Leishmania donovani, transmitted by the sandfly; causes prolonged fever, weight loss, hepatosplenomegaly and anaemia.",
        "Amoebiasis — Entamoeba histolytica, spread faeco-orally by cysts; trophozoites invade the colon causing amoebic (bloody) dysentery and may spread to form liver abscess.",
        "Trichomoniasis — Trichomonas vaginalis, a flagellate transmitted sexually, causing vaginitis and urethritis."
      ], figure: {
        caption: "Malaria transmission cycle between the Anopheles mosquito and the human host.",
        svg: '<svg viewBox="0 0 520 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Malaria cycle mosquito to human"><defs><marker id="mibA6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="20" y="30" width="170" height="44" rx="10" fill="#DCFCE7" stroke="#15803D"/><text x="105" y="50" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Anopheles mosquito</text><text x="105" y="66" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">injects sporozoites</text><rect x="330" y="30" width="170" height="44" rx="10" fill="#F0FDF4" stroke="#22C55E"/><text x="415" y="50" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Human (liver + RBC)</text><text x="415" y="66" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">gametocytes taken up</text><line x1="190" y1="44" x2="328" y2="44" stroke="#15803D" stroke-width="2" marker-end="url(#mibA6)"/><line x1="330" y1="62" x2="192" y2="62" stroke="#15803D" stroke-width="2" marker-end="url(#mibA6)"/></svg>'
      } },
      { h: "Helminths (worms)", p: "Helminths are multicellular worm parasites grouped as nematodes (roundworms), cestodes (tapeworms) and trematodes (flukes). Common intestinal worms in Bangladesh include Ascaris (roundworm), hookworm (Ancylostoma/Necator), pinworm/threadworm (Enterobius) and tapeworms (Taenia). Heavy or chronic infestation causes malnutrition, growth retardation in children, intestinal obstruction (Ascaris) and iron-deficiency anaemia (hookworm, which feeds on blood in the gut)." },
      { h: "Routes of transmission", list: [
        "Vector-borne — mosquito (malaria), sandfly (kala-azar).",
        "Faeco-oral — cysts/eggs in contaminated food or water (amoebiasis, Ascaris, pinworm).",
        "Skin penetration — hookworm larvae enter through bare feet from contaminated soil.",
        "Ingestion of undercooked meat/fish — some tapeworms.",
        "Sexual contact — trichomoniasis."
      ] },
      { h: "Laboratory diagnosis", p: "Diagnosis is largely by microscopy: a stained thick and thin blood film for malaria (and rapid antigen tests), stool microscopy for cysts, trophozoites, ova and larvae of intestinal parasites, splenic/bone-marrow smears or serology for kala-azar, and wet-mount microscopy of vaginal discharge for Trichomonas. Correct specimen collection by the nurse is essential for a valid result." },
      { h: "Prevention, control and nursing relevance", p: "Control targets the route of spread: safe water, food hygiene and sanitation (faeco-oral parasites); wearing footwear (hookworm); insecticide-treated bed nets and vector control (malaria, kala-azar); thorough cooking; and mass deworming of children. Nurses promote these measures, recognise clinical patterns (periodic fever of malaria, bloody dysentery of amoebiasis, anaemia of hookworm), collect the correct specimens, and administer treatment and health education." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define parasitism and distinguish definitive host, intermediate host and vector.",
      "Describe the transmission and pathogenesis of malaria.",
      "Name important protozoal diseases and how each is transmitted.",
      "Classify the helminths and describe the effects of common intestinal worms.",
      "Outline the laboratory diagnosis and prevention of parasitic diseases in Bangladesh."
    ],
    assessment: [
      { type: "mcq", q: "The host that harbours the adult or sexual stage of a parasite is the:", options: ["Intermediate host", "Definitive host", "Vector", "Reservoir soil"], answer: 1, rationale: "The definitive host carries the adult/sexual stage; the intermediate host the larval/asexual stage." },
      { type: "mcq", q: "Malaria is transmitted to humans by the bite of the infected female:", options: ["Aedes mosquito", "Sandfly", "Anopheles mosquito", "Housefly"], answer: 2, rationale: "Female Anopheles mosquitoes transmit Plasmodium species." },
      { type: "mcq", q: "The periodic fever of malaria is caused by:", options: ["Synchronous rupture of infected red blood cells", "Liver cell rupture only", "Mosquito saliva", "Sporozoite injection"], answer: 0, rationale: "Synchronised lysis of parasitised red cells releases merozoites and pyrogens, causing periodic fever." },
      { type: "mcq", q: "Kala-azar (visceral leishmaniasis) is transmitted by the:", options: ["Mosquito", "Sandfly", "Tick", "Tsetse fly"], answer: 1, rationale: "Leishmania donovani is transmitted by the bite of the sandfly." },
      { type: "mcq", q: "Amoebic dysentery is caused by:", options: ["Entamoeba histolytica", "Plasmodium vivax", "Ascaris", "Trichomonas"], answer: 0, rationale: "Entamoeba histolytica invades the colon causing bloody amoebic dysentery." },
      { type: "mcq", q: "The intestinal worm most associated with iron-deficiency anaemia is:", options: ["Pinworm", "Tapeworm", "Hookworm", "Ascaris"], answer: 2, rationale: "Hookworm feeds on blood in the gut, producing chronic iron-deficiency anaemia." },
      { type: "mcq", q: "Hookworm larvae usually enter the body by:", options: ["The mouth only", "Penetrating the skin of the feet from soil", "Mosquito bite", "The eye"], answer: 1, rationale: "Larvae in contaminated soil penetrate bare skin, typically the feet." },
      { type: "mcq", q: "The resistant, transmissible stage of many protozoa that survives outside the host is the:", options: ["Trophozoite", "Hypha", "Spore coat", "Cyst"], answer: 3, rationale: "The cyst is the environmentally resistant, infective stage (e.g. Entamoeba)." },
      { type: "mcq", q: "The main laboratory method to diagnose malaria is:", options: ["Stool culture", "Stained thick and thin blood films", "Urine microscopy", "Sputum for AFB"], answer: 1, rationale: "Thick and thin blood films (and rapid antigen tests) demonstrate malaria parasites." },
      { type: "mcq", q: "Insecticide-treated bed nets are a key control measure against:", options: ["Amoebiasis", "Tapeworm", "Malaria and kala-azar", "Ascaris"], answer: 2, rationale: "Bed nets reduce bites from mosquitoes (malaria) and sandflies (kala-azar)." },
      { type: "fill", q: "The multicellular worm parasites are collectively called ______.", accept: ["helminths", "helminth"], rationale: "Helminths include nematodes, cestodes and trematodes." },
      { type: "fill", q: "The active, feeding stage of a protozoan (opposite of the cyst) is the ______.", accept: ["trophozoite"], rationale: "The trophozoite is the motile feeding stage; the cyst is the resistant stage." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "mib-07-host-flora-pathogenesis",
    unit: "Unit 3 · Infection & Host-Microbe Relationship",
    title: "Normal Flora, Pathogenesis & the Chain of Infection",
    readMinutes: 18,
    summary: "The normal microbiota and its protective functions, pathogenicity and virulence, virulence factors and toxins, the steps by which a pathogen establishes disease, reservoirs and carriers, and the six-link chain of infection with its modes of transmission.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The normal microbiota and its functions", p: "The body's resident normal flora colonise the skin, upper respiratory tract, mouth, gut and genital tract, while internal organs and blood are normally sterile. Beneficial functions include colonisation resistance (competing with and inhibiting pathogens), synthesis of vitamin K and some B vitamins in the gut, and priming of the immune system. Disturbing this balance (e.g. by antibiotics) predisposes to opportunistic infection such as candidiasis or antibiotic-associated colitis." },
      { h: "Pathogenicity and virulence", p: "Pathogenicity is the capacity of an organism to cause disease; virulence is the quantitative degree of that capacity. Whether infection results depends on the balance between the organism's virulence and dose and the host's resistance. A highly virulent organism may cause disease in very small numbers, whereas an opportunist needs a compromised host." },
      { h: "Virulence factors", list: [
        "Adhesins (pili, surface proteins) — attachment to host cells.",
        "Capsule — resists phagocytosis (e.g. pneumococcus).",
        "Invasins and enzymes (coagulase, hyaluronidase) — spread through tissue.",
        "Toxins — exotoxins and endotoxins that damage the host.",
        "Immune-evasion mechanisms — antigenic variation, intracellular survival."
      ] },
      { h: "Toxins: exotoxins and endotoxins", p: "Exotoxins are potent proteins actively secreted mainly by Gram-positive (and some Gram-negative) bacteria; they are often specific and highly toxic (e.g. tetanus toxin blocks inhibitory neurotransmitters causing spastic paralysis; cholera toxin drives massive fluid loss; diphtheria toxin blocks protein synthesis). Many can be inactivated into toxoids for vaccines. Endotoxin is the lipopolysaccharide (LPS) of the Gram-negative outer membrane, released mainly on cell death; it triggers fever, inflammation and, in large amounts, septic shock." },
      { h: "Steps in pathogenesis", p: "To cause disease a pathogen must persist in a reservoir, exit and reach a new host, gain entry through a portal, adhere to and colonise a surface, invade tissues, evade host defences, multiply to a damaging load, cause injury (directly or by toxins), and finally exit to infect others. Interrupting any step prevents infection — the rationale for every infection-control measure." },
      { h: "Reservoirs and carriers", p: "A reservoir is where the pathogen normally persists and multiplies: humans (including asymptomatic carriers who shed organisms, e.g. typhoid carriers), animals (zoonoses such as rabies), or the environment (soil for tetanus spores, water for cholera). Carriers are epidemiologically important because they spread infection while appearing well; identifying them guides control." },
      { h: "The chain of infection and transmission", p: "Infection propagates through a six-link chain; breaking any link interrupts spread.", figure: {
        caption: "The six-link chain of infection.",
        svg: '<svg viewBox="0 0 700 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of infection"><defs><marker id="mibA7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Infectious agent","Reservoir","Portal of exit","Transmission","Portal of entry","Susceptible host"].map(function(t,i){var x=4+i*116;return "<rect x=\'"+x+"\' y=\'22\' width=\'104\' height=\'42\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+52)+"\' y=\'47\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'9.3\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<5?"<line x1=\'"+(x+104)+"\' y1=\'43\' x2=\'"+(x+116)+"\' y2=\'43\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA7)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "Modes of transmission", list: [
        "Contact — direct (touch, sexual, body fluids) or indirect via contaminated objects (fomites).",
        "Droplet — large respiratory droplets over short distances (e.g. influenza, pertussis).",
        "Airborne — small droplet nuclei that travel and persist (e.g. tuberculosis, measles).",
        "Vehicle — contaminated food, water, blood or medicines.",
        "Vector-borne — arthropods (mosquito, sandfly) carrying the pathogen."
      ] },
      { h: "Nursing relevance", p: "Understanding pathogenesis and the chain of infection is the foundation of standard and transmission-based precautions, hand hygiene, asepsis, safe handling of body fluids, isolation matched to the transmission route, vector control and immunization. The nurse breaks the chain at every opportunity, protecting patients and staff." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Describe the normal microbiota and its beneficial functions.",
      "Differentiate pathogenicity and virulence, and list important virulence factors.",
      "Compare exotoxins and endotoxins with examples.",
      "Describe the steps by which a pathogen causes disease.",
      "Explain the chain of infection and the modes of transmission."
    ],
    assessment: [
      { type: "mcq", q: "Colonisation resistance provided by normal flora means they:", options: ["Cause most infections", "Compete with and inhibit incoming pathogens", "Digest antibiotics", "Are always harmful"], answer: 1, rationale: "Normal flora occupy niches and inhibit pathogens, resisting their establishment." },
      { type: "mcq", q: "Virulence is best defined as the:", options: ["Ability to cause disease at all", "Size of the microbe", "Quantitative degree of disease-causing power", "Speed of growth"], answer: 2, rationale: "Virulence is the degree/measure of pathogenicity." },
      { type: "mcq", q: "Endotoxin is chemically the ______ of the Gram-negative outer membrane.", options: ["Protein secreted", "Peptidoglycan", "Lipopolysaccharide (LPS)", "Capsule"], answer: 2, rationale: "Endotoxin is LPS in the Gram-negative outer membrane, released on cell death." },
      { type: "mcq", q: "Which is TRUE of exotoxins?", options: ["They are secreted proteins, often converted to toxoids for vaccines", "They are part of the cell wall", "They cannot cause disease", "They are only from viruses"], answer: 0, rationale: "Exotoxins are secreted proteins, highly potent, and many are made into toxoid vaccines." },
      { type: "mcq", q: "A person who sheds a pathogen while appearing healthy is a:", options: ["Vector", "Carrier", "Fomite", "Reservoir animal"], answer: 1, rationale: "A carrier harbours and transmits the organism without overt symptoms." },
      { type: "mcq", q: "Tetanus toxin causes:", options: ["Massive watery diarrhoea", "Skin rash", "Anaemia", "Spastic paralysis by blocking inhibitory neurotransmitters"], answer: 3, rationale: "Tetanospasmin blocks inhibitory neurotransmission, producing spastic paralysis." },
      { type: "mcq", q: "Tuberculosis is transmitted mainly by which route?", options: ["Vector", "Airborne droplet nuclei", "Faeco-oral", "Sexual"], answer: 1, rationale: "TB spreads via small airborne droplet nuclei that persist in air." },
      { type: "mcq", q: "Spread of infection by contaminated objects such as instruments is classed as:", options: ["Indirect contact (fomites)", "Droplet", "Vector", "Airborne"], answer: 0, rationale: "Fomites transmit infection through indirect contact." },
      { type: "mcq", q: "The capsule acts as a virulence factor because it:", options: ["Provides motility", "Produces energy", "Resists phagocytosis", "Aids conjugation"], answer: 2, rationale: "The capsule shields the organism from being engulfed by phagocytes." },
      { type: "mcq", q: "Infection control fundamentally works by:", options: ["Strengthening every link of the chain", "Breaking a link in the chain of infection", "Ignoring reservoirs", "Treating symptoms only"], answer: 1, rationale: "Interrupting any single link of the chain prevents transmission." },
      { type: "fill", q: "The lipopolysaccharide toxin in the Gram-negative cell wall is called ______.", accept: ["endotoxin", "lipopolysaccharide", "lps"], rationale: "Endotoxin (LPS) causes fever, inflammation and, in excess, septic shock." },
      { type: "fill", q: "An arthropod such as a mosquito that transmits a pathogen is called a ______.", accept: ["vector"], rationale: "A vector carries the pathogen from one host to another." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "mib-08-immunity",
    unit: "Unit 3 · Infection & Host-Microbe Relationship",
    title: "Immunity — Innate & Adaptive Defences",
    readMinutes: 18,
    summary: "The organisation of host defence into innate and adaptive immunity, the cells and mediators of each, antigens and the structure and classes of antibodies, the primary and secondary responses, classification of acquired immunity, and immunological disorders including hypersensitivity and immunodeficiency.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of immunity", p: "Immunity is the host's capacity to resist and eliminate infection and to distinguish self from non-self. It is organised into two integrated arms: innate (non-specific) immunity, present from birth, acting immediately against any invader without memory; and adaptive (specific) immunity, which is learned, targets particular antigens, and generates immunological memory that underlies lasting protection and vaccination." },
      { h: "Innate (non-specific) immunity", list: [
        "Physical/chemical barriers — intact skin, mucus and cilia, stomach acid, lysozyme in tears and saliva, normal flora.",
        "Phagocytes — neutrophils and macrophages engulf and destroy microbes (phagocytosis).",
        "Inflammation — vasodilation and increased permeability bring cells and mediators to the site (redness, heat, swelling, pain).",
        "Fever — pyrogen-driven rise in temperature that slows microbial growth and enhances defence.",
        "Natural killer (NK) cells, complement and interferons — kill infected cells and amplify defence."
      ] },
      { h: "Adaptive (specific) immunity", p: "Adaptive immunity is mediated by lymphocytes. Cell-mediated immunity uses T-lymphocytes: helper (CD4+) T cells orchestrate responses, and cytotoxic (CD8+) T cells kill virus-infected and tumour cells; it is vital against intracellular pathogens. Humoral immunity uses B-lymphocytes, which on activation become plasma cells secreting antibodies against specific antigens, defending against extracellular microbes and toxins. Antigen-presenting cells and cytokines coordinate both arms.", figure: {
        caption: "Two arms of adaptive immunity: cell-mediated (T cells) and humoral (B cells/antibodies).",
        svg: '<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cell-mediated and humoral immunity"><rect x="30" y="20" width="200" height="34" rx="8" fill="#15803D"/><text x="130" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Adaptive immunity</text><rect x="10" y="74" width="230" height="36" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="125" y="90" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Cell-mediated (T cells)</text><text x="125" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">helper + cytotoxic T</text><rect x="280" y="74" width="230" height="36" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="395" y="90" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Humoral (B cells)</text><text x="395" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">plasma cells / antibodies</text><line x1="130" y1="54" x2="125" y2="72" stroke="#15803D" stroke-width="2"/><line x1="130" y1="54" x2="395" y2="72" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Antigens and antibodies", p: "An antigen is any molecule the immune system recognises as foreign and responds to; the specific region bound is the epitope. An antibody (immunoglobulin) is a Y-shaped glycoprotein with two antigen-binding (variable) arms and a constant region determining class and effector function. Antibodies neutralise toxins and viruses, opsonise microbes for phagocytosis, agglutinate them and activate complement." },
      { h: "Antibody classes", list: [
        "IgG — most abundant; crosses the placenta; main antibody of the secondary response.",
        "IgM — largest; first produced in a primary response; potent activator of complement.",
        "IgA — in secretions (saliva, tears, breast milk, gut) protecting mucosal surfaces.",
        "IgE — mediates allergy (type I hypersensitivity) and anti-parasite defence.",
        "IgD — mainly a B-cell surface receptor."
      ] },
      { h: "Primary and secondary responses", p: "On first exposure to an antigen (primary response) there is a lag, then mainly IgM production, and memory cells form. On re-exposure (secondary response) memory cells produce a faster, larger and predominantly IgG response. This memory is the scientific basis of vaccination, which safely 'teaches' the immune system in advance." },
      { h: "Classification of acquired immunity", list: [
        "Active natural — antibodies made by the body after clinical or subclinical infection (long-lasting).",
        "Active artificial — immunity produced by vaccination (long-lasting).",
        "Passive natural — ready-made maternal antibodies via placenta or breast milk (temporary).",
        "Passive artificial — ready-made antibodies given as immunoglobulin, e.g. anti-tetanus, anti-rabies (immediate but temporary)."
      ] },
      { h: "Immunological disorders and nursing relevance", p: "Immune dysfunction includes hypersensitivity (exaggerated responses — Types I-IV, e.g. anaphylaxis, and delayed reactions), autoimmunity (attack on self), and immunodeficiency, whether primary or acquired (HIV/AIDS, malnutrition, cancer, corticosteroids, chemotherapy, extremes of age). Immunocompromised patients need heightened infection precautions. Nurses apply this knowledge to immunization, protective care of vulnerable patients, recognition and emergency management of anaphylaxis, and support of nutrition and recovery." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Differentiate innate and adaptive immunity with their components.",
      "Compare cell-mediated and humoral immunity.",
      "Define antigen and antibody and describe the antibody classes.",
      "Compare the primary and secondary immune responses and relate them to vaccination.",
      "Classify acquired immunity and outline the main immunological disorders."
    ],
    assessment: [
      { type: "mcq", q: "Which is a feature of innate immunity?", options: ["Immunological memory", "Immediate, non-specific action from birth", "Antibody specificity", "Requires prior exposure"], answer: 1, rationale: "Innate immunity acts immediately and non-specifically, without memory, from birth." },
      { type: "mcq", q: "Cell-mediated immunity is carried out mainly by:", options: ["B-lymphocytes", "T-lymphocytes", "Red cells", "Platelets"], answer: 1, rationale: "T-lymphocytes (helper and cytotoxic) mediate cell-mediated immunity." },
      { type: "mcq", q: "Antibodies are secreted by:", options: ["Neutrophils", "Plasma cells derived from B-lymphocytes", "NK cells", "Macrophages"], answer: 1, rationale: "Activated B cells differentiate into plasma cells that secrete antibodies." },
      { type: "mcq", q: "The antibody produced first in a primary response is:", options: ["IgG", "IgM", "IgA", "IgE"], answer: 1, rationale: "IgM is the first antibody made in a primary response and a strong complement activator." },
      { type: "mcq", q: "The antibody that crosses the placenta to protect the newborn is:", options: ["IgA", "IgE", "IgG", "IgM"], answer: 2, rationale: "IgG is the most abundant antibody and crosses the placenta." },
      { type: "mcq", q: "The antibody predominant in secretions such as breast milk and saliva is:", options: ["IgA", "IgD", "IgE", "IgM"], answer: 0, rationale: "Secretory IgA protects mucosal surfaces and is present in breast milk." },
      { type: "mcq", q: "Immunity produced by vaccination is:", options: ["Passive natural", "Active artificial", "Passive artificial", "Innate"], answer: 1, rationale: "Vaccination stimulates the body's own long-lasting response (active artificial immunity)." },
      { type: "mcq", q: "Ready-made anti-tetanus immunoglobulin provides:", options: ["Active natural immunity", "Passive artificial immunity", "Active artificial immunity", "Innate immunity"], answer: 1, rationale: "Given antibodies confer immediate but temporary passive artificial immunity." },
      { type: "mcq", q: "The secondary immune response differs from the primary in being:", options: ["Slower and weaker", "Faster, larger and mainly IgG", "Only IgM", "Absent"], answer: 1, rationale: "Memory cells give a faster, stronger, IgG-predominant secondary response." },
      { type: "mcq", q: "Type I hypersensitivity (e.g. anaphylaxis) is mediated by:", options: ["IgG", "IgM", "IgE", "T cells only"], answer: 2, rationale: "IgE mediates immediate (type I) hypersensitivity such as anaphylaxis." },
      { type: "fill", q: "A substance recognised by the immune system as foreign is called a/an ______.", accept: ["antigen"], rationale: "An antigen triggers a specific immune response; an antibody binds it." },
      { type: "fill", q: "The specific region of an antigen bound by an antibody is the ______.", accept: ["epitope", "antigenic determinant"], rationale: "The epitope (antigenic determinant) is the exact site the antibody recognises." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "mib-09-immunization",
    unit: "Unit 3 · Infection & Host-Microbe Relationship",
    title: "Immunization & Vaccines",
    readMinutes: 17,
    summary: "The principles of active and passive immunization, the immunological basis of vaccination, types of vaccine with their advantages and limitations, the EPI schedule in Bangladesh, the cold chain, herd immunity, adverse events and the nurse's central role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept and importance", p: "Immunization is the process of conferring immunity against an infectious disease, most often by a vaccine. It is among the most cost-effective public-health interventions, having controlled or eliminated smallpox, polio and many childhood killers. It works by harnessing the adaptive immune response and immunological memory." },
      { h: "Active versus passive immunization", p: "Active immunization introduces an antigen (vaccine) that stimulates the person's own immune system to generate antibodies and, crucially, memory cells, giving protection that is slow to develop but long-lasting and boostable. Passive immunization gives pre-formed antibodies (immunoglobulin, or maternal antibody), providing immediate protection that is temporary and without memory — used when rapid protection is needed, e.g. after a tetanus-prone wound, rabies exposure or in the immunodeficient.", figure: {
        caption: "Active vs passive immunization: how protection is acquired and how long it lasts.",
        svg: '<svg viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Active versus passive immunization"><rect x="20" y="24" width="220" height="62" rx="10" fill="#DCFCE7" stroke="#15803D"/><text x="130" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Active (vaccine)</text><text x="130" y="64" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">body makes antibodies</text><text x="130" y="78" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">slow, long-lasting, memory</text><rect x="280" y="24" width="220" height="62" rx="10" fill="#F0FDF4" stroke="#22C55E"/><text x="390" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Passive (antibody)</text><text x="390" y="64" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">ready-made antibodies given</text><text x="390" y="78" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">immediate, temporary, no memory</text></svg>'
      } },
      { h: "Types of vaccine", list: [
        "Live attenuated — weakened live organisms (BCG, oral polio, measles); strong, durable immunity but avoid in severe immunodeficiency and pregnancy.",
        "Killed/inactivated — whole dead organisms (injectable polio, some cholera); safe but often need boosters.",
        "Toxoid — inactivated toxin (tetanus, diphtheria); protect against toxin-mediated disease.",
        "Subunit/conjugate — purified components (hepatitis B surface antigen, Hib, pneumococcal conjugate); highly specific and safe."
      ] },
      { h: "The EPI in Bangladesh", p: "Bangladesh's Expanded Programme on Immunization provides free childhood vaccines, including BCG (tuberculosis) at birth, oral and inactivated polio vaccine, the pentavalent vaccine (diphtheria, pertussis, tetanus, hepatitis B and Hib), pneumococcal conjugate vaccine, and measles-rubella vaccine, together with tetanus-containing vaccination of women of child-bearing age to prevent neonatal tetanus. The programme has markedly reduced vaccine-preventable disease." },
      { h: "The cold chain", p: "Vaccine potency depends on maintaining recommended temperatures (many at 2-8 C; some, like oral polio, may be frozen) from manufacture to administration — the unbroken cold chain. Heat and, for some vaccines, freezing irreversibly reduce potency. Nurses store vaccines correctly, monitor and record refrigerator temperatures, use vaccine vial monitors, and discard vaccines exposed to unsafe temperatures." },
      { h: "Herd immunity", p: "When a sufficiently high proportion of a population is immune, transmission of the pathogen is interrupted, indirectly protecting the non-immune, including newborns and the immunocompromised. The threshold rises with the infectiousness of the disease. High coverage is therefore essential and is what makes elimination (e.g. of polio) achievable." },
      { h: "Adverse events and contraindications", p: "Most vaccine reactions are minor and self-limiting (soreness, low fever); serious events are rare. Anaphylaxis, though very uncommon, must be anticipated with adrenaline and resuscitation readily available. Live vaccines are generally avoided in severe immunodeficiency and pregnancy; a genuine severe allergy to a vaccine component is a contraindication. Adverse events following immunization should be recorded and reported." },
      { h: "Nursing relevance", p: "Nurses are central to immunization: assessing eligibility, giving the correct vaccine by the correct route and dose, maintaining the cold chain, keeping accurate records, educating families and countering vaccine hesitancy, recognising and managing reactions including anaphylaxis, and promoting full coverage. They also administer passive immunization when immediate protection is required." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Differentiate active and passive immunization with examples.",
      "Describe the types of vaccine, giving advantages and limitations.",
      "Outline the EPI schedule in Bangladesh.",
      "What is the cold chain and why is it essential?",
      "Explain herd immunity and describe the nurse's role in immunization."
    ],
    assessment: [
      { type: "mcq", q: "Active immunization protects by:", options: ["Giving ready-made antibodies", "Stimulating the body to make its own antibodies and memory cells", "Sterilising the blood", "Killing normal flora"], answer: 1, rationale: "Active immunization prompts the host to mount its own long-lasting, memory-based response." },
      { type: "mcq", q: "Passive immunization is preferred when:", options: ["Long-term protection is the goal", "Immediate protection is needed (e.g. after exposure)", "Only healthy adults are treated", "There is no antigen available"], answer: 1, rationale: "Pre-formed antibodies give immediate but temporary protection, useful post-exposure." },
      { type: "mcq", q: "BCG, oral polio and measles vaccines are examples of ______ vaccines.", options: ["Toxoid", "Killed", "Live attenuated", "Subunit"], answer: 2, rationale: "These are live attenuated vaccines using weakened organisms." },
      { type: "mcq", q: "Tetanus and diphtheria are prevented using ______ vaccines.", options: ["Toxoid", "Live attenuated", "Conjugate", "Killed whole-cell"], answer: 0, rationale: "Toxoids are inactivated toxins protecting against toxin-mediated disease." },
      { type: "mcq", q: "Live attenuated vaccines are generally contraindicated in:", options: ["Healthy children", "Severe immunodeficiency and pregnancy", "The elderly only", "Everyone"], answer: 1, rationale: "Weakened live organisms may cause disease in the severely immunocompromised or the fetus." },
      { type: "mcq", q: "The pentavalent vaccine protects against diphtheria, pertussis, tetanus, Hib and:", options: ["Hepatitis B", "Cholera", "Dengue", "Malaria"], answer: 0, rationale: "Pentavalent covers DPT plus Hib and hepatitis B." },
      { type: "mcq", q: "The cold chain is the system that:", options: ["Freezes all vaccines", "Maintains vaccines at safe temperatures from manufacture to use", "Cools the ward", "Stores blood only"], answer: 1, rationale: "The cold chain preserves vaccine potency by maintaining correct temperatures throughout." },
      { type: "mcq", q: "Herd immunity protects the non-immune by:", options: ["Giving them antibodies directly", "Interrupting transmission when enough people are immune", "Sterilising the environment", "Boosting innate immunity"], answer: 1, rationale: "High population immunity blocks spread, indirectly protecting the unvaccinated." },
      { type: "mcq", q: "Which vaccine is given at birth in the Bangladesh EPI to protect against tuberculosis?", options: ["Measles", "BCG", "Tetanus toxoid", "Pentavalent"], answer: 1, rationale: "BCG is given at birth to protect against tuberculosis." },
      { type: "mcq", q: "Before administering any vaccine the nurse must ensure the ready availability of:", options: ["Antibiotics", "Adrenaline and resuscitation equipment for anaphylaxis", "Blood transfusion", "Antifungals"], answer: 1, rationale: "Though rare, anaphylaxis demands immediate adrenaline and resuscitation readiness." },
      { type: "fill", q: "Vaccination that stimulates the body's own long-lasting protection is ______ immunization.", accept: ["active"], rationale: "Active immunization produces the host's own memory-based response." },
      { type: "fill", q: "The unbroken refrigerated system keeping vaccines potent until use is the ______ chain.", accept: ["cold"], rationale: "The cold chain maintains vaccines at safe temperatures throughout distribution." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "mib-10-physical-control",
    unit: "Unit 4 · Control of Microorganisms",
    title: "Sterilization & Physical Methods of Microbial Control",
    readMinutes: 17,
    summary: "Definitions of sterilization, disinfection, antisepsis and asepsis; the mechanisms by which physical agents kill microbes; heat methods (autoclave, hot-air oven, boiling, pasteurization); filtration, radiation and desiccation; sterilization monitoring; and the nursing application.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why control microbial growth", p: "Controlling microbes prevents infection, contamination and spoilage. In health care, reprocessing of instruments and preparation of the environment protect patients from healthcare-associated infection. Methods are physical (heat, radiation, filtration) or chemical (disinfectants, antiseptics, gases); this topic covers the physical methods and definitions." },
      { h: "Key definitions", list: [
        "Sterilization — a process that destroys or removes ALL micro-organisms, including resistant bacterial spores.",
        "Disinfection — reduction of pathogenic microbes to a safe level, but not necessarily spores.",
        "Antisepsis — inhibition/destruction of microbes on living tissue.",
        "Asepsis — prevention of contamination by microbes (aseptic technique).",
        "Sanitization — reduction of microbial numbers to safe public-health levels."
      ] },
      { h: "How physical agents kill microbes", p: "Heat kills chiefly by irreversibly denaturing (coagulating) proteins and enzymes and damaging membranes and nucleic acids. Moist heat is more effective than dry heat at a given temperature because water penetrates cells and conducts heat efficiently, coagulating proteins at lower temperatures. Radiation damages nucleic acids directly (UV) or by generating destructive free radicals (ionising radiation). Filtration physically removes microbes; desiccation and high osmotic pressure withhold the water microbes need." },
      { h: "Moist heat methods", list: [
        "Autoclave — saturated steam under pressure, typically 121 C at 15 psi for about 15 minutes; the standard hospital method that reliably kills spores. Used for instruments, dressings, linen and culture media.",
        "Boiling — kills vegetative organisms in minutes but does NOT reliably kill spores, so it disinfects rather than sterilizes.",
        "Pasteurization — controlled gentle heating (e.g. of milk) that kills pathogens without sterilizing, preserving the product."
      ], figure: {
        caption: "Physical methods of microbial control by category.",
        svg: '<svg viewBox="0 0 560 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Physical control methods"><rect x="180" y="10" width="200" height="32" rx="8" fill="#15803D"/><text x="280" y="31" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Physical methods</text><rect x="20" y="76" width="150" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="95" y="93" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Heat</text><text x="95" y="108" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#0F4C3A">moist / dry</text><rect x="205" y="76" width="150" height="40" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="280" y="93" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Radiation</text><text x="280" y="108" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#0F4C3A">UV / gamma</text><rect x="390" y="76" width="150" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="465" y="93" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Filtration / drying</text><line x1="280" y1="42" x2="95" y2="74" stroke="#15803D" stroke-width="2"/><line x1="280" y1="42" x2="280" y2="74" stroke="#22C55E" stroke-width="2"/><line x1="280" y1="42" x2="465" y2="74" stroke="#15803D" stroke-width="2"/></svg>'
      } },
      { h: "Dry heat methods", p: "Dry heat sterilizes by oxidation and protein denaturation at higher temperatures for longer than moist heat (e.g. hot-air oven, commonly 160-180 C for 1-2 hours). It suits materials that steam would damage or fail to penetrate — glassware, powders, oils and sharp metal instruments. Flaming (of the inoculating loop) and incineration (of contaminated waste and disposables) are also dry-heat methods." },
      { h: "Filtration, radiation and desiccation", list: [
        "Filtration — heat-sensitive fluids (sera, some drugs) are passed through membrane filters that retain microbes; HEPA filters supply microbe-free air to operating theatres and isolation rooms.",
        "Ultraviolet (UV) radiation — surface and air disinfection; limited penetration.",
        "Ionising (gamma) radiation — industrial sterilization of pre-packed single-use disposables (syringes, gloves, catheters).",
        "Desiccation and osmotic pressure — drying and high salt/sugar concentrations inhibit growth (food preservation), though they may not kill all microbes."
      ] },
      { h: "Monitoring sterilization", p: "Because sterility cannot be judged by eye, sterilization is verified by mechanical indicators (cycle time, temperature, pressure), chemical indicators (autoclave tape/strips that change colour), and biological indicators — spores of a resistant organism (e.g. Geobacillus stearothermophilus) that must be killed to confirm efficacy. Regular monitoring assures that reprocessed instruments are truly safe." },
      { h: "Nursing relevance", p: "Nurses depend on these principles daily: using autoclaved sterile instruments and dressings, understanding that boiling and pasteurization are not sterilization, selecting the correct method for each item, handling sterile packs without contamination, checking indicators, and disposing of contaminated waste safely. Correct application directly protects patients from infection." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define sterilization, disinfection, antisepsis and asepsis.",
      "Explain why moist heat is more effective than dry heat.",
      "Describe the autoclave, its operating conditions and uses.",
      "Compare filtration, UV and gamma radiation as physical control methods.",
      "How is the effectiveness of sterilization monitored?"
    ],
    assessment: [
      { type: "mcq", q: "Sterilization is a process that:", options: ["Reduces most pathogens on skin", "Destroys ALL microbes including spores", "Only removes visible dirt", "Works only on surfaces"], answer: 1, rationale: "Sterilization eliminates all micro-organisms, including resistant bacterial spores." },
      { type: "mcq", q: "The standard hospital method of sterilization using saturated steam under pressure is the:", options: ["Hot-air oven", "Boiling water bath", "Autoclave", "UV cabinet"], answer: 2, rationale: "The autoclave (~121 C, 15 psi, 15 min) reliably kills spores." },
      { type: "mcq", q: "Moist heat is more effective than dry heat because it:", options: ["Adds chemicals", "Penetrates and conducts heat, coagulating proteins at lower temperatures", "Cools the microbes", "Is always cheaper"], answer: 1, rationale: "Water penetrates cells and coagulates proteins efficiently, so moist heat works at lower temperatures." },
      { type: "mcq", q: "Boiling water for a few minutes:", options: ["Sterilizes everything", "Has no antimicrobial effect", "Only cleans grease", "Kills vegetative organisms but not all spores (disinfection)"], answer: 3, rationale: "Boiling disinfects but does not reliably kill spores, so it is not true sterilization." },
      { type: "mcq", q: "Glassware, powders and oils are best sterilized by:", options: ["Hot-air oven (dry heat)", "Autoclave", "Pasteurization", "UV light"], answer: 0, rationale: "Dry heat (hot-air oven) suits materials steam cannot penetrate or would damage." },
      { type: "mcq", q: "Heat-sensitive fluids such as sera are rendered microbe-free by:", options: ["Boiling", "Filtration through membrane filters", "Flaming", "Incineration"], answer: 1, rationale: "Filtration removes microbes from heat-labile fluids without heat." },
      { type: "mcq", q: "Pre-packed single-use syringes and gloves are usually sterilized industrially by:", options: ["Boiling", "Hand washing", "Gamma (ionising) radiation", "Refrigeration"], answer: 2, rationale: "Gamma radiation sterilizes sealed single-use disposables." },
      { type: "mcq", q: "A biological indicator confirms sterilization by using:", options: ["A colour-change tape only", "Resistant bacterial spores that must be killed", "A thermometer", "The naked eye"], answer: 1, rationale: "Biological indicators (resistant spores) are the definitive proof the process kills spores." },
      { type: "mcq", q: "Pasteurization is best described as a process that:", options: ["Sterilizes milk", "Freezes food", "Adds preservatives", "Kills pathogens in milk without sterilizing it"], answer: 3, rationale: "Pasteurization uses controlled heat to kill pathogens while preserving the product." },
      { type: "mcq", q: "Preservation of food by drying or high salt/sugar works by:", options: ["Killing all spores", "Withholding the water microbes need to grow", "Adding antibiotics", "Heating to 121 C"], answer: 1, rationale: "Desiccation and osmotic pressure deny microbes available water, inhibiting growth." },
      { type: "fill", q: "The prevention of contamination by micro-organisms (aseptic technique) is called ______.", accept: ["asepsis"], rationale: "Asepsis is the prevention of microbial contamination." },
      { type: "fill", q: "A process that kills all microbes INCLUDING spores is called ______.", accept: ["sterilization", "sterilisation"], rationale: "Sterilization destroys all microbes, including resistant spores." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "mib-11-disinfection",
    unit: "Unit 4 · Control of Microorganisms",
    title: "Disinfection, Antiseptics & Chemical Control",
    readMinutes: 16,
    summary: "Chemical control of microbes — antiseptics, disinfectants and chemical sterilants; their mechanisms of action on membranes, proteins and nucleic acids; common agents; the factors determining effectiveness; standard/universal precautions; and the nurse's daily application.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key definitions", list: [
        "Antiseptic — a chemical applied to living tissue (skin, mucosa, wounds) to kill or inhibit microbes.",
        "Disinfectant — a chemical used on inanimate surfaces/equipment to destroy most microbes (usually too harsh for tissue).",
        "Chemical sterilant — an agent that destroys all microbes including spores (e.g. glutaraldehyde with adequate contact; ethylene oxide gas).",
        "Bactericidal agents kill microbes; bacteriostatic agents inhibit their multiplication."
      ] },
      { h: "Mechanisms of action", p: "Chemical agents act by one or more mechanisms: altering membrane permeability so the cell contents leak out (surfactants, alcohols, phenols); denaturing (coagulating) proteins and enzymes (alcohols, aldehydes, heavy metals); and damaging nucleic acids (some alkylating agents). Oxidising agents (hypochlorite, hydrogen peroxide) inactivate microbes through oxidative damage. Alcohols require water to coagulate protein, which is why about 70% alcohol is more effective than absolute alcohol.", figure: {
        caption: "How chemical agents damage microbes: membrane, proteins/enzymes, nucleic acids.",
        svg: '<svg viewBox="0 0 560 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mechanisms of chemical action"><rect x="20" y="24" width="160" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="100" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Disrupt membrane</text><text x="100" y="55" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">leakage of contents</text><rect x="200" y="24" width="160" height="40" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="280" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Denature proteins</text><text x="280" y="55" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">enzymes inactivated</text><rect x="380" y="24" width="160" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="460" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Damage nucleic acid</text><text x="460" y="55" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">blocks replication</text></svg>'
      } },
      { h: "Common antiseptics", p: "Antiseptics for skin and wounds include about 70% alcohol (skin before injection), chlorhexidine (hand and skin preparation; persistent action), povidone-iodine (skin and wound preparation) and hydrogen peroxide (wound cleansing). They must balance antimicrobial efficacy against tissue tolerance." },
      { h: "Common disinfectants and gaseous agents", p: "Disinfectants for surfaces and equipment include sodium hypochlorite (bleach) for surfaces and blood/body-fluid spills, phenolic compounds, and glutaraldehyde for heat-sensitive instruments such as endoscopes. Ethylene oxide gas sterilizes heat- and moisture-sensitive equipment industrially. These agents are stronger and often toxic, requiring correct dilution, contact time, ventilation and protection." },
      { h: "Factors affecting effectiveness", p: "Efficacy depends on concentration and contact (exposure) time; temperature and pH; the number, type and state of microbes (spores are most resistant, then mycobacteria, then non-enveloped viruses, with enveloped viruses and vegetative bacteria least resistant); and, critically, the presence of organic matter (blood, pus, faeces) which shields microbes and inactivates many agents. Hence instruments must be thoroughly cleaned before disinfection or sterilization, and correct dilution and contact time observed." },
      { h: "Standard (universal) precautions", p: "Standard precautions treat all blood and body fluids as potentially infectious and apply to every patient: hand hygiene, appropriate personal protective equipment (gloves, gowns, masks, eye protection), safe injection and sharps practice, safe handling of specimens and linen, environmental cleaning, and correct waste disposal. They are the baseline that protects both patients and health workers, supplemented by transmission-based precautions where needed." },
      { h: "Nursing relevance", p: "Nurses use chemical control constantly — skin antisepsis before procedures, cleaning surfaces and managing spills, reprocessing instruments at the right concentration and contact time, and applying standard precautions. Above all, hand hygiene with soap and water or an alcohol-based hand rub remains the single most effective chemical measure to prevent infection transmission." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define antiseptic, disinfectant and chemical sterilant.",
      "Explain the mechanisms by which chemical agents kill or inhibit microbes.",
      "Give two examples each of common antiseptics and disinfectants and their uses.",
      "List the factors that affect the effectiveness of a chemical agent.",
      "Describe standard (universal) precautions and their importance."
    ],
    assessment: [
      { type: "mcq", q: "A chemical applied to LIVING tissue to kill or inhibit microbes is a/an:", options: ["Disinfectant", "Antiseptic", "Detergent", "Solvent"], answer: 1, rationale: "Antiseptics are used on living tissue; disinfectants on inanimate surfaces." },
      { type: "mcq", q: "Sodium hypochlorite (bleach) is best classified as a:", options: ["Skin antiseptic", "Surface disinfectant", "Oral antibiotic", "Vaccine"], answer: 1, rationale: "Bleach is a surface disinfectant, too harsh for skin." },
      { type: "mcq", q: "About 70% alcohol is more effective than absolute (100%) alcohol because:", options: ["It is cheaper", "It evaporates slower only", "Water is needed to coagulate microbial protein", "It is coloured"], answer: 2, rationale: "Alcohol needs water to denature protein effectively, so 70% outperforms absolute alcohol." },
      { type: "mcq", q: "Chemical agents commonly kill microbes by:", options: ["Feeding them", "Cooling them", "Adding nutrients", "Disrupting membranes and denaturing proteins"], answer: 3, rationale: "They disrupt membranes, denature proteins/enzymes and may damage nucleic acids." },
      { type: "mcq", q: "The effectiveness of a disinfectant is reduced most by the presence of:", options: ["Clean dry surfaces", "Organic matter (blood, pus, faeces)", "Bright light", "Cool air"], answer: 1, rationale: "Organic matter shields microbes and inactivates many disinfectants." },
      { type: "mcq", q: "Heat-sensitive endoscopes are commonly disinfected/sterilized with:", options: ["Autoclave", "Glutaraldehyde", "Boiling only", "Soap and water only"], answer: 1, rationale: "Glutaraldehyde is a chemical agent suitable for heat-sensitive instruments." },
      { type: "mcq", q: "The microbes MOST resistant to chemical disinfectants are:", options: ["Enveloped viruses", "Vegetative bacteria", "Bacterial spores", "Fungi"], answer: 2, rationale: "Bacterial spores are the most resistant forms in the resistance hierarchy." },
      { type: "mcq", q: "Standard (universal) precautions are based on the principle that:", options: ["Only known infected patients pose a risk", "Gloves replace hand hygiene", "All blood and body fluids are potentially infectious", "Antibiotics prevent all infection"], answer: 2, rationale: "Standard precautions treat every patient's blood/body fluids as potentially infectious." },
      { type: "mcq", q: "Before chemical disinfection, instruments must first be:", options: ["Reused", "Left soiled", "Only air-dried", "Thoroughly cleaned to remove organic matter"], answer: 3, rationale: "Cleaning removes organic matter so the agent can reach and kill microbes." },
      { type: "mcq", q: "The single most effective chemical measure to prevent cross-infection is:", options: ["Hand hygiene", "Air freshener", "Floor mopping", "Antibiotic prophylaxis"], answer: 0, rationale: "Hand hygiene (soap/water or alcohol rub) is the most effective infection-control measure." },
      { type: "fill", q: "A chemical used on non-living surfaces and equipment to destroy microbes is a ______.", accept: ["disinfectant"], rationale: "Disinfectants act on inanimate objects; antiseptics on living tissue." },
      { type: "fill", q: "Blood, pus and faeces that reduce a disinfectant's action are collectively called ______ matter.", accept: ["organic"], rationale: "Organic matter shields microbes and inactivates many chemical agents." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "mib-12-antimicrobials-amr",
    unit: "Unit 4 · Control of Microorganisms",
    title: "Antimicrobial Chemotherapy & Antibiotic Resistance",
    readMinutes: 17,
    summary: "Classes of antimicrobial drugs and the principle of selective toxicity, the main mechanisms of antibiotic action, bactericidal/bacteriostatic and spectrum, culture and sensitivity testing, the mechanisms and drivers of antimicrobial resistance, stewardship and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are antimicrobials?", p: "Antimicrobials are drugs that kill or inhibit microbes to treat infection. They are grouped by target organism: antibacterials (antibiotics), antivirals, antifungals and antiparasitics/anthelmintics. The guiding principle is selective toxicity — harming the microbe while sparing human cells by attacking structures or pathways that are unique to, or different in, the pathogen. Antibiotics act on bacteria and are ineffective against viruses." },
      { h: "Mechanisms of antibiotic action", list: [
        "Inhibition of cell-wall synthesis — penicillins, cephalosporins (target peptidoglycan, absent from human cells).",
        "Inhibition of protein synthesis — aminoglycosides, tetracyclines, macrolides (target the 70S ribosome).",
        "Inhibition of nucleic-acid synthesis — quinolones (DNA gyrase), rifampicin (RNA polymerase).",
        "Antimetabolites — sulphonamides and trimethoprim block folic-acid synthesis.",
        "Disruption of cell membrane — polymyxins."
      ], figure: {
        caption: "Antibiotic targets in the bacterial cell.",
        svg: '<svg viewBox="0 0 560 92" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Antibiotic mechanisms"><rect x="14" y="28" width="128" height="44" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="78" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Cell wall</text><text x="78" y="60" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">penicillins</text><rect x="152" y="28" width="128" height="44" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="216" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Protein synth.</text><text x="216" y="60" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">tetracyclines</text><rect x="290" y="28" width="128" height="44" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="354" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Nucleic acid</text><text x="354" y="60" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">quinolones</text><rect x="428" y="28" width="120" height="44" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="488" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Folate path.</text><text x="488" y="60" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">sulphonamides</text></svg>'
      } },
      { h: "Bactericidal, bacteriostatic and spectrum", list: [
        "Bactericidal — kills bacteria (e.g. penicillins, aminoglycosides).",
        "Bacteriostatic — halts multiplication so host defences clear the organism (e.g. tetracyclines).",
        "Broad-spectrum — active against many bacterial types (may disturb normal flora).",
        "Narrow-spectrum — active against a limited range (preferred when the organism is known)."
      ] },
      { h: "Culture and sensitivity testing", p: "To select the most appropriate drug, the laboratory isolates (cultures) the organism from a specimen and tests it against a panel of antibiotics — the culture and sensitivity (C&S) test — reporting each drug as sensitive, intermediate or resistant. Minimum inhibitory concentration may be measured. Wherever possible, specimens are collected BEFORE the first antibiotic dose so the result is accurate, guiding a switch from empirical to targeted therapy." },
      { h: "Mechanisms of resistance", list: [
        "Enzymatic destruction/modification of the drug (e.g. beta-lactamases hydrolysing penicillins).",
        "Alteration of the drug target so the antibiotic no longer binds.",
        "Reduced uptake or increased efflux (pumping the drug out).",
        "Bypass of the blocked metabolic pathway.",
        "Resistance genes spread by mutation and by horizontal transfer on plasmids and transposons."
      ] },
      { h: "Drivers of AMR and stewardship", p: "Antimicrobial resistance (AMR) is a major global threat that renders infections difficult or impossible to treat. It is driven by overuse and misuse: prescribing for viral illness, wrong drug/dose/duration, incomplete courses, unregulated over-the-counter sale, and heavy use in agriculture. Antimicrobial stewardship counters this by ensuring the right drug, dose, route and duration, de-escalation guided by C&S, and strong infection prevention so fewer antibiotics are needed." },
      { h: "Nursing relevance", p: "Nurses are pivotal in combating AMR: administering antibiotics accurately and on time, collecting specimens before the first dose, monitoring efficacy and adverse effects/allergy, and educating patients never to stop early, share, or self-prescribe antibiotics. By reinforcing hand hygiene and asepsis they reduce infections and hence antibiotic demand." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Explain selective toxicity and name the classes of antimicrobial drugs.",
      "Describe the main mechanisms of antibiotic action with examples.",
      "Differentiate bactericidal and bacteriostatic, and broad- and narrow-spectrum agents.",
      "What is culture and sensitivity testing and why is it important?",
      "Describe the mechanisms and drivers of antimicrobial resistance and the nurse's role in stewardship."
    ],
    assessment: [
      { type: "mcq", q: "Selective toxicity means an antimicrobial:", options: ["Kills all cells equally", "Harms the microbe while sparing human cells", "Only works in the laboratory", "Is toxic to the patient"], answer: 1, rationale: "Selective toxicity exploits differences between microbial and human cells." },
      { type: "mcq", q: "Penicillins act by inhibiting synthesis of the bacterial:", options: ["Ribosome", "Nucleus", "Cell wall (peptidoglycan)", "Capsule"], answer: 2, rationale: "Penicillins block peptidoglycan cross-linking, weakening the cell wall." },
      { type: "mcq", q: "Tetracyclines and aminoglycosides act mainly by inhibiting:", options: ["Protein synthesis at the 70S ribosome", "Cell-wall synthesis", "DNA gyrase", "Folate synthesis"], answer: 0, rationale: "They bind the bacterial 70S ribosome to block protein synthesis." },
      { type: "mcq", q: "A drug that stops bacteria multiplying so the immune system can clear them is:", options: ["Bactericidal", "Bacteriostatic", "Antifungal", "Antiviral"], answer: 1, rationale: "Bacteriostatic drugs inhibit multiplication; bactericidal drugs kill." },
      { type: "mcq", q: "Sulphonamides and trimethoprim work as:", options: ["Cell-wall inhibitors", "Membrane disruptors", "Antimetabolites blocking folic-acid synthesis", "Ribosome inhibitors"], answer: 2, rationale: "They block folate synthesis, a pathway bacteria need but humans obtain from diet." },
      { type: "mcq", q: "Specimens for culture and sensitivity should ideally be collected:", options: ["After several antibiotic doses", "Before starting antibiotics", "Only at discharge", "After full recovery"], answer: 1, rationale: "Collecting before antibiotics gives an accurate culture and sensitivity result." },
      { type: "mcq", q: "Beta-lactamase enzymes cause resistance by:", options: ["Altering the ribosome", "Pumping the drug in", "Boosting drug uptake", "Destroying/hydrolysing penicillins"], answer: 3, rationale: "Beta-lactamases hydrolyse the beta-lactam ring, inactivating penicillins." },
      { type: "mcq", q: "Which is a mechanism of antibiotic resistance?", options: ["Increased drug uptake", "Efflux pumps expelling the drug", "Slower growth only", "Larger capsule only"], answer: 1, rationale: "Efflux pumps expel the antibiotic, lowering its intracellular concentration." },
      { type: "mcq", q: "A major driver of antimicrobial resistance is:", options: ["Completing prescribed courses", "Misuse/overuse of antibiotics (e.g. for viral illness)", "Using culture and sensitivity", "Good hand hygiene"], answer: 1, rationale: "Overuse and misuse select for resistant organisms." },
      { type: "mcq", q: "Antimicrobial stewardship promotes:", options: ["The right drug, dose, route and duration", "Antibiotics for every fever", "Sharing leftover antibiotics", "Stopping when the patient feels better"], answer: 0, rationale: "Stewardship ensures appropriate, guideline- and C&S-directed antibiotic use." },
      { type: "fill", q: "The laboratory test showing which antibiotic will work against an isolate is the culture and ______ test.", accept: ["sensitivity"], rationale: "Culture and sensitivity (C&S) guides targeted antibiotic therapy." },
      { type: "fill", q: "Enzymes produced by bacteria that destroy penicillins are called ______.", accept: ["beta-lactamases", "beta lactamase", "beta-lactamase", "betalactamases"], rationale: "Beta-lactamases hydrolyse beta-lactam antibiotics, causing resistance." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "mib-13-nosocomial",
    unit: "Unit 5 · Infection Control & Diagnosis",
    title: "Hospital-Acquired Infection & Infection Control",
    readMinutes: 17,
    summary: "Definition and impact of healthcare-associated (nosocomial) infection, the compromised host, the common device-related HAIs, sources and chains of transmission in hospital, multidrug-resistant organisms, and the evidence-based bundle of prevention, isolation and surveillance measures with the nurse's central role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and impact", p: "A healthcare-associated (nosocomial) infection is one acquired during care in a hospital or health facility, not present or incubating at admission (conventionally appearing more than 48 hours after admission, or after discharge in the case of surgical wounds). HAIs greatly increase morbidity, length of stay, cost and mortality, and a large proportion are preventable, making them a key indicator of care quality and patient safety." },
      { h: "The compromised host and risk factors", p: "Hospitals concentrate susceptible patients, virulent and resistant organisms, and breaches of natural defences. The compromised host — weakened by underlying illness, surgery, extremes of age, malnutrition, immunosuppression or invasive devices — is especially vulnerable. Invasive devices (urinary catheters, intravascular lines, ventilators) and surgical wounds bypass the skin and mucosal barriers, giving microbes direct access." },
      { h: "Common nosocomial infections", list: [
        "Catheter-associated urinary tract infection (CAUTI) — the most common, linked to indwelling urinary catheters.",
        "Surgical-site infection (SSI) — infection of the operative wound.",
        "Ventilator-associated and other lower respiratory infections (pneumonia).",
        "Bloodstream infection (bacteraemia) — often related to intravascular catheters (CLABSI)."
      ], figure: {
        caption: "Common hospital-acquired infections and their device associations.",
        svg: '<svg viewBox="0 0 560 92" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Common HAIs and devices"><rect x="14" y="30" width="128" height="44" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="78" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">CAUTI</text><text x="78" y="62" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">urinary catheter</text><rect x="152" y="30" width="128" height="44" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="216" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">SSI</text><text x="216" y="62" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">surgical wound</text><rect x="290" y="30" width="128" height="44" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="354" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Pneumonia</text><text x="354" y="62" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">ventilator</text><rect x="428" y="30" width="120" height="44" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="488" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Bacteraemia</text><text x="488" y="62" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">IV line</text></svg>'
      } },
      { h: "Sources and spread in hospital", p: "Microbes causing HAI arise from the patient's own flora (endogenous), from other patients and staff (exogenous, especially via contaminated hands), and from the environment and equipment. Contact spread through the hands of health workers is the dominant route, which is why hand hygiene is the cornerstone of prevention. Multidrug-resistant organisms such as MRSA, ESBL-producing Gram-negatives and Clostridioides difficile are of particular concern." },
      { h: "Prevention: the infection-control bundle", list: [
        "Hand hygiene at the WHO 'five moments' — the single most important measure.",
        "Standard precautions for all patients; transmission-based (contact, droplet, airborne) precautions and isolation as indicated.",
        "Aseptic technique for all invasive procedures and wound care; care bundles for catheters, lines and ventilators.",
        "Early removal of unnecessary catheters and cannulas.",
        "Correct cleaning, disinfection and sterilization of equipment and environment.",
        "Safe injection and sharps practice, safe waste disposal, staff immunization and antimicrobial stewardship."
      ] },
      { h: "Surveillance and the infection-control team", p: "Hospitals conduct surveillance — systematic monitoring of infection rates — to detect trends and outbreaks and evaluate interventions, guided by an infection prevention and control team and written policies. Outbreak investigation identifies source and mode of spread so control can be targeted. Every staff member, especially bedside nurses, is accountable for compliance and for reporting suspected infections." },
      { h: "Nursing relevance", p: "Nurses are the front line against HAI: rigorous hand hygiene, aseptic device and wound care, prompt removal of unnecessary invasive devices, correct isolation and environmental cleaning, safe handling of specimens and sharps, and education of patients and visitors. Consistent practice of these measures directly reduces preventable infections, resistance and deaths." }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define healthcare-associated (nosocomial) infection and describe its impact.",
      "Who is the compromised host, and what factors increase HAI risk?",
      "List the common nosocomial infections and their device associations.",
      "Describe the sources and modes of spread of infection within a hospital.",
      "Outline the measures used to prevent, control and monitor hospital-acquired infection."
    ],
    assessment: [
      { type: "mcq", q: "A nosocomial infection is one that is:", options: ["Present on admission", "Acquired during care in a health facility (usually >48 h after admission)", "Always fatal", "Never preventable"], answer: 1, rationale: "HAIs are acquired during care and typically appear more than 48 hours after admission." },
      { type: "mcq", q: "The most common hospital-acquired infection is associated with:", options: ["Indwelling urinary catheters (CAUTI)", "Eye drops", "Oral tablets", "Bed linen"], answer: 0, rationale: "Catheter-associated urinary tract infection is the most common HAI." },
      { type: "mcq", q: "The single most important measure to prevent hospital-acquired infection is:", options: ["Antibiotics for all", "Hand hygiene", "Air freshener", "Bed rest"], answer: 1, rationale: "Hand hygiene at the recommended moments is the cornerstone of HAI prevention." },
      { type: "mcq", q: "A patient with weakened defences prone to infection is described as a:", options: ["Carrier", "Compromised host", "Vector", "Fomite"], answer: 1, rationale: "The compromised host has reduced defences and higher HAI risk." },
      { type: "mcq", q: "Bloodstream infections in hospital are most often related to:", options: ["Intravascular lines/cannulas", "Oral feeding", "Walking", "Eye drops"], answer: 0, rationale: "Central and peripheral intravascular devices are common sources of bacteraemia." },
      { type: "mcq", q: "Within a hospital, infection spreads mainly by:", options: ["Sunlight", "The hands of health workers (contact)", "Wind", "Water pipes only"], answer: 1, rationale: "Contact spread via contaminated hands is the dominant route of HAI." },
      { type: "mcq", q: "MRSA and ESBL-producing organisms are important because they are:", options: ["Harmless commensals", "Multidrug-resistant and hard to treat", "Viruses", "Fungi"], answer: 1, rationale: "These multidrug-resistant organisms complicate treatment and demand strict control." },
      { type: "mcq", q: "A key way to reduce CAUTI is to:", options: ["Leave catheters in as long as possible", "Remove catheters as early as clinically possible", "Open the drainage system frequently", "Raise the bag above the bladder"], answer: 1, rationale: "Early removal and closed aseptic catheter care reduce CAUTI." },
      { type: "mcq", q: "Systematic monitoring of infection rates to detect trends and outbreaks is called:", options: ["Surveillance", "Sterilization", "Vaccination", "Culture"], answer: 0, rationale: "Surveillance tracks infection rates to guide and evaluate control measures." },
      { type: "mcq", q: "Precautions applied in addition to standard precautions for specific spread routes are called:", options: ["Transmission-based precautions", "Cold-chain precautions", "Financial precautions", "Optional precautions"], answer: 0, rationale: "Contact, droplet and airborne (transmission-based) precautions supplement standard precautions." },
      { type: "fill", q: "An infection acquired in a health facility is called a ______ (hospital-acquired) infection.", accept: ["nosocomial"], rationale: "Nosocomial = healthcare-associated (hospital-acquired) infection." },
      { type: "fill", q: "Catheter-associated urinary tract infection is abbreviated ______.", accept: ["cauti"], rationale: "CAUTI is the leading device-related nosocomial infection." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "mib-14-lab-diagnosis",
    unit: "Unit 5 · Infection Control & Diagnosis",
    title: "Specimen Collection, Transport & Laboratory Diagnosis",
    readMinutes: 17,
    summary: "Principles and errors of specimen collection and transport, the types of microbiological specimen, the diagnostic pathway of microscopy, culture and identification, antibiotic sensitivity testing, and serological and molecular methods, with the nurse's responsibilities emphasised.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose and importance", p: "Accurate laboratory diagnosis identifies the causative microbe and guides targeted treatment, replacing empirical guesswork. Because nurses usually collect specimens, their technique largely determines the validity of the result: a contaminated, mislabelled, insufficient or delayed specimen yields misleading findings and may cause wrong or harmful treatment." },
      { h: "Principles of specimen collection", list: [
        "Collect the appropriate specimen for the suspected infection, at the right time (e.g. blood culture during fever spikes).",
        "Collect BEFORE antimicrobial therapy where possible, so the organism can still be recovered.",
        "Use aseptic technique and a suitable sterile container; avoid contamination with normal flora.",
        "Collect an adequate quantity, representative of the infected site.",
        "Label completely (patient identity, site, date/time) and complete the request form with clinical details."
      ] },
      { h: "Transport and safety", p: "Specimens should reach the laboratory promptly; delay allows overgrowth of contaminants, death of fragile pathogens, or unreliable counts. When delay is unavoidable, appropriate transport media and storage conditions are used (e.g. refrigeration for urine, ambient for certain fastidious organisms). All specimens are handled as potentially infectious under standard precautions, with leak-proof containers and biohazard bags." },
      { h: "Types of microbiological specimen", list: [
        "Swabs — nose, throat, wound, ulcer, eye, cervix.",
        "Sputum — deep cough sample, e.g. for acid-fast bacilli in TB.",
        "Urine — clean-catch midstream sample for culture and colony count.",
        "Stool (faeces) — for bacterial pathogens and for ova, cysts and parasites.",
        "Blood — blood culture for suspected bacteraemia; serum for serology.",
        "Other fluids — cerebrospinal fluid for meningitis, pus, aspirates."
      ] },
      { h: "The diagnostic pathway", p: "Laboratory diagnosis proceeds through direct examination, culture and then identification/sensitivity.", figure: {
        caption: "From specimen to targeted therapy: microscopy, culture, identification, sensitivity.",
        svg: '<svg viewBox="0 0 640 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagnostic pathway"><defs><marker id="mibA14" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Specimen","Microscopy","Culture","Identification + sensitivity"].map(function(t,i){var x=6+i*158;return "<rect x=\'"+x+"\' y=\'22\' width=\'146\' height=\'40\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+73)+"\' y=\'46\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'10\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<3?"<line x1=\'"+(x+146)+"\' y1=\'42\' x2=\'"+(x+158)+"\' y2=\'42\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA14)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "Microscopy and culture", p: "Direct microscopy of a stained smear (Gram stain, Ziehl-Neelsen for TB) or a wet mount (for parasites/motility) gives a rapid provisional result, e.g. 'Gram-positive cocci in clusters' or 'acid-fast bacilli seen'. Culture then grows the organism on suitable media — general, enriched, selective or differential — under appropriate atmosphere and temperature, producing colonies for study. Culture takes time (often 24-48 hours, longer for TB), which is why microscopy is valued for early guidance." },
      { h: "Identification, sensitivity and other methods", p: "The isolate is identified by colony morphology, staining, and biochemical reactions; antibiotic sensitivity testing (e.g. disc diffusion) then shows which drugs are effective, allowing targeted therapy. Serological tests detect antibodies or antigens in the patient's serum (useful when the organism is hard to culture, e.g. some viral infections and syphilis), and molecular methods such as PCR detect microbial nucleic acid rapidly and with high sensitivity (e.g. rapid TB and viral diagnostics)." },
      { h: "Nursing relevance", p: "The nurse's correct practice — the right specimen, collected aseptically at the right time before antibiotics, in the correct container, adequately labelled, promptly and safely transported, with the patient's dignity and everyone's safety protected — is decisive in whether the laboratory can identify the microbe and direct effective, targeted treatment." }
    ],
    references: REF_MIB,
    examQuestions: [
      "State the principles of correct microbiological specimen collection.",
      "Why must specimens be transported promptly and handled safely?",
      "List the types of microbiological specimen with an indication for each.",
      "Describe the diagnostic pathway from microscopy to sensitivity testing.",
      "Outline serological and molecular methods of diagnosis and the nurse's responsibilities."
    ],
    assessment: [
      { type: "mcq", q: "For accurate culture, specimens should ideally be collected:", options: ["After several antibiotic doses", "Before antibiotics are started", "Only at discharge", "After recovery"], answer: 1, rationale: "Collecting before antibiotics allows the organism to be recovered and identified." },
      { type: "mcq", q: "To diagnose tuberculosis, the usual specimen and stain are:", options: ["Urine, Gram stain", "Sputum, Ziehl-Neelsen (acid-fast)", "Stool, wet mount", "Blood, Giemsa"], answer: 1, rationale: "Sputum is stained by Ziehl-Neelsen to demonstrate acid-fast bacilli." },
      { type: "mcq", q: "A rapid provisional result before culture is obtained by:", options: ["Microscopy of a stained smear", "Sensitivity testing", "Waiting 48 hours", "Serology only"], answer: 0, rationale: "Direct microscopy gives an immediate provisional finding to guide early therapy." },
      { type: "mcq", q: "Growing an organism on nutrient media to obtain colonies is called:", options: ["Microscopy", "Culture", "Staining", "Filtration"], answer: 1, rationale: "Culture propagates the organism into colonies for identification and testing." },
      { type: "mcq", q: "A clean-catch midstream sample is collected for culture of:", options: ["Sputum", "Stool", "Urine", "Blood"], answer: 2, rationale: "A midstream urine sample minimises contamination for urine culture and colony count." },
      { type: "mcq", q: "The test showing which antibiotics will work against an isolate is:", options: ["Gram stain", "Colony count only", "Pasteurization", "Antibiotic sensitivity testing (e.g. disc diffusion)"], answer: 3, rationale: "Sensitivity testing reports the isolate as sensitive or resistant to each drug." },
      { type: "mcq", q: "Detection of microbial nucleic acid for rapid, sensitive diagnosis uses:", options: ["Gram stain", "PCR (molecular method)", "Boiling", "Colony morphology"], answer: 1, rationale: "PCR amplifies and detects microbial DNA/RNA rapidly with high sensitivity." },
      { type: "mcq", q: "Suspected meningitis is investigated by examining:", options: ["Sputum", "Urine only", "Cerebrospinal fluid (CSF)", "Stool"], answer: 2, rationale: "CSF is examined by microscopy, culture and molecular tests for meningitis." },
      { type: "mcq", q: "Serological tests are especially useful when the organism is:", options: ["Easy to culture", "Difficult to culture (detect antibodies/antigens instead)", "A large worm", "Visible to the eye"], answer: 1, rationale: "Serology detects the immune response or antigen when culture is difficult (e.g. some viruses, syphilis)." },
      { type: "mcq", q: "All microbiological specimens must be handled as:", options: ["Harmless", "Reusable", "Food", "Potentially infectious under standard precautions"], answer: 3, rationale: "Standard precautions require treating every specimen as potentially infectious." },
      { type: "fill", q: "Growing microbes on a nutrient medium to identify them is called ______.", accept: ["culture"], rationale: "Culture grows the organism for identification and sensitivity testing." },
      { type: "fill", q: "The molecular method that detects microbial nucleic acid by amplification is ______.", accept: ["pcr", "polymerase chain reaction"], rationale: "PCR (polymerase chain reaction) rapidly detects microbial DNA/RNA." }
    ]
  }
];
