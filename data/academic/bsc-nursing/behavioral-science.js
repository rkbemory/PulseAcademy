/* ============================================================
   B.Sc. in Nursing (4-year, 2018) · B112 Behavioral Science
   — 16 topics, DEGREE-LEVEL (ADVANCED / DEEPENED). Psychology &
   sociology applied to nursing: sensation/perception, learning,
   memory, motivation, emotion & stress, personality, intelligence,
   attitudes, the self, communication & groups, family, culture,
   stratification, the sick role, and the lifespan. Grounded in
   standard texts:
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
    readMinutes: 28,
    summary: "The scope and boundaries of behavioural science, the disciplines it integrates, the schools and evolution of psychology, its levels of explanation, research methods and statistics, ethics, key debates, and why a degree-level nurse studies human behaviour as a clinical science.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Defining behavioural science", p: "Behavioural science is the systematic, empirical study of human behaviour and mental processes and of the social forces that shape them. It is an umbrella field integrating psychology (the individual mind and behaviour), sociology (society, groups and institutions) and social anthropology (culture and human diversity), with contributions from economics, political science, human geography and epidemiology. Its defining commitment is empiricism — knowledge built from systematic observation and measurement rather than intuition, authority, common sense or tradition. For nursing it supplies the conceptual tools to care for the whole person — a biopsychosocial being — rather than an isolated disease, and it is the disciplinary root of psychosocial assessment, therapeutic communication and health promotion." },
      { h: "Behaviour, mental processes and levels of analysis", p: "Behaviour is any observable, measurable activity of an organism (overt behaviour: walking, speaking, grimacing) as well as physiological activity that can be recorded (covert behaviour: heart rate, cortisol, brain activity). Mental processes — attention, perception, memory, thought, emotion and motivation — are private and inferred from behaviour and self-report. Behavioural science analyses these at several levels: the intra-individual (biological and psychological), the interpersonal (dyads and small groups) and the societal (institutions, culture and social structure). A single event, such as a patient refusing surgery, can and should be examined at each level rather than reduced to one." },
      { h: "Boundaries and its relationship to other sciences", p: "Behavioural science sits between the natural sciences and the humanities. It borrows methods and findings from biology and physiology (the neural and hormonal substrate of behaviour), overlaps with medicine and public health (behaviour as a determinant of disease), and connects to economics and political science (how markets and power shape health). Its distinctive contribution is to explain behaviour scientifically — using observation, measurement and theory — rather than by intuition alone. In nursing it forms the disciplinary bridge between the biomedical sciences (anatomy, physiology, microbiology) and the practice of holistic, person-centred care, and it distinguishes the professional nurse from the merely technical one." },
      { h: "The biopsychosocial model", p: "Engel's biopsychosocial model (1977) reframed health and illness as the product of interacting biological, psychological and social factors. It replaced the narrow biomedical model, which treats disease as purely a bodily malfunction. Behavioural science provides the psychological and social components of this model, explaining why two patients with the same pathology (for example, identical wound size or tumour stage) can differ greatly in their pain, coping, adherence and recovery. It is the theoretical foundation for holistic nursing assessment and for nursing frameworks such as Roper-Logan-Tierney's activities of living.", figure: {
        caption: "The biopsychosocial model — health and illness arise from interacting biological, psychological and social factors.",
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Biopsychosocial model of health"><rect x="30" y="30" width="150" height="55" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="105" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">BIOLOGICAL</text><text x="105" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">genes, brain, disease</text><rect x="205" y="30" width="150" height="55" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">PSYCHOLOGICAL</text><text x="280" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">thoughts, coping</text><rect x="380" y="30" width="150" height="55" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="455" y="55" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">SOCIAL</text><text x="455" y="73" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">family, culture</text><rect x="205" y="135" width="150" height="40" rx="10" fill="#15803D"/><text x="280" y="160" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#F0FDF4">HEALTH &amp; ILLNESS</text><line x1="105" y1="85" x2="255" y2="133" stroke="#22C55E" stroke-width="2"/><line x1="280" y1="85" x2="280" y2="133" stroke="#22C55E" stroke-width="2"/><line x1="455" y1="85" x2="305" y2="133" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Evolution of psychology (schools of thought)", list: [
        "Structuralism (Wundt, Titchener) — used introspection to analyse consciousness into its elements; Wundt founded the first psychology laboratory at Leipzig in 1879, the conventional birth of scientific psychology.",
        "Functionalism (James) — asked what mental processes are FOR; influenced by Darwinian evolution and adaptation.",
        "Psychoanalysis (Freud) — emphasised unconscious drives, early experience and defence mechanisms.",
        "Gestalt psychology (Wertheimer, Kohler, Koffka) — argued the whole is more than the sum of its parts; organisation of perception and insight.",
        "Behaviourism (Watson, Skinner) — restricted psychology to observable, measurable behaviour and learning; rejected introspection.",
        "Humanistic psychology (Maslow, Rogers) — the 'third force'; stressed free will, self-actualisation and the person's subjective world.",
        "Cognitive psychology — treats the mind as an information processor; dominant from the 'cognitive revolution' of the 1950s-60s.",
        "Biological/neuropsychology — links behaviour to brain, neurotransmitters and genes; enabled by EEG, PET and fMRI imaging.",
        "Positive psychology (Seligman, 2000s) — the scientific study of wellbeing, strengths and flourishing, relevant to resilience and health promotion."
      ] },
      { h: "Levels of explanation (the major approaches)", list: [
        "Biological — behaviour explained by neural, hormonal and genetic mechanisms; assumes physiological causation.",
        "Behavioural — behaviour is learned through conditioning and reinforcement; environmentally determined.",
        "Cognitive — behaviour reflects internal information processing, appraisal and mental representation.",
        "Psychodynamic — behaviour is driven by unconscious conflict and early experience.",
        "Humanistic — behaviour is directed by free will, personal meaning and the drive to grow.",
        "Social/cultural — behaviour is shaped by other people, groups, roles and culture.",
        "Evolutionary — behaviour is understood as an adaptation shaped by natural selection.",
        "These are complementary angles on one complex human being, not rival truths — a stance nurses should adopt to avoid reductionism."
      ] },
      { h: "Nature-nurture and other core debates", list: [
        "Nature versus nurture — the relative contribution of heredity and environment; modern view is interaction (epigenetics: experience switches genes on and off).",
        "Freewill versus determinism — whether behaviour is chosen or caused; nursing assumes patients can change (agency) while respecting the influences on them.",
        "Reductionism versus holism — explaining by simplest parts versus the whole person; nursing favours holism.",
        "Idiographic versus nomothetic — studying the unique individual versus seeking general laws.",
        "Individual versus situational — is behaviour driven by the person or the situation (the person-situation debate)?",
        "Continuity versus discontinuity — is development gradual or stage-like?"
      ] },
      { h: "The scientific method in behavioural science", p: "Behavioural science follows the empirical cycle: observation, forming a testable hypothesis, operationalising variables (defining them so they can be measured), collecting and analysing data, and drawing conclusions that feed back into theory. Key concepts include the independent variable (manipulated), the dependent variable (measured), extraneous and confounding variables (which must be controlled), operational definitions, reliability (consistency of measurement) and validity (whether it measures what it claims). Findings must be replicable and are refined by peer review — the same evidence-based logic that underpins evidence-based nursing." },
      { h: "Research methods in behavioural science", list: [
        "Experiment (laboratory or field) — manipulates an independent variable under control to establish cause and effect; strong internal validity but sometimes artificial.",
        "Correlational study — measures the relationship (correlation coefficient r, from -1 to +1) between variables without manipulation; cannot prove causation.",
        "Naturalistic observation — records behaviour as it naturally occurs; high ecological validity but limited control.",
        "Survey / questionnaire — gathers self-report data from large samples; efficient but prone to social-desirability and response bias.",
        "Case study — in-depth study of one person or group; rich detail but hard to generalise.",
        "Qualitative methods — interviews, focus groups and thematic analysis to explore meaning and lived experience.",
        "Longitudinal versus cross-sectional designs — following the same people over time versus comparing different age groups at one time point."
      ], figure: {
        caption: "The empirical research cycle used across behavioural science.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Empirical research cycle"><defs><marker id="rcArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs>' +
          [["Observe",15],["Hypothesise",130],["Test / data",255],["Conclude",385]].map(function(p){var x=p[1];return '<rect x="'+x+'" y="50" width="110" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="'+(x+55)+'" y="74" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '<line x1="125" y1="70" x2="128" y2="70" stroke="#0F4C3A" stroke-width="2" marker-end="url(#rcArr)"/><line x1="250" y1="70" x2="253" y2="70" stroke="#0F4C3A" stroke-width="2" marker-end="url(#rcArr)"/><line x1="375" y1="70" x2="383" y2="70" stroke="#0F4C3A" stroke-width="2" marker-end="url(#rcArr)"/><path d="M440 90 Q250 135 70 90" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="5" marker-end="url(#rcArr)"/><text x="255" y="128" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">refine theory</text></svg>'
      } },
      { h: "Descriptive statistics and key figures", list: [
        "Measures of central tendency — mean (arithmetic average), median (middle value) and mode (most frequent value).",
        "Measures of dispersion — range and, most importantly, the standard deviation (the average spread around the mean).",
        "The normal distribution — a symmetrical bell curve where ~68% of scores fall within 1 SD of the mean and ~95% within 2 SD.",
        "Correlation coefficient (r) ranges from -1 to +1; values near 0 mean little relationship, and correlation never proves causation.",
        "Statistical significance (conventionally p < 0.05) indicates the result is unlikely to be due to chance alone.",
        "These same concepts recur in intelligence testing, clinical audit and evidence-based practice."
      ] },
      { h: "Ethics in behavioural research", list: [
        "Informed consent — participants must understand and freely agree to take part.",
        "Right to withdraw — participants may leave at any time without penalty.",
        "Confidentiality and anonymity — protecting personal data.",
        "Protection from harm — physical and psychological risk must be minimised.",
        "Deception must be justified and followed by full debriefing.",
        "Independent ethical review (research ethics committee / IRB) is required before studies begin.",
        "These principles mirror the ethical duties of the nurse and the requirements of research ethics committees."
      ] },
      { h: "Significance for nursing practice", p: "Behavioural science underpins therapeutic communication, patient assessment, health promotion, adherence, pain and stress management, and the nurse's own self-awareness and resilience. Evidence from psychoneuroimmunology links psychological factors (anxiety, expectation, social support) to measurable clinical outcomes such as post-operative recovery, wound-healing time and immune function — making behavioural science a clinical, not merely a theoretical, subject. It also grounds the nurse's role as health educator, patient advocate and reflective practitioner." },
      { h: "Clinical relevance — putting theory into practice", list: [
        "Choosing the right level of explanation prevents one-sided care (e.g. treating pain biologically AND psychologically).",
        "Understanding research methods and statistics enables the nurse to read and apply evidence critically (evidence-based practice).",
        "The biopsychosocial model structures holistic nursing assessment and care planning.",
        "Awareness of bias and social-desirability effects improves the accuracy of patient history-taking.",
        "Ethical research principles transfer directly to obtaining valid consent in clinical care.",
        "Self-awareness of one's own assumptions reduces stereotyping and improves person-centred care."
      ] },
      { h: "Key terms", list: [
        "Empiricism — knowledge derived from systematic observation and evidence.",
        "Biopsychosocial — the integrated biological, psychological and social view of health.",
        "Reductionism — explaining behaviour by its simplest components; holism does the opposite.",
        "Operationalisation — defining a variable in measurable terms.",
        "Reliability vs validity — consistency of measurement versus measuring the intended construct.",
        "Ecological validity — the extent to which findings apply to real-life settings.",
        "Standard deviation — the average spread of scores around the mean."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define behavioural science and describe its boundaries and relationship with other sciences.",
      "Explain the biopsychosocial model and contrast it with the biomedical model, using a clinical example.",
      "Trace the evolution of psychology from structuralism to neuropsychology.",
      "Describe four research methods used in behavioural science, with their strengths, limitations and an ethical safeguard for each.",
      "Discuss two core debates (e.g. nature-nurture, reductionism-holism) and their relevance to holistic nursing care."
    ],
    assessment: [
      { type: "mcq", q: "Behavioural science is best defined as the empirical study of:", options: ["Chemical reactions in cells", "Human behaviour and the mental and social forces shaping it", "Rocks and minerals", "Plant physiology"], answer: 1, rationale: "Behavioural science empirically studies human behaviour and its psychological and social determinants, distinguishing it from the natural sciences it borrows from." },
      { type: "mcq", q: "A nurse notes that two patients with identical wound sizes report very different pain and recover at different rates. This is best explained by the:", options: ["Biomedical model", "Biopsychosocial model", "Germ theory", "Humoral model"], answer: 1, rationale: "Only the biopsychosocial model accounts for psychological and social factors producing different outcomes from identical pathology." },
      { type: "mcq", q: "The first psychology laboratory (Leipzig, 1879) and structuralism are associated with:", options: ["Freud", "Skinner", "Wundt", "Rogers"], answer: 2, rationale: "Wundt founded the first psychology laboratory and, with Titchener, structuralism, marking the start of scientific psychology." },
      { type: "mcq", q: "A researcher wants to establish whether a relaxation technique CAUSES reduced pre-operative anxiety. The appropriate method is a(n):", options: ["Correlational study", "Case study", "Experiment", "Naturalistic observation"], answer: 2, rationale: "Only an experiment, by manipulating the independent variable under control, can establish cause and effect." },
      { type: "mcq", q: "Explaining a patient's depression purely by low serotonin reflects which limitation of approaches?", options: ["Holism", "Reductionism", "Ecological validity", "Empiricism"], answer: 1, rationale: "Reducing complex behaviour to its simplest biological component is reductionism; holism would consider psychological and social factors too." },
      { type: "mcq", q: "A correlation coefficient (r) can range from:", options: ["0 to 100", "-1 to +1", "1 to 10", "0 to 1 only"], answer: 1, rationale: "r ranges from -1 (perfect negative) through 0 (none) to +1 (perfect positive); it never proves causation." },
      { type: "mcq", q: "In a normal distribution, approximately what proportion of scores fall within one standard deviation of the mean?", options: ["34%", "50%", "68%", "95%"], answer: 2, rationale: "About 68% of scores lie within 1 SD of the mean, and about 95% within 2 SD, in a normal distribution." },
      { type: "mcq", q: "Defining 'stress' as 'salivary cortisol concentration in nmol/L' is an example of:", options: ["Reliability", "Operationalisation", "Deception", "Holism"], answer: 1, rationale: "Operationalisation defines an abstract variable in specific, measurable terms so it can be studied." },
      { type: "mcq", q: "Requiring that participants understand and freely agree before taking part is the ethical principle of:", options: ["Debriefing", "Informed consent", "Anonymity", "Replication"], answer: 1, rationale: "Informed consent is a core research (and clinical) ethical principle transferable to obtaining consent for care." },
      { type: "mcq", q: "The extent to which research findings apply to real-life settings is called:", options: ["Reliability", "Reductionism", "Empiricism", "Ecological validity"], answer: 3, rationale: "Ecological validity is generalisability to real-world contexts, often stronger in naturalistic observation than in laboratory studies." },
      { type: "fill", q: "The model integrating biological, psychological and social factors in health is the ____ model.", accept: ["biopsychosocial", "bio-psycho-social"], rationale: "The biopsychosocial model unifies the three domains of health and illness." },
      { type: "fill", q: "Defining an abstract variable in specific measurable terms so it can be studied is called ____.", accept: ["operationalisation", "operationalization", "operational definition"], rationale: "Operationalisation makes concepts measurable, a prerequisite of empirical study." }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: "bvs-02-sensation-perception",
    unit: "Unit 1 · Foundations of Behavioural Science",
    title: "Sensation & Perception",
    readMinutes: 27,
    summary: "How the senses detect stimuli and how the brain organises and interprets them: transduction, thresholds and psychophysics, attention, Gestalt principles, perceptual constancy, depth cues, perceptual set, illusions, pain perception and gate-control theory, sensory deprivation/overload, and the clinical relevance of perception in nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Sensation versus perception", p: "Sensation is the detection of physical stimuli by sensory receptors and their transduction into neural signals. Perception is the higher-order process by which the brain selects, organises and interprets those signals into a meaningful representation of the world. Sensation is largely a bottom-up, data-driven physiological event; perception adds top-down interpretation driven by expectation, experience, motivation and context. The two are continuous: the same retinal image can yield very different percepts depending on the observer, which is why patient reports of symptoms are interpretations, not neutral readouts." },
      { h: "The sensory systems and transduction", list: [
        "Vision — photoreceptors (rods for dim light and movement; cones for colour and detail) in the retina transduce light.",
        "Hearing (audition) — hair cells in the cochlea transduce sound-wave vibrations.",
        "Touch, pressure, temperature and pain — mechanoreceptors, thermoreceptors and nociceptors in the skin.",
        "Taste (gustation) and smell (olfaction) — chemoreceptors detecting dissolved and airborne molecules.",
        "Proprioception (kinaesthesis) and the vestibular sense — body position, movement and balance.",
        "Transduction is the crucial common step: converting physical stimulus energy into action potentials the brain can process.",
        "Each modality has its own primary cortical processing area (e.g. visual cortex in the occipital lobe)."
      ] },
      { h: "Psychophysics: thresholds", list: [
        "Absolute threshold — the smallest amount of a stimulus detectable 50% of the time (e.g. a candle flame at about 48 km on a clear dark night).",
        "Difference threshold (just noticeable difference, JND) — the smallest change in a stimulus that can be detected 50% of the time.",
        "Weber's law — the JND is a constant proportion (Weber fraction) of the original stimulus, not a fixed amount (e.g. ~2% for weight, ~8% for loudness).",
        "Sensory adaptation — reduced sensitivity to a constant, unchanging stimulus over time (e.g. no longer noticing a smell or the feel of clothing).",
        "Subliminal stimuli fall below the absolute threshold and cannot be reliably reported.",
        "Signal detection theory — detection depends not only on stimulus intensity but on the observer's expectations, motivation and decision criterion (hits, misses, false alarms, correct rejections)."
      ] },
      { h: "Attention and selection", p: "The senses deliver far more information than can be processed, so attention selects a subset for full processing. Selective attention (illustrated by the 'cocktail party' effect) allows focus on one input while filtering others, though salient stimuli — a patient's name, a monitor alarm — can break through the filter. Broadbent's early-selection filter theory and Treisman's attenuation model describe how this selection occurs. Divided attention degrades performance, a key patient-safety issue when nurses multitask (e.g. medication rounds with frequent interruptions), which is why 'do-not-disturb' periods reduce medication errors." },
      { h: "Bottom-up and top-down processing", p: "Bottom-up (data-driven) processing builds perception directly from the incoming sensory data, as in Gibson's direct theory of perception. Top-down (concept-driven) processing uses prior knowledge, context and expectation to interpret ambiguous data, as in Gregory's constructivist theory. Most everyday perception combines both. Top-down processing explains how we read degraded handwriting and recognise a familiar face in poor light, but also why expectation can distort perception — for example, an anxious patient over-interpreting a benign sensation." },
      { h: "Gestalt principles of perceptual organisation", list: [
        "Figure-ground — we separate an object (figure) from its background.",
        "Proximity — elements close together are grouped.",
        "Similarity — similar elements are grouped.",
        "Continuity (good continuation) — we perceive smooth, continuous forms.",
        "Closure — we mentally complete incomplete figures.",
        "Common fate — elements moving together are grouped.",
        "Pragnanz (the law of simplicity) — we perceive the simplest, most stable interpretation available."
      ], figure: {
        caption: "Gestalt principles: the brain organises sensory elements into wholes ('the whole is more than the sum of its parts').",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gestalt grouping principles"><text x="60" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Proximity</text><circle cx="35" cy="60" r="6" fill="#15803D"/><circle cx="50" cy="60" r="6" fill="#15803D"/><circle cx="75" cy="60" r="6" fill="#15803D"/><circle cx="90" cy="60" r="6" fill="#15803D"/><text x="200" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Similarity</text><circle cx="165" cy="60" r="6" fill="#15803D"/><rect x="182" y="54" width="12" height="12" fill="#22C55E"/><circle cx="215" cy="60" r="6" fill="#15803D"/><rect x="232" y="54" width="12" height="12" fill="#22C55E"/><text x="340" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Closure</text><path d="M310 45 A25 25 0 1 1 335 85" fill="none" stroke="#15803D" stroke-width="3"/><text x="460" y="25" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Figure-ground</text><rect x="420" y="40" width="80" height="55" fill="#DCFCE7"/><circle cx="460" cy="67" r="20" fill="#0F4C3A"/></svg>'
      } },
      { h: "Perceptual constancy", p: "Perceptual constancy keeps objects stable despite changing sensory input. Size constancy means a person walking away is not seen as shrinking; shape constancy means a door is seen as rectangular from any angle; colour and brightness constancy mean a white shirt looks white in shade or sun; location constancy keeps the world stable as our eyes move. Constancies show that perception is an active interpretation that corrects the raw, ever-changing retinal image using stored knowledge of the world." },
      { h: "Depth and movement perception", list: [
        "Binocular cues — retinal disparity (the two eyes' slightly different views) and convergence (inward turning of the eyes for near objects).",
        "Monocular cues — relative size, interposition (overlap), texture gradient, linear perspective, height in the visual field, aerial perspective and motion parallax.",
        "Movement perception uses displacement across the retina and stored expectations; apparent motion (the phi phenomenon) underlies film and animation.",
        "Depth cues let the brain reconstruct a three-dimensional world from a two-dimensional retinal image.",
        "Loss of one eye removes binocular cues but monocular cues still allow useful depth judgements."
      ] },
      { h: "Perceptual set and top-down influence", p: "Perceptual set is a readiness to perceive stimuli in a particular way, shaped by expectation, context, motivation, emotion and culture. It explains why a frightened patient may misinterpret a benign bodily sensation as a threatening symptom, why hunger makes food-related words stand out, and why clinicians can 'see' the diagnosis they expect (a source of diagnostic error, related to confirmation bias). It demonstrates top-down processing overriding the raw sensory data." },
      { h: "Illusions", p: "Illusions are systematic errors of perception that reveal how perception is constructed. In the Muller-Lyer illusion, two equal lines appear unequal because of the arrowhead 'fins'; in the Ames room, people seem to change size; the Ponzo illusion uses converging lines to distort size. Illusions arise when normally useful perceptual rules (such as size-distance scaling) are misapplied to atypical stimuli. They prove that perception is an active, sometimes fallible, construction rather than a passive recording of reality." },
      { h: "Perception of pain (gate-control theory)", p: "Pain is a perception, not a fixed readout of tissue damage. Melzack and Wall's gate-control theory proposes a neural 'gate' in the dorsal horn (substantia gelatinosa) of the spinal cord that can be opened or closed. Large-fibre (A-beta) input from rubbing the area or TENS, and descending signals from the brain influenced by attention, emotion and meaning, can 'close the gate' and reduce pain; small-fibre (C and A-delta) input, plus anxiety, focus on the pain and low mood, can 'open' it. This explains why distraction, reassurance and information genuinely reduce a patient's pain and why identical injuries hurt differently.", figure: {
        caption: "Gate-control theory: descending signals and large-fibre input can 'close' the spinal pain gate.",
        svg: '<svg viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gate-control theory of pain"><rect x="200" y="55" width="120" height="50" rx="10" fill="#15803D"/><text x="260" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">SPINAL</text><text x="260" y="94" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">GATE</text><rect x="20" y="20" width="150" height="30" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="95" y="40" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Rub / TENS (opens less)</text><rect x="20" y="110" width="150" height="30" rx="7" fill="#F0FDF4" stroke="#15803D"/><text x="95" y="130" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Anxiety, focus (opens)</text><rect x="350" y="65" width="150" height="30" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="425" y="85" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Brain: pain felt or not</text><line x1="170" y1="35" x2="205" y2="65" stroke="#22C55E" stroke-width="2"/><line x1="170" y1="125" x2="205" y2="95" stroke="#22C55E" stroke-width="2"/><line x1="320" y1="80" x2="348" y2="80" stroke="#0F4C3A" stroke-width="2"/></svg>'
      } },
      { h: "Sensory deprivation and sensory overload", list: [
        "Sensory deprivation — too little varied stimulation (e.g. isolation, immobility, darkness) can cause boredom, disorientation, hallucinations and low mood.",
        "Sensory overload — too much stimulation (constant light, noise, alarms and interruptions) is common in intensive care and can precipitate anxiety and delirium.",
        "ICU delirium is strongly linked to disrupted day-night cues, noise and immobility; restoring orientation, natural light and sleep reduces it.",
        "Both extremes disturb the brain's need for an optimal, patterned level of sensory input.",
        "Nursing measures — clocks, calendars, windows, familiar objects, spectacles/hearing aids, quiet at night — normalise the sensory environment."
      ] },
      { h: "Clinical relevance in nursing", list: [
        "Pain is modulated by attention, emotion and meaning — distraction, relaxation and information are legitimate analgesic aids (gate-control theory).",
        "Sensory deprivation or overload can precipitate confusion and delirium; manage the sensory environment actively.",
        "Impaired senses (poor vision or hearing, delirium, dementia) alter how patients perceive the ward, staff and instructions — correct spectacles and hearing aids matter.",
        "Perceptual set and expectation contribute to the placebo and nocebo effects.",
        "Effective communication requires that information be perceived and interpreted, not merely presented — check understanding.",
        "Anticipating sensory adaptation and thresholds helps in explaining altered sensation (e.g. loss of protective sensation in diabetic neuropathy, where the patient no longer feels injury)."
      ] },
      { h: "Key terms", list: [
        "Transduction — conversion of physical stimulus energy into neural signals.",
        "Bottom-up vs top-down processing — data-driven versus expectation-driven perception.",
        "Absolute vs difference threshold — minimum detectable stimulus versus minimum detectable change.",
        "Perceptual constancy — stable perception despite changing sensory input.",
        "Perceptual set — expectation-driven readiness to perceive in a certain way.",
        "Gate-control theory — spinal and descending modulation of pain perception.",
        "Nocebo effect — negative expectation producing an adverse outcome."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Distinguish sensation from perception and explain bottom-up and top-down processing with a clinical example.",
      "Define absolute and difference thresholds, state Weber's law, and outline signal detection theory.",
      "Describe the Gestalt principles of perceptual organisation with examples.",
      "Explain perceptual constancy and the binocular and monocular cues used in depth perception.",
      "Using gate-control theory, explain how a nurse can reduce a patient's pain without additional analgesia, and describe how to manage sensory overload in intensive care."
    ],
    assessment: [
      { type: "mcq", q: "The conversion of light, sound or pressure into neural signals by receptors is:", options: ["Perception", "Transduction", "Cognition", "Closure"], answer: 1, rationale: "Transduction is the receptor-level conversion of stimulus energy into action potentials; perception is the later interpretation." },
      { type: "mcq", q: "A patient can no longer smell a persistent odour in the room after a few minutes. This illustrates:", options: ["Difference threshold", "Sensory adaptation", "Absolute threshold", "Convergence"], answer: 1, rationale: "Sensory adaptation is reduced responsiveness to a constant, unchanging stimulus over time." },
      { type: "mcq", q: "Weber's law states that the just noticeable difference is:", options: ["A fixed amount", "Zero at high intensity", "A constant proportion of the stimulus", "Independent of the stimulus"], answer: 2, rationale: "The JND is a constant ratio (Weber fraction) of the original stimulus magnitude, not a fixed amount." },
      { type: "mcq", q: "According to signal detection theory, whether a nurse notices a faint alarm depends on stimulus intensity AND:", options: ["Only the alarm volume", "The observer's expectations, motivation and criterion", "The colour of the monitor", "Weber's law alone"], answer: 1, rationale: "Signal detection theory adds the observer's decision criterion, expectation and motivation to pure stimulus intensity." },
      { type: "mcq", q: "Seeing a door as rectangular from any angle despite a changing retinal image is:", options: ["Perceptual set", "Shape constancy", "Sensory adaptation", "Convergence"], answer: 1, rationale: "Shape constancy maintains perceived shape despite the changing retinal projection." },
      { type: "mcq", q: "Retinal disparity and convergence are cues to:", options: ["Colour", "Depth (binocular)", "Loudness", "Taste"], answer: 1, rationale: "These are binocular depth cues arising from the two eyes' differing views and inward turning for near objects." },
      { type: "mcq", q: "An anxious patient interprets a normal heartbeat as a sign of a heart attack. This top-down effect is:", options: ["Perceptual set", "Transduction", "Sensory adaptation", "Absolute threshold"], answer: 0, rationale: "Perceptual set is an expectation- and emotion-driven readiness to perceive stimuli in a particular (here threatening) way." },
      { type: "mcq", q: "A ventilated ICU patient becomes confused amid constant light, noise and interrupted sleep. This is most likely driven by:", options: ["Sensory deprivation alone", "Sensory overload and disrupted day-night cues", "Weber's law", "Retinal disparity"], answer: 1, rationale: "ICU delirium is strongly linked to sensory overload, immobility and loss of normal day-night cues." },
      { type: "mcq", q: "Under gate-control theory, which nursing action is most likely to CLOSE the pain gate?", options: ["Leaving the patient anxious and alone", "Distraction, reassurance and information", "Focusing the patient's attention on the pain", "Increasing environmental noise"], answer: 1, rationale: "Descending signals driven by reduced anxiety, distraction and meaning close the spinal gate and reduce pain perception." },
      { type: "mcq", q: "A negative expectation producing an adverse clinical outcome is the:", options: ["Placebo effect", "Halo effect", "Primacy effect", "Nocebo effect"], answer: 3, rationale: "The nocebo effect is a harmful outcome driven by negative expectation, a top-down perceptual influence." },
      { type: "fill", q: "The conversion of physical stimulus energy into neural signals is called ____.", accept: ["transduction"], rationale: "Transduction converts stimulus energy into neural impulses at the receptor." },
      { type: "fill", q: "Melzack and Wall's theory that a spinal 'gate' modulates pain is the ____-control theory.", accept: ["gate"], rationale: "Gate-control theory explains how pain perception is modulated in the dorsal horn and by descending brain signals." }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: "bvs-03-learning",
    unit: "Unit 1 · Foundations of Behavioural Science",
    title: "Learning: Theories & Principles",
    readMinutes: 28,
    summary: "How experience produces lasting change in behaviour: classical and operant conditioning, acquisition and extinction, schedules of reinforcement, biological preparedness and taste aversion, observational (social) learning, cognitive and insight learning, behaviour modification, and their application to patient education, habit change and nursing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is learning?", p: "Learning is a relatively permanent change in behaviour or in behavioural potential that results from experience, not from maturation, fatigue, illness or injury. 'Behavioural potential' is important: something can be learned (latent learning) but not shown until there is a reason to perform it. Learning is central to nursing because health promotion, patient teaching, rehabilitation and behaviour change all depend on the principles by which people acquire, maintain and lose behaviours. The main paradigms are associative learning (classical and operant conditioning), observational learning and cognitive learning." },
      { h: "Classical (Pavlovian) conditioning", p: "Pavlov showed that a neutral stimulus (NS), repeatedly paired with an unconditioned stimulus (UCS) that reflexively produces an unconditioned response (UCR), becomes a conditioned stimulus (CS) that alone elicits a conditioned response (CR). It is learning by association between two stimuli, and it acts on involuntary, reflexive responses. It explains conditioned emotional responses — anticipatory nausea before chemotherapy, a child's fear of white coats, or a phobia acquired after a frightening experience (as in Watson's 'Little Albert').", figure: {
        caption: "Classical conditioning: a neutral stimulus paired with a UCS becomes a CS that elicits a conditioned response.",
        svg: '<svg viewBox="0 0 540 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Classical conditioning sequence"><defs><marker id="ccArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><text x="270" y="20" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Before → During → After conditioning</text><rect x="20" y="45" width="150" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="95" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">UCS (food)</text><text x="95" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">→ UCR (salivate)</text><rect x="195" y="45" width="160" height="40" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="275" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Bell + food, repeated</text><text x="275" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">(pairing)</text><rect x="380" y="45" width="150" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="455" y="63" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">CS (bell)</text><text x="455" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">→ CR (salivate)</text><line x1="170" y1="65" x2="192" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ccArr)"/><line x1="355" y1="65" x2="377" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ccArr)"/></svg>'
      } },
      { h: "Processes in classical conditioning", list: [
        "Acquisition — the CR is established as the CS and UCS are paired; usually strongest with close (contiguous) and predictive (contingent) timing.",
        "Extinction — the CR fades when the CS is repeatedly presented WITHOUT the UCS.",
        "Spontaneous recovery — a partially extinguished CR reappears after a rest period.",
        "Generalisation — similar stimuli also elicit the CR (a child fearful of one white coat fears all).",
        "Discrimination — learning to respond only to the specific CS and not to similar stimuli.",
        "Higher-order conditioning — an established CS can condition a further neutral stimulus."
      ] },
      { h: "Biological preparedness and taste aversion", p: "Not all associations are learned equally easily. Garcia's work on conditioned taste aversion showed that a single pairing of a novel food with later nausea can produce a lasting aversion, even with a long delay between them — violating the usual need for close, repeated pairing. Seligman's concept of biological preparedness holds that organisms are evolutionarily prepared to learn survival-relevant associations (foods with sickness; snakes and heights with fear) far more readily than arbitrary ones. This explains the durable food aversions patients develop during chemotherapy and the ease of acquiring certain phobias." },
      { h: "Operant (instrumental) conditioning", p: "Thorndike's law of effect states that responses followed by satisfaction are strengthened and those followed by discomfort are weakened; Skinner developed this into operant conditioning — voluntary behaviour is shaped by its consequences. Reinforcement increases the behaviour it follows; punishment decreases it. 'Positive' means a stimulus is added; 'negative' means a stimulus is removed. Learning is by association between a behaviour and its consequence, unlike classical conditioning (association between two stimuli acting on reflexive responses)." },
      { h: "The four contingencies of consequences", list: [
        "Positive reinforcement — adding a pleasant stimulus (praise, reward) to increase a behaviour.",
        "Negative reinforcement — removing an unpleasant stimulus (relief of pain) to increase a behaviour.",
        "Positive punishment — adding an aversive stimulus to decrease a behaviour.",
        "Negative punishment (response cost) — removing a valued stimulus (privilege) to decrease a behaviour.",
        "Primary reinforcers satisfy biological needs (food, warmth); secondary/conditioned reinforcers (money, tokens, praise) acquire value by association.",
        "Shaping reinforces successive approximations toward a target behaviour; chaining links a sequence of behaviours into a routine."
      ] },
      { h: "Schedules of reinforcement", list: [
        "Continuous reinforcement — every response reinforced; fast learning but rapid extinction.",
        "Fixed-ratio — reinforcement after a set number of responses; high rate with a brief post-reinforcement pause.",
        "Variable-ratio — reinforcement after an unpredictable number of responses; the highest, most extinction-resistant response rate (e.g. gambling).",
        "Fixed-interval — reinforcement for the first response after a set time; a 'scalloped' pattern of responding.",
        "Variable-interval — reinforcement after unpredictable time intervals; steady, moderate responding.",
        "Intermittent (partial) reinforcement generally produces behaviour more resistant to extinction than continuous reinforcement (the partial-reinforcement effect)."
      ], figure: {
        caption: "The four operant contingencies: whether a stimulus is added or removed, and whether behaviour increases or decreases.",
        svg: '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Operant conditioning contingency table"><rect x="120" y="20" width="150" height="30" fill="#15803D"/><text x="195" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Add stimulus</text><rect x="290" y="20" width="150" height="30" fill="#15803D"/><text x="365" y="40" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Remove stimulus</text><rect x="10" y="55" width="105" height="55" fill="#0F4C3A"/><text x="62" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">Increase</text><rect x="10" y="115" width="105" height="55" fill="#0F4C3A"/><text x="62" y="147" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">Decrease</text><rect x="120" y="55" width="150" height="55" fill="#DCFCE7" stroke="#15803D"/><text x="195" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">+ reinforcement</text><rect x="290" y="55" width="150" height="55" fill="#DCFCE7" stroke="#15803D"/><text x="365" y="87" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">– reinforcement</text><rect x="120" y="115" width="150" height="55" fill="#F0FDF4" stroke="#15803D"/><text x="195" y="147" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">+ punishment</text><rect x="290" y="115" width="150" height="55" fill="#F0FDF4" stroke="#15803D"/><text x="365" y="147" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">– punishment</text></svg>'
      } },
      { h: "Limitations of punishment", list: [
        "Punishment suppresses a behaviour but teaches no alternative — it says 'not that', never 'do this instead'.",
        "Its effect is often temporary and confined to the punishing situation and person.",
        "It can produce fear, avoidance, aggression and damage to the relationship.",
        "It may model aggression and be imitated (observational learning).",
        "Reinforcing an incompatible, desirable behaviour is generally more effective and more ethical, and this principle guides nursing and parenting advice."
      ] },
      { h: "Observational (social) learning", p: "Bandura demonstrated that people learn by observing and imitating models, without direct reinforcement — shown in the Bobo doll studies. Four processes are required: attention (noticing the model), retention (remembering the behaviour), reproduction (being able to perform it) and motivation (a reason to perform it, including vicarious reinforcement — seeing the model rewarded). Social learning explains how health behaviours, coping styles and even the sick role are acquired from family, peers, media and, importantly, from nurses acting as role models on the ward." },
      { h: "Cognitive and insight learning", p: "Not all learning is stimulus-response. Kohler's chimpanzees showed insight — a sudden reorganisation of a problem into a solution (the 'aha' moment). Tolman demonstrated latent learning (learning that stays hidden until needed) and cognitive maps (internal representations of the environment), showing that learning can occur without immediate reinforcement and be revealed later. These findings support the cognitive view that learners actively construct knowledge, underpinning modern adult-learning theory (andragogy) and patient-education methods." },
      { h: "Behaviour modification in health care", p: "The principles of learning are applied systematically as behaviour modification. Token economies reward target behaviours with tokens exchangeable for rewards. Systematic desensitisation (gradual, graded exposure paired with relaxation, based on reciprocal inhibition) treats phobias and needle fear by extinguishing conditioned anxiety. Biofeedback reinforces control of physiological signals. Contingency management supports smoking cessation, weight management and treatment adherence. These are evidence-based tools nurses use in health promotion, mental health and rehabilitation." },
      { h: "Application to nursing and patient education", list: [
        "Reinforce and praise desired health behaviours promptly to increase adherence.",
        "Use shaping and small, achievable goals in rehabilitation to build success and self-efficacy.",
        "Anticipate and counter conditioned responses (anticipatory nausea, needle fear) using relaxation and graded exposure (desensitisation).",
        "Act as a positive role model, exploiting observational learning.",
        "Recognise that punishment suppresses behaviour but teaches nothing new and can damage the therapeutic relationship — reinforce alternatives instead.",
        "Apply behaviour-modification programmes for weight, smoking and chronic-disease self-management."
      ] },
      { h: "Clinical relevance — key figures and cautions", list: [
        "Timing matters: reinforcement is most effective immediately after the behaviour.",
        "Extinction bursts (a temporary increase in behaviour when reinforcement stops) should be anticipated, not mistaken for failure.",
        "Generalisation must be planned for so skills learned in hospital transfer to home.",
        "Ethical use of behaviour modification requires consent, dignity and the least restrictive approach.",
        "Vicarious reinforcement means patients watch how staff respond to others — a source of both reassurance and anxiety.",
        "Conditioned taste aversions during treatment can cause distressing food refusal that is not deliberate."
      ] },
      { h: "Key terms", list: [
        "Acquisition vs extinction — establishing versus weakening a learned response.",
        "Reinforcement vs punishment — consequences that increase versus decrease behaviour.",
        "Shaping — reinforcing successive approximations to a target behaviour.",
        "Vicarious reinforcement — learning from the observed consequences of another's behaviour.",
        "Systematic desensitisation — graded exposure with relaxation to extinguish conditioned fear.",
        "Biological preparedness — the evolved readiness to learn survival-relevant associations quickly.",
        "Latent learning — learning that is not shown in behaviour until there is a reason to perform it."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define learning and explain classical conditioning, including acquisition, extinction and generalisation, with a nursing example.",
      "Distinguish positive/negative reinforcement from positive/negative punishment using the four-contingency table, and explain the limitations of punishment.",
      "Compare the schedules of reinforcement and explain the partial-reinforcement effect.",
      "Describe Bandura's social learning theory and its four processes, and apply it to the nurse as role model.",
      "Explain how systematic desensitisation and other behaviour-modification methods are used in nursing, and the relevance of conditioned taste aversion."
    ],
    assessment: [
      { type: "mcq", q: "Learning is best defined as a relatively permanent change in behaviour or behavioural potential due to:", options: ["Maturation", "Experience", "Fatigue", "Injury"], answer: 1, rationale: "Learning results from experience, explicitly excluding maturation, fatigue, illness and injury." },
      { type: "mcq", q: "A patient becomes nauseated on entering the chemotherapy waiting room before any drug is given. The waiting room has become a:", options: ["Unconditioned stimulus", "Conditioned stimulus", "Unconditioned response", "Reinforcer"], answer: 1, rationale: "The previously neutral room, paired with chemotherapy, is now a conditioned stimulus eliciting a conditioned nausea response." },
      { type: "mcq", q: "A patient takes analgesia because it removes their pain, and so takes it more often. The pain relief is:", options: ["Positive reinforcement", "Positive punishment", "Negative reinforcement", "Negative punishment"], answer: 2, rationale: "Removing an aversive stimulus (pain) to increase a behaviour (taking analgesia) is negative reinforcement." },
      { type: "mcq", q: "Which schedule produces the highest, most extinction-resistant response rate?", options: ["Continuous", "Fixed-interval", "Variable-ratio", "Fixed-ratio"], answer: 2, rationale: "Variable-ratio schedules generate high, persistent responding, as seen in gambling." },
      { type: "mcq", q: "A nurse praises a stroke patient for each small step toward independent walking. This is:", options: ["Extinction", "Generalisation", "Shaping", "Discrimination"], answer: 2, rationale: "Shaping reinforces successive approximations toward the target behaviour of walking." },
      { type: "mcq", q: "A patient develops a lasting aversion to a food eaten once before chemotherapy nausea, despite the delay. This is best explained by:", options: ["Higher-order conditioning", "Biological preparedness / conditioned taste aversion", "Continuous reinforcement", "Spontaneous recovery"], answer: 1, rationale: "Conditioned taste aversion, reflecting biological preparedness, forms rapidly in a single trial even with a long delay." },
      { type: "mcq", q: "A child fearful after one painful injection now fears all people in white coats. This is:", options: ["Discrimination", "Extinction", "Stimulus generalisation", "Shaping"], answer: 2, rationale: "Generalisation is when stimuli similar to the CS also elicit the conditioned response." },
      { type: "mcq", q: "Treating needle phobia with relaxation plus gradual, graded exposure is:", options: ["A token economy", "Systematic desensitisation", "Positive punishment", "A fixed-ratio schedule"], answer: 1, rationale: "Systematic desensitisation pairs relaxation with graded exposure to extinguish conditioned fear (reciprocal inhibition)." },
      { type: "mcq", q: "Kohler's chimpanzees suddenly solving a problem by reorganising it demonstrates:", options: ["Shaping", "Insight learning", "Generalisation", "Continuous reinforcement"], answer: 1, rationale: "Kohler described insight as sudden perceptual reorganisation of a problem." },
      { type: "mcq", q: "A key limitation of using punishment to change a patient's behaviour is that it:", options: ["Teaches a new desirable behaviour", "Suppresses behaviour without teaching an alternative and may harm the relationship", "Always produces permanent change", "Builds self-efficacy"], answer: 1, rationale: "Punishment suppresses without teaching an alternative and risks fear, avoidance and relationship damage; reinforcing alternatives is preferred." },
      { type: "fill", q: "The decline of a learned response when reinforcement or pairing stops is called ____.", accept: ["extinction"], rationale: "Extinction is the weakening of a response when reinforcement or CS-UCS pairing ends." },
      { type: "fill", q: "Learning that is not shown in behaviour until there is a reason to perform it is called ____ learning.", accept: ["latent"], rationale: "Tolman's latent learning stays hidden until motivation to display it appears." }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: "bvs-04-memory-cognition",
    unit: "Unit 1 · Foundations of Behavioural Science",
    title: "Memory & Cognition",
    readMinutes: 28,
    summary: "The multi-store and working-memory models, encoding-storage-retrieval, types of long-term memory, levels of processing, theories of forgetting, the serial position effect, eyewitness/false memory, cognition and problem-solving, heuristics and biases, and their relevance to patient information-giving, consent and adherence.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Memory as a system", p: "Memory is the set of processes by which we encode, store and retrieve information. Cognition is the broader term for all mental activity — attention, memory, language, reasoning, decision-making and problem-solving. Together they determine how patients take in, retain and act on the health information nurses provide, and how nurses themselves reason and make clinical decisions. Memory is not a single faculty but several dissociable systems, some of which fail independently in disease." },
      { h: "The multi-store model (Atkinson-Shiffrin)", list: [
        "Sensory memory — a very brief, large-capacity store for raw sensory input (iconic ~0.5 s for vision, echoic ~2-4 s for hearing).",
        "Short-term memory (STM) — limited capacity (about 7 ± 2 items, Miller) and brief duration (~15-30 s) unless rehearsed.",
        "Long-term memory (LTM) — effectively unlimited capacity and potentially lifelong duration.",
        "Attention transfers information from sensory to short-term memory; maintenance and elaborative rehearsal transfer it to long-term memory.",
        "The model is supported by the serial position curve and by amnesic patients (e.g. HM) with intact STM but impaired transfer to LTM."
      ], figure: {
        caption: "The multi-store model: attention and rehearsal move information from sensory to short-term to long-term memory.",
        svg: '<svg viewBox="0 0 560 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Multi-store model of memory"><defs><marker id="msArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="45" width="140" height="45" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="90" y="66" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">SENSORY</text><text x="90" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">large, &lt;1 s</text><rect x="205" y="45" width="150" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="280" y="66" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">SHORT-TERM</text><text x="280" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">7±2, ~20 s</text><rect x="400" y="45" width="140" height="45" rx="8" fill="#15803D"/><text x="470" y="66" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">LONG-TERM</text><text x="470" y="82" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#DCFCE7">unlimited</text><line x1="160" y1="67" x2="202" y2="67" stroke="#0F4C3A" stroke-width="2" marker-end="url(#msArr)"/><text x="181" y="40" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">attention</text><line x1="355" y1="67" x2="397" y2="67" stroke="#0F4C3A" stroke-width="2" marker-end="url(#msArr)"/><text x="376" y="40" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">rehearsal</text></svg>'
      } },
      { h: "Working memory (Baddeley & Hitch)", p: "The working-memory model replaces passive STM with an active system: a central executive that allocates attention, supported by the phonological loop (verbal and acoustic information), the visuospatial sketchpad (visual and spatial information) and the episodic buffer (integrating information across the subsystems and with LTM). Working memory is where information is actively manipulated, and its limited capacity determines how much a patient can absorb and process at any one time. It is easily overwhelmed by anxiety, pain and distraction, which is why over-loading a patient with information fails." },
      { h: "Types of long-term memory", list: [
        "Explicit (declarative) — consciously recalled; subdivided into episodic (personal events, time-tagged) and semantic (facts, concepts and meanings).",
        "Implicit (non-declarative) — expressed through performance rather than conscious recall; includes procedural memory (motor skills) and conditioning.",
        "Prospective memory — remembering to perform an intended action in the future (e.g. taking medication at the right time).",
        "In dementia, episodic memory often fails early while procedural and older semantic memory are relatively preserved — a key nursing insight.",
        "In amnesia (e.g. after hippocampal damage), new explicit memories cannot form (anterograde) although procedural learning may continue."
      ] },
      { h: "Encoding, storage and retrieval", p: "Encoding transforms input into a storable code (acoustic, visual or, most durably, semantic). The levels-of-processing model (Craik & Lockhart) holds that deeper, semantic (meaning-based) processing produces stronger, more durable memory than shallow (physical or acoustic) processing. Storage maintains information over time; consolidation stabilises it, partly during sleep. Retrieval is aided by cues; the encoding-specificity principle states that recall is best when retrieval cues match the encoding context (context- and state-dependent memory). Recall (generating the answer) is harder than recognition (identifying it) — relevant when nurses check patient understanding." },
      { h: "The serial position effect", p: "When people learn a list, they best remember the first items (primacy effect, attributed to rehearsal into LTM) and the last items (recency effect, attributed to their presence in STM). Items in the middle are most poorly recalled, producing the U-shaped serial position curve. This has a direct clinical application: the most important instruction should be given first or last, not buried in the middle of a long explanation, and should be repeated." },
      { h: "Theories of forgetting", list: [
        "Trace decay — the memory trace fades with time if not used (mainly in STM/sensory memory).",
        "Displacement — new items push out old ones from limited-capacity STM.",
        "Interference — proactive (old learning disrupts new) and retroactive (new learning disrupts old).",
        "Retrieval failure — information is stored but temporarily inaccessible (cue-dependent forgetting; the 'tip of the tongue' state).",
        "Motivated forgetting / repression — anxiety-laden memories are pushed from conscious awareness (psychodynamic view).",
        "Organic causes — brain injury, dementia, delirium, hypoxia, alcohol and some drugs impair encoding and retrieval."
      ] },
      { h: "Eyewitness memory and false memories", p: "Memory is reconstructive, not a recording. Loftus showed that leading questions and post-event information can reshape what people 'remember' (the misinformation effect), and that entirely false memories can be implanted. Schemas fill gaps with expected, not actual, detail. This has practical importance for history-taking: nurses should use open, non-leading questions, corroborate critical details, and recognise that a patient's honest account may be inaccurately reconstructed, especially after a frightening or traumatic event." },
      { h: "Cognition, thinking and problem-solving", p: "Thinking manipulates mental representations (concepts, images, schemas) to reason and solve problems. Problem-solving strategies include algorithms (systematic, exhaustive, guaranteed to work but slow) and heuristics (mental shortcuts that are fast and efficient but error-prone). Mental set (persisting with a familiar approach) and functional fixedness (seeing objects only in their usual use) can block solutions. Schemas are organised knowledge structures that guide expectation and can cause both efficient processing and systematic bias." },
      { h: "Heuristics and cognitive biases", list: [
        "Availability heuristic — judging likelihood by how easily examples come to mind (recent, vivid events seem more common).",
        "Representativeness heuristic — judging by resemblance to a stereotype, ignoring base rates.",
        "Anchoring — over-relying on the first piece of information encountered.",
        "Confirmation bias — seeking and favouring evidence that fits an existing belief or diagnosis.",
        "Framing effect — decisions differ depending on whether options are described as gains or losses.",
        "These biases affect both patients' understanding and clinicians' decisions, contributing to diagnostic error — a key patient-safety concept."
      ], figure: {
        caption: "Dual-process thinking: fast, automatic heuristics (System 1) versus slow, effortful reasoning (System 2).",
        svg: '<svg viewBox="0 0 500 140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dual-process System 1 and System 2 thinking"><rect x="30" y="30" width="190" height="80" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="125" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">System 1</text><text x="125" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">fast, automatic</text><text x="125" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">heuristics, bias-prone</text><rect x="280" y="30" width="190" height="80" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="375" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">System 2</text><text x="375" y="76" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">slow, effortful</text><text x="375" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">analytic, accurate</text></svg>'
      } },
      { h: "Application to nursing", list: [
        "Give information in small chunks, as working memory is limited; use chunking and repetition.",
        "Prioritise and present the most important instructions first (primacy) or last (recency), never buried in the middle.",
        "Use meaningful, concrete, jargon-free language and link new information to what the patient already knows (semantic, deep encoding).",
        "Reinforce verbal information with written and visual aids and use teach-back to check retention (recall, not just recognition).",
        "Anticipate that anxiety, pain, illness, ageing and medication impair encoding and retrieval.",
        "Use open, non-leading questions to avoid distorting the patient's reconstructed memory.",
        "Support prospective memory (medication) with reminders, dosette boxes, alarms and routines."
      ] },
      { h: "Clinical relevance — assessing memory and cognition", list: [
        "Cognitive impairment (delirium, dementia, intoxication) invalidates simple information-giving and may affect capacity to consent.",
        "In dementia, use preserved procedural and long-term semantic memory (familiar routines, life history, reminiscence).",
        "Distinguish reversible delirium from dementia by its acute onset and fluctuating course.",
        "Emotional (flashbulb) memories of frightening clinical events are vivid and durable — sensitive communication matters.",
        "Repeated, spaced information ('little and often', the spacing effect) is retained better than a single long session."
      ] },
      { h: "Key terms", list: [
        "Chunking — grouping items into larger meaningful units to expand STM capacity.",
        "Levels of processing — deeper (semantic) processing yields better memory.",
        "Encoding specificity — retrieval improves when cues match encoding conditions.",
        "Serial position effect — superior recall of first (primacy) and last (recency) items.",
        "Misinformation effect — post-event information distorting a reconstructed memory.",
        "Heuristic — an efficient but fallible mental shortcut.",
        "Prospective memory — remembering to carry out a future intended action."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Describe the multi-store model of memory and the role of attention and rehearsal.",
      "Explain the working-memory model and its four components with clinical implications.",
      "Distinguish explicit and implicit long-term memory and explain their pattern of loss in dementia.",
      "Describe the main theories of forgetting and the serial position effect, and explain why memory is reconstructive.",
      "Apply the principles of memory and cognition to giving information to an anxious, newly diagnosed patient."
    ],
    assessment: [
      { type: "mcq", q: "The approximate capacity of short-term memory (Miller's 'magic number') is:", options: ["2 ± 1 items", "Unlimited", "7 ± 2 items", "20 ± 5 items"], answer: 2, rationale: "Miller's 'magic number' is about 7 plus or minus 2 items, so information should be chunked." },
      { type: "mcq", q: "In the working-memory model, the component that allocates attention among the others is the:", options: ["Visuospatial sketchpad", "Central executive", "Phonological loop", "Episodic buffer"], answer: 1, rationale: "The central executive directs attention and coordinates the phonological loop, sketchpad and episodic buffer." },
      { type: "mcq", q: "A patient with early dementia forgets recent conversations but can still ride a bicycle. Which memory is relatively preserved?", options: ["Episodic memory", "Procedural memory", "Sensory memory", "Prospective memory"], answer: 1, rationale: "Procedural (implicit) memory for skills is relatively spared in early dementia, while episodic memory fails early." },
      { type: "mcq", q: "Memory for how to give an injection, expressed through performance, is:", options: ["Semantic", "Episodic", "Procedural", "Prospective"], answer: 2, rationale: "Procedural memory is implicit memory for skills and actions." },
      { type: "mcq", q: "A nurse links new diabetes information to what the patient already knows about their diet. This uses:", options: ["Deep (semantic) processing", "Trace decay", "Displacement", "Proactive interference"], answer: 0, rationale: "Relating material to existing knowledge is deep semantic processing, which produces stronger memory (levels of processing)." },
      { type: "mcq", q: "When newly learned medication names disrupt recall of previously learned ones, this is:", options: ["Proactive interference", "Trace decay", "Retroactive interference", "Encoding specificity"], answer: 2, rationale: "Retroactive interference is when new learning disrupts recall of older material." },
      { type: "mcq", q: "The best-remembered items at the END of a spoken list of instructions reflect the:", options: ["Primacy effect", "Recency effect", "Anchoring bias", "Availability heuristic"], answer: 1, rationale: "The recency effect is superior recall of the last items, still held in short-term memory." },
      { type: "mcq", q: "A patient's account of an accident is subtly changed by the way the nurse phrases a question. This demonstrates the:", options: ["Encoding-specificity principle", "Misinformation effect", "Spacing effect", "Primacy effect"], answer: 1, rationale: "Leading or suggestive questions can distort reconstructed memory (Loftus's misinformation effect)." },
      { type: "mcq", q: "A clinician judges a rare disease as likely simply because they saw a case last week. This bias is the:", options: ["Anchoring heuristic", "Availability heuristic", "Encoding specificity", "Recency effect"], answer: 1, rationale: "The availability heuristic overweights events that come easily to mind, such as recent or vivid cases." },
      { type: "mcq", q: "A systematic, step-by-step method guaranteed to reach the correct solution is a(n):", options: ["Heuristic", "Algorithm", "Schema", "Anchor"], answer: 1, rationale: "Algorithms are systematic and guaranteed but slow, unlike fast, fallible heuristics." },
      { type: "fill", q: "Grouping information into larger meaningful units to expand short-term memory is called ____.", accept: ["chunking"], rationale: "Chunking increases the amount held in short-term memory." },
      { type: "fill", q: "The superior recall of the FIRST items in a list, attributed to rehearsal into LTM, is the ____ effect.", accept: ["primacy"], rationale: "The primacy effect reflects rehearsal of early items into long-term memory." }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: "bvs-05-motivation",
    unit: "Unit 2 · The Psychology of the Person",
    title: "Motivation (including Maslow's Hierarchy)",
    readMinutes: 27,
    summary: "The concept and types of motivation; instinct, drive-reduction, arousal, incentive, cognitive and humanistic theories; Maslow's hierarchy of needs; McClelland's needs; intrinsic versus extrinsic motivation and self-determination; motivational conflict; self-efficacy; motivational interviewing; and applications to adherence, recovery and nurse wellbeing.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is motivation?", p: "Motivation is the internal process that initiates, directs, energises and sustains goal-directed behaviour. It answers why people begin, choose, persist at or abandon an activity, and why the same person acts differently at different times. Motivation has three measurable properties: direction (what goal), intensity (how much effort) and persistence (how long). In nursing, motivation is central to whether patients adopt healthy behaviours, adhere to treatment, engage in rehabilitation and take responsibility for self-care, and to whether nurses sustain compassionate practice." },
      { h: "Types of motivation", list: [
        "Biological (primary) motives — innate, homeostatic needs such as hunger, thirst, sleep, temperature regulation and sex.",
        "Psychological/social (secondary) motives — learned needs such as achievement, affiliation, power and approval.",
        "Intrinsic motivation — behaviour performed for its own inherent satisfaction, interest or meaning.",
        "Extrinsic motivation — behaviour performed for external rewards or to avoid punishment.",
        "Conscious versus unconscious motives — some drivers of behaviour lie outside awareness (psychodynamic view).",
        "Approach versus avoidance motives — moving toward desired goals versus away from feared outcomes."
      ] },
      { h: "Theories of motivation", list: [
        "Instinct theory — behaviour driven by innate, fixed biological programmes (largely superseded as an explanation of complex behaviour).",
        "Drive-reduction theory (Hull) — a physiological need creates a drive (tension) that motivates behaviour to restore homeostasis; explains primary but not all motives.",
        "Arousal theory — organisms seek an optimum level of arousal; the Yerkes-Dodson law states performance is best at moderate arousal and worse at very low or very high arousal.",
        "Incentive theory — behaviour is 'pulled' by external goals (incentives), not only 'pushed' by internal drives.",
        "Cognitive theories — expectations, goals and beliefs (e.g. self-efficacy, expectancy-value) direct motivation.",
        "Humanistic theory — motivation to grow and fulfil one's potential (Maslow, Rogers)."
      ] },
      { h: "The Yerkes-Dodson law", p: "The Yerkes-Dodson law describes an inverted-U relationship between arousal and performance: performance improves with arousal up to an optimum point, then declines as arousal becomes excessive. The optimum is lower for difficult or complex tasks and higher for simple, well-learned ones. Clinically, this explains why moderate pre-operative concern can aid engagement, while extreme anxiety impairs the patient's ability to understand information, retain instructions and cooperate.", figure: {
        caption: "Yerkes-Dodson law: performance is best at a moderate (optimum) level of arousal.",
        svg: '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Yerkes-Dodson inverted U curve"><line x1="45" y1="160" x2="440" y2="160" stroke="#0F4C3A" stroke-width="2"/><line x1="45" y1="20" x2="45" y2="160" stroke="#0F4C3A" stroke-width="2"/><path d="M55 155 Q230 15 425 155" fill="none" stroke="#15803D" stroke-width="3"/><line x1="240" y1="45" x2="240" y2="160" stroke="#86EFAC" stroke-width="1.5" stroke-dasharray="4"/><text x="240" y="178" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">optimum arousal</text><text x="240" y="14" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">peak performance</text><text x="30" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A" transform="rotate(-90 30 90)">Performance</text></svg>'
      } },
      { h: "Maslow's hierarchy of needs", p: "Maslow proposed that human needs are arranged in a hierarchy, with lower (deficiency) needs generally requiring some satisfaction before higher (growth) needs become motivating. The five classic levels ascend from physiological, through safety, love/belonging and esteem, to self-actualisation. The model is influential in nursing for prioritising care — a patient's airway, pain and safety are addressed before higher psychosocial needs — though in practice the levels overlap, individuals vary, and the strict sequential order has been criticised (people pursue higher needs even when lower ones are unmet, e.g. an artist who starves for their work).", figure: {
        caption: "Maslow's hierarchy of needs — lower deficiency needs generally take priority before higher growth needs.",
        svg: '<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Maslow hierarchy of needs pyramid"><polygon points="230,20 300,70 160,70" fill="#0F4C3A"/><text x="230" y="55" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Self-actualisation</text><polygon points="160,72 300,72 340,122 120,122" fill="#15803D"/><text x="230" y="103" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Esteem</text><polygon points="120,124 340,124 380,174 80,174" fill="#22C55E"/><text x="230" y="155" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Love &amp; belonging</text><polygon points="80,176 380,176 415,222 45,222" fill="#86EFAC"/><text x="230" y="205" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Safety</text><polygon points="45,224 415,224 445,254 15,254" fill="#DCFCE7"/><text x="230" y="245" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Physiological</text></svg>'
      } },
      { h: "McClelland's needs and achievement motivation", list: [
        "Need for achievement (nAch) — the drive to accomplish, master and meet standards of excellence.",
        "Need for affiliation (nAff) — the drive for close, warm relationships and acceptance.",
        "Need for power (nPow) — the drive to influence, lead and control others.",
        "These learned social motives vary between individuals and predict how patients and colleagues respond to goals, feedback and teamwork.",
        "High achievement motivation, with realistic goals, supports engagement in rehabilitation and self-management."
      ] },
      { h: "Intrinsic vs extrinsic motivation and self-determination", p: "Self-determination theory (Deci & Ryan) argues that quality motivation depends on satisfying three basic psychological needs: autonomy (feeling in control of one's actions), competence (feeling effective) and relatedness (feeling connected to others). Intrinsic motivation produces more durable behaviour change than extrinsic motivation. Excessive external reward can even undermine pre-existing intrinsic motivation — the over-justification effect. This explains why coercive health messaging often fails and why fostering patient autonomy and confidence improves adherence." },
      { h: "Conflict of motives", list: [
        "Approach-approach — choosing between two attractive options; usually easily resolved.",
        "Avoidance-avoidance — choosing between two unattractive options ('the lesser of two evils'); tends to be prolonged and stressful.",
        "Approach-avoidance — one goal has both attractive and unattractive features (e.g. surgery that is feared but curative).",
        "Multiple approach-avoidance — several options each with pros and cons (common in real health decisions).",
        "Unresolved motivational conflict is a common source of stress, ambivalence and delay in patients."
      ], figure: {
        caption: "Types of motivational conflict.",
        svg: '<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Types of motivational conflict"><rect x="20" y="25" width="220" height="30" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="130" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Approach-approach: two goods</text><rect x="260" y="25" width="220" height="30" rx="7" fill="#F0FDF4" stroke="#15803D"/><text x="370" y="45" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Avoidance-avoidance: two bads</text><rect x="20" y="65" width="220" height="30" rx="7" fill="#F0FDF4" stroke="#15803D"/><text x="130" y="85" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Approach-avoidance: one goal, both</text><rect x="260" y="65" width="220" height="30" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="370" y="85" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Multiple approach-avoidance</text><rect x="120" y="105" width="260" height="30" rx="7" fill="#15803D"/><text x="250" y="125" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#F0FDF4">Unresolved conflict → stress, delay</text></svg>'
      } },
      { h: "Self-efficacy and locus of control", p: "Bandura's concept of self-efficacy — a person's belief in their ability to succeed at a specific task — is one of the strongest predictors of health behaviour and persistence. High self-efficacy increases effort and resilience after setbacks. It is built through four sources: mastery experiences (success), vicarious experience (seeing similar others succeed), verbal persuasion (encouragement) and managing physiological/emotional arousal. A patient with strong self-efficacy and an internal locus of control is far more likely to engage in self-care." },
      { h: "Motivational interviewing", p: "Motivational interviewing (Miller & Rollnick) is an evidence-based, patient-centred counselling method to strengthen a person's own motivation and commitment to change by exploring and resolving ambivalence. Its principles include expressing empathy, developing discrepancy (between current behaviour and goals), rolling with resistance rather than confronting it, and supporting self-efficacy. The technique elicits 'change talk' from the patient. It is widely used by nurses for smoking cessation, alcohol reduction, diet and adherence, and is more effective than direct persuasion or scare tactics." },
      { h: "Application to nursing", list: [
        "Prioritise care using a needs framework — meet physiological and safety needs first.",
        "Strengthen intrinsic motivation and self-efficacy rather than relying on threats or coercion.",
        "Use motivational interviewing to resolve ambivalence about behaviour change.",
        "Support autonomy, competence and relatedness to improve adherence and engagement.",
        "Recognise and manage motivational conflict (e.g. fear of a beneficial procedure).",
        "Keep arousal near the optimum — reduce extreme anxiety before giving important information (Yerkes-Dodson).",
        "Attend to nurses' own motivation to prevent burnout and sustain compassionate care."
      ] },
      { h: "Clinical relevance — assessing and building motivation", list: [
        "Explore WHY a patient is or is not engaging, rather than simply labelling them 'non-compliant'.",
        "Identify whether the block is a physiological need (pain, exhaustion), a belief, low self-efficacy, or unresolved ambivalence.",
        "Set small, achievable, specific goals so early success builds self-efficacy and intrinsic motivation.",
        "Match the approach to the patient's readiness and needs (needs framework plus motivational interviewing).",
        "Avoid coercion and excessive rewards, which can undermine intrinsic motivation (over-justification effect)."
      ] },
      { h: "Key terms", list: [
        "Homeostasis — the body's tendency to maintain a stable internal state, central to drive theory.",
        "Yerkes-Dodson law — performance is optimal at a moderate level of arousal (inverted-U).",
        "Self-efficacy — belief in one's ability to succeed at a specific task; a powerful motivator (Bandura).",
        "Over-justification effect — external reward undermining pre-existing intrinsic motivation.",
        "Self-determination theory — autonomy, competence and relatedness underpin quality motivation.",
        "Need for achievement — McClelland's learned drive to meet standards of excellence.",
        "Motivational interviewing — resolving ambivalence to strengthen a person's own motivation to change."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define motivation and distinguish intrinsic from extrinsic motivation, with health examples.",
      "Compare drive-reduction, arousal (Yerkes-Dodson) and incentive theories of motivation.",
      "Describe Maslow's hierarchy of needs, its application to prioritising nursing care, and two criticisms.",
      "Explain the types of motivational conflict and the four sources of self-efficacy.",
      "Describe motivational interviewing and how a nurse uses it to help a patient change a health behaviour."
    ],
    assessment: [
      { type: "mcq", q: "Motivation is best defined as the process that:", options: ["Detects sensory stimuli", "Initiates, directs, energises and sustains goal-directed behaviour", "Stores information", "Regulates body temperature only"], answer: 1, rationale: "Motivation energises and directs goal-directed behaviour, with direction, intensity and persistence." },
      { type: "mcq", q: "A patient exercises simply because they enjoy it, not for any reward. This is:", options: ["Extrinsic motivation", "Intrinsic motivation", "Negative reinforcement", "A primary drive"], answer: 1, rationale: "Intrinsic motivation arises from the inherent satisfaction of the activity itself." },
      { type: "mcq", q: "Drive-reduction theory (Hull) links motivation to restoring:", options: ["Homeostasis", "Self-actualisation", "Optimum arousal", "External reward"], answer: 0, rationale: "Hull's drive-reduction theory motivates behaviour to restore homeostatic balance from a need-generated drive." },
      { type: "mcq", q: "A patient is so terrified before surgery that they cannot take in the consent information. This best illustrates:", options: ["The over-justification effect", "The Yerkes-Dodson law (excessive arousal impairs performance)", "Self-actualisation", "Approach-approach conflict"], answer: 1, rationale: "Excessive arousal (extreme anxiety) is past the optimum and impairs cognitive performance per Yerkes-Dodson." },
      { type: "mcq", q: "In Maslow's hierarchy, ensuring a patient's airway and pain relief before addressing loneliness reflects prioritising:", options: ["Esteem over safety", "Lower (physiological) needs before higher needs", "Self-actualisation first", "Belonging before physiology"], answer: 1, rationale: "Lower deficiency needs (physiological, safety) generally take priority before higher psychosocial needs." },
      { type: "mcq", q: "The highest level of Maslow's hierarchy is:", options: ["Love and belonging", "Esteem", "Self-actualisation", "Safety"], answer: 2, rationale: "Self-actualisation, realising one's full potential, is the peak growth need." },
      { type: "mcq", q: "Self-determination theory identifies which three basic psychological needs?", options: ["Hunger, thirst, sleep", "Autonomy, competence, relatedness", "Power, wealth, status", "Attention, retention, motivation"], answer: 1, rationale: "Deci and Ryan specify autonomy, competence and relatedness as the basis of quality motivation." },
      { type: "mcq", q: "Deciding whether to have a feared but curative operation is a conflict of the ____ type.", options: ["Approach-approach", "Avoidance-avoidance", "Approach-avoidance", "None"], answer: 2, rationale: "One goal (surgery) is both attractive (cure) and aversive (fear) — approach-avoidance." },
      { type: "mcq", q: "A patient's belief that they can successfully manage their own insulin injections is best described as:", options: ["Self-esteem", "Self-efficacy", "Self-concept", "Self-actualisation"], answer: 1, rationale: "Self-efficacy is task-specific confidence in one's ability to succeed, a strong predictor of health behaviour." },
      { type: "mcq", q: "The counselling method that strengthens a patient's OWN motivation by resolving ambivalence is:", options: ["Motivational interviewing", "Systematic desensitisation", "Confrontation", "Token economy"], answer: 0, rationale: "Motivational interviewing is patient-centred, empathic and resolves ambivalence rather than confronting or coercing." },
      { type: "fill", q: "The body's tendency to maintain a stable internal state, central to drive theory, is ____.", accept: ["homeostasis"], rationale: "Drive-reduction theory is built on restoring homeostasis." },
      { type: "fill", q: "Bandura's term for the belief in one's ability to succeed at a specific task is self-____.", accept: ["efficacy"], rationale: "Self-efficacy is task-specific confidence and a powerful motivator of health behaviour." }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: "bvs-06-emotion-stress",
    unit: "Unit 2 · The Psychology of the Person",
    title: "Emotion, Stress & Coping",
    readMinutes: 28,
    summary: "The components and theories of emotion; the physiology of the acute (SAM) and chronic (HPA-axis) stress response; the general adaptation syndrome; the transactional (appraisal) model; problem- and emotion-focused coping; social support; the stress-illness link and psychoneuroimmunology; burnout; and psychological care of the stressed patient.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Nature and components of emotion", p: "An emotion is a complex reaction with three interacting components: physiological arousal (autonomic and endocrine changes), a subjective feeling (the conscious experience), and an expressive/behavioural element (facial expression, tone, action tendencies). Emotions are adaptive — fear prepares for danger, disgust avoids contamination, and social emotions regulate relationships. Ekman identified six broadly universal basic emotions (happiness, sadness, fear, anger, surprise, disgust). Emotions profoundly shape how patients experience illness, remember events and interact with carers." },
      { h: "Theories of emotion", list: [
        "James-Lange theory — we feel emotion because we perceive our bodily reactions ('we are afraid because we tremble'); emotion follows physiology.",
        "Cannon-Bard theory — physiological arousal and the emotional feeling occur simultaneously and independently.",
        "Schachter-Singer two-factor theory — emotion = physiological arousal + cognitive labelling of that arousal using context.",
        "Appraisal (cognitive) theories (Lazarus) — emotion depends on how an event is interpreted, not the event itself; cognition precedes emotion.",
        "The appraisal view underpins cognitive-behavioural interventions, which change emotion by changing interpretation."
      ] },
      { h: "The physiology of the acute stress response", p: "Acute stress activates the sympathetic-adrenal-medullary (SAM) system — the fight-or-flight response. The sympathetic nervous system and the adrenal medulla release adrenaline (epinephrine) and noradrenaline, raising heart rate, blood pressure, respiratory rate and blood glucose, dilating pupils, diverting blood to skeletal muscle and inhibiting digestion. This prepares the body for rapid action within seconds and is highly adaptive in short bursts, but harmful if triggered chronically." },
      { h: "The HPA axis and chronic stress", p: "Prolonged or repeated stress activates the hypothalamic-pituitary-adrenal (HPA) axis: the hypothalamus releases CRH, the anterior pituitary releases ACTH, and the adrenal cortex releases cortisol (the main glucocorticoid stress hormone). Cortisol mobilises energy but, when sustained, suppresses immune function, delays wound healing, impairs hippocampal memory, and contributes to hypertension, central obesity and insulin resistance — a direct psychosomatic pathway from mind to body. Negative feedback normally shuts the axis off, but chronic stress can dysregulate it.", figure: {
        caption: "The HPA axis: sustained stress drives cortisol release with widespread bodily effects.",
        svg: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HPA axis stress pathway"><defs><marker id="hpaArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs>' +
          [["Hypothalamus","CRH",15],["Pituitary","ACTH",185],["Adrenal cortex","cortisol",355]].map(function(p){var x=p[2];return '<rect x="'+x+'" y="55" width="150" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="'+(x+75)+'" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">'+p[0]+'</text><text x="'+(x+75)+'" y="93" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">'+p[1]+'</text>';}).join('') +
          '<line x1="165" y1="77" x2="183" y2="77" stroke="#0F4C3A" stroke-width="2" marker-end="url(#hpaArr)"/><line x1="335" y1="77" x2="353" y2="77" stroke="#0F4C3A" stroke-width="2" marker-end="url(#hpaArr)"/><text x="260" y="135" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">cortisol → ↓immunity, ↓wound healing, ↑BP, ↓memory</text></svg>'
      } },
      { h: "General adaptation syndrome (Selye)", list: [
        "Alarm stage — the body mobilises resources (fight-or-flight) on encountering a stressor; resistance briefly dips then rises.",
        "Resistance stage — the body adapts and copes while the stressor persists, maintaining high physiological output at a cost.",
        "Exhaustion stage — prolonged stress depletes resources, resistance collapses, and illness, breakdown or (in Selye's animal work) death can follow.",
        "The GAS describes a non-specific bodily response to any prolonged demand (stressor).",
        "Selye also distinguished eustress (beneficial, motivating stress) from distress (harmful stress)."
      ], figure: {
        caption: "Selye's general adaptation syndrome: resistance rises through alarm and resistance, then collapses at exhaustion.",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="General adaptation syndrome curve"><line x1="50" y1="160" x2="450" y2="160" stroke="#0F4C3A" stroke-width="2"/><line x1="50" y1="20" x2="50" y2="160" stroke="#0F4C3A" stroke-width="2"/><text x="35" y="90" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A" transform="rotate(-90 35 90)">Resistance</text><path d="M50 120 L110 145 L180 55 L320 55 L420 150" fill="none" stroke="#15803D" stroke-width="3"/><line x1="150" y1="160" x2="150" y2="20" stroke="#86EFAC" stroke-width="1" stroke-dasharray="4"/><line x1="330" y1="160" x2="330" y2="20" stroke="#86EFAC" stroke-width="1" stroke-dasharray="4"/><text x="100" y="178" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Alarm</text><text x="240" y="178" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Resistance</text><text x="390" y="178" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Exhaustion</text></svg>'
      } },
      { h: "The transactional (appraisal) model", p: "Lazarus and Folkman defined stress as a transaction between the person and environment: it arises when perceived demands are appraised as exceeding one's resources to cope. Primary appraisal judges whether an event is a threat, harm/loss or challenge; secondary appraisal judges whether one can cope and what options exist; reappraisal revises these as the situation changes. Because stress depends on appraisal, two people facing the same event (e.g. a diagnosis) respond differently — and appraisal can be changed, which is the basis of psychological intervention." },
      { h: "Sources of stress and life events", list: [
        "Major life events — the Holmes-Rahe Social Readjustment Rating Scale scores events (bereavement, divorce, illness) in 'life change units'; higher totals predict greater illness risk.",
        "Daily hassles — minor everyday irritations that accumulate and predict distress well.",
        "Chronic stressors — poverty, caregiving, work overload, discrimination.",
        "Occupational stress — role conflict, high demand with low control, and emotional labour (relevant to nursing).",
        "Hospitalisation itself — loss of control, uncertainty, pain and an unfamiliar environment."
      ] },
      { h: "Coping strategies", list: [
        "Problem-focused coping — acting on the stressor itself (seeking information, planning, problem-solving); most effective when the situation is controllable.",
        "Emotion-focused coping — managing the emotional response (relaxation, reappraisal, seeking support, acceptance); most useful when the stressor cannot be changed.",
        "Approach versus avoidance coping — engaging with versus escaping the stressor.",
        "Adaptive coping matches the strategy to the controllability of the stressor.",
        "Maladaptive coping — denial, substance use, rumination and disengagement, which relieve distress briefly but worsen outcomes."
      ] },
      { h: "Social support and the stress buffer", p: "Social support — emotional, informational, instrumental (practical) and appraisal support — protects health. The buffering hypothesis holds that support cushions the impact of stressors, partly by improving appraisal and coping; the direct-effects hypothesis holds that support benefits health regardless of stress. Loneliness and social isolation are themselves major risk factors for morbidity and mortality, comparable to smoking. Mobilising family and social support is therefore a genuine clinical intervention, not a soft extra." },
      { h: "Stress, illness and psychoneuroimmunology", p: "Chronic stress is linked to cardiovascular disease, hypertension, impaired immunity, slower wound healing (demonstrated in controlled studies of caregivers and students), worse mental health and poorer recovery. Psychoneuroimmunology studies these mind-immune pathways, largely mediated by sustained cortisol and sympathetic activity. Hospitalisation is itself a major stressor which nurses can reduce through information, predictability and support, thereby improving measurable outcomes such as analgesic use and length of stay." },
      { h: "Burnout in health professionals", p: "Burnout is a syndrome of chronic occupational stress with three components (Maslach): emotional exhaustion, depersonalisation/cynicism toward patients, and reduced sense of personal accomplishment. It is common in nursing due to high demand, emotional labour and limited control, and it harms both staff wellbeing and patient safety. Protective factors include social support, autonomy, clinical supervision, realistic workload, self-care and meaning in work. Recognising burnout in oneself and colleagues is a professional responsibility." },
      { h: "Application to nursing", list: [
        "Reduce uncertainty and restore control through clear, honest information — giving both procedural (what will happen) and sensory (what it will feel like) information before procedures reduces distress and aids recovery.",
        "Teach relaxation, controlled breathing and cognitive reappraisal techniques.",
        "Mobilise social support and involve family.",
        "Assess coping style and encourage strategies matched to the situation's controllability.",
        "Recognise the physical harms of chronic stress (poor healing, infection risk) and act to reduce them.",
        "Recognise stress and burnout in oneself and colleagues, using self-care, peer support and clinical supervision."
      ] },
      { h: "Clinical relevance — recognising and managing stress", list: [
        "Screen for stressors at every contact: pain, uncertainty, loss of control, financial and family worry.",
        "Watch for physical signs (tachycardia, hypertension, poor sleep, poor healing) and psychological signs (anxiety, irritability, withdrawal) of chronic stress.",
        "Time important information for when arousal is moderate, not at peak anxiety.",
        "Distinguish adaptive from maladaptive coping and gently redirect denial or substance use.",
        "Protect staff wellbeing: monitor for burnout, use supervision and self-care to sustain compassion."
      ] },
      { h: "Key terms", list: [
        "Fight-or-flight (SAM system) — acute sympathetic-adrenal response to threat via adrenaline.",
        "HPA axis — the hormonal stress pathway culminating in cortisol release.",
        "General adaptation syndrome — Selye's alarm, resistance and exhaustion stages.",
        "Appraisal — the cognitive evaluation determining whether an event is stressful.",
        "Problem- vs emotion-focused coping — acting on the stressor versus managing the emotion.",
        "Psychoneuroimmunology — the study of how psychological states affect the immune system.",
        "Burnout — emotional exhaustion, depersonalisation and reduced accomplishment from chronic work stress."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Describe the three components of emotion and compare two theories of emotion.",
      "Explain the physiology of the acute (SAM) and chronic (HPA-axis) stress responses and their health consequences.",
      "Describe Selye's general adaptation syndrome and relate it to psychoneuroimmunology.",
      "Explain the transactional model of stress, including primary and secondary appraisal, and the role of social support.",
      "Distinguish problem-focused and emotion-focused coping, and describe burnout and how it is prevented in nursing."
    ],
    assessment: [
      { type: "mcq", q: "The three components of an emotion are physiological arousal, subjective feeling and:", options: ["Memory storage", "An expressive/behavioural response", "Sensory adaptation", "A spinal reflex"], answer: 1, rationale: "Emotion combines arousal, subjective feeling and expressive behaviour." },
      { type: "mcq", q: "The theory that emotion equals physiological arousal PLUS a cognitive label from context is the:", options: ["James-Lange theory", "Cannon-Bard theory", "Schachter-Singer two-factor theory", "Drive theory"], answer: 2, rationale: "Schachter-Singer's two-factor theory: emotion = arousal + cognitive labelling of that arousal." },
      { type: "mcq", q: "The immediate fight-or-flight response to a sudden threat is driven mainly by:", options: ["The parasympathetic system", "The sympathetic-adrenal-medullary system (adrenaline)", "The HPA axis (cortisol)", "A somatic reflex arc"], answer: 1, rationale: "The acute response is the fast SAM system releasing adrenaline; the HPA/cortisol pathway dominates in prolonged stress." },
      { type: "mcq", q: "Slow wound healing and increased infection risk in a chronically stressed patient are best explained by sustained:", options: ["Insulin", "Melatonin", "Cortisol", "Adrenaline surges only"], answer: 2, rationale: "Sustained cortisol from the HPA axis suppresses immunity and delays wound healing (psychoneuroimmunology)." },
      { type: "mcq", q: "In Selye's model, the stage of resource depletion and possible breakdown is:", options: ["Alarm", "Resistance", "Exhaustion", "Adaptation"], answer: 2, rationale: "The exhaustion stage is when prolonged stress depletes the body's resources." },
      { type: "mcq", q: "In the transactional model, judging 'can I cope with this and what are my options?' is:", options: ["Primary appraisal", "Secondary appraisal", "The alarm stage", "Displacement"], answer: 1, rationale: "Secondary appraisal evaluates coping resources and options; primary appraisal evaluates the threat." },
      { type: "mcq", q: "For a stressor the patient CANNOT change (e.g. a terminal diagnosis), the most appropriate coping to encourage is:", options: ["Problem-focused only", "Emotion-focused (support, reappraisal, acceptance)", "Denial", "Ignoring the patient"], answer: 1, rationale: "Emotion-focused coping is most adaptive when the stressor is uncontrollable." },
      { type: "mcq", q: "A nurse with emotional exhaustion, cynicism toward patients and a low sense of accomplishment is showing:", options: ["Eustress", "Burnout", "Self-actualisation", "The alarm stage"], answer: 1, rationale: "Maslach's three components of burnout are emotional exhaustion, depersonalisation and reduced personal accomplishment." },
      { type: "mcq", q: "The buffering hypothesis states that social support:", options: ["Increases cortisol", "Removes all stressors", "Causes learned helplessness", "Cushions the impact of stressors on health"], answer: 3, rationale: "The buffering hypothesis holds that social support reduces the harmful impact of stress." },
      { type: "mcq", q: "The field studying how psychological states affect immune function is:", options: ["Psychophysics", "Psychoneuroimmunology", "Psychometrics", "Psychoanalysis"], answer: 1, rationale: "Psychoneuroimmunology examines mind-immune interactions such as stress-related immunosuppression." },
      { type: "fill", q: "Selye's three-stage non-specific response to prolonged stress is the general ____ syndrome.", accept: ["adaptation"], rationale: "The general adaptation syndrome has alarm, resistance and exhaustion stages." },
      { type: "fill", q: "The main glucocorticoid stress hormone released by the adrenal cortex via the HPA axis is ____.", accept: ["cortisol"], rationale: "Cortisol is the principal HPA-axis stress hormone with widespread immune and metabolic effects." }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: "bvs-07-personality",
    unit: "Unit 2 · The Psychology of the Person",
    title: "Personality",
    readMinutes: 28,
    summary: "The definition and theories of personality — psychodynamic, trait (Eysenck and the Big Five), humanistic and behavioural/social-cognitive — psychosexual stages and defence mechanisms, the person-situation debate, personality assessment, personality and health (Type A, Type D, hardiness, locus of control), and the nursing relevance of individual differences.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is personality?", p: "Personality is the relatively stable and enduring pattern of thoughts, feelings and behaviours that distinguishes one individual from another and shows consistency across situations and over time. The word derives from the Latin persona (mask). Understanding personality helps nurses anticipate how different patients will react to illness, information, dependency and stress, and how to individualise care and communication rather than treat everyone identically." },
      { h: "Psychodynamic theory: structure of the mind (Freud)", p: "Freud proposed a mind largely unconscious, divided into three structures. The id (present from birth) is the reservoir of unconscious pleasure-seeking drives operating on the pleasure principle. The ego is the reality-based, largely conscious mediator operating on the reality principle. The superego is the internalised moral conscience and ego-ideal. Anxiety arising from conflict between these structures is managed by ego-defence mechanisms. Recognising this helps nurses interpret puzzling emotional reactions to illness rather than dismissing them.", figure: {
        caption: "Freud's structural model: id, ego and superego, mostly below the level of awareness.",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Freud id ego superego iceberg"><line x1="20" y1="70" x2="460" y2="70" stroke="#15803D" stroke-width="1.5" stroke-dasharray="5"/><text x="70" y="60" font-family="sans-serif" font-size="9" fill="#15803D">conscious</text><text x="70" y="88" font-family="sans-serif" font-size="9" fill="#15803D">unconscious</text><rect x="150" y="25" width="180" height="34" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="240" y="47" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">EGO (reality principle)</text><rect x="150" y="90" width="180" height="34" rx="7" fill="#F0FDF4" stroke="#15803D"/><text x="240" y="112" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">SUPEREGO (morality)</text><rect x="150" y="135" width="180" height="34" rx="7" fill="#15803D"/><text x="240" y="157" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">ID (pleasure principle)</text></svg>'
      } },
      { h: "Ego-defence mechanisms", list: [
        "Repression — unconsciously excluding threatening thoughts from awareness (the master defence).",
        "Denial — refusing to accept a painful reality (e.g. denying a serious diagnosis).",
        "Projection — attributing one's own unacceptable feelings to another person.",
        "Rationalisation — offering plausible but false reasons for behaviour.",
        "Displacement — redirecting an emotion from its true target to a safer one (e.g. anger at illness taken out on staff).",
        "Regression — reverting to behaviour of an earlier developmental stage under stress.",
        "Reaction formation — expressing the opposite of an unacceptable impulse.",
        "Sublimation — channelling unacceptable impulses into socially valued activity (the most adaptive defence)."
      ] },
      { h: "Freud's psychosexual stages (overview)", p: "Freud proposed that personality develops through psychosexual stages — oral (0-1 yr), anal (1-3 yr), phallic (3-6 yr), latency (6-puberty) and genital (puberty onward) — each focused on a different source of gratification. Excessive frustration or gratification could cause fixation, leaving traces in adult personality (e.g. an 'oral' or 'anal-retentive' character). Although the specific stages are widely criticised and largely unsupported empirically, the broader ideas of the unconscious, early experience and defence mechanisms remain influential in understanding emotional reactions to illness." },
      { h: "Trait theories and the Big Five", list: [
        "Trait theories describe personality as a set of stable dimensions on which people differ; traits are relatively consistent and predict behaviour on average.",
        "Allport distinguished cardinal, central and secondary traits; Cattell used factor analysis to derive 16 personality factors (16PF).",
        "Eysenck proposed core dimensions of extraversion-introversion and neuroticism-stability (later adding psychoticism), with a biological basis in cortical arousal and autonomic reactivity.",
        "The Five-Factor Model (Big Five / OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.",
        "Conscientiousness predicts health-protective behaviour and longevity; neuroticism predicts greater symptom-reporting, distress and poorer coping.",
        "Traits are dimensional (people fall on a continuum) rather than categorical types."
      ], figure: {
        caption: "The Big Five (OCEAN) personality dimensions.",
        svg: '<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Big Five personality dimensions"><rect x="30" y="20" width="420" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="40" y="38" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">O — Openness to experience</text><rect x="30" y="52" width="420" height="26" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="40" y="70" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">C — Conscientiousness</text><rect x="30" y="84" width="420" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="40" y="102" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">E — Extraversion</text><rect x="30" y="116" width="420" height="26" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="40" y="134" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">A — Agreeableness</text><rect x="30" y="148" width="420" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="40" y="166" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">N — Neuroticism</text></svg>'
      } },
      { h: "Humanistic theory (Rogers, Maslow)", p: "Humanistic theorists focus on the self and the drive toward growth and self-actualisation. Rogers distinguished the self-concept from the ideal self; a large gap (incongruence) causes distress. He argued psychological health requires unconditional positive regard — acceptance without conditions of worth — whereas conditions of worth imposed in childhood distort the self. This directly informs the therapeutic nurse-patient relationship, built on the 'core conditions' of warmth (unconditional positive regard), empathy and genuineness (congruence)." },
      { h: "Behavioural and social-cognitive theories", p: "Behaviourists explain personality as learned patterns of response shaped by reinforcement and the environment, with little role for inner traits. Social-cognitive theorists (Bandura, Mischel) add cognition: personality reflects the reciprocal interaction of the person, behaviour and environment (reciprocal determinism), including beliefs such as self-efficacy and locus of control. Mischel emphasised that behaviour is situation-sensitive, challenging the assumption of rigid cross-situational consistency (the person-situation debate)." },
      { h: "The person-situation debate", p: "How consistent is personality across situations? Mischel's review found that behaviour is often better predicted by the situation than by broad traits, provoking the person-situation debate. The modern resolution is interactionism: behaviour arises from the interaction of stable dispositions with situational demands, and traits predict behaviour best when aggregated across many situations. For nurses this means avoiding over-confident judgements about a patient's 'character' from a single stressful encounter." },
      { h: "Personality assessment", list: [
        "Self-report questionnaires (e.g. EPQ for Eysenck's factors, NEO-PI-R for the Big Five, MMPI) — objective and standardised, but open to social-desirability and response bias.",
        "Projective tests (e.g. Rorschach inkblots, Thematic Apperception Test) — aim to reveal unconscious material; criticised for low reliability and validity.",
        "Rating scales, behavioural observation and structured interviews.",
        "Q-sort and other idiographic methods for the individual case.",
        "All assessment must consider reliability, validity, standardisation and cultural appropriateness."
      ] },
      { h: "Personality and health", p: "Personality is linked to health outcomes. The Type A behaviour pattern (competitiveness, time-urgency, hostility) — especially the hostility/anger component — is associated with coronary heart disease. The Type D ('distressed') personality (high negative affect plus social inhibition) predicts poorer cardiac prognosis. Locus of control (internal vs external) influences whether patients believe they can affect their own health and thus their engagement in self-care; a hardy personality (the three Cs: commitment, control, challenge) is protective against the effects of stress." },
      { h: "Nursing relevance", list: [
        "Individualise communication and care to the patient's personality and coping style.",
        "Recognise defence mechanisms (denial, displacement) as understandable protective responses, not obstruction.",
        "Foster an internal health locus of control and self-efficacy to support self-care.",
        "Provide unconditional positive regard, empathy and congruence in the therapeutic relationship.",
        "Be alert to Type A hostility and Type D distress as cardiac risk factors and offer psychological support.",
        "Avoid labelling and stereotyping patients by personality or by a single trait or single encounter."
      ] },
      { h: "Clinical relevance — individual differences in care", list: [
        "Expect introverts and extraverts to differ in their need for social contact, stimulation and quiet during recovery.",
        "Anticipate that highly neurotic patients report more symptoms and distress and need extra reassurance.",
        "Support conscientious patients' adherence, and actively scaffold self-care for those low in conscientiousness.",
        "Interpret defence mechanisms (denial, displacement) as coping, and respond with patience rather than confrontation.",
        "Never reduce a patient to a single trait or 'type' — traits are dimensions and behaviour is situation-sensitive."
      ] },
      { h: "Key terms", list: [
        "Id, ego, superego — Freud's three structures of the mind.",
        "Ego-defence mechanism — unconscious strategy to reduce anxiety.",
        "Trait — a stable dimension of personality on which people differ.",
        "Reciprocal determinism — mutual influence of person, behaviour and environment (Bandura).",
        "Locus of control — belief about whether outcomes are due to oneself (internal) or external forces.",
        "Hardiness — the stress-resistant profile of commitment, control and challenge.",
        "Congruence — consistency between self-concept and experience (Rogers)."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define personality and describe Freud's structure of the mind and the main ego-defence mechanisms.",
      "Describe the trait approach, comparing Eysenck's dimensions with the Five-Factor (Big Five) model.",
      "Explain the humanistic view of personality and its relevance to the therapeutic relationship.",
      "Compare self-report and projective methods of personality assessment, and outline the person-situation debate.",
      "Discuss the relationship between personality and health, using Type A, Type D, hardiness and locus of control."
    ],
    assessment: [
      { type: "mcq", q: "Personality is best described as a relatively ____ pattern of thoughts, feelings and behaviour.", options: ["Random", "Stable and enduring", "Temporary", "Purely physical"], answer: 1, rationale: "Personality is enduring and shows consistency across situations and over time." },
      { type: "mcq", q: "In Freud's model, the structure operating on the reality principle and mediating between drives and conscience is the:", options: ["Id", "Ego", "Superego", "Libido"], answer: 1, rationale: "The ego is the reality-based mediator between the id's drives and the superego's morality." },
      { type: "mcq", q: "A newly diagnosed cancer patient insists the biopsy 'must be a mistake' and refuses to discuss it. This defence is:", options: ["Denial", "Projection", "Sublimation", "Regression"], answer: 0, rationale: "Denial is refusing to accept a painful reality, a common early reaction to serious diagnosis." },
      { type: "mcq", q: "A frightened patient shouts angrily at the nurse rather than at their illness. This defence is:", options: ["Repression", "Displacement", "Rationalisation", "Sublimation"], answer: 1, rationale: "Displacement redirects an emotion from its true source (the illness) onto a safer target (the nurse)." },
      { type: "mcq", q: "The Big Five factors are Openness, Conscientiousness, Extraversion, Agreeableness and:", options: ["Neuroticism", "Psychoticism", "Intelligence", "Aggression"], answer: 0, rationale: "OCEAN = Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism." },
      { type: "mcq", q: "Which Big Five trait most predicts health-protective behaviour and longevity?", options: ["Neuroticism", "Conscientiousness", "Openness", "Agreeableness"], answer: 1, rationale: "Conscientiousness is linked to healthier behaviour, better adherence and longer life." },
      { type: "mcq", q: "Rogers argued that acceptance of a person without conditions of worth is:", options: ["Reciprocal determinism", "Unconditional positive regard", "Reinforcement", "Projection"], answer: 1, rationale: "Unconditional positive regard is central to Rogers' humanistic theory and to the therapeutic relationship." },
      { type: "mcq", q: "The mutual influence of person, behaviour and environment (Bandura) is called:", options: ["Reciprocal determinism", "The pleasure principle", "The alarm reaction", "Congruence"], answer: 0, rationale: "Reciprocal determinism describes the two-way influence among person, behaviour and environment." },
      { type: "mcq", q: "The stress-resistant personality profile of commitment, control and challenge is called:", options: ["Type A", "Type D", "Hardiness", "Neuroticism"], answer: 2, rationale: "Hardiness (the three Cs) buffers the harmful effects of stress on health." },
      { type: "mcq", q: "A patient who believes recovery depends entirely on fate or the doctors, not themselves, has a(n):", options: ["Internal locus of control", "External locus of control", "Hardy personality", "High self-efficacy"], answer: 1, rationale: "External locus of control attributes outcomes to outside forces, reducing engagement in self-care." },
      { type: "fill", q: "An unconscious strategy used by the ego to reduce anxiety is an ego-____ mechanism.", accept: ["defence", "defense"], rationale: "Ego-defence mechanisms reduce anxiety arising from inner conflict." },
      { type: "fill", q: "Redirecting an emotion from its real target onto a safer one is the defence mechanism of ____.", accept: ["displacement"], rationale: "Displacement shifts an emotion (e.g. anger) from its true source to a safer target." }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: "bvs-08-intelligence",
    unit: "Unit 2 · The Psychology of the Person",
    title: "Intelligence",
    readMinutes: 27,
    summary: "The concept and theories of intelligence, measurement, the deviation IQ and the normal distribution, reliability/validity/standardisation and cultural bias, the nature-nurture debate and the Flynn effect, intellectual disability and its preventable causes, emotional intelligence, cognitive screening, and the nursing relevance of cognitive ability.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "What is intelligence?", p: "Intelligence is the general capacity to learn from experience, reason, solve problems, think abstractly and adapt effectively to the environment. There is no single agreed definition, but most involve learning, abstract reasoning and adaptation. In nursing, a patient's cognitive ability affects how they understand information, give valid consent, remember and follow instructions, weigh risks, and manage complex self-care such as insulin adjustment or anticoagulation." },
      { h: "Theories of intelligence", list: [
        "Spearman's two-factor theory — a general intelligence factor (g) underlies all mental tasks, plus specific abilities (s), derived by factor analysis.",
        "Thurstone — several primary mental abilities (verbal, numerical, spatial, reasoning, memory, perceptual speed) rather than a single g.",
        "Cattell-Horn — fluid intelligence (reasoning with novel problems; declines with age) versus crystallised intelligence (accumulated knowledge; well maintained).",
        "Gardner's multiple intelligences — several relatively independent intelligences (linguistic, logical-mathematical, spatial, musical, bodily-kinaesthetic, interpersonal, intrapersonal, naturalistic).",
        "Sternberg's triarchic theory — analytical, creative and practical intelligence.",
        "Emotional intelligence (Salovey & Mayer; Goleman) — perceiving, understanding, using and managing emotions; highly relevant to caring professions."
      ] },
      { h: "Measurement of intelligence and the IQ", p: "Intelligence is measured by standardised tests such as the Stanford-Binet and the Wechsler scales (WAIS for adults, WISC for children). The intelligence quotient (IQ) was originally mental age divided by chronological age, multiplied by 100 (Stern's ratio IQ). Modern tests use a deviation IQ that compares a person's score with the average for their age group, set to a mean of 100 and a standard deviation of 15. An IQ of 100 is exactly average, and the score expresses how far a person deviates from their age norm." },
      { h: "Reliability, validity and standardisation of tests", list: [
        "Standardisation — administering and scoring in a uniform way, with norms from a large, representative sample.",
        "Reliability — the test gives consistent results (test-retest, split-half, internal consistency).",
        "Validity — the test measures what it claims to measure (content, construct, criterion) and predicts relevant outcomes.",
        "Cultural bias — tests may disadvantage groups whose language or experience differs from the norm sample.",
        "A useful intelligence test must be standardised, reliable, valid and, as far as possible, culture-fair."
      ] },
      { h: "Distribution of intelligence", p: "IQ scores in the population approximate a normal (bell-shaped) distribution centred on 100. About 68% of people score within one standard deviation (85-115) and about 95% within two (70-130). Scores below about 70 (roughly two SDs below the mean) may indicate intellectual disability, while scores above about 130 indicate giftedness. The bell shape reflects the many additive genetic and environmental influences on a polygenic, multifactorial trait.", figure: {
        caption: "The normal distribution of IQ, mean 100 and standard deviation 15.",
        svg: '<svg viewBox="0 0 480 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal distribution of IQ"><line x1="40" y1="150" x2="450" y2="150" stroke="#0F4C3A" stroke-width="2"/><path d="M40 150 Q120 148 160 120 Q210 60 245 50 Q280 60 330 120 Q370 148 450 150" fill="#DCFCE7" stroke="#15803D" stroke-width="2.5"/><line x1="245" y1="50" x2="245" y2="150" stroke="#15803D" stroke-width="1.5" stroke-dasharray="4"/><text x="245" y="168" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">100</text><text x="160" y="168" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">85</text><text x="330" y="168" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">115</text><text x="245" y="40" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">mean = 100, SD = 15 (~68% score 85-115)</text></svg>'
      } },
      { h: "Nature, nurture and intelligence", p: "Intelligence results from the interaction of genetic and environmental factors. Twin and adoption studies show a substantial heritable component (identical twins, even reared apart, are more alike than fraternal twins), but environment is also crucial: nutrition (in pregnancy and early childhood), education, cognitive stimulation, socioeconomic status, and health all matter. Deprivation lowers, and enrichment can raise, measured intelligence (the Flynn effect shows population IQ rising over generations). This underlines the importance of maternal and child health, in which nurses play a major role." },
      { h: "Intellectual disability", p: "Intellectual disability is characterised by significantly below-average intellectual functioning (roughly IQ below 70) TOGETHER WITH deficits in adaptive behaviour (everyday conceptual, social and practical skills), arising before adulthood (the developmental period). Both criteria are required — a low IQ alone is not sufficient. Severity ranges from mild (about 85% of cases) through moderate and severe to profound; most people with intellectual disability have the mild form and can achieve considerable independence." },
      { h: "Causes and prevention of intellectual disability", list: [
        "Genetic and chromosomal — e.g. Down syndrome (trisomy 21), fragile X, phenylketonuria (PKU).",
        "Prenatal — maternal infection (rubella, congenital syphilis), fetal alcohol syndrome, severe iodine deficiency, malnutrition.",
        "Perinatal — birth asphyxia (hypoxia), extreme prematurity, birth injury, kernicterus.",
        "Postnatal — severe malnutrition, meningitis/encephalitis, head injury, lead poisoning, untreated PKU or congenital hypothyroidism.",
        "Many causes are PREVENTABLE through good perinatal care — iodine and folate supplementation, immunisation, safe delivery, newborn screening and avoiding alcohol in pregnancy — a key public-health nursing role."
      ], figure: {
        caption: "Timing of preventable causes of intellectual disability.",
        svg: '<svg viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prenatal perinatal postnatal causes"><rect x="20" y="35" width="140" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="90" y="55" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Prenatal</text><text x="90" y="70" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">rubella, alcohol, iodine</text><rect x="180" y="35" width="140" height="45" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="250" y="55" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Perinatal</text><text x="250" y="70" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">asphyxia, prematurity</text><rect x="340" y="35" width="140" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="410" y="55" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Postnatal</text><text x="410" y="70" text-anchor="middle" font-family="sans-serif" font-size="8" fill="#0F4C3A">meningitis, malnutrition</text></svg>'
      } },
      { h: "Emotional intelligence in nursing", p: "Emotional intelligence (EI) comprises perceiving emotions (in self and others), using emotions to facilitate thought, understanding emotions and managing emotions. In nursing, high EI predicts better therapeutic relationships, teamwork, communication and resilience, and lower burnout. Unlike traditional IQ, EI can be actively developed through reflective practice, feedback and clinical supervision, making it a legitimate professional development goal for the degree-level nurse." },
      { h: "Cognitive assessment in practice", list: [
        "Screening tools (e.g. MMSE, MoCA, AMTS) assess cognition rapidly at the bedside, not full IQ.",
        "A drop from a person's own baseline matters more than a single absolute score.",
        "Acute change suggests delirium; gradual change suggests dementia; both require action.",
        "Sensory impairment, language, anxiety, low education and low mood can lower scores independently of true ability.",
        "Cognitive status directly affects capacity to consent and the level of support a patient needs."
      ] },
      { h: "Nursing relevance", list: [
        "Assess each patient's level of understanding and adapt communication accordingly.",
        "Support informed consent by checking genuine comprehension, not just agreement.",
        "Provide extra time, simple concrete language, repetition and written/visual aids for patients with cognitive difficulty.",
        "Recognise and help prevent modifiable causes of intellectual disability (nutrition, immunisation, safe delivery, screening).",
        "Value and develop emotional intelligence in oneself for compassionate, effective, therapeutic care.",
        "Never equate intelligence with human worth or with the right to self-determination."
      ] },
      { h: "Key terms", list: [
        "g factor — general intelligence underlying performance across tasks (Spearman).",
        "Fluid vs crystallised intelligence — reasoning ability versus accumulated knowledge (Cattell-Horn).",
        "IQ — a standardised deviation score (mean 100, SD 15) comparing performance with an age norm.",
        "Emotional intelligence — perceiving, understanding and managing emotions.",
        "Adaptive behaviour — everyday skills for independent living, part of the definition of intellectual disability.",
        "Flynn effect — the generational rise in measured population IQ.",
        "Standardisation, reliability, validity — the technical requirements of a good test."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define intelligence and outline three theories of intelligence.",
      "Explain how intelligence is measured, what the deviation IQ represents, and the requirements of a good test.",
      "Discuss the roles of nature and nurture in intelligence, referring to twin studies and the Flynn effect.",
      "Define intellectual disability and list its preventable causes and the nurse's preventive role.",
      "Explain the relevance of intelligence and emotional intelligence to nursing practice."
    ],
    assessment: [
      { type: "mcq", q: "Spearman's theory proposed a single underlying factor of general intelligence called:", options: ["s", "g", "IQ", "EQ"], answer: 1, rationale: "Spearman's 'g' is general intelligence underlying all mental tasks, alongside specific abilities (s)." },
      { type: "mcq", q: "Reasoning ability with novel problems, which tends to decline with age, is:", options: ["Crystallised intelligence", "Fluid intelligence", "Emotional intelligence", "Practical intelligence"], answer: 1, rationale: "Fluid intelligence handles novel problems and declines with age; crystallised knowledge is maintained." },
      { type: "mcq", q: "Modern IQ tests set the mean and standard deviation at:", options: ["50 and 10", "100 and 15", "120 and 20", "75 and 25"], answer: 1, rationale: "The deviation IQ uses a mean of 100 and a standard deviation of 15." },
      { type: "mcq", q: "Approximately what percentage of people score within one SD of the mean (IQ 85-115)?", options: ["34%", "50%", "68%", "95%"], answer: 2, rationale: "In a normal distribution about 68% fall within one standard deviation of the mean." },
      { type: "mcq", q: "A nurse who accurately reads and manages patients' emotions is showing high:", options: ["Fluid intelligence", "Emotional intelligence", "The g factor", "Adaptive behaviour"], answer: 1, rationale: "Emotional intelligence is perceiving, understanding and managing emotions, vital in caring professions." },
      { type: "mcq", q: "A diagnosis of intellectual disability requires below-average IQ together with deficits in:", options: ["Adaptive behaviour", "Height", "Vision", "Hearing"], answer: 0, rationale: "Both significantly low IQ AND adaptive-behaviour deficits (before adulthood) are required." },
      { type: "mcq", q: "Which is a PREVENTABLE cause of intellectual disability that a nurse can help address?", options: ["Iodine deficiency in pregnancy", "A fixed genetic mutation already present", "Random chance", "Adult education level"], answer: 0, rationale: "Iodine deficiency (like birth asphyxia and rubella) is preventable through good perinatal and public-health care." },
      { type: "mcq", q: "The finding that population IQ scores have risen across generations is called the:", options: ["Halo effect", "Flynn effect", "Placebo effect", "Primacy effect"], answer: 1, rationale: "The Flynn effect is the generational rise in measured IQ, highlighting environmental influence." },
      { type: "mcq", q: "That identical twins are more similar in IQ than fraternal twins mainly supports the role of:", options: ["Environment only", "Genetics (heritability)", "Test bias", "Pure chance"], answer: 1, rationale: "Greater similarity of identical twins indicates a substantial genetic contribution to intelligence." },
      { type: "mcq", q: "A test that gives consistent results on repeated administration is said to be:", options: ["Valid", "Reliable", "Biased", "Standardised only"], answer: 1, rationale: "Reliability is consistency of measurement; validity is whether it measures the intended construct." },
      { type: "fill", q: "Spearman's general intelligence factor is denoted by the lowercase letter ____.", accept: ["g"], rationale: "'g' is Spearman's general intelligence factor." },
      { type: "fill", q: "Everyday conceptual, social and practical skills required for independent living are called ____ behaviour.", accept: ["adaptive"], rationale: "Adaptive behaviour is essential, alongside IQ, to defining intellectual disability." }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: "bvs-09-attitudes",
    unit: "Unit 3 · Social Behaviour & Communication",
    title: "Attitudes, Beliefs & Behaviour Change",
    readMinutes: 28,
    summary: "The structure and formation of attitudes; attitude-behaviour consistency and cognitive dissonance; persuasion and the elaboration-likelihood model; health-behaviour models (Health Belief Model, Theory of Planned Behaviour, transtheoretical stages of change); fear appeals and protection motivation; and their application to health promotion and adherence.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Attitudes, beliefs and values", p: "An attitude is a relatively enduring evaluation — favourable or unfavourable — of a person, object, idea or behaviour. Attitudes shape how people respond to health messages, treatment and illness, and are a central target of health promotion. A belief is a cognition held to be true (e.g. 'smoking causes cancer'); a value is a broad, abstract guiding principle (e.g. valuing family or health). Attitudes typically follow from underlying beliefs and values, so lasting change often requires addressing beliefs, not just delivering facts." },
      { h: "The tripartite structure of attitudes (ABC)", list: [
        "Affective component — feelings and emotions toward the object.",
        "Behavioural (conative) component — the tendency or intention to act toward it.",
        "Cognitive component — beliefs and thoughts about the object.",
        "For example, a smoker may believe smoking is harmful (cognitive), feel anxious about quitting (affective) and continue smoking (behavioural) — showing the components can conflict.",
        "Attitudes vary in strength, accessibility and centrality; strong, central attitudes are harder to change but predict behaviour better."
      ] },
      { h: "Formation of attitudes", p: "Attitudes are learned through direct experience, classical conditioning (pairing an object with an emotion), operant conditioning (reinforcement of expressed attitudes), and observational learning from family, peers, culture and media. Mere exposure can increase liking (the mere-exposure effect). Because attitudes are learned, they can be changed — the basis of health education. Strong, personally relevant attitudes formed through direct experience are more resistant to change than second-hand ones." },
      { h: "Attitude-behaviour consistency", p: "Attitudes do not always predict behaviour (the classic LaPiere study). The link is strengthened when attitudes are strong, specific, stable and salient, when they match the behaviour in level of specificity (the principle of compatibility), and when situational and social pressures are weak. This gap explains why simply changing attitudes (e.g. knowing smoking is harmful) often fails to change behaviour, and why intention-focused models such as the Theory of Planned Behaviour were developed." },
      { h: "Cognitive dissonance", p: "Festinger's theory of cognitive dissonance holds that holding two inconsistent cognitions, or acting against one's attitude, creates an uncomfortable state of tension that motivates change. People reduce dissonance by changing the attitude, changing the behaviour, adding consonant cognitions, or trivialising the inconsistency. Dissonance can be deliberately harnessed in health counselling — for example, helping a patient notice the gap between valuing their children and continuing to smoke — to prompt genuine, self-generated behaviour change.", figure: {
        caption: "Cognitive dissonance: inconsistency creates tension that motivates change.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cognitive dissonance process"><defs><marker id="cdArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="45" width="140" height="42" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="85" y="63" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">Two inconsistent</text><text x="85" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">cognitions</text><rect x="180" y="45" width="140" height="42" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="250" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">Tension / discomfort</text><rect x="345" y="45" width="140" height="42" rx="8" fill="#15803D"/><text x="415" y="63" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">Change attitude</text><text x="415" y="78" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#F0FDF4">or behaviour</text><line x1="155" y1="66" x2="177" y2="66" stroke="#0F4C3A" stroke-width="2" marker-end="url(#cdArr)"/><line x1="320" y1="66" x2="342" y2="66" stroke="#0F4C3A" stroke-width="2" marker-end="url(#cdArr)"/></svg>'
      } },
      { h: "Persuasion and attitude change", list: [
        "Source — credible, trustworthy, expert and likeable communicators are more persuasive (directly relevant to the nurse's role).",
        "Message — clear, two-sided, personally relevant messages work best; moderate fear paired with a clear action is effective, but extreme fear can backfire.",
        "Audience/recipient — pre-existing attitudes, involvement, intelligence and self-esteem affect persuadability.",
        "Channel — the medium through which the message is delivered.",
        "Elaboration-likelihood model — a central route (careful thought about the arguments) yields durable change; a peripheral route (superficial cues such as attractiveness) yields weaker, temporary change."
      ] },
      { h: "Health Belief Model", p: "The Health Belief Model proposes that health behaviour depends on: perceived susceptibility (am I at risk?), perceived severity (how serious?), perceived benefits (will action help?), perceived barriers (what are the costs and obstacles?), cues to action (triggers such as symptoms or advice) and self-efficacy (can I do it?). A person is most likely to act when perceived threat and benefits are high and barriers are low. It guides how nurses frame health-promotion messages and where to intervene.", figure: {
        caption: "Health Belief Model — threat, benefits/barriers and cues shape health action.",
        svg: '<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Health Belief Model"><rect x="15" y="20" width="160" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="95" y="38" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Perceived susceptibility</text><rect x="15" y="52" width="160" height="26" rx="6" fill="#DCFCE7" stroke="#15803D"/><text x="95" y="70" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Perceived severity</text><rect x="15" y="84" width="160" height="26" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="95" y="102" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Benefits vs barriers</text><rect x="15" y="116" width="160" height="26" rx="6" fill="#F0FDF4" stroke="#15803D"/><text x="95" y="134" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">Cues to action, efficacy</text><rect x="300" y="60" width="180" height="44" rx="10" fill="#15803D"/><text x="390" y="87" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Health behaviour</text><line x1="175" y1="70" x2="298" y2="82" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Theory of Planned Behaviour", p: "The Theory of Planned Behaviour (Ajzen) holds that the best proximal predictor of behaviour is behavioural intention, which is shaped by three factors: attitude toward the behaviour, subjective norms (perceived social pressure) and perceived behavioural control (belief in one's ability to perform it, akin to self-efficacy). Perceived control can also directly influence behaviour. Strengthening favourable attitudes, supportive norms and perceived control raises intention and, in turn, behaviour." },
      { h: "Transtheoretical (stages of change) model", p: "Prochaska and DiClemente's model views behaviour change as a process through stages: precontemplation (not yet considering change), contemplation (ambivalent, considering it), preparation (planning to act soon), action (actively changing), and maintenance (sustaining the change), with relapse possible at any point. Matching the intervention to the person's stage is more effective than a one-size-fits-all approach.", figure: {
        caption: "Transtheoretical stages of change — behaviour change as a cyclical process.",
        svg: '<svg viewBox="0 0 540 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of change model"><defs><marker id="scArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs>' +
          [["Pre-contempl.",10],["Contempl.",115],["Preparation",220],["Action",325],["Maintenance",420]].map(function(p){var x=p[1];return '<rect x="'+x+'" y="45" width="100" height="40" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="'+(x+50)+'" y="69" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '<line x1="110" y1="65" x2="113" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#scArr)"/><line x1="215" y1="65" x2="218" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#scArr)"/><line x1="320" y1="65" x2="323" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#scArr)"/><line x1="425" y1="65" x2="418" y2="65" stroke="#0F4C3A" stroke-width="2" marker-end="url(#scArr)"/></svg>'
      } },
      { h: "Fear appeals and protection motivation", p: "Fear appeals attempt to change behaviour by arousing fear of a health threat. Protection motivation theory shows they work best when the threat is presented as serious and likely AND the recommended action is presented as effective and achievable (high response-efficacy and self-efficacy). Very high fear without a feasible protective action can backfire, producing denial, avoidance or defensive rejection of the message — a key caution for nurses designing health messages such as those on smoking or infection control." },
      { h: "Application to health promotion and nursing", list: [
        "Assess a patient's beliefs, perceived barriers and stage of change before advising.",
        "Match the intervention to the stage — raise awareness in precontemplation, build motivation and resolve ambivalence in contemplation, plan in preparation, support and prevent relapse in action/maintenance.",
        "Increase perceived benefits and self-efficacy while reducing barriers (Health Belief Model).",
        "Use credible, empathetic communication and the central route to persuasion for lasting change.",
        "Use moderate, action-linked fear appeals, never extreme fear without a feasible action.",
        "Harness cognitive dissonance gently to help patients align behaviour with their own values."
      ] },
      { h: "Clinical relevance — planning behaviour-change support", list: [
        "Identify the patient's stage of change before choosing an approach; pushing action on a precontemplator fails.",
        "Frame messages around the patient's own values and perceived benefits, not the nurse's priorities.",
        "Address specific, named barriers (cost, time, fear, side-effects) rather than exhorting harder.",
        "Recruit supportive subjective norms — involve family and peers who model and endorse the change.",
        "Anticipate relapse as part of the cycle and plan for it rather than treating it as failure."
      ] },
      { h: "Key terms", list: [
        "Cognitive dissonance — discomfort from holding inconsistent cognitions, motivating change.",
        "Elaboration-likelihood model — central (deep) versus peripheral (superficial) routes to persuasion.",
        "Subjective norm — perceived social pressure to perform or not perform a behaviour.",
        "Perceived behavioural control — belief in one's ability to perform the behaviour (akin to self-efficacy).",
        "Cues to action — triggers that prompt a person to act on a health intention.",
        "Response-efficacy — belief that the recommended action will actually reduce the threat.",
        "Stages of change — precontemplation, contemplation, preparation, action, maintenance."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define an attitude and describe its three (ABC) components, giving a health example of internal conflict.",
      "Explain cognitive dissonance and how a nurse can use it to promote behaviour change.",
      "Describe the factors that make persuasive communication effective, including the elaboration-likelihood model.",
      "Compare the Health Belief Model and the Theory of Planned Behaviour.",
      "Apply the stages-of-change model, stage by stage, to helping a patient stop smoking, and explain when fear appeals help or backfire."
    ],
    assessment: [
      { type: "mcq", q: "An attitude is best defined as a relatively enduring ____ of an object, person or idea.", options: ["Reflex", "Evaluation", "Sensation", "Memory"], answer: 1, rationale: "An attitude is an enduring favourable or unfavourable evaluation." },
      { type: "mcq", q: "The feelings and emotions toward an object form the ____ component of an attitude.", options: ["Cognitive", "Affective", "Behavioural", "Peripheral"], answer: 1, rationale: "The affective component is the emotional part of an attitude (the A in the ABC model)." },
      { type: "mcq", q: "A nurse helps a smoker notice the clash between valuing their children and continuing to smoke, creating discomfort that motivates change. This uses:", options: ["Cognitive dissonance", "Perceptual set", "Social loafing", "Conformity"], answer: 0, rationale: "Making the inconsistency between values and behaviour salient creates dissonance that motivates change." },
      { type: "mcq", q: "In the elaboration-likelihood model, durable attitude change comes from the ____ route.", options: ["Peripheral", "Central", "Reflex", "Sensory"], answer: 1, rationale: "The central route (careful processing of arguments) produces lasting change; the peripheral route is weak and temporary." },
      { type: "mcq", q: "A patient asks 'Am I really at risk, and is it serious?' These questions map to which Health Belief Model constructs?", options: ["Perceived susceptibility and severity", "Subjective norms", "Cues to action only", "Response cost"], answer: 0, rationale: "Perceived susceptibility (personal risk) and perceived severity (seriousness) are core HBM constructs." },
      { type: "mcq", q: "In the Theory of Planned Behaviour, the best immediate predictor of behaviour is:", options: ["Attitude", "Intention", "Emotion", "Personality"], answer: 1, rationale: "Behavioural intention is the proximal predictor of behaviour in the TPB." },
      { type: "mcq", q: "A patient who is not yet thinking about changing a harmful habit is in which stage?", options: ["Precontemplation", "Action", "Maintenance", "Preparation"], answer: 0, rationale: "Precontemplation is the stage before any intention to change; awareness-raising is appropriate here." },
      { type: "mcq", q: "Perceived social pressure from family and peers to perform a behaviour (TPB) is the:", options: ["Cue to action", "Subjective norm", "Locus of control", "g factor"], answer: 1, rationale: "The subjective norm is perceived social pressure in the Theory of Planned Behaviour." },
      { type: "mcq", q: "According to protection motivation theory, a fear appeal is most effective when it:", options: ["Uses the most extreme fear possible", "Combines a credible threat with a feasible, effective action", "Presents threat with no advice", "Avoids mentioning any risk"], answer: 1, rationale: "Fear works when paired with high response- and self-efficacy; extreme fear without a feasible action can backfire." },
      { type: "mcq", q: "A trusted, expert, likeable communicator improves persuasion. This is a feature of the persuasion ____.", options: ["Source", "Barrier", "Norm", "Relapse"], answer: 0, rationale: "Source credibility, expertise and likeability enhance persuasion." },
      { type: "fill", q: "The discomfort from acting against one's attitudes, which motivates change, is cognitive ____.", accept: ["dissonance"], rationale: "Cognitive dissonance is the tension that drives attitude or behaviour change." },
      { type: "fill", q: "In the Theory of Planned Behaviour, the most immediate predictor of behaviour is behavioural ____.", accept: ["intention"], rationale: "Intention is the proximal determinant of behaviour in the TPB." }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: "bvs-10-self-concept",
    unit: "Unit 3 · Social Behaviour & Communication",
    title: "The Self & Self-Concept",
    readMinutes: 27,
    summary: "The nature and components of the self-concept; self-esteem, self-image, ideal self and body image; the social development of the self (Cooley, Mead, Rogers); self-schemas and social comparison; threats to the self in illness; stigma; self-efficacy; adjustment to altered body image; and how nurses protect a patient's dignity and identity.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The self and self-concept", p: "The self-concept is the organised set of beliefs and perceptions a person holds about themselves — the answer to 'Who am I?'. It develops through experience and social interaction, is multidimensional (physical, social, personal, role), and guides behaviour, emotion and how a person interprets events. It is organised into self-schemas (beliefs about the self in particular domains) that filter attention and memory. Illness, disability and hospitalisation can challenge the self-concept profoundly, making it central to psychological nursing care." },
      { h: "Components of the self-concept", list: [
        "Self-image — how a person sees themselves (physical, social, personal and role identities).",
        "Body image — the mental picture of and feelings about one's own body.",
        "Self-esteem — the evaluative dimension: how much a person values and accepts themselves.",
        "Ideal self — the person one would like to be; a large gap from the real self lowers self-esteem.",
        "Roles and identity — the self is partly defined by social roles (parent, worker, nurse).",
        "The 'looking-glass' and reflected appraisals — the self as shaped by how others respond to us."
      ], figure: {
        caption: "Components of the self-concept.",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Components of self-concept"><circle cx="240" cy="100" r="55" fill="#15803D"/><text x="240" y="96" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">SELF-</text><text x="240" y="112" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">CONCEPT</text><rect x="20" y="30" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Self-image</text><rect x="340" y="30" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Body image</text><rect x="20" y="140" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="80" y="162" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Self-esteem</text><rect x="340" y="140" width="120" height="34" rx="8" fill="#DCFCE7" stroke="#15803D"/><text x="400" y="162" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#0F4C3A">Ideal self</text><line x1="140" y1="50" x2="192" y2="80" stroke="#22C55E" stroke-width="2"/><line x1="340" y1="50" x2="288" y2="80" stroke="#22C55E" stroke-width="2"/><line x1="140" y1="155" x2="192" y2="120" stroke="#22C55E" stroke-width="2"/><line x1="340" y1="155" x2="288" y2="120" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Development of the self", p: "The self is not present at birth but emerges through social interaction. Cooley's 'looking-glass self' proposes that we form a self-image from how we imagine others see and judge us. Mead argued the self develops through role-taking — imagining others' viewpoints — and the internalised 'generalised other' (society's attitudes as a whole), progressing from imitation, through play, to organised games. Rogers linked healthy self-development to unconditional positive regard, while conditions of worth imposed in childhood distort the self-concept. The self continues to develop across the lifespan." },
      { h: "Social comparison and self-evaluation", p: "Festinger's social comparison theory holds that people evaluate themselves by comparing with others, especially when objective standards are lacking. Upward comparison (with those better off) can motivate but may lower self-esteem; downward comparison (with those worse off) can protect self-esteem and is common in coping with illness. Patients constantly compare their appearance, recovery and function with others on the ward and before illness, which nurses should recognise when a patient seems discouraged or reassured by another's situation." },
      { h: "Self-esteem and its importance", p: "Self-esteem is a person's overall evaluation of their own worth. High, stable self-esteem is linked to resilience, better coping, adherence and mental health; low self-esteem is associated with anxiety, depression, poorer self-care and social withdrawal. Self-esteem is influenced by the gap between real and ideal self, by success and failure, by social comparison with others, and by the reactions of significant others — including, importantly, health professionals whose words and manner can raise or lower it." },
      { h: "Body image and its disturbance", p: "Body image is the internal representation of, and feelings about, one's physical self. It can be disturbed by many clinical events — surgery, amputation, mastectomy, stoma (colostomy/ileostomy) formation, burns, scarring, weight change, hair loss from chemotherapy, pregnancy, ageing, chronic disease and visible disfigurement. Body-image disturbance can cause grief, shame, anger, social withdrawal, depression and reduced adherence, and is central to eating disorders. Nurses must anticipate, permit and support these reactions rather than minimise them." },
      { h: "Threats to the self in illness and hospitalisation", list: [
        "Loss of independence, control and adult roles.",
        "Loss of privacy and dignity during intimate care and examination.",
        "Altered appearance and function (body-image change).",
        "Dependence on others for basic needs.",
        "Depersonalisation — being treated as a diagnosis or a bed number rather than a person.",
        "These threats can produce loss of self-esteem, grief, anger, anxiety and depression; recovery of a positive self-concept is often as important as physical recovery."
      ] },
      { h: "Stigma and spoiled identity", p: "Goffman described stigma as a deeply discrediting attribute that reduces a person 'from a whole to a tainted, discounted one'. Conditions such as mental illness, HIV, epilepsy, disfigurement, disability, leprosy and incontinence can carry stigma, damaging self-concept and leading to concealment, shame and delayed help-seeking. Enacted stigma is discrimination by others; felt stigma is the person's own fear and shame; courtesy stigma extends to family and carers. Nurses combat stigma through respectful, non-judgemental, confidential care." },
      { h: "Self-efficacy and the self", p: "Closely linked to the self-concept is self-efficacy — Bandura's task-specific belief in one's ability to succeed. A patient may have generally low self-esteem yet high self-efficacy for a specific skill (e.g. managing a stoma) once taught and supported. Building self-efficacy through mastery experiences, seeing similar others succeed, encouragement and managing anxiety strengthens the patient's sense of a capable self and supports adjustment to altered body image and role." },
      { h: "Adjustment to altered body image", p: "Adjustment to a permanent body-image change (amputation, stoma, mastectomy) often resembles a grief process, moving unevenly through shock, denial, acknowledgement and eventual reconstruction of a revised self. The pace is individual and cannot be rushed. Nurses facilitate adjustment by preparing the patient beforehand, allowing them to look at and touch the altered area in their own time, providing accurate information, and connecting them with others who have adapted successfully (peer support).", figure: {
        caption: "Real self, ideal self and self-esteem: a smaller gap supports higher self-esteem.",
        svg: '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Self-concept and self-esteem relationship"><rect x="40" y="30" width="180" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="130" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Real self</text><text x="130" y="68" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">how I actually am</text><rect x="260" y="30" width="180" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="350" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Ideal self</text><text x="350" y="68" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">how I wish to be</text><rect x="150" y="130" width="180" height="45" rx="8" fill="#15803D"/><text x="240" y="152" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">Self-esteem</text><text x="240" y="168" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#DCFCE7">smaller gap = higher</text><line x1="130" y1="75" x2="210" y2="128" stroke="#22C55E" stroke-width="2"/><line x1="350" y1="75" x2="270" y2="128" stroke="#22C55E" stroke-width="2"/></svg>'
      } },
      { h: "Nursing care of the self-concept", list: [
        "Protect dignity and privacy in every interaction and procedure.",
        "Address patients by their preferred name; avoid depersonalising labels.",
        "Support autonomy and involve patients in decisions to preserve identity and control.",
        "Prepare patients for body-image changes and allow the expression of grief and anger.",
        "Reinforce strengths, roles and successes to rebuild self-esteem.",
        "Actively counter stigma with acceptance and confidentiality; involve family, peer support and specialist counselling where useful."
      ] },
      { h: "Clinical relevance — protecting identity and dignity", list: [
        "Small acts (curtains, gowns that cover, knocking before entering) powerfully signal respect for the self.",
        "Involving patients in even minor decisions preserves their sense of agency and identity.",
        "Frame altered function positively where honest (what the patient CAN still do).",
        "Recognise that loss of role (worker, parent) can wound self-esteem as much as physical change.",
        "Refer early for specialist psychological or peer support when adjustment is stalling."
      ] },
      { h: "Key terms", list: [
        "Self-concept — the organised set of beliefs one holds about oneself.",
        "Looking-glass self — self-image formed from how we think others see us (Cooley).",
        "Generalised other — the internalised attitudes of society as a whole (Mead).",
        "Self-esteem — the evaluative worth dimension of the self-concept.",
        "Body image — the mental representation of and feelings about one's own body.",
        "Social comparison — evaluating the self against others (Festinger).",
        "Stigma — a discrediting attribute that spoils social identity (Goffman)."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define the self-concept and describe its components.",
      "Explain how the self develops, referring to Cooley, Mead and Rogers, and the role of social comparison.",
      "Discuss body image and the clinical events that can disturb it, and how nurses support adjustment.",
      "Explain stigma, distinguishing enacted, felt and courtesy stigma, and its effect on the self and help-seeking.",
      "Describe nursing measures to protect and rebuild a patient's self-concept and dignity."
    ],
    assessment: [
      { type: "mcq", q: "The organised set of beliefs a person holds about themselves is the:", options: ["Self-concept", "Superego", "Locus of control", "Attitude"], answer: 0, rationale: "The self-concept is one's organised set of self-beliefs answering 'Who am I?'." },
      { type: "mcq", q: "The evaluative dimension — how much a person values themselves — is:", options: ["Body image", "Self-image", "Self-esteem", "Ideal self"], answer: 2, rationale: "Self-esteem is the evaluation of one's own worth." },
      { type: "mcq", q: "A patient after a mastectomy feels their body is no longer 'whole' and avoids mirrors. This is a disturbance of:", options: ["Self-esteem only", "Body image", "Locus of control", "The generalised other"], answer: 1, rationale: "Body image is the representation of and feelings about the physical self, disturbed by mastectomy." },
      { type: "mcq", q: "Cooley's idea that self-image forms from how we imagine others see us is the:", options: ["Generalised other", "Looking-glass self", "Ideal self", "Halo effect"], answer: 1, rationale: "The looking-glass self is Cooley's concept of self derived from imagined appraisals by others." },
      { type: "mcq", q: "A large gap between the real self and the ideal self tends to:", options: ["Raise self-esteem", "Lower self-esteem", "Have no effect", "Improve body image"], answer: 1, rationale: "A wide real-ideal discrepancy (incongruence) lowers self-esteem (Rogers)." },
      { type: "mcq", q: "Mead's concept of internalising society's overall attitudes and expectations is the:", options: ["Looking-glass self", "Ideal self", "Generalised other", "Self-efficacy"], answer: 2, rationale: "Mead's 'generalised other' is the internalised viewpoint of society as a whole." },
      { type: "mcq", q: "A patient copes with illness by reminding themselves 'others on the ward are far worse off'. This is:", options: ["Upward social comparison", "Downward social comparison", "The generalised other", "Enacted stigma"], answer: 1, rationale: "Comparing with those worse off (downward comparison) can protect self-esteem during illness (Festinger)." },
      { type: "mcq", q: "A person with epilepsy hides the diagnosis for fear of being judged and rejected. This is an example of:", options: ["High self-esteem", "Felt stigma", "Self-actualisation", "The Flynn effect"], answer: 1, rationale: "Felt stigma is the person's own fear and shame about a discrediting attribute, leading to concealment." },
      { type: "mcq", q: "Low self-esteem is most associated with:", options: ["Better coping", "Higher resilience", "Improved adherence", "Anxiety and depression"], answer: 3, rationale: "Low self-esteem is linked to anxiety, depression, poorer self-care and withdrawal." },
      { type: "mcq", q: "Being treated as a diagnosis rather than a person, common in hospital, is called:", options: ["Depersonalisation", "Self-actualisation", "Congruence", "Sublimation"], answer: 0, rationale: "Depersonalisation strips individual identity, threatening the self-concept." },
      { type: "fill", q: "Cooley's term for the self-image formed from how we think others see us is the ____-glass self.", accept: ["looking"], rationale: "The looking-glass self derives from imagined appraisals by others." },
      { type: "fill", q: "Goffman's term for a discrediting attribute that spoils a person's social identity is ____.", accept: ["stigma"], rationale: "Stigma reduces a person from whole to discounted in others' eyes, damaging the self." }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: "bvs-11-communication-groups",
    unit: "Unit 3 · Social Behaviour & Communication",
    title: "Interpersonal Communication & Group Dynamics",
    readMinutes: 28,
    summary: "The communication process, verbal and non-verbal communication, paralanguage and proxemics, therapeutic communication skills and barriers, structured clinical communication (SBAR), the Johari window, the psychology of groups, social influence (conformity, obedience, groupthink, bystander effect), leadership, and their application to nursing teams and patient safety.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The communication process", p: "Communication is the transmission and shared understanding of meaning between a sender and a receiver. The basic model comprises a sender who encodes a message, a channel through which it travels, a receiver who decodes it, feedback confirming understanding, and noise (any interference — physical, physiological, semantic or psychological). Communication is transactional and two-way, not merely a one-way transmission. It is the core clinical skill of nursing, essential to assessment, therapeutic relationships, teaching and patient safety, and poor communication is one of the commonest root causes of clinical harm.", figure: {
        caption: "The communication process: sender encodes, channel carries, receiver decodes, feedback loops back, noise interferes.",
        svg: '<svg viewBox="0 0 540 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Communication process model"><defs><marker id="coArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="40" width="120" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="80" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">SENDER</text><text x="80" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">encodes</text><rect x="210" y="40" width="120" height="45" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="270" y="66" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">MESSAGE / channel</text><rect x="400" y="40" width="120" height="45" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="460" y="60" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">RECEIVER</text><text x="460" y="76" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">decodes</text><line x1="140" y1="62" x2="207" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#coArr)"/><line x1="330" y1="62" x2="397" y2="62" stroke="#0F4C3A" stroke-width="2" marker-end="url(#coArr)"/><path d="M460 85 Q270 130 80 85" fill="none" stroke="#22C55E" stroke-width="2" stroke-dasharray="5" marker-end="url(#coArr)"/><text x="270" y="125" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#15803D">feedback</text></svg>'
      } },
      { h: "Verbal communication", p: "Verbal communication uses words, spoken or written. Effectiveness depends on clarity, appropriate vocabulary (avoiding jargon), pacing, structure and checking understanding. In health care, written communication (documentation, prescriptions, handover notes) must be accurate, legible, timely and unambiguous, because errors in written communication are a recognised cause of clinical harm. Verbal messages carry the explicit content, while much of the emotional meaning is conveyed non-verbally." },
      { h: "Non-verbal communication and paralanguage", list: [
        "Facial expression — a rich, largely universal signal of emotion.",
        "Eye contact (gaze) — regulates interaction and signals attention (its meaning varies by culture).",
        "Gesture and posture (kinesics) — body movements conveying meaning and attitude.",
        "Touch (haptics) — powerful and caring in nursing, but culturally sensitive.",
        "Personal space and distance (proxemics) — physical closeness signalling intimacy or formality.",
        "Paralanguage — the non-word features of speech: tone, pitch, volume, pace, emphasis and pauses.",
        "When words and body language conflict, people usually believe the non-verbal message — vital for detecting a patient's true feelings."
      ] },
      { h: "Therapeutic communication skills", list: [
        "Active listening — attending fully, with appropriate eye contact and body posture.",
        "Open questions — inviting the patient to expand rather than answer yes/no.",
        "Reflection and paraphrasing — restating the patient's message to check understanding and show attention.",
        "Empathy — conveying accurate understanding of the patient's feelings.",
        "Silence — allowing the patient time to think and respond.",
        "Clarifying and summarising — ensuring shared understanding.",
        "SOLER (Sit squarely, Open posture, Lean in, Eye contact, Relaxed) — a practical framework for attending behaviour."
      ] },
      { h: "The Johari window and self-disclosure", p: "The Johari window (Luft & Ingham) maps interpersonal awareness into four quadrants defined by what is known to self and to others: the open area (known to both), the blind area (known to others but not self), the hidden area (known to self but not others) and the unknown area. Feedback shrinks the blind area and appropriate self-disclosure shrinks the hidden area, both enlarging the open area and building trust. It is a useful model for reflective practice, giving and receiving feedback, and understanding the therapeutic relationship.", figure: {
        caption: "The Johari window — four quadrants of interpersonal awareness.",
        svg: '<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Johari window"><rect x="40" y="30" width="130" height="75" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="105" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">OPEN</text><rect x="170" y="30" width="130" height="75" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="235" y="70" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">BLIND</text><rect x="40" y="105" width="130" height="75" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="105" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">HIDDEN</text><rect x="170" y="105" width="130" height="75" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="235" y="145" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">UNKNOWN</text><text x="105" y="22" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">known to self</text><text x="235" y="22" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">unknown to self</text></svg>'
      } },
      { h: "Barriers to communication", list: [
        "Physical — noise, distance, poor lighting, interruptions, sensory impairment.",
        "Psychological — anxiety, pain, fear, defensiveness, low mood.",
        "Language and cultural differences, including the need for interpreters.",
        "Semantic — jargon, ambiguity and technical language.",
        "Blocking behaviours — giving false reassurance, being judgemental, changing the subject, or avoiding emotional topics.",
        "Environmental — lack of privacy and time pressure."
      ] },
      { h: "Structured clinical communication (SBAR)", p: "Because unstructured handover is a major cause of error, health services use standardised tools. SBAR — Situation (what is happening now), Background (relevant context), Assessment (what you think the problem is) and Recommendation (what you want done) — gives a concise, predictable structure for clinical handover and escalation, especially between disciplines and over the telephone. Other tools include ISBAR (adding Identify) and check-back/read-back to confirm critical information, closing the communication loop." },
      { h: "The psychology of groups", p: "A group is two or more people who interact, are interdependent and share a sense of common identity. Groups develop norms (shared rules of behaviour), roles (task roles that get work done and socio-emotional roles that maintain relationships), status hierarchies and cohesion (the bonds holding members together). Tuckman described stages of group development: forming, storming, norming, performing and adjourning. Healthy group dynamics improve teamwork; poor dynamics threaten patient safety.", figure: {
        caption: "Tuckman's stages of group development.",
        svg: '<svg viewBox="0 0 540 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tuckman stages of group development"><defs><marker id="tkArr" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs>' +
          [["Forming",10],["Storming",115],["Norming",220],["Performing",320],["Adjourning",425]].map(function(p){var x=p[1];return '<rect x="'+x+'" y="40" width="100" height="38" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="'+(x+50)+'" y="63" text-anchor="middle" font-family="sans-serif" font-size="10" font-weight="700" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '<line x1="110" y1="59" x2="113" y2="59" stroke="#0F4C3A" stroke-width="2" marker-end="url(#tkArr)"/><line x1="215" y1="59" x2="218" y2="59" stroke="#0F4C3A" stroke-width="2" marker-end="url(#tkArr)"/><line x1="315" y1="59" x2="318" y2="59" stroke="#0F4C3A" stroke-width="2" marker-end="url(#tkArr)"/><line x1="420" y1="59" x2="423" y2="59" stroke="#0F4C3A" stroke-width="2" marker-end="url(#tkArr)"/></svg>'
      } },
      { h: "Social influence in groups", list: [
        "Conformity — changing behaviour to match a group (Asch's line studies); driven by normative influence (to be liked/accepted) and informational influence (to be correct).",
        "Obedience to authority (Milgram) — following orders even against one's conscience; relevant to safely challenging unsafe instructions.",
        "Groupthink (Janis) — flawed decision-making in highly cohesive groups that suppress dissent to preserve harmony.",
        "Social facilitation — the presence of others improves performance on simple/well-learned tasks and worsens it on difficult ones.",
        "Social loafing — reduced individual effort when working in a group.",
        "Diffusion of responsibility and the bystander effect — reduced sense of personal responsibility in a group, so no one acts."
      ] },
      { h: "Leadership styles", p: "Lewin distinguished autocratic (leader decides alone; fast but can lower morale), democratic (leader involves the team; higher satisfaction and quality) and laissez-faire (minimal direction; can drift). Each suits different situations — autocratic in an emergency, democratic for routine ward decisions. Transformational leadership, which inspires and develops staff around a shared vision, is associated with better nurse retention and patient outcomes. Effective clinical leadership fosters positive norms, cohesion, psychological safety and the confidence of all members to speak up for patient safety." },
      { h: "Application to nursing", list: [
        "Use therapeutic communication in every patient interaction, adapting it to sensory, language and cultural needs.",
        "Read and use non-verbal cues to detect distress and build rapport; watch your own body language.",
        "Communicate clearly within the team using structured tools (SBAR) to prevent errors and ensure safe handover.",
        "Foster positive group norms, cohesion and mostly democratic or transformational leadership in the ward team.",
        "Guard against groupthink and unsafe obedience by creating a culture where staff can speak up for patient safety."
      ] },
      { h: "Clinical relevance — communicating safely and therapeutically", list: [
        "Adapt communication to sensory impairment: face the patient, ensure glasses/hearing aids, reduce background noise.",
        "Use professional interpreters, not family, for language barriers.",
        "Confirm critical information with teach-back and read-back to close the loop.",
        "Document accurately and hand over using SBAR to prevent errors between shifts and disciplines.",
        "Model calm, congruent verbal and non-verbal behaviour, especially with distressed patients."
      ] },
      { h: "Key terms", list: [
        "Proxemics and paralanguage — use of personal space, and the non-word features of speech.",
        "Non-verbal communication — meaning conveyed without words.",
        "SBAR — Situation, Background, Assessment, Recommendation, a structured handover tool.",
        "Johari window — a model of self-awareness through disclosure and feedback.",
        "Group cohesion — the strength of bonds uniting group members.",
        "Conformity vs obedience — yielding to group pressure versus following authority.",
        "Groupthink — poor decisions from suppressed dissent in cohesive groups."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Describe the components of the communication process, including feedback and the types of noise.",
      "Compare verbal and non-verbal communication and explain paralanguage and proxemics.",
      "Describe therapeutic communication skills (including SOLER) and common barriers to communication.",
      "Explain group norms, roles, cohesion and Tuckman's stages of group development, and the value of the Johari window.",
      "Discuss conformity, obedience and groupthink and their relevance to patient safety, and explain the value of SBAR."
    ],
    assessment: [
      { type: "mcq", q: "In the communication model, any interference that distorts or blocks the message is called:", options: ["Feedback", "Noise", "Encoding", "Channel"], answer: 1, rationale: "Noise is any physical, semantic or psychological interference with the message." },
      { type: "mcq", q: "A patient says 'I'm fine' while avoiding eye contact and looking tearful. The nurse should give most weight to:", options: ["The verbal message", "The non-verbal message", "The written record", "Neither"], answer: 1, rationale: "When verbal and non-verbal messages conflict, the non-verbal channel usually reveals true feelings." },
      { type: "mcq", q: "Tone, pitch, volume, pace and pauses in speech are collectively called:", options: ["Kinesics", "Proxemics", "Paralanguage", "Feedback"], answer: 2, rationale: "Paralanguage is the non-word vocal features that accompany speech." },
      { type: "mcq", q: "The use of personal space and physical distance in interaction is:", options: ["Proxemics", "Haptics", "Kinesics", "Paralanguage"], answer: 0, rationale: "Proxemics refers to the use of interpersonal space and distance." },
      { type: "mcq", q: "In the Johari window, the quadrant known to others but NOT to oneself is the:", options: ["Open area", "Blind area", "Hidden area", "Unknown area"], answer: 1, rationale: "The blind area is known to others but not to self; feedback reduces it." },
      { type: "mcq", q: "Which is a BARRIER, not an aid, to therapeutic communication?", options: ["Active listening", "Empathy", "Giving false reassurance", "Open questions"], answer: 2, rationale: "False reassurance is a blocking behaviour that shuts down genuine expression of feelings." },
      { type: "mcq", q: "A nurse telephoning a doctor about a deteriorating patient uses Situation, Background, Assessment, Recommendation. This tool is:", options: ["SOLER", "SBAR", "OCEAN", "GAS"], answer: 1, rationale: "SBAR structures safe, concise clinical handover and escalation." },
      { type: "mcq", q: "In Tuckman's model, the stage of conflict as members test roles and boundaries is:", options: ["Forming", "Storming", "Norming", "Performing"], answer: 1, rationale: "Storming is the conflict stage before norms settle in norming and productive performing." },
      { type: "mcq", q: "A junior nurse yields to the ward group's habit of skipping a safety check to fit in. This is:", options: ["Obedience", "Conformity", "Social facilitation", "Adjourning"], answer: 1, rationale: "Changing behaviour to match a peer group (here via normative influence) is conformity, as in Asch's studies." },
      { type: "mcq", q: "A cohesive team suppresses a member's safety concern to preserve harmony, leading to a poor decision. This is:", options: ["Social loafing", "Groupthink", "Social facilitation", "Norming"], answer: 1, rationale: "Groupthink is flawed decision-making from suppressed dissent in highly cohesive groups." },
      { type: "fill", q: "In the communication model, the response confirming a message was understood is called ____.", accept: ["feedback"], rationale: "Feedback closes the communication loop by confirming understanding." },
      { type: "fill", q: "The structured handover tool with Situation, Background, Assessment and Recommendation is ____.", accept: ["SBAR", "sbar"], rationale: "SBAR provides a predictable structure for safe clinical communication." }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: "bvs-12-family-socialisation",
    unit: "Unit 4 · Society, Culture & Health",
    title: "The Family & Socialisation",
    readMinutes: 27,
    summary: "The family as a social institution and its types, functions, roles and relationships; the process, types and agents of socialisation; theoretical views of the family; the family life cycle; the family's role in health and in caring for the sick; caregiver burden; and the nursing implications of family-centred care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "The family as a social institution", p: "The family is the basic, universal unit of society — a group united by blood (consanguinity), marriage (affinity) or adoption, usually sharing residence, economic cooperation and emotional life. Sociologically it is the primary social institution: it reproduces society, transmits culture, and is the first and most influential context for health behaviour. In Bangladesh the extended family remains central to daily life and to the care of the sick and elderly, and family decision-making strongly shapes when and how care is sought." },
      { h: "Types and structure of the family", list: [
        "Nuclear family — parents and their dependent children living together.",
        "Joint / extended family — several generations or related families sharing a household (common in Bangladesh).",
        "Single-parent and reconstituted (blended/step) families.",
        "Family of orientation (the one you are born into) versus family of procreation (the one you form).",
        "Descent (patrilineal / matrilineal) and authority (patriarchal / matriarchal) patterns vary by culture.",
        "Family form is changing with urbanisation, migration and modernisation, affecting who cares for the sick and elderly."
      ] },
      { h: "Functions of the family", list: [
        "Reproduction and the continuation of society.",
        "Primary socialisation of children — the family's most important function.",
        "Economic support — meeting material needs and, historically, production.",
        "Emotional support, security and the 'stabilisation of adult personalities' (Parsons).",
        "Regulation of sexual behaviour and provision of social status/identity.",
        "Health care — nurturing, protecting, caring for the sick and shaping lifelong health behaviour."
      ] },
      { h: "Theoretical views of the family", list: [
        "Functionalist (Parsons, Murdock) — the family performs essential functions (socialisation, stabilisation, reproduction, economy) that maintain social order.",
        "Conflict / feminist views — the family can reproduce inequality, including gender inequality and the unequal burden of unpaid care on women.",
        "Symbolic interactionist — the family is understood through the shared meanings, roles and interactions of its members.",
        "Life-course perspective — families change through predictable stages and historical context.",
        "These perspectives together caution the nurse to see the family as both a support and, sometimes, a source of strain or inequality."
      ] },
      { h: "Socialisation", p: "Socialisation is the lifelong process through which individuals learn the norms, values, roles, language and skills of their society, enabling them to function as members of it. It shapes personality and identity and is essential for social order. It is a two-way process — children influence carers too — and continues throughout life as people take on new roles. Feral-child cases and studies of extreme deprivation show that without socialisation, normal human development does not occur.", figure: {
        caption: "Agents of socialisation transmit norms, values and roles across the lifespan.",
        svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Agents of socialisation"><circle cx="250" cy="80" r="46" fill="#15803D"/><text x="250" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">SOCIAL-</text><text x="250" y="93" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">ISATION</text>' +
          [["Family",30,30],["School",370,30],["Peers",30,120],["Media",370,120],["Religion",200,10],["Work",200,150]].map(function(p){return '<rect x="'+p[1]+'" y="'+p[2]+'" width="90" height="26" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="'+(p[1]+45)+'" y="'+(p[2]+18)+'" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '</svg>'
      } },
      { h: "Types and agents of socialisation", list: [
        "Primary socialisation — earliest learning in the family during childhood; the foundation of personality.",
        "Secondary socialisation — later learning through school, peers, workplace, religion and media.",
        "Anticipatory socialisation — rehearsing for a role one expects to take (e.g. parenthood, a nursing career).",
        "Resocialisation — replacing previous norms and roles with new ones (e.g. adopting the 'patient' role, or professional socialisation into nursing).",
        "Agents — family, school, peer group, religion, workplace and the mass media; each transmits particular values."
      ] },
      { h: "Roles and relationships within the family", p: "Family members occupy interrelated roles (parent, child, spouse, elder, in-law), each carrying expected rights and responsibilities. Relationships are shaped by culture, gender and generation. Role strain (tension within a single role) and role conflict (clashing demands of two roles — e.g. a woman balancing paid work, childcare and care of a sick relative) are common sources of stress. Clear, supportive and flexible roles strengthen a family's capacity to cope with illness; rigid or conflicted roles weaken it." },
      { h: "The family life cycle", p: "Families move through predictable stages — formation (marriage/union), childbearing and rearing, families with adolescents, launching children ('empty nest'), and later life and widowhood. Each stage brings different developmental tasks, stresses and health needs. Understanding the family's stage helps the nurse anticipate needs and target support (for example, new-parent education about infant feeding and immunisation, or supporting an older widowed person at risk of isolation and depression)." },
      { h: "The family and health", p: "The family shapes health throughout life: it forms eating, hygiene, activity and lifestyle habits; decides when, where and whether to seek care; provides most of the care for sick and elderly members; and can buffer or amplify stress. Family beliefs and dynamics strongly influence adherence and recovery. In Bangladesh the family is typically the main caregiver, so illness in one member has emotional, practical and financial consequences for the whole unit, and the family — not just the patient — is the appropriate focus of care." },
      { h: "Caregiver burden", p: "Family caregivers of chronically ill, disabled or elderly relatives can experience caregiver burden — physical exhaustion, emotional strain (anxiety, depression), social isolation and financial hardship. Unrecognised burden can lead to caregiver breakdown, elder neglect and poorer care for the patient. Nurses should assess and support caregivers, teach practical skills, arrange respite and signpost resources — caring for the carer is part of good nursing and a determinant of the patient's own outcome." },
      { h: "Nursing implications: family-centred care", list: [
        "Assess the family structure, life-cycle stage, roles, resources and beliefs as part of holistic assessment.",
        "Involve the family as partners in care and decision-making, respecting cultural and gender roles.",
        "Teach family caregivers the practical skills needed for safe home care.",
        "Recognise and relieve caregiver strain and the wider burden of illness on the family.",
        "Support the family unit, especially in community, maternal-child and home-based nursing."
      ] },
      { h: "Clinical relevance — working with families", list: [
        "Identify the family decision-maker(s) early, respecting cultural and gender patterns.",
        "Assess whether the family is a source of support or of additional stress for the patient.",
        "Teach and check practical caregiving skills before discharge to prevent readmission.",
        "Screen the main caregiver for burden, and arrange respite or support where needed.",
        "Tailor education to the family's life-cycle stage (new parents, adolescents, older widowed members)."
      ] },
      { h: "Key terms", list: [
        "Nuclear vs extended family — parents-and-children versus multi-generational household.",
        "Primary vs secondary socialisation — early family-based versus later, wider socialisation.",
        "Resocialisation — learning new norms and roles that replace previous ones.",
        "Role strain / role conflict — tension within a role, or between competing roles.",
        "Caregiver burden — the strain experienced by family carers.",
        "Family-centred care — care that treats the family as the unit of care and as partners."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Describe the family as a social institution and its main types.",
      "Explain the functions of the family, with emphasis on socialisation, and outline functionalist and conflict views.",
      "Define socialisation and distinguish primary, secondary, anticipatory and resocialisation, naming the main agents.",
      "Discuss roles and relationships within the family, including role conflict and caregiver burden.",
      "Explain how the nurse applies family-centred care and supports family caregivers."
    ],
    assessment: [
      { type: "mcq", q: "The lifelong process of learning the norms, values and roles of one's society is:", options: ["Sterilisation", "Socialisation", "Stratification", "Sensation"], answer: 1, rationale: "Socialisation transmits a society's culture to its members and shapes identity." },
      { type: "mcq", q: "The most important function of the family for young children is:", options: ["Economic production", "Government", "Primary socialisation", "Recreation only"], answer: 2, rationale: "Primary socialisation of children is regarded as the core function of the family." },
      { type: "mcq", q: "Several generations living together, common in Bangladesh, form a/an:", options: ["Nuclear family", "Extended/joint family", "Single-parent family", "Peer group"], answer: 1, rationale: "The extended/joint family includes several generations or related families in one household." },
      { type: "mcq", q: "The view that the family can reproduce gender inequality and place the unpaid care burden on women is a:", options: ["Functionalist view", "Conflict / feminist view", "Behaviourist view", "Biological view"], answer: 1, rationale: "Conflict and feminist perspectives highlight inequality and the unequal burden of care within the family." },
      { type: "mcq", q: "A student nurse learning the norms and identity of the profession during training undergoes:", options: ["Primary socialisation", "Professional (re)socialisation", "Reproduction", "Adjourning"], answer: 1, rationale: "Adopting a new professional role and set of norms is (re)socialisation, a form of secondary socialisation." },
      { type: "mcq", q: "Learning new norms and roles that replace previous ones (e.g. becoming a patient) is:", options: ["Primary socialisation", "Reproduction", "Cohesion", "Resocialisation"], answer: 3, rationale: "Resocialisation replaces old patterns with new roles and norms." },
      { type: "mcq", q: "A woman exhausted by balancing paid work, childcare and nursing a sick parent experiences role conflict and:", options: ["Caregiver burden", "Groupthink", "Sensory adaptation", "Extinction"], answer: 0, rationale: "Competing demands plus the strain of caring produce role conflict and caregiver burden." },
      { type: "mcq", q: "In Bangladesh, the main caregiver for a sick person at home is usually the:", options: ["Government", "Family", "Employer", "Police"], answer: 1, rationale: "The family is typically the primary caregiver for the sick and elderly." },
      { type: "mcq", q: "Rehearsing in advance for a future role such as parenthood is:", options: ["Resocialisation", "Anticipatory socialisation", "Primary socialisation", "Extinction"], answer: 1, rationale: "Anticipatory socialisation prepares a person for a role they expect to take." },
      { type: "mcq", q: "Care that treats the family as the unit of care and as partners is called:", options: ["Family-centred care", "Intensive care", "Emergency care", "Self-care only"], answer: 0, rationale: "Family-centred care regards the family as the unit of care and as partners." },
      { type: "fill", q: "Socialisation that takes place in the family during early childhood is ____ socialisation.", accept: ["primary"], rationale: "Primary socialisation is the earliest, family-based socialisation." },
      { type: "fill", q: "The physical, emotional and financial strain experienced by family carers is called caregiver ____.", accept: ["burden", "strain"], rationale: "Caregiver burden is the strain of caring for a chronically ill or dependent relative." }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: "bvs-13-culture-health-beliefs",
    unit: "Unit 4 · Society, Culture & Health",
    title: "Society, Culture & Health Beliefs",
    readMinutes: 28,
    summary: "Society and culture and their components and characteristics; ethnocentrism, cultural relativism and humility; the cultural context of Bangladesh; lay and traditional (explanatory) models of illness; food beliefs and the types of traditional healers; the impact of religion; transcultural nursing; and culturally competent care.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Society and culture", p: "Society is an organised group of people sharing territory, institutions and a way of life; culture is that way of life — the shared, learned system of knowledge, beliefs, values, norms, customs, language and symbols passed between generations. Culture powerfully shapes how people understand the body, health, illness, suffering and care, making it central to nursing. Two people with the same disease but different cultures may explain, express and treat it in entirely different ways." },
      { h: "Characteristics of culture", list: [
        "Learned — acquired through socialisation, not inherited biologically.",
        "Shared — held in common by members of a group, giving a sense of identity.",
        "Transmitted — passed from generation to generation.",
        "Symbolic — carried through language and symbols.",
        "Adaptive and changeable — cultures evolve over time.",
        "Integrated — its parts (beliefs, customs, institutions) interconnect."
      ] },
      { h: "Components of culture", list: [
        "Values — shared ideas of what is good, right and desirable.",
        "Beliefs — accepted ideas about what is true, including about the causes of illness.",
        "Norms — rules of expected behaviour (folkways, mores and laws).",
        "Customs and rituals — habitual practices and ceremonies (birth, marriage, illness, death).",
        "Language and symbols — the shared carriers of meaning.",
        "Material culture — objects, technology and artefacts.",
        "Subculture and counterculture — groups within a society with distinctive or opposing features."
      ] },
      { h: "Ethnocentrism, cultural relativism and cultural humility", p: "Ethnocentrism is judging another culture by the standards of one's own, often assuming one's own is superior; it can breed prejudice, stereotyping and poor care. Cultural relativism is understanding a culture on its own terms. Cultural humility adds lifelong self-reflection on one's own biases and power imbalance. Nurses aim for relativism and humility — respecting difference — while still upholding safety and human rights, so that genuinely harmful practices are challenged tactfully rather than accepted uncritically. This balance avoids both cultural imposition and cultural relativism taken to a harmful extreme." },
      { h: "Cultural context of Bangladesh", p: "Bangladeshi culture is shaped by religion, the Bangla language, strong family and community ties, and long-standing traditions. Cultural factors influence diet, dress and modesty (purdah), gender roles, who makes health decisions in the family, the acceptable sex of the carer for intimate care, and beliefs about the causes and cures of illness. Respecting these factors is essential to delivering acceptable, effective and dignified care, and ignoring them is a common reason patients disengage from services." },
      { h: "Lay and traditional (explanatory) models of illness", p: "People hold lay (folk) beliefs about health alongside, or instead of, biomedical ones. Kleinman's concept of the explanatory model captures a patient's own account of what caused the illness, why it started when it did, what it does to the body, how serious it is and what treatment is expected. Illness may be attributed to germs, lifestyle and environment (biomedical), but also to supernatural causes, the 'evil eye' (nazar), fate or God's will, sin or moral failing, or an imbalance of body qualities ('hot/cold' or humoral theory). These explanatory models determine whether, when and from whom people seek help." },
      { h: "Food beliefs", p: "Food carries strong cultural meaning. Many South Asian traditions classify foods as 'hot' or 'cold' (unrelated to temperature) and give or withhold particular foods during illness, fever, pregnancy and the postnatal period. Such beliefs can support or undermine nutrition and recovery — for example, restricting protein or fluids after childbirth, or withholding food from a child with diarrhoea. Religious dietary rules (halal, fasting) also affect intake. Nurses should assess food beliefs and negotiate nutrition respectfully rather than dismissively." },
      { h: "Traditional and folk healers", list: [
        "Kabiraj / Ayurvedic healers — herbal and traditional remedies based on Ayurvedic principles.",
        "Unani (hekim) practitioners — the humoral Unani system of medicine.",
        "Homeopathic practitioners — highly diluted preparations.",
        "Religious / faith healers (pir, fakir, mullah) — prayer, amulets (tabiz) and rituals.",
        "Traditional healers are widely used because they are accessible, affordable, trusted and share the patient's beliefs and language.",
        "However, sole reliance on them for serious illness can dangerously delay effective diagnosis and treatment, and some remedies interact with medicines."
      ], figure: {
        caption: "Lay/traditional and biomedical explanations of illness both influence health-seeking behaviour.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lay versus biomedical illness beliefs"><rect x="20" y="30" width="200" height="70" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="120" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Biomedical model</text><text x="120" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">germs, lifestyle, genes</text><rect x="280" y="30" width="200" height="70" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="380" y="55" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Lay / traditional model</text><text x="380" y="75" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">evil eye, humours, fate</text></svg>'
      } },
      { h: "The impact of religion on health", p: "Religion influences health beliefs and behaviour in many ways: it can provide meaning, hope, coping and social support in illness; it shapes diet, fasting, hygiene, dress and end-of-life and mourning practices; and it may affect decisions about treatment, blood products, family planning and post-mortem care. Religion can promote health (community, temperance, purpose) but occasionally conflict with medical advice, for example fasting affecting diabetes control. Nurses respect and accommodate religious needs, facilitating prayer, chaplaincy and culturally appropriate care." },
      { h: "Transcultural nursing and models of cultural care", p: "Leininger's transcultural nursing theory (culture care diversity and universality) argues that care must fit the patient's cultural values, offering three modes: cultural care preservation (maintaining helpful practices), accommodation (negotiating adjustments) and repatterning (helping change harmful practices). Purnell's and Campinha-Bacote's models likewise frame cultural competence as a developing skill — cultural awareness, knowledge, skill, encounters and desire. These models give nurses a structured way to move from good intentions to competent, individualised transcultural care." },
      { h: "Culturally competent nursing care", list: [
        "Learn about the cultures served and assess each patient's beliefs individually to avoid stereotyping.",
        "Ask respectfully rather than assume; use professional interpreters (not family) for language needs.",
        "Accommodate harmless customs — diet, modesty, family involvement, prayer, same-sex carers where preferred.",
        "Guide gently away from harmful practices without ridicule; build trust to encourage timely, effective care.",
        "Practise cultural humility — ongoing self-awareness of one's own biases and assumptions.",
        "Integrate cultural assessment into holistic, safe, person-centred care."
      ] },
      { h: "Clinical relevance — the cultural assessment", list: [
        "Elicit the patient's explanatory model: what they think caused the illness, why now, and what treatment they expect.",
        "Ask about dietary, modesty, prayer and same-sex-carer preferences and accommodate where safe.",
        "Check whether traditional remedies are being used, non-judgementally, to avoid interactions and delay.",
        "Involve family and community in ways the patient wishes, respecting decision-making customs.",
        "Balance respect for culture with the duty to keep the patient safe and to uphold their rights."
      ] },
      { h: "Key terms", list: [
        "Ethnocentrism — judging others by one's own cultural standards.",
        "Cultural relativism — understanding a culture on its own terms.",
        "Cultural humility — lifelong self-reflection on one's biases and power.",
        "Explanatory model — a person's own understanding of the cause and meaning of their illness (Kleinman).",
        "Lay beliefs — non-professional, everyday explanations of health and illness.",
        "Transcultural nursing — Leininger's culturally congruent care (preservation, accommodation, repatterning).",
        "Cultural competence — respectful, knowledgeable, adaptable care across cultures."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define culture and describe its components and characteristics.",
      "Distinguish ethnocentrism, cultural relativism and cultural humility, and explain their relevance to nursing.",
      "Describe how cultural and religious factors in Bangladesh influence health behaviour.",
      "Compare biomedical and lay/traditional explanatory models of illness and discuss the role of traditional healers.",
      "Explain how a nurse provides culturally competent, transcultural, person-centred care."
    ],
    assessment: [
      { type: "mcq", q: "Culture is best described as:", options: ["Inherited biologically", "A learned, shared way of life passed between generations", "A type of microbe", "A medical treatment"], answer: 1, rationale: "Culture is learned and shared, transmitted across generations, not biologically inherited." },
      { type: "mcq", q: "A nurse who assumes Western hospital routines are the only 'correct' way and dismisses a patient's customs is showing:", options: ["Cultural relativism", "Ethnocentrism", "Empathy", "Cultural humility"], answer: 1, rationale: "Ethnocentrism judges and dismisses other cultures by one's own standards." },
      { type: "mcq", q: "Ongoing self-reflection on one's own biases and power when caring across cultures is:", options: ["Ethnocentrism", "Groupthink", "Cultural humility", "Prejudice"], answer: 2, rationale: "Cultural humility emphasises lifelong self-awareness of one's assumptions and power." },
      { type: "mcq", q: "A patient believes their child's illness is caused by the 'evil eye' (nazar). This reflects a:", options: ["Biomedical explanation", "Lay/traditional explanatory model", "Laboratory finding", "Vaccine reaction"], answer: 1, rationale: "Attributing illness to the evil eye is part of a lay/traditional explanatory model, not the biomedical one." },
      { type: "mcq", q: "'Hot' and 'cold' classifications of food withheld after childbirth are an example of:", options: ["Germ theory", "A vaccine schedule", "A lab test", "Cultural food beliefs"], answer: 3, rationale: "Hot/cold food beliefs are cultural and can affect nutrition in illness and the postnatal period." },
      { type: "mcq", q: "A Bangladeshi healer practising the humoral Unani system is called a:", options: ["Hekim", "Surgeon", "Radiologist", "Pharmacist"], answer: 0, rationale: "The hekim practises the Unani (humoral) system of medicine." },
      { type: "mcq", q: "In Leininger's transcultural model, helping a patient safely change a harmful practice is cultural care:", options: ["Preservation", "Accommodation", "Repatterning", "Imposition"], answer: 2, rationale: "Repatterning helps the patient change harmful practices; preservation maintains helpful ones and accommodation negotiates adjustments." },
      { type: "mcq", q: "The main clinical risk of relying only on traditional healers for a serious, treatable illness is:", options: ["Lower cost", "Delay in effective diagnosis and treatment", "A faster cure in all cases", "Better outcomes"], answer: 1, rationale: "Sole reliance on traditional healers can delay effective biomedical treatment, worsening outcomes." },
      { type: "mcq", q: "When using an interpreter for a patient with limited Bangla or English, best practice is to use:", options: ["A young child in the family", "A trained professional interpreter", "No interpreter at all", "Only written leaflets"], answer: 1, rationale: "A trained professional interpreter protects accuracy and confidentiality; using family (especially children) is discouraged." },
      { type: "mcq", q: "Religion can influence health by providing coping and support AND by shaping:", options: ["Only laboratory values", "Diet, fasting, dress and end-of-life practices", "Nothing relevant to care", "The germ theory"], answer: 1, rationale: "Religion shapes diet, fasting, hygiene, dress, treatment decisions and death/mourning practices." },
      { type: "fill", q: "Judging other cultures by the standards of one's own is called ____.", accept: ["ethnocentrism"], rationale: "Ethnocentrism assumes one's own culture is the standard against which others are judged." },
      { type: "fill", q: "A person's own understanding of the cause and meaning of their illness is called their ____ model.", accept: ["explanatory"], rationale: "The explanatory model (Kleinman) is the patient's personal account of their illness, which the nurse should elicit." }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: "bvs-14-stratification-health",
    unit: "Unit 4 · Society, Culture & Health",
    title: "Social Stratification & Health",
    readMinutes: 28,
    summary: "Social structure, status and role; systems and dimensions of social stratification; social class, mobility and the social determinants of health; the social gradient and life-course effects; explanations of health inequalities; the inverse care law; poverty and gender in Bangladesh; and the nurse's role in advocating for equity.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Social structure, status and role", p: "Social structure is the relatively stable framework of statuses, roles, groups and institutions through which social life is organised. A status is a social position — ascribed (given at birth, e.g. sex, caste, family) or achieved (earned through effort, e.g. occupation). A master status dominates how others see a person (e.g. 'patient' or a stigmatised diagnosis). A role is the behaviour expected of a status. People hold many statuses (a status set), sometimes with clashing demands (role conflict). This structure patterns opportunity, resources and health across a society." },
      { h: "Social stratification", p: "Social stratification is the systematic ranking of groups of people into layers (strata) with unequal access to valued resources. Weber identified three dimensions: class (economic/wealth), power (ability to influence others) and status/prestige (social honour). Major historical systems include slavery, estate, caste (closed, ascribed) and class (open, allowing mobility). Modern societies are chiefly class-based, though caste and other divisions persist in parts of South Asia. Stratification is a fundamental cause of unequal life chances, including health, education and life expectancy." },
      { h: "Social class and social mobility", list: [
        "Social class — a stratum defined by economic and social position (income, occupation, education, wealth).",
        "Social mobility — movement between strata: upward or downward.",
        "Intergenerational mobility — change between generations (parent to child); intragenerational — change within one lifetime.",
        "Open systems (class) permit mobility; closed systems (caste) largely do not.",
        "Education, occupation and economic change are major routes of mobility.",
        "Class is measured in different ways (occupation-based scales, income, education), each capturing part of a complex reality."
      ] },
      { h: "The social determinants of health", p: "The social determinants of health are the conditions in which people are born, grow, live, work and age. They include income and poverty, education, employment and working conditions, housing, water and sanitation, food security, gender, social exclusion and access to health services. These determinants, largely shaped by stratification, explain much of the variation in health within and between populations — more than health care alone (health care contributes only a modest share of population health).", figure: {
        caption: "Social determinants of health shape health outcomes across the social gradient.",
        svg: '<svg viewBox="0 0 500 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Social determinants of health"><circle cx="250" cy="80" r="42" fill="#15803D"/><text x="250" y="78" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#F0FDF4">HEALTH</text><text x="250" y="93" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#DCFCE7">outcomes</text>' +
          [["Income",25,25],["Education",370,25],["Housing",25,115],["Sanitation",360,115],["Gender",195,8],["Work",200,150]].map(function(p){return '<rect x="'+p[1]+'" y="'+p[2]+'" width="100" height="26" rx="7" fill="#DCFCE7" stroke="#15803D"/><text x="'+(p[1]+50)+'" y="'+(p[2]+18)+'" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '</svg>'
      } },
      { h: "Health inequalities and the social gradient", p: "Health follows a social gradient: at every step down the social ladder, health tends to be worse and life expectancy shorter — not just for the very poorest, but stepwise across the whole hierarchy (the Whitehall studies of civil servants). People in lower socioeconomic positions have higher rates of most diseases, higher infant and maternal mortality, and poorer access to care. This inequality is seen worldwide and within Bangladesh, and is widely judged to be unjust and largely avoidable (a health inequity)." },
      { h: "Distinguishing inequality from inequity", p: "A health inequality is any measurable difference in health between groups. A health inequity is a difference that is unfair, avoidable and unjust — arising from unequal social conditions rather than biology or free choice. Not all differences are inequities (older people naturally have more illness), but differences driven by poverty, discrimination or poor access are. This distinction guides where nurses and policy should intervene and reflects the ethical principle of social justice in nursing." },
      { h: "Explanations of health inequalities", list: [
        "Materialist / structural — poverty and poor material conditions directly damage health (the leading explanation, per the Black Report).",
        "Behavioural / cultural — differences in health behaviours (smoking, diet, exercise), themselves shaped by circumstances.",
        "Psychosocial — the chronic stress of low status, insecurity and relative deprivation harms health.",
        "Selection (health selection) — poor health causes downward mobility (a smaller, reverse-causation effect).",
        "Access — unequal availability and quality of health services (the 'inverse care law': those most in need often receive least).",
        "Life-course — advantages and disadvantages accumulate from before birth across the whole of life."
      ] },
      { h: "The inverse care law", p: "Tudor Hart's inverse care law states that the availability of good medical care tends to vary inversely with the need for it in the population served — those in greatest need often receive the least and poorest-quality care, especially where care is exposed to market forces. It captures how stratification is reproduced within the health system itself, and is a direct call for nurses and services to target resources toward the most disadvantaged rather than assume equal access." },
      { h: "Poverty, gender and health in Bangladesh", p: "Social position shapes health starkly in low- and middle-income settings. Poverty limits nutrition, safe water, sanitation, housing and the ability to pay for care, driving higher rates of infectious disease, undernutrition and maternal and child mortality. Out-of-pocket payment can push families into poverty (catastrophic health expenditure). Gender inequality can affect girls' nutrition, education, autonomy in health decisions and access to maternal care. Nurses working in community and primary health care are positioned to identify and help address these upstream determinants." },
      { h: "Upstream and downstream action", list: [
        "Downstream (individual) — treating illness once it occurs and helping individuals cope.",
        "Midstream — health education, screening and behaviour-change support within communities.",
        "Upstream (structural) — improving the conditions that cause ill health: sanitation, nutrition, income, education.",
        "Primary health care and health promotion act upstream and midstream, giving the greatest population benefit.",
        "Nurses contribute at all three levels but should recognise the power of upstream action for population health."
      ] },
      { h: "The nurse's role in advocating for equity", list: [
        "Recognise the social roots of patients' illness and avoid victim-blaming.",
        "Assess and address social barriers to care (cost, transport, literacy, discrimination).",
        "Provide accessible, non-discriminatory, culturally appropriate care to all.",
        "Contribute to prevention, health education and primary health care that tackle upstream determinants.",
        "Advocate for vulnerable and disadvantaged groups and for fairer, better-targeted services."
      ] },
      { h: "Key terms", list: [
        "Ascribed vs achieved status — position given at birth versus earned through effort.",
        "Social stratification — the ranking of groups into unequal layers.",
        "Social mobility — movement up or down the social hierarchy.",
        "Social gradient in health — the stepwise worsening of health down the social scale.",
        "Health inequity — an unfair, avoidable difference in health.",
        "Social determinants of health — the conditions in which people live, work and age.",
        "Inverse care law — those in greatest need often receive the least care."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define social structure, status and role, and distinguish ascribed from achieved status.",
      "Explain social stratification, Weber's three dimensions, and compare caste and class systems.",
      "Describe the social determinants of health and the social gradient, distinguishing inequality from inequity.",
      "Discuss the main explanations of health inequalities and the inverse care law.",
      "Explain the nurse's role in reducing health inequalities and advocating for equity, using upstream and downstream action."
    ],
    assessment: [
      { type: "mcq", q: "The systematic ranking of groups into unequal layers is social:", options: ["Mobility", "Stratification", "Socialisation", "Cohesion"], answer: 1, rationale: "Social stratification ranks groups into strata with unequal access to resources." },
      { type: "mcq", q: "A status given at birth, such as sex or family of origin, is:", options: ["Achieved status", "Ascribed status", "Master status", "Role set"], answer: 1, rationale: "Ascribed status is assigned at birth, unlike achieved status earned through effort." },
      { type: "mcq", q: "Weber's three dimensions of stratification are class (wealth), power and:", options: ["Prestige/status", "Height", "Age", "Religion"], answer: 0, rationale: "Weber identified class (wealth), power and status/prestige as the dimensions of stratification." },
      { type: "mcq", q: "A closed stratification system that largely prevents mobility is the:", options: ["Class system", "Caste system", "Open system", "Meritocracy"], answer: 1, rationale: "The caste system is closed and ascribed, limiting mobility; the class system is open." },
      { type: "mcq", q: "A person who is born poor but becomes a doctor within their own lifetime shows:", options: ["Intergenerational mobility", "Intragenerational mobility", "Ascription", "Health selection"], answer: 1, rationale: "Intragenerational mobility is movement between strata within a single lifetime." },
      { type: "mcq", q: "The stepwise worsening of health at each step DOWN the social ladder, shown by the Whitehall studies, is the:", options: ["Social gradient", "Inverse care law", "Placebo effect", "Halo effect"], answer: 0, rationale: "The social gradient describes health worsening at each lower social step, not just among the poorest." },
      { type: "mcq", q: "A difference in health that is unfair, avoidable and rooted in unequal social conditions is a health:", options: ["Inequality only", "Inequity", "Selection effect", "Constant"], answer: 1, rationale: "A health inequity is an unfair, avoidable difference; not every inequality is inequitable." },
      { type: "mcq", q: "That good medical care is often least available where it is most needed is the:", options: ["Inverse care law", "Law of effect", "Weber's law", "Yerkes-Dodson law"], answer: 0, rationale: "Tudor Hart's inverse care law: care availability tends to vary inversely with need." },
      { type: "mcq", q: "The LEADING explanation of health inequalities (per the Black Report) emphasises:", options: ["Poor material and structural conditions (poverty)", "Pure chance", "Genetics only", "The weather"], answer: 0, rationale: "The materialist/structural explanation, stressing poverty and living conditions, is the leading account." },
      { type: "mcq", q: "In reducing health inequalities, the nurse should:", options: ["Blame patients for their illness", "Address social barriers and advocate for equity", "Ignore social factors", "Treat only the wealthy"], answer: 1, rationale: "Nurses address social barriers, avoid victim-blaming and advocate for fair, accessible care." },
      { type: "fill", q: "Movement up or down the social hierarchy is called social ____.", accept: ["mobility"], rationale: "Social mobility is movement between strata, upward or downward." },
      { type: "fill", q: "Tudor Hart's principle that those most in need often receive the least care is the ____ care law.", accept: ["inverse"], rationale: "The inverse care law describes care availability varying inversely with need." }
    ]
  },

  /* ============ TOPIC 15 ============ */
  {
    id: "bvs-15-sick-role",
    unit: "Unit 5 · Behaviour in Health & Illness",
    title: "The Sick Role & Illness Behaviour",
    readMinutes: 28,
    summary: "The concepts of disease, illness and sickness; Parsons' sick role and its criticisms; illness behaviour, symptom perception, illness perceptions and delay; the psychological impact of hospitalisation, institutionalisation and learned helplessness; adherence and concordance; and the nurse's role in supporting adaptive illness behaviour.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Disease, illness and sickness", p: "These related terms are carefully distinguished in behavioural science. Disease is the objective biological pathology (what the doctor diagnoses and measures). Illness is the subjective experience of feeling unwell (what the patient feels, interprets and reports). Sickness is the social role and status of being ill (how society and others recognise and respond to it). A person can have disease without feeling ill (e.g. early hypertension or cancer) or feel ill without demonstrable disease (medically unexplained symptoms) — a crucial insight for holistic nursing that separates the pathology from the person's experience." },
      { h: "The sick role (Parsons)", p: "Talcott Parsons, working from a functionalist perspective, described sickness as a temporary, socially sanctioned deviant role that controls the potential disruption illness causes society. Legitimated by a doctor, it carries two rights and two obligations, and channels the ill person toward recovery and professional care rather than uncontrolled withdrawal from social duties. The physician acts as the gatekeeper who legitimises entry to the role.", figure: {
        caption: "Parsons' sick role — two rights and two obligations.",
        svg: '<svg viewBox="0 0 500 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parsons sick role rights and obligations"><rect x="20" y="20" width="220" height="130" rx="10" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="130" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">RIGHTS</text><text x="35" y="70" font-family="sans-serif" font-size="10" fill="#0F4C3A">1. Exempt from normal roles</text><text x="35" y="95" font-family="sans-serif" font-size="10" fill="#0F4C3A">2. Not blamed for the illness</text><rect x="260" y="20" width="220" height="130" rx="10" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="370" y="42" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">OBLIGATIONS</text><text x="275" y="70" font-family="sans-serif" font-size="10" fill="#0F4C3A">1. Must want to get well</text><text x="275" y="95" font-family="sans-serif" font-size="10" fill="#0F4C3A">2. Must seek &amp; cooperate</text><text x="275" y="112" font-family="sans-serif" font-size="10" fill="#0F4C3A">   with competent help</text></svg>'
      } },
      { h: "Criticisms of the sick role", list: [
        "Fits acute illness but not chronic illness or disability, where full recovery is not expected.",
        "Assumes patients are passive and doctors authoritative — outdated given active, informed, expert patients.",
        "Ignores that access to the sick role depends on social factors and requires legitimation, which is not always granted.",
        "Some conditions are stigmatised and denied the 'not to blame' right (e.g. HIV, mental illness, substance use).",
        "Does not fit conditions people are held responsible for (e.g. lifestyle-related illness).",
        "Overlooks lay illness behaviour occurring before and without medical contact."
      ] },
      { h: "Illness behaviour and symptom perception", p: "Illness behaviour (Mechanic) is what people do when they perceive symptoms — how they notice, interpret, monitor and act on them. Symptom perception is influenced by attention, mood, expectation and competing demands. Whether a symptom leads to action depends on lay beliefs, the visibility and perceived seriousness of the symptom, its interference with life, the tolerance of those around, and access to care (Zola's triggers). The lay referral system — consulting family and friends before professionals — strongly shapes help-seeking." },
      { h: "Illness perceptions (the self-regulatory model)", p: "Leventhal's self-regulatory model holds that patients form organised illness perceptions along five dimensions: identity (label and symptoms), cause, timeline (acute or chronic), consequences, and controllability/cure. These perceptions drive coping and adherence more than the objective diagnosis does — a patient who believes their condition is short-lived may stop medication early. Nurses can assess and, where mistaken, gently correct these perceptions to improve self-management." },
      { h: "Delay in seeking help", list: [
        "Appraisal delay — time to interpret a symptom as a sign of illness.",
        "Illness delay — time from deciding one is ill to deciding to seek care.",
        "Behavioural/utilisation delay — time from deciding to seek care to actually attending.",
        "Common causes include failure to notice or take symptoms seriously, denial, fear of the diagnosis, cost, competing responsibilities, and reliance on lay or traditional advice.",
        "Delay is a major cause of late presentation of serious conditions such as cancer, tuberculosis and myocardial infarction."
      ] },
      { h: "Psychological impact of hospitalisation and institutionalisation", list: [
        "Loss of control, independence and privacy; unfamiliar routines and environment.",
        "Uncertainty, fear and separation from family and familiar surroundings.",
        "Depersonalisation and loss of identity ('the patient in bed 4').",
        "Sensory overload or deprivation (constant noise and light, or monotony), contributing to anxiety and delirium.",
        "Institutionalisation — long-stay patients may become apathetic, dependent and lose the skills of independent living (Goffman's 'total institution').",
        "These stressors can be reduced by information, predictability, privacy, personal belongings and involving the patient."
      ] },
      { h: "Learned helplessness and control", p: "Seligman's learned helplessness describes the passivity, low mood and giving up that develop when a person repeatedly experiences events as uncontrollable. In hospital, where patients often feel they have little control, learned helplessness can undermine motivation, recovery and self-care, and is linked to depression. Restoring even small amounts of genuine control — choices about routine, involvement in decisions, and clear information — counteracts helplessness and improves wellbeing and outcomes, as shown in studies of nursing-home residents given control over small daily matters." },
      { h: "Adherence and concordance", p: "Adherence is the extent to which a patient's behaviour matches agreed recommendations; non-adherence is common (often around a third to a half of patients) and multifactorial. Causes include complex or long regimens, side-effects, poor understanding, forgetting, low self-efficacy, beliefs about the illness and medicine (the necessity-concerns balance), cost, and a poor therapeutic relationship. 'Concordance' reframes the goal as a shared, negotiated agreement between nurse and patient rather than obedient compliance — respecting the patient's views, improving satisfaction and improving outcomes." },
      { h: "Improving adherence — practical strategies", list: [
        "Simplify the regimen (fewer drugs, fewer daily doses, fixed-dose combinations).",
        "Educate clearly, check understanding with teach-back, and provide written information.",
        "Elicit and address the patient's beliefs and concerns about the medicine (necessity-concerns balance).",
        "Build self-efficacy and use reminders, dosette boxes and routines.",
        "Reduce cost and access barriers where possible.",
        "Foster a trusting, collaborative therapeutic relationship (concordance)."
      ] },
      { h: "Nursing role in illness behaviour and the sick role", list: [
        "Understand the patient's own interpretation, illness perceptions and beliefs about their illness.",
        "Support appropriate use of the sick role while encouraging active participation and recovery.",
        "Reduce delay through health education about warning symptoms and prompt help-seeking.",
        "Minimise the harms of hospitalisation: restore control, information, privacy and identity, and prevent learned helplessness and institutionalisation.",
        "Promote adherence/concordance through simple regimens, education, self-efficacy and partnership."
      ] },
      { h: "Clinical relevance — supporting adaptive illness behaviour", list: [
        "Ask the patient what they think is wrong and what worries them most (their illness perceptions).",
        "Legitimate genuine illness while encouraging the maximum safe activity and participation.",
        "Teach the community to recognise red-flag symptoms and to seek help promptly to cut delay.",
        "In hospital, give choices, information, privacy and routine to prevent learned helplessness.",
        "Treat non-adherence as a problem to solve together (concordance), not as disobedience to punish."
      ] },
      { h: "Key terms", list: [
        "Disease vs illness vs sickness — objective pathology, subjective experience, and social role.",
        "Sick role — the socially sanctioned role of the ill person (Parsons).",
        "Illness behaviour — how people perceive and respond to symptoms (Mechanic).",
        "Illness perceptions — the five-dimension self-regulatory model (Leventhal).",
        "Lay referral system — consulting family and friends before professionals.",
        "Learned helplessness — passivity from perceived lack of control (Seligman).",
        "Adherence / concordance — following, or jointly agreeing, a treatment plan."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Distinguish disease, illness and sickness with clinical examples.",
      "Describe Parsons' sick role, its rights and obligations, and its main criticisms.",
      "Explain illness behaviour, illness perceptions (Leventhal), the lay referral system, and the three types of delay in seeking help.",
      "Discuss the psychological impact of hospitalisation, including learned helplessness and institutionalisation, and how to reduce it.",
      "Explain adherence and concordance and describe practical strategies to improve adherence."
    ],
    assessment: [
      { type: "mcq", q: "The objective biological pathology diagnosed and measured by a clinician is:", options: ["Illness", "Disease", "Sickness", "The sick role"], answer: 1, rationale: "Disease is the objective pathology; illness is the subjective experience of feeling unwell." },
      { type: "mcq", q: "A patient with early hypertension feels completely well. This shows that a person can have:", options: ["illness without disease", "disease without illness", "sickness without a doctor", "a role without rights"], answer: 1, rationale: "Early hypertension is disease (objective pathology) without illness (subjective feeling of being unwell)." },
      { type: "mcq", q: "The socially sanctioned role of the ill person, with rights and obligations, was described by:", options: ["Parsons", "Freud", "Maslow", "Seligman"], answer: 0, rationale: "Talcott Parsons formulated the concept of the sick role." },
      { type: "mcq", q: "Which is an OBLIGATION (not a right) of the Parsonian sick role?", options: ["Exemption from normal roles", "Not being blamed for the illness", "Wanting to get well and seeking competent help", "Receiving sympathy"], answer: 2, rationale: "The obligations are to want to recover and to seek and cooperate with competent help; the rights are exemption and freedom from blame." },
      { type: "mcq", q: "A major criticism of the sick role is that it fits poorly with:", options: ["Acute infection", "Chronic illness and disability", "A broken arm", "A short-lived cold"], answer: 1, rationale: "The sick role assumes recovery, so it fits chronic illness and disability poorly." },
      { type: "mcq", q: "A patient stops medication early because they believe their condition is short-lived. This reflects a mistaken illness perception about:", options: ["Identity", "Timeline", "Cause", "The lay referral system"], answer: 1, rationale: "Leventhal's timeline dimension (acute vs chronic) drives behaviour; believing an illness is short-lived can end treatment prematurely." },
      { type: "mcq", q: "A patient consults family and neighbours about chest symptoms before seeing a nurse or doctor. This is the:", options: ["Sick role", "Lay referral system", "Concordance model", "Inverse care law"], answer: 1, rationale: "The lay referral system is consulting informal social networks before professionals." },
      { type: "mcq", q: "The time taken to interpret a new symptom as a sign of illness is:", options: ["Appraisal delay", "Utilisation delay", "Extinction", "Concordance"], answer: 0, rationale: "Appraisal delay is the interval before a symptom is recognised as possible illness." },
      { type: "mcq", q: "A long-stay patient becomes passive, stops trying and feels nothing they do matters. This is best described as:", options: ["Self-actualisation", "Learned helplessness", "Groupthink", "Social facilitation"], answer: 1, rationale: "Repeated perceived lack of control can produce Seligman's learned helplessness." },
      { type: "mcq", q: "Reframing 'following treatment' as a shared, negotiated agreement between nurse and patient is:", options: ["Concordance", "Obedience", "Coercion", "Health selection"], answer: 0, rationale: "Concordance emphasises partnership and shared decision-making rather than passive compliance." },
      { type: "fill", q: "The objective biological pathology, as opposed to the subjective experience, is called ____.", accept: ["disease"], rationale: "Disease is the objective pathology; illness is the subjective experience of being unwell." },
      { type: "fill", q: "Seligman's passivity resulting from repeated perceived lack of control is called learned ____.", accept: ["helplessness"], rationale: "Learned helplessness develops when events are experienced as uncontrollable." }
    ]
  },

  /* ============ TOPIC 16 ============ */
  {
    id: "bvs-16-lifespan",
    unit: "Unit 5 · Behaviour in Health & Illness",
    title: "Psychology of the Patient Across the Lifespan",
    readMinutes: 28,
    summary: "Lifespan development and its principles; Erikson's psychosocial stages; Piaget's cognitive stages; attachment; nature-nurture and continuity; the psychology of ageing (including the three Ds: delirium, dementia, depression); the psychology of death, dying and grief; age-appropriate reactions to illness; and applying developmental understanding to nursing care and consent.",
    youtubeId: "", tutor: "",
    notes: [
      { h: "Lifespan development", p: "Development is the pattern of change in body, mind and behaviour that continues from conception to death. It is lifelong, multidimensional (physical, cognitive, emotional and social), multidirectional (some capacities grow while others decline), plastic (open to change) and shaped by the interaction of nature and nurture within a historical and cultural context. Understanding development lets the nurse judge whether behaviour is age-appropriate, communicate suitably, and anticipate each stage's health needs and reactions to illness." },
      { h: "Principles of development", list: [
        "Development proceeds in an orderly, largely predictable sequence, though the rate varies between individuals.",
        "It follows cephalocaudal (head-to-toe) and proximodistal (centre-to-periphery) directions in early physical growth.",
        "It moves from general to specific responses and from simple to complex.",
        "Development is continuous but has sensitive/critical periods when particular experiences have the greatest effect.",
        "Both maturation (biological readiness) and learning (experience) are required.",
        "Domains are interlinked — physical, cognitive and social development influence one another."
      ] },
      { h: "Erikson's psychosocial stages", list: [
        "Trust vs mistrust (infancy) — dependable care builds basic trust.",
        "Autonomy vs shame/doubt (toddler, ~1-3 yr) — developing independence and self-control.",
        "Initiative vs guilt (preschool, ~3-6 yr) — exploring, planning and purpose.",
        "Industry vs inferiority (middle childhood, ~6-12 yr) — competence through achievement.",
        "Identity vs role confusion (adolescence) — forming a coherent sense of self.",
        "Intimacy vs isolation (early adulthood) — forming close, committed relationships.",
        "Generativity vs stagnation (middle adulthood) — contributing to and guiding the next generation.",
        "Integrity vs despair (late adulthood) — reflecting on a life as meaningful or regretted."
      ], figure: {
        caption: "Erikson's eight psychosocial stages — each a developmental crisis to resolve.",
        svg: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Erikson psychosocial stages timeline"><line x1="20" y1="80" x2="500" y2="80" stroke="#15803D" stroke-width="3"/>' +
          [["Trust",30],["Autonomy",95],["Initiative",165],["Industry",240],["Identity",315],["Intimacy",380],["Generativity",435],["Integrity",485]].map(function(p,i){var y=(i%2===0)?45:105;return '<circle cx="'+p[1]+'" cy="80" r="5" fill="#0F4C3A"/><text x="'+p[1]+'" y="'+y+'" text-anchor="middle" font-family="sans-serif" font-size="9" font-weight="700" fill="#0F4C3A">'+p[0]+'</text>';}).join('') +
          '<text x="30" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">infancy</text><text x="485" y="135" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#15803D">old age</text></svg>'
      } },
      { h: "Piaget's cognitive stages", list: [
        "Sensorimotor (0-2 yr) — knowing the world through senses and action; developing object permanence.",
        "Preoperational (2-7 yr) — symbolic thought and language, but egocentric, and lacking conservation and reversibility.",
        "Concrete operational (7-11 yr) — logical thinking about concrete situations; conservation and reversibility achieved.",
        "Formal operational (11+ yr) — abstract, hypothetical and systematic reasoning.",
        "The child's cognitive stage determines how illness and treatment can be explained — young children take words literally and cannot grasp abstract explanations.",
        "Key mechanisms are assimilation, accommodation and equilibration through schemas."
      ] },
      { h: "Attachment and early relationships", p: "Bowlby proposed that infants form an attachment — an enduring emotional bond — to a primary caregiver, essential for healthy emotional development and survival. Ainsworth's Strange Situation identified secure and insecure (avoidant, resistant, and later disorganised) attachment patterns. Secure attachment supports later resilience, emotion regulation and relationships, and is captured in an internal working model of relationships. Bowlby's work on separation and maternal deprivation transformed paediatric care: it underpins family-centred care, allowing a parent to stay with a hospitalised child, and minimising separation." },
      { h: "Nature, nurture and continuity across life", p: "Development reflects the lifelong interaction of nature (genetic and maturational programmes) and nurture (experience, family, culture and opportunity). Some influences have their greatest effect during sensitive periods, but the lifespan view stresses plasticity — the capacity for change at every age. There is both continuity (stable traits and attachment styles carried forward) and discontinuity (qualitative shifts, as in Piaget's stages). This balanced view guards nurses against both fatalism ('nothing can change') and ignoring the enduring effects of early experience." },
      { h: "The psychology of ageing", p: "Ageing brings physical change and often some decline in fluid intelligence, processing speed and aspects of memory, while crystallised knowledge, vocabulary and wisdom are generally well maintained. Psychologically, older adults face losses (retirement, bereavement, reduced independence) but many adapt well; activity theory and continuity theory describe pathways to successful ageing, alongside socioemotional selectivity (prioritising meaningful relationships as time is perceived as shorter). Ageism — negative stereotyping of older people — can itself harm health and care, for example when treatable problems are dismissed as 'just old age'." },
      { h: "Delirium, dementia and depression in older patients", list: [
        "Delirium — acute, fluctuating disturbance of attention and consciousness, usually reversible, often triggered by infection, drugs, pain or dehydration; a medical emergency.",
        "Dementia — chronic, progressive, largely irreversible decline in memory and cognition with clear consciousness.",
        "Depression — low mood and loss of interest; can mimic dementia ('pseudodementia') and is treatable.",
        "The three Ds are distinguished mainly by onset and course: delirium is acute and fluctuating, dementia is gradual and progressive, depression has a distinct low mood.",
        "Nurses must not dismiss delirium and depression as 'just old age', because both are reversible and treatable."
      ], figure: {
        caption: "The three Ds in older patients — distinguished by onset and course.",
        svg: '<svg viewBox="0 0 500 130" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Delirium dementia depression comparison"><rect x="15" y="30" width="150" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="90" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Delirium</text><text x="90" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">acute, fluctuating</text><text x="90" y="88" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">reversible</text><rect x="175" y="30" width="150" height="70" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="250" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Dementia</text><text x="250" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">gradual, progressive</text><text x="250" y="88" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">irreversible</text><rect x="335" y="30" width="150" height="70" rx="8" fill="#DCFCE7" stroke="#15803D" stroke-width="2"/><text x="410" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" font-weight="700" fill="#0F4C3A">Depression</text><text x="410" y="72" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">low mood</text><text x="410" y="88" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#0F4C3A">treatable</text></svg>'
      } },
      { h: "The psychology of death, dying and grief", p: "Kubler-Ross described common (not fixed, ordered or universal) reactions to dying and loss: denial, anger, bargaining, depression and acceptance. Grief is a normal response to loss and varies by individual and culture; models such as the dual-process model (oscillating between loss-oriented and restoration-oriented coping) and continuing bonds have refined the older 'stages' view. Complicated (prolonged) grief may need specialist help. Nurses provide palliative and end-of-life care — honest, compassionate communication, symptom relief, respect for the person's wishes and culture, and support for the bereaved family." },
      { h: "Reactions to illness and hospitalisation by age", list: [
        "Infants and toddlers — distress is driven by separation from carers and disrupted routine; comfort and parental presence are key.",
        "Preschool children — may see illness or procedures as punishment (magical, egocentric thinking); need simple, honest, reassuring explanation.",
        "School-age children — want to understand and to keep some control and competence; involve them appropriately.",
        "Adolescents — value autonomy, privacy, body image and peer acceptance; illness threatens emerging identity.",
        "Older adults — fear loss of independence and dignity; support integrity, autonomy and continuity."
      ] },
      { h: "Clinical relevance — age-appropriate assessment and consent", list: [
        "Judge whether behaviour and understanding are appropriate to the developmental stage.",
        "For children, obtain consent from those with parental responsibility while involving the child as far as they can understand.",
        "For adults, assess capacity individually — never assume incapacity from age or diagnosis.",
        "Use developmentally suitable pain assessment tools (e.g. faces scales for young children).",
        "Adapt teaching, comfort measures and the environment to the patient's life stage."
      ] },
      { h: "Key terms", list: [
        "Psychosocial crisis — the central conflict of each Eriksonian stage.",
        "Object permanence — awareness that objects exist when out of sight (sensorimotor stage).",
        "Conservation — understanding that quantity is unchanged despite changes in appearance (concrete operational).",
        "Attachment — the enduring emotional bond between infant and caregiver.",
        "The three Ds — delirium, dementia and depression in older adults.",
        "Socioemotional selectivity — prioritising meaningful relationships in later life.",
        "Palliative care — care focused on comfort and quality of life in serious illness."
      ] }
    ],
    references: REF_BVS,
    examQuestions: [
      "Define development and state its main principles.",
      "Describe Erikson's psychosocial stages across the lifespan.",
      "Outline Piaget's stages of cognitive development and their relevance to explaining illness to children.",
      "Explain attachment theory and its importance in paediatric nursing, and distinguish the three Ds in older patients.",
      "Describe the psychology of dying and grief and the nurse's role in end-of-life care."
    ],
    assessment: [
      { type: "mcq", q: "Erikson's psychosocial crisis of infancy is:", options: ["Trust vs mistrust", "Autonomy vs shame", "Identity vs role confusion", "Integrity vs despair"], answer: 0, rationale: "Trust vs mistrust is the first Eriksonian stage, in infancy, built on dependable care." },
      { type: "mcq", q: "The central developmental task of adolescence in Erikson's theory is:", options: ["Intimacy vs isolation", "Identity vs role confusion", "Industry vs inferiority", "Generativity vs stagnation"], answer: 1, rationale: "Adolescence centres on forming identity versus role confusion." },
      { type: "mcq", q: "A 4-year-old is told they will 'lose a little blood' and becomes terrified they will be emptied out. This reflects Piaget's:", options: ["Formal operational literal reasoning", "Preoperational, literal and egocentric thinking", "Concrete operational logic", "Sensorimotor stage"], answer: 1, rationale: "Preoperational children (2-7 yr) think literally and egocentrically, so figurative language can frighten them." },
      { type: "mcq", q: "Abstract and hypothetical reasoning characterises Piaget's ____ stage.", options: ["Sensorimotor", "Preoperational", "Concrete operational", "Formal operational"], answer: 3, rationale: "Formal operational thought (11+ years) enables abstract, hypothetical and systematic reasoning." },
      { type: "mcq", q: "Ainsworth's laboratory method for classifying infant attachment is the:", options: ["Strange Situation", "Bobo doll study", "Rorschach test", "Stanford-Binet"], answer: 0, rationale: "The Strange Situation classifies secure and insecure infant attachment patterns." },
      { type: "mcq", q: "An older patient develops acute, fluctuating confusion over two days during a urinary infection. The most likely diagnosis is:", options: ["Dementia", "Delirium", "Normal ageing", "Formal operational decline"], answer: 1, rationale: "Acute, fluctuating onset with an infection points to delirium, which is usually reversible, not dementia." },
      { type: "mcq", q: "With ageing, which ability is generally BEST maintained?", options: ["Processing speed", "Fluid intelligence", "Crystallised intelligence", "Reaction time"], answer: 2, rationale: "Crystallised intelligence (knowledge, vocabulary) is well preserved, while fluid abilities and speed decline." },
      { type: "mcq", q: "Kubler-Ross's commonly described reactions to dying include denial, anger, bargaining, depression and:", options: ["Acceptance", "Industry", "Autonomy", "Conservation"], answer: 0, rationale: "Kubler-Ross described denial, anger, bargaining, depression and acceptance, though these are not fixed or universal." },
      { type: "mcq", q: "To reduce distress in a hospitalised young child, protecting attachment, the nurse should:", options: ["Separate the child from parents", "Allow a parent to stay with the child", "Avoid all explanation", "Restrict visiting"], answer: 1, rationale: "Keeping a parent present supports attachment and reduces separation distress (Bowlby)." },
      { type: "mcq", q: "Care focused on comfort and quality of life rather than cure in serious illness is:", options: ["Curative care", "Palliative care", "Intensive care", "Preventive care"], answer: 1, rationale: "Palliative care prioritises comfort, symptom relief and quality of life." },
      { type: "fill", q: "In Piaget's theory, awareness that objects still exist when out of sight is called object ____.", accept: ["permanence"], rationale: "Object permanence develops in the sensorimotor stage (0-2 years)." },
      { type: "fill", q: "In older patients, the acute, fluctuating, usually reversible confusion often caused by infection is called ____.", accept: ["delirium"], rationale: "Delirium is acute and reversible, and must be distinguished from chronic dementia." }
    ]
  }
];
