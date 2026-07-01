/* ============================================================
   Diploma in Midwifery (ICM standard) · DM118 Communicative
   English & Information & Communication Technology — 14 topics.
   Aligned to the BNMC Midwifery syllabus (Year 1). Part A —
   Communicative English; Part B — ICT for the midwife. Examples
   are framed around childbearing women, labour, the newborn and
   the midwife's role. Grounded in standard texts:
     • Murphy R. English Grammar in Use. Cambridge University Press.
     • Swan M. Practical English Usage. Oxford University Press.
     • Shelly GB, Vermaat ME. Discovering Computers. Cengage Learning.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_EIT = [
  "Murphy R. English Grammar in Use. Cambridge University Press.",
  "Swan M. Practical English Usage. Oxford University Press.",
  "Shelly GB, Vermaat ME. Discovering Computers. Cengage Learning."
];

window.Academic.topics["diploma-midwifery/english-ict"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "eit-01-grammar-foundations",
    unit: "Unit 1 · Communicative English",
    title: "English Grammar Foundations for the Midwife",
    readMinutes: 16,
    summary: "Why English matters for the midwife, the parts of speech, the verb 'to be', articles, subject-verb agreement, possessive adjectives, prepositions and basic sentence structure, illustrated with midwifery examples.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why English matters for the midwife", p: "English is widely used in midwifery for textbooks, drug information, partographs, referral letters, the Safe Delivery App and communication within the health team. Clear, correct English helps the midwife understand instructions, document labour accurately, counsel the childbearing woman, and avoid dangerous misunderstandings. This subject builds the grammar and the four skills (reading, listening, speaking, writing) the midwife needs every day." },
      { h: "The parts of speech", list: [
        "Noun — a person, place, thing or idea (midwife, labour room, oxytocin, care).",
        "Pronoun — replaces a noun (she, her, they, it).",
        "Verb — an action or state (deliver, examine, is, feel).",
        "Adjective — describes a noun (pregnant, healthy, gentle).",
        "Adverb — describes a verb, adjective or adverb (quickly, gently, very).",
        "Preposition — shows relationship (in, on, at, to, with, during).",
        "Conjunction — joins words or clauses (and, but, because).",
        "Interjection — a short exclamation (Oh! Well done!)."
      ] },
      { h: "The verb 'to be'", p: "The verb 'to be' is one of the most common and important verbs. In the present it is am, is and are: I am, you are, he/she/it is, we/they are. For example: 'I am a midwife', 'She is in labour', 'They are newborns'. It is used to describe people and things and to form the continuous and passive tenses ('The baby is crying', 'The placenta was delivered')." },
      { h: "Articles (a, an, the)", p: "Articles come before nouns. 'A' and 'an' are indefinite articles for one, non-specific thing: 'a' before a consonant sound (a midwife, a contraction) and 'an' before a vowel sound (an examination, an hour). 'The' is the definite article for a specific or already-known thing ('the woman in bed 3'). Some uncountable or general nouns need no article ('Breast milk is best for the baby')." },
      { h: "Subject-verb agreement", p: "The verb must agree with its subject in number. A singular subject takes a singular verb and a plural subject a plural verb: 'The midwife checks the fetal heart' / 'The midwives check the fetal heart'; 'She is ready' / 'They are ready'. In the present simple, third-person singular (he/she/it) adds -s to the verb (she palpates, the baby feeds)." },
      { h: "Possessive adjectives", p: "Possessive adjectives show who something belongs to and come before a noun: my, your, his, her, its, our, their. For example: 'This is my partograph', 'Take your iron tablets', 'The woman and her baby'. They must match the owner (her for the mother, its for the baby's cord)." },
      { h: "Prepositions in midwifery", p: "Prepositions link a noun to the rest of the sentence and often cause errors. Common ones include in, on, at, to, with, during, after and before: 'pain in the lower abdomen', 'on the labour table', 'at term', 'during the second stage', 'after birth'. The midwife should choose the right preposition because it changes meaning ('bleeding during labour' is not the same as 'bleeding after labour')." },
      { h: "Basic sentence structure", p: "A basic English sentence follows the order Subject + Verb + Object (SVO): 'The midwife (subject) gives (verb) the medicine (object).' Every sentence needs at least a subject and a verb and expresses a complete thought, beginning with a capital letter and ending with a full stop, question mark or exclamation mark." }
    ],
    references: REF_EIT,
    examQuestions: [
      "Why is good English important for the midwife? Give three examples from practice.",
      "Name the eight parts of speech with a midwifery example of each.",
      "Give the present forms of the verb 'to be' and use each in a sentence about a childbearing woman.",
      "Explain the use of the articles a, an and the with examples.",
      "What is subject-verb agreement? Illustrate with singular and plural midwifery sentences."
    ],
    assessment: [
      { type: "mcq", q: "Choose the correct sentence:", options: ["She are a midwife.", "She is a midwife.", "She am a midwife.", "She be a midwife."], answer: 1, rationale: "With 'she' (third-person singular) the correct form of 'to be' is 'is'." },
      { type: "mcq", q: "Which article correctly completes: '___ hour after birth'?", options: ["a", "an", "the only", "no article"], answer: 1, rationale: "'Hour' begins with a vowel sound, so it takes 'an' (an hour)." },
      { type: "mcq", q: "In 'The midwife palpates the abdomen gently', the word 'gently' is a/an:", options: ["Adjective", "Noun", "Adverb", "Preposition"], answer: 2, rationale: "'Gently' describes how the verb 'palpates' is done, so it is an adverb." },
      { type: "mcq", q: "Choose the correct form: 'The midwives ___ the fetal heart every hour.'", options: ["checks", "check", "checking", "is check"], answer: 1, rationale: "The plural subject 'midwives' takes the plural verb 'check'." },
      { type: "mcq", q: "Which is a possessive adjective?", options: ["gently", "her", "and", "deliver"], answer: 1, rationale: "'Her' is a possessive adjective (my, your, his, her, its, our, their)." },
      { type: "mcq", q: "Which word is a preposition in 'pain during the second stage'?", options: ["pain", "during", "stage", "second"], answer: 1, rationale: "'During' shows the relationship of time and is a preposition." },
      { type: "mcq", q: "A word that names a person, place or thing (e.g. 'oxytocin') is a:", options: ["Verb", "Noun", "Adjective", "Adverb"], answer: 1, rationale: "Nouns name people, places, things or ideas." },
      { type: "mcq", q: "Which sentence follows the correct Subject-Verb-Object order?", options: ["Gives the medicine the midwife.", "The medicine the midwife gives.", "The midwife gives the medicine.", "Medicine gives the midwife the."], answer: 2, rationale: "SVO order places the subject first, then the verb, then the object." },
      { type: "mcq", q: "Choose the correct possessive: 'The woman fed ___ baby.'", options: ["his", "her", "its", "their"], answer: 1, rationale: "The owner is a woman (the mother), so the possessive adjective is 'her'." },
      { type: "mcq", q: "Which word joins two clauses in 'She pushed but the baby did not descend'?", options: ["She", "pushed", "but", "baby"], answer: 2, rationale: "'But' is a conjunction joining the two clauses." }
      , { type: "fill", q: "The verb 'to be' for 'she' in the present tense is ____.", accept: ["is"], rationale: "Third-person singular 'she' takes 'is'." }
      , { type: "fill", q: "The indefinite article used before a vowel sound, as in '___ examination', is ____.", accept: ["an"], rationale: "'An' is used before words beginning with a vowel sound." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "eit-02-verb-tenses",
    unit: "Unit 1 · Communicative English",
    title: "Verb Tenses and How to Use Them",
    readMinutes: 17,
    summary: "The main English tenses — present simple and continuous, past simple, present perfect and future forms — and how the midwife uses each to describe care, history-taking and the progress of labour.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What a tense shows", p: "Tense shows the time of an action — past, present or future — and whether it is finished, repeated or still going on. Choosing the right tense lets the midwife report a woman's history, describe what is happening now, and explain what will be done. The wrong tense can change clinical meaning, so accuracy matters." },
      { h: "Present simple", p: "The present simple describes habits, routines and general truths: 'A midwife monitors the fetal heart in labour', 'Pregnancy lasts about 40 weeks'. With he/she/it the verb adds -s ('She attends antenatal clinic'). It is used for ward routines, instructions and facts in health education." },
      { h: "Present continuous", p: "The present continuous (am/is/are + verb-ing) describes an action happening now or around now: 'The woman is pushing', 'The baby is crying', 'We are monitoring her blood pressure'. It is the natural tense for describing what is happening during labour and the immediate postnatal period." },
      { h: "Past simple", p: "The past simple describes a finished action at a definite past time: 'She delivered at 4 a.m.', 'The placenta came out completely'. Regular verbs add -ed (delivered, examined); many common verbs are irregular (give→gave, come→came, feel→felt). It is the main tense for recording history and what happened during a birth." },
      { h: "Present perfect", p: "The present perfect (have/has + past participle) links the past to the present — a past action with a present result, or an experience without a stated time: 'The membranes have ruptured', 'She has had three babies (para 3)'. The midwife uses it for obstetric history ('she has never had a caesarean') and for changes that still matter now." },
      { h: "Future forms", list: [
        "'Will' — for decisions, predictions and offers ('I will check you again in two hours').",
        "'Going to' — for plans and intentions or strong evidence ('She is going to deliver soon').",
        "Present continuous for arranged future events ('She is coming for review on Monday')."
      ] },
      { h: "Choosing the right tense in handover", p: "A good handover mixes tenses correctly: past simple for what happened ('she arrived in active labour'), present continuous for the current state ('she is contracting every three minutes'), present perfect for relevant history ('the membranes have ruptured') and future for the plan ('we will reassess in one hour')." },
      { h: "Common tense errors to avoid", list: [
        "Forgetting the -s on third-person singular ('She check' → 'She checks').",
        "Using the present simple for an action happening now ('The baby cries now' → 'The baby is crying').",
        "Mixing past and present in one report without reason.",
        "Using the past simple where the present perfect is needed for a current result ('the membranes ruptured' vs 'have ruptured', when it still matters now)."
      ] }
    ],
    references: REF_EIT,
    examQuestions: [
      "Name the main English tenses and give a midwifery sentence for each.",
      "Differentiate the present simple and the present continuous with examples from labour.",
      "When is the present perfect used? Illustrate with obstetric history.",
      "Explain the difference between 'will' and 'going to' for the future.",
      "Show how a midwife uses different tenses correctly in a labour handover."
    ],
    assessment: [
      { type: "mcq", q: "Which tense best describes an action happening right now: 'The woman ___'?", options: ["pushed", "is pushing", "pushes", "will push"], answer: 1, rationale: "The present continuous (is pushing) describes an action in progress now." },
      { type: "mcq", q: "Choose the correct present simple: 'Pregnancy ___ about 40 weeks.'", options: ["last", "lasts", "is lasting", "lasted"], answer: 1, rationale: "Present simple with the singular subject 'pregnancy' adds -s: 'lasts'." },
      { type: "mcq", q: "Which sentence uses the present perfect correctly?", options: ["The membranes ruptured yesterday at noon.", "The membranes have ruptured.", "The membranes are rupturing.", "The membranes rupture."], answer: 1, rationale: "Present perfect (have ruptured) links a past event to a present result without a stated time." },
      { type: "mcq", q: "Past simple of the irregular verb 'give' is:", options: ["gived", "gaved", "gave", "given"], answer: 2, rationale: "'Give' is irregular; its past simple is 'gave' (the past participle is 'given')." },
      { type: "mcq", q: "Which future form best fits a decision made at the moment of speaking?", options: ["'will' — 'I will check you again'", "'going to'", "present simple", "present perfect"], answer: 0, rationale: "'Will' is used for decisions, offers and predictions made at the time of speaking." },
      { type: "mcq", q: "Choose the correct third-person singular present simple:", options: ["She attend antenatal clinic.", "She attending antenatal clinic.", "She attends antenatal clinic.", "She attended antenatal clinic now."], answer: 2, rationale: "Third-person singular adds -s in the present simple: 'attends'." },
      { type: "mcq", q: "Which tense is correct for a finished action at a definite past time: 'She ___ at 4 a.m.'?", options: ["delivers", "is delivering", "delivered", "has delivered"], answer: 2, rationale: "Past simple (delivered) is used with a definite past time such as '4 a.m.'." },
      { type: "mcq", q: "'She is going to deliver soon' uses 'going to' to express:", options: ["A past habit", "A plan or prediction with present evidence", "A completed action", "A general truth"], answer: 1, rationale: "'Going to' expresses an intention or a prediction based on present evidence." },
      { type: "mcq", q: "Which is a common tense error?", options: ["'She checks the fetal heart hourly.'", "'The baby is crying.'", "'She check the fetal heart.'", "'She delivered at noon.'"], answer: 2, rationale: "Third-person singular needs -s: 'She checks', not 'She check'." },
      { type: "mcq", q: "In a handover, the current state is best given in the:", options: ["Past simple", "Present continuous", "Future simple", "Present perfect"], answer: 1, rationale: "The present continuous describes what is happening now, e.g. 'she is contracting every three minutes'." }
      , { type: "fill", q: "The tense formed with have/has + past participle is the present ____.", accept: ["perfect", "present perfect"], rationale: "Have/has + past participle forms the present perfect." }
      , { type: "fill", q: "The present continuous of 'cry' for the baby is: 'The baby ____ crying.'", accept: ["is"], rationale: "Present continuous uses is/am/are + verb-ing; with 'the baby' it is 'is'." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "eit-03-questions-sentences",
    unit: "Unit 1 · Communicative English",
    title: "Questions, Negatives and Sentence Structure",
    readMinutes: 16,
    summary: "Forming yes/no and wh- questions, negatives, question tags and types of sentences, so the midwife can take a clear history and communicate effectively with the childbearing woman.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why questions matter in midwifery", p: "Most history-taking is done through questions. A midwife who forms questions clearly gets accurate information about the pregnancy, labour and the woman's concerns. Open questions invite the woman to talk; closed questions confirm specific facts. Both are needed for safe care." },
      { h: "Yes/No questions", p: "Yes/No questions are formed by putting an auxiliary (helping) verb before the subject: 'Are you in pain?', 'Do you have a headache?', 'Has the baby moved today?'. With 'to be' the verb itself moves ('Is she bleeding?'); with other verbs we use do/does/did ('Did the waters break?')." },
      { h: "Wh- questions", p: "Wh- questions ask for information using words such as what, when, where, who, why, which and how: 'When did the pains start?', 'How many babies have you had?', 'Where is the pain?'. The wh- word comes first, then the auxiliary, then the subject. 'How' combines for amount and degree ('How often are the contractions?')." },
      { h: "Negatives", p: "Negatives are made with 'not', usually shortened: 'She is not (isn't) bleeding', 'The baby has not (hasn't) passed urine', 'I do not (don't) feel the fetal movements'. With ordinary verbs use do/does/did + not ('She did not deliver the placenta')." },
      { h: "Question tags", p: "A question tag is a short question added to the end of a statement to check or confirm: 'You are feeling the baby move, aren't you?', 'She hasn't bled much, has she?'. A positive statement usually takes a negative tag and a negative statement a positive tag. Tags are common in gentle, reassuring conversation." },
      { h: "Open and closed questions in practice", list: [
        "Open question — invites a full answer: 'How are you feeling today?'",
        "Closed question — invites yes/no or a short fact: 'Have your waters broken?'",
        "Leading question — suggests an answer and should be avoided: 'You don't have any pain, do you?'",
        "Use open questions to explore, then closed questions to confirm details."
      ] },
      { h: "Types of sentence", list: [
        "Declarative — makes a statement ('The cervix is fully dilated.').",
        "Interrogative — asks a question ('Is the cervix fully dilated?').",
        "Imperative — gives a command or instruction ('Push gently now.').",
        "Exclamatory — expresses strong feeling ('What a healthy baby!')."
      ] },
      { h: "Politeness and the midwife", p: "Questions and instructions should be polite and respectful. Use 'could you', 'would you' and 'please' ('Could you lie on your left side, please?'). Modal verbs soften commands and help build trust with the woman and her family." }
    ],
    references: REF_EIT,
    examQuestions: [
      "How are yes/no questions formed in English? Give midwifery examples.",
      "List the wh- question words and write a history-taking question with each.",
      "Explain how negatives are formed with 'to be' and with ordinary verbs.",
      "What is a question tag? Give two examples used in reassuring a woman.",
      "Differentiate open and closed questions and explain when each is useful in midwifery."
    ],
    assessment: [
      { type: "mcq", q: "Which is a correctly formed yes/no question?", options: ["You are in pain?", "Are you in pain?", "In pain you are?", "You in pain are?"], answer: 1, rationale: "Yes/no questions move the auxiliary 'are' before the subject: 'Are you in pain?'" },
      { type: "mcq", q: "Choose the correct wh- question:", options: ["When the pains did start?", "When did the pains start?", "When started the pains?", "The pains when start?"], answer: 1, rationale: "Wh- word + auxiliary + subject + verb: 'When did the pains start?'" },
      { type: "mcq", q: "Which is the correct negative of 'She is bleeding'?", options: ["She not bleeding.", "She no is bleeding.", "She is not bleeding.", "She isn't bleed."], answer: 2, rationale: "With 'to be', the negative adds 'not' after the verb: 'She is not (isn't) bleeding'." },
      { type: "mcq", q: "A question tag for 'The baby is feeding well' is:", options: ["is it?", "isn't it?", "doesn't it?", "are they?"], answer: 1, rationale: "A positive statement with 'is' takes the negative tag 'isn't it?'" },
      { type: "mcq", q: "Which is an OPEN question?", options: ["Have your waters broken?", "Is the baby moving?", "How are you feeling today?", "Did you eat breakfast?"], answer: 2, rationale: "An open question invites a full answer; 'How are you feeling?' cannot be answered yes/no." },
      { type: "mcq", q: "An imperative sentence:", options: ["Asks a question", "Gives a command or instruction", "Expresses strong feeling only", "Makes a plain statement"], answer: 1, rationale: "Imperative sentences give commands or instructions, e.g. 'Push gently now.'" },
      { type: "mcq", q: "Which negative is correct with an ordinary verb?", options: ["She not delivered the placenta.", "She did not deliver the placenta.", "She didn't delivered the placenta.", "She no delivered the placenta."], answer: 1, rationale: "Ordinary verbs use did + not + base verb: 'did not deliver'." },
      { type: "mcq", q: "Which question word asks about frequency, as in '___ are the contractions?'", options: ["Where", "Who", "How often", "Which"], answer: 2, rationale: "'How often' asks about frequency of the contractions." },
      { type: "mcq", q: "Which type of question should usually be AVOIDED in history-taking?", options: ["Open question", "Closed question", "Leading question", "Wh- question"], answer: 2, rationale: "A leading question suggests an answer and may bias the woman's reply." },
      { type: "mcq", q: "The most polite way to ask a woman to change position is:", options: ["Lie on your left side.", "Turn now.", "Could you lie on your left side, please?", "You must lie down."], answer: 2, rationale: "Modal 'could you' with 'please' makes the request polite and respectful." }
      , { type: "fill", q: "To form a yes/no question with an ordinary verb in the present, we use the auxiliary do or ____.", accept: ["does"], rationale: "Do/does (did in the past) form yes/no questions with ordinary verbs." }
      , { type: "fill", q: "A sentence that gives a command, such as 'Push gently', is called an ____ sentence.", accept: ["imperative"], rationale: "Imperative sentences give commands or instructions." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "eit-04-vocabulary-word-building",
    unit: "Unit 1 · Communicative English",
    title: "Vocabulary and Word-Building (Midwifery Terms)",
    readMinutes: 16,
    summary: "Building vocabulary through roots, prefixes and suffixes, synonyms and antonyms, word families, and understanding common midwifery and medical terms so the midwife reads and communicates with confidence.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why vocabulary matters", p: "A wide, accurate vocabulary lets the midwife read evidence-based articles, understand drug labels and partographs, and explain things clearly to women. Many medical words are built from Greek and Latin parts, so learning these parts lets the midwife work out the meaning of new words." },
      { h: "Word parts: root, prefix, suffix", p: "Most medical terms have a root (the core meaning), sometimes a prefix (at the start) and a suffix (at the end). For example, in 'antenatal': 'ante-' (prefix, before) + 'nat' (root, birth) + '-al' (suffix, relating to) = 'before birth'. Breaking a word into parts reveals its meaning." },
      { h: "Common prefixes in midwifery", list: [
        "ante- / pre- — before (antenatal, prenatal).",
        "post- — after (postnatal, postpartum).",
        "neo- — new (neonate = newborn).",
        "primi- — first (primigravida = first pregnancy).",
        "multi- — many (multipara = many births).",
        "dys- — difficult or painful (dystocia = difficult labour).",
        "hyper- / hypo- — high / low (hypertension, hypotension)."
      ] },
      { h: "Common roots and suffixes", list: [
        "nat / part / toc — birth, labour (natal, postpartum, dystocia).",
        "gravid — pregnancy (gravida, multigravida).",
        "uter / hyster — womb (uterine, hysterectomy).",
        "-itis — inflammation (mastitis, endometritis).",
        "-rrhage / -rrhagia — excessive flow (haemorrhage).",
        "-tomy — cutting (episiotomy), -ectomy — removal (hysterectomy)."
      ] },
      { h: "Synonyms and antonyms", p: "A synonym is a word with a similar meaning (begin / start; baby / infant). An antonym is a word with the opposite meaning (alive / dead; full-term / preterm). Knowing synonyms helps the midwife vary language when explaining to women, and antonyms sharpen accurate description (e.g. 'regular' vs 'irregular' contractions)." },
      { h: "Word families", p: "A word family is a group of words from the same root in different parts of speech: 'care' (verb/noun), 'careful' (adjective), 'carefully' (adverb), 'careless' (adjective). Recognising the family helps the midwife use the right form in a sentence ('She cared for the woman carefully')." },
      { h: "Everyday medical/midwifery vocabulary", list: [
        "Antenatal — care before birth; Postnatal — care after birth.",
        "Gravida / Para — number of pregnancies / births.",
        "Contraction, dilatation, effacement, lochia, colostrum.",
        "Foetus / fetus, neonate, term, preterm, post-term.",
        "Haemorrhage, eclampsia, breech, presentation, position."
      ] },
      { h: "Using a dictionary and context", p: "When a new word appears, the midwife can guess its meaning from the context and the word parts, then confirm with a dictionary. Noting the pronunciation, part of speech and an example sentence helps fix the word in memory for future use." }
    ],
    references: REF_EIT,
    examQuestions: [
      "Define root, prefix and suffix and break down the word 'antenatal'.",
      "List five prefixes used in midwifery with their meanings and an example each.",
      "Differentiate synonyms and antonyms with midwifery examples.",
      "What is a word family? Give the family of the word 'care'.",
      "Explain the meaning of five common midwifery terms."
    ],
    assessment: [
      { type: "mcq", q: "The prefix 'post-' in 'postnatal' means:", options: ["before", "after", "during", "without"], answer: 1, rationale: "'Post-' means after; postnatal = after birth." },
      { type: "mcq", q: "In the word 'antenatal', the part 'ante-' is the:", options: ["root", "suffix", "prefix", "ending"], answer: 2, rationale: "'Ante-' is at the start of the word, so it is a prefix (meaning before)." },
      { type: "mcq", q: "A 'primigravida' is a woman who is:", options: ["pregnant for the first time", "pregnant many times", "no longer pregnant", "in her second pregnancy"], answer: 0, rationale: "'Primi-' means first and 'gravid' refers to pregnancy: first pregnancy." },
      { type: "mcq", q: "Which word is an antonym of 'preterm'?", options: ["premature", "early", "full-term", "newborn"], answer: 2, rationale: "Full-term is the opposite of preterm (born before term)." },
      { type: "mcq", q: "The suffix '-itis' means:", options: ["removal", "cutting", "inflammation", "excessive flow"], answer: 2, rationale: "'-itis' means inflammation, as in mastitis (inflammation of the breast)." },
      { type: "mcq", q: "Which is a synonym for 'baby'?", options: ["mother", "infant", "midwife", "placenta"], answer: 1, rationale: "'Infant' has a similar meaning to 'baby' (a synonym)." },
      { type: "mcq", q: "'Dystocia' literally means:", options: ["easy labour", "difficult labour", "no labour", "fast labour"], answer: 1, rationale: "'Dys-' (difficult) + 'toc' (labour) = difficult labour." },
      { type: "mcq", q: "Which word family member is the adverb of 'care'?", options: ["care", "careful", "carefully", "careless"], answer: 2, rationale: "'Carefully' is the adverb form of the word family." },
      { type: "mcq", q: "The suffix '-ectomy' means:", options: ["cutting into", "inflammation", "surgical removal", "looking inside"], answer: 2, rationale: "'-ectomy' means surgical removal, e.g. hysterectomy (removal of the uterus)." },
      { type: "mcq", q: "'Neonate' refers to a:", options: ["pregnant woman", "newborn baby", "placenta", "midwife"], answer: 1, rationale: "'Neo-' (new) + 'nate' (birth): a newborn baby." }
      , { type: "fill", q: "The prefix meaning 'before', as in 'antenatal', is ____.", accept: ["ante", "ante-"], rationale: "'Ante-' means before." }
      , { type: "fill", q: "A word with the opposite meaning to another is called an ____.", accept: ["antonym"], rationale: "An antonym has the opposite meaning; a synonym has a similar meaning." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "eit-05-reading-writing",
    unit: "Unit 1 · Communicative English",
    title: "Reading and Writing Skills",
    readMinutes: 17,
    summary: "Reading techniques (skimming, scanning, comprehension) for health articles, and writing skills — paragraphs, formal applications, reports, references and reflective writing — applied to midwifery.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Reading skills for the midwife", p: "Midwives must read textbooks, guidelines, drug inserts and research abstracts. Good reading is active: the reader sets a purpose, looks for main ideas, checks understanding and notes key points. Different texts need different reading techniques." },
      { h: "Skimming, scanning and intensive reading", list: [
        "Skimming — reading quickly to get the general idea (e.g. the gist of an article).",
        "Scanning — searching quickly for a specific fact (e.g. a drug dose in a leaflet).",
        "Intensive reading — reading slowly and carefully for full understanding (e.g. a clinical guideline)."
      ] },
      { h: "Reading comprehension", p: "Comprehension means understanding what is read. The midwife identifies the main idea and supporting details, works out unknown words from context, and distinguishes fact from opinion. Summarising an article in her own words shows true understanding — a skill used in evidence-based midwifery." },
      { h: "Writing a paragraph", p: "A good paragraph has one main idea expressed in a topic sentence, followed by supporting sentences that explain or give examples, and a concluding sentence. Sentences are linked with connectors (and, but, because, therefore). A 100-word paragraph on 'the benefits of breastfeeding' should be clear, ordered and to the point." },
      { h: "Formal application and letter writing", p: "A formal application (for leave, a post or a course) has a clear layout: sender's address and date, recipient, salutation ('Dear Madam'), a subject line, the body (purpose, details, request), a polite closing ('Yours faithfully') and a signature. The language is polite, brief and formal — no slang or contractions." },
      { h: "Report writing", p: "A report gives factual information clearly and objectively. A midwifery report (e.g. on a birth or an incident) has a title, an introduction, the facts in logical order (what happened, when, what was done), and a conclusion or recommendation. It is written in the third person and past tense, with accurate times and observations." },
      { h: "Writing references", p: "References give credit to the sources used and let readers find them. A simple reference includes the author, year, title and publisher (or journal). References must be consistent and accurate; copying others' words without crediting them is plagiarism, which is not acceptable in academic or professional writing." },
      { h: "Reflective writing", p: "Reflective writing describes an experience, the midwife's feelings and what was learned, and how practice will change. A common pattern is: What happened? → How did I feel? → What went well/badly? → What will I do differently? Reflection helps the midwife learn from each birth and improve care." }
    ],
    references: REF_EIT,
    examQuestions: [
      "Differentiate skimming, scanning and intensive reading with examples.",
      "What makes a good paragraph? Describe its parts.",
      "Outline the layout of a formal application letter.",
      "How is a midwifery report structured? Mention tense and person.",
      "What is reflective writing and why is it useful for the midwife?"
    ],
    assessment: [
      { type: "mcq", q: "Reading quickly to find a specific fact such as a drug dose is called:", options: ["skimming", "scanning", "intensive reading", "reflection"], answer: 1, rationale: "Scanning is searching quickly for a specific piece of information." },
      { type: "mcq", q: "Reading quickly to get the general idea of a text is called:", options: ["scanning", "skimming", "proofreading", "summarising"], answer: 1, rationale: "Skimming gives the overall gist of a text." },
      { type: "mcq", q: "The sentence that states the main idea of a paragraph is the:", options: ["concluding sentence", "supporting sentence", "topic sentence", "linking word"], answer: 2, rationale: "The topic sentence expresses the paragraph's main idea." },
      { type: "mcq", q: "A formal application usually ends with:", options: ["Bye", "See you", "Yours faithfully", "Thanks a lot"], answer: 2, rationale: "'Yours faithfully' is a correct formal closing (with 'Dear Sir/Madam')." },
      { type: "mcq", q: "A midwifery report of a birth is usually written in the:", options: ["first person, future tense", "third person, past tense", "second person, present tense", "first person, present tense"], answer: 1, rationale: "Reports are objective: third person and past tense for events that happened." },
      { type: "mcq", q: "Copying another author's words without crediting them is called:", options: ["referencing", "summarising", "plagiarism", "paraphrasing"], answer: 2, rationale: "Plagiarism is using others' work without acknowledgement and is unacceptable." },
      { type: "mcq", q: "Reading a clinical guideline slowly and carefully for full understanding is:", options: ["skimming", "scanning", "intensive reading", "skipping"], answer: 2, rationale: "Intensive reading is slow, careful reading for complete understanding." },
      { type: "mcq", q: "Which element is essential in a reference?", options: ["The reader's mood", "The author, year, title and source", "The colour of the book", "The price"], answer: 1, rationale: "A reference identifies author, year, title and source so it can be found." },
      { type: "mcq", q: "Reflective writing mainly helps the midwife to:", options: ["increase salary", "learn from experience and improve practice", "avoid documentation", "shorten reports"], answer: 1, rationale: "Reflection turns experience into learning that improves future care." },
      { type: "mcq", q: "The first part of a good paragraph that introduces the main idea is followed by:", options: ["a heading", "supporting sentences", "a reference list", "a salutation"], answer: 1, rationale: "Supporting sentences explain or give examples for the topic sentence." }
      , { type: "fill", q: "Searching a text quickly for one specific fact is called ____.", accept: ["scanning"], rationale: "Scanning locates a specific detail quickly." }
      , { type: "fill", q: "Using another writer's words without crediting the source is called ____.", accept: ["plagiarism"], rationale: "Plagiarism is presenting others' work as one's own." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "eit-06-speaking-listening",
    unit: "Unit 1 · Communicative English",
    title: "Speaking, Listening and Pronunciation",
    readMinutes: 16,
    summary: "Spoken English skills — pronunciation, word stress and intonation, active listening, conversation and presentations — so the midwife can communicate clearly and warmly with women and colleagues.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why speaking and listening matter", p: "Much midwifery care is spoken: greeting a woman, taking a history, giving instructions in labour, counselling and handover. Good speaking is clear and kind; good listening makes the woman feel heard and gives the midwife accurate information. Together they build trust and safety." },
      { h: "Sounds of English (phonemes)", p: "English has individual speech sounds called phonemes — vowel sounds and consonant sounds — which do not always match the spelling. The midwife should pronounce key words clearly (for example 'placenta', 'haemorrhage', 'oedema') so that instructions and reports are understood without confusion." },
      { h: "Word stress and sentence stress", p: "In English, one syllable in a word is said more strongly — this is word stress (for example, preg-NANT, con-TRAC-tion). Stress can change meaning and must be correct to be understood. In a sentence, the important content words are stressed while small grammar words are weak; this rhythm helps listeners follow." },
      { h: "Intonation", p: "Intonation is the rise and fall of the voice. A falling tone usually ends statements and wh- questions; a rising tone often marks yes/no questions and shows the speaker wants a reply. A warm, gentle intonation reassures a frightened woman; a flat or harsh tone can frighten her." },
      { h: "Active listening skills", list: [
        "Give full attention and good eye contact.",
        "Do not interrupt; let the woman finish.",
        "Use small signs of attention ('I see', nodding).",
        "Reflect and check ('So the pain started this morning?').",
        "Listen for feelings as well as facts."
      ] },
      { h: "Holding a conversation", p: "A conversation has greetings, turn-taking, asking and answering, and a polite ending. The midwife opens warmly ('Good morning, how are you feeling?'), takes turns without dominating, and closes kindly ('I will check you again soon'). Paralinguistic features — tone, pace, facial expression and gesture — carry much of the meaning." },
      { h: "Giving a short presentation", p: "A clear presentation has an introduction (topic and purpose), a body (main points in order) and a conclusion (summary). The speaker uses simple sentences, makes eye contact, speaks at a steady pace, and invites questions. Practice and preparation reduce nervousness." },
      { h: "Communicating across language and culture", p: "When the woman speaks a different first language or dialect, the midwife speaks slowly and clearly, avoids jargon, uses simple words and pictures, checks understanding, and uses a trained interpreter when needed rather than relying on a family member for sensitive information." }
    ],
    references: REF_EIT,
    examQuestions: [
      "What are phonemes? Why is correct pronunciation important for the midwife?",
      "Explain word stress and intonation with examples.",
      "List five active listening skills used during history-taking.",
      "Describe the structure of a short English presentation.",
      "How should a midwife communicate with a woman who speaks a different language?"
    ],
    assessment: [
      { type: "mcq", q: "The individual speech sounds of a language are called:", options: ["syllables", "phonemes", "letters", "accents"], answer: 1, rationale: "Phonemes are the individual sounds of speech, which may differ from spelling." },
      { type: "mcq", q: "Saying one syllable of a word more strongly than the others is called:", options: ["intonation", "word stress", "pausing", "whispering"], answer: 1, rationale: "Word stress is the emphasis on a particular syllable." },
      { type: "mcq", q: "A rising tone of voice most often marks a:", options: ["statement", "command", "yes/no question", "full stop"], answer: 2, rationale: "Rising intonation commonly signals a yes/no question." },
      { type: "mcq", q: "Which is an active listening skill?", options: ["Interrupting to save time", "Looking at your notes only", "Reflecting back what the woman said", "Finishing her sentences"], answer: 2, rationale: "Reflecting and checking shows the woman she has been heard and confirms accuracy." },
      { type: "mcq", q: "The rise and fall of the voice in speech is called:", options: ["stress", "intonation", "spelling", "grammar"], answer: 1, rationale: "Intonation is the melody or pitch movement of speech." },
      { type: "mcq", q: "A short presentation should be organised as:", options: ["conclusion, body, introduction", "introduction, body, conclusion", "body only", "questions, then topic"], answer: 1, rationale: "An effective presentation moves from introduction to body to conclusion." },
      { type: "mcq", q: "Tone of voice, facial expression and gesture are known as:", options: ["phonemes", "paralinguistic features", "syllables", "antonyms"], answer: 1, rationale: "Paralinguistic features accompany words and carry much of the meaning." },
      { type: "mcq", q: "When a woman speaks another language, the midwife should:", options: ["speak louder and faster", "use medical jargon", "speak slowly, use simple words and check understanding", "ignore her concerns"], answer: 2, rationale: "Clear, simple language and checking understanding (with an interpreter if needed) is safest." },
      { type: "mcq", q: "Good eye contact and not interrupting are part of:", options: ["word building", "active listening", "report writing", "scanning"], answer: 1, rationale: "These behaviours are key active listening skills." },
      { type: "mcq", q: "A falling tone usually ends a:", options: ["yes/no question", "statement", "song", "tag question expecting confirmation"], answer: 1, rationale: "A falling tone typically ends statements and wh- questions." }
      , { type: "fill", q: "The individual sounds of a spoken language are called ____.", accept: ["phonemes", "phoneme"], rationale: "Phonemes are the smallest units of speech sound." }
      , { type: "fill", q: "The rise and fall of the voice in speaking is called ____.", accept: ["intonation"], rationale: "Intonation is the pitch pattern of speech." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "eit-07-professional-communication",
    unit: "Unit 1 · Communicative English",
    title: "Professional Communication in Midwifery",
    readMinutes: 17,
    summary: "Applying English to professional midwifery communication: clinical handover, accurate documentation, patient education and counselling, breaking sensitive news, and communication within the health team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Communication as a core midwifery skill", p: "Safe, woman-centred care depends on clear communication. The midwife communicates with the woman and her family, with colleagues during handover, and through written records. Good professional English here is accurate, respectful, timely and confidential." },
      { h: "Clinical handover", p: "Handover passes responsibility for care safely from one midwife to another. A structured format such as SBAR keeps it clear: Situation (who and what), Background (relevant history), Assessment (current findings) and Recommendation (the plan). For example: 'This is Mrs Rahman, para 1, in active labour; membranes ruptured 2 hours ago; cervix 6 cm, fetal heart normal; please reassess in one hour.'", figure: {
        caption: "SBAR — a structured handover tool: Situation, Background, Assessment, Recommendation.",
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SBAR handover structure: Situation, Background, Assessment, Recommendation."><defs><marker id="eitArr1" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="30" width="520" height="40" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="35" y="55" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">S — Situation</text><text x="180" y="55" font-family="sans-serif" font-size="12" fill="#7C2D12">who the woman is and what is happening now</text><rect x="20" y="80" width="520" height="40" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="35" y="105" font-family="sans-serif" font-size="14" font-weight="700" fill="#BE185D">B — Background</text><text x="180" y="105" font-family="sans-serif" font-size="12" fill="#7C2D12">relevant obstetric and medical history</text><rect x="20" y="130" width="520" height="40" rx="8" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="35" y="155" font-family="sans-serif" font-size="14" font-weight="700" fill="#831843">A — Assessment</text><text x="180" y="155" font-family="sans-serif" font-size="12" fill="#7C2D12">current findings: cervix, fetal heart, vitals</text><rect x="20" y="180" width="520" height="40" rx="8" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="35" y="205" font-family="sans-serif" font-size="14" font-weight="700" fill="#BE185D">R — Recommendation</text><text x="180" y="205" font-family="sans-serif" font-size="12" fill="#7C2D12">the plan and what to do next</text></svg>'
      } },
      { h: "Accurate documentation", p: "Records are legal documents and a tool for safe care. Good midwifery notes are accurate, legible, dated and timed, written in ink, signed, and free of unexplained abbreviations. They record facts and observations objectively ('blood loss approximately 300 mL') rather than opinions, and are never altered to hide an error — corrections are made openly with a single line and a signature." },
      { h: "Patient education and counselling", p: "The midwife teaches women about pregnancy, nutrition, danger signs, breastfeeding and family planning. Effective education uses simple language, checks the woman's existing knowledge, gives small amounts at a time, uses pictures, and asks the woman to repeat key points (the 'teach-back' method) to confirm understanding." },
      { h: "Breaking sensitive or bad news", p: "Some conversations are difficult — a stillbirth, a complication or a difficult diagnosis. The midwife chooses a private place, sits at the same level, speaks gently and honestly, allows silence and tears, answers questions truthfully, and offers continued support. Warmth and presence matter as much as the words." },
      { h: "Communication within the health team", p: "Clear team communication prevents errors. The midwife reports concerns promptly, uses agreed tools (SBAR, the partograph), closes the loop by confirming that messages are received and acted on, and respects each member's role. Speaking up about a safety concern is a professional duty." },
      { h: "Confidentiality and respectful language", p: "Information about a woman is confidential and shared only with those involved in her care. The midwife uses respectful, non-judgemental language, addresses the woman by her preferred name, obtains consent before procedures, and protects dignity and privacy at all times." },
      { h: "Telephone and referral communication", p: "When telephoning for help or referring a woman, the midwife identifies herself and the woman, states the problem clearly using SBAR, gives accurate observations, writes down the advice received, and documents the time and name of the person contacted. Clear referral language can be life-saving in an obstetric emergency." }
    ],
    references: REF_EIT,
    examQuestions: [
      "What is SBAR? Use it to hand over a woman in active labour.",
      "List the features of good midwifery documentation.",
      "Describe the 'teach-back' method in patient education.",
      "How should a midwife break sensitive news such as a stillbirth?",
      "Explain the principles of confidentiality and respectful language in midwifery."
    ],
    assessment: [
      { type: "mcq", q: "In the SBAR handover tool, 'A' stands for:", options: ["Assessment", "Action", "Advice", "Admission"], answer: 0, rationale: "SBAR = Situation, Background, Assessment, Recommendation." },
      { type: "mcq", q: "Good midwifery records should be:", options: ["written in pencil and unsigned", "based on opinions", "accurate, legible, dated, timed and signed", "altered to hide mistakes"], answer: 2, rationale: "Records must be accurate, legible, dated, timed and signed as legal documents." },
      { type: "mcq", q: "The 'teach-back' method means:", options: ["the midwife reads from a book", "the woman repeats key points to confirm understanding", "teaching only the family", "giving a long lecture"], answer: 1, rationale: "Teach-back asks the woman to restate information to confirm she has understood." },
      { type: "mcq", q: "When a documentation error is made, the midwife should:", options: ["erase it completely", "use correction fluid", "cross it out with a single line, then sign and correct openly", "tear out the page"], answer: 2, rationale: "Errors are corrected openly with a single line, the correction, a date and a signature." },
      { type: "mcq", q: "When breaking bad news such as a stillbirth, the midwife should:", options: ["tell the woman in a busy corridor", "speak honestly and gently in a private place", "avoid the topic", "rush the conversation"], answer: 1, rationale: "Sensitive news needs privacy, honesty, gentleness and time." },
      { type: "mcq", q: "Confidentiality means information about a woman is shared:", options: ["with everyone on the ward", "with her neighbours", "only with those involved in her care", "on social media"], answer: 2, rationale: "Confidential information is shared only with those involved in her care." },
      { type: "mcq", q: "Which is an example of objective documentation?", options: ["The woman seemed upset and difficult.", "Blood loss approximately 300 mL.", "I think she is fine.", "She looked a bit pale, probably nothing."], answer: 1, rationale: "An objective, measurable observation (300 mL) is preferred over opinion." },
      { type: "mcq", q: "'Closing the loop' in team communication means:", options: ["ending the shift", "confirming that a message was received and acted on", "closing the file", "leaving the ward"], answer: 1, rationale: "Closing the loop confirms the message was received and the action taken." },
      { type: "mcq", q: "When telephoning for help in an emergency, the midwife should first:", options: ["hang up if nervous", "wait for the caller to guess", "identify herself and the woman and state the problem clearly", "give only her opinion"], answer: 2, rationale: "Clear identification and a structured statement of the problem (SBAR) is essential." },
      { type: "mcq", q: "Respectful communication with a woman includes:", options: ["using judgemental words", "ignoring her preferred name", "obtaining consent and protecting dignity", "discussing her case loudly in public"], answer: 2, rationale: "Respect means consent, privacy, dignity and non-judgemental language." }
      , { type: "fill", q: "The structured handover tool with the parts Situation, Background, Assessment and Recommendation is called ____.", accept: ["SBAR"], rationale: "SBAR structures clinical handover for clarity and safety." }
      , { type: "fill", q: "Asking the woman to repeat key information to confirm she understood is the ____-back method.", accept: ["teach", "teach-back"], rationale: "The teach-back method checks understanding." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "eit-08-computer-fundamentals",
    unit: "Unit 2 · Information & Communication Technology",
    title: "Computer Fundamentals and Hardware",
    readMinutes: 17,
    summary: "What a computer is, the information processing cycle, characteristics, hardware components (input, CPU, memory, output, storage), units of data, and the role of computers in the midwifery profession.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a computer?", p: "A computer is an electronic device that accepts data (input), processes it according to stored instructions (a program), produces results (output), and can store them for later use. It does not think for itself — it follows instructions exactly and very quickly. The midwife uses computers for records, the partograph, education and communication." },
      { h: "Data, information and the processing cycle", p: "Data are raw facts (a list of newborn weights); information is processed, meaningful data (the average birth weight, or babies with low birth weight). Every computer works through Input → Processing → Output, with Storage supporting the cycle.", figure: {
        caption: "The information processing cycle: input, processing, output, with storage supporting the cycle.",
        svg: '<svg viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Information processing cycle: input, processing, output, with storage."><defs><marker id="eitArr2" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#831843"/></marker></defs><rect x="20" y="40" width="140" height="60" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="90" y="66" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#831843">INPUT</text><text x="90" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">data entered</text><rect x="210" y="40" width="140" height="60" rx="10" fill="#FDF2F8" stroke="#BE185D" stroke-width="2"/><text x="280" y="66" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#BE185D">PROCESSING</text><text x="280" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#BE185D">CPU works on data</text><rect x="400" y="40" width="140" height="60" rx="10" fill="#FCE7F3" stroke="#831843" stroke-width="2"/><text x="470" y="66" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#831843">OUTPUT</text><text x="470" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#831843">results shown</text><line x1="160" y1="70" x2="206" y2="70" stroke="#831843" stroke-width="2.5" marker-end="url(#eitArr2)"/><line x1="350" y1="70" x2="396" y2="70" stroke="#831843" stroke-width="2.5" marker-end="url(#eitArr2)"/><rect x="210" y="150" width="140" height="55" rx="10" fill="#FCE7F3" stroke="#7C2D12" stroke-width="2"/><text x="280" y="176" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#7C2D12">STORAGE</text><text x="280" y="195" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">data &amp; results saved</text><line x1="280" y1="100" x2="280" y2="146" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#eitArr2)"/></svg>'
      } },
      { h: "Characteristics of a computer", list: [
        "Speed — performs millions of operations per second.",
        "Accuracy — correct results if data and instructions are correct (garbage in, garbage out).",
        "Storage — stores and recalls large amounts of data.",
        "Automation — works on its own once given a program.",
        "Diligence — repeats tasks without tiredness or loss of accuracy.",
        "Versatility — performs many different kinds of task."
      ] },
      { h: "Hardware: the physical parts", p: "Hardware means the physical parts of a computer — everything you can see and touch. They form four groups: input devices, the processor (CPU), memory, and output devices, with secondary storage holding data permanently. Software is the programs that tell the hardware what to do." },
      { h: "Input, processor and output devices", list: [
        "Input — keyboard, mouse, touchscreen, scanner, microphone, webcam.",
        "CPU — the 'brain'; the Control Unit directs operations and the ALU does calculations; speed in gigahertz (GHz).",
        "Output — monitor (soft copy), printer (hard copy), speakers, projector."
      ] },
      { h: "Memory: RAM and ROM", list: [
        "RAM (Random Access Memory) — temporary working memory; volatile (lost when power is off).",
        "ROM (Read Only Memory) — permanent start-up memory; non-volatile (kept when power is off)."
      ] },
      { h: "Secondary storage and units of data", p: "Secondary storage keeps data when the computer is off: hard disk (HDD), solid-state drive (SSD), USB flash drive, memory card, CD/DVD and cloud storage. Data is measured in bits and bytes: 8 bits = 1 byte (one character); then Kilobyte (KB) → Megabyte (MB) → Gigabyte (GB) → Terabyte (TB), each about 1,000 times the one before." },
      { h: "Computers in the midwifery profession", list: [
        "Electronic records of antenatal, labour and postnatal care.",
        "Electronic partograph and monitoring of labour.",
        "Apps and online resources such as the Safe Delivery App.",
        "Continuing education, e-learning and access to journals.",
        "Reporting and statistics (births, immunisations, referrals)."
      ] }
    ],
    references: REF_EIT,
    examQuestions: [
      "Define a computer and explain the information processing cycle with a diagram.",
      "List and explain four characteristics of a computer.",
      "Differentiate RAM and ROM.",
      "Name four input devices and four output devices used with a computer.",
      "Describe five uses of computers in the midwifery profession."
    ],
    assessment: [
      { type: "mcq", q: "A computer processes raw ____ into meaningful ____.", options: ["information; data", "data; information", "hardware; software", "output; input"], answer: 1, rationale: "A computer turns raw data into meaningful information." },
      { type: "mcq", q: "The correct order of the information processing cycle is:", options: ["Output → Process → Input", "Input → Process → Output", "Process → Output → Input", "Input → Output → Process"], answer: 1, rationale: "Data is input, then processed, then output, with storage supporting the cycle." },
      { type: "mcq", q: "Which is NOT a characteristic of a computer?", options: ["Speed", "Emotion", "Accuracy", "Diligence"], answer: 1, rationale: "Computers have no emotion; they only follow instructions." },
      { type: "mcq", q: "The 'brain' of the computer that carries out instructions is the:", options: ["monitor", "keyboard", "CPU", "printer"], answer: 2, rationale: "The Central Processing Unit (CPU) executes instructions and calculations." },
      { type: "mcq", q: "Which memory is volatile (lost when power is switched off)?", options: ["ROM", "RAM", "Hard disk", "USB drive"], answer: 1, rationale: "RAM is temporary working memory and is volatile." },
      { type: "mcq", q: "A printer produces:", options: ["soft copy", "hard copy", "sound", "input"], answer: 1, rationale: "A printer gives output on paper (hard copy); a monitor gives soft copy." },
      { type: "mcq", q: "Eight bits make one:", options: ["kilobyte", "byte", "gigabyte", "megabyte"], answer: 1, rationale: "8 bits = 1 byte, which stores one character." },
      { type: "mcq", q: "Which is a use of computers in midwifery?", options: ["lifting a woman", "electronic partograph and records", "cleaning the labour room", "cooking meals"], answer: 1, rationale: "An electronic partograph and electronic records are core midwifery uses." },
      { type: "mcq", q: "Which device is an INPUT device?", options: ["monitor", "printer", "scanner", "speaker"], answer: 2, rationale: "A scanner inputs documents; monitors, printers and speakers are output devices." },
      { type: "mcq", q: "Which storage keeps data permanently when the computer is off?", options: ["RAM", "Cache", "Hard disk / SSD", "The CPU registers"], answer: 2, rationale: "Secondary storage such as a hard disk or SSD is non-volatile and permanent." }
      , { type: "fill", q: "The physical parts of a computer that you can touch are called ____.", accept: ["hardware"], rationale: "Hardware is the physical equipment; software is the programs." }
      , { type: "fill", q: "The temporary, volatile working memory of a computer is ____.", accept: ["RAM", "random access memory"], rationale: "RAM holds data in current use and is lost when power is off." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "eit-09-os-file-management",
    unit: "Unit 2 · Information & Communication Technology",
    title: "Operating Systems and File Management",
    readMinutes: 16,
    summary: "What an operating system does, types of software, the Windows desktop, working with files and folders, file naming and organisation, and basic maintenance and security for the midwife's computer.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is software?", p: "Software is the set of programs that tell the hardware what to do. There are two main kinds: system software (which runs the computer) and application software (which does a specific task, such as Word or a partograph app). Without software, the hardware cannot do anything useful." },
      { h: "The operating system (OS)", p: "The operating system is the most important system software. It starts the computer, manages the hardware, memory and files, runs the application programs, and provides the screen the user works with. Common operating systems include Microsoft Windows, macOS, Linux and the mobile systems Android and iOS." },
      { h: "Functions of an operating system", list: [
        "Starts (boots) the computer.",
        "Manages memory and the processor.",
        "Manages files and storage (saving, opening, deleting).",
        "Controls input and output devices.",
        "Provides the user interface (icons, windows, menus).",
        "Manages security and user accounts."
      ] },
      { h: "The Windows desktop", p: "After start-up, Windows shows the desktop with icons (small pictures for programs and files), the Start menu (to open programs), the taskbar (showing open windows), and windows that can be minimised, maximised or closed. The mouse points and clicks; double-clicking opens an item." },
      { h: "Files and folders", p: "A file is a named collection of data (a document, photo or spreadsheet). A folder (directory) is a container that holds files and other folders, used to organise work — for example a folder 'Antenatal Records' containing one file per woman. Folders can be nested to keep work tidy." },
      { h: "File names and types", p: "A file name has two parts: a name and an extension showing the type — for example report.docx (Word), data.xlsx (Excel), talk.pptx (PowerPoint), scan.pdf, photo.jpg. The midwife should give clear, meaningful file names (e.g. 'Rahman_antenatal_2026.docx') so files are easy to find later." },
      { h: "Basic file operations", list: [
        "Create / Save — make a new file and store it (Save and Save As).",
        "Open — retrieve a saved file.",
        "Copy / Move — duplicate or relocate a file.",
        "Rename — give a clearer name.",
        "Delete — remove to the Recycle Bin (can be restored).",
        "Search — find a file by name."
      ] },
      { h: "Maintenance and security", list: [
        "Back up important files (copy to USB or cloud) regularly.",
        "Use strong passwords and lock the screen when away.",
        "Install and update antivirus software; avoid unknown attachments.",
        "Keep patient files confidential and access them only when needed.",
        "Shut down the computer properly to avoid losing data."
      ] }
    ],
    references: REF_EIT,
    examQuestions: [
      "What is an operating system? List five of its functions.",
      "Differentiate system software and application software.",
      "Explain the difference between a file and a folder with a midwifery example.",
      "What is a file extension? Give the extensions for Word, Excel and PowerPoint files.",
      "List five ways to keep a midwife's computer and patient files secure."
    ],
    assessment: [
      { type: "mcq", q: "The most important system software that manages the whole computer is the:", options: ["word processor", "operating system", "spreadsheet", "antivirus"], answer: 1, rationale: "The operating system manages hardware, memory, files and the user interface." },
      { type: "mcq", q: "Which is an example of an operating system?", options: ["Microsoft Word", "Microsoft Windows", "Google search", "A printer"], answer: 1, rationale: "Microsoft Windows is an operating system; Word is application software." },
      { type: "mcq", q: "A container that holds files and other folders is a:", options: ["file", "folder", "byte", "cursor"], answer: 1, rationale: "A folder (directory) organises and holds files and sub-folders." },
      { type: "mcq", q: "The file extension '.docx' indicates a:", options: ["spreadsheet", "presentation", "Word document", "photo"], answer: 2, rationale: "'.docx' is a Microsoft Word document; '.xlsx' is Excel and '.pptx' is PowerPoint." },
      { type: "mcq", q: "Which is application software?", options: ["Windows", "Linux", "Microsoft Excel", "Android"], answer: 2, rationale: "Excel is application software; the others are operating systems." },
      { type: "mcq", q: "Deleting a file in Windows usually sends it to the:", options: ["Start menu", "Recycle Bin", "taskbar", "clipboard"], answer: 1, rationale: "Deleted files go to the Recycle Bin and can be restored unless emptied." },
      { type: "mcq", q: "A good practice to avoid losing important files is to:", options: ["never save", "keep only one copy", "back them up regularly", "delete them weekly"], answer: 2, rationale: "Regular backups (USB or cloud) protect against data loss." },
      { type: "mcq", q: "The extension for a PowerPoint presentation is:", options: [".xlsx", ".pptx", ".pdf", ".jpg"], answer: 1, rationale: "'.pptx' is the PowerPoint file extension." },
      { type: "mcq", q: "Which is a function of the operating system?", options: ["taking blood pressure", "managing files and memory", "feeding the baby", "writing a reference"], answer: 1, rationale: "The OS manages files, memory, devices and the user interface." },
      { type: "mcq", q: "To keep patient files confidential, the midwife should:", options: ["share the password with everyone", "leave the screen unlocked", "use strong passwords and access files only when needed", "post records online"], answer: 2, rationale: "Strong passwords and need-to-know access protect confidentiality." }
      , { type: "fill", q: "The system software that starts the computer and manages files and devices is the ____ system.", accept: ["operating"], rationale: "The operating system manages the computer's resources." }
      , { type: "fill", q: "A named collection of data such as a document or photo is called a ____.", accept: ["file"], rationale: "A file is a stored, named collection of data; a folder holds files." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "eit-10-ms-word",
    unit: "Unit 2 · Information & Communication Technology",
    title: "Word Processing with MS Word",
    readMinutes: 16,
    summary: "Using Microsoft Word to create, edit, format and print documents — entering and editing text, formatting fonts and paragraphs, lists, tables, spell-check and saving — applied to midwifery letters and reports.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is word processing?", p: "Word processing means using a computer program to create, edit, format, save and print text documents. Microsoft Word is the most widely used word processor. The midwife uses it for referral letters, reports, health education leaflets, applications and assignments." },
      { h: "The Word screen", p: "Word shows a Ribbon at the top with tabs (Home, Insert, Layout, etc.) holding the commands, a blank document area, a cursor showing where text will appear, and scroll bars. The Quick Access Toolbar and the File (Backstage) menu hold Save, Open, Print and similar commands." },
      { h: "Entering and editing text", list: [
        "Type to enter text; the cursor shows the position.",
        "Press Enter to start a new paragraph.",
        "Use Backspace and Delete to remove text.",
        "Select text by dragging or with Shift + arrow keys.",
        "Cut (Ctrl+X), Copy (Ctrl+C) and Paste (Ctrl+V) move or duplicate text.",
        "Undo (Ctrl+Z) reverses the last action."
      ] },
      { h: "Formatting characters (fonts)", p: "Character formatting changes how letters look: the font (e.g. Times New Roman, Arial), the size (in points), and styles such as bold (Ctrl+B), italic (Ctrl+I) and underline (Ctrl+U), as well as colour. Headings in a midwifery report can be made bold and larger to stand out." },
      { h: "Formatting paragraphs", list: [
        "Alignment — left, centre, right or justify.",
        "Line spacing — single, 1.5 or double.",
        "Indentation — moving a paragraph in from the margin.",
        "Bulleted and numbered lists — for danger signs or steps of a procedure."
      ] },
      { h: "Tables", p: "A table arranges information in rows and columns — useful for an antenatal schedule or a list of mothers with their delivery dates. Tables can be inserted from the Insert tab, and cells, rows and columns can be added, deleted, merged and formatted." },
      { h: "Checking and printing", p: "Word's spelling and grammar check underlines possible errors (red for spelling, blue/green for grammar); the midwife should still read carefully, as the checker does not catch every mistake. Print Preview shows how the page will look before printing, and page setup controls margins, orientation and paper size." },
      { h: "Saving documents", p: "Save early and often (Ctrl+S). 'Save' updates the existing file; 'Save As' creates a new copy or saves to a new place with a clear name. Word documents are saved with the .docx extension. Keeping a backup copy protects against loss." }
    ],
    references: REF_EIT,
    examQuestions: [
      "What is word processing? List four uses of MS Word for the midwife.",
      "Describe how to enter, select and edit text in Word.",
      "Differentiate character formatting and paragraph formatting with examples.",
      "How would you insert a table to show an antenatal schedule?",
      "Explain the difference between 'Save' and 'Save As'."
    ],
    assessment: [
      { type: "mcq", q: "The most widely used word-processing program is:", options: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Windows"], answer: 1, rationale: "Microsoft Word is the standard word-processing application." },
      { type: "mcq", q: "The keyboard shortcut to make text bold is:", options: ["Ctrl+B", "Ctrl+S", "Ctrl+P", "Ctrl+V"], answer: 0, rationale: "Ctrl+B applies bold; Ctrl+I is italic and Ctrl+U is underline." },
      { type: "mcq", q: "Which is an example of paragraph formatting?", options: ["bold", "font colour", "line spacing", "italic"], answer: 2, rationale: "Line spacing and alignment are paragraph formatting; bold and italic are character formatting." },
      { type: "mcq", q: "To copy selected text you press:", options: ["Ctrl+X", "Ctrl+C", "Ctrl+Z", "Ctrl+P"], answer: 1, rationale: "Ctrl+C copies; Ctrl+X cuts and Ctrl+V pastes." },
      { type: "mcq", q: "'Save As' is used when you want to:", options: ["close the program", "update the same file only", "save a new copy or save to a new location", "delete the file"], answer: 2, rationale: "'Save As' creates a new copy or saves to a different place/name." },
      { type: "mcq", q: "A Word document is saved with the extension:", options: [".xlsx", ".docx", ".pptx", ".jpg"], answer: 1, rationale: "'.docx' is the Word document format." },
      { type: "mcq", q: "Information arranged in rows and columns in Word is a:", options: ["list", "table", "header", "footer"], answer: 1, rationale: "A table organises data into rows and columns." },
      { type: "mcq", q: "The command that reverses your last action is:", options: ["Redo", "Undo (Ctrl+Z)", "Paste", "Print"], answer: 1, rationale: "Undo (Ctrl+Z) reverses the most recent action." },
      { type: "mcq", q: "A red wavy underline in Word usually shows a possible:", options: ["grammar error", "spelling error", "printing error", "saving error"], answer: 1, rationale: "Red wavy underlines flag possible spelling errors." },
      { type: "mcq", q: "To list danger signs of pregnancy clearly, the midwife would best use:", options: ["a bulleted or numbered list", "one long sentence", "a coloured background only", "a footer"], answer: 0, rationale: "Bulleted or numbered lists present items clearly and separately." }
      , { type: "fill", q: "The keyboard shortcut to save a document in Word is Ctrl+____.", accept: ["S", "s"], rationale: "Ctrl+S saves the current document." }
      , { type: "fill", q: "The strip of tabs and commands across the top of the Word window is called the ____.", accept: ["ribbon"], rationale: "The Ribbon holds Word's commands organised in tabs." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "eit-11-ms-excel",
    unit: "Unit 2 · Information & Communication Technology",
    title: "Spreadsheets with MS Excel",
    readMinutes: 17,
    summary: "Using Microsoft Excel to organise and calculate data — cells, rows, columns, entering data, simple formulas and functions (SUM, AVERAGE), sorting and charts — applied to midwifery records and statistics.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a spreadsheet?", p: "A spreadsheet is a program that arranges data in a grid of rows and columns and can perform calculations automatically. Microsoft Excel is the most common spreadsheet. The midwife uses it for ward statistics, immunisation lists, birth registers and simple data analysis." },
      { h: "Cells, rows and columns", p: "An Excel sheet is a grid: columns are labelled with letters (A, B, C…) and rows with numbers (1, 2, 3…). The box where a column and row meet is a cell, with an address such as B3. The active cell is the one currently selected; a group of cells is a range (e.g. B2:B10)." },
      { h: "Entering data", list: [
        "Text (labels) — names such as 'Mother's name'.",
        "Numbers — such as birth weight or blood pressure.",
        "Dates — such as the date of delivery.",
        "Press Enter or Tab to move to the next cell; Excel aligns text left and numbers right by default."
      ] },
      { h: "Formulas", p: "A formula does a calculation and always begins with an equals sign (=). It can use cell addresses so results update automatically: =B2+B3 adds two cells, =C2-C3 subtracts, =D2*E2 multiplies and =F2/G2 divides. If a cell value changes, the formula recalculates instantly." },
      { h: "Common functions", list: [
        "=SUM(B2:B10) — adds a range of numbers (e.g. total births).",
        "=AVERAGE(C2:C10) — finds the mean (e.g. average birth weight).",
        "=MAX / =MIN — the highest / lowest value.",
        "=COUNT — counts the cells that contain numbers."
      ] },
      { h: "Editing and formatting", p: "Cells can be formatted: number format (decimals, percentage, date), bold or coloured text, borders, and column width. Rows and columns can be inserted or deleted. Formatting makes a register or statistics table clear and easy to read." },
      { h: "Sorting and filtering", p: "Excel can sort data into order (for example mothers by delivery date or by name, ascending or descending) and filter to show only rows that meet a condition (for example only low-birth-weight babies). This helps the midwife find and review information quickly." },
      { h: "Charts", p: "A chart turns numbers into a picture that is easier to understand. A column or bar chart compares quantities (births per month), a line chart shows change over time, and a pie chart shows parts of a whole (types of delivery). The midwife selects the data and inserts the chart from the Insert tab." }
    ],
    references: REF_EIT,
    examQuestions: [
      "What is a spreadsheet? List three midwifery uses of Excel.",
      "Explain cells, rows, columns and a cell address with examples.",
      "Write formulas to add and to average a column of birth weights.",
      "Describe the functions SUM and AVERAGE and when a midwife would use them.",
      "How can charts help a midwife present ward statistics?"
    ],
    assessment: [
      { type: "mcq", q: "In Excel, the box where a column and a row meet is called a:", options: ["chart", "sheet", "cell", "range"], answer: 2, rationale: "A cell is the intersection of a column and a row, e.g. B3." },
      { type: "mcq", q: "Every Excel formula must begin with:", options: ["an equals sign (=)", "a plus sign (+)", "a letter", "a space"], answer: 0, rationale: "Formulas start with '=' so Excel knows to calculate." },
      { type: "mcq", q: "Which function adds a range of numbers?", options: ["=AVERAGE", "=COUNT", "=MAX", "=SUM"], answer: 3, rationale: "=SUM adds all the numbers in a range." },
      { type: "mcq", q: "To find the average (mean) birth weight you would use:", options: ["=SUM", "=AVERAGE", "=MIN", "=COUNT"], answer: 1, rationale: "=AVERAGE calculates the mean of a range of numbers." },
      { type: "mcq", q: "In Excel, columns are labelled with ____ and rows with ____.", options: ["letters; numbers", "numbers; letters", "letters; letters", "numbers; numbers"], answer: 0, rationale: "Columns use letters (A, B, C) and rows use numbers (1, 2, 3)." },
      { type: "mcq", q: "The address 'B2:B10' refers to a:", options: ["single cell", "range of cells", "chart", "formula error"], answer: 1, rationale: "A colon shows a range of cells from B2 to B10." },
      { type: "mcq", q: "Which chart best shows parts of a whole, such as types of delivery?", options: ["pie chart", "line chart", "scatter chart", "no chart"], answer: 0, rationale: "A pie chart shows how parts make up a whole." },
      { type: "mcq", q: "Putting mothers in order by delivery date is called:", options: ["formatting", "merging", "sorting", "printing"], answer: 2, rationale: "Sorting arranges data into ascending or descending order." },
      { type: "mcq", q: "The formula '=D2*E2' will:", options: ["add D2 and E2", "subtract E2 from D2", "multiply D2 by E2", "divide D2 by E2"], answer: 2, rationale: "The asterisk (*) is the multiplication operator in Excel." },
      { type: "mcq", q: "Showing only low-birth-weight babies from a larger list is done by:", options: ["filtering", "deleting all others", "charting", "saving"], answer: 0, rationale: "Filtering displays only rows that meet a chosen condition." }
      , { type: "fill", q: "Every Excel formula must start with the ____ sign.", accept: ["equals", "=", "equal"], rationale: "Formulas begin with '=' to trigger calculation." }
      , { type: "fill", q: "The function used to add a range of numbers in Excel is ____.", accept: ["SUM", "=SUM", "sum"], rationale: "=SUM totals a range of numbers." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "eit-12-ms-powerpoint",
    unit: "Unit 2 · Information & Communication Technology",
    title: "Presentations with MS PowerPoint",
    readMinutes: 15,
    summary: "Using Microsoft PowerPoint to create clear slide presentations — slides, layouts, text, pictures, design and transitions, and tips for delivering an effective health-education talk as a midwife.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is presentation software?", p: "Presentation software lets you create a series of electronic slides to support a talk. Microsoft PowerPoint is the most common one. The midwife uses it to teach women and colleagues — for example a health-education talk on breastfeeding, danger signs, or a case presentation." },
      { h: "Slides and layouts", p: "A presentation is made of slides shown one after another. Each slide uses a layout — an arrangement of placeholders for a title, text, pictures or charts. A common first slide is the Title slide (topic and presenter); content slides usually have a title and bullet points." },
      { h: "Adding and editing text", list: [
        "Click a placeholder and type to add a title or bullet points.",
        "Keep text short — a few words per bullet, not full paragraphs.",
        "Follow a simple rule such as one idea per slide and a few bullets per slide.",
        "Use a readable font size (large enough to see from the back of the room)."
      ] },
      { h: "Pictures, charts and tables", p: "Pictures, simple diagrams, charts and tables make a talk clearer and more interesting than text alone. For a midwifery talk, a picture of correct breastfeeding position or a chart of antenatal visits helps the audience understand and remember." },
      { h: "Design and themes", p: "A theme gives all slides a consistent background, colour scheme and fonts, which looks professional. Choose colours with good contrast (dark text on a light background or the reverse), keep the design simple, and avoid too many colours or decorations that distract from the message." },
      { h: "Transitions and animations", p: "Transitions are effects between slides; animations make items appear on a slide. Used sparingly they can guide attention (for example revealing danger signs one at a time). Too many effects are distracting and unprofessional, so the midwife should keep them simple." },
      { h: "Running the slide show", p: "The Slide Show view displays slides full screen. Move forward with the spacebar, arrow keys or a clicker, and backward with the back arrow; press Esc to end. Practising beforehand and knowing the order helps the presenter feel confident." },
      { h: "Delivering an effective talk", list: [
        "Know your topic and rehearse.",
        "Face the audience, not the screen, and make eye contact.",
        "Speak clearly at a steady pace.",
        "Use the slides as a guide, not a script to read word for word.",
        "Allow time for questions at the end."
      ] }
    ],
    references: REF_EIT,
    examQuestions: [
      "What is presentation software? Give two midwifery uses of PowerPoint.",
      "What is a slide layout? Describe a Title slide and a content slide.",
      "List four tips for putting text on slides effectively.",
      "Why should transitions and animations be used sparingly?",
      "List five tips for delivering an effective health-education talk."
    ],
    assessment: [
      { type: "mcq", q: "The common Microsoft program for creating slide presentations is:", options: ["Word", "Excel", "PowerPoint", "Windows"], answer: 2, rationale: "PowerPoint is the standard presentation program." },
      { type: "mcq", q: "A single page in a presentation is called a:", options: ["sheet", "slide", "cell", "document"], answer: 1, rationale: "Each page of a presentation is a slide." },
      { type: "mcq", q: "Good practice for slide text is to:", options: ["write full paragraphs", "keep bullets short, a few words each", "use the smallest font", "fill every slide with text"], answer: 1, rationale: "Short bullets are clearer and easier to read than long paragraphs." },
      { type: "mcq", q: "A PowerPoint file is saved with the extension:", options: [".docx", ".xlsx", ".pptx", ".pdf"], answer: 2, rationale: "'.pptx' is the PowerPoint presentation format." },
      { type: "mcq", q: "Effects that occur when moving from one slide to the next are called:", options: ["animations", "transitions", "themes", "layouts"], answer: 1, rationale: "Transitions are the effects between slides; animations apply to items on a slide." },
      { type: "mcq", q: "To start the full-screen presentation you use:", options: ["Print view", "Slide Show view", "Normal view only", "the Recycle Bin"], answer: 1, rationale: "Slide Show view displays the slides full screen for the audience." },
      { type: "mcq", q: "Which gives all slides a consistent look (colours, background, fonts)?", options: ["a theme", "a formula", "a filter", "a footer only"], answer: 0, rationale: "A theme applies a consistent design across all slides." },
      { type: "mcq", q: "When delivering a talk, the presenter should mainly:", options: ["read every word off the slides", "face the screen the whole time", "face the audience and use slides as a guide", "speak as fast as possible"], answer: 2, rationale: "Effective speakers face the audience and use slides as support, not a script." },
      { type: "mcq", q: "Too many animations and transitions in a talk are:", options: ["always best", "distracting and unprofessional", "required", "needed on every slide"], answer: 1, rationale: "Excessive effects distract from the message and look unprofessional." },
      { type: "mcq", q: "Which would best help women understand correct breastfeeding position?", options: ["a long paragraph", "a clear picture or diagram", "a blank slide", "many bright colours"], answer: 1, rationale: "A relevant picture or diagram aids understanding and recall." }
      , { type: "fill", q: "Each individual page of a PowerPoint presentation is called a ____.", accept: ["slide"], rationale: "A presentation is made of slides." }
      , { type: "fill", q: "The view that shows slides full screen to the audience is the ____ Show view.", accept: ["slide"], rationale: "Slide Show view presents the slides full screen." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "eit-13-internet-email",
    unit: "Unit 2 · Information & Communication Technology",
    title: "The Internet, Email and Searching for Evidence",
    readMinutes: 17,
    summary: "Networks and the internet, the World Wide Web and browsers, searching effectively for evidence, judging the quality of online information, email, and e-learning resources for the midwife.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Networks and the internet", p: "A network connects computers so they can share data and resources. The internet is a worldwide network of networks linking millions of computers. It lets the midwife communicate, search for information, use online resources such as the Safe Delivery App, and take part in e-learning." },
      { h: "The World Wide Web and browsers", p: "The World Wide Web (WWW) is the collection of websites and pages on the internet. A web browser (such as Chrome, Edge or Firefox) is the program used to view them. Each page has an address called a URL (for example www.who.int), and links (hyperlinks) move from page to page." },
      { h: "Searching effectively", list: [
        "Use a search engine (such as Google) and type clear keywords.",
        "Use specific terms ('postpartum haemorrhage management' rather than just 'bleeding').",
        "Put a phrase in quotation marks to find it exactly.",
        "Look first at trusted sites (WHO, ministries of health, professional bodies).",
        "Refine the search if the first results are not useful."
      ] },
      { h: "Judging the quality of information", p: "Not everything on the internet is true or up to date. The midwife should check: Who wrote it (a recognised authority)? Is it current (recent date)? Is it accurate and supported by evidence? What is its purpose (to inform or to sell)? Preferring official health sites and peer-reviewed sources protects safe practice." },
      { h: "Email", p: "Email (electronic mail) sends messages and attachments between people over the internet. An email address has the form name@domain (for example midwife@hospital.org). Key parts of a message are the To/Cc fields, the Subject line, the body and any attachments. Professional emails are clear, polite and concise, with a meaningful subject." },
      { h: "Email and internet safety", list: [
        "Use strong passwords and do not share them.",
        "Do not open attachments or links from unknown senders (risk of viruses or 'phishing').",
        "Never send confidential patient information over insecure email.",
        "Log out of shared computers.",
        "Be respectful and professional in all messages (netiquette)."
      ] },
      { h: "E-learning and online midwifery resources", p: "E-learning means learning through electronic resources — online courses, videos, webinars and apps. For midwives these include the Safe Delivery App, WHO guidelines, online journals and continuing-education courses, which support professional development even in remote areas with internet access." },
      { h: "Telehealth and communication", p: "The internet also supports communication at a distance: email and messaging with colleagues, video consultations, and telehealth links to specialists for advice in difficult cases. Used appropriately and confidentially, these can improve access to expert support for childbearing women." }
    ],
    references: REF_EIT,
    examQuestions: [
      "Differentiate the internet and the World Wide Web.",
      "List five tips for searching effectively for midwifery evidence online.",
      "How can a midwife judge whether online health information is trustworthy?",
      "Describe the parts of an email message and the rules for a professional email.",
      "List five email and internet safety practices for the midwife."
    ],
    assessment: [
      { type: "mcq", q: "The worldwide network that links millions of computers is the:", options: ["browser", "internet", "spreadsheet", "printer"], answer: 1, rationale: "The internet is the global network of networks." },
      { type: "mcq", q: "A program used to view web pages is a:", options: ["web browser", "search box", "URL", "cell"], answer: 0, rationale: "A web browser (Chrome, Edge, Firefox) displays web pages." },
      { type: "mcq", q: "The address of a web page (such as www.who.int) is called a:", options: ["URL", "email", "file", "cell"], answer: 0, rationale: "A URL is the unique address of a web page." },
      { type: "mcq", q: "Which is the most trustworthy source for midwifery guidance?", options: ["an anonymous blog", "a product advertisement", "the World Health Organization website", "a random social media post"], answer: 2, rationale: "Official bodies such as WHO provide authoritative, evidence-based guidance." },
      { type: "mcq", q: "A correctly formed email address looks like:", options: ["midwife.hospital.org", "midwife@hospital.org", "www.midwife.org", "midwife#hospital"], answer: 1, rationale: "An email address has the form name@domain." },
      { type: "mcq", q: "Fraudulent emails that try to steal passwords or money are called:", options: ["spreadsheets", "phishing", "browsers", "transitions"], answer: 1, rationale: "Phishing emails trick users into revealing information; do not click their links." },
      { type: "mcq", q: "To search for an exact phrase you can:", options: ["type it in capitals", "put it in quotation marks", "spell it wrong", "use one letter"], answer: 1, rationale: "Quotation marks make a search engine look for the exact phrase." },
      { type: "mcq", q: "Confidential patient information should:", options: ["be emailed to anyone", "be posted online", "not be sent over insecure email", "be shared on social media"], answer: 2, rationale: "Patient confidentiality must be protected; insecure email is not safe." },
      { type: "mcq", q: "An online resource widely used to support safe births is the:", options: ["Safe Delivery App", "calculator app", "music app", "game app"], answer: 0, rationale: "The Safe Delivery App is an evidence-based resource for skilled birth attendants." },
      { type: "mcq", q: "Learning through online courses, videos and apps is called:", options: ["e-learning", "filtering", "formatting", "printing"], answer: 0, rationale: "E-learning is education delivered through electronic resources." }
      , { type: "fill", q: "The program used to view web pages is called a web ____.", accept: ["browser"], rationale: "A web browser displays web pages." }
      , { type: "fill", q: "Fraudulent messages that try to trick you into revealing passwords are called ____.", accept: ["phishing"], rationale: "Phishing attempts to steal personal or login information." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "eit-14-health-informatics",
    unit: "Unit 2 · Information & Communication Technology",
    title: "Health Informatics and Electronic Records in Midwifery",
    readMinutes: 16,
    summary: "Health informatics, electronic health records and the electronic partograph, mobile health, data privacy and confidentiality, and the benefits and challenges of ICT in midwifery care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is health informatics?", p: "Health informatics is the use of information and communication technology to collect, store, manage and use health information for better care. In midwifery it covers electronic records, the electronic partograph, registries, decision-support tools and the systems that report births and immunisations." },
      { h: "Electronic health records (EHR)", p: "An electronic health record is a digital version of a woman's health information — antenatal visits, investigations, labour notes, the newborn record and postnatal care — stored on a computer system. It can be updated and retrieved quickly and shared among the care team, replacing or supporting paper records." },
      { h: "Benefits of EHR in midwifery", list: [
        "Information is legible, organised and quickly retrieved.",
        "Reduces lost or duplicated records.",
        "Supports continuity of care across visits and providers.",
        "Allows reminders and alerts (for example overdue antenatal visits).",
        "Makes reporting and statistics easier and more accurate."
      ] },
      { h: "The electronic partograph and decision support", p: "An electronic partograph records the progress of labour (cervical dilatation, fetal heart, contractions, descent) and can alert the midwife when findings cross an action line, prompting timely review or referral. Clinical decision-support tools give reminders and guidance based on entered data, helping safe, evidence-based care." },
      { h: "Mobile health (mHealth)", p: "mHealth is the use of mobile phones and apps for health. For midwives it includes the Safe Delivery App, appointment and danger-sign reminders by SMS, teaching materials, and tools to collect community data. mHealth is especially valuable where computers and specialists are far away." },
      { h: "Data privacy, confidentiality and security", list: [
        "Patient data is confidential and protected by law and ethics.",
        "Access only the records you need for the woman's care.",
        "Use individual passwords; never share login details.",
        "Log out when finished and lock unattended screens.",
        "Follow the organisation's data-protection policy; do not copy data without permission."
      ] },
      { h: "Data quality and the midwife's role", p: "Records are only useful if the data is accurate, complete, timely and entered consistently ('garbage in, garbage out'). The midwife is responsible for entering correct information at the right time, checking it, and reporting errors or system problems so that the records can be trusted for care and planning." },
      { h: "Benefits and challenges of ICT in midwifery", list: [
        "Benefits — faster information, better communication, education, monitoring and reporting.",
        "Challenges — cost and maintenance, unreliable power or internet, the need for training, and protecting privacy.",
        "ICT supports but does not replace the midwife's clinical judgement and the woman-centred relationship."
      ] }
    ],
    references: REF_EIT,
    examQuestions: [
      "Define health informatics and give three examples used in midwifery.",
      "What is an electronic health record? List four benefits in midwifery care.",
      "Explain how an electronic partograph supports safe care in labour.",
      "What is mHealth? Give two examples useful to a midwife.",
      "List five ways to protect the privacy and security of electronic patient data."
    ],
    assessment: [
      { type: "mcq", q: "Health informatics is best defined as:", options: ["using ICT to collect, store and use health information", "a type of surgery", "a brand of computer", "a printing method"], answer: 0, rationale: "Health informatics applies ICT to manage and use health information for better care." },
      { type: "mcq", q: "An electronic health record (EHR) is:", options: ["a paper file only", "a printer", "a digital record of a woman's health information", "a search engine"], answer: 2, rationale: "An EHR is a digital, retrievable record of health information." },
      { type: "mcq", q: "A benefit of EHRs in midwifery is:", options: ["records are easily lost", "data cannot be shared", "information is legible and quickly retrieved", "no reminders are possible"], answer: 2, rationale: "EHRs make information legible, organised and quick to retrieve." },
      { type: "mcq", q: "An electronic partograph mainly records the progress of:", options: ["billing", "labour", "staff rosters", "the canteen menu"], answer: 1, rationale: "A partograph records and monitors the progress of labour." },
      { type: "mcq", q: "mHealth refers to health care delivered using:", options: ["mainframes only", "paper charts", "mobile phones and apps", "fax machines"], answer: 2, rationale: "mHealth uses mobile phones and apps to support health care." },
      { type: "mcq", q: "To protect patient data, a midwife should:", options: ["share her password", "access only the records she needs", "leave the screen unlocked", "copy data freely"], answer: 1, rationale: "Need-to-know access limits exposure of confidential data." },
      { type: "mcq", q: "'Garbage in, garbage out' in records means:", options: ["computers are useless", "poor data entry gives unreliable information", "always delete data", "records do not matter"], answer: 1, rationale: "Inaccurate input produces inaccurate, untrustworthy information." },
      { type: "mcq", q: "A challenge of ICT in midwifery in low-resource settings is:", options: ["faster reporting", "better communication", "unreliable power or internet", "easier education"], answer: 2, rationale: "Unreliable power and internet, plus cost and training, are real challenges." },
      { type: "mcq", q: "An electronic partograph can improve safety by:", options: ["printing photos", "alerting when findings cross an action line", "playing music", "ordering food"], answer: 1, rationale: "Alerts at the action line prompt timely review or referral." },
      { type: "mcq", q: "ICT in midwifery should be seen as something that:", options: ["replaces the midwife's judgement", "supports but does not replace clinical judgement and care", "removes the need for records", "ends the woman-centred relationship"], answer: 1, rationale: "ICT supports care; it does not replace the midwife's judgement and relationship with the woman." }
      , { type: "fill", q: "A digital version of a woman's health information stored on a computer is called an electronic health ____.", accept: ["record", "records"], rationale: "An electronic health record (EHR) stores health information digitally." },
      { type: "fill", q: "The use of mobile phones and apps for health care is abbreviated as ____.", accept: ["mHealth", "mhealth", "m-health"], rationale: "mHealth is mobile health — health care via mobile devices." }
    ]
  }
];
