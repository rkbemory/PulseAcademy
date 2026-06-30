/* ============================================================
   Diploma in Nursing · D332 Psychiatric Nursing (Year 3)
   — 15 topics. Aligned to the BNMC syllabus (foundations of
   mental health & psychiatric nursing, major mental disorders,
   and psychiatric care & treatment). Grounded in standard texts:
     • Townsend MC, Morgan KI. Psychiatric Mental Health Nursing:
       Concepts of Care in Evidence-Based Practice. F.A. Davis.
     • Sreevani R. A Guide to Mental Health and Psychiatric
       Nursing. Jaypee Brothers Medical Publishers.
     • Stuart GW. Principles and Practice of Psychiatric Nursing.
       Elsevier/Mosby.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_PSY = [
  "Townsend MC, Morgan KI. Psychiatric Mental Health Nursing: Concepts of Care in Evidence-Based Practice. F.A. Davis.",
  "Sreevani R. A Guide to Mental Health and Psychiatric Nursing. Jaypee Brothers Medical Publishers.",
  "Stuart GW. Principles and Practice of Psychiatric Nursing. Elsevier/Mosby."
];

window.Academic.topics["diploma-nursing/psychiatric-nursing"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "psy-01-intro",
    unit: "Unit 1 · Foundations of Psychiatric Nursing",
    title: "Introduction to Mental Health & Psychiatric Nursing",
    readMinutes: 16,
    summary: "Concepts of mental health and mental illness, the mental health–illness continuum, determinants of mental illness, and the scope and roles of psychiatric nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is mental health?", p: "Mental health is a state of well-being in which an individual realises his or her own abilities, can cope with the normal stresses of life, can work productively, and is able to contribute to the community (WHO). It is more than the absence of mental illness — it is positive functioning of mind and emotions. A mentally healthy person has a realistic self-concept, can form satisfying relationships, manages emotions, and adapts to change." },
      { h: "What is mental illness?", p: "Mental illness (psychiatric disorder) is a clinically significant disturbance in a person's thinking, emotion, perception or behaviour that causes distress or impaired functioning in daily life, work or relationships. It results from a complex interaction of biological, psychological and social factors and is diagnosed using recognised criteria such as the ICD or DSM." },
      { h: "Characteristics of a mentally healthy person", list: [
        "Positive self-concept and self-acceptance.",
        "Ability to face and accept reality.",
        "Capacity to form and maintain satisfying relationships.",
        "Ability to manage emotions and tolerate stress.",
        "Independence and ability to make decisions.",
        "Productive work and meaningful use of leisure.",
        "Ability to adapt to change and recover from setbacks."
      ] },
      { h: "Mental health–illness continuum", p: "Mental health and mental illness are not two separate boxes but the two ends of a continuum. A person moves along this line depending on stressors, coping resources and support. No one is permanently fixed at one point; with stress a healthy person may move toward illness, and with treatment and support an ill person moves back toward health.", figure: {
        caption: "The mental health–illness continuum: a person's position shifts with stress, coping and support.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mental health to mental illness continuum line."><defs><linearGradient id="psyGrad1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#15803D"/><stop offset="1" stop-color="#7C2D12"/></linearGradient></defs><rect x="40" y="60" width="480" height="22" rx="11" fill="url(#psyGrad1)"/><circle cx="60" cy="71" r="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><circle cx="500" cy="71" r="9" fill="#FEF3C7" stroke="#7C2D12" stroke-width="2"/><text x="60" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Mental health</text><text x="500" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Mental illness</text><text x="280" y="115" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">position shifts with stress, coping &amp; support</text><polygon points="270,95 290,95 280,108" fill="#B45309"/></svg>'
      } },
      { h: "Determinants of mental illness", p: "Mental illness arises from many interacting causes, usually grouped as biological, psychological and social (the bio-psycho-social model).", list: [
        "Biological — genetics/heredity, brain chemistry (neurotransmitter imbalance), brain injury, infection, prenatal damage, physical illness, substance use.",
        "Psychological — personality, low self-esteem, faulty coping, childhood trauma, abuse or neglect, severe or prolonged stress.",
        "Social / environmental — poverty, unemployment, broken family, social isolation, migration, disaster, war, discrimination, lack of support."
      ] },
      { h: "Cultural and socio-economic factors", p: "Culture shapes how mental illness is understood, expressed and treated. Beliefs about spirit possession or curses, stigma, gender roles and family structure all affect whether a person seeks help. Poverty, low education and poor access to services increase risk and delay treatment. The psychiatric nurse must be culturally sensitive and non-judgemental." },
      { h: "Psychiatric nursing: definition and scope", p: "Psychiatric (mental health) nursing is a specialised area of nursing that applies theories of human behaviour and the therapeutic use of self to promote, maintain and restore the mental health of individuals, families and communities. It is practised in hospitals, community clinics, schools, homes and rehabilitation centres." },
      { h: "Roles and responsibilities of the psychiatric nurse", list: [
        "Caregiver — provides physical and emotional care and a safe environment.",
        "Therapeutic agent — uses the nurse–patient relationship and communication to help the patient.",
        "Health educator — teaches patients and families about illness, medication and coping.",
        "Counsellor — supports the patient to express feelings and solve problems.",
        "Patient advocate — protects patient rights and dignity.",
        "Member of the team — works with doctors, psychologists, social workers and others.",
        "Promoter of mental health — works to prevent illness and reduce stigma in the community."
      ] }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define mental health and mental illness. List the characteristics of a mentally healthy person.",
      "Explain the mental health–illness continuum with a diagram.",
      "Describe the biological, psychological and social determinants of mental illness.",
      "Discuss the roles and responsibilities of a psychiatric nurse.",
      "Explain how cultural and socio-economic factors influence mental illness and its care."
    ],
    assessment: [
      { type: "mcq", q: "According to WHO, mental health is BEST described as:", options: ["The complete absence of any illness", "A state of well-being in which a person copes with normal stress and works productively", "Freedom from all stress", "Having a high IQ"], answer: 1, rationale: "WHO defines mental health as a state of well-being allowing a person to cope with normal stress, work productively and contribute to the community — not merely the absence of illness." },
      { type: "mcq", q: "The mental health–illness continuum means that:", options: ["People are permanently either healthy or ill", "A person can move toward health or illness depending on stress and support", "Mental illness cannot be treated", "Health and illness are unrelated"], answer: 1, rationale: "The continuum shows mental health and illness as two ends of one line, with a person's position shifting with stressors, coping and support." },
      { type: "mcq", q: "Which is a BIOLOGICAL determinant of mental illness?", options: ["Poverty", "Neurotransmitter imbalance", "Social isolation", "Unemployment"], answer: 1, rationale: "Neurotransmitter (brain chemistry) imbalance is a biological cause; poverty, isolation and unemployment are social factors." },
      { type: "mcq", q: "The model that explains mental illness as a combination of biological, psychological and social causes is the:", options: ["Medical model only", "Bio-psycho-social model", "Behaviour model only", "Spiritual model"], answer: 1, rationale: "The bio-psycho-social model integrates biological, psychological and social factors as interacting causes of mental illness." },
      { type: "mcq", q: "A characteristic of a mentally healthy person is:", options: ["Inability to face reality", "A realistic self-concept and ability to manage emotions", "Constant dependence on others", "Avoidance of all relationships"], answer: 1, rationale: "Mentally healthy people have a realistic self-concept, manage emotions, and form satisfying relationships." },
      { type: "mcq", q: "When the psychiatric nurse uses the nurse–patient relationship to help the patient, she is acting as a:", options: ["Therapeutic agent", "Cleaner", "Pharmacist", "Record clerk"], answer: 0, rationale: "Using the therapeutic relationship and self to help the patient is the nurse's role as a therapeutic agent." },
      { type: "mcq", q: "Protecting a patient's rights and dignity is the nurse's role as:", options: ["Educator", "Advocate", "Researcher", "Administrator"], answer: 1, rationale: "Safeguarding patient rights and dignity is the advocacy role of the psychiatric nurse." },
      { type: "mcq", q: "Culture mainly affects mental illness by influencing:", options: ["The colour of medicines", "How illness is understood, expressed and whether help is sought", "Body temperature", "Blood group"], answer: 1, rationale: "Culture shapes beliefs about illness, its expression, stigma and help-seeking behaviour." },
      { type: "mcq", q: "Mental illness is defined as a clinically significant disturbance in thinking, emotion, perception or behaviour that:", options: ["Never affects daily life", "Causes distress or impaired functioning", "Always resolves without treatment", "Is purely imaginary"], answer: 1, rationale: "Mental illness causes distress and/or impairment in functioning and is diagnosed using recognised criteria." },
      { type: "mcq", q: "Psychiatric nursing is practised in:", options: ["Only mental hospitals", "Hospitals, community, schools, homes and rehabilitation centres", "Only operation theatres", "Only laboratories"], answer: 1, rationale: "Psychiatric nursing spans many settings including hospitals, community clinics, schools, homes and rehabilitation centres." },
      { type: "fill", q: "Mental health and mental illness are the two ends of a single line called the mental health–illness ____.", accept: ["continuum"], rationale: "A person's position on the continuum shifts with stress, coping and support." },
      { type: "fill", q: "The model that explains mental illness through biological, psychological and social factors is the ____ model.", accept: ["bio-psycho-social", "biopsychosocial", "bio psycho social"], rationale: "It integrates all three groups of interacting causes." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "psy-02-history-legislation",
    unit: "Unit 1 · Foundations of Psychiatric Nursing",
    title: "History, Mental Health Legislation & the Mental Health Team",
    readMinutes: 16,
    summary: "Evolution of psychiatric care, key ethical and legal issues, patient rights, and the composition and roles of the multidisciplinary mental health team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Historical evolution of psychiatric care", p: "Attitudes toward mental illness have changed greatly over time. In ancient and medieval periods the mentally ill were often blamed for sin or possession and treated cruelly. The reform era began when Philippe Pinel in France 'unchained' patients and introduced humane (moral) treatment. Hildegard Peplau is regarded as the mother of psychiatric nursing for developing the interpersonal theory and the therapeutic nurse–patient relationship. Modern care emphasises community-based, recovery-oriented and rights-based treatment." },
      { h: "Milestones in psychiatric nursing", list: [
        "Moral treatment movement — humane, kind care replacing cruelty.",
        "Development of effective psychotropic drugs (from the 1950s) allowing community care.",
        "Deinstitutionalisation — shifting care from large asylums to the community.",
        "Hildegard Peplau's interpersonal relations theory (1952).",
        "Recognition of mental health as part of general health and human rights."
      ] },
      { h: "Need for mental health legislation", p: "Mental health laws protect both the patient and society. They safeguard the rights of persons with mental illness, regulate admission and discharge, prevent wrongful detention, ensure proper treatment, and protect property and dignity. They balance the patient's liberty with the need for care and safety." },
      { h: "Types of admission", list: [
        "Voluntary admission — the patient willingly agrees to treatment and can request discharge.",
        "Involuntary / compulsory admission — admission without consent when the person is a danger to self or others or unable to seek care, under legal safeguards.",
        "Emergency admission — short-term admission in a crisis until proper assessment is done."
      ] },
      { h: "Rights of the mentally ill patient", list: [
        "Right to humane and dignified treatment.",
        "Right to the least restrictive environment.",
        "Right to give or refuse informed consent (where competent).",
        "Right to confidentiality of records.",
        "Right to information about illness and treatment.",
        "Right to communicate with family and legal counsel.",
        "Right to protection from abuse and exploitation."
      ] },
      { h: "Ethical issues in psychiatric nursing", list: [
        "Autonomy — respecting the patient's right to decide.",
        "Beneficence and non-maleficence — doing good and avoiding harm.",
        "Justice — fair and equal treatment.",
        "Confidentiality — keeping patient information private.",
        "Informed consent and the use of restraint only as a last resort."
      ] },
      { h: "The multidisciplinary mental health team", p: "Mental health care is delivered by a team of professionals who work together for the patient.", list: [
        "Psychiatrist — medical doctor who diagnoses and prescribes treatment (drugs, ECT).",
        "Psychiatric (mental health) nurse — provides continuous care, therapeutic relationship and administers treatment.",
        "Clinical psychologist — does psychological testing and psychotherapy.",
        "Psychiatric social worker — handles family, social and rehabilitation needs.",
        "Occupational therapist — uses purposeful activity for rehabilitation.",
        "Counsellor and other support staff — provide counselling and assistance."
      ] },
      { h: "Role of the nurse within the team", p: "The psychiatric nurse spends the most time with the patient and is the link between the patient and the rest of the team. She observes and reports changes, builds the therapeutic relationship, administers and monitors treatment, educates the patient and family, and coordinates care, ensuring the patient's rights and dignity are respected." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Trace the historical evolution of psychiatric care and name two key reformers.",
      "Why is mental health legislation needed? Describe the types of admission.",
      "List the rights of a mentally ill patient.",
      "Describe the members of the mental health team and their roles.",
      "Discuss the ethical issues a psychiatric nurse must consider in practice."
    ],
    assessment: [
      { type: "mcq", q: "The reformer who 'unchained' mentally ill patients and introduced humane treatment was:", options: ["Sigmund Freud", "Philippe Pinel", "Florence Nightingale", "Emil Kraepelin"], answer: 1, rationale: "Philippe Pinel pioneered humane (moral) treatment by removing the chains from the mentally ill." },
      { type: "mcq", q: "Who is regarded as the mother of psychiatric nursing?", options: ["Hildegard Peplau", "Virginia Henderson", "Dorothea Dix", "Clara Barton"], answer: 0, rationale: "Hildegard Peplau developed the interpersonal relations theory and the therapeutic nurse–patient relationship." },
      { type: "mcq", q: "Admission of a patient who willingly agrees to treatment is called:", options: ["Involuntary admission", "Emergency admission", "Voluntary admission", "Forced admission"], answer: 2, rationale: "In voluntary admission the patient consents to treatment and may request discharge." },
      { type: "mcq", q: "The MAIN purpose of mental health legislation is to:", options: ["Punish the mentally ill", "Protect the rights of patients and ensure proper care", "Increase hospital income", "Keep patients in hospital forever"], answer: 1, rationale: "Mental health laws safeguard patients' rights, regulate admission/discharge and ensure proper treatment." },
      { type: "mcq", q: "Which professional prescribes medication and ECT?", options: ["Psychiatric nurse", "Clinical psychologist", "Psychiatrist", "Social worker"], answer: 2, rationale: "The psychiatrist is the medical doctor who diagnoses and prescribes drugs and ECT." },
      { type: "mcq", q: "Psychological testing and psychotherapy are mainly carried out by the:", options: ["Occupational therapist", "Clinical psychologist", "Pharmacist", "Radiologist"], answer: 1, rationale: "The clinical psychologist performs psychological testing and delivers psychotherapy." },
      { type: "mcq", q: "Keeping a patient's information private is the ethical principle of:", options: ["Justice", "Confidentiality", "Beneficence", "Autonomy"], answer: 1, rationale: "Confidentiality means protecting and not disclosing patient information." },
      { type: "mcq", q: "The 'least restrictive environment' is a patient's right relating to:", options: ["Diet", "Using minimal restriction necessary for care", "Visiting hours only", "Hospital fees"], answer: 1, rationale: "Patients have the right to be cared for with the least restriction necessary for safety and treatment." },
      { type: "mcq", q: "Which team member uses purposeful activity for rehabilitation?", options: ["Occupational therapist", "Psychiatrist", "Cashier", "Laboratory technician"], answer: 0, rationale: "The occupational therapist uses purposeful activities to help rehabilitation." },
      { type: "mcq", q: "Within the team, the psychiatric nurse is important because she:", options: ["Spends the most time with the patient and links the patient to the team", "Only writes prescriptions", "Performs surgery", "Manages hospital accounts"], answer: 0, rationale: "The nurse spends the most time with the patient, observes and reports, and links the patient with the rest of the team." },
      { type: "fill", q: "Admission of a dangerous or non-consenting patient under legal safeguards is called ____ admission.", accept: ["involuntary", "compulsory"], rationale: "Involuntary (compulsory) admission is used when the person is a danger to self/others or cannot seek care." },
      { type: "fill", q: "The interpersonal relations theory of psychiatric nursing was developed by Hildegard ____.", accept: ["Peplau"], rationale: "Peplau is the mother of psychiatric nursing and author of the interpersonal theory." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "psy-03-classification",
    unit: "Unit 1 · Foundations of Psychiatric Nursing",
    title: "Classification of Mental Disorders (ICD & DSM)",
    readMinutes: 15,
    summary: "Why disorders are classified, the ICD and DSM systems, the difference between psychosis and neurosis, and the major categories of mental disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why classify mental disorders?", p: "Classification gives a common language so that professionals worldwide describe, diagnose and communicate about disorders in the same way. It guides treatment, supports research and statistics, and helps in planning services. Without an agreed system, the same condition might be named differently by different clinicians." },
      { h: "Major classification systems", list: [
        "ICD (International Classification of Diseases) — published by the World Health Organization (WHO); used internationally and in most government health systems, including Bangladesh. Chapter on mental, behavioural and neurodevelopmental disorders.",
        "DSM (Diagnostic and Statistical Manual of Mental Disorders) — published by the American Psychiatric Association (APA); provides detailed diagnostic criteria, widely used in research and clinical practice."
      ] },
      { h: "Psychosis versus neurosis", p: "A traditional and useful distinction is between psychotic and neurotic disorders.", list: [
        "Psychosis — severe disorder with loss of contact with reality; the patient has delusions and/or hallucinations and usually lacks insight (e.g. schizophrenia, severe mania).",
        "Neurosis — less severe disorder; the patient stays in contact with reality and usually has insight (e.g. anxiety disorders, phobias, obsessive-compulsive disorder)."
      ], figure: {
        caption: "Two broad groups of mental disorders: psychosis (loss of reality contact, no insight) and neurosis (reality contact kept, insight present).",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of psychosis and neurosis."><rect x="30" y="30" width="230" height="140" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><rect x="300" y="30" width="230" height="140" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="145" y="58" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#7C2D12">PSYCHOSIS</text><text x="415" y="58" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#15803D">NEUROSIS</text><text x="145" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Loss of contact with reality</text><text x="145" y="106" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Delusions / hallucinations</text><text x="145" y="126" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Insight usually absent</text><text x="145" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">e.g. schizophrenia, mania</text><text x="415" y="86" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">Contact with reality kept</text><text x="415" y="106" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">No delusions/hallucinations</text><text x="415" y="126" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">Insight usually present</text><text x="415" y="150" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">e.g. anxiety, phobia, OCD</text></svg>'
      } },
      { h: "Major categories of mental disorders", list: [
        "Organic mental disorders — delirium, dementia (due to physical brain disturbance).",
        "Substance use disorders — due to alcohol and drugs.",
        "Schizophrenia and other psychotic disorders.",
        "Mood (affective) disorders — depression and bipolar disorder.",
        "Anxiety, obsessive-compulsive and stress-related disorders.",
        "Somatoform and dissociative disorders.",
        "Disorders of personality and behaviour.",
        "Childhood and developmental disorders.",
        "Eating and sleep disorders."
      ] },
      { h: "Key terms in diagnosis", list: [
        "Sign — what the nurse/doctor observes (e.g. agitation).",
        "Symptom — what the patient complains of (e.g. sadness).",
        "Syndrome — a group of signs and symptoms occurring together.",
        "Insight — the patient's awareness that he or she is ill.",
        "Prognosis — the likely outcome of the illness."
      ] },
      { h: "Importance of accurate classification for the nurse", p: "Correct classification helps the nurse understand the patient's condition, anticipate problems and behaviour, plan appropriate nursing care, give the right health education, and communicate clearly with the team. It also reduces stigma by treating mental illness as a recognised medical condition." },
      { h: "Limitations and cautions", p: "Classification labels the illness, not the person. The nurse must avoid using the diagnosis as a label that defines the whole person, must remember overlap between disorders, and must always treat the patient as an individual with unique needs." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Why are mental disorders classified? Name the two main classification systems.",
      "Differentiate between psychosis and neurosis with examples.",
      "List the major categories of mental disorders.",
      "Define sign, symptom, syndrome and insight.",
      "Discuss the importance and limitations of classifying mental disorders."
    ],
    assessment: [
      { type: "mcq", q: "The ICD classification of diseases is published by the:", options: ["American Psychiatric Association", "World Health Organization", "United Nations", "Red Cross"], answer: 1, rationale: "ICD (International Classification of Diseases) is published by WHO." },
      { type: "mcq", q: "The DSM is published by the:", options: ["WHO", "American Psychiatric Association", "British Medical Association", "UNICEF"], answer: 1, rationale: "The Diagnostic and Statistical Manual (DSM) is published by the American Psychiatric Association." },
      { type: "mcq", q: "A patient with delusions, hallucinations and no insight is most likely suffering from a:", options: ["Neurosis", "Psychosis", "Phobia", "Mild anxiety"], answer: 1, rationale: "Psychosis involves loss of contact with reality, delusions/hallucinations and usually absent insight." },
      { type: "mcq", q: "Which condition is a neurosis rather than a psychosis?", options: ["Schizophrenia", "Severe mania", "Obsessive-compulsive disorder", "Delusional disorder"], answer: 2, rationale: "OCD is a neurotic disorder where the patient keeps contact with reality and has insight." },
      { type: "mcq", q: "Something the patient complains of, such as sadness, is a:", options: ["Sign", "Symptom", "Syndrome", "Prognosis"], answer: 1, rationale: "A symptom is subjective — what the patient reports; a sign is what is observed." },
      { type: "mcq", q: "A group of signs and symptoms occurring together is called a:", options: ["Sign", "Symptom", "Syndrome", "Cure"], answer: 2, rationale: "A syndrome is a recognisable cluster of signs and symptoms." },
      { type: "mcq", q: "The patient's awareness that he or she is ill is called:", options: ["Prognosis", "Insight", "Delusion", "Affect"], answer: 1, rationale: "Insight is the patient's recognition that he/she has a mental illness." },
      { type: "mcq", q: "The MAIN benefit of classifying mental disorders is that it:", options: ["Punishes patients", "Gives a common language for diagnosis, treatment and research", "Increases stigma", "Replaces nursing care"], answer: 1, rationale: "Classification provides a shared language for diagnosis, communication, treatment and research." },
      { type: "mcq", q: "Delirium and dementia are classified under:", options: ["Mood disorders", "Organic mental disorders", "Anxiety disorders", "Personality disorders"], answer: 1, rationale: "Delirium and dementia result from physical brain disturbance and are organic mental disorders." },
      { type: "mcq", q: "A key caution about classification is that it:", options: ["Labels the illness, not the person", "Should replace the patient's name", "Defines the whole person", "Is always 100% precise"], answer: 0, rationale: "Classification labels the illness; the nurse must still treat the patient as a unique individual." },
      { type: "fill", q: "The international classification of diseases published by WHO is abbreviated ____.", accept: ["ICD"], rationale: "ICD is used internationally, including in Bangladesh government health systems." },
      { type: "fill", q: "A severe disorder with loss of contact with reality and absent insight is called a ____.", accept: ["psychosis", "psychotic disorder"], rationale: "Psychosis features delusions/hallucinations and usually lacks insight." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "psy-04-therapeutic-relationship",
    unit: "Unit 1 · Foundations of Psychiatric Nursing",
    title: "Therapeutic Nurse–Patient Relationship & Communication",
    readMinutes: 16,
    summary: "The therapeutic use of self, empathy, the phases of the nurse–patient relationship, and therapeutic and non-therapeutic communication techniques.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is the therapeutic relationship?", p: "The therapeutic nurse–patient relationship is a planned, goal-directed, professional relationship in which the nurse helps the patient meet his or her needs, develop insight and grow toward recovery. Unlike a social relationship, it is focused entirely on the patient's needs, has clear boundaries, and is time-limited. It is the heart of psychiatric nursing." },
      { h: "Therapeutic use of self", p: "Therapeutic use of self means the nurse uses her own personality, presence, attitude and communication consciously and purposefully to help the patient. This requires self-awareness — understanding one's own feelings, values and reactions — so that personal feelings do not interfere with care." },
      { h: "Qualities the nurse must show", list: [
        "Empathy — understanding and sharing the patient's feelings without losing objectivity (different from sympathy, which is feeling pity).",
        "Genuineness — being honest and real, not playing a role.",
        "Unconditional positive regard — accepting and respecting the patient as a person.",
        "Trustworthiness and reliability — keeping promises and confidentiality.",
        "Warmth, patience and a non-judgemental attitude.",
        "Rapport — a feeling of harmony and understanding between nurse and patient."
      ] },
      { h: "Phases of the nurse–patient relationship (Peplau)", p: "Peplau described the relationship as developing through phases.", list: [
        "Pre-interaction phase — the nurse gathers information and examines her own feelings before meeting the patient.",
        "Orientation (introductory) phase — nurse and patient meet, build trust and rapport, set goals and a contract.",
        "Working phase — the main work: the patient explores problems, expresses feelings and develops new coping skills.",
        "Termination phase — the relationship is ended in a planned way; gains are reviewed and feelings about ending are addressed."
      ], figure: {
        caption: "The four phases of the therapeutic nurse–patient relationship.",
        svg: '<svg viewBox="0 0 580 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four phases of the nurse-patient relationship."><defs><marker id="psyArr4" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="10" y="40" width="120" height="46" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="70" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Pre-interaction</text><text x="70" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">self-awareness</text><rect x="150" y="40" width="120" height="46" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="210" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Orientation</text><text x="210" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">build trust</text><rect x="290" y="40" width="120" height="46" rx="9" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="350" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Working</text><text x="350" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">solve problems</text><rect x="430" y="40" width="120" height="46" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="490" y="62" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Termination</text><text x="490" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">planned ending</text><line x1="130" y1="63" x2="148" y2="63" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#psyArr4)"/><line x1="270" y1="63" x2="288" y2="63" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#psyArr4)"/><line x1="410" y1="63" x2="428" y2="63" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#psyArr4)"/></svg>'
      } },
      { h: "Therapeutic communication techniques", list: [
        "Active listening — giving full attention and showing interest.",
        "Open-ended questions — encourage the patient to talk (e.g. 'Tell me how you feel').",
        "Broad opening and offering self — 'I will sit with you for a while.'",
        "Reflecting and restating — returning feelings/ideas so the patient feels understood.",
        "Clarifying — making sure you understand correctly.",
        "Silence — allowing the patient time to think.",
        "Acceptance and acknowledgement — showing you have heard.",
        "Focusing and summarising — staying on the point and reviewing."
      ] },
      { h: "Non-therapeutic communication (to avoid)", list: [
        "Giving advice or false reassurance ('Don't worry, everything will be fine').",
        "Asking 'why' questions that sound like blame.",
        "Changing the subject or being defensive.",
        "Judging, disapproving or arguing.",
        "Using clichés or belittling feelings.",
        "Talking too much and not listening."
      ] },
      { h: "Barriers to therapeutic communication", p: "Communication can be blocked by language differences, noise and lack of privacy, the patient's symptoms (e.g. delusions, withdrawal, confusion), the nurse's own anxiety or prejudice, and physical problems such as deafness. The nurse should reduce these barriers by choosing a quiet private place, allowing time, and adapting her approach to the patient." },
      { h: "Nursing application", p: "The therapeutic relationship and communication are the nurse's main tools. Through them she builds trust, assesses the patient, helps express feelings, teaches coping, supports treatment and promotes recovery. Maintaining professional boundaries and confidentiality throughout is essential." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define the therapeutic nurse–patient relationship and explain its phases.",
      "What is therapeutic use of self? Why is self-awareness important?",
      "Differentiate between empathy and sympathy.",
      "List five therapeutic and five non-therapeutic communication techniques.",
      "Describe the barriers to therapeutic communication and how to overcome them."
    ],
    assessment: [
      { type: "mcq", q: "The therapeutic nurse–patient relationship is mainly focused on:", options: ["The nurse's needs", "The patient's needs", "Social friendship", "Hospital profit"], answer: 1, rationale: "Unlike a social relationship, the therapeutic relationship is goal-directed and centred on the patient's needs." },
      { type: "mcq", q: "Understanding and sharing the patient's feelings while staying objective is:", options: ["Sympathy", "Empathy", "Pity", "Apathy"], answer: 1, rationale: "Empathy is understanding the patient's feelings without losing objectivity; sympathy is feeling pity." },
      { type: "mcq", q: "In which phase does the nurse examine her own feelings before meeting the patient?", options: ["Pre-interaction phase", "Working phase", "Termination phase", "Orientation phase"], answer: 0, rationale: "The pre-interaction phase involves self-awareness and gathering information before the first meeting." },
      { type: "mcq", q: "The main work of solving problems and developing coping skills occurs in the:", options: ["Orientation phase", "Working phase", "Pre-interaction phase", "Termination phase"], answer: 1, rationale: "The working phase is where the patient explores problems and builds new coping skills." },
      { type: "mcq", q: "Which is a THERAPEUTIC communication technique?", options: ["Giving false reassurance", "Active listening", "Changing the subject", "Being judgemental"], answer: 1, rationale: "Active listening is therapeutic; the others block communication." },
      { type: "mcq", q: "Saying 'Don't worry, everything will be fine' is an example of:", options: ["Reflecting", "False reassurance (non-therapeutic)", "Clarifying", "Focusing"], answer: 1, rationale: "False reassurance dismisses the patient's feelings and is non-therapeutic." },
      { type: "mcq", q: "Using one's own personality and presence purposefully to help the patient is called:", options: ["Therapeutic use of self", "Transference", "Diagnosis", "Restraint"], answer: 0, rationale: "Therapeutic use of self is the conscious, purposeful use of the nurse's personality and communication." },
      { type: "mcq", q: "Allowing the patient time to think by staying quiet is the technique of:", options: ["Advising", "Silence", "Arguing", "Interrupting"], answer: 1, rationale: "Therapeutic silence gives the patient time to gather thoughts and feel accepted." },
      { type: "mcq", q: "Accepting and respecting the patient as a person regardless of behaviour is:", options: ["Unconditional positive regard", "Sympathy", "Confrontation", "Punishment"], answer: 0, rationale: "Unconditional positive regard means valuing the patient as a person without conditions." },
      { type: "mcq", q: "The planned ending of the relationship, reviewing gains, occurs in the:", options: ["Working phase", "Termination phase", "Pre-interaction phase", "Orientation phase"], answer: 1, rationale: "Termination is the planned ending where gains are reviewed and feelings about ending are addressed." },
      { type: "fill", q: "Understanding the patient's feelings while remaining objective is called ____.", accept: ["empathy"], rationale: "Empathy differs from sympathy, which is feeling pity for the patient." },
      { type: "fill", q: "The phase in which trust and rapport are built and goals are set is the ____ phase.", accept: ["orientation", "introductory"], rationale: "The orientation phase establishes trust, rapport and the working contract." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "psy-05-mse-assessment",
    unit: "Unit 1 · Foundations of Psychiatric Nursing",
    title: "Psychiatric Assessment & the Mental Status Examination (MSE)",
    readMinutes: 16,
    summary: "The psychiatric nursing process, history taking, and the components of the mental status examination used to assess a patient's current mental state.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of psychiatric assessment", p: "Psychiatric assessment is the systematic collection of data about the patient's mental and physical state, history and social situation. It is the first step of the nursing process and forms the basis for diagnosis, nursing problems, and the plan of care. It combines history taking, the mental status examination (MSE), physical examination and investigations." },
      { h: "The psychiatric nursing process", list: [
        "Assessment — collect data (history, MSE, observation).",
        "Nursing diagnosis — identify the patient's problems and needs.",
        "Planning — set goals and plan interventions.",
        "Implementation — carry out the nursing care.",
        "Evaluation — judge whether goals were met and revise the plan."
      ] },
      { h: "Psychiatric history taking", list: [
        "Identifying data — name, age, sex, marital status, occupation, address.",
        "Chief complaint — the patient's main problem in his/her own words.",
        "History of present illness — onset, course and duration of symptoms.",
        "Past psychiatric and medical history.",
        "Family history — mental illness, relationships.",
        "Personal history — birth, development, education, work, marriage.",
        "Premorbid personality — what the person was like before the illness.",
        "Substance use and forensic (legal) history."
      ] },
      { h: "The Mental Status Examination (MSE)", p: "The MSE is a structured assessment of the patient's current mental functioning at the time of the interview, much as a physical examination assesses the body. It is observed and recorded under standard headings.", figure: {
        caption: "Components of the Mental Status Examination (MSE).",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Components of the mental status examination."><rect x="20" y="15" width="520" height="30" rx="8" fill="#7C2D12"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#FFF7ED">MENTAL STATUS EXAMINATION</text><rect x="20" y="55" width="165" height="40" rx="7" fill="#FFF7ED" stroke="#B45309" stroke-width="1.5"/><text x="102" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Appearance &amp; behaviour</text><rect x="197" y="55" width="165" height="40" rx="7" fill="#FFF7ED" stroke="#B45309" stroke-width="1.5"/><text x="279" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Speech</text><rect x="375" y="55" width="165" height="40" rx="7" fill="#FFF7ED" stroke="#B45309" stroke-width="1.5"/><text x="457" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Mood &amp; affect</text><rect x="20" y="105" width="165" height="40" rx="7" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="102" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Thought (form &amp; content)</text><rect x="197" y="105" width="165" height="40" rx="7" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="279" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Perception</text><rect x="375" y="105" width="165" height="40" rx="7" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="457" y="130" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Cognition</text><rect x="20" y="155" width="250" height="40" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="145" y="180" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">Insight</text><rect x="290" y="155" width="250" height="40" rx="7" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="415" y="180" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">Judgement</text></svg>'
      } },
      { h: "Components of the MSE explained", list: [
        "Appearance and behaviour — dress, grooming, posture, eye contact, motor activity, cooperation.",
        "Speech — rate, volume, tone, fluency (e.g. slow, pressured, mute).",
        "Mood and affect — mood is the patient's sustained emotional state (reported); affect is the observed emotional expression (e.g. flat, blunted, inappropriate).",
        "Thought — form (flow/logic, e.g. flight of ideas) and content (e.g. delusions, suicidal ideas).",
        "Perception — disturbances such as hallucinations and illusions.",
        "Cognition — level of consciousness, orientation (time, place, person), attention, memory, intelligence.",
        "Insight — awareness of being ill and need for treatment.",
        "Judgement — ability to make sound decisions."
      ] },
      { h: "Key terms", list: [
        "Delusion — a false fixed belief not corrected by reasoning (a thought-content disorder).",
        "Hallucination — a false perception without a real external stimulus (a perception disorder).",
        "Illusion — a misinterpretation of a real stimulus.",
        "Orientation — awareness of time, place and person.",
        "Affect — the observed outward expression of emotion."
      ] },
      { h: "Role of the nurse in assessment", p: "The nurse gathers data through observation, interview and physical examination, builds rapport so the patient cooperates, records findings accurately and objectively, watches for risk (especially suicide or violence), and reports significant findings to the team. Good assessment is the foundation of safe and effective care." }
    ],
    references: REF_PSY,
    examQuestions: [
      "List the steps of the psychiatric nursing process.",
      "What is the mental status examination? Describe its components.",
      "Differentiate between mood and affect, and between delusion and hallucination.",
      "Outline the contents of a psychiatric history.",
      "Describe the role of the nurse in psychiatric assessment."
    ],
    assessment: [
      { type: "mcq", q: "The FIRST step of the nursing process is:", options: ["Planning", "Assessment", "Evaluation", "Implementation"], answer: 1, rationale: "Assessment (data collection) is the first step on which the rest of the process is built." },
      { type: "mcq", q: "The mental status examination assesses the patient's:", options: ["Past medical history only", "Current mental functioning at the time of interview", "Family income", "Blood pressure"], answer: 1, rationale: "The MSE evaluates the patient's present mental state, like a physical exam of the mind." },
      { type: "mcq", q: "A false fixed belief that cannot be corrected by reasoning is a:", options: ["Hallucination", "Illusion", "Delusion", "Obsession"], answer: 2, rationale: "A delusion is a false fixed belief (thought-content disturbance) not corrected by logic." },
      { type: "mcq", q: "A false perception occurring without any real external stimulus is a:", options: ["Delusion", "Hallucination", "Illusion", "Phobia"], answer: 1, rationale: "A hallucination is a perception without an external stimulus (e.g. hearing voices)." },
      { type: "mcq", q: "The observed outward expression of emotion is called:", options: ["Mood", "Affect", "Insight", "Judgement"], answer: 1, rationale: "Affect is the observed emotional expression; mood is the sustained subjective emotional state." },
      { type: "mcq", q: "Awareness of time, place and person is called:", options: ["Orientation", "Memory", "Affect", "Speech"], answer: 0, rationale: "Orientation refers to the patient's awareness of time, place and person." },
      { type: "mcq", q: "A misinterpretation of a REAL external stimulus is a/an:", options: ["Delusion", "Hallucination", "Illusion", "Compulsion"], answer: 2, rationale: "An illusion is the misinterpretation of an actual stimulus (e.g. mistaking a rope for a snake)." },
      { type: "mcq", q: "The patient's awareness that he or she is ill and needs treatment is:", options: ["Judgement", "Insight", "Orientation", "Mood"], answer: 1, rationale: "Insight is the patient's recognition of being ill and needing care; it is assessed in the MSE." },
      { type: "mcq", q: "Flight of ideas is a disturbance of:", options: ["Perception", "Thought form", "Appearance", "Memory"], answer: 1, rationale: "Flight of ideas is a disorder of the form (flow) of thought." },
      { type: "mcq", q: "During assessment the nurse must especially watch for:", options: ["The patient's shoe size", "Risk of suicide or violence", "The colour of the curtains", "The doctor's lunch break"], answer: 1, rationale: "Identifying risk of harm to self or others is a critical safety priority during assessment." },
      { type: "fill", q: "A false perception without a real external stimulus, such as hearing voices, is a ____.", accept: ["hallucination"], rationale: "Hallucinations are perception disturbances assessed under perception in the MSE." },
      { type: "fill", q: "The structured assessment of the patient's current mental functioning is the mental status ____.", accept: ["examination", "exam", "MSE"], rationale: "The MSE records appearance, speech, mood/affect, thought, perception, cognition, insight and judgement." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "psy-06-anxiety-ocd",
    unit: "Unit 2 · Mental Disorders",
    title: "Anxiety, Obsessive-Compulsive & Stress-Related Disorders",
    readMinutes: 17,
    summary: "Types, causes, clinical features and nursing management of anxiety disorders, phobias, OCD, and somatoform and stress-related disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Anxiety is a vague, unpleasant feeling of apprehension or dread accompanied by physical (autonomic) symptoms, in response to a perceived but often unknown threat. Mild anxiety is normal and can improve performance; it becomes a disorder when it is excessive, persistent and interferes with daily functioning. These conditions are neurotic disorders — the patient keeps contact with reality and has insight." },
      { h: "Levels of anxiety", list: [
        "Mild — increased alertness; helps learning and performance.",
        "Moderate — narrowed attention; can still focus if directed.",
        "Severe — greatly reduced perception; focuses on details only.",
        "Panic — loss of control, disorganised behaviour, terror; cannot function."
      ] },
      { h: "Types of anxiety and related disorders", list: [
        "Generalised anxiety disorder (GAD) — persistent excessive worry about many things.",
        "Panic disorder — recurrent sudden attacks of intense fear with physical symptoms.",
        "Phobias — irrational fear of a specific object or situation (e.g. agoraphobia, social phobia).",
        "Obsessive-compulsive disorder (OCD) — recurrent obsessions (intrusive thoughts) and compulsions (repetitive acts).",
        "Stress-related — acute stress reaction and post-traumatic stress disorder (PTSD).",
        "Somatoform disorders — physical symptoms with no organic cause (e.g. somatization, hypochondriasis)."
      ] },
      { h: "Causes and risk factors", list: [
        "Biological — genetic predisposition, imbalance of neurotransmitters (e.g. serotonin, GABA, noradrenaline).",
        "Psychological — faulty learning, unresolved conflict, low self-esteem, personality.",
        "Social — severe or prolonged stress, trauma, loss, family or financial problems."
      ] },
      { h: "Clinical features", list: [
        "Psychological — apprehension, worry, irritability, restlessness, poor concentration, feeling of dread.",
        "Physical (autonomic) — palpitations, sweating, dry mouth, tremor, rapid breathing, chest tightness, dizziness.",
        "OCD — obsessions (e.g. fear of contamination) and compulsions (e.g. repeated hand-washing, checking).",
        "Phobia — marked fear and avoidance of the feared object or situation.",
        "Panic attack — abrupt terror, palpitations, choking sensation, fear of dying or going mad."
      ] },
      { h: "Management (medical)", p: "Treatment combines psychological therapy and, when needed, medication. Cognitive behaviour therapy (CBT), relaxation training and exposure therapy are first-line psychological treatments. Medicines include anti-anxiety drugs (benzodiazepines for short-term use only, because of dependence) and antidepressants such as SSRIs, which are first-line for many anxiety disorders and OCD." },
      { h: "Nursing management", list: [
        "Stay with the patient during severe anxiety or panic; remain calm and reassuring.",
        "Provide a quiet, safe, non-stimulating environment.",
        "Use a calm, low voice and simple, short sentences (in panic the patient cannot process complex speech).",
        "Encourage the patient to express feelings and identify the source of anxiety.",
        "Teach relaxation techniques — slow deep breathing, muscle relaxation.",
        "For OCD, allow time for rituals initially and gradually set limits; do not ridicule.",
        "Administer prescribed medication and monitor effects and side effects.",
        "Encourage adequate rest, nutrition and gradual return to activity.",
        "Health education on coping, medication adherence and follow-up."
      ] },
      { h: "Complications and prevention", p: "Untreated anxiety can lead to depression, substance misuse, social and work impairment and physical ill-health. Prevention and health education focus on stress management, healthy coping, early recognition and seeking help, and support of the family." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define anxiety and describe its four levels.",
      "Explain the clinical features and nursing management of a patient with a panic attack.",
      "What is OCD? Describe the nursing care of a patient with OCD.",
      "List the causes and types of anxiety and related disorders.",
      "Describe the management of anxiety disorders, including drugs and therapies."
    ],
    assessment: [
      { type: "mcq", q: "Anxiety disorders are classified as:", options: ["Psychotic disorders", "Neurotic disorders", "Organic disorders", "Personality disorders"], answer: 1, rationale: "In anxiety disorders the patient keeps contact with reality and has insight — they are neurotic disorders." },
      { type: "mcq", q: "The level of anxiety in which the person loses control and cannot function is:", options: ["Mild", "Moderate", "Severe", "Panic"], answer: 3, rationale: "Panic is the most extreme level — loss of control, disorganised behaviour and terror." },
      { type: "mcq", q: "Recurrent intrusive thoughts (obsessions) with repetitive acts (compulsions) describe:", options: ["Phobia", "OCD", "Panic disorder", "PTSD"], answer: 1, rationale: "Obsessive-compulsive disorder features obsessions and compulsions such as repeated hand-washing." },
      { type: "mcq", q: "An irrational fear of a specific object or situation is a:", options: ["Delusion", "Phobia", "Hallucination", "Compulsion"], answer: 1, rationale: "A phobia is a marked irrational fear leading to avoidance of the feared object/situation." },
      { type: "mcq", q: "First-line drugs for many anxiety disorders and OCD are:", options: ["Antipsychotics", "SSRIs (antidepressants)", "Mood stabilisers", "Stimulants"], answer: 1, rationale: "SSRIs are first-line for many anxiety disorders and OCD; benzodiazepines are only for short-term use." },
      { type: "mcq", q: "During a severe panic attack the nurse should:", options: ["Leave the patient alone", "Stay with the patient and use a calm, low voice with short sentences", "Give complex instructions", "Argue with the patient"], answer: 1, rationale: "The nurse should stay, remain calm and use simple short statements because the panicking patient cannot process complex speech." },
      { type: "mcq", q: "Benzodiazepines are recommended only for short-term use because they can cause:", options: ["Hair loss", "Dependence", "Weight gain only", "Blindness"], answer: 1, rationale: "Benzodiazepines carry a risk of dependence, so they are used only short term." },
      { type: "mcq", q: "Physical symptoms with no organic cause are typical of:", options: ["Somatoform disorders", "Schizophrenia", "Dementia", "Mania"], answer: 0, rationale: "Somatoform disorders present with physical complaints that have no demonstrable organic basis." },
      { type: "mcq", q: "Which is a recommended nursing technique to lower a patient's anxiety?", options: ["Teaching slow deep breathing and relaxation", "Increasing noise and lighting", "Giving false reassurance", "Ignoring the patient"], answer: 0, rationale: "Relaxation techniques such as slow deep breathing help reduce anxiety." },
      { type: "mcq", q: "A psychological therapy that is first-line for anxiety and OCD is:", options: ["Electroconvulsive therapy", "Cognitive behaviour therapy (CBT)", "Insulin coma therapy", "Surgery"], answer: 1, rationale: "CBT, including exposure and response prevention for OCD, is a first-line psychological treatment." },
      { type: "fill", q: "Recurrent intrusive thoughts in OCD are called ____.", accept: ["obsessions", "obsession"], rationale: "Obsessions are intrusive thoughts; the repetitive acts are compulsions." },
      { type: "fill", q: "A sudden, recurrent attack of intense fear with physical symptoms is a ____ attack.", accept: ["panic"], rationale: "Panic attacks feature abrupt terror, palpitations and fear of dying." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "psy-07-mood-disorders",
    unit: "Unit 2 · Mental Disorders",
    title: "Mood Disorders: Depression & Bipolar Disorder",
    readMinutes: 18,
    summary: "Types, causes, clinical features, treatment and nursing management of depression and bipolar (manic-depressive) disorder, with emphasis on suicide risk.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Mood (affective) disorders are characterised by a marked, persistent disturbance of mood — either lowered (depression) or elevated (mania) — that is out of proportion to the situation and impairs functioning. Severe forms can include psychotic features (delusions and hallucinations)." },
      { h: "Classification", list: [
        "Depressive disorders — major depression, persistent depressive disorder (dysthymia).",
        "Bipolar disorder — episodes of both mania (or hypomania) and depression.",
        "Mania — a distinct episode of abnormally elevated, expansive or irritable mood."
      ] },
      { h: "Causes and risk factors", list: [
        "Biological — heredity, imbalance of neurotransmitters (serotonin, noradrenaline, dopamine), hormonal and physical illness.",
        "Psychological — loss, grief, low self-esteem, negative thinking patterns, personality.",
        "Social — stress, isolation, unemployment, relationship breakdown, lack of support."
      ] },
      { h: "Clinical features of depression", list: [
        "Persistent low mood and sadness.",
        "Loss of interest and pleasure (anhedonia).",
        "Reduced energy and fatigue (the three core features are low mood, anhedonia and low energy).",
        "Poor concentration and indecisiveness.",
        "Feelings of guilt, worthlessness and hopelessness.",
        "Disturbed sleep (often early morning waking) and appetite/weight change.",
        "Psychomotor retardation (slowness) or agitation.",
        "Suicidal thoughts — the most serious feature; depression is the commonest cause of suicide."
      ] },
      { h: "Clinical features of mania", list: [
        "Elevated, expansive or irritable mood.",
        "Increased energy and over-activity; reduced need for sleep.",
        "Pressure of speech and flight of ideas.",
        "Grandiose ideas and inflated self-esteem (sometimes grandiose delusions).",
        "Distractibility and poor judgement.",
        "Reckless behaviour — overspending, risky activity.",
        "Increased sociability and disinhibition."
      ] },
      { h: "Management (medical)", p: "Depression is treated with antidepressants (such as SSRIs, tricyclics) together with psychotherapy (CBT, interpersonal therapy); severe or treatment-resistant or high-suicide-risk depression may need electroconvulsive therapy (ECT). Mania and bipolar disorder are treated with mood stabilisers (lithium, valproate, carbamazepine) and antipsychotics; lithium levels must be monitored because the drug has a narrow therapeutic range." },
      { h: "Nursing management of depression", list: [
        "Assess suicide risk on every contact; ask directly about suicidal thoughts and plan; ensure a safe environment and close observation.",
        "Build a trusting, accepting relationship; spend time, do not rush or give false cheerfulness.",
        "Encourage expression of feelings and gently challenge negative thinking.",
        "Meet basic needs — nutrition, fluids, hygiene, elimination and sleep (the patient may neglect self-care).",
        "Encourage gradual activity and small achievable tasks to rebuild self-worth.",
        "Administer antidepressants and explain that effect takes 2–4 weeks; watch for increased suicide risk as energy returns.",
        "Health education to the patient and family about illness, medication and relapse signs."
      ] },
      { h: "Nursing management of mania", list: [
        "Provide a calm, safe, low-stimulation environment to reduce over-activity.",
        "Set firm, consistent and simple limits on harmful behaviour without arguing.",
        "Offer high-energy, easy-to-eat 'finger' foods and fluids because the patient is too restless to sit and eat.",
        "Channel excess energy into safe, non-competitive activity.",
        "Ensure rest and sleep; reduce stimulation at bedtime.",
        "Protect the patient from reckless acts (spending, risky behaviour).",
        "Administer mood stabilisers; monitor lithium blood levels and watch for toxicity (tremor, vomiting, confusion)."
      ] },
      { h: "Complications and prevention", p: "Major complications are suicide (in depression), exhaustion and harm during mania, relationship and financial breakdown, and relapse. Prevention includes early treatment, medication adherence, recognising relapse signs, stress management and family support." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define mood disorders. Describe the clinical features of depression.",
      "Describe the clinical features of mania.",
      "Explain the nursing management of a depressed patient, emphasising suicide prevention.",
      "Describe the nursing management of a patient in a manic episode.",
      "Discuss the drug treatment of depression and bipolar disorder."
    ],
    assessment: [
      { type: "mcq", q: "The three core features of depression are low mood, loss of interest (anhedonia) and:", options: ["High energy", "Reduced energy/fatigue", "Elevated mood", "Insomnia only"], answer: 1, rationale: "Low mood, anhedonia and reduced energy are the three core features of depression." },
      { type: "mcq", q: "The MOST serious feature of depression requiring assessment at every contact is:", options: ["Poor appetite", "Suicidal thoughts", "Constipation", "Slow speech"], answer: 1, rationale: "Suicidal ideation is the most dangerous feature; depression is the commonest cause of suicide." },
      { type: "mcq", q: "Bipolar disorder is characterised by episodes of:", options: ["Only depression", "Both mania and depression", "Only anxiety", "Only hallucinations"], answer: 1, rationale: "Bipolar disorder involves episodes of both mania (or hypomania) and depression." },
      { type: "mcq", q: "Which is a feature of MANIA?", options: ["Reduced need for sleep and flight of ideas", "Persistent sadness", "Slowed movement", "Loss of all energy"], answer: 0, rationale: "Mania features reduced need for sleep, over-activity, pressure of speech and flight of ideas." },
      { type: "mcq", q: "For a manic patient who cannot sit still to eat, the nurse should provide:", options: ["A large formal plated meal", "High-energy finger foods and fluids", "Nothing until he calms", "Only intravenous fluids"], answer: 1, rationale: "High-energy finger foods let the over-active patient eat while moving, preventing exhaustion and malnutrition." },
      { type: "mcq", q: "Antidepressants usually take how long to produce a clear effect?", options: ["A few minutes", "2–4 weeks", "6 months", "1 year"], answer: 1, rationale: "Antidepressants typically take about 2–4 weeks to act, so adherence must be encouraged." },
      { type: "mcq", q: "The mood stabiliser whose blood levels must be monitored due to a narrow therapeutic range is:", options: ["Paracetamol", "Lithium", "Vitamin C", "Aspirin"], answer: 1, rationale: "Lithium has a narrow therapeutic range; levels are monitored to avoid toxicity." },
      { type: "mcq", q: "Early signs of lithium toxicity include:", options: ["Tremor, vomiting and confusion", "Hair growth", "Improved appetite", "Clear skin"], answer: 0, rationale: "Lithium toxicity presents with coarse tremor, vomiting, diarrhoea, confusion and ataxia." },
      { type: "mcq", q: "As a depressed patient's energy returns with treatment, the nurse must especially watch for:", options: ["Increased risk of acting on suicidal thoughts", "Hair loss", "Sudden cure", "Improved memory only"], answer: 0, rationale: "Returning energy before mood fully lifts can increase the risk of carrying out suicidal plans." },
      { type: "mcq", q: "A first-line psychotherapy for depression is:", options: ["Cognitive behaviour therapy (CBT)", "Insulin coma therapy", "Lobotomy", "Hydrotherapy"], answer: 0, rationale: "CBT and interpersonal therapy are effective first-line psychotherapies for depression." },
      { type: "fill", q: "Loss of interest and pleasure in activities is called ____.", accept: ["anhedonia"], rationale: "Anhedonia is one of the three core features of depression." },
      { type: "fill", q: "The mood stabiliser that requires regular blood-level monitoring is ____.", accept: ["lithium"], rationale: "Lithium has a narrow therapeutic range and risk of toxicity." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "psy-08-schizophrenia",
    unit: "Unit 2 · Mental Disorders",
    title: "Schizophrenia & Other Psychotic Disorders",
    readMinutes: 18,
    summary: "Definition, types, causes, positive and negative symptoms, treatment and nursing management of schizophrenia and other psychotic disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Schizophrenia is a severe, chronic psychotic disorder characterised by disturbance of thinking, perception, emotion and behaviour, with loss of contact with reality. The patient typically has delusions, hallucinations and disorganised thought, and usually lacks insight. It often begins in late adolescence or early adulthood." },
      { h: "Causes and risk factors", list: [
        "Biological — strong genetic/hereditary factor; excess dopamine activity in the brain (the dopamine hypothesis); structural brain changes; birth complications.",
        "Psychological — disturbed early relationships, faulty communication, severe stress.",
        "Social — high 'expressed emotion' (criticism/over-involvement) in the family, urban living, substance use, social adversity."
      ] },
      { h: "Positive and negative symptoms", p: "Symptoms are grouped as positive (added experiences) and negative (lost normal functions).", list: [
        "Positive symptoms — delusions (false fixed beliefs), hallucinations (especially hearing voices), disorganised thought and speech, bizarre behaviour.",
        "Negative symptoms — blunted/flat affect, poverty of speech (alogia), loss of motivation (avolition), social withdrawal, anhedonia.",
        "Cognitive — poor attention, memory and decision-making."
      ], figure: {
        caption: "Schizophrenia: positive symptoms (added) versus negative symptoms (lost functions).",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Positive and negative symptoms of schizophrenia."><rect x="30" y="25" width="230" height="150" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><rect x="300" y="25" width="230" height="150" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="145" y="50" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#7C2D12">POSITIVE (added)</text><text x="415" y="50" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#B45309">NEGATIVE (lost)</text><text x="145" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Delusions</text><text x="145" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Hallucinations</text><text x="145" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Disorganised thought</text><text x="145" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Bizarre behaviour</text><text x="415" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Flat/blunted affect</text><text x="415" y="98" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Poverty of speech</text><text x="415" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Loss of motivation</text><text x="415" y="138" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Social withdrawal</text></svg>'
      } },
      { h: "Types of schizophrenia", list: [
        "Paranoid — dominated by delusions and hallucinations (often persecutory).",
        "Hebephrenic (disorganised) — disorganised speech, behaviour and inappropriate affect.",
        "Catatonic — marked motor disturbance (stupor, rigidity, posturing or excitement).",
        "Undifferentiated and residual types."
      ] },
      { h: "Other psychotic disorders", list: [
        "Delusional (paranoid) disorder — one or more fixed delusions without other major features.",
        "Acute and transient psychotic disorder — sudden, short-lasting psychosis.",
        "Schizoaffective disorder — features of both schizophrenia and a mood disorder."
      ] },
      { h: "Management (medical)", p: "The mainstay of treatment is antipsychotic (neuroleptic) drugs — typical (e.g. chlorpromazine, haloperidol) and atypical (e.g. risperidone, olanzapine). These reduce positive symptoms by blocking dopamine. Side effects include extrapyramidal symptoms (tremor, stiffness, restlessness), and the rare but dangerous neuroleptic malignant syndrome (high fever, rigidity, altered consciousness). Treatment also includes psychosocial rehabilitation, family education and social-skills training; long-acting depot injections help adherence." },
      { h: "Nursing management", list: [
        "Establish trust through a calm, consistent, honest and non-threatening approach.",
        "Ensure safety — assess for risk of self-harm or aggression, especially with command hallucinations.",
        "For hallucinations — do not argue about their reality or pretend to share them; acknowledge the experience and redirect to reality-based activity.",
        "For delusions — do not confront or reinforce; focus on the patient's feelings and reality.",
        "Meet basic needs — nutrition, hygiene, sleep — because withdrawal and negative symptoms cause self-neglect.",
        "Encourage gradual social interaction and structured activity.",
        "Administer antipsychotics; observe for therapeutic and side effects (especially extrapyramidal symptoms).",
        "Educate the patient and family about the illness, medication adherence and relapse signs; reduce expressed emotion."
      ] },
      { h: "Complications and prognosis", p: "Complications include self-neglect, suicide, social and occupational decline, relapse and drug side effects. Outcome varies: with early treatment and adherence, many patients improve, though it is often a long-term illness needing continued support." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define schizophrenia and list its causes.",
      "Differentiate between positive and negative symptoms of schizophrenia.",
      "Describe the types of schizophrenia.",
      "Explain the nursing management of a patient with hallucinations and delusions.",
      "Discuss antipsychotic drug treatment and its common side effects."
    ],
    assessment: [
      { type: "mcq", q: "Schizophrenia is classified as a:", options: ["Neurotic disorder", "Psychotic disorder", "Mood disorder", "Personality disorder"], answer: 1, rationale: "Schizophrenia is a severe psychotic disorder with loss of contact with reality." },
      { type: "mcq", q: "A POSITIVE symptom of schizophrenia is:", options: ["Flat affect", "Hallucinations", "Social withdrawal", "Poverty of speech"], answer: 1, rationale: "Hallucinations and delusions are positive (added) symptoms; the others are negative symptoms." },
      { type: "mcq", q: "A NEGATIVE symptom of schizophrenia is:", options: ["Delusions", "Hallucinations", "Blunted affect and loss of motivation", "Bizarre behaviour"], answer: 2, rationale: "Negative symptoms are losses of normal function such as flat affect and avolition." },
      { type: "mcq", q: "The neurotransmitter most implicated in schizophrenia is:", options: ["Insulin", "Dopamine", "Calcium", "Adrenaline only"], answer: 1, rationale: "The dopamine hypothesis links schizophrenia to excess dopamine activity; antipsychotics block dopamine." },
      { type: "mcq", q: "When a patient reports hearing voices, the nurse should:", options: ["Argue that the voices are not real", "Pretend to hear them too", "Acknowledge the experience and redirect to reality", "Ignore the patient completely"], answer: 2, rationale: "The nurse should neither argue nor pretend to share hallucinations, but acknowledge the experience and reorient the patient." },
      { type: "mcq", q: "Antipsychotic drugs can cause extrapyramidal side effects such as:", options: ["Tremor and muscle stiffness", "Improved eyesight", "Hair growth", "Weight loss only"], answer: 0, rationale: "Extrapyramidal symptoms include tremor, rigidity, restlessness and abnormal movements." },
      { type: "mcq", q: "A rare but life-threatening reaction to antipsychotics with high fever and rigidity is:", options: ["Common cold", "Neuroleptic malignant syndrome", "Asthma", "Hypoglycaemia"], answer: 1, rationale: "Neuroleptic malignant syndrome presents with high fever, severe rigidity and altered consciousness and is a medical emergency." },
      { type: "mcq", q: "The type of schizophrenia dominated by delusions and hallucinations is:", options: ["Catatonic", "Paranoid", "Hebephrenic", "Residual"], answer: 1, rationale: "Paranoid schizophrenia is dominated by delusions and hallucinations, often persecutory." },
      { type: "mcq", q: "To improve medication adherence in schizophrenia, the team may use:", options: ["No medication", "Long-acting depot injections", "Only oral once-yearly tablets", "Vitamins instead"], answer: 1, rationale: "Long-acting depot antipsychotic injections improve adherence in patients who forget oral medication." },
      { type: "mcq", q: "High 'expressed emotion' (criticism and over-involvement) in the family is linked to:", options: ["Faster cure", "Higher relapse risk", "No effect", "Lower blood pressure"], answer: 1, rationale: "High expressed emotion increases the risk of relapse; family education aims to reduce it." },
      { type: "fill", q: "Delusions and hallucinations are examples of ____ symptoms of schizophrenia.", accept: ["positive"], rationale: "Positive symptoms are added experiences; negative symptoms are lost functions." },
      { type: "fill", q: "The brain chemical most linked to schizophrenia is ____.", accept: ["dopamine"], rationale: "The dopamine hypothesis underlies the action of antipsychotic drugs." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "psy-09-substance-use",
    unit: "Unit 2 · Mental Disorders",
    title: "Substance Use & Dependence Disorders",
    readMinutes: 17,
    summary: "Concepts of use, abuse, dependence and tolerance; commonly misused substances; features of intoxication and withdrawal; and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key concepts and definitions", list: [
        "Substance use — taking a drug; substance abuse (misuse) — harmful or hazardous use.",
        "Dependence (addiction) — a strong desire to take the substance, loss of control, and continued use despite harm.",
        "Tolerance — needing more of the substance to get the same effect.",
        "Withdrawal — a set of symptoms that appear when a dependent person stops or reduces the substance.",
        "Intoxication — the immediate effects of taking the substance.",
        "Craving — a powerful urge to use the substance."
      ] },
      { h: "Commonly misused substances", list: [
        "Alcohol — the most widely misused legal substance.",
        "Opioids — heroin, morphine, codeine.",
        "Cannabis (ganja, marijuana).",
        "Stimulants — amphetamines, cocaine, caffeine, yaba (methamphetamine).",
        "Sedatives — benzodiazepines, sleeping pills.",
        "Tobacco (nicotine).",
        "Inhalants/solvents — glue, petrol fumes (common in street children)."
      ] },
      { h: "Causes and risk factors", list: [
        "Biological — genetic vulnerability, the rewarding effect of drugs on the brain.",
        "Psychological — curiosity, low self-esteem, escape from stress, mental illness.",
        "Social — peer pressure, easy availability, family problems, unemployment, cultural acceptance."
      ] },
      { h: "Features of intoxication and dependence", list: [
        "Intoxication — slurred speech, unsteady gait, impaired judgement, mood change, drowsiness or excitement depending on the drug.",
        "Dependence — preoccupation with the drug, neglect of work, family and self-care, continued use despite harm, tolerance.",
        "Physical signs — needle marks, poor nutrition, weight loss, red eyes, smell of alcohol."
      ] },
      { h: "Withdrawal", p: "Withdrawal features depend on the substance. Alcohol withdrawal can range from tremor, sweating, anxiety and insomnia to the dangerous delirium tremens (confusion, agitation, hallucinations, fever and seizures), which is a medical emergency. Opioid withdrawal causes craving, muscle aches, running nose and eyes, diarrhoea, vomiting and dilated pupils — very distressing but rarely life-threatening." },
      { h: "Management (medical)", p: "Treatment has stages: detoxification (safely managing withdrawal, e.g. benzodiazepines and thiamine for alcohol withdrawal to prevent delirium tremens and Wernicke's encephalopathy), followed by rehabilitation and relapse prevention. Substitution therapy (e.g. methadone for opioids), counselling, motivational interviewing, group therapy and self-help groups (such as Alcoholics Anonymous) are used. Co-existing mental illness is treated." },
      { h: "Nursing management", list: [
        "Adopt a non-judgemental, accepting and supportive attitude.",
        "Monitor vital signs and watch for withdrawal complications (especially delirium tremens and seizures).",
        "Ensure a safe, calm environment and prevent injury during withdrawal.",
        "Administer prescribed medication (e.g. benzodiazepines, thiamine) and monitor effects.",
        "Maintain nutrition, hydration and rest; these patients are often malnourished.",
        "Help the patient recognise the problem and motivate change; build coping skills.",
        "Involve the family and link to rehabilitation and self-help groups.",
        "Health education on the harms of substances and relapse prevention."
      ] },
      { h: "Complications and prevention", p: "Complications include physical disease (liver disease, infections such as HIV/hepatitis from shared needles), accidents, crime, family breakdown, mental illness and overdose death. Prevention focuses on health education, life-skills and refusal skills, reducing availability, early identification and community support." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define substance abuse, dependence, tolerance and withdrawal.",
      "Name the commonly misused substances and the causes of substance abuse.",
      "Describe alcohol withdrawal and delirium tremens.",
      "Explain the stages of treatment of substance dependence.",
      "Describe the nursing management of a patient in drug withdrawal."
    ],
    assessment: [
      { type: "mcq", q: "Needing more of a drug to get the same effect is called:", options: ["Withdrawal", "Tolerance", "Intoxication", "Craving"], answer: 1, rationale: "Tolerance is the need for increasing amounts to achieve the same effect." },
      { type: "mcq", q: "Symptoms that appear when a dependent person stops the substance are called:", options: ["Intoxication", "Tolerance", "Withdrawal", "Relapse"], answer: 2, rationale: "Withdrawal is the cluster of symptoms occurring on stopping or reducing the substance." },
      { type: "mcq", q: "The most widely misused legal substance is:", options: ["Heroin", "Alcohol", "Cocaine", "Cannabis"], answer: 1, rationale: "Alcohol is the most widely misused legal substance." },
      { type: "mcq", q: "A dangerous, emergency form of alcohol withdrawal is:", options: ["Common cold", "Delirium tremens", "Hay fever", "Constipation"], answer: 1, rationale: "Delirium tremens causes confusion, agitation, hallucinations, fever and seizures and is a medical emergency." },
      { type: "mcq", q: "The vitamin given to prevent Wernicke's encephalopathy in alcohol withdrawal is:", options: ["Vitamin C", "Thiamine (B1)", "Vitamin D", "Vitamin K"], answer: 1, rationale: "Thiamine (vitamin B1) is given to prevent Wernicke's encephalopathy in alcohol-dependent patients." },
      { type: "mcq", q: "Safely managing withdrawal as the first stage of treatment is called:", options: ["Rehabilitation", "Detoxification", "Relapse", "Tolerance"], answer: 1, rationale: "Detoxification is the safe management of withdrawal, the first stage before rehabilitation." },
      { type: "mcq", q: "The MOST appropriate attitude of the nurse toward a substance-dependent patient is:", options: ["Judgemental and critical", "Non-judgemental and supportive", "Ignoring", "Punitive"], answer: 1, rationale: "A non-judgemental, accepting and supportive attitude encourages trust and engagement in treatment." },
      { type: "mcq", q: "A substitution drug used in the treatment of opioid dependence is:", options: ["Methadone", "Paracetamol", "Insulin", "Aspirin"], answer: 0, rationale: "Methadone is used as substitution therapy for opioid dependence." },
      { type: "mcq", q: "Sharing needles among injecting drug users mainly increases the risk of:", options: ["Diabetes", "HIV and hepatitis infection", "Asthma", "Cataract"], answer: 1, rationale: "Sharing needles spreads blood-borne infections such as HIV and hepatitis." },
      { type: "mcq", q: "A well-known self-help group for people with alcohol problems is:", options: ["Alcoholics Anonymous", "The Red Cross", "WHO", "A football club"], answer: 0, rationale: "Alcoholics Anonymous is a self-help group supporting recovery and relapse prevention." },
      { type: "fill", q: "A strong urge or desire to use a substance is called ____.", accept: ["craving"], rationale: "Craving is a powerful urge to take the substance and drives relapse." },
      { type: "fill", q: "The first stage of treatment, safely managing withdrawal, is called ____.", accept: ["detoxification", "detox"], rationale: "Detoxification is followed by rehabilitation and relapse prevention." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "psy-10-organic-disorders",
    unit: "Unit 2 · Mental Disorders",
    title: "Organic Mental Disorders: Delirium & Dementia",
    readMinutes: 17,
    summary: "Causes, clinical features, key differences and nursing management of delirium and dementia, the two main organic (physical) mental disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What are organic mental disorders?", p: "Organic mental disorders are mental disturbances caused by a demonstrable physical disturbance of the brain — from disease, injury, infection, toxins or metabolic problems — rather than primarily psychological causes. The two most important are delirium and dementia." },
      { h: "Delirium — definition and causes", p: "Delirium (acute confusional state) is an acute, usually reversible disturbance of consciousness and cognition that develops over hours to days and fluctuates during the day. Common causes are infection (e.g. urinary or chest), fever, dehydration, electrolyte imbalance, drugs and alcohol/drug withdrawal, hypoxia, and post-operative states — especially in the very young, the elderly and the seriously ill." },
      { h: "Delirium — clinical features", list: [
        "Clouding of consciousness and reduced awareness of surroundings.",
        "Disorientation in time, place and sometimes person.",
        "Fluctuating course — worse at night (sundowning).",
        "Impaired attention and memory.",
        "Disturbed perception — illusions and hallucinations (often visual).",
        "Disturbed sleep–wake cycle.",
        "Restlessness or, sometimes, drowsiness; fear and agitation."
      ] },
      { h: "Dementia — definition and causes", p: "Dementia is a chronic, usually progressive and irreversible decline in memory and other higher mental functions, occurring in clear consciousness. The commonest cause is Alzheimer's disease; others include vascular dementia (from strokes), and dementia in other brain diseases. It mainly affects older people." },
      { h: "Dementia — clinical features", list: [
        "Progressive memory loss (recent memory first).",
        "Impaired thinking, judgement and reasoning.",
        "Disorientation, especially to time and place.",
        "Difficulty with language (finding words), calculation and learning.",
        "Loss of ability to perform daily activities and self-care.",
        "Personality and mood changes; later, wandering, incontinence and total dependence."
      ] },
      { h: "Delirium versus dementia", p: "Distinguishing the two is important because delirium is a treatable emergency.", figure: {
        caption: "Key differences between delirium and dementia.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Delirium versus dementia comparison."><rect x="30" y="25" width="230" height="155" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><rect x="300" y="25" width="230" height="155" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="145" y="50" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#B45309">DELIRIUM</text><text x="415" y="50" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#7C2D12">DEMENTIA</text><text x="145" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Acute (hours–days)</text><text x="145" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Consciousness clouded</text><text x="145" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Fluctuates, worse at night</text><text x="145" y="144" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Usually reversible</text><text x="145" y="166" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#92400E">Medical emergency</text><text x="415" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Gradual (months–years)</text><text x="415" y="100" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Consciousness clear</text><text x="415" y="122" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Steady, progressive</text><text x="415" y="144" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Usually irreversible</text><text x="415" y="166" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#7C2D12">Chronic decline</text></svg>'
      } },
      { h: "Management (medical)", p: "Delirium: find and treat the underlying cause (e.g. treat infection, correct dehydration and electrolytes, stop offending drugs); use small doses of medication only if essential for severe agitation. Dementia: there is no cure for most types; treatment aims to slow decline, manage symptoms (some drugs may help in Alzheimer's), treat depression or agitation, and support the patient and carers." },
      { h: "Nursing management", list: [
        "Ensure safety — prevent falls, wandering and injury; supervise closely.",
        "Provide a calm, well-lit, familiar environment; reduce noise and over-stimulation.",
        "Reorient the patient gently and frequently (clock, calendar, naming the day and place).",
        "Keep a regular routine; avoid frequent changes of staff and surroundings.",
        "Communicate clearly with short simple sentences; be patient and reassuring.",
        "Meet basic needs — nutrition, fluids, hygiene, elimination, sleep.",
        "Avoid restraints where possible; they increase confusion and agitation.",
        "Support and educate the family/carers; involve them in care.",
        "For delirium, monitor vital signs and report changes; treat the cause urgently."
      ] },
      { h: "Complications and prevention", p: "Delirium can lead to falls, injury, exhaustion, and death if the cause is untreated; dementia leads to total dependence and complications of immobility. Prevention of delirium includes good hydration, treating infection early, careful use of drugs and reorientation; for dementia, managing vascular risk factors helps reduce vascular dementia." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define organic mental disorders. Name two examples.",
      "Describe the causes and clinical features of delirium.",
      "Describe the clinical features of dementia.",
      "Differentiate between delirium and dementia.",
      "Explain the nursing management of a confused (delirious or demented) patient."
    ],
    assessment: [
      { type: "mcq", q: "Organic mental disorders are caused by:", options: ["Only emotional conflict", "A demonstrable physical disturbance of the brain", "Bad parenting alone", "Lack of education"], answer: 1, rationale: "Organic disorders arise from a physical disturbance of the brain (disease, injury, toxins, metabolic problems)." },
      { type: "mcq", q: "Delirium is BEST described as:", options: ["A chronic, irreversible decline", "An acute, usually reversible confusional state", "A type of phobia", "A mood disorder"], answer: 1, rationale: "Delirium is acute in onset, fluctuating and usually reversible if the cause is treated." },
      { type: "mcq", q: "A key feature that distinguishes DELIRIUM from dementia is:", options: ["Clear consciousness", "Clouding of consciousness and fluctuating course", "Gradual onset over years", "No effect on attention"], answer: 1, rationale: "Delirium clouds consciousness and fluctuates (worse at night); dementia occurs in clear consciousness." },
      { type: "mcq", q: "The commonest cause of dementia is:", options: ["Alzheimer's disease", "Common cold", "Asthma", "Anaemia"], answer: 0, rationale: "Alzheimer's disease is the commonest cause of dementia." },
      { type: "mcq", q: "Dementia is characterised by:", options: ["Sudden onset and clouded consciousness", "Progressive memory loss in clear consciousness", "Complete recovery in a day", "Only visual hallucinations"], answer: 1, rationale: "Dementia is a chronic, progressive decline in memory and cognition occurring in clear consciousness." },
      { type: "mcq", q: "Worsening of confusion in the evening or at night is called:", options: ["Sundowning", "Anhedonia", "Tolerance", "Catatonia"], answer: 0, rationale: "Sundowning is the worsening of confusion and agitation in the late afternoon or night, common in delirium and dementia." },
      { type: "mcq", q: "An important nursing action for a confused patient is to:", options: ["Frequently change rooms and staff", "Reorient gently and keep a familiar, calm routine", "Increase noise and lights", "Leave the patient alone in the dark"], answer: 1, rationale: "Frequent gentle reorientation and a stable, calm, familiar environment reduce confusion." },
      { type: "mcq", q: "Physical restraints in a confused patient should be:", options: ["Used routinely", "Avoided where possible as they worsen confusion", "The first choice always", "Used instead of supervision"], answer: 1, rationale: "Restraints tend to increase agitation and confusion and should be avoided where possible." },
      { type: "mcq", q: "The MOST important step in managing delirium is to:", options: ["Sedate heavily and ignore the cause", "Find and treat the underlying physical cause", "Discharge the patient quickly", "Give a high-protein diet only"], answer: 1, rationale: "Delirium is usually reversible when the underlying cause (e.g. infection, dehydration) is identified and treated." },
      { type: "mcq", q: "Compared with delirium, dementia is usually:", options: ["Reversible and acute", "Irreversible and gradual", "Cured in hours", "Caused by infection only"], answer: 1, rationale: "Dementia is usually irreversible and develops gradually, unlike the acute reversible delirium." },
      { type: "fill", q: "An acute, fluctuating, usually reversible confusional state is called ____.", accept: ["delirium", "acute confusional state"], rationale: "Delirium is a medical emergency requiring treatment of the underlying cause." },
      { type: "fill", q: "The commonest cause of dementia is ____ disease.", accept: ["Alzheimer's", "Alzheimer", "Alzheimers"], rationale: "Alzheimer's disease is the leading cause of dementia." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "psy-11-child-personality",
    unit: "Unit 2 · Mental Disorders",
    title: "Childhood, Adolescent & Personality Disorders",
    readMinutes: 16,
    summary: "Common psychiatric disorders of childhood and adolescence, types and features of personality disorders, and the nursing approach to each.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Mental disorders in children and adolescents", p: "Children and adolescents can have mental disorders that differ from those of adults because they are still developing. Early recognition and support from family, school and health services are important for healthy development." },
      { h: "Common childhood and adolescent disorders", list: [
        "Intellectual disability (mental retardation) — significantly below-average intellectual functioning with limited daily-living skills, present from childhood.",
        "Autism spectrum disorder — impaired social interaction and communication, restricted and repetitive behaviour.",
        "Attention-deficit/hyperactivity disorder (ADHD) — inattention, hyperactivity and impulsiveness.",
        "Conduct disorder — repeated aggressive, antisocial or rule-breaking behaviour.",
        "Enuresis and encopresis — repeated bed-wetting or soiling beyond the expected age.",
        "Learning disorders — specific difficulty with reading, writing or arithmetic.",
        "Childhood anxiety and depression."
      ] },
      { h: "Causes in children and adolescents", list: [
        "Biological — genetic factors, brain injury, birth complications, illness.",
        "Psychological — temperament, trauma, abuse or neglect.",
        "Social — poor parenting, family conflict, poverty, school problems, peer influence."
      ] },
      { h: "Nursing care of children and adolescents", list: [
        "Build trust through play, patience and a warm, accepting manner.",
        "Provide a safe, structured, predictable environment with clear consistent rules.",
        "Use praise and positive reinforcement to encourage good behaviour.",
        "Support development of social, self-care and learning skills.",
        "Involve and educate the family; support parenting.",
        "Protect the child from harm, abuse and neglect, and report concerns.",
        "Liaise with school and community services."
      ] },
      { h: "Personality disorders — definition", p: "A personality disorder is a deeply ingrained, enduring pattern of inner experience and behaviour that differs markedly from cultural expectations, is inflexible and pervasive, begins by adolescence or early adulthood, and causes distress or impairment in relationships and functioning. The person usually sees the problem as part of themselves and often lacks insight." },
      { h: "Types of personality disorder (clusters)", list: [
        "Cluster A (odd/eccentric) — paranoid, schizoid, schizotypal.",
        "Cluster B (dramatic/emotional) — antisocial, borderline, histrionic, narcissistic.",
        "Cluster C (anxious/fearful) — avoidant, dependent, obsessive-compulsive personality."
      ], figure: {
        caption: "The three clusters of personality disorders.",
        svg: '<svg viewBox="0 0 560 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three clusters of personality disorders."><rect x="20" y="40" width="165" height="90" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><rect x="197" y="40" width="165" height="90" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><rect x="374" y="40" width="165" height="90" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="102" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Cluster A</text><text x="102" y="85" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Odd / eccentric</text><text x="102" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">paranoid, schizoid</text><text x="279" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">Cluster B</text><text x="279" y="85" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">Dramatic / emotional</text><text x="279" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">antisocial, borderline</text><text x="456" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Cluster C</text><text x="456" y="85" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Anxious / fearful</text><text x="456" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">avoidant, dependent</text></svg>'
      } },
      { h: "Nursing management of personality disorders", list: [
        "Set clear, firm, consistent limits on unacceptable behaviour (especially manipulation or self-harm in borderline/antisocial types).",
        "Maintain a calm, non-judgemental, consistent approach by the whole team to prevent splitting.",
        "Keep firm professional boundaries.",
        "Encourage the patient to take responsibility for behaviour and consequences.",
        "Assess for and prevent self-harm and suicide (high in borderline personality disorder).",
        "Help the patient develop better coping and social skills; support psychotherapy.",
        "Support medication if used for specific symptoms (e.g. mood, impulsivity)."
      ] }
    ],
    references: REF_PSY,
    examQuestions: [
      "Name and describe four common psychiatric disorders of childhood.",
      "What is ADHD? Describe its features.",
      "Define personality disorder and list the three clusters with examples.",
      "Describe the nursing management of a patient with a personality disorder.",
      "Discuss the nursing care of a child with a mental disorder."
    ],
    assessment: [
      { type: "mcq", q: "ADHD in children is characterised by:", options: ["Inattention, hyperactivity and impulsiveness", "Memory loss in old age", "Hearing voices", "Bed-wetting only"], answer: 0, rationale: "Attention-deficit/hyperactivity disorder features inattention, hyperactivity and impulsiveness." },
      { type: "mcq", q: "Impaired social interaction, impaired communication and repetitive behaviour describe:", options: ["Conduct disorder", "Autism spectrum disorder", "Enuresis", "Depression"], answer: 1, rationale: "Autism spectrum disorder features social and communication impairment with restricted, repetitive behaviour." },
      { type: "mcq", q: "Repeated bed-wetting beyond the expected age is called:", options: ["Encopresis", "Enuresis", "Anorexia", "Autism"], answer: 1, rationale: "Enuresis is repeated involuntary passing of urine (bed-wetting) beyond the expected age; soiling is encopresis." },
      { type: "mcq", q: "A personality disorder is an enduring pattern of behaviour that:", options: ["Begins suddenly in old age", "Begins by adolescence/early adulthood and is inflexible and pervasive", "Lasts only one day", "Has no effect on relationships"], answer: 1, rationale: "Personality disorders are deeply ingrained, inflexible patterns beginning by early adulthood that impair functioning." },
      { type: "mcq", q: "Antisocial and borderline personality disorders belong to:", options: ["Cluster A", "Cluster B", "Cluster C", "No cluster"], answer: 1, rationale: "Cluster B (dramatic/emotional) includes antisocial, borderline, histrionic and narcissistic types." },
      { type: "mcq", q: "Paranoid and schizoid personality disorders belong to:", options: ["Cluster A (odd/eccentric)", "Cluster B", "Cluster C", "None"], answer: 0, rationale: "Cluster A (odd/eccentric) includes paranoid, schizoid and schizotypal types." },
      { type: "mcq", q: "The personality disorder with the HIGHEST risk of self-harm and suicide is:", options: ["Avoidant", "Borderline", "Dependent", "Schizoid"], answer: 1, rationale: "Borderline personality disorder carries a high risk of self-harm and suicide." },
      { type: "mcq", q: "When the whole team uses a consistent approach with a manipulative patient, it helps to prevent:", options: ["Recovery", "Splitting", "Sleep", "Appetite"], answer: 1, rationale: "A consistent team approach prevents 'splitting', where the patient plays staff against each other." },
      { type: "mcq", q: "A key nursing strategy for personality disorders is to:", options: ["Give in to all demands", "Set clear, firm and consistent limits", "Avoid the patient entirely", "Argue constantly"], answer: 1, rationale: "Clear, firm, consistent limits with professional boundaries are central to managing personality disorders." },
      { type: "mcq", q: "The best way to build trust with a child patient is through:", options: ["Strict punishment", "Play, patience and a warm accepting manner", "Ignoring the child", "Long lectures"], answer: 1, rationale: "Trust with children is built through play, patience and a warm, accepting approach." },
      { type: "fill", q: "The childhood disorder of inattention, hyperactivity and impulsiveness is abbreviated ____.", accept: ["ADHD"], rationale: "ADHD = attention-deficit/hyperactivity disorder." },
      { type: "fill", q: "Antisocial and borderline personality disorders belong to Cluster ____.", accept: ["B"], rationale: "Cluster B is the dramatic/emotional group of personality disorders." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "psy-12-emergencies",
    unit: "Unit 3 · Psychiatric Care & Treatment",
    title: "Psychiatric Emergencies: Suicide, Aggression & Violence",
    readMinutes: 18,
    summary: "Recognition, risk assessment and nursing management of the major psychiatric emergencies — suicide and self-harm, and aggression and violent behaviour.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a psychiatric emergency?", p: "A psychiatric emergency is any disturbance of thought, mood or behaviour that requires immediate intervention to prevent harm to the patient or others. The two most important are suicidal behaviour and aggressive/violent behaviour. Others include severe panic, acute psychosis, delirium and drug overdose." },
      { h: "Suicide — definition and importance", p: "Suicide is the act of intentionally ending one's own life. Suicidal ideas, attempts and completed suicide are major preventable causes of death, most often linked to depression but also to other disorders. Every threat must be taken seriously — asking about suicide does NOT plant the idea." },
      { h: "Suicide — risk factors and warning signs", list: [
        "Risk factors — depression and other mental illness, previous attempt, hopelessness, substance abuse, chronic illness or pain, recent loss, isolation, family history of suicide.",
        "Warning signs — talking about death or wanting to die, hopelessness, giving away possessions, sudden calmness after agitation, writing notes, collecting means (tablets, rope).",
        "A clear plan, lethal method and availability of means raise the risk greatly."
      ] },
      { h: "Nursing management of the suicidal patient", list: [
        "Assess risk directly and openly — ask about thoughts, plan, method and means; never dismiss a threat.",
        "Ensure a SAFE environment — remove dangerous objects (sharp items, ropes, belts, medicines, poisons).",
        "Provide close, continuous observation (one-to-one for high risk); do not leave alone.",
        "Build a trusting, accepting relationship; listen, allow expression of feelings, instil hope.",
        "Make a 'no-suicide' / safety plan with the patient where appropriate.",
        "Administer treatment for the underlying illness (e.g. antidepressants) and monitor.",
        "Involve and educate the family; arrange follow-up; never break observation until risk falls."
      ] },
      { h: "Aggression and violence — definition", p: "Aggression is behaviour intended to harm; violence is the physical expression of it. In psychiatric settings it may arise from psychosis, mania, intoxication or withdrawal, delirium, personality disorder or fear. Aggression usually builds up through stages, giving the nurse a chance to intervene early." },
      { h: "Aggression — warning signs (escalation)", p: "Recognising early signs allows de-escalation before violence occurs.", list: [
        "Increasing restlessness, pacing, tense posture.",
        "Loud, rapid or threatening speech; clenched fists or jaw.",
        "Staring or angry facial expression.",
        "Demanding, irritable or argumentative behaviour.",
        "Verbal threats, then physical aggression if not managed."
      ], figure: {
        caption: "The aggression cycle: early recognition allows de-escalation before violence.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Aggression escalation cycle."><defs><marker id="psyArr12" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="10" y="45" width="110" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="65" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Calm</text><rect x="140" y="45" width="110" height="45" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="195" y="65" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Trigger /</text><text x="195" y="80" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">build-up</text><rect x="270" y="45" width="110" height="45" rx="8" fill="#FFEDD5" stroke="#B45309" stroke-width="2"/><text x="325" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#B45309">Escalation</text><rect x="400" y="45" width="110" height="45" rx="8" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="455" y="72" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#7C2D12">Crisis</text><line x1="120" y1="67" x2="138" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#psyArr12)"/><line x1="250" y1="67" x2="268" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#psyArr12)"/><line x1="380" y1="67" x2="398" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#psyArr12)"/><text x="280" y="118" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">De-escalate early to prevent violence</text></svg>'
      } },
      { h: "Nursing management of the aggressive patient", list: [
        "Stay calm; use a quiet, non-threatening voice and relaxed posture.",
        "Ensure your own and others' safety — keep a safe distance, an exit behind you, and call for help.",
        "Remove other patients and dangerous objects from the area.",
        "De-escalate — listen, acknowledge feelings, set clear limits, offer choices (e.g. medication, time-out).",
        "Avoid arguing, threatening, cornering or touching the patient suddenly.",
        "If de-escalation fails, use trained team physical restraint or seclusion only as a last resort and as briefly as possible, following policy.",
        "Give prescribed rapid tranquillisation if ordered; monitor the patient closely afterwards.",
        "Debrief and document the incident."
      ] },
      { h: "Prevention", p: "Prevention relies on early identification of risk, a calm therapeutic environment, treating the underlying illness, good staff training in de-escalation, and supportive follow-up for both suicidal and aggressive patients." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define a psychiatric emergency and give examples.",
      "List the risk factors and warning signs of suicide.",
      "Describe the nursing management of a suicidal patient.",
      "Describe the warning signs of aggression and how to de-escalate it.",
      "Explain the nursing management of a violent patient, including the use of restraint."
    ],
    assessment: [
      { type: "mcq", q: "Asking a depressed patient directly about suicidal thoughts:", options: ["Will plant the idea of suicide", "Is an important part of risk assessment and does not cause suicide", "Should never be done", "Always makes things worse"], answer: 1, rationale: "Asking openly about suicide is essential for risk assessment and does NOT plant the idea." },
      { type: "mcq", q: "The MOST important nursing action for a high-risk suicidal patient is to:", options: ["Leave the patient to rest alone", "Provide a safe environment and close continuous observation", "Give a large meal", "Discharge quickly"], answer: 1, rationale: "Removing means of harm and providing close observation in a safe environment are the priority for suicide prevention." },
      { type: "mcq", q: "Which raises suicide risk the MOST?", options: ["Having a clear plan, lethal method and available means", "Eating well", "Sleeping eight hours", "Having strong family support"], answer: 0, rationale: "A specific plan with a lethal, available method greatly increases suicide risk." },
      { type: "mcq", q: "A warning sign of suicide is:", options: ["Sudden calmness after agitation and giving away possessions", "Increased appetite", "Starting a new hobby with friends", "Improved sleep"], answer: 0, rationale: "Sudden calm after distress and giving away belongings can signal a decision to die." },
      { type: "mcq", q: "When facing an escalating aggressive patient, the nurse should FIRST:", options: ["Corner the patient", "Stay calm, keep a safe distance and de-escalate", "Argue loudly", "Touch the patient suddenly"], answer: 1, rationale: "Remaining calm, keeping a safe distance and de-escalating verbally is the safe first response." },
      { type: "mcq", q: "Physical restraint or seclusion of a violent patient should be:", options: ["The first action always", "A last resort, used briefly and per policy", "Used for punishment", "Avoided even when there is danger"], answer: 1, rationale: "Restraint/seclusion is a last resort used only when de-escalation fails, as briefly as possible and following policy." },
      { type: "mcq", q: "For personal safety when managing an aggressive patient, the nurse should:", options: ["Block the only exit", "Keep an exit accessible and call for help", "Work entirely alone", "Stand very close"], answer: 1, rationale: "Keeping an accessible exit and summoning help protects the nurse and others." },
      { type: "mcq", q: "Recognising early warning signs of aggression allows the nurse to:", options: ["Ignore the patient", "De-escalate before violence occurs", "Punish the patient", "Discharge immediately"], answer: 1, rationale: "Aggression builds in stages; early recognition enables de-escalation before a crisis." },
      { type: "mcq", q: "Which is a de-escalation technique?", options: ["Listening, acknowledging feelings and offering choices", "Shouting back", "Threatening punishment", "Restraining immediately"], answer: 0, rationale: "Listening, acknowledging feelings, setting limits and offering choices help calm an agitated patient." },
      { type: "mcq", q: "Depression is most strongly associated with which psychiatric emergency?", options: ["Suicide", "Dementia", "Phobia", "Enuresis"], answer: 0, rationale: "Depression is the commonest underlying cause of suicidal behaviour." },
      { type: "fill", q: "The continuous close watching of a high-risk suicidal patient is called close ____.", accept: ["observation", "monitoring"], rationale: "Close (one-to-one) observation prevents the patient from acting on suicidal urges." },
      { type: "fill", q: "Calming an agitated patient before violence occurs is called ____.", accept: ["de-escalation", "deescalation"], rationale: "De-escalation uses calm communication, limit-setting and choices to prevent violence." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "psy-13-psychopharmacology-ect",
    unit: "Unit 3 · Psychiatric Care & Treatment",
    title: "Psychopharmacology & Electroconvulsive Therapy (ECT)",
    readMinutes: 18,
    summary: "Main classes of psychiatric drugs, their uses and side effects, the role of the nurse in drug therapy, and the procedure and nursing care for ECT.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is psychopharmacology?", p: "Psychopharmacology is the study of drugs that act on the mind and are used to treat mental disorders (psychotropic drugs). These drugs work mainly by altering neurotransmitters in the brain. They are usually combined with psychological and social treatment for the best result." },
      { h: "Main classes of psychotropic drugs", list: [
        "Antipsychotics (neuroleptics) — for schizophrenia and psychosis; e.g. chlorpromazine, haloperidol (typical), risperidone, olanzapine (atypical).",
        "Antidepressants — for depression and many anxiety disorders; e.g. SSRIs (fluoxetine, sertraline), tricyclics (amitriptyline).",
        "Mood stabilisers — for bipolar disorder; e.g. lithium, valproate, carbamazepine.",
        "Anti-anxiety (anxiolytics) and sedative-hypnotics — for anxiety and sleep; e.g. benzodiazepines (short term only).",
        "Anticholinergic / antiparkinsonian drugs — to control extrapyramidal side effects of antipsychotics."
      ] },
      { h: "Important side effects to know", list: [
        "Antipsychotics — extrapyramidal symptoms (tremor, rigidity, restlessness/akathisia, abnormal movements), sedation, weight gain; the rare neuroleptic malignant syndrome (high fever, rigidity, altered consciousness — emergency).",
        "Antidepressants (SSRIs) — nausea, headache, sleep and sexual problems; tricyclics — dry mouth, constipation, blurred vision, drowsiness; effect takes 2–4 weeks.",
        "Lithium — narrow therapeutic range; toxicity shows as tremor, vomiting, diarrhoea, confusion (monitor blood levels).",
        "Benzodiazepines — drowsiness and dependence (short-term use only)."
      ] },
      { h: "Role of the nurse in drug therapy", list: [
        "Administer the right drug, dose, route, time to the right patient (the rights of medication).",
        "Check that the patient actually swallows the medicine (some hide tablets).",
        "Observe for therapeutic effects and side effects and report them.",
        "Watch for and manage emergencies (e.g. neuroleptic malignant syndrome, lithium toxicity).",
        "Educate the patient and family — purpose, how to take, side effects, not to stop suddenly, and that some drugs take weeks to work.",
        "Encourage adherence and follow-up."
      ] },
      { h: "Electroconvulsive therapy (ECT) — definition and indications", p: "ECT is a treatment in which a small, controlled electric current is passed through the brain to produce a brief, modified seizure under general anaesthesia and muscle relaxant. It is used mainly for severe depression (especially with high suicide risk or poor response to drugs), severe mania, and some forms of schizophrenia, particularly catatonia. It is safe and effective when properly given.", figure: {
        caption: "ECT nursing care: before, during and after the procedure.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ECT care before, during and after."><defs><marker id="psyArr13" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#7C2D12"/></marker></defs><rect x="20" y="40" width="155" height="55" rx="9" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="97" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#7C2D12">BEFORE</text><text x="97" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#7C2D12">consent, NPO, prepare</text><rect x="200" y="40" width="155" height="55" rx="9" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><text x="277" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#B45309">DURING</text><text x="277" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#B45309">assist, airway, monitor</text><rect x="380" y="40" width="155" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="457" y="62" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">AFTER</text><text x="457" y="80" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">recovery, reorient, observe</text><line x1="175" y1="67" x2="198" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#psyArr13)"/><line x1="355" y1="67" x2="378" y2="67" stroke="#7C2D12" stroke-width="2.5" marker-end="url(#psyArr13)"/></svg>'
      } },
      { h: "Nursing care for ECT", list: [
        "Before — ensure valid informed consent; explain the procedure to reduce fear; keep the patient nil by mouth (NPO) for several hours; remove dentures, jewellery, hairpins; ensure the patient empties the bladder; record baseline vital signs.",
        "During — assist the anaesthetist; help maintain the airway and protect the patient; monitor as required.",
        "After — place in recovery position; monitor airway, breathing, circulation and vital signs until awake; reorient the patient (confusion and headache are common); reassure regarding temporary memory loss; observe and stay with the patient until fully recovered."
      ] },
      { h: "Side effects of ECT and contraindications", p: "The common side effects are temporary confusion, headache, muscle aches and short-term memory loss, which usually improve. There is no absolute contraindication, but caution is needed in raised intracranial pressure and recent heart problems. Modified ECT with anaesthesia and muscle relaxant has made it much safer than the old unmodified method." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Name the main classes of psychotropic drugs with one example and use of each.",
      "Describe the common side effects of antipsychotic drugs and lithium.",
      "Discuss the role of the nurse in drug therapy.",
      "What is ECT? State its indications.",
      "Describe the nursing care of a patient before, during and after ECT."
    ],
    assessment: [
      { type: "mcq", q: "Antipsychotic drugs are mainly used to treat:", options: ["Depression", "Schizophrenia and psychosis", "Diabetes", "Anaemia"], answer: 1, rationale: "Antipsychotics (neuroleptics) are used for schizophrenia and other psychotic disorders." },
      { type: "mcq", q: "Tremor, rigidity and restlessness from antipsychotics are called:", options: ["Extrapyramidal side effects", "Allergy", "Withdrawal", "Tolerance"], answer: 0, rationale: "These movement side effects of antipsychotics are extrapyramidal symptoms." },
      { type: "mcq", q: "SSRIs such as fluoxetine are a type of:", options: ["Antipsychotic", "Antidepressant", "Mood stabiliser", "Anticonvulsant"], answer: 1, rationale: "SSRIs (selective serotonin reuptake inhibitors) are antidepressants." },
      { type: "mcq", q: "ECT is MOST commonly indicated for:", options: ["Mild anxiety", "Severe depression, especially with high suicide risk", "The common cold", "Simple phobia"], answer: 1, rationale: "ECT is mainly used for severe depression, especially with suicide risk or poor drug response." },
      { type: "mcq", q: "Before ECT the nurse must ensure the patient is:", options: ["Given a heavy meal", "Kept nil by mouth (NPO) with valid consent", "Allowed to keep dentures in", "Left without explanation"], answer: 1, rationale: "The patient must be NPO and have valid consent; dentures, jewellery and hairpins are removed." },
      { type: "mcq", q: "A common, usually temporary side effect of ECT is:", options: ["Permanent blindness", "Short-term memory loss and headache", "Loss of hearing", "Hair loss"], answer: 1, rationale: "ECT may cause temporary confusion, headache and short-term memory loss, which usually improve." },
      { type: "mcq", q: "Modern ECT is made safer than the old method by using:", options: ["No anaesthesia", "General anaesthesia and a muscle relaxant (modified ECT)", "A larger current", "No monitoring"], answer: 1, rationale: "Modified ECT uses anaesthesia and a muscle relaxant, reducing injury and making it much safer." },
      { type: "mcq", q: "When administering antipsychotic tablets, the nurse should especially ensure that the patient:", options: ["Hides the tablets", "Actually swallows the medicine", "Takes a double dose", "Skips the dose"], answer: 1, rationale: "Some patients hide ('cheek') tablets, so the nurse must confirm the medicine is swallowed." },
      { type: "mcq", q: "After ECT, the patient should FIRST be:", options: ["Sent home immediately", "Placed in recovery position with airway and vitals monitored until awake", "Given a large meal", "Left unattended"], answer: 1, rationale: "Post-ECT the patient is placed in recovery position and monitored (airway, breathing, vitals) until fully awake." },
      { type: "mcq", q: "Drugs used to control the extrapyramidal side effects of antipsychotics are:", options: ["Antidepressants", "Anticholinergic/antiparkinsonian drugs", "Insulin", "Antibiotics"], answer: 1, rationale: "Anticholinergic (antiparkinsonian) drugs are given to relieve extrapyramidal side effects." },
      { type: "fill", q: "A brief modified seizure produced by electric current to treat severe depression is called ____.", accept: ["ECT", "electroconvulsive therapy"], rationale: "ECT is given under anaesthesia with a muscle relaxant (modified ECT)." },
      { type: "fill", q: "Drugs that act on the mind to treat mental disorders are called ____ drugs.", accept: ["psychotropic", "psychiatric"], rationale: "Psychotropic drugs alter brain neurotransmitters to treat mental illness." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "psy-14-psychotherapies",
    unit: "Unit 3 · Psychiatric Care & Treatment",
    title: "Psychotherapies & Behaviour, Group & Milieu Therapy",
    readMinutes: 17,
    summary: "The main psychological treatments — individual psychotherapy, behaviour therapy, cognitive therapy, group, family and milieu therapy — and the nurse's role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is psychotherapy?", p: "Psychotherapy (the 'talking treatments') is the planned use of psychological methods, based on a therapeutic relationship, to help a person change thoughts, feelings and behaviour, relieve symptoms and improve functioning. It may be used alone (especially in neurotic disorders) or together with medication." },
      { h: "Individual psychotherapy", list: [
        "Psychoanalytic / psychodynamic therapy — explores unconscious conflicts and past experiences to gain insight.",
        "Supportive psychotherapy — gives reassurance, encouragement and practical help to strengthen the patient's coping.",
        "Counselling — helps the person understand and solve specific problems."
      ] },
      { h: "Behaviour therapy", p: "Behaviour therapy is based on learning theory; it aims to change unwanted behaviour directly, using rewards and other techniques.", list: [
        "Systematic desensitisation — gradual exposure to a feared object with relaxation (used for phobias).",
        "Exposure and response prevention — used in OCD.",
        "Token economy — desired behaviour is rewarded with tokens exchangeable for privileges.",
        "Aversion therapy — pairing an unwanted behaviour with an unpleasant stimulus.",
        "Relaxation training — to reduce anxiety."
      ] },
      { h: "Cognitive and cognitive-behaviour therapy (CBT)", p: "Cognitive therapy helps the patient identify and correct unrealistic, negative thoughts that cause distress. Cognitive behaviour therapy (CBT) combines this with behavioural techniques. CBT is effective for depression, anxiety disorders and OCD and is widely used." },
      { h: "Group therapy", p: "Group therapy treats several patients together with one or two therapists. Members share experiences, support and learn from each other, develop social skills and gain insight, and feel less alone. The therapist guides the group, ensures safety, and encourages helpful interaction." },
      { h: "Family therapy", p: "Family therapy involves the patient and family members together. It improves communication, resolves conflict, reduces high 'expressed emotion' and helps the family support the patient's recovery. It is particularly useful in schizophrenia, eating disorders and child/adolescent problems." },
      { h: "Milieu (environmental) therapy", p: "Milieu therapy uses the whole ward environment as a therapeutic tool. The setting is made safe, structured, supportive and home-like, with clear rules and planned activities, so that everyday living and relationships on the ward themselves help the patient learn and recover. The nurse is central in creating and maintaining this therapeutic environment.", figure: {
        caption: "Main types of psychological therapy in psychiatric care.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of psychotherapy."><rect x="180" y="10" width="200" height="34" rx="9" fill="#7C2D12"/><text x="280" y="32" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#FFF7ED">PSYCHOTHERAPIES</text><rect x="15" y="70" width="120" height="44" rx="8" fill="#FFF7ED" stroke="#B45309" stroke-width="1.5"/><text x="75" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Individual /</text><text x="75" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">supportive</text><rect x="145" y="70" width="120" height="44" rx="8" fill="#FEF3C7" stroke="#B45309" stroke-width="1.5"/><text x="205" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Behaviour /</text><text x="205" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">CBT</text><rect x="275" y="70" width="120" height="44" rx="8" fill="#FFEDD5" stroke="#B45309" stroke-width="1.5"/><text x="335" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">Group /</text><text x="335" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">family</text><rect x="405" y="70" width="120" height="44" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="465" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">Milieu /</text><text x="465" y="104" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">environment</text></svg>'
      } },
      { h: "Role of the nurse in psychotherapies", list: [
        "Build the therapeutic relationship that underlies all the talking treatments.",
        "Support and reinforce the methods used by the therapist (e.g. encourage relaxation, praise desired behaviour in a token economy).",
        "Lead or co-lead group and occupational activities and create the therapeutic milieu.",
        "Observe and report the patient's response to therapy.",
        "Educate and involve the family.",
        "Maintain confidentiality, acceptance and a non-judgemental attitude throughout."
      ] }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define psychotherapy and name its main types.",
      "What is behaviour therapy? Describe systematic desensitisation and the token economy.",
      "Explain CBT and its uses.",
      "Describe group therapy and milieu therapy.",
      "Discuss the role of the nurse in psychotherapies."
    ],
    assessment: [
      { type: "mcq", q: "Psychotherapy is BEST described as:", options: ["Surgery on the brain", "The planned use of psychological methods based on a therapeutic relationship", "A type of antibiotic", "A blood test"], answer: 1, rationale: "Psychotherapy uses psychological methods within a therapeutic relationship to bring about change." },
      { type: "mcq", q: "Gradual exposure to a feared object combined with relaxation is called:", options: ["Token economy", "Systematic desensitisation", "Aversion therapy", "ECT"], answer: 1, rationale: "Systematic desensitisation gradually exposes the patient to the feared stimulus while relaxed, used for phobias." },
      { type: "mcq", q: "Rewarding desired behaviour with tokens that can be exchanged for privileges is:", options: ["Token economy", "Family therapy", "Counselling", "Group therapy"], answer: 0, rationale: "A token economy reinforces desired behaviour with tokens exchangeable for rewards." },
      { type: "mcq", q: "The therapy that helps patients identify and correct negative, unrealistic thoughts is:", options: ["Aversion therapy", "Cognitive (behaviour) therapy / CBT", "Token economy", "Milieu therapy"], answer: 1, rationale: "Cognitive therapy/CBT targets and corrects distorted negative thinking." },
      { type: "mcq", q: "Treating several patients together so they support and learn from each other is:", options: ["Individual therapy", "Group therapy", "Aversion therapy", "Drug therapy"], answer: 1, rationale: "Group therapy uses shared experience and mutual support among several patients." },
      { type: "mcq", q: "Using the whole ward environment as a therapeutic tool is called:", options: ["Milieu therapy", "Systematic desensitisation", "Token economy", "ECT"], answer: 0, rationale: "Milieu (environmental) therapy makes the ward setting itself therapeutic." },
      { type: "mcq", q: "Family therapy is especially useful for:", options: ["Improving family communication and reducing expressed emotion", "Performing surgery", "Replacing all medication", "Treating broken bones"], answer: 0, rationale: "Family therapy improves communication, resolves conflict and lowers high expressed emotion." },
      { type: "mcq", q: "Behaviour therapy is based on:", options: ["Learning theory", "Surgery", "Genetics only", "Astrology"], answer: 0, rationale: "Behaviour therapy applies learning theory to change unwanted behaviour." },
      { type: "mcq", q: "CBT is effective for:", options: ["Depression, anxiety disorders and OCD", "Broken legs", "Diabetes only", "Skin infections"], answer: 0, rationale: "CBT is an effective treatment for depression, anxiety disorders and OCD." },
      { type: "mcq", q: "In psychotherapies the nurse's foundational role is to:", options: ["Argue with the patient", "Build and use the therapeutic relationship", "Avoid the patient", "Prescribe medicines"], answer: 1, rationale: "The therapeutic relationship underlies all talking treatments; the nurse builds and uses it." },
      { type: "fill", q: "Gradual exposure to a feared object while relaxed is called systematic ____.", accept: ["desensitisation", "desensitization"], rationale: "It is a behaviour therapy technique used mainly for phobias." },
      { type: "fill", q: "Using the whole ward environment as a therapeutic tool is called ____ therapy.", accept: ["milieu", "environmental"], rationale: "The nurse is central in creating and maintaining the therapeutic milieu." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "psy-15-community-rehab",
    unit: "Unit 3 · Psychiatric Care & Treatment",
    title: "Community Mental Health & Psychiatric Rehabilitation",
    readMinutes: 17,
    summary: "Concepts of community mental health, levels of prevention, mental health promotion, psychiatric rehabilitation, and the role of the community psychiatric nurse.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is community mental health?", p: "Community mental health is the provision of mental health services within the community — in homes, clinics, schools and workplaces — rather than only in large mental hospitals. It aims to promote mental health, prevent illness, provide accessible treatment near where people live, and reduce stigma. Deinstitutionalisation (moving care from asylums to the community) made community services essential." },
      { h: "Aims of community mental health", list: [
        "Promote mental health in the whole population.",
        "Prevent mental illness where possible.",
        "Provide early, accessible treatment close to home.",
        "Rehabilitate and reintegrate patients into society.",
        "Reduce stigma and protect the rights of the mentally ill.",
        "Support families and carers."
      ] },
      { h: "Levels of prevention in mental health", p: "Prevention is organised into three levels.", list: [
        "Primary prevention — preventing illness before it occurs (health education, stress management, good parenting, reducing risk factors).",
        "Secondary prevention — early detection and prompt treatment to reduce severity and duration (screening, early referral).",
        "Tertiary prevention — reducing disability and preventing relapse in established illness (rehabilitation, continued care)."
      ], figure: {
        caption: "The three levels of prevention in community mental health.",
        svg: '<svg viewBox="0 0 560 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three levels of prevention."><rect x="20" y="45" width="165" height="70" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><rect x="197" y="45" width="165" height="70" rx="10" fill="#FEF3C7" stroke="#B45309" stroke-width="2"/><rect x="374" y="45" width="165" height="70" rx="10" fill="#FFF7ED" stroke="#7C2D12" stroke-width="2"/><text x="102" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Primary</text><text x="102" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">prevent illness</text><text x="279" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#B45309">Secondary</text><text x="279" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#B45309">early treatment</text><text x="456" y="72" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">Tertiary</text><text x="456" y="94" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#7C2D12">rehabilitation</text><text x="280" y="28" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#7C2D12">LEVELS OF PREVENTION</text></svg>'
      } },
      { h: "Mental health promotion", p: "Mental health promotion strengthens the factors that protect mental health for everyone, not only those at risk. Strategies include health education, life-skills and coping training, support during life crises, reducing stigma, healthy school and work environments, and strengthening family and community support. The nurse is a key health educator in this work." },
      { h: "Psychiatric rehabilitation", p: "Psychiatric rehabilitation helps a person who has had a mental illness regain the best possible level of functioning and independence, and return to family, work and social life. It addresses skills, work, housing and social needs, and is based on the recovery model — focusing on the person's strengths, hope and goals, not just symptoms." },
      { h: "Components of rehabilitation", list: [
        "Social-skills and daily-living-skills training.",
        "Occupational therapy and vocational training (work skills).",
        "Sheltered employment and supported housing.",
        "Family education and support.",
        "Self-help and support groups; day-care centres.",
        "Continued treatment and relapse prevention."
      ] },
      { h: "Role of the community psychiatric nurse", list: [
        "Visit patients at home; assess mental state, living conditions and support.",
        "Administer and supervise medication (including depot injections) and monitor adherence and side effects.",
        "Provide counselling, support and crisis intervention.",
        "Educate the patient, family and community about mental illness and reduce stigma.",
        "Identify people at risk early and refer them.",
        "Link the patient to rehabilitation, welfare and community resources.",
        "Promote mental health through education in schools, workplaces and the community."
      ] }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define community mental health and state its aims.",
      "Describe the three levels of prevention in mental health with examples.",
      "What is mental health promotion? List its strategies.",
      "Define psychiatric rehabilitation and describe its components.",
      "Discuss the role of the community psychiatric nurse."
    ],
    assessment: [
      { type: "mcq", q: "Community mental health care aims to provide services:", options: ["Only in large mental hospitals", "Within the community, close to where people live", "Only abroad", "Only to the rich"], answer: 1, rationale: "Community mental health provides accessible services in homes, clinics, schools and workplaces near the patient." },
      { type: "mcq", q: "Health education and stress management to stop illness occurring are examples of:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Rehabilitation"], answer: 0, rationale: "Primary prevention acts before illness occurs by reducing risk and promoting health." },
      { type: "mcq", q: "Early detection and prompt treatment of mental illness is:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Promotion only"], answer: 1, rationale: "Secondary prevention is early detection and prompt treatment to limit severity and duration." },
      { type: "mcq", q: "Rehabilitation and prevention of relapse in established illness is:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Detoxification"], answer: 2, rationale: "Tertiary prevention reduces disability and prevents relapse in established illness." },
      { type: "mcq", q: "The movement of care from large asylums to the community is called:", options: ["Institutionalisation", "Deinstitutionalisation", "Hospitalisation", "Isolation"], answer: 1, rationale: "Deinstitutionalisation shifted care from large mental hospitals into the community." },
      { type: "mcq", q: "Psychiatric rehabilitation mainly aims to:", options: ["Keep patients in hospital forever", "Restore the best possible functioning and independence", "Stop all medication", "Punish patients"], answer: 1, rationale: "Rehabilitation helps the person regain functioning and independence and reintegrate into society." },
      { type: "mcq", q: "The approach that focuses on the person's strengths, hope and goals is the:", options: ["Recovery model", "Punishment model", "Custodial model", "Disease-only model"], answer: 0, rationale: "The recovery model emphasises strengths, hope and personal goals, not just symptoms." },
      { type: "mcq", q: "A component of psychiatric rehabilitation is:", options: ["Vocational and social-skills training", "Solitary confinement", "Withholding food", "Ignoring the family"], answer: 0, rationale: "Rehabilitation includes social-skills training, vocational training, supported housing and family support." },
      { type: "mcq", q: "A key role of the community psychiatric nurse is to:", options: ["Visit patients at home and supervise medication and follow-up", "Only work in the operating theatre", "Avoid families", "Keep patients hospitalised"], answer: 0, rationale: "The community psychiatric nurse provides home visits, medication supervision, support and links to resources." },
      { type: "mcq", q: "Reducing stigma about mental illness is important because stigma:", options: ["Helps recovery", "Prevents people from seeking help", "Has no effect", "Cures illness"], answer: 1, rationale: "Stigma discourages help-seeking and harms recovery and reintegration." },
      { type: "fill", q: "Moving mental health care from large hospitals into the community is called ____.", accept: ["deinstitutionalisation", "deinstitutionalization"], rationale: "This shift made community mental health services essential." },
      { type: "fill", q: "Health education and stress management given before illness occurs are examples of ____ prevention.", accept: ["primary"], rationale: "Primary prevention reduces risk factors and promotes health before illness develops." }
    ]
  }
];
