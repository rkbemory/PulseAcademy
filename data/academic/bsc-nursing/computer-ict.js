/* ============================================================
   B.Sc. in Nursing (2018) · B111-II Computer & ICT
   — 12 topics, degree level. Aligned to the BNMC 4-year B.Sc.
   syllabus (Paper II: Information & Communication Technology):
   computing/ICT foundations, hardware, operating systems &
   software, Windows & file management, MS Word/Excel/PowerPoint,
   internet & networking, email & evidence searching, health
   informatics & the EHR, and ICT in nursing practice/research.
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

  /* ============ TOPIC 1 ============ */
  {
    id: "ict-01-intro",
    unit: "Unit 1 · Foundations of Computing & ICT",
    title: "Introduction to Computers & Information Technology in Nursing",
    readMinutes: 17,
    summary: "The computer as an information-processing system, the data-information-knowledge-wisdom continuum, characteristics and generations of computers, IT versus ICT, classification of computers, and the strategic role of ICT in modern nursing and health care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a computer?", p: "A computer is a programmable electronic device that accepts data (input), processes it according to a stored set of instructions (a program held in memory), produces useful results (output), and stores data and results for later retrieval. The defining feature at degree level is the stored-program concept: instructions and data reside together in memory, so the same machine can perform an unlimited range of tasks simply by changing the program. A computer does not reason; it executes precise instructions extremely fast and consistently." },
      { h: "The data–information–knowledge–wisdom (DIKW) continuum", p: "In nursing informatics the transformation of raw facts into professional judgement is described as the DIKW continuum. Data are discrete, objective facts (for example, a temperature of 39.2 degrees C). Information is data that has been processed, structured and given context (a fever trend charted over 24 hours). Knowledge is information that has been synthesised and interpreted so relationships are understood (recognising the pattern as post-operative sepsis). Wisdom is the appropriate, ethical use of knowledge to manage a human problem (deciding when and how to escalate care). Computers excel at moving data to information; nurses supply the knowledge and wisdom.", figure: {
        caption: "The DIKW continuum: computers transform data into information; nurses add knowledge and wisdom.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="DIKW continuum from data to wisdom."><defs><marker id="ictArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="12" y="70" width="120" height="56" rx="9" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="72" y="94" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">DATA</text><text x="72" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">raw facts</text><rect x="150" y="70" width="120" height="56" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="210" y="94" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">INFORMATION</text><text x="210" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">context added</text><rect x="288" y="70" width="120" height="56" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="348" y="94" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">KNOWLEDGE</text><text x="348" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">interpreted</text><rect x="426" y="70" width="120" height="56" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="486" y="94" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">WISDOM</text><text x="486" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">applied judgement</text><line x1="132" y1="98" x2="146" y2="98" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr1)"/><line x1="270" y1="98" x2="284" y2="98" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr1)"/><line x1="408" y1="98" x2="422" y2="98" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr1)"/><text x="200" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">computer strength</text><text x="470" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">human (nurse) strength</text></svg>'
      } },
      { h: "The information processing cycle", p: "Regardless of size, every computer follows the cycle Input → Processing → Output, supported throughout by Storage and coordinated by control signals along the system bus. Data is entered, the processor executes the fetch-decode-execute cycle over stored instructions, and results are displayed, printed or transmitted; data and results can be written to storage and retrieved later. This IPOS model (Input, Process, Output, Storage) underlies all clinical information systems." },
      { h: "Characteristics of a computer", list: [
        "Speed — executes millions to billions of operations per second, measured in MHz/GHz.",
        "Accuracy — results are correct if data and instructions are correct; errors arise from faulty input (GIGO: garbage in, garbage out).",
        "Storage capacity — stores and rapidly recalls vast volumes of data.",
        "Automation — once programmed, it carries out sequences of tasks without human intervention.",
        "Diligence — repeats tasks indefinitely without fatigue, boredom or loss of accuracy.",
        "Versatility — a single machine performs numeric, text, image and communication tasks.",
        "Reliability and reproducibility — critical for safe patient data and audit trails."
      ] },
      { h: "Generations of computers", p: "Computer development is traditionally described in generations defined by the core technology: first generation used vacuum tubes; second generation used transistors; third generation introduced integrated circuits; fourth generation is built on microprocessors (very large-scale integration); and the emerging fifth generation is characterised by artificial intelligence, parallel processing and natural interfaces. Each generation increased speed and reliability while reducing size, cost and power use, making bedside and mobile computing feasible in health care." },
      { h: "Information Technology (IT) versus ICT", p: "Information Technology (IT) is the use of computers, software and networks to acquire, store, process, retrieve and manage information. ICT (Information and Communication Technology) is the broader term: it adds the communication dimension — networks, the internet, mobile telephony and telehealth — enabling information to be shared instantly between people and places. Health informatics is the applied science that uses ICT to support clinical care, administration, education and research." },
      { h: "Classification of computers by size and capacity", list: [
        "Supercomputer — the fastest and most powerful; used in genomics, drug modelling and epidemiological simulation.",
        "Mainframe — high-capacity system serving many concurrent users; runs large hospital information systems.",
        "Server — provides shared resources (files, databases, applications) to networked clients.",
        "Microcomputer / Personal Computer (PC) — single-user desktop or laptop at the nurses' station.",
        "Mobile and embedded devices — tablets, smartphones and dedicated bedside monitors with built-in processors."
      ] },
      { h: "The strategic role of ICT in nursing and health care", list: [
        "Electronic health records (EHR) for continuous, shareable patient data.",
        "Clinical decision support — alerts, reminders and drug-interaction checks that improve safety.",
        "Physiological and remote patient monitoring in ICU, wards and the community.",
        "Laboratory, radiology (PACS) and pharmacy (e-prescribing) systems.",
        "Nursing workload, rostering, quality and outcome reporting.",
        "Evidence-based practice — access to databases, guidelines and online journals.",
        "Education, e-learning and simulation for continuing professional development.",
        "Telehealth and telenursing that extend care beyond the hospital walls."
      ] },
      { h: "Key terms", list: [
        "Hardware — the tangible physical components of the system.",
        "Software — the programs and data that direct the hardware.",
        "Stored-program concept — instructions held in memory alongside data.",
        "Health informatics — the discipline integrating information science, computer science and health care.",
        "User / end-user — the clinician or clerk who operates the system."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Define a computer and explain the information processing (IPOS) cycle with a diagram.",
      "Explain the DIKW continuum and describe the nurse's contribution at each level.",
      "Describe the generations of computers and the core technology of each.",
      "Differentiate between IT and ICT, and define health informatics.",
      "Discuss the strategic roles of ICT in modern nursing practice."
    ],
    assessment: [
      { type: "mcq", q: "The defining principle that lets one computer perform unlimited different tasks is the:", options: ["Binary system", "Stored-program concept", "Information cycle", "Boot process"], answer: 1, rationale: "The stored-program concept keeps instructions and data together in memory, so changing the program changes the task." },
      { type: "mcq", q: "In the DIKW continuum, recognising a fever trend as post-operative sepsis represents:", options: ["Data", "Information", "Knowledge", "Storage"], answer: 2, rationale: "Interpreting information so relationships are understood is knowledge; wisdom is the ethical action taken from it." },
      { type: "mcq", q: "A temperature reading of 39.2 degrees C on its own is an example of:", options: ["Data", "Information", "Knowledge", "Wisdom"], answer: 0, rationale: "A single discrete objective fact without context is data." },
      { type: "mcq", q: "The IPOS model of processing stands for Input, Process, Output and:", options: ["Software", "Storage", "System", "Speed"], answer: 1, rationale: "Storage supports the whole cycle, holding both data and results." },
      { type: "mcq", q: "Fourth-generation computers are primarily based on:", options: ["Vacuum tubes", "Transistors", "Integrated circuits", "Microprocessors (VLSI)"], answer: 3, rationale: "The fourth generation is defined by the microprocessor built with very large-scale integration." },
      { type: "mcq", q: "Compared with IT, ICT specifically adds the dimension of:", options: ["Calculation", "Communication", "Colour", "Compression"], answer: 1, rationale: "ICT = Information and Communication Technology; the added element is communication via networks and the internet." },
      { type: "mcq", q: "The principle that a computer's output is only as correct as its input is summarised as:", options: ["GIGO", "IPOS", "DIKW", "RAM"], answer: 0, rationale: "GIGO — garbage in, garbage out — means faulty input yields faulty output despite the machine's accuracy." },
      { type: "mcq", q: "Which computer class typically runs a large hospital information system serving many concurrent users?", options: ["Microcomputer", "Mainframe", "Tablet", "Embedded monitor"], answer: 1, rationale: "Mainframes provide high-capacity, high-reliability processing for many simultaneous users." },
      { type: "mcq", q: "Clinical decision support that warns of a drug interaction is an ICT contribution mainly to:", options: ["Billing", "Patient safety", "Staff rostering", "Data entry speed"], answer: 1, rationale: "Alerts and interaction checks reduce error and directly enhance patient safety." },
      { type: "mcq", q: "The applied discipline integrating information science, computer science and health care is:", options: ["Cybernetics", "Health informatics", "Telemetry", "Bioengineering"], answer: 1, rationale: "Health informatics uses ICT to support care, administration, education and research." }
      , { type: "fill", q: "In the DIKW continuum, the ethical, appropriate application of knowledge to a human problem is called ____.", accept: ["wisdom"], rationale: "Wisdom is the highest level, contributed largely by the nurse rather than the machine." }
      , { type: "fill", q: "The idea that faulty input produces faulty output is abbreviated ____.", accept: ["gigo", "garbage in garbage out"], rationale: "GIGO underlines that data quality determines output quality." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ict-02-hardware",
    unit: "Unit 2 · Computer Hardware & Devices",
    title: "Computer Hardware, Architecture & Devices",
    readMinutes: 17,
    summary: "The physical components of a computer system in depth: input devices, the CPU and its fetch-decode-execute cycle, the memory hierarchy (registers, cache, RAM, ROM), the system bus and ports, output devices, secondary and cloud storage, and data representation — with clinical device examples.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Hardware and system architecture", p: "Hardware means the physical, tangible components of a computer. They are organised into four functional units linked by the system bus: input, the central processing unit (CPU), memory, and output, with secondary storage retaining data permanently. This organisation follows the von Neumann architecture, in which a single memory holds both instructions and data and a shared bus carries them to the processor.", figure: {
        caption: "Von Neumann architecture: input and output connect to the CPU and memory over a shared system bus, with storage retaining data.",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block diagram of computer architecture."><defs><marker id="ictArr2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="80" width="118" height="55" rx="9" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="74" y="103" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">INPUT</text><text x="74" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">keyboard, scanner</text><rect x="212" y="52" width="150" height="105" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="287" y="75" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">CPU</text><text x="287" y="93" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Control Unit</text><text x="287" y="108" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">ALU + registers</text><rect x="234" y="118" width="106" height="30" rx="6" fill="#F0FDF4" stroke="#15803D" stroke-width="1.5"/><text x="287" y="137" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Memory (RAM/ROM)</text><rect x="427" y="80" width="118" height="55" rx="9" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="486" y="103" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">OUTPUT</text><text x="486" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">monitor, printer</text><line x1="133" y1="107" x2="208" y2="107" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr2)"/><line x1="362" y1="107" x2="423" y2="107" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr2)"/><rect x="212" y="195" width="150" height="42" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="287" y="214" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">STORAGE</text><text x="287" y="229" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">SSD, HDD, cloud</text><line x1="287" y1="157" x2="287" y2="192" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr2)"/></svg>'
      } },
      { h: "Input devices", p: "Input devices convert human actions or physical signals into digital data the computer can process.", list: [
        "Keyboard — enters text, numbers and commands.",
        "Pointing devices — mouse, touchpad, trackball for selection.",
        "Scanner and OCR — digitises paper records and forms.",
        "Touchscreen — direct input, common on bedside terminals and tablets.",
        "Barcode and RFID readers — identify patients, drugs and specimens for safe administration.",
        "Biometric readers — fingerprint or face capture for secure login.",
        "Medical sensors and transducers — ECG electrodes, SpO2 probes and BP cuffs feed physiological data to monitors."
      ] },
      { h: "The CPU and the machine cycle", p: "The Central Processing Unit is the processor that executes instructions. It contains the Control Unit (CU), which directs and sequences operations; the Arithmetic and Logic Unit (ALU), which performs arithmetic and logical comparisons; and small ultra-fast registers that hold the data currently being worked on. The CPU repeatedly performs the machine (fetch-decode-execute) cycle: fetch the next instruction from memory, decode it, execute it, and store the result. Performance depends on clock speed (GHz), the number of cores, word length and cache size. The CPU is mounted on the motherboard, the main circuit board interconnecting all components." },
      { h: "The memory hierarchy", p: "Memory is arranged as a hierarchy trading speed against capacity and cost: registers (fastest, smallest, inside the CPU) → cache (very fast SRAM close to the CPU) → main memory (RAM) → secondary storage (slowest, largest). Data moves up the hierarchy as it is needed. Understanding this explains why a system with adequate RAM runs clinical applications smoothly while too little RAM forces slow disk swapping." },
      { h: "RAM and ROM", list: [
        "RAM (Random Access Memory) — volatile primary working memory holding the operating system, active programs and current data; contents are lost when power is removed. More RAM allows more or larger programs to run at once.",
        "ROM (Read Only Memory) — non-volatile memory storing the firmware/BIOS boot instructions; retained without power.",
        "Cache — a small, very fast buffer that keeps frequently used data near the CPU to reduce waiting.",
        "Virtual memory — disk space used as an overflow when RAM is full, at the cost of speed."
      ] },
      { h: "The system bus and ports", p: "The system bus is the set of parallel wires carrying data (data bus), memory locations (address bus) and timing/control signals (control bus) between components. External devices connect through ports and interfaces such as USB, HDMI, Ethernet (RJ-45) and audio jacks. In hospitals, standardised interfaces let monitors, infusion pumps and network points connect reliably." },
      { h: "Output devices", p: "Output devices present processed results to the user.", list: [
        "Monitor (LCD/LED) — displays soft-copy output; resolution matters for viewing radiology images.",
        "Printer — inkjet or laser producing hard copy such as discharge summaries and labels.",
        "Speakers and alarms — audible output, including monitor alarms alerting nurses.",
        "Projector — enlarges the display for teaching.",
        "Plotters and specialised devices — for large or clinical printouts."
      ] },
      { h: "Secondary and cloud storage", p: "Secondary storage retains data permanently even when the computer is off.", list: [
        "Hard Disk Drive (HDD) — high-capacity magnetic storage with moving parts.",
        "Solid State Drive (SSD) — flash-based, faster and shock-resistant with no moving parts.",
        "USB flash drives and memory cards — portable but a data-security risk if unencrypted.",
        "Optical discs (CD/DVD/Blu-ray) — for archiving and distribution.",
        "Cloud storage — data held on remote internet servers, enabling access and backup across sites while raising confidentiality and governance concerns."
      ] },
      { h: "Data representation and units", p: "Computers represent all data in binary — combinations of bits (0 or 1) reflecting the on/off states of electronic switches. Eight bits form a byte, which encodes one character (using coding schemes such as ASCII or Unicode). Capacity scales up as Kilobyte (KB) → Megabyte (MB) → Gigabyte (GB) → Terabyte (TB), each roughly a thousand times larger. Appreciating these units helps nurses judge the storage needs of images, records and backups." }
    ],
    references: REF_ICT,
    examQuestions: [
      "Draw and describe the von Neumann architecture of a computer system.",
      "Explain the machine (fetch-decode-execute) cycle and the roles of the CU and ALU.",
      "Describe the memory hierarchy and differentiate RAM from ROM.",
      "Discuss input and output devices used in a clinical setting, with examples.",
      "Compare secondary storage options and outline the governance concerns of cloud storage in health care."
    ],
    assessment: [
      { type: "mcq", q: "In the CPU, the unit that performs arithmetic and logical comparisons is the:", options: ["ALU", "Control Unit", "Register file", "Cache"], answer: 0, rationale: "The Arithmetic and Logic Unit carries out calculations and comparisons; the Control Unit directs operations." },
      { type: "mcq", q: "The repeated sequence fetch, decode, execute, store is known as the:", options: ["Boot cycle", "Machine cycle", "Bus cycle", "Refresh cycle"], answer: 1, rationale: "The machine (instruction) cycle is how the CPU processes each instruction." },
      { type: "mcq", q: "Which memory is volatile and loses its contents when power is removed?", options: ["ROM", "Hard disk", "RAM", "Flash drive"], answer: 2, rationale: "RAM is volatile working memory; ROM and secondary storage are non-volatile." },
      { type: "mcq", q: "Ordered from fastest to slowest, the memory hierarchy is:", options: ["RAM, cache, registers, disk", "Registers, cache, RAM, disk", "Disk, RAM, cache, registers", "Cache, registers, disk, RAM"], answer: 1, rationale: "Registers are fastest and smallest; secondary storage is slowest and largest." },
      { type: "mcq", q: "A barcode or RFID reader at the bedside primarily improves:", options: ["Printing speed", "Screen resolution", "Safe patient and drug identification", "Battery life"], answer: 2, rationale: "Scanning verifies the right patient and medication, reducing administration errors." },
      { type: "mcq", q: "The part of the system bus that carries the location of data in memory is the:", options: ["Data bus", "Address bus", "Control bus", "Power bus"], answer: 1, rationale: "The address bus carries memory addresses; the data bus carries the data itself." },
      { type: "mcq", q: "Eight bits together form one:", options: ["Byte", "Nibble", "Word", "Kilobyte"], answer: 0, rationale: "Eight bits make a byte, which typically encodes a single character." },
      { type: "mcq", q: "Compared with an HDD, a Solid State Drive is:", options: ["Slower with moving parts", "Volatile like RAM", "Faster with no moving parts", "Only used for backup"], answer: 2, rationale: "SSDs use flash memory, have no moving parts, and are faster and more shock-resistant." },
      { type: "mcq", q: "The non-volatile memory that stores the boot/BIOS firmware is:", options: ["RAM", "Cache", "ROM", "Virtual memory"], answer: 2, rationale: "ROM retains start-up firmware even when the machine is off." },
      { type: "mcq", q: "A key governance concern when storing patient data in the cloud is:", options: ["Faster CPU speed", "Larger monitors", "More USB ports", "Confidentiality and access control"], answer: 3, rationale: "Remote storage of identifiable data raises confidentiality, security and governance issues." }
      , { type: "fill", q: "Disk space used as an overflow when RAM is full is called ____ memory.", accept: ["virtual"], rationale: "Virtual memory extends RAM using slower disk space." },
      { type: "fill", q: "The main circuit board that interconnects all components of a computer is the ____.", accept: ["motherboard", "mainboard"], rationale: "The motherboard carries the CPU, memory and buses that link every component." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ict-03-os-software",
    unit: "Unit 3 · Operating Systems & Software",
    title: "Operating Systems & Application Software",
    readMinutes: 17,
    summary: "The classification of software into system and application software; the functions of the operating system (process, memory, device, file and user management); types of operating systems; utility programs; programming languages and the translation process; and software licensing relevant to health-care institutions.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is software?", p: "Software is the set of programs — sequences of coded instructions — that direct the hardware to perform tasks. Without software, hardware is inert. Software falls into two broad classes: system software, which runs and manages the computer itself, and application software, which helps the user accomplish specific real-world tasks such as documenting care or analysing data." },
      { h: "Classification of software", list: [
        "System software — the operating system, device drivers, utilities and firmware that operate and maintain the computer.",
        "Application software — general-purpose (word processors, spreadsheets, browsers) and special-purpose (hospital information systems, EHR, pharmacy and laboratory software).",
        "Programming/development software — language translators and tools used to create other software."
      ] },
      { h: "The operating system (OS)", p: "The operating system is the master control program that starts when the computer boots and manages all hardware and software resources. It provides the platform on which applications run and the interface through which the user interacts with the machine. It is the most essential piece of system software; nothing else can run without it." },
      { h: "Core functions of the operating system", list: [
        "Process (CPU) management — schedules and switches between running programs so several tasks appear to run at once (multitasking).",
        "Memory management — allocates and reclaims RAM for each program and manages virtual memory.",
        "Device (I/O) management — controls input/output devices through device drivers.",
        "File management — creates, names, stores, organises, retrieves and protects files and folders.",
        "User interface — provides a graphical (GUI) or command-line (CLI) means of interaction.",
        "Security and user management — enforces logins, permissions and access control, essential for protecting patient data."
      ], figure: {
        caption: "The operating system sits between the user/applications and the hardware, managing all resources.",
        svg: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Layers: user, applications, operating system, hardware."><rect x="120" y="15" width="280" height="38" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="260" y="39" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">USER</text><rect x="90" y="63" width="340" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="260" y="88" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">APPLICATION SOFTWARE</text><rect x="60" y="113" width="400" height="42" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="260" y="139" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">OPERATING SYSTEM</text><rect x="30" y="165" width="460" height="38" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="260" y="189" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">HARDWARE</text></svg>'
      } },
      { h: "Types of operating systems", list: [
        "Single-user, single-tasking — one user, one task (older or simple devices).",
        "Single-user, multitasking — one user running several programs (typical PC: Windows, macOS).",
        "Multi-user — many users share one system (mainframes, servers).",
        "Real-time OS (RTOS) — responds within strict time limits, used in patient monitors and infusion pumps where timing is safety-critical.",
        "Mobile OS — Android and iOS on tablets and smartphones used at the point of care.",
        "Network/server OS — Linux and Windows Server managing shared hospital resources."
      ] },
      { h: "Utility programs", p: "Utilities are system software that maintain, optimise and protect the computer: antivirus and anti-malware software, firewalls, disk clean-up and defragmentation tools, backup and recovery software, file compression, and encryption utilities. In health care, current antivirus protection, automated backups and encryption are basic safeguards for patient confidentiality and service continuity." },
      { h: "Programming languages and translation", p: "Software is written in programming languages ranging from low-level machine code and assembly language (close to the hardware, fast but hard to write) to high-level languages such as Python, Java and C (readable and portable). Because the CPU understands only binary machine code, source code must be translated by a compiler (translating the whole program at once) or an interpreter (translating and running line by line). This layered abstraction is why the same application can be developed once and deployed widely." },
      { h: "Software licensing and versions", list: [
        "Proprietary/commercial software — licensed for a fee with usage restrictions (many EHR and office suites).",
        "Open-source software — source code is freely available and modifiable (for example, many Linux systems).",
        "Freeware and shareware — free to use, or free to trial before paying.",
        "Subscription/cloud (SaaS) — access to software over the internet for a recurring fee.",
        "Version control and patching — keeping software updated is vital for security and interoperability in clinical systems."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Classify software and give clinical examples of each category.",
      "Describe the core functions of an operating system.",
      "Explain the different types of operating systems, noting where a real-time OS is used in health care.",
      "What are utility programs? Discuss those most important for protecting patient data.",
      "Differentiate a compiler from an interpreter and explain why source code must be translated."
    ],
    assessment: [
      { type: "mcq", q: "The master control program that manages all hardware and software resources is the:", options: ["Application software", "Operating system", "Utility program", "Compiler"], answer: 1, rationale: "The operating system is the essential system software that manages all resources and runs first at boot." },
      { type: "mcq", q: "Software that helps the user accomplish a specific real-world task, such as an EHR, is:", options: ["Application software", "System software", "Firmware", "A device driver"], answer: 0, rationale: "Application software addresses user tasks; system software runs the machine itself." },
      { type: "mcq", q: "Running several programs so they appear to run at once is called:", options: ["Encryption", "Compiling", "Multitasking", "Formatting"], answer: 2, rationale: "Process management enables multitasking by scheduling and switching between programs." },
      { type: "mcq", q: "A patient monitor that must respond within strict time limits uses a:", options: ["Single-tasking OS", "Network OS", "Mobile OS", "Real-time OS"], answer: 3, rationale: "A real-time OS guarantees responses within defined deadlines, critical for safety devices." },
      { type: "mcq", q: "Which is a utility program rather than application software?", options: ["Word processor", "Antivirus software", "Spreadsheet", "Web browser"], answer: 1, rationale: "Antivirus is system utility software that protects and maintains the computer." },
      { type: "mcq", q: "A translator that converts an entire program into machine code at once is a(n):", options: ["Compiler", "Interpreter", "Driver", "Loader"], answer: 0, rationale: "A compiler translates the whole program before execution; an interpreter works line by line." },
      { type: "mcq", q: "Software whose source code is freely available for anyone to view and modify is:", options: ["Proprietary", "Shareware", "Open-source", "Firmware"], answer: 2, rationale: "Open-source software publishes its source code for free use and modification." },
      { type: "mcq", q: "The OS function that creates, organises and protects files and folders is:", options: ["Memory management", "File management", "Process management", "Device management"], answer: 1, rationale: "File management handles the naming, storage, retrieval and protection of files." },
      { type: "mcq", q: "Device drivers are part of which OS function?", options: ["Memory management", "User management", "File management", "Device (I/O) management"], answer: 3, rationale: "Device management uses drivers to control input and output hardware." },
      { type: "mcq", q: "In health care, keeping software patched and updated is most important for:", options: ["Faster typing", "Security and interoperability", "Brighter screens", "Cheaper hardware"], answer: 1, rationale: "Timely updates close security gaps and maintain safe interoperability between clinical systems." }
      , { type: "fill", q: "The two broad classes of software are system software and ____ software.", accept: ["application"], rationale: "System software runs the machine; application software serves the user's tasks." },
      { type: "fill", q: "A ____ operating system responds within strict time limits and is used in infusion pumps and monitors.", accept: ["real-time", "real time", "rtos"], rationale: "Real-time operating systems guarantee timely responses for safety-critical devices." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ict-04-windows",
    unit: "Unit 3 · Operating Systems & Software",
    title: "Windows Operation & File Management",
    readMinutes: 17,
    summary: "Working with the Microsoft Windows graphical environment: desktop, taskbar and Start menu; window controls and multitasking; the file system, drives, folders and paths; file operations, naming, extensions and searching; shortcuts and the Recycle Bin; and safe file organisation, backup and security for clinical documents.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The Windows GUI environment", p: "Microsoft Windows is a widely used graphical operating system built on the WIMP model — Windows, Icons, Menus, Pointer. Instead of typing commands, the user manipulates on-screen objects with a pointer, making the system intuitive for clinical staff. The desktop is the main working area; the taskbar (usually along the bottom) shows the Start button, pinned and running programs, and the notification/system tray; the Start menu launches programs and provides access to settings and shutdown." },
      { h: "Working with windows", p: "Each open program or folder appears in a rectangular window that can be moved, resized, and layered. The title bar carries the standard control buttons: Minimise (hide to the taskbar), Maximise/Restore (full screen or windowed), and Close. Because Windows is multitasking, several windows can be open at once; the user switches between them via the taskbar or Alt+Tab and can arrange them side by side to compare information, such as a drug chart and a care plan." },
      { h: "The file system: drives, folders and files", p: "Windows organises stored data as a hierarchical tree. Physical and logical storage is divided into drives labelled with letters (C: for the main disk, D: for others, removable and network drives). Within a drive, folders (directories) contain files and further sub-folders, forming a branching structure. This hierarchy is the mental model nurses need to store and retrieve documents reliably.", figure: {
        caption: "Hierarchical file system: a drive contains folders, which contain sub-folders and files.",
        svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="File system tree from drive to folders to files."><rect x="200" y="12" width="120" height="34" rx="7" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="260" y="34" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">C: Drive</text><rect x="70" y="80" width="130" height="32" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="135" y="101" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Ward-Records</text><rect x="320" y="80" width="130" height="32" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="385" y="101" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Rosters</text><rect x="40" y="150" width="120" height="30" rx="6" fill="#F0FDF4" stroke="#15803D" stroke-width="1.5"/><text x="100" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">careplan.docx</text><rect x="175" y="150" width="120" height="30" rx="6" fill="#F0FDF4" stroke="#15803D" stroke-width="1.5"/><text x="235" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">vitals.xlsx</text><rect x="330" y="150" width="120" height="30" rx="6" fill="#F0FDF4" stroke="#15803D" stroke-width="1.5"/><text x="390" y="170" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">july-duty.xlsx</text><line x1="260" y1="46" x2="135" y2="78" stroke="#0F4C3A" stroke-width="2"/><line x1="260" y1="46" x2="385" y2="78" stroke="#0F4C3A" stroke-width="2"/><line x1="135" y1="112" x2="100" y2="148" stroke="#15803D" stroke-width="1.5"/><line x1="135" y1="112" x2="235" y2="148" stroke="#15803D" stroke-width="1.5"/><line x1="385" y1="112" x2="390" y2="148" stroke="#15803D" stroke-width="1.5"/></svg>'
      } },
      { h: "File paths and names", p: "A file's location is specified by its path, which lists the drive and the chain of folders leading to it, for example C:\\Ward-Records\\careplan.docx. A file name has two parts separated by a dot: the name and the extension. The extension identifies the file type and the program that opens it — .docx (Word), .xlsx (Excel), .pptx (PowerPoint), .pdf (portable document), .jpg/.png (images), .txt (plain text). Meaningful, consistent naming makes clinical files easy to find and audit." },
      { h: "File and folder operations", list: [
        "Create — make a new folder or file to organise work.",
        "Rename — give a clear, descriptive name.",
        "Copy and paste — duplicate a file, leaving the original in place.",
        "Cut and paste (move) — relocate a file to another folder.",
        "Delete — send to the Recycle Bin.",
        "Open and Save / Save As — retrieve and store, choosing location, name and format.",
        "Select multiple — use Shift (a range) or Ctrl (individual items) to act on several files at once."
      ] },
      { h: "File Explorer, search and shortcuts", p: "File Explorer (Windows Explorer) is the tool for browsing the folder tree, viewing file details (name, size, type, date modified) and performing operations. The search box locates files by name, type or date — invaluable when a document's exact location is forgotten. A shortcut is a small link icon that points to a file or program stored elsewhere, allowing quick access without duplicating the original. Deleting a shortcut does not delete the original file." },
      { h: "The Recycle Bin and recovery", p: "Deleted files from the hard disk are first moved to the Recycle Bin, from which they can be restored if deleted by mistake, or permanently removed by emptying the bin. Note that files deleted from removable drives or network locations, or with Shift+Delete, usually bypass the Recycle Bin. This is why deliberate deletion of clinical records must follow policy, and accidental loss should prompt an immediate check of the bin or backups." },
      { h: "Organisation, backup and security of clinical files", list: [
        "Use a logical folder structure and consistent naming conventions.",
        "Back up important files regularly to a separate drive or secure server.",
        "Protect confidential documents with passwords and encryption where required.",
        "Follow institutional policy on where patient data may and may not be stored.",
        "Log off or lock the workstation when leaving it to prevent unauthorised access.",
        "Never store identifiable patient data on unencrypted personal USB drives."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Describe the main elements of the Windows desktop and taskbar.",
      "Explain the hierarchical file system using drives, folders and files with a diagram.",
      "What is a file extension? List common extensions and the programs that open them.",
      "Describe the common file and folder operations in Windows.",
      "Discuss safe organisation, backup and security of clinical files on a workstation."
    ],
    assessment: [
      { type: "mcq", q: "The graphical model on which Windows is based is abbreviated:", options: ["IPOS", "WIMP", "DIKW", "GIGO"], answer: 1, rationale: "WIMP stands for Windows, Icons, Menus, Pointer — the graphical interaction model." },
      { type: "mcq", q: "The three standard buttons on a window's title bar are Minimise, Close and:", options: ["Refresh", "Maximise/Restore", "Print", "Save"], answer: 1, rationale: "Title-bar controls are Minimise, Maximise/Restore and Close." },
      { type: "mcq", q: "In the path C:\\Ward-Records\\careplan.docx, 'Ward-Records' is a:", options: ["Drive", "File extension", "Folder", "Shortcut"], answer: 2, rationale: "It is a folder within the C: drive that contains the file careplan.docx." },
      { type: "mcq", q: "The part of a file name that identifies its type and the program that opens it is the:", options: ["Path", "Extension", "Icon", "Shortcut"], answer: 1, rationale: "The extension (for example .docx) indicates the file type and associated program." },
      { type: "mcq", q: "To duplicate a file while leaving the original in place, you use:", options: ["Cut and paste", "Delete", "Rename", "Copy and paste"], answer: 3, rationale: "Copy and paste creates a duplicate; cut and paste moves the original." },
      { type: "mcq", q: "Deleting a shortcut icon will:", options: ["Delete the original file", "Leave the original file untouched", "Empty the Recycle Bin", "Format the drive"], answer: 1, rationale: "A shortcut only points to a file; removing it does not remove the original." },
      { type: "mcq", q: "Files deleted from the hard disk are first placed in the:", options: ["Clipboard", "Cache", "Recycle Bin", "Taskbar"], answer: 2, rationale: "The Recycle Bin temporarily holds deleted files so they can be restored." },
      { type: "mcq", q: "To select several non-adjacent files at once, you hold down:", options: ["Alt", "Ctrl", "Tab", "Esc"], answer: 1, rationale: "Ctrl-click selects individual items; Shift selects a continuous range." },
      { type: "mcq", q: "The Windows tool used to browse folders and view file details is:", options: ["File Explorer", "Control Panel", "Task Manager", "Notepad"], answer: 0, rationale: "File Explorer navigates the folder tree and shows file details." },
      { type: "mcq", q: "The safest practice for confidential patient files on a shared workstation is to:", options: ["Leave the session open for convenience", "Save copies to a personal USB drive", "Disable the password", "Log off or lock the workstation when leaving"], answer: 3, rationale: "Locking or logging off prevents unauthorised access to patient data." }
      , { type: "fill", q: "The complete address of a file, including drive and folders, is called its ____.", accept: ["path", "file path"], rationale: "The path specifies the drive and folder chain leading to a file." },
      { type: "fill", q: "A small link icon that points to a file or program stored elsewhere is called a ____.", accept: ["shortcut"], rationale: "A shortcut provides quick access without duplicating the original file." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ict-05-msword",
    unit: "Unit 4 · Office Applications for Nursing",
    title: "MS Word — Word Processing for Nursing Documentation",
    readMinutes: 17,
    summary: "Using Microsoft Word to create professional nursing documents: the interface and ribbon; creating, saving and formatting text; paragraph and page layout; tables, lists, headers/footers and page numbers; spelling, grammar and review tools; mail merge; and referencing and templates for care plans, reports and academic assignments.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is word processing?", p: "Word processing is the creation, editing, formatting and printing of text documents using a computer. Microsoft Word is the most widely used word processor. Unlike a typewriter, a word processor lets the user revise text freely before printing, reuse and share documents electronically, and produce a polished, professional appearance — essential for nursing care plans, incident reports, letters and academic work." },
      { h: "The Word interface and ribbon", p: "Word presents commands on the ribbon, a set of tabs (Home, Insert, Layout, References, Review, View) each grouping related tools. The Quick Access Toolbar holds frequently used commands such as Save and Undo; the status bar shows page and word count; and the document area is where text is entered. Understanding this task-oriented layout lets the nurse find the right tool quickly." },
      { h: "Creating, saving and editing documents", list: [
        "Create a new blank document or start from a template.",
        "Save and Save As — store the file, choosing name, folder and format (.docx or .pdf); save often to avoid data loss.",
        "Edit text — insert, delete, and use Cut, Copy and Paste to rearrange content.",
        "Undo and Redo — reverse or repeat recent actions.",
        "Find and Replace — locate text and substitute it throughout, useful for correcting a repeated term.",
        "Select text with the mouse or Shift plus arrow keys before formatting."
      ] },
      { h: "Character and font formatting", p: "Character formatting changes the appearance of individual letters and words: font face, size (in points), bold, italic and underline, colour, highlight, superscript/subscript, and case. Consistent, readable formatting (for example a clear font at 11-12 points) makes clinical documents legible and professional." },
      { h: "Paragraph and page formatting", list: [
        "Alignment — left, right, centre or justified.",
        "Line and paragraph spacing — for readability (single, 1.5 or double spacing, often required in assignments).",
        "Indentation and tabs — to structure content.",
        "Bulleted and numbered lists — to present steps, such as a nursing procedure, clearly.",
        "Margins, orientation (portrait/landscape) and page size — set on the Layout tab.",
        "Page breaks — to start content on a new page."
      ] },
      { h: "Tables, headers, footers and page numbers", p: "Tables organise data in rows and columns — ideal for observation charts, medication schedules or comparison grids; cells can be merged, shaded and bordered. Headers and footers place repeating information (document title, ward, date) at the top or bottom of every page, and automatic page numbering keeps multi-page reports in order. These features give reports a structured, official appearance and support version control.", figure: {
        caption: "The Word ribbon groups related commands under tabs such as Home, Insert and Review.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Word ribbon tabs and command groups."><rect x="10" y="12" width="520" height="26" rx="5" fill="#0F4C3A"/><text x="45" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7" font-weight="700">Home</text><text x="105" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Insert</text><text x="165" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Layout</text><text x="235" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">References</text><text x="310" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">Review</text><text x="365" y="30" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">View</text><rect x="10" y="44" width="520" height="90" rx="6" fill="#F0FDF4" stroke="#15803D" stroke-width="1.5"/><rect x="25" y="58" width="120" height="62" rx="5" fill="#DCFCE7" stroke="#15803D" stroke-width="1"/><text x="85" y="93" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Font group</text><rect x="160" y="58" width="140" height="62" rx="5" fill="#DCFCE7" stroke="#15803D" stroke-width="1"/><text x="230" y="93" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Paragraph group</text><rect x="315" y="58" width="120" height="62" rx="5" fill="#DCFCE7" stroke="#15803D" stroke-width="1"/><text x="375" y="93" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Styles group</text></svg>'
      } },
      { h: "Proofing and review tools", p: "Word's Review tab supports quality and collaboration: the spelling and grammar checker flags likely errors (though the nurse must still verify clinical terms), word count monitors assignment limits, Track Changes records edits for review by a supervisor, and Comments allow feedback. Careful proofreading remains essential because automated tools do not catch every contextual or clinical error." },
      { h: "Mail merge, referencing and templates", list: [
        "Mail merge — combines a standard letter with a list of names/addresses to produce many personalised copies at once, useful for appointment or recall letters.",
        "References tab — inserts citations, builds a bibliography and manages styles (such as APA), and creates a table of contents for long reports.",
        "Templates — pre-designed documents (care plans, referral forms, letterheads) that ensure consistency and save time.",
        "Insert objects — pictures, shapes, symbols and page numbers to enrich documents."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Define word processing and list its advantages over a typewriter for nursing documentation.",
      "Describe the Word ribbon and the purpose of its main tabs.",
      "Differentiate character formatting from paragraph formatting with examples.",
      "Explain how tables, headers, footers and page numbers improve a clinical report.",
      "What is mail merge? Describe a nursing situation in which it is useful."
    ],
    assessment: [
      { type: "mcq", q: "In Microsoft Word, related commands are grouped under tabs on the:", options: ["Taskbar", "Ribbon", "Status bar", "Recycle Bin"], answer: 1, rationale: "The ribbon organises commands into tabs such as Home, Insert and Review." },
      { type: "mcq", q: "Changing a word to bold and increasing its point size is an example of:", options: ["Paragraph formatting", "Character (font) formatting", "Page layout", "Mail merge"], answer: 1, rationale: "Font/character formatting affects the appearance of letters and words." },
      { type: "mcq", q: "Adjusting line spacing to double and centring a heading are examples of:", options: ["Character formatting", "Paragraph formatting", "Proofing", "Templates"], answer: 1, rationale: "Alignment and line spacing act on whole paragraphs." },
      { type: "mcq", q: "To locate a repeated term and substitute it throughout a document, you use:", options: ["Track Changes", "Find and Replace", "Mail Merge", "Page Break"], answer: 1, rationale: "Find and Replace searches for text and replaces it wherever it occurs." },
      { type: "mcq", q: "Repeating the ward name and date at the bottom of every page is achieved with a:", options: ["Table", "Footer", "Bullet list", "Comment"], answer: 1, rationale: "Footers place repeating content at the bottom of each page; headers do so at the top." },
      { type: "mcq", q: "The feature that records each edit so a supervisor can review changes is:", options: ["Track Changes", "Find and Replace", "Word Count", "Save As"], answer: 0, rationale: "Track Changes marks insertions and deletions for review." },
      { type: "mcq", q: "Producing many personalised appointment letters from one standard letter and a name list uses:", options: ["Mail merge", "Page break", "Bullet list", "Header"], answer: 0, rationale: "Mail merge combines a template with a data source to generate personalised documents." },
      { type: "mcq", q: "A pre-designed document such as a care-plan form that ensures consistency is a:", options: ["Template", "Shortcut", "Macro", "Footer"], answer: 0, rationale: "Templates provide reusable, standardised document layouts." },
      { type: "mcq", q: "Data best presented in rows and columns within a Word document should use a:", options: ["Bullet list", "Table", "Header", "Text box"], answer: 1, rationale: "Tables organise information into rows and columns, ideal for schedules and charts." },
      { type: "mcq", q: "The most reliable safeguard against losing work while typing a long report is to:", options: ["Increase the font size", "Save frequently", "Add a header", "Use bold text"], answer: 1, rationale: "Saving often prevents loss of work from crashes or power failure." }
      , { type: "fill", q: "The feature that combines a standard letter with a list of recipients to create personalised copies is ____.", accept: ["mail merge"], rationale: "Mail merge merges a main document with a data source." },
      { type: "fill", q: "Repeating text placed at the top of every page is called a ____.", accept: ["header"], rationale: "A header appears at the top of each page; a footer at the bottom." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "ict-06-msexcel",
    unit: "Unit 4 · Office Applications for Nursing",
    title: "MS Excel — Spreadsheets for Nursing Data",
    readMinutes: 18,
    summary: "Using Microsoft Excel to record, calculate and analyse nursing data: workbooks, worksheets, cells and references; entering data and formatting; formulas and operators; essential functions (SUM, AVERAGE, MAX, MIN, COUNT, IF); relative versus absolute references; sorting, filtering and charts; and simple descriptive statistics for clinical audit and research.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a spreadsheet?", p: "A spreadsheet is an electronic worksheet made of a grid of cells arranged in rows and columns, used to store, calculate and analyse numerical and text data. Microsoft Excel is the leading spreadsheet program. Its power is automatic recalculation: when a value changes, every formula that depends on it updates instantly — ideal for maintaining vital-sign logs, drug-stock counts, duty rosters, budgets and audit data." },
      { h: "Workbooks, worksheets and cells", p: "An Excel file is a workbook, which contains one or more worksheets (tabbed sheets). Each worksheet is a grid: columns are labelled with letters (A, B, C...) and rows with numbers (1, 2, 3...). The intersection of a column and a row is a cell, identified by its cell reference or address (for example B4). A rectangular block of cells is a range, written as B4:B20. The active cell is the currently selected one where entry occurs." },
      { h: "Entering and formatting data", list: [
        "Cells can hold three kinds of entry: labels (text), values (numbers/dates) and formulas.",
        "Number formats — general, number, currency, percentage, date/time — control how values display.",
        "Adjust column width and row height so data is fully visible.",
        "Alignment, borders, shading and cell merging improve readability.",
        "Use headings and freeze panes to keep column titles visible while scrolling long patient lists."
      ] },
      { h: "Formulas and operators", p: "A formula is an expression that calculates a result and always begins with an equals sign (=). Formulas use cell references rather than fixed numbers so results update automatically. The arithmetic operators are + (add), - (subtract), * (multiply), / (divide) and ^ (power), evaluated in the standard order of operations (brackets first, then powers, then multiply/divide, then add/subtract). For example, =A2+B2 adds two cells, and =(A2+B2+C2)/3 averages three." },
      { h: "Essential functions", p: "A function is a built-in, pre-written formula. Common ones for nursing data include:", list: [
        "SUM — adds a range, e.g. =SUM(B2:B31) totals a month of admissions.",
        "AVERAGE — the arithmetic mean, e.g. =AVERAGE(C2:C31) for mean daily temperature.",
        "MAX and MIN — the highest and lowest values in a range.",
        "COUNT and COUNTA — count cells containing numbers, or any entries.",
        "COUNTIF — counts cells meeting a condition, e.g. patients with a fever.",
        "IF — returns one result if a condition is true and another if false, e.g. =IF(D2>37.5,\"Fever\",\"Normal\")."
      ], figure: {
        caption: "An Excel formula uses cell references and functions; changing a value recalculates the result automatically.",
        svg: '<svg viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Excel grid with a SUM formula."><rect x="20" y="20" width="70" height="26" fill="#0F4C3A"/><text x="55" y="38" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7" font-weight="700">A</text><rect x="90" y="20" width="90" height="26" fill="#0F4C3A"/><text x="135" y="38" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7" font-weight="700">B (Admissions)</text><rect x="20" y="46" width="70" height="24" fill="#F0FDF4" stroke="#15803D"/><text x="55" y="63" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Mon</text><rect x="90" y="46" width="90" height="24" fill="#F0FDF4" stroke="#15803D"/><text x="135" y="63" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">8</text><rect x="20" y="70" width="70" height="24" fill="#F0FDF4" stroke="#15803D"/><text x="55" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Tue</text><rect x="90" y="70" width="90" height="24" fill="#F0FDF4" stroke="#15803D"/><text x="135" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">6</text><rect x="20" y="94" width="70" height="24" fill="#DCFCE7" stroke="#15803D"/><text x="55" y="111" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Total</text><rect x="90" y="94" width="90" height="24" fill="#22C55E" stroke="#0F4C3A"/><text x="135" y="111" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">14</text><rect x="210" y="60" width="290" height="40" rx="6" fill="#F0FDF4" stroke="#15803D" stroke-width="1.5"/><text x="355" y="85" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#0F4C3A" font-weight="700">=SUM(B2:B3)  &#8594;  14</text></svg>'
      } },
      { h: "Relative and absolute references", p: "When a formula is copied to other cells, a relative reference (like B2) automatically adjusts to the new position — very useful for repeating a calculation down a column. An absolute reference, marked with dollar signs (like $B$2), stays fixed when copied — used when every row must refer to one constant, such as a single unit price or a conversion factor. Mixed references (B$2 or $B2) lock only the row or only the column. Choosing correctly prevents calculation errors in audit sheets." },
      { h: "Sorting, filtering and charts", list: [
        "Sort — arrange rows in ascending or descending order (for example, patients by age or by ward).",
        "Filter — display only rows meeting a criterion (for example, only readmissions), hiding the rest.",
        "Charts — turn numbers into visuals: column/bar charts to compare categories, line charts to show trends over time, and pie charts to show proportions of a whole.",
        "Conditional formatting — automatically colour cells that meet a rule, such as highlighting abnormal results."
      ] },
      { h: "Simple statistics and clinical audit", p: "Excel supports the descriptive statistics used in nursing audit and research. Measures of central tendency (mean via AVERAGE, median via MEDIAN, mode via MODE) summarise typical values, while range (MAX minus MIN) and standard deviation (STDEV) describe spread. Percentages, counts and frequency tables help present audit findings, and charts make results accessible to a clinical team. Nurses must still interpret results in context and guard confidentiality when handling patient datasets." }
    ],
    references: REF_ICT,
    examQuestions: [
      "Define a spreadsheet and explain the terms workbook, worksheet, cell and range.",
      "Explain how formulas use operators and the order of operations, with examples.",
      "Describe the functions SUM, AVERAGE, MAX, MIN, COUNT and IF with nursing examples.",
      "Differentiate relative from absolute cell references and explain when each is used.",
      "How can Excel support clinical audit through sorting, filtering, charts and descriptive statistics?"
    ],
    assessment: [
      { type: "mcq", q: "Every Excel formula must begin with the symbol:", options: ["=", "+", "@", "#"], answer: 0, rationale: "A formula always starts with an equals sign, signalling Excel to calculate." },
      { type: "mcq", q: "The intersection of a column and a row in a worksheet is a:", options: ["Range", "Cell", "Chart", "Sheet"], answer: 1, rationale: "A cell is one column-row intersection, identified by its reference such as B4." },
      { type: "mcq", q: "Which function returns the arithmetic mean of a range?", options: ["SUM", "COUNT", "AVERAGE", "MAX"], answer: 2, rationale: "AVERAGE calculates the mean; SUM adds, COUNT counts, MAX finds the highest value." },
      { type: "mcq", q: "The reference $B$2 is a(n):", options: ["Relative reference", "Absolute reference", "Range name", "Mixed row only"], answer: 1, rationale: "Dollar signs on both the column and row make it absolute, so it does not change when copied." },
      { type: "mcq", q: "To display only patients who are readmissions while hiding others, you would use:", options: ["Sort", "Merge", "Freeze panes", "Filter"], answer: 3, rationale: "Filtering shows only rows meeting a chosen criterion." },
      { type: "mcq", q: "The best chart to show a trend in daily admissions over a month is a:", options: ["Pie chart", "Line chart", "Column chart of one value", "Doughnut chart"], answer: 1, rationale: "Line charts display changes and trends over time effectively." },
      { type: "mcq", q: "=IF(D2>37.5,\"Fever\",\"Normal\") will display 'Fever' when:", options: ["D2 is blank", "D2 equals 37.5", "D2 is greater than 37.5", "D2 is text"], answer: 2, rationale: "The IF condition D2>37.5 is true only when the value exceeds 37.5, returning 'Fever'." },
      { type: "mcq", q: "A rectangular block of cells such as B4:B20 is called a:", options: ["Range", "Function", "Workbook", "Label"], answer: 0, rationale: "A range is a group of adjacent cells specified by its first and last cell." },
      { type: "mcq", q: "The key advantage of a spreadsheet over a paper table is:", options: ["It cannot be edited", "Automatic recalculation when values change", "It prevents charts", "It stores only text"], answer: 1, rationale: "Dependent formulas update instantly when a value changes, saving effort and reducing error." },
      { type: "mcq", q: "The spread of a set of values is best described by the range and the:", options: ["Mean", "Median", "Standard deviation", "Mode"], answer: 2, rationale: "Standard deviation measures dispersion around the mean; the others are measures of central tendency." }
      , { type: "fill", q: "A reference that stays fixed when a formula is copied, written with dollar signs, is a(n) ____ reference.", accept: ["absolute"], rationale: "Absolute references such as $B$2 do not adjust when copied." },
      { type: "fill", q: "The Excel function that adds all the numbers in a range is ____.", accept: ["sum", "=sum"], rationale: "SUM totals the values in the specified range." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "ict-07-powerpoint",
    unit: "Unit 4 · Office Applications for Nursing",
    title: "MS PowerPoint — Presentations for Nursing Education",
    readMinutes: 16,
    summary: "Using Microsoft PowerPoint to design and deliver effective presentations: slides, layouts and themes; adding and formatting text, images, tables and charts; slide master and design consistency; transitions and animations; speaker notes and views; the slide show; and principles of clear, evidence-based presentation for patient and staff education.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is presentation software?", p: "Presentation software creates a sequence of electronic slides to support a spoken talk. Microsoft PowerPoint is the most widely used. Slides combine text, images, tables, charts, audio and video, projected to an audience. In nursing it is used for health education sessions, in-service training, case presentations, seminars and conference talks, where clear visuals reinforce the spoken message." },
      { h: "Slides, layouts and themes", p: "A presentation is a file of slides, each built from placeholders arranged by a layout (for example Title Slide, Title and Content, Two Content, Blank). A theme applies a coordinated set of colours, fonts and background across all slides, giving a consistent, professional look with minimal effort. Choosing a legible font and a high-contrast colour scheme is essential so slides remain readable at the back of a room." },
      { h: "Adding and formatting content", list: [
        "Text — entered in placeholders and formatted like Word (font, size, bold, colour, bullets).",
        "Images and clip art — illustrate concepts; use relevant, good-quality pictures and respect copyright and patient consent.",
        "Tables and charts — present data clearly; charts can be created in or pasted from Excel.",
        "SmartArt, shapes and diagrams — depict processes, cycles and hierarchies such as a care pathway.",
        "Audio and video — embed clips for demonstration, used sparingly.",
        "Header/footer, slide numbers and date — add reference information to each slide."
      ] },
      { h: "The slide master and consistency", p: "The Slide Master is a top-level slide that controls the formatting of all slides based on it. Editing the master — for example placing an institutional logo, setting the title font, or fixing the background — changes every slide at once, ensuring consistency and saving time. This professional feature is important for branded teaching materials and standardised departmental templates." },
      { h: "Transitions and animations", list: [
        "Transitions — visual effects between one slide and the next (for example Fade or Push).",
        "Animations — effects applied to objects within a slide, revealing points one at a time to control pacing.",
        "Timing — animations can be triggered on click or automatically.",
        "Restraint — overuse of flashy effects distracts from the message; simple, purposeful animation aids learning."
      ], figure: {
        caption: "A presentation is an ordered sequence of slides delivered as a slide show to an audience.",
        svg: '<svg viewBox="0 0 540 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sequence of presentation slides."><defs><marker id="ictArr7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="40" width="110" height="72" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Slide 1</text><text x="75" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">Title</text><rect x="160" y="40" width="110" height="72" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="215" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Slide 2</text><text x="215" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">Content</text><rect x="300" y="40" width="110" height="72" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="355" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Slide 3</text><text x="355" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">Chart</text><rect x="440" y="40" width="80" height="72" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="480" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Show</text><line x1="130" y1="76" x2="156" y2="76" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr7)"/><line x1="270" y1="76" x2="296" y2="76" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr7)"/><line x1="410" y1="76" x2="436" y2="76" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr7)"/></svg>'
      } },
      { h: "Views, speaker notes and running the show", list: [
        "Normal view — for editing individual slides.",
        "Slide Sorter view — to reorder and organise slides.",
        "Notes view — to add speaker notes visible only to the presenter.",
        "Reading/Slide Show view — to deliver the presentation full screen.",
        "Presenter View — shows notes, timer and the next slide on the presenter's screen.",
        "Navigate with arrow keys or clicks; press Esc to end; F5 starts from the beginning."
      ] },
      { h: "Principles of effective presentation design", list: [
        "One main idea per slide; keep text concise (avoid dense paragraphs).",
        "Use the 'less is more' rule — bullet key points, then explain aloud.",
        "Large, legible fonts and high contrast for readability.",
        "Consistent theme, alignment and colour throughout.",
        "Use visuals and data charts to reinforce, not decorate.",
        "Cite sources and use evidence-based content, especially for patient education.",
        "Rehearse timing and check equipment before delivery."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Define presentation software and state its uses in nursing education.",
      "Explain slides, layouts and themes, and how the Slide Master ensures consistency.",
      "Differentiate transitions from animations and discuss their appropriate use.",
      "Describe the different views in PowerPoint and the purpose of speaker notes.",
      "List and justify the principles of designing an effective health-education presentation."
    ],
    assessment: [
      { type: "mcq", q: "A coordinated set of colours, fonts and backgrounds applied across all slides is a:", options: ["Layout", "Theme", "Transition", "Placeholder"], answer: 1, rationale: "A theme gives a consistent, professional appearance to the whole presentation." },
      { type: "mcq", q: "The slide that controls the formatting of all slides based on it is the:", options: ["Title slide", "Slide Sorter", "Slide Master", "Notes page"], answer: 2, rationale: "Editing the Slide Master changes formatting on every slide at once." },
      { type: "mcq", q: "An effect applied between one slide and the next is a:", options: ["Animation", "Transition", "Theme", "Layout"], answer: 1, rationale: "Transitions occur between slides; animations act on objects within a slide." },
      { type: "mcq", q: "An effect that reveals a bullet point within a single slide is a(n):", options: ["Transition", "Template", "Footer", "Animation"], answer: 3, rationale: "Animations control the appearance and movement of objects on a slide." },
      { type: "mcq", q: "The view that shows the presenter's notes, a timer and the next slide is:", options: ["Normal view", "Presenter View", "Slide Sorter", "Reading view"], answer: 1, rationale: "Presenter View gives the speaker private cues while the audience sees only the slide." },
      { type: "mcq", q: "The key that starts a slide show from the beginning is:", options: ["F1", "F5", "Esc", "Tab"], answer: 1, rationale: "F5 begins the slide show; Esc ends it." },
      { type: "mcq", q: "A core principle of good slide design is:", options: ["Fill each slide with dense text", "Use as many animations as possible", "One main idea per slide with concise points", "Avoid all images"], answer: 2, rationale: "Concise, single-idea slides support comprehension; the speaker elaborates aloud." },
      { type: "mcq", q: "To reorder slides quickly, the most convenient view is:", options: ["Slide Sorter view", "Notes view", "Reading view", "Backstage view"], answer: 0, rationale: "Slide Sorter displays thumbnails for easy reordering and organisation." },
      { type: "mcq", q: "When using a patient's photograph in a teaching presentation, the nurse must first ensure:", options: ["A large font", "Consent and copyright compliance", "A pie chart", "An animation"], answer: 1, rationale: "Patient consent and copyright/confidentiality must be respected when using images." },
      { type: "mcq", q: "SmartArt and diagrams in PowerPoint are best used to:", options: ["Hide the content", "Replace the speaker", "Increase file errors", "Depict processes such as a care pathway"], answer: 3, rationale: "SmartArt visually represents processes, cycles and hierarchies to aid understanding." }
      , { type: "fill", q: "The top-level slide that governs the design of all slides based on it is the ____ ____.", accept: ["slide master"], rationale: "The Slide Master controls consistent formatting across the presentation." },
      { type: "fill", q: "A visual effect that occurs when moving from one slide to the next is called a ____.", accept: ["transition"], rationale: "Transitions play between slides, whereas animations act on objects within a slide." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "ict-08-internet-network",
    unit: "Unit 5 · Internet, Networking & Communication",
    title: "The Internet, Networking & the World Wide Web",
    readMinutes: 17,
    summary: "Computer networks and their types (LAN, MAN, WAN); network topologies and transmission media; the internet as a network of networks; how data travels (packets, TCP/IP, IP addresses); the World Wide Web, browsers, URLs and hyperlinks; connection methods and bandwidth; and network security relevant to health-care settings.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a computer network?", p: "A computer network is two or more computers and devices linked together to share data, resources (printers, storage) and communication. Networking underpins modern health care: it lets an EHR be viewed at every workstation, connects laboratories to wards, and enables e-mail and telemedicine. The benefits are resource sharing, communication, centralised data and backup, and cost efficiency." },
      { h: "Types of network by size", list: [
        "LAN (Local Area Network) — covers a small area such as a ward, department or building.",
        "MAN (Metropolitan Area Network) — spans a city, for example linking hospitals in one region.",
        "WAN (Wide Area Network) — spans large distances, countries or continents; the internet is the largest WAN.",
        "PAN (Personal Area Network) — very short range around one person, e.g. Bluetooth devices.",
        "Intranet — a private network within an organisation using internet technology; Extranet extends limited access to outside partners."
      ] },
      { h: "Topologies and transmission media", p: "The topology is the arrangement of devices on a network — common forms are star (all devices connect to a central switch, the usual choice in hospitals), bus, ring and mesh. Data travels over transmission media, either wired (twisted-pair Ethernet cable, coaxial, or high-speed fibre-optic) or wireless (Wi-Fi radio, Bluetooth, cellular, microwave). Fibre offers the greatest speed and reliability for backbone links carrying imaging and record data." },
      { h: "The internet: a network of networks", p: "The internet is a vast global system of interconnected networks that communicate using common rules (protocols). No single owner controls it. It provides services including the World Wide Web, e-mail, file transfer, video calling and cloud computing. For nursing it opens access to evidence, guidelines, continuing education and communication far beyond the local hospital.", figure: {
        caption: "The internet connects many local networks worldwide through routers and a shared protocol (TCP/IP).",
        svg: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Local networks connected through the internet cloud."><ellipse cx="260" cy="100" rx="90" ry="52" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2.5"/><text x="260" y="98" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">INTERNET</text><text x="260" y="116" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">(TCP/IP)</text><rect x="20" y="20" width="110" height="40" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Hospital LAN</text><rect x="390" y="20" width="110" height="40" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="445" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">University LAN</text><rect x="20" y="150" width="110" height="40" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="175" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Clinic LAN</text><rect x="390" y="150" width="110" height="40" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="445" y="175" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Home PC</text><line x1="130" y1="45" x2="185" y2="80" stroke="#15803D" stroke-width="2"/><line x1="390" y1="45" x2="335" y2="80" stroke="#15803D" stroke-width="2"/><line x1="130" y1="165" x2="185" y2="120" stroke="#15803D" stroke-width="2"/><line x1="390" y1="165" x2="335" y2="120" stroke="#15803D" stroke-width="2"/></svg>'
      } },
      { h: "How data travels: packets, TCP/IP and IP addresses", p: "Before transmission, data is broken into small units called packets, each labelled with source and destination. The TCP/IP protocol suite governs the process: IP (Internet Protocol) addresses and routes packets, while TCP (Transmission Control Protocol) ensures they arrive complete and in order, reassembling them at the destination. Every device has a unique IP address; because numeric addresses are hard to remember, the Domain Name System (DNS) translates readable names (like who.int) into IP addresses." },
      { h: "The World Wide Web, browsers and URLs", p: "The World Wide Web (WWW) is a service running on the internet: a huge collection of linked documents (web pages) written in HTML and stored on web servers. It is not the same as the internet, which is the underlying network. A web browser (Chrome, Edge, Firefox) is the program that requests and displays web pages. Each page has a unique address, its URL (Uniform Resource Locator), for example https://www.who.int; the parts include the protocol (https), the domain name, and the path. Hyperlinks connect pages, letting the user move between resources with a click. Websites end in domain types such as .org, .gov, .edu and .com, which give a clue to the source's nature." },
      { h: "Connecting to the internet and bandwidth", list: [
        "Connection types — broadband (DSL, fibre, cable), mobile data (3G/4G/5G), Wi-Fi and satellite.",
        "An Internet Service Provider (ISP) supplies the connection.",
        "Bandwidth is the data-carrying capacity, measured in bits per second (Mbps/Gbps); higher bandwidth transfers large files, such as radiology images, faster.",
        "A router/modem links the local network to the ISP.",
        "Reliable connectivity is critical for real-time clinical systems and telemedicine."
      ] },
      { h: "Network security in health care", list: [
        "Firewalls control traffic entering and leaving the network.",
        "Encryption (for example HTTPS) protects data in transit.",
        "Strong authentication and access control limit who can view patient data.",
        "Anti-malware and timely patching defend against attacks such as ransomware.",
        "Virtual Private Networks (VPN) secure remote access.",
        "Staff awareness of phishing and safe use is a vital human safeguard."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Define a computer network and classify networks by size (LAN, MAN, WAN).",
      "Explain network topologies and transmission media used in a hospital.",
      "Describe how data travels over the internet using packets, TCP/IP and IP addresses.",
      "Differentiate the internet from the World Wide Web, and explain URLs and hyperlinks.",
      "Discuss the measures used to secure a health-care network."
    ],
    assessment: [
      { type: "mcq", q: "A network that covers a small area such as a single ward or building is a:", options: ["WAN", "LAN", "MAN", "Internet"], answer: 1, rationale: "A Local Area Network (LAN) spans a small area like a department or building." },
      { type: "mcq", q: "The largest example of a Wide Area Network (WAN) is the:", options: ["Intranet", "Internet", "LAN", "PAN"], answer: 1, rationale: "The internet is a global WAN connecting networks worldwide." },
      { type: "mcq", q: "The protocol pair that addresses, routes and reliably delivers internet data is:", options: ["HTTP/HTML", "TCP/IP", "URL/DNS", "LAN/WAN"], answer: 1, rationale: "TCP ensures complete, ordered delivery while IP addresses and routes the packets." },
      { type: "mcq", q: "Data is broken into small labelled units for transmission called:", options: ["Packets", "Pixels", "Cells", "Bits only"], answer: 0, rationale: "Packets carry source and destination information and are reassembled at the destination." },
      { type: "mcq", q: "The system that translates a readable name like who.int into an IP address is the:", options: ["URL", "DNS", "HTTP", "ISP"], answer: 1, rationale: "The Domain Name System maps domain names to numeric IP addresses." },
      { type: "mcq", q: "The World Wide Web differs from the internet in that the Web is:", options: ["The physical network of cables", "A service of linked documents running on the internet", "An IP address", "A type of router"], answer: 1, rationale: "The internet is the underlying network; the Web is a service of hyperlinked pages on it." },
      { type: "mcq", q: "The unique address of a web page, such as https://www.who.int, is its:", options: ["URL", "DNS", "LAN", "IP mask"], answer: 0, rationale: "A URL (Uniform Resource Locator) is the full address of a web resource." },
      { type: "mcq", q: "In hospitals, the most common network topology connecting devices to a central switch is:", options: ["Bus", "Ring", "Star", "Mesh"], answer: 2, rationale: "Star topology links each device to a central switch, easy to manage and fault-isolate." },
      { type: "mcq", q: "The data-carrying capacity of a connection, measured in Mbps, is called:", options: ["Latency", "Bandwidth", "Topology", "Protocol"], answer: 1, rationale: "Bandwidth is the rate at which data can be transmitted; higher bandwidth moves large files faster." },
      { type: "mcq", q: "A key network safeguard that secures remote access to hospital systems is a:", options: ["Pie chart", "VPN", "Bar code", "Slide Master"], answer: 1, rationale: "A Virtual Private Network encrypts remote connections to protect patient data." }
      , { type: "fill", q: "A private organisational network built with internet technology for internal use is called an ____.", accept: ["intranet"], rationale: "An intranet is internal; an extranet extends limited access to outside partners." },
      { type: "fill", q: "The program used to request and display web pages is a web ____.", accept: ["browser"], rationale: "Browsers such as Chrome or Edge retrieve and render web pages." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "ict-09-email-evidence",
    unit: "Unit 5 · Internet, Networking & Communication",
    title: "Email, Web Searching & Finding Evidence",
    readMinutes: 17,
    summary: "Professional use of electronic mail; search engines and effective search strategies; using Boolean operators and keywords; health and nursing databases (PubMed, CINAHL, Cochrane) for evidence-based practice; critically evaluating online information for reliability; and safe, ethical, professional conduct online.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Electronic mail (email)", p: "Email is the exchange of digital messages between users over a network, one of the internet's most used services. A message can carry text and attachments (documents, images) and reach a recipient anywhere within seconds. An email address has the form username@domain (for example, nurse@hospital.org): the part before the @ identifies the user, and the part after names the mail server's domain. Email supports professional communication, referrals, receiving journal alerts and submitting assignments." },
      { h: "Using email professionally", list: [
        "To, Cc (carbon copy) and Bcc (blind copy) direct a message to primary and secondary recipients.",
        "Use a clear, specific subject line and a courteous, professional tone.",
        "Attach files where needed, but avoid sending identifiable patient data by ordinary email unless secure and permitted.",
        "Reply, Reply All (use with care) and Forward manage conversations.",
        "Keep messages concise, check before sending, and proofread.",
        "Be alert to spam and phishing; never open suspicious attachments or links."
      ] },
      { h: "Search engines and how they work", p: "A search engine (such as Google or Bing) is a website that indexes billions of web pages and returns a ranked list of results matching the user's query. It uses automated programs (crawlers) to index pages and ranking algorithms to order results by relevance. Understanding that results are ranked by relevance and popularity — not by accuracy — is essential; a top result is not automatically trustworthy." },
      { h: "Effective search strategies", list: [
        "Choose precise keywords rather than long sentences; use the important terms.",
        "Enclose exact phrases in quotation marks, e.g. \"pressure ulcer prevention\".",
        "Use Boolean operators: AND narrows (both terms), OR broadens (either term), NOT excludes a term.",
        "Add filters or advanced search to limit by date, file type or site.",
        "Use synonyms and alternative spellings to widen a search.",
        "Refine iteratively — review results and adjust keywords."
      ], figure: {
        caption: "Boolean operators shape a search: AND narrows, OR broadens, NOT excludes.",
        svg: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boolean operators AND, OR, NOT."><circle cx="70" cy="70" r="34" fill="#DCFCE7" stroke="#15803D" stroke-width="2" opacity="0.85"/><circle cx="105" cy="70" r="34" fill="#22C55E" stroke="#0F4C3A" stroke-width="2" opacity="0.55"/><text x="88" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">AND (both)</text><circle cx="230" cy="70" r="34" fill="#22C55E" stroke="#0F4C3A" stroke-width="2" opacity="0.6"/><circle cx="265" cy="70" r="34" fill="#22C55E" stroke="#0F4C3A" stroke-width="2" opacity="0.6"/><text x="247" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">OR (either)</text><circle cx="400" cy="70" r="34" fill="#22C55E" stroke="#0F4C3A" stroke-width="2" opacity="0.7"/><circle cx="435" cy="70" r="34" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="415" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">NOT (exclude)</text></svg>'
      } },
      { h: "Health and nursing databases for evidence", p: "For evidence-based practice, nurses should search dedicated health databases rather than rely on general web pages.", list: [
        "PubMed / MEDLINE — free access to biomedical and nursing literature abstracts.",
        "CINAHL — the Cumulative Index to Nursing and Allied Health Literature, focused on nursing.",
        "Cochrane Library — high-quality systematic reviews summarising the best evidence.",
        "WHO, national ministries and professional bodies — trustworthy guidelines and statistics.",
        "Google Scholar — academic search across scholarly literature.",
        "Use of medical subject headings (MeSH) and controlled vocabulary sharpens database searches."
      ] },
      { h: "Critically evaluating online information", p: "Not all online information is accurate; the nurse must appraise sources before using them. Useful criteria are often summarised as authority (who wrote it and are they qualified?), accuracy (is it evidence-based and referenced?), objectivity (is there bias or a commercial motive?), currency (is it up to date?), and coverage (is it complete and relevant?). Preference should be given to peer-reviewed journals, recognised professional and government sites, and recent publications over anonymous or commercial pages." },
      { h: "The hierarchy of evidence", p: "When appraising research found online, the strength of evidence matters. From strongest to weakest, the traditional hierarchy runs: systematic reviews and meta-analyses, then randomised controlled trials, then cohort and case-control studies, then case series and reports, and finally expert opinion. Recognising where a source sits in this hierarchy helps the nurse judge how much confidence to place in its conclusions for practice." },
      { h: "Safe, ethical and professional online conduct", list: [
        "Protect confidentiality — never post or transmit identifiable patient information.",
        "Respect copyright — cite and reference sources; do not plagiarise.",
        "Maintain professional boundaries on social media in line with the code of conduct.",
        "Use strong, unique passwords and log out of shared devices.",
        "Verify information from more than one reliable source before acting on it."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Explain the structure of an email address and outline principles of professional email use.",
      "Describe how a search engine works and why a top result is not necessarily reliable.",
      "Explain Boolean operators and other strategies for an effective literature search.",
      "Name key health and nursing databases and explain their role in evidence-based practice.",
      "Discuss the criteria for critically evaluating online health information and the hierarchy of evidence."
    ],
    assessment: [
      { type: "mcq", q: "In the email address nurse@hospital.org, the part after the @ symbol identifies the:", options: ["User's name", "Mail server domain", "Subject line", "Attachment"], answer: 1, rationale: "The portion after @ names the domain of the mail server; the part before it is the username." },
      { type: "mcq", q: "The Boolean operator that NARROWS a search by requiring both terms is:", options: ["OR", "AND", "NOT", "NEAR"], answer: 1, rationale: "AND retrieves only records containing both terms, narrowing the results." },
      { type: "mcq", q: "To search for an exact phrase, you should enclose it in:", options: ["Brackets ( )", "Quotation marks \" \"", "Asterisks *", "Hashes #"], answer: 1, rationale: "Quotation marks make the engine search for the words together as a phrase." },
      { type: "mcq", q: "Which database is dedicated to nursing and allied health literature?", options: ["CINAHL", "YouTube", "Wikipedia", "Google Maps"], answer: 0, rationale: "CINAHL indexes nursing and allied health literature specifically." },
      { type: "mcq", q: "The database best known for high-quality systematic reviews is the:", options: ["Cochrane Library", "Facebook", "Instagram", "A blog"], answer: 0, rationale: "The Cochrane Library publishes rigorous systematic reviews of health interventions." },
      { type: "mcq", q: "Search engines rank results mainly by relevance and popularity, which means the top result is:", options: ["Always the most accurate", "Not necessarily the most reliable", "Peer-reviewed by definition", "Written by an expert"], answer: 1, rationale: "Ranking reflects relevance/popularity, not verified accuracy, so sources must still be appraised." },
      { type: "mcq", q: "At the top of the traditional hierarchy of evidence sits the:", options: ["Expert opinion", "Case report", "Systematic review / meta-analysis", "Cohort study"], answer: 2, rationale: "Systematic reviews and meta-analyses synthesise studies and provide the strongest evidence." },
      { type: "mcq", q: "A suspicious email asking you to click a link and enter your password is likely:", options: ["A journal alert", "Phishing", "A systematic review", "A mail merge"], answer: 1, rationale: "Phishing tries to trick users into revealing credentials; such links must not be clicked." },
      { type: "mcq", q: "When appraising a website, 'currency' refers to whether the information is:", options: ["Free of charge", "Up to date", "Written in English", "Colourful"], answer: 1, rationale: "Currency assesses how recent and up to date the information is." },
      { type: "mcq", q: "The most professional practice when handling patient data online is to:", options: ["Post it to get quick advice", "Never transmit identifiable patient information insecurely", "Email it to yourself for backup", "Share it on social media"], answer: 1, rationale: "Confidentiality requires that identifiable patient data is never shared or sent insecurely." }
      , { type: "fill", q: "The Boolean operator that BROADENS a search by retrieving either term is ____.", accept: ["or"], rationale: "OR returns records containing either keyword, widening the results." },
      { type: "fill", q: "Sending a copy of an email to a recipient hidden from the others uses the ____ field.", accept: ["bcc", "blind carbon copy"], rationale: "Bcc (blind carbon copy) hides that recipient from the other addressees." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "ict-10-informatics-ehr",
    unit: "Unit 6 · Health Informatics & the EHR",
    title: "Nursing Informatics & the Electronic Health Record",
    readMinutes: 18,
    summary: "Nursing informatics as a specialty; health, medical and nursing information systems; the electronic health record (EHR) and its components and benefits; standardised nursing languages and classifications; data quality, interoperability and standards; and the legal, ethical and confidentiality principles governing electronic patient data.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nursing informatics as a specialty", p: "Nursing informatics is a recognised specialty that integrates nursing science with information and computer science to manage and communicate data, information, knowledge and wisdom in nursing practice. Its goal is to support nurses, patients and other providers in decision-making, improving the quality, safety and efficiency of care. The informatics nurse bridges the clinical and technical worlds, ensuring that systems fit the way nurses actually work." },
      { h: "Health information systems", p: "A health information system is an integrated set of components that collects, stores, processes and communicates health data.", list: [
        "Hospital Information System (HIS) — the overarching system managing clinical and administrative data.",
        "Electronic Health Record (EHR) / Electronic Medical Record (EMR) — the digital patient record.",
        "Nursing Information System (NIS) — supports documentation, care planning and workload.",
        "Clinical Decision Support System (CDSS) — provides alerts, reminders and guidance.",
        "Ancillary systems — laboratory (LIS), radiology/imaging (RIS/PACS) and pharmacy systems.",
        "Computerised Provider Order Entry (CPOE) and e-prescribing reduce transcription errors."
      ] },
      { h: "The electronic health record (EHR)", p: "The EHR is a longitudinal, digital record of a patient's health information, designed to be created, stored, shared and used across different settings. Unlike a single-facility EMR, a true EHR follows the patient across providers. It typically holds demographics, medical history, diagnoses, medications, allergies, immunisations, laboratory and imaging results, nursing assessments and care plans, and progress notes. It replaces fragmented paper charts with a single, accessible, up-to-date source of truth.", figure: {
        caption: "The EHR integrates data from many systems into one shared, longitudinal patient record.",
        svg: '<svg viewBox="0 0 520 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="EHR at the centre receiving data from lab, pharmacy, imaging and nursing."><defs><marker id="ictArr10" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><circle cx="260" cy="105" r="52" fill="#22C55E" stroke="#0F4C3A" stroke-width="2.5"/><text x="260" y="102" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#0F4C3A">EHR</text><text x="260" y="120" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">patient record</text><rect x="20" y="20" width="110" height="36" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="43" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Laboratory</text><rect x="390" y="20" width="110" height="36" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="445" y="43" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Pharmacy</text><rect x="20" y="154" width="110" height="36" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="177" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Imaging (PACS)</text><rect x="390" y="154" width="110" height="36" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="445" y="177" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Nursing notes</text><line x1="130" y1="42" x2="212" y2="86" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ictArr10)"/><line x1="390" y1="42" x2="308" y2="86" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ictArr10)"/><line x1="130" y1="168" x2="212" y2="124" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ictArr10)"/><line x1="390" y1="168" x2="308" y2="124" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ictArr10)"/></svg>'
      } },
      { h: "Benefits and challenges of the EHR", list: [
        "Benefits — legible, complete, always-available records; reduced duplication and errors; decision support and alerts; easier audit, reporting and research; better continuity and coordination of care.",
        "Challenges — high cost and training needs; workflow disruption during implementation; risk of alert fatigue; downtime and technical failure; privacy and security threats; and the need for reliable data entry by clinicians."
      ] },
      { h: "Standardised nursing languages and classifications", p: "For nursing data to be shared, compared and analysed, care must be documented using standardised terminologies rather than free text alone. Recognised nursing classifications include NANDA-I (nursing diagnoses), NIC (Nursing Interventions Classification) and NOC (Nursing Outcomes Classification), often used together as the NNN linkage. Broader clinical terminologies such as SNOMED CT and coding systems like ICD provide a common language across disciplines. Standardised language makes nursing's contribution visible in data and supports evidence, workload measurement and research." },
      { h: "Data quality, standards and interoperability", p: "The value of an EHR depends on data quality — data must be accurate, complete, timely, consistent and relevant, because clinical decisions rest on it. Interoperability is the ability of different systems to exchange and use data meaningfully; it relies on shared standards. Health-data exchange standards such as HL7 and its modern successor FHIR, along with coding standards, allow a laboratory system, pharmacy and EHR to communicate. Without standards, systems become isolated 'silos' that cannot share information safely." },
      { h: "Legal, ethical and confidentiality principles", list: [
        "Confidentiality — patient information must be protected and shared only on a need-to-know basis.",
        "Privacy — patients have a right to control who accesses their health data.",
        "Security safeguards — passwords, role-based access, audit trails and encryption.",
        "Integrity and accountability — accurate records and traceable authorship of entries.",
        "Consent — patients should understand how their data is used.",
        "Legal status — the EHR is a legal document; entries must be truthful, timely and never falsified or deleted improperly.",
        "Access is logged — audit trails record who viewed or changed a record."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Define nursing informatics and describe the role of the informatics nurse.",
      "Describe the main health information systems found in a modern hospital.",
      "What is an EHR? Discuss its components, benefits and challenges.",
      "Explain standardised nursing languages (NANDA-I, NIC, NOC) and why they matter.",
      "Discuss data quality, interoperability standards and the legal-ethical principles governing the EHR."
    ],
    assessment: [
      { type: "mcq", q: "Nursing informatics integrates nursing science with information science and:", options: ["Pharmacology", "Computer science", "Surgery", "Dietetics"], answer: 1, rationale: "Nursing informatics combines nursing, information and computer science to manage nursing data and knowledge." },
      { type: "mcq", q: "A longitudinal digital record designed to follow the patient across different providers is the:", options: ["Paper chart", "EHR", "Spreadsheet", "PACS image"], answer: 1, rationale: "The EHR is a shareable, longitudinal record spanning settings, unlike a single-facility record." },
      { type: "mcq", q: "NANDA-I, NIC and NOC are examples of:", options: ["Operating systems", "Web browsers", "Standardised nursing languages", "Network protocols"], answer: 2, rationale: "They are standardised nursing terminologies for diagnoses, interventions and outcomes." },
      { type: "mcq", q: "The ability of different clinical systems to exchange and use data meaningfully is called:", options: ["Interoperability", "Encryption", "Multitasking", "Compression"], answer: 0, rationale: "Interoperability allows systems to share and correctly interpret data using shared standards." },
      { type: "mcq", q: "A common standard for exchanging health-care data between systems is:", options: ["HTML", "USB", "HL7 / FHIR", "GIF"], answer: 2, rationale: "HL7 and its successor FHIR are messaging standards enabling health-data exchange." },
      { type: "mcq", q: "A system that provides alerts, reminders and drug-interaction warnings is a:", options: ["PACS", "Clinical Decision Support System", "Word processor", "Router"], answer: 1, rationale: "A CDSS delivers guidance and alerts to support safe clinical decisions." },
      { type: "mcq", q: "The record kept in an EHR is legally regarded as:", options: ["An informal note", "Temporary data only", "Marketing material", "A legal document"], answer: 3, rationale: "The EHR is a legal record; entries must be accurate, timely and never improperly altered." },
      { type: "mcq", q: "The most important ethical duty when handling electronic patient data is:", options: ["Speed of typing", "Confidentiality and need-to-know access", "Colour of the screen", "Font choice"], answer: 1, rationale: "Patient data must be kept confidential and accessed only on a legitimate need-to-know basis." },
      { type: "mcq", q: "Repeated, excessive pop-up warnings that clinicians begin to ignore describe:", options: ["Data quality", "Interoperability", "Alert fatigue", "Bandwidth"], answer: 2, rationale: "Alert fatigue is a recognised challenge in which overuse of alerts reduces their effectiveness." },
      { type: "mcq", q: "Which record most accurately allows tracing of who viewed or changed a patient record?", options: ["The Recycle Bin", "The audit trail", "The taskbar", "The clipboard"], answer: 1, rationale: "Audit trails log access and changes, supporting accountability and security." }
      , { type: "fill", q: "The ability of different information systems to exchange and use data meaningfully is called ____.", accept: ["interoperability"], rationale: "Interoperability depends on shared standards such as HL7/FHIR." },
      { type: "fill", q: "The classification of standardised nursing diagnoses is known as ____.", accept: ["nanda", "nanda-i", "nanda international"], rationale: "NANDA-I provides the standardised nursing-diagnosis terminology." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "ict-11-ict-nursing-practice",
    unit: "Unit 6 · Health Informatics & the EHR",
    title: "Applications of ICT in Nursing Practice",
    readMinutes: 17,
    summary: "How ICT is applied across the domains of nursing: clinical documentation and care planning; medication safety and barcode administration; patient monitoring and alarms; telehealth and telenursing; mobile health and point-of-care devices; e-learning and continuing education; and administration, quality improvement and public health, with attention to benefits, limitations and the nurse's responsibilities.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "ICT across the domains of nursing", p: "ICT now supports every domain of nursing — clinical care, education, administration and research. Used well, it improves safety, efficiency, communication and the quality of care; used poorly, it can disrupt workflow, create errors, or distance the nurse from the patient. The competent nurse applies ICT purposefully while keeping the patient, not the technology, at the centre of care." },
      { h: "Clinical documentation and care planning", p: "Electronic documentation replaces or supplements paper charting. Structured templates, drop-down menus and standardised terminologies speed and standardise recording of assessments, care plans, observations and progress notes. Benefits include legibility, completeness, immediate availability to the team, and easier retrieval for audit. The nurse must still document accurately, contemporaneously and thoughtfully, avoiding uncritical copy-paste that can perpetuate errors." },
      { h: "Medication safety and the 'five rights'", p: "ICT strengthens medication safety at every step. Computerised Provider Order Entry (CPOE) removes illegible handwriting; e-prescribing systems check doses and interactions; and barcode medication administration (BCMA) verifies the right patient, right drug, right dose, right route and right time by scanning the patient's wristband and the medication before administration. Automated dispensing cabinets control stock. These tools reduce, but do not eliminate, error — vigilance remains essential.", figure: {
        caption: "Barcode medication administration verifies the 'five rights' by scanning patient and drug before giving.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Barcode medication administration workflow."><defs><marker id="ictArr11" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="50" width="120" height="52" rx="9" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Scan patient</text><text x="75" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">wristband</text><rect x="200" y="50" width="120" height="52" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="260" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Scan drug</text><text x="260" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">system checks</text><rect x="385" y="50" width="120" height="52" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="445" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Five rights</text><text x="445" y="90" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">verified &amp; given</text><line x1="135" y1="76" x2="196" y2="76" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr11)"/><line x1="320" y1="76" x2="381" y2="76" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr11)"/></svg>'
      } },
      { h: "Patient monitoring and alarms", p: "Networked monitors continuously measure vital signs (ECG, heart rate, blood pressure, oxygen saturation, respiration) and feed data directly into the record. Central monitoring lets one nurse observe several patients, and early-warning score systems can flag deterioration automatically. Nurses must respond appropriately, interpret trends in context, and manage alarm fatigue by setting sensible, patient-specific alarm limits so genuine alarms are not missed." },
      { h: "Telehealth and telenursing", p: "Telehealth uses ICT to deliver care and information at a distance. Telenursing includes triage and advice by phone or video, remote monitoring of chronic conditions (for example home blood-pressure or glucose data), virtual follow-up consultations, and specialist support to remote areas. It improves access, especially for rural and mobility-limited patients, and reduces unnecessary travel — but requires reliable connectivity, clear protocols, and attention to privacy and the limits of assessment without physical presence." },
      { h: "Mobile health and point-of-care technology", list: [
        "Mobile devices and tablets bring the record and references to the bedside.",
        "mHealth apps support patient self-management, reminders and education.",
        "Wearable sensors track activity, heart rate and other parameters.",
        "Point-of-care testing devices give rapid results linked to the record.",
        "Clinical reference and drug-calculation apps support safe practice — chosen from reputable, evidence-based sources."
      ] },
      { h: "Education, administration and public health", list: [
        "E-learning, online courses and simulation for pre-registration and continuing professional development.",
        "Access to online journals, guidelines and digital libraries for evidence-based practice.",
        "Rostering, workforce, inventory and billing systems for efficient administration.",
        "Quality dashboards and indicators for clinical governance and audit.",
        "Public-health surveillance, immunisation registries and outbreak tracking that inform community nursing.",
        "Communication tools that coordinate multidisciplinary care."
      ] },
      { h: "Benefits, limitations and the nurse's responsibility", p: "ICT can improve safety, efficiency, access and evidence use, but it carries limitations: cost, training needs, downtime, over-reliance, alert fatigue, privacy risk and the danger of eroding human contact. The nurse's responsibilities are to use systems competently, protect confidentiality, verify computer-generated information with clinical judgement, report failures and safety concerns, and ensure technology supports rather than replaces compassionate, patient-centred care." }
    ],
    references: REF_ICT,
    examQuestions: [
      "Describe how ICT supports clinical documentation and care planning.",
      "Explain how CPOE and barcode medication administration improve medication safety and the 'five rights'.",
      "Discuss telehealth and telenursing, with their benefits and limitations.",
      "Describe the applications of mobile and point-of-care technology in nursing.",
      "Discuss the benefits, limitations and the nurse's responsibilities when using ICT in practice."
    ],
    assessment: [
      { type: "mcq", q: "Barcode medication administration mainly helps the nurse verify the:", options: ["Ward budget", "Five rights of medication", "Network speed", "Font size"], answer: 1, rationale: "Scanning the patient and drug confirms right patient, drug, dose, route and time." },
      { type: "mcq", q: "Computerised Provider Order Entry (CPOE) reduces error primarily by:", options: ["Speeding up typing", "Removing illegible handwriting and checking orders", "Adding charts", "Increasing bandwidth"], answer: 1, rationale: "CPOE eliminates handwriting errors and can check doses and interactions at order entry." },
      { type: "mcq", q: "Delivering nursing triage and advice by phone or video at a distance is:", options: ["Telenursing", "Word processing", "Filtering", "Defragmentation"], answer: 0, rationale: "Telenursing provides remote assessment, advice and monitoring using ICT." },
      { type: "mcq", q: "Setting sensible, patient-specific monitor alarm limits helps prevent:", options: ["Interoperability", "Alarm fatigue", "Encryption", "Multitasking"], answer: 1, rationale: "Appropriate limits reduce false alarms and the desensitisation known as alarm fatigue." },
      { type: "mcq", q: "A recognised risk of uncritical electronic documentation is:", options: ["Better legibility", "Copy-paste perpetuating errors", "Immediate availability", "Standardised terms"], answer: 1, rationale: "Copy-forward without review can carry old or wrong information into new notes." },
      { type: "mcq", q: "A major benefit of telehealth for rural patients is:", options: ["Improved access to care", "Slower connections", "More travel", "Loss of records"], answer: 0, rationale: "Telehealth extends access and reduces unnecessary travel for remote patients." },
      { type: "mcq", q: "Wearable sensors and mHealth apps mainly support:", options: ["Patient self-management and monitoring", "Slide transitions", "Disk defragmentation", "Cable installation"], answer: 0, rationale: "mHealth tools help patients self-manage and enable remote monitoring." },
      { type: "mcq", q: "When a monitor displays a value that seems inconsistent with the patient, the nurse should:", options: ["Accept it without question", "Verify with clinical assessment and judgement", "Ignore the patient", "Delete the record"], answer: 1, rationale: "Computer-generated data must always be checked against clinical judgement and the patient's condition." },
      { type: "mcq", q: "Which is an administrative rather than direct-care application of ICT?", options: ["Barcode drug scanning", "Staff rostering system", "Bedside monitoring", "e-Prescribing"], answer: 1, rationale: "Rostering supports administration; the others directly support patient care." },
      { type: "mcq", q: "The overriding principle when using ICT in nursing is that technology should:", options: ["Replace the nurse", "Support patient-centred, compassionate care", "Reduce documentation to nothing", "Be used without training"], answer: 1, rationale: "ICT is a tool that should enhance, not replace, safe patient-centred nursing care." }
      , { type: "fill", q: "The system that verifies patient and drug by scanning before administration is abbreviated ____.", accept: ["bcma", "barcode medication administration"], rationale: "BCMA confirms the five rights electronically at the bedside." },
      { type: "fill", q: "Delivery of care and health information at a distance using ICT is broadly called ____.", accept: ["telehealth", "telemedicine"], rationale: "Telehealth encompasses remote care, advice and monitoring." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "ict-12-ict-nursing-research",
    unit: "Unit 6 · Health Informatics & the EHR",
    title: "ICT in Nursing Research, Data Analysis & Emerging Trends",
    readMinutes: 17,
    summary: "The role of ICT across the research process: literature searching and reference management; data collection and management; statistical analysis and presentation; databases and big data; scientific writing and dissemination; research ethics and data protection; and emerging trends such as artificial intelligence, big data analytics and the future of digital nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "ICT in the research process", p: "Research is a core professional expectation of degree-level nurses, and ICT supports every stage — from identifying a question to disseminating findings. It makes literature review faster, data collection more accurate, analysis more powerful, and dissemination wider. Understanding these tools enables the nurse to be an intelligent consumer and, in time, a producer of research that improves practice." },
      { h: "Literature searching and reference management", p: "As covered earlier, health databases (PubMed, CINAHL, Cochrane) and academic search tools locate the evidence that underpins a study. Reference-management software such as EndNote, Zotero or Mendeley stores citations, inserts them into a manuscript, and formats the bibliography automatically in a chosen style (for example APA). This saves time, prevents citation errors and helps avoid accidental plagiarism." },
      { h: "Data collection and management", list: [
        "Electronic questionnaires and online survey tools gather data efficiently from many respondents.",
        "Mobile and tablet-based data capture reduces transcription error in fieldwork.",
        "Data extracted from the EHR and clinical registries supports large observational studies.",
        "A well-designed database or spreadsheet with clear variable definitions (a data dictionary) keeps data organised.",
        "Validation rules and double-entry checking improve data accuracy at source."
      ] },
      { h: "Data analysis and statistical software", p: "Once collected, data is analysed with software ranging from spreadsheets (Excel) for descriptive statistics to dedicated statistical packages such as SPSS, R or STATA for inferential analysis. These tools compute measures of central tendency and spread, generate frequency tables, perform tests of significance (for example t-tests, chi-square and correlation), and produce publication-quality tables and charts. The nurse must understand the assumptions and meaning of the tests, not merely run them — statistics support, but do not substitute for, careful interpretation.", figure: {
        caption: "The research data pathway: collect, clean, analyse, and present findings using ICT tools.",
        svg: '<svg viewBox="0 0 540 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Research data pathway from collection to presentation."><defs><marker id="ictArr12" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="40" width="110" height="48" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="65" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Collect</text><rect x="145" y="40" width="110" height="48" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="200" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Clean</text><rect x="280" y="40" width="110" height="48" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="335" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Analyse</text><rect x="415" y="40" width="115" height="48" rx="8" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="472" y="68" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Present</text><line x1="120" y1="64" x2="141" y2="64" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr12)"/><line x1="255" y1="64" x2="276" y2="64" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr12)"/><line x1="390" y1="64" x2="411" y2="64" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ictArr12)"/></svg>'
      } },
      { h: "Databases and big data", p: "A database is an organised, structured collection of data that can be stored, queried and updated efficiently, usually managed by a database management system (DBMS). In health care, clinical databases and registries hold vast volumes of routinely collected data. Big data refers to datasets so large and complex that specialised methods are needed to analyse them; combined with the EHR, it enables research into outcomes, patterns of disease and quality of care on a population scale, informing evidence-based nursing." },
      { h: "Scientific writing and dissemination", list: [
        "Word processors produce structured manuscripts, theses and reports.",
        "Reference managers format citations and bibliographies.",
        "Presentation software supports conference and seminar dissemination.",
        "Online journals and open-access repositories widen the reach of findings.",
        "Plagiarism-detection tools help ensure academic integrity.",
        "Collaboration and cloud tools allow co-authors to work together at a distance."
      ] },
      { h: "Research ethics and data protection", p: "ICT does not change the ethical duties of research; it sharpens some of them. Researchers must obtain informed consent, protect participant confidentiality, and anonymise or de-identify data before analysis and sharing. Electronic data must be stored securely (encryption, access control, secure backup) and used only for the approved purpose. Ethical approval and data-protection compliance are mandatory, and the same confidentiality that governs clinical records governs research data." },
      { h: "Emerging trends and the future of digital nursing", list: [
        "Artificial intelligence and machine learning for risk prediction and decision support.",
        "Big-data analytics and predictive modelling for population health.",
        "Robotics and smart devices supporting care and rehabilitation.",
        "The Internet of Things (IoT) and wearables generating continuous health data.",
        "Cloud computing enabling scalable, shareable systems.",
        "The nurse's evolving role — to use these tools critically and ethically, keeping human care and judgement central."
      ] }
    ],
    references: REF_ICT,
    examQuestions: [
      "Describe how ICT supports each stage of the nursing research process.",
      "Explain the role of reference-management software in academic writing.",
      "Discuss the software used for data collection and statistical analysis in nursing research.",
      "Define a database and big data, and explain their value in health research.",
      "Discuss research ethics and data protection when using ICT, and outline emerging digital trends in nursing."
    ],
    assessment: [
      { type: "mcq", q: "Software such as EndNote, Zotero or Mendeley is used mainly to:", options: ["Monitor vital signs", "Manage citations and format bibliographies", "Scan barcodes", "Run the operating system"], answer: 1, rationale: "Reference managers store citations and format bibliographies automatically, reducing errors." },
      { type: "mcq", q: "For inferential statistical analysis in nursing research, a nurse would most likely use:", options: ["A web browser", "SPSS, R or STATA", "A slide master", "A barcode reader"], answer: 1, rationale: "SPSS, R and STATA are dedicated statistical packages for inferential analysis." },
      { type: "mcq", q: "An organised, structured collection of data managed by a DBMS is a:", options: ["Spreadsheet cell", "Database", "URL", "Transition"], answer: 1, rationale: "A database stores structured data that can be queried and updated efficiently." },
      { type: "mcq", q: "Before analysing or sharing research data, patient identifiers should be:", options: ["Highlighted", "Anonymised / de-identified", "Emailed widely", "Printed"], answer: 1, rationale: "De-identification protects participant confidentiality in research." },
      { type: "mcq", q: "Datasets too large and complex for traditional analysis are referred to as:", options: ["Big data", "Metadata", "Spreadsheets", "Packets"], answer: 0, rationale: "Big data requires specialised methods and, with the EHR, supports population-scale research." },
      { type: "mcq", q: "A document defining each variable and its meaning in a research dataset is a:", options: ["Data dictionary", "Slide master", "Firewall", "Footer"], answer: 0, rationale: "A data dictionary specifies variables and coding, keeping data consistent and clear." },
      { type: "mcq", q: "Tools that check a manuscript for copied text to protect academic integrity are:", options: ["Plagiarism-detection tools", "Antivirus scanners", "Barcode readers", "Routers"], answer: 0, rationale: "Plagiarism-detection software helps ensure originality and academic honesty." },
      { type: "mcq", q: "The correct order of the research data pathway is:", options: ["Present, analyse, collect, clean", "Collect, clean, analyse, present", "Analyse, collect, present, clean", "Clean, present, collect, analyse"], answer: 1, rationale: "Data is collected, cleaned, analysed and then presented." },
      { type: "mcq", q: "An emerging technology increasingly used for clinical risk prediction is:", options: ["Artificial intelligence / machine learning", "Typewriters", "Overhead projectors", "Floppy disks"], answer: 0, rationale: "AI and machine learning are being applied to prediction and decision support in health care." },
      { type: "mcq", q: "The nurse's essential responsibility when using AI and analytics in care is to:", options: ["Accept all outputs blindly", "Apply critical judgement and ethical use", "Stop documenting", "Ignore confidentiality"], answer: 1, rationale: "Emerging tools must be used critically and ethically, with human judgement kept central." }
      , { type: "fill", q: "Software that stores citations and formats the bibliography automatically is called a ____ ____ tool.", accept: ["reference management", "reference manager", "citation management"], rationale: "Reference-management tools such as EndNote and Zotero handle citations and bibliographies." },
      { type: "fill", q: "Removing personal identifiers from data to protect participants is called ____.", accept: ["anonymisation", "anonymization", "de-identification", "deidentification"], rationale: "Anonymisation/de-identification protects confidentiality in research data." }
    ]
  }
];
