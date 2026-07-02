window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_PHY = [
  "Hall JE, Hall ME. Guyton and Hall Textbook of Medical Physiology. Elsevier.",
  "Tortora GJ, Derrickson B. Principles of Anatomy and Physiology. Wiley.",
  "Waugh A, Grant A. Ross & Wilson Anatomy and Physiology in Health and Illness. Elsevier."
];

window.Academic.topics["bsc-nursing/physiology"] = [

  /* TOPIC 1 */
  {
    "id": "phy-01-intro-homeostasis",
    "unit": "Unit 1 · General & Cellular Physiology",
    "title": "Introduction to Physiology & Homeostasis",
    "readMinutes": 24,
    "summary": "Physiology as the study of function; levels of organisation; the internal environment; homeostasis and its regulation by negative and positive feedback; components, gain and time-course of control systems; set-point resetting; and the central relevance of homeostasis to nursing assessment and patient care.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is physiology?",
        "p": "Physiology is the science of how living organisms and their parts function — the mechanisms by which molecules, cells, tissues, organs and systems work, and how they are regulated and integrated to sustain life. Where anatomy asks 'what is it and where is it?', physiology asks 'how does it work and how is it controlled?'. Physiology is mechanistic (it seeks cause-and-effect explanations), quantitative (it deals in measurable variables and normal ranges) and integrative (it explains how systems cooperate). Pathophysiology is the study of disordered function; pharmacology studies how drugs alter it. For nursing, physiology is the foundation for understanding normal function, recognising when function is disturbed, interpreting vital signs and investigations, and predicting the effects of treatment."
      },
      {
        "h": "Sub-divisions of physiology",
        "list": [
          "Cell/molecular physiology — function of membranes, organelles, signalling and genes.",
          "Systems physiology — cardiovascular, respiratory, renal, neural, endocrine, etc.",
          "Developmental physiology — how function changes from fetus to old age.",
          "Pathophysiology — the functional changes that produce the signs and symptoms of disease.",
          "Applied/clinical physiology — physiology as used at the bedside (exercise, altitude, critical care)."
        ]
      },
      {
        "h": "Levels of structural organisation",
        "list": [
          "Chemical level — atoms and molecules (water, ions, proteins, nucleic acids) that form the basis of function.",
          "Cellular level — the cell is the smallest living, functional unit of the body.",
          "Tissue level — groups of similar cells performing a common function (epithelial, connective, muscle, nervous).",
          "Organ level — different tissues combined into a structure with a specific function.",
          "System level — organs working together (e.g. cardiovascular, respiratory).",
          "Organismal level — all systems integrated into a living person."
        ]
      },
      {
        "h": "The internal environment",
        "p": "Claude Bernard described the 'milieu intérieur' — the extracellular fluid (ECF) that bathes every cell. Cells do not contact the outside world directly; they live in the ECF, from which they take oxygen and nutrients and into which they release waste. Life depends on keeping the composition of this internal environment within narrow limits so that cellular enzymes and processes work optimally. Key defended variables include temperature (about 37 °C), pH (7.35–7.45), plasma glucose (about 4–7 mmol/L fasting), sodium (135–145 mmol/L), potassium (3.5–5.0 mmol/L), calcium, oxygen and osmolality (about 275–295 mOsm/kg)."
      },
      {
        "h": "Homeostasis defined",
        "p": "Homeostasis (Walter Cannon) is the maintenance of a relatively stable internal environment despite continuous change inside and outside the body. It is a dynamic steady state, not a fixed one: controlled variables oscillate in a narrow band around a set point. Almost every organ contributes — the lungs and kidneys regulate pH, the kidneys regulate fluid and electrolytes, the endocrine system regulates glucose and calcium, and the skin and hypothalamus regulate temperature. Health can be seen as successful homeostasis; illness as its failure or the cost of defending it."
      },
      {
        "h": "Components of a control system",
        "p": "A homeostatic control system has three parts working in a loop.",
        "list": [
          "Receptor (sensor) — detects change in the controlled variable (the stimulus) and sends afferent input.",
          "Control centre (integrator) — often the brain or an endocrine gland; holds the set point, compares the input against it, and decides the response (via efferent output).",
          "Effector — a muscle or gland that carries out the response (output) to correct the change."
        ],
        "figure": {
          "caption": "A negative-feedback homeostatic loop: a receptor detects change, the control centre compares it with the set point, and the effector restores the variable toward normal.",
          "svg": "<svg viewBox=\"0 0 560 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Negative feedback loop with receptor, control centre and effector.\"><defs><marker id=\"phArr1\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"20\" y=\"80\" width=\"130\" height=\"55\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"85\" y=\"103\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">RECEPTOR</text><text x=\"85\" y=\"121\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">detects change</text><rect x=\"215\" y=\"80\" width=\"130\" height=\"55\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"280\" y=\"103\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">CONTROL CENTRE</text><text x=\"280\" y=\"121\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">compares to set point</text><rect x=\"410\" y=\"80\" width=\"130\" height=\"55\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"475\" y=\"103\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">EFFECTOR</text><text x=\"475\" y=\"121\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">restores normal</text><line x1=\"150\" y1=\"107\" x2=\"211\" y2=\"107\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr1)\"/><line x1=\"345\" y1=\"107\" x2=\"406\" y2=\"107\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr1)\"/><path d=\"M475 135 L475 175 L85 175 L85 137\" fill=\"none\" stroke=\"#22C55E\" stroke-width=\"2.5\" marker-end=\"url(#phArr1)\"/><text x=\"280\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">feedback: corrected variable re-sensed</text></svg>"
        }
      },
      {
        "h": "Negative feedback",
        "p": "Negative feedback is the main mechanism of homeostasis: the response opposes (reverses) the original change and returns the variable toward its set point, then switches off. Examples: a rise in body temperature triggers sweating and cutaneous vasodilation to cool the body; a rise in blood glucose triggers insulin release, which lowers glucose; a fall in blood pressure triggers the baroreflex which raises it. Negative feedback keeps variables stable, self-limiting and oscillating gently around the set point."
      },
      {
        "h": "Gain, sensitivity and lag",
        "p": "The effectiveness of a control system is described by its GAIN — how strongly it corrects a disturbance (gain = correction ÷ residual error). A high-gain system (like temperature control) holds the variable very close to normal. Systems also differ in their time-course: neural reflexes act in milliseconds to seconds, hormonal responses in minutes to hours, and genetic/renal responses over days. A delay between sensing and correcting produces overshoot and oscillation, which is why some variables swing before settling."
      },
      {
        "h": "Positive feedback",
        "p": "In positive feedback the response reinforces (amplifies) the original change, driving the variable further from the starting point until a definite end-point is reached. It is used for events that must go rapidly to completion: uterine contractions in labour (oxytocin), the clotting cascade, the upstroke of the nerve action potential, and the surge of luteinising hormone before ovulation. Positive feedback is normally short-lived and self-terminating; uncontrolled positive feedback (e.g. the vicious cycle of severe cardiogenic shock, where a failing heart lowers its own coronary perfusion) is dangerous."
      },
      {
        "h": "Feedforward and set-point resetting",
        "p": "Feedforward control anticipates change and acts before the variable is disturbed (e.g. heart rate and ventilation rising at the very start of exercise, or insulin release beginning as food is tasted). Set points can also be reset physiologically — in fever the hypothalamic 'thermostat' is reset to a higher temperature by pyrogens (prostaglandin E2), so the body actively warms itself; this is why a patient with a rising fever shivers and feels cold despite a raised temperature."
      },
      {
        "h": "Control by the nervous vs endocrine systems",
        "p": "The two great control systems differ in speed and duration. The nervous system uses electrical impulses and neurotransmitters for fast, brief, precisely targeted control (milliseconds). The endocrine system uses hormones carried in blood for slower, longer-lasting, widespread control (minutes to days). They overlap and cooperate — for example the hypothalamus links them, and adrenaline acts as both a transmitter and a hormone."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Core body temperature ~37 °C (36.1–37.2 °C oral).",
          "Arterial pH 7.35–7.45; plasma osmolality 275–295 mOsm/kg.",
          "Fasting plasma glucose ~4–7 mmol/L.",
          "Sodium 135–145 mmol/L; potassium 3.5–5.0 mmol/L.",
          "Total body water ~60% of body weight; resting heart rate 60–100/min; BP ~120/80 mmHg."
        ]
      },
      {
        "h": "Clinical relevance",
        "p": "Most acute illness is a failure of one or more homeostatic loops, and much of nursing and medicine is aimed at supporting them: oxygen for hypoxia, IV fluids for hypovolaemia, insulin for hyperglycaemia, cooling or warming for temperature disturbance, and electrolyte correction. Homeostatic RESERVE — the capacity to compensate — is reduced in the very young, the elderly, and the critically ill; these patients decompensate quickly and need closer monitoring. Understanding feedback also explains adverse effects, such as rebound and adrenal suppression after abrupt withdrawal of long-term steroids."
      },
      {
        "h": "Nursing application",
        "list": [
          "Vital signs (temperature, pulse, respiration, blood pressure, oxygen saturation) are direct readings of homeostatic status; trends matter more than single values.",
          "Early warning scores translate homeostatic derangement into a graded escalation of care.",
          "Recognising loss of homeostatic reserve (extremes of age, sepsis, multi-organ failure) guides closer observation.",
          "Understanding set-point resetting explains why a feverish patient shivers and why cooling a shivering patient can be counter-productive."
        ]
      },
      {
        "h": "Key terms",
        "list": [
          "Set point — the ideal value the body defends.",
          "Extracellular fluid (ECF) — the internal environment of the cells.",
          "Dynamic steady state — stable overall despite constant small change.",
          "Negative feedback — response opposes the change (stabilising).",
          "Positive feedback — response amplifies the change (to an end-point).",
          "Gain — the strength of a control system's correction."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Define physiology and homeostasis. Explain the components of a homeostatic control system with a labelled diagram.",
      "Differentiate between negative and positive feedback, giving two physiological examples of each and explaining their opposite outcomes.",
      "Describe the concept of the internal environment, list the main defended variables with their normal ranges, and explain their importance to life.",
      "Explain how the body regulates a named variable (e.g. body temperature or blood glucose) by negative feedback, including receptor, control centre and effector.",
      "Discuss the concept of homeostatic reserve and its relevance to nursing assessment and monitoring of vulnerable patients."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A nurse notes a patient's blood glucose falls after an insulin dose, which then stops further insulin release. This self-limiting correction is an example of:",
        "options": [
          "Positive feedback",
          "Feedforward control",
          "Negative feedback",
          "Set-point resetting"
        ],
        "answer": 2,
        "rationale": "Insulin lowers glucose and the falling glucose removes the stimulus — a classic negative-feedback loop that opposes and then switches off the change."
      },
      {
        "type": "mcq",
        "q": "The extracellular fluid is best described as the body's:",
        "options": [
          "Internal environment that bathes the cells",
          "Waste store",
          "Site of DNA storage",
          "Main energy source"
        ],
        "answer": 0,
        "rationale": "Cells exchange substances with the ECF (the milieu intérieur); life depends on keeping its composition stable."
      },
      {
        "type": "mcq",
        "q": "In a homeostatic loop, the structure that holds the set point and compares it with sensor input is the:",
        "options": [
          "Receptor",
          "Effector",
          "Stimulus",
          "Control centre"
        ],
        "answer": 3,
        "rationale": "The control centre (integrator) compares afferent input to the set point and directs the effector."
      },
      {
        "type": "mcq",
        "q": "A patient with early sepsis maintains a normal blood pressure only by marked tachycardia and vasoconstriction. This illustrates:",
        "options": [
          "Loss of all homeostatic control",
          "Use of homeostatic reserve to compensate",
          "Positive feedback",
          "A raised set point"
        ],
        "answer": 1,
        "rationale": "The body is drawing on compensatory reserve; when reserve is exhausted, blood pressure will fall — hence the need for close monitoring."
      },
      {
        "type": "mcq",
        "q": "Which feature distinguishes positive from negative feedback?",
        "options": [
          "It always harms the body",
          "It never involves hormones",
          "The response amplifies the original change toward an end-point",
          "It is faster than all reflexes"
        ],
        "answer": 2,
        "rationale": "Positive feedback reinforces the change (e.g. labour, clotting), driving it to completion rather than reversing it."
      },
      {
        "type": "mcq",
        "q": "During fever, a patient shivers and feels cold despite a temperature of 39 °C because:",
        "options": [
          "The hypothalamic set point has been reset higher by pyrogens",
          "Negative feedback has failed",
          "The skin has lost its receptors",
          "Insulin has risen"
        ],
        "answer": 0,
        "rationale": "Pyrogens raise the set point; the body perceives itself as too cold relative to the new target and generates heat by shivering."
      },
      {
        "type": "mcq",
        "q": "Heart rate and ventilation begin to rise the instant exercise starts, before CO2 or lactate change. This anticipatory control is:",
        "options": [
          "Negative feedback",
          "Positive feedback",
          "Set-point failure",
          "Feedforward control"
        ],
        "answer": 3,
        "rationale": "Feedforward control acts in anticipation of a disturbance rather than in response to a measured error."
      },
      {
        "type": "mcq",
        "q": "A high-gain homeostatic system is one that:",
        "options": [
          "Responds slowly and weakly",
          "Holds the variable very close to its set point",
          "Uses only positive feedback",
          "Has no receptors"
        ],
        "answer": 1,
        "rationale": "Gain measures corrective strength; a high-gain system leaves only a small residual error."
      },
      {
        "type": "mcq",
        "q": "Compared with the nervous system, endocrine control is generally:",
        "options": [
          "Faster and briefer",
          "Only electrical",
          "Slower, longer-lasting and more widespread",
          "Independent of blood flow"
        ],
        "answer": 2,
        "rationale": "Hormones travel in blood, giving slower onset but sustained, body-wide effects; nerves give fast, brief, targeted control."
      },
      {
        "type": "mcq",
        "q": "Which set of values represents the tightly defended internal environment?",
        "options": [
          "pH 7.4, temperature 37 °C, Na+ 140 mmol/L",
          "pH 7.0, temperature 40 °C",
          "pH 8.2, glucose 20 mmol/L",
          "K+ 8 mmol/L, osmolality 200 mOsm/kg"
        ],
        "answer": 0,
        "rationale": "Normal defended values are pH 7.35–7.45, ~37 °C, Na+ 135–145 mmol/L; the other options are pathological."
      },
      {
        "type": "fill",
        "q": "A control loop in which the response opposes the original change is called ____ feedback.",
        "accept": [
          "negative"
        ],
        "rationale": "Negative feedback reverses change and is the basis of homeostasis."
      },
      {
        "type": "fill",
        "q": "The strength with which a control system corrects a disturbance is called its ____.",
        "accept": [
          "gain"
        ],
        "rationale": "Gain = correction ÷ residual error; high-gain systems hold variables close to the set point."
      }
    ]
  },

  /* TOPIC 2 */
  {
    "id": "phy-02-cell-transport",
    "unit": "Unit 1 · General & Cellular Physiology",
    "title": "Cell Physiology & Transport Across the Cell Membrane",
    "readMinutes": 25,
    "summary": "Functional cell biology: the plasma membrane and fluid-mosaic model, functions of organelles, ionic composition of body fluids, the resting membrane potential, and the mechanisms of transport across membranes — diffusion, osmosis, facilitated diffusion, primary and secondary active transport, and bulk transport — with tonicity and strong nursing relevance to IV fluids.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "The cell as a functional unit",
        "p": "The cell is the smallest unit that can carry out all life processes — metabolism, growth, response to stimuli, and reproduction. Physiologically the cell must obtain nutrients and oxygen, produce energy (ATP), synthesise proteins, remove wastes, maintain its volume, and communicate with other cells. All of this depends on a selectively permeable plasma membrane that separates the intracellular fluid (ICF) from the extracellular fluid (ECF) and controls what enters and leaves."
      },
      {
        "h": "The plasma membrane — fluid-mosaic model",
        "p": "The membrane is a phospholipid bilayer (hydrophilic phosphate heads facing outward, hydrophobic fatty-acid tails inward) in which proteins float like a mosaic. This structure makes it selectively (semi-)permeable: small, lipid-soluble and uncharged molecules (O2, CO2, N2, steroids, urea, ethanol) cross easily, while ions and large water-soluble molecules need protein channels or carriers. Cholesterol between the phospholipids stabilises fluidity, and carbohydrate chains on outer proteins/lipids form the glycocalyx for recognition and protection."
      },
      {
        "h": "Functions of membrane proteins",
        "list": [
          "Channels — water-filled pores for specific ions (e.g. voltage-gated Na+, K+ channels; aquaporins for water).",
          "Carriers (transporters) — bind and move solutes by changing shape (e.g. glucose transporters, the Na+/K+ pump).",
          "Receptors — bind hormones/transmitters to trigger a cellular response.",
          "Enzymes — catalyse reactions at the membrane surface.",
          "Cell-identity markers (MHC/glycoproteins) — allow recognition of self vs non-self.",
          "Anchoring/junctional proteins — link cells and cytoskeleton (tight, gap and adhesion junctions)."
        ]
      },
      {
        "h": "Functions of major organelles",
        "list": [
          "Nucleus — stores DNA; controls cell activity and protein synthesis (transcription).",
          "Ribosomes — sites of protein synthesis (translation).",
          "Rough endoplasmic reticulum — synthesises and folds membrane/secretory proteins.",
          "Smooth endoplasmic reticulum — lipid and steroid synthesis; calcium storage; detoxification.",
          "Golgi apparatus — modifies, packages and dispatches proteins in vesicles.",
          "Mitochondria — 'powerhouse'; aerobic respiration producing ATP (site of the Krebs cycle and electron transport chain).",
          "Lysosomes — digest worn organelles and engulfed material (autophagy, defence).",
          "Peroxisomes — detoxify and break down fatty acids and hydrogen peroxide.",
          "Cytoskeleton — shape, movement and intracellular transport."
        ]
      },
      {
        "h": "Ionic composition of body fluids",
        "p": "The intracellular fluid (ICF) is rich in potassium (K+ ~140 mmol/L), magnesium and organic phosphate/proteins; the extracellular fluid (ECF) is rich in sodium (Na+ ~140 mmol/L), chloride (~100 mmol/L) and bicarbonate. These steep gradients are set up and maintained by the Na+/K+ pump and store potential energy that the cell uses for transport, signalling and excitability. The gradients also mean small leaks of the 'wrong' ion can be corrected only by spending ATP."
      },
      {
        "h": "Passive transport — no ATP needed",
        "p": "Passive processes move substances DOWN their concentration or electrochemical gradient, using the energy already stored in the gradient.",
        "list": [
          "Simple diffusion — net movement from high to low concentration until evenly spread; gases and lipid-soluble molecules diffuse directly through the bilayer.",
          "Facilitated diffusion — down-gradient movement of ions or polar molecules (e.g. glucose via GLUT carriers) through specific proteins; passive but saturable and specific.",
          "Osmosis — diffusion of water across a selectively permeable membrane from lower solute (higher water) to higher solute (lower water) concentration, often through aquaporins.",
          "Filtration — movement of fluid and solutes through a membrane by hydrostatic pressure (e.g. in the renal glomerulus and capillaries)."
        ],
        "figure": {
          "caption": "Membrane transport: passive processes move substances down the gradient (no ATP); active transport uses ATP to move against the gradient.",
          "svg": "<svg viewBox=\"0 0 560 230\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Classification of membrane transport into passive and active.\"><rect x=\"200\" y=\"15\" width=\"160\" height=\"42\" rx=\"9\" fill=\"#0F4C3A\"/><text x=\"280\" y=\"41\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#FFFFFF\">MEMBRANE TRANSPORT</text><rect x=\"40\" y=\"95\" width=\"200\" height=\"46\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"140\" y=\"115\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#15803D\">PASSIVE (no ATP)</text><text x=\"140\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">down the gradient</text><rect x=\"320\" y=\"95\" width=\"200\" height=\"46\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"420\" y=\"115\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#7C2D12\">ACTIVE (ATP)</text><text x=\"420\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">against the gradient</text><line x1=\"280\" y1=\"57\" x2=\"140\" y2=\"93\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><line x1=\"280\" y1=\"57\" x2=\"420\" y2=\"93\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"140\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">diffusion · osmosis</text><text x=\"140\" y=\"186\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">facilitated diffusion · filtration</text><text x=\"420\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">Na+/K+ pump (primary)</text><text x=\"420\" y=\"186\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">co-transport · endo/exocytosis</text></svg>"
        }
      },
      {
        "h": "Factors affecting diffusion rate",
        "p": "Fick's law tells us that the rate of diffusion is greater with a steeper concentration gradient, a larger surface area, a thinner membrane, and smaller/more lipid-soluble molecules; higher temperature also speeds it. This explains physiological design: the alveoli and glomeruli have huge, thin surfaces to maximise exchange, and why lung fibrosis (thicker membrane) or emphysema (lost surface area) impairs gas transfer."
      },
      {
        "h": "Osmosis, osmolality and osmotic pressure",
        "p": "Osmolality is the number of osmotically active particles per kg of water; normal plasma osmolality is about 275–295 mOsm/kg. Osmotic pressure is the pressure that would just prevent osmosis into a solution — the more solute, the higher the osmotic pull. Because water crosses membranes freely, osmotic gradients set by non-permeating solutes (mainly sodium in the ECF and potassium in the ICF) determine how water is distributed between compartments."
      },
      {
        "h": "Tonicity — clinical importance",
        "p": "Tonicity describes how a solution affects cell VOLUME by osmosis, considering only solutes that cannot cross the membrane. In an isotonic solution (e.g. 0.9% saline, ~308 mOsm/L) cells neither swell nor shrink. In a hypotonic solution water enters and cells swell and may burst (haemolysis of red cells). In a hypertonic solution water leaves and cells shrink (crenation). This directly governs the choice of intravenous fluids and is a key reason nurses must give the prescribed fluid at the prescribed rate.",
        "figure": {
          "caption": "Effect of solution tonicity on a red blood cell: isotonic (no change), hypotonic (swells/haemolysis), hypertonic (shrinks/crenation).",
          "svg": "<svg viewBox=\"0 0 560 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Tonicity effects on red cells.\"><text x=\"280\" y=\"22\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">Tonicity and cell volume</text><circle cx=\"110\" cy=\"90\" r=\"34\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2.5\"/><text x=\"110\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803D\">ISOTONIC</text><text x=\"110\" y=\"166\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">no change</text><circle cx=\"280\" cy=\"90\" r=\"44\" fill=\"#F0FDF4\" stroke=\"#22C55E\" stroke-width=\"2.5\"/><text x=\"280\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">HYPOTONIC</text><text x=\"280\" y=\"166\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">swells / bursts</text><circle cx=\"450\" cy=\"90\" r=\"22\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2.5\"/><text x=\"450\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#7C2D12\">HYPERTONIC</text><text x=\"450\" y=\"166\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">shrinks</text></svg>"
        }
      },
      {
        "h": "Active transport — ATP required",
        "p": "Active transport moves substances AGAINST their gradient, so it needs energy (ATP). In PRIMARY active transport a pump hydrolyses ATP directly — the sodium–potassium pump (Na+/K+-ATPase) expels 3 Na+ and imports 2 K+ per ATP, maintaining the gradients essential for cell volume and excitability and accounting for a large share of resting energy use. Other primary pumps include the Ca2+-ATPase and the H+/K+-ATPase of the stomach. In SECONDARY active transport (co-transport) the energy stored in the Na+ gradient drives another substance uphill — e.g. Na+–glucose and Na+–amino-acid symport in the intestine and kidney, and the Na+/H+ and Na+/Ca2+ antiporters."
      },
      {
        "h": "Bulk (vesicular) transport",
        "list": [
          "Endocytosis — the membrane engulfs material into a vesicle: phagocytosis ('cell eating', e.g. neutrophils/macrophages engulfing bacteria), pinocytosis ('cell drinking' of fluid), and receptor-mediated endocytosis (selective uptake, e.g. LDL cholesterol).",
          "Exocytosis — a vesicle fuses with the membrane to release its contents (e.g. secretion of hormones, digestive enzymes and neurotransmitters), usually triggered by a rise in intracellular calcium."
        ]
      },
      {
        "h": "The resting membrane potential",
        "p": "A living cell membrane is polarised: the inside is negative relative to the outside (about −70 mV in neurons, about −90 mV in cardiac/skeletal muscle). This resting membrane potential arises from three factors: the unequal distribution of ions (high K+ inside, high Na+ outside), the membrane's much greater permeability to K+ than Na+ at rest (so K+ leaks out leaving the inside negative), and the electrogenic Na+/K+ pump. This stored electrochemical energy lets nerve and muscle cells generate action potentials."
      },
      {
        "h": "Clinical relevance — IV fluids and electrolytes",
        "p": "The tonicity of intravenous fluids matters at the bedside: 0.9% saline and Hartmann's solution are isotonic and stay mainly in the ECF; 5% dextrose behaves as free water after the glucose is metabolised and can cause cellular swelling and hyponatraemia if given in excess; hypertonic saline is used cautiously to draw water out of swollen cells (e.g. in severe symptomatic hyponatraemia or raised intracranial pressure). Rapid correction of sodium can itself harm the brain, so rates are prescribed carefully."
      },
      {
        "h": "Nursing application",
        "list": [
          "IV fluid selection depends on tonicity — the wrong fluid or rate can cause dangerous cell swelling or shrinkage.",
          "The Na+/K+ pump underlies excitability, so disturbances of sodium and potassium affect the heart, nerves and muscle (arrhythmias, weakness, confusion).",
          "Phagocytosis and receptor-mediated endocytosis are central to immune defence and drug/hormone uptake.",
          "Understanding diffusion and osmosis explains oedema, dehydration, nasogastric losses, and how drugs cross membranes."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the fluid-mosaic model of the plasma membrane and explain how its structure makes the membrane selectively permeable.",
      "Compare passive and active transport, and explain primary and secondary active transport with examples, including the working of the sodium–potassium pump.",
      "Define osmolality and tonicity. Explain the effect of isotonic, hypotonic and hypertonic solutions on cells, and relate this to the choice of intravenous fluids.",
      "State the factors that affect the rate of diffusion (Fick's law) and give physiological examples of how the body maximises exchange.",
      "Explain how the resting membrane potential is generated and why it is essential for nerve and muscle function."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient is given a rapid infusion of pure water into a vein by mistake. The most likely effect on red cells is that they will:",
        "options": [
          "Shrink (crenate)",
          "Stay unchanged",
          "Swell and haemolyse",
          "Divide rapidly"
        ],
        "answer": 2,
        "rationale": "Pure water is grossly hypotonic; water enters red cells down the osmotic gradient, causing swelling and haemolysis."
      },
      {
        "type": "mcq",
        "q": "Intestinal absorption of glucose that depends on the sodium gradient set up by the Na+/K+ pump is an example of:",
        "options": [
          "Secondary active transport (co-transport)",
          "Simple diffusion",
          "Primary active transport",
          "Osmosis"
        ],
        "answer": 0,
        "rationale": "The Na+ gradient (created by primary active transport) provides the energy to move glucose uphill — secondary active transport."
      },
      {
        "type": "mcq",
        "q": "The Na+/K+-ATPase transports, per molecule of ATP hydrolysed:",
        "options": [
          "2 Na+ out and 3 K+ in",
          "3 Na+ in and 2 K+ out",
          "1 Na+ out and 1 K+ in",
          "3 Na+ out and 2 K+ in"
        ],
        "answer": 3,
        "rationale": "The pump expels 3 sodium ions and imports 2 potassium ions per ATP, making it electrogenic."
      },
      {
        "type": "mcq",
        "q": "Gas transfer is impaired in pulmonary fibrosis mainly because fibrosis:",
        "options": [
          "Increases the surface area",
          "Thickens the respiratory membrane, slowing diffusion",
          "Steepens the O2 gradient",
          "Raises temperature"
        ],
        "answer": 1,
        "rationale": "By Fick's law, a thicker membrane reduces diffusion rate; fibrosis increases membrane thickness."
      },
      {
        "type": "mcq",
        "q": "Which intravenous fluid is isotonic and will not, by itself, shift water into or out of cells?",
        "options": [
          "Pure (distilled) water",
          "3% hypertonic saline",
          "0.9% sodium chloride (normal saline)",
          "0.45% saline"
        ],
        "answer": 2,
        "rationale": "0.9% saline (~308 mOsm/L) is isotonic with plasma, so it stays in the ECF without net water shift."
      },
      {
        "type": "mcq",
        "q": "Excess 5% dextrose can cause cellular swelling and hyponatraemia because, once the glucose is metabolised, it behaves as:",
        "options": [
          "Free water",
          "Hypertonic saline",
          "An isotonic salt solution",
          "A colloid"
        ],
        "answer": 0,
        "rationale": "After glucose is used, only water remains, which distributes across all compartments and dilutes plasma sodium."
      },
      {
        "type": "mcq",
        "q": "The resting membrane is far more permeable at rest to which ion, making the cell interior negative?",
        "options": [
          "Sodium",
          "Calcium",
          "Chloride",
          "Potassium"
        ],
        "answer": 3,
        "rationale": "At rest the membrane is chiefly permeable to K+; K+ leaking out leaves the inside relatively negative (~ −70 mV)."
      },
      {
        "type": "mcq",
        "q": "A neutrophil surrounding and engulfing a bacterium into a vesicle is performing:",
        "options": [
          "Exocytosis",
          "Phagocytosis",
          "Pinocytosis",
          "Facilitated diffusion"
        ],
        "answer": 1,
        "rationale": "Phagocytosis is endocytosis of solid particles such as microbes, central to innate immunity."
      },
      {
        "type": "mcq",
        "q": "Which organelle is the main site of ATP production by aerobic respiration?",
        "options": [
          "Ribosome",
          "Lysosome",
          "Mitochondrion",
          "Golgi apparatus"
        ],
        "answer": 2,
        "rationale": "Mitochondria house the Krebs cycle and electron transport chain that generate most ATP."
      },
      {
        "type": "mcq",
        "q": "Compared with the ECF, the intracellular fluid is characteristically high in:",
        "options": [
          "Potassium and phosphate",
          "Sodium and chloride",
          "Bicarbonate",
          "Calcium"
        ],
        "answer": 0,
        "rationale": "ICF is rich in K+ and organic phosphate/protein; ECF is rich in Na+, Cl− and HCO3−."
      },
      {
        "type": "fill",
        "q": "The membrane pump that moves sodium out and potassium in using ATP is the ____ pump.",
        "accept": [
          "sodium-potassium",
          "sodium potassium",
          "na+/k+",
          "na/k"
        ],
        "rationale": "The Na+/K+-ATPase maintains the resting ion gradients essential for excitability and cell volume."
      },
      {
        "type": "fill",
        "q": "The property of a solution that determines whether a cell will swell, shrink or stay the same is its ____.",
        "accept": [
          "tonicity"
        ],
        "rationale": "Tonicity considers only non-permeating solutes and predicts the net water movement affecting cell volume."
      }
    ]
  },

  /* TOPIC 3 */
  {
    "id": "phy-03-fluids-acidbase",
    "unit": "Unit 1 · General & Cellular Physiology",
    "title": "Body Fluids, Electrolytes & Acid-Base Balance",
    "readMinutes": 26,
    "summary": "Distribution and composition of body fluid compartments; regulation of water and the major electrolytes; the concept of pH; the bicarbonate and other buffer systems; respiratory and renal control of acid-base balance; the four primary disturbances and compensation; and a structured approach to reading an arterial blood gas — with clinical and nursing application.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Body fluid compartments",
        "p": "Water makes up roughly 60% of adult body weight (higher in infants ~75%, lower in the elderly and the obese). Of total body water, about two-thirds is intracellular fluid (ICF) and one-third extracellular fluid (ECF). The ECF is subdivided into interstitial fluid (about 80% of ECF, between cells) and plasma (about 20%, in vessels), plus small transcellular fluids (CSF, synovial, pleural, peritoneal and digestive juices). In a 70 kg adult this is roughly 42 L total: ~28 L ICF, ~14 L ECF (~11 L interstitial, ~3 L plasma)."
      },
      {
        "h": "How water moves between compartments",
        "p": "Water crosses cell membranes and capillary walls freely by osmosis, so it distributes to equalise osmolality. The distribution of WATER between ICF and ECF is set by effective osmoles: mainly SODIUM (and its anions) in the ECF and POTASSIUM in the ICF. Between plasma and interstitium, water is governed by the balance of hydrostatic and oncotic (protein) pressures (Starling forces). Thus a change in plasma sodium shifts water into or out of cells, while a change in albumin shifts water between plasma and tissues."
      },
      {
        "h": "Electrolytes and their functions",
        "p": "Electrolytes are ions that carry charge and are crucial for fluid distribution, excitability, coagulation and enzyme activity.",
        "list": [
          "Sodium (Na+, 135–145 mmol/L) — chief ECF cation; determines ECF volume and osmolality; vital for excitability.",
          "Potassium (K+, 3.5–5.0 mmol/L) — chief ICF cation; sets the resting membrane potential; critical for cardiac rhythm.",
          "Calcium (Ca2+, 2.2–2.6 mmol/L total) — muscle contraction, clotting, nerve function, bone, secretion.",
          "Chloride (Cl−, 98–106 mmol/L) — main ECF anion; acid–base and fluid balance.",
          "Bicarbonate (HCO3−, 22–26 mmol/L) — major buffer of the ECF.",
          "Magnesium and phosphate — enzyme cofactors and energy (ATP) metabolism; neuromuscular stability."
        ]
      },
      {
        "h": "Regulation of water balance",
        "p": "Water balance is regulated chiefly by antidiuretic hormone (ADH, vasopressin) from the posterior pituitary. Osmoreceptors in the hypothalamus sense a rise in plasma osmolality (as little as 1–2%) and trigger ADH release and thirst; ADH makes the kidney insert aquaporins and reabsorb water, concentrating the urine. A fall in blood volume/pressure (sensed by baroreceptors) also stimulates ADH. When osmolality falls, ADH is suppressed and dilute urine is passed."
      },
      {
        "h": "Regulation of sodium and volume",
        "p": "Sodium balance (and hence ECF volume) is regulated by the renin–angiotensin–aldosterone system (RAAS): low volume/pressure or low renal Na+ delivery releases renin, generating angiotensin II (vasoconstriction) and aldosterone (from the adrenal cortex), which makes the distal nephron reabsorb sodium (water follows). Atrial and B-type natriuretic peptides oppose this — when the heart is stretched by volume overload they promote sodium and water loss and vasodilation."
      },
      {
        "h": "Fluid balance and its disturbances",
        "p": "Intake (drink ~1500 mL, food ~700 mL, metabolic water ~200 mL) must match output (urine ~1500 mL, insensible loss from skin and breath ~800 mL, faeces ~100 mL). A negative balance causes dehydration and hypovolaemia (thirst, dry mucosa, tachycardia, low urine output, low BP); a positive balance causes overload and oedema (raised JVP, crackles, weight gain, breathlessness). Nurses track fluid-balance charts, daily weight (1 L ≈ 1 kg), skin turgor and urine output to detect these early."
      },
      {
        "h": "The concept of pH and acids/bases",
        "p": "pH is the negative logarithm (base 10) of the hydrogen-ion (H+) concentration; a fall of 1 pH unit means a ten-fold rise in H+. Normal arterial blood pH is tightly held at 7.35–7.45 — slightly alkaline. Because it is logarithmic, small pH changes reflect large H+ changes; pH below ~6.8 or above ~8.0 is generally incompatible with life. An acid donates H+ (e.g. carbonic acid); a base accepts H+ (e.g. bicarbonate). The body produces acid continuously — volatile CO2 from metabolism and fixed acids from protein/lipid breakdown."
      },
      {
        "h": "Line 1: chemical buffers (seconds)",
        "p": "Buffers resist pH change by binding or releasing H+ within seconds. The most important in the ECF is the bicarbonate/carbonic-acid system: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3−. When acid is added, bicarbonate mops up H+; when base is added, carbonic acid releases H+. Its power comes from the fact that both components are independently regulated — HCO3− by the kidney and CO2 by the lungs (Henderson–Hasselbalch principle). Other buffers are phosphate (important in urine and ICF) and proteins, notably haemoglobin in red cells.",
        "figure": {
          "caption": "Three lines of acid–base defence: chemical buffers (seconds), the lungs adjusting CO2 (minutes), and the kidneys adjusting H+/HCO3− (hours to days).",
          "svg": "<svg viewBox=\"0 0 560 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Three lines of acid-base defence.\"><defs><marker id=\"phArr3\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"20\" y=\"70\" width=\"150\" height=\"70\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"95\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#15803D\">BUFFERS</text><text x=\"95\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">seconds</text><rect x=\"205\" y=\"70\" width=\"150\" height=\"70\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"280\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">LUNGS</text><text x=\"280\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">adjust CO2 · minutes</text><rect x=\"390\" y=\"70\" width=\"150\" height=\"70\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"465\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#7C2D12\">KIDNEYS</text><text x=\"465\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">H+/HCO3- · hours-days</text><line x1=\"170\" y1=\"105\" x2=\"201\" y2=\"105\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr3)\"/><line x1=\"355\" y1=\"105\" x2=\"386\" y2=\"105\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr3)\"/><text x=\"280\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">Defence of blood pH (7.35-7.45)</text></svg>"
        }
      },
      {
        "h": "Line 2: respiratory control (minutes)",
        "p": "The lungs regulate pH within minutes by adjusting how much CO2 (an acid) is exhaled. Central chemoreceptors detect a rise in H+/CO2 and drive the respiratory centre to increase ventilation, blowing off CO2 and raising pH; if pH is too high, ventilation slows to retain CO2. This is why deep, rapid Kussmaul breathing appears in metabolic acidosis — the lungs are compensating by exhaling CO2."
      },
      {
        "h": "Line 3: renal control (hours to days)",
        "p": "The kidneys give the most powerful but slowest control by excreting H+ into the urine (buffered by phosphate and ammonia) and by reabsorbing filtered bicarbonate and generating new bicarbonate. They can raise urinary H+ excretion and produce ammonium during acidosis. Renal compensation is the mechanism that eventually corrects a chronic respiratory disturbance or a metabolic one, and it explains why full compensation takes days."
      },
      {
        "h": "The four primary disturbances",
        "list": [
          "Respiratory acidosis — CO2 retention from hypoventilation (COPD, opioid overdose, respiratory failure); pH low, PaCO2 high.",
          "Respiratory alkalosis — CO2 loss from hyperventilation (anxiety, pain, high altitude, early sepsis); pH high, PaCO2 low.",
          "Metabolic acidosis — acid gain or bicarbonate loss (diabetic ketoacidosis, lactic acidosis/shock, renal failure, diarrhoea); pH low, HCO3− low.",
          "Metabolic alkalosis — acid loss or bicarbonate gain (prolonged vomiting, nasogastric suction, diuretics); pH high, HCO3− high."
        ]
      },
      {
        "h": "Compensation and the anion gap",
        "p": "In compensation, the system NOT primarily affected shifts to bring pH back toward normal: the lungs compensate for metabolic problems (fast), and the kidneys compensate for respiratory problems (slow). Compensation may be partial or full but rarely overshoots. The anion gap [Na+ − (Cl− + HCO3−)], normally 8–12 mmol/L, helps classify a metabolic acidosis: a high gap suggests added acid (ketones, lactate, toxins) whereas a normal gap suggests bicarbonate loss (diarrhoea)."
      },
      {
        "h": "Reading the arterial blood gas (ABG)",
        "p": "A structured approach: (1) look at pH — acidaemia (<7.35) or alkalaemia (>7.45); (2) look at PaCO2 (35–45 mmHg) — is it moving the pH in the same direction as the disorder (respiratory) or opposite (compensating)?; (3) look at HCO3− (22–26 mmol/L) — is the metabolic component driving or compensating?; (4) check PaO2 (80–100 mmHg) and SaO2 (95–100%) for oxygenation. Matching pH with the primary derangement identifies whether the disorder is respiratory or metabolic and whether compensation is occurring."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "pH 7.35–7.45; PaCO2 35–45 mmHg; HCO3− 22–26 mmol/L.",
          "PaO2 80–100 mmHg; SaO2 95–100%; base excess −2 to +2 mmol/L.",
          "Anion gap 8–12 mmol/L; plasma osmolality 275–295 mOsm/kg.",
          "Total body water ~60% weight; ICF two-thirds, ECF one-third."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Maintain accurate intake–output charts and daily weights; report cumulative positive or negative balance.",
          "Recognise dehydration (dry mucosa, low output, tachycardia, low BP) and overload (oedema, raised JVP, crackles, breathlessness).",
          "Monitor and urgently report abnormal potassium — a low or high value can cause fatal arrhythmias.",
          "Interpret ABG trends to detect deteriorating respiratory or metabolic status and to evaluate oxygen and ventilation therapy."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the distribution of body fluids into compartments, giving approximate volumes, and explain how water moves between ICF and ECF.",
      "Explain the physiological regulation of water balance by ADH and of sodium/volume balance by the renin–angiotensin–aldosterone system.",
      "Describe the bicarbonate buffer system and the three lines of defence that maintain acid–base balance, with their time-courses.",
      "Classify the four primary acid–base disturbances, give one cause of each, and explain the principle of compensation.",
      "Outline a structured method for reading an arterial blood gas, stating the normal values, and describe the nurse's role in fluid and electrolyte monitoring."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A 70 kg adult has about 42 L of body water. Approximately how much of this is intracellular?",
        "options": [
          "14 L",
          "21 L",
          "28 L",
          "42 L"
        ],
        "answer": 2,
        "rationale": "About two-thirds of total body water (~28 L) is intracellular; one-third (~14 L) is extracellular."
      },
      {
        "type": "mcq",
        "q": "A patient with prolonged vomiting and nasogastric suction is most likely to develop:",
        "options": [
          "Metabolic alkalosis",
          "Metabolic acidosis",
          "Respiratory acidosis",
          "Respiratory alkalosis"
        ],
        "answer": 0,
        "rationale": "Loss of gastric H+ (and chloride) raises pH and bicarbonate — a metabolic alkalosis."
      },
      {
        "type": "mcq",
        "q": "An ABG shows pH 7.20, PaCO2 26 mmHg, HCO3− 10 mmol/L. This is best described as:",
        "options": [
          "Respiratory acidosis",
          "Metabolic alkalosis",
          "Respiratory alkalosis",
          "Metabolic acidosis with respiratory compensation"
        ],
        "answer": 3,
        "rationale": "Low pH with low HCO3− indicates metabolic acidosis; the low PaCO2 shows the lungs are compensating by hyperventilation."
      },
      {
        "type": "mcq",
        "q": "The deep, rapid (Kussmaul) breathing seen in diabetic ketoacidosis represents:",
        "options": [
          "Respiratory failure",
          "Respiratory compensation blowing off CO2",
          "Metabolic alkalosis",
          "Airway obstruction"
        ],
        "answer": 1,
        "rationale": "In metabolic acidosis the lungs hyperventilate to lower CO2 and raise pH toward normal."
      },
      {
        "type": "mcq",
        "q": "Which hormone is released when plasma osmolality rises, causing the kidney to reabsorb water?",
        "options": [
          "Aldosterone",
          "Atrial natriuretic peptide",
          "Antidiuretic hormone (ADH)",
          "Insulin"
        ],
        "answer": 2,
        "rationale": "Osmoreceptors trigger ADH, which inserts aquaporins and concentrates the urine to conserve water."
      },
      {
        "type": "mcq",
        "q": "The RAAS raises blood volume mainly because aldosterone causes the kidney to reabsorb:",
        "options": [
          "Sodium (with water following)",
          "Potassium",
          "Bicarbonate only",
          "Calcium"
        ],
        "answer": 0,
        "rationale": "Aldosterone promotes distal sodium reabsorption; water follows osmotically, expanding ECF volume."
      },
      {
        "type": "mcq",
        "q": "The distribution of water between the intracellular and extracellular compartments is determined mainly by:",
        "options": [
          "Plasma proteins",
          "Red cell number",
          "Blood pH",
          "Effective osmoles — sodium in ECF and potassium in ICF"
        ],
        "answer": 3,
        "rationale": "Water follows the effective (non-permeating) osmoles; Na+ dominates the ECF and K+ the ICF."
      },
      {
        "type": "mcq",
        "q": "A raised anion gap metabolic acidosis is typically caused by:",
        "options": [
          "Diarrhoea",
          "Added acids such as lactate or ketones",
          "Vomiting",
          "Hyperventilation"
        ],
        "answer": 1,
        "rationale": "Unmeasured acid anions (lactate, ketones, toxins) widen the anion gap; bicarbonate loss (diarrhoea) gives a normal gap."
      },
      {
        "type": "mcq",
        "q": "Which organ provides the most powerful but slowest correction of acid–base balance?",
        "options": [
          "Lungs",
          "Liver",
          "Kidneys",
          "Skin"
        ],
        "answer": 2,
        "rationale": "The kidneys excrete H+ and regenerate bicarbonate over hours to days — slow but definitive."
      },
      {
        "type": "mcq",
        "q": "A nurse notes a patient has gained 3 kg in 24 hours with new ankle oedema and lung crackles. This most likely indicates:",
        "options": [
          "Fluid overload (positive balance)",
          "Dehydration",
          "Metabolic acidosis",
          "Hypokalaemia"
        ],
        "answer": 0,
        "rationale": "Rapid weight gain (1 L ≈ 1 kg) with oedema and crackles indicates fluid overload."
      },
      {
        "type": "fill",
        "q": "The extracellular fluid is subdivided into plasma and ____ fluid.",
        "accept": [
          "interstitial"
        ],
        "rationale": "Interstitial fluid surrounds the cells; with plasma it makes up the ECF."
      },
      {
        "type": "fill",
        "q": "An arterial blood pH below 7.35 is termed ____.",
        "accept": [
          "acidosis",
          "acidaemia"
        ],
        "rationale": "A fall in pH below the normal range indicates acidosis/acidaemia."
      }
    ]
  },

  /* TOPIC 4 */
  {
    "id": "phy-04-blood-haemostasis",
    "unit": "Unit 2 · Blood & Cardiovascular Physiology",
    "title": "Physiology of Blood & Haemostasis",
    "readMinutes": 26,
    "summary": "Functions and composition of blood; roles of plasma proteins; erythrocyte structure, oxygen carriage and erythropoiesis; leucocyte defence; platelet function; the three stages of haemostasis and the coagulation cascade; fibrinolysis and natural anticoagulants; ABO and Rh blood groups and transfusion — with strong nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Functions of blood",
        "p": "Blood is a specialised fluid connective tissue and the body's main transport medium (about 5 L, ~8% of body weight). Its functions fall into three groups: TRANSPORT (oxygen, carbon dioxide, nutrients, hormones, wastes, heat), REGULATION (of pH via buffers, of temperature, and of fluid balance via plasma proteins), and PROTECTION (clotting to prevent blood loss; white cells and antibodies to fight infection)."
      },
      {
        "h": "Composition of blood",
        "p": "When centrifuged, blood separates into about 55% plasma (top), a thin buffy coat of white cells and platelets, and about 45% packed red cells (the haematocrit; ~0.40–0.54 in men, ~0.37–0.47 in women). Plasma is ~92% water with dissolved plasma proteins, electrolytes, nutrients, gases, hormones and wastes. The formed elements are erythrocytes, leucocytes and thrombocytes, all produced from haemopoietic stem cells in red bone marrow (haemopoiesis)."
      },
      {
        "h": "Plasma proteins",
        "list": [
          "Albumin (~60% of protein) — maintains plasma oncotic (colloid osmotic) pressure that holds fluid in vessels; transports drugs, hormones and bilirubin.",
          "Globulins — alpha/beta (transport, clotting) and gamma globulins (immunoglobulins/antibodies) for defence.",
          "Fibrinogen — the soluble precursor of fibrin, essential for clotting.",
          "Clotting factors and complement — further haemostatic and immune proteins (most made by the liver)."
        ]
      },
      {
        "h": "Erythrocytes — structure and function",
        "p": "Red cells are biconcave discs (~7–8 µm) without a nucleus or mitochondria, packed with about 270 million haemoglobin molecules, and living about 120 days. The biconcave shape maximises surface area for gas exchange and gives the flexibility to squeeze through capillaries. Lacking a nucleus, they cannot repair or divide; worn cells are removed by macrophages in the spleen and liver, and their iron is recycled while haem becomes bilirubin. Normal counts are ~4.5–6.5 ×10¹²/L (men) and ~3.8–5.8 ×10¹²/L (women)."
      },
      {
        "h": "Haemoglobin and oxygen carriage",
        "p": "Each haemoglobin molecule has four haem groups (each with an iron atom) and can carry four O2 molecules; 1 g of haemoglobin carries about 1.34 mL of oxygen. Normal Hb is ~130–170 g/L (men) and ~120–150 g/L (women). Haemoglobin binds O2 where it is plentiful (lungs) and releases it where it is scarce (tissues). Reduced Hb causes anaemia (pallor, fatigue, breathlessness); haemoglobin also carries some CO2 and buffers H+."
      },
      {
        "h": "Erythropoiesis and its control",
        "p": "Red cell production is stimulated by the hormone erythropoietin (EPO) from the kidney (about 90%) in response to tissue hypoxia — a negative-feedback loop that raises red cell mass and thus oxygen delivery. Production needs iron (for haem), vitamin B12 and folate (for DNA synthesis/maturation), and protein. Deficiency of iron causes microcytic anaemia; of B12/folate, macrocytic anaemia; of EPO (as in chronic kidney disease), anaemia despite adequate stores."
      },
      {
        "h": "Leucocytes — defence",
        "p": "White cells (~4–11 ×10⁹/L) defend against infection and foreign material; they are classed as granulocytes and agranulocytes.",
        "list": [
          "Neutrophils (~60–70%) — most numerous; first responders that phagocytose bacteria; rise in bacterial infection.",
          "Lymphocytes (~20–30%) — B cells (antibodies) and T cells (cell-mediated immunity); rise in viral infection.",
          "Monocytes — become tissue macrophages that engulf debris and microbes and present antigen.",
          "Eosinophils — act against parasites and moderate allergic reactions.",
          "Basophils — release histamine and heparin in inflammation and allergy."
        ]
      },
      {
        "h": "Platelets",
        "p": "Platelets (thrombocytes, ~150–400 ×10⁹/L) are small cell fragments from megakaryocytes, living about 8–10 days. They are central to haemostasis: they adhere to damaged vessel walls, become activated, change shape, release chemicals (ADP, thromboxane A2, serotonin) that recruit and activate more platelets, and aggregate into a plug. Aspirin reduces platelet aggregation by blocking thromboxane synthesis, which is why it is used to prevent arterial thrombosis."
      },
      {
        "h": "Haemostasis — stopping bleeding",
        "p": "Haemostasis is the process that stops blood loss from a damaged vessel. It occurs in three overlapping stages.",
        "list": [
          "1. Vascular spasm — the injured vessel constricts immediately (reflex, and local factors) to reduce blood flow.",
          "2. Platelet plug formation — platelets adhere to exposed collagen (helped by von Willebrand factor), activate and aggregate into a temporary plug.",
          "3. Coagulation (blood clotting) — a cascade of clotting factors converts soluble fibrinogen into insoluble fibrin threads that trap cells and form a firm clot."
        ],
        "figure": {
          "caption": "The three stages of haemostasis: vascular spasm, platelet plug, then coagulation forming a fibrin clot.",
          "svg": "<svg viewBox=\"0 0 560 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Three stages of haemostasis.\"><defs><marker id=\"phArr4\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"75\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"90\" y=\"99\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">1. VASCULAR SPASM</text><text x=\"90\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">vessel constricts</text><rect x=\"205\" y=\"75\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"280\" y=\"99\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">2. PLATELET PLUG</text><text x=\"280\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">platelets aggregate</text><rect x=\"395\" y=\"75\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"470\" y=\"99\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7C2D12\">3. COAGULATION</text><text x=\"470\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">fibrin clot forms</text><line x1=\"165\" y1=\"105\" x2=\"201\" y2=\"105\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr4)\"/><line x1=\"355\" y1=\"105\" x2=\"391\" y2=\"105\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr4)\"/></svg>"
        }
      },
      {
        "h": "The coagulation cascade",
        "p": "Coagulation proceeds by two pathways that converge on a common pathway. The INTRINSIC pathway (all factors within blood) is triggered by contact with damaged vessel surfaces and is assessed by the APTT. The EXTRINSIC pathway is triggered by tissue factor (thromboplastin) released from injured tissue and is assessed by the prothrombin time/INR. Both activate factor X, which converts prothrombin to THROMBIN; thrombin converts fibrinogen to fibrin and, by positive feedback, activates more clotting and platelets. Factor XIII cross-links fibrin into a stable mesh. Calcium (factor IV) and vitamin K (for factors II, VII, IX, X) are required.",
        "figure": {
          "caption": "Coagulation: intrinsic and extrinsic pathways converge on factor X, driving prothrombin → thrombin → fibrin.",
          "svg": "<svg viewBox=\"0 0 560 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Coagulation cascade convergence.\"><defs><marker id=\"phArr4b\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"20\" y=\"20\" width=\"180\" height=\"42\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"110\" y=\"40\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803D\">INTRINSIC (surface)</text><text x=\"110\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">APTT</text><rect x=\"360\" y=\"20\" width=\"180\" height=\"42\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"450\" y=\"40\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#7C2D12\">EXTRINSIC (tissue factor)</text><text x=\"450\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">PT / INR</text><rect x=\"205\" y=\"85\" width=\"150\" height=\"38\" rx=\"9\" fill=\"#0F4C3A\"/><text x=\"280\" y=\"109\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#FFFFFF\">Factor X activated</text><line x1=\"110\" y1=\"62\" x2=\"255\" y2=\"83\" stroke=\"#0F4C3A\" stroke-width=\"2\" marker-end=\"url(#phArr4b)\"/><line x1=\"450\" y1=\"62\" x2=\"305\" y2=\"83\" stroke=\"#0F4C3A\" stroke-width=\"2\" marker-end=\"url(#phArr4b)\"/><rect x=\"180\" y=\"145\" width=\"200\" height=\"34\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"280\" y=\"167\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803D\">Prothrombin &#8594; Thrombin</text><line x1=\"280\" y1=\"123\" x2=\"280\" y2=\"143\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr4b)\"/><text x=\"440\" y=\"167\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">&#8594; fibrinogen &#8594; fibrin</text></svg>"
        }
      },
      {
        "h": "Fibrinolysis and natural anticoagulants",
        "p": "Clotting is balanced by controls that prevent runaway thrombosis. Natural anticoagulants include antithrombin III (inhibits thrombin — the target of heparin), and proteins C and S (inactivate factors V and VIII). Once healing begins, FIBRINOLYSIS dissolves the clot: plasminogen is converted to plasmin (by tissue plasminogen activator), and plasmin digests fibrin into fragments (D-dimers). A balance between clotting and fibrinolysis prevents both bleeding and unwanted thrombosis; thrombolytic drugs exploit this pathway to break down clots in stroke and myocardial infarction."
      },
      {
        "h": "Blood groups — ABO and Rh",
        "p": "The ABO system classifies blood by A and B antigens on red cells and by naturally occurring antibodies in plasma (group A has anti-B; group B has anti-A; group O has both antibodies but no antigen — 'universal donor'; group AB has both antigens but no antibody — 'universal recipient'). The Rh (D) system matters in pregnancy: an Rh-negative mother carrying an Rh-positive fetus may form anti-D antibodies that attack the red cells of a subsequent Rh-positive fetus (haemolytic disease of the newborn), prevented by anti-D (Rho-D) prophylaxis."
      },
      {
        "h": "Transfusion and reactions",
        "p": "Transfusing ABO-incompatible blood causes a rapid, dangerous acute haemolytic reaction (fever, loin/back pain, hypotension, haemoglobinuria, disseminated intravascular coagulation), because recipient antibodies destroy donor cells. Prevention rests on correct grouping, cross-matching, and rigorous bedside identity checks. Other reactions include febrile non-haemolytic, allergic, transfusion-associated circulatory overload (TACO) and transfusion-related acute lung injury (TRALI)."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Total blood volume ~5 L (~8% body weight); haematocrit ~0.40–0.54 (M), 0.37–0.47 (F).",
          "Hb ~130–170 g/L (M), 120–150 g/L (F); RBC lifespan ~120 days.",
          "WBC ~4–11 ×10⁹/L; platelets ~150–400 ×10⁹/L (lifespan ~8–10 days).",
          "1 g Hb carries ~1.34 mL O2; clotting needs vitamin K and calcium."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Recognise and monitor anaemia (pallor, fatigue, tachycardia, breathlessness) and bleeding tendencies (bruising, petechiae, low platelets).",
          "Perform the full pre-transfusion safety checks and positive patient identification, and observe closely for reactions (especially in the first 15 minutes).",
          "Understand anticoagulant/antiplatelet therapy — warfarin (vitamin-K-dependent factors, monitored by INR), heparin (antithrombin, monitored by APTT), aspirin (platelets) — and watch for bleeding.",
          "Apply haemostasis knowledge to wound care, firm pressure to bleeding sites, and post-procedure observation."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the composition and functions of blood, including the roles of the main plasma proteins.",
      "Explain the structure–function relationship of the red blood cell and the regulation of erythropoiesis by erythropoietin.",
      "Describe the three stages of haemostasis and outline the intrinsic, extrinsic and common coagulation pathways, naming the roles of thrombin and fibrin.",
      "Explain the ABO and Rh blood group systems and their importance in transfusion and in pregnancy.",
      "Discuss the nurse's responsibilities before, during and after a blood transfusion, including recognition of reactions."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient with chronic kidney disease is anaemic despite normal iron, B12 and folate. The most likely reason is deficiency of:",
        "options": [
          "Albumin",
          "Fibrinogen",
          "Erythropoietin",
          "Thrombin"
        ],
        "answer": 2,
        "rationale": "The diseased kidney produces less erythropoietin, so red cell production falls even with adequate raw materials."
      },
      {
        "type": "mcq",
        "q": "The most abundant plasma protein, responsible for plasma oncotic pressure, is:",
        "options": [
          "Albumin",
          "Fibrinogen",
          "Gamma globulin",
          "Haemoglobin"
        ],
        "answer": 0,
        "rationale": "Albumin generates the colloid osmotic pressure that keeps fluid in the vessels."
      },
      {
        "type": "mcq",
        "q": "In the coagulation cascade, thrombin's key action is to convert:",
        "options": [
          "Fibrin to fibrinogen",
          "Plasminogen to plasmin",
          "Prothrombin to plasmin",
          "Fibrinogen to fibrin"
        ],
        "answer": 3,
        "rationale": "Thrombin converts soluble fibrinogen into insoluble fibrin, the mesh of the clot."
      },
      {
        "type": "mcq",
        "q": "A patient on warfarin has a raised INR and is bleeding. Warfarin causes this by antagonising:",
        "options": [
          "Calcium",
          "Vitamin K–dependent clotting factors (II, VII, IX, X)",
          "Platelet thromboxane",
          "Antithrombin"
        ],
        "answer": 1,
        "rationale": "Warfarin blocks vitamin-K-dependent synthesis of factors II, VII, IX and X, prolonging the PT/INR."
      },
      {
        "type": "mcq",
        "q": "Aspirin reduces arterial clotting mainly by:",
        "options": [
          "Inhibiting thrombin",
          "Activating plasmin",
          "Blocking platelet thromboxane synthesis",
          "Raising fibrinogen"
        ],
        "answer": 2,
        "rationale": "Aspirin inhibits thromboxane A2 production in platelets, reducing aggregation."
      },
      {
        "type": "mcq",
        "q": "A group O Rh-negative unit is often used in emergencies because group O red cells:",
        "options": [
          "Carry no A or B antigen",
          "Carry both A and B antigens",
          "Contain no plasma antibodies",
          "Cannot be haemolysed"
        ],
        "answer": 0,
        "rationale": "Group O cells lack A and B antigens, so they are less likely to be attacked by recipient antibodies (universal donor cells)."
      },
      {
        "type": "mcq",
        "q": "During a transfusion a patient suddenly develops fever, loin pain, hypotension and dark urine. This suggests:",
        "options": [
          "A mild allergic reaction",
          "Simple anxiety",
          "Air embolism",
          "An acute haemolytic (ABO-incompatible) reaction"
        ],
        "answer": 3,
        "rationale": "These are features of an acute haemolytic reaction from ABO incompatibility — a medical emergency; stop the transfusion immediately."
      },
      {
        "type": "mcq",
        "q": "Haemolytic disease of the newborn can occur when:",
        "options": [
          "An Rh-positive mother carries an Rh-negative baby",
          "An Rh-negative mother carries an Rh-positive baby",
          "Both parents are group O",
          "The baby is group AB"
        ],
        "answer": 1,
        "rationale": "An Rh-negative mother may form anti-D against Rh-positive fetal cells, harming a subsequent Rh-positive fetus."
      },
      {
        "type": "mcq",
        "q": "The enzyme that dissolves a fibrin clot during fibrinolysis is:",
        "options": [
          "Thrombin",
          "Prothrombin",
          "Plasmin",
          "Fibrinogen"
        ],
        "answer": 2,
        "rationale": "Plasmin (from plasminogen, activated by tPA) digests fibrin, producing D-dimers."
      },
      {
        "type": "mcq",
        "q": "A microcytic (small red cell) anaemia is most typically caused by deficiency of:",
        "options": [
          "Iron",
          "Vitamin B12",
          "Folate",
          "Erythropoietin"
        ],
        "answer": 0,
        "rationale": "Iron deficiency impairs haem synthesis, producing small, pale (microcytic hypochromic) cells; B12/folate deficiency gives macrocytic anaemia."
      },
      {
        "type": "fill",
        "q": "The soluble plasma protein converted into insoluble threads to form a clot is ____.",
        "accept": [
          "fibrinogen"
        ],
        "rationale": "Fibrinogen is converted by thrombin into fibrin, the clot's mesh."
      },
      {
        "type": "fill",
        "q": "The hormone from the kidney that stimulates red cell production in response to low oxygen is ____.",
        "accept": [
          "erythropoietin",
          "epo"
        ],
        "rationale": "Erythropoietin drives erythropoiesis, forming a negative-feedback loop that restores oxygen delivery."
      }
    ]
  },

  /* TOPIC 5 */
  {
    "id": "phy-05-muscle-physiology",
    "unit": "Unit 2 · Blood & Cardiovascular Physiology",
    "title": "Muscle Physiology & the Mechanism of Contraction",
    "readMinutes": 25,
    "summary": "Types and properties of muscle; the sarcomere and contractile proteins; the neuromuscular junction and excitation–contraction coupling; the sliding-filament cross-bridge cycle; the role of calcium and ATP; motor units, twitch, summation and tetanus; muscle energetics and fatigue; and the distinctive features of smooth and cardiac muscle — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Types and functions of muscle",
        "p": "Muscle tissue converts chemical energy (ATP) into mechanical work. There are three types: SKELETAL muscle (striated, voluntary, moves the skeleton and maintains posture), CARDIAC muscle (striated, involuntary, pumps blood), and SMOOTH muscle (non-striated, involuntary, in the walls of hollow organs and vessels). Together they enable movement, posture, joint stability, heat production (shivering), and the propulsion of blood, food and other substances."
      },
      {
        "h": "Properties of muscle tissue",
        "list": [
          "Excitability (irritability) — responds to a stimulus by generating an electrical impulse.",
          "Contractility — shortens and generates force.",
          "Extensibility — can be stretched without damage.",
          "Elasticity — returns to its resting length after stretch or contraction."
        ]
      },
      {
        "h": "Structure relevant to function",
        "p": "A skeletal muscle fibre (a single multinucleate cell) contains many myofibrils made of repeating units called SARCOMERES — the functional unit of contraction, running between two Z-lines. Each sarcomere contains overlapping thick filaments (myosin) and thin filaments (actin, with the regulatory proteins troponin and tropomyosin). Their orderly overlap creates the A-band (dark) and I-band (light), giving skeletal and cardiac muscle their striped (striated) appearance. The sarcoplasmic reticulum stores calcium, and transverse (T-)tubules carry the surface action potential deep into the fibre."
      },
      {
        "h": "The motor unit",
        "p": "A motor unit is one motor neuron together with all the muscle fibres it supplies. Small motor units (few fibres per neuron, e.g. in eye muscles) allow fine, precise control; large motor units (hundreds of fibres, e.g. in the thigh) allow powerful movements. The force of a whole-muscle contraction is graded by RECRUITMENT — activating more motor units — and by increasing the firing frequency of each unit."
      },
      {
        "h": "The neuromuscular junction",
        "p": "Skeletal muscle contracts only when stimulated by a motor neuron. The nerve action potential opens voltage-gated calcium channels in the terminal; calcium entry triggers release of the neurotransmitter ACETYLCHOLINE, which crosses the synaptic cleft and binds nicotinic receptors on the motor end plate. This opens channels, produces an end-plate potential and a muscle action potential. Acetylcholinesterase then breaks down acetylcholine to terminate the signal. This synapse is a key drug/disease site: curare and non-depolarising blockers compete with acetylcholine (used in anaesthesia); myasthenia gravis destroys the receptors, causing fatigable weakness; and organophosphates inhibit acetylcholinesterase, causing excess stimulation."
      },
      {
        "h": "Excitation–contraction coupling",
        "p": "The muscle action potential spreads along the sarcolemma and down the T-tubules, triggering the sarcoplasmic reticulum to release calcium into the sarcoplasm. Calcium binds troponin, which pulls tropomyosin off the myosin-binding sites on actin — exposing them. Thus the electrical signal is 'coupled' to mechanical contraction through calcium acting as the intracellular switch."
      },
      {
        "h": "The sliding-filament / cross-bridge cycle",
        "p": "Contraction occurs because the filaments slide past one another, shortening the sarcomere, without the filaments themselves shortening.",
        "list": [
          "Myosin heads (energised by prior ATP splitting) bind exposed sites on actin, forming cross-bridges.",
          "The power stroke: the head pivots, pulling the thin filament toward the sarcomere centre; ADP and phosphate are released.",
          "A new ATP binds myosin, causing it to detach from actin.",
          "ATP is split (hydrolysed) to re-cock the head, ready for another cycle while calcium remains raised.",
          "Cross-bridge cycling repeats, progressively shortening the muscle and generating force."
        ],
        "figure": {
          "caption": "Sliding-filament mechanism: calcium exposes actin sites, myosin cross-bridges pull the thin filaments inward, shortening the sarcomere.",
          "svg": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sliding filament contraction of a sarcomere.\"><text x=\"280\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">Sarcomere shortens as filaments slide</text><text x=\"30\" y=\"55\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#15803D\">RELAXED</text><line x1=\"120\" y1=\"60\" x2=\"440\" y2=\"60\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><rect x=\"230\" y=\"52\" width=\"100\" height=\"16\" fill=\"#15803D\"/><line x1=\"120\" y1=\"60\" x2=\"240\" y2=\"60\" stroke=\"#22C55E\" stroke-width=\"4\"/><line x1=\"320\" y1=\"60\" x2=\"440\" y2=\"60\" stroke=\"#22C55E\" stroke-width=\"4\"/><text x=\"30\" y=\"120\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#7C2D12\">CONTRACTED</text><line x1=\"180\" y1=\"125\" x2=\"380\" y2=\"125\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><rect x=\"230\" y=\"117\" width=\"100\" height=\"16\" fill=\"#15803D\"/><line x1=\"180\" y1=\"125\" x2=\"285\" y2=\"125\" stroke=\"#22C55E\" stroke-width=\"4\"/><line x1=\"275\" y1=\"125\" x2=\"380\" y2=\"125\" stroke=\"#22C55E\" stroke-width=\"4\"/><text x=\"280\" y=\"165\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">thick (myosin) = dark bar · thin (actin) = light lines</text></svg>"
        }
      },
      {
        "h": "Relaxation, ATP and calcium",
        "p": "When nerve stimulation stops, calcium is actively pumped back into the sarcoplasmic reticulum (using ATP). Tropomyosin re-covers the binding sites, cross-bridges cannot form, and the muscle relaxes. ATP is therefore needed both to CONTRACT (cross-bridge cycling) and to RELAX (calcium re-uptake and myosin detachment). This explains rigor mortis after death: when ATP is exhausted, myosin cannot detach from actin, so muscles stiffen until proteolysis breaks the bridges."
      },
      {
        "h": "Twitch, summation and tetanus",
        "p": "A single stimulus produces a brief TWITCH (a latent period, contraction, then relaxation). If a second stimulus arrives before relaxation is complete, the contractions add together (wave summation), producing greater force. Rapid repeated stimulation fuses the twitches into a smooth, sustained, maximal contraction (TETANUS). A low level of continuous partial contraction, present even at rest, is muscle TONE, which stabilises posture and joints. Force also depends on the initial length of the muscle (the length–tension relationship)."
      },
      {
        "h": "Muscle energetics",
        "p": "Muscles obtain ATP from three sources, used in sequence: (1) stored creatine phosphate for the first ~10–15 seconds (immediate); (2) anaerobic glycolysis, which is fast but yields little ATP and produces lactate (used in short intense bursts); and (3) aerobic respiration in mitochondria, which is slow to ramp up but yields large amounts of ATP for sustained activity, needing oxygen and fuels. Slow (type I) fibres are fatigue-resistant and aerobic; fast (type II) fibres are powerful but fatigue quickly."
      },
      {
        "h": "Fatigue and oxygen debt",
        "p": "Muscle fatigue is the decline in force with prolonged activity, from depleted glycogen/creatine phosphate, accumulation of inorganic phosphate and H+, and ionic changes at the membrane. Oxygen debt (excess post-exercise oxygen consumption) is the extra oxygen taken up after exercise to replenish creatine phosphate and oxygen stores and to metabolise the lactate produced. Understanding this guides graded activity and rest in patients with cardiac or respiratory limitation."
      },
      {
        "h": "Smooth and cardiac muscle compared",
        "p": "SMOOTH muscle contracts slowly and can sustain tone with little energy; it lacks sarcomeres (non-striated), uses calmodulin rather than troponin, and is controlled by the autonomic nervous system, hormones and stretch, producing peristalsis and vasoconstriction. It can be single-unit (sheets connected by gap junctions, e.g. gut) or multi-unit (independent, e.g. iris). CARDIAC muscle is striated but involuntary; its cells are joined by intercalated discs with gap junctions that let the heart contract as a functional unit (syncytium); it is self-exciting (automaticity), has a long refractory period so it cannot be tetanised, and does not fatigue. All three rely on the same actin–myosin–calcium principle."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Resting membrane potential of skeletal/cardiac muscle ~ −90 mV; neuromuscular transmitter = acetylcholine.",
          "Creatine phosphate fuels contraction for ~10–15 s; type I (slow, aerobic) vs type II (fast, glycolytic) fibres.",
          "Cardiac muscle has a long refractory period (cannot tetanise); calcium is the trigger ion in all three types.",
          "Rigor mortis begins ~1–6 hours after death as ATP is exhausted."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Calcium's role explains cramps, tetany in hypocalcaemia, and how electrolyte imbalance affects both skeletal muscle and the heart.",
          "Immobility causes muscle wasting (atrophy) and contractures; early mobilisation, positioning and passive movements preserve function.",
          "Neuromuscular junction knowledge underpins care in myasthenia gravis and the safe use of muscle relaxants in anaesthesia (with reversal and monitoring).",
          "Understanding energetics and fatigue guides pacing of activity for patients with cardiac, respiratory or neuromuscular disease."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Name the three types of muscle and compare their structure, control, energetics and function.",
      "Describe the sliding-filament cross-bridge cycle of skeletal muscle contraction, step by step.",
      "Explain the events at the neuromuscular junction and the role of calcium in excitation–contraction coupling.",
      "Explain how whole-muscle force is graded (motor units, recruitment, summation, tetanus) and discuss the sources of energy and causes of fatigue.",
      "Explain why ATP is required for both contraction and relaxation, with reference to rigor mortis, and contrast this with cardiac muscle's inability to be tetanised."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient with myasthenia gravis has weakness that worsens with repeated effort. The defect lies at the:",
        "options": [
          "Sarcomere",
          "Sarcoplasmic reticulum",
          "Neuromuscular junction (acetylcholine receptors)",
          "Z-line"
        ],
        "answer": 2,
        "rationale": "Antibodies destroy nicotinic acetylcholine receptors at the neuromuscular junction, causing fatigable weakness."
      },
      {
        "type": "mcq",
        "q": "In excitation–contraction coupling, the immediate trigger that exposes actin binding sites is:",
        "options": [
          "Calcium binding troponin",
          "Sodium binding tropomyosin",
          "ATP binding actin",
          "Acetylcholinesterase"
        ],
        "answer": 0,
        "rationale": "Calcium binds troponin, moving tropomyosin off the actin sites so cross-bridges can form."
      },
      {
        "type": "mcq",
        "q": "Rigor mortis develops after death because, without ATP, myosin heads:",
        "options": [
          "Cannot bind actin",
          "Pump calcium away",
          "Release acetylcholine",
          "Cannot detach from actin"
        ],
        "answer": 3,
        "rationale": "ATP is needed to detach myosin from actin; when it is exhausted the cross-bridges remain locked and muscles stiffen."
      },
      {
        "type": "mcq",
        "q": "During the sliding-filament mechanism, sarcomere shortening occurs because:",
        "options": [
          "Actin filaments contract in length",
          "Filaments slide past one another while keeping their length",
          "Myosin dissolves",
          "Z-lines lengthen"
        ],
        "answer": 1,
        "rationale": "The filaments slide over each other; their individual lengths are unchanged but the sarcomere shortens."
      },
      {
        "type": "mcq",
        "q": "A smooth, sustained, maximal contraction produced by rapid repeated stimulation is called:",
        "options": [
          "A twitch",
          "Muscle tone",
          "Tetanus",
          "Atrophy"
        ],
        "answer": 2,
        "rationale": "Rapid stimuli summate and fuse into a sustained contraction (tetanus)."
      },
      {
        "type": "mcq",
        "q": "Why can cardiac muscle NOT be driven into sustained tetanus like skeletal muscle?",
        "options": [
          "It has a long refractory period",
          "It has no calcium",
          "It lacks actin",
          "It is voluntary"
        ],
        "answer": 0,
        "rationale": "The prolonged refractory period of cardiac muscle prevents summation, protecting the heart's rhythmic pumping."
      },
      {
        "type": "mcq",
        "q": "For a short, all-out sprint, the fibres that dominate and fatigue quickly are:",
        "options": [
          "Type I slow oxidative fibres",
          "Cardiac fibres",
          "Smooth muscle fibres",
          "Type II fast glycolytic fibres"
        ],
        "answer": 3,
        "rationale": "Fast (type II) glycolytic fibres generate rapid, powerful force using anaerobic glycolysis but tire quickly."
      },
      {
        "type": "mcq",
        "q": "The extra oxygen consumed after strenuous exercise to restore reserves and clear lactate is the:",
        "options": [
          "Tidal volume",
          "Oxygen debt",
          "Residual volume",
          "Vital capacity"
        ],
        "answer": 1,
        "rationale": "Excess post-exercise oxygen consumption (oxygen debt) replenishes creatine phosphate and O2 stores and metabolises lactate."
      },
      {
        "type": "mcq",
        "q": "Fine, precise movements (as of the eye) are possible because those muscles have:",
        "options": [
          "Very large motor units",
          "No motor units",
          "Very small motor units",
          "Only smooth muscle"
        ],
        "answer": 2,
        "rationale": "Small motor units (few fibres per neuron) allow delicate, precise control; large units allow power."
      },
      {
        "type": "mcq",
        "q": "The first, immediately available source of ATP for a muscle at the very start of contraction is:",
        "options": [
          "Stored creatine phosphate",
          "Aerobic respiration",
          "Anaerobic glycolysis",
          "Dietary glucose"
        ],
        "answer": 0,
        "rationale": "Creatine phosphate rapidly regenerates ATP for the first ~10–15 seconds before glycolysis and aerobic metabolism take over."
      },
      {
        "type": "fill",
        "q": "The protein that must bind calcium to move tropomyosin off the actin binding sites is ____.",
        "accept": [
          "troponin"
        ],
        "rationale": "Calcium binds troponin, shifting tropomyosin to expose the myosin-binding sites."
      },
      {
        "type": "fill",
        "q": "One motor neuron together with all the muscle fibres it supplies is called a ____.",
        "accept": [
          "motor unit"
        ],
        "rationale": "The motor unit is the functional unit of neural control of muscle force."
      }
    ]
  },

  /* TOPIC 6 */
  {
    "id": "phy-06-cardiac-cycle",
    "unit": "Unit 2 · Blood & Cardiovascular Physiology",
    "title": "Cardiac Physiology & the Cardiac Cycle",
    "readMinutes": 26,
    "summary": "The heart as a double pump; automaticity and the conducting system; the phases and pressure changes of the cardiac cycle; heart sounds; cardiac output and its determinants (preload, afterload, contractility, heart rate); the Frank–Starling law; autonomic regulation; the cardiac action potential and the ECG — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "The heart as a double pump",
        "p": "The heart is a muscular pump that drives blood through two circuits in series. The right side receives deoxygenated blood and pumps it to the lungs (pulmonary circulation, low pressure); the left side receives oxygenated blood and pumps it to the whole body (systemic circulation, high pressure — hence the thicker left ventricle). The two sides beat together and pump equal volumes over time; one-way valves (atrioventricular and semilunar) ensure blood flows in a single direction."
      },
      {
        "h": "Automaticity and the conducting system",
        "p": "Cardiac muscle is myogenic — specialised cells generate their own rhythm without nerves. The conducting system spreads this rhythm in an orderly sequence.",
        "list": [
          "Sinoatrial (SA) node — the natural pacemaker in the right atrium; fastest intrinsic rate (about 60–100/min), so it sets the pace.",
          "Atrioventricular (AV) node — delays the impulse ~0.1 s, letting the atria empty before the ventricles contract.",
          "Bundle of His and its branches — carry the impulse through the interventricular septum.",
          "Purkinje fibres — spread the impulse rapidly through the ventricular walls, from apex upward, for a coordinated squeeze."
        ]
      },
      {
        "h": "Pacemaker potential and heart rate",
        "p": "SA node cells have no stable resting potential: they slowly depolarise (the pacemaker potential) until threshold, then fire, giving automaticity. Their rate sets heart rate and can be modulated — sympathetic activity and adrenaline steepen the slope (faster rate), vagal (parasympathetic) activity flattens it (slower rate). If the SA node fails, lower pacemakers take over but at slower intrinsic rates (AV node ~40–60/min, ventricular ~20–40/min), which is the basis of escape rhythms and heart block."
      },
      {
        "h": "The cardiac cycle",
        "p": "The cardiac cycle is one complete heartbeat — the sequence of contraction (systole) and relaxation (diastole) of the atria and ventricles, lasting about 0.8 s at 75 beats/min (systole ~0.3 s, diastole ~0.5 s). It has three functional phases: atrial systole (atria contract, topping up the ventricles with the final ~20–30% of filling), ventricular systole (ventricles contract; rising pressure closes the AV valves, then opens the semilunar valves to eject blood), and complete cardiac diastole (all chambers relax and the ventricles fill passively). Valve opening and closing are driven entirely by pressure differences.",
        "figure": {
          "caption": "The cardiac cycle: atrial systole, ventricular systole, then diastole — coordinated by valve opening and closing.",
          "svg": "<svg viewBox=\"0 0 560 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Phases of the cardiac cycle.\"><defs><marker id=\"phArr6\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"75\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"90\" y=\"99\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">ATRIAL SYSTOLE</text><text x=\"90\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">atria contract</text><rect x=\"205\" y=\"75\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"280\" y=\"99\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803D\">VENTRICULAR SYSTOLE</text><text x=\"280\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">blood ejected</text><rect x=\"395\" y=\"75\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"470\" y=\"99\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7C2D12\">DIASTOLE</text><text x=\"470\" y=\"118\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">chambers fill</text><line x1=\"165\" y1=\"105\" x2=\"201\" y2=\"105\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr6)\"/><line x1=\"355\" y1=\"105\" x2=\"391\" y2=\"105\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr6)\"/><path d=\"M470 135 L470 165 L90 165 L90 137\" fill=\"none\" stroke=\"#22C55E\" stroke-width=\"2\" marker-end=\"url(#phArr6)\"/><text x=\"280\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">cycle repeats (~0.8 s)</text></svg>"
        }
      },
      {
        "h": "Pressure–volume changes and ejection",
        "p": "During ventricular systole there is first isovolumetric contraction (all valves shut, pressure rises with no volume change) until ventricular pressure exceeds aortic/pulmonary pressure and the semilunar valves open for ejection. The volume in the ventricle at the end of filling is the end-diastolic volume (EDV, ~120 mL); after ejection the end-systolic volume (ESV, ~50 mL) remains. Stroke volume = EDV − ESV (~70 mL). Ejection fraction (SV ÷ EDV, normally ~55–70%) is an important clinical measure of contractile function."
      },
      {
        "h": "Heart sounds",
        "p": "Two main sounds are heard with a stethoscope. The first sound ('lub', S1) is closure of the atrioventricular (mitral and tricuspid) valves at the start of ventricular systole. The second sound ('dub', S2) is closure of the semilunar (aortic and pulmonary) valves at the start of diastole. Extra sounds (S3, S4) or MURMURS indicate turbulent flow — a stenosed (narrowed) valve or a regurgitant (leaking) valve — and their timing and location help localise the lesion."
      },
      {
        "h": "Cardiac output and stroke volume",
        "p": "Cardiac output (CO) is the volume of blood pumped by each ventricle per minute: CO = stroke volume × heart rate. Stroke volume is the volume ejected per beat (~70 mL); heart rate is beats per minute. At rest CO is about 5 L/min but can rise to 20–25 L/min in exercise (cardiac reserve). The cardiac index adjusts CO for body surface area. A falling cardiac output underlies shock and heart failure and produces fatigue, cool peripheries, oliguria and confusion.",
        "figure": {
          "caption": "Determinants of cardiac output.",
          "svg": "<svg viewBox=\"0 0 560 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cardiac output equals stroke volume times heart rate.\"><rect x=\"40\" y=\"55\" width=\"150\" height=\"46\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"115\" y=\"76\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">STROKE VOLUME</text><text x=\"115\" y=\"93\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">~70 mL/beat</text><text x=\"215\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"22\" font-weight=\"700\" fill=\"#0F4C3A\">&#215;</text><rect x=\"245\" y=\"55\" width=\"150\" height=\"46\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"320\" y=\"76\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">HEART RATE</text><text x=\"320\" y=\"93\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">~75 beats/min</text><text x=\"420\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"22\" font-weight=\"700\" fill=\"#0F4C3A\">=</text><rect x=\"445\" y=\"55\" width=\"100\" height=\"46\" rx=\"9\" fill=\"#0F4C3A\"/><text x=\"495\" y=\"76\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#FFFFFF\">CO</text><text x=\"495\" y=\"93\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#DCFCE7\">~5 L/min</text></svg>"
        }
      },
      {
        "h": "Determinants of stroke volume",
        "list": [
          "Preload — the degree of ventricular stretch before contraction, set by venous return (end-diastolic volume).",
          "Afterload — the resistance the ventricle must overcome to eject blood (mainly arterial pressure); high afterload (e.g. hypertension, aortic stenosis) reduces stroke volume.",
          "Contractility (inotropy) — the intrinsic strength of contraction at a given preload, increased by sympathetic stimulation, adrenaline and calcium, decreased by ischaemia and some drugs."
        ]
      },
      {
        "h": "The Frank–Starling law",
        "p": "The Frank–Starling law of the heart states that, within physiological limits, the greater the stretch of cardiac muscle during filling (greater preload/EDV), the stronger the following contraction and the larger the stroke volume. This is because stretch improves the overlap of actin and myosin filaments. It lets the heart automatically match its output to the venous return it receives and keeps the outputs of the two ventricles equal. A failing heart operates on a depressed Starling curve, so it needs a higher filling pressure for the same output — the rationale for careful fluid management."
      },
      {
        "h": "Autonomic and other regulation",
        "p": "Although the heart is myogenic, rate and force are adjusted by the cardiovascular centre in the medulla. SYMPATHETIC nerves and circulating adrenaline (acting on β1 receptors) increase heart rate (positive chronotropy) and contractility (positive inotropy); PARASYMPATHETIC (vagal) activity (acetylcholine on the SA/AV nodes) slows the rate. Baroreceptors sense blood pressure and chemoreceptors sense blood gases, adjusting output reflexly. Temperature, thyroid hormone, emotion, exercise and electrolytes (especially potassium and calcium) also influence heart action."
      },
      {
        "h": "The cardiac action potential",
        "p": "Contractile cardiac cells have a distinctive action potential: rapid depolarisation (Na+ influx), a prolonged PLATEAU phase (Ca2+ influx balancing K+ efflux) that gives the long refractory period and prevents tetany, then repolarisation (K+ efflux). The calcium that enters during the plateau also triggers further calcium release for contraction. This long refractory period ensures the heart relaxes and refills between beats."
      },
      {
        "h": "The electrocardiogram (ECG)",
        "p": "The ECG records the heart's electrical activity from the body surface. The P wave = atrial depolarisation; the QRS complex = ventricular depolarisation (atrial repolarisation is hidden within it); the T wave = ventricular repolarisation. The PR interval reflects AV conduction and the QT interval ventricular action-potential duration. The ECG shows rate and rhythm and helps detect conduction block, ischaemia/infarction and electrolyte effects (e.g. peaked T waves in hyperkalaemia)."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Resting CO ~5 L/min; SV ~70 mL; HR 60–100/min; EDV ~120 mL, ESV ~50 mL.",
          "Ejection fraction ~55–70%; SA node intrinsic rate 60–100/min.",
          "Cardiac cycle ~0.8 s at 75/min (systole ~0.3 s, diastole ~0.5 s).",
          "S1 = AV valve closure; S2 = semilunar valve closure."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Pulse rate, rhythm, volume and blood pressure reflect cardiac function and are core observations.",
          "Understanding cardiac output explains the signs of shock and heart failure and the rationale for inotropes, diuretics and fluids.",
          "Knowledge of the conducting system and ECG underpins safe cardiac monitoring and recognition of arrhythmias and heart block.",
          "Awareness that potassium and calcium alter the cardiac action potential guides electrolyte monitoring and cautious IV administration (e.g. never give concentrated potassium as a bolus)."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the conducting system of the heart and explain how the heartbeat is initiated, delayed and coordinated.",
      "Describe the phases and pressure–volume changes of the cardiac cycle and explain the origin of the two heart sounds.",
      "Define cardiac output, stroke volume and ejection fraction, and explain how preload, afterload and contractility determine stroke volume.",
      "State and explain the Frank–Starling law and its importance in matching output to venous return and in heart failure.",
      "Describe the cardiac action potential and explain the electrical events represented by the P wave, QRS complex and T wave of the ECG."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "In complete heart block the SA node's signal fails to reach the ventricles, which then beat at ~30/min from a ventricular pacemaker. This slow rate reflects:",
        "options": [
          "The SA node speeding up",
          "Loss of all automaticity",
          "The slower intrinsic rate of lower (escape) pacemakers",
          "Increased vagal tone only"
        ],
        "answer": 2,
        "rationale": "When higher pacemakers fail, ventricular tissue takes over at its much slower intrinsic rate (~20–40/min)."
      },
      {
        "type": "mcq",
        "q": "A patient with hypertension has a reduced stroke volume. The extra resistance the left ventricle must overcome to eject is the:",
        "options": [
          "Afterload",
          "Preload",
          "Contractility",
          "Ejection fraction"
        ],
        "answer": 0,
        "rationale": "High arterial pressure raises afterload, opposing ejection and reducing stroke volume."
      },
      {
        "type": "mcq",
        "q": "The delay of the impulse at the AV node is physiologically important because it:",
        "options": [
          "Lets the ventricles contract before the atria",
          "Keeps the valves permanently shut",
          "Speeds the heart",
          "Allows the atria to finish emptying into the ventricles before ventricular systole"
        ],
        "answer": 3,
        "rationale": "The ~0.1 s AV delay ensures atrial contribution to ventricular filling precedes ventricular contraction."
      },
      {
        "type": "mcq",
        "q": "According to the Frank–Starling law, increasing venous return (preload) will normally:",
        "options": [
          "Decrease stroke volume",
          "Increase stroke volume",
          "Stop the SA node",
          "Have no effect"
        ],
        "answer": 1,
        "rationale": "Greater stretch during filling improves filament overlap and produces a stronger contraction, raising stroke volume."
      },
      {
        "type": "mcq",
        "q": "A patient's echocardiogram shows an ejection fraction of 30%. This means that per beat the ventricle ejects:",
        "options": [
          "70% of its volume",
          "All of its blood",
          "30% of its end-diastolic volume (reduced function)",
          "None of its blood"
        ],
        "answer": 2,
        "rationale": "Ejection fraction = SV ÷ EDV; 30% is markedly reduced (normal ~55–70%), indicating impaired contraction."
      },
      {
        "type": "mcq",
        "q": "The first heart sound (S1, 'lub') is produced by closure of the:",
        "options": [
          "Atrioventricular valves",
          "Aortic valve",
          "Semilunar valves",
          "Coronary sinus"
        ],
        "answer": 0,
        "rationale": "S1 marks closure of the mitral and tricuspid (AV) valves at the onset of ventricular systole."
      },
      {
        "type": "mcq",
        "q": "The long plateau phase of the cardiac action potential, which prevents the heart being tetanised, is due mainly to inflow of:",
        "options": [
          "Sodium",
          "Chloride",
          "Potassium",
          "Calcium"
        ],
        "answer": 3,
        "rationale": "Calcium influx sustains the plateau, giving the long refractory period so the heart cannot summate contractions."
      },
      {
        "type": "mcq",
        "q": "On the ECG, the QRS complex represents:",
        "options": [
          "Atrial depolarisation",
          "Ventricular depolarisation",
          "Ventricular repolarisation",
          "Valve closure"
        ],
        "answer": 1,
        "rationale": "The QRS reflects rapid ventricular depolarisation preceding ventricular contraction."
      },
      {
        "type": "mcq",
        "q": "A patient in shock has cardiac output ~2.5 L/min. The most immediate compensatory change to defend output is usually:",
        "options": [
          "A fall in heart rate",
          "Vagal stimulation",
          "An increase in heart rate and contractility (sympathetic)",
          "Reduced venous return"
        ],
        "answer": 2,
        "rationale": "Sympathetic activation raises heart rate and contractility to defend cardiac output when it falls."
      },
      {
        "type": "mcq",
        "q": "Vagal (parasympathetic) stimulation acting on the SA node causes the heart to:",
        "options": [
          "Slow down",
          "Speed up",
          "Increase contractility",
          "Enlarge"
        ],
        "answer": 0,
        "rationale": "Acetylcholine from the vagus slows SA node firing, reducing heart rate; sympathetic activity does the opposite."
      },
      {
        "type": "fill",
        "q": "The proportion of end-diastolic volume ejected in each beat (SV ÷ EDV), normally about 55–70%, is the ____ ____.",
        "accept": [
          "ejection fraction"
        ],
        "rationale": "Ejection fraction is a key clinical index of ventricular contractile function."
      },
      {
        "type": "fill",
        "q": "The natural pacemaker of the heart is the ____ node.",
        "accept": [
          "sinoatrial",
          "sa",
          "sino-atrial"
        ],
        "rationale": "The sinoatrial node has the fastest intrinsic rate and sets the heart rhythm."
      }
    ]
  },

  /* TOPIC 7 */
  {
    "id": "phy-07-circulation-bp",
    "unit": "Unit 2 · Blood & Cardiovascular Physiology",
    "title": "Blood Circulation & Regulation of Blood Pressure",
    "readMinutes": 26,
    "summary": "Functional roles of blood vessels; the physics of flow, pressure and resistance; capillary Starling exchange and oedema; venous return; the systemic, pulmonary and fetal circulations; and the short-, medium- and long-term regulation of arterial blood pressure — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Functional roles of blood vessels",
        "list": [
          "Arteries — carry blood away from the heart under high pressure; their elastic recoil during diastole smooths flow and maintains diastolic pressure (the Windkessel effect).",
          "Arterioles — the main RESISTANCE vessels; their smooth muscle changes diameter to control blood pressure and distribute flow to organs.",
          "Capillaries — the EXCHANGE vessels; single-cell-thick walls allow gases, nutrients and wastes to pass between blood and tissues.",
          "Venules and veins — CAPACITANCE vessels; they collect blood at low pressure, contain valves, and hold ~60–70% of blood volume as a reservoir."
        ]
      },
      {
        "h": "Blood flow, pressure and resistance",
        "p": "Blood flows from high to low pressure; flow = pressure gradient ÷ resistance. By Poiseuille's principle, resistance is inversely proportional to the FOURTH power of the vessel radius, so even a small change in arteriolar diameter has a huge effect on resistance and flow — halving the radius raises resistance about sixteen-fold. Resistance also rises with blood viscosity (e.g. polycythaemia) and vessel length. This is why arterioles are the key controllers of blood pressure and regional flow, and why vasoconstriction sharply raises pressure."
      },
      {
        "h": "Arterial blood pressure",
        "p": "Blood pressure is the force exerted by blood on the vessel walls. Arterial pressure peaks in ventricular systole (systolic, ~120 mmHg) and falls in diastole (diastolic, ~80 mmHg); the difference is the PULSE PRESSURE (~40 mmHg). Mean arterial pressure (MAP ≈ diastolic + one-third pulse pressure ≈ 93 mmHg) is the average pressure driving tissue perfusion; a MAP of at least ~60–65 mmHg is generally needed to perfuse vital organs. Blood pressure is set by cardiac output and total peripheral resistance: BP = CO × TPR."
      },
      {
        "h": "Capillary exchange — Starling forces",
        "p": "Exchange across capillary walls occurs by diffusion (the main route for O2/CO2 and lipid-soluble solutes) and by BULK FLOW of fluid driven by opposing pressures. Hydrostatic (blood) pressure pushes fluid OUT — higher at the arterial end (~35 mmHg) than the venous end (~15 mmHg). Plasma oncotic pressure from albumin (~25 mmHg) pulls fluid back IN. Net filtration occurs at the arterial end and net reabsorption at the venous end; the small surplus (~2–3 L/day) is drained by the lymphatics.",
        "figure": {
          "caption": "Starling forces across a capillary: hydrostatic pressure filters fluid out (arterial end), oncotic pressure reabsorbs it (venous end); the surplus is drained by lymphatics.",
          "svg": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Capillary Starling forces.\"><rect x=\"60\" y=\"80\" width=\"440\" height=\"30\" rx=\"15\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"280\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803D\">CAPILLARY (arterial &#8594; venous end)</text><text x=\"90\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">HP ~35</text><path d=\"M90 78 L90 62\" stroke=\"#7C2D12\" stroke-width=\"2.5\" marker-end=\"url(#phArr7c)\"/><defs><marker id=\"phArr7c\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0 0L8 4L0 8z\" fill=\"#7C2D12\"/></marker></defs><text x=\"90\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">fluid OUT</text><text x=\"470\" y=\"55\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">OP ~25</text><path d=\"M470 62 L470 78\" stroke=\"#15803D\" stroke-width=\"2.5\" marker-end=\"url(#phArr7c)\"/><text x=\"470\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">fluid IN</text><text x=\"280\" y=\"150\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">surplus &#8594; lymphatics</text></svg>"
        }
      },
      {
        "h": "Oedema — mechanisms",
        "p": "Oedema is excess interstitial fluid. It arises whenever filtration exceeds reabsorption plus lymph drainage.",
        "list": [
          "Raised capillary hydrostatic pressure — heart failure, venous obstruction, fluid overload.",
          "Reduced plasma oncotic pressure — low albumin (liver disease, nephrotic syndrome, malnutrition).",
          "Increased capillary permeability — inflammation, allergy, burns, sepsis.",
          "Blocked lymphatic drainage — lymphoedema after surgery or infection (e.g. filariasis)."
        ]
      },
      {
        "h": "Venous return",
        "p": "Because venous pressure is low (~5–10 mmHg), blood is helped back to the heart by the SKELETAL MUSCLE PUMP (contracting muscles squeeze veins, with valves ensuring one-way flow), the RESPIRATORY PUMP (inspiration lowers thoracic pressure, drawing blood toward the heart), venous tone (sympathetic venoconstriction), and body position. Adequate venous return is critical because, by the Frank–Starling law, it sets preload and therefore cardiac output. Prolonged standing or immobility reduces venous return, causing fainting, venous stasis and a risk of deep vein thrombosis."
      },
      {
        "h": "Systemic and pulmonary circulations",
        "p": "The PULMONARY circulation carries deoxygenated blood from the right ventricle to the lungs and returns oxygenated blood to the left atrium; it is a low-pressure (~25/8 mmHg), low-resistance circuit for gas exchange. The SYSTEMIC circulation carries oxygenated blood from the left ventricle to all tissues and returns deoxygenated blood to the right atrium; it is a high-pressure circuit. Special regional circulations (coronary, cerebral, hepatic portal, renal) have autoregulation to keep flow constant despite pressure changes."
      },
      {
        "h": "Fetal circulation",
        "p": "Before birth the lungs are non-functional, so the fetal circulation bypasses them. The placenta oxygenates fetal blood; three shunts divert blood away from the lungs and liver: the DUCTUS VENOSUS (bypasses the liver, carrying oxygenated blood from the umbilical vein to the inferior vena cava), the FORAMEN OVALE (a flap opening between the atria), and the DUCTUS ARTERIOSUS (between the pulmonary artery and aorta). At birth, the first breaths expand the lungs, pulmonary resistance falls, left atrial pressure rises, and these shunts close — the foramen ovale becoming the fossa ovalis and the ductus arteriosus the ligamentum arteriosum. Failure to close causes congenital defects (patent ductus arteriosus, atrial septal defect).",
        "figure": {
          "caption": "Fetal shunts that bypass the lungs and liver, and what they normally become after birth.",
          "svg": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fetal circulatory shunts.\"><text x=\"280\" y=\"24\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">Fetal shunts (close at birth)</text><rect x=\"20\" y=\"45\" width=\"165\" height=\"55\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"102\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">Ductus venosus</text><text x=\"102\" y=\"87\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">bypasses liver</text><rect x=\"197\" y=\"45\" width=\"165\" height=\"55\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"279\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">Foramen ovale</text><text x=\"279\" y=\"87\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">right to left atrium</text><rect x=\"374\" y=\"45\" width=\"165\" height=\"55\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"456\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7C2D12\">Ductus arteriosus</text><text x=\"456\" y=\"87\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">pulm. artery to aorta</text><text x=\"280\" y=\"135\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0F4C3A\">All bypass the non-functioning fetal lungs</text><text x=\"280\" y=\"158\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">At birth lungs expand &#8594; shunts close</text></svg>"
        }
      },
      {
        "h": "Short-term regulation — the baroreflex",
        "p": "Blood pressure is controlled second-to-second by the BARORECEPTOR reflex. Baroreceptors in the carotid sinus and aortic arch sense arterial stretch. A fall in pressure reduces their firing; the medullary cardiovascular centre responds by increasing sympathetic outflow (raising heart rate, contractility and vasoconstriction) and reducing vagal tone — restoring pressure. A rise does the opposite. This reflex explains why blood pressure is briefly maintained when a person stands, and why an impaired baroreflex (e.g. in the elderly or diabetics) causes postural hypotension."
      },
      {
        "h": "Medium- and long-term regulation",
        "p": "Over minutes to hours, HORMONES fine-tune pressure: adrenaline and noradrenaline (vasoconstriction, raised CO), ADH/vasopressin (water retention and vasoconstriction), and the RAAS. Over hours to days, the KIDNEYS provide the dominant long-term control by adjusting blood VOLUME: the renin–angiotensin–aldosterone system responds to low pressure/volume — renin generates angiotensin II (a powerful vasoconstrictor) and aldosterone (sodium and water retention) — raising volume and pressure. Pressure natriuresis (higher pressure increases sodium/water excretion) is a further long-term stabiliser. Most antihypertensive drugs act on these systems."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "BP ~120/80 mmHg; pulse pressure ~40 mmHg; MAP ~93 mmHg (target ≥65 for organ perfusion).",
          "Resistance ∝ 1/radius⁴; veins hold ~60–70% of blood volume.",
          "Capillary hydrostatic pressure ~35 (arterial) → ~15 (venous) mmHg; plasma oncotic pressure ~25 mmHg.",
          "Pulmonary artery pressure ~25/8 mmHg; ~2–3 L/day of surplus filtrate drained by lymph."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Accurate blood pressure measurement (correct cuff, position, technique) and interpretation of hypertension and hypotension are core skills.",
          "The baroreflex explains postural (orthostatic) hypotension — advise patients to rise slowly and check lying/standing BP.",
          "Capillary dynamics explain oedema and guide positioning, fluid management, limb elevation and pressure-area/skin care.",
          "Encourage leg movements, early mobilisation and use of prophylaxis to promote venous return and prevent deep vein thrombosis."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the functional roles of arteries, arterioles, capillaries and veins and relate each to its structure.",
      "Explain the physics of blood flow and resistance, and how arterial blood pressure and mean arterial pressure are determined.",
      "Describe capillary fluid exchange in terms of Starling forces and explain the four mechanisms that produce oedema.",
      "Explain the short-term (baroreflex) and long-term (renal/RAAS) regulation of arterial blood pressure.",
      "Describe the fetal circulation, its three shunts, and the circulatory changes that occur at birth."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A vasoconstrictor drug halves the radius of arterioles. By Poiseuille's principle, resistance will increase approximately:",
        "options": [
          "Two-fold",
          "Four-fold",
          "Sixteen-fold",
          "Not at all"
        ],
        "answer": 2,
        "rationale": "Resistance is inversely proportional to radius⁴, so halving the radius raises resistance about 2⁴ = 16-fold — hence arterioles' powerful control of BP."
      },
      {
        "type": "mcq",
        "q": "A patient with nephrotic syndrome loses albumin in the urine and develops generalised oedema. The main mechanism is:",
        "options": [
          "Reduced plasma oncotic pressure",
          "Raised capillary hydrostatic pressure",
          "Blocked lymphatics",
          "Increased permeability"
        ],
        "answer": 0,
        "rationale": "Low albumin lowers the oncotic pull that returns fluid to capillaries, so fluid accumulates in the interstitium."
      },
      {
        "type": "mcq",
        "q": "Arterial blood pressure is determined mainly by:",
        "options": [
          "Blood colour and viscosity only",
          "Red cell number alone",
          "Body temperature alone",
          "Cardiac output and total peripheral resistance"
        ],
        "answer": 3,
        "rationale": "BP = CO × TPR; changes in either the pump output or arteriolar resistance alter pressure."
      },
      {
        "type": "mcq",
        "q": "When a healthy person stands up quickly, blood pressure is kept from falling mainly by the:",
        "options": [
          "Renin–angiotensin system (immediate)",
          "Baroreceptor reflex",
          "Skeletal muscle pump only",
          "Pressure natriuresis"
        ],
        "answer": 1,
        "rationale": "The fast baroreflex increases heart rate and vasoconstriction within seconds to defend pressure on standing."
      },
      {
        "type": "mcq",
        "q": "Net fluid filtration out of a capillary occurs at the arterial end because there:",
        "options": [
          "Oncotic pressure exceeds hydrostatic pressure",
          "Both pressures are zero",
          "Hydrostatic pressure exceeds oncotic pressure",
          "The capillary is closed"
        ],
        "answer": 2,
        "rationale": "At the arterial end capillary hydrostatic pressure (~35 mmHg) exceeds oncotic pressure (~25 mmHg), so fluid is pushed out."
      },
      {
        "type": "mcq",
        "q": "In the fetus, the foramen ovale allows blood to pass:",
        "options": [
          "Between the two atria (right to left)",
          "From aorta to pulmonary artery",
          "Through the liver",
          "From lung to placenta"
        ],
        "answer": 0,
        "rationale": "The foramen ovale shunts blood from the right atrium directly to the left atrium, bypassing the non-functioning lungs."
      },
      {
        "type": "mcq",
        "q": "The dominant system for long-term (days) control of blood pressure works by adjusting:",
        "options": [
          "Heart rate",
          "Blood viscosity",
          "Body temperature",
          "Blood volume (kidneys/RAAS)"
        ],
        "answer": 3,
        "rationale": "The kidneys, via the RAAS and pressure natriuresis, control long-term BP through blood volume."
      },
      {
        "type": "mcq",
        "q": "Venous return to the heart is aided mainly by the:",
        "options": [
          "High arterial pressure alone",
          "Skeletal muscle pump with venous valves and the respiratory pump",
          "Capillary diffusion",
          "Red cell shape"
        ],
        "answer": 1,
        "rationale": "Contracting muscles with one-way valves, plus respiratory pressure changes, drive low-pressure venous blood back to the heart."
      },
      {
        "type": "mcq",
        "q": "A patient in septic shock has a MAP of 55 mmHg. This is clinically important because MAP below ~65 mmHg:",
        "options": [
          "Improves organ perfusion",
          "Has no effect on the kidneys",
          "May be inadequate to perfuse vital organs",
          "Only affects the skin"
        ],
        "answer": 2,
        "rationale": "MAP is the driving pressure for perfusion; below ~60–65 mmHg vital organs (kidney, brain, heart) may be underperfused."
      },
      {
        "type": "mcq",
        "q": "Angiotensin II raises blood pressure mainly by:",
        "options": [
          "Powerful vasoconstriction and stimulating aldosterone",
          "Dilating arterioles",
          "Slowing the heart",
          "Lowering blood volume"
        ],
        "answer": 0,
        "rationale": "Angiotensin II is a potent vasoconstrictor and drives aldosterone-mediated sodium and water retention."
      },
      {
        "type": "fill",
        "q": "The difference between systolic and diastolic blood pressure is called the ____ pressure.",
        "accept": [
          "pulse"
        ],
        "rationale": "Pulse pressure = systolic minus diastolic pressure (~40 mmHg)."
      },
      {
        "type": "fill",
        "q": "The fetal shunt connecting the pulmonary artery to the aorta is the ductus ____.",
        "accept": [
          "arteriosus"
        ],
        "rationale": "The ductus arteriosus diverts blood from the pulmonary artery to the aorta, becoming the ligamentum arteriosum after birth."
      }
    ]
  },

  /* TOPIC 8 */
  {
    "id": "phy-08-respiratory-physiology",
    "unit": "Unit 3 · Respiration, Digestion & Excretion",
    "title": "Respiratory Physiology: Ventilation, Gas Exchange & Transport",
    "readMinutes": 26,
    "summary": "Functions and steps of respiration; the mechanics of breathing, compliance and surfactant; lung volumes and capacities; gas exchange by diffusion; transport of O2 and CO2 with the oxygen–haemoglobin curve and Bohr effect; neural and chemical control of breathing; the lung's role in acid-base balance; and reading a normal arterial blood gas — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Functions and steps of respiration",
        "p": "Respiration supplies oxygen for cellular energy production and removes carbon dioxide, a waste of metabolism. It has four steps: pulmonary VENTILATION (breathing), EXTERNAL respiration (gas exchange in the lungs), TRANSPORT of gases in the blood, and INTERNAL respiration (gas exchange at the tissues). The system also regulates blood pH, warms/humidifies/filters air, defends against inhaled particles, and enables speech and smell."
      },
      {
        "h": "Mechanics of breathing",
        "p": "Air moves because of pressure differences created by changing thoracic volume (Boyle's law: at constant temperature, volume up → pressure down).",
        "list": [
          "Inspiration (active) — the diaphragm and external intercostals contract, enlarging the thorax; intrapulmonary pressure falls below atmospheric, so air flows in.",
          "Expiration (passive at rest) — muscles relax, the elastic lungs recoil, thoracic volume falls, pressure rises, and air flows out; forced expiration adds abdominal and internal intercostal effort.",
          "Intrapleural pressure is always slightly sub-atmospheric, keeping the lungs expanded against the chest wall; if the pleura is breached (pneumothorax) the lung collapses."
        ]
      },
      {
        "h": "Compliance, elastance and surfactant",
        "p": "Compliance is the ease with which the lungs and chest wall stretch (change in volume per unit change in pressure); it is REDUCED in stiff, fibrotic lungs and increased in emphysema (loss of elastic tissue). Alveolar surface tension tends to collapse alveoli; SURFACTANT (produced by type II pneumocytes) lowers surface tension, prevents collapse, stabilises alveoli of different sizes, and reduces the work of breathing. Its deficiency in premature babies causes neonatal respiratory distress syndrome."
      },
      {
        "h": "Work of breathing and airway resistance",
        "p": "The work of breathing is the effort needed to overcome the elastic recoil of the lungs and the resistance of the airways. Airway resistance rises steeply when airways narrow — in asthma (bronchospasm, mucosal oedema) and COPD — greatly increasing the work of breathing and the sensation of breathlessness. Bronchodilators reduce resistance by relaxing airway smooth muscle."
      },
      {
        "h": "Lung volumes and capacities",
        "p": "Spirometry measures the air moved in breathing (a capacity is the sum of two or more volumes).",
        "list": [
          "Tidal volume (~500 mL) — air of one normal quiet breath.",
          "Inspiratory and expiratory reserve volumes — extra air inhaled or exhaled forcibly.",
          "Residual volume (~1200 mL) — air remaining after maximal expiration (keeps alveoli open).",
          "Vital capacity (~4800 mL) — maximum air exhaled after a maximal inspiration (TV + IRV + ERV).",
          "Total lung capacity (~6000 mL) — vital capacity plus residual volume.",
          "Anatomical dead space (~150 mL) — air in conducting airways that takes no part in gas exchange.",
          "FEV1/FVC ratio — distinguishes obstructive (reduced ratio) from restrictive (preserved ratio) disease."
        ]
      },
      {
        "h": "Gas exchange (external and internal respiration)",
        "p": "Gases move by DIFFUSION from high to low partial pressure across the thin respiratory membrane. In the lungs, oxygen diffuses from alveolar air (PO2 ~104 mmHg) into blood (PO2 ~40 mmHg venous), and CO2 diffuses the other way to be exhaled (external respiration). At the tissues the gradients reverse: oxygen leaves the blood for the cells and CO2 enters the blood (internal respiration). Efficient exchange needs a large, thin, moist surface and a good match of ventilation to perfusion (V/Q). A V/Q mismatch (e.g. in pneumonia or pulmonary embolism) impairs oxygenation.",
        "figure": {
          "caption": "Gas exchange follows partial-pressure gradients: O2 into blood and CO2 out at the lungs; the reverse at the tissues.",
          "svg": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"External and internal respiration.\"><defs><marker id=\"phArr8\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"30\" y=\"55\" width=\"180\" height=\"80\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"120\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">LUNGS (alveoli)</text><text x=\"120\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">O2 in &#8594; blood</text><text x=\"120\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">CO2 out &#8592; blood</text><rect x=\"350\" y=\"55\" width=\"180\" height=\"80\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"440\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7C2D12\">TISSUES (cells)</text><text x=\"440\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">O2 out &#8594; cells</text><text x=\"440\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">CO2 in &#8592; cells</text><line x1=\"210\" y1=\"80\" x2=\"348\" y2=\"80\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr8)\"/><text x=\"280\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">O2 carried</text><line x1=\"350\" y1=\"115\" x2=\"212\" y2=\"115\" stroke=\"#7C2D12\" stroke-width=\"2.5\" marker-end=\"url(#phArr8)\"/><text x=\"280\" y=\"132\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">CO2 carried</text></svg>"
        }
      },
      {
        "h": "Transport of oxygen and the dissociation curve",
        "p": "About 98% of oxygen is carried bound to haemoglobin as oxyhaemoglobin; only ~2% is dissolved in plasma (the part measured as PaO2). Loading and unloading follow the S-shaped (sigmoid) oxygen–haemoglobin dissociation curve: the flat upper part means saturation stays high even if alveolar PO2 falls somewhat (a safety margin), while the steep lower part means large amounts of oxygen unload for small PO2 drops in the tissues. A RIGHT shift (the Bohr effect — from high CO2, low pH, high temperature, high 2,3-DPG) reduces haemoglobin's affinity and unloads more oxygen where tissues are active; a LEFT shift holds oxygen more tightly.",
        "figure": {
          "caption": "The sigmoid oxygen–haemoglobin dissociation curve; a right shift (high CO2, low pH, heat) unloads more O2 to active tissues (Bohr effect).",
          "svg": "<svg viewBox=\"0 0 560 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Oxygen haemoglobin dissociation curve.\"><line x1=\"70\" y1=\"180\" x2=\"530\" y2=\"180\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><line x1=\"70\" y1=\"180\" x2=\"70\" y2=\"30\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"300\" y=\"205\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0F4C3A\">PO2 (mmHg)</text><text x=\"25\" y=\"105\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0F4C3A\" transform=\"rotate(-90 25 105)\">% saturation</text><path d=\"M70 178 Q150 165 200 110 Q260 55 340 45 Q430 40 530 38\" fill=\"none\" stroke=\"#15803D\" stroke-width=\"3\"/><path d=\"M70 178 Q170 172 240 120 Q320 65 400 52 Q470 46 530 44\" fill=\"none\" stroke=\"#7C2D12\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/><text x=\"360\" y=\"80\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">normal</text><text x=\"430\" y=\"90\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">right shift (Bohr)</text></svg>"
        }
      },
      {
        "h": "Transport of carbon dioxide",
        "p": "Carbon dioxide is carried in three forms: mostly (~70%) as BICARBONATE ions formed in red cells (CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3−, catalysed by carbonic anhydrase; HCO3− then exchanges out for Cl− in the chloride shift), about 20–23% bound to haemoglobin as carbaminohaemoglobin, and ~7% dissolved in plasma. Deoxygenated blood carries CO2 more readily (the Haldane effect). This link between CO2 and bicarbonate is why the lungs are central to acid-base balance."
      },
      {
        "h": "Neural control of breathing",
        "p": "Breathing is generated automatically by respiratory centres in the MEDULLA (the rhythm generator — dorsal and ventral groups) and PONS (which smooth and fine-tune the rhythm). These drive the diaphragm (via the phrenic nerve) and intercostals. The rhythm can be overridden voluntarily (talking, breath-holding) and modified by emotion, temperature, pain and the cortex, but the automatic drive resumes."
      },
      {
        "h": "Chemical control of breathing",
        "p": "The strongest normal stimulus to breathe is a rise in blood CO2 (and the resulting fall in CSF pH), detected by CENTRAL chemoreceptors in the medulla. PERIPHERAL chemoreceptors (carotid and aortic bodies) respond mainly to a large fall in PaO2 (below ~60 mmHg) and to raised CO2/H+. In chronic CO2 retention (some COPD patients), the central drive is blunted and breathing may depend more on the hypoxic drive — a reason to titrate oxygen carefully. Stretch receptors (Hering–Breuer reflex) protect against over-inflation."
      },
      {
        "h": "The lung, acid-base balance and the ABG",
        "p": "By adjusting CO2 (an acid) exhalation, the lungs regulate blood pH within minutes: faster/deeper breathing lowers CO2 and raises pH; slower breathing retains CO2 and lowers pH. A normal arterial blood gas shows PaO2 80–100 mmHg, SaO2 95–100%, PaCO2 35–45 mmHg, pH 7.35–7.45 and HCO3− 22–26 mmol/L. Reading these together shows oxygenation and whether an acid-base disturbance is respiratory (CO2-driven) or metabolic (HCO3−-driven) and whether it is being compensated."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Tidal volume ~500 mL; respiratory rate 12–20/min; minute ventilation ~6 L/min; dead space ~150 mL.",
          "Vital capacity ~4800 mL; residual volume ~1200 mL; total lung capacity ~6000 mL.",
          "Alveolar PO2 ~104 mmHg, PCO2 ~40 mmHg; venous PO2 ~40 mmHg.",
          "ABG: PaO2 80–100, SaO2 95–100%, PaCO2 35–45 mmHg, pH 7.35–7.45, HCO3− 22–26 mmol/L."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Assess respiratory rate, depth, effort, use of accessory muscles and SpO2; recognise hypoxia and respiratory distress early.",
          "Titrate oxygen carefully in chronic CO2 retainers, guided by target saturations, to avoid removing the hypoxic drive.",
          "Position patients upright and encourage deep breathing and coughing to improve ventilation and prevent atelectasis and infection.",
          "Interpret ABG and pulse oximetry together (oximetry does not detect high CO2) to guide and evaluate oxygen and ventilation therapy."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the mechanics of inspiration and expiration, including intrapleural pressure, compliance and the role of surfactant.",
      "Explain external and internal respiration and the factors (including ventilation–perfusion matching) that make gas exchange efficient.",
      "Describe how oxygen and carbon dioxide are transported in the blood and explain the oxygen–haemoglobin dissociation curve and the Bohr effect.",
      "Explain the neural and chemical control of breathing, including the roles of central and peripheral chemoreceptors and the hypoxic drive.",
      "Describe the lung's role in acid-base balance and state the normal values of an arterial blood gas, with the nurse's role in oxygen therapy."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient's chest X-ray shows a collapsed lung after a stab wound breached the pleura. The lung collapsed because:",
        "options": [
          "Surfactant increased",
          "Compliance rose",
          "The sub-atmospheric intrapleural pressure was lost",
          "CO2 diffused out"
        ],
        "answer": 2,
        "rationale": "The negative intrapleural pressure normally keeps the lung expanded; a pneumothorax abolishes it, so elastic recoil collapses the lung."
      },
      {
        "type": "mcq",
        "q": "During active exercise, oxygen unloading from haemoglobin at the muscles is enhanced by high CO2, low pH and heat. This right-shift is the:",
        "options": [
          "Bohr effect",
          "Haldane effect",
          "Boyle's law",
          "Chloride shift"
        ],
        "answer": 0,
        "rationale": "The Bohr effect shifts the dissociation curve right, lowering haemoglobin's O2 affinity so more O2 is released to active tissues."
      },
      {
        "type": "mcq",
        "q": "Most carbon dioxide is transported in the blood as:",
        "options": [
          "Dissolved gas",
          "Carbaminohaemoglobin",
          "Carbon monoxide",
          "Bicarbonate ions"
        ],
        "answer": 3,
        "rationale": "About 70% of CO2 travels as bicarbonate formed in red cells by carbonic anhydrase, linking CO2 to acid-base balance."
      },
      {
        "type": "mcq",
        "q": "A premature baby develops respiratory distress from stiff, collapsing alveoli. The missing substance is:",
        "options": [
          "Haemoglobin",
          "Surfactant",
          "Bile",
          "Mucus"
        ],
        "answer": 1,
        "rationale": "Surfactant from type II pneumocytes lowers alveolar surface tension; its lack causes neonatal respiratory distress syndrome."
      },
      {
        "type": "mcq",
        "q": "In a healthy person the strongest stimulus that increases breathing is a rise in arterial:",
        "options": [
          "Oxygen",
          "Glucose",
          "Carbon dioxide (and fall in pH)",
          "Sodium"
        ],
        "answer": 2,
        "rationale": "Central chemoreceptors respond most powerfully to raised CO2 and the resulting fall in CSF pH."
      },
      {
        "type": "mcq",
        "q": "A pulse oximeter reads 98% but the patient is drowsy with slow breathing. The limitation being illustrated is that oximetry:",
        "options": [
          "Does not detect a rising carbon dioxide level",
          "Overreads oxygen always",
          "Measures blood pressure",
          "Cannot read above 90%"
        ],
        "answer": 0,
        "rationale": "Oximetry measures O2 saturation, not CO2; a patient can be well saturated (especially on oxygen) yet retaining dangerous CO2 — an ABG is needed."
      },
      {
        "type": "mcq",
        "q": "Spirometry showing a reduced FEV1/FVC ratio is characteristic of:",
        "options": [
          "Restrictive disease",
          "Normal lungs",
          "Anaemia",
          "Obstructive disease (e.g. asthma, COPD)"
        ],
        "answer": 3,
        "rationale": "Airway obstruction slows forced expiration, lowering the FEV1/FVC ratio; restrictive disease preserves the ratio."
      },
      {
        "type": "mcq",
        "q": "In pulmonary embolism a region is ventilated but not perfused. This is an example of:",
        "options": [
          "Increased surfactant",
          "A ventilation–perfusion (V/Q) mismatch",
          "Improved gas exchange",
          "A right shift"
        ],
        "answer": 1,
        "rationale": "V/Q mismatch — ventilation without perfusion (dead space) — impairs oxygenation in pulmonary embolism."
      },
      {
        "type": "mcq",
        "q": "The volume of air in the conducting airways that takes no part in gas exchange is the:",
        "options": [
          "Tidal volume",
          "Residual volume",
          "Anatomical dead space",
          "Vital capacity"
        ],
        "answer": 2,
        "rationale": "Anatomical dead space (~150 mL) fills the airways but never reaches gas-exchanging alveoli."
      },
      {
        "type": "mcq",
        "q": "The reason high-flow oxygen must be given cautiously to some patients with chronic COPD is that:",
        "options": [
          "They may rely on hypoxic drive, and removing it can worsen CO2 retention",
          "Oxygen is toxic to all lungs",
          "It increases surfactant",
          "It lowers haemoglobin"
        ],
        "answer": 0,
        "rationale": "With a blunted CO2 response, breathing may depend on hypoxic drive; uncontrolled oxygen can reduce ventilation and raise CO2."
      },
      {
        "type": "fill",
        "q": "The maximum volume of air a person can exhale after a maximal inspiration is the ____ capacity.",
        "accept": [
          "vital"
        ],
        "rationale": "Vital capacity is the largest breath (TV + IRV + ERV) a person can move."
      },
      {
        "type": "fill",
        "q": "The enzyme in red cells that speeds the conversion of CO2 and water to carbonic acid is carbonic ____.",
        "accept": [
          "anhydrase"
        ],
        "rationale": "Carbonic anhydrase catalyses CO2 + H2O ⇌ H2CO3, enabling bicarbonate transport of CO2."
      }
    ]
  },

  /* TOPIC 9 */
  {
    "id": "phy-09-digestive-physiology",
    "unit": "Unit 3 · Respiration, Digestion & Excretion",
    "title": "Digestive Physiology: Digestion, Absorption & Metabolism",
    "readMinutes": 26,
    "summary": "The processes of digestion; motility and its control; salivary, gastric, pancreatic, hepatic and intestinal secretions; enzymatic breakdown of carbohydrate, protein and fat; the phases of gastric secretion; mechanisms of absorption; the liver's metabolic and biliary functions; and an outline of energy metabolism — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Functions and processes of digestion",
        "p": "The digestive system breaks food into absorbable units and takes up nutrients, water and electrolytes. It performs six basic processes: INGESTION (taking in food), SECRETION (of enzymes, acid, bile, mucus — about 7 L of fluids daily), MOTILITY (mixing and propulsion), DIGESTION (mechanical and chemical breakdown), ABSORPTION (into blood/lymph), and ELIMINATION (defaecation of indigestible residue)."
      },
      {
        "h": "Control of the gut — neural and hormonal",
        "p": "The gut has its own ENTERIC nervous system ('the gut brain') in the submucosal and myenteric plexuses that coordinates local reflexes, modulated by the autonomic nervous system (parasympathetic/vagal activity stimulates secretion and motility; sympathetic inhibits). Key GI hormones include gastrin (stimulates gastric acid), secretin (stimulates pancreatic bicarbonate and inhibits acid), cholecystokinin/CCK (stimulates pancreatic enzymes and gallbladder contraction), and gastric inhibitory peptide. These integrate the timing of secretion and motility with the presence of food."
      },
      {
        "h": "Motility — mixing and propulsion",
        "p": "PERISTALSIS is the wave of circular-muscle contraction behind and relaxation ahead that propels contents onward. SEGMENTATION mixes chyme with secretions and exposes it to the absorptive surface without net forward movement. Sphincters (lower oesophageal, pyloric, ileocaecal, anal) regulate passage between regions and prevent reflux. The gastrocolic and defaecation reflexes coordinate elimination."
      },
      {
        "h": "Mouth, saliva and swallowing",
        "p": "MASTICATION (chewing) breaks food mechanically and mixes it with saliva to form a bolus. Saliva (~1–1.5 L/day) contains mucus (lubrication), salivary amylase (begins starch digestion), lysozyme (antibacterial) and buffers. SWALLOWING (deglutition) has a voluntary oral phase then involuntary pharyngeal and oesophageal phases; the epiglottis closes the larynx to protect the airway, and peristalsis carries the bolus to the stomach."
      },
      {
        "h": "The stomach and gastric secretion",
        "p": "The stomach stores food, mixes it into chyme, and begins protein digestion. Gastric glands secrete ~2 L/day of gastric juice.",
        "list": [
          "Parietal cells — hydrochloric acid (pH ~1.5–3.5; kills microbes, denatures protein, activates pepsin) and intrinsic factor (needed for vitamin B12 absorption).",
          "Chief cells — pepsinogen, activated by acid to pepsin, which digests protein.",
          "Mucous cells — alkaline mucus that protects the lining from acid and pepsin.",
          "G cells — gastrin, the hormone that drives acid secretion."
        ]
      },
      {
        "h": "Phases of gastric secretion",
        "p": "Gastric secretion is regulated in three overlapping phases. The CEPHALIC phase (before food arrives) is triggered by the sight, smell, taste and thought of food via the vagus. The GASTRIC phase (largest) begins when food distends the stomach and raises pH, releasing gastrin and stimulating acid and pepsinogen. The INTESTINAL phase begins as chyme enters the duodenum: initially it briefly promotes, then INHIBITS gastric activity (via the enterogastric reflex and hormones like secretin and CCK) so the small intestine is not overwhelmed.",
        "figure": {
          "caption": "The three phases of gastric secretion: cephalic (anticipatory, vagal), gastric (food in stomach, gastrin), intestinal (chyme in duodenum, mostly inhibitory).",
          "svg": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Phases of gastric secretion.\"><defs><marker id=\"phArr9\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"70\" width=\"150\" height=\"65\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"90\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">CEPHALIC</text><text x=\"90\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">sight/smell · vagus</text><rect x=\"205\" y=\"70\" width=\"150\" height=\"65\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"280\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">GASTRIC</text><text x=\"280\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">food in stomach · gastrin</text><rect x=\"395\" y=\"70\" width=\"150\" height=\"65\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"470\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7C2D12\">INTESTINAL</text><text x=\"470\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">chyme in duodenum · inhibits</text><line x1=\"165\" y1=\"102\" x2=\"201\" y2=\"102\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr9)\"/><line x1=\"355\" y1=\"102\" x2=\"391\" y2=\"102\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr9)\"/></svg>"
        }
      },
      {
        "h": "The pancreas and liver in digestion",
        "p": "The exocrine PANCREAS secretes ~1.5 L/day of alkaline (bicarbonate-rich) juice that neutralises acidic chyme, plus the main digestive enzymes: amylase (starch), lipase (fat, with bile), and proteases (trypsin, chymotrypsin — secreted as inactive precursors and activated in the duodenum to protect the pancreas). The LIVER produces BILE (bile salts) which is stored and concentrated in the gallbladder; CCK triggers gallbladder contraction after a fatty meal. Bile salts EMULSIFY fat into tiny droplets, hugely increasing the surface area for lipase to act."
      },
      {
        "h": "Chemical digestion — summary",
        "list": [
          "Carbohydrates — starch → maltose (salivary/pancreatic amylase) → glucose (brush-border maltase, sucrase, lactase).",
          "Proteins → peptides (pepsin, trypsin, chymotrypsin) → amino acids (peptidases).",
          "Fats → (emulsified by bile) → fatty acids + monoglycerides (pancreatic lipase).",
          "Nucleic acids → nucleotides → bases and sugars (nucleases)."
        ]
      },
      {
        "h": "Absorption",
        "p": "Most absorption occurs in the SMALL INTESTINE, whose surface area is vastly increased by circular folds, villi and microvilli (the brush border). Glucose and amino acids are absorbed by Na+-coupled secondary active transport into the blood. Fatty acids and monoglycerides enter cells via micelles, are re-formed into triglycerides packaged as chylomicrons, and enter the LYMPH (lacteals). Water follows osmotically. The LARGE INTESTINE absorbs remaining water and electrolytes and houses gut flora that make some vitamin K and B vitamins, forming and storing faeces."
      },
      {
        "h": "Liver — metabolic and other functions",
        "list": [
          "Carbohydrate metabolism — stores glucose as glycogen and releases it (glycogenolysis) or makes new glucose (gluconeogenesis) to buffer blood glucose.",
          "Protein metabolism — makes plasma proteins (albumin, clotting factors) and converts toxic ammonia to urea.",
          "Fat metabolism — synthesis of cholesterol and lipoproteins; ketone production.",
          "Detoxification — of drugs, alcohol and hormones (first-pass metabolism).",
          "Bile production, storage of iron and vitamins (A, D, B12), and breakdown of old red cells (bilirubin)."
        ]
      },
      {
        "h": "Outline of energy metabolism",
        "p": "Absorbed nutrients are used for energy or stored. Glucose is oxidised through glycolysis, the Krebs (citric acid) cycle and the electron transport chain to yield ATP (aerobically ~30–32 ATP per glucose). Fats yield the most energy per gram (~9 kcal/g vs ~4 kcal/g for carbohydrate and protein). Insulin promotes storage (after meals); glucagon, adrenaline and cortisol mobilise fuel (between meals), keeping blood glucose stable — an integrated homeostatic system linking gut, liver, pancreas and tissues."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Daily GI secretions ~7 L (saliva ~1.5, gastric ~2, pancreatic ~1.5, bile ~0.5, intestinal ~1).",
          "Gastric pH ~1.5–3.5; intrinsic factor needed for vitamin B12 absorption.",
          "Energy: carbohydrate/protein ~4 kcal/g, fat ~9 kcal/g; glucose yields ~30–32 ATP aerobically.",
          "Main GI hormones: gastrin, secretin, cholecystokinin (CCK)."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Loss of intrinsic factor (gastrectomy, pernicious anaemia) causes vitamin B12 deficiency and megaloblastic anaemia.",
          "Understanding secretion phases explains stress ulcers, the action of proton-pump inhibitors, and the value of nil-by-mouth before surgery.",
          "Bile/fat physiology explains steatorrhoea and fat-soluble vitamin (A, D, E, K) deficiency in obstructive jaundice or pancreatic disease.",
          "Fluid and electrolyte losses from vomiting, diarrhoea, fistulae or nasogastric aspiration must be measured and replaced (large GI secretion volumes)."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "List the six basic processes of the digestive system and explain how gut motility (peristalsis and segmentation) achieves mixing and propulsion.",
      "Describe the cells and secretions of the stomach and explain the three phases of gastric secretion.",
      "Describe the roles of pancreatic juice and bile in digestion, including the emulsification and digestion of fat.",
      "Explain how carbohydrates, proteins and fats are digested and absorbed, noting the different route taken by absorbed fat.",
      "Describe the metabolic functions of the liver and outline how blood glucose is kept stable between and after meals."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient who has had a total gastrectomy develops megaloblastic anaemia. The most likely reason is loss of:",
        "options": [
          "Pepsin",
          "Amylase",
          "Intrinsic factor (needed for vitamin B12 absorption)",
          "Bile salts"
        ],
        "answer": 2,
        "rationale": "Parietal cells make intrinsic factor; without the stomach, vitamin B12 cannot be absorbed, causing megaloblastic anaemia."
      },
      {
        "type": "mcq",
        "q": "After a fatty meal the gallbladder contracts to release bile. The hormone responsible is:",
        "options": [
          "Cholecystokinin (CCK)",
          "Gastrin",
          "Secretin",
          "Insulin"
        ],
        "answer": 0,
        "rationale": "CCK, released by duodenal cells in response to fat, stimulates gallbladder contraction and pancreatic enzyme secretion."
      },
      {
        "type": "mcq",
        "q": "Bile salts aid fat digestion mainly by:",
        "options": [
          "Directly splitting triglycerides",
          "Neutralising acid",
          "Absorbing glucose",
          "Emulsifying fat to increase surface area for lipase"
        ],
        "answer": 3,
        "rationale": "Bile salts emulsify large fat globules into tiny droplets, greatly increasing the area on which pancreatic lipase can act."
      },
      {
        "type": "mcq",
        "q": "The cephalic phase of gastric secretion is triggered by:",
        "options": [
          "Food distending the stomach",
          "The sight, smell and thought of food via the vagus",
          "Chyme in the duodenum",
          "Bile in the gut"
        ],
        "answer": 1,
        "rationale": "The cephalic phase is an anticipatory, vagally mediated stimulation of secretion before food reaches the stomach."
      },
      {
        "type": "mcq",
        "q": "Pancreatic proteases such as trypsin are secreted in an inactive form because this:",
        "options": [
          "Makes them stronger",
          "Speeds absorption",
          "Protects the pancreas from self-digestion until they reach the duodenum",
          "Neutralises acid"
        ],
        "answer": 2,
        "rationale": "Secreting inactive precursors (activated in the duodenum) prevents the enzymes from digesting the pancreas itself."
      },
      {
        "type": "mcq",
        "q": "Absorbed long-chain fats leave the intestinal cell mainly as chylomicrons that enter the:",
        "options": [
          "Lymphatic lacteals",
          "Portal blood directly",
          "Bile duct",
          "Stomach"
        ],
        "answer": 0,
        "rationale": "Chylomicrons enter the lymphatic lacteals, unlike glucose and amino acids which enter portal blood."
      },
      {
        "type": "mcq",
        "q": "The intestinal phase of gastric control is largely inhibitory in order to:",
        "options": [
          "Empty the stomach faster",
          "Increase gastrin",
          "Stop bile flow",
          "Prevent the small intestine being overwhelmed with acidic chyme"
        ],
        "answer": 3,
        "rationale": "The enterogastric reflex and hormones (secretin, CCK) slow gastric activity so the duodenum can process chyme."
      },
      {
        "type": "mcq",
        "q": "A patient with obstructive jaundice develops pale, fatty stools and easy bruising. The bruising reflects poor absorption of:",
        "options": [
          "Vitamin C",
          "Vitamin K (a fat-soluble vitamin)",
          "Iron",
          "Glucose"
        ],
        "answer": 1,
        "rationale": "Without bile, fat and fat-soluble vitamins (A, D, E, K) are malabsorbed; vitamin K deficiency impairs clotting factor synthesis."
      },
      {
        "type": "mcq",
        "q": "The liver converts toxic ammonia from protein breakdown into:",
        "options": [
          "Glucose",
          "Bile",
          "Urea",
          "Bilirubin"
        ],
        "answer": 2,
        "rationale": "The urea cycle in the liver converts ammonia to urea for renal excretion; liver failure causes ammonia accumulation."
      },
      {
        "type": "mcq",
        "q": "Between meals, blood glucose is maintained mainly by the liver through glycogenolysis and gluconeogenesis, driven by:",
        "options": [
          "Glucagon (and adrenaline/cortisol)",
          "Insulin",
          "Secretin",
          "Bile salts"
        ],
        "answer": 0,
        "rationale": "Glucagon (with adrenaline and cortisol) mobilises glucose from the liver, opposing insulin to keep glucose stable while fasting."
      },
      {
        "type": "fill",
        "q": "The wave of muscular contraction that propels contents along the gut is called ____.",
        "accept": [
          "peristalsis"
        ],
        "rationale": "Peristalsis moves contents forward; segmentation mixes them without net propulsion."
      },
      {
        "type": "fill",
        "q": "The parietal-cell product needed for vitamin B12 absorption is ____ ____.",
        "accept": [
          "intrinsic factor"
        ],
        "rationale": "Intrinsic factor binds vitamin B12 so it can be absorbed in the terminal ileum."
      }
    ]
  },

  /* TOPIC 10 */
  {
    "id": "phy-10-renal-physiology",
    "unit": "Unit 3 · Respiration, Digestion & Excretion",
    "title": "Renal Physiology: Urine Formation & Regulation",
    "readMinutes": 26,
    "summary": "Functions of the kidney; the nephron as the functional unit; the three processes of urine formation — glomerular filtration, tubular reabsorption and tubular secretion; regulation of glomerular filtration rate; the counter-current mechanism for concentrating urine; hormonal control by ADH, aldosterone and the RAAS; the kidney's endocrine roles; and micturition — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Functions of the kidney",
        "p": "The kidneys are the body's main regulators of the internal environment. They EXCRETE metabolic wastes (urea, creatinine, uric acid, drugs), REGULATE water and electrolyte balance and hence ECF volume and blood pressure, maintain ACID-BASE balance (excreting H+, regenerating bicarbonate), and perform ENDOCRINE functions (erythropoietin, activation of vitamin D, renin). They filter about 180 L of plasma daily yet excrete only ~1.5 L of urine, reclaiming the rest."
      },
      {
        "h": "The nephron — functional unit",
        "p": "Each kidney has about a million nephrons. A nephron consists of a renal corpuscle (the glomerulus — a tuft of capillaries — inside Bowman's capsule) and a renal tubule with distinct segments: the proximal convoluted tubule, the loop of Henle (descending and ascending limbs), the distal convoluted tubule, and the collecting duct. The peritubular capillaries and vasa recta surround the tubule for exchange. Cortical and juxtamedullary nephrons differ, the latter having long loops essential for concentrating urine."
      },
      {
        "h": "Three processes of urine formation",
        "p": "Urine is formed by the interplay of three processes along the nephron.",
        "list": [
          "Glomerular filtration — plasma is filtered from the glomerulus into Bowman's capsule, forming filtrate.",
          "Tubular reabsorption — useful substances (water, glucose, amino acids, ions) are returned from the filtrate to the blood.",
          "Tubular secretion — additional wastes and ions (H+, K+, drugs, ammonia) are added from the blood to the filtrate.",
          "Final urine = filtered − reabsorbed + secreted."
        ],
        "figure": {
          "caption": "The three processes of urine formation along the nephron: filtration, reabsorption and secretion.",
          "svg": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Filtration, reabsorption, secretion.\"><defs><marker id=\"phArr10\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"20\" y=\"70\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"95\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">FILTRATION</text><text x=\"95\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">glomerulus &#8594; capsule</text><rect x=\"205\" y=\"70\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"280\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">REABSORPTION</text><text x=\"280\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">tubule &#8594; blood</text><rect x=\"390\" y=\"70\" width=\"150\" height=\"60\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"465\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7C2D12\">SECRETION</text><text x=\"465\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">blood &#8594; tubule</text><line x1=\"170\" y1=\"100\" x2=\"201\" y2=\"100\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr10)\"/><line x1=\"355\" y1=\"100\" x2=\"386\" y2=\"100\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr10)\"/><text x=\"280\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">urine = filtered &#8722; reabsorbed + secreted</text></svg>"
        }
      },
      {
        "h": "Glomerular filtration",
        "p": "Filtration is driven by the high glomerular capillary hydrostatic pressure (~55 mmHg), opposed by capsular hydrostatic pressure (~15 mmHg) and blood oncotic pressure (~30 mmHg), giving a net filtration pressure of ~10 mmHg. The filtration membrane (fenestrated endothelium, basement membrane, podocyte slits) is size- and charge-selective: it freely passes water, ions, glucose and small wastes but retains cells and plasma proteins. Protein or blood in the urine signals glomerular damage."
      },
      {
        "h": "Glomerular filtration rate (GFR) and its control",
        "p": "GFR is the volume filtered by all glomeruli per minute — normally ~120 mL/min (~180 L/day) — and is a key index of kidney function (estimated as eGFR clinically). GFR is kept remarkably constant by AUTOREGULATION: the myogenic response (afferent arterioles constrict when pressure rises) and tubuloglomerular feedback (the macula densa senses distal Na+/Cl− and adjusts afferent tone). Sympathetic activity and angiotensin II can lower GFR to conserve volume. Creatinine clearance approximates GFR because creatinine is filtered but barely reabsorbed or secreted."
      },
      {
        "h": "Tubular reabsorption",
        "p": "About 99% of the filtrate is reabsorbed. The PROXIMAL tubule reabsorbs the bulk (~65%) — nearly all glucose and amino acids (by Na+-coupled secondary active transport), most sodium, bicarbonate and water. Glucose reabsorption has a transport maximum (Tm): when plasma glucose exceeds the renal threshold (~10 mmol/L), transporters saturate and glucose spills into the urine (glycosuria in diabetes). The loop of Henle, distal tubule and collecting duct reabsorb further sodium and water under hormonal control."
      },
      {
        "h": "The counter-current mechanism",
        "p": "The kidney concentrates urine using a counter-current multiplier in the long loops of Henle: the ascending limb actively pumps out Na+/Cl− (but is water-impermeable), making the medullary interstitium increasingly salty (up to ~1200 mOsm/kg at the tip). This hypertonic medulla then draws water out of the descending limb and, crucially, out of the collecting duct when it is made water-permeable by ADH — allowing the kidney to produce urine far more concentrated than plasma and thus conserve water. The vasa recta preserve the gradient."
      },
      {
        "h": "Hormonal control of water and salt",
        "list": [
          "ADH (vasopressin) — inserts aquaporins in the collecting duct so water is reabsorbed; raised by high osmolality or low volume, producing concentrated urine. Its lack causes diabetes insipidus (large volumes of dilute urine).",
          "Aldosterone — increases Na+ reabsorption (and K+/H+ secretion) in the distal nephron, expanding volume.",
          "Renin–angiotensin–aldosterone system (RAAS) — low pressure/volume triggers renin → angiotensin II (vasoconstriction, raises aldosterone and ADH) → sodium and water retention, raising blood pressure.",
          "Atrial natriuretic peptide — opposes the above, promoting Na+ and water loss when the heart is stretched."
        ]
      },
      {
        "h": "Endocrine functions of the kidney",
        "p": "Beyond regulation, the kidney is an endocrine organ: it secretes ERYTHROPOIETIN in response to hypoxia to drive red cell production, activates vitamin D (converts it to calcitriol, needed for calcium absorption and bone health), and releases RENIN to control blood pressure. This is why chronic kidney disease causes anaemia and renal bone disease as well as fluid, electrolyte and acid-base problems."
      },
      {
        "h": "Micturition",
        "p": "Urine passes from the collecting ducts to the renal pelvis, down the ureters by peristalsis, to the bladder for storage. As the bladder fills (~300–400 mL), stretch receptors trigger the micturition reflex (a spinal reflex): the detrusor muscle contracts and the internal sphincter relaxes. Voluntary control of the external urethral sphincter (learned) allows micturition to be delayed until appropriate. Loss of this control causes incontinence or, if obstructed, retention."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "GFR ~120 mL/min (~180 L/day filtered); urine output ~1–1.5 L/day (minimum ~0.5 mL/kg/hr).",
          "~99% of filtrate reabsorbed; renal glucose threshold ~10 mmol/L (glycosuria above).",
          "Medullary osmolality up to ~1200 mOsm/kg; net filtration pressure ~10 mmHg.",
          "Kidney hormones: erythropoietin, renin, activated vitamin D (calcitriol)."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Monitor and report urine output (oliguria <0.5 mL/kg/hr is an early sign of acute kidney injury and hypoperfusion).",
          "Understand that many drugs are cleared renally, so doses need adjusting when GFR falls.",
          "Recognise the multi-system effects of chronic kidney disease (fluid overload, hyperkalaemia, acidosis, anaemia, bone disease).",
          "Glycosuria and its osmotic diuresis explain the polyuria and dehydration of uncontrolled diabetes; interpret urinalysis in context."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the structure of the nephron and relate each segment to its role in urine formation.",
      "Explain the three processes of urine formation and the forces that drive glomerular filtration.",
      "Define glomerular filtration rate, state its normal value, and explain how it is autoregulated.",
      "Explain the counter-current mechanism and the roles of ADH and aldosterone in regulating water and sodium.",
      "Describe the endocrine functions of the kidney and explain the physiology of micturition."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A diabetic patient with plasma glucose 18 mmol/L has glucose in the urine. This occurs because:",
        "options": [
          "The glomerulus stops filtering glucose",
          "ADH is absent",
          "Tubular glucose transporters are saturated above the renal threshold",
          "Aldosterone is high"
        ],
        "answer": 2,
        "rationale": "Above the renal threshold (~10 mmol/L) the glucose transport maximum is exceeded, so glucose remains in the filtrate and spills into urine."
      },
      {
        "type": "mcq",
        "q": "The single best routine index of overall kidney function is the:",
        "options": [
          "Glomerular filtration rate (GFR)",
          "Urine colour",
          "Bladder capacity",
          "Number of nephrons"
        ],
        "answer": 0,
        "rationale": "GFR (normally ~120 mL/min) measures the filtering capacity of the kidneys and falls in renal disease."
      },
      {
        "type": "mcq",
        "q": "ADH concentrates the urine by:",
        "options": [
          "Increasing GFR",
          "Pumping sodium out of the ascending limb",
          "Secreting potassium",
          "Inserting aquaporins so the collecting duct reabsorbs water"
        ],
        "answer": 3,
        "rationale": "ADH makes the collecting duct permeable to water, which is then drawn into the hypertonic medulla, concentrating urine."
      },
      {
        "type": "mcq",
        "q": "A patient with a large tumour compressing the renal vein has reduced net filtration pressure. Filtration falls because:",
        "options": [
          "Glomerular hydrostatic pressure alone drives filtration unopposed",
          "Opposing pressures (capsular and oncotic) reduce the small net filtration pressure",
          "Oncotic pressure aids filtration",
          "The tubule secretes more"
        ],
        "answer": 1,
        "rationale": "Net filtration pressure (~10 mmHg) is glomerular hydrostatic pressure minus capsular and oncotic pressures; raising the opposing pressures reduces filtration."
      },
      {
        "type": "mcq",
        "q": "Most of the filtrate (about 65%), including nearly all glucose and amino acids, is reabsorbed in the:",
        "options": [
          "Collecting duct",
          "Distal convoluted tubule",
          "Proximal convoluted tubule",
          "Loop of Henle tip"
        ],
        "answer": 2,
        "rationale": "The proximal convoluted tubule performs bulk reabsorption of water, sodium, glucose and amino acids."
      },
      {
        "type": "mcq",
        "q": "A patient with chronic kidney disease is anaemic. The renal cause is reduced production of:",
        "options": [
          "Erythropoietin",
          "Renin",
          "Aldosterone",
          "ADH"
        ],
        "answer": 0,
        "rationale": "The kidney makes erythropoietin; its loss in CKD reduces red cell production, causing anaemia."
      },
      {
        "type": "mcq",
        "q": "The counter-current mechanism concentrates urine mainly because the ascending loop of Henle:",
        "options": [
          "Reabsorbs water freely",
          "Secretes glucose",
          "Produces ADH",
          "Pumps out Na+/Cl− while remaining impermeable to water, making the medulla salty"
        ],
        "answer": 3,
        "rationale": "The water-impermeable ascending limb actively removes salt, building the hypertonic medullary gradient that later draws water from the collecting duct."
      },
      {
        "type": "mcq",
        "q": "In diabetes insipidus a patient passes large volumes of dilute urine because of a lack of:",
        "options": [
          "Aldosterone",
          "ADH",
          "Renin",
          "Erythropoietin"
        ],
        "answer": 1,
        "rationale": "Without ADH the collecting duct cannot reabsorb water, so large volumes of dilute urine are produced."
      },
      {
        "type": "mcq",
        "q": "A postoperative patient's urine output falls to 0.2 mL/kg/hr. This oliguria most importantly suggests:",
        "options": [
          "Normal kidney function",
          "Excess ADH is harmless",
          "Possible acute kidney injury or hypoperfusion needing urgent review",
          "A full bladder only"
        ],
        "answer": 2,
        "rationale": "Output below 0.5 mL/kg/hr is oliguria, an early warning of poor renal perfusion or acute kidney injury requiring prompt action."
      },
      {
        "type": "mcq",
        "q": "The activation of vitamin D by the kidney is important because calcitriol is needed for:",
        "options": [
          "Calcium absorption and bone health",
          "Clotting",
          "Oxygen transport",
          "Acid secretion"
        ],
        "answer": 0,
        "rationale": "The kidney activates vitamin D to calcitriol, essential for intestinal calcium absorption; its loss causes renal bone disease."
      },
      {
        "type": "fill",
        "q": "The volume of plasma filtered by all glomeruli per minute (normally ~120 mL/min) is the glomerular ____ rate.",
        "accept": [
          "filtration"
        ],
        "rationale": "Glomerular filtration rate (GFR) is the key measure of renal function."
      },
      {
        "type": "fill",
        "q": "The hormone that makes the collecting duct reabsorb water and concentrate the urine is ____.",
        "accept": [
          "adh",
          "antidiuretic hormone",
          "vasopressin"
        ],
        "rationale": "ADH (vasopressin) inserts aquaporins in the collecting duct to conserve water."
      }
    ]
  },

  /* TOPIC 11 */
  {
    "id": "phy-11-nerve-synapse-reflex",
    "unit": "Unit 4 · Neural, Endocrine & Sensory Physiology",
    "title": "Neurophysiology: Nerve Impulse, Synapse & Reflexes",
    "readMinutes": 26,
    "summary": "Organisation of the nervous system; neurons and glia; the resting potential and the ionic basis of the action potential; conduction and myelination; synaptic transmission and neurotransmitters; the reflex arc; and an overview of CNS, PNS and autonomic function — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Organisation of the nervous system",
        "p": "The nervous system provides rapid, precise control and integration. It is divided anatomically into the CENTRAL nervous system (CNS — brain and spinal cord, the integrating centres) and the PERIPHERAL nervous system (PNS — cranial and spinal nerves). Functionally the PNS has a SENSORY (afferent) division carrying input to the CNS and a MOTOR (efferent) division carrying output — the somatic (voluntary, to skeletal muscle) and autonomic (involuntary, to smooth/cardiac muscle and glands) systems."
      },
      {
        "h": "Neurons and neuroglia",
        "p": "The NEURON is the functional signalling cell: a cell body (soma), branching DENDRITES that receive input, and a single AXON that conducts the impulse to its terminals. Neurons are excitable and, once mature, generally cannot divide. NEUROGLIA support them: astrocytes (support, blood–brain barrier), oligodendrocytes (CNS myelin) and Schwann cells (PNS myelin), microglia (defence) and ependymal cells (CSF). Myelin is a fatty insulating sheath that speeds conduction."
      },
      {
        "h": "The resting membrane potential",
        "p": "A resting neuron is polarised at about −70 mV inside relative to outside. This arises from the unequal ion distribution (high K+ inside, high Na+ outside), the membrane's high resting permeability to K+ (which leaks out, leaving the inside negative), fixed negative proteins inside, and the electrogenic Na+/K+ pump that maintains the gradients. This charged, ready state stores the energy the neuron will use to fire."
      },
      {
        "h": "The action potential — ionic basis",
        "p": "An action potential (nerve impulse) is a rapid, all-or-none reversal of membrane potential that travels along the axon.",
        "list": [
          "A stimulus depolarises the membrane to THRESHOLD (~ −55 mV).",
          "Voltage-gated Na+ channels open — Na+ rushes in — rapid DEPOLARISATION toward +30 mV.",
          "Na+ channels inactivate and voltage-gated K+ channels open — K+ flows out — REPOLARISATION.",
          "A brief K+ overshoot gives HYPERPOLARISATION before the pump restores the resting state.",
          "The REFRACTORY period ensures the impulse travels in one direction and limits maximum firing frequency."
        ],
        "figure": {
          "caption": "The action potential: depolarisation (Na+ in), repolarisation (K+ out), then return to the resting −70 mV.",
          "svg": "<svg viewBox=\"0 0 560 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Action potential trace.\"><line x1=\"60\" y1=\"150\" x2=\"530\" y2=\"150\" stroke=\"#0F4C3A\" stroke-width=\"1.5\" stroke-dasharray=\"4 4\"/><line x1=\"60\" y1=\"30\" x2=\"60\" y2=\"190\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"30\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">+30</text><text x=\"30\" y=\"152\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">-70</text><path d=\"M60 150 L150 148 L200 145 L215 60 L245 150 L270 175 L300 150 L530 150\" fill=\"none\" stroke=\"#15803D\" stroke-width=\"3\"/><text x=\"200\" y=\"135\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">threshold</text><text x=\"225\" y=\"55\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">Na+ in</text><text x=\"270\" y=\"195\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">K+ out &#8594; hyperpolarise</text><text x=\"300\" y=\"25\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Action potential (all-or-none)</text></svg>"
        }
      },
      {
        "h": "Conduction and myelination",
        "p": "In unmyelinated axons the impulse regenerates continuously along the membrane (slow). In MYELINATED axons the impulse jumps between the gaps in the sheath (nodes of Ranvier) — SALTATORY conduction — which is much faster and more energy-efficient. Conduction velocity increases with axon diameter and myelination (from ~1 up to ~120 m/s). Demyelinating diseases such as multiple sclerosis slow or block conduction, explaining the weakness, numbness and visual disturbance seen in such conditions."
      },
      {
        "h": "The synapse and transmission",
        "p": "A synapse is the junction where a neuron communicates with the next cell. In a chemical synapse the impulse reaches the axon terminal and opens voltage-gated calcium channels; calcium entry triggers release of NEUROTRANSMITTER from vesicles by exocytosis. The transmitter crosses the synaptic cleft and binds receptors on the postsynaptic membrane, producing excitatory (depolarising) or inhibitory (hyperpolarising) potentials. The signal is terminated by reuptake, enzymatic breakdown, or diffusion. Synapses integrate many inputs (summation) and are the main site of drug action in the nervous system."
      },
      {
        "h": "Neurotransmitters",
        "list": [
          "Acetylcholine — neuromuscular junction, parasympathetic and CNS; broken down by acetylcholinesterase.",
          "Noradrenaline — most sympathetic effects and CNS arousal.",
          "Dopamine — movement control, reward; deficient in Parkinson's disease.",
          "Serotonin (5-HT) — mood, sleep, appetite; a target of antidepressants.",
          "GABA — the main inhibitory transmitter in the CNS (target of benzodiazepines).",
          "Glutamate — the main excitatory CNS transmitter; endorphins modulate pain."
        ]
      },
      {
        "h": "The reflex arc",
        "p": "A reflex is a rapid, automatic, involuntary response to a stimulus. Its pathway, the reflex arc, has five parts: a RECEPTOR, a SENSORY (afferent) neuron, an INTEGRATING CENTRE (often the spinal cord), a MOTOR (efferent) neuron, and an EFFECTOR (muscle or gland). Reflexes protect the body (e.g. withdrawal from a hot object) and maintain posture and tone (e.g. the stretch/knee-jerk reflex, which is monosynaptic). Testing reflexes helps localise damage in the nervous system."
      },
      {
        "h": "Overview of the CNS",
        "p": "The BRAIN integrates sensation, thought, movement and homeostasis: the cerebrum (cortex — sensation, voluntary movement, language, cognition), cerebellum (coordination, balance), brainstem (vital centres for heart rate, breathing, consciousness) and hypothalamus (autonomic and endocrine control, temperature, appetite). The SPINAL CORD conducts ascending sensory and descending motor tracts and mediates reflexes. It is protected by bone, meninges and cerebrospinal fluid."
      },
      {
        "h": "The autonomic nervous system",
        "p": "The autonomic nervous system controls involuntary functions through two opposing divisions. The SYMPATHETIC division ('fight or flight') uses mainly noradrenaline to raise heart rate and blood pressure, dilate pupils and airways, and divert blood to muscle. The PARASYMPATHETIC division ('rest and digest') uses acetylcholine to slow the heart, promote digestion and conserve energy. Most organs receive both; the balance is set to meet the body's needs — knowledge essential for understanding many drugs and clinical signs."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Resting potential ~ −70 mV; threshold ~ −55 mV; peak ~ +30 mV.",
          "Conduction velocity ~1–120 m/s (faster with myelination and larger diameter).",
          "Action potential is all-or-none; the refractory period ensures one-way conduction.",
          "Sympathetic transmitter mainly noradrenaline; parasympathetic mainly acetylcholine."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Understanding the action potential and synapse underlies the effects of anaesthetics, analgesics, sedatives and antiepileptics.",
          "Reflex testing and level of consciousness are core neurological assessments (e.g. Glasgow Coma Scale, pupil reactions).",
          "Autonomic knowledge explains signs such as tachycardia and sweating in shock or anxiety, and the effects of many cardiovascular and respiratory drugs.",
          "Demyelination and nerve injury explain sensory loss and weakness; protect insensate limbs and pressure areas."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the structure of a neuron and the supporting roles of neuroglia, including myelination.",
      "Explain the ionic basis of the resting membrane potential and the action potential, including the refractory period.",
      "Compare conduction in myelinated and unmyelinated axons and relate this to demyelinating disease.",
      "Describe chemical synaptic transmission, name the major neurotransmitters, and explain how synapses are the site of drug action.",
      "Describe the reflex arc with an example, and compare the sympathetic and parasympathetic divisions of the autonomic nervous system."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient with multiple sclerosis has slowed nerve conduction. This results from damage to:",
        "options": [
          "The Na+/K+ pump only",
          "The reflex arc receptor",
          "The myelin sheath, impairing saltatory conduction",
          "The synaptic vesicles"
        ],
        "answer": 2,
        "rationale": "Demyelination disrupts saltatory conduction between nodes of Ranvier, slowing or blocking impulses."
      },
      {
        "type": "mcq",
        "q": "The rapid depolarisation phase of the action potential is caused by the inflow of:",
        "options": [
          "Sodium",
          "Potassium",
          "Calcium",
          "Chloride"
        ],
        "answer": 0,
        "rationale": "Voltage-gated Na+ channels open at threshold, and Na+ rushing in reverses the membrane potential toward +30 mV."
      },
      {
        "type": "mcq",
        "q": "An action potential is described as 'all-or-none', meaning that:",
        "options": [
          "Its size grows with a stronger stimulus",
          "It travels in both directions equally",
          "It needs no ion channels",
          "Once threshold is reached it fires fully, or not at all"
        ],
        "answer": 3,
        "rationale": "Provided threshold is reached, the action potential is a full, fixed-size event; stronger stimuli change frequency, not amplitude."
      },
      {
        "type": "mcq",
        "q": "At a chemical synapse, neurotransmitter release from the terminal is triggered by the entry of:",
        "options": [
          "Sodium",
          "Calcium",
          "Potassium",
          "Chloride"
        ],
        "answer": 1,
        "rationale": "The arriving impulse opens voltage-gated calcium channels; calcium entry causes vesicles to release transmitter by exocytosis."
      },
      {
        "type": "mcq",
        "q": "The refractory period of the axon is physiologically important because it:",
        "options": [
          "Speeds the pump",
          "Increases transmitter",
          "Ensures the impulse travels one way and limits firing frequency",
          "Removes myelin"
        ],
        "answer": 2,
        "rationale": "During the refractory period the membrane cannot fire again, enforcing unidirectional conduction and a maximum rate."
      },
      {
        "type": "mcq",
        "q": "A patient with Parkinson's disease has a deficiency of the neurotransmitter:",
        "options": [
          "Dopamine",
          "GABA",
          "Glutamate",
          "Acetylcholinesterase"
        ],
        "answer": 0,
        "rationale": "Loss of dopamine-producing neurons impairs movement control, producing the features of Parkinson's disease."
      },
      {
        "type": "mcq",
        "q": "The knee-jerk (stretch) reflex is monosynaptic, meaning its arc has:",
        "options": [
          "No sensory neuron",
          "Only an effector",
          "No integrating centre",
          "A single synapse between the sensory and motor neuron"
        ],
        "answer": 3,
        "rationale": "The stretch reflex passes directly from sensory to motor neuron with one synapse in the cord, allowing a very rapid response."
      },
      {
        "type": "mcq",
        "q": "A frightened patient develops tachycardia, dilated pupils and sweating. This is mediated by the:",
        "options": [
          "Parasympathetic division",
          "Sympathetic ('fight or flight') division",
          "Somatic reflex arc",
          "Stretch reflex"
        ],
        "answer": 1,
        "rationale": "The sympathetic division (mainly noradrenaline) produces the fight-or-flight response of raised heart rate, pupil dilation and sweating."
      },
      {
        "type": "mcq",
        "q": "GABA is important in the CNS because it is the main:",
        "options": [
          "Excitatory transmitter",
          "Pain molecule",
          "Inhibitory transmitter (target of benzodiazepines)",
          "Motor hormone"
        ],
        "answer": 2,
        "rationale": "GABA is the principal inhibitory neurotransmitter; benzodiazepines enhance its action, producing sedation."
      },
      {
        "type": "mcq",
        "q": "The brainstem is vital to life because it contains centres controlling:",
        "options": [
          "Heart rate, breathing and consciousness",
          "Only vision",
          "Only fine movement",
          "Only language"
        ],
        "answer": 0,
        "rationale": "The brainstem houses the cardiovascular and respiratory centres and the reticular activating system for consciousness."
      },
      {
        "type": "fill",
        "q": "The insulating fatty sheath that speeds nerve conduction is ____.",
        "accept": [
          "myelin"
        ],
        "rationale": "Myelin enables fast saltatory conduction; its loss slows or blocks impulses."
      },
      {
        "type": "fill",
        "q": "The five-part pathway of a rapid automatic response — receptor, sensory neuron, centre, motor neuron, effector — is the reflex ____.",
        "accept": [
          "arc"
        ],
        "rationale": "The reflex arc is the neural pathway underlying reflexes."
      }
    ]
  },

  /* TOPIC 12 */
  {
    "id": "phy-12-endocrine-physiology",
    "unit": "Unit 4 · Neural, Endocrine & Sensory Physiology",
    "title": "Endocrine Physiology: Hormone Action & Feedback",
    "readMinutes": 26,
    "summary": "Principles of hormone chemistry and action; mechanisms of hormone signalling; the hypothalamic–pituitary axis; the physiology of thyroid, parathyroid, adrenal and pancreatic hormones; the regulation of blood glucose and calcium; negative-feedback control; and the endocrine basis of common disorders — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Principles of endocrine control",
        "p": "The endocrine system controls the body through HORMONES — chemical messengers released by ductless glands into the blood to act on distant target cells bearing specific receptors. Compared with the nervous system it is slower in onset (minutes to hours) but longer-lasting and more widespread. Hormones regulate metabolism, growth, reproduction, fluid/electrolyte balance and the stress response, and they act together with the nervous system (notably via the hypothalamus) to maintain homeostasis."
      },
      {
        "h": "Hormone chemistry and mechanism of action",
        "p": "Hormones fall into two broad classes that act by different mechanisms.",
        "list": [
          "Water-soluble hormones (peptides, proteins, catecholamines) — cannot cross the cell membrane; they bind SURFACE receptors and act via SECOND MESSENGERS (e.g. cyclic AMP), giving rapid effects.",
          "Lipid-soluble hormones (steroids and thyroid hormone) — cross the membrane and bind INTRACELLULAR receptors that alter gene transcription, giving slower but sustained effects.",
          "The response depends on the hormone concentration, the number and sensitivity of receptors (up/down-regulation), and target-cell state — explaining variable drug and hormone responses."
        ]
      },
      {
        "h": "Negative feedback in the endocrine system",
        "p": "Most hormone secretion is controlled by NEGATIVE FEEDBACK, usually in an axis: the hypothalamus releases a releasing hormone, the pituitary releases a stimulating (trophic) hormone, the target gland releases its hormone, and the rising level of that hormone feeds back to inhibit the hypothalamus and pituitary. This keeps hormone levels within a set range. Understanding this explains why giving a hormone (e.g. long-term steroids) suppresses the body's own production."
      },
      {
        "h": "The hypothalamus and pituitary",
        "p": "The HYPOTHALAMUS links the nervous and endocrine systems. The POSTERIOR pituitary stores and releases two hypothalamic hormones: ADH (water reabsorption) and oxytocin (uterine contraction, milk ejection). The ANTERIOR pituitary makes its own hormones under hypothalamic releasing/inhibiting hormones: growth hormone (GH), thyroid-stimulating hormone (TSH), adrenocorticotrophic hormone (ACTH), the gonadotrophins (FSH, LH) and prolactin. It is often called the 'master gland' because it controls several other glands.",
        "figure": {
          "caption": "A hypothalamic–pituitary–target-gland axis with negative feedback (illustrated for the thyroid).",
          "svg": "<svg viewBox=\"0 0 560 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Hypothalamic-pituitary-target axis.\"><defs><marker id=\"phArr12\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"200\" y=\"15\" width=\"160\" height=\"38\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"280\" y=\"39\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803D\">HYPOTHALAMUS (TRH)</text><rect x=\"200\" y=\"80\" width=\"160\" height=\"38\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"280\" y=\"104\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">PITUITARY (TSH)</text><rect x=\"200\" y=\"145\" width=\"160\" height=\"38\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"280\" y=\"169\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#7C2D12\">THYROID (T3/T4)</text><line x1=\"280\" y1=\"53\" x2=\"280\" y2=\"78\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr12)\"/><line x1=\"280\" y1=\"118\" x2=\"280\" y2=\"143\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr12)\"/><path d=\"M380 164 L470 164 L470 34 L362 34\" fill=\"none\" stroke=\"#22C55E\" stroke-width=\"2.5\" marker-end=\"url(#phArr12)\"/><text x=\"500\" y=\"100\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\" transform=\"rotate(90 500 100)\">negative feedback</text></svg>"
        }
      },
      {
        "h": "Thyroid hormones",
        "p": "The thyroid secretes thyroxine (T4) and triiodothyronine (T3), which require IODINE and raise the basal metabolic rate, heat production, and growth/CNS development, under control of TSH. HYPERthyroidism (excess) causes weight loss, heat intolerance, tachycardia, tremor and anxiety; HYPOthyroidism (deficiency) causes fatigue, weight gain, cold intolerance, bradycardia and slowed thought (and cretinism in infants). The thyroid also secretes CALCITONIN, which lowers blood calcium."
      },
      {
        "h": "Parathyroid hormone and calcium",
        "p": "The four parathyroid glands secrete PARATHYROID HORMONE (PTH), the main regulator of blood calcium. When calcium falls, PTH rises and raises it by releasing calcium from bone, increasing renal calcium reabsorption, and activating vitamin D to boost intestinal calcium absorption. Calcitonin opposes PTH. Precise calcium control matters because calcium governs neuromuscular excitability — LOW calcium causes tetany and spasms, HIGH calcium causes weakness, stones and confusion."
      },
      {
        "h": "Adrenal hormones",
        "p": "Each adrenal gland has two parts. The adrenal CORTEX secretes steroid hormones: glucocorticoids (cortisol — raises blood glucose, anti-inflammatory, part of the stress response, controlled by ACTH), mineralocorticoids (aldosterone — sodium/water retention and potassium loss, part of the RAAS), and small amounts of sex steroids. The adrenal MEDULLA secretes adrenaline and noradrenaline (catecholamines) for the rapid fight-or-flight response. Cortisol follows a daily (diurnal) rhythm, highest in the morning."
      },
      {
        "h": "The endocrine pancreas and blood glucose",
        "p": "The islets of Langerhans regulate blood glucose. INSULIN (beta cells) LOWERS blood glucose after meals by promoting glucose uptake into cells, glycogen and fat storage. GLUCAGON (alpha cells) RAISES glucose between meals by stimulating hepatic glycogenolysis and gluconeogenesis. This reciprocal pair keeps glucose ~4–7 mmol/L. Insulin lack or resistance causes DIABETES MELLITUS (hyperglycaemia, glycosuria, and — in severe type 1 — ketoacidosis).",
        "figure": {
          "caption": "Reciprocal control of blood glucose: insulin lowers it (storage), glucagon raises it (mobilisation), keeping it ~4–7 mmol/L.",
          "svg": "<svg viewBox=\"0 0 560 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Insulin and glucagon control of glucose.\"><rect x=\"180\" y=\"70\" width=\"200\" height=\"42\" rx=\"10\" fill=\"#0F4C3A\"/><text x=\"280\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#FFFFFF\">BLOOD GLUCOSE</text><text x=\"280\" y=\"106\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#DCFCE7\">~4-7 mmol/L</text><rect x=\"20\" y=\"70\" width=\"130\" height=\"42\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"85\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803D\">INSULIN &#8595;</text><text x=\"85\" y=\"106\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">storage (beta)</text><rect x=\"410\" y=\"70\" width=\"130\" height=\"42\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"475\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#7C2D12\">GLUCAGON &#8593;</text><text x=\"475\" y=\"106\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">release (alpha)</text><line x1=\"150\" y1=\"91\" x2=\"178\" y2=\"91\" stroke=\"#15803D\" stroke-width=\"2.5\"/><line x1=\"408\" y1=\"91\" x2=\"382\" y2=\"91\" stroke=\"#7C2D12\" stroke-width=\"2.5\"/></svg>"
        }
      },
      {
        "h": "Other endocrine tissues",
        "p": "The PINEAL gland secretes melatonin, which regulates the sleep–wake (circadian) rhythm. The GONADS (ovaries and testes) secrete sex hormones (oestrogen/progesterone, testosterone) under FSH and LH control. Many other tissues have endocrine roles — the kidney (erythropoietin, renin), heart (natriuretic peptides), gut (gastrin, secretin, CCK) and adipose tissue (leptin) — showing how endocrine control is integrated throughout the body."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Blood glucose ~4–7 mmol/L fasting; total calcium 2.2–2.6 mmol/L.",
          "Anterior pituitary hormones: GH, TSH, ACTH, FSH, LH, prolactin; posterior: ADH, oxytocin.",
          "Cortisol has a diurnal rhythm (peak on waking); thyroid hormones need iodine.",
          "Insulin lowers glucose (beta cells); glucagon raises it (alpha cells)."
        ]
      },
      {
        "h": "Clinical relevance — hormone excess and deficiency",
        "p": "Endocrine disease results from too much or too little hormone, or from target-cell resistance. Excess may come from a hyperfunctioning gland or tumour (e.g. hyperthyroidism, Cushing's syndrome from excess cortisol, acromegaly from excess growth hormone); deficiency from gland destruction, surgery, or lack of a stimulating hormone (e.g. hypothyroidism, Addison's disease, type 1 diabetes). Because hormones act through feedback axes, measuring both the target hormone and its trophic hormone (e.g. thyroxine with TSH) localises the problem to the gland or the pituitary — the basis of endocrine investigation and of hormone-replacement therapy."
      },
      {
        "h": "Nursing application",
        "list": [
          "Recognise and manage hypo- and hyperglycaemia; understand insulin timing, storage and injection, and the risk of ketoacidosis.",
          "Understand that long-term steroids suppress the adrenal axis, so they must NOT be stopped abruptly (risk of adrenal crisis) and may need increasing during illness or surgery.",
          "Recognise thyroid disorder signs and calcium-related tetany/weakness, and monitor relevant blood levels.",
          "Support patients with lifelong hormone replacement (thyroxine, insulin, steroids) in adherence and self-management."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Compare water-soluble and lipid-soluble hormones in terms of their mechanism of action and speed of effect.",
      "Describe the hypothalamic–pituitary axis and explain the role of negative feedback in controlling hormone secretion, using the thyroid axis as an example.",
      "Explain the regulation of blood glucose by insulin and glucagon and outline the physiology of diabetes mellitus.",
      "Describe the regulation of blood calcium by parathyroid hormone, calcitonin and vitamin D, and the effects of abnormal calcium.",
      "Describe the hormones of the adrenal gland and explain why long-term steroid therapy must not be stopped suddenly."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient on long-term oral steroids stops them abruptly and collapses with hypotension. This adrenal crisis occurs because prolonged steroids had:",
        "options": [
          "Increased the patient's own cortisol",
          "No effect on the adrenal",
          "Suppressed the hypothalamic–pituitary–adrenal axis by negative feedback",
          "Raised blood glucose only"
        ],
        "answer": 2,
        "rationale": "Exogenous steroids suppress ACTH and the adrenal by negative feedback; sudden withdrawal leaves the body unable to make cortisol."
      },
      {
        "type": "mcq",
        "q": "Steroid and thyroid hormones act more slowly but with lasting effect because they:",
        "options": [
          "Cross the membrane and alter gene transcription",
          "Use cyclic AMP at the surface",
          "Cannot enter cells",
          "Act only on blood cells"
        ],
        "answer": 0,
        "rationale": "Lipid-soluble hormones bind intracellular receptors that change gene expression — slower onset, sustained action."
      },
      {
        "type": "mcq",
        "q": "After a carbohydrate meal, blood glucose is lowered mainly by:",
        "options": [
          "Glucagon",
          "Cortisol",
          "Adrenaline",
          "Insulin promoting glucose uptake and storage"
        ],
        "answer": 3,
        "rationale": "Insulin from beta cells drives glucose into cells and promotes glycogen/fat storage, lowering blood glucose."
      },
      {
        "type": "mcq",
        "q": "A patient has low blood calcium with muscle spasms (tetany). The hormone that should rise to correct this is:",
        "options": [
          "Calcitonin",
          "Parathyroid hormone (PTH)",
          "Insulin",
          "ADH"
        ],
        "answer": 1,
        "rationale": "PTH raises blood calcium by mobilising bone, increasing renal reabsorption and activating vitamin D; low calcium causes tetany."
      },
      {
        "type": "mcq",
        "q": "A patient with weight loss, heat intolerance, tachycardia and tremor most likely has:",
        "options": [
          "Hypothyroidism",
          "Diabetes insipidus",
          "Hyperthyroidism",
          "Hypocalcaemia"
        ],
        "answer": 2,
        "rationale": "Excess thyroid hormone raises metabolic rate, producing weight loss, heat intolerance, tachycardia and tremor."
      },
      {
        "type": "mcq",
        "q": "The posterior pituitary releases which hormone that promotes renal water reabsorption?",
        "options": [
          "ADH (vasopressin)",
          "ACTH",
          "TSH",
          "Growth hormone"
        ],
        "answer": 0,
        "rationale": "The posterior pituitary stores and releases ADH (and oxytocin), both made in the hypothalamus."
      },
      {
        "type": "mcq",
        "q": "Aldosterone from the adrenal cortex regulates blood pressure by causing the kidney to:",
        "options": [
          "Excrete sodium",
          "Make erythropoietin",
          "Release insulin",
          "Reabsorb sodium and water (and excrete potassium)"
        ],
        "answer": 3,
        "rationale": "Aldosterone increases distal sodium and water reabsorption, expanding volume and raising pressure."
      },
      {
        "type": "mcq",
        "q": "In a fasting state, blood glucose is kept from falling mainly by:",
        "options": [
          "Insulin",
          "Glucagon stimulating hepatic glycogenolysis and gluconeogenesis",
          "Calcitonin",
          "TSH"
        ],
        "answer": 1,
        "rationale": "Glucagon mobilises hepatic glucose stores and gluconeogenesis, opposing insulin to maintain glucose while fasting."
      },
      {
        "type": "mcq",
        "q": "Rising thyroid hormone levels inhibit further TSH and TRH release. This is an example of:",
        "options": [
          "Positive feedback",
          "A second messenger",
          "Negative feedback within an endocrine axis",
          "Up-regulation"
        ],
        "answer": 2,
        "rationale": "The target hormone feeds back to suppress the pituitary and hypothalamus, keeping levels within range."
      },
      {
        "type": "mcq",
        "q": "The rapid 'fight or flight' response is produced by catecholamines from the:",
        "options": [
          "Adrenal medulla",
          "Adrenal cortex",
          "Thyroid",
          "Pancreas"
        ],
        "answer": 0,
        "rationale": "The adrenal medulla secretes adrenaline and noradrenaline for the rapid sympathetic stress response."
      },
      {
        "type": "fill",
        "q": "The pancreatic hormone that lowers blood glucose by promoting its uptake and storage is ____.",
        "accept": [
          "insulin"
        ],
        "rationale": "Insulin from beta cells lowers blood glucose; glucagon raises it."
      },
      {
        "type": "fill",
        "q": "The gland often called the 'master gland' because it controls several other endocrine glands is the ____ gland.",
        "accept": [
          "pituitary"
        ],
        "rationale": "The anterior pituitary secretes trophic hormones (TSH, ACTH, FSH, LH) that control other glands, under hypothalamic control."
      }
    ]
  },

  /* TOPIC 13 */
  {
    "id": "phy-13-reproductive-menstrual",
    "unit": "Unit 4 · Neural, Endocrine & Sensory Physiology",
    "title": "Reproductive Physiology & the Menstrual Cycle",
    "readMinutes": 25,
    "summary": "Hormonal control of reproduction via the hypothalamic–pituitary–gonadal axis; male reproductive function and spermatogenesis; the ovarian and uterine (menstrual) cycles and their hormonal control; ovulation; fertilisation, implantation and the role of the placenta; and the physiology of lactation — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Hormonal control of reproduction",
        "p": "Reproduction is controlled by the hypothalamic–pituitary–gonadal axis. The hypothalamus releases gonadotrophin-releasing hormone (GnRH), which drives the anterior pituitary to release the gonadotrophins FSH (follicle-stimulating hormone) and LH (luteinising hormone). These act on the gonads (ovaries and testes) to produce gametes and secrete sex hormones, which feed back on the hypothalamus and pituitary. Puberty begins when GnRH secretion increases, starting the maturation of the reproductive system."
      },
      {
        "h": "Male reproductive function",
        "p": "The testes have two roles: SPERMATOGENESIS (sperm production in the seminiferous tubules, supported by Sertoli cells and driven by FSH and testosterone) and secretion of TESTOSTERONE (by Leydig cells, driven by LH). Testosterone maintains sperm production, the male sex organs, and secondary sexual characteristics (muscle, deep voice, body hair, libido). Spermatogenesis needs a temperature slightly below body core, which is why the testes lie in the scrotum, and takes about 64–74 days."
      },
      {
        "h": "Spermatogenesis and semen",
        "p": "Sperm are produced continuously from puberty. Immature sperm mature and are stored in the epididymis, then travel via the vas deferens; the seminal vesicles, prostate and bulbourethral glands add secretions to form SEMEN, which nourishes and activates the sperm and neutralises vaginal acidity. A typical ejaculate contains tens to hundreds of millions of sperm; only one normally fertilises the ovum. Sperm are haploid, carrying half the chromosome number."
      },
      {
        "h": "The ovarian cycle",
        "p": "In the female, gametes (oocytes) mature cyclically. The OVARIAN cycle has three phases over ~28 days.",
        "list": [
          "Follicular phase — FSH stimulates several follicles to grow; usually one becomes dominant and secretes rising OESTROGEN.",
          "Ovulation — a mid-cycle surge of LH (triggered by high oestrogen via positive feedback) ruptures the follicle, releasing the ovum, about day 14.",
          "Luteal phase — the empty follicle becomes the corpus luteum, which secretes PROGESTERONE (and oestrogen) to prepare for pregnancy; if no pregnancy, it degenerates in ~14 days and hormone levels fall."
        ],
        "figure": {
          "caption": "The ovarian and uterine cycles: follicular phase, LH surge → ovulation (~day 14), luteal phase; the endometrium builds then sheds if no pregnancy.",
          "svg": "<svg viewBox=\"0 0 560 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Menstrual cycle phases.\"><line x1=\"40\" y1=\"150\" x2=\"530\" y2=\"150\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"60\" y=\"170\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">Day 1</text><text x=\"270\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">Day 14</text><text x=\"510\" y=\"170\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">Day 28</text><rect x=\"40\" y=\"120\" width=\"70\" height=\"26\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"1.5\"/><text x=\"75\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" fill=\"#7C2D12\">menses</text><rect x=\"110\" y=\"120\" width=\"150\" height=\"26\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"1.5\"/><text x=\"185\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" fill=\"#15803D\">follicular (oestrogen)</text><rect x=\"290\" y=\"120\" width=\"230\" height=\"26\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"1.5\"/><text x=\"405\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" fill=\"#0F4C3A\">luteal (progesterone)</text><circle cx=\"275\" cy=\"90\" r=\"10\" fill=\"#22C55E\"/><text x=\"275\" y=\"75\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" font-weight=\"700\" fill=\"#15803D\">LH surge</text><text x=\"275\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"8\" fill=\"#15803D\">ovulation</text><text x=\"280\" y=\"40\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Ovarian &amp; uterine cycle (~28 days)</text></svg>"
        }
      },
      {
        "h": "The uterine (menstrual) cycle",
        "p": "The endometrium changes in parallel to prepare for a possible pregnancy. In the MENSTRUAL phase (days ~1–5) the endometrium is shed as menstruation because hormone levels fell at the end of the previous cycle. In the PROLIFERATIVE phase, rising oestrogen rebuilds and thickens the endometrium. In the SECRETORY phase, progesterone from the corpus luteum makes the endometrium glandular and vascular, ready for implantation. If fertilisation does not occur, the corpus luteum dies, progesterone/oestrogen fall, and the endometrium is shed — starting the next cycle."
      },
      {
        "h": "Feedback and the ovulatory surge",
        "p": "During most of the cycle, oestrogen and progesterone exert NEGATIVE feedback, keeping FSH and LH low. But when oestrogen from the dominant follicle rises high and is sustained, it briefly switches to POSITIVE feedback, causing the mid-cycle LH surge that triggers ovulation — one of the body's few physiological uses of positive feedback. Hormonal contraceptives work largely by maintaining steady hormone levels that suppress this surge and thus prevent ovulation."
      },
      {
        "h": "Fertilisation and implantation",
        "p": "Fertilisation normally occurs in the uterine (fallopian) tube when a sperm penetrates the ovum, restoring the diploid chromosome number and forming a zygote. The zygote divides as it travels to the uterus and implants in the prepared endometrium about a week after fertilisation. The developing embryo secretes human chorionic gonadotrophin (hCG), which sustains the corpus luteum (and its progesterone) so the endometrium is maintained — hCG is the hormone detected by pregnancy tests."
      },
      {
        "h": "The placenta and pregnancy hormones",
        "p": "The PLACENTA forms from embryonic and maternal tissue and takes over as the main endocrine organ of pregnancy by the end of the first trimester, secreting large amounts of oestrogen and progesterone (maintaining the pregnancy and preventing further ovulation) plus hCG and human placental lactogen. It also handles gas, nutrient and waste exchange between mother and fetus. Progesterone keeps the uterus quiescent; a shift in the oestrogen/progesterone balance and rising oxytocin sensitivity near term help initiate labour."
      },
      {
        "h": "Physiology of lactation",
        "p": "Lactation is controlled by two pituitary hormones. PROLACTIN (anterior pituitary) drives milk PRODUCTION; it rises in pregnancy but milk secretion is held back by high oestrogen/progesterone until these fall after delivery. OXYTOCIN (posterior pituitary) causes milk EJECTION (the 'let-down' reflex). Suckling is a powerful stimulus: it triggers prolactin (more milk) and oxytocin (let-down) by a neuroendocrine reflex — a positive-feedback loop in which demand drives supply. Oxytocin also contracts the uterus, aiding its involution after birth."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Menstrual cycle ~28 days (range ~21–35); ovulation ~day 14; luteal phase ~14 days.",
          "Ovulation triggered by the mid-cycle LH surge (positive feedback of oestrogen).",
          "Spermatogenesis ~64–74 days; testes kept slightly below core temperature.",
          "hCG maintains the corpus luteum early in pregnancy and is detected by pregnancy tests."
        ]
      },
      {
        "h": "Clinical relevance — reproductive physiology in practice",
        "p": "Disorders arise at each step of the axis. Anovulation (from polycystic ovary syndrome, stress or thyroid disease) causes infertility and irregular cycles; falling oestrogen at the menopause causes cessation of cycles, hot flushes and bone loss. In males, low testosterone or impaired spermatogenesis causes infertility and loss of secondary characteristics. Understanding hormonal feedback explains how assisted-reproduction drugs stimulate follicles, how hormonal contraception suppresses ovulation, and why oestrogen-containing contraceptives raise clotting risk — all central to safe reproductive-health counselling."
      },
      {
        "h": "Nursing application",
        "list": [
          "Knowledge of the cycle underpins fertility awareness, contraception counselling and understanding of menstrual disorders.",
          "hCG physiology explains pregnancy testing and the monitoring of some pregnancy complications.",
          "Understanding lactation supports breastfeeding advice, including the demand–supply and let-down reflexes.",
          "Awareness of hormonal effects (e.g. progesterone's effect on the uterus, oestrogen and clotting risk) informs safe drug and contraceptive counselling."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the hypothalamic–pituitary–gonadal axis and its role in controlling reproduction in both sexes.",
      "Describe spermatogenesis and the functions of testosterone in the male.",
      "Describe the ovarian and uterine cycles and their hormonal control, explaining the trigger for ovulation.",
      "Explain fertilisation, implantation, and the endocrine roles of hCG and the placenta in maintaining pregnancy.",
      "Describe the physiology of lactation, including the roles of prolactin and oxytocin and the suckling reflex."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "Ovulation is triggered around day 14 by:",
        "options": [
          "A fall in FSH",
          "A rise in progesterone",
          "A mid-cycle surge of luteinising hormone (LH)",
          "Menstruation"
        ],
        "answer": 2,
        "rationale": "Sustained high oestrogen switches to positive feedback, causing the LH surge that ruptures the follicle and releases the ovum."
      },
      {
        "type": "mcq",
        "q": "The hormone secreted by the corpus luteum that prepares and maintains the endometrium for implantation is:",
        "options": [
          "Progesterone",
          "Oestrogen only",
          "FSH",
          "hCG"
        ],
        "answer": 0,
        "rationale": "The corpus luteum secretes progesterone, which makes the endometrium secretory and ready for implantation."
      },
      {
        "type": "mcq",
        "q": "Menstruation (shedding of the endometrium) occurs because:",
        "options": [
          "hCG rises",
          "LH surges",
          "FSH rises",
          "Progesterone and oestrogen fall as the corpus luteum degenerates"
        ],
        "answer": 3,
        "rationale": "Without pregnancy the corpus luteum dies, hormone support is withdrawn, and the endometrium is shed."
      },
      {
        "type": "mcq",
        "q": "A pregnancy test detects the hormone:",
        "options": [
          "LH",
          "Human chorionic gonadotrophin (hCG)",
          "Progesterone",
          "Prolactin"
        ],
        "answer": 1,
        "rationale": "The early embryo secretes hCG, which maintains the corpus luteum and is the basis of pregnancy testing."
      },
      {
        "type": "mcq",
        "q": "Most hormonal contraceptives prevent pregnancy mainly by:",
        "options": [
          "Blocking sperm production",
          "Increasing FSH",
          "Maintaining steady hormone levels that suppress the LH surge and ovulation",
          "Shedding the endometrium daily"
        ],
        "answer": 2,
        "rationale": "Steady exogenous hormones exert negative feedback, suppressing the mid-cycle LH surge so ovulation does not occur."
      },
      {
        "type": "mcq",
        "q": "The testes are located in the scrotum, outside the body cavity, because spermatogenesis requires:",
        "options": [
          "A temperature slightly below body core",
          "A higher temperature than core",
          "Direct sunlight",
          "High oxygen only"
        ],
        "answer": 0,
        "rationale": "Sperm production is optimal a few degrees below core body temperature, hence the external scrotal position."
      },
      {
        "type": "mcq",
        "q": "The 'let-down' (milk ejection) reflex during breastfeeding is mediated by:",
        "options": [
          "Prolactin",
          "FSH",
          "Progesterone",
          "Oxytocin"
        ],
        "answer": 3,
        "rationale": "Suckling triggers oxytocin release, which contracts myoepithelial cells to eject milk; prolactin drives milk production."
      },
      {
        "type": "mcq",
        "q": "Fertilisation normally occurs in the:",
        "options": [
          "Uterus",
          "Uterine (fallopian) tube",
          "Ovary",
          "Vagina"
        ],
        "answer": 1,
        "rationale": "The sperm usually meets and penetrates the ovum in the uterine tube; the zygote then travels to the uterus to implant."
      },
      {
        "type": "mcq",
        "q": "By the end of the first trimester the main organ secreting oestrogen and progesterone to maintain pregnancy is the:",
        "options": [
          "Corpus luteum",
          "Anterior pituitary",
          "Placenta",
          "Adrenal gland"
        ],
        "answer": 2,
        "rationale": "The placenta takes over hormone production from the corpus luteum, sustaining the pregnancy."
      },
      {
        "type": "mcq",
        "q": "During most of the menstrual cycle, oestrogen and progesterone keep FSH and LH low by:",
        "options": [
          "Negative feedback",
          "Positive feedback",
          "Having no effect",
          "Increasing GnRH"
        ],
        "answer": 0,
        "rationale": "For most of the cycle the sex steroids exert negative feedback; only the sustained high oestrogen before ovulation switches to positive feedback."
      },
      {
        "type": "fill",
        "q": "The mid-cycle hormone surge that triggers ovulation is the ____ surge.",
        "accept": [
          "lh",
          "luteinising hormone",
          "luteinizing hormone"
        ],
        "rationale": "The LH surge ruptures the mature follicle to release the ovum around day 14."
      },
      {
        "type": "fill",
        "q": "After ovulation the ruptured follicle becomes the corpus ____, which secretes progesterone.",
        "accept": [
          "luteum"
        ],
        "rationale": "The corpus luteum secretes progesterone to maintain the endometrium; if no pregnancy, it degenerates."
      }
    ]
  },

  /* TOPIC 14 */
  {
    "id": "phy-14-special-senses",
    "unit": "Unit 4 · Neural, Endocrine & Sensory Physiology",
    "title": "Physiology of the Special Senses",
    "readMinutes": 24,
    "summary": "General principles of sensation and receptors; the physiology of vision (refraction, phototransduction, accommodation and common errors); hearing and the transduction of sound; the vestibular sense of balance; and the chemical senses of taste and smell — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Principles of sensation",
        "p": "A sensory receptor detects a stimulus and converts (transduces) its energy into nerve impulses. The four attributes of a sensation are MODALITY (type — light, sound, touch), LOCATION, INTENSITY (coded by frequency of impulses and number of receptors), and DURATION. Many receptors show ADAPTATION — a decline in response to a constant stimulus (e.g. no longer noticing clothes). Receptors are classified by stimulus: photoreceptors (light), mechanoreceptors (pressure, sound, stretch), chemoreceptors (taste, smell, blood chemistry), thermoreceptors and nociceptors (pain)."
      },
      {
        "h": "The eye — optics and refraction",
        "p": "The eye works like a camera. Light passes through the cornea, aqueous humour, pupil, lens and vitreous to reach the retina. REFRACTION (bending) of light by the cornea (the main refractive surface) and the lens focuses an inverted image on the retina. The IRIS adjusts the pupil to control light entry (constricting in bright light — the pupillary light reflex). The image is inverted on the retina but the brain interprets it upright."
      },
      {
        "h": "Accommodation",
        "p": "To focus on near objects the eye ACCOMMODATES: the ciliary muscle contracts, slackening the suspensory ligaments so the elastic lens becomes more rounded (more converging power); the pupils also constrict and the eyes converge (the near reflex). For distant objects the ciliary muscle relaxes and the lens flattens. With age the lens stiffens and near focus is lost (presbyopia), which is why reading glasses are needed."
      },
      {
        "h": "The retina and phototransduction",
        "p": "The retina contains two photoreceptors. RODS (~120 million) are highly sensitive, work in dim light and give black-and-white, peripheral and night vision; they contain rhodopsin. CONES (~6 million, concentrated at the fovea/macula) need bright light and give sharp, colour vision — three types respond to red, green and blue wavelengths. Light bleaches the pigment, hyperpolarises the receptor, and this signal passes through bipolar and ganglion cells to the optic nerve. The optic disc, where the nerve leaves, has no receptors — the 'blind spot'.",
        "figure": {
          "caption": "Rods versus cones: sensitivity, light conditions and the vision each provides.",
          "svg": "<svg viewBox=\"0 0 560 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Rods versus cones comparison.\"><rect x=\"40\" y=\"40\" width=\"220\" height=\"90\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"150\" y=\"65\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#15803D\">RODS (~120M)</text><text x=\"150\" y=\"88\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">dim light · night vision</text><text x=\"150\" y=\"108\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">black &amp; white · peripheral</text><rect x=\"300\" y=\"40\" width=\"220\" height=\"90\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"410\" y=\"65\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#7C2D12\">CONES (~6M)</text><text x=\"410\" y=\"88\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">bright light · at fovea</text><text x=\"410\" y=\"108\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">colour · sharp detail</text><text x=\"280\" y=\"25\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Photoreceptors of the retina</text></svg>"
        }
      },
      {
        "h": "Common visual errors",
        "list": [
          "Myopia (short sight) — the eyeball is too long or the lens too strong; distant images focus in front of the retina; corrected by concave lenses.",
          "Hypermetropia (long sight) — the eyeball is too short; near images focus behind the retina; corrected by convex lenses.",
          "Astigmatism — uneven corneal curvature blurs part of the image.",
          "Presbyopia — age-related loss of accommodation.",
          "Cataract (lens opacity) and glaucoma (raised intra-ocular pressure damaging the optic nerve) are common causes of blindness."
        ]
      },
      {
        "h": "The ear — hearing",
        "p": "Sound waves are collected by the outer ear and vibrate the eardrum. The three middle-ear ossicles (malleus, incus, stapes) amplify and transmit the vibration to the oval window of the fluid-filled COCHLEA. Pressure waves in the cochlear fluid displace the basilar membrane; the hair cells of the ORGAN OF CORTI are the mechanoreceptors that transduce this movement into nerve impulses carried by the auditory (vestibulocochlear) nerve. Pitch is coded by WHICH part of the basilar membrane is stimulated (high frequencies at the base, low at the apex); loudness by the number and rate of impulses."
      },
      {
        "h": "Types of hearing loss",
        "p": "CONDUCTIVE hearing loss results from a problem transmitting sound to the cochlea (wax, middle-ear fluid, a damaged eardrum or ossicles). SENSORINEURAL hearing loss results from damage to the cochlear hair cells or auditory nerve (ageing/presbycusis, noise exposure, some drugs such as certain aminoglycoside antibiotics — ototoxicity). Distinguishing them guides management (e.g. wax removal vs hearing aids)."
      },
      {
        "h": "Balance — the vestibular sense",
        "p": "The inner ear also houses the vestibular apparatus. The three SEMICIRCULAR CANALS, set at right angles, detect rotational (angular) acceleration of the head via fluid movement bending hair cells. The OTOLITH ORGANS (utricle and saccule) detect linear acceleration and the pull of gravity (head position). This information, combined with vision and proprioception, maintains balance and coordinates eye movements. Disturbance causes vertigo, nausea and nystagmus (as in motion sickness or labyrinthitis)."
      },
      {
        "h": "Taste and smell — the chemical senses",
        "p": "TASTE (gustation) is detected by chemoreceptors in taste buds (mainly on the tongue) responding to five basic qualities: sweet, sour, salty, bitter and umami (savoury). SMELL (olfaction) is detected by olfactory receptors high in the nasal cavity, which project directly to the brain and are closely linked to memory and emotion. Much of what we call 'flavour' is actually smell, which is why food seems tasteless when the nose is blocked. Both are chemoreceptor senses and both adapt quickly."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Rods ~120 million (dim/night, monochrome); cones ~6 million (bright, colour, at the fovea).",
          "Middle-ear ossicles: malleus, incus, stapes; hearing organ = organ of Corti.",
          "Five basic tastes: sweet, sour, salty, bitter, umami.",
          "Semicircular canals sense rotation; otolith organs (utricle, saccule) sense linear acceleration/gravity."
        ]
      },
      {
        "h": "Clinical relevance — sensory loss and safety",
        "p": "Loss of a special sense has broad consequences. Visual and hearing impairment reduce independence, increase falls and social isolation, and impair communication and consent. Cataract and glaucoma are leading causes of preventable blindness; presbyopia and presbycusis are near-universal with age. Loss of smell reduces appetite and removes a safety warning (smoke, gas, spoiled food), and vestibular disorders cause disabling vertigo and falls. Because many drugs affect the senses (ototoxic antibiotics, corticosteroid-induced cataract, drugs causing blurred vision), new sensory symptoms should always be reported and reviewed."
      },
      {
        "h": "Nursing application",
        "list": [
          "Assess pupil size and reactions (the light reflex) as a key neurological observation.",
          "Recognise and communicate with patients who have visual or hearing impairment; ensure aids and glasses are available.",
          "Be alert to ototoxic and other drug effects on the special senses, and report new sensory changes.",
          "Understand vertigo and balance disturbance to keep patients safe from falls, and remember that loss of smell reduces appetite and safety (e.g. detecting smoke/gas)."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the general properties of sensory receptors, including transduction and adaptation, and classify receptors by stimulus.",
      "Explain how the eye focuses light on the retina, including refraction and accommodation, and describe common refractive errors and their correction.",
      "Describe the roles of rods and cones in vision and the phototransduction pathway to the optic nerve.",
      "Describe how sound is transmitted and transduced into nerve impulses, and distinguish conductive from sensorineural hearing loss.",
      "Explain the physiology of balance (vestibular apparatus) and outline the chemical senses of taste and smell."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient can see near objects clearly but distant objects are blurred. This myopia is because images focus:",
        "options": [
          "Behind the retina",
          "On the blind spot",
          "In front of the retina",
          "On the cornea"
        ],
        "answer": 2,
        "rationale": "In myopia the eye is too long/strong, focusing distant images in front of the retina; a concave lens corrects it."
      },
      {
        "type": "mcq",
        "q": "An older patient needs reading glasses because the lens has stiffened and cannot round up for near focus. This is:",
        "options": [
          "Presbyopia (loss of accommodation)",
          "Myopia",
          "Astigmatism",
          "Glaucoma"
        ],
        "answer": 0,
        "rationale": "Presbyopia is age-related loss of accommodation as the lens loses elasticity, impairing near vision."
      },
      {
        "type": "mcq",
        "q": "The photoreceptors responsible for colour vision and sharp detail in bright light are the:",
        "options": [
          "Rods",
          "Hair cells",
          "Bipolar cells",
          "Cones"
        ],
        "answer": 3,
        "rationale": "Cones (concentrated at the fovea) give colour and high-acuity vision in bright light; rods serve dim-light vision."
      },
      {
        "type": "mcq",
        "q": "The mechanoreceptors that transduce sound vibrations into nerve impulses are the hair cells of the:",
        "options": [
          "Semicircular canals",
          "Organ of Corti in the cochlea",
          "Retina",
          "Olfactory epithelium"
        ],
        "answer": 1,
        "rationale": "The organ of Corti on the basilar membrane converts fluid vibrations into auditory nerve impulses."
      },
      {
        "type": "mcq",
        "q": "A patient develops hearing loss after a course of a nephrotoxic aminoglycoside antibiotic. This ototoxicity causes:",
        "options": [
          "Conductive loss from wax",
          "A blocked eardrum",
          "Sensorineural loss from hair-cell/nerve damage",
          "Presbyopia"
        ],
        "answer": 2,
        "rationale": "Aminoglycosides can damage cochlear hair cells, producing sensorineural hearing loss."
      },
      {
        "type": "mcq",
        "q": "During accommodation for a near object, the ciliary muscle:",
        "options": [
          "Contracts and the lens becomes more rounded",
          "Relaxes and the lens flattens",
          "Has no role",
          "Opens the pupil"
        ],
        "answer": 0,
        "rationale": "Ciliary contraction slackens the suspensory ligaments so the elastic lens rounds up, increasing its converging power."
      },
      {
        "type": "mcq",
        "q": "Rotational movement of the head is detected by the:",
        "options": [
          "Otolith organs only",
          "Cochlea",
          "Cones",
          "Semicircular canals"
        ],
        "answer": 3,
        "rationale": "The three semicircular canals detect angular (rotational) acceleration; the otolith organs detect linear acceleration and gravity."
      },
      {
        "type": "mcq",
        "q": "A patient reports that food seems tasteless when they have a blocked nose. This is because much of 'flavour' depends on:",
        "options": [
          "Taste alone",
          "Smell (olfaction)",
          "The blind spot",
          "The eardrum"
        ],
        "answer": 1,
        "rationale": "Flavour combines taste and smell; with the nose blocked, olfactory input is lost so food seems bland."
      },
      {
        "type": "mcq",
        "q": "Conductive (rather than sensorineural) hearing loss is typically caused by:",
        "options": [
          "Cochlear hair-cell damage",
          "Auditory nerve degeneration",
          "Wax or middle-ear fluid blocking sound transmission",
          "Ageing of the nerve"
        ],
        "answer": 2,
        "rationale": "Conductive loss results from anything impeding sound reaching the cochlea, such as wax, effusion or ossicular damage."
      },
      {
        "type": "mcq",
        "q": "Why does a person stop noticing the feel of their clothes after a while?",
        "options": [
          "Sensory adaptation to a constant stimulus",
          "The receptors are destroyed",
          "The brain is asleep",
          "The clothes stop touching"
        ],
        "answer": 0,
        "rationale": "Many receptors adapt, reducing their response to an unchanging stimulus so attention is freed for new stimuli."
      },
      {
        "type": "fill",
        "q": "The retinal photoreceptors that provide dim-light and night vision are the ____.",
        "accept": [
          "rods"
        ],
        "rationale": "Rods are highly sensitive and give monochrome vision in low light; cones need bright light for colour."
      },
      {
        "type": "fill",
        "q": "The region of the retina where the optic nerve leaves and which has no photoreceptors is the ____ spot.",
        "accept": [
          "blind"
        ],
        "rationale": "The optic disc has no rods or cones, creating the blind spot."
      }
    ]
  },

  /* TOPIC 15 */
  {
    "id": "phy-15-temperature-regulation",
    "unit": "Unit 5 · Temperature Regulation & Immunity",
    "title": "Regulation of Body Temperature",
    "readMinutes": 24,
    "summary": "The importance of a stable core temperature; heat balance (production and loss); the four physical routes of heat exchange; the hypothalamic thermostat and its receptors; heat-loss and heat-gain mechanisms; the physiology of fever, hypothermia and hyperthermia; and age-related variation — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Why temperature must be controlled",
        "p": "Humans are homeothermic — they keep a stable CORE temperature (~37 °C, normal range ~36.1–37.2 °C) despite a changing environment. This matters because enzymes and metabolic reactions have a narrow optimum; even small deviations impair function. Core temperature (of the vital organs) is defended tightly, while shell (skin/limb) temperature varies more and acts as a buffer. Temperature also shows a diurnal rhythm, lowest in the early morning and highest in the late afternoon, and rises slightly after ovulation and with exercise."
      },
      {
        "h": "Heat balance",
        "p": "Body temperature reflects the balance between heat PRODUCED and heat LOST. Heat is produced by metabolism — basal metabolic rate, the specific dynamic action of food, muscle activity (including shivering), and the calorigenic effect of thyroid hormone and catecholamines. Heat is lost mainly from the skin and, to a lesser extent, in expired air, urine and faeces. When production equals loss, temperature is stable; an imbalance raises or lowers it."
      },
      {
        "h": "Physical routes of heat exchange",
        "list": [
          "Radiation — transfer of heat as infrared waves to cooler surroundings (the main route at rest, ~60%).",
          "Conduction — direct transfer to cooler objects in contact (e.g. a cold bed or floor).",
          "Convection — transfer to moving air or water carrying heat away (increased by wind or a fan).",
          "Evaporation — heat lost as water vaporises from sweat and the airways (the ONLY route that works when the environment is hotter than the body)."
        ],
        "figure": {
          "caption": "The four physical routes of heat exchange between the body and its environment.",
          "svg": "<svg viewBox=\"0 0 560 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Routes of heat exchange.\"><rect x=\"20\" y=\"55\" width=\"120\" height=\"70\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"80\" y=\"85\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#15803D\">RADIATION</text><text x=\"80\" y=\"105\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">~60% at rest</text><rect x=\"150\" y=\"55\" width=\"120\" height=\"70\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"210\" y=\"85\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">CONDUCTION</text><text x=\"210\" y=\"105\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">contact</text><rect x=\"280\" y=\"55\" width=\"120\" height=\"70\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"340\" y=\"85\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">CONVECTION</text><text x=\"340\" y=\"105\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">moving air</text><rect x=\"410\" y=\"55\" width=\"130\" height=\"70\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"475\" y=\"85\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#7C2D12\">EVAPORATION</text><text x=\"475\" y=\"105\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">sweat · works when hot</text><text x=\"280\" y=\"35\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">How the body exchanges heat</text></svg>"
        }
      },
      {
        "h": "The hypothalamic thermostat",
        "p": "Temperature is regulated by the HYPOTHALAMUS, which acts as a thermostat with a set point of ~37 °C. Central thermoreceptors in the hypothalamus sense the temperature of the blood, and peripheral thermoreceptors in the skin sense the environment. The hypothalamus compares this input with the set point and triggers heat-loss or heat-gain responses by negative feedback, so temperature oscillates narrowly around the set point."
      },
      {
        "h": "Responses to overheating (heat loss)",
        "p": "If core temperature rises, the hypothalamus activates heat-loss mechanisms: cutaneous VASODILATION (blood diverted to the skin so heat radiates away, making the skin flushed and warm), SWEATING (evaporation cools the skin), and behavioural changes (removing clothes, seeking shade, drinking). Metabolic heat production is also reduced. These responses continue until the temperature returns toward the set point."
      },
      {
        "h": "Responses to cooling (heat gain/conservation)",
        "p": "If core temperature falls, the hypothalamus activates heat-conservation and heat-generation mechanisms: cutaneous VASOCONSTRICTION (reducing skin blood flow and heat loss, making the skin pale and cold), SHIVERING (rhythmic muscle contraction generating heat), piloerection ('goose bumps', of limited value in humans), and — over time — increased metabolic rate via thyroid hormone and catecholamines (non-shivering thermogenesis, important in newborns via brown fat). Behavioural responses (adding clothing, curling up, moving) add to these."
      },
      {
        "h": "The physiology of fever",
        "p": "Fever (pyrexia) is a REGULATED rise in temperature caused by the hypothalamic set point being RESET UPWARD by pyrogens. Infection and inflammation cause white cells to release cytokines that trigger prostaglandin E2 in the hypothalamus, raising the set point. The body then perceives itself as too cold and generates heat — the patient SHIVERS and feels cold as the temperature rises (the chill phase), maintains the higher temperature (plateau), and when the set point returns to normal, loses heat by sweating and vasodilation (the flush/crisis phase). Antipyretics such as paracetamol act by reducing prostaglandin synthesis, lowering the set point."
      },
      {
        "h": "Hypothermia and hyperthermia",
        "p": "HYPOTHERMIA is a fall in core temperature below ~35 °C, from cold exposure, immersion, or impaired regulation; it causes shivering, then confusion, bradycardia, slowed metabolism and, if severe, arrhythmias and death. HYPERTHERMIA (e.g. heat stroke) is an UNREGULATED rise in which heat-loss mechanisms are overwhelmed or fail — distinct from fever because the set point is normal; it is a medical emergency requiring active cooling. Some drugs and conditions (e.g. malignant hyperthermia) also cause dangerous heat generation."
      },
      {
        "h": "Age and temperature regulation",
        "p": "The extremes of age are vulnerable. NEWBORNS have a large surface-area-to-mass ratio, little insulating fat, cannot shiver effectively, and rely on non-shivering thermogenesis in brown fat — so they lose heat quickly and need to be kept warm. The ELDERLY have reduced metabolic heat production, blunted vasoconstriction and shivering, reduced thirst and mobility, and often impaired perception of temperature, making both hypothermia and heat stroke more likely."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Core temperature ~37 °C (normal ~36.1–37.2 °C oral); diurnal variation ~0.5–1 °C.",
          "Radiation is the main route of heat loss at rest (~60%); evaporation is the only route when ambient temperature exceeds body temperature.",
          "Fever = raised set point (regulated); heat stroke = normal set point, overwhelmed loss (unregulated).",
          "Hypothermia: core < 35 °C; the hypothalamus is the thermostat (set point ~37 °C)."
        ]
      },
      {
        "h": "Clinical relevance — measuring and managing temperature",
        "p": "Different sites estimate core temperature with different accuracy and lag: rectal and bladder are closest to core, tympanic and oral are convenient, and axillary underreads. A single value matters less than the trend and the pattern (e.g. a swinging fever). Recognising the phases of fever guides comfort measures — warming during the chill/rising phase and cooling only once the temperature is falling. Active cooling (removing clothing, cool environment, fluids) is reserved for hyperthermia/heat stroke, whereas antipyretics are used for fever by lowering the set point. Perioperative and neonatal hypothermia are actively prevented because even mild hypothermia impairs clotting, wound healing and cardiac stability."
      },
      {
        "h": "Nursing application",
        "list": [
          "Measure temperature accurately and interpret it with other vital signs; a fever pattern helps monitor infection and treatment response.",
          "Understand set-point resetting: warming a shivering, rising-fever patient (and cooling only when the temperature is falling) is more comfortable and effective, and antipyretics lower the set point.",
          "Prevent perioperative and neonatal hypothermia (warming devices, minimise exposure, warm fluids); protect the elderly from both cold and heat.",
          "Recognise heat stroke as an emergency needing rapid active cooling, distinct from fever."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Explain why a stable core temperature is essential and describe the concept of heat balance between production and loss.",
      "Describe the four physical routes of heat exchange and state which operates when the environment is hotter than the body.",
      "Describe the role of the hypothalamus as a thermostat and the mechanisms it uses to lose and to conserve/generate heat.",
      "Explain the physiology of fever, including set-point resetting, its phases, and how antipyretics work.",
      "Compare fever, hyperthermia and hypothermia, and discuss why the very young and the elderly are especially vulnerable."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A febrile patient with a rising temperature is shivering and complaining of feeling cold. The best explanation is that:",
        "options": [
          "The thermostat has failed",
          "The temperature is actually falling",
          "Pyrogens have raised the hypothalamic set point, so the body generates heat to reach it",
          "The patient is hypothermic"
        ],
        "answer": 2,
        "rationale": "In fever the set point is reset upward; the body perceives itself as too cold and shivers to raise temperature toward the new target."
      },
      {
        "type": "mcq",
        "q": "In a hot environment where air temperature exceeds body temperature, the only effective route of heat loss is:",
        "options": [
          "Evaporation of sweat",
          "Radiation",
          "Conduction",
          "Convection"
        ],
        "answer": 0,
        "rationale": "Radiation, conduction and convection require a cooler environment; only evaporation can lose heat when surroundings are hotter than the body."
      },
      {
        "type": "mcq",
        "q": "When core temperature falls, the hypothalamus conserves heat mainly by:",
        "options": [
          "Cutaneous vasodilation and sweating",
          "Increasing evaporation",
          "Removing clothing",
          "Cutaneous vasoconstriction and shivering"
        ],
        "answer": 3,
        "rationale": "Vasoconstriction reduces skin heat loss and shivering generates heat to defend core temperature."
      },
      {
        "type": "mcq",
        "q": "Heat stroke differs from fever because in heat stroke the:",
        "options": [
          "Set point is raised by pyrogens",
          "Set point is normal but heat-loss mechanisms are overwhelmed",
          "Temperature is low",
          "Patient shivers to warm up"
        ],
        "answer": 1,
        "rationale": "Heat stroke is an unregulated rise with a normal set point; fever is a regulated rise with the set point reset upward."
      },
      {
        "type": "mcq",
        "q": "Paracetamol reduces a fever by:",
        "options": [
          "Blocking sweating",
          "Causing vasoconstriction",
          "Lowering the hypothalamic set point (reducing prostaglandin synthesis)",
          "Raising metabolic rate"
        ],
        "answer": 2,
        "rationale": "Antipyretics inhibit prostaglandin E2 synthesis, resetting the hypothalamic set point back toward normal."
      },
      {
        "type": "mcq",
        "q": "A newborn loses heat rapidly and must be kept warm mainly because they:",
        "options": [
          "Have a large surface-area-to-mass ratio and limited shivering, relying on brown fat",
          "Sweat excessively",
          "Have a very high metabolic rate",
          "Cannot vasodilate"
        ],
        "answer": 0,
        "rationale": "Newborns have high surface area relative to mass, little insulation and poor shivering, so they depend on non-shivering thermogenesis in brown fat."
      },
      {
        "type": "mcq",
        "q": "During the crisis (flush) phase of a fever, the temperature falls because the set point returns to normal and the body responds by:",
        "options": [
          "Shivering and vasoconstriction",
          "Piloerection",
          "Raising metabolic rate",
          "Sweating and cutaneous vasodilation"
        ],
        "answer": 3,
        "rationale": "Once the set point normalises, the now-too-high temperature triggers heat-loss responses — sweating and vasodilation."
      },
      {
        "type": "mcq",
        "q": "The main route of heat loss from the body at rest in a cool room is:",
        "options": [
          "Evaporation",
          "Radiation",
          "Conduction through the feet",
          "Urine"
        ],
        "answer": 1,
        "rationale": "Radiation of infrared heat accounts for the largest share (~60%) of resting heat loss to cooler surroundings."
      },
      {
        "type": "mcq",
        "q": "A postoperative elderly patient is found with a core temperature of 34.5 °C. This hypothermia is dangerous because it can cause:",
        "options": [
          "Improved cardiac function",
          "Increased shivering that always corrects it",
          "Bradycardia, confusion and arrhythmias",
          "Fever"
        ],
        "answer": 2,
        "rationale": "Hypothermia (<35 °C) slows metabolism and the heart, causing confusion, bradycardia and, if severe, dangerous arrhythmias."
      },
      {
        "type": "mcq",
        "q": "The structure that acts as the body's thermostat, comparing blood temperature with the set point, is the:",
        "options": [
          "Hypothalamus",
          "Skin",
          "Thyroid gland",
          "Medulla"
        ],
        "answer": 0,
        "rationale": "The hypothalamus senses blood temperature and skin input and triggers heat-loss or heat-gain responses to defend ~37 °C."
      },
      {
        "type": "fill",
        "q": "The only route of heat loss that still works when the surroundings are hotter than the body is ____.",
        "accept": [
          "evaporation"
        ],
        "rationale": "Evaporation of sweat removes heat even in a hot environment, unlike radiation, conduction and convection."
      },
      {
        "type": "fill",
        "q": "A regulated rise in body temperature due to an upward reset of the hypothalamic set point by pyrogens is called ____.",
        "accept": [
          "fever",
          "pyrexia"
        ],
        "rationale": "Fever is a controlled rise driven by a higher set point, distinct from unregulated hyperthermia."
      }
    ]
  },

  /* TOPIC 16 */
  {
    "id": "phy-16-immunity",
    "unit": "Unit 5 · Temperature Regulation & Immunity",
    "title": "Physiology of Immunity & Body Defence",
    "readMinutes": 26,
    "summary": "The organs and cells of the immune system; the three lines of defence; innate (non-specific) mechanisms including the inflammatory response, phagocytosis and complement; adaptive (specific) immunity — humoral (B-cell/antibody) and cell-mediated (T-cell); immunological memory; the antibody classes; types of immunity and vaccination; and disorders of immunity — with nursing relevance.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "The task of the immune system",
        "p": "The immune system defends the body against pathogens (bacteria, viruses, fungi, parasites), removes damaged or abnormal cells (including cancer cells), and distinguishes SELF from NON-SELF. It must respond quickly and strongly to threats yet tolerate the body's own tissues; failures of this balance cause immunodeficiency, allergy, or autoimmunity. Defence is organised into three lines: two innate (non-specific) and one adaptive (specific)."
      },
      {
        "h": "Organs and cells of the immune system",
        "p": "The lymphoid system provides the tissue framework. CENTRAL (primary) lymphoid organs — the bone marrow (where all immune cells originate and B cells mature) and the thymus (where T cells mature) — produce and educate immune cells. PERIPHERAL (secondary) lymphoid organs — lymph nodes, spleen, tonsils and mucosa-associated lymphoid tissue — are where immune responses are mounted. Lymph, lymphatic vessels and nodes filter tissue fluid and trap antigens. Key cells are the leucocytes: neutrophils, macrophages, dendritic cells, lymphocytes (B and T), natural killer cells, eosinophils and basophils/mast cells."
      },
      {
        "h": "First line — surface barriers",
        "p": "The FIRST line of defence is non-specific surface protection that stops entry: intact skin (a physical barrier with acidic sebum), mucous membranes and mucus that trap particles, cilia that sweep the airways, the acid of the stomach, lysozyme in tears and saliva, and the normal commensal flora that compete with pathogens. Breaching these barriers (a wound, a burn, a catheter) is a common route of infection — a key reason for aseptic technique."
      },
      {
        "h": "Second line — innate internal defences",
        "p": "If pathogens get past the surface, the SECOND line (still non-specific) acts rapidly: PHAGOCYTES (neutrophils and macrophages) engulf and destroy microbes; NATURAL KILLER cells destroy virus-infected and tumour cells; the COMPLEMENT system (plasma proteins) punches holes in microbes, promotes inflammation and 'tags' microbes for phagocytosis (opsonisation); INTERFERONS help protect cells against viruses; and the INFLAMMATORY response and FEVER create an environment hostile to pathogens."
      },
      {
        "h": "The inflammatory response",
        "p": "Inflammation is a rapid, local, non-specific reaction to injury or infection. Damaged cells and mast cells release histamine and other mediators causing VASODILATION and increased capillary PERMEABILITY. This produces the four classic signs: REDNESS and HEAT (increased blood flow), SWELLING (fluid/exudate leaking into tissue) and PAIN (mediators and pressure), often with loss of function. The exudate delivers phagocytes, antibodies and clotting factors; phagocytes migrate to the site (chemotaxis) and clear debris and microbes, aiding healing.",
        "figure": {
          "caption": "Three lines of defence: surface barriers, innate internal defences (phagocytes, complement, inflammation), and adaptive specific immunity.",
          "svg": "<svg viewBox=\"0 0 560 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Three lines of immune defence.\"><defs><marker id=\"phArr16\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"70\" width=\"160\" height=\"65\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"95\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#15803D\">1st: BARRIERS</text><text x=\"95\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">skin · mucus · acid</text><rect x=\"200\" y=\"70\" width=\"160\" height=\"65\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"280\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">2nd: INNATE</text><text x=\"280\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">phagocytes · inflammation</text><rect x=\"385\" y=\"70\" width=\"160\" height=\"65\" rx=\"10\" fill=\"#F0FDF4\" stroke=\"#7C2D12\" stroke-width=\"2\"/><text x=\"465\" y=\"95\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#7C2D12\">3rd: ADAPTIVE</text><text x=\"465\" y=\"114\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">B &amp; T cells · memory</text><line x1=\"175\" y1=\"102\" x2=\"196\" y2=\"102\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr16)\"/><line x1=\"360\" y1=\"102\" x2=\"381\" y2=\"102\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#phArr16)\"/><text x=\"280\" y=\"35\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Non-specific &#8594; specific defence</text></svg>"
        }
      },
      {
        "h": "Third line — adaptive (specific) immunity",
        "p": "The THIRD line is specific, targeted at a particular antigen, slower on first exposure but powerful and with MEMORY. It has two arms driven by lymphocytes. HUMORAL (antibody-mediated) immunity uses B lymphocytes, which on activation become plasma cells that secrete ANTIBODIES against extracellular pathogens and toxins. CELL-MEDIATED immunity uses T lymphocytes: helper T cells (CD4) orchestrate the response (and are the cells destroyed by HIV), cytotoxic T cells (CD8) kill infected/abnormal cells directly, and regulatory T cells restrain the response."
      },
      {
        "h": "Antibodies (immunoglobulins)",
        "p": "Antibodies are Y-shaped proteins made by plasma cells that bind specifically to an antigen, neutralising it, tagging it for phagocytosis (opsonisation), agglutinating it, and activating complement.",
        "list": [
          "IgG — most abundant; long-term immunity; the only class that crosses the placenta (passive immunity to the newborn).",
          "IgM — first antibody made in a new infection; large; strong at agglutination.",
          "IgA — in secretions (saliva, tears, gut, breast milk) protecting mucosal surfaces.",
          "IgE — allergy and defence against parasites; binds mast cells to release histamine.",
          "IgD — mainly a B-cell surface receptor."
        ]
      },
      {
        "h": "Immunological memory and the two responses",
        "p": "On FIRST exposure to an antigen the PRIMARY response is slow (days) and modest, producing mostly IgM, while memory cells are formed. On a LATER exposure to the same antigen the SECONDARY response is faster, larger and more sustained (mostly IgG) because memory cells respond at once — often preventing illness altogether. This memory is the basis of long-lasting immunity and of vaccination."
      },
      {
        "h": "Types of immunity and vaccination",
        "p": "Immunity is classed as active or passive, natural or artificial.",
        "list": [
          "Active natural — antibodies and memory made after actually having the infection (long-lasting).",
          "Active artificial — VACCINATION: a harmless form of the antigen triggers an immune response and memory without disease (long-lasting).",
          "Passive natural — ready-made antibodies from mother to baby (placental IgG, breast-milk IgA); temporary.",
          "Passive artificial — injected ready-made antibodies (e.g. anti-tetanus immunoglobulin) for immediate but short-lived protection."
        ]
      },
      {
        "h": "Disorders of immunity",
        "p": "Immune function can fail in several ways. IMMUNODEFICIENCY (too little immunity) leaves the body prone to infection — acquired (e.g. HIV/AIDS destroying helper T cells, chemotherapy, malnutrition) or inherited. HYPERSENSITIVITY/ALLERGY is an excessive response to a harmless antigen (allergen), ranging from hay fever to life-threatening anaphylaxis (IgE-mediated). AUTOIMMUNITY is a loss of self-tolerance so the immune system attacks the body's own tissues (e.g. type 1 diabetes, rheumatoid arthritis). Transplant rejection reflects the immune system recognising donor tissue as non-self."
      },
      {
        "h": "Normal values / key figures",
        "list": [
          "Three lines of defence: barriers → innate → adaptive; only the third is specific and has memory.",
          "Central lymphoid organs: bone marrow and thymus; peripheral: lymph nodes, spleen, tonsils, MALT.",
          "Antibody classes: IgG (most abundant, crosses placenta), IgM (first in infection), IgA (secretions), IgE (allergy), IgD.",
          "Four cardinal signs of inflammation: redness, heat, swelling, pain (± loss of function)."
        ]
      },
      {
        "h": "Nursing application",
        "list": [
          "Aseptic technique and hand hygiene protect the first line of defence, especially where skin/mucosa are breached (wounds, cannulae, catheters).",
          "Recognise inflammation and the systemic signs of infection (fever, raised white cell count) and escalate signs of sepsis promptly.",
          "Protect immunocompromised patients (neutropenic precautions) and understand vaccination schedules and cold-chain storage.",
          "Recognise and manage allergic reactions and anaphylaxis (adrenaline), and understand immunosuppression in autoimmune disease and transplantation."
        ]
      }
    ],
    "references": REF_PHY,
    "examQuestions": [
      "Describe the organs and cells of the immune system and the three lines of defence.",
      "Explain the innate (non-specific) defences, including phagocytosis, complement and the inflammatory response with its cardinal signs.",
      "Compare humoral and cell-mediated adaptive immunity and describe the roles of B cells, T cells and antibodies.",
      "Explain immunological memory and the difference between primary and secondary responses, and relate this to vaccination.",
      "Distinguish active, passive, natural and artificial immunity, and outline the main disorders of immunity."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A vaccine protects by producing:",
        "options": [
          "Immediate ready-made antibodies only",
          "Passive natural immunity",
          "Active artificial immunity with memory cells",
          "A permanent infection"
        ],
        "answer": 2,
        "rationale": "Vaccination exposes the body to a harmless antigen, generating an adaptive response and memory (active artificial immunity) without causing disease."
      },
      {
        "type": "mcq",
        "q": "HIV causes profound immunodeficiency mainly by destroying:",
        "options": [
          "Helper (CD4) T cells",
          "Neutrophils",
          "Red blood cells",
          "Plasma proteins"
        ],
        "answer": 0,
        "rationale": "HIV targets CD4 helper T cells that orchestrate immunity; their loss cripples both humoral and cell-mediated responses."
      },
      {
        "type": "mcq",
        "q": "The redness, heat, swelling and pain of inflammation are chiefly due to:",
        "options": [
          "Vasoconstriction",
          "Reduced blood flow",
          "Loss of white cells",
          "Vasodilation and increased capillary permeability"
        ],
        "answer": 3,
        "rationale": "Histamine-driven vasodilation and increased permeability cause the four cardinal signs by increasing blood flow and exudate."
      },
      {
        "type": "mcq",
        "q": "The antibody class that crosses the placenta to give a newborn passive immunity is:",
        "options": [
          "IgA",
          "IgG",
          "IgE",
          "IgM"
        ],
        "answer": 1,
        "rationale": "IgG is the only immunoglobulin that crosses the placenta, providing the newborn with temporary passive protection."
      },
      {
        "type": "mcq",
        "q": "A patient who has already met a pathogen recovers rapidly on re-exposure because the secondary response is:",
        "options": [
          "Slower and weaker",
          "Only IgM",
          "Faster, larger and dominated by IgG due to memory cells",
          "Absent"
        ],
        "answer": 2,
        "rationale": "Memory cells enable a rapid, strong, mainly IgG secondary response that often prevents illness."
      },
      {
        "type": "mcq",
        "q": "Injecting ready-made anti-tetanus immunoglobulin after a dirty wound provides:",
        "options": [
          "Passive artificial immunity (immediate, short-lived)",
          "Active natural immunity",
          "Active artificial immunity",
          "No protection"
        ],
        "answer": 0,
        "rationale": "Ready-made antibodies give immediate but temporary protection without forming memory — passive artificial immunity."
      },
      {
        "type": "mcq",
        "q": "The central (primary) lymphoid organ where T lymphocytes mature is the:",
        "options": [
          "Spleen",
          "Lymph node",
          "Tonsil",
          "Thymus"
        ],
        "answer": 3,
        "rationale": "T cells mature in the thymus; B cells mature in the bone marrow — both central lymphoid organs."
      },
      {
        "type": "mcq",
        "q": "Complement proteins aid defence by lysing microbes, promoting inflammation and tagging microbes for phagocytosis. This tagging is called:",
        "options": [
          "Agglutination",
          "Opsonisation",
          "Neutralisation",
          "Memory"
        ],
        "answer": 1,
        "rationale": "Opsonisation coats microbes (by complement or antibody) to make them easier for phagocytes to engulf."
      },
      {
        "type": "mcq",
        "q": "Type 1 diabetes and rheumatoid arthritis are examples of:",
        "options": [
          "Immunodeficiency",
          "Allergy",
          "Autoimmunity (loss of self-tolerance)",
          "Passive immunity"
        ],
        "answer": 2,
        "rationale": "In autoimmunity the immune system loses tolerance and attacks the body's own tissues."
      },
      {
        "type": "mcq",
        "q": "A patient develops rapid swelling of the lips, wheeze and hypotension after a bee sting. This IgE-mediated anaphylaxis is treated first with:",
        "options": [
          "Adrenaline (epinephrine)",
          "Antibiotics",
          "A vaccine",
          "Immunoglobulin"
        ],
        "answer": 0,
        "rationale": "Anaphylaxis is a severe IgE-mediated hypersensitivity; adrenaline is the immediate life-saving treatment."
      },
      {
        "type": "fill",
        "q": "The only line of defence that is specific and shows immunological memory is the ____ (specific) immune response.",
        "accept": [
          "adaptive",
          "third",
          "specific"
        ],
        "rationale": "Adaptive (third-line) immunity is antigen-specific and generates memory, unlike innate defences."
      },
      {
        "type": "fill",
        "q": "The first antibody class produced in a new (primary) infection is ____.",
        "accept": [
          "igm",
          "ig m"
        ],
        "rationale": "IgM appears first in a primary response; IgG predominates later and in the secondary response."
      }
    ]
  }
];
