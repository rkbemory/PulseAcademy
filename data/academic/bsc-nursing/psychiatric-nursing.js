/* ============================================================
   B.Sc. Nursing (BNMC 2018) · Year 3 · B333 Psychiatric Nursing
   — 16 topics. Advanced degree-level, aligned to the BNMC 2018
   B.Sc. syllabus (introduction & concepts; biopsychosocial
   theories; therapeutic relationship & communication;
   assessment/MSE; the major psychiatric disorders;
   psychopharmacology & ECT; psychotherapies; community mental
   health & the nursing process; legal-ethical aspects).
   Grounded in standard texts:
     • Townsend MC, Morgan KI. Psychiatric Mental Health Nursing:
       Concepts of Care in Evidence-Based Practice. F.A. Davis.
     • Sreevani R. A Guide to Mental Health and Psychiatric
       Nursing. Jaypee Brothers.
     • Stuart GW. Principles and Practice of Psychiatric Nursing.
       Elsevier/Mosby.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_PSY = [
  "Townsend MC, Morgan KI. Psychiatric Mental Health Nursing: Concepts of Care in Evidence-Based Practice. F.A. Davis.",
  "Sreevani R. A Guide to Mental Health and Psychiatric Nursing. Jaypee Brothers.",
  "Stuart GW. Principles and Practice of Psychiatric Nursing. Elsevier/Mosby."
];

window.Academic.topics["bsc-nursing/psychiatric-nursing"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "psy-01-intro",
    unit: "Unit 1 · Introduction to Psychiatric Nursing",
    title: "Introduction to Mental Health & Psychiatric Nursing",
    readMinutes: 25,
    summary: "Concepts of mental health and mental illness, the mental health–illness continuum, characteristics of a mentally healthy person, determinants of mental illness, cultural and socioeconomic factors, and the scope and importance of psychiatric nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Defining mental health", p: "The WHO defines mental health as a state of well-being in which the individual realises his or her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, and is able to make a contribution to the community. Mental health is therefore not merely the absence of mental disorder but a positive capacity for adaptation, self-actualisation and meaningful relationships." },
      { h: "Defining mental illness / psychiatric disorder", p: "A mental disorder is a clinically significant disturbance in an individual's cognition, emotional regulation or behaviour that reflects a dysfunction in the psychological, biological or developmental processes underlying mental functioning, and is usually associated with distress or impairment (in social, occupational or other important activities). Expected or culturally sanctioned responses to a common stressor or loss (e.g. normal grief) are NOT in themselves a mental disorder." },
      { h: "Mental health vs mental illness — key distinctions", list: [
        "Perception of reality — accurate in health; may be distorted (delusions, hallucinations) in illness.",
        "Self-concept — realistic and positive vs distorted, devalued or grandiose.",
        "Coping — flexible, adaptive vs maladaptive, rigid, ineffective.",
        "Relationships — satisfying and mutual vs impaired, withdrawn or exploitative.",
        "Functioning — able to work, love and play vs impaired social/occupational functioning.",
        "Distress — proportionate and time-limited vs excessive, persistent or absent when expected."
      ] },
      { h: "The mental health–illness continuum", p: "Mental health and mental illness are not two discrete boxes but the two poles of a dynamic continuum. An individual moves along the continuum over time depending on the balance between stressors and resources. This model underlies preventive psychiatry: intervention aims to shift the person toward the health pole and to build resilience.", figure: {
        caption: "The mental health–illness continuum: a person moves dynamically between optimal wellness and severe illness according to stressors and coping resources.",
        svg: '<svg viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mental health illness continuum bar."><defs><linearGradient id="psyGrad1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#22C55E"/><stop offset="0.5" stop-color="#DCFCE7"/><stop offset="1" stop-color="#0F4C3A"/></linearGradient></defs><rect x="30" y="55" width="540" height="34" rx="17" fill="url(#psyGrad1)" stroke="#15803D" stroke-width="2"/><text x="70" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Optimal</text><text x="70" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">wellness</text><text x="230" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#15803D">Mild</text><text x="230" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">distress</text><text x="380" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#15803D">Moderate</text><text x="380" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">impairment</text><text x="535" y="120" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Severe</text><text x="535" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">illness</text><text x="300" y="35" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Mental Health &#8596; Mental Illness Continuum</text></svg>'
      } },
      { h: "Characteristics of a mentally healthy person (Jahoda's criteria)", list: [
        "Positive attitude toward self — self-acceptance and a realistic self-concept.",
        "Growth, development and self-actualisation — moving toward one's potential.",
        "Integration — a balance of psychic forces and a unified philosophy of life; ability to tolerate stress and anxiety.",
        "Autonomy — self-determination and a balance of dependence/independence.",
        "Accurate perception of reality — freedom from perceptual distortion; empathy.",
        "Environmental mastery — competence, adequacy in love, work and play, and satisfying interpersonal relationships."
      ] },
      { h: "Determinants of mental health and illness", p: "Mental health is determined by the interaction of biological, psychological and social factors (the biopsychosocial model). No single cause is sufficient; vulnerability plus stress produces illness (the diathesis–stress model)." },
      { h: "Biological determinants", list: [
        "Genetic predisposition (e.g. heritability of schizophrenia ~80%, bipolar disorder ~60–80%).",
        "Neurotransmitter dysregulation — dopamine, serotonin, noradrenaline, GABA, glutamate.",
        "Structural/functional brain abnormalities and neurodevelopment.",
        "Physical illness, infection, endocrine and nutritional factors, substance use.",
        "Age, sex and general physical health."
      ] },
      { h: "Psychological determinants", list: [
        "Early childhood experiences, attachment and parenting.",
        "Personality traits, self-esteem and coping style.",
        "Cognitive patterns and learned behaviour.",
        "Exposure to trauma, abuse or neglect.",
        "Ego strength and defence mechanisms."
      ] },
      { h: "Social / environmental determinants", list: [
        "Poverty, unemployment and financial stress.",
        "Family structure, social support and marital status.",
        "Education and housing; urbanisation and migration.",
        "Life events, loss and chronic stressors.",
        "Discrimination, stigma and social exclusion."
      ] },
      { h: "Cultural and socioeconomic considerations", p: "Culture shapes how distress is expressed (idioms of distress), what is labelled as normal or abnormal, help-seeking behaviour, and treatment expectations. In Bangladesh and South Asia, somatisation of psychological distress, reliance on faith/traditional healers, family involvement in decisions, and stigma toward psychiatric illness are common and must be respected and worked with, not dismissed. Socioeconomic disadvantage both causes and results from mental illness (the social drift hypothesis)." },
      { h: "Psychiatric (mental health) nursing — definition and scope", p: "Psychiatric nursing is a specialised area of nursing practice that uses the theories of human behaviour and the purposeful use of self to promote mental health, prevent mental illness, and care for and rehabilitate those with psychiatric disorders. The nurse works with individuals, families and communities across primary, secondary and tertiary levels of prevention." },
      { h: "Roles and functions of the psychiatric nurse", list: [
        "Therapist / counsellor — establishing therapeutic relationships and providing psychotherapeutic interventions.",
        "Care provider — meeting physical and psychological needs; administering and monitoring treatment.",
        "Health educator — teaching about illness, medication and coping to patient and family.",
        "Advocate — protecting patient rights and dignity.",
        "Case manager / coordinator — of the multidisciplinary care plan.",
        "Change agent, researcher and consultant in mental health promotion."
      ] },
      { h: "Levels of prevention in psychiatric nursing", list: [
        "Primary prevention — reducing incidence: mental health promotion, stress management, parenting and life-skills education.",
        "Secondary prevention — early detection and prompt treatment to reduce prevalence and duration.",
        "Tertiary prevention — rehabilitation to reduce residual disability and prevent relapse."
      ] },
      { h: "Clinical relevance", p: "Understanding mental health as a continuum and illness as multi-determined frees the nurse from a purely medical, symptom-centred view. It grounds holistic, recovery-oriented, culturally sensitive care: assessing biological, psychological AND social factors, and intervening at whichever level offers the most leverage for a given patient." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define mental health and mental illness. Explain the mental health–illness continuum with a diagram.",
      "Enumerate Jahoda's criteria of a mentally healthy person.",
      "Discuss the biological, psychological and social determinants of mental illness using the diathesis–stress model.",
      "Explain how cultural and socioeconomic factors influence mental health and help-seeking in the Bangladeshi context.",
      "Describe the scope, roles and levels of prevention in psychiatric nursing."
    ],
    assessment: [
      { type: "mcq", q: "According to the WHO definition, mental health is best described as:", options: ["A state of well-being in which a person copes with normal stress and works productively", "The absence of any diagnosable mental disorder", "A permanent state of happiness", "Freedom from all life stress"], answer: 0, rationale: "WHO defines mental health positively as well-being and adaptive functioning, not merely absence of disorder." },
      { type: "mcq", q: "A student states that mental health and mental illness are two separate, fixed categories. The best correction is that they are:", options: ["Identical concepts", "Unrelated to stress", "Two poles of a dynamic continuum", "Determined only by genetics"], answer: 2, rationale: "Mental health and illness form a continuum along which a person moves as stressors and resources change." },
      { type: "mcq", q: "The model stating that a genetic/biological vulnerability plus environmental stress produces illness is the:", options: ["Medical model", "Behavioural model", "Recovery model", "Diathesis–stress model"], answer: 3, rationale: "The diathesis–stress model explains illness as vulnerability (diathesis) interacting with stress." },
      { type: "mcq", q: "'Environmental mastery' as a criterion of mental health (Jahoda) refers to:", options: ["Adequacy and competence in love, work and play", "Control over others", "Avoidance of all stress", "Perfect physical health"], answer: 0, rationale: "Environmental mastery is competence and satisfying functioning in interpersonal and occupational life." },
      { type: "mcq", q: "In Bangladesh, psychological distress is frequently expressed as physical complaints. This is best described as:", options: ["Malingering", "Factitious disorder", "Somatisation / an idiom of distress", "Conversion disorder only"], answer: 2, rationale: "Culturally, distress is often somatised; recognising idioms of distress guides culturally sensitive assessment." },
      { type: "mcq", q: "Teaching stress-management and life skills to healthy adolescents to prevent illness is an example of:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Rehabilitation"], answer: 0, rationale: "Primary prevention reduces incidence by promoting health before illness occurs." },
      { type: "mcq", q: "Early screening and prompt treatment of a first depressive episode is:", options: ["Primary prevention", "Secondary prevention", "Tertiary prevention", "Health promotion"], answer: 1, rationale: "Secondary prevention is early detection and prompt treatment to limit duration and severity." },
      { type: "mcq", q: "The 'social drift' hypothesis proposes that:", options: ["Poverty is unrelated to mental illness", "All poor people are mentally ill", "Mental illness can cause a decline in socioeconomic status", "Wealth causes illness"], answer: 2, rationale: "Social drift holds that mental illness can lead to downward socioeconomic mobility." },
      { type: "mcq", q: "Which is a BIOLOGICAL determinant of mental illness?", options: ["Poverty", "Poor social support", "Stigma", "Neurotransmitter dysregulation"], answer: 3, rationale: "Neurotransmitter dysregulation is a biological factor; the others are social/environmental." },
      { type: "mcq", q: "The purposeful 'use of self' central to psychiatric nursing means:", options: ["Using one's personality and therapeutic presence to help the patient", "Sharing all personal problems with patients", "Working only from a distance", "Avoiding emotional involvement entirely"], answer: 0, rationale: "Therapeutic use of self is the deliberate use of one's personality and presence to build a helping relationship." },
      { type: "fill", q: "The model that explains mental illness through the interaction of biological, psychological and social factors is the ____ model.", accept: ["biopsychosocial", "bio-psycho-social"], rationale: "The biopsychosocial model integrates all three domains of causation." },
      { type: "fill", q: "Reducing the incidence of illness through health promotion before it occurs is ____ prevention.", accept: ["primary"], rationale: "Primary prevention acts before illness onset to reduce incidence." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "psy-02-history-legislation",
    unit: "Unit 1 · Introduction to Psychiatric Nursing",
    title: "History, Mental Health Legislation & the Multidisciplinary Team",
    readMinutes: 24,
    summary: "Evolution of psychiatric care from custodial to community models, key reformers, principles of mental health legislation and patient rights, admission types, and the composition and functions of the multidisciplinary mental health team.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why history matters", p: "Understanding the history of psychiatric care explains present attitudes, the drive toward deinstitutionalisation and community care, and the legal safeguards that protect a vulnerable population. Care has moved through distinct eras — from supernatural and custodial to moral, biological and finally community/recovery-oriented models." },
      { h: "Historical phases of psychiatric care", list: [
        "Primitive/supernatural era — mental illness attributed to demons, sin or the supernatural; trephining and exorcism used.",
        "Early rational period — Hippocrates attributed illness to imbalance of body humours, a natural (not supernatural) cause.",
        "Medieval/custodial era — the mentally ill confined, chained and neglected in asylums.",
        "Moral treatment / reform era — Philippe Pinel unchained patients in Paris (1793); William Tuke founded the York Retreat; humane treatment emphasised.",
        "Modern biological era — discovery of chlorpromazine (1952) launched psychopharmacology; ECT introduced (1938).",
        "Community/recovery era — deinstitutionalisation, community mental health movement, patient rights and recovery-oriented practice."
      ] },
      { h: "Pioneers to remember", list: [
        "Philippe Pinel — 'father of modern psychiatry'; removed chains, moral treatment.",
        "Dorothea Dix — campaigned for humane asylum care in the USA.",
        "Emil Kraepelin — systematic classification of mental disorders.",
        "Sigmund Freud — psychoanalysis and the unconscious.",
        "Hildegard Peplau — 'mother of psychiatric nursing'; interpersonal relations theory and the nurse–patient relationship."
      ] },
      { h: "Hildegard Peplau's contribution", p: "Peplau (1952) defined nursing as an interpersonal, therapeutic process and described the phases of the nurse–patient relationship (orientation, identification/working, resolution/termination) and nursing roles (stranger, resource person, teacher, leader, surrogate, counsellor). Her work is the theoretical foundation of modern psychiatric nursing." },
      { h: "Purpose of mental health legislation", list: [
        "Protect the rights, dignity and property of persons with mental illness.",
        "Regulate involuntary admission and treatment with safeguards against abuse.",
        "Ensure minimum standards of care and licensing of facilities.",
        "Protect the public where there is genuine risk, using the least restrictive means.",
        "Promote community care, informed consent and confidentiality."
      ] },
      { h: "Key rights of the psychiatric patient", list: [
        "Right to treatment in the least restrictive setting.",
        "Right to informed consent and to refuse treatment (within legal limits).",
        "Right to confidentiality and privacy.",
        "Right to dignity, freedom from restraint/seclusion except when necessary and time-limited.",
        "Right to communication, legal counsel and to be informed of one's rights.",
        "Right to have property and personal effects protected."
      ] },
      { h: "Types of admission", list: [
        "Voluntary admission — the patient requests or consents to admission and may request discharge.",
        "Involuntary / compulsory admission — admission without consent when the person is a danger to self or others or is unable to care for self, subject to legal criteria and review.",
        "Emergency admission — short-term involuntary admission in a crisis pending fuller assessment.",
        "Admission under reception order / special circumstances as defined by national law."
      ] },
      { h: "Mental health legislation in the Bangladesh context", p: "The Mental Health Act, 2018 of Bangladesh replaced the colonial-era Lunacy Act of 1912. It provides for the rights of persons with mental illness, licensing of mental health facilities, procedures for admission and discharge, protection of property, and prohibition of inhuman treatment — reflecting a shift from custodial to rights-based, community-oriented care aligned with international human-rights standards." },
      { h: "The multidisciplinary mental health team (MDT)", p: "Comprehensive psychiatric care is delivered by a team, each member contributing a distinct expertise while sharing responsibility for an integrated care plan.", figure: {
        caption: "The multidisciplinary mental health team centred on the patient and family, with each discipline contributing a distinct role.",
        svg: '<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Multidisciplinary mental health team around the patient."><circle cx="280" cy="150" r="52" fill="#0F4C3A"/><text x="280" y="146" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">PATIENT</text><text x="280" y="163" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7">&amp; family</text><g font-family="sans-serif" font-size="11" fill="#15803D"><rect x="200" y="18" width="160" height="34" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="280" y="39" text-anchor="middle">Psychiatrist</text><rect x="20" y="70" width="150" height="34" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="95" y="91" text-anchor="middle">Psychiatric nurse</text><rect x="390" y="70" width="155" height="34" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="467" y="91" text-anchor="middle">Clinical psychologist</text><rect x="10" y="196" width="160" height="34" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="90" y="217" text-anchor="middle">Psychiatric social worker</text><rect x="390" y="196" width="155" height="34" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="467" y="217" text-anchor="middle">Occupational therapist</text><rect x="200" y="250" width="160" height="34" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="280" y="271" text-anchor="middle">Pharmacist / others</text></g><g stroke="#22C55E" stroke-width="1.5"><line x1="280" y1="98" x2="280" y2="52"/><line x1="232" y1="128" x2="150" y2="104"/><line x1="328" y1="128" x2="410" y2="104"/><line x1="232" y1="172" x2="150" y2="196"/><line x1="328" y1="172" x2="410" y2="196"/><line x1="280" y1="202" x2="280" y2="250"/></g></svg>'
      } },
      { h: "Roles of MDT members", list: [
        "Psychiatrist — diagnosis, prescribing, medical/somatic treatment (medication, ECT).",
        "Psychiatric nurse — 24-hour care, therapeutic relationship, medication administration and monitoring, coordination, health education.",
        "Clinical psychologist — psychological testing and psychotherapies (e.g. CBT).",
        "Psychiatric social worker — family and social assessment, welfare, rehabilitation and community links.",
        "Occupational therapist — restoring functional and vocational skills through activity.",
        "Pharmacist, dietitian, counsellor and peer-support worker as needed."
      ] },
      { h: "Principles of teamwork", list: [
        "Shared, patient-centred goals and a single integrated care plan.",
        "Clear communication and defined roles with mutual respect.",
        "Regular team meetings and documentation.",
        "Involvement of the patient and family as partners in care."
      ] },
      { h: "Clinical relevance", p: "The nurse is often the constant, coordinating presence in the MDT and the person who translates the plan into 24-hour care. Knowing the legal framework lets the nurse safeguard patient rights, obtain valid consent, manage restraint lawfully, and document accurately — protecting both patient and practitioner." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Trace the historical evolution of psychiatric care from the custodial to the community era, naming key reformers.",
      "Describe the contribution of Hildegard Peplau to psychiatric nursing.",
      "State the purposes of mental health legislation and list the key rights of a psychiatric patient.",
      "Differentiate between voluntary, involuntary and emergency admission.",
      "Draw and explain the composition and roles of the multidisciplinary mental health team."
    ],
    assessment: [
      { type: "mcq", q: "The reformer who unchained psychiatric patients in Paris and is called the 'father of modern psychiatry' is:", options: ["Dorothea Dix", "Philippe Pinel", "Emil Kraepelin", "Sigmund Freud"], answer: 1, rationale: "Pinel introduced moral treatment and removed patients' chains in 1793." },
      { type: "mcq", q: "Hildegard Peplau is best known in psychiatric nursing for her theory of:", options: ["Interpersonal relations", "Self-care deficit", "Adaptation", "Human caring"], answer: 0, rationale: "Peplau's interpersonal relations theory defines nursing as a therapeutic interpersonal process." },
      { type: "mcq", q: "A patient who consents to admission and may request discharge has undergone:", options: ["Involuntary admission", "Emergency admission", "Voluntary admission", "Reception order admission"], answer: 2, rationale: "Voluntary admission is with the patient's consent and allows the patient to request discharge." },
      { type: "mcq", q: "The principle of the 'least restrictive setting' means care should be given:", options: ["Always in a locked ward", "Only at home", "In the setting that restricts liberty as little as possible while ensuring safety", "Only as an inpatient"], answer: 2, rationale: "Least restrictive care balances safety with maximal preservation of the patient's freedom." },
      { type: "mcq", q: "The 1952 discovery that launched modern psychopharmacology was:", options: ["Lithium", "Diazepam", "Fluoxetine", "Chlorpromazine"], answer: 3, rationale: "Chlorpromazine (1952) was the first antipsychotic and began the pharmacological era." },
      { type: "mcq", q: "Which team member primarily conducts family/social assessment and arranges community links and welfare?", options: ["Psychiatrist", "Occupational therapist", "Psychiatric social worker", "Pharmacist"], answer: 2, rationale: "The psychiatric social worker addresses social, family and welfare aspects and community resources." },
      { type: "mcq", q: "The Bangladesh Mental Health Act, 2018 replaced which colonial-era law?", options: ["The Lunacy Act, 1912", "The Indian Penal Code", "The Nurses Act", "The Drugs Act"], answer: 0, rationale: "The 2018 Act replaced the colonial Lunacy Act of 1912 with a rights-based framework." },
      { type: "mcq", q: "Restoring a patient's functional and vocational skills through purposeful activity is the primary role of the:", options: ["Clinical psychologist", "Occupational therapist", "Psychiatrist", "Nurse"], answer: 1, rationale: "The occupational therapist uses activity to restore functional and work-related skills." },
      { type: "mcq", q: "A short-term involuntary admission during an acute crisis, pending fuller assessment, is a(n):", options: ["Planned elective admission", "Day-care admission", "Emergency admission", "Voluntary admission"], answer: 2, rationale: "Emergency admission provides brief involuntary care in a crisis until assessment is completed." },
      { type: "mcq", q: "Which is a key patient right protected by mental health legislation?", options: ["Right to be secluded indefinitely", "Right to confidentiality and to be treated in the least restrictive setting", "Right to unlimited restraint", "Right to refuse all documentation"], answer: 1, rationale: "Confidentiality and least-restrictive treatment are core protected rights." },
      { type: "fill", q: "The nurse regarded as the 'mother of psychiatric nursing' is Hildegard ____.", accept: ["peplau"], rationale: "Hildegard Peplau founded modern interpersonal psychiatric nursing theory." },
      { type: "fill", q: "Admission of a person without consent because they are a danger to self or others is called ____ admission.", accept: ["involuntary", "compulsory"], rationale: "Involuntary (compulsory) admission occurs without consent under legal criteria for risk." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "psy-03-theories",
    unit: "Unit 2 · Biopsychosocial Theories & Classification",
    title: "Biopsychosocial Theories & Classification of Mental Disorders (ICD/DSM)",
    readMinutes: 26,
    summary: "The biological, psychoanalytic, interpersonal, behavioural, cognitive, social and crisis models of mental illness; Lazarus's stress-appraisal theory; and the principles and structure of psychiatric classification using ICD-11 and DSM-5.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why models matter", p: "A conceptual model organises how a nurse understands the cause of illness and therefore how it should be treated. Each model highlights a different aspect of the person; the integrated biopsychosocial view uses whichever offers the best explanatory and therapeutic leverage for a given patient." },
      { h: "Biological (medical) model", p: "Views mental disorders as brain diseases caused by genetic, neurochemical, structural or endocrine abnormalities. Treatment is chiefly somatic — psychopharmacology, ECT. Strength: explains major psychoses and mood disorders and supports evidence-based drug therapy. Limitation: may neglect meaning and context." },
      { h: "Psychoanalytic (Freud) model", list: [
        "Structure of mind — id (pleasure principle), ego (reality principle), superego (conscience).",
        "Levels of awareness — conscious, preconscious, unconscious.",
        "Symptoms arise from unconscious conflict and repressed anxiety.",
        "Ego defence mechanisms (repression, denial, projection, regression, sublimation) protect against anxiety.",
        "Treatment — psychoanalysis to make the unconscious conscious (free association, dream analysis, transference)."
      ] },
      { h: "Erikson's psychosocial development", p: "Erikson extended Freud into eight stages across the lifespan, each with a developmental crisis (e.g. trust vs mistrust in infancy, identity vs role confusion in adolescence, integrity vs despair in old age). Unresolved crises predispose to later psychopathology — useful for developmental assessment." },
      { h: "Interpersonal model (Sullivan, Peplau)", p: "Locates illness in disturbed interpersonal relationships and unmet needs for security. Anxiety arises interpersonally and is relieved interpersonally; the corrective therapeutic relationship is itself the treatment. This model underpins psychiatric nursing practice." },
      { h: "Behavioural model", p: "Behaviour, normal or abnormal, is learned through conditioning. Classical conditioning (Pavlov) links stimuli to responses; operant conditioning (Skinner) shapes behaviour by reinforcement and punishment. Maladaptive behaviour can be unlearned — basis of behaviour therapy (systematic desensitisation, token economy, aversion therapy)." },
      { h: "Cognitive model (Beck, Ellis)", p: "Emotional disturbance results from distorted, automatic negative thoughts and irrational beliefs (cognitive distortions such as all-or-nothing thinking, catastrophising, overgeneralisation). Beck's 'cognitive triad' (negative view of self, world and future) explains depression. Treatment is cognitive therapy that identifies and restructures these thoughts." },
      { h: "Social / community model", p: "Emphasises social forces — poverty, discrimination, family and community stress — as causes, and community-based, socially inclusive care as treatment. Supports deinstitutionalisation and the community mental health movement." },
      { h: "Lazarus's stress-appraisal (transactional) theory", p: "Lazarus proposed that emotion and stress depend not on the event itself but on the person's cognitive appraisal of it: primary appraisal ('Is this a threat?') and secondary appraisal ('Can I cope?'). If demands exceed perceived resources, stress and negative emotion result. This links directly to coping-focused nursing interventions." },
      { h: "Crisis theory (Caplan)", p: "A crisis is a state of disequilibrium when usual coping fails to resolve a hazardous event, lasting typically 4–6 weeks. Types: maturational/developmental (e.g. adolescence, retirement), situational (e.g. job loss, illness) and adventitious (disasters). Crisis is self-limiting and an opportunity for growth; crisis intervention is brief, present-focused and problem-solving.", figure: {
        caption: "Crisis sequence: a hazardous event overwhelms usual coping, producing disequilibrium; intervention restores or raises the level of functioning.",
        svg: '<svg viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Crisis development and resolution flow."><defs><marker id="psyArr3" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="80" width="120" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="75" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Hazardous</text><text x="75" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">event</text><rect x="165" y="80" width="120" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="225" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Usual coping</text><text x="225" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">fails</text><rect x="315" y="80" width="120" height="55" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="375" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Disequilibrium</text><text x="375" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#F0FDF4">(CRISIS)</text><rect x="455" y="80" width="95" height="55" rx="9" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="502" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Crisis</text><text x="502" y="120" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7">intervention</text><line x1="135" y1="107" x2="161" y2="107" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr3)"/><line x1="285" y1="107" x2="311" y2="107" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr3)"/><line x1="435" y1="107" x2="451" y2="107" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr3)"/><text x="280" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Crisis develops over ~4&#8211;6 weeks &#8212; a turning point</text></svg>'
      } },
      { h: "Purpose of classification", list: [
        "Provides a common professional language and reliable diagnosis.",
        "Guides treatment selection and prognosis.",
        "Enables research, epidemiology and service planning.",
        "Supports communication, statistics and reimbursement."
      ] },
      { h: "ICD-11 (WHO)", p: "The International Classification of Diseases, 11th revision, is the global standard used in Bangladesh and most countries. Chapter 06 covers 'Mental, behavioural and neurodevelopmental disorders'. It is used for morbidity/mortality statistics and clinical diagnosis worldwide." },
      { h: "DSM-5 / DSM-5-TR (APA)", p: "The Diagnostic and Statistical Manual of Mental Disorders, 5th edition, published by the American Psychiatric Association, provides explicit diagnostic criteria widely used in research and psychiatry. DSM-5 abandoned the old multiaxial system, moving to a single-axis diagnosis with separate coding of psychosocial and disability factors." },
      { h: "Key concepts in classification", list: [
        "Categorical vs dimensional approaches — presence/absence of a disorder vs severity along a continuum.",
        "Comorbidity — the co-occurrence of two or more disorders is common.",
        "Cultural formulation — DSM-5/ICD-11 encourage attention to cultural context.",
        "Diagnosis labels the disorder, not the person — avoid stigmatising language."
      ] },
      { h: "Clinical relevance", p: "Nurses use classification to understand the medical diagnosis, anticipate typical features and treatment, and communicate with the team — while remembering that nursing focuses on the patient's responses and needs (nursing diagnoses), not the disease label alone. Matching the model to the patient guides which interventions (drug, behavioural, cognitive, social, crisis) to prioritise." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Compare the biological, psychoanalytic, interpersonal, behavioural and cognitive models of mental illness.",
      "Explain Freud's structural model of the mind and three ego defence mechanisms.",
      "Describe Lazarus's stress-appraisal theory and its relevance to nursing.",
      "Define crisis. Classify the types of crisis and outline the principles of crisis intervention.",
      "State the purposes of psychiatric classification and differentiate ICD-11 from DSM-5."
    ],
    assessment: [
      { type: "mcq", q: "In Freud's structural model, the part governed by the 'reality principle' that mediates between drives and conscience is the:", options: ["Id", "Superego", "Ego", "Unconscious"], answer: 2, rationale: "The ego operates on the reality principle, mediating between the id and the superego." },
      { type: "mcq", q: "A patient facing a threat first judges 'Is this dangerous to me?' This step in Lazarus's theory is:", options: ["Primary appraisal", "Secondary appraisal", "Reappraisal", "Coping"], answer: 0, rationale: "Primary appraisal evaluates whether an event is a threat; secondary appraisal evaluates coping resources." },
      { type: "mcq", q: "Beck's 'cognitive triad' in depression consists of negative views of the:", options: ["Past, present and future", "Id, ego and superego", "Self, world and future", "Body, mind and soul"], answer: 2, rationale: "Beck's cognitive triad is a negative view of the self, the world and the future." },
      { type: "mcq", q: "Systematic desensitisation and token economy are treatments derived from the:", options: ["Psychoanalytic model", "Biological model", "Social model", "Behavioural model"], answer: 3, rationale: "These are behaviour-therapy techniques based on learning/conditioning principles." },
      { type: "mcq", q: "According to crisis theory, an unresolved crisis typically lasts about:", options: ["1–2 days", "4–6 weeks", "6 months", "1 year"], answer: 1, rationale: "A crisis is self-limiting and usually resolves within 4–6 weeks, for better or worse." },
      { type: "mcq", q: "A crisis precipitated by a natural disaster or mass violence is classified as:", options: ["Maturational", "Situational", "Adventitious", "Developmental"], answer: 2, rationale: "Adventitious crises arise from uncommon, unexpected disasters affecting many people." },
      { type: "mcq", q: "The classification system used globally (including Bangladesh) for morbidity and mortality statistics is:", options: ["DSM-5", "ICD-11", "GAF", "PANSS"], answer: 1, rationale: "The WHO's ICD-11 is the international standard used worldwide for statistics and diagnosis." },
      { type: "mcq", q: "Which model views the therapeutic nurse–patient relationship itself as the primary treatment?", options: ["Biological model", "Behavioural model", "Interpersonal model", "Cognitive model"], answer: 2, rationale: "The interpersonal model (Sullivan/Peplau) uses the relationship as the corrective therapeutic tool." },
      { type: "mcq", q: "A patient unconsciously attributes his own hostility to others, saying 'everyone hates me.' This defence mechanism is:", options: ["Repression", "Projection", "Sublimation", "Regression"], answer: 1, rationale: "Projection attributes one's own unacceptable feelings to another person." },
      { type: "mcq", q: "DSM-5 differs from DSM-IV mainly in that it:", options: ["Added the multiaxial system", "Abandoned the multiaxial system for a single-axis diagnosis", "Removed all diagnostic criteria", "Is published by the WHO"], answer: 1, rationale: "DSM-5 replaced the old multiaxial system with a single-axis approach." },
      { type: "fill", q: "The transactional theory holding that stress depends on cognitive appraisal of an event was proposed by ____.", accept: ["lazarus"], rationale: "Lazarus's stress-appraisal (transactional) theory centres on primary and secondary appraisal." },
      { type: "fill", q: "In psychoanalytic theory, the part of the mind operating on the pleasure principle is the ____.", accept: ["id"], rationale: "The id is the instinctual, pleasure-seeking part of the mind." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "psy-04-therapeutic-relationship",
    unit: "Unit 3 · Therapeutic Relationship & Communication",
    title: "The Therapeutic Nurse–Patient Relationship & Communication",
    readMinutes: 25,
    summary: "Therapeutic use of self, characteristics and phases of the nurse–patient relationship, therapeutic communication techniques and blocks, non-verbal communication, empathy, and the management of transference and boundaries.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The therapeutic relationship defined", p: "A therapeutic (helping) relationship is a planned, goal-directed, professional interaction focused wholly on the needs of the patient. Unlike a social relationship, it is time-limited, has defined boundaries, is patient-centred (not mutual need-meeting), and uses the nurse's skills purposefully to promote insight, coping and growth." },
      { h: "Therapeutic use of self", p: "The deliberate use of one's own personality, insight, perceptions and presence to establish rapport and help the patient. It requires self-awareness (the Johari window model — reducing the 'hidden' and 'blind' areas), genuine interest, and the ability to control one's own reactions." },
      { h: "Characteristics of a therapeutic relationship (Rogers' core conditions)", list: [
        "Genuineness (congruence) — being real, honest and consistent.",
        "Unconditional positive regard — non-judgmental acceptance and respect for the person.",
        "Empathy — accurately perceiving and communicating understanding of the patient's feelings from their frame of reference (different from sympathy, which is feeling for/with).",
        "Trust, rapport and confidentiality.",
        "Clear boundaries and consistency."
      ] },
      { h: "Empathy vs sympathy", p: "Empathy is understanding and communicating the patient's feelings while remaining objective — therapeutic. Sympathy is sharing the patient's feelings and losing objectivity — non-therapeutic because it shifts focus to the nurse and may foster dependency. Example — Empathy: 'It sounds as though you feel hopeless right now.' Sympathy: 'I feel so sorry for you, I would be devastated too.'" },
      { h: "Peplau's phases of the nurse–patient relationship", list: [
        "Pre-interaction phase — before meeting the patient: the nurse reviews information and explores own feelings, fears and preconceptions.",
        "Orientation (introductory) phase — building trust and rapport; setting boundaries, roles, confidentiality and a contract; identifying problems.",
        "Working (identification/exploitation) phase — the core work: exploring problems, promoting insight, developing and practising new coping; resistance and transference may arise.",
        "Termination (resolution) phase — planned ending; reviewing progress, expressing feelings about ending, and preventing regression; must be prepared for from the start."
      ], figure: {
        caption: "The four phases of the therapeutic nurse–patient relationship, from pre-interaction through termination.",
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four phases of the nurse patient relationship."><defs><marker id="psyArr4" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="10" y="70" width="120" height="60" rx="9" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="70" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">1. Pre-</text><text x="70" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">interaction</text><rect x="150" y="70" width="120" height="60" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="210" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">2. Orientation</text><text x="210" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">trust &amp; contract</text><rect x="290" y="70" width="120" height="60" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="350" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">3. Working</text><text x="350" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">insight &amp; change</text><rect x="430" y="70" width="120" height="60" rx="9" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="490" y="96" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">4. Termination</text><text x="490" y="112" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">planned ending</text><line x1="130" y1="100" x2="146" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr4)"/><line x1="270" y1="100" x2="286" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr4)"/><line x1="410" y1="100" x2="426" y2="100" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr4)"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Phases of the Nurse&#8211;Patient Relationship (Peplau)</text></svg>'
      } },
      { h: "Therapeutic communication techniques", list: [
        "Active listening and attentive silence — allowing the patient to reflect.",
        "Broad opening statements — 'Where would you like to begin?'",
        "Open-ended questions — encourage elaboration.",
        "Reflecting / restating — mirroring content or feeling back to the patient.",
        "Clarifying and validating — 'Are you saying that...?'",
        "Focusing — directing attention to an important point.",
        "Exploring — examining a topic more fully.",
        "Offering self and presenting reality — 'I'll sit with you'; gently correcting misperceptions.",
        "Summarising — reviewing the main points.",
        "Encouraging expression of feelings and giving recognition."
      ] },
      { h: "Blocks (barriers) to therapeutic communication", list: [
        "Giving false or premature reassurance ('Everything will be fine').",
        "Giving advice or approving/disapproving.",
        "Asking 'why' questions and probing.",
        "Belittling or minimising feelings; changing the subject.",
        "Stereotyped or automatic responses and clichés.",
        "Being defensive, judgmental or making value judgments.",
        "Excessive questioning; talking too much; challenging."
      ] },
      { h: "Non-verbal communication", p: "Up to 70–90% of communication is non-verbal. Key channels: kinesics (body movement, gestures), facial expression, eye contact, posture, proxemics (use of space — intimate <18 inches, personal 18 in–4 ft, social 4–12 ft), touch, paralanguage (tone, pace, volume) and appearance. The nurse must ensure verbal and non-verbal messages are congruent and read the patient's non-verbal cues." },
      { h: "SOLER — attending behaviour (Egan)", list: [
        "S — Sit Squarely facing the patient.",
        "O — Open posture (uncrossed arms/legs).",
        "L — Lean slightly toward the patient.",
        "E — maintain Eye contact appropriately.",
        "R — Relax."
      ] },
      { h: "Transference and countertransference", p: "Transference is the patient's unconscious transfer of feelings from a past significant relationship onto the nurse (e.g. reacting to the nurse as to a parent). Countertransference is the nurse's emotional reaction to the patient based on the nurse's own past. Both must be recognised through supervision and self-awareness so they do not distort care." },
      { h: "Professional boundaries", p: "Boundaries define the therapeutic, professional limits of the relationship. Boundary crossings and violations (over-involvement, self-disclosure for the nurse's benefit, gifts, dual relationships, romantic/sexual contact) harm the patient. The nurse maintains a consistent, patient-centred stance and seeks supervision when boundaries feel strained." },
      { h: "Clinical relevance", p: "The therapeutic relationship is the primary tool of psychiatric nursing — the vehicle through which all other interventions are delivered. Skilled communication reduces anxiety and aggression, builds trust with suspicious or withdrawn patients, elicits accurate assessment data, and promotes adherence and recovery." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Differentiate a therapeutic relationship from a social relationship.",
      "Describe Peplau's phases of the nurse–patient relationship and the nursing tasks in each.",
      "List ten therapeutic communication techniques and five blocks to communication.",
      "Differentiate empathy from sympathy and explain why sympathy is non-therapeutic.",
      "Explain transference, countertransference and professional boundaries in psychiatric nursing."
    ],
    assessment: [
      { type: "mcq", q: "During which phase does the nurse explore her own feelings and fears before meeting the patient?", options: ["Pre-interaction", "Orientation", "Working", "Termination"], answer: 0, rationale: "Self-exploration of the nurse's own feelings occurs in the pre-interaction phase, before contact." },
      { type: "mcq", q: "Setting boundaries, building trust and forming a contract mainly occur in the ____ phase.", options: ["Pre-interaction", "Orientation", "Working", "Termination"], answer: 1, rationale: "The orientation phase establishes trust, roles, confidentiality and the working contract." },
      { type: "mcq", q: "A patient says, 'I feel like no one cares about me.' The most therapeutic response is:", options: ["Don't worry, everyone here cares.", "Why do you feel that way?", "It sounds as if you're feeling very alone right now.", "That's not true at all."], answer: 2, rationale: "Reflecting the feeling is therapeutic; the others are false reassurance, a 'why' question, and denial." },
      { type: "mcq", q: "Which is a BLOCK to therapeutic communication?", options: ["Active listening", "Reflecting feelings", "Giving false reassurance", "Offering self"], answer: 2, rationale: "False reassurance dismisses concerns and blocks communication; the others are therapeutic." },
      { type: "mcq", q: "Understanding the patient's feelings while remaining objective is:", options: ["Empathy", "Sympathy", "Pity", "Identification"], answer: 0, rationale: "Empathy is objective understanding of the patient's feelings; sympathy loses objectivity." },
      { type: "mcq", q: "In SOLER, the 'L' stands for:", options: ["Listen actively", "Look away", "Limit contact", "Lean toward the patient"], answer: 3, rationale: "In Egan's SOLER, 'L' is to Lean slightly toward the patient to show interest." },
      { type: "mcq", q: "A patient begins reacting to the nurse as though she were his critical mother. This is:", options: ["Transference", "Countertransference", "Projection", "Resistance"], answer: 0, rationale: "Transference is the patient transferring feelings from a past relationship onto the nurse." },
      { type: "mcq", q: "A nurse accepting gifts and disclosing personal problems to a patient is engaging in a:", options: ["Therapeutic technique", "Working-phase task", "Boundary violation", "Normal social exchange"], answer: 2, rationale: "Such over-involvement and inappropriate self-disclosure are boundary violations." },
      { type: "mcq", q: "Termination of the relationship should be prepared for:", options: ["Only at the last session", "After discharge", "From the beginning (orientation phase)", "Never discussed"], answer: 2, rationale: "Termination is planned from the orientation phase to prevent abrupt loss and regression." },
      { type: "mcq", q: "The interpersonal distance zone of 18 inches to 4 feet is termed:", options: ["Intimate space", "Personal space", "Social space", "Public space"], answer: 1, rationale: "Personal space (18 in–4 ft) is used for interactions with friends and therapeutic conversation." },
      { type: "fill", q: "The three core conditions of a helping relationship described by Carl Rogers are genuineness, empathy and unconditional positive ____.", accept: ["regard"], rationale: "Rogers' third core condition is unconditional positive regard (non-judgmental acceptance)." },
      { type: "fill", q: "The nurse's emotional reaction to a patient based on the nurse's own past relationships is called ____.", accept: ["countertransference"], rationale: "Countertransference is the nurse's transferred emotional response toward the patient." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "psy-05-assessment-mse",
    unit: "Unit 3 · Therapeutic Relationship & Communication",
    title: "Psychiatric Assessment & the Mental Status Examination (MSE)",
    readMinutes: 26,
    summary: "The comprehensive psychiatric history, the systematic components of the mental status examination, assessment of cognition and risk, common rating scales, and the translation of assessment data into nursing diagnoses and care plans.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Purpose of psychiatric assessment", p: "A systematic assessment establishes a therapeutic relationship, gathers a comprehensive database (biological, psychological, social and spiritual), identifies problems and strengths, assesses risk, forms the basis of diagnosis and care planning, and provides a baseline against which to measure change." },
      { h: "Components of the psychiatric history", list: [
        "Identifying data — name, age, sex, marital status, occupation, address.",
        "Chief complaint — the patient's own words about the main problem.",
        "History of present illness — onset, duration, course, precipitating and relieving factors.",
        "Past psychiatric history — previous episodes, admissions, treatment, self-harm.",
        "Past medical/surgical history and current medications.",
        "Family history — mental illness, substance use, suicide.",
        "Personal history — birth, development, education, occupation, sexual and marital history.",
        "Premorbid personality — the patient's usual character before illness.",
        "Substance use history and forensic history."
      ] },
      { h: "The Mental Status Examination (MSE)", p: "The MSE is a structured, cross-sectional 'snapshot' of the patient's psychological functioning at the time of interview — the psychiatric equivalent of the physical examination. It is largely based on observation plus specific questions.", figure: {
        caption: "Components of the mental status examination, from appearance through insight and judgment.",
        svg: '<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Components of the mental status examination."><rect x="180" y="10" width="200" height="36" rx="8" fill="#0F4C3A"/><text x="280" y="33" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">M S E</text><g font-family="sans-serif" font-size="11" fill="#15803D"><rect x="20" y="70" width="240" height="30" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="30" y="90">1. Appearance &amp; behaviour</text><rect x="300" y="70" width="240" height="30" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="90">2. Speech</text><rect x="20" y="110" width="240" height="30" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="30" y="130">3. Mood &amp; affect</text><rect x="300" y="110" width="240" height="30" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="130">4. Thought (form &amp; content)</text><rect x="20" y="150" width="240" height="30" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="30" y="170">5. Perception (hallucinations)</text><rect x="300" y="150" width="240" height="30" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="170">6. Cognition / sensorium</text><rect x="20" y="190" width="240" height="30" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="30" y="210">7. Insight</text><rect x="300" y="190" width="240" height="30" rx="6" fill="#DCFCE7" stroke="#15803D" stroke-width="1.5"/><text x="310" y="210">8. Judgment</text></g><text x="280" y="255" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Cognition includes: consciousness, orientation,</text><text x="280" y="272" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">attention/concentration, memory, and intelligence</text></svg>'
      } },
      { h: "1. Appearance and behaviour", list: [
        "General appearance, grooming, hygiene, dress and posture.",
        "Level of consciousness and eye contact.",
        "Psychomotor activity — agitation, retardation, restlessness, catatonia.",
        "Attitude toward the examiner — cooperative, guarded, hostile.",
        "Abnormal movements — tremor, tics, mannerisms, tardive dyskinesia."
      ] },
      { h: "2. Speech", list: [
        "Rate — pressured (mania) or slowed (depression).",
        "Volume, tone and quantity (poverty of speech / mutism).",
        "Fluency and articulation; spontaneity and relevance."
      ] },
      { h: "3. Mood and affect", p: "Mood is the sustained, subjective emotional state ('How have you been feeling?'); affect is the observed, objective expression of emotion. Describe affect by range (full, restricted, blunted, flat), appropriateness (congruent/incongruent to thought), and stability (labile). Mood terms: euthymic, depressed, elated/euphoric, anxious, irritable, dysphoric." },
      { h: "4. Thought — form and content", list: [
        "Form (how thoughts connect) — flight of ideas, loosening of associations, tangentiality, circumstantiality, thought block, perseveration, neologisms, word salad.",
        "Content (what is thought) — delusions (fixed false beliefs: persecutory, grandiose, of reference, control, nihilistic, somatic), obsessions, overvalued ideas, phobias, suicidal/homicidal ideation."
      ] },
      { h: "5. Perception", list: [
        "Hallucinations — perception without an external stimulus (auditory, visual, olfactory, gustatory, tactile). Auditory are commonest in schizophrenia.",
        "Illusions — misperception of a real stimulus.",
        "Depersonalisation (feeling unreal/detached from self) and derealisation (surroundings feel unreal)."
      ] },
      { h: "6. Cognition (sensorium and cognitive functions)", list: [
        "Consciousness — alert, drowsy, clouded, stuporous.",
        "Orientation — to time, place and person (impaired in delirium/dementia).",
        "Attention and concentration — e.g. serial 7s, digit span, spelling 'WORLD' backwards.",
        "Memory — immediate (registration), recent (short-term) and remote (long-term).",
        "Abstract thinking — proverb interpretation, similarities.",
        "General intelligence and fund of knowledge."
      ] },
      { h: "7. Insight", p: "Insight is the patient's awareness and understanding of being ill and needing treatment. It is graded from complete denial of illness (grade 1) to intellectual insight to true emotional insight leading to changed behaviour (grade 6). Poor insight predicts poor treatment adherence." },
      { h: "8. Judgment", p: "Judgment is the ability to make sound, reasoned decisions and understand their consequences. It is tested by the patient's handling of real-life situations and standard questions (e.g. 'What would you do if you found a stamped, addressed letter on the street?'). Impaired judgment raises safety and capacity concerns." },
      { h: "Risk assessment", list: [
        "Suicide/self-harm — ideation, plan, intent, means, past attempts, protective factors.",
        "Risk to others — aggressive/homicidal thoughts, history of violence.",
        "Risk of self-neglect, absconding, exploitation and vulnerability.",
        "Risk from side effects and physical illness."
      ] },
      { h: "Common rating scales", list: [
        "MMSE / MoCA — cognitive screening (MMSE score <24/30 suggests impairment).",
        "PANSS / BPRS — positive and negative symptoms in psychosis.",
        "Hamilton (HAM-D) and Beck Depression Inventory — depression severity.",
        "Young Mania Rating Scale — mania.",
        "AIMS — abnormal involuntary movements (tardive dyskinesia)."
      ] },
      { h: "From assessment to nursing diagnosis", p: "Assessment data are analysed to form nursing diagnoses that describe the patient's human responses — for example 'Risk for suicide', 'Disturbed thought processes', 'Ineffective coping', 'Social isolation' or 'Self-care deficit' — which then drive individualised goals and interventions." },
      { h: "Clinical relevance", p: "The MSE is a core, repeatable nursing skill. Serial MSEs detect improvement or deterioration, guide medication and safety decisions, document capacity and insight, and give the team a shared, precise vocabulary. Accurate risk assessment is a life-saving nursing responsibility." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Outline the components of a comprehensive psychiatric history.",
      "Describe the eight components of the mental status examination.",
      "Differentiate mood from affect and give the terms used to describe each.",
      "Define delusion, hallucination and illusion with examples of each.",
      "Explain how insight and judgment are assessed and why they matter for nursing care."
    ],
    assessment: [
      { type: "mcq", q: "The sustained, subjective emotional state reported by the patient is:", options: ["Mood", "Affect", "Thought", "Cognition"], answer: 0, rationale: "Mood is the patient's sustained subjective emotion; affect is the observed expression." },
      { type: "mcq", q: "A fixed, false belief not amenable to reason and out of keeping with culture is a(n):", options: ["Illusion", "Hallucination", "Delusion", "Obsession"], answer: 2, rationale: "A delusion is a fixed false belief; a hallucination is a false perception; an illusion is a misperception." },
      { type: "mcq", q: "A patient hears voices commenting when no one is present. This is a(n):", options: ["Auditory hallucination", "Illusion", "Delusion of reference", "Depersonalisation"], answer: 0, rationale: "A perception without an external stimulus is a hallucination; hearing voices is auditory." },
      { type: "mcq", q: "Asking a patient to spell 'WORLD' backwards primarily tests:", options: ["Memory", "Insight", "Attention and concentration", "Abstract thinking"], answer: 2, rationale: "Spelling backwards and serial 7s assess attention and concentration." },
      { type: "mcq", q: "Rapid speech with quick shifts between related topics (mania) is described as:", options: ["Poverty of speech", "Flight of ideas", "Thought block", "Perseveration"], answer: 1, rationale: "Flight of ideas is rapid, connected shifting between topics, typical of mania." },
      { type: "mcq", q: "A patient who completely denies being ill and refuses treatment has:", options: ["Good insight", "Grade 1 (absent) insight", "Intellectual insight", "Emotional insight"], answer: 1, rationale: "Complete denial of illness reflects absent (grade 1) insight, predicting poor adherence." },
      { type: "mcq", q: "An MMSE score below which value most suggests cognitive impairment?", options: ["28/30", "24/30", "18/30", "10/30"], answer: 1, rationale: "An MMSE score below 24/30 is the usual cut-off suggesting cognitive impairment." },
      { type: "mcq", q: "Misinterpreting a coiled rope as a snake is an example of a(n):", options: ["Hallucination", "Delusion", "Illusion", "Obsession"], answer: 2, rationale: "An illusion is a misperception of a real external stimulus." },
      { type: "mcq", q: "Which nursing diagnosis best fits a patient with active suicidal ideation and a plan?", options: ["Social isolation", "Risk for suicide", "Self-care deficit", "Disturbed sleep"], answer: 1, rationale: "Active ideation with a plan makes 'Risk for suicide' the priority nursing diagnosis." },
      { type: "mcq", q: "The scale most specifically used to detect tardive dyskinesia is the:", options: ["PANSS", "HAM-D", "AIMS", "MoCA"], answer: 2, rationale: "The AIMS (Abnormal Involuntary Movement Scale) screens for tardive dyskinesia." },
      { type: "fill", q: "The observed, objective expression of emotion (as opposed to mood) is called ____.", accept: ["affect"], rationale: "Affect is the outwardly observable emotional expression." },
      { type: "fill", q: "A perception occurring without any external stimulus is called a ____.", accept: ["hallucination"], rationale: "A hallucination is a false perception without an external stimulus." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "psy-06-anxiety-ocd-somatoform",
    unit: "Unit 4 · Neurotic, Stress-related & Somatoform Disorders",
    title: "Anxiety, Obsessive-Compulsive, Stress-related & Somatoform Disorders",
    readMinutes: 27,
    summary: "Pathophysiology and clinical features of anxiety disorders (GAD, panic, phobias), OCD, acute stress and PTSD, and somatoform/psychosomatic disorders, with evidence-based medical and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Anxiety — normal vs pathological", p: "Anxiety is a diffuse apprehension in response to a vague or unknown threat (unlike fear, which has a known object). Mild anxiety is adaptive and enhances performance; severe anxiety and panic are disabling. Peplau described four levels — mild, moderate, severe and panic — each with progressively narrowing perceptual field." },
      { h: "Levels of anxiety (Peplau)", list: [
        "Mild — heightened alertness, sharpened senses, good learning; part of daily life.",
        "Moderate — narrowed perceptual field, selective attention, mild physical symptoms.",
        "Severe — greatly reduced perception, focus on detail, marked somatic symptoms, impaired learning.",
        "Panic — loss of rational thought, disorganisation, terror, inability to function; a psychiatric emergency."
      ] },
      { h: "Neurobiology of anxiety", p: "Anxiety disorders involve dysregulation of the amygdala (fear processing) and prefrontal cortex, with abnormal serotonin, noradrenaline and GABA neurotransmission. Reduced GABA activity (the main inhibitory transmitter) explains why benzodiazepines, which enhance GABA, relieve anxiety." },
      { h: "Types of anxiety disorder", list: [
        "Generalised anxiety disorder (GAD) — persistent, excessive worry about many things for ≥6 months, with restlessness, fatigue, poor concentration, irritability, muscle tension and sleep disturbance.",
        "Panic disorder — recurrent, unexpected panic attacks (peak within minutes: palpitations, chest pain, dyspnoea, dizziness, fear of dying) with anticipatory anxiety.",
        "Phobic disorders — agoraphobia, social anxiety disorder, and specific phobias (marked, irrational fear leading to avoidance)."
      ] },
      { h: "Obsessive-compulsive disorder (OCD)", p: "OCD is characterised by obsessions — recurrent, intrusive, unwanted thoughts, images or impulses that cause anxiety (e.g. contamination, doubt, symmetry) — and compulsions — repetitive behaviours or mental acts (e.g. washing, checking, counting) performed to reduce the anxiety. The patient recognises them as excessive (ego-dystonic) but cannot resist. Neurobiology implicates serotonin and the cortico-striato-thalamo-cortical (CSTC) circuit.", figure: {
        caption: "The OCD cycle: an intrusive obsession raises anxiety; a compulsion temporarily relieves it, negatively reinforcing and perpetuating the cycle.",
        svg: '<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The obsessive compulsive cycle."><defs><marker id="psyArr6" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="150" y="15" width="160" height="50" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="230" y="38" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Obsession</text><text x="230" y="55" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">intrusive thought</text><rect x="300" y="120" width="150" height="50" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="375" y="143" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Anxiety &#8593;</text><text x="375" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">distress rises</text><rect x="150" y="225" width="160" height="50" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="230" y="248" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Compulsion</text><text x="230" y="265" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">ritual performed</text><rect x="10" y="120" width="150" height="50" rx="9" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="85" y="143" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Relief &#8595;</text><text x="85" y="160" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">temporary</text><path d="M290 55 Q360 80 375 118" fill="none" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr6)"/><path d="M360 170 Q330 215 312 240" fill="none" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr6)"/><path d="M150 250 Q80 215 85 172" fill="none" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr6)"/><path d="M85 118 Q110 80 168 55" fill="none" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr6)"/></svg>'
      } },
      { h: "Acute stress reaction and PTSD", list: [
        "Acute stress reaction — transient response within hours of an exceptional stressor, resolving in days.",
        "Post-traumatic stress disorder (PTSD) — after a traumatic event: re-experiencing (flashbacks, nightmares), avoidance of reminders, negative mood/cognition, and hyperarousal (hypervigilance, startle), lasting >1 month.",
        "Adjustment disorder — emotional/behavioural symptoms in response to an identifiable stressor, out of proportion but not meeting other criteria."
      ] },
      { h: "Somatoform and psychosomatic disorders", list: [
        "Somatic symptom disorder — distressing bodily symptoms plus excessive thoughts/anxiety about them.",
        "Illness anxiety disorder (hypochondriasis) — preoccupation with having a serious illness despite reassurance.",
        "Conversion (functional neurological) disorder — neurological symptoms (paralysis, blindness, pseudoseizures) inconsistent with disease, linked to psychological conflict; may show 'la belle indifférence'.",
        "Psychosomatic (psychophysiological) disorders — real physical illness (e.g. peptic ulcer, hypertension, asthma, migraine) precipitated or worsened by psychological stress."
      ] },
      { h: "Medical management", list: [
        "SSRIs (e.g. sertraline, fluoxetine, escitalopram) — first-line for GAD, panic, phobias, OCD and PTSD; higher doses often needed for OCD.",
        "SNRIs (venlafaxine, duloxetine) — for GAD and PTSD.",
        "Benzodiazepines — short-term only for acute severe anxiety (risk of dependence).",
        "Clomipramine (a tricyclic) — effective in OCD.",
        "Beta-blockers (propranolol) — for autonomic symptoms of performance anxiety.",
        "Buspirone — non-sedating anxiolytic for GAD.",
        "Psychotherapy — CBT with exposure and response prevention (ERP) is the psychological treatment of choice for OCD and phobias."
      ] },
      { h: "Nursing management (emphasis)", list: [
        "Stay with the highly anxious/panicking patient; remain calm; use short, simple, clear sentences.",
        "Provide a calm, low-stimulus, safe environment; reduce demands during severe anxiety.",
        "Teach and coach relaxation, deep breathing, grounding and distraction techniques.",
        "Help the patient identify triggers and early warning signs; build a hierarchy for graded exposure.",
        "For OCD — do NOT abruptly forbid rituals initially; allow time, then gradually limit them and support ERP; reduce reinforcement.",
        "Acknowledge the reality of somatoform symptoms without reinforcing the sick role; limit unnecessary reassurance and investigations; redirect to feelings and coping.",
        "Monitor for depression and suicide risk; ensure medication adherence and educate on delayed SSRI onset (2–6 weeks) and side effects.",
        "Promote sleep, nutrition, exercise and problem-solving skills."
      ] },
      { h: "Complications", list: [
        "Chronicity, disability and impaired occupational/social functioning.",
        "Depression, substance misuse and suicide.",
        "Benzodiazepine dependence with inappropriate long-term use."
      ] },
      { h: "Physiological (autonomic) features of anxiety", list: [
        "Cardiovascular — palpitations, tachycardia, chest tightness, raised blood pressure.",
        "Respiratory — hyperventilation, breathlessness, a choking sensation.",
        "Gastrointestinal — dry mouth, nausea, 'butterflies', diarrhoea, urinary frequency.",
        "Neuromuscular — tremor, muscle tension, headache, restlessness, fatigue.",
        "Other — sweating, dizziness, paraesthesiae, sleep disturbance."
      ] },
      { h: "Clinical relevance", p: "Anxiety underlies most psychiatric presentations. The nurse's calm presence and skilled communication are themselves anxiolytic. Recognising panic as an emergency, understanding the negative-reinforcement OCD cycle, and validating (without reinforcing) somatoform distress are key nursing competencies." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Describe Peplau's four levels of anxiety and the nursing approach at each level.",
      "Explain the OCD cycle and outline exposure and response prevention.",
      "Differentiate acute stress reaction, PTSD and adjustment disorder.",
      "Classify the somatoform disorders and describe the nursing management of a patient with conversion disorder.",
      "Discuss the pharmacological and nursing management of a patient with generalised anxiety disorder."
    ],
    assessment: [
      { type: "mcq", q: "The main difference between fear and anxiety is that anxiety is:", options: ["A response to a vague or unknown threat", "Always pathological", "Never accompanied by physical symptoms", "Only seen in children"], answer: 0, rationale: "Fear has a known object; anxiety is apprehension about a vague/unknown threat." },
      { type: "mcq", q: "At the PANIC level of anxiety, the priority nursing action is to:", options: ["Teach a new coping skill", "Explore the cause in depth", "Stay with the patient and provide safety in a low-stimulus setting", "Encourage the patient to make decisions"], answer: 2, rationale: "In panic the patient cannot learn or reason; safety, presence and reduced stimulation come first." },
      { type: "mcq", q: "The neurotransmitter enhanced by benzodiazepines to relieve anxiety is:", options: ["Dopamine", "Acetylcholine", "GABA", "Histamine"], answer: 2, rationale: "Benzodiazepines potentiate GABA, the main inhibitory neurotransmitter, reducing anxiety." },
      { type: "mcq", q: "In OCD, the repetitive behaviour performed to reduce anxiety is the:", options: ["Compulsion", "Obsession", "Delusion", "Phobia"], answer: 0, rationale: "Compulsions are repetitive acts done to relieve obsession-driven anxiety." },
      { type: "mcq", q: "First-line pharmacotherapy for OCD, panic and PTSD is a class of:", options: ["Benzodiazepines", "Antipsychotics", "Mood stabilisers", "SSRIs"], answer: 3, rationale: "SSRIs are first-line for most anxiety and related disorders including OCD and PTSD." },
      { type: "mcq", q: "The psychological treatment of choice for OCD is:", options: ["Exposure and response prevention (ERP)", "Psychoanalysis", "Electroconvulsive therapy", "Aversion therapy"], answer: 0, rationale: "ERP, a CBT technique, is the evidence-based psychotherapy for OCD." },
      { type: "mcq", q: "Flashbacks, nightmares, avoidance and hyperarousal for over one month after trauma indicate:", options: ["Acute stress reaction", "PTSD", "GAD", "Panic disorder"], answer: 1, rationale: "These persistent post-trauma symptoms lasting >1 month define PTSD." },
      { type: "mcq", q: "A patient develops sudden 'paralysis' of the legs after a severe emotional conflict, with normal investigations and surprising calm. This suggests:", options: ["Illness anxiety disorder", "Conversion disorder", "Malingering", "Panic disorder"], answer: 1, rationale: "Neurological symptoms without disease, linked to conflict with 'la belle indifférence', indicate conversion disorder." },
      { type: "mcq", q: "When caring for a newly admitted patient with OCD, the nurse should initially:", options: ["Forbid all rituals immediately", "Allow time for rituals while beginning to set gradual limits", "Ignore the patient", "Punish ritual behaviour"], answer: 1, rationale: "Abruptly stopping rituals raises anxiety; the nurse allows them initially, then gradually limits with ERP support." },
      { type: "mcq", q: "SSRIs should be started with patient education that their full antidepressant/anxiolytic effect takes:", options: ["A few hours", "1–2 days", "2–6 weeks", "6 months"], answer: 2, rationale: "SSRIs have a delayed onset of 2–6 weeks; educating patients prevents premature discontinuation." },
      { type: "fill", q: "Recurrent, intrusive, unwanted thoughts that cause anxiety in OCD are called ____.", accept: ["obsessions", "obsession"], rationale: "Obsessions are the intrusive thoughts; compulsions are the relieving behaviours." },
      { type: "fill", q: "The seeming lack of concern a conversion-disorder patient shows toward serious symptoms is called la belle ____.", accept: ["indifference", "indifférence"], rationale: "La belle indifférence is the classic indifferent attitude in conversion disorder." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "psy-07-mood-disorders",
    unit: "Unit 5 · Major Psychiatric Disorders",
    title: "Mood (Affective) Disorders — Depression & Bipolar Disorder",
    readMinutes: 27,
    summary: "Classification, monoamine and other theories, clinical features and biological signs of depression and mania, bipolar disorder, suicide risk, and evidence-based medical and nursing management including antidepressants, mood stabilisers and ECT.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition and classification", p: "Mood (affective) disorders are characterised by a primary, pervasive disturbance of mood — either lowered (depression) or elevated (mania) — with associated cognitive, behavioural and physical changes. Major categories: major depressive disorder, persistent depressive disorder (dysthymia), bipolar I disorder (mania ± depression), bipolar II disorder (hypomania + depression) and cyclothymia." },
      { h: "Aetiology and risk factors", list: [
        "Genetic — strong heritability; first-degree relatives at increased risk.",
        "Biochemical (monoamine hypothesis) — depression from deficiency and mania from excess of monoamines (serotonin, noradrenaline, dopamine) at synapses.",
        "Neuroendocrine — HPA-axis overactivity with raised cortisol (positive dexamethasone suppression test).",
        "Psychosocial — loss, adverse life events, learned helplessness, cognitive distortions (Beck's triad).",
        "Female sex, postpartum period, chronic illness and substance use."
      ] },
      { h: "Clinical features of major depression", list: [
        "Core: persistent low mood, loss of interest/pleasure (anhedonia), reduced energy/fatigue for ≥2 weeks.",
        "Cognitive: hopelessness, worthlessness, guilt, poor concentration, indecisiveness, suicidal thoughts.",
        "Biological (somatic) features: early-morning waking, diurnal variation (worse in the morning), appetite/weight loss, loss of libido, psychomotor retardation or agitation, constipation.",
        "Severe/psychotic depression: mood-congruent delusions (guilt, nihilism, poverty) and hallucinations.",
        "Depressive stupor at the extreme."
      ] },
      { h: "Clinical features of mania", list: [
        "Elevated, expansive or irritable mood for ≥1 week.",
        "Inflated self-esteem/grandiosity; flight of ideas and pressured speech.",
        "Decreased need for sleep; increased energy and goal-directed activity.",
        "Distractibility and poor judgment; excessive spending, sexual indiscretion, risk-taking.",
        "In severe mania: psychotic features and exhaustion/dehydration from overactivity."
      ], figure: {
        caption: "The mood spectrum from severe depression through euthymia to hypomania and mania in bipolar disorder.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mood spectrum from depression to mania."><line x1="30" y1="120" x2="530" y2="120" stroke="#15803D" stroke-width="2"/><path d="M30 165 Q120 60 210 120 T400 120 Q470 60 530 90" fill="none" stroke="#0F4C3A" stroke-width="3"/><line x1="30" y1="120" x2="30" y2="40" stroke="#15803D" stroke-width="1.5"/><text x="60" y="150" font-family="sans-serif" font-size="11" fill="#0F4C3A">Depression</text><text x="250" y="150" font-family="sans-serif" font-size="11" fill="#15803D">Euthymia (normal)</text><text x="430" y="80" font-family="sans-serif" font-size="11" fill="#0F4C3A">Mania</text><text x="20" y="35" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Mood</text><line x1="210" y1="45" x2="210" y2="175" stroke="#22C55E" stroke-width="1" stroke-dasharray="4 3"/><text x="180" y="192" font-family="sans-serif" font-size="10" fill="#15803D">baseline</text></svg>'
      } },
      { h: "Bipolar disorder", p: "Bipolar disorder involves episodes of both mania/hypomania and depression. Bipolar I requires at least one full manic episode; bipolar II requires hypomania plus major depression (no full mania). Lithium and other mood stabilisers are the mainstay; antidepressants alone can precipitate a switch to mania and are used cautiously with a mood stabiliser." },
      { h: "Suicide risk in mood disorders", p: "Depression is the leading cause of suicide; up to 15% of severely depressed patients die by suicide. Risk paradoxically rises early in treatment when psychomotor retardation lifts before mood improves, giving the patient energy to act. Continuous, explicit suicide assessment is a core nursing duty." },
      { h: "Medical management — antidepressants", list: [
        "SSRIs (fluoxetine, sertraline, escitalopram) — first-line; safer in overdose; onset 2–6 weeks.",
        "SNRIs (venlafaxine, duloxetine).",
        "Tricyclics (amitriptyline, imipramine) — effective but anticholinergic and cardiotoxic in overdose.",
        "MAOIs (phenelzine) — require a tyramine-free diet to avoid hypertensive crisis.",
        "Never stop SSRIs abruptly (discontinuation syndrome); beware serotonin syndrome if combined with other serotonergic drugs."
      ] },
      { h: "Medical management — mood stabilisers", list: [
        "Lithium — first-line for bipolar; narrow therapeutic index. Therapeutic level 0.6–1.2 mEq/L; toxicity >1.5 mEq/L. Monitor levels, renal and thyroid function; ensure stable salt and fluid intake.",
        "Sodium valproate and carbamazepine — anticonvulsant mood stabilisers.",
        "Atypical antipsychotics (olanzapine, quetiapine, risperidone) — for acute mania.",
        "ECT — for severe, resistant or psychotic depression, high suicide risk, or catatonia."
      ] },
      { h: "Lithium toxicity — recognise early", list: [
        "Mild (1.5–2.0 mEq/L): nausea, vomiting, diarrhoea, fine tremor, thirst, polyuria.",
        "Moderate (2.0–2.5): coarse tremor, ataxia, drowsiness, confusion, muscle twitching.",
        "Severe (>2.5): seizures, arrhythmias, renal failure, coma — a medical emergency; stop lithium and seek urgent care."
      ] },
      { h: "Nursing management of the depressed patient (emphasis)", list: [
        "Ensure safety — priority suicide assessment, one-to-one observation as indicated, remove means.",
        "Establish a trusting relationship; spend time even when the patient is silent; avoid excessive cheerfulness.",
        "Meet physical needs — nutrition, hydration, elimination, sleep and hygiene.",
        "Encourage small, achievable activities to counter helplessness; graded activity scheduling.",
        "Use simple, direct communication; allow time for slowed responses.",
        "Administer and monitor antidepressants; teach delayed onset and adherence; watch for rising suicide risk as energy returns.",
        "Involve family; provide psychoeducation and relapse-prevention planning."
      ] },
      { h: "Nursing management of the manic patient (emphasis)", list: [
        "Provide a calm, low-stimulus environment; reduce environmental provocation.",
        "Set firm, consistent, non-punitive limits on unacceptable behaviour.",
        "Protect from exhaustion, dehydration and injury; provide finger foods and high-calorie fluids the patient can eat 'on the move'.",
        "Redirect excess energy into non-competitive, non-stimulating activity.",
        "Ensure rest and sleep; monitor lithium levels and adherence.",
        "Protect the patient from the consequences of poor judgment (money, sexual risk)."
      ] },
      { h: "Clinical relevance", p: "Mood disorders are common, recurrent and potentially fatal. The nurse's vigilance for suicide (especially as retardation lifts), skill in monitoring lithium safely, and ability to structure the day for both the retarded depressed patient and the overactive manic patient are central, life-preserving competencies." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Describe the biological (somatic) features of major depression.",
      "Explain the monoamine hypothesis of mood disorders.",
      "Discuss the nursing management of a severely depressed, suicidal patient.",
      "State the therapeutic and toxic serum levels of lithium and describe the signs of lithium toxicity.",
      "Compare the nursing management of a depressed patient with that of a manic patient."
    ],
    assessment: [
      { type: "mcq", q: "The monoamine hypothesis explains depression as resulting from:", options: ["Excess dopamine", "Excess GABA", "A deficiency of monoamines such as serotonin and noradrenaline", "High acetylcholine"], answer: 2, rationale: "Depression is linked to a functional deficiency of monoamine neurotransmitters." },
      { type: "mcq", q: "Which is a classic biological (somatic) feature of major depression?", options: ["Early-morning waking with diurnal mood variation", "Increased libido", "Grandiosity", "Pressured speech"], answer: 0, rationale: "Early-morning waking and morning-worse mood are hallmark somatic features of depression." },
      { type: "mcq", q: "Suicide risk in a depressed patient may paradoxically INCREASE when:", options: ["Mood is at its lowest with severe retardation", "The patient is asleep", "Energy returns early in treatment before mood fully lifts", "Family visits"], answer: 2, rationale: "As psychomotor retardation lifts, the patient regains energy to act on persisting suicidal thoughts." },
      { type: "mcq", q: "The therapeutic serum lithium level for maintenance is approximately:", options: ["0.1–0.3 mEq/L", "0.6–1.2 mEq/L", "2.0–3.0 mEq/L", "4.0–5.0 mEq/L"], answer: 1, rationale: "Maintenance therapeutic lithium is 0.6–1.2 mEq/L; toxicity occurs above 1.5 mEq/L." },
      { type: "mcq", q: "A patient on lithium develops coarse tremor, ataxia and confusion. The nurse should suspect:", options: ["Therapeutic effect", "Serotonin syndrome", "Lithium toxicity", "Anticholinergic effect"], answer: 2, rationale: "Coarse tremor, ataxia and confusion indicate moderate lithium toxicity, requiring urgent action." },
      { type: "mcq", q: "For the acutely manic patient, the MOST appropriate nutrition strategy is:", options: ["Provide high-calorie finger foods he can eat while moving", "Insist he sits for three large meals", "Withhold food until calm", "Offer only clear fluids"], answer: 0, rationale: "A manic patient cannot sit still; portable high-calorie finger foods prevent exhaustion and weight loss." },
      { type: "mcq", q: "Giving an antidepressant alone to a bipolar patient risks:", options: ["Lithium toxicity", "A switch into mania", "Tardive dyskinesia", "Hypotension only"], answer: 1, rationale: "Antidepressants without a mood stabiliser can trigger a manic switch in bipolar disorder." },
      { type: "mcq", q: "A patient on an MAOI must avoid tyramine-rich foods to prevent:", options: ["Hypotension", "Hypoglycaemia", "Hypertensive crisis", "Constipation"], answer: 2, rationale: "Tyramine with an MAOI can precipitate a dangerous hypertensive crisis." },
      { type: "mcq", q: "For the acutely manic patient, the environment should be:", options: ["Brightly lit and busy", "A group activity room", "Competitive and stimulating", "Calm and low in stimulation"], answer: 3, rationale: "A low-stimulus environment reduces overactivity and the risk of escalation in mania." },
      { type: "mcq", q: "The treatment of choice for severe depression with high suicide risk not responding to drugs is:", options: ["Benzodiazepines", "Electroconvulsive therapy (ECT)", "A tyramine-free diet", "Aversion therapy"], answer: 1, rationale: "ECT is highly effective and rapid for severe, resistant or high-risk depression." },
      { type: "fill", q: "Loss of interest or pleasure in activities, a core symptom of depression, is called ____.", accept: ["anhedonia"], rationale: "Anhedonia is the inability to experience pleasure, a core depressive symptom." },
      { type: "fill", q: "The mood stabiliser that is first-line for bipolar disorder and has a narrow therapeutic index is ____.", accept: ["lithium"], rationale: "Lithium is first-line for bipolar disorder and requires serum-level monitoring." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "psy-08-schizophrenia",
    unit: "Unit 5 · Major Psychiatric Disorders",
    title: "Schizophrenia & Other Psychotic Disorders",
    readMinutes: 27,
    summary: "The dopamine and neurodevelopmental theories, positive and negative symptoms, Schneider's first-rank symptoms, subtypes and course, and the medical and nursing management of schizophrenia and related psychoses.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Definition", p: "Schizophrenia is a chronic, severe psychotic disorder characterised by disturbances in thinking (delusions, disorganisation), perception (hallucinations), emotion (blunting), volition and behaviour, with impaired reality testing and social/occupational decline, in the absence of a primary organic or mood cause. Onset is typically in late adolescence/early adulthood; lifetime prevalence ~1%." },
      { h: "Aetiology", list: [
        "Genetic — heritability ~80%; risk ~10% in a sibling, ~48% in a monozygotic twin.",
        "Dopamine hypothesis — hyperactivity of mesolimbic dopamine causes positive symptoms; mesocortical hypoactivity causes negative symptoms.",
        "Glutamate (NMDA hypofunction) and serotonin involvement.",
        "Neurodevelopmental — obstetric complications, prenatal infection, enlarged ventricles, reduced grey matter.",
        "Psychosocial — high 'expressed emotion' (criticism, over-involvement) in families predicts relapse; cannabis is a risk factor.",
        "Stress-vulnerability model integrates these factors."
      ] },
      { h: "Positive symptoms (added experiences)", list: [
        "Delusions — persecutory, of reference, grandiose, control, thought insertion/withdrawal/broadcasting.",
        "Hallucinations — most often auditory (third-person, running commentary).",
        "Disorganised (formal) thought disorder — loosening of associations, tangentiality, neologisms, word salad.",
        "Disorganised or bizarre behaviour; catatonia."
      ] },
      { h: "Negative symptoms (lost functions) — the 5 A's", list: [
        "Affective flattening (blunted affect).",
        "Alogia (poverty of speech).",
        "Avolition (lack of drive/motivation).",
        "Anhedonia (loss of pleasure).",
        "Asociality (social withdrawal). Negative symptoms cause the most long-term disability and respond less to medication."
      ], figure: {
        caption: "Schizophrenia symptom clusters: positive (added), negative (lost) and cognitive symptoms.",
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schizophrenia symptom clusters."><rect x="20" y="40" width="160" height="150" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="100" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">POSITIVE</text><g font-family="sans-serif" font-size="10" fill="#0F4C3A"><text x="35" y="90">Delusions</text><text x="35" y="110">Hallucinations</text><text x="35" y="130">Thought disorder</text><text x="35" y="150">Bizarre behaviour</text><text x="35" y="170">Catatonia</text></g><rect x="200" y="40" width="160" height="150" rx="10" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">NEGATIVE</text><g font-family="sans-serif" font-size="10" fill="#F0FDF4"><text x="215" y="90">Affective flattening</text><text x="215" y="110">Alogia</text><text x="215" y="130">Avolition</text><text x="215" y="150">Anhedonia</text><text x="215" y="170">Asociality</text></g><rect x="380" y="40" width="160" height="150" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="460" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">COGNITIVE</text><g font-family="sans-serif" font-size="10" fill="#0F4C3A"><text x="395" y="90">Poor attention</text><text x="395" y="110">Poor memory</text><text x="395" y="130">Impaired</text><text x="405" y="146">executive function</text><text x="395" y="170">Poor insight</text></g></svg>'
      } },
      { h: "Schneider's first-rank symptoms", p: "Highly suggestive (though not pathognomonic) of schizophrenia: audible thoughts (thought echo), third-person auditory hallucinations, running commentary, thought withdrawal/insertion/broadcasting, made feelings/impulses/acts (passivity), somatic passivity, and delusional perception." },
      { h: "Subtypes and related psychoses", list: [
        "Traditional subtypes — paranoid (delusions/hallucinations dominant), hebephrenic/disorganised, catatonic, simple, residual.",
        "Schizoaffective disorder — features of both schizophrenia and a mood disorder.",
        "Delusional disorder — a single well-systematised delusion with otherwise preserved functioning.",
        "Brief psychotic disorder — sudden psychosis lasting <1 month, often post-stressor.",
        "Acute and transient psychotic disorders."
      ] },
      { h: "Course and prognosis", p: "Course is variable — from a single episode with full recovery to chronic deterioration. Good-prognosis factors: acute onset, precipitating stressor, good premorbid functioning, positive (vs negative) symptoms, mood component, married, later onset and good support. Prompt treatment shortens the 'duration of untreated psychosis', which correlates with better outcome." },
      { h: "Medical management", list: [
        "Antipsychotics are the mainstay. Typical/first-generation (chlorpromazine, haloperidol) mainly block D2 receptors — effective for positive symptoms but cause extrapyramidal side effects (EPS).",
        "Atypical/second-generation (risperidone, olanzapine, quetiapine, aripiprazole) — act on dopamine and serotonin; fewer EPS but metabolic side effects (weight gain, diabetes, dyslipidaemia).",
        "Clozapine — for treatment-resistant schizophrenia; risk of agranulocytosis requires regular white-cell monitoring.",
        "Long-acting depot injections improve adherence.",
        "Psychosocial — family therapy to reduce expressed emotion, CBT for psychosis, social-skills training, supported employment."
      ] },
      { h: "Antipsychotic side effects to monitor", list: [
        "Extrapyramidal — acute dystonia, akathisia, pseudo-parkinsonism, tardive dyskinesia.",
        "Neuroleptic malignant syndrome (NMS) — rare, life-threatening: high fever, muscle rigidity, autonomic instability, altered consciousness, raised CPK; STOP the drug and treat urgently.",
        "Anticholinergic (dry mouth, constipation, blurred vision, urinary retention).",
        "Metabolic syndrome, sedation, hyperprolactinaemia, postural hypotension.",
        "Agranulocytosis with clozapine."
      ] },
      { h: "Investigations and diagnosis", list: [
        "Diagnosis is clinical, based on history, MSE and course; no definitive laboratory test exists.",
        "Rule out organic and drug-induced psychosis — bloods, toxicology screen, and neuroimaging (CT/MRI) where indicated.",
        "Collateral history from family is essential; symptoms must persist (ICD/DSM require ~1 month of active symptoms).",
        "Rating scales (PANSS, BPRS) quantify symptom severity and monitor response."
      ] },
      { h: "Nursing management (emphasis)", list: [
        "Establish trust with the suspicious/withdrawn patient; be consistent, honest and non-threatening; approach calmly and avoid crowding.",
        "For hallucinations — acknowledge the patient's experience without arguing or reinforcing ('I don't hear the voices, but I understand they frighten you'); explore content for command hallucinations and risk; use distraction and reality-based activity.",
        "For delusions — do not argue with or agree with the delusion; focus on the underlying feeling and on reality; build trust.",
        "Ensure safety, nutrition, hydration and self-care; monitor for command hallucinations directing harm.",
        "Administer antipsychotics; monitor and manage side effects (assess for EPS, NMS, metabolic effects); support adherence and depot administration.",
        "Improve social and self-care skills gradually; reduce isolation; involve and educate the family about expressed emotion and relapse signs.",
        "Promote structured, low-stimulus activity and a predictable routine."
      ] },
      { h: "Clinical relevance", p: "Schizophrenia is a leading cause of long-term psychiatric disability. The nurse's ability to build trust with a frightened, suspicious patient, respond therapeutically to hallucinations and delusions, recognise dangerous side effects (NMS, agranulocytosis, tardive dyskinesia), and support adherence and family functioning determines the patient's long-term outcome." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Explain the dopamine hypothesis and the stress-vulnerability model of schizophrenia.",
      "Differentiate positive and negative symptoms of schizophrenia and list the five negative symptoms.",
      "Describe Schneider's first-rank symptoms.",
      "Discuss the nursing management of a patient with auditory hallucinations and persecutory delusions.",
      "Describe the extrapyramidal side effects of antipsychotics and the features of neuroleptic malignant syndrome."
    ],
    assessment: [
      { type: "mcq", q: "The dopamine hypothesis relates the POSITIVE symptoms of schizophrenia to:", options: ["Low dopamine in the mesolimbic pathway", "Low serotonin only", "Excess dopamine in the mesolimbic pathway", "Excess GABA"], answer: 2, rationale: "Mesolimbic dopamine hyperactivity is linked to positive symptoms; mesocortical hypoactivity to negative symptoms." },
      { type: "mcq", q: "Which is a NEGATIVE symptom of schizophrenia?", options: ["Auditory hallucination", "Persecutory delusion", "Avolition", "Thought broadcasting"], answer: 2, rationale: "Avolition (lack of motivation) is a negative symptom; the others are positive symptoms." },
      { type: "mcq", q: "A patient believes his thoughts are being taken out of his head by an external force. This first-rank symptom is:", options: ["Thought insertion", "Thought withdrawal", "Thought broadcasting", "Delusional perception"], answer: 1, rationale: "Thought withdrawal is the belief that thoughts are being removed from one's mind." },
      { type: "mcq", q: "The MOST therapeutic nursing response to a patient reporting voices is:", options: ["'There are no voices, stop imagining them.'", "'What are the voices telling you to do?'", "'I hear them too.'", "'Just ignore them.'"], answer: 1, rationale: "Assessing content is vital to detect command hallucinations and risk, while not reinforcing the hallucination." },
      { type: "mcq", q: "When a patient expresses a persecutory delusion, the nurse should:", options: ["Argue logically to disprove it", "Agree with the delusion to build trust", "Acknowledge the feeling without arguing or agreeing, and focus on reality", "Ignore the patient completely"], answer: 2, rationale: "Neither arguing nor agreeing is therapeutic; addressing the underlying feeling and reality builds trust." },
      { type: "mcq", q: "A patient on haloperidol develops high fever, severe muscle rigidity, altered consciousness and raised CPK. The nurse suspects:", options: ["Tardive dyskinesia", "Neuroleptic malignant syndrome", "Akathisia", "Serotonin syndrome"], answer: 1, rationale: "This tetrad is NMS, a life-threatening emergency requiring the drug to be stopped immediately." },
      { type: "mcq", q: "Clozapine requires regular blood monitoring because of the risk of:", options: ["Agranulocytosis", "Hyperkalaemia", "Anaemia only", "Thrombocytosis"], answer: 0, rationale: "Clozapine can cause agranulocytosis, so white-cell counts must be monitored regularly." },
      { type: "mcq", q: "High 'expressed emotion' in a family (criticism, over-involvement) is associated with:", options: ["Lower relapse rates", "No effect", "Higher relapse rates", "Cure of schizophrenia"], answer: 2, rationale: "High expressed emotion predicts higher relapse, so family psychoeducation aims to reduce it." },
      { type: "mcq", q: "Which factor predicts a BETTER prognosis in schizophrenia?", options: ["Insidious onset", "Predominant negative symptoms", "Acute onset with a clear precipitant", "Poor premorbid functioning"], answer: 2, rationale: "Acute onset with a precipitating stressor and good premorbid functioning predict better outcome." },
      { type: "mcq", q: "Second-generation (atypical) antipsychotics are preferred over typicals mainly because they cause fewer:", options: ["Metabolic effects", "Extrapyramidal side effects", "Sedation", "Cost concerns"], answer: 1, rationale: "Atypicals cause fewer EPS, though they carry more metabolic side effects." },
      { type: "fill", q: "The antipsychotic reserved for treatment-resistant schizophrenia, requiring white-cell monitoring, is ____.", accept: ["clozapine"], rationale: "Clozapine is used for resistant cases and requires monitoring for agranulocytosis." },
      { type: "fill", q: "Late-onset, potentially irreversible involuntary movements from long-term antipsychotic use are called tardive ____.", accept: ["dyskinesia"], rationale: "Tardive dyskinesia is a late extrapyramidal effect of prolonged antipsychotic therapy." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "psy-09-substance-use",
    unit: "Unit 5 · Major Psychiatric Disorders",
    title: "Substance Use & Dependence Disorders",
    readMinutes: 26,
    summary: "Concepts of use, misuse, tolerance, dependence and withdrawal; the neurobiology of addiction; features of intoxication and withdrawal for common substances; and detoxification, relapse prevention and nursing management.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Key concepts and definitions", list: [
        "Substance use — consumption of a psychoactive substance.",
        "Misuse/harmful use — use causing physical or psychological harm.",
        "Tolerance — needing progressively larger doses to achieve the same effect.",
        "Dependence (addiction) — a cluster of physiological, behavioural and cognitive features in which use takes priority over other behaviours.",
        "Withdrawal — a substance-specific syndrome on stopping or reducing after prolonged use.",
        "Craving — a strong subjective urge to use."
      ] },
      { h: "Features of dependence syndrome (ICD)", list: [
        "Strong desire or compulsion to take the substance (craving).",
        "Impaired control over use (onset, amount, termination).",
        "Physiological withdrawal state or use to avoid it.",
        "Evidence of tolerance.",
        "Progressive neglect of other pleasures and interests.",
        "Persisting use despite clear evidence of harm."
      ] },
      { h: "Neurobiology of addiction", p: "Virtually all addictive substances converge on the mesolimbic dopamine 'reward pathway' (ventral tegmental area → nucleus accumbens), producing a surge of dopamine and reinforcing use. Repeated use causes neuroadaptation: tolerance, a downregulated reward system (anhedonia when abstinent), and strong conditioned cravings triggered by cues — explaining the chronic, relapsing nature of addiction." },
      { h: "Alcohol — intoxication and withdrawal", list: [
        "Intoxication: disinhibition, slurred speech, incoordination, impaired judgment; at high levels, stupor, respiratory depression and death.",
        "Withdrawal (6–24 h): tremor, sweating, anxiety, tachycardia, nausea.",
        "Withdrawal seizures (12–48 h).",
        "Delirium tremens (48–72 h) — medical emergency: confusion, agitation, vivid visual hallucinations, tremor, autonomic overactivity; up to 5–15% mortality untreated.",
        "Wernicke's encephalopathy (thiamine deficiency): confusion, ophthalmoplegia, ataxia — give thiamine to prevent irreversible Korsakoff's psychosis."
      ] },
      { h: "Opioids, sedatives and stimulants", list: [
        "Opioids (heroin) — intoxication: euphoria, drowsiness, pinpoint pupils, respiratory depression (naloxone reverses overdose). Withdrawal: dilated pupils, lacrimation, rhinorrhoea, yawning, cramps, diarrhoea, piloerection — distressing but rarely fatal.",
        "Sedatives/benzodiazepines — withdrawal resembles alcohol (anxiety, tremor, seizures); taper slowly.",
        "Stimulants (amphetamine, cocaine) — intoxication: euphoria, dilated pupils, hypertension, agitation, paranoia; 'crash' with depression and craving on withdrawal.",
        "Cannabis — relaxation, altered perception, red eyes; can precipitate psychosis in vulnerable people.",
        "Tobacco/nicotine — withdrawal: irritability, craving, poor concentration, increased appetite."
      ] },
      { h: "The stages-of-change model (Prochaska & DiClemente)", p: "Recovery is understood as movement through stages — precontemplation, contemplation, preparation, action, maintenance, and (often) relapse. Matching the intervention to the patient's stage (e.g. motivational interviewing in contemplation) improves engagement.", figure: {
        caption: "The stages-of-change (transtheoretical) cycle guiding motivational nursing interventions in addiction.",
        svg: '<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of change cycle."><defs><marker id="psyArr9" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><circle cx="240" cy="130" r="95" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="5 4"/><g font-family="sans-serif" font-size="10" fill="#0F4C3A" font-weight="700"><rect x="185" y="10" width="110" height="30" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="240" y="29" text-anchor="middle">Precontemplation</text><rect x="345" y="70" width="110" height="30" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="89" text-anchor="middle">Contemplation</text><rect x="345" y="160" width="110" height="30" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="179" text-anchor="middle">Preparation</text><rect x="185" y="220" width="110" height="30" rx="6" fill="#22C55E" stroke="#0F4C3A"/><text x="240" y="239" text-anchor="middle" fill="#F0FDF4">Action</text><rect x="25" y="160" width="110" height="30" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="179" text-anchor="middle">Maintenance</text><rect x="25" y="70" width="110" height="30" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="80" y="89" text-anchor="middle">Relapse</text></g></svg>'
      } },
      { h: "Medical management", list: [
        "Detoxification — supervised, medically managed withdrawal: benzodiazepines (e.g. chlordiazepoxide) for alcohol withdrawal in a tapering regimen; thiamine and fluids.",
        "Opioid detox/substitution — methadone or buprenorphine; symptomatic drugs (clonidine).",
        "Relapse-prevention pharmacotherapy — naltrexone, acamprosate and disulfiram (aversive) for alcohol; naltrexone/buprenorphine for opioids; nicotine replacement, bupropion, varenicline for tobacco.",
        "Treat comorbid psychiatric and physical illness (dual diagnosis)."
      ] },
      { h: "Nursing management (emphasis)", list: [
        "Adopt a non-judgmental, empathetic, consistent attitude; recognise addiction as an illness, not a moral failing.",
        "Monitor vital signs and withdrawal severity (e.g. CIWA-Ar for alcohol); ensure a safe, quiet environment and seizure/DT precautions.",
        "Maintain hydration, nutrition and thiamine; ensure safety and orientation.",
        "Use motivational interviewing; help the patient recognise consequences and build motivation without confrontation.",
        "Identify high-risk situations and triggers; teach coping and refusal skills; develop a relapse-prevention plan.",
        "Set firm limits on manipulative or drug-seeking behaviour; be consistent within the team.",
        "Encourage support groups (e.g. Alcoholics/Narcotics Anonymous) and involve the family; provide health education.",
        "Administer and monitor detox and relapse-prevention medication; educate about disulfiram–alcohol reaction."
      ] },
      { h: "Complications", list: [
        "Physical — liver cirrhosis, pancreatitis, cardiomyopathy, peptic ulcer, blood-borne infections (HIV, hepatitis) from injecting.",
        "Neuropsychiatric — Wernicke–Korsakoff syndrome, dementia, depression, suicide, psychosis.",
        "Social — family breakdown, job loss, crime, accidents.",
        "Overdose and death."
      ] },
      { h: "Prevention and health education", list: [
        "Primary — public education, control of availability, taxation and restriction of advertising.",
        "Secondary — early screening (CAGE/AUDIT) and brief interventions in primary care.",
        "Tertiary — relapse prevention, rehabilitation and support groups.",
        "Educate patients and families about the illness model, triggers and harm reduction."
      ] },
      { h: "Screening and assessment tools", list: [
        "CAGE questionnaire — a brief 4-item screen for problem drinking (Cut down, Annoyed, Guilty, Eye-opener).",
        "AUDIT — the WHO Alcohol Use Disorders Identification Test.",
        "CIWA-Ar — the Clinical Institute Withdrawal Assessment for Alcohol, guiding symptom-triggered treatment.",
        "Breath/blood alcohol and urine drug screens; liver function and full blood count."
      ] },
      { h: "Clinical relevance", p: "Addiction is a chronic, relapsing brain disorder, not a lack of willpower. Nursing care hinges on a non-judgmental therapeutic stance, safe management of potentially fatal withdrawal (delirium tremens, thiamine deficiency), stage-matched motivational work, and structured relapse prevention with family and community support." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define tolerance, dependence and withdrawal, and list the features of the dependence syndrome.",
      "Describe the neurobiology of addiction and the reward pathway.",
      "Outline the stages and dangers of alcohol withdrawal, including delirium tremens.",
      "Explain the stages-of-change model and its use in nursing an addicted patient.",
      "Discuss the nursing management of a patient undergoing alcohol detoxification."
    ],
    assessment: [
      { type: "mcq", q: "Needing progressively larger doses to achieve the same effect is called:", options: ["Tolerance", "Withdrawal", "Craving", "Intoxication"], answer: 0, rationale: "Tolerance is the diminished effect of a fixed dose, requiring dose escalation." },
      { type: "mcq", q: "The brain pathway central to the reinforcing effect of addictive substances is the:", options: ["Nigrostriatal dopamine pathway", "Corticospinal tract", "Mesolimbic dopamine reward pathway", "Vagal pathway"], answer: 2, rationale: "The mesolimbic (reward) dopamine pathway mediates the reinforcing effects of drugs." },
      { type: "mcq", q: "Delirium tremens, a medical emergency, typically appears after alcohol cessation at:", options: ["1–2 hours", "6–12 hours", "48–72 hours", "2 weeks"], answer: 2, rationale: "Delirium tremens characteristically develops 48–72 hours after the last drink." },
      { type: "mcq", q: "A confused alcoholic patient with ophthalmoplegia and ataxia should urgently receive:", options: ["Glucose alone", "Naloxone", "Thiamine (vitamin B1)", "Disulfiram"], answer: 2, rationale: "This is Wernicke's encephalopathy; thiamine prevents progression to Korsakoff's psychosis." },
      { type: "mcq", q: "Pinpoint pupils and respiratory depression in overdose suggest:", options: ["Opioid overdose", "Stimulant use", "Alcohol withdrawal", "Cannabis use"], answer: 0, rationale: "Opioid overdose causes miosis and respiratory depression, reversible with naloxone." },
      { type: "mcq", q: "A patient says, 'I don't have a drinking problem — everyone drinks like me.' This reflects the ____ stage of change.", options: ["Precontemplation", "Action", "Maintenance", "Preparation"], answer: 0, rationale: "Denial of a problem is characteristic of the precontemplation stage." },
      { type: "mcq", q: "The medication that causes an unpleasant reaction if alcohol is consumed (aversive therapy) is:", options: ["Naltrexone", "Acamprosate", "Disulfiram", "Methadone"], answer: 2, rationale: "Disulfiram inhibits alcohol metabolism, producing an aversive reaction if alcohol is taken." },
      { type: "mcq", q: "The most appropriate nursing attitude toward a patient with dependence is:", options: ["Non-judgmental and empathetic", "Moralistic and confrontational", "Dismissive", "Punitive"], answer: 0, rationale: "A non-judgmental, empathetic stance treats addiction as an illness and supports engagement." },
      { type: "mcq", q: "The tapering drug commonly used to manage alcohol withdrawal safely is a:", options: ["Antipsychotic", "Stimulant", "SSRI", "Benzodiazepine (e.g. chlordiazepoxide)"], answer: 3, rationale: "Benzodiazepines control withdrawal symptoms and prevent seizures during alcohol detox." },
      { type: "mcq", q: "Methadone and buprenorphine are used mainly in the management of:", options: ["Alcohol dependence", "Opioid dependence", "Tobacco dependence", "Cannabis dependence"], answer: 1, rationale: "Methadone and buprenorphine are opioid-substitution therapies for opioid dependence." },
      { type: "fill", q: "A substance-specific syndrome occurring on stopping a drug after prolonged use is called ____.", accept: ["withdrawal"], rationale: "Withdrawal is the characteristic syndrome that follows cessation after dependence." },
      { type: "fill", q: "The counselling approach that builds motivation to change without confrontation is called motivational ____.", accept: ["interviewing"], rationale: "Motivational interviewing elicits the patient's own reasons for change." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "psy-10-organic-delirium-dementia",
    unit: "Unit 5 · Major Psychiatric Disorders",
    title: "Organic Mental Disorders — Delirium & Dementia",
    readMinutes: 26,
    summary: "The organic (neurocognitive) disorders: causes, pathophysiology and clinical features of delirium and dementia, their crucial differentiation, and the medical and nursing management of the acutely confused and the demented patient.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Organic (neurocognitive) mental disorders", p: "Organic mental disorders are psychiatric syndromes arising from demonstrable brain dysfunction or systemic disease affecting the brain. The two principal syndromes are delirium (acute) and dementia (chronic). Both cause cognitive impairment but differ critically in onset, course and reversibility." },
      { h: "Delirium — definition and features", list: [
        "An acute, fluctuating disturbance of consciousness and attention that develops over hours to days.",
        "Impaired attention and awareness; disorientation; disturbed sleep–wake cycle (worse at night — 'sundowning').",
        "Perceptual disturbances (often visual hallucinations, illusions) and transient delusions.",
        "Psychomotor changes — hyperactive, hypoactive or mixed subtypes.",
        "Usually REVERSIBLE if the cause is treated; a medical emergency."
      ] },
      { h: "Causes of delirium", list: [
        "Infection (UTI, pneumonia, sepsis), fever.",
        "Metabolic — hypoglycaemia, electrolyte imbalance, hypoxia, uraemia, hepatic failure.",
        "Drugs and toxins — anticholinergics, sedatives, opioids; alcohol/drug withdrawal.",
        "Postoperative states, dehydration, urinary retention/constipation (especially in the elderly).",
        "Head injury, stroke, seizures."
      ] },
      { h: "Dementia — definition and features", list: [
        "A chronic, usually progressive and irreversible decline in multiple cognitive domains with clear consciousness.",
        "Memory impairment (early, especially recent memory) — the hallmark.",
        "Aphasia (language), apraxia (skilled movement), agnosia (recognition), and impaired executive function (the 'A's').",
        "Behavioural and psychological symptoms (BPSD) — wandering, agitation, aggression, depression, delusions.",
        "Gradual loss of activities of daily living and self-care."
      ] },
      { h: "Types of dementia", list: [
        "Alzheimer's disease — commonest (~60%); insidious, amyloid plaques and neurofibrillary (tau) tangles, cholinergic deficit.",
        "Vascular dementia — stepwise decline from cerebrovascular disease.",
        "Lewy body dementia — fluctuating cognition, visual hallucinations, parkinsonism, neuroleptic sensitivity.",
        "Frontotemporal dementia — early personality and behaviour change.",
        "Reversible causes — hypothyroidism, B12 deficiency, normal-pressure hydrocephalus, depression ('pseudodementia')."
      ] },
      { h: "Delirium vs dementia — the key differentiation", figure: {
        caption: "Comparison of delirium and dementia across onset, course, consciousness and reversibility.",
        svg: '<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Delirium versus dementia comparison table."><rect x="20" y="20" width="180" height="34" fill="#0F4C3A"/><rect x="200" y="20" width="180" height="34" fill="#15803D"/><rect x="380" y="20" width="160" height="34" fill="#15803D"/><text x="110" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Feature</text><text x="290" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Delirium</text><text x="460" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Dementia</text><g font-family="sans-serif" font-size="10.5" fill="#0F4C3A"><rect x="20" y="54" width="180" height="34" fill="#DCFCE7" stroke="#15803D" stroke-width="0.7"/><rect x="200" y="54" width="180" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><rect x="380" y="54" width="160" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><text x="30" y="75">Onset</text><text x="210" y="75">Acute (hours&#8211;days)</text><text x="390" y="75">Insidious (months)</text><rect x="20" y="88" width="180" height="34" fill="#DCFCE7" stroke="#15803D" stroke-width="0.7"/><rect x="200" y="88" width="180" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><rect x="380" y="88" width="160" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><text x="30" y="109">Course</text><text x="210" y="109">Fluctuating</text><text x="390" y="109">Progressive</text><rect x="20" y="122" width="180" height="34" fill="#DCFCE7" stroke="#15803D" stroke-width="0.7"/><rect x="200" y="122" width="180" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><rect x="380" y="122" width="160" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><text x="30" y="143">Consciousness</text><text x="210" y="143">Clouded/impaired</text><text x="390" y="143">Clear (until late)</text><rect x="20" y="156" width="180" height="34" fill="#DCFCE7" stroke="#15803D" stroke-width="0.7"/><rect x="200" y="156" width="180" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><rect x="380" y="156" width="160" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><text x="30" y="177">Attention</text><text x="210" y="177">Markedly impaired</text><text x="390" y="177">Normal early</text><rect x="20" y="190" width="180" height="34" fill="#DCFCE7" stroke="#15803D" stroke-width="0.7"/><rect x="200" y="190" width="180" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><rect x="380" y="190" width="160" height="34" fill="#F0FDF4" stroke="#15803D" stroke-width="0.7"/><text x="30" y="211">Reversibility</text><text x="210" y="211">Usually reversible</text><text x="390" y="211">Usually irreversible</text></g></svg>'
      } },
      { h: "Investigations", list: [
        "History (collateral), physical and neurological examination.",
        "Bloods — glucose, electrolytes, urea, LFTs, TFTs, B12/folate, calcium, full blood count.",
        "Infection screen — urine, chest X-ray, cultures.",
        "Cognitive testing — MMSE/MoCA; neuroimaging (CT/MRI) for dementia.",
        "Medication review; oxygen saturation."
      ] },
      { h: "Medical management", list: [
        "Delirium — identify and treat the underlying cause (the priority); optimise hydration, oxygenation, electrolytes; review/stop offending drugs; short-term low-dose antipsychotic (e.g. haloperidol) only for severe agitation/risk (avoid in Lewy body dementia).",
        "Dementia — cholinesterase inhibitors (donepezil, rivastigmine, galantamine) for mild–moderate Alzheimer's; memantine (NMDA antagonist) for moderate–severe; treat BPSD non-pharmacologically first; treat reversible causes.",
        "Avoid benzodiazepines in delirium (except alcohol withdrawal) and minimise antipsychotics in dementia (stroke/mortality risk)."
      ] },
      { h: "Nursing management (emphasis)", list: [
        "Ensure safety — prevent falls and wandering; supervise; use least-restrictive measures; avoid restraint where possible.",
        "Provide a calm, well-lit, familiar, low-stimulus environment; reduce noise; a night light reduces sundowning.",
        "Reorientation — clocks, calendars, familiar objects, frequent gentle reminders of time/place/person; consistent staff.",
        "Communicate simply — short sentences, one instruction at a time, face the patient, allow time.",
        "Maintain routine and meet basic needs — hydration, nutrition, elimination, sleep, hygiene, comfort (treat pain/constipation, which worsen confusion).",
        "For dementia — validation and reminiscence approaches; support ADLs while preserving dignity and remaining independence; manage BPSD by identifying triggers.",
        "Support and educate carers/family; monitor for carer strain.",
        "Monitor mental state and detect delirium superimposed on dementia."
      ] },
      { h: "Prevention", list: [
        "Delirium — proactive measures in at-risk (elderly, post-op) patients: maintain hydration, oxygenation, sleep and mobility; treat pain, infection and constipation; review medications; provide orientation cues.",
        "Dementia — control vascular risk factors (hypertension, diabetes, smoking) to prevent vascular dementia; cognitive and social engagement; treat reversible causes early.",
        "Early detection and screening in the elderly to distinguish reversible from irreversible causes."
      ] },
      { h: "Complications", list: [
        "Delirium — falls, injury, aspiration, prolonged hospital stay, and increased mortality; may unmask underlying dementia.",
        "Dementia — malnutrition, dehydration, infections, incontinence, pressure injuries, and total dependency.",
        "Carer burnout, depression and safety risks (wandering, fire, driving).",
        "Delirium superimposed on dementia is common and easily missed."
      ] },
      { h: "Clinical relevance", p: "Distinguishing delirium from dementia is a critical, potentially life-saving nursing skill: delirium signals an acute, often reversible medical emergency that is frequently missed in elderly hospitalised patients. Environmental and communication strategies — not sedation — are the first-line management of confusion, agitation and BPSD." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define delirium and dementia and differentiate them across onset, course, consciousness and reversibility.",
      "List the common causes of delirium in a hospitalised elderly patient.",
      "Describe the types and clinical features of dementia.",
      "Discuss the pharmacological management of Alzheimer's dementia.",
      "Outline the nursing management of an acutely delirious, agitated elderly patient."
    ],
    assessment: [
      { type: "mcq", q: "The feature that MOST reliably distinguishes delirium from dementia is:", options: ["Presence of memory loss", "Old age", "Acute onset with clouding of consciousness and fluctuating course", "Depression"], answer: 2, rationale: "Delirium has acute onset, impaired consciousness and a fluctuating course; dementia is insidious with clear consciousness." },
      { type: "mcq", q: "Delirium is best regarded as:", options: ["A medical emergency that is often reversible", "A permanent condition", "A normal part of ageing", "Purely psychological"], answer: 0, rationale: "Delirium signals acute illness and is usually reversible once the cause is treated." },
      { type: "mcq", q: "The commonest cause of dementia is:", options: ["Vascular dementia", "Alzheimer's disease", "Lewy body dementia", "Frontotemporal dementia"], answer: 1, rationale: "Alzheimer's disease accounts for about 60% of dementias." },
      { type: "mcq", q: "Worsening confusion and agitation in the evening/night is termed:", options: ["Sundowning", "Anhedonia", "Aphasia", "Apraxia"], answer: 0, rationale: "Sundowning is the evening worsening of confusion common in delirium and dementia." },
      { type: "mcq", q: "A cholinesterase inhibitor used in mild-to-moderate Alzheimer's disease is:", options: ["Haloperidol", "Donepezil", "Diazepam", "Lithium"], answer: 1, rationale: "Donepezil is a cholinesterase inhibitor that improves cognition in early Alzheimer's." },
      { type: "mcq", q: "The FIRST priority in managing a patient with delirium is to:", options: ["Give a sedative", "Identify and treat the underlying cause", "Apply restraints", "Discharge the patient"], answer: 1, rationale: "Treating the underlying medical cause is the definitive management of delirium." },
      { type: "mcq", q: "Which environmental strategy best helps a confused, disoriented patient?", options: ["A dark, quiet room with no cues", "Frequent staff changes", "A well-lit room with a clock, calendar and consistent staff", "Constant television noise"], answer: 2, rationale: "Reorientation cues, good lighting and consistency reduce confusion; a night light limits sundowning." },
      { type: "mcq", q: "Antipsychotics should be used with particular caution in which dementia because of severe sensitivity?", options: ["Alzheimer's disease", "Lewy body dementia", "Vascular dementia", "Frontotemporal dementia"], answer: 1, rationale: "Lewy body dementia patients have marked neuroleptic sensitivity, risking severe reactions." },
      { type: "mcq", q: "In an elderly hospitalised patient, an easily missed but common cause of delirium is:", options: ["Urinary tract infection or constipation", "Chronic stable hypertension", "Wearing glasses", "Family visits"], answer: 0, rationale: "UTI, constipation, dehydration and drugs are frequent, treatable causes of delirium in the elderly." },
      { type: "mcq", q: "The best first-line approach to agitation in dementia (BPSD) is:", options: ["Immediate heavy sedation", "Identify triggers and use non-pharmacological/environmental strategies", "Physical restraint", "Ignore the behaviour"], answer: 1, rationale: "Non-pharmacological, trigger-focused management is first-line for BPSD, minimising drug risks." },
      { type: "fill", q: "The acute, fluctuating, usually reversible confusional state with impaired consciousness is called ____.", accept: ["delirium"], rationale: "Delirium is the acute organic brain syndrome, distinct from chronic dementia." },
      { type: "fill", q: "The NMDA-receptor antagonist used in moderate-to-severe Alzheimer's dementia is ____.", accept: ["memantine"], rationale: "Memantine is used for moderate-to-severe Alzheimer's disease." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "psy-11-child-adolescent-personality",
    unit: "Unit 6 · Special Populations & Personality",
    title: "Childhood, Adolescent & Personality Disorders",
    readMinutes: 25,
    summary: "Common childhood and adolescent psychiatric disorders (intellectual disability, autism, ADHD, conduct disorder), sexual disorders in outline, and the classification, clusters and nursing management of personality disorders.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Principles of child and adolescent psychiatry", p: "Child mental health must be understood in a developmental context: behaviour is judged against expected milestones and the child's age. Assessment relies heavily on collateral information (parents, teachers), play and observation, and involves the family as the unit of care. Early intervention alters long-term trajectories." },
      { h: "Neurodevelopmental disorders", list: [
        "Intellectual disability (ID) — significantly below-average intellectual functioning (IQ <70) with impaired adaptive behaviour, onset before 18 years; graded mild, moderate, severe, profound.",
        "Autism spectrum disorder (ASD) — persistent deficits in social communication and interaction plus restricted, repetitive behaviours and interests; onset in early childhood.",
        "Specific learning disorders — reading (dyslexia), writing, arithmetic."
      ] },
      { h: "Attention-deficit/hyperactivity disorder (ADHD)", p: "A persistent pattern of inattention and/or hyperactivity-impulsivity that is developmentally inappropriate, present in more than one setting and impairing function. Core features: poor attention/distractibility, hyperactivity (fidgeting, cannot stay seated) and impulsivity. First-line drug treatment is a stimulant (methylphenidate); behavioural and parent-training interventions are essential." },
      { h: "Disruptive behaviour and emotional disorders", list: [
        "Oppositional defiant disorder — a pattern of angry, defiant, hostile behaviour toward authority.",
        "Conduct disorder — repetitive violation of rules and the rights of others (aggression, destruction, deceit, theft); risk of later antisocial personality disorder.",
        "Childhood anxiety, separation anxiety and depression.",
        "Enuresis, encopresis, tics and Tourette's syndrome."
      ] },
      { h: "Sexual disorders (outline)", list: [
        "Sexual dysfunctions — disorders of desire, arousal, orgasm or pain (e.g. erectile dysfunction, vaginismus).",
        "Paraphilic disorders — recurrent intense sexual arousal to atypical objects or situations causing harm or distress.",
        "Gender identity concerns — addressed with acceptance and specialist referral.",
        "Nursing role — non-judgmental assessment, education, addressing myths, and appropriate referral."
      ] },
      { h: "Personality disorders — definition", p: "A personality disorder is an enduring, pervasive, inflexible pattern of inner experience and behaviour that deviates markedly from cultural expectation, is stable over time, begins in adolescence/early adulthood, and causes distress or impairment. The traits are ego-syntonic (seen by the person as normal), making treatment challenging." },
      { h: "The three clusters (DSM-5)", list: [
        "Cluster A — ODD/eccentric: paranoid, schizoid, schizotypal.",
        "Cluster B — DRAMATIC/emotional: antisocial, borderline, histrionic, narcissistic.",
        "Cluster C — ANXIOUS/fearful: avoidant, dependent, obsessive-compulsive personality."
      ], figure: {
        caption: "The three DSM-5 personality-disorder clusters and their member disorders.",
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three personality disorder clusters."><rect x="20" y="40" width="165" height="160" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="102" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Cluster A</text><text x="102" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Odd / eccentric</text><g font-family="sans-serif" font-size="10.5" fill="#0F4C3A"><text x="35" y="110">Paranoid</text><text x="35" y="132">Schizoid</text><text x="35" y="154">Schizotypal</text></g><rect x="197" y="40" width="165" height="160" rx="10" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="279" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">Cluster B</text><text x="279" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#F0FDF4">Dramatic / emotional</text><g font-family="sans-serif" font-size="10.5" fill="#F0FDF4"><text x="212" y="110">Antisocial</text><text x="212" y="132">Borderline</text><text x="212" y="154">Histrionic</text><text x="212" y="176">Narcissistic</text></g><rect x="374" y="40" width="166" height="160" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="457" y="65" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#15803D">Cluster C</text><text x="457" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Anxious / fearful</text><g font-family="sans-serif" font-size="10.5" fill="#0F4C3A"><text x="389" y="110">Avoidant</text><text x="389" y="132">Dependent</text><text x="389" y="154">Obsessive-</text><text x="399" y="170">compulsive</text></g></svg>'
      } },
      { h: "Borderline personality disorder (BPD) — key focus", list: [
        "Pervasive instability of mood, self-image and relationships, with marked impulsivity.",
        "Frantic efforts to avoid abandonment; unstable, intense relationships that swing between idealisation and devaluation.",
        "Identity disturbance; chronic emptiness; recurrent self-harm and suicidal behaviour.",
        "Splitting (viewing people as all-good or all-bad) and impulsivity.",
        "Dialectical behaviour therapy (DBT) is the evidence-based psychotherapy."
      ] },
      { h: "Antisocial personality disorder", p: "A pervasive disregard for and violation of the rights of others since age 15: deceit, impulsivity, irritability/aggression, reckless disregard for safety, irresponsibility and lack of remorse. Manipulation of staff is common; consistent limits are essential." },
      { h: "Nursing management (emphasis)", list: [
        "Maintain clear, consistent boundaries and limits; be firm, fair and non-punitive; ensure the whole team is consistent to prevent splitting/manipulation.",
        "Build a trusting, matter-of-fact therapeutic relationship; avoid over-involvement and rescuing.",
        "For BPD — ensure safety and manage self-harm/suicide risk; help the patient label and tolerate emotions; teach distress-tolerance and coping skills (DBT principles); avoid reinforcing manipulative behaviour while validating genuine distress.",
        "For children/adolescents — involve family and school; use behaviour-modification techniques (positive reinforcement, structure, routine); parent training.",
        "For ADHD — provide structure, clear rules, short tasks and consistent reinforcement; monitor stimulant effects (appetite, sleep, growth).",
        "Provide psychoeducation, promote self-esteem and social skills, and coordinate multidisciplinary care."
      ] },
      { h: "Aetiology across these disorders", list: [
        "Genetic and temperamental vulnerability (strong in ADHD, autism and personality disorders).",
        "Prenatal/perinatal insults and neurodevelopmental factors.",
        "Early adverse experiences — abuse, neglect, inconsistent or invalidating parenting (especially in BPD).",
        "Family dysfunction, trauma and social adversity.",
        "The biopsychosocial interaction of temperament with environment."
      ] },
      { h: "Clinical relevance", p: "Personality disorders and childhood disorders challenge the therapeutic relationship in different ways — splitting and manipulation on the one hand, developmental and family complexity on the other. Consistent limits, team communication, family involvement, and structured behavioural approaches are the shared nursing keys, while safety (self-harm in BPD) remains paramount." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Describe the clinical features and nursing management of a child with ADHD.",
      "Differentiate intellectual disability, autism spectrum disorder and specific learning disorder.",
      "Define personality disorder and classify the three DSM-5 clusters with their member disorders.",
      "Describe borderline personality disorder and the nursing management of self-harm and splitting.",
      "Discuss the principles of nursing children and adolescents with psychiatric disorders."
    ],
    assessment: [
      { type: "mcq", q: "Intellectual disability is defined by an IQ below approximately ____ with impaired adaptive functioning before age 18.", options: ["90", "80", "70", "50"], answer: 2, rationale: "Intellectual disability is defined by significantly sub-average IQ (<70) plus adaptive deficits with onset before 18." },
      { type: "mcq", q: "The core triad of ADHD is:", options: ["Delusions, hallucinations, disorganisation", "Low mood, guilt, fatigue", "Inattention, hyperactivity, impulsivity", "Rituals, obsessions, avoidance"], answer: 2, rationale: "ADHD is characterised by inattention, hyperactivity and impulsivity across settings." },
      { type: "mcq", q: "First-line drug treatment for ADHD is a:", options: ["Stimulant (e.g. methylphenidate)", "Benzodiazepine", "Mood stabiliser", "Antipsychotic"], answer: 0, rationale: "Stimulants such as methylphenidate are first-line pharmacotherapy for ADHD." },
      { type: "mcq", q: "Persistent deficits in social communication with restricted, repetitive behaviours describe:", options: ["ADHD", "Conduct disorder", "Autism spectrum disorder", "Oppositional defiant disorder"], answer: 2, rationale: "Social-communication deficits plus restricted, repetitive behaviours define autism spectrum disorder." },
      { type: "mcq", q: "Antisocial, borderline, histrionic and narcissistic personality disorders belong to Cluster:", options: ["A", "B", "C", "D"], answer: 1, rationale: "Cluster B comprises the dramatic/emotional personality disorders." },
      { type: "mcq", q: "A patient with BPD tells the nurse she is 'the only one who understands' but calls another nurse 'useless.' This is:", options: ["Splitting", "Projection", "Sublimation", "Reaction formation"], answer: 0, rationale: "Splitting is viewing people as all-good or all-bad, common in borderline personality disorder." },
      { type: "mcq", q: "The evidence-based psychotherapy for borderline personality disorder is:", options: ["Psychoanalysis", "Aversion therapy", "ECT", "Dialectical behaviour therapy (DBT)"], answer: 3, rationale: "DBT is the established evidence-based treatment for BPD, teaching emotion regulation and distress tolerance." },
      { type: "mcq", q: "The MOST important nursing strategy with a manipulative patient with antisocial personality disorder is:", options: ["Maintain consistent limits agreed by the whole team", "Give in to demands to avoid conflict", "Confront aggressively", "Avoid the patient"], answer: 0, rationale: "Consistent, team-wide limits prevent manipulation and splitting." },
      { type: "mcq", q: "A repetitive pattern of violating the rights of others in childhood, risking later antisocial personality disorder, is:", options: ["Separation anxiety", "Enuresis", "Conduct disorder", "Autism"], answer: 2, rationale: "Conduct disorder involves persistent rule- and rights-violating behaviour and can precede antisocial PD." },
      { type: "mcq", q: "Because personality-disorder traits are ego-syntonic, this means the patient:", options: ["Is very distressed by the traits", "Generally sees the traits as part of normal self", "Has psychotic symptoms", "Cannot function at all"], answer: 1, rationale: "Ego-syntonic traits are experienced as normal by the person, making insight and change difficult." },
      { type: "fill", q: "The defence mechanism of viewing others as either all-good or all-bad, typical of BPD, is called ____.", accept: ["splitting"], rationale: "Splitting is the hallmark defence in borderline personality disorder." },
      { type: "fill", q: "Cluster ____ personality disorders are described as the anxious/fearful group (avoidant, dependent, obsessive-compulsive).", accept: ["c", "C"], rationale: "Cluster C comprises the anxious/fearful personality disorders." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "psy-12-emergencies",
    unit: "Unit 7 · Psychiatric Emergencies & Treatment",
    title: "Psychiatric Emergencies — Suicide, Aggression & Violence",
    readMinutes: 26,
    summary: "Assessment and management of the major psychiatric emergencies: suicide and deliberate self-harm, aggression and violence, and other crises, with emphasis on risk assessment, de-escalation, safe restraint and the nursing role.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is a psychiatric emergency?", p: "A psychiatric emergency is an acute disturbance of thought, mood, behaviour or social relationship that requires immediate intervention to protect the life or safety of the patient or others. The commonest are suicide/self-harm and aggression/violence; others include severe self-neglect, acute psychosis, panic, delirium, catatonia, NMS and drug reactions." },
      { h: "Suicide — scope and terminology", list: [
        "Suicidal ideation — thoughts of ending one's life.",
        "Suicide attempt — a non-fatal self-injurious act with intent to die.",
        "Deliberate self-harm (DSH) — self-injury which may or may not have suicidal intent.",
        "Completed suicide — death by self-inflicted act.",
        "Suicide is a leading cause of death; most people who die by suicide have a psychiatric disorder, commonly depression."
      ] },
      { h: "Risk factors for suicide (SAD PERSONS)", list: [
        "Sex (male), Age (young or elderly), Depression.",
        "Previous attempt, Ethanol/substance abuse.",
        "Rational thinking loss (psychosis), Social supports lacking.",
        "Organised plan, No spouse (single/divorced/widowed), Sickness (chronic illness).",
        "Also: recent loss, hopelessness, giving away possessions, family history of suicide."
      ], figure: {
        caption: "Assessing suicide risk: escalating seriousness from ideation to a specific plan with means and intent.",
        svg: '<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Suicide risk escalation pyramid."><polygon points="250,20 470,190 30,190" fill="none" stroke="#15803D" stroke-width="2"/><line x1="95" y1="140" x2="405" y2="140" stroke="#22C55E" stroke-width="1.5"/><line x1="160" y1="90" x2="340" y2="90" stroke="#22C55E" stroke-width="1.5"/><text x="250" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Intent + Means</text><text x="250" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">(highest risk)</text><text x="250" y="118" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Specific plan</text><text x="250" y="170" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Suicidal ideation</text><text x="250" y="205" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Always ASK directly &#8212; asking does not plant the idea</text></svg>'
      } },
      { h: "Nursing assessment of the suicidal patient", list: [
        "ASK directly and calmly — 'Are you thinking of harming or killing yourself?' Asking does NOT increase risk; it opens the topic.",
        "Assess ideation, plan, intent, means, lethality and access to means.",
        "Explore precipitants, hopelessness, and protective factors (reasons for living, support, responsibilities).",
        "Assess past attempts and their seriousness.",
        "Never dismiss threats or assume someone who talks about suicide will not act."
      ] },
      { h: "Nursing management of the suicidal patient (emphasis)", list: [
        "Ensure a safe environment — remove means (sharps, cords, medicines, belts); a safe room; observe the physical environment for ligature points.",
        "Provide appropriate level of observation — up to constant one-to-one/'special' observation for high risk; never leave a high-risk patient alone.",
        "Establish a trusting, non-judgmental relationship; encourage expression of feelings; instil hope.",
        "Make a collaborative safety plan; involve family in supervision and removal of means at home.",
        "Administer and monitor treatment (antidepressants, ECT for severe cases); watch for rising risk as energy returns.",
        "Document risk assessment, observation level and interventions accurately; hand over clearly.",
        "Do NOT rely on 'no-suicide contracts' as a substitute for assessment and observation."
      ] },
      { h: "Aggression and violence — the assault cycle", list: [
        "Trigger phase — an event provokes; early signs appear.",
        "Escalation phase — rising tension: pacing, clenched fists, raised voice, glaring, invading space.",
        "Crisis phase — physical aggression/violence.",
        "Recovery (plateau) phase — gradual return to baseline; risk of re-escalation.",
        "Post-crisis (depression) phase — remorse, exhaustion; time to debrief."
      ] },
      { h: "Warning signs of impending violence", list: [
        "Motor — restlessness, pacing, clenched jaw/fists, tense posture.",
        "Verbal — loud, threatening, abusive or sarcastic speech; demands.",
        "Affect — anger, irritability, suspiciousness.",
        "History of violence (the best single predictor), intoxication, psychosis, command hallucinations."
      ] },
      { h: "De-escalation techniques (first-line)", list: [
        "Stay calm; use a soft, steady voice; do not argue or threaten.",
        "Ensure your own safety — keep a safe distance and an exit; remove other patients; call for help; never see a violent patient alone.",
        "Adopt non-threatening body language; respect personal space; avoid sustained direct eye contact.",
        "Listen, acknowledge feelings and offer realistic choices to restore a sense of control.",
        "Set clear, firm limits on behaviour without provocation.",
        "Remove objects that could be used as weapons."
      ] },
      { h: "When de-escalation fails — restraint and rapid tranquillisation", list: [
        "Physical restraint and seclusion are LAST resorts, used only when there is imminent danger and less-restrictive measures have failed.",
        "Use trained staff and approved technique; protect airway, dignity and circulation; never restrain in the prone position for prolonged periods.",
        "Rapid tranquillisation — e.g. IM lorazepam and/or an antipsychotic (haloperidol), per protocol.",
        "Restraint must be time-limited, continuously monitored (vital signs, comfort, needs), regularly reviewed, and fully documented, with debriefing afterward.",
        "Respect the patient's legal rights throughout."
      ] },
      { h: "Other psychiatric emergencies", list: [
        "Severe self-neglect and refusal to eat or drink — risk of dehydration and death.",
        "Acute dystonic reaction to antipsychotics — treat with anticholinergics (e.g. IM benztropine/procyclidine).",
        "Neuroleptic malignant syndrome and serotonin syndrome — stop the drug and treat urgently.",
        "Delirium tremens and acute intoxication/overdose.",
        "Acute panic attack and catatonia (stupor or excitement)."
      ] },
      { h: "Post-incident care and staff support", list: [
        "Debrief the patient once calm — review triggers and rebuild the therapeutic relationship.",
        "Debrief and support staff involved; address injury, stress and morale.",
        "Review and learn from the incident; update the care and risk-management plan.",
        "Document the sequence of events, interventions and outcomes factually.",
        "Restore the patient's dignity and least-restrictive care as soon as it is safe."
      ] },
      { h: "Clinical relevance", p: "Managing suicide and violence is where psychiatric nursing is most acutely a safety discipline. The core skills — asking about suicide directly, accurate risk assessment, removing means, graded observation, early recognition of escalating aggression, and skilled de-escalation before any restraint — save lives and prevent injury to patients and staff." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define a psychiatric emergency and list the common types.",
      "Describe the assessment of suicide risk, including the SAD PERSONS factors.",
      "Discuss the nursing management of an actively suicidal inpatient.",
      "Describe the phases of the assault (aggression) cycle and the warning signs of impending violence.",
      "Explain the principles of de-escalation and the safe use of restraint and rapid tranquillisation."
    ],
    assessment: [
      { type: "mcq", q: "When a nurse suspects a patient may be suicidal, the best action is to:", options: ["Ask directly and calmly about suicidal thoughts", "Avoid the topic so as not to plant the idea", "Reassure the patient that things will improve", "Change the subject"], answer: 0, rationale: "Asking directly does not increase risk; it opens communication and allows proper assessment." },
      { type: "mcq", q: "The single best predictor of future violence is:", options: ["Age", "Sex", "A past history of violence", "Diagnosis of depression"], answer: 2, rationale: "A history of violent behaviour is the strongest predictor of future violence." },
      { type: "mcq", q: "The FIRST-line approach to an escalating, agitated patient is:", options: ["Immediate physical restraint", "Rapid tranquillisation", "Verbal de-escalation", "Seclusion"], answer: 2, rationale: "De-escalation is first-line; restraint and medication are used only when de-escalation fails." },
      { type: "mcq", q: "For a high-risk suicidal inpatient, the appropriate observation level is:", options: ["Check every shift", "Once-daily rounds", "Constant one-to-one ('special') observation", "No observation needed"], answer: 2, rationale: "High suicide risk requires continuous one-to-one observation and never leaving the patient alone." },
      { type: "mcq", q: "In the SAD PERSONS scale, the 'O' stands for:", options: ["Old age", "Overdose", "Organised plan", "Obesity"], answer: 2, rationale: "'O' denotes an Organised plan, which raises suicide risk substantially." },
      { type: "mcq", q: "During the escalation phase of the assault cycle, the nurse should:", options: ["Confront and argue firmly", "Use de-escalation and ensure safety/exit", "Immediately restrain", "Leave the patient alone"], answer: 1, rationale: "Early de-escalation and ensuring safety can prevent progression to the crisis phase." },
      { type: "mcq", q: "Physical restraint of an aggressive patient should be:", options: ["The first intervention tried", "Applied prone for long periods", "Used without documentation", "A last resort, time-limited and continuously monitored"], answer: 3, rationale: "Restraint is a last resort requiring monitoring, review and documentation; prolonged prone restraint is dangerous." },
      { type: "mcq", q: "Which environmental action is essential for an acutely suicidal patient?", options: ["Remove potential means such as sharps, cords and medicines", "Provide a razor for self-care", "Leave the patient alone to rest", "Encourage isolation"], answer: 0, rationale: "Removing means of self-harm is a fundamental safety intervention." },
      { type: "mcq", q: "A drug commonly used for rapid tranquillisation of a violent patient is:", options: ["Donepezil", "Lithium", "IM lorazepam and/or haloperidol", "Fluoxetine"], answer: 2, rationale: "IM benzodiazepine and/or antipsychotic per protocol is standard for rapid tranquillisation." },
      { type: "mcq", q: "Relying solely on a 'no-suicide contract' is:", options: ["An adequate substitute for observation", "Not a substitute for thorough risk assessment and observation", "The best evidence-based tool", "Legally required"], answer: 1, rationale: "No-suicide contracts do not replace proper assessment, means restriction and observation." },
      { type: "fill", q: "The strongest single predictor of both future suicide and future violence is a previous ____.", accept: ["attempt", "history", "act", "behaviour"], rationale: "A past attempt/history of the behaviour is the strongest predictor of recurrence." },
      { type: "fill", q: "Verbal and non-verbal techniques used to calm an agitated patient before any restraint are called ____.", accept: ["de-escalation", "de escalation", "deescalation"], rationale: "De-escalation is the first-line management of escalating aggression." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "psy-13-psychopharmacology-ect",
    unit: "Unit 7 · Psychiatric Emergencies & Treatment",
    title: "Psychopharmacology & Electroconvulsive Therapy (ECT)",
    readMinutes: 27,
    summary: "The major classes of psychotropic drugs — antipsychotics, antidepressants, mood stabilisers, anxiolytics and antidementia drugs — their mechanisms, uses, side effects and nursing responsibilities, together with the indications, procedure and nursing care of electroconvulsive therapy.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Overview of psychopharmacology", p: "Psychotropic (psychoactive) drugs act on neurotransmitters in the brain to relieve symptoms of mental disorder. They are grouped by therapeutic use: antipsychotics, antidepressants, mood stabilisers, anxiolytics/hypnotics, antidementia drugs and psychostimulants. The nurse's role spans safe administration, monitoring effects and side effects, adherence support and education." },
      { h: "Antipsychotics (neuroleptics)", list: [
        "Use: schizophrenia, mania, psychotic depression, severe agitation.",
        "Typical (chlorpromazine, haloperidol) — block D2 receptors; effective for positive symptoms; more EPS.",
        "Atypical (risperidone, olanzapine, quetiapine, clozapine, aripiprazole) — dopamine + serotonin action; fewer EPS but metabolic effects.",
        "Side effects: EPS (dystonia, akathisia, parkinsonism, tardive dyskinesia), NMS, sedation, anticholinergic effects, weight gain, hyperprolactinaemia, postural hypotension, QT prolongation; clozapine → agranulocytosis.",
        "Nursing: monitor for EPS/NMS/metabolic effects; support adherence; manage depot injections."
      ] },
      { h: "Antidepressants", list: [
        "SSRIs (fluoxetine, sertraline, escitalopram) — first-line; safer in overdose; onset 2–6 weeks; GI upset, sexual dysfunction, initial anxiety.",
        "SNRIs (venlafaxine, duloxetine).",
        "Tricyclics (amitriptyline, imipramine) — anticholinergic, sedating, cardiotoxic in overdose.",
        "MAOIs (phenelzine) — tyramine-free diet to prevent hypertensive crisis.",
        "Watch for serotonin syndrome (agitation, hyperthermia, rigidity, clonus, autonomic instability) and discontinuation syndrome."
      ] },
      { h: "Mood stabilisers", list: [
        "Lithium — bipolar; therapeutic 0.6–1.2 mEq/L, toxic >1.5; monitor levels, renal and thyroid function; maintain stable salt/fluid intake.",
        "Valproate — teratogenic (avoid in women of childbearing potential where possible); monitor LFTs.",
        "Carbamazepine — enzyme inducer; risk of blood dyscrasias and rash.",
        "Lamotrigine — bipolar depression; risk of Stevens–Johnson syndrome (titrate slowly)."
      ] },
      { h: "Anxiolytics and hypnotics", list: [
        "Benzodiazepines (diazepam, lorazepam, chlordiazepoxide) — enhance GABA; rapid anxiolytic/sedative/anticonvulsant; short-term use only (dependence, tolerance, withdrawal); flumazenil reverses overdose.",
        "Buspirone — non-sedating, non-dependence anxiolytic for GAD; delayed onset.",
        "Z-drugs (zolpidem) for short-term insomnia."
      ] },
      { h: "Antidementia drugs and stimulants", list: [
        "Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) — mild–moderate Alzheimer's; GI and bradycardia effects.",
        "Memantine (NMDA antagonist) — moderate–severe Alzheimer's.",
        "Psychostimulants (methylphenidate) — ADHD; monitor appetite, sleep, growth and cardiovascular status."
      ] },
      { h: "General nursing responsibilities in psychopharmacology", list: [
        "Follow the rights of medication administration; check for allergies and interactions.",
        "Educate on delayed onset (antidepressants), the need for adherence, and not stopping abruptly.",
        "Monitor therapeutic response and specific side effects; use rating scales (AIMS for TD).",
        "Monitor serum levels where required (lithium, valproate, clozapine WCC).",
        "Watch for and manage emergencies — NMS, serotonin syndrome, lithium toxicity, agranulocytosis, hypertensive crisis.",
        "Assess for covert non-adherence ('cheeking'); consider depot preparations.",
        "Involve family and provide written information."
      ] },
      { h: "Electroconvulsive therapy (ECT) — definition and indications", p: "ECT is a treatment in which a brief, controlled electric current is passed through the brain to induce a modified (generalised) seizure under general anaesthesia and muscle relaxation. It is safe and highly effective and is NOT a punishment.", figure: {
        caption: "ECT pathway: pre-ECT preparation, the modified procedure under anaesthesia, and post-ECT recovery nursing.",
        svg: '<svg viewBox="0 0 560 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ECT process from preparation to recovery."><defs><marker id="psyArr13" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="55" width="160" height="60" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="95" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Pre-ECT</text><text x="95" y="98" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#0F4C3A">consent, NPO, workup</text><rect x="200" y="55" width="160" height="60" rx="10" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Procedure</text><text x="280" y="98" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#F0FDF4">anaesthesia + relaxant</text><rect x="385" y="55" width="160" height="60" rx="10" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="465" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Recovery</text><text x="465" y="98" text-anchor="middle" font-family="sans-serif" font-size="9.5" fill="#DCFCE7">airway, orientation</text><line x1="175" y1="85" x2="196" y2="85" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr13)"/><line x1="360" y1="85" x2="381" y2="85" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr13)"/><text x="280" y="30" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Modified ECT pathway</text></svg>'
      } },
      { h: "Indications and contraindications for ECT", list: [
        "Indications: severe/refractory depression, high suicide risk needing rapid response, depressive stupor, psychotic depression, catatonia, severe mania, refusal to eat/drink.",
        "No absolute contraindications; raised intracranial pressure is the main relative contraindication; caution with recent myocardial infarction, arrhythmia, aneurysm.",
        "Usual course: 6–12 treatments, 2–3 times per week."
      ] },
      { h: "Nursing care for ECT", list: [
        "Before: ensure valid informed consent; explain the procedure to reduce fear; nil by mouth (NPO) 6–8 hours; baseline observations and investigations; remove dentures, jewellery, hairpins; empty bladder; withhold specified drugs.",
        "During: assist the anaesthetist; monitor airway, oxygenation and the modified seizure; ensure safety.",
        "After: position in recovery position; maintain airway; monitor vital signs and consciousness; reorient the patient (transient confusion and headache are common); reassure regarding short-term memory loss; observe until fully awake; provide food when the swallow/gag reflex returns.",
        "Document the procedure and response."
      ] },
      { h: "Side effects of ECT", list: [
        "Transient confusion and disorientation immediately after.",
        "Short-term (usually reversible) memory impairment.",
        "Headache, muscle aches, nausea.",
        "Anaesthetic and cardiovascular risks (uncommon)."
      ] },
      { h: "Clinical relevance", p: "The nurse is central to safe, effective drug therapy — recognising life-threatening reactions (NMS, serotonin syndrome, lithium toxicity, agranulocytosis) and supporting adherence — and to humane ECT care, where consent, NPO status, airway management and post-procedure reorientation are key nursing responsibilities that ensure safety and reduce the fear surrounding this effective treatment." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Classify the psychotropic drugs and give an example and main use of each class.",
      "Describe the side effects of antipsychotic drugs and the nursing monitoring required.",
      "Discuss the nursing responsibilities in administering lithium and recognising toxicity.",
      "Define ECT, list its indications, and describe the modified procedure.",
      "Outline the nursing care of a patient before, during and after ECT."
    ],
    assessment: [
      { type: "mcq", q: "Benzodiazepines relieve anxiety by enhancing the action of:", options: ["Dopamine", "Serotonin", "GABA", "Acetylcholine"], answer: 2, rationale: "Benzodiazepines potentiate the inhibitory neurotransmitter GABA." },
      { type: "mcq", q: "A patient on an SSRI plus another serotonergic drug develops agitation, hyperthermia, rigidity and clonus. This is:", options: ["Serotonin syndrome", "Neuroleptic malignant syndrome", "Lithium toxicity", "Anticholinergic crisis"], answer: 0, rationale: "This cluster indicates serotonin syndrome from excess serotonergic activity." },
      { type: "mcq", q: "Before ECT, the patient should be kept nil by mouth for approximately:", options: ["30 minutes", "1 hour", "6–8 hours", "24 hours"], answer: 2, rationale: "NPO for 6–8 hours before general anaesthesia prevents aspiration during ECT." },
      { type: "mcq", q: "The MOST common and expected side effect immediately after ECT is:", options: ["Permanent amnesia", "Paralysis", "Transient confusion and short-term memory loss", "Psychosis"], answer: 2, rationale: "Transient post-ECT confusion and short-term, usually reversible memory loss are expected." },
      { type: "mcq", q: "A woman of childbearing potential requiring a mood stabiliser should generally AVOID which drug because of teratogenicity?", options: ["Sodium valproate", "Lithium at any dose", "Buspirone", "Donepezil"], answer: 0, rationale: "Valproate is highly teratogenic and is avoided in women of childbearing potential where possible." },
      { type: "mcq", q: "The antidote for benzodiazepine overdose is:", options: ["Naloxone", "Atropine", "Flumazenil", "Activated charcoal only"], answer: 2, rationale: "Flumazenil is the specific benzodiazepine-receptor antagonist used in overdose." },
      { type: "mcq", q: "A key indication for ECT is:", options: ["Mild situational anxiety", "Severe depression with high suicide risk needing rapid response", "Personality disorder", "Substance craving"], answer: 1, rationale: "ECT is indicated for severe/refractory depression, high suicide risk, catatonia and psychotic depression." },
      { type: "mcq", q: "Immediately after ECT, the priority nursing action is to:", options: ["Give the patient a large meal", "Maintain the airway and place in the recovery position", "Discharge the patient home", "Start a group activity"], answer: 1, rationale: "Airway maintenance and recovery positioning are the immediate post-anaesthesia priorities." },
      { type: "mcq", q: "MAOI antidepressants require dietary avoidance of tyramine to prevent:", options: ["Serotonin syndrome", "Agranulocytosis", "Hypertensive crisis", "Hypoglycaemia"], answer: 2, rationale: "Tyramine with an MAOI can cause a dangerous hypertensive crisis." },
      { type: "mcq", q: "For a patient on clozapine, the essential ongoing blood test monitors for:", options: ["Liver enzymes only", "White-cell count (agranulocytosis)", "Blood glucose only", "Serum sodium"], answer: 1, rationale: "Clozapine can cause agranulocytosis, so regular white-cell counts are mandatory." },
      { type: "fill", q: "ECT works by inducing a controlled, modified ____ under general anaesthesia.", accept: ["seizure", "convulsion", "fit"], rationale: "ECT induces a modified generalised seizure to achieve its therapeutic effect." },
      { type: "fill", q: "The specific reversal agent for opioid overdose (contrasted with flumazenil for benzodiazepines) is ____.", accept: ["naloxone"], rationale: "Naloxone reverses opioid overdose; flumazenil reverses benzodiazepines." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "psy-14-psychotherapies",
    unit: "Unit 7 · Psychiatric Emergencies & Treatment",
    title: "Psychotherapies, Behaviour, Group & Milieu Therapy",
    readMinutes: 25,
    summary: "The major psychological (non-pharmacological) treatments: psychoanalytic and supportive psychotherapy, cognitive behavioural therapy, behaviour therapy techniques, group and family therapy, milieu (therapeutic community) and occupational/recreational therapies, and the nursing role in each.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is psychotherapy?", p: "Psychotherapy is the planned, structured treatment of psychological disorders by psychological means — a purposeful professional relationship using talking, learning and emotional experience to relieve symptoms, resolve conflicts, change maladaptive behaviour and promote growth. It may be used alone or with medication." },
      { h: "Classification of psychotherapies", list: [
        "By depth — supportive, re-educative, reconstructive (psychoanalytic).",
        "By number — individual, group, family, couple.",
        "By orientation — psychodynamic, behavioural, cognitive, humanistic, interpersonal.",
        "By duration — brief/time-limited or long-term."
      ] },
      { h: "Psychoanalytic / psychodynamic psychotherapy", p: "Based on Freud; aims to make unconscious conflicts conscious and resolve them. Techniques: free association, dream analysis, interpretation, and analysis of transference and resistance. It is intensive and long-term; brief psychodynamic therapy is a shorter adaptation." },
      { h: "Supportive psychotherapy", p: "Aims not to change personality but to strengthen existing coping and help the patient through a difficult period. Techniques: reassurance, ventilation, guidance, persuasion, environmental manipulation and reinforcement of adaptive defences. Widely used by nurses." },
      { h: "Cognitive behavioural therapy (CBT)", list: [
        "Combines cognitive therapy (identifying and restructuring distorted, automatic negative thoughts and irrational beliefs) with behaviour therapy.",
        "Structured, present-focused, goal-oriented, time-limited, with homework.",
        "Strong evidence for depression, anxiety, panic, phobias, OCD (with ERP), PTSD, eating disorders and psychosis.",
        "The patient learns to test and correct thinking errors (cognitive distortions) such as catastrophising and all-or-nothing thinking."
      ], figure: {
        caption: "The CBT model: thoughts, feelings and behaviours interact, so changing distorted thoughts changes feelings and behaviour.",
        svg: '<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CBT cognitive triangle of thoughts feelings behaviour."><defs><marker id="psyArr14" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="130" y="15" width="140" height="46" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="200" y="43" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">THOUGHTS</text><rect x="20" y="180" width="140" height="46" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="90" y="208" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">FEELINGS</text><rect x="240" y="180" width="140" height="46" rx="9" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="310" y="208" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">BEHAVIOUR</text><line x1="150" y1="63" x2="105" y2="176" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr14)"/><line x1="120" y1="176" x2="180" y2="63" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr14)"/><line x1="250" y1="63" x2="295" y2="176" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr14)"/><line x1="280" y1="176" x2="220" y2="63" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr14)"/><line x1="160" y1="203" x2="236" y2="203" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr14)"/><line x1="236" y1="215" x2="160" y2="215" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr14)"/></svg>'
      } },
      { h: "Behaviour therapy techniques", list: [
        "Systematic desensitisation — graded exposure to a feared stimulus paired with relaxation (for phobias).",
        "Flooding — rapid full exposure to the feared stimulus.",
        "Exposure and response prevention (ERP) — for OCD.",
        "Token economy — desirable behaviour reinforced with tokens exchangeable for rewards (wards, chronic patients).",
        "Aversion therapy — pairing an unwanted behaviour with an unpleasant stimulus.",
        "Relaxation training, biofeedback, modelling, assertiveness training and behaviour modification."
      ] },
      { h: "Group therapy", list: [
        "Treatment of several patients together by one or more therapists (usually 6–10 members).",
        "Yalom's therapeutic factors: instillation of hope, universality (not being alone), imparting information, altruism, corrective family experience, socialising, imitative behaviour, interpersonal learning, group cohesiveness, catharsis.",
        "Economical and provides peer support and social learning.",
        "The nurse may co-lead groups and observe group dynamics."
      ] },
      { h: "Family and couple therapy", p: "Treats the family as a system; problems are viewed as arising within relationship patterns rather than in one 'identified patient'. Especially useful where high expressed emotion, communication problems or an ill child are involved. It reduces relapse in schizophrenia and supports the whole unit." },
      { h: "Milieu therapy (therapeutic community)", list: [
        "The whole ward environment is deliberately structured as the therapeutic agent.",
        "Principles: a safe, supportive, structured environment; clear expectations and roles; patient participation and responsibility; democratic decision-making; use of peer relationships and community meetings.",
        "The nurse manages the milieu — setting norms, ensuring safety, facilitating relationships and community meetings."
      ] },
      { h: "Occupational, recreational and other therapies", list: [
        "Occupational therapy — purposeful activity to restore function and self-esteem.",
        "Recreational and art/music/dance/play therapy — expression, socialisation and enjoyment.",
        "Psychoeducation — teaching patients and families about illness and coping.",
        "Relaxation, yoga and mindfulness-based approaches."
      ] },
      { h: "Nursing role in psychotherapies", list: [
        "Establish and maintain the therapeutic relationship that underpins all therapies.",
        "Deliver supportive psychotherapy, psychoeducation, relaxation and behavioural interventions within the nursing scope.",
        "Co-facilitate group and milieu therapy; observe and report group and ward dynamics.",
        "Reinforce and support the work of formal psychotherapies (e.g. CBT homework, ERP, token economy) between sessions.",
        "Assess suitability, obtain consent, prepare the patient, and evaluate response."
      ] },
      { h: "Clinical relevance", p: "Psychotherapies address the meaning, learning and relationships that medication cannot. Nurses are ideally placed to deliver supportive and behavioural interventions, run the therapeutic milieu, and reinforce formal therapies — making the nurse an active therapeutic agent, not merely a medication administrator." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Classify the psychotherapies and describe supportive psychotherapy.",
      "Explain the CBT model and its applications with the cognitive triangle.",
      "Describe four behaviour therapy techniques with their indications.",
      "Discuss group therapy, including Yalom's therapeutic factors and the nurse's role.",
      "Explain the principles of milieu therapy and the nurse's role in managing the therapeutic environment."
    ],
    assessment: [
      { type: "mcq", q: "The therapy that identifies and restructures distorted automatic thoughts and is strongly evidence-based for depression and anxiety is:", options: ["Cognitive behavioural therapy", "Psychoanalysis", "Aversion therapy", "Milieu therapy"], answer: 0, rationale: "CBT targets cognitive distortions and behaviour and has strong evidence for mood and anxiety disorders." },
      { type: "mcq", q: "Graded exposure to a feared object paired with relaxation is called:", options: ["Flooding", "Token economy", "Systematic desensitisation", "Free association"], answer: 2, rationale: "Systematic desensitisation combines graded exposure with relaxation to treat phobias." },
      { type: "mcq", q: "Reinforcing desirable behaviour with tokens exchangeable for privileges is a:", options: ["Token economy", "Aversion therapy", "Dream analysis", "Milieu meeting"], answer: 0, rationale: "A token economy uses tokens as reinforcers to shape adaptive behaviour." },
      { type: "mcq", q: "The aim of SUPPORTIVE psychotherapy is mainly to:", options: ["Reconstruct the personality", "Analyse the unconscious", "Strengthen existing coping and help through a difficult period", "Induce a seizure"], answer: 2, rationale: "Supportive therapy bolsters current coping rather than restructuring personality." },
      { type: "mcq", q: "Yalom's group factor of realising others share similar problems is termed:", options: ["Universality", "Altruism", "Catharsis", "Cohesiveness"], answer: 0, rationale: "Universality is the recognition that one is not alone with one's problems." },
      { type: "mcq", q: "In milieu therapy, the therapeutic agent is:", options: ["A single one-to-one session", "Medication only", "The whole structured ward environment and community", "The patient's family only"], answer: 2, rationale: "Milieu therapy uses the entire structured environment and community as the treatment." },
      { type: "mcq", q: "Free association and interpretation of transference are techniques of:", options: ["Behaviour therapy", "Psychoanalytic psychotherapy", "Group therapy", "Occupational therapy"], answer: 1, rationale: "Free association and transference interpretation are core psychoanalytic techniques." },
      { type: "mcq", q: "Family therapy is particularly indicated when there is:", options: ["No family involvement at all", "High expressed emotion and communication problems", "A purely medical illness", "A single acute infection"], answer: 1, rationale: "Family therapy addresses high expressed emotion and dysfunctional communication, reducing relapse." },
      { type: "mcq", q: "Exposure and response prevention (ERP) is the behavioural treatment of choice for:", options: ["Schizophrenia", "OCD", "Dementia", "Bipolar mania"], answer: 1, rationale: "ERP prevents the compulsive response during exposure and is the key behavioural therapy for OCD." },
      { type: "mcq", q: "Within the nursing scope of psychotherapeutic care, the nurse commonly provides:", options: ["Formal psychoanalysis", "Prescribing of antipsychotics", "Supportive psychotherapy, psychoeducation and relaxation", "Neurosurgery"], answer: 2, rationale: "Nurses deliver supportive, educational and behavioural interventions within their scope of practice." },
      { type: "fill", q: "The CBT triangle links thoughts, behaviours and ____.", accept: ["feelings", "emotions"], rationale: "CBT holds that thoughts, feelings and behaviours interact and influence one another." },
      { type: "fill", q: "Rapid, full (non-graded) exposure to a feared stimulus is a behaviour technique called ____.", accept: ["flooding"], rationale: "Flooding exposes the patient fully and rapidly to the feared stimulus." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "psy-15-community-rehab-process",
    unit: "Unit 8 · Community, Rehabilitation & the Nursing Process",
    title: "Community Mental Health, Rehabilitation & the Psychiatric Nursing Process",
    readMinutes: 26,
    summary: "Principles and services of community mental health, deinstitutionalisation, psychiatric rehabilitation and recovery, mental health promotion across the lifespan, the referral system in Bangladesh, and the application of the nursing process in psychiatry.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Community mental health — concept", p: "Community mental health care delivers mental health services within the community — at home, in primary care and in community centres — rather than in distant institutions, emphasising accessibility, continuity, comprehensiveness and the least restrictive environment. It is the modern, rights-based, cost-effective model endorsed by the WHO." },
      { h: "Deinstitutionalisation", p: "The shift from long-stay mental hospitals to community-based care, made possible by effective medication and driven by concern for patients' rights and the harms of institutionalisation. It requires robust community services; where these are lacking, it can cause 'revolving-door' readmissions, homelessness and neglect." },
      { h: "Principles of community mental health nursing", list: [
        "Accessibility and equity of services close to home.",
        "Continuity of care and case management across settings.",
        "Comprehensive care — promotion, prevention, treatment and rehabilitation.",
        "Multidisciplinary teamwork and intersectoral collaboration.",
        "Family and community participation; integration with primary health care.",
        "Least restrictive care and protection of rights; reduction of stigma."
      ] },
      { h: "Community mental health services", list: [
        "Integration of mental health into primary health care (WHO priority).",
        "Outpatient clinics, day-care centres and community mental health teams.",
        "Home visits and domiciliary care; crisis and outreach services.",
        "Halfway houses, sheltered accommodation and self-help/support groups.",
        "School and workplace mental health programmes; telepsychiatry."
      ] },
      { h: "Psychiatric rehabilitation and recovery", p: "Rehabilitation aims to help a person with mental illness attain the highest possible level of functioning and quality of life and to reintegrate into society. The recovery model emphasises hope, empowerment, self-determination and a meaningful life beyond symptoms — living well WITH or without the illness.", figure: {
        caption: "Levels of prevention and the continuum from promotion through treatment to rehabilitation and recovery in community mental health.",
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prevention and rehabilitation continuum."><defs><marker id="psyArr15" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="60" width="125" height="55" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="77" y="83" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#15803D">Primary</text><text x="77" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">promotion</text><rect x="160" y="60" width="125" height="55" rx="9" fill="#86EFAC" stroke="#15803D" stroke-width="2"/><text x="222" y="83" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Secondary</text><text x="222" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">early treatment</text><rect x="305" y="60" width="125" height="55" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="367" y="83" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Tertiary</text><text x="367" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">rehabilitation</text><rect x="450" y="60" width="100" height="55" rx="9" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="500" y="83" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Recovery</text><text x="500" y="100" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#DCFCE7">reintegration</text><line x1="140" y1="87" x2="156" y2="87" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr15)"/><line x1="285" y1="87" x2="301" y2="87" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr15)"/><line x1="430" y1="87" x2="446" y2="87" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#psyArr15)"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Prevention &#8594; Rehabilitation &#8594; Recovery</text></svg>'
      } },
      { h: "Components of rehabilitation", list: [
        "Social-skills and daily-living-skills training.",
        "Vocational training and supported/sheltered employment.",
        "Psychoeducation and medication self-management.",
        "Family support and reduction of expressed emotion.",
        "Independent-living support, day centres and self-help groups.",
        "Relapse-prevention planning and continued community follow-up."
      ] },
      { h: "Mental health promotion across the lifespan", list: [
        "Infancy/childhood — secure attachment, good parenting, early stimulation and protection from abuse.",
        "Adolescence — life-skills, self-esteem, substance-use prevention, coping with change.",
        "Adulthood — stress management, work–life balance, healthy relationships, maternal mental health.",
        "Old age — social engagement, prevention of isolation and depression, cognitive stimulation.",
        "Across all ages — anti-stigma campaigns, resilience-building and reducing risk factors."
      ] },
      { h: "Referral system and mental health care in Bangladesh", p: "Bangladesh delivers mental health through the National Institute of Mental Health (NIMH, Dhaka), medical college psychiatry departments, and integration into primary health care via upazila and community clinics. The referral pathway runs from community clinic/health worker → upazila health complex → district hospital → specialist psychiatric centre. The National Mental Health Policy and Strategy aim to scale up community-based, integrated services, reflecting a large treatment gap and workforce shortage." },
      { h: "The nursing process in psychiatry — five steps", list: [
        "Assessment — comprehensive data collection (history, MSE, risk, physical, social, strengths).",
        "Nursing diagnosis — identifying human responses (e.g. Risk for suicide, Disturbed thought processes, Ineffective coping, Social isolation, Self-care deficit).",
        "Planning — setting realistic, measurable, patient-centred goals and outcomes and prioritising (safety first).",
        "Implementation — carrying out interventions (therapeutic relationship, safety measures, medication, psychoeducation, skills training, milieu).",
        "Evaluation — measuring progress toward goals and revising the plan."
      ] },
      { h: "Standards and documentation", p: "The psychiatric nursing process is cyclical and continuous. It must be evidence-based, individualised, and clearly documented — including risk assessments, observation levels, consent and response to treatment — to ensure continuity, communication, accountability and legal protection." },
      { h: "Barriers to community mental health care", list: [
        "Stigma and discrimination discouraging help-seeking.",
        "Shortage of trained mental health professionals and funding.",
        "Concentration of services in cities; poor rural access.",
        "Reliance on traditional/faith healers for first contact.",
        "A large treatment gap — most people with mental illness receive no care."
      ] },
      { h: "Clinical relevance", p: "The future of psychiatric care is community-based, recovery-oriented and preventive. The nurse works across the continuum — promoting mental health, detecting illness early, delivering treatment, and leading rehabilitation and follow-up — and uses the nursing process as the systematic framework that structures individualised, safe and measurable care." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Define community mental health and state its guiding principles.",
      "Explain deinstitutionalisation and the requirements for its success.",
      "Describe psychiatric rehabilitation and the recovery model with their components.",
      "Discuss mental health promotion across the lifespan.",
      "Apply the five steps of the nursing process to a patient with schizophrenia."
    ],
    assessment: [
      { type: "mcq", q: "The core aim of community mental health care is to provide services that are:", options: ["Accessible, continuous and in the least restrictive setting", "Centralised in distant institutions", "Available only to inpatients", "Purely custodial"], answer: 0, rationale: "Community care emphasises accessibility, continuity and the least restrictive environment." },
      { type: "mcq", q: "Deinstitutionalisation without adequate community services commonly leads to:", options: ["Full recovery for all", "Elimination of mental illness", "'Revolving-door' readmissions, homelessness and neglect", "No effect"], answer: 2, rationale: "Without community support, deinstitutionalisation causes readmissions, homelessness and neglect." },
      { type: "mcq", q: "The recovery model in mental health emphasises:", options: ["Symptom elimination as the only goal", "Lifelong hospitalisation", "Restraint and control", "Hope, empowerment and a meaningful life"], answer: 3, rationale: "Recovery focuses on hope, empowerment, self-determination and living a meaningful life." },
      { type: "mcq", q: "The FIRST step of the nursing process is:", options: ["Assessment", "Planning", "Evaluation", "Implementation"], answer: 0, rationale: "Assessment (data collection) is the first step of the nursing process." },
      { type: "mcq", q: "'Risk for suicide' is an example of a:", options: ["Medical diagnosis", "Nursing diagnosis", "Rating scale", "Medication"], answer: 1, rationale: "Nursing diagnoses describe the patient's human responses, such as Risk for suicide." },
      { type: "mcq", q: "When prioritising nursing goals for a psychiatric patient, the FIRST priority is generally:", options: ["Safety", "Social skills", "Vocational training", "Recreation"], answer: 0, rationale: "Safety (especially suicide/violence risk) always takes priority in goal-setting." },
      { type: "mcq", q: "The apex psychiatric institution and a key referral centre in Bangladesh is the:", options: ["World Health Organization", "Red Crescent", "National Institute of Mental Health (NIMH), Dhaka", "A private pharmacy"], answer: 2, rationale: "NIMH, Dhaka is the national apex psychiatric institution and referral centre." },
      { type: "mcq", q: "A WHO-recommended strategy to close the treatment gap is to:", options: ["Build more large asylums", "Restrict services to cities", "Integrate mental health into primary health care", "Rely only on private care"], answer: 2, rationale: "Integrating mental health into primary care improves access and reduces the treatment gap." },
      { type: "mcq", q: "Supported employment and social-skills training are components of:", options: ["Acute detoxification", "Psychiatric rehabilitation", "ECT", "Restraint"], answer: 1, rationale: "Vocational and social-skills training are core components of psychiatric rehabilitation." },
      { type: "mcq", q: "The step of the nursing process that measures progress toward goals and revises the plan is:", options: ["Assessment", "Diagnosis", "Implementation", "Evaluation"], answer: 3, rationale: "Evaluation determines whether goals are met and guides revision of the care plan." },
      { type: "fill", q: "The shift from long-stay mental hospitals to community-based care is called ____.", accept: ["deinstitutionalisation", "deinstitutionalization"], rationale: "Deinstitutionalisation moves care from institutions to the community." },
      { type: "fill", q: "The step of the nursing process that identifies the patient's human responses (e.g. Ineffective coping) is the nursing ____.", accept: ["diagnosis"], rationale: "The nursing diagnosis names the patient's responses that nursing will address." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "psy-16-legal-ethical",
    unit: "Unit 8 · Community, Rehabilitation & the Nursing Process",
    title: "Legal & Ethical Aspects of Psychiatric Nursing",
    readMinutes: 24,
    summary: "Ethical principles, patient rights, informed consent and capacity, confidentiality and its limits, admission and discharge law, restraint and seclusion, and the nurse's legal responsibilities and accountability in mental health care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Why law and ethics matter in psychiatry", p: "Psychiatric patients are especially vulnerable — their illness may impair judgment, insight and the capacity to protect their own interests, and care may involve compulsion and restriction of liberty. Robust ethical practice and legal safeguards protect patients from abuse and protect the nurse from liability." },
      { h: "Core ethical principles", list: [
        "Autonomy — respecting the patient's right to self-determination and informed choice.",
        "Beneficence — acting in the patient's best interest / doing good.",
        "Non-maleficence — 'first, do no harm'.",
        "Justice — fair, equitable and non-discriminatory treatment.",
        "Fidelity — keeping promises and being trustworthy.",
        "Veracity — truthfulness."
      ] },
      { h: "Ethical dilemmas in psychiatry", list: [
        "Autonomy vs beneficence — the right to refuse treatment vs the duty to treat a person who lacks insight.",
        "Confidentiality vs duty to warn/protect others.",
        "Least restrictive care vs the need for restraint or involuntary admission.",
        "Patient's wishes vs family's wishes.",
        "Use of seclusion, restraint and involuntary medication."
      ] },
      { h: "Informed consent and capacity", p: "Valid consent must be informed (the patient understands the nature, purpose, risks, benefits and alternatives), voluntary (free of coercion) and given by a person with the mental capacity to decide. Capacity requires the ability to understand, retain, weigh the information and communicate a choice. Capacity is decision-specific and can fluctuate; lacking capacity is not the same as making an 'unwise' choice.", figure: {
        caption: "The three pillars of valid consent: informed, voluntary and given with decision-making capacity.",
        svg: '<svg viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three pillars of valid consent."><rect x="180" y="15" width="140" height="40" rx="8" fill="#0F4C3A"/><text x="250" y="40" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">Valid consent</text><rect x="30" y="110" width="120" height="70" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="90" y="140" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Informed</text><text x="90" y="160" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">understands risks</text><rect x="190" y="110" width="120" height="70" rx="9" fill="#22C55E" stroke="#0F4C3A" stroke-width="2"/><text x="250" y="140" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">Voluntary</text><text x="250" y="160" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">no coercion</text><rect x="350" y="110" width="120" height="70" rx="9" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="410" y="140" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#15803D">Capacity</text><text x="410" y="160" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">able to decide</text><g stroke="#15803D" stroke-width="2"><line x1="220" y1="55" x2="90" y2="108"/><line x1="250" y1="55" x2="250" y2="108"/><line x1="280" y1="55" x2="410" y2="108"/></g></svg>'
      } },
      { h: "Confidentiality and its limits", p: "The nurse must keep patient information private. However, confidentiality is not absolute: it may be breached to prevent serious harm to the patient or others (the 'duty to warn/protect', as in the Tarasoff principle), where required by law (notifiable matters, court order), or with the patient's consent. Breaches should be the minimum necessary." },
      { h: "Patient rights (recap)", list: [
        "Right to treatment in the least restrictive environment.",
        "Right to informed consent and to refuse treatment within legal limits.",
        "Right to confidentiality and privacy.",
        "Right to dignity and freedom from unnecessary restraint/seclusion.",
        "Right to communication, visitors and legal counsel.",
        "Right to be informed of rights and to appeal detention."
      ] },
      { h: "Restraint and seclusion — legal-ethical use", list: [
        "May be used ONLY to prevent imminent harm, as a last resort, using the least restrictive effective option.",
        "Requires authorisation, trained staff, continuous monitoring, time limits and regular review.",
        "Never for staff convenience, punishment or coercion.",
        "Must be documented, and the patient debriefed and their dignity preserved."
      ] },
      { h: "Legal responsibilities and liability of the nurse", list: [
        "Duty of care and the standard of a reasonably competent psychiatric nurse.",
        "Negligence — failure in duty of care causing harm (e.g. inadequate suicide observation, medication error).",
        "Documentation — accurate, timely, factual records are the best legal protection.",
        "Consent, restraint and reporting must comply with law and policy.",
        "Mandatory reporting of abuse; safeguarding vulnerable patients.",
        "Maintaining professional boundaries and competence."
      ] },
      { h: "Nurse advocacy and accountability", p: "The psychiatric nurse is a key advocate — protecting patients' rights, ensuring their voice is heard, obtaining valid consent, and challenging practices that undermine dignity or safety. The nurse is accountable to the patient, the profession, the employer and the law, and works within the professional code of conduct (e.g. Bangladesh Nursing and Midwifery Council)." },
      { h: "Documentation and record-keeping", list: [
        "Records must be accurate, factual, objective, contemporaneous, legible and signed.",
        "Document risk assessments, observation levels, consent, restraint and response to treatment.",
        "Records are legal documents and the nurse's primary evidence of the care given.",
        "Maintain confidentiality and secure storage of records."
      ] },
      { h: "Common legal terms for the nurse", list: [
        "Negligence — breach of duty of care causing harm.",
        "Malpractice — professional negligence by a qualified practitioner.",
        "Assault and battery — threatening (assault) or making unlawful physical contact (battery), e.g. treating without consent.",
        "False imprisonment — unlawful restriction of a person's freedom of movement.",
        "Duty to warn/protect — obligation to safeguard identifiable third parties from serious harm."
      ] },
      { h: "Clinical relevance", p: "Every psychiatric nursing action — from admission and consent to observation, restraint and information sharing — has legal and ethical dimensions. Sound knowledge of rights, capacity, confidentiality limits and safe restraint, backed by careful documentation and advocacy, protects the vulnerable patient and the nurse alike." }
    ],
    references: REF_PSY,
    examQuestions: [
      "Explain the core ethical principles and give an example of an ethical dilemma in psychiatric nursing.",
      "Define informed consent and mental capacity and explain how capacity is assessed.",
      "Discuss confidentiality in psychiatric nursing and the circumstances in which it may be breached.",
      "Describe the legal-ethical requirements for the use of restraint and seclusion.",
      "Discuss the legal responsibilities, accountability and advocacy role of the psychiatric nurse."
    ],
    assessment: [
      { type: "mcq", q: "The ethical principle of respecting a patient's right to make their own informed decisions is:", options: ["Beneficence", "Autonomy", "Justice", "Fidelity"], answer: 1, rationale: "Autonomy is respect for the patient's right to self-determination and informed choice." },
      { type: "mcq", q: "'First, do no harm' is the ethical principle of:", options: ["Beneficence", "Justice", "Non-maleficence", "Veracity"], answer: 2, rationale: "Non-maleficence is the duty to avoid causing harm." },
      { type: "mcq", q: "For consent to be valid it must be informed, voluntary and given by a patient with:", options: ["A family member present", "Decision-making capacity", "A high income", "No mental illness at all"], answer: 1, rationale: "Valid consent requires capacity, in addition to being informed and voluntary." },
      { type: "mcq", q: "A patient who makes an 'unwise' but understood decision:", options: ["Automatically lacks capacity", "May still have capacity", "Must be sedated", "Cannot refuse treatment"], answer: 1, rationale: "An unwise choice does not by itself indicate a lack of capacity." },
      { type: "mcq", q: "Confidentiality may be justifiably breached when:", options: ["A colleague is merely curious", "The family asks casually", "There is a serious risk of harm to the patient or others", "It is more convenient"], answer: 2, rationale: "The duty to warn/protect permits breach only to prevent serious harm." },
      { type: "mcq", q: "The principle that a therapist may have a duty to warn a potential victim comes from the:", options: ["Tarasoff case", "Nightingale pledge", "Peplau model", "Beck triad"], answer: 0, rationale: "The Tarasoff principle established a duty to protect/warn identifiable third parties at risk." },
      { type: "mcq", q: "Physical restraint is ethically and legally acceptable ONLY when:", options: ["Staff are busy", "It is used to punish the patient", "There is imminent risk of harm and it is the least restrictive option", "The patient is merely uncooperative"], answer: 2, rationale: "Restraint is a last resort permitted only to prevent imminent harm, using the least restrictive means." },
      { type: "mcq", q: "Failure to provide adequate suicide observation leading to patient harm may constitute:", options: ["Battery", "Negligence", "Fidelity", "Advocacy"], answer: 1, rationale: "Negligence is a breach of the duty of care that causes harm to the patient." },
      { type: "mcq", q: "The nurse's BEST legal protection is:", options: ["Avoiding difficult patients", "Accurate, timely and factual documentation", "Never seeking consent", "Ignoring policy"], answer: 1, rationale: "Thorough, factual documentation is the nurse's strongest legal safeguard." },
      { type: "mcq", q: "Acting to protect a patient's rights and ensure their voice is heard is the nurse's role as:", options: ["Advocate", "Prescriber", "Anaesthetist", "Judge"], answer: 0, rationale: "Advocacy is protecting and promoting the patient's rights and interests." },
      { type: "fill", q: "The ethical principle of always telling the patient the truth is called ____.", accept: ["veracity", "truthfulness"], rationale: "Veracity is the duty to be truthful with patients." },
      { type: "fill", q: "The decision-specific ability to understand, retain, weigh information and communicate a choice is called mental ____.", accept: ["capacity"], rationale: "Mental capacity is the ability to make a specific decision at a given time." }
    ]
  }
];
