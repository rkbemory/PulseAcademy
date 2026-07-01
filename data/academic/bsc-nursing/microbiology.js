/* ============================================================
   B.Sc. in Nursing (2018) · Year 1 · B134 Paper-II Microbiology
   — 14 topics. Degree-level (deepened to advanced textbook depth)
   adaptation of the diploma Microbiology & Parasitology base,
   with mechanism, immunology, laboratory diagnosis and
   antimicrobial resistance. Aligned to the BNMC 4-year B.Sc.
   syllabus (B134-II · Theory 72 h / Lab 32 h).
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
    readMinutes: 25,
    summary: "The scope, branches and historical development of microbiology; the germ theory and Koch's postulates; the size scale and three-domain classification of the microbial world; normal flora versus pathogens and colonisation resistance; emerging and re-emerging infections; the key measurements of the discipline; and the scientific relevance of microbiology to professional nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and scope", p: "Microbiology is the science of micro-organisms — living forms too small to be seen with the unaided eye, generally below about 0.1 mm (100 micrometres), the practical limit of the naked eye. It embraces bacteria, viruses, fungi, protozoa, helminths (studied under medical parasitology) and prions. Medical microbiology studies the micro-organisms that cause human disease — their morphology, physiology, mechanisms of pathogenesis, the host defences ranged against them, laboratory diagnosis, treatment and prevention. For the nurse it supplies the scientific rationale for every element of asepsis, sterilization, immunization, specimen collection and rational antimicrobial use." },
      { h: "The size scale of microbes", p: "Micro-organisms span several orders of magnitude. A typical bacterium is about 1-5 micrometres (a coccus roughly 1 um, a bacillus 2-5 um long); a red blood cell is about 7 um for comparison. Fungi and protozoa are larger eukaryotic cells (5-50 um). Viruses are far smaller, about 20-300 nanometres (0.02-0.3 um), below the resolution of the light microscope (0.2 um). This scale explains why bacteria and larger microbes are seen by light microscopy while viruses require the electron microscope, and it underlies the choice of the 0.22 um sterilising filter that retains bacteria but not all viruses." },
      { h: "Branches of microbiology", list: [
        "Bacteriology — study of bacteria and bacterial disease.",
        "Virology — study of viruses and viral disease.",
        "Mycology — study of fungi and mycoses.",
        "Parasitology — study of protozoa, helminths and arthropod vectors.",
        "Immunology — study of host defence mechanisms and their disorders.",
        "Microbial genetics & genomics — inheritance, mutation, gene transfer and genetic engineering in microbes.",
        "Chemotherapy — the use of antimicrobial drugs against microbes.",
        "Epidemiology — distribution, determinants and control of infection in populations."
      ] },
      { h: "Historical development", p: "Antony van Leeuwenhoek (1670s) first observed 'animalcules' with simple single-lens microscopes reaching about 200-300x. Louis Pasteur disproved spontaneous generation with his swan-neck flask experiments, developed pasteurization, and produced the earliest attenuated vaccines (fowl cholera, anthrax, rabies). Robert Koch introduced solid culture media (with agar, suggested by Fanny Hesse), pure-culture technique, staining, and identified the causative organisms of anthrax (1876), tuberculosis (1882) and cholera (1883). Joseph Lister founded antiseptic surgery using carbolic acid; Edward Jenner had earlier pioneered smallpox vaccination (1796); Alexander Fleming discovered penicillin (1928), opening the antibiotic era." },
      { h: "The germ theory of disease", p: "The germ theory holds that specific micro-organisms (germs) are the cause of specific communicable diseases, displacing older ideas of 'miasma' (bad air) and spontaneous generation. Established through the combined work of Pasteur, Koch and Lister in the second half of the nineteenth century, it is the single foundational idea of medical microbiology: it justifies the search for a causative organism in every infection and every rational measure to interrupt its spread." },
      { h: "Koch's postulates", p: "Koch's postulates are the classical criteria for proving that a particular microbe causes a particular disease.", figure: {
        caption: "Koch's postulates — the four criteria for proving a microbe causes a disease.",
        svg: '<svg viewBox="0 0 640 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Koch postulates: found in diseased hosts, isolated in pure culture, reproduces disease, re-isolated."><defs><marker id="mibA1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Organism found in all cases","Isolated in pure culture","Reproduces disease in host","Re-isolated from that host"].map(function(t,i){var x=6+i*158;return "<rect x=\'"+x+"\' y=\'24\' width=\'146\' height=\'44\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+73)+"\' y=\'50\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'10.5\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<3?"<line x1=\'"+(x+146)+"\' y1=\'46\' x2=\'"+(x+158)+"\' y2=\'46\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA1)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "Limitations of Koch's postulates", p: "The postulates cannot be satisfied for every pathogen. Some organisms cannot yet be grown in pure culture on artificial media (e.g. Mycobacterium leprae, Treponema pallidum); some viruses require living cells; some infections are caused by mixed flora or need a susceptible animal that does not exist; and asymptomatic carriers harbour organisms without disease. Modern molecular criteria (detecting a microbe's nucleic acid consistently in disease) supplement the classical postulates." },
      { h: "Three-domain classification of the microbial world", p: "Living things are grouped into three domains — Bacteria and Archaea (both prokaryotic) and Eukarya (fungi, protozoa, helminths, plants, animals). Prokaryotes lack a membrane-bound nucleus and organelles and have 70S ribosomes; eukaryotes possess a true nucleus, membrane-bound organelles and 80S ribosomes. Viruses are acellular and are not placed in these domains. This classification explains why antibiotics selectively harm bacteria (prokaryotic targets such as peptidoglycan and the 70S ribosome) but spare human cells and do not act on viruses." },
      { h: "Normal flora and pathogens", p: "The human body carries a vast resident microbiota (normal flora) on skin and mucosae and in the gut, estimated to number as many cells as the body itself. It aids digestion, synthesises vitamin K and B-group vitamins, and resists colonisation by pathogens (colonisation resistance). A pathogen is a microbe capable of causing disease; an opportunistic pathogen causes disease only when host defences fall or normal flora are displaced — for example Candida overgrowth or Clostridioides difficile colitis after broad-spectrum antibiotics. Understanding this balance underpins infection control and antibiotic stewardship." },
      { h: "Infectious disease and its patterns", p: "An infection is the establishment and multiplication of a microbe in the host; disease results when this causes recognisable harm. Infections may be localised or systemic, acute or chronic, and are described epidemiologically as endemic (constantly present in an area, e.g. tuberculosis in Bangladesh), epidemic (a sudden excess above the expected, e.g. cholera outbreaks) or pandemic (spread across countries and continents, e.g. COVID-19). These patterns direct surveillance and public-health response." },
      { h: "Emerging and re-emerging infections", p: "New and resurgent infectious threats — HIV/AIDS, Ebola and other viral haemorrhagic fevers, novel influenza and coronaviruses (SARS, MERS, COVID-19), and multidrug-resistant tuberculosis — arise from factors such as urbanisation, international travel, zoonotic spillover from animals, ecological and climate change, and antimicrobial misuse. In Bangladesh, tuberculosis, cholera, typhoid, hepatitis, dengue and kala-azar remain of major public-health importance, and antimicrobial resistance is a growing emerging threat." },
      { h: "Clinical relevance to nursing practice", p: "Microbiology gives nurses the evidence base for hand hygiene, standard and transmission-based precautions, sterilization and disinfection, safe specimen collection, immunization and the cold chain, and antimicrobial stewardship. Every action that breaks the chain of infection rests on microbiological understanding. Because nurses spend more time at the bedside than any other professional, their practice is decisive in preventing healthcare-associated infection." },
      { h: "Key values and figures", list: [
        "Naked-eye limit ~0.1 mm (100 um); light-microscope resolution ~0.2 um.",
        "Typical bacterium 1-5 um; virus 20-300 nm; red cell ~7 um.",
        "Three domains: Bacteria, Archaea (prokaryotic), Eukarya.",
        "Ribosomes: prokaryotic 70S, eukaryotic 80S — basis of selective toxicity.",
        "Koch: anthrax 1876, tuberculosis 1882, cholera 1883; Fleming penicillin 1928."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define microbiology and describe its main branches with the size scale of the microbial world.",
      "Outline the contributions of Pasteur, Koch and Lister to the germ theory of disease.",
      "State Koch's postulates and explain their limitations.",
      "Differentiate normal flora and pathogens, and explain colonisation resistance and opportunistic infection.",
      "Discuss the relevance of microbiology to professional nursing practice with examples."
    ],
    assessment: [
      { type: "mcq", q: "A patient's laboratory report notes bacteria are prokaryotic. This is clinically useful mainly because it explains why:", options: ["Antibiotics can target bacterial structures while sparing human cells", "Bacteria cannot cause disease", "Antibiotics work on viruses too", "Bacteria are eukaryotic"], answer: 0, rationale: "Prokaryotic targets (peptidoglycan wall, 70S ribosomes) differ from human eukaryotic cells, allowing selective toxicity." },
      { type: "mcq", q: "The scientist who introduced solid culture media, pure-culture technique and identified the tubercle bacillus was:", options: ["Louis Pasteur", "Edward Jenner", "Robert Koch", "Joseph Lister"], answer: 2, rationale: "Robert Koch pioneered solid media, pure cultures and identified M. tuberculosis (1882) and other agents." },
      { type: "mcq", q: "A researcher cannot culture Mycobacterium leprae on artificial media. This is an example of a case where:", options: ["The germ theory is disproved", "Koch's postulates cannot all be fulfilled", "The organism is not a pathogen", "No microbe is involved"], answer: 1, rationale: "Some pathogens (M. leprae, T. pallidum, viruses) cannot be grown in pure culture, a recognised limitation of Koch's postulates." },
      { type: "mcq", q: "Bacteria and Archaea are grouped in separate domains from Eukarya chiefly because they:", options: ["Are eukaryotic", "Are acellular", "Are larger", "Lack a membrane-bound nucleus (are prokaryotic)"], answer: 3, rationale: "Both are prokaryotic, lacking a membrane-bound nucleus and organelles, unlike Eukarya." },
      { type: "mcq", q: "A ward sees a sudden excess of cholera cases far above the usual level. Epidemiologically this is best termed:", options: ["Endemic", "Epidemic", "Sporadic", "Pandemic"], answer: 1, rationale: "An epidemic is a sudden rise in cases above the expected baseline in an area." },
      { type: "mcq", q: "After broad-spectrum antibiotics a patient develops oral thrush. This illustrates:", options: ["A highly virulent primary pathogen", "Opportunistic infection after disturbance of normal flora", "Sterilization failure", "A viral infection"], answer: 1, rationale: "Suppressing normal flora removes colonisation resistance, letting opportunists such as Candida overgrow." },
      { type: "mcq", q: "The approximate limit of resolution of the light microscope, which sets what microbes can be seen, is:", options: ["2 mm", "20 um", "0.2 um", "0.2 nm"], answer: 2, rationale: "Light microscopy resolves to about 0.2 um; smaller viruses need electron microscopy." },
      { type: "mcq", q: "Which best represents an EMERGING or re-emerging infectious threat relevant today?", options: ["Multidrug-resistant tuberculosis and novel coronaviruses", "A closed fracture", "Iron-deficiency anaemia", "Type 1 diabetes"], answer: 0, rationale: "MDR-TB and novel coronaviruses are classic emerging/re-emerging infectious threats." },
      { type: "mcq", q: "The germ theory of disease specifically replaced the older idea that disease arose from:", options: ["Prokaryotic cells", "Antibodies", "'Miasma' or spontaneous generation", "Normal flora"], answer: 2, rationale: "The germ theory displaced miasma and spontaneous-generation explanations of disease." },
      { type: "mcq", q: "The nursing action most directly grounded in microbiology to interrupt cross-infection is:", options: ["Charting fluid balance", "Hand hygiene", "Measuring blood pressure", "Bed making"], answer: 1, rationale: "Hand hygiene interrupts contact transmission and is the cornerstone of infection prevention." },
      { type: "fill", q: "The theory stating that specific microbes cause specific diseases is the ______ theory of disease.", accept: ["germ"], rationale: "The germ theory, established by Pasteur, Koch and Lister, links specific microbes to specific diseases." },
      { type: "fill", q: "Micro-organisms lacking a membrane-bound nucleus and having 70S ribosomes are called ______.", accept: ["prokaryotes", "prokaryote", "prokaryotic"], rationale: "Prokaryotes (bacteria, archaea) lack a true nucleus and have 70S ribosomes." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "mib-02-microscopy-staining",
    unit: "Unit 1 · Foundations of Microbiology",
    title: "Microscopy, Staining & Structure of the Microbial Cell",
    readMinutes: 25,
    summary: "Principles of light and electron microscopy, magnification and resolution with the physics of numerical aperture and the oil-immersion lens, the specialised microscopes, smear preparation, simple and differential staining (Gram and Ziehl-Neelsen) with full mechanisms, negative and special stains, and the comparative structure of prokaryotic and eukaryotic microbial cells.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why microscopy is essential", p: "Most micro-organisms lie below the resolving power of the human eye and must be magnified to reveal size, shape, arrangement and internal structure. Microscopy remains a rapid, low-cost first step in diagnosing infection — for example demonstrating acid-fast bacilli in sputum, Gram-negative diplococci in cerebrospinal fluid, or malarial parasites in a blood film — and is central to laboratory identification worldwide, especially where molecular tests are unavailable." },
      { h: "Magnification versus resolution", p: "Magnification is the degree of apparent enlargement, calculated as eyepiece power multiplied by objective power (for example 10x eyepiece x 100x objective = 1000x total). Resolution (resolving power) is the ability to distinguish two adjacent points as separate and determines the true detail seen. Empty (excess) magnification without adequate resolution merely produces a larger but blurred image, so resolution — not magnification — is the true measure of a microscope's usefulness." },
      { h: "The physics of resolution", p: "Resolution improves with a shorter wavelength of illumination and a higher numerical aperture (NA) of the lens; the limit of resolution equals approximately 0.61 x wavelength divided by numerical aperture. Because visible light has a wavelength of about 400-700 nm, the best light-microscope resolution is about 0.2 micrometre. The electron microscope, using an electron beam of far shorter wavelength, achieves resolution down to a fraction of a nanometre." },
      { h: "The compound light microscope and oil immersion", p: "The compound light microscope passes visible light through a thin specimen, condenser and two lens systems (objective and eyepiece). The 100x oil-immersion objective uses immersion oil, whose refractive index (~1.5) matches that of glass, placed between the slide and the lens. This prevents light rays bending (refracting) away from the objective and being lost, raising the numerical aperture (to about 1.25-1.4) and giving the resolution needed to see bacteria clearly at 1000x." },
      { h: "Specialised light microscopes", list: [
        "Dark-field — bright organisms on a dark background; used for thin spirochaetes such as Treponema pallidum that stain poorly.",
        "Phase-contrast — visualises living, unstained cells by converting differences in refractive index into contrast; used to study motility and internal structure.",
        "Fluorescence — uses fluorochromes or fluorescent antibodies (e.g. auramine-rhodamine for TB, immunofluorescence for viruses).",
        "Electron microscopy (TEM/SEM) — uses an electron beam under vacuum; resolution to a fraction of a nanometre, enabling visualisation of viruses and fine cell ultrastructure."
      ] },
      { h: "Preparing a smear", p: "Before staining, the specimen is spread thinly on a clean slide to make a smear, allowed to air-dry, and then heat-fixed by passing it through a flame two or three times (or fixed with methanol). Heat fixation kills and adheres the organisms to the slide, coagulates cytoplasm to preserve morphology, and prevents the cells from washing off during staining. A smear that is too thick or unfixed gives a poor, misleading result." },
      { h: "Staining: principles and types", p: "Because microbes are nearly colourless and low in contrast, they are stained to be seen and classified. Basic dyes (e.g. methylene blue, crystal violet, safranin) carry a positive charge and bind the negatively charged bacterial cell, so most bacteriological stains are basic. Simple stains use a single dye to show morphology and arrangement; differential stains use more than one reagent to separate microbes into groups (Gram, acid-fast); special stains demonstrate particular structures (capsule, spore, flagella); and negative staining outlines the cell against a dark background." },
      { h: "The Gram stain — steps and mechanism", p: "The Gram stain is the most important bacteriological stain. Crystal violet (primary dye) is fixed by Gram's iodine (mordant) as a large dye-iodine complex within the cell. Alcohol or acetone (decolouriser) dehydrates the thick, multilayered peptidoglycan of Gram-positive walls, closing its pores and trapping the complex so they stay purple; the thin peptidoglycan and lipid-rich outer membrane of Gram-negative bacteria are disrupted by the solvent, allowing the complex to wash out, so they take the safranin counterstain and appear pink/red. The result guides identification and empirical antibiotic choice.", figure: {
        caption: "Gram stain sequence: crystal violet, iodine mordant, decolourise, safranin counterstain.",
        svg: '<svg viewBox="0 0 640 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gram stain steps"><defs><marker id="mibA2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Crystal violet","Iodine (mordant)","Alcohol decolourise","Safranin counterstain"].map(function(t,i){var x=6+i*158;return "<rect x=\'"+x+"\' y=\'22\' width=\'146\' height=\'40\' rx=\'8\' fill=\'#F0FDF4\' stroke=\'#22C55E\'/><text x=\'"+(x+73)+"\' y=\'46\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'10.5\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<3?"<line x1=\'"+(x+146)+"\' y1=\'42\' x2=\'"+(x+158)+"\' y2=\'42\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA2)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "Interpreting the Gram reaction", p: "A Gram film reports both colour and morphology, e.g. 'Gram-positive cocci in clusters' (suggesting Staphylococcus), 'Gram-positive cocci in chains' (Streptococcus), 'Gram-negative diplococci' (Neisseria) or 'Gram-negative bacilli' (enteric rods). Over-decolourisation can make Gram-positive cells appear falsely Gram-negative, and old cultures may lose the reaction — so technique and fresh smears matter. This early information often directs the first ('empirical') antibiotic before culture is available." },
      { h: "The acid-fast (Ziehl-Neelsen) stain", p: "Mycobacteria have a waxy, mycolic-acid-rich wall that resists ordinary staining. In the Ziehl-Neelsen method carbol fuchsin is driven into the wall with heat, the smear then resists decolourisation by acid-alcohol (hence 'acid-fast') and retains the red stain, while other organisms are decolourised and counterstained blue by methylene blue. Acid-fast bacilli appear as red rods against a blue background. Demonstrating them in sputum is a key, low-cost diagnostic step for tuberculosis in Bangladesh; auramine fluorescence is a more sensitive alternative." },
      { h: "Negative and special stains", p: "Negative staining uses an acidic dye (India ink, nigrosin) that is repelled by the cell and stains the background, leaving the cell unstained and visible in outline — useful for demonstrating capsules (e.g. Cryptococcus in cerebrospinal fluid) without heat distortion. Special stains include capsule stains, endospore stains (malachite green with heat to penetrate the spore coat) and flagella stains, each demonstrating a structure important for identification or virulence." },
      { h: "Comparative cell structure", p: "Prokaryotic (bacterial) cells have a peptidoglycan cell wall, a plasma membrane, 70S ribosomes and a single circular chromosome in a nucleoid with no nuclear membrane, and lack membrane-bound organelles. Eukaryotic microbial cells (fungi, protozoa) have a membrane-bound nucleus, 80S ribosomes and organelles (mitochondria, endoplasmic reticulum, Golgi); fungal walls contain chitin rather than peptidoglycan. These structural differences are the basis of selective antimicrobial action and of staining behaviour.", figure: {
        caption: "Prokaryotic versus eukaryotic cell: nucleus, ribosome type and organelles.",
        svg: '<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prokaryotic versus eukaryotic cell"><rect x="20" y="24" width="220" height="80" rx="12" fill="#DCFCE7" stroke="#15803D"/><text x="130" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Prokaryote</text><text x="130" y="64" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">no true nucleus</text><text x="130" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">70S ribosomes</text><text x="130" y="96" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">peptidoglycan wall</text><rect x="280" y="24" width="220" height="80" rx="12" fill="#F0FDF4" stroke="#22C55E"/><text x="390" y="44" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Eukaryote</text><text x="390" y="64" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">membrane-bound nucleus</text><text x="390" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">80S ribosomes, organelles</text><text x="390" y="96" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">chitin wall (fungi)</text></svg>'
      } },
      { h: "Clinical and nursing relevance", p: "Nurses encounter microscopy results daily in laboratory reports and must collect specimens correctly so a valid smear can be made — for tuberculosis they collect a good deep-cough sputum (not saliva) for acid-fast staining. Understanding that a Gram film gives a same-hour provisional result helps the nurse appreciate why specimens are taken before antibiotics and why prompt transport matters. Recognising terms such as 'acid-fast bacilli seen' or 'Gram-negative diplococci' helps the nurse anticipate the likely diagnosis and precautions." },
      { h: "Key values and figures", list: [
        "Total magnification = eyepiece x objective (10 x 100 = 1000x).",
        "Light-microscope resolution ~0.2 um; oil-immersion NA ~1.25-1.4.",
        "Immersion oil refractive index ~1.5, matching glass.",
        "Gram sequence: crystal violet, iodine, decolourise, safranin.",
        "Ziehl-Neelsen: carbol fuchsin (heat), acid-alcohol, methylene blue counterstain.",
        "Ribosomes: 70S prokaryotic, 80S eukaryotic."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Differentiate magnification and resolution, and explain how numerical aperture and the oil-immersion lens improve resolution.",
      "List the specialised light microscopes and the electron microscope with a use of each.",
      "Describe the steps and mechanism of the Gram stain and how the result is interpreted.",
      "Explain the principle of the Ziehl-Neelsen stain and its clinical importance in Bangladesh.",
      "Compare the structure of prokaryotic and eukaryotic microbial cells."
    ],
    assessment: [
      { type: "mcq", q: "A trainee increases magnification to 2000x but the image only becomes larger and blurred. The limiting factor is:", options: ["Resolution, not magnification", "Too little oil", "The eyepiece colour", "The slide thickness only"], answer: 0, rationale: "Beyond the resolution limit, extra magnification is 'empty' — larger but no clearer." },
      { type: "mcq", q: "Immersion oil is placed on the slide for the 100x objective in order to:", options: ["Cool the lens", "Colour the specimen", "Prevent light refracting away and raise numerical aperture", "Kill the bacteria"], answer: 2, rationale: "Oil matches the refractive index of glass, so more light enters the lens, raising NA and resolution." },
      { type: "mcq", q: "The best resolution of a light microscope is about 0.2 um mainly because it is set by:", options: ["The eyepiece power", "The wavelength of visible light", "The stage size", "The slide colour"], answer: 1, rationale: "Resolution depends on wavelength; visible light (~400-700 nm) limits resolution to ~0.2 um." },
      { type: "mcq", q: "In the Gram stain, Gram's iodine acts as the:", options: ["Primary dye", "Counterstain", "Mordant fixing the crystal violet complex", "Decolouriser"], answer: 2, rationale: "Iodine is the mordant, forming a large crystal-violet-iodine complex trapped in the cell." },
      { type: "mcq", q: "A Gram-negative organism loses the crystal-violet complex during decolourisation because its wall has:", options: ["Thick multilayered peptidoglycan", "Mycolic acid", "Thin peptidoglycan plus a lipid outer membrane", "No wall at all"], answer: 2, rationale: "The solvent disrupts the thin peptidoglycan and lipid-rich outer membrane, letting the dye wash out." },
      { type: "mcq", q: "A sputum report reads 'acid-fast bacilli seen'. This depends on a mycobacterial wall rich in:", options: ["Chitin", "Cellulose", "Peptidoglycan only", "Mycolic acid (waxy lipids)"], answer: 3, rationale: "Mycolic acids make the wall waxy and resistant to acid-alcohol decolourisation, so it retains carbol fuchsin." },
      { type: "mcq", q: "To view thin, poorly staining Treponema pallidum, the microscope of choice is:", options: ["Dark-field", "Ordinary bright-field", "Electron (SEM only)", "Hand lens"], answer: 0, rationale: "Dark-field shows thin spirochaetes as bright objects on a dark ground without staining." },
      { type: "mcq", q: "A capsule of Cryptococcus in CSF is best demonstrated by:", options: ["Heat-fixed Gram stain", "Negative staining with India ink", "Ziehl-Neelsen", "Flaming"], answer: 1, rationale: "Negative (India ink) staining outlines the unstained capsule against a dark background without heat distortion." },
      { type: "mcq", q: "Heat-fixing a smear before staining primarily serves to:", options: ["Magnify the cells", "Add colour to the cells", "Kill and adhere organisms and preserve morphology", "Dissolve the wall"], answer: 2, rationale: "Heat fixation kills the microbes, attaches them to the slide and preserves their shape." },
      { type: "mcq", q: "A report of 'Gram-positive cocci in clusters' most suggests:", options: ["Streptococcus", "Neisseria", "Staphylococcus", "Enteric Gram-negative rods"], answer: 2, rationale: "Grape-like clusters of Gram-positive cocci are characteristic of Staphylococcus." },
      { type: "fill", q: "The counterstain used in the Gram stain, giving Gram-negative bacteria a pink colour, is ______.", accept: ["safranin"], rationale: "Safranin counterstains decolourised Gram-negative cells pink/red." },
      { type: "fill", q: "Total magnification equals eyepiece power multiplied by ______ power.", accept: ["objective", "objective lens"], rationale: "Total magnification = eyepiece x objective (e.g. 10 x 100 = 1000x)." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "mib-03-bacteria",
    unit: "Unit 2 · The Microbial Agents",
    title: "Bacteria — Structure, Growth, Genetics & Common Pathogens",
    readMinutes: 26,
    summary: "Detailed bacterial anatomy and the function of each component, classification by shape and Gram reaction, binary fission and the four-phase growth curve with generation time, requirements and atmospheric classification for growth, endospores, genetic variation and horizontal transfer of resistance, and the common bacterial pathogens of Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and general features", p: "Bacteria are unicellular prokaryotes lacking a membrane-bound nucleus. They range from about 0.2 to several micrometres, occur almost everywhere, and include commensals, opportunists and frank pathogens. Most bacterial infections are treatable with antibiotics, but their rapid multiplication (generation time as short as ~20 minutes) and capacity for genetic change underlie both acute infection and the rise of resistance." },
      { h: "The cell wall and Gram reaction", p: "The peptidoglycan (murein) cell wall gives shape and rigidity and resists osmotic lysis; it is the target of penicillins and cephalosporins and the basis of the Gram reaction. The Gram-positive wall is a thick, multilayered peptidoglycan (with teichoic acids); the Gram-negative wall has thin peptidoglycan plus an outer membrane containing lipopolysaccharide (LPS, endotoxin), with a periplasmic space between. This difference explains staining, antibiotic susceptibility and the pyrogenic endotoxin of Gram-negative sepsis." },
      { h: "Structure and function of components", list: [
        "Plasma membrane — selective barrier and site of energy generation (bacteria lack mitochondria).",
        "Cytoplasm with 70S ribosomes — site of protein synthesis; target of aminoglycosides, tetracyclines and macrolides.",
        "Nucleoid — single circular chromosome with no nuclear membrane.",
        "Plasmids — small extra-chromosomal DNA circles that often carry resistance and virulence genes.",
        "Capsule/slime layer — polysaccharide coat that resists phagocytosis (a virulence factor; basis of some vaccines).",
        "Flagella — provide motility (and are antigenic, the H antigen); pili/fimbriae aid adhesion and the sex pilus mediates conjugation.",
        "Endospores — dormant, highly resistant forms produced by Bacillus and Clostridium.",
        "Inclusion granules — stored food reserves (e.g. volutin/metachromatic granules of Corynebacterium)."
      ] },
      { h: "Classification by shape and arrangement", p: "Bacteria are grouped morphologically as cocci (spherical), bacilli (rods) and spiral forms, with characteristic arrangements arising from the plane of division: cocci occur in pairs (diplococci), chains (streptococci) or grape-like clusters (staphylococci); spiral forms include comma-shaped vibrios, rigid spirilla and flexible spirochaetes.", figure: {
        caption: "Bacterial morphology: cocci (pairs/chains/clusters), bacilli (rods) and spiral forms.",
        svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bacterial shapes"><circle cx="55" cy="42" r="11" fill="#15803D"/><circle cx="82" cy="42" r="11" fill="#15803D"/><circle cx="68" cy="66" r="11" fill="#15803D"/><text x="70" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Cocci</text><rect x="200" y="34" width="34" height="13" rx="6" fill="#22C55E"/><rect x="200" y="54" width="34" height="13" rx="6" fill="#22C55E"/><rect x="244" y="44" width="34" height="13" rx="6" fill="#22C55E"/><text x="238" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Bacilli</text><path d="M360,55 q12,-20 24,0 q12,20 24,0 q12,-20 24,0" fill="none" stroke="#0F4C3A" stroke-width="6" stroke-linecap="round"/><text x="408" y="102" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Spiral</text></svg>'
      } },
      { h: "Reproduction and generation time", p: "Bacteria multiply asexually by binary fission: the cell elongates, the chromosome replicates and separates, a septum forms and the cell divides into two identical daughters. The generation (doubling) time is the interval for the population to double — as short as about 20 minutes for E. coli under optimal conditions, but much longer for slow growers (Mycobacterium tuberculosis divides only every 15-20 hours), which is why TB cultures take weeks and treatment lasts months." },
      { h: "The bacterial growth curve", p: "In a closed (batch) culture growth follows four phases that shape infection and food spoilage.", figure: {
        caption: "The four phases of the bacterial growth curve.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bacterial growth curve"><line x1="40" y1="120" x2="500" y2="120" stroke="#0F4C3A" stroke-width="1.5"/><line x1="40" y1="120" x2="40" y2="20" stroke="#0F4C3A" stroke-width="1.5"/><path d="M40,110 L110,108 Q150,105 175,55 L300,40 Q360,38 400,40 L470,95" fill="none" stroke="#15803D" stroke-width="3"/><text x="80" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Lag</text><text x="175" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Log</text><text x="350" y="30" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Stationary</text><text x="465" y="112" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Death</text><text x="18" y="70" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A" transform="rotate(-90 18 70)">log number</text></svg>'
      } },
      { h: "The four phases explained", p: "In the lag phase cells adapt and synthesise enzymes without dividing. In the log (exponential) phase division is maximal and constant; cells are metabolically active and most susceptible to cell-wall-active antibiotics, so this is when antibiotics work best. In the stationary phase nutrients fall and toxic waste accumulates, so new cells balance dying ones and spores may form. In the decline/death phase deaths exceed births. This kinetics explains why infection and food contamination escalate rapidly and why timely treatment matters." },
      { h: "Requirements and atmospheric classification", p: "Growth needs a source of carbon and energy, nitrogen, minerals, water, and appropriate temperature and pH. By oxygen need, bacteria are obligate aerobes, obligate anaerobes (e.g. Clostridium tetani, killed by oxygen), facultative anaerobes (e.g. E. coli, growing with or without oxygen), microaerophiles (need low oxygen, e.g. Helicobacter, Campylobacter) or aerotolerant. By temperature they are psychrophiles, mesophiles (most human pathogens, optimum ~37 C) or thermophiles; most pathogens are neutrophiles (optimum pH ~7). Knowing these needs informs culture, refrigeration of food and control." },
      { h: "Endospores and their significance", p: "When conditions become adverse, Bacillus and Clostridium species form endospores — metabolically dormant structures with a tough keratin-like coat, dipicolinic acid and calcium, and very low water content, that survive boiling, drying, many disinfectants and years of dormancy. They germinate when conditions improve. Spore resistance is why autoclaving (moist heat, 121 C at 15 psi for 15 minutes) is required for true sterilization, why boiling alone does not sterilize, and why tetanus follows contamination of wounds with soil spores." },
      { h: "Genetic variation and horizontal gene transfer", p: "Bacterial genetic change occurs by mutation and by horizontal gene transfer: transformation (uptake of free/naked DNA from the environment), transduction (transfer of DNA by a bacteriophage) and conjugation (plasmid transfer through a sex pilus during direct cell contact). Resistance and virulence genes carried on plasmids and transposons can therefore spread rapidly between organisms, even across species — the genetic engine of antimicrobial resistance that nurses help contain through stewardship and infection prevention.", figure: {
        caption: "Three modes of horizontal gene transfer in bacteria.",
        svg: '<svg viewBox="0 0 560 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gene transfer modes"><rect x="14" y="24" width="168" height="42" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="98" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Transformation</text><text x="98" y="56" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">uptake of free DNA</text><rect x="196" y="24" width="168" height="42" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="280" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Transduction</text><text x="280" y="56" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">via bacteriophage</text><rect x="378" y="24" width="168" height="42" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="462" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Conjugation</text><text x="462" y="56" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">plasmid via sex pilus</text></svg>'
      } },
      { h: "Common bacterial pathogens in Bangladesh", list: [
        "Diplococci — Streptococcus pneumoniae (pneumonia), Neisseria gonorrhoeae (gonorrhoea).",
        "Streptococci — pharyngitis, rheumatic fever, skin infection.",
        "Staphylococci — wound/skin infection, abscess, food poisoning; MRSA a resistance concern.",
        "Gram-positive spore-forming bacilli — Clostridium tetani (tetanus), C. botulinum (botulism), Bacillus anthracis (anthrax).",
        "Gram-negative bacilli — E. coli, Shigella (dysentery), Salmonella Typhi (typhoid).",
        "Acid-fast bacilli — Mycobacterium tuberculosis (TB), M. leprae (leprosy).",
        "Spiral forms — Vibrio cholerae (cholera), Treponema pallidum (syphilis), Helicobacter pylori (peptic ulcer)."
      ] },
      { h: "Clinical and nursing relevance", p: "Understanding bacterial structure and growth explains antibiotic targets and timing, why spore-formers demand autoclaving and immunization (tetanus toxoid), and why rapid multiplication makes early aseptic wound care and prompt treatment critical. Recognising that log-phase organisms are most drug-susceptible reinforces giving antibiotics on time and completing the course. Awareness of plasmid-borne resistance and horizontal transfer underlines the nurse's role in correct antibiotic administration, hand hygiene and isolation of resistant carriers." },
      { h: "Key values and figures", list: [
        "Generation time: E. coli ~20 min; M. tuberculosis ~15-20 h.",
        "Autoclave for spores: 121 C, 15 psi, 15 minutes.",
        "Mesophile optimum ~37 C; most pathogens neutrophiles (pH ~7).",
        "Growth curve: lag, log (best antibiotic effect), stationary, death.",
        "Gene transfer: transformation, transduction, conjugation."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Describe the structure of a bacterial cell and the function of each component.",
      "Classify bacteria by shape, arrangement and Gram reaction with examples.",
      "Draw and describe the bacterial growth curve and define generation time.",
      "What are endospores? Explain their structure and clinical significance for sterilization.",
      "Explain the mechanisms of horizontal gene transfer in bacteria and their link to antimicrobial resistance."
    ],
    assessment: [
      { type: "mcq", q: "A wound culture grows a Gram-positive coccus in clusters that is penicillin-resistant. The antibiotic target that penicillin normally attacks is the:", options: ["Capsule", "Cell wall (peptidoglycan)", "Flagellum", "Nucleoid"], answer: 1, rationale: "Penicillins block peptidoglycan cross-linking; the wall is the target and Gram reaction determinant." },
      { type: "mcq", q: "A resistance gene spreads rapidly between different bacterial species. It is most likely carried on a:", options: ["Ribosome", "Spore", "Plasmid", "Pilus"], answer: 2, rationale: "Plasmids carry resistance/virulence genes and transfer horizontally, even across species." },
      { type: "mcq", q: "A cell-wall-active antibiotic is given. It is most effective against bacteria that are in which phase?", options: ["Lag phase", "Log (exponential) phase", "Stationary phase", "Death phase"], answer: 1, rationale: "Log-phase cells build new wall fastest, so cell-wall inhibitors act best then." },
      { type: "mcq", q: "M. tuberculosis cultures take weeks because its generation time is about:", options: ["20 minutes", "1 hour", "15-20 hours", "5 minutes"], answer: 2, rationale: "M. tuberculosis divides only every 15-20 hours, unlike E. coli (~20 min)." },
      { type: "mcq", q: "Clostridium tetani will not grow on a plate incubated in room air. It is therefore a(n):", options: ["Facultative anaerobe", "Obligate aerobe", "Microaerophile", "Obligate anaerobe"], answer: 3, rationale: "Obligate anaerobes cannot grow in the presence of oxygen." },
      { type: "mcq", q: "A soil-contaminated deep puncture wound risks tetanus because C. tetani spores:", options: ["Are killed by drying", "Survive heat, drying and many disinfectants until conditions favour germination", "Cannot leave soil", "Are always harmless"], answer: 1, rationale: "Endospores resist boiling and disinfectants and germinate in anaerobic wound tissue." },
      { type: "mcq", q: "Transfer of bacterial DNA carried by a bacteriophage is called:", options: ["Transformation", "Conjugation", "Transduction", "Binary fission"], answer: 2, rationale: "Transduction is gene transfer mediated by a bacteriophage." },
      { type: "mcq", q: "A patient has typhoid fever. The causative Gram-negative bacillus is:", options: ["Salmonella Typhi", "Vibrio cholerae", "Staphylococcus aureus", "Treponema pallidum"], answer: 0, rationale: "Salmonella Typhi is the Gram-negative cause of typhoid fever." },
      { type: "mcq", q: "A heavily encapsulated pneumococcus resists clearance because the capsule:", options: ["Aids motility", "Generates energy", "Resists phagocytosis", "Stains the cell purple"], answer: 2, rationale: "The polysaccharide capsule protects the bacterium from being engulfed by phagocytes." },
      { type: "mcq", q: "Two bacteria in direct contact transfer a plasmid through a sex pilus. This is:", options: ["Transformation", "Transduction", "Conjugation", "Sporulation"], answer: 2, rationale: "Conjugation transfers plasmids through a sex pilus during cell-to-cell contact." },
      { type: "fill", q: "Dormant, highly resistant survival forms produced by Bacillus and Clostridium are called ______.", accept: ["endospores", "spores", "endospore"], rationale: "Endospores survive extreme conditions and germinate when favourable." },
      { type: "fill", q: "The uptake of free (naked) DNA from the surroundings by a bacterium is called ______.", accept: ["transformation"], rationale: "Transformation is uptake of free environmental DNA." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "mib-04-viruses",
    unit: "Unit 2 · The Microbial Agents",
    title: "Viruses — Structure, Replication & Viral Diseases",
    readMinutes: 25,
    summary: "The nature and detailed structure of viruses, capsid symmetry and the envelope, the stepwise replication cycle with lytic and lysogenic outcomes, key differences from bacteria, classification by genome and by tissue tropism, HIV/AIDS and other important viral diseases of Bangladesh, antiviral principles and prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nature of viruses", p: "Viruses are the smallest infectious agents (about 20-300 nanometres), visible only by electron microscope. They are acellular and are obligate intracellular parasites: outside a host cell they are inert particles (virions) with no metabolism, unable to generate energy or synthesise their own proteins. A virus contains a single type of nucleic acid — DNA or RNA, never both — so viruses are broadly classified as DNA or RNA viruses." },
      { h: "Detailed structure", p: "A complete virion consists of a nucleic-acid genome (the core) enclosed in a protein coat, the capsid, built of repeating protein subunits called capsomeres; genome plus capsid is the nucleocapsid. The capsid protects the genome, aids attachment, and provides antigens. Some viruses have an outer lipid envelope derived from host membrane during budding, bearing glycoprotein spikes (peplomers) used for attachment. A few carry enzymes within the virion (e.g. reverse transcriptase in HIV, RNA polymerase in some RNA viruses)." },
      { h: "Capsid symmetry", p: "The arrangement of capsomeres gives the virion its symmetry: icosahedral (a roughly spherical 20-faced shell, e.g. adenovirus, poliovirus), helical (capsomeres wound in a spiral around the nucleic acid, e.g. rabies, influenza nucleocapsid), or complex (e.g. poxviruses, bacteriophages with head-and-tail). Symmetry, together with presence or absence of an envelope, is a key criterion in viral classification and identification by electron microscopy." },
      { h: "Enveloped versus naked viruses", p: "Enveloped viruses (influenza, HIV, hepatitis B, herpes, measles) have a lipid envelope; they are relatively fragile and readily inactivated by lipid solvents, detergents, alcohol, heat and drying, and so usually spread by close contact, respiratory or parenteral routes. Naked (non-enveloped) viruses (poliovirus, hepatitis A, rotavirus, adenovirus) lack an envelope, are hardier and resist drying, acid and many disinfectants, and so persist in the environment and spread readily by the faeco-oral route. This difference guides disinfection choice and precautions." },
      { h: "Steps of viral replication", p: "Viral multiplication follows an ordered cycle within a host cell.", figure: {
        caption: "Viral replication cycle: attachment, penetration, uncoating, synthesis, assembly, release.",
        svg: '<svg viewBox="0 0 660 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Viral replication steps"><defs><marker id="mibA4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Attachment","Penetration","Uncoating","Synthesis","Assembly","Release"].map(function(t,i){var x=6+i*108;return "<rect x=\'"+x+"\' y=\'24\' width=\'96\' height=\'40\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+48)+"\' y=\'48\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'10\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<5?"<line x1=\'"+(x+96)+"\' y1=\'44\' x2=\'"+(x+108)+"\' y2=\'44\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA4)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "The replication cycle explained", p: "In attachment (adsorption) the virion binds specific receptors on the host cell — this receptor specificity determines host range and tissue tropism. Penetration follows (by membrane fusion or endocytosis); uncoating releases the genome into the cytoplasm; during synthesis (biosynthesis) the virus subverts the host's ribosomes, enzymes and energy to make viral nucleic acid and proteins; new particles are assembled (maturation); and progeny are released by lysis of the cell (naked viruses) or by budding through the membrane, acquiring an envelope (enveloped viruses). Because viruses commandeer host processes, selective antiviral drugs are harder to design than antibiotics." },
      { h: "Lytic and lysogenic cycles", p: "In the lytic cycle the virus rapidly replicates and destroys the host cell, releasing many progeny and causing acute disease. In the lysogenic (latent) cycle the viral genome integrates into, or persists quietly within, the host cell without immediate destruction, and may later reactivate — as with herpes simplex (cold sores, genital herpes), varicella-zoster (chickenpox reactivating as shingles) and HIV. Latency explains recurrent and chronic viral disease and the difficulty of eradicating some viruses." },
      { h: "Viruses versus bacteria", p: "Viruses are far smaller, are not cells, contain only one type of nucleic acid, cannot generate their own energy or proteins, multiply only inside living cells, and are NOT killed by antibiotics. Bacteria are cells that can usually be cultured on artificial media and are treated with antibiotics. Consequently viral illness is managed chiefly by prevention (vaccines, hygiene, vector and blood-borne precautions), by the host immune response, and by specific antivirals where they exist — and antibiotics are inappropriate for uncomplicated viral illness." },
      { h: "Classification by tissue tropism", list: [
        "Pneumotropic — respiratory tract, e.g. influenza, viral pneumonia, coronaviruses.",
        "Neurotropic — nervous tissue, e.g. poliovirus, rabies, Japanese encephalitis virus.",
        "Viscerotropic — internal organs, e.g. hepatitis viruses (liver), dengue, yellow fever.",
        "Dermotropic — skin, e.g. measles, varicella (chickenpox), wart (papilloma) virus."
      ] },
      { h: "HIV and AIDS", p: "The human immunodeficiency virus (HIV) is an enveloped RNA retrovirus that carries reverse transcriptase, which copies its RNA into DNA; this DNA integrates into the host genome (a provirus), establishing lifelong latency. HIV infects and progressively destroys CD4+ helper T-lymphocytes, crippling cell-mediated immunity; when CD4 counts fall low, AIDS develops with opportunistic infections (tuberculosis, Pneumocystis pneumonia, cryptococcal meningitis, candidiasis) and tumours. It spreads by unprotected sex, contaminated blood and sharps, and from mother to child. Antiretroviral therapy suppresses replication but does not eradicate the integrated provirus." },
      { h: "Other important viral diseases in Bangladesh", p: "Dengue (an Aedes-transmitted flavivirus) causes seasonal epidemics with fever, and severe forms cause plasma leakage and bleeding. Hepatitis B and C spread by blood, sex and mother-to-child, causing chronic hepatitis, cirrhosis and liver cancer; hepatitis A and E spread faeco-orally. Rabies, almost always fatal once symptomatic, follows animal bites and is preventable by prompt wound care and post-exposure vaccination. Measles, though vaccine-preventable, still causes outbreaks where coverage is low." },
      { h: "Antiviral principles", p: "Antivirals target specific steps of replication — for example nucleoside/non-nucleoside reverse-transcriptase inhibitors and protease inhibitors against HIV, neuraminidase inhibitors against influenza, and acyclovir (a nucleoside analogue) against herpes. Because viruses use host machinery, achieving selective toxicity is difficult, drugs are often virus-specific, and resistance can emerge — reinforcing that prevention remains the priority." },
      { h: "Prevention, control and nursing relevance", p: "As antibiotics are ineffective, prevention is paramount: immunization (measles, polio, hepatitis B, rabies post-exposure), respiratory and hand hygiene, safe blood and sharps handling for blood-borne viruses (HIV, hepatitis B and C), and vector control (removing Aedes breeding sites for dengue). Nurses reduce viral spread through vaccination programmes, standard precautions, prompt post-exposure prophylaxis after needlestick injury, and health education, while avoiding inappropriate antibiotic use in viral illness." },
      { h: "Key values and figures", list: [
        "Virus size ~20-300 nm; seen only by electron microscope.",
        "One nucleic acid type per virus (DNA or RNA, never both).",
        "Nucleocapsid = genome + capsid; peplomers = envelope spikes.",
        "HIV target = CD4+ helper T cells; key enzyme = reverse transcriptase.",
        "Enveloped viruses fragile (lipid solvents); naked viruses environmentally hardy."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Describe the structure of a virus, including capsid symmetry and the difference between enveloped and naked viruses.",
      "Explain the steps of the viral replication cycle and contrast the lytic and lysogenic cycles.",
      "How do viruses differ from bacteria, and why are antibiotics ineffective against them?",
      "Classify viruses by tissue tropism with examples.",
      "Describe HIV, how it causes AIDS, its transmission and prevention."
    ],
    assessment: [
      { type: "mcq", q: "A virus fails to grow on nutrient agar in the laboratory. This is because it is an obligate intracellular parasite that:", options: ["Needs oxygen only", "Can only replicate inside living host cells", "Requires soil", "Is too big for the plate"], answer: 1, rationale: "Viruses lack their own metabolic machinery and multiply only within living host cells." },
      { type: "mcq", q: "During electron microscopy a virion shows a spiral of capsomeres around its nucleic acid. This capsid symmetry is:", options: ["Icosahedral", "Helical", "Complex head-and-tail", "None"], answer: 1, rationale: "Helical symmetry has capsomeres wound in a spiral around the genome (e.g. influenza nucleocapsid)." },
      { type: "mcq", q: "A naked (non-enveloped) enteric virus persists on surfaces and spreads faeco-orally mainly because it:", options: ["Has a fragile lipid envelope", "Is killed by drying", "Resists drying and many disinfectants", "Contains both DNA and RNA"], answer: 2, rationale: "Lacking an envelope, naked viruses are hardy and resist drying, acid and disinfectants." },
      { type: "mcq", q: "The step of viral replication that determines which cells and tissues a virus can infect is:", options: ["Attachment to specific host receptors", "Release", "Assembly", "Uncoating"], answer: 0, rationale: "Specific binding of viral proteins to host receptors dictates host range and tropism." },
      { type: "mcq", q: "Herpes simplex recurs as cold sores after periods of dormancy. This reflects a:", options: ["Purely lytic cycle", "Bacterial spore", "Lysogenic/latent cycle with reactivation", "Loss of the genome"], answer: 2, rationale: "Latency (lysogenic-type persistence) followed by reactivation explains recurrent herpes." },
      { type: "mcq", q: "A patient with advanced HIV develops multiple opportunistic infections because the virus destroys:", options: ["Red blood cells", "Platelets", "Neurons only", "CD4+ helper T-lymphocytes"], answer: 3, rationale: "HIV depletes CD4+ helper T cells, crippling cell-mediated immunity and causing AIDS." },
      { type: "mcq", q: "HIV integrates into the host genome because it uses the enzyme:", options: ["Reverse transcriptase", "DNA gyrase", "Lysozyme", "Neuraminidase"], answer: 0, rationale: "Reverse transcriptase copies retroviral RNA into DNA for integration as a provirus." },
      { type: "mcq", q: "Hepatitis and dengue viruses, which attack internal organs, are classified as:", options: ["Neurotropic", "Dermotropic", "Viscerotropic", "Pneumotropic"], answer: 2, rationale: "Viscerotropic viruses target internal organs such as the liver." },
      { type: "mcq", q: "An enveloped virus acquires its lipid envelope by:", options: ["Lysing the cell immediately", "Budding through the host cell membrane", "Binary fission", "Sporulation"], answer: 1, rationale: "Enveloped viruses bud through host membrane, acquiring the envelope on release." },
      { type: "mcq", q: "A nurse is asked why antibiotics are not prescribed for a common cold. The correct reason is that viruses:", options: ["Are too large for antibiotics", "Have thick peptidoglycan walls", "Lack the bacterial structures/processes antibiotics target", "Are fungi"], answer: 2, rationale: "Antibiotics act on bacterial structures and pathways that viruses do not possess." },
      { type: "fill", q: "The genome together with its protein capsid is called the ______.", accept: ["nucleocapsid"], rationale: "Nucleocapsid = viral nucleic acid plus surrounding capsid." },
      { type: "fill", q: "Viruses classified as ______ attack nervous tissue, e.g. rabies and polio.", accept: ["neurotropic"], rationale: "Neurotropic viruses target nervous tissue." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "mib-05-fungi",
    unit: "Unit 2 · The Microbial Agents",
    title: "Fungi & Fungal Infections (Mycoses)",
    readMinutes: 24,
    summary: "The biology of fungi as eukaryotes, yeast, mould and dimorphic morphology, reproduction by spores, the classification of mycoses from superficial to systemic and opportunistic, predisposing factors, laboratory diagnosis, antifungal drug classes and their targets, and the nurse's preventive and detective role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nature of fungi", p: "Fungi are eukaryotic micro-organisms with a true membrane-bound nucleus, organelles, 80S ribosomes and a rigid cell wall containing chitin and glucans; their cell membranes contain ergosterol (the sterol that is the target of many antifungals, in place of the cholesterol of human membranes). They are heterotrophic, absorbing nutrients from organic matter after secreting digestive enzymes. Most fungi are saprophytes or harmless commensals; a minority cause disease (mycoses)." },
      { h: "Fungi versus bacteria", p: "Fungi differ fundamentally from bacteria: they are eukaryotic (bacteria are prokaryotic); their walls contain chitin (not peptidoglycan); their ribosomes are 80S (not 70S); and they are unaffected by antibacterial antibiotics, requiring antifungal drugs instead. They are generally larger than bacteria, grow more slowly, and prefer warm, moist, slightly acidic conditions." },
      { h: "Morphological forms", p: "Fungi occur as unicellular yeasts (round/oval cells reproducing by budding, e.g. Candida), as filamentous moulds composed of branching threads called hyphae that form a mat (mycelium, e.g. dermatophytes and Aspergillus), or as dimorphic fungi that grow as moulds in the environment (at ~25 C) and as yeasts in tissue at body temperature (~37 C). This yeast-mould duality is important in identification and pathogenesis.", figure: {
        caption: "Fungal forms: yeast (budding cells) and mould (branching hyphae forming mycelium).",
        svg: '<svg viewBox="0 0 480 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yeast and mould forms"><circle cx="80" cy="55" r="20" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><circle cx="104" cy="38" r="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="90" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Yeast (budding)</text><path d="M250,55 h40 m0,0 l24,-16 m-24,16 l24,16 m-24,-16 h40 l22,-14 m-22,14 l22,14" fill="none" stroke="#15803D" stroke-width="3" stroke-linecap="round"/><text x="330" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Mould (hyphae)</text></svg>'
      } },
      { h: "Reproduction and spread", p: "Fungi reproduce by producing spores, either sexually (after fusion, giving genetic variation) or asexually (e.g. conidia, sporangiospores, budding). Spores disperse readily through air and on surfaces and survive well in the environment, which is why inhaled spores cause respiratory mycoses (aspergillosis) and why contamination is easy. Growth is favoured by warmth, moisture and a slightly acid pH, so superficial fungal infections thrive in moist skin folds, between the toes and in the groin." },
      { h: "Classification of mycoses", list: [
        "Superficial and cutaneous — dermatophytes causing tinea (ringworm), athlete's foot and nail infection, affecting keratinised skin, hair and nails.",
        "Subcutaneous — deeper tissue infection after trauma (e.g. mycetoma, sporotrichosis).",
        "Candidiasis (opportunistic) — Candida albicans causing oral thrush, vulvovaginal thrush, intertrigo, and, in the compromised, invasive/systemic disease.",
        "Systemic/deep mycoses — e.g. cryptococcosis (Cryptococcus neoformans meningitis), chiefly in the immunocompromised.",
        "Opportunistic mycoses — aspergillosis, mucormycosis and others exploiting weakened hosts."
      ] },
      { h: "Dermatophytoses (ringworm) in detail", p: "Dermatophytes (Trichophyton, Microsporum, Epidermophyton) digest keratin and colonise the dead keratinised layers of skin, hair and nails, producing the ring-shaped, itchy, scaly lesions of tinea: tinea capitis (scalp), tinea corporis (body), tinea cruris (groin, 'jock itch'), tinea pedis (feet, athlete's foot) and tinea unguium (nails). They spread person-to-person, from animals, and via shared towels, footwear and floors — common in warm, humid Bangladesh." },
      { h: "Candidiasis in detail", p: "Candida albicans is a normal commensal of the mouth, gut and vagina, held in check by normal flora and intact immunity. It overgrows to cause thrush when this balance is disturbed — white patches in the mouth (oral thrush) of infants, the debilitated and the immunosuppressed; vulvovaginal thrush in pregnancy, diabetes or after antibiotics; and intertrigo in moist skin folds. In severely compromised patients it may invade the bloodstream (candidaemia), a serious systemic infection." },
      { h: "Predisposing (risk) factors", p: "Mycoses cluster where host defences or normal flora are disturbed: diabetes mellitus (high glucose favours Candida), broad-spectrum antibiotic use (removing competing bacteria), immunosuppression (HIV/AIDS, cancer, corticosteroids, chemotherapy), pregnancy, indwelling devices and central lines, and prolonged skin moisture. Systemic mycoses are almost confined to the immunocompromised, making them useful markers of failing immunity — cryptococcal meningitis and Pneumocystis, for example, signal advanced HIV." },
      { h: "Laboratory diagnosis", p: "Skin, hair or nail scrapings are examined in a potassium hydroxide (KOH) wet mount, which dissolves keratin to reveal fungal hyphae and spores; specimens are also cultured on Sabouraud dextrose agar (a selective, acidic medium). Candida is seen as budding yeasts and pseudohyphae on Gram film or KOH; Cryptococcus is demonstrated in cerebrospinal fluid by India-ink negative staining or antigen testing. Correct scraping and specimen handling by the nurse are essential." },
      { h: "Treatment principles", p: "Fungi are treated with antifungal drugs, not antibiotics, exploiting targets absent from human cells. Polyenes (amphotericin B, nystatin) bind ergosterol in the fungal membrane, forming pores (amphotericin B is potent but nephrotoxic, needing monitoring). Azoles (fluconazole, clotrimazole, ketoconazole) inhibit ergosterol synthesis. Echinocandins inhibit glucan synthesis in the wall; terbinafine and griseofulvin treat dermatophytes. Superficial infections are treated topically; serious or systemic infection needs systemic therapy, sometimes prolonged.", figure: {
        caption: "Antifungal targets: the fungal cell membrane (ergosterol) and cell wall.",
        svg: '<svg viewBox="0 0 520 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Antifungal targets"><rect x="20" y="24" width="230" height="42" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="135" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Membrane ergosterol</text><text x="135" y="56" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">polyenes bind / azoles block synthesis</text><rect x="270" y="24" width="230" height="42" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="385" y="42" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Cell wall glucan</text><text x="385" y="56" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">echinocandins inhibit synthesis</text></svg>'
      } },
      { h: "Clinical and nursing relevance", p: "Nurses prevent and detect mycoses by keeping at-risk skin (especially folds and the perineum) clean and dry, providing meticulous mouth care in the seriously ill and immunosuppressed to prevent and detect oral thrush, promoting good glycaemic control in diabetics, encouraging rational antibiotic use, and recognising and reporting thrush, ringworm and signs of deeper infection so treatment is not delayed. They monitor patients on amphotericin B for renal toxicity and infusion reactions." },
      { h: "Key values and figures", list: [
        "Fungi: eukaryotic, 80S ribosomes, chitin wall, ergosterol membrane.",
        "Dimorphic: mould at ~25 C, yeast at ~37 C.",
        "Diagnosis: KOH mount, Sabouraud dextrose agar, India ink for Cryptococcus.",
        "Antifungal targets: ergosterol (polyenes, azoles), glucan (echinocandins).",
        "Systemic mycoses mark immunocompromise (e.g. advanced HIV)."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Describe the biological features of fungi that distinguish them from bacteria.",
      "Differentiate yeasts, moulds and dimorphic fungi with examples.",
      "Classify the mycoses with an example of each, describing ringworm and candidiasis.",
      "List the factors that predispose to fungal infection and explain why each does so.",
      "Outline the laboratory diagnosis and antifungal treatment of mycoses and the nurse's preventive role."
    ],
    assessment: [
      { type: "mcq", q: "A drug is chosen that targets ergosterol. It is selectively toxic to fungi because human membranes instead contain:", options: ["Chitin", "Cholesterol", "Peptidoglycan", "Ergosterol too"], answer: 1, rationale: "Ergosterol is unique to fungal membranes; human membranes use cholesterol, giving selectivity." },
      { type: "mcq", q: "A skin scraping in KOH shows branching filaments. These structures of a mould are called:", options: ["Buds", "Capsomeres", "Hyphae", "Cocci"], answer: 2, rationale: "Hyphae are the filaments of moulds; a mass of them forms the mycelium." },
      { type: "mcq", q: "A patient develops a ring-shaped, scaly, itchy lesion on the trunk. The likely cause is:", options: ["Candida", "Dermatophytes (tinea)", "Cryptococcus", "Aspergillus"], answer: 1, rationale: "Dermatophytes digest keratin and cause ring-shaped tinea of skin, hair and nails." },
      { type: "mcq", q: "Which patient is at greatest risk of invasive/systemic fungal infection?", options: ["A healthy athlete", "A person with cold dry skin", "A patient on chemotherapy with HIV", "A well-nourished child"], answer: 2, rationale: "Systemic mycoses occur chiefly in the immunocompromised (HIV, chemotherapy, steroids)." },
      { type: "mcq", q: "A week after broad-spectrum antibiotics a patient gets oral thrush. The mechanism is that antibiotics:", options: ["Feed Candida directly", "Remove competing normal flora, allowing Candida overgrowth", "Act as antifungals", "Boost fungal immunity"], answer: 1, rationale: "Suppressing bacterial flora releases Candida from competition, allowing overgrowth." },
      { type: "mcq", q: "Fungi spread readily in the environment and cause respiratory mycoses chiefly because they produce:", options: ["Toxins only", "Live young", "Eggs", "Airborne spores"], answer: 3, rationale: "Fungi disperse by spores that survive in air and on surfaces and can be inhaled." },
      { type: "mcq", q: "Cryptococcal meningitis in a patient should prompt evaluation for:", options: ["Good immunity", "Immunocompromise such as advanced HIV", "Recent vaccination", "Athletic training"], answer: 1, rationale: "Cryptococcosis is an AIDS-defining systemic mycosis marking failing immunity." },
      { type: "mcq", q: "A fungus that grows as a mould at 25 C in culture but as a yeast in tissue at 37 C is described as:", options: ["Dimorphic", "Acid-fast", "Prokaryotic", "Naked"], answer: 0, rationale: "Dimorphic fungi switch between mould and yeast forms with temperature." },
      { type: "mcq", q: "Fungal cell walls characteristically contain:", options: ["Peptidoglycan", "Cholesterol", "Chitin and glucans", "No wall"], answer: 2, rationale: "Fungal walls contain chitin and glucans, unlike bacterial peptidoglycan." },
      { type: "mcq", q: "To help prevent superficial fungal infection in skin folds, the nurse should keep the skin:", options: ["Warm and moist", "Tightly occluded", "Unwashed", "Clean and dry"], answer: 3, rationale: "Keeping skin clean and dry, especially in folds, discourages fungal growth." },
      { type: "fill", q: "The wet-mount reagent used to dissolve keratin and reveal fungi in skin scrapings is ______.", accept: ["koh", "potassium hydroxide"], rationale: "KOH (potassium hydroxide) clears keratin so hyphae and spores are seen." },
      { type: "fill", q: "Diseases caused by fungi are collectively called ______.", accept: ["mycoses", "mycosis"], rationale: "Mycoses are infections caused by fungi." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "mib-06-parasites",
    unit: "Unit 2 · The Microbial Agents",
    title: "Parasites — Protozoa & Helminths",
    readMinutes: 26,
    summary: "The concept of parasitism and host-parasite relationships, the medically important protozoa (malaria, kala-azar, amoebiasis, trichomoniasis) with their life cycles and pathogenesis, the major helminths and their effects, routes of transmission, laboratory diagnosis and prevention relevant to Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept of parasitism", p: "A parasite lives on or in a host and benefits at the host's expense. Endoparasites live inside the body (protozoa, helminths); ectoparasites live on the surface (lice, scabies mite). The definitive host harbours the adult or sexual stage of the parasite, the intermediate host the larval or asexual stage, and a vector (often a blood-feeding arthropod) transmits the parasite from host to host. A reservoir host maintains the parasite in nature. Medical parasitology covers the single-celled protozoa and the multicellular worms (helminths)." },
      { h: "Protozoa: general features", p: "Protozoa are microscopic, single-celled eukaryotes. Many alternate between an active, motile, feeding trophozoite (the stage causing disease) and a resistant cyst (the stage that survives outside the host and transmits infection faeco-orally). They are grouped by locomotion into amoebae (pseudopodia), flagellates (flagella), ciliates (cilia) and sporozoa/apicomplexa (non-motile, with complex life cycles, e.g. Plasmodium). Several cause major disease in Bangladesh." },
      { h: "Malaria — parasite and vector", p: "Malaria is caused by Plasmodium species — falciparum (most dangerous), vivax, ovale and malariae — transmitted by the bite of the infected female Anopheles mosquito. In Bangladesh, transmission concentrates in the hilly forested districts. Falciparum can rapidly cause severe and cerebral malaria, while vivax and ovale form dormant liver hypnozoites that cause relapses months later." },
      { h: "Malaria — life cycle and pathogenesis", p: "When an infected female Anopheles bites, it injects sporozoites that travel to the liver and multiply (exo-erythrocytic schizogony) without symptoms. Merozoites are then released into the blood and invade red cells, cycling through trophozoite and schizont stages; synchronous rupture of parasitised red cells releases merozoites and pyrogens, producing the characteristic periodic fever, chills and rigors, and causing haemolytic anaemia. Some parasites form gametocytes that a feeding mosquito takes up, completing the cycle.", figure: {
        caption: "Malaria transmission cycle between the Anopheles mosquito and the human host.",
        svg: '<svg viewBox="0 0 520 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Malaria cycle mosquito to human"><defs><marker id="mibA6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs><rect x="20" y="30" width="170" height="44" rx="10" fill="#DCFCE7" stroke="#15803D"/><text x="105" y="50" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Anopheles mosquito</text><text x="105" y="66" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">injects sporozoites</text><rect x="330" y="30" width="170" height="44" rx="10" fill="#F0FDF4" stroke="#22C55E"/><text x="415" y="50" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Human (liver + RBC)</text><text x="415" y="66" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">gametocytes taken up</text><line x1="190" y1="44" x2="328" y2="44" stroke="#15803D" stroke-width="2" marker-end="url(#mibA6)"/><line x1="330" y1="62" x2="192" y2="62" stroke="#15803D" stroke-width="2" marker-end="url(#mibA6)"/></svg>'
      } },
      { h: "Other key protozoal diseases", list: [
        "Kala-azar (visceral leishmaniasis) — Leishmania donovani, transmitted by the sandfly; causes prolonged fever, marked weight loss, hepatosplenomegaly, darkening of skin and anaemia; historically endemic in parts of Bangladesh.",
        "Amoebiasis — Entamoeba histolytica, spread faeco-orally by ingested cysts; trophozoites invade the colon causing amoebic (bloody) dysentery with flask-shaped ulcers, and may spread via the blood to form a liver abscess.",
        "Trichomoniasis — Trichomonas vaginalis, a flagellate transmitted sexually, causing frothy vaginal discharge with vaginitis in women and often asymptomatic urethritis in men.",
        "Giardiasis — Giardia lamblia, a flagellate spread faeco-orally, causing fatty diarrhoea and malabsorption."
      ] },
      { h: "Helminths (worms): classification", p: "Helminths are multicellular worm parasites grouped as nematodes (roundworms — Ascaris, hookworm, Enterobius/pinworm), cestodes (tapeworms — Taenia) and trematodes (flukes). They are large, visible to the eye when adult, and typically do not multiply within the human host (worm burden reflects the number of infective stages acquired), so diagnosis relies on finding eggs (ova) or larvae in stool." },
      { h: "Common intestinal worms in Bangladesh", p: "Ascaris lumbricoides (roundworm), acquired by ingesting eggs from contaminated food/soil, can cause a heavy load with intestinal or biliary obstruction. Hookworm (Ancylostoma/Necator) larvae penetrate the skin of bare feet from contaminated soil and the adult worms feed on blood in the gut, causing chronic iron-deficiency anaemia. Enterobius (pinworm/threadworm) causes perianal itching, especially in children. Tapeworms (Taenia) are acquired from undercooked beef or pork. Heavy or chronic infestation causes malnutrition and growth retardation in children." },
      { h: "Routes of transmission", list: [
        "Vector-borne — mosquito (malaria), sandfly (kala-azar).",
        "Faeco-oral — cysts/eggs in contaminated food or water (amoebiasis, giardiasis, Ascaris, pinworm).",
        "Skin penetration — hookworm larvae enter through bare feet from contaminated soil.",
        "Ingestion of undercooked meat/fish — tapeworms.",
        "Sexual contact — trichomoniasis."
      ] },
      { h: "Laboratory diagnosis", p: "Diagnosis is largely by microscopy. Malaria is diagnosed by stained thick and thin blood films (thick to detect, thin to speciate) and by rapid antigen (RDT) tests. Stool microscopy demonstrates cysts, trophozoites, ova and larvae of intestinal parasites; concentration methods increase yield, and perianal adhesive-tape testing detects pinworm eggs. Kala-azar is diagnosed by splenic or bone-marrow smears showing amastigotes, or by serology (rK39). Trichomonas is seen as motile flagellates on a wet mount of vaginal discharge. Correct, well-timed specimen collection by the nurse is essential." },
      { h: "Prevention and control", p: "Control targets the route of spread: safe water, food hygiene and sanitation (faeco-oral parasites); wearing footwear (hookworm); insecticide-treated bed nets, indoor spraying and vector control (malaria, kala-azar); thorough cooking of meat and fish (tapeworm); and periodic mass deworming of children. Health education, community sanitation and vector-breeding-site reduction are central to the national programmes in Bangladesh." },
      { h: "Clinical and nursing relevance", p: "Nurses recognise the clinical patterns — periodic fever with anaemia (malaria), prolonged fever with splenomegaly (kala-azar), bloody dysentery (amoebiasis), iron-deficiency anaemia (hookworm), perianal itch in a child (pinworm) — and collect the correct specimens at the right time (blood films during fever, three stool samples for ova). They administer antiparasitic and antimalarial drugs, monitor for anaemia and complications, and lead health education on sanitation, footwear, bed nets and food hygiene." },
      { h: "Key values and figures", list: [
        "Malaria vector: female Anopheles; kala-azar vector: sandfly.",
        "Trophozoite = feeding/disease stage; cyst = resistant/transmissible stage.",
        "Malaria diagnosis: thick + thin blood films and rapid antigen tests.",
        "Hookworm -> iron-deficiency anaemia; Ascaris -> obstruction.",
        "Helminth classes: nematodes, cestodes, trematodes."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define parasitism and distinguish definitive host, intermediate host, reservoir and vector.",
      "Describe the life cycle, transmission and pathogenesis of malaria.",
      "Name important protozoal diseases, their vectors/routes and clinical features.",
      "Classify the helminths and describe the effects of common intestinal worms.",
      "Outline the laboratory diagnosis and prevention of parasitic diseases in Bangladesh."
    ],
    assessment: [
      { type: "mcq", q: "In the malaria life cycle, the mosquito that harbours the sexual stage is the:", options: ["Intermediate host", "Definitive host", "Reservoir soil", "Fomite"], answer: 1, rationale: "The Anopheles mosquito, where the sexual stage occurs, is the definitive host; humans are intermediate." },
      { type: "mcq", q: "A febrile patient from a hilly district has fever every 48 hours. The vector responsible for transmitting this infection is the:", options: ["Aedes mosquito", "Sandfly", "Female Anopheles mosquito", "Housefly"], answer: 2, rationale: "Female Anopheles mosquitoes transmit Plasmodium, the cause of periodic malarial fever." },
      { type: "mcq", q: "The periodic fever and rigors of malaria are caused by:", options: ["Synchronous rupture of infected red blood cells", "Liver cell rupture only", "Mosquito saliva", "Sporozoite injection alone"], answer: 0, rationale: "Synchronised lysis of parasitised red cells releases merozoites and pyrogens, causing periodic fever." },
      { type: "mcq", q: "A patient with prolonged fever, weight loss and a very large spleen is suspected of kala-azar, transmitted by the:", options: ["Mosquito", "Sandfly", "Tick", "Tsetse fly"], answer: 1, rationale: "Leishmania donovani (kala-azar) is transmitted by the bite of the sandfly." },
      { type: "mcq", q: "A patient passes bloody, mucoid stools; microscopy shows trophozoites of:", options: ["Entamoeba histolytica", "Plasmodium vivax", "Ascaris", "Trichomonas"], answer: 0, rationale: "Entamoeba histolytica invades the colon causing bloody amoebic dysentery." },
      { type: "mcq", q: "A barefoot farmer has chronic iron-deficiency anaemia and eosinophilia. The likely worm, which feeds on gut blood, is:", options: ["Pinworm", "Tapeworm", "Hookworm", "Ascaris"], answer: 2, rationale: "Hookworm feeds on blood in the gut, producing chronic iron-deficiency anaemia." },
      { type: "mcq", q: "Hookworm typically enters the body by:", options: ["The mouth only", "Penetrating the skin of the feet from contaminated soil", "Mosquito bite", "The conjunctiva"], answer: 1, rationale: "Hookworm larvae in soil penetrate bare skin, typically the feet." },
      { type: "mcq", q: "The environmentally resistant, infective stage of Entamoeba that survives in water is the:", options: ["Trophozoite", "Hypha", "Merozoite", "Cyst"], answer: 3, rationale: "The cyst is the environmentally resistant, faeco-orally transmitted infective stage." },
      { type: "mcq", q: "To confirm and speciate malaria in the laboratory the nurse should ensure collection of:", options: ["A stool sample", "Stained thick and thin blood films", "A urine sample", "Sputum for AFB"], answer: 1, rationale: "Thick films detect and thin films speciate the parasite; rapid antigen tests supplement them." },
      { type: "mcq", q: "Insecticide-treated bed nets are a key control measure against:", options: ["Amoebiasis", "Tapeworm", "Malaria and kala-azar", "Ascariasis"], answer: 2, rationale: "Bed nets reduce bites from mosquitoes (malaria) and sandflies (kala-azar)." },
      { type: "fill", q: "The multicellular worm parasites are collectively called ______.", accept: ["helminths", "helminth"], rationale: "Helminths include nematodes, cestodes and trematodes." },
      { type: "fill", q: "The active, feeding stage of a protozoan (opposite of the cyst) is the ______.", accept: ["trophozoite"], rationale: "The trophozoite is the motile feeding stage; the cyst is the resistant stage." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "mib-07-host-flora-pathogenesis",
    unit: "Unit 3 · Infection & Host-Microbe Relationship",
    title: "Normal Flora, Pathogenesis & the Chain of Infection",
    readMinutes: 26,
    summary: "The normal microbiota and its protective functions, pathogenicity and virulence and the dose-resistance balance, the range of virulence factors and the biology of exotoxins and endotoxins, the stepwise capabilities of a pathogen, reservoirs and carriers, and the six-link chain of infection with its portals and modes of transmission.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The normal microbiota and its functions", p: "The body's resident normal flora colonise the skin, upper respiratory tract, mouth, gut and genital tract, while internal organs, blood, cerebrospinal fluid and the lower respiratory tract are normally sterile. Beneficial functions include colonisation resistance (competing for nutrients and receptors and producing inhibitory substances that exclude pathogens), synthesis of vitamin K and some B vitamins in the gut, and priming and maturation of the immune system. Disturbing this balance — chiefly by broad-spectrum antibiotics — predisposes to opportunistic infection such as candidiasis or Clostridioides difficile colitis." },
      { h: "Resident and transient flora", p: "Resident flora are relatively stable communities that re-establish after disturbance; transient flora are microbes temporarily present on the skin (often picked up from the environment or other people) that do not permanently colonise. For infection control this distinction is critical: hand hygiene readily removes transient flora — which include the pathogens spread from patient to patient — even though it cannot eliminate the deeper resident flora." },
      { h: "Pathogenicity and virulence", p: "Pathogenicity is the capacity of an organism to cause disease; virulence is the quantitative degree of that capacity. Whether infection results depends on the balance between the organism's virulence and infecting dose and the host's resistance (Disease = virulence x dose / host resistance, conceptually). A highly virulent organism may cause disease from very few organisms (e.g. Shigella), whereas an opportunist needs a large dose or a compromised host. The infectious dose (ID50) is the number of organisms needed to infect half of exposed hosts." },
      { h: "Virulence factors", list: [
        "Adhesins (pili, fimbriae, surface proteins) — attachment to and colonisation of host cells.",
        "Capsule and biofilm — resist phagocytosis and shelter organisms (e.g. pneumococcus, catheter biofilms).",
        "Invasins and spreading enzymes (coagulase, hyaluronidase, collagenase) — invade and spread through tissue.",
        "Toxins — exotoxins and endotoxins that damage the host.",
        "Iron-acquisition systems (siderophores) — capture scarce host iron.",
        "Immune-evasion mechanisms — antigenic variation, intracellular survival, IgA proteases."
      ] },
      { h: "Exotoxins", p: "Exotoxins are potent proteins actively secreted mainly by Gram-positive (and some Gram-negative) bacteria; they are often highly specific and among the most poisonous substances known. Examples include tetanus toxin (tetanospasmin), which blocks inhibitory neurotransmitters causing spastic paralysis; botulinum toxin, which blocks acetylcholine release causing flaccid paralysis; cholera toxin, which drives massive secretory (watery) diarrhoea; and diphtheria toxin, which blocks host protein synthesis. Many exotoxins can be chemically inactivated into toxoids that retain antigenicity and are used as vaccines (tetanus, diphtheria)." },
      { h: "Endotoxin", p: "Endotoxin is the lipopolysaccharide (LPS) of the Gram-negative outer membrane; its toxic component is lipid A. Unlike exotoxins it is not secreted but is released mainly when the cell dies and lyses, is heat-stable, is not converted to a toxoid, and is less potent per molecule but produces a stereotyped response: fever (a pyrogen), inflammation, hypotension and, in large amounts (Gram-negative sepsis), disseminated intravascular coagulation and septic (endotoxic) shock. This underlies the danger of Gram-negative bloodstream infection.", figure: {
        caption: "Exotoxin versus endotoxin: source, chemistry and key properties.",
        svg: '<svg viewBox="0 0 520 96" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exotoxin versus endotoxin"><rect x="20" y="20" width="220" height="66" rx="10" fill="#DCFCE7" stroke="#15803D"/><text x="130" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Exotoxin</text><text x="130" y="58" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">secreted protein, specific</text><text x="130" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">potent; toxoid vaccines</text><rect x="280" y="20" width="220" height="66" rx="10" fill="#F0FDF4" stroke="#22C55E"/><text x="390" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Endotoxin (LPS)</text><text x="390" y="58" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Gram-negative wall, lipid A</text><text x="390" y="74" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">fever, shock; heat-stable</text></svg>'
      } },
      { h: "Capabilities of a pathogen — steps in pathogenesis", p: "To cause disease a pathogen must be able to: maintain a reservoir; leave the reservoir and reach a new host; enter through a portal of entry; adhere to and colonise a body surface; invade tissues; evade the host's defences; multiply to a damaging load; injure the host directly or by toxins; and finally exit the body to infect others. Interrupting any one of these capabilities prevents infection — this is the theoretical basis of every infection-control measure." },
      { h: "Reservoirs and carriers", p: "A reservoir is where the pathogen normally persists and multiplies: humans (including asymptomatic carriers who shed organisms, e.g. the chronic gallbladder carrier of typhoid), animals (zoonoses such as rabies, and Salmonella from poultry), or the environment (soil for tetanus and Clostridium spores, water for cholera and Legionella). Carriers are epidemiologically important because they spread infection while appearing well — a healthy carrier of typhoid, a convalescent carrier still shedding, or an incubatory carrier shedding before symptoms; identifying and managing them guides control." },
      { h: "Portals of entry and exit", p: "Pathogens enter and leave by defined portals. Portals of entry include the respiratory tract (inhaled droplets), gastrointestinal tract (ingested food/water), genitourinary tract (sexual contact), skin and mucous membranes (breaks, bites, injections), and the placenta (congenital infection). Portals of exit mirror these — respiratory secretions, faeces, urine, blood, genital secretions and skin lesions. Matching precautions to the portal (e.g. respiratory hygiene, enteric precautions) breaks transmission." },
      { h: "The chain of infection", p: "Infection propagates through a six-link chain; breaking any link interrupts spread.", figure: {
        caption: "The six-link chain of infection.",
        svg: '<svg viewBox="0 0 700 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chain of infection"><defs><marker id="mibA7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Infectious agent","Reservoir","Portal of exit","Transmission","Portal of entry","Susceptible host"].map(function(t,i){var x=4+i*116;return "<rect x=\'"+x+"\' y=\'22\' width=\'104\' height=\'42\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+52)+"\' y=\'47\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'9.3\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<5?"<line x1=\'"+(x+104)+"\' y1=\'43\' x2=\'"+(x+116)+"\' y2=\'43\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA7)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "Modes of transmission", list: [
        "Contact — direct (touch, sexual, body fluids, vertical mother-to-child) or indirect via contaminated objects (fomites).",
        "Droplet — large respiratory droplets travelling short distances (~1 m), e.g. influenza, pertussis, meningococcus.",
        "Airborne — small droplet nuclei (<5 um) that remain suspended and travel further, e.g. tuberculosis, measles, varicella.",
        "Vehicle — contaminated food, water, blood or medicines.",
        "Vector-borne — arthropods (mosquito, sandfly) carrying the pathogen mechanically or biologically."
      ] },
      { h: "Clinical and nursing relevance", p: "Understanding pathogenesis and the chain of infection is the foundation of standard and transmission-based precautions, hand hygiene, asepsis, safe handling of body fluids, isolation matched to the transmission route (contact, droplet or airborne), vector control and immunization. Knowing that endotoxin causes fever and septic shock helps the nurse recognise deteriorating Gram-negative sepsis early. The nurse breaks the chain at every opportunity — most simply and powerfully through hand hygiene — protecting both patients and staff." },
      { h: "Key values and figures", list: [
        "Normally sterile sites: blood, CSF, deep tissue, lower respiratory tract.",
        "Exotoxin: secreted protein, toxoid-able; endotoxin: LPS/lipid A, heat-stable.",
        "Carriers: healthy, incubatory or convalescent shedders.",
        "Droplet ~1 m spread; airborne droplet nuclei <5 um travel further.",
        "Six links: agent, reservoir, exit, transmission, entry, susceptible host."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Describe the normal microbiota, the difference between resident and transient flora, and its beneficial functions.",
      "Differentiate pathogenicity and virulence, and list important virulence factors.",
      "Compare exotoxins and endotoxins with examples and clinical effects.",
      "Describe the capabilities/steps by which a pathogen causes disease, and define reservoirs and carriers.",
      "Explain the chain of infection, the portals, and the modes of transmission."
    ],
    assessment: [
      { type: "mcq", q: "A nurse performs hand hygiene between patients chiefly to remove:", options: ["Deep resident flora permanently", "Transient flora, including pathogens picked up from patients", "The skin's own oils only", "Sterile-site organisms"], answer: 1, rationale: "Hand hygiene removes transient flora — the pathogens spread patient-to-patient — which resident flora do not." },
      { type: "mcq", q: "An organism causes disease from only a few bacteria. This describes high:", options: ["Resistance", "Virulence", "Sterility", "Immunity"], answer: 1, rationale: "Virulence is the degree of pathogenicity; a highly virulent organism infects at a low dose." },
      { type: "mcq", q: "A patient with Gram-negative bacteraemia develops fever and septic shock. The responsible toxin is:", options: ["A secreted exotoxin", "Peptidoglycan", "Lipopolysaccharide endotoxin (lipid A)", "A capsule"], answer: 2, rationale: "Endotoxin (LPS/lipid A) of the Gram-negative wall causes fever and septic shock on release." },
      { type: "mcq", q: "Which statement about exotoxins is TRUE?", options: ["They are heat-stable parts of the wall", "They are secreted proteins, often converted to toxoids for vaccines", "They cannot cause disease", "They are unique to viruses"], answer: 1, rationale: "Exotoxins are secreted proteins, highly potent, and many are inactivated into toxoid vaccines." },
      { type: "mcq", q: "A food handler with no symptoms is found to shed Salmonella Typhi in stool. This person is a:", options: ["Vector", "Carrier", "Fomite", "Reservoir animal"], answer: 1, rationale: "A carrier harbours and transmits the organism without overt symptoms." },
      { type: "mcq", q: "A patient with a deep soil-contaminated wound develops spastic paralysis and lockjaw. The exotoxin responsible acts by:", options: ["Causing watery diarrhoea", "Blocking protein synthesis", "Producing anaemia", "Blocking inhibitory neurotransmitters"], answer: 3, rationale: "Tetanospasmin blocks inhibitory neurotransmission, producing spastic paralysis (tetanus)." },
      { type: "mcq", q: "A patient with open pulmonary tuberculosis requires which precautions because of the transmission route?", options: ["Enteric only", "Airborne precautions", "None needed", "Vector control only"], answer: 1, rationale: "TB spreads by small airborne droplet nuclei, requiring airborne precautions." },
      { type: "mcq", q: "Reusing an inadequately cleaned instrument transmits infection by:", options: ["Indirect contact (fomite)", "Droplet", "Airborne route", "Vector"], answer: 0, rationale: "Contaminated objects (fomites) transmit infection through indirect contact." },
      { type: "mcq", q: "A pneumococcal capsule promotes disease because it:", options: ["Provides motility", "Generates energy", "Resists phagocytosis", "Enables conjugation"], answer: 2, rationale: "The capsule shields the organism from phagocytes, a key virulence factor." },
      { type: "mcq", q: "The fundamental principle behind all infection-control measures is to:", options: ["Strengthen every link of the chain", "Break at least one link in the chain of infection", "Ignore the reservoir", "Treat only symptoms"], answer: 1, rationale: "Interrupting any single link of the chain prevents transmission." },
      { type: "fill", q: "The lipopolysaccharide toxin in the Gram-negative cell wall is called ______.", accept: ["endotoxin", "lipopolysaccharide", "lps"], rationale: "Endotoxin (LPS) causes fever, inflammation and, in excess, septic shock." },
      { type: "fill", q: "An arthropod such as a mosquito that transmits a pathogen is called a ______.", accept: ["vector"], rationale: "A vector carries the pathogen from one host to another." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "mib-08-immunity",
    unit: "Unit 3 · Infection & Host-Microbe Relationship",
    title: "Immunity — Innate & Adaptive Defences",
    readMinutes: 26,
    summary: "The organisation of host defence into innate and adaptive immunity, the cells and mediators of each, antigens and the structure, classes and proportions of antibodies, the primary and secondary responses, classification of acquired immunity, and immunological disorders including the four types of hypersensitivity, autoimmunity and immunodeficiency.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of immunity", p: "Immunity is the host's capacity to resist and eliminate infection and to distinguish self from non-self. It is organised into two integrated arms: innate (non-specific) immunity, present from birth, acting immediately against any invader without memory; and adaptive (specific) immunity, which is learned, targets particular antigens, is slower on first exposure, and generates immunological memory that underlies lasting protection and vaccination. The two arms communicate continually through antigen-presenting cells and cytokines." },
      { h: "Innate (non-specific) immunity", list: [
        "Physical/chemical barriers — intact skin, mucus and cilia, stomach acid (pH ~1.5-2), lysozyme in tears and saliva, and colonisation resistance by normal flora.",
        "Phagocytes — neutrophils and macrophages engulf and destroy microbes (phagocytosis).",
        "Inflammation — vasodilation and increased permeability bring cells and mediators to the site (the cardinal signs: redness, heat, swelling, pain, loss of function).",
        "Fever — pyrogen-driven rise in temperature that slows microbial growth and enhances immune function.",
        "Natural killer (NK) cells, the complement system and interferons — kill infected cells and amplify defence."
      ] },
      { h: "The complement system and interferons", p: "Complement is a cascade of plasma proteins that, once triggered, opsonises microbes (coats them for phagocytosis), directly lyses some bacteria via the membrane-attack complex, and generates mediators that drive inflammation and chemotaxis. Interferons are cytokines released by virus-infected cells that warn neighbouring cells and establish an antiviral state, limiting viral spread. Both bridge innate and adaptive immunity." },
      { h: "Phagocytosis step by step", p: "Phagocytosis proceeds through recognition and attachment (aided by opsonins such as antibody and complement), engulfment into a vacuole (phagosome), fusion with lysosomes to form a phagolysosome, killing and digestion by enzymes and reactive oxygen species, and finally elimination of debris. Some pathogens subvert this (Mycobacterium survives inside macrophages), which is why cell-mediated immunity is needed to control them." },
      { h: "Adaptive (specific) immunity", p: "Adaptive immunity is mediated by lymphocytes. Cell-mediated immunity uses T-lymphocytes: helper (CD4+) T cells orchestrate the whole response by secreting cytokines, and cytotoxic (CD8+) T cells kill virus-infected and tumour cells; it is vital against intracellular pathogens (viruses, TB, fungi). Humoral immunity uses B-lymphocytes, which on activation become plasma cells secreting antibodies against specific antigens, defending against extracellular microbes and toxins. Antigen-presenting cells display antigen on MHC molecules to activate T cells.", figure: {
        caption: "Two arms of adaptive immunity: cell-mediated (T cells) and humoral (B cells/antibodies).",
        svg: '<svg viewBox="0 0 520 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cell-mediated and humoral immunity"><rect x="30" y="20" width="200" height="34" rx="8" fill="#15803D"/><text x="130" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Adaptive immunity</text><rect x="10" y="74" width="230" height="36" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="125" y="90" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Cell-mediated (T cells)</text><text x="125" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">helper + cytotoxic T</text><rect x="280" y="74" width="230" height="36" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="395" y="90" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Humoral (B cells)</text><text x="395" y="104" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">plasma cells / antibodies</text><line x1="130" y1="54" x2="125" y2="72" stroke="#15803D" stroke-width="2"/><line x1="130" y1="54" x2="395" y2="72" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Antigens and antibodies", p: "An antigen is any molecule the immune system recognises as foreign and responds to; the specific region actually bound is the epitope (antigenic determinant). An antibody (immunoglobulin) is a Y-shaped glycoprotein of four polypeptide chains (two heavy, two light) with two identical antigen-binding (variable) arms and a constant region (Fc) that determines the class and effector function. Antibodies protect by neutralising toxins and viruses, opsonising microbes for phagocytosis, agglutinating them, and activating complement." },
      { h: "Antibody classes and proportions", list: [
        "IgG — the most abundant serum antibody (~75-80% of total); crosses the placenta; the main antibody of the secondary response and long-term protection.",
        "IgM — the largest (a pentamer); the first antibody produced in a primary response; a potent activator of complement.",
        "IgA — predominant in secretions (saliva, tears, breast milk, gut, respiratory mucus), protecting mucosal surfaces.",
        "IgE — least abundant in serum; mediates immediate (type I) allergy and defence against parasites.",
        "IgD — mainly a surface receptor on B cells, involved in their activation."
      ] },
      { h: "Primary and secondary responses", p: "On first exposure to an antigen (primary response) there is a lag of days, then a modest, mainly IgM antibody rise, and memory cells form. On re-exposure to the same antigen (secondary/anamnestic response) memory cells produce a faster, larger, longer-lasting and predominantly IgG response. This immunological memory is the scientific basis of vaccination, which safely 'teaches' the immune system in advance so that natural exposure triggers a swift protective secondary response.", figure: {
        caption: "Primary versus secondary antibody response after antigen exposure.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Primary and secondary immune response"><line x1="40" y1="120" x2="500" y2="120" stroke="#0F4C3A" stroke-width="1.5"/><line x1="40" y1="120" x2="40" y2="20" stroke="#0F4C3A" stroke-width="1.5"/><path d="M40,120 Q120,118 150,95 Q175,80 220,105 L260,118" fill="none" stroke="#15803D" stroke-width="2.5"/><path d="M260,118 Q300,116 320,45 Q340,30 380,35 L470,80" fill="none" stroke="#22C55E" stroke-width="2.5"/><text x="150" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">1st exposure (IgM)</text><text x="360" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">2nd exposure (fast, IgG)</text></svg>'
      } },
      { h: "Classification of acquired immunity", list: [
        "Active natural — antibodies and memory made by the body after clinical or subclinical infection (long-lasting).",
        "Active artificial — immunity produced by vaccination (long-lasting, boostable).",
        "Passive natural — ready-made maternal antibodies transferred via placenta (IgG) or breast milk (IgA); temporary.",
        "Passive artificial — ready-made antibodies given as immunoglobulin, e.g. anti-tetanus, anti-rabies, anti-D (immediate but temporary, no memory)."
      ] },
      { h: "Hypersensitivity reactions", p: "Hypersensitivity is an exaggerated or inappropriate immune response causing tissue damage, classified into four types. Type I (immediate, IgE-mediated) — anaphylaxis, allergic rhinitis, asthma; occurs within minutes. Type II (cytotoxic, IgG/IgM against cell-surface antigens) — haemolytic transfusion reactions, haemolytic disease of the newborn. Type III (immune-complex) — antigen-antibody complexes deposit in tissues, e.g. serum sickness, some glomerulonephritis. Type IV (delayed, T-cell-mediated) — reactions appearing over 24-72 hours, e.g. the tuberculin/Mantoux test and contact dermatitis. Recognising type I is vital for emergency care." },
      { h: "Autoimmunity and immunodeficiency", p: "In autoimmunity the immune system fails to tolerate self and attacks the body's own tissues (e.g. rheumatoid arthritis, type 1 diabetes, systemic lupus). Immunodeficiency is the failure of one or more components of immunity: primary (congenital) or, far more commonly, acquired/secondary — HIV/AIDS (depleting CD4+ T cells), malnutrition, cancer, corticosteroids, chemotherapy, splenectomy and the extremes of age. Immunocompromised patients are highly susceptible to opportunistic infection and need heightened precautions." },
      { h: "Clinical and nursing relevance", p: "Nurses apply immunology to immunization (harnessing memory), protective/reverse-barrier care of the immunocompromised, and the recognition and emergency management of anaphylaxis (adrenaline, airway, oxygen, fluids). They ensure correct ABO/Rh matching to prevent type II transfusion reactions, support nutrition to maintain immunity, and understand that maternal IgG and breast-milk IgA give the newborn temporary passive protection — a reason to promote breastfeeding." },
      { h: "Key values and figures", list: [
        "IgG ~75-80% of serum antibody; crosses placenta; secondary-response antibody.",
        "IgM: largest, first in primary response, best complement activator.",
        "IgA in secretions/breast milk; IgE in allergy; IgD B-cell receptor.",
        "Four hypersensitivity types: I IgE/immediate, II cytotoxic, III immune-complex, IV delayed/T-cell.",
        "Passive immunity = ready-made antibody (immediate, temporary); active = own response (slow, lasting)."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Differentiate innate and adaptive immunity with their components and mediators.",
      "Compare cell-mediated and humoral immunity and describe phagocytosis.",
      "Define antigen and antibody and describe the antibody classes and their proportions.",
      "Compare the primary and secondary immune responses and relate them to vaccination.",
      "Classify acquired immunity and describe the four types of hypersensitivity and causes of immunodeficiency."
    ],
    assessment: [
      { type: "mcq", q: "A splinter wound becomes red, hot, swollen and painful within hours. This immediate, non-specific response is part of:", options: ["Adaptive immunity", "Innate immunity (inflammation)", "Antibody memory", "Passive immunity"], answer: 1, rationale: "Inflammation is an immediate, non-specific innate response, present from birth without memory." },
      { type: "mcq", q: "Defence against a virus-infected cell depends most on:", options: ["B-lymphocytes alone", "Cytotoxic (CD8+) T-lymphocytes", "Red cells", "Platelets"], answer: 1, rationale: "Cytotoxic T cells (cell-mediated immunity) kill virus-infected cells." },
      { type: "mcq", q: "Antibodies in the blood are secreted by:", options: ["Neutrophils", "NK cells", "Plasma cells derived from B-lymphocytes", "Macrophages"], answer: 2, rationale: "Activated B cells differentiate into plasma cells that secrete antibodies." },
      { type: "mcq", q: "A serology report shows high IgM against a pathogen. This suggests:", options: ["A recent/acute (primary) infection", "Old immunity only", "No infection", "A vaccine failure"], answer: 0, rationale: "IgM is the first antibody made in a primary response, indicating recent/acute infection." },
      { type: "mcq", q: "A newborn is temporarily protected against measles because IgG:", options: ["Is made by the baby at birth", "Crosses the placenta from the mother", "Is in stomach acid", "Comes from vaccination at birth"], answer: 1, rationale: "Maternal IgG crosses the placenta, giving temporary passive natural immunity." },
      { type: "mcq", q: "The antibody predominant in breast milk and mucosal secretions is:", options: ["IgA", "IgD", "IgE", "IgM"], answer: 0, rationale: "Secretory IgA protects mucosal surfaces and is abundant in breast milk." },
      { type: "mcq", q: "A child is vaccinated with measles vaccine. The immunity produced is:", options: ["Passive natural", "Active artificial", "Passive artificial", "Innate"], answer: 1, rationale: "Vaccination stimulates the body's own long-lasting memory-based response — active artificial immunity." },
      { type: "mcq", q: "After a dog bite, ready-made anti-rabies immunoglobulin is given. This provides:", options: ["Active natural immunity", "Active artificial immunity", "Passive artificial immunity", "Innate immunity"], answer: 2, rationale: "Given antibodies confer immediate but temporary passive artificial immunity." },
      { type: "mcq", q: "A positive Mantoux (tuberculin) skin test read at 48-72 hours is an example of hypersensitivity type:", options: ["I (IgE, immediate)", "II (cytotoxic)", "III (immune complex)", "IV (delayed, T-cell)"], answer: 3, rationale: "The tuberculin reaction is a delayed, T-cell-mediated (type IV) hypersensitivity." },
      { type: "mcq", q: "A patient collapses with wheeze and hypotension minutes after an injection. This type I reaction is mediated by:", options: ["IgG", "IgM", "IgE", "T cells only"], answer: 2, rationale: "IgE mediates immediate (type I) hypersensitivity such as anaphylaxis." },
      { type: "fill", q: "A substance recognised by the immune system as foreign is called a/an ______.", accept: ["antigen"], rationale: "An antigen triggers a specific immune response; an antibody binds it." },
      { type: "fill", q: "The specific region of an antigen bound by an antibody is the ______.", accept: ["epitope", "antigenic determinant"], rationale: "The epitope (antigenic determinant) is the exact site the antibody recognises." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "mib-09-immunization",
    unit: "Unit 3 · Infection & Host-Microbe Relationship",
    title: "Immunization & Vaccines",
    readMinutes: 25,
    summary: "The principles of active and passive immunization, the immunological basis of vaccination, the types of vaccine with their advantages and limitations, the EPI schedule in Bangladesh, the cold chain and its temperatures, herd immunity, adverse events and contraindications, and the nurse's central role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Concept and importance", p: "Immunization is the process of conferring immunity against an infectious disease, most often by a vaccine. It is among the most cost-effective public-health interventions ever devised, having eradicated smallpox (declared 1980), brought polio to the brink of elimination, and greatly reduced measles, diphtheria, pertussis, tetanus and many childhood killers. It works by harnessing the adaptive immune response and immunological memory." },
      { h: "Immunological basis of vaccination", p: "A vaccine presents antigen to the immune system in a safe form, triggering a primary response that generates memory B and T cells without the danger of natural disease. On later natural exposure, these memory cells mount a rapid, strong, IgG-dominated secondary response that neutralises the pathogen before disease develops. Booster doses re-stimulate memory to raise and prolong protection. This is why timing, correct number of doses and boosters matter." },
      { h: "Active versus passive immunization", p: "Active immunization introduces an antigen (a vaccine) that stimulates the person's own immune system to generate antibodies and, crucially, memory cells — protection that is slow to develop but long-lasting and boostable. Passive immunization gives pre-formed antibodies (immunoglobulin, or naturally maternal antibody), providing immediate protection that is temporary and confers no memory — used when rapid protection is needed, e.g. after a tetanus-prone wound, rabies exposure, or in the immunodeficient who cannot mount their own response.", figure: {
        caption: "Active vs passive immunization: how protection is acquired and how long it lasts.",
        svg: '<svg viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Active versus passive immunization"><rect x="20" y="24" width="220" height="62" rx="10" fill="#DCFCE7" stroke="#15803D"/><text x="130" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Active (vaccine)</text><text x="130" y="64" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">body makes antibodies</text><text x="130" y="78" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">slow, long-lasting, memory</text><rect x="280" y="24" width="220" height="62" rx="10" fill="#F0FDF4" stroke="#22C55E"/><text x="390" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Passive (antibody)</text><text x="390" y="64" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">ready-made antibodies given</text><text x="390" y="78" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">immediate, temporary, no memory</text></svg>'
      } },
      { h: "Types of vaccine", list: [
        "Live attenuated — weakened live organisms (BCG, oral polio, measles); strong, durable immunity, often from a single dose, but must be avoided in severe immunodeficiency and pregnancy and need careful cold storage.",
        "Killed/inactivated — whole dead organisms (injectable/inactivated polio, some cholera); safe even in the immunocompromised but often need several doses and boosters.",
        "Toxoid — inactivated bacterial toxin (tetanus, diphtheria); protect against toxin-mediated disease, need boosters.",
        "Subunit/conjugate — purified antigens or polysaccharide linked to a protein (hepatitis B surface antigen, Hib, pneumococcal conjugate); highly specific and very safe."
      ] },
      { h: "Adjuvants and routes", p: "Many inactivated and subunit vaccines contain an adjuvant (e.g. aluminium salts) that enhances and prolongs the immune response. Route matters: BCG is given intradermally, most inactivated vaccines intramuscularly (e.g. pentavalent, hepatitis B) or subcutaneously (measles), and oral polio and some rotavirus vaccines are given by mouth. Giving the correct dose by the correct route is essential for efficacy and safety." },
      { h: "The Expanded Programme on Immunization (EPI) in Bangladesh", p: "Bangladesh's EPI provides free childhood vaccines, including BCG (tuberculosis) at birth, oral polio vaccine (OPV) and inactivated polio vaccine (IPV), the pentavalent vaccine (diphtheria, pertussis, tetanus, hepatitis B and Hib), pneumococcal conjugate vaccine (PCV), and measles-rubella (MR) vaccine, together with tetanus-diphtheria (Td) vaccination of women of child-bearing age to prevent maternal and neonatal tetanus. The programme has markedly reduced vaccine-preventable disease and childhood mortality." },
      { h: "The cold chain", p: "Vaccine potency depends on maintaining recommended temperatures — most refrigerated vaccines at 2-8 C — in an unbroken cold chain from manufacture through central, district and facility stores to the point of administration. Heat inactivates many vaccines, and freezing damages others (e.g. hepatitis B, pentavalent, which must never be frozen). Nurses store vaccines correctly, keep them off the freezer walls, monitor and record refrigerator temperatures twice daily, use vaccine vial monitors (VVMs), and discard vaccines exposed to unsafe temperatures.", figure: {
        caption: "The vaccine cold chain from manufacturer to child, kept at 2-8 C.",
        svg: '<svg viewBox="0 0 640 74" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cold chain"><defs><marker id="mibA9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Manufacturer","Central store","District store","Facility fridge","Child (2-8 C)"].map(function(t,i){var x=6+i*126;return "<rect x=\'"+x+"\' y=\'20\' width=\'114\' height=\'36\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+57)+"\' y=\'42\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'9\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<4?"<line x1=\'"+(x+114)+"\' y1=\'38\' x2=\'"+(x+126)+"\' y2=\'38\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA9)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "Herd immunity", p: "When a sufficiently high proportion of a population is immune, transmission of the pathogen is interrupted, indirectly protecting the non-immune — including newborns too young to vaccinate and the immunocompromised who cannot be vaccinated. The threshold rises with the infectiousness of the disease (very high for measles). Achieving and sustaining high coverage is therefore essential and is what makes elimination (e.g. of polio) achievable; falling coverage allows outbreaks to return." },
      { h: "Adverse events and contraindications", p: "Most vaccine reactions are minor and self-limiting (local soreness and swelling, low fever, irritability). Serious adverse events following immunization (AEFI) are rare. Anaphylaxis, though very uncommon, must be anticipated with adrenaline and resuscitation equipment immediately available at every session, and a short observation period is advised. Live vaccines are generally avoided in severe immunodeficiency and pregnancy; a genuine severe allergy to a vaccine component and severe illness are contraindications, while minor illness is not. All AEFIs should be recorded and reported." },
      { h: "Vaccine handling and administration safety", p: "Reconstituted lyophilised vaccines (e.g. BCG, measles) must be used within a few hours (often within 6 hours or a single session) and then discarded, kept cold and shaded meanwhile. Each patient receives a sterile single-use needle and syringe, given at the correct site and depth for the route, with the injection area not massaged. Open multi-dose vials are managed under the open-vial policy, and all sharps go directly into a puncture-proof container without recapping. These steps prevent both vaccine failure and injection-transmitted infection." },
      { h: "Clinical and nursing relevance", p: "Nurses are central to immunization: assessing eligibility and screening for contraindications, reconstituting and giving the correct vaccine by the correct route, dose and site, maintaining the cold chain and checking VVMs and expiry, keeping accurate immunization records and cards, educating families and countering vaccine hesitancy, recognising and managing reactions including anaphylaxis, ensuring safe injection and sharps disposal, and promoting full and timely coverage. They also administer passive immunization when immediate protection is required." },
      { h: "Key values and figures", list: [
        "Smallpox eradication declared 1980; polio near elimination.",
        "Most vaccines stored at 2-8 C; hepatitis B and pentavalent must not be frozen.",
        "BCG at birth (intradermal); pentavalent = DPT + hepatitis B + Hib.",
        "Live vaccines: avoid in severe immunodeficiency and pregnancy.",
        "Always have adrenaline and resuscitation ready for anaphylaxis."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Differentiate active and passive immunization with examples and the immunological basis of vaccination.",
      "Describe the types of vaccine, giving advantages, limitations and an example of each.",
      "Outline the EPI schedule in Bangladesh, including the pentavalent vaccine.",
      "What is the cold chain, at what temperatures are vaccines kept, and why is it essential?",
      "Explain herd immunity, vaccine adverse events and the nurse's role in immunization."
    ],
    assessment: [
      { type: "mcq", q: "A vaccine protects on later natural exposure because it produces:", options: ["Ready-made donated antibodies", "Memory cells that mount a rapid secondary response", "Sterile blood", "Loss of normal flora"], answer: 1, rationale: "Active immunization generates memory cells, giving a fast, strong secondary response on exposure." },
      { type: "mcq", q: "A patient with a tetanus-prone wound and no immunity needs immediate protection. The best choice is:", options: ["Long-term active vaccination alone", "Passive immunization with ready-made antitoxin/immunoglobulin", "No treatment", "Antibiotics only"], answer: 1, rationale: "Pre-formed antibodies give immediate (though temporary) protection, needed post-exposure." },
      { type: "mcq", q: "BCG, oral polio and measles vaccines are examples of ______ vaccines.", options: ["Toxoid", "Killed whole-cell", "Live attenuated", "Subunit"], answer: 2, rationale: "These use weakened live organisms (live attenuated vaccines)." },
      { type: "mcq", q: "Tetanus and diphtheria are prevented using ______ vaccines.", options: ["Toxoid (inactivated toxin)", "Live attenuated", "Conjugate", "Killed whole-cell"], answer: 0, rationale: "Toxoids are inactivated toxins protecting against toxin-mediated disease." },
      { type: "mcq", q: "A live attenuated vaccine should generally be withheld from:", options: ["A healthy toddler", "A pregnant woman or severely immunocompromised patient", "The elderly only", "Everyone"], answer: 1, rationale: "Weakened live organisms may cause disease in pregnancy or severe immunodeficiency." },
      { type: "mcq", q: "The pentavalent vaccine protects against diphtheria, pertussis, tetanus, Hib and:", options: ["Hepatitis B", "Cholera", "Dengue", "Malaria"], answer: 0, rationale: "Pentavalent covers DPT plus Hib and hepatitis B." },
      { type: "mcq", q: "A nurse finds the vaccine fridge froze overnight. Pentavalent and hepatitis B vaccine should be:", options: ["Used quickly", "Discarded, since freezing damages them", "Warmed and reused", "Diluted"], answer: 1, rationale: "Freezing irreversibly damages adjuvanted vaccines like hepatitis B and pentavalent; they must be discarded." },
      { type: "mcq", q: "A newborn too young to vaccinate is nonetheless protected against measles in a highly vaccinated community. This is due to:", options: ["Direct antibody injection", "Herd immunity interrupting transmission", "Sterile air", "Innate immunity boosting"], answer: 1, rationale: "High population immunity blocks spread, indirectly protecting the unvaccinated (herd immunity)." },
      { type: "mcq", q: "In the Bangladesh EPI, the vaccine given at birth to protect against tuberculosis is:", options: ["Measles-rubella", "BCG", "Tetanus toxoid", "Pentavalent"], answer: 1, rationale: "BCG is given intradermally at birth to protect against tuberculosis." },
      { type: "mcq", q: "Before every immunization session the nurse must ensure the ready availability of:", options: ["Antibiotics", "Adrenaline and resuscitation equipment for anaphylaxis", "Blood for transfusion", "Antifungals"], answer: 1, rationale: "Though rare, anaphylaxis demands immediate adrenaline and resuscitation readiness." },
      { type: "fill", q: "Vaccination that stimulates the body's own long-lasting protection is ______ immunization.", accept: ["active"], rationale: "Active immunization produces the host's own memory-based response." },
      { type: "fill", q: "The unbroken refrigerated system keeping vaccines potent (mostly at 2-8 C) until use is the ______ chain.", accept: ["cold"], rationale: "The cold chain maintains vaccines at safe temperatures throughout distribution." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "mib-10-physical-control",
    unit: "Unit 4 · Control of Microorganisms",
    title: "Sterilization & Physical Methods of Microbial Control",
    readMinutes: 25,
    summary: "Definitions of sterilization, disinfection, antisepsis and asepsis; the mechanisms by which physical agents kill microbes; moist and dry heat methods with their temperatures and times (autoclave, hot-air oven, boiling, pasteurization, tyndallisation); filtration, radiation and desiccation; sterilization monitoring; and the nursing application.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why control microbial growth", p: "Controlling microbes prevents infection, contamination and spoilage. In health care, reprocessing of instruments and preparation of the environment protect patients from healthcare-associated infection, and the preparation of sterile media and fluids protects laboratory and pharmaceutical products. Methods are physical (heat, radiation, filtration) or chemical (disinfectants, antiseptics, gases); this topic covers the physical methods and the essential definitions." },
      { h: "Key definitions", list: [
        "Sterilization — a process that destroys or removes ALL micro-organisms, including the most resistant bacterial spores.",
        "Disinfection — reduction of pathogenic microbes on inanimate objects to a safe level, but not necessarily killing all spores.",
        "Antisepsis — inhibition or destruction of microbes on living tissue (skin, wounds).",
        "Asepsis — the prevention of contamination by microbes (aseptic technique).",
        "Sanitization — reduction of microbial numbers to safe public-health levels (e.g. of eating utensils).",
        "Decontamination — removal or reduction of contaminants so an item is safe to handle."
      ] },
      { h: "How physical agents kill microbes", p: "Heat kills chiefly by irreversibly denaturing (coagulating) proteins and enzymes and by damaging membranes and nucleic acids. Moist heat is more effective than dry heat at a given temperature because water penetrates cells and conducts heat efficiently and steam releases latent heat on condensation, coagulating proteins at lower temperatures and in less time. Radiation damages nucleic acids directly (UV causing thymine dimers) or by generating destructive free radicals (ionising radiation). Filtration physically removes microbes; desiccation and high osmotic pressure withhold the water microbes need to grow." },
      { h: "The resistance hierarchy", p: "Microbes vary greatly in resistance to physical and chemical killing, from most to least resistant: bacterial endospores (most resistant) > mycobacteria (waxy wall) > non-enveloped (naked) viruses > fungi and vegetative bacteria > enveloped viruses (least resistant). Any process claiming to sterilize must destroy the most resistant form — bacterial spores — which is why spore-killing is the benchmark for sterilization." },
      { h: "Moist heat methods", list: [
        "Autoclave — saturated steam under pressure, standard cycle 121 C at 15 psi for about 15 minutes (or 134 C for ~3 minutes); the standard hospital sterilization method that reliably kills spores. Used for instruments, dressings, linen, gloves and culture media.",
        "Boiling — 100 C kills vegetative organisms in a few minutes but does NOT reliably kill spores, so it DISINFECTS rather than sterilizes.",
        "Pasteurization — controlled gentle heating that kills pathogens without sterilizing, preserving the product: holder method 63 C for 30 minutes, or flash/HTST 72 C for 15 seconds.",
        "Tyndallisation (intermittent steaming) — steaming at 100 C for 30 minutes on three successive days, so spores germinating between cycles are killed."
      ], figure: {
        caption: "Physical methods of microbial control by category.",
        svg: '<svg viewBox="0 0 560 128" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Physical control methods"><rect x="180" y="10" width="200" height="32" rx="8" fill="#15803D"/><text x="280" y="31" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFFFFF">Physical methods</text><rect x="20" y="76" width="150" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="95" y="93" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Heat</text><text x="95" y="108" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#0F4C3A">moist / dry</text><rect x="205" y="76" width="150" height="40" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="280" y="93" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Radiation</text><text x="280" y="108" text-anchor="middle" font-family="sans-serif" font-size="8.8" fill="#0F4C3A">UV / gamma</text><rect x="390" y="76" width="150" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="465" y="93" text-anchor="middle" font-family="sans-serif" font-size="10.5" font-weight="700" fill="#0F4C3A">Filtration / drying</text><line x1="280" y1="42" x2="95" y2="74" stroke="#15803D" stroke-width="2"/><line x1="280" y1="42" x2="280" y2="74" stroke="#22C55E" stroke-width="2"/><line x1="280" y1="42" x2="465" y2="74" stroke="#15803D" stroke-width="2"/></svg>'
      } },
      { h: "Dry heat methods", p: "Dry heat sterilizes by oxidation and protein denaturation at higher temperatures for longer than moist heat (e.g. hot-air oven, commonly 160 C for 1 hour or 170-180 C for shorter times). It suits materials that steam would damage or cannot penetrate — glassware, powders, oils and greases, and sharp metal instruments. Flaming (of the inoculating loop) and incineration (of contaminated waste, dressings and disposables) are also dry-heat methods; red heat sterilizes loops and forceps directly in a flame." },
      { h: "Filtration", p: "Filtration removes rather than kills microbes and is used for heat-sensitive fluids (sera, antibiotic solutions, some intravenous fluids) passed through membrane filters. A membrane pore size of 0.22 micrometre retains bacteria and fungi (though not all viruses or mycoplasma). HEPA (high-efficiency particulate air) filters supply microbe-free air to operating theatres, laminar-flow cabinets and protective isolation rooms. Filtration is essential where heat would destroy the product." },
      { h: "Radiation and desiccation", list: [
        "Ultraviolet (UV) radiation — non-ionising; used for surface and air disinfection (e.g. safety cabinets, operating theatres) but has poor penetration and does not sterilize solids.",
        "Ionising (gamma) radiation — deeply penetrating; the industrial method of choice for sterilizing pre-packed single-use disposables (syringes, gloves, catheters, sutures).",
        "Desiccation (drying) and high osmotic pressure — high salt or sugar concentrations withdraw water and inhibit growth (food preservation), though they may not kill all microbes, especially spores."
      ] },
      { h: "Monitoring sterilization", p: "Because sterility cannot be judged by eye, sterilization is verified by three complementary indicators. Mechanical/physical indicators record cycle time, temperature and pressure. Chemical indicators (autoclave tape or strips such as Bowie-Dick) change colour to show the item was exposed to the process. Biological indicators — spores of a resistant organism (Geobacillus stearothermophilus for steam, Bacillus atrophaeus for dry heat and ethylene oxide) that must be killed — are the definitive proof the cycle actually kills spores. Regular monitoring assures reprocessed instruments are truly safe." },
      { h: "Sterile pack and shelf-life handling", p: "A processed item is sterile only while its packaging remains intact, dry and unopened; sterility is event-related, so a pack is considered contaminated if it is torn, wet, dropped on the floor or past its expiry, and the chemical indicator must have changed correctly before use. Packs are opened away from the body onto a clean dry surface, touching only the outer flaps, so that the sterile field and contents are not contaminated. The nurse inspects every pack for integrity, seal, indicator and date before opening." },
      { h: "Clinical and nursing relevance", p: "Nurses depend on these principles daily: using autoclaved sterile instruments and dressings, understanding that boiling and pasteurization DISINFECT but do not sterilize, selecting the correct method for each item (steam for instruments and linen, dry heat for glass/oils, filtration for heat-labile fluids, gamma for prepacked disposables), handling and opening sterile packs without contamination, checking chemical and biological indicators and expiry, and disposing of contaminated waste by incineration. Correct application directly protects patients from infection." },
      { h: "Key values and figures", list: [
        "Autoclave: 121 C, 15 psi, 15 min (or 134 C, ~3 min).",
        "Hot-air oven: 160 C for 1 h (or 170-180 C shorter).",
        "Boiling: 100 C kills vegetative cells but not all spores (disinfection).",
        "Pasteurization: 63 C/30 min (holder) or 72 C/15 s (HTST).",
        "Sterilising filter pore size: 0.22 um; biological indicator: G. stearothermophilus."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define sterilization, disinfection, antisepsis and asepsis.",
      "Explain why moist heat is more effective than dry heat, and describe the resistance hierarchy.",
      "Describe the autoclave, its operating conditions, uses and how it differs from boiling.",
      "Compare filtration, UV and gamma radiation as physical control methods, with pore size and uses.",
      "How is the effectiveness of sterilization monitored?"
    ],
    assessment: [
      { type: "mcq", q: "An instrument must be free of ALL microbes including spores. The correct term for this process is:", options: ["Disinfection", "Sterilization", "Sanitization", "Antisepsis"], answer: 1, rationale: "Sterilization destroys all micro-organisms, including resistant bacterial spores." },
      { type: "mcq", q: "Surgical instruments, linen and dressings are best sterilized by the:", options: ["Hot-air oven", "Boiling water bath", "Autoclave (steam under pressure)", "UV cabinet"], answer: 2, rationale: "The autoclave (121 C, 15 psi, 15 min) reliably sterilizes instruments, linen and dressings." },
      { type: "mcq", q: "Moist heat sterilizes at a lower temperature than dry heat because water:", options: ["Adds chemicals", "Penetrates and conducts heat, coagulating proteins efficiently", "Cools the microbes", "Is always cheaper"], answer: 1, rationale: "Water penetrates cells and steam releases latent heat, coagulating proteins at lower temperatures." },
      { type: "mcq", q: "A nurse boils instruments for 10 minutes in a rural clinic. This procedure:", options: ["Sterilizes them completely", "Disinfects but does not reliably kill spores", "Has no antimicrobial effect", "Only cleans grease"], answer: 1, rationale: "Boiling at 100 C kills vegetative organisms but not all spores, so it disinfects rather than sterilizes." },
      { type: "mcq", q: "Glassware, powders and oils that steam would damage or not penetrate are best sterilized by:", options: ["Hot-air oven (dry heat)", "Autoclave", "Pasteurization", "UV light"], answer: 0, rationale: "Dry heat (hot-air oven, e.g. 160 C/1 h) suits materials steam cannot penetrate or would damage." },
      { type: "mcq", q: "A heat-sensitive antibiotic solution must be rendered bacteria-free. The nurse should ensure it is treated by:", options: ["Boiling", "Filtration through a 0.22 um membrane", "Flaming", "Incineration"], answer: 1, rationale: "A 0.22 um membrane filter removes bacteria from heat-labile fluids without heat." },
      { type: "mcq", q: "Pre-packed single-use syringes and gloves are sterilized industrially by:", options: ["Boiling", "Hand washing", "Gamma (ionising) radiation", "Refrigeration"], answer: 2, rationale: "Deeply penetrating gamma radiation sterilizes sealed single-use disposables." },
      { type: "mcq", q: "The definitive proof that an autoclave cycle killed spores is a:", options: ["Colour-change tape alone", "Thermometer reading alone", "Biological indicator using resistant spores", "Visual inspection"], answer: 2, rationale: "Biological indicators (resistant spores such as G. stearothermophilus) confirm the process kills spores." },
      { type: "mcq", q: "Pasteurizing milk at 72 C for 15 seconds is best described as a process that:", options: ["Sterilizes the milk", "Freezes it", "Adds preservatives", "Kills pathogens without sterilizing, preserving the product"], answer: 3, rationale: "Pasteurization (63 C/30 min or 72 C/15 s) kills pathogens while preserving the product." },
      { type: "mcq", q: "The MOST resistant microbial form, which any sterilization process must destroy, is the:", options: ["Enveloped virus", "Vegetative bacterium", "Bacterial endospore", "Fungal yeast"], answer: 2, rationale: "Bacterial endospores are the most resistant form and are the benchmark for sterilization." },
      { type: "fill", q: "The prevention of contamination by micro-organisms (aseptic technique) is called ______.", accept: ["asepsis"], rationale: "Asepsis is the prevention of microbial contamination." },
      { type: "fill", q: "The membrane filter pore size that retains bacteria from a fluid is ______ micrometre.", accept: ["0.22", "0.2", ".22"], rationale: "A 0.22 um membrane filter retains bacteria and fungi." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "mib-11-disinfection",
    unit: "Unit 4 · Control of Microorganisms",
    title: "Disinfection, Antiseptics & Chemical Control",
    readMinutes: 25,
    summary: "Chemical control of microbes — antiseptics, disinfectants and chemical sterilants; the mechanisms of action on membranes, proteins and nucleic acids; the main groups of chemical agents; the factors determining effectiveness; the Spaulding classification of instruments; standard/universal precautions and PPE; and the nurse's daily application including hand hygiene.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key definitions", list: [
        "Antiseptic — a chemical applied to living tissue (skin, mucosa, wounds) to kill or inhibit microbes.",
        "Disinfectant — a chemical used on inanimate surfaces/equipment to destroy most microbes (usually too harsh for living tissue).",
        "Chemical sterilant — an agent that destroys all microbes including spores given adequate contact (e.g. glutaraldehyde; ethylene oxide gas).",
        "Bactericidal agents kill microbes; bacteriostatic agents merely inhibit their multiplication.",
        "The suffix '-cidal' means killing (bactericidal, virucidal, sporicidal, fungicidal); '-static' means inhibiting."
      ] },
      { h: "Mechanisms of action", p: "Chemical agents act by one or more mechanisms: altering membrane permeability so the cell contents leak out (surfactants, alcohols, phenols); denaturing (coagulating) proteins and enzymes (alcohols, aldehydes, heavy metals, acids/alkalis); and damaging or alkylating nucleic acids (aldehydes, ethylene oxide). Oxidising agents (hypochlorite, hydrogen peroxide) inactivate microbes through oxidative damage to multiple targets. Alcohols require water to coagulate protein effectively, which is why about 70% alcohol is more microbicidal than absolute (100%) alcohol.", figure: {
        caption: "How chemical agents damage microbes: membrane, proteins/enzymes, nucleic acids.",
        svg: '<svg viewBox="0 0 560 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mechanisms of chemical action"><rect x="20" y="24" width="160" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="100" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Disrupt membrane</text><text x="100" y="55" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">leakage of contents</text><rect x="200" y="24" width="160" height="40" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="280" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Denature proteins</text><text x="280" y="55" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">enzymes inactivated</text><rect x="380" y="24" width="160" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="460" y="41" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Damage nucleic acid</text><text x="460" y="55" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">blocks replication</text></svg>'
      } },
      { h: "Common antiseptics", p: "Antiseptics for skin and wounds include about 70% alcohol (isopropyl or ethyl, for intact skin before injection; rapid but no residual action), chlorhexidine (hand and skin/surgical-site preparation; persistent residual action), povidone-iodine (skin and wound preparation), and hydrogen peroxide (wound cleansing). They must balance antimicrobial efficacy against tolerance by living tissue, so harsher disinfectants must never be used on skin or wounds." },
      { h: "Common disinfectants", p: "Disinfectants for surfaces and equipment include sodium hypochlorite (bleach) for environmental surfaces and blood/body-fluid spills (higher concentrations for spills), phenolic compounds (floors and surfaces), and quaternary ammonium compounds ('quats', low-level surface disinfection). Concentration and contact time must follow local policy. These agents are stronger and often irritant or toxic, requiring correct dilution, ventilation and protective equipment." },
      { h: "Chemical sterilants and gaseous agents", p: "Some chemicals can sterilize given adequate concentration and contact time. Glutaraldehyde (2%) and ortho-phthalaldehyde disinfect and, with prolonged contact, sterilize heat-sensitive instruments such as endoscopes. Ethylene oxide gas sterilizes heat- and moisture-sensitive equipment industrially but is toxic, flammable and needs aeration. Hydrogen peroxide vapour/plasma is a newer low-temperature sterilant. These require strict safety precautions and monitoring." },
      { h: "Factors affecting effectiveness", p: "Efficacy depends on concentration and contact (exposure) time (the two most controllable factors); temperature and pH; the number, type and state of the microbes present (following the resistance hierarchy: spores most resistant, then mycobacteria, then non-enveloped viruses, with vegetative bacteria and enveloped viruses least resistant); and, critically, the presence of organic matter (blood, pus, faeces) which physically shields microbes and chemically inactivates many agents (especially hypochlorite). Hence instruments must be thoroughly CLEANED before disinfection or sterilization, and correct dilution and contact time observed." },
      { h: "The Spaulding classification", p: "Spaulding's classification matches the level of reprocessing to the infection risk of an item. Critical items enter sterile tissue or the vascular system (surgical instruments, needles) and must be STERILIZED. Semi-critical items contact mucous membranes or non-intact skin (endoscopes, respiratory equipment) and need high-level disinfection at least. Non-critical items contact only intact skin (blood-pressure cuffs, bedpans) and need cleaning and low- or intermediate-level disinfection. This framework guides safe, proportionate reprocessing." },
      { h: "Standard (universal) precautions", p: "Standard precautions treat all blood and body fluids as potentially infectious and apply to every patient regardless of diagnosis: hand hygiene; appropriate personal protective equipment (gloves, gowns, masks, eye protection) selected by anticipated exposure; safe injection and sharps practice (never recapping needles; using sharps containers); safe handling of specimens, linen and waste; environmental cleaning; and respiratory hygiene. They are the baseline that protects both patients and health workers, supplemented by transmission-based precautions where a specific route requires it.", figure: {
        caption: "Standard precautions applied to every patient's blood and body fluids.",
        svg: '<svg viewBox="0 0 560 82" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standard precautions"><rect x="12" y="26" width="132" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="78" y="50" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Hand hygiene</text><rect x="154" y="26" width="132" height="40" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="220" y="50" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">PPE</text><rect x="296" y="26" width="132" height="40" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="362" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Safe sharps</text><text x="362" y="59" text-anchor="middle" font-family="sans-serif" font-size="8.3" fill="#0F4C3A">no recapping</text><rect x="438" y="26" width="112" height="40" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="494" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Waste/linen</text><text x="494" y="59" text-anchor="middle" font-family="sans-serif" font-size="8.3" fill="#0F4C3A">safe handling</text></svg>'
      } },
      { h: "Hand hygiene", p: "Hand hygiene is the single most effective measure to prevent healthcare-associated infection. An alcohol-based hand rub is the preferred routine method for clean hands, being rapid and effective against most vegetative bacteria and enveloped viruses; soap and water are required when hands are visibly soiled and against spores such as Clostridioides difficile (which alcohol does not kill). The WHO 'five moments' define when to perform hand hygiene: before touching a patient, before a clean/aseptic procedure, after body-fluid exposure risk, after touching a patient, and after touching the patient's surroundings." },
      { h: "Personal protective equipment (PPE)", p: "PPE is selected according to the anticipated exposure and is a key part of standard precautions: gloves for contact with blood, body fluids, mucous membranes or contaminated items; a plastic apron or gown to protect clothing/skin from splashing; a surgical mask and eye protection or a face shield when splashes to the face are likely; and a respirator (N95/FFP2) for airborne precautions. The correct order of putting on and, especially, safely removing PPE (to avoid self-contamination), followed immediately by hand hygiene, is essential — PPE supplements but never replaces hand hygiene." },
      { h: "Clinical and nursing relevance", p: "Nurses use chemical control constantly — skin antisepsis before injections and procedures, cleaning surfaces and managing spills with correctly diluted disinfectant, reprocessing instruments at the right concentration and contact time after thorough cleaning, applying the Spaulding principle, and observing standard and transmission-based precautions. Above all, correct hand hygiene at the five moments remains the most effective single action to protect patients and staff." },
      { h: "Key values and figures", list: [
        "70% alcohol > 100% alcohol (water needed to coagulate protein).",
        "Spaulding: critical -> sterilize; semi-critical -> high-level disinfect; non-critical -> clean/low-level.",
        "Glutaraldehyde 2% for heat-sensitive endoscopes; ethylene oxide for heat-sensitive equipment.",
        "Organic matter inactivates disinfectants -> clean before disinfecting.",
        "Alcohol rub for clean hands; soap and water if soiled or for C. difficile spores; WHO five moments."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define antiseptic, disinfectant and chemical sterilant, and distinguish -cidal from -static agents.",
      "Explain the mechanisms by which chemical agents kill or inhibit microbes.",
      "Give examples of common antiseptics and disinfectants and their uses.",
      "List the factors that affect the effectiveness of a chemical agent, and outline the Spaulding classification.",
      "Describe standard (universal) precautions, hand hygiene and their importance."
    ],
    assessment: [
      { type: "mcq", q: "A nurse must prepare the skin before an injection. The correct agent is a/an:", options: ["Disinfectant such as bleach", "Antiseptic such as 70% alcohol", "Chemical sterilant", "Detergent only"], answer: 1, rationale: "Antiseptics (e.g. 70% alcohol) are used on living tissue; disinfectants would damage skin." },
      { type: "mcq", q: "Sodium hypochlorite (bleach) is most appropriately used for:", options: ["Preparing a patient's skin", "Disinfecting surfaces and blood/body-fluid spills", "Oral rinsing", "Wound cleansing"], answer: 1, rationale: "Bleach is a surface disinfectant, too harsh for skin, and is used for spills." },
      { type: "mcq", q: "70% alcohol is more effective than absolute (100%) alcohol because:", options: ["It is cheaper", "Water is required to coagulate microbial protein", "It is coloured", "It evaporates instantly"], answer: 1, rationale: "Alcohol needs water to denature protein effectively, so 70% outperforms absolute alcohol." },
      { type: "mcq", q: "Oxidising agents such as hypochlorite and hydrogen peroxide kill microbes mainly by:", options: ["Feeding them", "Cooling them", "Oxidative damage to multiple cell components", "Adding nutrients"], answer: 2, rationale: "Oxidising agents cause oxidative damage to membranes, proteins and nucleic acids." },
      { type: "mcq", q: "A disinfectant is applied to a surface still soiled with blood and works poorly. The reason is that organic matter:", options: ["Improves the action", "Shields microbes and inactivates many disinfectants", "Has no effect", "Is itself sterile"], answer: 1, rationale: "Organic matter physically shields microbes and chemically inactivates many agents, so items must be cleaned first." },
      { type: "mcq", q: "A heat-sensitive endoscope needs high-level reprocessing. A suitable agent is:", options: ["Autoclaving", "Glutaraldehyde 2%", "Boiling only", "Soap and water only"], answer: 1, rationale: "Glutaraldehyde is a chemical agent suitable for heat-sensitive instruments like endoscopes." },
      { type: "mcq", q: "Under the Spaulding classification, surgical instruments entering sterile tissue are 'critical' items and must be:", options: ["Only wiped", "Sterilized", "Low-level disinfected", "Air-dried only"], answer: 1, rationale: "Critical items entering sterile tissue/vasculature must be sterilized." },
      { type: "mcq", q: "The microbes MOST resistant to chemical disinfectants, requiring the strongest process, are:", options: ["Enveloped viruses", "Vegetative bacteria", "Bacterial spores", "Fungal yeasts"], answer: 2, rationale: "Bacterial spores are the most resistant forms in the disinfectant-resistance hierarchy." },
      { type: "mcq", q: "For a patient with Clostridioides difficile diarrhoea, hand hygiene should be performed with:", options: ["Alcohol hand rub only", "Soap and water (alcohol does not kill C. difficile spores)", "Dry wiping", "Nothing needed"], answer: 1, rationale: "Alcohol rubs do not kill spores; soap and water are required for C. difficile." },
      { type: "mcq", q: "The single most effective chemical measure to prevent cross-infection is:", options: ["Hand hygiene at the five moments", "Air freshener", "Floor mopping", "Antibiotic prophylaxis"], answer: 0, rationale: "Hand hygiene (alcohol rub or soap/water) at the WHO five moments is the most effective infection-control measure." },
      { type: "fill", q: "A chemical used on non-living surfaces and equipment to destroy microbes is a ______.", accept: ["disinfectant"], rationale: "Disinfectants act on inanimate objects; antiseptics on living tissue." },
      { type: "fill", q: "Blood, pus and faeces that reduce a disinfectant's action are collectively called ______ matter.", accept: ["organic"], rationale: "Organic matter shields microbes and inactivates many chemical agents." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "mib-12-antimicrobials-amr",
    unit: "Unit 4 · Control of Microorganisms",
    title: "Antimicrobial Chemotherapy & Antibiotic Resistance",
    readMinutes: 26,
    summary: "Classes of antimicrobial drugs and the principle of selective toxicity, the main mechanisms of antibiotic action, bactericidal/bacteriostatic and spectrum, culture and sensitivity testing and MIC, the mechanisms and drivers of antimicrobial resistance, key resistant organisms, antimicrobial stewardship and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are antimicrobials?", p: "Antimicrobials are drugs that kill or inhibit microbes to treat infection. They are grouped by target organism: antibacterials (antibiotics), antivirals, antifungals and antiparasitics/anthelmintics. Antibiotics may be natural products of microbes (e.g. penicillin from Penicillium), semi-synthetic or fully synthetic. The guiding principle is selective toxicity — harming the microbe while sparing human cells by attacking structures or pathways unique to, or different in, the pathogen. Antibiotics act on bacteria and are ineffective against viruses." },
      { h: "Selective toxicity", p: "Selective toxicity is achieved by targeting features present in bacteria but absent from human cells — the peptidoglycan cell wall (humans have none), the 70S ribosome (human ribosomes are 80S), and bacterial folate synthesis (humans obtain folate from the diet). The narrower the difference between the effective dose and the toxic dose (the therapeutic index), the more carefully the drug must be dosed and monitored (e.g. aminoglycosides, with renal and ototoxic risks)." },
      { h: "Mechanisms of antibiotic action", list: [
        "Inhibition of cell-wall synthesis — penicillins, cephalosporins, vancomycin (target peptidoglycan, absent from human cells; bactericidal).",
        "Inhibition of protein synthesis — aminoglycosides, tetracyclines, macrolides, chloramphenicol (target the 70S ribosome).",
        "Inhibition of nucleic-acid synthesis — fluoroquinolones (DNA gyrase/topoisomerase), rifampicin (RNA polymerase).",
        "Antimetabolites — sulphonamides and trimethoprim block folic-acid synthesis.",
        "Disruption of the cell membrane — polymyxins, daptomycin."
      ], figure: {
        caption: "Antibiotic targets in the bacterial cell.",
        svg: '<svg viewBox="0 0 560 92" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Antibiotic mechanisms"><rect x="14" y="28" width="128" height="44" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="78" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Cell wall</text><text x="78" y="60" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">penicillins</text><rect x="152" y="28" width="128" height="44" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="216" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Protein synth.</text><text x="216" y="60" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">tetracyclines</text><rect x="290" y="28" width="128" height="44" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="354" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Nucleic acid</text><text x="354" y="60" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">quinolones</text><rect x="428" y="28" width="120" height="44" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="488" y="46" text-anchor="middle" font-family="sans-serif" font-size="9.5" font-weight="700" fill="#0F4C3A">Folate path.</text><text x="488" y="60" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">sulphonamides</text></svg>'
      } },
      { h: "Bactericidal, bacteriostatic and spectrum", list: [
        "Bactericidal — kills bacteria (e.g. penicillins, aminoglycosides, fluoroquinolones); preferred in serious infection and the immunocompromised.",
        "Bacteriostatic — halts multiplication so host defences clear the organism (e.g. tetracyclines, macrolides).",
        "Broad-spectrum — active against many bacterial types (useful empirically but disturbs normal flora, risking superinfection and resistance).",
        "Narrow-spectrum — active against a limited range (preferred once the organism is known, sparing normal flora)."
      ] },
      { h: "Empirical versus targeted therapy", p: "Empirical therapy is the best-guess antibiotic started before laboratory results, based on the likely organisms, the site, local resistance patterns and the patient's condition; it is often broad-spectrum. Targeted (definitive) therapy then narrows treatment to the specific organism and its sensitivities once culture results are available (de-escalation). Timely de-escalation improves outcomes, reduces toxicity and normal-flora disruption, and slows resistance." },
      { h: "Culture and sensitivity testing (C&S) and MIC", p: "To select the most appropriate drug, the laboratory isolates (cultures) the organism from a specimen and tests it against a panel of antibiotics — the culture and sensitivity test — commonly by disc diffusion (Kirby-Bauer), reporting each drug as sensitive, intermediate or resistant. The minimum inhibitory concentration (MIC) is the lowest concentration that prevents visible growth and guides dosing. Crucially, specimens should be collected BEFORE the first antibiotic dose so the organism can still be recovered and the result is valid." },
      { h: "Mechanisms of resistance", list: [
        "Enzymatic destruction or modification of the drug (e.g. beta-lactamases hydrolysing penicillins; extended-spectrum beta-lactamases, ESBLs).",
        "Alteration of the drug target so the antibiotic no longer binds (e.g. altered penicillin-binding proteins in MRSA).",
        "Reduced uptake (altered porins) or increased efflux (pumping the drug out).",
        "Bypass of the blocked metabolic pathway (e.g. alternative folate route).",
        "Resistance genes arising by mutation and, importantly, spread by horizontal transfer on plasmids and transposons — even between species."
      ] },
      { h: "Key resistant organisms", p: "Resistant organisms of major concern include MRSA (methicillin-resistant Staphylococcus aureus, with altered penicillin-binding protein), ESBL- and carbapenemase-producing Gram-negative bacteria (e.g. resistant E. coli and Klebsiella), vancomycin-resistant enterococci (VRE), multidrug-resistant (MDR) and extensively drug-resistant (XDR) tuberculosis, and Clostridioides difficile that flourishes after antibiotic disruption of flora. These require strict infection control and, often, reserve antibiotics." },
      { h: "Drivers of AMR and stewardship", p: "Antimicrobial resistance (AMR) is a major global threat that renders infections difficult or impossible to treat, raising mortality, length of stay and cost. It is driven by overuse and misuse: prescribing for viral illness, wrong drug/dose/duration, incomplete or unnecessary courses, unregulated over-the-counter sale, and heavy use in agriculture and aquaculture. Antimicrobial stewardship counters this by ensuring the right drug, dose, route and duration; de-escalation guided by C&S; use of narrow-spectrum agents when possible; and strong infection prevention so fewer antibiotics are needed.", figure: {
        caption: "Antimicrobial stewardship: the right drug, dose, route and duration.",
        svg: '<svg viewBox="0 0 560 74" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stewardship five rights"><rect x="12" y="22" width="128" height="36" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="76" y="44" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Right drug</text><rect x="152" y="22" width="122" height="36" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="213" y="44" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Right dose</text><rect x="286" y="22" width="122" height="36" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="347" y="44" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Right route</text><rect x="420" y="22" width="128" height="36" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="484" y="44" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Right duration</text></svg>'
      } },
      { h: "Adverse effects and drug interactions", p: "Antibiotics carry important adverse effects the nurse must monitor: hypersensitivity and anaphylaxis (especially penicillins, requiring careful allergy history); disruption of normal flora causing candidiasis and Clostridioides difficile colitis; specific toxicities such as nephrotoxicity and ototoxicity with aminoglycosides and vancomycin (which may need therapeutic drug monitoring), tendon and QT effects with fluoroquinolones, and photosensitivity and dental staining with tetracyclines (avoided in young children and pregnancy). The nurse checks for interactions, gives doses correctly relative to food where specified, and reports reactions promptly." },
      { h: "Clinical and nursing relevance", p: "Nurses are pivotal in combating AMR: administering antibiotics accurately, at the right dose, route and time and maintaining therapeutic levels; collecting specimens for C&S before the first dose; monitoring efficacy and adverse effects/allergy (and never giving a drug to which the patient is allergic); and educating patients never to stop a course early, share, or self-prescribe antibiotics. By reinforcing hand hygiene, asepsis and isolation of resistant carriers they reduce infections and hence antibiotic demand." },
      { h: "Key values and figures", list: [
        "Selective toxicity targets: peptidoglycan wall, 70S ribosome, folate synthesis.",
        "C&S report: sensitive / intermediate / resistant; MIC guides dosing.",
        "Collect specimens BEFORE the first antibiotic dose.",
        "Resistance mechanisms: enzymes, target change, efflux/reduced uptake, bypass.",
        "Key resistant organisms: MRSA, ESBL/carbapenemase Gram-negatives, VRE, MDR-TB, C. difficile.",
        "Stewardship: right drug, dose, route, duration; de-escalate on C&S."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Explain selective toxicity and name the classes of antimicrobial drugs.",
      "Describe the main mechanisms of antibiotic action with examples.",
      "Differentiate bactericidal and bacteriostatic, broad- and narrow-spectrum, and empirical and targeted therapy.",
      "What are culture and sensitivity testing and the MIC, and why is timing of specimen collection important?",
      "Describe the mechanisms and drivers of antimicrobial resistance and the nurse's role in stewardship."
    ],
    assessment: [
      { type: "mcq", q: "An antibiotic harms bacteria but spares the patient's cells. This principle is called:", options: ["Broad spectrum", "Selective toxicity", "Bacteriostasis", "Resistance"], answer: 1, rationale: "Selective toxicity exploits differences between microbial and human cells." },
      { type: "mcq", q: "Penicillins are selectively toxic because they inhibit synthesis of a structure absent from human cells, namely the:", options: ["80S ribosome", "Nucleus", "Cell wall (peptidoglycan)", "Mitochondrion"], answer: 2, rationale: "Penicillins block peptidoglycan cross-linking; humans have no cell wall, giving selectivity." },
      { type: "mcq", q: "Tetracyclines and aminoglycosides act mainly by inhibiting:", options: ["Protein synthesis at the 70S ribosome", "Cell-wall synthesis", "DNA gyrase", "Folate synthesis"], answer: 0, rationale: "They bind the bacterial 70S ribosome (distinct from the human 80S) to block protein synthesis." },
      { type: "mcq", q: "A drug that only stops bacteria multiplying, relying on host defences to clear them, is:", options: ["Bactericidal", "Bacteriostatic", "Antifungal", "Sporicidal"], answer: 1, rationale: "Bacteriostatic drugs inhibit multiplication; bactericidal drugs kill." },
      { type: "mcq", q: "Sulphonamides and trimethoprim work as antimetabolites by:", options: ["Inhibiting the cell wall", "Disrupting the membrane", "Blocking folic-acid synthesis", "Inhibiting the ribosome"], answer: 2, rationale: "They block folate synthesis, a pathway bacteria need but humans obtain from diet." },
      { type: "mcq", q: "To ensure a valid culture and sensitivity result, the nurse should collect the specimen:", options: ["After several antibiotic doses", "Before starting antibiotics", "Only at discharge", "After full recovery"], answer: 1, rationale: "Collecting before antibiotics allows the organism to be recovered and gives an accurate result." },
      { type: "mcq", q: "An E. coli isolate destroys penicillin. The most likely resistance mechanism is production of:", options: ["Altered ribosomes", "Beta-lactamase enzymes that hydrolyse the drug", "More capsule", "Faster growth"], answer: 1, rationale: "Beta-lactamases hydrolyse the beta-lactam ring, inactivating penicillins." },
      { type: "mcq", q: "MRSA is resistant to beta-lactams mainly because it has:", options: ["An extra capsule", "An altered penicillin-binding protein so the drug cannot bind", "Faster efflux of oxygen", "A thicker flagellum"], answer: 1, rationale: "MRSA carries an altered penicillin-binding protein (target alteration), preventing drug binding." },
      { type: "mcq", q: "A major driver of antimicrobial resistance is:", options: ["Completing prescribed courses", "Misuse and overuse of antibiotics (e.g. for viral illness)", "Using culture and sensitivity results", "Good hand hygiene"], answer: 1, rationale: "Overuse and misuse select for resistant organisms and spread resistance genes." },
      { type: "mcq", q: "Antimicrobial stewardship most directly promotes:", options: ["Antibiotics for every fever", "The right drug, dose, route and duration with de-escalation", "Sharing leftover antibiotics", "Stopping as soon as the patient feels better"], answer: 1, rationale: "Stewardship ensures appropriate, guideline- and C&S-directed antibiotic use." },
      { type: "fill", q: "The laboratory test showing which antibiotic will work against an isolate is the culture and ______ test.", accept: ["sensitivity"], rationale: "Culture and sensitivity (C&S) guides targeted antibiotic therapy." },
      { type: "fill", q: "The lowest concentration of a drug that prevents visible bacterial growth is the minimum ______ concentration (MIC).", accept: ["inhibitory"], rationale: "The minimum inhibitory concentration (MIC) guides effective dosing." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "mib-13-nosocomial",
    unit: "Unit 5 · Infection Control & Diagnosis",
    title: "Hospital-Acquired Infection & Infection Control",
    readMinutes: 26,
    summary: "Definition and impact of healthcare-associated (nosocomial) infection, the compromised host and risk factors, the common device-related HAIs, sources and chains of transmission in hospital, multidrug-resistant organisms, and the evidence-based bundle of prevention, isolation, surveillance and stewardship measures with the nurse's central role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and impact", p: "A healthcare-associated (nosocomial) infection is one acquired during care in a hospital or health facility, not present or incubating at admission — conventionally appearing more than 48 hours after admission, or after discharge in the case of surgical wounds (up to 30 days, or 90 days with an implant). HAIs greatly increase morbidity, length of stay, cost and mortality, and a large proportion are preventable, making them a key indicator of care quality and patient safety." },
      { h: "Why hospitals are high-risk", p: "Hospitals concentrate three ingredients of infection: highly susceptible patients, a heavy load of virulent and often resistant organisms, and repeated breaches of the body's natural defences. Crowding, frequent contact between staff and patients, shared equipment, and the movement of colonised patients all promote transmission, so infection control must be systematic rather than incidental." },
      { h: "The compromised host and risk factors", p: "The compromised host — weakened by underlying illness, surgery, extremes of age, malnutrition, immunosuppression (steroids, chemotherapy, HIV), diabetes, or the presence of invasive devices — is especially vulnerable. Invasive devices (urinary catheters, intravascular lines, ventilators, drains) and surgical wounds bypass the skin and mucosal barriers, giving microbes direct access to normally sterile sites. The longer a device stays in, the greater the cumulative risk." },
      { h: "Common nosocomial infections", list: [
        "Catheter-associated urinary tract infection (CAUTI) — the most common HAI, linked to indwelling urinary catheters.",
        "Surgical-site infection (SSI) — infection of the operative wound (superficial, deep or organ/space).",
        "Ventilator-associated and other lower respiratory infections (hospital-acquired/ventilator-associated pneumonia).",
        "Bloodstream infection (bacteraemia) — often related to intravascular catheters (CLABSI, central-line-associated)."
      ], figure: {
        caption: "Common hospital-acquired infections and their device associations.",
        svg: '<svg viewBox="0 0 560 92" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Common HAIs and devices"><rect x="14" y="30" width="128" height="44" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="78" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">CAUTI</text><text x="78" y="62" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">urinary catheter</text><rect x="152" y="30" width="128" height="44" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="216" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">SSI</text><text x="216" y="62" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">surgical wound</text><rect x="290" y="30" width="128" height="44" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="354" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Pneumonia</text><text x="354" y="62" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">ventilator</text><rect x="428" y="30" width="120" height="44" rx="8" fill="#F0FDF4" stroke="#22C55E"/><text x="488" y="48" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Bacteraemia</text><text x="488" y="62" text-anchor="middle" font-family="sans-serif" font-size="8.5" fill="#0F4C3A">IV line</text></svg>'
      } },
      { h: "Sources of infection in hospital", p: "Microbes causing HAI arise from the patient's own flora (endogenous infection, e.g. gut organisms causing a urinary or surgical-site infection), from other patients and staff (exogenous, especially transferred on hands), and from the environment and equipment (contaminated water, surfaces, ventilators, endoscopes). Endogenous infection is common in the compromised host, while exogenous cross-infection is the target of hand hygiene and isolation." },
      { h: "Spread within the hospital", p: "Contact spread through the hands of health workers is the dominant route of HAI, which is why hand hygiene is the cornerstone of prevention. Other routes include droplet and airborne spread (respiratory infections, tuberculosis), common-vehicle spread (contaminated fluids, medicines or food) and, occasionally, vector spread. Colonised but asymptomatic patients act as reservoirs, so screening and isolation of carriers of resistant organisms help interrupt spread." },
      { h: "Multidrug-resistant organisms in hospitals", p: "Multidrug-resistant organisms (MDROs) are of particular concern in HAI: MRSA, ESBL- and carbapenemase-producing Gram-negative bacteria (Klebsiella, E. coli, Acinetobacter, Pseudomonas), vancomycin-resistant enterococci, and Clostridioides difficile (which causes antibiotic-associated diarrhoea and forms spores resistant to alcohol hand rubs). These organisms are hard to treat, spread readily in the ward, and demand strict contact precautions, environmental cleaning and antimicrobial stewardship." },
      { h: "Prevention: the infection-control bundle", list: [
        "Hand hygiene at the WHO 'five moments' — the single most important measure.",
        "Standard precautions for all patients; transmission-based (contact, droplet, airborne) precautions and isolation as indicated.",
        "Aseptic technique for all invasive procedures and wound care; evidence-based care bundles for catheters, central lines and ventilators.",
        "Early removal of unnecessary catheters, cannulas and other invasive devices.",
        "Correct cleaning, disinfection and sterilization of equipment and the environment.",
        "Safe injection and sharps practice, safe waste disposal, staff health and immunization, and antimicrobial stewardship."
      ] },
      { h: "Isolation and precautions", p: "Beyond standard precautions, transmission-based precautions are added for specific organisms: contact precautions (gown and gloves, single room or cohorting) for MRSA, ESBL organisms and C. difficile; droplet precautions (surgical mask within ~1 m) for influenza and meningococcus; and airborne precautions (negative-pressure room and respirator/N95) for tuberculosis, measles and varicella. Correctly matching precautions to the route, and using and removing PPE properly, prevents onward spread while avoiding unnecessary isolation." },
      { h: "Surveillance and the infection-control team", p: "Hospitals conduct surveillance — systematic monitoring of infection rates (e.g. CAUTI, SSI and CLABSI rates) — to detect trends and outbreaks and to evaluate interventions, guided by an infection prevention and control (IPC) team and written policies. Outbreak investigation identifies the source and mode of spread so control can be targeted, sometimes using typing of isolates. Every staff member, especially bedside nurses, is accountable for compliance and for promptly reporting suspected infections." },
      { h: "Clinical and nursing relevance", p: "Nurses are the front line against HAI: rigorous hand hygiene at the five moments, aseptic device and wound care, adherence to catheter/line/ventilator bundles, prompt removal of unnecessary invasive devices, correct isolation and PPE, environmental cleaning, safe handling of specimens and sharps, and education of patients and visitors. Consistent practice of these measures directly reduces preventable infections, resistance and deaths, and is a core professional and patient-safety responsibility." },
      { h: "Key values and figures", list: [
        "HAI defined as onset >48 h after admission (surgical wounds up to 30 days, or 90 with implant).",
        "Most common HAI: CAUTI (urinary catheters).",
        "Dominant spread route: contact via health workers' hands.",
        "Key MDROs: MRSA, ESBL/carbapenemase Gram-negatives, VRE, C. difficile.",
        "Precaution categories: standard + contact, droplet, airborne."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "Define healthcare-associated (nosocomial) infection and describe its impact and why hospitals are high-risk.",
      "Who is the compromised host, and what factors increase HAI risk?",
      "List the common nosocomial infections and their device associations.",
      "Describe the sources and modes of spread of infection within a hospital and the important MDROs.",
      "Outline the measures used to prevent, isolate against and monitor hospital-acquired infection."
    ],
    assessment: [
      { type: "mcq", q: "A patient develops a wound infection 4 days after admission that was not incubating on arrival. This is best classified as:", options: ["A nosocomial (healthcare-associated) infection", "Community-acquired", "An allergy", "Always fatal"], answer: 0, rationale: "HAIs are acquired during care and typically appear more than 48 hours after admission." },
      { type: "mcq", q: "The most common hospital-acquired infection is associated with:", options: ["Indwelling urinary catheters (CAUTI)", "Eye drops", "Oral tablets", "Bed linen"], answer: 0, rationale: "Catheter-associated urinary tract infection is the most common HAI." },
      { type: "mcq", q: "The single most important measure to prevent hospital-acquired infection is:", options: ["Antibiotics for all patients", "Air freshener", "Hand hygiene at the five moments", "Prolonged bed rest"], answer: 2, rationale: "Hand hygiene at the recommended moments is the cornerstone of HAI prevention." },
      { type: "mcq", q: "A malnourished patient on chemotherapy with a central line is at high HAI risk. Such a patient is described as a:", options: ["Carrier", "Compromised host", "Vector", "Fomite"], answer: 1, rationale: "The compromised host has reduced defences and higher HAI risk." },
      { type: "mcq", q: "A central-line-associated bloodstream infection (CLABSI) arises most directly from:", options: ["Oral feeding", "An intravascular line/cannula", "Walking", "Eye drops"], answer: 1, rationale: "Central and peripheral intravascular devices are common sources of bacteraemia." },
      { type: "mcq", q: "Within a ward, HAI spreads mainly by:", options: ["Sunlight", "Wind currents", "The contaminated hands of health workers (contact)", "Water pipes only"], answer: 2, rationale: "Contact spread via contaminated hands is the dominant route of HAI." },
      { type: "mcq", q: "A patient colonised with MRSA requires which additional precautions?", options: ["Airborne only", "Contact precautions (gown, gloves, single room/cohort)", "No precautions", "Vector control"], answer: 1, rationale: "MRSA spreads by contact, so contact precautions are added to standard precautions." },
      { type: "mcq", q: "For a patient with Clostridioides difficile, an important control point is that:", options: ["Alcohol hand rub kills the spores", "Soap-and-water hand washing is needed because alcohol does not kill C. difficile spores", "No isolation is required", "Antibiotics should be increased broadly"], answer: 1, rationale: "C. difficile forms spores resistant to alcohol; soap-and-water washing plus contact precautions are needed." },
      { type: "mcq", q: "Systematic monitoring of infection rates to detect trends and outbreaks is called:", options: ["Surveillance", "Sterilization", "Vaccination", "Culture"], answer: 0, rationale: "Surveillance tracks infection rates to guide and evaluate control measures." },
      { type: "mcq", q: "The most effective way to reduce CAUTI is to:", options: ["Leave catheters in as long as possible", "Remove catheters as early as clinically possible and use aseptic closed drainage", "Open the drainage system frequently", "Raise the drainage bag above the bladder"], answer: 1, rationale: "Early removal and closed aseptic catheter care reduce CAUTI." },
      { type: "fill", q: "An infection acquired in a health facility is called a ______ (hospital-acquired) infection.", accept: ["nosocomial"], rationale: "Nosocomial = healthcare-associated (hospital-acquired) infection." },
      { type: "fill", q: "Catheter-associated urinary tract infection is abbreviated ______.", accept: ["cauti"], rationale: "CAUTI is the leading device-related nosocomial infection." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "mib-14-lab-diagnosis",
    unit: "Unit 5 · Infection Control & Diagnosis",
    title: "Specimen Collection, Transport & Laboratory Diagnosis",
    readMinutes: 26,
    summary: "Principles and errors of specimen collection and transport, the types of microbiological specimen with correct technique, the diagnostic pathway of microscopy, culture and identification, culture media types, antibiotic sensitivity testing and quantitative urine counts, and serological and molecular methods, with the nurse's responsibilities emphasised.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose and importance", p: "Accurate laboratory diagnosis identifies the causative microbe and guides targeted treatment, replacing empirical guesswork and supporting antimicrobial stewardship. Because nurses usually collect specimens, their technique largely determines the validity of the result: a contaminated, mislabelled, insufficient, wrongly timed or delayed specimen yields misleading findings and may cause wrong or harmful treatment. 'Garbage in, garbage out' applies directly to microbiology." },
      { h: "Principles of specimen collection", list: [
        "Collect the appropriate specimen for the suspected infection, at the right time (e.g. blood cultures during a fever/rigor spike; early-morning sputum for TB).",
        "Collect BEFORE antimicrobial therapy where possible, so the organism can still be recovered.",
        "Use aseptic technique and a suitable sterile container; avoid contamination with normal flora or the environment.",
        "Collect an adequate quantity, representative of the infected site (e.g. deep-cough sputum, not saliva; pus from the depth of a wound).",
        "Label completely (patient identity, site, date and time) and complete the request form with clinical details and current antibiotics."
      ] },
      { h: "Transport and storage", p: "Specimens should reach the laboratory promptly (ideally within about 1-2 hours); delay allows overgrowth of contaminants, death of fragile pathogens (e.g. Neisseria gonorrhoeae, anaerobes) and unreliable quantitative counts. When delay is unavoidable, appropriate transport media (e.g. Amies/Stuart for swabs, Cary-Blair for stool) and storage are used — urine is refrigerated at 4 C to prevent bacterial multiplication that would falsify the colony count, while CSF and specimens for fastidious organisms are kept warm and processed at once." },
      { h: "Safety in specimen handling", p: "All specimens are handled as potentially infectious under standard precautions: gloves are worn, leak-proof containers with secure lids are used, the outside of the container is kept clean, specimens are placed in sealed biohazard bags with the request form kept separate (outside), spills are managed with disinfectant, and high-risk specimens are labelled per policy. Safe transport protects laboratory and portering staff as well as the collector." },
      { h: "Types of microbiological specimen", list: [
        "Swabs — nose, throat, wound, ulcer, eye, ear, cervix/urethra (in transport medium).",
        "Sputum — deep-cough sample, e.g. for acid-fast bacilli in TB (early-morning specimens on successive days).",
        "Urine — clean-catch midstream sample for culture and quantitative colony count.",
        "Stool (faeces) — for bacterial pathogens and for ova, cysts and parasites (fresh, sometimes several samples).",
        "Blood — blood culture (into aerobic and anaerobic bottles with aseptic skin prep) for suspected bacteraemia; serum for serology.",
        "Sterile fluids/tissue — cerebrospinal fluid for meningitis, pleural/peritoneal fluid, pus and aspirates, biopsy."
      ] },
      { h: "Quantitative urine culture", p: "Because urine passes through the non-sterile urethra, a colony count distinguishes true infection from contamination. In a properly collected clean-catch midstream urine, growth of 10^5 (100,000) colony-forming units per millilitre (CFU/mL) or more of a single organism indicates significant bacteriuria (urinary tract infection), whereas lower counts or mixed growth usually indicate contamination. This is why correct clean-catch technique and prompt refrigeration are so important." },
      { h: "The diagnostic pathway", p: "Laboratory diagnosis proceeds through direct examination, culture and then identification and sensitivity testing.", figure: {
        caption: "From specimen to targeted therapy: microscopy, culture, identification, sensitivity.",
        svg: '<svg viewBox="0 0 640 84" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagnostic pathway"><defs><marker id="mibA14" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#15803D"/></marker></defs>' + ["Specimen","Microscopy","Culture","Identification + sensitivity"].map(function(t,i){var x=6+i*158;return "<rect x=\'"+x+"\' y=\'22\' width=\'146\' height=\'40\' rx=\'8\' fill=\'#DCFCE7\' stroke=\'#15803D\'/><text x=\'"+(x+73)+"\' y=\'46\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'10\' font-weight=\'700\' fill=\'#0F4C3A\'>"+t+"</text>"+(i<3?"<line x1=\'"+(x+146)+"\' y1=\'42\' x2=\'"+(x+158)+"\' y2=\'42\' stroke=\'#15803D\' stroke-width=\'2\' marker-end=\'url(#mibA14)\'/>":"");}).join("") + '</svg>'
      } },
      { h: "Microscopy", p: "Direct microscopy of a stained smear (Gram stain, Ziehl-Neelsen for TB) or a wet mount (for parasites, motility or fungal hyphae in KOH) gives a rapid provisional result within the hour, e.g. 'Gram-positive cocci in clusters', 'acid-fast bacilli seen', or 'pus cells and Gram-negative diplococci'. This early information guides empirical therapy and precautions while culture is awaited, and is invaluable where advanced tests are unavailable." },
      { h: "Culture and media", p: "Culture grows the organism on suitable media under appropriate atmosphere (aerobic, anaerobic, CO2) and temperature (usually 37 C), producing colonies for study. Media types include general-purpose (nutrient agar), enriched (blood or chocolate agar for fastidious organisms), selective (MacConkey inhibits Gram-positives; TCBS for Vibrio) and differential (MacConkey distinguishes lactose fermenters). Culture takes time — often 24-48 hours for common bacteria, but several weeks for M. tuberculosis — which is why microscopy is valued for early guidance." },
      { h: "Identification, sensitivity and advanced methods", p: "The isolate is identified by colony morphology, staining, and biochemical reactions (and increasingly by automated systems or MALDI-TOF); antibiotic sensitivity testing (e.g. Kirby-Bauer disc diffusion, or MIC methods) then shows which drugs are effective, allowing targeted therapy. Serological tests detect antibodies or antigens in the patient's serum (useful when the organism is hard to culture, e.g. some viral infections, syphilis, kala-azar). Molecular methods such as PCR and GeneXpert detect microbial nucleic acid rapidly and with high sensitivity (e.g. rapid TB with rifampicin-resistance detection, and viral load testing)." },
      { h: "Clinical and nursing relevance", p: "The nurse's correct practice is decisive: the right specimen, collected aseptically at the right time before antibiotics, in the correct container with any needed transport medium, adequately labelled, promptly and safely transported, with the patient's dignity, comfort and everyone's safety protected. Good communication of clinical details on the request form helps the laboratory choose the right tests, and the nurse acts promptly on results to start or adjust targeted treatment." },
      { h: "Key values and figures", list: [
        "Significant bacteriuria: 10^5 (100,000) CFU/mL of a single organism.",
        "Urine stored/refrigerated at 4 C to prevent false-high counts.",
        "Blood cultures during fever spikes, into aerobic + anaerobic bottles.",
        "Culture time: 24-48 h for common bacteria; weeks for M. tuberculosis.",
        "Media: general, enriched (blood/chocolate), selective (MacConkey, TCBS), differential.",
        "PCR/GeneXpert: rapid, sensitive nucleic-acid detection (e.g. TB with resistance)."
      ] }
    ],
    references: REF_MIB,
    examQuestions: [
      "State the principles of correct microbiological specimen collection.",
      "Why must specimens be transported promptly and handled safely, and how are they stored when delayed?",
      "List the types of microbiological specimen with an indication and correct technique for each.",
      "Describe the diagnostic pathway from microscopy through culture media to sensitivity testing.",
      "Outline serological and molecular methods of diagnosis, the significance of urine colony counts, and the nurse's responsibilities."
    ],
    assessment: [
      { type: "mcq", q: "For an accurate culture and sensitivity result, specimens should be collected:", options: ["Before antibiotics are started", "After several antibiotic doses", "Only at discharge", "After recovery"], answer: 0, rationale: "Collecting before antibiotics allows the organism to be recovered and identified." },
      { type: "mcq", q: "To diagnose pulmonary tuberculosis, the nurse ensures collection of:", options: ["A urine sample for Gram stain", "Deep-cough sputum for Ziehl-Neelsen (acid-fast) staining", "Stool for wet mount", "Blood for Giemsa"], answer: 1, rationale: "Deep-cough sputum is stained by Ziehl-Neelsen to demonstrate acid-fast bacilli." },
      { type: "mcq", q: "A same-hour provisional result before culture is obtained by:", options: ["Microscopy of a stained smear", "Sensitivity testing", "Waiting 48 hours", "Serology only"], answer: 0, rationale: "Direct microscopy gives an immediate provisional finding to guide early therapy." },
      { type: "mcq", q: "A urine culture from a properly collected midstream sample grows 10^5 CFU/mL of one organism. This indicates:", options: ["Significant bacteriuria (urinary tract infection)", "Contamination only", "A sterile sample", "A blood infection"], answer: 0, rationale: "10^5 (100,000) CFU/mL of a single organism denotes significant bacteriuria." },
      { type: "mcq", q: "If a urine sample cannot reach the laboratory promptly, the nurse should:", options: ["Leave it at room temperature", "Refrigerate it at 4 C to prevent a false-high colony count", "Freeze it solid", "Add tap water"], answer: 1, rationale: "Refrigeration at 4 C halts bacterial multiplication that would falsify the count." },
      { type: "mcq", q: "MacConkey agar, which inhibits Gram-positive organisms and shows lactose fermentation, is best described as:", options: ["A general-purpose medium only", "A selective and differential medium", "An enriched medium only", "A transport medium"], answer: 1, rationale: "MacConkey is selective (inhibits Gram-positives) and differential (lactose fermentation)." },
      { type: "mcq", q: "Rapid, highly sensitive detection of TB with rifampicin-resistance information uses:", options: ["Gram stain", "A molecular method (PCR/GeneXpert)", "Boiling", "Colony morphology alone"], answer: 1, rationale: "Molecular tests (PCR/GeneXpert) amplify and detect nucleic acid rapidly and can report resistance." },
      { type: "mcq", q: "Suspected meningitis is investigated by microscopy, culture and molecular testing of:", options: ["Sputum", "Urine only", "Cerebrospinal fluid (CSF)", "Stool"], answer: 2, rationale: "CSF is the appropriate specimen for diagnosing meningitis." },
      { type: "mcq", q: "Serological testing is especially useful when the organism is:", options: ["Easy to culture", "A large visible worm", "Difficult to culture, so antibodies/antigens are detected instead", "Growing on every plate"], answer: 2, rationale: "Serology detects the immune response or antigen when culture is difficult (e.g. some viruses, syphilis)." },
      { type: "mcq", q: "When packaging a specimen for transport, the nurse should:", options: ["Treat it as harmless", "Place it in a leak-proof biohazard bag with the form kept outside, handling it as potentially infectious", "Carry it uncovered", "Store it with food"], answer: 1, rationale: "Standard precautions require leak-proof, biohazard-bagged, potentially-infectious handling with the form separate." },
      { type: "fill", q: "Growing microbes on a nutrient medium to identify them is called ______.", accept: ["culture"], rationale: "Culture grows the organism for identification and sensitivity testing." },
      { type: "fill", q: "In a clean-catch urine, significant bacteriuria is indicated by a count of 10^5 or more ______ per millilitre.", accept: ["cfu", "colony-forming units", "colony forming units"], rationale: "10^5 CFU/mL of a single organism indicates significant bacteriuria." }
    ]
  }
];
