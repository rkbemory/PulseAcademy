/* ============================================================
   Diploma in Nursing · D124 Microbiology & Parasitology — 14 topics.
   Aligned to the BNMC 2018 syllabus. Topics 1-5 authored; 6-14 are
   structured placeholders. Grounded in standard texts:
     • Tortora GJ, Funke BR, Case CL. Microbiology: An Introduction. Pearson.
     • Cheesbrough M. District Laboratory Practice in Tropical Countries. CUP.
     • Greenwood D, et al. Medical Microbiology. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_MICRO = [
  "Tortora GJ, Funke BR, Case CL. Microbiology: An Introduction. Pearson.",
  "Cheesbrough M. District Laboratory Practice in Tropical Countries. Cambridge University Press.",
  "Greenwood D, Barer M, Slack R, Irving W. Medical Microbiology. Elsevier."
];

window.Academic.topics["diploma-nursing/microbiology-parasitology"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "mp-01-introduction",
    unit: "Unit 1 · Foundations of Microbiology",
    title: "Introduction to Microbiology & Parasitology",
    readMinutes: 17,
    summary: "What microbiology and parasitology are, the branches of the subject, the main groups of microbes, normal flora versus pathogens, and why these sciences matter to nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are microbiology and parasitology?", p: "Microbiology is the study of micro-organisms — living things too small to be seen with the naked eye. Parasitology is the study of parasites — organisms that live on or in another organism (the host) and benefit at its expense. For nurses, these sciences explain how infections arise and spread, and how to prevent and control them." },
      { h: "Branches of the subject", list: [
        "Bacteriology — the study of bacteria.",
        "Virology — the study of viruses.",
        "Mycology — the study of fungi.",
        "Parasitology — the study of protozoa and worms (helminths).",
        "Immunology — the study of the body's defences.",
        "Chemotherapy — the use of drugs (such as antibiotics) against microbes."
      ] },
      { h: "The main groups of microbes", p: "The micro-organisms important in disease fall into a few groups: bacteria, viruses, fungi, and the parasites (protozoa and helminths). They differ greatly in size and structure — viruses are the smallest, then bacteria and fungi, while many parasites are large enough to see. Each group causes disease and is treated in different ways.", figure: {
        caption: "Figure 1.1 — The main groups of disease-causing microbes.",
        svg: "<svg viewBox='0 0 620 70' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Groups of microbes'>" +
          ["Bacteria", "Viruses", "Fungi", "Protozoa", "Helminths (worms)"].map(function (t, i) { var x = 8 + i * 122; return "<rect x='" + x + "' y='18' width='112' height='36' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='" + (x + 56) + "' y='41' text-anchor='middle' font-family='Inter' font-size='10.5' font-weight='700' fill='#14387A'>" + t + "</text>"; }).join("") + "</svg>"
      } },
      { h: "Normal flora and pathogens", p: "Not all microbes cause disease. The body is home to normal flora (commensals) — harmless or helpful microbes living on the skin, in the gut, mouth and elsewhere — that aid digestion, make some vitamins and compete with harmful microbes. A pathogen is a microbe that can cause disease. Some normal flora become harmful if they move to the wrong place or the host's defences weaken (opportunistic infection)." },
      { h: "How we know microbes cause disease", p: "The germ theory of disease — that specific microbes cause specific diseases — was established by scientists such as Louis Pasteur and Robert Koch in the 19th century. Koch's postulates are a set of criteria used to prove that a particular microbe causes a particular disease. This understanding underpins modern infection control, sterilisation and immunisation." },
      { h: "Microbes and disease in Bangladesh", p: "Many important diseases in Bangladesh are caused by microbes and parasites — for example tuberculosis, cholera, typhoid, hepatitis, dengue, pneumonia, diarrhoeal diseases, malaria and kala-azar. Knowing the organisms responsible helps nurses recognise, prevent and manage these conditions." },
      { h: "Nursing relevance", p: "Microbiology and parasitology give the scientific basis for hand hygiene, asepsis, sterilisation and disinfection, safe specimen handling, immunisation, and the correct use of antimicrobials — all central to preventing healthcare-associated infection and protecting patients." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Define microbiology and parasitology.",
      "Name the branches of microbiology.",
      "List the main groups of disease-causing microbes.",
      "Differentiate normal flora and pathogens.",
      "Why are microbiology and parasitology important to nursing?"
    ],
    assessment: [
      { type: "mcq", q: "Microbiology is the study of:", options: ["Large animals", "Micro-organisms", "Rocks", "Plants only"], answer: 1, rationale: "Microbiology studies organisms too small to see with the naked eye." },
      { type: "mcq", q: "The study of viruses is called:", options: ["Bacteriology", "Virology", "Mycology", "Parasitology"], answer: 1, rationale: "Virology is the branch dealing with viruses." },
      { type: "mcq", q: "The smallest of the disease-causing microbes are the:", options: ["Bacteria", "Viruses", "Fungi", "Worms"], answer: 1, rationale: "Viruses are the smallest microbes, visible only by electron microscope." },
      { type: "mcq", q: "Harmless microbes that normally live on/in the body are called:", options: ["Pathogens", "Normal flora (commensals)", "Spores", "Vectors"], answer: 1, rationale: "Normal flora (commensals) live in/on the body without causing disease." },
      { type: "mcq", q: "A microbe capable of causing disease is a:", options: ["Commensal", "Pathogen", "Host", "Vaccine"], answer: 1, rationale: "A pathogen is a disease-causing micro-organism." },
      { type: "mcq", q: "The study of fungi is:", options: ["Mycology", "Virology", "Immunology", "Bacteriology"], answer: 0, rationale: "Mycology is the study of fungi." },
      { type: "mcq", q: "Worms that infect humans are studied under:", options: ["Virology", "Parasitology (helminthology)", "Mycology", "Chemotherapy"], answer: 1, rationale: "Helminths (worms) are parasites studied in parasitology." },
      { type: "mcq", q: "The germ theory of disease is associated with:", options: ["Newton", "Pasteur and Koch", "Darwin", "Einstein"], answer: 1, rationale: "Pasteur and Koch established that specific microbes cause specific diseases." },
      { type: "mcq", q: "When normal flora cause disease after defences weaken, this is called:", options: ["Immunity", "Opportunistic infection", "Commensalism", "Sterilisation"], answer: 1, rationale: "Opportunistic infection occurs when normally harmless microbes exploit a weakened host." },
      { type: "mcq", q: "Which disease, common in Bangladesh, is caused by a microbe?", options: ["Tuberculosis", "Fracture", "Anaemia from blood loss", "Diabetes"], answer: 0, rationale: "Tuberculosis is caused by a bacterium (Mycobacterium tuberculosis)." },
      { type: "fill", q: "Harmless microbes normally living in the gut and on the skin are called normal ______.", accept: ["flora", "microbiota"], rationale: "Normal flora (microbiota) are the body's resident commensal microbes." },
      { type: "fill", q: "A disease-causing micro-organism is called a ______.", accept: ["pathogen"], rationale: "A pathogen causes disease in the host." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "mp-02-microscope",
    unit: "Unit 1 · Foundations of Microbiology",
    title: "The Microscope & Studying Microbes",
    readMinutes: 16,
    summary: "Why microbes need a microscope, the parts and use of the light microscope, the electron microscope, units of measurement, and staining methods including the Gram and acid-fast stains.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why we need a microscope", p: "Most microbes are far too small to see with the naked eye, so they are studied with a microscope, which magnifies them and reveals their shape and arrangement. The microscope was the tool that first made the microbial world visible and remains essential for diagnosing infections." },
      { h: "The light (compound) microscope", p: "The light microscope passes light through a thin specimen and through two sets of lenses. Its main parts are the eyepiece (ocular) lens, the objective lenses (commonly 10x, 40x and 100x oil-immersion), the stage that holds the slide, the condenser and diaphragm that focus and control the light, and the light source. Total magnification = eyepiece power x objective power (for example, 10 x 100 = 1000x).", figure: { caption: "Figure 2.1 — The compound light microscope. Add a labelled image if available.", placeholder: true } },
      { h: "Magnification and resolution", p: "Magnification is how much larger the image appears; resolution is the ability to show two close points as separate (the real measure of how much detail is seen). The light microscope can show bacteria but not viruses, which are too small. Units used are the micrometre (µm, one-thousandth of a millimetre) for bacteria and the nanometre (nm) for viruses." },
      { h: "The electron microscope", p: "The electron microscope uses a beam of electrons instead of light and gives far greater magnification and resolution — enough to see viruses and the fine internal structure of cells. It is a specialised research/diagnostic tool, not used in routine wards." },
      { h: "Staining", p: "Most microbes are colourless, so they are stained with dyes to be seen clearly and to help identify them. A simple stain uses one dye; a differential stain uses more than one to distinguish groups of microbes. The specimen is usually spread on a slide (a smear), dried and fixed (by gentle heat) before staining." },
      { h: "The Gram stain and acid-fast stain", p: "The Gram stain is the most important differential stain in bacteriology: it divides bacteria into Gram-positive (which retain the purple dye) and Gram-negative (which appear pink/red). This guides identification and antibiotic choice. The acid-fast (Ziehl-Neelsen) stain is used for organisms with waxy walls, especially Mycobacterium tuberculosis — vital for diagnosing TB in Bangladesh, where stained sputum is examined for acid-fast bacilli (AFB)." },
      { h: "Nursing relevance", p: "Understanding microscopy and staining helps the nurse appreciate how infections are diagnosed, collect and handle specimens correctly (e.g. sputum for AFB), and understand laboratory reports such as 'Gram-positive cocci' or 'AFB positive'." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Why is a microscope needed to study microbes?",
      "Name the main parts of a light microscope and state how total magnification is calculated.",
      "Differentiate magnification and resolution.",
      "What is the difference between a simple and a differential stain?",
      "Describe the Gram stain and the acid-fast stain and their importance."
    ],
    assessment: [
      { type: "mcq", q: "Total magnification of a light microscope equals:", options: ["Eyepiece + objective", "Eyepiece x objective", "Objective ÷ eyepiece", "Condenser x stage"], answer: 1, rationale: "Total magnification = eyepiece power x objective power (e.g. 10 x 100 = 1000x)." },
      { type: "mcq", q: "Which microbe is too small to see with a light microscope?", options: ["Bacterium", "Virus", "Fungus", "Protozoan"], answer: 1, rationale: "Viruses require an electron microscope; light microscopes can show bacteria." },
      { type: "mcq", q: "The microscope that can show viruses uses:", options: ["A beam of electrons", "Sunlight only", "Sound waves", "X-rays"], answer: 0, rationale: "The electron microscope uses electrons for very high magnification/resolution." },
      { type: "mcq", q: "Gram-positive bacteria appear ______ after Gram staining.", options: ["Pink/red", "Purple", "Green", "Colourless"], answer: 1, rationale: "Gram-positive bacteria retain the crystal-violet dye and appear purple." },
      { type: "mcq", q: "Gram-negative bacteria appear:", options: ["Purple", "Pink/red", "Black", "Yellow"], answer: 1, rationale: "Gram-negative bacteria lose the purple dye and take the counterstain (pink/red)." },
      { type: "mcq", q: "The acid-fast (Ziehl-Neelsen) stain is mainly used to detect:", options: ["Cholera", "Tuberculosis (AFB)", "Malaria", "Influenza"], answer: 1, rationale: "Acid-fast staining detects Mycobacterium tuberculosis (acid-fast bacilli)." },
      { type: "mcq", q: "The unit commonly used to measure bacteria is the:", options: ["Metre", "Micrometre (µm)", "Kilometre", "Centimetre"], answer: 1, rationale: "Bacteria are measured in micrometres; viruses in nanometres." },
      { type: "mcq", q: "A stain that uses more than one dye to distinguish groups of microbes is a:", options: ["Simple stain", "Differential stain", "Wet mount", "Fixative"], answer: 1, rationale: "Differential stains (e.g. Gram) use several dyes to differentiate microbes." },
      { type: "mcq", q: "The ability to distinguish two close points as separate is:", options: ["Magnification", "Resolution", "Fixation", "Contrast only"], answer: 1, rationale: "Resolution determines the detail seen; magnification only enlarges the image." },
      { type: "mcq", q: "Before staining, a smear is fixed mainly to:", options: ["Add colour", "Attach microbes to the slide and kill them", "Magnify them", "Dissolve them"], answer: 1, rationale: "Fixing attaches the organisms to the slide (and kills them) so they are not washed off." },
      { type: "fill", q: "The most important differential stain in bacteriology is the ______ stain.", accept: ["gram"], rationale: "The Gram stain separates bacteria into Gram-positive and Gram-negative." },
      { type: "fill", q: "Acid-fast bacilli seen on sputum microscopy suggest ______.", accept: ["tuberculosis", "tb"], rationale: "AFB on sputum indicate tuberculosis." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "mp-03-bacteria",
    unit: "Unit 2 · The Microbes",
    title: "Bacteria — Structure, Classification & Common Pathogens",
    readMinutes: 19,
    summary: "The structure and reproduction of bacteria, classification by shape and Gram reaction, bacterial spores, and the common bacterial pathogens and diseases seen in Bangladesh.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are bacteria?", p: "Bacteria are single-celled micro-organisms without a true nucleus (prokaryotes). They are larger than viruses and live almost everywhere. Most are harmless or helpful, but some are important pathogens. Bacterial infections can usually be treated with antibiotics." },
      { h: "Structure of a bacterium", p: "A bacterium has a rigid cell wall (which gives shape and determines the Gram reaction), a cell membrane, cytoplasm, and genetic material (DNA) in a region called the nucleoid (no nuclear membrane). Some bacteria also have a protective capsule, whip-like flagella for movement, and pili for attachment. Certain bacteria form spores — dormant, highly resistant forms that survive heat, drying and disinfectants." },
      { h: "Classification by shape", p: "Bacteria are classified by their shape and arrangement.", figure: {
        caption: "Figure 3.1 — Bacteria classified by shape: cocci, bacilli and spiral forms.",
        svg: "<svg viewBox='0 0 480 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Bacterial shapes'>" +
          "<text x='80' y='105' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>Cocci (round)</text>" +
          "<circle cx='60' cy='45' r='12' fill='#2E63B8'/><circle cx='90' cy='45' r='12' fill='#2E63B8'/><circle cx='75' cy='70' r='12' fill='#2E63B8'/>" +
          "<text x='240' y='105' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>Bacilli (rods)</text>" +
          "<rect x='200' y='38' width='34' height='14' rx='7' fill='#16A34A'/><rect x='200' y='58' width='34' height='14' rx='7' fill='#16A34A'/><rect x='244' y='48' width='34' height='14' rx='7' fill='#16A34A'/>" +
          "<text x='400' y='105' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>Spiral</text>" +
          "<path d='M360,55 q10,-18 20,0 q10,18 20,0 q10,-18 20,0' fill='none' stroke='#B85C5C' stroke-width='6' stroke-linecap='round'/>" +
          "</svg>"
      } },
      { h: "Shapes and arrangements", list: [
        "Cocci — round bacteria; in pairs (diplococci), chains (streptococci) or clusters (staphylococci).",
        "Bacilli — rod-shaped bacteria.",
        "Spiral forms — curved or coiled, including vibrios (comma-shaped) and spirochaetes (corkscrew)."
      ] },
      { h: "Reproduction and growth", p: "Bacteria reproduce asexually by binary fission — one cell divides into two — and in good conditions can multiply very rapidly (some doubling every 20 minutes). Growth needs suitable nutrients, temperature, moisture and (for many) oxygen; some grow without oxygen (anaerobes). Rapid multiplication explains how infection and food spoilage develop quickly." },
      { h: "Common bacterial pathogens", list: [
        "Diplococci — pneumococcus (pneumonia), gonococcus (gonorrhoea).",
        "Streptococci — sore throat, rheumatic fever.",
        "Staphylococci — wound and skin infections, abscesses.",
        "Gram-positive bacilli — tetanus, anthrax, botulism (spore-formers).",
        "Gram-negative bacilli — E. coli, Shigella, Salmonella (gastro-intestinal infections, typhoid).",
        "Acid-fast bacilli — tuberculosis and leprosy (Mycobacterium).",
        "Spiral forms — Vibrio cholerae (cholera), Treponema (syphilis), Helicobacter pylori (peptic ulcer)."
      ] },
      { h: "Nursing relevance", p: "Recognising the common bacterial causes of disease in Bangladesh helps the nurse understand how infections present and spread, the importance of hand hygiene and asepsis, the role of antibiotics (and the danger of resistance), and why spore-forming bacteria (e.g. tetanus) demand proper sterilisation and immunisation." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Describe the structure of a bacterium.",
      "Classify bacteria by shape with an example of each.",
      "What is a bacterial spore and why is it important?",
      "How do bacteria reproduce, and what conditions do they need to grow?",
      "Name common bacterial pathogens and the diseases they cause."
    ],
    assessment: [
      { type: "mcq", q: "Bacteria reproduce mainly by:", options: ["Meiosis", "Binary fission", "Budding from animals", "Making spores only"], answer: 1, rationale: "Bacteria divide asexually by binary fission, one cell becoming two." },
      { type: "mcq", q: "Round bacteria arranged in clusters are:", options: ["Streptococci", "Staphylococci", "Bacilli", "Spirochaetes"], answer: 1, rationale: "Staphylococci are cocci in grape-like clusters; streptococci form chains." },
      { type: "mcq", q: "Rod-shaped bacteria are called:", options: ["Cocci", "Bacilli", "Vibrios", "Spirochaetes"], answer: 1, rationale: "Bacilli are rod-shaped bacteria." },
      { type: "mcq", q: "Cholera is caused by a spiral (comma-shaped) bacterium called:", options: ["Vibrio cholerae", "E. coli", "Staphylococcus", "Streptococcus"], answer: 0, rationale: "Vibrio cholerae, a curved (comma) bacterium, causes cholera." },
      { type: "mcq", q: "Dormant, highly resistant forms that some bacteria produce are:", options: ["Capsules", "Spores", "Flagella", "Pili"], answer: 1, rationale: "Spores survive heat, drying and disinfectants (e.g. tetanus, anthrax)." },
      { type: "mcq", q: "Tuberculosis is caused by an organism detected by the ______ stain.", options: ["Gram", "Acid-fast", "Simple", "Negative"], answer: 1, rationale: "Mycobacterium tuberculosis is acid-fast (Ziehl-Neelsen positive)." },
      { type: "mcq", q: "Which is a Gram-negative bacillus causing gastro-intestinal infection?", options: ["Staphylococcus", "E. coli / Shigella / Salmonella", "Pneumococcus", "Treponema"], answer: 1, rationale: "E. coli, Shigella and Salmonella are Gram-negative bacilli causing GI infections." },
      { type: "mcq", q: "Wound and skin infections (and abscesses) are commonly caused by:", options: ["Staphylococci", "Vibrio", "Plasmodium", "Influenza virus"], answer: 0, rationale: "Staphylococci typically cause wound/skin infections and abscesses." },
      { type: "mcq", q: "Peptic ulcer is linked to the spiral bacterium:", options: ["Helicobacter pylori", "Salmonella", "Streptococcus", "Clostridium tetani"], answer: 0, rationale: "Helicobacter pylori is a major cause of peptic ulcers." },
      { type: "mcq", q: "The part of a bacterium that determines its Gram reaction is the:", options: ["Cell wall", "Nucleus", "Flagellum", "Capsule"], answer: 0, rationale: "The cell-wall structure determines whether a bacterium is Gram-positive or -negative." },
      { type: "fill", q: "Round bacteria arranged in chains are called ______.", accept: ["streptococci", "streptococcus"], rationale: "Streptococci are cocci in chains (e.g. throat infection)." },
      { type: "fill", q: "The asexual division by which one bacterium becomes two is called binary ______.", accept: ["fission"], rationale: "Binary fission is the bacterial method of reproduction." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "mp-04-viruses",
    unit: "Unit 2 · The Microbes",
    title: "Viruses",
    readMinutes: 16,
    summary: "The nature and replication of viruses, how they differ from bacteria, their classification by the tissues they attack, important viral diseases in Bangladesh, and their prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are viruses?", p: "Viruses are the smallest infectious agents — much smaller than bacteria and visible only by electron microscope. A virus is not a complete cell: it consists of a core of genetic material (either DNA or RNA) surrounded by a protein coat (capsid), sometimes with an outer envelope. Outside a living cell a virus is inert." },
      { h: "How viruses replicate", p: "Viruses are obligate intracellular parasites — they can only multiply inside the living cells of a host. The virus enters a host cell, takes over its machinery to make many copies of itself, and the new viruses are released (often destroying the cell) to infect others. Because viruses use the host's own cells, they are harder to target with drugs.", figure: { caption: "Figure 4.1 — Structure of a virus (genetic core + protein coat). Add a labelled image if available.", placeholder: true } },
      { h: "Viruses versus bacteria", p: "Viruses differ from bacteria in important ways: they are far smaller, are not cells, cannot reproduce on their own, and are NOT killed by antibiotics. Viral infections are managed mainly by prevention (vaccines, hygiene, vector control), by the body's immune response, and sometimes by specific antiviral drugs." },
      { h: "Classification by tissue affinity", list: [
        "Pneumotropic — attack the respiratory tract, e.g. influenza (viral 'flu').",
        "Neurotropic — attack nervous tissue, e.g. polio, rabies, viral encephalitis.",
        "Viscerotropic — attack internal organs, e.g. hepatitis (liver), dengue and yellow fever.",
        "Dermatropic — affect the skin, e.g. measles, chickenpox, warts."
      ] },
      { h: "Important viral diseases in Bangladesh", p: "Viral diseases of particular importance include hepatitis B and C (liver disease), dengue (spread by Aedes mosquitoes), measles and chickenpox, influenza and other respiratory viruses, rabies (from animal bites), and poliomyelitis (now controlled by vaccination). Many are vaccine-preventable." },
      { h: "Prevention and control", p: "Because antibiotics do not work against viruses, prevention is key: immunisation (e.g. against measles, hepatitis B, polio, rabies), good hygiene and respiratory etiquette, safe blood and injection practices (for hepatitis and HIV), and vector control (e.g. removing mosquito breeding sites for dengue). Some viral infections have specific antiviral treatments." },
      { h: "Nursing relevance", p: "Nurses prevent viral spread through immunisation, hand and respiratory hygiene, safe handling of blood and sharps, and patient education (e.g. mosquito control for dengue, wound care and vaccination after animal bites for rabies). Knowing that antibiotics do not treat viral illness also helps reduce antibiotic misuse." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Describe the structure of a virus.",
      "Explain why viruses are called obligate intracellular parasites.",
      "How do viruses differ from bacteria?",
      "Classify viruses by tissue affinity with an example of each.",
      "How are viral diseases prevented and controlled?"
    ],
    assessment: [
      { type: "mcq", q: "Compared with bacteria, viruses are:", options: ["Larger", "Much smaller", "The same size", "Always harmless"], answer: 1, rationale: "Viruses are much smaller than bacteria and seen only by electron microscope." },
      { type: "mcq", q: "A virus consists of genetic material surrounded by a:", options: ["Cell wall", "Protein coat (capsid)", "Nucleus", "Mitochondrion"], answer: 1, rationale: "A virus is a genetic core (DNA or RNA) inside a protein coat (capsid)." },
      { type: "mcq", q: "Viruses can multiply only:", options: ["In soil", "Inside living host cells", "In water", "On dry surfaces"], answer: 1, rationale: "Viruses are obligate intracellular parasites, replicating only inside host cells." },
      { type: "mcq", q: "Antibiotics are:", options: ["Effective against viruses", "NOT effective against viruses", "The main viral treatment", "Vaccines"], answer: 1, rationale: "Antibiotics act on bacteria, not viruses." },
      { type: "mcq", q: "Dengue and hepatitis viruses, which attack internal organs, are:", options: ["Pneumotropic", "Neurotropic", "Viscerotropic", "Dermatropic"], answer: 2, rationale: "Viscerotropic viruses attack internal organs (e.g. liver — hepatitis; dengue)." },
      { type: "mcq", q: "Rabies and polio viruses are classified as:", options: ["Dermatropic", "Neurotropic", "Pneumotropic", "Viscerotropic"], answer: 1, rationale: "Neurotropic viruses attack nervous tissue (rabies, polio, encephalitis)." },
      { type: "mcq", q: "Measles and chickenpox viruses mainly affect the:", options: ["Liver", "Skin (dermatropic)", "Brain", "Lungs"], answer: 1, rationale: "Measles and chickenpox are dermatropic (skin) viral diseases." },
      { type: "mcq", q: "Dengue fever in Bangladesh is spread by:", options: ["Houseflies", "Aedes mosquitoes", "Contaminated water", "Direct touch"], answer: 1, rationale: "Dengue is transmitted by Aedes mosquitoes; vector control is key." },
      { type: "mcq", q: "The best protection against many viral diseases is:", options: ["Antibiotics", "Immunisation (vaccines)", "Painkillers", "Bed rest only"], answer: 1, rationale: "Vaccination prevents many viral diseases (measles, polio, hepatitis B, etc.)." },
      { type: "mcq", q: "A virus carries its genetic information as:", options: ["DNA or RNA", "Only DNA always", "Protein only", "No genetic material"], answer: 0, rationale: "A virus has a genome of either DNA or RNA (never both)." },
      { type: "fill", q: "Viruses can reproduce only inside living ______ cells.", accept: ["host"], rationale: "Viruses are obligate intracellular parasites needing a host cell." },
      { type: "fill", q: "Viral disease spread by Aedes mosquitoes, common in Bangladesh, is ______.", accept: ["dengue"], rationale: "Dengue is an Aedes-borne viscerotropic viral disease." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "mp-05-fungi",
    unit: "Unit 2 · The Microbes",
    title: "Fungi",
    readMinutes: 14,
    summary: "The nature and reproduction of fungi, the types of fungal infection (mycoses), common fungal diseases, predisposing factors, and prevention and treatment.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are fungi?", p: "Fungi are a separate group of organisms that include the single-celled yeasts and the filamentous moulds. Unlike bacteria they have a true nucleus (they are eukaryotes) and a cell wall containing chitin. Many fungi are harmless or useful (bread, yoghurt, some antibiotics), but some cause infections called mycoses." },
      { h: "How fungi grow and spread", p: "Fungi reproduce mainly by producing spores, which spread easily in the air and on surfaces and can survive in the environment. They grow well in warm, moist conditions — which is why fungal skin infections favour sweaty areas such as the feet, groin and skin folds.", figure: { caption: "Figure 5.1 — Yeast and mould forms of fungi. Add a labelled image if available.", placeholder: true } },
      { h: "Types of fungal infection (mycoses)", list: [
        "Superficial mycoses — affect the skin, hair and nails, e.g. dermatophytes causing tinea (ringworm), athlete's foot.",
        "Candidiasis — caused by the yeast Candida, e.g. oral thrush, vaginal thrush, skin-fold infection.",
        "Systemic (deep) mycoses — affect internal organs, e.g. cryptococcosis; usually in people with weak immunity."
      ] },
      { h: "Predisposing (risk) factors", p: "Fungal infections are more likely when the body's defences or normal flora are disturbed: in diabetes, after broad-spectrum antibiotics (which kill competing bacteria and let Candida overgrow), with weakened immunity (HIV, cancer, steroid use), in pregnancy, and where skin stays warm and moist. Recognising these helps prevent infection." },
      { h: "Prevention and treatment", p: "Prevention focuses on keeping skin clean and dry, good hygiene, controlling diabetes and using antibiotics wisely. Fungal infections are treated with antifungal drugs (not antibiotics), applied to the skin for superficial infections or given by mouth/IV for more serious ones." },
      { h: "Nursing relevance", p: "Nurses help prevent fungal infection by keeping at-risk patients' skin clean and dry (especially skin folds, and the mouth in the very ill), promoting good diabetic control, encouraging sensible antibiotic use, and recognising and reporting common mycoses such as oral thrush and ringworm." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "What are fungi and how do they differ from bacteria?",
      "How do fungi reproduce and spread?",
      "Describe the types of fungal infection (mycoses) with examples.",
      "List the factors that predispose to fungal infection.",
      "How are fungal infections prevented and treated?"
    ],
    assessment: [
      { type: "mcq", q: "Single-celled fungi are called:", options: ["Moulds", "Yeasts", "Bacteria", "Viruses"], answer: 1, rationale: "Yeasts are single-celled fungi; moulds are filamentous." },
      { type: "mcq", q: "Fungal infections are called:", options: ["Mycoses", "Viraemias", "Helminthiases", "Bacteraemias"], answer: 0, rationale: "Mycoses are diseases caused by fungi." },
      { type: "mcq", q: "Ringworm (tinea) and athlete's foot are caused by:", options: ["Candida", "Dermatophytes", "Cryptococcus", "Viruses"], answer: 1, rationale: "Dermatophytes cause superficial skin infections such as tinea/ringworm." },
      { type: "mcq", q: "Oral and vaginal thrush are caused by the yeast:", options: ["Candida", "Plasmodium", "Vibrio", "Aspergillus only"], answer: 0, rationale: "Candida causes thrush (candidiasis)." },
      { type: "mcq", q: "Fungi are treated with:", options: ["Antibiotics", "Antifungal drugs", "Antivirals", "Vaccines"], answer: 1, rationale: "Fungal infections require antifungal drugs, not antibiotics." },
      { type: "mcq", q: "Which factor predisposes to fungal infection?", options: ["Diabetes and broad-spectrum antibiotics", "Cold dry skin", "Strong immunity", "Good hygiene"], answer: 0, rationale: "Diabetes, antibiotics, weak immunity and warm moist skin favour fungal overgrowth." },
      { type: "mcq", q: "Fungi mainly reproduce by producing:", options: ["Spores", "Eggs", "Live young", "Toxins"], answer: 0, rationale: "Fungi reproduce by spores that spread in air and on surfaces." },
      { type: "mcq", q: "Fungal cell walls contain:", options: ["Chitin", "Peptidoglycan only", "Cholesterol only", "No wall"], answer: 0, rationale: "Fungal cell walls contain chitin (bacterial walls contain peptidoglycan)." },
      { type: "mcq", q: "Systemic fungal infections such as cryptococcosis mainly affect people who are:", options: ["Healthy", "Immunocompromised", "Young athletes", "Well nourished"], answer: 1, rationale: "Deep/systemic mycoses typically occur in those with weakened immunity." },
      { type: "mcq", q: "To prevent fungal skin infection, the nurse keeps the skin:", options: ["Warm and moist", "Clean and dry", "Covered tightly", "Unwashed"], answer: 1, rationale: "Keeping skin (especially folds) clean and dry discourages fungal growth." },
      { type: "fill", q: "Diseases caused by fungi are collectively called ______.", accept: ["mycoses", "mycosis"], rationale: "Mycoses are fungal infections." },
      { type: "fill", q: "Oral 'thrush' is caused by the yeast ______.", accept: ["candida"], rationale: "Candida causes oral and vaginal thrush (candidiasis)." }
    ]
  },

  /* ---------- Placeholders: structured to the BNMC D124 syllabus ---------- */
  {
    id: "mp-06-parasites",
    unit: "Unit 2 · The Microbes",
    title: "Parasites — Protozoa & Helminths",
    readMinutes: 18,
    summary: "What parasites are, the important protozoa (malaria, kala-azar, amoebiasis, trichomoniasis) and helminths (tapeworm, roundworm, hookworm, pinworm), their transmission and prevention.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a parasite?", p: "A parasite is an organism that lives on or inside another organism (the host) and benefits at the host's expense. Parasites that live inside the body are endoparasites; those on the surface (such as lice and the scabies mite) are ectoparasites. The medically important internal parasites fall into two groups: the single-celled protozoa and the multicellular worms (helminths)." },
      { h: "Protozoa", p: "Protozoa are microscopic, single-celled parasites. Important examples in Bangladesh include Plasmodium (the cause of malaria), Leishmania donovani (kala-azar), Entamoeba histolytica (amoebic dysentery) and Trichomonas vaginalis (trichomoniasis, a sexually transmitted infection).", figure: { caption: "Figure 6.1 — Important parasites and how they spread. Add a labelled image if available.", placeholder: true } },
      { h: "Key protozoal diseases", list: [
        "Malaria — Plasmodium species, spread by the bite of an infected female Anopheles mosquito; causes recurring fever, chills and anaemia.",
        "Kala-azar (visceral leishmaniasis) — Leishmania donovani, spread by the bite of the sandfly; causes prolonged fever, weight loss and enlarged spleen.",
        "Amoebic dysentery — Entamoeba histolytica, spread by the faeco-oral route (contaminated food/water); causes bloody diarrhoea.",
        "Trichomoniasis — Trichomonas vaginalis, a sexually transmitted protozoan."
      ] },
      { h: "Helminths (worms)", p: "Helminths are larger, multicellular worm parasites, many living in the intestine. Common ones include roundworms (Ascaris), hookworms, pinworms (threadworms) and tapeworms. Intestinal worms are very common where sanitation is poor and can cause malnutrition, anaemia (especially hookworm) and abdominal symptoms, particularly in children." },
      { h: "How parasites are transmitted", list: [
        "By an insect vector — mosquito (malaria), sandfly (kala-azar).",
        "Faeco-oral — swallowing contaminated food or water (amoebiasis, roundworm, many worms).",
        "Through the skin — hookworm larvae penetrate the feet from contaminated soil.",
        "Undercooked food — some tapeworms from undercooked meat/fish.",
        "Sexual contact — trichomoniasis."
      ] },
      { h: "Prevention and control", p: "Parasitic diseases are controlled by attacking their routes of spread: safe water, food hygiene and good sanitation (faeco-oral parasites); wearing shoes (hookworm); vector control such as insecticide-treated bed nets and removing breeding sites (malaria, kala-azar); cooking food thoroughly; and regular deworming programmes for children. Prompt diagnosis and treatment also reduce spread." },
      { h: "Nursing relevance", p: "Nurses play a major role in preventing parasitic disease in Bangladesh — promoting hand washing, safe water and sanitation, bed-net use, deworming and footwear — and in recognising symptoms (fever patterns of malaria, bloody diarrhoea of amoebiasis, anaemia of hookworm), collecting specimens (blood film, stool) and giving treatment." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Define a parasite and differentiate ecto- and endoparasites.",
      "Name important protozoal diseases and how each is transmitted.",
      "List common intestinal helminths and their effects.",
      "Describe the routes of transmission of parasites.",
      "How are parasitic diseases prevented and controlled in Bangladesh?"
    ],
    assessment: [
      { type: "mcq", q: "Malaria is caused by the protozoan ______ and spread by the Anopheles mosquito.", options: ["Plasmodium", "Leishmania", "Entamoeba", "Trichomonas"], answer: 0, rationale: "Plasmodium species cause malaria, transmitted by female Anopheles mosquitoes." },
      { type: "mcq", q: "Kala-azar (visceral leishmaniasis) is spread by the bite of the:", options: ["Mosquito", "Sandfly", "Housefly", "Tick"], answer: 1, rationale: "Leishmania donovani (kala-azar) is transmitted by the sandfly." },
      { type: "mcq", q: "Amoebic dysentery is transmitted by the:", options: ["Faeco-oral route", "Mosquito", "Air", "Sexual contact only"], answer: 0, rationale: "Entamoeba histolytica spreads via contaminated food/water (faeco-oral)." },
      { type: "mcq", q: "Which parasite is a single-celled protozoan?", options: ["Tapeworm", "Hookworm", "Entamoeba histolytica", "Ascaris"], answer: 2, rationale: "Entamoeba histolytica is a protozoan; the others are helminths (worms)." },
      { type: "mcq", q: "Hookworm larvae usually enter the body through the:", options: ["Mouth only", "Skin of the feet", "Lungs directly", "Eyes"], answer: 1, rationale: "Hookworm larvae penetrate the skin (often bare feet) from contaminated soil." },
      { type: "mcq", q: "The intestinal worm most associated with anaemia is:", options: ["Pinworm", "Hookworm", "Tapeworm", "Trichomonas"], answer: 1, rationale: "Hookworm feeds on blood in the gut, causing iron-deficiency anaemia." },
      { type: "mcq", q: "Insecticide-treated bed nets mainly help prevent:", options: ["Amoebiasis", "Malaria and kala-azar", "Tapeworm", "Trichomoniasis"], answer: 1, rationale: "Bed nets reduce bites from mosquitoes (malaria) and sandflies (kala-azar)." },
      { type: "mcq", q: "Trichomonas vaginalis is mainly transmitted by:", options: ["Mosquito bite", "Sexual contact", "Soil", "Air"], answer: 1, rationale: "Trichomoniasis is a sexually transmitted protozoal infection." },
      { type: "mcq", q: "Helminths are best described as:", options: ["Single-celled protozoa", "Multicellular worms", "Bacteria", "Viruses"], answer: 1, rationale: "Helminths are multicellular worm parasites." },
      { type: "mcq", q: "A key measure against faeco-oral parasites is:", options: ["Safe water and sanitation", "Antibiotics for everyone", "Wearing gloves only", "Avoiding vaccines"], answer: 0, rationale: "Clean water, food hygiene and sanitation interrupt faeco-oral spread." },
      { type: "fill", q: "The protozoan parasite that causes malaria is ______.", accept: ["plasmodium"], rationale: "Plasmodium species cause malaria via the Anopheles mosquito." },
      { type: "fill", q: "Worm parasites such as roundworm and hookworm are collectively called ______.", accept: ["helminths", "helminth"], rationale: "Helminths are the multicellular worm parasites." }
    ]
  },
  {
    id: "mp-07-pathogenicity",
    unit: "Unit 3 · Infection & Immunity",
    title: "How Pathogens Cause Disease",
    readMinutes: 17,
    summary: "Pathogenicity and virulence, how microbes invade and damage the body, toxins, the chain of infection and the modes of transmission.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Pathogenicity and virulence", p: "Pathogenicity is the ability of a microbe to cause disease; virulence is the degree or strength of that ability. A highly virulent organism causes severe disease even in small numbers. Whether infection leads to disease depends on the microbe's virulence and numbers (the 'dose') and on the host's resistance." },
      { h: "How a pathogen causes disease", p: "To cause disease a pathogen must: survive in a reservoir, leave it and reach a new host, enter the body, attach to and colonise a surface, invade the tissues, evade the body's defences, multiply, and cause damage. It is then shed to infect others. Breaking any of these steps prevents infection." },
      { h: "How microbes damage the body", p: "Microbes harm the body in two main ways: by direct invasion and destruction of cells and tissues, and by producing toxins (poisons). Exotoxins are powerful poisons released by some bacteria (e.g. the tetanus and cholera toxins); endotoxins are part of the wall of Gram-negative bacteria and are released when the bacteria die, causing fever and shock." },
      { h: "The chain of infection", p: "Infection spreads through a six-link chain. Infection control works by breaking any link.", figure: {
        caption: "Figure 7.1 — The chain of infection.",
        svg: "<svg viewBox='0 0 700 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Chain of infection'><defs><marker id='mpci' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" + ["Agent", "Reservoir", "Portal of exit", "Transmission", "Portal of entry", "Susceptible host"].map(function (t, i) { var x = 4 + i * 116; return "<rect x='" + x + "' y='24' width='104' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='" + (x + 52) + "' y='48' text-anchor='middle' font-family='Inter' font-size='9.5' font-weight='700' fill='#14387A'>" + t + "</text>" + (i < 5 ? "<line x1='" + (x + 104) + "' y1='44' x2='" + (x + 116) + "' y2='44' stroke='#2E63B8' stroke-width='2' marker-end='url(#mpci)'/>" : ""); }).join("") + "</svg>"
      } },
      { h: "Reservoirs and sources", p: "A reservoir is where a pathogen normally lives and multiplies — this may be humans (including symptom-free 'carriers'), animals (zoonoses, e.g. rabies), or the environment (water, soil, e.g. tetanus spores in soil, cholera in water). Identifying the reservoir helps target control measures." },
      { h: "Modes of transmission", list: [
        "Contact — direct (touch, body fluids, sexual) or indirect (via contaminated objects, 'fomites').",
        "Droplet — large respiratory droplets from coughing/sneezing over short distances (e.g. influenza).",
        "Airborne — tiny particles that travel further and linger (e.g. tuberculosis, measles).",
        "Vehicle — through contaminated food, water, blood or medicines.",
        "Vector — by insects/animals (mosquito for malaria/dengue, sandfly for kala-azar)."
      ] },
      { h: "Nursing relevance", p: "Understanding how pathogens cause and spread disease is the basis of all infection prevention: standard precautions, hand hygiene, asepsis, safe handling of body fluids, isolation by transmission type, vector control and immunisation. Nurses break the chain of infection at every opportunity." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Differentiate pathogenicity and virulence.",
      "Describe the steps by which a pathogen causes disease.",
      "How do microbes damage the body? Differentiate exotoxins and endotoxins.",
      "Describe the chain of infection.",
      "List and give examples of the modes of transmission of infection."
    ],
    assessment: [
      { type: "mcq", q: "The ability of a microbe to cause disease is its:", options: ["Immunity", "Pathogenicity", "Resistance", "Reservoir"], answer: 1, rationale: "Pathogenicity is the capacity to cause disease; virulence is its degree." },
      { type: "mcq", q: "Powerful poisons actively released by some bacteria are:", options: ["Endotoxins", "Exotoxins", "Antibodies", "Vaccines"], answer: 1, rationale: "Exotoxins are secreted toxins (e.g. tetanus, cholera); endotoxins are part of the Gram-negative wall." },
      { type: "mcq", q: "A person who carries and spreads a pathogen without symptoms is a:", options: ["Vector", "Carrier", "Host defence", "Reservoir animal"], answer: 1, rationale: "A carrier harbours and sheds the organism without showing disease." },
      { type: "mcq", q: "Tuberculosis spreads mainly by which route?", options: ["Vector", "Airborne", "Faeco-oral", "Sexual"], answer: 1, rationale: "TB is transmitted by airborne particles." },
      { type: "mcq", q: "Spread of infection by contaminated objects (fomites) is a form of:", options: ["Droplet transmission", "Indirect contact", "Vector transmission", "Airborne spread"], answer: 1, rationale: "Fomites transmit infection by indirect contact." },
      { type: "mcq", q: "Malaria is transmitted by a:", options: ["Vehicle", "Vector (mosquito)", "Droplet", "Fomite"], answer: 1, rationale: "Malaria is vector-borne, spread by the Anopheles mosquito." },
      { type: "mcq", q: "Endotoxins are associated with:", options: ["Gram-positive cocci", "The wall of Gram-negative bacteria", "Viruses", "Fungi"], answer: 1, rationale: "Endotoxins are part of the outer wall of Gram-negative bacteria, released on cell death." },
      { type: "mcq", q: "A reservoir of infection may be:", options: ["Only humans", "Humans, animals or the environment", "Only water", "Only insects"], answer: 1, rationale: "Reservoirs include humans, animals and the environment." },
      { type: "mcq", q: "Infection control works by:", options: ["Strengthening every link", "Breaking a link in the chain of infection", "Ignoring transmission", "Only treating symptoms"], answer: 1, rationale: "Breaking any link of the chain interrupts transmission." },
      { type: "mcq", q: "Large respiratory droplets from a cough spread infection by:", options: ["Airborne route", "Droplet transmission", "Vector", "Vehicle"], answer: 1, rationale: "Droplet transmission involves large respiratory droplets over short distances." },
      { type: "fill", q: "The strength or degree of a pathogen's disease-causing power is its ______.", accept: ["virulence"], rationale: "Virulence is the degree of pathogenicity." },
      { type: "fill", q: "An insect or animal that transmits a pathogen is called a ______.", accept: ["vector"], rationale: "A vector (e.g. mosquito) carries the pathogen to a new host." }
    ]
  },
  {
    id: "mp-08-immunity",
    unit: "Unit 3 · Infection & Immunity",
    title: "Body Defences & Immunity",
    readMinutes: 17,
    summary: "The body's two lines of defence — innate and adaptive immunity — antibodies, and the types of acquired immunity (active and passive, natural and artificial).",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is immunity?", p: "Immunity is the body's ability to resist and overcome infection. It has two broad arms that work together: innate (non-specific) immunity, which is present from birth and acts against any invader, and adaptive (specific) immunity, which is learned, targets particular microbes, and remembers them." },
      { h: "Innate (non-specific) immunity", list: [
        "Physical and chemical barriers — intact skin, mucous membranes, stomach acid, tears (lysozyme).",
        "Phagocytes — white cells (neutrophils, macrophages) that engulf and destroy microbes.",
        "Inflammation — redness, heat, swelling and pain that wall off and clear infection.",
        "Fever — a raised temperature that slows microbial growth.",
        "Natural killer cells and protective proteins (interferon, complement)."
      ] },
      { h: "Adaptive (specific) immunity", p: "Adaptive immunity is carried out by lymphocytes and has two branches. Cell-mediated immunity uses T-lymphocytes: helper T cells coordinate the response and cytotoxic T cells kill infected cells. Humoral immunity uses B-lymphocytes, which become plasma cells that secrete antibodies against a specific antigen. After an infection, memory cells remain, giving a faster, stronger response next time — the basis of lasting immunity and vaccination.", figure: { caption: "Figure 8.1 — Innate vs adaptive immunity. Add a comparison diagram if available.", placeholder: true } },
      { h: "Antigens and antibodies", p: "An antigen is any substance (often part of a microbe) that the immune system recognises as foreign and responds to. An antibody (immunoglobulin) is a Y-shaped protein made by plasma cells that binds a specific antigen to neutralise it or mark it for destruction. The five antibody classes are IgG (most abundant; crosses the placenta), IgM (first made in a new infection), IgA (in secretions such as breast milk), IgE (allergy and parasites) and IgD." },
      { h: "Types of acquired immunity", list: [
        "Active natural — antibodies made by the body after catching an infection (long-lasting).",
        "Active artificial — antibodies made after vaccination (long-lasting).",
        "Passive natural — ready-made antibodies received from the mother across the placenta or in breast milk (temporary).",
        "Passive artificial — ready-made antibodies given by injection, e.g. anti-tetanus immunoglobulin (temporary)."
      ] },
      { h: "Factors affecting immunity", p: "Immunity is weakened by malnutrition, very young or old age, chronic disease (e.g. diabetes), HIV/AIDS, cancer and its treatment, and drugs such as steroids. Such 'immunocompromised' people are far more prone to infection — an important reason for careful infection control around them." },
      { h: "Nursing relevance", p: "Understanding immunity explains why vaccination protects, why immunocompromised patients need extra protection, why good nutrition supports recovery, and how the body's own defences (fever, inflammation) are signs of the immune response at work. It underpins immunisation programmes and infection-control priorities." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Differentiate innate and adaptive immunity.",
      "List the components of innate immunity.",
      "Compare cell-mediated and humoral immunity.",
      "Define antigen and antibody and name the antibody classes.",
      "Classify the types of acquired immunity with examples."
    ],
    assessment: [
      { type: "mcq", q: "Immunity present from birth that acts against any invader is:", options: ["Adaptive immunity", "Innate (non-specific) immunity", "Passive immunity", "Acquired immunity"], answer: 1, rationale: "Innate immunity is non-specific and present from birth." },
      { type: "mcq", q: "Which is part of innate immunity?", options: ["Antibody production", "Memory cells", "Phagocytosis and inflammation", "Cytotoxic T-cell memory"], answer: 2, rationale: "Phagocytosis, inflammation and barriers are innate (non-specific) defences." },
      { type: "mcq", q: "Antibodies are produced by:", options: ["Neutrophils", "Plasma cells (B lymphocytes)", "Red cells", "Platelets"], answer: 1, rationale: "Activated B cells become plasma cells that secrete antibodies." },
      { type: "mcq", q: "A substance recognised by the immune system as foreign is a/an:", options: ["Antibody", "Antigen", "Vaccine", "Toxoid"], answer: 1, rationale: "An antigen triggers the immune response; an antibody binds it." },
      { type: "mcq", q: "The most abundant antibody, which crosses the placenta, is:", options: ["IgA", "IgE", "IgG", "IgM"], answer: 2, rationale: "IgG is the most abundant antibody and crosses the placenta." },
      { type: "mcq", q: "Immunity from a vaccine is an example of:", options: ["Active artificial immunity", "Passive natural immunity", "Innate immunity", "Passive artificial immunity"], answer: 0, rationale: "Vaccination makes the body produce its own antibodies — active artificial immunity." },
      { type: "mcq", q: "Antibodies a baby receives in breast milk provide:", options: ["Active natural immunity", "Passive natural immunity", "Active artificial immunity", "No immunity"], answer: 1, rationale: "Maternal antibodies give temporary passive natural immunity." },
      { type: "mcq", q: "Cell-mediated immunity is carried out mainly by:", options: ["B cells", "T-lymphocytes", "Red cells", "Platelets"], answer: 1, rationale: "T-lymphocytes mediate cell-mediated immunity; B cells mediate humoral immunity." },
      { type: "mcq", q: "Cells that remain after infection and give faster future protection are:", options: ["Memory cells", "Red cells", "Mast cells", "Plasma cells only"], answer: 0, rationale: "Memory B and T cells provide the rapid secondary response (basis of vaccination)." },
      { type: "mcq", q: "A patient with HIV, cancer or on steroids is described as:", options: ["Immunocompromised", "Immune for life", "Vaccinated", "A carrier"], answer: 0, rationale: "Such patients have weakened immunity (immunocompromised) and need extra protection." },
      { type: "fill", q: "The antibody produced first (earliest) in a new infection is ______.", accept: ["igm"], rationale: "IgM is the first antibody class made in a primary response." },
      { type: "fill", q: "Antibodies given ready-made by injection provide ______ immunity.", accept: ["passive", "passive artificial"], rationale: "Ready-made antibodies (e.g. immunoglobulin) give passive immunity." }
    ]
  },
  {
    id: "mp-09-immunization",
    unit: "Unit 3 · Infection & Immunity",
    title: "Immunization & Vaccines (EPI)",
    readMinutes: 17,
    summary: "Active and passive immunization, the types of vaccine, the Expanded Programme on Immunization (EPI) in Bangladesh, the cold chain, herd immunity, and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is immunization?", p: "Immunization is the process of making a person immune (protected) against an infectious disease, usually by giving a vaccine. It is one of the most cost-effective public-health measures ever devised, preventing millions of deaths from diseases such as measles, polio, tetanus and diphtheria." },
      { h: "Active and passive immunization", p: "Active immunization gives a vaccine that stimulates the person's own immune system to make antibodies and memory cells — protection is slow to develop but long-lasting. Passive immunization gives ready-made antibodies (for example, anti-tetanus or anti-rabies immunoglobulin, or maternal antibodies) — protection is immediate but temporary, used when fast protection is needed.", figure: { caption: "Figure 9.1 — Active vs passive immunization. Add a comparison diagram if available.", placeholder: true } },
      { h: "Types of vaccine", list: [
        "Live attenuated — weakened live organisms (e.g. BCG for TB, oral polio, measles); give strong, lasting immunity.",
        "Killed (inactivated) — dead organisms (e.g. injectable polio, some cholera vaccines).",
        "Toxoid — inactivated bacterial toxin (e.g. tetanus toxoid, diphtheria).",
        "Subunit / conjugate — parts of the organism (e.g. hepatitis B, Hib, pneumococcal)."
      ] },
      { h: "The EPI in Bangladesh", p: "Bangladesh runs a successful Expanded Programme on Immunization (EPI) that gives free childhood vaccines, including BCG (tuberculosis), oral and injectable polio vaccine, the pentavalent vaccine (diphtheria, pertussis, tetanus, hepatitis B and Hib), pneumococcal vaccine, and measles-rubella vaccine, plus tetanus vaccination for pregnant women. The schedule begins at birth and continues through infancy." },
      { h: "The cold chain", p: "Most vaccines are damaged by heat (and some by freezing), so they must be kept within a safe temperature range (commonly 2-8 °C) from manufacture to the moment of use — this unbroken system of refrigeration and transport is the cold chain. Nurses are responsible for storing vaccines correctly, monitoring the fridge temperature, and discarding vaccines that have been exposed to wrong temperatures." },
      { h: "Herd immunity", p: "When a large enough proportion of a population is immunised, the spread of a disease is interrupted, protecting even those who are not immune (such as newborns or the immunocompromised). This 'herd immunity' is why high vaccination coverage matters and why diseases like polio can be eliminated." },
      { h: "Nursing relevance", p: "Nurses are central to immunisation: giving vaccines safely by the correct route and dose, maintaining the cold chain, keeping accurate records, educating families and dispelling myths, recognising and managing minor reactions, and promoting full coverage. They also give passive immunisation (e.g. tetanus immunoglobulin after a dirty wound)." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Differentiate active and passive immunization.",
      "Describe the types of vaccine with an example of each.",
      "What is the EPI, and which vaccines does it provide in Bangladesh?",
      "What is the cold chain and why is it important?",
      "Explain herd immunity and the nurse's role in immunization."
    ],
    assessment: [
      { type: "mcq", q: "A vaccine that stimulates the body to make its own antibodies provides:", options: ["Passive immunity", "Active immunity", "No immunity", "Innate immunity"], answer: 1, rationale: "Vaccination is active immunization — the body makes its own antibodies and memory." },
      { type: "mcq", q: "Ready-made antibodies (e.g. anti-tetanus immunoglobulin) provide:", options: ["Active immunity", "Passive immunity", "Lifelong immunity", "Herd immunity"], answer: 1, rationale: "Ready-made antibodies give immediate but temporary passive immunity." },
      { type: "mcq", q: "BCG, oral polio and measles vaccines are examples of ______ vaccines.", options: ["Toxoid", "Live attenuated", "Killed", "Subunit"], answer: 1, rationale: "These are live attenuated (weakened live organism) vaccines." },
      { type: "mcq", q: "Tetanus vaccine is an example of a ______ vaccine.", options: ["Live attenuated", "Toxoid", "Subunit", "Conjugate"], answer: 1, rationale: "Tetanus toxoid is an inactivated-toxin (toxoid) vaccine." },
      { type: "mcq", q: "BCG vaccine protects against:", options: ["Measles", "Tuberculosis", "Polio", "Tetanus"], answer: 1, rationale: "BCG protects against tuberculosis." },
      { type: "mcq", q: "The system that keeps vaccines at a safe temperature from manufacture to use is the:", options: ["Supply chain", "Cold chain", "Hot chain", "Food chain"], answer: 1, rationale: "The cold chain maintains vaccines (commonly 2-8 °C) to keep them effective." },
      { type: "mcq", q: "The pentavalent vaccine protects against diphtheria, pertussis, tetanus, Hib and:", options: ["Hepatitis B", "Cholera", "Malaria", "Dengue"], answer: 0, rationale: "Pentavalent covers DPT + Hib + hepatitis B." },
      { type: "mcq", q: "Protection of a whole population when most are immunised is called:", options: ["Passive immunity", "Herd immunity", "Innate immunity", "Cross immunity"], answer: 1, rationale: "Herd immunity interrupts spread, protecting even the non-immune." },
      { type: "mcq", q: "Bangladesh's national childhood vaccination programme is the:", options: ["EPI", "WHO", "ICN", "BNMC"], answer: 0, rationale: "The Expanded Programme on Immunization (EPI) provides free childhood vaccines." },
      { type: "mcq", q: "Most vaccines should usually be stored at:", options: ["Room temperature", "2-8 °C", "Below -20 °C always", "37 °C"], answer: 1, rationale: "Many vaccines are kept at 2-8 °C; the cold chain protects potency." },
      { type: "fill", q: "Immunization that gives the body's own long-lasting protection via a vaccine is ______ immunization.", accept: ["active"], rationale: "Active immunization stimulates the person's own immune response." },
      { type: "fill", q: "The unbroken refrigerated system that keeps vaccines potent is the ______ chain.", accept: ["cold"], rationale: "The cold chain maintains vaccines at safe temperatures until use." }
    ]
  },
  {
    id: "mp-10-physical-control",
    unit: "Unit 4 · Control of Microbes",
    title: "Control of Microbial Growth — Physical Methods",
    readMinutes: 16,
    summary: "Key terms (sterilization, disinfection), and the physical methods of controlling microbes — heat (autoclave, dry heat, boiling, pasteurization), filtration, radiation and drying.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why control microbes?", p: "Controlling microbial growth prevents infection, food spoilage and contamination. In health care it makes equipment and the environment safe for patients. Methods are either physical (heat, radiation, filtration) or chemical (disinfectants and antiseptics); this topic covers the physical methods." },
      { h: "Key terms", list: [
        "Sterilization — destroys ALL microbes, including resistant bacterial spores.",
        "Disinfection — reduces microbes to a safe level but may not kill all spores.",
        "Antisepsis — destroying/inhibiting microbes on living tissue.",
        "Asepsis — preventing contamination by microbes."
      ] },
      { h: "How heat kills microbes", p: "Heat is the most common and reliable physical method. It kills microbes by denaturing (coagulating) their proteins and enzymes. Moist heat is more effective than dry heat at the same temperature because water conducts heat efficiently and penetrates cells.", figure: { caption: "Figure 10.1 — Physical methods of microbial control. Add a labelled image if available.", placeholder: true } },
      { h: "Moist heat", list: [
        "Autoclave — pressurised steam, usually 121 °C for about 15 minutes; the standard method to sterilise instruments and dressings (kills spores).",
        "Boiling — kills most organisms in a few minutes but does not reliably kill all spores (so it disinfects rather than sterilises).",
        "Pasteurisation — gentle heat (e.g. of milk) that kills pathogens without sterilising, making it safe to drink."
      ] },
      { h: "Dry heat and flaming", p: "Dry heat is used for items that steam would damage or not penetrate. The hot-air oven sterilises glassware and metal instruments at higher temperatures for longer than the autoclave. Flaming (passing a wire loop through a flame) and incineration (burning waste) also use dry heat." },
      { h: "Filtration, radiation and drying", list: [
        "Filtration — passes heat-sensitive fluids (some drugs) or air through fine filters that trap microbes; HEPA filters clean the air in operating theatres.",
        "Radiation — ultraviolet (UV) light disinfects surfaces and air; gamma radiation sterilises pre-packed single-use items industrially.",
        "Drying and osmotic pressure — removing water (drying) or high salt/sugar concentrations (e.g. preserving food) stop microbes growing, though they may not kill them."
      ] },
      { h: "Nursing relevance", p: "Nurses rely on these methods every day: using autoclaved (sterile) instruments and dressings, boiling/disinfecting where sterilisation is not possible, handling sterile packs correctly, and understanding that boiling and pasteurisation do not equal sterilisation. Correct use protects patients from infection." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Differentiate sterilization and disinfection.",
      "Why is moist heat more effective than dry heat?",
      "Describe the autoclave and its use.",
      "Differentiate boiling and pasteurisation from sterilisation.",
      "Describe filtration and radiation as methods of microbial control."
    ],
    assessment: [
      { type: "mcq", q: "Sterilization is a process that:", options: ["Reduces most microbes", "Kills all microbes including spores", "Only cleans dirt", "Works only on skin"], answer: 1, rationale: "Sterilization destroys all micro-organisms, including resistant spores." },
      { type: "mcq", q: "The standard method to sterilise instruments using pressurised steam is the:", options: ["Hot-air oven", "Autoclave", "Boiling pan", "UV lamp"], answer: 1, rationale: "The autoclave uses pressurised steam (~121 °C) and reliably kills spores." },
      { type: "mcq", q: "Moist heat is more effective than dry heat because it:", options: ["Is cheaper", "Penetrates and conducts heat better, coagulating proteins", "Adds chemicals", "Cools microbes"], answer: 1, rationale: "Moist heat penetrates and coagulates proteins efficiently at lower temperatures." },
      { type: "mcq", q: "Boiling water for a few minutes:", options: ["Sterilises everything", "Kills most organisms but not all spores", "Has no effect", "Only cleans"], answer: 1, rationale: "Boiling disinfects (kills most microbes) but does not reliably kill spores." },
      { type: "mcq", q: "Gentle heating of milk to kill pathogens without sterilising is:", options: ["Autoclaving", "Pasteurisation", "Filtration", "Flaming"], answer: 1, rationale: "Pasteurisation kills pathogens in milk without sterilising it." },
      { type: "mcq", q: "Heat-sensitive fluids that cannot be heated are best made microbe-free by:", options: ["Boiling", "Filtration", "Flaming", "Drying"], answer: 1, rationale: "Filtration removes microbes from heat-sensitive fluids without heat." },
      { type: "mcq", q: "Glassware and metal that steam may not suit are sterilised by:", options: ["Hot-air oven (dry heat)", "Pasteurisation", "UV light", "Salting"], answer: 0, rationale: "Dry heat (hot-air oven) suits glassware and metal instruments." },
      { type: "mcq", q: "Pre-packed single-use disposables are often sterilised industrially by:", options: ["Boiling", "Gamma radiation", "Hand washing", "Refrigeration"], answer: 1, rationale: "Gamma radiation sterilises sealed single-use medical items." },
      { type: "mcq", q: "Heat kills microbes mainly by:", options: ["Freezing them", "Denaturing their proteins and enzymes", "Adding water", "Diluting them"], answer: 1, rationale: "Heat coagulates (denatures) microbial proteins and enzymes." },
      { type: "mcq", q: "Preserving food by drying or high salt/sugar works by:", options: ["Killing all spores", "Removing/withholding water so microbes cannot grow", "Adding antibiotics", "Heating to 121 °C"], answer: 1, rationale: "Drying and osmotic pressure deny microbes the water they need to grow." },
      { type: "fill", q: "The autoclave sterilises using pressurised ______ at about 121 °C.", accept: ["steam", "moist heat"], rationale: "The autoclave uses pressurised steam (moist heat)." },
      { type: "fill", q: "A process that kills ALL microbes including spores is called ______.", accept: ["sterilisation", "sterilization"], rationale: "Sterilization destroys all microbes, including spores." }
    ]
  },
  {
    id: "mp-11-disinfection",
    unit: "Unit 4 · Control of Microbes",
    title: "Disinfection, Antiseptics & Sterilization",
    readMinutes: 16,
    summary: "Chemical control of microbes — the difference between antiseptics, disinfectants and sterilants, how they act, common agents, and the factors affecting their effectiveness.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key definitions", list: [
        "Antiseptic — a chemical applied to living tissue (skin, wounds) to kill or inhibit microbes.",
        "Disinfectant — a chemical used on non-living surfaces/equipment to destroy most microbes (usually too harsh for skin).",
        "Sterilant — an agent or process that destroys ALL microbes including spores.",
        "Disinfection reduces microbes to a safe level; sterilization removes them all."
      ] },
      { h: "How chemical agents act", p: "Chemical agents kill or inhibit microbes by damaging their essential structures: denaturing (coagulating) their proteins and enzymes, dissolving or disrupting the cell membrane, or damaging their nucleic acids. Different agents act in different ways and against different ranges of microbes.", figure: { caption: "Figure 11.1 — Antiseptics, disinfectants and how they act. Add a chart if available.", placeholder: true } },
      { h: "Common antiseptics", p: "Antiseptics, used on skin and wounds, include alcohol (about 70%, for skin before injections), chlorhexidine (skin and hand preparation), povidone-iodine (skin and wound preparation) and hydrogen peroxide (wound cleansing). They must be effective yet gentle enough not to harm tissue." },
      { h: "Common disinfectants", p: "Disinfectants, used on surfaces and equipment, include sodium hypochlorite (bleach) for surfaces and spills, phenolic compounds, and glutaraldehyde for heat-sensitive instruments such as endoscopes. They are stronger and often more toxic than antiseptics, so they are not used on skin and need care and ventilation." },
      { h: "Factors affecting effectiveness", p: "How well a chemical works depends on its concentration and the contact (exposure) time, the temperature, the number and type of microbes (spores are most resistant), and — very importantly — the presence of organic matter such as blood, pus or dirt, which shields microbes and inactivates many agents. This is why instruments must be thoroughly cleaned before disinfection or sterilisation, and why correct dilution and contact time matter." },
      { h: "Choosing the right method", p: "The choice depends on the item and the risk. Skin and wounds need an antiseptic; surfaces and equipment need a disinfectant; instruments that enter sterile body areas need sterilisation. Heat-stable items are best autoclaved; heat-sensitive ones are chemically (cold) sterilised. Single-use items are never reused." },
      { h: "Nursing relevance", p: "Nurses use these agents constantly — preparing skin before procedures, cleaning surfaces and spills, processing instruments, and ensuring correct concentration and contact time. Above all, hand hygiene (with soap and water or an alcohol-based hand rub) remains the single most important chemical measure to prevent infection." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Define antiseptic, disinfectant and sterilant.",
      "Explain how chemical agents kill or inhibit microbes.",
      "Give two examples each of common antiseptics and disinfectants.",
      "List the factors that affect the effectiveness of a disinfectant.",
      "How does the nurse choose the right method of microbial control for an item?"
    ],
    assessment: [
      { type: "mcq", q: "A chemical used on living tissue to kill or inhibit microbes is a/an:", options: ["Disinfectant", "Antiseptic", "Detergent", "Solvent"], answer: 1, rationale: "Antiseptics are used on living tissue; disinfectants on non-living surfaces." },
      { type: "mcq", q: "Sodium hypochlorite (bleach) is best classified as a:", options: ["Skin antiseptic", "Surface disinfectant", "Sterilant for skin", "Antibiotic"], answer: 1, rationale: "Bleach is a surface disinfectant, too harsh for skin." },
      { type: "mcq", q: "A common skin antiseptic used before injections is:", options: ["Bleach", "70% alcohol", "Phenol", "Glutaraldehyde"], answer: 1, rationale: "About 70% alcohol is a standard skin antiseptic." },
      { type: "mcq", q: "Chemical agents kill microbes mainly by:", options: ["Feeding them", "Denaturing proteins or disrupting membranes", "Cooling them", "Adding water"], answer: 1, rationale: "They denature proteins/enzymes, disrupt membranes or damage nucleic acids." },
      { type: "mcq", q: "The effectiveness of a disinfectant is reduced most by:", options: ["Clean surfaces", "Organic matter (blood, pus, dirt)", "Bright light", "Cold water only"], answer: 1, rationale: "Organic matter shields microbes and inactivates many agents." },
      { type: "mcq", q: "Heat-sensitive instruments such as endoscopes are often disinfected/sterilised with:", options: ["Autoclave", "Glutaraldehyde", "Boiling only", "Soap"], answer: 1, rationale: "Glutaraldehyde (chemical/cold method) suits heat-sensitive instruments." },
      { type: "mcq", q: "Before disinfection, instruments must first be:", options: ["Used again", "Thoroughly cleaned", "Left dirty", "Dried only"], answer: 1, rationale: "Cleaning removes organic matter so the disinfectant can work." },
      { type: "mcq", q: "Which is the most important chemical measure to prevent infection spread?", options: ["Hand hygiene", "Mopping floors", "Air freshener", "Antibiotics"], answer: 0, rationale: "Hand hygiene (soap/water or alcohol rub) is the most effective measure." },
      { type: "mcq", q: "The microbes most resistant to disinfectants are:", options: ["Bacterial spores", "Ordinary bacteria", "Viruses always", "Fungi always"], answer: 0, rationale: "Bacterial spores are the most resistant forms." },
      { type: "mcq", q: "A povidone-iodine solution is used mainly as a/an:", options: ["Surface disinfectant for floors", "Skin/wound antiseptic", "Antibiotic tablet", "Sterilant gas"], answer: 1, rationale: "Povidone-iodine is a skin and wound antiseptic." },
      { type: "fill", q: "A chemical used on non-living surfaces to destroy microbes is a ______.", accept: ["disinfectant"], rationale: "Disinfectants act on inanimate surfaces; antiseptics on living tissue." },
      { type: "fill", q: "Blood, pus and dirt that reduce a disinfectant's action are called ______ matter.", accept: ["organic"], rationale: "Organic matter shields microbes and inactivates many disinfectants." }
    ]
  },
  {
    id: "mp-12-antimicrobials",
    unit: "Unit 4 · Control of Microbes",
    title: "Antimicrobial Chemotherapy & Resistance",
    readMinutes: 16,
    summary: "Types of antimicrobial drugs and how antibiotics work, bactericidal vs bacteriostatic and spectrum, sensitivity testing, and the global problem of antimicrobial resistance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are antimicrobials?", p: "Antimicrobials are drugs used to treat infections by killing or inhibiting microbes. They are grouped by the type of organism they act against: antibiotics (antibacterials) against bacteria, antivirals against viruses, antifungals against fungi, and antiparasitics/anthelmintics against parasites and worms. Importantly, antibiotics do not work against viruses." },
      { h: "How antibiotics work", p: "Antibiotics target structures or processes that are present in bacteria but not (or different) in human cells, so they harm the microbe but not the patient. Common mechanisms include damaging the bacterial cell wall (e.g. penicillins), blocking protein synthesis, and interfering with nucleic-acid or folic-acid metabolism." },
      { h: "Bactericidal, bacteriostatic and spectrum", list: [
        "Bactericidal — kills bacteria (e.g. penicillins).",
        "Bacteriostatic — stops bacteria multiplying so the immune system can clear them.",
        "Broad-spectrum — active against many kinds of bacteria.",
        "Narrow-spectrum — active against only a few kinds."
      ], figure: { caption: "Figure 12.1 — Choosing antibiotics by culture and sensitivity. Add a chart if available.", placeholder: true } },
      { h: "Culture and sensitivity testing", p: "To choose the best antibiotic, the laboratory grows (cultures) the organism from a specimen and tests which antibiotics stop its growth — a culture and sensitivity (C&S) test. The organism is reported as 'sensitive' or 'resistant' to each drug. Where possible, specimens are collected before antibiotics are started, so the result is accurate." },
      { h: "Antimicrobial resistance (AMR)", p: "Antimicrobial resistance occurs when microbes change so that drugs that used to kill them no longer work. It is a major global threat that makes infections harder, and sometimes impossible, to treat. Resistance is driven by misuse and overuse of antibiotics — using them for viral illness, not finishing the course, using the wrong dose, and using them without prescription, all of which are common problems." },
      { h: "Rational use of antibiotics", p: "Resistance is slowed by using antibiotics wisely: only when truly needed (not for viral colds), the right drug at the right dose for the right duration, guided by culture and sensitivity where possible, and always completing the prescribed course. This responsible approach is called antimicrobial stewardship." },
      { h: "Nursing relevance", p: "Nurses are key to combating resistance: giving antibiotics correctly and on time, teaching patients to complete the full course and never to share or self-prescribe antibiotics, collecting specimens before the first dose, watching for side-effects and allergies, and reinforcing infection prevention so fewer antibiotics are needed." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Name the types of antimicrobial drugs and the organisms each acts against.",
      "How do antibiotics kill or inhibit bacteria without harming the patient?",
      "Differentiate bactericidal and bacteriostatic, and broad- and narrow-spectrum.",
      "What is culture and sensitivity testing, and why is it useful?",
      "What is antimicrobial resistance, what causes it, and how can the nurse help reduce it?"
    ],
    assessment: [
      { type: "mcq", q: "Antibiotics are effective against:", options: ["Viruses", "Bacteria", "All microbes equally", "Fungi only"], answer: 1, rationale: "Antibiotics act against bacteria; they do not work against viruses." },
      { type: "mcq", q: "A drug that kills bacteria is described as:", options: ["Bacteriostatic", "Bactericidal", "Antiviral", "Antifungal"], answer: 1, rationale: "Bactericidal drugs kill bacteria; bacteriostatic drugs stop their multiplication." },
      { type: "mcq", q: "An antibiotic active against many kinds of bacteria is:", options: ["Narrow-spectrum", "Broad-spectrum", "Bacteriostatic only", "Antifungal"], answer: 1, rationale: "Broad-spectrum antibiotics act against a wide range of bacteria." },
      { type: "mcq", q: "Penicillin mainly works by damaging the bacterial:", options: ["Cell wall", "Nucleus", "Mitochondria", "Capsule only"], answer: 0, rationale: "Penicillins inhibit bacterial cell-wall synthesis." },
      { type: "mcq", q: "The test used to find which antibiotic will work against an organism is:", options: ["Gram stain only", "Culture and sensitivity (C&S)", "Blood pressure", "X-ray"], answer: 1, rationale: "C&S grows the organism and tests antibiotic effectiveness." },
      { type: "mcq", q: "Specimens for culture should ideally be collected:", options: ["After several antibiotic doses", "Before starting antibiotics", "Only at discharge", "After recovery"], answer: 1, rationale: "Collecting before antibiotics gives an accurate culture result." },
      { type: "mcq", q: "Antimicrobial resistance means that:", options: ["Drugs work better", "Microbes are no longer killed by drugs that used to work", "The patient is allergic", "The drug is too strong"], answer: 1, rationale: "AMR is the loss of a drug's effectiveness against a microbe." },
      { type: "mcq", q: "A major cause of antimicrobial resistance is:", options: ["Completing courses", "Misuse/overuse of antibiotics", "Using C&S", "Good hygiene"], answer: 1, rationale: "Overuse and misuse (incl. for viral illness and incomplete courses) drive resistance." },
      { type: "mcq", q: "To help prevent resistance, the nurse should teach patients to:", options: ["Stop antibiotics when feeling better", "Complete the full prescribed course", "Share leftover antibiotics", "Self-prescribe antibiotics"], answer: 1, rationale: "Completing the full course (and not sharing/self-prescribing) limits resistance." },
      { type: "mcq", q: "Responsible, appropriate use of antibiotics is called:", options: ["Antimicrobial stewardship", "Polypharmacy", "Self-medication", "Prophylaxis only"], answer: 0, rationale: "Antimicrobial stewardship promotes the right drug, dose and duration." },
      { type: "fill", q: "A laboratory test that shows which antibiotic will work is the culture and ______ test.", accept: ["sensitivity"], rationale: "Culture and sensitivity (C&S) guides antibiotic choice." },
      { type: "fill", q: "Loss of a drug's power to kill a microbe is called antimicrobial ______.", accept: ["resistance", "resistance (amr)", "amr"], rationale: "Antimicrobial resistance (AMR) is a major global health threat." }
    ]
  },
  {
    id: "mp-13-nosocomial",
    unit: "Unit 5 · Infection in the Hospital",
    title: "Hospital-Acquired (Nosocomial) Infection",
    readMinutes: 16,
    summary: "What nosocomial infections are, why hospital patients are at risk, the common types, their sources and spread, and how they are prevented and controlled.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a nosocomial infection?", p: "A hospital-acquired (nosocomial) infection is one that a patient catches while receiving care in a hospital or health facility — it was not present or incubating at admission (usually appearing more than 48 hours after admission). These infections add greatly to illness, length of stay, cost and death, and many are preventable." },
      { h: "Why hospital patients are at risk", p: "Hospitals bring together many ill people, resistant microbes, and patients whose defences are weakened (the 'compromised host') by illness, surgery, age, malnutrition or treatment. Invasive devices — urinary catheters, IV cannulas, ventilators, surgical wounds — breach the body's natural barriers and give microbes a direct way in." },
      { h: "Common nosocomial infections", list: [
        "Urinary tract infection — most often related to urinary catheters (CAUTI).",
        "Surgical-site infection — infection of an operation wound.",
        "Lower respiratory tract infection — pneumonia, especially in ventilated patients.",
        "Bloodstream infection (bacteraemia) — often related to IV lines/cannulas."
      ], figure: { caption: "Figure 13.1 — Common hospital-acquired infections and their device links. Add a chart if available.", placeholder: true } },
      { h: "Sources and spread in hospital", p: "Microbes in hospital come from the patients themselves (their own flora), from other patients, from staff (especially unwashed hands), and from the environment and equipment. They spread mainly by contact — above all via the hands of health workers — which is why hand hygiene is the cornerstone of prevention. Some hospital organisms are antibiotic-resistant (e.g. MRSA), making them harder to treat." },
      { h: "Preventing and controlling nosocomial infection", list: [
        "Hand hygiene — the single most important measure.",
        "Standard precautions for all patients, plus transmission-based precautions/isolation as needed.",
        "Aseptic technique for all invasive procedures and wound care.",
        "Early removal of catheters and cannulas, and good device care.",
        "Proper cleaning, disinfection and sterilisation of equipment and the environment.",
        "Safe waste and sharps disposal; antimicrobial stewardship; staff immunisation and surveillance."
      ] },
      { h: "Surveillance and the team", p: "Hospitals monitor (survey) infection rates to detect problems and outbreaks, and have an infection prevention and control team and policies. Every member of staff, especially nurses at the bedside, is responsible for following these measures and reporting suspected infections." },
      { h: "Nursing relevance", p: "Nurses are at the front line of preventing hospital-acquired infection: rigorous hand hygiene, aseptic device and wound care, prompt removal of unnecessary catheters/cannulas, correct cleaning and isolation, and educating patients and visitors. These actions directly reduce patient harm and deaths." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "Define a nosocomial (hospital-acquired) infection.",
      "Why are hospital patients especially at risk of infection?",
      "List the common nosocomial infections and their device links.",
      "How do microbes spread within a hospital?",
      "Describe the measures used to prevent and control nosocomial infection."
    ],
    assessment: [
      { type: "mcq", q: "A nosocomial infection is one that is:", options: ["Present on admission", "Acquired while receiving care in hospital", "Always viral", "Never preventable"], answer: 1, rationale: "Nosocomial infections are acquired in hospital, typically >48 h after admission." },
      { type: "mcq", q: "The most common nosocomial infection is related to:", options: ["Urinary catheters (UTI)", "Eye drops", "Oral medicines", "Bed linen colour"], answer: 0, rationale: "Catheter-associated urinary tract infection is among the most common HAIs." },
      { type: "mcq", q: "The single most important measure to prevent hospital-acquired infection is:", options: ["Antibiotics for all", "Hand hygiene", "Air freshener", "Bed rest"], answer: 1, rationale: "Hand hygiene is the cornerstone of preventing nosocomial infection." },
      { type: "mcq", q: "A patient with weakened defences who is prone to infection is a:", options: ["Carrier", "Compromised host", "Vector", "Reservoir animal"], answer: 1, rationale: "The compromised host has reduced immunity and higher infection risk." },
      { type: "mcq", q: "Bloodstream infections in hospital are often related to:", options: ["IV lines/cannulas", "Eye drops", "Oral feeding", "Walking"], answer: 0, rationale: "Intravascular devices (cannulas/lines) are a common source of bacteraemia." },
      { type: "mcq", q: "Microbes spread within a hospital mainly by:", options: ["Sunlight", "The hands of health workers (contact)", "Wind", "Telephones only"], answer: 1, rationale: "Contact spread, especially via unwashed hands, is the main route." },
      { type: "mcq", q: "MRSA is an example of a hospital organism that is:", options: ["Harmless", "Antibiotic-resistant", "A virus", "A parasite"], answer: 1, rationale: "MRSA is an antibiotic-resistant bacterium, harder to treat." },
      { type: "mcq", q: "A key way to reduce catheter-associated UTI is to:", options: ["Leave catheters in longer", "Remove catheters as early as possible", "Open the drainage system often", "Raise the bag above the bladder"], answer: 1, rationale: "Early removal and good catheter care reduce CAUTI." },
      { type: "mcq", q: "Surgical-site infection is best prevented by:", options: ["Aseptic technique and wound care", "Ignoring the wound", "Sharing dressings", "Skipping hand hygiene"], answer: 0, rationale: "Aseptic technique and proper wound care prevent surgical-site infection." },
      { type: "mcq", q: "Monitoring infection rates to detect problems and outbreaks is called:", options: ["Surveillance", "Sterilisation", "Vaccination", "Quarantine"], answer: 0, rationale: "Surveillance tracks infection rates to guide control." },
      { type: "fill", q: "An infection acquired in hospital is called a ______ (or hospital-acquired) infection.", accept: ["nosocomial"], rationale: "Nosocomial = hospital-acquired infection." },
      { type: "fill", q: "Catheter-associated urinary tract infection is abbreviated ______.", accept: ["cauti"], rationale: "CAUTI is a leading nosocomial infection linked to urinary catheters." }
    ]
  },
  {
    id: "mp-14-lab-identification",
    unit: "Unit 5 · Infection in the Hospital",
    title: "Specimen Collection & Laboratory Identification",
    readMinutes: 16,
    summary: "Why and how specimens are collected, the types of microbiological specimen, and the laboratory methods used to identify microbes — microscopy, culture and sensitivity testing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why specimens are collected", p: "Identifying the exact microbe causing an infection allows correct diagnosis and the right treatment. Nurses usually collect the specimens, so good technique is vital: a poorly collected, contaminated, mislabelled or delayed specimen gives a misleading result and may lead to wrong treatment." },
      { h: "Principles of specimen collection", list: [
        "Collect the right specimen for the suspected infection, in the correct (often sterile) container.",
        "Collect, where possible, BEFORE antibiotics are started, so the organism can still grow.",
        "Use aseptic technique and avoid contamination with normal flora.",
        "Label correctly (patient details, specimen, date/time) and complete the request form.",
        "Send to the laboratory promptly (or store as advised), and treat all specimens as infectious."
      ] },
      { h: "Types of microbiological specimen", list: [
        "Swabs — from the nose, throat, wound, ulcer, eye or cervix.",
        "Sputum — coughed from deep in the lungs (e.g. for TB/AFB).",
        "Urine — a clean midstream sample for culture.",
        "Stool (faeces) — for parasites, ova and bacterial culture.",
        "Blood — for blood culture (in suspected bacteraemia) and serology.",
        "Other fluids — e.g. cerebrospinal fluid (CSF) for suspected meningitis."
      ] },
      { h: "Microscopy", p: "In the laboratory, a specimen is first examined under the microscope, often after staining (e.g. Gram stain for bacteria, Ziehl-Neelsen for TB, or wet preparations for parasites). Microscopy gives a quick provisional result — for example, 'Gram-positive cocci' or 'acid-fast bacilli seen' — guiding early treatment.", figure: { caption: "Figure 14.1 — From specimen to identification (microscopy, culture, sensitivity). Add a chart if available.", placeholder: true } },
      { h: "Culture and media", p: "Most bacteria and fungi are grown (cultured) on or in a nutrient medium (such as agar) under suitable temperature and conditions, so they multiply into visible colonies that can be identified. Selective and differential media help isolate and recognise particular organisms. Culture takes time (often 24-48 hours or longer for TB), which is why microscopy is useful for an early answer." },
      { h: "Identification and sensitivity testing", p: "The grown organism is identified by its appearance, staining, and biochemical reactions. An antibiotic sensitivity test then shows which antibiotics will work (reported as 'sensitive' or 'resistant'), allowing the doctor to choose the most effective drug. Together, culture and sensitivity (C&S) gives a precise, treatment-guiding result." },
      { h: "Nursing relevance", p: "Collecting the right specimen, the right way, before antibiotics, correctly labelled and promptly delivered — while protecting the patient's dignity and everyone's safety — directly determines whether the laboratory can identify the microbe and guide effective, targeted treatment." }
    ],
    references: REF_MICRO,
    examQuestions: [
      "State the principles of correct microbiological specimen collection.",
      "List the types of microbiological specimen with an example of when each is used.",
      "What is the role of microscopy in identifying microbes?",
      "Describe culture and the use of culture media.",
      "What is antibiotic sensitivity testing and why is it important?"
    ],
    assessment: [
      { type: "mcq", q: "Specimens for culture should ideally be collected:", options: ["After several antibiotic doses", "Before antibiotics are started", "Only at discharge", "After recovery"], answer: 1, rationale: "Collecting before antibiotics lets the organism grow for accurate identification." },
      { type: "mcq", q: "To diagnose tuberculosis, the usual specimen is:", options: ["Urine", "Sputum (for AFB)", "Stool", "Blood only"], answer: 1, rationale: "Sputum is examined for acid-fast bacilli to diagnose TB." },
      { type: "mcq", q: "Growing a microbe on a nutrient medium to identify it is called:", options: ["Microscopy", "Culture", "Staining", "Filtration"], answer: 1, rationale: "Culture grows the organism into colonies for identification." },
      { type: "mcq", q: "A quick provisional result before culture is obtained by:", options: ["Microscopy (with staining)", "Sensitivity testing", "Waiting 48 hours", "Blood pressure"], answer: 0, rationale: "Microscopy of a stained smear gives a rapid provisional finding." },
      { type: "mcq", q: "A clean midstream sample is collected for culture of:", options: ["Sputum", "Urine", "Stool", "Blood"], answer: 1, rationale: "A midstream urine (MSU) reduces contamination for urine culture." },
      { type: "mcq", q: "The test showing which antibiotic will work against an organism is:", options: ["Gram stain", "Sensitivity testing", "Pasteurisation", "Serology only"], answer: 1, rationale: "Antibiotic sensitivity testing reports the organism as sensitive or resistant." },
      { type: "mcq", q: "All microbiological specimens should be treated as:", options: ["Harmless", "Potentially infectious", "Food", "Reusable"], answer: 1, rationale: "Standard precautions — handle all specimens as infectious." },
      { type: "mcq", q: "Suspected meningitis is investigated by examining:", options: ["Sputum", "Cerebrospinal fluid (CSF)", "Urine only", "Stool"], answer: 1, rationale: "CSF is examined (microscopy, culture) for suspected meningitis." },
      { type: "mcq", q: "A correctly handled specimen must be:", options: ["Unlabelled and delayed", "Correctly labelled and sent promptly", "Left open to air", "Mixed with another"], answer: 1, rationale: "Correct labelling and prompt transport preserve validity and safety." },
      { type: "mcq", q: "Culture results often take longer than microscopy because:", options: ["The lab is slow", "Microbes need time to grow into colonies", "Staining is hard", "Specimens are small"], answer: 1, rationale: "Organisms must multiply on media (often 24-48 h+) before identification." },
      { type: "fill", q: "Growing microbes on a nutrient medium to identify them is called ______.", accept: ["culture"], rationale: "Culture grows the organism for identification and sensitivity testing." },
      { type: "fill", q: "Sputum is examined for acid-fast bacilli to diagnose ______.", accept: ["tuberculosis", "tb"], rationale: "AFB on sputum microscopy indicates tuberculosis." }
    ]
  }
];
