/* ============================================================
   B.Sc. in Nursing (2018) . Year 2 . B234 Orthopedic Nursing
   -- 14 topics. Aligned to the BNMC 4-year B.Sc. syllabus
   (foundations & immobility; trauma -- fractures, dislocations,
   amputation; degenerative, inflammatory, infective, spinal,
   congenital & metabolic disorders; orthopedic surgery &
   assistive devices). Advanced degree-level. Grounded in:
     - Maheshwari J, Mhaskar VA. Essential Orthopaedics. Jaypee.
     - Smeltzer SC, Bare BG. Brunner & Suddarth's Textbook of
       Medical-Surgical Nursing (Musculoskeletal). Lippincott.
     - Maher AB, Salmond SW, Pellino TA. Orthopaedic Nursing.
       W.B. Saunders.
   ============================================================ */
window.Academic = window.Academic || {};
window.Academic.topics = window.Academic.topics || {};

var REF_ORT = [
  'Maheshwari J, Mhaskar VA. Essential Orthopaedics. Jaypee Brothers Medical Publishers.',
  'Smeltzer SC, Bare BG, Hinkle JL, Cheever KH. Brunner & Suddarth\'s Textbook of Medical-Surgical Nursing (Musculoskeletal Function). Lippincott Williams & Wilkins.',
  'Maher AB, Salmond SW, Pellino TA. Orthopaedic Nursing. W.B. Saunders.'
];

