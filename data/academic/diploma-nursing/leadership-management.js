/* ============================================================
   Diploma in Nursing · D334 Leadership & Management
   — 12 topics. Aligned to the BNMC syllabus (concepts of
   leadership & management, management functions, quality &
   professional practice). Grounded in standard texts:
     • Marquis BL, Huston CJ. Leadership Roles and Management
       Functions in Nursing. Lippincott Williams & Wilkins.
     • Basavanthappa BT. Nursing Administration. Jaypee Brothers.
     • Sullivan EJ, Decker PJ. Effective Leadership and
       Management in Nursing. Pearson.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_LM = [
  "Marquis BL, Huston CJ. Leadership Roles and Management Functions in Nursing. Lippincott Williams & Wilkins.",
  "Basavanthappa BT. Nursing Administration. Jaypee Brothers Medical Publishers.",
  "Sullivan EJ, Decker PJ. Effective Leadership and Management in Nursing. Pearson."
];

window.Academic.topics["diploma-nursing/leadership-management"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "lm-01-intro-management",
    unit: "Unit 1 · Concepts",
    title: "Introduction to Management & Administration in Nursing",
    readMinutes: 16,
    summary: "The meaning of management and administration, their nature and importance, the difference between administration, management and leadership, levels of management, and the principles that guide nursing administration.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is management?", p: "Management is the process of getting work done with and through people by planning, organising, staffing, directing and controlling the resources of an organisation to achieve its goals efficiently and effectively. In nursing it means using people, money, materials, time and information to provide safe, high-quality patient care. 'Efficient' means using the fewest resources for the result; 'effective' means actually achieving the intended goal." },
      { h: "What is administration?", p: "Administration is the wider activity of determining the policies, objectives and overall direction of an organisation, while management is concerned with carrying out those policies in day-to-day work. In practice the two overlap: top-level work is more administrative (policy and planning), and lower-level work is more managerial (execution). Nursing administration applies these ideas to the nursing service of a hospital or college." },
      { h: "Nature & characteristics of management", list: [
        "It is goal-oriented — directed towards achieving stated objectives.",
        "It is a continuous process — planning, organising, directing and controlling go on all the time.",
        "It is universal — needed in every organisation, large or small.",
        "It works with and through people — a social process.",
        "It is both a science (organised knowledge) and an art (skill in applying it).",
        "It is dynamic — it adapts to changes in the environment.",
        "It is intangible — seen through its results, not directly."
      ] },
      { h: "Importance of management in nursing", list: [
        "Ensures safe, effective and patient-centred care.",
        "Makes the best use of limited resources (staff, money, supplies, time).",
        "Coordinates the work of many people towards common goals.",
        "Maintains standards and quality of nursing service.",
        "Helps the organisation adapt to change and meet challenges.",
        "Provides job satisfaction, growth and direction to staff."
      ] },
      { h: "Administration vs management vs leadership", p: "These three are related but distinct. Administration sets policy and direction; management organises resources and people to carry out the work; leadership is the ability to influence and inspire people to willingly achieve goals. A nurse can be a manager (by position) and a leader (by influence) at the same time — the best nurse-managers are also good leaders.", figure: {
        caption: "How administration, management and leadership relate: administration sets direction, management organises the work, leadership influences people.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Administration sets direction, management organises work, leadership influences people."><rect x="20" y="60" width="160" height="80" rx="10" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="100" y="92" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#7C2D12">ADMINISTRATION</text><text x="100" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">policy &amp; direction</text><rect x="200" y="60" width="160" height="80" rx="10" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="280" y="92" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#B45309">MANAGEMENT</text><text x="280" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#B45309">organises the work</text><rect x="380" y="60" width="160" height="80" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="460" y="92" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#15803D">LEADERSHIP</text><text x="460" y="114" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">influences people</text></svg>'
      } },
      { h: "Levels of management", list: [
        "Top level — sets policy, goals and overall direction (e.g. Director of Nursing, Nursing Superintendent).",
        "Middle level — translates policy into plans and supervises lower managers (e.g. Assistant Nursing Superintendent, Departmental Supervisor).",
        "First-line / operational level — directly supervises staff doing the work (e.g. Ward Sister / Charge Nurse / Ward In-charge)."
      ] },
      { h: "Principles of nursing administration", list: [
        "Clear, achievable objectives shared by all.",
        "Division of work and specialisation for efficiency.",
        "Unity of command — each person has one supervisor.",
        "Proper delegation of authority with matching responsibility.",
        "Coordination and good communication across the service.",
        "Span of control kept manageable so supervision is effective.",
        "Flexibility, fairness and continuous evaluation."
      ] },
      { h: "Key terms", list: [
        "Authority — the right to act and make decisions.",
        "Responsibility — the duty to perform an assigned task.",
        "Accountability — being answerable for the results of one's actions.",
        "Efficiency — getting results with least waste of resources.",
        "Effectiveness — actually achieving the intended goal."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define management and administration. Differentiate between the two.",
      "Explain the nature and importance of management in nursing.",
      "Differentiate between administration, management and leadership.",
      "Describe the three levels of management with nursing examples.",
      "Enumerate and explain the principles of nursing administration."
    ],
    assessment: [
      { type: "mcq", q: "Management is best defined as getting work done:", options: ["By oneself alone", "With and through people to achieve goals", "Without any planning", "Only through machines"], answer: 1, rationale: "Management is the process of achieving organisational goals with and through people." },
      { type: "mcq", q: "Doing a task with the least waste of resources describes:", options: ["Effectiveness", "Efficiency", "Authority", "Accountability"], answer: 1, rationale: "Efficiency means achieving results using the fewest resources; effectiveness means achieving the intended goal." },
      { type: "mcq", q: "Setting overall policies and direction of an organisation is mainly:", options: ["Administration", "Supervision", "Delegation", "Controlling"], answer: 0, rationale: "Administration determines policy and direction; management carries it out." },
      { type: "mcq", q: "A Ward Sister / Charge Nurse who directly supervises staff is at which level of management?", options: ["Top level", "Middle level", "First-line (operational) level", "No level"], answer: 2, rationale: "The first-line manager directly supervises the staff doing the work." },
      { type: "mcq", q: "Being answerable for the results of one's actions is called:", options: ["Authority", "Responsibility", "Accountability", "Delegation"], answer: 2, rationale: "Accountability is being answerable for outcomes; authority is the right to act and responsibility is the duty to perform." },
      { type: "mcq", q: "The ability to influence and inspire people to willingly achieve goals is:", options: ["Administration", "Leadership", "Controlling", "Budgeting"], answer: 1, rationale: "Leadership is the process of influencing people towards goal achievement." },
      { type: "mcq", q: "The principle that each employee should receive orders from only one superior is:", options: ["Span of control", "Unity of command", "Division of work", "Delegation"], answer: 1, rationale: "Unity of command means one person reports to one supervisor, avoiding confusion." },
      { type: "mcq", q: "Which statement about management is TRUE?", options: ["It is a one-time activity", "It is needed only in hospitals", "It is a continuous process", "It works without people"], answer: 2, rationale: "Management is a continuous, ongoing process of planning, organising, directing and controlling." },
      { type: "mcq", q: "The number of subordinates a manager can effectively supervise is called:", options: ["Unity of command", "Span of control", "Chain of command", "Delegation"], answer: 1, rationale: "Span of control refers to how many staff one manager can effectively supervise." },
      { type: "mcq", q: "Management is described as both a science and an ____ because it uses organised knowledge and skill in application.", options: ["arithmetic", "art", "audit", "agency"], answer: 1, rationale: "Management is a science (a body of knowledge) and an art (skilful application of that knowledge)." },
      { type: "fill", q: "The duty to perform an assigned task is called ____.", accept: ["responsibility"], rationale: "Responsibility is the obligation to carry out a task; authority is the right to act." },
      { type: "fill", q: "The right to act and make decisions is called ____.", accept: ["authority"], rationale: "Authority is the legitimate right to act, give orders and make decisions." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "lm-02-leadership-styles",
    unit: "Unit 1 · Concepts",
    title: "Leadership — Concepts, Theories & Styles",
    readMinutes: 17,
    summary: "The meaning of leadership, the difference between a leader and a manager, major leadership theories, the main leadership styles, and the qualities of an effective nurse-leader.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is leadership?", p: "Leadership is the process of influencing the beliefs, attitudes and behaviour of others so that they willingly work towards a common goal. A leader uses influence rather than formal authority; people follow a leader because they want to, not only because they have to. In nursing, leadership is shown at every level — from the bedside nurse who advocates for a patient to the Director of Nursing who shapes policy." },
      { h: "Leader vs manager", list: [
        "A manager holds a formal position and authority; a leader may or may not hold a position.",
        "A manager focuses on tasks, systems and stability; a leader focuses on people, vision and change.",
        "A manager has subordinates who must comply; a leader has followers who choose to follow.",
        "The ideal nurse combines both: a manager who is also a good leader."
      ] },
      { h: "Leadership theories", list: [
        "Great Man / Trait theory — leaders are born with certain inborn qualities or traits.",
        "Behavioural theory — leadership is shown by what leaders do (their behaviour), not by who they are; it can be learned.",
        "Situational / Contingency theory — the best style depends on the situation, the task and the maturity of followers (e.g. Hersey & Blanchard).",
        "Transactional leadership — based on exchange: rewards for good performance and correction for poor performance.",
        "Transformational leadership — the leader inspires, motivates and develops followers to achieve more than expected, creating change and a shared vision."
      ] },
      { h: "Leadership styles", p: "The three classic styles, described by Lewin, differ in how much the leader shares decision-making.", figure: {
        caption: "Three classic leadership styles range from leader-centred (autocratic) to group-centred (laissez-faire), with democratic in the middle.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Autocratic, democratic and laissez-faire leadership styles."><rect x="20" y="50" width="160" height="110" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="100" y="78" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#7C2D12">AUTOCRATIC</text><text x="100" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">leader decides</text><text x="100" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">alone</text><text x="100" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">high control</text><rect x="200" y="50" width="160" height="110" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="78" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#15803D">DEMOCRATIC</text><text x="280" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">leader + group</text><text x="280" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">decide together</text><text x="280" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">participative</text><rect x="380" y="50" width="160" height="110" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="460" y="78" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">LAISSEZ-FAIRE</text><text x="460" y="100" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">group decides</text><text x="460" y="116" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">hands-off</text><text x="460" y="140" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">low control</text></svg>'
      } },
      { h: "The three classic styles in detail", list: [
        "Autocratic (authoritarian) — the leader makes all decisions and expects obedience. Useful in emergencies or crises, but can lower morale if overused.",
        "Democratic (participative) — the leader involves the group in decisions, shares information and encourages participation. Improves morale and teamwork; takes more time.",
        "Laissez-faire (free-rein) — the leader gives the group freedom to make its own decisions with little direction. Works with skilled, motivated, self-directed staff; can lead to chaos with inexperienced staff."
      ] },
      { h: "Other styles", list: [
        "Bureaucratic — follows rules and procedures strictly.",
        "Transformational — inspires and motivates towards a shared vision and change.",
        "Transactional — uses rewards and corrections for performance.",
        "Servant leadership — the leader serves and develops the team first."
      ] },
      { h: "Qualities of an effective nurse-leader", list: [
        "Good communication and listening skills.",
        "Integrity, honesty and fairness.",
        "Clinical knowledge and competence.",
        "Confidence, courage and decisiveness.",
        "Empathy and concern for staff and patients.",
        "Vision and the ability to motivate others.",
        "Flexibility and willingness to adapt the style to the situation."
      ] },
      { h: "Choosing a style", p: "No single style is best for every situation. An effective nurse-leader varies the style: autocratic in an emergency, democratic for routine planning and team decisions, and laissez-faire with experienced, highly competent staff. Matching the style to the task and the people is the mark of good leadership." }
    ],
    references: REF_LM,
    examQuestions: [
      "Define leadership. Differentiate between a leader and a manager.",
      "Describe the major theories of leadership.",
      "Explain the three classic styles of leadership with their advantages and disadvantages.",
      "Compare transactional and transformational leadership.",
      "List the qualities of an effective nurse-leader."
    ],
    assessment: [
      { type: "mcq", q: "Leadership is mainly the process of:", options: ["Controlling money", "Influencing others towards a common goal", "Writing reports", "Buying supplies"], answer: 1, rationale: "Leadership is influencing people so they willingly work towards shared goals." },
      { type: "mcq", q: "In which leadership style does the leader make all decisions and expect obedience?", options: ["Democratic", "Laissez-faire", "Autocratic", "Servant"], answer: 2, rationale: "Autocratic (authoritarian) leaders decide alone and expect compliance." },
      { type: "mcq", q: "The leadership style most suitable during an emergency or crisis is usually:", options: ["Laissez-faire", "Autocratic", "Bureaucratic", "Democratic"], answer: 1, rationale: "In a crisis, quick decisive action by the leader (autocratic) is often most effective." },
      { type: "mcq", q: "A leader who involves the team in decision-making uses the ____ style.", options: ["Autocratic", "Democratic", "Laissez-faire", "Bureaucratic"], answer: 1, rationale: "Democratic (participative) leaders share decision-making with the group." },
      { type: "mcq", q: "The 'hands-off' style giving the group freedom with little direction is:", options: ["Autocratic", "Transactional", "Laissez-faire", "Transformational"], answer: 2, rationale: "Laissez-faire (free-rein) leaders allow the group to decide with minimal guidance." },
      { type: "mcq", q: "The theory stating that leaders are born with inborn qualities is the:", options: ["Behavioural theory", "Trait (Great Man) theory", "Situational theory", "Transactional theory"], answer: 1, rationale: "Trait / Great Man theory holds that leaders possess inborn traits." },
      { type: "mcq", q: "A leader who inspires followers towards a shared vision and creates change uses:", options: ["Transactional leadership", "Transformational leadership", "Autocratic leadership", "Bureaucratic leadership"], answer: 1, rationale: "Transformational leaders inspire and develop followers to exceed expectations." },
      { type: "mcq", q: "Which best distinguishes a leader from a manager?", options: ["A leader always holds a formal position", "A leader has followers who choose to follow; a manager has subordinates who must comply", "A manager never plans", "A leader cannot be a manager"], answer: 1, rationale: "Followers choose to follow a leader's influence; subordinates must comply with a manager's authority." },
      { type: "mcq", q: "Situational (contingency) theory states that the best leadership style depends on:", options: ["The leader's birth", "The situation and followers", "The colour of the uniform", "The hospital budget"], answer: 1, rationale: "Situational theory says the effective style varies with the task, situation and maturity of followers." },
      { type: "mcq", q: "Leadership based on rewards for good performance and correction for poor performance is:", options: ["Transformational", "Transactional", "Laissez-faire", "Servant"], answer: 1, rationale: "Transactional leadership uses an exchange of rewards and corrections for performance." },
      { type: "fill", q: "The participative leadership style in which the leader involves the group in decisions is called the ____ style.", accept: ["democratic", "participative"], rationale: "The democratic (participative) style shares decision-making with the team." },
      { type: "fill", q: "The leadership style in which the leader gives the group full freedom with little direction is ____.", accept: ["laissez-faire", "laissez faire", "free-rein", "free rein"], rationale: "Laissez-faire (free-rein) leadership leaves decisions to the group." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "lm-03-functions-process",
    unit: "Unit 1 · Concepts",
    title: "The Functions / Process of Management",
    readMinutes: 16,
    summary: "The five functions of management — planning, organising, staffing, directing and controlling — how they form a continuous cycle, and how each applies to the nursing service.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The management process", p: "Management is carried out through a set of linked functions. The most widely used framework, based on the work of Fayol and later writers, describes five functions: Planning, Organising, Staffing, Directing and Controlling (POSDC). They form a continuous cycle — controlling feeds information back into planning, and the cycle repeats." },
      { h: "The five functions at a glance", figure: {
        caption: "The management process as a continuous cycle: planning, organising, staffing, directing and controlling, with feedback to planning.",
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cycle of planning, organising, staffing, directing, controlling."><defs><marker id="lmArr3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="20" y="95" width="92" height="44" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="66" y="122" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">PLANNING</text><rect x="135" y="95" width="98" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="184" y="122" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">ORGANISING</text><rect x="256" y="95" width="88" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="300" y="122" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">STAFFING</text><rect x="367" y="95" width="90" height="44" rx="8" fill="#FFEDD5" stroke="#7C2D12" stroke-width="2"/><text x="412" y="122" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">DIRECTING</text><rect x="480" y="95" width="68" height="44" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="514" y="116" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">CONTROL-</text><text x="514" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">LING</text><line x1="112" y1="117" x2="131" y2="117" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr3)"/><line x1="233" y1="117" x2="252" y2="117" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr3)"/><line x1="344" y1="117" x2="363" y2="117" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr3)"/><line x1="457" y1="117" x2="476" y2="117" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr3)"/><path d="M514 95 C514 40 66 40 66 91" fill="none" stroke="#15803D" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#lmArr3)"/><text x="290" y="35" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">feedback</text></svg>'
      } },
      { h: "1. Planning", p: "Planning is deciding in advance what to do, how to do it, when and by whom. It involves setting objectives, forecasting, and choosing the best course of action. In nursing it includes preparing duty rosters, care plans, budgets and policies. Planning is the first and most basic function because all others depend on it." },
      { h: "2. Organising", p: "Organising is arranging resources and activities in a structured way to achieve the plan. It includes dividing the work, grouping activities, defining authority and responsibility, and creating the organisational structure (organogram). In a ward it means arranging staff, equipment and space so that care is delivered smoothly." },
      { h: "3. Staffing", p: "Staffing is filling and keeping filled the positions in the organisation. It includes determining staffing needs, recruitment, selection, orientation, training, scheduling and retention of nursing personnel. Adequate staffing of the right number and mix of nurses is essential for safe care." },
      { h: "4. Directing", p: "Directing (also called leading or actuating) is guiding and motivating staff to carry out the plan. It includes leadership, communication, delegation, supervision, motivation and coordination. This is where the manager turns plans into action through people." },
      { h: "5. Controlling", p: "Controlling is checking whether actual performance matches the plan and taking corrective action where needed. It includes setting standards, measuring performance, comparing it with standards, and correcting deviations. Tools include nursing audit, quality assurance and performance appraisal. The information from controlling feeds back into the next round of planning." },
      { h: "Functions are interrelated", p: "The five functions are not separate steps done once; they overlap and continue together. A manager may be planning next month's roster, organising today's ward, directing the morning shift and controlling quality all in the same day. Good management keeps all five functions in balance." },
      { h: "Key terms", list: [
        "POSDC — Planning, Organising, Staffing, Directing, Controlling.",
        "Function — a major category of managerial activity.",
        "Feedback — information about results that is used to improve future plans.",
        "Coordination — harmonising the work of different people and units (the 'essence' of management)."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Enumerate the five functions of management and explain each briefly.",
      "Explain why planning is called the first function of management.",
      "Describe the controlling function and its steps.",
      "How are the functions of management interrelated? Illustrate with ward examples.",
      "Define organising and staffing in the context of nursing service."
    ],
    assessment: [
      { type: "mcq", q: "The five functions of management are commonly remembered as:", options: ["POSDC", "ADPIE", "SWOT", "PERT"], answer: 0, rationale: "POSDC = Planning, Organising, Staffing, Directing, Controlling." },
      { type: "mcq", q: "Which is the FIRST and most basic function of management?", options: ["Controlling", "Directing", "Planning", "Staffing"], answer: 2, rationale: "Planning comes first because all other functions depend on the plan." },
      { type: "mcq", q: "Arranging resources and dividing work to carry out the plan is the function of:", options: ["Planning", "Organising", "Directing", "Controlling"], answer: 1, rationale: "Organising structures resources and activities to achieve the plan." },
      { type: "mcq", q: "Recruitment, selection, orientation and scheduling of nurses fall under:", options: ["Planning", "Staffing", "Controlling", "Budgeting"], answer: 1, rationale: "Staffing is filling and keeping filled the positions in the organisation." },
      { type: "mcq", q: "Guiding, motivating and supervising staff to carry out the plan is:", options: ["Organising", "Directing", "Controlling", "Planning"], answer: 1, rationale: "Directing (leading) turns plans into action through people." },
      { type: "mcq", q: "Checking whether performance matches the plan and correcting deviations is:", options: ["Controlling", "Staffing", "Organising", "Directing"], answer: 0, rationale: "Controlling sets standards, measures performance and corrects deviations." },
      { type: "mcq", q: "Nursing audit and quality assurance are tools of which function?", options: ["Planning", "Staffing", "Controlling", "Directing"], answer: 2, rationale: "Audit and quality assurance are used in the controlling function to evaluate performance." },
      { type: "mcq", q: "Information about results that is fed back to improve future plans is called:", options: ["Forecast", "Feedback", "Forecast error", "Format"], answer: 1, rationale: "Feedback from controlling is used to refine the next round of planning." },
      { type: "mcq", q: "Preparing a duty roster and care plan is an example of which function?", options: ["Planning", "Controlling", "Staffing", "Directing"], answer: 0, rationale: "Rosters, care plans and budgets are products of the planning function." },
      { type: "mcq", q: "Harmonising the work of different people and units is called:", options: ["Coordination", "Competition", "Correction", "Compensation"], answer: 0, rationale: "Coordination, often called the essence of management, harmonises everyone's efforts." },
      { type: "fill", q: "The function of management that fills and keeps filled the positions in an organisation is ____.", accept: ["staffing"], rationale: "Staffing concerns recruitment, selection, training and retention of personnel." },
      { type: "fill", q: "The last function of management, which checks performance against standards and corrects deviations, is ____.", accept: ["controlling", "control"], rationale: "Controlling measures actual performance against the plan and corrects deviations." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "lm-04-planning-decision",
    unit: "Unit 2 · Management functions",
    title: "Planning, Objectives & Decision-making",
    readMinutes: 17,
    summary: "The meaning and importance of planning, types of plans, the planning process, setting objectives, decision-making and problem-solving, and time management in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is planning?", p: "Planning is the process of deciding in advance what is to be done, how, when, where and by whom, to achieve stated objectives. It bridges the gap between where the organisation is now and where it wants to be. Planning is goal-directed, future-oriented and a continuous, intellectual process that precedes all other management functions." },
      { h: "Importance of planning", list: [
        "Gives direction and a sense of purpose to all activities.",
        "Reduces uncertainty and the risk of crisis.",
        "Makes the best use of limited resources and avoids waste.",
        "Provides a basis for controlling (standards to measure against).",
        "Improves coordination and reduces overlap of work.",
        "Helps anticipate problems and prepare for change."
      ] },
      { h: "Types of plans", list: [
        "By time — long-range (strategic, years), intermediate, and short-range (operational, days/weeks).",
        "By level — strategic (top), tactical (middle) and operational (first-line).",
        "Standing plans — used repeatedly: policies, procedures, rules and methods.",
        "Single-use plans — for one purpose: programmes, projects and budgets."
      ] },
      { h: "Setting objectives (goals)", p: "Objectives are the specific ends that an organisation aims to achieve. Good objectives are often described as SMART: Specific, Measurable, Achievable, Realistic and Time-bound. Clear objectives give staff a target, guide decisions, and provide a standard for evaluation. Nursing objectives flow from the organisation's mission and the nursing service's philosophy.", figure: {
        caption: "SMART objectives: Specific, Measurable, Achievable, Realistic, Time-bound.",
        svg: '<svg viewBox="0 0 540 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SMART objectives box."><rect x="20" y="55" width="100" height="60" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="70" y="82" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#7C2D12">S</text><text x="70" y="103" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">Specific</text><rect x="125" y="55" width="100" height="60" rx="8" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="175" y="82" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#B45309">M</text><text x="175" y="103" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">Measurable</text><rect x="230" y="55" width="100" height="60" rx="8" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="280" y="82" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#7C2D12">A</text><text x="280" y="103" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">Achievable</text><rect x="335" y="55" width="100" height="60" rx="8" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="385" y="82" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#B45309">R</text><text x="385" y="103" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">Realistic</text><rect x="440" y="55" width="80" height="60" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="480" y="82" text-anchor="middle" font-family="sans-serif" font-size="20" font-weight="700" fill="#15803D">T</text><text x="480" y="103" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">Time-bound</text></svg>'
      } },
      { h: "The planning process (steps)", list: [
        "Assess the situation and identify needs/problems.",
        "Set clear objectives and priorities.",
        "Gather and analyse information (forecasting).",
        "Develop alternative courses of action.",
        "Evaluate and select the best alternative.",
        "Implement the plan and assign responsibilities.",
        "Evaluate the results and revise as needed."
      ] },
      { h: "Decision-making", p: "Decision-making is choosing the best course of action from among alternatives. It is at the heart of every management function. Decisions may be programmed (routine, governed by rules) or non-programmed (new, complex, needing judgement). Good decisions are based on facts, consider alternatives and their consequences, and are made in time." },
      { h: "Steps in decision-making / problem-solving", list: [
        "Identify and define the problem clearly.",
        "Collect relevant data and information.",
        "Identify possible alternatives or solutions.",
        "Weigh the advantages and disadvantages of each.",
        "Choose and implement the best alternative.",
        "Evaluate the outcome and follow up."
      ] },
      { h: "Time management", p: "Time management is the effective use of time to achieve goals. Techniques include setting priorities (urgent vs important), making to-do lists, delegating, avoiding time-wasters, grouping similar tasks and learning to say no to non-essential demands. Good time management reduces stress and improves productivity and patient care." },
      { h: "Key terms", list: [
        "Objective / goal — a specific end to be achieved.",
        "Policy — a general guide to decision-making.",
        "Procedure — a fixed sequence of steps for a task.",
        "Forecasting — predicting future conditions to guide planning.",
        "Priority — the order of importance of tasks."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define planning. Explain its importance in nursing service.",
      "Describe the types of plans with examples.",
      "What are SMART objectives? Write the steps of the planning process.",
      "Explain the steps in decision-making and problem-solving.",
      "Discuss time-management techniques useful for a ward nurse."
    ],
    assessment: [
      { type: "mcq", q: "Planning is best defined as deciding in advance:", options: ["After the work is done", "What to do, how, when and by whom", "Only the budget", "Who to punish"], answer: 1, rationale: "Planning decides in advance the what, how, when, where and by whom of future action." },
      { type: "mcq", q: "In SMART objectives, the 'M' stands for:", options: ["Mandatory", "Measurable", "Multiple", "Moderate"], answer: 1, rationale: "SMART = Specific, Measurable, Achievable, Realistic, Time-bound." },
      { type: "mcq", q: "A general guide to decision-making is called a:", options: ["Procedure", "Policy", "Budget", "Rule"], answer: 1, rationale: "A policy is a broad guide for decisions; a procedure is a fixed sequence of steps." },
      { type: "mcq", q: "Plans used repeatedly such as policies and procedures are:", options: ["Single-use plans", "Standing plans", "Budgets", "Programmes"], answer: 1, rationale: "Standing plans (policies, procedures, rules) are used again and again." },
      { type: "mcq", q: "Routine decisions governed by established rules are called:", options: ["Non-programmed decisions", "Programmed decisions", "Random decisions", "Strategic decisions"], answer: 1, rationale: "Programmed decisions are routine and follow set rules; non-programmed decisions are new and complex." },
      { type: "mcq", q: "The FIRST step in problem-solving / decision-making is:", options: ["Implement the solution", "Identify and define the problem", "Evaluate the outcome", "Choose an alternative"], answer: 1, rationale: "One must clearly define the problem before collecting data or choosing solutions." },
      { type: "mcq", q: "Predicting future conditions to guide planning is called:", options: ["Forecasting", "Auditing", "Delegating", "Controlling"], answer: 0, rationale: "Forecasting estimates future conditions so plans can be prepared." },
      { type: "mcq", q: "A budget prepared for a single specific project is an example of a:", options: ["Standing plan", "Single-use plan", "Policy", "Rule"], answer: 1, rationale: "Budgets, programmes and projects are single-use plans made for one purpose." },
      { type: "mcq", q: "Distinguishing 'urgent' from 'important' tasks is a technique of:", options: ["Budgeting", "Time management", "Recruitment", "Auditing"], answer: 1, rationale: "Setting priorities by urgency and importance is a core time-management technique." },
      { type: "mcq", q: "Why is planning called the basis of controlling?", options: ["It wastes time", "Plans provide the standards against which performance is measured", "It replaces staffing", "It needs no objectives"], answer: 1, rationale: "Controlling compares performance to planned standards, so planning provides the yardstick." },
      { type: "fill", q: "Objectives that are Specific, Measurable, Achievable, Realistic and Time-bound are called ____ objectives.", accept: ["smart"], rationale: "SMART is the acronym for well-written objectives." },
      { type: "fill", q: "Choosing the best course of action from among alternatives is called ____.", accept: ["decision-making", "decision making", "decision-making."], rationale: "Decision-making is selecting the best option among alternatives." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "lm-05-organizing-ward",
    unit: "Unit 2 · Management functions",
    title: "Organizing — Organizational Structure & Ward/Unit Management",
    readMinutes: 17,
    summary: "The concept of organising, principles of organisation, types of organisational structure, the organogram and chain of command, and the management of a ward or unit including the role of the charge nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is organising?", p: "Organising is the management function of arranging people, work and resources in a structured way so that the plan can be carried out. It involves identifying the activities to be done, grouping them, assigning duties, and establishing relationships of authority and responsibility. The result is an organisational structure that shows who does what and who reports to whom." },
      { h: "Principles of organisation", list: [
        "Unity of objective — all parts work towards common goals.",
        "Division of work and specialisation.",
        "Scalar chain — a clear line of authority from top to bottom.",
        "Unity of command — each person answers to one superior.",
        "Span of control — a manageable number of subordinates per manager.",
        "Delegation of authority with matching responsibility.",
        "Coordination among all units."
      ] },
      { h: "Types of organisational structure", list: [
        "Line organisation — authority flows in a straight line from top to bottom; simple and clear.",
        "Line and staff — line managers are supported by specialist staff advisers.",
        "Functional organisation — grouped by specialised functions.",
        "Formal organisation — the official, planned structure.",
        "Informal organisation — the unofficial relationships and groups that arise naturally."
      ] },
      { h: "Organogram and chain of command", p: "An organogram (organisational chart) is a diagram showing the positions, departments and the lines of authority and communication in an organisation. The chain of command (scalar chain) is the unbroken line of authority from the top to the lowest level. In nursing it typically runs from the Director of Nursing through supervisors and ward sisters to staff nurses.", figure: {
        caption: "A simple nursing chain of command (organogram), from Director of Nursing down to staff nurses.",
        svg: '<svg viewBox="0 0 540 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nursing chain of command from director to staff nurses."><rect x="180" y="15" width="180" height="38" rx="8" fill="#7C2D12"/><text x="270" y="39" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#FFF7ED">Director of Nursing</text><rect x="180" y="80" width="180" height="36" rx="8" fill="#B45309"/><text x="270" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#FFF7ED">Nursing Superintendent</text><rect x="180" y="140" width="180" height="36" rx="8" fill="#FB923C"/><text x="270" y="163" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Ward Supervisor / Sister</text><rect x="120" y="200" width="130" height="34" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="185" y="221" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Staff Nurses</text><rect x="290" y="200" width="130" height="34" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="355" y="221" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Auxiliary staff</text><line x1="270" y1="53" x2="270" y2="80" stroke="#7C2D12" stroke-width="2"/><line x1="270" y1="116" x2="270" y2="140" stroke="#7C2D12" stroke-width="2"/><line x1="270" y1="176" x2="270" y2="190" stroke="#7C2D12" stroke-width="2"/><line x1="185" y1="190" x2="355" y2="190" stroke="#7C2D12" stroke-width="2"/><line x1="185" y1="190" x2="185" y2="200" stroke="#7C2D12" stroke-width="2"/><line x1="355" y1="190" x2="355" y2="200" stroke="#7C2D12" stroke-width="2"/></svg>'
      } },
      { h: "Ward / unit management", p: "Ward management is the organising and running of a nursing unit so that safe, efficient patient care is delivered. It covers physical management of the ward (cleanliness, safety, equipment, supplies), management of patient care, and management of personnel. The ward sister / charge nurse is the first-line manager responsible for the unit." },
      { h: "Components of ward management", list: [
        "Physical environment — cleanliness, ventilation, lighting, safety and infection control.",
        "Patient care — assignment, supervision and continuity of nursing care.",
        "Personnel — duty rosters, supervision, teaching and welfare of staff.",
        "Material and equipment — indenting, storage, maintenance and inventory.",
        "Records and reports — accurate documentation and communication.",
        "Preparation for ward rounds and admissions/discharges."
      ] },
      { h: "Role of the charge nurse / ward sister", list: [
        "Plans and assigns nursing care and prepares the duty roster.",
        "Supervises and guides nursing staff and students.",
        "Ensures a safe, clean and well-equipped ward.",
        "Maintains records, reports and the inventory of supplies.",
        "Coordinates with doctors, other departments and relatives.",
        "Prepares for and accompanies ward rounds.",
        "Teaches, motivates and evaluates staff."
      ] },
      { h: "Key terms", list: [
        "Organogram — chart of an organisation's structure.",
        "Chain of command — the line of authority from top to bottom.",
        "Span of control — number of staff a manager directly supervises.",
        "Line authority — direct authority over subordinates."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define organising. State the principles of organisation.",
      "Describe the types of organisational structure with examples.",
      "What is an organogram? Draw the chain of command in a nursing service.",
      "Discuss the components of ward management.",
      "Explain the role and responsibilities of a charge nurse / ward sister."
    ],
    assessment: [
      { type: "mcq", q: "Organising mainly involves:", options: ["Setting objectives", "Arranging people, work and resources to carry out the plan", "Measuring results", "Recruiting staff only"], answer: 1, rationale: "Organising structures people, activities and resources so the plan can be executed." },
      { type: "mcq", q: "A diagram that shows positions and lines of authority in an organisation is a/an:", options: ["Flow sheet", "Organogram", "Budget", "Roster"], answer: 1, rationale: "An organogram (organisational chart) depicts structure and authority lines." },
      { type: "mcq", q: "The unbroken line of authority from the top to the lowest level is the:", options: ["Span of control", "Chain of command", "Unity of objective", "Budget line"], answer: 1, rationale: "The chain of command (scalar chain) runs continuously from top to bottom." },
      { type: "mcq", q: "In a typical nursing service, who is the FIRST-line manager of a ward?", options: ["Director of Nursing", "Nursing Superintendent", "Ward Sister / Charge Nurse", "Medical Director"], answer: 2, rationale: "The ward sister / charge nurse is the first-line manager of the unit." },
      { type: "mcq", q: "Authority flowing in a straight line from top to bottom describes:", options: ["Functional organisation", "Line organisation", "Informal organisation", "Matrix organisation"], answer: 1, rationale: "Line organisation has authority flowing directly down the hierarchy." },
      { type: "mcq", q: "The unofficial relationships and groups that arise naturally among staff form the:", options: ["Formal organisation", "Informal organisation", "Line organisation", "Chain of command"], answer: 1, rationale: "Informal organisation refers to natural, unofficial social relationships at work." },
      { type: "mcq", q: "Which is a component of ward management?", options: ["National budgeting", "Physical environment and infection control", "Drug manufacturing", "Hospital architecture design"], answer: 1, rationale: "Maintaining a safe, clean physical environment is a core component of ward management." },
      { type: "mcq", q: "Line managers supported by specialist advisers describes a ____ organisation.", options: ["pure line", "line and staff", "informal", "matrix"], answer: 1, rationale: "In line-and-staff organisation, line managers are assisted by specialist staff advisers." },
      { type: "mcq", q: "The principle that all parts of an organisation work towards common goals is:", options: ["Unity of objective", "Span of control", "Delegation", "Informality"], answer: 0, rationale: "Unity of objective means every part works towards the same goals." },
      { type: "mcq", q: "Preparing the duty roster and assigning patient care in a ward is a responsibility of the:", options: ["Pharmacist", "Charge nurse / ward sister", "Lab technician", "Storekeeper"], answer: 1, rationale: "The charge nurse plans, assigns and supervises nursing care in the ward." },
      { type: "fill", q: "The chart showing an organisation's structure and lines of authority is called an ____.", accept: ["organogram", "organisational chart", "organizational chart", "organization chart"], rationale: "The organogram (organisational chart) depicts structure and reporting lines." },
      { type: "fill", q: "The natural, unofficial relationships among staff form the ____ organisation.", accept: ["informal"], rationale: "Informal organisation arises spontaneously, unlike the planned formal structure." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "lm-06-staffing-assignment",
    unit: "Unit 2 · Management functions",
    title: "Staffing & Patient-assignment Methods",
    readMinutes: 17,
    summary: "The meaning and process of staffing, factors affecting staffing needs, scheduling, and the main methods of assigning patient care — case, functional, team and primary nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is staffing?", p: "Staffing is the management function of putting the right number of suitably qualified people in the right positions and keeping them there. It includes determining staffing needs, recruitment, selection, orientation, training, scheduling, and retention of nursing personnel. The aim is to have enough nurses of the right skill mix to give safe, quality care around the clock." },
      { h: "The staffing process", list: [
        "Determine the number and type of staff needed (workload/acuity based).",
        "Recruit suitable candidates.",
        "Select and appoint the best candidates.",
        "Orient and induct new staff.",
        "Train and develop staff continuously.",
        "Schedule and assign duties (rosters).",
        "Evaluate, retain and promote staff."
      ] },
      { h: "Factors affecting staffing needs", list: [
        "Number of beds and bed-occupancy rate.",
        "Patient acuity / dependency (how much care patients need).",
        "Type of unit (ICU needs more staff than a general ward).",
        "Available skill mix and grades of staff.",
        "Layout of the ward and available equipment.",
        "Leave, absenteeism and turnover.",
        "Policies, standards and statutory norms."
      ] },
      { h: "Scheduling", p: "Scheduling is preparing the duty roster — deciding who works which shift. A good roster provides adequate cover on every shift, is fair, allows for weekly off and leave, balances skill mix, and is prepared in advance. Common patterns are the three-shift system (morning, evening, night). Cyclic rosters repeat a fixed pattern and are easy to plan and fair to staff." },
      { h: "Methods of patient-care assignment", p: "There are four classic ways of organising how nurses are assigned to patients. Each has advantages and disadvantages.", figure: {
        caption: "Four methods of assigning nursing care: case (total patient care), functional, team and primary nursing.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Case, functional, team and primary nursing methods."><rect x="15" y="55" width="125" height="70" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="77" y="82" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">CASE</text><text x="77" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">1 nurse → all</text><text x="77" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">care of patient</text><rect x="150" y="55" width="125" height="70" rx="9" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="212" y="82" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">FUNCTIONAL</text><text x="212" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">nurse → one</text><text x="212" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">task for all</text><rect x="285" y="55" width="125" height="70" rx="9" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="347" y="82" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">TEAM</text><text x="347" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">team leader +</text><text x="347" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">team → group</text><rect x="420" y="55" width="125" height="70" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="482" y="82" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">PRIMARY</text><text x="482" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">1 nurse fully</text><text x="482" y="113" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">accountable 24h</text></svg>'
      } },
      { h: "1. Case method (total patient care)", p: "One nurse is assigned to give all the care that one patient (or a few patients) needs during a shift. It is the oldest method, used in ICU and private duty. It gives holistic, continuous care and high accountability, but is costly and needs many qualified nurses." },
      { h: "2. Functional method", p: "Work is divided by task: one nurse gives all medicines, another does all dressings, another takes all vital signs, and so on. It is efficient when staff are few or less qualified, and gets tasks done quickly. But care becomes fragmented and impersonal, and no one nurse sees the whole patient." },
      { h: "3. Team nursing", p: "A team of nursing staff of mixed skills, led by a qualified team leader, cares for a group of patients. The team leader plans and supervises while members carry out care according to their ability. It uses skill mix well and encourages cooperation, but depends heavily on good communication and leadership." },
      { h: "4. Primary nursing", p: "One registered nurse (the primary nurse) takes full 24-hour accountability for planning the care of a small number of patients from admission to discharge; associate nurses give care in the primary nurse's absence following the plan. It gives highly individualised, continuous, accountable care, but needs enough qualified registered nurses." },
      { h: "Key terms", list: [
        "Skill mix — the combination of grades and qualifications of staff.",
        "Patient acuity / dependency — the level of care a patient needs.",
        "Roster / duty schedule — the plan of who works which shift.",
        "Recruitment — attracting suitable candidates; selection — choosing among them."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define staffing. Describe the staffing process.",
      "What factors affect the staffing needs of a nursing unit?",
      "Describe the four methods of patient-care assignment with their merits and demerits.",
      "Compare functional nursing and team nursing.",
      "Explain primary nursing and its advantages."
    ],
    assessment: [
      { type: "mcq", q: "Staffing is the function of putting the:", options: ["Right number of qualified people in the right positions", "Most equipment in a ward", "Budget into the bank", "Patients in beds"], answer: 0, rationale: "Staffing ensures the right number of suitable people fill and keep the positions." },
      { type: "mcq", q: "In the functional method of assignment, work is divided by:", options: ["Patient", "Task", "Doctor", "Diagnosis"], answer: 1, rationale: "Functional nursing assigns each nurse a specific task for all patients." },
      { type: "mcq", q: "One nurse gives ALL the care a patient needs during a shift in the:", options: ["Functional method", "Team method", "Case method (total patient care)", "Primary method"], answer: 2, rationale: "The case method assigns one nurse to provide total care for a patient during a shift." },
      { type: "mcq", q: "A qualified team leader directing a group of mixed-skill staff describes:", options: ["Case method", "Functional method", "Team nursing", "Private duty"], answer: 2, rationale: "Team nursing uses a team leader supervising mixed-skill members caring for a group of patients." },
      { type: "mcq", q: "In primary nursing, the primary nurse has:", options: ["No accountability", "24-hour accountability for a small group of patients", "Authority over the whole hospital", "Only night duty"], answer: 1, rationale: "The primary nurse holds 24-hour accountability for planning care from admission to discharge." },
      { type: "mcq", q: "Which method tends to make care most fragmented and impersonal?", options: ["Primary nursing", "Case method", "Functional method", "Team nursing"], answer: 2, rationale: "Functional (task-based) nursing fragments care; no one nurse sees the whole patient." },
      { type: "mcq", q: "The combination of grades and qualifications of nursing staff is called:", options: ["Skill mix", "Span of control", "Roster", "Acuity"], answer: 0, rationale: "Skill mix refers to the blend of staff grades and qualifications." },
      { type: "mcq", q: "The level of care a patient needs is called patient:", options: ["Acuity / dependency", "Census", "Mortality", "Turnover"], answer: 0, rationale: "Patient acuity / dependency describes how much nursing care a patient requires." },
      { type: "mcq", q: "Which assignment method is most commonly used in an ICU?", options: ["Functional method", "Case method (total patient care)", "Bureaucratic method", "No method"], answer: 1, rationale: "ICUs use the case method (total patient care) because patients need intensive one-to-one care." },
      { type: "mcq", q: "A roster that repeats a fixed pattern and is fair to staff is called a ____ roster.", options: ["random", "cyclic", "single", "informal"], answer: 1, rationale: "A cyclic roster repeats a set pattern, making it predictable and fair." },
      { type: "fill", q: "The method of assignment in which each nurse is given a single task (e.g. all medications) for all patients is the ____ method.", accept: ["functional"], rationale: "Functional nursing divides work by task rather than by patient." },
      { type: "fill", q: "The combination of grades and qualifications of staff on a unit is called the ____.", accept: ["skill mix", "skill-mix"], rationale: "Skill mix is the blend of staff competencies and grades." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "lm-07-hrm-development",
    unit: "Unit 2 · Management functions",
    title: "Human Resource Management & Staff Development",
    readMinutes: 16,
    summary: "The meaning and functions of human resource management, recruitment and selection, orientation, staff development and in-service education, performance appraisal, and conflict management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is human resource management (HRM)?", p: "Human resource management is the management of people at work — acquiring, developing, motivating and retaining the staff an organisation needs to achieve its goals. People are the most valuable resource of a nursing service, so good HRM is central to quality care. It links closely with the staffing function but adds a strong emphasis on developing and looking after people." },
      { h: "Functions of HRM", list: [
        "Human resource planning — forecasting future staff needs.",
        "Recruitment and selection — attracting and choosing the right people.",
        "Orientation and placement.",
        "Training and staff development.",
        "Performance appraisal.",
        "Compensation, welfare and motivation.",
        "Career development, promotion and retention.",
        "Discipline and grievance handling."
      ] },
      { h: "Recruitment and selection", list: [
        "Recruitment — the process of attracting suitable candidates (advertising, internal/external sources).",
        "Selection — choosing the best candidate through application screening, written test, interview and verification of qualifications.",
        "Appointment and placement — issuing the offer and placing the person in a suitable post."
      ] },
      { h: "Orientation / induction", p: "Orientation is the planned introduction of a new employee to the organisation, the job, co-workers and policies. A good orientation reduces anxiety, shortens the time to become productive, prevents errors and improves retention. It usually covers the philosophy and structure of the institution, job duties, policies, safety and a tour of the facilities." },
      { h: "Staff development & in-service education", p: "Staff development is the ongoing process of improving the knowledge, skills and attitudes of staff after they are employed. In-service education is education given at the workplace to keep staff up to date. Continuing education helps maintain competence, introduce new methods, prepare for promotion and improve the quality of care.", figure: {
        caption: "Staff development moves a nurse from orientation through in-service and continuing education to career growth.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Staff development pathway."><defs><marker id="lmArr7" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#15803D"/></marker></defs><rect x="15" y="50" width="120" height="50" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="75" y="79" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Orientation</text><rect x="160" y="50" width="120" height="50" rx="9" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="220" y="73" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">In-service</text><text x="220" y="89" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">education</text><rect x="305" y="50" width="120" height="50" rx="9" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="365" y="73" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Continuing</text><text x="365" y="89" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">education</text><rect x="450" y="50" width="100" height="50" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="500" y="73" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Career</text><text x="500" y="89" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">growth</text><line x1="135" y1="75" x2="156" y2="75" stroke="#15803D" stroke-width="2.5" marker-end="url(#lmArr7)"/><line x1="280" y1="75" x2="301" y2="75" stroke="#15803D" stroke-width="2.5" marker-end="url(#lmArr7)"/><line x1="425" y1="75" x2="446" y2="75" stroke="#15803D" stroke-width="2.5" marker-end="url(#lmArr7)"/></svg>'
      } },
      { h: "Performance appraisal", p: "Performance appraisal is the systematic, periodic evaluation of an employee's job performance against standards. Its purposes are to recognise good work, identify training needs, guide promotion and salary decisions, and improve performance through feedback. It should be objective, fair, based on observed behaviour, and followed by a constructive feedback discussion." },
      { h: "Conflict management", p: "Conflict is a disagreement or clash between people or groups over goals, values or resources. In a busy ward some conflict is unavoidable. Sources include scarce resources, unclear roles, poor communication and personality differences. Common strategies (Thomas-Kilmann) are: avoiding, accommodating, competing, compromising and collaborating. Collaboration (win-win) is usually the healthiest approach, while compromise is a useful middle ground." },
      { h: "Key terms", list: [
        "Recruitment vs selection — attracting candidates vs choosing among them.",
        "Orientation — introducing a new employee to the job and organisation.",
        "In-service education — workplace education to keep staff current.",
        "Performance appraisal — periodic evaluation of job performance.",
        "Collaboration — a win-win approach to resolving conflict."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define human resource management and list its functions.",
      "Differentiate between recruitment and selection.",
      "Explain the importance and content of orientation for new nurses.",
      "What is staff development? Discuss in-service education.",
      "Describe the sources of conflict and the strategies for conflict management."
    ],
    assessment: [
      { type: "mcq", q: "Human resource management is concerned mainly with:", options: ["Managing money", "Managing people at work", "Managing buildings", "Managing medicines"], answer: 1, rationale: "HRM is the management of people — acquiring, developing, motivating and retaining staff." },
      { type: "mcq", q: "Attracting suitable candidates for a job is called:", options: ["Selection", "Recruitment", "Appraisal", "Orientation"], answer: 1, rationale: "Recruitment attracts candidates; selection chooses the best among them." },
      { type: "mcq", q: "The planned introduction of a new employee to the job and organisation is:", options: ["Appraisal", "Orientation", "Promotion", "Discipline"], answer: 1, rationale: "Orientation (induction) introduces a new employee to the organisation and role." },
      { type: "mcq", q: "Education given at the workplace to keep staff up to date is:", options: ["In-service education", "Basic nursing course", "Recruitment", "Appraisal"], answer: 0, rationale: "In-service education is workplace education to maintain and update competence." },
      { type: "mcq", q: "The systematic periodic evaluation of an employee's job performance is:", options: ["Recruitment", "Performance appraisal", "Orientation", "Delegation"], answer: 1, rationale: "Performance appraisal evaluates job performance against standards." },
      { type: "mcq", q: "Which conflict-management strategy is usually considered the healthiest (win-win)?", options: ["Avoiding", "Competing", "Collaborating", "Accommodating"], answer: 2, rationale: "Collaboration seeks a win-win solution that satisfies both parties." },
      { type: "mcq", q: "A common source of conflict in a ward is:", options: ["Abundant resources", "Clear roles", "Scarce resources and poor communication", "Good teamwork"], answer: 2, rationale: "Scarce resources, unclear roles and poor communication commonly cause conflict." },
      { type: "mcq", q: "Choosing the best candidate through tests and interviews is called:", options: ["Recruitment", "Selection", "Induction", "Appraisal"], answer: 1, rationale: "Selection is choosing the most suitable candidate from those recruited." },
      { type: "mcq", q: "A major purpose of performance appraisal is to:", options: ["Punish all staff", "Identify training needs and guide promotion", "Replace staffing", "Avoid feedback"], answer: 1, rationale: "Appraisal recognises good work, identifies training needs and guides career decisions." },
      { type: "mcq", q: "The conflict strategy where one party gives in to satisfy the other is:", options: ["Competing", "Accommodating", "Collaborating", "Avoiding"], answer: 1, rationale: "Accommodating means one party yields to the other's wishes." },
      { type: "fill", q: "The ongoing process of improving the knowledge and skills of staff after employment is called staff ____.", accept: ["development"], rationale: "Staff development continuously improves employees' competence." },
      { type: "fill", q: "The conflict-resolution approach that seeks a win-win solution for both parties is ____.", accept: ["collaboration", "collaborating"], rationale: "Collaboration works towards a solution satisfying both sides." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "lm-08-directing-delegation",
    unit: "Unit 2 · Management functions",
    title: "Directing — Delegation, Supervision & Motivation",
    readMinutes: 17,
    summary: "The directing function, the principles and process of delegation, authority and responsibility, supervision, and the theories and methods of motivating nursing staff.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is directing?", p: "Directing (also called leading or actuating) is the management function of guiding, instructing and motivating staff to carry out the plan and achieve the goals. It is the action phase of management — turning plans into results through people. Its main elements are leadership, communication, delegation, supervision, motivation and coordination." },
      { h: "Delegation", p: "Delegation is the process by which a manager assigns part of their work, along with the necessary authority, to a subordinate, while remaining accountable for the result. It frees the manager for higher-level work, develops subordinates, and speeds up decisions. The manager delegates the task and the authority, but accountability for the overall outcome is never fully given away." },
      { h: "The 'five rights' of delegation", list: [
        "Right task — a task suitable to delegate.",
        "Right circumstance — the setting and resources are appropriate.",
        "Right person — a person competent to do the task.",
        "Right direction/communication — clear instructions and expectations.",
        "Right supervision/evaluation — appropriate monitoring and feedback."
      ] },
      { h: "Authority, responsibility & accountability", p: "These three must stay in balance for delegation to work.", figure: {
        caption: "In delegation, authority and responsibility are passed down, but accountability is retained by the manager.",
        svg: '<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Authority and responsibility delegated, accountability retained."><rect x="30" y="40" width="150" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="105" y="64" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">AUTHORITY</text><text x="105" y="83" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">right to act</text><rect x="200" y="40" width="150" height="55" rx="9" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="275" y="64" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">RESPONSIBILITY</text><text x="275" y="83" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">duty to perform</text><rect x="370" y="40" width="150" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="445" y="64" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">ACCOUNTABILITY</text><text x="445" y="83" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">answerable for result</text><text x="190" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">delegated downward</text><text x="445" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">retained by manager</text></svg>'
      } },
      { h: "Principles of delegation", list: [
        "Authority should match responsibility (parity).",
        "Delegate the task, not the accountability.",
        "Choose the right person for the task.",
        "Give clear instructions and expected outcomes.",
        "Avoid over-delegation and under-delegation.",
        "Supervise and give feedback, but avoid micromanaging."
      ] },
      { h: "Supervision", p: "Supervision is overseeing and guiding the work of staff to ensure that care is given correctly and standards are met. Good supervision is supportive and educational, not merely fault-finding. Its purposes are to maintain quality, develop staff, ensure safety, and provide guidance. Methods include direct observation, rounds, checking records, and conferences. A good supervisor teaches, encourages and corrects fairly." },
      { h: "Motivation", p: "Motivation is the inner drive that moves a person to act towards a goal. A motivated nurse works willingly, with energy and commitment. Managers motivate staff through recognition, fair treatment, good working conditions, opportunities to grow, involvement in decisions, and meaningful work." },
      { h: "Theories of motivation", list: [
        "Maslow's hierarchy of needs — people are motivated by needs in order: physiological, safety, social, esteem and self-actualisation.",
        "Herzberg's two-factor theory — hygiene factors (pay, conditions) prevent dissatisfaction; motivators (achievement, recognition, growth) create satisfaction.",
        "McGregor's Theory X and Theory Y — Theory X assumes people dislike work and need control; Theory Y assumes people are self-motivated and seek responsibility."
      ] },
      { h: "Key terms", list: [
        "Delegation — assigning a task and authority while keeping accountability.",
        "Parity principle — authority must equal responsibility.",
        "Supervision — overseeing and guiding staff to meet standards.",
        "Motivation — the inner drive to act towards a goal.",
        "Hygiene factor — a factor that prevents dissatisfaction but does not by itself motivate."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define directing and list its elements.",
      "What is delegation? Explain the 'five rights' and principles of delegation.",
      "Differentiate between authority, responsibility and accountability.",
      "Define supervision and describe its purposes and methods.",
      "Explain Maslow's and Herzberg's theories of motivation."
    ],
    assessment: [
      { type: "mcq", q: "Directing is best described as:", options: ["Setting objectives", "Guiding and motivating staff to carry out the plan", "Measuring performance", "Buying supplies"], answer: 1, rationale: "Directing (leading) guides and motivates people to turn plans into action." },
      { type: "mcq", q: "In delegation, what does the manager NEVER fully give away?", options: ["The task", "The authority", "Accountability for the result", "The instructions"], answer: 2, rationale: "Task and authority are delegated, but the manager retains accountability for the outcome." },
      { type: "mcq", q: "The principle that authority must equal responsibility is the:", options: ["Scalar principle", "Parity principle", "Unity principle", "Span principle"], answer: 1, rationale: "The parity principle requires authority to match responsibility." },
      { type: "mcq", q: "Which is one of the 'five rights' of delegation?", options: ["Right salary", "Right person", "Right building", "Right uniform"], answer: 1, rationale: "The five rights are task, circumstance, person, direction/communication and supervision/evaluation." },
      { type: "mcq", q: "Overseeing and guiding staff to ensure standards are met is:", options: ["Delegation", "Supervision", "Recruitment", "Budgeting"], answer: 1, rationale: "Supervision oversees and guides work to maintain quality and standards." },
      { type: "mcq", q: "The inner drive that moves a person to act towards a goal is:", options: ["Authority", "Motivation", "Delegation", "Audit"], answer: 1, rationale: "Motivation is the internal drive directing behaviour towards a goal." },
      { type: "mcq", q: "In Maslow's hierarchy, the highest level of need is:", options: ["Physiological needs", "Safety needs", "Self-actualisation", "Social needs"], answer: 2, rationale: "Self-actualisation, realising one's full potential, is the top of Maslow's hierarchy." },
      { type: "mcq", q: "In Herzberg's theory, pay and working conditions are classed as:", options: ["Motivators", "Hygiene factors", "Self-actualisers", "Esteem needs"], answer: 1, rationale: "Hygiene factors (pay, conditions) prevent dissatisfaction but do not by themselves motivate." },
      { type: "mcq", q: "McGregor's Theory Y assumes that people:", options: ["Dislike work and avoid it", "Are self-motivated and seek responsibility", "Cannot be trusted", "Work only for fear"], answer: 1, rationale: "Theory Y assumes people are self-motivated and willingly accept responsibility." },
      { type: "mcq", q: "A benefit of delegation is that it:", options: ["Increases the manager's workload", "Develops subordinates and frees the manager for higher work", "Removes accountability", "Slows decisions"], answer: 1, rationale: "Delegation develops staff and frees the manager for higher-level tasks." },
      { type: "fill", q: "Assigning a task and the necessary authority to a subordinate while remaining accountable is called ____.", accept: ["delegation"], rationale: "Delegation passes task and authority but keeps accountability with the manager." },
      { type: "fill", q: "In Herzberg's two-factor theory, factors such as achievement and recognition that create satisfaction are called ____.", accept: ["motivators", "motivator"], rationale: "Motivators (achievement, recognition, growth) create job satisfaction." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "lm-09-communication-pr",
    unit: "Unit 3 · Quality & professional practice",
    title: "Communication & Public Relations in Nursing",
    readMinutes: 16,
    summary: "The communication process, types and channels of communication, barriers to effective communication, principles of good communication, and public relations in the nursing service.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is communication?", p: "Communication is the process of exchanging information, ideas, thoughts and feelings between two or more people so that the message is understood. In management it is the lifeline that links all the functions and people together. Good communication is essential for safe patient care, teamwork and effective management." },
      { h: "The communication process", p: "Communication follows a basic cycle: a sender encodes a message and sends it through a channel to a receiver, who decodes it and gives feedback. 'Noise' (any interference) can distort the message at any stage.", figure: {
        caption: "The communication process: sender encodes a message, sends it through a channel to a receiver who decodes it and gives feedback.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication process: sender, message, channel, receiver, feedback."><defs><marker id="lmArr9" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="20" y="55" width="120" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="80" y="79" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">SENDER</text><text x="80" y="97" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">encodes message</text><rect x="210" y="55" width="140" height="55" rx="9" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="280" y="79" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">MESSAGE</text><text x="280" y="97" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">via channel</text><rect x="420" y="55" width="120" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="480" y="79" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">RECEIVER</text><text x="480" y="97" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">decodes message</text><line x1="140" y1="82" x2="206" y2="82" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr9)"/><line x1="350" y1="82" x2="416" y2="82" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr9)"/><path d="M480 110 C480 160 80 160 80 113" fill="none" stroke="#15803D" stroke-width="2.5" stroke-dasharray="5 4" marker-end="url(#lmArr9)"/><text x="280" y="152" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">feedback</text></svg>'
      } },
      { h: "Types of communication", list: [
        "Verbal — spoken or written words.",
        "Non-verbal — body language, facial expression, gestures, touch, posture and tone.",
        "Formal — through official channels (reports, memos, meetings).",
        "Informal — casual, unofficial (the 'grapevine')."
      ] },
      { h: "Direction / channels of communication", list: [
        "Downward — from superiors to subordinates (instructions, policies).",
        "Upward — from subordinates to superiors (reports, suggestions, feedback).",
        "Horizontal / lateral — between people at the same level (coordination).",
        "Diagonal — across different levels and departments."
      ] },
      { h: "Barriers to effective communication", list: [
        "Physical — noise, distance, faulty equipment.",
        "Language / semantic — unclear words, jargon, different languages.",
        "Psychological — emotions, prejudice, stress, lack of attention.",
        "Organisational — too many levels, unclear channels, information overload.",
        "Perceptual — different interpretations of the same message."
      ] },
      { h: "Principles of good communication", list: [
        "Clarity — keep the message clear and simple.",
        "Completeness — give all the information needed.",
        "Conciseness — be brief and to the point.",
        "Correctness — give accurate information.",
        "Courtesy — be polite and respectful.",
        "Consider the receiver — match the message to the listener.",
        "Listen actively and seek feedback."
      ] },
      { h: "Public relations (PR) in nursing", p: "Public relations is the planned effort to build and maintain a good image and good relationships between the nursing service and the public — patients, families, the community, the media and other staff. Good PR is built on courteous behaviour, quality care, honest information, prompt handling of complaints, and good conduct of every nurse. Every nurse is an ambassador of the profession; the way she treats a patient shapes public opinion of nursing." },
      { h: "Key terms", list: [
        "Encoding / decoding — putting a message into and out of symbols/words.",
        "Feedback — the receiver's response that confirms understanding.",
        "Grapevine — the informal communication network.",
        "Noise — any interference that distorts a message.",
        "Public relations — building a good image and relationships with the public."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define communication. Explain the communication process with a diagram.",
      "Describe the types and channels of communication.",
      "Discuss the barriers to effective communication and how to overcome them.",
      "State the principles of effective communication.",
      "What is public relations? Explain its importance in nursing."
    ],
    assessment: [
      { type: "mcq", q: "Communication is the process of:", options: ["Storing files", "Exchanging information so that it is understood", "Counting beds", "Writing budgets"], answer: 1, rationale: "Communication exchanges information, ideas and feelings so the message is understood." },
      { type: "mcq", q: "In the communication process, the person who starts the message is the:", options: ["Receiver", "Sender", "Channel", "Noise"], answer: 1, rationale: "The sender encodes and sends the message." },
      { type: "mcq", q: "The receiver's response that confirms a message was understood is called:", options: ["Noise", "Encoding", "Feedback", "Channel"], answer: 2, rationale: "Feedback is the receiver's response indicating the message was received and understood." },
      { type: "mcq", q: "Body language, facial expression and gestures are forms of ____ communication.", options: ["Verbal", "Non-verbal", "Written", "Formal"], answer: 1, rationale: "Non-verbal communication conveys meaning through body language and expression." },
      { type: "mcq", q: "Communication from a staff nurse upward to the ward sister is:", options: ["Downward communication", "Upward communication", "Horizontal communication", "Diagonal communication"], answer: 1, rationale: "Upward communication flows from subordinates to superiors." },
      { type: "mcq", q: "The informal communication network in an organisation is known as the:", options: ["Chain of command", "Grapevine", "Organogram", "Channel"], answer: 1, rationale: "The grapevine is the informal, unofficial communication network." },
      { type: "mcq", q: "Any interference that distorts a message is called:", options: ["Feedback", "Noise", "Encoding", "Channel"], answer: 1, rationale: "Noise is any barrier or interference that distorts the message." },
      { type: "mcq", q: "Using unclear words or jargon causes which type of barrier?", options: ["Physical barrier", "Semantic (language) barrier", "Financial barrier", "Legal barrier"], answer: 1, rationale: "Semantic / language barriers arise from unclear words, jargon or different languages." },
      { type: "mcq", q: "Communication between two ward sisters of the same level is:", options: ["Downward", "Upward", "Horizontal (lateral)", "Vertical"], answer: 2, rationale: "Horizontal (lateral) communication occurs between people at the same level." },
      { type: "mcq", q: "Public relations in nursing mainly aims to:", options: ["Increase paperwork", "Build a good image and relationships with the public", "Avoid patients", "Reduce nursing staff"], answer: 1, rationale: "PR builds and maintains a good image and good relationships with the public." },
      { type: "fill", q: "Communication that flows from superiors to subordinates (instructions, policies) is called ____ communication.", accept: ["downward"], rationale: "Downward communication passes from higher to lower levels." },
      { type: "fill", q: "Any interference that distorts a message during communication is called ____.", accept: ["noise"], rationale: "Noise is interference that can distort the message at any stage." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "lm-10-controlling-quality",
    unit: "Unit 3 · Quality & professional practice",
    title: "Controlling — Quality Assurance, Nursing Audit & Evaluation",
    readMinutes: 17,
    summary: "The controlling function and its steps, the concept of quality assurance in nursing, standards and indicators, nursing audit, and methods of evaluating nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is controlling?", p: "Controlling is the management function of measuring actual performance, comparing it with set standards, and taking corrective action where there are deviations. It ensures that work is going according to plan and that goals are being achieved. Controlling completes the management cycle and feeds information back into the next round of planning." },
      { h: "Steps in the control process", figure: {
        caption: "The control process: set standards, measure performance, compare with standards, then correct deviations.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Control process: set standards, measure, compare, correct."><defs><marker id="lmArr10" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="10" y="55" width="120" height="50" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="70" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Set</text><text x="70" y="93" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">standards</text><rect x="150" y="55" width="120" height="50" rx="9" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="210" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Measure</text><text x="210" y="93" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">performance</text><rect x="290" y="55" width="120" height="50" rx="9" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="350" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Compare with</text><text x="350" y="93" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">standards</text><rect x="430" y="55" width="120" height="50" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="490" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Correct</text><text x="490" y="93" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">deviations</text><line x1="130" y1="80" x2="146" y2="80" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr10)"/><line x1="270" y1="80" x2="286" y2="80" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr10)"/><line x1="410" y1="80" x2="426" y2="80" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#lmArr10)"/></svg>'
      } },
      { h: "Steps explained", list: [
        "Establish standards — the desired level of performance.",
        "Measure actual performance — observe, count, inspect, record.",
        "Compare performance with standards — identify any gaps.",
        "Take corrective action — fix deviations and prevent recurrence.",
        "Feed back the information into planning."
      ] },
      { h: "Quality assurance (QA)", p: "Quality assurance is a planned, systematic process of monitoring and evaluating nursing care against agreed standards and taking action to improve it. Its aim is to ensure that patients consistently receive safe, effective, high-quality care. QA is ongoing and cyclical: set standards → measure care → compare → improve → re-measure (the quality cycle)." },
      { h: "Standards and the Donabedian model", p: "A standard is an agreed, expected level of performance against which actual care is judged. Donabedian described three types of standards/indicators for evaluating quality:", list: [
        "Structure — the resources and setting (staff, equipment, policies, facilities).",
        "Process — what is actually done (the care given, procedures, documentation).",
        "Outcome — the result for the patient (recovery, satisfaction, complication rate)."
      ] },
      { h: "Nursing audit", p: "Nursing audit is the systematic review and evaluation of the quality of nursing care, usually by examining records and other evidence against set standards. A retrospective audit reviews care after the patient is discharged (from records); a concurrent audit reviews care while the patient is still receiving it. Audit identifies strengths and weaknesses and guides improvement." },
      { h: "Methods of evaluating nursing care", list: [
        "Nursing audit (record review).",
        "Direct observation of care and rounds.",
        "Patient satisfaction surveys and feedback.",
        "Peer review and self-evaluation.",
        "Performance appraisal of staff.",
        "Review of incident reports and indicators (e.g. falls, pressure ulcers, infection rates)."
      ] },
      { h: "Other quality tools", list: [
        "Total Quality Management (TQM) — organisation-wide commitment to continuous improvement.",
        "Continuous Quality Improvement (CQI) — ongoing small improvements in processes.",
        "Benchmarking — comparing performance with the best.",
        "Accreditation — external review against recognised standards."
      ] },
      { h: "Key terms", list: [
        "Standard — an agreed expected level of performance.",
        "Indicator — a measurable sign of quality.",
        "Audit — systematic review of care against standards.",
        "Structure, process, outcome — Donabedian's three aspects of quality.",
        "Corrective action — steps taken to fix deviations."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define controlling. Explain the steps of the control process.",
      "What is quality assurance? Describe the quality cycle in nursing.",
      "Explain Donabedian's structure-process-outcome approach to quality.",
      "Define nursing audit. Differentiate between retrospective and concurrent audit.",
      "Describe the methods used to evaluate the quality of nursing care."
    ],
    assessment: [
      { type: "mcq", q: "Controlling means measuring performance and:", options: ["Ignoring deviations", "Comparing it with standards and correcting deviations", "Setting objectives only", "Recruiting staff"], answer: 1, rationale: "Controlling compares actual performance with standards and corrects deviations." },
      { type: "mcq", q: "The FIRST step of the control process is to:", options: ["Correct deviations", "Establish standards", "Measure performance", "Compare results"], answer: 1, rationale: "Standards must be set first, before performance can be measured and compared." },
      { type: "mcq", q: "Quality assurance is mainly aimed at:", options: ["Reducing nursing staff", "Ensuring patients receive safe, high-quality care", "Increasing paperwork", "Avoiding evaluation"], answer: 1, rationale: "QA monitors and improves care so patients consistently receive high-quality care." },
      { type: "mcq", q: "In Donabedian's model, the staff, equipment and facilities are which type of standard?", options: ["Outcome", "Process", "Structure", "Audit"], answer: 2, rationale: "Structure standards refer to the resources and setting in which care is given." },
      { type: "mcq", q: "The actual care given to a patient (procedures, documentation) is which Donabedian element?", options: ["Structure", "Process", "Outcome", "Indicator"], answer: 1, rationale: "Process standards concern what is actually done in giving care." },
      { type: "mcq", q: "The patient's recovery, satisfaction and complication rate are examples of:", options: ["Structure standards", "Process standards", "Outcome standards", "Input standards"], answer: 2, rationale: "Outcome standards measure the results of care for the patient." },
      { type: "mcq", q: "A nursing audit done by reviewing records after the patient is discharged is:", options: ["Concurrent audit", "Retrospective audit", "Prospective audit", "Peer review"], answer: 1, rationale: "A retrospective audit reviews care after discharge from the records." },
      { type: "mcq", q: "An audit carried out while the patient is still receiving care is:", options: ["Retrospective audit", "Concurrent audit", "Final audit", "Closed audit"], answer: 1, rationale: "A concurrent audit reviews care while it is ongoing." },
      { type: "mcq", q: "An organisation-wide commitment to continuous improvement is called:", options: ["TQM", "Roster", "Organogram", "Span of control"], answer: 0, rationale: "Total Quality Management (TQM) is an organisation-wide approach to continuous improvement." },
      { type: "mcq", q: "A measurable sign used to assess the quality of care is a/an:", options: ["Indicator", "Roster", "Memo", "Channel"], answer: 0, rationale: "An indicator is a measurable marker of quality (e.g. fall rate, infection rate)." },
      { type: "fill", q: "The systematic review and evaluation of the quality of nursing care against set standards is called nursing ____.", accept: ["audit"], rationale: "Nursing audit reviews care against agreed standards." },
      { type: "fill", q: "In Donabedian's model, the result of care for the patient (e.g. recovery, satisfaction) is the ____ standard.", accept: ["outcome"], rationale: "Outcome standards measure the end results of care." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "lm-11-records-material-budget",
    unit: "Unit 3 · Quality & professional practice",
    title: "Records, Reports & Material/Budget Management",
    readMinutes: 16,
    summary: "The purposes and principles of records and reports, types of records and reports in nursing, material and inventory management, and the basics of budgeting in the nursing service.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Records and reports", p: "A record is a permanent written account of facts, events and care that have taken place. A report is a written or spoken account of information given from one person to another, often a summary of records. Together they provide communication, continuity of care, a legal document, and a basis for evaluation, research and statistics." },
      { h: "Purposes of records and reports", list: [
        "Provide a means of communication among the care team.",
        "Ensure continuity of patient care.",
        "Serve as a legal document and protect both patient and nurse.",
        "Provide data for evaluation, audit, research and statistics.",
        "Help in planning, staffing and budgeting.",
        "Provide evidence of the care given."
      ] },
      { h: "Principles / criteria of good records", list: [
        "Accuracy — record true, exact facts.",
        "Completeness — record all relevant information.",
        "Clarity and legibility — neat and readable.",
        "Timeliness — record promptly, as soon as possible after the event.",
        "Conciseness — brief but complete.",
        "Confidentiality — keep patient information private and secure.",
        "Objectivity — record facts, not opinions; sign and date every entry; never erase, use a single line for corrections."
      ] },
      { h: "Types of records and reports", list: [
        "Patient/clinical records — admission sheet, nurse's notes, TPR chart, intake-output chart, medication record, care plan.",
        "Ward records — census, duty roster, inventory/stock register, incident/accident register.",
        "Reports — change-of-shift (handover) report, 24-hour report, incident report, anecdotal report, statistical reports."
      ] },
      { h: "Material / resource management", p: "Material management is the planning, procuring, storing, distributing and controlling of the supplies and equipment needed for care. Good material management ensures the right items are available in the right quantity, at the right time, in good condition, and without waste. It covers indenting (requesting), receiving, storing, issuing and maintaining supplies." },
      { h: "Inventory and inventory control", p: "Inventory is the stock of supplies and equipment held by a unit. A stock register (ledger) records what is received and issued. Inventory control keeps stock at the right level — enough to meet needs but not so much that items expire or waste. Setting a minimum (re-order) level and a maximum level helps avoid both shortages and over-stocking. Items are checked physically against the register regularly.", figure: {
        caption: "Inventory control keeps stock between a minimum (re-order) level and a maximum level.",
        svg: '<svg viewBox="0 0 540 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inventory between minimum re-order level and maximum level."><line x1="60" y1="30" x2="60" y2="150" stroke="#7C2D12" stroke-width="2"/><line x1="60" y1="150" x2="500" y2="150" stroke="#7C2D12" stroke-width="2"/><line x1="60" y1="50" x2="500" y2="50" stroke="#15803D" stroke-width="2" stroke-dasharray="6 4"/><text x="505" y="54" font-family="sans-serif" font-size="11" fill="#15803D">Maximum level</text><line x1="60" y1="120" x2="500" y2="120" stroke="#B45309" stroke-width="2" stroke-dasharray="6 4"/><text x="505" y="124" font-family="sans-serif" font-size="11" fill="#B45309">Minimum / re-order</text><polyline points="60,55 130,115 130,55 210,118 210,55 290,116 290,55 370,118 370,55 450,115" fill="none" stroke="#7C2D12" stroke-width="2.5"/><text x="270" y="172" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">stock falls, then re-ordered up to maximum</text></svg>'
      } },
      { h: "Budget and budgeting", p: "A budget is a financial plan that estimates the income and expenditure of a unit for a given period. Budgeting is the process of preparing and using the budget to plan and control spending. Types include the capital budget (for major equipment and buildings), the operating/revenue budget (for day-to-day running, salaries, supplies) and the personnel budget (for staffing). A budget helps plan resources, control costs and evaluate spending." },
      { h: "Key terms", list: [
        "Record — a permanent written account; Report — information passed on, often a summary.",
        "Inventory — the stock of supplies held; Stock register — the ledger of receipts and issues.",
        "Re-order (minimum) level — stock level at which more is ordered.",
        "Budget — a financial plan of income and expenditure.",
        "Capital budget vs operating budget — major assets vs day-to-day running costs."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Define records and reports. State their purposes in nursing.",
      "Describe the principles/criteria of good record keeping.",
      "List the types of records and reports used in a ward.",
      "What is inventory control? Explain minimum and maximum stock levels.",
      "Define budget. Describe the types of budget in a nursing service."
    ],
    assessment: [
      { type: "mcq", q: "A permanent written account of facts and care given is a:", options: ["Report", "Record", "Roster", "Budget"], answer: 1, rationale: "A record is a permanent written account; a report is information passed on, often a summary." },
      { type: "mcq", q: "Which is a purpose of records and reports?", options: ["To waste paper", "To provide a legal document and ensure continuity of care", "To hide information", "To replace staff"], answer: 1, rationale: "Records provide communication, continuity, legal evidence and data for evaluation." },
      { type: "mcq", q: "When correcting an error in a record, the nurse should:", options: ["Erase it completely", "Use correction fluid", "Draw a single line through it, then correct, sign and date", "Tear out the page"], answer: 2, rationale: "Errors are corrected with a single line, never erased, and the correction is signed and dated." },
      { type: "mcq", q: "Keeping patient information private and secure is the principle of:", options: ["Confidentiality", "Conciseness", "Speed", "Delegation"], answer: 0, rationale: "Confidentiality requires that patient information be kept private and secure." },
      { type: "mcq", q: "The report given when one shift hands over to the next is the:", options: ["Incident report", "Change-of-shift (handover) report", "Annual report", "Audit report"], answer: 1, rationale: "The change-of-shift / handover report passes information from one shift to the next." },
      { type: "mcq", q: "The stock of supplies and equipment held by a unit is called the:", options: ["Budget", "Inventory", "Roster", "Census"], answer: 1, rationale: "Inventory is the stock of supplies and equipment held." },
      { type: "mcq", q: "The stock level at which fresh supplies should be ordered is the:", options: ["Maximum level", "Re-order (minimum) level", "Zero level", "Audit level"], answer: 1, rationale: "The re-order / minimum level triggers ordering more stock before it runs out." },
      { type: "mcq", q: "A financial plan estimating income and expenditure for a period is a:", options: ["Roster", "Record", "Budget", "Census"], answer: 2, rationale: "A budget is a financial plan of expected income and expenditure." },
      { type: "mcq", q: "The budget used for major equipment and buildings is the:", options: ["Operating budget", "Capital budget", "Personnel budget", "Petty cash"], answer: 1, rationale: "The capital budget covers major equipment and buildings; the operating budget covers running costs." },
      { type: "mcq", q: "Recording an event promptly as soon as possible after it happens is the principle of:", options: ["Timeliness", "Confidentiality", "Delegation", "Span of control"], answer: 0, rationale: "Timeliness means recording promptly to keep information accurate and useful." },
      { type: "fill", q: "The ledger that records the supplies received and issued by a ward is called the ____ register.", accept: ["stock", "inventory"], rationale: "The stock (inventory) register records receipts and issues of supplies." },
      { type: "fill", q: "A financial plan that estimates the income and expenditure of a unit for a period is called a ____.", accept: ["budget"], rationale: "A budget is the financial plan of income and expenditure." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "lm-12-legal-ethical-council",
    unit: "Unit 3 · Quality & professional practice",
    title: "Legal & Ethical Aspects, Professional Organizations & the Nursing Council",
    readMinutes: 17,
    summary: "Legal aspects of nursing practice, ethical principles and the code of conduct, the role of the nursing regulatory council and professional organisations, and the rights and responsibilities of nurses.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why legal and ethical knowledge matters", p: "Nursing is a regulated profession. Nurses must practise within the law and according to ethical principles to protect patients, the public and themselves. Understanding legal duties and ethical principles helps a nurse give safe, accountable care and avoid negligence, malpractice and professional misconduct." },
      { h: "Key legal terms", list: [
        "Law — rules made and enforced by the state.",
        "Negligence — failure to give the standard of care a reasonable nurse would give, causing harm.",
        "Malpractice — professional negligence by a trained person.",
        "Standard of care — the level of care expected of a competent nurse.",
        "Consent — voluntary, informed agreement to treatment (informed consent).",
        "Liability — legal responsibility for one's acts or omissions.",
        "Confidentiality — the legal and ethical duty to protect patient information."
      ] },
      { h: "Legal responsibilities of a nurse", list: [
        "Practise only within one's scope and registration.",
        "Obtain valid informed consent before procedures.",
        "Maintain accurate, honest records (legal documents).",
        "Protect patient confidentiality and privacy.",
        "Give safe care and avoid negligence.",
        "Report errors, incidents and abuse appropriately.",
        "Respect patients' rights and dignity."
      ] },
      { h: "Ethical principles", p: "Ethics is the study of right and wrong conduct. The main ethical principles guiding nursing are:", list: [
        "Autonomy — respecting the patient's right to make their own decisions.",
        "Beneficence — doing good and acting in the patient's best interest.",
        "Non-maleficence — doing no harm.",
        "Justice — treating people fairly and equally.",
        "Fidelity — keeping promises and being faithful to duties.",
        "Veracity — being truthful.",
        "Confidentiality — keeping patient information private."
      ], figure: {
        caption: "Core ethical principles in nursing: autonomy, beneficence, non-maleficence and justice.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ethical principles: autonomy, beneficence, non-maleficence, justice."><rect x="15" y="50" width="120" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="75" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Autonomy</text><text x="75" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">patient decides</text><rect x="145" y="50" width="120" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="205" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Beneficence</text><text x="205" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">do good</text><rect x="275" y="50" width="135" height="55" rx="9" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="342" y="74" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Non-maleficence</text><text x="342" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">do no harm</text><rect x="420" y="50" width="105" height="55" rx="9" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="472" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">Justice</text><text x="472" y="92" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">fairness</text></svg>'
      } },
      { h: "Code of professional conduct", p: "A code of conduct (code of ethics) is a set of rules of professional behaviour issued by the nursing council or professional body. It guides nurses in their duties towards patients, the profession, co-workers and society. It covers competence, respect for patients, confidentiality, honesty, accountability and maintaining the dignity of the profession." },
      { h: "The Nursing Council (regulatory body)", p: "A nursing council is the statutory body that regulates nursing education and practice to protect the public. In Bangladesh this is the Bangladesh Nursing and Midwifery Council (BNMC). Its functions include:", list: [
        "Setting and approving standards of nursing and midwifery education.",
        "Recognising and inspecting training institutions and curricula.",
        "Conducting or approving licensing examinations.",
        "Maintaining the register of qualified nurses and midwives (registration/licensure).",
        "Prescribing and enforcing a code of professional conduct.",
        "Taking disciplinary action for professional misconduct."
      ] },
      { h: "Professional organisations", p: "Professional organisations are voluntary bodies of nurses that promote the profession, protect members' interests and advance standards. Examples include the national nurses' association and the International Council of Nurses (ICN). Their functions include continuing education, setting professional standards, advocacy, research, welfare of members, and representing nurses' views to government and the public." },
      { h: "Rights and responsibilities of nurses", list: [
        "Rights — safe working conditions, fair pay, respect, continuing education, and to practise within their scope.",
        "Responsibilities — give competent and safe care, keep knowledge current, respect patients' rights, maintain confidentiality, and uphold the dignity and standards of the profession."
      ] },
      { h: "Key terms", list: [
        "Registration / licensure — official authorisation to practise nursing.",
        "Code of conduct — rules of professional behaviour.",
        "Negligence — failure to meet the standard of care, causing harm.",
        "Informed consent — voluntary, informed agreement to treatment.",
        "BNMC — Bangladesh Nursing and Midwifery Council, the regulatory body.",
        "ICN — International Council of Nurses."
      ] }
    ],
    references: REF_LM,
    examQuestions: [
      "Explain the legal responsibilities of a nurse.",
      "Define and explain the ethical principles of autonomy, beneficence, non-maleficence and justice.",
      "What is a code of professional conduct? Why is it important?",
      "Describe the functions of the nursing council (BNMC).",
      "Discuss the role of professional nursing organisations and the rights and responsibilities of nurses."
    ],
    assessment: [
      { type: "mcq", q: "Failure to give the standard of care that a reasonable nurse would give, causing harm, is:", options: ["Negligence", "Autonomy", "Fidelity", "Beneficence"], answer: 0, rationale: "Negligence is failure to meet the expected standard of care, causing harm." },
      { type: "mcq", q: "Respecting the patient's right to make their own decisions is the principle of:", options: ["Beneficence", "Autonomy", "Justice", "Veracity"], answer: 1, rationale: "Autonomy respects the patient's right to self-determination." },
      { type: "mcq", q: "The ethical principle of 'doing no harm' is called:", options: ["Beneficence", "Non-maleficence", "Justice", "Fidelity"], answer: 1, rationale: "Non-maleficence is the duty to avoid causing harm." },
      { type: "mcq", q: "Treating all patients fairly and equally is the principle of:", options: ["Autonomy", "Justice", "Veracity", "Fidelity"], answer: 1, rationale: "Justice means treating people fairly and without discrimination." },
      { type: "mcq", q: "Voluntary, informed agreement to a treatment or procedure is called:", options: ["Liability", "Informed consent", "Negligence", "Registration"], answer: 1, rationale: "Informed consent is the patient's voluntary, informed agreement to treatment." },
      { type: "mcq", q: "The statutory body that regulates nursing education and practice in Bangladesh is the:", options: ["ICN", "WHO", "BNMC", "ILO"], answer: 2, rationale: "The Bangladesh Nursing and Midwifery Council (BNMC) regulates nursing and midwifery in Bangladesh." },
      { type: "mcq", q: "Maintaining the register of qualified nurses is a function of the:", options: ["Professional association", "Nursing council", "Hospital pharmacy", "Patient"], answer: 1, rationale: "The nursing council maintains the register (licensure) of qualified nurses." },
      { type: "mcq", q: "Being truthful with patients reflects the principle of:", options: ["Veracity", "Justice", "Autonomy", "Liability"], answer: 0, rationale: "Veracity is the duty to be truthful." },
      { type: "mcq", q: "The International Council of Nurses (ICN) is an example of a:", options: ["Government ministry", "Professional organisation of nurses", "Hospital", "Drug company"], answer: 1, rationale: "The ICN is a professional organisation representing nurses internationally." },
      { type: "mcq", q: "Keeping promises and being faithful to one's professional duties is the principle of:", options: ["Justice", "Fidelity", "Beneficence", "Autonomy"], answer: 1, rationale: "Fidelity is keeping promises and remaining faithful to commitments and duties." },
      { type: "fill", q: "The official authorisation to practise nursing, granted by the council, is called registration or ____.", accept: ["licensure", "licence", "license"], rationale: "Registration / licensure is the legal authorisation to practise nursing." },
      { type: "fill", q: "The ethical principle of 'doing no harm' to the patient is called ____.", accept: ["non-maleficence", "nonmaleficence", "non maleficence"], rationale: "Non-maleficence is the duty to avoid causing harm to the patient." }
    ]
  }
];
