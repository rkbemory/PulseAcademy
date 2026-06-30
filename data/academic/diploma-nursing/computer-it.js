/* ============================================================
   Diploma in Nursing · D117 Computer & Information Technology
   — 10 topics. Aligned to the BNMC 2018 syllabus (computer
   fundamentals, office applications, and the internet & health
   informatics for nursing). Grounded in standard texts:
     • Shelly GB, Vermaat ME. Discovering Computers. Cengage Learning.
     • Williams BK, Sawyer SC. Using Information Technology. McGraw-Hill.
     • Hebda T, Czar P. Handbook of Informatics for Nurses &
       Healthcare Professionals. Pearson.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_CIT = [
  "Shelly GB, Vermaat ME. Discovering Computers. Cengage Learning.",
  "Williams BK, Sawyer SC. Using Information Technology. McGraw-Hill.",
  "Hebda T, Czar P. Handbook of Informatics for Nurses & Healthcare Professionals. Pearson."
];

window.Academic.topics["diploma-nursing/computer-it"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "ci-01-intro",
    unit: "Unit 1 · Computer Fundamentals",
    title: "Introduction to Computers & Information Technology",
    readMinutes: 15,
    summary: "What a computer is, the information processing cycle, characteristics of computers, information technology, types of computers, and the role of computers in nursing and health care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a computer?", p: "A computer is an electronic device that accepts data (input), processes it according to a set of stored instructions (a program), produces useful results (output), and can store those results for later use. It does not think for itself — it follows instructions exactly and very quickly." },
      { h: "Data and information", p: "Data are raw, unprocessed facts and figures (for example, a list of patients' temperatures). Information is data that has been processed and organised so that it has meaning and is useful (for example, the average ward temperature, or a list of patients with fever). Turning data into information is the main job of a computer." },
      { h: "The information processing cycle", p: "Every computer works through the same basic cycle: Input → Processing → Output, with Storage supporting the whole process. Data is entered, the processor works on it following the program, and the result is shown or printed; data and results can be stored and retrieved later.", figure: {
        caption: "The information processing cycle: data is input, processed by the CPU, and produced as output, with storage holding data and results.",
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Information processing cycle: input, processing, output, with storage."><defs><marker id="ciArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="20" y="40" width="140" height="60" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="90" y="66" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#7C2D12">INPUT</text><text x="90" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">data entered</text><rect x="210" y="40" width="140" height="60" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="280" y="66" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#7C2D12">PROCESSING</text><text x="280" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">CPU works on data</text><rect x="400" y="40" width="140" height="60" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="470" y="66" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#7C2D12">OUTPUT</text><text x="470" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">results shown</text><line x1="160" y1="70" x2="206" y2="70" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#ciArr1)"/><line x1="350" y1="70" x2="396" y2="70" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#ciArr1)"/><rect x="210" y="150" width="140" height="55" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="280" y="176" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#B45309">STORAGE</text><text x="280" y="195" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#B45309">data &amp; results saved</text><line x1="280" y1="100" x2="280" y2="146" stroke="#B45309" stroke-width="2.5" marker-end="url(#ciArr1)"/></svg>'
      } },
      { h: "Characteristics of a computer", list: [
        "Speed — performs millions of operations per second.",
        "Accuracy — gives correct results if the data and instructions are correct (garbage in, garbage out).",
        "Storage — can store huge amounts of data and recall it.",
        "Automation — once given a program, it works on its own.",
        "Diligence — repeats tasks without tiredness, boredom or loss of accuracy.",
        "Versatility — can do many different kinds of task."
      ] },
      { h: "Information Technology (IT) and ICT", p: "Information Technology (IT) is the use of computers and software to store, process, retrieve and manage information. ICT (Information and Communication Technology) is a wider term that adds communication — networks, the internet, telephones — so that information can be shared between people and places." },
      { h: "Types of computers by size", list: [
        "Supercomputer — extremely fast and powerful (weather forecasting, research).",
        "Mainframe — large computer used by big organisations for many users at once.",
        "Minicomputer / server — medium-sized, serves a network.",
        "Microcomputer (Personal Computer / PC) — used by one person; includes desktops and laptops.",
        "Mobile devices — tablets and smartphones are small, powerful computers."
      ] },
      { h: "Computers in nursing and health care", list: [
        "Electronic health records (EHR) — storing and retrieving patient information.",
        "Patient monitoring — ECG, vital-sign and ICU monitors.",
        "Laboratory, pharmacy and imaging systems.",
        "Drug information databases and clinical decision support.",
        "Education and e-learning, online journals and research.",
        "Administration — rosters, billing, statistics and reporting.",
        "Communication and telemedicine — care and advice at a distance."
      ] },
      { h: "Basic terms", list: [
        "Hardware — the physical parts of the computer you can touch.",
        "Software — the programs (instructions) that tell the hardware what to do.",
        "Program — a set of instructions that performs a task.",
        "User — the person who operates the computer."
      ] }
    ],
    references: REF_CIT,
    examQuestions: [
      "Define a computer. Explain the information processing cycle with a diagram.",
      "List and explain four characteristics of a computer.",
      "Differentiate between data and information with examples.",
      "Describe five uses of computers in nursing and health care.",
      "What is Information Technology? How does ICT differ from IT?"
    ],
    assessment: [
      { type: "mcq", q: "A computer is best defined as an electronic device that processes ____ into ____.", options: ["information; data", "data; information", "hardware; software", "input; programs"], answer: 1, rationale: "A computer takes raw data as input and processes it into meaningful information." },
      { type: "mcq", q: "What is the correct order of the information processing cycle?", options: ["Output → Process → Input", "Process → Input → Output", "Input → Process → Output", "Input → Output → Process"], answer: 2, rationale: "Data is first input, then processed, and the result is produced as output (with storage supporting the cycle)." },
      { type: "mcq", q: "Raw, unprocessed facts and figures are called:", options: ["Information", "Data", "Programs", "Reports"], answer: 1, rationale: "Data are raw facts; once processed and given meaning they become information." },
      { type: "mcq", q: "Which of the following is NOT a characteristic of a computer?", options: ["Speed", "Accuracy", "Emotion", "Diligence"], answer: 2, rationale: "Computers have no feelings or emotion; they only follow instructions." },
      { type: "mcq", q: "IT stands for:", options: ["Internet Technology", "Information Technology", "Integrated Terminal", "Instant Transfer"], answer: 1, rationale: "IT = Information Technology — using computers to store, process and manage information." },
      { type: "mcq", q: "The small general-purpose computer used by one person is a:", options: ["Supercomputer", "Mainframe", "Microcomputer (PC)", "Server"], answer: 2, rationale: "A microcomputer or personal computer (desktop/laptop) is designed for a single user." },
      { type: "mcq", q: "Which is an example of using computers in nursing?", options: ["Electronic health records", "Cooking food", "Cleaning the ward floor", "Lifting a patient"], answer: 0, rationale: "Electronic health records store and retrieve patient information — a core health-care use of computers." },
      { type: "mcq", q: "'Diligence' as a characteristic of a computer means it can:", options: ["Think creatively", "Feel tired after long work", "Repeat tasks without tiredness or boredom", "Make its own decisions"], answer: 2, rationale: "A computer performs repetitive tasks consistently without fatigue or loss of accuracy." },
      { type: "mcq", q: "Compared with IT, the term ICT specifically adds:", options: ["Calculation", "Communication", "Colour", "Cost"], answer: 1, rationale: "ICT = Information and Communication Technology — IT plus communication (networks and the internet)." },
      { type: "mcq", q: "A set of instructions that tells the computer what to do is called a:", options: ["Program", "Monitor", "Keyboard", "Cable"], answer: 0, rationale: "A program (software) is the set of instructions the computer follows." }
      , { type: "fill", q: "The first step of the information processing cycle is ____.", accept: ["input"], rationale: "Data must first be input before it can be processed." }
      , { type: "fill", q: "Raw, unprocessed facts and figures are called ____.", accept: ["data"], rationale: "Processed, meaningful data becomes information." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ci-02-hardware",
    unit: "Unit 1 · Computer Fundamentals",
    title: "Computer Hardware & Devices",
    readMinutes: 16,
    summary: "The physical parts of a computer: input devices, the CPU, memory (RAM and ROM), output devices, secondary storage, and the units used to measure data.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is hardware?", p: "Hardware means the physical parts of the computer — everything you can see and touch. The parts work together in four groups: input devices, the processor (CPU), memory, and output devices, with secondary storage holding data permanently.", figure: {
        caption: "A computer system: input devices feed the CPU (which works with memory), and results go to output devices; storage holds data permanently.",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Block diagram of a computer system."><defs><marker id="ciArr2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="15" y="80" width="120" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="75" y="104" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">INPUT</text><text x="75" y="122" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">keyboard, mouse</text><rect x="210" y="55" width="150" height="105" rx="10" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="285" y="78" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">CPU</text><text x="285" y="96" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Control Unit</text><text x="285" y="111" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">ALU</text><rect x="232" y="120" width="106" height="30" rx="6" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="285" y="139" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">Memory (RAM/ROM)</text><rect x="425" y="80" width="120" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="485" y="104" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">OUTPUT</text><text x="485" y="122" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">monitor, printer</text><line x1="135" y1="107" x2="206" y2="107" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#ciArr2)"/><line x1="360" y1="107" x2="421" y2="107" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#ciArr2)"/><rect x="210" y="195" width="150" height="42" rx="9" fill="#FDE68A" stroke="#B45309" stroke-width="2"/><text x="285" y="214" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#92400E">STORAGE</text><text x="285" y="229" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#92400E">hard disk, SSD, USB</text><line x1="285" y1="160" x2="285" y2="192" stroke="#B45309" stroke-width="2.5" marker-end="url(#ciArr2)"/></svg>'
      } },
      { h: "Input devices", p: "Input devices send data and commands into the computer.", list: [
        "Keyboard — types letters, numbers and commands.",
        "Mouse / touchpad — points, clicks and selects.",
        "Scanner — copies a paper document into the computer.",
        "Microphone — inputs sound.",
        "Webcam / camera — inputs images and video.",
        "Touchscreen — input by touching the screen.",
        "Barcode reader — reads bar codes (used in pharmacy and stores)."
      ] },
      { h: "The processor (CPU)", p: "The Central Processing Unit (CPU) is the 'brain' of the computer; it carries out instructions and calculations. It has two main parts: the Control Unit (CU), which directs operations, and the Arithmetic and Logic Unit (ALU), which performs calculations and comparisons. Processor speed is measured in gigahertz (GHz). The CPU sits on the motherboard, the main circuit board that connects all parts." },
      { h: "Memory: RAM and ROM", list: [
        "RAM (Random Access Memory) — the computer's temporary working memory. It holds the programs and data in current use. RAM is volatile: its contents are lost when the power is switched off.",
        "ROM (Read Only Memory) — permanent memory that stores start-up instructions. ROM is non-volatile: its contents stay even when the power is off."
      ] },
      { h: "Output devices", p: "Output devices show or give out the results of processing.", list: [
        "Monitor (screen) — shows output on screen (soft copy).",
        "Printer — produces output on paper (hard copy).",
        "Speakers / headphones — give out sound.",
        "Projector — shows the screen image on a large surface."
      ] },
      { h: "Secondary storage", p: "Secondary (permanent) storage keeps data even when the computer is off.", list: [
        "Hard Disk Drive (HDD) — large internal storage.",
        "Solid State Drive (SSD) — faster storage with no moving parts.",
        "USB flash drive (pen drive) and memory cards — small portable storage.",
        "CD / DVD — optical discs.",
        "Cloud storage — files kept on internet servers."
      ] },
      { h: "Units of data", p: "Data is measured in bits and bytes. A bit is a single 0 or 1. Eight bits make one byte (one character). Larger units are: Kilobyte (KB) → Megabyte (MB) → Gigabyte (GB) → Terabyte (TB), each about 1,000 times the one before." }
    ],
    references: REF_CIT,
    examQuestions: [
      "Draw and label a block diagram of a computer system.",
      "Differentiate between RAM and ROM.",
      "Name four input devices and four output devices.",
      "What is the CPU? Name and describe its two main parts.",
      "Arrange these in order from smallest to largest: GB, byte, KB, MB, bit, TB."
    ],
    assessment: [
      { type: "mcq", q: "'Hardware' refers to:", options: ["The programs that run on a computer", "The physical parts of the computer", "Data stored on the disk", "Instructions in memory"], answer: 1, rationale: "Hardware is the physical, touchable parts; programs are software." },
      { type: "mcq", q: "The 'brain' of the computer is the:", options: ["Monitor", "CPU", "Keyboard", "Hard disk"], answer: 1, rationale: "The Central Processing Unit (CPU) carries out instructions and calculations." },
      { type: "mcq", q: "RAM is described as ____ memory because its contents are lost when the power is off.", options: ["permanent", "volatile", "read-only", "optical"], answer: 1, rationale: "RAM is volatile temporary working memory; it loses its contents without power." },
      { type: "mcq", q: "One byte is made up of:", options: ["4 bits", "8 bits", "16 bits", "1000 bits"], answer: 1, rationale: "8 bits = 1 byte, which can represent one character." },
      { type: "mcq", q: "Which of these is an input device?", options: ["Monitor", "Printer", "Scanner", "Speaker"], answer: 2, rationale: "A scanner inputs (copies) a document into the computer; the others are output devices." },
      { type: "mcq", q: "Which of these is an output device?", options: ["Keyboard", "Mouse", "Printer", "Microphone"], answer: 2, rationale: "A printer outputs results on paper; the others are input devices." },
      { type: "mcq", q: "ROM is best described as:", options: ["Temporary working memory", "Non-volatile permanent memory", "A type of printer", "A storage cable"], answer: 1, rationale: "ROM (Read Only Memory) is non-volatile and keeps its contents when the power is off." },
      { type: "mcq", q: "Which is the largest unit of data storage?", options: ["Kilobyte (KB)", "Megabyte (MB)", "Gigabyte (GB)", "Terabyte (TB)"], answer: 3, rationale: "Order: KB < MB < GB < TB, so the terabyte is largest." },
      { type: "mcq", q: "The two main parts of the CPU are the control unit and the:", options: ["Random access memory", "Arithmetic and logic unit (ALU)", "Hard disk", "Monitor"], answer: 1, rationale: "The CPU contains the control unit and the arithmetic and logic unit (ALU)." },
      { type: "mcq", q: "Which of the following is a secondary storage device?", options: ["RAM", "CPU", "USB flash drive", "Monitor"], answer: 2, rationale: "A USB flash drive stores data permanently; RAM is temporary memory, not secondary storage." }
      , { type: "fill", q: "Eight bits make one ____.", accept: ["byte"], rationale: "8 bits = 1 byte." }
      , { type: "fill", q: "____ is the temporary working memory that loses its contents when the computer is switched off.", accept: ["ram", "random access memory"], rationale: "RAM is volatile working memory." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ci-03-os-software",
    unit: "Unit 1 · Computer Fundamentals",
    title: "Operating Systems & Software",
    readMinutes: 15,
    summary: "What software is, the difference between system software and application software, the operating system and its functions, common examples, and user interfaces.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is software?", p: "Software is the set of programs (instructions) that tells the hardware what to do. Unlike hardware, software cannot be touched. Without software, a computer is just metal and plastic — the software brings it to life." },
      { h: "Two main types of software", p: "Software is divided into two main groups, which can be shown as layers between the hardware and the user.", figure: {
        caption: "The layers of a computer system: the operating system sits between the hardware and the application software that the user works with.",
        svg: '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Layers: hardware, operating system, applications, user."><rect x="60" y="180" width="340" height="44" rx="8" fill="#FDE68A" stroke="#92400E" stroke-width="2"/><text x="230" y="207" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#92400E">HARDWARE</text><rect x="90" y="128" width="280" height="44" rx="8" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="230" y="150" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">OPERATING SYSTEM</text><text x="230" y="165" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">(system software)</text><rect x="120" y="76" width="220" height="44" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="230" y="98" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">APPLICATION SOFTWARE</text><text x="230" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">Word, Excel, browser</text><circle cx="230" cy="40" r="22" fill="#7C2D12"/><text x="230" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF">USER</text></svg>'
      } },
      { h: "System software", list: [
        "Operating system (OS) — the master control program (see below).",
        "Utility programs — help maintain the computer: antivirus, file manager, disk cleanup, backup tools.",
        "Device drivers — let the OS communicate with hardware such as printers."
      ] },
      { h: "The operating system (OS)", p: "The operating system is the most important system software. It starts when you switch on the computer and acts as the interface between the user and the hardware. It manages all the resources of the computer so that programs can run." },
      { h: "Functions of the operating system", list: [
        "Process / CPU management — decides which task the CPU does and when.",
        "Memory management — allocates memory to programs.",
        "File management — organises, saves and retrieves files.",
        "Device management — controls input/output devices.",
        "Security — passwords and user accounts.",
        "User interface — lets the user interact with the computer."
      ] },
      { h: "Examples of operating systems", list: [
        "Desktop/laptop: Microsoft Windows, macOS, Linux.",
        "Mobile: Android, Apple iOS."
      ] },
      { h: "User interfaces: GUI and CLI", p: "A Graphical User Interface (GUI) lets the user work with pictures, icons, windows and a mouse (for example, Windows). A Command Line Interface (CLI) requires typed commands. GUIs are easier for most users." },
      { h: "Application software", p: "Application software performs specific tasks for the user. Examples: word processors (MS Word), spreadsheets (MS Excel), presentation software (MS PowerPoint), databases, web browsers, media players, and specialised hospital software such as a Hospital Information System (HIS)." },
      { h: "Free / open-source vs proprietary", p: "Proprietary software is owned by a company and usually must be bought (for example, MS Office). Open-source software has its source code freely available so it can be used and modified, often free of charge (for example, Linux, LibreOffice)." },
      { h: "Booting", p: "Booting is the process of starting up the computer and loading the operating system into memory so the computer is ready to use." }
    ],
    references: REF_CIT,
    examQuestions: [
      "Differentiate between system software and application software with examples.",
      "What is an operating system? List five of its functions.",
      "Name three operating systems and three application programs.",
      "What is a GUI? How does it differ from a command line interface?",
      "Define booting and open-source software."
    ],
    assessment: [
      { type: "mcq", q: "Software is best described as:", options: ["The physical parts of a computer", "The set of programs/instructions that tell the hardware what to do", "The screen of the computer", "A storage device"], answer: 1, rationale: "Software is the programs (instructions); hardware is the physical parts." },
      { type: "mcq", q: "The two main types of software are:", options: ["Hardware and firmware", "System software and application software", "Input and output software", "RAM and ROM"], answer: 1, rationale: "Software is divided into system software and application software." },
      { type: "mcq", q: "The operating system is an example of:", options: ["Application software", "System software", "Hardware", "A storage device"], answer: 1, rationale: "The OS is the main system software that manages the computer." },
      { type: "mcq", q: "Which of the following is application software?", options: ["Microsoft Windows", "Linux", "Microsoft Word", "Android"], answer: 2, rationale: "MS Word is an application; the others are operating systems (system software)." },
      { type: "mcq", q: "The main job of an operating system is to:", options: ["Type documents", "Manage the computer's hardware and resources", "Connect to the internet only", "Print pages"], answer: 1, rationale: "The OS manages resources and acts as the interface between user and hardware." },
      { type: "mcq", q: "GUI stands for:", options: ["General User Input", "Graphical User Interface", "Global Usage Index", "Guided Utility Installer"], answer: 1, rationale: "GUI = Graphical User Interface — icons, windows and a mouse." },
      { type: "mcq", q: "Which of the following is an operating system?", options: ["MS Excel", "Windows", "Google Chrome", "VLC Player"], answer: 1, rationale: "Windows is an operating system; the others are application programs." },
      { type: "mcq", q: "Loading the operating system when you switch on the computer is called:", options: ["Booting", "Saving", "Formatting", "Scrolling"], answer: 0, rationale: "Booting is the start-up process that loads the OS into memory." },
      { type: "mcq", q: "Antivirus programs and file managers are examples of:", options: ["Application software", "Utility (system) software", "Hardware", "Web pages"], answer: 1, rationale: "Utilities that maintain the computer are part of system software." },
      { type: "mcq", q: "Open-source software is software whose:", options: ["Source code is freely available and can be modified", "Code is secret and cannot be changed", "Use always costs money", "Files cannot be saved"], answer: 0, rationale: "Open-source means the source code is freely available to use and modify." }
      , { type: "fill", q: "The ____ system manages the computer's hardware and software resources.", accept: ["operating"], rationale: "The operating system manages all resources." }
      , { type: "fill", q: "____ software performs specific tasks for the user, such as writing documents or making calculations.", accept: ["application"], rationale: "Application software does specific user tasks." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ci-04-windows-files",
    unit: "Unit 1 · Computer Fundamentals",
    title: "Windows & File Management",
    readMinutes: 14,
    summary: "Working in the Windows environment, using the mouse, understanding files and folders and their extensions, the main file operations, and basic computer maintenance and safety.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The Windows environment", p: "Microsoft Windows uses a graphical desktop. The main parts are: the desktop (the main screen), icons (small pictures that open programs or files), the taskbar (the bar at the bottom), the Start menu (to find programs), the system tray (clock and small icons), and windows (rectangular frames that can be minimised, maximised or closed)." },
      { h: "Using the mouse", list: [
        "Click (left) — select an item.",
        "Double-click — open an item.",
        "Right-click — open a context (shortcut) menu of options.",
        "Drag and drop — hold the button and move an item."
      ] },
      { h: "Files and file extensions", p: "A file is a collection of related data stored under a name. The file name has two parts: the name and an extension (after the dot) that shows the file type.", figure: {
        caption: "A folder hierarchy: a drive contains folders, which contain files; each file has a name and an extension.",
        svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Folder tree showing a drive, folders and files."><text x="20" y="34" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">💾 Local Disk (C:)</text><line x1="30" y1="44" x2="30" y2="180" stroke="#B45309" stroke-width="2"/><line x1="30" y1="70" x2="55" y2="70" stroke="#B45309" stroke-width="2"/><text x="60" y="75" font-family="sans-serif" font-size="13" fill="#7C2D12">📁 Nursing Notes</text><line x1="75" y1="80" x2="75" y2="150" stroke="#B45309" stroke-width="1.5"/><line x1="75" y1="104" x2="100" y2="104" stroke="#B45309" stroke-width="1.5"/><text x="105" y="109" font-family="sans-serif" font-size="12" fill="#92400E">📄 anatomy.docx</text><line x1="75" y1="132" x2="100" y2="132" stroke="#B45309" stroke-width="1.5"/><text x="105" y="137" font-family="sans-serif" font-size="12" fill="#92400E">📄 duty-roster.xlsx</text><line x1="30" y1="170" x2="55" y2="170" stroke="#B45309" stroke-width="2"/><text x="60" y="175" font-family="sans-serif" font-size="13" fill="#7C2D12">📁 Photos</text></svg>'
      } },
      { h: "Common file extensions", list: [
        ".docx — Microsoft Word document.",
        ".xlsx — Microsoft Excel spreadsheet.",
        ".pptx — Microsoft PowerPoint presentation.",
        ".pdf — Portable Document Format.",
        ".txt — plain text.",
        ".jpg / .png — image files.",
        ".mp4 — video file.",
        ".exe — a program (executable) file."
      ] },
      { h: "Folders", p: "A folder (directory) is a container used to organise files. Folders can hold files and other folders (subfolders). File Explorer is the program used to view drives, folders and files in Windows." },
      { h: "Main file operations", list: [
        "Create / New — make a new file or folder.",
        "Open — open a file to view or edit it.",
        "Save — store changes; Save As — save with a new name or location.",
        "Rename — change a file's name.",
        "Copy — make a duplicate (original stays); Move (Cut & Paste) — shift the file to a new place.",
        "Delete — remove a file (it goes first to the Recycle Bin, from where it can be restored).",
        "Search — find a file by name."
      ] },
      { h: "Saving and organising", p: "Use 'Save As' the first time to give the file a name and choose a folder; after that, 'Save' (Ctrl+S) keeps updating it. Organise files into clearly named folders so they are easy to find. The drive letter (such as C:) and the folders make up the file's path." },
      { h: "Computer maintenance and safety", list: [
        "Install and update antivirus software.",
        "Keep the operating system and programs updated.",
        "Run disk cleanup and delete unnecessary files.",
        "Make regular backups of important files.",
        "Use strong passwords and lock the computer when away."
      ] }
    ],
    references: REF_CIT,
    examQuestions: [
      "Describe the main parts of the Windows desktop.",
      "What is a file extension? Give five examples and what they mean.",
      "Differentiate between 'Copy' and 'Move' (Cut & Paste).",
      "What is the Recycle Bin? What happens when you delete a file?",
      "List five ways to maintain and protect a computer."
    ],
    assessment: [
      { type: "mcq", q: "The bar at the bottom of the Windows screen is the:", options: ["Title bar", "Taskbar", "Scroll bar", "Menu bar"], answer: 1, rationale: "The taskbar runs along the bottom and shows open programs and the Start button." },
      { type: "mcq", q: "The file extension '.xlsx' belongs to a:", options: ["Word document", "Excel spreadsheet", "PowerPoint presentation", "Photo"], answer: 1, rationale: ".xlsx is the extension for a Microsoft Excel spreadsheet." },
      { type: "mcq", q: "When you delete a file in Windows, it is first sent to the:", options: ["Hard disk", "Recycle Bin", "Clipboard", "Start menu"], answer: 1, rationale: "Deleted files go to the Recycle Bin, from where they can be restored." },
      { type: "mcq", q: "A folder is used to:", options: ["Print documents", "Organise and store files", "Connect to the internet", "Run antivirus"], answer: 1, rationale: "A folder is a container that organises files (and other folders)." },
      { type: "mcq", q: "To make a duplicate of a file while keeping the original in place, you use:", options: ["Cut and paste", "Copy and paste", "Delete", "Rename"], answer: 1, rationale: "Copy and paste creates a duplicate; cut and paste moves the file." },
      { type: "mcq", q: "'Save As' is used to:", options: ["Print a file", "Save a file with a new name or in a new location", "Delete a file", "Close the program"], answer: 1, rationale: "Save As lets you save a copy under a different name or location." },
      { type: "mcq", q: "The extension '.docx' indicates a:", options: ["Word document", "Excel file", "Image", "Video"], answer: 0, rationale: ".docx is a Microsoft Word document." },
      { type: "mcq", q: "Right-clicking an item in Windows usually:", options: ["Deletes it", "Opens a context (shortcut) menu", "Prints it", "Renames it automatically"], answer: 1, rationale: "A right-click opens the context menu with relevant options." },
      { type: "mcq", q: "Which protects a computer against viruses?", options: ["A spreadsheet", "Antivirus software", "A printer", "A web browser"], answer: 1, rationale: "Antivirus software detects and removes malicious programs." },
      { type: "mcq", q: "Moving a file from one folder to another is done by:", options: ["Copy and paste", "Cut and paste", "Rename", "Print"], answer: 1, rationale: "Cut and paste removes the file from its original place and puts it in the new one." }
      , { type: "fill", q: "Deleted files in Windows are temporarily stored in the ____ ____, from where they can be restored.", accept: ["recycle bin"], rationale: "The Recycle Bin holds deleted files until it is emptied." }
      , { type: "fill", q: "The type of a file is shown by its ____ (the part after the dot in the file name).", accept: ["extension", "file extension"], rationale: "The extension (e.g. .docx) shows the file type." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ci-05-ms-word",
    unit: "Unit 2 · Office Applications",
    title: "Microsoft Word — Word Processing",
    readMinutes: 15,
    summary: "Word processing with MS Word: the interface, editing text, character and paragraph formatting, inserting tables and pictures, page layout, proofing tools, saving and printing, and useful shortcuts.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is word processing?", p: "Word processing means creating, editing, formatting, saving and printing text documents on a computer. Microsoft Word is the most widely used word processor; its files have the extension .docx." },
      { h: "Uses in nursing", p: "Nurses use Word for assignments, reports, care plans, letters, notices, case studies and project work — anywhere neatly typed and formatted text is needed." },
      { h: "The Word interface", list: [
        "Ribbon — the strip at the top with tabs (Home, Insert, Layout, etc.) and command groups.",
        "Quick Access Toolbar — small toolbar for common commands (save, undo).",
        "Document area — the page where you type.",
        "Cursor (insertion point) — the blinking line showing where text will appear.",
        "Status bar — shows page number and word count."
      ] },
      { h: "Creating and editing text", list: [
        "Type, insert and delete text.",
        "Cut (Ctrl+X), Copy (Ctrl+C) and Paste (Ctrl+V).",
        "Undo (Ctrl+Z) and Redo (Ctrl+Y).",
        "Find and Replace — search for a word and replace it."
      ] },
      { h: "Character (text) formatting", list: [
        "Font type and size.",
        "Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U).",
        "Font colour and text highlight.",
        "Change case (UPPER, lower, Sentence case)."
      ] },
      { h: "Paragraph formatting", list: [
        "Alignment — left, centre, right, or justify (even on both margins).",
        "Line spacing (single, 1.5, double).",
        "Indentation.",
        "Bullets and numbering for lists."
      ] },
      { h: "Inserting items", p: "From the Insert tab you can add tables, pictures, shapes, page numbers, headers and footers (text at the top and bottom of every page), symbols and the date." },
      { h: "Page layout", p: "From the Layout tab you can set margins, orientation (portrait or landscape) and page size." },
      { h: "Proofing, saving and printing", list: [
        "Spelling and grammar check — corrects mistakes; word count counts words.",
        "Save (Ctrl+S) the document as a .docx file; use Save As for a new copy.",
        "Print (Ctrl+P); use Print Preview to check before printing."
      ] }
    ],
    references: REF_CIT,
    examQuestions: [
      "What is word processing? List five tasks you can do in MS Word.",
      "Explain four types of text (character) formatting in Word.",
      "What is the difference between 'left align' and 'justify'?",
      "List five keyboard shortcuts used in MS Word and what they do.",
      "How do you insert a table and a header in a Word document?"
    ],
    assessment: [
      { type: "mcq", q: "Microsoft Word is used mainly for:", options: ["Calculations and charts", "Word processing (documents)", "Making slide shows", "Browsing the internet"], answer: 1, rationale: "Word is a word processor for creating and formatting text documents." },
      { type: "mcq", q: "The default file extension of a Word document is:", options: [".xlsx", ".pptx", ".docx", ".pdf"], answer: 2, rationale: "Word documents are saved with the .docx extension." },
      { type: "mcq", q: "The keyboard shortcut to save a document is:", options: ["Ctrl + P", "Ctrl + S", "Ctrl + Z", "Ctrl + C"], answer: 1, rationale: "Ctrl + S saves the current document." },
      { type: "mcq", q: "The shortcut Ctrl + B makes selected text:", options: ["Italic", "Underlined", "Bold", "Bigger"], answer: 2, rationale: "Ctrl + B applies bold formatting." },
      { type: "mcq", q: "To place a heading in the middle of the line, you use:", options: ["Left align", "Centre align", "Right align", "Justify"], answer: 1, rationale: "Centre alignment positions text in the middle of the line." },
      { type: "mcq", q: "The strip at the top of Word with tabs and command groups is the:", options: ["Ruler", "Ribbon", "Status bar", "Scroll bar"], answer: 1, rationale: "The Ribbon holds the tabs (Home, Insert, etc.) and their commands." },
      { type: "mcq", q: "To reverse your last action, you press:", options: ["Ctrl + Z", "Ctrl + V", "Ctrl + S", "Ctrl + B"], answer: 0, rationale: "Ctrl + Z is the Undo command." },
      { type: "mcq", q: "Text that appears at the top of every page is called a:", options: ["Footer", "Header", "Footnote", "Caption"], answer: 1, rationale: "A header is repeated text at the top of every page (a footer is at the bottom)." },
      { type: "mcq", q: "'Justify' alignment means the text is:", options: ["Aligned to the left only", "Aligned to the right only", "Even on both the left and right margins", "Centred"], answer: 2, rationale: "Justified text is spaced so it lines up evenly on both margins." },
      { type: "mcq", q: "Which feature finds and corrects misspelled words?", options: ["Word count", "Spell check", "Print preview", "Page break"], answer: 1, rationale: "The spelling (and grammar) check flags and corrects misspellings." }
      , { type: "fill", q: "The keyboard shortcut to save a document is Ctrl + ____.", accept: ["s"], rationale: "Ctrl + S saves the document." }
      , { type: "fill", q: "The default file extension of a Microsoft Word document is ____.", accept: [".docx", "docx"], rationale: "Word saves files as .docx." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "ci-06-ms-excel",
    unit: "Unit 2 · Office Applications",
    title: "Microsoft Excel — Spreadsheets",
    readMinutes: 16,
    summary: "Spreadsheets with MS Excel: workbooks and worksheets, rows, columns and cells, entering data, formulas and functions, formatting, charts, sorting and filtering, and uses in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a spreadsheet?", p: "A spreadsheet is software for organising data in rows and columns and performing calculations on it automatically. Microsoft Excel is the most common spreadsheet program; its files have the extension .xlsx. An Excel file is called a workbook, which contains one or more worksheets (sheets)." },
      { h: "Rows, columns and cells", p: "A worksheet is a grid. Columns are labelled with letters (A, B, C…) and rows with numbers (1, 2, 3…). A cell is the box where a row and a column meet, named by its column letter and row number, e.g. A1. A range is a block of cells, written as A1:A10. The selected cell is the active cell.", figure: {
        caption: "An Excel worksheet: columns (letters), rows (numbers), the cell B2, and a formula =SUM(B2:B3) in the formula bar.",
        svg: '<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spreadsheet grid with formula bar."><rect x="20" y="20" width="320" height="24" rx="4" fill="#FFF7ED" stroke="#B45309" stroke-width="1.5"/><text x="28" y="37" font-family="monospace" font-size="13" fill="#7C2D12">fx  =SUM(B2:B3)</text><g font-family="sans-serif" font-size="12" fill="#7C2D12"><rect x="20" y="56" width="40" height="26" fill="#FDE68A" stroke="#92400E"/><rect x="60" y="56" width="90" height="26" fill="#FDE68A" stroke="#92400E"/><rect x="150" y="56" width="90" height="26" fill="#FDE68A" stroke="#92400E"/><text x="36" y="74" text-anchor="middle"></text><text x="105" y="74" text-anchor="middle" font-weight="700">A</text><text x="195" y="74" text-anchor="middle" font-weight="700">B</text><rect x="20" y="82" width="40" height="26" fill="#FEF3C7" stroke="#92400E"/><text x="40" y="100" text-anchor="middle" font-weight="700">1</text><rect x="60" y="82" width="90" height="26" fill="#FFF" stroke="#B45309"/><text x="105" y="100" text-anchor="middle">Drug</text><rect x="150" y="82" width="90" height="26" fill="#FFF" stroke="#B45309"/><text x="195" y="100" text-anchor="middle">Stock</text><rect x="20" y="108" width="40" height="26" fill="#FEF3C7" stroke="#92400E"/><text x="40" y="126" text-anchor="middle" font-weight="700">2</text><rect x="60" y="108" width="90" height="26" fill="#FFF" stroke="#B45309"/><text x="105" y="126" text-anchor="middle">Paracetamol</text><rect x="150" y="108" width="90" height="26" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="195" y="126" text-anchor="middle">40</text><rect x="20" y="134" width="40" height="26" fill="#FEF3C7" stroke="#92400E"/><text x="40" y="152" text-anchor="middle" font-weight="700">3</text><rect x="60" y="134" width="90" height="26" fill="#FFF" stroke="#B45309"/><text x="105" y="152" text-anchor="middle">Saline</text><rect x="150" y="134" width="90" height="26" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="195" y="152" text-anchor="middle">25</text><rect x="20" y="160" width="40" height="26" fill="#FEF3C7" stroke="#92400E"/><text x="40" y="178" text-anchor="middle" font-weight="700">4</text><rect x="60" y="160" width="90" height="26" fill="#FFF" stroke="#B45309"/><text x="105" y="178" text-anchor="middle">Total</text><rect x="150" y="160" width="90" height="26" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="195" y="178" text-anchor="middle" font-weight="700" fill="#15803D">65</text></g></svg>'
      } },
      { h: "Entering data", p: "Each cell can hold text (labels), numbers, or dates. Click a cell, type the data, and press Enter." },
      { h: "Formulas", p: "A formula is a calculation. Every formula must begin with an equals sign (=). It can use the operators + (add), - (subtract), * (multiply) and / (divide). For example, =B2+B3 adds the values in cells B2 and B3. Using cell references means the result updates automatically if the data changes." },
      { h: "Common functions", list: [
        "=SUM(range) — adds the values, e.g. =SUM(B2:B3).",
        "=AVERAGE(range) — finds the mean.",
        "=MAX(range) — the largest value.",
        "=MIN(range) — the smallest value.",
        "=COUNT(range) — counts the cells that contain numbers."
      ] },
      { h: "Formatting", p: "You can set number formats, add borders, merge cells, change column width, and use colours to make the sheet clear and readable." },
      { h: "Charts", p: "Excel can turn data into charts — column, bar, pie or line charts — to present numbers visually so trends are easy to see." },
      { h: "Sorting and filtering", p: "Sorting arranges data in order (for example, A–Z or by number). Filtering shows only the rows that meet a condition (for example, only patients with fever)." },
      { h: "Uses in nursing", p: "Excel is useful for patient lists, duty rosters, drug and stock inventory, attendance, and simple statistics such as totals, averages and percentages." }
    ],
    references: REF_CIT,
    examQuestions: [
      "Define a spreadsheet. What is a workbook and a worksheet?",
      "Explain rows, columns, cell and cell reference with an example.",
      "Write the formula to add the values in cells A1 to A5 and to find their average.",
      "Name four Excel functions and state what each does.",
      "List four uses of Excel in nursing."
    ],
    assessment: [
      { type: "mcq", q: "Microsoft Excel is used mainly for:", options: ["Typing letters", "Spreadsheets and calculations", "Making slide shows", "Editing photos"], answer: 1, rationale: "Excel organises data in rows and columns and performs calculations." },
      { type: "mcq", q: "Every formula in Excel must begin with:", options: ["A plus sign (+)", "An equals sign (=)", "A full stop (.)", "A letter"], answer: 1, rationale: "All Excel formulas start with the = sign." },
      { type: "mcq", q: "The formula =SUM(A1:A5) will:", options: ["Count the cells A1 to A5", "Add the values in cells A1 to A5", "Find the average of A1 to A5", "Delete A1 to A5"], answer: 1, rationale: "SUM adds all the values in the given range." },
      { type: "mcq", q: "The box where a row and a column meet is called a:", options: ["Cell", "Range", "Sheet", "Chart"], answer: 0, rationale: "The intersection of a row and a column is a cell." },
      { type: "mcq", q: "In Excel, columns are labelled with:", options: ["Numbers", "Letters", "Symbols", "Colours"], answer: 1, rationale: "Columns use letters (A, B, C…); rows use numbers." },
      { type: "mcq", q: "Which function finds the average (mean) of a range?", options: ["=SUM()", "=AVERAGE()", "=MAX()", "=COUNT()"], answer: 1, rationale: "=AVERAGE() returns the mean of the values." },
      { type: "mcq", q: "The cell reference 'B2' means:", options: ["Row B, column 2", "Column B, row 2", "The second sheet", "Two cells"], answer: 1, rationale: "A cell reference gives the column letter first, then the row number." },
      { type: "mcq", q: "The default file extension of an Excel workbook is:", options: [".docx", ".xlsx", ".pptx", ".txt"], answer: 1, rationale: "Excel workbooks are saved as .xlsx files." },
      { type: "mcq", q: "Which function returns the largest value in a range?", options: ["=MIN()", "=MAX()", "=SUM()", "=COUNT()"], answer: 1, rationale: "=MAX() gives the highest value; =MIN() gives the lowest." },
      { type: "mcq", q: "A pie chart or bar chart in Excel is used to:", options: ["Type paragraphs", "Represent data visually", "Save the file", "Check spelling"], answer: 1, rationale: "Charts present numerical data graphically so trends are easy to see." }
      , { type: "fill", q: "Every Excel formula must begin with the ____ sign.", accept: ["=", "equals", "equal"], rationale: "Formulas start with the = sign." }
      , { type: "fill", q: "The box formed where a row and a column meet is called a ____.", accept: ["cell"], rationale: "A cell is the intersection of a row and a column." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "ci-07-ms-powerpoint",
    unit: "Unit 2 · Office Applications",
    title: "Microsoft PowerPoint — Presentations",
    readMinutes: 13,
    summary: "Making slide presentations with MS PowerPoint: slides and layouts, adding text and visuals, themes, transitions and animations, running a slide show, and tips for effective slides.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is presentation software?", p: "Presentation software is used to create a slide show — a series of slides shown one after another to present information visually to an audience. Microsoft PowerPoint is the most common presentation program; its files have the extension .pptx. A PowerPoint file is called a presentation and is made up of slides." },
      { h: "Uses in nursing", p: "Nurses use PowerPoint for health-education talks, seminars, case presentations, in-service teaching and student assignments." },
      { h: "The PowerPoint interface", list: [
        "Slide pane — the large area where you design the current slide.",
        "Slide thumbnails — small previews of all slides on the left.",
        "Notes area — speaker notes for the presenter.",
        "Ribbon — tabs and commands (Home, Insert, Design, Transitions, etc.)."
      ] },
      { h: "Creating slides", p: "Add a new slide and choose a layout (for example, Title slide, or Title and Content). Type a title and content for each slide." },
      { h: "Adding content", list: [
        "Text boxes and bullet points.",
        "Pictures, shapes and SmartArt.",
        "Tables and charts.",
        "Audio or video."
      ] },
      { h: "Design", p: "Themes give the whole presentation a consistent set of colours, fonts and backgrounds, so it looks neat and professional." },
      { h: "Transitions and animations", p: "A transition is the visual effect when you move from one slide to the next. An animation is an effect applied to an object or text on a slide (for example, a bullet appearing on click). Used in moderation, they make a presentation clearer and more interesting." },
      { h: "Running the slide show", list: [
        "Press F5 to start the show from the beginning.",
        "Click or press the arrow keys to move to the next slide.",
        "Press Esc to end the show."
      ] },
      { h: "Tips for effective slides", list: [
        "Keep to a few key words per slide — do not write full paragraphs.",
        "Use a large, clear font that the audience can read.",
        "Do not crowd the slide; use images and simple bullet points.",
        "Be consistent with colours and style."
      ] }
    ],
    references: REF_CIT,
    examQuestions: [
      "What is presentation software? Give two uses in nursing.",
      "Differentiate between a transition and an animation in PowerPoint.",
      "List five things you can add to a PowerPoint slide.",
      "How do you start and end a slide show?",
      "State four tips for designing an effective slide."
    ],
    assessment: [
      { type: "mcq", q: "Microsoft PowerPoint is used mainly to:", options: ["Make calculations", "Create slide presentations", "Type long documents", "Browse the web"], answer: 1, rationale: "PowerPoint creates slide shows to present information visually." },
      { type: "mcq", q: "Each individual page in PowerPoint is called a:", options: ["Sheet", "Cell", "Slide", "Document"], answer: 2, rationale: "A PowerPoint presentation is made up of slides." },
      { type: "mcq", q: "The default file extension of a PowerPoint file is:", options: [".docx", ".xlsx", ".pptx", ".pdf"], answer: 2, rationale: "PowerPoint presentations are saved as .pptx files." },
      { type: "mcq", q: "The visual effect that plays when moving from one slide to the next is a:", options: ["Transition", "Theme", "Template", "Footer"], answer: 0, rationale: "A transition is the effect between slides." },
      { type: "mcq", q: "To start a slide show from the beginning, you press:", options: ["F1", "F5", "Esc", "Ctrl + S"], answer: 1, rationale: "F5 starts the slide show from the first slide." },
      { type: "mcq", q: "An animation in PowerPoint is an effect applied to:", options: ["The whole computer", "An object or text on a slide", "The printer", "A spreadsheet cell"], answer: 1, rationale: "Animations apply to objects/text on a slide; transitions apply between slides." },
      { type: "mcq", q: "Which is good practice when designing a slide?", options: ["Write full paragraphs of text", "Use a small font to fit more", "Use a few key words and a large, clear font", "Fill every space with text"], answer: 2, rationale: "Effective slides use a few key words in a large, readable font and are not crowded." },
      { type: "mcq", q: "A collection of slides shown together is called a:", options: ["Workbook", "Presentation", "Document", "Folder"], answer: 1, rationale: "A PowerPoint file (a set of slides) is a presentation." },
      { type: "mcq", q: "Pressing Esc during a slide show will:", options: ["Add a new slide", "End the show", "Print the slides", "Save the file"], answer: 1, rationale: "Esc ends the running slide show and returns to the editing view." },
      { type: "mcq", q: "A consistent set of colours, fonts and backgrounds applied to a whole presentation is a:", options: ["Theme", "Transition", "Cell", "Macro"], answer: 0, rationale: "A theme gives the presentation a consistent, professional look." }
      , { type: "fill", q: "Each individual page of a PowerPoint presentation is called a ____.", accept: ["slide"], rationale: "Presentations are made of slides." }
      , { type: "fill", q: "The visual effect that plays when you move from one slide to the next is called a ____.", accept: ["transition"], rationale: "A transition is the between-slide effect." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "ci-08-internet",
    unit: "Unit 3 · Internet & Health Informatics",
    title: "The Internet, Networking & the World Wide Web",
    readMinutes: 16,
    summary: "Computer networks, the internet and the World Wide Web, key web terms, how we connect, the services the internet provides, its use in nursing, and basic internet safety.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a network?", p: "A computer network is two or more computers connected together so they can share data and resources (such as files, a printer or an internet connection)." },
      { h: "Types of network", list: [
        "LAN (Local Area Network) — covers a small area such as one office, building or hospital ward.",
        "WAN (Wide Area Network) — covers a large area such as a country or the world; the internet is the largest WAN."
      ] },
      { h: "The internet and the World Wide Web", p: "The internet is a global network of networks that connects millions of computers worldwide. The World Wide Web (WWW) is the collection of websites and web pages that we view over the internet. They are not the same thing: the internet is the network; the Web is one of the services that runs on it.", figure: {
        caption: "Computers connect through a router to the internet (a global network) to reach web servers that hold websites.",
        svg: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Network diagram: computers, router, internet cloud and server."><rect x="20" y="30" width="70" height="44" rx="6" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="55" y="57" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">PC</text><rect x="20" y="146" width="70" height="44" rx="6" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="55" y="173" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">PC</text><rect x="150" y="88" width="80" height="44" rx="6" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="190" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Router</text><text x="190" y="124" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">(LAN)</text><ellipse cx="350" cy="110" rx="70" ry="46" fill="#FEF3C7" stroke="#92400E" stroke-width="2"/><text x="350" y="106" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#92400E">INTERNET</text><text x="350" y="123" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#92400E">(global WAN)</text><rect x="450" y="86" width="60" height="48" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="480" y="107" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">Web</text><text x="480" y="121" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#15803D">server</text><line x1="90" y1="52" x2="150" y2="100" stroke="#7C2D12" stroke-width="2"/><line x1="90" y1="168" x2="150" y2="120" stroke="#7C2D12" stroke-width="2"/><line x1="230" y1="110" x2="282" y2="110" stroke="#B45309" stroke-width="2.5"/><line x1="418" y1="110" x2="448" y2="110" stroke="#15803D" stroke-width="2.5"/></svg>'
      } },
      { h: "Key web terms", list: [
        "Web page — a single document on the Web; a website is a set of related web pages.",
        "Web browser — software used to view web pages (Google Chrome, Microsoft Edge, Mozilla Firefox).",
        "URL — the address of a web page (e.g. https://www.who.int).",
        "Hyperlink — clickable text or image that jumps to another page.",
        "Home page — the main/first page of a website.",
        "Web server — a computer that stores websites and sends them to browsers.",
        "ISP (Internet Service Provider) — a company that provides internet access.",
        "IP address — a number that identifies a device on a network."
      ] },
      { h: "HTTP, HTTPS and domains", p: "Web addresses use HTTP (HyperText Transfer Protocol) or, more securely, HTTPS — the 'S' means the connection is secure (encrypted). The end of a domain often shows the type of organisation: .com (commercial), .org (organisation), .edu (education), .gov (government), and .bd (Bangladesh)." },
      { h: "How we connect", p: "Devices connect to the internet through a modem/router using broadband (cable or fibre), Wi-Fi (wireless), or mobile data on a phone network." },
      { h: "Services on the internet", list: [
        "Browsing the Web for information.",
        "Email and messaging.",
        "Social media and video.",
        "Cloud storage and online learning.",
        "Telemedicine — consulting and caring for patients at a distance."
      ] },
      { h: "Use in nursing", p: "Nurses use the internet to read journals and research, look up drug information and clinical guidelines (for example, from the World Health Organization), take online courses (continuing education), and communicate with the health team." },
      { h: "Internet safety", list: [
        "Use strong passwords and keep them private.",
        "Check that health information comes from a reliable source.",
        "Beware of misinformation and fake news.",
        "Protect personal and patient privacy online."
      ] }
    ],
    references: REF_CIT,
    examQuestions: [
      "Differentiate between the internet and the World Wide Web.",
      "What is a computer network? Differentiate between LAN and WAN.",
      "Define the following: URL, web browser, hyperlink, ISP.",
      "What does HTTPS mean and why is it important?",
      "Describe four uses of the internet in nursing."
    ],
    assessment: [
      { type: "mcq", q: "The internet is best described as:", options: ["A single large computer", "A global network of networks", "A type of web browser", "A printer connection"], answer: 1, rationale: "The internet is a worldwide network connecting many smaller networks." },
      { type: "mcq", q: "A network that covers a small area such as one office or ward is a:", options: ["WAN", "LAN", "URL", "ISP"], answer: 1, rationale: "A LAN (Local Area Network) covers a small area; a WAN covers a large area." },
      { type: "mcq", q: "WWW stands for:", options: ["World Wide Web", "World Web Width", "Wide World Wire", "Web World Window"], answer: 0, rationale: "WWW = World Wide Web — the collection of web pages on the internet." },
      { type: "mcq", q: "Software used to view web pages is a:", options: ["Web server", "Web browser", "Spreadsheet", "Search bar"], answer: 1, rationale: "A web browser (Chrome, Edge, Firefox) displays web pages." },
      { type: "mcq", q: "A URL is:", options: ["The address of a web page", "A type of printer", "An email attachment", "A storage device"], answer: 0, rationale: "A URL is the address used to locate a web page." },
      { type: "mcq", q: "Compared with HTTP, HTTPS is:", options: ["Slower only", "More secure (encrypted)", "Only for images", "An email program"], answer: 1, rationale: "The 'S' in HTTPS means a secure, encrypted connection." },
      { type: "mcq", q: "Which of the following is a web browser?", options: ["Microsoft Windows", "Google Chrome", "MS Excel", "Android"], answer: 1, rationale: "Google Chrome is a web browser; the others are an OS or an application." },
      { type: "mcq", q: "A web address ending in '.edu' usually belongs to a(n):", options: ["Commercial company", "Educational institution", "Government office", "Hospital ward"], answer: 1, rationale: ".edu indicates an educational institution; .gov is government and .com is commercial." },
      { type: "mcq", q: "A company that provides access to the internet is called a(n):", options: ["URL", "ISP", "CPU", "LAN"], answer: 1, rationale: "ISP = Internet Service Provider." },
      { type: "mcq", q: "Clickable text or an image that takes you to another web page is a:", options: ["Hyperlink", "Header", "Cell", "Macro"], answer: 0, rationale: "A hyperlink jumps to another page or resource when clicked." }
      , { type: "fill", q: "A ____ is two or more computers connected together to share data and resources.", accept: ["network", "computer network"], rationale: "A network connects computers to share resources." }
      , { type: "fill", q: "The software used to access and view web pages is called a web ____.", accept: ["browser"], rationale: "A web browser displays web pages." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "ci-09-email-search",
    unit: "Unit 3 · Internet & Health Informatics",
    title: "Email & Searching for Information",
    readMinutes: 14,
    summary: "Using email (address structure, composing and managing messages, etiquette) and searching the web effectively, evaluating online information, and staying safe from phishing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is email?", p: "Email (electronic mail) is a way of sending and receiving messages over the internet. It is fast, free and can carry attachments such as documents and pictures. Common providers include Gmail, Outlook and Yahoo Mail." },
      { h: "The email address", p: "An email address has two parts joined by the @ symbol: the username and the domain — for example, nurse@gmail.com (username 'nurse', domain 'gmail.com'). Every address is unique." },
      { h: "Composing a message", list: [
        "To — the address of the main recipient.",
        "Cc (carbon copy) — others who receive a visible copy.",
        "Bcc (blind carbon copy) — others who receive a copy hidden from the rest.",
        "Subject — a short title for the message.",
        "Body — the message itself.",
        "Attachment — a file sent with the message.",
        "Send — delivers the message."
      ] },
      { h: "Managing email", p: "Mail is organised into folders: Inbox (received), Sent, Drafts (unfinished), Spam/Junk (unwanted mail), and Trash (deleted). You can Reply to the sender, Reply All to everyone, or Forward a message to someone new." },
      { h: "Email etiquette", list: [
        "Write a clear, specific subject line.",
        "Be polite and to the point.",
        "Use proper, professional language for work email.",
        "Proofread before sending and check the recipient address."
      ] },
      { h: "Searching the web", p: "A search engine (such as Google or Bing) helps you find information on the internet. Type keywords — the most important words of your topic — rather than a whole sentence. For an exact phrase, put it in quotation marks (\"blood pressure measurement\")." },
      { h: "Evaluating information", p: "Not everything online is true. Judge a source by: authority (who wrote it?), accuracy (is it correct and referenced?), and currency (is it up to date?). For health information, prefer reliable sources such as the World Health Organization, government health sites, recognised hospitals, and peer-reviewed journals, rather than random blogs or social media." },
      { h: "Online safety", list: [
        "Beware of phishing — fake emails that try to trick you into giving passwords or money.",
        "Do not open attachments or links from unknown senders.",
        "Use strong passwords and never share patient information online."
      ] }
    ],
    references: REF_CIT,
    examQuestions: [
      "Describe the parts of an email address and the parts of an email message.",
      "Differentiate between Cc and Bcc; between Reply and Reply All.",
      "What is a search engine? Give two tips for searching effectively.",
      "How can you judge whether health information on the internet is reliable?",
      "What is phishing and how can you protect yourself from it?"
    ],
    assessment: [
      { type: "mcq", q: "The symbol used in every email address is:", options: ["#", "@", "&", "%"], answer: 1, rationale: "The @ symbol separates the username from the domain in an email address." },
      { type: "mcq", q: "To send someone a copy of an email that the other recipients cannot see, you use:", options: ["To", "Cc", "Bcc", "Subject"], answer: 2, rationale: "Bcc (blind carbon copy) hides those recipients from the others; Cc copies are visible." },
      { type: "mcq", q: "Unwanted or junk email is usually stored in the:", options: ["Inbox", "Sent folder", "Spam/Junk folder", "Drafts"], answer: 2, rationale: "Suspected junk mail is filtered into the Spam/Junk folder." },
      { type: "mcq", q: "A file (such as a document or image) sent with an email is called a(n):", options: ["Subject", "Attachment", "Signature", "Draft"], answer: 1, rationale: "An attachment is a file sent along with the email message." },
      { type: "mcq", q: "Software or a website used to find information on the internet is a:", options: ["Search engine", "Spreadsheet", "Web server", "Modem"], answer: 0, rationale: "A search engine such as Google finds information on the web." },
      { type: "mcq", q: "Which is the MOST reliable source of health information?", options: ["A random personal blog", "A social media rumour", "The World Health Organization website", "An anonymous forum post"], answer: 2, rationale: "Authoritative bodies such as the WHO provide accurate, referenced health information." },
      { type: "mcq", q: "'Reply All' will send your reply to:", options: ["Only the sender", "The sender and all the recipients", "Nobody", "Only yourself"], answer: 1, rationale: "Reply All responds to the original sender and everyone who received the message." },
      { type: "mcq", q: "To search for an exact phrase, you should:", options: ["Type it in CAPITAL letters", "Put it in quotation marks", "Add many question marks", "Type only one word"], answer: 1, rationale: "Quotation marks tell the search engine to match the exact phrase." },
      { type: "mcq", q: "Bcc differs from Cc in that the Bcc recipients are:", options: ["Shown to everyone", "Hidden from the other recipients", "Unable to receive the email", "The main recipients"], answer: 1, rationale: "Bcc recipients are hidden; Cc recipients are visible to all." },
      { type: "mcq", q: "Phishing is:", options: ["A way to speed up the internet", "A fraudulent email that tries to steal passwords or money", "A type of web browser", "A method of saving files"], answer: 1, rationale: "Phishing uses fake messages to trick people into revealing information or money." }
      , { type: "fill", q: "In an email address, the username and the domain are separated by the ____ symbol.", accept: ["@", "at"], rationale: "The @ symbol separates the two parts of an email address." }
      , { type: "fill", q: "A file sent along with an email message is called an ____.", accept: ["attachment"], rationale: "An attachment is a file sent with an email." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "ci-10-health-informatics",
    unit: "Unit 3 · Internet & Health Informatics",
    title: "Health Informatics & Computers in Nursing",
    readMinutes: 15,
    summary: "Health and nursing informatics, electronic health records and hospital information systems, computer applications in patient care, the benefits and challenges, and the duty of data security and confidentiality.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is health/nursing informatics?", p: "Health informatics is the use of information technology and data to support health care. Nursing informatics is the part of it that supports nursing practice — it combines nursing science with information and computer science to manage and communicate data, information and knowledge in nursing." },
      { h: "Electronic health records (EHR)", p: "An Electronic Health Record (EHR) is a patient's medical record stored digitally instead of on paper. It holds the patient's history, diagnoses, medicines, test results and care notes. Compared with paper records, an EHR is legible, easy to access and share among the health team, harder to lose, and can give alerts (for example, a drug allergy warning) — all of which help reduce errors." },
      { h: "Hospital Information System (HIS)", p: "A Hospital Information System integrates the different departments of a hospital — registration, wards, laboratory, pharmacy, radiology and billing — into one computer system so that information flows smoothly between them." },
      { h: "Computer applications in patient care", list: [
        "Computerised provider order entry (CPOE) — orders typed directly into the system.",
        "Barcode medication administration — scanning to confirm the right patient and right drug, reducing medication errors.",
        "Patient monitoring systems — continuous recording of vital signs.",
        "Laboratory and imaging systems (including PACS for X-ray/scan images).",
        "Clinical decision support — alerts and reminders that help clinicians make safe decisions.",
        "Telemedicine and appointment systems."
      ] },
      { h: "Uses for the nurse", list: [
        "Documentation and nursing care plans.",
        "The Medication Administration Record (MAR).",
        "Education and access to references.",
        "Research, statistics and reporting."
      ] },
      { h: "Benefits", list: [
        "Greater accuracy and legibility.",
        "Faster access to information.",
        "Fewer errors and better patient safety.",
        "Better continuity of care and data for research."
      ] },
      { h: "Challenges", list: [
        "Cost of equipment and software.",
        "Need for staff training.",
        "System downtime or technical faults.",
        "Time spent on data entry."
      ] },
      { h: "Data security and confidentiality", p: "Patient information is private and protected by law and by the nurse's ethical duty of confidentiality. Protect it by: using strong passwords and never sharing your login, logging off when you leave the computer, accessing only the records you need for care, and never posting patient information on social media. Breaching confidentiality is a serious professional and legal offence." },
      { h: "The future", p: "Health care is increasingly using telehealth, mobile health (mHealth) apps, wearable devices and artificial intelligence to improve care — so digital skills are now an essential part of nursing." }
    ],
    references: REF_CIT,
    examQuestions: [
      "Define nursing informatics. Why is it important for nurses?",
      "What is an electronic health record? State four advantages over paper records.",
      "What is a Hospital Information System? Name four departments it links.",
      "List four benefits and two challenges of computers in health care.",
      "Explain the nurse's duty to keep patients' computer records confidential, and four ways to protect them."
    ],
    assessment: [
      { type: "mcq", q: "Nursing informatics combines nursing science with:", options: ["Information and computer science", "Surgery", "Pharmacy manufacturing", "Building design"], answer: 0, rationale: "Nursing informatics integrates nursing with information and computer science to manage data and knowledge." },
      { type: "mcq", q: "EHR stands for:", options: ["Electronic Health Record", "Emergency Hospital Room", "Electronic Hardware Report", "Extended Health Review"], answer: 0, rationale: "EHR = Electronic Health Record — a patient's digital medical record." },
      { type: "mcq", q: "An advantage of an EHR over a paper record is that it is:", options: ["Easier to lose", "Always illegible", "Legible and easy to access and share", "Impossible to back up"], answer: 2, rationale: "EHRs are legible, accessible, shareable and can give safety alerts, helping reduce errors." },
      { type: "mcq", q: "HIS stands for:", options: ["Health Insurance Scheme", "Hospital Information System", "Human Internal System", "High Intensity Scan"], answer: 1, rationale: "HIS = Hospital Information System, which integrates hospital departments." },
      { type: "mcq", q: "The MOST important reason to keep a patient's computer records confidential is to:", options: ["Save disk space", "Protect the patient's privacy (a legal and ethical duty)", "Make the computer faster", "Reduce printing costs"], answer: 1, rationale: "Confidentiality protects patient privacy and is a legal and ethical duty of the nurse." },
      { type: "mcq", q: "To protect patient data, a nurse should:", options: ["Share the login password with colleagues", "Never share the login password", "Leave the computer logged in", "Post records on social media"], answer: 1, rationale: "Login credentials must never be shared, and patient data must not be posted online." },
      { type: "mcq", q: "Telemedicine allows health care to be provided:", options: ["Only inside the operating theatre", "At a distance, using technology", "Only on paper", "Without any computer"], answer: 1, rationale: "Telemedicine uses technology to deliver care and consultation at a distance." },
      { type: "mcq", q: "Barcode medication administration mainly helps to:", options: ["Print faster", "Reduce medication errors by checking the right patient and drug", "Save electricity", "Replace the nurse"], answer: 1, rationale: "Scanning confirms the right patient and right medication, reducing errors." },
      { type: "mcq", q: "Posting a patient's information on social media is:", options: ["Good teaching practice", "A breach of confidentiality (unethical and illegal)", "Required by law", "Helpful for the patient"], answer: 1, rationale: "Sharing patient information publicly breaches confidentiality and is a serious offence." },
      { type: "mcq", q: "A clinical decision support system helps by:", options: ["Cleaning the ward", "Giving alerts and reminders to support safe clinical decisions", "Cooking meals", "Printing money"], answer: 1, rationale: "Decision support provides alerts and reminders (e.g. allergy or dose warnings) to clinicians." }
      , { type: "fill", q: "____ informatics is the use of information technology and data to support nursing practice.", accept: ["nursing"], rationale: "Nursing informatics supports nursing practice with IT and data." }
      , { type: "fill", q: "EHR stands for Electronic ____ Record.", accept: ["health"], rationale: "EHR = Electronic Health Record." }
    ]
  }

];
