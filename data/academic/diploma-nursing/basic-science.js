/* ============================================================
   Diploma in Nursing · D112 Basic Science — 17 topics.
   Applied physics, chemistry and introductory biochemistry for
   nursing. Topics 1-5 authored; 6-17 are structured placeholders.
   Content original, grounded in standard texts:
     • Cree L, Rischmiller S. Science in Nursing and Health Care. Pearson.
     • Davidovits P. Physics in Biology and Medicine. Academic Press.
     • Chang R, Goldsby K. Chemistry. McGraw-Hill.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_BS = [
  "Cree L, Rischmiller S. Science in Nursing and Health Care. Pearson.",
  "Davidovits P. Physics in Biology and Medicine. Academic Press.",
  "Chang R, Goldsby K. Chemistry. 13th ed. McGraw-Hill."
];

window.Academic.topics["diploma-nursing/basic-science"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "bs-01-measurement",
    unit: "Unit 1 · Foundations of Science",
    title: "Introduction to Basic Science & Measurement",
    readMinutes: 18,
    summary: "Why nurses study science, physical quantities and SI units, the units and conversions used in nursing, measuring instruments, and accuracy in measurement.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why nurses study basic science", p: "Basic science gives the physical and chemical principles behind everyday nursing — why an IV bag is hung high, why a needle is sharp, how a thermometer works, how drug doses are calculated, and how disinfectants act. Sound scientific understanding makes nursing care safe, accurate and evidence-based." },
      { h: "Physical quantities and units", p: "A physical quantity is anything that can be measured; it always has a number and a unit (e.g. 70 kg). The internationally agreed system is the SI (Système International). Without an agreed unit a measurement is meaningless — and in nursing a missing or wrong unit can be dangerous." },
      { h: "SI base units", list: [
        "Length — metre (m).",
        "Mass — kilogram (kg).",
        "Time — second (s).",
        "Temperature — kelvin (K); in practice the Celsius scale (°C) is used clinically.",
        "Amount of substance — mole (mol)."
      ] },
      { h: "Derived and clinical units", p: "Other units are derived from the base units: volume in litres (L) or millilitres (mL), force in newtons (N), pressure in pascals (Pa) or millimetres of mercury (mmHg), and energy in joules (J) or calories. Nurses constantly use these for fluids, weights and pressures." },
      { h: "Prefixes and conversions", p: "Decimal prefixes scale a unit up or down in steps of 1000, which is why dosage errors are so often 1000-fold. The key ones for nursing are kilo- (1000), milli- (one-thousandth) and micro- (one-millionth).", figure: {
        caption: "Figure 1.1 — Common unit steps used in nursing (each step is x1000).",
        svg: "<svg viewBox='0 0 560 90' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Unit prefixes'>" +
          "<defs><marker id='bsp1' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          [["kilogram (kg)","x1000"],["gram (g)","x1000"],["milligram (mg)","x1000"],["microgram (mcg)",""]].map(function(p,i){var x=8+i*138;return "<rect x='"+x+"' y='26' width='124' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+62)+"' y='51' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>"+p[0]+"</text>"+(i<3?"<line x1='"+(x+124)+"' y1='46' x2='"+(x+138)+"' y2='46' stroke='#2E63B8' stroke-width='2' marker-end='url(#bsp1)'/><text x='"+(x+131)+"' y='20' text-anchor='middle' font-family='Inter' font-size='9' fill='#A47B36'>x1000</text>":"");}).join("") +
          "</svg>"
      } },
      { h: "Key conversions for nursing", list: [
        "1 kilogram (kg) = 1000 grams (g).",
        "1 gram (g) = 1000 milligrams (mg).",
        "1 milligram (mg) = 1000 micrograms (mcg/µg).",
        "1 litre (L) = 1000 millilitres (mL).",
        "Temperature: degrees Celsius is used for body temperature (normal ~36.5-37.5 °C)."
      ] },
      { h: "Measuring instruments in nursing", p: "Nurses use many measuring tools: a weighing scale (mass), a clinical thermometer (temperature), a sphygmomanometer (blood pressure), a measuring cylinder or calibrated jug (fluid volume and urine output), and graduated syringes (small, accurate drug volumes). Each must be read correctly and, where needed, calibrated." },
      { h: "Accuracy, precision and safe practice", p: "Accuracy means how close a measurement is to the true value; precision means how consistent repeated measurements are. In nursing, always read scales at eye level, use the correct unit, double-check high-risk drug calculations, and never guess. A small measuring error in a dose or a fluid balance can cause serious harm." }
    ],
    references: REF_BS,
    examQuestions: [
      "Why is the study of basic science important for nurses? Give three examples.",
      "List the SI base units and the quantity each measures.",
      "State the common unit conversions used in nursing (mass and volume).",
      "Name five measuring instruments used in nursing and what each measures.",
      "Differentiate accuracy and precision and explain their importance in drug dosing."
    ],
    assessment: [
      { type: "mcq", q: "The SI base unit of mass is the:", options: ["Gram", "Kilogram", "Newton", "Litre"], answer: 1, rationale: "The kilogram (kg) is the SI base unit of mass; the gram is a smaller derived unit." },
      { type: "mcq", q: "1 gram is equal to:", options: ["100 mg", "1000 mg", "10 mg", "1 000 000 mg"], answer: 1, rationale: "1 g = 1000 mg; each prefix step (g→mg) is a factor of 1000." },
      { type: "mcq", q: "1 milligram (mg) equals how many micrograms (mcg)?", options: ["10", "100", "1000", "1"], answer: 2, rationale: "1 mg = 1000 mcg; confusing mg and mcg causes 1000-fold dosing errors." },
      { type: "mcq", q: "1 litre is equal to:", options: ["10 mL", "100 mL", "1000 mL", "10 000 mL"], answer: 2, rationale: "1 L = 1000 mL." },
      { type: "mcq", q: "The clinical unit used to measure blood pressure is:", options: ["Pascal", "Millimetres of mercury (mmHg)", "Newton", "Kelvin"], answer: 1, rationale: "Blood pressure is measured in mmHg using a sphygmomanometer." },
      { type: "mcq", q: "Which instrument measures blood pressure?", options: ["Thermometer", "Sphygmomanometer", "Measuring cylinder", "Weighing scale"], answer: 1, rationale: "The sphygmomanometer (with a cuff) measures blood pressure." },
      { type: "mcq", q: "The SI base unit of amount of substance is the:", options: ["Litre", "Mole", "Gram", "Kelvin"], answer: 1, rationale: "The mole (mol) is the SI unit for amount of substance." },
      { type: "mcq", q: "'How close a measurement is to the true value' defines:", options: ["Precision", "Accuracy", "Estimation", "Calibration"], answer: 1, rationale: "Accuracy is closeness to the true value; precision is consistency of repeats." },
      { type: "mcq", q: "A drug dose written in micrograms is most safely measured with a:", options: ["Measuring jug", "Graduated syringe", "Weighing scale", "Cup"], answer: 1, rationale: "Small accurate volumes are drawn up in a graduated syringe." },
      { type: "mcq", q: "Most decimal unit prefixes used in nursing change the unit in steps of:", options: ["10", "100", "1000", "5"], answer: 2, rationale: "kilo/milli/micro steps are each factors of 1000." },
      { type: "fill", q: "The internationally agreed system of units is abbreviated ______.", accept: ["si", "s.i."], rationale: "SI (Système International) is the agreed system of measurement units." },
      { type: "fill", q: "1 kilogram = ______ grams.", accept: ["1000", "1,000"], rationale: "1 kg = 1000 g." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "bs-02-matter",
    unit: "Unit 1 · Foundations of Science",
    title: "Matter and Its States",
    readMinutes: 18,
    summary: "Matter, mass and volume, atoms and molecules, the states of matter and changes of state, density and specific gravity, and diffusion — with nursing relevance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is matter?", p: "Matter is anything that has mass and occupies space (volume). Everything in and around the body — air, water, drugs, tissues — is matter. Mass is the amount of matter in an object (kg); volume is the space it occupies (L or mL)." },
      { h: "Particles of matter", p: "All matter is made of tiny particles. An atom is the smallest particle of an element; atoms join to form molecules (e.g. two hydrogen and one oxygen atom form a water molecule, H₂O). These particles are always in motion, and how strongly they are held together decides the state of the matter." },
      { h: "The states of matter", p: "Matter normally exists in three states, distinguished by how its particles are arranged and how much they move.", figure: {
        caption: "Figure 2.1 — Particle arrangement in solids, liquids and gases.",
        svg: "<svg viewBox='0 0 480 150' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='States of matter'>" +
          [["Solid",10],["Liquid",170],["Gas",330]].map(function(p,i){var bx=p[1];var label=p[0];var dots="";for(var r=0;r<4;r++)for(var c=0;c<4;c++){var jitter=i*6;var dx=(i>0?(r*c%5)*4*i:0);var dy=(i>0?(c%3)*5*i:0);var cx=bx+22+c*26+ (i===2?(r*7+c*3):0); var cy=24+r*26+ (i===2?(c*5):0); if(i===1){cx=bx+20+c*26+(r%2)*6; cy=24+r*24;} dots+="<circle cx='"+cx+"' cy='"+cy+"' r='6' fill='#2E63B8'/>";}return "<rect x='"+bx+"' y='12' width='130' height='112' rx='8' fill='#EDF2F4' stroke='#6B7785'/>"+dots+"<text x='"+(bx+65)+"' y='140' text-anchor='middle' font-family='Inter' font-size='13' font-weight='700' fill='#14387A'>"+label+"</text>";}).join("") +
          "</svg>"
      } },
      { h: "Properties of the three states", list: [
        "Solid — particles packed closely in a fixed pattern; definite shape and volume (e.g. bone, ice, tablets).",
        "Liquid — particles close but able to move past each other; definite volume but takes the shape of its container (e.g. water, blood, plasma).",
        "Gas — particles far apart and moving freely; no fixed shape or volume, and easily compressed (e.g. oxygen, carbon dioxide).",
        "(Plasma — a high-energy ionised gas — is sometimes called the fourth state, used in some sterilisers.)"
      ] },
      { h: "Changes of state", p: "Adding or removing heat changes the state of matter. Melting (solid→liquid) and freezing (liquid→solid) occur at the melting point; evaporation/boiling (liquid→gas) and condensation (gas→liquid) at the boiling point. Sublimation is the direct change of a solid to a gas (e.g. naphthalene, dry ice). The energy absorbed or released during a change of state, without a change in temperature, is called latent heat." },
      { h: "Density and specific gravity", p: "Density is mass per unit volume (density = mass ÷ volume). An object floats if it is less dense than the fluid around it. Relative density (specific gravity) compares a substance's density with that of water. Nurses use this idea when measuring the specific gravity of urine (normally about 1.005-1.030), which reflects how concentrated the urine is and the patient's hydration." },
      { h: "Diffusion", p: "Particles in liquids and gases spread from where they are more concentrated to where they are less concentrated until evenly mixed — this is diffusion. It explains how oxygen and carbon dioxide are exchanged in the lungs, how a drug spreads through a tissue, and how a smell fills a room." },
      { h: "Nursing relevance", p: "Understanding states of matter underlies many tasks: gases (oxygen) are stored compressed in cylinders; liquids are given as drinks and IV fluids; solids are given as tablets that must dissolve to act. Evaporation of sweat (a change of state needing latent heat) cools the body, and urine specific gravity guides fluid management." }
    ],
    references: REF_BS,
    examQuestions: [
      "Define matter, mass and volume.",
      "Describe the particle arrangement and properties of solids, liquids and gases.",
      "Name and define the changes of state, including sublimation and latent heat.",
      "Define density and specific gravity and give a nursing example of specific gravity.",
      "What is diffusion? Give two examples relevant to the body."
    ],
    assessment: [
      { type: "mcq", q: "Matter is best defined as anything that has:", options: ["Colour and taste", "Mass and occupies space", "Energy only", "A fixed shape"], answer: 1, rationale: "Matter has mass and occupies space (volume)." },
      { type: "mcq", q: "In which state are particles far apart and the substance easily compressed?", options: ["Solid", "Liquid", "Gas", "Crystal"], answer: 2, rationale: "Gas particles are widely spaced and freely moving, so gases are compressible." },
      { type: "mcq", q: "The change of a solid directly into a gas without becoming a liquid is called:", options: ["Evaporation", "Condensation", "Sublimation", "Melting"], answer: 2, rationale: "Sublimation is the direct solid-to-gas change (e.g. dry ice, naphthalene)." },
      { type: "mcq", q: "Density is calculated as:", options: ["Mass x volume", "Mass ÷ volume", "Volume ÷ mass", "Mass + volume"], answer: 1, rationale: "Density = mass ÷ volume." },
      { type: "mcq", q: "The normal specific gravity of urine is approximately:", options: ["0.5-0.9", "1.005-1.030", "2.0-3.0", "5-10"], answer: 1, rationale: "Normal urine specific gravity is about 1.005-1.030, reflecting concentration/hydration." },
      { type: "mcq", q: "The change of state from liquid to solid is called:", options: ["Melting", "Freezing", "Boiling", "Condensation"], answer: 1, rationale: "Freezing is liquid→solid; melting is the reverse." },
      { type: "mcq", q: "The spreading of particles from high to low concentration is:", options: ["Osmosis", "Diffusion", "Filtration", "Sublimation"], answer: 1, rationale: "Diffusion is movement of particles down a concentration gradient." },
      { type: "mcq", q: "Heat absorbed or released during a change of state without a temperature change is:", options: ["Specific heat", "Latent heat", "Radiant heat", "Conduction"], answer: 1, rationale: "Latent heat accompanies a change of state at constant temperature." },
      { type: "mcq", q: "Which is a property of a liquid?", options: ["Fixed shape and volume", "No fixed shape but a definite volume", "No fixed shape or volume", "Cannot flow"], answer: 1, rationale: "A liquid has a definite volume but takes the shape of its container." },
      { type: "mcq", q: "An object will float in water if its density is:", options: ["Greater than water", "Less than water", "Equal to water", "Zero"], answer: 1, rationale: "An object less dense than the fluid floats." },
      { type: "fill", q: "Mass per unit volume is called ______.", accept: ["density"], rationale: "Density = mass ÷ volume." },
      { type: "fill", q: "Evaporation of sweat cools the body because it absorbs ______ heat.", accept: ["latent"], rationale: "Evaporation absorbs latent heat, removing heat from the skin." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "bs-03-force-motion",
    unit: "Unit 2 · Applied Physics in Nursing",
    title: "Force, Motion & Body Mechanics",
    readMinutes: 19,
    summary: "Force, mass and weight, friction, levers and simple machines, the body as a system of levers, and the principles of body mechanics for safe lifting.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Force, mass and weight", p: "A force is a push or a pull that can change an object's shape, speed or direction; it is measured in newtons (N). Mass (kg) is the amount of matter in a body and is the same everywhere. Weight is the force of gravity acting on that mass (weight = mass x gravity), so weight changes with gravity but mass does not. On Earth, gravity gives an acceleration of about 9.8 m/s²." },
      { h: "Motion and Newton's laws (applied)", p: "Isaac Newton's laws describe motion: an object stays still or moving steadily unless a force acts on it (inertia); a force produces acceleration (F = mass x acceleration); and every action has an equal and opposite reaction. These explain why a moving trolley needs a force to stop, and why pushing a wall pushes back on you." },
      { h: "Friction", p: "Friction is the force that opposes movement between two surfaces in contact. It can be useful (grip of shoes and crutch tips, brakes on a wheelchair or bed) or harmful (it can graze skin). A related force, shear, drags skin in one direction while deeper tissue stays put and contributes to pressure injuries; this is why patients are lifted, not dragged." },
      { h: "Simple machines and levers", p: "A lever is a rigid bar that turns about a fixed point (the fulcrum) and lets a small effort move a larger load, or move a load further/faster. Levers are classed by the relative positions of the fulcrum, load and effort.", figure: {
        caption: "Figure 3.1 — A lever: effort and load balanced about a fulcrum.",
        svg: "<svg viewBox='0 0 420 130' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Lever'>" +
          "<rect x='40' y='60' width='340' height='10' rx='3' fill='#C99A50'/>" +
          "<polygon points='210,72 195,104 225,104' fill='#14387A'/><text x='210' y='120' text-anchor='middle' font-family='Inter' font-size='11' fill='#14387A'>fulcrum</text>" +
          "<rect x='52' y='34' width='34' height='26' fill='#2E63B8'/><text x='69' y='26' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#2E63B8'>load</text>" +
          "<line x1='350' y1='60' x2='350' y2='30' stroke='#B85C5C' stroke-width='3'/><polygon points='350,26 344,38 356,38' fill='#B85C5C'/><text x='350' y='120' text-anchor='middle' font-family='Inter' font-size='11' fill='#B85C5C'>effort</text>" +
          "</svg>"
      } },
      { h: "Classes of lever and the body", list: [
        "First-class — fulcrum in the middle (e.g. a see-saw; the head nodding on the neck).",
        "Second-class — load in the middle (e.g. a wheelbarrow; standing on tiptoe).",
        "Third-class — effort in the middle (e.g. forearm lifting a weight at the elbow — the most common type in the body)."
      ] },
      { h: "Centre of gravity, base of support and stability", p: "The centre of gravity is the point where an object's weight acts; in a standing adult it lies roughly in the pelvis. A body is more stable when its centre of gravity is low and lies over a wide base of support. This is why, when lifting, a nurse stands with feet apart (wide base), bends the knees and keeps the load close (low, central centre of gravity)." },
      { h: "Body mechanics for safe lifting", list: [
        "Assess the load and ask for help or use equipment (hoist) for heavy patients.",
        "Stand with feet apart for a wide, stable base.",
        "Bend the hips and knees, not the back; keep the natural curve of the spine.",
        "Hold the load close to your body.",
        "Use the strong leg muscles to lift, and avoid twisting — turn the feet instead."
      ] },
      { h: "Nursing relevance", p: "Applying these principles prevents back injury — one of the commonest occupational injuries in nursing — and keeps patients safe during moving and handling. Equipment such as hoists, slide sheets and adjustable beds reduces the force the nurse must exert." }
    ],
    references: REF_BS,
    examQuestions: [
      "Differentiate mass and weight.",
      "What is friction? Give one useful and one harmful example in nursing.",
      "Define a lever and describe the three classes with a body example of each.",
      "Explain how centre of gravity and base of support affect stability.",
      "List the principles of correct body mechanics for lifting."
    ],
    assessment: [
      { type: "mcq", q: "The SI unit of force is the:", options: ["Joule", "Newton", "Pascal", "Watt"], answer: 1, rationale: "Force is measured in newtons (N)." },
      { type: "mcq", q: "Weight differs from mass because weight:", options: ["Is measured in kg", "Is the force of gravity on mass", "Never changes", "Has no units"], answer: 1, rationale: "Weight = mass x gravity, so it varies with gravity; mass is constant." },
      { type: "mcq", q: "The force opposing movement between two surfaces in contact is:", options: ["Gravity", "Friction", "Tension", "Pressure"], answer: 1, rationale: "Friction opposes relative motion between contacting surfaces." },
      { type: "mcq", q: "The fixed point about which a lever turns is the:", options: ["Load", "Effort", "Fulcrum", "Beam"], answer: 2, rationale: "A lever pivots about its fulcrum." },
      { type: "mcq", q: "The forearm lifting a weight at the elbow is an example of a ______ lever.", options: ["First-class", "Second-class", "Third-class", "Fixed"], answer: 2, rationale: "In the forearm the effort (muscle) lies between the fulcrum (elbow) and load — a third-class lever." },
      { type: "mcq", q: "A body is most stable when its centre of gravity is:", options: ["High and over a narrow base", "Low and over a wide base", "High and over a wide base", "Outside the base"], answer: 1, rationale: "A low centre of gravity over a wide base gives maximum stability." },
      { type: "mcq", q: "When lifting a load, a nurse should bend the:", options: ["Back", "Knees and hips", "Neck", "Wrists"], answer: 1, rationale: "Bending the knees and hips (not the back) protects the spine." },
      { type: "mcq", q: "Dragging rather than lifting a patient increases the risk of pressure injury because of:", options: ["Gravity", "Shear and friction", "Inertia", "Evaporation"], answer: 1, rationale: "Shear and friction damage skin and deeper tissue, promoting pressure injury." },
      { type: "mcq", q: "Newton's law that states 'every action has an equal and opposite reaction' is the:", options: ["First law", "Second law", "Third law", "Law of gravity"], answer: 2, rationale: "The third law describes equal and opposite action-reaction forces." },
      { type: "mcq", q: "To keep a load's effect small on the back, the load should be held:", options: ["Far from the body", "Close to the body", "Above the head", "At arm's length"], answer: 1, rationale: "Holding the load close reduces the turning force (and strain) on the spine." },
      { type: "fill", q: "Weight equals mass multiplied by ______.", accept: ["gravity", "g", "acceleration due to gravity"], rationale: "Weight = mass x gravitational acceleration (g ≈ 9.8 m/s²)." },
      { type: "fill", q: "A rigid bar that turns about a fulcrum is called a ______.", accept: ["lever"], rationale: "A lever pivots about a fulcrum to move a load." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "bs-04-pressure",
    unit: "Unit 2 · Applied Physics in Nursing",
    title: "Pressure in Nursing Practice",
    readMinutes: 19,
    summary: "Pressure and its units, atmospheric and hydrostatic pressure, blood-pressure measurement, gas pressure (Boyle's law), and the many uses of pressure in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is pressure?", p: "Pressure is the force acting on a unit area (pressure = force ÷ area). For the same force, a smaller area gives a greater pressure — which is why a sharp needle (tiny area) pierces skin easily, while a wide strap or a pressure-relieving mattress (large area) lowers the pressure on the skin and helps prevent pressure injuries. The SI unit is the pascal (Pa); clinically we also use mmHg and cmH₂O.", figure: {
        caption: "Figure 4.1 — Same force over a small vs large area gives high vs low pressure.",
        svg: "<svg viewBox='0 0 420 140' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Pressure and area'>" +
          "<text x='105' y='18' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#B85C5C'>small area = high pressure</text>" +
          "<rect x='80' y='26' width='50' height='30' fill='#E6ECF8' stroke='#2E63B8'/><polygon points='105,56 96,86 114,86' fill='#B85C5C'/><line x1='105' y1='86' x2='105' y2='104' stroke='#B85C5C' stroke-width='3'/>" +
          "<text x='315' y='18' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#16A34A'>large area = low pressure</text>" +
          "<rect x='270' y='26' width='90' height='30' fill='#E6ECF8' stroke='#2E63B8'/><rect x='285' y='56' width='60' height='48' fill='#16A34A' opacity='0.4'/>" +
          "<line x1='250' y1='118' x2='370' y2='118' stroke='#6B7785'/><line x1='80' y1='118' x2='200' y2='118' stroke='#6B7785'/>" +
          "</svg>"
      } },
      { h: "Atmospheric pressure", p: "The atmosphere presses on everything with a pressure of about 760 mmHg at sea level. We do not feel it because the pressure inside the body balances it. Atmospheric pressure falls at high altitude, which lowers the amount of oxygen available — relevant to breathing and to oxygen therapy." },
      { h: "Hydrostatic (fluid) pressure", p: "A column of liquid exerts pressure that increases with its height (depth) — this is hydrostatic pressure. It is why an intravenous (IV) fluid bag is hung well above the patient: the higher the bag, the greater the pressure and the faster the fluid flows in. The same principle is used in a manometer to measure pressure and in water-seal chest drains." },
      { h: "Blood pressure", p: "Blood pressure is the pressure the blood exerts on the artery walls, measured in mmHg with a sphygmomanometer (and stethoscope or an automated device). It is recorded as systolic over diastolic (e.g. 120/80 mmHg). Because it is a pressure, the height of the arm relative to the heart and correct cuff size affect the reading." },
      { h: "Gas pressure and Boyle's law", p: "For a fixed amount of gas at constant temperature, pressure and volume are inversely related (Boyle's law: if volume decreases, pressure increases). This explains breathing — enlarging the chest lowers the pressure inside so air flows in — and the action of a syringe, where pulling the plunger increases the volume and lowers the pressure to draw fluid up." },
      { h: "Uses of pressure in nursing", list: [
        "Suction — negative (below-atmospheric) pressure removes secretions or drains fluid.",
        "Oxygen and other medical gases are stored under high pressure in cylinders; a regulator reduces it for safe delivery.",
        "Sphygmomanometer cuff and tourniquet apply external pressure.",
        "Pressure-relieving mattresses and repositioning spread pressure over a larger area to protect the skin.",
        "Chest drains and wound drains use pressure differences to remove air or fluid."
      ] },
      { h: "Nursing relevance", p: "Pressure principles run through daily care: hanging IV fluids at the right height, applying and reading a BP cuff correctly, using suction safely, handling pressurised oxygen cylinders, and relieving pressure to prevent bed sores. Misjudging pressure can slow an infusion, give a false BP, or harm the skin." }
    ],
    references: REF_BS,
    examQuestions: [
      "Define pressure and state how area affects it, with a nursing example.",
      "What is atmospheric pressure and how does altitude affect it?",
      "Explain hydrostatic pressure and why an IV bag is hung high.",
      "State Boyle's law and relate it to breathing and to using a syringe.",
      "List five uses of pressure in nursing practice."
    ],
    assessment: [
      { type: "mcq", q: "Pressure is defined as:", options: ["Force x area", "Force ÷ area", "Area ÷ force", "Mass x area"], answer: 1, rationale: "Pressure = force ÷ area; a smaller area gives higher pressure." },
      { type: "mcq", q: "A sharp needle pierces skin easily because its small tip produces:", options: ["Low pressure", "High pressure", "No pressure", "Negative pressure"], answer: 1, rationale: "A small contact area concentrates the force into a high pressure." },
      { type: "mcq", q: "Atmospheric pressure at sea level is about:", options: ["120 mmHg", "760 mmHg", "37 mmHg", "1000 mmHg"], answer: 1, rationale: "Atmospheric pressure at sea level is approximately 760 mmHg (101 kPa)." },
      { type: "mcq", q: "An IV fluid bag is hung high above the patient to:", options: ["Cool the fluid", "Increase hydrostatic pressure and flow", "Reduce the dose", "Prevent infection"], answer: 1, rationale: "Greater height increases hydrostatic pressure, speeding the infusion." },
      { type: "mcq", q: "Blood pressure is measured in:", options: ["Pascals", "mmHg", "Newtons", "Litres"], answer: 1, rationale: "Clinically blood pressure is recorded in millimetres of mercury (mmHg)." },
      { type: "mcq", q: "Boyle's law states that, at constant temperature, gas pressure and volume are:", options: ["Directly proportional", "Inversely proportional", "Unrelated", "Always equal"], answer: 1, rationale: "Boyle's law: pressure and volume are inversely related at constant temperature." },
      { type: "mcq", q: "Removing secretions with a suction machine uses:", options: ["High positive pressure", "Negative (below-atmospheric) pressure", "Hydrostatic pressure", "Atmospheric pressure"], answer: 1, rationale: "Suction creates negative pressure to draw secretions or fluid out." },
      { type: "mcq", q: "A pressure-relieving mattress protects skin by:", options: ["Increasing pressure on a small area", "Spreading pressure over a larger area", "Removing all pressure", "Raising temperature"], answer: 1, rationale: "Spreading the load over a larger area lowers the pressure on any one point." },
      { type: "mcq", q: "Pulling back a syringe plunger draws fluid in because it:", options: ["Increases pressure inside", "Increases volume and lowers pressure inside", "Heats the fluid", "Adds force to the fluid"], answer: 1, rationale: "Increasing the syringe volume lowers internal pressure, so fluid is pushed in by atmospheric pressure (Boyle's law)." },
      { type: "mcq", q: "Medical oxygen is stored in cylinders under:", options: ["Low pressure", "High pressure", "No pressure", "Negative pressure"], answer: 1, rationale: "Oxygen is stored compressed at high pressure; a regulator reduces it for delivery." },
      { type: "fill", q: "The SI unit of pressure is the ______.", accept: ["pascal", "pa"], rationale: "Pressure is measured in pascals (Pa) in SI units." },
      { type: "fill", q: "Pressure due to the height of a fluid column is called ______ pressure.", accept: ["hydrostatic"], rationale: "Hydrostatic pressure increases with the height/depth of the fluid." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "bs-05-heat-temperature",
    unit: "Unit 2 · Applied Physics in Nursing",
    title: "Heat and Temperature",
    readMinutes: 19,
    summary: "Heat vs temperature, temperature scales and conversion, methods of heat transfer, latent and specific heat, expansion, and heat in body-temperature regulation and sterilisation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Heat and temperature are different", p: "Heat is a form of energy that flows from a hotter to a cooler object; it is measured in joules (J). Temperature is a measure of how hot or cold something is — the average energy of its particles — measured in degrees. A bath of warm water holds more heat energy than a spark, even though the spark is at a higher temperature." },
      { h: "Temperature scales", p: "Three scales are used. The Celsius scale (°C) sets water's freezing point at 0 °C and boiling at 100 °C and is used clinically. The Kelvin scale (K) is the SI scale, starting at absolute zero (0 K = -273 °C). The Fahrenheit scale (°F) is still used in some places.", figure: {
        caption: "Figure 5.1 — Celsius, Kelvin and Fahrenheit at key points.",
        svg: "<svg viewBox='0 0 460 130' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Temperature scales'>" +
          "<text x='40' y='24' font-family='Inter' font-size='11' font-weight='700' fill='#6B7785'>Point</text><text x='200' y='24' font-family='Inter' font-size='11' font-weight='700' fill='#B85C5C'>°C</text><text x='290' y='24' font-family='Inter' font-size='11' font-weight='700' fill='#14387A'>K</text><text x='380' y='24' font-family='Inter' font-size='11' font-weight='700' fill='#A47B36'>°F</text>" +
          [["Water freezes","0","273","32"],["Body temp","37","310","98.6"],["Water boils","100","373","212"]].map(function(r,i){var y=50+i*26;return "<text x='40' y='"+y+"' font-family='Inter' font-size='11' fill='#1F2A33'>"+r[0]+"</text><text x='200' y='"+y+"' font-family='Inter' font-size='11' fill='#B85C5C'>"+r[1]+"</text><text x='290' y='"+y+"' font-family='Inter' font-size='11' fill='#14387A'>"+r[2]+"</text><text x='380' y='"+y+"' font-family='Inter' font-size='11' fill='#A47B36'>"+r[3]+"</text>";}).join("") +
          "</svg>"
      } },
      { h: "Converting temperatures", p: "Celsius and Fahrenheit convert with the formulae: °F = (9/5 x °C) + 32, and °C = 5/9 x (°F - 32). Kelvin converts simply: K = °C + 273. For example, normal body temperature 37 °C = 98.6 °F = 310 K. Nurses meet both °C and °F on thermometers and in records." },
      { h: "Methods of heat transfer", list: [
        "Conduction — heat passes through direct contact (a warm pack on the skin; heat lost to a cold bed).",
        "Convection — heat carried by moving fluid or air (a fan or draught cooling a patient).",
        "Radiation — heat given off as infrared rays without contact (body heat lost to cool surroundings).",
        "Evaporation — heat lost as a liquid turns to vapour (sweating; tepid sponging to bring down a fever)."
      ] },
      { h: "Specific heat and latent heat", p: "Specific heat capacity is the heat needed to raise the temperature of 1 kg of a substance by 1 °C; water has a high specific heat, so it warms and cools slowly and helps stabilise body temperature. Latent heat is the heat absorbed or released during a change of state with no temperature change — the latent heat taken up when sweat evaporates is what cools the body." },
      { h: "Expansion and contraction", p: "Most substances expand when heated and contract when cooled because their particles move more and take up more space. This is the principle of the traditional mercury or alcohol clinical thermometer, in which the liquid rises up a fine tube as it warms. Gases expand most for a given temperature rise." },
      { h: "Heat in body temperature and sterilisation", p: "The body holds its core temperature near 37 °C by balancing heat gain and loss through the four transfer methods; nurses use this when warming a hypothermic patient or cooling a feverish one. Heat is also a key way to kill microbes: an autoclave uses moist heat (pressurised steam, ~121 °C) and a hot-air oven uses dry heat to sterilise equipment, while boiling and pasteurisation reduce microbial load." },
      { h: "Nursing relevance", p: "Heat knowledge guides accurate temperature measurement and conversion, fever and hypothermia management (e.g. tepid sponging uses evaporation), safe use of hot and cold therapy (avoiding burns), and correct sterilisation of instruments." }
    ],
    references: REF_BS,
    examQuestions: [
      "Differentiate heat and temperature.",
      "Name the three temperature scales and convert 37 °C to °F and to K.",
      "Describe the four methods of heat transfer with a nursing example of each.",
      "Differentiate specific heat and latent heat.",
      "Explain how heat is used to sterilise equipment."
    ],
    assessment: [
      { type: "mcq", q: "Heat is a form of energy, whereas temperature measures:", options: ["Total energy in an object", "How hot or cold something is", "Mass of particles", "Pressure of a gas"], answer: 1, rationale: "Temperature reflects the average particle energy (hotness); heat is energy in transfer." },
      { type: "mcq", q: "Normal body temperature 37 °C is equal to:", options: ["96.8 °F", "98.6 °F", "100 °F", "94 °F"], answer: 1, rationale: "37 °C = (9/5 x 37) + 32 = 98.6 °F." },
      { type: "mcq", q: "To convert Celsius to Kelvin you:", options: ["Multiply by 9/5", "Add 273", "Subtract 32", "Divide by 5/9"], answer: 1, rationale: "K = °C + 273 (e.g. 37 °C = 310 K)." },
      { type: "mcq", q: "Heat transfer by direct contact is called:", options: ["Convection", "Conduction", "Radiation", "Evaporation"], answer: 1, rationale: "Conduction transfers heat through direct contact between objects." },
      { type: "mcq", q: "Tepid sponging lowers a fever mainly by:", options: ["Conduction", "Radiation", "Evaporation", "Compression"], answer: 2, rationale: "Water evaporating from the skin absorbs latent heat, cooling the body." },
      { type: "mcq", q: "An autoclave sterilises equipment using:", options: ["Dry heat", "Moist heat (pressurised steam)", "Cold", "Ultraviolet light"], answer: 1, rationale: "An autoclave uses pressurised moist heat (steam ~121 °C); a hot-air oven uses dry heat." },
      { type: "mcq", q: "Substances generally ______ when heated.", options: ["Contract", "Expand", "Freeze", "Lose mass"], answer: 1, rationale: "Heating makes particles move more and take up more space, so substances expand." },
      { type: "mcq", q: "Body heat lost to cool surroundings without contact, as infrared, is:", options: ["Conduction", "Convection", "Radiation", "Evaporation"], answer: 2, rationale: "Radiation emits heat as infrared rays without physical contact." },
      { type: "mcq", q: "Water helps stabilise body temperature because it has a:", options: ["Low specific heat", "High specific heat", "Low boiling point", "Negative latent heat"], answer: 1, rationale: "Water's high specific heat means it warms and cools slowly, buffering temperature." },
      { type: "mcq", q: "The SI unit of heat energy is the:", options: ["Degree", "Joule", "Kelvin", "Pascal"], answer: 1, rationale: "Heat, as energy, is measured in joules (J)." },
      { type: "fill", q: "Heat carried by a moving fluid or air current is transfer by ______.", accept: ["convection"], rationale: "Convection carries heat in moving fluids or gases." },
      { type: "fill", q: "To convert °C to °F, multiply by 9/5 and add ______.", accept: ["32"], rationale: "°F = (9/5 x °C) + 32." }
    ]
  },

  /* ---------- Placeholders: structured, ready to author ---------- */
  {
    id: "bs-06-light",
    unit: "Unit 2 · Applied Physics in Nursing",
    title: "Light and Optics",
    readMinutes: 18,
    summary: "The nature of light, reflection and refraction, convex and concave lenses, correction of vision, the microscope, fibre-optics and endoscopy, and clinical uses of light.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The nature of light", p: "Light is a form of energy that travels in straight lines at very high speed (about 300,000 km/s) and, unlike sound, can travel through a vacuum. It is part of the electromagnetic spectrum. Because it travels in straight lines, light casts shadows and can be focused and directed — properties used in many medical instruments." },
      { h: "Reflection and refraction", p: "Reflection is the bouncing back of light from a surface (as in a mirror). Refraction is the bending of light as it passes from one transparent medium into another of different density (for example, a straw looks bent in a glass of water). Refraction is how lenses — and the eye — focus light." },
      { h: "Lenses", p: "A lens is a shaped piece of transparent material that refracts light. A convex (converging) lens is thicker in the middle and brings light rays together to a focus; a concave (diverging) lens is thinner in the middle and spreads rays apart. The lens of the eye is convex and focuses an image on the retina.", figure: {
        caption: "Figure 6.1 — A convex lens converges parallel light to a focal point.",
        svg: "<svg viewBox='0 0 420 130' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Convex lens'>" +
          "<ellipse cx='200' cy='65' rx='18' ry='52' fill='#E6ECF8' stroke='#2E63B8' stroke-width='2'/>" +
          "<line x1='20' y1='40' x2='200' y2='40' stroke='#C99A50' stroke-width='2'/><line x1='20' y1='65' x2='200' y2='65' stroke='#C99A50' stroke-width='2'/><line x1='20' y1='90' x2='200' y2='90' stroke='#C99A50' stroke-width='2'/>" +
          "<line x1='200' y1='40' x2='330' y2='65' stroke='#B85C5C' stroke-width='2'/><line x1='200' y1='65' x2='330' y2='65' stroke='#B85C5C' stroke-width='2'/><line x1='200' y1='90' x2='330' y2='65' stroke='#B85C5C' stroke-width='2'/>" +
          "<circle cx='330' cy='65' r='4' fill='#14387A'/><text x='330' y='90' text-anchor='middle' font-family='Inter' font-size='11' fill='#14387A'>focal point</text>" +
          "</svg>"
      } },
      { h: "Correcting vision", p: "Spectacle lenses correct refractive errors of the eye. In myopia (short-sight) the image forms in front of the retina and is corrected with a concave (diverging) lens; in hyperopia (long-sight) the image forms behind the retina and is corrected with a convex (converging) lens. With age the lens stiffens (presbyopia), so reading glasses (convex) are often needed." },
      { h: "The microscope", p: "A microscope uses two convex lenses (objective and eyepiece) to magnify tiny objects, making cells, blood films and micro-organisms visible. Magnification is the eyepiece power multiplied by the objective power (e.g. 10x eyepiece x 40x objective = 400x). The microscope is essential in laboratory diagnosis." },
      { h: "Fibre-optics and endoscopy", p: "Light can be carried along thin flexible glass fibres by repeated internal reflection — the basis of fibre-optics. This lets an endoscope carry light into the body and an image back, so doctors and nurses can see inside the stomach, bowel, airway (bronchoscope) or joints without major surgery. Light is also used in the pulse oximeter, which shines red and infrared light through a finger to measure oxygen saturation." },
      { h: "The spectrum and other light", p: "White light splits into the colours of the spectrum (red to violet). Beyond visible light lie infrared (felt as heat; used in heat lamps and non-contact thermometers) and ultraviolet (UV) light, which can sterilise surfaces and triggers vitamin D production in skin but can also damage skin and eyes. Lasers are intense, focused light beams used in surgery and eye treatment." },
      { h: "Nursing relevance", p: "Good lighting is essential for safe procedures and wound inspection. Light underlies many tools nurses use or assist with: microscopy in the lab, endoscopy, pulse oximetry, and phototherapy — where blue light is used to treat jaundice in newborns by breaking down bilirubin in the skin. Eye protection is needed around UV and lasers." }
    ],
    references: REF_BS,
    examQuestions: [
      "Differentiate reflection and refraction with an example of each.",
      "Compare convex and concave lenses and state which corrects myopia and hyperopia.",
      "Describe the microscope and how its magnification is calculated.",
      "Explain how fibre-optics makes endoscopy possible.",
      "List clinical uses of light in nursing, including phototherapy."
    ],
    assessment: [
      { type: "mcq", q: "The bending of light as it passes from one medium to another is:", options: ["Reflection", "Refraction", "Diffusion", "Dispersion"], answer: 1, rationale: "Refraction is the bending of light between media of different density; reflection is bouncing back." },
      { type: "mcq", q: "A convex lens:", options: ["Diverges light rays", "Converges light rays to a focus", "Blocks light", "Reflects light"], answer: 1, rationale: "A convex (converging) lens brings parallel rays to a focal point." },
      { type: "mcq", q: "Myopia (short-sight) is corrected with a:", options: ["Convex lens", "Concave lens", "Plane mirror", "Prism"], answer: 1, rationale: "A concave (diverging) lens corrects myopia; a convex lens corrects hyperopia." },
      { type: "mcq", q: "A microscope with a 10x eyepiece and 40x objective magnifies by:", options: ["50x", "400x", "104x", "4x"], answer: 1, rationale: "Total magnification = eyepiece x objective = 10 x 40 = 400x." },
      { type: "mcq", q: "Endoscopy is made possible by carrying light along:", options: ["Copper wires", "Optical (glass) fibres", "Water tubes", "Mirrors only"], answer: 1, rationale: "Fibre-optics carry light by internal reflection along flexible glass fibres." },
      { type: "mcq", q: "Phototherapy for neonatal jaundice mainly uses:", options: ["Red light", "Blue light", "X-rays", "Infrared only"], answer: 1, rationale: "Blue light breaks down bilirubin in the skin, treating neonatal jaundice." },
      { type: "mcq", q: "A pulse oximeter measures oxygen saturation by shining ______ through the finger.", options: ["Sound waves", "Red and infrared light", "X-rays", "Ultraviolet light"], answer: 1, rationale: "It passes red and infrared light through tissue to estimate SpO2." },
      { type: "mcq", q: "The eye focuses an image on the retina using a lens that is:", options: ["Concave", "Convex", "Flat", "Coloured"], answer: 1, rationale: "The eye's lens is convex (converging) to focus light on the retina." },
      { type: "mcq", q: "Which light can sterilise surfaces and also damage skin and eyes?", options: ["Infrared", "Ultraviolet (UV)", "Red light", "Visible light"], answer: 1, rationale: "UV light is germicidal but harmful to skin and eyes." },
      { type: "mcq", q: "Unlike sound, light can travel:", options: ["Only through air", "Through a vacuum", "Only through water", "Only in curves"], answer: 1, rationale: "Light (electromagnetic) needs no medium and travels through a vacuum." },
      { type: "fill", q: "The bouncing back of light from a surface is called ______.", accept: ["reflection"], rationale: "Reflection is light bouncing back from a surface such as a mirror." },
      { type: "fill", q: "A ______ (converging) lens is used to correct long-sight (hyperopia).", accept: ["convex", "converging"], rationale: "Hyperopia is corrected with a convex/converging lens." }
    ]
  },
  {
    id: "bs-07-sound",
    unit: "Unit 2 · Applied Physics in Nursing",
    title: "Sound and Ultrasound",
    readMinutes: 17,
    summary: "What sound is, its properties (frequency, amplitude, speed), the range of human hearing, the stethoscope, the clinical uses of ultrasound, and noise and hearing protection.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is sound?", p: "Sound is a form of energy produced by vibrations that travel as waves through a medium — a solid, liquid or gas. Because it needs a medium to carry the vibrations, sound cannot travel through a vacuum. The vibrating particles pass the energy along until it reaches the ear." },
      { h: "Properties of sound", p: "Sound waves have three key properties.", figure: {
        caption: "Figure 7.1 — Frequency (pitch) and amplitude (loudness) of a sound wave.",
        svg: "<svg viewBox='0 0 440 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Sound wave'>" +
          "<line x1='10' y1='60' x2='430' y2='60' stroke='#DCE3E7'/>" +
          "<path d='M10,60 Q40,10 70,60 T130,60 T190,60 T250,60 T310,60 T370,60 T430,60' fill='none' stroke='#2E63B8' stroke-width='2.5'/>" +
          "<line x1='70' y1='60' x2='130' y2='60' stroke='#B85C5C' stroke-width='2'/><text x='100' y='98' text-anchor='middle' font-family='Inter' font-size='10' fill='#B85C5C'>wavelength</text>" +
          "<line x1='40' y1='60' x2='40' y2='14' stroke='#A47B36' stroke-width='2'/><text x='40' y='110' text-anchor='middle' font-family='Inter' font-size='10' fill='#A47B36'>amplitude</text>" +
          "</svg>"
      } },
      { h: "Frequency, amplitude and speed", list: [
        "Frequency — the number of vibrations per second, measured in hertz (Hz); it determines the pitch (high or low) of a sound.",
        "Amplitude — the size of the vibration; it determines the loudness, measured in decibels (dB).",
        "Speed — sound travels faster in solids and liquids than in air, because their particles are closer together."
      ] },
      { h: "The range of human hearing", p: "The healthy human ear hears frequencies from about 20 Hz to 20,000 Hz. Sound below 20 Hz is infrasound; sound above 20,000 Hz is ultrasound, which we cannot hear but which has important medical uses. Hearing tends to lose the higher frequencies first with age." },
      { h: "The stethoscope", p: "The stethoscope conducts sounds from inside the body to the nurse's ears. It is used to listen (auscultate) to heart sounds, breath sounds, bowel sounds, and the Korotkoff sounds heard when measuring blood pressure. Good technique and a quiet environment improve what can be heard." },
      { h: "Ultrasound in medicine", p: "Ultrasound (high-frequency sound) is widely used because it is safe — it does not use ionising radiation. Pulses of ultrasound are sent into the body and the echoes are built into an image. Uses include pregnancy (obstetric) scans, echocardiography (imaging the heart), and Doppler ultrasound, which detects movement such as blood flow or the fetal heartbeat. Ultrasound is also used to clean instruments and in some therapies." },
      { h: "Noise and hearing protection", p: "Very loud sound (high amplitude) or long exposure can damage hearing. Hospitals can be noisy, which disturbs patients' rest and can mask alarms. Nurses help by keeping noise down, especially at night, and by encouraging hearing protection where noise is unavoidable." },
      { h: "Nursing relevance", p: "Sound principles underpin auscultation with the stethoscope (heart, lungs, BP), the use of the fetal Doppler and ultrasound scans, and the assessment of hearing. Recognising that ultrasound is non-ionising reassures patients (e.g. pregnant women) that scans are safe." }
    ],
    references: REF_BS,
    examQuestions: [
      "What is sound and why can it not travel through a vacuum?",
      "Define frequency and amplitude and state what each determines.",
      "State the normal range of human hearing and define ultrasound.",
      "List the body sounds a nurse hears through a stethoscope.",
      "Describe the clinical uses of ultrasound and explain why it is considered safe."
    ],
    assessment: [
      { type: "mcq", q: "Sound cannot travel through:", options: ["Air", "Water", "A vacuum", "Bone"], answer: 2, rationale: "Sound needs a medium; it cannot travel through a vacuum." },
      { type: "mcq", q: "The frequency of a sound determines its:", options: ["Loudness", "Pitch", "Speed", "Direction"], answer: 1, rationale: "Frequency (Hz) sets the pitch; amplitude sets loudness." },
      { type: "mcq", q: "Loudness of sound is measured in:", options: ["Hertz", "Decibels", "Pascals", "Newtons"], answer: 1, rationale: "Loudness is measured in decibels (dB); frequency in hertz (Hz)." },
      { type: "mcq", q: "The approximate upper limit of human hearing is:", options: ["2000 Hz", "20,000 Hz", "200 Hz", "200,000 Hz"], answer: 1, rationale: "Humans hear roughly 20 Hz to 20,000 Hz; above that is ultrasound." },
      { type: "mcq", q: "Sound above 20,000 Hz is called:", options: ["Infrasound", "Ultrasound", "Noise", "Echo"], answer: 1, rationale: "Ultrasound is sound above the human hearing range." },
      { type: "mcq", q: "A key reason ultrasound scanning is considered safe is that it:", options: ["Uses ionising radiation", "Does not use ionising radiation", "Uses X-rays", "Heats the tissue strongly"], answer: 1, rationale: "Ultrasound imaging uses sound waves, not ionising radiation, so it is safe (e.g. in pregnancy)." },
      { type: "mcq", q: "The Korotkoff sounds are listened to when measuring:", options: ["Temperature", "Blood pressure", "Respiratory rate", "Oxygen saturation"], answer: 1, rationale: "Korotkoff sounds heard through the stethoscope indicate systolic and diastolic blood pressure." },
      { type: "mcq", q: "Detecting blood flow or a fetal heartbeat uses ______ ultrasound.", options: ["Doppler", "Infrared", "Static", "Reflected light"], answer: 0, rationale: "Doppler ultrasound detects movement such as blood flow and the fetal heart." },
      { type: "mcq", q: "Sound travels fastest in:", options: ["Air", "Water", "A solid", "A vacuum"], answer: 2, rationale: "Closer particles in solids transmit vibrations fastest; sound is slowest in gases." },
      { type: "mcq", q: "The instrument used to listen to heart and breath sounds is the:", options: ["Sphygmomanometer", "Stethoscope", "Otoscope", "Spirometer"], answer: 1, rationale: "The stethoscope conducts internal body sounds to the listener." },
      { type: "fill", q: "The number of sound vibrations per second is the ______, measured in hertz.", accept: ["frequency"], rationale: "Frequency (Hz) determines pitch." },
      { type: "fill", q: "Listening to internal body sounds with a stethoscope is called ______.", accept: ["auscultation"], rationale: "Auscultation is listening to body sounds, usually with a stethoscope." }
    ]
  },
  {
    id: "bs-08-electricity",
    unit: "Unit 2 · Applied Physics in Nursing",
    title: "Electricity & Electrical Safety",
    readMinutes: 18,
    summary: "Current, voltage and resistance, conductors and insulators, the body and electricity, medical equipment (ECG, defibrillator), and electrical safety in the hospital.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Electric charge and current", p: "Electricity is the flow of electric charge. An electric current is the movement of charge (electrons) through a conductor, measured in amperes (A). Current flows only in a complete loop called a circuit; if the circuit is broken, the current stops." },
      { h: "Voltage, resistance and Ohm's law", p: "Voltage (potential difference, measured in volts, V) is the 'push' that drives current around a circuit. Resistance (measured in ohms, Ω) opposes the flow. These are linked by Ohm's law: voltage = current x resistance (V = I x R). A higher voltage drives more current; a higher resistance reduces it.", figure: {
        caption: "Figure 8.1 — A simple electric circuit: a cell drives current through a device.",
        svg: "<svg viewBox='0 0 320 150' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Simple circuit'>" +
          "<rect x='40' y='30' width='240' height='90' rx='6' fill='none' stroke='#2E63B8' stroke-width='3'/>" +
          "<line x1='150' y1='22' x2='150' y2='38' stroke='#14387A' stroke-width='4'/><line x1='168' y1='14' x2='168' y2='46' stroke='#14387A' stroke-width='2'/><text x='159' y='12' text-anchor='middle' font-family='Inter' font-size='10' fill='#14387A'>cell</text>" +
          "<circle cx='160' cy='120' r='14' fill='#E6ECF8' stroke='#B85C5C' stroke-width='2'/><text x='160' y='145' text-anchor='middle' font-family='Inter' font-size='10' fill='#B85C5C'>device</text>" +
          "</svg>"
      } },
      { h: "Conductors and insulators", p: "Materials that let current flow easily are conductors (metals such as copper, and — importantly — the human body, because it contains water and dissolved salts). Materials that resist current are insulators (plastic, rubber, dry wood), which are used to cover wires and protect against shock." },
      { h: "The body and electric shock", p: "Because body fluids conduct electricity, a current passing through the body can cause an electric shock — ranging from a tingle to burns, muscle spasm, or a fatal disturbance of the heart's rhythm. Wet skin lowers resistance and increases the danger, which is why electrical equipment and water must be kept apart." },
      { h: "Medical uses of electricity", list: [
        "ECG (electrocardiogram) — records the heart's own electrical activity to detect rhythm problems.",
        "Defibrillator — delivers a controlled electric shock to restore a normal heart rhythm in cardiac arrest.",
        "Diathermy — uses high-frequency current to cut tissue or stop bleeding in surgery.",
        "Nerve and muscle stimulators, infusion pumps, monitors and many other devices run on electricity."
      ] },
      { h: "Electrical safety in hospital", list: [
        "Keep water and fluids away from electrical equipment and sockets.",
        "Check cords and plugs for damage; never overload sockets.",
        "Ensure equipment is earthed (grounded) and has passed biomedical safety checks.",
        "Take special care with patients who have invasive lines (e.g. cardiac catheters), where even a tiny 'microshock' can be dangerous.",
        "Remember the fire risk: electrical sparks near oxygen can cause fire, so no naked flames or faulty electrics near oxygen therapy."
      ] },
      { h: "Static electricity", p: "Static electricity is a build-up of charge on a surface (felt as a small spark). In areas rich in oxygen or flammable gases it could, in theory, ignite a fire, so anti-static precautions and flooring are used in operating theatres." },
      { h: "Nursing relevance", p: "Nurses use electrically powered equipment constantly and must use it safely — checking devices, keeping them dry, ensuring they are serviced, and reporting faults. Understanding the heart's electrical activity also underlies ECG monitoring and the safe, prompt use of a defibrillator in an emergency." }
    ],
    references: REF_BS,
    examQuestions: [
      "Define electric current, voltage and resistance and state Ohm's law.",
      "Differentiate conductors and insulators with examples.",
      "Why is the human body a conductor of electricity, and how does wet skin affect shock risk?",
      "Describe the medical uses of electricity (ECG, defibrillator, diathermy).",
      "List the electrical-safety precautions a nurse should follow, including near oxygen."
    ],
    assessment: [
      { type: "mcq", q: "Electric current is measured in:", options: ["Volts", "Amperes", "Ohms", "Watts"], answer: 1, rationale: "Current is measured in amperes (A); voltage in volts and resistance in ohms." },
      { type: "mcq", q: "Ohm's law states that voltage equals:", options: ["Current ÷ resistance", "Current x resistance", "Resistance ÷ current", "Current + resistance"], answer: 1, rationale: "V = I x R (voltage = current x resistance)." },
      { type: "mcq", q: "Which is a good electrical insulator?", options: ["Copper", "Salt water", "Rubber", "The human body"], answer: 2, rationale: "Rubber is an insulator; metals, salt water and the body conduct." },
      { type: "mcq", q: "The human body conducts electricity mainly because it contains:", options: ["Air", "Water and dissolved salts", "Fat only", "Bone"], answer: 1, rationale: "Body fluids with electrolytes conduct current, so the body is a conductor." },
      { type: "mcq", q: "An ECG records the:", options: ["Brain's electrical activity", "Heart's electrical activity", "Muscle strength", "Lung volume"], answer: 1, rationale: "The electrocardiogram records the heart's electrical activity." },
      { type: "mcq", q: "A defibrillator is used to:", options: ["Measure blood pressure", "Deliver a shock to restore heart rhythm", "Record brain waves", "Warm the patient"], answer: 1, rationale: "A defibrillator delivers a controlled shock to restore a normal cardiac rhythm." },
      { type: "mcq", q: "Wet skin makes electric shock more dangerous because it:", options: ["Increases resistance", "Lowers resistance, allowing more current", "Stops current", "Adds voltage"], answer: 1, rationale: "Moisture lowers skin resistance, so more current can flow through the body." },
      { type: "mcq", q: "Connecting equipment to earth (grounding) helps to:", options: ["Increase voltage", "Protect against electric shock", "Speed up current", "Save electricity"], answer: 1, rationale: "Earthing provides a safe path for fault current, protecting users from shock." },
      { type: "mcq", q: "A particular fire hazard exists when electrical sparks occur near:", options: ["Water", "Oxygen", "Plastic", "Glass"], answer: 1, rationale: "Oxygen supports combustion, so sparks near oxygen therapy can start a fire." },
      { type: "mcq", q: "A complete path that allows current to flow is a:", options: ["Circuit", "Conductor", "Resistor", "Fuse"], answer: 0, rationale: "Current flows only around a complete circuit." },
      { type: "fill", q: "The opposition to the flow of current, measured in ohms, is ______.", accept: ["resistance"], rationale: "Resistance (ohms) opposes current flow." },
      { type: "fill", q: "A controlled electric shock to correct a life-threatening rhythm is delivered by a ______.", accept: ["defibrillator"], rationale: "A defibrillator restores normal heart rhythm in cardiac arrest." }
    ]
  },
  {
    id: "bs-09-radiation",
    unit: "Unit 2 · Applied Physics in Nursing",
    title: "Radiation and Radioactivity",
    readMinutes: 18,
    summary: "Ionising vs non-ionising radiation, radioactivity and its rays, X-rays and medical imaging, therapeutic uses, radiation hazards, and the principles of radiation protection.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is radiation?", p: "Radiation is energy that travels as waves or particles. Electromagnetic radiation forms a spectrum from low-energy radio waves through microwaves, infrared, visible light and ultraviolet, up to high-energy X-rays and gamma rays. Radiation is divided into non-ionising (lower energy) and ionising (high energy) types." },
      { h: "Ionising vs non-ionising radiation", p: "Non-ionising radiation (radio, microwave, infrared, visible light, most UV) does not have enough energy to remove electrons from atoms; it is generally less harmful. Ionising radiation (X-rays, gamma rays, and the particles from radioactive atoms) carries enough energy to knock electrons off atoms, which can damage cells and DNA — useful for treatment and imaging but harmful in excess." },
      { h: "Radioactivity", p: "Some atoms have unstable nuclei and break down (decay), giving off radiation; these are radioactive isotopes. Three main types of radiation are emitted: alpha particles (large, stopped by paper or skin), beta particles (smaller, stopped by thin metal/plastic), and gamma rays (high-energy waves, very penetrating, needing thick lead or concrete to stop)." },
      { h: "X-rays and imaging", p: "X-rays are high-energy electromagnetic rays produced electrically. They pass easily through soft tissue but are absorbed by dense structures such as bone and metal, producing a shadow image on a detector — used to look at bones, the chest and many other areas. A CT scan uses X-rays to build detailed cross-sectional images." },
      { h: "Therapeutic and diagnostic uses", list: [
        "Diagnostic X-ray and CT — imaging bones, chest, abdomen and more.",
        "Radiotherapy — targeted ionising radiation to destroy cancer cells.",
        "Radioactive isotopes — e.g. radioactive iodine to scan or treat the thyroid; isotope scans of bone and other organs.",
        "Sterilisation — gamma radiation sterilises some single-use medical supplies."
      ] },
      { h: "Hazards of ionising radiation", p: "Ionising radiation can damage living cells and their DNA. High or repeated doses increase the risk of cancer and can harm rapidly dividing cells; the developing fetus is especially vulnerable, so X-rays are avoided in pregnancy unless essential. Effects depend on the dose received." },
      { h: "Radiation protection", p: "Protection rests on three principles — time, distance and shielding: keep exposure time short, stay as far away as possible (intensity falls sharply with distance), and use shielding such as lead aprons and screens.", figure: {
        caption: "Figure 9.1 — The three principles of radiation protection.",
        svg: "<svg viewBox='0 0 540 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Radiation protection'>" +
          [["Time","less exposure"],["Distance","stay further away"],["Shielding","lead aprons/screens"]].map(function(p,i){var x=10+i*176;return "<rect x='"+x+"' y='18' width='160' height='46' rx='10' fill='#E6ECF8' stroke='#2E63B8'/><text x='"+(x+80)+"' y='40' text-anchor='middle' font-family='Inter' font-size='13' font-weight='700' fill='#14387A'>"+p[0]+"</text><text x='"+(x+80)+"' y='56' text-anchor='middle' font-family='Inter' font-size='9.5' fill='#6B7785'>"+p[1]+"</text>";}).join("") +
          "</svg>"
      } },
      { h: "Nursing relevance", p: "Nurses limit their own and patients' exposure: stepping behind a screen or leaving the room during X-rays, wearing lead aprons and a dosimeter (radiation-monitoring badge) when needed, and following local rules. Pregnant staff and patients need special care. Nurses also reassure patients that ultrasound and MRI do not use ionising radiation." }
    ],
    references: REF_BS,
    examQuestions: [
      "Differentiate ionising and non-ionising radiation with examples.",
      "Name the three types of radiation from radioactive decay and their penetrating power.",
      "How are X-rays used in medical imaging?",
      "List the medical uses of radiation, both diagnostic and therapeutic.",
      "State the three principles of radiation protection and how nurses apply them."
    ],
    assessment: [
      { type: "mcq", q: "Which is an example of ionising radiation?", options: ["Radio waves", "Visible light", "X-rays", "Microwaves"], answer: 2, rationale: "X-rays (and gamma rays) are ionising; radio, light and microwaves are non-ionising." },
      { type: "mcq", q: "X-rays produce an image because they are absorbed most by:", options: ["Air", "Soft tissue", "Dense structures like bone", "Water"], answer: 2, rationale: "Dense bone absorbs X-rays and casts a shadow, while soft tissue lets them pass." },
      { type: "mcq", q: "The most penetrating type of radioactive emission is:", options: ["Alpha particles", "Beta particles", "Gamma rays", "Visible light"], answer: 2, rationale: "Gamma rays are highly penetrating and need thick lead/concrete to stop." },
      { type: "mcq", q: "Targeted ionising radiation used to destroy cancer cells is:", options: ["Ultrasound", "Radiotherapy", "Phototherapy", "Diathermy"], answer: 1, rationale: "Radiotherapy uses ionising radiation to kill cancer cells." },
      { type: "mcq", q: "Ionising radiation is especially dangerous to:", options: ["Bone only", "Hair", "The developing fetus", "Teeth"], answer: 2, rationale: "Rapidly dividing fetal cells are very sensitive, so X-rays are avoided in pregnancy unless essential." },
      { type: "mcq", q: "The three principles of radiation protection are time, distance and:", options: ["Speed", "Shielding", "Voltage", "Temperature"], answer: 1, rationale: "Time, distance and shielding minimise radiation dose." },
      { type: "mcq", q: "A device worn by staff to monitor radiation exposure is a:", options: ["Stethoscope", "Dosimeter badge", "Thermometer", "Pulse oximeter"], answer: 1, rationale: "A dosimeter badge records the cumulative radiation dose a worker receives." },
      { type: "mcq", q: "Which imaging method does NOT use ionising radiation?", options: ["X-ray", "CT scan", "Ultrasound", "Radioisotope scan"], answer: 2, rationale: "Ultrasound (and MRI) use no ionising radiation; X-ray, CT and isotope scans do." },
      { type: "mcq", q: "Radioactive iodine is used to scan and treat the:", options: ["Liver", "Thyroid gland", "Kidney", "Heart"], answer: 1, rationale: "Radioactive iodine concentrates in the thyroid, allowing scanning and treatment." },
      { type: "mcq", q: "Radiation intensity as you move away from the source:", options: ["Increases", "Decreases", "Stays the same", "Doubles"], answer: 1, rationale: "Intensity falls sharply with distance, which is why distance protects." },
      { type: "fill", q: "Radiation with enough energy to remove electrons from atoms is called ______ radiation.", accept: ["ionising", "ionizing"], rationale: "Ionising radiation can damage cells and DNA." },
      { type: "fill", q: "A lead ______ is worn to shield the body during X-ray exposure.", accept: ["apron"], rationale: "Lead aprons shield the body from scattered X-rays." }
    ]
  },
  {
    id: "bs-10-atomic",
    unit: "Unit 3 · Applied Chemistry in Nursing",
    title: "Atomic Structure, Elements & Compounds",
    readMinutes: 18,
    summary: "The structure of the atom, atomic number and isotopes, elements, compounds and mixtures, the periodic table, and the key elements of the body.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The atom", p: "All matter is made of atoms — the smallest particle of an element that keeps its properties. An atom has a tiny central nucleus containing protons (positive charge) and neutrons (no charge), surrounded by much lighter electrons (negative charge) moving in shells (energy levels). Atoms are normally electrically neutral because the number of protons equals the number of electrons.", figure: {
        caption: "Figure 10.1 — A simple atom: a nucleus (protons + neutrons) with electrons in shells.",
        svg: "<svg viewBox='0 0 220 180' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Atom structure'>" +
          "<ellipse cx='110' cy='90' rx='90' ry='55' fill='none' stroke='#2E63B8' stroke-width='1.5'/>" +
          "<ellipse cx='110' cy='90' rx='55' ry='85' fill='none' stroke='#2E63B8' stroke-width='1.5'/>" +
          "<circle cx='110' cy='90' r='22' fill='#B85C5C'/><text x='110' y='95' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#fff'>nucleus</text>" +
          "<circle cx='200' cy='90' r='6' fill='#14387A'/><circle cx='110' cy='5' r='6' fill='#14387A'/><circle cx='20' cy='90' r='6' fill='#14387A'/>" +
          "<text x='150' y='168' text-anchor='middle' font-family='Inter' font-size='10' fill='#14387A'>electrons in shells</text>" +
          "</svg>"
      } },
      { h: "Atomic number, mass number and isotopes", p: "The atomic number is the number of protons in an atom — it defines which element it is. The mass number is the total of protons plus neutrons. Atoms of the same element that have different numbers of neutrons are called isotopes; some isotopes are radioactive and are used in medicine." },
      { h: "Elements", p: "An element is a pure substance made of only one kind of atom and cannot be split into simpler substances by chemical means. There are over 100 elements, each with a chemical symbol (e.g. O for oxygen, Na for sodium, Ca for calcium). About 25 elements are essential to the human body." },
      { h: "Compounds and mixtures", list: [
        "Compound — two or more elements chemically combined in a fixed ratio, with new properties (e.g. water H₂O, carbon dioxide CO₂, sodium chloride NaCl). It can be separated only by chemical means.",
        "Mixture — two or more substances physically combined in any ratio, keeping their own properties (e.g. air, blood, salt dissolved in water). It can be separated by physical means such as filtering or evaporation."
      ] },
      { h: "The periodic table", p: "The periodic table arranges all the elements in order of atomic number into rows (periods) and columns (groups). Elements in the same group have similar chemical behaviour. Broadly, the table separates metals (e.g. sodium, iron, calcium) from non-metals (e.g. oxygen, carbon, chlorine). It lets chemists predict how elements react." },
      { h: "Elements of the body", p: "Just four elements — oxygen, carbon, hydrogen and nitrogen — make up about 96% of body mass. Other essential elements include calcium and phosphorus (bone), and sodium, potassium, chloride, magnesium and iron, many of which exist in the body as charged ions (electrolytes) vital for nerve, muscle and fluid function." },
      { h: "Symbols and formulae", p: "Each element has a one- or two-letter symbol, and compounds are written as formulae showing the atoms present — for example, H₂O (two hydrogen, one oxygen), CO₂ (one carbon, two oxygen) and NaCl (one sodium, one chlorine). Reading formulae helps nurses understand the make-up of fluids and medicines." },
      { h: "Nursing relevance", p: "Understanding atoms and elements underpins later chemistry the nurse uses daily: electrolytes are ions of elements (Na⁺, K⁺, Ca²⁺); medicines and IV fluids are compounds and mixtures; and radioactive isotopes are used in some scans and treatments." }
    ],
    references: REF_BS,
    examQuestions: [
      "Describe the structure of an atom, naming the three subatomic particles and their charges.",
      "Define atomic number, mass number and isotope.",
      "Differentiate an element, a compound and a mixture with an example of each.",
      "What is the periodic table and how is it organised?",
      "Name the four elements that make up most of body mass and give examples of essential electrolyte elements."
    ],
    assessment: [
      { type: "mcq", q: "The positively charged particle in the nucleus is the:", options: ["Electron", "Proton", "Neutron", "Ion"], answer: 1, rationale: "Protons carry a positive charge and sit in the nucleus with neutral neutrons." },
      { type: "mcq", q: "The atomic number of an element is the number of:", options: ["Neutrons", "Protons", "Electrons + neutrons", "Protons + neutrons"], answer: 1, rationale: "The atomic number equals the number of protons, which defines the element." },
      { type: "mcq", q: "Atoms of the same element with different numbers of neutrons are:", options: ["Ions", "Isotopes", "Molecules", "Compounds"], answer: 1, rationale: "Isotopes differ only in neutron number (same protons)." },
      { type: "mcq", q: "Water (H₂O) is an example of a:", options: ["Element", "Compound", "Mixture", "Isotope"], answer: 1, rationale: "Water is a compound — elements chemically combined in a fixed ratio." },
      { type: "mcq", q: "Which is a mixture?", options: ["Carbon dioxide", "Sodium chloride", "Air", "Water"], answer: 2, rationale: "Air is a mixture of gases; the others are compounds." },
      { type: "mcq", q: "An element is a substance that:", options: ["Contains many kinds of atom", "Contains only one kind of atom", "Is always a metal", "Cannot exist alone"], answer: 1, rationale: "An element is made of only one kind of atom." },
      { type: "mcq", q: "Electrons carry a charge that is:", options: ["Positive", "Negative", "Neutral", "Variable"], answer: 1, rationale: "Electrons are negatively charged; protons positive; neutrons neutral." },
      { type: "mcq", q: "The four elements making up about 96% of body mass are:", options: ["Na, K, Ca, Cl", "O, C, H, N", "Fe, Zn, Cu, I", "H, He, Li, Be"], answer: 1, rationale: "Oxygen, carbon, hydrogen and nitrogen form ~96% of body mass." },
      { type: "mcq", q: "The chemical symbol for sodium is:", options: ["S", "So", "Na", "Sd"], answer: 2, rationale: "Sodium's symbol is Na (from the Latin natrium)." },
      { type: "mcq", q: "The periodic table arranges elements in order of:", options: ["Mass number", "Atomic number", "Discovery date", "Colour"], answer: 1, rationale: "Elements are ordered by increasing atomic number into periods and groups." },
      { type: "fill", q: "A substance made of two or more elements chemically combined in a fixed ratio is a ______.", accept: ["compound"], rationale: "A compound has elements chemically combined in fixed proportions." },
      { type: "fill", q: "The number of protons in an atom is called its ______ number.", accept: ["atomic"], rationale: "The atomic number (protons) identifies the element." }
    ]
  },
  {
    id: "bs-11-bonding",
    unit: "Unit 3 · Applied Chemistry in Nursing",
    title: "Chemical Bonding & Reactions",
    readMinutes: 18,
    summary: "Why atoms bond, ionic and covalent bonding, ions and electrolytes, valency, types of chemical reaction, and catalysts and enzymes.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why atoms bond", p: "Atoms join together (bond) to become more stable, usually by achieving a full outer shell of electrons. They do this by transferring or sharing electrons. Chemical bonds hold compounds together, and the type of bond decides many of a substance's properties — including whether it conducts electricity when dissolved." },
      { h: "Ionic bonding", p: "In ionic bonding, one atom transfers one or more electrons to another. The atom that loses electrons becomes a positive ion (cation); the atom that gains them becomes a negative ion (anion). The opposite charges attract and hold the compound together. A classic example is sodium chloride (NaCl), table salt: sodium gives an electron to chlorine." },
      { h: "Covalent bonding", p: "In covalent bonding, atoms share electrons rather than transferring them. This is common between non-metals and forms molecules such as water (H₂O), carbon dioxide (CO₂) and oxygen (O₂). Many of the body's important molecules, including sugars and proteins, are held together by covalent bonds.", figure: { caption: "Figure 11.1 — Ionic bonding (electron transfer) vs covalent bonding (electron sharing). Add a labelled diagram if available.", placeholder: true } },
      { h: "Ions and electrolytes", p: "An ion is a charged atom or group of atoms. Ionic compounds dissolve in water and split into their ions — these solutions, called electrolytes, conduct electricity. The body's key electrolytes include sodium (Na⁺), potassium (K⁺), calcium (Ca²⁺), chloride (Cl⁻) and bicarbonate (HCO₃⁻); they are essential for nerve impulses, muscle contraction and fluid balance." },
      { h: "Valency", p: "Valency is the combining power of an atom — the number of electrons it loses, gains or shares when bonding. For example, sodium has a valency of 1 and oxygen a valency of 2, which is why two sodium atoms combine with one oxygen (Na₂O), and two hydrogen atoms with one oxygen (H₂O). Valency explains why formulae have the ratios they do." },
      { h: "Chemical reactions", p: "In a chemical reaction, substances (reactants) are changed into new substances (products); atoms are rearranged but not created or destroyed. Common types include: combination (A + B → AB), decomposition (AB → A + B), displacement (one element replaces another), neutralisation (acid + base → salt + water), and oxidation-reduction (transfer of electrons/oxygen). A reaction can be written as a word or symbol equation." },
      { h: "Catalysts and enzymes", p: "A catalyst is a substance that speeds up a chemical reaction without being used up itself. In the body, biological catalysts called enzymes speed up the thousands of reactions of metabolism (for example, digestive enzymes break down food). Without enzymes these reactions would be far too slow to sustain life." },
      { h: "Nursing relevance", p: "Bonding and reactions explain why salts dissociate into the electrolytes nurses monitor and replace, why oxidation produces harmful free radicals (countered by antioxidants), how antacids neutralise stomach acid, and how enzymes drive digestion and metabolism — all everyday clinical chemistry." }
    ],
    references: REF_BS,
    examQuestions: [
      "Explain why atoms form chemical bonds.",
      "Differentiate ionic and covalent bonding with an example of each.",
      "What is an electrolyte? Name the body's key electrolytes.",
      "Define valency and use it to explain the formula of water.",
      "List the main types of chemical reaction and define the role of a catalyst/enzyme."
    ],
    assessment: [
      { type: "mcq", q: "In ionic bonding, electrons are:", options: ["Shared equally", "Transferred from one atom to another", "Destroyed", "Created"], answer: 1, rationale: "Ionic bonding involves transfer of electrons, forming positive and negative ions." },
      { type: "mcq", q: "Covalent bonding involves atoms that:", options: ["Transfer electrons", "Share electrons", "Lose protons", "Gain neutrons"], answer: 1, rationale: "Covalent bonds form when atoms share electrons (e.g. in water)." },
      { type: "mcq", q: "Sodium chloride (NaCl) is held together by:", options: ["Covalent bonds", "Ionic bonds", "No bonds", "Hydrogen only"], answer: 1, rationale: "NaCl is an ionic compound (Na⁺ and Cl⁻ attract)." },
      { type: "mcq", q: "A positively charged ion is called a:", options: ["Anion", "Cation", "Neutron", "Isotope"], answer: 1, rationale: "A cation is positive (lost electrons); an anion is negative (gained electrons)." },
      { type: "mcq", q: "Solutions that conduct electricity because they contain ions are called:", options: ["Insulators", "Electrolytes", "Catalysts", "Compounds"], answer: 1, rationale: "Electrolyte solutions contain dissociated ions and conduct electricity." },
      { type: "mcq", q: "Acid + base → salt + water is an example of a ______ reaction.", options: ["Decomposition", "Neutralisation", "Displacement", "Combination"], answer: 1, rationale: "Neutralisation reactions produce a salt and water from an acid and a base." },
      { type: "mcq", q: "A substance that speeds up a reaction without being used up is a:", options: ["Reactant", "Product", "Catalyst", "Solvent"], answer: 2, rationale: "A catalyst speeds a reaction without being consumed; enzymes are biological catalysts." },
      { type: "mcq", q: "Biological catalysts in the body are called:", options: ["Hormones", "Enzymes", "Vitamins", "Ions"], answer: 1, rationale: "Enzymes are biological catalysts that speed metabolic reactions." },
      { type: "mcq", q: "The combining power of an atom is its:", options: ["Mass number", "Valency", "Density", "Charge"], answer: 1, rationale: "Valency is the number of electrons an atom loses, gains or shares in bonding." },
      { type: "mcq", q: "In a chemical reaction, atoms are:", options: ["Created", "Destroyed", "Rearranged, not created or destroyed", "Turned into energy"], answer: 2, rationale: "Atoms are conserved and merely rearranged from reactants into products." },
      { type: "fill", q: "A negatively charged ion is called an ______.", accept: ["anion"], rationale: "An anion has gained electrons and is negative; a cation is positive." },
      { type: "fill", q: "Sodium (Na⁺) and potassium (K⁺) in solution are examples of ______.", accept: ["electrolytes", "ions"], rationale: "These ions in solution are electrolytes essential for nerve and muscle function." }
    ]
  },
  {
    id: "bs-12-acids-bases",
    unit: "Unit 3 · Applied Chemistry in Nursing",
    title: "Acids, Bases, Salts & pH",
    readMinutes: 19,
    summary: "Acids, bases and salts, neutralisation, the pH scale and indicators, buffers, and the tight control of body pH with its clinical importance.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Acids", p: "An acid is a substance that releases hydrogen ions (H⁺) in water. Acids taste sour, turn blue litmus red, and have a pH below 7. Examples include hydrochloric acid (HCl) in the stomach, citric acid in fruit, and carbonic acid in blood. Strong acids release many H⁺ ions; weak acids release few." },
      { h: "Bases and alkalis", p: "A base is a substance that accepts hydrogen ions (or releases hydroxide ions, OH⁻). A base that dissolves in water is called an alkali. Bases feel slippery, taste bitter, turn red litmus blue, and have a pH above 7. Examples include sodium hydroxide, ammonia, and the antacids used to relieve indigestion." },
      { h: "Neutralisation and salts", p: "When an acid reacts with a base they cancel each other out in a neutralisation reaction, producing a salt and water (acid + base → salt + water). For example, hydrochloric acid + sodium hydroxide → sodium chloride + water. Antacids work this way, neutralising excess stomach acid. A salt is the ionic compound formed in such reactions." },
      { h: "The pH scale", p: "The pH scale measures how acidic or alkaline a solution is, from 0 to 14. A pH of 7 is neutral (pure water); below 7 is acidic and above 7 is alkaline. The scale is logarithmic, so each unit is a tenfold change in acidity — pH 5 is ten times more acidic than pH 6.", figure: {
        caption: "Figure 12.1 — The pH scale, with some familiar examples.",
        svg: "<svg viewBox='0 0 540 96' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='pH scale'>" +
          (function(){var s="";var cols=["#B83232","#C75032","#D98C2E","#D9B22E","#C9C92E","#9FC92E","#5FBF3E","#3EB57A","#2E9E9E","#2E78C2","#2E5AC2","#3A3AC2","#5A2EB8","#6A1FA8","#7C1F9A"];for(var i=0;i<15;i++){var x=10+i*35;s+="<rect x='"+x+"' y='30' width='35' height='26' fill='"+cols[i]+"'/><text x='"+(x+17)+"' y='48' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#fff'>"+i+"</text>";}return s;})() +
          "<text x='45' y='22' text-anchor='middle' font-family='Inter' font-size='10' fill='#B83232'>acidic</text>" +
          "<text x='265' y='22' text-anchor='middle' font-family='Inter' font-size='10' fill='#3EB57A'>neutral 7</text>" +
          "<text x='470' y='22' text-anchor='middle' font-family='Inter' font-size='10' fill='#6A1FA8'>alkaline</text>" +
          "<text x='80' y='74' text-anchor='middle' font-family='Inter' font-size='9' fill='#6B7785'>stomach acid ~2</text>" +
          "<text x='280' y='74' text-anchor='middle' font-family='Inter' font-size='9' fill='#6B7785'>blood 7.4</text>" +
          "<text x='450' y='74' text-anchor='middle' font-family='Inter' font-size='9' fill='#6B7785'>bleach ~13</text>" +
          "</svg>"
      } },
      { h: "Indicators", p: "An indicator is a substance that changes colour with pH, used to test how acidic or alkaline something is. Litmus turns red in acid and blue in alkali; universal indicator shows a range of colours matched to a pH chart. In the lab, urine and other fluids can be tested with pH paper or dipsticks." },
      { h: "Body pH and its control", p: "Body fluids must stay within narrow pH ranges. Blood is slightly alkaline at about 7.35-7.45; a fall below 7.35 is acidosis and a rise above 7.45 is alkalosis, both dangerous. By contrast, the stomach is strongly acidic (about pH 1.5-3.5) to aid digestion and kill microbes, and urine pH varies (around 4.5-8) with diet and health." },
      { h: "Buffers", p: "A buffer is a chemical system that resists changes in pH by mopping up excess acid or base. The main buffer in blood is the bicarbonate system, which (together with the lungs removing CO₂ and the kidneys excreting H⁺) keeps blood pH stable. Buffers are why blood pH barely moves despite the acids produced by metabolism." },
      { h: "Nursing relevance", p: "Acid-base balance is monitored with arterial blood gases (ABGs); nurses recognise acidosis and alkalosis and their causes (e.g. respiratory or metabolic). Antacids neutralise stomach acid; urine pH is tested on dipsticks; and understanding buffers explains why the body defends its pH so vigorously." }
    ],
    references: REF_BS,
    examQuestions: [
      "Define an acid and a base and give the pH range of each.",
      "Write the general word equation for neutralisation and give a clinical example.",
      "Describe the pH scale and explain what 'logarithmic' means here.",
      "State the normal pH of blood, stomach and urine.",
      "What is a buffer? Name the main buffer system of the blood."
    ],
    assessment: [
      { type: "mcq", q: "An acid is a substance that, in water, releases:", options: ["Hydroxide ions (OH⁻)", "Hydrogen ions (H⁺)", "Sodium ions", "Electrons"], answer: 1, rationale: "Acids release H⁺ ions and have a pH below 7." },
      { type: "mcq", q: "On the pH scale, a neutral solution has a pH of:", options: ["0", "7", "10", "14"], answer: 1, rationale: "pH 7 is neutral; below is acidic, above is alkaline." },
      { type: "mcq", q: "Acid + base react to produce:", options: ["Salt + water", "Acid + gas", "Two acids", "An element"], answer: 0, rationale: "Neutralisation gives a salt and water." },
      { type: "mcq", q: "The normal pH of arterial blood is about:", options: ["1.5-3.5", "7.35-7.45", "5.0-6.0", "8.5-9.0"], answer: 1, rationale: "Blood is slightly alkaline at pH 7.35-7.45." },
      { type: "mcq", q: "A blood pH below 7.35 is called:", options: ["Alkalosis", "Acidosis", "Neutral", "Buffering"], answer: 1, rationale: "Acidosis is a blood pH below 7.35; alkalosis is above 7.45." },
      { type: "mcq", q: "Antacids relieve indigestion by ______ stomach acid.", options: ["Increasing", "Neutralising", "Diluting only", "Freezing"], answer: 1, rationale: "Antacids are bases that neutralise excess gastric acid." },
      { type: "mcq", q: "A substance that resists changes in pH is a:", options: ["Catalyst", "Buffer", "Solvent", "Salt"], answer: 1, rationale: "Buffers resist pH change; the bicarbonate system buffers blood." },
      { type: "mcq", q: "Blue litmus paper turns red in the presence of a/an:", options: ["Base", "Acid", "Salt", "Buffer"], answer: 1, rationale: "Acids turn blue litmus red; bases turn red litmus blue." },
      { type: "mcq", q: "The strongly acidic environment of the stomach has a pH of about:", options: ["1.5-3.5", "7.0", "7.4", "9.0"], answer: 0, rationale: "Gastric acid keeps the stomach at roughly pH 1.5-3.5." },
      { type: "mcq", q: "The main buffer system of the blood is the:", options: ["Phosphate system", "Bicarbonate system", "Ammonia system", "Chloride system"], answer: 1, rationale: "The bicarbonate buffer system is the principal blood buffer." },
      { type: "fill", q: "A solution with a pH greater than 7 is described as ______.", accept: ["alkaline", "basic"], rationale: "pH above 7 is alkaline (basic)." },
      { type: "fill", q: "Acid-base status is assessed clinically by an arterial blood ______ (ABG) test.", accept: ["gas", "gases"], rationale: "Arterial blood gas (ABG) analysis assesses pH and acid-base balance." }
    ]
  },
  {
    id: "bs-13-solutions",
    unit: "Unit 3 · Applied Chemistry in Nursing",
    title: "Solutions and Concentration",
    readMinutes: 19,
    summary: "Solutions, solutes and solvents, solubility, ways of expressing concentration, dilution, the tonicity of IV fluids, and suspensions and colloids.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a solution?", p: "A solution is a uniform mixture of a solute dissolved in a solvent. The solute is the substance that dissolves (e.g. salt or a drug) and the solvent is the liquid it dissolves in (usually water). Water dissolves so many substances that it is called the 'universal solvent'. Most body fluids and many medicines are solutions.", figure: {
        caption: "Figure 13.1 — Solute + solvent form a solution.",
        svg: "<svg viewBox='0 0 440 90' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Solution'>" +
          "<defs><marker id='sol13' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          "<rect x='10' y='26' width='120' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='70' y='51' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>solute</text>" +
          "<text x='150' y='51' text-anchor='middle' font-family='Inter' font-size='18' fill='#6B7785'>+</text>" +
          "<rect x='170' y='26' width='120' height='40' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='230' y='51' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>solvent</text>" +
          "<line x1='292' y1='46' x2='320' y2='46' stroke='#2E63B8' stroke-width='2' marker-end='url(#sol13)'/>" +
          "<rect x='322' y='26' width='110' height='40' rx='8' fill='#C99A50'/><text x='377' y='51' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#fff'>solution</text>" +
          "</svg>"
      } },
      { h: "Solubility", p: "Solubility is the maximum amount of a solute that will dissolve in a given amount of solvent. A solution that holds all it can is saturated. Solubility usually increases with temperature for solids (warm water dissolves sugar faster) and with stirring, but decreases for gases as temperature rises." },
      { h: "Concentration", p: "Concentration describes how much solute is present in a given amount of solution — a concentrated solution has a lot of solute, a dilute solution has little. Common ways to express it are: percentage (e.g. 0.9% means 0.9 g of solute in 100 mL), and amount-per-volume such as molarity (moles per litre) or millimoles per litre (mmol/L), used for electrolytes and many lab results." },
      { h: "Dilution", p: "Dilution means lowering a concentration by adding more solvent; the amount of solute stays the same but is spread through a larger volume. Nurses dilute drugs so they can be given safely, often using the relationship 'concentration x volume before = concentration x volume after' (C₁V₁ = C₂V₂) to work out how much diluent to add." },
      { h: "Tonicity of IV fluids", p: "Intravenous fluids are solutions whose concentration affects body cells by osmosis (tonicity). An isotonic fluid (e.g. 0.9% sodium chloride, 'normal saline') has the same concentration as body fluids and does not shift water into or out of cells. A hypotonic fluid (e.g. 0.45% saline) is more dilute and makes cells swell; a hypertonic fluid (e.g. 3% saline) is more concentrated and makes cells shrink. Choosing the correct fluid is a key nursing-safety matter." },
      { h: "Suspensions and colloids", p: "Not all mixtures are true solutions. In a suspension the particles are large and settle out on standing (e.g. some antibiotic syrups), so the bottle is labelled 'shake well before use'. In a colloid the particles are intermediate in size and stay dispersed (e.g. milk, and plasma-expander fluids). Recognising these guides correct preparation and administration." },
      { h: "Nursing relevance", p: "Solutions are everywhere in nursing: preparing and diluting medicines, reconstituting powdered drugs, reading percentage and mmol/L concentrations, selecting the right IV fluid by tonicity, and shaking suspensions before use. Concentration errors are a major cause of medication harm, so careful calculation is vital." }
    ],
    references: REF_BS,
    examQuestions: [
      "Define a solution, solute and solvent, and explain why water is called the universal solvent.",
      "What is solubility, and what factors affect it?",
      "Describe two ways of expressing concentration with an example of each.",
      "What is dilution, and how does adding solvent change concentration?",
      "Differentiate isotonic, hypotonic and hypertonic IV fluids."
    ],
    assessment: [
      { type: "mcq", q: "In a salt-water solution, the salt is the:", options: ["Solvent", "Solute", "Suspension", "Colloid"], answer: 1, rationale: "The solute is the substance that dissolves; the solvent (water) dissolves it." },
      { type: "mcq", q: "Water is often called the 'universal solvent' because it:", options: ["Is always pure", "Dissolves a very wide range of substances", "Never freezes", "Has no taste"], answer: 1, rationale: "Water dissolves a great many substances, making it the universal solvent." },
      { type: "mcq", q: "A 0.9% sodium chloride solution contains 0.9 g of salt in:", options: ["1 mL", "10 mL", "100 mL", "1000 mL"], answer: 2, rationale: "Percentage (w/v) means grams per 100 mL, so 0.9% = 0.9 g per 100 mL." },
      { type: "mcq", q: "Adding more solvent to a solution makes it:", options: ["More concentrated", "More dilute", "Saturated", "Hypertonic"], answer: 1, rationale: "Dilution spreads the same solute through a larger volume, lowering concentration." },
      { type: "mcq", q: "0.9% sodium chloride ('normal saline') is:", options: ["Hypotonic", "Isotonic", "Hypertonic", "A suspension"], answer: 1, rationale: "Normal saline is isotonic to body fluids, so it does not shift water across cell membranes." },
      { type: "mcq", q: "A hypotonic IV fluid causes body cells to:", options: ["Shrink", "Swell", "Stay unchanged", "Burst instantly always"], answer: 1, rationale: "A hypotonic (more dilute) fluid drives water into cells, making them swell." },
      { type: "mcq", q: "A solution holding the maximum solute it can dissolve is:", options: ["Dilute", "Saturated", "Hypotonic", "Colloidal"], answer: 1, rationale: "A saturated solution contains the maximum dissolved solute at that temperature." },
      { type: "mcq", q: "A medicine labelled 'shake well before use' is most likely a:", options: ["True solution", "Suspension", "Pure solvent", "Gas"], answer: 1, rationale: "Suspension particles settle out, so the bottle must be shaken to redistribute the drug." },
      { type: "mcq", q: "Electrolyte concentrations in blood are commonly expressed in:", options: ["Grams", "mmol/L", "Litres", "Newtons"], answer: 1, rationale: "Electrolytes are reported in millimoles per litre (mmol/L)." },
      { type: "mcq", q: "Solubility of most solids in water increases with:", options: ["Lower temperature", "Higher temperature", "Less stirring", "Adding gas"], answer: 1, rationale: "Most solids dissolve faster and more in warmer water (and with stirring)." },
      { type: "fill", q: "The liquid in which a solute dissolves is the ______.", accept: ["solvent"], rationale: "The solvent dissolves the solute to form a solution." },
      { type: "fill", q: "An IV fluid with the same concentration as body fluids is described as ______.", accept: ["isotonic"], rationale: "Isotonic fluids (e.g. 0.9% saline) do not shift water into or out of cells." }
    ]
  },
  {
    id: "bs-14-water-electrolytes",
    unit: "Unit 3 · Applied Chemistry in Nursing",
    title: "Water, Electrolytes & Body Fluids",
    readMinutes: 19,
    summary: "Water and its functions, body-fluid compartments, the major electrolytes, fluid balance and its control, dehydration and overload, and oral rehydration.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Water in the body", p: "Water makes up about 60% of an adult's body weight (more in infants, less in the elderly and the obese). It is the body's main solvent and transport medium, takes part in chemical reactions, helps regulate temperature, and lubricates joints and membranes. Life cannot continue for more than a few days without water." },
      { h: "Fluid compartments", p: "Body water is divided between two main compartments. About two-thirds is intracellular fluid (ICF) — inside the cells. The remaining one-third is extracellular fluid (ECF) — outside the cells — which is itself split into interstitial fluid (between cells) and plasma (the fluid part of blood).", figure: {
        caption: "Figure 14.1 — Distribution of body water: about two-thirds inside cells.",
        svg: "<svg viewBox='0 0 420 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Fluid compartments'>" +
          "<rect x='10' y='24' width='400' height='40' rx='6' fill='none' stroke='#6B7785'/>" +
          "<rect x='12' y='26' width='262' height='36' fill='#2E63B8'/><text x='143' y='48' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#fff'>Intracellular (~2/3)</text>" +
          "<rect x='274' y='26' width='134' height='36' fill='#C99A50'/><text x='341' y='44' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#fff'>Extracellular</text><text x='341' y='57' text-anchor='middle' font-family='Inter' font-size='9' fill='#fff'>(~1/3)</text>" +
          "</svg>"
      } },
      { h: "The major electrolytes", p: "Electrolytes are mineral ions dissolved in body fluids. Sodium (Na⁺) is the main positive ion of the ECF and governs fluid volume; potassium (K⁺) is the main positive ion inside cells and is vital for nerve and heart function; calcium (Ca²⁺) is needed for bones, clotting and muscle; chloride (Cl⁻) and bicarbonate (HCO₃⁻) balance the charges and help acid-base balance; magnesium and phosphate are also important." },
      { h: "Functions of electrolytes", list: [
        "Maintain fluid balance and distribution between compartments (especially sodium).",
        "Generate nerve impulses and muscle contraction, including the heartbeat (sodium, potassium, calcium).",
        "Maintain acid-base balance (bicarbonate, chloride).",
        "Enable blood clotting and bone strength (calcium)."
      ] },
      { h: "Fluid balance", p: "For health, water taken in must roughly equal water lost. Intake comes from drinks, food and the water made by metabolism; output is mainly urine, with smaller losses through the skin (sweat), lungs (breathing) and faeces. The kidneys are the main regulator, helped by the hormones ADH (which conserves water) and aldosterone (which conserves sodium and water), and by the sensation of thirst." },
      { h: "Dehydration and fluid overload", p: "If output exceeds intake (e.g. in diarrhoea, vomiting, fever or poor drinking) the result is dehydration — dry mouth, thirst, reduced and concentrated urine, low blood pressure, and (in severe cases) shock. If intake or retention exceeds output (e.g. in kidney or heart failure) the result is fluid overload, causing oedema (swelling), raised blood pressure and breathlessness." },
      { h: "Oral rehydration", p: "Loss of water and electrolytes in diarrhoea — a major cause of death in children — is treated with oral rehydration solution (ORS), a carefully balanced mix of water, glucose and salts. The glucose helps the gut absorb sodium and water together. ORS is a simple, life-saving treatment and a cornerstone of community nursing." },
      { h: "Nursing relevance", p: "Nurses keep fluid-balance (intake-output) charts, monitor for signs of dehydration or overload, give and adjust IV fluids, watch electrolyte results (especially sodium and potassium, since abnormal potassium can stop the heart), and teach families to use ORS for diarrhoea." }
    ],
    references: REF_BS,
    examQuestions: [
      "State the approximate percentage of body weight that is water and list its functions.",
      "Describe the body-fluid compartments and their relative sizes.",
      "Name the major electrolytes and a key function of each.",
      "Explain fluid balance and how the body regulates it.",
      "What is oral rehydration solution and why is it important?"
    ],
    assessment: [
      { type: "mcq", q: "Water makes up approximately what percentage of adult body weight?", options: ["20%", "40%", "60%", "90%"], answer: 2, rationale: "About 60% of adult body weight is water." },
      { type: "mcq", q: "Most body water is found:", options: ["In plasma", "Inside the cells (intracellular)", "In the bladder", "In the gut"], answer: 1, rationale: "About two-thirds of body water is intracellular." },
      { type: "mcq", q: "The main positive ion (cation) of the extracellular fluid is:", options: ["Potassium", "Sodium", "Calcium", "Magnesium"], answer: 1, rationale: "Sodium (Na⁺) is the main ECF cation and governs fluid volume." },
      { type: "mcq", q: "The main positive ion inside cells (intracellular) is:", options: ["Sodium", "Potassium", "Chloride", "Bicarbonate"], answer: 1, rationale: "Potassium (K⁺) is the principal intracellular cation." },
      { type: "mcq", q: "Which electrolyte abnormality is most dangerous to the heart?", options: ["Abnormal potassium", "Low chloride", "High magnesium only", "Low phosphate"], answer: 0, rationale: "Abnormal potassium (high or low) can cause fatal cardiac arrhythmias." },
      { type: "mcq", q: "The main organ regulating fluid balance is the:", options: ["Liver", "Kidney", "Lung", "Skin"], answer: 1, rationale: "The kidneys are the chief regulator of water and electrolyte balance." },
      { type: "mcq", q: "Which hormone conserves body water by the kidneys?", options: ["Insulin", "Antidiuretic hormone (ADH)", "Glucagon", "Thyroxine"], answer: 1, rationale: "ADH increases water reabsorption, conserving water." },
      { type: "mcq", q: "Signs of dehydration include:", options: ["Oedema and raised BP", "Dry mouth, thirst and concentrated urine", "Weight gain", "Bounding pulse"], answer: 1, rationale: "Dehydration causes thirst, dry mucous membranes, low/concentrated urine and falling BP." },
      { type: "mcq", q: "Oral rehydration solution (ORS) contains water, salts and:", options: ["Protein", "Glucose", "Fat", "Calcium only"], answer: 1, rationale: "Glucose in ORS drives sodium-and-water absorption in the gut." },
      { type: "mcq", q: "Excess fluid retention causing tissue swelling is called:", options: ["Dehydration", "Oedema", "Diuresis", "Acidosis"], answer: 1, rationale: "Fluid overload causes oedema (swelling) and can raise BP and cause breathlessness." },
      { type: "fill", q: "Fluid located outside the cells is called ______ fluid.", accept: ["extracellular"], rationale: "Extracellular fluid (interstitial + plasma) is about one-third of body water." },
      { type: "fill", q: "Charts recording a patient's fluid intake and output are called ______ balance charts.", accept: ["fluid"], rationale: "Fluid balance (intake-output) charts track hydration status." }
    ]
  },
  {
    id: "bs-15-gases",
    unit: "Unit 3 · Applied Chemistry in Nursing",
    title: "Oxygen, Carbon Dioxide & Medical Gases",
    readMinutes: 18,
    summary: "The composition of air, the properties and clinical use of oxygen and carbon dioxide, other medical gases, behaviour of gases, and gas safety.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The composition of air", p: "Ordinary air is a mixture of gases — about 78% nitrogen, 21% oxygen and 1% other gases (including a small but vital amount of carbon dioxide and water vapour). Of these, oxygen is the gas the body must have continuously, while carbon dioxide is the waste gas it must remove.", figure: {
        caption: "Figure 15.1 — Approximate composition of air.",
        svg: "<svg viewBox='0 0 360 70' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Composition of air'>" +
          "<rect x='10' y='22' width='340' height='34' rx='4' fill='none' stroke='#6B7785'/>" +
          "<rect x='12' y='24' width='263' height='30' fill='#2E63B8'/><text x='143' y='44' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#fff'>Nitrogen ~78%</text>" +
          "<rect x='275' y='24' width='71' height='30' fill='#16A34A'/><text x='310' y='44' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#fff'>O₂ 21%</text>" +
          "<text x='250' y='16' font-family='Inter' font-size='9' fill='#6B7785'>~1% other (incl. CO₂)</text>" +
          "</svg>"
      } },
      { h: "Oxygen", p: "Oxygen is a colourless, odourless gas essential for cellular respiration, in which cells use it to release energy from food. Oxygen itself does not burn, but it strongly supports combustion — fires burn fiercely in oxygen-rich air. About 21% of air is oxygen." },
      { h: "Medical oxygen", p: "Oxygen is given as a medicine to patients who are short of oxygen (hypoxia), for example in breathing problems, heart conditions or shock. It is supplied either piped from a central supply or compressed in cylinders, and delivered through devices such as nasal cannulae or masks, with the flow rate prescribed. Because oxygen supports fire, there must be no smoking, naked flames, sparks or oil/grease near it." },
      { h: "Carbon dioxide", p: "Carbon dioxide (CO₂) is the waste gas produced by cells during respiration and breathed out by the lungs. It is important in two ways: a rise in blood CO₂ is the main stimulus that drives breathing, and CO₂ dissolves to form carbonic acid/bicarbonate, helping control blood pH (acid-base balance). Medically, CO₂ is used to inflate the abdomen during keyhole (laparoscopic) surgery." },
      { h: "Other medical gases", list: [
        "Nitrogen — makes up most of the air; chemically inert and not used by the body for respiration.",
        "Nitrous oxide — 'laughing gas', used with oxygen for analgesia and anaesthesia; the 50:50 mix with oxygen (Entonox) is used for pain relief, e.g. in labour.",
        "Medical air and heliox (helium-oxygen) are used in specific respiratory situations."
      ] },
      { h: "Behaviour of gases", p: "Gases have no fixed shape or volume, are easily compressed, expand when heated, and diffuse to fill their container. These properties matter clinically: gases are stored compressed under high pressure in cylinders; they expand if warmed; and they diffuse across the thin walls of the alveoli during gas exchange (Boyle's law also governs how the lungs and syringes draw gas in)." },
      { h: "Gas safety", p: "Compressed gas cylinders are colour-coded and must be handled carefully — kept upright and secured, away from heat, and oxygen kept away from oil, grease and flames. Oxygen-enriched areas are a serious fire risk. Nurses check the gas, flow rate and connections, and follow strict no-smoking and fire-safety rules around oxygen." },
      { h: "Nursing relevance", p: "Nurses give and monitor oxygen therapy safely (correct device, flow and fire precautions), understand why rising CO₂ drives breathing, assist with Entonox for pain relief, and handle cylinders correctly. Misuse of oxygen — wrong dose or a fire — can be fatal." }
    ],
    references: REF_BS,
    examQuestions: [
      "State the approximate composition of air.",
      "Describe the properties and medical uses of oxygen, and the fire precautions required.",
      "Explain the importance of carbon dioxide in breathing and acid-base balance.",
      "Name three medical gases other than oxygen and a use of each.",
      "List the safety precautions for handling oxygen and gas cylinders."
    ],
    assessment: [
      { type: "mcq", q: "The approximate percentage of oxygen in air is:", options: ["1%", "21%", "50%", "78%"], answer: 1, rationale: "Air is about 21% oxygen and 78% nitrogen." },
      { type: "mcq", q: "Regarding fire, oxygen:", options: ["Is flammable and burns", "Does not burn but supports combustion", "Puts out all fires", "Has no effect on fire"], answer: 1, rationale: "Oxygen does not burn itself but vigorously supports combustion — a fire hazard." },
      { type: "mcq", q: "Oxygen is given as a medicine mainly to treat:", options: ["Hypoxia", "Dehydration", "Infection", "Pain"], answer: 0, rationale: "Supplemental oxygen treats hypoxia (low oxygen)." },
      { type: "mcq", q: "The main stimulus that drives normal breathing is a rise in blood:", options: ["Oxygen", "Carbon dioxide", "Glucose", "Calcium"], answer: 1, rationale: "Rising CO₂ (and falling pH) is the chief drive to breathe." },
      { type: "mcq", q: "The gas making up most of the air is:", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], answer: 2, rationale: "Nitrogen is about 78% of air." },
      { type: "mcq", q: "Entonox, used for pain relief in labour, is a mixture of oxygen and:", options: ["Carbon dioxide", "Nitrous oxide", "Nitrogen", "Helium"], answer: 1, rationale: "Entonox is a 50:50 mix of nitrous oxide and oxygen." },
      { type: "mcq", q: "A key fire precaution with oxygen therapy is:", options: ["Keep it warm", "No smoking, flames, sparks, oil or grease nearby", "Add alcohol", "Store it horizontally near heat"], answer: 1, rationale: "Oxygen supports combustion, so flames, sparks and oil/grease must be kept away." },
      { type: "mcq", q: "Carbon dioxide helps control blood pH because it forms:", options: ["Hydrochloric acid", "Carbonic acid / bicarbonate", "Sodium hydroxide", "Lactic acid"], answer: 1, rationale: "CO₂ dissolves to form carbonic acid/bicarbonate, central to acid-base balance." },
      { type: "mcq", q: "Medical gases are stored in cylinders under:", options: ["Vacuum", "High pressure", "No pressure", "Negative pressure"], answer: 1, rationale: "Gases are compressed under high pressure; a regulator reduces it for delivery." },
      { type: "mcq", q: "Gas exchange in the lungs occurs by:", options: ["Active transport", "Diffusion across the alveoli", "Filtration", "Osmosis of gas"], answer: 1, rationale: "Oxygen and CO₂ diffuse across the thin alveolar walls down their gradients." },
      { type: "fill", q: "The waste gas removed by the lungs during breathing is ______.", accept: ["carbon dioxide", "co2", "co₂"], rationale: "Carbon dioxide is the respiratory waste gas exhaled by the lungs." },
      { type: "fill", q: "Although it does not burn, oxygen strongly supports ______.", accept: ["combustion", "burning", "fire"], rationale: "Oxygen supports combustion, making it a fire hazard." }
    ]
  },
  {
    id: "bs-16-biomolecules",
    unit: "Unit 4 · Biochemistry & Infection Chemistry",
    title: "Biomolecules, Enzymes & Vitamins",
    readMinutes: 20,
    summary: "The major biomolecules — carbohydrates, proteins and lipids — and their energy values, enzymes as biological catalysts, vitamins and minerals, and deficiency diseases.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Biomolecules overview", p: "The body is built from and runs on large organic molecules called biomolecules. The three energy-providing macronutrients are carbohydrates, proteins and lipids (fats); together with water, vitamins and minerals they make up a balanced diet. Each macronutrient has a distinct role and energy value." },
      { h: "Carbohydrates", p: "Carbohydrates are the body's main, quickest source of energy, providing about 4 kilocalories per gram. They range from simple sugars — monosaccharides such as glucose and disaccharides such as sucrose — to complex polysaccharides such as starch (in rice and bread) and glycogen (the storage form in liver and muscle). Glucose is the chief fuel for cells, especially the brain." },
      { h: "Proteins", p: "Proteins are made of building blocks called amino acids and provide about 4 kilocalories per gram. They are mainly used for growth and repair of tissues, and to make enzymes, antibodies, many hormones and haemoglobin. Good sources include meat, fish, eggs, milk and pulses. Adequate protein is essential for wound healing." },
      { h: "Lipids (fats)", p: "Lipids include fats and oils and are the most energy-dense nutrient, giving about 9 kilocalories per gram. They form a long-term energy store, build cell membranes (phospholipids and cholesterol), insulate the body and cushion organs, and are needed to absorb the fat-soluble vitamins (A, D, E and K). Excess saturated fat, however, raises cardiovascular risk." },
      { h: "Enzymes", p: "Enzymes are proteins that act as biological catalysts, speeding up the body's chemical reactions without being used up. Each enzyme is specific to its reaction (the 'lock and key' idea), and each works best at a particular temperature and pH — for example, the stomach enzyme pepsin works in acid, while pancreatic enzymes work in the alkaline small intestine. Heat or extreme pH can denature (destroy) an enzyme.", figure: { caption: "Figure 16.1 — Macronutrients and their approximate energy values. Add a nutrition chart if available.", placeholder: true } },
      { h: "Vitamins", p: "Vitamins are organic substances needed in small amounts for health; the body cannot make most of them, so they must come from the diet. They are grouped as fat-soluble (A, D, E, K — stored in the body) and water-soluble (the B-complex and C — not stored, so needed regularly). Each has specific roles, such as vitamin C for tissue repair and vitamin K for clotting." },
      { h: "Minerals and deficiency diseases", list: [
        "Calcium and phosphorus — bones and teeth; calcium also for clotting and muscle.",
        "Iron — part of haemoglobin; deficiency causes anaemia.",
        "Iodine — needed for thyroid hormones; deficiency causes goitre.",
        "Vitamin deficiency diseases: vitamin C → scurvy; vitamin D → rickets (children); vitamin A → night blindness; vitamin B1 (thiamine) → beriberi."
      ] },
      { h: "Nursing relevance", p: "This biochemistry underpins nutrition care: balancing carbohydrate, protein and fat; ensuring enough protein and vitamin C for wound healing; managing carbohydrate intake in diabetes; recognising and preventing deficiency diseases (e.g. iron-deficiency anaemia, common in pregnancy); and understanding that enzyme blood tests can indicate organ damage." }
    ],
    references: REF_BS,
    examQuestions: [
      "Name the three energy-giving macronutrients and state the energy value of each.",
      "Describe the structure and functions of proteins.",
      "Why are lipids important in the body despite their high energy value?",
      "What is an enzyme? State the factors that affect enzyme activity.",
      "Classify vitamins and name one deficiency disease for any three vitamins."
    ],
    assessment: [
      { type: "mcq", q: "The body's main and quickest source of energy is:", options: ["Protein", "Carbohydrate", "Fat", "Vitamins"], answer: 1, rationale: "Carbohydrates are the main, readily available energy source (glucose)." },
      { type: "mcq", q: "Which nutrient provides the most energy per gram (~9 kcal/g)?", options: ["Carbohydrate", "Protein", "Fat (lipid)", "Vitamin"], answer: 2, rationale: "Fat yields ~9 kcal/g; carbohydrate and protein ~4 kcal/g each." },
      { type: "mcq", q: "The building blocks of proteins are:", options: ["Fatty acids", "Amino acids", "Monosaccharides", "Glycerol"], answer: 1, rationale: "Proteins are made of amino acids." },
      { type: "mcq", q: "The storage form of carbohydrate in the liver and muscle is:", options: ["Starch", "Glycogen", "Sucrose", "Cellulose"], answer: 1, rationale: "Glycogen is the animal storage polysaccharide; starch is the plant form." },
      { type: "mcq", q: "Enzymes are best described as:", options: ["Carbohydrates that store energy", "Proteins that catalyse reactions", "Fats in membranes", "Minerals"], answer: 1, rationale: "Enzymes are protein biological catalysts, specific and reusable." },
      { type: "mcq", q: "Enzyme activity is reduced or stopped by:", options: ["Optimal temperature", "Extremes of heat or pH (denaturation)", "Its specific substrate", "Normal body pH"], answer: 1, rationale: "High heat or extreme pH denatures enzymes, destroying their activity." },
      { type: "mcq", q: "Which vitamins are fat-soluble?", options: ["B and C", "A, D, E and K", "C and K", "All B vitamins"], answer: 1, rationale: "Fat-soluble vitamins are A, D, E and K; B-complex and C are water-soluble." },
      { type: "mcq", q: "Deficiency of vitamin C causes:", options: ["Rickets", "Scurvy", "Goitre", "Beriberi"], answer: 1, rationale: "Vitamin C deficiency causes scurvy; vitamin D deficiency causes rickets." },
      { type: "mcq", q: "Iron is required mainly to make:", options: ["Insulin", "Haemoglobin", "Bile", "Thyroxine"], answer: 1, rationale: "Iron is part of haemoglobin; deficiency causes anaemia." },
      { type: "mcq", q: "A nutrient especially important for wound healing is:", options: ["Protein (and vitamin C)", "Cholesterol", "Starch only", "Sodium"], answer: 0, rationale: "Protein and vitamin C are key for tissue repair and wound healing." },
      { type: "fill", q: "Biological catalysts made of protein are called ______.", accept: ["enzymes", "enzyme"], rationale: "Enzymes catalyse the body's reactions without being consumed." },
      { type: "fill", q: "Deficiency of vitamin D in children causes ______.", accept: ["rickets"], rationale: "Vitamin D deficiency causes rickets (soft, deformed bones) in children." }
    ]
  },
  {
    id: "bs-17-disinfection",
    unit: "Unit 4 · Biochemistry & Infection Chemistry",
    title: "Antiseptics, Disinfectants & Sterilisation",
    readMinutes: 19,
    summary: "Key definitions, common antiseptics and disinfectants and how they act, methods of sterilisation, factors affecting their action, and the central role of hand hygiene.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key definitions", list: [
        "Antiseptic — a chemical applied to living tissue (skin, wounds) to kill or inhibit microbes (e.g. before injection or surgery).",
        "Disinfectant — a chemical used on non-living surfaces and equipment to destroy most microbes (usually too harsh for skin).",
        "Disinfection — a process that reduces microbes to a safe level but may not kill all spores.",
        "Sterilisation — a process that kills ALL micro-organisms, including resistant bacterial spores.",
        "Sanitisation — reducing microbes to a level judged safe for public health (e.g. cleaning)."
      ] },
      { h: "Common antiseptics", p: "Antiseptics used on skin and wounds include alcohol (about 70%, e.g. for skin before injection), chlorhexidine (skin and hand preparation), povidone-iodine (skin and wound preparation) and hydrogen peroxide (wound cleansing). They must be effective yet gentle enough not to damage tissue." },
      { h: "Common disinfectants", p: "Disinfectants used on surfaces and equipment include sodium hypochlorite (bleach) for surfaces and spills, phenolic compounds, and glutaraldehyde for heat-sensitive instruments. These are stronger and often more toxic than antiseptics, so they are not used on skin and require care and ventilation." },
      { h: "How they act", p: "Antiseptics and disinfectants kill or inhibit microbes by chemical action: denaturing (coagulating) microbial proteins and enzymes (alcohol, heat, glutaraldehyde), oxidising vital cell components (hypochlorite, hydrogen peroxide, iodine), or disrupting the microbial cell membrane. Damaging these essential structures stops the microbe functioning or kills it." },
      { h: "Methods of sterilisation", list: [
        "Moist heat — the autoclave uses pressurised steam (about 121 °C) and is the most common, reliable method for instruments and dressings.",
        "Dry heat — the hot-air oven sterilises glassware and metal that steam would damage.",
        "Radiation — gamma rays sterilise pre-packed single-use items industrially.",
        "Filtration — removes microbes from heat-sensitive fluids (e.g. some drugs).",
        "Chemical (cold) sterilisation — agents such as ethylene oxide gas or glutaraldehyde for delicate, heat-sensitive equipment such as endoscopes."
      ], figure: { caption: "Figure 17.1 — Antisepsis vs disinfection vs sterilisation. Add a comparison chart if available.", placeholder: true } },
      { h: "Factors affecting effectiveness", p: "How well a chemical or process works depends on its concentration and the contact time allowed, the temperature, and especially the presence of organic matter (blood, pus, dirt), which shields microbes and inactivates many agents. This is why instruments must be thoroughly cleaned before disinfection or sterilisation, and why correct dilution and contact time matter." },
      { h: "Hand hygiene — the most important measure", p: "Despite all these methods, the single most effective way to prevent the spread of infection is hand hygiene. Washing with soap and water removes dirt and microbes, while an alcohol-based hand rub rapidly kills most microbes on visibly clean hands. Nurses perform hand hygiene at the recognised key moments around patient care." },
      { h: "Nursing relevance", p: "These principles guide everyday infection prevention: choosing an antiseptic for skin and a disinfectant for surfaces, preparing skin before injections and procedures, ensuring instruments are cleaned and correctly sterilised, mixing solutions to the right strength and contact time, and — above all — practising rigorous hand hygiene." }
    ],
    references: REF_BS,
    examQuestions: [
      "Define antiseptic, disinfectant and sterilisation.",
      "Give two examples each of common antiseptics and disinfectants.",
      "Explain how antiseptics and disinfectants kill or inhibit microbes.",
      "Describe the methods of sterilisation, including moist and dry heat.",
      "Why is hand hygiene considered the most important infection-control measure?"
    ],
    assessment: [
      { type: "mcq", q: "A chemical applied to living tissue to kill or inhibit microbes is a/an:", options: ["Disinfectant", "Antiseptic", "Detergent", "Solvent"], answer: 1, rationale: "Antiseptics are used on living tissue; disinfectants on non-living surfaces." },
      { type: "mcq", q: "Sterilisation is defined as a process that:", options: ["Reduces most microbes", "Kills all microbes including spores", "Cleans visible dirt", "Works only on skin"], answer: 1, rationale: "Sterilisation destroys ALL micro-organisms, including resistant spores." },
      { type: "mcq", q: "The most common reliable method of sterilising instruments is the:", options: ["Hot-air oven", "Autoclave (moist heat)", "Bleach soak", "UV lamp"], answer: 1, rationale: "The autoclave uses pressurised steam (~121 °C) and is the standard method." },
      { type: "mcq", q: "Which is commonly used as a skin antiseptic before injection?", options: ["Sodium hypochlorite (bleach)", "70% alcohol", "Glutaraldehyde", "Phenol"], answer: 1, rationale: "About 70% alcohol is a common skin antiseptic; bleach/glutaraldehyde are disinfectants." },
      { type: "mcq", q: "Sodium hypochlorite (bleach) is best described as a:", options: ["Skin antiseptic", "Surface disinfectant", "Sterilant for skin", "Antibiotic"], answer: 1, rationale: "Bleach is a surface disinfectant, too harsh for skin." },
      { type: "mcq", q: "Heat-sensitive instruments such as endoscopes are often sterilised using:", options: ["Autoclave", "Hot-air oven", "Chemical agents (e.g. glutaraldehyde/ethylene oxide)", "Boiling only"], answer: 2, rationale: "Cold chemical sterilisation suits delicate, heat-sensitive equipment." },
      { type: "mcq", q: "The effectiveness of a disinfectant is reduced most by the presence of:", options: ["Clean water", "Organic matter (blood, pus, dirt)", "Light", "Air"], answer: 1, rationale: "Organic matter shields microbes and inactivates many agents, so cleaning must precede disinfection." },
      { type: "mcq", q: "The single most important measure to prevent the spread of infection is:", options: ["Wearing gloves only", "Hand hygiene", "Using antibiotics", "Mopping floors"], answer: 1, rationale: "Hand hygiene (washing or alcohol rub) is the most effective infection-control measure." },
      { type: "mcq", q: "Many antiseptics and disinfectants kill microbes by:", options: ["Feeding them", "Denaturing their proteins or oxidising their cells", "Cooling them", "Adding water"], answer: 1, rationale: "They denature microbial proteins/enzymes or oxidise and disrupt cell structures." },
      { type: "mcq", q: "Sterilisation of pre-packed single-use disposables is often done industrially by:", options: ["Boiling", "Gamma radiation", "Hand washing", "Refrigeration"], answer: 1, rationale: "Gamma radiation sterilises sealed single-use medical items." },
      { type: "fill", q: "A chemical used on non-living surfaces and equipment to destroy microbes is a ______.", accept: ["disinfectant"], rationale: "Disinfectants act on inanimate surfaces; antiseptics act on living tissue." },
      { type: "fill", q: "Killing ALL micro-organisms including spores is called ______.", accept: ["sterilisation", "sterilization"], rationale: "Sterilisation destroys all microbes, including resistant spores." }
    ]
  }
];