window.Academic.topics["bsc-nursing/orthopedic-nursing"] = [

  /* ============ TOPIC 1 ============ */
  {
    id: 'ort-01-intro',
    unit: 'Unit 1 · Foundations',
    title: 'Introduction to Orthopedic Nursing & Musculoskeletal Assessment',
    readMinutes: 24,
    summary: 'Meaning, scope and philosophy of orthopedic nursing; the multidisciplinary team; classification of orthopedic problems; psychosocial and spiritual dimensions; and the systematic, degree-level nursing assessment of the musculoskeletal system including neurovascular and functional evaluation.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'What is orthopedics?', p: 'Orthopedics is the branch of medicine and surgery concerned with the prevention, diagnosis, treatment and rehabilitation of disorders and injuries of the musculoskeletal system — the bones, joints, muscles, tendons, ligaments, fasciae and peripheral nerves that permit movement and give the body support and shape. The term derives from the Greek \'orthos\' (straight) and \'paidion\' (child), reflecting the discipline\'s historical origin in correcting childhood deformity; the modern scope spans trauma, degenerative disease, oncology, sports medicine and reconstructive surgery across the lifespan.' },
      { h: 'Orthopedic nursing: definition and philosophy', p: 'Orthopedic nursing is the specialty concerned with the holistic, client-centered nursing care of persons with actual or potential musculoskeletal dysfunction, from acute trauma to chronic disabling disease. Its guiding philosophy is the restoration and maintenance of maximal functional independence within the context of the individual\'s family and community. Care is grounded in the bio-psycho-social-spiritual model: the nurse addresses not only the injured bone but the person\'s mobility, self-image, roles, livelihood and coping.' },
      { h: 'Scope and aims', list: [
        'Relief of pain and prevention of suffering.',
        'Safe application and monitoring of immobilization (casts, splints, traction, external fixators).',
        'Prevention of the complications of immobility and of orthopedic devices.',
        'Restoration of function through progressive mobilization and rehabilitation.',
        'Health promotion, injury prevention and safety education for individuals and groups.',
        'Support for adaptation to altered body image, disability or amputation.'
      ] },
      { h: 'Roles and responsibilities of the orthopedic nurse', list: [
        'Caregiver — pain relief, therapeutic positioning, neurovascular surveillance, wound and device care.',
        'Educator — teaching the patient and family about the condition, exercises, mobility aids and home management.',
        'Preventer of complications — averting pressure injury, venous thromboembolism, chest infection, constipation, contracture and compartment syndrome.',
        'Rehabilitator — promoting exercise, ambulation and self-care to restore independence.',
        'Coordinator and advocate — integrating the interdisciplinary plan and speaking for the patient\'s needs and safety.',
        'Counsellor — supporting psychological adjustment through prolonged immobility, disability, disfigurement or loss.'
      ] },
      { h: 'The interdisciplinary orthopedic team', p: 'Orthopedic care is inherently multidisciplinary. The team typically comprises the orthopedic surgeon, orthopedic nurse, physiotherapist (movement and strength), occupational therapist (activities of daily living and adaptive equipment), orthotist/prosthetist (braces and artificial limbs), medical social worker, dietitian, pharmacist and radiographer. The nurse is the constant presence at the bedside who coordinates, reinforces and personalizes the whole team\'s plan, ensuring continuity and the patient\'s voice within it.' },
      { h: 'Classification of orthopedic problems', list: [
        'Traumatic — fractures, dislocations, sprains, strains and soft-tissue injuries.',
        'Degenerative — osteoarthritis and degenerative disc disease.',
        'Inflammatory / autoimmune — rheumatoid arthritis and connective-tissue disease.',
        'Infective — osteomyelitis, septic arthritis and skeletal tuberculosis.',
        'Congenital / developmental — clubfoot (CTEV), developmental dysplasia of the hip, cerebral palsy, spina bifida.',
        'Metabolic — rickets, osteomalacia and osteoporosis.',
        'Neoplastic — benign and malignant primary tumours and metastatic bone disease.'
      ] },
      { h: 'Acute vs chronic orthopedic conditions', p: 'Acute conditions (a fresh fracture or dislocation) arise suddenly, are often intensely painful and demand urgent stabilization. Chronic conditions (arthritis, low back pain, established deformity) evolve slowly, persist for years and require ongoing management, exercise and adaptation. Nursing priorities shift accordingly: acute care emphasizes stabilization, analgesia, neurovascular protection and prevention of early complications, whereas chronic care emphasizes self-management, functional maintenance, pacing and quality of life.' },
      { h: 'Psychosocial and spiritual dimensions', p: 'Musculoskeletal illness threatens mobility, independence, employment and body image. Prolonged immobilization can precipitate anxiety, depression, powerlessness and social isolation; amputation and permanent disability may provoke grief. Spiritual concerns — the search for meaning, hope and dignity — often surface. The degree-prepared nurse assesses coping, support systems and cultural/spiritual needs, and integrates counselling and referral into the plan of care.' },
      { h: 'Ethical and legal considerations', p: 'Orthopedic practice raises informed consent (for surgery, amputation), the right to refuse treatment, restraint and safety issues during confusion, documentation of neurovascular checks (a common medico-legal focus), and equitable access to rehabilitation and assistive devices. The nurse safeguards autonomy, confidentiality and beneficence while maintaining accurate, contemporaneous records.' },
      { h: 'The musculoskeletal nursing assessment', p: 'A systematic assessment integrates a focused history with structured physical examination.', list: [
        'History — presenting complaint (pain, swelling, deformity, loss of function), mechanism of injury, comorbidity, drugs, occupation, functional baseline and impact on daily living.',
        'Inspection — swelling, deformity, shortening, wounds, bruising, erythema, muscle wasting; always compare with the contralateral side.',
        'Palpation — tenderness, warmth, crepitus, abnormal mobility and distal pulses.',
        'Movement — active and passive range of motion, and muscle power graded 0–5.',
        'Measurement — true and apparent limb length and limb girth where indicated.',
        'Neurovascular status distal to the lesion — the \'5 Ps\'.'
      ] },
      { h: 'Pain assessment', p: 'Pain is assessed with a validated tool (numeric rating scale 0–10, or a faces scale for children) and characterized by site, onset, character, radiation, aggravating/relieving factors and severity. Sudden, disproportionate, unrelenting pain — especially in a casted limb — must never be dismissed; it is the cardinal early warning of compartment syndrome and mandates immediate escalation.' },
      { h: 'Muscle power grading (MRC scale)', list: [
        '0 — no contraction.',
        '1 — flicker or trace of contraction.',
        '2 — active movement with gravity eliminated.',
        '3 — active movement against gravity.',
        '4 — active movement against gravity and some resistance.',
        '5 — normal power against full resistance.'
      ] },
      { h: 'Normal values / key figures', list: [
        'Capillary refill time — normally under 2 seconds.',
        'Muscle power — graded 0–5 on the MRC scale.',
        'Neurovascular checks post-injury/cast — commonly hourly for the first 24 hours, then as ordered.',
        'Adult bone remodels continuously; peak bone mass is reached by about age 30.'
      ] },
      { h: 'Neurovascular assessment: the 5 Ps', figure: {
        caption: 'The 5 Ps of neurovascular assessment — screened distal to any injury, cast or traction to detect ischaemia or nerve compromise early.',
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The five Ps of neurovascular assessment"><rect x="20" y="20" width="520" height="200" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="48" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="#0F4C3A">Neurovascular Assessment — the 5 Ps</text><g font-family="sans-serif" font-size="13" fill="#15803D"><rect x="40" y="66" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="86" font-weight="700" fill="#0F4C3A">Pain</text><text x="120" y="86">out of proportion?</text><rect x="40" y="104" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="124" font-weight="700" fill="#0F4C3A">Pallor</text><text x="120" y="124">colour, warmth, CRT</text><rect x="40" y="142" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="162" font-weight="700" fill="#0F4C3A">Pulse</text><text x="120" y="162">present distally?</text><rect x="290" y="66" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="86" font-weight="700" fill="#0F4C3A">Paraesthesia</text><text x="410" y="86">tingling / numbness</text><rect x="290" y="104" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="124" font-weight="700" fill="#0F4C3A">Paralysis</text><text x="410" y="124">movement lost?</text></g><text x="280" y="200" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0F4C3A">Any deterioration → loosen constriction &amp; escalate immediately</text></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'Define orthopedic nursing and discuss its scope, philosophy and aims at degree level.',
      'Describe the roles and responsibilities of the orthopedic nurse within the interdisciplinary team.',
      'Explain the classification of orthopedic problems with one example of each.',
      'Describe the systematic nursing assessment of the musculoskeletal system.',
      'Discuss the psychosocial, spiritual, ethical and legal considerations in orthopedic care.'
    ],
    assessment: [
      { type: "mcq", q: 'The literal origin of the word \'orthopedics\' reflects its historical focus on:', options: ['Straightening children\'s deformities', 'Setting fractures', 'Joint replacement', 'Spinal surgery'], answer: 0, rationale: '\'Orthos\' (straight) + \'paidion\' (child): the field began with correction of childhood deformity.' },
      { type: "mcq", q: 'A nurse notes sudden severe pain unrelieved by analgesia in a casted forearm. The priority action is to:', options: ['Reassure and reassess in one hour', 'Give a further opioid dose', 'Escalate urgently and prepare to relieve constriction', 'Elevate the limb and document only'], answer: 2, rationale: 'Disproportionate unrelenting pain is the cardinal early sign of compartment syndrome; it demands immediate escalation and relief of constriction, not delay.' },
      { type: "mcq", q: 'Which finding is assessed as part of the \'5 Ps\'?', options: ['Proteinuria', 'Paraesthesia', 'Pyrexia', 'Polyuria'], answer: 1, rationale: 'The 5 Ps are Pain, Pallor, Pulse, Paraesthesia and Paralysis — the neurovascular screen distal to injury.' },
      { type: "mcq", q: 'On the MRC scale, active movement against gravity but not against resistance is graded:', options: ['Grade 2', 'Grade 4', 'Grade 5', 'Grade 3'], answer: 3, rationale: 'Grade 3 is movement against gravity; grade 4 adds some resistance; grade 5 is normal power.' },
      { type: "mcq", q: 'A normal capillary refill time is:', options: ['Under 2 seconds', '3–4 seconds', 'About 6 seconds', 'Over 8 seconds'], answer: 0, rationale: 'Refill within 2 seconds indicates adequate peripheral perfusion; prolongation suggests vascular compromise.' },
      { type: "mcq", q: 'The philosophy underpinning orthopedic nursing is best described as:', options: ['Disease-focused biomedical care', 'Purely surgical management', 'Restoration of maximal functional independence within a bio-psycho-social-spiritual model', 'Palliative comfort only'], answer: 2, rationale: 'Holistic, client-centered care aimed at functional independence within the person\'s context is the specialty\'s core philosophy.' },
      { type: "mcq", q: 'Which professional primarily fits and supplies artificial limbs?', options: ['Occupational therapist', 'Prosthetist', 'Physiotherapist', 'Dietitian'], answer: 1, rationale: 'The prosthetist designs and fits prostheses; the orthotist supplies braces/splints.' },
      { type: "mcq", q: 'Osteoarthritis is classified under which category of orthopedic problems?', options: ['Infective', 'Neoplastic', 'Congenital', 'Degenerative'], answer: 3, rationale: 'Osteoarthritis is a degenerative joint disorder; rheumatoid arthritis by contrast is inflammatory/autoimmune.' },
      { type: "mcq", q: 'When measuring for a suspected limb-length discrepancy, the nurse should always:', options: ['Measure only the affected limb', 'Rely on visual inspection alone', 'Compare with the contralateral (opposite) limb', 'Measure girth instead of length'], answer: 2, rationale: 'Comparison with the unaffected side is essential to interpret asymmetry in length, girth and appearance.' },
      { type: "mcq", q: 'A key medico-legal focus in orthopedic documentation is:', options: ['The record of serial neurovascular checks', 'Meal preferences', 'Visiting hours', 'The patient\'s postcode'], answer: 0, rationale: 'Failure to detect or document deteriorating neurovascular status is a common source of orthopedic litigation.' },
      { type: "fill", q: 'The neurovascular screen distal to an injury is summarized as the ____ Ps.', accept: ['5', 'five'], rationale: 'Pain, Pallor, Pulse, Paraesthesia and Paralysis.' },
      { type: "fill", q: 'On the MRC scale, normal power against full resistance is grade ____.', accept: ['5', 'five'], rationale: 'Grade 5 denotes normal muscle power.' }
    ]
  },

  /* ============ TOPIC 2 ============ */
  {
    id: 'ort-02-msk-review',
    unit: 'Unit 1 · Foundations',
    title: 'Review of the Musculoskeletal System & Orthopedic Investigations',
    readMinutes: 25,
    summary: 'Applied structure and function of bone, joints, muscle, cartilage, tendon and ligament; bone composition, types and remodeling; joint classification; and the imaging, laboratory and specialised investigations used in orthopedics with their nursing implications.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Functions of the musculoskeletal system', list: [
        'Support — the skeletal framework gives the body shape and upright posture.',
        'Movement — bones act as levers moved by muscles across joints.',
        'Protection — the skull, ribs and vertebrae shield vital organs.',
        'Mineral homeostasis — bone stores 99% of body calcium and most phosphate.',
        'Haematopoiesis — red marrow produces blood cells.',
        'Energy storage — yellow marrow stores fat.'
      ] },
      { h: 'Composition of bone', p: 'Bone is a living connective tissue. Its organic matrix (about one-third), chiefly type I collagen (osteoid), provides tensile strength and flexibility; its inorganic component (about two-thirds), mainly calcium hydroxyapatite, provides compressive strength and rigidity. The cellular elements are osteoblasts (bone-forming), osteocytes (mature maintaining cells) and osteoclasts (bone-resorbing). This balance of formation and resorption underlies remodeling.' },
      { h: 'Types of bone by shape', list: [
        'Long bones — femur, humerus, tibia (leverage and movement).',
        'Short bones — carpals and tarsals (stability with limited motion).',
        'Flat bones — skull, sternum, scapula (protection and muscle attachment).',
        'Irregular bones — vertebrae, mandible.',
        'Sesamoid bones — patella (protect tendons and improve leverage).'
      ] },
      { h: 'Structure of a long bone', p: 'A long bone has a diaphysis (shaft) of compact cortical bone surrounding a medullary cavity; two epiphyses (ends) of spongy (cancellous) trabecular bone covered by articular cartilage; and a metaphysis between them containing the epiphyseal (growth) plate in children. The periosteum covers the outer surface and carries the blood and nerve supply; the endosteum lines the inner cavity.' },
      { h: 'Cortical vs cancellous bone', p: 'Cortical (compact) bone forms the dense outer shell and about 80% of skeletal mass, providing strength and protection; it is organized into osteons (Haversian systems). Cancellous (trabecular/spongy) bone forms a lattice at bone ends, is metabolically active, absorbs shock and houses marrow. Its high surface area makes it the first site of bone loss in osteoporosis.' },
      { h: 'Bone growth and remodeling', p: 'Long bones lengthen by endochondral ossification at the epiphyseal plate until the plate fuses in late adolescence; they thicken by appositional growth from the periosteum. Throughout life bone is continuously remodeled: osteoclasts resorb old bone and osteoblasts lay down new bone, coupled and regulated by mechanical load, parathyroid hormone, calcitonin, vitamin D and sex hormones. Peak bone mass is reached by about age 30, after which resorption gradually exceeds formation.' },
      { h: 'Classification of joints', list: [
        'Fibrous (synarthroses) — immovable, e.g. skull sutures.',
        'Cartilaginous (amphiarthroses) — slightly movable, e.g. intervertebral discs and pubic symphysis.',
        'Synovial (diarthroses) — freely movable, e.g. knee, hip, shoulder.'
      ] },
      { h: 'The synovial joint', p: 'A synovial joint has articular (hyaline) cartilage on the bone ends, a joint capsule lined by synovial membrane that secretes lubricating synovial fluid, and a joint cavity. Ligaments stabilize the joint; some joints contain menisci (knee) or bursae. Articular cartilage is avascular and aneural, which is why it heals poorly — the basis of osteoarthritis.' },
      { h: 'Muscle, tendon and ligament', p: 'Skeletal muscle produces movement by contraction and is attached to bone by tendons (dense collagen connecting muscle to bone). Ligaments (dense collagen connecting bone to bone) stabilize joints. Cartilage is avascular connective tissue; hyaline covers joint surfaces, fibrocartilage forms the discs and menisci. Because tendons and ligaments have a limited blood supply, they heal slowly.' },
      { h: 'Radiological investigations', list: [
        'Plain X-ray — first-line for fractures, dislocations, arthritis and bone lesions; always at least two views (AP and lateral) and, ideally, the joints above and below.',
        'CT scan — detailed cross-sectional bony anatomy, complex/intra-articular fractures and spine.',
        'MRI — best for soft tissue: discs, ligaments, menisci, marrow, tumours and early infection.',
        'Bone scan (scintigraphy) — detects increased bone turnover in occult fracture, infection, metastasis.',
        'Ultrasound — soft-tissue masses, effusions, developmental dysplasia of the hip in infants.',
        'DEXA scan — measures bone mineral density to diagnose osteoporosis.'
      ] },
      { h: 'DEXA and the T-score', p: 'Dual-energy X-ray absorptiometry (DEXA) reports bone mineral density as a T-score (standard deviations from young-adult peak mass). A T-score of −1.0 or above is normal; −1.0 to −2.5 is osteopenia; and −2.5 or below is osteoporosis. The Z-score compares to age-matched peers and is used in the young.' },
      { h: 'Laboratory investigations', list: [
        'Serum calcium, phosphate and alkaline phosphatase — bone metabolism (raised ALP in Paget\'s, healing fracture, rickets).',
        'Serum uric acid — gout.',
        'Rheumatoid factor and anti-CCP — rheumatoid arthritis.',
        'ESR and C-reactive protein — inflammation and infection.',
        'Full blood count and blood culture — infection.',
        'Vitamin D — deficiency in rickets/osteomalacia.'
      ] },
      { h: 'Invasive and special investigations', list: [
        'Arthroscopy — direct joint visualization and minimally invasive surgery (knee, shoulder).',
        'Joint aspiration (arthrocentesis) — synovial fluid for cell count, crystals, culture (septic vs gout).',
        'Bone biopsy — histology of tumour or infection.',
        'Electromyography (EMG) and nerve conduction — nerve and muscle disorders.',
        'Arthrography — contrast study of a joint.'
      ] },
      { h: 'Nursing responsibilities in investigations', list: [
        'Explain the procedure and obtain informed consent as required.',
        'Screen for contraindications — pregnancy (X-ray/CT), pacemaker/metal implants and claustrophobia (MRI), contrast allergy and renal function.',
        'Remove metal objects before X-ray/MRI; ensure fasting where required.',
        'Provide aseptic technique and post-procedure observation for invasive tests (aspiration, biopsy, arthroscopy) — watch for bleeding, infection and neurovascular change.',
        'Position and support the patient, relieve anxiety, and ensure correct labelling and dispatch of specimens.'
      ] },
      { h: 'Clinical relevance', p: 'Understanding structure explains pathology: avascular cartilage underlies osteoarthritis; poor tendon/ligament blood supply explains slow healing; trabecular bone\'s high turnover explains early osteoporotic loss at the spine and hip; and the epiphyseal plate\'s vulnerability explains growth disturbance after childhood fractures. Matching the right investigation to the suspected lesion — X-ray for bone, MRI for soft tissue, bone scan for occult/metastatic disease — is a core nursing-education point.' }
    ],
    references: REF_ORT,
    examQuestions: [
      'Describe the composition and structure of a long bone and relate it to fracture healing.',
      'Explain bone remodeling and the factors that regulate it.',
      'Classify joints with examples and describe the structure of a synovial joint.',
      'Compare X-ray, CT, MRI and bone scan and state one indication for each.',
      'Describe the nursing responsibilities before and after orthopedic investigations.'
    ],
    assessment: [
      { type: "mcq", q: 'The inorganic component that gives bone its compressive strength is chiefly:', options: ['Calcium hydroxyapatite', 'Type I collagen', 'Elastin', 'Proteoglycan'], answer: 0, rationale: 'Calcium hydroxyapatite provides rigidity/compressive strength; collagen provides tensile strength and flexibility.' },
      { type: "mcq", q: 'Bone-resorbing cells are the:', options: ['Osteoblasts', 'Osteocytes', 'Osteoclasts', 'Chondrocytes'], answer: 2, rationale: 'Osteoclasts resorb bone; osteoblasts form it; osteocytes are mature maintaining cells.' },
      { type: "mcq", q: 'Articular cartilage heals poorly mainly because it is:', options: ['Highly vascular', 'Avascular and aneural', 'Made of bone', 'Rich in osteoblasts'], answer: 1, rationale: 'Hyaline articular cartilage has no blood or nerve supply, so intrinsic repair is very limited — the basis of osteoarthritis.' },
      { type: "mcq", q: 'The best imaging investigation for a suspected torn meniscus or intervertebral disc is:', options: ['Plain X-ray', 'Bone scan', 'DEXA', 'MRI'], answer: 3, rationale: 'MRI excels at soft tissue — menisci, ligaments, discs and marrow — which X-ray cannot show.' },
      { type: "mcq", q: 'A DEXA T-score of −2.7 indicates:', options: ['Osteoporosis', 'Normal bone density', 'Osteopenia', 'Osteomalacia'], answer: 0, rationale: 'A T-score of −2.5 or below defines osteoporosis; −1.0 to −2.5 is osteopenia.' },
      { type: "mcq", q: 'The intervertebral disc is an example of which joint type?', options: ['Fibrous', 'Synovial', 'Cartilaginous', 'Sesamoid'], answer: 2, rationale: 'The disc is a slightly movable cartilaginous (amphiarthrosis) joint.' },
      { type: "mcq", q: 'Long bones increase in LENGTH at the:', options: ['Periosteum', 'Epiphyseal (growth) plate', 'Endosteum', 'Medullary cavity'], answer: 1, rationale: 'Endochondral ossification at the epiphyseal plate lengthens bone until fusion; periosteal appositional growth increases thickness.' },
      { type: "mcq", q: 'A markedly raised serum alkaline phosphatase in a bone disorder suggests:', options: ['Reduced bone turnover', 'Vitamin C excess', 'Low calcium intake only', 'Increased osteoblastic activity/bone turnover'], answer: 3, rationale: 'ALP reflects osteoblastic activity; it rises in healing fracture, Paget\'s disease, rickets and bony metastases.' },
      { type: "mcq", q: 'Before an MRI, the nurse must specifically check for:', options: ['Recent meals', 'Blood pressure only', 'A cardiac pacemaker or ferromagnetic implants', 'Skin colour'], answer: 2, rationale: 'The strong magnetic field contraindicates pacemakers and many ferromagnetic implants; claustrophobia and metal must be screened.' },
      { type: "mcq", q: 'Joint aspiration is MOST useful to distinguish:', options: ['Septic arthritis from gout', 'A fracture from a sprain', 'Osteoporosis from osteopenia', 'Cortical from cancellous bone'], answer: 0, rationale: 'Synovial fluid analysis for organisms/culture versus crystals differentiates infection from crystal arthropathy.' },
      { type: "fill", q: 'The dense outer shell of a long bone is ____ (compact) bone.', accept: ['cortical', 'compact'], rationale: 'Cortical/compact bone forms the strong outer shell (~80% of skeletal mass).' },
      { type: "fill", q: 'Bone mineral density is measured by a ____ scan.', accept: ['DEXA', 'DXA', 'dexa'], rationale: 'Dual-energy X-ray absorptiometry (DEXA) diagnoses osteoporosis via the T-score.' }
    ]
  },

  /* ============ TOPIC 3 ============ */
  {
    id: 'ort-03-immobility',
    unit: 'Unit 2 · Immobility',
    title: 'Immobility — Effects, Complications & Nursing Care',
    readMinutes: 25,
    summary: 'Definition and causes of immobility; systematic multisystem adverse effects of prolonged bed rest; risk assessment; and the evidence-based nursing prevention and management of the hazards of immobility in orthopedic patients.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Definition', p: 'Immobility is the inability to move about freely, ranging from restricted movement of a single limb to complete bed rest. In orthopedics it is often therapeutic and unavoidable (traction, casting, post-operative rest), yet immobility itself is hazardous: it affects virtually every body system and is a leading source of preventable orthopedic complications. A core nursing goal is to secure the benefits of rest while preventing its harms.' },
      { h: 'Causes of immobility', list: [
        'Musculoskeletal — fractures, joint disease, amputation, prescribed traction/casting.',
        'Neurological — stroke, spinal cord injury, paralysis, coma.',
        'Medical — critical illness, severe cardiac or respiratory disease, prolonged surgery.',
        'Pain and its fear.',
        'Psychological — depression, low motivation.',
        'Iatrogenic — bed rest, restraints, drains and lines.'
      ] },
      { h: 'Musculoskeletal effects', list: [
        'Muscle atrophy and loss of strength — up to 3% of muscle strength may be lost per day of complete rest.',
        'Joint contractures from shortening of soft tissues in a fixed position.',
        'Disuse osteoporosis from lack of weight-bearing stress and increased bone resorption, raising fracture and hypercalcaemia risk.',
        'Foot drop from unsupported plantar flexion.'
      ] },
      { h: 'Cardiovascular effects', list: [
        'Orthostatic (postural) hypotension on first standing, from loss of vasomotor reflexes.',
        'Increased cardiac workload and reduced exercise tolerance.',
        'Venous stasis predisposing to deep vein thrombosis (DVT) and pulmonary embolism — one of Virchow\'s triad, alongside hypercoagulability and endothelial injury.'
      ] },
      { h: 'Respiratory effects', list: [
        'Reduced chest expansion and pooling of secretions.',
        'Atelectasis (collapse of alveoli).',
        'Hypostatic pneumonia from stagnant secretions and impaired cough.'
      ] },
      { h: 'Integumentary effects — pressure injury', p: 'Sustained pressure over bony prominences (sacrum, heels, greater trochanter, elbows, occiput) occludes capillaries; combined with shear, friction and moisture this causes ischaemia and pressure ulceration. Pressure injuries can develop within hours and are staged I–IV; prevention is far easier than cure and is a key nursing quality indicator.' },
      { h: 'Gastrointestinal and urinary effects', list: [
        'Constipation from reduced peristalsis, low fibre/fluid intake and difficulty using a bedpan.',
        'Anorexia and reduced intake.',
        'Urinary stasis, calculi (from hypercalciuria) and urinary tract infection.',
        'Incomplete bladder emptying and retention.'
      ] },
      { h: 'Metabolic and psychosocial effects', list: [
        'Negative nitrogen balance and protein catabolism impairing healing.',
        'Hypercalcaemia from bone resorption.',
        'Insulin resistance and reduced basal metabolic rate.',
        'Boredom, anxiety, depression, sleep disturbance, sensory deprivation and dependence.'
      ] },
      { h: 'Risk assessment', p: 'Structured tools guide preventive care: the Braden or Waterlow scale grades pressure-injury risk; a VTE risk assessment (e.g. Wells score/hospital tool) guides thromboprophylaxis; and functional/falls assessment guides mobilization. The degree-prepared nurse re-assesses risk regularly, as it changes with the patient\'s condition.' },
      { h: 'Nursing prevention — musculoskeletal & skin', list: [
        'Regular repositioning (commonly 2-hourly) and pressure-redistributing mattresses.',
        'Keep skin clean and dry; inspect pressure areas at each turn.',
        'Passive and active range-of-motion exercises to prevent contracture and atrophy.',
        'Footboard/splints to prevent foot drop; correct anatomical alignment.',
        'Early, graded mobilization and weight-bearing as permitted.'
      ] },
      { h: 'Nursing prevention — cardiovascular & respiratory', list: [
        'Anti-embolic (graduated compression) stockings, calf pump exercises and early ambulation.',
        'Pharmacological thromboprophylaxis (e.g. low-molecular-weight heparin) as prescribed; observe for bleeding.',
        'Gradual position change and dangling before standing to prevent orthostatic hypotension.',
        'Deep breathing and coughing exercises, incentive spirometry and upright positioning to prevent atelectasis and pneumonia.'
      ] },
      { h: 'Nursing prevention — GI, urinary & psychosocial', list: [
        'High-fibre diet, adequate fluids (unless restricted), privacy and a toileting routine to prevent constipation.',
        'Encourage fluids and monitor output to prevent stasis, calculi and infection.',
        'High-protein, high-calorie, calcium- and vitamin-rich diet to support healing and counter negative nitrogen balance.',
        'Diversional activity, orientation, involvement in care and family contact to counter psychological effects.'
      ] },
      { h: 'DVT: recognition and safety', p: 'Suspect DVT with unilateral calf pain, swelling, warmth and redness; suspect pulmonary embolism with sudden dyspnoea, pleuritic chest pain, tachycardia and hypoxia. Do NOT vigorously massage a suspected DVT — this may dislodge an embolus. Report promptly, elevate the limb and anticipate anticoagulation and imaging (Doppler ultrasound).' },
      { h: 'Complications of immobility (summary)', figure: {
        caption: 'System-by-system hazards of immobility — each is largely preventable by proactive nursing care.',
        svg: '<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Complications of immobility by body system"><rect x="15" y="15" width="530" height="230" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="42" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#0F4C3A">Hazards of Immobility</text><g font-family="sans-serif" font-size="12" fill="#15803D"><rect x="35" y="60" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="45" y="78" fill="#0F4C3A"><tspan font-weight="700">MSK:</tspan> atrophy, contracture, osteoporosis</text><rect x="35" y="92" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="45" y="110" fill="#0F4C3A"><tspan font-weight="700">CVS:</tspan> DVT, PE, postural hypotension</text><rect x="35" y="124" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="45" y="142" fill="#0F4C3A"><tspan font-weight="700">Resp:</tspan> atelectasis, pneumonia</text><rect x="285" y="60" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="295" y="78" fill="#0F4C3A"><tspan font-weight="700">Skin:</tspan> pressure injury</text><rect x="285" y="92" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="295" y="110" fill="#0F4C3A"><tspan font-weight="700">GI:</tspan> constipation, anorexia</text><rect x="285" y="124" width="240" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="295" y="142" fill="#0F4C3A"><tspan font-weight="700">GU:</tspan> stasis, calculi, UTI</text><rect x="35" y="156" width="490" height="26" rx="5" fill="#DCFCE7" stroke="#22C55E"/><text x="45" y="174" fill="#0F4C3A"><tspan font-weight="700">Metabolic/psych:</tspan> negative nitrogen balance, hypercalcaemia, depression</text></g><text x="280" y="212" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Prevention: reposition, exercise, mobilize early, hydrate, breathe deeply</text></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'Define immobility and list its causes.',
      'Describe the multisystem adverse effects of prolonged immobility.',
      'Discuss the nursing prevention of deep vein thrombosis and pressure injury in an immobile patient.',
      'Explain how immobility affects bone and calcium metabolism.',
      'Outline a nursing care plan to prevent the complications of immobility after fracture surgery.'
    ],
    assessment: [
      { type: "mcq", q: 'Which triad describes the pathogenesis of venous thrombosis in immobility?', options: ['Virchow\'s triad', 'Beck\'s triad', 'Cushing\'s triad', 'Charcot\'s triad'], answer: 0, rationale: 'Virchow\'s triad — venous stasis, hypercoagulability and endothelial injury — underlies DVT, all promoted by immobility.' },
      { type: "mcq", q: 'A patient on prolonged bed rest reports dizziness on first standing. This reflects:', options: ['Hypercalcaemia', 'Foot drop', 'Orthostatic hypotension', 'Atelectasis'], answer: 2, rationale: 'Loss of vasomotor reflexes causes a fall in BP on standing; prevent by gradual position change and dangling.' },
      { type: "mcq", q: 'The BEST nursing action to prevent hypostatic pneumonia in an immobile patient is to:', options: ['Restrict fluids', 'Encourage deep breathing, coughing and upright positioning', 'Keep the patient flat and still', 'Apply anti-embolic stockings'], answer: 1, rationale: 'Deep breathing, coughing, spirometry and sitting up mobilize secretions and re-expand alveoli.' },
      { type: "mcq", q: 'On finding a warm, swollen, tender calf, the nurse should:', options: ['Vigorously massage the calf', 'Apply firm compression bandage and mobilize hard', 'Ignore it as normal after surgery', 'Report it, elevate the limb and avoid massage'], answer: 3, rationale: 'A suspected DVT must not be massaged (embolism risk); report, elevate and anticipate anticoagulation and Doppler.' },
      { type: "mcq", q: 'Disuse osteoporosis in immobility results primarily from:', options: ['Loss of weight-bearing stress with increased bone resorption', 'Excess weight-bearing', 'Vitamin D excess', 'High dietary calcium'], answer: 0, rationale: 'Without mechanical loading, resorption exceeds formation, weakening bone and releasing calcium (hypercalcaemia).' },
      { type: "mcq", q: 'Which device specifically prevents foot drop in a bed-bound patient?', options: ['Trochanter roll', 'Bed cradle', 'Footboard or foot splint', 'Overhead trapeze'], answer: 2, rationale: 'A footboard/splint keeps the ankle at 90°, preventing plantar-flexion contracture (foot drop).' },
      { type: "mcq", q: 'A validated tool for grading pressure-injury risk is the:', options: ['Wells score', 'Braden scale', 'Glasgow Coma Scale', 'APGAR score'], answer: 1, rationale: 'The Braden (or Waterlow) scale grades pressure-injury risk; the Wells score is for VTE probability.' },
      { type: "mcq", q: 'Negative nitrogen balance during immobility mainly leads to:', options: ['Faster wound healing', 'Weight gain', 'Increased bone density', 'Protein catabolism and impaired healing'], answer: 3, rationale: 'Catabolism exceeds anabolism, breaking down protein and delaying healing; a high-protein diet counters it.' },
      { type: "mcq", q: 'The most effective single measure to prevent most complications of immobility is:', options: ['Sedation', 'Fluid restriction', 'Early, graded mobilization', 'Continuous bed rest'], answer: 2, rationale: 'Early mobilization simultaneously reduces VTE, pneumonia, pressure injury, constipation and muscle loss.' },
      { type: "mcq", q: 'Urinary calculi in the immobile patient are promoted by:', options: ['Hypercalciuria from bone resorption plus urinary stasis', 'Hypocalciuria', 'High fluid intake', 'Frequent voiding'], answer: 0, rationale: 'Bone resorption raises urinary calcium, and stasis lets crystals aggregate into stones; hydration prevents both.' },
      { type: "fill", q: 'Repositioning an immobile patient is commonly performed every ____ hours to prevent pressure injury.', accept: ['2', 'two'], rationale: 'Two-hourly turning redistributes pressure over bony prominences.' },
      { type: "fill", q: 'Sudden dyspnoea and pleuritic chest pain in an immobile patient suggest pulmonary ____.', accept: ['embolism', 'embolus'], rationale: 'A dislodged DVT can cause life-threatening pulmonary embolism.' }
    ]
  },

  /* ============ TOPIC 4 ============ */
  {
    id: 'ort-04-cast-splint',
    unit: 'Unit 2 · Immobility',
    title: 'Care of the Patient with a Cast or Splint (Neurovascular Checks)',
    readMinutes: 24,
    summary: 'Purposes and types of casts and splints; materials and application; the systematic neurovascular assessment; recognition and management of complications including compartment syndrome; and patient education for cast care.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Purpose of casts and splints', p: 'A cast is a rigid external device that immobilizes and supports a body part in a functional position. Its purposes are to immobilize a reduced fracture and hold alignment during healing, to rest and protect injured soft tissue, to prevent or correct deformity, and to permit early weight-bearing where appropriate. A splint provides similar support but is not circumferential, so it accommodates swelling and is preferred for acute/unstable injuries.' },
      { h: 'Cast materials', list: [
        'Plaster of Paris (gypsum) — inexpensive, moulds well; heavy, slow to dry (24–72 h) and not water-resistant.',
        'Synthetic (fibreglass / polyurethane) — light, strong, water-resistant, dries in minutes; radiolucent but costlier and less mouldable.'
      ] },
      { h: 'Types of cast', list: [
        'Short/long arm cast — forearm/wrist and elbow injuries.',
        'Short/long leg cast — lower leg/ankle and knee injuries.',
        'Cylinder cast — knee.',
        'Body cast / jacket — spine.',
        'Hip spica — hip and femur, encasing trunk and limb.',
        'Functional (brace) cast — allows controlled joint movement during healing.'
      ] },
      { h: 'Types of splint', list: [
        'Plaster slab (backslab) — a partial cast for acute swelling.',
        'Thomas splint — femoral fractures and traction.',
        'Cock-up / volar splint — wrist.',
        'POP posterior slab, aluminium finger splint, and dynamic splints.'
      ] },
      { h: 'Care of the drying cast', list: [
        'Handle a wet plaster cast with the palms, not fingertips, to avoid denting and pressure points.',
        'Leave uncovered to air-dry; support on a pillow with a cloth cover (a plastic pillow traps heat).',
        'Do not rest a drying cast on a hard surface or sharp edge.',
        'Expect warmth as plaster sets (an exothermic reaction) — reassure the patient.',
        'Petal the rough edges with adhesive strips to protect the skin.'
      ] },
      { h: 'Neurovascular assessment', p: 'The single most important nursing responsibility for a casted or splinted limb is regular neurovascular assessment distal to the cast, using the 5 Ps and comparing with the opposite limb. Checks are commonly hourly for the first 24 hours, then per protocol. Assess and document: colour and warmth, capillary refill (under 2 s), distal pulses, sensation (numbness/tingling), active movement of digits, and pain (especially pain out of proportion or on passive stretch).' },
      { h: 'Elevation and swelling', p: 'Elevate the casted limb above heart level for the first 24–48 hours to reduce oedema, and encourage active movement of the exposed digits to promote venous return. A cast that becomes too tight from swelling can cause vascular compromise; the medical team may bivalve (split) the cast to relieve pressure.' },
      { h: 'Compartment syndrome — the key emergency', p: 'Compartment syndrome is a limb-threatening emergency in which rising pressure within a closed fascial compartment (from bleeding/oedema, often worsened by a tight cast) exceeds capillary perfusion pressure, causing ischaemia of muscle and nerve. Irreversible damage (Volkmann\'s ischaemic contracture) can occur within 4–6 hours.' },
      { h: 'Recognizing compartment syndrome — the 5 Ps and more', list: [
        'Pain — severe, unrelenting, out of proportion, and classically increased by PASSIVE stretch of the muscles (the earliest and most reliable sign).',
        'Paraesthesia — early tingling/numbness.',
        'Pallor and coolness.',
        'Pulselessness — a LATE sign; do not wait for it.',
        'Paralysis — a late sign.',
        'Tense, swollen compartment on palpation.'
      ] },
      { h: 'Management of compartment syndrome', list: [
        'Immediately notify the surgeon — this is an emergency.',
        'Remove/loosen constriction: bivalve or split the cast and cut restrictive dressings to skin.',
        'Keep the limb at heart level (NOT elevated above the heart, which further reduces perfusion).',
        'Prepare for urgent fasciotomy to decompress the compartment.',
        'Monitor neurovascular status and compartment pressure; give oxygen and analgesia.'
      ] },
      { h: 'Other complications of casting', list: [
        'Pressure injury under the cast — burning pain or a hot spot, then a foul smell/drainage.',
        'Infection of an underlying wound (window may be cut for inspection).',
        'Skin maceration and itching.',
        'Joint stiffness and muscle atrophy from prolonged immobilization.',
        '\'Cast syndrome\' — duodenal compression with a body/spica cast causing vomiting and abdominal distension.'
      ] },
      { h: 'Nursing management summary', list: [
        'Perform and document neurovascular checks per protocol.',
        'Elevate the limb and encourage digit movement.',
        'Keep the cast clean and dry; inspect edges and exposed skin.',
        'Report any hot spot, foul odour, drainage or increasing pain immediately.',
        'Maintain isometric and prescribed exercises to preserve muscle.'
      ] },
      { h: 'Patient education for cast care', list: [
        'Never insert objects (knitting needles, pencils) inside the cast to scratch — this breaks skin and causes infection.',
        'Keep a plaster cast dry; cover with plastic while bathing (synthetic casts may permit supervised wetting).',
        'Report increasing pain, numbness, tingling, coldness, colour change, swelling not relieved by elevation, foul smell or drainage.',
        'Wiggle the fingers/toes regularly and continue prescribed exercises.',
        'Do not bear weight on the cast until told it is safe; do not trim or alter the cast.'
      ] },
      { h: 'Clinical relevance — safety net', figure: {
        caption: 'Casted-limb decision path: any neurovascular deterioration triggers escalation, not delay.',
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cast neurovascular escalation pathway"><defs><marker id="ortArrC" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="160" y="20" width="240" height="42" rx="8" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="46" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Neurovascular check (5 Ps)</text><line x1="280" y1="62" x2="280" y2="86" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ortArrC)"/><rect x="120" y="88" width="320" height="40" rx="8" fill="#F0FDF4" stroke="#15803D" stroke-width="2"/><text x="280" y="113" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#15803D">Pain on passive stretch? Numbness? Cool/pale? Tense?</text><line x1="280" y1="128" x2="280" y2="150" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ortArrC)"/><rect x="60" y="152" width="200" height="60" rx="8" fill="#DCFCE7" stroke="#22C55E" stroke-width="2"/><text x="160" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#0F4C3A">Normal</text><text x="160" y="196" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">continue checks, elevate</text><rect x="300" y="152" width="200" height="60" rx="8" fill="#0F4C3A" stroke="#0F4C3A" stroke-width="2"/><text x="400" y="176" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#DCFCE7">ABNORMAL → EMERGENCY</text><text x="400" y="196" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#DCFCE7">split cast, call surgeon, fasciotomy</text></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'State the purposes of a cast and compare plaster of Paris with synthetic casting materials.',
      'Describe the neurovascular assessment of a casted limb and its documentation.',
      'Define compartment syndrome; describe its recognition and emergency management.',
      'List the complications of casting and their nursing management.',
      'Draw up patient education for a person going home in a below-knee cast.'
    ],
    assessment: [
      { type: "mcq", q: 'The earliest and most reliable sign of compartment syndrome is:', options: ['Pain on passive stretch, out of proportion', 'Pulselessness', 'Paralysis', 'Absent capillary refill'], answer: 0, rationale: 'Severe pain on passive stretch appears early; pulselessness and paralysis are LATE — never wait for them.' },
      { type: "mcq", q: 'A wet plaster cast should be handled with:', options: ['Fingertips', 'A towel wrapped tightly', 'The palms of the hands', 'Gloved fingertips only'], answer: 2, rationale: 'Palms avoid denting the soft plaster, which would create pressure points on the skin.' },
      { type: "mcq", q: 'For suspected compartment syndrome, the limb should be positioned:', options: ['Above heart level', 'At heart level', 'Dependent (hanging down)', 'In deep flexion'], answer: 1, rationale: 'Elevation above the heart further lowers perfusion pressure; keep the limb at heart level and decompress urgently.' },
      { type: "mcq", q: 'A patient reports a burning \'hot spot\' and later a foul smell from under the cast. This suggests:', options: ['Normal drying warmth', 'Adequate healing', 'Cast syndrome', 'A pressure injury/infection under the cast'], answer: 3, rationale: 'A localized hot spot progressing to odour/drainage indicates skin breakdown or infection beneath the cast.' },
      { type: "mcq", q: 'Which instruction is CORRECT for home cast care?', options: ['Never insert objects inside the cast', 'Scratch itches with a knitting needle', 'Trim rough edges with scissors', 'Bear weight immediately'], answer: 0, rationale: 'Inserting objects breaks the skin and causes infection; edges are petaled, and weight-bearing awaits clearance.' },
      { type: "mcq", q: 'Why is a splint or backslab often preferred to a full cast for an acute injury?', options: ['It is stronger', 'It is waterproof', 'It accommodates swelling and reduces constriction risk', 'It permits weight-bearing sooner'], answer: 2, rationale: 'A non-circumferential splint leaves room for oedema, lowering the risk of neurovascular compromise.' },
      { type: "mcq", q: 'Volkmann\'s ischaemic contracture is a late consequence of:', options: ['Cast syndrome', 'Untreated compartment syndrome', 'Osteomyelitis', 'Pressure ulcer'], answer: 1, rationale: 'Prolonged compartment ischaemia causes irreversible muscle necrosis and fibrous contracture.' },
      { type: "mcq", q: 'The exothermic warmth felt as a plaster cast sets should be managed by:', options: ['Urgent cast removal', 'Applying ice inside the cast', 'Wrapping tightly to keep heat in', 'Reassuring the patient that it is normal'], answer: 3, rationale: 'Setting plaster releases heat as a normal chemical reaction; reassure and allow it to air-dry.' },
      { type: "mcq", q: '\'Cast syndrome\' associated with a body/spica cast refers to:', options: ['A skin allergy', 'Infection of the cast', 'Duodenal compression causing vomiting and distension', 'Foot drop'], answer: 2, rationale: 'Superior mesenteric artery syndrome from the cast compresses the duodenum, causing vomiting and abdominal distension.' },
      { type: "mcq", q: 'Immediately after applying a below-knee cast for a fresh fracture, the priority nursing action is to:', options: ['Elevate the limb and begin neurovascular checks', 'Encourage full weight-bearing', 'Cover the cast with a plastic bag', 'Apply heat to speed drying'], answer: 0, rationale: 'Elevation limits swelling and serial neurovascular checks detect early compromise.' },
      { type: "fill", q: 'The surgical decompression that relieves compartment syndrome is called a ____.', accept: ['fasciotomy'], rationale: 'Fasciotomy opens the fascial compartments to restore perfusion.' },
      { type: "fill", q: 'Splitting a cast lengthwise into two halves to relieve pressure is called ____ the cast.', accept: ['bivalving', 'bivalve', 'bivalving'], rationale: 'Bivalving relieves circumferential constriction while maintaining support.' }
    ]
  },

  /* ============ TOPIC 5 ============ */
  {
    id: 'ort-05-traction',
    unit: 'Unit 2 · Immobility',
    title: 'Care of the Patient on Traction',
    readMinutes: 24,
    summary: 'Principles, purposes and types of traction (skin, skeletal and skull); the components of a traction system; specific complications; and comprehensive nursing management, including pin-site care and prevention of the hazards of immobility.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Definition and principles', p: 'Traction is the application of a pulling force to a part of the body to reduce and immobilize fractures, correct or prevent deformity, relieve muscle spasm and pain, and maintain alignment during healing. Effective traction requires a counter-traction (usually the patient\'s body weight, achieved by elevating the foot/head of the bed) and must be continuous unless intermittent traction is specifically prescribed.' },
      { h: 'Purposes of traction', list: [
        'Reduce a fracture and hold the fragments in alignment.',
        'Overcome muscle spasm and relieve pain.',
        'Prevent or correct deformity and contracture.',
        'Rest an inflamed or injured joint.',
        'Immobilize prior to surgery (temporary stabilization).'
      ] },
      { h: 'Types by method of pull', list: [
        'Skin traction — the pull is applied to the skin via adhesive strapping, foam or a boot, transmitted to the bone. It is temporary, uses light weights (usually up to 2–3 kg / max ~5 kg), and is non-invasive. Examples: Buck\'s, Russell\'s, Bryant\'s, Gallow\'s (pelvic/cervical).',
        'Skeletal traction — the pull is applied directly to bone through a metal pin or wire (Steinmann pin, Kirschner wire) inserted under aseptic surgical conditions. It allows heavier, sustained weights (5–20 kg+) for longer periods. Examples: pin through the tibial tuberosity, calcaneum or olecranon.',
        'Skull (cervical) traction — applied to the skull for cervical spine injuries via Crutchfield/Gardner-Wells tongs or a halo device.'
      ] },
      { h: 'Common named tractions', list: [
        'Buck\'s traction — straight skin traction to the leg for hip fracture, muscle spasm.',
        'Russell\'s traction — combines a knee sling with skin traction for femoral fractures.',
        'Bryant\'s / Gallow\'s traction — bilateral vertical skin traction for femoral fracture in infants under ~2 years / 12–14 kg.',
        'Dunlop traction — for supracondylar humeral fractures in children.',
        'Halo-pelvic / halo traction — for cervical spine and scoliosis.'
      ] },
      { h: 'Components of a traction system', list: [
        'Weights — provide the pulling force (never allowed to rest on the floor or bed).',
        'Ropes and pulleys — transmit and redirect the force in a straight line.',
        'Frame and bed — Balkan/overhead frame with a trapeze for movement.',
        'Counter-traction — the patient\'s body weight via bed tilt.',
        'Application to the patient — strapping (skin) or pin/tongs (skeletal/skull).'
      ] },
      { h: 'Principles of effective traction (the \'rules\')', list: [
        'Traction must be continuous — never lift or release the weights unless ordered.',
        'Weights must hang freely and clear of the floor and bed.',
        'Ropes must be in the pulley grooves, unfrayed and unknotted.',
        'Ropes and pull must be in straight alignment with the long axis of the bone.',
        'Counter-traction must be maintained.',
        'The patient must be kept centred and in correct alignment in bed.'
      ] },
      { h: 'Complications specific to traction', list: [
        'Skin traction — pressure/friction injury, allergy to adhesive, common peroneal nerve palsy (foot drop) from pressure at the fibular head, and circulatory impairment from tight bandaging.',
        'Skeletal traction — pin-site infection, osteomyelitis, and pin loosening.',
        'Both — all the hazards of prolonged immobility (DVT, pneumonia, pressure injury, constipation, calculi, muscle wasting).'
      ] },
      { h: 'Pin-site care (skeletal traction)', list: [
        'Inspect pin sites regularly for redness, swelling, drainage, loosening and pain.',
        'Perform pin-site cleaning with aseptic technique per protocol (commonly chlorhexidine-based).',
        'Cover the sharp ends of pins/wires with caps to prevent injury.',
        'Report signs of infection or loosening promptly.',
        'Never adjust or remove the pins — a medical responsibility.'
      ] },
      { h: 'Neurovascular and skin surveillance', p: 'Assess neurovascular status of the limb (5 Ps) regularly. For lower-limb skin traction, specifically check for common peroneal nerve compression (numbness over the dorsum of the foot, weak dorsiflexion/foot drop) and release/adjust the bandage as ordered. Inspect all pressure areas — sacrum, heels and the unaffected limb — because the patient cannot move freely.' },
      { h: 'Nursing management of the patient in traction', list: [
        'Maintain the integrity of the traction system at every shift check (weights hanging free, ropes aligned, knots secure).',
        'Keep the patient in correct alignment and centred in bed.',
        'Provide an overhead trapeze for repositioning and to preserve upper-body strength.',
        'Prevent immobility complications: turning as permitted, deep breathing, calf exercises, thromboprophylaxis, high-fibre diet and fluids, skin care.',
        'Manage pain and muscle spasm; provide analgesia and reassurance.',
        'Maintain hygiene, elimination needs and psychological support during a long confinement.',
        'Encourage prescribed exercises of unaffected joints and isometric exercises of the affected limb.'
      ] },
      { h: 'Health education and rehabilitation', p: 'Explain the purpose and rules of traction so the patient and family do not interfere with weights or alignment. Encourage participation in exercises, nutrition for healing (protein, calcium, vitamins C and D) and fluids. Prepare the patient for the eventual transition to a cast or mobilization and for progressive weight-bearing.' },
      { h: 'Skin vs skeletal traction (comparison)', figure: {
        caption: 'Key differences between skin and skeletal traction guide the intensity of nursing surveillance.',
        svg: '<svg viewBox="0 0 560 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of skin and skeletal traction"><rect x="15" y="15" width="530" height="210" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="280" y1="55" x2="280" y2="215" stroke="#22C55E" stroke-width="1.5"/><text x="147" y="42" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#0F4C3A">SKIN traction</text><text x="413" y="42" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#0F4C3A">SKELETAL traction</text><g font-family="sans-serif" font-size="12" fill="#15803D"><text x="30" y="78">Pull via strapping on skin</text><text x="300" y="78">Pull via pin/wire in bone</text><text x="30" y="106">Non-invasive, temporary</text><text x="300" y="106">Invasive, longer term</text><text x="30" y="134">Light weight (up to ~5 kg)</text><text x="300" y="134">Heavier weight (5–20 kg+)</text><text x="30" y="162">Risk: skin/nerve pressure</text><text x="300" y="162">Risk: pin-site infection</text><text x="30" y="190">e.g. Buck, Russell, Bryant</text><text x="300" y="190">e.g. tibial/calcaneal pin</text></g></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'Define traction and state its purposes and principles.',
      'Compare skin and skeletal traction with examples of each.',
      'Describe the components of a traction system and the rules of effective traction.',
      'Discuss the nursing management of a patient on skeletal traction, including pin-site care.',
      'List the complications of traction and their prevention.'
    ],
    assessment: [
      { type: "mcq", q: 'Counter-traction in a lower-limb traction system is most commonly provided by:', options: ['The patient\'s own body weight via bed tilt', 'Additional weights on the rope', 'A second pulley', 'The overhead trapeze'], answer: 0, rationale: 'Elevating the foot of the bed uses body weight as counter-traction to oppose the pull.' },
      { type: "mcq", q: 'The maximum weight generally used for skin traction is around:', options: ['15 kg', '25 kg', '5 kg', '40 kg'], answer: 2, rationale: 'Skin traction transmits force through skin and tolerates only light weights (~2–5 kg); heavier loads need skeletal traction.' },
      { type: "mcq", q: 'A patient in Buck\'s skin traction develops numbness on the dorsum of the foot and weak dorsiflexion. This indicates pressure on the:', options: ['Femoral nerve', 'Common peroneal nerve', 'Tibial nerve', 'Sciatic nerve trunk'], answer: 1, rationale: 'The common peroneal nerve at the fibular head is compressed by tight bandaging, causing foot drop.' },
      { type: "mcq", q: 'Which action is CORRECT when caring for a patient in traction?', options: ['Rest the weights on the bed when turning', 'Remove weights during meals', 'Knot the rope to shorten it', 'Ensure weights hang freely and never touch the floor'], answer: 3, rationale: 'Weights must hang free and traction stay continuous; releasing or resting weights loses the therapeutic pull.' },
      { type: "mcq", q: 'The principal added risk of SKELETAL over skin traction is:', options: ['Pin-site infection and osteomyelitis', 'Adhesive allergy', 'Foot drop', 'Skin maceration'], answer: 0, rationale: 'Pins breach the skin into bone, creating a portal for infection that can progress to osteomyelitis.' },
      { type: "mcq", q: 'Bryant\'s (Gallow\'s) traction is appropriate for:', options: ['Cervical spine injury in adults', 'Supracondylar humeral fracture in adults', 'Femoral fracture in an infant under ~2 years', 'Pelvic fracture in the elderly'], answer: 2, rationale: 'Bilateral vertical skin traction is used for femoral fractures in small children under about 12–14 kg.' },
      { type: "mcq", q: 'Skull (cervical) traction for a cervical spine injury is applied using:', options: ['Buck\'s boot', 'Crutchfield or Gardner-Wells tongs', 'A Thomas splint', 'Russell\'s sling'], answer: 1, rationale: 'Skull tongs or a halo device apply traction to the skull for cervical injuries.' },
      { type: "mcq", q: 'During each shift the nurse checks that the traction ropes are:', options: ['Knotted at the pulley', 'Resting on the mattress', 'Slack to allow movement', 'In the pulley grooves, aligned and unfrayed'], answer: 3, rationale: 'Ropes must run freely in the pulley grooves, be intact and aligned with the bone\'s long axis.' },
      { type: "mcq", q: 'To help a patient in traction reposition and maintain upper-body strength, the nurse provides:', options: ['A footboard', 'A trochanter roll', 'An overhead trapeze', 'A bed cradle'], answer: 2, rationale: 'The trapeze lets the patient lift and shift while preserving arm and shoulder strength.' },
      { type: "mcq", q: 'An appropriate diet for a patient in prolonged traction emphasizes:', options: ['High protein, high fibre, adequate calcium and vitamins C and D, with plenty of fluids', 'Low protein, low fibre', 'Restricted fluids', 'High fat, low calcium'], answer: 0, rationale: 'This diet supports healing, prevents constipation, and reduces calculi and negative nitrogen balance.' },
      { type: "fill", q: 'Traction that applies the pulling force directly to bone through a pin or wire is called ____ traction.', accept: ['skeletal'], rationale: 'Skeletal traction uses a pin/wire in bone and tolerates heavier weights.' },
      { type: "fill", q: 'The opposing force that balances the pull of traction is called ____-traction.', accept: ['counter', 'counter-traction', 'countertraction'], rationale: 'Counter-traction, usually the body weight, keeps the patient from being pulled toward the weights.' }
    ]
  },

  /* ============ TOPIC 6 ============ */
  {
    id: 'ort-06-fractures',
    unit: 'Unit 3 · Trauma',
    title: 'Fractures — Types, Healing & Principles of Management',
    readMinutes: 26,
    summary: 'Definition and terminology; comprehensive classification of fractures; mechanisms of injury; the stages of fracture healing and factors affecting it; clinical features and investigations; and the principles of fracture management (reduce, hold, rehabilitate).',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Definition and terminology', p: 'A fracture is a break in the continuity of a bone, usually caused by a force exceeding the bone\'s strength. Key terms: reduction (restoring alignment), union (bony healing), malunion (healing in a poor position), delayed union (slower than expected), non-union (failure to heal), and displacement (loss of normal position of fragments).' },
      { h: 'Classification: open vs closed', list: [
        'Closed (simple) fracture — the skin over the fracture is intact.',
        'Open (compound) fracture — the fracture communicates with the exterior through a skin wound, carrying a high risk of infection. Open fractures are graded (Gustilo-Anderson I–III) by wound size and soft-tissue/vascular damage.'
      ] },
      { h: 'Classification: complete vs incomplete', list: [
        'Complete — the bone is broken across its whole width into two or more fragments.',
        'Incomplete — the bone is partially broken (e.g. greenstick and buckle/torus fractures in children, whose soft bones bend).'
      ] },
      { h: 'Classification: by fracture line/pattern', list: [
        'Transverse — straight across the bone (from a direct blow).',
        'Oblique — at an angle across the bone.',
        'Spiral — twisting force (suspicious for non-accidental injury in children).',
        'Comminuted — bone shattered into three or more fragments.',
        'Segmental — two separate fracture lines isolating a bone segment.',
        'Impacted — one fragment driven into another.',
        'Avulsion — a fragment pulled off by a tendon/ligament.',
        'Depressed — a fragment pushed inward (skull).'
      ] },
      { h: 'Special types', list: [
        'Pathological fracture — through bone already weakened by disease (tumour, osteoporosis, infection) from minimal force.',
        'Stress (fatigue) fracture — from repetitive submaximal load (athletes, soldiers).',
        'Fracture-dislocation — a fracture with dislocation of the adjacent joint.',
        'Intra-articular fracture — extends into the joint surface (risk of later osteoarthritis).'
      ] },
      { h: 'Mechanisms of injury', list: [
        'Direct force — bone breaks at the point of impact (a blow, crush).',
        'Indirect force — bone breaks at a distance from the force (twisting, a fall on the outstretched hand causing wrist fracture).',
        'Repetitive stress — stress fractures.',
        'Pathological — trivial force through diseased bone.'
      ] },
      { h: 'Stages of fracture healing', p: 'Secondary (indirect) bone healing proceeds through overlapping stages:', list: [
        '1. Haematoma formation (0–48 h) — bleeding forms a clot; inflammatory cells arrive.',
        '2. Inflammation and cellular proliferation (first days) — granulation tissue forms.',
        '3. Soft callus (fibrocartilaginous callus, ~2–3 weeks) — bridges the gap.',
        '4. Hard callus (bony callus, weeks to months) — callus mineralizes to woven bone.',
        '5. Remodeling (months to years) — woven bone is replaced by lamellar bone along lines of stress, restoring shape.'
      ] },
      { h: 'Primary vs secondary healing', p: 'Secondary healing (via callus) occurs when there is micromotion, as in casts and most conservative treatment. Primary (direct) healing occurs when fragments are rigidly compressed together (e.g. plate-and-screw fixation) and bone heals across the gap without visible callus. This distinction guides expectations on X-ray follow-up.' },
      { h: 'Factors affecting fracture healing', list: [
        'Favourable — good blood supply, close apposition and stability, youth, good nutrition, and weight-bearing stimulus.',
        'Unfavourable — poor blood supply (e.g. scaphoid, neck of femur), infection, wide gap or interposed soft tissue, movement/instability, comorbidity (diabetes, malnutrition, osteoporosis), smoking, steroids/NSAIDs, and advanced age.'
      ] },
      { h: 'Clinical features', list: [
        'Pain and tenderness at the site.',
        'Swelling and bruising.',
        'Deformity, shortening or angulation.',
        'Loss of function (inability to use the part).',
        'Abnormal mobility and crepitus (grating) — elicited only incidentally, never deliberately.',
        'In open fractures — a wound with bleeding, possibly exposed bone.'
      ] },
      { h: 'Investigations', list: [
        'Plain X-ray — at least two views (AP and lateral) including the joints above and below; the mainstay of diagnosis.',
        'CT — complex, intra-articular and spinal fractures.',
        'MRI/bone scan — occult and stress fractures.',
        'Blood tests — FBC, cross-match and coagulation if surgery/bleeding is likely.'
      ] },
      { h: 'Principles of management — the 3 Rs', p: 'Fracture management follows three principles: REDUCE (restore alignment — by closed or open reduction), HOLD/RETAIN (immobilize to maintain reduction — by cast, traction, external fixation or internal fixation), and REHABILITATE (restore function — by exercise, physiotherapy and progressive weight-bearing). Overriding all of these is the initial priority: treat the patient first (ABC, life-threatening injuries) and relieve pain.', figure: {
        caption: 'The three principles of fracture management — the framework for every fracture care plan.',
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three principles of fracture management"><defs><marker id="ortArrF" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="20" y="55" width="150" height="70" rx="10" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="95" y="88" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#0F4C3A">REDUCE</text><text x="95" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">restore alignment</text><rect x="205" y="55" width="150" height="70" rx="10" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="88" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#0F4C3A">HOLD</text><text x="280" y="108" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">immobilize / fix</text><rect x="390" y="55" width="150" height="70" rx="10" fill="#DCFCE7" stroke="#0F4C3A" stroke-width="2"/><text x="465" y="82" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#0F4C3A">REHABILITATE</text><text x="465" y="104" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#15803D">restore function</text><line x1="170" y1="90" x2="201" y2="90" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ortArrF)"/><line x1="355" y1="90" x2="386" y2="90" stroke="#0F4C3A" stroke-width="2.5" marker-end="url(#ortArrF)"/><text x="280" y="35" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">First: treat the patient (ABC) &amp; relieve pain</text></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'Define a fracture and classify fractures with examples.',
      'Describe the stages of fracture healing.',
      'Discuss the factors that promote and delay fracture union.',
      'Explain the clinical features and investigations of a fracture.',
      'State the principles of fracture management (reduce, hold, rehabilitate).'
    ],
    assessment: [
      { type: "mcq", q: 'A fracture in which the bone is shattered into three or more fragments is termed:', options: ['Comminuted', 'Transverse', 'Greenstick', 'Impacted'], answer: 0, rationale: 'Comminuted = three or more fragments; a greenstick is an incomplete childhood fracture.' },
      { type: "mcq", q: 'A greenstick fracture is characteristically seen in:', options: ['The elderly', 'Athletes with stress injury', 'Children, because their bones are soft and bend', 'Bone weakened by tumour'], answer: 2, rationale: 'Children\'s pliable bones bend and break incompletely on one side (greenstick).' },
      { type: "mcq", q: 'The FIRST stage of fracture healing is:', options: ['Hard callus formation', 'Haematoma formation', 'Remodeling', 'Soft callus'], answer: 1, rationale: 'Bleeding forms a haematoma/clot within 48 hours, initiating the healing cascade.' },
      { type: "mcq", q: 'A fracture through bone weakened by an underlying disease is called a:', options: ['Stress fracture', 'Avulsion fracture', 'Spiral fracture', 'Pathological fracture'], answer: 3, rationale: 'Pathological fractures occur through tumour-, osteoporosis- or infection-weakened bone from minimal force.' },
      { type: "mcq", q: 'Which factor DELAYS fracture healing?', options: ['Infection at the fracture site', 'Good blood supply', 'Close apposition of fragments', 'Adequate protein intake'], answer: 0, rationale: 'Infection, instability, poor blood supply, gaps and comorbidity all delay or prevent union.' },
      { type: "mcq", q: 'An open (compound) fracture is defined by:', options: ['More than two fragments', 'A break in a child\'s bone', 'Communication of the fracture with the exterior via a skin wound', 'A break into the joint'], answer: 2, rationale: 'An open fracture breaks the overlying skin, creating a high infection risk (graded Gustilo-Anderson).' },
      { type: "mcq", q: 'Rigid compression fixation with a plate typically results in:', options: ['Abundant visible callus', 'Primary (direct) bone healing with little callus', 'Non-union always', 'Greenstick healing'], answer: 1, rationale: 'Rigid fixation produces primary healing across the gap without the callus seen in secondary healing.' },
      { type: "mcq", q: 'A spiral fracture in a young child should prompt the nurse to consider:', options: ['Normal growth', 'A stress fracture', 'Osteoporosis', 'The possibility of non-accidental injury'], answer: 3, rationale: 'Twisting spiral fractures in children may raise suspicion of abuse and require careful assessment.' },
      { type: "mcq", q: 'The three principles of fracture management are reduce, hold and:', options: ['Amputate', 'Aspirate', 'Rehabilitate', 'Anaesthetize'], answer: 2, rationale: 'Reduce (align), hold (immobilize/fix) and rehabilitate (restore function).' },
      { type: "mcq", q: 'Crepitus and abnormal mobility should be:', options: ['Noted only if found incidentally, never deliberately provoked', 'Deliberately elicited to confirm the fracture', 'Ignored', 'Treated with massage'], answer: 0, rationale: 'Deliberately eliciting crepitus causes pain and further injury; it is noted only if encountered.' },
      { type: "fill", q: 'Healing of a fracture in a poor or deformed position is called ____.', accept: ['malunion'], rationale: 'Malunion = union in an unacceptable position; non-union = failure to heal.' },
      { type: "fill", q: 'The fibrocartilaginous bridge that forms across a fracture before mineralizing is the soft ____.', accept: ['callus'], rationale: 'Soft callus later becomes hard (bony) callus, then remodels.' }
    ]
  },

  /* ============ TOPIC 7 ============ */
  {
    id: 'ort-07-fracture-nursing',
    unit: 'Unit 3 · Trauma',
    title: 'Nursing Care of the Patient with a Fracture',
    readMinutes: 25,
    summary: 'Emergency first aid and immobilization; care of open fractures; pain, neurovascular and infection management; the complications of fractures (early and late) including fat embolism; and the comprehensive nursing care plan with patient education and rehabilitation.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'First aid at the scene', list: [
        'Ensure scene safety and assess ABC (airway, breathing, circulation) — treat life-threatening injuries first.',
        'Control external bleeding by direct pressure; treat for shock.',
        'Immobilize the fracture with a splint, including the joints above and below, before moving the patient (\'splint them where they lie\').',
        'Do NOT attempt to reduce the fracture or push protruding bone back in.',
        'Cover an open fracture with a sterile dressing.',
        'Check and record neurovascular status before and after splinting; transport promptly.'
      ] },
      { h: 'Care of the open fracture', p: 'An open fracture is an orthopedic emergency because of infection risk. Management includes: photograph and cover the wound with a sterile saline-soaked dressing (do not repeatedly expose), tetanus prophylaxis, early intravenous antibiotics (within the hour), urgent surgical debridement and irrigation, fracture stabilization (often external fixation), and delayed wound closure. The nurse ensures antibiotics and tetanus cover are given and monitors for infection.' },
      { h: 'Emergency department priorities', list: [
        'Analgesia — adequate and prompt.',
        'Immobilization and elevation.',
        'Neurovascular assessment and documentation.',
        'Investigations — X-ray, bloods, cross-match.',
        'Fasting and consent if surgery is planned.',
        'Reassurance and psychological support.'
      ] },
      { h: 'Pain management', p: 'Fracture pain is managed with a multimodal, stepwise approach: immobilization and elevation, non-pharmacological measures, and analgesia titrated to severity (paracetamol, NSAIDs where appropriate, opioids for severe pain, and regional blocks). Pain that is severe, unrelenting or worsened by passive movement despite immobilization must be treated as compartment syndrome until proven otherwise.' },
      { h: 'Prevention and restoration of neurovascular function', list: [
        'Perform serial neurovascular checks (5 Ps) distal to the injury and to any cast/traction.',
        'Elevate the limb to reduce oedema and encourage active digit movement.',
        'Report and act on any deterioration immediately.',
        'Avoid tight bandaging; watch for compartment syndrome.'
      ] },
      { h: 'Infection prevention', list: [
        'Aseptic wound and pin-site care; monitor temperature and wound for signs of infection.',
        'Ensure prescribed antibiotics and tetanus prophylaxis are given for open injuries.',
        'Maintain nutrition and glycaemic control to support immunity and healing.'
      ] },
      { h: 'Early complications of fractures', list: [
        'Haemorrhage and hypovolaemic shock (femoral/pelvic fractures can lose 1–3 litres of blood).',
        'Compartment syndrome.',
        'Fat embolism syndrome.',
        'Neurovascular injury.',
        'Infection (especially open fractures).',
        'Deep vein thrombosis and pulmonary embolism.'
      ] },
      { h: 'Fat embolism syndrome (FES)', p: 'FES occurs 24–72 hours after long-bone or pelvic fractures when fat globules enter the circulation and lodge in the lungs and brain. The classic triad is respiratory distress (dyspnoea, hypoxia), neurological change (confusion, agitation) and a petechial rash (axillae, chest, conjunctivae). Management is supportive — oxygen, careful fluid balance and early fracture fixation to prevent it. The nurse monitors respiratory rate, oxygen saturation, mental status and skin, and reports early signs urgently.' },
      { h: 'Late complications of fractures', list: [
        'Delayed union, malunion and non-union.',
        'Avascular necrosis (e.g. femoral head after neck-of-femur fracture, scaphoid).',
        'Post-traumatic osteoarthritis (intra-articular fractures).',
        'Joint stiffness and muscle atrophy.',
        'Complex regional pain syndrome (Sudeck\'s atrophy) — pain, swelling and trophic skin changes.',
        'Volkmann\'s ischaemic contracture; myositis ossificans; growth disturbance in children.'
      ] },
      { h: 'Nursing care plan — key diagnoses', list: [
        'Acute pain related to the fracture and soft-tissue injury.',
        'Risk of peripheral neurovascular dysfunction.',
        'Impaired physical mobility.',
        'Risk of infection (open fracture, pin sites, surgery).',
        'Risk of complications of immobility.',
        'Deficient knowledge regarding cast/traction and home care.',
        'Disturbed body image / anxiety.'
      ] },
      { h: 'Nursing interventions', list: [
        'Maintain immobilization, alignment and elevation.',
        'Assess and relieve pain; perform neurovascular checks.',
        'Prevent immobility complications (DVT prophylaxis, chest care, skin care, bowel care, exercises).',
        'Provide wound/pin-site care and monitor for infection and fat embolism.',
        'Meet hygiene, nutrition (protein, calcium, vitamins C and D) and elimination needs.',
        'Promote early, safe mobilization and physiotherapy; teach use of mobility aids.',
        'Provide psychological support and involve the family.'
      ] },
      { h: 'Rehabilitation and health education', list: [
        'Teach prescribed exercises (isometric, then active) to prevent atrophy and stiffness.',
        'Progressive weight-bearing and safe use of crutches/walker as ordered.',
        'Cast/traction care and warning signs to report.',
        'Nutrition, smoking cessation and adequate fluids to aid healing.',
        'Home safety and fall prevention; follow-up appointments and X-rays.'
      ] },
      { h: 'Fracture complications timeline', figure: {
        caption: 'Complications of fractures grouped by timing — surveillance priorities shift from bleeding and embolism to union and stiffness.',
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Early and late complications of fractures"><rect x="15" y="15" width="530" height="170" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><rect x="35" y="45" width="240" height="120" rx="8" fill="#DCFCE7" stroke="#22C55E" stroke-width="1.5"/><text x="155" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">EARLY</text><g font-family="sans-serif" font-size="11.5" fill="#15803D"><text x="50" y="90">Haemorrhage / shock</text><text x="50" y="110">Compartment syndrome</text><text x="50" y="130">Fat embolism (24–72 h)</text><text x="50" y="150">Infection, DVT/PE</text></g><rect x="285" y="45" width="240" height="120" rx="8" fill="#DCFCE7" stroke="#22C55E" stroke-width="1.5"/><text x="405" y="68" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">LATE</text><g font-family="sans-serif" font-size="11.5" fill="#15803D"><text x="300" y="90">Delayed / mal / non-union</text><text x="300" y="110">Avascular necrosis</text><text x="300" y="130">Post-traumatic OA, stiffness</text><text x="300" y="150">CRPS, myositis ossificans</text></g></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'Describe the first aid and emergency nursing management of a patient with a fracture.',
      'Discuss the management of an open fracture and the prevention of infection.',
      'Describe fat embolism syndrome, its features and nursing management.',
      'List the early and late complications of fractures.',
      'Write a nursing care plan for a patient with a fractured femur.'
    ],
    assessment: [
      { type: "mcq", q: 'The correct first-aid principle for splinting a fracture is to immobilize:', options: ['The joints above and below the fracture', 'Only the fracture site', 'The whole body', 'Nothing until X-ray'], answer: 0, rationale: 'Including the joints above and below prevents movement at the fracture during transport.' },
      { type: "mcq", q: 'A patient 36 hours after a femoral fracture develops dyspnoea, confusion and a petechial rash. This suggests:', options: ['Deep vein thrombosis', 'Compartment syndrome', 'Fat embolism syndrome', 'Wound infection'], answer: 2, rationale: 'The classic FES triad — respiratory distress, neurological change and petechiae — appears 24–72 h after long-bone fracture.' },
      { type: "mcq", q: 'For a protruding bone end in an open fracture, the nurse should:', options: ['Push it back into the wound', 'Cover it with a sterile dressing and leave it in place', 'Clean it with tap water and reduce it', 'Apply a tourniquet routinely'], answer: 1, rationale: 'Never reduce protruding bone at the scene; cover with sterile dressing to reduce contamination and transport.' },
      { type: "mcq", q: 'The most time-critical intervention to prevent infection in an open fracture is:', options: ['Delayed wound closure', 'Oral analgesia', 'Removing the splint', 'Early intravenous antibiotics and tetanus prophylaxis'], answer: 3, rationale: 'Prompt IV antibiotics (ideally within the hour) plus tetanus cover and debridement reduce infection risk.' },
      { type: "mcq", q: 'A fractured femur or pelvis is dangerous partly because it can cause:', options: ['Significant internal haemorrhage (1–3 litres) and shock', 'Minimal blood loss', 'Only local swelling', 'Immediate non-union'], answer: 0, rationale: 'Major long-bone/pelvic fractures can bleed litres internally, risking hypovolaemic shock.' },
      { type: "mcq", q: 'Avascular necrosis is a particular late risk after fracture of the:', options: ['Mid-shaft tibia', 'Clavicle', 'Neck of femur / scaphoid', 'Distal radius'], answer: 2, rationale: 'The femoral head and scaphoid have precarious blood supplies, so their fractures risk avascular necrosis.' },
      { type: "mcq", q: 'Complex regional pain syndrome (Sudeck\'s atrophy) is characterized by:', options: ['Painless full recovery', 'Persistent pain, swelling and trophic skin changes disproportionate to injury', 'Rapid bony union', 'Immediate wound infection'], answer: 1, rationale: 'CRPS features disproportionate pain, autonomic and trophic changes after limb injury.' },
      { type: "mcq", q: 'The most appropriate diet to promote fracture healing includes:', options: ['Low protein and low calcium', 'High fat only', 'Restricted fluids', 'Adequate protein, calcium, and vitamins C and D'], answer: 3, rationale: 'Protein and calcium build matrix and mineral; vitamin C aids collagen and vitamin D calcium absorption.' },
      { type: "mcq", q: 'During the acute phase, unrelenting pain worsened by passive stretch in a splinted limb should be regarded as:', options: ['Normal fracture pain', 'Anxiety', 'Compartment syndrome until proven otherwise', 'Analgesic tolerance'], answer: 2, rationale: 'Pain on passive stretch is the hallmark of compartment syndrome and mandates urgent action.' },
      { type: "mcq", q: 'An appropriate early nursing measure to prevent DVT after a lower-limb fracture is:', options: ['Calf/ankle exercises, anti-embolic stockings and prescribed thromboprophylaxis', 'Strict complete bed rest without exercises', 'Massaging both calves firmly', 'Fluid restriction'], answer: 0, rationale: 'Active calf exercises, compression and pharmacological prophylaxis reduce venous stasis and clotting.' },
      { type: "fill", q: 'The classic triad of fat embolism syndrome is respiratory distress, neurological change and a ____ rash.', accept: ['petechial', 'petechiae'], rationale: 'Petechiae (axillae, chest, conjunctivae) complete the FES triad.' },
      { type: "fill", q: 'Before and after splinting a fracture, the nurse must check the ____ status distal to the injury.', accept: ['neurovascular'], rationale: 'Neurovascular (5 Ps) checks detect vascular or nerve compromise.' }
    ]
  },

  /* ============ TOPIC 8 ============ */
  {
    id: 'ort-08-dislocation-soft-tissue',
    unit: 'Unit 3 · Trauma',
    title: 'Dislocations, Sprains & Soft-Tissue Injuries',
    readMinutes: 23,
    summary: 'Definitions and types of dislocation, subluxation, sprain and strain; pathophysiology and clinical features; the RICE principle and grading of sprains; management of common dislocations; and nursing care with prevention of complications.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Definitions', list: [
        'Dislocation (luxation) — complete loss of contact between the articular surfaces of a joint.',
        'Subluxation — partial loss of contact between the joint surfaces.',
        'Sprain — an injury (stretch or tear) of a ligament.',
        'Strain — an injury (overstretch or tear) of a muscle or its tendon.',
        'Contusion — a bruise from direct blunt trauma.'
      ] },
      { h: 'Causes and mechanism', p: 'Dislocations result from trauma (a fall, sports injury, road accident) that forces a joint beyond its normal range, or from congenital laxity (developmental dysplasia of the hip) and disease. Sprains occur when a joint is twisted or wrenched, tearing ligament fibres; strains occur with sudden or excessive muscle contraction or overload. The joint capsule and surrounding soft tissues, blood vessels and nerves may also be damaged.' },
      { h: 'Common dislocations', list: [
        'Shoulder — the most commonly dislocated joint (usually anterior); risk of axillary nerve injury.',
        'Elbow — often with fractures in children.',
        'Hip — high-energy trauma (dashboard injury); posterior dislocation risks sciatic nerve injury and avascular necrosis.',
        'Patella — lateral dislocation, often in young women.',
        'Finger and jaw (temporomandibular) dislocations.'
      ] },
      { h: 'Clinical features of dislocation', list: [
        'Severe pain, worse on movement.',
        'Deformity and abnormal joint contour.',
        'Loss of normal movement (the joint is \'locked\').',
        'Swelling and tenderness.',
        'Possible neurovascular deficit distal to the joint (a key nursing check).'
      ] },
      { h: 'Clinical features of sprains and strains', list: [
        'Pain, tenderness and swelling around the joint or muscle.',
        'Bruising (ecchymosis).',
        'Reduced function and, in severe sprains, joint instability.',
        'A ligament sprain may be felt or heard to \'pop\' at the time of injury.'
      ] },
      { h: 'Grading of sprains', list: [
        'Grade I (mild) — ligament stretched, microscopic tears; mild pain/swelling, no instability.',
        'Grade II (moderate) — partial tear; moderate pain, swelling and some instability.',
        'Grade III (severe) — complete tear; marked swelling, significant instability, may need surgery.'
      ] },
      { h: 'Investigations', list: [
        'X-ray — confirm dislocation, exclude associated fracture (before and after reduction).',
        'MRI — evaluate ligament and soft-tissue tears.',
        'Neurovascular examination — always documented before and after reduction.'
      ] },
      { h: 'Management of dislocation', p: 'A dislocation is a semi-emergency; the sooner it is reduced the easier the reduction and the lower the risk of complications. Management: assess and document neurovascular status, provide analgesia/sedation, perform closed reduction (or open reduction if closed fails or a fracture is present), re-check and document neurovascular status, immobilize the joint (sling, splint) for a period to allow the capsule and ligaments to heal, then rehabilitate with graded exercises. Recurrent dislocation may require surgical stabilization.' },
      { h: 'Management of sprains and strains — RICE / PRICE', figure: {
        caption: 'The RICE principle for acute soft-tissue injury (48–72 h); \'P\' adds Protection and \'E\' Elevation.',
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RICE principle for soft tissue injury"><rect x="15" y="15" width="530" height="170" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="45" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="700" fill="#0F4C3A">R I C E</text><g font-family="sans-serif" font-size="13" fill="#15803D"><rect x="40" y="60" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="80"><tspan font-weight="700" fill="#0F4C3A">R</tspan>est the injured part</text><rect x="40" y="98" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="118"><tspan font-weight="700" fill="#0F4C3A">I</tspan>ce (20 min, wrapped) — vasoconstriction</text><rect x="290" y="60" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="80"><tspan font-weight="700" fill="#0F4C3A">C</tspan>ompression bandage — reduce swelling</text><rect x="290" y="98" width="230" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="118"><tspan font-weight="700" fill="#0F4C3A">E</tspan>levate above heart level</text></g><text x="280" y="158" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0F4C3A">Avoid HARM in the first 48–72 h: Heat, Alcohol, Running, Massage</text></svg>'
      } },
      { h: 'The RICE principle (detail)', list: [
        'Rest — avoid weight-bearing and further injury.',
        'Ice — apply a wrapped cold pack for ~20 minutes several times a day for 48–72 h (never ice directly on skin).',
        'Compression — an elastic bandage limits swelling (not so tight as to impair circulation).',
        'Elevation — raise the limb above heart level to reduce oedema.'
      ] },
      { h: 'Nursing management', list: [
        'Assess pain and neurovascular status; document before and after any reduction.',
        'Apply RICE for soft-tissue injury; provide analgesia (NSAIDs are useful for sprains).',
        'Support the joint (sling/splint) and maintain immobilization as ordered after reduction.',
        'Teach graded exercises and progressive return to activity to restore strength and prevent recurrence.',
        'Educate the patient to avoid HARM (Heat, Alcohol, Running, Massage) in the first 48–72 hours.'
      ] },
      { h: 'Complications', list: [
        'Neurovascular injury (axillary nerve in shoulder, sciatic nerve in hip dislocation).',
        'Associated fractures.',
        'Recurrent dislocation and chronic joint instability.',
        'Avascular necrosis (hip dislocation) and later osteoarthritis.',
        'Stiffness if immobilized too long.'
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      'Differentiate between dislocation, subluxation, sprain and strain.',
      'Describe the clinical features and management of a dislocated shoulder.',
      'Explain the grading of sprains and the RICE principle.',
      'Discuss the nursing management of soft-tissue injuries.',
      'List the complications of dislocations and their prevention.'
    ],
    assessment: [
      { type: "mcq", q: 'Complete loss of contact between the articular surfaces of a joint is a:', options: ['Dislocation', 'Sprain', 'Strain', 'Subluxation'], answer: 0, rationale: 'Dislocation = complete separation; subluxation = partial; sprain/strain involve ligament/muscle.' },
      { type: "mcq", q: 'A sprain is specifically an injury to a:', options: ['Muscle', 'Tendon', 'Ligament', 'Bone'], answer: 2, rationale: 'A sprain injures a ligament; a strain injures a muscle or tendon.' },
      { type: "mcq", q: 'The most commonly dislocated large joint is the:', options: ['Hip', 'Shoulder', 'Knee', 'Ankle'], answer: 1, rationale: 'The shallow, mobile shoulder dislocates most often, usually anteriorly, risking axillary nerve injury.' },
      { type: "mcq", q: 'In the RICE principle, ice packs should be:', options: ['Applied directly to bare skin for an hour', 'Avoided entirely', 'Replaced by heat immediately', 'Wrapped and applied for about 20 minutes at a time'], answer: 3, rationale: 'Cold is applied wrapped for ~20 minutes to avoid ice burn while reducing swelling and pain.' },
      { type: "mcq", q: 'A grade III sprain is characterized by:', options: ['A complete ligament tear with marked instability', 'Microscopic stretching only', 'A partial tear with mild instability', 'No pain or swelling'], answer: 0, rationale: 'Grade III is a complete rupture with significant instability and may require surgery.' },
      { type: "mcq", q: 'Posterior hip dislocation particularly threatens which nerve?', options: ['Axillary', 'Median', 'Sciatic', 'Facial'], answer: 2, rationale: 'The sciatic nerve lies behind the hip and can be injured in posterior dislocation; avascular necrosis is also a risk.' },
      { type: "mcq", q: 'Before AND after reducing a dislocation, the nurse must document:', options: ['Weight of the patient', 'Neurovascular status distal to the joint', 'Blood glucose', 'Dietary intake'], answer: 1, rationale: 'Neurovascular checks detect nerve/vessel injury that reduction may cause or relieve.' },
      { type: "mcq", q: 'Which activities should be AVOIDED in the first 48–72 h after a sprain (the HARM factors)?', options: ['Rest and elevation', 'Ice and compression', 'Analgesia', 'Heat, alcohol, running and massage'], answer: 3, rationale: 'HARM factors increase bleeding and swelling early and should be avoided.' },
      { type: "mcq", q: 'Why is early reduction of a dislocation preferred?', options: ['It is more painful later', 'It avoids the need for X-ray', 'Reduction is easier and complications fewer when done early', 'It prevents the need for analgesia'], answer: 2, rationale: 'Delay allows muscle spasm and swelling, making reduction harder and raising neurovascular/necrosis risk.' },
      { type: "mcq", q: 'A key nursing measure to prevent RECURRENT dislocation is:', options: ['Teaching graded strengthening exercises and rehabilitation', 'Prolonged unlimited immobilization', 'Applying heat immediately', 'Avoiding all movement permanently'], answer: 0, rationale: 'Progressive strengthening restores stability; recurrent instability may still need surgery.' },
      { type: "fill", q: 'Partial loss of contact between joint surfaces is called a ____.', accept: ['subluxation'], rationale: 'Subluxation is incomplete, dislocation is complete separation.' },
      { type: "fill", q: 'The acronym RICE stands for Rest, Ice, Compression and ____.', accept: ['elevation'], rationale: 'Elevation above heart level reduces oedema in acute soft-tissue injury.' }
    ]
  },

  /* ============ TOPIC 9 ============ */
  {
    id: 'ort-09-amputation',
    unit: 'Unit 4 · Disorders & Surgery',
    title: 'Amputation, Prosthesis & Rehabilitation',
    readMinutes: 25,
    summary: 'Indications and levels of amputation; pre- and postoperative nursing care; stump (residual limb) care and shaping; phantom limb pain; prosthetic fitting and rehabilitation; and the psychological support essential to recovery.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Definition and indications', p: 'Amputation is the surgical removal of all or part of a limb. It is undertaken when a limb is unsalvageable or endangers life. The common indications are remembered as the \'3 Ds and more\':', list: [
        'Dead limb — peripheral vascular disease, diabetic gangrene, severe frostbite (the commonest cause overall).',
        'Dangerous limb — malignant tumour, spreading gas gangrene, life-threatening sepsis.',
        'Damned nuisance limb — severe pain, gross deformity, useless paralysed or grossly infected limb.',
        'Trauma — irreparable crush or mangled limb with vascular/nerve loss.'
      ] },
      { h: 'Levels of amputation', list: [
        'Upper limb — fingers, hand, below-elbow (transradial), above-elbow (transhumeral).',
        'Lower limb — toes, transmetatarsal, below-knee (transtibial), through-knee, above-knee (transfemoral), hip disarticulation.',
        'The surgeon amputates at the lowest level that will heal, preserving as much length and as many joints as possible for better prosthetic function.'
      ] },
      { h: 'Closed vs open amputation', list: [
        'Closed (flap) amputation — the wound is closed primarily with a skin flap; used when infection is not a concern.',
        'Open (guillotine) amputation — the wound is left open initially in the presence of infection, with definitive closure later.'
      ] },
      { h: 'Preoperative nursing care', list: [
        'Ensure informed consent, understanding the level and implications of amputation.',
        'Provide honest information and strong psychological preparation — the loss is profound.',
        'Optimize the patient — control diabetes, treat infection, improve nutrition and hydration.',
        'Assess the other limb and general fitness for rehabilitation.',
        'Introduce the physiotherapist and, where possible, a rehabilitated amputee for peer support.',
        'Begin teaching about postoperative exercises, stump care and the prosthesis.'
      ] },
      { h: 'Immediate postoperative care', list: [
        'Monitor vital signs and observe the stump dressing for haemorrhage — keep a tourniquet at the bedside for emergency use.',
        'Manage pain effectively.',
        'Position the stump to prevent contracture (see below) and elevate for the first 24 hours to reduce oedema — but avoid prolonged elevation that causes flexion contracture.',
        'Maintain limb hygiene and monitor for infection.',
        'Support psychological adjustment and grief.'
      ] },
      { h: 'Prevention of contractures', p: 'Contractures are a major obstacle to prosthetic fitting. For a below-knee stump, avoid prolonged knee flexion; for an above-knee stump, avoid hip flexion and abduction. The nurse encourages the patient to lie prone periodically to extend the hip, keeps the stump flat on the bed (not permanently propped on a pillow after the first day), and begins range-of-motion and strengthening exercises early.' },
      { h: 'Stump (residual limb) care and shaping', list: [
        'Inspect daily for redness, breakdown, drainage and healing.',
        'Wash with mild soap and water, dry thoroughly; no lotions/oils that soften skin.',
        'Apply stump bandaging in a figure-of-eight or use a stump shrinker to shape a firm, conical, oedema-free stump for the prosthesis.',
        'Perform stump-toughening (gentle massage, pressure) as the wound heals.',
        'Encourage exercises to maintain joint motion and muscle strength.'
      ] },
      { h: 'Phantom limb sensation and pain', p: 'Most amputees experience phantom limb sensation — the feeling that the missing limb is still present. Phantom limb pain is a genuine, sometimes severe neuropathic pain perceived in the absent limb. It is real and must never be dismissed. Management includes reassurance and explanation, analgesia (often neuropathic agents such as gabapentin/pregabalin or amitriptyline), TENS, mirror therapy, relaxation and early mobilization/prosthetic use. Distinguish phantom pain (in the absent limb) from stump pain (in the residual limb, often from neuroma or infection).' },
      { h: 'Prosthetic fitting', p: 'A prosthesis is an artificial limb. Fitting depends on a well-healed, well-shaped, non-tender stump. Temporary/early prostheses may allow early mobilization; the definitive prosthesis is fitted once the stump has matured and stabilized (often several weeks to months). The prosthetist and physiotherapist teach gait training, donning/doffing, skin checks and care of the prosthesis and socket.' },
      { h: 'Rehabilitation', list: [
        'Preserve and build strength of the remaining limbs and trunk.',
        'Progressive mobilization: transfers, standing balance, then gait training with the prosthesis.',
        'Teach independence in activities of daily living and use of aids (crutches, wheelchair, walker).',
        'Involve occupational therapy for home and vocational adaptation.',
        'Set realistic, patient-centred goals and celebrate milestones.'
      ] },
      { h: 'Psychological and social support', p: 'Amputation causes grief and altered body image, and may threaten identity, employment and relationships. The nurse allows expression of feelings, acknowledges the loss, involves family, arranges peer/support-group contact and refers for counselling where needed. Restoring hope and a sense of future capability is central to successful rehabilitation.' },
      { h: 'Complications', list: [
        'Haemorrhage and haematoma.',
        'Infection and wound breakdown/flap necrosis.',
        'Contractures preventing prosthetic use.',
        'Phantom and stump pain; neuroma.',
        'Delayed healing (especially in diabetes/vascular disease).'
      ] },
      { h: 'Stump positioning summary', figure: {
        caption: 'Positioning to prevent contracture differs by amputation level — avoid the positions the joint naturally \'wants\' to adopt.',
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stump positioning to prevent contracture"><rect x="15" y="15" width="530" height="150" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><rect x="35" y="45" width="240" height="105" rx="8" fill="#DCFCE7" stroke="#22C55E"/><text x="155" y="68" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Below-knee stump</text><text x="155" y="94" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#15803D">Avoid prolonged KNEE flexion</text><text x="155" y="116" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#15803D">Keep knee extended; stump flat</text><rect x="285" y="45" width="240" height="105" rx="8" fill="#DCFCE7" stroke="#22C55E"/><text x="405" y="68" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0F4C3A">Above-knee stump</text><text x="405" y="94" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#15803D">Avoid HIP flexion &amp; abduction</text><text x="405" y="116" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#15803D">Lie prone periodically</text></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'State the indications and levels of amputation.',
      'Describe the pre- and postoperative nursing care of an amputee.',
      'Explain stump care and the prevention of contractures.',
      'Discuss phantom limb pain and its management.',
      'Describe the rehabilitation and psychological support of a patient after amputation.'
    ],
    assessment: [
      { type: "mcq", q: 'The most common overall indication for lower-limb amputation is:', options: ['Peripheral vascular disease / diabetic gangrene', 'Bone tumour', 'Congenital deformity', 'Cosmetic reasons'], answer: 0, rationale: 'Ischaemia from vascular disease and diabetes (dead limb) is the leading cause of amputation.' },
      { type: "mcq", q: 'Which item should be kept at the bedside immediately after amputation?', options: ['A heating pad', 'An ice bucket', 'A tourniquet for emergency haemorrhage', 'A blood glucose meter only'], answer: 2, rationale: 'Sudden stump haemorrhage is a risk; a tourniquet allows immediate control while help is summoned.' },
      { type: "mcq", q: 'To prevent a hip flexion contracture in an above-knee amputee, the nurse encourages the patient to:', options: ['Sit continuously with the hip flexed', 'Lie prone periodically to extend the hip', 'Keep the stump on a pillow at all times', 'Avoid all movement'], answer: 1, rationale: 'Prone lying stretches the hip into extension, countering the tendency to flexion contracture.' },
      { type: "mcq", q: 'Phantom limb pain is best described as:', options: ['Imaginary and best ignored', 'Always due to wound infection', 'Only psychological', 'A real neuropathic pain perceived in the absent limb'], answer: 3, rationale: 'It is genuine neuropathic pain and must be treated, not dismissed.' },
      { type: "mcq", q: 'The goal of stump bandaging (figure-of-eight) or a shrinker is to:', options: ['Shape a firm, conical, oedema-free stump for the prosthesis', 'Increase swelling', 'Prevent all movement', 'Replace analgesia'], answer: 0, rationale: 'Compression shapes and reduces oedema, producing a stump that fits the prosthetic socket.' },
      { type: "mcq", q: 'An open (guillotine) amputation is chosen mainly when:', options: ['There is no infection', 'The patient prefers it', 'Infection is present and closure must be delayed', 'For cosmetic reasons'], answer: 2, rationale: 'Leaving the wound open lets infection drain before delayed definitive closure.' },
      { type: "mcq", q: 'The surgeon selects the amputation level to:', options: ['Remove as much limb as possible', 'Amputate at the lowest level that will heal, preserving length and joints', 'Always amputate above the knee', 'Match the opposite limb'], answer: 1, rationale: 'Preserving length and joints improves prosthetic function and independence.' },
      { type: "mcq", q: 'Which measure helps relieve phantom limb pain?', options: ['Prolonged bed rest and isolation', 'Restricting fluids', 'Ignoring the patient\'s reports', 'Mirror therapy, TENS and neuropathic analgesics'], answer: 3, rationale: 'Mirror therapy, TENS, relaxation and neuropathic agents (gabapentin, amitriptyline) are effective options.' },
      { type: "mcq", q: 'Definitive prosthetic fitting generally awaits:', options: ['Immediate surgery day', 'Complete loss of all muscle', 'A well-healed, well-shaped, non-tender mature stump', 'Resolution of phantom sensation only'], answer: 2, rationale: 'The stump must mature and stabilize (weeks–months) before a definitive prosthesis fits well.' },
      { type: "mcq", q: 'A priority psychosocial nursing action for a new amputee is to:', options: ['Allow expression of grief and arrange peer/support contact', 'Discourage discussion of the loss', 'Focus only on the wound', 'Delay all family involvement'], answer: 0, rationale: 'Acknowledging grief, involving family and peers, and referring for counselling support adjustment.' },
      { type: "fill", q: 'The sensation that the amputated limb is still present is called ____ limb sensation.', accept: ['phantom'], rationale: 'Phantom sensation is common; phantom pain is neuropathic pain in the absent limb.' },
      { type: "fill", q: 'Lying ____ periodically helps prevent hip flexion contracture in an above-knee amputee.', accept: ['prone'], rationale: 'Prone lying extends the hip and prevents flexion contracture.' }
    ]
  },

  /* ============ TOPIC 10 ============ */
  {
    id: 'ort-10-arthritis',
    unit: 'Unit 4 · Disorders & Surgery',
    title: 'Arthritis — Osteoarthritis & Rheumatoid Arthritis',
    readMinutes: 26,
    summary: 'Definition and comparison of osteoarthritis (degenerative) and rheumatoid arthritis (autoimmune/inflammatory); pathophysiology, risk factors, clinical features, investigations, medical management and comprehensive nursing care and health education for chronic joint disease.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Overview', p: 'Arthritis means inflammation of a joint, but the term covers a group of disorders. The two most important are osteoarthritis (OA) — a degenerative \'wear-and-tear\' disease of cartilage — and rheumatoid arthritis (RA) — a chronic systemic autoimmune inflammatory disease of the synovium. Distinguishing them guides very different management.' },
      { h: 'Osteoarthritis — definition and pathophysiology', p: 'OA is a degenerative joint disease characterized by progressive loss of articular cartilage, with subchondral bone sclerosis, osteophyte (bone spur) formation and secondary synovial changes. Cartilage softens, fibrillates and wears away; the joint space narrows, bone rubs on bone, and the joint becomes painful and stiff. It is the commonest form of arthritis, mainly affecting weight-bearing joints (knee, hip) and hands.' },
      { h: 'OA — risk factors', list: [
        'Increasing age.',
        'Obesity (especially for knee OA).',
        'Previous joint injury or intra-articular fracture (secondary OA).',
        'Repetitive occupational or sports overload.',
        'Female sex and genetic predisposition.',
        'Joint malalignment and instability.'
      ] },
      { h: 'OA — clinical features', list: [
        'Joint pain worse with activity and relieved by rest.',
        'Short-lived morning stiffness (usually under 30 minutes).',
        'Crepitus on movement; bony swelling and reduced range of motion.',
        'Heberden\'s nodes (distal interphalangeal) and Bouchard\'s nodes (proximal interphalangeal) in the hands.',
        'Usually asymmetrical; no systemic illness.'
      ] },
      { h: 'Rheumatoid arthritis — definition and pathophysiology', p: 'RA is a chronic, systemic, autoimmune inflammatory disease in which the immune system attacks the synovial membrane. The inflamed synovium proliferates into a destructive vascular tissue (pannus) that erodes cartilage and bone, causing joint destruction, deformity and disability. It typically affects small joints symmetrically and has extra-articular (systemic) manifestations.' },
      { h: 'RA — clinical features', list: [
        'Symmetrical polyarthritis of small joints (hands — MCP and PIP, wrists, feet).',
        'Prolonged morning stiffness (over 1 hour).',
        'Warm, swollen, tender joints; systemic symptoms — fatigue, malaise, low-grade fever, weight loss.',
        'Characteristic deformities — ulnar deviation, swan-neck and boutonnière deformities, Z-thumb.',
        'Extra-articular features — rheumatoid nodules, anaemia, pericarditis, pleurisy, eye involvement, vasculitis.'
      ] },
      { h: 'OA vs RA — comparison', figure: {
        caption: 'Contrasting osteoarthritis and rheumatoid arthritis — the core discriminators for assessment.',
        svg: '<svg viewBox="0 0 560 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of osteoarthritis and rheumatoid arthritis"><rect x="15" y="15" width="530" height="190" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="280" y1="50" x2="280" y2="195" stroke="#22C55E" stroke-width="1.5"/><text x="147" y="42" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Osteoarthritis</text><text x="413" y="42" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Rheumatoid</text><g font-family="sans-serif" font-size="11.5" fill="#15803D"><text x="30" y="72">Degenerative (wear)</text><text x="300" y="72">Autoimmune inflammatory</text><text x="30" y="98">Large weight-bearing joints</text><text x="300" y="98">Small joints, symmetrical</text><text x="30" y="124">Stiffness &lt; 30 min</text><text x="300" y="124">Stiffness &gt; 1 hour</text><text x="30" y="150">No systemic illness</text><text x="300" y="150">Systemic: fatigue, fever</text><text x="30" y="176">Heberden / Bouchard nodes</text><text x="300" y="176">Ulnar deviation, pannus</text></g></svg>'
      } },
      { h: 'Investigations', list: [
        'OA — X-ray shows joint-space narrowing, osteophytes, subchondral sclerosis and cysts; inflammatory markers normal.',
        'RA — raised ESR and CRP; positive rheumatoid factor and anti-CCP antibodies; anaemia; X-ray shows erosions, periarticular osteopenia and deformity.'
      ] },
      { h: 'Medical management of OA', list: [
        'Lifestyle — weight reduction, activity modification, exercise to strengthen supporting muscles.',
        'Analgesia — paracetamol first-line; NSAIDs; topical NSAIDs; intra-articular corticosteroid injections.',
        'Physiotherapy and assistive/mobility aids.',
        'Surgery for severe disease — arthroscopy, osteotomy, or joint replacement (arthroplasty).'
      ] },
      { h: 'Medical management of RA', list: [
        'Disease-modifying antirheumatic drugs (DMARDs) — methotrexate is first-line; started early to prevent joint destruction.',
        'Biologic agents (e.g. anti-TNF) for resistant disease.',
        'NSAIDs and short courses/low-dose corticosteroids for symptom control.',
        'Physiotherapy, occupational therapy and, for damaged joints, reconstructive surgery.',
        'Regular monitoring of drug toxicity (methotrexate — FBC and liver function).'
      ] },
      { h: 'Nursing management (common to both)', list: [
        'Pain and inflammation control — analgesia, heat (chronic stiffness) or cold (acute inflammation), rest of the inflamed joint.',
        'Preserve joint function — a balance of rest and exercise; range-of-motion and strengthening as tolerated; splints in acute RA flares.',
        'Joint protection — good body mechanics, use large joints, avoid prolonged grip, assistive devices, pacing of activity.',
        'Promote independence in activities of daily living; occupational therapy referral.',
        'Monitor and educate about medication and its side effects (GI bleeding with NSAIDs; immunosuppression with DMARDs/steroids).',
        'Psychological support for a chronic, sometimes disabling disease.'
      ] },
      { h: 'Health education', list: [
        'Weight control and appropriate exercise (low-impact — swimming, cycling).',
        'Joint-protection techniques and energy conservation/pacing.',
        'Correct, safe use of medication and reporting of side effects.',
        'Balance of rest during flares with maintenance of movement.',
        'Regular follow-up; recognizing and reporting flares and complications.'
      ] },
      { h: 'Clinical relevance', p: 'The nurse must recognize that RA is systemic and progressive, so early DMARD therapy and adherence prevent irreversible deformity; whereas OA management centres on weight, muscle strength and mechanical protection. Confusing the two — for example, prescribing only simple analgesia for aggressive RA — risks permanent joint destruction.' }
    ],
    references: REF_ORT,
    examQuestions: [
      'Compare and contrast osteoarthritis and rheumatoid arthritis.',
      'Describe the pathophysiology and clinical features of rheumatoid arthritis.',
      'Discuss the medical management of osteoarthritis.',
      'Explain the nursing management of a patient with chronic arthritis, including joint protection.',
      'Write health education points for a patient with rheumatoid arthritis on methotrexate.'
    ],
    assessment: [
      { type: "mcq", q: 'The primary pathology in osteoarthritis is:', options: ['Progressive loss of articular cartilage with osteophyte formation', 'Autoimmune synovial inflammation', 'Bacterial joint infection', 'Crystal deposition'], answer: 0, rationale: 'OA is degenerative: cartilage wears, joint space narrows, and osteophytes and subchondral sclerosis develop.' },
      { type: "mcq", q: 'Morning stiffness lasting more than one hour is characteristic of:', options: ['Osteoarthritis', 'A sprain', 'Rheumatoid arthritis', 'Gout only'], answer: 2, rationale: 'Prolonged (>1 h) morning stiffness reflects the inflammatory nature of RA; OA stiffness is brief (<30 min).' },
      { type: "mcq", q: 'The destructive proliferating synovial tissue in rheumatoid arthritis is called:', options: ['Osteophyte', 'Pannus', 'Callus', 'Tophus'], answer: 1, rationale: 'Pannus is the inflammatory vascular synovial tissue that erodes cartilage and bone in RA.' },
      { type: "mcq", q: 'Heberden\'s nodes at the distal interphalangeal joints are a feature of:', options: ['Rheumatoid arthritis', 'Septic arthritis', 'Gout', 'Osteoarthritis'], answer: 3, rationale: 'Bony Heberden\'s (DIP) and Bouchard\'s (PIP) nodes are typical of hand OA.' },
      { type: "mcq", q: 'The first-line disease-modifying drug in rheumatoid arthritis is:', options: ['Methotrexate', 'Paracetamol', 'Aspirin', 'Morphine'], answer: 0, rationale: 'Methotrexate is the first-line DMARD, started early to prevent joint destruction; it requires FBC/LFT monitoring.' },
      { type: "mcq", q: 'Which laboratory finding supports rheumatoid arthritis rather than osteoarthritis?', options: ['Normal ESR and CRP', 'High serum uric acid', 'Positive anti-CCP antibody and raised inflammatory markers', 'Low alkaline phosphatase'], answer: 2, rationale: 'Anti-CCP and rheumatoid factor with raised ESR/CRP indicate RA; OA has normal inflammatory markers.' },
      { type: "mcq", q: 'For an acutely inflamed, hot RA joint during a flare, the MOST appropriate local measure is:', options: ['Vigorous exercise', 'Rest and cold application, splinting the joint', 'Deep massage', 'Heat and heavy use'], answer: 1, rationale: 'Acute inflammation is eased by rest and cold; heat suits chronic stiffness, and exercise resumes as the flare settles.' },
      { type: "mcq", q: 'A key joint-protection principle taught to arthritis patients is to:', options: ['Use small joints for heavy tasks', 'Maintain a tight prolonged grip', 'Avoid all assistive devices', 'Use larger/stronger joints and pace activities'], answer: 3, rationale: 'Using large joints, avoiding sustained grip, pacing and using aids protect vulnerable joints.' },
      { type: "mcq", q: 'A patient on long-term NSAIDs for OA should be monitored particularly for:', options: ['Hair growth', 'Weight loss', 'Gastrointestinal bleeding', 'Improved bone density'], answer: 2, rationale: 'NSAIDs risk GI irritation and bleeding (and renal effects); gastroprotection may be needed.' },
      { type: "mcq", q: 'The single most effective conservative measure for knee osteoarthritis in an obese patient is:', options: ['Weight reduction and muscle strengthening', 'Bed rest', 'High-dose opioids', 'Immobilizing the knee permanently'], answer: 0, rationale: 'Weight loss reduces joint load and quadriceps strengthening stabilizes the knee, easing OA pain.' },
      { type: "fill", q: 'Rheumatoid arthritis is treated early with drugs called ____ to prevent joint destruction.', accept: ['DMARDs', 'disease-modifying antirheumatic drugs', 'dmards'], rationale: 'DMARDs (e.g. methotrexate) modify disease course and prevent erosion.' },
      { type: "fill", q: 'Bony spurs that form at joint margins in osteoarthritis are called ____.', accept: ['osteophytes', 'osteophyte'], rationale: 'Osteophytes are a radiological hallmark of OA.' }
    ]
  },

  /* ============ TOPIC 11 ============ */
  {
    id: 'ort-11-bone-joint-infection',
    unit: 'Unit 4 · Disorders & Surgery',
    title: 'Bone & Joint Infections — Osteomyelitis, Septic Arthritis & TB Spine',
    readMinutes: 25,
    summary: 'Causes, routes of infection, pathophysiology, clinical features, investigations and management of acute and chronic osteomyelitis, septic arthritis and skeletal tuberculosis (Pott\'s disease), with the nursing care essential to preventing disability.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Overview', p: 'Musculoskeletal infections are orthopedic emergencies: delay causes irreversible bone and joint destruction and lifelong disability. The main entities are osteomyelitis (infection of bone), septic arthritis (infection of a joint) and skeletal tuberculosis (chronic infection, most importantly of the spine).' },
      { h: 'Osteomyelitis — definition and routes', p: 'Osteomyelitis is infection of bone and marrow, most often by Staphylococcus aureus. It reaches bone by three routes:', list: [
        'Haematogenous — blood-borne from a distant focus; common in children, typically affecting the metaphysis of long bones.',
        'Contiguous spread — from adjacent infection (soft tissue, ulcer, sinus).',
        'Direct inoculation — open fracture, surgery or penetrating wound.'
      ] },
      { h: 'Osteomyelitis — pathophysiology', p: 'Infection incites inflammation and pus within the rigid bone; raised intraosseous pressure and thrombosis of vessels cut off blood supply, producing a dead fragment of bone called a sequestrum. New bone laid down around it forms an involucrum. Because the sequestrum is avascular, antibiotics cannot reach it, so chronic osteomyelitis with discharging sinuses may follow acute infection if treatment is delayed.' },
      { h: 'Osteomyelitis — clinical features', list: [
        'Acute — sudden severe localized bone pain, tenderness, warmth and swelling; the patient is systemically unwell with high fever, chills and malaise; reluctance to move or bear weight (pseudoparalysis in children).',
        'Chronic — recurrent pain, low-grade fever, a discharging sinus and general debility; may flare intermittently.'
      ] },
      { h: 'Osteomyelitis — investigations and management', list: [
        'Investigations — raised WBC, ESR and CRP; blood culture; X-ray (changes appear after 10–14 days); MRI/bone scan for early detection; bone aspiration/biopsy for organism and sensitivity.',
        'Management — prompt, prolonged intravenous then oral antibiotics (often several weeks) guided by culture; immobilization and rest of the limb; analgesia; and surgical drainage/debridement and removal of sequestrum (sequestrectomy) in chronic disease.'
      ] },
      { h: 'Septic arthritis — definition and features', p: 'Septic arthritis is infection within a joint, usually by S. aureus, reaching the joint via the blood, from adjacent osteomyelitis, or by direct injury/injection. It is a true emergency because pus rapidly destroys articular cartilage. Features: a single (usually large) joint that is acutely hot, swollen, exquisitely painful and held still, with fever and inability to move or bear weight; any attempted movement is severely painful.' },
      { h: 'Septic arthritis — investigations and management', list: [
        'Urgent joint aspiration — turbid/purulent fluid with a very high WBC count, Gram stain and culture (distinguishes from gout/inflammatory arthritis).',
        'Blood cultures, WBC, ESR and CRP.',
        'Management — emergency joint drainage/washout (aspiration, arthroscopic or open), urgent intravenous antibiotics, joint rest/splinting then early mobilization to prevent stiffness, and analgesia.',
        'Delay of even a day risks permanent cartilage destruction and secondary osteoarthritis.'
      ] },
      { h: 'Tuberculosis of the spine (Pott\'s disease)', p: 'Skeletal TB is a chronic granulomatous infection by Mycobacterium tuberculosis, usually secondary to pulmonary TB. The spine is the commonest site (Pott\'s disease), typically the thoracolumbar vertebrae. TB destroys the vertebral bodies and intervertebral disc, causing collapse and a sharp angular kyphosis called a gibbus. A cold abscess (no acute inflammation) may track along tissue planes (e.g. psoas abscess).' },
      { h: 'TB spine — features, investigations, management', list: [
        'Features — insidious back pain and stiffness, low-grade evening fever, night sweats, weight loss (constitutional TB symptoms), a gibbus deformity, cold abscess, and possible spinal cord compression with weakness/paraplegia (Pott\'s paraplegia).',
        'Investigations — raised ESR, Mantoux/IGRA, X-ray and MRI (best for early disease and cord compression), biopsy/culture and chest X-ray.',
        'Management — prolonged combination anti-tubercular therapy (6–18 months); spinal immobilization/bracing; and surgical decompression/stabilization for neurological deficit or gross deformity.'
      ] },
      { h: 'Nursing management of bone and joint infection', list: [
        'Administer antibiotics/anti-tubercular drugs accurately and on time; stress adherence to the full, long course.',
        'Rest and immobilize (and elevate) the affected part to relieve pain and prevent deformity.',
        'Assess and relieve pain; monitor temperature and signs of systemic sepsis.',
        'Aseptic wound and sinus care; safe handling and disposal of infected material; standard precautions (and respiratory precautions for active pulmonary TB).',
        'Neurovascular and neurological monitoring (limb perfusion; cord signs in TB spine).',
        'Nutrition — high-protein, high-calorie, vitamin-rich diet to fight infection and aid healing.',
        'Prevent complications of immobility; support the patient and family through prolonged treatment.'
      ] },
      { h: 'Complications', list: [
        'Chronic osteomyelitis with sequestrum and sinus.',
        'Pathological fracture and growth disturbance in children.',
        'Joint destruction and secondary osteoarthritis (septic arthritis).',
        'Spinal deformity and paraplegia (TB spine).',
        'Systemic sepsis and, rarely, amyloidosis in chronic infection.'
      ] },
      { h: 'Health education and prevention', list: [
        'Complete the full course of antibiotics/anti-TB drugs even after symptoms improve.',
        'Prompt treatment of skin and soft-tissue infections and of open wounds.',
        'BCG vaccination and treatment of the source in TB; screening of contacts.',
        'Aseptic technique for injections and surgery; good nutrition and control of diabetes.',
        'Report recurrence of pain, fever, swelling, discharge or new weakness.'
      ] },
      { h: 'Routes and pathology of osteomyelitis', figure: {
        caption: 'Osteomyelitis: infection reaches bone by three routes and, if untreated, produces a dead sequestrum enclosed by new involucrum.',
        svg: '<svg viewBox="0 0 560 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Routes and pathology of osteomyelitis"><defs><marker id="ortArrO" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#0F4C3A"/></marker></defs><rect x="15" y="15" width="530" height="170" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><rect x="35" y="45" width="150" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="110" y="65" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#0F4C3A">Haematogenous (blood)</text><rect x="35" y="83" width="150" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="110" y="103" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#0F4C3A">Contiguous spread</text><rect x="35" y="121" width="150" height="30" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="110" y="141" text-anchor="middle" font-family="sans-serif" font-size="11.5" fill="#0F4C3A">Direct inoculation</text><rect x="230" y="80" width="120" height="40" rx="8" fill="#15803D" stroke="#0F4C3A"/><text x="290" y="105" text-anchor="middle" font-family="sans-serif" font-size="12" font-weight="700" fill="#F0FDF4">BONE infection</text><line x1="185" y1="60" x2="226" y2="92" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ortArrO)"/><line x1="185" y1="98" x2="226" y2="100" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ortArrO)"/><line x1="185" y1="136" x2="226" y2="108" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ortArrO)"/><rect x="395" y="55" width="140" height="40" rx="8" fill="#DCFCE7" stroke="#22C55E"/><text x="465" y="80" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0F4C3A">Sequestrum (dead bone)</text><rect x="395" y="105" width="140" height="40" rx="8" fill="#DCFCE7" stroke="#22C55E"/><text x="465" y="130" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#0F4C3A">Involucrum (new bone)</text><line x1="350" y1="95" x2="391" y2="80" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ortArrO)"/><line x1="350" y1="105" x2="391" y2="120" stroke="#0F4C3A" stroke-width="2" marker-end="url(#ortArrO)"/></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'Define osteomyelitis; describe its routes of infection and pathophysiology.',
      'Describe the clinical features and management of acute osteomyelitis.',
      'Discuss septic arthritis as an orthopedic emergency and its management.',
      'Describe tuberculosis of the spine (Pott\'s disease) and its complications.',
      'Outline the nursing management of a patient with a bone or joint infection.'
    ],
    assessment: [
      { type: "mcq", q: 'The commonest causative organism of osteomyelitis and septic arthritis is:', options: ['Staphylococcus aureus', 'Escherichia coli', 'Mycobacterium tuberculosis', 'Streptococcus pneumoniae'], answer: 0, rationale: 'S. aureus is the leading cause of both osteomyelitis and septic arthritis.' },
      { type: "mcq", q: 'A fragment of dead, avascular bone formed in chronic osteomyelitis is a:', options: ['Involucrum', 'Osteophyte', 'Sequestrum', 'Callus'], answer: 2, rationale: 'The sequestrum is dead bone; the involucrum is the surrounding new bone. Antibiotics cannot reach the sequestrum.' },
      { type: "mcq", q: 'Why is septic arthritis a surgical emergency?', options: ['It causes only mild pain', 'Pus rapidly destroys articular cartilage', 'It resolves without treatment', 'It never affects large joints'], answer: 1, rationale: 'Enzymes in pus destroy cartilage within days, so urgent drainage and antibiotics are essential.' },
      { type: "mcq", q: 'Haematogenous osteomyelitis in children typically begins at the:', options: ['Diaphysis', 'Epiphysis', 'Periosteum only', 'Metaphysis of long bones'], answer: 3, rationale: 'The metaphyseal capillaries\' sluggish flow favours bacterial seeding in children.' },
      { type: "mcq", q: 'The sharp angular kyphosis of spinal tuberculosis is called a:', options: ['Gibbus', 'Lordosis', 'Scoliosis', 'Pannus'], answer: 0, rationale: 'Vertebral collapse in Pott\'s disease produces an angular gibbus deformity.' },
      { type: "mcq", q: 'The most useful early imaging for suspected osteomyelitis before X-ray changes appear is:', options: ['Plain X-ray', 'DEXA', 'MRI or bone scan', 'Ultrasound only'], answer: 2, rationale: 'X-ray changes lag 10–14 days; MRI/bone scan detect infection early.' },
      { type: "mcq", q: 'The single most important investigation in suspected septic arthritis is:', options: ['Serum uric acid', 'Joint aspiration for cell count, Gram stain and culture', 'DEXA scan', 'Nerve conduction study'], answer: 1, rationale: 'Synovial fluid analysis confirms infection and guides antibiotics, distinguishing it from gout.' },
      { type: "mcq", q: 'A \'cold abscess\' is characteristically associated with:', options: ['Acute pyogenic osteomyelitis', 'Osteoarthritis', 'A fresh fracture', 'Skeletal tuberculosis'], answer: 3, rationale: 'TB produces a cold abscess lacking the acute redness/heat of pyogenic infection, tracking along tissue planes.' },
      { type: "mcq", q: 'A key nursing priority when giving anti-tubercular therapy for TB spine is to:', options: ['Stop the drugs once fever settles', 'Give a single antibiotic only', 'Stress completion of the full prolonged course to prevent resistance', 'Restrict all movement permanently'], answer: 2, rationale: 'TB requires prolonged multidrug therapy; premature stopping causes relapse and drug resistance.' },
      { type: "mcq", q: 'Pott\'s paraplegia results from:', options: ['Spinal cord compression in tuberculous spinal disease', 'A joint effusion', 'Peripheral neuropathy', 'A wrist fracture'], answer: 0, rationale: 'Abscess, bony collapse or granulation tissue compresses the cord, causing weakness/paraplegia.' },
      { type: "fill", q: 'Infection of a joint that rapidly destroys cartilage is called ____ arthritis.', accept: ['septic', 'suppurative', 'pyogenic'], rationale: 'Septic (pyogenic) arthritis is a joint infection emergency.' },
      { type: "fill", q: 'The new bone that forms around a sequestrum in osteomyelitis is called the ____.', accept: ['involucrum'], rationale: 'Involucrum is the sheath of new bone enclosing the dead sequestrum.' }
    ]
  },

  /* ============ TOPIC 12 ============ */
  {
    id: 'ort-12-spinal-disorders',
    unit: 'Unit 5 · Spinal & Regional Disorders',
    title: 'Spinal Disorders — Low Back Pain, PIVD & Scoliosis',
    readMinutes: 24,
    summary: 'Causes and assessment of low back pain; the pathophysiology, features and management of prolapsed intervertebral disc (PIVD) and sciatica; spinal deformities (scoliosis, kyphosis, lordosis); and the nursing care, body mechanics and health education for spinal conditions.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'The spine — quick review', p: 'The vertebral column has 33 vertebrae (7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral, 4 fused coccygeal) separated by intervertebral discs that act as shock absorbers. Each disc has a tough outer anulus fibrosus and a soft gel centre, the nucleus pulposus. The column protects the spinal cord and supports the trunk; the lumbar region bears the greatest load and is the commonest site of back problems.' },
      { h: 'Low back pain — causes', list: [
        'Mechanical/postural — muscle strain, poor posture, heavy or incorrect lifting (the commonest cause).',
        'Degenerative — disc degeneration and spondylosis/osteoarthritis.',
        'Prolapsed intervertebral disc (PIVD).',
        'Inflammatory — ankylosing spondylitis.',
        'Infective/neoplastic — TB spine, tumour, metastasis (red-flag causes).',
        'Osteoporotic vertebral fracture; referred pain (renal, gynaecological).'
      ] },
      { h: 'Red flags in back pain', list: [
        'Bladder or bowel dysfunction and saddle anaesthesia (cauda equina syndrome — an emergency).',
        'Progressive neurological deficit or leg weakness.',
        'Night pain, unexplained weight loss, fever (infection or malignancy).',
        'Age under 20 or over 55 with new pain, or a history of cancer.',
        'Trauma or long-term steroid use (fracture).'
      ] },
      { h: 'Prolapsed intervertebral disc (PIVD) — pathophysiology', p: 'In PIVD (\'slipped disc\'), the nucleus pulposus herniates through a weakened or torn anulus fibrosus, usually postero-laterally, and presses on a spinal nerve root. Most occur at the lower lumbar levels (L4–L5, L5–S1). Compression of a lumbar root causes sciatica — pain radiating from the back down the buttock and leg along the nerve distribution, with numbness, tingling and weakness.' },
      { h: 'PIVD — clinical features and investigations', list: [
        'Low back pain radiating down the leg (sciatica), worse on coughing, sneezing or straining.',
        'A positive straight-leg-raise (Lasègue\'s) test reproduces the leg pain.',
        'Sensory loss, weakness and diminished reflexes in the affected root distribution.',
        'Investigation of choice — MRI of the spine; X-ray to exclude other pathology.',
        'Cauda equina features (bladder/bowel involvement, saddle anaesthesia) demand emergency surgery.'
      ] },
      { h: 'PIVD — management', list: [
        'Conservative (most cases) — short rest then early graded mobilization, analgesia and NSAIDs, muscle relaxants, physiotherapy and back exercises, and epidural/nerve-root steroid injection.',
        'Surgical (for failed conservative care, severe/progressive deficit or cauda equina) — discectomy/microdiscectomy or laminectomy.'
      ] },
      { h: 'Spinal deformities', list: [
        'Scoliosis — lateral curvature of the spine (often with rotation); idiopathic (commonest, adolescent girls), congenital or neuromuscular.',
        'Kyphosis — excessive posterior (outward) thoracic curvature (\'hunchback\'); from postural causes, osteoporosis, TB or Scheuermann\'s disease.',
        'Lordosis — excessive inward lumbar curvature (\'swayback\').'
      ] },
      { h: 'Scoliosis — assessment and management', list: [
        'Screening — the forward-bend (Adam\'s) test reveals a rib hump; the Cobb angle on X-ray measures curve severity.',
        'Observation for mild curves (Cobb < ~20°).',
        'Bracing for moderate progressive curves in the growing child (e.g. ~25–40°).',
        'Surgery (spinal fusion with instrumentation) for severe curves (> ~45–50°) or progression, and to prevent cardiorespiratory compromise.'
      ] },
      { h: 'Nursing management of spinal disorders', list: [
        'Pain relief — analgesia, correct positioning, firm supportive mattress, and heat/cold as appropriate.',
        'Safe positioning and log-rolling to keep the spine in alignment (especially after surgery or in cord risk).',
        'Neurological monitoring — power, sensation, reflexes, and bladder/bowel function (watch for cauda equina).',
        'Promote correct body mechanics and posture; teach back-strengthening exercises.',
        'Care of the braced patient — skin under the brace, correct fit and wearing schedule.',
        'Prevent complications of immobility and provide psychological support (deformity, chronicity).'
      ] },
      { h: 'Post-laminectomy/discectomy nursing care', list: [
        'Log-roll to turn; maintain spinal alignment.',
        'Neurovascular and neurological checks of the lower limbs and monitoring of bladder function.',
        'Wound observation for bleeding or CSF leak.',
        'Early mobilization as ordered with correct technique; avoid twisting and bending.',
        'Pain control and gradual resumption of activity with physiotherapy.'
      ] },
      { h: 'Health education — back care and body mechanics', list: [
        'Lift with the knees bent and back straight, holding the load close to the body; never twist while lifting.',
        'Maintain good posture and a healthy weight; avoid prolonged sitting/stooping.',
        'Regular core- and back-strengthening exercise; use ergonomic seating.',
        'Sleep on a firm mattress; use correct techniques for daily activities.',
        'Report red-flag symptoms (leg weakness, bladder/bowel changes, saddle numbness) urgently.'
      ] },
      { h: 'Correct lifting technique', figure: {
        caption: 'Safe lifting protects the lumbar spine — bend the knees, keep the back straight, and hold the load close.',
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Correct versus incorrect lifting technique"><rect x="15" y="15" width="530" height="160" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="280" y1="45" x2="280" y2="165" stroke="#22C55E" stroke-width="1.5"/><text x="147" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">CORRECT</text><text x="413" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">INCORRECT</text><g font-family="sans-serif" font-size="11.5" fill="#15803D"><text x="147" y="72" text-anchor="middle">Bend the knees</text><text x="147" y="98" text-anchor="middle">Keep back straight</text><text x="147" y="124" text-anchor="middle">Load close to body</text><text x="147" y="150" text-anchor="middle">Do not twist</text></g><g font-family="sans-serif" font-size="11.5" fill="#0F4C3A"><text x="413" y="72" text-anchor="middle">Bending at the waist</text><text x="413" y="98" text-anchor="middle">Rounded back</text><text x="413" y="124" text-anchor="middle">Load far from body</text><text x="413" y="150" text-anchor="middle">Twisting under load</text></g></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'List the causes of low back pain and the red-flag features that require urgent action.',
      'Describe the pathophysiology, features and management of a prolapsed intervertebral disc.',
      'Differentiate scoliosis, kyphosis and lordosis and outline the management of scoliosis.',
      'Discuss the nursing care of a patient after laminectomy/discectomy.',
      'Write health education on back care and correct body mechanics.'
    ],
    assessment: [
      { type: "mcq", q: 'In a prolapsed intervertebral disc, the structure that herniates is the:', options: ['Nucleus pulposus', 'Anulus fibrosus', 'Spinal cord', 'Ligamentum flavum'], answer: 0, rationale: 'The gel-like nucleus pulposus herniates through a torn anulus, compressing a nerve root.' },
      { type: "mcq", q: 'Sciatica in lumbar disc prolapse is typically WORSENED by:', options: ['Lying still', 'Sleeping', 'Coughing, sneezing or straining', 'Warm baths'], answer: 2, rationale: 'Raising intraspinal pressure by coughing/straining aggravates root compression pain.' },
      { type: "mcq", q: 'New bladder/bowel dysfunction with saddle anaesthesia and leg weakness indicates:', options: ['Simple mechanical back pain', 'Cauda equina syndrome — a surgical emergency', 'Mild disc bulge', 'Muscle strain'], answer: 1, rationale: 'Cauda equina syndrome requires emergency decompression to prevent permanent damage.' },
      { type: "mcq", q: 'The imaging investigation of choice for a suspected prolapsed disc is:', options: ['Plain X-ray', 'DEXA scan', 'Bone scan', 'MRI of the spine'], answer: 3, rationale: 'MRI best demonstrates disc herniation and nerve-root compression.' },
      { type: "mcq", q: 'A lateral curvature of the spine is called:', options: ['Scoliosis', 'Kyphosis', 'Lordosis', 'Spondylosis'], answer: 0, rationale: 'Scoliosis is lateral (side-to-side) curvature; kyphosis is outward and lordosis inward.' },
      { type: "mcq", q: 'The severity of a scoliotic curve is measured on X-ray by the:', options: ['T-score', 'Wells score', 'Cobb angle', 'Braden score'], answer: 2, rationale: 'The Cobb angle quantifies the scoliotic curve and guides management.' },
      { type: "mcq", q: 'When turning a patient with a spinal injury or after spinal surgery, the nurse should:', options: ['Twist the trunk to turn quickly', 'Log-roll to keep the spine in alignment', 'Pull on the arms', 'Let the patient turn alone'], answer: 1, rationale: 'Log-rolling keeps the vertebral column aligned and prevents further injury.' },
      { type: "mcq", q: 'The correct technique for lifting a heavy object is to:', options: ['Bend at the waist with straight legs', 'Twist while lifting', 'Hold the load at arm\'s length', 'Bend the knees, keep the back straight and hold the load close'], answer: 3, rationale: 'Using the legs, keeping the back straight and the load close protects the lumbar spine.' },
      { type: "mcq", q: 'First-line management of most uncomplicated prolapsed discs is:', options: ['Immediate surgery', 'Prolonged strict bed rest for weeks', 'Conservative care — analgesia, early mobilization and physiotherapy', 'Amputation'], answer: 2, rationale: 'Most discs settle with conservative measures; surgery is reserved for failure or serious deficit.' },
      { type: "mcq", q: 'Bracing for adolescent idiopathic scoliosis is generally indicated for:', options: ['Moderate progressive curves in a growing child', 'Very mild curves under 10°', 'Fully mature adults only', 'All curves regardless of size'], answer: 0, rationale: 'Bracing aims to halt progression of moderate curves during growth; severe curves need surgery.' },
      { type: "fill", q: 'Pain radiating from the back down the leg due to lumbar nerve-root compression is called ____.', accept: ['sciatica'], rationale: 'Sciatica follows the sciatic nerve distribution in disc prolapse.' },
      { type: "fill", q: 'Excessive outward curvature of the thoracic spine (\'hunchback\') is called ____.', accept: ['kyphosis'], rationale: 'Kyphosis is exaggerated posterior thoracic curvature.' }
    ]
  },

  /* ============ TOPIC 13 ============ */
  {
    id: 'ort-13-ortho-surgery',
    unit: 'Unit 5 · Spinal & Regional Disorders',
    title: 'Orthopedic Surgery & Nursing Care (Joint Replacement, Internal Fixation)',
    readMinutes: 26,
    summary: 'Common orthopedic operations — reduction and fixation, arthroplasty, arthrodesis, osteotomy — with the principles of ORIF and total joint replacement; and detailed pre- and postoperative nursing care, complication prevention and rehabilitation.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Common orthopedic operations', list: [
        'Reduction — closed (manipulation) or open (surgical) restoration of alignment.',
        'Internal fixation — plates, screws, intramedullary nails, wires, hip pins.',
        'External fixation — an external frame with pins, for open/complex fractures and infection.',
        'Arthroplasty — joint replacement (total or partial) or resurfacing.',
        'Arthrodesis — surgical fusion of a joint to abolish a painful/unstable joint.',
        'Osteotomy — cutting and realigning bone to correct deformity or redistribute load.',
        'Amputation, bone grafting, tendon repair and spinal fusion.'
      ] },
      { h: 'Closed vs open treatment of fractures', list: [
        'Closed treatment — closed reduction and external immobilization (cast, functional brace) or external fixation; no surgical opening of the fracture.',
        'Open treatment — open reduction and internal fixation (ORIF): the fracture is surgically exposed, aligned and held with metalwork, allowing rigid stability and early movement.'
      ] },
      { h: 'Open reduction and internal fixation (ORIF)', p: 'ORIF is used when a fracture is unstable, displaced, intra-articular or fails closed reduction. Its advantages are anatomical reduction, rigid fixation and early mobilization (reducing the complications of immobility). Its risks are those of any surgery plus infection of implanted metal, non-union and implant failure. Nursing care combines fracture and surgical nursing.' },
      { h: 'Total joint replacement (arthroplasty)', p: 'In total joint replacement the diseased joint surfaces are replaced with prosthetic components (e.g. total hip or total knee replacement), usually for advanced arthritis unrelieved by conservative care. The goal is pain relief and restored function. Success depends heavily on skilled postoperative nursing, early mobilization and prevention of the two feared complications: dislocation (hip) and infection.' },
      { h: 'General preoperative nursing care', list: [
        'Informed consent and clear explanation of the procedure and expected recovery.',
        'Preoperative assessment — history, examination, investigations (bloods, cross-match, X-ray, ECG/CXR as needed).',
        'Optimize the patient — treat infection, control diabetes and anaemia, improve nutrition, stop smoking.',
        'Skin preparation and marking of the operative site; screen for MRSA where indicated.',
        'Fasting per protocol; give prescribed premedication and prophylactic antibiotics.',
        'Teach postoperative exercises, breathing exercises, and use of aids and precautions in advance.',
        'Prepare the bed and equipment (e.g. abduction pillow for hip, CPM for knee).'
      ] },
      { h: 'General postoperative nursing care', list: [
        'Monitor vital signs, level of consciousness and oxygenation.',
        'Assess the wound and drains for bleeding; monitor drain output and blood loss.',
        'Neurovascular checks of the operated limb (5 Ps).',
        'Pain management (multimodal, often including regional analgesia).',
        'Fluid balance, and observation for shock and complications.',
        'Deep breathing, coughing and leg exercises; thromboprophylaxis (stockings, calf pumps, LMWH).',
        'Correct positioning and early, safe mobilization with physiotherapy.'
      ] },
      { h: 'Total hip replacement — dislocation precautions', p: 'Preventing prosthetic hip dislocation is a critical nursing responsibility in the early weeks. Teach and enforce the precautions (for the common posterior approach):', list: [
        'Do NOT flex the hip beyond 90° (avoid low chairs, bending to tie shoes).',
        'Do NOT adduct — keep an abduction pillow between the legs; do not cross the legs.',
        'Do NOT internally rotate the operated leg.',
        'Use raised toilet seats and chairs, and a pillow between the knees when turning.',
        'Report sudden pain, shortening or external rotation of the leg (signs of dislocation).'
      ] },
      { h: 'Total knee replacement — key nursing points', list: [
        'Early quadriceps and range-of-motion exercises; continuous passive motion (CPM) if prescribed.',
        'Manage swelling with elevation and ice; encourage active extension.',
        'Early weight-bearing and gait training as ordered.',
        'Wound and neurovascular monitoring; DVT prophylaxis.'
      ] },
      { h: 'Complications of orthopedic surgery', list: [
        'Bleeding and haematoma; shock.',
        'Infection — superficial or deep (peri-prosthetic infection is serious and may require revision).',
        'DVT and pulmonary embolism (high risk in joint surgery).',
        'Dislocation of a prosthesis (hip).',
        'Nerve/vessel injury; fat embolism.',
        'Non-union, malunion, implant loosening or failure.',
        'Pressure injury and other hazards of immobility.'
      ] },
      { h: 'Prevention of surgical complications', list: [
        'Strict asepsis, prophylactic antibiotics and wound surveillance to prevent infection.',
        'Aggressive thromboprophylaxis and early mobilization to prevent VTE.',
        'Neurovascular monitoring to detect nerve/vessel injury and compartment syndrome.',
        'Precautions and correct positioning to prevent dislocation.',
        'Chest physiotherapy and skin care to prevent pneumonia and pressure injury.'
      ] },
      { h: 'Rehabilitation and discharge planning', list: [
        'Progressive physiotherapy — strengthening, range of motion and gait training.',
        'Teach safe use of walking aids and adherence to precautions.',
        'Home adaptation (raised seats, grab rails, removal of hazards) via occupational therapy.',
        'Wound care, signs of infection/DVT to report, medication and follow-up.',
        'Set realistic goals; provide written instructions and arrange community support.'
      ] },
      { h: 'Total hip replacement precautions', figure: {
        caption: 'The core \'do-nots\' after total hip replacement — enforced to prevent early prosthetic dislocation.',
        svg: '<svg viewBox="0 0 560 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Total hip replacement precautions"><rect x="15" y="15" width="530" height="160" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><text x="280" y="42" text-anchor="middle" font-family="sans-serif" font-size="15" font-weight="700" fill="#0F4C3A">Hip Replacement — Prevent Dislocation</text><g font-family="sans-serif" font-size="12.5" fill="#0F4C3A"><rect x="40" y="58" width="230" height="34" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="80">No hip flexion beyond 90°</text><rect x="40" y="100" width="230" height="34" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="52" y="122">No crossing the legs (adduction)</text><rect x="290" y="58" width="230" height="34" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="80">No internal rotation</text><rect x="290" y="100" width="230" height="34" rx="6" fill="#DCFCE7" stroke="#22C55E"/><text x="302" y="122">Use abduction pillow</text></g><text x="280" y="160" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#15803D">Report sudden pain, shortening or external rotation of the leg</text></svg>'
      } }
    ],
    references: REF_ORT,
    examQuestions: [
      'Describe the common types of orthopedic surgery with their indications.',
      'Explain open reduction and internal fixation (ORIF) and its advantages.',
      'Discuss the pre- and postoperative nursing care of a patient undergoing total hip replacement.',
      'State the dislocation precautions after total hip replacement.',
      'List the complications of orthopedic surgery and their prevention.'
    ],
    assessment: [
      { type: "mcq", q: 'Surgical replacement of a diseased joint with a prosthesis is called:', options: ['Arthroplasty', 'Arthrodesis', 'Osteotomy', 'Arthroscopy'], answer: 0, rationale: 'Arthroplasty is joint replacement; arthrodesis is fusion and osteotomy is bone realignment.' },
      { type: "mcq", q: 'A major advantage of ORIF over closed treatment is:', options: ['No risk of infection', 'No anaesthesia needed', 'Rigid fixation permitting early mobilization', 'It never fails'], answer: 2, rationale: 'Rigid internal fixation restores anatomy and allows early movement, reducing immobility complications.' },
      { type: "mcq", q: 'After a posterior-approach total hip replacement, the patient must AVOID:', options: ['Keeping the legs apart', 'Flexing the hip beyond 90° and crossing the legs', 'Using a raised toilet seat', 'An abduction pillow'], answer: 1, rationale: 'Excess flexion, adduction and internal rotation can dislocate the prosthesis.' },
      { type: "mcq", q: 'Sudden pain with shortening and external rotation of the operated leg after hip replacement suggests:', options: ['Normal healing', 'Wound infection', 'Constipation', 'Prosthetic dislocation'], answer: 3, rationale: 'These are classic signs of hip prosthesis dislocation and require urgent reporting.' },
      { type: "mcq", q: 'The device used to maintain abduction after total hip replacement is a(n):', options: ['Abduction pillow', 'Footboard', 'Trochanter roll', 'Bed cradle'], answer: 0, rationale: 'An abduction pillow keeps the legs apart, preventing adduction and dislocation.' },
      { type: "mcq", q: 'Surgical fusion of a joint to relieve pain or instability is called:', options: ['Arthroplasty', 'Osteotomy', 'Arthrodesis', 'Laminectomy'], answer: 2, rationale: 'Arthrodesis fuses the joint, abolishing painful/unstable motion.' },
      { type: "mcq", q: 'The most serious infection after joint replacement is:', options: ['A superficial stitch abscess', 'Deep peri-prosthetic infection often needing revision', 'A urinary tract infection', 'A cold'], answer: 1, rationale: 'Deep infection around the implant is difficult to eradicate and may require prosthesis removal/revision.' },
      { type: "mcq", q: 'Continuous passive motion (CPM) is most commonly used after:', options: ['Total hip replacement', 'Amputation', 'Spinal fusion', 'Total knee replacement'], answer: 3, rationale: 'CPM maintains knee range of motion and reduces stiffness after knee replacement.' },
      { type: "mcq", q: 'Which measure most reduces venous thromboembolism after major joint surgery?', options: ['Prolonged bed rest', 'Fluid restriction', 'Early mobilization with mechanical and pharmacological prophylaxis', 'Warm compresses to the calf'], answer: 2, rationale: 'Early movement plus stockings/calf pumps and LMWH sharply lower VTE risk.' },
      { type: "mcq", q: 'An essential preoperative nursing action before elective joint replacement is to:', options: ['Optimize the patient (control diabetes/anaemia, treat infection) and teach exercises', 'Encourage smoking to relax the patient', 'Withhold all information', 'Avoid marking the operative site'], answer: 0, rationale: 'Optimization and preoperative teaching improve outcomes and reduce complications.' },
      { type: "fill", q: 'Open reduction with plates or screws to hold a fracture is abbreviated ____.', accept: ['ORIF', 'orif'], rationale: 'Open Reduction and Internal Fixation stabilizes unstable/displaced fractures.' },
      { type: "fill", q: 'After total hip replacement the hip should not be flexed beyond ____ degrees.', accept: ['90', 'ninety'], rationale: 'Flexion beyond 90° risks posterior dislocation of the prosthesis.' }
    ]
  },

  /* ============ TOPIC 14 ============ */
  {
    id: 'ort-14-congenital-metabolic-devices',
    unit: 'Unit 5 · Spinal & Regional Disorders',
    title: 'Congenital & Metabolic Bone Disorders (CTEV, Rickets, Osteoporosis) & Assistive Devices',
    readMinutes: 25,
    summary: 'Congenital and developmental disorders (clubfoot/CTEV, developmental dysplasia of the hip, cerebral palsy, spina bifida); metabolic bone disease (rickets/osteomalacia, osteoporosis); and the selection, fitting and safe use of orthopedic assistive and mobility devices.',
    youtubeId: "", tutor: "",
    notes: [
      { h: 'Congenital talipes equinovarus (CTEV / clubfoot)', p: 'CTEV is a common congenital foot deformity present at birth in which the foot is turned inward and downward. Its components are remembered as CAVE: Cavus (high arch), Adductus (forefoot), Varus (heel inward) and Equinus (ankle plantarflexed). It may be idiopathic or associated with neuromuscular disorders. Early treatment gives excellent results.' },
      { h: 'CTEV — management', list: [
        'Ponseti method (gold standard) — serial gentle manipulation and weekly plaster casting from the newborn period, usually with a percutaneous tenotomy of the Achilles tendon, followed by a foot-abduction brace (boots and bar) to prevent relapse.',
        'Surgery — soft-tissue release for resistant or late/neglected cases.',
        'Nursing role — parent support and education, meticulous cast care and neurovascular checks, and ensuring adherence to the long bracing schedule.'
      ] },
      { h: 'Developmental dysplasia of the hip (DDH)', list: [
        'Abnormal development with instability, subluxation or dislocation of the hip; risk factors include female sex, breech birth, family history and firstborn.',
        'Screening — Ortolani and Barlow tests in the newborn; ultrasound in infants; asymmetric skin folds and limited abduction.',
        'Management — a Pavlik harness holds the hips flexed and abducted in early infancy; later cases may need closed/open reduction and a hip spica cast.',
        'Nursing — teach harness/spica care, skin care and neurovascular checks; support parents.'
      ] },
      { h: 'Cerebral palsy and spina bifida (orthopedic aspects)', list: [
        'Cerebral palsy — a non-progressive motor disorder from perinatal brain injury; causes spasticity, contractures and deformity requiring physiotherapy, orthoses, botulinum toxin and corrective surgery.',
        'Spina bifida — a neural tube defect with lower-limb paralysis, deformity and sensory loss (risk of pressure injury and neuropathic feet); needs multidisciplinary care, skin protection, orthoses and mobility aids.'
      ] },
      { h: 'Rickets and osteomalacia', p: 'Rickets (in children) and osteomalacia (in adults) are metabolic disorders of defective bone mineralization, usually from vitamin D deficiency (poor diet, inadequate sunlight) or, less often, calcium/phosphate disturbance. Unmineralized osteoid makes bone soft and weak. In rickets the growth plates are affected, causing deformity.', list: [
        'Rickets — bowing of the legs (genu varum), delayed growth, bone pain, a \'rickety rosary\' at the costochondral junctions, and delayed dentition.',
        'Osteomalacia — bone pain, muscle weakness, and looser (pseudo-fractures).',
        'Management — vitamin D and calcium supplementation, sunlight exposure, dietary advice, and correction of any deformity.'
      ] },
      { h: 'Osteoporosis', p: 'Osteoporosis is a systemic skeletal disease of low bone mass and micro-architectural deterioration, causing fragile bones and low-trauma (fragility) fractures — classically of the hip, spine (vertebral crush) and wrist (Colles\'). Unlike osteomalacia, the bone that is present is normally mineralized but there is simply too little of it. It is often silent until a fracture occurs (\'the silent disease\').' },
      { h: 'Osteoporosis — risk factors and diagnosis', list: [
        'Risk factors — advancing age, postmenopausal oestrogen deficiency, female sex, low body weight, family history, smoking, excess alcohol, immobility, and long-term corticosteroids.',
        'Diagnosis — DEXA scan: a T-score of −2.5 or below defines osteoporosis (−1.0 to −2.5 is osteopenia).',
        'Management — calcium and vitamin D, weight-bearing exercise, bisphosphonates (e.g. alendronate) and other bone-protective drugs, and vigorous fall prevention.'
      ] },
      { h: 'Osteoporosis vs osteomalacia (comparison)', figure: {
        caption: 'Both weaken bone but differ fundamentally — quantity vs quality of mineralized bone.',
        svg: '<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Osteoporosis versus osteomalacia"><rect x="15" y="15" width="530" height="150" rx="12" fill="#F0FDF4" stroke="#0F4C3A" stroke-width="2"/><line x1="280" y1="48" x2="280" y2="155" stroke="#22C55E" stroke-width="1.5"/><text x="147" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Osteoporosis</text><text x="413" y="40" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="700" fill="#0F4C3A">Osteomalacia / Rickets</text><g font-family="sans-serif" font-size="11.5" fill="#15803D"><text x="30" y="72">Too LITTLE bone (low mass)</text><text x="300" y="72">Poorly MINERALIZED bone (soft)</text><text x="30" y="98">Bone normally mineralized</text><text x="300" y="98">Vitamin D / calcium defect</text><text x="30" y="124">Fragility fractures (hip, spine)</text><text x="300" y="124">Bone pain, deformity, weakness</text><text x="30" y="150">Bisphosphonates, Ca/vit D</text><text x="300" y="150">Vitamin D + calcium replacement</text></g></svg>'
      } },
      { h: 'Assistive and mobility devices', list: [
        'Crutches — axillary or forearm (elbow) crutches redistribute weight off a lower limb.',
        'Walkers/frames — maximum stability for the frail or early rehabilitation.',
        'Canes/walking sticks — for balance and minor support; held in the hand OPPOSITE the affected leg.',
        'Wheelchairs — for non-ambulant patients.',
        'Orthoses (splints, braces, calipers) and prostheses (artificial limbs).'
      ] },
      { h: 'Safe use of crutches', list: [
        'Fit — with axillary crutches there should be a 2–3 finger (about 5 cm) gap between the axilla and the crutch top; weight is borne on the HANDS, not the armpits, to avoid crutch (radial nerve) palsy.',
        'Elbows slightly flexed (~30°); tips fitted with rubber ferrules and kept dry.',
        'Common gaits — non-weight-bearing (swing-to/three-point), partial weight-bearing (two/three-point), and four-point for stability.',
        'Stairs teaching — \'up with the good, down with the bad\' (good leg leads going up, affected leg/crutches lead going down).'
      ] },
      { h: 'Nursing role in device use and safety', list: [
        'Ensure correct fit, height and maintenance of the device.',
        'Teach safe technique, transfers and appropriate gait; supervise until competent.',
        'Assess the environment for hazards; teach fall prevention.',
        'Inspect skin and pressure areas from braces/prostheses; teach skin care.',
        'Promote independence, confidence and adherence.'
      ] },
      { h: 'Health education and prevention', list: [
        'Adequate calcium, vitamin D and safe sunlight exposure across the lifespan.',
        'Weight-bearing exercise to build and maintain bone; avoid smoking and excess alcohol.',
        'Fall-proof the home (lighting, rails, remove rugs) especially for the elderly.',
        'Early screening and treatment of congenital deformity (newborn hip and foot checks).',
        'Adherence to bracing, orthoses and follow-up; report new pain, deformity or device problems.'
      ] }
    ],
    references: REF_ORT,
    examQuestions: [
      'Describe congenital talipes equinovarus (clubfoot) and its management by the Ponseti method.',
      'Compare rickets/osteomalacia with osteoporosis.',
      'Discuss the risk factors, diagnosis and management of osteoporosis.',
      'Describe the safe fitting and use of axillary crutches, including gaits and stairs.',
      'Explain the nursing role in the use of orthopedic assistive devices and fall prevention.'
    ],
    assessment: [
      { type: "mcq", q: 'The gold-standard treatment for idiopathic clubfoot (CTEV) is:', options: ['The Ponseti method of serial manipulation and casting', 'Immediate extensive surgery', 'A Pavlik harness', 'A DEXA scan'], answer: 0, rationale: 'Ponseti casting (with Achilles tenotomy and bracing) corrects most clubfeet without major surgery.' },
      { type: "mcq", q: 'The screening tests for developmental dysplasia of the hip in the newborn are:', options: ['Adam\'s and Cobb', 'Lasègue and Thomas', 'Ortolani and Barlow', 'Ortolani and Ponseti'], answer: 2, rationale: 'Ortolani and Barlow tests detect a dislocatable/reducible hip in the neonate.' },
      { type: "mcq", q: 'The device used to treat DDH in early infancy is the:', options: ['Thomas splint', 'Pavlik harness', 'Abduction pillow', 'Cock-up splint'], answer: 1, rationale: 'The Pavlik harness holds the hips flexed and abducted so the joint develops normally.' },
      { type: "mcq", q: 'Rickets is most commonly caused by deficiency of:', options: ['Vitamin C', 'Vitamin K', 'Iron', 'Vitamin D'], answer: 3, rationale: 'Vitamin D deficiency impairs calcium absorption and bone mineralization, causing rickets in children.' },
      { type: "mcq", q: 'The KEY difference between osteoporosis and osteomalacia is that in osteoporosis:', options: ['There is too little bone, but it is normally mineralized', 'Bone is poorly mineralized', 'There is excess bone', 'It only affects children'], answer: 0, rationale: 'Osteoporosis = reduced quantity of normally mineralized bone; osteomalacia = defective mineralization.' },
      { type: "mcq", q: 'A DEXA T-score that defines osteoporosis is:', options: ['Above −1.0', '−1.0 to −2.5', '−2.5 or below', 'Above +1.0'], answer: 2, rationale: 'A T-score of −2.5 or lower is diagnostic of osteoporosis; −1.0 to −2.5 is osteopenia.' },
      { type: "mcq", q: 'When walking with a cane, the patient should hold it in the hand:', options: ['On the same side as the affected leg', 'Opposite the affected leg', 'Either hand equally', 'Behind the back'], answer: 1, rationale: 'Holding the cane on the opposite side widens the base and shifts load off the affected limb.' },
      { type: "mcq", q: 'Weight when using axillary crutches should be borne on the:', options: ['Armpits', 'Elbows', 'Shoulders', 'Hands'], answer: 3, rationale: 'Pressure in the axilla can cause crutch (radial nerve) palsy; weight must rest on the hands.' },
      { type: "mcq", q: 'The correct teaching for climbing stairs with crutches is:', options: ['Down with the good, up with the bad', 'Both legs together always', 'Up with the good, down with the bad', 'Lead with the crutches going up'], answer: 2, rationale: '\'Up with the good, down with the bad\' keeps the strong leg leading upward and protects the affected leg.' },
      { type: "mcq", q: 'A postmenopausal woman with a low-trauma wrist (Colles\') fracture should be evaluated for:', options: ['Osteoporosis', 'Rickets', 'Septic arthritis', 'Clubfoot'], answer: 0, rationale: 'Fragility fractures of the wrist, hip and spine are hallmark presentations of osteoporosis.' },
      { type: "fill", q: 'The mnemonic for the components of clubfoot (cavus, adductus, varus, equinus) is ____.', accept: ['CAVE', 'cave'], rationale: 'CAVE summarizes the four deformity components of CTEV.' },
      { type: "fill", q: 'Fragile bones that break with minimal trauma, with normal mineralization but low mass, define ____.', accept: ['osteoporosis'], rationale: 'Osteoporosis reduces bone quantity, causing fragility fractures.' }
    ]
  }
];
