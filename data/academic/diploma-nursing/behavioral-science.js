/* ============================================================
   Diploma in Nursing · D111 Behavioral Science — 18 topics.
   Aligned to the BNMC 2018 syllabus (psychology, sociology &
   anthropology applied to nursing). Topics 1-5 authored; 6-18 are
   structured placeholders. Grounded in standard texts:
     • Niven N. The Psychology of Nursing Care. Palgrave Macmillan.
     • Basavanthappa BT. Psychology / Sociology for Nurses. Jaypee.
     • Giddens A, Sutton PW. Sociology. Polity Press.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_BEH = [
  "Niven N. The Psychology of Nursing Care. Palgrave Macmillan.",
  "Basavanthappa BT. Psychology / Sociology for Nurses. Jaypee Brothers.",
  "Giddens A, Sutton PW. Sociology. Polity Press."
];

window.Academic.topics["diploma-nursing/behavioral-science"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "bh-01-introduction",
    unit: "Unit 1 · Foundations of Behavioral Science",
    title: "Introduction to Behavioral Science",
    readMinutes: 16,
    summary: "What behavioral science is, its components (psychology, sociology, anthropology), the brief history of psychology, and why nurses study human behavior.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is behavioral science?", p: "Behavioral science is the scientific study of human behaviour — how people think, feel and act, and why. It draws on several disciplines, mainly psychology, sociology and anthropology, to understand behaviour at the level of the individual, the group and the wider society. For nurses, it provides the understanding needed to care for the whole person, not just the disease." },
      { h: "Components of behavioral science", p: "Behavioral science combines three closely related disciplines.", figure: {
        caption: "Figure 1.1 — Behavioral science draws on three disciplines to explain behaviour.",
        svg: "<svg viewBox='0 0 560 90' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Components of behavioral science'><defs><marker id='bh1' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          [["Psychology", 10], ["Sociology", 175], ["Anthropology", 340]].map(function (p, i) { var x = p[1]; return "<rect x='" + x + "' y='14' width='150' height='34' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='" + (x + 75) + "' y='36' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>" + p[0] + "</text>"; }).join("") +
          "<rect x='200' y='62' width='160' height='24' rx='8' fill='#C99A50'/><text x='280' y='79' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#fff'>Human behaviour</text>" +
          "<line x1='85' y1='48' x2='250' y2='62' stroke='#2E63B8' stroke-width='1.5' marker-end='url(#bh1)'/><line x1='250' y1='48' x2='280' y2='62' stroke='#2E63B8' stroke-width='1.5' marker-end='url(#bh1)'/><line x1='415' y1='48' x2='320' y2='62' stroke='#2E63B8' stroke-width='1.5' marker-end='url(#bh1)'/>" +
          "</svg>"
      } },
      { h: "The three disciplines", list: [
        "Psychology — the study of the mind and individual behaviour (thoughts, feelings, motivation, personality, learning).",
        "Sociology — the study of society, social groups, institutions and relationships.",
        "Anthropology — the study of human beings, their culture and development across societies."
      ] },
      { h: "Significance of psychology in nursing", p: "Psychology helps the nurse understand how patients think, feel and behave when they are ill, anxious or in pain; how to communicate and build trust; how people learn and change health behaviour; and how to support coping. This understanding is essential for holistic, person-centred care and for the nurse's own self-awareness and wellbeing." },
      { h: "A brief history of psychology", p: "Psychology grew from philosophy into a science in the late 19th century. Major schools of thought developed over time: structuralism (Wundt) analysed the elements of the mind; functionalism studied the mind's purposes; psychoanalysis (Freud) emphasised the unconscious; behaviourism (Watson, Skinner) focused on observable behaviour and learning; humanistic psychology (Maslow, Rogers) stressed personal growth and free will; and modern cognitive psychology and neuropsychology study mental processes and the brain." },
      { h: "Why nurses study behavioral science", p: "Health and illness are deeply influenced by behaviour, emotions, family, culture and society. Behavioral science equips the nurse to assess and respond to these factors — improving communication, promoting healthy behaviour, supporting patients emotionally, and delivering care that respects each person's background and needs." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define behavioral science and name its components.",
      "Differentiate psychology, sociology and anthropology.",
      "Explain the significance of psychology in nursing.",
      "Outline the major schools of thought in the history of psychology.",
      "Why is the study of behavioral science important for nurses?"
    ],
    assessment: [
      { type: "mcq", q: "Behavioral science is the scientific study of:", options: ["Chemical reactions", "Human behaviour", "Rocks and minerals", "Plant growth"], answer: 1, rationale: "Behavioral science studies how and why humans think, feel and act." },
      { type: "mcq", q: "The study of the mind and individual behaviour is:", options: ["Sociology", "Psychology", "Anthropology", "Biology"], answer: 1, rationale: "Psychology focuses on the individual mind and behaviour." },
      { type: "mcq", q: "The study of society, groups and social institutions is:", options: ["Psychology", "Sociology", "Physiology", "Pharmacology"], answer: 1, rationale: "Sociology studies society, groups and institutions." },
      { type: "mcq", q: "The school of psychology that emphasised the unconscious mind was founded by:", options: ["Skinner", "Freud (psychoanalysis)", "Wundt", "Rogers"], answer: 1, rationale: "Freud founded psychoanalysis, emphasising the unconscious." },
      { type: "mcq", q: "Behaviourism, focusing on observable behaviour and learning, is associated with:", options: ["Watson and Skinner", "Freud", "Maslow", "Wundt"], answer: 0, rationale: "Watson and Skinner are key figures in behaviourism." },
      { type: "mcq", q: "The study of human culture and development across societies is:", options: ["Anthropology", "Psychology", "Chemistry", "Economics"], answer: 0, rationale: "Anthropology studies humans, their culture and development." },
      { type: "mcq", q: "Humanistic psychology, stressing personal growth, is associated with:", options: ["Skinner", "Maslow and Rogers", "Freud", "Pavlov"], answer: 1, rationale: "Maslow and Rogers are leaders of humanistic psychology." },
      { type: "mcq", q: "Psychology helps nurses mainly to:", options: ["Repair machines", "Understand patients' behaviour and communicate effectively", "Mix chemicals", "Do accounts"], answer: 1, rationale: "Psychology aids understanding of behaviour, communication and coping." },
      { type: "mcq", q: "Psychology became established as a science in the:", options: ["Late 19th century", "Stone Age", "21st century only", "Year 2000"], answer: 0, rationale: "Psychology emerged as a science in the late 1800s (e.g. Wundt's laboratory)." },
      { type: "mcq", q: "Care that addresses the whole person — body, mind and social context — is called:", options: ["Holistic care", "Partial care", "Emergency care", "Technical care"], answer: 0, rationale: "Behavioral science supports holistic, person-centred care." },
      { type: "fill", q: "The study of the mind and individual behaviour is called ______.", accept: ["psychology"], rationale: "Psychology studies the individual mind and behaviour." },
      { type: "fill", q: "The branch of behavioral science that studies society and social groups is ______.", accept: ["sociology"], rationale: "Sociology studies society, groups and institutions." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "bh-02-sociology",
    unit: "Unit 1 · Foundations of Behavioral Science",
    title: "Introduction to Sociology in Nursing",
    readMinutes: 15,
    summary: "What sociology is, its key concepts and social institutions, its uses in nursing, its relationship with psychology, and how social factors affect health.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is sociology?", p: "Sociology is the scientific study of society — of how people live together in groups, how they relate to one another, and how social institutions and structures shape their lives. Where psychology focuses on the individual, sociology focuses on groups and society as a whole." },
      { h: "Key sociological concepts", list: [
        "Society — a large group of people sharing a territory, culture and institutions.",
        "Community — a group sharing a locality or common interest.",
        "Social institutions — established structures that meet society's needs: family, education, religion, economy, government and health care.",
        "Socialisation — the lifelong process by which people learn their society's norms, values and roles.",
        "Norms and values — the rules and shared ideas of right behaviour in a society."
      ] },
      { h: "Uses of sociology in nursing", p: "Sociology helps nurses understand the social context of health and illness: how family, community, culture, education, income and beliefs shape whether people stay healthy, when they seek care, and how they respond to treatment. It supports work with families and communities, health education, and culturally appropriate care." },
      { h: "Relationship between sociology and psychology", p: "Sociology and psychology are complementary. Psychology explains the individual's inner experience and behaviour; sociology explains the social forces acting on that person. A patient's response to illness, for example, is shaped both by their personality (psychology) and by their family, culture and economic situation (sociology). Nurses use both to understand the whole person." },
      { h: "Social factors affecting health", p: "Health is strongly influenced by social factors (the 'social determinants of health'): poverty and income, education, housing, water and sanitation, occupation, gender, and access to health services. Many illnesses in Bangladesh are linked to these social conditions, so improving them is as important as medical treatment." },
      { h: "Nursing relevance", p: "By understanding society and its institutions, the nurse can see why people behave as they do around health, involve families and communities in care, address social barriers to treatment, and advocate for the conditions that keep people healthy." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define sociology and differentiate it from psychology.",
      "Name the main social institutions and define socialisation.",
      "Describe the uses of sociology in nursing.",
      "Explain how sociology and psychology complement each other.",
      "What social factors affect health?"
    ],
    assessment: [
      { type: "mcq", q: "Sociology is the study of:", options: ["The individual mind", "Society and social groups", "Body chemistry", "Microbes"], answer: 1, rationale: "Sociology studies society and how people live in groups." },
      { type: "mcq", q: "Which is a social institution?", options: ["The family", "A red blood cell", "A neuron", "A vaccine"], answer: 0, rationale: "Family, education, religion, economy and health care are social institutions." },
      { type: "mcq", q: "The lifelong process of learning a society's norms and roles is:", options: ["Socialisation", "Sterilisation", "Digestion", "Respiration"], answer: 0, rationale: "Socialisation is how people learn their society's norms, values and roles." },
      { type: "mcq", q: "Compared with sociology, psychology focuses more on the:", options: ["Whole society", "Individual", "Economy", "Government"], answer: 1, rationale: "Psychology focuses on the individual; sociology on groups and society." },
      { type: "mcq", q: "Poverty, education and sanitation are examples of:", options: ["Vital signs", "Social determinants of health", "Medicines", "Microbes"], answer: 1, rationale: "These are social determinants (factors) that affect health." },
      { type: "mcq", q: "A group of people sharing a locality or common interest is a:", options: ["Community", "Cell", "Tissue", "Vaccine"], answer: 0, rationale: "A community shares a locality or common interest." },
      { type: "mcq", q: "Sociology helps nurses mainly to understand the ______ context of health.", options: ["chemical", "social", "molecular", "mechanical"], answer: 1, rationale: "Sociology illuminates the social context of health and illness." },
      { type: "mcq", q: "Shared rules of right behaviour in a society are called:", options: ["Norms", "Genes", "Reflexes", "Enzymes"], answer: 0, rationale: "Norms are a society's rules of expected behaviour." },
      { type: "mcq", q: "Sociology and psychology are best described as:", options: ["Identical", "Complementary", "Unrelated", "Opposed"], answer: 1, rationale: "They complement each other in understanding the whole person." },
      { type: "mcq", q: "Improving water, sanitation and education improves health because they are:", options: ["Irrelevant to health", "Social determinants of health", "Only economic issues", "Medical treatments"], answer: 1, rationale: "Social determinants strongly shape population health." },
      { type: "fill", q: "Established social structures such as family, religion and education are called social ______.", accept: ["institutions"], rationale: "Social institutions meet society's basic needs." },
      { type: "fill", q: "The process of learning the norms and roles of one's society is ______.", accept: ["socialisation", "socialization"], rationale: "Socialisation transmits a society's culture to its members." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "bh-03-social-structure",
    unit: "Unit 2 · Society & Health",
    title: "Social Structure",
    readMinutes: 15,
    summary: "The meaning and elements of social structure, social groups and institutions, social class and status, and how social structure relates to health and the health-care system.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is social structure?", p: "Social structure is the organised pattern of relationships, groups and institutions that make up a society and shape how people behave. It is the relatively stable 'framework' of society — the arrangement of statuses, roles, groups and institutions through which social life is organised." },
      { h: "Elements of social structure", list: [
        "Status — a person's position in society (e.g. mother, nurse, student).",
        "Role — the expected behaviour that goes with a status.",
        "Groups — sets of people who interact and share a sense of belonging (family, peers, work teams).",
        "Institutions — established structures meeting society's needs (family, education, religion, economy, health care).",
        "Norms and values — the rules and shared ideals guiding behaviour."
      ] },
      { h: "Status and role", p: "A status is a social position; a role is the set of behaviours expected of someone in that position. A person holds many statuses at once (for example, a woman may be a mother, a daughter and a nurse), each with its own role. When roles clash — such as caring for patients while caring for one's own family — this is called role conflict, an important source of stress." },
      { h: "Social class, status and economic position", p: "Societies are stratified — divided into layers — by factors such as wealth, occupation, education and family background. Social class and economic status strongly affect people's living conditions, opportunities and health. An anthropological perspective reminds us that the form of these divisions varies between cultures and societies." },
      { h: "Social structure and the health-care system", p: "Social structure shapes health in powerful ways. People in lower social and economic positions generally have poorer living conditions, less access to care, and worse health — an inequality seen worldwide and in Bangladesh. The health-care system is itself a social institution, organised in structures (from community clinics to hospitals) through which people seek and receive care." },
      { h: "Nursing relevance", p: "Understanding social structure helps the nurse appreciate how a patient's social position, roles and economic situation affect their health, their ability to follow treatment, and their access to care — and to advocate for fairer, more accessible services and to support patients facing role conflict and disadvantage." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define social structure and list its elements.",
      "Differentiate status and role, and define role conflict.",
      "Explain social class and economic status.",
      "How does social structure relate to health and the health-care system?",
      "Why is understanding social structure important for nurses?"
    ],
    assessment: [
      { type: "mcq", q: "Social structure is best described as:", options: ["A building's design", "The organised pattern of social relationships and institutions", "A type of cell", "A medicine"], answer: 1, rationale: "Social structure is the stable framework of statuses, roles, groups and institutions." },
      { type: "mcq", q: "A person's position in society (e.g. nurse, mother) is their:", options: ["Role", "Status", "Norm", "Value"], answer: 1, rationale: "Status is a social position; role is the behaviour expected of it." },
      { type: "mcq", q: "The expected behaviour that goes with a status is the:", options: ["Status", "Role", "Group", "Class"], answer: 1, rationale: "A role is the set of expected behaviours linked to a status." },
      { type: "mcq", q: "When the demands of two roles clash (e.g. work vs family), this is:", options: ["Role conflict", "Socialisation", "Status quo", "Norm"], answer: 0, rationale: "Role conflict occurs when different roles make competing demands." },
      { type: "mcq", q: "Dividing society into layers by wealth, occupation and education is called social:", options: ["Stratification", "Sterilisation", "Mobility only", "Isolation"], answer: 0, rationale: "Social stratification is the layering of society into classes/strata." },
      { type: "mcq", q: "People in lower social/economic positions tend to have:", options: ["Better health always", "Poorer access to care and worse health", "No effect on health", "Identical outcomes"], answer: 1, rationale: "Lower social position is linked to poorer conditions, access and health." },
      { type: "mcq", q: "The health-care system is an example of a:", options: ["Social institution", "Single cell", "Vaccine", "Reflex"], answer: 0, rationale: "Health care is a social institution organised in structures." },
      { type: "mcq", q: "A set of people who interact and share a sense of belonging is a social:", options: ["Group", "Status", "Norm", "Class only"], answer: 0, rationale: "A social group is a set of interacting people with a sense of belonging." },
      { type: "mcq", q: "A single person usually holds:", options: ["Only one status for life", "Many statuses at once", "No status", "Only a role, no status"], answer: 1, rationale: "People hold multiple statuses simultaneously (e.g. mother, nurse, daughter)." },
      { type: "mcq", q: "Shared ideals guiding what a society considers good or desirable are:", options: ["Values", "Genes", "Cells", "Reflexes"], answer: 0, rationale: "Values are shared ideals; norms are the rules expressing them." },
      { type: "fill", q: "The behaviour expected of someone in a given social position is their ______.", accept: ["role"], rationale: "Role is the expected behaviour linked to a status." },
      { type: "fill", q: "The layering of society into classes by wealth and occupation is social ______.", accept: ["stratification"], rationale: "Social stratification divides society into ranked layers." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "bh-04-family",
    unit: "Unit 2 · Society & Health",
    title: "The Family",
    readMinutes: 15,
    summary: "The definition and types of family, its characteristics and functions, the roles and responsibilities of family members, and the family's part in caring for the sick.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is the family?", p: "The family is the basic and most important unit of society — a group of people related by blood, marriage or adoption who usually live together and share economic and emotional life. It is the first place where a child is socialised and learns values, and it remains central to a person's health and wellbeing throughout life." },
      { h: "Types of family", list: [
        "Nuclear family — parents and their children living together.",
        "Joint / extended family — several generations or related families living together (common in Bangladesh).",
        "Single-parent family — one parent with children.",
        "Blended / reconstituted family — formed when parents with children from previous unions join."
      ], figure: { caption: "Figure 4.1 — Types of family. Add an illustration if available.", placeholder: true } },
      { h: "Characteristics of the family", p: "Families share common features: a relationship by marriage, blood or adoption; usually a common residence; economic cooperation; emotional bonds and a sense of belonging; and the reproduction and rearing of children. The exact form varies by culture, but the family is found in every society." },
      { h: "Functions of the family", list: [
        "Reproduction — continuing society by having children.",
        "Socialisation — teaching children values, norms and behaviour.",
        "Economic — providing food, shelter and material needs.",
        "Emotional — giving love, security and support.",
        "Health care — caring for members in illness and promoting healthy living."
      ] },
      { h: "Roles and responsibilities", p: "Within the family, members hold roles and responsibilities — for example, parents provide, protect and guide; children learn and, later, support elders. These roles are shaped by culture and may change with circumstances (such as illness, where one member becomes the carer). Clear, supportive family roles strengthen the family's ability to cope." },
      { h: "Care of the sick in the family", p: "In Bangladesh, as in much of the world, the family is the main carer for sick members — providing food, hygiene, medicines, comfort and transport to health services. Illness in one member affects the whole family emotionally and financially. Nurses therefore work with families, teach them home-care skills, and support them as partners in care." },
      { h: "Nursing relevance", p: "Because the family is central to health, nurses assess and involve the family in care, teach family caregivers, recognise the strain that illness places on a family, and support the family unit — especially important in community and home-based nursing." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define the family and describe its types.",
      "List the characteristics of the family.",
      "Describe the functions of the family.",
      "Discuss the roles and responsibilities of family members.",
      "Explain the family's role in caring for a sick person."
    ],
    assessment: [
      { type: "mcq", q: "The basic unit of society is the:", options: ["Hospital", "Family", "School", "Market"], answer: 1, rationale: "The family is the basic and most important unit of society." },
      { type: "mcq", q: "A family of parents and their children only is a:", options: ["Joint family", "Nuclear family", "Single-parent family", "Blended family"], answer: 1, rationale: "A nuclear family is parents plus their children." },
      { type: "mcq", q: "Several generations living together form a/an:", options: ["Nuclear family", "Joint/extended family", "Single-parent family", "Peer group"], answer: 1, rationale: "The joint/extended family includes several generations, common in Bangladesh." },
      { type: "mcq", q: "Teaching children the values and norms of society is the family function of:", options: ["Reproduction", "Socialisation", "Economic support", "Recreation only"], answer: 1, rationale: "Socialisation is a core family function." },
      { type: "mcq", q: "Which is a function of the family?", options: ["Manufacturing cars", "Providing emotional support and care", "Running the government", "Printing money"], answer: 1, rationale: "Families provide emotional support, socialisation, economics and health care." },
      { type: "mcq", q: "In Bangladesh, the main carer for a sick person at home is usually the:", options: ["Government", "Family", "Police", "Employer"], answer: 1, rationale: "The family is typically the primary caregiver for the sick." },
      { type: "mcq", q: "A family with one parent and children is a:", options: ["Nuclear family", "Joint family", "Single-parent family", "Extended family"], answer: 2, rationale: "A single-parent family has one parent raising the children." },
      { type: "mcq", q: "Illness in one family member usually:", options: ["Affects only that person", "Affects the whole family emotionally and financially", "Has no effect on others", "Improves family income"], answer: 1, rationale: "Illness affects the family as a unit, emotionally and financially." },
      { type: "mcq", q: "Members of a family are related by:", options: ["Blood, marriage or adoption", "Shared workplace only", "Same age only", "Same illness"], answer: 0, rationale: "Family ties are by blood, marriage or adoption." },
      { type: "mcq", q: "Nurses should regard the family as:", options: ["Irrelevant to care", "Partners in the patient's care", "An obstacle", "Only visitors"], answer: 1, rationale: "Families are partners in care and key caregivers, especially at home." },
      { type: "fill", q: "A family consisting of parents and their children only is called a ______ family.", accept: ["nuclear"], rationale: "The nuclear family is parents plus their children." },
      { type: "fill", q: "The family function of teaching children society's values and norms is ______.", accept: ["socialisation", "socialization"], rationale: "Socialisation is a primary function of the family." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "bh-05-culture",
    unit: "Unit 2 · Society & Health",
    title: "Culture, Values, Beliefs & Customs",
    readMinutes: 15,
    summary: "The meaning and components of culture, cultural diversity, the cultural context of Bangladesh, and the importance of culturally sensitive care in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is culture?", p: "Culture is the whole way of life of a group of people — the shared knowledge, beliefs, values, customs, language, art and behaviour that are passed from one generation to the next (learned, not inherited biologically). Culture shapes how people understand health and illness, what they eat, how they behave when sick, and how they expect to be cared for." },
      { h: "Components of culture", list: [
        "Values — shared ideas of what is good, right and desirable.",
        "Beliefs — what people hold to be true (including about health and illness).",
        "Customs — usual, accepted ways of doing things in a society.",
        "Rituals — set ceremonies and practices (e.g. around birth, marriage and death).",
        "Norms — rules of expected behaviour.",
        "Language and symbols — the means of sharing meaning."
      ] },
      { h: "Characteristics of culture", p: "Culture is learned (through socialisation), shared (by members of a group), transmitted across generations, and changeable over time. It varies between societies and even within them (subcultures). Judging another culture only by the standards of one's own is called ethnocentrism, which nurses must guard against." },
      { h: "Culture in the context of Bangladesh", p: "Bangladesh has a rich culture shaped by religion, language, traditions and strong family and community ties. Cultural factors influence diet, dress, gender roles, modesty, decision-making in the family, and beliefs about the causes and treatment of illness. Respecting these factors is essential to providing acceptable care." },
      { h: "Culture and health", p: "Beliefs and customs strongly affect health behaviour — what foods are eaten or avoided in illness or pregnancy, who makes health decisions, whether traditional or modern care is sought first, and attitudes to procedures, modesty and the sex of the carer. Ignoring culture can lead to mistrust, poor cooperation and worse outcomes." },
      { h: "Culturally sensitive care", p: "Culturally sensitive (or culturally competent) care means respecting and responding to a patient's cultural beliefs and practices while keeping care safe. Nurses do this by learning about the cultures they serve, asking respectfully rather than assuming, avoiding judgement, accommodating customs where possible (e.g. modesty, diet, family involvement), and using interpreters when needed." },
      { h: "Nursing relevance", p: "Because culture shapes every patient's view of health and care, culturally sensitive nursing builds trust, improves communication and cooperation, and ensures care is acceptable and effective — a vital skill in a diverse society." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define culture and list its components.",
      "Describe the characteristics of culture.",
      "How do cultural factors in Bangladesh influence health behaviour?",
      "Define ethnocentrism and explain why nurses must avoid it.",
      "What is culturally sensitive care and how is it provided?"
    ],
    assessment: [
      { type: "mcq", q: "Culture is best described as:", options: ["Inherited through genes", "The learned, shared way of life of a group", "A type of microbe", "A medical treatment"], answer: 1, rationale: "Culture is learned and shared, passed across generations." },
      { type: "mcq", q: "Shared ideas of what is good and desirable are:", options: ["Values", "Genes", "Reflexes", "Cells"], answer: 0, rationale: "Values are shared ideals of what is right/desirable." },
      { type: "mcq", q: "Set ceremonies around birth, marriage and death are:", options: ["Rituals", "Reflexes", "Enzymes", "Norms only"], answer: 0, rationale: "Rituals are established ceremonies and practices." },
      { type: "mcq", q: "Judging another culture only by one's own standards is:", options: ["Ethnocentrism", "Socialisation", "Empathy", "Diversity"], answer: 0, rationale: "Ethnocentrism is judging others by one's own cultural standards." },
      { type: "mcq", q: "Culture is:", options: ["Inborn and fixed", "Learned and changeable over time", "The same in every society", "Unrelated to health"], answer: 1, rationale: "Culture is learned, shared and changes over time." },
      { type: "mcq", q: "Culturally sensitive care means:", options: ["Ignoring beliefs", "Respecting and accommodating cultural beliefs while keeping care safe", "Imposing the nurse's culture", "Refusing interpreters"], answer: 1, rationale: "It respects cultural beliefs/practices while maintaining safe care." },
      { type: "mcq", q: "Cultural beliefs commonly influence:", options: ["Diet, modesty and health decisions", "Blood type", "Bone length", "Body temperature"], answer: 0, rationale: "Culture shapes diet, modesty, gender roles and health decisions." },
      { type: "mcq", q: "Usual, accepted ways of doing things in a society are:", options: ["Customs", "Genes", "Antibodies", "Reflexes"], answer: 0, rationale: "Customs are a society's habitual, accepted practices." },
      { type: "mcq", q: "A smaller group with its own distinct culture within a society is a:", options: ["Subculture", "Nucleus", "Reflex", "Vaccine"], answer: 0, rationale: "A subculture is a distinct cultural group within a larger society." },
      { type: "mcq", q: "When a patient's culture is ignored, the likely result is:", options: ["Better trust", "Mistrust and poorer cooperation", "Faster recovery", "No effect"], answer: 1, rationale: "Ignoring culture can cause mistrust, poor cooperation and worse outcomes." },
      { type: "fill", q: "Judging other cultures by the standards of one's own is called ______.", accept: ["ethnocentrism"], rationale: "Ethnocentrism is bias toward one's own culture as the standard." },
      { type: "fill", q: "Care that respects a patient's cultural beliefs and practices is called culturally ______ care.", accept: ["sensitive", "competent", "appropriate"], rationale: "Culturally sensitive/competent care respects the patient's culture." }
    ]
  },

  /* ---------- Placeholders: structured to the BNMC D111 syllabus ---------- */
  {
    id: "bh-06-health-beliefs",
    unit: "Unit 2 · Society & Health",
    title: "Health Beliefs, Practices & Traditional Healers",
    readMinutes: 16,
    summary: "How beliefs shape ideas about health and illness, local health practices and food beliefs, the types of traditional healer in Bangladesh, and how nurses work with these beliefs.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Beliefs and values about health", p: "People's behaviour around health is guided by what they believe health and illness to be and what causes them. Modern (biomedical) belief sees illness as caused by germs, lifestyle, genes and environment. Many people also hold traditional beliefs — that illness comes from supernatural forces, the 'evil eye', fate, an imbalance of body humours, or punishment for wrongdoing. These beliefs strongly affect whether and how people seek care." },
      { h: "Local health practices", p: "Communities have their own practices for keeping healthy, treating disease and caring for the sick — for example, herbal remedies, dietary rules, home treatments, religious practices, and seeking help first from elders or traditional healers. Some practices are helpful or harmless; others may delay effective treatment or cause harm." },
      { h: "Food beliefs", p: "Food beliefs are widespread and important in nursing. In Bangladesh and South Asia some foods are classed as 'hot' or 'cold' and given or avoided in particular illnesses or in pregnancy; certain foods may be withheld from sick people or new mothers. Such beliefs can affect nutrition during illness and recovery, so nurses must understand them to give sensitive dietary advice." },
      { h: "Traditional healers in Bangladesh", list: [
        "Kabiraj / Ayurvedic healers — use herbal and traditional Ayurvedic remedies.",
        "Homeopathic practitioners — give highly diluted homeopathic medicines.",
        "Unani (hekim) practitioners — use the Unani system based on body humours.",
        "Religious / faith healers (pir, fakir) — use prayer, amulets (tabiz), blessed water and rituals."
      ] },
      { h: "Why people use traditional healers", p: "Traditional healers are widely consulted because they are accessible, affordable, locally available, trusted, and share the patient's language and beliefs. However, relying on them can delay proper diagnosis and treatment of serious conditions, and some remedies may be unsafe. Both benefits and risks must be recognised." },
      { h: "Working with beliefs in nursing", p: "Nurses respect patients' beliefs and the role of traditional practices, while gently guiding people toward safe, effective care. Good practice means listening without judgement, not openly ridiculing beliefs, correcting harmful practices tactfully, accommodating harmless customs, and building trust so that patients accept modern treatment alongside (or instead of) traditional care when needed." },
      { h: "Nursing relevance", p: "Understanding health beliefs, food customs and the place of traditional healers helps the nurse communicate effectively, give culturally acceptable advice, avoid conflict, encourage timely use of health services, and prevent the harm that can come from unsafe practices or delayed care." }
    ],
    references: REF_BEH,
    examQuestions: [
      "How do beliefs influence ideas about the cause of illness?",
      "Describe local health practices and food beliefs that affect care.",
      "Name the types of traditional healer found in Bangladesh.",
      "Why do many people consult traditional healers, and what are the risks?",
      "How should a nurse respond to a patient's traditional health beliefs?"
    ],
    assessment: [
      { type: "mcq", q: "The biomedical (modern) view sees illness as caused mainly by:", options: ["The evil eye", "Germs, lifestyle, genes and environment", "Fate alone", "Punishment"], answer: 1, rationale: "Biomedicine attributes illness to germs, lifestyle, genetics and environment." },
      { type: "mcq", q: "A traditional Bangladeshi healer using herbal/Ayurvedic remedies is a:", options: ["Kabiraj", "Surgeon", "Pharmacist", "Radiologist"], answer: 0, rationale: "The kabiraj uses herbal and Ayurvedic traditional remedies." },
      { type: "mcq", q: "The Unani system of healing is based on:", options: ["Body humours", "Germ theory", "Surgery", "Vaccination"], answer: 0, rationale: "Unani medicine is based on balancing the body humours." },
      { type: "mcq", q: "A risk of relying only on traditional healers for serious illness is:", options: ["Faster cure always", "Delay in proper diagnosis and treatment", "Lower cost only", "Better outcomes"], answer: 1, rationale: "Delay in effective treatment is a key risk of relying solely on traditional healers." },
      { type: "mcq", q: "'Hot' and 'cold' food beliefs are an example of:", options: ["Germ theory", "Cultural food beliefs affecting health", "A vaccine schedule", "A lab test"], answer: 1, rationale: "Hot/cold food classifications are cultural beliefs affecting diet in illness/pregnancy." },
      { type: "mcq", q: "A faith healer who uses prayer and amulets (tabiz) is a:", options: ["Pir/fakir", "Kabiraj", "Hekim", "Homeopath"], answer: 0, rationale: "Religious/faith healers (pir, fakir) use prayer, amulets and rituals." },
      { type: "mcq", q: "People often prefer traditional healers because they are:", options: ["Expensive and distant", "Accessible, affordable and trusted locally", "Unknown to the community", "Always unsafe"], answer: 1, rationale: "Accessibility, low cost, trust and shared beliefs draw people to traditional healers." },
      { type: "mcq", q: "When a patient holds a traditional health belief, the nurse should:", options: ["Ridicule it", "Listen respectfully and guide toward safe care", "Ignore the patient", "Refuse to treat"], answer: 1, rationale: "Respectful, non-judgemental guidance builds trust and promotes safe care." },
      { type: "mcq", q: "Withholding food from a sick person due to belief can lead to:", options: ["Better nutrition", "Poor nutrition and slower recovery", "No effect", "Faster healing"], answer: 1, rationale: "Food restriction during illness can worsen nutrition and recovery." },
      { type: "mcq", q: "Homeopathic practitioners typically give:", options: ["Highly diluted medicines", "Strong antibiotics", "Surgery", "Vaccines"], answer: 0, rationale: "Homeopathy uses highly diluted preparations." },
      { type: "fill", q: "A traditional herbal/Ayurvedic healer in Bangladesh is called a ______.", accept: ["kabiraj"], rationale: "The kabiraj practises herbal/Ayurvedic medicine." },
      { type: "fill", q: "Care that respects a patient's beliefs while keeping treatment safe is culturally ______.", accept: ["sensitive", "competent", "appropriate"], rationale: "Culturally sensitive care respects beliefs while ensuring safe treatment." }
    ]
  },
  {
    id: "bh-07-social-problems",
    unit: "Unit 2 · Society & Health",
    title: "Social Problems & Health Issues in Bangladesh",
    readMinutes: 16,
    summary: "Common social problems and their effect on health, emerging and re-emerging health issues, and the government's responsibility for health care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a social problem?", p: "A social problem is a condition that harms many members of society and is recognised as needing collective action. Social problems are closely linked to health: they create the conditions in which ill health develops, and ill health in turn worsens social problems." },
      { h: "Common social problems in Bangladesh", list: [
        "Poverty and unemployment.",
        "Illiteracy and lack of education.",
        "Overpopulation and overcrowding.",
        "Child marriage, dowry and gender inequality.",
        "Malnutrition and food insecurity.",
        "Poor sanitation and unsafe water.",
        "Drug abuse, and violence against women and children."
      ] },
      { h: "How social problems affect health", p: "These problems directly damage health: poverty limits food, housing and access to care; illiteracy reduces health knowledge; overcrowding and poor sanitation spread infection; child marriage and early childbirth harm young mothers and babies; malnutrition weakens immunity. Tackling social problems is therefore part of improving health." },
      { h: "Emerging and re-emerging health issues", p: "Health threats change over time. Emerging issues are newly appearing or increasing problems — such as non-communicable diseases (diabetes, high blood pressure, heart disease, cancer), mental-health problems, road-traffic injuries, dengue and new infections such as COVID-19. Re-emerging issues are old diseases returning or rising again — such as tuberculosis (including drug-resistant TB) and other infections, partly driven by antimicrobial resistance." },
      { h: "Government responsibility for health care", p: "Governments have a duty to protect and promote the health of their people. In Bangladesh the government provides health care through a public system — community clinics, upazila and district hospitals and medical colleges — and runs national programmes such as the Expanded Programme on Immunization (EPI), tuberculosis and malaria control, family planning, and maternal and child health. It also sets health policy and regulates the professions (e.g. nursing through the BNMC). Access to health care is increasingly recognised as a basic right." },
      { h: "Primary health care", p: "Much of the government's response is built on primary health care — essential, accessible, affordable care close to where people live, with an emphasis on prevention, health education, immunisation, safe water and sanitation, maternal and child health, and community participation. This approach addresses the social roots of ill health, not just disease." },
      { h: "Nursing relevance", p: "Nurses contribute by recognising the social roots of their patients' illness, providing health education, supporting prevention and immunisation, working with families and communities, and advocating for vulnerable groups — playing a key role in both clinical care and public health." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define a social problem and list common social problems in Bangladesh.",
      "Explain how social problems affect health.",
      "Differentiate emerging and re-emerging health issues with examples.",
      "Describe the government's responsibility for health care in Bangladesh.",
      "What is primary health care and why is it important?"
    ],
    assessment: [
      { type: "mcq", q: "Which is a major social problem affecting health in Bangladesh?", options: ["Poverty and illiteracy", "Too many hospitals", "Excess vaccination", "Low population"], answer: 0, rationale: "Poverty, illiteracy, overpopulation and poor sanitation are key health-related social problems." },
      { type: "mcq", q: "Diabetes, hypertension and cancer are examples of:", options: ["Communicable diseases", "Non-communicable (emerging) diseases", "Vaccine-preventable infections", "Parasitic diseases"], answer: 1, rationale: "These chronic non-communicable diseases are a major emerging health issue." },
      { type: "mcq", q: "Tuberculosis rising again, including drug-resistant forms, is an example of a:", options: ["Re-emerging disease", "New social custom", "Vaccine", "Vitamin deficiency"], answer: 0, rationale: "TB (and drug-resistant TB) is a re-emerging health issue." },
      { type: "mcq", q: "Child marriage and early childbirth mainly harm the health of:", options: ["Older men", "Young mothers and their babies", "No one", "Only fathers"], answer: 1, rationale: "Early marriage/childbirth endangers adolescent mothers and infants." },
      { type: "mcq", q: "Bangladesh's national childhood immunization programme is the:", options: ["EPI", "DOTS", "RAMC", "ICN"], answer: 0, rationale: "The Expanded Programme on Immunization (EPI) delivers childhood vaccines." },
      { type: "mcq", q: "Essential, accessible care close to where people live, focused on prevention, is:", options: ["Tertiary care", "Primary health care", "Private surgery", "Intensive care"], answer: 1, rationale: "Primary health care is essential, accessible, prevention-focused community care." },
      { type: "mcq", q: "Poor sanitation and unsafe water mainly increase:", options: ["Infectious diseases (e.g. diarrhoea)", "Fractures", "Eye colour", "Height"], answer: 0, rationale: "Poor water/sanitation spread infectious and diarrhoeal diseases." },
      { type: "mcq", q: "Regulating the nursing profession in Bangladesh is the responsibility of the:", options: ["BNMC", "WHO", "Police", "UNICEF"], answer: 0, rationale: "The Bangladesh Nursing and Midwifery Council (BNMC) regulates nursing." },
      { type: "mcq", q: "A 'social problem' is a condition that:", options: ["Affects only one person", "Harms many in society and needs collective action", "Improves society", "Has no link to health"], answer: 1, rationale: "Social problems harm many and require collective/societal action." },
      { type: "mcq", q: "Antimicrobial resistance contributes to:", options: ["Re-emergence of hard-to-treat infections", "Better antibiotics", "Fewer infections", "Lower drug use"], answer: 0, rationale: "AMR makes infections harder to treat, contributing to re-emerging disease." },
      { type: "fill", q: "Accessible, prevention-focused community care is called ______ health care.", accept: ["primary"], rationale: "Primary health care emphasises prevention and accessibility." },
      { type: "fill", q: "Newly appearing or increasing health threats are called ______ health issues.", accept: ["emerging"], rationale: "Emerging issues are new/increasing; re-emerging are returning ones." }
    ]
  },
  {
    id: "bh-08-psychology",
    unit: "Unit 3 · Psychology of Behavior",
    title: "Concept of Psychology & Factors Influencing Behaviour",
    readMinutes: 16,
    summary: "The definition and significance of psychology, the basic mental processes, and the biological, psychological and social factors that influence human behaviour.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is psychology?", p: "Psychology is the scientific study of behaviour and mental processes — what people do, and the thoughts, feelings and motives behind it. 'Behaviour' includes both what can be observed (actions, speech) and inner processes (thinking, perceiving, feeling) that are inferred from it." },
      { h: "Significance of psychology in nursing", p: "Psychology helps the nurse understand how patients perceive illness, why they behave as they do, how they learn and remember health information, what motivates them, and how they cope with stress and pain. It improves communication, supports behaviour change, and aids the nurse's own self-understanding and resilience." },
      { h: "Basic mental processes", list: [
        "Perception — how we interpret information from our senses.",
        "Learning — a lasting change in behaviour from experience.",
        "Memory — storing and recalling information.",
        "Emotion — feelings such as fear, joy, anger and sadness.",
        "Motivation — what drives and directs behaviour.",
        "Thinking and intelligence — reasoning and problem-solving."
      ] },
      { h: "Factors influencing behaviour", p: "Human behaviour is shaped by three interacting groups of factors.", figure: {
        caption: "Figure 8.1 — Biological, psychological and social factors shape behaviour.",
        svg: "<svg viewBox='0 0 560 90' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Factors influencing behaviour'><defs><marker id='bh8' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" +
          [["Biological", 10], ["Psychological", 175], ["Social", 340]].map(function (p, i) { var x = p[1]; return "<rect x='" + x + "' y='14' width='150' height='34' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='" + (x + 75) + "' y='36' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#14387A'>" + p[0] + "</text>"; }).join("") +
          "<rect x='205' y='62' width='150' height='24' rx='8' fill='#C99A50'/><text x='280' y='79' text-anchor='middle' font-family='Inter' font-size='12' font-weight='700' fill='#fff'>Behaviour</text>" +
          "<line x1='85' y1='48' x2='250' y2='62' stroke='#2E63B8' stroke-width='1.5' marker-end='url(#bh8)'/><line x1='250' y1='48' x2='280' y2='62' stroke='#2E63B8' stroke-width='1.5' marker-end='url(#bh8)'/><line x1='415' y1='48' x2='320' y2='62' stroke='#2E63B8' stroke-width='1.5' marker-end='url(#bh8)'/>" +
          "</svg>"
      } },
      { h: "The three groups of factors", list: [
        "Biological factors — genes, the brain and nervous system, hormones, age and physical health.",
        "Psychological factors — perception, learning, emotion, motivation, personality and past experience.",
        "Social and environmental factors — family, culture, peers, education, religion and surroundings."
      ] },
      { h: "Nature and nurture", p: "Behaviour results from the interaction of nature (inherited, biological influences) and nurture (environment, learning and experience). Neither acts alone — for example, a person's temperament may be partly inherited but is shaped by upbringing and culture. Recognising both helps the nurse understand each patient as a unique individual." },
      { h: "Nursing relevance", p: "By understanding the factors behind behaviour, the nurse can assess patients holistically, tailor communication and health teaching, anticipate emotional reactions, and support positive behaviour change — for example, helping a patient adopt a healthier lifestyle or adhere to treatment." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define psychology.",
      "Explain the significance of psychology in nursing.",
      "List the basic mental processes studied in psychology.",
      "Describe the biological, psychological and social factors that influence behaviour.",
      "Explain the interaction of nature and nurture."
    ],
    assessment: [
      { type: "mcq", q: "Psychology is the scientific study of:", options: ["Society only", "Behaviour and mental processes", "Microbes", "Body chemistry"], answer: 1, rationale: "Psychology studies behaviour and the mental processes behind it." },
      { type: "mcq", q: "How we interpret information from our senses is called:", options: ["Perception", "Digestion", "Reflex", "Excretion"], answer: 0, rationale: "Perception is the interpretation of sensory information." },
      { type: "mcq", q: "A relatively lasting change in behaviour due to experience is:", options: ["Learning", "Reflex", "Instinct", "Growth"], answer: 0, rationale: "Learning is a lasting change in behaviour from experience." },
      { type: "mcq", q: "Genes, the brain and hormones are ______ factors influencing behaviour.", options: ["Biological", "Social", "Cultural", "Economic"], answer: 0, rationale: "These are biological factors shaping behaviour." },
      { type: "mcq", q: "Family, culture and peers are ______ factors influencing behaviour.", options: ["Biological", "Social", "Genetic", "Hormonal"], answer: 1, rationale: "Family, culture and peers are social/environmental factors." },
      { type: "mcq", q: "'Nature' in the nature-nurture debate refers to:", options: ["Environment and learning", "Inherited, biological influences", "Culture", "Peer pressure"], answer: 1, rationale: "Nature = inherited/biological; nurture = environment and experience." },
      { type: "mcq", q: "Behaviour is best explained as the result of:", options: ["Nature only", "Nurture only", "Interaction of nature and nurture", "Neither"], answer: 2, rationale: "Behaviour arises from the interaction of biology and environment." },
      { type: "mcq", q: "What drives and directs behaviour toward a goal is:", options: ["Perception", "Motivation", "Memory", "Reflex"], answer: 1, rationale: "Motivation initiates and directs goal-seeking behaviour." },
      { type: "mcq", q: "Understanding psychology helps the nurse to:", options: ["Mix medicines", "Communicate and support behaviour change", "Do surgery", "Repair equipment"], answer: 1, rationale: "Psychology improves communication, teaching and support for behaviour change." },
      { type: "mcq", q: "Storing and recalling information is the mental process of:", options: ["Memory", "Emotion", "Digestion", "Reflex"], answer: 0, rationale: "Memory is the storage and retrieval of information." },
      { type: "fill", q: "The scientific study of behaviour and mental processes is ______.", accept: ["psychology"], rationale: "Psychology studies behaviour and mental processes." },
      { type: "fill", q: "Inherited biological influences on behaviour are referred to as ______ (in the nature-nurture debate).", accept: ["nature"], rationale: "Nature refers to inherited/biological influences." }
    ]
  },
  {
    id: "bh-09-theories",
    unit: "Unit 3 · Psychology of Behavior",
    title: "Psychological Theories",
    readMinutes: 17,
    summary: "Why psychological theories matter and an overview of the major schools — psychoanalytic, behaviourist, cognitive and humanistic — and their importance in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why theories matter", p: "A theory is an organised set of ideas that explains and predicts behaviour. Psychological theories help nurses understand why patients think, feel and behave as they do, and guide how to teach, motivate, comfort and support them. Different theories highlight different causes of behaviour, and each adds useful insight." },
      { h: "Psychoanalytic theory (Freud)", p: "Sigmund Freud's psychoanalytic theory stresses the unconscious mind and early childhood experiences. He described the personality as having three parts: the id (basic instincts and desires), the ego (the realistic decision-maker) and the superego (conscience). When anxiety arises, the mind uses defence mechanisms (such as denial, repression, projection and rationalisation) to protect itself — useful for nurses to recognise in distressed patients." },
      { h: "Behaviourist theory (Pavlov, Skinner)", p: "Behaviourism focuses on observable behaviour and how it is learned from the environment. In classical conditioning (Pavlov), a response becomes linked to a new stimulus through association. In operant conditioning (Skinner), behaviour is shaped by its consequences — behaviour followed by reward (reinforcement) is repeated, while behaviour followed by unpleasant results tends to stop. These ideas underpin habit formation, health-behaviour change and patient teaching." },
      { h: "Cognitive theory (Piaget and others)", p: "Cognitive theory studies mental processes — how people perceive, think, learn, remember and solve problems. Jean Piaget described how children's thinking develops through stages. Cognitive approaches explain how patients understand information and form beliefs about their illness, and they guide effective health education and the correction of mistaken beliefs." },
      { h: "Humanistic theory (Maslow, Rogers)", p: "Humanistic psychology emphasises the whole person, free will and the drive toward personal growth. Abraham Maslow described a hierarchy of needs, and Carl Rogers stressed the importance of empathy, genuineness and 'unconditional positive regard' in helping relationships. This approach fits nursing closely, supporting holistic, person-centred, respectful care." },
      { h: "Comparing the theories", p: "Each theory looks at behaviour from a different angle: psychoanalytic (the unconscious and past), behaviourist (learning from the environment), cognitive (thought processes) and humanistic (growth and the whole person). No single theory explains everything; nurses draw on all of them to understand patients fully." },
      { h: "Nursing relevance", p: "Psychological theories give nurses practical tools: recognising defence mechanisms in anxious patients, using reinforcement to encourage healthy behaviour, teaching in ways that fit how people think and learn, and building warm, empathetic, person-centred relationships." }
    ],
    references: REF_BEH,
    examQuestions: [
      "What is a psychological theory and why is it useful in nursing?",
      "Describe Freud's psychoanalytic theory, including the id, ego and superego.",
      "Differentiate classical and operant conditioning.",
      "Describe the cognitive and humanistic approaches to behaviour.",
      "How do psychological theories help nursing practice?"
    ],
    assessment: [
      { type: "mcq", q: "Psychoanalytic theory, emphasising the unconscious mind, was developed by:", options: ["Skinner", "Freud", "Piaget", "Maslow"], answer: 1, rationale: "Freud founded psychoanalysis, stressing the unconscious." },
      { type: "mcq", q: "In Freud's model, the part that represents basic instincts and desires is the:", options: ["Ego", "Id", "Superego", "Conscience"], answer: 1, rationale: "The id holds basic instincts; the ego is realistic and the superego is conscience." },
      { type: "mcq", q: "Learning in which behaviour is shaped by its consequences (reward/punishment) is:", options: ["Classical conditioning", "Operant conditioning", "Insight", "Maturation"], answer: 1, rationale: "Operant conditioning (Skinner) shapes behaviour through consequences." },
      { type: "mcq", q: "Pavlov's experiments demonstrated:", options: ["Operant conditioning", "Classical conditioning", "Humanism", "Psychoanalysis"], answer: 1, rationale: "Pavlov demonstrated classical conditioning (learning by association)." },
      { type: "mcq", q: "The hierarchy of needs is part of which approach?", options: ["Behaviourist", "Humanistic (Maslow)", "Psychoanalytic", "Biological"], answer: 1, rationale: "Maslow's hierarchy of needs is a humanistic theory." },
      { type: "mcq", q: "The study of how children's thinking develops through stages is associated with:", options: ["Piaget (cognitive)", "Freud", "Skinner", "Pavlov"], answer: 0, rationale: "Piaget described cognitive development through stages." },
      { type: "mcq", q: "Denial, repression and projection are examples of:", options: ["Reinforcers", "Defence mechanisms", "Reflexes", "Vital signs"], answer: 1, rationale: "Defence mechanisms protect the mind from anxiety (psychoanalytic theory)." },
      { type: "mcq", q: "Behaviour followed by a reward is more likely to be:", options: ["Stopped", "Repeated (reinforced)", "Forgotten", "Punished"], answer: 1, rationale: "Reinforcement (reward) increases the likelihood of a behaviour recurring." },
      { type: "mcq", q: "Empathy, genuineness and unconditional positive regard are central to:", options: ["Behaviourism", "Rogers' humanistic approach", "Psychoanalysis", "Biological theory"], answer: 1, rationale: "Carl Rogers emphasised these qualities in helping relationships." },
      { type: "mcq", q: "Which theory focuses on mental processes such as thinking and memory?", options: ["Cognitive", "Behaviourist", "Psychoanalytic", "Biological"], answer: 0, rationale: "Cognitive theory studies perception, thinking, learning and memory." },
      { type: "fill", q: "Learning behaviour through its consequences is called ______ conditioning.", accept: ["operant"], rationale: "Operant conditioning shapes behaviour via consequences (Skinner)." },
      { type: "fill", q: "Mental strategies that protect against anxiety (e.g. denial) are called defence ______.", accept: ["mechanisms"], rationale: "Defence mechanisms are unconscious strategies to reduce anxiety." }
    ]
  },
  {
    id: "bh-10-biological-bases",
    unit: "Unit 3 · Psychology of Behavior",
    title: "Biological Bases of Behaviour",
    readMinutes: 15,
    summary: "How the brain, neurotransmitters, hormones and genes influence behaviour, and how this links to mental health and nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Behaviour has a biological basis", p: "Behaviour, thoughts and feelings arise from the workings of the body — especially the nervous system. Understanding the biological basis of behaviour helps explain emotions, mental illness, the effects of drugs, and individual differences, complementing the psychological and social explanations." },
      { h: "The brain and behaviour", p: "Different parts of the brain govern different aspects of behaviour. The cerebrum and its lobes control thinking, movement, language and personality (the frontal lobe especially affects reasoning and self-control). The limbic system controls emotion and memory, and the hypothalamus governs basic drives such as hunger, thirst and sleep, and links the brain to hormones. Damage to specific areas changes behaviour in predictable ways.", figure: { caption: "Figure 10.1 — Brain regions and the behaviours they influence. Add a labelled image if available.", placeholder: true } },
      { h: "Neurons and neurotransmitters", p: "The brain works through billions of nerve cells (neurons) that communicate using chemical messengers called neurotransmitters (such as dopamine, serotonin and noradrenaline). The balance of these chemicals strongly affects mood, motivation and behaviour. Disturbances are linked to mental illnesses — for example, low serotonin with depression — and many psychiatric drugs act by adjusting neurotransmitters." },
      { h: "Hormones and behaviour", p: "Hormones from the endocrine system also influence behaviour and emotion. For example, adrenaline drives the 'fight or flight' stress response, thyroid hormones affect energy and mood, and sex hormones influence development and behaviour. The hypothalamus and pituitary link the brain and the hormonal system." },
      { h: "Genes and behaviour", p: "Heredity (genes) contributes to behaviour, intelligence and temperament, and to the risk of some mental and behavioural disorders, which can run in families. However, genes set tendencies rather than fixed outcomes: behaviour results from genes interacting with the environment (nature and nurture together)." },
      { h: "Clinical and nursing relevance", p: "The biological view explains why mental illnesses are genuine disorders with physical causes (not weakness or fault), why medicines that act on neurotransmitters can help, and why brain injury, infection, drugs or hormonal disorders can change behaviour. This understanding helps nurses care for patients without stigma and recognise physical causes of behavioural change." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Why does behaviour have a biological basis?",
      "Describe how different parts of the brain influence behaviour.",
      "What are neurotransmitters and how do they affect mood and behaviour?",
      "How do hormones and genes influence behaviour?",
      "How does the biological view help nurses care for patients with mental illness?"
    ],
    assessment: [
      { type: "mcq", q: "Chemical messengers that carry signals between neurons are:", options: ["Hormones only", "Neurotransmitters", "Antibodies", "Enzymes"], answer: 1, rationale: "Neurotransmitters (e.g. dopamine, serotonin) carry signals between neurons." },
      { type: "mcq", q: "The part of the brain mainly controlling emotion and memory is the:", options: ["Limbic system", "Cerebellum", "Medulla", "Spinal cord"], answer: 0, rationale: "The limbic system governs emotion and memory." },
      { type: "mcq", q: "Low levels of the neurotransmitter ______ are linked with depression.", options: ["serotonin", "insulin", "haemoglobin", "calcium"], answer: 0, rationale: "Low serotonin is associated with depression; many antidepressants raise it." },
      { type: "mcq", q: "Reasoning, self-control and personality are most associated with the:", options: ["Frontal lobe", "Occipital lobe", "Cerebellum", "Spinal cord"], answer: 0, rationale: "The frontal lobe governs reasoning, personality and self-control." },
      { type: "mcq", q: "Basic drives such as hunger, thirst and sleep are controlled by the:", options: ["Hypothalamus", "Frontal lobe", "Cerebellum", "Retina"], answer: 0, rationale: "The hypothalamus controls basic drives and links brain to hormones." },
      { type: "mcq", q: "Behaviour is best explained by genes:", options: ["Acting completely alone", "Interacting with the environment", "Having no role", "Only after age 30"], answer: 1, rationale: "Genes set tendencies that interact with environment (nature and nurture)." },
      { type: "mcq", q: "Many psychiatric medicines work by:", options: ["Changing blood type", "Adjusting neurotransmitter activity", "Removing genes", "Raising temperature"], answer: 1, rationale: "Psychiatric drugs commonly act on neurotransmitter systems." },
      { type: "mcq", q: "The hormone driving the 'fight or flight' stress response is:", options: ["Insulin", "Adrenaline", "Calcitonin", "Melatonin"], answer: 1, rationale: "Adrenaline (epinephrine) mediates the fight-or-flight response." },
      { type: "mcq", q: "Understanding the biological basis of mental illness helps nurses to:", options: ["Blame the patient", "See it as a genuine disorder and reduce stigma", "Avoid treatment", "Ignore medicines"], answer: 1, rationale: "It frames mental illness as a real disorder with physical causes, reducing stigma." },
      { type: "mcq", q: "Nerve cells that carry and process information in the brain are:", options: ["Neurons", "Nephrons", "Hepatocytes", "Platelets"], answer: 0, rationale: "Neurons are the nerve cells of the brain and nervous system." },
      { type: "fill", q: "Chemical messengers between neurons are called ______.", accept: ["neurotransmitters", "neurotransmitter"], rationale: "Neurotransmitters carry signals across synapses, affecting mood and behaviour." },
      { type: "fill", q: "The brain system mainly responsible for emotion and memory is the ______ system.", accept: ["limbic"], rationale: "The limbic system governs emotion and memory." }
    ]
  },
  {
    id: "bh-11-motivation",
    unit: "Unit 3 · Psychology of Behavior",
    title: "Motivation",
    readMinutes: 15,
    summary: "What motivation is and why it matters, the types of motivation, the main theories including Maslow's hierarchy of needs, and the use of motivation in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is motivation?", p: "Motivation is the internal process that arouses, directs and sustains behaviour toward a goal. It explains why we do what we do — why a person eats, studies, seeks safety, or works to recover from illness. Motivation is central to learning, health behaviour and recovery." },
      { h: "Types of motivation", list: [
        "Intrinsic motivation — driven from within, by interest, satisfaction or personal goals (e.g. studying because you enjoy learning).",
        "Extrinsic motivation — driven by external rewards or pressures (e.g. studying to pass an exam or gain praise).",
        "Primary (biological) motives — innate drives such as hunger, thirst, sleep and avoidance of pain.",
        "Secondary (social) motives — learned drives such as achievement, recognition, belonging and power."
      ] },
      { h: "Maslow's hierarchy of needs", p: "Abraham Maslow proposed that human needs are arranged in a hierarchy, and that lower, more basic needs must be largely met before higher ones become strong motivators. This is widely used in nursing to set care priorities — meeting a patient's physiological needs (such as breathing and nutrition) before their needs for esteem or self-actualisation.", figure: {
        caption: "Figure 11.1 — Maslow's hierarchy of needs (most basic at the base).",
        svg: "<svg viewBox='0 0 360 200' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Maslow hierarchy'>" +
          [["Physiological (food, air, water)", "#2E63B8", 300, 176], ["Safety & security", "#3F86E0", 240, 146], ["Love & belonging", "#5C9BE6", 180, 116], ["Esteem", "#C99A50", 120, 86], ["Self-actualisation", "#16A34A", 60, 56]].map(function (p, i) { var w = p[2]; var y = p[3]; var x = (360 - w) / 2; return "<rect x='" + x + "' y='" + y + "' width='" + w + "' height='28' rx='3' fill='" + p[1] + "'/><text x='180' y='" + (y + 19) + "' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#fff'>" + p[0] + "</text>"; }).join("") +
          "</svg>"
      } },
      { h: "Other theories of motivation", list: [
        "Drive-reduction theory — a need creates a 'drive' (tension) that we act to reduce, restoring balance (e.g. thirst drives drinking).",
        "Incentive theory — behaviour is 'pulled' by external goals or rewards (incentives).",
        "Achievement motivation — the desire to succeed and meet a standard of excellence."
      ] },
      { h: "Significance of motivation", p: "Motivation determines whether people act on what they know. A patient may understand that they should take medicine, exercise or stop smoking, but only do so if motivated. Motivation also drives students and staff. Understanding what motivates a person allows that drive to be encouraged." },
      { h: "Nursing relevance", p: "Nurses use motivation constantly: helping patients set realistic goals, linking health behaviour to what the patient values, giving encouragement and positive feedback (reinforcement), involving family support, and meeting basic needs first. Motivating patients is essential for adherence to treatment, rehabilitation and healthy lifestyle change." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define motivation and explain its significance.",
      "Differentiate intrinsic and extrinsic motivation, and primary and secondary motives.",
      "Describe Maslow's hierarchy of needs and its use in nursing.",
      "Briefly describe drive-reduction and incentive theories.",
      "How do nurses use motivation in patient care?"
    ],
    assessment: [
      { type: "mcq", q: "Motivation is the process that:", options: ["Stops all behaviour", "Arouses, directs and sustains behaviour toward a goal", "Measures temperature", "Removes waste"], answer: 1, rationale: "Motivation initiates, directs and maintains goal-directed behaviour." },
      { type: "mcq", q: "Studying because you genuinely enjoy learning is ______ motivation.", options: ["Extrinsic", "Intrinsic", "Primary", "Negative"], answer: 1, rationale: "Intrinsic motivation comes from within (interest, satisfaction)." },
      { type: "mcq", q: "Studying mainly to gain a reward or pass an exam is ______ motivation.", options: ["Intrinsic", "Extrinsic", "Primary", "Biological"], answer: 1, rationale: "Extrinsic motivation is driven by external rewards/pressures." },
      { type: "mcq", q: "Hunger, thirst and sleep are examples of ______ motives.", options: ["Secondary (social)", "Primary (biological)", "Extrinsic", "Achievement"], answer: 1, rationale: "Primary motives are innate biological drives." },
      { type: "mcq", q: "According to Maslow, which needs must be met first?", options: ["Self-esteem", "Physiological needs", "Belonging", "Self-actualisation"], answer: 1, rationale: "Physiological needs are the most basic and must be met first." },
      { type: "mcq", q: "Maslow's highest level of need is:", options: ["Safety", "Self-actualisation", "Physiological", "Esteem"], answer: 1, rationale: "Self-actualisation (reaching one's potential) is the top of the hierarchy." },
      { type: "mcq", q: "A need creating tension that we act to reduce describes ______ theory.", options: ["Incentive", "Drive-reduction", "Humanistic", "Trait"], answer: 1, rationale: "Drive-reduction theory: a need produces a drive we act to reduce." },
      { type: "mcq", q: "The desire to succeed and meet a standard of excellence is ______ motivation.", options: ["Achievement", "Primary", "Biological", "Negative"], answer: 0, rationale: "Achievement motivation is the drive to succeed and excel." },
      { type: "mcq", q: "Motivation matters in health because patients act on knowledge only if they are:", options: ["Motivated", "Asleep", "Unaware", "Discharged"], answer: 0, rationale: "Knowledge changes behaviour only when the person is motivated to act." },
      { type: "mcq", q: "A nurse can boost a patient's motivation by:", options: ["Criticising failures", "Setting realistic goals and giving encouragement", "Ignoring the patient", "Removing all support"], answer: 1, rationale: "Realistic goals, encouragement and reinforcement strengthen motivation." },
      { type: "fill", q: "Motivation that comes from within (interest, satisfaction) is called ______ motivation.", accept: ["intrinsic"], rationale: "Intrinsic motivation is internally driven; extrinsic is externally driven." },
      { type: "fill", q: "The hierarchy of needs used to prioritise care was proposed by ______.", accept: ["maslow"], rationale: "Maslow's hierarchy ranks needs from physiological to self-actualisation." }
    ]
  },
  {
    id: "bh-12-personality",
    unit: "Unit 3 · Psychology of Behavior",
    title: "Personality",
    readMinutes: 15,
    summary: "What personality is, types and traits, how personality develops, and the relevance of personality to nursing care and the nurse's own self-awareness.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is personality?", p: "Personality is the unique and relatively stable pattern of thinking, feeling and behaving that makes each person distinct. It stays fairly consistent across situations and over time, giving each individual a characteristic way of responding to the world." },
      { h: "Significance of personality", p: "Personality shapes how a person copes with illness, relates to staff, makes decisions and follows treatment. Understanding personality helps the nurse individualise care, communicate effectively, and respond appropriately to different patients — and to understand their own reactions." },
      { h: "Types of personality", list: [
        "Introvert — quiet, reflective, prefers solitude and inner thoughts.",
        "Extrovert — outgoing, sociable, energised by being with others.",
        "Type A — competitive, impatient, time-pressured (linked to higher stress and heart-disease risk).",
        "Type B — relaxed, easy-going, patient."
      ] },
      { h: "Personality traits", p: "Traits are stable characteristics that describe a person's typical behaviour. A widely accepted model is the 'Big Five': openness (curiosity), conscientiousness (organisation and reliability), extraversion (sociability), agreeableness (kindness and cooperation) and neuroticism (tendency to anxiety and emotional instability). Everyone shows each trait to some degree." },
      { h: "Development of personality", p: "Personality develops over the lifespan through the interaction of heredity (inborn temperament) and environment (upbringing, culture, experiences and relationships). Early childhood is especially influential; Freud, Erikson and others described stages through which personality forms. Temperament — a baby's inborn emotional style — is one of the earliest signs of personality." },
      { h: "Personality and nursing", p: "Patients with different personalities cope and behave differently — some seek information and control, others prefer reassurance; some are anxious, others withdrawn or demanding. Recognising this helps the nurse adapt their approach, remain patient and non-judgemental with 'difficult' personalities, and support each patient as an individual. Self-awareness of one's own personality also improves teamwork and reduces stress." },
      { h: "Nursing relevance", p: "Understanding personality allows the nurse to individualise communication and care, anticipate how patients may react to illness and treatment, work better in a team, and care for themselves — all part of holistic, person-centred practice." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define personality.",
      "Describe the main types of personality.",
      "What are personality traits? Outline the 'Big Five'.",
      "How does personality develop?",
      "Why is understanding personality important in nursing?"
    ],
    assessment: [
      { type: "mcq", q: "Personality is best defined as:", options: ["A temporary mood", "The unique, relatively stable pattern of thinking, feeling and behaving", "A physical illness", "A social institution"], answer: 1, rationale: "Personality is a person's distinctive, enduring pattern of behaviour." },
      { type: "mcq", q: "A quiet, reflective person who prefers solitude is described as:", options: ["Extrovert", "Introvert", "Type A", "Neurotic only"], answer: 1, rationale: "Introverts are reflective and prefer their inner world/solitude." },
      { type: "mcq", q: "An outgoing, sociable person energised by others is:", options: ["Introvert", "Extrovert", "Type B", "Withdrawn"], answer: 1, rationale: "Extroverts are sociable and energised by social contact." },
      { type: "mcq", q: "A competitive, impatient, time-pressured personality linked to heart-disease risk is:", options: ["Type A", "Type B", "Introvert", "Agreeable"], answer: 0, rationale: "Type A personality is associated with higher stress and cardiac risk." },
      { type: "mcq", q: "Which is one of the 'Big Five' personality traits?", options: ["Conscientiousness", "Temperature", "Blood type", "Reflex"], answer: 0, rationale: "The Big Five are openness, conscientiousness, extraversion, agreeableness and neuroticism." },
      { type: "mcq", q: "Personality develops mainly through:", options: ["Heredity alone", "Environment alone", "Interaction of heredity and environment", "Diet only"], answer: 2, rationale: "Personality results from heredity (temperament) interacting with environment." },
      { type: "mcq", q: "A baby's inborn emotional style is called:", options: ["Temperament", "Reflex", "Trait disorder", "Conditioning"], answer: 0, rationale: "Temperament is the early, inborn basis of personality." },
      { type: "mcq", q: "Understanding a patient's personality helps the nurse to:", options: ["Treat everyone identically", "Individualise communication and care", "Ignore differences", "Avoid the patient"], answer: 1, rationale: "It enables individualised, person-centred communication and care." },
      { type: "mcq", q: "The Big Five trait describing a tendency to anxiety and emotional instability is:", options: ["Openness", "Neuroticism", "Agreeableness", "Extraversion"], answer: 1, rationale: "Neuroticism reflects emotional instability and proneness to anxiety." },
      { type: "mcq", q: "Self-awareness of one's own personality helps the nurse to:", options: ["Work better in a team and manage stress", "Avoid all patients", "Ignore feedback", "Stop learning"], answer: 0, rationale: "Self-awareness improves teamwork, relationships and stress management." },
      { type: "fill", q: "A sociable, outgoing personality type is called ______.", accept: ["extrovert", "extravert"], rationale: "Extroverts are outgoing; introverts are reflective." },
      { type: "fill", q: "A baby's inborn emotional style, the basis of personality, is called ______.", accept: ["temperament"], rationale: "Temperament is the inborn foundation of personality." }
    ]
  },
  {
    id: "bh-13-development",
    unit: "Unit 4 · Development Across the Lifespan",
    title: "Developmental Psychology: Principles & Issues",
    readMinutes: 15,
    summary: "What developmental psychology studies, the principles of development, the key theoretical debates, and the stages of the lifespan, with their relevance to nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is developmental psychology?", p: "Developmental psychology studies how people grow and change across the whole lifespan — from conception to old age. It looks at three intertwined areas: physical development (the body), cognitive development (thinking and learning) and psychosocial development (emotions and relationships)." },
      { h: "Principles of development", list: [
        "Development is orderly and follows a predictable sequence.",
        "It proceeds in a head-to-toe (cephalocaudal) and centre-to-outside (proximodistal) direction in early life.",
        "It is continuous and lifelong, building on earlier stages.",
        "It proceeds from simple to complex and from general to specific.",
        "Each person develops at their own individual rate, though the sequence is similar."
      ] },
      { h: "Key issues in development", p: "Developmental psychologists debate several enduring questions: Nature vs nurture — how much development is due to inherited biology versus environment and experience (the answer is both, interacting). Stability vs change — whether early traits persist or people change over time. Continuity vs discontinuity — whether development is gradual and continuous or proceeds in distinct stages." },
      { h: "Stages of the lifespan", list: [
        "Infancy (birth-1 year) and toddlerhood (1-3 years).",
        "Preschool / early childhood (3-6 years).",
        "Middle childhood / school age (6-12 years).",
        "Adolescence (about 12-18 years).",
        "Early adulthood, middle adulthood and late adulthood (old age)."
      ] },
      { h: "Developmental milestones", p: "At each stage there are expected milestones — for example, a baby sitting, crawling and walking; a child speaking and learning; an adolescent forming identity; an adult forming relationships and a career. Knowing the normal pattern helps detect delay and provide age-appropriate care, while remembering that children vary in the rate they reach milestones." },
      { h: "Nursing relevance", p: "Understanding development lets the nurse give age-appropriate care and communication (for example, play for children, independence for adolescents, respect for the elderly), recognise normal milestones and detect delay, support parents, and meet the changing physical, emotional and social needs of patients at every age." }
    ],
    references: REF_BEH,
    examQuestions: [
      "What does developmental psychology study?",
      "State the principles of human development.",
      "Explain the debates of nature vs nurture, stability vs change, and continuity vs discontinuity.",
      "List the stages of the lifespan.",
      "Why is knowledge of development important in nursing?"
    ],
    assessment: [
      { type: "mcq", q: "Developmental psychology studies how people:", options: ["Catch infections", "Grow and change across the lifespan", "Mix medicines", "Build houses"], answer: 1, rationale: "It studies physical, cognitive and psychosocial change across life." },
      { type: "mcq", q: "Early physical development proceeds in a ______ direction.", options: ["Head-to-toe (cephalocaudal)", "Toe-to-head", "Random", "Side-to-side only"], answer: 0, rationale: "Development is cephalocaudal (head-to-toe) and proximodistal." },
      { type: "mcq", q: "The debate over how much development is due to genes vs environment is:", options: ["Nature vs nurture", "Stability vs change", "Continuity vs discontinuity", "Health vs illness"], answer: 0, rationale: "Nature vs nurture concerns heredity versus environment." },
      { type: "mcq", q: "Whether development is gradual or occurs in distinct stages is the debate of:", options: ["Nature vs nurture", "Continuity vs discontinuity", "Stability vs change", "Cause vs effect"], answer: 1, rationale: "Continuity vs discontinuity concerns gradual change versus stages." },
      { type: "mcq", q: "The answer to the nature-nurture debate is that development results from:", options: ["Genes only", "Environment only", "Both, interacting", "Neither"], answer: 2, rationale: "Development arises from the interaction of nature and nurture." },
      { type: "mcq", q: "The stage from about 12 to 18 years is:", options: ["Infancy", "Adolescence", "Middle adulthood", "Late adulthood"], answer: 1, rationale: "Adolescence spans roughly 12-18 years." },
      { type: "mcq", q: "Expected achievements at each stage (e.g. walking, talking) are called:", options: ["Milestones", "Reflexes", "Symptoms", "Traits"], answer: 0, rationale: "Developmental milestones are expected achievements at each stage." },
      { type: "mcq", q: "Development is best described as:", options: ["Random and unpredictable", "Orderly and following a predictable sequence", "Complete at birth", "Identical in timing for all"], answer: 1, rationale: "Development is orderly and sequential, though rates vary individually." },
      { type: "mcq", q: "Knowing developmental milestones helps the nurse to:", options: ["Detect delay and give age-appropriate care", "Ignore the child's age", "Treat all ages the same", "Avoid parents"], answer: 0, rationale: "Milestone knowledge supports detecting delay and age-appropriate care." },
      { type: "mcq", q: "Cognitive development refers to the growth of:", options: ["Bones", "Thinking and learning", "Muscles only", "Blood cells"], answer: 1, rationale: "Cognitive development is the growth of thinking, reasoning and learning." },
      { type: "fill", q: "The head-to-toe direction of early physical development is called ______.", accept: ["cephalocaudal"], rationale: "Development proceeds cephalocaudally (head-to-toe)." },
      { type: "fill", q: "Expected achievements at each developmental stage are called ______.", accept: ["milestones", "milestone"], rationale: "Milestones mark normal progress; delay may signal a problem." }
    ]
  },
  {
    id: "bh-14-erikson",
    unit: "Unit 4 · Development Across the Lifespan",
    title: "Erikson's Psychosocial Stages of Development",
    readMinutes: 16,
    summary: "Erikson's theory of eight psychosocial stages across the lifespan, the conflict of each stage, and how nurses apply this understanding to care at every age.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Erikson's theory of psychosocial development", p: "Erik Erikson proposed that personality develops through eight psychosocial stages across the whole lifespan. At each stage the person faces a central conflict (or 'crisis') between two outcomes; resolving it well builds a strength that supports healthy development, while failing to resolve it can cause difficulties later. Unlike Freud, Erikson stressed social relationships and the entire lifespan." },
      { h: "The eight stages", list: [
        "Trust vs Mistrust (infancy, 0-1 yr) — consistent, loving care builds trust.",
        "Autonomy vs Shame/Doubt (toddler, 1-3 yr) — encouragement builds independence.",
        "Initiative vs Guilt (preschool, 3-6 yr) — supporting play and questions builds initiative.",
        "Industry vs Inferiority (school age, 6-12 yr) — success at tasks builds competence.",
        "Identity vs Role Confusion (adolescence, 12-18 yr) — forming a sense of self/identity.",
        "Intimacy vs Isolation (young adult) — forming close, loving relationships.",
        "Generativity vs Stagnation (middle adult) — contributing to family, work and the next generation.",
        "Ego Integrity vs Despair (late adult) — looking back on life with acceptance and satisfaction."
      ], figure: { caption: "Figure 14.1 — Erikson's eight psychosocial stages across the lifespan.", placeholder: true } },
      { h: "How the stages work", p: "Each stage builds on the ones before. For example, an infant who develops trust finds it easier later to form relationships (intimacy). Failure at a stage is not permanent but can make later stages harder. The conflicts are resolved through the person's relationships with caregivers, family and society." },
      { h: "Stages most relevant in nursing", p: "Several stages matter especially in care: an infant needs consistent, loving attention to build trust (important when a baby is hospitalised); a hospitalised toddler needs some choice to protect autonomy; an adolescent needs respect for their developing identity and privacy; and an older adult facing illness or the end of life is working on integrity — making sense of their life — and needs to be listened to and valued." },
      { h: "Nursing relevance", p: "Erikson's stages help the nurse understand the emotional needs and tasks of patients at each age and provide developmentally appropriate care and support — for example, encouraging a child's play and independence, supporting an adolescent's identity, and helping an older person achieve a sense of integrity and dignity." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Describe Erikson's theory of psychosocial development.",
      "List Erikson's eight stages and the conflict of each.",
      "How does each stage build on the previous ones?",
      "Which stages are most relevant in caring for an infant, an adolescent and an older adult?",
      "How can nurses apply Erikson's theory in care?"
    ],
    assessment: [
      { type: "mcq", q: "Erikson's theory describes how many psychosocial stages?", options: ["Five", "Eight", "Three", "Twelve"], answer: 1, rationale: "Erikson described eight psychosocial stages across the lifespan." },
      { type: "mcq", q: "The central conflict of infancy (0-1 year) is:", options: ["Trust vs Mistrust", "Identity vs Role Confusion", "Integrity vs Despair", "Intimacy vs Isolation"], answer: 0, rationale: "Trust vs Mistrust is the first stage, built by consistent loving care." },
      { type: "mcq", q: "The main developmental task of adolescence is:", options: ["Autonomy", "Identity vs Role Confusion", "Generativity", "Trust"], answer: 1, rationale: "Adolescents work on forming a sense of identity (vs role confusion)." },
      { type: "mcq", q: "An older adult reviewing life with acceptance is in the stage of:", options: ["Intimacy vs Isolation", "Industry vs Inferiority", "Integrity vs Despair", "Initiative vs Guilt"], answer: 2, rationale: "Late adulthood involves ego integrity vs despair." },
      { type: "mcq", q: "The toddler stage (1-3 years) involves the conflict of:", options: ["Autonomy vs Shame/Doubt", "Trust vs Mistrust", "Identity vs Role Confusion", "Intimacy vs Isolation"], answer: 0, rationale: "Toddlers develop autonomy vs shame and doubt." },
      { type: "mcq", q: "Forming close, loving relationships is the task of:", options: ["Young adulthood (Intimacy vs Isolation)", "Infancy", "School age", "Old age"], answer: 0, rationale: "Intimacy vs Isolation is the young-adult stage." },
      { type: "mcq", q: "Unlike Freud, Erikson emphasised:", options: ["Only the unconscious", "Social relationships across the whole lifespan", "Only childhood", "Only biology"], answer: 1, rationale: "Erikson stressed psychosocial development across the entire lifespan." },
      { type: "mcq", q: "A hospitalised infant most needs ______ to support healthy development.", options: ["Strict discipline", "Consistent, loving care (to build trust)", "To be left alone", "Independence training"], answer: 1, rationale: "Consistent loving care builds the infant's trust." },
      { type: "mcq", q: "Success at school tasks during the school-age years builds:", options: ["Industry (competence)", "Despair", "Mistrust", "Stagnation"], answer: 0, rationale: "Industry vs Inferiority: succeeding at tasks builds a sense of competence." },
      { type: "mcq", q: "Contributing to family, work and the next generation in middle adulthood is:", options: ["Generativity vs Stagnation", "Trust vs Mistrust", "Identity vs Role Confusion", "Autonomy vs Shame"], answer: 0, rationale: "Middle adulthood is generativity vs stagnation." },
      { type: "fill", q: "The first stage of Erikson's theory, in infancy, is ______ vs Mistrust.", accept: ["trust"], rationale: "Trust vs Mistrust is built by consistent, loving infant care." },
      { type: "fill", q: "The main psychosocial task of adolescence is forming a sense of ______.", accept: ["identity"], rationale: "Adolescence centres on identity vs role confusion." }
    ]
  },
  {
    id: "bh-15-education",
    unit: "Unit 5 · Social Factors in Health",
    title: "Education & Health",
    readMinutes: 14,
    summary: "Formal and informal education, the strong influence of education on health (especially women's education), and the nurse's role in health education.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is education?", p: "Education is the process of acquiring knowledge, skills, values and attitudes. It takes two main forms: formal education — structured learning in schools, colleges and institutions leading to qualifications; and informal education — learning that happens through family, daily life, community, media and experience, without a formal curriculum." },
      { h: "Education as a determinant of health", p: "Education is one of the most powerful social determinants of health. Educated people generally understand health information better (health literacy), adopt healthier behaviours, recognise illness earlier, use health services more appropriately, and have better living and working conditions. Lack of education is linked to poorer health and higher mortality." },
      { h: "Women's education and health", p: "The education of women and girls has an especially strong effect on the health of the whole family. Educated mothers tend to have fewer, healthier children; better infant and child nutrition and immunisation; lower child and maternal mortality; later marriage and childbirth; and greater use of antenatal and family-planning services. Promoting girls' education is therefore a key public-health strategy in Bangladesh." },
      { h: "Education and health behaviour", p: "Education influences whether people practise healthy behaviours — hygiene, safe water and sanitation, balanced diet, immunisation, family planning, and seeking timely care. It also reduces harmful practices and helps people understand and follow medical advice, improving adherence to treatment." },
      { h: "Health education by nurses", p: "Nurses are themselves educators. Health education is the planned teaching of individuals, families and communities to promote healthy behaviour and self-care. Effective health education uses simple language, respects the learner's culture and literacy level, involves the learner, repeats and reinforces key messages, and checks understanding — drawing on the psychology of learning and motivation." },
      { h: "Nursing relevance", p: "Because education shapes health so strongly, nurses promote education (especially of women), tailor their teaching to each patient's understanding, and use health education as a core nursing intervention to prevent illness, support self-care and improve adherence." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Differentiate formal and informal education.",
      "Explain how education acts as a determinant of health.",
      "Why does women's education have a strong effect on family health?",
      "How does education influence health behaviour?",
      "Describe the principles of effective health education by nurses."
    ],
    assessment: [
      { type: "mcq", q: "Structured learning in schools leading to qualifications is ______ education.", options: ["Informal", "Formal", "Accidental", "Hidden"], answer: 1, rationale: "Formal education is structured schooling; informal is everyday learning." },
      { type: "mcq", q: "Learning through family, media and daily life is ______ education.", options: ["Formal", "Informal", "Compulsory", "Higher"], answer: 1, rationale: "Informal education occurs outside structured institutions." },
      { type: "mcq", q: "Education is best described as a:", options: ["Vital sign", "Social determinant of health", "Type of vaccine", "Microbe"], answer: 1, rationale: "Education strongly influences health — a key social determinant." },
      { type: "mcq", q: "The ability to understand and use health information is called:", options: ["Health literacy", "Immunity", "Resistance", "Adherence only"], answer: 0, rationale: "Health literacy is the capacity to understand and use health information." },
      { type: "mcq", q: "Educating women and girls especially improves:", options: ["Only their own income", "The health of the whole family (lower child/maternal mortality)", "Nothing measurable", "Only literacy rates"], answer: 1, rationale: "Women's education improves child nutrition, immunisation and survival." },
      { type: "mcq", q: "Higher education levels are generally linked to:", options: ["Worse health", "Better health behaviours and outcomes", "No change in health", "More infections"], answer: 1, rationale: "Education is associated with healthier behaviour and better outcomes." },
      { type: "mcq", q: "Planned teaching to promote healthy behaviour is called:", options: ["Health education", "Sterilisation", "Diagnosis", "Prescription"], answer: 0, rationale: "Health education is planned teaching for health promotion and self-care." },
      { type: "mcq", q: "Effective health education by a nurse should:", options: ["Use complex jargon", "Use simple language and check understanding", "Ignore culture", "Avoid repetition"], answer: 1, rationale: "Use simple, culturally appropriate language, involve the learner and confirm understanding." },
      { type: "mcq", q: "Promoting girls' education in Bangladesh is considered a key strategy for:", options: ["Public health", "Reducing literacy", "Spreading disease", "Raising mortality"], answer: 0, rationale: "Girls' education is a major public-health strategy improving family health." },
      { type: "mcq", q: "Education improves adherence to treatment mainly by:", options: ["Helping people understand and follow advice", "Removing the need for medicine", "Replacing nurses", "Lowering motivation"], answer: 0, rationale: "Understanding health advice improves cooperation and adherence." },
      { type: "fill", q: "The ability to understand and use health information is called health ______.", accept: ["literacy"], rationale: "Health literacy underlies healthy behaviour and adherence." },
      { type: "fill", q: "Planned teaching of patients and communities to promote health is called health ______.", accept: ["education"], rationale: "Health education is a core nursing intervention." }
    ]
  },
  {
    id: "bh-16-religion",
    unit: "Unit 5 · Social Factors in Health",
    title: "Religion & Health",
    readMinutes: 14,
    summary: "What religion is, how it influences health and health care, the importance of spiritual care, and how nurses respectfully meet patients' religious and spiritual needs.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is religion?", p: "Religion is an organised system of beliefs, practices and values centred on the sacred or a higher power, shared by a community. Spirituality, a related idea, is a person's search for meaning, purpose and connection, which may or may not be expressed through a particular religion. Both are important parts of many people's lives, especially during illness." },
      { h: "Religion in the context of Bangladesh", p: "Bangladesh is a religiously observant society, with Islam as the majority faith and Hindu, Buddhist, Christian and other communities. Religious belief and practice are woven into daily life, family decisions, diet, dress and attitudes to health, illness and death. Nurses care for people of many faiths and must respect each." },
      { h: "How religion influences health", list: [
        "Beliefs about the cause of illness and healing (e.g. illness as a test, the value of prayer).",
        "Dietary rules (e.g. halal food, fasting in Ramadan, vegetarianism) that affect nutrition and medication timing.",
        "Modesty and gender preferences (e.g. preferring a same-sex carer).",
        "Practices around birth, naming, death and burial that must be respected and not delayed.",
        "Attitudes to specific treatments, family planning, and end-of-life decisions."
      ] },
      { h: "Religion as support and coping", p: "Religion and spirituality often help patients cope with illness, fear and loss by giving meaning, hope, comfort and a supportive community. Prayer and faith can reduce anxiety and support recovery. For many patients, spiritual wellbeing is as important as physical care, especially when seriously or terminally ill." },
      { h: "Spiritual care in nursing", p: "Spiritual care means recognising and supporting the patient's religious and spiritual needs as part of holistic care. The nurse does this by asking about and respecting beliefs, allowing time and privacy for prayer and worship, accommodating dietary and modesty needs where possible, supporting religious practices around birth and death, arranging visits from religious leaders if wished, and never imposing the nurse's own beliefs." },
      { h: "Nursing relevance", p: "Because faith shapes how patients understand and cope with illness, respecting religion builds trust, comfort and cooperation. Sensitive spiritual care — accommodating prayer, fasting, diet, modesty and end-of-life rites — is an essential part of holistic, person-centred nursing in a diverse society." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define religion and spirituality.",
      "Describe how religion influences health and health care.",
      "How can religion help patients cope with illness?",
      "What is spiritual care and how does the nurse provide it?",
      "Why is respecting religious beliefs important in nursing?"
    ],
    assessment: [
      { type: "mcq", q: "A person's search for meaning, purpose and connection (which may be beyond formal religion) is:", options: ["Spirituality", "Sterilisation", "Socialisation", "Immunity"], answer: 0, rationale: "Spirituality is the search for meaning/connection; religion is its organised form." },
      { type: "mcq", q: "Which religious practice can affect medication timing and nutrition?", options: ["Fasting (e.g. Ramadan)", "Wearing a uniform", "Reading a chart", "Taking vital signs"], answer: 0, rationale: "Fasting affects when food and medicines can be taken." },
      { type: "mcq", q: "Religion often helps patients by providing:", options: ["Meaning, hope and comfort", "More infections", "Higher blood pressure", "Nothing"], answer: 0, rationale: "Faith can give meaning, hope, comfort and community support in illness." },
      { type: "mcq", q: "Spiritual care in nursing means:", options: ["Imposing the nurse's beliefs", "Recognising and respecting the patient's religious/spiritual needs", "Ignoring beliefs", "Refusing religious visitors"], answer: 1, rationale: "Spiritual care respects and supports the patient's own beliefs and needs." },
      { type: "mcq", q: "A patient may prefer a same-sex carer due to religious/cultural:", options: ["Modesty", "Diagnosis", "Allergy", "Vital signs"], answer: 0, rationale: "Modesty norms may lead a patient to prefer a carer of the same sex." },
      { type: "mcq", q: "Practices around death and burial in many faiths should be:", options: ["Delayed indefinitely", "Respected and not unnecessarily delayed", "Ignored", "Decided by the nurse"], answer: 1, rationale: "Death and burial rites should be respected and facilitated promptly." },
      { type: "mcq", q: "The majority religion in Bangladesh is:", options: ["Islam", "Buddhism", "Christianity", "None"], answer: 0, rationale: "Islam is the majority faith in Bangladesh, alongside other communities." },
      { type: "mcq", q: "When caring for a patient of a different faith, the nurse should:", options: ["Convert them", "Respect their beliefs and not impose their own", "Refuse care", "Argue about religion"], answer: 1, rationale: "Nurses respect patients' beliefs and never impose their own." },
      { type: "mcq", q: "Halal dietary requirements are an example of religion influencing:", options: ["Nutrition/diet", "Blood type", "Bone growth", "Reflexes"], answer: 0, rationale: "Dietary rules such as halal affect a patient's nutrition and food choices." },
      { type: "mcq", q: "Spiritual wellbeing is especially important for patients who are:", options: ["Seriously or terminally ill", "Only mildly unwell", "Healthy visitors", "Staff"], answer: 0, rationale: "Spiritual needs become especially important in serious or terminal illness." },
      { type: "fill", q: "The personal search for meaning and connection, which may go beyond formal religion, is ______.", accept: ["spirituality"], rationale: "Spirituality is broader than organised religion." },
      { type: "fill", q: "Care that recognises and supports a patient's religious and spiritual needs is called ______ care.", accept: ["spiritual"], rationale: "Spiritual care is part of holistic nursing." }
    ]
  },
  {
    id: "bh-17-stress-crisis",
    unit: "Unit 5 · Social Factors in Health",
    title: "Stress, Life Crisis & Coping",
    readMinutes: 16,
    summary: "What stress is and the body's stress response, the effects of stress on health, life crises, defence mechanisms and coping strategies, and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is stress?", p: "Stress is the body's physical and emotional response to any demand or threat (a 'stressor'). Stressors may be physical (illness, injury, pain), psychological (fear, worry), or social (exams, money, family problems, loss). A little stress can be helpful and motivating, but excessive or prolonged stress harms health." },
      { h: "The stress response", p: "When faced with a stressor the body reacts. Hans Selye described a General Adaptation Syndrome (GAS) with three stages: the alarm stage (the 'fight or flight' response — adrenaline, raised heart rate and blood pressure), the resistance stage (the body adapts and copes), and, if stress continues too long, the exhaustion stage (reserves run out and illness can develop).", figure: { caption: "Figure 17.1 — Selye's General Adaptation Syndrome (the body's stages of response to stress).", svg: "<svg viewBox='0 0 560 80' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='General adaptation syndrome'><defs><marker id='bh17' markerWidth='8' markerHeight='8' refX='6' refY='3' orient='auto'><path d='M0,0 L6,3 L0,6 Z' fill='#2E63B8'/></marker></defs>" + [["Alarm (fight/flight)", 8], ["Resistance (adapt)", 200], ["Exhaustion", 392]].map(function (p, i) { var x = p[1]; var w = (i === 2 ? 150 : 175); return "<rect x='" + x + "' y='24' width='" + w + "' height='38' rx='8' fill='#E6ECF8' stroke='#2E63B8'/><text x='" + (x + w / 2) + "' y='47' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#14387A'>" + p[0] + "</text>" + (i < 2 ? "<line x1='" + (x + w) + "' y1='43' x2='" + (x + w + 17) + "' y2='43' stroke='#2E63B8' stroke-width='2' marker-end='url(#bh17)'/>" : ""); }).join("") + "</svg>" } },
      { h: "Effects of stress on health", p: "Prolonged stress affects the whole person: physically (headaches, raised blood pressure, poor sleep, weakened immunity, worsening of conditions such as ulcers and heart disease), emotionally (anxiety, irritability, low mood), and behaviourally (poor concentration, overeating or loss of appetite, substance use). Stress both causes illness and is caused by it — being ill or in hospital is itself stressful." },
      { h: "Life crisis", p: "A life crisis is a turning point or period of great difficulty when a person's usual coping is overwhelmed by a major change or event. Crises may be developmental (expected life transitions such as adolescence, marriage, retirement) or situational (unexpected events such as serious illness, accident, loss of a job, or bereavement). Crisis is a time of both danger and opportunity for growth." },
      { h: "Coping and defence mechanisms", p: "Coping means the efforts people make to manage stress. Problem-focused coping tackles the stressor itself (e.g. making a plan, seeking help); emotion-focused coping manages the feelings it causes (e.g. talking, relaxation, faith). The mind also uses unconscious defence mechanisms (such as denial, repression and rationalisation) to reduce anxiety. Strong social support — family, friends and community — is one of the most powerful aids to coping." },
      { h: "Helping patients cope (crisis support)", p: "Nurses support coping and crisis by recognising signs of stress, listening and allowing the person to express feelings, giving clear information to reduce fear of the unknown, helping with practical problems, teaching simple relaxation, mobilising family and social support, and referring for further help when needed. Reducing avoidable stressors (noise, pain, uncertainty) in hospital is also important." },
      { h: "Nursing relevance", p: "Illness and hospitalisation are major stressors and life crises for patients and families. Understanding stress, crisis and coping helps the nurse reduce patients' distress, support healthy coping, and protect their own wellbeing against the stresses of nursing work." }
    ],
    references: REF_BEH,
    examQuestions: [
      "Define stress and stressor, and describe Selye's General Adaptation Syndrome.",
      "Describe the effects of prolonged stress on health.",
      "What is a life crisis? Differentiate developmental and situational crises.",
      "Differentiate problem-focused and emotion-focused coping, and define defence mechanisms.",
      "How can the nurse help a patient cope with stress and crisis?"
    ],
    assessment: [
      { type: "mcq", q: "Stress is the body's response to a demand or threat called a:", options: ["Stressor", "Reflex", "Vaccine", "Hormone"], answer: 0, rationale: "A stressor is the demand/threat that triggers the stress response." },
      { type: "mcq", q: "The first stage of Selye's General Adaptation Syndrome is:", options: ["Resistance", "Alarm (fight or flight)", "Exhaustion", "Recovery"], answer: 1, rationale: "The alarm stage is the initial fight-or-flight reaction." },
      { type: "mcq", q: "If stress continues too long, the body reaches the ______ stage.", options: ["Alarm", "Resistance", "Exhaustion", "Adaptation"], answer: 2, rationale: "Prolonged stress leads to exhaustion, where reserves run out and illness can develop." },
      { type: "mcq", q: "Coping that tackles the stressor itself (e.g. making a plan) is:", options: ["Emotion-focused", "Problem-focused", "Denial", "Avoidance only"], answer: 1, rationale: "Problem-focused coping addresses the source of stress directly." },
      { type: "mcq", q: "Talking about feelings or using relaxation to manage distress is:", options: ["Problem-focused coping", "Emotion-focused coping", "A reflex", "A stressor"], answer: 1, rationale: "Emotion-focused coping manages the emotional impact of stress." },
      { type: "mcq", q: "A serious accident or sudden bereavement is an example of a ______ crisis.", options: ["Developmental", "Situational", "Planned", "Minor"], answer: 1, rationale: "Situational crises are unexpected events; developmental crises are expected transitions." },
      { type: "mcq", q: "One of the most powerful aids to coping with stress is:", options: ["Isolation", "Strong social support", "Ignoring problems", "More stressors"], answer: 1, rationale: "Social support (family, friends, community) strongly aids coping." },
      { type: "mcq", q: "Prolonged stress can weaken the body's:", options: ["Immunity", "Bones only", "Hair colour", "Height"], answer: 0, rationale: "Chronic stress impairs immunity and worsens many conditions." },
      { type: "mcq", q: "Adolescence, marriage and retirement are examples of ______ crises/transitions.", options: ["Developmental", "Situational", "Accidental", "Medical"], answer: 0, rationale: "These are expected developmental life transitions." },
      { type: "mcq", q: "To help a patient cope, the nurse should:", options: ["Withhold information", "Listen, give clear information and mobilise support", "Increase noise and uncertainty", "Ignore feelings"], answer: 1, rationale: "Listening, clear information and support reduce stress and aid coping." },
      { type: "fill", q: "The three-stage stress response described by Selye is the General ______ Syndrome.", accept: ["adaptation"], rationale: "Selye's General Adaptation Syndrome has alarm, resistance and exhaustion stages." },
      { type: "fill", q: "Coping that directly tackles the source of stress is called ______-focused coping.", accept: ["problem"], rationale: "Problem-focused coping addresses the stressor; emotion-focused manages feelings." }
    ]
  },
  {
    id: "bh-18-application",
    unit: "Unit 5 · Social Factors in Health",
    title: "Applying Behavioral Science in Nursing",
    readMinutes: 15,
    summary: "How nurses put psychology and sociology into practice — therapeutic relationships, behaviour change, supporting coping, cultural and family sensitivity, adherence, and nurse self-care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Bringing it together", p: "Behavioral science is not just theory — it is used in every nursing encounter. Understanding psychology and sociology helps the nurse care for the whole person: their mind, emotions, relationships and social world, alongside their physical needs. This final topic draws the subject together into everyday practice." },
      { h: "Building therapeutic relationships", p: "Drawing on humanistic psychology, the nurse builds a trusting, therapeutic relationship using warmth, empathy, genuineness, respect and active listening. Good communication — verbal and non-verbal — gathers accurate information, reduces fear, gains cooperation and is itself healing." },
      { h: "Promoting healthy behaviour change", p: "Much ill health is linked to behaviour (diet, smoking, hygiene, exercise, treatment adherence). Using learning theory and motivation, the nurse helps people change: setting realistic goals, linking change to what the patient values, giving information and skills, reinforcing progress with encouragement, and involving family support. Knowing that knowledge alone rarely changes behaviour, the nurse also addresses beliefs, motivation and barriers." },
      { h: "Supporting coping and emotional needs", p: "Illness brings fear, anxiety, loss and stress. The nurse recognises these, allows patients to express feelings, gives clear information to reduce uncertainty, teaches simple coping and relaxation, and mobilises social support — applying the psychology of stress, crisis and coping to reduce distress and aid recovery." },
      { h: "Cultural, family and social sensitivity", p: "Using sociology and anthropology, the nurse delivers care that fits the patient's culture, religion, family and social situation — respecting beliefs and customs, involving the family as partners and caregivers, and addressing social barriers to care such as poverty, distance or low literacy. This makes care acceptable, trusted and effective." },
      { h: "Supporting adherence to treatment", p: "Many patients do not follow treatment fully. Behavioral science helps the nurse improve adherence by simplifying and explaining regimens, checking understanding, exploring and addressing the patient's beliefs and worries, building motivation, using reminders and routines, and enlisting family support — rather than simply blaming the patient." },
      { h: "Self-awareness and nurse wellbeing", p: "Behavioral science also applies to the nurse. Self-awareness of one's own personality, biases and emotional reactions improves relationships and teamwork. Recognising and managing one's own stress (with coping strategies, support and balance) protects against burnout — essential for sustaining compassionate care." },
      { h: "Nursing relevance", p: "Applied behavioral science underpins person-centred nursing: therapeutic communication, health promotion and behaviour change, emotional and crisis support, culturally sensitive and family-centred care, better adherence, and the nurse's own resilience — turning the theory of psychology and sociology into compassionate, effective practice." }
    ],
    references: REF_BEH,
    examQuestions: [
      "How is behavioral science used in everyday nursing practice?",
      "Describe how the nurse builds a therapeutic relationship.",
      "How can the nurse promote healthy behaviour change in patients?",
      "How does behavioral science help support coping and improve adherence?",
      "Why are self-awareness and stress management important for the nurse?"
    ],
    assessment: [
      { type: "mcq", q: "A therapeutic nurse-patient relationship is built on:", options: ["Empathy, respect and active listening", "Giving orders", "Ignoring feelings", "Speaking only to family"], answer: 0, rationale: "Warmth, empathy, respect, genuineness and active listening build trust." },
      { type: "mcq", q: "For lasting behaviour change, the nurse should remember that:", options: ["Knowledge alone usually changes behaviour", "Motivation, beliefs and barriers also matter", "Information is never useful", "Patients cannot change"], answer: 1, rationale: "Behaviour change needs motivation and addressing beliefs/barriers, not just facts." },
      { type: "mcq", q: "Encouraging a patient's progress with praise is an example of:", options: ["Punishment", "Reinforcement", "Denial", "Stress"], answer: 1, rationale: "Positive reinforcement (encouragement) strengthens desired behaviour." },
      { type: "mcq", q: "Culturally sensitive care means the nurse:", options: ["Imposes their own culture", "Respects the patient's beliefs and involves family", "Ignores religion", "Refuses interpreters"], answer: 1, rationale: "It respects the patient's culture, religion and family in care." },
      { type: "mcq", q: "To improve adherence to treatment, the nurse should:", options: ["Blame the patient", "Simplify and explain, check understanding and address worries", "Give no information", "Use complex jargon"], answer: 1, rationale: "Explaining clearly, checking understanding and addressing beliefs improves adherence." },
      { type: "mcq", q: "Reducing a patient's fear of the unknown is best achieved by:", options: ["Withholding information", "Giving clear information and listening", "Avoiding the patient", "Increasing noise"], answer: 1, rationale: "Clear information and listening reduce uncertainty and fear." },
      { type: "mcq", q: "Self-awareness of one's own personality and stress helps the nurse to:", options: ["Avoid all patients", "Improve relationships and prevent burnout", "Stop documenting", "Ignore the team"], answer: 1, rationale: "Self-awareness aids relationships, teamwork and prevention of burnout." },
      { type: "mcq", q: "Involving the family in a patient's care reflects the use of:", options: ["Sociology (the family as a social unit)", "Pharmacology", "Microbiology", "Radiology"], answer: 0, rationale: "Recognising and involving the family draws on sociology." },
      { type: "mcq", q: "Helping a patient express feelings and mobilising support applies the psychology of:", options: ["Coping and stress", "Sterilisation", "Genetics", "Nutrition"], answer: 0, rationale: "Supporting expression and support draws on stress-and-coping psychology." },
      { type: "mcq", q: "Applied behavioral science mainly supports which kind of nursing?", options: ["Person-centred (holistic) care", "Equipment repair", "Accounting", "Construction"], answer: 0, rationale: "It underpins holistic, person-centred nursing care." },
      { type: "fill", q: "A trusting, professional, goal-directed nurse-patient relationship is called a ______ relationship.", accept: ["therapeutic"], rationale: "The therapeutic relationship is central to applied behavioral science in nursing." },
      { type: "fill", q: "Protecting oneself from work stress to sustain compassionate care helps prevent ______.", accept: ["burnout"], rationale: "Managing stress and self-awareness help prevent nurse burnout." }
    ]
  }
];
