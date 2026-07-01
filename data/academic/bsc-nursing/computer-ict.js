/* ============================================================
   B.Sc. in Nursing (2018) · B111-II Computer & ICT
   — 12 topics, degree level. Aligned to the BNMC 4-year B.Sc.
   syllabus (Paper II: Information & Communication Technology):
   computing/ICT foundations, hardware, operating systems &
   software, Windows & file management, MS Word/Excel/PowerPoint,
   internet & networking, email & evidence searching, health
   informatics & the EHR, and ICT in nursing practice/research.
   DEEPENED to advanced textbook depth (12-16 notes sections/topic).
   Grounded in standard texts:
     • Shelly GB, Vermaat ME. Discovering Computers. Cengage Learning.
     • Williams BK, Sawyer SC. Using Information Technology. McGraw-Hill.
     • Hebda T, Czar P. Handbook of Informatics for Nurses &
       Healthcare Professionals. Pearson.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_ICT = [
  "Shelly GB, Vermaat ME. Discovering Computers. Cengage Learning.",
  "Williams BK, Sawyer SC. Using Information Technology. McGraw-Hill.",
  "Hebda T, Czar P. Handbook of Informatics for Nurses & Healthcare Professionals. Pearson."
];

window.Academic.topics["bsc-nursing/computer-ict"] = [
  {
    "id": "ict-01-intro",
    "unit": "Unit 1 · Foundations of Computing & ICT",
    "title": "Introduction to Computers & Information Technology in Nursing",
    "readMinutes": 24,
    "summary": "The computer as an information-processing system, the data-information-knowledge-wisdom continuum, characteristics and generations of computers, IT versus ICT, number systems and units, classification of computers, and the strategic role of ICT in modern nursing and health care.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is a computer?",
        "p": "A computer is a programmable electronic device that accepts data (input), processes it according to a stored set of instructions (a program held in memory), produces useful results (output), and stores data and results for later retrieval. The defining feature at degree level is the stored-program concept, formalised by John von Neumann in 1945: instructions and data reside together in the same addressable memory, so a single general-purpose machine performs an unlimited range of tasks simply by loading a different program. A computer is deterministic and syntactic — it manipulates symbols according to precise rules at very high speed and with perfect consistency, but it does not itself understand meaning; semantic interpretation and clinical judgement remain human contributions."
      },
      {
        "h": "The four hardware building blocks and the IPOS model",
        "p": "Every computer, from a bedside monitor to a mainframe, is organised around four functional blocks — input, processing (CPU), storage/memory and output — and follows the Input → Process → Output cycle, with Storage supporting the whole cycle. This is the IPOS model (Input, Process, Output, Storage). In a clinical example, a nurse enters a blood pressure (input), the system compares it against alert thresholds (process), displays or transmits an early-warning score (output), and writes the reading to the electronic record (storage) for later trend analysis. All hospital information systems are elaborations of this single model."
      },
      {
        "h": "The data–information–knowledge–wisdom (DIKW) continuum",
        "p": "In nursing informatics the transformation of raw facts into professional judgement is described as the DIKW continuum, articulated for nursing by Graves and Corcoran and later by Nelson. Data are discrete, objective, uninterpreted facts (a temperature of 39.2 degrees C). Information is data that has been processed, structured and given context (a fever trend charted over 24 hours). Knowledge is information that has been synthesised so relationships and rules are understood (recognising the pattern as post-operative sepsis). Wisdom is the appropriate, ethical, prudent use of knowledge to manage a human problem (deciding when, how and to whom to escalate care). Computers excel at moving data to information and can support knowledge; nurses supply the knowledge and wisdom.",
        "figure": {
          "caption": "The DIKW continuum: computers transform data into information; nurses add knowledge and wisdom.",
          "svg": "<svg viewBox=\"0 0 560 200\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"DIKW continuum from data to wisdom.\"><defs><marker id=\"ictArr1\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"12\" y=\"70\" width=\"120\" height=\"56\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"72\" y=\"94\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">DATA</text><text x=\"72\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">raw facts</text><rect x=\"150\" y=\"70\" width=\"120\" height=\"56\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"210\" y=\"94\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">INFORMATION</text><text x=\"210\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">context added</text><rect x=\"288\" y=\"70\" width=\"120\" height=\"56\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"348\" y=\"94\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">KNOWLEDGE</text><text x=\"348\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">interpreted</text><rect x=\"426\" y=\"70\" width=\"120\" height=\"56\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"486\" y=\"94\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">WISDOM</text><text x=\"486\" y=\"112\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">applied judgement</text><line x1=\"132\" y1=\"98\" x2=\"146\" y2=\"98\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr1)\"/><line x1=\"270\" y1=\"98\" x2=\"284\" y2=\"98\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr1)\"/><line x1=\"408\" y1=\"98\" x2=\"422\" y2=\"98\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr1)\"/><text x=\"200\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">computer strength</text><text x=\"470\" y=\"160\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#7C2D12\">human (nurse) strength</text></svg>"
        }
      },
      {
        "h": "The information processing cycle in detail",
        "p": "Regardless of size, every computer follows the cycle Input → Processing → Output, supported throughout by Storage and coordinated by control signals along the system bus. Data is entered; the processor executes the fetch-decode-execute (machine) cycle over the stored instructions; and results are displayed, printed or transmitted. Data and results can be written to secondary storage and retrieved later. The processing step is where raw data becomes information: sorting, calculating, comparing, summarising and formatting all take place here. This IPOS model underlies all clinical information systems and is the conceptual link between hardware and the DIKW continuum."
      },
      {
        "h": "Characteristics of a computer",
        "list": [
          "Speed — executes millions to billions of operations per second; clock speeds are measured in MHz/GHz and instruction rates in MIPS.",
          "Accuracy — results are correct if data and instructions are correct; errors arise almost entirely from faulty input or logic (the GIGO principle: garbage in, garbage out).",
          "Storage capacity — stores and rapidly recalls vast volumes of data, from kilobytes to terabytes and beyond.",
          "Automation — once programmed, it carries out long sequences of tasks without human intervention.",
          "Diligence — repeats tasks indefinitely without fatigue, boredom or loss of accuracy, unlike a human clerk.",
          "Versatility — a single machine performs numeric, text, image, audio and communication tasks.",
          "Reliability and reproducibility — identical inputs give identical outputs, which is critical for safe patient data and legally defensible audit trails.",
          "No intelligence or intuition of its own — it cannot correct a wrong instruction or exercise judgement; this is the nurse's role."
        ]
      },
      {
        "h": "Generations of computers",
        "p": "Computer development is traditionally described in five generations defined by the core switching technology. First generation (1940s-1950s) used vacuum tubes — large, hot and unreliable. Second generation (late 1950s-1960s) used transistors — smaller, faster and more reliable. Third generation (1960s-1970s) introduced the integrated circuit (IC), packing many transistors onto one chip. Fourth generation (1970s-present) is built on the microprocessor using large- and very-large-scale integration (LSI/VLSI), placing an entire CPU on a single chip. The emerging fifth generation is characterised by artificial intelligence, massive parallel processing, and natural interfaces (voice, gesture). Across generations, size, cost and power consumption fell dramatically while speed and reliability rose, making bedside, mobile and wearable computing feasible in health care."
      },
      {
        "h": "Number systems and how data is represented",
        "p": "Because electronic switches have two stable states (on/off), computers represent all data internally in the binary (base-2) number system using only the digits 0 and 1. Each binary digit is a bit. Programmers also use octal (base-8) and hexadecimal (base-16) as compact shorthand for binary. Text characters are encoded with schemes such as ASCII (128/256 characters, 7-8 bits each) and the international Unicode standard (which covers virtually all writing systems, including Bengali). Understanding that everything — numbers, text, images, sound and video — is ultimately stored as patterns of bits explains why data can be copied perfectly, compressed, encrypted and transmitted between any two computers."
      },
      {
        "h": "Normal values / key units of measurement",
        "list": [
          "1 bit = a single binary digit (0 or 1); 1 nibble = 4 bits.",
          "1 byte = 8 bits, encoding one character; 1 word = the natural data width of a CPU (e.g. 32-bit or 64-bit).",
          "1 kilobyte (KB) ≈ 1,000 bytes; 1 megabyte (MB) ≈ 1,000 KB; 1 gigabyte (GB) ≈ 1,000 MB; 1 terabyte (TB) ≈ 1,000 GB.",
          "Processor clock speed is measured in gigahertz (GHz); 1 GHz = one billion cycles per second.",
          "Network speed (bandwidth) is measured in bits per second (Mbps, Gbps), not bytes.",
          "A typical text record is a few KB; a chest X-ray is several MB; a CT/MRI study can be hundreds of MB — which explains hospital storage and bandwidth needs."
        ]
      },
      {
        "h": "Information Technology (IT) versus ICT",
        "p": "Information Technology (IT) is the use of computers, software and storage to acquire, process, retrieve and manage information. ICT (Information and Communication Technology) is the broader term: it adds the communication dimension — networks, the internet, mobile telephony, and telehealth — enabling information to be shared instantly between people and places. The shift from IT to ICT is precisely what made the electronic health record shareable across a hospital, and telenursing possible across a district. Health informatics is the applied science that uses ICT to support clinical care, administration, education and research."
      },
      {
        "h": "Classification of computers by size and capacity",
        "list": [
          "Supercomputer — the fastest and most powerful (measured in FLOPS); used in genomics, drug modelling, weather and epidemiological simulation.",
          "Mainframe — high-capacity system serving thousands of concurrent users with high reliability; runs large hospital and national health information systems.",
          "Minicomputer / midrange server — mid-sized multi-user system for a department or laboratory.",
          "Server — provides shared resources (files, databases, applications, web pages) to networked clients.",
          "Microcomputer / Personal Computer (PC) — single-user desktop or laptop at the nurses' station.",
          "Mobile and embedded devices — tablets, smartphones and dedicated bedside monitors, infusion pumps and wearables with built-in processors."
        ]
      },
      {
        "h": "Classification of computers by data type handled",
        "p": "Computers are also classified by the type of data they process. Analog computers process continuously varying physical quantities (older sphygmomanometers and some monitoring transducers). Digital computers process discrete binary data and are by far the most common. Hybrid computers combine both — an important category in health care, where a device such as an ICU monitor samples continuous analog physiological signals (via analog-to-digital conversion) and then processes and displays them digitally. Appreciating analog-to-digital conversion helps the nurse understand how a continuous ECG waveform becomes a stored, alarmable digital trace."
      },
      {
        "h": "The strategic role of ICT in nursing and health care",
        "list": [
          "Electronic health records (EHR) for continuous, complete, shareable patient data.",
          "Clinical decision support — alerts, reminders and drug-interaction checks that improve safety.",
          "Physiological and remote patient monitoring in ICU, wards and the community.",
          "Laboratory (LIS), radiology (RIS/PACS) and pharmacy (e-prescribing) systems.",
          "Nursing workload measurement, rostering, quality and outcome reporting.",
          "Evidence-based practice — access to databases, guidelines and online journals.",
          "Education, e-learning and simulation for continuing professional development.",
          "Telehealth and telenursing that extend care beyond the hospital walls.",
          "Public-health surveillance, immunisation registries and outbreak tracking."
        ]
      },
      {
        "h": "Clinical relevance — why a nurse must be computer literate",
        "p": "Computer and information literacy is now a core professional competency, not an optional extra. Nurses spend a substantial share of each shift interacting with information systems, and the accuracy of the data they enter directly affects patient safety, continuity of care and the legal record. A nurse who understands the IPOS model, the DIKW continuum and the GIGO principle documents more thoughtfully, questions implausible computer output rather than accepting it blindly, protects confidential data, and can adopt new clinical technologies confidently as they emerge."
      },
      {
        "h": "Key terms",
        "list": [
          "Hardware — the tangible physical components of the system.",
          "Software — the programs and data that direct the hardware.",
          "Stored-program concept — instructions held in memory alongside data (von Neumann principle).",
          "Firmware — software permanently stored in hardware (e.g. BIOS/UEFI).",
          "Health informatics — the discipline integrating information science, computer science and health care.",
          "User / end-user — the clinician or clerk who operates the system."
        ]
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Define a computer and explain the information processing (IPOS) cycle with a clinical example and diagram.",
      "Explain the DIKW continuum and describe the nurse's contribution at each level with an example.",
      "Describe the five generations of computers and the core switching technology of each.",
      "Explain why computers use the binary system, and define bit, byte and the storage units up to terabyte.",
      "Differentiate IT from ICT, and discuss the strategic roles of ICT in modern nursing practice."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A ward monitor samples a continuous ECG signal and then stores and alarms it digitally. This device is best classified as a:",
        "options": [
          "Pure analog computer",
          "Hybrid computer",
          "Supercomputer",
          "Mainframe"
        ],
        "answer": 1,
        "rationale": "It converts a continuous analog physiological signal to digital form and processes it digitally — the defining feature of a hybrid computer."
      },
      {
        "type": "mcq",
        "q": "The principle that lets one general-purpose machine perform unlimited different tasks by changing the program is the:",
        "options": [
          "Binary system",
          "Stored-program concept",
          "GIGO principle",
          "Boot process"
        ],
        "answer": 1,
        "rationale": "The stored-program (von Neumann) concept keeps instructions and data together in memory, so changing the program changes the task."
      },
      {
        "type": "mcq",
        "q": "A nurse charts 24 hours of temperatures and sees a rising fever trend, then concludes this pattern indicates post-operative sepsis. The conclusion sits at which DIKW level?",
        "options": [
          "Data",
          "Information",
          "Knowledge",
          "Storage"
        ],
        "answer": 2,
        "rationale": "Interpreting information so relationships and rules are understood is knowledge; the trend chart itself was information."
      },
      {
        "type": "mcq",
        "q": "Which sequence lists the storage units from smallest to largest?",
        "options": [
          "GB, MB, KB, TB",
          "KB, MB, GB, TB",
          "MB, KB, GB, TB",
          "TB, GB, MB, KB"
        ],
        "answer": 1,
        "rationale": "The order ascends kilobyte → megabyte → gigabyte → terabyte, each roughly a thousand times larger."
      },
      {
        "type": "mcq",
        "q": "A hospital purchases a system that must serve several thousand concurrent users with very high reliability for its core health information system. This is most likely a:",
        "options": [
          "Microcomputer",
          "Tablet",
          "Mainframe",
          "Embedded monitor"
        ],
        "answer": 2,
        "rationale": "Mainframes provide high-capacity, high-reliability processing for very large numbers of simultaneous users."
      },
      {
        "type": "mcq",
        "q": "A monitor displays an impossible heart rate of 400/min in a calm, alert patient. Applying the GIGO principle, the nurse should first suspect:",
        "options": [
          "A CPU fault",
          "Faulty input such as a loose lead or artefact",
          "Insufficient RAM",
          "A binary error"
        ],
        "answer": 1,
        "rationale": "GIGO means output quality depends on input quality; an implausible value usually reflects a signal/input problem, not machine miscalculation."
      },
      {
        "type": "mcq",
        "q": "Fourth-generation computers, which made bedside and mobile devices possible, are defined by the:",
        "options": [
          "Vacuum tube",
          "Transistor",
          "Integrated circuit only",
          "Microprocessor (LSI/VLSI)"
        ],
        "answer": 3,
        "rationale": "The fourth generation is defined by the microprocessor built with large- and very-large-scale integration, placing a whole CPU on one chip."
      },
      {
        "type": "mcq",
        "q": "Compared with IT, the additional dimension that ICT introduces — and that makes a shareable EHR and telenursing possible — is:",
        "options": [
          "Calculation",
          "Colour graphics",
          "Communication (networking)",
          "Compression"
        ],
        "answer": 2,
        "rationale": "ICT = Information and Communication Technology; the added element is communication via networks and the internet."
      },
      {
        "type": "mcq",
        "q": "In the IPOS model, comparing an entered blood pressure against alert thresholds is part of which stage?",
        "options": [
          "Input",
          "Process",
          "Output",
          "Storage"
        ],
        "answer": 1,
        "rationale": "Comparing, calculating and summarising occur in the processing stage, where data becomes information."
      },
      {
        "type": "mcq",
        "q": "Text in Bengali as well as English can be represented on modern systems mainly because of the character-encoding standard called:",
        "options": [
          "ASCII only",
          "Unicode",
          "Binary",
          "Hexadecimal"
        ],
        "answer": 1,
        "rationale": "Unicode encodes virtually all the world's writing systems, unlike the limited 128/256-character ASCII set."
      },
      {
        "type": "fill",
        "q": "In the DIKW continuum, the ethical, prudent application of knowledge to a human problem is called ____.",
        "accept": [
          "wisdom"
        ],
        "rationale": "Wisdom is the highest level, contributed largely by the nurse rather than the machine."
      },
      {
        "type": "fill",
        "q": "The base-2 number system a computer uses internally, with only the digits 0 and 1, is the ____ system.",
        "accept": [
          "binary"
        ],
        "rationale": "Binary reflects the two on/off states of electronic switches; each digit is a bit."
      }
    ]
  },
  {
    "id": "ict-02-hardware",
    "unit": "Unit 2 · Computer Hardware & Devices",
    "title": "Computer Hardware, Architecture & Devices",
    "readMinutes": 25,
    "summary": "The physical components of a computer system in depth: the von Neumann architecture, input devices, the CPU and its fetch-decode-execute cycle, the memory hierarchy (registers, cache, RAM, ROM), the system bus and ports, output devices, secondary and cloud storage, performance factors and data representation — with clinical device examples.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Hardware and system architecture",
        "p": "Hardware means the physical, tangible components of a computer. They are organised into four functional units linked by the system bus: input, the central processing unit (CPU), memory, and output, with secondary storage retaining data permanently. This organisation follows the von Neumann architecture, in which a single memory holds both instructions and data and a shared bus carries them to the processor. The alternative Harvard architecture uses separate instruction and data memories and is common inside embedded medical devices where predictable timing matters.",
        "figure": {
          "caption": "Von Neumann architecture: input and output connect to the CPU and memory over a shared system bus, with storage retaining data.",
          "svg": "<svg viewBox=\"0 0 560 250\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Block diagram of computer architecture.\"><defs><marker id=\"ictArr2\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"80\" width=\"118\" height=\"55\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"74\" y=\"103\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">INPUT</text><text x=\"74\" y=\"121\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">keyboard, scanner</text><rect x=\"212\" y=\"52\" width=\"150\" height=\"105\" rx=\"10\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"287\" y=\"75\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#0F4C3A\">CPU</text><text x=\"287\" y=\"93\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">Control Unit</text><text x=\"287\" y=\"108\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">ALU + registers</text><rect x=\"234\" y=\"118\" width=\"106\" height=\"30\" rx=\"6\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"1.5\"/><text x=\"287\" y=\"137\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Memory (RAM/ROM)</text><rect x=\"427\" y=\"80\" width=\"118\" height=\"55\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"486\" y=\"103\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">OUTPUT</text><text x=\"486\" y=\"121\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">monitor, printer</text><line x1=\"133\" y1=\"107\" x2=\"208\" y2=\"107\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr2)\"/><line x1=\"362\" y1=\"107\" x2=\"423\" y2=\"107\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr2)\"/><rect x=\"212\" y=\"195\" width=\"150\" height=\"42\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"287\" y=\"214\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">STORAGE</text><text x=\"287\" y=\"229\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">SSD, HDD, cloud</text><line x1=\"287\" y1=\"157\" x2=\"287\" y2=\"192\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr2)\"/></svg>"
        }
      },
      {
        "h": "The motherboard and its components",
        "p": "The motherboard (mainboard) is the large printed circuit board that interconnects every component. It carries the CPU socket, memory (RAM) slots, expansion slots (PCIe) for graphics and network cards, the chipset that coordinates data flow, the ROM/BIOS-UEFI firmware chip, a battery-backed clock, and the ports that reach the outside world. All internal communication travels across the motherboard's buses. Recognising these parts helps the nurse describe a fault accurately to technical staff and understand why some upgrades (more RAM) are simple while others (a faster CPU) are not."
      },
      {
        "h": "Input devices",
        "p": "Input devices convert human actions or physical signals into digital data the computer can process.",
        "list": [
          "Keyboard — enters text, numbers and commands; the most common general input device.",
          "Pointing devices — mouse, touchpad, trackball and stylus for selection and drawing.",
          "Scanner and OCR — digitises paper records; optical character recognition converts scanned text into editable data.",
          "Touchscreen — combines input and output, common on bedside terminals and tablets.",
          "Barcode and RFID readers — identify patients, drugs, blood units and specimens for safe administration and tracking.",
          "Biometric readers — fingerprint, iris or face capture for secure, auditable login.",
          "Voice input / microphone — for dictation and speech recognition in documentation.",
          "Medical sensors and transducers — ECG electrodes, SpO2 probes, temperature probes and BP cuffs feed physiological data to monitors through analog-to-digital conversion."
        ]
      },
      {
        "h": "The CPU and its internal structure",
        "p": "The Central Processing Unit (processor) is the chip that executes instructions and is often called the brain of the computer. It contains three key parts: the Control Unit (CU), which fetches, decodes and directs the sequence of operations and generates timing/control signals; the Arithmetic and Logic Unit (ALU), which performs arithmetic (add, subtract, multiply, divide) and logical comparisons (greater than, equal, AND/OR); and a set of small, ultra-fast registers that temporarily hold the instruction, operands and results currently being worked on. The CPU is mounted on the motherboard and cooled by a heat sink and fan."
      },
      {
        "h": "The machine (fetch–decode–execute) cycle",
        "p": "The CPU processes each instruction through a repeating four-step machine cycle. FETCH: the control unit retrieves the next instruction from memory, using the program counter to track its address. DECODE: the control unit interprets what the instruction requires. EXECUTE: the ALU or another unit carries out the operation. STORE (write-back): the result is written to a register or back to memory. This cycle repeats billions of times per second. The instruction cycle (fetch-decode) plus the execution cycle together form the machine cycle; understanding it demystifies what 'processing speed' actually measures.",
        "figure": {
          "caption": "The machine cycle: the CPU repeatedly fetches, decodes, executes and stores each instruction.",
          "svg": "<svg viewBox=\"0 0 520 190\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fetch decode execute store cycle.\"><defs><marker id=\"ictArr2b\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"185\" y=\"12\" width=\"150\" height=\"40\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"37\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">1. FETCH</text><rect x=\"370\" y=\"72\" width=\"140\" height=\"40\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"440\" y=\"97\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">2. DECODE</text><rect x=\"185\" y=\"132\" width=\"150\" height=\"40\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"157\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">3. EXECUTE</text><rect x=\"10\" y=\"72\" width=\"140\" height=\"40\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"80\" y=\"97\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">4. STORE</text><line x1=\"335\" y1=\"40\" x2=\"378\" y2=\"72\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr2b)\"/><line x1=\"420\" y1=\"112\" x2=\"320\" y2=\"140\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr2b)\"/><line x1=\"185\" y1=\"152\" x2=\"120\" y2=\"112\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr2b)\"/><line x1=\"90\" y1=\"72\" x2=\"200\" y2=\"46\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr2b)\"/></svg>"
        }
      },
      {
        "h": "CPU performance factors",
        "list": [
          "Clock speed — cycles per second in GHz; higher generally means faster instruction throughput.",
          "Number of cores — multi-core CPUs (dual, quad, octa) run several instruction streams truly in parallel.",
          "Word length — the number of bits handled at once (32-bit vs 64-bit); wider words address more memory and process larger numbers.",
          "Cache size — more on-chip cache reduces trips to slower RAM.",
          "Instruction set and architecture efficiency — how much useful work each cycle achieves."
        ]
      },
      {
        "h": "The memory hierarchy",
        "p": "Memory is arranged as a hierarchy that trades speed against capacity and cost. From fastest/smallest/most expensive to slowest/largest/cheapest: CPU registers → cache (L1, L2, L3 SRAM) → main memory (RAM) → secondary storage (SSD/HDD) → offline/cloud storage. Data is moved up the hierarchy as it is needed and down when no longer active. This design gives the illusion of large fast memory at reasonable cost. It explains why a workstation with adequate RAM runs clinical applications smoothly, whereas too little RAM forces constant slow swapping to disk (thrashing).",
        "figure": {
          "caption": "The memory hierarchy trades speed against capacity and cost from registers down to cloud storage.",
          "svg": "<svg viewBox=\"0 0 480 220\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Memory hierarchy pyramid.\"><polygon points=\"240,15 300,60 180,60\" fill=\"#0F4C3A\"/><text x=\"240\" y=\"50\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#DCFCE7\" font-weight=\"700\">Registers</text><rect x=\"165\" y=\"62\" width=\"150\" height=\"34\" fill=\"#15803D\"/><text x=\"240\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#F0FDF4\" font-weight=\"700\">Cache (SRAM)</text><rect x=\"130\" y=\"98\" width=\"220\" height=\"34\" fill=\"#22C55E\"/><text x=\"240\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0F4C3A\" font-weight=\"700\">Main memory (RAM)</text><rect x=\"90\" y=\"134\" width=\"300\" height=\"34\" fill=\"#86EFAC\"/><text x=\"240\" y=\"156\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0F4C3A\" font-weight=\"700\">Secondary storage (SSD/HDD)</text><rect x=\"55\" y=\"170\" width=\"370\" height=\"34\" fill=\"#DCFCE7\" stroke=\"#15803D\"/><text x=\"240\" y=\"192\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0F4C3A\" font-weight=\"700\">Offline / cloud storage</text><text x=\"455\" y=\"45\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">faster, smaller</text><text x=\"455\" y=\"200\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">slower, larger</text></svg>"
        }
      },
      {
        "h": "RAM and ROM",
        "list": [
          "RAM (Random Access Memory) — volatile primary working memory holding the operating system, active programs and current data; contents are lost when power is removed. More RAM allows more or larger programs to run at once.",
          "DRAM vs SRAM — main memory is dynamic RAM (needs constant refreshing); cache is faster static RAM.",
          "ROM (Read Only Memory) — non-volatile memory storing firmware/BIOS-UEFI boot instructions; retained without power.",
          "Cache — a small, very fast buffer that keeps frequently used data and instructions near the CPU to reduce waiting.",
          "Virtual memory — disk space used as an overflow when RAM is full; expands apparent memory at the cost of speed."
        ]
      },
      {
        "h": "The system bus and ports",
        "p": "The system bus is the set of parallel conductors carrying signals between components, comprising three sub-buses: the data bus (carries the actual data), the address bus (carries the memory location of the data), and the control bus (carries timing and command signals). Bus width and speed strongly affect performance. External devices connect through ports and interfaces such as USB, HDMI/DisplayPort, Ethernet (RJ-45), Thunderbolt and audio jacks. In hospitals, standardised interfaces let monitors, infusion pumps, printers and network points connect reliably and be replaced without redesign."
      },
      {
        "h": "Output devices",
        "p": "Output devices present processed results to the user in human-usable form.",
        "list": [
          "Monitor (LCD/LED/OLED) — displays soft-copy output; higher resolution and colour depth matter for viewing radiology images.",
          "Printer — inkjet or laser producing hard copy such as discharge summaries, prescriptions and labels; thermal printers produce wristbands and barcodes.",
          "Speakers and alarms — audible output, including the physiological monitor alarms that alert nurses.",
          "Projector — enlarges the display for teaching and case presentations.",
          "Plotters and specialised devices — for large-format or specific clinical printouts."
        ]
      },
      {
        "h": "Secondary and cloud storage",
        "p": "Secondary (auxiliary) storage retains data permanently even when the computer is off.",
        "list": [
          "Hard Disk Drive (HDD) — high-capacity magnetic storage with rotating platters and moving heads; cheaper per GB but slower and shock-sensitive.",
          "Solid State Drive (SSD) — flash-based, far faster, silent and shock-resistant with no moving parts; increasingly standard.",
          "USB flash drives and memory cards — portable but a serious data-security risk if unencrypted or lost.",
          "Optical discs (CD/DVD/Blu-ray) — largely legacy, for archiving and distribution.",
          "Cloud storage — data held on remote internet servers, enabling access, sharing and backup across sites while raising confidentiality, jurisdiction and governance concerns.",
          "RAID and enterprise arrays — combine multiple disks for capacity, speed and fault tolerance in hospital data centres."
        ]
      },
      {
        "h": "Data representation, units and file sizes",
        "p": "Computers represent all data in binary — combinations of bits (0 or 1) reflecting the on/off states of electronic switches. Eight bits form a byte, which encodes one character using schemes such as ASCII or Unicode. Capacity scales up as Kilobyte (KB ≈ 1,000 bytes) → Megabyte (MB) → Gigabyte (GB) → Terabyte (TB) → Petabyte (PB), each roughly a thousand times larger. A text note is a few KB, a photograph a few MB, and a CT or MRI study can be hundreds of MB, so a busy imaging department generates terabytes per year. Appreciating these units helps nurses judge the storage and backup needs of records, images and video."
      },
      {
        "h": "Clinical relevance — hardware safety and continuity",
        "p": "Hardware knowledge has direct clinical consequences. Battery-backed devices and uninterruptible power supplies keep monitors and pumps running during power failure; adequate RAM prevents dangerous slowdowns at the nurses' station; and shock-resistant SSDs suit mobile carts. Nurses must protect against theft or loss of portable storage carrying patient data, ensure devices are cleaned and infection-control compliant, report hardware faults promptly, and know the local downtime procedure so care continues safely when hardware fails."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Draw and describe the von Neumann architecture, and contrast it briefly with the Harvard architecture used in embedded devices.",
      "Explain the machine (fetch-decode-execute-store) cycle and the roles of the CU, ALU and registers.",
      "Describe the memory hierarchy from registers to cloud storage and differentiate RAM from ROM.",
      "Discuss input and output devices used in a clinical setting, giving specific examples.",
      "Compare HDD, SSD and cloud storage, and outline the governance concerns of storing patient data in the cloud."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A workstation runs very slowly and the disk light is constantly active as it swaps data to and from the hard disk. The most likely cause is:",
        "options": [
          "A faulty monitor",
          "Insufficient RAM forcing heavy virtual-memory use",
          "Too much cache",
          "A dead CMOS battery"
        ],
        "answer": 1,
        "rationale": "When RAM is inadequate the OS swaps constantly to disk (thrashing), causing slowdown with heavy disk activity."
      },
      {
        "type": "mcq",
        "q": "In the machine cycle, retrieving the next instruction from memory using the program counter is the ____ step.",
        "options": [
          "Decode",
          "Execute",
          "Fetch",
          "Store"
        ],
        "answer": 2,
        "rationale": "Fetch retrieves the next instruction; decode interprets it; execute performs it; store writes the result."
      },
      {
        "type": "mcq",
        "q": "Which memory is volatile and loses its contents when power is removed?",
        "options": [
          "ROM",
          "SSD",
          "RAM",
          "Optical disc"
        ],
        "answer": 2,
        "rationale": "RAM is volatile working memory; ROM and secondary storage are non-volatile."
      },
      {
        "type": "mcq",
        "q": "Ordered from fastest to slowest, the memory hierarchy is:",
        "options": [
          "RAM, cache, registers, disk",
          "Registers, cache, RAM, disk",
          "Disk, RAM, cache, registers",
          "Cache, registers, disk, RAM"
        ],
        "answer": 1,
        "rationale": "Registers are fastest and smallest; secondary storage is slowest and largest."
      },
      {
        "type": "mcq",
        "q": "A nurse scans a patient wristband and a drug barcode before administration. The barcode reader is functioning as a(n):",
        "options": [
          "Output device",
          "Storage device",
          "Input device",
          "Processing device"
        ],
        "answer": 2,
        "rationale": "A barcode reader converts a physical code into digital data for the computer — it is an input device that improves safe identification."
      },
      {
        "type": "mcq",
        "q": "The part of the system bus that carries the memory location of data (rather than the data itself) is the:",
        "options": [
          "Data bus",
          "Address bus",
          "Control bus",
          "Power rail"
        ],
        "answer": 1,
        "rationale": "The address bus carries memory addresses; the data bus carries the data; the control bus carries timing/command signals."
      },
      {
        "type": "mcq",
        "q": "A CT study occupies about 300 MB. Roughly how many such studies fit on a 1 TB drive (ignoring overhead)?",
        "options": [
          "About 30",
          "About 300",
          "About 3,000",
          "About 30,000"
        ],
        "answer": 2,
        "rationale": "1 TB ≈ 1,000,000 MB; 1,000,000 ÷ 300 ≈ 3,300, i.e. about 3,000 studies — showing why imaging needs large storage."
      },
      {
        "type": "mcq",
        "q": "Compared with an HDD, a Solid State Drive is:",
        "options": [
          "Slower and has moving parts",
          "Volatile like RAM",
          "Faster with no moving parts and shock-resistant",
          "Only usable for archiving"
        ],
        "answer": 2,
        "rationale": "SSDs use flash memory, have no moving parts, and are faster and more shock-resistant — ideal for mobile carts."
      },
      {
        "type": "mcq",
        "q": "The non-volatile chip that stores the boot/BIOS-UEFI firmware run at start-up is:",
        "options": [
          "RAM",
          "Cache",
          "ROM",
          "Virtual memory"
        ],
        "answer": 2,
        "rationale": "ROM retains start-up firmware even when the machine is off."
      },
      {
        "type": "mcq",
        "q": "The most important governance concern when a hospital stores identifiable patient data in the cloud is:",
        "options": [
          "Faster CPU clock speed",
          "Larger monitors",
          "More USB ports",
          "Confidentiality, security and access control"
        ],
        "answer": 3,
        "rationale": "Remote storage of identifiable data raises confidentiality, security, jurisdiction and governance issues that must be controlled."
      },
      {
        "type": "fill",
        "q": "Disk space used as an overflow when RAM is full is called ____ memory.",
        "accept": [
          "virtual"
        ],
        "rationale": "Virtual memory extends apparent RAM using slower disk space."
      },
      {
        "type": "fill",
        "q": "The main circuit board that interconnects the CPU, memory, buses and ports is the ____.",
        "accept": [
          "motherboard",
          "mainboard"
        ],
        "rationale": "The motherboard carries and links every core component of the computer."
      }
    ]
  },
  {
    "id": "ict-03-os-software",
    "unit": "Unit 3 · Operating Systems & Software",
    "title": "Operating Systems & Application Software",
    "readMinutes": 25,
    "summary": "The classification of software into system and application software; the boot process; the detailed functions of the operating system (process, memory, device, file and user management); types of operating systems; utility programs; programming languages, generations and the translation process; software development stages; and software licensing relevant to health-care institutions.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is software?",
        "p": "Software is the set of programs — organised sequences of coded instructions — that direct the hardware to perform tasks, together with the associated data and documentation. Without software, hardware is inert. Software falls into two broad classes: system software, which runs and manages the computer itself, and application software, which helps the user accomplish specific real-world tasks such as documenting care or analysing data. A third supporting class, programming/development software, is used to create the other two."
      },
      {
        "h": "Classification of software",
        "list": [
          "System software — the operating system, device drivers, utilities and firmware that operate, control and maintain the computer.",
          "Application software — general-purpose (word processors, spreadsheets, browsers, email) and special-purpose (hospital information systems, EHR, pharmacy, laboratory and imaging software).",
          "Programming/development software — language translators (compilers, interpreters, assemblers), editors and debugging tools used to build software.",
          "Middleware — software that connects and lets different applications or systems exchange data (important for interoperability in hospitals)."
        ]
      },
      {
        "h": "The operating system (OS)",
        "p": "The operating system is the master control program that loads at start-up and manages all hardware and software resources. It provides the platform on which applications run, the interface through which the user interacts with the machine, and the abstraction that lets applications use hardware without knowing its details. It is the most essential piece of system software — no application can run without it — and it acts as the intermediary between the user, the applications and the hardware."
      },
      {
        "h": "The boot process",
        "p": "Booting is the sequence that starts a computer. When power is applied, the CPU runs firmware held in ROM (BIOS or the modern UEFI). The firmware performs the Power-On Self-Test (POST), checking that essential hardware (CPU, memory, keyboard) is present and working. It then locates the boot device, loads the bootloader, which in turn loads the operating system kernel from secondary storage into RAM. Once the OS is running, it initialises devices, starts background services, and presents the login screen. A 'cold boot' starts from power-off; a 'warm boot' (restart) reloads the OS without cutting power. Understanding booting helps a nurse recognise whether a stalled workstation needs a restart or technical support."
      },
      {
        "h": "Core functions of the operating system",
        "list": [
          "Process (CPU/processor) management — creates, schedules and switches between running programs so several appear to run at once (multitasking); allocates CPU time.",
          "Memory management — allocates and reclaims RAM for each program, protects one program's memory from another, and manages virtual memory.",
          "Device (I/O) management — controls input/output devices through device drivers and buffers/spools data (e.g. print queues).",
          "File management — creates, names, stores, organises, retrieves and protects files and folders.",
          "User interface — provides a graphical (GUI) or command-line (CLI) means of interaction.",
          "Security and user management — enforces logins, roles, permissions, access control and audit logging, essential for protecting patient data."
        ],
        "figure": {
          "caption": "The operating system sits between the user/applications and the hardware, managing all resources.",
          "svg": "<svg viewBox=\"0 0 520 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Layers: user, applications, operating system, hardware.\"><rect x=\"120\" y=\"15\" width=\"280\" height=\"38\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"39\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">USER</text><rect x=\"90\" y=\"63\" width=\"340\" height=\"40\" rx=\"8\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"88\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">APPLICATION SOFTWARE</text><rect x=\"60\" y=\"113\" width=\"400\" height=\"42\" rx=\"8\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"260\" y=\"139\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">OPERATING SYSTEM</text><rect x=\"30\" y=\"165\" width=\"460\" height=\"38\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"189\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F4C3A\">HARDWARE</text></svg>"
        }
      },
      {
        "h": "Process management and multitasking in depth",
        "p": "A process is a program in execution. Modern operating systems are multitasking: they give each process a short slice of CPU time (time-slicing) and switch rapidly between them (context switching) so that many appear to run simultaneously — even on a single core. Multiprogramming keeps several programs in memory at once; multithreading splits one program into concurrent threads; and multiprocessing uses several CPU cores for true parallelism. In a clinical setting this is why a nurse can keep the EHR, a drug reference and an email client open together, switching instantly between them."
      },
      {
        "h": "Types of operating systems",
        "list": [
          "Single-user, single-tasking — one user, one task at a time (simple or older devices).",
          "Single-user, multitasking — one user running several programs (typical PC: Windows, macOS).",
          "Multi-user — many users share one system concurrently (mainframes, servers, Unix/Linux).",
          "Real-time OS (RTOS) — responds within strict, guaranteed time limits; used in patient monitors, infusion pumps and ventilators where timing is safety-critical.",
          "Mobile OS — Android and iOS on tablets and smartphones used at the point of care.",
          "Network/server OS — Linux and Windows Server managing shared hospital resources.",
          "Embedded OS — compact firmware controlling dedicated devices such as glucometers and pumps.",
          "Distributed OS — coordinates a group of networked computers to act as one system."
        ]
      },
      {
        "h": "The user interface: GUI versus CLI",
        "p": "The operating system's user interface determines how people interact with it. A Command-Line Interface (CLI) requires typed text commands — powerful and precise but demanding memorisation, still used by administrators. A Graphical User Interface (GUI) uses windows, icons, menus and a pointer (the WIMP model), making systems intuitive for clinical staff with minimal training. Modern GUIs add touch, voice and gesture. Most clinical systems use a GUI so that nurses can focus on care rather than on remembering commands."
      },
      {
        "h": "Utility programs",
        "p": "Utilities are system software that maintain, optimise and protect the computer: antivirus and anti-malware software, firewalls, disk clean-up and defragmentation tools (for HDDs), backup and recovery software, file compression, disk partitioning, and encryption utilities. In health care, current antivirus protection, host firewalls, automated encrypted backups and full-disk encryption are basic safeguards for patient confidentiality and service continuity, and are usually mandated by institutional information-governance policy."
      },
      {
        "h": "Programming languages and their generations",
        "p": "Software is written in programming languages classified by how close they are to the hardware. First-generation machine language is raw binary the CPU executes directly. Second-generation assembly language uses mnemonic codes translated by an assembler. Third-generation high-level languages such as C, Java and Python are human-readable and portable. Fourth-generation languages (4GLs) such as SQL are closer to human problem statements and are used for database queries. This rising abstraction makes software easier and safer to write, at some cost in low-level control."
      },
      {
        "h": "Translation: compilers, interpreters and assemblers",
        "p": "Because the CPU understands only binary machine code, source code written in a high-level language must be translated. A compiler translates the entire program into machine code once, before execution, producing a fast, standalone executable (used for large clinical applications). An interpreter translates and runs the program line by line each time (flexible for scripting and testing). An assembler converts assembly language to machine code. Some languages (e.g. Java) compile to intermediate bytecode run by a virtual machine, giving portability across different hardware. This layered translation is why one application can be developed once and deployed on many machines.",
        "figure": {
          "caption": "A compiler translates the whole program at once; an interpreter translates and runs it line by line.",
          "svg": "<svg viewBox=\"0 0 520 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Compiler versus interpreter.\"><defs><marker id=\"ictArr3\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"20\" width=\"120\" height=\"36\" rx=\"7\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"43\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Source code</text><rect x=\"200\" y=\"20\" width=\"120\" height=\"36\" rx=\"7\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"43\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">COMPILER</text><rect x=\"385\" y=\"20\" width=\"120\" height=\"36\" rx=\"7\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"445\" y=\"43\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Executable (all)</text><line x1=\"135\" y1=\"38\" x2=\"196\" y2=\"38\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr3)\"/><line x1=\"320\" y1=\"38\" x2=\"381\" y2=\"38\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr3)\"/><rect x=\"15\" y=\"120\" width=\"120\" height=\"36\" rx=\"7\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"143\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Source code</text><rect x=\"200\" y=\"120\" width=\"120\" height=\"36\" rx=\"7\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"143\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">INTERPRETER</text><rect x=\"385\" y=\"120\" width=\"120\" height=\"36\" rx=\"7\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"445\" y=\"143\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Runs line by line</text><line x1=\"135\" y1=\"138\" x2=\"196\" y2=\"138\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr3)\"/><line x1=\"320\" y1=\"138\" x2=\"381\" y2=\"138\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr3)\"/></svg>"
        }
      },
      {
        "h": "The software development life cycle (overview)",
        "p": "Clinical software is built through a structured process, the software development life cycle (SDLC): requirements analysis (what must it do?), design (how will it work?), coding/implementation, testing and validation, deployment, and maintenance. In health care, rigorous testing and validation are essential because software defects can harm patients; nurses often contribute as end-users during requirements gathering and user-acceptance testing, ensuring systems match real clinical workflow."
      },
      {
        "h": "Software licensing and versions",
        "list": [
          "Proprietary/commercial software — licensed for a fee with usage restrictions (many EHR and office suites); source code is not disclosed.",
          "Open-source software — source code is freely available and modifiable under licences such as GPL (for example, Linux).",
          "Freeware and shareware — free to use, or free to trial before paying.",
          "Subscription/cloud (SaaS) — access to software over the internet for a recurring fee; the vendor maintains and updates it.",
          "Volume/site licences — cover many machines across an institution.",
          "Version control and patching — keeping software updated and applying security patches promptly is vital for safety and interoperability in clinical systems; unsupported (end-of-life) software is a governance risk."
        ]
      },
      {
        "h": "Clinical relevance — software governance for nurses",
        "p": "Nurses do not merely use clinical software; they are accountable for using it correctly and safely. This means logging in with their own credentials (never sharing passwords), keeping only authorised, licensed and updated applications on clinical machines, not installing unapproved software or connecting unauthorised devices, recognising when a system is behaving abnormally, and following the local downtime/business-continuity procedure when software fails. These behaviours protect both patient safety and the legal integrity of the record."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Classify software into its main categories and give clinical examples of each.",
      "Describe the boot process from power-on to login, distinguishing a cold from a warm boot.",
      "Describe the core functions of an operating system, emphasising process and memory management.",
      "Explain the types of operating systems, noting where a real-time OS is used in health care and why.",
      "Differentiate a compiler from an interpreter and explain why high-level source code must be translated."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A workstation shows only a blank screen with a beep code before the OS loads; hardware is being checked. This start-up self-check is the:",
        "options": [
          "Context switch",
          "Power-On Self-Test (POST)",
          "Defragmentation",
          "Compilation"
        ],
        "answer": 1,
        "rationale": "During booting the firmware runs POST to verify essential hardware before loading the OS."
      },
      {
        "type": "mcq",
        "q": "A nurse keeps the EHR, a drug-reference app and email open, switching instantly between them on one machine. This is possible because the OS provides:",
        "options": [
          "Encryption",
          "Multitasking via time-slicing and context switching",
          "Compilation",
          "Defragmentation"
        ],
        "answer": 1,
        "rationale": "Process management gives each program CPU time slices and switches rapidly between them, so many appear to run at once."
      },
      {
        "type": "mcq",
        "q": "Software that helps the user accomplish a specific real-world task, such as an EHR, is:",
        "options": [
          "Application software",
          "System software",
          "Firmware",
          "A device driver"
        ],
        "answer": 0,
        "rationale": "Application software addresses user tasks; system software runs the machine itself."
      },
      {
        "type": "mcq",
        "q": "An infusion pump must respond to inputs within a guaranteed, fixed time. It therefore uses a:",
        "options": [
          "Single-tasking OS",
          "Network OS",
          "Mobile OS",
          "Real-time OS"
        ],
        "answer": 3,
        "rationale": "A real-time OS guarantees responses within defined deadlines, which is critical for safety-critical medical devices."
      },
      {
        "type": "mcq",
        "q": "Which is a utility (system) program rather than application software?",
        "options": [
          "Word processor",
          "Spreadsheet",
          "Antivirus / disk backup tool",
          "Web browser"
        ],
        "answer": 2,
        "rationale": "Antivirus and backup tools are system utilities that maintain and protect the computer."
      },
      {
        "type": "mcq",
        "q": "A large hospital application is distributed as a fast, standalone executable produced once from its source code. The translator used was a(n):",
        "options": [
          "Compiler",
          "Interpreter",
          "Assembler only",
          "Bootloader"
        ],
        "answer": 0,
        "rationale": "A compiler translates the whole program before execution into an efficient executable; an interpreter works line by line at run time."
      },
      {
        "type": "mcq",
        "q": "Software whose source code is freely available for anyone to view and modify under a licence such as GPL is:",
        "options": [
          "Proprietary",
          "Shareware",
          "Open-source",
          "Firmware"
        ],
        "answer": 2,
        "rationale": "Open-source software publishes its source code for free use and modification."
      },
      {
        "type": "mcq",
        "q": "The OS function that protects one running program's memory from being corrupted by another is:",
        "options": [
          "File management",
          "Memory management",
          "Device management",
          "The user interface"
        ],
        "answer": 1,
        "rationale": "Memory management allocates, protects and reclaims RAM and handles virtual memory."
      },
      {
        "type": "mcq",
        "q": "SQL, used to query databases and closer to human problem statements, is an example of a:",
        "options": [
          "First-generation language",
          "Second-generation (assembly) language",
          "Fourth-generation language (4GL)",
          "Machine language"
        ],
        "answer": 2,
        "rationale": "SQL is a fourth-generation, problem-oriented language for database queries."
      },
      {
        "type": "mcq",
        "q": "During procurement of a new clinical system, nurses are most usefully involved in:",
        "options": [
          "Writing the compiler",
          "Requirements gathering and user-acceptance testing",
          "Manufacturing the CPU",
          "Setting the clock speed"
        ],
        "answer": 1,
        "rationale": "As end-users, nurses ensure the design and testing match real clinical workflow, improving safety and usability."
      },
      {
        "type": "fill",
        "q": "The two broad classes of software are system software and ____ software.",
        "accept": [
          "application"
        ],
        "rationale": "System software runs the machine; application software serves the user's tasks."
      },
      {
        "type": "fill",
        "q": "A ____ operating system guarantees responses within strict time limits and is used in infusion pumps, ventilators and monitors.",
        "accept": [
          "real-time",
          "real time",
          "rtos"
        ],
        "rationale": "Real-time operating systems guarantee timely responses for safety-critical devices."
      }
    ]
  },
  {
    "id": "ict-04-windows",
    "unit": "Unit 3 · Operating Systems & Software",
    "title": "Windows Operation & File Management",
    "readMinutes": 24,
    "summary": "Working with the Microsoft Windows graphical environment: desktop, taskbar and Start menu; window controls and multitasking; the file system, drives, folders, paths and extensions; file operations, searching, shortcuts and the Recycle Bin; useful keyboard shortcuts; Control Panel/Settings, Task Manager and maintenance; and safe file organisation, backup and security for clinical documents.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "The Windows GUI environment",
        "p": "Microsoft Windows is a widely used graphical operating system built on the WIMP model — Windows, Icons, Menus, Pointer. Instead of typing commands, the user manipulates on-screen objects with a pointer or touch, making the system intuitive for clinical staff. The desktop is the main working area holding icons and shortcuts; the taskbar (usually along the bottom) shows the Start button, pinned and running programs, the search box, and the notification/system tray with the clock and status icons; and the Start menu launches programs and provides access to settings, sign-out and shutdown."
      },
      {
        "h": "Icons, the pointer and common actions",
        "list": [
          "Single click — selects an item or activates a taskbar/link.",
          "Double click — opens a file, folder or program.",
          "Right click — opens a context menu of actions relevant to the item (open, rename, copy, delete, properties).",
          "Drag and drop — moves or copies items by holding and releasing.",
          "Icons represent files, folders, programs or shortcuts; a small arrow marks a shortcut."
        ]
      },
      {
        "h": "Working with windows",
        "p": "Each open program or folder appears in a rectangular window that can be moved, resized, and layered. The title bar carries the standard control buttons: Minimise (hide to the taskbar), Maximise/Restore (full screen or windowed), and Close. Because Windows is multitasking, several windows can be open at once; the user switches between them via the taskbar, Alt+Tab, or Task View, and can 'snap' windows side by side to compare information, such as a drug chart and a care plan. The active window is the one currently receiving keyboard input."
      },
      {
        "h": "The file system: drives, folders and files",
        "p": "Windows organises stored data as a hierarchical tree. Physical and logical storage is divided into drives labelled with letters (C: for the main system disk, D: and others for additional, removable and network drives). Within a drive, folders (directories) contain files and further sub-folders, forming a branching structure with a single root. This hierarchy is the mental model nurses need to store and retrieve documents reliably, and it mirrors how the operating system's file-management function organises data on disk.",
        "figure": {
          "caption": "Hierarchical file system: a drive contains folders, which contain sub-folders and files.",
          "svg": "<svg viewBox=\"0 0 520 220\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"File system tree from drive to folders to files.\"><rect x=\"200\" y=\"12\" width=\"120\" height=\"34\" rx=\"7\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"260\" y=\"34\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">C: Drive</text><rect x=\"70\" y=\"80\" width=\"130\" height=\"32\" rx=\"7\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"135\" y=\"101\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0F4C3A\">Ward-Records</text><rect x=\"320\" y=\"80\" width=\"130\" height=\"32\" rx=\"7\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"385\" y=\"101\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#0F4C3A\">Rosters</text><rect x=\"40\" y=\"150\" width=\"120\" height=\"30\" rx=\"6\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"1.5\"/><text x=\"100\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">careplan.docx</text><rect x=\"175\" y=\"150\" width=\"120\" height=\"30\" rx=\"6\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"1.5\"/><text x=\"235\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">vitals.xlsx</text><rect x=\"330\" y=\"150\" width=\"120\" height=\"30\" rx=\"6\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"1.5\"/><text x=\"390\" y=\"170\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#15803D\">july-duty.xlsx</text><line x1=\"260\" y1=\"46\" x2=\"135\" y2=\"78\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><line x1=\"260\" y1=\"46\" x2=\"385\" y2=\"78\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><line x1=\"135\" y1=\"112\" x2=\"100\" y2=\"148\" stroke=\"#15803D\" stroke-width=\"1.5\"/><line x1=\"135\" y1=\"112\" x2=\"235\" y2=\"148\" stroke=\"#15803D\" stroke-width=\"1.5\"/><line x1=\"385\" y1=\"112\" x2=\"390\" y2=\"148\" stroke=\"#15803D\" stroke-width=\"1.5\"/></svg>"
        }
      },
      {
        "h": "File paths: absolute and relative",
        "p": "A file's location is specified by its path, which lists the drive and the chain of folders leading to it, for example C:\\Ward-Records\\careplan.docx. An absolute path gives the full route from the drive root and is unambiguous; a relative path is stated relative to the current folder. Network resources use a UNC path of the form \\\\server\\share\\folder. Knowing paths lets a nurse tell a colleague exactly where a document lives and helps IT locate misfiled records."
      },
      {
        "h": "File names, extensions and file types",
        "p": "A file name has two parts separated by a dot: the name and the extension. The extension identifies the file type and the program that opens it — .docx (Word), .xlsx (Excel), .pptx (PowerPoint), .pdf (portable document), .jpg/.png (images), .txt (plain text), .mp4 (video) and .exe (executable program). Windows uses the extension to choose the default program. Meaningful, consistent naming (including dates in a fixed format) makes clinical files easy to find, sort and audit, and avoids accidental overwriting."
      },
      {
        "h": "File and folder operations",
        "list": [
          "Create — make a new folder or file to organise work.",
          "Rename — give a clear, descriptive, consistent name.",
          "Copy and paste — duplicate a file, leaving the original in place.",
          "Cut and paste (move) — relocate a file to another folder.",
          "Delete — send to the Recycle Bin (or permanently with Shift+Delete).",
          "Open and Save / Save As — retrieve and store, choosing location, name and format.",
          "Properties — view size, type, dates and set attributes (read-only, hidden).",
          "Select multiple — use Shift (a continuous range) or Ctrl (individual items) to act on several files at once."
        ]
      },
      {
        "h": "File Explorer, search and shortcuts",
        "p": "File Explorer (Windows Explorer) is the tool for browsing the folder tree, viewing file details (name, size, type, date modified) and performing operations; the navigation pane, address bar and view options control how items are shown. The search box locates files by name, type, content or date — invaluable when a document's exact location is forgotten. A shortcut is a small link icon that points to a file or program stored elsewhere, allowing quick access without duplicating the original; deleting a shortcut does not delete the original file."
      },
      {
        "h": "Useful keyboard shortcuts",
        "list": [
          "Ctrl+C copy, Ctrl+X cut, Ctrl+V paste — core clipboard actions.",
          "Ctrl+Z undo, Ctrl+Y redo — reverse or repeat the last action.",
          "Ctrl+S save, Ctrl+P print, Ctrl+A select all, Ctrl+F find.",
          "Alt+Tab switch windows; Win+L lock the workstation (vital when stepping away).",
          "Win+E open File Explorer; Ctrl+Shift+Esc open Task Manager.",
          "F2 rename; Delete to Recycle Bin; Shift+Delete permanent delete."
        ]
      },
      {
        "h": "The Recycle Bin and file recovery",
        "p": "Deleted files from the internal hard disk are first moved to the Recycle Bin, from which they can be restored if deleted by mistake, or permanently removed by emptying the bin. Files deleted from removable drives or network locations, or with Shift+Delete, usually bypass the Recycle Bin and are not easily recoverable. This is why deliberate deletion of clinical records must follow institutional records-retention policy, and any accidental loss should prompt an immediate check of the bin and of backups.",
        "figure": {
          "caption": "Deleting a file: hard-disk deletions go to the Recycle Bin and can be restored; Shift+Delete and network/removable deletions bypass it.",
          "svg": "<svg viewBox=\"0 0 540 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Recycle bin recovery pathway.\"><defs><marker id=\"ictArr4\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"60\" width=\"120\" height=\"46\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"88\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Delete file</text><rect x=\"200\" y=\"15\" width=\"130\" height=\"46\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"265\" y=\"37\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Recycle Bin</text><text x=\"265\" y=\"52\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">restorable</text><rect x=\"200\" y=\"105\" width=\"130\" height=\"46\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"265\" y=\"127\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Shift+Delete /</text><text x=\"265\" y=\"142\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">network — bypassed</text><rect x=\"395\" y=\"60\" width=\"130\" height=\"46\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"460\" y=\"88\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Restore or lost</text><line x1=\"135\" y1=\"75\" x2=\"196\" y2=\"45\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr4)\"/><line x1=\"135\" y1=\"92\" x2=\"196\" y2=\"122\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr4)\"/><line x1=\"330\" y1=\"38\" x2=\"392\" y2=\"70\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr4)\"/><line x1=\"330\" y1=\"128\" x2=\"392\" y2=\"96\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr4)\"/></svg>"
        }
      },
      {
        "h": "Control Panel, Settings and system maintenance",
        "p": "Windows is configured through Settings (and the older Control Panel): display and accessibility, network, printers and devices, user accounts, date/time, and Windows Update. Regular maintenance keeps a workstation reliable — installing security updates, running antivirus scans, clearing temporary files, and checking free disk space. Accessibility options (magnifier, high contrast, on-screen keyboard) support staff and patients with additional needs."
      },
      {
        "h": "Task Manager and handling a frozen program",
        "p": "When a program stops responding, Task Manager (Ctrl+Shift+Esc) shows running applications and background processes with their CPU, memory and disk use, and lets the user end an unresponsive task without restarting the whole machine. It also reveals whether the computer is short of memory or overloaded. Knowing this lets a nurse recover a frozen EHR session quickly and decide whether the issue is local or needs IT support — minimising disruption to care."
      },
      {
        "h": "Organisation, backup and security of clinical files",
        "list": [
          "Use a logical folder structure and consistent naming conventions (including dates).",
          "Save clinical files only to approved, secured locations (network/server), never to personal or public folders.",
          "Back up important files regularly to a separate drive or secure server; follow the institution's backup schedule.",
          "Protect confidential documents with passwords and encryption where required.",
          "Never store identifiable patient data on unencrypted personal USB drives or cloud accounts.",
          "Lock the workstation (Win+L) or log off whenever leaving it, even briefly.",
          "Follow records-retention and disposal policy; do not delete records that must be kept."
        ]
      },
      {
        "h": "Clinical relevance — the workstation as a shared clinical tool",
        "p": "Ward workstations are shared clinical equipment. Poor file discipline can lose an audit dataset, expose confidential data, or leave a colleague unable to find a document during handover. Good practice — clear folders, correct saving locations, prompt locking, disciplined deletion and awareness of where backups live — protects both patient confidentiality and the continuity and legal integrity of care records. These habits are as much a part of safe nursing as correct manual charting once was."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Describe the main elements of the Windows desktop, taskbar and Start menu.",
      "Explain the hierarchical file system using drives, folders, files and paths, with a diagram.",
      "What is a file extension? List common extensions and the programs that open them, and explain why consistent naming matters.",
      "Describe the Recycle Bin, explaining which deletions can and cannot be recovered.",
      "Discuss safe organisation, backup and security of clinical files on a shared workstation."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A nurse needs to see a drug chart and a care plan on screen together to compare them. The most efficient approach is to:",
        "options": [
          "Snap the two windows side by side",
          "Print both documents",
          "Close one and reopen it repeatedly",
          "Delete one file"
        ],
        "answer": 0,
        "rationale": "Windows multitasking allows snapping windows side by side so information can be compared without closing anything."
      },
      {
        "type": "mcq",
        "q": "The graphical interaction model on which Windows is based is abbreviated:",
        "options": [
          "IPOS",
          "WIMP",
          "DIKW",
          "GIGO"
        ],
        "answer": 1,
        "rationale": "WIMP stands for Windows, Icons, Menus, Pointer — the graphical interaction model."
      },
      {
        "type": "mcq",
        "q": "In the path C:\\Ward-Records\\careplan.docx, 'Ward-Records' is a:",
        "options": [
          "Drive",
          "File extension",
          "Folder",
          "Shortcut"
        ],
        "answer": 2,
        "rationale": "It is a folder within the C: drive that contains the file careplan.docx."
      },
      {
        "type": "mcq",
        "q": "A colleague empties the Recycle Bin, then realises a needed report was in it. The report can most reliably be recovered from:",
        "options": [
          "The clipboard",
          "The address bar",
          "The taskbar",
          "A backup copy"
        ],
        "answer": 3,
        "rationale": "Once the bin is emptied the file is gone from there; a backup is the reliable recovery source, underlining why backups matter."
      },
      {
        "type": "mcq",
        "q": "To duplicate a file while leaving the original untouched, the nurse should use:",
        "options": [
          "Copy and paste",
          "Delete",
          "Rename",
          "Cut and paste"
        ],
        "answer": 0,
        "rationale": "Copy and paste creates a duplicate; cut and paste moves the original."
      },
      {
        "type": "mcq",
        "q": "Deleting a shortcut icon from the desktop will:",
        "options": [
          "Delete the original file",
          "Leave the original file untouched",
          "Empty the Recycle Bin",
          "Format the drive"
        ],
        "answer": 1,
        "rationale": "A shortcut only points to a file; removing it does not remove the original."
      },
      {
        "type": "mcq",
        "q": "A nurse must step away from a shared workstation for two minutes. The correct action to protect patient data is to press:",
        "options": [
          "Alt+F4 to close everything",
          "Ctrl+P to print",
          "Win+L to lock the workstation",
          "F2 to rename"
        ],
        "answer": 2,
        "rationale": "Win+L locks the session instantly, preventing unauthorised access while keeping work open."
      },
      {
        "type": "mcq",
        "q": "To select several non-adjacent files at once, the nurse holds down:",
        "options": [
          "Alt",
          "Esc",
          "Tab",
          "Ctrl"
        ],
        "answer": 3,
        "rationale": "Ctrl-click selects individual items; Shift selects a continuous range."
      },
      {
        "type": "mcq",
        "q": "An EHR window has frozen and will not respond. The safest first step to recover it without rebooting is to:",
        "options": [
          "Use Task Manager to end the unresponsive task",
          "Pull the power cable",
          "Delete the EHR program",
          "Format the C: drive"
        ],
        "answer": 0,
        "rationale": "Task Manager can end a single frozen application, recovering the session without restarting the whole machine or losing other work."
      },
      {
        "type": "mcq",
        "q": "The safest practice for confidential patient files is to:",
        "options": [
          "Save copies to a personal USB drive for convenience",
          "Store them only in approved secured locations and never insecurely",
          "Disable the workstation password",
          "Leave the session open between users"
        ],
        "answer": 1,
        "rationale": "Clinical files must be kept only in approved, secured locations to protect confidentiality and continuity."
      },
      {
        "type": "fill",
        "q": "The complete address of a file, including drive and folders (e.g. C:\\Ward-Records\\careplan.docx), is called its ____.",
        "accept": [
          "path",
          "file path"
        ],
        "rationale": "The path specifies the drive and folder chain leading to a file."
      },
      {
        "type": "fill",
        "q": "The keyboard shortcut Win+____ instantly locks the workstation when a nurse steps away.",
        "accept": [
          "l"
        ],
        "rationale": "Win+L locks the session, protecting patient data without closing open work."
      }
    ]
  },
  {
    "id": "ict-05-msword",
    "unit": "Unit 4 · Office Applications for Nursing",
    "title": "MS Word — Word Processing for Nursing Documentation",
    "readMinutes": 24,
    "summary": "Using Microsoft Word to create professional nursing documents: the interface and ribbon; creating, saving and editing; character, paragraph and page formatting; styles and the table of contents; tables, lists, headers/footers and page numbers; proofing and review/collaboration tools; mail merge; referencing and citations; templates; file formats; and print/PDF output for care plans, reports and academic assignments.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is word processing?",
        "p": "Word processing is the creation, editing, formatting, storage and printing of text documents using a computer. Microsoft Word is the most widely used word processor. Unlike a typewriter, a word processor lets the user revise text freely before printing (WYSIWYG — what you see is what you get), reuse and share documents electronically, automate repetitive tasks, and produce a polished, professional and consistent appearance — essential for nursing care plans, incident reports, referral letters, policies and academic work."
      },
      {
        "h": "The Word interface and ribbon",
        "p": "Word presents commands on the ribbon, a set of tabs (File/Backstage, Home, Insert, Layout, References, Mailings, Review, View) each grouping related tools into named groups. The Quick Access Toolbar holds frequently used commands such as Save and Undo; the status bar shows page number, word count and zoom; rulers show margins and indents; and the document area is where text is entered and a cursor marks the insertion point. Understanding this task-oriented layout lets the nurse find the right tool quickly."
      },
      {
        "h": "Creating, saving and the importance of Save As",
        "list": [
          "Create a new blank document or start from a template.",
          "Save (Ctrl+S) stores changes to the existing file; save early and often to avoid data loss.",
          "Save As stores a new copy, letting you choose name, folder and file format — use it to keep versions or export to PDF.",
          "AutoRecover/AutoSave periodically preserve work, but are a safety net, not a substitute for saving.",
          "Choose the correct location — approved secure folders for clinical documents.",
          "Descriptive file names with dates aid retrieval and version control."
        ]
      },
      {
        "h": "Editing text efficiently",
        "list": [
          "Insert, delete, and use Cut (Ctrl+X), Copy (Ctrl+C) and Paste (Ctrl+V) to rearrange content.",
          "Undo (Ctrl+Z) and Redo (Ctrl+Y) reverse or repeat recent actions.",
          "Find and Replace (Ctrl+H) locates text and substitutes it throughout — useful for correcting a repeated term.",
          "Select text with the mouse, or Shift plus arrow keys, or Ctrl+A for the whole document, before formatting.",
          "Navigation pane and Go To move quickly through long documents.",
          "Paste Special controls whether formatting is kept when pasting from another source."
        ]
      },
      {
        "h": "Character (font) formatting",
        "p": "Character formatting changes the appearance of individual letters and words: font face (e.g. Calibri, Times New Roman), size in points, bold, italic and underline, colour, highlight, superscript/subscript (for units and references), strikethrough, and change of case. A clear, professional font at 11-12 points with adequate spacing keeps clinical documents legible; overuse of colours and effects reduces readability and looks unprofessional."
      },
      {
        "h": "Paragraph and page formatting",
        "list": [
          "Alignment — left, right, centre or justified.",
          "Line and paragraph spacing — single, 1.5 or double spacing (double is often required for assignments); space before/after paragraphs.",
          "Indentation and tabs — first-line, hanging and body indents to structure content.",
          "Bulleted and numbered lists — to present steps of a nursing procedure clearly and in order.",
          "Margins, orientation (portrait/landscape) and page size (A4) — set on the Layout tab.",
          "Page and section breaks — to start content on a new page or change layout part-way through.",
          "Columns — for newsletters or leaflets."
        ]
      },
      {
        "h": "Styles and the table of contents",
        "p": "A style is a named, reusable set of formatting (font, size, spacing) applied in one click — for example Heading 1, Heading 2 and Normal. Using heading styles consistently gives a uniform, professional look, allows the whole document's appearance to be changed at once, and — crucially — lets Word generate an automatic, updatable Table of Contents from those headings. For long reports, dissertations and policies, styles save enormous time and reduce formatting errors."
      },
      {
        "h": "Tables, headers, footers and page numbers",
        "p": "Tables organise data in rows and columns — ideal for observation charts, medication schedules or comparison grids; cells can be merged, split, shaded and bordered, and data can be sorted. Headers and footers place repeating information (document title, ward, author, date) at the top or bottom of every page, and automatic page numbering keeps multi-page reports in order and supports referencing. These features give reports a structured, official appearance and support version control.",
        "figure": {
          "caption": "The Word ribbon groups related commands under tabs such as Home, Insert and Review.",
          "svg": "<svg viewBox=\"0 0 540 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Word ribbon tabs and command groups.\"><rect x=\"10\" y=\"12\" width=\"520\" height=\"26\" rx=\"5\" fill=\"#0F4C3A\"/><text x=\"45\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#DCFCE7\" font-weight=\"700\">Home</text><text x=\"105\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#F0FDF4\">Insert</text><text x=\"165\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#F0FDF4\">Layout</text><text x=\"235\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#F0FDF4\">References</text><text x=\"310\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#F0FDF4\">Review</text><text x=\"365\" y=\"30\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#F0FDF4\">View</text><rect x=\"10\" y=\"44\" width=\"520\" height=\"90\" rx=\"6\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"1.5\"/><rect x=\"25\" y=\"58\" width=\"120\" height=\"62\" rx=\"5\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"1\"/><text x=\"85\" y=\"93\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Font group</text><rect x=\"160\" y=\"58\" width=\"140\" height=\"62\" rx=\"5\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"1\"/><text x=\"230\" y=\"93\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Paragraph group</text><rect x=\"315\" y=\"58\" width=\"120\" height=\"62\" rx=\"5\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"1\"/><text x=\"375\" y=\"93\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Styles group</text></svg>"
        }
      },
      {
        "h": "Proofing and review tools",
        "p": "Word's Review tab supports quality and collaboration: the spelling and grammar checker flags likely errors (though the nurse must still verify clinical terms and drug names that the dictionary may not know); Word Count monitors assignment limits; the Thesaurus suggests alternatives; and Read Aloud can help proofreading. Careful human proofreading remains essential because automated tools do not catch every contextual, factual or clinical error — a spell-checker will not notice a wrong dose or a confused drug name that is itself a valid word."
      },
      {
        "h": "Collaboration: Track Changes and Comments",
        "p": "For documents reviewed by others, Track Changes records every insertion, deletion and formatting change with the author's name and date, so a supervisor or co-author can see exactly what was altered and then Accept or Reject each change. Comments attach feedback to specific text without changing it. These tools are invaluable for supervised care plans, policy drafts and academic assignments, providing an auditable trail of who changed what and when.",
        "figure": {
          "caption": "Track Changes records each edit for review, then changes are accepted or rejected.",
          "svg": "<svg viewBox=\"0 0 520 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Track changes workflow.\"><defs><marker id=\"ictArr5\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"52\" width=\"130\" height=\"46\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"80\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Author edits</text><rect x=\"195\" y=\"52\" width=\"130\" height=\"46\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"74\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Changes tracked</text><text x=\"260\" y=\"89\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">who/what/when</text><rect x=\"375\" y=\"52\" width=\"130\" height=\"46\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"440\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Accept / Reject</text><line x1=\"145\" y1=\"75\" x2=\"191\" y2=\"75\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr5)\"/><line x1=\"325\" y1=\"75\" x2=\"371\" y2=\"75\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr5)\"/></svg>"
        }
      },
      {
        "h": "Mail merge",
        "p": "Mail merge combines a standard main document (a template letter or label) with a data source (a list of names, addresses and other fields) to produce many personalised copies at once. In nursing it generates appointment reminders, recall letters for immunisation or screening, and patient-education mailings efficiently and consistently. The steps are: prepare the data source, write the main document with merge fields, preview the merge, and complete it to print or email — saving hours of repetitive typing while reducing error."
      },
      {
        "h": "Referencing and citations",
        "p": "The References tab supports academic and evidence-based writing: it inserts in-text citations, manages a list of sources, generates a bibliography or reference list, and applies a chosen style (such as APA) automatically. It also builds a Table of Contents and can insert footnotes/endnotes. Accurate, consistent referencing is a professional and academic requirement that gives credit, supports claims with evidence, and avoids plagiarism; the built-in tools reduce citation errors but the nurse must still check them against the source."
      },
      {
        "h": "Templates, objects and file formats",
        "list": [
          "Templates — pre-designed documents (care plans, referral forms, letterheads) that ensure consistency and save time; institutions often supply standard templates.",
          "Insert objects — pictures, shapes, SmartArt, symbols, equations and page numbers to enrich documents (respecting copyright and patient consent for images).",
          "File formats — .docx is the default editable Word format; .pdf preserves layout for sharing and printing and cannot be easily altered; .txt/.rtf are simpler exchange formats.",
          "Printing and PDF output — Print Preview and print settings (pages, copies, duplex) before producing hard copy; 'Save/Print to PDF' for a fixed final document."
        ]
      },
      {
        "h": "Clinical relevance — accuracy, confidentiality and integrity",
        "p": "Word-processed clinical documents are professional and often legal records. The nurse must ensure factual accuracy (a neat document can still be dangerously wrong), verify clinical terms and doses that the spell-checker cannot judge, protect confidentiality by storing and sharing files securely and removing identifiers where appropriate, keep an auditable version history for supervised work, and follow institutional templates and policy. Good word-processing skills raise the quality, consistency and defensibility of nursing documentation."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Define word processing and list its advantages over a typewriter for nursing documentation.",
      "Describe the Word ribbon and the purpose of its main tabs, and explain the value of styles and an automatic table of contents.",
      "Differentiate character formatting from paragraph formatting with clinical examples.",
      "Explain Track Changes and Comments and their value in supervised or collaborative documents.",
      "What is mail merge? Describe the steps and a nursing situation in which it is useful."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A nursing student must submit a 3,000-word assignment with headings, an automatic contents page and APA references. The most efficient approach is to:",
        "options": [
          "Format each heading manually and type the contents by hand",
          "Apply heading styles, then generate the table of contents and use the References tools",
          "Use only bold text for headings",
          "Paste everything as plain text"
        ],
        "answer": 1,
        "rationale": "Heading styles let Word build and update the table of contents automatically, and the References tab manages APA citations — far faster and less error-prone than manual formatting."
      },
      {
        "type": "mcq",
        "q": "In Microsoft Word, related commands are grouped under tabs on the:",
        "options": [
          "Taskbar",
          "Ribbon",
          "Status bar",
          "Recycle Bin"
        ],
        "answer": 1,
        "rationale": "The ribbon organises commands into tabs such as Home, Insert and Review."
      },
      {
        "type": "mcq",
        "q": "Changing a word to bold and increasing its point size is an example of:",
        "options": [
          "Paragraph formatting",
          "Character (font) formatting",
          "Page layout",
          "Mail merge"
        ],
        "answer": 1,
        "rationale": "Font/character formatting affects the appearance of individual letters and words."
      },
      {
        "type": "mcq",
        "q": "Setting double line spacing and centring a heading are examples of:",
        "options": [
          "Character formatting",
          "Paragraph formatting",
          "Proofing",
          "Templates"
        ],
        "answer": 1,
        "rationale": "Alignment and line spacing act on whole paragraphs."
      },
      {
        "type": "mcq",
        "q": "A ward name was mistyped throughout a 20-page policy. The quickest correct fix is:",
        "options": [
          "Retype the document",
          "Find and Replace",
          "Track Changes",
          "Insert a page break"
        ],
        "answer": 1,
        "rationale": "Find and Replace substitutes the term everywhere at once, quickly and consistently."
      },
      {
        "type": "mcq",
        "q": "A supervisor wants to see exactly which sentences a student changed in a care plan and approve each one. The student should enable:",
        "options": [
          "Track Changes",
          "Find and Replace",
          "Word Count",
          "Save As"
        ],
        "answer": 0,
        "rationale": "Track Changes records each insertion and deletion with author and date, so the reviewer can accept or reject each change."
      },
      {
        "type": "mcq",
        "q": "A clinic must send 300 personalised immunisation-recall letters from one template and a patient list. The correct feature is:",
        "options": [
          "Mail merge",
          "Page break",
          "Bullet list",
          "Header"
        ],
        "answer": 0,
        "rationale": "Mail merge combines a main document with a data source to generate many personalised letters at once."
      },
      {
        "type": "mcq",
        "q": "To share a finalised discharge summary so its layout cannot be easily altered, the nurse should save or print it as a:",
        "options": [
          "PDF",
          "Blank template",
          "Bullet list",
          "Header"
        ],
        "answer": 0,
        "rationale": "PDF preserves the fixed layout and prevents easy editing, making it ideal for final shared documents."
      },
      {
        "type": "mcq",
        "q": "A spell-checker will NOT reliably catch which of the following in a clinical note?",
        "options": [
          "A misspelled common English word",
          "A wrong drug dose that is a valid number",
          "A missing capital letter",
          "A repeated word"
        ],
        "answer": 1,
        "rationale": "Automated proofing cannot judge clinical correctness; a wrong but validly formatted dose passes unflagged, so human verification is essential."
      },
      {
        "type": "mcq",
        "q": "Repeating the ward name and date at the bottom of every page of a report is achieved with a:",
        "options": [
          "Table",
          "Footer",
          "Bullet list",
          "Comment"
        ],
        "answer": 1,
        "rationale": "Footers place repeating content at the bottom of each page; headers do so at the top."
      },
      {
        "type": "fill",
        "q": "The feature that combines a standard letter with a list of recipients to create personalised copies is ____.",
        "accept": [
          "mail merge"
        ],
        "rationale": "Mail merge merges a main document with a data source to generate personalised documents."
      },
      {
        "type": "fill",
        "q": "A named, reusable set of formatting such as Heading 1 that also enables an automatic table of contents is called a ____.",
        "accept": [
          "style"
        ],
        "rationale": "Styles apply consistent formatting and let Word build and update a table of contents from headings."
      }
    ]
  },
  {
    "id": "ict-06-msexcel",
    "unit": "Unit 4 · Office Applications for Nursing",
    "title": "MS Excel — Spreadsheets for Nursing Data",
    "readMinutes": 26,
    "summary": "Using Microsoft Excel to record, calculate and analyse nursing data: workbooks, worksheets, cells and references; data entry and validation; formulas, operators and order of operations; essential functions (SUM, AVERAGE, MAX, MIN, COUNT, COUNTIF, IF); relative, absolute and mixed references; sorting, filtering, conditional formatting and charts; descriptive statistics; PivotTables; and error handling for clinical audit and research.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is a spreadsheet?",
        "p": "A spreadsheet is an electronic worksheet made of a grid of cells arranged in rows and columns, used to store, calculate, analyse and present numerical and text data. Microsoft Excel is the leading spreadsheet program. Its defining power is automatic recalculation: when a value changes, every formula that depends on it updates instantly — ideal for maintaining vital-sign logs, drug-stock counts, duty rosters, budgets, quality indicators and audit datasets, and for exploring 'what-if' scenarios."
      },
      {
        "h": "Workbooks, worksheets and cells",
        "p": "An Excel file is a workbook, which contains one or more worksheets (tabbed sheets). Each worksheet is a grid: columns are labelled with letters (A, B, C ... Z, AA ...) and rows with numbers (1, 2, 3 ...). The intersection of a column and a row is a cell, identified by its cell reference or address (for example B4). A rectangular block of cells is a range, written as B4:B20. The active cell is the currently selected one where entry occurs; the Name Box shows its address and can name ranges for clarity."
      },
      {
        "h": "Entering and validating data",
        "list": [
          "Cells can hold three kinds of entry: labels (text), values (numbers/dates/times) and formulas.",
          "Number formats — general, number, currency, percentage, date/time, scientific — control how values display without changing the stored value.",
          "Adjust column width and row height so data is fully visible (a column of ##### means it is too narrow).",
          "Alignment, borders, shading, wrap-text and cell merging improve readability.",
          "Use headings and Freeze Panes to keep column titles visible while scrolling long patient lists.",
          "Data Validation restricts entries (e.g. a temperature between 30 and 45, or a drop-down list of wards), reducing entry errors at source.",
          "AutoFill and Flash Fill quickly extend series such as dates or sequential IDs."
        ]
      },
      {
        "h": "Formulas, operators and order of operations",
        "p": "A formula is an expression that calculates a result and always begins with an equals sign (=). Formulas use cell references rather than fixed numbers so results update automatically. The arithmetic operators are + (add), - (subtract), * (multiply), / (divide) and ^ (power); comparison operators (=, <, >, <=, >=, <>) return TRUE/FALSE. Excel follows the standard order of operations — brackets first, then powers, then multiply/divide, then add/subtract (BODMAS). For example, =A2+B2 adds two cells, =(A2+B2+C2)/3 averages three, and =weight/(height^2) computes a body mass index."
      },
      {
        "h": "Essential functions",
        "p": "A function is a built-in, pre-written formula. Common ones for nursing data include:",
        "list": [
          "SUM — adds a range, e.g. =SUM(B2:B31) totals a month of admissions.",
          "AVERAGE — the arithmetic mean, e.g. =AVERAGE(C2:C31) for mean daily temperature.",
          "MAX and MIN — the highest and lowest values in a range.",
          "COUNT (numbers only) and COUNTA (any non-empty cell).",
          "COUNTIF — counts cells meeting a condition, e.g. =COUNTIF(D2:D31,\">37.5\") counts febrile readings.",
          "IF — returns one result if a condition is true and another if false, e.g. =IF(D2>37.5,\"Fever\",\"Normal\").",
          "ROUND — controls decimal places for tidy reporting.",
          "MEDIAN, MODE, STDEV — for descriptive statistics."
        ],
        "figure": {
          "caption": "An Excel formula uses cell references and functions; changing a value recalculates the result automatically.",
          "svg": "<svg viewBox=\"0 0 520 180\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Excel grid with a SUM formula.\"><rect x=\"20\" y=\"20\" width=\"70\" height=\"26\" fill=\"#0F4C3A\"/><text x=\"55\" y=\"38\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#DCFCE7\" font-weight=\"700\">A</text><rect x=\"90\" y=\"20\" width=\"90\" height=\"26\" fill=\"#0F4C3A\"/><text x=\"135\" y=\"38\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#DCFCE7\" font-weight=\"700\">B (Admissions)</text><rect x=\"20\" y=\"46\" width=\"70\" height=\"24\" fill=\"#F0FDF4\" stroke=\"#15803D\"/><text x=\"55\" y=\"63\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Mon</text><rect x=\"90\" y=\"46\" width=\"90\" height=\"24\" fill=\"#F0FDF4\" stroke=\"#15803D\"/><text x=\"135\" y=\"63\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">8</text><rect x=\"20\" y=\"70\" width=\"70\" height=\"24\" fill=\"#F0FDF4\" stroke=\"#15803D\"/><text x=\"55\" y=\"87\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Tue</text><rect x=\"90\" y=\"70\" width=\"90\" height=\"24\" fill=\"#F0FDF4\" stroke=\"#15803D\"/><text x=\"135\" y=\"87\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">6</text><rect x=\"20\" y=\"94\" width=\"70\" height=\"24\" fill=\"#DCFCE7\" stroke=\"#15803D\"/><text x=\"55\" y=\"111\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Total</text><rect x=\"90\" y=\"94\" width=\"90\" height=\"24\" fill=\"#22C55E\" stroke=\"#0F4C3A\"/><text x=\"135\" y=\"111\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">14</text><rect x=\"210\" y=\"60\" width=\"290\" height=\"40\" rx=\"6\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"1.5\"/><text x=\"355\" y=\"85\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"13\" fill=\"#0F4C3A\" font-weight=\"700\">=SUM(B2:B3)  &#8594;  14</text></svg>"
        }
      },
      {
        "h": "Relative, absolute and mixed references",
        "p": "When a formula is copied to other cells, a relative reference (like B2) automatically adjusts to the new position — ideal for repeating a calculation down a column of patients. An absolute reference, marked with dollar signs (like $B$2), stays fixed when copied — used when every row must refer to one constant, such as a single unit price, a target value or a conversion factor. Mixed references (B$2 or $B2) lock only the row or only the column. Choosing the correct reference type is the single most common cause of, and cure for, copy-formula errors in audit sheets.",
        "figure": {
          "caption": "Reference types: relative (B2) shifts when copied; absolute ($B$2) is fixed; mixed locks one dimension.",
          "svg": "<svg viewBox=\"0 0 520 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Relative absolute mixed cell references.\"><rect x=\"20\" y=\"40\" width=\"150\" height=\"70\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"95\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">B2</text><text x=\"95\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">relative — shifts</text><rect x=\"185\" y=\"40\" width=\"150\" height=\"70\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">$B$2</text><text x=\"260\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">absolute — fixed</text><rect x=\"350\" y=\"40\" width=\"150\" height=\"70\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"425\" y=\"66\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">B$2 / $B2</text><text x=\"425\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">mixed — one locked</text></svg>"
        }
      },
      {
        "h": "Sorting, filtering and conditional formatting",
        "list": [
          "Sort — arrange rows in ascending or descending order (for example, patients by age, ward or admission date); multi-level sorts order by several keys.",
          "Filter — display only rows meeting a criterion (for example, only readmissions), temporarily hiding the rest without deleting anything.",
          "Conditional formatting — automatically colour cells that meet a rule, such as highlighting temperatures above 38 in red or overdue reviews, making outliers visible at a glance.",
          "Remove Duplicates — cleans a dataset before analysis."
        ]
      },
      {
        "h": "Charts and data visualisation",
        "p": "Charts turn numbers into visuals that a clinical team can grasp quickly. Column/bar charts compare categories (admissions by ward); line charts show trends over time (daily temperatures); pie charts show proportions of a whole (case mix); and scatter plots show the relationship between two variables. Good practice is to choose the chart type that matches the message, label axes and units clearly, avoid misleading truncated scales, and keep the design uncluttered. Charts created in Excel can be pasted into Word reports and PowerPoint presentations."
      },
      {
        "h": "Descriptive statistics for clinical audit",
        "p": "Excel supports the descriptive statistics used in nursing audit and research. Measures of central tendency summarise the typical value — mean (AVERAGE), median (MEDIAN, the middle value, robust to outliers) and mode (MODE, the most frequent). Measures of spread describe variability — range (MAX minus MIN), variance and standard deviation (STDEV). Percentages, counts and frequency tables present audit findings, and the median is often preferred over the mean for skewed data such as length of stay. Nurses must interpret results in context and guard confidentiality when handling patient datasets."
      },
      {
        "h": "PivotTables for summarising large datasets",
        "p": "A PivotTable is a powerful tool that summarises a large table into a compact, interactive report — counting, summing or averaging values grouped by category with a few clicks, and letting the user 'pivot' the layout to view the data different ways. For example, from a list of thousands of admissions a PivotTable can instantly show mean length of stay by ward and month. PivotTables turn raw EHR exports into audit-ready summaries without writing complex formulas, and are a core skill for nurses undertaking service evaluation."
      },
      {
        "h": "Errors, accuracy and data integrity",
        "list": [
          "Common error values: #DIV/0! (dividing by zero or an empty cell), #REF! (a deleted referenced cell), #VALUE! (wrong data type), #NAME? (mistyped function name).",
          "Always check that ranges include all intended rows — a missed row silently biases a total or mean.",
          "Beware automatic date/number reformatting that can corrupt IDs or codes.",
          "Keep a raw data copy; analyse on a duplicate so originals are preserved.",
          "Use Data Validation and double-entry to prevent errors at source.",
          "Document formulas and variable definitions so results are reproducible and auditable."
        ]
      },
      {
        "h": "Clinical relevance — spreadsheets in audit, rostering and research",
        "p": "Excel is the workhorse of ward-level data work: tracking stock and expiry dates, building duty rosters, monitoring quality indicators (falls, pressure injuries, hand-hygiene compliance), and analysing small audit or research datasets. Its strengths are speed, flexibility and transparency; its risks are silent formula and reference errors, and confidentiality breaches if patient data is stored insecurely. A nurse who uses references correctly, validates data, checks for error values and protects the file produces trustworthy, defensible clinical data."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Define a spreadsheet and explain the terms workbook, worksheet, cell, range and active cell.",
      "Explain how formulas use operators and the order of operations, with clinical examples such as BMI.",
      "Describe the functions SUM, AVERAGE, MAX, MIN, COUNT, COUNTIF and IF with nursing examples.",
      "Differentiate relative, absolute and mixed cell references and explain when each is used.",
      "How can Excel support clinical audit through sorting, filtering, charts, PivotTables and descriptive statistics?"
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A formula =B2*$C$1 is copied down a column to compute each patient's fee from a single rate in C1. When copied to row 5 it becomes:",
        "options": [
          "=B5*$C$4",
          "=B5*$C$1",
          "=B2*$C$1",
          "=B5*C1"
        ],
        "answer": 1,
        "rationale": "The relative B2 shifts to B5, but the absolute $C$1 stays fixed on the single rate cell — the correct behaviour for a shared constant."
      },
      {
        "type": "mcq",
        "q": "Every Excel formula must begin with the symbol:",
        "options": [
          "=",
          "+",
          "@",
          "#"
        ],
        "answer": 0,
        "rationale": "A formula always starts with an equals sign, signalling Excel to calculate."
      },
      {
        "type": "mcq",
        "q": "To count how many of a month's temperature readings exceeded 37.5, the nurse should use:",
        "options": [
          "=SUM(D2:D31)",
          "=AVERAGE(D2:D31)",
          "=COUNTIF(D2:D31,\">37.5\")",
          "=MAX(D2:D31)"
        ],
        "answer": 2,
        "rationale": "COUNTIF counts only the cells meeting the stated condition — here, febrile readings above 37.5."
      },
      {
        "type": "mcq",
        "q": "The reference $B$2 is a(n):",
        "options": [
          "Relative reference",
          "Absolute reference",
          "Range name",
          "Mixed reference"
        ],
        "answer": 1,
        "rationale": "Dollar signs on both the column and row make it absolute, so it does not change when copied."
      },
      {
        "type": "mcq",
        "q": "For a highly skewed variable such as length of stay, the most representative measure of the typical value is usually the:",
        "options": [
          "Mean",
          "Median",
          "Maximum",
          "Range"
        ],
        "answer": 1,
        "rationale": "The median is robust to extreme values and better represents the typical case in skewed data than the mean."
      },
      {
        "type": "mcq",
        "q": "A nurse needs mean length of stay grouped by ward and month from a 5,000-row admissions export, with no complex formulas. The best tool is a:",
        "options": [
          "Pie chart",
          "PivotTable",
          "Single AVERAGE formula",
          "Header"
        ],
        "answer": 1,
        "rationale": "A PivotTable interactively summarises large datasets by category, ideal for audit-ready groupings."
      },
      {
        "type": "mcq",
        "q": "A cell shows #DIV/0!. The most likely cause is that the formula:",
        "options": [
          "Contains text",
          "Divides by zero or an empty cell",
          "Has a mixed reference",
          "Is too long"
        ],
        "answer": 1,
        "rationale": "#DIV/0! appears when a formula divides by zero or by a blank cell treated as zero."
      },
      {
        "type": "mcq",
        "q": "The best chart to display a patient's temperature trend across a week is a:",
        "options": [
          "Pie chart",
          "Line chart",
          "Single-value column",
          "Doughnut chart"
        ],
        "answer": 1,
        "rationale": "Line charts display changes and trends over time effectively."
      },
      {
        "type": "mcq",
        "q": "=IF(D2>37.5,\"Fever\",\"Normal\") will display 'Fever' when:",
        "options": [
          "D2 is blank",
          "D2 equals exactly 37.5",
          "D2 is greater than 37.5",
          "D2 contains text"
        ],
        "answer": 2,
        "rationale": "The condition D2>37.5 is true only when the value strictly exceeds 37.5, returning 'Fever'."
      },
      {
        "type": "mcq",
        "q": "To prevent staff from entering an impossible temperature such as 450, a nurse designing the sheet should apply:",
        "options": [
          "A pie chart",
          "Data Validation limiting the acceptable range",
          "Bold formatting",
          "A page break"
        ],
        "answer": 1,
        "rationale": "Data Validation restricts entries to a sensible range, catching errors at the point of entry."
      },
      {
        "type": "fill",
        "q": "A reference that stays fixed when a formula is copied, written with dollar signs, is a(n) ____ reference.",
        "accept": [
          "absolute"
        ],
        "rationale": "Absolute references such as $B$2 do not adjust when copied."
      },
      {
        "type": "fill",
        "q": "The interactive tool that summarises a large table by category (e.g. mean stay by ward) is a ____.",
        "accept": [
          "pivottable",
          "pivot table"
        ],
        "rationale": "PivotTables summarise and reorganise large datasets without complex formulas."
      }
    ]
  },
  {
    "id": "ict-07-powerpoint",
    "unit": "Unit 4 · Office Applications for Nursing",
    "title": "MS PowerPoint — Presentations for Nursing Education",
    "readMinutes": 23,
    "summary": "Using Microsoft PowerPoint to design and deliver effective presentations: slides, layouts and themes; adding and formatting text, images, tables and charts; the slide master and design consistency; transitions and animations; hyperlinks and multimedia; views, speaker notes and rehearse timing; delivering the slide show; accessibility; and evidence-based principles of clear presentation for patient and staff education.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is presentation software?",
        "p": "Presentation software creates a sequence of electronic slides to support a spoken talk. Microsoft PowerPoint is the most widely used. Slides combine text, images, tables, charts, audio and video, projected or shared to an audience. In nursing it is used for health-education sessions, in-service training, case presentations, seminars, journal clubs and conference talks, where clear visuals reinforce — but do not replace — the spoken message and the presenter's expertise."
      },
      {
        "h": "Slides, layouts and themes",
        "p": "A presentation (deck) is a file of slides, each built from placeholders arranged by a layout (for example Title Slide, Title and Content, Two Content, Comparison, Blank). A theme applies a coordinated set of colours, fonts and background across all slides, giving a consistent, professional look with minimal effort; variants adjust the colour scheme. Choosing a legible sans-serif font and a high-contrast colour scheme (dark text on light, or light on dark) is essential so slides remain readable at the back of a room and for viewers with low vision."
      },
      {
        "h": "Adding and formatting content",
        "list": [
          "Text — entered in placeholders and formatted like Word (font, size, bold, colour, bullets); keep it brief.",
          "Images and clip art — illustrate concepts; use relevant, good-quality pictures and respect copyright and patient consent.",
          "Tables and charts — present data clearly; charts can be created in or pasted/linked from Excel.",
          "SmartArt, shapes and diagrams — depict processes, cycles and hierarchies such as a care pathway.",
          "Audio and video — embed clips for demonstration, used sparingly and tested beforehand.",
          "Header/footer, slide numbers and date — add reference information to each slide."
        ]
      },
      {
        "h": "The slide master and consistency",
        "p": "The Slide Master is a top-level slide that controls the formatting of all slides based on it, together with a set of layout masters beneath it. Editing the master — for example placing an institutional logo, setting the title font and colour, or fixing the background — changes every slide at once, ensuring consistency and saving time. This professional feature is important for branded teaching materials, standardised departmental templates, and quick global changes that would otherwise be tedious and error-prone slide by slide."
      },
      {
        "h": "Transitions and animations",
        "list": [
          "Transitions — visual effects between one slide and the next (for example Fade or Push); apply one consistent, subtle transition.",
          "Animations — effects applied to objects within a slide, revealing bullet points one at a time to control pacing and focus attention.",
          "Timing — animations and transitions can be triggered on click or run automatically after a set time.",
          "Motion paths and emphasis effects — for purposeful demonstration (e.g. tracing a care pathway).",
          "Restraint — overuse of flashy effects distracts from the message; simple, purposeful animation aids learning."
        ],
        "figure": {
          "caption": "A presentation is an ordered sequence of slides delivered as a slide show to an audience.",
          "svg": "<svg viewBox=\"0 0 540 160\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Sequence of presentation slides.\"><defs><marker id=\"ictArr7\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"20\" y=\"40\" width=\"110\" height=\"72\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Slide 1</text><text x=\"75\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">Title</text><rect x=\"160\" y=\"40\" width=\"110\" height=\"72\" rx=\"8\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"215\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Slide 2</text><text x=\"215\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">Content</text><rect x=\"300\" y=\"40\" width=\"110\" height=\"72\" rx=\"8\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"355\" y=\"70\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Slide 3</text><text x=\"355\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">Chart</text><rect x=\"440\" y=\"40\" width=\"80\" height=\"72\" rx=\"8\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"480\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Show</text><line x1=\"130\" y1=\"76\" x2=\"156\" y2=\"76\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr7)\"/><line x1=\"270\" y1=\"76\" x2=\"296\" y2=\"76\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr7)\"/><line x1=\"410\" y1=\"76\" x2=\"436\" y2=\"76\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr7)\"/></svg>"
        }
      },
      {
        "h": "Hyperlinks, action buttons and multimedia",
        "p": "Slides can contain hyperlinks to other slides, files or web pages, and action buttons for non-linear navigation — useful for an interactive teaching quiz or jumping to a summary. Embedded audio and video can demonstrate a technique or play a patient testimonial (with consent), but files should be embedded rather than merely linked, and tested on the presentation computer to avoid failure on the day. Multimedia used purposefully deepens engagement; used carelessly it disrupts the talk."
      },
      {
        "h": "Views, speaker notes and running the show",
        "list": [
          "Normal view — for editing individual slides.",
          "Slide Sorter view — to reorder, duplicate, hide and organise slides via thumbnails.",
          "Notes view — to add speaker notes visible only to the presenter.",
          "Reading/Slide Show view — to deliver the presentation full screen (F5 from start, Shift+F5 from current).",
          "Presenter View — shows the current slide to the audience while giving the presenter notes, a timer and a preview of the next slide.",
          "Navigate with arrow keys, clicks or a remote; press Esc to end; use B/W to blank the screen to refocus attention."
        ]
      },
      {
        "h": "Rehearse timing and delivery preparation",
        "p": "PowerPoint's Rehearse Timings feature records how long the presenter spends on each slide, helping fit the talk to the allotted time — important for conference and assessed presentations. Good delivery preparation also includes checking equipment and file compatibility beforehand, arriving early to test the projector and sound, having a backup (a PDF or USB copy), and practising aloud so the slides support rather than dictate the talk. The presenter, not the slides, should carry the message."
      },
      {
        "h": "Accessibility and inclusive design",
        "list": [
          "Use large, legible sans-serif fonts (headings ~32-44 pt, body ~24-28 pt).",
          "Ensure strong colour contrast and do not rely on colour alone to convey meaning.",
          "Add alt-text to images so screen readers can describe them.",
          "Keep slides uncluttered with generous white space.",
          "Provide handouts or notes for those who need them.",
          "Caption or transcribe embedded video where possible."
        ]
      },
      {
        "h": "Principles of effective presentation design",
        "list": [
          "One main idea per slide; keep text concise and avoid dense paragraphs.",
          "Apply the 'less is more' rule — bullet key points, then explain aloud (guides such as the 6x6 idea: about six bullet points, six words each).",
          "Large, legible fonts and high contrast for readability.",
          "Consistent theme, alignment, colour and terminology throughout.",
          "Use visuals and data charts to reinforce, not merely decorate.",
          "Cite sources and use evidence-based, current content, especially for patient education.",
          "Design for the audience's health-literacy level; avoid jargon in patient sessions.",
          "Rehearse timing, check equipment, and have a backup before delivery."
        ]
      },
      {
        "h": "Clinical relevance — teaching, consent and confidentiality",
        "p": "Presentations are a core tool of the nurse-educator's role in patient education, staff training and professional dissemination. Effective design directly affects how well patients and colleagues understand and retain health information, which can influence adherence and safety. The nurse must respect patient confidentiality and consent when using clinical images or case details (anonymise where possible), observe copyright for images and content, ensure the material is evidence-based and current, and pitch language to the audience — a health-education talk for patients differs greatly from an academic seminar."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Define presentation software and state its uses in nursing education and dissemination.",
      "Explain slides, layouts and themes, and how the Slide Master ensures consistency and enables global changes.",
      "Differentiate transitions from animations and discuss their appropriate, restrained use.",
      "Describe the different views in PowerPoint, the purpose of speaker notes, and the value of Presenter View and Rehearse Timings.",
      "List and justify the principles of designing an effective, accessible health-education presentation."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A nurse must add the hospital logo and a consistent title font to all 40 slides of a training deck with least effort. The correct approach is to edit the:",
        "options": [
          "First slide only",
          "Slide Master",
          "Slide Sorter",
          "Notes page"
        ],
        "answer": 1,
        "rationale": "Editing the Slide Master changes formatting on every slide at once, ideal for a logo and consistent fonts."
      },
      {
        "type": "mcq",
        "q": "A coordinated set of colours, fonts and backgrounds applied across all slides is a:",
        "options": [
          "Layout",
          "Theme",
          "Transition",
          "Placeholder"
        ],
        "answer": 1,
        "rationale": "A theme gives a consistent, professional appearance to the whole presentation."
      },
      {
        "type": "mcq",
        "q": "An effect applied when moving from one slide to the next is a:",
        "options": [
          "Animation",
          "Transition",
          "Theme",
          "Layout"
        ],
        "answer": 1,
        "rationale": "Transitions occur between slides; animations act on objects within a slide."
      },
      {
        "type": "mcq",
        "q": "During a talk the presenter wants to see their notes, a timer and the next slide while the audience sees only the current slide. They should use:",
        "options": [
          "Normal view",
          "Presenter View",
          "Slide Sorter",
          "Reading view"
        ],
        "answer": 1,
        "rationale": "Presenter View gives the speaker private cues while the audience sees only the projected slide."
      },
      {
        "type": "mcq",
        "q": "To reveal bullet points one at a time within a single slide, the nurse applies a(n):",
        "options": [
          "Transition",
          "Template",
          "Footer",
          "Animation"
        ],
        "answer": 3,
        "rationale": "Animations control the appearance and movement of objects on a slide, pacing the reveal of points."
      },
      {
        "type": "mcq",
        "q": "A conference gives each speaker exactly 10 minutes. The most useful PowerPoint feature to prepare is:",
        "options": [
          "Rehearse Timings",
          "Remove Duplicates",
          "Data Validation",
          "Freeze Panes"
        ],
        "answer": 0,
        "rationale": "Rehearse Timings records time per slide so the talk fits the allotted period."
      },
      {
        "type": "mcq",
        "q": "A core principle of good slide design is to:",
        "options": [
          "Fill each slide with dense text",
          "Use as many animations as possible",
          "Convey one main idea per slide with concise points",
          "Avoid all images"
        ],
        "answer": 2,
        "rationale": "Concise, single-idea slides support comprehension; the speaker elaborates aloud."
      },
      {
        "type": "mcq",
        "q": "To let a screen reader describe an image for a visually impaired viewer, the nurse should add:",
        "options": [
          "A transition",
          "Alt-text to the image",
          "A footer",
          "A pie chart"
        ],
        "answer": 1,
        "rationale": "Alternative text (alt-text) provides an accessible description of images."
      },
      {
        "type": "mcq",
        "q": "Before using a patient's photograph in a teaching presentation, the nurse must first ensure:",
        "options": [
          "A large font",
          "Consent and copyright/confidentiality compliance",
          "A pie chart",
          "An automatic transition"
        ],
        "answer": 1,
        "rationale": "Patient consent and copyright/confidentiality must be respected when using clinical images."
      },
      {
        "type": "mcq",
        "q": "When designing a health-education talk for patients rather than clinicians, the nurse should mainly:",
        "options": [
          "Increase medical jargon",
          "Match language and visuals to the audience's health literacy",
          "Add more animations",
          "Remove all images"
        ],
        "answer": 1,
        "rationale": "Effective patient education pitches content and language to the audience's understanding, avoiding jargon."
      },
      {
        "type": "fill",
        "q": "The top-level slide that governs the design of all slides based on it is the ____ ____.",
        "accept": [
          "slide master"
        ],
        "rationale": "The Slide Master controls consistent formatting across the presentation."
      },
      {
        "type": "fill",
        "q": "The full-screen view used to deliver a presentation, started with the F5 key, is the ____ ____ view.",
        "accept": [
          "slide show",
          "slideshow"
        ],
        "rationale": "Slide Show view runs the presentation full screen for the audience; F5 starts from the beginning."
      }
    ]
  },
  {
    "id": "ict-08-internet-network",
    "unit": "Unit 5 · Internet, Networking & Communication",
    "title": "The Internet, Networking & the World Wide Web",
    "readMinutes": 25,
    "summary": "Computer networks and their types (PAN, LAN, MAN, WAN); topologies, transmission media and network hardware; the OSI/TCP-IP layered model; the internet as a network of networks; how data travels (packets, TCP/IP, IP addresses, DNS); the World Wide Web, browsers, URLs, HTTP/HTTPS and hyperlinks; connection methods and bandwidth; and network security for health-care settings.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "What is a computer network?",
        "p": "A computer network is two or more computers and devices linked together to share data, resources (printers, storage, applications) and communication. Networking underpins modern health care: it lets an EHR be viewed at every workstation, connects laboratories, imaging and pharmacy to the wards, and enables e-mail and telemedicine. The core benefits are resource sharing, fast communication, centralised data and backup, and cost efficiency; the core risks are dependence on availability and the security of shared data."
      },
      {
        "h": "Types of network by geographic size",
        "list": [
          "PAN (Personal Area Network) — very short range around one person, e.g. Bluetooth linking a phone and a wearable sensor.",
          "LAN (Local Area Network) — covers a small area such as a ward, department or building; usually owned by one organisation.",
          "MAN (Metropolitan Area Network) — spans a city, for example linking several hospitals across a region.",
          "WAN (Wide Area Network) — spans large distances, countries or continents; the internet is the largest WAN.",
          "Intranet — a private network within an organisation using internet technology; an Extranet extends limited, secure access to outside partners (e.g. a referral hospital or supplier)."
        ]
      },
      {
        "h": "Network topologies",
        "p": "The topology is the physical or logical arrangement of devices on a network. In a star topology every device connects to a central switch or hub — the usual choice in hospitals because a single cable fault affects only one device and problems are easy to isolate. A bus topology connects all devices to one backbone cable (simple but a backbone fault stops everything). A ring passes data around a loop. A mesh connects devices to many others, giving high reliability through redundant paths, used in critical or backbone links. Most modern LANs are wired or wireless star networks."
      },
      {
        "h": "Transmission media",
        "p": "Data travels over transmission media, which are either guided (wired) or unguided (wireless). Wired media include twisted-pair (standard Ethernet cable, RJ-45), coaxial cable, and fibre-optic cable (which carries light and offers the greatest speed, distance and immunity to interference — the backbone choice for imaging and record traffic). Wireless media include Wi-Fi radio (for mobility at the point of care), Bluetooth (short range), cellular 3G/4G/5G, microwave and satellite (for remote areas). Each medium trades speed, distance, cost and mobility."
      },
      {
        "h": "Network hardware",
        "list": [
          "Network Interface Card (NIC) — connects a device to the network.",
          "Switch — intelligently forwards data only to the intended device within a LAN (the modern replacement for the hub).",
          "Router — directs data between different networks and connects a LAN to the internet.",
          "Modem — converts signals between the digital computer and the ISP's line.",
          "Access point — provides Wi-Fi connectivity to wireless devices.",
          "Firewall — hardware or software that controls traffic entering and leaving the network for security."
        ]
      },
      {
        "h": "The layered model (OSI and TCP/IP)",
        "p": "Networking is organised into layers so that complex communication is broken into manageable functions, each building on the one below. The conceptual OSI model has seven layers (physical, data-link, network, transport, session, presentation, application); the practical internet uses the four-layer TCP/IP model (link, internet, transport, application). Layering means, for example, that a change of physical medium (copper to fibre) does not require rewriting applications. Nurses need not memorise every layer but should grasp that protocols cooperate in a stack to move data reliably."
      },
      {
        "h": "The internet: a network of networks",
        "p": "The internet is a vast global system of interconnected networks that communicate using common rules (protocols), principally TCP/IP. No single owner controls it; it is coordinated by shared standards. It provides services including the World Wide Web, e-mail, file transfer (FTP), voice and video calling (VoIP), streaming and cloud computing. For nursing it opens access to evidence, guidelines, continuing education, and communication far beyond the local hospital, and it is the platform on which telehealth runs.",
        "figure": {
          "caption": "The internet connects many local networks worldwide through routers and a shared protocol (TCP/IP).",
          "svg": "<svg viewBox=\"0 0 520 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Local networks connected through the internet cloud.\"><ellipse cx=\"260\" cy=\"100\" rx=\"90\" ry=\"52\" fill=\"#DCFCE7\" stroke=\"#0F4C3A\" stroke-width=\"2.5\"/><text x=\"260\" y=\"98\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#0F4C3A\">INTERNET</text><text x=\"260\" y=\"116\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">(TCP/IP)</text><rect x=\"20\" y=\"20\" width=\"110\" height=\"40\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"45\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Hospital LAN</text><rect x=\"390\" y=\"20\" width=\"110\" height=\"40\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"445\" y=\"45\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">University LAN</text><rect x=\"20\" y=\"150\" width=\"110\" height=\"40\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"175\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Clinic LAN</text><rect x=\"390\" y=\"150\" width=\"110\" height=\"40\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"445\" y=\"175\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Home PC</text><line x1=\"130\" y1=\"45\" x2=\"185\" y2=\"80\" stroke=\"#15803D\" stroke-width=\"2\"/><line x1=\"390\" y1=\"45\" x2=\"335\" y2=\"80\" stroke=\"#15803D\" stroke-width=\"2\"/><line x1=\"130\" y1=\"165\" x2=\"185\" y2=\"120\" stroke=\"#15803D\" stroke-width=\"2\"/><line x1=\"390\" y1=\"165\" x2=\"335\" y2=\"120\" stroke=\"#15803D\" stroke-width=\"2\"/></svg>"
        }
      },
      {
        "h": "How data travels: packets, TCP/IP, IP addresses and DNS",
        "p": "Before transmission, data is broken into small units called packets, each labelled with source and destination addresses and a sequence number. The TCP/IP protocol suite governs the journey: IP (Internet Protocol) addresses and routes each packet across the network, possibly by different paths, while TCP (Transmission Control Protocol) ensures packets arrive complete and are reassembled in the correct order, requesting retransmission of anything lost. Every device has a unique IP address (IPv4, e.g. 192.168.1.10, or the newer IPv6). Because numeric addresses are hard to remember, the Domain Name System (DNS) acts like a phone book, translating readable names (like who.int) into IP addresses."
      },
      {
        "h": "The World Wide Web, browsers and URLs",
        "p": "The World Wide Web (WWW) is a service running on the internet: a huge collection of linked documents (web pages) written in HTML, stored on web servers and delivered by the HTTP/HTTPS protocol. It is not the same as the internet, which is the underlying network — the Web is one of many services that use it. A web browser (Chrome, Edge, Firefox, Safari) is the client program that requests and displays web pages. Each page has a unique address, its URL (Uniform Resource Locator), for example https://www.who.int/data; the parts are the protocol (https), the domain name (www.who.int) and the path (/data). Hyperlinks connect pages, letting the user move between resources with a click."
      },
      {
        "h": "Domain types, HTTP and HTTPS",
        "p": "The final part of a domain name — the top-level domain — hints at the source's nature: .org (organisation), .gov (government), .edu (education), .com (commercial), plus country codes such as .bd for Bangladesh. HTTP (HyperText Transfer Protocol) transfers web pages; HTTPS is its secure form, encrypting the connection (shown by a padlock and 'https://') so passwords and patient data cannot be read in transit. Nurses should enter any credentials or health data only on HTTPS pages and should weigh the domain type when judging a source's likely reliability."
      },
      {
        "h": "Connecting to the internet and bandwidth",
        "list": [
          "Connection types — broadband (DSL, cable, fibre), mobile data (3G/4G/5G), Wi-Fi and satellite.",
          "An Internet Service Provider (ISP) supplies and manages the connection.",
          "Bandwidth is the data-carrying capacity, measured in bits per second (Mbps/Gbps); higher bandwidth transfers large files, such as radiology images, faster.",
          "Latency is the delay before data begins to arrive; low latency matters for real-time video consultation.",
          "A router/modem links the local network to the ISP.",
          "Reliable connectivity is critical for real-time clinical systems, EHR access and telemedicine — hence backup links in hospitals."
        ]
      },
      {
        "h": "Network security in health care",
        "list": [
          "Firewalls control traffic entering and leaving the network, blocking unauthorised access.",
          "Encryption (for example HTTPS and encrypted storage) protects data in transit and at rest.",
          "Strong authentication and role-based access control limit who can view patient data.",
          "Anti-malware and timely patching defend against attacks such as ransomware, a serious threat to hospitals.",
          "Virtual Private Networks (VPN) secure remote access over the public internet.",
          "Network segmentation isolates medical devices from general traffic.",
          "Staff awareness of phishing and safe use is a vital human safeguard — technology alone is not enough."
        ]
      },
      {
        "h": "Clinical relevance — the connected hospital",
        "p": "Networking is the invisible infrastructure of modern care: without it there is no shared EHR, no laboratory results at the bedside, and no telehealth. This dependence makes availability and security clinical-safety issues, not merely technical ones. A ransomware attack or network outage can force a return to paper and delay care. Nurses contribute to safe networking by following access and password policy, connecting only authorised devices, being alert to phishing, reporting suspected breaches promptly, and knowing the downtime procedure that keeps patients safe when the network fails."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Define a computer network and classify networks by geographic size (PAN, LAN, MAN, WAN).",
      "Explain network topologies and transmission media used in a hospital, and the role of switches and routers.",
      "Describe how data travels over the internet using packets, TCP/IP, IP addresses and DNS.",
      "Differentiate the internet from the World Wide Web, and explain URLs, HTTP/HTTPS and hyperlinks.",
      "Discuss the measures used to secure a health-care network and the nurse's role in network safety."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "In a hospital LAN wired as a star, a single patient-cable fault occurs. The most likely effect is that:",
        "options": [
          "Only that one device loses connection",
          "The whole network fails",
          "All wireless devices fail",
          "The internet goes down globally"
        ],
        "answer": 0,
        "rationale": "In a star topology each device has its own link to the central switch, so one cable fault isolates to that device — a key reason hospitals prefer star networks."
      },
      {
        "type": "mcq",
        "q": "A network that covers a single ward or building and is owned by the hospital is a:",
        "options": [
          "WAN",
          "LAN",
          "MAN",
          "PAN"
        ],
        "answer": 1,
        "rationale": "A Local Area Network spans a small area such as a department or building."
      },
      {
        "type": "mcq",
        "q": "The protocol pair that addresses/routes internet data and ensures complete, ordered delivery is:",
        "options": [
          "HTTP/HTML",
          "URL/DNS",
          "TCP/IP",
          "LAN/WAN"
        ],
        "answer": 2,
        "rationale": "IP addresses and routes packets while TCP guarantees complete, in-order delivery."
      },
      {
        "type": "mcq",
        "q": "A nurse types who.int and the browser reaches the correct server. The service that translated the name to an IP address is the:",
        "options": [
          "URL",
          "ISP",
          "HTTP",
          "DNS"
        ],
        "answer": 3,
        "rationale": "The Domain Name System maps human-readable names to numeric IP addresses, like a phone book."
      },
      {
        "type": "mcq",
        "q": "Before entering a login and patient data on a web portal, the nurse should confirm the address begins with:",
        "options": [
          "https:// (with a padlock)",
          "http://",
          "ftp://",
          "www. only"
        ],
        "answer": 0,
        "rationale": "HTTPS encrypts the connection so credentials and data cannot be read in transit; HTTP does not."
      },
      {
        "type": "mcq",
        "q": "The World Wide Web differs from the internet in that the Web is:",
        "options": [
          "The physical network of cables",
          "A service of linked HTML documents running on the internet",
          "An IP address",
          "A type of router"
        ],
        "answer": 1,
        "rationale": "The internet is the underlying network; the Web is one service (hyperlinked pages) that runs on it."
      },
      {
        "type": "mcq",
        "q": "Data is broken into small, individually addressed and numbered units for transmission called:",
        "options": [
          "Cells",
          "Pixels",
          "Packets",
          "Bits only"
        ],
        "answer": 2,
        "rationale": "Packets carry source, destination and sequence information and are reassembled in order at the destination."
      },
      {
        "type": "mcq",
        "q": "Which device intelligently forwards data only to the intended recipient within a LAN?",
        "options": [
          "Modem",
          "Speaker",
          "Repeater",
          "Switch"
        ],
        "answer": 3,
        "rationale": "A switch forwards frames only to the destination port, unlike an older hub that broadcast to all."
      },
      {
        "type": "mcq",
        "q": "A district hospital needs to move large radiology images between sites quickly and reliably. The best backbone medium is:",
        "options": [
          "Fibre-optic cable",
          "Bluetooth",
          "A single twisted-pair to each site",
          "Infrared"
        ],
        "answer": 0,
        "rationale": "Fibre-optic cable offers the greatest speed, distance and interference immunity, ideal for image-heavy backbone traffic."
      },
      {
        "type": "mcq",
        "q": "A key safeguard that lets a community nurse securely access hospital systems from home over the public internet is a:",
        "options": [
          "Pie chart",
          "VPN",
          "Bar code",
          "Slide Master"
        ],
        "answer": 1,
        "rationale": "A Virtual Private Network encrypts remote connections, protecting patient data over the public internet."
      },
      {
        "type": "fill",
        "q": "A private organisational network built with internet technology for internal use is called an ____.",
        "accept": [
          "intranet"
        ],
        "rationale": "An intranet is internal; an extranet extends limited access to outside partners."
      },
      {
        "type": "fill",
        "q": "The client program used to request and display web pages is a web ____.",
        "accept": [
          "browser"
        ],
        "rationale": "Browsers such as Chrome or Edge retrieve and render web pages via HTTP/HTTPS."
      }
    ]
  },
  {
    "id": "ict-09-email-evidence",
    "unit": "Unit 5 · Internet, Networking & Communication",
    "title": "Email, Web Searching & Finding Evidence",
    "readMinutes": 24,
    "summary": "Professional use of electronic mail and email etiquette; search engines and how they rank; effective search strategies with Boolean operators, phrases, truncation and wildcards; the PICO framework; health and nursing databases (PubMed, CINAHL, Cochrane) and controlled vocabulary; critically appraising online information (CRAAP) and the hierarchy of evidence; and safe, ethical, professional online conduct.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Electronic mail (email)",
        "p": "Email is the exchange of digital messages between users over a network, one of the internet's most used services. A message can carry text and attachments (documents, images) and reach a recipient anywhere within seconds, stored on a mail server until retrieved. An email address has the form username@domain (for example, nurse@hospital.org): the part before the @ identifies the user, and the part after names the mail server's domain. Email supports professional communication, referrals, journal alerts, committee work and submitting assignments, and provides a dated written record of correspondence."
      },
      {
        "h": "Using email professionally and safely",
        "list": [
          "To, Cc (carbon copy) and Bcc (blind copy) direct a message to primary and secondary recipients; Bcc hides recipients from each other (useful and privacy-protecting for group mailings).",
          "Use a clear, specific subject line and a courteous, professional tone and salutation.",
          "Attach files where needed, but never send identifiable patient data by ordinary email unless the channel is secure and permitted by policy.",
          "Reply, Reply All (use with care to avoid needless mass replies) and Forward manage conversations.",
          "Keep messages concise, proofread, and check recipients before sending — email cannot be unsent.",
          "Be alert to spam and phishing; never open suspicious attachments or click unexpected links; verify unusual requests through another channel."
        ]
      },
      {
        "h": "Search engines and how they work",
        "p": "A search engine (such as Google or Bing) is a website that indexes billions of web pages and returns a ranked list of results matching the user's query. Automated programs (crawlers/spiders) continuously index pages, and ranking algorithms order results by relevance, popularity, freshness and other signals — and increasingly by personalisation and paid advertising. Crucially, results are ranked by relevance and popularity, not by accuracy or clinical validity; a top result, and especially a sponsored one, is not automatically trustworthy and must still be appraised."
      },
      {
        "h": "Effective search strategies",
        "list": [
          "Choose precise keywords rather than full sentences; identify the key concepts first.",
          "Enclose exact phrases in quotation marks, e.g. \"pressure ulcer prevention\".",
          "Use Boolean operators: AND narrows (both terms must appear), OR broadens (either term), NOT excludes a term.",
          "Use truncation and wildcards where supported (e.g. nurs* finds nurse, nurses, nursing) to capture word variants.",
          "Add filters or advanced search to limit by date, language, file type or site (site: or filetype:).",
          "Use synonyms and alternative spellings to widen a search.",
          "Refine iteratively — review the first results and adjust the terms."
        ],
        "figure": {
          "caption": "Boolean operators shape a search: AND narrows, OR broadens, NOT excludes.",
          "svg": "<svg viewBox=\"0 0 520 170\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Boolean operators AND, OR, NOT.\"><circle cx=\"70\" cy=\"70\" r=\"34\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\" opacity=\"0.85\"/><circle cx=\"105\" cy=\"70\" r=\"34\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\" opacity=\"0.55\"/><text x=\"88\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">AND (both)</text><circle cx=\"230\" cy=\"70\" r=\"34\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\" opacity=\"0.6\"/><circle cx=\"265\" cy=\"70\" r=\"34\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\" opacity=\"0.6\"/><text x=\"247\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">OR (either)</text><circle cx=\"400\" cy=\"70\" r=\"34\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\" opacity=\"0.7\"/><circle cx=\"435\" cy=\"70\" r=\"34\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"415\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F4C3A\">NOT (exclude)</text></svg>"
        }
      },
      {
        "h": "The PICO framework for clinical questions",
        "p": "Before searching for evidence, nurses structure a focused clinical question using PICO: P (Population/Patient/Problem), I (Intervention), C (Comparison) and O (Outcome). For example: in adult surgical patients (P), does chlorhexidine skin preparation (I) compared with povidone-iodine (C) reduce surgical-site infection (O)? Breaking the question into these components identifies the key search terms, guides the choice of Boolean combinations, and makes database searching efficient and relevant — a core skill of evidence-based practice.",
        "figure": {
          "caption": "The PICO framework structures a clinical question into searchable concepts.",
          "svg": "<svg viewBox=\"0 0 520 130\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"PICO framework boxes.\"><rect x=\"15\" y=\"35\" width=\"110\" height=\"60\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"70\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#0F4C3A\">P</text><text x=\"70\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">Population</text><rect x=\"145\" y=\"35\" width=\"110\" height=\"60\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"200\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#0F4C3A\">I</text><text x=\"200\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">Intervention</text><rect x=\"275\" y=\"35\" width=\"110\" height=\"60\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"330\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#0F4C3A\">C</text><text x=\"330\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">Comparison</text><rect x=\"405\" y=\"35\" width=\"110\" height=\"60\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"460\" y=\"60\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#0F4C3A\">O</text><text x=\"460\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">Outcome</text></svg>"
        }
      },
      {
        "h": "Health and nursing databases for evidence",
        "p": "For evidence-based practice, nurses should search dedicated, curated health databases rather than rely on general web pages.",
        "list": [
          "PubMed / MEDLINE — free access to biomedical and nursing literature abstracts, maintained by the US National Library of Medicine.",
          "CINAHL — the Cumulative Index to Nursing and Allied Health Literature, focused specifically on nursing and allied health.",
          "Cochrane Library — high-quality systematic reviews summarising the best available evidence on interventions.",
          "WHO, national ministries and professional/regulatory bodies — trustworthy guidelines and statistics.",
          "Google Scholar — broad academic search across scholarly literature (less curated than the above).",
          "Controlled vocabulary such as MeSH (Medical Subject Headings) tags articles by concept, so a MeSH search retrieves relevant papers regardless of the exact wording authors used."
        ]
      },
      {
        "h": "Critically evaluating online information (CRAAP)",
        "p": "Not all online information is accurate; the nurse must appraise every source before using it. A common checklist is CRAAP: Currency (is it up to date?), Relevance (does it fit the question and level?), Authority (who wrote it — are they qualified, and who is the publisher?), Accuracy (is it evidence-based, referenced and verifiable?), and Purpose (is it objective, or is there bias or a commercial/political motive?). Preference should go to peer-reviewed journals, recognised professional and government sites, and recent publications over anonymous, undated or commercial pages."
      },
      {
        "h": "The hierarchy of evidence",
        "p": "When appraising research found online, the strength of the study design matters. From strongest to weakest, the traditional hierarchy runs: systematic reviews and meta-analyses, then randomised controlled trials (RCTs), then cohort studies, then case-control studies, then cross-sectional studies and case series/reports, and finally expert opinion. Higher levels control bias more rigorously. Recognising where a source sits helps the nurse judge how much confidence to place in its conclusions — a single case report warrants far more caution than a well-conducted systematic review.",
        "figure": {
          "caption": "The hierarchy of evidence: study designs from strongest (top) to weakest (bottom).",
          "svg": "<svg viewBox=\"0 0 480 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Evidence pyramid.\"><polygon points=\"240,12 300,55 180,55\" fill=\"#0F4C3A\"/><text x=\"240\" y=\"45\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#DCFCE7\" font-weight=\"700\">Systematic reviews</text><rect x=\"165\" y=\"57\" width=\"150\" height=\"30\" fill=\"#15803D\"/><text x=\"240\" y=\"77\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#F0FDF4\" font-weight=\"700\">RCTs</text><rect x=\"130\" y=\"89\" width=\"220\" height=\"30\" fill=\"#22C55E\"/><text x=\"240\" y=\"109\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\" font-weight=\"700\">Cohort studies</text><rect x=\"95\" y=\"121\" width=\"290\" height=\"30\" fill=\"#86EFAC\"/><text x=\"240\" y=\"141\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\" font-weight=\"700\">Case-control / cross-sectional</text><rect x=\"60\" y=\"153\" width=\"360\" height=\"30\" fill=\"#DCFCE7\" stroke=\"#15803D\"/><text x=\"240\" y=\"173\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\" font-weight=\"700\">Case series/reports; expert opinion</text><text x=\"465\" y=\"30\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">stronger</text><text x=\"465\" y=\"180\" text-anchor=\"end\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#7C2D12\">weaker</text></svg>"
        }
      },
      {
        "h": "Recognising phishing and safe online conduct",
        "list": [
          "Phishing emails impersonate a trusted sender to steal credentials or money; warning signs are urgency, generic greetings, mismatched sender addresses, and links whose real destination differs from the visible text.",
          "Never enter your password after clicking an emailed link; go to the site directly instead.",
          "Hover to reveal a link's true URL before trusting it.",
          "Report suspected phishing to IT rather than deleting it silently.",
          "Use strong, unique passwords and, where available, two-factor authentication.",
          "Log out of shared devices and never share login credentials."
        ]
      },
      {
        "h": "Ethical and professional conduct online",
        "list": [
          "Protect confidentiality — never post, email or transmit identifiable patient information insecurely.",
          "Respect copyright — cite and reference sources; do not plagiarise.",
          "Maintain professional boundaries on social media in line with the code of conduct; avoid discussing patients or the workplace inappropriately.",
          "Verify information from more than one reliable source before acting on it clinically.",
          "Give due credit and use evidence, not anecdote, to guide practice."
        ]
      },
      {
        "h": "Clinical relevance — evidence at the point of care",
        "p": "The ability to find, appraise and apply evidence quickly is central to safe, up-to-date nursing. A structured PICO question, a well-built database search, and disciplined appraisal turn the overwhelming volume of online information into trustworthy guidance for a real patient. Equally, the same skills protect the nurse and patients from harm — from acting on an unreliable web page, falling for a phishing attack, or breaching confidentiality online. Information literacy is now inseparable from clinical competence."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Explain the structure of an email address and outline the principles of professional and safe email use.",
      "Describe how a search engine works and explain why a top or sponsored result is not necessarily reliable.",
      "Explain Boolean operators, phrase searching and truncation, and use the PICO framework to build a search.",
      "Name key health and nursing databases and explain the role of controlled vocabulary (MeSH) in evidence-based practice.",
      "Discuss the CRAAP criteria for appraising online information and the hierarchy of evidence."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A nurse asks: in adults with a fever, does paracetamol compared with ibuprofen give greater comfort? Structuring this before searching uses the framework:",
        "options": [
          "PICO",
          "CRAAP",
          "GIGO",
          "IPOS"
        ],
        "answer": 0,
        "rationale": "PICO breaks a clinical question into Population, Intervention, Comparison and Outcome to identify search terms."
      },
      {
        "type": "mcq",
        "q": "In the email address nurse@hospital.org, the part after the @ symbol identifies the:",
        "options": [
          "User's name",
          "Mail server domain",
          "Subject line",
          "Attachment"
        ],
        "answer": 1,
        "rationale": "The portion after @ names the domain of the mail server; the part before it is the username."
      },
      {
        "type": "mcq",
        "q": "To retrieve nurse, nurses and nursing in one search where supported, the nurse would type:",
        "options": [
          "\"nurse\"",
          "NOT nurse",
          "nurs*",
          "nurse AND nurse"
        ],
        "answer": 2,
        "rationale": "Truncation with an asterisk (nurs*) captures all word variants sharing the stem."
      },
      {
        "type": "mcq",
        "q": "The Boolean operator that NARROWS a search by requiring both terms is:",
        "options": [
          "OR",
          "NEAR",
          "NOT",
          "AND"
        ],
        "answer": 3,
        "rationale": "AND retrieves only records containing both terms, narrowing the results."
      },
      {
        "type": "mcq",
        "q": "Which database is dedicated specifically to nursing and allied health literature?",
        "options": [
          "CINAHL",
          "A news site",
          "Wikipedia",
          "An online store"
        ],
        "answer": 0,
        "rationale": "CINAHL indexes nursing and allied health literature specifically."
      },
      {
        "type": "mcq",
        "q": "Two search results address the same question: a 2023 Cochrane systematic review and a single 2019 case report. For guiding practice, the nurse should give most weight to the:",
        "options": [
          "Case report, as it is a real patient",
          "Systematic review, as it is higher in the evidence hierarchy",
          "Whichever appears first in Google",
          "The one with more images"
        ],
        "answer": 1,
        "rationale": "Systematic reviews synthesise multiple studies and sit at the top of the evidence hierarchy, warranting greater confidence."
      },
      {
        "type": "mcq",
        "q": "An email marked 'urgent', addressed to 'Dear user', asks you to click a link and confirm your password. The correct action is to:",
        "options": [
          "Click and enter the password quickly",
          "Forward it to all colleagues",
          "Treat it as phishing and report it to IT without clicking",
          "Reply with the password"
        ],
        "answer": 2,
        "rationale": "Urgency, a generic greeting and a password request are classic phishing signs; never click or reply — report it."
      },
      {
        "type": "mcq",
        "q": "When appraising a website with CRAAP, checking who wrote it and their qualifications assesses its:",
        "options": [
          "Currency",
          "Length",
          "Colour",
          "Authority"
        ],
        "answer": 3,
        "rationale": "Authority concerns the author's and publisher's credentials and expertise."
      },
      {
        "type": "mcq",
        "q": "Search engines rank results mainly by relevance, popularity and paid placement, which means a top result is:",
        "options": [
          "Not necessarily the most reliable",
          "Always the most accurate",
          "Peer-reviewed by definition",
          "Free of bias"
        ],
        "answer": 0,
        "rationale": "Ranking reflects relevance/popularity and advertising, not verified accuracy, so sources must still be appraised."
      },
      {
        "type": "mcq",
        "q": "Controlled vocabulary such as MeSH improves a literature search mainly by:",
        "options": [
          "Adding colour to results",
          "Retrieving relevant articles regardless of the exact words authors used",
          "Blocking all old studies",
          "Sending an email alert"
        ],
        "answer": 1,
        "rationale": "MeSH tags articles by concept, so a concept search finds relevant papers even when authors used different terminology."
      },
      {
        "type": "fill",
        "q": "The Boolean operator that BROADENS a search by retrieving either term is ____.",
        "accept": [
          "or"
        ],
        "rationale": "OR returns records containing either keyword, widening the results."
      },
      {
        "type": "fill",
        "q": "Sending a copy of an email to a recipient hidden from the other addressees uses the ____ field.",
        "accept": [
          "bcc",
          "blind carbon copy"
        ],
        "rationale": "Bcc (blind carbon copy) hides that recipient from the others, protecting privacy in group emails."
      }
    ]
  },
  {
    "id": "ict-10-informatics-ehr",
    "unit": "Unit 6 · Health Informatics & the EHR",
    "title": "Nursing Informatics & the Electronic Health Record",
    "readMinutes": 26,
    "summary": "Nursing informatics as a specialty and the DIKW basis; health, medical and nursing information systems; the electronic health record (EHR) versus EMR, its components and benefits/challenges; clinical decision support; standardised nursing languages (NANDA-I, NIC, NOC, SNOMED CT, ICD); data quality, interoperability and standards (HL7, FHIR); and the legal, ethical and confidentiality principles governing electronic patient data.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "Nursing informatics as a specialty",
        "p": "Nursing informatics is a recognised specialty that integrates nursing science with information science and computer science to manage and communicate data, information, knowledge and wisdom (the DIKW continuum) in nursing practice. Its goal is to support nurses, patients and other providers in decision-making, improving the quality, safety and efficiency of care. The informatics nurse bridges the clinical and technical worlds — translating clinical needs into system requirements and ensuring systems fit the way nurses actually work — and increasingly leads system selection, implementation and optimisation."
      },
      {
        "h": "Health information systems",
        "p": "A health information system is an integrated set of components that collects, stores, processes and communicates health data.",
        "list": [
          "Hospital Information System (HIS) — the overarching system managing clinical and administrative data.",
          "Electronic Health Record (EHR) / Electronic Medical Record (EMR) — the digital patient record.",
          "Nursing Information System (NIS) — supports documentation, care planning, acuity and workload.",
          "Clinical Decision Support System (CDSS) — provides alerts, reminders and guidance.",
          "Ancillary systems — laboratory (LIS), radiology/imaging (RIS/PACS) and pharmacy systems.",
          "Computerised Provider Order Entry (CPOE) and e-prescribing reduce transcription errors.",
          "Administrative systems — scheduling, billing, and patient administration (ADT: admission, discharge, transfer)."
        ]
      },
      {
        "h": "EMR versus EHR",
        "p": "The terms are often used loosely but differ in scope. An Electronic Medical Record (EMR) is the digital chart within a single organisation — the electronic equivalent of one facility's paper file. An Electronic Health Record (EHR) is broader and longitudinal: designed to be created, stored, shared and used across different providers and settings, so it follows the patient rather than staying in one building. A Personal Health Record (PHR) is controlled by the patient. The move from EMR to interoperable EHR is what enables true continuity of care across a health system."
      },
      {
        "h": "The electronic health record (EHR) and its components",
        "p": "The EHR is a longitudinal, digital record of a patient's health information. It typically holds demographics, medical and surgical history, current problems and diagnoses, medications and allergies, immunisations, laboratory and imaging results, vital signs, nursing assessments and care plans, progress notes, and consent/advance-directive information. It replaces fragmented paper charts with a single, accessible, legible, up-to-date source of truth that many authorised clinicians can use at once.",
        "figure": {
          "caption": "The EHR integrates data from many systems into one shared, longitudinal patient record.",
          "svg": "<svg viewBox=\"0 0 520 210\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"EHR at the centre receiving data from lab, pharmacy, imaging and nursing.\"><defs><marker id=\"ictArr10\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><circle cx=\"260\" cy=\"105\" r=\"52\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2.5\"/><text x=\"260\" y=\"102\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#0F4C3A\">EHR</text><text x=\"260\" y=\"120\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">patient record</text><rect x=\"20\" y=\"20\" width=\"110\" height=\"36\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"43\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Laboratory</text><rect x=\"390\" y=\"20\" width=\"110\" height=\"36\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"445\" y=\"43\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Pharmacy</text><rect x=\"20\" y=\"154\" width=\"110\" height=\"36\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"177\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Imaging (PACS)</text><rect x=\"390\" y=\"154\" width=\"110\" height=\"36\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"445\" y=\"177\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" fill=\"#0F4C3A\">Nursing notes</text><line x1=\"130\" y1=\"42\" x2=\"212\" y2=\"86\" stroke=\"#0F4C3A\" stroke-width=\"2\" marker-end=\"url(#ictArr10)\"/><line x1=\"390\" y1=\"42\" x2=\"308\" y2=\"86\" stroke=\"#0F4C3A\" stroke-width=\"2\" marker-end=\"url(#ictArr10)\"/><line x1=\"130\" y1=\"168\" x2=\"212\" y2=\"124\" stroke=\"#0F4C3A\" stroke-width=\"2\" marker-end=\"url(#ictArr10)\"/><line x1=\"390\" y1=\"168\" x2=\"308\" y2=\"124\" stroke=\"#0F4C3A\" stroke-width=\"2\" marker-end=\"url(#ictArr10)\"/></svg>"
        }
      },
      {
        "h": "Benefits and challenges of the EHR",
        "list": [
          "Benefits — legible, complete, always-available records; reduced duplication and transcription errors; decision support and safety alerts; easier audit, reporting and research; better continuity and coordination of care; simultaneous multi-user access.",
          "Challenges — high cost and extensive training needs; workflow disruption during implementation; risk of alert fatigue and copy-paste errors; downtime and technical failure requiring robust business-continuity plans; privacy and cyber-security threats; and dependence on reliable, accurate data entry by clinicians."
        ]
      },
      {
        "h": "Clinical decision support systems (CDSS)",
        "p": "A CDSS analyses patient data against clinical rules and knowledge to provide alerts, reminders, order sets, guideline prompts and drug-interaction or allergy warnings at the point of care. Used well it reduces error and supports evidence-based decisions; used poorly it produces alert fatigue, where excessive or trivial alerts lead clinicians to override or ignore them, risking that a genuine warning is missed. Good CDSS design targets clinically significant alerts; nurses must respond thoughtfully to alerts and report those that are unhelpful so the system can be tuned."
      },
      {
        "h": "Standardised nursing languages and classifications",
        "p": "For nursing data to be shared, compared, aggregated and analysed, care must be documented using standardised terminologies rather than free text alone. Recognised nursing classifications include NANDA-I (nursing diagnoses), NIC (Nursing Interventions Classification) and NOC (Nursing Outcomes Classification), often used together as the NNN linkage that connects a diagnosis to interventions and expected outcomes. Broader clinical terminologies such as SNOMED CT provide a common cross-disciplinary language, and coding systems like ICD classify diagnoses for statistics and billing. Standardised language makes nursing's contribution visible in data and supports evidence, workload measurement and research."
      },
      {
        "h": "Data quality — the foundation of a safe EHR",
        "p": "The value and safety of an EHR depend entirely on data quality. High-quality data is accurate (correct and error-free), complete (nothing essential missing), timely (entered contemporaneously), consistent (the same across the record), relevant and legible. Because clinical decisions and automated alerts rest on this data, a single wrong or missing entry can cascade into harm (the GIGO principle applied to care). Nurses safeguard data quality by documenting promptly and precisely, verifying auto-populated fields, and correcting errors through the proper amendment process rather than deletion."
      },
      {
        "h": "Interoperability and health-data standards",
        "p": "Interoperability is the ability of different information systems to exchange data and use it meaningfully. It has levels: technical (moving the data), syntactic (agreed message format), and semantic (shared meaning through common terminologies). It relies on standards: HL7 and its modern successor FHIR (Fast Healthcare Interoperability Resources) structure messages, DICOM standardises medical images, and coding standards (SNOMED CT, ICD, LOINC) give shared meaning. Without such standards, systems become isolated 'silos' that cannot share information, forcing dangerous re-entry and gaps in the record.",
        "figure": {
          "caption": "Interoperability standards (HL7/FHIR, coding) let separate systems exchange and understand data instead of forming silos.",
          "svg": "<svg viewBox=\"0 0 520 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Systems exchanging data via standards.\"><defs><marker id=\"ictArr10b\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"45\" width=\"120\" height=\"60\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Lab system</text><rect x=\"200\" y=\"45\" width=\"120\" height=\"60\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"260\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">HL7 / FHIR</text><text x=\"260\" y=\"88\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">shared standards</text><rect x=\"385\" y=\"45\" width=\"120\" height=\"60\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"445\" y=\"80\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">EHR</text><line x1=\"135\" y1=\"75\" x2=\"196\" y2=\"75\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr10b)\"/><line x1=\"320\" y1=\"75\" x2=\"381\" y2=\"75\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr10b)\"/></svg>"
        }
      },
      {
        "h": "Legal, ethical and confidentiality principles",
        "list": [
          "Confidentiality — patient information must be protected and shared only on a legitimate need-to-know basis.",
          "Privacy — patients have a right to control who accesses their health data.",
          "Security safeguards — unique logins, role-based access, audit trails, encryption and automatic logout.",
          "Integrity and accountability — accurate records and traceable authorship (attribution) of every entry.",
          "Consent — patients should understand how their data is used and shared.",
          "Legal status — the EHR is a legal document; entries must be truthful, timely, and never falsified, back-dated or improperly deleted; corrections are made by dated amendment.",
          "Access is logged — audit trails record who viewed or changed a record, deterring and detecting inappropriate access."
        ]
      },
      {
        "h": "Clinical relevance — the nurse as guardian of the record",
        "p": "The EHR is where most of a nurse's information work now happens, and the nurse is both its principal user and a key guardian of its quality and confidentiality. This means logging in only as oneself, accessing only records one has a legitimate reason to view (curiosity about a neighbour or celebrity is a disciplinary breach that audit trails will catch), entering accurate and timely data, responding sensibly to decision support, following the downtime procedure when systems fail, and championing usability improvements. Competent, ethical EHR use is now a defining feature of professional nursing practice."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Define nursing informatics, relate it to the DIKW continuum, and describe the role of the informatics nurse.",
      "Differentiate an EMR from an EHR and describe the main health information systems in a modern hospital.",
      "Describe the components, benefits and challenges of the EHR, including alert fatigue.",
      "Explain standardised nursing languages (NANDA-I, NIC, NOC) and broader terminologies (SNOMED CT, ICD) and why they matter.",
      "Discuss data quality, interoperability standards (HL7/FHIR) and the legal-ethical principles governing the EHR."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A patient moves from a district hospital to a tertiary centre, and staff there immediately see the full history, results and medications. This continuity is enabled by a(n):",
        "options": [
          "Single-facility EMR",
          "Longitudinal, interoperable EHR",
          "Paper chart",
          "PACS image only"
        ],
        "answer": 1,
        "rationale": "An EHR is designed to be shared across providers and settings, following the patient — unlike an EMR confined to one facility."
      },
      {
        "type": "mcq",
        "q": "Nursing informatics integrates nursing science with information science and:",
        "options": [
          "Pharmacology",
          "Computer science",
          "Surgery",
          "Dietetics"
        ],
        "answer": 1,
        "rationale": "Nursing informatics combines nursing, information and computer science to manage nursing data, information, knowledge and wisdom."
      },
      {
        "type": "mcq",
        "q": "NANDA-I, NIC and NOC are examples of:",
        "options": [
          "Operating systems",
          "Web browsers",
          "Standardised nursing languages",
          "Network protocols"
        ],
        "answer": 2,
        "rationale": "They are standardised nursing terminologies for diagnoses, interventions and outcomes (the NNN linkage)."
      },
      {
        "type": "mcq",
        "q": "A CDSS fires a low-priority pop-up on nearly every order, so clinicians begin clicking through without reading them. This problem is called:",
        "options": [
          "Interoperability",
          "Alert fatigue",
          "Encryption",
          "Data validation"
        ],
        "answer": 1,
        "rationale": "Alert fatigue is desensitisation from excessive or trivial alerts, risking that a genuine warning is missed."
      },
      {
        "type": "mcq",
        "q": "A common family of standards for exchanging health-care data between systems is:",
        "options": [
          "HTML",
          "USB",
          "HL7 / FHIR",
          "GIF"
        ],
        "answer": 2,
        "rationale": "HL7 and its successor FHIR structure messages so systems can exchange health data."
      },
      {
        "type": "mcq",
        "q": "The ability of different clinical systems to exchange data and use it meaningfully, at technical, syntactic and semantic levels, is:",
        "options": [
          "Interoperability",
          "Multitasking",
          "Compression",
          "Defragmentation"
        ],
        "answer": 0,
        "rationale": "Interoperability lets systems share and correctly interpret data using shared standards and terminologies."
      },
      {
        "type": "mcq",
        "q": "A nurse notices an incorrect allergy entry in a patient's EHR. The correct action is to:",
        "options": [
          "Delete the record so no trace remains",
          "Amend it through the proper dated correction process",
          "Leave it and tell no one",
          "Overwrite the author's name"
        ],
        "answer": 1,
        "rationale": "The EHR is a legal record; errors are corrected by dated amendment, never by improper deletion or altering authorship."
      },
      {
        "type": "mcq",
        "q": "A nurse looks up the record of a hospitalised celebrity out of curiosity, with no care role. This is:",
        "options": [
          "Acceptable if quick",
          "A confidentiality breach detectable by the audit trail",
          "Encouraged for learning",
          "Only a problem if data is changed"
        ],
        "answer": 1,
        "rationale": "Accessing records without a legitimate need-to-know reason breaches confidentiality, and audit trails log and detect it."
      },
      {
        "type": "mcq",
        "q": "The property of data that requires it to be entered correctly, completely and contemporaneously so alerts and decisions are safe is:",
        "options": [
          "Bandwidth",
          "Data quality",
          "Latency",
          "Compression"
        ],
        "answer": 1,
        "rationale": "Data quality (accuracy, completeness, timeliness, consistency) underpins safe decisions and automated support."
      },
      {
        "type": "mcq",
        "q": "The record kept in an EHR is legally regarded as:",
        "options": [
          "An informal note",
          "Temporary data only",
          "Marketing material",
          "A legal document"
        ],
        "answer": 3,
        "rationale": "The EHR is a legal record; entries must be accurate, timely and never improperly altered."
      },
      {
        "type": "fill",
        "q": "The ability of different information systems to exchange and use data meaningfully is called ____.",
        "accept": [
          "interoperability"
        ],
        "rationale": "Interoperability depends on shared standards such as HL7/FHIR and common terminologies."
      },
      {
        "type": "fill",
        "q": "The classification of standardised nursing diagnoses is known as ____.",
        "accept": [
          "nanda",
          "nanda-i",
          "nanda international"
        ],
        "rationale": "NANDA-I provides the standardised nursing-diagnosis terminology."
      }
    ]
  },
  {
    "id": "ict-11-ict-nursing-practice",
    "unit": "Unit 6 · Health Informatics & the EHR",
    "title": "Applications of ICT in Nursing Practice",
    "readMinutes": 24,
    "summary": "How ICT is applied across the domains of nursing: clinical documentation and care planning; medication safety, CPOE and barcode administration; patient monitoring, early-warning scores and alarm management; telehealth and telenursing; mobile and point-of-care technology; e-learning; administration, quality improvement and public health; with benefits, limitations, downtime planning and the nurse's professional responsibilities.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "ICT across the domains of nursing",
        "p": "ICT now supports every domain of nursing — clinical care, education, administration and research. Used well, it improves safety, efficiency, communication, continuity and the quality of care; used poorly, it can disrupt workflow, introduce new error types, cause alert or alarm fatigue, and distance the nurse from the patient. The competent nurse applies ICT purposefully and critically, keeping the patient — not the technology — at the centre of care, and recognising when to trust and when to question the system."
      },
      {
        "h": "Clinical documentation and care planning",
        "p": "Electronic documentation replaces or supplements paper charting. Structured templates, drop-down menus, standardised terminologies (NANDA-I/NIC/NOC) and auto-population speed and standardise the recording of assessments, care plans, observations and progress notes. Benefits include legibility, completeness, immediate availability to the whole team, and easier retrieval for handover and audit. The nurse must still document accurately, contemporaneously and thoughtfully in their own words where needed, and must avoid uncritical copy-paste (copy-forward), which can perpetuate outdated or wrong information and undermine the record's integrity."
      },
      {
        "h": "Medication safety, CPOE and e-prescribing",
        "p": "ICT strengthens medication safety across the whole process. Computerised Provider Order Entry (CPOE) removes illegible handwriting and ambiguous abbreviations, and can enforce complete, structured orders. E-prescribing systems automatically check doses against weight and renal function, screen for drug-drug interactions, duplicate therapy and documented allergies, and flag look-alike/sound-alike risks. Automated dispensing cabinets control and track stock. These tools substantially reduce prescribing and transcription error, but do not eliminate risk — poorly designed systems can introduce new errors, so vigilance and clinical judgement remain essential."
      },
      {
        "h": "Barcode medication administration and the 'five rights'",
        "p": "Barcode medication administration (BCMA) verifies the medication process at the bedside by scanning the patient's wristband and the medication (and the nurse's ID) against the electronic order, electronically checking the five rights: right patient, right drug, right dose, right route and right time (often extended to include right documentation, reason and response). It provides a real-time double check and an automatic record. BCMA reduces administration errors and wrong-patient events, but the nurse must not defeat safety by scanning out of sequence or overriding warnings without thought.",
        "figure": {
          "caption": "Barcode medication administration verifies the 'five rights' by scanning patient and drug before giving.",
          "svg": "<svg viewBox=\"0 0 520 150\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Barcode medication administration workflow.\"><defs><marker id=\"ictArr11\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"15\" y=\"50\" width=\"120\" height=\"52\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"75\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Scan patient</text><text x=\"75\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">wristband</text><rect x=\"200\" y=\"50\" width=\"120\" height=\"52\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"260\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Scan drug</text><text x=\"260\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">system checks</text><rect x=\"385\" y=\"50\" width=\"120\" height=\"52\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"445\" y=\"72\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Five rights</text><text x=\"445\" y=\"90\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">verified &amp; given</text><line x1=\"135\" y1=\"76\" x2=\"196\" y2=\"76\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr11)\"/><line x1=\"320\" y1=\"76\" x2=\"381\" y2=\"76\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr11)\"/></svg>"
        }
      },
      {
        "h": "Patient monitoring, early-warning scores and alarm management",
        "p": "Networked monitors continuously measure vital signs (ECG, heart rate, blood pressure, oxygen saturation, respiration, temperature) and feed data directly into the record. Central monitoring lets one nurse observe several patients, and automated early-warning score (EWS/NEWS-type) systems aggregate vital signs to flag deterioration early and prompt escalation. The counterpart risk is alarm fatigue — desensitisation caused by frequent, often false, alarms — a recognised patient-safety hazard. Nurses manage it by setting sensible, patient-specific alarm limits, maintaining electrodes and probes to reduce artefact, and never silencing alarms without assessing the patient."
      },
      {
        "h": "Telehealth and telenursing",
        "p": "Telehealth uses ICT to deliver care and information at a distance. Telenursing includes triage and advice by phone or video, remote monitoring of chronic conditions (for example home blood-pressure, glucose or weight data transmitted for review), virtual follow-up consultations, and specialist support to remote and rural areas. It can be synchronous (real-time video) or asynchronous (store-and-forward, e.g. sending a wound photo for review). It improves access — especially for rural, elderly and mobility-limited patients — and reduces unnecessary travel and infection exposure, but it requires reliable connectivity, clear protocols, informed consent, privacy safeguards, and awareness of the limits of assessment without physical presence."
      },
      {
        "h": "Mobile health and point-of-care technology",
        "list": [
          "Mobile devices and tablets bring the record, observations and references to the bedside, reducing transcription.",
          "mHealth apps support patient self-management, medication and appointment reminders and education.",
          "Wearable and implantable sensors track activity, heart rate, rhythm and glucose continuously.",
          "Point-of-care testing devices (glucometers, blood-gas, INR) give rapid results linked directly to the record.",
          "Clinical reference and drug/dose-calculation apps support safe practice — chosen from reputable, evidence-based, regulated sources.",
          "Positive patient identification (barcode/RFID wristbands) underpins many of these at the bedside."
        ]
      },
      {
        "h": "Education, administration and public health",
        "list": [
          "E-learning, online courses, virtual reality and simulation for pre-registration and continuing professional development.",
          "Access to online journals, guidelines and digital libraries for evidence-based practice.",
          "Rostering, workforce, acuity/staffing, inventory and billing systems for efficient administration.",
          "Quality dashboards and indicators for clinical governance, audit and benchmarking.",
          "Public-health surveillance, immunisation registries and outbreak/contact tracking that inform community nursing.",
          "Secure messaging and communication tools that coordinate multidisciplinary care and handover."
        ]
      },
      {
        "h": "Downtime and business continuity",
        "p": "Because clinical care now depends on ICT, every unit must plan for system downtime — whether from maintenance, hardware failure, power loss or a cyber-attack such as ransomware. A business-continuity plan specifies paper downtime forms, how to access essential data (read-only backups or downtime viewers), how to prioritise care, and how to reconcile and back-enter data once systems recover. Nurses must know and rehearse the local downtime procedure so that patient safety and documentation continue seamlessly when technology fails — a modern, essential competency.",
        "figure": {
          "caption": "System downtime pathway: switch to downtime procedures, deliver safe care, then reconcile on recovery.",
          "svg": "<svg viewBox=\"0 0 540 140\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Downtime continuity pathway.\"><defs><marker id=\"ictArr11b\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"10\" y=\"45\" width=\"140\" height=\"50\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"80\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">System down</text><text x=\"80\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">activate plan</text><rect x=\"200\" y=\"45\" width=\"140\" height=\"50\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"270\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Paper downtime</text><text x=\"270\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">forms; safe care</text><rect x=\"390\" y=\"45\" width=\"140\" height=\"50\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"460\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#0F4C3A\">Recovery</text><text x=\"460\" y=\"84\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">reconcile &amp; enter</text><line x1=\"150\" y1=\"70\" x2=\"196\" y2=\"70\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr11b)\"/><line x1=\"340\" y1=\"70\" x2=\"386\" y2=\"70\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr11b)\"/></svg>"
        }
      },
      {
        "h": "Benefits, limitations and unintended consequences",
        "p": "ICT can improve safety, efficiency, access, communication and evidence use, but it carries real limitations and unintended consequences: high cost and training needs; downtime and cyber-risk; over-reliance and deskilling; alert and alarm fatigue; new 'technology-induced' errors from poor design or workarounds; reduced face-to-face contact; and the danger of documentation crowding out direct care. Recognising these trade-offs allows nurses and organisations to adopt technology critically, design safer workflows, and monitor for harm rather than assuming ICT is automatically beneficial."
      },
      {
        "h": "The nurse's professional responsibilities with ICT",
        "list": [
          "Use systems competently and only within your training and authorisation.",
          "Protect confidentiality: log in as yourself, access only records you need, log out, and safeguard devices.",
          "Verify computer-generated information with clinical assessment and judgement — never accept an implausible value uncritically.",
          "Document accurately and contemporaneously; avoid unsafe copy-paste.",
          "Manage alerts and alarms thoughtfully and report unhelpful ones for improvement.",
          "Know and follow the downtime/business-continuity procedure.",
          "Report system failures, near-misses and usability problems so care and systems improve.",
          "Keep technology in service of compassionate, patient-centred care."
        ]
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Describe how ICT supports clinical documentation and care planning, and the risks of uncritical copy-paste.",
      "Explain how CPOE, e-prescribing and barcode medication administration improve medication safety and the 'five rights'.",
      "Discuss patient monitoring, early-warning scores and the causes and management of alarm fatigue.",
      "Describe telehealth and telenursing, with their benefits, limitations and safeguards.",
      "Discuss the benefits, limitations, downtime planning and the nurse's responsibilities when using ICT in practice."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "The hospital EHR fails suddenly during a shift. The nurse's first correct action is to:",
        "options": [
          "Activate the downtime/business-continuity procedure and use paper forms",
          "Stop all care until it returns",
          "Delete the offline records",
          "Wait without documenting"
        ],
        "answer": 0,
        "rationale": "Business-continuity planning means switching to downtime procedures so safe care and documentation continue, then reconciling on recovery."
      },
      {
        "type": "mcq",
        "q": "Barcode medication administration mainly helps the nurse electronically verify the:",
        "options": [
          "Ward budget",
          "Five rights of medication",
          "Network speed",
          "Font size"
        ],
        "answer": 1,
        "rationale": "Scanning the patient and drug against the order confirms right patient, drug, dose, route and time at the bedside."
      },
      {
        "type": "mcq",
        "q": "Computerised Provider Order Entry (CPOE) reduces error primarily by:",
        "options": [
          "Speeding up typing",
          "Adding charts",
          "Removing illegible handwriting and enabling automatic dose/interaction checks",
          "Increasing bandwidth"
        ],
        "answer": 2,
        "rationale": "CPOE eliminates handwriting/abbreviation errors and lets the system check doses, interactions and allergies at order entry."
      },
      {
        "type": "mcq",
        "q": "A ward's monitors alarm so frequently, often falsely, that staff start silencing them without looking. This hazard is:",
        "options": [
          "Interoperability",
          "Latency",
          "Encryption",
          "Alarm fatigue"
        ],
        "answer": 3,
        "rationale": "Alarm fatigue is desensitisation from frequent/false alarms, risking a missed genuine alarm; it is managed with patient-specific limits and good probe care."
      },
      {
        "type": "mcq",
        "q": "A community nurse reviews home blood-pressure readings a patient's device transmits, and holds a video review. This is an example of:",
        "options": [
          "Telenursing / telehealth",
          "Defragmentation",
          "Compilation",
          "Data validation"
        ],
        "answer": 0,
        "rationale": "Remote monitoring and video consultation to deliver care at a distance is telenursing/telehealth."
      },
      {
        "type": "mcq",
        "q": "A recognised risk of uncritical electronic documentation (copy-forward) is:",
        "options": [
          "Better legibility",
          "Perpetuating outdated or wrong information",
          "Immediate availability",
          "Standardised terms"
        ],
        "answer": 1,
        "rationale": "Copy-paste without review can carry old or incorrect data into new notes, harming record integrity and safety."
      },
      {
        "type": "mcq",
        "q": "A monitor shows an SpO2 of 60% in a patient who is talking comfortably with warm, pink extremities. The nurse should first:",
        "options": [
          "Accept the value and call an emergency",
          "Ignore the patient entirely",
          "Verify with clinical assessment and check the probe/signal",
          "Delete the reading"
        ],
        "answer": 2,
        "rationale": "Computer-generated data must be checked against the patient; a value inconsistent with a well patient usually reflects an input/signal problem (GIGO)."
      },
      {
        "type": "mcq",
        "q": "Which is an administrative rather than direct-care application of ICT?",
        "options": [
          "Barcode drug scanning",
          "E-prescribing",
          "Bedside physiological monitoring",
          "Staff rostering and acuity system"
        ],
        "answer": 3,
        "rationale": "Rostering/acuity supports administration; the others directly support patient care."
      },
      {
        "type": "mcq",
        "q": "Wearable sensors and reputable mHealth apps mainly support:",
        "options": [
          "Patient self-management and remote monitoring",
          "Slide transitions",
          "Disk defragmentation",
          "Cable installation"
        ],
        "answer": 0,
        "rationale": "mHealth tools and wearables help patients self-manage and enable continuous remote monitoring."
      },
      {
        "type": "mcq",
        "q": "The overriding principle when using ICT in nursing is that technology should:",
        "options": [
          "Replace the nurse",
          "Support safe, patient-centred, compassionate care",
          "Reduce documentation to nothing",
          "Be used without any training"
        ],
        "answer": 1,
        "rationale": "ICT is a tool that should enhance, not replace, safe patient-centred nursing care and judgement."
      },
      {
        "type": "fill",
        "q": "The bedside system that verifies patient and drug by scanning before administration is abbreviated ____.",
        "accept": [
          "bcma",
          "barcode medication administration"
        ],
        "rationale": "BCMA confirms the five rights electronically at the bedside."
      },
      {
        "type": "fill",
        "q": "The unit's plan for delivering safe care and documentation when the EHR is unavailable is called the ____ (business-continuity) procedure.",
        "accept": [
          "downtime",
          "downtime procedure",
          "business continuity"
        ],
        "rationale": "The downtime/business-continuity procedure keeps care and records going during system outages."
      }
    ]
  },
  {
    "id": "ict-12-ict-nursing-research",
    "unit": "Unit 6 · Health Informatics & the EHR",
    "title": "ICT in Nursing Research, Data Analysis & Emerging Trends",
    "readMinutes": 24,
    "summary": "The role of ICT across the research process: literature searching and reference management; data collection, the data dictionary and management; levels of measurement; statistical software and descriptive/inferential analysis; databases and big data; scientific writing and dissemination; research ethics and data protection; and emerging trends — AI/machine learning, big-data analytics, IoT and the future of digital nursing.",
    "youtubeId": "",
    "tutor": "",
    "notes": [
      {
        "h": "ICT in the research process",
        "p": "Research is a core professional expectation of degree-level nurses, and ICT supports every stage — from framing a question to disseminating findings and implementing change. It makes literature review faster and more comprehensive, data collection more accurate, analysis more powerful, and dissemination wider. Understanding these tools enables the nurse to be an intelligent, critical consumer of research and, in time, a producer of research and audit that improves practice and patient outcomes."
      },
      {
        "h": "Literature searching and reference management",
        "p": "As covered earlier, curated health databases (PubMed, CINAHL, Cochrane) and academic search tools locate the evidence that underpins a study, using PICO-structured questions and controlled vocabulary. Reference-management software such as EndNote, Zotero or Mendeley stores and organises citations, inserts in-text citations directly into a manuscript, and formats the reference list automatically in a chosen style (for example APA). This saves substantial time, prevents citation and formatting errors, enables easy switching between styles, and helps avoid accidental plagiarism."
      },
      {
        "h": "Data collection and management",
        "list": [
          "Electronic questionnaires and online survey tools gather data efficiently from many respondents, with skip-logic and validation.",
          "Mobile and tablet-based data capture reduces transcription error in fieldwork and enables real-time entry.",
          "Data extracted from the EHR and clinical registries supports large observational and outcomes studies.",
          "A well-designed database or spreadsheet with clear variable definitions — a data dictionary — keeps data organised and reproducible.",
          "Validation rules, range checks and double-entry verification improve data accuracy at source.",
          "Secure storage, controlled access and de-identification protect participants throughout."
        ]
      },
      {
        "h": "The data dictionary and data preparation",
        "p": "A data dictionary is a document that defines every variable in a dataset: its name, meaning, data type, permitted values/codes, and units. It makes analysis reproducible, lets others understand the data, and prevents coding errors. Before analysis, raw data is prepared — 'cleaning' to correct or flag errors, handle missing values and remove duplicates, and coding categorical responses. Good preparation, always performed on a copy while preserving the raw data, is essential because analysis of dirty data yields misleading conclusions (GIGO)."
      },
      {
        "h": "Levels of measurement",
        "p": "The type of statistic and chart that is valid depends on the variable's level of measurement. Nominal data are unordered categories (blood group, ward). Ordinal data are ordered categories without equal intervals (pain 0-10 scale, satisfaction rating). Interval data have equal intervals but no true zero (temperature in Celsius). Ratio data have equal intervals and a true zero (weight, blood pressure, length of stay), allowing all arithmetic. For example, it is meaningful to average a ratio variable such as weight, but not a nominal one such as ward number — an error software will not prevent.",
        "figure": {
          "caption": "Levels of measurement determine which statistics are valid: nominal, ordinal, interval, ratio.",
          "svg": "<svg viewBox=\"0 0 520 130\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Levels of measurement.\"><rect x=\"12\" y=\"40\" width=\"118\" height=\"60\" rx=\"9\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"71\" y=\"63\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Nominal</text><text x=\"71\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">categories</text><rect x=\"138\" y=\"40\" width=\"118\" height=\"60\" rx=\"9\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"197\" y=\"63\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Ordinal</text><text x=\"197\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">ordered</text><rect x=\"264\" y=\"40\" width=\"118\" height=\"60\" rx=\"9\" fill=\"#86EFAC\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"323\" y=\"63\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Interval</text><text x=\"323\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#15803D\">no true zero</text><rect x=\"390\" y=\"40\" width=\"118\" height=\"60\" rx=\"9\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"449\" y=\"63\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Ratio</text><text x=\"449\" y=\"82\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"9\" fill=\"#0F4C3A\">true zero</text></svg>"
        }
      },
      {
        "h": "Data analysis and statistical software",
        "p": "Once collected and cleaned, data is analysed with software ranging from spreadsheets (Excel) for descriptive statistics to dedicated statistical packages such as SPSS, R (free and open-source) or STATA for inferential analysis. Descriptive statistics summarise the sample (central tendency and spread, frequencies, percentages). Inferential statistics test hypotheses and generalise to a population — for example t-tests (comparing two means), chi-square (associations between categories), ANOVA (several groups) and correlation/regression (relationships). A result's statistical significance is judged against a p-value threshold (commonly p < 0.05). The nurse must understand each test's assumptions and meaning — statistics support, but never replace, careful interpretation.",
        "figure": {
          "caption": "The research data pathway: collect, clean, analyse, and present findings using ICT tools.",
          "svg": "<svg viewBox=\"0 0 540 130\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Research data pathway from collection to presentation.\"><defs><marker id=\"ictArr12\" markerWidth=\"9\" markerHeight=\"9\" refX=\"7\" refY=\"4.5\" orient=\"auto\"><path d=\"M0 0L9 4.5L0 9z\" fill=\"#0F4C3A\"/></marker></defs><rect x=\"10\" y=\"40\" width=\"110\" height=\"48\" rx=\"8\" fill=\"#F0FDF4\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"65\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Collect</text><rect x=\"145\" y=\"40\" width=\"110\" height=\"48\" rx=\"8\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"200\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Clean</text><rect x=\"280\" y=\"40\" width=\"110\" height=\"48\" rx=\"8\" fill=\"#DCFCE7\" stroke=\"#15803D\" stroke-width=\"2\"/><text x=\"335\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Analyse</text><rect x=\"415\" y=\"40\" width=\"115\" height=\"48\" rx=\"8\" fill=\"#22C55E\" stroke=\"#0F4C3A\" stroke-width=\"2\"/><text x=\"472\" y=\"68\" text-anchor=\"middle\" font-family=\"sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F4C3A\">Present</text><line x1=\"120\" y1=\"64\" x2=\"141\" y2=\"64\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr12)\"/><line x1=\"255\" y1=\"64\" x2=\"276\" y2=\"64\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr12)\"/><line x1=\"390\" y1=\"64\" x2=\"411\" y2=\"64\" stroke=\"#0F4C3A\" stroke-width=\"2.5\" marker-end=\"url(#ictArr12)\"/></svg>"
        }
      },
      {
        "h": "Databases and big data",
        "p": "A database is an organised, structured collection of data that can be stored, queried and updated efficiently, usually managed by a database management system (DBMS) using tables, keys and query languages such as SQL. In health care, clinical databases and registries hold vast volumes of routinely collected data. Big data refers to datasets so large, fast-changing and varied that specialised methods and infrastructure are needed to analyse them (often described by the 'V's — volume, velocity, variety, veracity). Combined with the EHR, big data enables research into outcomes, disease patterns, safety and quality of care on a population scale, informing evidence-based nursing and health policy."
      },
      {
        "h": "Scientific writing and dissemination",
        "list": [
          "Word processors produce structured manuscripts, theses, protocols and reports.",
          "Reference managers format citations and bibliographies consistently.",
          "Presentation software supports conference, seminar and poster dissemination.",
          "Online journals and open-access repositories widen the reach and speed of findings.",
          "Plagiarism-detection tools help ensure academic integrity and originality.",
          "Collaboration and cloud tools (shared documents, version control) let co-authors work together at a distance.",
          "Reporting checklists (e.g. for trials or reviews) and researcher identifiers (ORCID) improve quality and attribution."
        ]
      },
      {
        "h": "Research ethics and data protection",
        "p": "ICT does not change the ethical duties of research; it sharpens some of them. Researchers must obtain informed consent, protect participant confidentiality, and anonymise or de-identify data before analysis and sharing. Electronic data must be stored securely (encryption, access control, secure backup), used only for the ethically approved purpose, and retained and disposed of per policy. Ethical/institutional review-board approval and data-protection compliance are mandatory, and the same confidentiality that governs clinical records governs research data. Special care applies to large linked datasets, where re-identification risk rises."
      },
      {
        "h": "Emerging trends and the future of digital nursing",
        "list": [
          "Artificial intelligence and machine learning for risk prediction (e.g. deterioration, sepsis, readmission) and decision support.",
          "Big-data analytics and predictive modelling for population and precision health.",
          "Robotics and smart assistive devices supporting care, mobility and rehabilitation.",
          "The Internet of Things (IoT) and wearables generating continuous, real-world health data.",
          "Cloud computing enabling scalable, shareable, cost-effective systems.",
          "Telehealth expansion, virtual wards and remote monitoring at scale.",
          "The nurse's evolving role — to use these tools critically and ethically, understand their limitations and biases, and keep human care, judgement and the therapeutic relationship central."
        ]
      },
      {
        "h": "Clinical relevance — critical, ethical use of data and AI",
        "p": "As data and AI become embedded in care, the degree-level nurse must be able to find and appraise evidence, handle research and audit data accurately and confidentially, and interrogate rather than blindly trust algorithmic outputs. AI tools can carry hidden bias from their training data and can be wrong; the accountable nurse checks their recommendations against clinical judgement and the individual patient, protects data throughout, and advocates for tools that are transparent, validated and fair. In this way emerging technology strengthens, rather than undermines, safe, evidence-based, compassionate nursing."
      }
    ],
    "references": REF_ICT,
    "examQuestions": [
      "Describe how ICT supports each stage of the nursing research process, from question to dissemination.",
      "Explain the role of reference-management software and a data dictionary in a research project.",
      "Explain levels of measurement and how they determine which statistics and charts are valid.",
      "Differentiate descriptive from inferential statistics and name the software and common tests used in nursing research.",
      "Discuss research ethics and data protection when using ICT, and outline emerging digital trends and the nurse's critical role."
    ],
    "assessment": [
      {
        "type": "mcq",
        "q": "A researcher wants to average patients' ward numbers (1-6) as a 'mean ward'. This is invalid because ward number is:",
        "options": [
          "Ratio data",
          "Interval data",
          "Nominal data, so arithmetic is meaningless",
          "Ordinal data"
        ],
        "answer": 2,
        "rationale": "Ward number is a nominal label; averaging it is meaningless. Software will still compute it, so the nurse must judge validity by level of measurement."
      },
      {
        "type": "mcq",
        "q": "Software such as EndNote, Zotero or Mendeley is used mainly to:",
        "options": [
          "Monitor vital signs",
          "Manage citations and format bibliographies automatically",
          "Scan barcodes",
          "Run the operating system"
        ],
        "answer": 1,
        "rationale": "Reference managers store citations and format bibliographies in a chosen style, reducing errors and switching styles easily."
      },
      {
        "type": "mcq",
        "q": "To test whether mean pain scores differ between two treatment groups, a nurse-researcher would most likely use:",
        "options": [
          "A pie chart",
          "A t-test in SPSS/R/STATA",
          "A slide master",
          "A barcode reader"
        ],
        "answer": 1,
        "rationale": "A t-test compares two group means; it is an inferential test run in dedicated statistical software."
      },
      {
        "type": "mcq",
        "q": "The document that defines each variable's name, meaning, type, codes and units in a dataset is a:",
        "options": [
          "Slide master",
          "Data dictionary",
          "Firewall",
          "Footer"
        ],
        "answer": 1,
        "rationale": "A data dictionary makes a dataset understandable and analysis reproducible."
      },
      {
        "type": "mcq",
        "q": "Before analysing or sharing research data, patient identifiers should be:",
        "options": [
          "Highlighted in colour",
          "Anonymised / de-identified",
          "Emailed to colleagues",
          "Printed and posted"
        ],
        "answer": 1,
        "rationale": "De-identification protects participant confidentiality and is an ethical and legal requirement."
      },
      {
        "type": "mcq",
        "q": "A study links millions of continuously updated EHR and wearable records of great variety to predict deterioration. This is an example of:",
        "options": [
          "A single spreadsheet",
          "Big data analytics",
          "A footer",
          "Defragmentation"
        ],
        "answer": 1,
        "rationale": "High volume, velocity and variety define big data, which with the EHR supports population-scale predictive research."
      },
      {
        "type": "mcq",
        "q": "Statistics that summarise the sample itself (mean, frequencies, percentages) rather than generalising to a population are:",
        "options": [
          "Inferential statistics",
          "Descriptive statistics",
          "Correlation only",
          "Hypothesis tests"
        ],
        "answer": 1,
        "rationale": "Descriptive statistics summarise the data; inferential statistics test hypotheses and generalise."
      },
      {
        "type": "mcq",
        "q": "Analysing carelessly cleaned data with wrong codes and missing values leads to misleading conclusions. This illustrates:",
        "options": [
          "The GIGO principle applied to research",
          "Good interoperability",
          "Strong encryption",
          "Alarm fatigue"
        ],
        "answer": 0,
        "rationale": "Garbage in, garbage out: poor data preparation produces unreliable results regardless of the software's power."
      },
      {
        "type": "mcq",
        "q": "An emerging technology increasingly used for clinical risk prediction, which nurses must appraise critically for bias, is:",
        "options": [
          "Artificial intelligence / machine learning",
          "Overhead projectors",
          "Floppy disks",
          "Fax machines"
        ],
        "answer": 0,
        "rationale": "AI/machine learning is applied to prediction and decision support but can carry bias and error, so it requires critical, accountable use."
      },
      {
        "type": "mcq",
        "q": "The correct order of the research data pathway is:",
        "options": [
          "Present, analyse, collect, clean",
          "Collect, clean, analyse, present",
          "Analyse, collect, present, clean",
          "Clean, present, collect, analyse"
        ],
        "answer": 1,
        "rationale": "Data is collected, cleaned/prepared, analysed and then presented."
      },
      {
        "type": "fill",
        "q": "Software that stores citations and formats the bibliography automatically is called a ____ ____ tool.",
        "accept": [
          "reference management",
          "reference manager",
          "citation management"
        ],
        "rationale": "Reference-management tools such as EndNote and Zotero handle citations and bibliographies."
      },
      {
        "type": "fill",
        "q": "Removing personal identifiers from data to protect participants is called ____.",
        "accept": [
          "anonymisation",
          "anonymization",
          "de-identification",
          "deidentification"
        ],
        "rationale": "Anonymisation/de-identification protects confidentiality in research data."
      }
    ]
  }
];
