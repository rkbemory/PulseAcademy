/* ============================================================
   B.Sc. in Nursing (4-year, 2018) · B112 Behavioral Science
   — 16 topics, DEGREE-LEVEL. Psychology & sociology applied to
   nursing: sensation/perception, learning, memory, motivation,
   emotion & stress, personality, intelligence, attitudes, the
   self, communication & groups, family, culture, stratification,
   the sick role, and the lifespan. Grounded in standard texts:
     • Niven N. The Psychology of Nursing Care. Palgrave Macmillan.
     • Gross R. Psychology: The Science of Mind and Behaviour. Hodder Education.
     • Barkway P. Psychology for Health Professionals. Elsevier.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_BVS = [
  "Niven N. The Psychology of Nursing Care. Palgrave Macmillan.",
  "Gross R. Psychology: The Science of Mind and Behaviour. Hodder Education.",
  "Barkway P. Psychology for Health Professionals. Elsevier."
];

window.Academic.topics["bsc-nursing/behavioral-science"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: "bvs-01-introduction",
    unit: "Unit 1 · Foundations of Behavioural Science",
    title: "Introduction to Behavioural Science & Its Relevance to Nursing",
    readMinutes: 17,
    summary: "The scope and boundaries of behavioural science, the disciplines it draws on, the schools and evolution of psychology, its levels of explanation, research methods, and why a degree-level nurse studies human behaviour.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Defining behavioural science", p: "Behavioural science is the systematic, empirical study of human behaviour and mental processes and of the social forces that shape them. It is an umbrella field that integrates psychology (the individual mind and behaviour), sociology (society, groups and institutions) and social anthropology (culture and human diversity). For nursing it supplies the conceptual tools to care for the whole person — a biopsychosocial being — rather than an isolated disease." },
      { h: "Boundaries and its relationship to other sciences", p: "Behavioural science sits between the natural sciences and the humanities. It borrows methods and findings from biology and physiology (the neural and hormonal substrate of behaviour), overlaps with medicine and public health (behaviour as a determinant of disease), and connects to economics and political science (how markets and power shape health). Its distinctive contribution is to explain behaviour scientifically — using observation, measurement and theory — rather than by intuition alone." },
      { h: "The biopsychosocial model", p: "Engel's biopsychosocial model reframed health and illness as the product of interacting biological, psychological and social factors. It replaced the narrow biomedical model, which treats disease as purely a bodily malfunction. Behavioural science provides the psychological and social components of this model, explaining why two patients with the same pathology can differ greatly in their experience, coping and outcomes.", figure: {
        caption: "The biopsychosocial model — health and illness arise from interacting biological, psychological and social factors.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Biopsychosocial model of health"><rect x="30" y="30" width="150" height="55" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="105" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">BIOLOGICAL</text><text x="105" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">genes, brain, disease</text><rect x="205" y="30" width="150" height="55" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">PSYCHOLOGICAL</text><text x="280" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">thoughts, coping</text><rect x="380" y="30" width="150" height="55" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="455" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">SOCIAL</text><text x="455" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">family, culture</text><rect x="205" y="135" width="150" height="40" rx="10" fill="#15803D"/><text x="280" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">HEALTH &amp; ILLNESS</text><line x1="105" y1="85" x2="255" y2="133" stroke="#22C55E" stroke-width="2"/><line x1="280" y1="85" x2="280" y2="133" stroke="#22C55E" stroke-width="2"/><line x1="455" y1="85" x2="305" y2="133" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Evolution of psychology (schools of thought)", list: [
        "Structuralism (Wundt, Titchener) — used introspection to analyse consciousness into its elements; founded the first psychology laboratory (1879).",
        "Functionalism (James) — asked what mental processes are FOR; influenced by evolution and adaptation.",
        "Psychoanalysis (Freud) — emphasised unconscious drives, early experience and defence mechanisms.",
        "Behaviourism (Watson, Skinner) — restricted psychology to observable, measurable behaviour and learning.",
        "Humanistic psychology (Maslow, Rogers) — stressed free will, self-actualisation and the person's subjective world.",
        "Cognitive psychology — treats the mind as an information processor; dominant from the 1960s.",
        "Biological/neuropsychology — links behaviour to brain, neurotransmitters and genes; enabled by modern imaging."
      ] },
      { h: "Levels of explanation (approaches)", p: "Contemporary psychology explains the same behaviour at several complementary levels: the biological (neural and hormonal), the behavioural (learning and reinforcement), the cognitive (information processing and appraisal), the psychodynamic (unconscious influences), the humanistic (personal meaning), and the social/cultural. A degree-level nurse should recognise that these are not rival truths but different angles on one complex human being." },
      { h: "Research methods in behavioural science", list: [
        "Experiment — manipulates an independent variable to establish cause and effect; strong control but sometimes artificial.",
        "Correlational study — measures the relationship between variables without manipulation; cannot prove causation.",
        "Observation — records naturally occurring behaviour; high ecological validity.",
        "Survey / questionnaire — gathers self-report data from large samples.",
        "Case study — in-depth study of one person or group; rich but hard to generalise.",
        "Qualitative methods — interviews and thematic analysis to explore meaning and experience."
      ] },
      { h: "Significance for nursing practice", p: "Behavioural science underpins therapeutic communication, patient assessment, health promotion, adherence, pain and stress management, and the nurse's own self-awareness and resilience. Evidence links psychological factors (anxiety, expectation, social support) to measurable clinical outcomes such as post-operative recovery, wound healing and immune function — making behavioural science a clinical, not merely a theoretical, subject." },
      { h: "Key terms", list: [
        "Empiricism — knowledge derived from observation and evidence.",
        "Biopsychosocial — the integrated biological, psychological and social view of health.",
        "Reductionism — explaining behaviour by its simplest components; holism does the opposite.",
        "Ecological validity — the extent to which findings apply to real-life settings."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define behavioural science and describe its boundaries and relationship with other sciences.",
      "Explain the biopsychosocial model and contrast it with the biomedical model.",
      "Trace the evolution of psychology from structuralism to neuropsychology.",
      "Describe four research methods used in behavioural science, with their strengths and limitations.",
      "Justify the study of behavioural science in a degree-level nursing curriculum with clinical examples."
    ],
    assessment: [
      { type: "mcq", q: "Behavioural science is best defined as the empirical study of:", options: ["Chemical reactions in cells", "Human behaviour and the mental and social forces shaping it", "Rocks and minerals", "Plant physiology"], answer: 1, rationale: "Behavioural science empirically studies human behaviour and its psychological and social determinants." },
      { type: "mcq", q: "The model that explains health as interacting biological, psychological and social factors is the:", options: ["Biomedical model", "Biopsychosocial model", "Germ theory", "Humoral model"], answer: 1, rationale: "Engel's biopsychosocial model integrates all three domains, unlike the narrow biomedical model." },
      { type: "mcq", q: "The first psychology laboratory (1879) and structuralism are associated with:", options: ["Freud", "Skinner", "Wundt", "Rogers"], answer: 2, rationale: "Wundt founded the first psychology laboratory and, with Titchener, structuralism." },
      { type: "mcq", q: "Which school restricted psychology to observable, measurable behaviour?", options: ["Behaviourism", "Psychoanalysis", "Humanism", "Structuralism"], answer: 0, rationale: "Behaviourism (Watson, Skinner) confined study to observable behaviour and learning." },
      { type: "mcq", q: "Explaining behaviour purely by neurotransmitters and brain structures reflects the ____ approach.", options: ["Social", "Humanistic", "Biological", "Psychodynamic"], answer: 2, rationale: "The biological approach explains behaviour through neural, hormonal and genetic mechanisms." },
      { type: "mcq", q: "A study that measures the relationship between two variables without manipulating them is a:", options: ["Experiment", "Correlational study", "Randomised trial", "Case-control experiment"], answer: 1, rationale: "Correlational studies assess relationships but cannot establish causation." },
      { type: "mcq", q: "The extent to which research findings apply to real-life settings is called:", options: ["Reliability", "Reductionism", "Empiricism", "Ecological validity"], answer: 3, rationale: "Ecological validity is generalisability to real-world contexts." },
      { type: "mcq", q: "Humanistic psychology, emphasising self-actualisation and free will, is linked to:", options: ["Watson", "Maslow and Rogers", "Wundt", "Pavlov"], answer: 1, rationale: "Maslow and Rogers are the leading humanistic psychologists." },
      { type: "mcq", q: "Only an experiment can establish ____ between variables.", options: ["A correlation", "Cause and effect", "Reliability", "A theme"], answer: 1, rationale: "By manipulating an independent variable under control, experiments can infer causation." },
      { type: "mcq", q: "Explaining behaviour by breaking it into its simplest components is called:", options: ["Holism", "Empiricism", "Reductionism", "Determinism"], answer: 2, rationale: "Reductionism explains phenomena by their simplest parts; holism takes the whole into account." },
      { type: "fill", q: "The model integrating biological, psychological and social factors in health is the ____ model.", accept: ["biopsychosocial", "bio-psycho-social"], rationale: "The biopsychosocial model unifies the three domains of health and illness." },
      { type: "fill", q: "Deriving knowledge from observation and evidence rather than intuition is called ____.", accept: ["empiricism"], rationale: "Empiricism grounds behavioural science in observable evidence." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "bvs-02-sensation-perception",
    unit: "Unit 1 · Foundations of Behavioural Science",
    title: "Sensation & Perception",
    readMinutes: 17,
    summary: "How the senses detect stimuli and how the brain organises and interprets them: thresholds and psychophysics, the Gestalt principles, perceptual constancy and set, illusions, and the clinical relevance of perception in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Sensation versus perception", p: "Sensation is the detection of physical stimuli by sensory receptors and their transduction into neural signals. Perception is the higher-order process by which the brain selects, organises and interprets those signals into a meaningful representation of the world. Sensation is largely a bottom-up, physiological event; perception adds top-down interpretation driven by expectation, experience and context." },
      { h: "Psychophysics: thresholds", list: [
        "Absolute threshold — the smallest amount of a stimulus detectable 50% of the time.",
        "Difference threshold (just noticeable difference, JND) — the smallest change in a stimulus that can be detected.",
        "Weber's law — the JND is a constant proportion of the original stimulus, not a fixed amount.",
        "Sensory adaptation — reduced sensitivity to a constant, unchanging stimulus over time.",
        "Signal detection theory — detection depends not only on stimulus intensity but on the observer's expectations, motivation and decision criterion."
      ] },
      { h: "Attention and selection", p: "The senses deliver far more information than can be processed, so attention selects a subset for full processing. Selective attention (illustrated by the 'cocktail party' effect) allows focus on one input while filtering others, though salient stimuli — a patient's name, a monitor alarm — can break through. Divided attention degrades performance, a key patient-safety issue when nurses multitask." },
      { h: "Gestalt principles of perceptual organisation", list: [
        "Figure-ground — we separate an object (figure) from its background.",
        "Proximity — elements close together are grouped.",
        "Similarity — similar elements are grouped.",
        "Continuity — we perceive smooth, continuous forms.",
        "Closure — we mentally complete incomplete figures.",
        "Common fate — elements moving together are grouped."
      ], figure: {
        caption: "Gestalt principles: the brain organises sensory elements into wholes ('the whole is more than the sum of its parts').",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gestalt grouping principles"><text x="60" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Proximity</text><circle cx="35" cy="60" r="6" fill="#15803D"/><circle cx="50" cy="60" r="6" fill="#15803D"/><circle cx="75" cy="60" r="6" fill="#15803D"/><circle cx="90" cy="60" r="6" fill="#15803D"/><text x="200" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Similarity</text><circle cx="165" cy="60" r="6" fill="#15803D"/><rect x="182" y="54" width="12" height="12" fill="#22C55E"/><circle cx="215" cy="60" r="6" fill="#15803D"/><rect x="232" y="54" width="12" height="12" fill="#22C55E"/><text x="340" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Closure</text><path d="M310 45 A25 25 0 1 1 335 85" fill="none" stroke="#15803D" stroke-width="3"/><text x="460" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Figure-ground</text><rect x="420" y="40" width="80" height="55" fill="#DCFCE7"/><circle cx="460" cy="67" r="20" fill="#0F4C3A"/></svg>'
      } },
      { h: "Perceptual constancy and depth", p: "Perceptual constancy keeps objects stable despite changing sensory input: size, shape, colour and brightness constancy mean a door is seen as rectangular and a shirt as white across angles and lighting. Depth perception uses binocular cues (retinal disparity, convergence) and monocular cues (relative size, interposition, texture gradient, linear perspective) to reconstruct a three-dimensional world from a two-dimensional retinal image." },
      { h: "Perceptual set and top-down influence", p: "Perceptual set is a readiness to perceive stimuli in a particular way, shaped by expectation, context, motivation, emotion and culture. It explains why a frightened patient may misinterpret a benign sensation as threatening, and why clinicians can 'see' the diagnosis they expect. Illusions (e.g. the Muller-Lyer) demonstrate that perception is an active construction, not a passive recording." },
      { h: "Clinical relevance in nursing", list: [
        "Pain is a perception modulated by attention, emotion and meaning — not a fixed readout of tissue damage (gate-control theory).",
        "Sensory deprivation or overload (e.g. in intensive care) can precipitate confusion and delirium.",
        "Impaired senses (poor vision or hearing, delirium, dementia) alter how patients perceive the ward and instructions.",
        "Perceptual set and expectation contribute to the placebo and nocebo effects.",
        "Effective communication requires that information be perceived, not merely presented."
      ] },
      { h: "Key terms", list: [
        "Transduction — conversion of physical stimulus energy into neural signals.",
        "Bottom-up vs top-down processing — data-driven versus expectation-driven perception.",
        "Perceptual constancy — stable perception despite changing sensory input.",
        "Nocebo effect — negative expectation producing an adverse outcome."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Distinguish sensation from perception and explain bottom-up and top-down processing.",
      "Define absolute and difference thresholds and state Weber's law.",
      "Describe the Gestalt principles of perceptual organisation with examples.",
      "Explain perceptual constancy and the cues used in depth perception.",
      "Discuss the clinical relevance of perception, including pain and sensory overload, in nursing."
    ],
    assessment: [
      { type: "mcq", q: "The detection of a physical stimulus by sensory receptors is:", options: ["Perception", "Sensation", "Cognition", "Attention"], answer: 1, rationale: "Sensation is the physiological detection and transduction of stimuli; perception interprets them." },
      { type: "mcq", q: "The smallest stimulus detectable 50% of the time is the:", options: ["Difference threshold", "Absolute threshold", "Terminal threshold", "JND"], answer: 1, rationale: "The absolute threshold is the minimum intensity detectable half the time." },
      { type: "mcq", q: "Weber's law states that the just noticeable difference is:", options: ["A fixed amount", "A constant proportion of the stimulus", "Zero at high intensity", "Independent of the stimulus"], answer: 1, rationale: "The JND is a constant ratio of the original stimulus magnitude." },
      { type: "mcq", q: "Mentally completing an incomplete figure illustrates the Gestalt principle of:", options: ["Proximity", "Similarity", "Closure", "Common fate"], answer: 2, rationale: "Closure is the tendency to complete incomplete forms into wholes." },
      { type: "mcq", q: "Seeing a door as rectangular from any angle is an example of:", options: ["Perceptual set", "Shape constancy", "Sensory adaptation", "Convergence"], answer: 1, rationale: "Shape constancy maintains perceived shape despite changing retinal image." },
      { type: "mcq", q: "Retinal disparity and convergence are cues to:", options: ["Colour", "Depth (binocular)", "Loudness", "Taste"], answer: 1, rationale: "These are binocular depth cues arising from the two eyes' differing views." },
      { type: "mcq", q: "A readiness to perceive stimuli in a particular way based on expectation is:", options: ["Perceptual set", "Transduction", "Adaptation", "Threshold"], answer: 0, rationale: "Perceptual set is a top-down bias shaped by expectation and context." },
      { type: "mcq", q: "Reduced sensitivity to a constant, unchanging stimulus over time is:", options: ["Sensory adaptation", "Closure", "Constancy", "Convergence"], answer: 0, rationale: "Sensory adaptation lowers responsiveness to unchanging stimuli." },
      { type: "mcq", q: "The gate-control theory best explains the perception of:", options: ["Colour", "Pain", "Sound pitch", "Depth"], answer: 1, rationale: "Gate-control theory describes how pain perception is modulated in the spinal cord and by the brain." },
      { type: "mcq", q: "A negative expectation producing an adverse clinical outcome is the:", options: ["Placebo effect", "Nocebo effect", "Halo effect", "Primacy effect"], answer: 1, rationale: "The nocebo effect is a harmful outcome driven by negative expectation." },
      { type: "fill", q: "The conversion of physical stimulus energy into neural signals is called ____.", accept: ["transduction"], rationale: "Transduction converts stimulus energy into neural impulses." },
      { type: "fill", q: "Expectation-driven perception is called ____-down processing.", accept: ["top"], rationale: "Top-down processing uses prior knowledge and expectation to interpret input." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "bvs-03-learning",
    unit: "Unit 1 · Foundations of Behavioural Science",
    title: "Learning: Theories & Principles",
    readMinutes: 18,
    summary: "How experience produces lasting change in behaviour: classical and operant conditioning, schedules of reinforcement, observational (social) learning, cognitive and insight learning, and their application to patient education, habit change and nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is learning?", p: "Learning is a relatively permanent change in behaviour or in behavioural potential that results from experience, not from maturation, fatigue or injury. It is central to nursing because health promotion, patient teaching, rehabilitation and behaviour change all depend on the principles by which people acquire, maintain and lose behaviours." },
      { h: "Classical (Pavlovian) conditioning", p: "Pavlov showed that a neutral stimulus, repeatedly paired with an unconditioned stimulus (UCS) that reflexively produces a response (UCR), becomes a conditioned stimulus (CS) that alone elicits a conditioned response (CR). Key processes include acquisition, extinction (the CR fades when the CS is presented without the UCS), spontaneous recovery, generalisation and discrimination. It explains conditioned emotional responses — for example, anticipatory nausea before chemotherapy or a child's fear of white coats.", figure: {
        caption: "Classical conditioning: a neutral stimulus paired with a UCS becomes a CS that elicits a conditioned response.",
        svg: '<svg viewBox="0 0 540 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classical conditioning sequence"><defs><marker id="ccArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><text x="270" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Before → During → After conditioning</text><rect x="20" y="45" width="150" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="95" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">UCS (food)</text><text x="95" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">→ UCR (salivate)</text><rect x="195" y="45" width="160" height="40" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="275" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Bell + food, repeated</text><text x="275" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">(pairing)</text><rect x="380" y="45" width="150" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="455" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">CS (bell)</text><text x="455" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">→ CR (salivate)</text><line x1="170" y1="65" x2="192" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ccArr)"/><line x1="355" y1="65" x2="377" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ccArr)"/></svg>'
      } },
      { h: "Operant (instrumental) conditioning", p: "Skinner showed that behaviour is shaped by its consequences (Thorndike's law of effect). Reinforcement increases behaviour; punishment decreases it. Positive means a stimulus is added, negative means a stimulus is removed. Thus positive reinforcement (praise), negative reinforcement (removing an unpleasant stimulus), positive punishment (adding an aversive) and negative punishment (removing a reward) each have distinct effects. Shaping reinforces successive approximations toward a target behaviour." },
      { h: "Schedules of reinforcement", list: [
        "Continuous reinforcement — every response reinforced; fast learning but rapid extinction.",
        "Fixed-ratio — reinforcement after a set number of responses.",
        "Variable-ratio — reinforcement after an unpredictable number of responses; highest, most extinction-resistant response rate (e.g. gambling).",
        "Fixed-interval — reinforcement for the first response after a set time.",
        "Variable-interval — reinforcement after unpredictable time intervals; steady responding.",
        "Intermittent (partial) reinforcement generally produces behaviour that is more resistant to extinction than continuous reinforcement."
      ] },
      { h: "Observational (social) learning", p: "Bandura demonstrated that people learn by observing and imitating models, without direct reinforcement — shown in the Bobo doll studies. Four processes are required: attention, retention, reproduction and motivation (including vicarious reinforcement). Social learning explains how health behaviours, coping styles and even the sick role are acquired from family, peers and, importantly, from nurses and role models on the ward." },
      { h: "Cognitive and insight learning", p: "Not all learning is stimulus-response. Kohler's chimpanzees showed insight — a sudden reorganisation of a problem. Tolman demonstrated latent learning and cognitive maps, showing that learning can occur without immediate reinforcement and be revealed later. These findings support the cognitive view that learners actively construct knowledge, underpinning modern adult-learning and patient-education methods." },
      { h: "Application to nursing and patient education", list: [
        "Reinforce and praise desired health behaviours to increase adherence.",
        "Use shaping and small achievable goals in rehabilitation.",
        "Anticipate and counter conditioned responses (e.g. anticipatory nausea, needle fear) using relaxation and gradual exposure.",
        "Act as a positive role model, exploiting observational learning.",
        "Recognise that punishment suppresses behaviour but teaches nothing new and can damage the therapeutic relationship.",
        "Apply behaviour-modification programmes for weight, smoking and chronic-disease self-management."
      ] },
      { h: "Key terms", list: [
        "Extinction — decline of a learned response when reinforcement/pairing stops.",
        "Reinforcement vs punishment — consequences that increase versus decrease behaviour.",
        "Shaping — reinforcing successive approximations to a target behaviour.",
        "Vicarious reinforcement — learning from the observed consequences of another's behaviour."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define learning and explain classical conditioning with a nursing example.",
      "Distinguish positive/negative reinforcement from positive/negative punishment.",
      "Compare the schedules of reinforcement and their effects on behaviour.",
      "Describe Bandura's social learning theory and its four processes.",
      "Apply learning principles to patient education and behaviour change in nursing."
    ],
    assessment: [
      { type: "mcq", q: "Learning is best defined as a relatively permanent change in behaviour due to:", options: ["Maturation", "Experience", "Fatigue", "Injury"], answer: 1, rationale: "Learning results from experience, not from maturation, fatigue or injury." },
      { type: "mcq", q: "In classical conditioning, the previously neutral stimulus that comes to elicit a response is the:", options: ["Unconditioned stimulus", "Conditioned stimulus", "Unconditioned response", "Reinforcer"], answer: 1, rationale: "After pairing, the neutral stimulus becomes the conditioned stimulus (CS)." },
      { type: "mcq", q: "Removing an unpleasant stimulus to increase a behaviour is:", options: ["Positive reinforcement", "Positive punishment", "Negative reinforcement", "Negative punishment"], answer: 2, rationale: "Negative reinforcement strengthens behaviour by removing an aversive stimulus." },
      { type: "mcq", q: "The schedule producing the highest, most extinction-resistant response rate is:", options: ["Continuous", "Fixed-interval", "Variable-ratio", "Fixed-ratio"], answer: 2, rationale: "Variable-ratio schedules generate high, persistent responding (as in gambling)." },
      { type: "mcq", q: "Reinforcing successive approximations toward a target behaviour is called:", options: ["Extinction", "Generalisation", "Shaping", "Discrimination"], answer: 2, rationale: "Shaping reinforces closer and closer steps to the desired behaviour." },
      { type: "mcq", q: "Bandura's Bobo doll studies demonstrated:", options: ["Classical conditioning", "Observational (social) learning", "Insight learning", "Latent learning"], answer: 1, rationale: "The Bobo doll studies showed learning by observation and imitation of a model." },
      { type: "mcq", q: "The four processes of observational learning are attention, retention, reproduction and:", options: ["Extinction", "Motivation", "Punishment", "Adaptation"], answer: 1, rationale: "Bandura identified attention, retention, reproduction and motivation." },
      { type: "mcq", q: "Anticipatory nausea before chemotherapy is an example of a:", options: ["Conditioned response", "Cognitive map", "Fixed-ratio schedule", "Latent response"], answer: 0, rationale: "Environmental cues paired with chemotherapy become a CS eliciting nausea (a CR)." },
      { type: "mcq", q: "Sudden reorganisation of a problem into a solution describes:", options: ["Shaping", "Insight learning", "Generalisation", "Continuous reinforcement"], answer: 1, rationale: "Kohler described insight as sudden perceptual reorganisation of a problem." },
      { type: "mcq", q: "Compared with continuous reinforcement, intermittent reinforcement produces behaviour that is:", options: ["Learned faster", "Never extinguished", "Weaker overall", "More resistant to extinction"], answer: 3, rationale: "Partial reinforcement makes behaviour more resistant to extinction." },
      { type: "fill", q: "The decline of a learned response when reinforcement stops is called ____.", accept: ["extinction"], rationale: "Extinction is the weakening of a response when reinforcement/pairing ends." },
      { type: "fill", q: "Learning by observing and imitating a model is called ____ learning.", accept: ["observational", "social"], rationale: "Bandura termed this observational or social learning." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "bvs-04-memory-cognition",
    unit: "Unit 1 · Foundations of Behavioural Science",
    title: "Memory & Cognition",
    readMinutes: 18,
    summary: "The multi-store and working-memory models, encoding-storage-retrieval, types of long-term memory, theories of forgetting, cognition, thinking and problem-solving, and their relevance to patient information-giving and adherence.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Memory as a system", p: "Memory is the set of processes by which we encode, store and retrieve information. Cognition is the broader term for all mental activity — attention, memory, language, reasoning, decision-making and problem-solving. Together they determine how patients take in, retain and act on the health information nurses provide." },
      { h: "The multi-store model (Atkinson-Shiffrin)", list: [
        "Sensory memory — very brief, large-capacity store for raw sensory input (iconic for vision, echoic for hearing).",
        "Short-term memory (STM) — limited capacity (about 7 ± 2 items, Miller) and brief duration (~15-30 s) unless rehearsed.",
        "Long-term memory (LTM) — effectively unlimited capacity and duration.",
        "Attention transfers information from sensory to short-term memory; rehearsal and elaboration transfer it to long-term memory."
      ], figure: {
        caption: "The multi-store model: attention and rehearsal move information from sensory to short-term to long-term memory.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Multi-store model of memory"><defs><marker id="msArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="45" width="140" height="45" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="90" y="66" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">SENSORY</text><text x="90" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">large, &lt;1 s</text><rect x="205" y="45" width="150" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="66" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">SHORT-TERM</text><text x="280" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">7±2, ~20 s</text><rect x="400" y="45" width="140" height="45" rx="8" fill="#15803D"/><text x="470" y="66" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">LONG-TERM</text><text x="470" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">unlimited</text><line x1="160" y1="67" x2="202" y2="67" stroke="#0F4C3A" stroke-width="2" marker-end="url(#msArr)"/><text x="181" y="40" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">attention</text><line x1="355" y1="67" x2="397" y2="67" stroke="#0F4C3A" stroke-width="2" marker-end="url(#msArr)"/><text x="376" y="40" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">rehearsal</text></svg>'
      } },
      { h: "Working memory (Baddeley & Hitch)", p: "The working-memory model replaces passive STM with an active system: a central executive that allocates attention, supported by the phonological loop (verbal/acoustic information), the visuospatial sketchpad (visual and spatial information) and the episodic buffer (integrating information across systems and with LTM). Working memory is where information is manipulated, and its capacity limits how much a patient can absorb at once." },
      { h: "Types of long-term memory", list: [
        "Explicit (declarative) — consciously recalled: episodic (personal events) and semantic (facts and meanings).",
        "Implicit (non-declarative) — expressed through performance: procedural memory (skills), and conditioning.",
        "Prospective memory — remembering to perform an intended action in the future (e.g. taking medication)."
      ] },
      { h: "Encoding, storage and retrieval", p: "Encoding transforms input into a storable code (acoustic, visual, semantic); deeper, semantic (meaning-based) processing produces stronger memory (levels-of-processing, Craik & Lockhart). Retrieval is aided by cues; the encoding-specificity principle holds that recall is best when retrieval cues match the encoding context. Recall is harder than recognition — relevant when nurses check patient understanding." },
      { h: "Theories of forgetting", list: [
        "Trace decay — memory fades with time if not used.",
        "Displacement — new items push out old ones from limited STM.",
        "Interference — proactive (old disrupts new) and retroactive (new disrupts old).",
        "Retrieval failure — information is stored but temporarily inaccessible (cue-dependent forgetting).",
        "Motivated forgetting / repression — anxiety-laden memories are pushed from awareness."
      ] },
      { h: "Cognition, thinking and problem-solving", p: "Thinking manipulates mental representations to reason and solve problems. Strategies include algorithms (systematic, guaranteed) and heuristics (mental shortcuts that are efficient but error-prone). Heuristics and biases (availability, representativeness, anchoring, confirmation bias) affect both patient and clinician decision-making, contributing to diagnostic error — a key patient-safety concept." },
      { h: "Application to nursing", list: [
        "Give information in small chunks, as working memory is limited; use chunking and repetition.",
        "Prioritise and present the most important instructions first (primacy) and last (recency).",
        "Use meaningful, concrete language and link new information to what the patient already knows (semantic encoding).",
        "Reinforce verbal information with written and visual aids and teach-back to check retention.",
        "Anticipate that anxiety, pain, illness and medication impair memory and comprehension.",
        "Support prospective memory (medication) with reminders, dosette boxes and routines."
      ] },
      { h: "Key terms", list: [
        "Chunking — grouping items into larger meaningful units to expand STM capacity.",
        "Levels of processing — deeper (semantic) processing yields better memory.",
        "Encoding specificity — retrieval improves when cues match encoding conditions.",
        "Heuristic — an efficient but fallible mental shortcut."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Describe the multi-store model of memory and the role of attention and rehearsal.",
      "Explain the working-memory model and its components.",
      "Distinguish explicit and implicit long-term memory with examples.",
      "Describe the main theories of forgetting.",
      "Apply the principles of memory and cognition to giving information to patients."
    ],
    assessment: [
      { type: "mcq", q: "The approximate capacity of short-term memory (Miller) is:", options: ["2 ± 1 items", "7 ± 2 items", "20 ± 5 items", "Unlimited"], answer: 1, rationale: "Miller's 'magic number' is about 7 plus or minus 2 items." },
      { type: "mcq", q: "In the working-memory model, verbal/acoustic information is held by the:", options: ["Visuospatial sketchpad", "Central executive", "Phonological loop", "Episodic buffer"], answer: 2, rationale: "The phonological loop handles verbal and acoustic information." },
      { type: "mcq", q: "Memory for facts and general knowledge is:", options: ["Episodic memory", "Procedural memory", "Sensory memory", "Semantic memory"], answer: 3, rationale: "Semantic memory stores facts and meanings; episodic stores personal events." },
      { type: "mcq", q: "Memory for how to perform skills (e.g. giving an injection) is:", options: ["Semantic", "Episodic", "Procedural", "Prospective"], answer: 2, rationale: "Procedural memory is implicit memory for skills and actions." },
      { type: "mcq", q: "Deeper, meaning-based processing improving memory is the ____ theory.", options: ["Trace decay", "Levels-of-processing", "Displacement", "Interference"], answer: 1, rationale: "Craik and Lockhart's levels-of-processing model links semantic depth to stronger memory." },
      { type: "mcq", q: "When newly learned information disrupts recall of older material, this is:", options: ["Proactive interference", "Trace decay", "Retroactive interference", "Encoding specificity"], answer: 2, rationale: "Retroactive interference: new learning disrupts old memories." },
      { type: "mcq", q: "Information that is stored but temporarily inaccessible reflects:", options: ["Displacement", "Retrieval failure", "Decay", "Repression"], answer: 1, rationale: "Cue-dependent retrieval failure means stored information cannot currently be accessed." },
      { type: "mcq", q: "Remembering to take a medication later in the day relies on:", options: ["Episodic memory", "Prospective memory", "Sensory memory", "Semantic memory"], answer: 1, rationale: "Prospective memory is remembering to carry out a future intended action." },
      { type: "mcq", q: "Grouping items into larger meaningful units to aid short-term memory is:", options: ["Chunking", "Displacement", "Decay", "Rehearsal only"], answer: 0, rationale: "Chunking expands effective STM capacity by grouping items." },
      { type: "mcq", q: "An efficient but error-prone mental shortcut used in decisions is a:", options: ["Algorithm", "Heuristic", "Schema", "Constancy"], answer: 1, rationale: "Heuristics are fast but fallible shortcuts, unlike systematic algorithms." },
      { type: "fill", q: "Grouping information into larger meaningful units to expand short-term memory is called ____.", accept: ["chunking"], rationale: "Chunking increases the amount held in short-term memory." },
      { type: "fill", q: "Consciously recalled memory for events and facts is called ____ (declarative) memory.", accept: ["explicit", "declarative"], rationale: "Explicit/declarative memory is consciously accessible." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "bvs-05-motivation",
    unit: "Unit 2 · The Psychology of the Person",
    title: "Motivation (including Maslow's Hierarchy)",
    readMinutes: 17,
    summary: "The concept and types of motivation; drive-reduction, arousal and incentive theories; Maslow's hierarchy of needs; intrinsic versus extrinsic motivation and self-determination; and applications to patient adherence, recovery and nurse wellbeing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is motivation?", p: "Motivation is the internal process that initiates, directs, energises and sustains goal-directed behaviour. It answers why people begin, choose, persist at or abandon an activity. In nursing, motivation is central to whether patients adopt healthy behaviours, adhere to treatment, engage in rehabilitation and take responsibility for self-care." },
      { h: "Types of motivation", list: [
        "Biological (primary) motives — innate needs such as hunger, thirst, sleep, temperature regulation and sex.",
        "Psychological/social (secondary) motives — learned needs such as achievement, affiliation, power and approval.",
        "Intrinsic motivation — behaviour performed for its own inherent satisfaction.",
        "Extrinsic motivation — behaviour performed for external rewards or to avoid punishment."
      ] },
      { h: "Theories of motivation", list: [
        "Instinct theory — behaviour driven by innate biological programmes (largely superseded).",
        "Drive-reduction theory (Hull) — physiological need creates a drive that motivates behaviour to restore homeostasis.",
        "Arousal theory — organisms seek an optimum level of arousal; the Yerkes-Dodson law states performance is best at moderate arousal.",
        "Incentive theory — behaviour is pulled by external goals (incentives), not only pushed by internal drives.",
        "Cognitive theories — expectations, goals and beliefs (e.g. self-efficacy) direct motivation.",
        "Humanistic theory — motivation to grow and fulfil one's potential (Maslow, Rogers)."
      ] },
      { h: "Maslow's hierarchy of needs", p: "Maslow proposed that human needs are arranged in a hierarchy, with lower (deficiency) needs generally requiring some satisfaction before higher (growth) needs become motivating. The five classic levels ascend from physiological, through safety, love/belonging and esteem, to self-actualisation. The model is influential in nursing for prioritising care — a patient's airway, pain and safety are addressed before higher psychosocial needs, though in practice the levels overlap and the strict order has been criticised.", figure: {
        caption: "Maslow's hierarchy of needs — lower deficiency needs generally take priority before higher growth needs.",
        svg: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maslow hierarchy of needs pyramid"><polygon points="230,20 300,70 160,70" fill="#0F4C3A"/><text x="230" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Self-actualisation</text><polygon points="160,72 300,72 340,122 120,122" fill="#15803D"/><text x="230" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Esteem</text><polygon points="120,124 340,124 380,174 80,174" fill="#22C55E"/><text x="230" y="155" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Love &amp; belonging</text><polygon points="80,176 380,176 415,222 45,222" fill="#86EFAC"/><text x="230" y="205" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Safety</text><polygon points="45,224 415,224 445,254 15,254" fill="#DCFCE7"/><text x="230" y="245" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Physiological</text></svg>'
      } },
      { h: "Intrinsic vs extrinsic motivation and self-determination", p: "Self-determination theory (Deci & Ryan) argues that quality motivation depends on satisfying three basic psychological needs: autonomy, competence and relatedness. Intrinsic motivation (doing something because it is inherently rewarding) produces more durable behaviour change than extrinsic motivation (rewards or coercion). Excessive external rewards can even undermine intrinsic motivation (the over-justification effect). This explains why coercive health messaging often fails and why fostering patient autonomy improves adherence." },
      { h: "Conflict of motives", list: [
        "Approach-approach — choosing between two attractive options.",
        "Avoidance-avoidance — choosing between two unattractive options ('lesser of two evils').",
        "Approach-avoidance — one goal has both attractive and unattractive features (e.g. surgery that is feared but curative).",
        "Unresolved motivational conflict is a common source of stress and ambivalence in patients."
      ] },
      { h: "Application to nursing", list: [
        "Prioritise care using a needs framework — meet physiological and safety needs first.",
        "Strengthen intrinsic motivation and self-efficacy rather than relying on threats.",
        "Use motivational interviewing to resolve ambivalence about behaviour change.",
        "Support autonomy, competence and relatedness to improve adherence and engagement.",
        "Recognise and manage motivational conflict (e.g. fear of a beneficial procedure).",
        "Attend to nurses' own motivation to prevent burnout and sustain compassionate care."
      ] },
      { h: "Key terms", list: [
        "Homeostasis — the body's tendency to maintain a stable internal state, central to drive theory.",
        "Yerkes-Dodson law — performance is optimal at a moderate level of arousal.",
        "Self-efficacy — belief in one's ability to succeed at a task; a powerful motivator (Bandura).",
        "Over-justification effect — external reward undermining intrinsic motivation."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define motivation and distinguish intrinsic from extrinsic motivation.",
      "Compare drive-reduction, arousal and incentive theories of motivation.",
      "Describe Maslow's hierarchy of needs and its application to prioritising nursing care.",
      "Explain the types of motivational conflict with examples.",
      "How can a nurse enhance a patient's motivation to change health behaviour?"
    ],
    assessment: [
      { type: "mcq", q: "Motivation is best defined as the process that:", options: ["Detects sensory stimuli", "Initiates, directs and sustains goal-directed behaviour", "Stores information", "Regulates body temperature only"], answer: 1, rationale: "Motivation energises and directs goal-directed behaviour." },
      { type: "mcq", q: "Behaviour performed for its own inherent satisfaction is:", options: ["Extrinsic motivation", "Intrinsic motivation", "Negative reinforcement", "A drive"], answer: 1, rationale: "Intrinsic motivation arises from the inherent satisfaction of the activity." },
      { type: "mcq", q: "Drive-reduction theory links motivation to restoring:", options: ["Homeostasis", "Self-actualisation", "Arousal", "Reward"], answer: 0, rationale: "Hull's drive-reduction theory motivates behaviour to restore homeostatic balance." },
      { type: "mcq", q: "The Yerkes-Dodson law states that performance is best at ____ arousal.", options: ["Very low", "Moderate", "Maximum", "Zero"], answer: 1, rationale: "Performance peaks at a moderate (optimum) level of arousal." },
      { type: "mcq", q: "At the base of Maslow's hierarchy are ____ needs.", options: ["Esteem", "Safety", "Physiological", "Self-actualisation"], answer: 2, rationale: "Physiological needs form the base of Maslow's pyramid." },
      { type: "mcq", q: "The highest level of Maslow's hierarchy is:", options: ["Love and belonging", "Esteem", "Self-actualisation", "Safety"], answer: 2, rationale: "Self-actualisation is the peak growth need in Maslow's model." },
      { type: "mcq", q: "Self-determination theory identifies which three basic needs?", options: ["Hunger, thirst, sleep", "Autonomy, competence, relatedness", "Power, wealth, status", "Attention, retention, motivation"], answer: 1, rationale: "Deci and Ryan specify autonomy, competence and relatedness." },
      { type: "mcq", q: "Deciding whether to have a feared but curative operation is a conflict of the ____ type.", options: ["Approach-approach", "Avoidance-avoidance", "Approach-avoidance", "None"], answer: 2, rationale: "One goal (surgery) is both attractive (cure) and aversive (fear) — approach-avoidance." },
      { type: "mcq", q: "When external reward reduces pre-existing intrinsic motivation, this is the:", options: ["Over-justification effect", "Yerkes-Dodson law", "Placebo effect", "Halo effect"], answer: 0, rationale: "The over-justification effect describes rewards undermining intrinsic motivation." },
      { type: "mcq", q: "Belief in one's own ability to succeed at a task is:", options: ["Self-esteem", "Self-efficacy", "Self-concept", "Self-actualisation"], answer: 1, rationale: "Bandura's self-efficacy is task-specific confidence and a strong motivator." },
      { type: "fill", q: "The body's tendency to maintain a stable internal state, central to drive theory, is ____.", accept: ["homeostasis"], rationale: "Drive-reduction theory is built on restoring homeostasis." },
      { type: "fill", q: "The peak of Maslow's hierarchy, realising one's full potential, is ____.", accept: ["self-actualisation", "self actualisation", "self-actualization"], rationale: "Self-actualisation is the highest growth need." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "bvs-06-emotion-stress",
    unit: "Unit 2 · The Psychology of the Person",
    title: "Emotion, Stress & Coping",
    readMinutes: 18,
    summary: "The components and theories of emotion; the physiology of stress and the general adaptation syndrome; the transactional (appraisal) model; problem- and emotion-focused coping; the stress-illness link; and psychological care of the stressed patient.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nature and components of emotion", p: "An emotion is a complex reaction with three interacting components: a physiological arousal (autonomic and endocrine changes), a subjective feeling, and an expressive/behavioural element (facial expression, action tendencies). Emotions are adaptive — fear prepares for danger, disgust avoids contamination — and they profoundly shape how patients experience illness and interact with carers." },
      { h: "Theories of emotion", list: [
        "James-Lange theory — we feel emotion because we perceive our bodily reactions ('we are afraid because we tremble').",
        "Cannon-Bard theory — physiological arousal and emotional feeling occur simultaneously and independently.",
        "Schachter-Singer two-factor theory — emotion = physiological arousal + cognitive labelling of that arousal from context.",
        "Appraisal (cognitive) theories (Lazarus) — emotion depends on how an event is interpreted, not the event itself."
      ] },
      { h: "The physiology of stress", p: "Acute stress activates the sympathetic-adrenal-medullary system (the fight-or-flight response), releasing adrenaline and noradrenaline to raise heart rate, blood pressure and glucose. Prolonged stress activates the hypothalamic-pituitary-adrenal (HPA) axis, releasing cortisol. Sustained cortisol impairs immune function, wound healing and memory, and contributes to hypertension and metabolic disturbance — a direct psychosomatic pathway from mind to body." },
      { h: "General adaptation syndrome (Selye)", list: [
        "Alarm stage — the body mobilises resources (fight-or-flight) on encountering a stressor.",
        "Resistance stage — the body adapts and copes while the stressor persists, at a high physiological cost.",
        "Exhaustion stage — prolonged stress depletes resources, leading to illness, breakdown and, potentially, death."
      ], figure: {
        caption: "Selye's general adaptation syndrome: resistance rises in the alarm and resistance stages, then collapses at exhaustion.",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="General adaptation syndrome curve"><line x1="50" y1="160" x2="450" y2="160" stroke="#0F4C3A" stroke-width="2"/><line x1="50" y1="20" x2="50" y2="160" stroke="#0F4C3A" stroke-width="2"/><text x="35" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A" transform="rotate(-90 35 90)">Resistance</text><path d="M50 120 L110 145 L180 55 L320 55 L420 150" fill="none" stroke="#15803D" stroke-width="3"/><line x1="150" y1="160" x2="150" y2="20" stroke="#86EFAC" stroke-width="1" stroke-dasharray="4"/><line x1="330" y1="160" x2="330" y2="20" stroke="#86EFAC" stroke-width="1" stroke-dasharray="4"/><text x="100" y="178" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Alarm</text><text x="240" y="178" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Resistance</text><text x="390" y="178" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Exhaustion</text></svg>'
      } },
      { h: "The transactional (appraisal) model", p: "Lazarus and Folkman defined stress as a transaction between the person and environment: it arises when demands are appraised as exceeding one's resources. Primary appraisal judges whether an event is threatening; secondary appraisal judges whether one can cope. Because stress depends on appraisal, two people facing the same event (e.g. a diagnosis) can respond very differently — and appraisal can be changed, which is the basis of psychological intervention." },
      { h: "Coping strategies", list: [
        "Problem-focused coping — acting on the stressor itself (seeking information, planning, problem-solving); effective when the situation is controllable.",
        "Emotion-focused coping — managing the emotional response (relaxation, reappraisal, seeking support, acceptance); useful when the stressor cannot be changed.",
        "Approach vs avoidance coping — engaging with versus escaping the stressor.",
        "Maladaptive coping — denial, substance use and disengagement, which relieve distress briefly but worsen outcomes."
      ] },
      { h: "Stress, social support and illness", p: "Chronic stress is linked to cardiovascular disease, impaired immunity, delayed wound healing, mental-health problems and poorer recovery. Social support buffers stress — both directly and by aiding appraisal and coping. Hospitalisation is itself a major stressor (loss of control, uncertainty, unfamiliar environment), which nurses can reduce through information, predictability and support." },
      { h: "Application to nursing", list: [
        "Reduce uncertainty and restore control through clear, honest information (procedural and sensory information before procedures).",
        "Teach relaxation, breathing and cognitive reappraisal techniques.",
        "Mobilise social support and involve family.",
        "Assess and support coping style, encouraging adaptive strategies.",
        "Recognise stress and burnout in oneself and colleagues, using self-care and supervision."
      ] },
      { h: "Key terms", list: [
        "Fight-or-flight — acute sympathetic response to threat.",
        "HPA axis — the hormonal stress pathway culminating in cortisol release.",
        "Appraisal — the cognitive evaluation determining whether an event is stressful.",
        "Psychoneuroimmunology — the study of how psychological states affect the immune system."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Describe the three components of emotion and compare two theories of emotion.",
      "Explain the physiology of the acute and chronic stress response.",
      "Describe Selye's general adaptation syndrome.",
      "Explain the transactional model of stress and the concept of appraisal.",
      "Distinguish problem-focused and emotion-focused coping and apply them to nursing care."
    ],
    assessment: [
      { type: "mcq", q: "The three components of an emotion are physiological arousal, subjective feeling and:", options: ["Memory storage", "Expressive/behavioural response", "Sensory adaptation", "Reflex action"], answer: 1, rationale: "Emotion combines arousal, subjective feeling and expressive behaviour." },
      { type: "mcq", q: "The theory that emotion is arousal plus cognitive labelling is the:", options: ["James-Lange theory", "Cannon-Bard theory", "Schachter-Singer two-factor theory", "Drive theory"], answer: 2, rationale: "Schachter-Singer's two-factor theory: emotion = arousal + cognitive label." },
      { type: "mcq", q: "The acute stress response ('fight-or-flight') is driven mainly by the:", options: ["Parasympathetic system", "Sympathetic-adrenal-medullary system", "Digestive system", "Somatic reflex arc"], answer: 1, rationale: "The sympathetic-adrenal-medullary system releases adrenaline for fight-or-flight." },
      { type: "mcq", q: "Prolonged stress raises which hormone via the HPA axis?", options: ["Insulin", "Cortisol", "Melatonin", "Thyroxine"], answer: 1, rationale: "The HPA axis culminates in cortisol release during sustained stress." },
      { type: "mcq", q: "In Selye's model, the stage of resource depletion and possible breakdown is:", options: ["Alarm", "Resistance", "Exhaustion", "Adaptation"], answer: 2, rationale: "The exhaustion stage is when prolonged stress depletes the body's resources." },
      { type: "mcq", q: "In the transactional model, judging whether an event is threatening is:", options: ["Primary appraisal", "Secondary appraisal", "Reappraisal", "Coping"], answer: 0, rationale: "Primary appraisal evaluates the threat; secondary appraisal evaluates coping resources." },
      { type: "mcq", q: "Seeking information and planning to tackle a stressor directly is:", options: ["Emotion-focused coping", "Problem-focused coping", "Denial", "Avoidance"], answer: 1, rationale: "Problem-focused coping acts on the stressor itself." },
      { type: "mcq", q: "Relaxation and cognitive reappraisal are examples of:", options: ["Problem-focused coping", "Emotion-focused coping", "Alarm reaction", "Maladaptive coping"], answer: 1, rationale: "These manage the emotional response, i.e. emotion-focused coping." },
      { type: "mcq", q: "Social support influences stress mainly by:", options: ["Increasing cortisol", "Buffering stress and aiding coping", "Removing all stressors", "Causing illness"], answer: 1, rationale: "Social support buffers stress and supports appraisal and coping." },
      { type: "mcq", q: "The study of how psychological states affect immune function is:", options: ["Psychophysics", "Psychoneuroimmunology", "Psychometrics", "Psychoanalysis"], answer: 1, rationale: "Psychoneuroimmunology examines mind-immune interactions." },
      { type: "fill", q: "Selye's three-stage response to prolonged stress is the general ____ syndrome.", accept: ["adaptation"], rationale: "The general adaptation syndrome has alarm, resistance and exhaustion stages." },
      { type: "fill", q: "The cognitive evaluation determining whether an event is stressful is called ____.", accept: ["appraisal"], rationale: "Appraisal in the transactional model determines the stress response." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "bvs-07-personality",
    unit: "Unit 2 · The Psychology of the Person",
    title: "Personality",
    readMinutes: 18,
    summary: "The definition and theories of personality — psychodynamic, trait (including the Big Five), humanistic and behavioural/social-cognitive — personality assessment, personality and health, and the nursing relevance of individual differences.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is personality?", p: "Personality is the relatively stable and enduring pattern of thoughts, feelings and behaviours that distinguishes one individual from another and shows consistency across situations and time. Understanding personality helps nurses anticipate how different patients will react to illness, information and stress, and how to individualise care." },
      { h: "Psychodynamic theory (Freud)", p: "Freud proposed a mind divided into the id (unconscious pleasure-seeking drives), ego (the reality-based mediator) and superego (the internalised moral conscience). Anxiety arising from conflict between these is managed by ego-defence mechanisms — repression, denial, projection, rationalisation, displacement, regression and sublimation. Recognising defence mechanisms helps nurses understand seemingly puzzling patient reactions to illness (e.g. denial of a diagnosis)." },
      { h: "Trait theories and the Big Five", list: [
        "Trait theories describe personality as a set of stable dimensions on which people differ.",
        "Eysenck proposed core dimensions of extraversion-introversion and neuroticism-stability (later adding psychoticism), with a biological basis in cortical arousal.",
        "The Five-Factor Model (Big Five / OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
        "Conscientiousness predicts health-protective behaviour and longevity; neuroticism predicts greater symptom-reporting and distress."
      ], figure: {
        caption: "The Big Five (OCEAN) personality dimensions.",
        svg: '<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Big Five personality dimensions"><rect x="30" y="20" width="420" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="40" y="38" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">O — Openness to experience</text><rect x="30" y="52" width="420" height="26" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="40" y="70" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">C — Conscientiousness</text><rect x="30" y="84" width="420" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="40" y="102" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">E — Extraversion</text><rect x="30" y="116" width="420" height="26" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="40" y="134" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">A — Agreeableness</text><rect x="30" y="148" width="420" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="40" y="166" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">N — Neuroticism</text></svg>'
      } },
      { h: "Humanistic theory", p: "Humanistic theorists focus on the self and the drive toward growth. Rogers distinguished the self-concept from the ideal self; a large gap (incongruence) causes distress. He argued that psychological health requires unconditional positive regard — acceptance without conditions of worth. This directly informs the therapeutic nurse-patient relationship: warmth, empathy and genuineness (congruence)." },
      { h: "Behavioural and social-cognitive theories", p: "Behaviourists explain personality as learned patterns of response shaped by reinforcement and the environment. Social-cognitive theorists (Bandura, Mischel) add cognition: personality reflects the reciprocal interaction of the person, behaviour and environment (reciprocal determinism), including beliefs such as self-efficacy and locus of control. This view stresses that behaviour is situation-sensitive, not rigidly fixed." },
      { h: "Personality assessment", list: [
        "Self-report questionnaires (e.g. EPQ, NEO-PI for the Big Five) — objective, standardised, but open to social-desirability bias.",
        "Projective tests (e.g. Rorschach, TAT) — reveal unconscious material; low reliability and validity.",
        "Rating scales and interviews.",
        "Assessment must consider reliability, validity and cultural appropriateness."
      ] },
      { h: "Personality and health", p: "Personality is linked to health outcomes. The Type A behaviour pattern (competitiveness, time-urgency, hostility) — especially the hostility component — is associated with coronary heart disease. Type D (distressed) personality predicts poorer cardiac outcomes. Locus of control (internal vs external) influences whether patients believe they can affect their own health and thus their engagement in self-care." },
      { h: "Nursing relevance", list: [
        "Individualise communication and care to the patient's personality and coping style.",
        "Recognise defence mechanisms as understandable responses, not obstruction.",
        "Foster an internal health locus of control and self-efficacy.",
        "Provide unconditional positive regard, empathy and congruence in the therapeutic relationship.",
        "Avoid labelling and stereotyping patients by personality."
      ] },
      { h: "Key terms", list: [
        "Ego-defence mechanism — unconscious strategy to reduce anxiety.",
        "Trait — a stable dimension of personality on which people differ.",
        "Locus of control — belief about whether outcomes are due to oneself (internal) or external forces.",
        "Congruence — consistency between self-concept and experience (Rogers)."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define personality and describe Freud's structure of personality and defence mechanisms.",
      "Describe the trait approach and the Five-Factor (Big Five) model.",
      "Explain the humanistic view of personality and its relevance to the nurse-patient relationship.",
      "Compare self-report and projective methods of personality assessment.",
      "Discuss the relationship between personality and health with examples."
    ],
    assessment: [
      { type: "mcq", q: "Personality is best described as a relatively ____ pattern of thoughts, feelings and behaviour.", options: ["Random", "Stable and enduring", "Temporary", "Purely physical"], answer: 1, rationale: "Personality is enduring and consistent across situations and time." },
      { type: "mcq", q: "In Freud's model, the part governed by moral conscience is the:", options: ["Id", "Ego", "Superego", "Libido"], answer: 2, rationale: "The superego is the internalised moral conscience." },
      { type: "mcq", q: "Attributing one's own unacceptable feelings to another person is the defence mechanism of:", options: ["Projection", "Repression", "Sublimation", "Regression"], answer: 0, rationale: "Projection attributes one's own impulses to others." },
      { type: "mcq", q: "The Big Five personality factors are Openness, Conscientiousness, Extraversion, Agreeableness and:", options: ["Neuroticism", "Psychoticism", "Intelligence", "Aggression"], answer: 0, rationale: "OCEAN = Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism." },
      { type: "mcq", q: "Which Big Five trait predicts health-protective behaviour and longevity?", options: ["Neuroticism", "Conscientiousness", "Openness", "Agreeableness"], answer: 1, rationale: "Conscientiousness is linked to healthier behaviour and longer life." },
      { type: "mcq", q: "Rogers argued that acceptance of a person without conditions is:", options: ["Reciprocal determinism", "Unconditional positive regard", "Reinforcement", "Projection"], answer: 1, rationale: "Unconditional positive regard is central to Rogers' humanistic theory." },
      { type: "mcq", q: "The interaction of person, behaviour and environment (Bandura) is:", options: ["Reciprocal determinism", "The pleasure principle", "The alarm reaction", "Congruence"], answer: 0, rationale: "Reciprocal determinism describes the mutual influence of person, behaviour and environment." },
      { type: "mcq", q: "The Type A component most strongly linked to coronary heart disease is:", options: ["Openness", "Hostility", "Agreeableness", "Extraversion"], answer: 1, rationale: "Hostility is the toxic component of the Type A pattern for heart disease." },
      { type: "mcq", q: "A patient who believes their health is controlled by fate or luck has a(n) ____ locus of control.", options: ["Internal", "External", "Neutral", "Reciprocal"], answer: 1, rationale: "External locus of control attributes outcomes to outside forces." },
      { type: "mcq", q: "Projective tests such as the Rorschach are mainly criticised for:", options: ["Being too objective", "Low reliability and validity", "Being too quick", "Ignoring the unconscious"], answer: 1, rationale: "Projective tests have poor reliability and validity despite tapping the unconscious." },
      { type: "fill", q: "An unconscious strategy used by the ego to reduce anxiety is an ego-____ mechanism.", accept: ["defence", "defense"], rationale: "Ego-defence mechanisms reduce anxiety from inner conflict." },
      { type: "fill", q: "Believing that outcomes result from one's own actions reflects an internal ____ of control.", accept: ["locus"], rationale: "Internal locus of control attributes outcomes to oneself." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "bvs-08-intelligence",
    unit: "Unit 2 · The Psychology of the Person",
    title: "Intelligence",
    readMinutes: 17,
    summary: "The concept and theories of intelligence, measurement and the IQ, the influence of nature and nurture, distribution and classification, intellectual disability, and the nursing relevance of cognitive ability.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is intelligence?", p: "Intelligence is the general capacity to learn from experience, reason, solve problems and adapt effectively to the environment. There is no single agreed definition, but most involve learning, abstract reasoning and adaptation. In nursing, a patient's cognitive ability affects how they understand information, consent, remember instructions and manage self-care." },
      { h: "Theories of intelligence", list: [
        "Spearman's two-factor theory — a general intelligence factor (g) underlies all mental tasks, plus specific abilities (s).",
        "Thurstone — several primary mental abilities rather than a single g.",
        "Cattell — fluid intelligence (reasoning with novel problems, declines with age) versus crystallised intelligence (accumulated knowledge, well maintained).",
        "Gardner's multiple intelligences — several relatively independent intelligences (linguistic, logical-mathematical, spatial, musical, bodily-kinaesthetic, interpersonal, intrapersonal, naturalistic).",
        "Sternberg's triarchic theory — analytical, creative and practical intelligence.",
        "Emotional intelligence (Goleman/Salovey) — perceiving, understanding and managing emotions; highly relevant to caring professions."
      ] },
      { h: "Measurement of intelligence", p: "Intelligence is measured by standardised tests (e.g. Stanford-Binet, Wechsler scales). The intelligence quotient (IQ) was originally mental age divided by chronological age times 100; modern tests use a deviation IQ comparing a person's score with the average for their age group, set to a mean of 100 and a standard deviation of 15. Good tests must be standardised, reliable and valid, and free from cultural bias." },
      { h: "Distribution of intelligence", p: "IQ scores in the population approximate a normal (bell-shaped) distribution centred on 100. About 68% of people score within one standard deviation (85-115) and about 95% within two (70-130). Scores at the extremes indicate intellectual disability (below about 70) or giftedness (above about 130).", figure: {
        caption: "The normal distribution of IQ, mean 100 and standard deviation 15.",
        svg: '<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal distribution of IQ"><line x1="40" y1="150" x2="450" y2="150" stroke="#0F4C3A" stroke-width="2"/><path d="M40 150 Q120 148 160 120 Q210 60 245 50 Q280 60 330 120 Q370 148 450 150" fill="#DCFCE7" stroke="#15803D" stroke-width="2.5"/><line x1="245" y1="50" x2="245" y2="150" stroke="#15803D" stroke-width="1.5" stroke-dasharray="4"/><text x="245" y="168" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">100</text><text x="160" y="168" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">85</text><text x="330" y="168" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">115</text><text x="245" y="40" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">mean = 100, SD = 15</text></svg>'
      } },
      { h: "Nature, nurture and intelligence", p: "Intelligence results from the interaction of genetic and environmental factors. Twin and adoption studies show a substantial heritable component, but environment — nutrition (including in pregnancy and early childhood), education, stimulation, socioeconomic status and health — is also crucial. Deprivation lowers, and enrichment can raise, measured intelligence. This underlines the importance of maternal and child health, in which nurses play a major role." },
      { h: "Intellectual disability", p: "Intellectual disability is characterised by significantly below-average intellectual functioning (roughly IQ below 70) together with deficits in adaptive behaviour, arising before adulthood. Causes include genetic and chromosomal conditions (e.g. Down syndrome), prenatal factors (infections, alcohol), birth complications (hypoxia) and postnatal factors (severe malnutrition, infection, injury). Many causes — such as iodine deficiency and birth asphyxia — are preventable through good perinatal care." },
      { h: "Nursing relevance", list: [
        "Assess each patient's level of understanding and adapt communication accordingly.",
        "Support informed consent, checking genuine comprehension.",
        "Provide extra time, simple language and repetition for patients with cognitive difficulty.",
        "Recognise and prevent modifiable causes of intellectual disability (nutrition, immunisation, safe delivery).",
        "Value emotional intelligence in oneself for compassionate, effective care.",
        "Avoid equating intelligence with worth or capacity for self-determination."
      ] },
      { h: "Key terms", list: [
        "g factor — general intelligence underlying performance across tasks (Spearman).",
        "Fluid vs crystallised intelligence — reasoning ability versus accumulated knowledge (Cattell).",
        "IQ — a standardised score comparing performance with an age norm.",
        "Adaptive behaviour — everyday skills for independent living, part of the definition of intellectual disability."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define intelligence and outline three theories of intelligence.",
      "Explain how intelligence is measured and what the IQ represents.",
      "Discuss the roles of nature and nurture in intelligence.",
      "Define intellectual disability and list its preventable causes.",
      "Explain the relevance of intelligence and emotional intelligence to nursing practice."
    ],
    assessment: [
      { type: "mcq", q: "Spearman's theory proposed a single underlying factor of general intelligence called:", options: ["s", "g", "IQ", "EQ"], answer: 1, rationale: "Spearman's 'g' is general intelligence underlying all mental tasks." },
      { type: "mcq", q: "Reasoning ability with novel problems, which declines with age, is:", options: ["Crystallised intelligence", "Fluid intelligence", "Emotional intelligence", "Practical intelligence"], answer: 1, rationale: "Fluid intelligence handles novel problems and tends to decline with age." },
      { type: "mcq", q: "The theory proposing linguistic, spatial, musical and other separate intelligences is:", options: ["Spearman's", "Gardner's multiple intelligences", "Cattell's", "Sternberg's"], answer: 1, rationale: "Gardner proposed multiple relatively independent intelligences." },
      { type: "mcq", q: "Perceiving, understanding and managing emotions is called:", options: ["Fluid intelligence", "Emotional intelligence", "The g factor", "Adaptive behaviour"], answer: 1, rationale: "Emotional intelligence is the ability to perceive and manage emotions." },
      { type: "mcq", q: "Modern IQ tests set the mean and standard deviation at:", options: ["50 and 10", "100 and 15", "120 and 20", "75 and 25"], answer: 1, rationale: "Deviation IQ uses a mean of 100 and a standard deviation of 15." },
      { type: "mcq", q: "The distribution of IQ in the population is approximately:", options: ["Skewed left", "A normal (bell) curve", "Bimodal", "Uniform"], answer: 1, rationale: "IQ approximates a normal distribution centred on 100." },
      { type: "mcq", q: "Intellectual disability requires below-average IQ together with deficits in:", options: ["Adaptive behaviour", "Height", "Vision", "Hearing"], answer: 0, rationale: "Intellectual disability combines low IQ with adaptive-behaviour deficits arising before adulthood." },
      { type: "mcq", q: "Which is a preventable cause of intellectual disability?", options: ["Iodine deficiency in pregnancy", "Fixed genetic mutation", "Random chance", "Adult education"], answer: 0, rationale: "Iodine deficiency (and birth asphyxia) are preventable causes of intellectual disability." },
      { type: "mcq", q: "Twin and adoption studies show that intelligence is:", options: ["Purely genetic", "Purely environmental", "Influenced by both genes and environment", "Unmeasurable"], answer: 2, rationale: "Intelligence reflects gene-environment interaction." },
      { type: "mcq", q: "Accumulated knowledge and vocabulary that is well maintained with age is:", options: ["Fluid intelligence", "Crystallised intelligence", "The s factor", "Practical intelligence"], answer: 1, rationale: "Crystallised intelligence is stored knowledge, relatively stable with age." },
      { type: "fill", q: "Spearman's general intelligence factor is denoted by the letter ____.", accept: ["g"], rationale: "'g' is Spearman's general intelligence factor." },
      { type: "fill", q: "Everyday skills required for independent living, part of the definition of intellectual disability, are called ____ behaviour.", accept: ["adaptive"], rationale: "Adaptive behaviour is essential to defining intellectual disability." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "bvs-09-attitudes",
    unit: "Unit 3 · Social Behaviour & Communication",
    title: "Attitudes, Beliefs & Behaviour Change",
    readMinutes: 18,
    summary: "The structure and formation of attitudes; attitude-behaviour consistency and cognitive dissonance; persuasion; health-behaviour models (Health Belief Model, Theory of Planned Behaviour, transtheoretical stages of change); and their application to health promotion.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is an attitude?", p: "An attitude is a relatively enduring evaluation — favourable or unfavourable — of a person, object, idea or behaviour. Attitudes shape how people respond to health messages, treatment and illness, and are a central target of health promotion. A belief is a cognition held to be true; a value is a broad guiding principle; attitudes often follow from beliefs and values." },
      { h: "The tripartite structure of attitudes", list: [
        "Cognitive component — beliefs and thoughts about the object.",
        "Affective component — feelings and emotions toward it.",
        "Behavioural (conative) component — the tendency to act toward it.",
        "For example, a smoker may believe smoking is harmful (cognitive), feel anxious about quitting (affective) and continue smoking (behavioural) — showing these components can conflict."
      ] },
      { h: "Formation of attitudes", p: "Attitudes are learned through direct experience, classical and operant conditioning, observational learning (from family, peers, culture and media) and social influence. Because they are learned, they can be changed — the basis of health education. Strong, personally relevant attitudes formed by direct experience are more resistant to change." },
      { h: "Attitude-behaviour consistency and cognitive dissonance", p: "Attitudes do not always predict behaviour; the link is strengthened when attitudes are specific, strong and salient and when situational pressures are weak. Festinger's theory of cognitive dissonance holds that holding inconsistent cognitions (or acting against one's attitude) creates discomfort that motivates change — people alter attitudes or behaviour, or rationalise, to reduce dissonance. Dissonance can be harnessed in health counselling to prompt behaviour change." },
      { h: "Persuasion and attitude change", list: [
        "Source — credible, trustworthy, expert and likeable communicators are more persuasive (relevant to the nurse's role).",
        "Message — clear, balanced, appropriately fear-arousing (moderate, with a clear action) and personally relevant messages work best; extreme fear can backfire.",
        "Audience — pre-existing attitudes, involvement and self-esteem affect persuadability.",
        "Elaboration-likelihood model — a central route (careful thought about arguments) yields durable change; a peripheral route (superficial cues) yields weaker, temporary change."
      ] },
      { h: "Health-behaviour models", list: [
        "Health Belief Model — behaviour depends on perceived susceptibility, perceived severity, perceived benefits, perceived barriers, cues to action and self-efficacy.",
        "Theory of Planned Behaviour — intention (the best predictor of behaviour) is shaped by attitudes, subjective norms and perceived behavioural control.",
        "Transtheoretical (stages of change) model — behaviour change proceeds through precontemplation, contemplation, preparation, action, maintenance (and possible relapse)."
      ], figure: {
        caption: "Transtheoretical stages of change — behaviour change as a cyclical process.",
        svg: '<svg viewBox="0 0 540 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of change model"><defs><marker id="scArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs>' +
          [["Pre-contempl.",10],["Contempl.",115],["Preparation",220],["Action",325],["Maintenance",420]].map(function(p){var x=p[1];return '<rect x="'+x+'" y="45" width="100" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="'+(x+50)+'" y="69" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '<line x1="110" y1="65" x2="113" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#scArr)"/><line x1="215" y1="65" x2="218" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#scArr)"/><line x1="320" y1="65" x2="323" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#scArr)"/><line x1="425" y1="65" x2="418" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#scArr)"/></svg>'
      } },
      { h: "Application to health promotion and nursing", list: [
        "Assess a patient's beliefs, perceived barriers and stage of change before advising.",
        "Match the intervention to the stage — raise awareness in precontemplation, build motivation in contemplation, plan in preparation, support and prevent relapse in action/maintenance.",
        "Increase perceived benefits and self-efficacy while reducing barriers.",
        "Use credible, empathetic communication and the central route to persuasion.",
        "Avoid excessive fear appeals; pair any threat with a feasible protective action."
      ] },
      { h: "Key terms", list: [
        "Cognitive dissonance — discomfort from holding inconsistent cognitions, motivating change.",
        "Subjective norm — perceived social pressure to perform or not perform a behaviour.",
        "Perceived behavioural control — belief in one's ability to perform the behaviour (akin to self-efficacy).",
        "Cues to action — triggers that prompt a person to act on a health intention."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define an attitude and describe its three components.",
      "Explain cognitive dissonance and how it can be used to promote behaviour change.",
      "Describe the factors that make persuasive communication effective.",
      "Compare the Health Belief Model and the Theory of Planned Behaviour.",
      "Apply the stages-of-change model to helping a patient stop smoking."
    ],
    assessment: [
      { type: "mcq", q: "An attitude is best defined as a relatively enduring ____ of an object, person or idea.", options: ["Reflex", "Evaluation", "Sensation", "Memory"], answer: 1, rationale: "An attitude is an enduring favourable or unfavourable evaluation." },
      { type: "mcq", q: "The feelings and emotions toward an object form the ____ component of an attitude.", options: ["Cognitive", "Affective", "Behavioural", "Conative"], answer: 1, rationale: "The affective component is the emotional part of an attitude." },
      { type: "mcq", q: "The discomfort from holding inconsistent cognitions is called:", options: ["Cognitive dissonance", "Perceptual set", "Social loafing", "Conformity"], answer: 0, rationale: "Festinger's cognitive dissonance motivates people to reduce inconsistency." },
      { type: "mcq", q: "In the elaboration-likelihood model, durable attitude change comes from the ____ route.", options: ["Peripheral", "Central", "Reflex", "Sensory"], answer: 1, rationale: "The central route (careful processing of arguments) produces lasting change." },
      { type: "mcq", q: "Perceived susceptibility, severity, benefits and barriers are components of the:", options: ["Theory of Planned Behaviour", "Health Belief Model", "Stages of change model", "Two-factor theory"], answer: 1, rationale: "These are the core constructs of the Health Belief Model." },
      { type: "mcq", q: "In the Theory of Planned Behaviour, the best immediate predictor of behaviour is:", options: ["Attitude", "Intention", "Emotion", "Personality"], answer: 1, rationale: "Behavioural intention is the proximal predictor of behaviour in the TPB." },
      { type: "mcq", q: "A patient who is not yet thinking about changing a harmful habit is in which stage?", options: ["Precontemplation", "Action", "Maintenance", "Preparation"], answer: 0, rationale: "Precontemplation is the stage before any intention to change." },
      { type: "mcq", q: "Perceived social pressure to perform a behaviour (TPB) is the:", options: ["Cue to action", "Subjective norm", "Locus of control", "g factor"], answer: 1, rationale: "The subjective norm is perceived social pressure in the TPB." },
      { type: "mcq", q: "Fear appeals in health messages are most effective when:", options: ["As extreme as possible", "Paired with a feasible protective action", "Used without any advice", "Removed entirely"], answer: 1, rationale: "Moderate fear with a clear, achievable action is most effective; extreme fear can backfire." },
      { type: "mcq", q: "A credible, trustworthy communicator is an example of an effective persuasion ____.", options: ["Source", "Barrier", "Norm", "Relapse"], answer: 0, rationale: "Source credibility and trustworthiness enhance persuasion." },
      { type: "fill", q: "The discomfort from acting against one's attitudes, which motivates change, is cognitive ____.", accept: ["dissonance"], rationale: "Cognitive dissonance is the tension driving attitude or behaviour change." },
      { type: "fill", q: "In the stages-of-change model, actively modifying behaviour is the ____ stage.", accept: ["action"], rationale: "The action stage is when the person actively changes the behaviour." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "bvs-10-self-concept",
    unit: "Unit 3 · Social Behaviour & Communication",
    title: "The Self & Self-Concept",
    readMinutes: 17,
    summary: "The nature and components of the self-concept, self-esteem and body image, the development of the self, threats to self-concept in illness, and how nurses protect a patient's dignity and identity.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The self and self-concept", p: "The self-concept is the organised set of beliefs and perceptions a person holds about themselves — the answer to 'Who am I?'. It develops through experience and social interaction and guides behaviour, emotion and how a person interprets events. Illness, disability and hospitalisation can challenge the self-concept, so it is central to psychological nursing care." },
      { h: "Components of the self-concept", list: [
        "Self-image — how a person sees themselves (physical, social, personal and role identities).",
        "Body image — the mental picture and feelings about one's own body.",
        "Self-esteem — the evaluative dimension: how much a person values and accepts themselves.",
        "Ideal self — the person one would like to be; a large gap from the real self lowers self-esteem.",
        "Roles and identity — the self is partly defined by social roles (parent, worker, nurse)."
      ] },
      { h: "Development of the self", p: "The self is not present at birth but emerges through interaction. Cooley's 'looking-glass self' proposes that we form a self-image from how we imagine others see us. Mead argued the self develops through role-taking and the internalised 'generalised other'. Rogers linked healthy self-development to unconditional positive regard, while conditions of worth in childhood can distort the self-concept. The self continues to develop across the lifespan." },
      { h: "Self-esteem and its importance", p: "Self-esteem is a person's overall evaluation of their own worth. High, stable self-esteem is linked to resilience, better coping and mental health; low self-esteem is associated with anxiety, depression and poorer self-care. Self-esteem is influenced by success and failure, comparison with others, and the reactions of significant others — including health professionals." },
      { h: "Body image and its disturbance", p: "Body image is the internal representation of one's physical self. It can be disturbed by many clinical events — surgery, amputation, mastectomy, stoma formation, burns, weight change, pregnancy, ageing, chronic disease and disfigurement. Body-image disturbance can cause grief, shame, social withdrawal, depression and reduced adherence, and is central to eating disorders. Nurses must anticipate and support these reactions.", figure: {
        caption: "Components of the self-concept.",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Components of self-concept"><circle cx="240" cy="100" r="55" fill="#15803D"/><text x="240" y="96" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">SELF-</text><text x="240" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">CONCEPT</text><rect x="20" y="30" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Self-image</text><rect x="340" y="30" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Body image</text><rect x="20" y="140" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="162" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Self-esteem</text><rect x="340" y="140" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="162" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Ideal self</text><line x1="140" y1="50" x2="192" y2="80" stroke="#22C55E" stroke-width="2"/><line x1="340" y1="50" x2="288" y2="80" stroke="#22C55E" stroke-width="2"/><line x1="140" y1="155" x2="192" y2="120" stroke="#22C55E" stroke-width="2"/><line x1="340" y1="155" x2="288" y2="120" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Threats to the self in illness", p: "Illness and hospitalisation threaten the self in many ways: loss of independence and roles, loss of privacy and dignity, altered appearance and function, dependence on others, and being labelled as a 'patient'. These threats can produce loss of self-esteem, grief, anger and depression. Recovery of a positive self-concept is often as important as physical recovery." },
      { h: "Nursing care of the self-concept", list: [
        "Protect dignity and privacy in every interaction and procedure.",
        "Address patients by their preferred name; avoid depersonalising labels.",
        "Support autonomy and involve patients in decisions to preserve identity and control.",
        "Prepare patients for body-image changes and allow expression of grief.",
        "Reinforce strengths and successes to rebuild self-esteem.",
        "Involve family and, where useful, peer support and specialist counselling."
      ] },
      { h: "Key terms", list: [
        "Looking-glass self — self-image formed from how we think others see us (Cooley).",
        "Self-esteem — the evaluative worth dimension of the self-concept.",
        "Body image — the mental representation and feelings about one's own body.",
        "Ideal self — the self one aspires to be; distance from the real self affects self-esteem."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define the self-concept and describe its components.",
      "Explain how the self develops, referring to Cooley and Mead.",
      "Discuss body image and the clinical events that can disturb it.",
      "How does illness and hospitalisation threaten the self-concept?",
      "Describe nursing measures to protect and rebuild a patient's self-concept."
    ],
    assessment: [
      { type: "mcq", q: "The organised set of beliefs a person holds about themselves is the:", options: ["Self-concept", "Superego", "Locus of control", "Attitude"], answer: 0, rationale: "The self-concept is one's organised set of self-beliefs." },
      { type: "mcq", q: "The evaluative dimension — how much a person values themselves — is:", options: ["Body image", "Self-image", "Self-esteem", "Ideal self"], answer: 2, rationale: "Self-esteem is the evaluation of one's own worth." },
      { type: "mcq", q: "The mental picture and feelings about one's own body is:", options: ["Self-esteem", "Body image", "Ideal self", "Role identity"], answer: 1, rationale: "Body image is the representation of and feelings about one's physical self." },
      { type: "mcq", q: "Cooley's idea that self-image forms from how we think others see us is the:", options: ["Generalised other", "Looking-glass self", "Ideal self", "Halo effect"], answer: 1, rationale: "The looking-glass self is Cooley's concept of self derived from others' perceptions." },
      { type: "mcq", q: "A large gap between the real self and the ideal self tends to:", options: ["Raise self-esteem", "Lower self-esteem", "Have no effect", "Improve body image"], answer: 1, rationale: "A wide real-ideal discrepancy lowers self-esteem (Rogers)." },
      { type: "mcq", q: "Which clinical event most directly threatens body image?", options: ["A routine blood test", "Mastectomy or stoma formation", "A brief clinic visit", "Reading a leaflet"], answer: 1, rationale: "Mastectomy and stoma formation markedly alter body image." },
      { type: "mcq", q: "Mead's concept of internalising society's expectations of behaviour is the:", options: ["Looking-glass self", "Ideal self", "Generalised other", "Self-efficacy"], answer: 2, rationale: "Mead's 'generalised other' is the internalised viewpoint of society." },
      { type: "mcq", q: "Low self-esteem is most associated with:", options: ["Better coping", "Higher resilience", "Improved adherence", "Anxiety and depression"], answer: 3, rationale: "Low self-esteem is linked to anxiety, depression and poorer self-care." },
      { type: "mcq", q: "To protect a patient's self-concept, the nurse should:", options: ["Use depersonalising labels", "Protect dignity and use the preferred name", "Remove all autonomy", "Ignore body-image changes"], answer: 1, rationale: "Protecting dignity, identity and autonomy preserves the self-concept." },
      { type: "mcq", q: "Hospitalisation threatens the self mainly through:", options: ["Loss of independence, privacy and roles", "Increased self-esteem", "Better body image", "No psychological effect"], answer: 0, rationale: "Hospitalisation reduces independence, privacy and role identity." },
      { type: "fill", q: "Cooley's term for the self-image formed from how we think others see us is the ____-glass self.", accept: ["looking"], rationale: "The looking-glass self derives from imagined appraisals by others." },
      { type: "fill", q: "The evaluative dimension of the self-concept, one's sense of worth, is self-____.", accept: ["esteem"], rationale: "Self-esteem is the worth/value dimension of the self." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "bvs-11-communication-groups",
    unit: "Unit 3 · Social Behaviour & Communication",
    title: "Interpersonal Communication & Group Dynamics",
    readMinutes: 18,
    summary: "The communication process, verbal and non-verbal communication, therapeutic communication and barriers, the psychology of groups (norms, roles, cohesion, conformity, leadership) and their application to nursing teams and patient care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The communication process", p: "Communication is the transmission and shared understanding of meaning between a sender and a receiver. The basic model comprises a sender who encodes a message, a channel through which it travels, a receiver who decodes it, feedback confirming understanding, and noise (any interference). Effective communication is the core clinical skill of nursing, essential to assessment, therapeutic relationships, teaching and safety.", figure: {
        caption: "The communication process: sender encodes, channel carries, receiver decodes, feedback loops back, noise interferes.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication process model"><defs><marker id="coArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="40" width="120" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="80" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">SENDER</text><text x="80" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">encodes</text><rect x="210" y="40" width="120" height="45" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="270" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">MESSAGE / channel</text><rect x="400" y="40" width="120" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="460" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">RECEIVER</text><text x="460" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">decodes</text><line x1="140" y1="62" x2="207" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#coArr)"/><line x1="330" y1="62" x2="397" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#coArr)"/><path d="M460 85 Q270 130 80 85" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="5" marker-end="url(#coArr)"/><text x="270" y="125" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">feedback</text></svg>'
      } },
      { h: "Verbal and non-verbal communication", p: "Verbal communication uses words (spoken and written); non-verbal communication conveys meaning through facial expression, eye contact, gesture, posture, touch, proximity (personal space), appearance and paralanguage (tone, pace, pauses). A large share of interpersonal meaning is carried non-verbally, and when words and body language conflict, people usually believe the non-verbal message — a critical insight for detecting a patient's true feelings." },
      { h: "Therapeutic communication skills", list: [
        "Active listening — attending fully, with appropriate eye contact and body posture.",
        "Open questions — inviting the patient to expand rather than answer yes/no.",
        "Reflection and paraphrasing — checking understanding and showing attention.",
        "Empathy — conveying understanding of the patient's feelings.",
        "Silence — allowing the patient time to think and respond.",
        "Clarifying and summarising — ensuring shared understanding.",
        "SOLER (facing squarely, open posture, leaning in, eye contact, relaxed) — a practical framework for attending."
      ] },
      { h: "Barriers to communication", list: [
        "Physical — noise, distance, poor lighting, sensory impairment.",
        "Psychological — anxiety, pain, fear, defensiveness.",
        "Language and cultural differences.",
        "Use of jargon, giving false reassurance, being judgemental or blocking emotional topics.",
        "Environmental barriers such as lack of privacy."
      ] },
      { h: "The psychology of groups", p: "A group is two or more people who interact, are interdependent and share a sense of identity. Groups develop norms (shared rules), roles (task and socio-emotional), status hierarchies and cohesion (the bonds holding the group together). Tuckman described stages of group development: forming, storming, norming, performing and adjourning. Healthy group dynamics improve teamwork; poor dynamics threaten patient safety." },
      { h: "Social influence in groups", list: [
        "Conformity — changing behaviour to match a group (Asch); driven by normative and informational influence.",
        "Obedience to authority (Milgram) — relevant to safe challenge of unsafe instructions.",
        "Groupthink — flawed decision-making in cohesive groups that suppress dissent.",
        "Social facilitation and social loafing — the presence of others can improve simple tasks but reduce individual effort in groups.",
        "Leadership styles — autocratic, democratic and laissez-faire — each with different effects on team performance and morale."
      ] },
      { h: "Application to nursing", list: [
        "Use therapeutic communication in every patient interaction and adapt it to sensory, language and cultural needs.",
        "Read and use non-verbal cues to detect distress and build rapport.",
        "Communicate clearly within the team using structured tools (e.g. SBAR) to prevent errors.",
        "Foster positive group norms, cohesion and democratic leadership in the ward team.",
        "Guard against groupthink and unsafe obedience by speaking up for patient safety."
      ] },
      { h: "Key terms", list: [
        "Non-verbal communication — meaning conveyed without words.",
        "Empathy — understanding and sharing another's feelings.",
        "Group cohesion — the strength of bonds uniting group members.",
        "Groupthink — poor decisions from suppressed dissent in cohesive groups."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Describe the components of the communication process, including feedback and noise.",
      "Compare verbal and non-verbal communication and explain the importance of non-verbal cues.",
      "Describe therapeutic communication skills and common barriers to communication.",
      "Explain group norms, roles, cohesion and Tuckman's stages of group development.",
      "Discuss conformity, obedience and groupthink and their relevance to patient safety."
    ],
    assessment: [
      { type: "mcq", q: "In the communication model, any interference with the message is called:", options: ["Feedback", "Noise", "Encoding", "Channel"], answer: 1, rationale: "Noise is any interference that distorts or blocks the message." },
      { type: "mcq", q: "When verbal and non-verbal messages conflict, people usually believe the:", options: ["Verbal message", "Non-verbal message", "Written message", "Neither"], answer: 1, rationale: "Non-verbal cues are usually trusted more when they conflict with words." },
      { type: "mcq", q: "Facial expression, gesture, posture and eye contact are forms of:", options: ["Verbal communication", "Non-verbal communication", "Paralanguage only", "Feedback"], answer: 1, rationale: "These are non-verbal channels of communication." },
      { type: "mcq", q: "Restating a patient's message to check understanding is:", options: ["Reflection/paraphrasing", "False reassurance", "Blocking", "Jargon"], answer: 0, rationale: "Reflection/paraphrasing confirms understanding and shows attention." },
      { type: "mcq", q: "Which is a barrier, not an aid, to therapeutic communication?", options: ["Active listening", "Empathy", "Giving false reassurance", "Open questions"], answer: 2, rationale: "False reassurance blocks genuine communication of feelings." },
      { type: "mcq", q: "Tuckman's stages of group development are forming, storming, norming, performing and:", options: ["Adjourning", "Conforming", "Obeying", "Loafing"], answer: 0, rationale: "Tuckman later added adjourning as the final stage." },
      { type: "mcq", q: "Changing one's behaviour to match a group (as in Asch's studies) is:", options: ["Obedience", "Conformity", "Cohesion", "Facilitation"], answer: 1, rationale: "Conformity is yielding to group pressure, demonstrated by Asch." },
      { type: "mcq", q: "Poor decision-making in cohesive groups that suppress dissent is:", options: ["Social loafing", "Groupthink", "Social facilitation", "Norming"], answer: 1, rationale: "Groupthink is flawed group decision-making from suppressed disagreement." },
      { type: "mcq", q: "Reduced individual effort when working in a group is:", options: ["Social facilitation", "Social loafing", "Conformity", "Cohesion"], answer: 1, rationale: "Social loafing is decreased individual effort in a group task." },
      { type: "mcq", q: "The structured communication tool used to hand over patient information safely is:", options: ["SOLER", "SBAR", "OCEAN", "GAS"], answer: 1, rationale: "SBAR (Situation, Background, Assessment, Recommendation) structures safe clinical handover." },
      { type: "fill", q: "In the communication model, the response confirming a message was understood is called ____.", accept: ["feedback"], rationale: "Feedback closes the communication loop by confirming understanding." },
      { type: "fill", q: "Flawed decision-making in a cohesive group that suppresses dissent is called ____.", accept: ["groupthink"], rationale: "Groupthink undermines critical evaluation in cohesive groups." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "bvs-12-family-socialisation",
    unit: "Unit 4 · Society, Culture & Health",
    title: "The Family & Socialisation",
    readMinutes: 17,
    summary: "The family as a social institution and its types, functions, roles and relationships; the process and agents of socialisation; the family's role in health and in caring for the sick; and the nursing implications of family-centred care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The family as a social institution", p: "The family is the basic, universal unit of society — a group united by blood, marriage or adoption, usually sharing residence, economic cooperation and emotional life. Sociologically it is the primary social institution: it reproduces society, transmits culture and is the first and most influential context for health behaviour. In Bangladesh the extended family remains central to care." },
      { h: "Types and structure of the family", list: [
        "Nuclear family — parents and their children.",
        "Joint / extended family — several generations or related families together (common in Bangladesh).",
        "Single-parent and reconstituted (blended) families.",
        "Patrilineal / matrilineal descent and patriarchal / matriarchal authority patterns vary by culture.",
        "Family form is changing with urbanisation, migration and modernisation, affecting who cares for the sick and elderly."
      ] },
      { h: "Functions of the family", list: [
        "Reproduction and continuation of society.",
        "Primary socialisation of children — the family's most important function.",
        "Economic support — meeting material needs.",
        "Emotional support, security and stabilisation of adult personalities.",
        "Health care — nurturing, protecting, caring for the sick and shaping health behaviour."
      ] },
      { h: "Socialisation", p: "Socialisation is the lifelong process through which individuals learn the norms, values, roles, language and skills of their society, so that they can function as members of it. Primary socialisation occurs in the family in early childhood; secondary socialisation continues through school, peers, workplace, religion and media. Anticipatory socialisation prepares people for future roles; resocialisation replaces old patterns with new ones (e.g. adopting the 'patient' role, or professional socialisation into nursing).", figure: {
        caption: "Agents of socialisation transmit norms, values and roles across the lifespan.",
        svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Agents of socialisation"><circle cx="250" cy="80" r="46" fill="#15803D"/><text x="250" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">SOCIAL-</text><text x="250" y="93" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">ISATION</text>' +
          [["Family",30,30],["School",370,30],["Peers",30,120],["Media",370,120],["Religion",200,10],["Work",200,150]].map(function(p){return '<rect x="'+p[1]+'" y="'+p[2]+'" width="90" height="26" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="'+(p[1]+45)+'" y="'+(p[2]+18)+'" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '</svg>'
      } },
      { h: "Roles and relationships within the family", p: "Family members occupy interrelated roles (parent, child, spouse, elder) each with expected rights and responsibilities. Relationships are shaped by culture, gender and generation. Role strain and role conflict (e.g. a woman balancing paid work, childcare and care of a sick relative) are common sources of stress. Clear, supportive and flexible roles strengthen a family's capacity to cope with illness." },
      { h: "The family and health", p: "The family shapes health throughout life: it forms eating, hygiene and lifestyle habits, decides when and where to seek care, provides most of the care for sick and elderly members, and buffers or amplifies stress. Family beliefs and dynamics influence adherence and recovery. In Bangladesh the family is typically the main caregiver, so illness in one member has emotional and financial consequences for the whole unit." },
      { h: "Nursing implications: family-centred care", list: [
        "Assess the family structure, roles, resources and beliefs as part of holistic assessment.",
        "Involve the family as partners in care and in decision-making, respecting cultural roles.",
        "Teach family caregivers the skills needed for home care.",
        "Recognise and relieve caregiver strain and the burden of illness on the family.",
        "Support the family unit, especially in community and home-based nursing."
      ] },
      { h: "Key terms", list: [
        "Primary vs secondary socialisation — early family-based versus later, wider socialisation.",
        "Resocialisation — learning new norms and roles that replace previous ones.",
        "Role strain / role conflict — tension within a role, or between competing roles.",
        "Family-centred care — care that treats the family as the unit of care and as partners."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Describe the family as a social institution and its main types.",
      "Explain the functions of the family with emphasis on socialisation.",
      "Define socialisation and distinguish primary, secondary and resocialisation.",
      "Discuss the roles and relationships within the family and the concept of role conflict.",
      "Explain how the nurse applies family-centred care in practice."
    ],
    assessment: [
      { type: "mcq", q: "The lifelong process of learning the norms, values and roles of one's society is:", options: ["Sterilisation", "Socialisation", "Stratification", "Sensation"], answer: 1, rationale: "Socialisation transmits a society's culture to its members." },
      { type: "mcq", q: "The most important function of the family for young children is:", options: ["Economic production", "Government", "Primary socialisation", "Recreation only"], answer: 2, rationale: "Primary socialisation of children is a core function of the family." },
      { type: "mcq", q: "Several generations living together, common in Bangladesh, form a/an:", options: ["Nuclear family", "Extended/joint family", "Single-parent family", "Peer group"], answer: 1, rationale: "The extended/joint family includes several generations." },
      { type: "mcq", q: "Socialisation that occurs later through school, peers and media is:", options: ["Primary socialisation", "Secondary socialisation", "Reproduction", "Adjourning"], answer: 1, rationale: "Secondary socialisation continues beyond the family through wider agents." },
      { type: "mcq", q: "Learning new norms and roles that replace previous ones (e.g. becoming a patient) is:", options: ["Primary socialisation", "Reproduction", "Cohesion", "Resocialisation"], answer: 3, rationale: "Resocialisation replaces old patterns with new roles and norms." },
      { type: "mcq", q: "A woman balancing paid work, childcare and care of a sick relative experiences:", options: ["Role conflict", "Groupthink", "Sensory adaptation", "Extinction"], answer: 0, rationale: "Competing demands of multiple roles produce role conflict." },
      { type: "mcq", q: "In Bangladesh, the main caregiver for a sick person at home is usually the:", options: ["Government", "Family", "Employer", "Police"], answer: 1, rationale: "The family is typically the primary caregiver for the sick." },
      { type: "mcq", q: "Which is an agent of socialisation?", options: ["A red blood cell", "A vaccine", "The school", "A neuron"], answer: 2, rationale: "School, family, peers, religion, work and media are agents of socialisation." },
      { type: "mcq", q: "Care that treats the family as the unit of care and as partners is called:", options: ["Family-centred care", "Intensive care", "Emergency care", "Self-care only"], answer: 0, rationale: "Family-centred care regards the family as the unit of care and partner." },
      { type: "mcq", q: "Preparing in advance for a future role (e.g. parenthood) is:", options: ["Resocialisation", "Anticipatory socialisation", "Primary socialisation", "Extinction"], answer: 1, rationale: "Anticipatory socialisation is rehearsing for a role one expects to take." },
      { type: "fill", q: "Socialisation that takes place in the family during early childhood is ____ socialisation.", accept: ["primary"], rationale: "Primary socialisation is the earliest, family-based socialisation." },
      { type: "fill", q: "Tension arising from the competing demands of two roles is called role ____.", accept: ["conflict"], rationale: "Role conflict arises when different roles make incompatible demands." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "bvs-13-culture-health-beliefs",
    unit: "Unit 4 · Society, Culture & Health",
    title: "Society, Culture & Health Beliefs",
    readMinutes: 18,
    summary: "Society and culture and their components; cultural characteristics, ethnocentrism and relativism; the cultural context of Bangladesh; lay health beliefs, food beliefs and traditional healers; and culturally competent nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Society and culture", p: "Society is an organised group of people sharing territory, institutions and a way of life; culture is that way of life — the shared, learned system of knowledge, beliefs, values, norms, customs, language and symbols passed between generations. Culture is learned (not inherited biologically), shared, transmitted, symbolic and changeable. It powerfully shapes how people understand health, illness, the body and care." },
      { h: "Components of culture", list: [
        "Values — shared ideas of what is good, right and desirable.",
        "Beliefs — accepted ideas about what is true, including about the causes of illness.",
        "Norms — rules of expected behaviour (folkways, mores and laws).",
        "Customs and rituals — habitual practices and ceremonies (birth, marriage, death).",
        "Language and symbols — the shared carriers of meaning.",
        "Material culture — objects, technology and artefacts."
      ] },
      { h: "Ethnocentrism and cultural relativism", p: "Ethnocentrism is judging another culture by the standards of one's own, often assuming one's own is superior; it can lead to prejudice and poor care. Cultural relativism is understanding a culture on its own terms. Nurses aim for cultural relativism and cultural humility — respecting difference — while still upholding safety and human rights (some harmful practices must be challenged, tactfully)." },
      { h: "Cultural context of Bangladesh", p: "Bangladeshi culture is shaped by religion, language, strong family and community ties, and long traditions. Cultural factors influence diet, dress and modesty, gender roles, who makes health decisions, attitudes to the sex of the carer, and beliefs about the causes and cures of illness. Respecting these factors is essential to delivering acceptable and effective care." },
      { h: "Lay health beliefs and models of illness", p: "People hold lay (folk) beliefs about health alongside or instead of biomedical ones. Illness may be attributed to germs and lifestyle (biomedical), but also to supernatural causes, the 'evil eye', fate, sin, or an imbalance of body humours ('hot/cold'). The biomedical model sees disease as bodily malfunction; lay and traditional models often give illness personal and social meaning. These beliefs determine whether, when and from whom people seek help." },
      { h: "Food beliefs and traditional healers", list: [
        "Food beliefs — classifying foods as 'hot' or 'cold' and giving or withholding them in illness or pregnancy; can affect nutrition and recovery.",
        "Kabiraj / Ayurvedic healers — herbal and traditional remedies.",
        "Unani (hekim) practitioners — the humoral Unani system.",
        "Homeopathic practitioners — highly diluted preparations.",
        "Religious / faith healers (pir, fakir) — prayer, amulets (tabiz) and rituals.",
        "Traditional healers are used because they are accessible, affordable, trusted and share the patient's beliefs — but reliance on them can delay effective treatment."
      ] },
      { h: "Culturally competent nursing care", list: [
        "Learn about the cultures served and assess each patient's beliefs individually (avoid stereotyping).",
        "Ask respectfully rather than assume; use interpreters when needed.",
        "Accommodate harmless customs (diet, modesty, family involvement, prayer).",
        "Guide gently away from harmful practices without ridicule; build trust to encourage timely care.",
        "Practise cultural humility — self-awareness of one's own biases.",
        "Integrate cultural assessment into holistic, safe, person-centred care."
      ], figure: {
        caption: "Lay vs biomedical explanations of illness both influence health-seeking behaviour.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lay versus biomedical illness beliefs"><rect x="20" y="30" width="200" height="70" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="120" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Biomedical model</text><text x="120" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">germs, lifestyle, genes</text><rect x="280" y="30" width="200" height="70" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="380" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Lay / traditional model</text><text x="380" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">evil eye, humours, fate</text></svg>'
      } },
      { h: "Key terms", list: [
        "Ethnocentrism — judging others by one's own cultural standards.",
        "Cultural relativism — understanding a culture on its own terms.",
        "Lay beliefs — non-professional, everyday explanations of health and illness.",
        "Cultural competence / humility — respectful, self-aware care across cultures."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define culture and describe its components and characteristics.",
      "Distinguish ethnocentrism from cultural relativism and explain their relevance to nursing.",
      "Describe how cultural factors in Bangladesh influence health behaviour.",
      "Compare biomedical and lay/traditional beliefs about the causes of illness.",
      "Explain how a nurse provides culturally competent care."
    ],
    assessment: [
      { type: "mcq", q: "Culture is best described as:", options: ["Inherited biologically", "A learned, shared way of life passed between generations", "A type of microbe", "A medical treatment"], answer: 1, rationale: "Culture is learned and shared, transmitted across generations." },
      { type: "mcq", q: "Judging another culture by the standards of one's own is:", options: ["Cultural relativism", "Ethnocentrism", "Empathy", "Cultural humility"], answer: 1, rationale: "Ethnocentrism judges others by one's own cultural yardstick." },
      { type: "mcq", q: "Understanding a culture on its own terms is:", options: ["Ethnocentrism", "Groupthink", "Cultural relativism", "Prejudice"], answer: 2, rationale: "Cultural relativism interprets a culture from within its own framework." },
      { type: "mcq", q: "The biomedical model attributes illness mainly to:", options: ["The evil eye", "Germs, lifestyle, genes and environment", "Fate alone", "Sin"], answer: 1, rationale: "The biomedical model explains disease as bodily malfunction from physical causes." },
      { type: "mcq", q: "'Hot' and 'cold' classifications of food in illness are an example of:", options: ["Germ theory", "A vaccine schedule", "A lab test", "Cultural food beliefs"], answer: 3, rationale: "Hot/cold food beliefs are cultural and can affect diet in illness/pregnancy." },
      { type: "mcq", q: "A Bangladeshi healer using the humoral Unani system is a:", options: ["Hekim", "Surgeon", "Radiologist", "Pharmacist"], answer: 0, rationale: "The hekim practises the Unani (humoral) system of medicine." },
      { type: "mcq", q: "A key risk of relying only on traditional healers for serious illness is:", options: ["Lower cost", "Delay in effective diagnosis and treatment", "Faster cure always", "Better outcomes"], answer: 1, rationale: "Sole reliance on traditional healers can delay effective treatment." },
      { type: "mcq", q: "Non-professional, everyday explanations of health and illness are:", options: ["Lay beliefs", "Biomedical facts", "Clinical guidelines", "Vital signs"], answer: 0, rationale: "Lay beliefs are people's own, non-professional explanations." },
      { type: "mcq", q: "Providing respectful, self-aware care that adapts to a patient's culture is:", options: ["Ethnocentric care", "Standardised care only", "Culturally competent care", "Biomedical care only"], answer: 2, rationale: "Culturally competent care respects and adapts to the patient's culture." },
      { type: "mcq", q: "When a patient holds a traditional health belief, the nurse should:", options: ["Ridicule it openly", "Listen respectfully and guide toward safe care", "Refuse to treat", "Ignore the patient"], answer: 1, rationale: "Respectful, non-judgemental guidance builds trust and safe care." },
      { type: "fill", q: "Judging other cultures by the standards of one's own is called ____.", accept: ["ethnocentrism"], rationale: "Ethnocentrism assumes one's own culture is the standard." },
      { type: "fill", q: "Understanding a culture on its own terms is called cultural ____.", accept: ["relativism"], rationale: "Cultural relativism interprets a culture within its own context." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "bvs-14-stratification-health",
    unit: "Unit 4 · Society, Culture & Health",
    title: "Social Stratification & Health",
    readMinutes: 18,
    summary: "Social structure, status and role; systems and dimensions of social stratification; social class, mobility and the social determinants of health; explanations of health inequalities; and the nurse's role in advocating for equity.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Social structure, status and role", p: "Social structure is the relatively stable framework of statuses, roles, groups and institutions through which social life is organised. A status is a social position (ascribed, given at birth, or achieved through effort); a role is the behaviour expected of a status. People hold many statuses, whose demands may clash (role conflict). This structure patterns opportunity, resources and health across a society." },
      { h: "Social stratification", p: "Social stratification is the systematic ranking of groups of people into layers (strata) with unequal access to wealth, power and prestige (Weber's three dimensions). Major historical systems include slavery, caste (closed, ascribed) and class (open, allowing mobility). Modern societies are chiefly class-based, though caste and other divisions persist in parts of South Asia. Stratification is a fundamental cause of unequal life chances, including health." },
      { h: "Social class and social mobility", list: [
        "Social class — a stratum defined by economic and social position (income, occupation, education, wealth).",
        "Social mobility — movement between strata: upward or downward; intergenerational (between generations) or intragenerational (within a lifetime).",
        "Open systems (class) permit mobility; closed systems (caste) largely do not.",
        "Education, occupation and economic change are major routes of mobility."
      ] },
      { h: "The social determinants of health", p: "The social determinants of health are the conditions in which people are born, grow, live, work and age. They include income and poverty, education, employment and working conditions, housing, water and sanitation, food security, gender, and access to health services. These determinants, largely shaped by stratification, explain much of the variation in health within and between populations — more than health care alone.", figure: {
        caption: "Social determinants of health shape health outcomes across the social gradient.",
        svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Social determinants of health"><circle cx="250" cy="80" r="42" fill="#15803D"/><text x="250" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">HEALTH</text><text x="250" y="93" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#DCFCE7">outcomes</text>' +
          [["Income",25,25],["Education",370,25],["Housing",25,115],["Sanitation",360,115],["Gender",195,8],["Work",200,150]].map(function(p){return '<rect x="'+p[1]+'" y="'+p[2]+'" width="100" height="26" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="'+(p[1]+50)+'" y="'+(p[2]+18)+'" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '</svg>'
      } },
      { h: "Health inequalities and the social gradient", p: "Health follows a social gradient: at every step down the social ladder, health tends to be worse and life expectancy shorter — not just for the poorest. People in lower socioeconomic positions have higher rates of many diseases, higher infant and maternal mortality, and poorer access to care. This inequality is seen worldwide and in Bangladesh, and is widely judged to be unjust and largely avoidable." },
      { h: "Explanations of health inequalities", list: [
        "Materialist / structural — poverty and poor material conditions directly damage health (the leading explanation).",
        "Behavioural / cultural — differences in health behaviours (smoking, diet), themselves shaped by circumstances.",
        "Psychosocial — chronic stress of low status and relative deprivation harms health.",
        "Selection — poor health causes downward mobility (a smaller effect).",
        "Access — unequal access to and quality of health services (the 'inverse care law': those most in need often receive least)."
      ] },
      { h: "The nurse's role in advocating for equity", list: [
        "Recognise the social roots of patients' illness and avoid victim-blaming.",
        "Assess and address social barriers to care (cost, transport, literacy).",
        "Provide accessible, non-discriminatory, culturally appropriate care to all.",
        "Contribute to prevention, health education and primary health care that tackle determinants.",
        "Advocate for vulnerable and disadvantaged groups and for fairer services."
      ] },
      { h: "Key terms", list: [
        "Social stratification — the ranking of groups into unequal layers.",
        "Social mobility — movement up or down the social hierarchy.",
        "Social gradient in health — the stepwise worsening of health down the social scale.",
        "Inverse care law — those in greatest need often receive the least care."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define social structure, status and role, and distinguish ascribed from achieved status.",
      "Explain social stratification and compare caste and class systems.",
      "Describe the social determinants of health and the social gradient.",
      "Discuss the main explanations of health inequalities.",
      "Explain the nurse's role in reducing health inequalities and advocating for equity."
    ],
    assessment: [
      { type: "mcq", q: "The systematic ranking of groups into unequal layers is social:", options: ["Mobility", "Stratification", "Socialisation", "Cohesion"], answer: 1, rationale: "Social stratification ranks groups into strata with unequal resources." },
      { type: "mcq", q: "A status given at birth, such as sex or family of origin, is:", options: ["Achieved status", "Ascribed status", "Master status", "Role set"], answer: 1, rationale: "Ascribed status is assigned at birth, unlike achieved status earned through effort." },
      { type: "mcq", q: "Weber's three dimensions of stratification are wealth, power and:", options: ["Prestige", "Height", "Age", "Religion"], answer: 0, rationale: "Weber identified wealth (class), power and prestige (status)." },
      { type: "mcq", q: "A closed stratification system that largely prevents mobility is the:", options: ["Class system", "Caste system", "Open system", "Meritocracy"], answer: 1, rationale: "The caste system is closed and ascribed, limiting mobility; class is open." },
      { type: "mcq", q: "Movement between social strata within one person's lifetime is:", options: ["Intergenerational mobility", "Intragenerational mobility", "Ascription", "Stratification"], answer: 1, rationale: "Intragenerational mobility occurs within a single lifetime." },
      { type: "mcq", q: "Income, education, housing and sanitation are examples of:", options: ["Vital signs", "Social determinants of health", "Medicines", "Microbes"], answer: 1, rationale: "These conditions of daily life are social determinants of health." },
      { type: "mcq", q: "The stepwise worsening of health at each step down the social ladder is the:", options: ["Social gradient", "Inverse care law", "Placebo effect", "Halo effect"], answer: 0, rationale: "The social gradient describes health worsening at each lower social step." },
      { type: "mcq", q: "The idea that those most in need often receive the least care is the:", options: ["Inverse care law", "Law of effect", "Weber's law", "Yerkes-Dodson law"], answer: 0, rationale: "The inverse care law: care availability varies inversely with need." },
      { type: "mcq", q: "The leading explanation of health inequalities emphasises:", options: ["Poor material and structural conditions", "Pure chance", "Genetics only", "Weather"], answer: 0, rationale: "The materialist/structural explanation stresses poverty and living conditions." },
      { type: "mcq", q: "In reducing health inequalities, the nurse should:", options: ["Blame patients for their illness", "Address social barriers and advocate for equity", "Ignore social factors", "Treat only the wealthy"], answer: 1, rationale: "Nurses address social barriers and advocate for fair, accessible care." },
      { type: "fill", q: "Movement up or down the social hierarchy is called social ____.", accept: ["mobility"], rationale: "Social mobility is movement between strata." },
      { type: "fill", q: "The conditions in which people live and work that shape health are the social ____ of health.", accept: ["determinants"], rationale: "Social determinants of health are the everyday conditions shaping health." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "bvs-15-sick-role",
    unit: "Unit 5 · Behaviour in Health & Illness",
    title: "The Sick Role & Illness Behaviour",
    readMinutes: 17,
    summary: "The concepts of disease, illness and sickness; Parsons' sick role and its criticisms; illness behaviour and delay; the psychological impact of hospitalisation; adherence; and the nurse's role in supporting adaptive illness behaviour.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Disease, illness and sickness", p: "These related terms are distinguished in behavioural science. Disease is the objective biological pathology (what the doctor diagnoses). Illness is the subjective experience of feeling unwell (what the patient feels and reports). Sickness is the social role and status of being ill (how society and others respond). A person can have disease without feeling ill (e.g. early hypertension) or feel ill without demonstrable disease — a crucial insight for nursing." },
      { h: "The sick role (Parsons)", p: "Parsons described sickness as a temporary, sanctioned social role with two rights and two obligations, functioning to control the potential disruption illness causes society.", figure: {
        caption: "Parsons' sick role — two rights and two obligations.",
        svg: '<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parsons sick role rights and obligations"><rect x="20" y="20" width="220" height="130" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="130" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">RIGHTS</text><text x="35" y="70" font-family="sans-serif" font-size="10" fill="#0F4C3A">1. Exempt from normal roles</text><text x="35" y="95" font-family="sans-serif" font-size="10" fill="#0F4C3A">2. Not blamed for the illness</text><rect x="260" y="20" width="220" height="130" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="370" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">OBLIGATIONS</text><text x="275" y="70" font-family="sans-serif" font-size="10" fill="#0F4C3A">1. Must want to get well</text><text x="275" y="95" font-family="sans-serif" font-size="10" fill="#0F4C3A">2. Must seek &amp; cooperate</text><text x="275" y="112" font-family="sans-serif" font-size="10" fill="#0F4C3A">   with competent help</text></svg>'
      } },
      { h: "Criticisms of the sick role", list: [
        "Fits acute illness but not chronic illness or disability, where full recovery is not expected.",
        "Assumes patients are passive and doctors authoritative — outdated given active, informed patients.",
        "Ignores that access to the sick role depends on social factors and legitimation.",
        "Some conditions are stigmatised and not granted the 'not to blame' right.",
        "Does not fit conditions people are held responsible for (e.g. lifestyle-related)."
      ] },
      { h: "Illness behaviour and delay", p: "Illness behaviour is what people do when they perceive symptoms — how they interpret, monitor and act on them. It is shaped by the nature of symptoms, lay beliefs, culture, competing demands, past experience and access to care. People often delay seeking help through failure to notice or interpret symptoms as serious, denial, fear, cost, or reliance on lay/traditional advice — a major cause of late presentation of conditions such as cancer and heart attack." },
      { h: "Psychological impact of hospitalisation", list: [
        "Loss of control, independence and privacy; unfamiliar routines and environment.",
        "Uncertainty, fear and separation from family.",
        "Depersonalisation and loss of identity ('the patient in bed 4').",
        "Sensory overload or deprivation, contributing to anxiety and delirium.",
        "Learned helplessness can develop when patients feel they have no control."
      ] },
      { h: "Adherence (compliance)", p: "Adherence is the extent to which a patient's behaviour matches agreed recommendations. Non-adherence is common and multifactorial: complex or long regimens, side-effects, poor understanding, low self-efficacy, beliefs about the illness and medicine, cost, and a poor therapeutic relationship. 'Concordance' reframes this as a shared agreement between nurse and patient rather than obedience, improving outcomes." },
      { h: "Nursing role in illness behaviour and the sick role", list: [
        "Understand the patient's own interpretation and beliefs about their illness.",
        "Support appropriate use of the sick role while encouraging active participation and recovery.",
        "Reduce delay by health education about warning symptoms and prompt help-seeking.",
        "Minimise the harms of hospitalisation: restore control, information, privacy and identity.",
        "Promote adherence/concordance through simple regimens, education, self-efficacy and partnership."
      ] },
      { h: "Key terms", list: [
        "Illness vs disease — subjective experience versus objective pathology.",
        "Sick role — the socially sanctioned role of the ill person (Parsons).",
        "Illness behaviour — how people perceive and respond to symptoms.",
        "Adherence / concordance — following, or jointly agreeing, a treatment plan."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Distinguish disease, illness and sickness with examples.",
      "Describe Parsons' sick role, its rights and obligations, and its criticisms.",
      "Explain illness behaviour and the reasons people delay seeking help.",
      "Discuss the psychological impact of hospitalisation on patients.",
      "Explain adherence and how the nurse can improve it."
    ],
    assessment: [
      { type: "mcq", q: "The objective biological pathology diagnosed by a clinician is:", options: ["Illness", "Disease", "Sickness", "The sick role"], answer: 1, rationale: "Disease is the objective pathology; illness is the subjective experience." },
      { type: "mcq", q: "The subjective experience of feeling unwell is:", options: ["Disease", "Illness", "Sickness", "Adherence"], answer: 1, rationale: "Illness is what the patient subjectively feels and reports." },
      { type: "mcq", q: "The socially sanctioned role of the ill person was described by:", options: ["Parsons", "Freud", "Maslow", "Pavlov"], answer: 0, rationale: "Talcott Parsons formulated the concept of the sick role." },
      { type: "mcq", q: "Which is a RIGHT of the Parsonian sick role?", options: ["Must want to get well", "Exemption from normal social roles", "Must seek competent help", "Must cooperate with treatment"], answer: 1, rationale: "Exemption from normal roles and freedom from blame are the rights; wanting to recover and seeking help are the obligations." },
      { type: "mcq", q: "A major criticism of the sick role is that it fits poorly with:", options: ["Acute illness", "Chronic illness and disability", "Short infections", "Minor injury"], answer: 1, rationale: "The sick role assumes recovery, so it fits chronic illness/disability poorly." },
      { type: "mcq", q: "How people perceive, interpret and act on symptoms is called:", options: ["Illness behaviour", "The sick role", "Adherence", "Disease"], answer: 0, rationale: "Illness behaviour is the response to perceived symptoms." },
      { type: "mcq", q: "A common reason for delay in seeking help for serious symptoms is:", options: ["Denial or fear", "Excellent access", "Strong self-efficacy", "Immediate recognition"], answer: 0, rationale: "Denial, fear, cost and misinterpretation commonly cause help-seeking delay." },
      { type: "mcq", q: "Feeling that one has no control, leading to passivity in hospital, can produce:", options: ["Self-actualisation", "Learned helplessness", "Groupthink", "Social facilitation"], answer: 1, rationale: "Perceived lack of control can lead to learned helplessness." },
      { type: "mcq", q: "The extent to which a patient's behaviour matches agreed recommendations is:", options: ["Adherence", "Ethnocentrism", "Conformity", "Extinction"], answer: 0, rationale: "Adherence is the degree of following agreed treatment." },
      { type: "mcq", q: "Reframing following treatment as a shared agreement between nurse and patient is:", options: ["Concordance", "Obedience", "Coercion", "Selection"], answer: 0, rationale: "Concordance emphasises partnership rather than passive compliance." },
      { type: "fill", q: "The objective biological pathology, as opposed to the subjective experience, is called ____.", accept: ["disease"], rationale: "Disease is the objective pathology; illness is subjective." },
      { type: "fill", q: "The socially sanctioned role of an ill person, described by Parsons, is the ____ role.", accept: ["sick"], rationale: "Parsons' sick role carries defined rights and obligations." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "bvs-16-lifespan",
    unit: "Unit 5 · Behaviour in Health & Illness",
    title: "Psychology of the Patient Across the Lifespan",
    readMinutes: 18,
    summary: "Lifespan development and its principles; Erikson's psychosocial stages; Piaget's cognitive stages; attachment; the psychology of ageing and death; and applying developmental understanding to age-appropriate nursing care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Lifespan development", p: "Development is the pattern of change in body, mind and behaviour that continues from conception to death. It is lifelong, multidimensional (physical, cognitive, emotional and social), and shaped by both nature and nurture. Understanding development lets the nurse assess whether behaviour is age-appropriate, communicate suitably, and anticipate each stage's health needs and psychological reactions to illness." },
      { h: "Erikson's psychosocial stages", list: [
        "Trust vs mistrust (infancy) — dependable care builds basic trust.",
        "Autonomy vs shame/doubt (toddler) — developing independence and self-control.",
        "Initiative vs guilt (preschool) — exploring, planning and purpose.",
        "Industry vs inferiority (middle childhood) — competence through achievement.",
        "Identity vs role confusion (adolescence) — forming a coherent sense of self.",
        "Intimacy vs isolation (early adulthood) — forming close relationships.",
        "Generativity vs stagnation (middle adulthood) — contributing to the next generation.",
        "Integrity vs despair (late adulthood) — reflecting on a life well lived."
      ], figure: {
        caption: "Erikson's eight psychosocial stages — each a developmental crisis to resolve.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Erikson psychosocial stages timeline"><line x1="20" y1="80" x2="500" y2="80" stroke="#15803D" stroke-width="3"/>' +
          [["Trust",30],["Autonomy",95],["Initiative",165],["Industry",240],["Identity",315],["Intimacy",380],["Generativity",435],["Integrity",485]].map(function(p,i){var y=(i%2===0)?45:105;return '<circle cx="'+p[1]+'" cy="80" r="5" fill="#0F4C3A"/><text x="'+p[1]+'" y="'+y+'" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '<text x="30" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">infancy</text><text x="485" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">old age</text></svg>'
      } },
      { h: "Piaget's cognitive stages", list: [
        "Sensorimotor (0-2 yr) — knowing the world through senses and action; developing object permanence.",
        "Preoperational (2-7 yr) — symbolic thought and language, but egocentric and lacking conservation.",
        "Concrete operational (7-11 yr) — logical thinking about concrete situations; conservation achieved.",
        "Formal operational (11+ yr) — abstract, hypothetical and systematic reasoning.",
        "The child's cognitive stage determines how illness and treatment can be explained (e.g. young children cannot grasp abstract explanations)."
      ] },
      { h: "Attachment and early relationships", p: "Bowlby proposed that infants form an attachment — an enduring emotional bond — to a primary caregiver, essential for healthy emotional development. Ainsworth's Strange Situation identified secure and insecure attachment patterns. Secure attachment supports later resilience and relationships; disruption (e.g. prolonged hospitalisation of a young child) can cause distress. This underpins family-centred paediatric care and allowing a parent to stay with a sick child." },
      { h: "The psychology of ageing", p: "Ageing brings physical change and often some decline in fluid intelligence, processing speed and certain memory, while crystallised knowledge and wisdom are well maintained. Psychologically, older adults face losses (retirement, bereavement, reduced independence) but many adapt well; theories such as activity and continuity theory describe successful ageing. Nurses must distinguish normal ageing from treatable conditions (e.g. depression, delirium, dementia) and support dignity and autonomy." },
      { h: "The psychology of death and dying", p: "Kubler-Ross described common (not fixed or universal) reactions to dying and loss: denial, anger, bargaining, depression and acceptance. Grief is a normal response to loss and varies by individual and culture. Nurses provide palliative and end-of-life care — honest, compassionate communication, symptom relief, respect for the person's wishes and culture, and support for the bereaved family." },
      { h: "Applying development to nursing care", list: [
        "Match communication and explanation to the patient's cognitive and developmental stage.",
        "Support age-specific psychosocial needs (e.g. an adolescent's identity and autonomy; an older adult's dignity).",
        "Keep parents with hospitalised children and minimise separation.",
        "Distinguish normal ageing from disease and avoid ageist assumptions.",
        "Provide sensitive, culturally appropriate care of the dying and the bereaved."
      ] },
      { h: "Key terms", list: [
        "Psychosocial crisis — the central conflict of each Eriksonian stage.",
        "Object permanence — awareness that objects exist when out of sight (sensorimotor stage).",
        "Attachment — the enduring emotional bond between infant and caregiver.",
        "Palliative care — care focused on comfort and quality of life in serious illness."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define development and state its main principles.",
      "Describe Erikson's psychosocial stages across the lifespan.",
      "Outline Piaget's stages of cognitive development and their relevance to explaining illness to children.",
      "Explain attachment theory and its importance in paediatric nursing.",
      "Describe the psychology of dying and the nurse's role in end-of-life care."
    ],
    assessment: [
      { type: "mcq", q: "Erikson's psychosocial crisis of infancy is:", options: ["Trust vs mistrust", "Autonomy vs shame", "Identity vs role confusion", "Integrity vs despair"], answer: 0, rationale: "Trust vs mistrust is the first Eriksonian stage, in infancy." },
      { type: "mcq", q: "The central developmental task of adolescence in Erikson's theory is:", options: ["Intimacy vs isolation", "Identity vs role confusion", "Industry vs inferiority", "Generativity vs stagnation"], answer: 1, rationale: "Adolescence centres on forming identity vs role confusion." },
      { type: "mcq", q: "In Piaget's theory, object permanence develops in the ____ stage.", options: ["Preoperational", "Sensorimotor", "Concrete operational", "Formal operational"], answer: 1, rationale: "Object permanence emerges during the sensorimotor stage (0-2 years)." },
      { type: "mcq", q: "Abstract and hypothetical reasoning characterises Piaget's ____ stage.", options: ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"], answer: 3, rationale: "Formal operational thought (11+ years) enables abstract, hypothetical reasoning." },
      { type: "mcq", q: "The enduring emotional bond between an infant and caregiver is:", options: ["Attachment", "Conservation", "Generativity", "Integrity"], answer: 0, rationale: "Bowlby's attachment is the infant-caregiver emotional bond." },
      { type: "mcq", q: "Ainsworth's method for assessing infant attachment is the:", options: ["Strange Situation", "Bobo doll study", "Rorschach test", "Stanford-Binet"], answer: 0, rationale: "The Strange Situation classifies infant attachment patterns." },
      { type: "mcq", q: "With ageing, which ability is generally best maintained?", options: ["Processing speed", "Fluid intelligence", "Crystallised intelligence", "Reaction time"], answer: 2, rationale: "Crystallised intelligence (knowledge, vocabulary) is well preserved in ageing." },
      { type: "mcq", q: "Kubler-Ross's stages of dying include denial, anger, bargaining, depression and:", options: ["Acceptance", "Industry", "Autonomy", "Conservation"], answer: 0, rationale: "Kubler-Ross described denial, anger, bargaining, depression and acceptance." },
      { type: "mcq", q: "To reduce distress in a hospitalised young child, the nurse should:", options: ["Separate the child from parents", "Allow a parent to stay with the child", "Avoid all explanation", "Restrict visiting"], answer: 1, rationale: "Keeping a parent present supports attachment and reduces distress." },
      { type: "mcq", q: "Care focused on comfort and quality of life in serious illness is:", options: ["Curative care", "Palliative care", "Intensive care", "Preventive care"], answer: 1, rationale: "Palliative care prioritises comfort and quality of life." },
      { type: "fill", q: "In Piaget's theory, awareness that objects exist when out of sight is called object ____.", accept: ["permanence"], rationale: "Object permanence develops in the sensorimotor stage." },
      { type: "fill", q: "Erikson's final psychosocial stage in late adulthood is integrity vs ____.", accept: ["despair"], rationale: "The final stage is integrity vs despair, reflecting on one's life." }
    ]
  }
];
