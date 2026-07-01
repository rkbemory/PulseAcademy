/* ============================================================
   B.Sc. in Nursing (2018) · Year 1 · B111 Paper I
   Communicative English — 14 topics (DEGREE level).
   Aligned to the BNMC 4-year B.Sc. syllabus (grammar & parts of
   speech, the tense system, questions & structure, vocabulary &
   medical terminology, the four language skills, academic &
   professional writing, referencing, and communication in the
   health-care team). Grounded in standard references:
     • Murphy R. English Grammar in Use. Cambridge University Press.
     • Swan M. Practical English Usage. Oxford University Press.
     • Soars L, Soars J. New Headway. Oxford University Press.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_CE = [
  "Murphy R. English Grammar in Use. Cambridge University Press.",
  "Swan M. Practical English Usage. Oxford University Press.",
  "Soars L, Soars J. New Headway. Oxford University Press."
];

window.Academic.topics["bsc-nursing/communicative-english"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "ce-01-grammar-foundations",
    unit: "Unit 1 · Grammar & Parts of Speech",
    title: "Grammar Foundations & Parts of Speech",
    readMinutes: 17,
    summary: "Why accurate English underpins safe nursing, the eight parts of speech and their functions, the verb 'to be', the article system, subject-verb agreement, and the architecture of the English sentence at degree level.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Communication competence as a clinical skill", p: "For the graduate nurse, English is not an ornament but an instrument of patient safety. Standard textbooks, pharmacopoeias, drug monographs, evidence-based guidelines, electronic records and inter-professional handovers are conducted largely in English, and a large proportion of preventable clinical errors are rooted in communication failure. Grammar is the shared code that keeps meaning stable across speakers; a small structural slip ('do not give 10 mg' versus 'do give 10 mg') can change clinical meaning entirely. This course therefore treats grammar as the foundation on which the four macro-skills (reading, listening, speaking, writing) and professional documentation are built." },
      { h: "The eight parts of speech", p: "Every English word belongs to a word class (part of speech) defined by its function in the sentence. Understanding these classes lets the writer diagnose and correct errors systematically rather than by guesswork.", list: [
        "Noun — names a person, place, thing, condition or idea (nurse, ward, catheter, hypertension, care). Nouns may be common/proper, concrete/abstract, and countable/uncountable.",
        "Pronoun — stands in for a noun to avoid repetition (he, she, it, they, this, which, who).",
        "Verb — expresses an action or state and carries tense, aspect, voice and mood (administer, assess, is, feels).",
        "Adjective — modifies a noun, giving quality, quantity or degree (febrile, pale, two, sterile).",
        "Adverb — modifies a verb, adjective or another adverb, or a whole clause (rapidly, carefully, very, however).",
        "Preposition — relates a noun/pronoun to another element, showing time, place or logic (in, on, at, before, with, due to).",
        "Conjunction — joins words, phrases or clauses (coordinating: and, but, or; subordinating: because, although, when).",
        "Interjection — a short emotive exclamation (Oh!, Well, Alas)."
      ] },
      { h: "Function over form", p: "Many words can shift class according to use, so the part of speech is decided by function, not by the word alone. 'Dressing' is a noun in 'a sterile dressing' but a gerund/verb in 'dressing the wound'. 'Fast' is an adjective ('a fast pulse') and an adverb ('the heart beats fast'). Recognising this flexibility prevents mis-analysis and helps the nurse read complex clinical prose accurately." },
      { h: "The verb 'to be' — the central linking verb", p: "'To be' is the most frequent verb in English and behaves irregularly: present am/is/are, past was/were, participles being/been. It works as a linking (copular) verb joining a subject to a complement ('The patient is stable'), as an auxiliary forming the continuous aspect ('She is bleeding') and the passive voice ('The drug was administered'), and in existential 'there is/there are'. Its agreement and tense set the frame for most clinical description." },
      { h: "The article system (a, an, the, zero)", p: "Articles signal whether a noun is specific or general. The indefinite articles a/an introduce a non-specific, singular countable noun; the choice depends on the following SOUND, not spelling — 'a unit' (consonant /j/ sound), 'an hour' (vowel /aʊ/ sound), 'an MRI' (letter M begins with a vowel sound /em/). The definite article 'the' marks something specific or already known ('the patient in bed 3'). The zero article is used with uncountable and general plural nouns ('Oxygen is essential', 'Nurses provide care'). Article errors are among the most persistent for second-language users and affect clarity in documentation." },
      { h: "Subject-verb agreement (concord)", p: "A verb must agree with its subject in number and person. Beyond the basic 'nurse works / nurses work', degree-level writing must manage tricky cases: collective nouns ('the team is/are' depending on whether it acts as a unit or as individuals), indefinite pronouns ('everyone is', 'none is/are'), quantities as single units ('ten millilitres is enough'), and agreement with the subject rather than an intervening phrase ('The box of syringes is on the trolley', not 'are'). Correct concord keeps clinical statements unambiguous." },
      { h: "Possessive and other determiners", p: "Determiners open the noun phrase and include possessive adjectives (my, your, his, her, its, our, their), demonstratives (this, that, these, those), and quantifiers (some, any, much, many, few). They must agree with the possessor, not the thing possessed ('the patient and her family'), and distinguish 'its' (possessive) from 'it's' (it is) — a frequent professional-writing error." },
      { h: "Sentence architecture", p: "The canonical English clause follows Subject-Verb-Object/Complement (SVO). More sophisticated writing combines clauses: a simple sentence has one independent clause; a compound sentence joins two with a coordinator; a complex sentence adds a subordinate clause; and a compound-complex sentence combines both. Mastery of these types lets the nurse write records that are both concise ('The wound is clean and dry') and precise ('Because the patient became hypotensive, the infusion was slowed and the doctor was informed')." }
    ],
    references: REF_CE,
    examQuestions: [
      "Explain, with examples, why grammatical accuracy is a patient-safety issue in nursing practice.",
      "Name the eight parts of speech and give a nursing example of each, noting how one word can change class by function.",
      "Describe the roles of the verb 'to be' as a linking verb, an auxiliary and in the passive voice.",
      "Explain the article system (a/an/the/zero) and give the sound-based rule for choosing 'a' or 'an'.",
      "Discuss subject-verb agreement, illustrating three difficult cases with clinical examples."
    ],
    assessment: [
      { type: "mcq", q: "Which article correctly completes: 'The patient needs ___ MRI scan.'", options: ["an", "a", "the only", "no article"], answer: 0, rationale: "The letter 'M' begins with the vowel sound /em/, so the sound-based rule requires 'an MRI'." },
      { type: "mcq", q: "In 'dressing the wound', the word 'dressing' functions as a:", options: ["noun", "verb (gerund)", "adjective", "preposition"], answer: 1, rationale: "Here 'dressing' names an action and takes an object, functioning as a verb/gerund, not a noun." },
      { type: "mcq", q: "Choose the sentence with correct subject-verb agreement:", options: ["The box of syringes are on the trolley.", "The box of syringes were on the trolley.", "The box of syringes is on the trolley.", "The box of syringes be on the trolley."], answer: 2, rationale: "The subject is the singular 'box'; the intervening phrase 'of syringes' does not change the verb, so 'is' is correct." },
      { type: "mcq", q: "The verb 'to be' in 'The drug was administered on time' is functioning as a/an:", options: ["auxiliary forming the passive voice", "linking verb", "existential 'there'", "modal verb"], answer: 0, rationale: "'Was + past participle (administered)' forms the passive voice, where 'be' acts as an auxiliary." },
      { type: "mcq", q: "Which word class relates a noun to another element, showing time, place or logic?", options: ["conjunction", "preposition", "interjection", "pronoun"], answer: 1, rationale: "Prepositions (in, on, before, due to) show relationships of time, place and logic." },
      { type: "mcq", q: "Choose the correct possessive: 'The patient took ___ medication after ___ dose was checked.'", options: ["its; it's", "hers; its", "her; its", "her; it's"], answer: 2, rationale: "'Her' is the possessive determiner for the patient; 'its' is the possessive for 'dose', not the contraction 'it's' (= it is)." },
      { type: "mcq", q: "A sentence that joins two independent clauses with a coordinating conjunction is called:", options: ["simple", "compound", "complex", "fragment"], answer: 1, rationale: "Two independent clauses joined by a coordinator (and, but, or) form a compound sentence." },
      { type: "mcq", q: "The zero article is correctly used in:", options: ["The oxygen is essential for a life.", "An oxygen is essential for the life.", "The oxygen is essential for the a life.", "Oxygen is essential for life."], answer: 3, rationale: "Uncountable/general nouns ('oxygen', 'life') take no article when used in a general sense." },
      { type: "mcq", q: "Which of the following demonstrates a collective noun treated as a single unit?", options: ["The team are arguing among themselves.", "The team is ready for the ward round.", "The team have gone their separate ways.", "The team disagree with each other."], answer: 1, rationale: "When the collective noun acts as one body, it takes a singular verb ('the team is ready')." },
      { type: "mcq", q: "The canonical word order of an English declarative clause is:", options: ["Verb-Subject-Object", "Object-Verb-Subject", "Subject-Verb-Object/Complement", "Subject-Object-Verb"], answer: 2, rationale: "English is an SVO language: Subject-Verb-Object (or complement)." },
      { type: "fill", q: "The part of speech is decided by a word's ______ in the sentence, not by the word alone.", accept: ["function", "role"], rationale: "Word class is determined by function; the same word can belong to different classes in different sentences." },
      { type: "fill", q: "The choice between 'a' and 'an' depends on the following ______, not the spelling.", accept: ["sound", "pronunciation"], rationale: "'An hour' (vowel sound) but 'a unit' (consonant /j/ sound) — the rule is sound-based." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "ce-02-present-tenses",
    unit: "Unit 1 · Grammar & Parts of Speech",
    title: "The Present Tense System: Simple, Continuous & Perfect",
    readMinutes: 17,
    summary: "The English present tenses analysed through tense and aspect: the present simple, present continuous, present perfect and present perfect continuous, state versus dynamic verbs, adverbs of frequency, and their precise use in clinical description and handover.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Tense and aspect", p: "English 'tenses' actually combine tense (time reference: present/past) with aspect (how the action is viewed: simple, continuous/progressive, perfect). The present group therefore has four forms, each viewing present time differently. Understanding this two-part system, rather than memorising forms, lets the nurse select the tense that conveys the exact clinical meaning — a stable habit versus a momentary event, a completed result versus an ongoing process." },
      { h: "The present simple", p: "Formed with the base verb (adding -s in the third person singular), the present simple expresses habits and routines ('She takes metformin twice daily'), permanent situations ('He works night shifts'), scientific and general truths ('The heart pumps blood', 'Water boils at 100 °C'), and instructions/procedures ('First, you clean the site'). Negatives and questions use do/does + base verb ('Does he smoke?', 'She does not report pain')." },
      { h: "Adverbs of frequency", p: "Frequency adverbs (always, usually, often, sometimes, seldom, rarely, never) quantify how regularly a routine occurs and pair naturally with the present simple. They precede the main verb but follow 'to be' and auxiliaries: 'She always washes her hands', 'He is never late', 'The patient does not usually complain'. In assessment they help capture a patient's baseline pattern precisely." },
      { h: "The present continuous", p: "Formed with am/is/are + present participle (-ing), the present continuous describes an action in progress now ('The patient is sleeping'), a temporary situation ('She is staying on the medical ward this week'), a developing trend ('His condition is improving'), and fixed future arrangements ('The consultant is reviewing him at 4 pm'). It contrasts sharply with the present simple in handover: 'He usually eats well, but he is refusing food today.'" },
      { h: "State (stative) versus dynamic verbs", p: "Dynamic verbs describe actions that can be in progress (run, give, bleed) and freely take the continuous. State verbs describe conditions rather than actions — mental states (know, believe, understand), emotions (like, want, need), senses (seem, appear) and possession (have, own, belong) — and are normally NOT used in the continuous ('I understand', not 'I am understanding'). Note that some verbs shift meaning: 'He is having a seizure' (dynamic event) versus 'He has two children' (state)." },
      { h: "The present perfect", p: "Formed with have/has + past participle, the present perfect links a past action to present relevance. Its core uses are: a result now ('The doctor has signed the chart' — so it is ready), life experience without a stated time ('Have you ever had surgery?'), and an unfinished period continuing to now ('She has worked here for five years / since 2019'). Crucially, it is NOT used with a finished time expression — 'I saw him yesterday' (past simple), never 'I have seen him yesterday'. Signal words include ever, never, just, already, yet, for and since." },
      { h: "The present perfect continuous", p: "Formed with have/has been + -ing, this tense stresses the duration or continuity of an action that began in the past and is still ongoing or has just stopped, often with a visible present result: 'He has been coughing for three days', 'She has been working all night' (and looks exhausted). It emphasises the process, whereas the present perfect simple emphasises the completed result or quantity ('She has taken three doses')." },
      { h: "Clinical application: selecting the right present tense", p: "Accurate handover depends on tense choice. Compare: 'The patient takes warfarin' (regular medication — present simple); 'The patient is taking warfarin' (currently on it, perhaps temporarily); 'The patient has taken warfarin' (a dose has been given); 'The patient has been taking warfarin for two weeks' (ongoing therapy with duration). Each conveys a different clinical fact, and confusing them can cause medication or history errors." }
    ],
    references: REF_CE,
    examQuestions: [
      "Distinguish tense from aspect and show how the four present tenses combine them.",
      "Give the form and three uses of the present simple, with nursing examples.",
      "Explain the difference between state and dynamic verbs and identify verbs that can be both.",
      "Compare the present perfect and present perfect continuous, showing what each emphasises.",
      "Using one drug example, write four sentences in the four present tenses and explain how the clinical meaning differs."
    ],
    assessment: [
      { type: "mcq", q: "English 'tense' combines time reference with:", options: ["mood", "aspect", "voice", "gender"], answer: 1, rationale: "The four present forms differ by aspect (simple, continuous, perfect) applied to present time." },
      { type: "mcq", q: "Which sentence correctly uses the present perfect for an unfinished period?", options: ["She has worked here since 2019.", "She has worked here yesterday.", "She is working here since 2019.", "She works here since 2019."], answer: 0, rationale: "The present perfect with 'since' marks a period beginning in the past and continuing to now." },
      { type: "mcq", q: "Which verb is normally a STATE verb, not used in the continuous?", options: ["administer", "understand", "bleed", "walk"], answer: 1, rationale: "'Understand' describes a mental state; we say 'I understand', not 'I am understanding'." },
      { type: "mcq", q: "'He has been coughing for three days' emphasises:", options: ["a completed single event", "the duration/continuity of the action", "a scientific fact", "a fixed future arrangement"], answer: 1, rationale: "The present perfect continuous stresses the ongoing duration of the action up to now." },
      { type: "mcq", q: "Choose the correct sentence for a general scientific truth:", options: ["The heart is pumping blood.", "The heart has pumped blood.", "The heart pumps blood.", "The heart pumped blood."], answer: 2, rationale: "General/scientific truths take the present simple." },
      { type: "mcq", q: "Which sentence is INCORRECT?", options: ["I saw him yesterday.", "I have seen him yesterday.", "I have seen him before.", "I saw him at noon."], answer: 1, rationale: "The present perfect cannot be used with a finished time expression such as 'yesterday'." },
      { type: "mcq", q: "In handover, 'The patient is taking warfarin' most precisely means the patient:", options: ["once took warfarin long ago", "is currently on warfarin therapy", "will take warfarin next week", "never takes warfarin"], answer: 1, rationale: "The present continuous marks a current (possibly temporary) ongoing situation." },
      { type: "mcq", q: "Where does the frequency adverb go: 'She ___ washes her hands before a procedure.'", options: ["washes always", "always washes", "washes hands always", "always is washes"], answer: 1, rationale: "Frequency adverbs precede the main verb: 'always washes'." },
      { type: "mcq", q: "Which verb changes meaning between state and dynamic use?", options: ["have", "run", "give", "clean"], answer: 0, rationale: "'Have' is stative in 'have two children' but dynamic in 'having a seizure/meal'." },
      { type: "mcq", q: "The present perfect SIMPLE, unlike the continuous, tends to emphasise:", options: ["the process itself", "the completed result or quantity", "the future", "background scenery"], answer: 1, rationale: "'She has taken three doses' stresses the completed quantity/result, not the ongoing process." },
      { type: "fill", q: "The present continuous is formed with am/is/are + the ______ participle (verb-ing).", accept: ["present", "-ing", "ing"], rationale: "Present continuous = am/is/are + present participle (verb-ing)." },
      { type: "fill", q: "The signal words 'for' and 'since' are typically used with the present ______ tense.", accept: ["perfect"], rationale: "'For' (duration) and 'since' (starting point) accompany the present perfect for an unfinished period." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "ce-03-past-tenses",
    unit: "Unit 1 · Grammar & Parts of Speech",
    title: "The Past Tense System & Narrative Tenses",
    readMinutes: 17,
    summary: "The past simple with regular and irregular verbs, the past continuous, the past perfect and past perfect continuous, the used-to/would forms for past habits, and the coordinated use of narrative tenses in history-taking and incident reporting.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The past simple", p: "The past simple names a completed action at a definite past time. Regular verbs add -ed (assess → assessed, admit → admitted, with spelling adjustments for doubling and final -y). Many high-frequency verbs are irregular and must be memorised in their three principal parts (go/went/gone; take/took/taken; give/gave/given; be/was-were/been). Example: 'The patient arrived at 08:00 and the doctor examined him.' It is the backbone tense of clinical narrative." },
      { h: "Negatives and questions in the past", p: "Past-simple negatives and questions use the auxiliary 'did' (did not / didn't) with the BASE form of the main verb, because 'did' already carries the past tense: 'Did you take your medication?', 'She did not sleep well'. A common error is double-marking the past ('Did he went?' — incorrect; 'Did he go?' — correct). The verb 'to be' is an exception, inverting directly: 'Was he in pain?'" },
      { h: "Regular and irregular verbs — principal parts", p: "Every verb has principal parts used to build tenses: the base form, the past simple, and the past participle. Regular verbs make the last two identically with -ed (clean/cleaned/cleaned). Irregular verbs vary — some keep one form (cut/cut/cut), some have two (make/made/made), and many have three (write/wrote/written). Because the past participle drives all perfect tenses and the passive, mastery of irregular forms is essential for accurate clinical writing." },
      { h: "The past continuous", p: "Formed with was/were + -ing, the past continuous describes an action in progress at a past moment, sets the background of a narrative, and marks an action interrupted by another: 'She was resting when the alarm sounded', 'While the nurse was charting, the patient collapsed'. Two simultaneous ongoing actions may both take it: 'While one nurse was suctioning, the other was monitoring the saturation.'" },
      { h: "The past perfect", p: "Formed with had + past participle, the past perfect marks the 'earlier past' — an action completed before another past action, making sequence unambiguous. 'The patient had taken an overdose before she was found' shows clearly that the overdose came first. It is especially valuable in incident reports and histories where the order of events has clinical and legal significance." },
      { h: "The past perfect continuous", p: "Formed with had been + -ing, this tense stresses the duration of an activity that continued up to a point in the past, often explaining a later state: 'He had been drinking heavily for years before the liver failure was diagnosed', 'She had been waiting for two hours when she was finally seen'. It combines the 'earlier past' reference with a focus on ongoing process." },
      { h: "Past habits: used to, would and the past simple", p: "Repeated or habitual past actions and past states can be expressed with 'used to' + base verb ('He used to smoke twenty a day'). 'Would' + base verb also expresses repeated past ACTIONS in narrative ('Every winter she would develop a chest infection') but is NOT used for past states ('He used to have asthma', not 'would have asthma'). The plain past simple is also acceptable for habits with a frequency adverb." },
      { h: "Coordinating narrative tenses in nursing", p: "Effective histories and incident reports weave the tenses together: the past simple carries the main sequence of events, the past continuous supplies the background, the past perfect marks what happened earlier, and 'used to' captures long-standing habits. For example: 'The 62-year-old man used to smoke heavily. He was working in his field when he developed crushing chest pain; he had eaten a large meal an hour before. He was brought to hospital, where an ECG confirmed a myocardial infarction.' Precise tense use makes the clinical story unambiguous and defensible." }
    ],
    references: REF_CE,
    examQuestions: [
      "Explain how the past simple negative and question are formed, and why 'Did he went?' is wrong.",
      "Define the three principal parts of a verb and explain why the past participle matters for other tenses.",
      "Describe the use of the past continuous, including interrupted and simultaneous actions.",
      "Explain the past perfect and past perfect continuous, with a nursing example of each.",
      "Compare 'used to' and 'would' for past habits, and construct a short patient history using at least four past-tense forms."
    ],
    assessment: [
      { type: "mcq", q: "Choose the correct past-simple question:", options: ["Did you took your medicine?", "Did you take your medicine?", "Did you taken your medicine?", "Do you took your medicine?"], answer: 1, rationale: "After 'did', the main verb returns to its base form: 'Did you take...?'." },
      { type: "mcq", q: "The past participle of 'write' is:", options: ["wrote", "writed", "written", "writing"], answer: 2, rationale: "Write/wrote/written — the past participle 'written' drives perfect tenses and the passive." },
      { type: "mcq", q: "Which sentence uses the past perfect to show the earlier of two past events?", options: ["The patient took an overdose before she was found.", "The patient had taken an overdose before she was found.", "The patient takes an overdose before she was found.", "The patient is taking an overdose before she was found."], answer: 1, rationale: "The past perfect ('had taken') marks the action completed before the later past event." },
      { type: "mcq", q: "'While the nurse was charting, the patient collapsed' uses the past continuous to:", options: ["state a scientific fact", "set the background action interrupted by another event", "describe a future plan", "give an instruction"], answer: 1, rationale: "The past continuous supplies ongoing background action interrupted by a past-simple event." },
      { type: "mcq", q: "Which form is correct for a PAST STATE (not an action)?", options: ["He would have asthma.", "He used to have asthma.", "He is having asthma.", "He was used to have asthma."], answer: 1, rationale: "'Would' is not used for past states; 'used to have asthma' correctly expresses a past state." },
      { type: "mcq", q: "The past perfect continuous is formed with:", options: ["was/were + -ing", "have/has been + -ing", "had been + -ing", "did + base verb"], answer: 2, rationale: "Past perfect continuous = had been + present participle (-ing)." },
      { type: "mcq", q: "Which verb is irregular with three different principal parts?", options: ["clean", "cut", "make", "take"], answer: 3, rationale: "Take/took/taken has three distinct forms; 'cut' has one, 'make' has two, 'clean' is regular." },
      { type: "mcq", q: "Choose the correct past-simple negative:", options: ["She did not slept well.", "She did not sleep well.", "She not sleep well.", "She didn't slept well."], answer: 1, rationale: "'Did not' is followed by the base verb: 'did not sleep'." },
      { type: "mcq", q: "In a narrative, the tense that carries the MAIN sequence of completed events is the:", options: ["past continuous", "past simple", "past perfect", "present perfect"], answer: 1, rationale: "The past simple carries the main chain of completed past events; other past tenses support it." },
      { type: "mcq", q: "'He had been drinking heavily for years before the diagnosis' emphasises:", options: ["a single completed act", "the duration of an activity up to a past point", "a present habit", "a future intention"], answer: 1, rationale: "The past perfect continuous stresses the duration of the activity leading up to a past point." },
      { type: "fill", q: "Past-simple questions and negatives use the auxiliary ______ followed by the base verb.", accept: ["did"], rationale: "'Did' carries the past tense, so the main verb stays in its base form." },
      { type: "fill", q: "The three principal parts of a verb are the base form, the past simple, and the past ______.", accept: ["participle"], rationale: "The past participle is the third principal part and drives the perfect tenses and the passive." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "ce-04-future-forms",
    unit: "Unit 1 · Grammar & Parts of Speech",
    title: "Future Forms, Modality & the Passive Voice",
    readMinutes: 17,
    summary: "The several ways English expresses future time (will, going to, present continuous, present simple, future perfect and continuous), the modal verbs of possibility, obligation and advice, and the formation and clinical value of the passive voice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "English has no single future tense", p: "Unlike the past and present, English expresses the future through several structures, each carrying a distinct nuance of the speaker's attitude — prediction, intention, arrangement or certainty. Choosing correctly matters in care planning and patient communication, where the difference between a plan, an offer and a firm arrangement has practical consequences.", figure: {
        caption: "Figure 4.1 — Ways of expressing future time in English, from spontaneous decision to fixed schedule.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Future forms from spontaneous to fixed"><rect x="10" y="20" width="130" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="75" y="46" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">will</text><text x="75" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">decision, offer,</text><text x="75" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">prediction</text><rect x="150" y="20" width="130" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="215" y="46" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">going to</text><text x="215" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">plan, intention,</text><text x="215" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">evidence</text><rect x="290" y="20" width="130" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="355" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">present cont.</text><text x="355" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">fixed personal</text><text x="355" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">arrangement</text><rect x="430" y="20" width="120" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="490" y="46" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">present simple</text><text x="490" y="66" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">timetable /</text><text x="490" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">schedule</text><text x="20" y="122" font-family="sans-serif" font-size="11" font-style="italic" fill="#7C2D12">Spontaneous</text><text x="440" y="122" font-family="sans-serif" font-size="11" font-style="italic" fill="#7C2D12">Fixed / scheduled</text><line x1="20" y1="130" x2="540" y2="130" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Will, going to and continuous for the future", list: [
        "'Will' + base verb — spontaneous decisions, offers, promises and neutral predictions: 'I will get your analgesia', 'It will probably settle overnight'.",
        "'Going to' + base verb — pre-existing plans and intentions, and predictions from present evidence: 'She is going to start dialysis next week', 'His BP is falling — he is going to faint'.",
        "Present continuous — fixed personal arrangements already agreed: 'The surgeon is operating on Tuesday'.",
        "Present simple — scheduled/timetabled events: 'The clinic opens at 09:00', 'The ward round starts at eight'."
      ] },
      { h: "Future perfect and future continuous", p: "Two further forms add precision. The future continuous (will be + -ing) describes an action in progress at a future point: 'At midnight the night staff will be handing over'. The future perfect (will have + past participle) describes an action completed BEFORE a future point: 'By discharge, the patient will have completed the antibiotic course'. Both are useful in projecting the trajectory of a care plan." },
      { h: "Modal verbs — an overview", p: "Modal auxiliaries (can, could, may, might, must, shall, should, will, would, ought to) express the speaker's judgement about an action rather than the action itself. They are followed by the base verb, do not take -s in the third person, and form questions/negatives without 'do' ('She can walk', 'Can she walk?', 'She cannot walk'). They cluster into meanings: ability, possibility, permission, obligation and advice." },
      { h: "Modals of ability, possibility and permission", list: [
        "Ability — can/could: 'She can mobilise with a frame', 'He could not stand yesterday'.",
        "Possibility — may/might/could: 'The rash may be an allergic reaction', 'It might be sepsis'.",
        "Permission and polite requests — may/can/could: 'May I check your wristband?', 'Could you roll onto your side, please?'."
      ] },
      { h: "Modals of obligation, prohibition and advice", p: "Degree-level writing distinguishes strengths of obligation carefully. 'Must' expresses strong obligation from the speaker ('You must fast before surgery'); 'have to' expresses external obligation ('Visitors have to sign in'); 'should' and 'ought to' give advice or recommendation ('You should elevate the limb'); 'must not' expresses prohibition ('You must not eat before the test'), which is very different from 'do not have to' (no obligation). Misjudging these degrees can turn firm safety advice into a mere suggestion." },
      { h: "The passive voice", p: "The passive (be + past participle) shifts focus from the doer to the action or its recipient: 'The nurse administered the drug' (active) becomes 'The drug was administered' (passive). It is formed in any tense by conjugating 'be' and adding the past participle. The passive is prominent in clinical and scientific writing because the process or patient is more relevant than the individual agent, and because the agent may be unknown or self-evident: 'Vital signs were recorded four-hourly', 'The specimen was sent to the laboratory'." },
      { h: "Using the passive appropriately in nursing", p: "The passive lends objectivity and an impersonal, professional tone to records ('The wound was cleaned and re-dressed'), and it foregrounds the patient in care documentation ('The patient was reassured and repositioned'). However, over-use can hide accountability; where responsibility must be clear — for example in incident reporting — the active voice with a named agent is preferable ('Nurse X escalated to the doctor'). Skilled writers alternate the two voices deliberately." }
    ],
    references: REF_CE,
    examQuestions: [
      "Explain, with examples, why English is said to have no single future tense.",
      "Distinguish 'will', 'going to' and the present continuous for future reference.",
      "Describe the future perfect and future continuous with a care-plan example of each.",
      "Compare 'must', 'have to', 'should' and 'must not', explaining the different strengths of obligation.",
      "Explain how the passive voice is formed and discuss when it is, and is not, appropriate in nursing documentation."
    ],
    assessment: [
      { type: "mcq", q: "Which form best expresses a spontaneous offer to help a patient?", options: ["I am helping you.", "I will help you.", "I help you.", "I am going to help you (planned)."], answer: 1, rationale: "'Will' + base verb expresses a spontaneous decision or offer made at the moment of speaking." },
      { type: "mcq", q: "'By discharge, the patient will have completed the course' is in the:", options: ["future continuous", "present perfect", "future perfect", "going-to future"], answer: 2, rationale: "Future perfect (will have + past participle) marks an action completed before a future point." },
      { type: "mcq", q: "Choose the passive equivalent of 'The nurse recorded the vital signs':", options: ["The nurse was recording vital signs.", "The vital signs record the nurse.", "The vital signs were recorded.", "The nurse has recorded."], answer: 2, rationale: "Passive = be + past participle, with the recipient as subject: 'The vital signs were recorded'." },
      { type: "mcq", q: "Which modal expresses PROHIBITION?", options: ["must not", "do not have to", "might not", "would not"], answer: 0, rationale: "'Must not' forbids the action; 'do not have to' merely means there is no obligation." },
      { type: "mcq", q: "'The clinic opens at 09:00' uses the present simple to express:", options: ["a spontaneous decision", "an intention", "a timetabled/scheduled future event", "an obligation"], answer: 2, rationale: "The present simple expresses fixed timetables and schedules for future events." },
      { type: "mcq", q: "Which sentence gives ADVICE rather than strong obligation?", options: ["You must fast before surgery.", "You should elevate the limb.", "You must not eat.", "Visitors have to sign in."], answer: 1, rationale: "'Should' (and 'ought to') gives advice/recommendation, weaker than 'must' or 'have to'." },
      { type: "mcq", q: "A key reason the passive voice is common in clinical writing is that it:", options: ["always names the agent", "is more informal", "focuses on the action or patient rather than the doer", "avoids the verb 'to be'"], answer: 2, rationale: "The passive foregrounds the action or recipient when the agent is unimportant, unknown or obvious." },
      { type: "mcq", q: "'His BP is falling — he is going to faint' uses 'going to' for a prediction based on:", options: ["a timetable", "a spontaneous decision", "a promise", "present evidence"], answer: 3, rationale: "'Going to' is used for predictions grounded in present evidence." },
      { type: "mcq", q: "For clear accountability in an incident report, it is usually better to use:", options: ["the passive with no agent", "the active voice with a named agent", "the future perfect", "a modal of ability"], answer: 1, rationale: "The active voice with a named agent makes responsibility explicit, which matters in incident reporting." },
      { type: "mcq", q: "Modal verbs are followed by:", options: ["the base form of the main verb", "the -ing form", "the past participle", "'to' + verb"], answer: 0, rationale: "Modals are followed directly by the base form (can walk, must fast), with no 'to' and no -s." },
      { type: "fill", q: "The passive voice is formed with the verb ______ + the past participle.", accept: ["be", "to be"], rationale: "Passive = a form of 'be' + past participle, in whatever tense is required." },
      { type: "fill", q: "'Must' expresses obligation from the speaker, whereas '______ to' expresses external obligation.", accept: ["have"], rationale: "'Have to' expresses obligation imposed by external rules or circumstances." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "ce-05-questions-structure",
    unit: "Unit 1 · Grammar & Parts of Speech",
    title: "Questions, Negatives & Sentence Structure",
    readMinutes: 16,
    summary: "Auxiliary and modal verbs in question and negative formation, yes/no and wh- questions, negative and question tags, subject versus object questions, clause types, and the sentence errors (fragments, run-ons) to avoid in professional writing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Auxiliary and modal verbs — the engine of questions and negatives", p: "English forms questions and negatives with auxiliary verbs, not by changing word order alone. The primary auxiliaries are 'be' (am/is/are/was/were), 'do' (do/does/did) and 'have' (have/has/had); the modal auxiliaries (can, will, should, must, may, might) also serve. The auxiliary carries tense and number, so the main verb is freed to its base or participle form. This 'operator' system is the key to accurate interrogatives and negatives in clinical interviewing." },
      { h: "Yes/no questions by inversion", p: "Yes/no questions are made by moving the operator (auxiliary/modal) in front of the subject. With 'be' the verb itself inverts ('You are comfortable' → 'Are you comfortable?'); with lexical verbs, do-support supplies the operator ('He smokes' → 'Does he smoke?', 'She slept' → 'Did she sleep?'); with existing auxiliaries/modals, they invert ('She can walk' → 'Can she walk?'). The expected answer is affirmative or negative." },
      { h: "Wh- (information) questions", p: "Wh- questions request specific information using question words: what, where, when, why, who(m), whose, which, and how (with how much/many/long/often/old). The usual pattern is: wh-word + operator + subject + main verb ('Where does it hurt?', 'How long have you had the pain?', 'What medications are you taking?'). These open questions are the foundation of accurate history-taking, eliciting fuller responses than yes/no questions." },
      { h: "Subject questions versus object questions", p: "When the wh-word is the SUBJECT of the verb, there is no inversion and no do-support: 'Who called the doctor?' (who = subject). When it is the OBJECT, normal inversion applies: 'Who(m) did the doctor call?'. Confusing these produces errors such as 'Who did call the doctor?' This distinction sharpens precise questioning about who did what to whom — clinically important in incident review." },
      { h: "Forming negatives", p: "Negatives attach 'not' to the operator, often contracted: is not/isn't, do not/don't, does not/doesn't, did not/didn't, have not/haven't, cannot/can't, will not/won't, must not/mustn't. With lexical verbs, do-support is required ('She does not report pain', not 'She reports not pain'). English generally avoids double negatives; 'She hasn't got no pain' is non-standard — use 'She hasn't got any pain'." },
      { h: "Negative questions and question tags", p: "Negative questions ('Isn't he feeling better?') often express surprise or seek confirmation. Question tags are short operator + pronoun clauses added to a statement to invite agreement or check information: a positive statement usually takes a negative tag ('You've taken your tablets, haven't you?') and a negative statement a positive tag ('He isn't in pain, is he?'). Tags soften questioning and are useful for gently confirming a patient's understanding." },
      { h: "Clause types and sentence variety", p: "Beyond the single clause, professional writing controls four sentence types: simple (one independent clause), compound (independent clauses joined by a coordinator or semicolon), complex (an independent clause plus one or more subordinate clauses introduced by because, although, when, which, that), and compound-complex. Varying these makes documentation both precise and readable — subordination in particular shows the logical relationship between clinical events." },
      { h: "Sentence errors to avoid in professional writing", list: [
        "Sentence fragment — an incomplete clause punctuated as a sentence ('Because the patient was hypotensive.'); attach it to a main clause.",
        "Run-on / comma splice — two independent clauses wrongly joined by nothing or by only a comma ('The wound was clean, it was re-dressed'); use a full stop, semicolon or conjunction.",
        "Misplaced modifier — a description positioned so it modifies the wrong element ('Bleeding heavily, the nurse assessed the patient'); place modifiers next to what they describe.",
        "Faulty parallelism — mismatched items in a list ('The nurse assessed, documented and was informing the doctor'); keep grammatical forms parallel."
      ] }
    ],
    references: REF_CE,
    examQuestions: [
      "Explain the role of the operator (auxiliary/modal) in forming questions and negatives.",
      "Distinguish subject questions from object questions with clinical examples.",
      "Describe the rule for question tags and give two nursing examples.",
      "Compare the four sentence types and explain the value of subordination in documentation.",
      "Define fragment, run-on, misplaced modifier and faulty parallelism, correcting one example of each."
    ],
    assessment: [
      { type: "mcq", q: "Which is a correctly formed SUBJECT question?", options: ["Who called the doctor?", "Who did call the doctor?", "Who the doctor called?", "Whom called the doctor?"], answer: 0, rationale: "When the wh-word is the subject, there is no inversion or do-support: 'Who called the doctor?'." },
      { type: "mcq", q: "Choose the correct question tag: 'You have taken your tablets, ___?'", options: ["have you", "haven't you", "didn't you", "do you"], answer: 1, rationale: "A positive statement takes a negative tag using the same operator: 'haven't you?'." },
      { type: "mcq", q: "Which sentence correctly uses do-support for a lexical verb?", options: ["She reports not pain.", "She not report pain.", "She does not report pain.", "She no reports pain."], answer: 2, rationale: "Lexical verbs require do-support for the negative: 'does not report'." },
      { type: "mcq", q: "A comma splice is best described as:", options: ["a sentence with no verb", "a misplaced adjective", "two independent clauses joined only by a comma", "a missing article"], answer: 2, rationale: "A comma splice wrongly joins two independent clauses with only a comma." },
      { type: "mcq", q: "The pattern for a wh- question is:", options: ["wh-word + subject + operator + verb", "wh-word + operator + subject + main verb", "operator + wh-word + verb + subject", "subject + verb + wh-word"], answer: 1, rationale: "Standard wh- questions follow wh-word + operator + subject + main verb ('Where does it hurt?')." },
      { type: "mcq", q: "Which sentence shows faulty parallelism?", options: ["The nurse assessed, documented and reported.", "The nurse assessed, documented and was informing the doctor.", "The nurse assessed and documented.", "The nurse assessed, documented, and reported the findings."], answer: 1, rationale: "'Assessed, documented and was informing' mixes simple past with past continuous, breaking parallel structure." },
      { type: "mcq", q: "Which is a complex sentence?", options: ["The wound was clean.", "The wound was clean and it was dry.", "Because the patient was hypotensive, the infusion was slowed.", "The wound was clean; it was dry."], answer: 2, rationale: "A subordinate clause ('Because the patient was hypotensive') plus a main clause forms a complex sentence." },
      { type: "mcq", q: "Which is the standard (non-double-negative) form?", options: ["She hasn't got no pain.", "She hasn't got any pain.", "She hasn't got none pain.", "She not got no pain."], answer: 1, rationale: "Standard English avoids double negatives: 'hasn't got any pain'." },
      { type: "mcq", q: "'Bleeding heavily, the nurse assessed the patient' contains a:", options: ["run-on", "comma splice", "misplaced/dangling modifier", "fragment"], answer: 2, rationale: "The modifier 'bleeding heavily' wrongly attaches to 'the nurse' instead of the patient." },
      { type: "mcq", q: "To form a yes/no question from 'She can walk', you:", options: ["add do-support: Does she can walk?", "add -s: Cans she walk?", "use did: Did she can walk?", "invert the modal: Can she walk?"], answer: 3, rationale: "An existing modal inverts with the subject: 'Can she walk?'." },
      { type: "fill", q: "Questions and negatives are built with an operator, usually an ______ or modal verb.", accept: ["auxiliary"], rationale: "The auxiliary/modal operator carries tense and number and inverts or takes 'not'." },
      { type: "fill", q: "Two independent clauses joined with no proper connector form a ______ sentence (or comma splice).", accept: ["run-on", "run on", "runon"], rationale: "A run-on (or comma splice) fuses independent clauses without adequate punctuation or a conjunction." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "ce-06-adjectives-prepositions",
    unit: "Unit 2 · Vocabulary & Word-Building",
    title: "Adjectives, Adverbs, Comparison & Prepositions",
    readMinutes: 16,
    summary: "Attributive and predicative adjectives, adjective order, gradable and non-gradable adjectives, adverb formation and position, comparative and superlative structures, and prepositions of time, place, movement and dependent prepositions in clinical description.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Adjectives: attributive and predicative", p: "Adjectives modify nouns to convey quality, quantity, degree or condition. They occur attributively before the noun ('a febrile patient', 'a sterile field') and predicatively after a linking verb ('The patient is febrile', 'The wound looks clean'). Unlike many languages, English adjectives do not inflect for number or gender ('one clean towel', 'two clean towels'). Precise adjective choice makes clinical description accurate and vivid." },
      { h: "Order of adjectives", p: "When several adjectives modify one noun, English follows a conventional order: opinion → size → age → shape → colour → origin → material → purpose. Thus 'a small round white tablet', not 'a white round small tablet'. Native intuition follows this order automatically; second-language writers benefit from knowing it explicitly for natural-sounding professional description." },
      { h: "Gradable and non-gradable adjectives", p: "Gradable adjectives describe qualities on a scale and take grading adverbs (very, quite, slightly): 'very tired', 'slightly breathless'. Non-gradable (absolute or classifying) adjectives describe qualities that are all-or-nothing and pair with 'absolutely/completely' rather than 'very': 'completely unconscious', 'absolutely sterile' — not 'very unconscious'. Recognising this prevents unnatural or imprecise clinical wording." },
      { h: "Adverbs: types and formation", p: "Adverbs modify verbs, adjectives, other adverbs or whole sentences, expressing manner, place, time, frequency and degree. Many manner adverbs derive from adjectives by adding -ly (careful → carefully; rapid → rapidly), with spelling changes (easy → easily; gentle → gently). Some words are both adjective and adverb (fast, hard, late), and 'well' is the adverb of 'good'. A few -ly words are adjectives, not adverbs (friendly, lonely, likely)." },
      { h: "Adverb position", p: "Position affects meaning and naturalness. Manner adverbs usually follow the verb or object ('She examined the wound carefully'); frequency adverbs go before the main verb but after 'be' ('He rarely complains', 'She is always punctual'); and sentence adverbs open the clause to comment on the whole statement ('Fortunately, the bleeding stopped'). Misplacing 'only' can change meaning ('Only the nurse checked the dose' vs 'The nurse only checked the dose')." },
      { h: "Comparative and superlative structures", p: "Comparatives compare two entities with 'than'; short adjectives add -er (cleaner, bigger — with doubling), longer ones use 'more' (more comfortable, more experienced). Superlatives pick out the extreme among three or more, using -est or 'most' with 'the' (the cleanest ward, the most experienced nurse). Irregular forms: good/better/best, bad/worse/worst, far/further/furthest. Equality uses 'as … as' ('as stable as yesterday'), and parallel increase uses 'the … the' ('The higher the fever, the greater the fluid loss')." },
      { h: "Prepositions of time, place and movement", list: [
        "Time — at (clock time: at 08:00), on (day/date: on Monday, on 5 May), in (month/year/part of day: in May, in the morning); also before, after, during, for, since, until.",
        "Place — at (a point: at the bedside), in (an enclosed space/area: in the ward), on (a surface: on the chart); plus under, over, between, beside, above, below.",
        "Movement/direction — to, into, onto, out of, towards, through, from — 'The patient was moved from the trolley onto the bed'."
      ] },
      { h: "Dependent prepositions and nursing precision", p: "Many verbs, adjectives and nouns take a fixed 'dependent' preposition that must be learned as a unit: suffer FROM (a disease), complain OF (a symptom), allergic TO, dependent ON, at risk OF, responsible FOR, prescribe FOR. Errors here distort meaning ('complain of chest pain' is correct; 'complain from' is not). Because these collocations recur constantly in histories and records, accurate use of dependent prepositions is a hallmark of professional clinical English." }
    ],
    references: REF_CE,
    examQuestions: [
      "Distinguish attributive and predicative adjectives and state the conventional order of adjectives.",
      "Explain gradable versus non-gradable adjectives with clinical examples of the grading adverbs each takes.",
      "Describe adverb formation and position, showing how the placement of 'only' changes meaning.",
      "Explain the formation of comparatives and superlatives, including three irregular forms and the 'as … as' structure.",
      "Define dependent prepositions and give five verb/adjective + preposition collocations common in nursing."
    ],
    assessment: [
      { type: "mcq", q: "Which follows the conventional order of adjectives?", options: ["a white round small tablet", "a small round white tablet", "a round white small tablet", "a white small round tablet"], answer: 1, rationale: "The order is size → shape → colour: 'a small round white tablet'." },
      { type: "mcq", q: "Which pairing is correct for a non-gradable (absolute) adjective?", options: ["very unconscious", "completely unconscious", "quite unconscious", "slightly sterile"], answer: 1, rationale: "Non-gradable adjectives take 'completely/absolutely', not 'very': 'completely unconscious'." },
      { type: "mcq", q: "Choose the correct dependent preposition: 'The patient is allergic ___ penicillin.'", options: ["from", "with", "to", "of"], answer: 2, rationale: "'Allergic to' is the fixed collocation." },
      { type: "mcq", q: "Which is the adverb of 'good'?", options: ["goodly", "better", "well", "gooder"], answer: 2, rationale: "'Well' is the irregular adverb corresponding to the adjective 'good'." },
      { type: "mcq", q: "Choose the correct comparative structure:", options: ["This ward is more cleaner than that one.", "This ward is cleaner than that one.", "This ward is most clean than that one.", "This ward is cleanest than that one."], answer: 1, rationale: "Short adjectives form the comparative with -er + than: 'cleaner than'." },
      { type: "mcq", q: "'The patient complains ___ chest pain' takes which preposition?", options: ["from", "of", "with", "about"], answer: 1, rationale: "The fixed collocation is 'complain of' a symptom." },
      { type: "mcq", q: "Where does a frequency adverb normally go: 'He ___ complains.'", options: ["complains rarely always", "rarely complains", "complains rarely and", "rarely is complains"], answer: 1, rationale: "Frequency adverbs precede the main verb: 'rarely complains'." },
      { type: "mcq", q: "Which sentence uses the parallel-increase structure correctly?", options: ["More the fever, more the fluid loss.", "The higher the fever, the greater the fluid loss.", "Higher the fever than the fluid loss.", "The fever higher, fluid loss greater."], answer: 1, rationale: "The 'the … the' comparative structure: 'The higher the fever, the greater the fluid loss'." },
      { type: "mcq", q: "Choose the correct preposition of place: 'The chart is ___ the bedside.'", options: ["in", "on", "at", "into"], answer: 2, rationale: "'At' marks a specific point: 'at the bedside'." },
      { type: "mcq", q: "'Only the nurse checked the dose' means:", options: ["the nurse did nothing but check", "no one except the nurse checked it", "the nurse checked it only once", "the dose alone was checked"], answer: 1, rationale: "Placed before 'the nurse', 'only' restricts the subject: no one else checked." },
      { type: "fill", q: "Gradable adjectives take grading adverbs such as 'very' and '______'.", accept: ["quite", "slightly", "rather"], rationale: "Gradable adjectives combine with 'very', 'quite', 'slightly', etc." },
      { type: "fill", q: "The fixed preposition after 'suffer' when naming a disease is ______.", accept: ["from"], rationale: "'Suffer from' a disease is the standard dependent-preposition collocation." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "ce-07-vocabulary-terminology",
    unit: "Unit 2 · Vocabulary & Word-Building",
    title: "Vocabulary, Word-Building & Medical Terminology",
    readMinutes: 18,
    summary: "Systematic vocabulary growth through affixation and word families, synonyms/antonyms and collocation, phrasal verbs and idioms, and the structured analysis of medical terminology via roots, prefixes, suffixes and combining vowels.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Vocabulary as a system, not a list", p: "At degree level, vocabulary is built strategically rather than memorised word by word. Effective techniques include wide reading and listening, inferring meaning from context, keeping a structured vocabulary record (word, part of speech, collocation, example), learning words in families and by topic, and understanding word-formation so that a single root unlocks many words. A large, accurate vocabulary directly improves reading speed, writing precision and confident speech." },
      { h: "Affixation: prefixes and suffixes", p: "Most English (and medical) vocabulary is built by adding affixes to a base. Prefixes attach to the front and usually change meaning: un-/in-/im-/dis- ('not': unstable, incorrect, disorder), re- ('again': readmit), pre-/post- ('before/after': preoperative, postnatal), over-/under- (excess/deficiency). Suffixes attach to the end and usually change word class: -tion/-ment/-ness form nouns (infection, treatment, weakness), -ise/-ify form verbs (sterilise, clarify), -ful/-less/-able form adjectives (careful, painless, treatable), and -ly forms adverbs." },
      { h: "Word families and word classes", p: "A single root generates a family across the word classes, and skilled writers move between them: care (noun) → care (verb) → careful (adjective) → carefully (adverb) → careless (opposite adjective); or medicate → medication → medical → medically. Recognising the family lets the nurse pick the exact form the sentence requires ('a careful assessment' vs 'assess carefully') and expands active vocabulary rapidly." },
      { h: "Synonyms, antonyms and register", p: "Synonyms (words of similar meaning) allow variety and precise register: 'ill/sick/unwell', 'doctor/physician', 'big/large/enlarged'. They are rarely identical, differing in formality and connotation — 'enlarged' is clinical, 'big' is informal. Antonyms (opposites) express contrast (increase/decrease, acute/chronic, benign/malignant). Choosing the right synonym for the reader — technical for colleagues, plain for patients — is central to professional communication." },
      { h: "Collocation", p: "Collocations are word partnerships that sound natural to fluent speakers: we 'administer' (not 'give in') a drug, 'take' a history, 'run' a test, 'raise' concerns, 'severe pain', 'strong evidence'. Learning words with their typical partners produces idiomatic, professional English and avoids awkward literal translations. Clinical English is dense with fixed collocations, so noting them is a high-value study habit." },
      { h: "Phrasal verbs and idioms", p: "Phrasal verbs combine a verb with a particle to form a new meaning often unpredictable from the parts: 'look after' (care for), 'come round' (regain consciousness), 'pass away' (die), 'fill in/out' (complete a form), 'take off' (remove), 'set in' (begin, of something unpleasant). Idioms are fixed figurative expressions ('under the weather' = unwell; 'on the mend' = recovering). Both make speech natural but should be used cautiously with patients, especially non-native speakers who may interpret them literally." },
      { h: "The structure of medical terminology", p: "Medical terms are built systematically from Greek and Latin elements: a WORD ROOT gives the core meaning (usually a body part: cardi- heart, nephr- kidney, hepat- liver, gastr- stomach), a PREFIX may modify it (a- without, hyper- excessive, brady- slow), a SUFFIX gives the condition or procedure (-itis inflammation, -ectomy removal, -ostomy opening, -pathy disease, -aemia blood condition), and a COMBINING VOWEL (usually -o-) links elements for pronunciation. Thus gastr-o-enter-o-logy = study of stomach and intestines; nephr-itis = inflammation of the kidney.", figure: {
        caption: "Figure 7.1 — Anatomy of a medical term: prefix + root + combining vowel + suffix.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Structure of a medical term"><rect x="20" y="30" width="110" height="55" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="75" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">PREFIX</text><text x="75" y="73" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">peri- (around)</text><rect x="135" y="30" width="120" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="195" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">ROOT</text><text x="195" y="73" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">card- (heart)</text><rect x="260" y="30" width="95" height="55" rx="8" fill="#F0FDF4" stroke="#22C55E" stroke-width="2"/><text x="307" y="50" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">COMBINING</text><text x="307" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">VOWEL</text><text x="307" y="80" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">-i-</text><rect x="360" y="30" width="120" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="420" y="54" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">SUFFIX</text><text x="420" y="73" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">-um (structure)</text><text x="250" y="115" text-anchor="middle" font-family="sans-serif" font-size="12" font-style="italic" fill="#0F4C3A">peri- + card- + -i- + -um = pericardium (structure around the heart)</text></svg>'
      } },
      { h: "Analysing and applying medical terms", p: "To decode an unfamiliar term, read the SUFFIX first, then the prefix, then the root(s): 'hepat-o-megaly' → -megaly (enlargement) + hepat- (liver) = enlargement of the liver. This analytic method lets the nurse understand and spell hundreds of terms without rote memorising each one, and to distinguish easily confused pairs (hypertension vs hypotension; -ostomy an opening vs -otomy an incision). Accurate terminology is critical for safe documentation and inter-professional communication, while patient-facing explanation should translate the term into plain language." }
    ],
    references: REF_CE,
    examQuestions: [
      "Describe four strategies for systematic vocabulary development at degree level.",
      "Explain how prefixes and suffixes change the meaning and word class of a base, with medical examples.",
      "Define collocation and give five collocations common in clinical English.",
      "Explain the four building blocks of a medical term and analyse two example terms.",
      "Describe the recommended order for decoding an unfamiliar medical term and apply it to 'hepatomegaly'."
    ],
    assessment: [
      { type: "mcq", q: "In building a medical term, the element that usually carries the core meaning (often a body part) is the:", options: ["prefix", "suffix", "word root", "combining vowel"], answer: 2, rationale: "The word root gives the core meaning, typically a body part (cardi-, nephr-, hepat-)." },
      { type: "mcq", q: "The suffix '-ectomy' means:", options: ["inflammation", "surgical removal", "an opening", "disease"], answer: 1, rationale: "'-ectomy' denotes surgical removal (e.g. appendectomy)." },
      { type: "mcq", q: "The recommended order for decoding a medical term is:", options: ["prefix, root, suffix", "suffix, prefix, root", "root, prefix, suffix", "combining vowel first"], answer: 1, rationale: "Read the suffix first, then the prefix, then the root: -megaly + hepat- = liver enlargement." },
      { type: "mcq", q: "Which is a natural clinical COLLOCATION?", options: ["administer a drug", "give in a drug", "do a drug", "make a drug to the patient"], answer: 0, rationale: "'Administer a drug' is the standard collocation; the others are unidiomatic." },
      { type: "mcq", q: "The prefix 'brady-' means:", options: ["fast", "excessive", "slow", "without"], answer: 2, rationale: "'Brady-' means slow (e.g. bradycardia); 'tachy-' means fast." },
      { type: "mcq", q: "Adding '-less' to 'pain' produces the adjective meaning:", options: ["full of pain", "causing pain", "study of pain", "without pain"], answer: 3, rationale: "The suffix -less means 'without': painless = without pain." },
      { type: "mcq", q: "Which pair are ANTONYMS?", options: ["ill / sick", "acute / chronic", "big / large", "physician / doctor"], answer: 1, rationale: "'Acute' and 'chronic' are opposites; the other pairs are synonyms." },
      { type: "mcq", q: "The combining vowel in a medical term is used mainly to:", options: ["change the meaning of the root", "link word elements for easier pronunciation", "form the plural", "indicate the tense"], answer: 1, rationale: "The combining vowel (usually -o-) links elements so the term is pronounceable." },
      { type: "mcq", q: "The phrasal verb 'come round' means:", options: ["to die", "to regain consciousness", "to complete a form", "to remove"], answer: 1, rationale: "'Come round' means to regain consciousness after fainting or anaesthesia." },
      { type: "mcq", q: "'-ostomy' differs from '-otomy' in that '-ostomy' means:", options: ["an incision", "an inflammation", "a creation of an opening", "an enlargement"], answer: 2, rationale: "'-ostomy' is the surgical creation of an opening; '-otomy' is a cutting/incision." },
      { type: "fill", q: "A word partnership that sounds natural to fluent speakers (e.g. 'severe pain') is called a ______.", accept: ["collocation"], rationale: "Collocations are conventional word pairings that make English idiomatic." },
      { type: "fill", q: "The suffix '-itis' means ______.", accept: ["inflammation"], rationale: "'-itis' denotes inflammation (arthritis, nephritis, appendicitis)." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "ce-08-reading-notetaking",
    unit: "Unit 3 · Language Skills",
    title: "Reading Comprehension & Note-Taking from Nursing Texts",
    readMinutes: 17,
    summary: "Reading purposes and micro-skills, the SQ3R study method, critical reading of nursing journals, distinguishing fact from opinion, and effective note-taking and summarising techniques (linear, Cornell and mind-mapping) for study and evidence-based practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Reading as an active, purposeful skill", p: "At degree level, reading is not passive decoding but an active search for meaning shaped by purpose. Nurses read to locate specific data (a dose, a value), to grasp the overall argument of a paper, to study procedures in depth, and to appraise research critically. Efficient readers match their technique to the purpose and interact with the text — questioning, predicting and connecting it to prior knowledge — rather than reading every text the same way." },
      { h: "Reading micro-skills", list: [
        "Skimming — rapid reading for the gist or main idea, using titles, headings, topic sentences and abstracts.",
        "Scanning — searching quickly for a specific item of information (a name, dose, date or result).",
        "Intensive reading — slow, careful reading of a procedure or difficult passage for full, exact understanding.",
        "Extensive reading — wide reading of longer texts (journals, books) to build knowledge and vocabulary.",
        "Inferring — deducing implied meaning and working out unknown words from context and word parts."
      ] },
      { h: "The SQ3R study-reading method", p: "SQ3R is a systematic method for reading academic texts: Survey (skim headings, summary and figures to preview), Question (turn headings into questions to guide reading), Read (read actively to answer those questions), Recite (recall and restate the key points in your own words), and Review (revisit to consolidate). This structured approach greatly improves comprehension and retention of nursing textbook material compared with linear re-reading.", figure: {
        caption: "Figure 8.1 — The SQ3R active reading cycle for study.",
        svg: '<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SQ3R reading method steps"><defs><marker id="ceArr8" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="8" y="35" width="95" height="45" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="55" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Survey</text><text x="55" y="71" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">preview</text><rect x="118" y="35" width="95" height="45" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="165" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Question</text><text x="165" y="71" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">ask</text><rect x="228" y="35" width="95" height="45" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="275" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Read</text><text x="275" y="71" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">actively</text><rect x="338" y="35" width="95" height="45" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="385" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Recite</text><text x="385" y="71" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">restate</text><rect x="448" y="35" width="95" height="45" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="495" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Review</text><text x="495" y="71" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">consolidate</text><line x1="103" y1="57" x2="116" y2="57" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ceArr8)"/><line x1="213" y1="57" x2="226" y2="57" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ceArr8)"/><line x1="323" y1="57" x2="336" y2="57" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ceArr8)"/><line x1="433" y1="57" x2="446" y2="57" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ceArr8)"/></svg>'
      } },
      { h: "Critical reading of nursing literature", p: "Evidence-based practice requires the nurse to read journal articles critically rather than accept them at face value. Critical reading asks: What is the author's aim and main claim? What evidence is offered, and is it sufficient and reliable? Is the reasoning sound, or are there gaps and bias? How current and relevant is the study? Recognising the parts of a research paper (abstract, introduction, methods, results, discussion) helps the reader locate and appraise each element efficiently." },
      { h: "Fact versus opinion; denotation and connotation", p: "A key critical skill is separating fact (verifiable, evidence-based statements) from opinion (the author's interpretation or value judgement), signalled by words like 'clearly', 'should', 'unfortunately'. Readers should also note denotation (a word's literal meaning) versus connotation (its emotional overtone) — 'thin' versus 'emaciated' — which can reveal an author's stance. These skills protect the nurse from being misled by persuasive but weakly supported writing." },
      { h: "Effective note-taking", p: "Notes convert reading into retrievable knowledge. Good notes are selective (main ideas and key evidence, not everything), organised, in the reader's own words to aid understanding, and use abbreviations, symbols and headings. They should always record the source (author, title, year, page) so the material can be cited and re-found — a habit that underpins honest academic writing and later evidence-based practice." },
      { h: "Note-taking systems", list: [
        "Linear notes — headings, sub-headings and indented points in sequence; simple and familiar.",
        "Cornell method — page split into a narrow cue column, a wide notes column and a bottom summary; excellent for review and recall.",
        "Mind-mapping / spider diagrams — a central topic with branching ideas; good for showing relationships and for revision.",
        "Charting/tables — for comparing items (e.g. drug classes, disease features) side by side."
      ] },
      { h: "Summarising and paraphrasing", p: "Summarising restates the essential points of a text briefly in one's own words; paraphrasing re-expresses a specific passage without changing its meaning. Both require full comprehension and are essential academic skills that also guard against plagiarism — the writer must transform the wording and structure, not merely swap a few synonyms, and must still credit the source. For nurses, accurate summarising underlies handovers, care-plan documentation and literature reviews." }
    ],
    references: REF_CE,
    examQuestions: [
      "Explain how reading technique should match reading purpose, defining skimming, scanning and intensive reading.",
      "Describe the five stages of the SQ3R study-reading method and its advantage over simple re-reading.",
      "What questions guide the critical reading of a nursing journal article?",
      "Distinguish fact from opinion and denotation from connotation, with examples.",
      "Compare three note-taking systems and explain the difference between summarising and paraphrasing."
    ],
    assessment: [
      { type: "mcq", q: "Rapid reading to grasp the general idea of a text is called:", options: ["scanning", "skimming", "intensive reading", "paraphrasing"], answer: 1, rationale: "Skimming is fast reading for the overall gist." },
      { type: "mcq", q: "In SQ3R, the stage where you turn headings into guiding questions is:", options: ["Survey", "Question", "Recite", "Review"], answer: 1, rationale: "The 'Question' stage converts headings into questions that direct active reading." },
      { type: "mcq", q: "Searching a drug chart quickly to find one specific dose is best done by:", options: ["skimming", "extensive reading", "scanning", "reciting"], answer: 2, rationale: "Scanning locates a specific item of information such as a dose." },
      { type: "mcq", q: "Which is an OPINION rather than a fact?", options: ["The patient's temperature was 38.5 °C.", "The drug was given at 08:00.", "The wound measured 3 cm.", "Unfortunately, staffing was inadequate."], answer: 3, rationale: "'Unfortunately … inadequate' is a value judgement/interpretation, not a verifiable fact." },
      { type: "mcq", q: "The Cornell note-taking method divides the page into:", options: ["one continuous column", "a cue column, a notes column and a summary", "a mind map only", "numbered lists only"], answer: 1, rationale: "Cornell notes use a cue column, a main notes column and a bottom summary for effective review." },
      { type: "mcq", q: "Paraphrasing correctly means:", options: ["copying the passage exactly", "changing a few words only", "re-expressing the meaning fully in your own words and structure, crediting the source", "leaving out the source"], answer: 2, rationale: "Genuine paraphrase transforms wording and structure while keeping meaning and citing the source." },
      { type: "mcq", q: "Which best describes critical reading?", options: ["accepting the author's claims", "questioning the aim, evidence, reasoning and bias of a text", "reading only the abstract", "reading aloud"], answer: 1, rationale: "Critical reading appraises the author's purpose, evidence, logic and possible bias." },
      { type: "mcq", q: "The emotional overtone of a word (e.g. 'emaciated' vs 'thin') is its:", options: ["denotation", "connotation", "collocation", "synonym"], answer: 1, rationale: "Connotation is the emotional/associative overtone; denotation is the literal meaning." },
      { type: "mcq", q: "Reading a clinical procedure slowly and carefully for exact understanding is:", options: ["skimming", "scanning", "intensive reading", "surveying"], answer: 2, rationale: "Intensive reading is slow, careful reading for complete and exact comprehension." },
      { type: "mcq", q: "A key habit that supports honest academic writing when taking notes is to:", options: ["copy everything word for word", "record the source (author, year, page)", "avoid headings", "never summarise"], answer: 1, rationale: "Recording the source enables correct citation and prevents plagiarism." },
      { type: "fill", q: "The SQ3R method stands for Survey, Question, Read, Recite and ______.", accept: ["review"], rationale: "SQ3R = Survey, Question, Read, Recite, Review." },
      { type: "fill", q: "Restating the essential points of a whole text briefly in your own words is called ______.", accept: ["summarising", "summarizing", "summary"], rationale: "Summarising condenses a text's main points into a brief restatement in one's own words." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "ce-09-listening",
    unit: "Unit 3 · Language Skills",
    title: "Listening Skills for Clinical Communication",
    readMinutes: 16,
    summary: "Hearing versus listening, top-down and bottom-up processing, features of connected speech, purposes and sub-skills of listening, active and empathic listening, barriers to listening, and the SBAR-structured handover as listening in practice.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Hearing versus listening", p: "Hearing is the passive physiological reception of sound; listening is the active cognitive process of attending to, interpreting and responding to meaning. Listening is the most used language skill in daily practice yet the least formally taught. For nurses, competent listening is a clinical safety skill — misheard drug names, doses or instructions cause real harm, and inattentive listening misses vital cues in a patient's account." },
      { h: "Top-down and bottom-up processing", p: "Listeners construct meaning through two complementary processes. Bottom-up processing decodes the incoming signal — individual sounds, words and grammar — building meaning from the parts. Top-down processing uses prior knowledge, context and expectation to interpret what is heard, predicting content and filling gaps. Skilled listeners integrate both: recognising the words while using clinical context to anticipate and confirm meaning." },
      { h: "Features of connected speech", p: "Natural spoken English is not a string of clearly separated words; it is 'connected speech' shaped by features that challenge learners: weak forms (unstressed 'and', 'to', 'of' reduced to /ən/, /tə/, /əv/), contractions ('he's', 'didn't'), linking (words run together: 'an_injection'), assimilation and elision (sounds changing or dropping). Understanding these features explains why fluent speech sounds fast and helps the listener decode real conversation and handovers." },
      { h: "Purposes and sub-skills of listening", list: [
        "Listening for gist — grasping the overall message or main point.",
        "Listening for specific information — catching a particular detail (a time, dose or name).",
        "Listening for detail — following an explanation or instruction fully and precisely.",
        "Inferential listening — perceiving attitude, emotion and implied meaning ('reading between the lines').",
        "Predicting — anticipating what the speaker will say next from context."
      ] },
      { h: "Active listening", p: "Active listening means giving full, deliberate attention to the speaker's meaning and feelings and showing it. Its components include attending (facing the speaker, appropriate eye contact, minimal distraction), encouraging (nods, 'mm', 'go on'), reflecting and paraphrasing ('So the pain started this morning?'), clarifying with questions, and summarising to confirm. These behaviours both improve accuracy and communicate respect and interest to the patient." },
      { h: "Empathic listening in nursing", p: "Beyond accuracy, empathic listening seeks to understand the patient's experience and emotion without judgement — attending to tone, hesitation and non-verbal cues as well as words. It builds therapeutic rapport, encourages disclosure of concerns, and often surfaces clinically important information that direct questioning misses. Silence, unhurried attention and acknowledging feelings ('That sounds frightening') are core techniques." },
      { h: "Barriers to listening and how to reduce them", p: "Listening is impaired by physical barriers (ward noise, poor acoustics, hearing impairment), physiological barriers (fatigue, pain, illness in either party), psychological barriers (anxiety, prejudice, preoccupation, planning one's reply instead of listening), and linguistic barriers (unfamiliar accents, fast speech, jargon). Nurses reduce these by choosing a quiet setting, facing the speaker, concentrating fully, allowing time, avoiding premature judgement, and confirming understanding by repeating back — especially for verbal orders." },
      { h: "Structured listening in handover (SBAR)", p: "In clinical handover, structured tools support accurate listening and speaking. SBAR — Situation, Background, Assessment, Recommendation — gives a predictable framework so the listener knows what information is coming and can capture it reliably. For safety-critical spoken orders (e.g. telephone orders), the listener uses read-back: repeating the order back to the speaker for confirmation. Structured formats reduce the listening burden and the risk of error." }
    ],
    references: REF_CE,
    examQuestions: [
      "Distinguish hearing from listening and explain why listening is a clinical safety skill.",
      "Explain top-down and bottom-up processing in listening comprehension.",
      "Describe the features of connected speech that make natural English hard to follow.",
      "List the components of active listening and explain empathic listening in nursing.",
      "Classify the barriers to listening and describe how the nurse can reduce each, referring to SBAR and read-back."
    ],
    assessment: [
      { type: "mcq", q: "The passive physiological reception of sound is:", options: ["listening", "hearing", "inferring", "predicting"], answer: 1, rationale: "Hearing is passive reception; listening is the active interpretation of meaning." },
      { type: "mcq", q: "Using prior knowledge and context to interpret and predict what is heard is:", options: ["bottom-up processing", "top-down processing", "elision", "assimilation"], answer: 1, rationale: "Top-down processing applies context and expectation; bottom-up decodes the sounds and words." },
      { type: "mcq", q: "Reducing 'and' to /ən/ in fast speech is an example of a:", options: ["weak form", "idiom", "collocation", "prefix"], answer: 0, rationale: "Unstressed function words take weak forms in connected speech (and → /ən/)." },
      { type: "mcq", q: "Catching just the appointment time from an announcement is listening for:", options: ["gist", "inference", "specific information", "attitude"], answer: 2, rationale: "Listening for a particular detail (a time) is listening for specific information." },
      { type: "mcq", q: "Which is a component of ACTIVE listening?", options: ["planning your reply while the patient talks", "paraphrasing to confirm understanding", "interrupting frequently", "avoiding eye contact"], answer: 1, rationale: "Reflecting/paraphrasing to confirm meaning is a core active-listening behaviour." },
      { type: "mcq", q: "Empathic listening primarily aims to:", options: ["correct the patient's grammar", "understand the patient's experience and emotion without judgement", "speed up the conversation", "record vital signs"], answer: 1, rationale: "Empathic listening seeks to understand the patient's feelings and experience non-judgementally." },
      { type: "mcq", q: "'Planning your answer instead of listening' is which type of barrier?", options: ["physical", "linguistic", "psychological", "physiological"], answer: 2, rationale: "Preoccupation and rehearsing a reply are psychological barriers to listening." },
      { type: "mcq", q: "In SBAR handover, 'R' stands for:", options: ["Report", "Recommendation", "Review", "Response"], answer: 1, rationale: "SBAR = Situation, Background, Assessment, Recommendation." },
      { type: "mcq", q: "For a safety-critical telephone order, the listener should:", options: ["assume it was correct", "write it later from memory", "read the order back for confirmation", "ignore unfamiliar terms"], answer: 2, rationale: "Read-back (repeating the order for confirmation) prevents mishearing errors." },
      { type: "mcq", q: "Words running together, such as 'an injection' sounding like 'a_ninjection', illustrates:", options: ["stress", "register", "a suffix", "linking"], answer: 3, rationale: "Linking joins the final and initial sounds of adjacent words in connected speech." },
      { type: "fill", q: "The active-listening technique of repeating a speaker's message back to confirm it is called ______ (or read-back).", accept: ["paraphrasing", "clarifying", "reflecting", "read-back", "readback"], rationale: "Paraphrasing/reflecting back confirms accurate understanding." },
      { type: "fill", q: "Decoding the incoming signal from individual sounds and words is called ______-up processing.", accept: ["bottom"], rationale: "Bottom-up processing builds meaning from the sounds and words upward." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "ce-10-speaking-presentation",
    unit: "Unit 3 · Language Skills",
    title: "Speaking, Pronunciation & Oral Presentation",
    readMinutes: 17,
    summary: "Fluency and accuracy, the phonemic system, word and sentence stress, intonation, connected speech, paralinguistic and non-verbal features, register and politeness, and the structure and delivery of an academic oral presentation.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Speaking: fluency and accuracy", p: "Speaking is a productive skill combining fluency (smooth, connected delivery at a natural pace) and accuracy (correct grammar, vocabulary and pronunciation). Effective speech also requires interactive competence — turn-taking, initiating and responding, and repairing misunderstandings. For the graduate nurse, spoken competence spans the bedside, the ward round, the classroom presentation and the professional meeting, each demanding an appropriate balance of fluency and precision." },
      { h: "The phonemic system", p: "English has around 44 phonemes (distinct sounds) — roughly 20 vowel sounds (including diphthongs) and 24 consonants — represented in the International Phonetic Alphabet. Because English spelling is irregular, the same letters can represent different sounds ('cough', 'though', 'through'), so learners benefit from focusing on sounds rather than spelling. Certain contrasts (for example /v/ and /w/, or long and short vowels) are common difficulties that, when mispronounced, can obscure meaning — including in drug names." },
      { h: "Word stress and sentence stress", p: "English is a stress-timed language. Word stress places emphasis on a particular syllable ('HOS-pi-tal', 're-COV-er'), and misplacing it can make a word unrecognisable or change its class ('REcord' the noun vs 're-CORD' the verb). Sentence stress emphasises the content words (nouns, main verbs, adjectives, adverbs) while reducing function words, giving English its characteristic rhythm and highlighting the most important information." },
      { h: "Intonation", p: "Intonation — the rise and fall of pitch across an utterance — conveys grammatical and attitudinal meaning. A falling tone typically marks statements and wh-questions and signals completeness; a rising tone often marks yes/no questions, uncertainty or politeness, and invites a response. Intonation also expresses emotion and emphasis. Appropriate intonation makes speech sound natural and reassuring; flat or misleading intonation can seem abrupt or confuse the listener about whether a question is being asked." },
      { h: "Paralinguistic and non-verbal features", p: "Meaning is carried by far more than words. Paralinguistic features include tone of voice, pace, volume, pitch and pausing; non-verbal (kinesic) features include facial expression, eye contact, gesture, posture, and proxemics (use of personal space and touch). In nursing, a calm tone, unhurried pace and open, warm body language reassure anxious patients even before words are processed, whereas a curt tone or closed posture can alarm — so these features must be managed consciously." },
      { h: "Register, politeness and appropriacy", p: "Register is the level of formality and style suited to the situation and audience — more formal with patients, officials and in presentations; more relaxed with close colleagues. Polite English softens directives with modals and mitigators ('Could you just roll onto your side, please?' rather than 'Roll over'), uses hedging where appropriate, and deploys formulaic phrases for greetings, requests, apologies and thanks. Matching register to context is essential for professional and therapeutic communication." },
      { h: "Structuring an oral presentation", p: "An academic presentation has a clear three-part structure: an introduction (greeting, topic, aim and outline/'signposting'), a body (main points in logical order, each supported and linked with signpost language such as 'firstly', 'moving on', 'in contrast'), and a conclusion (summary of key points, restated take-home message, and thanks/invitation for questions). Visual aids (slides) should be clear and uncluttered, supporting rather than replacing the spoken message.", figure: {
        caption: "Figure 10.1 — The three-part structure of an academic oral presentation.",
        svg: '<svg viewBox="0 0 560 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Presentation structure: introduction, body, conclusion"><rect x="20" y="35" width="150" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="95" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">INTRODUCTION</text><text x="95" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">topic, aim, outline</text><rect x="205" y="35" width="150" height="55" rx="8" fill="#22C55E" stroke="#15803D" stroke-width="2"/><text x="280" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">BODY</text><text x="280" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">points + signposting</text><rect x="390" y="35" width="150" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="465" y="58" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">CONCLUSION</text><text x="465" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">summary, questions</text></svg>'
      } },
      { h: "Delivering effectively and overcoming barriers", p: "Effective delivery depends on preparation and rehearsal, clear pronunciation and audible volume, varied pace with purposeful pauses, eye contact with the audience, and controlled body language. Common barriers — anxiety, reading aloud from notes, monotone delivery, speaking too fast — are overcome by practice, using brief cue cards rather than a script, breathing steadily, and focusing on communicating with the audience. For nurses, these skills transfer directly to patient teaching, in-service education and professional conferences." }
    ],
    references: REF_CE,
    examQuestions: [
      "Distinguish fluency from accuracy and explain interactive competence in speaking.",
      "Explain word stress, sentence stress and intonation, giving an example of how each affects meaning.",
      "Describe paralinguistic and non-verbal features and their importance in nursing communication.",
      "Explain register and politeness and give three ways to soften a directive to a patient.",
      "Describe the three-part structure of an oral presentation and the signpost language used within it."
    ],
    assessment: [
      { type: "mcq", q: "Speaking smoothly and at a natural pace is called:", options: ["accuracy", "fluency", "register", "intonation"], answer: 1, rationale: "Fluency is smooth, connected delivery; accuracy is correctness of form." },
      { type: "mcq", q: "English has approximately how many phonemes?", options: ["26", "20", "44", "60"], answer: 2, rationale: "English has around 44 phonemes (about 20 vowel sounds and 24 consonants)." },
      { type: "mcq", q: "The difference between 'REcord' (noun) and 're-CORD' (verb) is one of:", options: ["intonation", "word stress", "register", "volume"], answer: 1, rationale: "Shifting the stressed syllable changes the word class — a matter of word stress." },
      { type: "mcq", q: "A rising intonation most often signals:", options: ["a completed statement", "a yes/no question or uncertainty", "a command", "a full stop"], answer: 1, rationale: "Rising tone typically marks yes/no questions, uncertainty or politeness." },
      { type: "mcq", q: "Use of personal space and distance in communication is called:", options: ["proxemics", "phonemics", "register", "elision"], answer: 0, rationale: "Proxemics is the non-verbal use of personal space and distance." },
      { type: "mcq", q: "Which is the most polite directive to a patient?", options: ["Roll over now.", "You must roll over.", "Could you roll onto your side, please?", "Roll."], answer: 2, rationale: "A modal + mitigator ('Could you … please?') softens the directive politely." },
      { type: "mcq", q: "In a presentation, phrases like 'firstly', 'moving on' and 'in contrast' are examples of:", options: ["signpost language", "idioms", "weak forms", "collocations"], answer: 0, rationale: "Signpost language guides the audience through the structure of the talk." },
      { type: "mcq", q: "English sentence stress usually falls on:", options: ["function words (articles, prepositions)", "content words (nouns, main verbs, adjectives)", "every syllable equally", "the last word only"], answer: 1, rationale: "Content words carry sentence stress; function words are reduced." },
      { type: "mcq", q: "The introduction of an academic presentation should include the:", options: ["detailed data tables", "topic, aim and outline (signposting)", "closing thanks", "reference list only"], answer: 1, rationale: "A good introduction states the topic, aim and outline to orient the audience." },
      { type: "mcq", q: "A common way to overcome presentation anxiety and monotone delivery is to:", options: ["read the whole script word for word", "rehearse and use brief cue cards with varied pace", "speak as fast as possible", "avoid eye contact"], answer: 1, rationale: "Rehearsal, cue cards and varied pace/eye contact improve delivery and reduce anxiety." },
      { type: "fill", q: "The rise and fall of pitch across an utterance is called ______.", accept: ["intonation"], rationale: "Intonation is the pitch movement that conveys grammatical and attitudinal meaning." },
      { type: "fill", q: "The level of formality chosen to suit the audience and situation is called ______.", accept: ["register"], rationale: "Register is the situational level of formality and style." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "ce-11-academic-writing",
    unit: "Unit 4 · Academic & Professional Writing",
    title: "Academic Writing: Paragraphs, Essays, Letters, Application & CV",
    readMinutes: 18,
    summary: "The writing process, paragraph and essay architecture, cohesion and coherence, spelling and punctuation, the conventions of formal and business letters, and the job application letter and curriculum vitae for the graduate nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Writing as a recursive process", p: "Skilled academic writing is a recursive process rather than a single linear act. The stages are: planning (analysing purpose, audience and question; generating and organising ideas), drafting (producing a first version focused on content), revising (reworking structure, argument and clarity — the most important stage), and editing/proofreading (correcting grammar, spelling, punctuation and formatting). Writers move back and forth between these stages. For nurses, disciplined process produces the clear, accurate documents that safe practice and academic study demand." },
      { h: "The paragraph", p: "A paragraph develops one main idea and is the building block of extended writing. A well-formed paragraph has a topic sentence stating the controlling idea, supporting sentences that explain, exemplify or provide evidence, and often a concluding or linking sentence. Good paragraphs show unity (everything relates to the one idea) and adequate development (enough support). Learning to write a single strong paragraph underpins the ability to write essays, reports and reflective accounts." },
      { h: "The essay / composition", p: "An academic essay extends the paragraph principle across a whole text: an introduction (context, thesis statement and scope), a body of several paragraphs each advancing one point in logical order, and a conclusion that synthesises the argument and restates the thesis without introducing new material. Different essay types (descriptive, narrative, expository, argumentative) shape the organisation. A clear thesis and logical progression distinguish degree-level writing from mere description." },
      { h: "Cohesion and coherence", p: "Coherence is the overall logical flow of ideas; cohesion is the surface linkage that signals it. Cohesive devices include linking/transition words (however, therefore, moreover, in contrast, consequently), reference words (this, it, such, the former), and consistent tense and terminology. Skilled use of these devices guides the reader through the argument. Overusing or misusing connectors, however, makes writing clumsy — they should mark genuine logical relationships." },
      { h: "Spelling, punctuation and mechanics", p: "Accurate mechanics give writing clarity and credibility. Beyond the full stop and capital letter, degree-level writing controls the comma (separating items and clauses, and after introductory elements), the semicolon (joining closely related independent clauses), the colon (introducing lists or explanations), the apostrophe (possession and contractions — a frequent error, e.g. its/it's, patients/patient's/patients'), and quotation marks. British spelling conventions and consistency are expected in academic and clinical documents." },
      { h: "Formal and business letters", p: "A formal/business letter follows a fixed layout: sender's address and date, recipient's name/title and address, a salutation ('Dear Sir/Madam' or 'Dear Ms Rahman'), a clear subject line, body paragraphs (purpose, details, action requested), and a complimentary close ('Yours faithfully' with 'Dear Sir/Madam'; 'Yours sincerely' when the name is used), followed by signature and printed name. The tone is formal, concise and courteous. Nurses write such letters for leave, complaints, requests and official correspondence." },
      { h: "The application (cover) letter", p: "A job application or cover letter accompanies the CV and persuades the employer to consider the applicant. It typically has an opening (the post applied for and where it was seen), a middle (relevant qualifications, clinical experience and skills matched to the job, and motivation for applying), and a close (availability, thanks and a request for interview). It should be tailored to the specific post, error-free, and no longer than one page, complementing rather than repeating the CV." },
      { h: "The curriculum vitae (CV)", p: "A CV is a structured summary of a candidate's qualifications and experience. Standard sections include personal/contact details, a brief professional profile or objective, education and qualifications (most recent first — reverse chronological order), registration/licensure, clinical and work experience, skills and competencies, and references (or 'available on request'). It should be clear, well laid out, truthful, and tailored to nursing posts, emphasising relevant clinical placements, certifications and achievements. Consistent formatting and absolute accuracy are essential — errors undermine a professional impression." }
    ],
    references: REF_CE,
    examQuestions: [
      "Describe the four stages of the writing process and explain why revising is the most important.",
      "Explain the structure of a well-formed paragraph and of an academic essay.",
      "Distinguish coherence from cohesion and list the main cohesive devices.",
      "Describe the layout and conventions of a formal/business letter, including the salutation-close pairing.",
      "Explain the purpose and content of an application letter and a curriculum vitae for a graduate nurse."
    ],
    assessment: [
      { type: "mcq", q: "The most important stage of the writing process, where structure and argument are reworked, is:", options: ["planning", "drafting", "revising", "printing"], answer: 2, rationale: "Revising reworks content, organisation and clarity and is the pivotal stage of good writing." },
      { type: "mcq", q: "The sentence stating the controlling idea of a paragraph is the:", options: ["thesis statement", "topic sentence", "concluding sentence", "salutation"], answer: 1, rationale: "The topic sentence states the paragraph's main (controlling) idea." },
      { type: "mcq", q: "In a formal letter beginning 'Dear Sir/Madam', the correct close is:", options: ["Yours sincerely", "Best wishes", "Yours faithfully", "Cheers"], answer: 2, rationale: "With 'Dear Sir/Madam' (name unknown), the correct close is 'Yours faithfully'." },
      { type: "mcq", q: "Words such as 'however', 'therefore' and 'in contrast' are:", options: ["cohesive/transition devices", "topic sentences", "salutations", "phonemes"], answer: 0, rationale: "These transition words link ideas and provide cohesion." },
      { type: "mcq", q: "Which apostrophe use is correct for a single patient's belongings?", options: ["the patients belongings", "the patient's belongings", "the patients' belongings", "the patient's belonging's"], answer: 1, rationale: "Singular possessive adds apostrophe + s: 'the patient's belongings'." },
      { type: "mcq", q: "Education in a CV is conventionally listed:", options: ["alphabetically", "in reverse chronological order (most recent first)", "randomly", "oldest first"], answer: 1, rationale: "CV education/experience is listed reverse-chronologically, most recent first." },
      { type: "mcq", q: "The conclusion of an academic essay should:", options: ["introduce a major new argument", "list references only", "synthesise the argument and restate the thesis", "apologise for weaknesses"], answer: 2, rationale: "A conclusion synthesises and restates without introducing new material." },
      { type: "mcq", q: "An application (cover) letter should ideally be:", options: ["as long as possible", "tailored to the post and about one page", "identical for every job", "a copy of the CV"], answer: 1, rationale: "It should be tailored, concise (about one page) and complement, not repeat, the CV." },
      { type: "mcq", q: "The punctuation mark best used to join two closely related independent clauses is the:", options: ["comma", "semicolon", "apostrophe", "hyphen"], answer: 1, rationale: "A semicolon links closely related independent clauses without a conjunction." },
      { type: "mcq", q: "Coherence in writing refers to:", options: ["correct spelling", "the length of the essay", "the overall logical flow of ideas", "the font used"], answer: 2, rationale: "Coherence is the logical connectedness of ideas; cohesion is its surface signalling." },
      { type: "fill", q: "A paragraph should show ______ — everything in it relates to one main idea.", accept: ["unity"], rationale: "Unity means all sentences support the single controlling idea." },
      { type: "fill", q: "When the recipient's name is used in the salutation, the correct close is 'Yours ______.'", accept: ["sincerely"], rationale: "'Dear Ms Rahman' pairs with 'Yours sincerely'." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "ce-12-professional-writing",
    unit: "Unit 4 · Academic & Professional Writing",
    title: "Report Writing, Editing, Proof-Reading & Meeting Minutes",
    readMinutes: 17,
    summary: "The purpose and structure of reports, clinical incident and nursing reports, the principles of good documentation, the distinct tasks of editing and proof-reading, common proof-reading marks and errors, and the conventions of agendas and meeting minutes.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The purpose and qualities of a report", p: "A report is a structured, factual document written for a specific reader and purpose — to inform a decision, record events, or present findings. Unlike an essay, it uses headings, numbered sections and sometimes tables so information can be located quickly. The qualities of a good report are accuracy, objectivity, clarity, conciseness, logical organisation and appropriate format. In nursing, reports range from shift and incident reports to project and research reports." },
      { h: "Structure of a formal report", p: "A formal report typically contains: a title and author/date; terms of reference or aim; a summary/abstract of key points; an introduction (background and scope); the main body (findings arranged under headings); conclusions drawn from the findings; recommendations for action; and, where relevant, references and appendices. Numbering sections and using clear headings lets the reader navigate and act on the report efficiently." },
      { h: "Clinical and incident reports", p: "Clinical reports and incident (occurrence) reports document care and events factually and objectively. An incident report records what happened, when, where, who was involved and what action was taken — stating observed facts, not blame or speculation. Good clinical documentation is contemporaneous (written at or near the time), accurate, objective, legible, dated, timed and signed, and free of unapproved abbreviations. Because records are legal documents, poor reporting has clinical and medico-legal consequences." },
      { h: "Principles of good documentation", list: [
        "Factual and objective — record what is observed and done, not opinion or judgement.",
        "Accurate and specific — exact times, values and terms; avoid vague words.",
        "Timely (contemporaneous) — write at or near the time of the event.",
        "Legible and permanent — clear handwriting or correct electronic entry; no erasing (strike a single line through errors and initial).",
        "Complete, dated, timed and signed — with the writer identifiable and accountable."
      ] },
      { h: "Editing versus proof-reading", p: "Editing and proof-reading are distinct final tasks. Editing works on the substance and expression — checking content, organisation, clarity, tone, word choice and sentence structure, and cutting redundancy. Proof-reading is the last, surface-level check for mechanical errors — spelling, punctuation, grammar, typos, numbering and formatting consistency — carried out after editing is complete. Doing them separately (edit first, then proof-read) is more reliable than trying to catch everything at once." },
      { h: "Proof-reading strategies and common errors", p: "Effective proof-reading techniques include reading slowly and aloud, reading one line at a time or backwards for spelling, checking one error type at a time, allowing time between writing and checking, and using but not blindly trusting spell-checkers (which miss correct-but-wrong words like 'there/their', 'affect/effect', 'trial/trail'). Standard proof-reading marks (delete, insert, transpose, close up, new paragraph) allow corrections to be marked clearly on drafts. Careful proof-reading is critical where an error — a misplaced decimal in a dose — could harm a patient." },
      { h: "Meeting documents: notice and agenda", p: "Formal meetings are supported by written documents. The notice announces the meeting (date, time, place); the agenda lists, in order, the items to be discussed — conventionally: apologies for absence, minutes of the previous meeting, matters arising, the main business items, any other business (AOB) and the date of the next meeting. A clear agenda keeps the meeting focused and allows participants to prepare, and it provides the framework for the minutes." },
      { h: "Writing meeting minutes", p: "Minutes are the official written record of a meeting. They record factual essentials: the title of the meeting, date/time/place, those present and apologies, the discussion and — most importantly — the decisions made and the actions agreed, including who is responsible and by when. Minutes are written concisely in the past tense and reported (indirect) speech, objectively and without personal comment. Accurate minutes provide accountability and continuity — valuable in ward meetings, committees and quality-improvement work in nursing." }
    ],
    references: REF_CE,
    examQuestions: [
      "Distinguish a report from an essay and list the qualities of a good report.",
      "Describe the structure of a formal report and the content of a clinical incident report.",
      "State the principles of good clinical documentation.",
      "Differentiate editing from proof-reading and give effective proof-reading strategies.",
      "Describe the conventional structure of an agenda and explain what meeting minutes must record."
    ],
    assessment: [
      { type: "mcq", q: "A report differs from an essay mainly in that a report:", options: ["uses headings and numbered sections for quick reference", "has no purpose", "must be fictional", "never uses facts"], answer: 0, rationale: "Reports are structured with headings/sections so readers can locate information quickly." },
      { type: "mcq", q: "An incident report should record:", options: ["who is to blame", "observed facts, times and actions taken", "the nurse's personal opinions", "speculation about causes"], answer: 1, rationale: "Incident reports state objective facts and actions, not blame or speculation." },
      { type: "mcq", q: "Checking the SUBSTANCE — content, organisation, clarity and word choice — is:", options: ["proof-reading", "indexing", "editing", "referencing"], answer: 2, rationale: "Editing addresses substance and expression; proof-reading is the later surface check." },
      { type: "mcq", q: "Which error is a spell-checker LEAST likely to catch?", options: ["'recieve' for 'receive'", "'their' used for 'there'", "'hte' for 'the'", "'nurss' for 'nurse'"], answer: 1, rationale: "'Their/there' are both correctly spelled words, so a spell-checker misses the wrong-word error." },
      { type: "mcq", q: "In a standard agenda, 'AOB' stands for:", options: ["Action On Board", "Agenda Of Board", "Any Other Business", "Approval Of Budget"], answer: 2, rationale: "AOB = Any Other Business, near the end of the agenda." },
      { type: "mcq", q: "Meeting minutes are conventionally written in the:", options: ["future tense, direct speech", "past tense, reported speech, objectively", "first person, informally", "present continuous"], answer: 1, rationale: "Minutes use the past tense and reported speech, recording facts objectively." },
      { type: "mcq", q: "Good clinical documentation should be:", options: ["written from memory days later", "erased when wrong", "full of unapproved abbreviations", "contemporaneous, dated, timed and signed"], answer: 3, rationale: "Records must be timely, dated, timed, signed and accountable; errors are struck through, not erased." },
      { type: "mcq", q: "The most important information for minutes to capture is:", options: ["the weather that day", "the decisions made and actions agreed (who, by when)", "personal opinions of members", "verbatim every word spoken"], answer: 1, rationale: "Decisions and action points (with owner and deadline) are the essential record." },
      { type: "mcq", q: "The correct sequence is to:", options: ["proof-read, then edit", "edit first, then proof-read", "do both simultaneously always", "never proof-read"], answer: 1, rationale: "Edit for substance first, then proof-read for surface errors — separating the tasks is more reliable." },
      { type: "mcq", q: "The section of a formal report that suggests action to be taken is the:", options: ["summary", "introduction", "recommendations", "title"], answer: 2, rationale: "Recommendations propose the actions arising from the report's conclusions." },
      { type: "fill", q: "The final surface-level check for spelling, punctuation and typos is called ______.", accept: ["proof-reading", "proofreading", "proof reading"], rationale: "Proof-reading is the last mechanical check after editing." },
      { type: "fill", q: "Clinical records written at or near the time of the event are described as ______.", accept: ["contemporaneous", "timely"], rationale: "Contemporaneous documentation is made at or near the time of care." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "ce-13-referencing-citation",
    unit: "Unit 4 · Academic & Professional Writing",
    title: "Referencing, Citation & Academic Integrity",
    readMinutes: 16,
    summary: "Why and when to cite, in-text citation and the reference list, the major referencing styles (APA, Harvard, Vancouver), quoting, paraphrasing and summarising with credit, and the avoidance of plagiarism in academic and evidence-based nursing writing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why referencing matters", p: "Referencing is the systematic acknowledgement of the sources of ideas, data and words used in academic writing. It serves several essential purposes: it gives credit to original authors and avoids plagiarism, it lets readers verify claims and follow up sources, it demonstrates the depth of the writer's reading, and it strengthens the writer's own argument with evidence. For nurses, correct referencing is inseparable from evidence-based practice, where every recommendation should be traceable to reliable evidence." },
      { h: "When to cite", p: "A citation is required whenever the writer uses another person's ideas, words, data, figures or arguments — whether quoted directly, paraphrased or summarised. Common knowledge (widely known, undisputed facts) need not be cited, but anything specific, contestable, statistical or drawn from a particular source must be. When in doubt, cite: under-citing risks plagiarism, and clear attribution is always the safer, more honest choice." },
      { h: "In-text citation and the reference list", p: "Academic referencing has two linked parts. An in-text citation appears in the body of the text at the point the source is used, giving brief details (in author-date styles, the author's surname and year, e.g. '(Murphy, 2019)'). The reference list (or bibliography) at the end gives the full details of every cited source so it can be located. The two must correspond exactly — every in-text citation has a matching entry in the list, and vice versa." },
      { h: "Major referencing styles", list: [
        "APA (American Psychological Association) — an author-date style widely used in nursing and the social sciences; in-text '(Author, Year)', reference list alphabetical.",
        "Harvard — a broad family of author-date styles similar in form to APA; in-text '(Author Year)'.",
        "Vancouver — a numeric style common in medicine; sources are numbered in the order cited, with a superscript or bracketed number in text and a numbered reference list.",
        "Others include MLA and Chicago; the institution or journal specifies which style to use, and it must be applied consistently."
      ] },
      { h: "Elements of a reference", p: "A full reference identifies a source precisely. For a journal article this typically includes author(s), year, article title, journal name, volume and issue, and page numbers (and increasingly a DOI); for a book, author(s), year, title, edition, place of publication and publisher; for a web source, author/organisation, year, title, URL and the date accessed. Recording these details at the note-taking stage saves time and prevents errors later." },
      { h: "Quoting, paraphrasing and summarising with credit", p: "There are three ways to use a source, all requiring citation. A direct quotation reproduces the exact words in quotation marks (used sparingly, for precise or authoritative wording). A paraphrase restates a specific passage fully in the writer's own words and structure. A summary condenses the main ideas of a longer source. Paraphrasing and summarising — not quoting — should dominate academic writing, but merely changing a few words while keeping the original structure is 'patchwriting' and still counts as plagiarism." },
      { h: "Plagiarism and how to avoid it", p: "Plagiarism is presenting someone else's words, ideas or work as one's own, whether deliberate or accidental. Forms include copying without citation, inadequate paraphrasing, using ideas without credit, and self-plagiarism (reusing one's own submitted work). It is a serious breach of academic and professional integrity with severe consequences. It is avoided by careful note-taking that separates the source's words from one's own, citing every borrowed idea, genuinely paraphrasing, keeping full source records, and using referencing consistently and honestly.", figure: {
        caption: "Figure 13.1 — Three ways to use a source, all requiring citation, and the plagiarism to avoid.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quote, paraphrase, summarise all need citation; patchwriting is plagiarism"><rect x="15" y="20" width="120" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="75" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">QUOTE</text><text x="75" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">exact words + " "</text><rect x="150" y="20" width="120" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="210" y="42" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">PARAPHRASE</text><text x="210" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">own words</text><rect x="285" y="20" width="120" height="55" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="345" y="42" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">SUMMARISE</text><text x="345" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">main ideas</text><rect x="420" y="20" width="125" height="55" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="482" y="42" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">PATCHWRITING</text><text x="482" y="61" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">= plagiarism</text><text x="205" y="105" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">All three require a CITATION</text><text x="482" y="105" text-anchor="middle" font-family="sans-serif" font-size="11" font-style="italic" fill="#7C2D12">Avoid</text></svg>'
      } }
    ],
    references: REF_CE,
    examQuestions: [
      "Explain four reasons why referencing is essential in academic and evidence-based nursing writing.",
      "Explain when a citation is and is not required, and the role of 'common knowledge'.",
      "Distinguish in-text citation from the reference list and state how they must correspond.",
      "Compare the APA/Harvard author-date styles with the Vancouver numeric style.",
      "Define plagiarism, including patchwriting, and describe five ways to avoid it."
    ],
    assessment: [
      { type: "mcq", q: "A citation is required when the writer:", options: ["states widely known common knowledge", "uses another author's idea, words or data", "writes their own original opinion", "numbers the pages"], answer: 1, rationale: "Any borrowed idea, wording or data must be cited; only common knowledge is exempt." },
      { type: "mcq", q: "Which is a NUMERIC referencing style common in medicine?", options: ["APA", "Harvard", "Vancouver", "MLA"], answer: 2, rationale: "Vancouver numbers sources in the order cited; APA/Harvard/MLA are author-date or author-page styles." },
      { type: "mcq", q: "An in-text citation and its reference-list entry must:", options: ["never match", "correspond exactly (each has the other)", "use different authors", "appear only in the appendix"], answer: 1, rationale: "Every in-text citation must have a matching reference-list entry and vice versa." },
      { type: "mcq", q: "Changing only a few words while keeping the source's structure is:", options: ["acceptable paraphrasing", "a direct quotation", "patchwriting, a form of plagiarism", "summarising"], answer: 2, rationale: "Patchwriting keeps the original structure and is treated as plagiarism." },
      { type: "mcq", q: "A direct quotation should be:", options: ["used for most of the essay", "reproduced exactly in quotation marks and cited", "paraphrased without credit", "left unattributed"], answer: 1, rationale: "Direct quotes reproduce exact words in quotation marks with a citation, and are used sparingly." },
      { type: "mcq", q: "In an author-date style, the in-text citation typically gives the:", options: ["author's surname and year", "page count only", "publisher only", "URL only"], answer: 0, rationale: "Author-date styles cite author surname and year, e.g. (Murphy, 2019)." },
      { type: "mcq", q: "Reusing one's own previously submitted work without acknowledgement is:", options: ["allowed freely", "paraphrasing", "referencing", "self-plagiarism"], answer: 3, rationale: "Submitting one's own prior work again as new is self-plagiarism." },
      { type: "mcq", q: "Which detail is essential in a reference for a JOURNAL article?", options: ["the reader's name", "volume, issue and page numbers", "the author's phone number", "the library's address"], answer: 1, rationale: "A journal reference needs author, year, article and journal titles, volume/issue and pages." },
      { type: "mcq", q: "Referencing supports evidence-based nursing because it:", options: ["hides the sources", "makes every recommendation traceable to reliable evidence", "increases word count only", "replaces reading"], answer: 1, rationale: "Referencing lets practice recommendations be traced and verified against the evidence." },
      { type: "mcq", q: "The safest approach when unsure whether to cite is to:", options: ["never cite", "cite the source", "quote the whole passage", "delete the idea"], answer: 1, rationale: "When in doubt, cite — under-citing risks plagiarism." },
      { type: "fill", q: "Presenting another person's words or ideas as one's own is called ______.", accept: ["plagiarism"], rationale: "Plagiarism is the unacknowledged use of another's words, ideas or work." },
      { type: "fill", q: "The full details of every cited source are gathered at the end of the work in the ______ list.", accept: ["reference", "references"], rationale: "The reference list gives full details corresponding to each in-text citation." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "ce-14-team-communication",
    unit: "Unit 5 · Communication in Health Care",
    title: "Communication in the Health-Care Team",
    readMinutes: 17,
    summary: "The communication process and its models, verbal and non-verbal communication, therapeutic communication with patients, inter-professional and team communication with structured tools (SBAR, handover, read-back), barriers to communication, and communication in difficult and sensitive situations.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The communication process", p: "Communication is the two-way process of creating and sharing meaning. A basic model involves a sender who encodes a message, a channel through which it travels, a receiver who decodes it, feedback confirming understanding, and context, with 'noise' (any interference) able to distort the message at any stage. Recognising these elements helps the nurse pinpoint where communication breaks down and correct it — for example, by improving feedback (checking understanding) or reducing noise.", figure: {
        caption: "Figure 14.1 — The communication process: sender encodes, message travels via a channel to the receiver, who decodes and gives feedback; noise may interfere.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication process model"><defs><marker id="ceArr14" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="30" width="130" height="50" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="85" y="52" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">SENDER</text><text x="85" y="69" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">encodes</text><rect x="215" y="30" width="130" height="50" rx="8" fill="#22C55E" stroke="#15803D" stroke-width="2"/><text x="280" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">MESSAGE</text><text x="280" y="69" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">via channel</text><rect x="410" y="30" width="130" height="50" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="475" y="52" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">RECEIVER</text><text x="475" y="69" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">decodes</text><line x1="150" y1="55" x2="213" y2="55" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ceArr14)"/><line x1="345" y1="55" x2="408" y2="55" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ceArr14)"/><path d="M475 82 Q280 130 85 82" fill="none" stroke="#7C2D12" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ceArr14)"/><text x="280" y="128" text-anchor="middle" font-family="sans-serif" font-size="10" font-style="italic" fill="#7C2D12">feedback (noise may interfere)</text></svg>'
      } },
      { h: "Verbal and non-verbal communication", p: "Communication is verbal (spoken and written words) and non-verbal (body language, facial expression, eye contact, gesture, posture, touch, tone and use of space). Non-verbal signals carry a large share of emotional meaning and must be consistent with the words; a mismatch (saying 'take your time' while looking rushed) undermines trust. Nurses use non-verbal skills — a calm manner, attentive posture, appropriate touch — deliberately to reassure and to read patients' unspoken cues." },
      { h: "Therapeutic communication with patients", p: "Therapeutic communication is purposeful, patient-centred interaction that builds a trusting relationship and promotes wellbeing. Its techniques include active and empathic listening, open-ended questions, clarifying and reflecting, appropriate silence, providing clear information, and showing empathy, warmth and respect. Non-therapeutic responses to avoid include giving false reassurance, being judgemental, changing the subject, and using jargon. Effective therapeutic communication improves disclosure, adherence, satisfaction and clinical outcomes." },
      { h: "Inter-professional and team communication", p: "Safe care depends on clear communication among nurses, doctors, pharmacists, therapists and support staff. Teamwork requires assertive, respectful, unambiguous exchange, a shared mental model of the patient's situation, and a culture where any member can safely raise a concern. Poor team communication — hierarchy that silences juniors, ambiguity, incomplete handovers — is a leading contributor to adverse events, which is why structured communication tools are promoted." },
      { h: "Structured communication tools", list: [
        "SBAR — Situation, Background, Assessment, Recommendation: a concise framework for escalating concerns and handing over.",
        "Handover — structured transfer of responsibility and information at shift change or transfer, ideally using a set format.",
        "Read-back / check-back — the receiver repeats a verbal order or critical result so the sender can confirm accuracy.",
        "Closed-loop communication — the sender directs a message, the receiver acknowledges and confirms completion."
      ] },
      { h: "Barriers to communication", p: "Communication in health care is obstructed by physical barriers (noise, distance, interruptions), physiological barriers (pain, sensory impairment, altered consciousness), psychological/emotional barriers (fear, anxiety, anger, embarrassment), social and cultural barriers (language differences, health beliefs, stigma), and system barriers (time pressure, staff shortage, hierarchy). Nurses overcome these with a suitable environment, interpreters and communication aids, empathy and patience, plain non-jargon language, and structured tools — always confirming that the message was understood." },
      { h: "Communication in difficult and sensitive situations", p: "Nurses regularly handle emotionally charged moments — breaking or receiving bad news, informing about birth, serious illness or death, and responding to anger, grief or fear. Good practice includes preparing and choosing a private setting, warning the person that difficult news is coming, giving information clearly and honestly in small steps, allowing silence and emotion, showing empathy, checking understanding, and following up. Structured approaches (such as a stepwise bad-news protocol) help, but sincere, compassionate presence is central. Cultural sensitivity and confidentiality must be maintained throughout." },
      { h: "Bringing the skills together", p: "Communication in the health-care team integrates every skill in this course: accurate grammar and vocabulary for clear messages; reading and listening to receive information faithfully; speaking and writing to convey it; and professional documentation and referencing to record and support it. Mastery of communication makes the nurse safer, more effective and more compassionate — and is recognised as a core professional competency, not an optional extra." }
    ],
    references: REF_CE,
    examQuestions: [
      "Describe the elements of the communication process and explain the role of feedback and noise.",
      "Distinguish verbal and non-verbal communication and explain why they must be consistent.",
      "Define therapeutic communication and list its techniques and the non-therapeutic responses to avoid.",
      "Explain three structured communication tools (e.g. SBAR, read-back, closed-loop) and why they improve safety.",
      "Classify the barriers to communication in health care and describe good practice for breaking bad news."
    ],
    assessment: [
      { type: "mcq", q: "In the communication process, any interference that distorts the message is called:", options: ["feedback", "the channel", "noise", "encoding"], answer: 2, rationale: "'Noise' is any interference that can distort the message at any stage." },
      { type: "mcq", q: "Which is an example of NON-VERBAL communication?", options: ["a written note", "a spoken instruction", "facial expression and posture", "a telephone order"], answer: 2, rationale: "Facial expression, posture, gesture and eye contact are non-verbal communication." },
      { type: "mcq", q: "A therapeutic communication technique is:", options: ["giving false reassurance", "using open-ended questions and empathic listening", "changing the subject", "using heavy jargon"], answer: 1, rationale: "Open questions and empathic listening are therapeutic; the others are non-therapeutic." },
      { type: "mcq", q: "SBAR is a structured tool for:", options: ["writing references", "escalating concerns and handing over", "spelling checks", "counting doses"], answer: 1, rationale: "SBAR (Situation, Background, Assessment, Recommendation) structures escalation and handover." },
      { type: "mcq", q: "When a receiver repeats a verbal order so the sender can confirm it, this is:", options: ["read-back / check-back", "encoding", "small talk", "paraphrase for style"], answer: 0, rationale: "Read-back/check-back confirms accuracy of a verbal order or critical result." },
      { type: "mcq", q: "Pain and sensory impairment are which type of communication barrier?", options: ["physical", "physiological", "cultural", "system"], answer: 1, rationale: "Pain and sensory impairment are physiological barriers within the person." },
      { type: "mcq", q: "When breaking bad news, good practice is to:", options: ["tell the person quickly in a busy corridor", "choose a private setting and give information in small, honest steps", "avoid all emotion", "use technical jargon"], answer: 1, rationale: "A private setting, warning, honest step-wise information and allowing emotion are key." },
      { type: "mcq", q: "Feedback in the communication model mainly serves to:", options: ["add noise", "confirm the message was understood", "hide the sender", "replace the channel"], answer: 1, rationale: "Feedback lets the sender check that the receiver understood the message." },
      { type: "mcq", q: "Poor team communication contributes to adverse events largely because of:", options: ["too much clarity", "ambiguity, hierarchy and incomplete handovers", "using SBAR", "confirming understanding"], answer: 1, rationale: "Ambiguity, silencing hierarchy and incomplete handovers are known causes of error." },
      { type: "mcq", q: "Closed-loop communication is complete when the:", options: ["sender speaks only", "receiver acknowledges and confirms completion", "message is written down later", "noise increases"], answer: 1, rationale: "Closed-loop requires the receiver to acknowledge and confirm the action is done." },
      { type: "fill", q: "Purposeful, patient-centred interaction that builds trust and promotes wellbeing is called ______ communication.", accept: ["therapeutic"], rationale: "Therapeutic communication is goal-directed, patient-centred interaction." },
      { type: "fill", q: "In the SBAR tool, the 'A' stands for ______.", accept: ["assessment"], rationale: "SBAR = Situation, Background, Assessment, Recommendation." }
    ]
  }
];





