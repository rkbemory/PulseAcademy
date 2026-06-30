/* ============================================================
   Diploma in Nursing · D116 Communicative English — 10 topics.
   Aligned to the BNMC 2018 syllabus (grammar, the four language
   skills, and communication for nursing). Topics 1-5 authored;
   6-10 are structured placeholders. Grounded in standard texts:
     • Soars L, Soars J. New Headway. Oxford University Press.
     • Murphy R. English Grammar in Use. Cambridge University Press.
     • Swan M. Practical English Usage. Oxford University Press.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_ENG = [
  "Soars L, Soars J. New Headway. Oxford University Press.",
  "Murphy R. English Grammar in Use. Cambridge University Press.",
  "Swan M. Practical English Usage. Oxford University Press."
];

window.Academic.topics["diploma-nursing/communicative-english"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "ce-01-grammar-foundations",
    unit: "Unit 1 · Grammar Foundations",
    title: "English Grammar Foundations",
    readMinutes: 16,
    summary: "Why English matters for nurses, the parts of speech, the verb 'to be', articles, subject-verb agreement, possessive adjectives, and basic sentence structure.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why English matters for nurses", p: "English is widely used in health care for textbooks, drug information, records, and communication within the health team and with patients and families. Clear, correct English helps the nurse understand instructions, document accurately, and avoid dangerous misunderstandings. This subject builds the grammar and the four skills (reading, listening, speaking, writing) needed for effective communication." },
      { h: "The parts of speech", list: [
        "Noun — a person, place, thing or idea (nurse, hospital, medicine, care).",
        "Pronoun — replaces a noun (he, she, it, they, we).",
        "Verb — an action or state (give, examine, is, feel).",
        "Adjective — describes a noun (sick, clean, careful).",
        "Adverb — describes a verb, adjective or adverb (quickly, carefully, very).",
        "Preposition — shows relationship (in, on, at, to, with).",
        "Conjunction — joins words or clauses (and, but, because).",
        "Interjection — a short exclamation (Oh! Well!)."
      ] },
      { h: "The verb 'to be'", p: "The verb 'to be' is one of the most common and important verbs. In the present it is am, is and are: I am, you are, he/she/it is, we/they are. For example: 'I am a nurse', 'She is busy', 'They are patients'. It is used to describe people and things, and to form the continuous and passive tenses." },
      { h: "Articles (a, an, the)", p: "Articles come before nouns. 'A' and 'an' are indefinite articles for one, non-specific thing: 'a' before a consonant sound (a nurse, a hospital) and 'an' before a vowel sound (an apple, an hour). 'The' is the definite article, used for a specific or already-known thing ('the patient in bed 3'). Some nouns need no article (uncountable or general: 'Water is essential')." },
      { h: "Subject-verb agreement", p: "The verb must agree with its subject in number. A singular subject takes a singular verb and a plural subject a plural verb: 'The nurse works here' / 'The nurses work here'; 'She is ready' / 'They are ready'. In the present simple, third-person singular (he/she/it) adds -s to the verb (he works, she goes)." },
      { h: "Possessive adjectives", p: "Possessive adjectives show who something belongs to and come before a noun: my, your, his, her, its, our, their. For example: 'This is my pen', 'Take your medicine', 'The patient and his family'. They must match the owner (his for male, her for female)." },
      { h: "Basic sentence structure", p: "A basic English sentence follows the order Subject + Verb + Object (SVO): 'The nurse (subject) gives (verb) the medicine (object).' Every sentence needs at least a subject and a verb and expresses a complete thought, beginning with a capital letter and ending with a full stop (or question/exclamation mark)." }
    ],
    references: REF_ENG,
    examQuestions: [
      "Why is English important for nurses?",
      "Name the parts of speech with an example of each.",
      "Give the present forms of the verb 'to be'.",
      "Explain the use of the articles a, an and the.",
      "What is subject-verb agreement? Give an example."
    ],
    assessment: [
      { type: "mcq", q: "Choose the correct sentence:", options: ["She are a nurse.", "She is a nurse.", "She am a nurse.", "She be a nurse."], answer: 1, rationale: "With 'she' (third-person singular) the correct form of 'to be' is 'is'." },
      { type: "mcq", q: "Which article correctly completes: '___ hour'?", options: ["a", "an", "the only", "no article"], answer: 1, rationale: "'Hour' begins with a vowel sound, so it takes 'an' (an hour)." },
      { type: "mcq", q: "A word that describes a noun (e.g. 'clean', 'sick') is a/an:", options: ["Verb", "Adjective", "Adverb", "Preposition"], answer: 1, rationale: "Adjectives describe nouns; adverbs describe verbs/adjectives." },
      { type: "mcq", q: "Choose the correct form: 'The nurses ___ here every day.'", options: ["works", "work", "working", "is work"], answer: 1, rationale: "The plural subject 'nurses' takes the plural verb 'work'." },
      { type: "mcq", q: "Which is a possessive adjective?", options: ["quickly", "her", "and", "run"], answer: 1, rationale: "'Her' is a possessive adjective (my, your, his, her, its, our, their)." },
      { type: "mcq", q: "A word that joins clauses, such as 'because' or 'but', is a:", options: ["Conjunction", "Noun", "Adjective", "Pronoun"], answer: 0, rationale: "Conjunctions join words or clauses." },
      { type: "mcq", q: "The basic English word order is:", options: ["Verb-Subject-Object", "Subject-Verb-Object", "Object-Subject-Verb", "Subject-Object-Verb"], answer: 1, rationale: "Standard English order is Subject + Verb + Object (SVO)." },
      { type: "mcq", q: "Choose the correct article: 'Please give me ___ pen.' (one, not specific)", options: ["an", "a", "the", "no article"], answer: 1, rationale: "'Pen' begins with a consonant sound, so use 'a' for one non-specific item." },
      { type: "mcq", q: "Which word is a verb?", options: ["careful", "examine", "quickly", "hospital"], answer: 1, rationale: "'Examine' is a verb (an action); the others are adjective, adverb and noun." },
      { type: "mcq", q: "Choose the correct sentence:", options: ["He go to work daily.", "He goes to work daily.", "He going to work daily.", "He gone to work daily."], answer: 1, rationale: "Third-person singular present simple adds -s: 'He goes'." },
      { type: "fill", q: "The present form of 'to be' used with 'I' is ______.", accept: ["am"], rationale: "I am; you/we/they are; he/she/it is." },
      { type: "fill", q: "The article used before a vowel sound (e.g. ___ apple) is ______.", accept: ["an"], rationale: "'An' is used before a vowel sound; 'a' before a consonant sound." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ce-02-present-tenses",
    unit: "Unit 1 · Grammar Foundations",
    title: "The Present Tenses",
    readMinutes: 15,
    summary: "The present simple and present continuous, adverbs of frequency, state verbs, and when to use each present tense, with examples relevant to nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The present simple", p: "The present simple is used for habits, routines, facts and things that are generally true. The verb is in its base form, but the third-person singular (he/she/it) adds -s. Examples: 'I work in a hospital', 'She takes her medicine every morning', 'Water boils at 100 °C'. Negatives and questions use do/does: 'He does not smoke', 'Do you feel pain?'" },
      { h: "Adverbs of frequency", p: "Adverbs of frequency say how often something happens: always, usually, often, sometimes, rarely, never. They usually go before the main verb but after 'to be': 'She always washes her hands', 'He is never late'. They are common with the present simple for routines." },
      { h: "The present continuous", p: "The present continuous (am/is/are + verb-ing) describes an action happening now or around now. Examples: 'The patient is sleeping', 'I am giving the injection', 'They are waiting outside'. It is also used for temporary situations and definite future arrangements ('I am meeting the doctor at 4 pm')." },
      { h: "State (stative) verbs", p: "Some verbs describe states rather than actions — for example know, believe, like, want, need, understand, belong. These 'state verbs' are normally NOT used in the continuous form. We say 'I understand' (not 'I am understanding') and 'She wants water' (not 'She is wanting water')." },
      { h: "Present simple vs present continuous", p: "Use the present simple for routines and facts ('I check vital signs every hour') and the present continuous for what is happening now ('I am checking her vital signs'). Choosing the right one makes communication clear — for example, distinguishing a patient's usual condition from their current state." },
      { h: "Nursing relevance", p: "Nurses use present tenses constantly: describing a patient's usual routines and habits (present simple) and reporting what is happening now (present continuous) — for example, in a handover: 'He usually sleeps well, but right now he is complaining of pain.'" }
    ],
    references: REF_ENG,
    examQuestions: [
      "When is the present simple used? Give two examples.",
      "What are adverbs of frequency and where are they placed?",
      "When is the present continuous used?",
      "What are state verbs and why are they not used in the continuous form?",
      "Differentiate the present simple and present continuous with a nursing example."
    ],
    assessment: [
      { type: "mcq", q: "Choose the correct present-simple form: 'She ___ her medicine every morning.'", options: ["take", "takes", "taking", "is taking"], answer: 1, rationale: "Third-person singular present simple adds -s: 'She takes'." },
      { type: "mcq", q: "Which sentence is in the present continuous?", options: ["I work here.", "The patient is sleeping.", "Water boils at 100 °C.", "She takes medicine daily."], answer: 1, rationale: "Present continuous = am/is/are + -ing ('is sleeping')." },
      { type: "mcq", q: "The present simple is used for:", options: ["Actions happening right now", "Habits, routines and facts", "Completed past actions", "Future arrangements only"], answer: 1, rationale: "The present simple expresses habits, routines and general facts." },
      { type: "mcq", q: "Which is a state (stative) verb not normally used in the continuous?", options: ["run", "know", "walk", "give"], answer: 1, rationale: "'Know' is a state verb; we say 'I know', not 'I am knowing'." },
      { type: "mcq", q: "Where does the adverb of frequency usually go: 'She ___ washes her hands.'", options: ["washes always", "always washes", "washes hands always before", "always is wash"], answer: 1, rationale: "Adverbs of frequency go before the main verb: 'She always washes...'." },
      { type: "mcq", q: "Choose the correct negative: 'He ___ smoke.'", options: ["do not", "does not", "is not", "not"], answer: 1, rationale: "Third-person singular present-simple negative uses 'does not'." },
      { type: "mcq", q: "Choose the correct question: '___ you feel pain?'", options: ["Does", "Do", "Are", "Is"], answer: 1, rationale: "With 'you', present-simple questions use 'Do' (Do you feel pain?)." },
      { type: "mcq", q: "Which sentence is correct?", options: ["I am understanding the instructions.", "I understand the instructions.", "I understanding the instructions.", "I understands the instructions."], answer: 1, rationale: "'Understand' is a state verb; use the present simple, not continuous." },
      { type: "mcq", q: "'The patient is complaining of pain right now' uses the present:", options: ["simple", "continuous", "perfect", "perfect continuous"], answer: 1, rationale: "An action happening now uses the present continuous." },
      { type: "mcq", q: "Choose the correct sentence for a fact:", options: ["Water is boiling at 100 °C.", "Water boils at 100 °C.", "Water boil at 100 °C.", "Water boiled at 100 °C always."], answer: 1, rationale: "General facts take the present simple: 'Water boils at 100 °C'." },
      { type: "fill", q: "Add the correct ending: 'He work__ in a hospital.' (present simple)", accept: ["s", "works"], rationale: "Third-person singular adds -s: 'He works'." },
      { type: "fill", q: "The present continuous is formed with am/is/are + the verb ending in ______.", accept: ["-ing", "ing"], rationale: "Present continuous = am/is/are + verb-ing." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ce-03-past-tenses",
    unit: "Unit 1 · Grammar Foundations",
    title: "The Past Tenses",
    readMinutes: 15,
    summary: "The past simple (regular and irregular verbs), the past continuous and past perfect, narrative tenses, and their use in describing events and taking a history.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The past simple", p: "The past simple describes a completed action at a definite time in the past. Regular verbs add -ed (work → worked, examine → examined). Many common verbs are irregular and must be learned (go → went, take → took, give → gave, be → was/were). Example: 'The patient arrived at 8 am and the doctor examined him.'" },
      { h: "Negatives and questions in the past", p: "Past-simple negatives and questions use 'did' (did not / didn't) with the base form of the verb: 'She did not sleep well', 'Did you take your medicine?'. Note that after 'did', the main verb returns to its base form (not the -ed form): 'Did he go?' (not 'Did he went?')." },
      { h: "Regular and irregular verbs", p: "Regular verbs form the past simple and past participle with -ed (clean → cleaned → cleaned). Irregular verbs change their spelling and must be memorised; many have three different forms (go → went → gone; take → took → taken; see → saw → seen). Knowing irregular verbs is essential for correct past and perfect tenses." },
      { h: "The past continuous", p: "The past continuous (was/were + verb-ing) describes an action that was in progress at a moment in the past, often interrupted by another action: 'She was sleeping when the nurse came in', 'They were waiting when the doctor arrived'. It sets the background scene in a story." },
      { h: "The past perfect", p: "The past perfect (had + past participle) describes an action completed before another past action — the 'earlier past'. Example: 'The patient had taken the medicine before the nurse arrived' (taking the medicine happened first). It makes the order of past events clear." },
      { h: "Narrative tenses and nursing use", p: "Telling a story or reporting events uses these past tenses together: the past simple for the main events, the past continuous for the background, and the past perfect for what happened earlier. Nurses use them constantly when taking a patient's history and reporting incidents — for example: 'He was working in the field when he felt chest pain; he had eaten a heavy meal earlier.'" }
    ],
    references: REF_ENG,
    examQuestions: [
      "When is the past simple used, and how are regular verbs formed?",
      "How are negatives and questions formed in the past simple?",
      "Differentiate regular and irregular verbs with examples.",
      "When is the past continuous used?",
      "Explain the past perfect and give a nursing example."
    ],
    assessment: [
      { type: "mcq", q: "Choose the correct past simple: 'The doctor ___ the patient yesterday.'", options: ["examine", "examined", "examines", "examining"], answer: 1, rationale: "Regular past simple adds -ed: 'examined'." },
      { type: "mcq", q: "What is the past simple of the irregular verb 'go'?", options: ["goed", "went", "gone", "going"], answer: 1, rationale: "'Go' is irregular: go → went (past simple) → gone (past participle)." },
      { type: "mcq", q: "Choose the correct question: '___ you take your medicine?'", options: ["Do", "Did", "Does", "Are"], answer: 1, rationale: "Past-simple questions use 'Did' + base verb: 'Did you take...?'." },
      { type: "mcq", q: "Choose the correct sentence:", options: ["Did he went home?", "Did he go home?", "Did he goes home?", "Did he going home?"], answer: 1, rationale: "After 'did', the main verb is in the base form: 'Did he go?'." },
      { type: "mcq", q: "Which sentence uses the past continuous?", options: ["She slept well.", "She was sleeping when I came in.", "She has slept.", "She sleeps well."], answer: 1, rationale: "Past continuous = was/were + -ing ('was sleeping')." },
      { type: "mcq", q: "The past perfect (had + past participle) describes an action that happened:", options: ["Right now", "Before another past action", "In the future", "Repeatedly in the present"], answer: 1, rationale: "The past perfect marks the 'earlier past' — before another past event." },
      { type: "mcq", q: "Choose the correct past perfect: 'The patient ___ the medicine before the nurse arrived.'", options: ["take", "took", "had taken", "is taking"], answer: 2, rationale: "Past perfect = had + past participle: 'had taken'." },
      { type: "mcq", q: "Which is the correct past simple negative?", options: ["She did not slept.", "She did not sleep.", "She not sleep.", "She didn't slept."], answer: 1, rationale: "'Did not' is followed by the base verb: 'did not sleep'." },
      { type: "mcq", q: "The past participle of 'take' is:", options: ["took", "taken", "taked", "taking"], answer: 1, rationale: "Take → took (past) → taken (past participle)." },
      { type: "mcq", q: "Which sentence correctly shows an interrupted past action?", options: ["He worked when he feels pain.", "He was working when he felt chest pain.", "He works when he felt pain.", "He has worked when he felt pain."], answer: 1, rationale: "Past continuous (background) + past simple (interrupting action)." },
      { type: "fill", q: "The past simple of the regular verb 'clean' is ______.", accept: ["cleaned"], rationale: "Regular verbs form the past simple with -ed: cleaned." },
      { type: "fill", q: "Past-simple questions and negatives use the auxiliary verb ______ + the base verb.", accept: ["did"], rationale: "'Did' + base verb forms past-simple questions/negatives." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ce-04-future-perfect",
    unit: "Unit 1 · Grammar Foundations",
    title: "Future Forms & Perfect Tenses",
    readMinutes: 15,
    summary: "Ways of talking about the future (will, going to, present continuous) and the present perfect and present perfect continuous, with their typical uses.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Talking about the future", p: "English has several ways to talk about the future, each with a slightly different use.", figure: {
        caption: "Figure 4.1 — Past, present and future on a timeline.",
        svg: "<svg viewBox='0 0 520 70' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Tense timeline'>" +
          "<line x1='20' y1='40' x2='500' y2='40' stroke='#6B7785' stroke-width='2'/><polygon points='500,40 490,35 490,45' fill='#6B7785'/>" +
          "<circle cx='120' cy='40' r='5' fill='#B85C5C'/><text x='120' y='28' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#B85C5C'>Past</text>" +
          "<circle cx='270' cy='40' r='5' fill='#16A34A'/><text x='270' y='28' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#16A34A'>Now</text>" +
          "<circle cx='430' cy='40' r='5' fill='#2E63B8'/><text x='430' y='28' text-anchor='middle' font-family='Inter' font-size='11' font-weight='700' fill='#2E63B8'>Future</text>" +
          "</svg>"
      } },
      { h: "Will, going to, and present continuous for the future", list: [
        "'Will' + base verb — for instant decisions, predictions and offers: 'I will get your medicine', 'It will rain'.",
        "'Going to' + base verb — for plans and intentions, and predictions from evidence: 'She is going to study nursing', 'Look at those clouds — it is going to rain'.",
        "Present continuous — for fixed future arrangements: 'I am seeing the doctor tomorrow at 10 am'."
      ] },
      { h: "The present perfect", p: "The present perfect (have/has + past participle) links the past to the present. It is used for past actions with a result or relevance now, and experiences without a specific time: 'I have finished the report', 'She has worked here for five years', 'Have you ever given an injection?'. It is NOT used with a finished past time (we say 'I saw him yesterday', not 'I have seen him yesterday')." },
      { h: "Signal words: ever, never, just, yet, already, for, since", p: "Certain words go with the present perfect: ever and never (experience: 'Have you ever...'), just (very recently: 'She has just arrived'), already (sooner than expected), and yet (in questions/negatives: 'Has the doctor come yet?'). For shows a length of time ('for five years') and since a starting point ('since 2020')." },
      { h: "The present perfect continuous", p: "The present perfect continuous (have/has been + verb-ing) emphasises an action that started in the past and is still continuing (or has just stopped), often stressing its duration: 'She has been working all night', 'He has been waiting for an hour'." },
      { h: "Nursing relevance", p: "These tenses are essential in care: offering help ('I will help you'), describing plans ('You are going to have an X-ray'), and reporting history with present relevance ('The patient has had a fever since this morning' / 'He has been coughing for three days')." }
    ],
    references: REF_ENG,
    examQuestions: [
      "Describe three ways of talking about the future and when each is used.",
      "When is the present perfect used?",
      "Give the signal words used with the present perfect and their meaning.",
      "What does the present perfect continuous emphasise?",
      "Give nursing examples of the future and present perfect tenses."
    ],
    assessment: [
      { type: "mcq", q: "For an instant decision or offer, the future is usually formed with:", options: ["going to", "will + base verb", "present simple", "past simple"], answer: 1, rationale: "'Will' is used for instant decisions, offers and predictions." },
      { type: "mcq", q: "Choose the correct present perfect: 'She ___ here for five years.'", options: ["work", "worked", "has worked", "is working"], answer: 2, rationale: "Present perfect (have/has + past participle) with 'for': 'has worked'." },
      { type: "mcq", q: "Which sentence is correct?", options: ["I have seen him yesterday.", "I saw him yesterday.", "I has seen him yesterday.", "I am seeing him yesterday."], answer: 1, rationale: "A finished past time ('yesterday') takes the past simple, not the present perfect." },
      { type: "mcq", q: "'Going to' is mainly used for:", options: ["Instant decisions", "Plans and intentions", "Completed past actions", "Facts"], answer: 1, rationale: "'Going to' expresses plans, intentions and evidence-based predictions." },
      { type: "mcq", q: "Choose the correct form: 'Has the doctor arrived ___?'", options: ["yet", "ago", "since", "already arrived"], answer: 0, rationale: "'Yet' is used with the present perfect in questions/negatives." },
      { type: "mcq", q: "The present perfect uses 'for' and 'since' to show:", options: ["place", "duration (for) and starting point (since)", "the future", "negation"], answer: 1, rationale: "'For' shows length of time; 'since' shows the starting point." },
      { type: "mcq", q: "Which sentence uses the present perfect continuous?", options: ["She works all night.", "She has been working all night.", "She worked all night.", "She is work all night."], answer: 1, rationale: "Present perfect continuous = have/has been + -ing." },
      { type: "mcq", q: "A fixed future arrangement is often expressed with the:", options: ["past simple", "present continuous", "past perfect", "base verb alone"], answer: 1, rationale: "Present continuous expresses arranged future plans ('I am seeing the doctor tomorrow')." },
      { type: "mcq", q: "Choose the correct present perfect: 'The patient ___ a fever since this morning.'", options: ["have had", "has had", "had", "is having"], answer: 1, rationale: "Third-person singular present perfect: 'has had'." },
      { type: "mcq", q: "'She has just arrived' — 'just' means the action happened:", options: ["long ago", "very recently", "in the future", "never"], answer: 1, rationale: "'Just' indicates a very recent action with the present perfect." },
      { type: "fill", q: "The present perfect is formed with have/has + the ______ participle.", accept: ["past"], rationale: "Present perfect = have/has + past participle." },
      { type: "fill", q: "For a plan or intention we often use 'be ______ to' + base verb (e.g. 'going to study').", accept: ["going"], rationale: "'Going to' expresses plans and intentions." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ce-05-questions-structure",
    unit: "Unit 1 · Grammar Foundations",
    title: "Questions, Negatives & Sentence Structure",
    readMinutes: 14,
    summary: "How to form questions and negatives, the use of auxiliary verbs, wh- questions, word order, and question tags — essential for asking patients and giving information.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Auxiliary (helping) verbs", p: "Auxiliary verbs help form questions, negatives and tenses. The main ones are 'be' (am/is/are/was/were), 'do' (do/does/did) and 'have' (have/has/had), plus the modal verbs (can, will, should, must, may). For example, 'do' helps form present-simple questions and negatives ('Do you smoke?', 'She does not smoke')." },
      { h: "Forming yes/no questions", p: "Yes/no questions are formed by putting the auxiliary verb before the subject. With 'be', invert the verb: 'You are ready' → 'Are you ready?'. With other present/past simple verbs, use do/does/did: 'He works' → 'Does he work?', 'She came' → 'Did she come?'. The answer is yes or no." },
      { h: "Wh- questions", p: "Wh- questions ask for information using question words: what, where, when, why, who, which, whose, and how (and how much/many/long/often). The pattern is usually: question word + auxiliary + subject + verb. Examples: 'What is your name?', 'Where does it hurt?', 'How long have you had the pain?'. These are vital for taking a patient's history." },
      { h: "Forming negatives", p: "Negatives are made by adding 'not' to the auxiliary verb: 'is not (isn't)', 'do not (don't)', 'does not (doesn't)', 'did not (didn't)', 'have not (haven't)', 'cannot (can't)', 'will not (won't)'. Examples: 'She is not in pain', 'He does not smoke', 'I did not sleep'." },
      { h: "Word order", p: "Correct word order makes meaning clear. Statements follow Subject-Verb-Object ('The nurse gave the medicine'). Questions change the order by putting the auxiliary before the subject ('Did the nurse give the medicine?'). Adjectives come before the noun ('a clean dressing'), and adverbs of frequency before the main verb." },
      { h: "Question tags and nursing use", p: "A question tag is a short question added to the end of a statement to check or confirm: 'You are feeling better, aren't you?', 'He hasn't eaten, has he?'. A positive statement takes a negative tag and vice versa. Good questioning skills — clear yes/no and wh- questions and gentle tags — help nurses gather information, check understanding and reassure patients." }
    ],
    references: REF_ENG,
    examQuestions: [
      "What are auxiliary verbs and what do they do?",
      "How are yes/no questions formed?",
      "List the wh- question words and give the pattern of a wh- question.",
      "How are negatives formed in English?",
      "What is a question tag? Give an example."
    ],
    assessment: [
      { type: "mcq", q: "Which word is an auxiliary (helping) verb?", options: ["does", "quickly", "hospital", "clean"], answer: 0, rationale: "'Does' is an auxiliary verb (be, do, have and modals are auxiliaries)." },
      { type: "mcq", q: "Form a yes/no question: 'You are ready.' →", options: ["You are ready?", "Are you ready?", "Do you ready?", "Are ready you?"], answer: 1, rationale: "With 'be', invert verb and subject: 'Are you ready?'." },
      { type: "mcq", q: "Choose the correct question: '___ does it hurt?'", options: ["What", "Where", "Who", "Whose"], answer: 1, rationale: "'Where does it hurt?' asks about place/location of pain." },
      { type: "mcq", q: "Choose the correct negative: 'He ___ smoke.'", options: ["do not", "does not", "not", "is not"], answer: 1, rationale: "Third-person singular present-simple negative uses 'does not'." },
      { type: "mcq", q: "Which is a correctly formed wh- question?", options: ["Where it hurts?", "Where does it hurt?", "Where hurts it?", "It where hurt?"], answer: 1, rationale: "Pattern: question word + auxiliary + subject + verb." },
      { type: "mcq", q: "The contraction 'didn't' means:", options: ["do not", "did not", "does not", "is not"], answer: 1, rationale: "'Didn't' = did not (past-simple negative)." },
      { type: "mcq", q: "Choose the correct word order:", options: ["Gave the nurse the medicine.", "The nurse gave the medicine.", "The medicine the nurse gave.", "Medicine gave nurse the."], answer: 1, rationale: "Statements follow Subject-Verb-Object: 'The nurse gave the medicine'." },
      { type: "mcq", q: "Choose the correct question tag: 'You are feeling better, ___?'", options: ["are you", "aren't you", "isn't it", "do you"], answer: 1, rationale: "A positive statement takes a negative tag: 'aren't you?'." },
      { type: "mcq", q: "Which auxiliary forms past-simple questions?", options: ["do", "does", "did", "is"], answer: 2, rationale: "'Did' forms past-simple questions and negatives." },
      { type: "mcq", q: "'How long have you had the pain?' is an example of a:", options: ["Yes/no question", "Wh- (information) question", "Statement", "Command"], answer: 1, rationale: "It uses a wh-/how question word to ask for information." },
      { type: "fill", q: "To make a present-simple question with 'he', use the auxiliary ______ + base verb.", accept: ["does"], rationale: "'Does he work?' — 'does' + base verb for third-person singular." },
      { type: "fill", q: "A short question added to a statement to confirm it (e.g. 'isn't it?') is a question ______.", accept: ["tag"], rationale: "Question tags check or confirm information." }
    ]
  },

  /* ---------- Placeholders: structured to the BNMC D116 syllabus ---------- */
  {
    id: "ce-06-adjectives-prepositions",
    unit: "Unit 2 · Words & Expression",
    title: "Adjectives, Adverbs, Prepositions & Comparison",
    readMinutes: 15,
    summary: "Using adjectives and adverbs correctly, forming comparatives and superlatives, and the common prepositions of time, place and movement.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Adjectives", p: "An adjective describes (gives more information about) a noun — its quality, size, colour or condition. It usually comes before the noun ('a sick patient', 'a clean dressing') or after the verb 'to be' and similar verbs ('The patient is sick', 'The wound looks clean'). Adjectives do not change for singular or plural ('one clean towel', 'two clean towels')." },
      { h: "Adverbs", p: "An adverb describes a verb, an adjective or another adverb — telling how, when, where or how often. Many adverbs of manner are formed by adding -ly to an adjective (careful → carefully, quick → quickly). Examples: 'She works carefully', 'He is very tired', 'The doctor came early'. Adverbs of manner usually come after the verb or object." },
      { h: "Comparative forms", p: "Comparatives compare two things, using 'than'. Short adjectives add -er (tall → taller, big → bigger); longer adjectives use 'more' (more careful, more comfortable). Examples: 'This bed is cleaner than that one', 'She is more experienced than me'. Some are irregular: good → better, bad → worse, far → further." },
      { h: "Superlative forms", p: "Superlatives compare three or more things and pick out the most, usually with 'the'. Short adjectives add -est (tall → tallest); longer ones use 'most' (the most careful). Examples: 'This is the cleanest ward', 'She is the most experienced nurse'. Irregular forms: good → the best, bad → the worst. 'As ... as' shows equality ('as tall as')." },
      { h: "Prepositions", list: [
        "Prepositions of time — at (a time: at 8 am), on (a day/date: on Monday), in (a month/year/part of day: in May, in the morning).",
        "Prepositions of place — at (a point), in (an enclosed space), on (a surface), and under, over, between, beside, behind.",
        "Prepositions of movement — to, into, onto, towards, from."
      ] },
      { h: "Nursing relevance", p: "These words make descriptions clear and accurate. Adjectives and adverbs describe patients and care ('a pale, restless patient breathing rapidly'); comparatives and superlatives compare findings ('the pain is worse than yesterday'); and prepositions locate things precisely ('pain in the chest', 'the chart on the bed', 'medicine at 8 am') — important for safe, unambiguous communication." }
    ],
    references: REF_ENG,
    examQuestions: [
      "What is an adjective and where is it placed?",
      "How are adverbs of manner usually formed?",
      "How are comparative and superlative adjectives formed? Give regular and irregular examples.",
      "List prepositions of time, place and movement with examples.",
      "Why is precise use of these words important in nursing?"
    ],
    assessment: [
      { type: "mcq", q: "Choose the correct comparative: 'This bed is ___ than that one.'", options: ["clean", "cleaner", "cleanest", "more cleaner"], answer: 1, rationale: "Short adjectives form the comparative with -er: 'cleaner ... than'." },
      { type: "mcq", q: "Choose the correct superlative: 'She is the ___ nurse on the ward.'", options: ["experienced", "more experienced", "most experienced", "experiencedest"], answer: 2, rationale: "Longer adjectives form the superlative with 'most': 'the most experienced'." },
      { type: "mcq", q: "Which is the adverb? 'She works ___.'", options: ["careful", "carefully", "care", "careless"], answer: 1, rationale: "Adverbs of manner often end in -ly: 'carefully'." },
      { type: "mcq", q: "The irregular comparative of 'good' is:", options: ["gooder", "better", "best", "more good"], answer: 1, rationale: "Good → better (comparative) → best (superlative)." },
      { type: "mcq", q: "Choose the correct preposition of time: 'The medicine is due ___ 8 am.'", options: ["on", "in", "at", "to"], answer: 2, rationale: "'At' is used with a specific clock time (at 8 am)." },
      { type: "mcq", q: "Choose the correct preposition: 'The chart is ___ the bed.' (on a surface)", options: ["in", "on", "at", "under"], answer: 1, rationale: "'On' is used for a surface (on the bed)." },
      { type: "mcq", q: "An adjective usually comes:", options: ["after the noun always", "before the noun (or after 'be')", "after an adverb only", "at the end of a sentence"], answer: 1, rationale: "Adjectives come before the noun or after the verb 'to be'." },
      { type: "mcq", q: "Choose the correct preposition of time: '___ Monday'.", options: ["at", "on", "in", "to"], answer: 1, rationale: "'On' is used with days and dates (on Monday)." },
      { type: "mcq", q: "The superlative of 'bad' is:", options: ["the baddest", "the worse", "the worst", "more bad"], answer: 2, rationale: "Bad → worse → the worst (irregular)." },
      { type: "mcq", q: "Choose the correct sentence:", options: ["The pain is more worse today.", "The pain is worse today.", "The pain is worst than yesterday.", "The pain is bad more today."], answer: 1, rationale: "'Worse' is the comparative of 'bad'; 'more worse' is incorrect." },
      { type: "fill", q: "Add the ending for the comparative: 'tall' → tall__.", accept: ["er", "taller"], rationale: "Short adjectives add -er for the comparative (taller)." },
      { type: "fill", q: "The preposition of time used with a year or month (e.g. ___ May) is ______.", accept: ["in"], rationale: "'In' is used with months, years and parts of the day." }
    ]
  },
  {
    id: "ce-07-vocabulary",
    unit: "Unit 2 · Words & Expression",
    title: "Vocabulary, Word Building, Phrasal Verbs & Idioms",
    readMinutes: 15,
    summary: "How to build vocabulary using prefixes and suffixes, synonyms and antonyms, phrasal verbs and common idioms, including useful medical word parts.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Building vocabulary", p: "A good vocabulary makes communication clear and confident. Vocabulary grows through reading and listening, working out meaning from context, keeping a word list, and using a dictionary. Learning how words are built — and recognising word parts — lets you understand and even guess the meaning of many new words." },
      { h: "Prefixes", p: "A prefix is added to the beginning of a word to change its meaning. Common prefixes include un-, in-, im-, dis- (meaning 'not' or 'opposite': unhappy, incorrect, disagree), re- ('again': rewrite), and pre- ('before': preoperative). In medicine, prefixes are very useful — for example hyper- ('too much': hypertension), hypo- ('too little': hypoglycaemia) and anti- ('against': antibiotic)." },
      { h: "Suffixes", p: "A suffix is added to the end of a word and often changes its part of speech. For example, -tion/-ment make nouns (inform → information, treat → treatment), -ful/-less make adjectives (care → careful / careless), and -ly makes adverbs (quick → quickly). Medical suffixes are also common, such as -itis ('inflammation': arthritis) and -ology ('study of': cardiology)." },
      { h: "Synonyms and antonyms", p: "A synonym is a word with a similar meaning (big / large; ill / sick; doctor / physician). An antonym is a word with the opposite meaning (hot / cold; healthy / sick; increase / decrease). Knowing synonyms helps you avoid repeating words and choose the right tone; antonyms help you express contrast." },
      { h: "Phrasal verbs", p: "A phrasal verb is a verb combined with a small word (a particle) such as up, out, in, after or off, which together often have a special meaning. Examples useful in nursing: look after (care for), give up (stop, e.g. smoking), fill in/out (complete a form), pick up (collect or acquire), calm down, take off. The meaning is often not obvious from the separate words, so phrasal verbs must be learned." },
      { h: "Idioms", p: "An idiom is a fixed expression whose meaning is different from the literal words. For example, 'under the weather' means feeling unwell, and 'feeling blue' means feeling sad. Idioms make speech natural but can confuse learners, so use them carefully — especially with patients who may take them literally." },
      { h: "Nursing relevance", p: "A strong, accurate vocabulary — including medical word parts, clear everyday words and useful phrasal verbs — lets the nurse understand records and instructions, communicate precisely with the team, and explain things simply to patients (avoiding jargon and confusing idioms)." }
    ],
    references: REF_ENG,
    examQuestions: [
      "How can a nurse build their vocabulary?",
      "What is a prefix? Give general and medical examples.",
      "What is a suffix and how does it change a word? Give examples.",
      "Differentiate synonyms and antonyms with examples.",
      "What are phrasal verbs and idioms? Give nursing examples and explain why care is needed."
    ],
    assessment: [
      { type: "mcq", q: "A word part added to the BEGINNING of a word is a:", options: ["Suffix", "Prefix", "Synonym", "Idiom"], answer: 1, rationale: "A prefix is added to the start; a suffix to the end." },
      { type: "mcq", q: "The prefix 'hyper-' means:", options: ["Too little", "Too much / over", "Against", "Before"], answer: 1, rationale: "'Hyper-' means excessive/over (e.g. hypertension); 'hypo-' means too little." },
      { type: "mcq", q: "The suffix '-itis' means:", options: ["Study of", "Inflammation", "Removal", "Pain only"], answer: 1, rationale: "'-itis' means inflammation (e.g. arthritis, appendicitis)." },
      { type: "mcq", q: "A synonym for 'ill' is:", options: ["healthy", "sick", "happy", "tall"], answer: 1, rationale: "A synonym has a similar meaning; 'sick' is a synonym of 'ill'." },
      { type: "mcq", q: "An antonym of 'increase' is:", options: ["raise", "grow", "decrease", "add"], answer: 2, rationale: "An antonym is the opposite; 'decrease' is the opposite of 'increase'." },
      { type: "mcq", q: "The phrasal verb 'look after' means:", options: ["Search for", "Care for", "Look behind", "Give up"], answer: 1, rationale: "'Look after' means to care for/take care of someone." },
      { type: "mcq", q: "The idiom 'under the weather' means:", options: ["It is raining", "Feeling unwell", "Outside", "Very happy"], answer: 1, rationale: "'Under the weather' is an idiom meaning feeling unwell." },
      { type: "mcq", q: "The prefix 'anti-' means:", options: ["After", "Against", "Before", "Within"], answer: 1, rationale: "'Anti-' means against (e.g. antibiotic, antiseptic)." },
      { type: "mcq", q: "Adding '-ful' to 'care' makes the adjective:", options: ["careless", "careful", "caring", "cared"], answer: 1, rationale: "The suffix -ful forms the adjective 'careful'." },
      { type: "mcq", q: "When talking to a patient, idioms should be:", options: ["Used heavily", "Used carefully (they may be taken literally)", "Always avoided in records", "Translated word for word"], answer: 1, rationale: "Idioms can confuse; use them carefully, especially with language learners." },
      { type: "fill", q: "A word part added to the END of a word, often changing its part of speech, is a ______.", accept: ["suffix"], rationale: "Suffixes (e.g. -tion, -ful, -ly) attach to the end of a word." },
      { type: "fill", q: "The prefix meaning 'too little' (e.g. ___glycaemia) is ______.", accept: ["hypo", "hypo-"], rationale: "'Hypo-' means too little (e.g. hypoglycaemia); 'hyper-' means too much." }
    ]
  },
  {
    id: "ce-08-reading-listening",
    unit: "Unit 3 · Language Skills",
    title: "Reading & Listening Skills",
    readMinutes: 14,
    summary: "The purposes and techniques of effective reading and listening, the barriers to comprehension, and why these receptive skills matter in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The four language skills", p: "Language has four skills: two receptive (reading and listening, where we take in language) and two productive (speaking and writing, where we produce it). This topic covers the receptive skills, which nurses use constantly to understand instructions, records and — most importantly — their patients." },
      { h: "Purposes of reading", p: "We read for different purposes: to find information, to follow instructions (such as drug labels and procedures), to study and learn, and for pleasure. The purpose decides how we read — quickly for the general idea, or slowly and carefully for detail." },
      { h: "Reading techniques", list: [
        "Skimming — reading quickly to get the general idea or 'gist' of a text.",
        "Scanning — looking quickly to find specific information (such as a name, dose or date).",
        "Intensive (detailed) reading — reading slowly and carefully for full understanding (e.g. a procedure or a difficult passage).",
        "Predicting and using context — guessing meaning from the topic and surrounding words."
      ] },
      { h: "Barriers to reading", p: "Reading can be slowed by limited vocabulary, reading word-by-word, poor concentration, unfamiliar topics, and poor lighting or small print. These are overcome by building vocabulary, practising, choosing the right technique for the purpose, and ensuring a good reading environment." },
      { h: "Listening skills", p: "Listening is an active skill, not just hearing. Active listening means giving full attention, focusing on the speaker's meaning and feelings, not interrupting, and showing you are listening (eye contact, nodding). Useful strategies include predicting what will be said, listening for key words, and asking for clarification or repetition when unsure." },
      { h: "Barriers to listening", p: "Listening is hindered by background noise, unfamiliar accents, fast or unclear speech, distraction, tiredness, and trying to think of a reply instead of listening. Nurses reduce these barriers by listening in a quiet place, facing the speaker, concentrating, and checking understanding by repeating back what they heard." },
      { h: "Nursing relevance", p: "Reading and listening are vital for safety: nurses must read drug labels, orders and notes accurately (scanning for the right details, reading procedures intensively), and listen carefully to patients' complaints and to handovers from colleagues. Active listening also builds the patient's trust and reveals important information." }
    ],
    references: REF_ENG,
    examQuestions: [
      "Name the four language skills and classify them as receptive or productive.",
      "Describe the purposes of reading.",
      "Differentiate skimming, scanning and intensive reading.",
      "What is active listening and what strategies improve it?",
      "Why are reading and listening skills important for nurses?"
    ],
    assessment: [
      { type: "mcq", q: "Reading and listening are the ______ language skills.", options: ["productive", "receptive", "written only", "spoken only"], answer: 1, rationale: "Reading and listening are receptive; speaking and writing are productive." },
      { type: "mcq", q: "Reading quickly to get the general idea of a text is:", options: ["Scanning", "Skimming", "Intensive reading", "Translating"], answer: 1, rationale: "Skimming = reading fast for the gist." },
      { type: "mcq", q: "Looking quickly to find a specific detail (e.g. a dose) is:", options: ["Skimming", "Scanning", "Predicting", "Proofreading"], answer: 1, rationale: "Scanning is searching for specific information." },
      { type: "mcq", q: "Reading a procedure slowly and carefully for full understanding is:", options: ["Skimming", "Scanning", "Intensive (detailed) reading", "Skipping"], answer: 2, rationale: "Intensive reading is slow, careful reading for complete understanding." },
      { type: "mcq", q: "Active listening means:", options: ["Just hearing sounds", "Giving full attention to the speaker's meaning", "Thinking of your reply while they talk", "Interrupting often"], answer: 1, rationale: "Active listening is attentive, focused listening for meaning and feeling." },
      { type: "mcq", q: "A barrier to listening is:", options: ["A quiet room", "Background noise and distraction", "Facing the speaker", "Concentrating"], answer: 1, rationale: "Noise and distraction hinder listening." },
      { type: "mcq", q: "To check understanding after listening, the nurse can:", options: ["Ignore the speaker", "Repeat back what was heard (clarify)", "Change the subject", "Walk away"], answer: 1, rationale: "Repeating back/clarifying confirms accurate understanding." },
      { type: "mcq", q: "When reading a drug label for the correct dose, the best technique is:", options: ["Skimming", "Scanning for the specific detail", "Reading for pleasure", "Predicting"], answer: 1, rationale: "Scanning quickly locates the specific detail (the dose)." },
      { type: "mcq", q: "Which improves reading speed and comprehension?", options: ["Reading word-by-word", "Building vocabulary and using the right technique", "Poor lighting", "Avoiding practice"], answer: 1, rationale: "Vocabulary, practice and matching technique to purpose improve reading." },
      { type: "mcq", q: "A good environment for listening to a patient is:", options: ["A noisy corridor", "A quiet place, facing the patient", "While doing other tasks", "With the TV on"], answer: 1, rationale: "A quiet setting and full attention support accurate listening." },
      { type: "fill", q: "Reading quickly for the general idea is called ______.", accept: ["skimming"], rationale: "Skimming gives the gist; scanning finds specific information." },
      { type: "fill", q: "Giving full attention to a speaker's meaning and feelings is called ______ listening.", accept: ["active"], rationale: "Active listening is attentive, engaged listening." }
    ]
  },
  {
    id: "ce-09-speaking",
    unit: "Unit 3 · Language Skills",
    title: "Speaking & Pronunciation Skills",
    readMinutes: 14,
    summary: "Features of effective spoken English, pronunciation (sounds, stress and intonation), paralinguistic features, sounding polite, and clear speaking in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Speaking effectively", p: "Speaking is a productive skill used to share information, ask questions and build relationships. Good speaking balances fluency (speaking smoothly without too many pauses) and accuracy (using correct grammar and words). In conversation it also involves turn-taking — listening and responding appropriately." },
      { h: "Pronunciation: sounds, stress and intonation", p: "Clear pronunciation makes speech understandable. English sounds are described by the phonemic system (the individual sounds, or phonemes, of the language). Word stress means saying one syllable of a word more strongly (for example, 'HOS-pi-tal'), and sentence stress emphasises the important words. Intonation — the rise and fall of the voice — carries meaning (for example, a rising tone often signals a question). Mispronouncing or misplacing stress can cause misunderstanding." },
      { h: "Paralinguistic features", p: "Communication is more than words. Paralinguistic features are the vocal and non-verbal elements that accompany speech: tone of voice, pace (speed), volume, and pauses, along with body language such as facial expression, eye contact, gesture and posture. A warm tone and open body language reassure a patient even before the words are understood; a harsh tone can frighten." },
      { h: "Sounding polite and appropriate", p: "Politeness matters, especially with patients and seniors. Polite English uses softer forms — 'Could you...?' and 'Would you mind...?' rather than blunt commands, and 'please' and 'thank you'. Register means choosing language to fit the situation: more formal with patients and officials, more casual with friends. Phrases for greetings, requests, apologies and thanks are essential everyday English." },
      { h: "Overcoming barriers to speaking", p: "Common barriers include shyness or lack of confidence, limited vocabulary, fear of making mistakes, and a strong accent. These improve with practice — speaking aloud, role play, conversation, and not being afraid of small errors. Speaking slowly and clearly, and checking the listener has understood, also help." },
      { h: "Nursing relevance", p: "Nurses must speak clearly, kindly and politely with patients, families and the team. Good pronunciation and stress prevent dangerous misunderstandings (e.g. drug names); a calm tone and reassuring body language reduce patients' fear; and polite, appropriate language builds trust and cooperation." }
    ],
    references: REF_ENG,
    examQuestions: [
      "What is the difference between fluency and accuracy in speaking?",
      "Explain word stress, sentence stress and intonation.",
      "What are paralinguistic features and why do they matter in nursing?",
      "How can a nurse speak politely and appropriately?",
      "What are the common barriers to speaking and how can they be overcome?"
    ],
    assessment: [
      { type: "mcq", q: "Speaking smoothly without too many pauses is called:", options: ["Accuracy", "Fluency", "Stress", "Register"], answer: 1, rationale: "Fluency is smooth, flowing speech; accuracy is correctness." },
      { type: "mcq", q: "Saying one syllable of a word more strongly is:", options: ["Intonation", "Word stress", "Volume", "Register"], answer: 1, rationale: "Word stress emphasises a particular syllable (e.g. HOS-pi-tal)." },
      { type: "mcq", q: "The rise and fall of the voice that carries meaning is:", options: ["Stress", "Intonation", "Accuracy", "A phoneme"], answer: 1, rationale: "Intonation is the melody of speech; a rising tone often signals a question." },
      { type: "mcq", q: "Tone of voice, facial expression and gesture are:", options: ["Phonemes", "Paralinguistic features", "Synonyms", "Prefixes"], answer: 1, rationale: "Paralinguistic features are the vocal and non-verbal elements of communication." },
      { type: "mcq", q: "Which is a polite way to make a request?", options: ["Give me that now.", "Could you pass me that, please?", "Get it.", "You must do it."], answer: 1, rationale: "'Could you ... please?' is a polite, softened request." },
      { type: "mcq", q: "Choosing language to suit the situation (formal vs casual) is called:", options: ["Register", "Stress", "Fluency", "An idiom"], answer: 0, rationale: "Register is the level of formality chosen for the situation." },
      { type: "mcq", q: "The individual sounds of a language are called:", options: ["Phonemes", "Idioms", "Prefixes", "Tags"], answer: 0, rationale: "Phonemes are the distinct sounds described by the phonemic system." },
      { type: "mcq", q: "A warm tone and open body language with a patient mainly:", options: ["Frighten the patient", "Reassure the patient", "Confuse the team", "Slow recovery"], answer: 1, rationale: "Warm tone and open body language reassure and build trust." },
      { type: "mcq", q: "A common barrier to speaking is:", options: ["Confidence", "Shyness / fear of mistakes", "Practice", "A wide vocabulary"], answer: 1, rationale: "Shyness and fear of errors hinder speaking; practice helps overcome them." },
      { type: "mcq", q: "Clear pronunciation of drug names matters because mistakes can cause:", options: ["Better care", "Dangerous misunderstanding", "Faster speech", "Politeness"], answer: 1, rationale: "Mispronunciation of drug names can lead to dangerous errors." },
      { type: "fill", q: "The vocal and non-verbal elements that accompany speech (tone, gesture) are ______ features.", accept: ["paralinguistic"], rationale: "Paralinguistic features accompany the words we speak." },
      { type: "fill", q: "Emphasising a particular syllable of a word is called word ______.", accept: ["stress"], rationale: "Word stress places emphasis on a syllable (e.g. HOS-pi-tal)." }
    ]
  },
  {
    id: "ce-10-writing-health",
    unit: "Unit 3 · Language Skills",
    title: "Writing Skills & Communication in Health Care",
    readMinutes: 15,
    summary: "The stages of writing, paragraph and letter structure, spelling and punctuation, and putting all the language skills together to communicate with patients and the health team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Writing as a productive skill", p: "Writing lets us record and communicate clearly and permanently. For nurses it is essential — notes, records, reports and messages must be accurate and easy to read, because others rely on them and they are legal documents. Good writing is clear, correct, well organised and appropriate to its purpose and reader." },
      { h: "The stages of writing", list: [
        "Plan — decide the purpose, reader and main points; organise ideas.",
        "Draft — write the first version, getting the ideas down.",
        "Revise — improve the content, order and clarity.",
        "Edit / proofread — correct grammar, spelling and punctuation before finishing."
      ] },
      { h: "Paragraphs and essays", p: "A paragraph is a group of sentences about one main idea. It usually has a topic sentence (stating the main idea), supporting sentences (giving details), and sometimes a concluding sentence. A short essay or composition joins several paragraphs — an introduction, a body and a conclusion — with linking words (such as first, also, however, therefore) to connect the ideas." },
      { h: "Spelling and punctuation", p: "Correct spelling and punctuation make writing clear and professional. Key punctuation marks are the capital letter (to begin a sentence and for names), the full stop (to end a statement), the comma (to separate items or pauses), the question mark, and the apostrophe (for possession and contractions). In nursing, neat, legible, correctly spelled writing prevents dangerous misunderstandings." },
      { h: "Types of writing and letters", p: "Common kinds of writing include the paragraph, the short essay, the summary, and letters. An informal letter (to family or friends) is friendly and relaxed; a formal letter (to an official or for a job application) follows a set layout with formal language. Nurses also write records and reports, which must be factual, dated, timed and signed." },
      { h: "Communication in health care", p: "All four skills come together in nursing communication. With patients, the nurse uses simple, clear, kind language — for example at the doctor's, when giving information or instructions, and when handling sensitive moments (birth, illness, death) with empathy. Everyday social English (greetings, please and thank you, apologies, telephone language) and clear professional communication with the health team are equally important. Always check that the patient has understood." },
      { h: "Nursing relevance", p: "Strong writing and overall communication keep care safe and compassionate: accurate records and messages, clear written and spoken information for patients, polite professional exchanges with the team, and sensitivity in difficult conversations. Mastering reading, listening, speaking and writing together makes the nurse an effective communicator." }
    ],
    references: REF_ENG,
    examQuestions: [
      "Why is good writing important in nursing?",
      "Describe the stages of the writing process.",
      "What is the structure of a paragraph and a short essay?",
      "Name the main punctuation marks and their uses.",
      "How should a nurse communicate in writing and speech within health care?"
    ],
    assessment: [
      { type: "mcq", q: "The correct order of the writing process is:", options: ["Draft, plan, edit, revise", "Plan, draft, revise, edit", "Edit, draft, plan, revise", "Revise, plan, edit, draft"], answer: 1, rationale: "Writing proceeds: plan → draft → revise → edit (proofread)." },
      { type: "mcq", q: "The sentence that states the main idea of a paragraph is the:", options: ["Concluding sentence", "Topic sentence", "Supporting sentence", "Heading"], answer: 1, rationale: "The topic sentence states the paragraph's main idea." },
      { type: "mcq", q: "A statement (sentence) should end with a:", options: ["Comma", "Full stop", "Apostrophe", "Capital letter"], answer: 1, rationale: "A full stop ends a statement; a question mark ends a question." },
      { type: "mcq", q: "A paragraph is a group of sentences about:", options: ["Many unrelated ideas", "One main idea", "No idea", "Only questions"], answer: 1, rationale: "A paragraph develops a single main idea." },
      { type: "mcq", q: "Checking and correcting grammar, spelling and punctuation before finishing is:", options: ["Planning", "Drafting", "Editing/proofreading", "Predicting"], answer: 2, rationale: "Editing/proofreading is the final correcting stage." },
      { type: "mcq", q: "A formal letter (e.g. a job application) should be:", options: ["Casual and slangy", "Set out formally with formal language", "Written in idioms", "Unsigned"], answer: 1, rationale: "Formal letters use a set layout and formal language." },
      { type: "mcq", q: "Words like 'however', 'therefore' and 'also' are used to:", options: ["Confuse the reader", "Link ideas (cohesion)", "End sentences", "Show possession"], answer: 1, rationale: "Linking words connect ideas and improve cohesion." },
      { type: "mcq", q: "When giving information to a patient, the nurse should use:", options: ["Complex medical jargon", "Simple, clear, kind language and check understanding", "Idioms only", "No explanation"], answer: 1, rationale: "Clear, simple, kind language (and checking understanding) aids patient communication." },
      { type: "mcq", q: "Nursing records must be:", options: ["Vague and unsigned", "Factual, dated, timed and signed", "Written in slang", "Optional"], answer: 1, rationale: "Records are legal documents — factual, dated, timed and signed." },
      { type: "mcq", q: "The apostrophe is mainly used for:", options: ["Ending sentences", "Possession and contractions", "Starting sentences", "Listing items"], answer: 1, rationale: "The apostrophe shows possession (nurse's) and contractions (don't)." },
      { type: "fill", q: "The sentence that states the main idea of a paragraph is the ______ sentence.", accept: ["topic"], rationale: "The topic sentence states the paragraph's central idea." },
      { type: "fill", q: "The final stage of writing, correcting grammar and spelling, is called ______ (or proofreading).", accept: ["editing", "edit"], rationale: "Editing/proofreading corrects errors before the work is finished." }
    ]
  }
];
